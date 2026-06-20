import { lib, game, ui, get, ai, _status } from '../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/千秋万载/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '千秋万载',
		content(config, pack) {
		},
		precontent(extensionOL) {
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '千秋万载',
					connect: true,
					character: {
						qqwz斩将攫石: ['male', 'qun', 7, ['qqwz_魔将', 'qqwz韧力', 'qqwz飞熊'], []],
						qqwz幻惑众心: ['male', 'qun', 6, ['qqwz_惑心', 'qqwz仙符'], []],
						qqwz专擅朝政: ['male', 'qun', 9, ['qqwz_酗酒', 'qqwz_色欲', 'qqwz_掌权', 'qqwz_暴凌'], ['zhu'], []],
						qqwz经达权变: ['male', 'qun', 7, ['qqwz_绝命', 'qqwz_危局', 'qqwz_暗幕'], []],
						qqwz汉末龙裔: ['male', 'qun', 7, ['qqwz_皇令', 'qqwz_定数'], ['zhu'], []],
						qqwz身陷囹圄: ['male', 'qun', 7, ['qqwz_谋诛'], []],
						qqwz月下琵琶: ['female', 'qun', 7, ['qqwz_离歌', 'qqwz_月琴', 'qqwz_长恨', 'qqwz胡笳'], []],
						qqwz妙笔为龙: ['male', 'qun', 7, ['qqwz_万化', 'qqwz_归魂', 'qqwz_仙道'], []],
						qqwz登极至尊: ['male', 'qun', 8, ['qqwz_谋篡', 'qqwz_妄尊', 'qqwz替汉', 'qqwz王权'], ['zhu'], []],
						qqwz真龙之意: ['male', 'qun', 7, ['qqwz_升龙', 'qqwz_飞燕', 'qqwz_排兵'], []],
						qqwz披坚持锐: ['male', 'qun', 8, ['qqwz_虎狼', 'qqwz骁勇'], []],
						qqwz驭魂千机: ['female', 'qun', 6, ['qqwz_傀儡', 'qqwz_驭魂', 'qqwz月魂', 'qqwz月尘', 'qqwz憾世'], []],
						qqwz不鏖遗民: ['male', 'qun', 7, ['qqwz_舍粮', 'qqwz_渡世', 'qqwz_顺道'], []],
						qqwz陷阵克敌: ['male', 'qun', 8, ['qqwz_将酒', 'qqwz_破敌', 'qqwz百战'], []],
						qqwz坐也思君: ['female', 'qun', 6, ['qqwz_计筹', 'qqwz_星蝶', 'qqwz巧智'], []],
						qqwz一战而就: ['male', 'qun', 7, ['qqwz_策定', 'qqwz_殉道'], []],
						qqwz孤注一掷: ['female', 'qun', 6, ['qqwz_威视', 'qqwz_牵连'], []],
						qqwz烈火焚城: ['male', 'qun', 7, ['qqwz_抵命', 'qqwz_毒谋', 'qqwz_火牢', 'qqwz_火刑', 'qqwz_破计', 'qqwz_诛族'], []],
						qqwz监军谋国: ['male', 'qun', 7, ['qqwz_缓图', 'qqwz_鸿鹄', 'qqwz凝烈'], []],
						qqwz眉颦笑浅: ['female', 'qun', 7, ['qqwz_隔墙', 'qqwz_投曹'], []],
						qqwz独饮醉卧: ['male', 'qun', 8, ['qqwz_罪业'], ['zhu'], []],
						qqwz祸乱朝纲: ['male', 'qun', 7, ['qqwz_乱国', 'qqwz祸言', 'qqwz祸常'], []],
						qqwz夜袭许昌: ['male', 'qun', 7, ['qqwz_并起'], []],
						qqwz师表海内: ['male', 'qun', 6, ['qqwz_让梨', 'qqwz_儒门', 'qqwz圣名'], []],
						qqwz刚直谏上: ['male', 'qun', 6, ['qqwz_秉忠', 'qqwz_孤援', 'qqwz风骨'], []],
						qqwz淯水香魂: ['female', 'qun', 6, ['qqwz_妖艳', 'qqwz_醉魂', 'qqwz慰安'], []],
						qqwz善战无前: ['male', 'qun', 9, ['qqwz_战神', 'qqwz_无前', 'qqwz鬼神'], []],
						qqwz威震塞外: ['male', 'qun', 8, ['qqwz_进击', 'qqwz_白马'], ['zhu'], []],
						qqwz吴王光耀: ['male', 'wu', 8, ['qqwz_英雄', 'qqwz_急援', 'qqwz_权衡'], ['zhu'], []],
						qqwz披星踏浪: ['male', 'wu', 7, ['qqwz_踏浪'], []],
						qqwz望君早归: ['female', 'wu', 6, ['qqwz_焦凤', 'qqwz_流年'], []],
						qqwz魅影剑舞: ['female', 'wu', 7, ['qqwz_鸳鸯', 'qqwz_影剑'], []],
						qqwz矫情之花: ['female', 'wu', 6, ['qqwz_绿荫', 'qqwz_花落', 'qqwz映花'], []],
						qqwz豪饮鲸吞: ['male', 'wu', 7, ['qqwz_铁壁', 'qqwz_冷血', 'qqwz_奋命'], []],
						qqwz魂佑江东: ['male', 'wu', 5, ['qqwz_睥睨', 'qqwz_魂佑'], ['zhu'], []],
						qqwz策马扬鞭: ['male', 'wu', 7, ['qqwz_转日', 'qqwz_军霸2', 'qqwz_卧虎'], ['zhu'], []],
						qqwz缔造联盟: ['male', 'wu', 6, ['qqwz_联盟', 'qqwz_人杰', 'qqwz_施财'], []],
						qqwz锦运绵长: ['male', 'wu', 6, ['qqwz_明谏', 'qqwz_修政', 'qqwz失远'], []],
						qqwz才猷蕴借: ['male', 'wu', 6, ['qqwz_合纵', 'qqwz_连横', 'qqwz_料敌'], []],
						qqwz杀身成仁: ['male', 'wu', 10, ['qqwz_致死', 'qqwz_引敌'], []],
						qqwz神行太保: ['male', 'wu', 7, ['qqwz_冷兵', 'qqwz_迅疾'], []],
						qqwz刹那芳华: ['female', 'wu', 6, ['qqwz_年华', 'qqwz_朝露'], []],
						qqwz溺酒残戮: ['male', 'wu', 8, ['qqwz_残戮', 'qqwz_血仇', 'qqwz_丧命'], ['zhu'], []],
						qqwz旋战回击: ['male', 'wu', 7, ['qqwz_凌风', 'qqwz_御风', 'qqwz风袭'], []],
						qqwz缘后雅志: ['female', 'wu', 6, ['qqwz_定心', 'qqwz_魂忆'], []],
						qqwz醉酒提矛: ['male', 'wu', 8, ['qqwz_佳酿', 'qqwz_烈火', 'qqwz炎焚'], []],
						qqwz旋击敌寇: ['male', 'wu', 8, ['qqwz_弓彰', 'qqwz_直入'], []],
						qqwz伏路断道: ['male', 'wu', 7, ['qqwz_毒箭', 'qqwz_缴械', 'qqwz_亡箭', 'qqwz_擒拿'], []],
						qqwz倚虎弄权: ['female', 'wu', 7, ['qqwz_矜持', 'qqwz_毁誉'], []],
						qqwz狂直之士: ['male', 'wu', 7, ['qqwz_耿直', 'qqwz_妙玄'], []],
						qqwz傲世轻物: ['male', 'wu', 6, ['qqwz_诱饵', 'qqwz岢将', 'qqwz诛敌'], []],
						qqwz安国将军: ['male', 'wu', 8, ['qqwz_安邦'], []],
						qqwz临阵献策: ['male', 'wu', 7, ['qqwz_阵邀', 'qqwz_相助'], []],
						qqwz宴诛权臣: ['male', 'wu', 8, ['qqwz_善学', 'qqwz_鸿宴', 'qqwz_王召', 'qqwz仁道'], ['zhu'], []],
						qqwz饕餮盛宴: ['male', 'wu', 6, ['qqwz_奢豪', 'qqwz_罪责'], []],
						qqwz溯江激战: ['male', 'wu', 10, ['qqwz_伺机', 'qqwz_白衣', 'qqwz苦读', 'qqwz激溯'], []],
						qqwz折冲将军: ['male', 'wu', 8, ['qqwz_锦帆', 'qqwz_合围'], []],
						qqwz英姿雄发: ['male', 'wu', 9, ['qqwz_霸业', 'qqwz_控局', 'qqwz_谋策'], []],
						qqwz烈焰燃天: ['male', 'wu', 8, ['qqwz_赤焰', 'qqwz_雅逊'], []],
						qqwz思君两欢: ['female', 'wu', 7, ['qqwz_妙心', 'qqwz_娇啸', 'qqwz君佑', 'qqwz卿月'], []],
						qqwz同气连枝: ['female', 'wu', 7, ['qqwz_芙蓉', 'qqwz_沉鱼', 'qqwz天韵'], []],
						qqwz盖世之才: ['male', 'wu', 7, ['qqwz_揣测', 'qqwz_英才', 'qqwz乱敌'], []],
						qqwz惊鸿绝艳: ['female', 'qun', 7, ['qqwz_蝎心', 'qqwz_乱政', 'qqwz女权', 'qqwz鸠酒'], []],
						qqwz战天斗地: ['male', 'wu', 8, ['qqwz_烈士', 'qqwz_酣战', 'qqwz惩恶'], []],
						qqwz洞口之战: ['male', 'wu', 7, ['qqwz_镇军', 'qqwz惑敌'], []],
						qqwz超然卓绝: ['male', 'wu', 7, ['qqwz_善民', 'qqwz优民'], []],
						qqwz忻忻得意: ['male', 'qun', 7, ['qqwz_篱下', 'qqwz_散财'], []],
						qqwz蓝田生玉: ['male', 'wu', 7, ['qqwz_狂傲', 'qqwz_杀令', 'qqwz_举国', 'qqws诏辅', 'qqwz兵败'], []],
						qqwz随能所任: ['male', 'wu', 6, ['qqwz_秉正', 'qqwz_慎重', 'qqwz忠贤'], []],
						qqwz破天焚舰: ['male', 'wu', 8, ['qqwz_牺牲', 'qqwz_诈曹', 'qqwz焚舰'], []],
						qqwz雍容雅步: ['female', 'wu', 6, ['qqwz_携手', 'qqwz_招亲', 'qqwz国母'], []],
						qqwz杵枪摧敌: ['male', 'qun', 8, ['qqwz_狮枪', 'qqwz雄狮'], ['zhu'], []],
						qqwz大贤良师: ['male', 'qun', 7, ['qqwz_雷鸣', 'qqwz_天道', 'qqwz太平', 'qqwz玄雷'], ['zhu'], []],
						qqwz蹯踞西疆: ['male', 'qun', 6, ['qqwz孤鹫', 'qqwz祸乱', 'qqwz逆击'], []],
						qqwz从容啸咤: ['male', 'qun', 7, ['qqwz_繁华', 'qqwz_汉室', 'qqwz据江', 'qqwz汉学'], ['zhu'], []],
						qqwz英风劲气: ['male', 'qun', 6, ['qqwz鞬骑'], []],
						qqwz游历吴中: ['male', 'wu', 5, ['qqwz鸿德', 'qqwz平反'], []],
						qqwz心术不正: ['male', 'qun', 6, ['qqwz妖道', 'qqwz通甲'], []],
						qqwz狡黠颖慧: ['female', 'qun', 6, ['qqwz魔姬', 'qqwz暗予'], ['zhu'], []],
						qqwz曲辞谄媚: ['male', 'qun', 7, ['qqwz_推卸', 'qqwz_谗言', 'qqwz破阵', 'qqwz谄辞'], []],
						qqwz仙山游医: ['male', 'qun', 5, ['qqwz_医心', 'qqwz_去病', 'qqwz医国', 'qqwz刮骨'], []],
						qqwz箭击曹营: ['male', 'qun', 8, ['qqwz_箭阵', 'qqwz_名门', 'qqwz豪贵', 'qqwz割据'], ['zhu'], []],
						qqwz宽释请命: ['male', 'wu', 6, ['qqwz释罪', 'qqwz诵书', 'qqwz请命', 'qqwz无责'], []],
						qqwz凰梦汉回: ['female', 'qun', 4, ['qqwz贤后', 'qqwz霓凰', 'qqwz凰龙'], ['zhu'], []],
						qqwz为夫弑敌: ['female', 'wu', 5, ['qqwz定卦', 'qqwz诛心', 'qqwz祸福', 'qqwz伏杀'], []],
						qqwz悍然嗜血: ['male', 'qun', 50, ['qqwz鳞甲', 'qqwz荒兽'], ['zhu'], []],
						qqwz挥剑驭火: ['male', 'wu', 4, ['qqwz陵营', 'qqwz无绝'], []],
						qqwz出镇江夏: ['male', 'qun', 5, ['qqwz求策', 'qqwz镇江'], ['zhu'], []],
						qqwz林历扬名: ['male', 'wu', 5, ['qqwz锐樾'], []],
						qqwz艳绝无双: ['female', 'qun', 6, ['qqwz仇绝', 'qqwz前尘'], []],
						qqwz如损如篪: ['male', 'wu', 5, ['qqwz索舟', 'qqwz锋戮'], []],
						qqwz山林隐士: ['male', 'qun', 3, ['qqwz知隐', 'qqwz水镜', 'qqwz明杰'], []],
						qqwz诗音共赏: ['male', 'qun', 4, ['qqwz肱骨', 'qqwz撰古', 'qqwz博通', 'qqwz德论'], []],
						qqwz摆宴欲诛: ['male', 'wu', 5, ['qqwz微审', 'qqwz斥公'], []],
					},
					skill: {
						qqwz_魔将: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_魔将2',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.source && event.source.countCards('he') && event.source != player;
							},
							forced: true,
							content() {
								'step 0';
								if (!trigger.source.hasSkill('fengyin')) {
									trigger.source.addTempSkill('fengyin', 'phaseAfter');
								}
								('step 1');
								player.recover();
								trigger.source.loseMaxHp();
							},
						},
						qqwz_魔将2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return player != event.player && Math.random() <= 0.2;
							},
							content() {
								trigger.player.die();
							},
						},
						qqwz_惑心: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_惑心2'],
							trigger: {
								player: 'phaseBefore',
							},
							_priority: 10,
							forced: true,
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return get.type(card) == 'trick';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.gain(game.createCard(event.card), 'gain2');
								}
								('step 2');
								var card = get.cardPile(function (card) {
									return get.type(card) == 'jiguan';
								});
								event.card = card;
								('step 3');
								if (event.card) {
									player.gain(game.createCard(event.card), 'gain2');
								}
								('step 4');
								var card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								event.card = card;
								('step 5');
								if (event.card) {
									player.gain(game.createCard(event.card), 'gain2');
								}
								('step 6');
								var card = get.cardPile(function (card) {
									return get.type(card) == 'food';
								});
								event.card = card;
								('step 7');
								if (event.card) {
									player.gain(game.createCard(event.card), 'gain2');
								}
							},
						},
						qqwz_惑心2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: ['phaseBegin', 'phaseEnd'],
							},
							check(event, player) {
								if (get.attitude(player, event.player) < -2) {
									var cards = player.getCards('h');
									if (cards.length > player.hp) return true;
									if (Array.isArray(cards)) for (const i of cards) {
										var useful = get.useful(i);
										if (useful < 5) return true;
										if (i.number > 9 && useful < 7) return true;
									}
								}
								return false;
							},
							logTarget: 'player',
							filter(event, player) {
								return player.hp < player.maxHp && event.player != player && player.countCards('h') > 0 && event.player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								if (result.bool) {
									trigger.player.loseHp();
								}
							},
						},
						qqwz_雷鸣: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'respond',
							},
							filter(event, player) {
								return event.card && event.card.name == 'shan';
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('qqwz_雷鸣')).ai = function (target) {
									return ai.get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
								};
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									target.judge(function (card) {
										if (target.hp == target.maxHp) {
											if (get.color(card) == 'red') return -1;
										}
										if (get.color(card) == 'red') return 1;
										return 0;
									});
								} else {
									event.finish();
								}
								('step 2');
								if (result.color) {
									if (result.color == 'red') {
										event.target.damage(2, 'thunder');
										player.recover(2);
									} else {
										event.target.damage(4, 'thunder');
										player.draw(3);
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan')) {
											var hastarget = game.hasPlayer(function (current) {
												return get.attitude(target, current) < 0;
											});
											var be = target.num('e', { color: 'black' });
											if (target.num('h', 'shan') && be) {
												if (!target.hasSkill('qqwz_天道')) return 0;
												return [0, hastarget ? target.countCards('he') / 2 : 0];
											}
											if (target.num('h', 'shan') && target.countCards('h') > 2) {
												if (!target.hasSkill('qqwz_天道')) return 0;
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
											if (!target.hasSkill('qqwz_天道')) return [1, 0.05];
											return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
										}
									},
								},
							},
						},
						qqwz_天道: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'judge',
							},
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('qqwz_天道'), 'he', function (card) {
										return get.color(card);
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
									trigger.player.judging[0] = result.cards[0];
									if (!get.owner(result.cards[0], 'judge')) {
										trigger.position.appendChild(result.cards[0]);
									}
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
								}
								('step 3');
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						qqwz_虎狼: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDrawBefore',
							},
							check(event, player) {
								if (player.countCards('h') > player.hp) return true;
								if (player.countCards('h') > 3) return true;
								return false;
							},
							content() {
								'step 0';
								player.draw(3);
								player.judge(ui.special);
								('step 1');
								player.gain(result.card);
								player.$gain2(result.card);
								player.addTempSkill('qqwz_虎狼2', 'phaseAfter');
								player.storage.qqwz_虎狼 = get.color(result.card);
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_虎狼2: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_虎狼3', 'qqwz_虎狼4'],
							enable: 'phaseUse',
							viewAs: {
								name: 'juedou',
								suit: 'diamond',
								number: 12,
							},
							filterCard(card, player) {
								return get.color(card) != player.storage.qqwz_虎狼;
							},
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								player.draw();
								player.recover();
							},
							ai: {
								basic: {
									order: 10,
									useful: 1,
									value: 4.5,
								},
								result: {
									target: -1.5,
									player(player, target) {
										if (ai.get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
											return 0;
										}
										var hs1 = targe.getCards('h', 'sha');
										var hs2 = playe.getCards('h', 'sha');
										if (hs1.length > hs2.length + 1) {
											return -2;
										}
										var hsx = target.getCards('h');
										if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
											return -2;
										}
										if (hsx.length > 3 && hs2.length == 0) {
											return -2;
										}
										if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
											return -2;
										}
										return -0.5;
									},
								},
								tag: {
									respond: 2,
									respondSha: 2,
									damage: 1,
								},
							},
						},
						qqwz_虎狼3: {
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'juedou';
							},
							content() {
								player.useCard(trigger.card, trigger.targets, false)._triggered = null;
								player.useCard(trigger.card, trigger.targets, false)._triggered = null;
							},
						},
						qqwz_虎狼4: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'juedou';
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						qqwz_箭阵: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_箭阵2',
							enable: 'phaseUse',
							viewAs: {
								name: 'wanjian',
							},
							filterCard(card, player) {
								if (ui.selected.cards.length) {
									return card.suit != ui.selected.cards[0].suit;
								}
								var cards = player.getCards('h');
								if (Array.isArray(cards)) for (const i of cards) {
									if (card != i) {
										if (card.suit != i.suit) return true;
									}
								}
								return false;
							},
							selectCard: 2,
							complexCard: true,
							check(card) {
								return 6 - get.value(card);
							},
							ai: {
								basic: {
									order: 10,
									useful: 1,
									value: 5,
								},
								wuxie(target, card, player, viewer) {
									if (get.attitude(viewer, target) > 0 && target.num('h', 'shan')) {
										if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
									}
								},
								result: {
									target(player, target) {
										if (player.hasUnknown(2)) return 0;
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
								},
							},
						},
						qqwz_箭阵2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'wanjian';
							},
							forced: true,
							content() {
								trigger.num++;
							},
						},
						qqwz_名门: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
								player.draw(2);
								player.recover(2);
							},
							mod: {
								targetEnabled(card, player, target, now) {
									if (card.name == 'lebu') return false;
								},
							},
						},
						qqwz_酗酒: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_酗酒2',
							enable: 'chooseToUse',
							filterCard(card, player) {
								return card.suit == 'spade';
							},
							viewAs: {
								name: 'jiu',
								suit: 'spade',
								number: 2,
							},
							viewAsFilter(player) {
								if (!player.num('h', { suit: 'spade' })) return false;
							},
							prompt: '将一张♠️️手牌当酒使用',
							check(card) {
								if (_status.event.type == 'dying') return 1;
								return 4 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									return player.num('h', { suit: 'spade' }) > 0 && player.hp <= 0;
								},
								threaten: 1.5,
								save: true,
								basic: {
									useful(card, i) {
										if (_status.event.player.hp > 1) {
											if (i == 0) return 5;
											return 1;
										}
										if (i == 0) return 7.3;
										return 3;
									},
									value(card, player) {
										if (player.hp > 1) {
											if (i == 0) return 5;
											return 1;
										}
										if (i == 0) return 7.3;
										return 3;
									},
								},
								order() {
									return lib.card.sha.ai.order + 0.2;
								},
								result: {
									target(player, target) {
										if (target && target.hp <= 0) return 2;
										if (lib.config.mode == 'stone' && !player.isMin()) {
											if (player.getActCount() + 1 >= player.actcount) return 0;
										}
										var shas = playe.getCards('h', 'sha');
										if (shas.length > 1 && player.getCardUsable('sha') > 1) {
											return 0;
										}
										var card;
										if (shas.length) {
											for (let i = 0; i < shas.length; i++) {
												if (lib.filter.filterCard(shas[i], target)) {
													card = shas[i];
													break;
												}
											}
										} else if (player.hasSha() && player.needsToDiscard()) {
											if (player.num('h', 'hufu') != 1) {
												card = { name: 'sha' };
											}
										}
										if (card) {
											if (
												game.hasPlayer(function (current) {
													return get.attitude(target, current) < 0 && target.canUse(card, current, true, true) && !current.num('e', 'baiyin') && ai.get.effect(current, card, target) > 0;
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
						qqwz_酗酒2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 3;
							},
							ai: {
								threaten: 1.3,
							},
						},
						qqwz_色欲: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player.sex == 'female';
							},
							content() {
								trigger.player.loseHp();
								trigger.player.loseMaxHp();
								trigger.player.turnOver();
								player.draw(2);
							},
						},
						qqwz_掌权: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && player.hp != player.maxHp;
							},
							content() {
								player.recover();
								player.loseMaxHp();
							},
							ai: {
								threaten: 0.5,
							},
						},
						qqwz_暴凌: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							content() {
								trigger.num += player.hp;
							},
						},
						qqwz_绝命: {
							group: 'qqwz_绝命2',
							global: 'qqwz_绝命3',
						},
						qqwz_绝命2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								var card = get.cards(10);
								var c = [];
								player.showCards(card);
								if (Math.random() <= 1) {
									for (let i = 0; i < card.length; i++) {
										if (get.color(card[i]) == 'black') c.push(card[i]);
									}
									player.gain(c);
								} else player.gain(card);
							},
						},
						qqwz_危局: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_危局2',
							usable: 1,
							enable: 'phaseUse',
							filter(event, player) {
								return !player.storage.qqwz_危局;
							},
							init(player) {
								player.storage.qqwz_危局 = false;
							},
							mark: true,
							intro: {
								content: 'limited',
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							selectTarget: -1,
							multitarget: true,
							multiline: true,
							content() {
								'step 0';
								player.unmarkSkill('qqwz_危局');
								player.storage.qqwz_危局 = false;
								event.current = player.next;
								('step 1');
								event.current.addTempClass('target');
								event.current.chooseToUse('危局:使用一张杀或流失两点体力', { name: 'sha' }, function (card, player, target) {
									if (player == target) return false;
									if (!player.canUse('sha', target)) return false;
									if (get.distance(player, target) <= 1) return true;
									if (
										game.hasPlayer(function (current) {
											return current != player && get.distance(player, current) < get.distance(player, target);
										})
									) {
										return false;
									}
									return true;
								});
								('step 2');
								if (result.bool == false) event.current.loseHp(2);
								if (event.current.next != player) {
									event.current = event.current.next;
									event.goto(1);
								}
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
											if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
										}
										var num = 0;
										var players = game.filterPlayer();
										for (const i of players) {
											var att = get.attitude(player, i);
											if (att > 0) att = 1;
											if (att < 0) att = -1;
											if (i != player && i.hp <= 3) {
												if (i.countCards('h') == 0) num += att / i.hp;
												else if (i.countCards('h') == 1) num += att / 2 / i.hp;
												else if (i.countCards('h') == 2) num += att / 4 / i.hp;
											}
											if (i.hp == 1) num += att * 1.5;
										}
										if (player.hp == 1) {
											return -num;
										}
										if (player.hp == 2) {
											return -game.players.length / 4 - num;
										}
										return -game.players.length / 3 - num;
									},
								},
							},
						},
						qqwz_暗幕: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_暗幕2',
							trigger: {
								global: 'recoverBefore',
							},
							forced: true,
							filter(event, player) {
								return player != event.player && Math.random() <= 1;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							mod: {
								targetEnabled(card) {
									if ((get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'black') return false;
								},
							},
						},
						qqwz_危局2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								player.useCard(trigger.card, trigger.targets, false)._triggered = null;
							},
						},
						qqwz_绝命3: {
							mod: {
								cardSavable(card, player) {
									if (!_status.currentPhase) return;
									if (_status.currentPhase.getCards('s').includes('qqwz_绝命') && _status.currentPhase != player) {
										if (card.name == 'tao' && _status.event.dying != player) return false;
									}
								},
							},
						},
						qqwz_暗幕2: {
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						qqwz_万化: {
							init(player) {
								player.storage.qqwz_万化 = {
									list: [],
									owned: {},
									player: player,
								};
							},
							get(player, num) {
								if (typeof num != 'number') num = 2;
								while (num-- > 0) {
									var name = player.storage.qqwz_万化.list.randomRemove();
									var skills = lib.character[name][3].slice(0);
									for (let i = 0; i < skills.length; i++) {
										var info = lib.skill[skills[i]];
										if (info.unique && !info.gainable) {
											skills.splice(i--, 1);
										}
									}
									player.storage.qqwz_万化.owned[name] = skills;
									player.popup(name);
									game.log(player, '获得了一个化身');
								}
							},
							group: ['qqwz_万化2', 'qqwz_万化3'],
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
										for (let i = 1; i < list.length; i++) {
											str += '、' + get.translation(list[i]);
										}
									}
									var skill = player.additionalSkills.qqwz_万化[0];
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
									var skill = player.additionalSkills.qqwz_万化[0];
									if (skill) {
										dialog.add('<div><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>');
									}
								},
							},
							mark: true,
						},
						qqwz_万化2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: ['gameStart', 'phaseBefore'],
							},
							forced: true,
							popup: false,
							_priority: 10,
							filter(event, player) {
								return !player.storage.qqwz_万化inited;
							},
							content() {
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
										player.storage.qqwz_万化.list.push(i);
									}
								}
								for (const i of game.players) {
									player.storage.qqwz_万化.list.remove([i.name]);
									player.storage.qqwz_万化.list.remove([i.name1]);
									player.storage.qqwz_万化.list.remove([i.name2]);
								}
								lib.skill.qqwz_万化.get(player, 5);
								player.storage.qqwz_万化inited = true;
							},
						},
						qqwz_万化3: {
							audio: 'ext:千秋万载/audio:2',
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
								var slist = player.storage.qqwz_万化.owned;
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
											var mark = player.marks.qqwz_万化;
											if (trigger.name == 'game') {
												mark.hide();
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
													}, 50);
												}, 500);
											} else {
												if (mark.firstChild) {
													mark.firstChild.remove();
												}
												mark.setBackground(currentname, 'character');
											}
											player.addAdditionalSkill('qqwz_万化', link);
											game.log(player, '获得技能', '【' + get.translation(link) + '】');
											player.popup(link);
											for (let i = 0; i < event.dialog.buttons.length; i++) {
												if (event.dialog.buttons[i].classList.contains('selected')) {
													var name = event.dialog.buttons[i].link;
													player.sex = lib.character[name][0];
													player.group = lib.character[name][1];
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
													for (let i = 0; i < skills.length; i++) {
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
													for (let i = 0; i < list.length; i++) {
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
									for (let i = 0; i < event.dialog.buttons.length; i++) {
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
											for (let i = 0; i < event.dialog.buttons.length; i++) {
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
										for (let i = 0; i < event.dialog.buttons.length; i++) {
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
							},
						},
						qqwz_归魂: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: ['damageEnd', 'loseHp', 'loseMaxHp', 'recoverEnd', 'gainMaxHpEnd'],
							},
							forced: true,
							filter(event, player) {
								return player.storage.qqwz_万化 && player.storage.qqwz_万化.list && player.storage.qqwz_万化.list.length;
							},
							content() {
								for (let i = 0; i < trigger.num; i++) {
									lib.skill.qqwz_万化.get(player);
								}
							},
						},
						qqwz_仙道: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_仙道2',
							trigger: {
								player: 'phaseAfter',
							},
							forced: true,
							init(player) {
								player.storage.qqwz_仙道 = [];
							},
							intro: {
								content: 'characters',
							},
							content() {
								'step 0';
								'step 1';
								var list = [];
								var list2 = [];
								var players = game.players.concat(game.dead);
								for (const i of players) {
									list2.add(i.name);
									list2.add(i.name1);
									list2.add(i.name2);
								}
								for (var i in lib.character) {
									if (player.storage.qqwz_仙道.includes(i)) continue;
									if (list2.includes(i)) continue;
									list.push(i);
								}
								var name = list.randomGet();
								player.storage.qqwz_仙道.push(name);
								player.markSkill('qqwz_仙道');
								var skills = lib.character[name][3];
								for (let i = 0; i < skills.length; i++) {
									player.addSkill(skills[i]);
								}
								event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【仙道】', [[name], 'character']);
								('step 2');
								event.dialog.close();
							},
						},
						qqwz_仙道2: {
							audio: 'ext:千秋万载/audio:2',
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard(card, player) {
								return get.color(card) == 'red';
							},
							position: 'hej',
							viewAs: {
								name: 'tao',
								suit: 'diamond',
								number: 5,
							},
							viewAsFilter(player) {
								if (!player.num('hej', { color: 'red' })) return false;
							},
							prompt: '将一张红色牌当桃使用',
							check(card) {
								return 4 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									if (!player.num('hej', { color: 'red' })) return false;
								},
								respondSha: true,
								basic: {
									useful: [5, 1],
									value: [5, 1],
									order(card, player) {
										if (player.hasSkillTag('pretao')) return 5;
										return 2;
									},
								},
								order: 3,
								result: {
									target(player, target) {
										if (player.hasSkill('jiu') && !target.num('e', 'baiyin')) {
											if (get.attitude(player, target) > 0) {
												return -6;
											}
											return -3.05;
										}
										return -1.55;
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
									recover: 1,
									save: 1,
								},
							},
						},
						qqwz_离歌: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								return event.card && event.source && event.player.classList.contains('dead') == false && player.countCards('he');
							},
							forced: true,
							check(event, player) {
								var att1 = get.attitude(player, event.player);
								var att2 = get.attitude(player, event.source);
								return att1 > att2 && att1 >= 0 && player != event.source;
							},
							content() {
								'step 0';
								player.draw(1);
								var next = player.chooseToDiscard('he', get.prompt('qqwz_离歌'));
								next.set('ai', ai.get.unuseful2);
								('step 1');
								if (result.bool) {
									trigger.player.judge();
								} else {
									event.finish();
								}
								('step 2');
								switch (result.card.suit) {
									case 'heart':
										trigger.player.recover(2);
										break;
									case 'diamond':
										trigger.player.draw(3);
										break;
									case 'club':
										trigger.source.chooseToDiscard('he', 5, true);
										break;
									case 'spade':
										trigger.source.loseHp(2);
										break;
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						qqwz_月琴: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.card && event.source && event.player.classList.contains('dead') == false && player.countCards('he');
							},
							forced: true,
							check(event, player) {
								var att1 = get.attitude(player, event.player);
								var att2 = get.attitude(player, event.source);
								return att1 > att2 && att1 >= 0;
							},
							content() {
								'step 0';
								var next = player.chooseToDiscard('he', get.prompt('qqwz_月琴'));
								next.set('ai', ai.get.unuseful2);
								('step 1');
								if (result.bool) {
									trigger.player.judge();
								} else {
									event.finish();
								}
								('step 2');
								switch (result.card.suit) {
									case 'heart':
										trigger.player.turnOver();
										break;
									case 'diamond':
										trigger.player.loseHp(1);
										break;
									case 'club':
										player.gainMaxHp(2);
										break;
									case 'spade':
										player.recover(2);
										break;
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						qqwz_长恨: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.isIn();
							},
							content() {
								trigger.source.clearSkills();
								const next = game.createEvent('diex', false);
								next.source = player;
								next.player = trigger.source;
								next._triggered = null;
								next.restMap = { type: null, count: null, audio: null };
								next.excludeMark = [];
								next.setContent('die');
							},
							ai: {
								threaten(player, target) {
									if (target.hp == 1) return 0.2;
									return 1.5;
								},
								effect: {
									target(card, player, target, current) {
										if (!target.hasFriend()) return;
										if (target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
									},
								},
							},
						},
						qqwz_谋诛: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_谋诛2', 'qqwz_谋诛3'],
							trigger: {
								player: 'shaBegin',
							},
							check(event, player) {
								return get.attitude(player, event.target) < 0;
							},
							content() {
								player.draw(2);
								if (!trigger.target.hasSkill('fengyin')) {
									trigger.target.addTempSkill('fengyin', 'phaseAfter');
								}
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 2;
								},
							},
						},
						qqwz_谋诛2: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								if (event.player.getCards('h').length == 0) return true;
							},
							forced: true,
							content() {
								trigger.num += 5;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (target.getCards('h').length == 0) return [1, -2];
									},
								},
							},
						},
						qqwz_谋诛3: {
							trigger: {
								player: 'useCard',
							},
							forced: true,
							_priority: 10,
							content() {
								player.addTempSkill('unequip', 'useCardAfter');
							},
						},
						qqwz_皇令: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterCard: true,
							selectCard: -1,
							filterTarget(card, player, target) {
								return player != target;
							},
							discard: false,
							prepare: 'give2',
							ai: {
								order: 1,
								result: {
									player: 0,
									target(player, target) {
										if (player.countCards('h') > 1) {
											return 1;
										}
										var players = game.filterPlayer();
										for (const i of players) {
											if (i.countCards('h') && i != target && i != player && get.attitude(player, i) < 0) {
												break;
											}
										}
										if (i == players.length) {
											return 1;
										}
										return -2 / (target.countCards('h') + 1);
									},
								},
							},
							content() {
								'step 0';
								event.target1 = targets[0];
								targets[0].gain(cards, player);
								var players = game.filterPlayer();
								for (const i of players) {
									if (i.countCards('h') && i != event.target1 && i != player) {
										break;
									}
								}
								if (i == players.length) {
									event.finish();
								}
								('step 1');
								player
									.chooseTarget(true, '选择拼点目标', function (card, player, target) {
										return target.countCards('h') && target != _status.event.target1 && target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										var eff = ai.get.effect(target, { name: 'sha' }, _status.event.target1, player);
										var att = get.attitude(player, target);
										if (att > 0) {
											return eff - 10;
										}
										return eff;
									})
									.set('target1', event.target1);
								('step 2');
								if (result.targets.length) {
									event.target2 = result.targets[0];
									event.target1.line(event.target2);
									event.target1.chooseToCompare(event.target2);
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									event.target1.useCard({ name: 'sha' }, event.target2);
									event.target2.die();
									player.draw(2);
								} else {
									event.target2.useCard({ name: 'sha' }, event.target1);
									event.target1.die();
									player.draw(2);
								}
							},
						},
						qqwz_定数: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_定数2', 'qqwz_定数3', 'qqwz_定数4'],
							trigger: {
								target: 'shaBegin',
							},
							check(event, player) {
								var cards = player.getCards('h');
								if (cards.length <= 2) {
									if (Array.isArray(cards)) for (const i of cards) {
										if (i.name == 'shan' || i.name == 'tao') return false;
									}
								}
								return true;
							},
							content() {
								player.draw(2);
								trigger.untrigger();
								trigger.finish();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha') return [1, 0.5];
									},
								},
							},
						},
						qqwz_定数2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							_priority: -500,
							content() {
								if (trigger.num > 1) trigger.num = 1;
							},
						},
						qqwz_定数3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_定数4: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.nature;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								player.draw(2);
							},
						},
						qqwz_谋篡: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							check(event, player) {
								var att = get.attitude(player, event.player);
								return !game.hasPlayer(function (current) {
									return get.attitude(player, current) < att;
								});
							},
							filter(event, player) {
								return event.player != player && !player.storage.qqwz_谋篡;
							},
							content() {
								player.draw(2);
								player.gainMaxHp();
								player.chooseToUse({ name: 'juedou' }, '谋篡:是否使用一张决斗？');
							},
							ai: {
								expose: 0.2,
							},
							intro: {
								content: 'player',
							},
						},
						qqwz_妄尊: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_妄尊2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += player.maxHp;
							},
						},
						qqwz_妄尊2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_狮枪: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_狮枪2', 'qqwz_狮枪3'],
							trigger: {
								player: 'shaBegin',
							},
							check(event, player) {
								return get.attitude(player, event.target) < 0;
							},
							content() {
								player.draw(2);
								if (!trigger.target.hasSkill('fengyin')) {
									trigger.target.addTempSkill('fengyin', 'phaseAfter');
								}
							},
							mod: {
								globalFrom(from, to) {
									if (from.hp > to.hp) return -Infinity;
								},
							},
						},
						qqwz_狮枪2: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_狮枪闪',
							trigger: {
								source: 'damageEnd',
							},
							_priority: 10,
							forced: true,
							content() {
								'step 0';
								player.recover();
								var card = get.cardPile(function (card) {
									return get.type(card) == 'basic';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.gain(game.createCard(event.card), 'gain2');
								}
							},
						},
						qqwz_狮枪3: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
							},
							forced: true,
							content() {
								trigger.num += 3;
							},
							mod: {
								selectTarget(card, player, range) {
									if (card.name == 'sha') range[1] += 3;
								},
							},
						},
						qqwz_升龙: {
							group: ['qqwz_升龙_sha', 'qqwz_升龙_shan', 'qqwz_升龙_draw'],
							subSkill: {
								draw: {
									trigger: {
										player: ['useCard', 'respond'],
									},
									forced: true,
									popup: false,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										if (!get.zhu(player, 'shouyue')) return false;
										return event.skill == 'qqwz_升龙_sha' || event.skill == 'qqwz_升龙_shan';
									},
									content() {
										player.draw();
										player.storage.fanghun2++;
									},
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + 2;
										},
									},
								},
								sha: {
									audio: 'ext:千秋万载/audio:2',
									enable: ['chooseToUse', 'chooseToRespond'],
									filterCard: {
										name: 'shan',
									},
									viewAs: {
										name: 'sha',
										suit: 'diamond',
										number: 5,
									},
									viewAsFilter(player) {
										if (!player.countCards('h', 'shan')) return false;
									},
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
											if (!player.countCards('h', 'shan')) return false;
										},
										order() {
											return get.order({ name: 'sha' }) + 0.1;
										},
										useful: -1,
										value: -1,
										basic: {
											useful: [5, 1],
											value: [5, 1],
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
								shan: {
									audio: 'ext:千秋万载/audio:2',
									enable: ['chooseToRespond'],
									filterCard: {
										name: 'sha',
									},
									viewAs: {
										name: 'shan',
									},
									prompt: '将一张杀当闪打出',
									check() {
										return 1;
									},
									viewAsFilter(player) {
										if (!player.countCards('h', 'sha')) return false;
									},
									ai: {
										respondShan: true,
										skillTagFilter(player) {
											if (!player.countCards('h', 'sha')) return false;
										},
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'respondShan') && current < 0) return 0.6;
											},
										},
										order: 4,
										useful: -1,
										value: -1,
										basic: {
											useful: [7, 2],
											value: [7, 2],
										},
									},
								},
							},
						},
						qqwz_飞燕: {
							group: ['qqwz_飞燕2', 'qqwz_飞燕3', 'qqwz_飞燕4'],
							ai: {
								mingzhi: false,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
											if (get.attitude(target, player) <= 0) {
												if (current > 0) return;
												if (target.countCards('h') == 0) return 1.6;
												if (target.countCards('h') == 1) return 1.2;
												if (target.countCards('h') == 2) return [0.8, 0.2, 0, -0.2];
												return [0.4, 0.7, 0, -0.7];
											}
										}
									},
								},
							},
						},
						qqwz_飞燕2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'shaBefore',
							},
							filter(event, player) {
								if (event.skill != 'qqwz_升龙_sha') return false;
								return event.target.countCards('h') > 0;
							},
							logTarget: 'target',
							content() {
								var card = trigger.target.getCards('h').randomGet();
								player.gain(card, trigger.target);
								trigger.target.$giveAuto(card, player);
							},//QQQ
						},
						qqwz_飞燕3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'respond',
							},
							filter(event, player) {
								if (event.skill != 'qqwz_飞燕_shan' && event.skill != 'qqwz_飞燕_sha') return false;
								return event.source && event.source.countCards('h') > 0;
							},
							logTarget: 'source',
							content() {
								var card = trigger.source.getCards('h').randomGet(2);
								player.gain(card, trigger.source, 2);
								trigger.source.$giveAuto(card, player);
							},
						},
						qqwz_飞燕4: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'respond',
							},
							filter(event, player) {
								return event.card && event.card.name == 'shan' && player.hasSha();
							},
							forced: true,
							content() {
								player.chooseToUse({ name: 'sha' }, '飞燕:是否使用一张杀？');
							},
						},
						qqwz_排兵: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: ['shaBegin', 'juedouBegin'],
							},
							forced: true,
							content() {
								'step 0';
								player.chooseControl('摸牌', '加伤害', 'cancel2').set('prompt', get.prompt('qqwz_排兵'));
								('step 1');
								if (result.control && result.control != 'cancel2') {
									var nd = player.countCards('he');
									if (result.control == '摸牌') {
										player.draw(2);
										player.recover(2);
									} else {
										player.addTempSkill('qqwz_排兵2', 'useCardToAfter');
										player.storage.qqwz_排兵 = nd;
									}
								}
							},
						},
						qqwz_排兵2: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							content() {
								if (typeof player.storage.qqwz_排兵 == 'number') {
									trigger.num += player.storage.qqwz_排兵;
								}
							},
						},
						qqwz_傀儡: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.maxHp >= 5;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							filterCard: true,
							position: 'he',
							content() {
								player.loseMaxHp(5);
								player.gain(target.getCards('hej'), target);
								target.$give(target.countCards('hej'), player);
								player.storage.qqwz_傀儡 = target;
								target.die();
							},
							check(card) {
								return 8 - get.value(card);
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.classList.contains('turnedover')) return 10;
										return 0;
									},
									target(player, target) {
										if (target.countCards('h') > target.hp) return target.hp - target.countCards('h');
										return 0;
									},
								},
								threaten: 1.5,
								effect: {
									target(card) {
										if (card.name == 'guiyoujie') return [0, 2];
									},
								},
							},
						},
						qqwz_驭魂: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return get.type(card) == 'trick';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.recover();
									player.gainMaxHp();
									player.gain(game.createCard(event.card), 'gain2');
								}
							},
						},
						qqwz_蝎心: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							filter(event, player) {
								return event.player != player && player.countCards('h') > 0;
							},
							forced: true,
							content() {
								'step 0';
								var next = player.chooseToDiscard(get.prompt('qqwz_蝎心', trigger.player));
								('step 1');
								if (result.bool) {
									trigger.player.damage(2)._triggered = null;
									trigger.player.loseHp();
									trigger.player.addTempSkill('qqwz_蝎心2', 'phaseAfter');
								} else {
									event.finish();
								}
							},
							ai: {
								threaten: 2,
								expose: 0.3,
							},
						},
						qqwz_蝎心2: {
							trigger: {
								player: 'recoverBefore',
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_乱政: {
							trigger: {
								source: 'dieAfter',
							},
							forced: true,
							filter(event, player) {
								return !player.hasSkill('qqwz_乱政2');
							},
							content() {
								player.addSkill('qqwz_乱政2');
							},
						},
						qqwz_乱政2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							_priority: -50,
							content() {
								player.removeSkill('qqwz_乱政2');
								player.phase('nodelay');
								player.draw(3);
							},
						},
						qqwz_狮枪闪: {
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
							},
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.directHit = true;
							},
						},
						qqwz_舍粮: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_舍粮2', 'qqwz_舍粮3'],
							trigger: {
								player: ['phaseEnd', 'phaseUseBegin'],
							},
							init(player) {
								player.storage.qqwz_舍粮 = [];
							},
							filter(event, player) {
								return !player.storage.qqwz_舍粮 || !player.storage.qqwz_舍粮.length;
							},
							intro: {
								content: 'cards',
							},
							content() {
								'step 0';
								player.draw(5);
								player.chooseCard(5, 'he', true, '选择五张牌作为<粮>');
								('step 1');
								player.storage.qqwz_舍粮 = result.cards;
								player.lose(result.cards, ui.special);
								player.markSkill('qqwz_舍粮');
							},
						},
						qqwz_渡世: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageEnd',
								source: 'damageEnd',
							},
							filter(event, player) {
								return player.storage.qqwz_舍粮 && player.storage.qqwz_舍粮.length && event.player.isAlive();
							},
							forced: true,
							content() {
								'step 0';
								trigger.player.chooseCardButton('选择获得一张<粮>', player.storage.qqwz_舍粮);
								('step 1');
								if (result.bool) {
									trigger.player.gain(result.links[0], 'draw2', 'log');
									player.storage.qqwz_舍粮.remove(result.links[0]);
									if (player.storage.qqwz_舍粮.length == 0) {
										player.recover(9999);
										player.draw(3);
										player.unmarkSkill('qqwz_舍粮');
									} else {
										player.markSkill('qqwz_舍粮');
									}
								}
							},
						},
						qqwz_顺道: {
							enable: 'phaseUse',
							audio: 'ext:千秋万载/audio:2',
							filterTarget: true,
							filter(event, player) {
								return player.storage.qqwz_舍粮.length;
							},
							content() {
								'step 0';
								player.chooseCardButton(player.storage.qqwz_舍粮, true);
								('step 1');
								var card = result.links[0];
								player.discard(card);
								player.storage.qqwz_舍粮.remove(card);
								if (!player.storage.qqwz_舍粮.length) {
									player.unmarkSkill('qqwz_舍粮');
								} else {
									player.markSkill('qqwz_舍粮');
								}
								('step 2');
								target.draw(2);
							},
						},
						qqwz_舍粮2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseUseBgein',
							},
							filter(event, player) {
								return !player.storage.qqwz_舍粮 || !player.storage.qqwz_舍粮.length;
							},
							intro: {
								content: 'cards',
							},
							content() {
								'step 0';
								player.draw(5);
								player.chooseCard(5, 'he', true, '选择两张牌作为<粮>');
								('step 1');
								player.storage.qqwz_舍粮 = result.cards;
								player.lose(result.cards, ui.special);
								player.markSkill('qqwz_舍粮');
							},
						},
						qqwz_舍粮3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_计筹: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.num('he', { type: 'equip' }) > 0;
							},
							content() {
								'step 0';
								player
									.chooseToDiscard(get.prompt('qqwz_计筹'), [1, player.num('he', { type: 'equip' })], 'he', function (card) {
										return get.type(card) == 'equip';
									})
									.set('ai', function (card) {
										if (card.name == 'bagua') return 10;
										return 7 - get.value(card);
									});
								('step 1');
								if (result.bool) {
									event.cards = get.cards(5 * result.cards.length);
									player.showCards(event.cards);
								} else {
									event.finish();
								}
								('step 2');
								var gained = [];
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (get.type(i, 'trick') == 'trick') {
										gained.push(i);
									} else {
										ui.discardPile.appendChild(i);
									}
								}
								player.gain(gained, 'gain2');
							},
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
							ai: {
								threaten: 1.5,
							},
						},
						qqwz_星蝶: {
							inherit: 'bagua_skill',
							filter(event, player) {
								if (!lib.skill.bagua_skill.filter(event, player)) return false;
								if (player.getEquips(2)) return false;
								return true;
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (player == target && get.subtype(card) == 'equip2') {
											if (ai.get.equipValue(card) <= 7.5) return 0;
										}
										if (target.getEquips(2)) return;
										return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
									},
								},
							},
							mod: {
								maxHandcard(player, num) {
									if (player.getEquips(3) || player.getEquips(4)) return;
									return (num += player.hp);
								},
								targetInRange(card, player, target, now) {
									if (player.getEquips(5)) return;
									var type = get.type(card);
									if (type == 'trick' || type == 'delay') return true;
								},
							},
							trigger: {
								player: 'chooseToRespondBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_星蝶2',
							check(event, player) {
								if (ai.get.damageEffect(player, event.player, player) >= 0) return false;
								return true;
							},
							content() {
								'step 0';
								player.judge('bagua', function (card) {
									return get.color(card) == 'red' ? 1.5 : -0.5;
								});
								('step 1');
								if (result.judge > 0) {
									trigger.untrigger();
									trigger.responded = true;
									trigger.result = { bool: true, card: { name: 'shan' } };
								}
							},
						},
						qqwz_星蝶2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'trick' && event.cards[0] && event.cards[0] == event.card;
							},
							content() {
								var list = get.typeCard('trick');
								if (list.length) {
									player.gain(game.createCard(list.randomGet()), 'gain2');
								}
							},
							ai: {
								threaten: 1.4,
							},
						},
						qqwz_将酒: {
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'jiu' && _status.event.skill != 'qqwz_将酒') return false;
								},
								cardUsable(card, player) {
									if (card.name == 'jiu' && _status.event.skill != 'qqwz_将酒') return false;
								},
								cardRespondable(card, player) {
									if (card.name == 'jiu' && _status.event.skill != 'qqwz_将酒') return false;
								},
								cardSavable(card, player) {
									if (card.name == 'jiu' && _status.event.skill != 'qqwz_将酒') return false;
								},
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.num('h', 'jiu') > 0;
							},
							filterCard: {
								name: 'jiu',
							},
							viewAs: {
								name: 'juedou',
							},
							viewAsFilter(player) {
								if (!player.num('h', 'jiu')) return false;
							},
							check() {
								return 1;
							},
							ai: {
								skillTagFilter(player) {
									if (!player.num('h', 'jiu')) return false;
								},
								respondSha: true,
								order: 4,
								useful: -1,
								value: -1,
								basic: {
									order: 5,
									useful: 1,
									value: 4.5,
								},
								result: {
									target: -1.5,
									player(player, target) {
										if (ai.get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
											return 0;
										}
										var hs1 = targe.getCards('h', 'sha');
										var hs2 = playe.getCards('h', 'sha');
										if (hs1.length > hs2.length + 1) {
											return -2;
										}
										var hsx = target.getCards('h');
										if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
											return -2;
										}
										if (hsx.length > 3 && hs2.length == 0) {
											return -2;
										}
										if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
											return -2;
										}
										return -0.5;
									},
								},
								tag: {
									respond: 2,
									respondSha: 2,
									damage: 1,
								},
							},
						},
						qqwz_破敌: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('h') > 0;
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									player.storage.qqwz_破敌 = target;
									player.addTempSkill('qqwz_破敌2', 'phaseAfter');
									player.addTempSkill('qqwz_破敌4', 'phaseAfter');
								} else {
									player.addTempSkill('qqwz_破敌3', 'phaseAfter');
								}
							},
							ai: {
								order(name, player) {
									var cards = player.getCards('h');
									if (player.num('h', 'sha') == 0) {
										return 1;
									}
									if (Array.isArray(cards)) for (const i of cards) {
										if (i.name != 'sha' && i.number > 11 && get.value(i) < 7) {
											return 9;
										}
									}
									return ai.get.order({ name: 'sha' }) - 1;
								},
								result: {
									player(player) {
										if (player.num('h', 'sha') > 0) return 0;
										var num = player.countCards('h');
										if (num > player.hp) return 0;
										if (num == 1) return -2;
										if (num == 2) return -1;
										return -0.7;
									},
									target(player, target) {
										var num = target.countCards('h');
										if (num == 1) return -1;
										if (num == 2) return -0.7;
										return -0.5;
									},
								},
								threaten: 1.3,
							},
						},
						qqwz_破敌2: {
							mod: {
								targetInRange(card, player, target, now) {
									if (player.storage.qqwz_破敌 == target) return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
							ai: {
								unequip: true,
							},
						},
						qqwz_破敌3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.player.die();
							},
						},
						qqwz_破敌4: {
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
							},
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.directHit = true;
							},
							group: 'qqwz_破敌5',
						},
						qqwz_破敌5: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						qqwz_篱下: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'useCard',
							},
							forced: true,
							check(event, player) {
								return ai.get.effect(player, event.card, event.player, player) > 0;
							},
							filter(event, player) {
								if (!event.targets) return false;
								if (event.player == player) return false;
								if (event.targets.includes(player)) return false;
								var type = get.type(event.card);
								if (type != 'basic' && type != 'trick') return false;
								if (lib.filter.targetEnabled2(event.card, event.player, player)) {
									for (let i = 0; i < event.targets.length; i++) {
										if (get.distance(event.targets[i], player) <= 1) return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								('step 1');
								trigger.targets.add(player);
								trigger.player.line(player, 'green');
							},
						},
						qqwz_散财: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							group: 'qqwz_散财_1',
							filter(event, player) {
								return _status.currentPhase == player && event.player.isAlive() && event.player.countCards('he') > 0;
							},
							forced: true,
							content() {
								var num = 0;
								if (trigger.player.countCards('h')) num += 2;
								if (trigger.player.countCards('e')) num += 2;
								if (num > 0) {
									player.gainPlayerCard(4, trigger.player, num, 'he', true).set('filterButton', function (button) {
										for (let i = 0; i < ui.selected.buttons.length; i++) {
											if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
										}
										return true;
									});
								}
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.maxHp;
								},
							},
							subSkill: {
								1: {
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.num++;
									},
								},
							},
						},
						qqwz_策定: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:千秋万载/audio:2',
							position: 'he',
							filterCard(card, player) {
								return card.name == 'sha' || get.type(card) == 'equip' || get.type(card) == 'basic';
							},
							filter(event, player) {
								return player.num('h', 'sha') > 0 || player.num('he', { type: 'equip' }) > 0 || player.num('h', { type: 'basic' }) > 0;
							},
							check(card) {
								return 8 - get.value(card);
							},
							selectTarget: 2,
							multitarget: true,
							discard: false,
							targetprompt: ['得到牌', '攻击目标'],
							prepare: 'give',
							filterTarget(card, player, target) {
								if (ui.selected.targets.length == 0) {
									return player != target;
								} else {
									return lib.filter.filterTarget({ name: 'sha' }, ui.selected.targets[0], target);
								}
							},
							content() {
								'step 0';
								targets[0].gain(cards, player);
								('step 1');
								targets[0]
									.chooseControl('摸牌', '出杀和决斗', function () {
										var player = _status.event.player;
										var target = _status.event.target;
										if (ai.get.effect(_status.event.target, { name: 'sha' }, player, player) > 0) {
											return 1;
										}
										return 0;
									})
									.set('target', targets[1])
									.set('prompt', '对' + get.translation(targets[1]) + '使用一张杀和一张决斗,或摸二张牌');
								('step 2');
								if (result.control == '摸牌') {
									targets[0].draw(2);
								} else {
									targets[0].useCard({ name: 'sha' }, targets[1]);
									targets[0].useCard({ name: 'juedou' }, targets[1]);
								}
							},
							ai: {
								result: {
									player(player) {
										var players = game.filterPlayer();
										for (const i of players) {
											if (i != player && get.attitude(player, i) > 1 && get.attitude(i, player) > 1) {
												return 1;
											}
										}
										return 0;
									},
									target(player, target) {
										if (ui.selected.targets.length) {
											return -0.1;
										}
										return 1;
									},
								},
								order: 8.5,
								expose: 0.2,
							},
						},
						qqwz_殉道: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return _status.currentPhase != player;
							},
							content() {
								player.addTempSkill('qqwz_殉道2', ['phaseAfter', 'phaseBefore']);
							},
						},
						qqwz_殉道2: {
							trigger: {
								target: 'useCardToBefore',
							},
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_殉道3', 'qqwz_殉道4'],
							forced: true,
							_priority: 15,
							filter(event, player) {
								return get.type(event.card) == 'trick' || get.type(event.card) == 'basic';
							},
							content() {
								game.log(player, '发动了殉道,', trigger.card, '对', trigger.target, '失效');
								trigger.untrigger();
								trigger.finish();
							},
							mark: true,
							intro: {
								content: '一切伤害对你无效',
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'trick' || get.type(card) == 'basic') return [0, 0, 0, 0];
									},
								},
							},
						},
						qqwz_殉道3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'loseHpBefore',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return Math.random() <= 1;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_殉道4: {
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return Math.random() <= 1;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_繁华: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							content() {
								player.draw(3);
								player.addTempSkill('qqwz_繁华2', 'phaseAfter');
							},
							ai: {
								threaten: 1.5,
							},
						},
						qqwz_繁华2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'basic';
							},
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return get.type(card) == 'trick';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.gain(game.createCard(event.card), 'gain2');
								}
							},
							ai: {
								threaten: 1.4,
							},
						},
						qqwz_汉室: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_汉室2',
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							content() {
								player.gainMaxHp();
								trigger.untrigger();
								trigger.finish();
							},
							mod: {
								globalTo(from, to, distance) {
									return distance + 2;
								},
							},
						},
						qqwz_汉室2: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 2,
							viewAs: {
								name: 'tao',
							},
							filterCard(card, player) {
								if (ui.selected.cards.length) {
									return card.suit == ui.selected.cards[0].suit;
								}
								var cards = player.getCards('h');
								if (Array.isArray(cards)) for (const i of cards) {
									if (card != i) {
										if (card.suit == i.suit) return true;
									}
								}
								return false;
							},
							selectCard: 2,
							complexCard: true,
							check(card) {
								return 6 - get.value(card);
							},
							ai: {
								basic: {
									order: 10,
									useful: 1,
									value: 5,
								},
								wuxie(target, card, player, viewer) {
									if (get.attitude(viewer, target) > 0 && target.num('h', 'shan')) {
										if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
									}
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
									respondShan: 1,
									damage: 1,
									multitarget: 1,
									multineg: 1,
									recover: 1,
									save: 1,
								},
							},
						},
						qqwz_威视: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							check(event, player) {
								if (get.attitude(player, event.player) < -2) {
									var cards = player.getCards('h');
									if (cards.length > player.hp) return true;
									if (Array.isArray(cards)) for (const i of cards) {
										var useful = ai.get.useful(i);
										if (useful < 5) return true;
										if (i.number > 9 && useful < 7) return true;
									}
								}
								return false;
							},
							logTarget: 'player',
							filter(event, player) {
								return event.player != player && player.countCards('h') > 0 && event.player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								if (result.bool) {
									player.draw(2);
									trigger.player.addTempSkill('qqwz_威视2', 'phaseAfter');
								}
							},
						},
						qqwz_威视2: {
							trigger: {
								player: 'UseCard',
							},
							forced: true,
							filter(event, player) {
								return Math.random() <= 0.6;
							},
							content() {
								player.loseHp();
							},
							mod: {
								playerEnabled(card, player, target) {
									if (player != target) return false;
								},
							},
						},
						qqwz_牵连: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							_priority: 11,
							selectTarget: [1, 3],
							content() {
								'step 0';
								player
									.chooseTarget([1, 3], get.prompt('qqwz_牵连'), function (card, player, target) {
										return target != player && _status.event.getTrigger().player.canUse('sha', target, false);
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return ai.get.effect(target, trigger.card, trigger.player, player) + 0.1;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									target
										.chooseCard({ name: 'shan' }, '交给' + get.translation(player) + '一张闪,或成为此杀的额外目标')
										.set('ai', function (card) {
											return get.attitude(target, _status.event.source) >= 0 ? 1 : -1;
										})
										.set('source', player);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.gain(result.cards, event.target);
									event.target.$give(result.cards, player);
								} else {
									player.recover();
									trigger.targets.push(event.target);
									game.log(event.target, '成为了额外目标');
								}
							},
							ai: {
								expose: 0.2,
								effect: {
									target(card, player, target) {
										if (card.name != 'sha') return;
										var players = game.filterPlayer();
										for (const i of players) {
											var target2 = i;
											if (player != target2 && target != target2 && player.canUse(card, target2, false) && ai.get.effect(target2, { name: 'shacopy', nature: card.nature, suit: card.suit }, player, target) < 0) {
												if (target.hp == target.maxHp) return [0, 1];
												return [0, 0];
											}
										}
									},
								},
							},
						},
						qqwz_抵命: {
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'tao' && _status.event.skill != 'qqwz_抵命') return false;
								},
								cardUsable(card, player) {
									if (card.name == 'tao' && _status.event.skill != 'qqwz_抵命') return false;
								},
								cardRespondable(card, player) {
									if (card.name == 'tao' && _status.event.skill != 'qqwz_抵命') return false;
								},
								cardSavable(card, player) {
									if (card.name == 'tao' && _status.event.skill != 'qqwz_抵命') return false;
								},
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.num('h', 'tao') > 0;
							},
							filterCard: {
								name: 'tao',
							},
							viewAs: {
								name: 'guohe',
								suit: 'heart',
								number: 3,
							},
							viewAsFilter(player) {
								if (!player.num('h', 'tao')) return false;
							},
							check() {
								return 1;
							},
							ai: {
								skillTagFilter(player) {
									if (!player.num('h', 'tao')) return false;
								},
								respondSha: true,
								order: 4,
								useful: -1,
								value: -1,
								basic: {
									order: 5,
									useful: 1,
									value: 4.5,
								},
								result: {
									target: -1.5,
									player(player, target) {
										if (ai.get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
											return 0;
										}
										var hs1 = targe.getCards('h', 'sha');
										var hs2 = playe.getCards('h', 'sha');
										if (hs1.length > hs2.length + 1) {
											return -2;
										}
										var hsx = target.getCards('h');
										if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
											return -2;
										}
										if (hsx.length > 3 && hs2.length == 0) {
											return -2;
										}
										if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
											return -2;
										}
										return -0.5;
									},
								},
								tag: {
									respond: 2,
									respondSha: 2,
									damage: 1,
									loseCard: 1,
									discard: 1,
								},
							},
						},
						qqwz_毒谋: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return game.hasPlayer(function (player) {
									return player.countCards('h') == 0;
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget([1, 5], get.prompt('qqwz_毒谋'), function (card, player, target) {
										return target.countCards('h') == 0;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return ai.get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].loseHp(2);
								}
							},
						},
						qqwz_火牢: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return !player.storage.qqwz_火牢;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							selectTarget: -1,
							multitarget: true,
							multiline: true,
							mark: true,
							line: 'fire',
							content() {
								'step 0';
								player.storage.qqwz_火牢 = true;
								player.awakenSkill('qqwz_火牢');
								event.num = 1;
								event.targets = targets.slice(0);
								event.targets.sort(lib.sort.seat);
								('step 1');
								if (event.targets.length) {
									var target = event.targets.shift();
									event.target = target;
									var res = ai.get.damageEffect(target, player, target, 'fire');
									target
										.chooseToDiscard('he', '弃置至少' + get.cnNumber(event.num) + '张牌或受到4点火焰伤害', [num, Infinity])
										.set('ai', function (card) {
											if (ui.selected.cards.length >= _status.event.parent.num) return -1;
											if (_status.event.player.hasSkillTag('nofire')) return -1;
											if (_status.event.res >= 0) return 6 - get.value(card);
											if (get.type(card) != 'basic') {
												return 10 - get.value(card);
											}
											return 8 - get.value(card);
										})
										.set('res', res);
								} else {
									event.finish();
								}
								('step 2');
								if (!result.bool) {
									event.target.damage(4, 'fire');
									event.num = 1;
								} else {
									event.num = result.cards.length + 2;
								}
								event.goto(1);
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										var num = 0,
											players = game.filterPlayer();
										for (const i of players) {
											if (player != i && ai.get.damageEffect(i, player, i, 'fire') < 0) {
												var att = get.attitude(player, i);
												if (att > 0) {
													num--;
												} else if (att < 0) {
													num++;
												}
											}
										}
										if (game.players.length < 5) {
											return num - 1;
										} else {
											return num - 2;
										}
									},
								},
							},
							init(player) {
								player.storage.xinfencheng = false;
							},
							intro: {
								content: 'limited',
							},
						},
						qqwz_火刑: {
							audio: 'ext:千秋万载/audio:2',
							usable: 2,
							trigger: {
								global: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								return player != event.player;
							},
							content() {
								trigger.player.damage(2, 'fire')._triggered = null;
							},
						},
						qqwz_破计: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								player.draw(2);
							},
							mod: {
								wuxieRespondable() {
									return false;
								},
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay' && player != target) {
										return false;
									}
								},
							},
						},
						qqwz_诛族: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filterCard(card, player) {
								return get.type(card, 'trick') == 'trick';
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('h') > 0;
							},
							discard: false,
							delay: false,
							check(card) {
								return 8 - get.value(card);
							},
							content() {
								'step 0';
								player.showCards(cards);
								('step 1');
								ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
								var n1 = target.getCards('he', function (card) {
									if (!lib.filter.cardDiscardable(card, player)) return false;
									return get.type(card, 'trick') == 'trick';
								});
								var n2 = target.getCards('he', function (card) {
									if (!lib.filter.cardDiscardable(card, player)) return false;
									return get.type(card, 'trick') != 'trick';
								});
								if (n1.length > 1 || n2.length > 2 || (n1.length == 3 && n2.length == 2)) {
									target
										.chooseToDiscard('弃置3张锦囊牌,或两张非锦囊牌', true, 'he', function (card, player) {
											if (!lib.filter.cardDiscardable(card, player)) return false;
											if (!_status.event.nontrick) {
												return get.type(card, 'trick') == 'trick';
											}
											if (ui.selected.cards.length) {
												return get.type(card, 'trick') != 'trick';
											}
											return true;
										})
										.set('ai', function (card) {
											if (get.type(card, 'trick') == 'trick') {
												return 8 - get.value(card);
											}
											return -get.value(card);
										})
										.set('selectCard', function () {
											if (ui.selected.cards.length == 3 && get.type(ui.selected.cards[0], 'trick') == 'trick') {
												return 1;
											}
											return 2;
										})
										.set('nontrick', n2.length >= 2)
										.set('complexCard', true);
								} else {
									if (n1.length) {
										target.discard(n1);
									} else if (n2.length) {
										target.discard(n2);
									}
								}
							},
							ai: {
								order: 9,
								result: {
									target: -1,
								},
							},
						},
						qqwz_去病: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							filterCard: true,
							usable: 1,
							check(card) {
								return 9 - get.value(card);
							},
							filterTarget(card, player, target) {
								if (target.hp >= target.maxHp) return false;
								return true;
							},
							content() {
								target.damage()._triggered = null;
								player.recover();
							},
							ai: {
								result: {
									target(player, target) {
										var hs = target.countCards('he');
										if (hs.length < 3) return 0;
										return -1.5;
									},
									player: -1,
								},
								order: 10,
							},
							group: 'qqwz_去病_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									content() {
										player.recover();
									},
									ai: {
										expose: 0.5,
									},
								},
							},
						},
						qqwz_医心: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_医心_1',
							enable: 'chooseToUse',
							filter(event, player) {
								return _status.currentPhase != player;
							},
							filterCard(card, player) {
								return get.color(card) == 'red';
							},
							position: 'he',
							viewAs: {
								name: 'tao',
							},
							prompt: '将一张红色牌当桃使用',
							check(card) {
								return 15 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									return player.num('he', { color: 'red' }) > 0 && _status.currentPhase != player;
								},
								threaten: 1.5,
								save: true,
								basic: {
									order(card, player) {
										if (player.hasSkillTag('pretao')) return 5;
										return 2;
									},
									useful: [8, 6.5],
									value: [8, 6.5],
								},
								result: {
									target(player, target) {
										var nd = player.needsToDiscard();
										var keep = false;
										if (nd <= 0) {
											keep = true;
										} else if (nd == 1 && target.hp >= 2 && target.num('h', 'tao') <= 1) {
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
														return current.num('h', 'tao');
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
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'recoverEnd',
									},
									forced: true,
									content() {
										player.hp = player.maxHp;
									},
								},
							},
						},
						qqwz_缓图: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_缓图2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return Math.random() <= 0.5;
							},
							content() {
								player.draw();
								player.recover();
							},
							intro: {
								content: 'card',
							},
						},
						qqwz_缓图2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'basic' && Math.random() <= 0.4;
							},
							content() {
								player.useCard(trigger.card, trigger.targets, false)._triggered = null;
							},
						},
						qqwz_鸿鹄: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_鸿鹄2',
							trigger: {
								player: 'damageAfter',
							},
							forced: true,
							content() {
								player.draw();
								player.recover();
							},
						},
						qqwz_鸿鹄2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'discardAfter',
							},
							filter(event, player) {
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (get.position(i) == 'd') {
										return true;
									}
								}
								return false;
							},
							forced: true,
							popup: false,
							content() {
								'step 0';
								event.cards = [];
								if (Array.isArray(trigger.cards)) for (const i of trigger.cards) {
									if (get.position(i) == 'd') {
										event.cards.push(i);
										ui.special.appendChild(i);
									}
								}
								('step 1');
								if (event.cards.length) {
									player
										.chooseCardButton(get.prompt('qqwz_鸿鹄2'), event.cards, [1, event.cards.length])
										.set('ai', function (button) {
											if (!_status.event.goon || ui.selected.buttons.length) return 0;
											return 1;
										})
										.set(
											'goon',
											game.hasPlayer(function (current) {
												return Math.abs(get.attitude(player, current)) > 1;
											})
										);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.togive = result.links.slice(0);
									player
										.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true, function (card, player, target) {
											return target != player;
										})
										.set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											if (_status.event.enemy) {
												return -att;
											} else {
												if (att > 2) return att / Math.sqrt(1 + target.countCards('h'));
												return att / Math.sqrt(1 + target.countCards('h')) / 5;
											}
										})
										.set('enemy', get.value(event.togive[0]) < 0);
								} else {
									if (Array.isArray(event.cards)) for (const i of event.cards) {
										ui.discardPile.appendChild(i);
									}
									event.finish();
								}
								('step 3');
								if (result.bool) {
									for (let i = 0; i < event.togive.length; i++) {
										event.cards.remove(event.togive[i]);
									}
									result.targets[0].gain(event.togive, player);
									result.targets[0].$gain2(event.togive);
									event.goto(1);
								} else {
									if (Array.isArray(event.cards)) for (const i of event.cards) {
										ui.discardPile.appendChild(i);
									}
									event.finish();
								}
							},
							ai: {
								expose: 0.1,
								effect: {
									target(card, player, target, current) {
										if (target.hasFriend() && get.tag(card, 'discard')) {
											if (current < 0) return 0;
											return [1, 1];
										}
									},
								},
							},
						},
						qqwz_隔墙: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return event.player != player && event.player.isAlive();
							},
							forced: true,
							content() {
								'step 0';
								if (trigger.player.countCards('e')) {
									player.choosePlayerCard(trigger.player, 'e', '选择装备一张装备牌并令其翻面,或取消并摸二张牌');
								}
								('step 1');
								if (result && result.links && result.links.length) {
									trigger.player.$give(result.links[0], player);
									trigger.player.turnOver();
									player.equip(result.links[0]);
									player.line(trigger.player);
								} else {
									player.draw(2);
								}
							},
							ai: {
								expose: 0.1,
							},
						},
						qqwz_投曹: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return !player.storage.qqwz_投曹 && player.countCards('e') > 0;
							},
							init(player) {
								player.storage.qqwz_投曹 = false;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							mark: true,
							content() {
								'step 0';
								player.awakenSkill('qqwz_投曹');
								var cards = player.getCards('e');
								target.gain(cards, player);
								event.num = cards.length;
								player.$give(cards, target);
								player.storage.qqwz_投曹 = true;
								('step 1');
								target
									.chooseTarget([1, event.num], '令' + get.translation(player) + '回复' + event.num + '点体力并令其摸' + event.num + '张牌,或对攻击范围内的' + event.num + '名角色造成2点伤害', function (card, player, target2) {
										return get.distance(_status.event.player, target2, 'attack') <= 1;
									})
									.set('ai', function (target2) {
										var target = _status.event.player;
										var player = _status.event.parent.player;
										if (get.attitude(target, player) > 0) {
											if (player.hp + event.num <= player.maxHp || player.hp == 1) return -1;
										}
										return ai.get.damageEffect(target2, target, target);
									});
								('step 2');
								if (result.bool) {
									target.line(result.targets, 'green');
									event.targets = result.targets;
									event.num2 = 0;
								} else {
									player.recover(event.num);
									player.draw(event.num);
									event.finish();
								}
								('step 3');
								if (event.num2 < event.targets.length) {
									event.targets[event.num2].damage(2, target);
									event.num2++;
									event.redo();
								}
							},
							intro: {
								content: 'limited',
							},
							ai: {
								order: 1,
								result: {
									target: 1,
									player(player) {
										var bool = true,
											players = game.filterPlayer();
										for (const i of players) {
											if (i != player && get.attitude(player, i) > 2 && get.attitude(i, player) > 2) {
												bool = false;
												break;
											}
										}
										if (bool) return -10;
										if (player.hp == 1) return 1;
										if (game.phaseNumber < game.players.length) return -10;
										if (player.countCards('e') + player.hp <= player.maxHp) return 1;
										return -10;
									},
								},
							},
						},
						qqwz_罪业: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_罪业2', 'qqwz_罪业3'],
							enable: 'phaseUse',
							usable: 1,
							delay: 0,
							filter(event, player) {
								return player.num('h', { color: 'red' }) && player.num('h', { color: 'black' });
							},
							content() {
								'step 0';
								player.chooseControl('红色', '黑色').set('ai', function () {
									var player = _status.event.player;
									if (player.num('h', { color: 'red' }) == 1 && player.num('h', { color: 'black' }) > 1) return '红色';
									return '黑色';
								});
								('step 1');
								event.control = result.control;
								player.showHandcards();
								('step 2');
								var cards;
								if (event.control == '红色') {
									cards = playe.getCards('h', { color: 'red' });
								} else {
									cards = playe.getCards('h', { color: 'black' });
								}
								player.discard(cards);
								event.num = cards.length;
								('step 3');
								player
									.chooseTarget([1, event.num], function (card, player, target) {
										return target != player && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target) + 0.5;
									});
								('step 4');
								if (result.bool && result.targets) {
									player.line(result.targets, 'green');
									event.targets = result.targets;
									event.targets.sort(lib.sort.seat);
									event.gained = event.targets.length;
								} else {
									event.finish();
								}
								('step 5');
								if (event.targets.length) {
									player.gainPlayerCard(2, event.targets.shift(), 'he', true);
									event.redo();
								}
								('step 6');
								if (event.gained >= 5) {
									player.loseMaxHp();
								}
							},
							ai: {
								order(item, player) {
									if (player.num('h', { color: 'red' }) == 1) return 10;
									if (player.num('h', { color: 'black' }) == 1) return 10;
									return 1;
								},
								result: {
									player: 1,
								},
							},
						},
						qqwz_罪业2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_罪业3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'loseHpBefore',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return Math.random() <= 1;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_推卸: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.num > 1;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('qqwz_推卸'), function (card, player, target) {
									return target != event.player;
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.draw(2);
									player.draw();
									player.loseHp();
									trigger.untrigger();
									trigger.finish();
								}
							},
						},
						qqwz_谗言: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							check(event, player) {
								var nh = player.countCards('h') - player.num('h', { type: 'equip' });
								if (nh <= 1) return true;
								if (player.num('h', 'tao')) return false;
								if (nh <= 2) return Math.random() < 0.7;
								if (nh <= 3) return Math.random() < 0.4;
								return false;
							},
							content() {
								player.draw(player.hp);
								player.addTempSkill('qqwz_谗言2', 'phaseAfter');
							},
						},
						qqwz_谗言2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							content() {
								player.draw();
							},
							mod: {
								maxHandcard(player, num) {
									var damage = player.getStat().damage;
									if (typeof damage == 'number') return num - player.hp + damage;
									return 0;
								},
							},
						},
						qqwz_乱国: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_乱国锦囊', 'qqwz_乱国机关', 'qqwz_乱国回合', 'qqwz_乱国延迟锦囊', 'qqwz_乱国基本'],
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (event.parent.name == 'qqwz_乱国') return false;
								return get.type(event.card, 'trick') == 'trick';
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return player.canUse('nanman', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'nanman' }, list);
							},
							ai: {
								threaten: 1.5,
								expose: 0.1,
							},
						},
						qqwz_乱国锦囊: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (event.parent.name == 'qqwz_乱国锦囊') return false;
								return get.type(event.card, 'jiguan') == 'jiguan';
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return player.canUse('wuzhong', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'wuzhong' }, list);
							},
							ai: {
								threaten: 1.5,
								expose: 0.1,
							},
						},
						qqwz_乱国基本: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (event.parent.name == 'qqwz_乱国基本') return false;
								return get.type(event.card, 'food') == 'food';
							},
							content() {
								player.recover();
							},
							ai: {
								threaten: 1.5,
								expose: 0.1,
							},
						},
						qqwz_乱国机关: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (event.parent.name == 'qqwz_乱国机关') return false;
								return get.type(event.card, 'jiguan') == 'jiguan';
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return player.canUse('juedou', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'juedou' }, list);
							},
							ai: {
								threaten: 1.5,
								expose: 0.1,
							},
						},
						qqwz_乱国延迟锦囊: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (event.parent.name == 'qqwz_乱国延迟锦囊') return false;
								return get.type(event.card, 'basic') == 'basic';
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return player.canUse('wugu', current) && current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'wugu' }, list);
							},
							ai: {
								threaten: 1.5,
								expose: 0.1,
							},
						},
						qqwz_乱国回合: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								return player != event.player;
							},
							content() {
								player.draw();
								player.phase('nodelay');
							},
						},
						qqwz_并起: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							selectTarget() {
								return [1, 4];
							},
							position: 'he',
							check(card) {
								return 8 - ai.get.useful(card);
							},
							content() {
								'step 0';
								player.draw(2);
								player.recover(3);
								('step 1');
								target.draw(4);
							},
							ai: {
								order: 1,
								result: {
									target(player) {
										var num = player.countCards('h');
										if (player.hp == 1) return 1;
										if (player.hp == 2 && num <= 2) return 1;
										if (player.hp == 3 && num <= 1) return 1;
										if (game.phaseNumber < game.players.length * 2) return 0;
										if (player.hasUnknown()) return 0;
										return 1;
									},
								},
							},
						},
						qqwz_让梨: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_让梨2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 3;
							},
							ai: {
								threaten: 1.3,
							},
						},
						qqwz_儒门: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								return event.source && event.source.hp < player.hp;
							},
							content() {
								trigger.num = 0;
							},
							ai: {
								threaten: 0.8,
							},
						},
						qqwz_让梨2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_秉忠: {
							trigger: {
								player: 'discardAfter',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (get.position(i) == 'd') {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qqwz_秉忠'), function (card, player, target) {
										return player != target && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.discardPlayerCard(2, event.target, true);
								} else {
									event.finish();
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						qqwz_孤援: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'damageEnd',
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('孤援'), function (card, player, target) {
									return target.hp != 0;
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.draw();
								}
								player.recover();
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
						qqwz_妖艳: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_妖艳2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								game.countPlayer(function (current) {
									if (current != player && !current.hasSkill('fengyin')) {
										player.line(current, 'green');
										current.addTempSkill('fengyin', 'phaseAfter');
									}
								});
							},
						},
						qqwz_醉魂: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.num('he', { type: 'equip' });
							},
							filterCard: {
								type: 'equip',
							},
							position: 'he',
							filterTarget(card, player, target) {
								return target != player;
							},
							check(card) {
								var player = _status.event.player;
								if (
									game.hasPlayer(function (current) {
										return get.attitude(player, current) > 2 && current.isTurnedOver();
									})
								) {
									return 10 - get.value(card, player);
								}
								return 6 - get.value(card, player);
							},
							content() {
								'step 0';
								target.turnOver();
								('step 1');
								target.draw();
								player.draw();
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (target.isTurnedOver()) return 2;
										return -0.5;
									},
								},
							},
						},
						qqwz_妖艳2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.sex == 'male';
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								trigger.source.loseHp();
							},
						},
						qqwz_战神: {
							group: ['qqwz_战神决斗', 'qqwz_战神伤害', 'qqwz_战神闪杀', 'qqwz_战神绝境', 'qqwz_战神免致死', 'qqwz_战神无视防具'],
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
							},
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return event.card;
							},
							content() {
								trigger.directHit = true;
							},
						},
						qqwz_战神决斗: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'juedou',
								target: 'juedou',
							},
							forced: true,
							filter(event, player) {
								return event.turn != player;
							},
							content() {
								'step 0';
								var next = trigger.turn.chooseToRespond({ name: 'sha' });
								next.autochoose = lib.filter.autoRespondSha;
								next.ai = function (card) {
									if (get.attitude(trigger.turn, player) < 0 && trigger.turn.num('h', 'sha') > 1) {
										return ai.get.unuseful2(card);
									}
									return -1;
								};
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
						qqwz_战神闪杀: {
							audio: 'ext:千秋万载/audio:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard: {
								name: 'shan',
							},
							viewAs: {
								name: 'sha',
								suit: 'diamond',
								number: 5,
							},
							viewAsFilter(player) {
								if (!player.num('h', 'shan')) return false;
							},
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
									if (!player.num('h', 'shan')) return false;
								},
								order() {
									return ai.get.order({ name: 'sha' }) + 0.1;
								},
								useful: -1,
								value: -1,
								basic: {
									useful: [5, 1],
									value: [5, 1],
								},
								result: {
									target(player, target) {
										if (player.hasSkill('jiu') && !target.num('e', 'baiyin')) {
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
						qqwz_战神伤害: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.getStat('damage') >= 4;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('战神'), function (card, player, target) {
									return player.getStat('damage') >= 4;
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.damage(4)._triggered = null;
								}
							},
						},
						qqwz_战神绝境: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							_priority: -500,
							content() {
								if (trigger.num > 1) trigger.num = 1;
							},
						},
						qqwz_战神免致死: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'dieBefore',
							},
							forced: true,
							filter(event, player) {
								return player.hp >= 1;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								player.hp == player.hp;
							},
						},
						qqwz_无前: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_无前2', 'qqwz_无前3', 'qqwz_无前4', 'qqwz_无前5'],
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							_priority: 55,
							content() {
								var list = ['juedou'];
								player.gain(game.createCard(list.randomGet()));
								player.$draw();
							},
						},
						qqwz_无前2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'juedou' && Math.random() <= 0.7;
							},
							content() {
								trigger.player.die();
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
						},
						qqwz_无前3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'gainEnd',
							},
							forced: true,
							filter(event, player) {
								return player != event.player && Math.random() <= 0.6;
							},
							content() {
								player.draw();
							},
						},
						qqwz_无前4: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								var hq = player.countCards('e');
								player.changeHujia(hq);
							},
						},
						qqwz_无前5: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return player != event.player;
							},
							content() {
								game.me.hp += 1;
							},
						},
						qqwz_战神无视防具: {
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.name == 'sha') return true;
									return false;
								},
							},
						},
						qqwz_进击: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_进击2',
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.cards && event.player.countCards('e');
							},
							content() {
								'step 0';
								player.choosePlayerCard('e', trigger.player);
								('step 1');
								if (result.bool) {
									trigger.player.discard(result.links[0]);
									event.card = result.links[0];
								} else {
									event.finish();
								}
								('step 2');
								if (get.position(card) == 'd') {
									if (get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4') {
										player.gain(card, trigger.player);
										player.$gain2(card);
									}
								}
							},
						},
						qqwz_进击2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							content() {
								player.addTempSkill('qqwz_进击3', 'phaseAfter');
							},
						},
						qqwz_进击3: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 9999;
								},
								selectTarget(card, player, range) {
									if (card.name == 'sha') range[1] += 6;
								},
							},
						},
						qqwz_白马: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								player.addTempSkill('qqwz_白马2', { player: 'phaseBegin' });
								player.addTempSkill('qianxing', { player: 'phaseBegin' });
							},
							mod: {
								globalFrom(from, to, current) {
									if (from.hp > 6) return current - 2;
								},
								globalTo(from, to, current) {
									if (to.hp <= 4) return current + 3;
								},
							},
							ai: {
								threaten: 0.8,
							},
						},
						qqwz_白马2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'equip';
							},
							content() {
								player.draw(2);
							},
							ai: {
								threaten: 1.4,
							},
						},
						qqwz_英雄: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_英雄2', 'qqwz_英雄3'],
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								for (const i of game.players) {
									if (i.group == 'wu') i.draw(2);
								}
							},
						},
						qqwz_英雄2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								for (const i of game.players) {
									if (i.group == 'wei') i.damage(2, 'fire')._triggered = null;
								}
							},
						},
						qqwz_英雄3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'turnOverAfter',
							},
							forced: true,
							content() {
								for (const i of game.players) {
									if (i.group == 'qun') i.TurnOver();
								}
							},
						},
						qqwz_急援: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_急援2',
							trigger: {
								target: 'taoBegin',
							},
							zhuSkill: true,
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (!player.hasZhuSkill('qqwz_急援')) return false;
								if (player.hp > 0) return false;
								if (event.player.group != 'wu') return false;
								return true;
							},
							content() {
								player.recover(2);
								player.draw(2);
							},
						},
						qqwz_急援2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							zhuSkill: true,
							forced: true,
							filter(event, player) {
								if (event.source != 'wu') return false;
								return true;
							},
							content() {
								player.recover(2);
								player.draw();
							},
						},
						qqwz_权衡: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_权衡2',
							enable: 'phaseUse',
							position: 'he',
							usable: 3,
							filterCard: true,
							selectCard: [1, Infinity],
							prompt: '弃置任意张牌并摸等量X2的牌',
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								var abc = player.hp;
								player.draw(cards.length * 2);
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
								threaten: 1.5,
							},
						},
						qqwz_权衡2: {
							mod: {
								maxHandcard(player, num) {
									if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
								},
							},
						},
						qqwz_踏浪: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_踏浪2', 'qqwz_踏浪3', 'qqwz_踏浪4'],
							enable: 'chooseToUse',
							position: 'he',
							viewAs: {
								name: 'guohe',
							},
							viewAsFilter(player) {
								if (!player.countCards('he')) return false;
							},
							prompt: '将一张牌当过河拆桥使用',
							check(card) {
								return 4 - get.value(card);
							},
							ai: {
								basic: {
									order: 9,
									useful: 1,
									value: 5,
								},
								result: {
									target(player, target) {
										var es = target.getCards('e');
										var nh = target.countCards('h');
										var noe = es.length == 0 || target.hasSkillTag('noe');
										var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.hp < target.maxHp;
										var noh = nh == 0 || target.hasSkillTag('noh');
										if (noh && noe) return 0;
										if (noh && noe2) return 0.01;
										if (get.attitude(player, target) <= 0) return target.countCards('he') ? -1.5 : 1.5;
										var js = target.getCards('j');
										if (js.length) {
											var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
											if (jj.name == 'guohe') return 3;
											if (js.length == 1 && ai.get.effect(target, jj, target, player) >= 0) {
												return -1.5;
											}
											return 2;
										}
										return -1.5;
									},
								},
								tag: {
									loseCard: 1,
									discard: 1,
								},
							},
						},
						qqwz_踏浪2: {
							mod: {
								targetEnabled(card, player, target, now) {
									if (card.name == 'guohe' || card.name == 'lebu') return false;
								},
							},
						},
						qqwz_踏浪3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player.getCards('h').length != 0;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_踏浪4: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								if (event.player.getCards('h').length == 0) return true;
							},
							forced: true,
							content() {
								trigger.player.loseHp(3)._triggered = null;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha' && target.getCards('h').length == 0) return [1, -2];
									},
								},
							},
						},
						qqwz_揣测: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 3,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								target.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
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
								});
								('step 1');
								game.log(target, '选择了' + get.translation(result.control));
								event.choice = result.control;
								target.popup(event.choice);
								event.card = player.getCards('h').randomGet();
								target.gain(event.card, player);
								player.$give(event.card, target);
								('step 2');
								if (event.card.suit + '2' != event.choice) target.damage(2, 'nocard')._triggered = null;
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										var eff = ai.get.damageEffect(target, player);
										if (eff >= 0) return 1 + eff;
										var value = 0,
											i;
										var cards = player.getCards('h');
										if (Array.isArray(cards)) for (const i of cards) {
											value += get.value(i);
										}
										value /= player.countCards('h');
										if (target.hp == 1) return Math.min(0, value - 7);
										return Math.min(0, value - 5);
									},
								},
							},
						},
						qqwz_焦凤: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_焦凤2',
							filter(event, player) {
								return player.num('he', { color: 'red' }) > 0;
							},
							enable: 'chooseToUse',
							filterCard(card, player) {
								return get.color(card) == 'red';
							},
							position: 'he',
							viewAs: {
								name: 'lebu',
								suit: 'diamond',
								number: 13,
							},
							prompt: '将一张红色牌当乐不思蜀使用',
							check(card) {
								return 6 - get.value(card);
							},
							ai: {
								threaten: 1.5,
								basic: {
									order: 1,
									useful: 1,
									value: 8,
								},
								result: {
									target(player, target) {
										var num = target.hp - target.countCards('h') - 2;
										if (num > -1) return -0.01;
										if (target.hp < 3) num--;
										if (target.isTurnedOver()) num /= 2;
										var dist = get.distance(player, target, 'absolute');
										if (dist < 1) dist = 1;
										return num / Math.sqrt(dist);
									},
								},
								tag: {
									skip: 'phaseUse',
								},
							},
						},
						qqwz_焦凤2: {
							trigger: {
								player: ['useCard', 'respond', 'phaseAfter'],
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player, name) {
								if (name == 'phaseAfter') return true;
								return event.card && get.color(event.card) == 'red';
							},
							init(player) {
								player.storage.qqwz_焦凤2 = 0;
							},
							content() {
								player.draw();
								if (event.triggername == 'phaseAfter') {
									player.storage.qqwz_焦凤2 = 0;
								} else {
									player.addTempSkill('qqwz_焦凤2_maxHandcard', { player: 'phaseAfter' });
									player.storage.qqwz_焦凤2++;
								}
							},
							ai: {
								threaten: 0.8,
								effect: {
									player(card, player, target, effect) {
										if (get.color(card) == 'red') return [1, 3];
									},
								},
							},
							subSkill: {
								maxHandcard: {
									mod: {
										maxHandcard(player, current) {
											if (player.storage.qqwz_焦凤2 && typeof player.storage.qqwz_焦凤2 == 'number') return current + player.storage.qqwz_焦凤2;
										},
									},
								},
							},
						},
						qqwz_流年: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							_priority: 5,
							filter(event, player) {
								return player.countCards('h');
							},
							content() {
								'step 0';
								player.chooseToDiscard('h', true);
								('step 1');
								player.recover();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'lebu') {
										return false;
									}
									if (card.name == 'sha') {
										return false;
									}
								},
							},
						},
						qqwz_鸳鸯: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							filterCard: true,
							usable: 1,
							selectCard: 1,
							check(card) {
								var player = get.owner(card);
								if (player.countCards('h') > player.hp) return 8 - get.value(card);
								if (player.hp < player.maxHp) return 6 - get.value(card);
								return 4 - get.value(card);
							},
							filterTarget(card, player, target) {
								if (target.sex != 'male') return false;
								if (target.hp >= target.maxHp) return false;
								if (target == player) return false;
								return true;
							},
							content() {
								player.recover();
								player.addTempSkill('qqwz_鸳鸯2', 'phaseAfter');
								target.recover(2);
								target.gainMaxHp();
								target.draw();
							},
							ai: {
								order: 5.5,
								result: {
									player(player) {
										if (player.hp < player.maxHp) return 4;
										if (player.countCards('h') > player.hp) return 0;
										return -1;
									},
									target: 4,
								},
								threaten: 2,
							},
						},
						qqwz_影剑2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								var type = get.type(event.card, 'equip');
								return event.player != player && type == 'equip';
							},
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.equip(event.card);
								}
							},
						},
						qqwz_影剑: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_影剑2', 'qqwz_影剑3'],
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (i.original == 'e') return true;
								}
								return false;
							},
							content() {
								var num = 0;
								if (Array.isArray(trigger.cards)) for (const i of trigger.cards) {
									if (i.original == 'e') num += 2;
								}
								player.draw(num);
							},
							ai: {
								noe: true,
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
									},
								},
							},
						},
						qqwz_影剑3: {
							trigger: {
								player: 'equipBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return player.num('e', { subtype: 'equip1' }) && get.subtype(event.card) == 'equip1';
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
						qqwz_鸳鸯2: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 2;
								},
							},
						},
						qqwz_绿荫: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'chooseToUse',
							filterCard(card, player) {
								return get.color(card) == 'red';
							},
							usable: 3,
							viewAs: {
								name: 'wuzhong',
							},
							viewAsFilter(player) {
								if (!player.countCards('h', { color: 'red' })) return false;
							},
							prompt: '将一张红色牌当无中生有使用',
							check(card) {
								var player = _status.currentPhase;
								if (player.countCards('h') > player.hp) {
									return 6 - get.value(card);
								}
								return 4 - get.value(card);
							},
							ai: {
								basic: {
									order: 4,
									value: [3, 1],
									useful: 1,
								},
								wuxie(target, card, player, current, state) {
									if (get.attitude(current, player) >= 0 && state > 0) return false;
								},
								result: {
									player(player) {
										var nh = player.countCards('h');
										if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
											if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player)) {
												return -10;
											}
											if (_status.event.skill) {
												var viewAs = get.info(_status.event.skill).viewAs;
												if (viewAs == 'huogong') return -10;
												if (viewAs && viewAs.name == 'huogong') return -10;
											}
										}
										return 0;
									},
									target(player, target) {
										if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
										if (player.countCards('h') <= 1) return 0;
										if (target == player) {
											if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player)) {
												return -1.5;
											}
											if (_status.event.skill) {
												var viewAs = get.info(_status.event.skill).viewAs;
												if (viewAs == 'huogong') return -1.5;
												if (viewAs && viewAs.name == 'huogong') return -1.5;
											}
											return 0;
										}
										return -1.5;
									},
								},
								tag: {
									damage: 1,
									fireDamage: 1,
									natureDamage: 1,
									norepeat: 1,
									draw: 2,
								},
							},
						},
						qqwz_花落: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_花落2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.countCards('he') && event.source != player;
							},
							content() {
								var rg = player.num;
								trigger.source.damage(rg)._triggered = null;
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_花落2: {
							mod: {
								suit(card, suit) {
									if (suit == 'spade') return 'heart';
								},
							},
						},
						qqwz_铁壁: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'discardAfter',
							},
							filter(event, player) {
								if (_status.currentPhase != event.player) {
									if (Array.isArray(event.cards)) for (const i of event.cards) {
										if (i.original == 'h') return true;
									}
								}
								return false;
							},
							check(event, player) {
								return get.attitude(player, event.player) > 2;
							},
							content() {
								'step 0';
								player.line(trigger.player, 'green');
								player.damage();
								('step 1');
								trigger.player.draw(3);
								player.draw(1);
							},
						},
						qqwz_冷血: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'dying',
							},
							forced: true,
							_priority: 100,
							filter(event, player) {
								return Math.random() <= 0.7;
							},
							content() {
								player.hp = player.maxHp;
							},
						},
						qqwz_奋命: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'damageBegin',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return player != event.player && (get.translation(event.player.name) == 'qqwz吴王光耀' || get.translation(event.player.name2) == 'qqwz吴王光耀');
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								player.damage(2);
							},
						},
						qqwz_烈士: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('h') > 0;
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									player.addTempSkill('qqwz_烈士2', 'phaseAfter');
								} else {
									player.draw(2);
								}
							},
							ai: {
								order(name, player) {
									var cards = player.getCards('h');
									if (player.num('h', 'sha') == 0) {
										return 1;
									}
									if (Array.isArray(cards)) for (const i of cards) {
										if (i.name != 'sha' && i.number > 11 && get.value(i) < 7) {
											return 9;
										}
									}
									return ai.get.order({ name: 'sha' }) - 1;
								},
								result: {
									player(player) {
										if (player.num('h', 'sha') > 0) return 0.6;
										var num = player.countCards('h');
										if (num > player.hp) return 0;
										if (num == 1) return -2;
										if (num == 2) return -1;
										return -0.7;
									},
									target(player, target) {
										var num = target.countCards('h');
										if (num == 1) return -1;
										if (num == 2) return -0.7;
										return -0.5;
									},
								},
								threaten: 1.3,
							},
						},
						qqwz_烈士2: {
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
								selectTarget(card, player, range) {
									if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] += 7;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 1;
								},
							},
						},
						qqwz_酣战: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return player != event.player;
							},
							content() {
								trigger.player.loseMaxHp();
								trigger.player.loseHp();
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_睥睨: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								var list = [];
								for (var i in lib.character) {
									if (lib.character[i].mode && lib.character[i].mode.includes(lib.config.mode) == false) continue;
									if (i != 'list') list.push(i);
								}
								var players = game.players.concat(game.dead);
								for (var j = 0; j < players.length; j++) {
									list.remove([players[j].name]);
								}
								if (list.length) {
									var player2 = game.addPlayer();
									player2.getId();
									if (get.config('double_character') || lib.config.mode == 'guozhan') {
										var list2 = list.randomGets(2);
										player2.init(list2[0], list2[1]);
									} else {
										player2.init(list.randomGet());
									}
									var KJL = ['qqwz吴王光耀', 'qqwz策马扬鞭', 'qqwz折冲将军', 'qqwz战天斗地', 'qqwz醉酒提矛', 'qqwz破天焚舰'].randomGet();
									player2.init(KJL);
									player2.identity = player.identity;
									if (player2.identity == 'zhu') player2.identity = 'zhong';
									player2.setIdentity('虎将');
									player2.group = player.group;
									player2.identityShown = true;
									player2.draw(4);
									if (player2.name) {
										var skills0 = lib.character[player2.name][3];
									}
									if (player2.name1) {
										var skills1 = lib.character[player2.name1][3];
									}
									if (player2.name2) {
										var skills2 = lib.character[player2.name2][3];
									}
									if (player.maxHp > 0) player.loseMaxHp(1);
								}
							},
							group: 'qqwz_睥睨_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									content() {
										var list = [];
										for (var i in lib.character) {
											if (lib.character[i].mode && lib.character[i].mode.includes(lib.config.mode) == false) continue;
											if (i != 'list') list.push(i);
										}
										var players = game.players.concat(game.dead);
										for (var j = 0; j < players.length; j++) {
											list.remove([players[j].name]);
										}
										if (list.length) {
											var player2 = game.addPlayer();
											player2.getId();
											if (get.config('double_character') || lib.config.mode == 'guozhan') {
												var list2 = list.randomGets(2);
												player2.init(list2[0], list2[1]);
											} else {
												player2.init(list.randomGet());
											}
											var KJQ = ['qqwz盖世之才', 'qqwz锦运绵长', 'qqwz蓝田生玉', 'qqwz才猷蕴借'].randomGet();//QQQ
											player2.init(KJQ);
											player2.identity = player.identity;
											if (player2.identity == 'zhu') player2.identity = 'zhong';
											player2.setIdentity('英才');
											player2.group = player.group;
											player2.identityShown = true;
											player2.draw(4);
											if (player2.name) {
												var skills0 = lib.character[player2.name][3];
											}
											if (player2.name1) {
												var skills1 = lib.character[player2.name1][3];
											}
											if (player2.name2) {
												var skills2 = lib.character[player2.name2][3];
											}
											if (player.maxHp > 0) player.loseMaxHp(1);
											player.removeSkill('qqwz_睥睨');
										}
									},
								},
							},
						},
						qqwz_魂佑: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_魂佑2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								for (const i of game.players) {
									if (i.group == 'wu') i.draw(2);
								}
							},
						},
						qqwz_虎踞: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
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
							ai: {
								threaten: 1.3,
							},
						},
						qqwz_军霸2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							_priority: -500,
							content() {
								if (trigger.num > 1) trigger.num = 1;
							},
							group: ['qqwz_军霸3'],
						},
						qqwz_军霸3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDiscardBefore',
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						qqwz_转日: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_转日2',
							trigger: {
								player: 'shaBefore',
								target: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								if (event.card.name == 'sha') return true;
							},
							content() {
								player.recover();
								player.draw();
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'sha') return [1, 0.6];
									},
									player(card, player, target) {
										if (card.name == 'sha') return [1, 1];
									},
								},
							},
						},
						qqwz_转日2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'juedou';
							},
							content() {
								player.draw();
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_卧虎: {
							audio: 'ext:千秋万载/audio:2',
							derivation: ['qqwz_虎踞', 'qqwz_庇佑'],
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.hp != player.countCards('he') && !player.storage.qqwz_卧虎;
							},
							forced: true,
							_priority: 3,
							content() {
								player.loseHp(3);
								player.addSkill('qqwz_虎踞');
								player.addSkill('qqwz_庇佑');
								player.awakenSkill('qqwz_卧虎');
								player.storage.qqwz_卧虎 = true;
								game.createTrigger('phaseBegin', 'qqwz_庇佑', player, trigger);
							},
							ai: {
								threaten(player, target) {
									if (target.hp != target.countCards('he')) return 2;
									return 0.5;
								},
								maixie: true,
								effect: {
									target(card, player, target) {
										if (!target.hasFriend()) return;
										if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
									},
								},
							},
						},
						qqwz_庇佑: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.hp < player.maxHp;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(1, get.prompt('qqwz_庇佑'), function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (player.maxHp - player.hp == 1 && target.countCards('he') == 0) {
											return 0;
										}
										if (get.attitude(_status.event.player, target) > 0) {
											return 10 + get.attitude(_status.event.player, target);
										}
										if (player.maxHp - player.hp == 1) {
											return -1;
										}
										return 1;
									});
								('step 1');
								if (result.bool) {
									event.num = player.maxHp - player.hp;
									if (player.countCards('e') >= player.hp) {
										event.num = player.maxHp;
									}
									event.target = result.targets[0];
									if (event.num == 1) {
										event.directcontrol = true;
									} else {
										var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
										var str2 = '受到' + get.cnNumber(event.num, true) + '点伤害弃' + get.cnNumber(event.num, true);
										player
											.chooseControl(str1, str2, function (event, player) {
												return _status.event.choice;
											})
											.set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
										event.str = str1;
									}
								} else {
									event.finish();
								}
								('step 2');
								if (event.directcontrol || result.control == event.str) {
									event.target.draw(event.num);
									event.target.changeHujia(event.num), event.target.chooseToDiscard(true, 'he');
								} else {
									event.target.damage(event.num);
									event.target.chooseToDiscard(event.num, true, 'he');
								}
							},
							ai: {
								threaten(player, target) {
									if (target.hp == 1 || target.countCards('e') >= target.hp) return 2;
									if (target.hp == target.maxHp) return 0.5;
									if (target.hp == 2) return 1.5;
									return 0.5;
								},
								maixie: true,
								effect: {
									target(card, player, target) {
										if (target.maxHp <= 3) return;
										if (get.tag(card, 'damage')) {
											if (target.hp == target.maxHp) return [0, 1];
										}
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
									},
								},
							},
						},
						qqwz_联盟: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_联盟2',
							enable: 'phaseUse',
							usable: 1,
							changeSeat: true,
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								target.gain(player.getCards('h'));
								target.$give(player.countCards('h'), target);
								player.draw(2);
							},
						},
						qqwz_联盟2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								player.draw(3);
							},
						},
						qqwz_人杰: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							delay: 0,
							forced: true,
							content() {
								'step 0';
								var dialog = ui.create.dialog('人杰');
								for (const i of game.players) {
									if (i == player) continue;
									if (i.countCards('h')) {
										dialog.add(get.translation(i) + '的手牌');
										var hs = i.getCards('h');
										dialog.add(hs);
									}
								}
								event.dialog = dialog;
								if (player == game.me) {
									if (event.isMine()) {
										game.pause();
										ui.create.confirm('o');
										game.countChoose();
										event.choosing = true;
									} else {
										event.finish();
										event.result = 'viewed';
										setTimeout(function () {
											event.dialog.close();
										}, 2 * lib.config.duration);
									}
								} else {
									event.finish();
								}
								('step 1');
								event.result = 'viewed';
								_status.imchoosing = false;
								event.choosing = false;
								if (event.dialog) event.dialog.close();
							},
							group: 'qqwz_人杰2',
						},
						qqwz_人杰2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageEnd',
								player: 'damageEnd',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(
										'人杰:选择两名角色置换他们的手牌',
										function (card, player, target) {
											return target.countCards('h');
										},
										2
									)
									.set('ai', function (target) {
										if (!ui.selected.targets.length) return -get.attitude(player, target) + target.countCards('h');
										if (ui.selected.targets.length) {
											var num = ui.selected.targets[0].countCards('h') - target.countCards('h');
											if (num > 0) return get.attitude(player, target);
											return 0;
										}
									});
								('step 1');
								if (result.bool) {
									event.cards0 = result.targets[0].getCards('h');
									event.cards1 = result.targets[1].getCards('h');
									result.targets[0].lose(event.cards0, ui.special);
									result.targets[1].lose(event.cards1, ui.special);
									result.targets[0].gain(event.cards1, result.targets[1]);
									result.targets[1].gain(event.cards0, result.targets[0]);
									result.targets[0].$give(event.cards0.length, result.targets[1]);
									result.targets[1].$give(event.cards1.length, result.targets[0]);
								} else {
									event.finish();
								}
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkill('jueqing')) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp >= 4 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 2];
											if (target.hp == 3 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 1.5];
											if (target.hp == 2 && player.countCards('h') > target.countCards('h')) return [1, get.tag(card, 'damage') * 0.5];
										}
									},
								},
							},
						},
						qqwz_施财: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.draw(2);
								player.recover();
								('step 1');
								for (const i of game.players) {
									if (i != player) {
										i.draw(2);
									}
								}
							},
						},
						qqwz_明谏: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.num('h', { type: 'equip' }) > 0;
							},
							filterCard(card, player) {
								return get.type(card) == 'equip';
							},
							filterTarget(card, player, target) {
								if (target.isMin()) return false;
								return player != target;
							},
							content() {
								target.addTempSkill('qqwz_暗谏');
								target.equip(cards[0]);
								player.draw(2);
								player.recover();
							},
							ai: {
								basic: {
									order: 10,
								},
								result: {
									target: 3,
								},
								threaten: 1.3,
							},
						},
						qqwz_暗谏: {
							trigger: {
								player: 'equipBegin',
							},
							forced: true,
							filter(event, player) {
								return player.num('e', { type: 'equip' }) && get.type(event.card) == 'equip';
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
										if (get.type(card) == 'equip') return [1, 10];
									},
								},
							},
						},
						qqwz_修政: {
							audio: 'ext:千秋万载/audio:2',
							gainable: true,
							trigger: {
								global: 'discardAfter',
							},
							filter(event, player) {
								if (event.player != player && event.player.classList.contains('dead') == false && event.cards && event.cards.length && event.getParent(2).name == 'phaseDiscard') {
									if (Array.isArray(event.cards)) for (const i of event.cards) {
										if (get.position(i) == 'd') {
											return true;
										}
									}
									return false;
								}
							},
							checkx(event, player) {
								var du = false;
								var num = 0;
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (get.position(i) == 'd') {
										num++;
										if (i.name == 'du') {
											du = true;
										}
									}
								}
								if (get.attitude(player, event.player) > 0) {
									if (du && num <= 3) {
										return false;
									}
									return true;
								}
								if (du) return true;
								return num > 2;
							},
							forced: true,
							content() {
								'step 0';
								event.cards = trigger.cards.slice(0);
								event.cards = event.cards.filter((i) => get.position(i) == 'd');
								if (event.cards.length == 0) {
									event.finish();
									return;
								}
								var check = lib.skill.qqwz_修政.checkx(trigger, player);
								player
									.chooseCardButton(event.cards, '修政:选择令' + get.translation(trigger.player) + '收回的牌')
									.set('ai', function (button) {
										if (_status.event.check) {
											return 20 - get.value(button.link);
										}
										return 0;
									})
									.set('check', check);
								('step 1');
								if (result.bool) {
									trigger.player.gain(result.links[0]);
									trigger.player.$gain2(result.links[0]);
									game.log(trigger.player, '收回了', result.links[0]);
									event.cards.remove(result.links[0]);
									if (event.cards.length) {
										player.gain(event.cards);
										player.$gain2(event.cards);
										game.log(player, '收回了', event.cards);
									}
								}
							},
							ai: {
								threaten: 1.3,
								expose: 0.2,
							},
							group: ['qqwz_修政_1'],
							subSkill: {
								1: {
									trigger: {
										global: 'gameDrawAfter',
									},
									forced: true,
									content() {
										player.forcemin = true;
									},
								},
							},
						},
						qqwz_魂佑2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								for (const i of game.players) {
									if (i.group == 'wei') i.loseHp(2);
								}
							},
						},
						qqwz_芙蓉: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_芙蓉_color', 'qqwz_芙蓉_color2'],
							subSkill: {
								color: {
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									popup: false,
									silent: true,
									content() {
										player.storage.qqwz_芙蓉_color = ['black', 'red'];
									},
								},
								color2: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return Array.isArray(player.storage.qqwz_芙蓉_color) && _status.currentPhase == player;
									},
									content() {
										player.storage.qqwz_芙蓉_color.remove(get.color(trigger.card));
									},
								},
							},
							trigger: {
								player: 'phaseDiscardBegin',
							},
							forced: true,
							filter(event, player) {
								if (!player.storage.qqwz_芙蓉_color) return false;
								var length = player.storage.qqwz_芙蓉_color.length;
								if (length == 0) return false;
								var hs = player.getCards('h');
								if (hs.length == 0) return false;
								if (length == 2) return true;
								var color = player.storage.qqwz_芙蓉_color[0];
								for (let i = 0; i < hs.length; i++) {
									if (get.color(hs[i]) == color) return true;
								}
								return false;
							},
							intro: {
								content: 'cards',
							},
							init(player) {
								player.storage.qqwz_芙蓉 = [];
							},
							content() {
								'step 0';
								player
									.chooseCard(get.prompt('qqwz_芙蓉'), function (card) {
										return _status.event.player.storage.qqwz_芙蓉_color.includes(get.color(card));
									})
									.set('ai', function (card) {
										var player = _status.event.player;
										if (player.storage.qqwz_芙蓉.length == 2) {
											if (
												!game.hasPlayer(function (current) {
													return current != player && ai.get.damageEffect(current, player, player) > 0 && get.attitude(player, current) < 0;
												})
											)
												return 0;
										}
										return 7 - get.value(card);
									});
								('step 1');
								if (result.bool) {
									if (player.storage.qqwz_芙蓉.length < 2) {
										player.$give(result.cards, player);
									}
									player.lose(result.cards, ui.special);
									player.storage.qqwz_芙蓉 = player.storage.qqwz_芙蓉.concat(result.cards);
									player.markSkill('qqwz_芙蓉');
								} else {
									event.finish();
								}
								('step 2');
								if (player.storage.qqwz_芙蓉.length == 2) {
									player.$throw(player.storage.qqwz_芙蓉);
									while (player.storage.qqwz_芙蓉.length) {
										ui.discardPile.appendChild(player.storage.qqwz_芙蓉.shift());
									}
									player.unmarkSkill('qqwz_芙蓉');
									player
										.chooseTarget(function (card, player, target) {
											return target != player;
										}, '对一名角色造成4点神圣伤害并弃置其装备区内的牌')
										.set('ai', function (target) {
											var player = _status.event.player;
											if (get.attitude(player, target) > 0) return -1;
											return ai.get.damageEffect(target, player, player) + target.countCards('e') / 2;
										});
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									target.damage(4)._triggered = null;
									event.target = target;
									player.line(target, 'green');
								} else {
									event.finish();
								}
								('step 4');
								if (event.target && event.target.isAlive()) {
									var es = event.target.getCards('e');
									if (es.length) {
										event.target.discard(es);
									}
								}
							},
							ai: {
								threaten: 1.5,
							},
						},
						qqwz_沉鱼: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								player.addTempSkill('qqwz_花落', { player: 'phaseBegin' });
								player.addTempSkill('qqwz_流年', { player: 'phaseBegin' });
							},
						},
						qqwz_狂傲: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'chooseToRespondBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.responded) return false;
								return _status.currentPhase !== player;
							},
							content() {
								'step 0';
								var cards = [];
								if (ui.cardPile.childNodes.length < 10) {
									var discardcards = get.cards(10);
									for (let i = 0; i < discardcards.length; i++) {
										ui.discardPile.appendChild(discardi);
									}
								}
								for (let i = 0; i < 10; i++) {
									cards.push(ui.cardPile.childNodes[i]);
								}
								player.chooseCardButton('狂傲:选择一张卡牌打出', cards).set('filterButton', function (button) {
									return get.type(button.link) == 'basic' && _status.event.getTrigger().filterCard(button.link);
								});
								('step 1');
								if (result.bool) {
									game.log(player, '狂傲发动成功');
									trigger.untrigger();
									trigger.responded = true;
									result.links[0].remove();
									trigger.result = { bool: true, card: result.links[0] };
								}
							},
							ai: {
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan')) return 0.7;
										if (get.tag(card, 'respondSha')) return 0.7;
									},
								},
							},
							group: 'qqwz狂傲2',
						},
						qqwz_杀令: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_杀令2'],
							enable: 'chooseToUse',
							filter(event, player) {
								return player.num('h', { type: 'basic' });
							},
							chooseButton: {
								dialog() {
									var list = [];
									for (var i in lib.card) {
										if (!lib.translate[i + '_info']) continue;
										if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
										if (lib.card[i].type == 'basic') list.push(['basic', '', i]);
									}
									list.push(['基本', '', 'sha', 'fire']);
									list.push(['基本', '', 'sha', 'thunder']);
									list.push(['基本', '', 'sha', 'poison']);
									return ui.create.dialog('杀令:请选择想要使用的基本牌', [list, 'vcard']);
								},
								filter(button, player) {
									return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									var player = _status.event.player;
									var shaTarget = false;
									for (const i of game.players) {
										if (player.canUse('sha', i) && ai.get.effect(i, { name: 'sha' }, player) > 0) {
											shaTarget = true;
										}
									}
									if (player.isDamaged()) return button.link[2] == 'tao' ? 1 : -1;
									if (shaTarget && player.num('h', 'sha') && !player.num('h', 'jiu')) return button.link[2] == 'jiu' ? 1 : -1;
									if (shaTarget && !player.num('h', 'sha')) return button.link[2] == 'sha' ? 1 : -1;
									return button.link[2] == 'sha' ? 1 : -1;
								},
								backup(links, player) {
									return {
										filterCard(card, player) {
											return get.type(card) == 'basic';
										},
										audio: 'ext:千秋万载/audio:2',
										popname: true,
										viewAs: { name: links[0][2] },
									};
								},
								prompt(links, player) {
									return '将一张基本牌当' + get.translation(links[0][2]) + '使用';
								},
							},
							ai: {
								save: true,
								order: 6,
								result: {
									player: 1,
								},
							},
						},
						qqwz_杀令2: {
							audio: 'ext:千秋万载/audio:2',
							enable: ['chooseToRespond'],
							filterCard(card, player) {
								return get.type(card) == 'basic';
							},
							viewAs: {
								name: 'shan',
							},
							viewAsFilter(player) {
								if (!player.num('h', { type: 'basic' })) return false;
							},
							prompt: '将一张基本牌当闪打出',
							check() {
								return 1;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.num('h', { type: 'basic' })) return false;
								},
								result: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') && current < 0) return 0.6;
									},
								},
								basic: {
									useful: [7, 2],
									value: [7, 2],
								},
							},
						},
						qqwz_举国: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 5,
							filterCard() {
								if (ui.selected.targets.length) return false;
								return true;
							},
							position: 'he',
							selectCard: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							check(card) {
								switch (ui.selected.cards.length) {
									case 0:
										return 7 - get.value(card);
									case 1:
										return 6 - get.value(card);
									case 2:
										return 3 - get.value(card);
									default:
										return 0;
								}
							},
							content() {
								target.damage();
							},
							ai: {
								order: 2,
								result: {
									target(player, target) {
										return ai.get.damageEffect(target, player);
									},
								},
								threaten: 1.5,
								expose: 0.3,
							},
						},
						qqwz_合纵: {
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							content() {
								'step 0';
								var check;
								if (player.countCards('h') == 0) {
									check = false;
								} else {
									check =
										game.countPlayer(function (current) {
											return player != current && get.attitude(player, current) > 1;
										}) >= 2;
								}
								if (get.is.versus()) {
									event.versus = true;
									player.chooseBool(get.prompt('qqwz_合纵'));
								} else {
									player
										.chooseTarget(
											get.prompt('qqwz_合纵'),
											[1, 3],
											function (card, player, target) {
												return player != target;
											},
											function (target) {
												if (!_status.event.check) return 0;
												return get.attitude(_status.event.player, target);
											}
										)
										.set('check', check);
								}
								('step 1');
								if (result.bool) {
									var targets;
									if (event.versus) {
										targets = game.filterPlayer(function (current) {
											return current != player && current.side == player.side;
										});
									} else {
										targets = result.targets;
									}
									game.asyncDraw(targets);
									trigger.num--;
								}
							},
						},
						qqwz_连横: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'judge',
							},
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							logTarget: 'player',
							check(event, player) {
								if (get.attitude(player, event.player) <= 0) return false;
								var cards = player.getCards('he');
								var judge = event.judge(event.player.judging[0]);
								if (Array.isArray(cards)) for (const i of cards) {
									var judge2 = event.judge(i);
									if (_status.currentPhase != player && judge2 == judge && get.color(i) == 'red' && ai.get.useful(i) < 5) return true;
									if (judge2 > judge) return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.draw(2);
								var target = trigger.player;
								player.line(target, 'green');
								var judge = trigger.judge(target.judging[0]);
								var attitude = get.attitude(target, player);
								target
									.choosePlayerCard('请选择代替判定的牌', 'he', 'visible', true, player)
									.set('ai', function (button) {
										var card = button.link;
										var judge = _status.event.judge;
										var attitude = _status.event.attitude;
										var result = trigger.judge(card) - judge;
										var player = _status.event.player;
										if (result > 0) {
											return 20 + result;
										}
										if (result == 0) {
											if (_status.currentPhase == player) return 0;
											if (attitude >= 0) {
												return get.color(card) == 'red' ? 7 : 0 - get.value(card);
											} else {
												return get.color(card) == 'black' ? 10 : 0 + get.value(card);
											}
										}
										if (attitude >= 0) {
											return get.color(card) == 'red' ? 0 : -10 + result;
										} else {
											return get.color(card) == 'black' ? 0 : -10 + result;
										}
									})
									.set('judge', judge)
									.set('attitude', attitude);
								('step 1');
								if (result.bool) {
									event.card = result.links[0];
									player.respond(event.card, 'highlight');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									if (trigger.player.judging[0].clone) {
										trigger.player.judging[0].clone.classList.remove('thrownhighlight');
										game.broadcast(function (card) {
											if (card.clone) {
												card.clone.classList.remove('thrownhighlight');
											}
										}, trigger.player.judging[0]);
										game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
									}
									ui.discardPile.appendChild(trigger.player.judging[0]);
									trigger.player.judging[0] = event.card;
									if (!get.owner(event.card, 'judge')) {
										trigger.position.appendChild(event.card);
									}
									game.log(trigger.player, '的判定牌改为', event.card);
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						qqwz_料敌: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: ['useCardAfter', 'respondAfter', 'discardAfter'],
							},
							forced: true,
							content() {
								player.draw();
								player.recover(2);
							},
							ai: {
								threaten: 0.7,
							},
						},
						qqwz_致死: {
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.storage.qqwz_引敌 && player.storage.qqwz_引敌.length;
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qqwz_致死'), function (card, player, target) {
										return player.hp >= target.hp;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (target == player) {
											if (player.countCards('h') >= player.maxHp) return 0;
											return 0.5;
										}
										var att = get.attitude(player, target);
										if (att < 2) return 0;
										if (target.hp == 1 && att > 2) {
											att += 2;
										}
										if (player.num('j', 'lebu')) {
											if (target.hp == target.maxHp) return att - 2;
											return att - 1;
										}
										if (target.hp == target.maxHp) return 0;
										if (player.countCards('h') < player.hp - 1) {
											return att - 3;
										}
										return att - 2;
									});
								('step 1');
								if (result.bool) {
									if (result.targets[0] == player) {
										player.$throw(player.storage.qqwz_引敌, 1000);
										var num = player.maxHp - player.countCards('h');
										if (num > 0) player.draw(num);
										while (player.storage.qqwz_引敌.length) {
											ui.discardPile.appendChild(player.storage.qqwz_引敌.shift());
										}
										player.unmarkSkill('qqwz_引敌');
									} else {
										var target = result.targets[0];
										target.recover(3);
										target.gain(player.storage.qqwz_引敌.slice(0), 'gain2', 'log');
										target.draw(player.storage.qqwz_引敌.length);
										player.storage.qqwz_引敌.length = 0;
									}
									player.unmarkSkill('qqwz_引敌');
								}
							},
						},
						qqwz_引敌: {
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							init(player) {
								player.storage.qqwz_引敌 = [];
							},
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							marktext: '敌',
							content() {
								'step 0';
								player
									.chooseCard([1, player.countCards('he')], 'he', get.prompt('qqwz_引敌'), function (card) {
										return player.countCards('he') > 0;
									})
									.set('ai', function (card) {
										return 6 - get.value(card);
									});
								('step 1');
								if (result.bool) {
									player.$give(result.cards, player, false);
									game.log(player, '将', result.cards, '置于武将牌上');
									player.storage.qqwz_引敌 = player.storage.qqwz_引敌.concat(result.cards);
									player.lose(result.cards, ui.special);
									player.markSkill('qqwz_引敌');
								}
							},
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										for (let i = 0; i < storage.length; i++) {
											ui.discardPile.appendChild(storage[i]);
										}
										player.$throw(storage);
										delete player.storage.qqwz_引敌;
									}
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha' || card.name == 'juedou') {
											if (current < 0) return 1.2;
										}
									},
								},
								threaten(player, target) {
									if (target.storage.yinbing && target.storage.yinbing.length) return 2;
									return 1;
								},
							},
						},
						qqwz_冷兵: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								return game.hasPlayer(function (current) {
									return !event.targets.includes(current) && get.distance(player, current) <= 1 && player.canUse('sha', current);
								});
							},
							forced: true,
							content() {
								'step 0';
								player.draw(2);
								player
									.chooseTarget(get.prompt('qqwz_冷兵'), function (card, player, target) {
										return !_status.event.source.includes(target) && get.distance(player, target) <= 1 && player.canUse('sha', target);
									})
									.set('source', trigger.targets)
									.set('ai', function (target) {
										var player = _status.event.player;
										return ai.get.effect(target, { name: 'sha' }, player, player);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								trigger.targets.push(event.target);
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (card.name == 'sha') {
											if (player._duanbingtmp) return;
											player._duanbingtmp = true;
											if (ai.get.effect(target, { name: 'sha' }, player, player) <= 0) {
												delete player._duanbingtmp;
												return;
											}
											if (
												game.hasPlayer(function (current) {
													return current != target && get.distance(player, current) <= 1 && player.canUse('sha', current) && ai.get.effect(current, { name: 'sha' }, player, player) > 0;
												})
											) {
												delete player._duanbingtmp;
												return [1, 1];
											}
											delete player._duanbingtmp;
										}
									},
								},
							},
						},
						qqwz_迅疾: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								target.loseMaxHp();
								player.storage.qqwz_迅疾2 = target;
								player.addTempSkill('qqwz_迅疾2', 'phaseAfter');
							},
							check(card) {
								if (card.name == 'sha' && _status.event.player.num('h', 'sha') <= 1) return 0;
								return 6 - get.value(card);
							},
							filterCard: true,
							ai: {
								order: 4,
								result: {
									player(player, target) {
										if (get.distance(player, target) <= 1) return 0;
										var hs = playe.getCards('h', 'shunshou');
										if (hs.length && player.canUse(hs[0], target, false)) {
											return 1;
										}
										var geteff = function (current) {
											return ai.get.effect(current, { name: 'sha' }, player, player) > 0;
										};
										if (player.hasSha() && geteff(target)) {
											var num = game.countPlayer(function (current) {
												return current != player && get.distance(player, current) <= 1 && geteff(current);
											});
											if (num == 0) {
												if (
													game.hasPlayer(function (current) {
														return player.canUse('sha', current) && geteff(current) && current != target;
													})
												) {
													return 1;
												}
											} else if (num == 1) {
												return 1;
											}
										}
										return 0;
									},
								},
							},
						},
						qqwz_迅疾2: {
							intro: {
								content: '到$的距离视为1',
							},
							mod: {
								globalFrom(from, to) {
									if (to == from.storage.qqwz_迅疾2) {
										return -Infinity;
									}
								},
							},
						},
						qqwz_年华: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							filter(event, player) {
								return event.player != player && get.distance(event.player, player, 'attack') > 1;
							},
							logTarget: 'player',
							check(event, player) {
								if (get.attitude(player, event.player) >= 0) return false;
								var e2 = player.getEquips(2);
								if (e2) {
									if (e2.name == 'tengjia') return true;
									if (e2.name == 'bagua') return true;
								}
								return player.num('h', 'shan') > 0;
							},
							content() {
								player.recover();
								var target = trigger.player;
								target.addTempSkill('qqwz_年华_viewas', 'phaseAfter');
								target.addTempSkill('qqwz_年华_range', 'phaseAfter');
								target.storage.qqwz_年华 = player;
								target.markSkillCharacter('qqwz_年华', player, '年华', '锦囊牌均视为毒且' + get.translation(player) + '视为在攻击范围内');
							},
							ai: {
								expose: 0.2,
							},
							subSkill: {
								range: {
									mod: {
										targetInRange(card, player, target) {
											if (card.name == 'du' && target == player.storage.qqwz_年华) {
												return true;
											}
										},
									},
									onremove(player) {
										game.broadcast(function (player) {
											if (player.marks.qqwz_年华) {
												player.marks.qqwz_年华.delete();
												delete player.marks.qqwz_年华;
											}
										}, player);
										if (player.marks.qqwz_年华) {
											player.marks.qqwz_年华.delete();
											delete player.marks.qqwz_年华;
											game.addVideo('unmark', player, 'qqwz_年华');
										}
									},
									trigger: {
										player: 'useCard',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.skill == 'qqwz_年华_viewas';
									},
									content() {
										player.removeSkill('qqwz_年华_viewas');
										game.broadcastAll(function (player) {
											if (player.marks.qqwz_年华 && player.marks.qqwz_年华.info) {
												player.marks.qqwz_年华.info.content = player.marks.qqwz_年华.info.content.slice(8);
											}
										}, player);
									},
								},
								viewas: {
									mod: {
										cardEnabled(card, player) {
											if (card.name != 'du' && get.type(card, 'trick') == 'trick') return false;
										},
										cardUsable(card, player) {
											if (card.name != 'du' && get.type(card, 'trick') == 'trick') return false;
										},
										cardRespondable(card, player) {
											if (card.name != 'du' && get.type(card, 'trick') == 'trick') return false;
										},
										cardSavable(card, player) {
											if (card.name != 'du' && get.type(card, 'trick') == 'trick') return false;
										},
									},
									enable: ['chooseToUse', 'chooseToRespond'],
									filterCard(card, player) {
										return get.type(card, 'trick') == 'trick';
									},
									viewAs: {
										name: 'du',
										suit: 'spade',
										number: 4,
									},
									check() {
										return 1;
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'respondSha') && current < 0) return 0.8;
											},
										},
										respondSha: true,
										order: 4,
										useful: -1,
										value: -1,
										basic: {
											useful: [5, 1],
											value: [5, 1],
										},
										result: {
											target(player, target) {
												if (player.hasSkill('jiu') && !target.num('e', 'baiyin')) {
													if (get.attitude(player, target) > 0) {
														return -6;
													} else {
														return -3;
													}
												}
												return -1.5;
											},
											player(player, target) {
												if (player.hasSkillTag('usedu')) return 5;
												return -1;
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
							},
						},
						qqwz_朝露: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterCard(card, player, target) {
								return get.type(card, 'basic') == 'basic';
							},
							check(card) {
								return 7 - get.value(card);
							},
							filterTarget(card, player, target) {
								if (target == player) return false;
								return target.getEquips(1) || target.getEquips(2);
							},
							content() {
								'step 0';
								var e1 = target.getEquips(1);
								var e2 = target.getEquips(2);
								event.e1 = e1;
								event.e2 = e2;
								if (e1 && e2) {
									player.chooseControl('武器牌', '防具牌').set('ai', function () {
										if (_status.event.player.getEquips(2)) {
											return '武器牌';
										}
										return '防具牌';
									});
								} else if (e1) {
									event.choice = '武器牌';
								} else {
									event.choice = '防具牌';
								}
								('step 1');
								var choice = event.choice || result.control;
								if (choice == '武器牌') {
									if (event.e1) {
										target.discard(event.e1);
										target.$give(event.e1, player);
									}
									player.recover(2);
								} else {
									if (event.e2) {
										player.equip(event.e2);
										target.$give(event.e2, player);
									}
								}
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (target.getEquips(2) && !player.getEquips(2)) {
											return -2;
										}
										return -1;
									},
								},
							},
						},
						qqwz_残戮: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDrawBefore',
							},
							check(event, player) {
								var num = 0;
								for (const i of game.players) {
									if (i.hp < i.maxHp) {
										num++;
										if (num > 3) return true;
									}
								}
								return false;
							},
							prompt() {
								var num = 0;
								for (const i of game.players) {
									if (i.hp < i.maxHp) {
										num++;
									}
								}
								return '残戮:是否放弃摸牌,改为摸' + get.cnNumber(num) + '张牌并回复等量体力';
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								var num = 0;
								for (const i of game.players) {
									if (i.hp < i.maxHp) {
										num++;
									}
								}
								if (num > 0) {
									player.draw(num);
									player.recover(num);
								}
							},
						},
						qqwz_血仇: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') == 0;
							},
							content() {
								trigger.num = 0;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && target.countCards('h') == 0) return [1, -2];
									},
								},
							},
						},
						qqwz_丧命: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 1,
							delay: 0,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.showHandcards();
								('step 1');
								if (player.num('h', { color: 'black' }) >= player.num('h', { color: 'red' })) player.useCard({ name: 'tao' }, player);
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.getStat().card.sha > 0) return 0;
										if (player.num('h', 'tao')) return 0;
										if (player.hasSkill('tao')) return 0;
										if (!player.num('h', 'tao')) return 0;
										if (player.num('h', { color: 'black' }) >= player.num('h', { color: 'red' })) return 3;
										return 0;
									},
								},
							},
						},
						qqwz_凌风: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							usable: 5,
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget([1, 2], get.prompt('qqwz_凌风'), function (card, player, target) {
										if (player == target) return false;
										return target.countCards('he');
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
									if (result.targets.length == 1) {
										player.discardPlayerCard(event.targets[0], 'he', [1, 2], true);
									} else {
										player.discardPlayerCard(event.targets[0], 'he', true);
									}
								} else {
									event.finish();
								}
								('step 2');
								if (targets.length == 2) {
									player.discardPlayerCard(targets[1], 'he', true);
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
									},
								},
								noe: true,
							},
						},
						qqwz_御风: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (i.original == 'e') return true;
								}
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qqwz_御风'), function (card, player, target) {
										if (target == player) return false;
										return get.distance(player, target) <= 1 || player.canUse('sha', target, false);
									})
									.set('ai', function (target) {
										if (get.distance(player, target) <= 1) {
											return ai.get.damageEffect(target, player, player) * 2;
										} else {
											return ai.get.effect(target, { name: 'sha' }, player, player);
										}
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									var distance = get.distance(player, target);
									if (distance <= 1 && player.canUse('sha', target, false)) {
										player.chooseControl('出杀', '造成伤害').ai = function () {
											return '造成伤害';
										};
										event.target = target;
									} else if (distance <= 1) {
										target.damage();
										event.finish();
									} else {
										player.useCard({ name: 'sha' }, target, false).animate = false;
										event.finish();
									}
								} else {
									event.finish();
								}
								('step 2');
								var target = event.target;
								if (result.control == '出杀') {
									player.useCard({ name: 'sha' }, target, false).animate = false;
								} else {
									target.damage(2);
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
									},
								},
								noe: true,
							},
						},
						qqwz_携手: {
							enable: 'phaseUse',
							usable: 2,
							audio: 'ext:千秋万载/audio:2',
							selectTarget: 2,
							filterTarget(card, player, target) {
								if (target.isMin()) return false;
								if (ui.selected.targets.length == 0) return true;
								if (ui.selected.targets[0].countCards('e') == 0 && target.countCards('e') == 0) return false;
								return Math.abs(ui.selected.targets[0].countCards('e') - target.countCards('e')) <= player.maxHp;
							},
							multitarget: true,
							content() {
								'step 0';
								event.cards = [targets[0].getCards('e'), targets[1].getCards('e')];
								targets[0].lose(event.cards[0], ui.special);
								targets[1].lose(event.cards[1], ui.special);
								if (event.cards[0].length) targets[0].$give(event.cards[0], targets[1]);
								if (event.cards[1].length) targets[1].$give(event.cards[1], targets[0]);
								('step 1');
								for (let i = 0; i < event.cards[1].length; i++) {
									targets[0].equip(event.cards[1][i]);
								}
								for (let i = 0; i < event.cards[0].length; i++) {
									targets[1].equip(event.cards[0][i]);
								}
							},
							ai: {
								order: 10,
								threaten(player, target) {
									return 0.8 * Math.max(1 + target.maxHp);
								},
								result: {
									target(player, target) {
										var list1 = [];
										var list2 = [];
										var num = player.maxHp;
										var players = game.filterPlayer();
										for (const i of players) {
											if (get.attitude(player, i) > 0) list1.push(i);
											else if (get.attitude(player, i) < 0) list2.push(i);
										}
										list1.sort(function (a, b) {
											return a.countCards('e') - b.countCards('e');
										});
										list2.sort(function (a, b) {
											return b.countCards('e') - a.countCards('e');
										});
										var delta;
										for (let i = 0; i < list1.length; i++) {
											for (var j = 0; j < list2.length; j++) {
												delta = list2[j].countCards('e') - list1[i].countCards('e');
												if (delta <= 0) continue;
												if (delta <= num) {
													if (target == list1[i] || target == list2[j]) {
														return get.attitude(player, target);
													}
													return 0;
												}
											}
										}
										return 0;
									},
								},
								effect: {
									target(card, player, target) {
										if (target.hp == target.maxHp && get.tag(card, 'damage')) return 0.2;
									},
								},
							},
						},
						qqwz_招亲: {
							trigger: {
								global: 'dying',
							},
							_priority: 6,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return event.player.hp <= 0 && event.player.countCards('h') > 0;
							},
							check(event, player) {
								if (event.player.isUnderControl(true, player)) {
									return (
										event.playe.getCards('h', function (card) {
											return get.type(card) != 'food';
										}).length
									);
								}
								return get.attitude(player, event.player) > 0;
							},
							forced: true,
							content() {
								'step 0';
								var check = false;
								if (trigger.player == player) {
									if (
										player.num('h', function (card) {
											return get.type(card) != 'food';
										})
									) {
										check = true;
									}
								} else {
									if (get.attitude(player, trigger.player) > 0) {
										check = true;
									}
								}
								player
									.choosePlayerCard(trigger.player, get.prompt('qqwz_招亲', trigger.player), 'h')
									.set('ai', function (button) {
										if (!_status.event.check) return 0;
										if (_status.event.target.isUnderControl(true, _status.event.player)) {
											if (get.type(button.link) != 'food') {
												return 10 - get.value(button.link);
											}
											return 0;
										} else {
											return Math.random();
										}
									})
									.set('check', check)
									.set('filterButton', function (button) {
										if (_status.event.player == _status.event.target) {
											return lib.filter.cardDiscardable(button.link, _status.event.player);
										}
										return true;
									});
								('step 1');
								if (result.bool) {
									event.card = result.links[0];
									player.showCards([event.card], get.translation(player) + '展示的手牌');
								} else {
									event.finish();
								}
								('step 2');
								if (get.type(event.card) != 'food') {
									trigger.player.hp = player.maxHp;
									trigger.player.discard(event.card);
								}
							},
							ai: {
								threaten: 1.4,
							},
						},
						qqwz_镇军: {
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.target.hp > 0 && event.target.countCards('he') > 0;
							},
							audio: 'ext:千秋万载/audio:2',
							logTarget: 'target',
							content() {
								'step 0';
								player.addTempSkill('qqwz_镇军血', 'phaseAfter');
								player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.countCards('he'), trigger.target.hp * 2)], get.prompt('qqwz_镇军', trigger.target));
								('step 1');
								if (result.bool && result.links.length) {
									if (trigger.target.storage.qqwz_镇军2) {
										trigger.target.storage.qqwz_镇军2 = trigger.target.storage.qqwz_镇军2.concat(result.links);
									} else {
										trigger.target.storage.qqwz_镇军2 = result.links;
									}
									game.addVideo('storage', trigger.target, ['qqwz_镇军2', get.cardsInfo(trigger.target.storage.qqwz_镇军2), 'cards']);
									trigger.target.lose(result.links, ui.special);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						qqwz_镇军血: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								if (event.player.getCards('h').length == 0) return true;
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (target.getCards('h').length == 0) return [1, -2];
									},
								},
							},
						},
						qqwz_定心: {
							enable: 'phaseUse',
							usable: 2,
							multitarget: true,
							audio: 'ext:千秋万载/audio:2',
							filterTarget(card, player, target) {
								if (player == target) return false;
								var num = target.countCards('h');
								if (ui.selected.targets.length) {
									return num < ui.selected.targets[0].countCards('h');
								}
								var players = game.filterPlayer();
								for (const i of players) {
									if (num > i.countCards('h')) return true;
								}
								return false;
							},
							selectTarget: 2,
							content() {
								'step 0';
								var gainner, giver;
								if (targets[0].countCards('h') < targets[1].countCards('h')) {
									gainner = targets[0];
									giver = targets[1];
								} else {
									gainner = targets[1];
									giver = targets[0];
								}
								giver.chooseCard('选择1张手牌交给' + get.translation(gainner), true);
								event.gainner = gainner;
								event.giver = giver;
								('step 1');
								var card = result.cards[0];
								event.gainner.gain(card, event.giver);
								event.giver.$give(1, event.gainner);
								('step 2');
								if (event.gainner.countCards('h') != event.giver.countCards('h')) {
									if (player.hp < player.maxHp) {
										player.chooseControl('draw_card', 'recover_hp', function (event, player) {
											if (player.hp >= 3 && player.countCards('h') < player.hp) return 'draw_card';
											return 'recover_hp';
										});
									} else {
										player.draw(2);
										event.finish();
									}
								} else {
									event.finish();
								}
								('step 3');
								if (result.control == 'draw_card') {
									player.draw(2);
								} else {
									player.recover(3);
								}
							},
							ai: {
								order: 10.5,
								threaten: 2,
								result: {
									target(player, target) {
										var num = target.countCards('h');
										var att = get.attitude(player, target);
										if (ui.selected.targets.length == 0) {
											if (att > 0) return -1;
											var players = game.filterPlayer();
											for (const i of players) {
												var num2 = i.countCards('h');
												var att2 = get.attitude(player, i);
												if (att2 >= 0 && num2 < num) return -1;
											}
											return 0;
										} else {
											return 1;
										}
									},
									player: 0.1,
								},
							},
						},
						qqwz_魂忆: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qqwz_魂忆'), function (card, player, target) {
										return player != target && _status.event.source != target;
									})
									.set('ai', function (target) {
										var num = get.attitude(_status.event.player, target);
										if (num > 0) {
											if (target.hp == 1) {
												num += 2;
											}
											if (target.hp < target.maxHp) {
												num += 2;
											}
										}
										return num;
									})
									.set('source', trigger.source);
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.hp = target.maxHp;
									target.draw(5);
								}
							},
							ai: {
								expose: 0.5,
							},
						},
						qqwz_佳酿: {
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							init(player) {
								player.storage.qqwz_佳酿 = [];
							},
							intro: {
								content: 'cards',
							},
							content() {
								'step 0';
								player.chooseCard([1, player.countCards('h')], get.prompt('qqwz_佳酿')).set('ai', function () {
									return 1;
								});
								('step 1');
								if (result.bool) {
									player.storage.qqwz_佳酿 = player.storage.qqwz_佳酿.concat(result.cards);
									player.markSkill('qqwz_佳酿');
									player.lose(result.cards, ui.special);
									player.$give(result.cards, player);
								}
							},
							ai: {
								effect: {
									player(card, player) {
										if (_status.currentPhase != player) return;
										if (player.countCards('h') <= player.hp && !player.storage.qqwz_佳酿.length) {
											return [0, 0, 0, 0];
										}
									},
								},
								threaten: 1.4,
							},
							group: 'qqwz_佳酿2',
						},
						qqwz_佳酿2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'dying',
							},
							_priority: 6,
							filter(event, player) {
								return event.player.hp <= 0 && player.storage.qqwz_佳酿.length;
							},
							forced: true,
							content() {
								'step 0';
								var att = get.attitude(player, trigger.player);
								player.recover(2);
								player
									.chooseCardButton(get.prompt('qqwz_佳酿', trigger.player), player.storage.qqwz_佳酿)
									.set('ai', function (button) {
										if (_status.event.att > 0) return 1;
										return 0;
									})
									.set('att', att);
								('step 1');
								if (result.bool) {
									player.$throw(result.links);
									player.storage.qqwz_佳酿.remove(result.links[0]);
									ui.discardPile.appendChild(result.links[0]);
									trigger.player.useCard({ name: 'jiu' }, trigger.player);
									trigger.player.hp + 1;
									if (!player.storage.qqwz_佳酿.length) {
										player.unmarkSkill('qqwz_佳酿');
									} else {
										player.markSkill('qqwz_佳酿');
									}
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						qqwz_烈火: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'fireDamage')) {
											return [0, 2];
										}
									},
								},
							},
							group: 'qqwz_烈火2',
						},
						qqwz_烈火2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.isIn() && event.source != player;
							},
							content() {
								trigger.source.damage(2, 'fire')._triggered = null;
							},
						},
						qqwz_弓彰: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:千秋万载/audio:2',
							position: 'he',
							filterCard: true,
							check(card) {
								if (get.type(card) != 'equip') return 0;
								var player = _status.currentPhase;
								if (player.num('he', { subtype: get.subtype(card) }) > 1) {
									return 11 - ai.get.equipValue(card);
								}
								return 6 - ai.get.equipValue(card);
							},
							content() {
								'step 0';
								player.addTempSkill('qqwz_弓彰2', 'phaseAfter');
								('step 1');
								if (get.type(cards[0]) == 'equip') {
									player
										.chooseTarget('是否弃置一名角色的2张牌？', function (card, player, target) {
											return player != target && target.countCards('he') > 0;
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											if (get.attitude(player, target) < 0) {
												return Math.max(0.5, ai.get.effect(target, { name: 'sha' }, player, player));
											}
											return 0;
										});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'green');
									event.target = result.targets[0];
									player.draw(2);
									player.discardPlayerCard(event.target, 2, 'he', true).ai = ai.get.buttonValue;
								}
							},
							ai: {
								order: 9,
								result: {
									player: 1,
								},
							},
						},
						qqwz_弓彰2: {
							mod: {
								attackFrom() {
									return -Infinity;
								},
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
							},
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card;
							},
							content() {
								trigger.directHit = true;
							},
						},
						qqwz_直入: {
							audio: 'ext:千秋万载/audio:2',
							mark: true,
							init(player) {
								player.storage.qqwz_直入 = false;
							},
							enable: 'phaseUse',
							filter(event, player) {
								return !player.storage.qqwz_直入;
							},
							intro: {
								content: 'limited',
							},
							filterTarget: true,
							content() {
								'step 0';
								player.awakenSkill('qqwz_直入');
								player.storage.qqwz_直入 = true;
								event.players = game.filterPlayer(function (current) {
									return current != target && get.distance(current, target, 'attack') <= 1;
								});
								event.players.sortBySeat(target);
								('step 1');
								if (event.players.length) {
									event.current = event.players.shift();
									event.current.addTempClass('target');
									if (event.current.countCards('he') && target.isAlive()) {
										event.current
											.chooseToDiscard({ subtype: 'equip1' }, 'he', '弃置一张武器牌或让' + get.translation(target) + '摸一张牌并回复2点体力')
											.set('ai', function (card) {
												if (get.attitude(_status.event.player, _status.event.target) < 0) return 7 - get.value(card);
												return -1;
											})
											.set('target', target);
										event.tempbool = false;
									} else {
										event.tempbool = true;
									}
								} else {
									event.finish();
								}
								('step 2');
								if (event.tempbool || result.bool == false) {
									target.draw(2);
									target.recover();
								}
								event.goto(1);
							},
							ai: {
								order: 5,
								result: {
									target(player, target) {
										if (player.hp > 2) {
											if (game.phaseNumber < game.players.length * 2) return 0;
										}
										var num = 0,
											players = game.filterPlayer();
										for (const i of players) {
											if (i != target && get.distance(i, target, 'attack') <= 1) {
												num++;
											}
										}
										return num;
									},
								},
							},
						},
						qqwz_毒箭: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							forced: true,
							filter(event, player) {
								return event.card && get.distance(event.player, player, 'attack') > 1;
							},
							content() {
								trigger.num += 2;
							},
						},
						qqwz_缴械: {
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return player.countCards('he') > 0 && event.source && event.source.getCards('e') != undefined && event.card && event.card.name == 'sha';
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0;
							},
							forced: true,
							_priority: 5,
							audio: 'ext:千秋万载/audio:2',
							content() {
								'step 0';
								var next = player.chooseToDiscard('he', get.prompt('qqwz_缴械'));
								next.set('ai', function (card) {
									if (get.attitude(_status.event.player, _status.event.getTrigger().source) < 0) {
										return 6 - get.value(card);
									}
									return 0;
								});
								('step 1');
								if (result.bool) {
									trigger.source.$give(trigger.source.getCards('e'), player);
									player.gain(trigger.source.getCards('e'), trigger.source);
								}
							},
						},
						qqwz_亡箭: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (i.original == 'e') return true;
								}
								return false;
							},
							content() {
								var num = 0;
								if (Array.isArray(trigger.cards)) for (const i of trigger.cards) {
									if (i.original == 'e') num += 2;
								}
								player.recover(num);
							},
							ai: {
								noe: true,
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
									},
								},
							},
						},
						qqwz_擒拿: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'recoverBefore',
							},
							forced: true,
							filter(event, player) {
								return player != event.player;
							},
							content() {
								trigger.player.skip('phase');
							},
						},
						qqwz_矜持: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								return event.source && event.source.sex == 'male';
							},
							forced: true,
							content() {
								'step 0';
								var next = player.chooseToDiscard('he', '矜持:是否弃置一张牌令伤害-2？', function (card, player) {
									return get.type(card) != 'equip';
								});
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
									trigger.num -= 2;
								}
							},
						},
						qqwz_毁誉: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								if (player.hasSkill('qqwz_毁誉2')) return false;
								if (event.targets.length > 1) return false;
								var card = event.card;
								if (card.name == 'sha') return true;
								if (get.type(card) == 'trick') return true;
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qqwz_毁誉'), function (card, player, target) {
										if (player == target) return false;
										var trigger = _status.event.getTrigger();
										return player.canUse(trigger.card, target) && trigger.targets.includes(target) == false;
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return ai.get.effect(target, trigger.card, player, player) + 1;
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								player.addSkill('qqwz_毁誉2');
								event.target.chooseCard('交给' + get.translation(player) + '一张手牌,或成为' + get.translation(trigger.card) + '的额外目标').set('ai', function (card) {
									return 5 - get.value(card);
								});
								('step 3');
								if (result.bool) {
									player.gain(result.cards, event.target);
									event.target.$give(1, player);
									trigger.untrigger();
									trigger.player = event.target;
									trigger.trigger('useCard');
									game.log(event.target, '成为了', trigger.card, '的使用者');
								} else {
									game.log(event.target, '成为了', trigger.card, '的额外目标');
									trigger.targets.push(event.target);
								}
							},
						},
						qqwz_耿直: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('qqwz_耿直')).set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								var cards = get.cards();
								var card = cards[0];
								switch (get.type(card, 'trick')) {
									case 'basic':
										event.effect = 'gainMaxHp';
										break;
									case 'trick':
										event.effect = 'draw';
										break;
									case 'equip':
										event.effect = 'recover';
										break;
									case 'jiguan':
										event.effect = 'damage';
										break;
								}
								if (get.type(card) == 'equip') {
									event.target.equip(card);
									event.target.$draw(card);
								} else {
									event.target.gain(cards, 'gain2', 'log');
								}
								('step 3');
								switch (event.effect) {
									case 'recover':
										event.target.recover();
										break;
								}
								switch (event.effect) {
									case 'draw':
										event.target.draw(3);
										break;
								}
								switch (event.effect) {
									case 'gainMaxHp':
										event.target.gainMaxHp();
										break;
								}
								switch (event.effect) {
									case 'damage':
										event.target.damage();
										break;
								}
							},
							ai: {
								expose: 0.2,
								threaten: 1.2,
							},
						},
						qqwz_妙玄: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'discardAfter',
							},
							filter(event, player) {
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (get.position(i) == 'd') {
										return true;
									}
								}
								return false;
							},
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.draw();
								var cards = [];
								if (Array.isArray(trigger.cards)) for (const i of trigger.cards) {
									if (get.position(i) == 'd') {
										cards.push(i);
									}
								}
								player.chooseCardButton(cards, [1, cards.length], '妙玄:将弃置的牌按任意顺序置于牌堆顶(先选择的在上)').set('ai', function () {
									return -1;
								});
								('step 1');
								if (result && result.bool && result.links && result.links.length) {
									var cards = result.links.slice(0);
									while (cards.length) {
										ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
									}
								}
							},
						},
						qqwz_诱饵: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: ['phaseEnd', 'phaseBegin'],
							},
							forced: true,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							check(event, player) {
								return player.num('h', 'sha') <= player.countCards('h') / 3;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qqwz_诱饵'), function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										if (target.countCards('he') == 0) return 0;
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									event.target.discardPlayerCard(player, 'hej', true);
								} else {
									event.finish();
								}
								('step 2');
								if (result.links[0].name != 'sha' && event.target.countCards('he')) {
									player.recover(2);
									player.gainPlayerCard(2, 'he', event.target, true);
								}
							},
							ai: {
								expose: 0.2,
								threaten: 1.4,
							},
						},
						qqwz_秉正: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: ['phaseDiscardEnd', 'phaseBegin'],
							},
							filter(event, player) {
								var cards = player.getCards('h');
								if (cards.length < 1) return false;
								var color = get.color(cards[0]);
								for (let i = 1; i < cards.length; i++) {
									if (get.color(i) != color) return false;
								}
								return true;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qqwz_秉正'), [1, player.countCards('h')], function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									player.showHandcards(get.translation(player) + '发动了【秉正】');
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (targets && targets.length) {
									player.line(targets, 'green');
									game.asyncDraw(targets);
								}
							},
							ai: {
								expose: 0.1,
							},
						},
						qqwz_慎重: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							position: 'he',
							filterCard: true,
							selectCard: 2,
							prompt: '弃置两张牌并摸一张牌回复1点体力增加1点体力上限',
							check(card) {
								return 4 - ai.get.useful(card);
							},
							content() {
								player.draw();
								player.recover();
								player.gainMaxHp();
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
						},
						qqwz_安邦: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filterTarget(card, player, target) {
								return player != target && target.countCards('e') > 0;
							},
							content() {
								'step 0';
								player.choosePlayerCard(target, 'e', true);
								('step 1');
								if (result.links) {
									var num = 0,
										players = game.filterPlayer();
									for (const i of players) {
										if (get.distance(target, i, 'attack') <= 1) {
											num++;
										}
									}
									event.num = num;
									target.gain(result.links, 'gain2');
								} else {
									event.finish();
								}
								('step 2');
								var num2 = 0,
									players = game.filterPlayer();
								for (const i of players) {
									if (get.distance(target, i, 'attack') <= 1) {
										num2++;
									}
								}
								if (event.num > num2) {
									player.draw(2);
									player.recover(2);
								}
							},
							ai: {
								order: 7,
								result: {
									target(player, target) {
										if (target.hasSkillTag('noe')) return 1;
										if (target.getEquips(1) || target.getEquips(4)) return -1;
										if (target.getEquips(2)) return -0.7;
										return -0.5;
									},
								},
							},
						},
						qqwz_相助: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageEnd',
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								var nh = player.countCards('h');
								return game.hasPlayer(function (current) {
									return current.countCards('h') != nh;
								});
							},
							content() {
								'step 0';
								var nh = player.countCards('h');
								player
									.chooseTarget(get.prompt('qqwz_相助'), function (card, player, target) {
										return _status.event.nh != target.countCards('h');
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (target.countCards('h') > _status.event.nh) return -att;
										return att;
									})
									.set('nh', nh);
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									if (target.countCards('h') < player.countCards('h')) {
										target.draw(2);
									} else {
										target.discard(target.getCards('h').randomGet());
									}
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						qqwz_阵邀: {
							audio: 'ext:千秋万载/audio:2',
							usable: 1,
							trigger: {
								player: 'chooseToRespondBegin',
							},
							filter(event, player) {
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player) && !!event.filterCard({ name: 'sha' }, player)) return false;
								var nh = player.countCards('h');
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h') < nh;
								});
							},
							forced: true,
							prompt() {
								return '与一名角色交换手牌视为使用一张闪';
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qqwz_阵邀'), function (card, player, target) {
										return target.countCards('h') < player.countCards('h');
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									trigger.untrigger();
									trigger.responded = true;
									if (trigger.filterCard({ name: 'shan' }, player)) {
										trigger.result = { bool: true, card: { name: 'shan' } };
									} else {
										trigger.result = { bool: true, card: { name: 'sha' } };
									}
									player.swapHandcards(result.targets[0]);
								}
							},
							group: ['qqwz_阵邀_sha', 'qqwz_阵邀_tao', 'qqwz_阵邀_jiu'],
						},
						qqwz_阵邀_sha: {
							enable: 'chooseToUse',
							usable: 1,
							viewAs: {
								name: 'sha',
							},
							viewAsFilter(player) {
								var nh = player.countCards('h');
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h') < nh;
								});
							},
							prompt() {
								return '与一名角色交换手牌视为使用一张杀';
							},
							precontent() {
								'step 0';
								player.chooseTarget(
									'选择交换手牌的目标',
									function (card, player, target) {
										return target.countCards('h') < player.countCards('h');
									},
									true
								).ai = function (target) {
									return get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.swapHandcards(result.targets[0]);
								}
							},
							filterCard(card, player) {
								return false;
							},
							selectCard: -1,
							ai: {
								skillTagFilter(player, tag, arg) {
									var nh = player.countCards('h');
									return game.hasPlayer(function (current) {
										return current != player && current.countCards('h') < nh;
									});
								},
								order() {
									var player = _status.event.player;
									var nh = player.countCards('h');
									if (
										game.hasPlayer(function (current) {
											return get.attitude(player, current) > 0 && current.countCards('h') < nh;
										})
									) {
										return 2.9;
									}
									return 0;
								},
								respondSha: true,
								basic: {
									useful: [5, 1],
									value: [5, 1],
								},
								result: {
									target(player, target) {
										if (player.hasSkill('jiu') && !target.num('e', 'baiyin')) {
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
						qqwz_阵邀_tao: {
							enable: 'chooseToUse',
							usable: 1,
							viewAs: {
								name: 'tao',
							},
							viewAsFilter(player) {
								var nh = player.countCards('h');
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h') < nh;
								});
							},
							prompt() {
								return '与一名角色交换手牌视为使用一张桃';
							},
							precontent() {
								'step 0';
								player.chooseTarget(
									'选择交换手牌的目标',
									function (card, player, target) {
										return target.countCards('h') < player.countCards('h');
									},
									true
								).ai = function (target) {
									return get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.swapHandcards(result.targets[0]);
								}
							},
							filterCard(card, player) {
								return false;
							},
							selectCard: -1,
							ai: {
								skillTagFilter(player, tag, arg) {
									var nh = player.countCards('h');
									return game.hasPlayer(function (current) {
										return current != player && current.countCards('h') < nh;
									});
								},
								order() {
									var player = _status.event.player;
									var nh = player.countCards('h');
									if (
										game.hasPlayer(function (current) {
											return get.attitude(player, current) > 0 && current.countCards('h') < nh;
										})
									) {
										return _status.event.type == 'dying' ? 0.5 : 4;
									}
									return 0;
								},
								save: true,
								basic: {
									order(card, player) {
										if (player.hasSkillTag('pretao')) return 5;
										return 2;
									},
									useful: [8, 6.5],
									value: [8, 6.5],
								},
								result: {
									target(player, target) {
										var nd = player.needsToDiscard();
										var keep = false;
										if (nd <= 0) {
											keep = true;
										} else if (nd == 1 && target.hp >= 2 && target.num('h', 'tao') <= 1) {
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
														return current.num('h', 'tao');
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
						qqwz_阵邀_jiu: {
							enable: 'chooseToUse',
							usable: 1,
							viewAs: {
								name: 'jiu',
							},
							viewAsFilter(player) {
								var nh = player.countCards('h');
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h') < nh;
								});
							},
							prompt() {
								return '与一名角色交换手牌视为使用一张酒';
							},
							precontent() {
								'step 0';
								player.chooseTarget(
									'选择交换手牌的目标',
									function (card, player, target) {
										return target.countCards('h') < player.countCards('h');
									},
									true
								).ai = function (target) {
									return get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.swapHandcards(result.targets[0]);
								}
							},
							filterCard(card, player) {
								return false;
							},
							selectCard: -1,
							ai: {
								skillTagFilter(player, tag, arg) {
									var nh = player.countCards('h');
									return game.hasPlayer(function (current) {
										return current != player && current.countCards('h') < nh;
									});
								},
								order: 0,
								save: true,
								basic: {
									useful(card, i) {
										if (_status.event.player.hp > 1) {
											if (i == 0) return 5;
											return 1;
										}
										if (i == 0) return 7.3;
										return 3;
									},
									value(card, player) {
										if (player.hp > 1) {
											if (i == 0) return 5;
											return 1;
										}
										if (i == 0) return 7.3;
										return 3;
									},
								},
								result: {
									target(player, target) {
										if (target && target.isDying()) return 2;
										if (lib.config.mode == 'stone' && !player.isMin()) {
											if (player.getActCount() + 1 >= player.actcount) return 0;
										}
										var shas = playe.getCards('h', 'sha');
										if (shas.length > 1 && player.getCardUsable('sha') > 1) {
											return 0;
										}
										var card;
										if (shas.length) {
											for (let i = 0; i < shas.length; i++) {
												if (lib.filter.filterCard(shas[i], target)) {
													card = shas[i];
													break;
												}
											}
										} else if (player.hasSha() && player.needsToDiscard()) {
											if (player.num('h', 'hufu') != 1) {
												card = { name: 'sha' };
											}
										}
										if (card) {
											if (
												game.hasPlayer(function (current) {
													return get.attitude(target, current) < 0 && target.canUse(card, current, true, true) && !current.num('e', 'baiyin') && ai.get.effect(current, card, target) > 0;
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
						qqwz_善学: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								'step 0';
								var num = player.hp;
								if (!player.hasSkill('qqwz_鸿宴')) {
									num = player.maxHp;
								}
								player.chooseTarget([1, num], get.prompt('qqwz_善学')).set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									if (target.countCards('he')) return att;
									return att / 10;
								});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
									event.targets.sort(lib.sort.seat);
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets.length) {
									var target = event.targets.shift();
									target.draw(2);
									event.current = target;
								} else {
									event.finish();
								}
								('step 3');
								if (event.current && event.current.countCards('he')) {
									event.current.chooseCard('选择一张牌置于牌堆顶', 'he', true);
								} else {
									event.goto(2);
								}
								('step 4');
								if (result && result.cards) {
									event.card = result.cards[0];
									event.current.lose(result.cards, ui.special);
									game.broadcastAll(function (player) {
										var cardx = ui.create.card();
										cardx.classList.add('infohidden');
										cardx.classList.add('infoflip');
										player.$throw(cardx, 1000, 'nobroadcast');
									}, event.current);
								} else {
									event.card = null;
								}
								('step 5');
								('step 6');
								if (event.card) {
									event.card.fix();
									ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
								}
								event.goto(2);
							},
						},
						qqwz_鸿宴: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target.countCards('he') > 0 && target != player;
							},
							content() {
								'step 0';
								if (target.countCards('e')) {
									target.chooseBool('是否将装备区内的所有牌交给' + get.translation(player) + '？').set('ai', function () {
										if (_status.event.player.countCards('e') >= 3) return false;
										return true;
									});
								} else {
									target.chooseToDiscard(3, true, 'he');
									event.finish();
								}
								('step 1');
								if (result.bool) {
									var es = target.getCards('e');
									player.gain(es, target);
									target.$give(es, player);
									player.removeSkill('qqwz_鸿宴');
								} else {
									target.chooseToDiscard(3, true, 'he');
								}
							},
							ai: {
								order: 6,
								result: {
									target(player, target) {
										var ne = target.countCards('e');
										if (!ne) return -2;
										if (ne >= 2) return -ne;
										return 0;
									},
								},
							},
						},
						qqwz_王召: {
							global: 'qqwz_王召2',
							zhuSkill: true,
						},
						qqwz_王召2: {
							mod: {
								attackTo(from, to, distance) {
									if (from.group != 'wu') return;
									var players = game.filterPlayer();
									for (const i of players) {
										if (from != i && to != i && i.hasZhuSkill('qqwz_王召', from)) {
											if (get.distance(i, to) <= 1) return distance - 100;
										}
									}
								},
							},
						},
						qqwz_善民: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:千秋万载/audio:2',
							filterTarget(card, player, target) {
								return target != player && target.countCards('he') > 0;
							},
							content() {
								'step 0';
								target.chooseCard('he', [1, 9], '善民:将1~9张牌置于' + get.translation(player) + '的武将牌上', true).set('ai', function (card) {
									if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
										return 7 - get.value(card);
									}
									return -get.value(card);
								});
								('step 1');
								if (result.bool) {
									target.$give(result.cards, player);
									target.lose(result.cards, ui.special);
									player.storage.qqwz_善民_draw = result.cards;
									player.storage.qqwz_善民_draw_source = target;
									player.addSkill('qqwz_善民_draw');
								}
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (get.attitude(player, target) > 0) {
											return Math.sqrt(target.countCards('he'));
										}
										return 0;
									},
									player: 1,
								},
							},
							subSkill: {
								draw: {
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									mark: true,
									intro: {
										content: 'cards',
									},
									content() {
										var cards = player.storage.qqwz_善民_draw;
										if (cards) {
											player.gain(cards, 'gain2');
											var target = player.storage.qqwz_善民_draw_source;
											if (target && target.isAlive()) {
												target.draw(cards.length);
											}
										}
										delete player.storage.qqwz_善民_draw;
										delete player.storage.qqwz_善民_draw_source;
										player.removeSkill('qqwz_善民_draw');
									},
								},
							},
						},
						qqwz_奢豪: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.getHandcardLimit() > 0;
							},
							init(player) {
								player.storage.qqwz_奢豪 = 0;
							},
							usable: 20,
							content() {
								player.draw(2);
								player.storage.qqwz_奢豪++;
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.countCards('h') < player.getHandcardLimit()) {
											return 1;
										}
										return 0;
									},
								},
							},
							mod: {
								maxHandcard(player, num) {
									return num - player.storage.qqwz_奢豪;
								},
							},
							group: ['qqwz_奢豪2', 'qqwz_奢豪3'],
						},
						qqwz_奢豪2: {
							trigger: {
								player: 'phaseAfter',
							},
							forced: true,
							popup: false,
							silent: true,
							content() {
								player.storage.qqwz_奢豪 = 0;
							},
						},
						qqwz_奢豪3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								if (player.countCards('h')) return false;
								return game.hasPlayer(function (current) {
									return !current.isLinked();
								});
							},
							content() {
								'step 0';
								player.draw(4);
								var num = game.countPlayer(function (current) {
									return !current.isLinked();
								});
								player
									.chooseTarget(get.prompt('qqwz_奢豪'), [1, Math.min(num, player.hp)], function (card, player, target) {
										return !target.isLinked();
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
									event.num = 0;
								} else {
									event.finish();
								}
								('step 2');
								if (event.num < event.targets.length) {
									event.targets[event.num].link();
									event.num++;
									event.redo();
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						qqwz_罪责: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return player.isLinked() && event.notLink() && event.nature == 'fire';
							},
							content() {
								trigger.num += 2;
							},
						},
						qqwz_掌控: {
							init2(player) {
								player.storage.qqwz_掌控 = [];
							},
							trigger: {
								player: 'phaseAfter',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								player.gain(player.storage.qqwz_掌控);
								player.storage.qqwz_掌控 = [];
							},
							group: 'qqwz_掌控2',
						},
						qqwz_掌控2: {
							trigger: {
								global: 'loseAfter',
							},
							forced: true,
							filter(event, player) {
								return player != event.player && _status.currentPhase == player;
							},
							content() {
								player.storage.qqwz_掌控 = player.storage.qqwz_掌控.concat(trigger.cards);
							},
						},
						qqwz_伺机: {
							trigger: {
								player: 'loseEnd',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							popup: false,
							content() {
								for (const i of game.players) {
									if (i.group == 'wu') i.draw()._triggered = null;
								}
								for (const i of game.players) {
									if (i.group == 'wei') i.loseHp()._triggered = null;
								}
								for (const i of game.players) {
									if (i.group == 'shu') i.recover()._triggered = null;
								}
								for (const i of game.players) {
									if (i.group == 'qun') i.loseMaxHp()._triggered = null;
								}
							},
							group: 'qqwz_伺机2',
						},
						qqwz_白衣: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								if (player.storage.qqwz_白衣) return false;
								if (player.countCards('h') >= player.hp + 3) return true;
								if (player.countCards('h') >= player.hp + 2 && game.players.length + game.dead.length >= 7) return true;
								return false;
							},
							content() {
								player.storage.qqwz_白衣 = true;
								player.loseMaxHp(2);
								player.hp = player.maxHp;
								player.addSkill('qqwz_掌控');
								player.awakenSkill('qqwz_白衣');
							},
						},
						qqwz_伺机2: {
							trigger: {
								player: 'phaseDiscardBefore',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						qqwz_锦帆: {
							audio: 'ext:千秋万载/audio:2',
							mark: true,
							trigger: {
								global: 'useCard',
							},
							_priority: 5,
							filter(event, player) {
								if (get.type(event.card) != 'trick') return false;
								if (get.info(event.card).multitarget) return false;
								if (event.targets.length < 2) return false;
								if (player.storage.qqwz_锦帆) return false;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qqwz_锦帆'), [1, trigger.targets.length], function (card, player, target) {
										return _status.event.getTrigger().targets.includes(target);
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										if (game.phaseNumber > game.players.length * 2 && trigger.targets.length >= game.players.length - 1) {
											return -ai.get.effect(target, trigger.card, trigger.player, _status.event.player);
										}
										return -1;
									});
								('step 1');
								if (result.bool) {
									for (let i = 0; i < result.targets.length; i++) {
										trigger.targets.remove(result.targets[i]);
									}
								}
							},
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						qqwz_合围: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return player != event.player && player.countCards('he') == 0;
							},
							content() {
								const next = game.createEvent('diex', false);
								next.source = player;
								next.player = trigger.player;
								next._triggered = null;
								next.restMap = { type: null, count: null, audio: null };
								next.excludeMark = [];
								next.setContent('die');
							},
							group: ['qqwz_合围2', 'qqwz_合围3'],
						},
						qqwz_合围2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'basic' && Math.random() <= 0.5;
							},
							content() {
								player.useCard(trigger.card, trigger.targets, false)._triggered = null;
							},
						},
						qqwz_合围3: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filterCard: true,
							selectCard: 2,
							prompt: '弃置两张牌并对全体造成1点神圣伤害',
							check(card) {
								return 4 - ai.get.useful(card);
							},
							content() {
								for (const i of game.players) {
									if (i != player) {
										i.damage(1)._triggered = null;
									}
									player.hp = player.maxHp;
								}
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
						},
						qqwz_霸业: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_霸业2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 3;
							},
							ai: {
								threaten: 1.5,
							},
							mod: {
								maxHandcard(player, num) {
									if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
								},
							},
						},
						// 你造成伤害时,若场上角色装备区内有防具牌,令该名角色也受到等量伤害
						qqwz_霸业2: {
							trigger: {
								source: ['damageEnd'],
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return !event.getParent('qqwz_霸业2', true) && game.players.some((q) => q.getEquip(2) && q != event.player);
							},//QQQ
							content() {
								for (const i of game.players) {
									if (i.getEquip(2) && i != trigger.player) {
										i.damage(trigger.num);
									}
								}
							},
						},
						qqwz_控局: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 2,
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
							prepare: 'give',
							content() {
								'step 0';
								target.storage.qqwz_控局 = cards[0];
								target.gain(cards[0], player);
								('step 1');
								target.chooseControl('展示手牌', '流失体力').ai = function (event, player) {
									var cards = player.getCards('he', { suit: player.storage.qqwz_控局.suit });
									if (cards.length == 1) return 0;
									if (cards.length >= 2) {
										if (Array.isArray(cards)) for (const i of cards) {
											if (get.tag(i, 'save')) return 1;
										}
									}
									if (player.hp == 1) return 0;
									if (Array.isArray(cards)) for (const i of cards) {
										if (get.value(i) >= 8) return 1;
									}
									if (cards.length > 2 && player.hp > 2) return 1;
									if (cards.length > 3) return 1;
									return 0;
								};
								('step 2');
								if (result.control == '展示手牌') {
									target.showHandcards();
								} else {
									target.loseHp(2);
									event.finish();
								}
								('step 3');
								target.discard(target.getCards('he', { suit: target.storage.qqwz_控局.suit }));
								delete target.storage.qqwz_控局;
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										return -target.countCards('he') - (player.num('h', 'du') ? 1 : 0);
									},
								},
								threaten: 2,
							},
						},
						qqwz_谋策: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_谋策2', 'qqwz_谋策3'],
							trigger: {
								target: 'useCardToBefore',
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (event.getParent(2).player && event.getParent(2).player == player) return false;
								return player.hp != 1;
							},
							forced: true,
							content() {
								player.chooseToUse();
							},
						},
						qqwz_谋策2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return event.player != player && event.player.isAlive();
							},
							logTarget: 'player',
							forced: true,
							content() {
								'step 0';
								var hs = trigger.player.getCards('he');
								if (hs.length) {
									player.gain(hs.randomGet(), trigger.player);
									trigger.player.$give(1, player);
								}
								('step 1');
								trigger.player.chooseToUse('谋策:请使用一张锦囊牌,否则受到2点神圣伤害').set('filterCard', function (card, player) {
									return get.type(card, 'trick') == 'trick' && lib.filter.cardEnabled(card, player, event.parent.parent) && lib.filter.cardUsable(card, player, event.parent.parent);
								});
								('step 2');
								if (!result.bool) {
									trigger.player.damage(2)._triggered = null;
								}
							},
						},
						qqwz_谋策3: {
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						qqwz_诈曹: {
							trigger: {
								player: 'loseHpEnd',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							content() {
								player.draw(3);
								if (_status.currentPhase == player) {
									player.addTempSkill('qqwz_诈曹2', { player: 'phaseAfter' });
								} else {
									game.trySkillAudio('qqwz_诈曹', player);
								}
							},
						},
						qqwz_诈曹2: {
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 4;
								},
							},
							trigger: {
								player: 'shaBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return event.card;
							},
							content() {
								trigger.directHit = true;
							},
						},
						qqwz_牺牲: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz_牺牲2',
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							check(card) {
								return 8 - get.value(card);
							},
							position: 'he',
							content() {
								player.loseHp(2);
							},
							ai: {
								order: 8,
								result: {
									player(player) {
										if (player.hp <= 2) return player.countCards('h') == 0 ? 1 : 0;
										if (player.num('h', { name: 'sha', color: 'red' })) return 1;
										return player.countCards('h') <= player.hp ? 1 : 0;
									},
								},
								effect(card, player) {
									if (get.tag(card, 'damage')) {
										if (player.hasSkill('jueqing')) return [1, 1];
										return 1.2;
									}
									if (get.tag(card, 'loseHp')) {
										if (player.hp <= 1) return;
										return [0, 0];
									}
								},
							},
						},
						qqwz_牺牲2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'loseHpEnd',
							},
							forced: true,
							filter(event, player) {
								return Math.random() <= 0.8;
							},
							content() {
								player.recover();
							},
						},
						qqwz_赤焰: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz_赤焰2', 'qqwz_赤焰3'],
							trigger: {
								player: 'damageEnd',
							},
							content() {
								for (const i of game.players) {
									if (i != player) {
										i.damage('fire')._triggered = null;
									}
								}
							},
						},
						qqwz_赤焰2: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							content() {
								for (const i of game.players) {
									if (i != player) {
										i.damage('fire')._triggered = null;
									}
								}
							},
						},
						qqwz_赤焰3: {
							trigger: {
								player: 'damageBefore',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								player.recover();
							},
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'fireDamage')) {
											return [0, 2];
										}
									},
								},
							},
						},
						qqwz_雅逊: {
							init(player) {
								player.storage.qqwz_雅逊2 = [];
							},
							group: 'qqwz_雅逊3',
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								target: 'useCardToBegin',
								player: 'judgeBefore',
							},
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								if (event.parent.name == 'phaseJudge') {
									if (lib.skill.qqwz_雅逊.trigger.player == 'judgeBefore') {
										return true;
									}
									return event.result && event.result.judge != 0;
								}
								if (event.name == 'judge') return false;
								if (event.targets && event.targets.length > 1) return false;
								if (event.card && get.type(event.card) == 'trick' && event.player != player) return true;
							},
							content() {
								player.storage.qqwz_雅逊2 = player.storage.qqwz_雅逊2.concat(player.getCards('h'));
								game.addVideo('storage', player, ['qqwz_雅逊2', get.cardsInfo(player.storage.qqwz_雅逊2), 'cards']);
								player.lose(player.getCards('h'), ui.special);
								player.addSkill('qqwz_雅逊2');
							},
							ai: {
								effect(card, player, target) {
									if (!target.hasFriend()) return;
									if (get.type(card, 'trick') == 'trick' && ui.selected.targets.length == 0) return [1, 1];
								},
							},
						},
						qqwz_雅逊2: {
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							content() {
								player.gain(player.storage.qqwz_雅逊2);
								player.removeSkill('qqwz_雅逊2');
								player.storage.qqwz_雅逊2 = [];
								game.addVideo('storage', player, ['qqwz_雅逊2', get.cardsInfo(player.storage.qqwz_雅逊2), 'cards']);
							},
							mark: true,
							intro: {
								content: 'cardCount',
							},
						},
						qqwz_雅逊3: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (player.countCards('h')) return false;
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (i.original == 'h') return true;
								}
								return false;
							},
							content() {
								'step 0';
								var num = 0;
								for (let i = 0; i < trigger.cards.length; i += 2) {
									if (i.original == 'h') num += 2;
								}
								player.chooseTarget('选择发动雅逊的目标', [1, num]).ai = function (target) {
									var player = _status.event.player;
									if (player == target) return get.attitude(player, target) + 10;
									return get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									game.asyncDraw(result.targets, 2);
								}
							},
							ai: {
								threaten: 0.8,
								effect: {
									target(card) {
										if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
									},
								},
								noh: true,
							},
						},
						qqwz_妙心: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							discard: false,
							filter(event, player) {
								return player.num('he', { color: 'red' }) > 0;
							},
							prepare: 'throw',
							position: 'he',
							filterCard: {
								color: 'red',
							},
							filterTarget(card, player, target) {
								if (player == target) return false;
								if (target.hasJudge('lebu')) return true;
								return lib.filter.targetEnabled({ name: 'lebu' }, player, target);
							},
							check(card) {
								return 7 - get.value(card);
							},
							content() {
								if (target.hasJudge('lebu')) {
									target.discard(target.getJudge('lebu'));
								} else {
									var next = player.useCard({ name: 'lebu' }, target, cards);
									next.animate = false;
									next.audio = false;
								}
								player.draw();
								player.recover();
							},
							ai: {
								result: {
									target(player, target) {
										if (target.hasJudge('lebu')) return -ai.get.effect(target, { name: 'lebu' }, player, target);
										return ai.get.effect(target, { name: 'lebu' }, player, target);
									},
								},
								order: 9,
							},
						},
						qqwz_娇啸: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							_priority: 5,
							filter(event, player) {
								if (player.countCards('he') == 0) return false;
								return game.hasPlayer(function (current) {
									return current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
								});
							},
							content() {
								'step 0';
								player.draw();
								var next = player.chooseCardTarget({
									position: 'he',
									filterCard: lib.filter.cardDiscardable,
									filterTarget(card, player, target) {
										var trigger = _status.event.getTrigger();
										if (target != trigger.player && target != player) {
											if (player.canUse(trigger.card, target)) return true;
										}
										return false;
									},
									ai1(card) {
										return ai.get.unuseful(card) + 9;
									},
									ai2(target) {
										if (_status.event.player.num('h', 'shan')) {
											return -get.attitude(_status.event.player, target);
										}
										if (get.attitude(_status.event.player, target) < 5) {
											return 6 - get.attitude(_status.event.player, target);
										}
										if (_status.event.player.hp == 1 && player.num('h', 'shan') == 0) {
											return 10 - get.attitude(_status.event.player, target);
										}
										if (_status.event.player.hp == 2 && player.num('h', 'shan') == 0) {
											return 8 - get.attitude(_status.event.player, target);
										}
										return -1;
									},
									prompt: get.prompt('qqwz_娇啸'),
								});
								('step 1');
								if (result.bool) {
									player.discard(result.cards);
									trigger.target = result.targets[0];
									trigger.targets.remove(player);
									trigger.targets.push(result.targets[0]);
								} else {
									event.finish();
								}
								('step 2');
								trigger.untrigger();
								trigger.trigger('useCardToBefore');
								trigger.trigger('shaBefore');
							},
							mod: {
								globalFrom(from, to, distance) {
									return distance - 999;
								},
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (target.countCards('he') == 0) return;
										if (card.name != 'sha') return;
										var min = 1;
										var friend = get.attitude(player, target) > 0;
										var vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
										var players = game.filterPlayer();
										for (const i of players) {
											if (player != i && get.attitude(target, i) < 0 && target.canUse(card, i)) {
												if (!friend) return 0;
												if (ai.get.effect(i, vcard, player, player) > 0) {
													if (!player.canUse(card, players[0])) {
														return [0, 0.1];
													}
													min = 0;
												}
											}
										}
										return min;
									},
								},
							},
						},
						qqwz天韵: {
							trigger: {
								player: 'dying',
							},
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return !player.storage.qqwz天韵;
							},
							forced: true,
							_priority: 100,
							content() {
								'step 0';
								player.storage.qqwz天韵 = true;
								('step 1');
								player.hp = player.maxHp;
								player.addSkill('qqwz星移');
								player.addSkill('qqwz飓风');
							},
						},
						qqwz星移: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							_priority: 5,
							filter(event, player) {
								if (player.countCards('he') == 0) return false;
								return game.hasPlayer(function (current) {
									return get.distance(player, current, 'attack') <= 2 && current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
								});
							},
							content() {
								'step 0';
								var next = player.chooseCardTarget({
									position: 'he',
									filterCard: lib.filter.cardDiscardable,
									filterTarget(card, player, target) {
										var trigger = _status.event.getTrigger();
										if (get.distance(player, target, 'attack') <= 2 && target != trigger.player && target != player) {
											if (player.canUse(trigger.card, target)) return true;
										}
										return false;
									},
									ai1(card) {
										return get.unuseful(card) + 9;
									},
									ai2(target) {
										if (_status.event.player.countCards('h', 'shan')) {
											return -get.attitude(_status.event.player, target);
										}
										if (get.attitude(_status.event.player, target) < 5) {
											return 6 - get.attitude(_status.event.player, target);
										}
										if (_status.event.player.hp == 1 && player.countCards('h', 'shan') == 0) {
											return 10 - get.attitude(_status.event.player, target);
										}
										if (_status.event.player.hp == 2 && player.countCards('h', 'shan') == 0) {
											return 8 - get.attitude(_status.event.player, target);
										}
										return -1;
									},
									prompt: get.prompt('liuli'),
								});
								('step 1');
								if (result.bool) {
									player.discard(result.cards);
									trigger.target = result.targets[0];
									trigger.targets.remove(player);
									trigger.targets.push(result.targets[0]);
								} else {
									event.finish();
								}
								('step 2');
								trigger.untrigger();
								trigger.trigger('useCardToBefore');
								trigger.trigger('shaBefore');
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (target.countCards('he') == 0) return;
										if (card.name != 'sha') return;
										var min = 1;
										var friend = get.attitude(player, target) > 0;
										var vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
										var players = game.filterPlayer();
										for (const i of players) {
											if (player != i && get.attitude(target, i) < 0 && target.canUse(card, i)) {
												if (!friend) return 0;
												if (get.effect(i, vcard, player, player) > 0) {
													if (!player.canUse(card, players[0])) {
														return [0, 0.1];
													}
													min = 0;
												}
											}
										}
										return min;
									},
								},
							},
						},
						qqwz飓风: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') < Math.min(2);
							},
							content() {
								player.draw(Math.min(2) - player.countCards('h'));
							},
						},
						qqwz慰安: {
							trigger: {
								player: 'damageEnd',
							},
							_priority: 1,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								if (event.card && event.card.name == 'sha') return false;
							},
							forced: true,
							check() {
								return false;
							},
							content() {
								trigger.source.chooserecoverTurnedOver(true);
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha') {
											return [1, -2];
										}
									},
								},
							},
						},
						qqwz_英才: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								var num = player.maxHp;
								trigger.num += num;
								player.loseHp();
							},
							mod: {
								globalFrom(from, to, distance) {
									return distance - 3;
								},
							},
							ai: {
								threaten: 1.3,
							},
						},
						qqwz乱敌: {
							audio: 'ext:千秋万载/audio:2',
							group: ['qqwz乱敌2'],
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return (
									game.countPlayer(function (current) {
										return current != player;
									}) > 1
								);
							},
							check(card) {
								return 10 - get.value(card);
							},
							filterCard: true,
							position: 'he',
							filterTarget(card, player, target) {
								if (player == target) return false;
								if (ui.selected.targets.length == 1) {
									return target.canUse({ name: 'juedou' }, ui.selected.targets[0]);
								}
								return true;
							},
							targetprompt: ['先出杀', '后出杀'],
							selectTarget: 2,
							multitarget: true,
							content() {
								player.gainMaxHp();
								targets[1].useCard({ name: 'juedou' }, targets[0], 'noai').animate = false;
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (ui.selected.targets.length == 0) {
											return -3;
										} else {
											return get.effect(target, { name: 'juedou' }, ui.selected.targets[0], target);
										}
									},
								},
								expose: 0.4,
								threaten: 3,
							},
						},
						qqwz乱敌2: {
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
							},
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card;
							},
							content() {
								trigger.directHit = true;
								player.loseMaxHp();
							},
						},
						qqwz映花: {
							group: ['qqwz映花_a', 'qqwz映花_b'],
							subSkill: {
								a: {
									trigger: {
										global: 'damageEnd',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return event.player != player && event.player.sex == 'female';
									},
									content() {
										player.loseHp();
									},
								},
								b: {
									trigger: {
										global: 'damageEnd',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return event.player != player && event.player.sex == 'male';
									},
									content() {
										player.recover();
									},
								},
							},
						},
						qqwz炎焚: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							group: 'qqwz炎焚_1',
							forced: true,
							filter(event, player) {
								if (player.countCards('h')) return false;
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (i.original == 'h') return true;
								}
								return false;
							},
							content() {
								player.loseHp();
							},
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.player != player;
									},
									content() {
										player.gainMaxHp();
									},
								},
							},
						},
						qqwz替汉: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'recoverEnd',
							},
							forced: true,
							content() {
								player.draw();
							},
							group: ['qqwz替汉_1', 'qqwz替汉_2'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									content() {
										var jk = Math.floor(player.countCards('he') / 2);
										player.chooseToDiscard(jk, 'he', true);
									},
								},
								2: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return player.countCards('h') >= 6;
									},
									content() {
										event.target = game.filterPlayer().randomGet(player);
										event.target.turnOver();
									},
								},
							},
						},
						qqwz王权: {
							trigger: {
								global: 'phaseBefore',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player != event.player && event.player.group != 'qun';
							},
							content() {
								trigger.player.turnOver();
							},
							group: ['qqwz王权_1'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									usable: 1,
									enable: 'chooseToUse',
									filter(event, player) {
										return event.type == 'dying' && event.dying && !event.player != player && event.dying.group == 'qun';
									},
									filterTarget(card, player, target) {
										return target == _status.event.dying;
									},
									selectTarget: -1,
									content() {
										target.recover(2);
										target.draw(2);
										player.loseHp(3);
									},
									ai: {
										order: 0.1,
										skillTagFilter(player) {
											if (!_status.event.dying) return false;
										},
										save: true,
										result: {
											target: 3,
										},
										threaten: 1.6,
									},
								},
							},
						},
						qqwz韧力: {
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							_priority: -500,
							content() {
								if (trigger.num > 1) trigger.num -= 1;
							},
							group: ['qqwz韧力_1'],
							subSkill: {
								1: {
									trigger: {
										player: 'damageEnd',
									},
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										if (event.card && event.card.name == 'sha') {
											if (get.color(event.card) == 'red') return true;
											if (event.source && event.source.hasSkill('jiu')) return true;
										}
										return false;
									},
									forced: true,
									content() {
										player.loseHp();
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (card.name == 'sha' && get.color(card) == 'red') {
													return [1, -2];
												}
											},
										},
									},
								},
							},
						},
						qqwz女权: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							content() {
								for (const i of game.players) {
									if (i.sex != 'male') {
										i.draw(2);
										i.recover();
									}
								}
							},
							group: ['qqwz女权_1'],
							subSkill: {
								1: {
									trigger: {
										player: 'damageBefore',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return event.source && event.source.sex == 'female';
									},
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
							},
						},
						qqwz鸠酒: {
							audio: 'ext:千秋万载/audio:2',
							group: 'qqwz鸠酒_1',
							trigger: {
								target: 'useCardToBegin',
							},
							filter(event, player) {
								return player != event.player && Math.random() <= 0.5;
							},
							content() {
								trigger.player.loseHp();
								player.draw();
							},
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'loseHpEnd',
									},
									forced: true,
									content() {
										player.chooseToDiscard(2, 'he', true);
									},
								},
							},
						},
						qqwz祸言: {
							trigger: {
								global: 'gainBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							logTarget: 'player',
							filter(event, player) {
								if (event.cards && event.player != player) {
									return event.player.countCards('h') > player.countCards('h');
								}
								return false;
							},
							content() {
								player.recover();
							},
							group: ['qqwz祸言_1'],
							subSkill: {
								1: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return event.player.countCards('h') >= 5;
									},
									content() {
										player.loseHp(2);
									},
								},
							},
						},
						qqwz惩恶: {
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 0 && event.source != player && player.getFriends().includes(event.player);
							},
							audio: 'ext:千秋万载/audio:2',
							content() {
								if (trigger.source != undefined) {
									trigger.source.damage(trigger.num);
								}
							},
							group: 'qqwz惩恶_1',
							subSkill: {
								1: {
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player, source) {
										return event.num > 0 && event.source != player && player.getFriends().includes(event.source);
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										player.recover();
									},
								},
							},
						},
						qqwz惑敌: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'shaBegin',
							},
							filter(event, player) {
								return player.getFriends().includes(event.target);
							},
							content() {
								'step 0';
								player.draw();
								target.draw();
								event.list = player.getFriends().sortBySeat();
								('step 1');
								if (event.list.length) {
									var target = event.list.shift();
									player.line(target, 'green');
									target.recover();
									event.redo();
								}
							},
						},
						qqwz胡笳: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'dying',
							},
							forced: true,
							_priority: 100,
							filter(event, player) {
								return player.getFriends().includes(event.player);
							},
							content() {
								var jk = player.hp;
								trigger.player.recover(jk);
								player.removeSkill('qqwz胡笳');
								player.addSkill('qqwz思乡');
							},
						},
						qqwz思乡: {
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							trigger: {
								player: 'phaseDrawBegin',
							},
							content() {
								var list = ['qun'];
								var num = game.countPlayer(function (current) {
									if (list.includes(current.group)) {
										list.remove(current.group);
										return true;
									}
								});
								trigger.num += num;
							},
							mod: {
								maxHandcard(player, num) {
									return num + num;
								},
							},
						},
						qqwz优民: {
							trigger: {
								global: 'phaseDrawBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.getFriends().includes(event.player);
							},
							content() {
								trigger.num++;
							},
							group: ['qqwz优民_1'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: ['useCardAfter', 'respondAfter', 'discardAfter'],
									},
									forced: true,
									filter(event, player) {
										if (player == _status.currentPhase) return false;
										if (event.cards) {
											if (Array.isArray(event.cards)) for (const i of event.cards) {
												if (i.original != 'j') return true;
											}
										}
										return false;
									},
									content() {
										'step 0';
										event.list = player.getFriends().sortBySeat();
										('step 1');
										if (event.list.length) {
											var target = event.list.shift();
											player.line(target, 'green');
											target.recover();
											event.redo();
										}
									},
									ai: {
										threaten: 0.7,
									},
								},
							},
						},
						qqwz破阵: {
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.player.countCards('e') > 0 && event.player != player;
							},
							content() {
								trigger.player.chooseToDiscard(2, true, 'e');
								player.recover();
							},
						},
						qqws诏辅: {
							mod: {
								wuxieRespondable() {
									return false;
								},
								targetInRange(card, player, target, now) {
									var type = get.type(card);
									if (type == 'trick' || type == 'delay') return true;
								},
							},
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return get.type(event.card) == 'trick' && event.cards[0] && event.cards[0] == event.card;
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							content() { },
						},
						qqwz兵败: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.getStat('damage') < 4;
							},
							content() {
								player.loseMaxHp();
								player.draw(2);
								player.recover();
							},
						},
						qqwz忠贤: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.hp < player.maxHp;
							},
							content() {
								'step 0';
								var fg = player.maxHp - player.hp;
								player.viewCards('牌堆顶' + get.cnNumber(fg) + '张牌', get.cards(fg));
								event.list = player.getFriends().sortBySeat();
								('step 1');
								if (event.list.length) {
									var target = event.list.shift();
									player.line(target, 'green');
									target.draw(fg);
									event.redo();
								}
							},
						},
						qqwz焚舰: {
							trigger: {
								source: 'damageEnd',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return event.player != player && event.nature != 'fire';
							},
							content() {
								trigger.player.damage('fire');
								player.loseHp();
							},
							group: 'qqwz焚舰_1',
							subSkill: {
								1: {
									trigger: {
										player: 'damageBefore',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return event.nature == 'fire';
									},
									content() {
										player.loseHp();
									},
								},
							},
						},
						qqwz国母: {
							trigger: {
								global: 'recoverBegin',
							},
							forced: true,
							filter(event, player) {
								return player.getFriends().includes(event.player);
							},
							content() {
								trigger.num++;
							},
							subSkill: {
								1: {
									trigger: {
										global: 'phaseDrawBegin',
									},
									forced: true,
									filter(event, player) {
										return player.getFriends().includes(event.player);
									},
									content() {
										trigger.num++;
									},
								},
							},
						},
						qqwz鞬骑: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'respondEnd',
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
							},
							forced: true,
							content() {
								player.recover();
							},
							group: 'qqwz鞬骑_1',
							subSkill: {
								1: {
									trigger: {
										source: 'damageBegin',
									},
									check(event, player) {
										return !event.getEquip('3');
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.num += 2;
									},
									mod: {
										globalFrom(from, to, distance) {
											return distance - 2;
										},
									},
								},
							},
						},
						qqwz雄狮: {
							trigger: {
								source: 'damageBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								if (event.player != 'wei') return false;
								return true;
							},
							content() {
								trigger.num++;
							},
							group: ['qqwz雄狮_1', 'qqwz雄狮_2'],
							subSkill: {
								1: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return player.countCards('h') >= 5;
									},
									content() {
										player.loseHp(2);
										player.gainMaxHp();
									},
								},
								2: {
									trigger: {
										player: 'turnOverBegin',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.cancel();
									},
								},
							},
						},
						qqwz鬼神: {
							mode: ['identity'],
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							_priority: 700,
							audio: 'ext:千秋万载/audio:2',
							content() {
								'step 0';
								event.list = player.getFriends().sortBySeat();
								('step 1');
								if (event.list.length) {
									var target = event.list.shift();
									player.line(target, 'green');
									target.addSkill('qqwz鬼神_1');
									target.addSkill('qqwz鬼神_2');
									target.addSkill('qqwz鬼神_3');
									event.redo();
								}
							},
							subSkill: {
								1: {
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									content() {
										if (trigger.num > 1) trigger.num = 1;
									},
								},
								2: {
									mod: {
										targetInRange(card, player, target, now) {
											if (card.name == 'sha') return true;
										},
									},
									trigger: {
										player: 'shaBegin',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										trigger.directHit = true;
									},
								},
								3: {
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									check() {
										return false;
									},
									content() {
										var ex = 0;
										if (trigger.card && trigger.card.name == 'sha') {
											if (player.hasSkill('jiu')) ex++;
											if (player.hasSkill('luoyi2')) ex++;
											if (player.hasSkill('reluoyi2')) ex++;
										}
										player.recover(trigger.num + ex);
									},
								},
							},
						},
						qqwz太平: {
							trigger: {
								player: 'phaseEnd',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return player.countCards('h') <= 0;
							},
							content() {
								'step 0';
								event.list = player.getFriends().sortBySeat();
								('step 1');
								if (event.list.length) {
									var target = event.list.shift();
									player.line(target, 'green');
									target.recover();
									event.redo();
								}
								('step 2');
								for (const i of game.players) {
									if (get.attitude(i, player) <= 0) {
										i.turnOver();
									}
								}
							},
						},
						qqwz玄雷: {
							mod: {
								cardEnabled(card, player) {
									if (_status.event.skill != 'qqwz玄雷' && card.name != 'shan' && get.color(card) == 'black') return false;
								},
								cardUsable(card, player) {
									if (_status.event.skill != 'qqwz玄雷' && card.name != 'shan' && get.color(card) == 'black') return false;
								},
								cardRespondable(card, player) {
									if (_status.event.skill != 'qqwz玄雷' && card.name != 'shan' && get.color(card) == 'black') return false;
								},
								cardSavable(card, player) {
									if (_status.event.skill != 'qqwz玄雷' && card.name != 'shan' && get.color(card) == 'black') return false;
								},
								targetInRange(card) {
									if (get.color(card) == 'black' || _status.event.skill == 'qqwz玄雷') return true;
								},
							},
							audio: 'ext:千秋万载/audio:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard: {
								suit: ['spade', 'club'],
							},
							viewAs: {
								name: 'shan',
								suit: 'spade',
								number: 13,
							},
							check() {
								return 1;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') && current < 0) return 0.6;
									},
								},
								respondShan: true,
								order: 4,
								useful: -1,
								value: -1,
								basic: {
									useful: [7, 2],
									value: [7, 2],
								},
							},
							group: ['qqwz玄雷_1'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: ['useCardAfter', 'respondAfter', 'discardAfter'],
									},
									forced: true,
									filter(event, player) {
										if (player == _status.currentPhase) return false;
										if (event.cards) {
											if (Array.isArray(event.cards)) for (const i of event.cards) {
												if (get.color(i) == 'black' && i.original != 'j') return true;
											}
										}
										return false;
									},
									content() {
										'step 0';
										player.recover();
										player.chooseTarget(get.prompt('qqwz玄雷_1')).set('ai', function (target) {
											if (get.attitude(_status.event.player, target) > 0) {
												return target != event.player;
											}
											return 0;
										});
										('step 1');
										if (result.bool) {
											var target = result.targets[0];
											target.damage(2, 'thunder')._triggered = null;
										}
									},
									ai: {
										threaten: 0.7,
									},
								},
							},
						},
						qqwz仙符: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							chooseButton: {
								dialog() {
									var list = ['sha', 'shan', 'tao', 'jiu'];
									for (let i = 0; i < list.length; i++) {
										list[i] = ['basic', '', list[i]];
									}
									var list2 = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
									for (let i = 0; i < list2.length; i++) {
										list2[i] = ['trick', '', list2[i]];
									}
									var dialog = ui.create.dialog();
									dialog.addText('仙符·基本牌');
									dialog.add([list, 'vcard']);
									dialog.addText('仙符·锦囊牌');
									dialog.add([list2, 'vcard']);
									return dialog;
								},
								filter(button, player) {
									return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									var player = _status.event.player;
									if (Math.random() < 0.5) {
										var hcard = playe.getCards('h', function (card) {
											return card.suit == 'heart';
										});
										for (let i = 0; i < hcard.length; i++) {
											if (lib.filter.filterCard(hcard[i])) return button.link[2] == hcard[i].name ? 1 : 0;
										}
										return button.link[2] == 'sha' ? 3 : 0;
									} else {
										var rate = Math.random();
										if (player.num('h', 'sha') && rate < 0.6) {
											return button.link[2] == 'sha' ? 1 : 0;
										}
										if (player.hp < player.maxHp) {
											if (player.num('h', 'tao') && rate < 0.6) return button.link[2] == 'tao' ? 2 : 0;
										}
										if (player.num('h', 'jiu') && rate < 0.4) {
											return button.link[2] == 'jiu' ? 3 : 0;
										}
										if (player.num('h', 'taoyuan') && rate < 0.8) {
											return button.link[2] == 'taoyuan' ? 9 : 0;
										}
										if (player.num('h', 'wugu') && rate < 0.8) {
											return button.link[2] == 'wugu' ? 3 : 0;
										}
										if (player.num('h', 'juedou') && rate < 0.4) {
											return button.link[2] == 'juedou' ? 5 : 0;
										}
										if (player.num('h', 'huogong') && rate < 0.8) {
											return button.link[2] == 'huogong' ? 1 : 0;
										}
										if (player.num('h', 'jiedao') && rate < 0.3) {
											return button.link[2] == 'jiedao' ? 8 : 0;
										}
										if (player.num('h', 'tiesuo') && rate < 0.2) {
											return button.link[2] == 'tiesuo' ? 7 : 0;
										}
										if (player.num('h', 'guohe') && rate < 0.4) {
											return button.link[2] == 'guohe' ? 7.6 : 0;
										}
										if (player.num('h', 'shunshou') && rate < 0.4) {
											return button.link[2] == 'shunshou' ? 7.5 : 0;
										}
										if (player.num('h', 'wuzhong') && rate < 0.8) {
											return button.link[2] == 'wuzhong' ? 7.2 : 0;
										}
										if (player.num('h', 'wanjian') && rate < 0.5) {
											return button.link[2] == 'wanjian' ? 9 : 0;
										}
										if (player.num('h', 'nanman') && rate < 0.2) {
											return button.link[2] == 'nanman' ? 9 : 0;
										}
										return button.link[2] == 'sha' ? 1 : 0;
									}
								},
								backup(links, player) {
									return {
										filterCard: true,
										selectCard: 1,
										popname: true,
										popup: false,
										forced: true,
										ai1(card) {
											if (Math.random() < 0.7) return card.name == links[0][2];
											return 4 - get.value(card);
										},
										viewAs: { name: links[0][2] },
										onuse(result, player) {
											var next = game.createEvent('guhuoing');
											next.player = player;
											next.card = result.cards[0];
											next.guhuo = links[0][2];
											next.setContent(lib.skill.qqwz仙符.preGuhuo);
										},
									};
								},
								prompt(links, player) {
									return '将一张手牌当' + get.translation(links[0][2]) + '使用';
								},
							},
							preGuhuo() {
								'step 0';
								player.lose(card, ui.special);
								var node = player.$throw(card);
								node.classList.add('infohidden');
								node.classList.add('infoflip');
								ui.refresh(node);
								game.log(player, '声称这张牌是<span class="yellowtext">' + get.translation(event.guhuo) + '</span>');
								event.node = node;
								event.targets = game.players.slice(0);
								event.targets.remove(player);
								event.targets.sort(lib.sort.seat);
								('step 1');
								if (event.targets.length) {
									var target = event.targets.shift();
									event.target = target;
									if (event.target.hasSkill('qqwz咒术')) {
										event.target.popup('不能质疑!');
										game.log(event.target, '中咒者无法质疑');
										event.redo();
									}
									event.target.chooseBool('仙符:' + get.translation(player) + '声称这张牌是' + get.translation(event.guhuo) + ',是否质疑?').ai = function () {
										if (event.target.isFriendsOf(player)) {
											if (get.value(game.createCard(event.guhuo), event.target, 'raw') > 6) return false;
											if (Math.random() < 0.3) {
												if (card.name == event.guhuo) return false;
												return true;
											}
											return false;
										} else {
											if (get.value(game.createCard(event.guhuo), event.target, 'raw') > 6) return true;
											if (Math.random() < 0.15) {
												if (card.name == event.guhuo) return false;
												return true;
											}
											return false;
										}
										return false;
									};
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.target.popup('质疑!');
									game.log(event.target, '质疑');
								} else {
									event.target.popup('不质疑!');
									game.log(event.target, '不质疑');
									event.goto(1);
								}
								('step 3');
								node = event.node;
								setTimeout(function () {
									node.style.transition = 'all ease-in 0.2s';
									node.style.transform = 'perspective(600px) rotateY(90deg) translateX(52px)';
									var onEnd = function () {
										node.classList.remove('infohidden');
										node.style.transition = 'all 0s';
										ui.refresh(node);
										node.style.transform = 'perspective(600px) rotateY(-90deg) translateX(52px)';
										ui.refresh(node);
										node.style.transition = '';
										ui.refresh(node);
										node.style.transform = '';
										node.removeEventListener('webkitTransitionEnd', onEnd);
									};
									node.addEventListener('webkitTransitionEnd', onEnd);
								}, 200);
								ui.refresh(node);
								if (card.name == event.guhuo) {
									player.line(event.target, 'thunder');
									event.target.addSkill('qqwz咒术');
									game.log(event.target, '已中咒!');
									event.finish();
								} else {
									event.target.line(player, 'fire');
									game.log(event.target, '质疑成功,', player, '的卡牌是', card);
									ui.discardPile.appendChild(card);
									player.recover(2);
									player.storage.qqwz仙符 = true;
								}
							},
							ai: {
								order: 10,
								result: {
									player: 1,
								},
								threaten: 1.5,
							},
							group: ['qqwz仙符_begin', 'qqwz仙符_sha', 'qqwz仙符_save', 'qqwz仙符_wuxie', 'qqwz仙符_respond', 'qqwz咒术'],
							subSkill: {
								begin: {
									trigger: {
										player: 'useCardBegin',
									},
									popup: false,
									forced: true,
									filter(event, player) {
										return event.skill == 'qqwz仙符_backup' || event.skill == 'qqwz仙符_sha' || event.skill == 'qqwz仙符_save' || event.skill == 'qqwz仙符_wuxie';
									},
									content() {
										if (player.storage.qqwz仙符) {
											trigger.untrigger();
											trigger.finish();
											ui.clear();
											player.storage.qqwz仙符 = false;
										} else {
											trigger.animate = false;
											var card = trigger.card;
											var event = _status.event;
											var targets = trigger.targets;
											if (card.name == 'wuxie' && event.parent.source) {
												var lining = event.parent.sourcex || event.parent.source2 || event.parent.source;
												if (lining == player && event.parent.sourcex2) {
													lining = event.parent.sourcex2;
												}
												if (Array.isArray(lining) && event.getTrigger().name == 'jiedao') {
													player.line(lining[0], 'green');
												} else {
													player.line(lining, 'green');
												}
											} else {
												var config = {};
												if (card.nature == 'fire' || (card.classList && card.classList.contains('fire'))) {
													config.color = 'fire';
												} else if (card.nature == 'thunder' || (card.classList && card.classList.contains('thunder'))) {
													config.color = 'thunder';
												}
												if (get.info(card).multitarget && targets.length > 1 && !get.info(card).multiline) {
													player.line2(targets, config);
												} else {
													player.line(targets, config);
												}
											}
										}
									},
								},
								sha: {
									enable: ['chooseToUse'],
									audio: 1,
									filter(event, player) {
										return event.parent.name != 'phaseUse' && player.countCards('h');
									},
									filterCard: true,
									selectCard: 1,
									check(card) {
										var player = _status.event.player;
										if (player.num('h', 'sha')) {
											if (card.name == 'sha') {
												if (card.suit == 'sha') return 8;
												if (Math.random() < 0.8) return 1;
												return 0;
											}
										}
										if (Math.random() < 0.6) return 4 - get.value(card);
										return 0;
									},
									viewAs: {
										name: 'sha',
									},
									onuse(result, player) {
										var next = game.createEvent('guhuoing');
										next.player = player;
										next.card = result.cards[0];
										next.guhuo = 'sha';
										next.setContent(lib.skill.qqwz仙符.preGuhuo);
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
								save: {
									enable: 'chooseToUse',
									audio: 1,
									filter(event, player) {
										return event.parent.name != 'phaseUse' && player.countCards('h') > 0;
									},
									filterCard: true,
									selectCard: 1,
									viewAs: {
										name: 'tao',
										suit: 'heart',
										number: 10,
									},
									check(card, event) {
										var player = _status.event.player;
										if (player.num('h', 'tao')) {
											if (card.name == 'tao') {
												if (card.suit == 'heart') return 8;
												if (Math.random() < 0.6) return 1;
												return 0;
											}
										}
										if (Math.random() < 0.6) return 4 - get.value(card);
										return 0;
									},
									onuse(result, player) {
										var next = game.createEvent('guhuoing');
										next.player = player;
										next.card = result.cards[0];
										next.guhuo = 'tao';
										next.setContent(lib.skill.qqwz仙符.preGuhuo);
									},
									ai: {
										skillTagFilter(player) {
											return player.countCards('h') > 0;
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
								wuxie: {
									enable: 'chooseToUse',
									audio: 1,
									filter(event, player) {
										return event.parent.name != 'phaseUse' && player.countCards('h');
									},
									filterCard: true,
									selectCard: 1,
									check(card, event) {
										var player = _status.event.player;
										if (player.num('h', 'wuxie')) {
											if (card.name == 'wuxie') {
												if (card.suit == 'heart') return 8;
												if (Math.random() < 0.6) return 1;
												return 0;
											}
										}
										if (Math.random() < 0.6) return 4 - get.value(card);
										return 0;
									},
									viewAs: {
										name: 'wuxie',
										suit: 'club',
										number: 3,
									},
									viewAsFilter(player) {
										return player.countCards('h') > 0;
									},
									onuse(result, player) {
										var next = game.createEvent('guhuoing');
										next.player = player;
										next.card = result.cards[0];
										next.guhuo = 'wuxie';
										next.setContent(lib.skill.qqwz仙符.preGuhuo);
									},
									ai: {
										basic: {
											useful: [6, 4],
											value: [6, 4],
										},
										result: {
											player: 1,
										},
										expose: 0.2,
									},
								},
								respond: {
									trigger: {
										player: 'chooseToRespondBegin',
									},
									filter(event, player) {
										if (event.responded) return false;
										return player.countCards('h');
									},
									forced: true,
									content() {
										'step 0';
										if (trigger.filterCard({ name: 'sha' }, player)) event.guhuoname = 'sha';
										else event.guhuoname = 'shan';
										player.chooseCard('需要打出一张' + get.translation(event.guhuoname) + ',' + get.prompt('qqwz仙符')).ai = function (card) {
											if (player.num('h', event.guhuoname)) {
												if (card.name == event.guhuoname) {
													if (card.suit == 'sha') return 8;
													if (Math.random() < 0.8) return 1;
													return 0;
												}
											}
											if (Math.random() < 0.6) return 4 - get.value(card);
											return 0;
										};
										('step 1');
										if (result.bool) {
											game.log(player, '声称打出的牌是' + get.translation(event.guhuoname));
											var card = result.cards[0];
											player.lose(card, ui.special);
											var node1 = player.$throw(card);
											node1.classList.add('infohidden');
											node1.classList.add('infoflip');
											ui.refresh(node1);
											event.node1 = node1;
											event.targets = game.players.slice(0);
											event.targets.remove(player);
											event.targets.sort(lib.sort.seat);
											event.guhuocard = card;
										} else {
											event.finish();
										}
										('step 2');
										if (event.targets.length) {
											var target = event.targets.shift();
											event.target = target;
											if (event.target.hasSkill('qqwz咒术')) {
												event.target.popup('不能质疑!');
												game.log(event.target, '中咒者无法质疑');
												event.redo();
											}
											event.target.chooseBool('仙符:' + get.translation(player) + '声称这张牌是' + get.translation(event.guhuoname) + ',是否质疑?').ai = function () {
												if (event.target.isFriendsOf(player)) {
													if (get.value(game.createCard(event.guhuoname)) > 6) return false;
													if (Math.random() < 0.3) return true;
													return false;
												} else {
													if (get.value(game.createCard(event.guhuoname)) > 6) return true;
													if (Math.random() < 0.15) return true;
													return false;
												}//QQQ
												return false;
											};
										} else {
											event.finish();
										}
										('step 3');
										if (result.bool) {
											event.target.popup('质疑!');
											game.log(event.target, '质疑');
										} else {
											event.target.popup('不质疑!');
											game.log(event.target, '不质疑');
											event.goto(2);
										}
										('step 4');
										node1 = event.node1;
										setTimeout(function () {
											node1.style.transition = 'all ease-in 0.2s';
											node1.style.transform = 'perspective(600px) rotateY(90deg) translateX(52px)';
											var onEnd = function () {
												node1.classList.remove('infohidden');
												node1.style.transition = 'all 0s';
												ui.refresh(node1);
												node1.style.transform = 'perspective(600px) rotateY(-90deg) translateX(52px)';
												ui.refresh(node1);
												node1.style.transition = '';
												ui.refresh(node1);
												node1.style.transform = '';
												node1.removeEventListener('webkitTransitionEnd', onEnd);
											};
											node1.addEventListener('webkitTransitionEnd', onEnd);
										}, 200);
										ui.refresh(node1);
										if (trigger.filterCard({ name: event.guhuocard.name }, player)) {
											player.line(event.target, 'thunder');
											event.target.addSkill('qqwz咒术');
											game.log(event.target, '已中咒!');
											trigger.untrigger();
											trigger.responded = true;
											trigger.animate = false;
											trigger.result = {
												bool: true,
												card: { name: event.guhuoname },
												cards: [event.guhuocard],
											};
										} else {
											game.log(event.target, '质疑成功,', player, '的卡牌失效');
											trigger.untrigger();
											trigger.trigger('chooseToRespondBegin');
											player.recover(2);
										}
									},
								},
							},
						},
						qqwz咒术: {
							trigger: {
								player: ['phaseBefore', 'changeHp'],
							},
							forced: true,
							popup: false,
							content() {
								var list = player.getCards('s');
								list.remove('qqwz咒术');
								if (player.hp == 1) {
									player.disableSkill('qqwz咒术', list);
									player.markSkill('qqwz咒术');
								} else {
									player.enableSkill('qqwz咒术');
									player.unmarkSkill('qqwz咒术');
								}
							},
							init2(player) {
								if (player.hp == 1) {
									var list = player.getCards('s');
									list.remove('qqwz咒术');
									player.disableSkill('qqwz咒术', list);
									player.markSkill('qqwz咒术');
								}
							},
							marktext: '咒',
							intro: {
								content(st, player) {
									var storage = player.disabledSkills.qqwz咒术;
									if (storage && storage.length) {
										var str = '失效技能:';
										for (let i = 0; i < storage.length; i++) {
											if (lib.translate[storage[i] + '_info']) {
												str += get.translation(storage[i]) + '、';
											}
										}
										return str.slice(0, str.length - 1);
									}
								},
							},
							group: 'qqwz咒术_1',
							subSkill: {
								1: {
									trigger: {
										player: 'recoverBefore',
									},
									forced: true,
									content() {
										trigger.untrigger();
										trigger.finish();
									},
									mod: {
										maxHandcard(player, num) {
											return num - 2;
										},
									},
								},
							},
						},
						qqwz飞熊: {
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return event.nature;
							},
							content() {
								trigger.cancel();
							},
							group: 'qqwz飞熊_1',
							subSkill: {
								1: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return player.countCards('h') >= 4;
									},
									content() {
										player.recover(2);
									},
								},
							},
						},
						qqwz骁勇: {
							trigger: {
								player: 'useCardAfter',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								player.useCard(trigger.card, trigger.targets, false)._triggered = null;
							},
							group: ['qqwz骁勇_1', 'qqwz骁勇_2'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									content() {
										player.draw();
									},
								},
								2: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'recoverBefore',
									},
									forced: true,
									content() {
										'step 0';
										var card = get.cardPile(function (card) {
											return get.type(card) == 'equip';
										});
										event.card = card;
										('step 1');
										if (event.card) {
											player.equip(event.card);
											player.loseHp(2);
										}
									},
								},
							},
						},
						qqwz百战: {
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return event.source && event.source.countCards('he') && event.source != player && Math.random() <= 0.4;
							},
							content() {
								'step 0';
								event.list = player.getFriends().sortBySeat();
								var lk = trigger.num;
								trigger.source.damage(lk);
								('step 1');
								if (event.list.length) {
									var target = event.list.shift();
									player.line(target, 'green');
									target.changeHujia();
									event.redo();
								}
							},
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						qqwz孤鹫: {
							trigger: {
								global: 'gameDrawAfter',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								player.forcemin = true;
							},
							mod: {
								globalFrom(from, to, distance) {
									return distance - from.hp;
								},
								globalTo(from, to, distance) {
									return distance + from.hp;
								},
								maxHandcard(player, num) {
									return 4 + player.hp;
								},
							},
						},
						qqwz祸乱: {
							mode: ['identity'],
							trigger: {
								global: 'gameStart',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							_priority: 70000,
							filter(event, player) {
								return player.identity != 'zhu';
							},
							content() {
								player.identity = 'nei';
								player.setIdentity('nei');
								player.identityShown = true;
								player.draw(2);
							},
							ai: {
								threaten: 8.1,
							},
							group: ['qqwz祸乱_1', 'qqwz祸乱_2'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										if (event.source != 'qun') return false;
										return true;
									},
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
								2: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									content() {
										trigger.num++;
									},
								},
							},
						},
						qqwz逆击: {
							trigger: {
								player: 'changeHp',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.hp <= 3;
							},
							content() {
								player.phase('nodelay');
							},
							group: 'qqwz逆击_1',
							subSkill: {
								1: {
									trigger: {
										global: ['damageEnd', 'recoverEnd'],
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return player != event.player;
									},
									content() {
										player.chooseToUse({ name: 'sha' }, '逆击:是否使用一杀？');
									},
								},
							},
						},
						qqwz月魂: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (result.color == 'red') {
									player.recover();
									player.draw();
								}
								('step 2');
								if (result.color == 'black') {
									for (const i of game.players) {
										if (i != player && i.sex == 'male' && get.attitude(i, player) <= 0) {
											i.damage(2);
										}
									}
								}
							},
							group: 'qqwz月魂_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									content() {
										'step 0';
										player.chooseTarget('是否发动【月魂】？', function (card, player, target) {
											return target.sex == 'male';
										}).ai = function (target) {
											var nh = target.countCards('h');
											if (target.countCards('h', { name: 'du' }) == nh) return -1;
											if (get.attitude(player, target) < 0 && nh > 0) return 2;
											if (get.attitude(player, target) == 0 && nh > 0) return 1;//QQQ
											return 0.5;
										};
										('step 1');
										if (result.bool) {
											player.gainPlayerCard('h', result.targets[0]);
										}
									},
								},
							},
						},
						qqwz月尘: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.countCards('he') && event.source != player;
							},
							content() {
								var x = player.maxHp - player.hp;
								player.draw(x);
							},
							group: 'qqwz月尘_1',
							subSkill: {
								1: {
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return event.player.sex == 'male' && event.player != player;
									},
									content() {
										var jk = player.maxHp - player.hp;
										trigger.num += jk;
									},
								},
							},
						},
						qqwz憾世: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								var num = 0;
								for (const i of game.players) {
									num++;
								}
								return num > 1;
							},
							check(card) {
								return 10 - get.value(card);
							},
							filterCard: true,
							position: 'he',
							filterTarget(card, player, target) {
								if (ui.selected.targets.length == 1) {
									return target.canUse({ name: 'juedou' }, ui.selected.targets[0]);
								}
								return true;
							},
							targetprompt: ['先出杀', '后出杀'],
							selectTarget: 2,
							multitarget: true,
							content() {
								'step 0';
								targets[0].addSkill('qqwz憾世_1');
								targets[1].addSkill('qqwz憾世_1');
								('step 1');
								targets[1].useCard({ name: 'juedou' }, targets[0]).animate = false;
								('step 2');
								targets[0].goMad({ player: 'phaseAfter' });
								targets[1].goMad({ player: 'phaseAfter' });
								targets[0].removeSkill('qqwz憾世_1');
								targets[1].removeSkill('qqwz憾世_1');
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (ui.selected.targets.length == 0) {
											return -2.5;
										} else {
											return ai.get.effect(target, { name: 'juedou' }, ui.selected.targets[0], target);
										}
									},
								},
								expose: 0.4,
								threaten: 3,
							},
							group: 'qqwz憾世_2',
							subSkill: {
								1: {
									ai: {
										playernowuxie: true,
									},
								},
								2: {
									trigger: {
										player: 'dying',
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									filter(event, player) {
										return player.hp <= 0 && player.countCards('h') > 0;
									},
									content() {
										player.discard(player.getCards('h'));
										player.hp = player.maxHp;
										player.loseMaxHp();
									},
								},
							},
						},
						qqwz据江: {
							trigger: {
								player: 'damageBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return event.player != player && _status.currentPhase == player;
							},
							content() {
								trigger.cancel();
							},
							group: ['qqwz据江_1'],
							subSkill: {
								1: {
									trigger: {
										global: 'phaseUseBegin',
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									filter(event, player) {
										return player.getEnemies().includes(event.player) && player.countCards('h') != event.player.countCards('h');
									},
									content() {
										'step 0';
										if (player.countCards('h') > trigger.player.countCards('h')) {
											var ki = player.countCards('h') - trigger.player.countCards('h');
											trigger.player.damage(ki);
										}
										('step 1');
										if (player.countCards('h') < trigger.player.countCards('h')) {
											var ku = trigger.player.countCards('h') - player.countCards('h');
											trigger.player.damage(ku);
										}
									},
								},
							},
						},
						qqwz汉学: {
							trigger: {
								global: 'phaseDrawBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.getFriends().includes(event.player) && event.player.group == 'qun';
							},
							content() {
								trigger.num++;
							},
							group: ['qqwz汉学_1', 'qqwz汉学_2'],
							subSkill: {
								1: {
									trigger: {
										global: 'phaseDiscardBegin',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return player.getFriends().includes(event.player) && event.player.group == 'qun';
									},
									content() {
										trigger.cancel();
									},
								},
								2: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										global: 'loseEnd',
									},
									forced: true,
									filter(event, player) {
										return player.getFriends().includes(event.player) && _status.currentPhase != event.player;
									},
									content() {
										trigger.player.draw();
									},
								},
							},
						},
						qqwz鸿德: {
							trigger: {
								player: 'recoverBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								player.draw();
							},
							group: ['qqwz鸿德_1', 'qqwz鸿德_2'],
							subSkill: {
								1: {
									trigger: {
										player: 'loseEnd',
									},
									usable: 2,
									forced: true,
									filter(event, player) {
										return _status.currentPhase != player && player.countCards('h') < Math.min(4);
									},
									content() {
										player.draw(Math.min(4) - player.countCards('h'));
									},
									ai: {
										threaten: 1.8,
									},
								},
								2: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'gainEnd',
									},
									filter(event, player) {
										return _status.currentPhase == player;
									},
									forced: true,
									content() {
										'step 0';
										event.list = player.getFriends().sortBySeat();
										('step 1');
										if (event.list.length) {
											var target = event.list.shift();
											player.line(target, 'green');
											target.draw();
											event.redo();
										}
									},
									ai: {
										threaten: 1.5,
									},
								},
							},
						},
						qqwz平反: {
							enable: 'phaseUse',
							filter(event, player) {
								var num;
								if (get.mode() == 'identity') {
									num = get.population('fan');
								} else {
									num = 1;
								}
								if (player.getStat().skill.qqwz平反 >= num) return false;
								return true;
							},
							filterTarget(card, player, target) {
								return target.countCards('e') > 0;
							},
							content() {
								'step 0';
								target.draw();
								('step 1');
								var goon = get.damageEffect(target, player, target) >= 0;
								if (!goon && target.hp >= 4 && get.attitude(player, target) < 0) {
									var es = target.getCards('e');
									for (let i = 0; i < es.length; i++) {
										if (get.equipValue(es[i], target) >= 8) {
											goon = true;
											break;
										}
									}
								}
								target
									.chooseControl(function () {
										if (_status.event.goon) return '选项二';
										return '选项一';
									})
									.set('goon', goon)
									.set('prompt', '平反')
									.set('choiceList', ['令' + get.translation(player) + '弃置你装备区里的一张牌并流失1点体力', '获得你装备区内的所有牌并摸2张牌']);
								('step 2');
								if (result.control == '选项一') {
									player.discardPlayerCard(target, true, 'e');
									target.loseHp();
									event.finish();
								} else {
									target.gain(target.getCards('e'), 'gain2');
									player.draw(2);
								}
								('step 3');
								var fz = player.countCards('e');
								target.damage(fz);
							},
							ai: {
								order: 7,
								result: {
									target(player, target) {
										if (get.damageEffect(target, player, target) >= 0) return 2;
										var att = get.attitude(player, target);
										if (att == 0) return 0;
										var es = target.getCards('e');
										if (att > 0 && (target.countCards('h') > 2 || target.needsToDiscard(1))) return 0;
										if (es.length == 1 && att > 0) return 0;
										for (let i = 0; i < es.length; i++) {
											var val = get.equipValue(es[i], target);
											if (val <= 4) {
												if (att > 0) {
													return 1;
												}
											} else if (val >= 7) {
												if (att < 0) {
													return -1;
												}
											}
										}
										return 0;
									},
								},
							},
							group: 'qqwz平反_1',
							subSkill: {
								1: {
									trigger: {
										source: 'damageAfter',
									},
									audio: 'ext:千秋万载/audio:2',
									check(event, player) {
										return get.attitude(player, event.player) <= 0;
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
									},
									content() {
										player.draw();
										player.useCard({ name: 'juedou' }, trigger.player);
									},
									ai: {
										threaten: 1.5,
										expose: 0.1,
									},
								},
							},
						},
						qqwz妖道: {
							trigger: {
								player: 'phaseUseBegin',
							},
							init(player) {
								player.storage.qqwz妖道 = [];
							},
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard('h', '是否弃置一张牌以发动技能<妖道>');
								('step 1');
								if (result.bool) {
									if (player.storage.qqwz妖道.length) {
										player.discard(player.storage.qqwz妖道);
										delete player.storage.qqwz妖道;
										player.storage.qqwz妖道 = [];
										player.storage.qqwz妖道.length = 0;
									}
									var suit = result.cards[0].suit;
									var cards = [];
									for (let i = 0; i < ui.cardPile.childNodes.length; i++) {
										var card = ui.cardPile.childNodes[i];
										cards.push(card);
										if (card.suit == suit || i > 3) {
											break;
										}
									}
									event.cards = cards;
									event.suit = suit;
									player.showCards(cards);
								} else {
									event.finish();
								}
								('step 2');
								if (event.cards && event.cards.length) {
									player.gain(event.cards);
									player.lose(event.cards);
									player.storage.qqwz妖道 = player.storage.qqwz妖道.concat(event.cards);
									game.log(player, '将', event.cards, '置于武将牌上作为<咒>');
									player.markSkill('qqwz妖道');
								}
							},
							intro: {
								content: 'cards',
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.qqwz妖道.length;
								},
							},
							group: ['qqwz妖道_1', 'qqwz妖道_2'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageBegin',
									},
									prompt: '发动妖道进行判定,若判定花色与伤害来源的牌相同则取消本次伤害,伤害来源翻面,若不同你摸一张牌',
									filter(event, player) {
										if (!event.card || (event.card && event.card.suit == undefined)) return false;
										return event.player != player;
									},
									check(event, player) {
										return 1;
									},
									_priority: -8,
									content() {
										'step 0';
										player.judge(ui.special, function (card) {
											if (card.suit == trigger.card.suit) return 2;
											return 1;
										});
										('step 1');
										if (result.card.suit == trigger.card.suit) {
											trigger.untrigger();
											trigger.finish();
											trigger.source.turnOver();
										} else {
											player.draw();
											player.recover();
										}
									},
								},
								2: {
									trigger: {
										player: 'damageBegin',
									},
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return player.storage.qqwz妖道.length && event.nature == 'thunder' && event.nature == 'fire';
									},
									content() {
										'step 0';
										player.chooseCardButton(player.storage.qqwz妖道, true);
										('step 1');
										var card = result.links[0];
										card.discard();
										player.$throw(card);
										player.storage.qqwz妖道.remove(card);
										if (!player.storage.qqwz妖道.length) {
											player.unmarkSkill('qqwz妖道');
										} else {
											player.markSkill('qqwz妖道');
										}
										('step 2');
										trigger.cancel();
										player.draw();
									},
								},
							},
						},
						qqwz通甲: {
							trigger: {
								player: 'phaseEnd',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								var cardNum = player.hp - player.countCards('h');
								if (cardNum > 0) {
									player.draw(cardNum);
								}
							},
							group: ['qqwz通甲_1', 'qqwz通甲_2'],
							subSkill: {
								1: {
									trigger: {
										player: ['useCardAfter', 'respondAfter'],
									},
									silent: true,
									init(player) {
										player.storage.qqwz通甲_1 = [];
									},
									intro: {
										content(storage) {
											if (!storage.length) {
												return '未使用或打出过有花色的牌';
											} else {
												var str = '已使用过' + get.translation(storage[0] + '2');
												for (let i = 1; i < storage.length; i++) {
													str += '、' + get.translation(storage[i] + '2');
												}
												str += '牌';
												return str;
											}
										},
									},
									content() {
										var suit = trigger.card.suit;
										if (suit) {
											player.storage.qqwz通甲_1.add(suit);
											player.markSkill('qqwz通甲_1');
										}
									},
									forced: true,
									popup: false,
								},
								2: {
									trigger: {
										global: 'phaseAfter',
									},
									_priority: -50,
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return player.storage.qqwz通甲_1.length >= 4;
									},
									content() {
										player.phase('nodelay');
										player.addTempSkill('guidao', { player: 'phaseEnd' });
										player.addTempSkill('jianying', { player: 'phaseEnd' });
										player.addTempSkill('jigong', { player: 'phaseEnd' });
										player.addTempSkill('luanzhan', { player: 'phaseEnd' });
										player.storage.qqwz通甲_1.length = 0;
										player.unmarkSkill('qqwz通甲_1');
									},
								},
							},
						},
						qqwz狂傲2: {
							enable: 'chooseToUse',
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return _status.currentPhase !== player && event.type != 'wuxie' && event.type != 'trickuse';
							},
							onChooseToUse(event) {
								if (!game.online) {
									var cards = [];
									if (ui.cardPile.childNodes.length < 10) {
										var discardcards = get.cards(10);
										for (let i = 0; i < discardcards.length; i++) {
											discardi.discard();
										}
									}
									for (let i = 0; i < 2; i++) {
										cards.push(ui.cardPile.childNodes[i]);
									}
									event.set('aocaicards', cards);
								}
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog('狂傲:选择一张卡牌使用', event.aocaicards);
								},
								filter(button, player) {
									var evt = _status.event.parent;
									if (evt && evt.filterCard) {
										return get.type(button.link) == 'basic' && evt.filterCard(button.link, player, evt);
									}
									return false;
								},
								check(button) {
									return 1;
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										viewAs: links[0],
									};
								},
								prompt(links, player) {
									return '选择' + get.translation(links) + '的目标';
								},
							},
							ai: {
								order: 11,
								save: true,
								result: {
									player(player) {
										if (player.tempSkills.aocai4) return 0;
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
						},
						qqwz魔姬: {
							mod: {
								maxHandcard(player, num) {
									var hs = player.getCards('h');
									for (let i = 0; i < hs.length; i++) {
										if (get.color(hs[i]) == 'black') {
											num++;
										}
									}
									return num;
								},
							},
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return event.player != player;
							},
							content() {
								'step 0';
								trigger.player.addSkill('qqwz黑殇');
								('step 1');
								if (result.bool) {
									if (!trigger.player.isTurnedOver()) trigger.player.turnOver();
									else trigger.player.loseHp();
								} else event.finish();
							},
							group: ['qqwz魔姬_1', 'qqwz魔姬_2'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										global: 'phaseDrawAfter',
									},
									forced: true,
									logTarget: 'player',
									filter(event, player) {
										return event.player.countCards('he') > 0 && event.player != player && event.player.group == 'qun';
									},
									content() {
										player.gainPlayerCard(trigger.player, true);
									},
								},
								2: {
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return event.player.hasSkill('qqwz黑殇');
									},
									content() {
										trigger.player.loseMaxHp();
									},
								},
							},
						},
						qqwz黑殇: {
							mark: true,
							intro: {
								content: '不能使用、打出或弃置黑色牌',
								nocount: true,
							},
							mod: {
								cardDiscardable(card, player) {
									if (player.storage.qqwz黑殇 && player.storage.qqwz黑殇.includes(card)) return false;
								},
								cardEnabled(card, player) {
									if (player.storage.qqwz黑殇 && player.storage.qqwz黑殇.includes(card)) return false;
								},
								cardUsable(card, player) {
									if (player.storage.qqwz黑殇 && player.storage.qqwz黑殇.includes(card)) return false;
								},
								cardRespondable(card, player) {
									if (player.storage.qqwz黑殇 && player.storage.qqwz黑殇.includes(card)) return false;
								},
								cardSavable(card, player) {
									if (player.storage.qqwz黑殇 && player.storage.qqwz黑殇.includes(card)) return false;
								},
							},
							group: 'qqwz黑殇_1',
							subSkill: {
								1: {
									trigger: {
										player: 'loseEnd',
									},
									silent: true,
									content() {
										if (player.storage.qqwz黑殇) {
											for (let i = 0; i < player.storage.qqwz黑殇.length; i++) {
												if (trigger.cards.includes(player.storage.qqwz黑殇[i])) {
													player.storage.qqwz黑殇.splice(i--, 1);
												}
											}
										}
									},
									forced: true,
									popup: false,
								},
							},
						},
						qqwz巧智: {
							trigger: {
								source: 'damageEnd',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							mark: true,
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							init(player) {
								player.storage.qqwz巧智 = 0;
								game.addVideo('storage', player, ['qqwz巧智', player.storage.qqwz巧智]);
							},
							content() {
								player.storage.qqwz巧智++;
								game.addVideo('storage', player, ['qqwz巧智', player.storage.qqwz巧智]);
							},
							intro: {
								content: 'mark',
							},
							mod: {
								maxHandcard(player, num) {
									return (num -= player.storage.qqwz巧智);
								},
							},
							group: ['qqwz巧智_1', 'qqwz巧智_2'],
							subSkill: {
								1: {
									trigger: {
										source: 'damageBegin',
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									filter(event, player) {
										return event.player != player;
									},
									content() {
										var xx = player.storage.qqwz巧智;
										trigger.num += xx;
									},
								},
								2: {
									trigger: {
										player: 'damageBegin',
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									filter(event, player) {
										return event.player != player && player.storage.qqwz巧智 >= 2;
									},
									content() {
										player.storage.qqwz巧智 -= 2;
										trigger.cancel();
									},
								},
							},
						},
						qqwz谄辞: {
							trigger: {
								player: 'dying',
							},
							filter(event, player) {
								return !player.storage.qqwz谄辞 && player.identity == 'zhong';
							},
							forced: true,
							derivation: ['qqwz谋翼'],
							_priority: 100,
							content() {
								'step 0';
								player.storage.qqwz谄辞 = true;
								('step 1');
								var zhu = get.zhu(player);
								zhu.loseMaxHp();
								player.loseMaxHp();
								player.hp = player.maxHp;
								player.addSkill('qqwz谋翼');
							},
						},
						qqwz谋翼: {
							trigger: {
								player: 'damageBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return event.player != player;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCardTarget({
									multitarget: true,
									filterTarget(card, player, target) {
										if (ui.selected.targets.length) {
											var from = ui.selected.targets[0];
											var judges = from.getCards('j');
											for (let i = 0; i < judges.length; i++) {
												if (!target.hasJudge(judges[i].viewAs || judges[i].name)) return true;
											}
											if (target.isMin()) return false;
											if ((from.getEquips(1) && !target.getEquips(1)) || (from.getEquips(2) && !target.getEquips(2)) || (from.getEquips(3) && !target.getEquips(3)) || (from.getEquips(4) && !target.getEquips(4)) || (from.getEquips(5) && !target.getEquips(5)) || from.getCards('h')) return true;
											return false;
										} else {
											return target.countCards('hej') > 0;
										}
									},
									selectTarget: 2,
									filterCard: true,
									selectCard: 0,
									prompt: '是否发动谋翼？',
									targetprompt: ['被移走', '移动目标'],
								});
								('step 1');
								if (result.bool == false) {
									event.finish();
									return;
								}
								player.discard(result.cards);
								player.line2(result.targets);
								event.targets = result.targets;
								('step 2');
								('step 3');
								if (targets.length == 2) {
									player.choosePlayerCard(
										'hej',
										function (button) {
											if (get.attitude(player, targets[0]) > get.attitude(player, targets[1])) {
												return get.position(button.link) == 'j' ? 10 : 0;
											} else {
												if (get.position(button.link) == 'j') return -10;
												return ai.get.equipValue(button.link);
											}
										},
										targets[0]
									);
								} else {
									event.finish();
								}
								('step 4');
								if (result.bool) {
									if (get.position(result.buttons[0].link) == 'e') {
										event.targets[1].equip(result.buttons[0].link);
									} else if (get.position(result.buttons[0].link) == 'h') {
										event.targets[1].gain(result.buttons[0].link);
									} else if (result.buttons[0].link.viewAs) {
										event.targets[1].addJudge({ name: result.buttons[0].link.viewAs }, [result.buttons[0].link]);
									} else {
										event.targets[1].addJudge(result.buttons[0].link);
									}
									event.targets[0].$give(result.buttons[0].link, event.targets[1]);
								}
							},
							ai: {
								expose: 0.2,
							},
							group: ['qqwz谋翼1', 'qqwz谋翼_2'],
							subSkill: {
								2: {
									trigger: {
										source: 'damageBegin',
									},
									filter(event, player) {
										return event.player != player;
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									content() {
										'step 0';
										player.chooseCardTarget({
											multitarget: true,
											filterTarget(card, player, target) {
												if (ui.selected.targets.length) {
													var from = ui.selected.targets[0];
													var judges = from.getCards('j');
													for (let i = 0; i < judges.length; i++) {
														if (!target.hasJudge(judges[i].viewAs || judges[i].name)) return true;
													}
													if (target.isMin()) return false;
													if ((from.getEquips(1) && !target.getEquips(1)) || (from.getEquips(2) && !target.getEquips(2)) || (from.getEquips(3) && !target.getEquips(3)) || (from.getEquips(4) && !target.getEquips(4)) || (from.getEquips(5) && !target.getEquips(5)) || from.getCards('h')) return true;
													return false;
												} else {
													return target.countCards('hej') > 0;
												}
											},
											selectTarget: 2,
											filterCard: true,
											selectCard: 0,
											prompt: '是否发动谋翼？',
											targetprompt: ['被移走', '移动目标'],
										});
										('step 1');
										if (result.bool == false) {
											event.finish();
											return;
										}
										player.discard(result.cards);
										player.line2(result.targets);
										event.targets = result.targets;
										('step 2');
										('step 3');
										if (targets.length == 2) {
											player.choosePlayerCard(
												'hej',
												function (button) {
													if (get.attitude(player, targets[0]) > get.attitude(player, targets[1])) {
														return get.position(button.link) == 'j' ? 10 : 0;
													} else {
														if (get.position(button.link) == 'j') return -10;
														return ai.get.equipValue(button.link);
													}
												},
												targets[0]
											);
										} else {
											event.finish();
										}
										('step 4');
										if (result.bool) {
											if (get.position(result.buttons[0].link) == 'e') {
												event.targets[1].equip(result.buttons[0].link);
											} else if (get.position(result.buttons[0].link) == 'h') {
												event.targets[1].gain(result.buttons[0].link);
											} else if (result.buttons[0].link.viewAs) {
												event.targets[1].addJudge({ name: result.buttons[0].link.viewAs }, [result.buttons[0].link]);
											} else {
												event.targets[1].addJudge(result.buttons[0].link);
											}
											event.targets[0].$give(result.buttons[0].link, event.targets[1]);
										}
									},
									ai: {
										expose: 0.2,
									},
								},
							},
						},
						qqwz谋翼1: {
							group: ['qqwz谋翼1_fff1', 'qqwz谋翼1_fff2'],
							subSkill: {
								fff1: {
									trigger: {
										player: 'damageEnd',
									},
									filter(event, player) {
										return;
										event.source && event.source != player && event.card && get.position(event.cards[0]) == 'd' && get.itemtype(event.cards) == 'cards' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
									},
									forced: true,
									content() {
										player.storage.qqwz谋翼1 = true;
									},
								},
								fff2: {
									trigger: {
										global: 'useCardAfter',
									},
									filter(event, player) {
										return event.player != player && get.position(event.card) == 'd' && get.itemtype(event.card) == 'card' && event.targets[0] == player;
									},
									forced: true,
									content() {
										'step 0';
										if (player.storage.qqwz谋翼1 && trigger.targets.length == 1) {
											player.chooseTarget(
												'是否发动【谋翼】？',
												function (card, player, target) {
													return target != player;
												},
												1
											);
										} else if (!player.storage.qqwz谋翼1 && trigger.targets.length == 1 && player.countCards('he') > 0) {
											player.chooseCardTarget({
												prompt: '是否发动【谋翼】？',
												filterCard: true,
												position: 'he',
												filterTarget(card, player, target) {
													return target != player;
												},
											});
										} else if (trigger.targets.length != 1) {
											player.storage.qqwz谋翼1 = false;
											event.finish();
										}
										('step 1');
										if (result.bool) {
											player.discard(result.cards);
											player.useCard(trigger.card, result.targets[0]);
										} else {
											player.storage.qqwz谋翼1 = false;
											event.finish();
										}
										('step 2');
										player.storage.qqwz谋翼1 = false;
									},
								},
							},
						},
						qqwz祸常: {
							enable: 'phaseUse',
							filterCard(card, player) {
								return get.color(card) == 'black';
							},
							audio: 'ext:千秋万载/audio:2',
							filterTarget(card, player, target) {
								return player != target && target.storage.qqwz祸常_1 == undefined && get.distance(player, target, 'attack') <= 1;
							},
							line: false,
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								targets[0].storage.qqwz祸常_1 = cards[0];
								targets[0].storage.qqwz祸常 = player;
								player.lose(cards[0], ui.special);
								player.line(targets[0], 'thunder');
								targets[0].addSkill('qqwz祸常_1');
								targets[0].markSkill('qqwz祸常_1');
							},
							ai: {
								order: 5,
								result: {
									target: -1,
								},
							},
							subSkill: {
								1: {
									trigger: {
										player: 'phaseBefore',
									},
									_priority: 19,
									forced: true,
									popup: false,
									mark: true,
									intro: {
										content: 'cards',
										onunmark(storage, player) {
											if (storage) {
												ui.discardPile.appendChild(storage);
												player.$throw(storage);
												delete player.storage.qqwz祸常_1;
											}
										},
									},
									filter(event, player) {
										return player.storage.qqwz祸常_1;
									},
									content() {
										'step 0';
										player.removeSkill('qqwz祸常_1');
										player.discard(player.storage.qqwz祸常_1);
										player.judge(function (card) {
											if (get.color(card) == 'red') return 1.5;
											return -0.5;
										});
										('step 1');
										if (result.judge < 0) {
											if (player.storage.qqwz祸常.isAlive()) {
												player.storage.qqwz祸常.phase('nodelay');
											}
											trigger.finish();
											player.phaseSkipped = true;
										}
										delete player.storage.qqwz祸常_1;
										delete player.storage.qqwz祸常;
									},
								},
							},
						},
						qqwz凝烈: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('qqwz凝烈'), function (card, player, target) {
										return player != target && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									var nk = trigger.num;
									player.discardPlayerCard(nk, event.target, true);
								} else {
									event.finish();
								}
							},
							ai: {
								expose: 0.2,
							},
							mod: {
								suit(card, suit) {
									return 'none';
								},
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
							},
							group: 'qqwz凝烈_1',
							subSkill: {
								1: {
									trigger: {
										player: 'turnOverBefore',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.cancel();
									},
								},
							},
						},
						qqwz医国: {
							trigger: {
								global: 'recoverBefore',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return player.getEnemies().includes(event.player);
							},
							content() {
								player.judge(function (card) {
									if (card.suit == 'spade') {
										trigger.player.turnOver();
										trigger.cancel();
									}
									if (card.suit == 'club') {
										trigger.player.loseHp();
									}
									if (card.suit == 'heart') {
										player.draw();
										trigger.num -= 1;
									}
									if (card.suit == 'diamond') {
										for (const i of game.players) if (get.attitude(player, i) > 0) i.draw();
									}
								});
							},
							group: 'qqwz医国_1',
							subSkill: {
								1: {
									trigger: {
										player: 'damageBefore',
									},
									_priority: -2,
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
							},
						},
						qqwz刮骨: {
							audio: 'ext:千秋万载/audio:2',
							enable: 'phaseUse',
							filterCard: true,
							check(card) {
								return 9 - get.value(card);
							},
							filterTarget(card, player, target) {
								if (target.hp >= target.maxHp) return false;
								return true;
							},
							content() {
								target.recover(target.maxHp - target.hp);
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										if (target.hp == 1) return 5;
										if (player == target && player.countCards('h') > player.hp) return 5;
										return 2;
									},
								},
								threaten: 2,
							},
							group: 'qqwz刮骨_1',
							subSkill: {
								1: {
									trigger: {
										global: 'loseEnd',
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									filter(event, player) {
										return player.getFriends().includes(event.player) && _status.currentPhase !== event.player;
									},
									content() {
										trigger.player.recover(1);
									},
								},
							},
						},
						qqwz豪贵: {
							trigger: {
								global: 'useCardAfter',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return event.card && event.card.name == 'wanjian' && event.player != player && get.position(event.card) == 'd' && get.itemtype(event.card) == 'card';
							},
							content() {
								player.gain(trigger.card);
								player.$gain2(trigger.card);
								player.recover();
							},
							group: 'qqwz豪贵_1',
							subSkill: {
								1: {
									trigger: {
										player: 'turnOverBefore',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.cancel();
									},
								},
							},
						},
						qqwz割据: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'wanjian';
							},
							mark: true,
							init(player) {
								player.storage.qqwz割据 = 0;
								game.addVideo('storage', player, ['qqwz割据', player.storage.qqwz割据]);
							},
							content() {
								player.storage.qqwz割据++;
								game.addVideo('storage', player, ['qqwz割据', player.storage.qqwz割据]);
							},
							intro: {
								content: 'mark',
							},
							group: ['qqwz割据_1', 'qqwz割据_2', 'qqwz割据_3'],
							subSkill: {
								1: {
									trigger: {
										source: 'damageBegin',
									},
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
									},
									forced: true,
									content() {
										'step 0';
										player.judge(function (card) {
											if (card.suit == 'heart') return 2;
											return 1;
										});
										('step 1');
										if (result.judge == 1) {
											trigger.num++;
										} else {
											if (result.judge == 2) {
												player.recover();
											}
										}
									},
								},
								2: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									filter(event, player) {
										return player.storage.qqwz割据 >= 1 && event.card.name != 'wanjian';
									},
									content() {
										player.storage.qqwz割据 -= 1;
										game.addVideo('storage', player, ['qqwz割据', player.storage.qqwz割据]);
									},
								},
								3: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									content() {
										var lo = player.storage.qqwz割据;
										trigger.num -= lo;
									},
								},
							},
						},
						qqwz圣名: {
							trigger: {
								global: 'damageAfter',
							},
							forced: true,
							_priority: 100,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return event.source != undefined;
							},
							content() {
								if (player != trigger.source) {
									player.draw();
									trigger.source.draw();
								} else {
									player.draw();
								}
							},
							mod: {
								globalTo(from, to, distance) {
									return distance + 2;
								},
							},
						},
						qqwz释罪: {
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							content() {
								'step 0';
								player.chooseTarget(get.prompt('qqwz释罪')).set('ai', function (target) {
									if (get.attitude(_status.event.player, target) > 0) {
										return 1 / Math.sqrt(target.hp + 1);
									}
									return 0;
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.draw(2);
									target.storage.qqwz释罪_1 = player;
									target.addSkill('qqwz释罪_1');
								}
							},
							subSkill: {
								1: {
									intro: {
										content: '下一次受到超过1点的伤害时,防止此伤害,然后$跳过下个回合的摸牌阶段',
									},
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return event.num > 1 && player.storage.qqwz释罪_1;
									},
									_priority: -11,
									content() {
										trigger.cancel();
										player.storage.qqwz释罪_1.skip('phaseDraw');
										player.removeSkill('qqwz释罪_1');
									},
									group: 'qqwz释罪_2',
								},
								2: {
									trigger: {
										global: ['phaseBegin', 'dieAfter'],
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.player == player.storage.qqwz释罪_1;
									},
									content() {
										player.removeSkill('qqwz释罪_1');
									},
								},
							},
						},
						qqwz诵书: {
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								var maxval = 0;
								var hs = player.getCards('h');
								for (let i = 0; i < hs.length; i++) {
									maxval = Math.max(maxval, get.value(hs[i]));
								}
								player
									.chooseTarget(get.prompt('qqwz诵书'), lib.filter.notMe)
									.set('ai', function (target) {
										var player = _status.event.player;
										var maxval = _status.event.maxval;
										var dh = target.countCards('h') - player.countCards('h');
										var att = get.attitude(player, target);
										if (target.hasSkill('qingjian')) return false;
										if (dh <= 0) return 0;
										if (att > 0) return 0.1;
										if (maxval >= 8) return 0;
										if (att == 0) return 0.2;
										if (dh >= 3) return dh;
										if (dh == 2) {
											if (maxval <= 7) return dh;
										}
										if (maxval <= 6) return dh;
										return 0;
									})
									.set('maxval', maxval);
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									var hs = player.getCards('h');
									event.target.gain(hs, player);
									player.$give(hs.length, event.target);
								} else {
									event.finish();
								}
								('step 2');
								var hs = event.target.getCards('h');
								if (!hs.length) {
									event.finish();
									return;
								}
								hs.sort(function (a, b) {
									return get.value(b, player, 'raw') - get.value(a, player, 'raw');
								});
								event.target
									.chooseCard([1, hs.length], '展示至少一张手牌', true)
									.set('ai', function (card) {
										var rand = _status.event.rand;
										var list = _status.event.list;
										if (_status.event.att) {
											if (ui.selected.cards.length >= Math.ceil(list.length / 2)) return 0;
											var value = get.value(card);
											if (_status.event.parent.player.isHealthy()) {
												value += (get.tag(card, 'damage') ? 1.5 : 0) + (get.tag(card, 'draw') ? 2 : 0);
											}
											return value;
										}
										if (ui.selected.cards.length >= Math.floor(list.length / 2)) return 0;
										return list.indexOf(card) % 2 == rand ? 1 : 0;
									})
									.set('rand', Math.random() < 0.6 ? 1 : 0)
									.set('list', hs)
									.set('att', get.attitude(event.target, player) > 0);
								('step 3');
								event.target.showCards(result.cards);
								event.cards1 = result.cards;
								event.cards2 = event.target.getCards('h', function (card) {
									return !event.cards1.includes(card);
								});
								('step 4');
								var choice;
								var num1 = event.cards1.length;
								var num2 = event.cards2.length;
								if (get.attitude(event.target, player) > 0 && num1 >= num2) {
									choice = 0;
								} else if (num1 == num2) {
									choice = Math.random() < 0.45 ? 0 : 1;
								} else if (num1 > num2) {
									if (num1 - num2 == 1) {
										choice = Math.random() < 0.6 ? 0 : 1;
									} else {
										choice = 0;
									}
								} else {
									if (num2 - num1 == 1) {
										choice = Math.random() < 0.6 ? 1 : 0;
									} else {
										choice = 1;
									}
								}
								player
									.chooseControl(function (event, player) {
										return _status.event.choice;
									})
									.set('choiceList', ['获得' + get.translation(event.target) + '展示的牌', '获得' + get.translation(event.target) + '未展示的牌'])
									.set('choice', choice);
								('step 5');
								if (result.index == 0) {
									player.gain(event.cards1, target);
									target.$give(event.cards1, player);
								} else {
									player.gain(event.cards2, target);
									target.$giveAuto(event.cards2, player);
								}
							},
							ai: {
								expose: 0.1,
							},
							group: 'qqwz诵书_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'useCard',
									},
									forced: true,
									filter(event, player) {
										return get.type(event.card) == 'basic';
									},
									content() {
										player.draw();
									},
								},
							},
						},
						qqwz请命: {
							trigger: {
								global: 'phaseBefore',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return player.getFriends().includes(event.player) && event.player.hp < event.player.maxHp;
							},
							content() {
								trigger.player.recover(trigger.player.maxHp - trigger.player.hp);
								trigger.player.draw();
								player.phase('nodelay');
							},
							group: 'qqwz请命_1',
							subSkill: {
								1: {
									trigger: {
										player: 'linkBefore',
									},
									nopop: true,
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.finish();
										trigger.untrigger();
									},
								},
							},
						},
						qqwz无责: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'damageBegin',
							},
							filter(event, player) {
								return player.getFriends().includes(event.player);
							},
							content() {
								trigger.cancel();
								player.damage()._triggered = null;
								player.chooseToDiscard('he');
							},
							group: 'qqwz无责_1',
							subSkill: {
								1: {
									trigger: {
										player: 'loseHpBefore',
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
							},
						},
						qqwz霓凰: {
							trigger: {
								source: 'damageBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								for (const i of game.players) {
									if (i.group == 'qun') {
										trigger.num++;
									}
								}
							},
							mod: {
								globalFrom(from, to, distance) {
									for (const i of game.players) {
										if (i.group == 'qun') {
											distance--;
										}
									}
									return distance;
								},
							},
							group: 'qqwz霓凰_1',
							subSkill: {
								1: {
									trigger: {
										player: 'gainEnd',
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									content() {
										'step 0';
										player.judge();
										('step 1');
										if (result.card.number > player.hp) {
											var opp = result.card.number;
											player.recover(opp);
										} else {
											player.changeHujia(2);
										}
									},
								},
							},
						},
						qqwz贤后: {
							trigger: {
								player: 'compare',
								target: 'compare',
							},
							filter(event, player) {
								return !event.iwhile;
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								if (result.index != 2) {
									if (result.index == 0) {
										game.log(player, '拼点牌点数+5');
										if (player == trigger.player) {
											trigger.num1 += 5;
										} else {
											trigger.num2 += 5;
										}
									}
								}
							},
							group: ['qqwz贤后_2', 'qqwz贤后_1', 'qqwz贤后_3'],
							subSkill: {
								1: {
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player, source) {
										if (!event.source) return false;
										return event.player.hp > event.source.hp;
									},
									content() {
										trigger.num--;
									},
								},
								2: {
									mode: ['identity'],
									trigger: {
										global: 'gameStart',
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									_priority: 70000,
									filter(event, player) {
										return player.identity != 'zhu' && player.identity != 'zhong';
									},
									content() {
										player.identity = 'zhong';
										player.setIdentity('zhong');
										player.identityShown = true;
									},
									ai: {
										threaten: 8.1,
									},
								},
								3: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										global: 'changeHp',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return player != event.player && (get.translation(event.player.name) == 'qqwz汉末龙裔' || get.translation(event.player.name2) == 'qqwz汉末龙裔');
									},
									content() {
										trigger.player.recover();
									},
								},
							},
						},
						qqwz定卦: {
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.countCards('he', { type: 'equip' }) > 0;
							},
							content() {
								'step 0';
								var iu = player.countCards('h');
								event.cards = get.cards(iu);
								player.showCards(event.cards);
								('step 1');
								var gained = [];
								for (const i of event.cards) {
									if (get.type(i, 'trick') == 'trick') {
										gained.push(i);
									}
								}
								player.gain(gained, 'gain2');
							},
							ai: {
								threaten: 1.5,
							},
							group: ['qqwz定卦_2', 'qqwz定卦_1'],
							subSkill: {
								1: {
									trigger: {
										global: 'phaseEnd',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										if (event.player == player) return false;
										return event.player.isAlive();
									},
									content() {
										player.viewHandcards(trigger.player);
									},
								},
								2: {
									trigger: {
										player: 'judge',
									},
									filter(event, player) {
										return player.countCards('he') > 0;
									},
									audio: 'ext:千秋万载/audio:2',
									content() {
										'step 0';
										player
											.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('qqwz定卦_2'), 'he')
											.set('ai', function (card) {
												var trigger = _status.event.getTrigger();
												var player = _status.event.player;
												var judging = _status.event.judging;
												var result = trigger.judge(card) - trigger.judge(judging);
												var attitude = get.attitude(player, trigger.player);
												if (attitude == 0 || result == 0) return 0;
												if (attitude > 0) {
													return result - get.value(card) / 2;
												} else {
													return -result - get.value(card) / 2;
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
											if (trigger.player.judging[0].clone) {
												trigger.player.judging[0].clone.classList.remove('thrownhighlight');
												game.broadcast(function (card) {
													if (card.clone) {
														card.clone.classList.remove('thrownhighlight');
													}
												}, trigger.player.judging[0]);
												game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
											}
											trigger.player.judging[0].discard();
											trigger.player.judging[0] = result.cards[0];
											if (!get.owner(result.cards[0], 'judge')) {
												trigger.position.appendChild(result.cards[0]);
											}
											game.log(trigger.player, '的判定牌改为', result.cards[0]);
										}
									},
									ai: {
										tag: {
											rejudge: 1,
										},
									},
								},
							},
						},
						qqwz诛心: {
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return event.player != player && player.getEnemies().includes(event.player) && ui.cardPile.childElementCount <= player.hp * 1000;
							},
							audio: 'ext:千秋万载/audio:2',
							check(event, player) {
								return get.attitude(player, event.player) < 0 && get.effect(event.player, { name: 'sha' }, player, player) > 0;
							},
							logTarget: 'player',
							content() {
								'step 0';
								'step 3';
								player.discard(player.getCards('h'));
								player.loseMaxHp(2);
								player.recover(3);
								('step 1');
								var list = [];
								for (let i = 0; i < ui.cardPile.childElementCount; i++) {
									if (ui.cardPile.childNodes[i].name == 'sha') {
										list.push(ui.cardPile.childNodes[i]);
										ui.cardPile.childNodes[i].remove();
										i--;
									}
								}
								event.list = list;
								event.num = 0;
								('step 2');
								if (event.list.length && event.num < player.hp * 9) {
									event.num++;
									player.useCard(event.list.shift(), trigger.player);
									event.redo();
								}
								('step 3');
								var cards = get.cards(ui.cardPile.childElementCount + 1);
								if (Array.isArray(cards)) for (const i of cards) {
									ui.cardPile.insertBefore(i, ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
								}
							},
							ai: {
								threaten: 1.5,
							},
							group: ['qqwz诛心_2', 'qqwz诛心_1'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									content() {
										var kj = player.countCards('h');
										trigger.num += kj;
									},
								},
								2: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									content() {
										trigger.num++;
									},
								},
							},
						},
						qqwz风骨: {
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								return event.card && event.card.name == 'wanjian' && player != event.player;
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								player.loseHp();
								player.draw();
							},
							group: ['qqwz风骨_4', 'qqwz风骨_3', 'qqwz风骨_2', 'qqwz风骨_1'],
							subSkill: {
								1: {
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player, source) {
										if (!event.source) return false;
										return !event.nature;
									},
									content() {
										var iu = trigger.num * 2;
										trigger.source.damage(iu);
									},
								},
								2: {
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player, source) {
										if (!event.source) return false;
										return event.nature;
									},
									content() {
										var iu1 = trigger.num;
										trigger.source.damage(iu1);
									},
								},
								3: {
									trigger: {
										player: 'turnOverBefore',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.cancel();
									},
								},
								4: {
									trigger: {
										player: 'linkBefore',
									},
									nopop: true,
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.cancel();
									},
									mod: {
										suit(card, suit) {
											return 'none';
										},
									},
								},
							},
						},
						qqwz仁道: {
							trigger: {
								player: 'dying',
							},
							filter(event, player) {
								return !player.storage.qqwz仁道;
							},
							audio: 'ext:千秋万载/audio:2',
							derivation: ['qqwz鸿刹'],
							forced: true,
							_priority: 100,
							content() {
								'step 0';
								player.storage.qqwz仁道 = true;
								('step 1');
								for (const i of game.players) {
									if (i.group == 'wu') {
										player.recover();
									}
								}
								player.addSkill('qqwz鸿刹');
								player.loseMaxHp();
							},
						},
						qqwz鸿刹: {
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return event.player != player && player.getEnemies().includes(event.player) && event.player.group == 'wu';
							},
							content() {
								trigger.player.discard(trigger.player.getCards('h').randomGet());
							},
							group: ['qqwz鸿刹_2', 'qqwz鸿刹_1'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										if (event.source != 'wu') return false;
										return true;
									},
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
								2: {
									trigger: {
										global: 'damageBegin',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return player.getEnemies().includes(event.player) && event.player.group == 'wu';
									},
									content() {
										tirgger.player.damage();
									},
								},
							},
						},
						qqwz鳞甲: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							content() {
								trigger.num -= 3;
							},
							mod: {
								targetEnabled(card, player, target, now) {
									if (card.name == 'juedou' || card.name == 'wanqjian' || card.name == 'nanman') return false;
								},
							},
							group: 'qqwz鳞甲_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										player.recover(5);
									},
								},
							},
						},
						qqwz荒兽: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								return event.nature;
							},
							forced: true,
							content() {
								player.loseHp(5);
							},
							group: ['qqwz荒兽_5', 'qqwz荒兽_4', 'qqwz荒兽_3', 'qqwz荒兽_2', 'qqwz荒兽_1'],
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										global: 'useCard',
									},
									filter(event, player) {
										return event.card && event.card.name == 'nanman' && player != event.player;
									},
									forced: true,
									content() {
										player.recover();
									},
								},
								2: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										global: 'useCard',
									},
									filter(event, player) {
										return event.card && event.card.name == 'wanjian' && player != event.player;
									},
									forced: true,
									content() {
										player.draw();
									},
								},
								3: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'useCard',
									},
									forced: true,
									filter(event, player) {
										return get.type(event.card) == 'trick' && event.cards[0] && event.cards[0] == event.card;
									},
									content() {
										player.loseHp();
									},
									ai: {
										threaten: 1.4,
										noautowuxie: true,
									},
								},
								4: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return player.hp < player.maxHp;
									},
									content() {
										trigger.num += player.maxHp - player.hp;
									},
								},
								5: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'phaseDrawBegin',
									},
									forced: true,
									content() {
										trigger.num += player.maxHp - player.hp;
									},
								},
							},
						},
						qqwz陵营: {
							trigger: {
								target: 'useCardToBegin',
							},
							filter(event, player) {
								if (get.color(event.card) != 'red') return false;
								return true;
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								player.recover();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.color(card) == 'red' && target.isDamaged()) return [1, 1];
									},
								},
							},
							group: ['qqwz陵营_1', 'qqwz陵营_2'],
							subSkill: {
								1: {
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return Infinity;
										},
										targetEnabled(card, player, target) {
											if (get.type(card) == 'delay') {
												return false;
											}
										},
									},
								},
								2: {
									trigger: {
										target: 'useCardToBegin',
									},
									filter(event, player) {
										if (get.color(event.card) != 'black') return false;
										return true;
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									content() {
										player.changeHujia();
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (get.color(card) == 'black' && target.isDamaged()) return [1, 1];
											},
										},
									},
								},
							},
						},
						qqwz无绝: {
							trigger: {
								player: 'loseEnd',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								if (player.countCards('h')) return false;
								if (Array.isArray(event.cards)) for (const i of event.cards) {
									if (i.original == 'h') return true;
								}
								return false;
							},
							content() {
								var num = player.maxHp;
								if (num > 0) {
									player.draw(num);
								}
							},
							ai: {
								threaten: 0.8,
								effect: {
									target(card) {
										if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
									},
								},
								noh: true,
								skillTagFilter(player, tag) {
									if (tag == 'noh') {
										if (player.countCards('h') != 1) return false;
									}
								},
							},
							group: 'qqwz无绝_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'loseEnd',
									},
									forced: true,
									filter(event, player) {
										if (Array.isArray(event.cards)) for (const i of event.cards) {
											if (i.original == 'e') return true;
										}
										return false;
									},
									content() {
										'step 0';
										var card = get.cardPile(function (card) {
											return get.type(card) == 'equip';
										});
										event.card = card;
										('step 1');
										if (event.card) {
											player.equip(event.card);
										}
									},
									ai: {
										noe: true,
										effect: {
											target(card, player, target, current) {
												if (get.type(card) == 'equip') return [1, 3];
											},
										},
									},
								},
							},
						},
						qqwz求策: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								return get.type(event.card) == 'trick';
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								var list = ['wuxie'];
								player.gain(game.createCard(list.randomGet()));
								player.$draw();
							},
						},
						qqwz镇江: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								var ko = game.countGroup();
								player.turnOver();
								player.recover(ko);
							},
							group: 'qqwz镇江_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										global: 'phaseEnd',
									},
									forced: true,
									filter(event, player) {
										player.getFriends().includes(event.player);
									},
									content() {
										var ko = game.countGroup();
										trigger.player.draw(ko);
									},
								},
							},
						},
						qqwz失远: {
							derivation: ['qqwz固本', 'qqwz济国'],
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							content() {
								player.removeSkill('qqwz固本');
								player.addSkill('qqwz济国');
							},
							group: 'qqwz失远_1',
							subSkill: {
								1: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										player.removeSkill('qqwz济国');
										player.addSkill('qqwz固本');
									},
								},
							},
						},
						qqwz固本: {
							trigger: {
								player: ['turnOverEnd', 'loseHpEnd'],
							},
							audio: 'ext:千秋万载/audio:2',
							content() {
								player.chooseToDiscard(true, 'he');
								player.recover(player.MaxHp);
							},
							group: 'qqwz固本_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'loseEnd',
									},
									forced: true,
									filter(event, player) {
										return _status.currentPhase != player;
									},
									content() {
										player.draw();
									},
								},
							},
						},
						qqwz济国: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardBegin',
							},
							forced: true,
							filter(event, player) {
								var type = get.type(event.card, 'equip');
								return event.player != player && type == 'equip';
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num++;
								},
							},
							group: 'qqwz济国_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									content() {
										'step 0';
										event.list = player.getFriends().sortBySeat();
										('step 1');
										if (event.list.length) {
											var target = event.list.shift();
											player.line(target, 'green');
											target.recover(trigger.num);
											event.redo();
										}
									},
								},
							},
						},
						qqwz锐樾: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'equip';
							},
							content() {
								'step 0';
								var card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								event.card = card;
								('step 1');
								if (event.card) {
									player.equip(event.card);
								}
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return (num += player.countCards('e'));
								},
								maxHandcard(player, num) {
									if (player.hp < player.maxHp) return (num += player.countCards('e'));
								},
							},
							group: 'qqwz锐樾_1',
							subSkill: {
								1: {
									trigger: {
										player: 'phaseDrawBegin',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.num += player.countCards('e');
									},
								},
							},
						},
						qqwz仇绝: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'dieAfter',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && player.getEnemies().includes(event.player);
							},
							content() {
								player.addSkill(trigger.player.skills);
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
									audio: 'ext:千秋万载/audio:2',
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
							audio: 'ext:千秋万载/audio:2',
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
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									content() {
										trigger.num++;
									},
								},
								2: {
									audio: 'ext:千秋万载/audio:2',
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
									audio: 'ext:千秋万载/audio:2',
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
						qqwz锋戮: {
							trigger: {
								player: 'phaseEnd',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								'step 0';
								event.list = player.getEnemies().sortBySeat();
								('step 1');
								if (event.list.length) {
									var target = event.list.shift();
									player.line(target, 'green');
									target.link();
									event.redo();
								}
							},
							ai: {
								threaten: 1.2,
							},
							group: 'qqwz锋戮_1',
							subSkill: {
								1: {
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										return player.getEnemies().includes(event.player) && event.player.isLinked();
									},
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.player.loseHp(2);
									},
								},
							},
						},
						qqwz索舟: {
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.isLinked();
							},
							audio: 'ext:千秋万载/audio:2',
							content() {
								player.recover();
								player.draw();
							},
							group: ['qqwz索舟_1', 'qqwz索舟_2'],
							subSkill: {
								1: {
									trigger: {
										player: 'damageBegin',
									},
									filter(event, player) {
										return event.nature && player.isLinked();
									},
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.num++;
									},
								},
								2: {
									trigger: {
										player: 'damageBegin',
									},
									filter(event, player) {
										return !event.nature && player.isLinked();
									},
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
							},
						},
						qqwz知隐: {
							trigger: {
								player: 'phaseEnd',
							},
							audio: 'ext:千秋万载/audio:2',
							content() {
								player.turnOver();
								player.recover(player.MaxHp);
								player.draw(3);
								player.addTempSkill('qianxing', { player: 'phaseBegin' });
							},
							group: 'qqwz知隐_1',
							subSkill: {
								1: {
									trigger: {
										player: 'turnOverBefore',
									},
									_priority: 20,
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										return player.isTurnedOver();
									},
									content() {
										trigger.cancel();
										game.log(player, '取消了翻面');
									},
								},
							},
						},
						qqwz水镜: {
							trigger: {
								player: 'damageBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							grouo: ['qqwz水镜_2', 'qqwz水镜_1'],
							subSkill: {
								1: {
									trigger: {
										player: 'linkBegin',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										player.gainMaxHp();
										var list = get.typeCard('basic');
										if (list.length) {
											player.gain(game.createCard(list.randomGet()), 'gain2');
										}
									},
								},
								2: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'useCard',
									},
									forced: true,
									filter(event, player) {
										return get.type(event.card) == 'basic' && event.cards[0] && event.cards[0] == event.card;
									},
									content() {
										var list = get.typeCard('trick');
										if (list.length) {
											player.gain(game.createCard(list.randomGet()), 'gain2');
										}
									},
									mod: {
										suit(card, suit) {
											return 'none';
										},
									},
									ai: {
										threaten: 1.4,
									},
								},
							},
						},
						qqwz明杰: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.getFriends().includes(event.player);
							},
							content() {
								'step 0';
								if (player.isUnderControl()) {
									game.modeSwapPlayer(player);
								}
								var num = Math.min(5, game.countPlayer());
								var cards = get.cards(num);
								event.cards = cards;
								var switchToAuto = function () {
									_status.imchoosing = false;
									if (event.dialog) event.dialog.close();
									if (event.control) event.control.close();
									const target = trigger.player;
									const att = get.attitude(player, target);
									const top = [], bottom = cards;
									for (const i of target.getCards('j')) {
										const judge = get.judge(i);
										bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
										if (bottom.length) {
											top.push(bottom.shift());
										}
									}
									bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
									while (bottom.length) {
										top.push(bottom.shift());
									}
									top.reverse();
									for (let i = 0; i < top.length; i++) {
										ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
									}
									for (let i = 0; i < bottom.length; i++) {
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
												for (let i = 0; i < event.top.length; i++) {
													event._result.top.push(event.top[i].link);
												}
												for (let i = 0; i < event.bottom.length; i++) {
													event._result.bottom.push(event.bottom[i].link);
												}
											} else {
												var i;
												for (let i = 0; i < event.top.length; i++) {
													ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
												}
												for (let i = 0; i < event.bottom.length; i++) {
													ui.cardPile.appendChild(event.bottom[i].link);
												}
												for (let i = 0; i < event.dialog.buttons.length; i++) {
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
									for (let i = 0; i < event.dialog.buttons.length; i++) {
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
										for (let i = 0; i < _status.event.dialog.buttons.length; i++) {
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
									for (let i = 0; i < top.length; i++) {
										ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
									}
									for (let i = 0; i < bottom.length; i++) {
										ui.cardPile.appendChild(bottom[i]);
									}
									if (Array.isArray(event.cards)) for (const i of event.cards) {
										if (!top.includes(i) && !bottom.includes(i)) {
											ui.cardPile.appendChild(i);
										}
									}
									player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
									game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
								}
							},
							ai: {
								threaten: 1.2,
							},
							group: 'qqwz明杰_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										global: 'dying',
									},
									forced: true,
									_priority: 100,
									filter(event, player) {
										if (player.storage.qqwz明杰_1) return false;
										return player.getFriends().includes(event.player);
									},
									content() {
										'step 0';
										trigger.untrigger();
										trigger.finish();
										('step 1');
										player.storage.qqwz明杰_1 = true;
										trigger.player.init('三分天下');
										player.addSkill('qqwz明杰_2');
										player.awakenSkill('qqwz明杰_1');
									},
								},
								2: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										global: 'dying',
									},
									forced: true,
									_priority: 100,
									filter(event, player) {
										return player.getFriends().includes(event.player);
									},
									content() {
										'step 0';
										trigger.untrigger();
										trigger.finish();
										('step 1');
										trigger.player.init('飞鸾翔凤');
										player.removeSkill('qqwz明杰_2');
									},
								},
							},
						},
						qqwz风袭: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && player.getEnemies().includes(event.player) && !event.getParent('qqwz风袭', true);
							},
							content() {
								trigger.player.chooseToDiscard(true, 'he');
								if (trigger.player.countCards('h') < 1) {
									trigger.player.loseHp();
								}
							},
						},
						qqwz岢将: {
							trigger: {
								player: 'phaseEnd',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return player.countCards('h') != player.hp;
							},
							content() {
								'step 0';
								if (player.countCards('h') > player.hp) {
									var ki = player.countCards('h') - player.hp;
									player.recover(ki);
								}
								('step 1');
								if (player.countCards('h') < player.hp) {
									for (const i of game.players) {
										if (get.attitude(i, player) <= 0) {
											i.damage();
										}
									}
								}
							},
						},
						qqwz诛敌: {
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.getEnemies().includes(event.player);
							},
							content() {
								'step 0';
								if (trigger.player.isTurnedOver()) {
									trigger.player.damage()._triggered = null;
								}
								('step 1');
								trigger.player.turnOver();
							},
							group: 'qqwz诛敌_1',
							subSkill: {
								1: {
									trigger: {
										global: 'useCardAfter',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									filter(event, player) {
										var type = get.type(event.card, 'equip');
										return event.player != player && type == 'equip' && player.getEnemies().includes(event.player);
									},
									content() {
										'step 0';
										if (trigger.player.isTurnedOver()) {
											trigger.player.damage()._triggered = null;
										}
										('step 1');
										trigger.player.turnOver();
									},
								},
							},
						},
						qqwz暗予: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'recoverBegin',
							},
							usable: 1,
							filter(event, player) {
								return event.player != player && player.getEnemies().includes(event.player);
							},
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							group: 'qqwz暗予_1',
							subSkill: {
								1: {
									trigger: {
										global: ['respond', 'useCard'],
									},
									forced: true,
									usable: 2,
									filter(event, player) {
										if (get.color(event.card) != 'black') return false;
										return event.player != player && player.getEnemies().includes(event.player);
									},
									content() {
										trigger.player.loseHp();
									},
								},
							},
						},
						qqwz君佑: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'changeHp',
							},
							forced: true,
							_priority: 6,
							filter(event, player) {
								return player.hp == 1;
							},
							content() {
								player.init(player.name, 'qqwz策马扬鞭');
								player.removeSkill('qqwz君佑');
							},
						},
						qqwz德论: {
							trigger: {
								player: 'turnOverBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							content() {
								trigger.cancel();
							},
							mod: {
								suit(card, suit) {
									return 'none';
								},
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay' && player != target) {
										return false;
									}
								},
							},
						},
						qqwz撰古: {
							trigger: {
								player: 'useCardAfter',
								target: 'useCardToBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								if (event.name != 'useCard' && event.player == event.target) return false;
								return get.color(event.card) == 'black';
							},
							init(player) {
								player.storage.qqwz撰古 = [];
							},
							intro: {
								content: 'cards',
							},
							forced: true,
							content() {
								var card = get.cards()[0];
								ui.special.appendChild(card);
								player.$draw(card);
								player.storage.qqwz撰古.push(card);
								player.markSkill('qqwz撰古');
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.qqwz撰古.length;
								},
							},
							group: 'qqwz撰古_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									content() {
										var jk1 = Math.floor(player.storage.qqwz撰古.length / 3);
										trigger.num += jk1;
									},
								},
							},
						},
						qqwz博通: {
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							audio: 'ext:千秋万载/audio:2',
							filter(event, player) {
								return player.storage.qqwz撰古 && player.storage.qqwz撰古.length && event.num > 0;
							},
							content() {
								'step 0';
								var four = false;
								var nofour = !player.hasFriend();
								if (player.storage.qqwz撰古.length > 4) {
									var suits = ['club', 'spade', 'heart', 'diamond'];
									var list = player.getCards('h').concat(player.storage.qqwz撰古);
									for (let i = 0; i < list.length; i++) {
										suits.remove(list[i].suit);
										if (suits.length == 0) {
											four = true;
											break;
										}
									}
								}
								var suits2 = [];
								if (four) {
									suits2 = ['club', 'spade', 'heart', 'diamond'];
									for (let i = 0; i < player.storage.qqwz撰古.length; i++) {
										suits2.remove(player.storage.qqwz撰古[i].suit);
									}
								}
								player
									.chooseCard('选择任意张手牌与<古>交换', [1, Math.min(player.countCards('h'), player.storage.qqwz撰古.length)])
									.set('ai', function (card) {
										var val = get.value(card);
										if (_status.event.four && !_status.event.nofour) {
											var suits = _status.event.suits2.slice(0);
											if (Array.isArray(ui.selected.cards)) for (const i of ui.selected.cards) {
												suits.remove(i.suit);
											}
											if (suits.includes(card.suit)) {
												if (val < 0) return 10;
												return 1;
											} else {
												return 0;
											}
										} else {
											if (val < 0) return 10;
											if (_status.event.player.skipList.includes('phaseUse')) {
												return val;
											}
											return 10 - val;
										}
									})
									.set('four', four)
									.set('suits2', suits2)
									.set('nofour', nofour);
								event.four = four;
								event.nofour = nofour;
								('step 1');
								if (result.bool) {
									player.lose(result.cards, ui.special)._triggered = null;
									player.storage.qqwz撰古 = player.storage.qqwz撰古.concat(result.cards);
									event.num = result.cards.length;
								} else {
									event.finish();
								}
								('step 2');
								var suits2 = {
									heart: 0,
									diamond: 0,
									spade: 0,
									club: 0,
								};
								for (let i = 0; i < player.storage.qqwz撰古.length; i++) {
									suits2[player.storage.qqwz撰古[i].suit]++;
								}
								player
									.chooseCardButton(player.storage.qqwz撰古, '选择' + event.num + '张牌作为手牌', event.num, true)
									.set('ai', function (button) {
										var val = get.value(button.link);
										if (_status.event.four || _status.event.nofour) {
											var suits = get.copy(_status.event.suits2);
											for (let i = 0; i < ui.selected.buttons.length; i++) {
												suits[ui.selected.buttons[i].link.suit]--;
											}
											var num = suits[button.link.suit];
											if (_status.event.nofour) {
												for (var i in suits) {
													if (suits[i] == 0) return val;
												}
												if (num != 2) {
													if (val <= 0) return 0.01;
													return val;
												} else {
													return 0;
												}
											} else {
												if (num > 1) {
													if (val <= 0) return 0.01;
													return val;
												} else {
													return 0;
												}
											}
										} else {
											if (val < 0) return -10;
											if (_status.event.player.skipList.includes('phaseUse')) {
												return -val;
											}
											return val;
										}
									})
									.set('four', event.four)
									.set('suits2', suits2)
									.set('nofour', event.nofour);
								if (player == game.me && !event.isMine()) {
								}
								('step 3');
								player.gain(result.links)._triggered = null;
								for (const i of result.links) {
									player.storage.qqwz撰古.remove(i);
								}
								if (player == game.me && _status.auto) {
								}
								('step 4');
								suits2 = ['club', 'spade', 'heart', 'diamond'];
								for (let i = 0; i < player.storage.qqwz撰古.length; i++) {
									suits2.remove(player.storage.qqwz撰古[i].suit);
								}
								if (suits2.length) {
									event.finish();
								}
								('step 5');
								event.cards = player.storage.qqwz撰古.slice(0);
								player.storage.qqwz撰古.length = 0;
								player.unmarkSkill('qqwz撰古');
								('step 6');
								if (event.cards.length > 1) {
									player.chooseCardButton('将所有<古>交给任意名其他角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
										if (ui.selected.buttons.length == 0) return 1;
										return 0;
									});
								} else if (event.cards.length == 1) {
									event._result = { links: event.cards.slice(0), bool: true };
								} else {
									event.finish();
								}
								('step 7');
								if (result.bool) {
									for (const i of result.links) {
										event.cards.remove(i);
									}
									event.togive = result.links.slice(0);
									player
										.chooseTarget('将' + get.translation(result.links) + '交给一名其他角色', true, function (card, player, target) {
											return target != player;
										})
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
								} else {
									event.finish();
								}
								('step 8');
								if (result.targets.length) {
									result.targets[0].gain(event.togive, 'draw');
									player.line(result.targets[0], 'green');
									game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张', '#g<古>');
									event.goto(6);
								}
							},
							ai: {
								combo: 'qqwz撰古',
							},
						},
						qqwz肱骨: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'drawAfter',
							},
							forced: true,
							filter(event, player) {
								return event.result.length > 1;
							},
							usable: 1,
							content() {
								'step 0';
								player.showCards(get.translation(player) + '摸到的牌', trigger.result);
								if (!event.isMine()) {
								}
								('step 1');
								var list = [];
								for (let i = 0; i < trigger.result.length; i++) {
									var suit = trigger.result[0].suit;
									var type = get.type(trigger.result[0]);
									if (trigger.result[i] == trigger.result[0]) continue;
									if (get.type(trigger.result[i]) == type || trigger.result[i].suit == suit) {
										list.push(trigger.result[i]);
									}
								}
								if (list.length) {
									player.draw(game.countGroup());
								} else {
									event.finish();
								}
							},
							ai: {
								threaten: 1.5,
							},
							group: 'qqwz肱骨_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageEnd',
									},
									content() {
										'step 0';
										player.showHandcards();
										('step 1');
										if (!trigger.source) return;
										var cards = player.getCards('h');
										for (let i = 1; i < cards.length; i++) {
											if (get.color(i) != get.color(cards[0])) return;
										}
										trigger.num -= game.countGroup();
									},
									ai: {
										maixie_defend: true,
										threaten: 0.9,
									},
								},
							},
						},
						qqwz苦读: {
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return game.roundNumber % 4 == 0;
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							derivation: ['qqwz贤辞'],
							content() {
								player.loseMaxHp(2);
								player.addSkill('qqwz苦读');
							},
						},
						qqwz贤辞: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							content() {
								player.useCard(trigger.card, trigger.targets, false)._triggered = null;
								player.loseHp();
							},
							group: 'qqwz贤辞_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									content() {
										trigger.num++;
									},
								},
							},
						},
						qqwz凰龙: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.source != 'wei') return false;
								return true;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							group: 'qqwz凰龙_1',
							subSkill: {
								1: {
									mod: {
										maxHandcard(player, num) {
											if (player.hp < player.maxHp) return (num += player.countCards('e') * 2);
										},
									},
									trigger: {
										player: 'phaseDrawBegin',
									},
									forced: true,
									audio: 'ext:千秋万载/audio:2',
									content() {
										trigger.num += player.countCards('e');
									},
								},
							},
						},
						qqwz激溯: {
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
								globalFrom(from, to, distance) {
									if (_status.currentPhase == from) {
										return distance - from.countUsed();
									}
								},
							},
							trigger: {
								player: 'shaBegin',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && get.distance(player, event.target) <= 1;//QQQ
							},
							content() {
								trigger.target.damage();
								trigger.directHit = true;
							},
						},
						qqwz祸福: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								if (!event.card || (event.card && event.card.suit == undefined)) return false;
								return player.hp > 1;
							},
							check(event, player) {
								return 1;
							},
							_priority: -8,
							forced: true,
							content() {
								'step 0';
								player.judge(ui.special, function (card) {
									if (card.suit == trigger.card.suit) return 2;
									return 1;
								});
								('step 1');
								if (result.card.suit == trigger.card.suit) {
									player.draw();
								}
							},
							group: 'qqwz祸福_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										player: 'damageBefore',
									},
									forced: true,
									filter(event, player) {
										return get.type(event.card, 'trick') == 'trick';
									},
									content() {
										player.chooseToDiscard(true, 'he');
									},
								},
							},
						},
						qqwz伏杀: {
							group: 'qqwz伏杀_1',
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								global: 'recoverBefore',
							},
							filter(event, player) {
								return event.player != player && player.getEnemies().includes(event.player) && event.player.sex == 'male';
							},
							_priority: 10,
							forced: true,
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										global: 'phaseDrawBegin',
									},
									filter(event, player) {
										return event.player != player && player.getEnemies().includes(event.player) && event.player.sex == 'male';
									},
									_priority: 10,
									forced: true,
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
							},
						},
						qqwz卿月: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								return get.color(event.card) == 'red' && event.cards[0] && event.cards[0] == event.card;
							},
							content() {
								player.useCard(trigger.card, trigger.targets, false)._triggered = null;
							},
							group: 'qqwz卿月_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										target: 'useCardToBegin',
									},
									filter(event, player) {
										if (get.color(event.card) != 'red') return false;
										if (!event.player) return false;
										if (event.player == player) return false;
										return player.hp > 0;
									},
									forced: true,
									content() {
										player.draw();
									},
									ai: {
										effect: {
											target(card, player, target) {
												if (get.color(card) == 'red' && target.countCards('h') > 0) {
													return [1, 0.5];
												}
											},
										},
									},
								},
							},
						},
						qqwz斥公: {
							trigger: {
								global: 'phaseEnd',
							},
							audio: 'ext:千秋万载/audio:2',
							forced: true,
							filter(event, player) {
								return player.getFriends().includes(event.player) && event.player.hp != player.hp;
							},
							content() {
								trigger.player.draw(2);
								trigger.player.recover();
								player.draw(2);
								player.recover();
							},
							group: 'qqwz斥公_1',
							subSkill: {
								1: {
									trigger: {
										global: 'phaseEnd',
									},
									audio: 'ext:千秋万载/audio:2',
									forced: true,
									filter(event, player) {
										return player.getFriends().includes(event.player) && event.player.countCards('h') > 0;
									},
									content() {
										trigger.player.draw(2);
										trigger.player.recover();
										player.draw(2);
										player.recover();
									},
								},
							},
						},
						qqwz微审: {
							audio: 'ext:千秋万载/audio:2',
							trigger: {
								target: 'shaBegin',
							},
							filter(event, player) {
								return event.player != player;
							},
							content() {
								player.loseHp();
								trigger.player.damage()._triggered = null;
							},
							group: 'qqwz微审_1',
							subSkill: {
								1: {
									audio: 'ext:千秋万载/audio:2',
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									filter(event, player) {
										return player.countCards('h') == 0 && player.hp < player.maxHp;
									},
									content() {
										player.phase('nodelay');
									},
								},
							},
						},
					},
					translate: {
						qqwz斩将攫石: '斩将攫石',
						qqwz幻惑众心: '幻惑众心',
						qqwz专擅朝政: '专擅朝政',
						qqwz经达权变: '经达权变',
						qqwz汉末龙裔: '汉末龙裔',
						qqwz身陷囹圄: '身陷囹圄',
						qqwz月下琵琶: '月下琵琶',
						qqwz妙笔为龙: '妙笔为龙',
						qqwz登极至尊: '登极至尊',
						qqwz真龙之意: '真龙之意',
						qqwz披坚持锐: '披坚持锐',
						qqwz驭魂千机: '驭魂千机',
						qqwz不鏖遗民: '不鏖遗民',
						qqwz陷阵克敌: '陷阵克敌',
						qqwz坐也思君: '坐也思君',
						qqwz一战而就: '一战而就',
						qqwz孤注一掷: '孤注一掷',
						qqwz烈火焚城: '烈火焚城',
						qqwz监军谋国: '监军谋国',
						qqwz眉颦笑浅: '眉颦笑浅',
						qqwz独饮醉卧: '独饮醉卧',
						qqwz祸乱朝纲: '祸乱朝纲',
						qqwz夜袭许昌: '夜袭许昌',
						qqwz师表海内: '师表海内',
						qqwz刚直谏上: '刚直谏上',
						qqwz淯水香魂: '淯水香魂',
						qqwz善战无前: '善战无前',
						qqwz威震塞外: '威震塞外',
						qqwz吴王光耀: '吴王光耀',
						qqwz披星踏浪: '披星踏浪',
						qqwz望君早归: '望君早归',
						qqwz魅影剑舞: '魅影剑舞',
						qqwz矫情之花: '矫情之花',
						qqwz豪饮鲸吞: '豪饮鲸吞',
						qqwz魂佑江东: '魂佑江东',
						qqwz策马扬鞭: '策马扬鞭',
						qqwz缔造联盟: '缔造联盟',
						qqwz锦运绵长: '锦运绵长',
						qqwz才猷蕴借: '才猷蕴借',
						qqwz杀身成仁: '杀身成仁',
						qqwz神行太保: '神行太保',
						qqwz刹那芳华: '刹那芳华',
						qqwz溺酒残戮: '溺酒残戮',
						qqwz旋战回击: '旋战回击',
						qqwz缘后雅志: '缘后雅志',
						qqwz醉酒提矛: '醉酒提矛',
						qqwz旋击敌寇: '旋击敌寇',
						qqwz伏路断道: '伏路断道',
						qqwz倚虎弄权: '倚虎弄权',
						qqwz狂直之士: '狂直之士',
						qqwz傲世轻物: '傲世轻物',
						qqwz安国将军: '安国将军',
						qqwz临阵献策: '临阵献策',
						qqwz宴诛权臣: '宴诛权臣',
						qqwz饕餮盛宴: '饕餮盛宴',
						qqwz溯江激战: '溯江激战',
						qqwz折冲将军: '折冲将军',
						qqwz英姿雄发: '英姿雄发',
						qqwz烈焰燃天: '烈焰燃天',
						qqwz思君两欢: '思君两欢',
						qqwz同气连枝: '同气连枝',
						qqwz盖世之才: '盖世之才',
						qqwz惊鸿绝艳: '惊鸿绝艳',
						qqwz战天斗地: '战天斗地',
						qqwz洞口之战: '洞口之战',
						qqwz超然卓绝: '超然卓绝',
						qqwz忻忻得意: '忻忻得意',
						qqwz蓝田生玉: '蓝田生玉',
						qqwz随能所任: '随能所任',
						qqwz破天焚舰: '破天焚舰',
						qqwz雍容雅步: '雍容雅步',
						qqwz杵枪摧敌: '杵枪摧敌',
						qqwz大贤良师: '大贤良师',
						qqwz蹯踞西疆: '蹯踞西疆',
						qqwz从容啸咤: '从容啸咤',
						qqwz英风劲气: '英风劲气',
						qqwz游历吴中: '游历吴中',
						qqwz心术不正: '心术不正',
						qqwz狡黠颖慧: '狡黠颖慧',
						qqwz曲辞谄媚: '曲辞谄媚',
						qqwz仙山游医: '仙山游医',
						qqwz箭击曹营: '箭击曹营',
						qqwz宽释请命: '宽释请命',
						qqwz凰梦汉回: '凰梦汉回',
						qqwz为夫弑敌: '为夫弑敌',
						qqwz悍然嗜血: '悍然嗜血',
						qqwz挥剑驭火: '挥剑驭火',
						qqwz出镇江夏: '出镇江夏',
						qqwz林历扬名: '林历扬名',
						qqwz艳绝无双: '艳绝无双',
						qqwz如损如篪: '如损如篪',
						qqwz山林隐士: '山林隐士',
						qqwz诗音共赏: '诗音共赏',
						qqwz摆宴欲诛: '摆宴欲诛',
						qqwz_魔将: '魔将',
						qqwz_魔将_info: '你受到伤害后,你可以令其封印技能1回合,然后你回复1点体力,让其失去1点体力上限,你造成伤害时20%令其直接死亡',
						qqwz_魔将2: '魔将',
						qqwz_魔将2_info: '当一名其他角色回复体力时,50%概率终止回复结算,然后你回复一点体力',
						qqwz_惑心: '惑心',
						qqwz_惑心_info: '你的回合开始时,你随机获得"机关","基本","锦囊","食物"牌各一张,名其他角色的准备阶段和回合结束,若你已受伤,你可以与该角色拼点,若你赢,该角色受到1点体力流失伤害',
						qqwz_惑心2: '惑心',
						qqwz_惑心2_info: '',
						qqwz_雷鸣: '雷鸣',
						qqwz_雷鸣_info: '每当你使用或打出一张【闪】,可令任意一名角色进行一次判定,若结果为红色,其受到2点雷电伤害,然后你回复2点体力;若结果为黑色,其受到4点雷电伤害且你摸3张牌',
						qqwz_天道: '天道',
						qqwz_天道_info: '任意一名角色的判定生效前,你可以打出一张牌替换之',
						qqwz_虎狼: '虎狼',
						qqwz_虎狼_info: '摸牌阶段,你可以摸3张牌然后改为进行一次判定:你获得此判定牌,且于此回合的出牌阶段,你可以将任意一张与此判定牌不同颜色的手牌当【决斗】使用.你使用决斗可以多结算2次,你使用决斗造成的伤害+2',
						qqwz_虎狼2: '虎狼',
						qqwz_虎狼2_info: '',
						qqwz_虎狼3: '虎狼',
						qqwz_虎狼3_info: '你使用的杀均结算两次,你使用杀无次数限制',
						qqwz_虎狼4: '虎狼',
						qqwz_虎狼4_info: '锁定技,你的【杀】额外造成1点伤害',
						qqwz_箭阵: '箭阵',
						qqwz_箭阵_info: '出牌阶段,你可以将任意两张花色不同的手牌当【万箭齐发】使用.你使用或打出的万箭齐发造成的伤害+1',
						qqwz_箭阵2: '箭阵',
						qqwz_箭阵2_info: '你使用杀伤害加1',
						qqwz_名门: '名门',
						qqwz_名门_info: '你始终跳过弃牌阶段并可以摸2张牌回复2点体力,你不能被乐不思蜀选做目标',
						qqwz_酗酒: '酗酒',
						qqwz_酗酒_info: '你可将你的任意一张♠️手牌当【酒】使用.摸牌阶段你多摸3张牌',
						qqwz_酗酒2: '酗酒',
						qqwz_酗酒2_info: '摸牌阶段,你可以额外摸一张牌',
						qqwz_色欲: '色欲',
						qqwz_色欲_info: '当你对女性角色造成伤害时,其失去1点体力和一点体力上限并翻面,然后你摸2张牌',
						qqwz_掌权: '掌权',
						qqwz_掌权_info: '每当一名其他角色回合结束后,若你已受伤你回复1点体力失去1点体力上限',
						qqwz_暴凌: '暴凌',
						qqwz_暴凌_info: '你造成的伤害+x(x=你当前的体力)',
						qqwz_绝命: '绝命',
						qqwz_绝命_info: '在你的回合,除你以外,只有处于濒死状态的角色才能使用【桃】.回合结束阶段,你亮出牌堆顶10张牌获得其中的黑色牌',
						qqwz_绝命2: '绝命',
						qqwz_绝命2_info: '',
						qqwz_危局: '危局',
						qqwz_危局_info: '出牌阶段,可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】,无法如此做者失去2点体力.每回合1次,你使用锦囊牌多结算一次效果',
						qqwz_暗幕: '暗幕',
						qqwz_暗幕_info: '当一名其他角色回复体力时,取消结算,延迟类和黑色锦囊无法对你产生效果',
						qqwz_危局2: '危局',
						qqwz_危局2_info: '你使用的基本牌均结算两次<br>75%概率防止你流失体力或受到伤害',
						qqwz_绝命3: '绝命',
						qqwz_绝命3_info: '',
						qqwz_暗幕2: '暗幕',
						qqwz_暗幕2_info: '锁定技,你不能成为延时类锦囊的目标',
						qqwz_万化: '万化',
						qqwz_万化_info: '所有人都展示武将牌后,你随机获得5张未加入游戏的武将牌,选一张置于你面前并声明该武将的一项技能,你拥有该技能且同时将性别和势力属性变成与该武将相同知道该化身被替换.在你的每个准备阶段和结束后,你可以替换化身牌,你须为新的化身重新声明一项技能(你不可声明锁定技、觉醒技或主公技)',
						qqwz_万化2: '万化',
						qqwz_万化2_info: '',
						qqwz_万化3: '万化',
						qqwz_万化3_info: '',
						qqwz_归魂: '归魂',
						qqwz_归魂_info: '你体力值每次发生变化,可获得2张新化身牌',
						qqwz_仙道: '仙道',
						qqwz_仙道_info: '锁定技,你在回合结束后随机获得一个势力角色的所有技能,你的红色牌可以当桃使用',
						qqwz_仙道2: '仙道',
						qqwz_仙道2_info: '你可以将一张红色牌当[桃]使用',
						qqwz_离歌: '离歌',
						qqwz_离歌_info: '一名角色每受到伤害,你可以摸一张牌,然后弃一张牌并令其进行一次判定,判定结果为:♥️该角色回复2点体力;♦️︎该角色摸3张牌;♣️伤害来源弃5张牌;♠️伤害来源受到2点体力流失伤害',
						qqwz_月琴: '月琴',
						qqwz_月琴_info: '当你造成1次伤害,你可以令其进行一次判定,判定结果为:♥️该角色翻面;♦️︎该角色流失1点体力;♣️你增加2点体力上限;♠️你回复2点体力',
						qqwz_长恨: '长恨',
						qqwz_长恨_info: '锁定技,击杀你的角色失去当前的所有技能直到游戏结束然后其死亡',
						qqwz_谋诛: '谋诛',
						qqwz_谋诛_info: '出牌阶段你可以多使用2张杀,当你使用【杀】指定一名角色为目标后,其暂时封印技能,你摸2张牌,当你对其造成伤害时若其没有手牌则此伤害+5.你无视其防具',
						qqwz_谋诛2: '谋诛',
						qqwz_谋诛2_info: '',
						qqwz_谋诛3: '谋诛',
						qqwz_谋诛3_info: '',
						qqwz_皇令: '皇令',
						qqwz_皇令_info: '出牌阶段,你可以将所有手牌(至少一张)交给一名其他角色.若如此做,你令该角色与你指定的另一名有手牌的角色拼点.视为拼点赢的角色对没赢的角色使用一张【杀】然后没赢的角色死亡你摸2张牌.每阶段限一次',
						qqwz_定数: '定数',
						qqwz_定数_info: '当你成为杀的目标时,你摸2张牌此杀对你无效,你受到的伤害最多为1,你始终跳过弃牌阶段,你受到属性伤害时摸2张牌然后此伤害无效',
						qqwz_定数2: '定数',
						qqwz_定数2_info: '你受到的伤害至多为1<br>你始终跳过弃牌阶段',
						qqwz_定数3: '定数',
						qqwz_定数3_info: '你始终跳过弃牌阶段',
						qqwz_定数4: '定数',
						qqwz_定数4_info: '',
						qqwz_谋篡: '谋篡',
						qqwz_谋篡_info: '其他角色的准备阶段,你可以摸2张牌,然后增加1点体力上限,并可以对其使用1张决斗',
						qqwz_妄尊: '妄尊',
						qqwz_妄尊_info: '摸牌阶段,你多摸x张牌,x=你当前的体力上限,你始终跳过弃牌阶段',
						qqwz_妄尊2: '妄尊',
						qqwz_妄尊2_info: '你始终跳过弃牌阶段',
						qqwz_狮枪: '狮枪',
						qqwz_狮枪_info: '当你使用【杀】指定角色后其处于封印状态,你对于体力值不大于你的角色距离为1,你使用杀可以指定1~4个目标,当你造成伤害后可以回复1点体力获得1张基本牌,你使用或打出的杀不能被闪抵消,你使用杀或决斗造成的伤害+3',
						qqwz_狮枪2: '狮枪',
						qqwz_狮枪2_info: '',
						qqwz_狮枪3: '狮枪',
						qqwz_狮枪3_info: '锁定技,你的【杀】额外造成1点伤害',
						qqwz_升龙: '升龙',
						qqwz_升龙_info: '你可以将[杀]当[闪],或[闪]当[杀]使用或打出,出牌阶段,你可以额外打出2张杀',
						qqwz_飞燕: '飞燕',
						qqwz_飞燕_info: '每当你发动<升龙>使用或打出一张手牌时,你可以立即获得对方的1张手牌.每当你打出1张闪你可以使用一张杀',
						qqwz_飞燕2: '飞燕',
						qqwz_飞燕2_info: '',
						qqwz_飞燕3: '飞燕',
						qqwz_飞燕3_info: '',
						qqwz_飞燕4: '飞燕',
						qqwz_飞燕4_info: '每当你使用或打出一张闪,你可以使用一张杀',
						qqwz_排兵: '排兵',
						qqwz_排兵_info: '当你于出牌阶段内使用【杀】或【决斗】指定目标后,你可以选择一项:1.摸2张牌回复2点体力;2.此牌造成的伤害+X(X为你手牌和装备牌的数量)',
						qqwz_排兵2: '排兵',
						qqwz_排兵2_info: '',
						qqwz_傀儡: '傀儡',
						qqwz_傀儡_info: '出牌阶段[若你的体力上限不小于5]你可以弃置一张牌失去5点体力上限,若如此做,你指定一名角色,获得其所有手牌装备牌和判定牌然后其死亡.每回合限一次',
						qqwz_驭魂: '驭魂',
						qqwz_驭魂_info: '结束阶段,你可以随机获得一张锦囊牌并回复1点体力增加1点体力上限',
						qqwz_蝎心: '蝎心',
						qqwz_蝎心_info: '其他角色的出牌阶段开始时,你可以弃置一张手牌然后你对其造成2点神圣伤害流失1点体力且本回合该角色无法回复体力',
						qqwz_蝎心2: '蝎心',
						qqwz_蝎心2_info: '当一名其他角色回复体力时,50%概率终止回复结算,然后你回复一点体力',
						qqwz_乱政: '乱政',
						qqwz_乱政_info: '当你击杀一名角色后,你可于此回合结束后摸三张牌并进行一个额外回合',
						qqwz_乱政2: '乱政',
						qqwz_乱政2_info: '',
						qqwz_狮枪闪: '狮枪',
						qqwz_狮枪闪_info: '你使用或打出的杀无法被闪响应',
						qqwz_舍粮: '舍粮',
						qqwz_舍粮_info: '回合开始和结束阶段,若你的武将牌上没有牌,你可以摸5张牌.若如此做,你将5张牌置于武将牌上,称为<粮>;当<粮>移至其他区域后,若你的武将牌上没有<粮>,你回复体力至体力上限并摸3张牌,你跳过弃牌阶段',
						qqwz_渡世: '渡世',
						qqwz_渡世_info: '当你受到1点伤害后,或其他角色受到你造成的1点伤害后,受到伤害的角色可以获得一张<粮>',
						qqwz_顺道: '顺道',
						qqwz_顺道_info: "出牌阶段,你可以弃置1张'粮'令一名角色摸2张牌",
						qqwz_舍粮2: '舍粮',
						qqwz_舍粮2_info: '',
						qqwz_舍粮3: '舍粮',
						qqwz_舍粮3_info: '你始终跳过弃牌阶段',
						qqwz_计筹: '计筹',
						qqwz_计筹_info: '出牌阶段开始时,你可以弃置任意张装备牌,然后亮出牌堆顶5倍数量的牌,你获得其中的锦囊牌,你不能被延迟类锦囊选中',
						qqwz_星蝶: '星蝶',
						qqwz_星蝶_info: '锁定技,若你的装备区没有防具牌,视为你装备着【八卦阵】;若你的装备区没有坐骑牌,你的手牌上限+x(x=你当前的体力);若你的装备区没有宝物牌,你使用锦囊牌无距离限制,每当你使用或打出一张非转化非延迟类锦囊牌你可以获得一张锦囊牌',
						qqwz_星蝶2: '星蝶',
						qqwz_星蝶2_info: '每当你使用一张非转化的普通锦囊牌,可以摸一张牌',
						qqwz_将酒: '将酒',
						qqwz_将酒_info: '锁定技,你的【酒】均视为【决斗】',
						qqwz_破敌: '破敌',
						qqwz_破敌_info: '出牌阶段,你可以与一名角色拼点.若你赢,你获得以下技能直到回合结束:无视与该角色的距离;无视防具且可使用任意数量的【杀】且你使用杀不可被闪抵消且伤害+2.若你没赢,你本回合使用杀造成伤害后其死亡.每回合限一次',
						qqwz_破敌2: '破敌',
						qqwz_破敌2_info: '',
						qqwz_破敌3: '破敌',
						qqwz_破敌3_info: '当你用杀造成伤害后,其死亡',
						qqwz_破敌4: '破敌',
						qqwz_破敌4_info: '',
						qqwz_破敌5: '破敌',
						qqwz_破敌5_info: '锁定技,你的【杀】额外造成1点伤害',
						qqwz_篱下: '篱下',
						qqwz_篱下_info: '锁定技,当一名其他角色成为基本牌或普通锦囊牌的目标时,若其与你的距离为1且你既不是此牌的使用者也不是目标,你也成为此牌的目标',
						qqwz_散财: '散财',
						qqwz_散财_info: '锁定技,当你对区域里有牌的其他角色造成伤害后,你获得其手牌、装备区里的各2张牌,你的手牌上限+X(X=你当前的体力上限)你受到的伤害+1',
						qqwz_策定: '策定',
						qqwz_策定_info: '出牌阶段,你可以交给任一其他角色一张装备牌或【杀】或1张基本牌,该角色进行二选一:1. 视为对其攻击范围内的另一名由你指定的角色使用一张【杀】和决斗.2. 摸2张牌.每回合限一次',
						qqwz_殉道: '殉道',
						qqwz_殉道_info: '锁定技,你的回合外,你每受到一次伤害,任何伤害对你无效,直到该回合结束',
						qqwz_殉道2: '殉道',
						qqwz_殉道2_info: '',
						qqwz_殉道3: '殉道',
						qqwz_殉道3_info: '你免疫体力流失伤害',
						qqwz_殉道4: '殉道',
						qqwz_殉道4_info: '你免疫体力流失伤害',
						qqwz_繁华: '繁华',
						qqwz_繁华_info: '摸牌阶段摸牌时,你可以额外摸3张牌若如此做,你本回合每次使用基本牌都可以获得一张锦囊牌',
						qqwz_繁华2: '繁华',
						qqwz_繁华2_info: '',
						qqwz_汉室: '汉室',
						qqwz_汉室_info: '弃牌阶段,你增加1点体力上限然后跳过弃牌阶段,其他角色与你计算距离始终+2,出牌阶段你可以用2张花色相同的手牌当桃使用(每回合限2次)',
						qqwz_汉室2: '汉室',
						qqwz_汉室2_info: '出牌阶段,你可以将两张花色一样的牌当桃使用,每回合限2次',
						qqwz_威视: '威视',
						qqwz_威视_info: '一名其他角色的准备阶段,你可以与该角色拼点,若你赢,该角色本回合使用的牌不能指定除该角色外的角色为目标,且此人每使用一张牌60%流失1点体力',
						qqwz_威视2: '威视',
						qqwz_威视2_info: '',
						qqwz_牵连: '牵连',
						qqwz_牵连_info: '当你成为【杀】的目标时,你可以令另1~3名其他角色选择一项:①、交给你一张【闪】;②、成为此【杀】的额外目标然后你回复1点体力',
						qqwz_抵命: '抵命',
						qqwz_抵命_info: '锁定技,你的【桃】均视为【过河拆桥】',
						qqwz_毒谋: '毒谋',
						qqwz_毒谋_info: '结束阶段开始时,你可以对没有手牌的1~5名角色造成2点体力流失伤害',
						qqwz_火牢: '火牢',
						qqwz_火牢_info: '限定技.出牌阶段,你可以令所有其他角色各选择一项:弃置至少X张牌(X为该角色的上家以此法弃置牌的数量+2);或受到你对其造成的4点火焰伤害',
						qqwz_火刑: '火刑',
						qqwz_火刑_info: '其他角色失去或使用牌后,你可以令其受到2点神圣火焰伤害,每回合限2次',
						qqwz_破计: '破计',
						qqwz_破计_info: '锁定技,你使用的普通锦囊牌不能被无懈可击响应;你不能成为其他角色的延时类锦囊的目标且回合结束你摸2张牌',
						qqwz_诛族: '诛族',
						qqwz_诛族_info: '出牌阶段限2次,你可以展示一张锦囊牌并将之置于牌堆顶,然后令有手牌的一名其他角色选择一项:弃置3张锦囊牌;或弃置2张非锦囊牌',
						qqwz_去病: '去病',
						qqwz_去病_info: '出牌阶段限1次,你可以弃置一张手牌令一名角色受到1点神圣伤害然后你回复1点体力,你每次受到伤害后回复1点体力',
						qqwz_医心: '医心',
						qqwz_医心_info: '回合外,你可以将一张红色牌当[桃]使用,当你回复体力后你回复体力至体力上限',
						qqwz_缓图: '缓图',
						qqwz_缓图_info: '你使用或打出一张牌后50%摸一张牌回复1点体力,你使用或打出基本牌40%外执行1次效果',
						qqwz_缓图2: '缓图',
						qqwz_缓图2_info: '你使用的基本牌均结算两次<br>75%概率防止你流失体力或受到伤害',
						qqwz_鸿鹄: '鸿鹄',
						qqwz_鸿鹄_info: '锁定技,每当你受到一次伤害,你可以摸1张牌回复1点体力,当一名角色的牌因弃置而置入弃牌堆时,你可以将其中的任意张牌交给其他角色',
						qqwz_鸿鹄2: '鸿鹄',
						qqwz_鸿鹄2_info: '当其他角色的牌因弃置而置入弃牌堆时,你可以将其中的任意张牌交给其他角色',
						qqwz_隔墙: '隔墙',
						qqwz_隔墙_info: '一名其他角色的结束阶段,你可以选择一项:将其装备区里的1张牌移动至你装备区里的相应位置(可替换原装备)并令其翻面;或摸2张牌',
						qqwz_投曹: '投曹',
						qqwz_投曹_info: '限定技.出牌阶段,你可以将装备区里的所有牌交给一名其他角色,然后该角色选择一项:令你回复X点体力并摸X张牌;或对其攻击范围内的X名角色各造成2点伤害(X为你以此法交给该角色的牌的数量)',
						qqwz_罪业: '罪业',
						qqwz_罪业_info: '出牌阶段限一次,你可以展示所有手牌,若其中包含不止一种颜色,则你选择一种颜色并弃置该颜色的所有手牌,然后你可以获得至多X名角色的各2张牌(X为你以此法弃置的手牌数).若你以此法弃置的牌不少于5张,则你失去1点体力上限,你跳过弃牌阶段且免疫体力流失伤害',
						qqwz_罪业2: '罪业',
						qqwz_罪业2_info: '你始终跳过弃牌阶段',
						qqwz_罪业3: '罪业',
						qqwz_罪业3_info: '你免疫体力流失伤害',
						qqwz_推卸: '推卸',
						qqwz_推卸_info: '当你受到伤害时,若此伤害大于1则你可以令一名其他角色摸2张牌,然后你摸一张牌流失1点体力取消本次伤害',
						qqwz_谗言: '谗言',
						qqwz_谗言_info: '出牌阶段开始时,你可以摸z张牌.若如此做,此回合你的手牌上限改为X(X为你此阶段造成的伤害数,z=你当前的体力)且本回合你每次造成伤害可以摸一张牌',
						qqwz_谗言2: '谗言',
						qqwz_谗言2_info: '',
						qqwz_乱国: '乱国',
						qqwz_乱国_info: '你每使用一张基本牌可以视为打出一张五谷丰登,你每使用一张机关牌可以视为打出一张决斗,你每使用一张锦囊牌可以视为打出一张南蛮入侵,你每使用一张食物牌可以回复1点体力,其他角色回合开始时,你摸一张牌进行一个额外回合',
						qqwz_乱国锦囊: '乱国',
						qqwz_乱国锦囊_info: '',
						qqwz_乱国基本: '乱国',
						qqwz_乱国基本_info: '',
						qqwz_乱国机关: '乱国',
						qqwz_乱国机关_info: '',
						qqwz_乱国延迟锦囊: '乱国',
						qqwz_乱国延迟锦囊_info: '',
						qqwz_乱国回合: '乱国',
						qqwz_乱国回合_info: '当一名其他角色回复体力时,50%概率终止回复结算,然后你回复一点体力',
						qqwz_并起: '并起',
						qqwz_并起_info: '出牌阶段,你可以指定1~4名除你之外的角色,令这些角色各摸4张牌,每选定一名角色你摸2张牌回复3点体力',
						qqwz_让梨: '让梨',
						qqwz_让梨_info: '摸牌阶段,你可以额外摸3张牌,你始终跳过弃牌阶段',
						qqwz_儒门: '儒门',
						qqwz_儒门_info: '当你即将受到伤害时,若伤害来源的体力值小于你,则此伤害=0',
						qqwz_让梨2: '让梨',
						qqwz_让梨2_info: '你始终跳过弃牌阶段',
						qqwz_秉忠: '秉忠',
						qqwz_秉忠_info: '当你因弃置失去一张手牌时,你可以弃置1名其他角色的2张牌',
						qqwz_孤援: '孤援',
						qqwz_孤援_info: '当一名角色受到伤害时,你可以令一名角色摸1张牌然后你回复2点体力',
						qqwz_妖艳: '妖艳',
						qqwz_妖艳_info: '锁定技,准备阶段,你令所有其他角色的非锁定技失效直到回合结束,当你收到伤害时若次伤害来源为男性角色则取消本次伤害并令其失去1点体力',
						qqwz_醉魂: '醉魂',
						qqwz_醉魂_info: '出牌阶段,你可以弃置一张装备牌,然后令一名角色翻面并摸1张牌然后你摸一张牌',
						qqwz_妖艳2: '妖艳',
						qqwz_妖艳2_info: '你对女性角色、女性角色对你使用【杀】时,都需连续使用两张【闪】才能抵消',
						qqwz_战神: '战神',
						qqwz_战神_info: '锁定技,你的闪可以当杀使用或打出,你使用的[决斗]需要2张[杀]响应,回合结束若你本回合造成的伤害大于或等于4则你可以选择一名角色令其受到4点神圣伤害,你使用或打出杀不能被闪抵消,你受到的伤害最多为1,你免疫致死,你无视其防具',
						qqwz_战神决斗: '战神',
						qqwz_战神决斗_info: '',
						qqwz_战神闪杀: '战神',
						qqwz_战神闪杀_info: '',
						qqwz_战神伤害: '战神',
						qqwz_战神伤害_info: '',
						qqwz_战神绝境: '战神',
						qqwz_战神绝境_info: '你受到的伤害至多为1<br>你始终跳过弃牌阶段',
						qqwz_战神免致死: '战神',
						qqwz_战神免致死_info: '',
						qqwz_无前: '无前',
						qqwz_无前_info: '锁定技.你造成伤害后可以获得1张决斗,你使用决斗造成伤害70%令其死亡,一名角色获得牌时你60%摸一张牌,回合开始阶段你增加x点护甲(x=你装备区里的牌数)当一名其他角色受到伤害时你的体力+1',
						qqwz_无前2: '无前',
						qqwz_无前2_info: '你使用的杀均结算两次,你使用杀无次数限制',
						qqwz_无前3: '无前',
						qqwz_无前3_info: '当一名其他角色回复体力时,50%概率终止回复结算,然后你回复一点体力',
						qqwz_无前4: '无前',
						qqwz_无前4_info: '日轮啊,化作甲胄,游戏开始前,你获得∞点护甲,你的体力不会流失,体力上限不会被扣除,你不会被即死',
						qqwz_无前5: '无前',
						qqwz_无前5_info: '当一名其他角色回复体力时,50%概率终止回复结算,然后你回复一点体力',
						qqwz_战神无视防具: '战神',
						qqwz_战神无视防具_info: '',
						qqwz_进击: '进击',
						qqwz_进击_info: '每当你使用【杀】对一名角色造成伤害后,你可以弃置该角色装备区里的一张牌,若此牌是坐骑牌,你于此牌置入弃牌堆时获得之.你的出牌阶段,你计算与其他角色距离始终为1,且使用杀可以额外指定6个目标',
						qqwz_进击2: '进击',
						qqwz_进击2_info: '当一名其他角色回复体力时,50%概率终止回复结算,然后你回复一点体力',
						qqwz_进击3: '进击',
						qqwz_进击3_info: '',
						qqwz_白马: '白马',
						qqwz_白马_info: '锁定技,只要你的体力值大于6点,你的进攻距离+2;只要你的体力值为4点或更低,你的防御距离+3,回合结束,直到你的回合开始你不能成为他们使用卡牌的目标且其他角色每使用1张装备牌你可以摸2张牌',
						qqwz_白马2: '白马',
						qqwz_白马2_info: '',
						qqwz_英雄: '英雄',
						qqwz_英雄_info: '你的准备阶段开始时,场上的吴国角色摸2张牌,你的结束阶段,全场魏国势受到2点神圣火焰伤害,当你被翻面时,全场群雄势力翻面',
						qqwz_英雄2: '英雄',
						qqwz_英雄2_info: '准备阶段,场上的吴国角色摸一张牌',
						qqwz_英雄3: '英雄',
						qqwz_英雄3_info: '准备阶段,场上的吴国角色摸一张牌',
						qqwz_急援: '急援',
						qqwz_急援_info: '主公技,锁定技,濒死阶段,吴势力角色对你使用的[桃]额外回复2点体力并你摸2张牌,当你受到伤害时若此伤害来源是吴势力则取消本次伤害,改为回复2点体力摸1张牌',
						qqwz_急援2: '急援',
						qqwz_急援2_info: '主公技,锁定技,濒死阶段,吴势力角色对你使用的[桃]额外回复一点体力',
						qqwz_权衡: '权衡',
						qqwz_权衡_info: '出牌阶段,你可以弃置任意张牌并摸等量X2的牌,每回合限3次你的手牌上限=你当前的体力上限',
						qqwz_权衡2: '权衡',
						qqwz_权衡2_info: '锁定技,摸牌阶段摸牌时,你额外摸一张牌;你的手牌上限不会因体力值的减少而减少',
						qqwz_踏浪: '踏浪',
						qqwz_踏浪_info: '你可以将一张牌当[过河拆桥]使用,你不能被过河拆桥和乐不思蜀选做目标,你受到伤害时若手牌不等于0则取消本次伤害,你造成伤害时若其手牌=0则其流失3点体力',
						qqwz_踏浪2: '踏浪',
						qqwz_踏浪2_info: '锁定技,你不能成为[顺手牵羊]和[乐不思蜀]的目标',
						qqwz_踏浪3: '踏浪',
						qqwz_踏浪3_info: '你使用的基本牌均结算两次<br>75%概率防止你流失体力或受到伤害',
						qqwz_踏浪4: '踏浪',
						qqwz_踏浪4_info: '',
						qqwz_揣测: '揣测',
						qqwz_揣测_info: '出牌阶段,你可以令1名角色选择一种花色并展示你的一张手牌,若选择的花色与展示的不同,该角色受到来自你的2点神圣伤害.结算结束后该角色获得展示的牌.每阶段限3次',
						qqwz_焦凤: '焦凤',
						qqwz_焦凤_info: '你可以将一张红色的手牌当[乐不思蜀]使用,锁定技,每当你使用或打出一张红色牌,你摸一张牌然后你的手牌上限便+1,直到你的回合结束',
						qqwz_焦凤2: '焦凤',
						qqwz_焦凤2_info: '锁定技,每当你使用或打出一张红色牌,你的手牌上限便+1,直到你的回合结束',
						qqwz_流年: '流年',
						qqwz_流年_info: '你不能成为【杀】和【乐不思蜀】的目标,当你受到伤害后,你可以弃置一张牌回复1点体力',
						qqwz_鸳鸯: '鸳鸯',
						qqwz_鸳鸯_info: '出牌阶段,你可以弃置1张牌并选择1名已经受伤的男性角色,你回复1点体力且本回合可以多使用2张杀,其回复2点体力并增加1点体力上限摸2张牌,每阶段限一次',
						qqwz_影剑2: '影剑',
						qqwz_影剑2_info: '锁定技,每当一名其他角色使用一张基本牌或锦囊牌,你获得一张与之同名的牌',
						qqwz_影剑: '影剑',
						qqwz_影剑_info: '每当你失去一张装备牌,可以摸两张牌,其他角色使用装备牌时你可以随机将一件装备牌置于你的装备区,你可以无限装备武器牌',
						qqwz_影剑3: '影剑',
						qqwz_影剑3_info: '',
						qqwz_鸳鸯2: '鸳鸯',
						qqwz_鸳鸯2_info: '',
						qqwz_绿荫: '绿荫',
						qqwz_绿荫_info: '出牌阶段,你可以将你的任意一张♥️或♦️手牌当【无中生有】使用.每回合限3次',
						qqwz_花落: '花落',
						qqwz_花落_info: '当你受到伤害时,本次伤害无效并反弹目标本次伤害的神圣伤害,你的♠️️牌均视为♥️️牌',
						qqwz_花落2: '花落',
						qqwz_花落2_info: '锁定技,你的♠️️牌均视为♥️️',
						qqwz_铁壁: '铁壁',
						qqwz_铁壁_info: '每当一名角色的手牌于回合外被弃置时,你可以受到1点伤害,然后该角色摸3张牌你摸一张牌',
						qqwz_冷血: '冷血',
						qqwz_冷血_info: '锁定技,当你进入濒死阶段时70%回复全部体力',
						qqwz_奋命: '奋命',
						qqwz_奋命_info: '当一名角色受到伤害时若其是吴王光耀则取消伤害,然后你受到2点伤害',
						qqwz_烈士: '烈士',
						qqwz_烈士_info: '出牌阶段,你可以和一名角色拼点,若你赢,你获得以下技能直到回合结束:攻击范围无限;可额外使用一张【杀】;使用【杀】时可额外指定1~7个目标,若你没赢,你摸2张牌.每回合限一次',
						qqwz_烈士2: '烈士',
						qqwz_烈士2_info: '',
						qqwz_酣战: '酣战',
						qqwz_酣战_info: '你造成伤害时,取消本次伤害令其失去1点体力上限和1点体力',
						qqwz_睥睨: '睥睨',
						qqwz_睥睨_info: '回合开始阶段你随机召唤一名东吴虎将然后你失去1点体力上限,回合结束阶段你随机召唤一名东吴英才然后你失去此技能并失去1点体力上限',
						qqwz_魂佑: '魂佑',
						qqwz_魂佑_info: '你的回合结束阶段,场上的吴国角色摸2张牌,魏国角色受到2点伤害',
						qqwz_虎踞: '虎踞',
						qqwz_虎踞_info: '摸牌阶段,你可以额外摸2张牌,你计算与其他角色距离始终-2',
						qqwz_军霸2: '军霸',
						qqwz_军霸2_info: '你受到的伤害始终为1,你不能被延迟类锦囊牌选中,你始终跳过弃牌阶段',
						qqwz_军霸3: '军霸',
						qqwz_军霸3_info: '',
						qqwz_转日: '转日',
						qqwz_转日_info: '每当你使用(指定目标后)或被使用(成为目标后)一张【决斗】或【杀】时,你可以摸一张牌回复1点体力.当你受到决斗造成的伤害时取消之并摸一张牌',
						qqwz_转日2: '转日',
						qqwz_转日2_info: '当你用杀造成伤害后,其死亡',
						qqwz_卧虎: '卧虎',
						qqwz_卧虎_info: '觉醒技,准备阶段,若你的体力不等于你的手牌,你须流失3点体力,并永久获得技能<虎踞>和<庇佑>',
						qqwz_庇佑: '庇佑',
						qqwz_庇佑_info: '准备阶段开始时,若你已受伤,你可令1名其他角色执行一项:摸X张牌增加X点护甲,然后弃置一张牌;或受到X点伤害,然后弃置X张牌(X为你已损失的体力值,若你装备区里牌的数量不小于你的体力值,则X改为你的体力上限)',
						qqwz_联盟: '联盟',
						qqwz_联盟_info: '出牌阶段,你可以令一名角色获得你的全部手牌,然后你摸2张牌,每回合1次,回合结束你可以摸3张牌',
						qqwz_联盟2: '联盟',
						qqwz_联盟2_info: '结束阶段,你可以摸一张牌',
						qqwz_人杰: '人杰',
						qqwz_人杰_info: '锁定技,你的回合内,其他角色的手牌对你可见;每当你造成或受到伤害时,你可以置换任意两名角色的手牌',
						qqwz_人杰2: '人杰',
						qqwz_人杰2_info: '',
						qqwz_施财: '施财',
						qqwz_施财_info: '摸牌阶段你可以额外摸2张牌并回复1点体力,然后全体武将摸2张牌',
						qqwz_明谏: '明谏',
						qqwz_明谏_info: '出牌阶段,你可以将你手牌中的一张装备牌置于一名其他角色装备区里,然后你摸2张牌并回复1点体力.(其可以无限装备)',
						qqwz_暗谏: '暗谏',
						qqwz_暗谏_info: '',
						qqwz_修政: '修政',
						qqwz_修政_info: '其他角色的弃牌阶段结束时,你可将其弃置的一张牌返回其手牌,然后获得其弃置的其它牌,被动效果:你没有装备区',
						qqwz_魂佑2: '魂佑',
						qqwz_魂佑2_info: '准备阶段,场上的吴国角色摸一张牌',
						qqwz_芙蓉: '芙蓉',
						qqwz_芙蓉_info: '弃牌阶段开始时,你可以将一张与你本回合使用的牌颜色均不同的手牌置于武将牌上:若你有至少2张<芙蓉>牌,你移去<芙蓉>牌并选择一名男性角色,该角色受到4点神圣伤害并弃置其装备区的所有牌',
						qqwz_沉鱼: '沉鱼',
						qqwz_沉鱼_info: '回合结束阶段获得技能<花落>和<流年>直到你的回合开始',
						qqwz_狂傲: '狂傲',
						qqwz_狂傲_info: '当你于回合外需要使用或打出一张基本牌时,你可以观看牌堆顶的十张牌.若你观看的牌中有此牌,你可以使用打出之',
						qqwz_杀令: '杀令',
						qqwz_杀令_info: '你可以将基本牌当作任意基本牌使用或打出',
						qqwz_杀令2: '杀令',
						qqwz_杀令2_info: '',
						qqwz_举国: '举国',
						qqwz_举国_info: '出牌阶段,你可以弃置1张牌对你攻击范围内的一名其他角色造成1点伤害.每回合限5次',
						qqwz_合纵: '合纵',
						qqwz_合纵_info: '摸牌阶段摸牌时,你可以少摸一张牌,然后指定至多三名其他角色各摸一张牌',
						qqwz_连横: '连横',
						qqwz_连横_info: '一名角色的判定牌生效前,你可令其观看你的手牌.若如此做,该角色选择你的一张牌,令你打出此牌代替之然后你可以摸2张牌',
						qqwz_料敌: '料敌',
						qqwz_料敌_info: '每当你因使用、打出或弃置而失去一张牌时,你可以摸一张牌回复2点体力',
						qqwz_致死: '致死',
						qqwz_致死_info: '锁定技,准备阶段,你选择一项:1.移去<引敌>牌,将手牌补至体力上限数;2.将<引敌>牌交给一名体力值不大于你的其他角色,其回复3点体力,摸等量的牌',
						qqwz_引敌: '引敌',
						qqwz_引敌_info: '结束阶段开始时,你可以将至少一张牌置于武将牌上',
						qqwz_冷兵: '冷兵',
						qqwz_冷兵_info: '你使用【杀】可以多选择1名距离为1的角色为目标,触发此效果你可以摸2张牌',
						qqwz_迅疾: '迅疾',
						qqwz_迅疾_info: '出牌阶段限一次,你可以弃置一张牌并选择一名其他角色,然后本回合你计算与其的距离视为1然后其失去1点体力上限',
						qqwz_迅疾2: '迅疾',
						qqwz_迅疾2_info: '',
						qqwz_年华: '年华',
						qqwz_年华_info: '一名其他角色的出牌阶段开始时,若你不在其攻击范围内,你可以令该角色的锦囊牌均视为【毒】,直到该角色以此法使用了一张【毒】或回合结束.若如此做,则直到回合结束,视为你在其攻击范围内,然后你回复1点体力',
						qqwz_朝露: '朝露',
						qqwz_朝露_info: '出牌阶段限一次,你可以弃置一张基本牌,然后选择一项:弃置场上一张武器牌,然后你回复2点体力并获得其弃置的武器牌;或将场上的一张防具牌移动到你的装备区里(可替换原防具)',
						qqwz_残戮: '残戮',
						qqwz_残戮_info: '摸牌阶段开始时,你可以放弃摸牌,改为摸x张牌回复x点体力(x为已受伤的角色数量)',
						qqwz_血仇: '血仇',
						qqwz_血仇_info: '当你受到伤害时,若你没有手牌,则此伤害=0',
						qqwz_丧命: '丧命',
						qqwz_丧命_info: '出牌阶段限1次,你可以展示所有手牌,若黑色牌不少于红色牌,则视为你使用了一张【桃】',
						qqwz_凌风: '凌风',
						qqwz_凌风_info: '当你失去牌时,你可以依次弃置一至两名其他角色的共计两张牌.每回合限5次',
						qqwz_御风: '御风',
						qqwz_御风_info: '每当你失去一次装备区里的牌时,你可以执行下列两项中的一项:1.视为对任意一名其他角色使用一张【杀】(此【杀】不计入每回合的使用限制);2.对与你距离1以内的一名其他角色造成2点伤害',
						qqwz_携手: '携手',
						qqwz_携手_info: '出牌阶段,你可以选择两名角色,交换他们装备区里的所有牌.以此法交换的装备数差不能超过X(X为你当前的体力上限).每回合限2次',
						qqwz_招亲: '招亲',
						qqwz_招亲_info: '当有角色进入濒死状态时,你可以展示该角色的一张手牌:若此牌不为食物牌,则该角色弃掉这张牌并回复全部体力',
						qqwz_镇军: '镇军',
						qqwz_镇军_info: '当你于出牌阶段内使用【杀】指定一个目标后,你可以将其至多X张牌扣置于该角色的武将牌旁(X为其体力值*2).若如此做,你本回合造成伤害时若其没有手牌则受到伤害+2',
						qqwz_镇军血: '镇军',
						qqwz_镇军血_info: '',
						qqwz_定心: '定心',
						qqwz_定心_info: '出牌阶段限2次,你可以选择两名手牌数不同的其他角色,令其中手牌多的角色将1张手牌交给手牌少的角色,然后若这两名角色手牌数不相等,你摸2张牌或回复3点体力',
						qqwz_魂忆: '魂忆',
						qqwz_魂忆_info: '你死亡时,可以令一名其他角色(击杀你的角色除外)摸5张牌,然后令其回复全部体力',
						qqwz_佳酿: '佳酿',
						qqwz_佳酿_info: '结束阶段开始时,若你拥有手牌,你可以将至少一张手牌置于你的武将牌上,称为<佳酿>.当一名角色处于濒死状态时,你可以移去一张<佳酿>,视为该角色使用一张【酒】,当你移除佳酿时你回复2点体力',
						qqwz_佳酿2: '佳酿',
						qqwz_佳酿2_info: '',
						qqwz_烈火: '烈火',
						qqwz_烈火_info: '你受到伤害后对其反弹2点神圣火焰伤害,你免疫受到的火焰伤害',
						qqwz_烈火2: '烈火',
						qqwz_烈火2_info: '你可以立即获得对你造成伤害的牌',
						qqwz_弓彰: '弓彰',
						qqwz_弓彰_info: '出牌阶段,你可以弃置一张牌,令你的攻击范围无限且出杀不能被闪抵消,直到回合结束,然后若你以此法弃置的牌为装备牌,你可以弃置一名其他角色的2张牌然后你摸2张牌.每回合限一次',
						qqwz_弓彰2: '弓彰',
						qqwz_弓彰2_info: '',
						qqwz_直入: '直入',
						qqwz_直入_info: '限定技,出牌阶段,你可以选择一名角色,令攻击范围内含有该角色的所有角色各选择一项:1.弃置一张武器牌;2.令其摸2张牌回复1点体力',
						qqwz_毒箭: '毒箭',
						qqwz_毒箭_info: '当你对目标角色造成伤害时,若你不在其攻击范围内,则此伤害+2',
						qqwz_缴械: '缴械',
						qqwz_缴械_info: '每当你受到杀造成的一次伤害后,你可以弃置一张牌,然后获得伤害来源装备区里的全部牌',
						qqwz_亡箭: '亡箭',
						qqwz_亡箭_info: '每当你失去一张装备牌,可以回复2点体力',
						qqwz_擒拿: '擒拿',
						qqwz_擒拿_info: '当一名其他角色回复体力时,你令其失去下一个回合',
						qqwz_矜持: '矜持',
						qqwz_矜持_info: '每当你受到一名男性角色造成的伤害时,你可以弃置一张非装备牌,令此伤害-2',
						qqwz_毁誉: '毁誉',
						qqwz_毁誉_info: '出牌阶段,当你使用【杀】或普通锦囊牌指定唯一目标时,你可令可以成为此牌目标的另一名其他角色选择一项:交给你一张牌并成为此牌的使用者;或成为此牌的额外目标',
						qqwz_耿直: '耿直',
						qqwz_耿直_info: '结束阶段,你可以令一名角色摸一张并展示之,若是装备牌,其立即装备之并回复一点体力,若是锦囊牌则摸3张牌,若是基本牌则增加1点体力上限,若是机关牌则受到1点伤害',
						qqwz_妙玄: '妙玄',
						qqwz_妙玄_info: '每当你的牌被弃置,你摸一张牌然后可以将其按任意顺序置于牌堆顶',
						qqwz_诱饵: '诱饵',
						qqwz_诱饵_info: '结束阶段和回合开始时,你可以令一名其他角色弃置你的一张牌,若此牌不为【杀】,你获得该角色的2张牌并回复2点体力',
						qqwz_秉正: '秉正',
						qqwz_秉正_info: '结束阶段和回合开始时,你可以展示所有手牌,若均为同一颜色,则你令至多X名角色各摸1张牌(X为你的手牌数)',
						qqwz_慎重: '慎重',
						qqwz_慎重_info: '出牌阶段,你可以弃置两张牌,然后摸一张牌回复1体力增加1点体力上限',
						qqwz_安邦: '安邦',
						qqwz_安邦_info: '出牌阶段限2次,你可以选择一名其他角色装备区里的一张牌,令其将此牌收回手牌.然后若该角色攻击范围内的角色数因此减少,则你摸2张牌回复2点体力',
						qqwz_相助: '相助',
						qqwz_相助_info: '当你造成或受到伤害后,你可以选择一项:1. 弃置手牌数大于你的一名角色的一张手牌;2. 令手牌数小于你的一名角色摸2张牌',
						qqwz_阵邀: '阵邀',
						qqwz_阵邀_info: '每回合限一次,每当你需要使用或打出一张基本牌时,你可以与一名手牌数少于你的角色交换手牌.若如此做,视为你使用或打出了此牌',
						qqwz_阵邀_sha: '阵邀',
						qqwz_阵邀_sha_info: '',
						qqwz_阵邀_tao: '阵邀',
						qqwz_阵邀_tao_info: '',
						qqwz_阵邀_jiu: '阵邀',
						qqwz_阵邀_jiu_info: '',
						qqwz_善学: '善学',
						qqwz_善学_info: '结束阶段开始时,你可以令至多X名角色依次摸2张牌并将一张牌置于牌堆顶(X为你的体力值);若你已失去技能<鸿宴>,则将X改为你的体力上限',
						qqwz_鸿宴: '鸿宴',
						qqwz_鸿宴_info: '出牌阶段限一次,你可以令一名有牌的其他角色选择一项:令你获得其装备区里所有的牌,然后你失去技能<鸿宴>,直到游戏结束;或弃置3张牌',
						qqwz_王召: '王召',
						qqwz_王召_info: '主公技,锁定技,你距离为1的角色视为在其他吴势力角色的攻击范围内',
						qqwz_王召2: '王召',
						qqwz_王召2_info: '',
						qqwz_善民: '善民',
						qqwz_善民_info: '出牌阶段限一次,你可以选择一名有牌的其他角色,该角色将其一至九张牌置于你的武将牌上.若如此做,你的下准备阶段,你获得武将牌上的所有牌,然后其摸等量的牌',
						qqwz_奢豪: '奢豪',
						qqwz_奢豪_info: '出牌阶段,若你的手牌上限大于0,你可以摸2张牌,然后你本回合的手牌上限-1.结束阶段开始时,若你没有手牌,则你可以横置至多X名角色的武将牌(X为你的体力值上限)然后你可以摸4张牌',
						qqwz_奢豪2: '奢豪',
						qqwz_奢豪2_info: '',
						qqwz_奢豪3: '奢豪',
						qqwz_奢豪3_info: '',
						qqwz_罪责: '罪责',
						qqwz_罪责_info: '锁定技,当你受到火焰伤害时,若你处于<连环状态>且你是传导伤害的起点,则此伤害+2',
						qqwz_掌控: '掌控',
						qqwz_掌控_info: '结束阶段,你获得其他角色本回合失去的牌',
						qqwz_掌控2: '掌控',
						qqwz_掌控2_info: '',
						qqwz_伺机: '伺机',
						qqwz_伺机_info: '你每次,打出或失去牌时,全场的吴国武将摸一张牌,全场魏国武将失去1点体力,全场蜀国武将回复1点体力,全场群雄武将失去1点体力上限,你始终跳过弃牌阶段',
						qqwz_白衣: '白衣',
						qqwz_白衣_info: '觉醒技,准备阶段开始时,若你的手牌数比体力值多3(人数不少于7时改为2)或更多,你须减2点体力上限回复全部体力并获得技能【掌控】',
						qqwz_伺机2: '伺机',
						qqwz_伺机2_info: '你始终跳过弃牌阶段',
						qqwz_锦帆: '锦帆',
						qqwz_锦帆_info: '当一名角色使用的锦囊牌指定了至少两名角色为目标时,你可以令此牌对其中任意名角色无效.你不能被延迟类锦囊选中',
						qqwz_合围: '合围',
						qqwz_合围_info: '你造成非神圣伤害时若其手牌=0则其死亡,你使用或打出基本牌50%额外结算1次,出牌阶段,你可以弃置2张牌视为对全体造成1点神圣伤害然后回复全部体力(限一次)',
						qqwz_合围2: '合围',
						qqwz_合围2_info: '当一名其他角色回复体力时,50%概率终止回复结算,然后你回复一点体力',
						qqwz_合围3: '合围',
						qqwz_合围3_info: '出牌阶段,你可以弃置两张牌,然后摸一张牌',
						qqwz_霸业: '霸业',
						qqwz_霸业_info: '锁定技,摸牌阶段摸牌时,你额外摸3张牌;你的手牌上限不会因体力值的减少而减少.你造成伤害时,若场上角色装备区内有防具牌,令该名角色也受到等量伤害',
						qqwz_霸业2: '霸业',
						qqwz_霸业2_info: '',
						qqwz_控局: '控局',
						qqwz_控局_info: '出牌阶段限2次,你可以展示一张手牌并将此牌交给一名其他角色.然后该角色选择一项:展示其手牌并弃置所有与此牌花色相同的牌,或失去2点体力',
						qqwz_谋策: '谋策',
						qqwz_谋策_info: '每当你于出牌阶段外成为其他角色使用牌的目标后,若你的体力值不为1,你可以立即使用1张牌,其他角色回合结束阶段须交给你一张牌,然后使用一张锦囊牌,或受到2点神圣伤害.你不能被延迟类锦囊选中',
						qqwz_谋策2: '谋策',
						qqwz_谋策2_info: '其他角色回合结束阶段须交给你一张牌,然后使用一张锦囊牌,或受到2点神圣伤害',
						qqwz_谋策3: '谋策',
						qqwz_谋策3_info: '锁定技,你不能成为延时类锦囊的目标',
						qqwz_诈曹: '诈曹',
						qqwz_诈曹_info: '锁定技 每当你失去体力后,你摸三张牌增加1点体力上限.然后若此时是你的出牌阶段,则直到回合结束,你使用【杀】无距离限制且不能被【闪】响应,你可以额外使用4张【杀】',
						qqwz_诈曹2: '诈曹',
						qqwz_诈曹2_info: '',
						qqwz_牺牲: '牺牲',
						qqwz_牺牲_info: '出牌阶段限一次,你可以弃置一张牌,然后失去2点体力.当你受到体力流失伤害后80%回复1点体力',
						qqwz_牺牲2: '牺牲',
						qqwz_牺牲2_info: '你使用的基本牌均结算两次<br>75%概率防止你流失体力或受到伤害',
						qqwz_赤焰: '赤焰',
						qqwz_赤焰_info: '每当你造成伤害时,你可以对全场造成1点神圣火焰伤害,你受到伤害后反弹其1点神圣火焰伤害,你受到火焰伤害均视为回复体力',
						qqwz_赤焰2: '赤焰',
						qqwz_赤焰2_info: '你可以对全场,造成1点体力流失伤害,每回合10次',
						qqwz_赤焰3: '赤焰',
						qqwz_赤焰3_info: '锁定技,你防止即将受到的火焰伤害,改为回复1点体力',
						qqwz_雅逊: '雅逊',
						qqwz_雅逊_info: '每当一张延时类锦囊牌或其他角色使用的普通锦囊牌生效时,若你是此牌的唯一目标,你可以将所有手牌置于你的武将牌上,若如此做,此回合结束时,你获得你武将牌上的所有牌.当你失去最后的手牌时,你可以令至多X名角色各摸2张牌(X为你此次失去的手牌数*2)',
						qqwz_雅逊2: '雅逊',
						qqwz_雅逊2_info: '',
						qqwz_雅逊3: '雅逊',
						qqwz_雅逊3_info: '当你失去最后的手牌时,你可以令至多X名角色各摸一张牌(X为你此次失去的手牌数)',
						qqwz_妙心: '妙心',
						qqwz_妙心_info: '出牌阶段,你可以选择一项:将一张♦️️花色牌当做【乐不思蜀】使用;或弃置一张♦️️花色牌并弃置场上的一张【乐不思蜀】.选择完成后,你摸一张牌',
						qqwz_娇啸: '娇啸',
						qqwz_娇啸_info: '当你成为[杀]的目标时你摸一张牌然后可以弃置一张牌将其转移给一名其他角色,此角色不能是[杀]的使用者,你计算与其他角色距离为1',
						qqwz天韵: '天韵',
						qqwz天韵_info: '限定技,当你首次进入濒死状态时,你将体力回复至上限,并获得技能"飓风"、"星移"',
						qqwz星移: '星移',
						qqwz星移_info: '当你成为[杀]的目标时,可以弃置一张牌将其转移给与你计算距离不大于2的一名其他角色,此角色不能是[杀]的使用者',
						qqwz飓风: '飓风',
						qqwz飓风_info: '你的手牌数始终不小于3',
						qqwz慰安: '慰安',
						qqwz慰安_info: '锁定技,当任意一名角色使用【杀】对你造成伤害时,该角色回复1点体力或翻面',
						qqwz_英才: '英才',
						qqwz_英才_info: '摸牌阶段,你可以额外摸X张牌(X=你当前的体力上限)然后你流失1点体力,你计算与其其他角色距离始终-3',
						qqwz乱敌: '乱敌',
						qqwz乱敌_info: '出牌阶段,你可以弃一张牌,视为一名角色对另一名角色使用一张[决斗],然后你可以增加1点体力上限,每阶段限一次,被动效果:你使用杀不能被闪抵消但会减少你的1点体力上限',
						qqwz乱敌2: '乱敌',
						qqwz乱敌2_info: '',
						qqwz映花: '映花',
						qqwz映花_info: '每当一名女性角色受到伤害后,你流失1点体力,每当一名男性角色受伤后,你回复1点体力',
						qqwz炎焚: '炎焚',
						qqwz炎焚_info: '每当你失去最后一张手牌你流失1点体力,你每使用杀造成伤害后可以增加1点体力上限',
						qqwz替汉: '替汉',
						qqwz替汉_info: '当你回复体力后你可以摸一张牌,你受到伤害后弃置X张牌(X=你当前手牌数的50%,向下取整),回合结束时若你的手牌大于或等于6则你可以令随机一名角色翻面',
						qqwz王权: '王权',
						qqwz王权_info: '其他非群雄角色回合开始时你令其翻面,当一名群雄角色濒死时你令其复活回复2点体力摸2张牌,然后你流失3点体力(每回合限1次)',
						qqwz韧力: '韧力',
						qqwz韧力_info: '你受到的伤害若大于1则-1,当你受到红色杀或酒杀造成的伤害时,你流失2点体力',
						qqwz女权: '女权',
						qqwz女权_info: '你的回合开始场上所有女性角色回复1点体力,摸2张牌,女性角色无法对你造成伤害',
						qqwz鸠酒: '鸠酒',
						qqwz鸠酒_info: '当你成为其他角色使用牌的目标时40%令其流失1点体力然后你摸1张牌,你流失体力后弃置2张牌',
						qqwz祸言: '祸言',
						qqwz祸言_info: '其他角色获得牌时,若其手牌大于你则你回复1点体力,你的回合结束时,若你手牌大于或等于5则你流失2点体力',
						qqwz惩恶: '惩恶',
						qqwz惩恶_info: '每当其他友方角色受到伤害时,若有伤害来源你流失1点体力对其造成等量的伤害,每当其他友方角色造成伤害后你回复1点体力',
						qqwz惑敌: '惑敌',
						qqwz惑敌_info: '当友方成为杀得目标时,你令其和你一起摸一张牌,令全体友方回复1点体力',
						qqwz胡笳: '胡笳',
						qqwz胡笳_info: "觉醒技,当其他友方角色即将死亡之前,你令其复活回复X点体力,然后你获得技能'思乡'失去技能'胡笳'(X=你当前的体力)",
						qqwz思乡: '思乡',
						qqwz思乡_info: '你的手牌上限和摸牌数量+X(X=场上群雄势力存活角色数量)',
						qqwz优民: '优民',
						qqwz优民_info: '全场友方摸牌+1,你的回合外,每当你因使用、打出或弃置而失去一张牌时,你可以令全场友方回复1点体力',
						qqwz破阵: '破阵',
						qqwz破阵_info: '每当你造成伤害后若受伤目标有装备牌,你回复1点体力令受伤角色弃置2张装备牌(若不足2张则全弃)',
						qqws诏辅: '诏辅',
						qqws诏辅_info: '你使用的非延迟锦囊牌不能被无懈可击相应并且不限制距离',
						qqwz兵败: '兵败',
						qqwz兵败_info: '回合结束阶段,若你本回合造成的伤害小于4,则你失去1点体力上限,回复1点体力摸2张牌',
						qqwz忠贤: '忠贤',
						qqwz忠贤_info: '回合开始阶段,你可以观看牌堆顶X张牌,然后令全场友方摸X张牌(X为你已损失体力)',
						qqwz焚舰: '焚舰',
						qqwz焚舰_info: '你造成的非火焰伤害后附加1火焰伤害,然后你流失1点体力,你受到火焰伤害后流失1点体力',
						qqwz国母: '国母',
						qqwz国母_info: '友方全体摸牌+1,回复+1',
						qqwz鞬骑: '鞬骑',
						qqwz鞬骑_info: '每当你使用或打出杀后,你回复1点体力.当你造成伤害时若其角色没有装备防御马则此伤害+2,你计算与其他角色距离始终-2',
						qqwz雄狮: '雄狮',
						qqwz雄狮_info: '你对魏国武将造成的伤害+1,你无法被翻面,回合结束阶段,若你的手牌大于或等于5则你流失2点体力增加1点体力上限',
						qqwz鬼神: '鬼神',
						qqwz鬼神_info: '全场友方使用杀指定目标不可被闪抵消,全场友方受到伤害最多为1,全体友方造成伤害后会回复等量的体力',
						qqwz太平: '太平',
						qqwz太平_info: '回合结束阶段,若你没有手牌则令全体友方回复1点体力并令全场敌方武将翻面',
						qqwz玄雷: '玄雷',
						qqwz玄雷_info: '你的黑色牌皆视为闪,每当你在回合外失去或使用一张黑色牌时你回复1点体力,选择一名角色对其造成2点神圣雷电伤害',
						qqwz仙符: '仙符',
						qqwz仙符_info: '你可以扣置一张手牌当一张基本牌或非延时类锦囊牌使用或打出.其他角色依次选择是否质疑.一旦有其他角色质疑则翻开此牌:若为假则此牌作废,若为真,则质疑角色获得技能<咒术>',
						qqwz咒术: '咒术',
						qqwz咒术_info: '若你体力值为1则你失去全部其他技能,你无法质疑仙符,无法回复体力并且手牌上限-2',
						qqwz飞熊: '飞熊',
						qqwz飞熊_info: '你免疫所有属性伤害,回合结束阶段,若你的手牌不小于4则你回复2点体力',
						qqwz骁勇: '骁勇',
						qqwz骁勇_info: '你使用或打出杀额外执行一次效果,当你受到伤害后你摸一张牌,你回复体力时你获得一张装备牌并流失2点体力',
						qqwz百战: '百战',
						qqwz百战_info: '延迟类锦囊无法对你使用,你受到伤害时40%反弹伤害来源等量伤害并令友方全体获得1点护甲',
						qqwz孤鹫: '孤鹫',
						qqwz孤鹫_info: '[锁定技]你没有装备区,你的攻击距离,防御距离,手牌上限+x(x=你当前的体力)',
						qqwz祸乱: '祸乱',
						qqwz祸乱_info: '游戏开始阶段,若你不为主公则你将你的身份强制改为内奸并摸2张牌,群雄武将对你造成的伤害+1,你造成的伤害始终+1',
						qqwz逆击: '逆击',
						qqwz逆击_info: '当你的体力小于或等于3时,你立刻进行一个额外回合,每当一名其他角色回复体力或受到伤害后,你可以立刻使用一张杀',
						qqwz月魂: '月魂',
						qqwz月魂_info: '你的回合开始时你进行一次判定[若结果为红色则你回复1点体力摸一张牌,若结果为黑色则你令全场敌方男性武将受到2点伤害],回合结束阶段你可以获得任意一名男性角色一张手牌',
						qqwz憾世: '憾世',
						qqwz憾世_info: '出牌阶段你可以选择弃一张牌,并选择两名角色,若如此做视为其中一名角色对另一名角色使用一张【决斗】,且此【决斗】不能被【无懈可击】响应,结算后两名角色进入混乱状态;濒死阶段若你拥有手牌,则你弃置全部手牌回复体力至体力上限,然后失去1点体力上限',
						qqwz月尘: '月尘',
						qqwz月尘_info: '当你受到伤害后,你摸X张牌,当你对男性角色造成伤害时你令该伤害+X(X=你损失的体力)',
						qqwz据江: '据江',
						qqwz据江_info: '在你的回合内你免疫一切伤害,当一名敌方角色回合开始时若其手牌与你不等则你对其造成X点伤害(X=你与其手牌的差距)',
						qqwz汉学: '汉学',
						qqwz汉学_info: '全场友方群雄角色的摸牌阶段+1,且跳过弃牌阶段,当一名其他友方角色在回合外失去牌时你令其摸一张牌',
						qqwz鸿德: '鸿德',
						qqwz鸿德_info: '当你回复体力时你可以摸一张牌,当你于回合内获得牌时你令全场友方摸一张牌(每回合限2次),当你于回合外失去牌时,若你的手牌数小于四,你将手牌补至四张',
						qqwz平反: '平反',
						qqwz平反_info: '出牌阶段限X次,你可以令一名装备区里有牌的角色摸一张牌,然后其选择一项:1.令你弃置其装备区里的一张牌并流失1点体力;2.获得其装备区里的所有牌并令你摸2张牌,若如此做,你对其造成z点伤害(X为场上存活的反贼数,Z=你装备区里的牌数),当你的〔杀〕造成伤害后,你可以摸一张牌并视为对被伤害目标发起〔决斗〕',
						qqwz妖道: '妖道',
						qqwz妖道_info: '当你受到伤害时,你可以进行一次判定,若花色与即将对你造成伤害的牌花色相同,则取消本次伤害,令伤害来源翻面,若花色不同则你回复1点体力摸一张牌;你的出牌阶段开始,你可以弃置一张牌,然后依次展示牌堆顶的牌,直到花色相同(最多5张),然后你将这些牌置于你武将上(若你的武将上已经有<咒>标记,你须弃置之),称为<咒>,每有一张<咒>,你的手牌上限+1,当你受到法术伤害时若你的咒不小于1,则你失去1张咒,取消本次伤害摸一张牌',
						qqwz通甲: '通甲',
						qqwz通甲_info: '当你累计使用或打出了4种不同花色的牌后,你于本回合结束后获得一个额外回合并获得技能["鬼道","急攻","渐营","乱战"]直到你的回合结束,回合结束阶段,你可以根据当前体力值补充手牌',
						qqwz狂傲2: '狂傲',
						qqwz狂傲2_info: '',
						qqwz魔姬: '魔姬',
						qqwz魔姬_info: '你的黑色牌不占用手牌上限,每当一名群雄角色摸牌后,你获得其一张牌,当你造成伤害后你令目标翻面且获得技能[黑殇](黑殇:你无法使用或打出任何黑色手牌)若其已翻面则令其流失1点体力,当你造成伤害时若其拥有技能黑殇则令其失去1点体力上限,',
						qqwz黑殇: '黑殇',
						qqwz黑殇_info: '你无法使用,打出和弃置黑色手牌',
						qqwz巧智: '巧智',
						qqwz巧智_info: "每当你使用锦囊牌造成伤害后,你获得一枚'智'标记,你造成的伤害+x,手牌上限-x(x=当前'智'标记的数量)当你受到伤害时若你的'智'标记不小于2,则失去2枚'智'标记免疫本次伤害",
						qqwz谄辞: '谄辞',
						qqwz谄辞_info: "当你首次进入濒死状态时,若你的身份为忠臣,则你将体力回复置体力上限,令主公和你一同失去1点体力上限,然后你失去技能'谄辞'获得技能'谋翼'",
						qqwz谋翼: '谋翼',
						qqwz谋翼_info: '但你造成伤害和受伤时,你可以将场上任意一张牌移至相应位置;当一名其他角色的卡牌指定你为唯一目标并且该卡牌结算之后,若你没有因为该卡牌而受到伤害,你可以弃置一张牌,指定一名其他角色,视为你对其使用了一张相同的卡牌;若你因为此卡牌而受到伤害,则无需弃牌',
						qqwz谋翼1: '谋翼',
						qqwz谋翼1_info: '',
						qqwz祸常: '祸常',
						qqwz祸常_info: '出牌阶段,你可以将1张黑色的手牌置于1名在你攻击范围内的其他角色的武将牌上.到该角色回合开始阶段前进行判定,若为黑色,则跳过该角色的回合并由你进行一个额外的回合.判定之后将该牌置入弃牌堆',
						qqwz凝烈: '凝烈',
						qqwz凝烈_info: '每当你受到伤害时,可弃置一名角色的X张牌(X=本次伤害,且最少为1),你不会被翻面和进入混乱状态且无法成为延迟类锦囊的目标',
						qqwz医国: '医国',
						qqwz医国_info: '当一名敌方角色回复体力时,你进行一次判定,[♥️️:你摸一张牌,令该回复量-1,♠️️:你令其终止本次回复并令其翻面,♣️️:你令其流失1点体力,♦️️:全场友方摸一张牌],你免疫一切除真实伤害外的物理伤害',
						qqwz刮骨: '刮骨',
						qqwz刮骨_info: '出牌阶段,你可以弃置一张牌,令一名损失体力的角色回复体力至体力上限,当其他友方角色在回合外失去牌时,你令其回复1点体力',
						qqwz豪贵: '豪贵',
						qqwz豪贵_info: '你无法被翻面,若其他角色使用的【万箭齐发】在结算完时进入弃牌堆,你立即获得之并回复1点体力',
						qqwz割据: '割据',
						qqwz割据_info: "当你造成伤害时,你进行一次判定,若不为♥️️,伤害加一,否则你回复1点体力,每当你使用或打出一张万箭齐发你获得一枚'据'标记,当你受到伤害时若你拥有'据'此伤害-x(x=当前‘据’的数量)当你使用除万箭齐发之外的牌造成伤害后你失去一枚'据'",
						qqwz圣名: '圣名',
						qqwz圣名_info: '当一名其他角色造成伤害时,该角色和你各摸一张牌;当你造成伤害时,你摸一张牌,你的防御距离+2',
						qqwz释罪: '释罪',
						qqwz释罪_info: '结束阶段,你可以选择一名角色令其摸2张牌.直到你的下回合开始,该角色下一次受到超过1点的伤害时,防止此伤害,然后你跳过下个回合的摸牌阶段',
						qqwz诵书: '诵书',
						qqwz诵书_info: '出牌阶段开始时,你可以将所有手牌交给一名其他角色,然后该角色亮出任意数量的手牌(至少一张),令你选择一项:1.获得其亮出的手牌;2.获得其未亮出的手牌,每当你使用或打出一张基本牌你摸一张牌',
						qqwz请命: '请命',
						qqwz请命_info: '当其他友方角色的回合开始时,若其已受伤,你可以令其回复体力至体力上限并摸3张牌,如此照做你进行一个额外回合,你无法被横置',
						qqwz无责: '无责',
						qqwz无责_info: '你无法流失体力,当其他友方角色即将受到伤害时,你令其取消本次伤害,自己受到1点真实伤害并弃置1张牌',
						qqwz霓凰: '霓凰',
						qqwz霓凰_info: '当你获得牌后,你进行一次判定,若本次判定牌点数大于等于你的体力值,则你回复此牌点数的体力,若小于则你增加2点护甲,你造成的伤害和进攻距离+X(X=场上存活群雄武将的数量)',
						qqwz贤后: '贤后',
						qqwz贤后_info: '当汉末龙裔的体力值发生变化后你令其回复1点体力,体力值小于你的武将对你造成的伤害始终-1,你的拼点点数+5,回合开始时,你的身份若不为忠臣或主公,则你将你的身份变成忠臣',
						qqwz定卦: '定卦',
						qqwz定卦_info: '出牌阶段开始前,你可以亮出牌顶I张牌(I=你当前的手牌数)你获得其中的锦囊牌,其他角色回合结束时你可以观看其手牌,你的判定阶段你可以打出一张牌代替之',
						qqwz诛心: '诛心',
						qqwz诛心_info: '一名敌方角色的结束阶段,若牌堆剩余牌数不大于你体力值的1000倍,则你可以失去2点体力上限,弃置全部手牌,回复3点体力然后依次对其使用牌堆中所有的【杀】(不超过自身体力值的9倍),然后洗牌,你造成的伤害+X(X=你当前的手牌),自身受到的伤害+1',
						qqwz风骨: '风骨',
						qqwz风骨_info: '你反弹受到的2倍物理伤害,反弹等量法术伤害,当一名角色使用万箭齐发时你流失1点体力,你免疫翻面,横置,混乱等负面状态',
						qqwz仁道: '仁道',
						qqwz仁道_info: "当你首次进入濒死阶段时,你回复X点体力失去1点体力上限,获得技能'鸿刹'(X=场上存活吴势力武将)",
						qqwz鸿刹: '鸿刹',
						qqwz鸿刹_info: '所有敌方角色回合结束时需额外弃置一张手牌,敌方吴势力武将受到伤害前额外受到1点伤害,吴势力武将无法对你造成伤害',
						qqwz鳞甲: '鳞甲',
						qqwz鳞甲_info: '你无法成为南蛮入侵,万箭齐发,决斗的目标,你受到伤害始终-3,你的回合结束时你回复5点体力',
						qqwz荒兽: '荒兽',
						qqwz荒兽_info: '你造成的伤害+X(X=你损失的体力),你摸牌时额外摸X张牌,你每使用一张锦囊牌你流失1点体力,当你受到属性伤害时你额外流失5点体力,其他角色使用南蛮入侵时你回复1点体力,其他角色使用万箭齐发时你摸一张牌',
						qqwz陵营: '陵营',
						qqwz陵营_info: '你无法成为延迟类锦囊牌的目标,当你成为红色牌的目标时你回复一点体力,当你成为黑色牌的目标时你增加1点护甲,你使用或打出杀无数量限制',
						qqwz无绝: '无绝',
						qqwz无绝_info: '当你失去最后一张手牌时,你将手牌补至体力上限,当你失去装备区里的牌时,你随即装备一张装备牌',
						qqwz求策: '求策',
						qqwz求策_info: '当你成为其他角色使用锦囊牌的目标时,你获得一张无懈可击并摸一张牌',
						qqwz镇江: '镇江',
						qqwz镇江_info: '当你的回合结束时你回复X点体力并翻面,当友方回合结束时你令其摸X张牌(X=全场势力数量)',
						qqwz失远: '失远',
						qqwz失远_info: '你的回合开始时你失去技能[固本]获得技能[济国],你的回合结束阶段,你失去技能[济国]获得技能[固本]',
						qqwz固本: '固本',
						qqwz固本_info: '当你翻面或流失体力后,你可以弃置一张牌回复全部体力,你每在回合外失去一张牌你摸一张牌',
						qqwz济国: '济国',
						qqwz济国_info: '你使用的装备牌没有效果,你受伤后全场友方回复等量体力,且你可以额外使用一张杀',
						qqwz锐樾: '锐樾',
						qqwz锐樾_info: '你每使用一张装备牌,你随机装备一件装备(每回合限3次),你的手牌上限,摸牌数量,使用杀的次数+x(x=你装备区的牌数)',
						qqwz仇绝: '仇绝',
						qqwz仇绝_info: '当敌方武将死亡时,你获得其全部技能回复其等量体力并摸其体力上限等量的手牌;当你受到伤害时你可以弃置一张牌令本次伤害+1,并令随机敌方受到本次伤害*2的伤害',
						qqwz前尘: '前尘',
						qqwz前尘_info: '你受到和造成的伤害+1,当你成为决斗或杀的目标时:你摸2张杀增加X点护甲或你回复1点体力摸一张闪,(x=你当前损失的体力)',
						qqwz索舟: '索舟',
						qqwz索舟_info: '你的回合开始时,若你处于连环状态你回复1点体力摸一张牌,你处于连环状态时免疫物理伤害且受到的属性伤害+1',
						qqwz锋戮: '锋戮',
						qqwz锋戮_info: '你的回合结束时你令全场敌方进入连环状态,当敌方武将受伤时若其处于连环状态其额外流失2点体力',
						qqwz知隐: '知隐',
						qqwz知隐_info: '你的回合结束时你翻面回复全部体力并摸3张牌进入潜行状态,若你处于翻面状态时你无法被翻面',
						qqwz水镜: '水镜',
						qqwz水镜_info: '你免疫一切除真实伤害外的伤害,当你进入连环状态时你增加1点体力上限随机获得一张基本牌,你无法进入混乱状态,当你使用一张基本牌后你获得一张锦囊牌',
						qqwz明杰: '明杰',
						qqwz明杰_info: '当其他友方角色死亡时,你令其免疫本次死亡并变身为[三分天下](共可触发2次,第二次触发时变身目标改为飞鸾翔凤),友方回合开始前你可以进行一次观星',
						qqwz风袭: '风袭',
						qqwz风袭_info: '每当敌方角色不因此技能失去牌时,你令其弃置一张牌.若其没有手牌,你令其失去1点体力',
						qqwz君佑: '君佑',
						qqwz君佑_info: '当你的体力为1时你获得副将策马扬鞭,然后你失去此技能',
						qqwz卿月: '卿月',
						qqwz卿月_info: '你使用或打出的红色牌额外执行一次效果,当你成为红色牌的目标时你摸一张牌',
						qqwz岢将: '岢将',
						qqwz岢将_info: '当你的回合结束时,若你的手牌数小于你的体力你对全场敌方武将造成1点伤害,若大于你的体力则你回复全部体力',
						qqwz诛敌: '诛敌',
						qqwz诛敌_info: '每当敌方武将回合结束或使用装备牌时,你令其翻面如果其已翻面则受到1点真实伤害',
						qqwz暗予: '暗予',
						qqwz暗予_info: '敌方角色使用或打出黑色牌后你令其流失1点体力(每回合限2次),敌方角色即将回复体力时取消其回复(每回合限1次)',
						qqwz伏杀: '伏杀',
						qqwz伏杀_info: '全场敌方男性无法回复体力,当敌方男性目标回合开始时你令其跳过摸牌阶段',
						qqwz祸福: '祸福',
						qqwz祸福_info: '每当你使用一张牌后你可以进行一次判定,若判定牌花色和使用花色相同则你摸一张牌,当你受到锦囊牌的伤害时你需弃置一张牌',
						qqwz凰龙: '凰龙',
						qqwz凰龙_info: '你的装备区里每有一张牌,你的手牌上限+2,摸牌上限+1,全场魏势力武将无法对你造成伤害',
						qqwz苦读: '苦读',
						qqwz苦读_info: "准备阶段开始时,若当前游戏轮数不小于4,你减少2点体力上限获得技能'贤辞'",
						qqwz激溯: '激溯',
						qqwz激溯_info: '每当你使用一张牌,你本回合的进攻距离+1,当你使用杀指定目标时若其与你的距离不大于1则令其额外受到1点伤害且无法被闪响应',
						qqwz贤辞: '贤辞',
						qqwz贤辞_info: '你使用或打出的牌额外执行一次效果且你会因此失去1点体力,你所造成的伤害+1',
						qqwz肱骨: '肱骨',
						qqwz肱骨_info: '(每回合限一次)每当你摸取不少于两张牌后,你展示摸到的牌,若这些牌类别或花色均相同,你摸X张牌,当你受到伤害前若你拥有手牌且颜色相同则本次伤害-X(X=全场势力数量)',
						qqwz撰古: '撰古',
						qqwz撰古_info: "当你使用黑色牌后,或你成为其他角色使用黑色牌的目标后,你可以将牌堆顶的一张牌置于武将牌上,称为'古',你每有一张'古',手牌上限+1且造成伤害+X(X=当前古的数量除以3向下取整)",
						qqwz博通: '博通',
						qqwz博通_info: '摸牌阶段摸牌或回合结束后,你可以用任意张牌替换等量的<古>,然后若你的<古>包含四种花色,你将所有<古>交给任意名其他角色',
						qqwz德论: '德论',
						qqwz德论_info: '你使用或打出的锦囊牌不可被无懈可击响应,且你无法被翻面和进入混乱状态',
						qqwz微审: '微审',
						qqwz微审_info: '当你造成伤害后,若你已受伤且没有手牌则你进行一个额外回合,当你成为杀得目标时你流失1点体力对目标造成1点真实伤害',
						qqwz斥公: '斥公',
						qqwz斥公_info: '其他友方角色出牌阶段结束时,若其体力值不等于你或其拥有手牌,你与其一起摸2张牌回复1点体力',
					},
				};
				for (const i in QQQ.character) {
					const info = QQQ.character[i];
					info[4].push(`ext:千秋万载/image/${i}.jpg`);
					info[4].push(`die:ext:千秋万载/audio/${i}.mp3`);
				}
				lib.config.all.characters.add('千秋万载');
				lib.config.characters.add('千秋万载');
				lib.translate['千秋万载_character_config'] = `千秋万载`;
				return QQQ;
			});
		},
		package: extensionInfo,
	};
});

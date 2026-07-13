game.import('character', function (lib, game, ui, get, ai, _status) {
	//daice
	var No1_chyz = {
		name: 'No1_chyz', //武将包命名(必填)
		connect: true, //该武将包是否可以联机(必填)
		// connectBanned:['gz_ybsl_018zhangqing_feian','gz_ybslshen_002chenailin_feian','db_ybsp_038tengwu'],
		characterSort: {
			No1_chyz: {
				chyz1: ['yb_yanghuiyu', 'yb_duyu', 'yb_sunshangxiang', 'ybxx_sunshangxiang', 'yb_zhugeliang', 'ybxx_zhugeliang', 'yb_lidian', 'yb_shamoke', 'yb_diaochan', 'yb_beimihu', 'yb_bulianshi', 'yb_caojinyu', 'yb_huangyueying', 'yb_caoxiancaohua', 'yb_sunhanhua', 'yb_guozhao', 'yb_zhaoxiang', 'yb_liufeng'],
				chyz_fsjh: ['ybh_zhongyan', 'QQQ_zhugeguo'],
			},
		},
		character: {
			//武将格式 :
			yb_yanghuiyu: ['female', 'shen', 3, ['ybyhy_xuyin', 'ybyhy_cihua', 'ybyhy_minzeng'], ['jin', 'boss', 'bossallowed']],
			yb_duyu: ['male', 'shen', 4, ['ybdy_qingyu', 'ybdy_zhengwu', 'ybdy_kuangzou'], ['jin', 'boss', 'bossallowed']],
			yb_sunshangxiang: ['female', 'shen', 3, ['ybssx_jibing', 'ybssx_lieyuan'], ['wu', 'boss', 'bossallowed']],
			ybxx_sunshangxiang: ['female', 'shen', 3, ['ybssx_jibing', 'ybssx_lieyuanxx'], ['wu', 'boss', 'bossallowed']],
			yb_zhugeliang: ['male', 'shen', 3, ['ybzgl_zhenhu', 'ybzgl_dongxu', 'ybzgl_qizhu', 'ybzgl_shiyan'], ['shu', 'boss', 'bossallowed']],
			ybxx_zhugeliang: ['male', 'shen', 3, ['ybzgl_zhenhu', 'ybzgl_dongxu', 'ybzgl_qizhu', 'ybzgl_shiyanxx'], ['shu', 'boss', 'bossallowed']],
			yb_lidian: ['male', 'shen', 3, ['ybld_chenxun', 'ybld_minde'], ['wei', 'boss', 'bossallowed']],
			yb_shamoke: ['male', 'shen', 4, ['ybsmk_shangying'], []],
			yb_diaochan: ['female', 'shen', 3, ['ybdc_ruofu', 'ybdc_sulian', 'ybdc_qilu', 'ybdc_ziman'], ['qun', 'boss', 'bossallowed']],
			yb_beimihu: ['female', 'shen', 3, ['ybbmh_wuzhi', 'ybbmh_huanchao', 'ybbmh_chizhangp', 'ybbmh_lushou'], ['qun', 'boss', 'bossallowed']],
			yb_bulianshi: ['female', 'shen', 3, ['ybbls_qiangong', 'ybbls_yuanya'], ['wu', 'boss', 'bossallowed']],
			yb_caojinyu: ['female', 'shen', 3, ['ybcjy_bashu', 'ybcjy_duijing', 'ybcjy_lvzhi'], ['wei', 'boss', 'bossallowed']],
			yb_huangyueying: ['female', 'shen', 3, ['ybhyy_guishi', 'ybhyy_lancai', 'ybhyy_bingxue'], ['qun', 'boss', 'bossallowed']],
			yb_caoxiancaohua: ['female', 'shen', 3, ['ybcxch_lingxi', 'ybcxch_gongsheng', 'ybcxch_lianyu', 'ybcxch_xixuan'], ['boss', 'bossallowed', 'des:曹宪(生卒年不详),女,沛国谯县(今安徽省亳州市)人.东汉末年历史人物,汉献帝刘协嫔妃,魏武帝曹操女儿.建安十八年,嫁给汉献帝刘协,受封为贵人.黄初元年(220年),兄弟曹丕称帝后,汉献帝成为山阳公,不知所终. 曹华,东汉末年人物,曹操之女,为汉献帝妃嫔.建安十八年(213年),曹操进为魏公,把曹宪、曹节、曹华三个女儿,一齐都送给汉献帝刘协做了妃子,皆封为夫人,聘以束帛五万匹,年龄尚小者在魏公国待年长而聘. 曹宪和曹华都是曹操之女,刘协嫔妃.曹操进魏公时把曹宪、曹节、曹华三女嫁与汉献帝刘协,曹丕称帝后封刘协山阳公.传闻山阳公薨后,<捧土为陵,陵侧两树相呼,灵杉玉树苍然而立,仿佛帝魂妃魄>.她们一来以树为托,成为后世慑抑僭叛的标志;二来又与曹节守玺骂兄所不同,代表着褪去政治婚姻色彩<去国还家>后重获新生的女性形象.']],
			yb_sunhanhua: ['female', 'shen', 3, ['ybshh_yuniao', 'ybshh_qingsi', 'ybshh_xianyin'], ['wu', 'boss', 'bossallowed']],
			yb_guozhao: ['female', 'shen', 3, ['ybgz_gongshu', 'ybgz_shujian'], ['wei', 'boss', 'bossallowed']],
			yb_zhaoxiang: ['female', 'shen', 3, ['ybzx_huashuang', 'ybzx_ningao'], ['shu', 'boss', 'bossallowed']],
			yb_liufeng: ['male', 'shen', 4, ['yblf_zhenzhi'], ['shu', 'boss', 'bossallowed']],
			ybh_zhongyan: ['female', 'jin', 3, ['ybhzy_xiasi', 'ybhzy_rongzhi', 'ybhzy_hongya', 'ybhzy_fuxin'], ['boss', 'bossallowed']],
			QQQ_zhugeguo: ['female', 'shu', 3, ['QQQ_xuji', 'QQQ_jingdu'], ['boss', 'bossallowed']],
			//'武将名字':['性别','势力',体力,[技能],[]] //格式内每一样东西都不能缺少,否则无法导入该武将包及其以下内容
		}, //武将(必填)
		skill: {
			//------------------------
			ybyhy_xuyin: {
				audio: 'huirong',
				forced: true,
				global: 'ybyhy_xuyin6',
				group: ['ybyhy_xuyin1', 'ybyhy_xuyin2', 'ybyhy_xuyin3'],
			},
			ybyhy_xuyin1: {
				audio: 'ybyhy_xuyin',
				trigger: {
					player: 'recoverBegin',
				},
				forced: true,
				logTarget: 'source',
				forced: true,
				filter(event, player, card) {
					if (!event.source || !event.card) return false;
					if (event.card.name == 'tao') return true;
					if (event.card.name == 'taoyuan') return true;
					return false;
				},
				content() {
					trigger.source.addMark('ybyhy_xuyin4');
				},
			},
			ybyhy_xuyin2: {
				audio: 'ybyhy_xuyin',
				forced: true,
				trigger: {
					player: 'damageBegin4',
				},
				logTarget: 'source',
				filter(event, player, card) {
					if (event.source) return true;
				},
				content() {
					trigger.source.addMark('ybyhy_xuyin5');
				},
			},
			ybyhy_xuyin3: {
				audio: 'ybyhy_xuyin',
				forced: true,
				trigger: {
					global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'changeHp', 'turnOverEnd', 'linkEnd'],
				},
				filter(event, player, name) {
					if (name == 'linkEnd') return true;
					if (name == 'turnOverEnd') return true;
					if (name == 'changeHp') return event.player.hp == 0;
					return game.hasPlayer(function (current) {
						var evt = event.getl(current);
						return evt && evt.hs && evt.hs.length && current.countCards('h') == 0;
					});
				},
				content() {
					player.draw();
				},
				ai: {
					threaten: 1,
					noh: true,
				},
			},
			ybyhy_xuyin4: {
				audio: 'ybyhy_xuyin',
				forced: true,
				mark: true,
				marktext: '惠',
				intro: {
					name: '惠',
					content: 'mark',
				},
			},
			ybyhy_xuyin5: {
				audio: 'ybyhy_xuyin',
				forced: true,
				mark: true,
				marktext: '狭',
				intro: {
					name: '狭',
					content: 'mark',
				},
			},
			ybyhy_xuyin6: {
				audio: 'ybyhy_xuyin',
				forced: true,
				trigger: {
					player: ['phaseUseBefore', 'phaseDiscardBefore'],
				},
				filter(event, player, name) {
					if (player.countMark('ybyhy_xuyin4') > 0 && name != 'phaseDiscardBefore') return true;
					if (player.countMark('ybyhy_xuyin5') > 0) return true;
					return false;
				},
				content() {
					'step 0';
					var list = [];
					if (player.countMark('ybyhy_xuyin4') > 0) list.push('惠标记');
					if (player.countMark('ybyhy_xuyin5') > 0) list.push('狭标记');
					event.list = list;
					('step 1');
					if (event.triggername == 'phaseDiscardBefore') {
						event.goto(4);
					} else player.chooseControl(event.list);
					('step 2');
					if (result.control == '惠标记') {
						player.draw(player.countMark('ybyhy_xuyin4'));
						event.list.remove('惠标记');
					}
					if (result.control == '狭标记') {
						player.chooseToDiscard('he', player.countMark('ybyhy_xuyin5'), true);
						event.list.remove('狭标记');
					}
					('step 3');
					if (event.list.length) {
						event.goto(1);
					} else {
						event.finish();
					}
					('step 4');
					player.loseHp(player.countMark('ybyhy_xuyin5'));
				},
			},
			ybyhy_cihua: {
				audio: 'ciwei',
				trigger: {
					player: ['recoverEnd', 'damageEnd'],
				},
				prompt2: '当你受到伤害或回复体力后,你可以先弃置三张手牌,选择弃置场上一张「惠」标记或一张「狭」标记,令一名角色翻面,可以选择与另一角色各弃置任意张牌,再摸等量的牌',
				filter(event, player) {
					if (player.countCards('h') < 3) return false;
					return true;
				},
				content() {
					'step 0';
					player.chooseToDiscard(3, 'h', true);
					('step 1');
					if (game.hasPlayer((current) => current.hasMark('ybyhy_xuyin4') || current.hasMark('ybyhy_xuyin5'))) {
						player
							.chooseTarget(true, function (card, player, target) {
								return target.hasMark('ybyhy_xuyin4') || target.hasMark('ybyhy_xuyin5');
							})
							.set('prompt2', '请选择一名有<惠>或<狭>的角色');
					}
					('step 2');
					if (result.targets[0]) {
						event.target = result.targets[0];
						var list = [];
						if (result.targets[0].hasMark('ybyhy_xuyin4')) list.push('惠');
						if (result.targets[0].hasMark('ybyhy_xuyin5')) list.push('狭');
						player.chooseControl(list);
					} else {
						event.goto(5);
					}
					('step 3');
					if (result.control == '惠') {
						event.target.removeMark('ybyhy_xuyin4');
					}
					if (result.control == '狭') {
						event.target.removeMark('ybyhy_xuyin5');
					}
					player.chooseTarget(true).set('prompt2', '请选择令一名角色翻面').ai = function (target) {
						if (target.hasSkillTag('noturn')) return 0;
						var player = _status.event.player;
						if (get.attitude(_status.event.player, target) == 0) return 0;
						if (get.attitude(_status.event.player, target) > 0) {
							if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
							return 0;
						} else {
							if (target.classList.contains('turnedover')) return -1;
							return 1 + target.countCards('h');
						}
					};
					('step 4');
					if (result.targets[0]) {
						result.targets[0].turnOver();
					}
					('step 5');
					delete result.targets;
					delete event.target;
					('step 6');
					player.chooseTarget(lib.filter.notMe).set('prompt2', '你可以选择一名其他角色,与其各自制衡任意张牌,也可以独自制衡').ai = function (target) {
						var player = _status.event.player;
						if (get.attitude(_status.event.player, target) == 0) return 0;
						if (get.attitude(_status.event.player, target) > 0) {
							return target.countCards('h') * 2;
						} else {
							return -1;
						}
					};
					('step 7');
					if (result.targets) event.target = result.targets[0];
					player.chooseCard('he', [0, Infinity]).set('ai', function (card) {
						return 6 - get.value(card);
					});
					('step 8');
					player.ybyhy_zhiheng(result.cards);
					if (!event.target) {
						event.finish();
					}
					('step 9');
					event.target.chooseCard('he', [0, Infinity]).set('ai', function (card) {
						return 6 - get.value(card);
					});
					('step 10');
					event.target.ybyhy_zhiheng(result.cards);
				},
				group: 'ybyhy_cihua_cannt',
				subSkill: {
					cannt: {
						trigger: {
							global: 'useCard',
						},
						filter(event, player) {
							if (event.player != player && event.player.isPhaseUsing()) {
								return event.player.getHistory('useCard').indexOf(event) == player.hp - 1 && ['basic', 'trick'].includes(get.type(event.card));
							}
						},
						check(event, player) {
							return get.attitude(player, event.player) < 0;
						},
						content() {
							'step 0';
							trigger.cancel();
							if (trigger.cards) player.gain(trigger.cards, 'gain2');
						},
					},
				},
			},
			ybyhy_minzeng: {
				audio: 'caiyuan',
				global: 'ybyhy_minzeng_minzeng',
				trigger: {
					player: ['phaseAfter'],
				},
				nobracket: true,
				prompt2: '你的回合结束时,可将「悯」「憎」分别移至另一名角色的武将牌上',
				content() {
					'step 0';
					event.goto(2);
					('step 1');
					if (result.targets[0]) result.targets[0].addMark('ybyhy_minzeng_zeng');
					event.finish();
					('step 2');
					if (
						game.hasPlayer(function (target) {
							return target.countMark('ybyhy_minzeng_min') > 0;
						})
					)
						player
							.chooseTarget(2, '是否转移<悯>标记？', function (card, player, target) {
								if (ui.selected.targets.length) return !target.hasMark('ybyhy_minzeng_min');
								return target.countMark('ybyhy_minzeng_min') > 0;
							})
							.set('complexTarget', true)
							.set('complexSelect', true)
							.set('targetprompt', ['移走标记', '获得标记'])
							.set('ai', function (target) {
								var player = _status.event.player;
								if (!ui.selected.targets.length) {
									return -get.attitude(player, target);
								}
								return get.attitude(player, target);
							});
					else event.goto(4);
					('step 3');
					if (result.bool) {
						var targets = result.targets;
						player.line2(targets);
						var gain = targets[0].countMark('ybyhy_minzeng_min');
						if (gain) {
							targets[0].removeMark('ybyhy_minzeng_min', gain);
							targets[1].addMark('ybyhy_minzeng_min', gain);
						}
					}
					('step 4');
					if (
						game.hasPlayer(function (target) {
							return target.countMark('ybyhy_minzeng_zeng') > 0;
						})
					)
						player
							.chooseTarget(2, '是否转移<憎>标记？', function (card, player, target) {
								if (ui.selected.targets.length) return !target.hasMark('ybyhy_minzeng_zeng');
								return target.countMark('ybyhy_minzeng_zeng') > 0;
							})
							.set('complexTarget', true)
							.set('complexSelect', true)
							.set('targetprompt', ['移走标记', '获得标记'])
							.set('ai', function (target) {
								var player = _status.event.player;
								if (!ui.selected.targets.length) {
									return get.attitude(player, target);
								}
								return -get.attitude(player, target);
							});
					else event.finish();
					('step 5');
					if (result.bool) {
						var targets = result.targets;
						player.line2(targets);
						var gain = targets[0].countMark('ybyhy_minzeng_zeng');
						if (gain) {
							targets[0].removeMark('ybyhy_minzeng_zeng', gain);
							targets[1].addMark('ybyhy_minzeng_zeng', gain);
						}
					}
				},
				group: ['ybyhy_minzeng_minyi', 'ybyhy_minzeng_zengyi', 'ybyhy_minzeng_init'],
				subSkill: {
					min: {
						mark: true,
						marktext: '悯',
						intro: {
							content: '回合开始前回复一点体力并摸一张牌,回合结束后摸两张牌,手牌上限加二',
						},
					},
					zeng: {
						mark: true,
						marktext: '憎',
						intro: {
							content: '回合开始前流失一点体力,手牌上限减二',
						},
					},
				},
			},
			ybyhy_minzeng_minzeng: {
				audio: 'ybyhy_minzeng',
				trigger: {
					player: ['phaseBegin', 'phaseAfter'],
				},
				charlotte: true,
				forced: true,
				filter(event, player) {
					return player.countMark('ybyhy_minzeng_min') > 0 || player.countMark('ybyhy_minzeng_zeng') > 0;
				},
				nobracket: true,
				prompt2: '拥有「悯」的角色,回合开始前回复1点体力,摸1张牌,回合结束后摸2张牌,回合手牌上限＋2.拥有「憎」的角色,回合开始前流失1点体力,手牌上限-2.',
				content() {
					if (event.triggername == 'phaseBegin') {
						if (player.countMark('ybyhy_minzeng_min') > 0) {
							player.recover(2);
							player.draw();
						}
						if (player.countMark('ybyhy_minzeng_zeng') > 0) {
							player.loseHp();
						}
					} else {
						if (player.countMark('ybyhy_minzeng_min') > 0) {
							player.draw(2);
						} else {
							event.finish();
						}
					}
				},
				mod: {
					maxHandcard(player, num) {
						return num + 2 * player.countMark('ybyhy_minzeng_min') - 2 * player.countMark('ybyhy_minzeng_zeng');
					},
				},
			},
			ybyhy_minzeng_minyi: {
				audio: 'ybyhy_minzeng',
				trigger: {
					global: ['phaseAfter', 'die'],
				},
				prompt2: '拥有「悯」的角色下一回合结束或阵亡后,「悯」须移回你的武将牌上',
				forced: true,
				filter(event, player) {
					if (event.player != player) return event.player.hasMark('ybyhy_minzeng_min');
				},
				nobracket: true,
				charlotte: true,
				content() {
					trigger.player.removeMark('ybyhy_minzeng_min');
					player.addMark('ybyhy_minzeng_min');
				},
			},
			ybyhy_minzeng_zengyi: {
				audio: 'ybyhy_minzeng',
				trigger: {
					global: ['die'],
				},
				prompt2: '拥有「憎」的角色阵亡后,你可选择将「憎」移至另一名角色上,若此时你放弃移动「憎」,「憎」消失移出游戏,你回复2点体力并选择是否获得其一个技能(觉醒技、限定技、主公技除外)',
				filter(event, player) {
					if (event.player != player) return event.player.hasMark('ybyhy_minzeng_zeng');
				},
				nobracket: true,
				charlotte: true,
				forced: true,
				content() {
					'step 0';
					trigger.player.removeMark('ybyhy_minzeng_zeng');
					player.chooseTarget().set('prompt', '是否转移<憎>标记？').set('prompt2', '如放弃转移,则此标记移出游戏,你回复2点体力并选择是否获得其一个技能(觉醒技、限定技、主公技除外).');
					('step 1');
					if (result.targets?.length) {
						result.targets[0].addMark('ybyhy_minzeng_zeng');
						event.finish();
					} else {
						player.recover(2);
					}
					('step 2');
					var list = [];
					var listm = [];
					var listv = [];
					if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
					else listm = lib.character[trigger.player.name][3];
					if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
					listm = listm.concat(listv);
					var func = function (skill) {
						var info = get.info(skill);
						if (info.charlotte || info.zhuSkill || (info.unique && !info.limited) || info.juexingji || info.dutySkill || info.hiddenSkill) return false;
						return true;
					};
					for (var i = 0; i < listm.length; i++) {
						if (func(listm[i])) list.add(listm[i]);
					}
					if (list.length) {
						player
							.chooseControl(list, 'cancel2')
							.set('prompt', get.prompt('ybyhy_minzeng_zengyi'))
							.set('prompt2', get.translation('ybyhy_minzeng_zengyi_info'))
							.set('ai', function () {
								return list.randomGet();
							});
					} else event.finish();
					('step 3');
					if (result.control && result.control != 'cancel2') {
						player.popup(result.control, 'thunder');
						game.log(player, '获得了技能', `#g【${get.translation(result.control)}】`);
						player.addAdditionalSkill('ybyhy_minzeng', [result.control]);
					}
				},
			},
			ybyhy_minzeng_init: {
				audio: 'ybyhy_minzeng',
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				filter(event, player) {
					return event.name != 'phase' || game.phaseNumber == 0;
				},
				nobracket: true,
				prompt2: '游戏开始时,你可获得一张「悯」标记与一张「憎」标记,「悯」标记置于你的武将牌上,并选择一名角色获得「憎」标记',
				content() {
					'step 0';
					player.addMark('ybyhy_minzeng_min');
					player.chooseTarget(true).set('ai', function (target) {
						var player = _status.event.player;
						if (get.attitude(_status.event.player, target) <= 0) return true;
					});
					('step 1');
					if (result.targets[0]) result.targets[0].addMark('ybyhy_minzeng_zeng');
					event.finish();
				},
			},
			ybdy_qingyu: {
				audio: 'sanchen',
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				forced: true,
				filter(event, player) {
					return (event.name != 'phase' || game.phaseNumber == 0) && !player.storage.ybdy_qingyu_wuku;
				},
				content() {
					'step 0';
					player.storage.ybdy_qingyu_wuku = lib.inpile.filter(function (i) {
						return get.type2(i, false) == 'trick' || get.type2(i, false) == 'basic';
					});
					player.storage.ybdy_qingyu_light = [];
					player.storage.ybdy_zhengwu_length;
				},
				mark: true,
				marktext: '库',
				intro: {
					name: '武库',
					content(storage, player, skill) {
						var str = '';
						var list = player.storage.ybdy_qingyu_wuku;
						var list2 = player.storage.ybdy_qingyu_light;
						if (player.storage.ybdy_zhengwu_length) {
							var list3 = player.storage.ybdy_zhengwu_length;
						} else {
							list3 = [];
						}
						str += '';
						for (var j = 0; j < list.length; j++) {
							if (j != 0) str += '、';
							if (list2.includes(list[j])) {
								if (list3.includes(list[j])) {
									str += `<span style='text-decoration: line-through;'><span class=yellowtext>${get.translation(list[j])}</span></span>`;
								} else {
									str += `<span class=yellowtext>${get.translation(list[j])}</span>`;
								}
							} else {
								str += get.translation(list[j]);
							}
						}
						return str;
					},
				},
				group: ['ybdy_qingyu_light', 'ybdy_qingyu_use1', 'ybdy_qingyu_use2'],
				subSkill: {
					light: {
						audio: 'sanchen',
						enable: 'phaseUse',
						filter(event, player, card) {
							if (player.countMark('ybdy_qingyu_mark') >= player.hp) return false;
							return (
								player.countCards('h', function (card) {
									return get.type2(card) == 'basic';
								}) > 0
							);
						},
						filterCard(card, player) {
							var type = get.type2(card);
							if (type != 'basic') return false;
							return true;
						},
						prepare(cards, player) {
							player.$throw(cards, 1000);
							game.log(player, '将', cards, '置入了弃牌堆');
						},
						check(card) {
							return 8 - get.value(card);
						},
						discard: false,
						loseTo: 'discardPile',
						visible: true,
						delay: 0.5,
						async content(event, trigger, player) {
							//QQQ
							player.draw();
							if (!player.hasSkill('ybdy_qingyu_mark')) {
								player.addTempSkill('ybdy_qingyu_mark');
							}
							player.addMark('ybdy_qingyu_mark', 1, false);
							var list1 = player.storage.ybdy_qingyu_light;
							var list2 = player.storage.ybdy_qingyu_wuku.filter((i) => !list1.includes(i));
							if (list2.length) {
								var dialog = [get.prompt('ybdy_qingyu_light')],
									list1 = player.storage.ybdy_qingyu_light,
									list2 = player.storage.ybdy_qingyu_wuku.filter(function (i) {
										return !list1.includes(i);
									});
								if (list1.length) {
									dialog.push(`<div class='text center'>武库已点亮</div>`);
									dialog.push([list1, 'vcard']);
								}
								if (list2.length) {
									dialog.push(`<div class='text center'>武库未点亮</div>`);
									dialog.push([list2, 'vcard']);
								}
								const result = await player
									.chooseButton(dialog)
									.set('ai', (button) => player.getUseValue({ name: button.link[2] }) * (1 + player.countCards('hs', button.link[2]))) //QQQ//在主动技内部调用get.effect,但没有trigger
									.set('filterButton', function (button) {
										var player = _status.event.player;
										if (player.storage.ybdy_qingyu_light.includes(button.link[2])) return false;
										return true;
									})
									.forResult();
								if (result.links?.length) {
									var name = result.links[0][2];
									player.storage.ybdy_qingyu_light.push(name);
									game.log(player, '点亮了【武库】中的', '#y' + get.translation(name));
									if (player.storage.ybdy_qingyu_light.length >= 6 && !player.hasSkill('ybdy_poshi')) {
										player.addSkill('ybdy_poshi');
										game.log(player, '获得了技能', '#yybdy_poshi');
										player.flashAvatar('ybdy_qingyu', 'ybdy_poshi');
									}
								}
							}
						},
						ai: {
							basic: {
								order: 1,
							},
							order: 4,
							result: {
								player: 1,
							},
						},
					},
					use1: {
						audio: 'sanchen',
						trigger: {
							player: 'useCard',
						},
						filter(event, player) {
							if (player != _status.currentPhase) return false; //不为自己回合返回否
							if (get.type2(event.card) != 'trick') return false; //不为锦囊牌返回否
							var list = player.storage.ybdy_qingyu_light;
							return list.includes(event.card.name);
						},
						prompt2: '当你<span class=yellowtext>回合内使用一张非转化的锦囊牌</span>或回合外使用、打出的一张非转化的基本牌时,若此牌名在<武库>中已被点亮,你可以摸一张牌.',
						content() {
							player.draw();
						},
					},
					use2: {
						audio: 'sanchen',
						trigger: {
							player: ['useCard', 'respond'],
						},
						filter(event, player) {
							if (player == _status.currentPhase) return false; //为自己回合返回否
							var list = player.storage.ybdy_qingyu_light;
							if (event.name.indexOf('lose') != 0) return list.includes(event.card.name) && get.type(event.card) == 'basic';
						},
						prompt2: '当你回合内使用一张非转化的锦囊牌或<span class=yellowtext>回合外使用、打出的一张非转化的基本牌</span>时,若此牌名在<武库>中已被点亮,你可以摸一张牌.',
						content() {
							player.draw();
						},
					},
					mark: {},
				},
			},
			ybdy_zhengwu: {
				audio: 'zhaotao',
				trigger: {
					player: ['phaseBefore', 'damageEnd'],
				},
				filter(event, player) {
					if (event.name == 'phaseBefore') return true; //为自己回合返回否
					return player != _status.currentPhase; //为自己回合返回否
				},
				content() {
					'step 0';
					if (event.triggername == 'damageEnd') {
						event.count = Math.min(trigger.num, 9);
					} else {
						event.count = 1;
					}
					('step 1');
					event.count--;
					player
						.chooseTarget([1, 3], get.prompt2('每当你回合开始前或回合外受到一点伤害后,你可令至多3名角色依次摸3张牌并弃1张牌,再令至多3名角色进入横置状态'), function (card, player, target) {
							return true; //target.countCards('h')<Math.min(target.maxHp,5);
						})
						.set('ai', function (target) {
							var att = get.attitude(_status.event.player, target);
							if (target.hasSkillTag('nogain')) att /= 6;
							return att / 3;
						});
					('step 2');
					if (result.bool) {
						for (var i = 0; i < result.targets.length; i++) {
							result.targets[i].draw(3);
							result.targets[i].chooseToDiscard('he', true);
							player.addMark('ybdy_zhengwu', 1, false);
						}
					} else {
						event.finish();
					}
					('step 3');
					delete result.targets;
					('step 4');
					player
						.chooseTarget([1, 3], get.prompt2('每当你回合开始前或回合外受到一点伤害后,你可令至多3名角色依次摸3张牌并弃1张牌,再令至多3名角色进入横置状态'), function (card, player, target) {
							return true; //target.countCards('h')<Math.min(target.maxHp,5);
						})
						.set('ai', function (target) {
							var att = get.attitude(_status.event.player, target);
							return -att / 3;
						});
					('step 5');
					if (result.bool) {
						for (var i = 0; i < result.targets.length; i++) {
							result.targets[i].link(true);
						}
					}
					if (event.count) event.goto(1);
				},
				group: ['ybdy_zhengwu_use1'],
				subSkill: {
					use1: {
						audio: 'zhaotao',
						enable: 'chooseToUse',
						filter(event, player) {
							if (player.countCards('hes') < 1) return false; //牌数小于1不能用
							var max = 1;
							if (player.storage.ybdy_zhengwu_plus == true) max = 3;
							if (player.countMark('ybdy_zhengwu2') >= max) return false;
							var evt = lib.filter.filterCard;
							if (event.filterCard) evt = event.filterCard;
							for (var i of player.storage.ybdy_qingyu_light) {
								if (evt({ name: i }, player, event)) return true;
							}
							return false;
						},
						chooseButton: {
							dialog(event, player) {
								var list = [];
								for (var i of player.storage.ybdy_qingyu_light) {
									var card = { name: i };
									if (!player.storage.ybdy_zhengwu_length) {
										list.push(['整武', '', i]);
										if (i == 'sha') {
											for (var j of lib.inpile_nature) {
												card.nature = j;
												list.push(['整武', '', i, j]);
											}
										}
									} else {
										if (!player.storage.ybdy_zhengwu_length.includes(i)) list.push(['整武', '', i]);
										if (i == 'sha') {
											for (var j of lib.inpile_nature) {
												card.nature = j;
												if (!player.storage.ybdy_zhengwu_length.includes(i)) list.push(['整武', '', i, j]);
											}
										}
									}
								}
								return ui.create.dialog('整武', [list, 'vcard']);
							},
							filter(button, player) {
								return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
							},
							check(button) {
								if (_status.event.parent.type != 'phase') return 1;
								var player = _status.event.player;
								if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
								return player.getUseValue({
									name: button.link[2],
									nature: button.link[3],
								});
							},
							backup(links, player) {
								return {
									filterCard: true,
									selectCard: 1,
									complexCard: true,
									position: 'hes',
									audio: 'ybdy_zhengwu',
									popname: true,
									viewAs: { name: links[0][2], nature: links[0][3] },
									precontent() {
										if (!player.hasSkill('ybdy_zhengwu_length')) {
											player.addTempSkill('ybdy_zhengwu_length');
										}
										if (!player.storage.ybdy_zhengwu_length) {
											player.storage.ybdy_zhengwu_length = [];
										}
										player.storage.ybdy_zhengwu_length.push(event.result.card.name);
										if (!player.hasSkill('ybdy_zhengwu2')) {
											player.addTempSkill('ybdy_zhengwu2');
										}
										player.addMark('ybdy_zhengwu', 1, false);
										player.addMark('ybdy_zhengwu2', 1, false);
									},
								};
							},
							prompt(links, player) {
								return '将一张手牌当作' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
							},
						},
						hiddenCard(player, name) {
							return player.countCards('hes') >= 1;
						},
					},
					length: {},
				},
			},
			ybdy_zhengwu2: {},
			ybdy_kuangzou: {
				audio: 'dinghan',
				derivation: ['ybdy_poshi'],
				forced: true,
				juexingji: true,
				trigger: {
					player: 'phaseUseBefore',
				},
				filter(e, p) {
					return p.countMark('ybdy_zhengwu') >= 6;
				},
				content() {
					'step 0';
					player.awakenSkill('ybdy_kuangzou');
					player.storage.ybdy_kuangzou = true;
					('step 1');
					player.loseMaxHp();
					player.storage.ybdy_zhengwu_plus = true;
				},
			},
			ybdy_poshi: {
				audio: 'pozhu',
				trigger: {
					player: 'phaseEnd',
				},
				forced: true,
				content() {
					'step 0';
					var i = 0;
					var list = [];
					while (i++ < 2) {
						var card = get.cardPile(function (card) {
							if (get.type(card) != 'equip') return false;
							return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
						});
						if (card) list.push(card);
					}
					if (!list.length) {
						event.goto(2);
						return;
					}
					event.list = list;
					player.gain(event.list, 'gain2');
					('step 1');
					var card = event.list.shift();
					if (player.getCards('h').includes(card)) {
						player.$give(card, player, false);
						player.equip(card);
					}
					if (event.list.length) event.redo();
					('step 2');
					var list = game.filterPlayer(function (current) {
						return current.isLinked();
					});
					if (list.length) {
						var target = list.randomGet();
						player.line(target, 'green');
						target.damage('fire', 'nocard');
					} else {
						event.finish();
					}
				},
				group: 'ybdy_poshi_sha',
				subSkill: {
					sha: {
						audio: 'pozhu',
						trigger: {
							player: 'useCardToPlayered',
							target: 'useCardToTargeted',
						},
						filter(event, player, card) {
							if (event.source == event.target) return false;
							return event.card && event.card.name == 'sha';
						},
						forced: true,
						content() {
							if (event.triggername == 'useCardToPlayered') {
								trigger.target.chooseToDiscard(2, true);
							} else {
								player.draw(2);
							}
						},
					},
				},
			},
			ybssx_jibing: {
				audio: 'xiaoji',
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					var evt = event.getl(player);
					return evt && evt.player == player && evt.es && evt.es.length;
				},
				mark: true,
				marktext: '戎',
				intro: {
					name: '戎装',
					content: 'expansion',
					markcount: 'expansion',
				},
				forced: true,
				content() {
					'step 0';
					event.count = trigger.getl(player).es.length;
					('step 1');
					var num = 3 * event.count;
					event.cards = get.cards(num);
					game.cardsGotoOrdering(event.cards);
					player.showCards(event.cards, get.translation(player) + `展示了牌堆顶的${get.translation(num)}张牌并置入戎装队列.`);
					('step 2');
					var list = [];
					for (var j = event.cards.length; j > 0; j--) {
						list.push(event.cards[j - 1]);
						// player.addToExpansion(j,player,'giveAuto').gaintag.add('ybssx_jibing');
					}
					player.addToExpansion(list, player, 'giveAuto').gaintag.add('ybssx_jibing');
					event.list = [];
					('step 3');
					event.cards = player.getExpansions('ybssx_jibing');
					event.num = player.getExpansions('ybssx_jibing').length;
					('step 4');
					event.num--;
					('step 5');
					var i = event.num;
					if (i) {
						if (get.type(i) == 'equip') {
							player.useCard(i, true, player);
						}
					}
					('step 6');
					if (event.num <= 0) {
						player.$throw(player.getExpansions('ybssx_jibing'), 1500);
						player.gain(player.getExpansions('ybssx_jibing'), 'gain2');
					} else {
						event.goto(4);
					}
				},
				ai: {
					noe: true,
					reverseEquip: true,
					effect: {
						target(card, player, target, current) {
							if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
						},
					},
				},
				group: ['ybssx_jibing_eq', 'ybssx_jibing_en'],
				subSkill: {
					eq: {
						audio: 'xiaoji',
						trigger: {
							player: ['phaseBefore', 'phaseAfter'],
						},
						forced: true,
						content() {
							'step 0';
							var i = 0;
							var list = [];
							while (i++ < 1) {
								var card = get.cardPile(function (card) {
									if (get.type(card) != 'equip') return false;
									return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
								});
								if (card) list.push(card);
							}
							event.list = list;
							player.gain(event.list, 'gain2');
							('step 1');
							var card = event.list.shift();
							if (player.getCards('h').includes(card)) {
								player.$give(card, player, false);
								player.equip(card);
							}
							if (event.list.length) event.redo();
						},
					},
					en: {
						audio: 'xiaoji',
						trigger: {
							global: 'phaseBefore',
							player: 'enterGame',
						},
						forced: true,
						filter(event, player) {
							return event.name != 'phase' || game.phaseNumber == 0;
						},
						content() {
							'step 0';
							var i = 0;
							var list = [];
							while (i++ < 2) {
								var card = get.cardPile(function (card) {
									if (get.type(card) != 'equip') return false;
									return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
								});
								if (card) list.push(card);
							}
							event.list = list;
							player.gain(event.list, 'gain2');
							('step 1');
							var card = event.list.shift();
							if (player.getCards('h').includes(card)) {
								player.$give(card, player, false);
								player.equip(card);
							}
							if (event.list.length) event.redo();
						},
					},
				},
			},
			ybssx_lieyuan: {
				audio: 'jieyin',
				trigger: {
					player: ['damageAfter', 'phaseUseBefore'],
				},
				filter(event, player) {
					return player.countCards('ej') > 0;
				},
				forced: true,
				group: 'ybssx_lieyuan_jieyin',
				subSkill: {
					jieyin: {
						inherit: 'ybssx_jieyin',
					},
				},
				content() {
					'step 0';
					var list = [];
					if (player.countCards('e') > 0) {
						list.push('装备区');
						list.push(player.getCards('e'));
					}
					if (player.countCards('j') > 0) {
						list.push('判定区');
						list.push(player.getCards('j'));
					}
					// game.log(list)
					player.chooseButton(1, list).set('prompt2', '先选择你区域内的一张牌,<br>看好了再选,别选错!!!!!');
					// player.chooseCard('ej').set('prompt2','先选择你区域内的一张牌,<br>看好了再选,别选错!!!!!');
					('step 1');
					if (result.links?.length) {
						event.card = result.links[0];
						// var name=result.links;
						// var name2=result.links[0].viewAs;
						// var type=get.type(name2,'trick');
						// game.log(event.card,'#y'+'card');
						// game.log(name,'#y'+'name');
						// game.log(name2,'#y'+'name2');
						// game.log(type,'#y'+'type');
						player
							.chooseTarget(function (card, player, target) {
								if (get.position(event.card) == 'e') {
									if (target.isMin()) return false;
									var type = get.subtype(event.card);
									return player != target && target.isEmpty(type);
								} else if (event.card.viewAs) {
									return target.canAddJudge({ name: event.card.viewAs }, [event.card]);
								} else {
									return target.canAddJudge(event.card);
								}
							})
							.set('prompt2', '再选择一名能接纳此牌的角色,<br>上一步选错的话,这里只能将错就错,或者取消技能.');
					} else {
						event.finish();
					}
					('step 2');
					if (result.targets?.length) {
						event.target = result.targets[0];
						var link = event.card;
						// if(get.type(event.card.viewAs)=='equip') result.targets[0].equip(event.card);
						// else result.targets[0].addJudge(event.card,{name:event.card.viewAs});
						if (get.position(link) == 'e') {
							event.target.equip(link);
						} else if (link.viewAs) {
							event.target.addJudge({ name: link.viewAs }, [link]);
						} else {
							event.target.addJudge(link);
						}
					} else {
						event.finish();
					}
					('step 3');
					player.recover();
					player
						.chooseControl('是', '否')
						.set('prompt', `是否令${get.translation(event.target)}回复一点体力并摸两张牌？`)
						.set('ai', function () {
							var att = get.attitude(_status.event.player, event.target);
							if (att < 0) return '是';
							return '否';
						});
					('step 4');
					if (result.control == '是' && event.target.isAlive()) {
						event.target.recover();
						event.target.draw(2);
					}
				},
			},
			ybssx_jieyin: {
				audio: 'jieyin',
				enable: 'phaseUse',
				filterCard: true,
				selectCard: 2,
				check(card) {
					var player = get.owner(card);
					if (player.countCards('h') > player.hp) return 8 - get.value(card);
					if (player.hp < player.maxHp) return 6 - get.value(card);
					return 4 - get.value(card);
				},
				filterTarget(card, player, target) {
					// if(!target.hasSex('male')) return false;
					if (target.hp >= target.maxHp) return false;
					if (target == player) return false;
					return true;
				},
				content() {
					player.recover();
					target.recover();
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
			ybssx_lieyuanxx: {
				audio: 'jieyin',
				trigger: {
					player: ['damageAfter', 'phaseUseBefore', 'phaseUseAfter'],
				},
				filter(event, player) {
					return player.countCards('ej') > 0;
				},
				group: 'ybssx_lieyuanxx_jieyin',
				subSkill: {
					jieyin: {
						inherit: 'ybssx_jieyin',
					},
				},
				content() {
					'step 0';
					player.chooseCardTarget({
						// filterCard:function(card){
						// return get.type(card)=='equip';
						// },
						position: 'he',
						filterTarget(card, player, target) {
							return target != player;
						},
						ai1(card) {
							return 6 - get.value(card);
						},
						ai2(target) {
							return get.attitude(_status.event.player, target) - 3;
						},
						prompt: get.prompt2('ybssx_lieyuanxx'),
					});
					('step 1');
					if (result.targets?.length) {
						var thisTarget = result.targets[0];
						var thisCard = result.cards[0];
						if (get.type(thisCard) == 'equip') {
							thisTarget.equip(thisCard);
						} else {
							player.discard(thisCard);
						}
						event.target = result.targets[0];
					}
					('step 2');
					if (!event.target) event.finish();
					('step 3');
					player.recover();
					player
						.chooseControl('是', '否')
						.set('prompt', `是否令${get.translation(event.target)}回复一点体力并摸两张牌？`)
						.set('ai', function () {
							var att = get.attitude(_status.event.player, event.target);
							if (att < 0) return '是';
							return '否';
						});
					('step 4');
					if (result.control == '是' && event.target.isAlive()) {
						event.target.recover();
						event.target.draw(2);
					}
				},
			},
			ybzgl_zhenhu: {
				audio: 'bazhen',
				trigger: {
					player: 'damageBegin3',
				},
				content() {
					'step 0';
					player.judge('阵护', function (card) {
						if (get.color(card) == 'red') return 2;
						if (get.color(card) == 'black') return 1;
						return 0;
					});
					('step 1');
					if (result.card) {
						player.gain(result.card, 'gain2');
						switch (result.judge) {
							case 2:
								trigger.cancel();
								break;
							case 1:
								player.moveCard();
								break;
							case 0:
								event.finish();
								break;
						}
					}
					// if(result.judge){
					// }
				},
			},
			ybzgl_dongxu: {
				mod: {
					aiValue(player, card, num) {
						if (card.name != 'wuxie' && get.color(card) != 'black') return;
						var cards = player.getCards('hs', function (card) {
							return card.name == 'wuxie' || get.color(card) == 'black';
						});
						cards.sort(function (a, b) {
							return (b.name == 'wuxie' ? 1 : 2) - (a.name == 'wuxie' ? 1 : 2);
						});
						var geti = function () {
							if (cards.includes(card)) {
								return cards.indexOf(card);
							}
							return cards.length;
						};
						if (card.name == 'wuxie') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
						return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
					},
					aiUseful() {
						return lib.skill.ybzgl_dongxu.mod.aiValue.apply(this, arguments);
					},
				},
				filter(event, player) {
					if (player == _status.currentPhase) return false;
					return true;
				},
				audio: 'kanpo',
				enable: 'chooseToUse',
				filterCard(card) {
					return get.color(card) == 'black';
				},
				viewAsFilter(player) {
					return player.countCards('hes', { color: 'black' }) > 0;
				},
				viewAs: {
					name: 'wuxie',
				},
				position: 'hes',
				prompt: '将一张黑色牌当无懈可击使用',
				check(card) {
					var tri = _status.event.getTrigger();
					if (tri && tri.card && tri.card.name == 'chiling') return -1;
					return 8 - get.value(card);
				},
				precontent() {
					player.addTempSkill('ybzgl_dongxu_2');
				},
				threaten: 1.2,
				group: ['ybzgl_dongxu_link'],
				subSkill: {
					2: {
						trigger: {
							player: ['useCardAfter'],
						},
						forced: true,
						charlotte: true,
						popup: false,
						filter(event, player) {
							return event.skill == 'ybzgl_dongxu';
						},
						content() {
							'step 0';
							player
								.chooseTarget(1)
								.set('prompt2', '是否令一名角色摸一张牌？')
								.set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								});
							('step 1');
							if (result.targets?.length) {
								result.targets[0].draw();
							}
						},
					},
					link: {
						audio: 'kanpo',
						trigger: {
							global: 'phaseAfter',
						},
						filter(event, player) {
							return (
								player != event.player &&
								player.getHistory('lose', function (evt) {
									var ll = [];
									ll.add(evt.hs);
									ll.add(evt.es);
									for (var i of ll) {
										if (get.color(i) == 'black') return true;
									}
									// for(var j of evt.es){
									//	 if(get.color(i)=='black') return true;
									// }
								}).length
							);
						},
						forced: true,
						content() {
							'step 0';
							var num = player.getHistory('lose', function (evt) {
								var ll = [];
								ll.add(evt.hs);
								ll.add(evt.es);
								for (var i of ll) {
									if (get.color(i) == 'black') return true;
								}
								// for(var j of evt.es){
								//	 if(get.color(i)=='black') return true;
								// }
							}).length;
							player
								.chooseTarget([1, num])
								.set('ai', function (target) {
									// if(target.damageHp())
									return get.attitude(_status.event.player, target);
								})
								.set('prompt2', '是否选择一' + (num > 1 ? '至' + get.cnNumber(num) : '') + '名其他角色？<br>你可令选择的目标各回复一点体力张牌并复原,或进入横置状态.');
							('step 1');
							if (result.bool) {
								var list = ['回复体力并复原', '进入横置状态'];
								player.chooseControl(list, true).set('prompt2', `请选择令${result.targets}回复体力并复原,或进入横置状态`);
								event.targets = result.targets;
							} else event.finish();
							('step 2');
							if (result.index == 0) {
								for (var i of event.targets) {
									i.recover();
									i.turnOver(false);
									i.link(false);
								}
							} else {
								for (var i of event.targets) {
									i.link(true);
								}
							}
						},
					},
				},
				ai: {
					basic: {
						useful: [6, 4, 3],
						value: [6, 4, 3],
					},
					result: {
						player: 1,
					},
					expose: 0.2,
				},
			},
			ybzgl_qizhu: {
				audio: 'qixing',
				trigger: {
					player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
				},
				forced: true,
				content() {
					'step 0';
					var num = 7;
					var cards = get.cards(num);
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove();
					next.set('list', [['牌堆顶', cards], ['牌堆底']]);
					next.set('prompt', '观星:点击将牌移动到牌堆顶或牌堆底<br>(这里我本来可以改成祈祝的,但我故意不改,因为只有保留一部分观星,才能让你知道,这个技能本质上是观星)');
					next.processAI = function (list) {
						var cards = list[0][1],
							player = _status.event.player;
						var target = _status.event.getTrigger().name == 'phaseZhunbei' ? player : player.next;
						var att = get.sgn(get.attitude(player, target));
						const top = [],
							bottom = cards;
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
						return [top, bottom];
					};
					('step 1');
					var top = result.moved[0];
					var bottom = result.moved[1];
					top.reverse();
					for (var i = 0; i < top.length; i++) {
						ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
					}
					for (var i = 0; i < bottom.length; i++) {
						ui.cardPile.appendChild(bottom[i]);
					}
					// if(event.triggername=='phaseZhunbeiBegin'&&top.length==0){
					// player.addTempSkill('reguanxing_on');
					// }
					player.popup(get.cnNumber(top.length) + `上${get.cnNumber(bottom.length)}下`);
					game.log(player, `将${get.cnNumber(top.length)}张牌置于牌堆顶`);
					game.updateRoundNumber();
				},
				mark: true,
				marktext: '风',
				intro: {
					name: '祈祝',
					content: 'expansion',
					markcount: 'expansion',
				},
				group: 'ybzgl_qizhu_wind',
				subSkill: {
					wind: {
						trigger: {
							player: 'phaseUseBefore',
						},
						forced: true,
						content() {
							'step 0';
							player.draw();
							('step 1');
							if (player.countCards('h') > 0) {
								player.chooseCard('h', 1, true, '将一张手牌置于武将牌上称为风').set('ai', function (card) {
									return 6 - get.value(card);
								});
							} else event.finish();
							('step 2');
							if (result.bool) {
								// player.markSkill('ybzgl_qizhu');
								player.addToExpansion(result.cards[0], player, 'give', 'log').gaintag.add('ybzgl_qizhu');
							}
						},
					},
				},
			},
			ybzgl_shiyan: {
				audio: 'huoji',
				usable: 4,
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					// game.log(event.card)
					if (!player.getExpansions('ybzgl_qizhu') || player.getExpansions('ybzgl_qizhu').length == 0) {
						// game.log('6')
						return false;
					}
					// if(event.cards.length!=1) {
					// game.log('牌的数量不为1,必定🃏')
					// return false;
					// }
					// if(!player.isPhaseUsing()) return false;
					var cards = player.getExpansions('ybzgl_qizhu');
					// game.log(player.getExpansions('ybzgl_qizhu'))
					// game.log('2')
					var suit = [];
					if (!player.isPhaseUsing()) return false;
					for (var i of cards) {
						if (i.suit == event.card.suit) return true;
					}
					return false;
				},
				check(event, player) {
					if (
						game.countPlayer(function (current) {
							return current != player && get.attitude(player, current) < 0;
						}) > 0
					)
						return true;
					return false;
				},
				prompt2(event, player) {
					var str = '是否摸一张牌,并对一名角色造成';
					var cards = player.getExpansions('ybzgl_qizhu');
					var suit = [];
					for (var i of cards) {
						if (!suit.includes(i.suit)) suit.push(i.suit);
					}
					str += get.cnNumber(suit.length);
					str += '点火焰伤害';
					return str;
				},
				content() {
					'step 0';
					player.draw();
					var str = '是否对一名角色造成';
					var cards = player.getExpansions('ybzgl_qizhu');
					var suit = [];
					for (var i of cards) {
						if (!suit.includes(i.suit)) suit.push(i.suit);
					}
					event.num = suit.length;
					str += get.cnNumber(suit.length);
					str += '点火焰伤害';
					player.chooseTarget(1, str).set('ai', function (target) {
						return -get.attitude(_status.event.player, target);
					});
					('step 1');
					if (result.targets?.length) {
						result.targets[0].damage('fire', 'nocard', event.num);
					}
				},
				group: 'ybzgl_shiyan_dis',
				subSkill: {
					dis: {
						audio: 'huoji',
						forced: true,
						trigger: {
							player: 'phaseUseAfter',
						},
						filter(event, player, card) {
							var cards = player.getExpansions('ybzgl_qizhu');
							var suit = [];
							for (var i of cards) {
								if (!suit.includes(i.suit)) suit.push(i.suit);
							}
							return cards.length >= 4 || suit.length >= 4;
						},
						content() {
							'step 0';
							var cards = player.getExpansions('ybzgl_qizhu');
							var suit = [];
							for (var i of cards) {
								if (!suit.includes(i.suit)) suit.push(i.suit);
							}
							event.num = suit.length;
							('step 1');
							var str = `是否选择至多${get.cnNumber(event.num)}名角色,对其依次造成${get.cnNumber(event.num)}点火焰伤害？`;
							player.loseToDiscardpile(player.getExpansions('ybzgl_qizhu'));
							player.chooseTarget([0, event.num], str).set('ai', function (target) {
								return -get.attitude(_status.event.player, target);
							});
							('step 2');
							if (result.targets?.length) {
								for (var i of result.targets) {
									i.damage('fire', 'nocard', event.num);
								}
							}
						},
					},
				},
			},
			ybzgl_shiyanxx: {
				audio: 'huoji',
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					if (!player.getExpansions('ybzgl_qizhu') || player.getExpansions('ybzgl_qizhu').length == 0) {
						return false;
					}
					var cards = player.getExpansions('ybzgl_qizhu');
					var suit = [];
					if (!player.isPhaseUsing()) return false;
					for (var j of cards) {
						suit.add(j.suit);
					}
					if (player.countMark('ybzgl_shiyanxx_mark') >= suit.length) return false;
					for (var i of cards) {
						if (i.suit == event.card.suit) return true;
					}
					return false;
				},
				check(event, player) {
					if (
						game.countPlayer(function (current) {
							return current != player && get.attitude(player, current) < 0;
						}) > 0
					)
						return true;
					return false;
				},
				prompt2(event, player) {
					var str = '是否摸一张牌,并对至多';
					var cards = player.getExpansions('ybzgl_qizhu');
					var suit = [];
					for (var i of cards) {
						if (!suit.includes(i.suit)) suit.push(i.suit);
					}
					str += get.cnNumber(suit.length);
					str += '名角色造成1点火焰伤害';
					return str;
				},
				content() {
					'step 0';
					player.draw();
					player.addTempSkill('ybzgl_shiyanxx_mark', 'phaseUseAfter');
					player.addMark('ybzgl_shiyanxx_mark', false);
					var str = '是否对至多';
					var cards = player.getExpansions('ybzgl_qizhu');
					var suit = [];
					for (var i of cards) {
						if (!suit.includes(i.suit)) suit.push(i.suit);
					}
					event.num = suit.length;
					str += get.cnNumber(suit.length);
					str += '名角色造成1点火焰伤害';
					player.chooseTarget([1, event.num], str).set('ai', function (target) {
						return -get.attitude(_status.event.player, target);
					});
					('step 1');
					if (result.bool) {
						for (var i of result.targets) {
							i.damage('fire', 'nocard', 1);
						}
					}
				},
				group: 'ybzgl_shiyan_dis',
				subSkill: {
					dis: {
						audio: 'huoji',
						forced: true,
						trigger: {
							player: 'phaseUseAfter',
						},
						filter(event, player, card) {
							var cards = player.getExpansions('ybzgl_qizhu');
							var suit = [];
							for (var i of cards) {
								if (!suit.includes(i.suit)) suit.push(i.suit);
							}
							return cards.length >= 4 || suit.length >= 4;
						},
						content() {
							'step 0';
							var cards = player.getExpansions('ybzgl_qizhu');
							var suit = [];
							for (var i of cards) {
								if (!suit.includes(i.suit)) suit.push(i.suit);
							}
							event.num = suit.length;
							('step 1');
							var str = `是否选择至多${get.cnNumber(event.num)}名角色,对其依次造成两点火焰伤害？`;
							player.loseToDiscardpile(player.getExpansions('ybzgl_qizhu'));
							player.chooseTarget([0, event.num], str).set('ai', function (target) {
								return -get.attitude(_status.event.player, target);
							});
							('step 2');
							if (result.targets?.length) {
								for (var i of result.targets) {
									i.damage('fire', 'nocard', 2);
								}
							}
						},
					},
					mark: {
						charlotte: true,
					},
				},
			},
			ybld_chenxun: {
				audio: 'xunxun',
				trigger: {
					player: 'phaseDrawBegin1',
				},
				preHidden: true,
				forced: true,
				mark: true,
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				content() {
					'step 0';
					trigger.changeToZero();
					event.tar = player.storage.ybld_chenxun || player;
					var skills = event.tar.getSkills(null, false, false).filter(function (i) {
						var info = get.info(i);
						return info && !info.charlotte;
					});
					var cards = get.cards(skills.length + 2);
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove('忱恂:获得其中两张牌', true);
					next.set('list', [[`置于${get.translation(event.tar)}武将牌上`, cards], ['获得']]);
					next.set('filterMove', function (from, to, moved) {
						if (moved[0].includes(from.link)) {
							if (typeof to == 'number') {
								if (to == 1) {
									if (moved[1].length >= 2) return false;
								}
								return true;
							}
						}
						return true;
					});
					next.set('filterOk', function (moved) {
						return moved[1].length == 2;
					});
					next.set('processAI', function (list) {
						var cards = list[0][1].slice(0).sort(function (a, b) {
							return get.value(b) - get.value(a);
						});
						return [cards, cards.splice(2, 2)];
					});
					('step 1');
					var top = result.moved[1];
					var bottom = result.moved[0];
					top.reverse();
					player.gain(top, 'gain2');
					event.tar.addToExpansion(bottom, player, 'giveAuto').gaintag.add('ybld_chenxun');
					game.updateRoundNumber();
				},
				group: 'ybld_chenxun_after',
				subSkill: {
					after: {
						trigger: {
							player: 'phaseAfter',
						},
						audio: 'xunxun',
						forced: true,
						filter(event, player) {
							if (player.getExpansions('ybld_chenxun').length) return true;
							return false;
						},
						content() {
							'step 0';
							var cards = player.getExpansions('ybld_chenxun');
							// player.chooseCardButton(cards,true,'选择要交出的牌');
							event.card = cards;
							('step 1');
							// if(result.bool){
							player
								.chooseTarget()
								.set('ai', function (target) {
									return target == player;
								})
								.set('prompt', '请选择将牌交给一名角色,令其执行一个额外的摸牌阶段和出牌阶段<br>若其未拥有技能〖忱恂〗,则你回复所有体力并将手牌补至体力上限,令其获得〖忱恂〗直到本次额外的摸牌阶段和出牌阶段结束.');
							// event.card=result.links;
							// }
							// else{event.finish();}
							('step 2');
							if (result.targets?.length) {
								var tar = result.targets[0];
								tar.gain(event.card, 'gain2');
								if (!tar.hasSkill('ybld_chenxun')) {
									player.recover(player.getDamagedHp());
									var numb = player.countCards('h');
									var numc = player.maxHp - numb;
									if (numc > 0) {
										player.draw(numc);
									}
									tar.storage.ybld_chenxun = player;
									tar.addTempSkill('ybld_chenxun', { player: 'phaseUseAfter' });
								}
								var next = tar.phaseDraw();
								event.next.remove(next);
								trigger.next.push(next);
								var next = tar.phaseUse();
								event.next.remove(next);
								trigger.next.push(next);
							} else {
								event.finish();
							}
						},
					},
				},
			},
			ybld_minde: {
				audio: 'wangxi',
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
				},
				filter(event, player) {
					if (event._notrigger.includes(event.player)) return false;
					return event.num && event.source && event.player && event.player.isAlive() && event.source.isAlive() && event.source != event.player;
				},
				check(event, player) {
					if (player.isPhaseUsing()) return true;
					if (event.player == player) return get.attitude(player, event.source) > -3;
					return get.attitude(player, event.player) > -3;
				},
				logTarget(event, player) {
					if (event.player == player) return event.source;
					return event.player;
				},
				subSkill: {
					mark: {
						charlotte: true,
					},
				},
				preHidden: true,
				content() {
					'step 0';
					event.count = Math.min(trigger.num, 9);
					event.target = lib.skill.ybld_minde.logTarget(trigger, player);
					var skills = player.getSkills(null, false, false).filter(function (i) {
						var info = get.info(i);
						return info && !info.charlotte;
					});
					event.num = skills.length > 4 ? 2 : 3;
					if (player.hasSkill('ybld_minde_mark')) event.num = 2;
					('step 1');
					player.addTempSkill('ybld_minde_mark');
					player.draw(event.num);
					event.count--;
					('step 2');
					var cards = player.getCards('he');
					if (cards.length && target.isAlive()) {
						if (cards.length == 1) event._result = { bool: true, cards: cards };
						else
							player.chooseCard('he', `忘隙:交给${get.translation(target)}任意张牌(至少一张)<br>(故意保留的忘隙)`, [1, Infinity], true).set('ai', function (card) {
								if (ui.selected.cards.length >= 1) return -get.value(card);
								return 100 - get.useful(card);
							});
					} else event.goto(4);
					('step 3');
					if (result.bool) {
						player.give(result.cards, target);
						if (result.cards.length < 2) {
							event.goto(6);
						}
					}
					('step 4');
					var list = [];
					if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
					if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
					if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
					list.push('cancel2');
					player.chooseControl(list).set('prompt2', '请选择想要获得的技能');
					('step 5');
					if (result.control != 'cancel2') {
						player.addTempSkill(result.control, { player: 'phaseAfter' });
					}
					('step 6');
					if (event.count && target.isAlive()) {
						player.chooseBool(get.prompt2('ybld_minde', target));
					} else event.finish();
					('step 7');
					if (result.bool) {
						event.goto(1);
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
				},
			},
			ybsmk_shangying: {
				audio: 'ext:沧海遗珠/audio/skill:2',
				trigger: {
					player: ['phaseBefore', 'changeHp', 'useCardAfter', 'respondAfter', 'loseAfter'],
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				filter(event, player) {
					return player.storage.ybsmk_shangying != player.getAttackRange();
				},
				init(player) {
					player.storage.ybsmk_shangying = player.getAttackRange();
					if (game.online) return;
					player.removeAdditionalSkill('ybsmk_shangying');
					var list = [];
					var skill = ['olyajiao', 'oltiaoxin', 'olpaoxiao', 'retieji', 'new_rewusheng', 'sbliegong'];
					if (player.storage.ybsmk_shangying >= 9) {
						list = skill;
					} else {
						for (var i = 1; i <= 5; i++) {
							if (player.storage.ybsmk_shangying >= i) {
								list.push(skill[i - 1]);
							} else break;
						}
					}
					if (list.length) {
						player.addAdditionalSkill('ybsmk_shangying', list);
					}
				},
				derivation: ['oltiaoxin', 'olpaoxiao', 'xinshensu'],
				content() {
					player.removeAdditionalSkill('ybsmk_shangying');
					player.storage.ybsmk_shangying = player.getAttackRange();
					var list = [];
					var skill = ['olyajiao', 'oltiaoxin', 'olpaoxiao', 'retieji', 'new_rewusheng', 'sbliegong'];
					if (player.storage.ybsmk_shangying >= 9) {
						list = skill;
					} else {
						for (var i = 1; i <= 5; i++) {
							if (player.storage.ybsmk_shangying >= i) {
								list.push(skill[i - 1]);
							} else break;
						}
					}
					if (list.length) {
						player.addAdditionalSkill('ybsmk_shangying', list);
					}
				},
				group: ['ybsmk_shangying_1', 'ybsmk_shangying_2', 'ybsmk_shangying_3'],
				subSkill: {
					1: {
						trigger: {
							player: ['useCard', 'respond'],
						},
						audio: 'ybsmk_shangying',
						forced: true,
						filter(event, player) {
							return player.getHistory('useCard').length + player.getHistory('respond').length == player.getAttackRange();
						},
						content() {
							var num = player.getHistory('useCard').length + player.getHistory('respond').length;
							player.draw(num);
							player.addTempSkill('ybsmk_shangying1');
							player.storage.ybsmk_shangying1 = 1;
						},
					},
					2: {
						audio: 'ybsmk_shangying',
						trigger: {
							player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
						},
						filter(event, player) {
							for (var i of game.players) {
								if (i.getEquip(1)) return true;
							}
							return false;
						},
						forced: true,
						content() {
							'step 0';
							player.chooseTarget(true, get.prompt('ybsmk_shangying'), '获得场上一张武器牌', 1, function (card, player, target) {
								return target.getEquip(1);
							});
							('step 1');
							if (result.bool && result.targets[0].getEquip(1)) {
								var target = result.targets[0];
								player.gain(target.getEquip(1), target, 'give', 'bySelf');
							}
						},
					},
					3: {
						trigger: {
							global: 'phaseJieshuBegin',
						},
						audio: 'ybsmk_shangying',
						forced: true,
						filter(event, player) {
							if (_status.currentPhase == player) return false;
							var num = 0;
							player.getHistory('lose', function (evt) {
								num += evt.cards2.length;
							});
							return num >= player.getAttackRange();
						},
						content() {
							player.draw(player.getAttackRange());
						},
					},
				},
			},
			ybsmk_shangying1: {
				mark: true,
				marktext: '赏',
				trigger: {
					player: ['useCard', 'respond'],
				},
				forced: true,
				popup: false,
				content() {
					var num = player.getHistory('useCard').length + player.getHistory('respond').length;
					player.storage.ybsmk_shangying1 = num;
				},
				intro: {
					name: '赏应',
				},
			},
			ybdc_ruofu: {
				audio: 'biyue',
				trigger: {
					player: 'phaseEnd',
				},
				subSkill: {
					mark: {
						mark: true,
						intro: {
							content: 'expansion',
							markcount: 'expansion',
						},
					},
				},
				forced: true,
				content() {
					'step 0';
					event.count = 0;
					('step 1');
					if (
						game.countPlayer(function (current) {
							return current != player && !current.getExpansions('ybdc_ruofu_mark').length;
						})
					) {
						var str = `本次第${get.cnNumber(event.count + 1)}次发动<br>摸一张牌,并将一张牌置于其他角色上称为<若芙>`;
						player.chooseBool(get.prompt('ybdc_ruofu', player), str).set('ai', () => game.players.some((q) => q.isEnemiesOf(player) && !q.getExpansions('ybdc_ruofu_mark').length)); //QQQ
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						event.count++;
						player.draw();
						player.chooseCardTarget({
							forced: true,
							position: 'he',
							filterTarget(card, player, target) {
								return target != player && target.getExpansions('ybdc_ruofu_mark').length < 1;
							},
							ai1(card) {
								return 7 - get.value(card);
							},
							ai2(target) {
								return -get.attitude(_status.event.player, target);
							},
							prompt: get.prompt2('ybdc_ruofu'),
						});
					}
					('step 3');
					if (result.targets?.length) {
						var target = result.targets[0];
						player.line(target, 'green');
						target.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('ybdc_ruofu_mark');
						if (event.count < 3) {
							event.goto(1);
						}
					}
				},
				ai: {
					expose: 0.4,
				},
			},
			ybdc_sulian: {
				audio: 'huoxin',
				forced: true,
				global: ['ybdc_sulian_lose'],
				subSkill: {
					lose: {
						audio: 'huoxin',
						trigger: {
							player: 'phaseBegin',
						},
						filter(event, player) {
							return player.getExpansions('ybdc_ruofu_mark').length;
						},
						forced: true,
						content() {
							player.loseHp();
						},
					},
				},
				trigger: {
					global: 'damageEnd',
				},
				filter(event, player) {
					if (!event.source || !event.source.getExpansions('ybdc_ruofu_mark').length) return false;
					if (!event.player.isAlive() || !event.player.getExpansions('ybdc_ruofu_mark').length) return false;
					return true;
				},
				content() {
					trigger.player.loseToDiscardpile(trigger.player.getExpansions('ybdc_ruofu_mark'));
					if (trigger.card && trigger.card.name == 'sha') {
						player.draw(2);
						player.recover();
					} else {
						player.draw();
					}
				},
			},
			ybdc_qilu: {
				audio: 'meihun',
				forced: true,
				trigger: {
					target: 'useCardToBegin',
				},
				filter(event, player) {
					// if(event.targets&&event.targets.length>1) return false;
					// if(event.card&&event.player!=player) return true;
					if (event.card) return true;
				},
				content() {
					player.draw();
					if (trigger.player.getExpansions('ybdc_ruofu_mark').length) {
						trigger.player.loseHp();
						trigger.player.chooseToDiscard(4 - player.hp, 'he', true);
					}
				},
			},
			ybdc_ziman: {
				audio: 'lijian',
				forced: true,
				trigger: {
					player: 'phaseBegin',
				},
				forced: true,
				init(player) {
					player.storage.ybdc_ziman = [];
				},
				ybtogo(list) {
					var list2 = [];
					for (var i of list) {
						list2.push(get.translation(i));
					}
					return list2;
				},
				mark: true,
				intro: {
					content: '$的下个回合交由你控制.',
				},
				content() {
					'step 0';
					event.count = 0;
					event.list = [];
					('step 1');
					if (
						game.countPlayer(function (current) {
							return current.getExpansions('ybdc_ruofu_mark').length;
						})
					) {
						var str = `本次第${get.cnNumber(event.count + 1)}次发动<br>收回一名角色的<若芙>牌`;
						if (event.count == 0) str += '本次收回,你回复一点体力';
						if (event.count == 1) str += '本次收回,令本次选择的角色流失1点体力';
						if (event.count >= 2) str += '本次收回,你与本次选择的角色互换位置且其下个回合改为由你操控.';
						//当你收入第1/2/3张<若芙>标记时,你回复1点体力/令本次选择的角色流失1点体力/你与本次选择的角色互换位置且其下个回合改为由你操控.
						player
							.chooseTarget(true, function (card, player, target) {
								return target.getExpansions('ybdc_ruofu_mark').length;
							})
							.set('prompt2', str);
						event.goto(2);
					} else {
						event.finish();
					}
					('step 2');
					if (result.targets?.length) {
						var target = result.targets[0];
						event.list.push(target);
						player.gain(target.getExpansions('ybdc_ruofu_mark'), 'gain2');
						switch (event.count) {
							case 0:
								player.recover();
								break;
							case 1:
								target.loseHp();
								break;
							case 2:
								{
									game.broadcastAll(
										function (target1, target2) {
											game.swapSeat(target1, target2);
										},
										player,
										target
									);
									player.storage.ybdc_ziman.push(target);
								}
								break;
						}
					}
					('step 3');
					if (event.count < 2) {
						event.count++;
						event.goto(1);
					} else {
						player.chooseBool(`是否令${lib.skill.ybdc_ziman.ybtogo(event.list)}进行谋离间？`);
					}
					('step 4');
					if (result.bool) {
						player.ybdc_sblijian(event.list);
					}
					event.count = 0;
					event.list = [];
					event.goto(1);
				},
			},
			ybbmh_wuzhi: {
				audio: 'zongkui',
				trigger: {
					global: ['damageBegin4', 'turnOverEnd'],
				},
				filter(event, player) {
					return (
						game.countPlayer(function (current) {
							//计算游戏中的每个玩家
							return !current.hasMark('ybbmh_wuzhi_xian') && !current.hasMark('ybbmh_wuzhi_shuai');
						}) > 0
					);
				},
				init(player) {
					lib.translate.ybbmh_wuzhi_xian = '巫治·献';
					lib.translate.ybbmh_wuzhi_shuai = '巫治·率';
				},
				forced: true,
				content() {
					'step 0';
					var str = '是否令一名没有<巫治>标记的角色获得';
					if (event.triggername == 'turnOverEnd') {
						if (trigger.player.isTurnedOver()) {
							event.wuzhi = 1;
							str += '【献】';
						} else {
							event.wuzhi = 2;
							str += '【率】';
						}
					} else if (event.triggername == 'damageBegin4') {
						if (!trigger.nature) {
							event.wuzhi = 1;
							str += '【献】';
						} else {
							event.wuzhi = 2;
							str += '【率】';
						}
					}
					event.str = str;
					('step 1');
					// var list=game.countPlayer(function(current){
					// //计算游戏中的每个玩家
					//	 return !current.storage.ybbmh_wuzhi_mark;
					// });
					player
						.chooseTarget(function (card, player, target) {
							return !target.hasMark('ybbmh_wuzhi_xian') && !target.hasMark('ybbmh_wuzhi_shuai');
						})
						.set('prompt', event.str)
						.set('ai', function (target) {
							var att = get.attitude(player, target);
							if (event.wuzhi == 2) return -att;
							return att;
						});
					('step 2');
					if (result.bool) {
						if (event.wuzhi == 1) {
							player.line(result.targets[0], 'wood');
							result.targets[0].markSkill('ybbmh_wuzhi_xian');
							result.targets[0].addMark('ybbmh_wuzhi_xian');
							trigger.trigger('ybbmh_wuxian');
						}
						if (event.wuzhi == 2) {
							player.line(result.targets[0], 'fire');
							result.targets[0].markSkill('ybbmh_wuzhi_shuai');
							result.targets[0].addMark('ybbmh_wuzhi_shuai');
							trigger.trigger('ybbmh_wushuai');
						}
					}
				},
				global: ['ybbmh_wuzhi_xian', 'ybbmh_wuzhi_shuai'],
				subSkill: {
					xian: {
						marktext: '献',
						nobracket: true,
						intro: {
							content: '巫治·献',
						},
					},
					shuai: {
						marktext: '率',
						nobracket: true,
						intro: {
							content: '巫治·率',
						},
					},
				},
			},
			ybbmh_huanchao: {
				audio: 'baijia',
				limited: true,
				enable: 'phaseUse',
				init(player) {
					player.addSkill('ybbmh_huanchao_ben');
					player.storage.ybbmh_huanchao_ben = true;
				},
				filter(event, player) {
					if (player.storage.ybbmh_huanchao_ben == true) var huanchao = 'xian';
					else var huanchao = 'shuai';
					return (
						game.countPlayer(function (current) {
							return current.hasMark('ybbmh_wuzhi_' + huanchao);
						}) > 0
					);
				},
				filterCard(card) {
					var type = get.type(card);
					if (Array.isArray(ui.selected.cards))
						for (var i of ui.selected.cards) {
							if (get.type(i) == type) return false;
						}
					return true;
				},
				complexCard: true,
				position: 'he',
				selectCard: 3,
				line: 'water',
				content() {
					'step 0';
					player.addMark('ybbmh_huanchao_mark', 1, false);
					player.awakenSkill('ybbmh_huanchao');
					('step 1');
					event.num = player.countMark('ybbmh_huanchao_mark');
					event.list = [];
					event.huanchao = 'shuai';
					if (player.storage.ybbmh_huanchao_ben == true) {
						event.huanchao = 'xian';
					}
					game.filterPlayer(function (current) {
						var skill = 'ybbmh_wuzhi_' + event.huanchao;
						if (current.hasMark(skill)) {
							// game.log('skill')
							if (event.huanchao == 'xian') {
								current.recover(event.num);
								event.list.push(current);
							} else {
								current.loseHp(event.num);
								event.list.push(current);
							}
						}
					});
					('step 2');
					for (var i of event.list) {
						// game.log(i)
						i.removeMark('ybbmh_wuzhi_' + event.huanchao, false);
						i.unmarkSkill('ybbmh_wuzhi_' + event.huanchao);
					}
					('step 3');
					player.changeZhuanhuanji('ybbmh_huanchao_ben');
				},
				group: 'ybbmh_huanchao_wai',
				subSkill: {
					wai: {
						audio: 'baijia',
						trigger: {
							player: ['respond', 'useCard'],
						},
						filter(event, player) {
							if (player == _status.currentPhase) return false;
							if (player.storage.ybbmh_huanchao_ben == true) var huanchao = 'xian';
							else var huanchao = 'shuai';
							return (
								game.countPlayer(function (current) {
									return current.hasMark('ybbmh_wuzhi_' + huanchao);
								}) > 0
							);
						},
						forced: true,
						content() {
							'step 0';
							player
								.chooseCard({
									filterCard(card) {
										var type = get.type(card);
										if (Array.isArray(ui.selected.cards))
											for (var i of ui.selected.cards) {
												if (get.type(i) == type) return false;
											}
										return true;
									},
									complexCard: true,
									position: 'he',
									selectCard: 3,
								})
								.set('prompt', get.prompt('ybbmh_huanchao'));
							('step 1');
							if (result.bool) {
								player.discard(result.cards);
								player.useSkill('ybbmh_huanchao');
							}
						},
					},
					ben: {
						zhuanhuanji: true,
						mark: true,
						marktext: '☯',
						intro: {
							content(storage, player, skill) {
								var str = '';
								if (player.storage.ybbmh_huanchao_ben == true) str += '限定技.转换技.你的出牌阶段/你于回合外使用或打出牌时,你可弃置3张不同类型的牌,并执行,<span class=thundertext>阳:令拥有<献>的角色依次回复X点体力</span>;阴:令拥有<率>的角色依次流失X点体力.执行结束后,相关角色弃置<巫治>标记(X为此技能发动次数).';
								else str += '限定技.转换技.你的出牌阶段/你于回合外使用或打出牌时,你可弃置3张不同类型的牌,并执行,阳:令拥有<献>的角色依次回复X点体力;<span class=thundertext>阴:令拥有<率>的角色依次流失X点体力</span>.执行结束后,相关角色弃置<巫治>标记(X为此技能发动次数).';
								str += '<br>当前已使用';
								str += player.countMark('ybbmh_huanchao_mark');
								str += '次';
								return str;
							},
						},
					},
				},
			},
			ybbmh_chizhang: {
				audio: 'guju',
				trigger: {
					player: 'phaseEnd',
				},
				filter(event, player) {
					if (
						game.countPlayer(function (target) {
							if (get.ybbmh_chizhang(target).length) return true;
						}) < 1
					)
						return false;
					var damage = player.getHistory('sourceDamage').length;
					if (damage >= player.maxHp) return true;
				},
				content() {
					'step 0';
					//game.me.restoreSkill('ybbmh_huanchao')
					// event.players=game.countPlayer(function(target){
					//	 if(get.ybbmh_chizhang(target).length>0) return true;
					// })
					player
						.chooseTarget(function (card, player, target) {
							return get.ybbmh_chizhang(target).length;
						})
						.set('prompt2', '请选择一名角色,并使其一个已发动的限定技回复.')
						.set('ai', function (target) {
							var att = get.attitude(player, target);
							return att;
						});
					('step 1');
					if (result.targets?.length) {
						var target = result.targets[0];
						var list = get.ybbmh_chizhang(target);
						// game.log(list);
						if (list.length == 1) {
							player.restoreSkill(list[0]);
							trigger.trigger('ybbmh_chizhangu');
							event.finish();
						} else if (list.length > 1) {
							player.chooseControl(list, true).set('prompt', '选择一个限定技回复之');
						} else {
							event.finish();
						}
					}
					('step 2');
					player.restoreSkill(result.control);
					trigger.trigger('ybbmh_chizhangu');
				},
			},
			ybbmh_chizhangd: {
				audio: 'guju',
				inherit: 'ybbmh_chizhang',
				filter(event, player) {
					if (
						game.countPlayer(function (target) {
							if (get.ybbmh_chizhang(target).length) return true;
						}) < 1
					)
						return false;
					var damage = player.getHistory('sourceDamage').length;
					var num = player.maxHp + player.getHandcardLimit();
					if (damage >= num) return true;
				},
			},
			ybbmh_chizhangt: {
				audio: 'guju',
				inherit: 'ybbmh_chizhang',
				filter(event, player) {
					if (
						game.countPlayer(function (target) {
							if (get.ybbmh_chizhang(target).length) return true;
						}) < 1
					)
						return false;
					var damage = player.getHistory('useCard').length;
					var num = player.maxHp + player.getHandcardLimit();
					if (damage >= num) return true;
				},
			},
			ybbmh_chizhangq: {
				audio: 'guju',
				inherit: 'ybbmh_chizhang',
				filter(event, player) {
					if (
						game.countPlayer(function (target) {
							if (get.ybbmh_chizhang(target).length) return true;
						}) < 1
					)
						return false;
					var damage = player.getHistory('useCard').length;
					var list = player.getHistory('lose', function (evt) {
						return evt.type == 'discard' && evt.getParent('phaseDiscard') == event;
					}).length;
					var num = player.maxHp + player.getHandcardLimit();
					if (damage >= num || list >= num) return true;
					//---------------这个技能很可能有bug,不过正常情况下也玩不到
				},
			},
			ybbmh_chizhangp: {
				audio: 'guju',
				inherit: 'ybbmh_chizhang',
				trigger: {
					global: 'phaseEnd',
				},
				filter(event, player) {
					if (
						game.countPlayer(function (target) {
							if (get.ybbmh_chizhang(target).length) return true;
						}) < 1
					)
						return false;
					var damage = player.getHistory('lose').length;
					var num = event.player.getHistory('lose').length;
					if (damage >= num) return true;
				},
			},
			ybbmh_lushou: {
				audio: 'bmcanshi',
				forced: true,
				popup: false,
				trigger: {
					global: ['ybbmh_wuxian', 'ybbmh_wushuai', 'phaseDrawBegin1', 'ybbmh_chizhangu'],
				},
				filter(event, player, name) {
					if (name == 'phaseDrawBegin1') return event.player == player;
					return true;
				},
				content() {
					if (event.triggername == 'ybbmh_wuxian') {
						player.draw(2);
					} else if (event.triggername == 'ybbmh_wushuai') {
						player.draw(3);
					} else if (event.triggername == 'phaseDrawBegin1') {
						if (get.ybbmh_chizhang(player).length) {
							trigger.num += 3;
						}
					} else {
						player.draw(3);
						var players = game.filterPlayer(function (target) {
							return target.hasMark('ybbmh_wuzhi_xian');
						});
						for (var i of players) {
							i.draw(3);
							player.line(i, 'water');
						}
					}
				},
				mod: {
					maxHandcard(player, num) {
						if (get.ybbmh_chizhang(player).length) return num + 3;
						return num;
					},
				},
			},
			ybbls_qiangong: {
				audio: 'anxu',
				enable: 'phaseUse',
				getsuit(player) {
					if (player.storage.ybbls_qiangong_suit) return player.storage.ybbls_qiangong_suit;
					return [];
				},
				getsuit2(player) {
					if (player.storage.ybbls_qiangong_suit2) return player.storage.ybbls_qiangong_suit2;
					return [];
				},
				gettar1(player) {
					if (player.storage.ybbls_qiangong_tar1) return player.storage.ybbls_qiangong_tar1;
					return [];
				},
				gettar2(player) {
					if (player.storage.ybbls_qiangong_tar2) return player.storage.ybbls_qiangong_tar2;
					return [];
				},
				filter(event, player) {
					return !player.hasSkill('ybbls_qiangong_ban');
				},
				selectCard: 1,
				filterCard(card, player) {
					// lib.skill.ybbls_qiangong.getsuit(player);
					return !lib.skill.ybbls_qiangong.getsuit(player).includes(card.suit);
				},
				selectTarget: 2,
				filterTarget(card, player, target) {
					if (ui.selected.targets.length == 1) {
						return !lib.skill.ybbls_qiangong.gettar2(player).includes(target);
					}
					return !lib.skill.ybbls_qiangong.gettar1(player).includes(target);
				},
				multitarget: true,
				mark: true,
				intro: {
					content(event, player, storage, name, skill) {
						var suit = lib.skill.ybbls_qiangong.getsuit(player);
						var suit2 = lib.skill.ybbls_qiangong.getsuit2(player);
						var tar1 = lib.skill.ybbls_qiangong.gettar1(player);
						var tar2 = lib.skill.ybbls_qiangong.gettar2(player);
						var max = player.storage.ybbls_qiangong_max * 2 || 0;
						var str = '';
						if (player.hasSkill('ybbls_qiangong_ban')) str += '<span class=yellowtext>此技能本回合失效</span>';
						str += '<br>计入次数的花色:';
						str += get.translation(suit);
						str += '<br>影响缘雅的花色:';
						str += get.translation(suit2);
						str += '<br>目标A已选择:';
						str += get.translation(tar1);
						str += '<br>目标B已选择:';
						str += get.translation(tar2);
						str += '<br>手牌上限增加:';
						str += max;
						return str;
					},
				},
				discard: false,
				lose: false,
				targetprompt: ['目标A', '目标B'],
				content() {
					'step 0';
					event.suit = cards[0].suit;
					player.addTempSkill('ybbls_qiangong_max');
					player.addMark('ybbls_qiangong_max');
					//player.give(cards[0],targets[0]);
					('step 1');
					targets[0].showHandcards();
					('step 2');
					var suit = event.suit;
					var cards = targets[0].getCards('he', function (i) {
						return i.suit == suit;
					});
					targets[0].give(cards, targets[1]);
					event.cards = cards;
					event.suit = suit;
					('step 3');
					var cards = event.cards;
					var suit = event.suit;
					if (cards.length <= 2) {
						player.draw();
					} else {
						player.addTempSkill('ybbls_qiangong_suit');
						if (!player.storage.ybbls_qiangong_suit) player.storage.ybbls_qiangong_suit = [];
						player.storage.ybbls_qiangong_suit.add(suit);
					}
					player.addTempSkill('ybbls_qiangong_suit2');
					player.addTempSkill('ybbls_qiangong_tar1');
					player.addTempSkill('ybbls_qiangong_tar2');
					if (!player.storage.ybbls_qiangong_suit2) player.storage.ybbls_qiangong_suit2 = [];
					if (!player.storage.ybbls_qiangong_tar1) player.storage.ybbls_qiangong_tar1 = [];
					if (!player.storage.ybbls_qiangong_tar2) player.storage.ybbls_qiangong_tar2 = [];
					player.storage.ybbls_qiangong_suit2.add(suit);
					player.storage.ybbls_qiangong_tar1.add(targets[0]);
					player.storage.ybbls_qiangong_tar2.add(targets[1]);
					// if(cards.length>5){
					// player.addTempSkill('ybbls_qiangong_ban');
					// }
					// delete target.storage.refanjian;
				},
				mod: {
					maxHandcard(player, num) {
						var numb = player.storage.ybbls_qiangong_max * 2 || 0;
						return num + numb;
					},
				},
				subSkill: {
					max: {},
					suit: {},
					suit2: {},
					tar1: {},
					tar2: {},
					ban: {},
				},
			},
			ybbls_yuanya: {
				audio: 'zhuiyi',
				trigger: {
					player: ['phaseBegin', 'phaseEnd'],
				},
				forced: true,
				filter(event, player, name) {
					// if(name=='phaseEnd')return lib.skill.ybbls_qiangong.getsuit2(player).length==4;
					return true;
				},
				content() {
					'step 0';
					var str = event.triggername == 'phaseBegin' ? '回合开始时' : '回合结束时';
					player
						.chooseTarget()
						.set('ai', function (target) {
							var att = get.attitude(player, target);
							return att > 0;
						})
						.set('prompt2', str + '你可以指定1名角色回复1点体力和摸3张牌并选择令其:<br>①出牌阶段后额外获得1个摸牌阶段<br>②弃牌阶段结束后额外获得1个出牌阶段<br>③废除判定区<br>④获得界制衡.');
					('step 1');
					if (result.targets?.length) {
						result.targets[0].recover();
						result.targets[0].draw(3);
						event.target = result.targets[0];
						var list = ['选项一', '选项二', '选项三', '选项四'];
						var list2 = ['选项一:出牌阶段结束后额外获得1个摸牌阶段', '选项二:弃牌阶段结束后额外获得1个出牌阶段', '选项三:废除判定区', '选项四:获得【界制衡】'];
						if (!player.storage['ybbls_yuanya_' + result.targets[0].playerid]) player.storage['ybbls_yuanya_' + result.targets[0].playerid] = [];
						event.list = [];
						for (var i = 0; i < list.length; i++) {
							if (player.storage['ybbls_yuanya_' + result.targets[0].playerid].includes(list[i])) {
								list2[i] = `<span style='text-decoration:line-through; opacity:0.5; '>${list2[i]}</span>`;
							} else if (i == 2 && result.targets[0].storage._disableJudge) {
								list2[i] = `<span style='opacity:0.5;'>${list2[i]}</span>`;
							} else {
								event.list.push(list[i]);
							}
						}
						event.list.push('cancel2');
						var str = '';
						for (var i = 0; i < list2.length; i++) {
							if (i != 0) str += '<br>';
							str += list2[i];
						}
						player.chooseControl(event.list).set('prompt', '请选择一项').set('prompt2', str);
					}
					('step 2');
					if (!result.control || result.control == 'cancel2') {
						event.finish();
					} else {
						if (result.control == '选项一') {
							event.target.addSkill('ybbls_yuanya_draw');
							player.storage['ybbls_yuanya_' + event.target.playerid].add('选项一');
						} else if (result.control == '选项二') {
							event.target.addSkill('ybbls_yuanya_use');
							player.storage['ybbls_yuanya_' + event.target.playerid].add('选项二');
						} else if (result.control == '选项三') {
							event.target.disableJudge();
							player.storage['ybbls_yuanya_' + event.target.playerid].add('选项三');
						} else if (result.control == '选项四') {
							event.target.addSkill('ybbls_yuanya_zhiheng');
							player.storage['ybbls_yuanya_' + event.target.playerid].add('选项四');
						}
					}
				},
				subSkill: {
					use: {
						audio: 'zhuiyi',
						forced: true,
						charlotte: true,
						trigger: {
							player: 'phaseDiscardAfter',
						},
						mark: true,
						marktext: '出',
						intro: {
							content: '弃牌阶段结束后获得一个额外出牌阶段',
						},
						content() {
							var next = player.phaseUse();
							event.next.remove(next);
							trigger.next.push(next);
						},
					},
					draw: {
						audio: 'zhuiyi',
						forced: true,
						charlotte: true,
						trigger: {
							player: 'phaseDiscardBefore',
						},
						mark: true,
						marktext: '摸',
						intro: {
							content: '弃牌阶段开始前获得一个额外摸牌阶段',
						},
						content() {
							var next = player.phaseDraw();
							event.next.remove(next);
							trigger.next.push(next);
						},
					},
					zhiheng: {
						inherit: 'rezhiheng',
						name: '制衡',
						audio: 'rezhiheng',
						filter(event, player) {
							return !player.hasSkill('rezhiheng') || player.getStat('skill').rezhiheng;
						},
					},
				},
			},
			ybcjy_bashu: {
				audio: 'yuqi',
				trigger: {
					player: 'phaseBefore',
				},
				filter(event, player) {
					if (player.storage.ybcjy_lvzhi > 0 || player.countCards('e') > 0) return true;
					return false;
				},
				content() {
					'step 0';
					var numaa = player.storage.ybcjy_lvzhi;
					if (player.countCards('e') > 0) {
						player
							.choosePlayerCard(player, [1, player.countCards('e')], 'e')
							.set('prompt', '请选择要弃置的牌')
							.set('prompt2', `已因虑至弃置了${numaa}装备牌`);
					}
					('step 1');
					if (result.bool) {
						player.addMark('ybcjy_lvzhi', result.links.length);
						player.discard(result.links);
					}
					('step 2');
					event.num = player.storage.ybcjy_lvzhi;
					('step 3');
					player.removeMark('ybcjy_lvzhi', event.num);
					player.draw(event.num);
					if (event.num > 0) {
						player.storage.ybcjy_bashu_1 = event.num;
						player.addTempSkill('ybcjy_bashu_1', { player: 'phaseAfter' });
					}
				},
				mark: true,
				intro: {
					content(storage, player) {
						var str = '本回合以下标黄的阶段改为出牌阶段.';
						var list = ['判定阶段', '摸牌阶段', '弃牌阶段'];
						if (player.storage.ybcjy_bashu_1) {
							if (player.storage.ybcjy_bashu_1 > 0) list[0] = `<span class=yellowtext>${list[0]}</span>`;
							if (player.storage.ybcjy_bashu_1 > 1) list[1] = `<span class=yellowtext>${list[1]}</span>`;
							if (player.storage.ybcjy_bashu_1 > 2) list[2] = `<span class=yellowtext>${list[2]}</span>`;
						}
						str += list;
						return str;
					},
				},
				derivation: 'ybcjy_bashu_2',
				group: 'ybcjy_bashu_2',
				subSkill: {
					1: {
						audio: 'yuqi',
						trigger: {
							player: ['phaseJudgeBefore', 'phaseDrawBefore', 'phaseDiscardBefore'],
						},
						charlotte: true,
						filter(event, player, name) {
							if (name == 'phaseJudgeBefore') return player.storage.ybcjy_bashu_1 > 0;
							if (name == 'phaseDrawBefore') return player.storage.ybcjy_bashu_1 > 1;
							if (name == 'phaseDiscardBefore') return player.storage.ybcjy_bashu_1 > 2;
							return false;
						},
						forced: true,
						content() {
							trigger.cancel();
							var map = {
								phaseJudge: '判定阶段',
								phaseDraw: '摸牌阶段',
								phaseDiscard: '弃牌阶段',
							};
							game.log(player, '的', map[trigger.name], '改成了出牌阶段');
							var next = player.phaseUse();
							event.next.remove(next);
							trigger.parent.next.push(next);
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (get.type(card) == 'delay') return 'zerotarget';
								},
							},
						},
					},
				},
			},
			ybcjy_bashu_2: {
				trigger: {
					global: 'damageEnd',
				},
				init(player) {
					if (!player.storage.ybcjy_bashu_2) player.storage.ybcjy_bashu_2 = [0, 3, 1, 1];
				},
				getInfo(player) {
					if (!player.storage.ybcjy_bashu_2) player.storage.ybcjy_bashu_2 = [0, 3, 1, 1];
					return player.storage.ybcjy_bashu_2;
				},
				usable: 2,
				filter(event, player) {
					if (player == _status.currentPhase) return false;
					var list = lib.skill.ybcjy_bashu_2.getInfo(player);
					return event.player.isIn() && get.distance(player, event.player) <= list[0];
				},
				logTarget: 'player',
				content() {
					'step 0';
					event.list = lib.skill.ybcjy_bashu_2.getInfo(player);
					var cards = get.cards(event.list[1]);
					event.cards = cards;
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove(true, '隅泣(若对话框显示不完整,可下滑操作)');
					next.set('list', [['牌堆顶的牌', cards], [`交给${get.translation(trigger.player)}(至少一张` + (event.list[2] > 1 ? `,至多${get.cnNumber(event.list[2])}张` : '') + ')'], [`交给自己(至多${get.cnNumber(event.list[3])}张)`]]);
					next.set('filterMove', function (from, to, moved) {
						var info = lib.skill.ybcjy_bashu_2.getInfo(_status.event.player);
						if (to == 1) return moved[1].length < info[2];
						if (to == 2) return moved[2].length < info[3];
						return true;
					});
					next.set('processAI', function (list) {
						var cards = list[0][1].slice(0).sort(function (a, b) {
							return get.value(b, 'raw') - get.value(a, 'raw');
						}),
							player = _status.event.player,
							target = _status.event.getTrigger().player;
						var info = lib.skill.ybcjy_bashu_2.getInfo(_status.event.player);
						var cards1 = cards.splice(0, Math.min(info[3], cards.length - 1));
						var card2;
						if (get.attitude(player, target) > 0) card2 = cards.shift();
						else card2 = cards.pop();
						return [cards, [card2], cards1];
					});
					next.set('filterOk', function (moved) {
						return moved[1].length;
					});
					('step 1');
					if (result.bool) {
						var moved = result.moved;
						cards.removeArray(moved[1]);
						cards.removeArray(moved[2]);
						while (cards.length) {
							ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
						}
						var list = [[trigger.player, moved[1]]];
						if (moved[2].length) list.push([player, moved[2]]);
						game.loseAsync({
							gain_list: list,
							giver: player,
							animate: 'gain2',
						}).setContent('gaincardMultiple');
					}
				},
				mark: true,
				marktext: '泣',
				intro: {
					name: '罢梳·隅泣',
					content(storage, player) {
						var info = lib.skill.ybcjy_bashu_2.getInfo(player);
						return `<div class='text center'><span class=thundertext>蓝色:${info[0]}</span>　<span class=firetext>红色:${info[1]}</span><br><span class=greentext>绿色:${info[2]}</span>　<span class=yellowtext>黄色:${info[3]}</span></div>`;
					},
				},
				ai: {
					threaten: 8.8,
				},
			},
			ybcjy_duijing: {
				audio: 'xianjing',
				init(player) {
					player.markSkill('ybcjy_duijing');
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				content() {
					'step 0';
					if (player.storage._yb_phaseNumber % 3 == 0) {
						var num = 4;
					}
					player.draw(num || 1);
					('step 1');
					var list = lib.skill.ybcjy_bashu_2.getInfo(player);
					player
						.chooseControl(`<span class=thundertext>蓝色(${list[0]})</span>`, `<span class=firetext>红色(${list[1]})</span>`, `<span class=greentext>绿色(${list[2]})</span>`, `<span class=yellowtext>黄色(${list[3]})</span>`, 'cancel2')
						.set('prompt', get.prompt('xianjing'))
						.set('prompt2', '令〖隅泣〗中的一个数字+1')
						.set('ai', function () {
							var player = _status.event.player,
								info = lib.skill.ybcjy_bashu_2.getInfo(player);
							if (
								info[0] < info[3] &&
								game.countPlayer(function (current) {
									return get.distance(player, current) <= info[0];
								}) < Math.min(3, game.countPlayer())
							)
								return 0;
							if (info[3] < info[1] - 1) return 3;
							if (info[1] < 5) return 1;
							if (
								info[0] < 5 &&
								game.hasPlayer(function (current) {
									return current != player && get.distance(player, current) > info[0];
								})
							)
								return 0;
							return 2;
						});
					('step 2');
					if (result.control != 'cancel2') {
						var list = lib.skill.ybcjy_bashu_2.getInfo(player);
						list[result.index] = Math.min(5, list[result.index] + 1);
						game.log(player, '将', result.control, '数字改为', '#y' + list[result.index]);
						player.markSkill('ybcjy_bashu_2');
					}
					event.finish();
				},
				prompt2(event, player) {
					var str = '你可以摸';
					var num = player.storage._yb_phaseNumber % 3 == 0 ? 4 : 1;
					str += num;
					str += '张牌,并加点【罢梳·隅泣】';
					return str;
				},
				mark: true,
				marktext: '出',
				intro: {
					name: '出牌阶段计数',
					content(storage, player) {
						var num = player.storage._yb_phaseNumber || 0;
						return `你经历了${num}个出牌阶段`;
					},
				},
				group: 'ybcjy_duijing_diancai',
				subSkill: {
					diancai: {
						audio: 'xianjing',
						trigger: {
							global: 'phaseUseEnd',
						},
						filter(event, player) {
							// var tar=_status.currentPhase;
							var tar = event.player;
							if (player == tar) return false;
							return tar.getHistory('useCard', function (evt) {
								if (evt.targets && evt.targets.length && evt.isPhaseUsing()) {
									var targets = evt.targets.slice(0);
									// while(targets.includes(tar)) targets.remove(tar);//筛除自己
									for (var i of targets) {
										if (get.distance(tar, i) > 2) targets.remove(i); //筛除范围以外
									}
									return targets.length;
								}
								return false;
							}).length;
							return true;
						},
						forced: true,
						content() {
							'step 0';
							var list = [];
							if (trigger.player.countCards('ej') > 0) list.push('移动');
							if (trigger.player.countDiscardableCards(player, 'hej')) list.push('弃置');
							list.push('cancel2');
							player
								.chooseControl(list)
								.set('prompt', '对镜:请选择一项')
								.set('prompt2', '移动其区域内一张牌,或弃置其一张牌')
								.set('ai', function (control) {
									var att = get.attitude(player, trigger.player);
									if (att > 0) return 'cancel2';
									return 0;
								});
							('step 1');
							if (result.control == '移动') {
								event.goto(2);
							} else if (result.control == '弃置') {
								event.goto(5);
							} else {
								event.finish();
							}
							('step 2');
							var list = ['先选择其区域内的一张牌,<br>看好了再选,别选错!!!!!'];
							if (trigger.player.countCards('e') > 0) {
								list.push('装备区');
								list.push(trigger.player.getCards('e'));
							}
							if (trigger.player.countCards('j') > 0) {
								list.push('判定区');
								list.push(trigger.player.getCards('j'));
							}
							player.chooseButton(1, list);
							('step 3');
							if (result.links?.length) {
								event.card = result.links[0];
								player
									.chooseTarget(function (card, player, target) {
										if (get.position(event.card) == 'e') {
											// if(target==trigger.player) return false;
											var type = get.subtype(event.card);
											return trigger.player != target && target.isEmpty(type);
										} else if (event.card.viewAs) {
											return target.canAddJudge({ name: event.card.viewAs }, [event.card]);
										} else {
											return target.canAddJudge(event.card);
										}
									})
									.set('prompt2', '再选择一名能接纳此牌的角色,<br>上一步选错的话,这里只能将错就错,或者取消技能.');
							} else {
								event.finish();
							}
							('step 4');
							if (result.targets?.length) {
								event.target = result.targets[0];
								var link = event.card;
								if (get.position(link) == 'e') {
									event.target.equip(link);
								} else if (link.viewAs) {
									event.target.addJudge({ name: link.viewAs }, [link]);
								} else {
									event.target.addJudge(link);
								}
							}
							event.finish();
							('step 5');
							player.discardPlayerCard('hej', trigger.player);
						},
					},
				},
			},
			ybcjy_lvzhi: {
				audio: 'shanshen',
				trigger: {
					global: 'phaseEnd',
				},
				filter(event, player) {
					var tar = _status.currentPhase;
					if (player == tar) return false;
					var numa = tar.getHistory('useCard', function (evt) {
						if (evt.targets && evt.targets.length && evt.isPhaseUsing()) {
							var targets = evt.targets.slice(0);
							return targets.length;
						}
						return false;
					}).length;
					// game.log(numa);
					var numb = player.getHistory('lose', function (evt) {
						var ll = [];
						ll.add(evt.hs);
						ll.add(evt.es);
					}).length;
					if (numa >= 3) return true;
					if (numb >= 3) return true;
					return false;
				},
				forced: true,
				content() {
					'step 0';
					player.choosePlayerCard(player, 'he').set('filterButton', function (button) {
						var type = get.type(button.link);
						return type == 'equip';
					});
					('step 1');
					if (result.links?.length) {
						player.discard(result.links[0]);
						player.addMark('ybcjy_lvzhi');
					} else {
						event.finish();
					}
					('step 2');
					player.draw();
					var next = player.phaseUse();
					event.next.remove(next);
					trigger.next.push(next);
				},
			},
			ybhyy_guishi: {
				audio: 'jiqiao',
				trigger: {
					global: ['phaseBefore', 'enterGame'],
					player: 'enterGame',
				},
				filter(event, player) {
					return event.name != 'phase' || game.phaseNumber == 0;
				},
				forced: true,
				content() {
					'step 0';
					player.draw(4);
					('step 1');
					if (player.countCards('he') <= 4) {
						player.addToExpansion(player.getCards('he'), player, 'giveAuto').gaintag.add('ybhyy_guishi');
						event.finish();
					} else {
						player.chooseCard('he', 4);
					}
					('step 2');
					player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('ybhyy_guishi');
				},
				mark: true,
				intro: {
					markcount: 'expansion',
					mark(dialog, content, player) {
						var content = player.getExpansions('ybhyy_guishi');
						if (content && content.length) {
							if (player == game.me || player.isUnderControl()) {
								dialog.addAuto(content);
							} else {
								return `共有${get.cnNumber(content.length)}张星`;
							}
						}
					},
					content(content, player) {
						var content = player.getExpansions('ybhyy_guishi');
						if (content && content.length) {
							if (player == game.me || player.isUnderControl()) {
								return get.translation(content);
							}
							return `共有${get.cnNumber(content.length)}张星`;
						}
					},
				},
				group: ['ybhyy_guishi_qixing', 'ybhyy_guishi_caigui', 'ybhyy_guishi_taoluan'],
				subSkill: {
					qixing: {
						audio: 'jiqiao',
						trigger: {
							player: ['phaseDrawAfter', 'phaseUseAfter'],
						},
						forced: true,
						filter(event, player) {
							return player.getExpansions('ybhyy_guishi').length && player.countCards('h') > 0;
						},
						content() {
							'step 0';
							var cards = player.getExpansions('ybhyy_guishi');
							if (!cards.length || !player.countCards('h')) {
								event.finish();
								return;
							}
							var next = player.chooseToMove('闺识·七星:是否交换<闺识>和手牌？');
							next.set('list', [
								[get.translation(player) + '(你)的闺识', cards],
								['手牌区', player.getCards('h')],
							]);
							next.set('filterMove', function (from, to) {
								return typeof to != 'number';
							});
							next.set('processAI', function (list) {
								var player = _status.event.player,
									cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
										return get.value(a) - get.value(b);
									}),
									cards2 = cards.splice(0, player.getExpansions('ybhyy_guishi').length);
								return [cards2, cards];
							});
							('step 1');
							if (result.bool) {
								var pushs = result.moved[0],
									gains = result.moved[1];
								pushs.removeArray(player.getExpansions('ybhyy_guishi'));
								gains.removeArray(player.getCards('h'));
								if (!pushs.length || pushs.length != gains.length) return;
								player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('ybhyy_guishi');
								game.log(player, '将', pushs, '作为<闺识>置于武将牌上');
								player.gain(gains, 'draw');
							}
						},
					},
					caigui: {
						audio: 'jiqiao',
						trigger: {
							global: 'judgeEnd',
						},
						filter(event, player) {
							return player.getExpansions('ybhyy_guishi').length < 7;
						},
						content() {
							var card = get.cards(1);
							player.addToExpansion(card, player, 'giveAuto').gaintag.add('ybhyy_guishi');
							game.log(player, '将', card, '作为<闺识>置于武将牌上');
						},
					},
					taoluan: {
						audio: 'jiqiao',
						enable: 'chooseToUse',
						usable: 1,
						filter(event, player) {
							var evt = lib.filter.filterCard;
							if (event.filterCard) evt = event.filterCard;
							for (var i of player.getExpansions('ybhyy_guishi')) {
								var type = get.type(i);
								if (type == 'trick' && evt({ name: i.name }, player, event)) return true;
							}
							return false;
						},
						chooseButton: {
							dialog(event, player) {
								var cards = player.getExpansions('ybhyy_guishi');
								return ui.create.dialog('闺识', cards, 'hidden');
							},
							filter(button, player) {
								var card = button.link;
								if (get.type(card) != 'trick') return false;
								return _status.event.parent.filterCard({ name: card.name }, player, _status.event.parent);
							},
							backup(links, player) {
								var skill = _status.event.buttoned;
								return {
									audio: 'jiqiao',
									selectCard: -1,
									position: 'x',
									discard: false,
									lose: false,
									filterCard() {
										return false;
									},
									viewAs: {
										name: links[0].name,
										nature: links[0].nature,
									},
									card: links[0],
								};
							},
							prompt(links, player) {
								return `闺识:选择 ${get.translation(links[0])}的目标`;
							},
						},
						hiddenCard(player, name) {
							var type = get.type(name);
							return type == 'trick';
						},
					},
				},
			},
			ybhyy_lancai: {
				audio: 'linglong',
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				preHidden: true,
				filter(event, player) {
					return player.getExpansions('ybhyy_guishi').length;
				},
				content() {
					'step 0';
					var num = player.getExpansions('ybhyy_guishi').length;
					var cards = get.cards(num);
					game.cardsGotoOrdering(cards);
					var next = player.chooseToMove();
					next.set('list', [['牌堆顶', cards], ['牌堆底']]);
					next.set('prompt', '兰才·观星:点击将牌移动到牌堆顶或牌堆底');
					next.processAI = function (list) {
						var cards = list[0][1],
							player = _status.event.player;
						const top = [],
							bottom = cards;
						for (const i of player.getCards('j')) {
							const judge = get.judge(i);
							bottom.sort((a, b) => judge(b) - judge(a)); //价值高的牌放前面
							if (bottom.length) {
								top.push(bottom.shift());
							}
						}
						bottom.sort((a, b) => get.value(b) - get.value(a)); //把价值高的牌放前面
						while (bottom.length) {
							top.push(bottom.shift());
						}
						return [top, bottom];
					};
					('step 1');
					var top = result.moved[0];
					var bottom = result.moved[1];
					top.reverse();
					for (var i = 0; i < top.length; i++) {
						ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
					}
					for (var i = 0; i < bottom.length; i++) {
						ui.cardPile.appendChild(bottom[i]);
					}
					player.popup(get.cnNumber(top.length) + `上${get.cnNumber(bottom.length)}下`);
					game.log(player, `将${get.cnNumber(top.length)}张牌置于牌堆顶`);
					game.updateRoundNumber();
				},
				ai: {
					threaten: 1.2,
				},
				group: 'ybhyy_lancai_guanxu',
				subSkill: {
					guanxu: {
						enable: 'phaseUse',
						usable: 1,
						filter(event, player) {
							return player.getExpansions('ybhyy_guishi').length && game.hasPlayer((current) => lib.skill.ybhyy_lancai_guanxu.filterTarget(null, player, current));
						},
						filterTarget(card, player, target) {
							return target != player && target.countCards('h') > 0;
						},
						content() {
							'step 0';
							var cards = player.getExpansions('ybhyy_guishi');
							game.updateRoundNumber();
							var hs = target.getCards('h');
							var dialog = ['兰才·观虚:选择要操作的牌', `<div class='text center'>${get.translation(target)}的手牌</div>`, hs, `<div class='text center'>(闺识)</div>`, cards];
							player
								.chooseButton(dialog, 2)
								.set('filterButton', function (button) {
									if (ui.selected.buttons.length) return get.position(button.link) != get.position(ui.selected.buttons[0].link);
									return true;
								})
								.set('cards1', hs)
								.set('cards2', cards)
								.set('ai', function (button) {
									var card = button.link,
										cards1 = _status.event.cards1.slice(0);
									var cards2 = _status.event.cards2.slice(0),
										target = _status.event.parent.target;
									if (!ui.selected.buttons.length) {
										if (!cards1.includes(card)) return 0;
										cards1.remove(card);
										var suits = cards2.map(function (i) {
											return i.suit;
										});
										for (var i of lib.suit) {
											var num = cards1.filter(function (c) {
												return c.suit == i;
											}).length;
											if (num > 2 || (num > 1 && suits.includes(i))) return 20 + get.value(card);
										}
										return get.value(card);
									}
									cards1.remove(ui.selected.buttons[0].link);
									cards1.push(card);
									for (var i of lib.suit) {
										if (
											cards1.filter(function (c) {
												return c.suit == i;
											}).length > 2
										)
											return 20 - get.value(card);
										return get.value(ui.selected.buttons[0].link) - get.value(card);
									}
								});
							('step 1');
							if (result.bool) {
								var cards = result.links;
								if (get.position(cards[0]) != 'h') cards.reverse();
								// var next=target.lose(cards[0],ui.cardPile);
								player.addToExpansion(cards[0], player, 'giveAuto').gaintag.add('ybhyy_guishi');
								// next.insert_index_card=cards[1];
								// next.insert_index=function(event){
								//	 return event.insert_index_card;
								// }
								target.gain(cards[1], 'draw');
							} else event.finish();
							('step 2');
							game.updateRoundNumber();
							var suits = [],
								map = {},
								hs = target.getCards('h');
							if (hs.length) {
								for (var i of hs) {
									if (!lib.filter.canBeDiscarded(i, player, target, 'ybhyy_lancai_guanxu')) continue;
									var suit = i.suit;
									if (!map[suit]) map[suit] = 1;
									else map[suit]++;
									if (map[suit] > 2) suits.add(suit);
								}
								var next = player.discardPlayerCard(target, 3, 'visible', 'h');
								next.set('suits', suits);
								next.set('filterButton', function (button) {
									var suit = button.link.suit;
									if (!ui.selected.buttons.length) return _status.event.suits.includes(suit);
									return suit == ui.selected.buttons[0].link.suit;
								});
								if (suits.length) next.set('forced', true);
							}
						},
						ai: {
							order: 9,
							result: {
								target(player, target) {
									if (target.countCards('h') > 3) return -5;
									if (target.countCards('h') == 3) return -3;
									return -0.5;
								},
							},
						},
					},
				},
			},
			ybhyy_bingxue: {
				audio: 'rejizhi',
				trigger: {
					player: 'useCard',
				},
				forced: true,
				filter(event, player) {
					return get.type(event.card) == 'trick' || get.type(event.card) == 'delay';
				},
				prompt2: '是否发动【冰雪·集智】,展示牌堆顶两张牌,并获得其中非基本牌(基本牌进入弃牌堆)',
				content() {
					'step 0';
					var cards = get.cards(2);
					game.cardsGotoOrdering(cards);
					player.showCards(cards, get.translation(player) + '发动了【冰雪·集智】');
					var list = [];
					if (Array.isArray(cards))
						for (var i of cards) {
							if (get.type(i) != 'basic') list.add(i);
							else if (get.color(i) == get.color(trigger.card)) list.add(i);
						}
					player.gain(list, 'gain2');
				},
				mark: true,
				intro: {
					content(event, player, storage) {
						var numb = 0;
						if (_status.discarded) {
							var discarded = get.discarded();
							for (var i = 0; i < discarded.length; i++) {
								if (get.type(discarded[i]) == 'basic') numb++;
							}
						}
						var str = '本回合手牌上限加';
						str += numb;
						return str;
					},
				},
				group: ['linglong_bagua', 'ybhyy_bingxue_jizhi', 'ybhyy_bingxue_yongjin'],
				mod: {
					targetEnabled(card, player, target) {
						var cards = target.getExpansions('ybhyy_guishi');
						var suit = [];
						for (var i of cards) {
							if (!suit.includes(i.suit)) suit.push(i.suit);
						}
						if (suit.length == 4) {
							if (get.type(card) == 'delay') return false;
						}
					},
					targetInRange(card, player, target, now) {
						var type = get.type(card);
						if (type == 'trick' || type == 'delay') return true;
					},
					maxHandcard(player, num) {
						var numb = 0;
						if (_status.discarded) {
							var discarded = get.discarded();
							for (var i = 0; i < discarded.length; i++) {
								if (get.type(discarded[i]) == 'basic') numb++;
							}
						}
						return num + numb;
					},
				},
				subSkill: {
					jizhi: {
						name: '冰雪·减伤',
						trigger: {
							player: 'damageBegin4',
						},
						filter(event, player) {
							var cards = player.getExpansions('ybhyy_guishi');
							var suit = [];
							for (var i of cards) {
								if (!suit.includes(i.suit)) suit.push(i.suit);
							}
							// return (cards.length>=4||suit.length>=4);
							if (suit.length == 4) {
								return true;
							}
						},
						forced: true,
						content() {
							trigger.num--;
						},
						audio: 'rejizhi',
					},
					yongjin: {
						audio: 'rejizhi',
						name: '冰雪·勇进',
						trigger: {
							player: 'phaseEnd',
						},
						forced: true,
						filter(event, player) {
							return player.getExpansions('ybhyy_guishi').length > 4;
						},
						content() {
							'step 0';
							'step 1';
							event.num = player.getExpansions('ybhyy_guishi').length - 4;
							event.count = event.num;
							('step 2');
							player.chooseCardButton(player.getExpansions('ybhyy_guishi'), true, event.num, '冰雪:请弃至四张').set('ai', function (button) {
								return 100 - get.useful(button.link);
							});
							('step 3');
							player.discard(result.links);
							('step 4');
							event.count--;
							player.moveCard();
							('step 5');
							if (event.count > 0) {
								event.goto(4);
							}
						},
					},
				},
			},
			ybcxch_lingxi: {
				audio: 'huamu',
				trigger: {
					player: ['useCard', 'respond'],
				},
				filter(event, player) {
					var suit = event.card.suit;
					return (
						player.getHistory('useCard', function (evt) {
							return evt.card.suit == suit;
						}).length <= 1 &&
						player.getHistory('respond', function (evt) {
							return evt.card.suit == suit;
						}).length <= 1
					);
				},
				ai: {
					result: {
						player: 1,
					},
				},
				mark: true,
				intro: {
					content(event, player, storage) {
						var suit = [];
						player.getHistory('useCard', function (evt) {
							var suit2 = evt.card.suit;
							if (!suit.includes(suit2)) suit.push(suit2 + '2');
						});
						player.getHistory('respond', function (evt) {
							var suit2 = evt.card.suit;
							if (!suit.includes(suit2)) suit.push(suit2 + '2');
						});
						return get.translation(suit);
					},
				},
				content() {
					'step 0';
					game.log('因为', trigger.card.suit, '花色执行的灵犀');
					('step 1');
					var card1 = get.bottomCards()[0];
					game.cardsGotoOrdering(card1);
					player.addToExpansion(card1, 'gain2').gaintag.add('ybcxch_lingxi_yuping');
					game.log(player, '将', card1, '置入了<玉娉>');
					event.card1 = card1;
					('step 2');
					if (get.color(event.card1) == get.color(trigger.card)) {
						var card2 = get.cards()[0];
						game.cardsGotoOrdering(card2);
						player.addToExpansion(card2, 'gain2').gaintag.add('ybcxch_lingxi_tingniao');
						game.log(player, '将', card2, '置入了<婷袅>');
					}
				},
				subSkill: {
					yuping: {
						mark: true,
						marktext: '娉',
						intro: {
							name: '玉娉',
							markcount: 'expansion',
							mark(dialog, storage, player) {
								if (player.getExpansions('ybcxch_lingxi_yuping').length) dialog.add(player.getExpansions('ybcxch_lingxi_yuping'));
								else {
									dialog.add('暂无玉娉');
								}
							},
						},
					},
					tingniao: {
						mark: true,
						marktext: '婷',
						intro: {
							name: '婷袅',
							markcount: 'expansion',
							mark(dialog, storage, player) {
								if (player.getExpansions('ybcxch_lingxi_tingniao').length) dialog.add(player.getExpansions('ybcxch_lingxi_tingniao'));
								else {
									dialog.add('暂无婷袅');
								}
							},
						},
					},
				},
			},
			ybcxch_gongsheng: {
				audio: 'qianmeng',
				forced: true,
				trigger: {
					global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					if (event.name == 'addToExpansion') {
						if (event.gaintag.includes('ybcxch_lingxi_yuping')) {
							var cards2 = event.player.getExpansions('ybcxch_lingxi_yuping').filter((item) => {
								for (var k of event.cards) {
									return item != k;
								}
							});
							var cards3 = event.player.getExpansions('ybcxch_lingxi_yuping').concat(event.cards);
							var cards = event.player.getExpansions('ybcxch_lingxi_yuping');
							// game.log(get.translation(cards),'1<br>',get.translation(cards2),'1<br>',get.translation(cards3))
							if (!cards.length || get.YB_suit(cards3, 'type2').length != get.YB_suit(cards, 'type2').length || !cards2.length || get.YB_suit(cards2, 'type2').length != get.YB_suit(cards, 'type2').length) {
								game.log(event.player, '的<玉娉>类型数改变了');
								return true;
							}
							// if(cards!=cards3){
							//	 if(!cards.length||get.YB_suit(cards3,'type2').length!=get.YB_suit(cards,'type2').length||!cards2.length||get.YB_suit(cards2,'type2').length!=get.YB_suit(cards,'type2').length) {
							//		 game.log(event.player,'的<玉娉>类型数改变了');
							//		 return true;
							//	 }
							// }
							// else if(!cards2.length||get.YB_suit(cards2,'type2').length!=get.YB_suit(cards,'type2').length) {
							//	 game.log(event.player,'的<玉娉>类型数改变了');
							//	 return true;
							// }
						} else if (event.gaintag.includes('ybcxch_lingxi_tingniao')) {
							var cards2 = event.player.getExpansions('ybcxch_lingxi_tingniao').filter((item) => {
								for (var k of event.cards) {
									return item != k;
								}
							});
							var cards3 = event.player.getExpansions('ybcxch_lingxi_tingniao').concat(event.cards);
							var cards = event.player.getExpansions('ybcxch_lingxi_tingniao');
							if (!cards.length || get.YB_suit(cards3).length != get.YB_suit(cards).length || !cards2.length || get.YB_suit(cards2).length != get.YB_suit(cards).length) {
								game.log(event.player, '的<婷袅>花色数改变了');
								return true;
							}
						}
					}
					if (event.name == 'lose' && event.getlx !== false) {
						for (var i in event.gaintag_map) {
							if (event.gaintag_map[i].includes('ybcxch_lingxi_yuping')) {
								var cards2 = event.player.getExpansions('ybcxch_lingxi_yuping').filter((item) => {
									for (var k of event.cards) {
										return item != k;
									}
								});
								var cards3 = event.player.getExpansions('ybcxch_lingxi_yuping').concat(event.cards);
								var cards = event.player.getExpansions('ybcxch_lingxi_yuping');
								if (!cards.length || get.YB_suit(cards3, 'type2').length != get.YB_suit(cards, 'type2').length || !cards2.length || get.YB_suit(cards2, 'type2').length != get.YB_suit(cards, 'type2').length) {
									game.log(event.player, '的<玉娉>类型数改变了');
									return true;
								}
							} else if (event.gaintag_map[i].includes('ybcxch_lingxi_tingniao')) {
								var cards2 = event.player.getExpansions('ybcxch_lingxi_tingniao').filter((item) => {
									for (var k of event.cards) {
										return item != k;
									}
								});
								var cards3 = event.player.getExpansions('ybcxch_lingxi_tingniao').concat(event.cards);
								var cards = event.player.getExpansions('ybcxch_lingxi_tingniao');
								if (!cards.length || get.YB_suit(cards3).length != get.YB_suit(cards).length || !cards2.length || get.YB_suit(cards2).length != get.YB_suit(cards).length) {
									game.log(event.player, '的<婷袅>花色数改变了');
									return true;
								}
							}
						}
						return false;
					}
					return game.getGlobalHistory('cardMove', function (evt) {
						if (evt.name != 'lose' || event != evt.parent) return false;
						for (var i in evt.gaintag_map) {
							if (evt.gaintag_map[i].includes('ybcxch_lingxi_yuping')) {
								var cards2 = event.player.getExpansions('ybcxch_lingxi_yuping').filter((item) => {
									for (var k of event.cards) {
										return item != k;
									}
								});
								var cards3 = event.player.getExpansions('ybcxch_lingxi_yuping').concat(event.cards);
								var cards = event.player.getExpansions('ybcxch_lingxi_yuping');
								if (!cards.length || get.YB_suit(cards3, 'type2').length != get.YB_suit(cards, 'type2').length || !cards2.length || get.YB_suit(cards2, 'type2').length != get.YB_suit(cards, 'type2').length) {
									game.log(event.player, '的<玉娉>类型数改变了');
									return true;
								}
							} else if (evt.gaintag_map[i].includes('ybcxch_lingxi_tingniao')) {
								var cards2 = event.player.getExpansions('ybcxch_lingxi_tingniao').filter((item) => {
									for (var k of event.cards) {
										return item != k;
									}
								});
								var cards3 = event.player.getExpansions('ybcxch_lingxi_tingniao').concat(event.cards);
								var cards = event.player.getExpansions('ybcxch_lingxi_tingniao');
								if (!cards.length || get.YB_suit(cards3).length != get.YB_suit(cards).length || !cards2.length || get.YB_suit(cards2).length != get.YB_suit(cards).length) {
									game.log(event.player, '的<婷袅>花色数改变了');
									return true;
								}
							}
						}
						return false;
					}).length;
				},
				content() {
					player.draw();
				},
				group: ['ybcxch_gongsheng_give'],
				subSkill: {
					give: {
						audio: 'qianmeng',
						forced: true,
						trigger: {
							player: ['addToExpansionAfter'],
						},
						filter(event, player) {
							var cards = player.getExpansions('ybcxch_lingxi_yuping');
							return get.YB_suit(cards, 'type2') && get.YB_suit(cards, 'type2').length >= 3;
						},
						async content(event, map) {
							let player = map.player,
								trigger = map.trigger;
							var cards = event.player.getExpansions('ybcxch_lingxi_yuping');
							var result = await player
								.chooseTarget(1, true)
								.set('prompt', '将所有的<玉娉>交给1名角色')
								.set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								});
							await result.targets[0].gain(cards, 'gain2');
							game.log(player, '将', cards, '交给了', result.targets[0]);
						},
					},
				},
				_priority: 999,
			},
			ybcxch_lianyu: {
				audio: 'liangyuan',
				trigger: {
					global: ['useCard', 'damageBegin4'],
				},
				filter(event, player, name) {
					var cards = player.getExpansions('ybcxch_lingxi_tingniao');
					if (name == 'damageBegin4') {
						if (event.player == player || !event.player.countCards('h')) {
							return get.YB_suit(cards).length >= 3;
						}
					} else {
						if (event.targets.length == 1) {
							if (event.targets[0] == player || !event.targets[0].countCards('h')) {
								if (event.card && get.type(event.card) != 'equip') {
									return get.YB_suit(cards).length >= 3;
								}
							}
						}
					}
					return false;
				},
				forced: true,
				async content(event, map) {
					let player = map.player,
						trigger = map.trigger;
					var cards = event.player.getExpansions('ybcxch_lingxi_tingniao');
					var str = '选择弃置三张花色各不相同的<婷袅>,令此';
					if (event.triggername != 'useCard') {
						str += '伤害';
					} else {
						str += '牌';
					}
					str += '无效';
					var result = await player
						.chooseCardButton(str, 3, cards)
						.set('filterButton', function (button) {
							var suit = button.link.suit;
							for (var i = 0; i < ui.selected.buttons.length; i++) {
								if (ui.selected.buttons[i].link.suit == suit) {
									return false;
								}
							}
							return true;
						})
						.set('ai', function () {
							if (event.triggername == 'useCard') {
								return -get.effect(trigger.targets[0], trigger.card, trigger.targets[0], _status.event.player);
							} else {
								var att = get.attitude(_status.event.player, trigger.player);
								var eff = get.damageEffect(trigger.source, trigger.player);
								return att > 0 && eff < 0;
							}
						});
					if (result.links?.length) {
						await player.discard(result.links);
						if (event.triggername != 'useCard') {
							await trigger.cancel();
						} else {
							// await trigger.parent.excluded.add(trigger.targets[0]);
							await trigger.targets.remove(trigger.targets[0]);
						}
					}
				},
			},
			ybcxch_xixuan: {
				audio: 'jisi',
				enable: 'chooseToUse',
				filter(event, player) {
					var evt = lib.filter.filterCard;
					var cards = event.player.getExpansions('ybcxch_lingxi_yuping');
					var cards2 = event.player.getExpansions('ybcxch_lingxi_tingniao');
					if (event.filterCard) evt = event.filterCard;
					for (var i of lib.inpile) {
						var type = get.type(i);
						if ((type == 'trick' && evt({ name: i }, player, event) && cards.length) || (type == 'basic' && evt({ name: i }, player, event) && cards2.length)) return true;
					}
					return false;
				},
				hiddenCard(player, name) {
					var cards = player.getExpansions('ybcxch_lingxi_yuping');
					var cards2 = player.getExpansions('ybcxch_lingxi_tingniao');
					var type = get.type(name);
					return (type == 'trick' && cards.length) || (type == 'basic' && cards2.length);
				},
				chooseButton: {
					dialog(player) {
						var list = [];
						var player = _status.event.player || player;
						var cards = player.getExpansions('ybcxch_lingxi_yuping');
						var cards2 = player.getExpansions('ybcxch_lingxi_tingniao');
						for (var i = 0; i < lib.inpile.length; i++) {
							if (get.type(lib.inpile[i]) == 'trick' && cards.length) list.push(['锦囊', '', lib.inpile[i]]);
							else if (get.type(lib.inpile[i]) == 'basic' && cards2.length) {
								if (lib.inpile[i] == 'sha') {
									list.push(['基本', '', 'sha']);
									for (var kkk of lib.inpile_nature) {
										list.add(['基本', '', 'sha', kkk]);
									}
								} else list.push(['基本', '', lib.inpile[i]]);
							}
						}
						return ui.create.dialog('系璇', [list, 'vcard']);
					},
					filter(button, player) {
						return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
					},
					backup(links, player) {
						return {
							filterCard() {
								return false;
							},
							selectCard: -1,
							audio: 'jisi',
							popname: true,
							viewAs: { name: links[0][2], nature: links[0][3], suit: 'none' },
							precontent() {
								var name = event.result.card.name;
								var cards = player.getExpansions('ybcxch_lingxi_yuping');
								var cards2 = player.getExpansions('ybcxch_lingxi_tingniao');
								if (get.type2(name) == 'trick') {
									player.lose(cards);
									player.addToExpansion(cards).gaintag.add('ybcxch_lingxi_tingniao');
									game.log(player, '将<玉娉>', cards, '置入了<婷袅>');
								} else {
									player.discard(cards2);
									game.log(player, '弃置了', cards2, '.');
								}
							},
						};
					},
					prompt(links, player) {
						return '你可将<玉娉>全部置入<婷袅>,视为使用1张非延时锦囊牌;你可弃置所有的<婷袅>,视为使用1张基本牌.';
					},
				},
				ai: {
					order: 10,
				},
			},
			ybshh_yuniao: {
				audio: 'chongxu',
				init(player, skill) {
					player.storage[skill] = true;
				},
				zhuanhuanji: true,
				mark: true,
				marktext: '☯',
				intro: {
					content(storage, player, skill) {
						var str = '';
						if (player.storage.ybshh_yuniao == true) str += '转换技.回合结束时,<span class=thundertext>阳:你可获得1名角色1张牌,对该角色造成1点火属性伤害</span>;阴:你可交给1名角色1张牌,对该角色造成1点伤害.';
						else str += '转换技.回合结束时,阳:你可获得1名角色1张牌,对该角色造成1点火属性伤害;<span class=thundertext>阴:你可交给1名角色1张牌,对该角色造成1点伤害</span>.';
						return str;
					},
				},
				trigger: {
					player: 'phaseEnd',
				},
				forced: true,
				content() {
					'step 0';
					if (player.storage.ybshh_yuniao == true) {
						var fil = function (card, player, target) {
							return target.countCards('he') > 0;
						};
						var str = '你可获得1名角色1张牌,对该角色造成1点火属性伤害';
						var nat = 'fire';
					} else {
						var fil = function (card, player, target) {
							return player.countCards('he') > 0;
						};
						var str = '你可交给1名角色1张牌,对该角色造成1点伤害';
						var nat = null;
					}
					player
						.chooseTarget(1, fil)
						.set('prompt', str)
						.set('ai', function (target) {
							var att = get.attitude(_status.event.player, target);
							var eff = get.damageEffect(target, _status.event.player, nat);
							return att < 0 && eff >= 0;
						});
					('step 1');
					if (result.targets?.length) {
						if (player.storage.ybshh_yuniao == true) event.list = [player, result.targets[0], 'fire', result.targets[0], 'fire'];
						else event.list = [result.targets[0], player, 'thunder', result.targets[0], null];
						player.line(event.list[3], event.list[2]);
						player.choosePlayerCard(event.list[1], 'he');
					} else event.finish();
					('step 2');
					if (result.cards?.length) {
						player.changeZhuanhuanji('ybshh_yuniao');
						event.cards = result.cards;
					} else event.finish();
					('step 3');
					event.list[1].give(event.cards, event.list[0]);
					('step 4');
					event.list[3].damage(event.list[4]);
				},
			},
			ybshh_qingsi: {
				audio: 'miaojian',
				trigger: {
					player: ['useCard', 'respond'],
				},
				filter(event, player) {
					return get.color(event.card) == 'red';
				},
				forced: true,
				content() {
					'step 0';
					player.chooseCardTarget({
						position: 'he',
						filterCard: lib.filter.cardDiscardable,
						filterTarget(card, player, target) {
							// var trigger=_status.event;
							// if(player.inRange(target)){
							if (lib.filter.targetEnabled({ name: 'sha', nature: 'thunder' }, player, target)) return true;
							// }
							return false;
						},
						ai1(card) {
							return get.unuseful(card) + 9;
						},
						ai2(target) {
							if (get.attitude(_status.event.player, target) < 5) {
								return 6 - get.attitude(_status.event.player, target);
							}
							return -1;
						},
						prompt: get.prompt('ybshh_qingsi'),
						prompt2: '弃置一张牌,视为对一名其他角色使用一张【雷杀】',
					});
					('step 1');
					if (result.bool) {
						player.discard(result.cards);
						player.useCard({ name: 'sha', nature: 'thunder', ybshh_qingsi: true }, result.targets[0], 'ybshh_qingsi', false);
					}
				},
				group: 'ybshh_qingsi_sha',
				subSkill: {
					sha: {
						forced: true,
						trigger: {
							player: 'useCardAfter',
						},
						filter(event, player) {
							return event.card && event.card.ybshh_qingsi;
						},
						async content(event, map) {
							let player = map.player,
								trigger = map.trigger;
							let naturn = player.getHistory('sourceDamage', function (evt) {
								return evt.card == trigger.card;
							}).length
								? 'fire'
								: 'thunder';
							var targets = trigger.targets.sortBySeat();
							for (var i of targets) {
								if (i.isIn()) await player.discardPlayerCard('he', i, true);
								if (i.isIn()) await player.useCard({ name: 'sha', nature: naturn }, i, 'ybshh_qingsi', false);
							}
						},
					},
				},
			},
			ybshh_xianyin: {
				audio: 'shhlianhua',
				forced: true,
				trigger: {
					source: 'damageBegin2',
				},
				content() {
					'step 0';
					var all = player.getAllHistory('sourceDamage');
					if (!all.length) event.finish();
					else {
						var dam = all[all.length - 1];
						var num2 = 0;
						if (dam.nature != trigger.nature) {
							num2++;
						}
						if ((dam.card && !trigger.card) || (!dam.card && trigger.card)) {
							num2++;
						}
						if (num2 > 0) {
							trigger.num += num2;
							event.finish();
						}
					}
					('step 1');
					player.draw();
					player.useSkill('ybshh_yuniao');
				},
				mark: true,
				marktext: '僊',
				intro: {
					name2: '僊',
					mark(dialog, storage, player) {
						var str = '';
						var all = player.getAllHistory('sourceDamage');
						if (!all.length) str += '无';
						else {
							var dam = all[all.length - 1];
							str += '上次伤害的属性:';
							str += get.translation(dam.nature) || '无';
							str += '<br>上次伤害的类型:';
							str += dam.card ? '卡牌' : '非卡牌';
						}
						dialog.addText(str);
					},
				},
				group: ['ybshh_xianyin_end'],
				subSkill: {
					end: {
						forced: true,
						trigger: {
							global: 'phaseAfter',
						},
						filter(event, player) {
							var num = 0;
							player.getHistory('gain', function (evt) {
								if (evt.getParent(2).name != 'phaseDraw') num += evt.cards.length;
								return;
							});
							return num && num > 0;
						},
						content() {
							var num = 0;
							player.getHistory('gain', function (evt) {
								if (evt.getParent(2).name != 'phaseDraw') num += evt.cards.length;
							});
							player.draw(num);
						},
					},
				},
			},
			//郭照
			// ybgz_gongshu:'恭恕',//zunwei
			// ybgz_gongshu_info:'锁定技.
			// 每当有角色弃置牌时,你摸X-1张牌(X为其弃置的牌数),
			//你使用与本回合你弃置的牌花色相同的牌不受次数限制.
			//若你弃置的牌字数之和与本回合你上一次弃置的牌字数之和相同,你摸两张牌,且本回合视为未发动过〖束俭〗.',
			// ybgz_shujian:'束俭',//pianchong
			// ybgz_shujian_info:'出牌阶段限三次.
			// 你可弃置至少Y张牌,你可使用其中1张牌(Y为你本回合发动〖束俭〗的次数+1).',
			ybgz_gongshu: {
				audio: 'zunwei',
				forced: true,
				trigger: {
					global: 'loseAfter',
				},
				filter(event, player) {
					return event.type == 'discard' && event.cards.length;
				},
				forced: true,
				content() {
					if (trigger == player) {
						var leng1 = 0;
						for (var i of trigger.cards) {
							leng1 += get.cardNameLength(i, player);
						}
						player.storage.ybgz_gongshu_del = leng1;
					}
					if (trigger.cards.length > 1) {
						player.draw(trigger.cards.length - 1);
					}
				},
				// mod: {
				// cardUsable(card, player) {
				// const cardSuit = card.suit;
				// const list = player.getHistory('lose', function (evt) {
				// return evt.type == 'discard';
				// });
				// for (var i = 0; i < list.length; i++) {
				// if (cardSuit === 'unsure' || list[i].suit === cardSuit) return Infinity;
				// }
				// },
				// },
				group: ['ybgz_gongshu_draw', 'ybgz_gongshu_del'],
				subSkill: {
					draw: {
						audio: 'zunwei',
						forced: true,
						trigger: {
							player: 'loseEnd',
						},
						// direct:true,
						filter(event, player) {
							if (event.type != 'discard') return false;
							var list = player.getHistory('lose', function (evt) {
								return evt.type == 'discard';
							});
							if (list.length <= 1) return false;
							var last = list[list.length - 2];
							var leng1 = 0,
								leng2 = 0;
							for (var i of event.cards) {
								leng1 += get.cardNameLength(i, player);
							}
							for (var k of last.cards) {
								leng2 += get.cardNameLength(k, player);
							}
							// player.storage.ybgz_gongshu_del=leng1;
							return leng1 == leng2;
						},
						async content(event, map) {
							let trigger = map.trigger,
								player = map.player;
							await player.draw(player.countCards('h') > 4 ? 1 : 2);
							//(若此时你的手牌数不大于4,则改为摸2张).
							await delete player.getStat('skill').ybgz_shujian;
							// await player.removeSkill('ybgz_shujian_used');
						},
					},
					del: {
						mark: true,
						marktext: '数',
						intro: {
							content(storage, player, skill) {
								return '本回合上次弃牌的牌名字数和为' + player.storage.ybgz_gongshu_del;
							},
						},
						forced: true,
						charlotte: true,
						trigger: {
							player: 'phaseAfter',
						},
						content() {
							player.storage.ybgz_gongshu_del = 0;
						},
						init(player) {
							player.markSkill('ybgz_gongshu_del');
							player.storage.ybgz_gongshu_del = 0;
						},
					},
				},
			},
			ybgz_shujian: {
				audio: 'pianchong',
				enable: 'phaseUse',
				usable: 2,
				selectCard() {
					var player = _status.event.player;
					var num = player.getStat('skill').ybgz_shujian ? player.getStat('skill').ybgz_shujian + 1 : 1;
					return [num, Infinity];
				},
				filterCard(card, player) {
					var num = 0;
					if (ui.selected.cards) {
						for (var i of ui.selected.cards) {
							num += get.cardNameLength(i, player);
						}
					}
					player.prompt(`<p font-size:15px;>字数和:${num}<p>`);
					// ui.dialog.content.firstChild.innerHTML = get.translation('ybgz_shujian_info')+'<br>当前牌名字数和为'+num;
					return true;
				},
				check(card) {
					// var num = player.countMark('ybgz_shujian_used') + 1;
					var num = player.getStat('skill').ybgz_shujian;
					if (ui.selected.cards.length >= num) return false;
					else if (ui.selected.cards.length >= 1) return 8 - get.value(card);
					return player.hasUseTarget(card) && player.getUseValue(card);
				},
				complexCard: true,
				discard: true,
				content() {
					'step 0';
					// player.YB_temp('ybgz_shujian_used');
					cards.filter((i) => get.position(i, true) == 'd');
					('step 1');
					// player.discard(cards);
					('step 2');
					player
						.chooseCardButton(cards, 1, '是否使用其中一张')
						.set('filterButton', function (button) {
							return player.hasUseTarget(button.link);
						})
						.set('ai', function (button) {
							return get.getUseValue(button.link);
						});
					('step 3');
					if (result.bool) event.card = result.links[0];
					// player.YB_temp('ybgz_shujian_used');
					('step 4');
					if (event.card && player.hasUseTarget(event.card)) {
						player.chooseUseTarget(event.card, '使用一张' + get.translation(event.card), true, false);
					}
				},
				subSkill: {
					used: {
						character: true,
					},
				},
			},
			//赵襄
			ybzx_huashuang: {
				audio: 'fanghun',
				forced: true,
				trigger: {
					source: 'damageBegin2',
				},
				filter(event, player) {
					return (
						player.getHistory('sourceDamage', function (evt) {
							return evt != event;
						}).length +
						1 ==
						player.hp && player.hp != event.player.hp
					);
				},
				content() {
					trigger.num += Math.abs(player.hp - trigger.player.hp);
				},
				group: 'ybzx_huashuang_max',
				subSkill: {
					max: {
						audio: 'fanghun',
						forced: true,
						trigger: {
							source: 'damageSource',
						},
						filter(event, player) {
							return event.num >= 4 && !player.storage.ybzx_huashuang_max;
						},
						content() {
							player.storage.ybzx_huashuang_max = true;
							player.gainMaxHp();
						},
						limited: true,
					},
				},
			},
			ybzx_ningao: {
				audio: 'fuhan',
				forced: true,
				trigger: { player: 'changeHp' },
				filter(e, p) {
					return true;
				},
				content() {
					player.draw();
				},
				group: ['ybzx_ningao_use', 'ybzx_ningao_bit', 'ybzx_ningao_leiji', 'ybzx_ningao_jue'],
				subSkill: {
					use: {
						enable: ['chooseToUse', 'chooseToRespond'],
						//发动时提示的技能描述
						prompt(event, player) {
							var player = _status.event.player;
							if (player.maxHp - player.hp >= 3) return '将♠️️️牌当做无懈,♥️️牌当做桃.';
							else return '将♠️️️牌当做无懈.';
						},
						//动态的viewAs
						viewAs(cards, player) {
							var name = false;
							var nature = null;
							var suit = cards[0].suit;
							//根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
							switch (suit) {
								// case 'club':name='shan';break;
								// case 'diamond':name='sha';nature='fire';break;
								case 'spade':
									name = 'wuxie';
									break;
								case 'heart':
									name = 'tao';
									break;
							}
							//返回判断结果
							if (name) return { name: name, suit: suit, nature: nature };
							return null;
						},
						//-------------代价
						//AI选牌思路
						check(card) {
							if (ui.selected.cards.length) return 0;
							var player = _status.event.player;
							if (_status.event.type == 'phase') {
								var max = 0;
								var name2;
								var list = ['sha', 'tao'];
								var map = { sha: 'diamond', tao: 'heart' };
								for (var i = 0; i < list.length; i++) {
									var name = list[i];
									if (
										player.countCards('hes', function (card) {
											return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
										}) > 0 &&
										player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
									) {
										var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
										if (temp > max) {
											max = temp;
											name2 = map[name];
										}
									}
								}
								if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
								return 0;
							}
							return 1;
						},
						//选牌数量
						// selectCard:[1,2],
						selectCard: 1,
						//确保选择第一张牌后 重新检测第二张牌的合法性 避免选择两张花色不同的牌
						complexCard: true,
						//选牌范围:手牌区和装备区和木马
						position: 'hes',
						//选牌合法性判断
						filterCard(card, player, event) {
							//如果已经选了一张牌 那么第二张牌和第一张花色相同即可
							// if(ui.selected.cards.length) return card.suit==ui.selected.cards[0].suit;
							event = event || _status.event;
							//获取当前时机的卡牌选择限制
							var filter = event._backup.filterCard;
							//获取卡牌花色
							var name = card.suit;
							//如果这张牌是♣️️并且当前时机能够使用/打出闪 那么这张牌可以选择
							// if(name=='club'&&filter({name:'shan',cards:[card]},player,event)) return true;
							//如果这张牌是♦️️并且当前时机能够使用/打出雷杀 那么这张牌可以选择
							// if(name=='diamond'&&filter({name:'sha',cards:[card],nature:'fire'},player,event)) return true;
							//如果这张牌是♠️️并且当前时机能够使用/打出无懈 那么这张牌可以选择
							if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
							//如果这张牌是♥️️并且当前时机能够使用/打出桃 那么这张牌可以选择
							if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event) && player.maxHp - player.hp >= 3) return true;
							//上述条件都不满足 那么就不能选择这张牌
							return false;
						},
						//判断当前时机能否发动技能
						filter(event, player) {
							// if(player.countMark('yb070_meiying')<1) return false;
							//获取当前时机的卡牌选择限制
							var filter = event.filterCard;
							//如果当前时机能够使用/打出火杀并且角色有♦️️ 那么可以发动技能
							// if(filter({name:'sha',nature:'fire'},player,event)&&player.countCards('hes',{suit:'diamond'})) return true;
							//如果当前时机能够使用/打出闪并且角色有♣️️ 那么可以发动技能
							// if(filter({name:'shan'},player,event)&&player.countCards('hes',{suit:'club'})) return true;
							//如果当前时机能够使用/打出桃并且角色有♥️️ 那么可以发动技能
							if (player.maxHp - player.hp >= 3 && filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
							//如果当前时机能够使用/打出无懈可击并且角色有♠️️ 那么可以发动技能
							if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
							return false;
						},
						ai: {
							// respondSha:true,
							// respondShan:true,
							//让系统知道角色<有杀><有闪>
							skillTagFilter(player, tag) {
								var name;
								switch (tag) {
									// case 'respondSha':name='diamond';break;
									case 'save':
										name = 'heart';
										break;
								}
								if (player.maxHp - player.hp < 3 && !player.countCards('hes', { suit: 'heart' })) return false;
								if (!player.countCards('hes', { suit: name })) return false;
							},
							//AI牌序
							order(item, player) {
								if (player && _status.event.type == 'phase') {
									var max = 0;
									var list = ['sha', 'tao'];
									var map = { sha: 'diamond', tao: 'heart' };
									for (var i = 0; i < list.length; i++) {
										var name = list[i];
										if (
											player.countCards('hes', function (card) {
												return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
											}) > 0 &&
											player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
										) {
											var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
											if (temp > max) max = temp;
										}
									}
									max /= 1.1;
									return max;
								}
								return 2;
							},
						},
						//让系统知道玩家<有无懈><有桃>
						hiddenCard(player, name) {
							if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0 && player.maxHp - player.hp >= 3;
							if (name == 'wuxie') return true;
						},
					},
					bit: {
						forced: true,
						trigger: {
							player: 'useCard',
						},
						filter(event, player) {
							return player.maxHp - player.hp >= 1;
						},
						content() {
							trigger.directHit.addArray(trigger.targets);
						},
						mod: {
							targetInRange(card, player, target) {
								if (player.maxHp - player.hp >= 1) return true;
							},
						},
					},
					long: {
						trigger: { player: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter'] },
						filter(event, player) {
							if (player == _status.currentPhase) return false;
							return player.maxHp - player.hp >= 2;
						},
						forced: true,
						content() {
							'step 0';
							var next = player.chooseToUse(get.prompt('ybzx_ningao_long'), { name: 'sha' });
							next.aidelay = true;
							next.noButton = true;
							('step 1');
							if (result.bool) {
							}
						},
					},
					leiji: {
						trigger: { player: ['useCardAfter', 'respondAfter'] },
						filter(event, player) {
							if (player == _status.currentPhase) return false;
							return player.maxHp - player.hp >= 2 && event.card.name == 'shan';
						},
						forced: true,
						content() {
							'step 0';
							var next = player.chooseToUse(get.prompt('ybzx_ningao_long'), { name: 'sha' });
							next.aidelay = true;
							next.noButton = true;
							('step 1');
							if (result.bool) {
							}
						},
					},
					jue: {
						trigger: {
							player: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
						},
						forced: true,
						filter(event, player) {
							if (player.maxHp - player.hp < 4) return false;
							// if (event.name == 'gain' && event.player == player) return player.countCards('h') > 8;
							// var evt = event.getl(player);
							// if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 8) return false;
							if (player.countCards('h') == 8) return false;
							var evt = event;
							for (var i = 0; i < 8; i++) {
								evt = evt.getParent('ybzx_ningao_jue');
								if (evt.name != 'ybzx_ningao_jue') return true;
							}
							return false;
						},
						content() {
							var num = 8 - player.countCards('h');
							if (num > 0) player.draw(num);
							else player.chooseToDiscard('h', true, -num);
						},
					},
				},
			},
			yblf_zhenzhi: {
				audio: 'xiansi',
				trigger: {
					player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
				},
				forced: true,
				filter(event, player) {
					return true;
				},
				init(player) {
					player.storage.yblf_zhenzhi = [];
				},
				group: 'yblf_zhenzhi_buff',
				async content(event, map) {
					let trigger = map.trigger,
						player = map.player;
					if (!player.storage.yblf_zhenzhi) await (player.storage.yblf_zhenzhi = []);
					// var num = player.storage.yblf_zhenzhi.length||0;
					if (event.triggername == 'phaseZhunbeiBegin') {
						var result = await player
							.chooseTarget([0, 6])
							.set('filterTarget', function (card, player, target) {
								return target.countCards('he') > 0;
							})
							.set('ai', function (target) {
								var player = _status.event.player;
								if (ui.selected.targets.length < 4) {
									return -get.attitude(player, target);
								}
								return false;
							});
						if (result.bool) {
							let targets = result.targets;
							for (var i of targets) {
								await player.storage.yblf_zhenzhi.push(i);
								await player.gainPlayerCard('he', i, true);
							}
							for (var k of targets) {
								await k.chooseToDiscard(2, true, 'he');
							}
							let num = player.storage.yblf_zhenzhi.length || 0;
							await player.draw(6 - num);
						}
					} else {
						let num = player.storage.yblf_zhenzhi.length || 0;
						var result = await player
							.chooseTarget([0, 6 - num])
							.set('filterTarget', function (card, player, target) {
								// return target.countCards('he')>0;
								return true;
							})
							.set('ai', function (target) {
								var player = _status.event.player;
								if (ui.selected.targets.length < 4) {
									return -get.attitude(player, target);
								}
								return false;
							});
						if (result.bool) {
							let targets = result.targets;
							for (var i of targets) {
								await player.storage.yblf_zhenzhi.push(i);
								await player.discardPlayerCard('he', i, true);
							}
							for (var k of targets) {
								await k.loseHp(2);
							}
							await player.draw(num);
						}
					}
				},
				subSkill: {
					buff: {
						audio: 'xiansi',
						charlotte: true,
						forced: true,
						trigger: {
							player: 'phaseBefore',
							global: ['recoverAfter', 'dying'],
						},
						filter(e, p, n) {
							if (n == 'phaseBefore') return true;
							return p.storage.yblf_zhenzhi.includes(e.player);
						},
						content() {
							if (event.triggername == 'phaseBefore') player.storage.yblf_zhenzhi = [];
							else if (event.triggername == 'recoverAfter') {
								player.recover();
							} else {
								player.draw();
							}
						},
					},
				},
			},
			/*
	  准备阶段,你可获得X名角色各1张牌,相关角色弃置2张牌,你摸6-X张牌
	  结束阶段,你可弃置至多6-X名角色各1张牌,相关角色流失2点体力,你摸X张牌
	  直到你的下个回合开始.本回合〖阵峙〗角色回复体力时,你回复1点体力
	  直到你的下个回合开始.本回合〖阵峙〗角色进入濒死状态时,你摸1张牌
	  */
			ybhzy_xiasi: {
				audio: 'bolan',
				forced: true,
				trigger: {
					player: ['useCard', 'respond'],
				},
				init(player) {
					player.storage.QQQ_xiasi = [];
					player.storage.Q_xiasi = [];
				}, //QQQ
				filter(event, player) {
					return !player.storage.Q_xiasi.includes(get.cardNameLength(event.card));
				},
				//每当你于一个回合内首次使用或打出牌名字数为X的牌时,你从2X张武将牌中选择获得一个技能直到本回合结束
				async content(event, trigger, player) {
					//QQQ
					player.storage.Q_xiasi.add(get.cardNameLength(trigger.card));
					const num = get.cardNameLength(trigger.card) * 2;
					const list = Object.keys(lib.character).randomGets(num);
					const skill = list.map((q) => lib.character[q][3]).flat();
					const link = [];
					for (var i of skill) {
						link.push([i, get.translation(i)]);
					}
					if (link[0]) {
						const result = await player
							.chooseButton(['获得一个技能', [list, 'character'], [link, 'tdnodes']], 1, true)
							.set('filterButton', (button) => skill.includes(button.link))
							.forResult();
						if (result.links?.length) {
							player.storage.QQQ_xiasi.add(result.links[0]);
							player.addTempSkills(result.links[0]);
						}
					}
				},
				group: ['ybhzy_xiasi_1'],
				subSkill: {
					1: {
						trigger: {
							global: ['phaseAfter'],
						},
						silent: true,
						async content(event, trigger, player) {
							//QQQ
							player.storage.Q_xiasi = [];
						},
					},
				},
			},
			ybhzy_rongzhi: {
				audio: 'yifa',
				enable: 'phaseUse',
				usable: 1,
				selectCard: [3, Infinity],
				filterCard(card, player) {
					return !ui.selected.cards.some((cardx) => cardx.suit == card.suit);
				},
				complexCard: true,
				complexSelect: true,
				discard: false,
				check(card) {
					return 5 - get.useful(card);
				},
				content() {
					'step 0';
					player.recast(cards);
					player.addTempSkill('ybhzy_yaxiang');
					('step 1');
					player
						.chooseTarget(1)
						.set('ai', function (target) {
							var num = get.attitude(_status.event.player, target);
							return -num;
						})
						.set('prompt2', '请选择一名有角色,令其手牌上限-1');
					('step 2');
					if (result.targets?.length) {
						result.targets[0].addSkill('ybhzy_rongzhi_1');
						result.targets[0].storage.QQQ_rongzhi++;
					}
				},
				subSkill: {
					1: {
						init: (player) => (player.storage.QQQ_rongzhi = 0),
						mod: {
							maxHandcard(player, num) {
								return num - player.storage.QQQ_rongzhi;
							},
						},
						mark: true,
						markimage: 'image/card/handcard.png',
						intro: {
							content(num, player) {
								var str = '<li>手牌上限';
								if (num >= 0) str += '+';
								str += num;
								str += '<br><li>当前手牌上限:';
								str += player.getHandcardLimit();
								return str;
							},
						},
					},
				},
				ai: {
					order: 8,
					result: {
						player: 3,
					},
				},
			},
			ybhzy_hongya: {
				audio: 'ext:沧海遗珠/audio/skill:2',
				trigger: {
					global: ['dying'],
				},
				//当有角色进入濒死状态后,你可选择失去武将牌上的一个技能令其将体力值回复至1并将手牌摸至4,你可令一名角色体力值上限-1
				check: (event, player) => event.player.isFriendsOf(player),
				async content(event, trigger, player) {
					//QQQ
					const link = [];
					for (var i of player.GS()) {
						link.push([i, get.translation(i)]);
					}
					if (link[0]) {
						const result = await player
							.chooseButton(['失去一个技能', [link, 'tdnodes']])
							.set('ai', (button) => {
								if (['ybhzy_xiasi', 'ybhzy_rongzhi', 'ybhzy_hongya', 'ybhzy_fuxin'].includes(button.link)) return -1;
								return Math.random();
							})
							.forResult();
						if (result.links?.length) {
							if (player.storage.QQQ_xiasi.includes(result.links[0])) {
								player.draw();
							}
							player.RS(result.links[0]);
							trigger.player.hp = 1;
							trigger.player.update();
							trigger.player.drawTo(4);
							const result1 = await player
								.chooseTarget()
								.set('ai', (target) => -get.attitude(player, target))
								.set('prompt2', '请选择一名有角色,令其体力上限-1')
								.forResult();
							if (result1.targets && result1.targets[0]) {
								result1.targets[0].loseMaxHp();
							}
						}
					}
				},
			},
			ybhzy_fuxin: {
				trigger: {
					player: ['loseEnd'],
				},
				forced: true,
				init: (player) => (player.storage.QQQ_xiasi = []), //QQQ
				filter: (event, player) => event.cards && event.cards[0] && !player.countCards('h'),
				async content(event, trigger, player) {
					//QQQ
					player.hp = player.maxHp;
					player.drawTo(player.maxHp);
					const result = await player.chooseBool('将武将牌技能调整为与游戏开始时一致').forResult();
					if (result.bool) {
						player.draw(player.storage.QQQ_xiasi.length);
						player.storage.QQQ_xiasi = [];
						player.skills = ['ybhzy_xiasi', 'ybhzy_rongzhi', 'ybhzy_hongya', 'ybhzy_fuxin'];
						player.initedSkills = [];
						player.tempSkills = {};
						player.invisibleSkills = [];
						player.hiddenSkills = [];
						player.additionalSkills = {};
						player.storage.skill_blocker = [];
						player.disabledSkills = {};
					}
				},
				group: ['ybhzy_fuxin_1', 'ybhzy_fuxin_2'],
				subSkill: {
					1: {
						trigger: {
							player: ['useSkillAfter', 'logSkillBegin'],
						},
						forced: true,
						filter(event, player) {
							return player.storage.QQQ_xiasi.includes(event.sourceSkill || event.skill);
						},
						async content(event, trigger, player) {
							//QQQ
							player.draw();
						},
					},
					2: {
						trigger: {
							global: ['phaseEnd'],
						},
						forced: true,
						filter(event, player) {
							return player.GS().some((q) => player.storage.QQQ_xiasi.includes(q));
						},
						async content(event, trigger, player) {
							//QQQ
							player.draw(player.GS().filter((q) => player.storage.QQQ_xiasi.includes(q)).length);
							player.storage.QQQ_xiasi = [];
						},
					},
				},
			},
			ybhzy_yaxiang: {
				enable: 'phaseUse',
				mod: {
					targetInRange(card, player) {
						if (card.storage && card.storage.QQQ_yaxiang) return true;
					},
					cardUsable(card, player) {
						if (card.storage && card.storage.QQQ_yaxiang) return Infinity;
					},
				},
				usable: 4,
				async content(event, trigger, player) {
					//QQQ
					const link = [];
					for (var i of player.GS()) {
						link.push([i, get.translation(i)]);
					}
					if (link[0]) {
						const result = await player
							.chooseButton(['选择失去武将牌上一个技能', [link, 'tdnodes']])
							.set('ai', (button) => {
								if (['ybhzy_xiasi', 'ybhzy_rongzhi', 'ybhzy_hongya', 'ybhzy_fuxin'].includes(button.link)) return -1;
								return Math.random();
							})
							.forResult();
						if (result.links?.length) {
							if (player.storage.QQQ_xiasi.includes(result.links[0])) {
								player.draw();
							}
							player.RS(result.links[0]);
							const result1 = await player
								.chooseTarget((c, p, t) => t.countCards('he'))
								.set('ai', (t) => -get.attitude(t, player))
								.forResult();
							if (result1.targets && result1.targets[0]) {
								const result2 = await player
									.chooseButton(['展示其中1张牌,若此牌为装备牌/非装备牌,你可使用之/当作一张同类型的牌使用', result1.targets[0].getCards('he')])
									.set('ai', (button) => player.getUseValue(button.link))
									.forResult();
								if (result2.links && result2.links[0]) {
									if (get.type(result2.links[0]) == 'equip') {
										player.equip(result2.links[0]);
									} else {
										var list = [];
										const evt = event.getParent(2);
										for (var i in lib.card) {
											var info = lib.card[i];
											if (info.mode && !info.mode.includes(lib.config.mode)) continue;
											if (!info.content) continue;
											if (get.type(result2.links[0]) != info.type) continue;
											if (evt.filterCard({ name: i }, player, evt)) {
												list.push(['qqq', 'qqq', i]);
												if (i == 'sha') {
													for (var j of Array.from(lib.nature.keys())) {
														list.push(['qqq', 'qqq', 'sha', j]);
													}
												}
											}
										}
										const result3 = await player
											.chooseButton(['当作一张同类型的牌使用', [list, 'vcard']])
											.set('ai', (button) => player.getUseValue(button.link))
											.forResult();
										if (result3.links && result3.links[0]) {
											await player
												.chooseUseTarget(
													{
														name: result3.links[0][2],
														nature: result3.links[0][3],
														storage: { QQQ_yaxiang: true },
													},
													result2.links,
													true
												)
												.set('nodistance', true)
												.set('addCount', false);
										}
									}
								}
							}
						}
					}
				},
			},
			QQQ_xuji: {
				audio: 'qirang',
				trigger: {
					global: ['gameStart'],
				},
				forced: true,
				async content(event, trigger, player) {
					player.expandEquip(1);
					player.expandEquip(2);
					player.expandEquip(3);
					player.expandEquip(4);
					player.expandEquip(5);
					for (var i of ['feilongduofeng', 'qimenbagua', 'qicaishenlu', 'QQQ_juechen', 'QQQ_yuxi']) {
						player.equip(game.createCard(i));
					}
				},
				group: ['QQQ_xuji_1', 'QQQ_xuji_2'],
				subSkill: {
					1: {
						audio: 'qirang',
						trigger: {
							global: ['loseBefore'],
						},
						forced: true,
						filter: (event, player) => event.cards && event.cards.some((q) => ['feilongduofeng', 'qimenbagua', 'qicaishenlu', 'QQQ_juechen', 'QQQ_yuxi'].includes(q.name)),
						async content(event, trigger, player) {
							trigger.cards = trigger.cards.filter((q) => !['feilongduofeng', 'qimenbagua', 'qicaishenlu', 'QQQ_juechen', 'QQQ_yuxi'].includes(q.name));
						},
					},
					2: {
						audio: 'qirang',
						trigger: {
							player: ['loseAfter'],
						},
						forced: true,
						filter: (event, player) => event.cards && event.cards.some((q) => get.type(q) == 'equip'),
						async content(event, trigger, player) {
							for (var i of trigger.cards) {
								if (get.type(i) == 'equip') {
									if (lib.card[i.name].skills) {
										player.addTempSkill(lib.card[i.name].skills, { player: 'phaseEnd' });
									}
								}
							}
						},
					},
				},
			},
			QQQ_jingdu: {
				audio: 'yuhua',
				trigger: {
					global: ['phaseBefore'],
				},
				forced: true,
				init: (player) => (player.storage.QQQ_jingdu = []),
				async content(event, trigger, player) {
					const list = [];
					for (var i in lib.card) {
						var info = lib.card[i];
						if (info.mode && !info.mode.includes(lib.config.mode)) continue;
						if (!info.content) continue;
						if (info.type == 'equip') list.add(i);
					}
					const result = await player
						.chooseButton(['选择一张装备牌', [list, 'vcard']])
						.set('ai', function (button) {
							var name = button.link[2];
							if (game.players.some((q) => q.isEnemiesOf(player) && q.countCards('e', (c) => get.subtype(name) == get.subtype(c)))) {
								return 10 - get.value({ name: name });
							}
							if (trigger.player == player) {
								if (['equip1', 'equip5'].includes(get.subtype(name))) {
									return 2 * get.value({ name: name });
								}
							} else {
								if (['equip2', 'equip3'].includes(get.subtype(name))) {
									return 2 * get.value({ name: name });
								}
							}
							return get.value({ name: name });
						})
						.forResult();
					if (result.links?.length) {
						var card = game.createCard(result.links[0][2]);
						if (card) {
							const result1 = await player
								.chooseTarget('选择角色装备')
								.set('ai', (t) => {
									if (t.isEnemiesOf(player) && t.hasCard((c) => get.subtype(card) == get.subtype(c), 'e')) {
										return -get.attitude(t, player);
									}
									return get.attitude(t, player);
								})
								.forResult();
							if (result1.targets && result1.targets[0]) {
								player.storage.QQQ_jingdu.push(card);
								result1.targets[0].equip(card);
							}
						}
					}
				},
				group: ['QQQ_jingdu_1'],
				subSkill: {
					1: {
						audio: 'yuhua',
						trigger: {
							global: ['phaseAfter'],
						},
						forced: true,
						filter: (event, player) => player.storage.QQQ_jingdu[0],
						async content(event, trigger, player) {
							for (var i of player.storage.QQQ_jingdu) {
								var q = get.owner(i);
								if (q) {
									await q.discard(i);
								}
								i.remove();
							}
							player.storage.QQQ_jingdu = [];
						},
					},
				},
			},
			QQQ_juechen: {
				equipSkill: true,
				mod: {
					globalTo(from, to, distance) {
						return distance + game.countPlayer((Q) => Q.isEnemiesOf(from) && Q.isFriendsOf(to) && Q.hasCard('QQQ_juechen', 'e'));
					},
				},
			},
			QQQ_yuxi: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				async content(event, trigger, player) {
					//QQQ
					var list = ['nanman', 'wanjian', 'taoyuan', 'wugu'];
					const result = await player
						.chooseButton([get.prompt2('QQQ_yuxi'), [list, 'vcard']])
						.set('ai', function (button) {
							var player = _status.event.player;
							return player.getUseValue({ name: button.link[2] });
						})
						.forResult();
					if (result.links?.length) {
						player.chooseUseTarget(result.links[0][2], true, false);
					}
				},
			},
			qicaishenlu: {
				trigger: { source: 'damageBegin1' },
				forced: true,
				filter(event, player) {
					return game.hasNature(event.card, 'linked');
				},
				content() {
					trigger.num++;
				},
			},
			//虚极:锁定技.游戏开始时,你额外增加一套装备栏并游戏外将【飞龙夺凤】【奇门八卦】【七彩神鹿】【绝尘金戈】【传国玉玺】置入此装备栏内,此装备栏不可变动.你失去装备牌后,你视为装备此装备牌直到你的下一个回合结束.
			//台词:祈禳
			//静笃:每个回合开始前/ 结束后,你可将游戏外一张装备牌置于一名角色的相应位置(可替换原装备)/ 你须将以此法引入游戏的装备牌移出游戏.
			//台词:羽化
		},
		card: {
			qicaishenlu: {
				fullskin: true,
				image: 'ext:沧海遗珠/card/qicaishenlu.jpg',
				type: 'equip',
				subtype: 'equip4',
				distance: { globalFrom: -1 },
				skills: ['qicaishenlu'],
				ai: {
					equipValue: 9,
				},
			},
			QQQ_yuxi: {
				image: 'ext:沧海遗珠/card/QQQ_yuxi.jpg',
				type: 'equip',
				subtype: 'equip5',
				ai: {
					basic: {
						equipValue: 7.5,
					},
				},
				skills: ['QQQ_yuxi'],
				fullimage: true,
			},
			QQQ_juechen: {
				image: 'ext:沧海遗珠/card/QQQ_juechen.jpg',
				type: 'equip',
				fullskin: true,
				subtype: 'equip3',
				global: 'QQQ_juechen',
				ai: {
					equipValue: 9,
				},
			},
		},
		translate: {
			chyz1: '沧海遗珠1',
			qicaishenlu: '七彩神鹿',
			qicaishenlu_info: '锁定技,你计算与其他角色的距离时-1,当你造成属性伤害时,你令此伤害+1.',
			QQQ_zhugeguo: '绘诸葛果',
			QQQ_zhugeguo_prefix: '绘',
			QQQ_juechen: '绝尘金戈',
			QQQ_juechen_info: '锁定技,敌方角色计算与己方其他角色距离+1',
			QQQ_yuxi: '传国玉玺',
			QQQ_yuxi_info: '出牌阶段开始时,你可以从【南蛮入侵】、【万箭齐发】、【桃园结义】、【五谷丰登】中选择一张使用.',
			QQQ_xuji: '虚极',
			QQQ_xuji_info: '锁定技.游戏开始时,你额外增加一套装备栏并游戏外将【飞龙夺凤】【奇门八卦】【七彩神鹿】【绝尘金戈】【传国玉玺】置入此装备栏内,此装备栏不可变动.你失去装备牌后,你视为装备此装备牌直到你的下一个回合结束',
			QQQ_jingdu: '静笃',
			QQQ_jingdu_info: '每个回合开始前/ 结束后,你可将游戏外一张装备牌置于一名角色的相应位置(可替换原装备)/ 你须将以此法引入游戏的装备牌移出游戏',
			yb_yanghuiyu: '神羊徽瑜',
			yb_duyu: '神杜预',
			yb_sunshangxiang: '神孙尚香',
			ybxx_sunshangxiang: '神孙尚香',
			yb_zhugeliang: '神诸葛亮',
			ybxx_zhugeliang: '神诸葛亮',
			yb_lidian: '神李典',
			yb_shamoke: '神沙摩柯',
			yb_diaochan: '凤仪貂蝉',
			yb_diaochan_ab: '神貂蝉',
			yb_beimihu: '神卑弥呼',
			yb_bulianshi: '神步练师',
			yb_caojinyu: '金乡公主',
			yb_caojinyu_ab: '神曹金玉',
			yb_huangyueying: '神黄月英',
			yb_caoxiancaohua: '神曹宪&曹华',
			yb_sunhanhua: '神孙寒华',
			yb_guozhao: '神郭照',
			yb_zhaoxiang: '神赵襄',
			yb_liufeng: '神刘封',
			yb_yanghuiyu_prefix: '神',
			yb_duyu_prefix: '神',
			yb_sunshangxiang_prefix: '神',
			ybxx_sunshangxiang_prefix: '神',
			yb_zhugeliang_prefix: '神',
			ybxx_zhugeliang_prefix: '神',
			yb_lidian_prefix: '神',
			yb_shamoke_prefix: '神',
			yb_diaochan_prefix: '神',
			yb_beimihu_prefix: '神',
			yb_bulianshi_prefix: '神',
			yb_caojinyu_prefix: '神',
			yb_huangyueying_prefix: '神',
			yb_caoxiancaohua_prefix: '神',
			yb_sunhanhua_prefix: '神',
			yb_guozhao_prefix: '神',
			yb_zhaoxiang_prefix: '神',
			yb_liufeng_prefix: '神',
			chyz_fsjh: '浮世皆绘',
			ybh_zhongyan: '绘钟琰',
			ybh_zhongyan_prefix: '绘',
			//失败的尝试↓
			yb_yanghuiyu_ybtext: '<font color=cyan>沧海遗珠-001</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_duyu_ybtext: '<font color=cyan>沧海遗珠-002</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_sunshangxiang_ybtext: '<font color=cyan>沧海遗珠-003</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			ybxx_sunshangxiang_ybtext: '<font color=cyan>沧海遗珠-003-改</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_zhugeliang_ybtext: '<font color=cyan>沧海遗珠-004</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			ybxx_zhugeliang_ybtext: '<font color=cyan>沧海遗珠-004-改</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_lidian_ybtext: '<font color=cyan>沧海遗珠-005</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_shamoke_ybtext: '<font color=cyan>沧海遗珠-006</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:某不知名人士<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_diaochan_ybtext: '<font color=cyan>沧海遗珠-007</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_beimihu_ybtext: '<font color=cyan>沧海遗珠-008</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_bulianshi_ybtext: '<font color=cyan>沧海遗珠-009</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_caojinyu_ybtext: '<font color=cyan>沧海遗珠-010</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_huangyueying_ybtext: '<font color=cyan>沧海遗珠-011</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_caoxiancaohua_ybtext: '<font color=cyan>沧海遗珠-012</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_sunhanhua_ybtext: '<font color=cyan>沧海遗珠-013</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_guozhao_ybtext: '<font color=cyan>沧海遗珠-014</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_zhaoxiang_ybtext: '<font color=cyan>沧海遗珠-015</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			yb_liufeng_ybtext: '<font color=cyan>沧海遗珠-016</font><br>♦️️︎技能设计:戏中好气<br>♦️️︎代码撰写者:夜白<br>♦️️︎插图:三国杀<br>♦️️︎配音:三国杀<br>',
			//失败的尝试↑
			//羊徽瑜
			ybyhy_xuyin: '绪隐',
			ybyhy_xuyin_info: '锁定技.1.当你因「桃」或者「桃园结义」回复体力时,「桃」或者「桃园结义」的使用者获得一张「惠」标记,拥有<惠>标记的角色出牌阶段开始前,其可摸x张牌(x为该角色拥有的「惠」标记数).当你受到伤害时,伤害来源获得一张「狭」标记,拥有「狭」标记的角色的出牌阶段开始前,其须弃置y张牌(若牌数不足则全弃,y为该角色拥有的「狭」标记)并于弃牌阶段开始前流失Y点体力.2.每当场上有角色出现体力值或手牌数变为0、武将牌翻至背面正面、武将牌横置重置这几种时机之一时,你摸1张牌.',
			ybyhy_xuyin1: '绪隐',
			ybyhy_xuyin2: '绪隐',
			ybyhy_xuyin3: '绪隐',
			ybyhy_xuyin4: '绪隐',
			ybyhy_xuyin5: '绪隐',
			ybyhy_xuyin6: '绪隐',
			ybyhy_xuyin1_info: '绪隐',
			ybyhy_xuyin2_info: '绪隐',
			ybyhy_xuyin3_info: '绪隐',
			ybyhy_xuyin4_info: '绪隐',
			ybyhy_xuyin5_info: '绪隐',
			ybyhy_xuyin6_info: '绪隐',
			ybyhy_cihua: '慈化',
			ybyhy_cihua_info: '1.当你受到伤害或回复体力后,你可以先弃置三张手牌,选择弃置场上一张「惠」标记或一张「狭」标记,令一名角色翻面,可以选择与另一角色各弃置任意张牌,再摸等量的牌. 2.其他角色于其回合内使用第z张牌时,若此牌为基本牌或普通锦囊牌,你可将此牌收入手牌,并令此牌无效.(z为你当前体力).',
			ybyhy_minzeng: '悯憎·分配',
			ybyhy_minzeng_info: '游戏开始时,你可获得一张「悯」标记与一张「憎」标记,「悯」标记置于你的武将牌上,并选择一名角色获得「憎」标记,你的回合结束时,可将「悯」「憎」分别移至另一名角色的武将牌上,拥有「悯」的角色下一回合结束或阵亡后,「悯」须移回你的武将牌上,拥有「憎」的角色阵亡后,你可选择将「憎」移至另一名角色上,若此时你放弃移动「憎」,「憎」消失移出游戏,你回复2点体力并选择是否获得其一个技能(觉醒技、限定技、主公技除外).拥有「悯」的角色,回合开始前回复2点体力,摸1张牌,回合结束后摸2张牌,回合手牌上限＋2.拥有「憎」的角色,回合开始前流失1点体力,手牌上限-2.',
			ybyhy_minzeng_min: '悯憎·憎',
			ybyhy_minzeng_minzeng: '悯憎·收益',
			ybyhy_minzeng_minyi: '悯憎·悯移',
			ybyhy_minzeng_zengyi: '悯憎·憎移',
			ybyhy_minzeng_zengyi_info: '是否获得其一个技能(觉醒技、限定技、主公技除外)(因借鉴代码,这里使命技也排除掉了).',
			ybyhy_minzeng_init: '悯憎·初始',
			//杜预
			ybdy_qingyu: '请谕',
			ybdy_qingyu_info: '1.游戏开始前,你将所有的基本牌、锦囊牌牌名记录在<武库>当中.2.出牌阶段,你可重铸一张基本牌,若此时<武库>中有未点亮的牌名,则你可点亮<武库>中的一种牌名,每回合至多重铸x次(x为你的体力值).若你点亮的牌名不小于6种,则你立即获得技能［破势］.3.当你回合内使用一张非转化的锦囊牌或回合外使用、打出的一张非转化的基本牌时,若此牌名在<武库>中已被点亮,你可以摸一张牌.',
			ybdy_qingyu_light: '请谕·点亮',
			ybdy_qingyu_light_info: '点亮<武库>中的一种牌名,若你点亮的牌名不小于6种,则你立即获得技能［破势］.',
			ybdy_zhengwu: '整武',
			ybdy_zhengwu_info: '1.每当你回合开始前或回合外受到一点伤害后,你可令至多3名角色依次摸3张牌并弃1张牌,再令至多3名角色进入横置状态.2.每回合限一次,你可将一张牌当作<武库>中已点亮的牌使用(一种牌名每回合限一次).',
			ybdy_zhengwu2: '整武次数',
			ybdy_kuangzou: '匡奏',
			ybdy_kuangzou_info: '觉醒技,出牌阶段开始前,若你本场游戏使用［整武］技能不少于6次,则你减一点体力上限,将［整武］中<每回合限一次>改为<每回合限三次>.',
			ybdy_poshi: '破势',
			ybdy_poshi_info: '锁定技.1.每回合结束后,你随机从牌堆中使用两张装备牌,随机对一名横置状态的角色造成一点火焰伤害(若没有横置角色则不触发伤害).2.当你成为杀的目标时,你摸两张牌.当你对其他角色使用杀时,该角色须弃置两张牌(若牌不足则全弃).',
			//孙尚香
			ybssx_jibing: '戎装',
			ybssx_jibing_info: '锁定技,当你失去装备区里的一张牌后,你展示牌堆顶3张牌,并加入队列,依次使用队列中所有装备牌,最后获得其余牌;你的回合开始前/结束后,你随机从牌堆里使用1张装备牌;游戏开始时,随机装备两件装备.',
			ybssx_lieyuan: '烈缘',
			ybssx_lieyuan_info: '1.当你受到伤害后或出牌阶段开始前,你可将你区域里的一张牌移动至一名角色区域里相应位置.若如此做,你回复1点体力,再选择是否令该角色回复1点体力并摸2张牌.2.出牌阶段,你可弃置2张手牌,令你和一名已受伤的其他角色各回复1点体力.',
			ybssx_lieyuanxx: '烈缘',
			ybssx_lieyuanxx_info: '1.当你受到伤害后或出牌阶段开始前/结束后,你可选择一名其他角色.你弃置一张手牌或将一张装备牌置入其装备区.若如此做,你回复1点体力,再选择是否令该角色回复1点体力并摸2张牌.2.出牌阶段,你可弃置2张手牌,令你和一名已受伤的其他角色各回复1点体力.',
			ybssx_jieyin: '烈缘',
			ybssx_jieyin_info: '出牌阶段,你可弃置2张手牌,令你和一名已受伤的其他角色各回复1点体力.',
			//诸葛亮
			ybzgl_zhenhu: '阵护',
			ybzgl_zhenhu_info: '当你受到伤害时,你可发动一次判定并获得判定牌.若判定结果为红色,则此伤害无效;若判定结果为黑色,你可移动场上1张牌.',
			ybzgl_dongxu: '洞虚',
			ybzgl_dongxu_info: '1.回合外,你可以将一张黑色牌当【无懈可击】使用,若如此,你可再选择令1名角色摸1张牌.2.其他角色回合结束后,你可选择x名角色.或令其依次回复1点体力并回复武将牌,或令其进入横置状态(x为本回合你失去的黑色牌数).',
			ybzgl_qizhu: '祈祝',
			ybzgl_qizhu_info: '锁定技.1.准备阶段和结束阶段,你观看牌堆顶的7张牌,你可以将其中任意数量的牌置于牌堆顶,将其余的牌置于牌堆底.2.出牌阶段开始时,你摸1张牌,再选择将1张手牌置于武将牌上称为<风>.',
			ybzgl_shiyan: '势焰',
			ybzgl_shiyan_info: '1.出牌阶段限4次,当你使用的牌花色与<风>中有的牌相同,则你可摸1张牌并选择对1名角色造成y点火焰伤害.2.出牌阶段结束时,若你武将牌上的<风>花色不少于4种或牌数不少于4张,你须弃置所有<风>.若如此做,你可选择对至多y名角色依次造成y点火焰伤害.(y为<风>标记中牌的花色种类).',
			ybzgl_shiyanxx: '势焰',
			ybzgl_shiyanxx_info: '1.出牌阶段限y次,当你使用的牌花色与<风>中有的牌相同,则你可摸1张牌并选择依次对y名角色造成1点火焰伤害.2.出牌阶段结束时,若你武将牌上的<风>花色不少于4种或牌数不少于4张,你须弃置所有<风>.若如此做,你可选择对y名角色依次造成2点火焰伤害.(y为<风>标记中牌的花色种类).',
			//李典
			ybld_chenxun: '忱恂',
			ybld_chenxun_info: ' 锁定技.1.摸牌阶段,你放弃摸牌,改为观看牌堆顶的2＋X张牌,你选择获得其中2张牌,其余牌置于「令你获得忱恂的角色」的武将牌上.(X为「令你获得忱恂的角色」武将牌上的技能数).2.回合结束时,你将因〖忱恂〗置于「令你获得忱恂的角色」武将牌上的牌交给1名角色并令其执行1次额外的摸牌阶段和出牌阶段,若其未拥有技能〖忱恂〗,则你回复所有体力并将手牌补至体力上限,令其获得〖忱恂〗直到本次额外的摸牌阶段和出牌阶段结束.',
			ybld_minde: '愍德',
			ybld_minde_info: '1.当你对其他角色造成1点伤害后,或受到其他角色造成的1点伤害后,你可以摸2张牌,再交给其任意张牌(至少1张),若你以此法给出的牌不少于2,则你可以获得其武将牌上的1个技能直到你的下个回合结束.2.若你拥有的技能数不大于4,则将<你可以摸2张牌>改为<你可以摸3张牌>.',
			//沙摩柯
			ybsmk_shangying: '赏应',
			ybsmk_shangying_info: '锁定技.1.回合开始/结束时,若场上有武器牌,你选择1张获得之.2.当你于一回合内使用或打出第X张牌时,你摸X张牌.3.若X不小于1/2/3/4/5/9,你拥有【OL涯角】/【OL 界挑衅】/【OL 界咆哮】/【OL 界铁骑】/【OL界武圣】/【移动版谋烈弓】.4.其他角色回合结束后,若你本回合失去的牌不小于X,你摸X张牌(X为你的攻击范围).',
			'#ybsmk_shangying1': '蒺藜骨朵,威震慑敌!',
			'#ybsmk_shangying2': '看我一招,铁蒺藜骨朵!',
			//卑弥呼
			ybbmh_wuzhi: '巫治',
			ybbmh_wuzhi_info: '当场上有角色受到非属性伤害/武将牌翻面,你可令1名没有<巫治>标记的角色获得标记<献>;当场上有角色受到属性伤害/武将牌翻回正面,你可令1名没有<巫治>标记的角色获得标记<率>.',
			ybbmh_huanchao: '唤潮',
			ybbmh_huanchao_info: '限定技.转换技.你的出牌阶段/你于回合外使用或打出牌时,你可弃置3张不同类型的牌,并执行,阳:令拥有<献>的角色依次回复X点体力;阴:令拥有<率>的角色依次流失X点体力.执行结束后,相关角色弃置<巫治>标记(X为此技能发动次数).',
			ybbmh_chizhang: '持杖',
			ybbmh_chizhang_info: '回合结束时,若你本回合造成的伤害不低于你的体力值上限,则你可回复1名角色一个已发动过的限定技.',
			ybbmh_chizhangd: '持杖',
			ybbmh_chizhangd_info: '回合结束时,若你本回合造成的伤害不低于你的体力值上限和手牌上限之和,则你可回复1名角色一个已发动过的限定技.',
			ybbmh_chizhangt: '持杖',
			ybbmh_chizhangt_info: '回合结束时,若你本回合使用的牌不低于你的体力值上限和手牌上限之和,则你可回复1名角色一个已发动过的限定技.',
			ybbmh_chizhangq: '持杖',
			ybbmh_chizhangq_info: '回合结束时,若你本回合使用的牌或弃牌阶段弃置的牌不低于你的体力值上限和手牌上限之和,则你可回复1名角色一个已发动过的限定技.',
			ybbmh_chizhangp: '持杖',
			ybbmh_chizhangp_info: '一名角色回合结束时,若场上有发动过的限定技且你本回合失去的牌不少于该角色失去的牌,你可选择令一个限定技回复.',
			ybbmh_lushou: '录受',
			ybbmh_lushou_info: '锁定技.1.每当场上有角色获得<献>/<率>标记,你摸2/3张牌.2.若你有已发动过的限定技,则你摸牌阶段摸牌数和手牌上限＋3.3.每当你发动技能〖持杖〗,你和拥有<献>的角色各摸3张牌.',
			//貂蝉
			ybdc_ruofu: '若芙',
			ybdc_ruofu_info: '回合结束时,若场上有未拥有<若芙>标记的角色,你可从牌堆顶摸1张牌,再将1张牌置于1名没有<若芙>标记的其他角色武将牌上,视为标记<若芙>.你可重复此流程至多3次.',
			ybdc_sulian: '愫怜',
			ybdc_sulian_info: '锁定技.1.拥有<若芙>标记的角色回合开始时流失1点体力.2.一名拥有<若芙>的角色受到另一名拥有<若芙>角色造成的伤害后,该角色<若芙>标记进入弃牌堆,你摸1张牌,若此伤害为〖杀〗的伤害,你额外多摸1张牌且回复1点体力.',
			ybdc_qilu: '泣露',
			ybdc_qilu_info: '锁定技.当你被作为使用牌的目标时,你摸1张牌.若使用牌的角色拥有<若芙>标记,其须流失1点体力并弃置4-X张牌(X为你的体力值,若不足则全弃).',
			ybdc_ziman: '姿曼',
			ybdc_ziman_info: '锁定技.1.回合开始时,若场上有<若芙>标记的角色,你分别将<若芙>标记收入手牌.当你收入第1/2/3张<若芙>标记时,你回复1点体力/令本次选择的角色流失1点体力/你与本次选择的角色互换位置且其下个回合改为由你操控.2.若你以此法获得了3张<若芙>标记,则你可令之前拥有标记的3名角色按照座位轮次依次对后面一位<若芙>角色视为使用1张〖决斗〗.',
			//步练师
			ybbls_qiangong: '虔恭',
			ybbls_qiangong_info: '1.每回合每个角色限一次.每回合每种花色限展示一次.2.出牌阶段,你可选择展示1张未展示过的花色的牌并指定1名角色,令其展示所有牌,你将该角色的牌中与你展示花色相同的牌交给你指定的另外1名角色.3.若你以此法移交的牌不大于2,你摸1张牌并重置此花色的展示次数.4.你每发动一次〖虔恭〗,本回合手牌上限＋2.', //;大于5,你本回合不能再发动此技能
			ybbls_yuanya: '缘雅',
			ybbls_yuanya_info: '每名角色每项限一次.回合开始时/回合结束时,你可以指定1名角色回复1点体力和摸3张牌并选择令其①弃牌阶段开始前额外获得1个摸牌阶段②弃牌阶段结束后额外获得1个出牌阶段③废除判定区④获得〖OL界制衡〗.',
			ybbls_yuanya_zhiheng: '制衡',
			// 'ybbls_yuanya_info':'1.每名角色每项限一次.回合开始时,你可以指定1名角色回复1点体力和摸3张牌并选择令其①弃牌阶段开始前获得一个额外摸牌阶段②弃牌阶段结束后额外获得1个出牌阶段③废除判定区.2.若你一个回合内〖虔恭〗移交牌的花色数为4,则你回合结束时也可以发动此技能.',
			//曹金玉
			ybcjy_bashu: '罢梳',
			ybcjy_bashu_info: '1.回合开始前,你可弃置任意张装备区的牌并摸相同数量的牌,将本回合以下前X个阶段改为出牌阶段:①判定阶段②摸牌阶段③弃牌阶段(X为你弃置的装备区的牌数且大于3的部分不生效);2.罢梳·隅泣,详情见下',
			ybcjy_bashu_2: '罢梳·隅泣',
			ybcjy_bashu_2_info: '其他角色回合限2次,当你距离0以内的一名角色受到伤害后,你可以观看牌堆顶的3张牌,将其中至多1张牌交给受伤角色,获得至多1张牌,剩余的牌放回牌堆顶.',
			ybcjy_duijing: '对镜',
			ybcjy_duijing_info: '1.出牌阶段开始时,你可以摸1张牌并令〖罢梳〗中的一个数字+1(单项数字至多为5).若该出牌阶段为你的第Y次出牌阶段(Y为3的倍数),则可以额外摸3张牌.2.其他角色出牌阶段结束时,若此出牌阶段其对距离范围为2以内的角色使用过牌,你可选择移动其区域里的1张牌或弃置其1张手牌.',
			ybcjy_lvzhi: '虑至',
			ybcjy_lvzhi_info: '其他角色回合结束时,若其本回合使用牌的目标数不小于3或进入弃牌堆的牌数不小于3,你可弃置1张装备牌并摸1张牌,获得1次额外的出牌阶段.弃置的此装备牌计入下一次发动〖罢梳〗弃置的牌数.',
			//黄月英
			ybhyy_guishi: '闺识',
			ybhyy_guishi_info: '1.游戏开始时(刷脚气卡之后),你摸4张牌,并将4张牌置于你的武将牌上,称为<闺识>.2.摸牌阶段/出牌阶段结束时,你可以用任意张手牌替换等量的<闺识>.3.每当场上有判定生效,且<闺识>牌数量少于7,你可将牌堆顶上的1张牌置于<闺识>牌中.4.每个回合限一次,你可视为使用1张<闺识>牌中的非延时锦囊的同名牌.',
			ybhyy_lancai: '兰才',
			ybhyy_lancai_info: ' 1.回合开始前,你可观看牌堆顶X张牌,将其中任意数量的牌置于牌堆顶,将其余的牌置于牌堆底(X为<闺识>牌数量).2.出牌阶段限一次,你观看一名其他角色的手牌,可将其中1张手牌与<闺识>牌中的1张交换,你可弃置其手牌中3张花色相同的牌.',
			ybhyy_bingxue: '冰雪',
			ybhyy_bingxue_info: '锁定技.1.若你装备区没有防具牌,你视为装备【八卦阵】;若<闺识>的花色数为4,你不能成为延时锦囊牌的目标且受到伤害-1.2.当你使用锦囊牌时,你可展示牌堆顶2张牌并获得其中的非基本牌与该锦囊颜色相同的基本牌,基本牌进入弃牌堆.你使用锦囊牌无距离限制且你的手牌上限＋Y(Y为本回合进入弃牌堆的基本牌数).3.回合结束时,若你的<闺识>牌大于4,则你将<闺识>牌弃置至4张,并移动X场上的牌,X为以此法弃置的牌.',
			//二曹
			ybcxch_lingxi: '灵犀',
			ybcxch_lingxi_info: '当你使用或打出牌后,若本回合你没有使用或打出过与此牌花色相同的牌,你可将牌堆底的1张牌明置于武将牌上,称为<玉娉>.若<玉娉>与此牌颜色相同,你可将牌堆顶1张牌明置于武将牌上,称为<婷袅>.',
			ybcxch_gongsheng: '共笙',
			ybcxch_gongsheng_info: '锁定技.当<玉娉>的类别数或<婷袅>的花色数发生变化时,你摸1张牌.若<玉娉>的类别数达到3,你须将所有的<玉娉>交给1名角色.',
			ybcxch_lianyu: '敛语',
			ybcxch_lianyu_info: '当你或其他没有手牌的角色成为一张非装备牌的唯一目标/受到伤害时,你可弃置3张花色各不相同的<婷袅>,令此牌/此伤害无效.',
			ybcxch_xixuan: '系璇',
			ybcxch_xixuan_info: '你可将<玉娉>全部置入<婷袅>,视为使用1张非延时锦囊牌;你可弃置所有的<婷袅>,视为使用1张基本牌.',
			//孙寒华
			ybshh_yuniao: '余袅',
			ybshh_yuniao_info: '回合结束时,阳:你可获得1名角色1张牌,对该角色造成1点火属性伤害;阴:你可交给1名角色1张牌,对该角色造成1点伤害.',
			ybshh_qingsi: '青丝',
			ybshh_qingsi_info: '每当你使用或打出红色牌,你可弃置1张牌,视为1名其他角色使用1张【雷杀】.若此【雷杀】未造成伤害/造成伤害,你弃置该角色1张牌并视为对该角色使用1张【雷杀】/1张【火杀】.',
			ybshh_xianyin: '天音',
			ybshh_xianyin_info: '锁定技.若你造成伤害的属性或方式(造成伤害的是否为实体卡牌)与你上一次造成的伤害不同,则此伤害＋2;若均相同,你摸1张牌并可选择发动〖余袅〗.每个回合结束后,你摸X张牌(X为你本回合非摸牌阶段获得的牌数).',
			//郭照
			ybgz_gongshu: '恭恕', //zunwei
			ybgz_gongshu_info: '锁定技.每当有角色弃置牌后,你摸X-1张牌(X为其弃置的牌数).若你弃置的牌字数之和与本回合你上一次弃置的牌字数之和相同,你摸1张牌且本回合视为未发动过〖束俭〗(若此时你的手牌数不大于4,则改为摸2张).', //原先摸2
			// ybgz_gongshu_info:'锁定技.每当有角色弃置牌时,你摸X-1张牌(X为其弃置的牌数).若你弃置的牌字数之和与本回合你上一次弃置的牌字数之和相同,你摸1张牌且本回合视为未发动过〖束俭〗.',//原先摸2
			ybgz_shujian: '束俭', //pianchong
			ybgz_shujian_info: '出牌阶段限两次.你可弃置至少Y张手牌,你可使用其中1张牌(Y为你本回合发动〖束俭〗的次数+2).',
			//赵襄
			ybzx_huashuang: '化霜', //fanghun
			ybzx_huashuang_info: '锁定技.当你于一个回合内第X次造成伤害时,此伤害＋Y (X为你的体力值,Y为你与受到伤害角色体力值的差);当你第一次造成了不少于4点的伤害时,你增加1点体力上限.',
			ybzx_ningao: '凝傲', //fuhan
			ybzx_ningao_info: '锁定技.当你的体力值变化后,你摸1张牌;当你已损失体力值不小于0/1/2/3/4时,你可以将1张♠️️牌当作【无懈可击】使用/使用牌不能被响应/回合外使用或打出【闪】后可以使用1张【杀】/可以将1张♥️️牌当作【桃】使用/手牌数恒为8.',
			ybzx_ningao_long_info: '回合外失去牌后可以使用1张【杀】',
			// 锁定技.当你的体力值变化时,你摸1张牌;当你已损失体力值不小于0/1/2/3/4时,你可以将1张♦️️牌当作【火杀】使用或打出/使用牌不能被响应/回合外失去牌后可以使用1张【杀】/可以将1张♥️️牌当作【桃】使用/手牌数恒为8.
			//刘封
			yblf_zhenzhi: '阵峙',
			yblf_zhenzhi_info: '准备阶段/结束阶段,你可获得/弃置X/至多6-X名角色各1张牌,被获得/弃置牌的角色须弃置2张牌/流失2点体力,你摸6-X/X张牌.直到你的下个回合开始.本回合〖阵峙〗角色回复体力后/进入濒死状态时,你回复1点体力/摸1张牌(X为你准备阶段选择获得牌的角色数且不大于6).',
			/*
	  准备阶段,你可获得X名角色各1张牌,相关角色弃置2张牌,你摸6-X张牌
	  结束阶段,你可弃置至多6-X名角色各1张牌,相关角色流失2点体力,你摸X张牌
	  直到你的下个回合开始.本回合〖阵峙〗角色回复体力时,你回复1点体力
	  直到你的下个回合开始.本回合〖阵峙〗角色进入濒死状态时,你摸1张牌
	  神刘封 4勾玉
	  阵峙:准备阶段/结束阶段,你可获得/弃置X/至多6-X名角色各1张牌,被获得/弃置牌的角色须弃置2张牌/流失2点体力,你摸6-X/X张牌.直到你的下个回合开始.本回合〖阵峙〗角色回复体力/进入濒死状态,你回复1点体力/摸1张牌(X为你准备阶段选择获得牌的角色数且不大于6).
	  台词:陷嗣
	  */
			ybhzy_xiasi: '遐思', //博览
			ybhzy_xiasi_info: '锁定技.每当你于一个回合内首次使用或打出牌名字数为X的牌时,你从2X张武将牌中选择获得一个技能直到本回合结束.',
			ybhzy_rongzhi: '容止', //仪法
			ybhzy_rongzhi_info: '出牌阶段限一次.你可重铸至少3张花色各不相同的牌并获得技能〖雅相〗直到本回合结束,你可令一名角色手牌上限-1.',
			ybhzy_hongya: '弘雅', //保族
			ybhzy_hongya_info: '当有角色进入濒死状态后,你可选择失去武将牌上的一个技能令其将体力值回复至1并将手牌摸至4,你可令一名角色体力值上限-1.',
			ybhzy_fuxin: '赋心', //啸咏
			ybhzy_fuxin_info: '锁定技.当你失去最后一张手牌时,你将手牌和体力值补至体力上限,你可将武将牌技能调整为与游戏开始时一致.当你使用或失去因〖遐思〗获得的技能时,你摸1张牌.',
			ybhzy_yaxiang: '雅相', //观骨
			ybhzy_yaxiang_info: '出牌阶段限4次.你可选择失去武将牌上一个技能,观看一名角色的牌并展示其中1张牌,若此牌为装备牌/非装备牌,你可使用之/当作一张同类型的牌使用',
			'#ybhzy_hongya1': '好女宜家,可度大厄.',
			'#ybhzy_hongya2': '宗族有难,当施以援手.',
			/*
	  绘钟琰  晋  3勾玉
	  遐思:锁定技.每当你于一个回合内首次使用或打出牌名字数为X的牌时,你从2X张武将牌中选择获得一个技能直到本回合结束.
	  台词:博览
	  容止:出牌阶段限一次.你可重铸至少3张花色各不相同的牌并获得技能〖雅相〗直到本回合结束,你可令一名角色手牌上限-1.
	  台词:仪法
	  弘雅:当有角色进入濒死状态后,你可选择失去武将牌上的一个技能令其将体力值回复至1并将手牌摸至4,你可令一名角色体力值上限-1.
	  台词:保族
	  赋心:锁定技.当你失去最后一张手牌时,你将手牌和体力值补至体力上限,你可将武将牌技能调整为与游戏开始时一致.当你使用或失去因〖遐思〗获得的技能时,你摸1张牌.
	  台词:啸咏
	  ＊雅相:出牌阶段限Y次.你可选择失去武将牌上一个技能,观看一名角色的牌并展示其中1张牌,若此牌为装备牌/非装备牌,你可使用之/当作一张同类型的牌使用(Y为本回合你发动〖遐思〗的次数).
	  台词:观骨
	  */
			//换行锚点
			//----------------------
		}, //翻译(必填)
		dynamicTranslate: {
			//动态翻译
			ybbmh_huanchao(player) {
				if (player.storage.ybbmh_huanchao_ben == true) return '限定技.转换技.你的出牌阶段/你于回合外使用或打出牌时,你可弃置3张不同类型的牌,并执行,<span class=thundertext>阳:令拥有<献>的角色依次回复X点体力</span>;阴:令拥有<率>的角色依次流失X点体力.执行结束后,相关角色弃置<巫治>标记(X为此技能发动次数).';
				return '限定技.转换技.你的出牌阶段/你于回合外使用或打出牌时,你可弃置3张不同类型的牌,并执行,阳:令拥有<献>的角色依次回复X点体力;<span class=thundertext>阴:令拥有<率>的角色依次流失X点体力</span>.执行结束后,相关角色弃置<巫治>标记(X为此技能发动次数).';
			},
			ybcjy_bashu_2(player) {
				var info = lib.skill.ybcjy_bashu_2.getInfo(player);
				return `每名其他角色的回合限两次.当有角色受到伤害后,若你至其的距离不大于<span class=thundertext>${info[0]}</span>,则你可以观看牌堆顶的<span class=firetext>${info[1]}</span>张牌.你将其中至多<span class=greentext>${info[2]}</span>张牌交给受伤角色,可以获得剩余牌中的至多<span class=yellowtext>${info[3]}</span>张牌,并将其余牌以原顺序放回牌堆顶.(所有具有颜色的数字至多为5)`;
			},
			ybzx_ningao(player) {
				var str = '锁定技.当你的体力值变化时,你摸1张牌;当你已损失体力值不小于0/1/2/3/4时,你';
				// var list=['可以将1张♦️️牌当作【火杀】使用或打出','使用牌不能被响应','回合外失去牌后可以使用1张【杀】','可以将1张♥️️牌当作【桃】使用','手牌数恒为8.'];
				var list = ['可以将1张♠️️牌当作【无懈可击】使用', '使用牌不能被响应', '使用牌不能被响应/回合外使用或打出【闪】后可以使用1张【杀】', '可以将1张♥️️牌当作【桃】使用', '手牌数恒为8.'];
				// if(player.getAttackRange()>=1)list[0]=`<span class=yellowtext>${list[0]}</span>`;
				// if(player.getAttackRange()>=2)list[1]=`<span class=yellowtext>${list[1]}</span>`;
				// if(player.getAttackRange()>=3)list[2]=`<span class=yellowtext>${list[2]}</span>`;
				// if(player.getAttackRange()>=4)list[3]=`<span class=yellowtext>${list[3]}</span>`;
				// if(player.getAttackRange()>=5)list[4]=`<span class=yellowtext>${list[4]}</span>`;
				for (var i = 0; i < list.length; i++) {
					if (i != 0) str += '/';
					if (player.maxHp - player.hp >= i) {
						str += `<span class=yellowtext>${list[i]}</span>`;
					} else {
						str += list[i];
					}
				}
				return str;
			},
			//动态翻译
		},
	};
	/*
  // if(!lib.characterPack.mode_guozhan)lib.characterPack.mode_guozhan;
  // 这是一个大饼,也是一个尝试
  */
	for (var i in No1_chyz.character) {
		No1_chyz.character[i][4].push(`ext:沧海遗珠/image/character/${i}.jpg`);
	}
	for (var i in No1_chyz.card) {
		if (!No1_chyz.card[i].image) No1_chyz.card[i].image = `ext:沧海遗珠/image/card/${i}.png`;
	} //以此法批量添加卡牌贴图
	lib.config.all.characters.add('No1_chyz');
	lib.config.characters.add('No1_chyz');
	lib.translate['No1_chyz_character_config'] = "<span style='color: #FED4D4'>沧海遗珠</span>";
	return No1_chyz;
});

import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '原动漫包',
		precontent() {
			const character = {
				dongman_Riko: {
					translate: '理子',
					sex: 'female',
					group: 'meng',
					hp: 4,
					skills: ['SE_Yirong', 'se_youhuo'],
				},
				dongman_madoka: {
					translate: '鹿目圆香',
					sex: 'female',
					group: 'meng',
					hp: 8,
					skills: ['SE_linggong', 'se_cibei', 'se_jiujiqiyuan'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_Rika: {
					translate: '古手梨花',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_shenghua', 'wumai', 'SE_poxiao'],
				},
				dongman_Nadeko: {
					translate: '千石抚子',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_fusheng', 'SE_sheshen'],
				},
				dongman_Kotori: {
					translate: '五河琴里',
					sex: 'female',
					group: 'meng',
					hp: 4,
					skills: ['SE_wufan'],
				},
				BlackRockShooter: {
					translate: '黑岩',
					sex: 'female',
					group: 'meng',
					hp: 4,
					skills: ['SE_lanhuo', 'SE_jiban', 'SE_kuanghua'],
				},
				dongman_Patchouli: {
					translate: '帕秋莉',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_qiyao', 'SE_qiyaomonv', 'SE_xiaochuan'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_madoka3: {
					translate: '救济魔女',
					sex: 'female',
					group: 'mo',
					hp: 8,
					skills: ['SE_mieshi', 'SE_cuojue', 'SE_moyou'],
				},
				dongman_himawari: {
					translate: '向日葵',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_xuhuan', 'SE_xinxianshi', 'SE_qiulao'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_tongtian: {
					translate: '通天教主',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_zhuxian', 'SE_luxian', 'SE_xianxian', 'SE_juexian', 'SE_zhentu'],
				},
				dongman_madoka2: {
					translate: '太虚之神',
					sex: 'female',
					group: 'shen',
					hp: 4,
					skills: ['SE_yinguo', 'SE_yuanhuan', 'SE_chongzu'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_chiya: {
					translate: '鹰白千夜',
					sex: 'female',
					group: 'meng',
					hp: 4,
					skills: ['SE_caozong', 'SE_wuyu', 'SE_NoeSIS', 'SE_duansheng'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_Kousaka: {
					translate: '高坂穗乃果',
					sex: 'female',
					group: 'meng',
					hp: 8,
					skills: ['SE_chuanjiao', 'SE_guohuang', 'SE_LoveLive'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_yuqing: {
					translate: '雾境之主',
					sex: 'female',
					group: 'meng',
					hp: 4,
					skills: ['SE_zhansha', 'SE_wuyuzhiye', 'SE_benjingfaze'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_enma: {
					translate: '阎魔爱',
					sex: 'female',
					group: 'ming',
					hp: 4,
					skills: ['SE_shouling', 'SE_yuanzhou', 'SE_yuhuo', 'SE_xianshi'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_enma2: {
					translate: '地狱少女',
					sex: 'female',
					group: 'ming',
					hp: 0,
					skills: ['SE_wangzhe', 'SE_yindao', 'SE_shapo', 'SE_wanghun', 'SE_chaodu', 'SE_mingwang', 'SE_guiyu'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_Remilia: {
					translate: '蕾米莉亚',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_zhouye', 'SE_hongwu', 'SE_shenqiang', 'SE_yewang'],
				},
				dongman_ribaku: {
					translate: '莉莫',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_shujucunchu', 'SE_shujuduxie', 'SE_shujuqingkong', 'SE_shujufenpei'],
				},
				dongman_astin: {
					translate: '艾亚斯汀',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_mushou', 'SE_shoucang'],
				},
				dongman_Kanade: {
					translate: '立华奏',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_lingyu', 'SE_shouren', 'SE_yinsu'],
				},
				dongman_Mashiro: {
					translate: '神真白',
					sex: 'female',
					group: 'meng',
					hp: 4,
					skills: ['SE_yaoshen', 'SE_jixian', 'SE_linglei', 'SE_yaohuo'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_lianyao: {
					translate: '祁连遥',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_shenzi', 'SE_fanjianziran', 'SE_sishengyimmeng'],
				},
				dongman_Reina: {
					translate: '杀人鬼礼奈',
					sex: 'female',
					group: 'meng',
					hp: 6,
					skills: ['SE_chaidao', 'SE_kuangbao', 'SE_nixing', 'SE_guishen'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_Meirin: {
					translate: '红美玲',
					sex: 'female',
					group: 'meng',
					hp: 4,
					skills: ['SE_huaxiang', 'SE_caiyu', 'SE_xuanlan'],
				},
				dongman_SAKURA: {
					translate: '木之本樱',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_baibian'],
				},
				dongman_shana: {
					translate: '夏娜',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_zhuoyan', 'SE_shenpan', 'SE_duanzui'],
				},
				dongman_Ruri: {
					translate: '堕天圣猫',
					sex: 'female',
					group: 'sheng',
					hp: 8,
					skills: ['SE_zhenlizhimeng', 'SE_xieyan', 'SE_duotian', 'SE_shenyu'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_Alice: {
					translate: '爱丽丝',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_xianjing', 'SE_mengxian'],
				},
				dongman_Makoto: {
					translate: '伊藤诚',
					sex: 'male',
					group: 'zha',
					hp: 5,
					skills: ['SE_hougong', 'SE_haochuan'],
				},
				dongman_Keiichi: {
					translate: '前原圭一',
					sex: 'male',
					group: 'qun',
					hp: 4,
					skills: ['SE_guiyin', 'SE_shenyin'],
				},
				dongman_Tomoyo: {
					translate: '光坂武帝',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_wudi', 'SE_daoxin'],
				},
				dongman_Yoshino: {
					translate: '四糸乃',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_yinzhe', 'SE_kuilei'],
				},
				dongman_Woden: {
					translate: '主神',
					sex: 'female',
					group: 'shen',
					hp: 0,
					skills: ['SE_mosha', 'SE_chuangzao', 'SE_zhushen', 'SE_lunhui'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_Saya: {
					translate: '沙耶',
					sex: 'female',
					group: '',
					hp: 4,
					skills: ['SE_xieshen', 'SE_wanxing', 'SE_qiyuan'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_Meiko: {
					translate: '本间芽衣子',
					sex: 'female',
					group: 'meng',
					hp: 0,
					skills: ['SE_xinyuan', 'SE_chengfo', 'SE_youling', 'SE_shiyuehshi'],
					isBoss: true,
					isBossAllowed: true,
				},
				dongman_Yukari: {
					translate: '八云紫',
					sex: 'female',
					group: 'meng',
					hp: 3,
					skills: ['SE_jiexian', 'SE_xijian'],
				},
				dongman_Kaguya: {
					translate: '蓬莱山辉夜',
					sex: 'female',
					group: 'meng',
					hp: 6,
					skills: ['SE_yongheng', 'SE_xuyu', 'SE_nanti', 'SE_longjing', 'SE_foyu'],
					isBoss: true,
					isBossAllowed: true,
				},
			};
			for (var i in character) {
				character[i].trashBin = [`ext:原动漫包/image/${i}.jpg`];
				lib.translate[i] = character[i].translate;
			}
			Object.assign(lib.character, character);
			lib.characterPack.原动漫包 = character;
			lib.translate.原动漫包_character_config = `原动漫包`;
			lib.config.all.characters.add('原动漫包');
			lib.config.characters.add('原动漫包');
			if (lib.skill._chenhuodajie) {
				lib.skill._chenhuodajie.filter = function (event, player) {
					if (event.player == player) return false;
					if (!event.player.countCards('he')) return false;
					if (player.countCards('h', 'chenhuodajie')) return true;
					var mn = player.getEquips(5);
					if (mn && mn.name == 'muniu' && mn.cards && mn.cards.length) {
						for (var i of mn.cards) {
							if (i.name == 'chenhuodajie') return true;
						}//QQQ
					}
					if (player.getCards('s').concat('SE_qiyuan')) return true;
					return false;
				};
			}//QQQ
			lib.group.push('zha');
			lib.group.push('shen');
			lib.group.push('sheng');
			lib.group.push('meng');
			lib.group.push('ming');
			lib.group.push('mo');
			lib.skill.SE_shaixuan = {
				audio: 2,
				trigger: { global: 'judgeBefore' },
				_priority: Infinity,
				forced: true,
				async content(event, trigger, player) {//QQQ
					let num = 3, card, card1, cards = [];
					while (num-- > 0) {
						card = get.cards()[0];
						player.showCards(card);
						const { bool } = await player.chooseBool('是否改判？')
							.set('ai', function () {
								if (card1) return get.attitude(player, trigger.player) * (trigger.judge(card) - trigger.judge(card1));
								return get.attitude(player, trigger.player) * trigger.judge(card);
							}).forResult();
						if (bool) {
							if (card1) {
								cards.push(card1);
							}
							card1 = card;
						}
						else {
							break;
						}
					}
					if (card1) {
						if (cards[0]) {
							player.gain(cards, 'gain2');
						}
						trigger.cancel();
						trigger.result = {
							card: card1,
							judge: trigger.judge(card1),
							number: card1.number,
							suit: card1.suit,
							color: get.color(card1),
						};
						if (trigger.result.judge > 0) {
							trigger.result.bool = true;
							trigger.player.popup('洗具');
						}
						if (trigger.result.judge < 0) {
							trigger.result.bool = false;
							trigger.player.popup('杯具');
						}
						game.log(trigger.player, '的判定结果为', card1);
						trigger.direct = true;
					}
				},
				ai: {
					tag: {
						rejudge: 10,
					},
				},
			};
			lib.skill.SE_shenghua = {
				audio: 2,
				trigger: { player: 'phaseBegin' },
				check(event, player) {
					return 1;
				},
				_priority: -10,
				content() {
					'step 0';
					player.chooseControl('获得奇迹宣言', '获得碎片筛选', ui.create.dialog('请选择一项', 'hidden')).ai = function () {
						if (Math.random() > 0.5) return '获得奇迹宣言';
						return '获得碎片筛选';
					};
					('step 1');
					if (result.control == '获得奇迹宣言') {
						player.popup('奇迹宣言');
						player.addTempSkill('SE_xuanyan', { player: 'phaseBegin' });
					} else {
						player.popup('碎片筛选');
						player.addTempSkill('SE_shaixuan', { player: 'phaseBegin' });
					}
				},
			};
			lib.skill.SE_xuanyan = {
				audio: 2,
				trigger: { global: 'dying' },
				_priority: 99,
				init(player) {
					player.storage.SE_xuanyan = false;
				},
				check(event, player) {
					var att = get.attitude(player, event.player);
					if (att > 2 && !event.player.countCards('h', 'tao') && !event.player.countCards('h', 'jiu')) return true;
					return false;
				},
				filter(event, player) {
					if (event.player.storage.SE_xuanyan) return false;
					if (event.player.hp > 0) return false;
					if (!event.source) return false;
					return true;
				},
				content() {
					'step 0';
					if (!trigger.source) {
						event.finish();
					} else {
						trigger.player.storage.SE_xuanyan = true;
						trigger.player.mark('宣言', {
							name: '宣言',
							content: '已发动',
						});
						game.addVideo('mark', target, {
							name: '宣言',
							content: '已发动',
							id: 'SE_xuanyan',
						});
						trigger.player.judge();
					}
					('step 1');
					event.num = result.card.number;
					('step 2');
					trigger.source.judge();
					('step 3');
					if (result.card.number == event.num) {
						trigger.player.recover(Math.abs(trigger.player.hp - trigger.player.maxHp));
						trigger.source.loseHp(trigger.source.maxHp);
					}
				},
				group: ['SE_xuanyan2'],
				ai: {
					threaten: 6,
				},
			};
			lib.skill.SE_xuanyan2 = {
				audio: 2,
				trigger: { player: 'phaseUseBegin' },
				_priority: 11,
				check(event, player) {
					return 1;
				},
				content() {
					'step 0';
					player.chooseControl('basic', 'equip', 'trick', 'delay').ai = function (event) {
						if (player.countCards('h', { type: 'basic' }) < 2) return 'basic';
						if (!player.countCards('h', { type: 'trick' })) return 'trick';
						if (Math.random() > 0.5) return 'delay';
						return 'equip';
					};
					('step 1');
					event.type = result.control;
					player.popup(result.control);
					var num = Math.abs(player.countCards('h') - player.maxHp);
					var cards = [];
					for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
						if (get.type(ui.cardPile.childNodes[i]) != event.type) continue;
						cards.push(ui.cardPile.childNodes[i]);
					}
					if (num > 0) {
						if (num <= 3) {
							var cards2 = cards.randomGets(num);
						} else {
							var cards2 = cards.randomGets(3);
						}
						player.gain(cards2);
						player.$gain2(cards2);
						game.log(player, '获得了', cards2);
					} else {
						var cards2 = cards.randomGet();
						player.gain(cards2);
						player.$gain2(cards2);
						game.log(player, '获得了', cards2);
					}
				},
			};
			lib.skill.SE_mipa = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				delay: 0,
				init(player) {
					player.storage.SE_mipa = false;
				},
				filter(event, player) {
					return player.storage.wumai && player.storage.wumai.length;
				},
				forced: true,
				content() {
					'step 0';
					player.getStat('skill').SE_mipa--;
					player.chooseTarget('请选择1名目标', function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					if (result.bool) {
						player.getStat('skill').SE_mipa++;
						event.targets = result.targets[0];
					} else {
						event.finish();
					}
					('step 2');
					player.chooseCardButton(player.storage.wumai, '请弃置1张碎片', true).ai = function (button) {
						return -get.value(button.link);
					};
					if (player == game.me && _status.auto) {
					}
					('step 3');
					player.storage.wumai.remove(result.links[0]);
					if (player.storage.wumai.length == 0) {
						player.unmarkSkill('wumai');
					}
					player.chooseControl('不能使用基本牌', '只能使用基本牌', function (event, player) {
						if (Math.random() > 0.5) return '不能使用基本牌';
						return '只能使用基本牌';
					});
					('step 4');
					if (result.control == '不能使用基本牌') {
						event.targets.addSkill('mipa2');
						if (player.storage.SE_mipa == false) {
							player.storage.SE_mipa = true;
						}
					} else {
						event.targets.addSkill('mipa3');
						if (player.storage.SE_mipa == false) {
							player.storage.SE_mipa = true;
						}
					}
				},
				group: ['SE_mipa4'],
				ai: {
					expose: 0.2,
					threaten: 9,
					order: 6,
					result: {
						target(player, target) {
							return get.attitude(player, target);
						},
						player(player, target) {
							var num = player.storage.wumai.length;
							return num - 1;
						},
					},
				},
			};
			lib.skill.SE_mipa4 = {
				trigger: { player: 'phaseBegin' },
				forced: true,
				popup: false,
				content() {
					player.storage.SE_mipa = false;
					for (var i of game.players) {
						if (i == player) continue;
						i.removeSkill('mipa2');
						i.removeSkill('mipa3');
					}
				},
			};
			lib.skill.mipa2 = {
				mod: {
					cardEnabled(card, player) {
						if (get.type(card, 'trick') == 'basic') return false;
					},
					cardUsable(card, player) {
						if (get.type(card, 'trick') == 'basic') return false;
					},
					cardRespondable(card, player) {
						if (get.type(card, 'trick') == 'basic') return false;
					},
					cardSavable(card, player) {
						if (get.type(card, 'trick') == 'basic') return false;
					},
				},
			};
			lib.skill.mipa3 = {
				mod: {
					cardEnabled(card, player) {
						if (get.type(card, 'trick') != 'basic') return false;
					},
					cardUsable(card, player) {
						if (get.type(card, 'trick') != 'basic') return false;
					},
					cardRespondable(card, player) {
						if (get.type(card, 'trick') != 'basic') return false;
					},
					cardSavable(card, player) {
						if (get.type(card, 'trick') != 'basic') return false;
					},
				},
			};
			lib.skill.SE_poxiao = {
				audio: 2,
				trigger: { player: 'phaseBefore' },
				filter(event, player) {
					var num = player.storage.wumai.length;
					return num > player.countCards('h') && !player.storage.SE_poxiao;
				},
				init(player) {
					player.storage.SE_poxiao = false;
				},
				forced: true,
				content() {
					'step 0';
					player.storage.SE_poxiao = true;
					player.gainMaxHp();
					player.removeSkill('SE_shenghua');
					for (var i of game.players) {
						for (var j in i.tempSkills) {
							i.skills.remove(j);
							delete i.tempSkills[j];
						}
					}
					player.addSkill('SE_mipa');
					player.chooseControl('获得奇迹宣言', '获得碎片筛选', ui.create.dialog('请选择一项', 'hidden')).ai = function () {
						if (Math.random() > 0.5) return '获得奇迹宣言';
						return '获得碎片筛选';
					};
					('step 1');
					if (result.control == '获得奇迹宣言') {
						player.popup('奇迹宣言');
						player.addSkill('SE_xuanyan');
					} else {
						player.popup('碎片筛选');
						player.addSkill('SE_shaixuan');
					}
				},
			};
			lib.skill.wumai2 = {
				audio: 2,
				trigger: { player: 'damageEnd' },
				filter(event, player) {
					if (!event.card || (event.card && event.card.suit == undefined)) return false;
					return player.storage.wumai.length;
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
						player.markSkill('wumai');
						player.storage.wumai = player.storage.wumai.concat(result.card);
					} else {
						player.draw();
					}
				},
			};
			lib.skill.wumai = {
				audio: 2,
				trigger: { player: 'damageEnd' },
				filter(event, player) {
					return event.num > 0 && event.source && event.source.countCards('hej');
				},
				init(player) {
					player.storage.wumai = [];
				},
				intro: {
					onunmark(content, player) {
						player.storage.wumai.length = 0;
					},
					mark(dialog, content, player) {
						dialog.add('<div class="text center">最近的碎片牌</div>');
						var cards = [];
						for (var i = 0; i < content.length; i++) {
							cards.push(content[i]);
						}
						if (cards.length) {
							if (player != game.me) {
								dialog.add([cards, 'blank']);
							} else {
								dialog.add(cards);
							}
						} else {
							dialog.add('(无)');
						}
					},
				},
				marktext: '碎片',
				forced: true,
				content() {
					'step 0';
					player.chooseCardButton(trigger.source.getCards('hej'), '选择' + trigger.num + '张牌置于你的武将牌上', trigger.num).ai = function (button) {
						var att = get.attitude(player, trigger.source);
						if (get.type(button.link) == 'delay' && att > 0) return 1;
						if (get.type(button.link) == 'basic' && att < 0) return 1;
						return get.type(button.link) == 'trick' ? 1 : -1;
					};
					if (player == game.me && _status.auto) {
					}
					('step 1');
					if (result.bool) {
						var cards = [];
						for (var i of result.links) {
							cards.push(i);
						}
						trigger.source.$throw(cards);
						trigger.source.lose(cards, ui.special)._triggered = null;
						player.markSkill('wumai');
						player.storage.wumai = player.storage.wumai.concat(cards);
					} else {
						event.finish();
					}
				},
				group: ['wumai2'],
				ai: {
					maixie: true,
					effect: {
						target(card, player, target) {
							if (player.skills.includes('jueqing')) return [1, -2];
							if (get.tag(card, 'damage')) {
								if (target.hp == target.maxHp) {
									if (!target.skills.includes('SE_mipa')) {
										return [0, 1];
									}
									return [0.7, 1];
								}
								return 0.7;
							}
						},
						player(card, player) {
							if (_status.currentPhase != player) return;
							if (get.type(card) == 'basic' || get.type(card, 'trick') == 'trick') return;
							if (player.hp <= 2) return;
							if (!player.skills.includes('SE_mipa') || player.storage.wumai == 0) {
								return [0, 0, 0, 0];
							}
						},
					},
				},
			};
			lib.skill.SE_kongjianzheng = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player) {
					var type = get.type(card);
					if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
						if (get.type(i) != type) return false;
					}
					return true;
				},
				line: 'fire',
				selectCard: [1, Infinity],
				selectTarget: -1,
				position: 'he',
				filterTarget(card, player, target) {
					return player != target;
				},
				check(card) {
					if (_status.event.player.hp == _status.event.player.maxHp) {
						return 8 - get.value(card);
					}
					return 6 - get.value(card);
				},
				content() {
					'step 0';
					var num = cards.length;
					var dialog = ui.create.dialog('弃置' + num + '张(为' + get.translation(player) + '弃置的张数)和' + get.translation(player) + '弃置的牌类别均相同的牌,或将武将牌翻面并弃置所有牌', 'hidden');
					dialog.classList.add('noselect');
					dialog.add(cards);
					var types = [];
					if (Array.isArray(cards)) for (var i of cards) {
						types.add(get.type(i, 'trick'));
					}
					var res = get.damageEffect(target, player, target, 'fire');
					target.chooseToDiscard(dialog, num, 'he', function (card) {
						return types.includes(get.type(card, 'trick'));
					}).ai = function (card) {
						if (res >= 0) return -1;
						if (num > 2 && player.hp > 1) return 1;
						if (num > 1 && player.hp > 2) return -1;
						return 9 - get.value(card);
					};
					('step 1');
					if (!result.bool) {
						target.turnOver();
						target.discard(target.getCards('hej'));
					}
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							return get.attitude(player, target);
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_jiangui2 = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					var num = game.phaseNumber;
					if (num % 2 == 0) return true;
					return false;
				},
				content() {
					'step 0';
					player.chooseControl('游戏人数', '当前体力', ui.create.dialog('请选择伤害总数', 'hidden')).ai = function () {
						if (player.hp < game.players.length) return '游戏人数';
						return '当前体力';
					};
					('step 1');
					if (result.control == '游戏人数') {
						player.popup(result.control);
						event.num = 0;
						event.num += game.players.length;
						event.goto(2);
					} else {
						player.popup(result.control);
						var num = game.players.length;
						player.draw(num);
						event.num = 0;
						event.num += player.hp;
						event.goto(5);
					}
					('step 2');
					player.chooseTarget(
						function (card, player, target) {
							return player != target;
						},
						'请选择受到伤害的目标',
						true
					).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 3');
					if (result.targets?.length) {
						player.line(result.targets[0], 'fire');
						event.targets = result.targets[0];
						if (event.num == 1) {
							event.targets.damage('fire');
							event.finish();
						} else {
							var controls = [],
								damage = 1;
							do {
								controls.push(damage);
								damage++;
							} while (damage <= event.num);
							player.chooseControl(controls, ui.create.dialog('请选择伤害点数', 'hidden'));
						}
					}
					('step 4');
					var targets = event.targets;
					targets.damage('fire', result.control);
					event.num -= result.control;
					if (event.num) {
						event.goto(2);
					} else {
						event.finish();
					}
					('step 5');
					player.chooseTarget(
						function (card, player, target) {
							return player != target;
						},
						'请选择受到伤害的目标',
						true
					).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 6');
					if (result.targets?.length) {
						player.line(result.targets[0], 'fire');
						event.targets = result.targets[0];
						if (event.num == 1) {
							event.targets.damage('fire');
							event.finish();
						} else {
							var controls = [],
								damage = 1;
							do {
								controls.push(damage);
								damage++;
							} while (damage <= event.num);
							player.chooseControl(controls, ui.create.dialog('请选择伤害点数', 'hidden'));
						}
					}
					('step 7');
					var targets = event.targets;
					targets.damage('fire', result.control);
					event.num -= result.control;
					if (event.num) {
						event.goto(5);
					} else {
						event.finish();
					}
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							return get.damageEffect(target, player);
						},
					},
					expose: 0.5,
				},
			};
			lib.skill.SE_jiangui = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				line: 'fire',
				selectTarget() {
					var num = _status.event.player.hp;
					return [1, num];
				},
				filter(event, player) {
					var num = game.phaseNumber;
					if (num % 2 == 1) return true;
					return false;
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				prompt: '出牌阶段限1次,你可以至多选择你当前体力的目标,对他们各造成1点火焰伤害并依次获得他们的一张牌',
				content() {
					'step 0';
					target.damage('fire');
					('step 1');
					if (target.countCards('hej')) {
						player.gainPlayerCard('hej', target, true)._triggered = null;
					}
				},
				group: ['SE_jiangui2'],
				ai: {
					order: 8,
					result: {
						target(player, target) {
							if (target.countCards('hej') <= 0) return 0;
							return get.damageEffect(target, player);
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_xinyuhuo3 = {
				audio: 2,
				trigger: { player: 'damageBefore' },
				forced: true,
				filter(event, player) {
					return event.num > 0 && event.nature == 'fire';
				},
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					player.draw(trigger.num);
				},
				ai: {
					nofire: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'fireDamage')) return [0, 1];
						},
					},
				},
			};
			lib.skill.SE_xinyuhuo2 = {
				audio: 2,
				enable: 'chooseToUse',
				filter(event, player) {
					var num = game.phaseNumber;
					if (num % 5 == 0 && event.type == 'dying' && player == _status.event.dying) return true;
					return false;
				},
				content() {
					'step 0';
					player.discard(player.getCards('hej'));
					player.hp = player.maxHp;
					var num = Math.abs(player.hp - 2);
					player.damage('fire', num);
					player.hp = player.maxHp;
					('step 1');
					if (player.classList.contains('linked')) player.link();
					('step 2');
					if (player.classList.contains('turnedover')) player.turnOver();
				},
				ai: {
					skillTagFilter(player) {
						if (player.hp > 0) return false;
					},
					save: true,
					result: {
						player: 10,
					},
				},
			};
			lib.skill.SE_xinyuhuo = {
				audio: 2,
				trigger: { player: 'damageAfter' },
				forced: true,
				filter(event, player) {
					return event.num > 0;
				},
				content() {
					player.recover();
				},
				group: ['SE_xinyuhuo2', 'SE_xinyuhuo3'],
			};
			lib.skill.SE_wufan2 = {
				audio: 2,
				trigger: { player: 'phaseBefore' },
				forced: true,
				filter(event, player) {
					return player.storage.SE_wufan <= 0;
				},
				content() {
					player.unmarkSkill('SE_wufan');
					player.clearSkills();
				},
			};
			lib.skill.SE_wufan3 = {
				audio: 2,
				trigger: { player: 'changeHp' },
				forced: true,
				filter(event, player) {
					if (player.storage.SE_lingzhuang && player.hp > 0) return true;
					return false;
				},
				content() {
					if (!player.markSkill('SE_wufan')) {
						player.markSkill('SE_wufan');
					}
					player.storage.SE_wufan++;
					player.storage.SE_lingzhuang = false;
				},
			};
			lib.skill.SE_wufan4 = {
				trigger: { player: 'dying' },
				forced: true,
				popup: false,
				init(player) {
					player.storage.SE_lingzhuang = false;
				},
				_priority: Infinity,
				content() {
					player.storage.SE_lingzhuang = true;
				},
			};
			lib.skill.SE_wufan = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				init(player) {
					player.storage.SE_wufan = 3;
				},
				filter(event, player) {
					return player.storage.SE_wufan > 0;
				},
				intro: {
					content: 'mark',
				},
				mark: true,
				content() {
					'step 0';
					player.storage.SE_wufan--;
					if (player.storage.SE_wufan <= 0) {
						player.unmarkSkill('SE_wufan');
					}
					('step 1');
					player.addTempSkill('SE_xinyuhuo', { player: 'phaseBegin' });
					player.addTempSkill('SE_jiangui', { player: 'phaseBegin' });
					player.addTempSkill('SE_kongjianzheng', { player: 'phaseBegin' });
				},
				group: ['SE_wufan2', 'SE_wufan3', 'SE_wufan4'],
				ai: {
					order: 11,
					result: {
						player(player) {
							var num = player.countCards('h');
							if (player.hp <= 2 && num <= 3) {
								return 8;
							}
							if (player.storage.SE_wufan <= 2) {
								return 2;
							}
							if (player.storage.SE_wufan <= 1) return 0;
							return 4;
						},
					},
					threaten: 1.5,
				},
			};
			lib.skill.SE_jupao3 = {
				trigger: { player: 'phaseEnd' },
				forced: true,
				popup: false,
				_priority: 22,
				filter(event, player) {
					return player.storage.SE_jupao > 0;
				},
				content() {
					player.storage.SE_jupao = 0;
					player.unmarkSkill('SE_jupao');
				},
			};
			lib.skill.SE_jupao2 = {
				trigger: { source: 'damage' },
				forced: true,
				popup: false,
				_priority: Infinity,
				filter(event, player) {
					if (!event.card || event.card.name != 'sha' || event.nature != 'fire') return false;
					if (event.parent.parent.parent.name != 'SE_jupao') return false;
					if (player.storage.SE_jupao <= 0) return false;
					return true;
				},
				content() {
					player.draw(player.storage.SE_jupao);
					if (trigger.player) {
						player.useCard({ name: 'sha', nature: 'fire' }, trigger.player, false);
					}
				},
			};
			lib.skill.SE_jupao = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				init(player) {
					player.storage.SE_jupao = 0;
				},
				intro: {
					content: 'mark',
				},
				marktext: '炮',
				filter(event, player) {
					return player.storage.SE_lanhuo && player.storage.SE_lanhuo.length >= 2;
				},
				content() {
					'step 0';
					var num = player.storage.SE_lanhuo.length;
					player.chooseCardButton(player.storage.SE_lanhuo, '请弃置至少2张牌', [2, num], true).ai = function (button) {
						return -get.value(button.link);
					};
					if (player == game.me && _status.auto) {
					}
					('step 1');
					for (var i of result.links) {
						player.storage.SE_lanhuo.remove(i);
					}
					if (!player.storage.SE_lanhuo.length) {
						player.unmarkSkill('SE_lanhuo');
					}
					if (result.links.length > 2) {
						var num = result.links.length;
						var num2 = num - 2;
						player.storage.SE_jupao += num2;
						player.markSkill('SE_jupao');
					}
					('step 2');
					var targets = [];
					for (var i of game.players) {
						if (i == player) continue;
						if (get.distance(player, i, 'attack') > 1) continue;
						targets.push(i);
					}
					player.addTempSkill('unequip', 'phaseAfter');
					player.useCard({ name: 'sha', nature: 'fire' }, targets, false);
				},
				group: ['SE_jupao2', 'SE_jupao3'],
			};
			lib.skill.SE_taidao3 = {
				trigger: { player: 'phaseEnd' },
				forced: true,
				popup: false,
				_priority: 20,
				filter(event, player) {
					return player.storage.SE_taidao;
				},
				content() {
					player.storage.SE_taidao = false;
				},
			};
			lib.skill.SE_taidao2 = {
				trigger: { source: 'damage' },
				forced: true,
				popup: false,
				_priority: Infinity,
				filter(event, player) {
					if (!event.card || event.card.name != 'sha' || event.nature != 'fire') return false;
					if (event.parent.parent.parent.name != 'SE_taidao') return false;
					return true;
				},
				content() {
					player.storage.SE_taidao = false;
				},
			};
			lib.skill.SE_taidao = {
				audio: 2,
				enable: 'phaseUse',
				delay: 0,
				filter(event, player) {
					if (player.storage.SE_taidao) return false;
					return player.storage.SE_lanhuo && player.storage.SE_lanhuo.length;
				},
				forced: true,
				init(player) {
					player.storage.SE_taidao = false;
				},
				content() {
					'step 0';
					player.chooseTarget('请选择1名目标', function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					if (result.targets?.length) {
						event.targets = result.targets[0];
					} else {
						event.finish();
					}
					('step 2');
					player.chooseCardButton(player.storage.SE_lanhuo, '选择1张牌交给目标', true).ai = function (button) {
						return -get.value(button.link);
					};
					if (player == game.me && _status.auto) {
					}
					('step 3');
					var targets1 = event.targets;
					targets1.gain(result.links)._triggered = null;
					player.$give(result.links, targets1);
					var targets = [];
					targets.push(targets1);
					targets.push(player);
					game.asyncDraw(targets);
					for (var i of result.links) {
						player.storage.SE_lanhuo.remove(i);
					}
					player.markSkill('SE_lanhuo');
					if (!player.storage.SE_lanhuo.length) {
						player.unmarkSkill('SE_lanhuo');
					}
					if (targets == game.me && _status.auto) {
					}
					('step 4');
					player.useCard({ name: 'sha', nature: 'fire' }, event.targets, false);
					player.storage.SE_taidao = true;
				},
				group: ['SE_taidao2', 'SE_taidao3'],
				ai: {
					threaten: 2,
				},
			};
			lib.skill.SE_kuanghua = {
				audio: 2,
				trigger: { player: 'phaseUseBegin' },
				forced: true,
				init(player) {
					player.storage.SE_kuanghua = false;
				},
				filter(event, player) {
					return player.storage.SE_lanhuo.length >= 4 && !player.storage.SE_kuanghua;
				},
				content() {
					player.storage.SE_kuanghua = true;
					player.loseMaxHp();
					player.addSkill('SE_taidao');
					player.addSkill('SE_jupao');
				},
			};
			lib.skill.SE_jiban3 = {
				audio: 2,
				gainable: true,
				forced: true,
				trigger: { player: 'phaseDiscardEnd' },
				filter(event, player) {
					if (event.player.classList.contains('dead') == false && event.cards && event.cards.length) {
						if (Array.isArray(event.cards)) for (var i of event.cards) {
							if (get.position(i) == 'd' && !player.skills.includes('SE_jupao')) {
								return true;
							}
						}
						return false;
					}
				},
				content() {
					'step 0';
					('step 1');
					event.cards = trigger.cards.slice(0).filter((q) => get.position(q) == 'd');//QQQ
					if (event.cards.length == 0) {
						event.finish();
						return;
					}
					('step 2');
					var cards = event.cards;
					player.gain(cards);
					player.lose(cards, ui.special)._triggered = null;
					player.$gain2(cards);
					player.markSkill('SE_lanhuo');
					player.storage.SE_lanhuo = player.storage.SE_lanhuo.concat(cards);
				},
			};
			lib.skill.SE_jiban2 = {
				audio: 2,
				trigger: { player: 'phaseDiscardAfter' },
				forced: true,
				_priority: -20,
				filter(event, player) {
					return event.num > 0;
				},
				content() {
					'step 0';
					player.chooseTarget('是否发动【羁绊】?', function (card, player, target) {
						return player != target && target.countCards('h');
					}).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					if (result.targets?.length) {
						result.targets[0].chooseToDiscard(trigger.num, 'h', true);
					}
				},
			};
			lib.skill.SE_jiban = {
				audio: 2,
				trigger: { player: 'phaseDrawBegin' },
				forced: true,
				_priority: -20,
				filter(event, player) {
					return event.num > 0;
				},
				content() {
					'step 0';
					player.chooseTarget('是否发动【羁绊】?', function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return get.attitude(player, target);
					};
					('step 1');
					if (result.targets?.length) {
						result.targets[0].draw(trigger.num);
					} else {
						event.finish();
					}
				},
				group: ['SE_jiban2', 'SE_jiban3'],
				ai: {
					expose: 0.4,
				},
			};
			lib.skill.SE_lanhuo = {
				audio: 2,
				trigger: { source: 'damageEnd', player: 'damageEnd' },
				filter(event, player) {
					return event.num > 0;
				},
				init(player) {
					player.node.name.dataset.nature = 'thunder';
					player.storage.SE_lanhuo = [];
				},
				intro: {
					content: 'cards',
				},
				forced: true,
				content() {
					'step 0';
					player.draw(trigger.num);
					('step 1');
					player.chooseCard('选择' + trigger.num + '张手牌置于你的武将牌上', trigger.num, 'h', true).ai = function (card) {
						return 6 - get.value(card);
					};
					('step 2');
					if (result.cards?.length) {
						player.lose(result.cards, ui.special)._triggered = null;
						player.$throw(result.cards);
						player.markSkill('SE_lanhuo');
						player.storage.SE_lanhuo = player.storage.SE_lanhuo.concat(result.cards);
					}
				},
				ai: {
					maixie: true,
					effect: {
						target(card, player, target) {
							if (player.skills.includes('jueqing')) return [1, -2];
							if (get.tag(card, 'damage')) {
								if (target.hp == target.maxHp) {
									if (!target.skills.includes('SE_taidao')) {
										return [0, 1];
									}
									return [0.7, 1];
								}
								return 0.7;
							}
						},
						player(card, player) {
							if (_status.currentPhase != player) return;
							if (get.type(card) == 'basic' || get.type(card, 'trick') == 'trick') return;
							if (player.hp <= 2) return;
							if (!player.skills.includes('SE_taidao') || player.storage.SE_lanhuo == 0) {
								return [0, 0, 0, 0];
							}
						},
					},
				},
			};
			lib.skill.SE_fusheng = {
				audio: 2,
				enable: 'phaseUse',
				filter(event, player) {
					return player.countCards('he') > 0;
				},
				filterCard: true,
				position: 'he',
				viewAs: { name: 'tiesuo' },
				prompt: '将任意1张牌当【铁索连环】使用',
				check(card) {
					return 8 - get.value(card);
				},
			};
			lib.skill.SE_xiusheng = {
				audio: 2,
				trigger: { player: 'phaseAfter' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget('是否发动【朽绳】？', function (card, player, target) {
						return player != target && target.isLinked();
					}).ai = function (target) {
						return get.damageEffect(target, player, player, 'fire');
					};
					('step 1');
					if (result.targets?.length) {
						result.targets[0].damage('fire');
					}
				},
				ai: {
					expose: 0.2,
				},
			};
			lib.skill.SE_sheyin = {
				audio: 2,
				trigger: { player: 'damageBefore' },
				forced: true,
				filter(event, player) {
					return player.countCards('h') > 0 && event.num > 0 && event.source && event.source.classList.contains('linked');
				},
				content() {
					'step 0';
					player.chooseCardTarget({
						filterCard: true,
						filterTarget(card, player, target) {
							return player != target && target.isLinked() && trigger.source != target;
						},
						ai1(card) {
							return 10 - get.value(card);
						},
						ai2(target) {
							var att = get.attitude(_status.event.player, target);
							var trigger = _status.event.parent._trigger;
							var da = 0;
							if (player.hp == 1) {
								da = 10;
							}
							if (trigger.num > 1) {
								if (target.maxHp > 5 && target.hp > 1) return -att / 10 + da;
								return -att + da;
							}
							var eff = get.damageEffect(target, trigger.source, target, trigger.nature);
							if (att == 0) return 0.1 + da;
							if (eff >= 0 && trigger.num == 1) {
								return att + da;
							}
							if (target.hp == target.maxHp) return -att + da;
							if (target.hp == 1) {
								if (target.maxHp <= 4 && !target.hasSkillTag('maixie')) {
									if (target.maxHp <= 3) {
										return -att + da;
									}
									return -att / 2 + da;
								}
								return da;
							}
							if (target.hp == target.maxHp - 1) {
								if (target.hp > 2 || target.hasSkillTag('maixie')) return att / 5 + da;
								if (att > 0) return 0.02 + da;
								return 0.05 + da;
							}
							return att / 2 + da;
						},
						prompt: '蛇引:弃置一张牌将伤害转移给其他横置角色',
					});
					('step 1');
					if (result.bool) {
						trigger.untrigger();
						trigger.player = result.targets[0];
						player.discard(result.cards[0]);
					} else {
						event.finish();
					}
					('step 2');
					trigger.trigger('damageBefore');
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (player.skills.includes('jueqing')) return;
							if (get.tag(card, 'damage') && target.countCards('h') > 1) return 0.7;
						},
					},
					threaten(player, target) {
						if (target.countCards('h') == 0) return 2;
					},
				},
			};
			lib.skill.SE_sheming = {
				trigger: { global: 'damageEnd' },
				forced: true,
				filter(event, player) {
					if (event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2' || event.player.isLinked()) return true;
					return false;
				},
				content() {
					if (trigger.num > 0) {
						player.draw(trigger.num);
					} else {
						event.finish();
					}
				},
			};
			lib.skill.SE_jiezhou = {
				audio: 2,
				trigger: { player: 'phaseDrawBegin' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget([1, 2], '是否发动【解咒】?', function (card, player, target) {
						if (player == target) return false;
						return target.countCards('he');
					}).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					if (result.bool) {
						trigger.num = 1;
						event.targets = result.targets;
						player.discardPlayerCard(event.targets[0], 'he', true);
					} else {
						event.finish();
					}
					('step 2');
					if (targets.length == 2) {
						player.discardPlayerCard(targets[1], 'he', true);
					}
				},
				group: ['SE_jiezhou2'],
			};
			lib.skill.SE_jiezhou2 = {
				trigger: { player: 'phaseDiscardBegin' },
				forced: true,
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					if (player.countCards('h') > player.hp) {
						player.chooseToDiscard('h', true);
					}
				},
			};
			lib.skill.SE_sheshen = {
				audio: 2,
				trigger: { player: ['phaseEnd', 'phaseUseBegin'] },
				forced: true,
				_priority: 50,
				init(player) {
					player.storage.SE_sheshen = false;
				},
				filter(event, player) {
					if (player.storage.SE_sheshen) return false;
					var list = [];
					for (var i of game.players) {
						if (i.classList.contains('linked')) continue;
						list.push(i);
					}
					if (!list.length) {
						return true;
					}
					return false;
				},
				content() {
					player.storage.SE_sheshen = true;
					player.gainMaxHp();
					player.recover();
					player.addSkill('SE_jiezhou');
					player.addSkill('SE_xiusheng');
					player.addSkill('SE_sheming');
					player.addSkill('SE_sheyin');
				},
				group: ['SE_sheshen2', 'SE_sheshen3', 'SE_sheshen4'],
			};
			lib.skill.SE_sheshen4 = {
				trigger: { global: 'linkBefore' },
				forced: true,
				popup: false,
				filter(event, player) {
					if (!event.player.isLinked()) return false;
					if (event.parent.parent.parent.parent.name == '_lianhuan') return false;
					return true;
				},
				_priority: 10,
				content() {
					trigger.untrigger();
					trigger.finish();
				},
			};
			lib.skill.SE_sheshen3 = {
				audio: 2,
				trigger: { player: 'phaseAfter' },
				forced: true,
				filter(event, player) {
					var list = [];
					for (var i of game.players) {
						if (i.classList.contains('linked')) continue;
						list.push(i);
					}
					if (list.length) {
						return true;
					}
					return false;
				},
				_priority: -10,
				content() {
					'step 0';
					player.chooseCardTarget({
						filterCard: true,
						filterTarget(card, player, target) {
							return !target.isLinked();
						},
						selectCard: [1, Infinity],
						selectTarget() {
							var num = ui.selected.cards.length;
							if (ui.selected.cards.length == 1) return [1, 1];
							if (ui.selected.cards.length > 1) return [1, num];
						},
						position: 'he',
						ai1(card) {
							return 7 - get.value(card);
						},
						ai2(target) {
							var list = [];
							for (var i of game.players) {
								if (i.classList.contains('linked')) continue;
								list.push(i);
							}
							if (!list.length && !player.isLinked() && target == player) return 10;
							return -get.attitude(player, target);
						},
						prompt: '蛇神:弃置任意张牌选择至多x名角色进入横置状态(x为你弃置的牌数)',
					});
					('step 1');
					if (result.bool) {
						cards = [];
						if (Array.isArray(result.cards)) for (var i of result.cards) {
							cards.push(i);
						}
						player.discard(cards);
						event.targets = result.targets;
						event.num = 0;
					} else {
						event.finish();
					}
					('step 2');
					if (event.num < event.targets.length) {
						event.targets[event.num].classList.add('linked');
						event.num++;
						event.redo();
					}
				},
			};
			lib.skill.SE_sheshen2 = {
				audio: 2,
				trigger: { player: 'damageBegin' },
				forced: true,
				filter(event, player) {
					return event.parent.name == '_lianhuan' || event.parent.name == '_lianhuan2';
				},
				_priority: -10,
				content() {
					trigger.untrigger();
					trigger.finish();
				},
			};
			lib.skill.SE_qiulao2 = {
				trigger: { global: 'gameDrawAfter' },
				forced: true,
				_priority: 333,
				popup: false,
				silent: true,
				content() {
					var handcards1, handcards2, judges, equips, viewAs, i, j;
					player.storage.SE_qiulao = [];
					player.storage.SE_qiulao2 = false;
					var table = document.createElement('table');
					var tr, td, str, st;
					for (var i of game.players) {
						viewAs = [];
						handcards1 = [];
						handcards2 = [];
						judges = [];
						equips = [];
						for (j = 0; j < i.node.handcards1.childNodes.length; j++) handcards1.push(i.node.handcards1.childNodes[j]);
						for (j = 0; j < i.node.handcards2.childNodes.length; j++) handcards2.push(i.node.handcards2.childNodes[j]);
						for (j = 0; j < i.node.judges.childNodes.length; j++) {
							viewAs.push(i.node.judges.childNodes[j].viewAs);
							judges.push(i.node.judges.childNodes[j]);
						}
						for (j = 0; j < i.node.equips.childNodes.length; j++) equips.push(i.node.equips.childNodes[j]);
						tr = document.createElement('tr');
						tr.style.verticalAlign = 'top';
						table.appendChild(tr);
						td = document.createElement('td');
						td.innerHTML = get.translation(i);
						tr.appendChild(td);
						td = document.createElement('td');
						td.innerHTML = handcards1.length + handcards2.length;
						tr.appendChild(td);
						str = '';
						if (equips.length + judges.length) {
							if (equips.length) {
								str += get.translation(equips);
								if (judges.length) {
									str += '、';
								}
							}
							if (judges.length) {
								str += get.translation(judges, 'viewAs');
							}
						} else {
							str = '';
						}
						td = document.createElement('td');
						td.innerHTML = str;
						tr.appendChild(td);
						player.storage.SE_qiulao.push({
							player: i,
							handcards1: handcards1,
							handcards2: handcards2,
							judges: judges,
							equips: equips,
							viewAs: viewAs,
							value: handcards1.length + handcards2.length + equips.length - judges.length,
						});
					}
					table.firstChild.firstChild.style.width = '85px';
					table.firstChild.childNodes[1].style.width = '48px';
					player.storage.SE_qiulao3 = '未发动';
				},
			};
			lib.skill.SE_qiulao = {
				intro: {
					content(storage, player) {
						if (true) {
							return player.storage.SE_qiulao3;
						}
					},
				},
				audio: true,
				trigger: { player: 'dieBefore' },
				filter(event, player) {
					if (player.storage.SE_qiulao2) return false;
					if (player.storage.SE_qiulao) return true;
					return false;
				},
				check(event, player) {
					player.hp <= 0;
				},
				init(player) {
					player.storage.SE_qiulao4 = 0;
				},
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					event.player.storage.SE_qiulao4++;
					if (game.dead.length) {
						while (game.dead.length) {
							game.dead[0].revive();
						}
					}
					for (var i of game.players) {
						if (i == player) continue;
						if (i.hp < i.maxHp) i.hp = i.maxHp;
						i.update();
					}
					('step 2');
					('step 3');
					ui.window.style.transition = 'all 0.5s';
					ui.window.classList.add('zoomout3');
					ui.window.delete();
					ui.window.hide();
					game.addVideo('skill', event.player, 'SE_qiulao');
					('step 4');
					var storage = event.player.storage.SE_qiulao;
					var player, frag;
					var i, j;
					for (var i = 0; i < storage.length; i++) {
						if (game.players.includes(storage[i].player)) {
							player = storage[i].player;
							while (player.node.handcards1.childNodes.length) ui.discardPile.appendChild(player.node.handcards1.firstChild);
							while (player.node.handcards2.childNodes.length) ui.discardPile.appendChild(player.node.handcards2.firstChild);
							while (player.node.judges.childNodes.length) ui.discardPile.appendChild(player.node.judges.firstChild);
							while (player.node.equips.childNodes.length) ui.discardPile.appendChild(player.node.equips.firstChild);
						}
					}
					for (var i = 0; i < storage.length; i++) {
						if (game.players.includes(storage[i].player)) {
							player = storage[i].player;
							for (j = 0; j < storage[i].handcards1.length; j++) {
								if (storage[i].handcards1[j].parentNode == ui.discardPile || storage[i].handcards1[j].parentNode == ui.cardPile) player.node.handcards1.appendChild(storage[i].handcards1[j]);
							}
							for (j = 0; j < storage[i].handcards2.length; j++) {
								if (storage[i].handcards2[j].parentNode == ui.discardPile || storage[i].handcards2[j].parentNode == ui.cardPile) player.node.handcards2.appendChild(storage[i].handcards2[j]);
							}
							for (j = 0; j < storage[i].equips.length; j++) {
								if (storage[i].equips[j].parentNode == ui.discardPile || storage[i].equips[j].parentNode == ui.cardPile) player.node.equips.appendChild(storage[i].equips[j]);
							}
							for (j = 0; j < storage[i].judges.length; j++) {
								if (storage[i].judges[j].parentNode == ui.discardPile || storage[i].judges[j].parentNode == ui.cardPile) {
									storage[i].judges[j].viewAs = storage[i].viewAs[j];
									player.node.judges.appendChild(storage[i].judges[j]);
								}
							}
							player.update();
						}
					}
					ui.window.classList.remove('zoomout3');
					ui.window.classList.add('zoomin3');
					document.body.appendChild(ui.window);
					var data = {};
					for (var i of game.players) {
						data[i.dataset.position] = {
							h: get.cardsInfo(i.getCards('h')),
							e: get.cardsInfo(i.getCards('e')),
							j: get.cardsInfo(i.getCards('j')),
						};
					}
					game.addVideo('skill', event.player, ['SE_qiulao', data]);
					('step 5');
					ui.window.show();
					ui.window.classList.remove('zoomin3');
					setTimeout(function () {
						ui.window.style.transition = '';
						game.resume();
					}, 500);
					event.player.storage.SE_qiulao3 = '已发动' + event.player.storage.SE_qiulao4 + '次';
					game.pause();
					('step 6');
					var player = event.player;
					if (player.hp < player.maxHp) player.hp = player.maxHp;
					player.update();
					ui.control.innerHTML = '';
					ui.discardPile.innerHTML = '';
				},
				group: ['SE_qiulao2'],
			};
			lib.skill.SE_xinxianshi2 = {
				audio: true,
				trigger: { source: 'damageBefore' },
				_priority: 10,
				forced: true,
				content() {
					'step 0';
					player.chooseControl('自己摸牌', '伤害加倍', ui.create.dialog('请选择一项', 'hidden')).ai = function () {
						if (player.countCards('h') <= 1) return '自己摸牌';
						return '伤害加倍';
					};
					('step 1');
					if (result.control == '自己摸牌') {
						player.draw(trigger.num);
					}
					('step 2');
					if (result.control == '伤害加倍') {
						trigger.num += trigger.num;
					}
				},
			};
			lib.skill.SE_xinxianshi = {
				audio: true,
				trigger: { player: 'damageBefore' },
				forced: true,
				_priority: 55,
				content() {
					'step 0';
					player.chooseControl('抵消伤害', '继续结算', ui.create.dialog('请选择一项', 'hidden')).ai = function () {
						if (player.countCards('h', { name: 'shan' }) >= 1 && get.type(event.card) == 'basic') return '继续结算';
						return '抵消伤害';
					};
					('step 1');
					if (result.control == '抵消伤害') {
						trigger.untrigger();
						trigger.finish();
						if (trigger.source == undefined) {
							event.finish();
						} else {
							trigger.source.draw(trigger.num);
						}
					} else {
						event.finish();
					}
				},
				group: ['SE_xinxianshi2'],
			};
			lib.skill.SE_xuhuan2 = {
				audio: true,
				trigger: { player: 'gainEnd' },
				_priority: 10,
				forced: true,
				content() {
					'step 0';
					player.judge();
					('step 1');
					if (result.color == 'red') {
						player.draw();
					} else {
						if (result.color == 'black') {
							player.recover();
						}
					}
				},
			};
			lib.skill.SE_xuhuan = {
				audio: true,
				trigger: { player: 'loseAfter' },
				_priority: -55,
				forced: true,
				filter(event, player) {
					if (event.player.classList.contains('dead') == false && event.cards && event.cards.length) {
						if (player.equiping) return false;
						if (Array.isArray(event.cards)) for (var i of event.cards) {
							if (get.position(i) == 'd') {
								return true;
							}
						}
						return false;
					}
				},
				content() {
					'step 0';
					player.chooseTarget('选择1名目标对其造成x(x为你使用或弃置的手牌数)点伤害', function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return get.damageEffect(target, player, player);
					};
					('step 1');
					if (result.targets?.length) {
						result.targets[0].damage(trigger.num);
					} else {
						event.finish();
					}
				},
				group: ['SE_xuhuan2'],
			};
			lib.skill.SE_zhentu = {
				mod: {
					targetEnabled(card) {
						if (get.type(card) == 'trick' || get.type(card) == 'delay') return false;
					},
					maxHandcard(player, num) {
						if (num < 4) return 4;
					},
				},
			};
			lib.skill.SE_juexian3 = {
				trigger: { global: 'changeHp' },
				filter(event, player) {
					return event.player.hp <= 0 && event.player != player && _status.currentPhase == player;
				},
				forced: true,
				content() {
					trigger.player.die(trigger);
					player.gainMaxHp();
				},
			};
			lib.skill.SE_juexian2 = {
				trigger: { source: 'damageBefore' },
				forced: true,
				_priority: 44,
				content() {
					trigger.untrigger();
					trigger.finish();
					var ex = 0;
					if (trigger.card && trigger.card.name == 'sha') {
						if (player.skills.includes('jiu')) ex++;
						if (player.skills.includes('luoyi2')) ex++;
						if (player.skills.includes('reluoyi2')) ex++;
					}
					trigger.player.damage(trigger.nature, trigger.num + ex)._triggered = null;
				},
			};
			lib.skill.SE_juexian = {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target && target.countCards('h') > 0;
				},
				content() {
					'step 0';
					player.chooseControl('red', 'black', ui.create.dialog('请选择一种颜色', 'hidden')).ai = function (event) {
						if (target.countCards('h', { color: 'red' }) > target.countCards('h', { color: 'black' })) return 'red';
						return 'black';
					};
					('step 1');
					game.log(player, '选择了' + get.translation(result.control));
					event.choice = result.control;
					player.popup(event.choice);
					target.showCards(target.getCards('h'));
					('step 2');
					if (event.choice == 'red') {
						target.discard(targe.getCards('h', { color: 'red' }));
						player.addTempSkill('SE_juexian3', { player: 'phaseBegin' });
					} else {
						target.discard(targe.getCards('h', { color: 'black' }));
						player.addTempSkill('SE_juexian2', { player: 'phaseBegin' });
					}
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							return get.attitude(player, target);
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_xianxian = {
				enable: 'phaseUse',
				usable: 1,
				forced: true,
				content() {
					'step 0';
					event.num = 0;
					('step 1');
					player.chooseTarget('请选择至多2名目标', [1, 2], true, function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 2');
					var targets = [];
					for (var i = 0; i < result.targets.length; i++) {
						targets.push(result.targets[i]);
					}
					event.targets0 = result.targets[0];
					if (targets.length > 1) {
						event.targets1 = result.targets[1];
					}
					if (event.targets0.countCards('h') <= 0) {
						player.draw(4);
						event.goto(4);
					} else {
						var next = event.targets0.chooseCard('请弃置4张不同花色的手牌', [1, 4], 'h', function (card) {
							var suit = card.suit;
							if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
								if (i.suit == suit) return false;
							}
							return true;
						});
						next.ai = function (card) {
							return 8 - get.value(card);
						};
					}
					('step 3');
					if (!result.bool) {
						player.draw(4);
					} else {
						cards = [];
						if (Array.isArray(result.cards)) for (var i of result.cards) {
							cards.push(i);
						}
						event.targets0.discard(cards);
						event.num0 = result.cards.length;
						event.num += event.num0;
						if (event.num0 < 4) {
							player.draw(4 - event.num0);
						}
					}
					('step 4');
					if (!event.targets1) {
						event.goto(7);
					}
					('step 5');
					if (event.targets1.countCards('h') <= 0) {
						player.draw(4);
						event.goto(7);
					} else {
						var next = event.targets1.chooseCard('请弃置4张不同花色的手牌', [1, 4], 'he', function (card) {
							var suit = card.suit;
							if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
								if (i.suit == suit) return false;
							}
							return true;
						});
						next.ai = function (card) {
							return 8 - get.value(card);
						};
					}
					('step 6');
					if (!result.bool) {
						player.draw(4);
					} else {
						cards = [];
						if (Array.isArray(result.cards)) for (var i of result.cards) {
							cards.push(i);
						}
						event.targets1.discard(cards);
						event.num1 = result.cards.length;
						event.num += event.num1;
						if (event.num1 < 4) {
							player.draw(4 - event.num1);
						}
					}
					('step 7');
					if (event.num < 4) {
						event.targets0.damage();
						if (event.targets1) {
							event.targets1.damage();
						}
					}
				},
			};
			lib.skill.SE_luxian = {
				trigger: { source: 'damageAfter' },
				filter(event, player) {
					return event.player != player && event.parent.name != 'SE_luxian';
				},
				forced: true,
				_priority: -20,
				content() {
					if (trigger.player.countCards('h') > trigger.player.hp) {
						var num = trigger.player.countCards('h') - trigger.player.hp;
						trigger.player.chooseToDiscard(num, 'h', true);
					} else if (trigger.player.countCards('h') < trigger.player.hp) {
						trigger.player.damage();
					} else {
						player.draw();
						event.finish();
					}
				},
			};
			lib.skill.SE_zhuxian = {
				init(player) {
					player.node.name.dataset.nature = 'fire';
				},
				enable: 'phaseUse',
				usable: 1,
				forced: true,
				content() {
					'step 0';
					player.chooseTarget('请选择任意名目标', [1, Infinity], true, function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					var targets = [];
					for (var i = 0; i < result.targets.length; i++) {
						targets.push(result.targets[i]);
						player.line(result.targets[i]);
					}
					for (var i = 0; i < result.targets.length; i++) {
						result.targets[i].discard(result.targets[i].getCards('e'));
					}
					for (var i = 0; i < result.targets.length; i++) {
						result.targets[i].damage();
					}
				},
				ai: {
					order: 9,
					result: {
						player(player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_yuzhi = {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target && target.countCards('he') > 0;
				},
				prompt: '请选择1名角色',
				content() {
					'step 0';
					player.chooseControl('basic', 'equip', 'trick', 'delay').ai = function (event) {
						switch (Math.floor(Math.random() * 6)) {
							case 0:
								return 'equip';
							case 1:
							case 4:
							case 5:
							case 6:
								return 'basic';
							case 2:
								return 'trick';
							case 3:
								return 'delay';
						}
					};
					('step 1');
					game.log(player, '选择了' + get.translation(result.control));
					event.choice = result.control;
					player.popup(event.choice);
					event.cards = target.getCards('he').randomGet();
					target.showCards(event.cards);
					('step 2');
					if (get.type(event.cards) == event.choice) {
						target.qdie(player);
					}
				},
				group: ['SE_yuzhi2'],
				ai: {
					order: 5,
					result: {
						target(player, target) {
							return get.attitude(player, target);
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_yuzhi2 = {
				trigger: { player: 'dying' },
				forced: true,
				filter(event, player) {
					return player.maxHp > 0;
				},
				content() {
					'step 0';
					player.chooseControl('basic', 'equip', 'trick', 'delay').ai = function (event) {
						switch (Math.floor(Math.random() * 6)) {
							case 0:
								return 'equip';
							case 1:
							case 4:
							case 5:
								return 'basic';
							case 2:
								return 'trick';
							case 3:
								return 'delay';
						}
					};
					('step 1');
					game.log(player, '选择了' + get.translation(result.control));
					event.choice = result.control;
					player.popup(event.choice);
					event.cards = get.cards(7);
					player.showCards(event.cards);
					('step 2');
					var num = 0;
					if (Array.isArray(event.cards)) for (var i of event.cards) {
						if (get.type(i) == event.choice) {
							num += 1;
						}
					}
					if (num > 0) {
						player.recover(num);
					} else {
						event.finish();
					}
				},
			};
			lib.skill.SE_yanzi = {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target;
				},
				prompt: '请选择1名角色',
				content() {
					'step 0';
					target.chooseControl('2', '4', '6', '8', '10', '13').ai = function (event) {
						switch (Math.floor(Math.random() * 6)) {
							case 0:
								return '2';
							case 1:
								return '4';
							case 4:
								return '6';
							case 5:
								return '8';
							case 2:
								return '10';
							case 3:
								return '13';
						}
					};
					('step 1');
					game.log(target, '选择了' + get.translation(result.control));
					event.choice = result.control;
					target.popup(event.choice);
					event.cards = get.cards(2);
					player.showCards(event.cards);
					('step 2');
					var num = 0;
					if (Array.isArray(event.cards)) for (var i of event.cards) {
						num += i.number;
					}
					if (num <= event.choice) {
						target.hp = 1;
						target.update();
						target.discard(target.getCards('h'));
					} else {
						target.damage();
						player.draw();
					}
				},
				ai: {
					order: 10,
					result: {
						target(player, target) {
							return get.attitude(player, target);
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_huoshu = {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target;
				},
				prompt: '请选择1名角色',
				content() {
					'step 0';
					target.chooseControl('heart2', 'diamond2', 'club2', 'spade2').ai = function (event) {
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
					};
					('step 1');
					game.log(target, '选择了' + get.translation(result.control));
					event.choice = result.control;
					target.popup(event.choice);
					event.cards = get.cards(1);
					player.showCards(event.cards);
					('step 2');
					if (event.cards.suit + '2' != event.choice) {
						var num = Math.abs(target.hp - player.hp);
						if (num > 0) {
							target.damage(num);
						}
						target.chooseToDiscard(2, true);
					}
				},
				ai: {
					order: 7,
					result: {
						target(player, target) {
							return get.attitude(player, target);
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_foyu = {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target;
				},
				filter(event, player) {
					for (var i of game.players) {
						return i.countCards('hej') > 0;
					}
				},
				prompt: '请选择1名角色',
				content() {
					'step 0';
					target.chooseControl('basic', 'equip', 'trick', 'delay').ai = function (event) {
						switch (Math.floor(Math.random() * 6)) {
							case 0:
								return 'equip';
							case 1:
							case 4:
							case 5:
								return 'basic';
							case 2:
								return 'trick';
							case 3:
								return 'delay';
						}
					};
					('step 1');
					game.log(target, '选择了' + get.translation(result.control));
					event.choice = result.control;
					target.popup(event.choice);
					var players = [];
					for (var i of game.players) {
						if (i != player && i.countCards('hej')) {
							players.push(i);
						}
					}
					if (!players.length) {
						event.finish();
						return;
					}
					var target1 = players.randomGet();
					event.card = target.getCards('hej').randomGet();
					target1.showCards(event.card);
					('step 2');
					if (get.type(event.card) != event.choice) {
						target.loseMaxHp();
						if (player.hp < player.maxHp) {
							player.recover();
						} else {
							event.finish();
						}
					}
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							return get.attitude(player, target);
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_longjing = {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target;
				},
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				prompt: '请选择1名角色',
				content() {
					'step 0';
					target.chooseControl('red', 'black').ai = function (event) {
						if (Math.random() < 0.5) return 'red';
						return 'black';
					};
					('step 1');
					game.log(target, '选择了' + get.translation(result.control));
					event.choice = result.control;
					target.popup(event.choice);
					event.card = player.getCards('h').randomGet();
					player.showCards(event.card);
					('step 2');
					if (get.color(event.card) != event.choice) {
						target.damage();
					}
				},
				ai: {
					order: 9,
					result: {
						target(player, target) {
							return get.damageEffect(target, player);
						},
					},
				},
				expose: 0.4,
			};
			lib.skill.SE_nanti = {
				trigger: { global: 'useCardAfter', player: 'changeHp' },
				forced: true,
				_priority: Infinity,
				popup: false,
				filter(event, player) {
					if (player.skills.includes('SE_huoshu')) {
						return false;
					}
					if (player.hp > 4) {
						return false;
					}
					return true;
				},
				content() {
					player.loseMaxHp();
					player.addSkill('SE_huoshu');
					player.addSkill('SE_yanzi');
				},
				group: ['SE_nanti2'],
			};
			lib.skill.SE_nanti2 = {
				trigger: { global: 'useCardAfter', player: 'changeHp' },
				forced: true,
				_priority: Infinity,
				filter(event, player) {
					if (player.skills.includes('SE_yuzhi')) {
						return false;
					}
					if (player.hp > 2) {
						return false;
					}
					return true;
				},
				content() {
					player.loseMaxHp();
					player.addSkill('SE_yuzhi');
				},
			};
			lib.skill.SE_xuyu = {
				trigger: { global: 'phaseBefore' },
				_priority: 10,
				filter(event, player) {
					if (event.parent.name == 'SE_xuyu') return false;
					return event.player != player && event.player.countCards('h') > player.hp;
				},
				content() {
					'step 0';
					var num = trigger.player.countCards('h') - player.hp;
					trigger.player.chooseToDiscard(num, true);
					('step 1');
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
				},
			};
			lib.skill.SE_yongheng4 = {
				trigger: { global: 'gameStart' },
				_priority: Infinity,
				forced: true,
				silent: true,
				popup: false,
				content() {
					ui.backgroundMusic.src = '';
					delete window.music;
					ui.backgroundMusic.src = 'audio/skill/SE_yongheng2.mp3';
					ui.backgroundMusic = document.createElement('audio');
					ui.backgroundMusic.autoplay = true;
				},
			};
			lib.skill.SE_yongheng = {
				trigger: { player: ['loseEnd', 'useCardAfter', 'respond'] },
				_priority: 10,
				check(event, player) {
					if (event.card.name == 'tao' && player.hp <= 2) return true;
					if (player.countCards('h') < player.maxHp - 1) return false;
					return get.value(event.card) >= 9;
				},
				filter(event, player) {
					if (get.type(event.card) == 'trick' || get.type(event.card) == 'basic') return true;
					return false;
				},
				content() {
					player.chooseToDiscard(true);
					player.gain(trigger.cards);
					player.$gain2(trigger.cards);
				},
				group: ['SE_yongheng2', 'SE_yongheng3', 'SE_yongheng4'],
			};
			lib.skill.SE_yongheng2 = {
				trigger: { player: 'gainEnd' },
				_priority: 10,
				forced: true,
				filter(event, player) {
					return player.countCards('h') > player.maxHp;
				},
				content() {
					var num = player.countCards('h') - player.maxHp;
					player.chooseToDiscard(num, true);
					player.damage();
				},
			};
			lib.skill.SE_yongheng3 = {
				trigger: { player: 'phaseDiscardBefore' },
				_priority: 10,
				forced: true,
				content() {
					trigger.untrigger();
					trigger.finish();
				},
			};
			lib.skill.SE_xijian = {
				trigger: { global: 'phaseBegin' },
				filter(event, player) {
					if (!player.countCards('h', { suit: 'diamond' })) return false;
					return event.player != player && event.player.countCards('h') > 0 && get.distance(player, event.player, 'attack') > 1;
				},
				check(event, player) {
					if (get.attitude(player, event.player) < 0) return true;
					return false;
				},
				content() {
					'step 0';
					var next = player.chooseToDiscard('隙间:请弃置1张♦️️牌', { suit: 'diamond' }, true);
					next.ai = function (card) {
						return 7 - get.value(card);
					};
					('step 1');
					trigger.player.chooseCard('交出一张♠️️牌或受到1点伤害', function (card) {
						return card.suit == 'spade';
					}).ai = function (card) {
						return 6 - get.value(card);
					};
					('step 2');
					if (result.cards?.length) {
						player.gain(result.cards[0]);
						trigger.player.$give(1, player);
					} else {
						trigger.player.damage('nosource');
					}
				},
				group: ['SE_xijian2'],
			};
			lib.skill.SE_xijian2 = {
				trigger: { global: 'phaseEnd' },
				filter(event, player) {
					if (!player.countCards('h', { suit: 'club' })) return false;
					return event.player != player && event.player.countCards('h') > 0 && get.distance(player, event.player, 'attack') <= 1;
				},
				check(event, player) {
					if (get.attitude(player, event.player) < 0) return true;
					return false;
				},
				content() {
					'step 0';
					var next = player.chooseToDiscard('隙间:请弃置1张♣️️牌', { suit: 'club' }, true);
					next.ai = function (card) {
						return 7 - get.value(card);
					};
					('step 1');
					trigger.player.chooseCard('交出一张♥️️牌或受到1点伤害', function (card) {
						return card.suit == 'heart';
					}).ai = function (card) {
						return 6 - get.value(card);
					};
					('step 2');
					if (result.cards?.length) {
						player.gain(result.cards[0]);
						trigger.player.$give(1, player);
					} else {
						trigger.player.damage('nosource');
					}
				},
			};
			lib.skill.SE_jiexian = {
				trigger: { global: 'damageBegin' },
				_priority: 5,
				check(event, player) {
					if (event.player == player) return true;
					if (get.attitude(player, event.player) >= 2) return true;
					return false;
				},
				filter(event, player) {
					if (!player.countCards('h', { suit: 'heart' })) return false;
					return true;
				},
				forced: true,
				content() {
					'step 0';
					var next = player.chooseToDiscard('界线:是否发动【界线】弃置1张♥️️牌使伤害无效且令受伤角色回复1点体力？', { suit: 'heart' });
					next.ai = function (card) {
						return 7 - get.value(card);
					};
					('step 1');
					if (result.bool) {
						trigger.untrigger();
						trigger.finish();
						trigger.player.recover();
					}
				},
				group: ['SE_jiexian2'],
				ai: {
					expose: 0.2,
					threaten: 1.5,
				},
			};
			lib.skill.SE_jiexian2 = {
				trigger: { global: 'recoverBegin' },
				_priority: 5,
				check(event, player) {
					if (get.attitude(player, event.player) < 0) return true;
					return false;
				},
				filter(event, player) {
					if (!player.countCards('h', { suit: 'spade' })) return false;
					return true;
				},
				forced: true,
				content() {
					'step 0';
					var next = player.chooseToDiscard('界线:是否发动【界线】弃置1张♠️️牌使回复无效且对回复角色造成1点伤害？', { suit: 'spade' });
					next.ai = function (card) {
						return 7 - get.value(card);
					};
					('step 1');
					if (result.bool) {
						trigger.untrigger();
						trigger.finish();
						trigger.player.damage('nosource');
					}
				},
				ai: {
					expose: 0.2,
					threaten: 1.5,
				},
			};
			lib.skill.SE_shiyuehshi = {
				trigger: { player: 'phaseEnd' },
				forced: true,
				audio: 2,
				content() {
					'step 0';
					var players = get.players(player);
					players.remove(player);
					event.players = players;
					('step 1');
					if (event.players.length) {
						if (event.players.maxHp != 0 && event.players.maxHp != Infinity) {
							event.players.shift().loseMaxHp();
						}
						event.redo();
					}
				},
			};
			lib.skill.SE_youling = {
				mod: {
					targetEnabled(card, player, target) {
						if (!player.hasSkill('SE_youling')) return false;
					},
				},
				group: ['SE_youling2'],
			};
			lib.skill.SE_youling2 = {
				audio: true,
				trigger: { player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore', 'gainMaxHpBefore'] },
				forced: true,
				_priority: Infinity,
				content() {
					trigger.untrigger();
					trigger.finish();
				},
			};
			lib.skill.SE_chengfo = {
				mark: true,
				audio: 2,
				init(player) {
					player.storage.SE_chengfo = 20;
				},
				intro: {
					content: 'turn',
				},
				trigger: { player: 'phaseEnd', global: 'dieAfter' },
				forced: true,
				content() {
					var num = 2;
					if (typeof trigger.num == 'number') num = 2 * trigger.num;
					if (trigger.name == 'phase') num = 1;
					if (trigger.name == 'die') num = 2;
					player.storage.SE_chengfo -= num;
					player.markSkill('SE_chengfo');
					if (player.storage.SE_chengfo <= 0) {
						player.die();
					}
				},
			};
			lib.skill.SE_xinyuan = {
				trigger: { player: 'phaseDiscardEnd' },
				audio: 2,
				forced: true,
				filter(event, player) {
					return event.cards && event.cards.length > 1;
				},
				content() {
					'step 0';
					var num = trigger.cards.length;
					player.chooseTarget('是否选择至多' + num + '名角色各摸x张牌(x为你弃牌阶段弃置的张数)？', [1, num], function (card, player, target) {
						return true;
					}).ai = function (target) {
						return get.attitude(player, target);
					};
					('step 1');
					if (result.targets?.length) {
						event.targets = result.targets;
						var num = trigger.cards.length;
						game.asyncDraw(result.targets, num);
					}
				},
			};
			lib.skill.SE_qiyuan12 = {
				audio: 2,
				enable: 'chooseToUse',
				delay: 0,
				forced: true,
				filter(event, player) {
					if (event.filterCard && event.filterCard({ name: 'wuxie' }, player)) return false;
					var num = get.skillCount('SE_qiyuan', player) + get.skillCount('SE_qiyuan9', player) + get.skillCount('SE_qiyuan12', player);
					if (num >= player.hp + 1 || num >= 4) return false;
					if (event.type == 'dying') return false;
					if (event.parent.name == '_chenhuodajie') return true;
					return false;
				},//QQQ
				content() {
					'step 0';
					player.chooseTarget(
						function (card, player, target) {
							return player != target;
						},
						'请选择1名角色',
						true
					).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					if (result.targets?.length) {
						event.target = result.targets[0];
						event.target.showHandcards();
					}
					('step 2');
					var target = event.target;
					var num = target.countCards('h', { type: 'trick' });
					var cards = targe.getCards('h', { type: 'trick' });
					if (num > 0) {
						target.lose(cards)._triggered = null;
						target.$throw(cards);
						game.log(target, '弃置了', cards);
						target.draw(num);
					} else {
						target.draw();
					}
					event.goto(3);
					('step 3');
					lib.skill.SE_qiyuan2.viewAs = { name: 'chenhuodajie' };
					event.parent.parent.backup('SE_qiyuan2');
					event.parent.parent.step = 0;
					if (event.isMine()) {
						event.parent.parent.openskilldialog = '选择' + get.translation(event.cards) + '的目标';
					}
				},
			};
			lib.skill.SE_qiyuan = {
				audio: 2,
				enable: 'chooseToUse',
				delay: 0,
				forced: true,
				init(player) {
					player.storage.SE_qiyuan2 = 0;
				},
				filter(event, player) {
					if (event.filterCard && event.filterCard({ name: 'wuxie' }, player)) return false;
					var num = get.skillCount('SE_qiyuan', player) + get.skillCount('SE_qiyuan9', player) + get.skillCount('SE_qiyuan12', player);
					if (num >= player.hp + 1 || num >= 4) return false;
					if (event.type == 'dying') return false;
					if (_status.currentPhase == player && event.parent.name == 'phaseUse') return true;
					return false;
				},
				content() {
					'step 0';
					player.getStat('skill').SE_qiyuan--;
					var list = [];
					for (var i in lib.card) {
						if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
						if (lib.card[i].type == 'trick') list.push(['锦囊', '', i]);
					}
					list.sort(lib.sort.random);
					var trigger = event.parent.parent;
					var dialog = ui.create.dialog('请选择需要声明的1张锦囊牌', [list, 'vcard']);
					player.chooseButton(dialog, function (button) {
						var recover = 0,
							lose = 1;
						for (var i of game.players) {
							if (!i.isOut()) {
								if (i.hp < i.maxHp) {
									if (get.attitude(player, i) > 0) {
										if (i.hp < 2) {
											lose--;
											recover += 0.5;
										}
										lose--;
										recover++;
									} else if (get.attitude(player, i) < 0) {
										if (i.hp < 2) {
											lose++;
											recover -= 0.5;
										}
										lose++;
										recover--;
									}
								} else {
									if (get.attitude(player, i) > 0) {
										lose--;
									} else if (get.attitude(player, i) < 0) {
										lose++;
									}
								}
							}
						}
						if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
						if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
						return button.link[2] == 'wuzhong' ? 1 : -1;
					}).filterButton = function (button) {
						if (!lib.filter.cardEnabled({ name: button.link[2] }, player, trigger)) return false;
						if (!lib.filter.cardUsable({ name: button.link[2] }, player, trigger)) return false;
						return true;
					};
					('step 1');
					if (result.bool) {
						player.getStat('skill').SE_qiyuan++;
						event.cards = result.buttons[0].link[2];
						event.goto(2);
					} else {
						event.finish();
					}
					('step 2');
					player.chooseTarget(
						function (card, player, target) {
							return player != target;
						},
						'请选择1名角色',
						true
					).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 3');
					if (result.targets?.length) {
						event.target = result.targets[0];
						event.target.showHandcards();
					}
					('step 4');
					var target = event.target;
					var num = target.countCards('h', { type: 'trick' });
					var cards = targe.getCards('h', { type: 'trick' });
					if (num > 0) {
						target.lose(cards)._triggered = null;
						target.$throw(cards);
						game.log(target, '弃置了', cards);
						target.draw(num);
					} else {
						target.draw();
					}
					event.goto(5);
					('step 5');
					lib.skill.SE_qiyuan2.viewAs = { name: event.cards };
					event.parent.parent.backup('SE_qiyuan2');
					event.parent.parent.step = 0;
					if (event.isMine()) {
						event.parent.parent.openskilldialog = '选择' + get.translation(event.cards) + '的目标';
					}
				},
				group: ['SE_qiyuan2', 'SE_qiyuan3', 'SE_qiyuan4', 'SE_qiyuan8', 'SE_qiyuan9', 'SE_qiyuan11', 'SE_qiyuan12'],
				ai: {
					order: 8,
					result: {
						player(player) {
							if (_status.event.dying && get.attitude(player, _status.event.dying) <= 0) return 0;
							return 1;
						},
					},
				},
			};
			lib.skill.SE_qiyuan2 = {
				filterCard() {
					return false;
				},
				popname: true,
				popup: false,
				selectCard: -1,
			};
			lib.skill.SE_qiyuan3 = {
				audio: 2,
				enable: 'chooseToUse',
				delay: 0,
				forced: true,
				filter(event, player) {
					var num = get.skillCount('SE_qiyuan3', player) + player.storage.SE_qiyuan2;
					if (num >= player.hp + 1 || num >= 4) return false;
					return event.type == 'dying' || (_status.currentPhase == player && event.parent.name == 'phaseUse');
				},
				content() {
					'step 0';
					player.getStat('skill').SE_qiyuan3--;
					var list = [];
					var targets = [];
					for (var i of game.players) {
						if (i != _status.event.dying) continue;
						targets.push(i);
					}
					if (targets.length) {
						list.push(['基本', '', 'tao']);
						var dialog = ui.create.dialog('请选择需要声明的1张基本牌', [list, 'vcard']);
						player.chooseButton(dialog, function (button) {
							return get.value({ name: button.link[2] }, player);
						});
					} else {
						list.push(['基本', '', 'sha', 'fire']);
						list.push(['基本', '', 'sha', 'thunder']);
						list.push(['毒杀', '', 'sha', 'poison']);
						for (var i in lib.card) {
							if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
							if (lib.card[i].type == 'basic') list.push(['基本', '', i]);
						}
						list.sort(lib.sort.random);
						var trigger = event.parent.parent;
						var dialog = ui.create.dialog('请选择需要声明的1张基本牌', [list, 'vcard']);
						player.chooseButton(dialog, function (button) {
							if (!player.getStat().card.sha && player.countCards('h', { name: 'sha' })) return button.link[2] == 'tianxianjiu' ? 1 : -1;
							if (player.hp == 1 && !player.countCards('h', { name: 'tao' })) return button.link[2] == 'pantao' ? 1 : -1;
							if (!player.countCards('h', { name: 'jiu' }) && player.countCards('h', { name: 'sha' })) return button.link[2] == 'jiu' ? 1.5 : -1.5;
							if (!player.countCards('h', { name: 'sha' }) && !player.getStat().card.sha) return button.link[2] == 'shihuawuqi' ? 1 : -1;
							if (player.countCards('h') > player.hp) return button.link[2] == 'jihuocard' ? 1 : -1;
							if (player.countCards('h') < 2) return button.link[2] == 'xingjiegoutong' ? 1 : -1;
							return button.link[2] == 'xiangyuye';
						}).filterButton = function (button) {
							if (!lib.filter.cardEnabled({ name: button.link[2] }, player, trigger)) return false;
							if (!lib.filter.cardUsable({ name: button.link[2] }, player, trigger)) return false;
							return true;
						};
					}
					('step 1');
					if (result.bool) {
						player.getStat('skill').SE_qiyuan3++;
						event.cards = result.buttons[0].link[2];
						if (result.buttons[0].link[3]) {
							event.nature = result.buttons[0].link[3];
						}
						event.goto(2);
					} else {
						event.finish();
					}
					('step 2');
					player.chooseTarget(
						function (card, player, target) {
							return player != target;
						},
						'请选择1名角色',
						true
					).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 3');
					if (result.targets?.length) {
						event.target = result.targets[0];
						event.target.showHandcards();
					}
					('step 4');
					var target = event.target;
					var num = target.countCards('h', { type: 'basic' });
					var cards = targe.getCards('h', { type: 'basic' });
					if (num > 0) {
						target.lose(cards)._triggered = null;
						target.$throw(cards);
						game.log(target, '弃置了', cards);
						target.draw(num);
					} else {
						target.draw();
					}
					event.goto(5);
					('step 5');
					lib.skill.SE_qiyuan2.viewAs = { name: event.cards, nature: event.nature };
					event.parent.parent.backup('SE_qiyuan2');
					event.parent.parent.step = 0;
					if (event.isMine()) {
						event.parent.parent.openskilldialog = '选择' + get.translation(event.cards) + '的目标';
					}
				},
				ai: {
					save: true,
					threaten: 8,
					order: 7,
					result: {
						player(player) {
							if (_status.event.dying && get.attitude(player, _status.event.dying) <= 0) return 0;
							return 1;
						},
					},
				},
			};
			lib.skill.SE_qiyuan4 = {
				trigger: { global: 'gameStart' },
				forced: true,
				popup: false,
				silent: true,
				_priority: 100,
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						i.storage.SE_qiyuan = true;
					}
					lib.skill.global.push('SE_qiyuan5');
					lib.skill.global.push('SE_qiyuan7');
				},
			};
			lib.skill.SE_qiyuan5 = {
				trigger: { player: 'phaseJudgeAfter' },
				forced: true,
				popup: false,
				_priority: 55,
				filter(event, player) {
					if (player.storage.愿 || player.storage.愿 > 0) return false;
					return player.storage.SE_qiyuan;
				},
				content() {
					'step 0';
					player.mark('愿', {
						name: '愿',
						content: '额外进行1次判定',
					});
					player.storage.愿 = 1;
					('step 1');
					for (var i of game.players) {
						i.addTempSkill('SE_qiyuan6', 'phaseJudgeAfter');
					}
					var list = ['shandian', 'lebu', 'bingliang', 'huoshan', 'hongshui', 'guiyoujie'];
					var card = game.createCard(list.randomGet());
					card.expired = true;
					player.addJudge(card);
					('step 2');
					player.phaseJudge();
				},
			};
			lib.skill.SE_qiyuan6 = {
				trigger: { global: 'triggerBefore' },
				filter(event, player) {
					if (event.skill == '_wuxie') return true;
					return false;
				},
				forced: true,
				popup: false,
				_priority: Infinity,
				content() {
					trigger.untrigger();
					trigger.cancelled = true;
				},
			};
			lib.skill.SE_qiyuan7 = {
				trigger: { player: 'phaseJudgeAfter' },
				filter(event, player) {
					return player.storage.愿 || player.storage.愿 > 0;
				},
				forced: true,
				popup: false,
				content() {
					player.storage.愿 = 0;
					player.unmark('愿');
				},
			};
			lib.skill.SE_qiyuan8 = {
				audio: 2,
				trigger: { player: 'chooseToRespondBegin' },
				filter(event, player) {
					if (event.responded) return false;
					var num = get.skillCount('SE_qiyuan3', player) + player.storage.SE_qiyuan2;
					if (num >= player.hp + 1 || num >= 4) return false;
					return true;
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(function (card, player, target) {
						return player != target;
					}, '是否发动【祈愿】?').ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					if (result.bool) {
						player.storage.SE_qiyuan2++;
						event.target = result.targets[0];
						event.target.showHandcards();
						event.goto(2);
					} else {
						event.finish();
					}
					('step 2');
					var target = event.target;
					if (trigger.filterCard({ name: 'sha' }, player)) {
						var num = target.countCards('h', { type: 'basic' });
						var cards = targe.getCards('h', { type: 'basic' });
						if (num > 0) {
							target.lose(cards)._triggered = null;
							target.$throw(cards);
							game.log(target, '弃置了', cards);
							target.draw(num);
						} else {
							target.draw();
						}
						event.goto(3);
					}
					if (trigger.filterCard({ name: 'shan' }, player)) {
						var num = target.countCards('h', { type: 'basic' });
						var cards = targe.getCards('h', { type: 'basic' });
						if (num > 0) {
							target.lose(cards)._triggered = null;
							target.$throw(cards);
							game.log(target, '弃置了', cards);
							target.draw(num);
						} else {
							target.draw();
						}
						event.goto(4);
					}
					('step 3');
					trigger.untrigger();
					trigger.responded = true;
					trigger.result = { bool: true, card: { name: 'sha' } };
					event.finish();
					('step 4');
					trigger.untrigger();
					trigger.responded = true;
					trigger.result = { bool: true, card: { name: 'shan' } };
					event.finish();
				},
			};
			lib.skill.SE_qiyuan9 = {
				audio: 2,
				enable: 'chooseToUse',
				delay: 0,
				forced: true,
				filter(event, player) {
					var num = get.skillCount('SE_qiyuan', player) + get.skillCount('SE_qiyuan9', player) + get.skillCount('SE_qiyuan12', player);
					if (num >= player.hp + 1 || num >= 4) return false;
					if (event.filterCard && !event.filterCard({ name: 'wuxie' }, player)) return false;
					return player.hp > 0;
				},
				content() {
					'step 0';
					player.chooseTarget(
						function (card, player, target) {
							return player != target;
						},
						'请选择1名角色',
						true
					).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					if (result.targets?.length) {
						event.target = result.targets[0];
						event.target.showHandcards();
					}
					('step 2');
					var target = event.target;
					var num = target.countCards('h', { type: 'trick' });
					var cards = targe.getCards('h', { type: 'trick' });
					if (num > 0) {
						target.lose(cards)._triggered = null;
						target.$throw(cards);
						game.log(target, '弃置了', cards);
						target.draw(num);
					} else {
						target.draw();
					}
					('step 3');
					player.useCard({ name: 'wuxie' });
					event.parent.result = 'wuxied';
				},
				ai: {
					result: {
						player(player, current) {
							if (_status.currentPhase == player) return 10;
							if (_status.currentPhase != player) {
								if (get.attitude(player, _status.currentPhase) < 0) return 1;
								if (get.attitude(player, _status.currentPhase) >= 2) return 3;
							}
							return 0;
						},
					},
				},
				hiddenCard(player, name) {
					var num = get.skillCount('SE_qiyuan', player) + get.skillCount('SE_qiyuan9', player) + get.skillCount('SE_qiyuan12', player);
					if (num >= player.hp + 1 || num >= 4) return false;
					return player.hp > 0;
				},
			};
			lib.skill.SE_qiyuan11 = {
				trigger: { global: 'phaseAfter' },
				forced: true,
				silent: true,
				popup: false,
				content() {
					player.stat.push({ card: {}, skill: {} });
					player.storage.SE_qiyuan2 = 0;
				},
			};
			lib.skill.SE_xieshen = {
				audio: 2,
				trigger: { global: 'triggerBefore' },
				filter(event, player) {
					if (event.parent.name == 'SE_xieshen') return false;
					if (event.skill == '_phasebegin') return false;
					if (event.skill == '_turnover') return false;
					if (event.skill == '_wuxie') return false;
					if (event.skill == '_chenhuodajie') return false;
					if (event.skill == '_save') return false;
					if (event.skill == '_lianhuan') return false;
					if (event.skill == '_lianhuan2') return false;
					if (event.skill == '_lianhuan3') return false;
					if (event.skill == '_lianhuan4') return false;
					if (event.skill == 'SE_qiyuan5') return false;
					if (event.skill == 'SE_qiyuan6') return false;
					if (event.skill == 'SE_qiyuan7') return false;
					if (event.skill == '_mingzhi1') return false;
					if (event.skill == '_mingzhi2') return false;
					if (player.countCards('h') <= 0) return false;
					if (event.player == player) return false;
					return true;
				},
				forced: true,
				init(player) {
					delete player.identity;
					player.identity = null;
					player.setIdentity('神');
					player.node.identity.dataset.color = 'zhu';
					if (game.zhu && game.zhu != player) {
						game.zhu.node.identity.dataset.color = 'fan';
					}
					player.node.name.dataset.nature = 'fire';
				},
				_priority: Infinity,
				content() {
					'step 0';
					var num = Math.ceil(player.countCards('h') / 2);
					player.chooseTarget('是否选择1名角色弃置' + num + '张牌使' + get.translation(trigger.player) + '的' + get.translation(trigger.skill) + '触发无效并将技能发起人转移给目标或者终止结算？').ai = function (target) {
						return -1;
					};
					('step 1');
					if (result.bool) {
						var num = Math.ceil(player.countCards('h') / 2);
						player.chooseToDiscard(num, true);
						player.chooseControl('继续结算', '终止技能', ui.create.dialog('请选择一项', 'hidden')).ai = function () {
							if (player.countCards('h') <= 2) return '继续结算';
							return '终止技能';
						};
						event.targets = result.targets;
					} else {
						event.finish();
					}
					('step 2');
					if (result.control == '继续结算') {
						trigger.untrigger();
						trigger.player = event.targets[0];
						game.log(get.translation(trigger.skill), '的使用权暂时转移给了', event.targets);
						trigger.trigger('triggerBefore');
					} else {
						trigger.untrigger();
						trigger.cancelled = true;
						game.log(get.translation(trigger.skill), '的触发被终止');
					}
				},
				group: ['SE_xieshen2', 'SE_xieshen3'],
			};
			lib.skill.SE_xieshen2 = {
				audio: 2,
				trigger: { global: 'useSkillBefore' },
				forced: true,
				_priority: Infinity,
				filter(event, player) {
					if (event.parent.name == 'SE_xieshen') return false;
					if (player.countCards('h') <= 0) return false;
					if (event.player == player) return false;
					return true;
				},
				content() {
					'step 0';
					var num = Math.ceil(player.countCards('h') / 2);
					player.chooseTarget('是否选择1名角色弃置' + num + '张牌使' + get.translation(trigger.player) + '的' + get.translation(trigger.skill) + '发动无效并将技能发起人转移给目标或者终止结算？').ai = function (target) {
						return -1;
					};
					('step 1');
					if (result.bool) {
						var num = Math.ceil(player.countCards('h') / 2);
						player.chooseToDiscard(num, true);
						player.chooseControl('继续结算', '终止技能', ui.create.dialog('请选择一项', 'hidden')).ai = function () {
							if (player.countCards('h') <= 2) return '继续结算';
							return '终止技能';
						};
						event.targets = result.targets;
					} else {
						event.finish();
					}
					('step 2');
					if (result.control == '继续结算') {
						trigger.untrigger();
						game.log(get.translation(trigger.skill), '的使用权暂时转移给了', event.targets);
						event.goto(3);
					} else {
						trigger.untrigger();
						trigger.finish();
						game.log(get.translation(trigger.skill), '的使用被终止');
						const evt = _status.event.getParent('phase');
						if (evt && evt.name) {
							evt.finish();
						}
					}
					('step 3');
					if (trigger.targets && trigger.targets.length) {
						var num = trigger.targets.length;
					}
					event.targets[0].chooseTarget('请选择' + get.translation(trigger.skill) + '的目标', [num, num], function (card, player, target) {
						return lib.filter.filterTarget(trigger.skill, player, target);
					}).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 4');
					if (result.targets?.length) {
						event.targets[0].useSkill(trigger.skill, result.targets);
						trigger.finish();
					} else {
						event.targets[0].useSkill(trigger.skill, event.targets);
						trigger.finish();
					}
				},
			};
			lib.skill.SE_xieshen3 = {
				trigger: { global: 'gameStart' },
				forced: true,
				popup: false,
				_priority: Infinity,
				silent: true,
				content() {
					delete lib.character[player.name];
				},
			};
			lib.skill.SE_wanxing = {
				audio: 2,
				trigger: { player: 'phaseAfter' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(function (card, player, target) {
						if (player == target) return false;
						if (player.countCards('h') < target.countCards('h')) return true;
					}, '是否发动【万形】？').ai = function () {
						return -1;
					};
					('step 1');
					if (result.targets?.length) {
						var target = result.targets[0];
						event.target = target;
						target.storage.SE_wanxing = player;
					} else {
						event.finish();
					}
					('step 2');
					if (player.ai.shown < 0.5) {
						player.ai.shown = 0.5;
					}
					event.target.addSkill('SE_wanxing2');
					event.target.storage.SE_wanxing2 = event.target.ai.shown;
					game.players.remove(player);
					game.dead.remove(player);
					player.removed = true;
				},
				ai: {
					threaten: 5,
				},
			};
			lib.skill.SE_wanxing2 = {
				trigger: { player: ['phaseEnd', 'dieBefore'] },
				forced: true,
				popup: false,
				_priority: 10,
				content() {
					var source = player.storage.SE_wanxing;
					player.ai.shown = player.storage.SE_wanxing2;
					delete player.storage.SE_wanxing;
					delete player.storage.SE_wanxing2;
					if (source) {
						game.players.push(source);
						source.removed = false;
						source.update();
						ui.clear();
						delete source.removed;
						player.removeSkill('SE_wanxing2');
					}
				},
			};
			lib.skill.SE_mosha = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (game.players.length + game.dead.length >= 3) return true;
					return false;
				},
				selectTarget: [1, 1],
				filterTarget(card, player, target) {
					return target !== player;
				},
				content() {
					game.removePlayer(target);
					player.recover();
				},
				group: ['SE_mosha2'],
				ai: {
					order: 8,
					result: {
						target(player, target) {
							return get.attitude(target, player);
						},
					},
				},
				expose: 0.4,
			};
			lib.skill.SE_mosha2 = {
				enable: 'phaseUse',
				audio: 2,
				usable: 1,
				filter(event, player) {
					if (game.dead.length && game.players.length + game.dead.length >= 3) return true;
					return false;
				},
				content() {
					'step 0';
					var list = [];
					for (var i = 0; i < game.dead.length; i++) {
						list.push(game.dead[i].name);
					}
					if (game.dead.length) {
						player.chooseButton(
							ui.create.dialog([list, 'character']),
							function (button) {
								for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
								return -get.attitude(_status.event.player, game.dead[i]);
							},
							true
						);
					}
					('step 1');
					if (result.bool) {
						for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
						game.removePlayer(game.dead[i]);
						player.recover();
					}
				},
				ai: {
					order: 6,
					result: {
						target(player, target) {
							return get.attitude(target, player);
						},
					},
				},
				expose: 0.4,
			};
			lib.skill.SE_chuangzao = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (game.players.length + game.dead.length <= 3) return true;
					return false;
				},
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
						player2.identity = player.identity;
						if (player2.identity == 'zhu') player2.identity = 'zhong';
						player2.setIdentity('奴');
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
						if (skills0 && skills0.length) {
							for (var i = 0; i < skills0.length; i++) {
								player.addSkill(skills0[i]);
							}
						}
						if (skills1 && skills1.length) {
							for (var i = 0; i < skills1.length; i++) {
								player.addSkill(skills1[i]);
							}
						}
						if (skills2 && skills2.length) {
							for (var i = 0; i < skills2.length; i++) {
								player.addSkill(skills2[i]);
							}
						}
						if (player.maxHp > 0) player.loseMaxHp();
					}
				},
			};
			lib.skill.SE_zhushen = {
				audio: 2,
				trigger: { global: 'gameStart' },
				forced: true,
				_priority: 100,
				content() {
					'step 0';
					if (lib.config.mode == 'guozhan' && get.config('guozhan_mode') != 'mingjiang') {
						for (var i of game.players) {
							i.showCharacter(2);
						}
					} else {
						event.goto(1);
					}
					('step 1');
					var names = [];
					var players = game.players.concat(game.dead);
					for (var i of players) {
						if (i == player) continue;
						if (i.name && !i.classList.contains('unseen')) names.add(i.name);
						if (i.name1 && !i.classList.contains('unseen')) names.add(i.name1);
						if (i.name2 && !i.classList.contains('unseen2')) names.add(i.name2);
					}
					for (var i = 0; i < names.length; i++) {
						var info = lib.character[names[i]];
						if (info) {
							var skills = info[3];
							for (var j = 0; j < skills.length; j++) {
								player.addSkill(skills[j]);
							}
						}
					}
					player.maxHp += game.players.length * 2;
					player.hp = player.maxHp;
					player.update();
					ui.clear();
					game.zhu = player;
					player.identity = 'zhu';
					player.setIdentity('神');
					player.node.identity.dataset.color = 'zhu';
					player.identityShown = true;
					var players = get.players(false, true);
					for (var i of players) {
						if (i != player) {
							i.identity = 'fan';
							i.setIdentity('人');
							i.identityShown = true;
						}
					}
					for (var i of game.players) {
						if (i == player) continue;
						if (i.name) {
							i.disabledSkills.zhushen0 = lib.character[i.name][3];
						}
						if (i.name1) {
							i.disabledSkills.zhushen1 = lib.character[i.name1][3];
						}
						if (i.name2) {
							i.disabledSkills.zhushen2 = lib.character[i.name2][3];
						}
					}
					player.draw(4);
					player.removeSkill('SE_zhushen');
					player.phase('nodelay');
				},
			};
			lib.skill.SE_lunhui = {
				audio: 2,
				trigger: { global: 'dieBefore' },
				forced: true,
				filter(event, player) {
					if (event.player == player) return false;
					if (event.player.maxHp < 1) return false;
					return event.player.identity != 'zhong';
				},
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					trigger.player.loseMaxHp();
					trigger.player.hp = trigger.player.maxHp;
					trigger.player.draw(2);
					trigger.player.identity = 'zhong';
					trigger.player.setIdentity('奴');
					trigger.player.identityShown = true;
				},
				group: ['SE_lunhui2'],
			};
			lib.skill.SE_lunhui2 = {
				trigger: { player: 'phaseBegin' },
				forced: true,
				popup: false,
				filter(event, player) {
					return player.hp <= 4;
				},
				content() {
					var names = [];
					var players = game.players.concat(game.dead);
					for (var i of players) {
						if (i == player) continue;
						if (i.name && !i.classList.contains('unseen')) names.add(i.name);
						if (i.name1 && !i.classList.contains('unseen')) names.add(i.name1);
						if (i.name2 && !i.classList.contains('unseen2')) names.add(i.name2);
					}
					for (var i = 0; i < names.length; i++) {
						var info = lib.character[names[i]];
						if (info) {
							var skills = info[3];
							for (var j = 0; j < skills.length; j++) {
								player.removeSkill(skills[j]);
							}
						}
					}
					for (var i of game.players) {
						if (i == player) continue;
						if (i.name) {
							delete i.disabledSkills.zhushen0;
						}
						if (i.name1) {
							delete i.disabledSkills.zhushen1;
						}
						if (i.name2) {
							delete i.disabledSkills.zhushen2;
						}
					}
				},
			};
			lib.skill.SE_yinzhe = {
				audio: 2,
				trigger: { global: 'phaseBegin' },
				forced: true,
				init(player) {
					player.storage.SE_yinzhe = 0;
				},
				intro: {
					content: 'mark',
				},
				marktext: '隐',
				filter(event, player) {
					return event.player != player;
				},
				content() {
					player.storage.SE_yinzhe++;
					player.markSkill('SE_yinzhe');
				},
				group: ['SE_yinzhe2', 'SE_yinzhe3'],
			};
			lib.skill.SE_yinzhe2 = {
				audio: 2,
				trigger: { player: 'phaseBegin' },
				forced: true,
				_priority: 6,
				filter(event, player) {
					return player.storage.SE_yinzhe > 0;
				},
				content() {
					player.storage.SE_yinzhe = 0;
					player.unmarkSkill('SE_yinzhe');
				},
			};
			lib.skill.SE_yinzhe3 = {
				mod: {
					globalTo(from, to, distance) {
						if (typeof to.storage.SE_yinzhe == 'number') return distance + to.storage.SE_yinzhe;
					},
				},
			};
			lib.skill.SE_kuilei = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				init(player) {
					player.storage.SE_kuilei = 0;
				},
				filterCard: true,
				selectCard: [1, Infinity],
				check(card) {
					if (_status.event.player.hp == _status.event.player.maxHp) {
						return 5 - get.value(card);
					}
					return 7 - get.value(card);
				},
				prompt: '请选择弃置张数',
				position: 'he',
				intro: {
					content: 'mark',
				},
				marktext: '冻',
				filter(event, player) {
					if (player.storage.SE_kuilei && player.storage.SE_kuilei >= 4) return false;
					return true;
				},
				content() {
					'step 0';
					var num = cards.length;
					player.storage.SE_kuilei += num;
					player.markSkill('SE_kuilei');
					('step 1');
					if (player.storage.SE_kuilei && player.storage.SE_kuilei > 4) {
						player.storage.SE_kuilei = 4;
						player.markSkill('SE_kuilei');
						event.finish();
					}
				},
				group: ['SE_kuilei2', 'SE_kuilei3'],
				ai: {
					order: 8,
					result: {
						player(player) {
							if (!player.storage.SE_kuilei) return 1;
							if (!player.storage.SE_kuilei && player.hp <= 2) return 10;
							if (player.storage.SE_kuilei >= 4) return 0;
							if (player.storage.SE_kuilei >= 3) return 0.2;
							return 0.8;
						},
					},
				},
				threaten(player, target) {
					if (!target.storage.SE_kuilei) return 2;
					return 0.6;
				},
			};
			lib.skill.SE_kuilei2 = {
				audio: 2,
				trigger: { player: 'damageBefore' },
				filter(event, player) {
					return player.storage.SE_kuilei > 0;
				},
				forced: true,
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					player.storage.SE_kuilei--;
					player.draw();
					if (player.storage.SE_kuilei <= 0) {
						player.unmarkSkill('SE_kuilei');
					}
					if (trigger.source && trigger.source != player) {
						var cards = trigger.sourc.getCards('h', 'sha');
						if (cards.length) {
							trigger.source.discard(cards);
						} else {
							trigger.source.discard(trigger.source.getCards('h'));
						}
					}
				},
				ai: {
					nodamage: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage') && target.storage.SE_kuilei) return [0, 2, 0, -2];
						},
					},
				},
			};
			lib.skill.SE_kuilei3 = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (!player.storage.SE_kuilei) return false;
					if (player.storage.SE_kuilei <= 1) return false;
					return true;
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				check() {
					return -1;
				},
				line: 'thunder',
				content() {
					'step 0';
					player.storage.SE_kuilei--;
					if (player.storage.SE_kuilei <= 0) {
						player.unmarkSkill('SE_kuilei');
					}
					('step 1');
					var num = player.storage.SE_kuilei - 1;
					target.damage(num);
				},
				ai: {
					order: 4,
					result: {
						target(player, target) {
							if (target.hasSkillTag('nodamage')) return 0;
							if (lib.config.mode == 'versus') return -1;
							for (var i of game.players) {
								if (lib.config.mode == 'identity') {
									if (i.ai.shown <= 0.2) return 0;
								} else if (lib.config.mode == 'guozhan') {
									if (i.identity == 'unknown') return 0;
								}
							}
							return get.damageEffect(target, player);
						},
						player(player) {
							if (player.hp == 1) return 0;
							if (player.storage.SE_kuilei <= 2) return 0;
							if (player.storage.SE_kuilei == 4) return 1.5;
							return 0.8;
						},
					},
				},
				expose: 0.4,
			};
			lib.skill.SE_wudi = {
				audio: 2,
				trigger: { player: ['useCardAfter', 'respond'] },
				forced: true,
				mark: true,
				filter(event, player) {
					return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
				},
				init(player) {
					player.node.name.dataset.nature = 'white';
					player.storage.SE_wudi = 1;
				},
				intro: {
					content: 'mark',
				},
				content() {
					player.storage.SE_wudi++;
					player.markSkill('SE_wudi');
				},
				ai: {
					effect: {
						target(card) {
							if (card.name == 'sha' || card.name == 'juedou') return [0, 2];
						},
					},
				},
			};
			lib.skill.SE_daoxin = {
				audio: true,
				trigger: { player: 'damageBefore' },
				forced: true,
				filter(event, player) {
					return player.storage.SE_wudi >= 2 && event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
				},
				content() {
					trigger.num--;
				},
				group: ['SE_daoxin2', 'SE_daoxin3', 'SE_daoxin4'],
			};
			lib.skill.SE_daoxin2 = {
				audio: true,
				trigger: { player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'] },
				forced: true,
				_priority: 55,
				filter(event, player) {
					return player.storage.SE_wudi >= 4;
				},
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					player.recover();
					('step 1');
					player.storage.SE_wudi -= 1;
				},
			};
			lib.skill.SE_daoxin3 = {
				mod: {
					selectTarget(card, player, range) {
						if (card.name == 'sha' || card.name == 'juedou') range[1] = player.storage.SE_wudi;
					},
				},
			};
			lib.skill.SE_daoxin4 = {
				audio: true,
				trigger: { player: 'phaseBefore' },
				filter(event, player) {
					return player.storage.SE_wudi >= 6;
				},
				content() {
					'step 0';
					player.storage.SE_wudi -= 6;
					if (player.storage.SE_wudi < 0) {
						player.unmarkSkill('SE_wudi');
					}
					('step 1');
					for (var i of game.players) {
						if (i == player) continue;
						var num = i.getCards('hej');
						i.discard(num);
						i.damage('thunder');
					}
				},
			};
			lib.skill.SE_guiyin = {
				audio: 2,
				trigger: { global: 'useCardToBegin' },
				filter(event, player) {
					return event.target && event.target == player && event.player.storage.SE_guiyin < 2;
				},
				marktext: '鬼',
				intro: {
					content: 'mark',
				},
				init(player) {
					for (var i of game.players) {
						i.storage.SE_guiyin = 0;
					}
				},
				content() {
					trigger.player.storage.SE_guiyin++;
					trigger.player.markSkill('SE_guiyin');
				},
			};
			lib.skill.SE_shenyin = {
				audio: true,
				trigger: { player: 'phaseEnd' },
				filter(player) {
					var num = 0;
					for (var i of game.players) {
						num += i.storage.SE_guiyin;
					}
					if (num >= 5) return true;
					return false;
				},
				content() {
					'step 0';
					player.chooseControl('摸牌', '造成伤害', ui.create.dialog('请选择一项', 'hidden')).ai = function () {
						var num = 1;
						for (var i of game.players) {
							if (i.storage.SE_guiyin) {
								if (get.attitude(player, i) > 0) num++;
								if (get.attitude(player, i) < 0) num--;
							}
						}
						if (num > 2) return '摸牌';
						return '造成伤害';
					};
					('step 1');
					if (result.control == '造成伤害') {
						for (var i of game.players) {
							if (i.storage.SE_guiyin) {
								i.unmarkSkill('SE_guiyin');
								i.damage(i.storage.SE_guiyin);
								i.storage.SE_guiyin = 0;
							}
						}
					}
					if (result.control == '摸牌') {
						event.num = 0;
						for (var i of game.players) {
							if (i.storage.SE_guiyin) {
								i.unmarkSkill('SE_guiyin');
								event.num += i.storage.SE_guiyin;
								i.storage.SE_guiyin = 0;
							}
						}
						player.draw(event.num);
					}
				},
				group: ['SE_shenyin2', 'SE_shenyin3'],
			};
			lib.skill.SE_shenyin2 = {
				mod: {
					globalFrom(from, to, distance) {
						var num = 0;
						for (var i of game.players) {
							num += i.storage.SE_guiyin;
						}
						if (num >= 1) return distance - 2;
					},
				},
			};
			lib.skill.SE_shenyin3 = {
				audio: true,
				trigger: { player: 'phaseBegin' },
				filter(event, player) {
					var num = 0;
					for (var i of game.players) {
						num += i.storage.SE_guiyin;
					}
					return num >= 3;
				},
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						if (get.distance(player, i, 'attack') > 1) continue;
						if (i.storage.SE_guiyin >= 2) continue;
						i.storage.SE_guiyin++;
						i.markSkill('SE_guiyin');
					}
				},
			};
			lib.skill.SE_hougong = {
				audio: true,
				forced: true,
				trigger: { global: 'phaseBegin' },
				filter(event, player) {
					return event.player.sex == 'female' && event.player.countCards('h') > 0;
				},
				content() {
					var hs = trigger.player.getCards('h');
					if (hs.length) {
						player.gain(hs.randomGets(2));
						trigger.player.$give(2, player);
						trigger.player.draw();
					}
				},
				group: ['SE_hougong2'],
			};
			lib.skill.SE_hougong2 = {
				audio: true,
				forced: true,
				trigger: { global: 'damageBefore' },
				filter(event, player) {
					return event.player.sex == 'female' && event.num > 0;
				},
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					player.damage();
					var cards0 = get.cards();
					var cards1 = get.cards();
					player.gain(cards0, 'gain2');
					game.log(player, '获得了', cards0);
					trigger.player.gain(cards1, 'gain2');
					game.log(trigger.player, '获得了', cards1);
				},
			};
			lib.skill.SE_haochuan = {
				audio: 2,
				trigger: { player: 'dying' },
				filter(event, player) {
					return !player.isTurnedOver();
				},
				content() {
					player.recover(player.maxHp);
					player.addTempSkill('luanwu', 'phaseAfter');
					player.removeSkill('SE_haochuan');
					player.phase('nodelay');
					player.turnOver();
				},
			};
			lib.skill.SE_xianjing = {
				audio: 2,
				trigger: { player: 'phaseDrawAfter' },
				forced: true,
				filter(event, player) {
					return ui.discardPile.childNodes.length;
				},
				content() {
					'step 0';
					var num2 = ui.discardPile.childNodes.length;
					var num = Math.min(player.countCards('h'), num2);
					player.chooseCard('选择任意张手牌与弃牌堆里的牌交换', [1, num]).ai = function (card) {
						return 1;
					};
					('step 1');
					if (result.bool) {
						cards = [];
						if (Array.isArray(result.cards)) for (var i of result.cards) {
							cards.push(i);
						}
						player.discard(cards)._triggered = null;
						event.num = result.cards.length;
					} else {
						event.finish();
					}
					('step 2');
					var cards = [];
					for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
						cards.push(ui.discardPile.childNodes[i]);
					}
					player.chooseCardButton(cards, '选择' + event.num + '张牌作为手牌', event.num, true).ai = function (button) {
						if (player.skipList.includes('phaseUse')) {
							return -get.value(button.link);
						}
						return get.value(button.link);
					};
					if (player == game.me && _status.auto) {
					}
					('step 3');
					player.gain(result.links)._triggered = null;
					player.$gain2(result.links);
					game.log(player, '获得了', result.links);
					if (player == game.me && _status.auto) {
					}
				},
				group: ['SE_xianjing2'],
			};
			lib.skill.SE_xianjing2 = {
				audio: 2,
				trigger: { player: 'phaseDiscardBegin' },
				forced: true,
				filter(event, player) {
					return ui.discardPile.childNodes.length;
				},
				content() {
					'step 0';
					var num2 = ui.discardPile.childNodes.length;
					var num = Math.min(player.countCards('h'), num2);
					player.chooseCard('是否发动【仙境】？', [1, num]).ai = function (card) {
						return 1;
					};
					('step 1');
					if (result.bool) {
						cards = [];
						if (Array.isArray(result.cards)) for (var i of result.cards) {
							cards.push(i);
						}
						var cards2 = [];
						if (Array.isArray(result.cards)) for (var i of result.cards) {
							if (get.type(i) == 'basic') {
								cards2.push(i);
							}
						}
						player.discard(cards)._triggered = null;
						event.num = result.cards.length;
						if (cards2.length) {
							player.recover();
							player.draw();
						}
					} else {
						event.finish();
					}
					('step 2');
					player.chooseTarget(
						function (card, player, target) {
							return player != target;
						},
						'请选择获得牌的目标',
						true
					).ai = function (target) {
						return get.attitude(player, target);
					};
					('step 3');
					if (result.targets?.length) {
						event.targets = result.targets[0];
						player.chooseBool('是否令其流失1点体力？').ai = function () {
							return false;
						};
					}
					('step 4');
					if (result.bool) {
						var targets = event.targets;
						targets.loseHp();
					} else {
						event.goto(5);
					}
					('step 5');
					var cards = [];
					for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
						cards.push(ui.discardPile.childNodes[i]);
					}
					player.chooseCardButton(cards, '选择' + event.num + '张牌交给目标', event.num, true).ai = function (button) {
						if (player.skipList.includes('phaseUse')) {
							return -get.value(button.link);
						}
						return get.value(button.link);
					};
					if (player == game.me && _status.auto) {
					}
					('step 6');
					var targets = event.targets;
					targets.gain(result.links)._triggered = null;
					targets.$gain2(result.links);
					game.log(targets, '获得了', result.links);
					if (player == game.me && _status.auto) {
					}
					('step 7');
					var cards = [];
					for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
						cards.push(ui.discardPile.childNodes[i]);
					}
					player.chooseCardButton(cards, '选择1张牌获得并立即使用').ai = function (button) {
						if (player.skipList.includes('phaseUse')) {
							return -get.value(button.link);
						}
						return get.value(button.link);
					};
					if (player == game.me && _status.auto) {
					}
					('step 8');
					if (result.links?.length) {
						player.gain(result.links[0]);
						player.$gain2(result.links[0]);
						game.log(player, '获得了', result.links[0]);
						event.card = result.links[0];
						if (player == game.me && _status.auto) {
						}
						event.goto(9);
					} else {
						event.finish();
					}
					('step 9');
					var gained = event.card;
					if (lib.filter.filterCard(gained)) {
						var next = player.chooseToUse();
						next.filterCard = function (card) {
							return card == gained;
						};
						next.prompt = '是否使用' + get.translation(gained) + '？';
						// if(get.select(lib.card[gained.name])[1]!=-1){
						// 	next.selectCard=-1;
						// }
					}
					('step 10');
					if (player.getCards('h').includes(event.card)) {
						var cards = event.card;
						player.lose(cards)._triggered = null;
						ui.discardPile.appendChild(cards);
						game.log(player, '将', cards, '置入了弃牌堆');
					}
				},
				ai: {
					expose: 0.5,
				},
			};
			lib.skill.SE_mengxian = {
				audio: 2,
				trigger: { target: 'useCardToBegin' },
				filter(event, player) {
					return event.card && event.target == player && event.player != player && ui.discardPile.childNodes.length;
				},
				forced: true,
				content() {
					'step 0';
					var cards = [];
					for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
						if (ui.discardPile.childNodes[i].name == trigger.card.name) {
							cards.push(ui.discardPile.childNodes[i]);
						}
					}
					if (!cards.length || cards.length < 2) {
						event.finish();
					} else {
						player.chooseCardButton(cards, '选择弃牌堆中的同名牌来抵消该牌效果').ai = function (button) {
							return 1;
						};
						if (player == game.me && _status.auto) {
						}
					}
					('step 1');
					if (result.links?.length) {
						player.gain(result.links[0])._triggered = null;
						player.$gain2(result.links[0]);
						game.log(player, '获得了', result.links[0]);
						trigger.player.draw();
						trigger.untrigger();
						trigger.finish();
						if (player == game.me && _status.auto) {
						}
						event.goto(2);
					} else {
						event.finish();
					}
					('step 2');
					player.chooseTarget(
						function (card, player, target) {
							return player != target;
						},
						'是否选择摸牌的目标？',
						[1, Infinity]
					).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 3');
					if (result.targets?.length) {
						game.asyncDraw(result.targets);
						event.targets = result.targets;
						event.goto(4);
					} else {
						event.finish();
					}
					('step 4');
					for (var i = 0; i < event.targets.length; i++) {
						if (event.targets[i].countCards('h') > event.targets[i].hp) {
							event.targets[i].damage();
						}
					}
				},
				group: ['SE_mengxian2'],
				ai: {
					threaten: 0.5,
				},
			};
			lib.skill.SE_mengxian2 = {
				audio: 2,
				trigger: { player: 'useCard' },
				filter(event, player) {
					var cards2 = [];
					var cards = player.getCards('h');
					if (Array.isArray(cards)) for (var i of cards) {
						if (i.name == event.card.name) {
							cards2.push(i);
						}
					}
					if (!cards2.length) return false;
					if (!event.card || event.target == player || get.type(event.card) != 'basic') return false;
					return true;
				},
				forced: true,
				content() {
					'step 0';
					player.chooseCard('是否发动【梦现】？', function (card) {
						return card.name == trigger.card.name;
					}).ai = function (card) {
						return 1;
					};
					('step 1');
					if (result.cards?.length) {
						player.discard(result.cards[0]);
						var players = [];
						for (var i of game.players) {
							players.push(i);
						}
						game.asyncDraw(players);
					} else {
						event.finish();
					}
					('step 2');
					for (var i of game.players) {
						if (i == player) continue;
						if (i.countCards('h') > i.hp) {
							i.damage();
						}
					}
				},
				ai: {
					threaten: 0.5,
				},
			};
			lib.skill.SE_zhenlizhimeng = {
				audio: 4,
				trigger: { global: 'phaseAfter' },
				filter(event, player) {
					return event.player != player;
				},
				check(event, player) {
					var att = get.attitude(player, event.player);
					if (lib.config.mode == 'boss') return true;
					if (lib.config.mode == 'identity') {
						if (player.identity == 'zhu' && (event.player.identity == 'fan' || event.player.identity == 'nei')) return true;
						if (player.identity == 'fan' && (event.player.identity == 'zhu' || event.player.identity == 'zhong' || event.player.identity == 'nei')) return true;
						if (player.identity == 'nei') {
							if (game.players.length > 2) {
								if (event.player.identity == 'fan' || event.player.identity == 'zhong') return true;
							}
							if (game.players.length == 2) {
								return true;
							}
						}
					} else if (lib.config.mode == 'guozhan') {
						if (event.player.identity == 'unknown') return false;
						if (event.player.identity != player.identity) return true;
					}
					return att < 2;
				},
				content() {
					'step 0';
					trigger.player.judge(function (card) {
						if (card.suit == 'heart') return 0.5;
						if (card.suit == 'spade') return -6;
						if (card.suit == 'club') return -4;
						return 0;
					});
					('step 1');
					var num = trigger.player.getCards('hej');
					switch (result.card.suit) {
						case 'heart':
							trigger.player.damage('fire');
							trigger.player.draw(2);
							break;
						case 'spade':
							trigger.player.discard(num)._triggered = null;
							trigger.player.loseHp(trigger.player.hp);
							break;
						case 'club':
							trigger.player.qdie(player);
							if (player.hp != 1) {
								player.loseHp(player.hp - 1);
							} else {
								event.finish();
							}
							break;
						case 'diamond':
							event.finish();
							break;
					}
				},
			};
			lib.skill.SE_xieyan = {
				audio: 2,
				trigger: { player: 'chooseToRespondBegin' },
				forced: true,
				filter(event, player) {
					if (event.responded) return false;
					for (var i of game.players) {
						if (i != player && i.countCards('h')) {
							return true;
						}
					}
					return false;
				},
				content() {
					'step 0';
					player.chooseTarget(function (card, player, target) {
						return player != target && target.countCards('h');
					}, '是否发动【邪眼】?').ai = function (target) {
						var att = get.attitude(player, target) + 1;
						if (target.countCards('h', 'shan') || target.countCards('h', 'sha')) {
							att * 10;
						}
						return -att;
					};
					('step 1');
					if (result.targets?.length) {
						event.target = result.targets[0];
						event.goto(2);
					} else {
						event.finish();
					}
					('step 2');
					var target = event.target;
					var cards = target.getCards('h');
					player.chooseCardButton('邪眼:选择' + get.translation(target) + '的一张手牌打出', cards).filterButton = function (button) {
						return trigger.filterCard(button.link);
					};
					('step 3');
					if (result.links?.length) {
						event.target.lose(result.links);
						trigger.untrigger();
						trigger.responded = true;
						result.buttons[0].link.remove();
						trigger.result = { bool: true, card: result.buttons[0].link };
					}
				},
				group: ['SE_xieyan2'],
				ai: {
					effect: {
						target(card) {
							if (get.tag(card, 'respondShan')) return 0.7;
							if (get.tag(card, 'respondSha')) return 0.7;
						},
					},
				},
			};
			lib.skill.SE_xieyan2 = {
				audio: 2,
				enable: 'phaseUse',
				usable: 3,
				delay: 0,
				forced: true,
				filter(event, player) {
					for (var i of game.players) {
						if (i != player && i.countCards('hej')) {
							return true;
						}
					}
					return false;
				},
				content() {
					'step 0';
					player.getStat('skill').SE_xieyan2--;
					player.chooseTarget(function (card, player, target) {
						return player != target && target.countCards('hej');
					}, '请选择1名角色').ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					if (result.bool) {
						player.getStat('skill').SE_xieyan2++;
						event.target = result.targets[0];
						event.goto(2);
					} else {
						event.finish();
					}
					('step 2');
					var target = event.target;
					event.dialog = ui.create.dialog('hidden');
					event.dialog.add('邪眼:选择' + get.translation(target) + '的一张卡牌使用');
					event.position = 'hej';
					var position = event.position;
					for (var i = 0; i < position.length; i++) {
						if (position[i] == 'h' && target.countCards('h')) {
							event.dialog.add('手牌');
							var hs = target.getCards('h');
							hs.randomSort();
							event.dialog.add(hs);
						} else if (position[i] == 'e' && target.countCards('e')) {
							event.dialog.add('装备牌');
							event.dialog.add(target.getCards('e'));
						} else if (position[i] == 'j' && target.countCards('j')) {
							event.dialog.add('判定牌');
							event.dialog.add(target.getCards('j'));
						}
					}
					var dialog = event.dialog;
					var trigger = event.parent.parent;
					player.chooseButton(dialog, function () {
						return 1;
					}).filterButton = function (button) {
						return trigger.filterCard(button.link, player, trigger);
					};
					('step 3');
					if (result.links?.length) {
						event.target.lose(result.links);
						event.target.$give(result.links, player);
						lib.skill.SE_xieyan3.viewAs = result.buttons[0].link;
						event.parent.parent.backup('SE_xieyan3');
						event.parent.parent.step = 0;
						if (event.isMine()) {
							event.parent.parent.openskilldialog = '选择' + get.translation(result.buttons[0].link) + '的目标';
						}
					}
				},
				ai: {
					order: 8,
					result: {
						player(player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
					threaten: 10,
				},
			};
			lib.skill.SE_xieyan3 = {
				filterCard() {
					return false;
				},
				selectCard: -1,
			};
			lib.skill.SE_duotian = {
				audio: 4,
				trigger: { global: 'phaseDrawAfter' },
				forced: true,
				filter(event, player) {
					return event.player.countCards('he') > 0 && event.player != player;
				},
				content() {
					var hs = trigger.player.getCards('he');
					if (hs.length) {
						var hs2 = [];
						for (var i = 0; i < hs.length; i++) {
							hs2.push(game.createCard(hs[i].name, hs[i].suit, hs[i].number));
						}
						player.gain(hs2, 'draw');
					}
				},
			};
			lib.skill.SE_shenyu = {
				audio: 2,
				trigger: { global: 'phaseBefore' },
				filter(event, player) {
					if (event.player == player) return false;
					if (event.player.disabledSkills.shenyu || event.player.disabledSkills.shenyu1 || event.player.disabledSkills.shenyu2) return false;
					if (event.player.hp >= 3) return true;
					return false;
				},
				check(event, player) {
					var att = get.attitude(player, event.player);
					if (lib.config.mode == 'boss') return true;
					if (lib.config.mode == 'identity') {
						if (player.identity == 'zhu' && (event.player.identity == 'fan' || event.player.identity == 'nei')) return true;
						if (player.identity == 'fan' && (event.player.identity == 'zhu' || event.player.identity == 'zhong' || event.player.identity == 'nei')) return true;
						if (player.identity == 'nei') {
							if (game.players.length > 2) {
								if (event.player.identity == 'fan' || event.player.identity == 'zhong') return true;
							}
							if (game.players.length == 2) {
								return true;
							}
						}
					} else if (lib.config.mode == 'guozhan') {
						if (event.player.identity == 'unknown') return false;
						if (event.player.identity != player.identity) return true;
					}
					return att < 2;
				},
				content() {
					'step 0';
					if (trigger.player.classList.contains('unseen')) {
						trigger.player.showCharacter(0);
					}
					if (trigger.player.classList.contains('unseen2')) {
						trigger.player.showCharacter(1);
					} else {
						event.goto(1);
					}
					('step 1');
					if (trigger.player.name) {
						var skills0 = lib.character[trigger.player.name][3];
						trigger.player.clearSkills();
						for (var j = 0; j < skills0.length; j++) {
							trigger.player.addSkill(skills0[j]);
						}
						trigger.player.disabledSkills.shenyu = lib.character[trigger.player.name][3];
					}
					if (trigger.player.name1) {
						var skills1 = lib.character[trigger.player.name1][3];
						trigger.player.clearSkills();
						for (var j = 0; j < skills1.length; j++) {
							trigger.player.addSkill(skills1[j]);
						}
						trigger.player.disabledSkills.shenyu1 = lib.character[trigger.player.name1][3];
					}
					if (trigger.player.name2) {
						var skills2 = lib.character[trigger.player.name2][3];
						for (var j = 0; j < skills2.length; j++) {
							trigger.player.addSkill(skills2[j]);
						}
						trigger.player.disabledSkills.shenyu2 = lib.character[trigger.player.name2][3];
					}
					if (skills0 && skills0.length) {
						for (var j = 0; j < skills0.length; j++) {
							player.addSkill(skills0[j]);
						}
					}
					if (skills1 && skills1.length) {
						for (var j = 0; j < skills1.length; j++) {
							player.addSkill(skills1[j]);
						}
					}
					if (skills2 && skills2.length) {
						for (var j = 0; j < skills2.length; j++) {
							player.addSkill(skills2[j]);
						}
					}
				},
				group: ['SE_shenyu2'],
			};
			lib.skill.SE_shenyu2 = {
				audio: 2,
				trigger: { global: 'phaseDrawBegin' },
				forced: true,
				filter(event, player) {
					if (event.player == player) return false;
					if (event.player.hp <= 2 && (event.player.disabledSkills.shenyu || event.player.disabledSkills.shenyu1 || event.player.disabledSkills.shenyu2)) return true;
					return false;
				},
				content() {
					if (trigger.player.name) {
						var skills0 = lib.character[trigger.player.name][3];
					}
					if (trigger.player.name1) {
						var skills1 = lib.character[trigger.player.name1][3];
					}
					if (trigger.player.name2) {
						var skills2 = lib.character[trigger.player.name2][3];
					}
					if (trigger.player.disabledSkills.shenyu) {
						delete trigger.player.disabledSkills.shenyu;
					}
					if (trigger.player.disabledSkills.shenyu1) {
						delete trigger.player.disabledSkills.shenyu1;
					}
					if (trigger.player.disabledSkills.shenyu2) {
						delete trigger.player.disabledSkills.shenyu2;
					}
					if (skills0 && skills0.length) {
						for (var j = 0; j < skills0.length; j++) {
							player.removeSkill(skills0[j]);
						}
					}
					if (skills1 && skills1.length) {
						for (var j = 0; j < skills1.length; j++) {
							player.removeSkill(skills1[j]);
						}
					}
					if (skills2 && skills2.length) {
						for (var j = 0; j < skills2.length; j++) {
							player.removeSkill(skills2[j]);
						}
					}
				},
			};
			lib.skill.SE_zhuoyan = {
				audio: true,
				trigger: { source: 'damageBefore' },
				forced: true,
				content() {
					trigger.nature = 'fire';
				},
				group: ['SE_zhuoyan2', 'SE_zhuoyan3'],
			};
			lib.skill.SE_zhuoyan2 = {
				audio: true,
				trigger: { source: 'damageEnd' },
				_priority: 100,
				filter(event, player) {
					return event.player.countCards('h') > 0;
				},
				content() {
					trigger.player.chooseToDiscard(true, 'h');
				},
			};
			lib.skill.SE_zhuoyan3 = {
				audio: true,
				trigger: { player: 'damageBefore' },
				forced: true,
				filter(event, player) {
					return event.nature == 'fire';
				},
				content() {
					trigger.untrigger();
					trigger.finish();
					player.draw(trigger.num);
				},
				ai: {
					nofire: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'fireDamage')) return [0, 1];
						},
					},
				},
			};
			lib.skill.SE_shenpan = {
				audio: true,
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player) {
					var type = get.type(card);
					if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
						if (get.type(i) == type) return false;
					}
					return true;
				},
				filterTarget(card, player, target) {
					return player != target && target.countCards('h') > 0 && player.countCards('h') > 0;
				},
				selectTarget: [1, 3],
				selectCard: 3,
				check(card) {
					if (_status.event.player.hp == _status.event.player.maxHp) {
						return 8 - get.value(card);
					}
					return 6 - get.value(card);
				},
				content() {
					target.damage();
					target.chooseToDiscard('h', true);
				},
				ai: {
					order: 9.5,
					result: {
						target(player, target) {
							if (target.hasSkillTag('nodamage')) return 0.5;
							if (lib.config.mode == 'versus') return -1;
							for (var i of game.players) {
								if (lib.config.mode == 'identity') {
									if (i.ai.shown <= 0.2) return 0;
								} else if (lib.config.mode == 'guozhan') {
									if (i.identity == 'unknown') return 0;
								}
							}
							return get.damageEffect(target, player);
						},
						player(player) {
							var num = player.countCards('h');
							if (num < 4) return 0;
							if (player.isDamaged) {
								if (num == 4 && (player.countCards('h', 'shan') || player.countCards('h', 'jiu') || player.countCards('h', 'tao'))) return -0.5;
							}
							return 0.9;
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_duanzui = {
				audio: true,
				trigger: { player: 'phaseEnd' },
				forced: true,
				filter(event, player) {
					for (var i of game.players) {
						if (i != player && i.countCards('h')) return true;
					}
					return false;
				},
				content() {
					'step 0';
					var players = get.players(player);
					players.remove(player);
					event.players = players;
					('step 1');
					if (event.players.length) {
						var current = event.players.shift();
						var hs = current.getCards('h');
						if (hs.length && hs.length < 3) {
							current.damage('fire', 3 - hs.length);
						}
						event.redo();
					}
				},
			};
			lib.skill.SE_xiaochuan = {
				trigger: { player: ['damageBegin', 'loseHpBegin'] },
				forced: true,
				filter(event, player) {
					return event.num > 0;
				},
				content() {
					trigger.num++;
				},
			};
			lib.skill.SE_qiyaomonv9 = {
				trigger: { player: 'phaseAfter' },
				filter(event, player) {
					return player.skills.includes('SE_yuefu') || player.skills.includes('SE_rifu') || player.skills.includes('SE_jinfu') || player.skills.includes('SE_mufu') || player.skills.includes('SE_shuifu') || player.skills.includes('SE_huofu') || player.skills.includes('SE_tufu');
				},
				forced: true,
				popup: false,
				content() {
					player.removeSkill('SE_jinfu');
					player.removeSkill('SE_mufu');
					player.removeSkill('SE_shuifu');
					player.removeSkill('SE_huofu');
					player.removeSkill('SE_tufu');
					player.removeSkill('SE_rifu');
					player.removeSkill('SE_yuefu');
					player.addSkill('SE_yuefu2');
				},
			};
			lib.skill.SE_qiyaomonv8 = {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (player.skills.includes('SE_riyuefu')) return false;
					return player.skills.includes('SE_rifu') && player.skills.includes('SE_yuefu');
				},
				content() {
					player.removeSkill('SE_yuefu');
					player.removeSkill('SE_rifu');
					player.addSkill('SE_riyuefu');
					player.addSkill('SE_yuefu2');
				},
			};
			lib.skill.SE_qiyaomonv7 = {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (player.skills.includes('SE_jinshuifu')) return false;
					return player.skills.includes('SE_jinfu') && player.skills.includes('水符');
				},
				content() {
					player.removeSkill('SE_shuifu');
					player.removeSkill('SE_jinfu');
					player.addSkill('SE_jinshuifu');
				},
			};
			lib.skill.SE_qiyaomonv6 = {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (player.skills.includes('SE_shuimuhu')) return false;
					return player.skills.includes('SE_shuifu') && player.skills.includes('SE_mufu');
				},
				content() {
					player.removeSkill('SE_shuifu');
					player.removeSkill('SE_mufu');
					player.addSkill('SE_shuimuhu');
				},
			};
			lib.skill.SE_qiyaomonv5 = {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (player.skills.includes('SE_huojinfu')) return false;
					return player.skills.includes('SE_jinfu') && player.skills.includes('SE_huofu');
				},
				content() {
					player.removeSkill('SE_jinfu');
					player.removeSkill('SE_huofu');
					player.addSkill('SE_huojinfu');
				},
			};
			lib.skill.SE_qiyaomonv4 = {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (player.skills.includes('SE_muhuofu')) return false;
					return player.skills.includes('SE_mufu') && player.skills.includes('SE_huofu');
				},
				content() {
					player.removeSkill('SE_mufu');
					player.removeSkill('SE_huofu');
					player.addSkill('SE_muhuofu');
				},
			};
			lib.skill.SE_qiyaomonv3 = {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (player.skills.includes('SE_shuihuofu')) return false;
					return player.skills.includes('SE_shuifu') && player.skills.includes('SE_huofu');
				},
				content() {
					player.removeSkill('SE_shuifu');
					player.removeSkill('SE_huofu');
					player.addSkill('SE_shuihuofu');
				},
			};
			lib.skill.SE_qiyaomonv2 = {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (player.skills.includes('SE_huotufu')) return false;
					return player.skills.includes('SE_huofu') && player.skills.includes('SE_huofu');
				},
				content() {
					player.removeSkill('SE_huofu');
					player.removeSkill('SE_tufu');
					player.addSkill('SE_huotufu');
				},
			};
			lib.skill.SE_qiyaomonv = {
				trigger: { player: 'phaseDrawBefore' },
				filter(event, player) {
					return player.countCards('h') >= 0;
				},
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					player.chooseControl('basic', 'equip', 'trick', 'delay', '获得贤者之石').ai = function (event) {
						switch (Math.floor(Math.random() * 6)) {
							case 0:
								return 'equip';
							case 1:
							case 4:
							case 5:
							case 6:
							case 7:
							case 8:
								return 'basic';
							case 2:
								return 'trick';
							case 3:
								return 'delay';
						}
					};
					('step 2');
					if (result.control == '获得贤者之石') {
						player.addTempSkill('SE_xianzhezhishi', 'phaseAfter');
						event.finish();
					} else {
						game.log(player, '选择了' + get.translation(result.control));
						event.choice = result.control;
						player.popup(event.choice);
						event.cards = get.cards(7);
						player.showCards(event.cards);
					}
					('step 3');
					var num = 0;
					if (Array.isArray(event.cards)) for (var i of event.cards) {
						if (get.type(i) == event.choice) {
							num += 1;
						}
					}
					if (num == 1) {
						var list = ['SE_huofu', 'SE_shuifu', 'SE_mufu', 'SE_tufu', 'SE_jinfu', 'SE_rifu', 'SE_yuefu'];
						var link = list.randomGet();
						player.addTempSkill(link, 'phaseAfter');
					} else if (num == 2) {
						var list = ['SE_huofu', 'SE_shuifu', 'SE_mufu', 'SE_tufu', 'SE_jinfu', 'SE_rifu', 'SE_yuefu'];
						var link = list.randomGets(2);
						player.addTempSkill(link, 'phaseAfter');
					} else if (num == 3) {
						var list = ['SE_huofu', 'SE_shuifu', 'SE_mufu', 'SE_tufu', 'SE_jinfu', 'SE_rifu', 'SE_yuefu'];
						var link = list.randomGets(3);
						player.addTempSkill(link, 'phaseAfter');
					} else if (num == 4) {
						var list = ['SE_huofu', 'SE_shuifu', 'SE_mufu', 'SE_tufu', 'SE_jinfu', 'SE_rifu', 'SE_yuefu'];
						var link = list.randomGets(4);
						player.addTempSkill(link, 'phaseAfter');
					} else if (num == 5) {
						var list = ['SE_huofu', 'SE_shuifu', 'SE_mufu', 'SE_tufu', 'SE_jinfu', 'SE_rifu', 'SE_yuefu'];
						var link = list.randomGets(5);
						player.addTempSkill(link, 'phaseAfter');
					} else if (num == 6) {
						var list = ['SE_huofu', 'SE_shuifu', 'SE_mufu', 'SE_tufu', 'SE_jinfu', 'SE_rifu', 'SE_yuefu'];
						var link = list.randomGets(6);
						player.addTempSkill(link, 'phaseAfter');
					} else {
						player.addTempSkill('SE_huofu', 'phaseAfter');
						player.addTempSkill('SE_shuifu', 'phaseAfter');
						player.addTempSkill('SE_mufu', 'phaseAfter');
						player.addTempSkill('SE_tufu', 'phaseAfter');
						player.addTempSkill('SE_jinfu', 'phaseAfter');
						player.addTempSkill('SE_rifu', 'phaseAfter');
						player.addTempSkill('SE_yuefu', 'phaseAfter');
						player.addTempSkill('SE_xianzhezhishi', 'phaseAfter');
					}
					('step 4');
					if (event.isMine() == false) {
						event.dialog = ui.create.dialog('魔女', event.cards);
					}
					('step 5');
					if (event.dialog) event.dialog.close();
					var dialog = ui.create.dialog('魔女', event.cards);
					player.chooseButton([0, 3], dialog, true).filterButton = function (button) {
						if (get.type(button.link) != event.choice) return false;
						return true;
					};
					('step 6');
					var cards2 = [];
					for (var i = 0; i < result.buttons.length; i++) {
						cards2.push(result.buttons[i].link);
						cards.remove(result.buttons[i].link);
					}
					player.gain(cards2);
					if (cards2.length) player.$gain(cards2);
					if (Array.isArray(cards)) for (var i of cards) {
						ui.discardPile.appendChild(i);
					}
				},
				group: ['SE_qiyaomonv2', 'SE_qiyaomonv3', 'SE_qiyaomonv4', 'SE_qiyaomonv5', 'SE_qiyaomonv6', 'SE_qiyaomonv7', 'SE_qiyaomonv8', 'SE_qiyaomonv9'],
			};
			lib.skill.SE_qiyao = {
				trigger: { global: 'damageBefore' },
				forced: true,
				filter(event, player) {
					return event.player != undefined && event.num > 0;
				},
				_priority: Infinity,
				content() {
					'step 0';
					player.chooseControl('火', '雷', '毒', '无来源', ui.create.dialog('请选择一项', 'hidden')).ai = function (event, player) {
						var player = trigger.player;
						var equip2 = trigger.player.getEquips(2);
						if (player.hasSkillTag('nofire')) return '无来源';
						if (player.hasSkillTag('nothunder')) return '无来源';
						if (equip2 && equip2.name == 'tengjia') return '火';
						return '无来源';
					};
					('step 1');
					if (result.control == '火') {
						trigger.nature = 'fire';
					} else if (result.control == '雷') {
						trigger.nature = 'thunder';
					} else if (result.control == '毒') {
						trigger.nature = 'poison';
					} else {
						trigger.untrigger();
						trigger.finish();
						var ex = 0;
						if (trigger.card && trigger.card.name == 'sha') {
							if (player.skills.includes('jiu')) ex++;
							if (player.skills.includes('luoyi2')) ex++;
							if (player.skills.includes('reluoyi2')) ex++;
						}
						trigger.player.loseHp(trigger.num + ex);
					}
				},
			};
			lib.skill.SE_huofu = {
				enable: 'chooseToUse',
				usable: 1,
				filterCard(card, player) {
					return get.color(card) == 'red' && (get.type(card) == 'trick' || get.type(card) == 'delay');
				},
				position: 'h',
				viewAs: { name: 'liuxinghuoyu', nature: 'fire' },
				prompt: '将一张红色锦囊牌当流星火羽使用',
				check(card) {
					return 8 - get.value(card);
				},
			};
			lib.skill.SE_shuifu = {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				content() {
					player.chooseToDiscard(true);
					if (target.hp < target.maxHp) {
						target.recover();
					} else {
						target.draw(2);
					}
				},
				ai: {
					expose: 0.4,
					order: 8,
					result: {
						target(player, target) {
							return ai.get.recoverEffect(player, target);
						},
					},
				},
			};
			lib.skill.SE_mufu = {
				trigger: { source: 'damageBegin' },
				forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				content() {
					trigger.num++;
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + 1;
					},
				},
			};
			lib.skill.SE_tufu = {
				enable: 'phaseUse',
				usable: 1,
				prompt: '请选择1名角色',
				filterTarget: true,
				content() {
					'step 0';
					event.cards = get.cards(3);
					if (event.isMine() == false) {
						event.dialog = ui.create.dialog('土符', event.cards);
					}
					('step 1');
					if (event.dialog) event.dialog.close();
					var dialog = ui.create.dialog('土符', event.cards);
					target.chooseButton([0, 3], dialog, true).filterButton = function (button) {
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							if (button.link.number == ui.selected.buttons[i].link.number) return false;
						}
						return true;
					};
					('step 2');
					var cards2 = [];
					for (var i = 0; i < result.buttons.length; i++) {
						cards2.push(result.buttons[i].link);
						cards.remove(result.buttons[i].link);
					}
					target.gain(cards2);
					if (cards2.length) target.$gain(cards2);
					if (Array.isArray(cards)) for (var i of cards) {
						ui.discardPile.appendChild(i);
					}
				},
				ai: {
					expose: 0.4,
					order: 6,
					result: {
						target(player, target) {
							if (target.countCards('h') >= 2) return 0;
							return ai.get.recoverEffect(player, target);
						},
					},
				},
			};
			lib.skill.SE_jinfu = {
				trigger: { player: 'phaseUseBegin' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(true, '选择1名目标令其流失1点体力', function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return -get.attitude(player, target);
					};
					('step 1');
					if (result.targets?.length) {
						event.target = result.targets[0];
						event.target.loseHp();
					}
				},
			};
			lib.skill.SE_rifu = {
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player) {
					return get.color(card) == 'red';
				},
				selectCard: [1, Infinity],
				selectTarget() {
					var num = ui.selected.cards.length;
					if (ui.selected.cards.length == 1) return [1, 1];
					if (ui.selected.cards.length > 1) return [1, num];
				},
				position: 'he',
				filterTarget(card, player, target) {
					return player != target;
				},
				check(card) {
					return 7 - get.value(card);
				},
				content() {
					'step 0';
					target.damage('fire');
					('step 1');
					player.recover();
				},
				ai: {
					expose: 0.4,
					order: 7,
					result: {
						target(player, target) {
							return get.damageEffect(player, target);
						},
					},
				},
			};
			lib.skill.SE_yuefu3 = {
				init(player) {
					player.storage['SE_yuefu3'] = 0;
				},
				intro: {
					content: 'mark',
				},
				marktext: '月',
				mark: true,
			};
			lib.skill.SE_yuefu = {
				trigger: { player: ['useCard', 'respondAfter'] },
				forced: true,
				marktext: '月',
				filter(event, player) {
					return get.color(event.card) == 'black';
				},
				content() {
					'step 0';
					player.judge(function (card) {
						if (card.suit == 'spade') return 1;
						return 0;
					});
					('step 1');
					if (result.card.suit == 'spade') {
						for (var i of game.players) {
							if (i == player) continue;
							if (!i.skills.includes('SE_yuefu3')) {
								i.addSkill('SE_yuefu3');
							}
							i.storage['SE_yuefu3']++;
							i.markSkill('SE_yuefu3');
						}
					}
				},
				group: ['SE_yuefu2'],
			};
			lib.skill.SE_yuefu2 = {
				trigger: { player: 'damageBefore' },
				filter(event, player) {
					return event.source && event.source.storage['SE_yuefu3'] > 0;
				},
				forced: true,
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					trigger.source.storage['SE_yuefu3']--;
					if (trigger.source.storage['SE_yuefu3'] <= 0) {
						trigger.source.unmarkSkill('SE_yuefu3');
						trigger.source.removeSkill('SE_yuefu3');
					}
				},
				ai: {
					nodamage: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage') && target.storage['SE_yuefu3']) return [0, 0, 0, 0];
						},
					},
				},
			};
			lib.skill.SE_shuihuofu = {
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player) {
					var suit = card.suit;
					if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
						if (i.suit == suit) return false;
					}
					return true;
				},
				selectCard: [2, Infinity],
				selectTarget() {
					var num = ui.selected.cards.length;
					if (ui.selected.cards.length >= 4) return [1, num];
				},
				position: 'he',
				filterTarget(card, player, target) {
					var num = ui.selected.cards.length;
					return player != target && target.countCards('he') >= num;
				},
				check(card) {
					if (_status.event.player.hp == _status.event.player.maxHp) {
						return 10 - get.value(card);
					}
					return 7 - get.value(card);
				},
				content() {
					var num = cards.length;
					player.gainPlayerCard(target, 'he', num, true);
				},
				ai: {
					expose: 0.4,
					order: 9,
					result: {
						target(player, target) {
							return get.attitude(player, target);
						},
					},
				},
			};
			lib.skill.SE_huotufu = {
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player) {
					return get.color(card) == 'red' && (get.type(card) == 'trick' || get.type(card) == 'delay');
				},
				selectCard: 2,
				position: 'he',
				filterTarget: true,
				prompt: '请选择1名角色',
				check(card) {
					if (_status.event.player.hp == _status.event.player.maxHp) {
						return 10 - get.value(card);
					}
					return 8 - get.value(card);
				},
				content() {
					'step 0';
					var list = [];
					var suit = ['heart', 'diamond', 'club', 'spade'].randomGet();
					var number = Math.floor(Math.random() * 13) + 1;
					for (var i in lib.card) {
						if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
						if (get.value({ name: i }) >= 10) continue;
						if (i != 'list' && (lib.card[i].type == 'trick' || lib.card[i].type == 'delay')) list.push([suit, number, i]);
					}
					var dialog = ui.create.dialog([list, 'vcard']);
					target.chooseButton(dialog, 4, true, function (button) {
						return get.value({ name: button.link[4] }, target);
					});
					('step 1');
					var cards = [ui.create.card(), ui.create.card(), ui.create.card(), ui.create.card()];
					cards[0].init(result.buttons[0].link);
					cards[1].init(result.buttons[1].link);
					cards[2].init(result.buttons[2].link);
					cards[3].init(result.buttons[3].link);
					target.gain(cards);
					target.$gain2(cards);
					game.log(target, '获得了', cards);
				},
				ai: {
					expose: 0.4,
					order: 11,
					result: {
						target(player, target) {
							return ai.get.recoverEffect(player, target);
						},
					},
				},
			};
			lib.skill.SE_muhuofu = {
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player) {
					return get.color(card) == 'red';
				},
				selectCard: 2,
				position: 'he',
				prepare(cards, player, targets) {
					player.line(targets, 'fire');
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				selectTarget: -1,
				check(card) {
					if (_status.event.player.hp == _status.event.player.maxHp) {
						return 8 - get.value(card);
					}
					return 5 - get.value(card);
				},
				content() {
					player.addTempSkill('unequip', 'useCardAfter');
					player.useCard({ name: 'sha', nature: 'fire' }, target);
				},
				ai: {
					order() {
						if (_status.event.player.countCards('h', 'sha') <= 1) return 10;
						return lib.card.sha.ai.order + 1;
					},
					result: {
						target(player, target) {
							return ai.get.effect(target, { name: 'sha', nature: 'fire' }, player, target);
						},
					},
				},
			};
			lib.skill.SE_huojinfu = {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target;
				},
				prompt: '请选择1名角色',
				content() {
					target.addSkill('SE_huojinfu2');
					target.addSkill('SE_huojinfu3');
				},
				ai: {
					expose: 0.2,
					order: 10.5,
					result: {
						target(player, target) {
							if (target.hp <= 2) return 0;
							return get.attitude(player, target);
						},
					},
				},
			};
			lib.skill.SE_huojinfu2 = {
				trigger: { player: 'phaseBegin' },
				forced: true,
				filter(event, player) {
					return player.hp > 2;
				},
				content() {
					player.loseHp();
				},
			};
			lib.skill.SE_huojinfu3 = {
				trigger: { player: 'phaseBegin', global: 'useCardAfter' },
				forced: true,
				popup: false,
				filter(event, player) {
					return player.hp <= 2;
				},
				content() {
					player.removeSkill('SE_huojinfu2');
					player.removeSkill('SE_huojinfu3');
				},
			};
			lib.skill.SE_shuimuhu = {
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player) {
					return get.color(card) == 'black';
				},
				prompt: '选择至多2名角色',
				selectCard: [1, Infinity],
				selectTarget: [1, 2],
				position: 'he',
				filterTarget(card, player, target) {
					if (target.skills.includes('SE_shuimuhu2')) return false;
					return true;
				},
				content() {
					target.addSkill('SE_shuimuhu3');
					target.addSkill('SE_shuimuhu2');
					var num = cards.length;
					target.storage['SE_shuimuhu3'] += num;
					target.markSkill('SE_shuimuhu3');
				},
				ai: {
					expose: 0.5,
					order() {
						if (_status.event.player.hp == 1) return 10;
						return 4;
					},
					result: {
						target(player, target) {
							return ai.get.recoverEffect(player, target);
						},
					},
				},
			};
			lib.skill.SE_shuimuhu2 = {
				trigger: { player: 'damageBegin' },
				filter(event, player) {
					return player.storage['SE_shuimuhu3'] > 0;
				},
				forced: true,
				content() {
					'step 0';
					trigger.num--;
					player.recover();
					('step 1');
					player.storage['SE_shuimuhu3']--;
					if (player.storage['SE_shuimuhu3'] <= 0) {
						player.unmarkSkill('SE_shuimuhu3');
						player.removeSkill('SE_shuimuhu3');
						player.removeSkill('SE_shuimuhu2');
					}
				},
				ai: {
					nodamage: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage') && target.storage['SE_shuimuhu3']) return [0, 1, 0, 0];
						},
					},
				},
			};
			lib.skill.SE_shuimuhu3 = {
				init(player) {
					player.storage['SE_shuimuhu3'] = 0;
				},
				intro: {
					content: 'mark',
				},
				marktext: '护',
				mark: true,
			};
			lib.skill.SE_jinshuifu2 = {
				trigger: { player: 'phaseBegin' },
				filter(event, player) {
					return player.storage['SE_jinshuifu3'] > 0;
				},
				forced: true,
				content() {
					if (player.maxHp <= 3) {
						var num = player.storage['SE_jinshuifu3'];
						player.chooseToDiscard(num, 'he', true);
						player.storage['SE_jinshuifu3'] = 0;
						player.unmarkSkill('SE_jinshuifu3');
						player.removeSkill('SE_jinshuifu3');
						player.removeSkill('SE_jinshuifu2');
					} else {
						player.storage['SE_jinshuifu3']--;
						player.loseMaxHp();
						if (player.storage['SE_jinshuifu3'] <= 0) {
							player.unmarkSkill('SE_jinshuifu3');
							player.removeSkill('SE_jinshuifu3');
							player.removeSkill('SE_jinshuifu2');
						}
					}
				},
			};
			lib.skill.SE_jinshuifu3 = {
				init(player) {
					player.storage['SE_jinshuifu3'] = 0;
				},
				intro: {
					content: 'mark',
				},
				marktext: '毒',
				mark: true,
			};
			lib.skill.SE_jinshuifu = {
				enable: 'phaseUse',
				usable: 1,
				prompt: '选择至多2名角色',
				filterCard(card, player) {
					return get.color(card) == 'red';
				},
				selectCard: [1, Infinity],
				selectTarget: [1, 2],
				position: 'he',
				filterTarget(card, player, target) {
					if (player == target) return false;
					if (target.storage['SE_jinshuifu3'] > 0) return false;
					return true;
				},
				content() {
					target.addSkill('SE_jinshuifu3');
					target.addSkill('SE_jinshuifu2');
					var num = cards.length;
					target.storage['SE_jinshuifu3'] += num;
					target.markSkill('SE_jinshuifu3');
				},
				ai: {
					expose: 0.5,
					order: 9.5,
					result: {
						target(player, target) {
							return get.attitude(player, target);
						},
					},
				},
			};
			lib.skill.SE_xianzhezhishi = {
				enable: 'phaseUse',
				usable: 1,
				delay: 0,
				forced: true,
				init(player) {
					player.storage.SE_xianzhezhishi = [];
				},
				createDialog(player, onlylist) {
					var list = [];
					var skills = lib.character[player.storage.SE_xianzhezhishi][3];
					for (var j = 0; j < skills.length; j++) {
						if (!lib.skill[skills[j]].unique && lib.skill[skills[j]] && !player.skills.includes(skills[j])) {
							list.push(skills[j]);
						}
					}
					if (onlylist) return list;
					var dialog = ui.create.dialog();
					dialog.add('选择获得一项技能');
					_status.event.list = list;
					var clickItem = function () {
						_status.event._result = this.link;
						game.resume();
					};
					for (var i = 0; i < list.length; i++) {
						if (lib.translate[list[i] + '_info']) {
							var translation = get.translation(list[i])[0] + get.translation(list[i])[1];
							var item = dialog.add('<div class="popup" 	style="width:50%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
							item.firstChild.addEventListener('click', clickItem);
							item.firstChild.link = list[i];
						}
					}
					dialog.add(ui.create.div('.placeholder'));
					return dialog;
				},
				content() {
					'step 0';
					player.chooseButton(ui.create.characterDialog(), true);
					('step 1');
					if (result.bool) {
						player.storage.SE_xianzhezhishi = [];
						player.storage.SE_xianzhezhishi = player.storage.SE_xianzhezhishi.concat(result.buttons[0].link);
						event.goto(2);
					}
					('step 2');
					event.skillai = function (list) {
						return list.randomGet();
					};
					if (event.isMine()) {
						event.dialog = lib.skill.SE_xianzhezhishi.createDialog(player);
						event.switchToAuto = function () {
							event._result = event.skillai(event.list);
							game.resume();
						};
						if (_status.event.list.length != 0) {
							game.pause();
						} else {
							if (event.dialog) {
								event.dialog.close();
							}
							player.getStat('skill').SE_xianzhezhishi--;
							alert('该角色没有可供选择的技能或者不满足条件');
							event.finish();
						}
					} else {
						event._result = event.skillai(lib.skill.SE_xianzhezhishi.createDialog(player, true));
					}
					('step 3');
					if (event.dialog) {
						event.dialog.close();
					}
					var link = result;
					player.popup(link);
					player.addSkill(link);
				},
			};
			lib.skill.SE_riyuefu = {
				trigger: { player: ['useCardAfter', 'respond'] },
				forced: true,
				filter(event, player) {
					return get.color(event.card) == 'red';
				},
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						if (i.countCards('h') <= 0) continue;
						i.damage('fire');
					}
				},
				group: ['SE_riyuefu2'],
			};
			lib.skill.SE_riyuefu2 = {
				trigger: { player: ['useCardAfter', 'respond'] },
				forced: true,
				filter(event, player) {
					return get.color(event.card) == 'black';
				},
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						if (i.countCards('he') <= 0) continue;
						player.gainPlayerCard(i, 'he', true);
					}
				},
			};
			//准备阶段开始时,你需失去所有<百变>和<库洛>以外的技能;若你的体力上限大于6,将你的体力上限设定为6;若你的体力上限小于3,将你的体力上限设定为3.你可以翻开牌堆顶X张牌(X为你失去的你的体力值*2),根据翻开的牌获得技能,获得这些手牌
			lib.skill.SE_baibian = {
				mod: {
					maxHandcard(player, num) {
						return 52;
					},
				},
				trigger: { player: 'phaseUseBegin' },
				forced: true,
				popup: false,
				_priority: 100,
				intro: {
					mark(dialog, content, player) {
						dialog.add('<div class="text center">技能列表</div>');
						var str = '♠️️:A,无双、2,烈弓、3,再起、4,奸雄、5、急智、6、奇袭、7、铁骑、8、遗计、9,咆哮、10、洛神、J,青囊、Q、绝境、K、八阵<br /><br />';
						str += '♥️️:A、火计、2、空城、3、天香、4、流离、5、节命、6、放逐、7、天义、8、英魂、9、帷幕、10、挑衅、J、享乐、Q、激昂、K、悲歌<br /><br />';
						str += '♣️️:A,龙魂,2,连破,3,枭姬,4,离间,5,据守,6,断粮,7,智迟,8,甘露,9,疠火,10,弓骑,J,当先,Q,智愚,K,称象<br /><br />';
						str += '♦️️:A,求援,2,御策,3,缓释,4,血祭,5,离魂,6,漫卷,7,伤逝,8,乐学,9,变天,10,裸衣,J,天狱,Q,归汉,K,睿智<br /><br />';
						dialog.add(str);
					},
				},
				mark: true,
				content() {
					for (var i of player.skills) {
						if ('SE_baibian' != i) {
							player.removeSkill(i);
						}
					}
					if (player.maxHp > 6) {
						player.maxHp = 6;
						player.update();
					}
					if (player.maxHp < 3) {
						player.maxHp = 3;
						player.update();
					}
				},
				group: ['SE_baibian2'],
			};
			lib.skill.SE_baibian2 = {
				audio: 9,
				trigger: { player: 'phaseUseBegin' },
				filter(event, player) {
					return player.hp < player.maxHp;
				},
				content() {
					'step 0';
					event.cards = get.cards((player.maxHp - player.hp) * 2);
					player.showCards(event.cards);
					('step 1');
					var cards = [];
					if (Array.isArray(event.cards)) for (var i of event.cards) {
						switch (i.suit) {
							case 'heart':
								if (i.number == 1) player.addSkill('huoji');
								if (i.number == 2) player.addSkill('kongcheng');
								if (i.number == 3) player.addSkill('tianxiang');
								if (i.number == 4) player.addSkill('liuli');
								if (i.number == 5) player.addSkill('jieming');
								if (i.number == 6) player.addSkill('fangzhu');
								if (i.number == 7) player.addSkill('tianyi');
								if (i.number == 8) player.addSkill('yinghun');
								if (i.number == 9) player.addSkill('weimu');
								if (i.number == 10) player.addSkill('tiaoxin');
								if (i.number == 11) player.addSkill('xiangle');
								if (i.number == 12) player.addSkill('jiang');
								if (i.number == 13) player.addSkill('beige');
								break;
							case 'spade':
								if (i.number == 1) player.addSkill('wushuang');
								if (i.number == 2) player.addSkill('liegong');
								if (i.number == 3) player.addSkill('zaiqi');
								if (i.number == 4) player.addSkill('jianxiong');
								if (i.number == 5) player.addSkill('jizhi');
								if (i.number == 6) player.addSkill('qixi');
								if (i.number == 7) player.addSkill('tieji');
								if (i.number == 8) player.addSkill('yiji');
								if (i.number == 9) player.addSkill('paoxiao');
								if (i.number == 10) player.addSkill('luoshen');
								if (i.number == 11) player.addSkill('qingnang');
								if (i.number == 12) player.addSkill('juejing');
								if (i.number == 13) player.addSkill('bazhen');
								break;
							case 'club':
								if (i.number == 1) player.addSkill('longhun');
								if (i.number == 2) player.addSkill('lianpo');
								if (i.number == 3) player.addSkill('xiaoji');
								if (i.number == 4) player.addSkill('lijian');
								if (i.number == 5) player.addSkill('jushou');
								if (i.number == 6) player.addSkill('duanliang');
								if (i.number == 7) player.addSkill('zhichi');
								if (i.number == 8) player.addSkill('ganlu');
								if (i.number == 9) player.addSkill('lihuo');
								if (i.number == 10) player.addSkill('gongji');
								if (i.number == 11) player.addSkill('dangxian');
								if (i.number == 12) player.addSkill('zhiyu');
								if (i.number == 13) player.addSkill('chengxiang');
								break;
							case 'diamond':
								if (i.number == 1) player.addSkill('qiuyuan');
								if (i.number == 2) player.addSkill('yuce');
								if (i.number == 3) player.addSkill('huanshi');
								if (i.number == 4) player.addSkill('xueji');
								if (i.number == 5) player.addSkill('lihun');
								if (i.number == 6) player.addSkill('manjuan');
								if (i.number == 7) player.addSkill('shangshi');
								if (i.number == 8) player.addSkill('lexue');
								if (i.number == 9) player.addSkill('boss_biantian');
								if (i.number == 10) player.addSkill('luoyi');
								if (i.number == 11) player.addSkill('boss_tianyu');
								if (i.number == 12) player.addSkill('guihan');
								if (i.number == 13) player.addSkill('boss_ruizhi');
								break;
						}
						cards.push(i);
					}
					player.gain(cards, 'gain2');
				},
				ai: {
					maixie: true,
					threaten(player, target) {
						if (target.hp == 1) return 5;
						return 0.5;
					},
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) {
								if (target.hp == target.maxHp) {
									return [0, 1];
								}
								return 0.7;
							}
						},
					},
				},
			};
			lib.skill.SE_xuanlan = {
				trigger: { player: 'phaseDiscardBefore' },
				_priority: 10,
				forced: true,
				filter(event, player) {
					return player.hp == player.maxHp;
				},
				content() {
					trigger.untrigger();
					trigger.finish();
				},
			};
			lib.skill.SE_caiyu = {
				trigger: { global: 'phaseEnd' },
				_priority: 10,
				filter(event, player) {
					if (player.storage.SE_huaxiang && player.storage.SE_huaxiang.length >= 4) return true;
					return false;
				},
				content() {
					'step 0';
					var cards = [];
					for (var i = 0; i < player.storage.SE_huaxiang.length; i++) {
						cards.push(player.storage.SE_huaxiang[i]);
					}
					player.gain(cards);
					player.discard(cards);
					player.storage.SE_huaxiang = [];
					player.unmarkSkill('SE_huaxiang');
					player.draw(2);
					('step 1');
					player.chooseBool('是否选择失去1点体力上限？').ai = function () {
						return true;
					};
					('step 2');
					if (result.bool) {
						player.loseMaxHp(true);
					} else {
						event.finish();
					}
				},
			};
			lib.skill.SE_huaxiang = {
				init(player) {
					player.storage.SE_huaxiang = [];
				},
				marktext: '虹',
				intro: {
					content: 'cards',
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				position: 'h',
				filter(event, player) {
					if (player.storage.SE_huaxiang && player.storage.SE_huaxiang.length >= 4) return false;
					return true;
				},
				check(card, event) {
					return 7 - get.value(card);
				},
				filterCard(card, player) {
					for (var i = 0; i < player.storage.SE_huaxiang.length; i++) {
						if (card.suit == player.storage.SE_huaxiang[i].suit) return false;
					}
					return true;
				},
				prompt: '选择1张花色不同于武将牌上的手牌置于你的武将牌上',
				viewAs: { name: 'sha' },
				ai: {
					respondSha: true,
				},
				group: ['SE_huaxiang2', 'SE_huaxiang3', 'SE_huaxiang4', 'SE_huaxiang5', 'SE_huaxiang6', 'SE_huaxiang7'],
			};
			lib.skill.SE_huaxiang2 = {
				enable: ['chooseToUse', 'chooseToRespond'],
				position: 'h',
				filter(event, player) {
					if (player.storage.SE_huaxiang && player.storage.SE_huaxiang.length >= 4) return false;
					return true;
				},
				check(card, event) {
					return 7 - get.value(card);
				},
				filterCard(card, player) {
					for (var i = 0; i < player.storage.SE_huaxiang.length; i++) {
						if (card.suit == player.storage.SE_huaxiang[i].suit) return false;
					}
					return true;
				},
				prompt: '选择1张花色不同于武将牌上的手牌置于你的武将牌上',
				viewAs: { name: 'sha', nature: 'fire' },
				ai: {
					respondSha: true,
				},
			};
			lib.skill.SE_huaxiang3 = {
				enable: ['chooseToUse', 'chooseToRespond'],
				position: 'h',
				filter(event, player) {
					if (player.storage.SE_huaxiang && player.storage.SE_huaxiang.length >= 4) return false;
					return true;
				},
				check(card, event) {
					return 7 - get.value(card);
				},
				filterCard(card, player) {
					for (var i = 0; i < player.storage.SE_huaxiang.length; i++) {
						if (card.suit == player.storage.SE_huaxiang[i].suit) return false;
					}
					return true;
				},
				prompt: '选择1张花色不同于武将牌上的手牌置于你的武将牌上',
				viewAs: { name: 'sha', nature: 'thunder' },
				ai: {
					respondSha: true,
				},
			};
			lib.skill.SE_huaxiang4 = {
				enable: ['chooseToUse', 'chooseToRespond'],
				position: 'h',
				filter(event, player) {
					if (player.storage.SE_huaxiang && player.storage.SE_huaxiang.length >= 4) return false;
					if (player.maxHp > 1) return false;
					return true;
				},
				check(card, event) {
					return 7 - get.value(card);
				},
				filterCard(card, player) {
					for (var i = 0; i < player.storage.SE_huaxiang.length; i++) {
						if (card.suit == player.storage.SE_huaxiang[i].suit) return false;
					}
					return true;
				},
				prompt: '选择1张花色不同于武将牌上的手牌置于你的武将牌上',
				viewAs: { name: 'wuxie' },
			};
			lib.skill.SE_huaxiang5 = {
				enable: ['chooseToUse', 'chooseToRespond'],
				position: 'h',
				filter(event, player) {
					if (player.storage.SE_huaxiang && player.storage.SE_huaxiang.length >= 4) return false;
					if (player.maxHp > 2) return false;
					return true;
				},
				check(card, event) {
					return 9 - get.value(card);
				},
				filterCard(card, player) {
					for (var i = 0; i < player.storage.SE_huaxiang.length; i++) {
						if (card.suit == player.storage.SE_huaxiang[i].suit) return false;
					}
					return true;
				},
				prompt: '选择1张花色不同于武将牌上的手牌置于你的武将牌上',
				viewAs: { name: 'tao' },
				ai: {
					save: true,
				},
			};
			lib.skill.SE_huaxiang6 = {
				enable: ['chooseToUse', 'chooseToRespond'],
				position: 'h',
				filter(event, player) {
					if (player.storage.SE_huaxiang && player.storage.SE_huaxiang.length >= 4) return false;
					if (player.maxHp > 3) return false;
					return true;
				},
				check(card, event) {
					return 8 - get.value(card);
				},
				filterCard(card, player) {
					for (var i = 0; i < player.storage.SE_huaxiang.length; i++) {
						if (card.suit == player.storage.SE_huaxiang[i].suit) return false;
					}
					return true;
				},
				prompt: '选择1张花色不同于武将牌上的手牌置于你的武将牌上',
				viewAs: { name: 'shan' },
				ai: {
					respondShan: true,
				},
			};
			lib.skill.SE_huaxiang7 = {
				trigger: { player: ['useCardToBefore', 'respond'] },
				forced: true,
				popup: false,
				_priority: Infinity,
				filter(event, player) {
					if (event.skill == 'SE_huaxiang' || event.skill == 'SE_huaxiang2' || event.skill == 'SE_huaxiang3' || event.skill == 'SE_huaxiang4' || event.skill == 'SE_huaxiang5' || event.skill == 'SE_huaxiang6') return true;
					return false;
				},
				content() {
					var cards = [];
					if (trigger.cards && trigger.cards.length) {
						if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
							if (get.position(i) == 'd') {
								cards.push(i);
								trigger.cards.remove(i);
							}
						}
					}
					player.gain(cards);
					player.lose(cards, ui.special)._triggered = null;
					player.$gain2(cards);
					player.markSkill('SE_huaxiang');
					player.storage.SE_huaxiang = player.storage.SE_huaxiang.concat(cards);
				},
			};
			lib.skill.SE_chaidao = {
				audio: 2,
				trigger: { player: ['phaseBegin', 'phaseEnd'] },
				forced: true,
				filter(event, player) {
					if (!player.countCards('hej')) return false;
					return true;
				},
				content() {
					'step 0';
					player.chooseToDiscard('hej', true);
					('step 1');
					event.target = game.players.randomGet(player);
					('step 2');
					event.target.showHandcards();
					('step 3');
					var cards = event.targe.getCards('h', 'sha');
					if (cards.length) {
						player.gain(cards);
						event.target.$give(cards, player);
						event.target.chooseToDiscard('he', true);
					} else {
						event.target.damage('fire');
					}
				},
			};
			lib.skill.SE_kuangbao = {
				audio: 2,
				trigger: { source: 'damageEnd' },
				forced: true,
				content() {
					'step 0';
					player.judge(function (card) {
						if (card.suit == 'heart') return 1;
						if (card.suit == 'spade') return 2.5;
						if (card.suit == 'club') return 2;
						return 3;
					});
					('step 1');
					var num = trigger.player.getCards('h');
					var cards0 = trigger.player.getCards('h', 'shan');
					var cards1 = trigger.player.getCards('h', 'sha');
					switch (result.card.suit) {
						case 'heart':
							trigger.player.damage('fire');
							break;
						case 'spade':
							trigger.player.discard(cards0);
							player.recover();
							break;
						case 'club':
							trigger.player.discard(cards1);
							trigger.player.loseHp();
							break;
						case 'diamond':
							trigger.player.turnOver();
							player.gainMaxHp();
							break;
					}
				},
			};
			lib.skill.SE_nixing = {
				audio: 2,
				trigger: { player: 'damageEnd' },
				forced: true,
				_priority: 100,
				filter(event, player) {
					return player.hp > 0;
				},
				content() {
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
					player.phase('nodelay');
				},
			};
			lib.skill.SE_guishen = {
				audio: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filterCard(card, player) {
					return card.suit == 'diamond';
				},
				position: 'he',
				viewAs: { name: 'sha', nature: 'fire' },
				prompt: '将一张♦️️牌当火杀使用',
				ai: {
					respondSha: true,
				},
				group: ['SE_guishen2', 'SE_guishen3', 'SE_guishen4'],
			};
			lib.skill.SE_guishen2 = {
				audio: true,
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard(card, player) {
					return card.suit == 'club';
				},
				position: 'he',
				viewAs: { name: 'shan' },
				prompt: '将一张♣️️牌当闪打出',
				ai: {
					respondShan: true,
				},
			};
			lib.skill.SE_guishen3 = {
				audio: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filterCard(card, player) {
					return card.suit == 'spade';
				},
				position: 'he',
				viewAs: { name: 'wuxie' },
				prompt: '将一张♠️️牌当无懈可击使用',
			};
			lib.skill.SE_guishen4 = {
				audio: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filterCard(card, player) {
					return card.suit == 'heart';
				},
				position: 'he',
				viewAs: { name: 'tao' },
				prompt: '将一张♥️️当桃使用',
				ai: {
					save: true,
				},
			};
			lib.skill.SE_shenzi = {
				audio: 2,
				trigger: { global: 'judge' },
				forced: true,
				filter(event, player) {
					if (event.card) return true;
					for (var i of game.players) {
						if (i.countCards('hej')) return true;
					}
					return false;
				},
				content() {
					'step 0';
					var players = [];
					for (var i of game.players) {
						if (i.countCards('hej')) {
							players.push(i);
						}
					}
					if (!players.length) {
						event.finish();
						return;
					}
					event.dialog = ui.create.dialog('hidden');
					event.dialog.add(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【神姿】？');
					event.position = 'hej';
					var position = event.position;
					for (var i = 0; i < position.length; i++) {
						for (var j = 0; j < players.length; j++) {
							if (position[i] == 'h' && players[j].countCards('h')) {
								event.dialog.add(get.translation(players[j]) + '的手牌');
								var hs = players[j].getCards('h');
								hs.randomSort();
								event.dialog.add(hs);
							}
							if (position[i] == 'e' && players[j].countCards('e')) {
								event.dialog.add(get.translation(players[j]) + '的装备牌');
								event.dialog.add(players[j].getCards('e'));
							}
							if (position[i] == 'j' && players[j].countCards('j')) {
								event.dialog.add(get.translation(players[j]) + '的判定牌');
								event.dialog.add(players[j].getCards('j'));
							}
						}
					}
					var dialog = event.dialog;
					player.chooseButton(dialog, function (button) {
						var card = button.link;
						var trigger = _status.event.parent._trigger;
						var player = _status.event.player;
						var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
						var attitude = get.attitude(player, trigger.player);
						return result * attitude;
					});
					('step 1');
					if (result.bool) {
						event.card = result.buttons[0].link;
						if (get.owner(event.card)) get.owner(event.card).discard(event.card);
						else trigger.player.$throw(event.card, 1000);
						if (event.card.clone) {
							event.card.clone.classList.add('thrownhighlight');
							game.addVideo('highlightnode', player, get.cardInfo(event.card));
						}
					}
					('step 2');
					if (event.card) {
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						game.log(player, '获得了', trigger.player.judging[0]);
						trigger.player.judging[0] = event.card;
						trigger.position.appendChild(event.card);
						game.log(trigger.player, '的判定牌改为', event.card);
						event.card.expired = true;
					}
				},
			};
			lib.skill.SE_fanjianziran = {
				audio: 2,
				trigger: { player: ['useCardAfter', 'respond'] },
				_priority: 10,
				forced: true,
				filter(event, player) {
					return player.countCards('h');
				},
				content() {
					'step 0';
					player.chooseTarget(true, '请选择1名角色令其判定', function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return get.damageEffect(target, player, player, 'thunder') - 1;
					};
					('step 1');
					if (result.targets?.length) {
						event.target = result.targets[0];
						event.target.judge(function (card) {
							if (get.color(card) == 'red' && player.countCards('h') >= event.target.countCards('h')) {
								return 1;
							} else {
								return -1;
							}
							if (get.color(card) == 'black') return -1.5;
						});
					} else {
						event.finish();
					}
					('step 2');
					if (result.color == 'red') {
						var num = player.countCards('h') - event.target.countCards('h');
						if (num > 0) {
							event.target.draw(num);
						} else if (num < 0) {
							event.target.chooseToDiscard(-num, true);
						}
					} else {
						if (result.color == 'black') {
							event.target.damage('thunder');
						}
					}
				},
			};
			lib.skill.SE_sishengyimmeng = {
				audio: 2,
				trigger: { global: 'dying' },
				_priority: 55,
				filter(event, player) {
					return event.player.hp <= 0;
				},
				content() {
					'step 0';
					trigger.player.judge(function (card) {
						if (get.color(card) == 'black') return -10;
						if (get.color(card) == 'red') return 5;
					});
					('step 1');
					if (result.color == 'black') {
						trigger.player.die();
					} else {
						if (result.color == 'red') {
							trigger.player.recover();
						}
					}
					('step 2');
					if (!trigger.player.isAlive()) {
						trigger.untrigger(true);
						trigger.finish();
					}
				},
			};
			lib.skill.SE_yaoshen = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target && target.countCards('he') > 0 && player.countCards('he') >= target.countCards('he');
				},
				prompt: '请选择1名角色',
				content() {
					'step 0';
					var num = target.countCards('he');
					player.chooseToDiscard(num, true);
					('step 1');
					player.gain(target.getCards('he'));
					target.$give(target.getCards('he'), player);
					var num = target.countCards('he');
					target.damage('thunder', num, true);
				},
				ai: {
					order: 9.5,
					result: {
						target(player, target) {
							return get.damageEffect(target, player);
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_jixian = {
				audio: 2,
				trigger: { global: 'gameDrawAfter' },
				forced: true,
				content() {
					'step 0';
					player.damage('thunder');
					('step 1');
					event.target = game.players.randomGet(player);
					('step 2');
					var num = event.target.getCards('h');
					player.gain(event.target.getCards('h'));
					event.target.$give(event.target.getCards('h'), player);
				},
			};
			lib.skill.SE_linglei = {
				audio: 2,
				trigger: { global: 'phaseEnd' },
				filter(event, player) {
					return event.player != player && event.player.hp > 2;
				},
				check(event, player) {
					var att = get.attitude(player, event.player);
					if (lib.config.mode == 'boss') return true;
					if (lib.config.mode == 'identity') {
						if (player.identity == 'zhu' && (event.player.identity == 'fan' || event.player.identity == 'nei')) return true;
						if (player.identity == 'fan' && (event.player.identity == 'zhu' || event.player.identity == 'zhong' || event.player.identity == 'nei')) return true;
						if (player.identity == 'nei') {
							if (game.players.length > 2) {
								if (event.player.identity == 'fan' || event.player.identity == 'zhong') return true;
							}
							if (game.players.length == 2) {
								return true;
							}
						}
					} else if (lib.config.mode == 'guozhan') {
						if (event.player.identity == 'unknown') return false;
						if (event.player.identity != player.identity) return true;
					}
					return att < 2;
				},
				content() {
					'step 0';
					player.judge(function (card) {
						if (get.type(card) == 'basic') return 1;
						if (get.type(card) == 'delay') return 1.2;
						if (get.type(card) == 'equip') return -1;
						return 2;
					});
					('step 1');
					var num = player.countCards('he');
					if (get.type(result.card) == 'basic') {
						trigger.player.damage('thunder', 1);
						player.draw(2);
					}
					if (get.type(result.card) == 'delay') {
						trigger.player.damage('thunder', 2);
						player.draw(1);
					}
					if (get.type(result.card) == 'equip') {
						trigger.player.damage('thunder', 1);
						player.discard(player.getCards('he'));
					}
					if (get.type(result.card) == 'trick') {
						trigger.player.damage('thunder', num);
						player.recover();
						player.gainMaxHp();
					}
				},
			};
			lib.skill.SE_yaohuo = {
				audio: 2,
				trigger: { global: ['useCardAfter', 'respond'] },
				forced: true,
				filter(event, player) {
					return (get.type(event.card) == 'basic' || player.hp <= 2) && event.player != player && get.itemtype(event.card) == 'card';
				},
				content() {
					player.gain(trigger.card);
					player.$gain2(trigger.card);
				},
				ai: {
					threaten: 5,
				},
			};
			lib.skill.SE_lingyu = {
				trigger: { player: 'chooseToRespondBegin' },
				filter(event, player) {
					if (event.responded) return false;
					if (!event.filterCard || !event.filterCard({ name: 'shan' }, player)) return false;
					return true;
				},
				audio: 2,
				content() {
					'step 0';
					player.judge(function (card) {
						if (get.type(card) == 'basic') return 1;
						return 0;
					});
					('step 1');
					if (get.type(result.card) == 'basic') {
						trigger.untrigger();
						trigger.responded = true;
						trigger.result = { bool: true, card: { name: 'shan' } };
					}
				},
			};
			lib.skill.SE_shouren = {
				audio: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filterCard(card, player) {
					return get.color(card) == 'black';
				},
				position: 'he',
				viewAs: { name: 'sha', nature: 'thunder' },
				prompt: '将一张黑色牌当雷杀使用',
				ai: {
					respondSha: true,
				},
				group: ['SE_shouren2', 'SE_shouren3', 'SE_shouren4'],
			};
			lib.skill.SE_shouren2 = {
				audio: true,
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard(card, player) {
					return get.color(card) == 'red';
				},
				position: 'he',
				viewAs: { name: 'sha', nature: 'fire' },
				prompt: '将一张红色牌当火杀使用或打出',
				ai: {
					respondSha: true,
				},
			};
			lib.skill.SE_shouren3 = {
				trigger: { source: 'damageBegin' },
				filter(event, player) {
					if (event.nature == 'fire') return true;
				},
				forced: true,
				content() {
					trigger.num++;
				},
			};
			lib.skill.SE_shouren4 = {
				trigger: { player: 'shaBegin' },
				filter(event, player) {
					if (event.card.nature == 'thunder') return true;
				},
				forced: true,
				content() {
					trigger.directHit = true;
				},
			};
			lib.skill.SE_yinsu = {
				audio: true,
				trigger: { player: ['phaseBegin', 'phaseEnd'] },
				forced: true,
				content() {
					'step 0';
					player.addSkill('SE_yinsu2');
					player.chooseTarget('是否发动音速？', function (card, player, target) {
						if (player == target) return false;
						return player.canUse({ name: 'sha', nature: 'thunder' }, target);
					}).ai = function (target) {
						return ai.get.effect(target, { name: 'sha', nature: 'thunder' }, _status.event.player);
					};
					('step 1');
					if (result.bool) {
						player.addTempSkill('unequip', 'useCardAfter');
						player.useCard({ name: 'sha', nature: 'thunder' }, result.targets[0], false);
					}
					player.removeSkill('SE_yinsu2');
				},
			};
			lib.skill.SE_yinsu2 = {
				mod: {
					targetInRange() {
						return true;
					},
				},
			};
			lib.skill.SE_mushou = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				delay: 0,
				filter(event, player) {
					return game.dead.length;
				},
				forced: true,
				notarget: true,
				content() {
					'step 0';
					var list = [];
					for (var i = 0; i < game.dead.length; i++) {
						list.push(game.dead[i].name);
					}
					player.chooseButton(ui.create.dialog('选择1名角色复活', [list, 'character']), function (button) {
						for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
						return get.attitude(_status.event.player, game.dead[i]);
					});
					('step 1');
					if (result.bool) {
						for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
						var dead = game.dead[i];
						dead.revive(1);
						dead.hp = dead.maxHp;
						dead.update();
						dead.draw(2);
						player.removeSkill('SE_mushou');
						player.addSkill('SE_chaodu');
					} else {
						player.getStat('skill').SE_mushou--;
						event.finish();
					}
				},
			};
			lib.skill.SE_shoucang = {
				audio: 2,
				trigger: { global: 'dieBegin' },
				forced: true,
				_priority: -100,
				content() {
					'step 0';
					trigger.source = player;
					player.gainMaxHp();
					('step 1');
					var num = player.countCards('h');
					if (num > 0) {
						player.draw(num);
					}
				},
			};
			lib.skill.SE_shujucunchu = {
				audio: 4,
				trigger: { global: 'phaseAfter' },
				init(player) {
					player.storage.SE_shujucunchu = [];
				},
				filter(event, player) {
					if (event.player == player) return false;
					if ((player.countCards('h') && event.player.countCards('h')) || (player.countCards('e') && event.player.countCards('e')) || (player.countCards('j') && event.player.countCards('j'))) return true;
				},
				intro: {
					onunmark(content, player) {
						player.storage.SE_shujucunchu.length = 0;
					},
					mark(dialog, content, player) {
						dialog.add('<div class="text center">最近存储的牌</div>');
						var cards = [];
						for (var i = 0; i < content.length; i++) {
							cards.push(content[i]);
						}
						if (cards.length) {
							if (player != game.me) {
								dialog.add([cards, 'blank']);
							} else {
								dialog.add(cards);
							}
						} else {
							dialog.add('(无)');
						}
					},
				},
				marktext: '存',
				check(event, player) {
					var att = get.attitude(player, event.player);
					if ((player.countCards('h', 'tao') || player.countCards('h', 'shan') || player.countCards('h', 'jiu')) && player.hp <= 1) return false;
					var num = Math.abs(player.countCards('hej') - event.player.countCards('hej'));
					if (event.player.identity && player.identity && event.player.identity == player.identity && att > 0) {
						if (player.countCards('j') > 0 && event.player.countCards('j') > 0) return true;
						return false;
					}
					return num > 1 && player.countCards('hej') < event.player.countCards('hej') && att < 0;
				},
				content() {
					'step 0';
					player.chooseControl('手牌区域', '装备区域', '判定区域', ui.create.dialog('请选择一个区域', 'hidden')).ai = function () {
						var num0 = Math.abs(player.countCards('h') - trigger.player.countCards('h'));
						var num1 = Math.abs(player.countCards('e') - trigger.player.countCards('e'));
						if (player.countCards('j') > 0 && trigger.player.countCards('j') > 0) return '判定区域';
						if (num0 > 1 && player.countCards('h') < trigger.player.countCards('h')) return '手牌区域';
						if (num1 > 1 && player.countCards('e') < trigger.player.countCards('e')) return '装备区域';
						return '装备区域';
					};
					('step 1');
					if (result.control == '手牌区域') {
						var hs0 = player.getCards('h');
						var hs1 = trigger.player.getCards('h');
						if (!hs0.length || !hs1.length) {
							event.finish();
						} else {
							player.lose(hs0)._triggered = null;
							player.$throw(hs0);
							player.markSkill('SE_shujucunchu');
							player.storage.SE_shujucunchu = player.storage.SE_shujucunchu.concat(hs1);
							trigger.player.lose(hs1, ui.special)._triggered = null;
							trigger.player.$give(hs1, player);
						}
					}
					if (result.control == '装备区域') {
						var hs0 = player.getCards('e');
						var hs1 = trigger.player.getCards('e');
						if (!hs0.length || !hs1.length) {
							event.finish();
						} else {
							player.lose(hs0)._triggered = null;
							player.$throw(hs0);
							player.storage.SE_shujucunchu = player.storage.SE_shujucunchu.concat(hs1);
							player.markSkill('SE_shujucunchu');
							trigger.player.lose(hs1, ui.special)._triggered = null;
							trigger.player.$give(hs1, player);
						}
					}
					if (result.control == '判定区域') {
						var hs0 = player.getCards('j');
						var hs1 = trigger.player.getCards('j');
						if (!hs0.length || !hs1.length) {
							event.finish();
						} else {
							player.lose(hs0)._triggered = null;
							player.$throw(hs0);
							player.markSkill('SE_shujucunchu');
							player.storage.SE_shujucunchu = player.storage.SE_shujucunchu.concat(hs1);
							trigger.player.lose(hs1, ui.special)._triggered = null;
							trigger.player.$give(hs1, player);
						}
					}
				},
			};
			lib.skill.SE_shujuduxie = {
				audio: 4,
				trigger: { player: 'phaseBegin' },
				forced: true,
				filter(event, player) {
					return player.storage.SE_shujucunchu.length;
				},
				content() {
					'step 0';
					player.chooseControl('其他角色', '自己获得', ui.create.dialog('请选择一项', 'hidden')).ai = function () {
						if (player.countCards('h') < 2) return '自己获得';
						return '其他角色';
					};
					('step 1');
					if (result.control == '自己获得') {
						player.gain(player.storage.SE_shujucunchu, 'gain2');
						player.storage.SE_shujucunchu = [];
						player.unmarkSkill('SE_shujucunchu');
						event.finish();
					}
					if (result.control == '其他角色') {
						player.chooseTarget(
							function (card, player, target) {
								return player != target;
							},
							'请选择获得牌的目标',
							true
						).ai = function (target) {
							return get.attitude(player, target);
						};
					}
					('step 2');
					if (result.targets?.length) {
						event.targets = result.targets;
						var num = player.storage.SE_shujucunchu.length;
						player.draw(num);
						event.targets[0].gain(player.storage.SE_shujucunchu);
						player.$give(player.storage.SE_shujucunchu, event.targets[0]);
						player.storage.SE_shujucunchu = [];
						player.unmarkSkill('SE_shujucunchu');
						event.finish();
					}
				},
				ai: {
					threaten: 3,
					expose: 0.3,
				},
			};
			lib.skill.SE_shujuqingkong = {
				audio: 4,
				trigger: { player: 'loseEnd' },
				forced: true,
				filter(event, player) {
					if (!player.countCards('h')) {
						if (Array.isArray(event.cards)) for (var i of event.cards) {
							if (i.original == 'h') {
								for (var j = 0; j < game.players.length; j++) {
									if (game.players[j] == player) continue;
									if (game.players[j].countCards('h')) return true;
								}
							}
						}
						return false;
					}
					if (!player.countCards('e')) {
						if (player.equiping) return false;
						if (Array.isArray(event.cards)) for (var i of event.cards) {
							if (i.original == 'e') {
								for (var j = 0; j < game.players.length; j++) {
									if (game.players[j] == player) continue;
									if (game.players[j].countCards('e')) return true;
								}
							}
						}
						return false;
					}
					if (!player.countCards('j')) {
						if (Array.isArray(event.cards)) for (var i of event.cards) {
							if (i.original == 'j') {
								for (var j = 0; j < game.players.length; j++) {
									if (game.players[j] == player) continue;
									if (game.players[j].countCards('j')) return true;
								}
							}
						}
						return false;
					}
				},
				content() {
					'step 0';
					var players = get.players(player);
					players.remove(player);
					event.players = players;
					('step 1');
					if (event.players.length) {
						var current = event.players.shift();
						if (!player.countCards('h')) {
							var hs0 = current.getCards('h');
							if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
								if (i.original == 'h') {
									if (hs0.length) {
										current.lose(hs0)._triggered = null;
										current.$throw(hs0);
									}
								}
							}
						}
						if (!player.countCards('e')) {
							var hs1 = current.getCards('e');
							if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
								if (i.original == 'e') {
									if (hs1.length) {
										current.lose(hs1)._triggered = null;
										current.$throw(hs1);
									}
								}
							}
						}
						if (!player.countCards('j')) {
							var hs2 = current.getCards('j');
							if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
								if (i.original == 'j') {
									if (hs2.length) {
										current.lose(hs2)._triggered = null;
										current.$throw(hs2);
									}
								}
							}
						}
						event.redo();
					}
				},
			};
			lib.skill.SE_shujufenpei = {
				audio: 4,
				enable: 'phaseUse',
				usable: 1,
				init(player) {
					player.storage.SE_shujufenpei = 0;
				},
				intro: {
					content: 'mark',
				},
				createDialog(player, onlylist) {
					var list = [];
					var exclude = [];
					for (var i = 0; i < arguments.length; i++) exclude.push(arguments[i]);
					var skills2 = [];
					var players = game.players.concat(game.dead);
					for (var i in lib.character) {
						for (var j = 0; j < lib.character[i][3].length; j++) {
							skills2.add(lib.character[i][3][j]);
						}
					}
					for (var i of players) {
						if (i == player) continue;
						var skills = i.getCards('s').concat(i.hiddenSkills);
						for (j = 0; j < skills.length; j++) {
							if (skills2.includes(skills[j]) && !list.includes(skills[j])) {
								list.push(skills[j]);
							}
						}
					}
					if (onlylist) return list;
					var dialog = ui.create.dialog();
					dialog.add('请选择一项技能');
					_status.event.list = list;
					var clickItem = function () {
						_status.event._result = this.link;
						game.resume();
					};
					for (var i = 0; i < list.length; i++) {
						if (lib.translate[list[i] + '_info']) {
							var translation = get.translation(list[i])[0] + get.translation(list[i])[1];
							var item = dialog.add('<div class="popup" style="width:50%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
							item.firstChild.addEventListener('click', clickItem);
							item.firstChild.link = list[i];
						}
					}
					dialog.add(ui.create.div('.placeholder'));
					return dialog;
				},
				content() {
					'step 0';
					event.result = function () {
						var num = Math.ceil(player.storage.SE_shujufenpei / 2);
						if (player.storage.SE_shujufenpei > 0) {
							var num = Math.ceil(player.storage.SE_shujufenpei / 2);
							if (num > 0) {
								player.loseHp(num);
							}
							player.storage.SE_shujufenpei = 0;
							player.unmarkSkill('SE_shujufenpei');
						}
						while (ui.controls.length) {
							ui.controls[0].close();
						}
						while (ui.dialogs.length) {
							ui.dialogs[0].close();
						}
						ui.clear();
						game.resume();
						event.finish();
					};
					event.skillai = function (list) {
						if (_status.event.list.length == 0) return event.result();
						return _status.event.list.randomGet();
					};
					if (event.isMine()) {
						event.dialog = lib.skill.SE_shujufenpei.createDialog(player);
						if (_status.event.list.length == 0) {
							return event.result();
						} else {
							event.control = ui.create.control('取消', event.result);
							game.pause();
						}
					} else {
						var num = Math.ceil(player.storage.SE_shujufenpei / 2);
						if (num >= player.hp - 1) {
							if (!player.countCards('h', 'tao') || !player.countCards('h', 'jiu')) return event.result();
							if (num >= player.hp + 1) return event.result();
							return (event._result = event.skillai(lib.skill.SE_shujufenpei.createDialog(player, target, true)));
						} else {
							event._result = event.skillai(lib.skill.SE_shujufenpei.createDialog(player, target, true));
						}
					}
					('step 1');
					if (!event.list.includes(result)) {
						event.finish();
					} else {
						if (event.dialog) {
							event.dialog.close();
						}
						if (event.control) {
							event.control.close();
						}
						event.skill = result;
						player.chooseTarget(function (card, player, target) {
							return !target.skills.includes(event.skill);
						}, '请选择获得此技能的目标').ai = function (target) {
							if (player == target) return 10;
							return get.attitude(player, target);
						};
					}
					('step 2');
					if (result.targets?.length) {
						event.targets = result.targets;
						var players = game.players.concat(game.dead);
						for (var i of players) {
							if (i == player) continue;
							i.removeSkill(event.skill);
						}
						event.targets[0].addSkill(event.skill);
						if (!player.storage.SE_shujufenpei) {
							player.markSkill('SE_shujufenpei');
							player.storage.SE_shujufenpei++;
							event.goto(0);
						} else {
							player.storage.SE_shujufenpei++;
							event.goto(0);
						}
					} else {
						event.goto(0);
					}
				},
				ai: {
					threaten: 5,
					order: 2,
					result: {
						player(player) {
							if (player.hp > 2) return 1;
							return 0;
						},
					},
				},
			};
			lib.skill.SE_zhouye = {
				trigger: { player: 'phaseUseBegin' },
				filter(event, player) {
					return !player.storage.夜 || player.storage.夜 > 0;
				},
				forced: true,
				content() {
					'step 0';
					player.storage.夜 = 0;
					player.unmark('夜');
					('step 1');
					event.cards = get.cards();
					player.showCards(event.cards);
					('step 2');
					if (get.color(event.cards) == 'black') {
						player.mark('夜', {
							name: '夜',
							content: 'mark',
						});
						player.storage.夜 = 0;
						if (Array.isArray(cards)) for (var i of cards) {
							ui.discardPile.appendChild(i);
							game.log(player, '将', i, '置入了弃牌堆');
						}
						event.goto(3);
					} else {
						if (Array.isArray(cards)) for (var i of cards) {
							ui.discardPile.appendChild(i);
							game.log(player, '将', i, '置入了弃牌堆');
						}
						event.finish();
					}
					('step 3');
					player.storage.夜++;
				},
				group: ['SE_zhouye2'],
			};
			lib.skill.SE_zhouye2 = {
				mod: {
					cardEnabled(card, player) {
						if (card.name == 'sha' && player.storage.夜 <= 0) return false;
					},
				},
			};
			lib.skill.SE_hongwu = {
				enable: 'phaseUse',
				filterCard(card, player) {
					return get.color(card) == 'red';
				},
				selectCard: 2,
				position: 'he',
				filter(event, player) {
					return !player.storage.夜 || player.storage.夜 <= 0;
				},
				content() {
					'step 0';
					player.mark('夜', {
						name: '夜',
						content: 'mark',
					});
					player.storage.夜 = 0;
					('step 1');
					player.storage.夜++;
				},
			};
			lib.skill.SE_shenqiang = {
				enable: 'phaseUse',
				filterCard(card, player) {
					return card.suit == 'heart' || get.subtype(card) == 'equip1';
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				selectCard: 1,
				position: 'he',
				filter(event, player) {
					return player.storage.夜 > 0;
				},
				content() {
					target.damage();
				},
			};
			lib.skill.SE_yewang = {
				trigger: { player: 'damageBegin' },
				filter(event, player) {
					return player.storage.夜 > 0 && event.num > 0;
				},
				forced: true,
				_priority: -10,
				content() {
					if (trigger.num == 1) {
						trigger.num--;
					} else {
						trigger.num = 1;
					}
				},
			};
			lib.skill.SE_wangzhe = {
				trigger: { global: ['phaseDrawBefore', 'phaseDiscardBefore'] },
				_priority: 10,
				forced: true,
				popup: false,
				content() {
					trigger.untrigger();
					trigger.finish();
				},
			};
			lib.skill.SE_yindao = {
				trigger: { player: ['loseEnd', 'changeHp'] },
				forced: true,
				filter(event, player) {
					return player.countCards('h') < 4;
				},
				content() {
					player.draw(4 - player.countCards('h'));
				},
			};
			lib.skill.SE_shapo = {
				audio: 2,
				trigger: { player: 'phaseEnd' },
				forced: true,
				prompt: '请选择1名角色',
				content() {
					'step 0';
					var players = get.players(player);
					players.remove(player);
					event.players = players;
					('step 1');
					if (event.players.length) {
						event.players.shift().loseMaxHp();
						event.redo();
					}
				},
			};
			lib.skill.SE_wanghun = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				prompt: '请选择1名角色',
				filterTarget(card, player, target) {
					if (target == player) return false;
					return true;
				},
				content() {
					target.clearSkills();
					player.removeSkill('SE_wanghun');
				},
				ai: {
					order: 9.5,
					result: {
						target(player, target) {
							return get.damageEffect(target, player);
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_chaodu = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				prompt: '请选择1名角色',
				filterTarget(card, player, target) {
					if (target.hp >= target.maxHp) return false;
					if (target == player) return false;
					return true;
				},
				content() {
					target.die();
					player.damage('fire');
				},
				ai: {
					order: 9.5,
					result: {
						target(player, target) {
							return get.damageEffect(target, player);
						},
					},
					expose: 0.2,
				},
			};
			lib.skill.SE_mingwang = {
				trigger: { player: 'dieBefore' },
				forced: true,
				filter(event, player) {
					return player.maxHp >= 0;
				},
				content() {
					trigger.untrigger();
					trigger.finish();
					player.hp = 0;
				},
				group: ['SE_mingwang2', 'SE_mingwang3', 'SE_mingwang4', 'SE_mingwang5'],
			};
			lib.skill.SE_mingwang2 = {
				audio: true,
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard(card, player) {
					return get.color(card) == 'red';
				},
				position: 'he',
				viewAs: { name: 'sha', nature: 'fire' },
				prompt: '将一张红色牌当火杀使用或打出',
				ai: {
					respondSha: true,
				},
			};
			lib.skill.SE_mingwang3 = {
				audio: true,
				enable: ['chooseToUse', 'chooseToRespond'],
				filterCard(card, player) {
					return get.color(card) == 'black';
				},
				position: 'he',
				viewAs: { name: 'wuxie' },
				prompt: '将一张黑色牌当无懈可击使用',
			};
			lib.skill.SE_mingwang4 = {
				trigger: { player: 'loseMaxHpBefore' },
				forced: true,
				filter(event, player) {
					return player.maxHp <= 0;
				},
				content() {
					trigger.untrigger();
					trigger.finish();
				},
			};
			lib.skill.SE_mingwang5 = {
				trigger: { global: ['gameDrawAfter', 'useCardAfter'], player: 'phaseBefore' },
				forced: true,
				popup: false,
				_priority: 55,
				filter(event, player) {
					return player.maxHp != 0;
				},
				content() {
					player.maxHp = 0;
					player.hp = player.maxHp;
					player.update();
					ui.clear();
				},
			};
			lib.skill.SE_guiyu = {
				mark: true,
				init(player) {
					player.storage.SE_guiyu = 6;
				},
				intro: {
					content: 'turn',
				},
				trigger: { player: 'phaseAfter' },
				forced: true,
				filter(event, player) {
					return player.storage.SE_guiyu ? true : false;
				},
				content() {
					if (player.storage.SE_guiyu > 1) {
						player.storage.SE_guiyu--;
						game.addVideo('storage', player, ['SE_guiyu', player.storage.SE_guiyu]);
						game.log(player, '剩余', player.storage.SE_guiyu, '个回合');
					} else {
						player.removeSkill('SE_mingwang');
						player.die();
					}
				},
			};
			lib.skill.SE_shouling = {
				trigger: { player: 'loseEnd' },
				forced: true,
				filter(event, player) {
					return player.countCards('h') < 2;
				},
				content() {
					player.draw(2 - player.countCards('h'));
				},
			};
			lib.skill.SE_yuanzhou = {
				trigger: { source: 'damage' },
				filter(event, player) {
					return event.player.hp <= 0;
				},
				forced: true,
				content() {
					trigger.player.die(trigger);
				},
			};
			lib.skill.SE_yuhuo = {
				audio: 2,
				trigger: { player: 'phaseEnd' },
				forced: true,
				content() {
					'step 0';
					var players = get.players(player);
					players.remove(player);
					event.players = players;
					('step 1');
					if (event.players.length) {
						event.players.shift().damage('fire');
						event.redo();
					}
				},
			};
			lib.skill.SE_xianshi = {
				mode: ['boss'],
				trigger: { player: 'changeHp' },
				forced: true,
				_priority: 100,
				audio: 2,
				filter(event, player) {
					return player.hp <= 2;
				},
				content() {
					player.init('dongman_enma2');
					player.update();
					ui.clear();
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
					player.phase('nodelay');
					for (var i of game.players) {
						for (var j in i.tempSkills) {
							i.skills.remove(j);
							delete i.tempSkills[j];
						}
					}
				},
				group: ['SE_xianshi2'],
			};
			lib.skill.SE_xianshi2 = {
				trigger: { global: 'gameDrawBegin' },
				forced: true,
				popup: false,
				_priority: 100,
				content() {
					if (game.bossinfo) {
						game.bossinfo.loopType = 2;
					}
					player.draw(4, false);
				},
			};
			lib.skill.SE_zhansha = {
				audio: true,
				trigger: { global: 'phaseEnd' },
				forced: true,
				filter(event, player) {
					if (player.countCards('h', { type: 'trick' })) return false;
					if (player.countCards('h', { type: 'delay' })) return false;
					return true;
				},
				content() {
					'step 0';
					var list = [];
					var suit = ['heart', 'diamond', 'club', 'spade'].randomGet();
					var number = Math.floor(Math.random() * 13) + 1;
					for (var i in lib.card) {
						if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
						if (get.value({ name: i }) >= 10) continue;
						if (i != 'list' && (lib.card[i].type == 'trick' || lib.card[i].type == 'delay')) list.push([suit, number, i]);
					}
					var dialog = ui.create.dialog([list, 'vcard']);
					player.chooseButton(dialog, 2, true, function (button) {
						return get.value({ name: button.link[2] }, player);
					});
					('step 1');
					var cards = [ui.create.card(), ui.create.card()];
					cards[0].init(result.buttons[0].link);
					cards[1].init(result.buttons[1].link);
					player.gain(cards, 'gain2');
					game.log(player, '获得了', cards);
				},
				group: ['SE_zhansha2', 'SE_zhansha3', 'SE_zhansha4'],
			};
			lib.skill.SE_zhansha2 = {
				audio: true,
				_priority: 5,
				forced: true,
				trigger: { global: 'useCardToBegin' },
				filter(event, player) {
					if (get.type(event.card) != 'trick') return false;
					if (event.player == player) return false;
					return true;
				},
				forced: true,
				content() {
					trigger.player.damage()._triggered = null;
					player.draw();
				},
				ai: {
					threaten(player, target) {
						if (target.hp > 1) return 2;
						return 0.6;
					},
					effect: {
						target(card, player, target) {
							if (get.type(card) == 'trick') {
								if (player.hp == 1 && !player.countCards('h', 'tao')) {
									return [0, 1, 0, -10];
								}
								if (player.hp == player.maxHp) {
									return [0, 1, 0, -1];
								}
								return [0, 1, 0, -5];
							}
						},
					},
				},
			};
			lib.skill.SE_zhansha3 = {
				audio: true,
				_priority: 5,
				forced: true,
				trigger: { global: 'useCardToBegin' },
				filter(event, player) {
					if (get.type(event.card) != 'delay') return false;
					if (event.player == player) return false;
					return true;
				},
				forced: true,
				content() {
					trigger.player.damage()._triggered = null;
					player.draw();
				},
				ai: {
					threaten(player, target) {
						if (target.hp > 1) return 2;
						return 0.6;
					},
					effect: {
						target(card, player, target) {
							if (get.type(card) == 'delay') {
								if (player.hp == 1 && !player.countCards('h', 'tao')) {
									return [0, 1, 0, -10];
								}
								if (player.hp == player.maxHp) {
									return [0, 1, 0, -1];
								}
								return [0, 1, 0, -5];
							}
						},
					},
				},
			};
			lib.skill.SE_zhansha4 = {
				trigger: { global: 'gameStart' },
				forced: true,
				popup: false,
				silent: true,
				_priority: 100,
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						i.storage.SE_zhansha = true;
					}
					lib.skill.global.push('SE_zhansha5');
				},
			};
			lib.skill.SE_zhansha5 = {
				mod: {
					cardEnabled(card, player) {
						var stat = player.getStat('card');
						var num = 0;
						for (var i in stat) {
							if (typeof stat[i] == 'number' && (get.type(i) == 'trick' || get.type(i) == 'delay')) {
								num += stat[i];
							}
						}
						if (_status.currentPhase == player && num >= 1 && player.storage.SE_zhansha && (get.type(card) == 'trick' || get.type(card) == 'delay')) return false;
					},
					cardUsable(card, player) {
						var stat = player.getStat('card');
						var num = 0;
						for (var i in stat) {
							if (typeof stat[i] == 'number' && (get.type(i) == 'trick' || get.type(i) == 'delay')) {
								num += stat[i];
							}
						}
						if (_status.currentPhase == player && num >= 1 && player.storage.SE_zhansha && (get.type(card) == 'trick' || get.type(card) == 'delay')) return false;
					},
				},
			};
			lib.skill.SE_wuyuzhiye = {
				audio: 2,
				trigger: { player: 'dying' },
				_priority: 5,
				forced: true,
				filter(event, player) {
					return player.countCards('h', { type: 'delay' }) || player.countCards('h', { type: 'trick' });
				},
				content() {
					'step 0';
					player.showHandcards();
					('step 1');
					var cards0 = player.getCards('h');
					var cards1 = [];
					for (var i = 0; i < cards0.length; i++) {
						if (get.type(cards0[i]) != 'basic' && get.type(cards0[i]) != 'equip') {
							cards1.push(cards0[i]);
						}
					}
					var num = player.countCards('h', { type: 'trick' }) + player.countCards('h', { type: 'delay' });
					if (num > 0 && cards1.length) {
						player.recover(num);
						for (var i of game.players) {
							if (i == player) continue;
							i.damage(num)._triggered = null;
						}
						player.discard(cards1);
					}
				},
			};
			lib.skill.SE_benjingfaze = {
				audio: 2,
				trigger: { global: 'useCardToBegin' },
				filter(event, player) {
					return event.target == player && event.targets.length == 1 && event.player != player;
				},
				forced: true,
				content() {
					'step 0';
					player.judge(function (card) {
						return card.suit == 'spade' ? -1 : 4;
					});
					('step 1');
					if (result.bool) {
						trigger.untrigger();
						trigger.finish();
						if (trigger.cards && trigger.cards.length) {
							trigger.player.gain(trigger.cards);
							trigger.player.$gain2(trigger.cards);
							game.log(trigger.player, '收回了', trigger.cards);
						}
					} else {
						player.draw();
						event.finish();
					}
				},
			};
			lib.skill.SE_chuanjiao = {
				audio: 2,
				trigger: { global: 'phaseDrawBefore' },
				filter(event, player) {
					return event.player != player;
				},
				_priority: Infinity,
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					event.cards = get.cards(4);
					if (event.isMine() == false) {
						event.dialog = ui.create.dialog('传教', event.cards);
					}
					('step 2');
					if (event.dialog) event.dialog.close();
					var dialog = ui.create.dialog('传教', event.cards);
					player.chooseButton(2, dialog, true).filterButton = function (button) {
						return true;
					};
					('step 3');
					var cards2 = [];
					for (var i = 0; i < result.buttons.length; i++) {
						cards2.push(result.buttons[i].link);
						cards.remove(result.buttons[i].link);
					}
					trigger.player.gain(cards2);
					if (cards2.length) trigger.player.$gain(cards2);
					('step 4');
					if (event.dialog) event.dialog.close();
					var dialog = ui.create.dialog('传教', event.cards);
					player.chooseButton([0, 1], dialog, true).filterButton = function (button) {
						return true;
					};
					('step 5');
					var cards2 = [];
					for (var i = 0; i < result.buttons.length; i++) {
						cards2.push(result.buttons[i].link);
						cards.remove(result.buttons[i].link);
					}
					player.gain(cards2);
					if (cards2.length) player.$gain(cards2);
					if (!cards2.length) {
						trigger.player.mark('教', {
							name: '教',
							content: 'mark',
						});
						trigger.player.storage.教 = 0;
						trigger.player.storage.教++;
					}
					if (Array.isArray(cards)) for (var i of cards) {
						ui.discardPile.appendChild(i);
						game.log(player, '将', i, '置入了弃牌堆');
					}
				},
				group: ['SE_chuanjiao2', 'SE_chuanjiao3'],
			};
			lib.skill.SE_chuanjiao2 = {
				audio: 2,
				trigger: { global: 'useCardToBegin' },
				filter(event, player) {
					return event.target && event.target == player && event.player.storage.教 > 0;
				},
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					trigger.player.storage.教 = 0;
					trigger.player.unmark('教');
				},
			};
			lib.skill.SE_chuanjiao3 = {
				trigger: { global: 'phaseAfter' },
				filter(event, player) {
					return event.player.storage.教;
				},
				forced: true,
				popup: false,
				content() {
					trigger.player.storage.教 = 0;
					trigger.player.unmark('教');
				},
			};
			lib.skill.SE_guohuang = {
				trigger: { global: ['useCardAfter', 'gameStart', 'phaseBefore', 'phaseAfter'] },
				forced: true,
				popup: false,
				_priority: 2,
				filter(event, player) {
					var targets = [];
					for (var i of game.players) {
						if (i.name == 'dongman_Kousaka') continue;
						if (!i.skills.includes('SE_guohuang')) continue;
						targets.push(i);
					}
					if (targets.length) return true;
					return false;
				},
				content() {
					for (var i of game.players) {
						if (i.name == 'dongman_Kousaka') continue;
						if (!i.skills.includes('SE_guohuang')) continue;
						i.qdie(player);
						i.removeSkill('SE_guohuang');
						i.removeSkill('SE_chuanjiao');
						i.removeSkill('SE_LoveLive');
					}
				},
				group: ['SE_guohuang2', 'SE_guohuang3', 'SE_guohuang4', 'SE_guohuang5', 'SE_guohuang6'],
			};
			lib.skill.SE_guohuang2 = {
				trigger: { global: 'useSkillBefore' },
				forced: true,
				popup: false,
				filter(event, player) {
					return _status.currentPhase != player;
				},
				content() {
					trigger.untrigger();
					trigger.finish();
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
				},//QQQ
			};
			lib.skill.SE_guohuang3 = {
				trigger: { global: ['gainEnd', 'loseEnd', 'useCardAfter', 'gameStart', 'phaseBefore', 'phaseAfter'] },
				forced: true,
				popup: false,
				_priority: -5,
				content() {
					for (var i of game.players) {
						if (i.name != 'dongman_Kousaka') continue;
						i.disabledSkills = [];
					}
				},
			};
			lib.skill.SE_guohuang4 = {
				trigger: { global: ['gainEnd', 'loseEnd', 'useCardAfter', 'gameStart', 'phaseBefore', 'phaseAfter'] },
				forced: true,
				popup: false,
				silent: true,
				filter(event, player) {
					return !lib.skill.global.includes('SE_guohuang3');
				},
				_priority: 100,
				content() {
					lib.skill.global.push('SE_guohuang');
					lib.skill.global.push('SE_guohuang3');
					lib.skill.global.push('SE_guohuang5');
					lib.skill.global.push('SE_guohuang6');
				},
			};
			lib.skill.SE_guohuang5 = {
				trigger: { global: ['useCardAfter', 'gameStart', 'phaseBefore', 'phaseAfter'] },
				forced: true,
				popup: false,
				filter(event, player) {
					var targets = [];
					for (var i of game.players) {
						if (i.name == 'dongman_Kousaka') continue;
						targets.push(i);
					}
					if (targets.length) return true;
					return false;
				},
				content() {
					for (var i of game.players) {
						if (i.name == 'dongman_Kousaka') continue;
						i.removeSkill('SE_guohuang');
						i.removeSkill('SE_chuanjiao');
						i.removeSkill('SE_LoveLive');
					}
				},
			};
			lib.skill.SE_guohuang6 = {
				trigger: { global: ['useCardAfter', 'gameStart', 'phaseBefore', 'phaseAfter'] },
				forced: true,
				popup: false,
				content() {
					'step 0';
					var list = [];
					for (var i of game.players) {
						if (i.name != 'dongman_Kousaka') continue;
						list.push(i);
					}
					var num = list.length;
					if (num > 1) {
						game.removePlayer(list);
						event.goto(1);
					} else {
						event.finish();
					}
					('step 1');
					var player2 = game.addPlayer();
					player2.getId();
					player2.init('dongman_Kousaka');
					var list = ['zhong', 'fan', 'nei'];
					player2.identity = list.randomGet();
				},
			};
			lib.skill.SE_LoveLive = {
				audio: 4,
				trigger: { player: 'phaseAfter' },
				forced: true,
				init(player) {
					player.storage.SE_LoveLive = 0;
				},
				intro: {
					content: 'mark',
				},
				_priority: Infinity,
				marktext: 'LL',
				content() {
					player.storage.SE_LoveLive++;
					player.markSkill('SE_LoveLive');
					if (player.storage.SE_LoveLive >= 9) {
						if (player == game.me) {
							game.forceOver(true);
						} else {
							game.forceOver(false);
						}
					}
				},
			};
			lib.skill.SE_caozong = {
				audio: true,
				trigger: { player: 'phaseEnd' },
				forced: true,
				filter(event, player) {
					return game.players.length >= 3;
				},
				content() {
					'step 0';
					player.chooseTarget(function (card, player, target) {
						return target != player;
					}).ai = function () {
						return 1;
					};
					('step 1');
					if (result.targets?.length) {
						result.targets[0].goMad();
					}
				},
				group: ['SE_caozong2'],
			};
			lib.skill.SE_caozong2 = {
				trigger: { player: 'phaseBegin' },
				forced: true,
				popup: false,
				content() {
					var players = game.players.concat(game.dead);
					for (var i of players) {
						if (i.isMad()) {
							i.unMad();
						}
					}
				},
			};
			lib.skill.SE_wuyu = {
				mode: ['boss'],
				audio: true,
				forced: true,
				trigger: { player: 'damageEnd' },
				filter(event, player) {
					return event.num > 0 && event.source != player;
				},
				content() {
					if (trigger.source != undefined) {
						trigger.source.damage(trigger.num);
					} else {
						for (var i of game.players) {
							if (i == player) continue;
							i.damage(trigger.num);
						}
					}
				},
				group: ['SE_wuyu2', 'SE_wuyu3', 'SE_wuyu4', 'SE_wuyu5', 'SE_wuyu6'],
			};
			lib.skill.SE_wuyu2 = {
				audio: true,
				forced: true,
				trigger: { player: 'loseHpEnd' },
				filter(event, player) {
					return event.num > 0;
				},
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						i.loseHp(trigger.num);
					}
				},
			};
			lib.skill.SE_wuyu3 = {
				audio: true,
				forced: true,
				trigger: { player: 'loseMaxHpEnd' },
				forced: true,
				_priority: 55,
				filter(event, player) {
					return event.num > 0;
				},
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						i.loseMaxHp(trigger.num);
					}
				},
			};
			lib.skill.SE_wuyu4 = {
				audio: true,
				trigger: { player: 'useCardAfter' },
				filter(event, player) {
					if (event.parent.name == 'SE_wuyu4') return false;
					if (!event.targets || !event.card) return false;
					var type = get.type(event.card);
					if (type != 'basic' && type != 'trick') return false;
					var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
					for (var i = 0; i < event.targets.length; i++) {
						if (!event.targets[i].isAlive()) return false;
						if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
							return false;
						}
					}
					return true;
				},
				check(event, player) {
					if (event.card.name == 'tiesuo') return false;
					if (event.card.name == 'toulianghuanzhu') return false;
					return true;
				},
				content() {
					var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
					player.useCard(card, trigger.targets);
				},
			};
			lib.skill.SE_wuyu5 = {
				audio: true,
				forced: true,
				trigger: { global: 'useCardToBegin' },
				filter(event, player) {
					return event.target == player && event.targets.length == 1 && event.player != player;
				},
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						if (i == trigger.player) continue;
						trigger.targets.push(i);
						game.log(i, '成为了额外目标');
					}
				},
			};
			lib.skill.SE_wuyu6 = {
				audio: true,
				forced: true,
				trigger: { global: 'recoverEnd' },
				forced: true,
				_priority: 55,
				filter(event, player) {
					return event.num > 0 && event.player != player && player.hp < player.maxHp;
				},
				content() {
					player.recover(trigger.num);
				},
			};
			lib.skill.SE_NoeSIS = {
				mode: ['boss'],
				audio: 2,
				trigger: { global: 'dieBefore' },
				forced: true,
				_priority: 100,
				filter(event, player) {
					return event.player != player && event.player.maxHp != 0;
				},
				content() {
					trigger.player.loseMaxHp(trigger.player.maxHp);
					player.maxHp += trigger.player.maxHp;
					player.recover(trigger.player.maxHp);
					var skills = lib.character[trigger.player.name][3];
					for (var i = 0; i < skills.length; i++) {
						if (!lib.skill[skills[i]].forceunique) {
							player.addSkill(skills[i]);
							trigger.player.removeSkill(skills[i]);
						}
					}
					player.update();
				},
			};
			lib.skill.SE_duansheng = {
				audio: true,
				trigger: { player: 'equipEnd' },
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(true, '选择1名目标对其造成x(x为你和他装备数之差)点伤害', function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return get.damageEffect(target, player, player);
					};
					('step 1');
					if (result.targets?.length) {
						event.target = result.targets[0];
						var num0 = event.target.countCards('e');
						var num1 = player.countCards('e');
						if (num1 >= num0) {
							event.target.damage(num1 - num0);
						} else {
							event.target.damage(num0 - num1);
						}
					}
				},
				group: ['SE_duansheng2'],
			};
			lib.skill.SE_duansheng2 = {
				audio: true,
				trigger: { player: 'loseEnd' },
				forced: true,
				filter(event, player) {
					if (Array.isArray(event.cards)) for (var i of event.cards) {
						if (i.original == 'e') return true;
					}
					return false;
				},
				content() {
					'step 0';
					player.chooseTarget(true, '选择1名目标对其造成x(x为你和他装备数之差)点伤害', function (card, player, target) {
						return player != target;
					}).ai = function (target) {
						return get.damageEffect(target, player, player);
					};
					('step 1');
					if (result.targets?.length) {
						event.target = result.targets[0];
						var num0 = event.target.countCards('e');
						var num1 = player.countCards('e');
						if (num1 >= num0) {
							event.target.damage(num1 - num0);
						} else {
							event.target.damage(num0 - num1);
						}
					}
				},
			};
			lib.skill.SE_yinguo = {
				audio: 2,
				trigger: { player: 'useCard' },
				_priority: 100,
				filter(event, player) {
					if (event.parent.name == 'SE_yinguo') return false;
					if (!event.targets || !event.card) return false;
					if (event.card.name == 'wuxie') return false;
					if (event.targets.length <= 1 && event.targets.includes(player)) return false;
					if (get.type(event.card) == 'trick' || get.type(event.card) == 'delay') return true;
					return false;
				},
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					var list = [];
					for (var i = 0; i < trigger.targets.length; i++) {
						if (player.canUse('wanjian', trigger.targets[i]) && trigger.targets[i] != player) {
							list.push(trigger.targets[i]);
						}
					}
					player.addTempSkill('unequip', 'phaseAfter');
					player.useCard({ name: 'wanjian' }, list);
				},
				group: ['SE_yinguo2', 'SE_yinguo3', 'SE_yinguo4'],
			};
			lib.skill.SE_yinguo2 = {
				trigger: { player: 'damageBefore' },
				forced: true,
				popup: false,
				_priority: 100,
				filter(event, player) {
					return event.source != player;
				},
				content() {
					trigger.source = undefined;
				},
			};
			lib.skill.SE_yinguo3 = {
				trigger: { source: 'damageBefore' },
				forced: true,
				popup: false,
				_priority: 100,
				content() {
					trigger.source = undefined;
				},
			};
			lib.skill.SE_yinguo4 = {
				mod: {
					cardUsable() {
						return Infinity;
					},
					targetInRange() {
						return true;
					},
					selectTarget(card, player, range) {
						if (get.type(card) == 'basic' || get.type(card) == 'trick') range[1] = player.hp + 1;
					},
				},
			};
			lib.skill.SE_yuanhuan = {
				audio: 2,
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.hp < player.maxHp;
				},
				selectTarget() {
					return [1, _status.event.player.maxHp - _status.event.player.hp];
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				content() {
					target.addSkill('SE_yuanhuan6');
				},
				ai: {
					order: 9.5,
					result: {
						target(player, target) {
							return get.damageEffect(target, player);
						},
					},
					expose: 0.2,
				},
				group: ['SE_yuanhuan2', 'SE_yuanhuan5'],
			};
			lib.skill.SE_yuanhuan2 = {
				trigger: { player: 'phaseBegin' },
				forced: true,
				popup: false,
				_priority: 100,
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						if (!i.name || !lib.character[i.name]) continue;
						var skills = lib.character[i.name][3];
						for (var j = 0; j < skills.length; j++) {
							if (!lib.skill[skills[j]].forceunique) {
								i.removeSkill('SE_yuanhuan6');
							}
						}
					}
				},
			};
			lib.skill.SE_yuanhuan5 = {
				trigger: { global: ['recoverBefore', 'gainMaxHpBefore', 'changeHpBefore'] },
				forced: true,
				popup: false,
				_priority: 88,
				filter(event, player) {
					return event.player != player;
				},
				content() {
					trigger.untrigger();
					trigger.finish();
				},
			};
			lib.skill.SE_yuanhuan6 = {
				mod: {
					cardEnabled() {
						return false;
					},
					cardUsable() {
						return false;
					},
					cardRespondable() {
						return false;
					},
					cardSavable() {
						return false;
					},
				},
			};
			lib.skill.SE_chongzu = {
				audio: 2,
				trigger: { player: 'dieBefore' },
				_priority: 100,
				forced: true,
				filter(event, player) {
					return player.maxHp >= 0;
				},
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					if (game.dead.length) {
						while (game.dead.length) {
							game.dead[0].revive();
						}
					}
					for (var i of game.players) {
						if (i.hp < i.maxHp) i.hp = i.maxHp;
						i.update();
					}
					('step 2');
					player.removeSkill('SE_chongzu');
					player.removeSkill('SE_yuanhuan');
					player.addSkill('SE_taixu');
					player.draw(4);
					player.phase('nodelay');
				},
			};
			lib.skill.SE_taixu = {
				audio: 2,
				trigger: { player: 'phaseEnd' },
				forced: true,
				filter(event, player) {
					return player.hp <= 2;
				},
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						if (!i.name || !lib.character[i.name]) continue;
						var skills = lib.character[i.name][3];
						for (var j = 0; j < skills.length; j++) {
							i.disabledSkills.SE_taixu = lib.character[i.name][3];
							i.addSkill('SE_taixu5');
						}
					}
				},
				group: ['SE_taixu2', 'SE_taixu4'],
			};
			lib.skill.SE_taixu2 = {
				trigger: { player: 'phaseBegin' },
				forced: true,
				popup: false,
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						if (!i.name || !lib.character[i.name]) continue;
						var skills = lib.character[i.name][3];
						for (var j = 0; j < skills.length; j++) {
							delete i.disabledSkills.SE_taixu;
							i.removeSkill('SE_taixu5');
						}
					}
				},
			};
			lib.skill.SE_taixu4 = {
				trigger: { global: ['recoverBefore', 'gainMaxHpBefore', 'changeHpBefore'] },
				forced: true,
				popup: false,
				_priority: 88,
				filter(event, player) {
					return event.player != player;
				},
				content() {
					trigger.untrigger();
					trigger.finish();
				},
			};
			lib.skill.SE_taixu5 = {
				mod: {
					cardEnabled() {
						return false;
					},
					cardUsable() {
						return false;
					},
					cardRespondable() {
						return false;
					},
					cardSavable() {
						return false;
					},
				},
			};
			lib.skill.SE_linggong = {
				audio: 2,
				enable: 'chooseToUse',
				usable: 1,
				filterCard(card, player) {
					return card.number >= player.hp;
				},
				position: 'he',
				viewAs: { name: 'wanjian' },
				prompt: '将一张大于等于你体力点数的牌当万箭齐发使用',
				check(card) {
					return 8 - get.value(card);
				},
			};
			lib.skill.se_cibei = {
				audio: 2,
				trigger: { global: 'phaseBefore' },
				_priority: 100,
				filter(event, player) {
					return event.player != player && player.hp < player.maxHp && player.countCards('h') > 2;
				},
				check(event, player) {
					var cards = player.getCards('h');
					if (cards.length <= 4) {
						if (Array.isArray(cards)) for (var i of cards) {
							if (i.name == 'shan' || i.name == 'tao') return false;
						}
					}
					return true;
				},
				content() {
					'step 0';
					num = player.countCards('h') - 1;
					player.chooseToDiscard(num, true);
					('step 1');
					trigger.player.addSkill('se_cibei3');
				},
				group: ['se_cibei2'],
			};
			lib.skill.se_cibei2 = {
				trigger: { global: 'phaseEnd' },
				forced: true,
				popup: false,
				_priority: 100,
				content() {
					for (var i of game.players) {
						if (i == player) continue;
						if (!i.name || !lib.character[i.name]) continue;
						var skills = lib.character[i.name][3];
						for (var j = 0; j < skills.length; j++) {
							if (!lib.skill[skills[j]].forceunique) {
								i.removeSkill('se_cibei3');
							}
						}
					}
				},
			};
			lib.skill.se_cibei3 = {
				mod: {
					cardEnabled() {
						return false;
					},
					cardUsable() {
						return false;
					},
					cardRespondable() {
						return false;
					},
					cardSavable() {
						return false;
					},
					maxHandcard(player, current) {
						return 1;
					},
					targetInRange() {
						return false;
					},
					selectTarget() {
						return [0, 0];
					},
				},
			};
			lib.skill.se_jiujiqiyuan = {
				mode: ['boss'],
				audio: 2,
				trigger: { player: 'changeHp' },
				forced: true,
				_priority: 100,
				filter(event, player) {
					return player.hp <= 4;
				},
				content() {
					player.init('dongman_madoka2');
					player.update();
					ui.clear();
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
					player.phase('nodelay');
					for (var i of game.players) {
						for (var j in i.tempSkills) {
							i.skills.remove(j);
							delete i.tempSkills[j];
						}
					}
				},
				group: ['se_jiujiqiyuan2'],
			};
			lib.skill.se_jiujiqiyuan2 = {
				trigger: { global: 'gameDrawBegin' },
				forced: true,
				popup: false,
				_priority: 100,
				content() {
					if (game.bossinfo) {
						game.bossinfo.loopType = 2;
					}
					player.draw(4, false);
				},
			};
			lib.skill.SE_Yirong = {
				audio: 3,
				trigger: { player: ['phaseBegin', 'phaseUseBegin', 'phaseDiscardBegin'] },
				_priority: 5,
				init(player) {
					player.storage.SE_Yirong = [];
				},
				check(event, player) {
					return 1;
				},
				intro: {
					nocount: true,
					onunmark(content, player) {
						player.storage.SE_Yirong = [];
					},
					content(storage, player) {
						var str = '当前技能:';
						var skill = player.additionalSkills.yirong;
						if (skill) {
							str += get.translation(skill);
						} else {
							str += '无';
						}
						return str;
					},
					mark(dialog, content, player) {
						var skill = player.additionalSkills.yirong;
						dialog.add('<div class="text center">当前技能</div>');
						if (skill) {
							dialog.add('<div><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>');
						} else {
							dialog.add('无');
						}
					},
				},
				mark: true,
				content() {
					if (event.created) return;
					event.created = true;
					if (event.isMine()) {
						var node = ui.create.div('.add_skill');
						event.node = node;
						event.node.style.width = '400px';
						event.node.style.height = '30px';
						event.node.style.lineHeight = '30px';
						event.node.style.fontFamily = 'xinwei';
						event.node.style.fontSize = '30px';
						event.node.style.padding = '10px';
						event.node.style.left = 'calc(50% - 200px)';
						event.node.style.top = 'calc(50% - 20px)';
						event.node.style.whiteSpace = 'nowrap';
						event.node.innerHTML = '';
						event.node.contentEditable = true;
						event.node.style.webkitUserSelect = 'text';
						event.node.style.textAlign = 'center';
						var skillName = function (e) {
							var skills = [];
							for (var i in lib.character) {
								for (var j = 0; j < lib.character[i][3].length; j++) {
									if (player.skills.includes(lib.character[i][3][j])) continue;
									var info = lib.skill[lib.character[i][3][j]];
									if (info && (info.forced || info.mod || info.locked)) {
										var name = event.node.innerHTML;
										if (get.translation(lib.character[i][3][j]) != name) continue;
										skills.add(lib.character[i][3][j]);
									}
								}
							}
							if (skills.length) {
								ui.window.removeChild(event.node);
								ui.window.removeChild(text);
								ui.window.removeChild(button);
								var skills2 = skills.randomGet();
								player.addSkill(skills2);
								player.skills.remove(skills2);
								var skill = player.additionalSkills.yirong;
								if (skill) {
									player.removeSkill(player.additionalSkills.yirong);
								}
								player.additionalSkills.yirong = [skills2];
								player.popup(skills2);
								ui.clear();
								game.resume();
								return;
							} else {
								var name = event.node.innerHTML;
								alert(name + '不是一个有效的锁定技,请重新输入');
								ui.clear();
								return;
							}
						};
						ui.window.appendChild(event.node);
						var text = ui.create.div();
						text.style.width = '400px';
						text.style.height = '30px';
						text.style.lineHeight = '30px';
						text.style.fontFamily = 'xinwei';
						text.style.fontSize = '30px';
						text.style.padding = '10px';
						text.style.left = 'calc(50% - 200px)';
						text.style.top = 'calc(50% - 80px)';
						text.innerHTML = '请宣言1个锁定技名称';
						text.style.textAlign = 'center';
						ui.window.appendChild(text);
						var button = ui.create.div('.menubutton.highlight.large', '确定', skillName);
						button.style.width = '70px';
						button.style.left = 'calc(50% - 35px)';
						button.style.top = 'calc(50% + 60px)';
						ui.window.appendChild(button);
						for (var i in lib.element.event) {
							event.parent[i] = lib.element.event[i];
						}
						event.parent.custom = {
							add: {},
							replace: {},
						};
						game.pause();
					} else {
						var skills = [];
						for (var i in lib.character) {
							for (var j = 0; j < lib.character[i][3].length; j++) {
								if (player.skills.includes(lib.character[i][3][j])) continue;
								var info = lib.skill[lib.character[i][3][j]];
								if (info && (info.forced || info.mod || info.locked)) {
									skills.add(lib.character[i][3][j]);
								}
							}
						}
						var skills2 = skills.randomGet();
						player.addSkill(skills2);
						player.skills.remove(skills2);
						var skill = player.additionalSkills.yirong;
						if (skill) {
							player.removeSkill(player.additionalSkills.yirong);
						}
						player.additionalSkills.yirong = [skills2];//QQQ
						player.popup(skills2);
					}
				},
				ai: {
					threaten: 6,
				},
			};
			lib.skill.se_youhuo = {
				audio: 5,
				enable: 'phaseUse',
				usable: 1,
				filterCard: true,
				selectCard: 1,
				position: 'h',
				filterTarget(card, player, target) {
					return player != target && target.countCards('he');
				},
				check(card) {
					if (_status.event.player.hp == 1) return 11 - get.value(card);
					if (_status.event.player.hp == _status.event.player.maxHp) return 7 - get.value(card);
					return 9 - get.value(card);
				},
				content() {
					'step 0';
					target.chooseControl('获得你的牌', '流失体力', ui.create.dialog('请选择一项', 'hidden')).ai = function () {
						if (target.countCards('he') < 2) return '获得你的牌';
						if (target.countCards('h', 'tao') || target.countCards('h', 'jiu')) return '流失体力';
						if (target.hp == 1 && (!target.countCards('h', 'tao') || !target.countCards('h', 'jiu'))) return '获得你的牌';
						if (target.hp == target.maxHp && get.attitude(target, player) < 0 && player.hp == 1) return '流失体力';
						if (target.hp < target.maxHp && get.attitude(target, player) < 0) return '流失体力';
						return '获得你的牌';
					};
					('step 1');
					if (result.control == '获得你的牌') {
						event.goto(2);
					} else {
						target.loseHp();
						player.recover();
						event.finish();
					}
					('step 2');
					var num = Math.min(game.players.length, target.countCards('he'));
					if (target.countCards('he') > 0) {
						player.chooseTarget('选择至多' + num + '名角色依次获得目标的1张牌', [1, num], function (card, player, target) {
							return true;
						}).ai = function (target) {
							return get.attitude(player, target);
						};
					} else {
						event.finish();
					}
					('step 3');
					if (result.targets?.length) {
						for (var i = 0; i < result.targets.length; i++) {
							result.targets[i].gainPlayerCard(target, 'he', true);
						}
					} else {
						event.finish();
					}
				},
				ai: {
					order: 7,
					result: {
						target(player, target) {
							if (target.countCards('he') < 2) return 0;
							var att = get.attitude(player, target);
							if (att < 0) return -target.countCards('he');
						},
					},
				},
			};
			lib.skill.SE_mieshi = {
				trigger: { global: 'phaseBegin' },
				forced: true,
				silent: true,
				popup: false,
				init(player) {
					if (lib.config.mode == 'identity') {
						if (game.zhu != player) {
							player.identity = 'fan';
							player.setIdentity('反');
							player.node.identity.dataset.color = 'fan';
						}
					}
					player.node.name.dataset.nature = 'black';
					player.storage.SE_mieshi = 0;
				},
				intro: {
					content: 'mark',
				},
				filter(event, player) {
					return event.player != player;
				},
				content() {
					trigger.player.storage.mie2 = get.time();
				},
				group: ['SE_mieshi2', 'SE_mieshi3', 'SE_mieshi4'],
			};
			//—————————————————————————————————————————————————————————————————————————————解构魔改本体函数
			const mogai = function () {
				lib.element.player.dyingResult = async function (source) {
					const player1 = this;
					game.log(player1, '濒死');
					_status.dying.unshift(player1);
					for (const i of game.players) {
						const result = await i
							.chooseToUse({
								filterCard(card, player, event) {
									return lib.filter.cardSavable(card, player, player1);
								},
								filterTarget(card, player, target) {
									if (!card || target != player1) {
										return false;
									}
									const info = get.info(card);
									if (!info.singleCard || ui.selected.targets.length == 0) {
										const mod1 = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
										if (mod1 == false) {
											return false;
										}
										const mod2 = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
										if (mod2 != 'unchanged') {
											return mod2;
										}
									}
									return true;
								},
								prompt: get.translation(player1) + '濒死,是否帮助？',
								ai1() {
									return 1;
								},
								ai2() {
									return get.attitude(player1, i);
								},
								type: 'dying',
								targetRequired: true,
								dying: player1,
							})
							.forResult();
						if (result?.bool) {
							_status.dying.remove(player1);
							break;
						}
					}
					if (_status.dying.includes(player1)) {
						await player1.die({ source: source });
					}
					return player1;
				}; //濒死结算
				lib.element.player.yinni = function () {
					const player = this;
					player.storage.rawHp = player.hp;
					player.storage.rawMaxHp = player.maxHp;
					if (player.skills.length) {
						if (!player.hiddenSkills) {
							player.hiddenSkills = [];
						}
						for (const i of player.skills.slice()) {
							player.removeSkill(i);
							player.hiddenSkills.add(i);
						}
					}
					player.classList.add('unseen');
					player.name = 'unknown';
					player.sex = 'male';
					player.storage.nohp = true;
					player.node.hp.hide();
					player.addSkill('g_hidden_ai');
					player.hp = 1;
					player.maxHp = 1;
					player.update();
					return player;
				}; //隐匿函数
				lib.element.player.qreinit = function (name) {
					const player = this;
					const info = lib.character[name];
					player.name1 = name;
					player.name = name;
					player.sex = info.sex;
					player.changeGroup(info.group, false);
					for (const i of info.skills) {
						player.addSkill(i);
					}
					player.maxHp = get.infoMaxHp(info.maxHp);
					player.hp = player.maxHp;
					game.addVideo('reinit3', player, {
						name: name,
						hp: player.maxHp,
						avatar2: player.name2 == name,
					});
					player.smoothAvatar(false);
					player.node.avatar.setBackground(name, 'character');
					player.node.name.innerHTML = get.translation(name);
					player.update();
					return player;
				}; //变身
				lib.element.player.quseCard = async function (card, targets, cards) {
					const player = this;
					if (typeof card == 'string') {
						card = { name: card };
					}
					const name = card.name;
					const info = lib.card[name];
					if (!cards) {
						cards = [card];
					}
					const skill = _status.event.skill;
					if (info.contentBefore) {
						const next = game.createEvent(name + 'ContentBefore', false);
						if (next.parent) {
							next.parent.stocktargets = targets;
						}
						next.targets = targets;
						next.card = card;
						next.cards = cards;
						next.player = player;
						next.skill = skill;
						next.type = 'precard';
						next.forceDie = true;
						await next.setContent(info.contentBefore);
					}
					if (!info.multitarget) {
						for (const target of targets) {
							if (target && target.isDead()) return;
							if (info.notarget) return;
							const next = game.createEvent(name, false);
							if (next.parent) {
								next.parent.directHit = [];
							}
							next.targets = targets;
							next.target = target;
							next.card = card;
							if (info.type == 'delay') {
								next.card = {
									name: name,
									cards: cards,
								};
							}
							next.cards = cards;
							next.player = player;
							next.type = 'card';
							next.skill = skill;
							next.baseDamage = Math.max(numberq1(info.baseDamage));
							next.forceDie = true;
							next.directHit = true;
							await next.setContent(info.content);
						}
					} else {
						if (info.notarget) return;
						const next = game.createEvent(name, false);
						if (next.parent) {
							next.parent.directHit = [];
						}
						next.targets = targets;
						next.target = targets[0];
						next.card = card;
						if (info.type == 'delay') {
							next.card = {
								name: name,
								cards: cards,
							};
						}
						next.cards = cards;
						next.player = player;
						next.type = 'card';
						next.skill = skill;
						next.baseDamage = Math.max(numberq1(info.baseDamage));
						next.forceDie = true;
						next.directHit = true;
						await next.setContent(info.content);
					}
					if (info.contentAfter) {
						const next = game.createEvent(name + 'ContentAfter', false);
						next.targets = targets;
						next.card = card;
						next.cards = cards;
						next.player = player;
						next.skill = skill;
						next.type = 'postcard';
						next.forceDie = true;
						await next.setContent(info.contentAfter);
					}
					return player;
				}; //解构用牌
				lib.element.player.qrevive = function () {
					const player = this;
					if (player.parentNode != ui.arena) {
						ui.arena.appendChild(player);
					} //防止被移除节点
					player.classList.remove('removing', 'hidden', 'dead');
					game.log(player, '复活');
					player.maxHp = Math.max(lib.character[player.name]?.maxHp || 0, player.maxHp || 0);
					player.hp = player.maxHp;
					game.addVideo('revive', player);
					player.removeAttribute('style');
					player.node.avatar.style.transform = '';
					player.node.avatar2.style.transform = '';
					player.node.hp.show();
					player.node.equips.show();
					player.node.count.show();
					player.update();
					game.players.add(player);
					game.dead.remove(player);
					player.draw(Math.min(player.maxHp, 20));
					return player;
				}; //复活函数
				lib.element.player.zhenshang = function (num, source, nature) {
					const player = this;
					let str = '受到了';
					if (source) {
						str += `来自<span class='bluetext'>${source == player ? '自己' : get.translation(source)}</span>的`;
					}
					str += get.cnNumber(num) + '点';
					if (nature) {
						str += get.translation(nature) + '属性';
					}
					str += '伤害';
					game.log(player, str);
					const stat = player.stat;
					const statx = stat[stat.length - 1];
					if (!statx.damaged) {
						statx.damaged = num;
					} else {
						statx.damaged += num;
					}
					if (source) {
						const stat = source.stat;
						const statx = stat[stat.length - 1];
						if (!statx.damage) {
							statx.damage = num;
						} else {
							statx.damage += num;
						}
					}
					player.hp -= num;
					player.update();
					player.$damage(source);
					var natures = (nature || '').split(lib.natureSeparator);
					game.broadcastAll(
						function (natures, player) {
							if (lib.config.animation && !lib.config.low_performance) {
								if (natures.includes('fire')) {
									player.$fire();
								}
								if (natures.includes('thunder')) {
									player.$thunder();
								}
							}
						},
						natures,
						player
					);
					var numx = player.hasSkillTag('nohujia') ? num : Math.max(0, num - player.hujia);
					player.$damagepop(-numx, natures[0]);
					if (player.hp <= 0 && player.isAlive()) {
						player.dying({ source: source });
					}
					return player;
				}; //真实伤害
				lib.element.player.qequip = function (card) {
					const player = this;
					if (Array.isArray(card)) {
						for (const i of card) {
							player.qequip(i);
						}
					} else if (card) {
						if (card[card.cardSymbol]) {
							const owner = get.owner(card);
							const vcard = card[card.cardSymbol];
							if (owner) {
								owner.vcardsMap?.equips.remove(vcard);
							}
							player.vcardsMap?.equips.add(vcard);
						} else {
							const vcard = new lib.element.VCard(card);
							const cardSymbol = Symbol('card');
							card.cardSymbol = cardSymbol;
							card[cardSymbol] = vcard;
							player.vcardsMap?.equips.push(vcard);
						}
						player.node.equips.appendChild(card);
						card.style.transform = '';
						card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
						const info = lib.card[card.name];
						if (info && info.skills) {
							for (const i of info.skills) {
								player.addSkillTrigger(i);
							}
						}
					}
					return player;
				};
				lib.element.player.qdie = function (source) {
					const player = this;
					player.qdie1(source);
					player.qdie2(source);
					player.qdie3(source);
					return player;
				}; //可以触发死亡相关时机,但是死亡无法避免//直接正常堆叠事件即可.如果await每个qdie123事件,那么外部就必须await qdie了,否则就卡掉
				lib.element.player.qdie1 = function (source) {
					const player = this;
					const next = game.createEvent('diex1', false);
					next.source = source;
					next.player = player;
					next._triggered = null;
					next.setContent(async function (event, trigger, player) {
						await event.trigger('dieBefore');
						await event.trigger('dieBegin');
					});
					return next;
				}; //触发死亡前相关时机//不能用async,不然会卡掉后续事件,不能await那个setcontent
				lib.element.player.qdie2 = function (source) {
					const player = this;
					const next = game.createEvent('diex2', false);
					next.source = source;
					next.player = player;
					next._triggered = null;
					next.restMap = { type: null, count: null, audio: null };
					next.excludeMark = [];
					next.setContent('die');
					return next;
				}; //斩杀
				lib.element.player.qdie3 = function (source) {
					const player = this;
					const next = game.createEvent('diex3', false);
					next.source = source;
					next.player = player;
					next._triggered = null;
					next.setContent(async function (event, trigger, player) {
						await event.trigger('dieEnd');
						await event.trigger('dieAfter');
					});
					return next;
				}; //触发死亡后相关时机
			}; //解构魔改本体函数
			mogai();
			lib.skill.SE_mieshi4 = {
				audio: 2,
				trigger: { player: 'phaseBegin' },
				forced: true,
				_priority: 5,
				content() {
					player.storage.SE_mieshi++;
					player.markSkill('SE_mieshi');
					if (player.storage.SE_mieshi >= 10) {
						player.storage.SE_mieshi = 0;
						player.unmarkSkill('SE_mieshi');
						for (var i of game.players) {
							i.dyingResult(player);//QQQ
						}
					}
				},
				ai: {
					threaten: 10,
				},
			};
			lib.skill.SE_mieshi3 = {
				audio: 2,
				trigger: { global: 'phaseAfter' },
				forced: true,
				filter(event, player) {
					return typeof event.player.storage.mie == 'number' && event.player.storage.mie > 10000;
				},
				content() {
					'step 0';
					player.line(trigger.player, 'thunder');
					player.storage.SE_mieshi += Math.ceil(trigger.player.storage.mie / 10000);
					player.markSkill('SE_mieshi');
					if (player.storage.SE_mieshi >= 10) {
						player.storage.SE_mieshi = 0;
						player.unmarkSkill('SE_mieshi');
						for (var i of game.players) {
							if (i == player) continue;
							i.hp = 0;
							i.update();
							const next = game.createEvent('dying', false);
							next.player = i;
							next.reason = 'changeHp';
							next._trigger = trigger;
							next.setContent(lib.element.content.dying)
						}//QQQ
					}
					delete trigger.player.storage.mie;
				},
			};
			lib.skill.SE_mieshi2 = {
				trigger: { global: 'phaseEnd' },
				forced: true,
				silent: true,
				popup: false,
				filter(event, player) {
					return typeof event.player.storage.mie2 == 'number';
				},
				content() {
					trigger.player.storage.mie = get.time() - trigger.player.storage.mie2;
					delete trigger.player.storage.mie2;
				},
			};
			lib.skill.SE_cuojue3 = {
				audio: 2,
				trigger: { player: 'useCard' },
				filter(event, player) {
					var targets = [];
					for (var i of game.players) {
						if (i != _status.event.dying) continue;
						targets.push(i);
					}
					if (targets.length) return false;
					if (event.card.name == 'tao' || event.card.name == 'taoyuan') return true;
					return false;
				},
				forced: true,
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					player.loseHp();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'tao' || card.name == 'taoyuan') {
								if (!_status.event.dying) {
									return [0, 0];
								}
							}
						},
					},
				},
			};
			lib.skill.SE_cuojue2 = {
				trigger: { global: 'phaseAfter' },
				filter(event, player) {
					return player.storage.SE_cuojue > 0;
				},
				forced: true,
				silent: true,
				popup: false,
				content() {
					player.storage.SE_cuojue = 0;
					if (player.storage.cuo) {
						player.storage.cuo = false;
					}
				},
			};
			lib.skill.SE_cuojue = {
				audio: 2,
				trigger: { global: 'useCard' },
				filter(event, player) {
					var targets = [];
					for (var i of game.players) {
						if (i != _status.event.dying) continue;
						targets.push(i);
					}
					if (targets.length) return false;
					if ((event.card.name == 'tao' || event.card.name == 'taoyuan') && event.player != player) return true;
					return false;
				},
				forced: true,
				content() {
					'step 0';
					player.storage.SE_cuojue++;
					player.judge(function (card) {
						if (get.color(card) == 'black') return -1;
						if (get.color(card) == 'red') return 1;
					});
					('step 1');
					if (result.color == 'black') {
						trigger.untrigger();
						trigger.finish();
						player.loseHp();
						if (player.storage.SE_cuojue >= 3 && !player.storage.cuo) {
							player.loseMaxHp();
							player.storage.cuo = true;
						}
					} else {
						if (player.storage.SE_cuojue >= 3 && !player.storage.cuo) {
							player.loseMaxHp();
							player.storage.cuo = true;
						}
						event.finish();
					}
				},
				group: ['SE_cuojue2', 'SE_cuojue3'],
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'tao' || card.name == 'taoyuan') {
								if (!_status.event.dying) {
									return [2, 2];
								}
							}
						},
					},
				},
			};
			lib.skill.SE_moyou = {
				audio: 2,
				trigger: { player: ['loseHpBefore', 'loseMaxHpBefore', 'damageBefore'] },
				forced: true,
				_priority: 10,
				filter(event, player) {
					if (event.parent.name == 'SE_cuojue') return false;
					if (event.parent.name == 'SE_cuojue3') return false;
					return true;
				},
				content() {
					trigger.untrigger();
					trigger.finish();
				},
			};
			lib.translate.zha = '渣';
			(lib.translate.zhaColor = '#D6ECF0'), (lib.translate.shen = '神');
			lib.translate.ming = '冥';
			lib.translate.mo = '魔';
			lib.translate.sheng = '圣';
			(lib.translate.shengColor = '#DCB9DF'), (lib.translate.mingColor = '#808080'), (lib.translate.moColor = '#808080'), (lib.translate.shenColor = '#000000'), (lib.translate.mengColor = '#DFB9CF'), (lib.translate.meng = '萌');
			lib.translate.SE_Yirong = '易容';
			lib.translate.SE_Yirong_info = '回合开始时,出牌阶段开始时,弃牌阶段开始时,你可以声明当前游戏支持的武将包中的一个锁定技,你获得此锁定技直到下一次声明';
			lib.translate.se_youhuo = '诱惑';
			lib.translate.se_youhuo_info = '出牌阶段限一次,你可以弃置一张手牌并指定一名角色,令其选择一项:1、令你允许的参战角色各获得其一张牌.2、失去一点体力并令你回复一点体力';
			lib.translate.SE_linggong = '灵弓';
			lib.translate.SE_linggong_info = '出牌阶段限1次,你可将一张大于等于你体力点数的牌当【万箭齐发】使用';
			lib.translate.se_cibei = '慈悲';
			lib.translate.se_cibei_info = '其他人的回合开始时,若你已受伤,你可以将你的手牌弃置到1张(以此法弃置的牌至少2张),该名角色本回合无法使用或打出卡牌且手牌上限为1';
			lib.translate.se_jiujiqiyuan = '救世的祈愿';
			lib.translate.se_jiujiqiyuan_info = '当你的体力为4或者更低时,你变身为【太虚之神】并立即开始回合';
			lib.translate.SE_yinguo = '因果•箭矢•极';
			lib.translate.SE_yinguo_info = '你使用的锦囊牌结算效果时,你可以防止此次结算改为每有1个目标就可以对涉及的目标使用1张【万箭齐发】(万箭齐发不触发效果)且该【万箭齐发】无视防具,你造成的伤害和你受到的伤害均没有来源,使用的卡牌次数无限制且无距离限制,基本牌和非延时锦囊至多指定你当前体力值加一的目标';
			lib.translate.SE_yuanhuan = '圆环领域';
			lib.translate.SE_yuanhuan_info = '出牌阶段限1次,若你已受伤,你可以选择至多x名角色令其无法打出或使用卡牌直到下个你的回合(x为你已损失的体力值),除你以外的角色不能回复体力、得到体力上限';
			lib.translate.SE_chongzu = '世界重组';
			lib.translate.SE_chongzu_info = '当你第一次死亡阶段开始时.你防止之将体力回复至体力上限你摸四张牌,此时场上若有死亡角色令他们复生,最后你失去【世界重组】和【圆环领域】技能并获得技能【太虚创世纪】开始你的回合';
			lib.translate.SE_taixu = '太虚创世纪';
			lib.translate.SE_taixu_info = '当你的体力值为2或者更低时,你的回合外其他角色不能使用或打出卡牌且技能失效直到你的回合开始,除你以外的角色不能回复体力、得到体力上限';
			lib.translate.SE_caozong = '记忆操纵';
			lib.translate.SE_caozong_info = '回合结束阶段,若游戏人数大于3,你指定一名敌人令其进入疯癫状态(不受对方控制,并将队友视为敌人)直到你的下一回合开始';
			lib.translate.SE_wuyu = '虚假物语';
			lib.translate.SE_wuyu2 = '虚假物语';
			lib.translate.SE_wuyu3 = '虚假物语';
			lib.translate.SE_wuyu4 = '虚假物语';
			lib.translate.SE_wuyu5 = '虚假物语';
			lib.translate.SE_wuyu6 = '虚假物语';
			lib.translate.SE_wuyu_info = '当你成为成为其他角色的卡牌目标且目标只有你时,你令除卡牌使用者和你以外的其他角色都成为目标(延时锦囊牌判定牌会落入最后1名目标的判定区里),每当你受到伤害时,若有伤害来源对其造成等量的伤害,若没有对除你以外的其他角色造成等量的伤害,当你流失体力、失去体力上限时,令其他角色流失、失去等量的体力或者体力上限,每当除你以外的角色回复体力时,你回复等量的体力,你使用的基本牌或者非延时锦囊可以额外对目标再使用一次';
			lib.translate.SE_NoeSIS = 'NoeSIS';
			lib.translate.SE_NoeSIS_info = '1名除你以外的角色死亡时,你获得其所有体力上限和技能,并令其无法重整';
			lib.translate.SE_duansheng = '断生';
			lib.translate.SE_duansheng2 = '断生';
			lib.translate.SE_duansheng_info = '每当你的装备区发生变化时,你选择1名目标令其受到你和其装备数目之差的伤害';
			lib.translate.SE_chuanjiao = '传教';
			lib.translate.SE_chuanjiao2 = '传教';
			lib.translate.SE_chuanjiao_info = '1名除你以外的角色摸牌阶段开始时,你可以防止之,改为亮出牌堆顶的四张牌,你选择其中两张令该名角色获得,你可以从剩下的牌中选择1张获得之,你也可以选择不获得(其余牌进入弃牌堆),令该名角色获得1枚"教"标记,拥有"教"标记的角色使用卡牌选择你为目标时,你可以取消之,清除其拥有的"教"标记,1名角色回合结束后,清除其所有的"教"标记';
			lib.translate.SE_guohuang = '果皇';
			lib.translate.SE_guohuang_info = '锁定技,每当其他角色回合内使用主动技时,终止当前一切结算,当前角色回合结束,你的技能不可复制、无效、删除,除你以外拥有果皇技能的角色立即死亡';
			lib.translate.SE_LoveLive = 'LoveLive';
			lib.translate.SE_LoveLive_info = '你的回合结束,给你放置1个"LL"标记,当标记数量为9时,强制你获得胜利';
			lib.translate.SE_zhansha = '斩杀推理';
			lib.translate.SE_zhansha_info = '每当1名角色(不为你)的锦囊牌指定了1名或多名目标时,你可以依次对其(使用者)造成1点伤害(此伤害不触发任何技能),你摸x张牌(x为目标数量),除你以外其他角色回合内使用的锦囊牌次数至多为1,任意1名角色的回合结束,若你手中无锦囊牌,你列出所有锦囊牌并从中获取两张';
			lib.translate.SE_wuyuzhiye = '雾雨之夜';
			lib.translate.SE_wuyuzhiye_info = '当你进入濒死状态时,若你手中有锦囊牌,你可以展示你的手牌回复x点体力(x为你拥有的锦囊牌个数)并对除你以外的角色造成x点伤害(x为你拥有的锦囊牌个数且此伤害不触发任何技能),最后你弃置所有展示的锦囊牌';
			lib.translate.SE_benjingfaze = '本境法则';
			lib.translate.SE_benjingfaze_info = '当你成为卡牌目标且目标只有你时,你可以进行1次判定,若结果不为♠️️则取消之,你令来源收回此牌,若结果为♠️️,你可以摸1张牌';
			lib.translate.SE_shouling = '守灵';
			lib.translate.SE_shouling_info = '锁定技,当你的手牌数不足2时,你摸牌补至2张';
			lib.translate.SE_yuanzhou = '怨咒';
			lib.translate.SE_yuanzhou_info = '锁定技,因为你造成的伤害使得一名角色体力小于1时,跳过濒死判定,该名角色直接死亡';
			lib.translate.SE_yuhuo = '狱火';
			lib.translate.SE_yuhuo_info = '锁定技,你的回合结束时,你令其他角色受到你造成的1点火焰伤害';
			lib.translate.SE_xianshi = '现世';
			lib.translate.SE_xianshi_info = '当你体力值低于2或者更低时,你变身为地狱少女并立即开始回合';
			lib.translate.SE_yindao = '引导';
			lib.translate.SE_yindao_info = '锁定技,当你的手牌数不足4时,你摸牌补至4张';
			lib.translate.SE_shapo = '杀魄';
			lib.translate.SE_shapo_info = '锁定技,你的回合结束阶段,除你以外的角色减少1点体力上限';
			lib.translate.SE_wanghun = '亡魂';
			lib.translate.SE_wanghun_info = '在你的出牌阶段,你可以选择1名角色令其失去所有技能,若如此做你失去技能【亡魂】';
			lib.translate.SE_chaodu = '超渡';
			lib.translate.SE_chaodu_info = '你的出牌阶段限1次,你可以指定1名已受伤的角色令其死亡,你受到1点火焰伤害';
			lib.translate.SE_mingwang = '冥王';
			lib.translate.SE_mingwang2 = '冥王•火杀';
			lib.translate.SE_mingwang3 = '冥王•无懈';
			lib.translate.SE_mingwang_info = '你不会死亡直到归狱标记清零为止,你的牌可以按以下规则打出:黑色牌当【无懈可击】,红色牌当作火焰伤害的【杀】';
			lib.translate.SE_guiyu = '归狱';
			lib.translate.SE_guiyu_info = '变身后,你的6个回合后结束阶段,你失去冥王技能立即死亡';
			lib.translate.SE_wangzhe = '亡者世界';
			lib.translate.SE_wangzhe_info = '锁定技,所有角色没有摸牌和弃牌阶段';
			lib.translate.SE_zhouye = '昼夜';
			lib.translate.SE_zhouye_info = '锁定技,准备阶段开始时,你弃所有"夜"标记,将牌堆顶的一张牌置入弃牌堆,若为黑色,你获得一枚"夜"标记.若你没有"夜"标记,你不能使用【杀】';
			lib.translate.SE_hongwu = '红雾';
			lib.translate.SE_hongwu_info = '出牌阶段,若你没有"夜"标记,你可以弃置两张红色牌,获得一枚<夜>标记';
			lib.translate.SE_shenqiang = '神枪';
			lib.translate.SE_shenqiang_info = '出牌阶段,若你有"夜"标记,你可以弃置一张♥️️牌或武器牌,对一名其他角色造成1点伤害';
			lib.translate.SE_yewang = '夜王';
			lib.translate.SE_yewang_info = '锁定技,若你有"夜"标记,你至多受到1点伤害(伤害为1时伤害减1,不为1只能受到1点伤害)';
			lib.translate.SE_shujucunchu = '数据存储';
			lib.translate.SE_shujucunchu_info = '其他角色回合结束后,若你区域内至少1个区域有牌(手牌,装备区,判定区),你可以弃置该区域内所有牌,并将该名角色相同区域内的牌背面朝上置于你的武将牌上,称为"存"';
			lib.translate.SE_shujuduxie = '数据读写';
			lib.translate.SE_shujuduxie_info = '你的回合开始,若你武将牌上有牌,你须选择1、获得武将牌上所有牌;2将武将牌上所有牌交给1名角色,你摸等量的牌';
			lib.translate.SE_shujuqingkong = '数据清空';
			lib.translate.SE_shujuqingkong_info = '当你不是因数据存储而失去某个区域内的最后1张牌时,场上其他角色须将该区域的牌全部弃置(不触发任何技能)';
			lib.translate.SE_shujufenpei = '数据分配';
			lib.translate.SE_shujufenpei_info = '在你的出牌阶段,你可以将场上角色(不为你)的一项技能移至给另1名角色,你可以重复这个过程,每次分配你获得1枚标记,最终结算时,你须流失标记数量一半的体力';
			lib.translate.SE_mushou = '墓守';
			lib.translate.SE_mushou_info = '你的出牌阶段,你可以选择1名已死亡的角色复活,若如此做,你失去【墓守】并获得技能【超渡】';
			lib.translate.SE_shoucang = '收葬';
			lib.translate.SE_shoucang_info = '锁定技,每当有角色死亡时视为你杀害他,你增加1点体力上限,若此时你手牌有牌,则你摸牌(你摸牌的数量等于手牌数)';
			lib.translate.SE_lingyu = '领域';
			lib.translate.SE_lingyu_info = '每当你需要打出一张【闪】时,你可以进行1次判定,若结果为基本牌,视为你打出了一张【闪】';
			lib.translate.SE_shouren = '手刃•雷杀';
			lib.translate.SE_shouren2 = '手刃•火杀';
			lib.translate.SE_shouren3 = '手刃';
			lib.translate.SE_shouren4 = '手刃';
			lib.translate.SE_shouren_info = '你的黑色牌可以视为具有雷电属性的【雷杀】,你的红色牌可以视为具有火焰属性的【火杀】,你的【雷杀】不可闪避,你的【火杀】伤害加1';
			lib.translate.SE_yinsu = '音速';
			lib.translate.SE_yinsu_info = '你的回合开始和回合结束时,你可以对1名角色视为使用了1张【雷杀】,且该【杀】无视防具';
			lib.translate.SE_yaoshen = '妖神';
			lib.translate.SE_yaoshen_info = '你的出牌阶段限1次,你指定1名角色并弃置和该名角色手牌同等数量的牌,获得目标角色所有手牌,并对其造成x点雷电伤害(x为你从该名角色手中获得的手牌数量)';
			lib.translate.SE_jixian = '极仙';
			lib.translate.SE_jixian_info = '锁定技,发牌阶段结束后,你受到1点雷电伤害随机选择1名角色,你获得其所有手牌';
			lib.translate.SE_linglei = '灵雷';
			lib.translate.SE_linglei_info = '除你以外的角色回合结束时,若其体力大于2,你可以进行1次判定,结果若为基本牌,该角色受到1点雷电伤害,你摸2张牌,结果若为延时锦囊牌,该角色受到2点雷电伤害,你摸1张牌,结果若为装备牌,该角色受到1点雷电伤害,你弃置所有手牌,结果若为非延时锦囊牌,该角色受到等同于你手牌数的雷电伤害,你回复1点体力获得1点体力上限';
			lib.translate.SE_yaohuo = '妖惑';
			lib.translate.SE_yaohuo_info = '锁定技,每当有其他角色使用或者打出一张基本牌时,那张牌不进入弃牌堆,你获得之,若你的体力为2或者更少,每当有角色使用或打出牌后,你立即获得之';
			lib.translate.SE_shenzi = '神姿';
			lib.translate.SE_shenzi_info = '任意1名角色判定结束之前,你可以打出场上任意1张牌代替判定结果的牌';
			lib.translate.SE_fanjianziran = '繁简自然';
			lib.translate.SE_fanjianziran_info = '每当你使用或打出1张牌时,你选择1名目标令其进行1次判定,结果若为红色你令其手牌数和你相等,若为黑色你对其造成1点雷电伤害';
			lib.translate.SE_sishengyimmeng = '死生亦梦';
			lib.translate.SE_sishengyimmeng_info = '每当有角色进入濒死状态时,你可以令其进行1次判定,若结果为红色,其回复1点体力,若为黑色令其立即死亡';
			lib.translate.SE_chaidao = '柴刀';
			lib.translate.SE_chaidao_info = '锁定技,你的回合开始或者回合结束阶段,若你区域内有牌,你须弃置1张,随机选取1名角色,令其展示所有手牌,若其中有【杀】,你获得之且该名角色须选择1张手牌弃置,没有【杀】时受到你造成的1点火焰伤害';
			lib.translate.SE_kuangbao = '狂暴';
			lib.translate.SE_kuangbao_info = '每当你造成1点伤害进行1次判定,若结果为【♥️️】,你对其造成1点火焰伤害(判定继续),若结果为【♠️️】,该名角色须弃置所有【闪】你回复1点体力,结果为【♣️️】,该名角色须弃置所有【杀】并失去1点体力,当结果为【♦️️】时,该名角色翻面,你获得1点体力上限';
			lib.translate.SE_nixing = '逆行';
			lib.translate.SE_nixing_info = '锁定技,每当你受到1次伤害后,当前回合结束,立即开始你的回合';
			lib.translate.SE_guishen = '鬼神♦️️︎';
			lib.translate.SE_guishen2 = '鬼神♣️️︎';
			lib.translate.SE_guishen3 = '鬼神♠️️︎';
			lib.translate.SE_guishen4 = '鬼神♥️️︎';
			lib.translate.SE_guishen_info = '你的牌按下列规则使用或打出:♥️️当【桃】,♦️️当作火焰伤害的【杀】,♣️️当【闪】,♠️️当【无懈可击】';
			lib.translate.SE_huaxiang = '华想•杀';
			lib.translate.SE_huaxiang2 = '华想•火杀';
			lib.translate.SE_huaxiang3 = '华想•雷杀';
			lib.translate.SE_huaxiang4 = '华想•无懈';
			lib.translate.SE_huaxiang5 = '华想•桃';
			lib.translate.SE_huaxiang6 = '华想•闪';
			lib.translate.SE_huaxiang7 = '华想';
			lib.translate.SE_huaxiang_info = '当你需要使用或打出一张基本牌或【无懈可击】时,你可以选择一张与你人物牌上的任何一张牌花色均不同的手牌声明之(若体力上限大于3,不能声明【闪】;若体力上限大于2,不能声明【桃】;若体力上限大于1,不能声明【无懈可击】),你视为使用或打出了一张你声明的牌(选择的手牌在你使用或打出后置于你的武将牌上,称为>虹<)';
			lib.translate.SE_caiyu = '彩雨';
			lib.translate.SE_caiyu_info = '一名角色的结束阶段开始时,若你的人物牌上有不少于四张>虹<,你可以将所有>虹<置入弃牌堆,摸两张牌,你可以选择失去1点体力上限';
			lib.translate.SE_xuanlan = '绚烂';
			lib.translate.SE_xuanlan_info = '若你未受伤,你跳过弃牌阶段';
			lib.translate.SE_baibian = '百变';
			lib.translate.SE_baibian2 = '百变';
			lib.translate.SE_baibian_info = '锁定技,你的手牌上限为52.准备阶段开始时,你需失去所有<百变>和<库洛>以外的技能;若你的体力上限大于6,将你的体力上限设定为6;若你的体力上限小于3,将你的体力上限设定为3.你可以翻开牌堆顶X张牌(X为你失去的你的体力值*2),根据翻开的牌获得技能,获得这些手牌';
			lib.translate.SE_zhuoyan = '灼眼';
			lib.translate.SE_zhuoyan2 = '灼眼';
			lib.translate.SE_zhuoyan3 = '灼眼';
			lib.translate.SE_zhuoyan_info = '锁定技,你即将造成的伤害均视为火焰伤害,每当你造成1次伤害可以弃置该名角色的1张手牌,你防止火焰伤害改为摸等量张牌';
			lib.translate.SE_shenpan = '审判';
			lib.translate.SE_shenpan_info = '出牌阶段限一次,你可以弃置三张不同类别的牌,对至多三名角色各造成一点伤害,分别弃置他们1张牌';
			lib.translate.SE_duanzui = '断罪';
			lib.translate.SE_duanzui_info = '锁定技,回合结束时,若除你以外的其他角色有手牌且小于3,你对其造成3-x的火焰伤害(x为其现有手牌数)';
			lib.translate.SE_zhenlizhimeng = '真理之门';
			lib.translate.SE_zhenlizhimeng_info = '除你以外的角色回合结束时,可以令其进行1次判定,获得以下效果:【♥️️】,该名角色受到1点火焰伤害摸两张牌,【♠️️】,该名角色弃置所有牌进入濒死状态,【♣️️】该名角色立即死亡,若你当前体力不为1,你须将体力流失到1,【♦️️】,无事发生';
			lib.translate.SE_xieyan = '邪眼';
			lib.translate.SE_xieyan2 = '邪眼';
			lib.translate.SE_xieyan_info = '你的回合内,每当你使用牌时,你可以指定1名角色(不为你),将他的区域内所有牌当做你的牌使用(一回合至多三次),你的回合外,每当你需要打出牌时,你可以指定1名角色(不为你),将他的手牌视为你的手牌打出';
			lib.translate.SE_duotian = '堕天';
			lib.translate.SE_duotian_info = '锁定技,除你以外一名角色的摸牌阶段结束后,你获得他所有手牌的镜像(复制)';
			lib.translate.SE_shenyu = '神域';
			lib.translate.SE_shenyu_info = '除你以外的角色回合开始时,若其体力不小于3,你可以令其所有技能失效,你获得其所有技能,在该名角色摸牌阶段时,若其体力不大于2,该名角色所有技能回复你失去从该名角色那里获得的所有技能';
			lib.translate.SE_xianjing = '仙境';
			lib.translate.SE_xianjing2 = '仙境';
			lib.translate.SE_xianjing_info = '你的摸牌阶段结束后,你可以选择任意张手牌和弃牌堆里的牌交换,你的弃牌阶段开始时你可弃置任意张牌将弃牌堆中等量的牌交给1名角色(该名角色无法拒绝分牌且在该名角色获得牌之前你可以先令其流失1点体力,若弃置的牌中有基本牌则你回复1点体力摸1张牌),你可以查看弃牌堆中的牌选择1张获得并立即使用之(不使用直接进入弃牌堆)';
			lib.translate.SE_mengxian = '梦现';
			lib.translate.SE_mengxian2 = '梦现';
			lib.translate.SE_mengxian_info = '每当你成为其他角色卡牌目标时,若此时弃牌堆中同名卡(该名角色使用的牌)的数量大于1,你可以选择其中1张获得之并令该名角色摸1张牌取消该牌效果,你可以选择任意名目标(不包括你)令他们各摸1张牌,若因此目标手牌数大于其当前体力时,你对其造成1点伤害;每当你使用1张基本牌时,你可以再弃置与该牌名称相同的1张手牌,令场上所有角色各摸1张牌,若因此有角色手牌数大于其当前体力时(不为你),对其造成1点伤害';
			lib.translate.SE_hougong = '后宫';
			lib.translate.SE_hougong2 = '后宫';
			lib.translate.SE_hougong_info = '每1名女性角色回合开始,须交给你两张牌该名角色摸1张牌,每当有女性角色受到伤害时,你防止之你受到1点伤害并令你和她各摸1张牌展示之';
			lib.translate.SE_haochuan = '好船';
			lib.translate.SE_haochuan_info = '锁定技,当你进入频死状态时,若此时你的武将牌未翻面,你将体力回复至体力上限并立即开始你的回合,你失去【好船】技能,直到回合结束你获得技能【乱武】,最后将你的武将牌翻面';
			lib.translate.SE_guiyin = '鬼隐';
			lib.translate.SE_guiyin_info = '每当你成为卡牌目标后,你可令来源获得1枚"鬼"标记(可以是你),1个玩家至多拥有2枚"鬼"标记';
			lib.translate.SE_shenyin = '神隐';
			lib.translate.SE_shenyin3 = '神隐';
			lib.translate.SE_shenyin_info = '场上玩家所拥有的"鬼"标记数量使你获得以下效果 球棒:1枚,你与其他人的距离-2 幻视:3枚,你的回合开始,若有玩家在你攻击范围内且"鬼"标记数量小于2,你令其获得1枚"鬼"标记 L5:5枚.你的回合结束,你可以选择1项:1、弃置场上所有"鬼"标记并对所拥有的玩家造成等量的伤害;2、弃置场上所有"鬼"标记你摸等量的牌';
			lib.translate.SE_wudi = '武帝';
			lib.translate.SE_wudi_info = '锁定技,游戏开始,你获得1枚武帝印记,每当你打出或使用【杀】或【决斗】时,你增加1枚武帝印记';
			lib.translate.SE_daoxin = '道心';
			lib.translate.SE_daoxin2 = '道心';
			lib.translate.SE_daoxin4 = '道心';
			lib.translate.SE_daoxin_info = '根据你的武帝印记数量你获得以下效果: 2枚及其以上,【杀】或【决斗】对你造成伤害减1 4枚及其以上,你防止一切伤害、体力流失、体力上限减少,并改为回复1点体力,每防止1次你须弃置1枚武帝印记 你的【杀】或【决斗】至多可以指定相当于武帝印记数量的目标 6枚及其以上.你的回合开始之前,你可以弃置除你以外所有角色的全部卡牌并对他们造成1点雷电伤害,你弃置6枚武帝印记';
			lib.translate.SE_yinzhe = '隐者';
			lib.translate.SE_yinzhe_info = '锁定技,每当除你以外的角色回合开始时,你获得1枚"隐"标记,每有1个"隐"标记,你与其他人的距离加一,你的回合开始时,你将累计的距离清0';
			lib.translate.SE_kuilei = '冰冻傀儡';
			lib.translate.SE_kuilei2 = '冰冻傀儡';
			lib.translate.SE_kuilei3 = '冰冻傀儡•冻';
			lib.translate.SE_kuilei_info = '出牌阶段限一次,你可弃置任意张牌数,获得等量的冰冻傀儡标记(至多为4),每当你受到伤害时,防止此伤害,令伤害来源弃置所有杀(无杀弃置所有手牌),结算后你弃置一枚冰冻标记,并摸一张牌,在你的出牌阶段,你可以主动弃置1枚冰冻傀儡标记对1名目标造成当前标记减1的伤害';
			lib.translate.SE_mosha = '存在抹杀•生者';
			lib.translate.SE_mosha2 = '存在抹杀•死者';
			lib.translate.SE_mosha_info = '在你的出牌阶段限1次,若总游戏人数大于等于3,你指定1名角色将他移出游戏,你回复1点体力';
			lib.translate.SE_chuangzao = '存在创造';
			lib.translate.SE_chuangzao_info = '在你的出牌阶段限1次,若总游戏人数小于等于3,你随机抽取1名场外的角色,令他强制加入游戏,且势力变为【奴】(和你同势力并获得其所有技能),你失去1点体力上限';
			lib.translate.SE_zhushen = '主神';
			lib.translate.SE_zhushen_info = '游戏最初,你的势力变为【神】,其他所有势力变为【人】(你的敌人),你的体力上限增加为游戏人数的两倍,获得其他角色所有技能并令场上除你以外的角色技能失效(你的回合开始时若你的体力等于4或者更少,你失去获得的技能并令所有技能回复),你获得额外的1个回合,最后你失去【主神】技能';
			lib.translate.SE_lunhui = '轮回世界';
			lib.translate.SE_lunhui_info = '锁定技,每当有角色要死亡时,若其势力不为【奴】,你令其失去1点体力上限抵消此次死亡,将他的势力变为【奴】(和你同阵营)';
			lib.translate.SE_xieshen = '邪神';
			lib.translate.SE_xieshen2 = '邪神';
			lib.translate.SE_xieshen_info = '你不属于任何势力,你上场时你的身份不为任何一个只为【神】,其他角色的主动技使用时,你可以选择1名目标弃置X张牌(x为手牌数的一半)选择1、将技能发起者转移给目标2、终止结算;其他角色的触发技启动时,你可以选择1名目标弃置X张牌(x为手牌数的一半)选择1、将技能发起者转移给目标2、终止结算';
			lib.translate.SE_wanxing = '万形';
			lib.translate.SE_wanxing_info = '你的回合结束,你可以指定1名手牌数大于你的目标,直到他的回合结束,你进入"不可名状"状态(所有卡牌、技能对你无效)';
			lib.translate.SE_qiyuan = '祈愿•锦囊';
			lib.translate.SE_qiyuan2 = '祈愿';
			lib.translate.SE_qiyuan3 = '祈愿•基本';
			lib.translate.SE_qiyuan8 = '祈愿•基本';
			lib.translate.SE_qiyuan9 = '祈愿•锦囊';
			lib.translate.SE_qiyuan12 = '祈愿•锦囊';
			lib.translate.SE_qiyuan_info = '每当你需要使用或打出1张基本或者非延时锦囊时,你可以选择1名目标,展示其手牌,若该名角色手牌中拥有同类型的牌则该名角色须弃置所有同类型牌并摸等量的牌,若该名角色手牌没有同类型的牌则该名角色摸1张牌,视为你使用了该基本或者非延时锦囊牌(同类型的牌回合内至多使用你当前体力加一的次数且至多为4)其他角色判定阶段结束时,其须额外随机判定1张延时锦囊牌(该判定不能被无懈可击响应)';
			lib.translate.SE_xinyuan = '心愿';
			lib.translate.SE_xinyuan_info = '当你于弃牌阶段弃置了至少2张及其以上的牌时,你可以选择至多x名角色令他们各摸x张牌(x为你弃牌阶段弃置的张数)';
			lib.translate.SE_chengfo = '成佛';
			lib.translate.SE_chengfo_info = '锁定技,游戏开始,你获得20枚"成佛"标记,你的回合结束须减少1枚,每当有玩家死亡,你减少两枚,"成佛"标记为零时,你立即死亡';
			lib.translate.SE_youling = '幽灵';
			lib.translate.SE_youling2 = '幽灵';
			lib.translate.SE_youling_info = '锁定技,游戏开始你的体力上限变为0,你不能成为其他角色的卡牌目标,你防止一切体力的减少';
			lib.translate.SE_shiyuehshi = '十年十月十';
			lib.translate.SE_shiyuehshi_info = '锁定技,你的回合结束阶段,除你以外的角色减少1点体力上限';
			lib.translate.SE_huofu = '火符';
			lib.translate.SE_huofu_info = '出牌阶段限1次,你可以将1张红色锦囊牌当做流星火羽使用';
			lib.translate.SE_shuifu = '水符';
			lib.translate.SE_shuifu_info = '出牌阶段限1次,你可以指定任意1名目标,你弃置1张牌,令其回复1点体力,若其没有受伤则摸2张牌';
			lib.translate.SE_mufu = '木符';
			lib.translate.SE_mufu_info = '回合内,你使用杀的上限加1,伤害加1';
			lib.translate.SE_tufu = '土符';
			lib.translate.SE_tufu_info = '出牌阶段限1次,你可以指定任意1名目标,令其观看牌堆顶的三张牌,选择不为同一点数的牌获得之(其余牌进入弃牌堆)';
			lib.translate.SE_jinfu = '金符';
			lib.translate.SE_jinfu_info = '你的出牌阶段开始时,你指定任意1名目标,令其流失1点体力';
			lib.translate.SE_rifu = '日符';
			lib.translate.SE_rifu_info = '出牌阶段限1次,你可以弃置任意张数的红色手牌,选择至多x名角色(x为你弃置红色手牌的数目)令他们各受到1点火焰伤害,你回复1点体力';
			lib.translate.SE_yuefu = '月符';
			lib.translate.SE_yuefu2 = '月符';
			lib.translate.SE_yuefu3 = '月符';
			lib.translate.SE_yuefu_info = '你每使用一张黑色牌,可以进行一次判定,结果为♠️️,则你让其他角色各获得一枚【月】标记,当有月标记的人对你造成伤害时,你防止之,弃掉该角色的一枚【月】标记';
			lib.translate.SE_jiexian = '界线';
			lib.translate.SE_jiexian2 = '界线';
			lib.translate.SE_jiexian_info = '每当任意角色受到1点伤害,结算前,你可以弃置1张♥️️牌,若如此做,弃置该伤害,该角色回复1点体力,每当任意角色回复1点体力时,结算前,你可以弃置1张♠️️牌,若如此做,弃置该体力回复效果,该角色受到没有来源的1点伤害';
			lib.translate.SE_huotufu = '火土符';
			lib.translate.SE_huotufu_info = '出牌阶段限1次,你可以弃置两张红色锦囊牌,随机列出所有锦囊牌的清单,选定1名角色令其获得其中的四张';
			lib.translate.SE_shuihuofu = '水火符';
			lib.translate.SE_shuihuofu_info = '出牌阶段限1次,你可以弃置不同花色的手牌(至少2张)选择1名角色获得其等量张手牌,若你以此法弃置了四种花色不同的牌,则你选择的目标至多可以为4';
			lib.translate.SE_muhuofu = '木火符';
			lib.translate.SE_muhuofu_info = '出牌阶段限1次,你可以弃置两张红色手牌,若如此做视为你对其他所有角色使用了1张火杀且该杀无视防具';
			lib.translate.SE_huojinfu = '火金符';
			lib.translate.SE_huojinfu2 = '火金符';
			lib.translate.SE_huojinfu_info = '出牌阶段限1次,你指定1名目标后,每到该名角色回合开始阶段若其体力大于2,令其流失1点体力,当其体力第一次小于等于2时,该效果失效';
			lib.translate.SE_shuimuhu2 = '水木符';
			lib.translate.SE_shuimuhu = '水木符';
			lib.translate.SE_shuimuhu3 = '水木符';
			lib.translate.SE_shuimuhu_info = '出牌阶段限1次,你可以弃置任意张黑色手牌,令至多2名角色获得等量的【护】标记(目标不能是已有【护】标记的角色),拥有【护】标记的角色每当受到伤害时,令该伤害减1并回复1点体力,其弃置1枚【护】标记';
			lib.translate.SE_riyuefu2 = '日月符';
			lib.translate.SE_riyuefu = '日月符';
			lib.translate.SE_riyuefu_info = '每当你使用或打出1张红色牌时,令有手牌的其他角色各受到1点火焰伤害,每当你使用或打出1张黑色牌时,若场上除你以外至少1人有牌,你依次获得他们的1张手牌或者装备区的牌';
			lib.translate.SE_jinshuifu2 = '金水符';
			lib.translate.SE_jinshuifu3 = '金水符';
			lib.translate.SE_jinshuifu = '金水符';
			lib.translate.SE_jinshuifu_info = '出牌阶段限1次,你可以弃置任意张红色手牌,令除你以外的至多2名角色获得等量的【毒】标记(目标不能是已有【毒】标记的角色),拥有【毒】标记的角色每当回合开始时,失去1点体力上限,其弃置1枚【毒】标记,若其体力上限因此等于3或者更少时,清除其所拥有的所有【毒】标记(若此时有剩余的【毒】标记,该角色须弃置等量的牌)';
			lib.translate.SE_xijian = '隙间';
			lib.translate.SE_xijian2 = '隙间';
			lib.translate.SE_xijian_info = '1名除你以外的角色回合开始时,若其不再你的攻击范围内,你可以弃置1张♦️️牌并令其选择:1、交给你1张♠️️牌,2、受到没有来源的1点伤害;1名除你以外的角色回合结束时,若其在你攻击范围内,你可以弃置1张♣️️牌并令其选择:1、交给你1张♥️️牌,2、受到没有来源的1点伤害';
			lib.translate.SE_yuzhi = '蓬莱玉枝';
			lib.translate.SE_yuzhi2 = '蓬莱玉枝';
			lib.translate.SE_yuzhi_info = '出牌阶段限1次,你指定1名目标你选择1种卡牌种类,从目标手牌中展示1张牌,若种类和你声明的一致,目标立即死亡(对应此次死亡的技能不触发),当你进入濒死状态时,你宣言1种卡牌种类,从牌堆里亮出7张牌,每有1张和声明的同种类卡牌可以使你回复1点体力';
			lib.translate.SE_yongheng = '永恒';
			lib.translate.SE_yongheng2 = '永恒';
			lib.translate.SE_yongheng3 = '永恒';
			lib.translate.SE_yongheng_info = '你使用的基本牌或者非延时锦囊在结算完毕后,若不是你的最后1张牌(最后1张直接获得),你可以选择弃置1张手牌重新获得它,任何时候当你的手牌大于你的体力上限时,你须弃置到等同于你的体力上限的张数,并且受到1点伤害,你跳过你的弃牌阶段';
			lib.translate.SE_nanti = '难题';
			lib.translate.SE_nanti2 = '难题';
			lib.translate.SE_nanti_info = '游戏开始,你拥有【龙颈之玉】、【佛御石钵】,当你体力值降到4或者更低时,你减少1点体力上限获得【火鼠之裘】、【燕子安贝】,当你体力值降到2或者更低时,你减少1点体力上限获得【蓬莱玉枝】';
			lib.translate.SE_xuyu = '须臾';
			lib.translate.SE_xuyu_info = '除你以外的角色回合开始时,若其手牌大于你的体力,你可以跳过其整个回合并且该名角色需要将手牌弃置到和你体力数值相等';
			lib.translate.SE_longjing = '龙颈之玉';
			lib.translate.SE_longjing_info = '出牌阶段限1次,你指定1名目标从你手牌中随机选择1张卡牌让其猜测颜色,猜不中的场合,对其造成1点伤害';
			lib.translate.SE_foyu = '佛御石钵';
			lib.translate.SE_foyu_info = '出牌阶段限1次,你指定1名目标从1名随机角色的手牌中随机选择1张卡牌让其猜测种类,猜不中的场合,目标失去1点体力上限你回复1点体力';
			lib.translate.SE_huoshu = '火鼠之裘';
			lib.translate.SE_huoshu_info = '出牌阶段限1次,你指定1名目标从牌堆顶亮出1张牌之前让其猜测花色,猜不中的场合,你对其造成你和目标体力之差的伤害并让其选择两张手牌弃置';
			lib.translate.SE_yanzi = '燕子安贝';
			lib.translate.SE_yanzi_info = '出牌阶段限1次,你指定1名目标你从牌堆亮出2张牌之前中让其猜测卡牌的点数,若总点数小于等于选择的点数(2、4、6、8、10、13),令其体力减至1点并弃置所有手牌,若大于选择的点数令其受到1点伤害,你摸1张牌';
			lib.translate.SE_xianzhezhishi = '贤者之石';
			lib.translate.SE_xianzhezhishi_info = '你的出牌阶段限1次,你可以自由选取1名未上场角色的1项技能并获得之';
			lib.translate.SE_qiyao = '七曜';
			lib.translate.SE_qiyao_info = '任意1名角色受到伤害之前,你可以更改伤害的属性(火、雷、毒、无来源)';
			lib.translate.SE_xiaochuan = '哮喘';
			lib.translate.SE_xiaochuan_info = '锁定技,你受到的伤害、流失的体力均加1';
			lib.translate.SE_zhuxian = '诛仙';
			lib.translate.SE_zhuxian_info = '出牌阶段限一次,你可以指定任意名角色使其弃置其拥有的所有装备牌,所有指定的目标,皆受到你造成的一点伤害';
			lib.translate.SE_moyou = '魔佑';
			lib.translate.SE_moyou_info = '锁定技,你防止任何除错觉技能以外造成的伤害、体力流失,体力上限减少';
			lib.translate.SE_cuojue = '错觉';
			lib.translate.SE_cuojue3 = '错觉';
			lib.translate.SE_cuojue_info = '锁定技,濒死阶段外,【桃】或者【桃园结义】对你的效果改为流失1点体力,濒死阶段外,其他角色使用【桃】或者【桃园结义】时你须进行1次判定,若结果为黑色则视为对你使用,否则结算继续,其他角色回合内第三次使用了【桃】或者【桃园结义】时,你减少1点体力上限';
			lib.translate.SE_mieshi = '灭世';
			lib.translate.SE_mieshi4 = '灭世';
			lib.translate.SE_mieshi3 = '灭世';
			lib.translate.SE_mieshi_info = '锁定技,身份局里你的身份若不是主公则为反贼,每在你的回合开始阶段获得1个【灭】标记,其他角色在回合内每消耗10秒时间你获得等量的【灭】标记(向上取整),当【灭】标记为10或以上时,你弃置所有【灭】标记,令除你以外的所有角色进入濒死状态';
			lib.translate.SE_luxian = '戮仙';
			lib.translate.SE_luxian_info = '你造成一次伤害后,该受伤角色的手牌数大于其当前体力值时,你可以弃置其超出的所有牌,小于其当前体力值时对其造成1点伤害,等于时你摸1张牌';
			lib.translate.SE_xianxian = '陷仙';
			lib.translate.SE_xianxian_info = '出牌阶段限一次,你总共可以指定2名其他的角色,令这2名角色弃置4张不同花色的手牌(没有的花色牌则不弃),每有一名角色少弃置一种花色牌,你便可以摸一张牌,如果这两名角色弃置牌的总数,没有达到4张牌,则这2名角色各受到一点伤害';
			lib.translate.SE_juexian = '绝仙';
			lib.translate.SE_juexian2 = '绝仙';
			lib.translate.SE_juexian3 = '绝仙';
			lib.translate.SE_juexian_info = '出牌阶段限一次,你可以指定一名角色,使其亮出所有手牌,你可以选择,弃置其所有黑色手牌,或者红色手牌(选其1),选择弃置黑色手牌时,直到你下个回合开始,你造成的伤害皆不触发任何技能,选择弃置红色牌时,在你的回合内,若有角色血量降至0该角色跳过濒死状态直接死亡,你增加一点体力上限';
			lib.translate.SE_zhentu = '阵图';
			lib.translate.SE_zhentu_info = '锁定技,你不能成为锦囊牌的目标,且手牌上限至少为4';
			lib.translate.SE_qiyaomonv = '魔女';
			lib.translate.SE_qiyaomonv2 = '火土融合';
			lib.translate.SE_qiyaomonv3 = '水火融合';
			lib.translate.SE_qiyaomonv4 = '木火融合';
			lib.translate.SE_qiyaomonv5 = '火金融合';
			lib.translate.SE_qiyaomonv6 = '水木融合';
			lib.translate.SE_qiyaomonv7 = '金水融合';
			lib.translate.SE_qiyaomonv8 = '日月融合';
			lib.translate.SE_qiyaomonv_info = '你可以放弃摸牌阶段,改为获得技能【贤者之石】,或者宣言1种卡牌种类,亮出牌堆顶的7张牌,每有1张和你声明同种类的卡牌使你获得1项基本符文直到回合结束,你选取至多三张卡牌(必须和你声明的种类相同)获得之其余牌进入弃牌堆,若因此获得所有基本符文,你获得【贤者之石】 特殊融合符:火与土融合火土符、水与火融合水火符、木与火融合木火符、火与金融合火金符、水与木融合水木符、金与水融合金水符、日与月融合日月符,融合咒文不会消失,永久生效';
			lib.translate.SE_xuhuan = '虚幻';
			lib.translate.SE_xuhuan2 = '虚幻';
			lib.translate.SE_xuhuan_info = '每当你使用或弃置牌时,你指定1名不为你的玩家对其造成x点伤害(x为你使用或弃置的卡牌数量},每当你获得牌时,你可以进行判定,若结果牌为红色你摸1张牌,黑色则回复1点体力';
			lib.translate.SE_xinxianshi = '现实';
			lib.translate.SE_xinxianshi2 = '现实';
			lib.translate.SE_xinxianshi_info = '每当你受到伤害时,你可以防止之,并令来源摸等量的牌(没有来源或者来源死亡时不触发,伤害抵消有效),每当你造成伤害时,你可以选择:1、摸等量的牌;2、此伤害加倍';
			lib.translate.SE_qiulao = '次元囚牢';
			lib.translate.SE_qiulao_info = '当你死亡时,你可令场上所有的一切退回到游戏开始的第1回合初始状态';
			lib.translate.SE_fusheng = '缚绳';
			lib.translate.SE_fusheng_info = '出牌阶段你可将任意1张牌当【铁索连环】使用,但不能重铸';
			lib.translate.SE_xiusheng = '朽绳';
			lib.translate.SE_xiusheng_info = '回合结束阶段,你可以指定任意1名横置角色对其造成1点火焰伤害';
			lib.translate.SE_jiezhou = '解咒';
			lib.translate.SE_jiezhou2 = '解咒';
			lib.translate.SE_jiezhou_info = '摸牌阶段开始时,你可以选择只摸1张牌,弃掉至多两名角色各1张牌;弃牌阶段开始时,若你需要弃牌则只需弃掉1张牌';
			lib.translate.SE_sheming = '蛇鸣';
			lib.translate.SE_sheming_info = '锁定技,每当1名横置角色受到1点伤害你可以摸1张牌(包括连环传导的伤害)';
			lib.translate.SE_sheyin = '蛇引';
			lib.translate.SE_sheyin_info = '锁定技,每当你受到1名横置角色的伤害时,你可以弃置1张牌选择1名除该名角色以外的横置角色并将伤害转移给该名角色';
			lib.translate.SE_sheshen = '蛇神';
			lib.translate.SE_sheshen2 = '蛇神';
			lib.translate.SE_sheshen3 = '蛇神';
			lib.translate.SE_sheshen_info = '你的回合结束阶段若有角色未进入横置状态,你可以弃置任意张牌选择至多x名角色进入横置状态(x为你弃置的牌数),觉醒技,你防止连环传导对你造成的伤害,横置角色受到属性伤害时须额外受到1次等同的伤害(不包括连环传导),场上所有横置角色不是连环传导的原因则不能重置武将牌,准备阶段开始前或者回合结束阶段,若场上所有角色都已进入横置状态,你须增加1点体力上限,回复1点体力并永久获得技能【解咒】、【朽绳】、【蛇鸣】、【蛇引】';
			lib.translate.SE_lanhuo = '蓝火';
			lib.translate.SE_lanhuo_info = '锁定技,每当你对其他角色造成1点伤害或者受到1点伤害时,你可以摸1张牌并选择1张手牌置于武将牌上,称为【蓝火】';
			lib.translate.SE_jiban = '羁绊';
			lib.translate.SE_jiban2 = '羁绊';
			lib.translate.SE_jiban3 = '羁绊';
			lib.translate.SE_jiban_info = '锁定技,你的摸牌阶段可以额外令除你以外的1名角色摸等量的牌,弃牌阶段若你弃置了至少1张牌且此时你未觉醒你将弃置的牌置于你的武将牌上,弃牌阶段结束时你可以令1名角色弃置和你弃置牌数量等同的手牌';
			lib.translate.SE_kuanghua = '狂化';
			lib.translate.SE_kuanghua_info = '觉醒技,准备阶段开始时若你的武将牌上【蓝火】数量不小于4,你须减1点体力上限,并永久获得技能【太刀】、【巨炮】';
			lib.translate.SE_taidao = '太刀';
			lib.translate.SE_taidao_info = '出牌阶段你可以选择1名角色将你武将牌上的1张牌交给他,之后你和他各摸1张牌视为你对他使用了1张火属性的【杀】(不计入出杀限制,若以此法未造成伤害则本回合此技能不可再次使用)';
			lib.translate.SE_jupao = '巨炮';
			lib.translate.SE_jupao_info = '出牌阶段限一次,你可以弃置2张(最少为2)【蓝火】也可以多弃,视为对所有在你攻击范围内的角色,使用一张无视防御的【火杀】,每多弃置一张【蓝火】此技能每造成一次伤害时你可以多摸一张牌,并对该名角色再次使用1张【火杀】(不摸牌且只能连锁1次)';
			lib.translate.SE_wufan = '灵装·五番';
			lib.translate.SE_wufan2 = '灵装·五番';
			lib.translate.SE_wufan3 = '灵装·五番';
			lib.translate.SE_wufan_info = '游戏开始时,你获得3枚 Efreet(炎魔)标记;每当你脱离濒死状态时,你获得一枚Efreet(炎魔) 标记.回合开始前,若你没有Efreet(炎魔)标记,你失去所有技能.出牌阶段,你可以弃置一个Efreet(炎魔)标记,并获得【浴火】、【灼烂歼鬼(Camael)】、【空间震】直到下个回合开始';
			lib.translate.SE_xinyuhuo = '浴火';
			lib.translate.SE_xinyuhuo2 = '浴火';
			lib.translate.SE_xinyuhuo3 = '浴火';
			lib.translate.SE_xinyuhuo_info = '锁定技,每当你受到1次伤害可以回复1点体力,若伤害为火属性你可以防止并摸和伤害等量的牌;当你进入濒死状态时,若当前游戏回合数为5的倍数则你可以重置你的武将牌,并弃置所有牌,受到当前体力减2的火焰伤害,将体力回复至上限';
			lib.translate.SE_jiangui = '灼烂歼鬼•斧';
			lib.translate.SE_jiangui2 = '灼烂歼鬼•炮';
			lib.translate.SE_jiangui_info = '游戏回合数为奇数时,切换为斧形态;游戏回合数为偶数时,切换为炮形态(斧形态:出牌阶段限1次,你可以至多选择你当前体力的目标,对他们各造成1点火焰伤害并依次获得他们的一张牌;炮形态:出牌阶段限1次,你可以选择伤害总数1、等同于游戏人数,2、你的当前体力;令其他角色受到等同的火焰伤害(你可以任意分配伤害点数),若你选择的伤害总数是你的当前体力,则你可以摸当前游戏人数的牌)';
			lib.translate.SE_kongjianzheng = '空间震';
			lib.translate.SE_kongjianzheng_info = '出牌阶段限1次,你可以弃置任意张同类别的卡牌,让其他角色依次选择1、弃置和你同种类、等量的卡牌;2、将武将牌翻面并弃置所有牌';
			lib.translate.SE_poxiao = '破晓';
			lib.translate.SE_poxiao_info = '觉醒技,回合开始时,若你的<碎片>大于你的手牌数,你须增加1点体力上限,你失去<升华>并获得<咪啪>,你选择【奇迹宣言】或者【碎片筛选】其中之一永久获得';
			lib.translate.SE_mipa = '咪啪';
			lib.translate.SE_mipa_info = '出牌阶段,你可以弃置1枚<碎片>并指定一名角色,直到你的下个回合开始前,你选择一项:令该角色不能使用或打出基本牌,或令该角色只能使用或打出基本牌';
			lib.translate.SE_xuanyan = '奇迹宣言';
			lib.translate.SE_xuanyan2 = '奇迹宣言';
			lib.translate.SE_xuanyan_info = '当一名角色受到其他角色伤害而进入濒死状态时,你可令该角色和伤害来源各进行一次判定;若判定点数相同,则该角色体力回复至其体力上限,伤害来源失去全部体力.(该技能对一名角色一局游戏只能使用一次),准备阶段宣言1类卡牌种类,随机从牌堆获取x张和你宣言种类一样的卡牌(x为你当前手牌和你的当前体力上限的差值且至少为1至多为3)';
			lib.translate.SE_shenghua = '升华';
			lib.translate.SE_shenghua_info = '回合开始时,你可以选择<碎片筛选>或<奇迹宣言>,若如此做,直到你的下个回合开始,你视为拥有该技能';
			lib.translate.SE_shaixuan = '碎片筛选';
			lib.translate.SE_shaixuan_info = '在一名角色的判定牌生效前,你可用牌堆顶牌代替判定牌且你可重复此流程(原先的判定牌你可以获得,获得的牌至多为三)';
			lib.translate.wumai = '雾霾';
			lib.translate.wumai2 = '雾霾';
			lib.translate.wumai_info = '每当你受到1点伤害后,你可以将伤害来源的一张牌背面朝上置于你的武将牌上,称为【碎片】,每当你受到一次伤害时,若你有【碎片】时,你可以进行一次判定:若结果与造成伤害的牌花色相同,你将其加入【碎片】,若不同,你摸一张牌';
		},
		package: {
			intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>`,
		},
	};
});

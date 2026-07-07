import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '名存实亡',
		content(config, pack) {
			lib.init.css(`extension/名存实亡/`, 'lulvjianbian');
			lib.init.css(`extension/名存实亡/`, 'lanbaijianbian');
			//字体加载
			lib.init.css(`extension/名存实亡/`, '汉仪行楷');
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
						config,
					);
					game.addVideo('line', this, [target.dataset.position, config]);
					game.linexyrgbl(target, config, true);
				}
			};
			lib.element.player.isMajor = function () {
				if (this.identity == 'unknown') return false;
				var list = game.filterPlayer(function (current) {
					return current.identity != 'unknown' && current.hasSkillTag('forceMajor');
				});
				if (list.length) {
					for (var i of list) {
						if (i.isFriendsOf(this)) return true;
					}
					return false;
				}
				var map = {},
					sides = [],
					pmap = _status.connectMode ? lib.playerOL : game.playerMap,
					player;
				for (var i of game.players) {
					if (i.identity == 'unknown') continue;
					var added = false;
					for (var j of sides) {
						if (i.isFriendsOf(pmap[j])) {
							added = true;
							map[j].push(i);
							if (i == this) player = j;
							break;
						}
					}
					if (!added) {
						map[i.playerid] = [i];
						sides.push(i.playerid);
						if (i == this) player = i.playerid;
					}
				}
				if (!player || map[player].length < 2) return false;
				for (var i in map) {
					if (map[i].length > map[player].length) return false;
				}
				return true;
			};
			if (config.fuleipdcg) {
				lib.skill._thuderFulei = {
					trigger: {
						player: 'damageBegin',
					},
					filter(event, player) {
						return event.getParent(1).name == 'fulei' && event.num && event.nature && event.nature == 'thunder';
					},
					forced: true,
					_priority: 2023,
					forced: true,
					popup: false,
					content() {
						'step 0';
						game.JPG4('fulei动画特效', 2000);
						('step 1');
						game.JPG4('雷电动画特效', 2000);
					},
				};
			}
			if (config.shuiyanqijunxhesdjx) {
				lib.arenaReady.push(function () {
					lib.card.shuiyanqijunx = {
						fullskin: true,
						type: 'trick',
						filterTarget(card, player, target) {
							return target != player;
						},
						enable: true,
						content() {
							'step 0';
							var listControl = ['discard_card', 'take_damage'];
							if (!target.countCards('e')) listControl.shift();
							target.chooseControl(listControl, function (event, player) {
								if (get.damageEffect(player, event.player, player, 'thunder') >= 0) {
									return 'take_damage';
								}
								if ((player.hp >= 3 && player.countCards('e') >= 2) || player.countCards('e') == 0) {
									return 'take_damage';
								}
								return 'discard_card';
							});
							('step 1');
							if (result.control == 'discard_card') {
								target.discard(target.getCards('e'));
							} else {
								target.damage('thunder');
							}
						},
						ai: {
							order: 7,
							value: 4,
							useful: 2,
							tag: {
								damage: 1,
								thunderDamage: 1,
								natureDamage: 1,
							},
							result: {
								target(player, target) {
									return -target.countCards('e');
								},
							},
						},
					};
					lib.card.shengdong = {
						fullskin: true,
						enable() {
							return game.countPlayer() >= 2;
						},
						chongzhu() {
							return game.countPlayer() <= 2;
						},
						singleCard: true,
						type: 'trick',
						selectTarget: 2,
						multitarget: true,
						targetprompt: ['给一张牌', '得两张牌'],
						filterTarget(card, player, target) {
							return true;
						},
						content() {
							'step 0';
							if (!player.countCards('h')) {
								event.finish();
							} else {
								event.target1 = target;
								event.target2 = event.addedTarget;
								player.chooseCard('h', '将一张手牌交给' + get.translation(event.target1), true);
							}
							('step 1');
							player.$giveAuto(result.cards, event.target1);
							event.target1.gain(result.cards, player);
							('step 2');
							if (!event.target1.countCards('h')) {
								event.finish();
							} else {
								var he = event.target1.getCards('he');
								if (he.length <= 2) {
									event.directresult = he;
								} else {
									event.target1.chooseCard('he', '将两张牌交给' + get.translation(event.target2), 2, true);
								}
							}
							('step 3');
							if (!event.directresult) {
								event.directresult = result.cards;
							}
							event.target1.$giveAuto(event.directresult, event.target2);
							event.target2.gain(event.directresult, event.target1);
						},
						ai: {
							order: 2.5,
							value: [4, 1],
							useful: 1,
							wuxie() {
								return 0;
							},
							result: {
								target(player, target) {
									var ok = false;
									var hs = player.getCards('h');
									if (hs.length <= 1) return 0;
									for (var i = 0; i < hs.length; i++) {
										if (get.value(hs[i]) <= 5) {
											ok = true;
											break;
										}
									}
									if (!ok) return 0;
									if (ui.selected.targets.length == 1) {
										if (target.hasSkillTag('nogain')) return 0;
										return 2;
									}
									if (target.countCards('he') == 0) return 0;
									if (player.hasFriend()) return -1;
									return 0;
								},
							},
						},
					};
					lib.translate.shuiyanqijunx_info = '出牌阶段,对一名其他角色使用.目标角色选择一项:1、弃置装备区里的所有牌;2、受到你造成的1点雷电伤害';
					lib.translate.shengdong_info = '出牌阶段,对一名角色使用.你交给目标角色一张手牌,若如此做,其将两张牌交给另一名由你选择的角色(不足则全给,存活角色不超过2时可重铸)';
				});
			}
			if (config.hujiaGif == true) {
				lib.skill._hujiaDhtx = {
					trigger: {
						player: 'damageBegin',
					},
					filter(event, player) {
						return !event.num;
					},
					forced: true,
					_priority: 2023,
					forced: true,
					popup: false,
					content() {
						game.JPG4('hujia护甲', 2000 / 3);
					},
				};
			}
			if (config.huoyanDaVideo == true) {
				lib.skill._huoyanDaDamage = {
					trigger: {
						player: 'damageBegin',
					},
					filter(event, player) {
						return event.num > 1 && event.nature && event.nature == 'fire';
					},
					forced: true,
					_priority: 2023,
					forced: true,
					popup: false,
					content() {
						game.mp45('huoyan火焰');
					},
				};
			}
			if (config.leidianDaVideo == true) {
				lib.skill._shandianDaDamage = {
					trigger: {
						player: 'damageBegin',
					},
					filter(event, player) {
						return event.num > 1 && event.nature && event.nature == 'thunder';
					},
					forced: true,
					_priority: 2023,
					forced: true,
					popup: false,
					content() {
						game.mp45('shandian闪电');
					},
				};
			}
		},
		precontent() {
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
			game.JPG4 = function (Q, time) {
				var img = document.createElement('img');
				img.src = 'extension/名存实亡/image/' + Q + '.jpg';
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
			game.mp45 = async function (Q) {
				return new Promise((resolve) => {
					const video = document.createElement('video');
					video.src = `extension/名存实亡/mp4/${Q}.mp4`;
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
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '名存实亡',
					connect: true,
					character: {
						xusheng旧徐盛: ['male', 'wu', 4, ['破军', 'repojun'], []],
						zhaoyunboss: ['male', 'qun', 4, ['龙怒', '浴血', '奋战'], []],
						zhangfeipi: ['male', 'shu', 8, ['tishenpi', 'paoxiao', 'dahe', 'jie'], []],
						caiyong密言七事: ['male', 'qun', 4, ['qqwz肱骨', 'qqwz撰古', 'qqwz博通', 'qqwz德论'], []],
						mengtian: ['male', 'qun', 7, ['yuxiong', 'kaiyu', 'shubian', 'weizhenxiongnu', 'xiuzhuchangcheng', 'shouzhen', '严明'], ['des:蒙恬(？～前210年),姬姓,蒙氏,名恬,齐国蒙山(今山东省临沂市蒙阴县联城乡边家城子村)人[24].秦朝时期名将,上卿蒙骜之孙,内史蒙武之子. '], []],
						xcbw_xiangyu: ['male', 'qun', 8, ['starjiangjue', 'starpoqin', 'xwj_xqunying_wangxiao', '楚歌', 'xwj_xqunying_tongji', '拔山', '霸刀'], []],
						caoruiguohuanghou: ['none', 'wei', 4, ['huituo', 'mingjian', 'xingshuai', 'jiaozhao', 'danxin'], []],
						shangyang: ['male', 'qun', 4, ['shangyang_bianfa', 'shangyang_limu', 'shangyang_kencao', 'shangyangbianfa'], []],
						zhaogao: ['male', 'qun', 3, ['zhaogao_zhilu', 'zhaogao_gaizhao', 'zhaogao_haizhong', 'zhaogao_aili'], []],
						fh_hanxin: ['male', 'qun', 8, ['兵仙', '奇正', '淮阴', '背水一战'], []],
						fanlihua: ['male', 'qun', 5, ['梨山', '征藩'], []],
						aijiyanhou: ['female', 'qun', 7, ['艳后', '诱色', '巨毒之蛇', '机颖', '蛇噬'], []],
						daqin_zhangyi: ['male', 'qun', 7, ['巧舌', '雄辩', '连横'], []],
						daqin_lvbuwei: ['male', 'qun', 8, ['lvbuwei_jugu', 'lvbuwei_qihuo', 'lvbuwei_chunqiu', 'lvbuwei_baixiang'], []],
						daqin_zhaoji: ['female', 'qun', 7, ['zhaoji_shanwu', 'zhaoji_daqi', 'zhaoji_xianji', 'zhaoji_huoluan'], []],
						xushao声名鹊起: ['male', 'qun', 7, ['评荐'], []],
						huatuo济世侠医: ['male', 'qun', 7, ['侠济', '救途', '悬疠'], []],
						duyuxuangongzhu: ['male', 'wei', 7, ['s三c陈', 'p破z竹', 'zt昭讨', '齐眉qimei', '追姬zhuiji'], []],
						yinni隐匿: ['male', 'qun', 4, ['暗匿'], []],
						yinni隐匿1: ['female', 'qun', 4, ['暗匿'], []],
						huoshenzhurong火神祝融: ['male', 'qun', 8, ['boss_shenyi', '炎火', '行夏'], []],
						simayi月下瑶谋: ['male', 'wei', 7, ['smyyx鬼才', 'smyyx反馈'], []],
						huangzhong箭无虚发: ['male', 'shu', 8, ['虚箭', '忠耀'], []],
						simashisimashao: ['male', 'wei', 4, ['guijin', 'cuanwei', 'zzhongzi', 'zhaolei', 'guijinpi'], ['zhu', 'boss', 'bossallowed'], []],
						wuxianpi: ['female', 'shu', 4, ['shuyi', 'xianming', '绝色'], ['boss', 'bossallowed'], []],
						xufuren: ['female', 'wu', 4, ['yulupi', 'yanpu', 'anfu'], []],
						sunchen: ['male', 'wu', 4, ['fuyanchen', 'hanlie'], []],
						luji: ['male', 'wu', 4, ['chengying', 'huaiji', 'zuoshou'], ['boss', 'bossallowed'], []],
						wenyang紫电清霜: ['male', 'wei', 9, ['膂力', '仇决'], ['boss', 'bossallowed'], []],
						zhugedanpi: ['male', 'wei', 6, ['juyipi', 'weizhongpi', 'zhongwei'], ['boss', 'bossallowed'], []],
						liubian: ['male', 'qun', 3, ['诗怨', '毒逝', '余威'], ['zhu'], []],
						duyu: ['male', 'wei', 7, ['sanchen', 'pozhu', 'zhaotao'], []],
						xiahouhui: ['female', 'wei', 3, ['识度', '宝箧', '宜室'], []],
						sunziliufang互论朝政: ['male', 'wei', 5, ['瑰藻', '讥谀'], []],
						yanghuiyu: ['female', 'wei', 5, ['hongyi', '劝封'], []],
						caoshuang: ['male', 'wei', 7, ['擅专', '托孤'], []],
						xujing: ['male', 'shu', 6, ['yuxu', 'xjshijian', '荐虚'], []],
						xujing识人善用: ['male', 'shu', 7, ['誉虚', '实荐', '荐虚'], []],
						chenzhen: ['male', 'shu', 7, ['歃盟', '盟誓'], []],
						chendao白毦领军: ['male', 'shu', 7, ['将烈', '往烈'], []],
						puyuan百炼神器: ['male', 'shu', 7, ['铸刃', '天匠'], []],
						simazhou: ['male', 'wei', 4, ['caiwang', 'naxiang'], []],
						chendao白毦统帅: ['male', 'shu', 4, ['将烈', 'drlt_wanglie'], []],
						luxun绽火烽威: ['male', 'wu', 7, ['识鹿', '军略', '摧克', '绽火'], []],
						liubei昭烈怒火: ['male', 'shu', 8, ['凤鸣', '昭l烈', '龙怨'], []], //QQQ
						weiguan卫罐: ['male', 'wei', 7, ['允忠', 'shenpin'], []],
						zhongyan钟琰: ['female', 'wei', 7, ['博览', '仪法'], []],
						lvmeng圣光玉莲: ['male', 'wu', 8, ['驭袍', '涉猎', 'gongxin神吕蒙'], []],
						zhugedan时机绸缪: ['male', 'wei', 8, ['功獒', '举义'], []],
						xinxianying洞察才辨: ['female', 'wei', 7, ['忠鉴', '才识'], []],
						zuofen凝脂铅华: ['female', 'wei', 7, ['诏颂', '离思'], []],
						duyu委任修律: ['male', 'wei', 7, ['三陈', '破竹', '昭讨'], []],
						chendao白毦出征: ['male', 'shu', 8, ['将烈', '往烈', '毦征'], []],
						lvbu监兵噬魅: ['male', 'qun', 8, ['shennu神怒', '愤世', '空前kq', 'juemou绝谋', '炼戟'], []],
						liaohua白刃相接: ['male', 'shu', 8, ['當先', '伏櫪'], []],
						ganning万人辟易: ['male', 'wu', 10, ['魄襲', '劫營', '落乌', 'drlt_jieying', '辟易'], []],
						guojia星月奇佐: ['male', 'wei', 7, ['十胜', '十败', '慧论', 'dingcesgj', '辉翊'], []],
						caoshuang受诏专权: ['male', 'wei', 8, ['擅s专z', '托t孤g'], []],
						caomao曹髦: ['male', 'wei', 7, ['潜渊', '忿肆', '决讨', '助势'], []],
						caomao玉碎九重: ['male', 'wei', 7, ['qian潜yuan渊', 'fen忿si肆', 'jue决tao讨', 'zhu助shi势'], []],
						wangtaowangyue王桃王悦: ['female', 'shu', 7, ['佑关', '摇佩', '鸣鸾'], []],
						wangtao王桃: ['female', 'shu', 7, ['佑关', '摇佩'], []],
						wangyue王悦: ['female', 'shu', 7, ['佑关', '鸣鸾'], []],
						zhugeshang诸葛尚: ['male', 'shu', 7, ['三顾', '轶祖'], []],
						simayi权控三势: ['male', 'wei', 7, ['晋冕', '忍戒qkss', '拜印qkss', '连破qkss', '极略qkss'], []],
						zhugeshang碧落玄鹄: ['male', 'shu', 7, ['碧落玄鹄三顾', '碧落玄鹄轶祖'], []],
						jiangwei妙算神谟: ['male', 'shu', 7, ['观星妙算神谟', '志继妙算神谟', '挑衅妙算神谟'], []],
						wenyang万将披靡: ['male', 'wei', 9, ['膂lv力li', '仇chou决jue'], ['boss', 'bossallowed'], []],
						jiangji蒋济: ['male', 'wei', 7, ['急筹', '机谕'], []],
						pusongpuliu蒲松蒲柳: ['male', 'shu', 8, ['烈铸'], []],
						shamoke蛮王奋击: ['male', 'shu', 8, ['蒺藜蛮王奋击', '藜击'], []],
						zhugexu诸葛绪: ['male', 'wei', 8, ['囚避', '封尉'], []],
						qinlang秦朗: ['male', 'wei', 8, ['昊宠', '矜谨'], []],
						xunxun荀勖: ['male', 'wei', 7, ['早岐', '潜伺'], []],
						puyuan淬炼百兵: ['male', 'shu', 8, ['z铸r刃', 't天j匠'], []],
						xurong镬惩俘兵: ['male', 'qun', 8, ['凶镬镬惩俘兵', '杀绝镬惩俘兵', '镬惩'], []],
						liuxie困龙欲出: ['male', 'qun', 7, ['密诏困龙欲出', '天命困龙欲出'], []],
						guohuai芙若槐香: ['female', 'wei', 7, ['哲妇gh', '遗毒gh'], []],
						shamoke骁勇金衔: ['male', 'shu', 8, ['蒺藜骁勇金衔'], []],
						wenyang势若万钧: ['male', ['wei', 'wei', 'wei', 'wu'].randomGet(), 8, ['却敌', '椎锋', '冲坚', '仇绝', '钧决', '文鸯不臣'], []],
						caozhi七步成诗: ['male', ['wei', 'wei', 'wei', 'qun'].randomGet(), 7, ['czre落英', 'czre酒诗', '赐铠', '成章', '曹植不臣'], []],
						bailingyun柏灵筠: ['female', 'wei', 7, ['灵慧', '黠策', '御心'], []],
						wenyang纵横驰骋: ['male', ['wei', 'wei', 'wei', 'wu'].randomGet(), 8, ['却敌', '椎锋', '冲坚', '仇绝', '钧决', '文鸯不臣', '纵驰', '横骋', '七鸣'], []],
						badonghouyuan巴东后援: ['female', 'shu', 4, ['援盾', '东援'], []],
					},
					translate: {
						xusheng旧徐盛: '旧徐盛',
						zhaoyunboss: '少年将军',
						zhangfeipi: '横矛立马',
						caiyong密言七事: '密言七事',
						mengtian: '蒙恬',
						xcbw_xiangyu: '西楚霸王',
						caoruiguohuanghou: '曹睿郭皇后',
						shangyang: '商鞅',
						zhaogao: '赵高',
						fh_hanxin: '韩信',
						fanlihua: '樊梨花',
						aijiyanhou: '埃及艳后',
						daqin_zhangyi: '张仪',
						daqin_lvbuwei: '吕不韦',
						daqin_zhaoji: '赵姬',
						xushao声名鹊起: '声名鹊起',
						huatuo济世侠医: '济世侠医',
						duyuxuangongzhu: '杜预宣公主',
						yinni隐匿: '隐匿',
						yinni隐匿1: '隐匿',
						huoshenzhurong火神祝融: '火神祝融',
						simayi月下瑶谋: '月下瑶谋',
						huangzhong箭无虚发: '箭无虚发',
						simashisimashao: '司马师&司马昭',
						wuxianpi: '吴苋',
						xufuren: '徐夫人',
						sunchen: '孙翊',
						luji: '陆绩',
						zhugedanpi: '挥剑惊石',
						wenyang紫电清霜: '紫电清霜',
						liubian: '刘辨',
						duyu: '杜预',
						xiahouhui: '夏侯徽',
						sunziliufang互论朝政: '互论朝政',
						yanghuiyu: '羊徽瑜',
						caoshuang: '曹爽',
						xujing: '许靖',
						xujing识人善用: '识人善用',
						chenzhen: '陈震',
						chendao白毦领军: '白毦领军',
						puyuan百炼神器: '百炼神器',
						simazhou: '司马伷',
						chendao白毦统帅: '白毦统帅',
						luxun绽火烽威: '绽火烽威',
						liubei昭烈怒火: '昭烈怒火',
						weiguan卫罐: '卫罐',
						zhongyan钟琰: '钟琰',
						lvmeng圣光玉莲: '圣光玉莲',
						zhugedan时机绸缪: '时机绸缪',
						xinxianying洞察才辨: '洞察才辨',
						zuofen凝脂铅华: '凝脂铅华',
						duyu委任修律: '委任修律',
						chendao白毦出征: '白毦出征',
						lvbu监兵噬魅: '监兵噬魅',
						liaohua白刃相接: '白刃相接',
						ganning万人辟易: '万人辟易',
						guojia星月奇佐: '星月奇佐',
						caoshuang受诏专权: '受诏专权',
						caomao曹髦: '曹髦',
						caomao玉碎九重: '玉碎九重',
						wangtaowangyue王桃王悦: '王桃王悦',
						wangtao王桃: '王桃',
						wangyue王悦: '王悦',
						zhugeshang诸葛尚: '诸葛尚',
						simayi权控三势: '权控三势',
						zhugeshang碧落玄鹄: '碧落玄鹄',
						jiangwei妙算神谟: '妙算神谟',
						wenyang万将披靡: '万将披靡',
						jiangji蒋济: '蒋济',
						pusongpuliu蒲松蒲柳: '蒲松蒲柳',
						shamoke蛮王奋击: '蛮王奋击',
						zhugexu诸葛绪: '诸葛绪',
						qinlang秦朗: '秦朗',
						xunxun荀勖: '荀勖',
						puyuan淬炼百兵: '淬炼百兵',
						xurong镬惩俘兵: '镬惩俘兵',
						liuxie困龙欲出: '困龙欲出',
						guohuai芙若槐香: '芙若槐香',
						shamoke骁勇金衔: '骁勇金衔',
						wenyang势若万钧: '势若万钧',
						caozhi七步成诗: '七步成诗',
						bailingyun柏灵筠: '柏灵筠',
						wenyang纵横驰骋: '纵横驰骋',
						badonghouyuan巴东后援: '巴东后援',
						背水一战: '背水一战',
						背水一战_info: '回合结束阶段,你可以令至多X名未进入混乱状态的其他角色进入混乱状态(当你体力值:①不小于3,X为1;②小于3,咒印化,X为3)',
						淮阴: '淮阴',
						淮阴_info: '结束阶段,每有一名角色手牌中有【桃】或装备牌,你便摸一张牌',
						兵仙: '兵仙',
						兵仙2: '兵仙',
						兵仙_info: '<span class=yellowtext></span> 当你受到伤害后,若伤害来源未获得<兵仙>标记,你令其获得九个<兵仙>标记,其回合结束时,你摸等同其<兵仙>标记个数的一半(向下取整)张牌,其须获得一个<兵仙>标记,并随机弃置一张装备区的牌,否则受到一点伤害.若其<兵仙>标记不大于0或已阵亡,你重置本技能',
						奇正: '奇正',
						奇正_info: '当你受到伤害时,若场上有角色有<兵仙>标记,你可取消此伤害,该角色的<兵仙>标记数量减一',
						zhaogao_zhilu: '指鹿',
						zhaogao_zhilu2: '指鹿',
						zhaogao_zhilu_info: '每当你受到一点伤害时,若你没有手牌,你可以摸等同于现存势力数张牌;若你有手牌,你可以摸X张牌(X为此时你的手牌数)',
						zhaogao_zhilu2_info: '你可以将红色手牌当【闪】使用或打出;将黑色手牌当【杀】使用或打出.',
						zhaogao_gaizhao: '改诏',
						zhaogao_gaizhao_info: '当你成为【杀】或普通锦囊牌的目标后(借刀杀人除外),你可以将此牌的目标改为其他不是该牌目标的群势力角色,若为你你摸两张牌增加一点体力上限.',
						zhaogao_haizhong: '害忠',
						zhaogao_haizhong_info: '锁定技,非群势力角色回复体力时,其需要选择:1.弃置一张红色牌,2.受到你造成的X点伤害(X为该角色拥有的<害>标记,且至少为1).该角色获得一个<害>标记.',
						zhaogao_aili: '爰历',
						zhaogao_aili_info: '锁定技,你的出牌阶段开始时,你额外获得2张普通锦囊.',
						shangyang_bianfa: '变法',
						shangyang_bianfa_info: '出牌阶段限一次,你可以将一张普通锦囊牌当作【桃】使用.',
						shangyang_limu: '立木',
						shangyang_limu_info: '锁定技,你使用的普通锦囊牌不是【无懈可击】的合法目标.',
						shangyang_kencao: '垦草',
						shangyang_kencao_info: '锁定技,你存活时,群势力角色每造成1点伤害,可获得一个<功>标记.若群势力角色拥有大于等于3个<功>标记,则弃置所有<功>标记,增加1点体力上限,并回复1点体力.',
						shangyangbianfa_dying: '商鞅变法',
						shangyangbianfa_dying_info: '造成随机1~3点伤害,若该角色进入濒死状态,则进行判定,若判定结果为黑色,则该角色本次濒死状态无法向其他角色求桃.',
						shangyangbianfa: '商鞅变法',
						shangyangbianfa_info: '出牌阶段,对一名其他角色使用.你对目标角色造成随机1~2点伤害,若该角色以此法进入濒死状态,则其进行判定,若判定结果为黑色,则所有角色角色不能使用【桃】直到此濒死事件结算结束.',
						霸刀: '霸刀',
						霸刀_info: '回合开始或结束时,你可摸两张牌装备【项羽刀♠️️️A】',
						楚歌: '楚歌',
						楚歌_info: '<font color=#f00>锁定技</font> 当你对目标角色造成伤害时,若其势力与你不一致,则此伤害值+1',
						xwj_xqunying_tongji: '统集',
						xwj_xqunying_tongji_info: '<font color=#f00>锁定技</font> 结束阶段,你摸X张牌(X为【群】势力的角色数)',
						xwj_xqunying_wangxiao: '往崤',
						xwj_xqunying_wangxiao_info: '<font color=#f00></font> 当一名角色受到伤害时,若此伤害值大于1,可将其势力改为【群】',
						拔山: '拔山',
						拔山_info: '当你使用【杀】或【决斗】造成伤害后,若你体力值高/等/低于受伤的角色,你可令其失去1点体力/翻面/弃置所有手牌',
						starjiangjue: '江决',
						starjiangjue_info: '锁定技,若你的体力值不小于2,你视为任何伤害的来源.',
						starpoqin: '破秦',
						starpoqin_info: '每当你即将造成/受到伤害,你可以与其拼点,若你赢,你的伤害+1/你回复一点体力,否则其防止你伤害/其伤害-1.',
						starnijian: '逆谏',
						starnijian_info: '每当你进行一次拼点,你可以获得一名其他角色的一张牌.',
						shouzhen: '守阵',
						shouzhen_info: '你于回合外不因此技能获牌时,与你同阵营的其他角色摸一张牌',
						严明: '严明',
						严明_info: '出牌阶段,你不以此法使用牌指定唯一目标时,你可以弃置一张与该牌类型不同的手牌,令这张牌额外结算一次',
						yuxiong: '御匈',
						kaiyu: '开榆',
						shubian: '戍边',
						weizhenxiongnu: '威震匈奴',
						xiuzhuchangcheng: '修筑长城',
						yuxiong_info: '出牌阶段开始时,你可以将手牌的【杀】转化为火【杀】',
						kaiyu_info: '消耗2点技力发动,视为你使用了一张[流星火羽]',
						shubian_info: '消耗6点技力发动,选择攻击范围内的一名其他角色(正向距离,即从你的下家开始,最多选择至第3个角色),对从你的下家至该角色的所有角色造成1点火焰伤害,那之后的三轮内你的回合结束时回复1点体力(效果不叠加)',
						weizhenxiongnu_info: '攻击范围内的其他角色受到火焰伤害可令其+1',
						xiuzhuchangcheng_info: '锁定技,每回合开始时,你获得6点技力',
						破军: '破军',
						破军_info: '当你的【杀】造成伤害后,可以令其将武将牌翻面并摸X张,X为目标的体力值',
						龙怒: '龙怒',
						龙怒_info: '你永远跳过判定阶段和弃牌阶段;摸牌阶段额外摸4张牌;你使用黑色杀获得技能咆哮直到回合结束,你使用红色杀增加1点体力上限回复1点体力',
						浴血: '浴血',
						浴血_info: '出牌阶段,你可以令所有角色弃置其判定区域内的牌,并受到没有来源的等量火焰伤害,每阶段限一次',
						奋战: '奋战',
						奋战_info: '得牌加上限',
						tishenpi: '替身',
						tishenpi_info: '限定技,准备阶段开始时,你可以将体力回复至等同于你上回合结束时的体力值,你每以此法回复1点体力,便摸一张牌.',
						repojun: '界破军',
						repojun_info: '破军加伤害',
						repojun3: '界破军',
						repojun3_info: '',
						repojun2: '界破军',
						repojun2_info: '',
						qqwz肱骨: '肱骨',
						qqwz肱骨_info: '(每回合限一次)每当你摸取不少于两张牌后,你展示摸到的牌,若这些牌类别或花色均相同,你摸X张牌,当你受到伤害前若你拥有手牌且颜色相同则本次伤害-X(X=全场势力数量)',
						qqwz撰古: '撰古',
						qqwz撰古_info: "当你使用黑色牌后,或你成为其他角色使用黑色牌的目标后,你可以将牌堆顶的一张牌置于武将牌上,称为'古',你每有一张'古',手牌上限+1且造成伤害+X(X=当前古的数量除以3向下取整)",
						qqwz博通: '博通',
						qqwz博通_info: '摸牌阶段摸牌或回合结束后,你可以用任意张牌替换等量的<古>,若你的<古>包含四种花色,你将所有<古>交给任意名其他角色',
						qqwz德论: '德论',
						qqwz德论_info: '你使用或打出的锦囊牌不可被无懈可击响应,且你无法被翻面和进入混乱状态',
						梨山: '梨山',
						梨山_info: '锁定技,你的回合外限一次,当你使用或打出手牌时,你摸一张牌,当前回合角色需弃置一张牌',
						征藩: '征藩',
						征藩_info: '锁定技,一名角色的结束阶段开始时,若你本回合使用或打出过基本牌,你选择一项:视为使用一张基本牌并摸一张牌,或摸两张牌.',
						艳后: '艳后',
						艳后_info: '当一名其他角色使用的【杀】被响应后,你可随机使用一张装备牌',
						诱色: '诱色',
						诱色_info: '出牌阶段限二次,你可令一名其他角色随机弃置一张手牌,若这张手牌为:基本牌,你视为对其使用一张不计次数限制的【杀】;锦囊牌,你视为对其使用一张不能被无懈可击的决斗;装备牌,你使用之',
						巨毒之蛇: '巨毒之蛇',
						巨毒之蛇_info: '摸牌阶段你可额外摸一张牌若如此做你可视为对攻击范围内任意名角色使用杀.',
						蛇噬: '蛇噬',
						蛇噬_info: '受到伤害展示,摸牌.',
						机颖: '机颖',
						机颖_info: '出牌阶段你可以并指定1,2名角色,其翻面并减少1点体力上限,你摸一张牌',
						巧舌: '巧舌',
						巧舌_info: '锁定技,当一名角色成为【杀】的目标时,可弃置一名角色一张牌,并可将此【杀】的目标转移给由你指定的另一名角色.',
						雄辩: '雄辩',
						雄辩_info: '锁定技,当你成为普通锦囊牌的目标后,你可摸一张牌并可你取消此牌的所有目标',
						连横: '连横',
						连横_info: '游戏开始时,你可令随机一名角色获得<横>标记.拥有<横>标记的角色使用的牌不能指定与你势力相同的所有角色为目标.你的回合开始时,场上所有角色弃置<横>标记,你可令一名角色获得<横>标记.',
						lvbuwei_jugu: '巨贾',
						lvbuwei_jugu_info: '锁定技,你的手牌上限+X;游戏开始时,你多摸X张牌增加x点体力上限(X为你的体力上限).',
						lvbuwei_qihuo: '奇货',
						lvbuwei_qihuo_info: '出牌阶段限一次,你可以弃置一种类型的牌,并摸等同于你弃置牌数量2倍的牌.',
						lvbuwei_chunqiu: '春秋',
						lvbuwei_chunqiu_info: '锁定技,每回合限两次当你于一回合内使用或打出牌时你摸2张牌.',
						lvbuwei_baixiang: '拜相',
						lvbuwei_baixiang_info: '觉醒技,你的回合开始时,若你的手牌数大于等于你当前体力的2倍,则你将体力回复至体力上限,并获得<仲父>技能.',
						lvbuwei_zhongfu: '仲父',
						lvbuwei_zhongfu_info: '锁定技,你的回合开始时,直到你的下个回合开始为止,你随机获得<界奸雄>、<界仁德>、<界制衡>中的一个.',
						吕不韦奸雄: '吕不韦奸雄',
						吕不韦奸雄_info: '你可以立即获得对你造成伤害的牌并摸一张牌回复一点体力',
						吕不韦仁德: '吕不韦仁德',
						吕不韦仁德_info: '出牌阶段,你可以将任意手牌送给其他角色,你每送出的手牌不少于两张,你回复一点体力',
						吕不韦制衡: '吕不韦制衡',
						吕不韦制衡_info: '出牌阶段,你可以弃置任意张牌并摸双倍数量的牌,每阶段限1次',
						zhaoji_shanwu: '善舞',
						zhaoji_shanwu_info: '锁定技,你使用【杀】指定目标后,你进行判定,若为黑色则敌方不能打出【闪】;当你成为【杀】的目标后,你进行判定,若为红色此杀无效.',
						zhaoji_daqi: '大期',
						zhaoji_daqi_info: '锁定技,你每使用或打出一张手牌、造成1点伤害、受到1点伤害,均会得到一个<期>标记.你的回合开始时,若你拥有的<期>标记大于等于10,则弃置所有<期>,体力回复至体力上限,并将手牌补至体力上限.',
						zhaoji_xianji: '献姬',
						zhaoji_xianji_info: '限定技,出牌阶段,你可以弃置所有手牌、装备牌和<期>标记,增加1点体力上限,立即发动大期的回复体力和补牌效果.',
						zhaoji_huoluan: '祸乱',
						zhaoji_huoluan_info: '锁定技,你每次发动大期的回复体力和补牌效果后,你对所有其他角色造成1点伤害.',
						评荐: '评荐',
						评荐1: '评荐',
						评荐_info: '<span class="bluetext">锁定技</span>,每当你造成或受到一次伤害时或你回合开始/结束时,你随机获得未加入本局游戏的武将的一个技能(主公技、觉醒技除外)直到你下个回合结束;你摸三张牌.',
						侠济: '侠济',
						侠济_info: '出牌阶段限一次,你可摸4张牌,弃置1到4名角色各一张牌,选择1到4名角色各回复一点体力',
						救途: '救途',
						救途_info: '一名角色濒死时你可摸一张牌,展示一张红色牌,其回复该牌点数的体力摸等量的牌',
						悬疠: '悬疠',
						悬疠_info: '每名角色回合限4次,一名角色弃置♠️️牌后,你可令其失去一点体力,你摸1张牌获得一点护甲',
						齐眉qimei: '齐眉',
						齐眉qimei_info: '每名角色回合限2次,当你牌数/体力值变化后,你可令所有友方摸2张牌所有敌方角色弃置一张牌.',
						追姬zhuiji: '追姬',
						追姬zhuiji2: '追姬',
						追姬zhuiji_info: '出牌阶段开始时,你可摸两张牌回复2点体力,此阶段结束后,你可选择一名角色令其弃置两张牌失去1点体力.',
						zt昭讨: '昭讨',
						zt昭讨_info: '回合开始时可获得弃甲曳兵,过河拆桥,万箭齐发,决斗,火烧连营各一张(随机花色点数).',
						s三c陈: '三陈',
						s三c陈_info: '出牌阶段每名角色各限一次,你可令一名角色摸3张牌,弃置一名角色3张牌,若其中的花色或类型均不相同,摸牌角色摸两张牌,否则你于本回合不能发动此技能',
						p破z竹: '破竹',
						p破z竹_info: '出牌阶段限一次,你可选择一名有牌的角色,选择其一张牌展示之,可再选择一名角色,选择其一张牌展示之,你对后选择的角色造成所展示的两张牌点数之和的伤害',
						暗匿: '暗匿',
						暗匿_info: '每名角色回合限一次,你受到伤害或体力流失时,你可取消之',
						炎火: '炎火',
						炎火_info: '锁定技,敌方角色受到火焰伤害时需弃置一张红色牌并令此伤害加一',
						行夏: '行夏',
						行夏2: '行夏',
						行夏4: '行夏',
						行夏_info: '锁定技,你造成的伤害均视为火焰伤害,回合开始阶段敌方全体角色各弃置一红色牌受到你的两到三点火焰伤害,你随机获得火攻或火杀共两张,你回复一点体力,你使用火杀或火攻造成的伤害加一',
						smyyx鬼才: '鬼才',
						smyyx鬼才_info: '<span style="color:blue; font-size:60px; font-weight:600; text-shadow: 1px 0px #FF69B4, 1px 2px #FF8C00, 3px 1px #FF69B4, 2px 3px #FF8C00, 4px 2px #FF69B4, 4px 4px #FF8C00, 5px 3px #FF69B4, 5px 5px #FF8C00, 7px 4px #FF69B4, 6px 6px #FF8C00, 8px 5px #FF69B4, 7px 7px #FF8C00, 9px 6px #FF69B4, 9px 8px #FF8C00, 11px 7px #FF69B4;">一名角色的判定生效前,你可摸一张牌,展示一张牌,将该牌的打印作为改判定结果</span>',
						smyyx反馈: '反馈',
						smyyx反馈_info: '<span style="color:white; font-size:60px; font-weight:600; text-shadow:1px 0px #0000FF, 1px 2px #0000FF, 3px 1px #0000FF, 2px 3px #0000FF, 4px 2px #0000FF, 4px 4px #0000FF, 5px 3px #0000FF, 5px 5px #0000FF, 7px 4px #0000FF, 6px 6px #0000FF, 8px 5px #0000FF, 7px 7px #0000FF, 9px 6px #0000FF, 9px 8px #0000FF, 11px 7px #0000FF;">回合开始阶段时或你受到伤害后,你可进行一次五色彩珠小游戏,根据得分情况,你可获得一名角色(1～4)+所受伤害值张牌,若其中有黑色牌,你增加一点护甲;有红色牌,你从闪电、桃中随机获得一张,若你没有装备虚妄镰,则将装备【虚妄镰*♠️️️2】</span>',
						虚箭: '虚箭',
						虚箭_info: '回合开始时你可进行一次躲避箭雨小游戏,增加一点护甲,获得1～3张万箭齐发和一张杀',
						忠耀: '忠耀',
						忠耀_info: '<span style="color:red; font-size:60px; font-weight:600; text-shadow:1px 0px black, 1px 2px black, 3px 1px black, 2px 3px black, 4px 2px black, 4px 4px black, 5px 3px black, 5px 5px black, 7px 4px black, 6px 6px black, 8px 5px black, 7px 7px black, 9px 6px black, 9px 8px black, 11px 7px black;">你可额外装备画雀弓或陌刀(装备画雀弓或陌刀时额外装备之,装备其他武器时除外),准备阶段,若你没有装备画雀弓,则将装备【画雀弓*♥️️️13】,若你没有装备陌刀,则将装备【陌刀*♣️️️13】.</span>',
						cuanwei: '篡位',
						cuanwei4: '篡位',
						cuanwei5: '篡位',
						cuanwei_info: '在出牌或濒死阶段,你可视为使用任意一张基本牌或非延时类锦囊牌(此牌不得是本局游戏你以此法使用过的牌),每回合最多发动两次',
						zzhongzi: '冢子',
						zzhongzi2: '冢子',
						zzhongzi3: '冢子',
						zzhongzi4: '冢子',
						zzhongzi_info: '你可以将基本牌当作任意基本牌使用或打出',
						zhaolei: '招雷',
						zhaolei2: '招雷',
						zhaolei3: '招雷',
						zhaolei4: '招雷',
						zhaolei_info: '每当你造成一次雷电伤害,可指定距离受伤害角色1以内的另一名角色,并展示牌堆顶的一张牌,若此牌为黑色,该角色受到一点雷电伤害,出牌阶段限1次,你指定1名角色并弃置和该名角色手牌同等数量的牌,获得目标角色所有手牌,并对其造成1点雷电伤害',
						guijinpi: '归晋',
						guijinpi2: '归晋',
						guijinpi_info: '锁定技,你受到的雷电伤害均视为体力回复,超过的部分视为摸牌,你造成的伤害均视为火焰伤害或者穿透的火焰伤害',
						shuyi: '淑懿',
						shuyi2: '淑懿',
						shuyi_info: '锁定技,你受到的火焰伤害均视为体力回复,超过的部分视为摸牌,你造成的伤害均视为火焰伤害或者穿透的火焰伤害',
						xianming: '贤明',
						xianming_info: '你每于回合外失去一张手牌,你可以将任意区域内一张牌移动到任意相应的合乎规则的区域',
						绝色: '绝色',
						绝色_info: '每当你造成一次火焰伤害,可指定距离受伤害角色1以内的另一名角色,并展示牌堆顶的一张牌,若此牌为红色,该角色受到一点火焰伤害,出牌阶段限1次,你指定任意名角色并弃置等同数量的牌,这些角色受到1点火焰伤害',
						绝色2: '绝色',
						绝色2_info: '',
						yulupi: '雨露',
						yulupi_info: '出牌阶段限一次,你可以指定至多3名角色各摸两张牌,各弃置两张牌',
						yanpu: '宴卜',
						yanpu_info: '在你的回合结束后,你可以弃置一张手牌并进行一个额外的回合',
						anfu: '暗伏',
						anfu_info: '回合结束阶段,你可以将你的手牌与一名其他角色交换(手牌数之差不能多于1)',
						fuyanchen: '赴宴',
						fuyanchen_info: '出牌阶段限一次,你可将手牌补至四张,并于此阶段结束时弃置等量的牌',
						hanlie: '悍烈',
						hanlie_info: '锁定技,回合结束阶段,你随机摸0~2张牌',
						chengying: '承营',
						chengying_info: '出牌阶段结束时,你可以摸X张牌,X为你本回合使用的卡牌数',
						huaiji: '怀橘',
						huaiji_info: '每当你使用一张杀,你可以摸一张牌',
						zuoshou: '作守',
						zuoshou_info: '你可以将一张装备牌当作闪使用或打出',
						juyipi: '举义',
						juyipi_info: '锁定技,每当你的体力值发生改变,你摸等量的牌;每当你击杀一名角色,你增加一点体力上限并回复一点体力',
						weizhongpi: '危重',
						weizhongpi_info: '每当你回复一点体力,可以摸两张牌',
						zhongwei: '忠魏',
						zhongwei_info: '出牌阶段,你可以将一张杀置于一名其他角色的武将牌上,该角色在下一次造成伤害时受到来自你的一点雷属性伤害并随机弃置一张牌,将此牌置入弃牌堆',
						zhongwei2: '忠魏',
						zhongwei3: '忠魏',
						guijin: '归晋',
						guijin_info: '锁定技,当你进入濒死状态时,你可以回复体力至1点,令所有其他角色依次交给你一张手牌.当前回合结束后,你进行一个额外的回合',
						膂力: '膂力',
						膂力_info: '当你造成伤害后,你可选择:1,若你的体力值大于你的手牌数,你摸Ｘ张牌;2,若你的手牌数大于你的体力值且你已受伤,你回复Ｘ点体力(Ｘ为你的手牌数与体力值之差)',
						仇决: '仇决',
						仇决_info: '觉醒技,一名角色的回合结束时,若你的手牌数和体力值相差3或更多,你减1点体力上限并获得技能〖背水〗,将〖膂力〗改为<在自己的回合时每回合限两次>',
						背水: '背水',
						背水_info: '觉醒技,准备阶段,若你的手牌数或体力值小于2,你减1点体力上限并获得技能〖清剿〗,将〖膂力〗改为受到伤害后也可以发动',
						清剿: '清剿',
						清剿_info: '出牌阶段开始时,你可以弃置所有手牌,从牌堆或弃牌堆中随机获得八张牌名各不相同且副类别不同的牌.若如此做,结束阶段,你弃置所有牌',
						诗怨: '诗怨',
						诗怨_info: '每回合每项限一次,当你成为其他角色使用牌的目标后:①若其体力值大于你,你摸三张牌.②若其体力值等于你,你摸两张牌.③若其体力值小于你,你摸一张牌',
						毒逝: '毒逝',
						毒逝2: '毒逝',
						毒逝_info: '锁定技,你处于濒死状态时,其他角色不能对你使用【桃】.你造成伤害时,你选择一名其他角色获得〖毒逝〗',
						余威: '余威',
						余威_info: '主公技,锁定技,其他群雄角色的回合内,你将〖诗怨〗改为<每回合每项限两次>',
						sanchen: '三陈',
						sanchen_info: '出牌阶段,你可选择一名本回合内未选择过的角色.其摸三张牌,弃置三张牌.若其以此法弃置的牌的类别均不相同,则其摸一张牌.否则你本阶段内不能再发动〖三陈〗',
						pozhu: '破竹',
						pozhu_info: '回合结束时,你可以摸两张牌并进行一个额外的弃牌阶段,此阶段结束时,若你未于此阶段内弃置牌,你回复一点体力,若你于此阶段内弃置了红色牌,你可以于此阶段结束后进行一个额外的出牌阶段',
						zhaotao: '诏讨',
						zhaotao_info: '你的回合开始时,你可以重铸一张手牌并进行一次判定,若判定牌花色与被重铸的牌相同,你移动场上的一张牌,若颜色不同,你摸一张牌',
						识度: '识度',
						识度_info: '出牌阶段限一次,你可以与一名其他角色拼点.若你赢,你获得其所有手牌.你交给其X张手牌(X为你手牌数的一半,向下取整)',
						宝箧: '宝箧',
						宝箧_info: '一轮限一次,一名其他角色的回合结束时,若你在此回合获得过牌或受到过伤害,你可以立即摸一张牌并进行一个额外的出牌阶段.如你在此阶段造成了伤害,该阶段结束后,你选择一项:回复一点体力,或摸一张牌',
						宜室: '宜室',
						宜室_info: '出牌阶段你可以弃置三张牌获得杀闪桃各一张',
						瑰藻: '瑰藻',
						瑰藻_info: '弃牌阶段开始时你可以摸一张牌回复一点体力',
						讥谀: '讥谀',
						讥谀_info: '出牌阶段每名角色限一次,若你有可以使用的手牌,你可以令一名角色弃置一张手牌.若如此做,你不能使用与之相同花色的牌,直到回合结束.若其以此法弃置的牌为黑色,你的手牌上限永久加一并令其翻面并失去1点体力',
						讥谀1: '讥谀1',
						讥谀1_info: '',
						hongyi: '弘仪',
						hongyi2: '弘仪',
						hongyi_info: '出牌阶段限一次,你可以弃置X张牌并选择一名其他角色(X为场上已阵亡的角色数且至多为2).你的下回合开始前,该角色造成伤害时进行判定,若结果为:黑色,此伤害-1.红色,受到伤害的角色摸一张牌',
						劝封: '劝封',
						劝封_info: '摸牌阶段开始时,若你手牌中没有桃,你获得一张桃',
						擅专: '擅专',
						擅专_draw: '擅专',
						擅专_info: '当你对其他角色造成伤害后,若其判定区没有牌,则你你可以将其的一张牌置于其的判定区.若此牌不为延时锦囊牌且此牌为:红色,此牌视为【乐不思蜀】;黑色,此牌视为【兵粮寸断】.回合结束时,若你本回合内未造成伤害,你可摸一张牌',
						托孤: '托孤',
						托孤_info: '出牌阶段限三次,你可以猜测手牌中黑色牌最多的角色是谁,若猜对,你可以观看所有其他角色的手牌并获得任意一张',
						yuxu: '誉虚',
						yuxu_info: '当你于出牌阶段内使用的牌结算完成时,你可以摸一张牌.若如此做,当你于出牌阶段内使用的下一张牌结算完成时,需摸一张牌(共摸两张牌)',
						誉虚: '誉虚',
						誉虚_info: '当你于出牌阶段内使用的牌结算完成时,你可以摸2张牌选择弃置一张牌.若如此做,当你于出牌阶段内使用的下一张牌结算完成时,需摸一张牌',
						yuxu2: '誉虚(摸牌)',
						xjshijian: '实荐',
						xjshijian_info: '一名其他角色于其回合开始时,你可弃置一张牌并令其获得技能〖誉虚〗直到回合结束',
						实荐: '实荐',
						实荐_info: '一名角色回合开始时,你可令所有敌方角色弃置一张牌并令其获得技能〖誉虚〗直到回合结束',
						誉名: '誉名(弃牌)',
						荐虚: '荐虚',
						荐虚_info: '一名其他角色于其回合开始时,你可弃置一张牌并令其获得技能〖誉名〗直到回合结束',
						歃盟: '歃盟',
						歃盟_info: '锁定技,每当其他角色使用或打出一张未转化的非延时锦囊时,(在它结算之后)你获得之',
						盟誓: '盟誓',
						盟誓_info: '出牌阶段限一次,你可弃置两张颜色相同的手牌并选择一名角色.其摸两张牌,你摸三张牌',
						将烈: '将烈',
						将烈_info: '当你使用【杀】指定目标后,你可以令其展示所有手牌,弃置其中一种颜色的牌',
						往烈: '往烈',
						往烈_info: '回合开始阶段开始时,你可以回复1点体力,若如此做,本回合的摸牌阶段,你可以额外摸x张牌(x为你体力上限加体力值);本回合的出牌阶段,你与其他角色的距离为1;本回合的弃牌阶段结束时,你可以令一名其他角色获得你本阶段弃置的牌',
						铸刃: '铸刃',
						铸刃_info: '出牌阶段,你可以弃置一张牌,并摸两张牌将你失去的专属装备置入你的装备区',
						天匠: '天匠',
						天匠_info: '你可装备任意数量武器牌,触发此效果时你摸两张牌',
						pyzhuren_heart: '红缎枪',
						pyzhuren_heart_info: '每回合限一次,当你使用【杀】造成伤害后,你可以进行判定,若结果为:红色,你回复1点体力;黑色:你摸两张牌',
						pyzhuren_diamond: '烈淬刀',
						pyzhuren_diamond_info: '每回合限两次,当你使用【杀】对目标角色造成伤害时,你可以弃置一张牌,令此伤害+1.你使用【杀】的次数上限+1',
						pyzhuren_club: '水波剑',
						pyzhuren_club_info: '每回合限两次,当你使用普通锦囊牌或【杀】时,你可以为此牌增加一个目标.当你失去装备区里的【水波剑】后,你回复1点体力',
						pyzhuren_spade: '混毒弯匕',
						pyzhuren_spade_info: '当你使用【杀】指定目标后,你可令其失去X点体力(X为此技能本回合内发动过的次数且至多为5)',
						pyzhuren_shandian: '天雷刃',
						pyzhuren_shandian_info: '当你使用【杀】指定目标后,可令其进行判定,若结果为:♠️️,其受到3点雷属性伤害;♣️️,其受到1点雷属性伤害,你回复1点体力并摸一张牌',
						qicaishenluqcsl: '七彩神鹿',
						qicaishenluqcsl_info: '锁定技,你计算与其他角色的距离时-1,当你造成属性伤害时,你令此伤害+1',
						lfhmj: '鸾凤和鸣剑',
						lfhmj_info: '你使用杀指定目标时可令该角色弃置一张牌你摸一张牌,并有飞龙夺凤改变势力效果',
						guofengyupaolm: '国风玉袍',
						guofengyupaolm_info: '锁定技,你不能成为其他角色使用普通锦囊牌的目标,若你装备着国风玉袍视为你拥有克己',
						xiuluolianyuji修罗炼狱戟: '修罗炼狱戟',
						xiuluolianyuji修罗炼狱戟_info: '你使用杀或决斗可额外指定7名角色为目标,当你使用杀造成伤害时,你令此伤害+1,并可令其失去一点体力',
						jinwuluorigong金乌落日弓: '金乌落日弓',
						jinwuluorigong金乌落日弓_info: '你于你的回合失去牌后可令一名角色弃置等量的牌',
						shishengshibailun: '十胜十败论',
						shishengshibailun1: '十胜十败论(败论)',
						shishengshibailun_info: '你于你的回合开始时可弃置场上所有胜标记并摸等量牌,增加等量体力上限,可弃置场上所有败标记,令一名角色弃置等量牌',
						guimoubingjingshan: '鬼谋冰晶扇',
						guimoubingjingshan_info: '每名角色回合限一次,你造成伤害可视为神圣伤害且弃置其两张牌,并视为对其使用一张随机锦囊牌(无视限制条件)',
						caiwang: '才望',
						caiwang_info: '当你使用或打出牌后,你可以弃置一名角色的一张牌',
						naxiang: '纳降',
						naxiang2: '纳降',
						naxiang_info: '一名角色出牌阶段开始前,弃置一名角色一张牌若不为闪视为对该角色使用一张杀,若为闪获得该角色一张牌',
						识鹿: '识鹿',
						识鹿_info: '锁定技,回合开始或结束时,你使用【七彩神鹿*♥️️️k】,并获得一枚军略标记,并摸两张牌',
						军略: '军略',
						军略_info: '锁定技,当你受到或造成伤害后,你获得一个<军略>标记',
						摧克: '摧克',
						摧克_info: '出牌阶段开始时,若<军略>标记的数量为奇数,你可以对一名角色造成一点伤害;若<军略>标记的数量为偶数,你可以横置一名角色并弃置其区域内的一张牌.若<军略>标记的数量超过7个,你可以移去全部<军略>标记并对所有其他角色造成一点伤害',
						绽火: '绽火',
						绽火_info: '出牌阶段开始时,你可以移去全部<军略>标记,令至多等量的已横置角色弃置所有装备区内的牌,受到1点火焰伤害',
						凤鸣: '凤鸣',
						凤鸣_info: '锁定技,回合开始或结束时,你使用【鸾凤和鸣剑*♠️️️️2】,并并摸两张牌',
						昭l烈: '昭烈',
						昭l烈_info: '摸牌阶段摸牌时,你可以多摸一张,指定你攻击范围内的一名角色亮出牌堆顶上10张牌,将其中的非基本牌和【桃】置于弃牌堆,该角色进行二选一:你对其造成X点伤害,他获得这些基本牌;或他弃置X张牌,你获得这些基本牌.(X为其中非基本牌的数量)',
						龙怨: '龙怨',
						龙怨_info: '转换技,①出牌阶段开始时,你可回复一点体力并摸2张牌,本回合你的红色手牌均视为火杀且无距离限制.②出牌阶段开始时,你加1点体力上限并摸2张牌,本回合你的锦囊牌均视为雷杀且无使用次数限制',
						允忠: '允忠',
						允忠2: '允忠',
						允忠_info: '锁定技.你受伤/回复体力后,你回复一点体力或对一名角色造成1点伤害;每名角色的回合限一次,你获得手牌或失去手牌后,你摸一张牌或弃置一名其他角色一张牌',
						博览: '博览',
						博览_info: '一名其他角色回合开始时,你可令其失去一点体力并失去所有技能直到游戏结束',
						仪法: '仪法',
						仪法2: '仪法',
						仪法_info: '其他角色使用【杀】或黑色普通锦囊牌时,可令其手牌上限-1直到游戏结束',
						驭袍: '驭袍',
						驭袍_info: '锁定技,回合开始或结束时,你使用【国风玉袍*♦️️️3】,并并摸两张牌',
						gongxin神吕蒙: '攻心',
						gongxin神吕蒙_info: '出牌阶段限5次,观看一名角色手牌将其中一张红色牌置于牌堆顶或弃置',
						涉猎: '涉猎',
						涉猎_info: '摸牌阶段,你可回复一点体力展示牌堆顶的五张牌获得不同花色的牌各一张',
						功獒: '功獒',
						功獒_info: '锁定技,当一名角色进入濒死状态时,你增加一点体力上限并回复一点体力,摸2张牌',
						威重: '威重',
						威重_info: '锁定技,当一名角色的体力上限变化时,你摸一张牌并获得一名其他角色一张牌',
						举义: '举义',
						举义_info: '准备阶段,若你的体力上限大于全场角色数,你获得<威重>,你摸等同于你体力上限的张数,令一名角色获得技能<溃散>',
						溃散: '溃散',
						溃散_info: '锁定技,结束阶段,你失去1点体力并减1点体力上限',
						忠鉴: '忠鉴',
						忠鉴_info: '出牌阶段限两次,你可弃置一名角色3张牌并摸一张牌',
						才识: '才识',
						才识2: '才识',
						才识3: '才识',
						才识4: '才识',
						才识_info: '出牌阶段开始你可④回复一点体力③手牌上限永久加一②令该角色无法使用牌直到你回合结束①令一名其他角色手牌上限永久减一直到游戏结束',
						诏颂: '诏颂',
						诏颂2: '诏颂',
						诏颂3: '诏颂',
						诏颂_info: '一名角色出牌阶段开始时,你可摸一张牌获得一名角色一张牌,并可再选择一名角色令其使用杀无攻击范围限制且使用目标数可加二直到其下个回合结束并摸一张牌增加一点体力上限回复一点体力,并可再选择一名角色令其下个回合不能使用杀并失去一点体力并弃置其一张牌',
						离思: '离思',
						离思_info: '每回合限制一次当你使用或打出的牌即将进入弃牌堆你可将之交给一名角色并摸两张牌',
						三陈: '三陈',
						三陈_info: '出牌阶段,你可选择一名本回合内未选择过的角色.其摸六张牌,弃置三张牌.若其以此法弃置的牌的类别均不相同,则其摸两张牌.否则你本阶段内不能再发动〖三陈〗',
						破竹: '破竹',
						破竹_info: '出牌阶段,你可选择一到四名角色.其选择弃置其已损失体力值的牌,对其造成一点伤害',
						昭讨: '昭讨',
						昭讨_info: '回合开始时可获得弃甲曳兵,过河拆桥,万箭齐发,火烧连营各一张(随机花色点数)',
						毦征: '毦征',
						毦征_info: '回合开始阶段,召唤士兵白毦斥候和白毦兵与你协同作战,失去此技能',
						shennu神怒: '神怒',
						shennu神怒_info: '锁定技,游戏开始时,你获得四枚暴怒标记,每当你造成或受到一点伤害,你获得一枚神怒标记',
						愤世: '愤世',
						愤世_info: '出牌阶段,你可以弃置6枚暴怒标记,对场上所有其他角色造成一+剩余标记数点伤害,令其弃置4*(剩余标记数+1)张牌',
						空前kq: '空前',
						空前kq_info: '出牌阶段,你可以弃置两枚暴怒标记并获得技能【无双】直到回合结束',
						juemou绝谋: '绝谋',
						juemou绝谋_info: '每当一名角色使用锦囊牌,你可令当前角色失去一点体力,你获得一枚神怒标记',
						炼戟: '炼戟',
						炼戟_info: '锁定技,回合开始或结束时,你使用【修罗炼狱戟*♦️️️️Q】,并获得一枚神怒标记,并摸两张牌',
						无双魔界神吕布: '无双',
						无双魔界神吕布1: '无双',
						无双魔界神吕布2: '无双',
						无双魔界神吕布_info: '锁定技,你使用的【杀】或【决斗】需要两张【闪】或【杀】响应',
						當先: '當先',
						當先_info: '锁定技,一名角色准备阶段,你摸三张牌执行一个额外的出牌阶段',
						伏櫪: '伏櫪',
						伏櫪_info: '当一名角色处于濒死状态时,可以令其将体力回复至体力上限,可令一名角色翻面',
						落乌: '落乌',
						落乌_info: '锁定技,回合开始或结束时,你使用【金乌落日弓*♥️️️5】,并摸两张牌',
						慧论: '慧论',
						慧论_info: '锁定技,回合开始或结束时,你使用【十胜十败论*♣️️️/♠️️️/♥️️️/♦️️️️10】,并摸两张牌',
						辉翊: '辉翊',
						辉翊_info: '锁定技,回合开始或结束时,你使用【鬼谋冰晶扇*♠️️️1】,并摸两张牌',
						魄襲: '魄襲',
						魄襲_info: '出牌阶段限2次,你可以观看一名其他角色的手牌,你可以弃置你与其手里攻击四张牌(对方不足则全弃).若如此做,根据此次弃置你的牌的数量执行以下效果:1.没有,增加一点体力上限;2.一张,本回合手牌上限加1;三张,回复一点体力;四张,摸四张牌',
						劫營: '劫營',
						劫營_info: '游戏开始时,你获得一个<營>标记.结束阶段,你可以将<營>标记置于一名角色的武将牌旁;有<營>标记的角色摸牌阶段多摸一张牌、出牌阶段可多使用一张【杀】、手牌上限+1.有<營>标记的其他角色的回合结束后,你获得其所有手牌',
						辟易: '辟易',
						辟易_info: '回合开始阶段,召唤锦帆奇兵、锦帆轻弓队、锦帆传令使,失去此技能',
						十胜: '十胜',
						十胜1: '十胜',
						十胜_info: '一名角色使用锦囊牌后你可令一名角色获得一枚胜标记,若你有胜标记,你可选择1到胜标记数的角色,令该牌对这些角色执行一次结算,一名有胜标记的角色受到伤害后你可移出其一枚胜标记令其摸2倍当前伤害值的牌',
						十败: '十败',
						十败1: '十败',
						十败2: '十败',
						十败_info: '一名角色使用杀后你可令一名角色获得一枚败标记,一名有败标记的角色受到伤害后你可移出其一枚败标记令其选择弃置两张牌,每当一名角色使用非装备牌若你有败标记,你可令此牌目标角色减一到你的败标记数',
						dingcesgj: '定策',
						dingcesgj神郭嘉1: '定策',
						dingcesgj神郭嘉2: '定策',
						dingcesgj_info: '出牌阶段开始时,你可令一名角色不能使用或打出除杀以外的牌直到其下个回合结束后,并可令一名角色不能使用或打出除随机锦囊以外的牌直到其下个回合结束后',
						擅s专z: '擅专',
						擅s专z_info: '当你对其他角色造成伤害后,则你可以将其的一张牌置于其的判定区.若此牌不为延时锦囊牌且此牌为:红色,此牌视为【乐不思蜀】;黑色,此牌视为【兵粮寸断】.回合结束时,你可摸一张牌',
						托t孤g: '托孤',
						托t孤g_info: '出牌阶段限三次,你可以猜测手牌中黑色牌最多的角色是谁,若猜对,你可以观看所有其他角色的手牌并获得任意一张并摸两张牌',
						助势: '助势',
						助势_info: '魏势力的角色的回复体力后,全场友方角色摸1张牌',
						忿肆: '忿肆',
						忿肆_info: '锁定技,准备阶段,你对一名造成1点伤害,其视为你对其使用一张【杀】你视为对其使用一张【杀】',
						潜渊: '潜渊',
						潜渊_info: '当你受到伤害后,你可以观看牌堆顶的五张牌并获得其中至多X张牌(X为你已损失的体力值)',
						决讨: '决讨',
						决讨_info: '出牌阶段开始时,你可以选择一名角色对其使用牌堆的1张牌,共可至多执行5次(目标须合法若不合法跳过该次)',
						zhu助shi势: '助势',
						zhu助shi势_info: '魏势力的角色的回复体力后,全场友方角色摸2张牌',
						fen忿si肆: '忿肆',
						fen忿si肆_info: '锁定技,准备阶段,你对一名造成1点伤害,其视为对你使用一张【杀】你视为对其使用2张【杀】',
						qian潜yuan渊: '潜渊',
						qian潜yuan渊_info: '当你受到伤害后,你可以观看牌堆顶的7张牌并获得其中至多X张牌(X为你已损失的体力值)',
						jue决tao讨: '决讨',
						jue决tao讨_info: '出牌阶段开始时,你可以选择一名角色对其使用牌堆的1张牌,共可至多执行7次(目标须合法若不合法跳过该次)',
						佑关: '佑关',
						佑关wt: '佑关',
						佑关wy: '佑关',
						佑关1: '佑关',
						佑关2: '佑关',
						佑关3: '佑关',
						佑关4: '佑关',
						佑关_info: '一名角色出牌阶段结束时,则你可声明一个花色,本回合该花色的牌不计入该角色的手牌上限',
						佑关wt_info: '一名角色出牌阶段结束时,则你可声明一个花色,本回合该花色的牌不计入该角色的手牌上限',
						佑关wy_info: '一名角色出牌阶段结束时,则你可声明一个花色,本回合该花色的牌不计入该角色的手牌上限',
						摇佩: '摇佩',
						摇佩_info: '一名角色弃牌阶段结束时,你可令其摸两张牌或回复一点体力,之后你执行另一项',
						鸣鸾: '鸣鸾',
						鸣鸾_info: '一名角色回复体力后,你可弃置一张牌(无牌则不弃)摸该角色的牌数的牌',
						三顾: '三顾',
						三顾_info: '一名角色的出牌阶段开始时,你可以观看牌堆顶5张牌,以任意顺序置于牌堆顶或牌堆底,你展示牌堆顶的3张牌,该角色从游戏外获得与这三张相同牌名花色点数的印卡',
						轶祖: '轶祖',
						轶祖_info: '当你成为杀或决斗的目标时,你可增加一点体力上限,回复全部体力',
						晋冕: '晋冕',
						晋冕_info: '回合开始或结束时,你使用【虚妄之冕*♠️️️6】,并获得一枚忍戒标记,并摸两张牌',
						忍戒qkss: '忍戒',
						忍戒qkss2: '忍戒',
						忍戒qkss_info: '锁定技,每当你受到一次伤害后,你获得2倍你受到的伤害数量的<忍>标记;锁定技,每当你于弃牌阶段内因你的弃置而失去手牌时,你获得2倍你失去的手牌数量的<忍>标记',
						拜印qkss: '拜印',
						拜印qkss_info: '准备阶段开始时,若你拥有的<忍>标记枚数不小于4,你加1点体力上限,回复一点体力,获得<极略>',
						极略qkss: '极略',
						极略qkss_info: '每当一名角色的判定牌生效前,若你有手牌,你可以弃1枚<忍>标记发动<鬼才>;每当你受到伤害后,你可以弃1枚<忍>标记,发动<放逐>;每当你使用锦囊牌时,你可以弃1枚<忍>标记,发动<集智>;出牌阶段限一次,若你有牌,你可以弃1枚<忍>标记,发动<制衡>;出牌阶段,你可以弃1枚<忍>标记,执行<完杀>的效果,直到回合结束',
						极略qkss_guicai: '鬼才',
						极略qkss_fangzhu: '放逐',
						极略qkss_wansha: '完杀',
						w完杀sssm: '完杀',
						极略qkss_zhiheng: '制衡',
						极略qkss_jizhi: '集智',
						连破qkss: '连破',
						连破qkss2: '连破',
						连破qkss_info: '若你在一回合内击杀了至少一名角色或使一名角色进入濒死,此回合结束后,你可以进行一个额外的回合',
						碧落玄鹄三顾: '三顾',
						碧落玄鹄三顾_info: '一名角色的出牌阶段开始时,你可以观看牌堆顶5张牌,以任意顺序置于牌堆顶或牌堆底,你展示牌堆顶的3张牌,该角色与你从游戏外获得与这三张相同牌名花色点数的印卡',
						碧落玄鹄轶祖: '轶祖',
						碧落玄鹄轶祖_info: '当你成为杀或决斗的目标时,你可增加2点体力上限,回复全部体力',
						观星妙算神谟: '观谟',
						观星妙算神谟_info: '回合开始时或一名角色摸牌阶段摸牌前,你可发动一次观星,且观看牌数为5',
						挑衅妙算神谟: '挑衅',
						挑衅妙算神谟_info: '出牌阶段限两次,你可选择一名角色弃置其两张牌,可再选择一名角色视为该角色对你所弃牌的角色使用一张杀',
						志继妙算神谟: '志继',
						志继妙算神谟_info: '回合开始时,若你手牌数小于体力上限,你摸两张牌回复一点体力',
						膂lv力li: '膂力',
						膂lv力li_info: '当你造成伤害后,你可选择:1,若你的体力值大于你的手牌数,你摸Ｘ张牌;2,若你的手牌数大于你的体力值且你已受伤,你回复Ｘ点体力(Ｘ为你的手牌数与体力值之差的绝对值)',
						仇chou决jue: '仇决',
						仇chou决jue_info: '一名角色的回合结束时,若你的手牌数和体力值相差3或更多,你增加1点体力上限并获得技能〖背水〗',
						背bei水shui: '背水',
						背bei水shui_info: '准备阶段,若你的手牌数或体力值小于2,你增加1点体力上限并获得技能〖清剿〗',
						清qing剿jiao: '清剿',
						清qing剿jiao_info: '出牌阶段开始时,若你有手牌,你可以弃置所有手牌,令一名角色弃置等量的手牌,你从牌堆或弃牌堆中随机获得八张牌名各不相同且副类别不同的牌',
						急筹: '急筹',
						急筹_info: '一名角色回合开始时,若其为友方角色可视为对其使用桃园结义,五谷丰登,无中生有,联军盛宴,远交近攻中的随机一个锦囊;若其为敌方角色,可视为对其使用决斗,铁索连环,过河拆桥,顺手牵羊,戮力同心,调虎离山中的随机一个锦囊',
						机谕: '机谕',
						机谕_info: '当你受到伤害后,你可摸当前牌堆和弃牌堆内包含的非延时锦囊牌牌名数的牌',
						烈铸: '烈铸',
						烈铸_info: '回合开始或结束时,你可令全体友方角色装备【烈锻火刀*♥️️️10】,你摸两张牌并获得一张杀',
						蒺藜蛮王奋击: '蒺藜',
						蒺藜蛮王奋击_info: '每回合限五次,你使用牌后摸5+1到你攻击范围累加值的和张数的牌,对一名角色造成一点伤害',
						藜击: '藜击',
						藜击_info: '回合开始或结束时,你使用【铁蒺藜骨朵*♠️️️9】,并摸两张牌',
						囚避: '囚避',
						囚避2: '囚避',
						囚避3: '囚避',
						囚避_info: '出牌阶段开始时,你可令你的牌无法指定其他角色为目标,若如此做直到下回合开始你无法成为杀或决斗的目标',
						封尉: '封尉',
						封尉2: '封尉',
						封尉_info: '弃牌阶段结束后,你可视为对一名角色使用弃牌阶段弃牌数的杀,一名角色回复体力结束后若其体力值为1,你增加一点体力上限回复一点体力,且发动囚避时可摸你体力上限数的牌',
						昊宠: '昊宠',
						昊宠_info: '你使用牌后,若你的体力上限大于手牌数,你可将手牌数调整至与体力上限相等,你增加一点体力上限回复一点体力.若你的体力上限小于手牌数,你可选择一名角色令其弃置两张牌',
						//昊宠_info:'你使用牌后,若你的体力上限与手牌数不相等,你可将手牌数调整至与体力上限相等,若以此法摸牌你增加一点体力上限回复一点体力;以此法弃牌,你可选择一名角色令其弃置两张牌',
						矜谨: '矜谨',
						矜谨_info: '每回合限2次,当你对一名角色造成伤害后或受到一名角色造成的伤害后,可令其弃置你体力值与手牌数的差值的绝对值且至少为1张牌,你摸等量的牌',
						早岐: '早岐',
						早岐_info: '出牌阶段限一次,你可弃置一名有牌的角色一张牌,若该牌为黑色视为对其使用三次顺手牵羊,若为红色视为对其使用三次偷梁换柱',
						潜伺: '潜伺',
						潜伺_info: '每名角色回合限2次,一名角色使用非伤害/伤害标签牌后,你从游戏外获得一张牌堆或弃牌堆所包含的伤害/非伤害标签牌',
						z铸r刃: '铸刃',
						z铸r刃_info: '回合开始或结束时,你可令全体友方角色随机装备【焰雷淬刀*♥️️️8】或【火淬刀*♥️️️8】,你摸两张牌',
						t天j匠: '天匠',
						t天j匠_info: '你可装备任意数量武器牌,触发此效果时你摸两张牌,选择一名角色视为对其使用一张杀',
						镬惩: '镬惩',
						镬惩_info: '回合开始或结束时,你装备【青铜镬*♠️️️2】,并摸两张牌',
						杀绝镬惩俘兵: '杀绝',
						杀绝镬惩俘兵2: '杀绝',
						杀绝镬惩俘兵_info: '锁定技,你对敌方角色造成的伤害始终加一,导致一名角色进入濒死的牌在结算结束后改为由你获得',
						凶镬镬惩俘兵: '凶镬',
						凶镬镬惩俘兵1: '凶镬',
						凶镬镬惩俘兵2: '凶镬',
						凶镬镬惩俘兵_info: '一名角色回合开始时,你可获得其手牌区与装备区各一张牌,对其造成一点火焰伤害,其本回合不能使用或打出杀,其失去一点体力,本回合手牌上限-2',
						密诏困龙欲出: '密诏',
						密诏困龙欲出2: '密诏',
						密诏困龙欲出_info: '出牌阶段限两次,你可交给一名角色全部手牌,并可令一名角色摸等量牌,并可令一名角色弃置一张牌再弃置一张红色牌,视为你交给牌的角色对其使用一张杀,你以此法交出的牌称为<诏>,一名角色使用诏后,你可令其与你随机执行以下一项:回复一点体力;摸两张牌;获得两张闪;获得两张金蝉脱壳;',
						天命困龙欲出: '天命',
						天命困龙欲出_info: '当你成为杀的目标时可弃置两张牌摸4张牌,并可令一名角色也弃置两张牌摸4张牌',
						哲妇gh: '哲妇',
						哲妇gh_info: '你于回合外失去牌结束后,你可以选择一项: 1,获得一张你选择的基本牌(花色点数为随机),对一名角色造成一点伤害; 2,对一名角色造成一点伤害,令其弃置你选择的基本牌名的所有手牌,你摸等量+1张牌',
						遗毒gh: '遗毒',
						遗毒gh_info: '出牌阶段限2次,当你使用【杀】或伤害类锦囊牌指定其他角色为目标后,你可令选择其中一个目标令其弃置全部基本牌或锦囊牌,你摸3张牌',
						蒺藜骁勇金衔: `<span style="color: #FF0000;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">蒺藜</span>`,
						蒺藜骁勇金衔_info: `<span style="color: #FF0000;
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">出牌阶段你可额外使用你攻击范围数次杀,每回合限五次,你使用牌后摸5+你攻击范围值张牌,可对一名角色造成一点伤害</span>`,
						却敌: '却敌',
						却敌2: '却敌',
						却敌_info: `<span style="color: rgba(56, 51, 83, 1);
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">每回合限2次,当你使用【杀】或【决斗】指定目标时,你可获得2张牌,令其弃置2张基本牌,其减1点体力上限,此【杀】或【决斗】伤害+1.</span>`,
						椎锋: '椎锋',
						椎锋_info: `<span style="color: rgba(56, 51, 83, 1);
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">出牌阶段限4次,你可以令一名角色失去1点体力,视为对其使用一张【决斗】.</span>`,
						冲坚: '冲坚',
						冲坚_info: `<span style="color: rgba(28, 40, 56, 1);
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">结束阶段或你濒死时,你可获得你装备牌数张酒,可获得一名角色你装备牌数张牌视为对其使用一张杀.</span>`,
						仇绝: '仇绝',
						仇绝_info: `<span style="color: rgba(0, 85, 43, 1);
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">一名角色濒死时,你可摸2张牌,重置椎锋的使用次数.</span>`,
						钧决: '钧决',
						钧决_info: `<span style="color: rgba(0, 43, 43, 1);
            filter: brightness(3);
            font-size: 20px;
            font-weight: bold;">回合开始阶段,召唤文帝重装步兵×3与你协同作战,失去此技能.`,
						文鸯不臣: '不臣',
						文鸯不臣2: '不臣',
						文鸯不臣_info: '<span style="color:blue;animation: blueGreenColorChange 3s linear infinite;">选将阶段随机势力范围(魏,吴)的一个势力,回合开始或有其他角色濒死时可变更势力(非国战模式改为变更身份).</span>',
						成章: '成章',
						成章_info: '<span style="color: #b0d0e2">回合开始时,你可选择七步诗中的一个文字,随机获得1～7首字母与该文字相同牌名的牌,若无则改为摸1～7张牌</span>',
						czre落英: '落英',
						czre落英1: '落英',
						czre落英2: '落英',
						czre落英2_noconf: '落英·判定',
						czre酒诗: '酒诗',
						czre酒诗1: '酒诗',
						czre酒诗2: '酒诗',
						czre酒诗3: '酒诗',
						czre落英_info: '<span style="color: #b0d0e2">当一名角色的♣️️牌,因弃牌或判定而进入弃牌堆时,你可以获得之并摸等量张牌</span>',
						czre酒诗_info: '<span style="color: #b0d0e2">若你的武将牌正面朝上,你可以(在合理的时机)将你的武将牌翻面来视为使用一张【酒】;当你的武将牌背面朝上时你受到伤害,你可在受到伤害结束后将之翻回正面,并摸两张牌增加一点体力上限</span>',
						赐铠: '赐铠',
						赐铠_info: '<span style="color: #b0d0e2">回合开始或结束时,你摸两张牌并装备【明光铠*♠️️️1】</span>',
						曹植不臣: '不臣',
						曹植不臣2: '不臣',
						曹植不臣_info: '<span style="color:blue;animation: bluewhiteColorChange 3s linear infinite;">选将阶段随机势力范围(魏,群)的一个势力,回合开始或有其他角色濒死时可变更势力(非国战模式改为变更身份).</span>',
						灵慧: '灵慧',
						灵慧_info: '回合结束时,你可随机执行(摸两张牌可使用一张牌)1～3次',
						黠策: '黠策',
						黠策_info: '你受到伤害后,你可令一名角色所有非锁定技失效直到当前回合结束后,并有0.5概率回复1点体力',
						御心: '御心',
						御心_info: '每名角色回合限一次,一名角色濒死时你可令其回复体力至与你相同(至少回复至1)',
						七鸣: '七鸣', //font-family: hyxk;
						七鸣_info: `<span style="
            font-size: 60px;
            color: blue;
            text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(0, 0, 0, 0.5), -1px 1px 0 rgba(0, 0, 0, 0.5), 1px 1px 0 rgba(0, 0, 0, 0.5);
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 2px;
            -webkit-text-stroke-color: blue;
            font-weight: 4px;">回合开始或结束时,你摸两张牌并装备【七鸣枪*♠️️️7】</span>`,
						纵驰: '纵驰',
						纵驰2: '纵驰',
						纵驰_info: '<span style="color: rgb(16, 47, 29);filter:brightness(3);" >你对姓氏为<司马>的角色造成的伤害+你黑色牌数,并摸武将名称名称字符包含s,i,m,a角色数张牌(若不为司马姓氏则只执行摸牌效果)</span>',
						横骋: '横骋',
						横骋_info: '<span style="font-size: 24px;background: linear-gradient(90deg, #0074D9, #2ECC40, #0074D9); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">姓氏为司马的角色回合结束后你可令其弃置两张牌失去一点体力,其他角色与你计算距离+你黑色牌数,你计算与其他角色距离-你黑色牌数</span>',
						援盾: '援盾',
						援盾_info: '<span style="color: #c27ebc;font-size:2.5em">回</span><span style="color: #7fc73e;font-size:1em">合</span><span style="color: #40dfce;font-size:3em">开</span><span style="color: #1317e9;font-size:2.5em">始</span><span style="color: #a404c8;font-size:3em">时</span><span style="color: #2691ec;font-size:2.5em">,</span><span style="color: #c8fb18;font-size:1.5em">所</span><span style="color: #fea7bc;font-size:2em">有</span><span style="color: #7cbf1e;font-size:2.5em">友</span><span style="color: #b7b8e6;font-size:2em">方</span><span style="color: #25593e;font-size:2em">角</span><span style="color: #a773f9;font-size:2.5em">色</span><span style="color: #5dda86;font-size:2em">获</span><span style="color: #54756b;font-size:2em">得</span><span style="color: #2bc299;font-size:1.5em">一</span><span style="color: #323a00;font-size:3.5em">张</span><span style="color: #5e003d;font-size:1em">随</span><span style="color: #9b27a9;font-size:2.5em">机</span><span style="color: #8c846f;font-size:1em">基</span><span style="color: #cf17;font-size:1.5em">本</span><span style="color: #dffd41;font-size:0.5em">牌</span><span style="color: #42dc1d;font-size:2.5em">,</span><span style="color: #aa6f76;font-size:1em">若</span><span style="color: #79d10b;font-size:1em">该</span><span style="color: #d7b779;font-size:1.5em">角</span><span style="color: #cf130c;font-size:2em">色</span><span style="color: #f01887;font-size:2.5em">没</span><span style="color: #7b701a;font-size:2em">有</span><span style="color: #19f902;font-size:2.5em">装</span><span style="color: #805ce2;font-size:0.5em">备</span><span style="color: #bfe82c;font-size:1em">【</span><span style="color: #1ac42d;font-size:2.5em">天</span><span style="color: #24e3c9;font-size:1em">机</span><span style="color: #89365d;font-size:1.5em">盾</span><span style="color: #ba85b6;font-size:2em">*</span><span style="color: #78461c;font-size:0.5em">♠️️</span><span style="color: #af3f35;font-size:1.5em">️</span><span style="color: #ec20c8;font-size:2em">2</span><span style="color: #809373;font-size:2em">】</span><span style="color: #85c2e0;font-size:2.5em">则</span><span style="color: #af2567;font-size:1.5em">装</span><span style="color: #50f6ff;font-size:3em">备</span><span style="color: #1c00ed;font-size:2.5em">之</span><span style="color: #ea9030;font-size:3em">.</span>',
						东援: '东援',
						东援_info: '<span style="color: #683f44;font-size:1.5em">一</span><span style="color: #4712b0;font-size:2.5em">名</span><span style="color: #a163dc;font-size:2em">角</span><span style="color: #c2891a;font-size:1em">色</span><span style="color: #d0b6bc;font-size:3em">受</span><span style="color: #a30da;font-size:3em">到</span><span style="color: #95306e;font-size:2em">0</span><span style="color: #423d24;font-size:2.5em">点</span><span style="color: #17cd29;font-size:2em">伤</span><span style="color: #c20e3e;font-size:3em">害</span><span style="color: #e53723;font-size:2em">后</span><span style="color: #cf403b;font-size:1em">,</span><span style="color: #589bfb;font-size:1em">你</span><span style="color: #44de6c;font-size:2.5em">可</span><span style="color: #51c2d7;font-size:1em">令</span><span style="color: #ae76df;font-size:1.5em">其</span><span style="color: #17b23d;font-size:2em">回</span><span style="color: #1b8f30;font-size:0.5em">复</span><span style="color: #eeda21;font-size:3em">1</span><span style="color: #65d744;font-size:0.5em">点</span><span style="color: #fad6f3;font-size:2em">体</span><span style="color: #a39f7;font-size:2.5em">力</span><span style="color: #8fea1c;font-size:3em">.</span>',
					},
					skill: {
						背水一战: {
							nobracket: true,
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								'step 0';
								var num;
								if (player.hp >= 3) {
									num = 1;
								} else num = 3;
								player.chooseTarget(
									get.prompt2('背水一战'),
									[1, num],
									function (card, player, target) {
										return target != player && !target.isMad();
									},
									function (target) {
										return -get.attitude(_status.event.player, target);
									},
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
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									event.current.goMad({ player: 'phaseAfter' });
									event.goto(2);
								}
							},
							ai: {
								threaten: 0.5,
								order: 6,
							},
						},
						淮阴: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							_priority: 2018,
							filter(event, player) {
								return player.isAlive();
							},
							content() {
								var chat = ['撼天地', '震乾坤'].randomGet();
								player.say(chat);
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].countCards('h', 'tao') > 0 || game.players[i].countCards('h', { type: 'equip' }) > 0) {
										player.draw();
									}
								}
							},
							ai: {
								threaten: 2,
								expose: 0.3,
							},
						},
						奇正: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							_priority: 8,
							filter(event, player) {
								return game.findPlayer(function (current) {
									return current.hasSkill('兵仙2') && current.storage.兵仙2 > 0;
								});
							},
							content() {
								'step 0';
								trigger.cancel();
								('step 1');
								var target = game.findPlayer(function (current) {
									return current.storage.兵仙2 > 0;
								});
								target.storage.兵仙2--;
								target.update();
								if (target.storage.兵仙2 <= 0) {
									player.line(target, 'green');
									//player.addSkill('兵仙');
									target.removeSkill('兵仙2');
									target.unmarkSkill('兵仙2');
									target.update();
								}
							},
							ai: {
								order: 8,
								threaten: 2.4,
							},
						},
						兵仙1: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							popup: false,
							_priority: 89,
							filter(event, player) {
								//  return event.player.hasSkill('兵仙4');
								return player.storage.兵仙3 && player.storage.兵仙3.isIn();
							},
							content() {
								//trigger.player.draw(player.storage.兵仙2);
								var target = player.storage.兵仙3;
								target.draw(Math.floor(player.storage.兵仙2 / 2));
								player.storage.兵仙2++;
								if (player.storage.兵仙2 >= 0) {
									player.line(target, 'green');
									//target.addSkill('兵仙');
									target.recover(2);
								}
							},
						},
						兵仙3: {
							audio: 'ext:名存实亡/audio:1',
							trigger: {
								player: 'dieBegin',
							},
							silent: true,
							filter(event, player) {
								return player.storage.兵仙3 && player.storage.兵仙3.isIn();
							},
							content() {
								'step 0';
								'step 1';
								var target = player.storage.兵仙3;
								player.line(target, 'green');
								player.removeSkill('兵仙2');
								//  target.addSkill('兵仙');
								target.update();
							},
							forced: true,
							popup: false,
						},
						兵仙2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							_priority: 9,
							forced: true,
							init(player) {
								player.storage.兵仙2 = 0;
							},
							intro: {
								name: '兵仙',
								content: '剩下#个兵仙标记',
							},
							marktext: '兵',
							filter(event, player) {
								return player.hasSkill('兵仙2') && player.storage.兵仙2 > 0;
							},
							content() {
								if (!player.countCards('e')) {
									player.damage();
								} else {
									player.discard(player.getCards('e').randomGet());
								}
							},
							ai: {
								expose: 0.5,
							},
						},
						兵仙: {
							audio: 'ext:名存实亡/audio:1',
							trigger: {
								player: 'damageEnd',
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0;
							},
							filter(event, player) {
								return event.source && !event.source.hasSkill('兵仙2');
							},
							content() {
								player.$fullscreenpop('九空兵仙营', 'water');
								player.line(trigger.source);
								trigger.source.addSkill('兵仙1');
								trigger.source.addSkill('兵仙2');
								trigger.source.addSkill('兵仙3');
								trigger.source.storage.兵仙3 = player;
								trigger.source.markSkill('兵仙2');
								trigger.source.storage.兵仙2 += 9;
								trigger.source.update();
								//player.addSkill('兵仙4');
								//player.removeSkill('兵仙');
							},
							ai: {
								basic: {
									result: {
										player: 1,
									},
									expose: 0.8,
								},
							},
						},
						zhaogao_zhilu: {
							audio: 'ext:名存实亡/audio:true',
							trigger: {
								player: 'damageBegin',
							},
							_priority: 10,
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								if (player.countCards('h') <= 0) {
									player.draw(game.countGroup());
								} else {
									player.draw(player.countCards('h'));
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing')) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp >= 4) return [1, get.tag(card, 'damage') * 3];
											if (target.hp == 3) return [1, get.tag(card, 'damage') * 2];
											if (target.hp == 2) return [1, get.tag(card, 'damage') * 1];
										}
									},
								},
							},
						},
						zhaogao_gaizhao: {
							audio: 'ext:名存实亡/audio:true',
							trigger: {
								global: 'useCardToBefore',
							},
							filter(event, player) {
								return event.target != player && get.type(event.card) != 'equip' && event.targets.length == 1;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('zhaogao_gaizhao'), function (card, player, target) {
										return target != trigger.target;
									})
									.set('ai', function (target) {
										if (trigger.card.name != 'wuzhong' && trigger.card.name != 'jiu' && trigger.card.name != 'tao') {
											return -get.attitude(player, target);
										} else {
											if (player.getEnemies().includes(trigger.player)) return get.attitude(player, target);
										}
										return 0;
									});
								('step 1');
								if (result.bool) {
									trigger.target = result.targets[0];
									game.log(player, '将', trigger.card, '的目标重新指定为' + get.translation(result.targets[0]));
									if (result.targets[0] == player) {
										player.draw(2);
										player.gainMaxHp();
									}
									trigger.untrigger();
									trigger.trigger('useCardToBegin');
								}
							},
						},
						zhaogao_haizhong: {
							audio: 'ext:名存实亡/audio:true',
							intro: {
								content: 'mark',
							},
							trigger: {
								global: 'recoverAfter',
							},
							forced: true,
							filter(event, player) {
								return event.player.group != 'qun';
							},
							logTarget: 'player',
							content() {
								'step 0';
								if (!trigger.player.storage[event.name]) trigger.player.storage[event.name] = 0;
								event.num = Math.max(1, trigger.player.storage[event.name]);
								trigger.player.storage[event.name]++;
								trigger.player.markSkill(event.name);
								trigger.player.chooseToDiscard('害忠:弃置一张红色牌,或受到' + event.num + '点伤害', { color: 'red' }).ai = lib.skill.shangyang_bianfa.check;
								('step 1');
								if (!result.bool) trigger.player.damage(num);
							},
						},
						zhaogao_aili: {
							audio: 'ext:名存实亡/audio:true',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								var list = [];
								for (var i = 0; i < 2; i++) {
									var cardx = get.cardPile2(function (card) {
										return get.type(card) == 'trick' && !list.includes(card);
									});
									if (cardx) list.push(cardx);
								}
								if (list.length) player.gain(list, 'draw');
							},
						},
						shangyang_bianfa: {
							audio: 'ext:名存实亡/audio:true',
							mod: {
								selectTarget(card, player, range) {
									if (_status.kangqinEvent == '变法图强' && card.name == 'tao' && Array.isArray(range) && range[1] != -1) range[1]++;
								},
							},
							enable: 'chooseToUse',
							usable: 1,
							filterCard(card) {
								return get.type(card) == 'trick';
							},
							viewAs: {
								name: 'tao',
							},
							viewAsFilter(player) {
								if (!player.countCards('h', { type: 'trick' })) return false;
							},
							prompt: '将一张普通锦囊牌当作【桃】使用',
							check(card) {
								return 9 - get.value(card);
							},
							ai: {
								basic: {
									order: 10,
									useful: 1,
									value: 5.5,
								},
								result: {
									target: -1.5,
								},
								tag: {
									damage: 1,
									recover: 1,
									save: 1,
								},
							},
						},
						shangyang_limu: {
							audio: 'ext:名存实亡/audio:true',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								trigger.nowuxie = true;
							},
						},
						shangyang_kencao: {
							audio: 'ext:名存实亡/audio:true',
							init(player) {
								if (!player.storage.shangyang_kencao) player.storage.shangyang_kencao = 0;
							},
							marktext: '功',
							intro: {
								content: '当前有#个<功>标记',
							},
							trigger: {
								global: 'damageAfter',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.group == 'qun' && event.source.isAlive();
							},
							content() {
								if (trigger.source == player) {
									player.markSkill('shangyang_kencao');
									player.storage.shangyang_kencao += trigger.num;
									game.log(player, '获得了', trigger.num, '个<功>标记');
									if (player.storage.shangyang_kencao >= 3) {
										game.log(player, '移去了', player.storage.shangyang_kencao, '个<功>标记');
										player.storage.shangyang_kencao = 0;
										if (player.storage.shangyang_kencao <= 0) player.unmarkSkill('shangyang_kencao');
										player.gainMaxHp();
										player.recover();
									}
								} else {
									player.line(trigger.source);
									if (trigger.source.storage.shangyang_kencao == undefined) trigger.source.storage.shangyang_kencao = 0;
									trigger.source.markSkill('shangyang_kencao');
									trigger.source.storage.shangyang_kencao += trigger.num;
									game.log(trigger.source, '获得了', trigger.num, '个<功>标记');
									if (trigger.source.storage.shangyang_kencao >= 3) {
										game.log(trigger.source, '移去了', trigger.source.storage.shangyang_kencao, '个<功>标记');
										trigger.source.storage.shangyang_kencao = 0;
										if (trigger.source.storage.shangyang_kencao <= 0) trigger.source.unmarkSkill('shangyang_kencao');
										trigger.source.gainMaxHp();
										trigger.source.recover();
									}
								}
							},
						},
						shangyangbianfa_dying: {
							trigger: {
								player: 'dying',
							},
							forced: true,
							popup: false,
							forced: true,
							charlotte: true,
							filter(event, player) {
								return event.parent.type == 'shangyangbianfa';
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return get.color(card) == 'black' ? -1 : 0;
								});
								('step 1');
								if (result.color == 'black') {
									game.countPlayer(function (current) {
										if (current != player) current.addTempSkill('shangyangbianfa_dying_nosave', '_saveAfter');
									});
								}
							},
							subSkill: {
								nosave: {
									mod: {
										cardSavable() {
											return false;
										},
									},
								},
							},
						},
						shangyangbianfa: {
							nobracket: true,
							audio: 'ext:名存实亡/audio:true',
							enable: 'phaseUse',
							global: 'shangyangbianfa_dying',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							selectTarget: 1,
							content() {
								'step 0';
								var num = [1, 2].randomGet();
								target.damage(num).type = 'shangyangbianfa';
							},
							ai: {
								basic: {
									order: 5,
									useful: 1,
									value: 5.5,
								},
								result: {
									target: -1.5,
								},
								tag: {
									damage: 1,
								},
							},
							fullimage: true,
						},
						xwj_xqunying_tongji: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								var num = game.countPlayer(function (current) {
									return current.group == 'qun';
								});
								player.draw(num);
							},
						},
						楚歌: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return player.group != event.player.group;
							},
							content() {
								trigger.num++;
							},
						},
						拔山: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0;
							},
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou');
							},
							content() {
								if (player.hp > trigger.player.hp) {
									trigger.player.loseHp();
								}
								if (player.hp == trigger.player.hp) {
									trigger.player.turnOver();
								}
								if (player.hp < trigger.player.hp) {
									trigger.player.discard(trigger.player.getCards('h'));
								}
							},
							ai: {
								basic: {
									result: {
										player: 1,
									},
									expose: 0.8,
								},
							},
						},
						xwj_xqunying_wangxiao: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'damageEnd',
							},
							_priority: 3,
							filter(event, player) {
								return event.num > 1;
							},
							content() {
								'step 0';
								trigger.player.group = 'qun';
								game.log(trigger.player, '的势力变为群');
								if (get.mode() == 'guozhan') {
									//trigger.player.identity="qun";
									trigger.player._group = 'qun';
									trigger.player.node.identity.firstChild.innerHTML = get.translation('qun');
									trigger.player.node.identity.dataset.color = trigger.player.identity;
									if (trigger.player.name) lib.character[trigger.player.name][1] = 'qun';
									if (trigger.player.name1) lib.character[trigger.player.name1][1] = 'qun';
									if (trigger.player.name2) lib.character[trigger.player.name2][1] = 'qun';
								} else {
									if (trigger.player.name) lib.character[trigger.player.name][1] = 'qun';
									if (trigger.player.name1) lib.character[trigger.player.name1][1] = 'qun';
									if (trigger.player.name2) lib.character[trigger.player.name2][1] = 'qun';
								}
								('step 1');
								switch (trigger.player.group) {
									case 'qun':
										trigger.player.node.name.dataset.nature = 'watermm';
										break;
								}
							},
						},
						starjiangjue: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'damageBefore',
							},
							filter(event, player) {
								return player.hp >= 2;
							},
							forced: true,
							content() {
								trigger.source = player;
							},
						},
						starpoqin: {
							group: ['starpoqin_source', 'starpoqin_player'],
							audio: 'ext:名存实亡/audio:2',
							subSkill: {
								player: {
									audio: 'ext:名存实亡/audio:2',
									prompt: '你可以与其拼点,你防止此伤害,否则其伤害-1.',
									trigger: {
										player: 'damageBegin',
									},
									filter(event, player) {
										return event.source != event.player && event.source.countCards('h') > 0 && event.player.countCards('h') > 0;
									},
									content() {
										'step 0';
										player.chooseToCompare(trigger.source);
										('step 1');
										if (result.bool) {
											trigger.cancel();
										} else {
											trigger.num--;
										}
									},
								},
								source: {
									audio: 'ext:名存实亡/audio:2',
									filter(event, player) {
										return event.source != event.player && event.source.countCards('h') > 0 && event.player.countCards('h') > 0;
									},
									prompt: '你可以与其拼点,若你赢,你的伤害+1,否则你回复一点体力.',
									trigger: {
										source: 'damageBegin',
									},
									content() {
										'step 0';
										player.chooseToCompare(trigger.player);
										('step 1');
										if (result.bool) {
											trigger.num++;
										} else {
											player.recover();
										}
									},
								},
							},
						},
						starnijian: {
							trigger: {
								player: 'chooseCardBegin',
							}, //QQQ
							forced: true,
							audio: 'ext:名存实亡/audio:2',
							filter(event, player) {
								return player.hasZhuSkill('starnijian');
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('starnijian'), function (card, player, target) {
										return player != target && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.gainPlayerCard(event.target, true);
								} else {
									event.finish();
								}
							},
							ai: {
								expose: 0.2,
							},
							subSkill: {
								draw: {
									trigger: {
										player: 'loseEnd',
									},
									usable: 1,
									filter(event, player) {
										return _status.currentPhase != player && player.countCards('h') == 0 && player.hasZhuSkill('starnijian');
									},
									forced: true,
									content() {
										player.draw(Math.min(player.hp, 20));
									},
								},
							},
						},
						shouzhen: {
							audio: 'ext:名存实亡/audio:4',
							nobracket: true,
							trigger: {
								player: 'gainAfter',
							},
							forced: true,
							filter(event, player) {
								if (_status.currentPhase == player) return false;
								return event.getParent(2).name != 'shouzhen';
							},
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
						},
						严明: {
							nobracket: true,
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								var num = player.countCards('h') - player.countCards('h', { type: get.type(event.card) });
								return _status.currentPhase == player && event.targets.length == 1 && event.parent.name != '严明' && get.type(event.card) != 'equip' && get.type(event.card) != 'delay' && player.countCards('h') > 0 && num > 0 && event.targets[0].isAlive();
							},
							content() {
								'step 0';
								var type = get.type(trigger.card);
								player
									.chooseToDiscard('h', '弃置一张非' + get.translation(type) + '手牌使' + get.translation(trigger.card) + '额外结算一次', function (card) {
										return get.type(card) != type;
									})
									.set('ai', function (card) {
										return get.value(card) < 7;
									})
									.set('严明');
								('step 1');
								if (result.bool) {
									var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
									player.useCard(card, (trigger._targets || trigger.targets).slice(0));
								}
							},
						},
						yuxiong: {
							audio: 'ext:名存实亡/audio:2',
							nobracket: true,
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								var hs = player.getCards('h');
								var shanum = 0;
								for (var i = 0; i < hs.length; i++) {
									if (hs[i].name == 'sha' && hs[i].nature == null) {
										shanum++;
									}
								}
								return shanum > 0;
							},
							content() {
								var hs = player.getCards('h');
								for (var i = 0; i < hs.length; i++) {
									if (hs[i].name != 'sha') continue;
									if (hs[i].nature != 'fire' && hs[i].nature != 'thunder') {
										game.log(player, '将' + get.translation(hs[i]) + '转化为', { name: 'huosha' });
										hs[i].init([hs[i].suit, hs[i].number, 'huosha']);
									}
								}
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
						},
						kaiyu: {
							audio: 'ext:名存实亡/audio:2',
							nobracket: true,
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							filter(event, player) {
								return player.storage.xiuzhuchangcheng > 1;
							},
							content() {
								player.useCard({ name: 'liuxinghuoyu' }, target);
								player.storage.xiuzhuchangcheng -= 2;
								player.update();
							},
							ai: {
								basic: {
									order: 5,
								},
								result: {
									target: -2,
								},
							},
						},
						shubian: {
							audio: 'ext:名存实亡/audio:2',
							nobracket: true,
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return (game.players[1] == target || game.players[2] == target || game.players[3] == target) && player != target && get.distance(player, target, 'attack') <= 1;
							},
							filter(event, player) {
								return player.storage.xiuzhuchangcheng > 5;
							},
							content() {
								'step 0';
								var list = [];
								('step 1');
								var tg = player.next;
								for (var i = 0; i < game.players.length; i++) {
									if (get.distance(player, game.players[i], 'attack') <= 1) {
										if (game.players[i] == player) continue;
										if (game.players[i] == target) continue;
										if (game.players[i] != tg) continue;
										if (!game.players[i].isOut()) {
											game.players[i].damage(1, 'fire');
										}
										tg = game.players[i].next;
									}
								}
								('step 2');
								target.damage(1, 'fire');
								player.storage.xiuzhuchangcheng -= 6;
								player.update();
								player.storage.shubian_debuff = 3;
							},
							ai: {
								basic: {
									order: 10,
								},
								result: {
									target: -5,
								},
							},
							group: ['shubian_1'],
							subSkill: {
								1: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									_priority: -577,
									filter(event, player) {
										return player.storage.shubian_debuff > 0;
									},
									content() {
										player.recover();
										player.storage.shubian_debuff--;
									},
								},
							},
						},
						weizhenxiongnu: {
							audio: 'ext:名存实亡/audio:2',
							nobracket: true,
							trigger: {
								global: 'damageBegin',
							},
							filter(event, player) {
								return event.num > 0 && event.nature == 'fire' && get.distance(player, event.player, 'attack') <= 1 && event.player != player;
							},
							content() {
								trigger.num++;
							},
						},
						xiuzhuchangcheng: {
							audio: 'ext:名存实亡/audio:2',
							nobracket: true,
							mark: true,
							marktext: '技',
							init(player) {
								player.storage.xiuzhuchangcheng = 0;
								player.markSkill('xiuzhuchangcheng');
							},
							intro: {
								content: '技力:#',
							},
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								player.storage.xiuzhuchangcheng += 6;
								player.markSkill('xiuzhuchangcheng');
							},
						},
						破军: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							check(event, player) {
								if (event.player.isTurnedOver()) return get.attitude(player, event.player) > 0;
								if (event.player.hp < 3) {
									return get.attitude(player, event.player) < 0;
								}
								return get.attitude(player, event.player) > 0;
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.player.isAlive();
							},
							content() {
								'step 0';
								trigger.player.draw(Math.min(5, trigger.player.hp));
								('step 1');
								trigger.player.turnOver();
							},
						},
						龙怒: {
							audio: 'ext:名存实亡/audio:2',
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
							group: ['daozu2', 'daozu3', 'daozu4', 'daozu5'],
						},
						浴血: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return target.countCards('j') > 0;
							},
							usable: 1,
							selectTarget: -1,
							filter(event, player) {
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].countCards('j')) return true;
								}
								return false;
							},
							line: 'fire',
							content() {
								'step 0';
								event.num = target.countCards('j');
								target.discard(target.getCards('j'));
								('step 1');
								target.damage(event.num, 'fire', 'nosource');
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										var eff = get.damageEffect(target, player, target, 'fire');
										if (eff >= 0) return eff + 1;
										var judges = target.getCards('j');
										if (!judges.length) return 0;
										if (target.hp == 1 || judges.length > 1) return -judges.length;
										var name = judges[0].viewAs || judges[0].name;
										if (name == 'shandian' || name == 'huoshan' || name == 'hongshui') return -judges.length;
										return 0;
									},
								},
							},
						},
						奋战: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'gainEnd',
							},
							forced: true,
							filter(event, player) {
								return Math.random() <= 1;
							},
							content() {
								player.gainMaxHp();
								player.recover();
							},
						},
						tishenpi: {
							audio: 'ext:名存实亡/audio:2',
							mark: true,
							trigger: {
								player: 'phaseBegin',
							},
							init(player) {
								player.storage.retishen = false;
							},
							filter(event, player) {
								if (player.storage.retishen) return false;
								if (typeof player.storage.retishen2 == 'number') {
									return player.hp < player.storage.retishen2;
								}
								return false;
							},
							check(event, player) {
								if (player.hp <= 1) return true;
								return player.hp < player.storage.retishen2 - 1;
							},
							content() {
								player.unmarkSkill('retishen');
								player.recover(player.storage.retishen2 - player.hp);
								player.draw(player.storage.retishen2 - player.hp);
								player.storage.retishen = false;
							},
							intro: {
								mark(dialog, content, player) {
									if (player.storage.retishen) return;
									if (typeof player.storage.retishen2 != 'number') {
										return '上回合体力:无';
									}
									return '上回合体力:' + player.storage.retishen2;
								},
								content: 'limited',
							},
							group: ['retishen2'],
						},
						repojun: {
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.target.hp > 0 && event.target.countCards('he') > 0;
							},
							audio: 'ext:名存实亡/audio:2',
							logTarget: 'target',
							content() {
								'step 0';
								player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.countCards('he'), trigger.target.hp)], get.prompt('pojun', trigger.target));
								('step 1');
								if (result.bool && result.links.length) {
									trigger.target.discard(result.links);
								}
							},
							ai: {
								unequip: true,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (get.attitude(player, arg.target) > 0) return false;
									if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
									if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
									return false;
								},
							},
							group: 'repojun3',
						},
						repojun3: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								var target = event.player;
								return event.parent.name == 'sha' && player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
							},
							content() {
								trigger.num++;
							},
						},
						repojun2: {
							init(player, skill) {
								if (!player.storage[skill]) player.storage[skill] = [];
							},
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							popup: false,
							charlotte: true,
							filter(event, player) {
								return player.storage.repojun2 && player.storage.repojun2.length;
							},
							content() {
								game.log(player, '收回了' + get.cnNumber(player.gain(player.storage.repojun2, 'draw', 'fromStorage').cards.length) + '张〖破军〗牌');
								player.storage.repojun2.length = 0;
								player.removeSkill('repojun2');
							},
							intro: {
								onunmark: 'throw',
								content: 'cardCount',
							},
						},
						qqwz肱骨: {
							audio: 'ext:名存实亡/audio:2',
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
								for (var i = 0; i < trigger.result.length; i++) {
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
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										player: 'damageEnd',
									},
									content() {
										'step 0';
										player.showHandcards();
										('step 1');
										if (!trigger.source) return;
										var cards = player.getCards('h');
										for (var i = 1; i < cards.length; i++) {
											if (get.color(cards[i]) != get.color(cards[0])) return;
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
						qqwz撰古: {
							trigger: {
								player: 'useCardAfter',
								target: 'useCardToBegin',
							},
							audio: 'ext:名存实亡/audio:2',
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
									audio: 'ext:名存实亡/audio:2',
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
							audio: 'ext:名存实亡/audio:2',
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
									for (var i = 0; i < list.length; i++) {
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
									for (var i = 0; i < player.storage.qqwz撰古.length; i++) {
										suits2.remove(player.storage.qqwz撰古[i].suit);
									}
								}
								player
									.chooseCard('选择任意张手牌与<古>交换', [1, Math.min(player.countCards('h'), player.storage.qqwz撰古.length)])
									.set('ai', function (card) {
										var val = get.value(card);
										if (_status.event.four && !_status.event.nofour) {
											var suits = _status.event.suits2.slice(0);
											for (var i = 0; i < ui.selected.cards.length; i++) {
												suits.remove(ui.selected.cards[i].suit);
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
								for (var i = 0; i < player.storage.qqwz撰古.length; i++) {
									suits2[player.storage.qqwz撰古[i].suit]++;
								}
								player
									.chooseCardButton(player.storage.qqwz撰古, '选择' + event.num + '张牌作为手牌', event.num, true)
									.set('ai', function (button) {
										var val = get.value(button.link);
										if (_status.event.four || _status.event.nofour) {
											var suits = get.copy(_status.event.suits2);
											for (var i = 0; i < ui.selected.buttons.length; i++) {
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
								for (var i = 0; i < result.links.length; i++) {
									player.storage.qqwz撰古.remove(result.links[i]);
								}
								if (player == game.me && _status.auto) {
								}
								('step 4');
								suits2 = ['club', 'spade', 'heart', 'diamond'];
								for (var i = 0; i < player.storage.qqwz撰古.length; i++) {
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
									for (var i = 0; i < result.links.length; i++) {
										event.cards.remove(result.links[i]);
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
						qqwz德论: {
							trigger: {
								player: 'turnOverBegin',
							},
							audio: 'ext:名存实亡/audio:2',
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
						梨山: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							forced: true,
							usable: 1,
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								if (event.cards) {
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											if (i.original == 'h') return true;
										}
								}
								return false;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								player.addTempSkill('梨山', 'roundStart');
								if (_status.currentPhase && _status.currentPhase.countCards('he')) {
									_status.currentPhase.line(player, 'green');
									_status.currentPhase.chooseToDiscard('he', 1, true);
								}
							},
							subSkill: {
								1: {
									forced: true,
								},
							},
							ai: {
								threaten: 0.7,
							},
						},
						征藩: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							content() {
								'step 0';
								var list = ['huosha', 'leisha', 'sha', 'tao', 'jiu'];
								player.chooseButton(
									[
										'征藩:选择要使用的牌,或点取消摸两张牌',
										[
											list.map(function (name) {
												return ['基本', '', name];
											}),
											'vcard',
										],
									],
									function (button) {
										return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
									},
									function (button) {
										return _status.event.player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
									},
								);
								('step 1');
								if (!result.bool) player.draw(2);
								else {
									player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] });
									player.draw();
								}
							},
						},
						艳后: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								return player.isAlive();
							},
							content() {
								event.card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								if (event.card) {
									player.equip(event.card, true).set('delay', true);
								}
							},
							ai: {
								order: 1,
								expose: 0.2,
							},
						},
						诱色: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filterTarget(card, player, target) {
								return player != target && target.countCards('h');
							},
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								event.card = target.getCards('h').randomGet();
								('step 1');
								target.discard(event.card);
								('step 2');
								if (get.type(event.card) == 'basic') {
									player.useCard({ name: 'sha' }, target, false);
								} else if (get.type(event.card, 'trick') == 'trick') {
									player.useCard({ name: 'juedou' }, target, 'noai').animate = false;
								} else {
									//player.gain(event.card,'draw');
									player.useCard(event.card, player);
								}
							},
							ai: {
								result: {
									target(player, target) {
										return -target.countCards('h');
									},
								},
								order: 8,
								threaten: 0.5,
							},
						},
						巨毒之蛇: {
							nobracket: true,
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && get.distance(current, player, 'attack') <= 1;
								});
							},
							content() {
								'step 0';
								event.num = 0;
								player.chooseTarget(
									get.prompt2('巨毒之蛇'),
									[1, Infinity],
									function (card, player, target) {
										return target != player && get.distance(target, player, 'attack') <= 1;
									},
									function (target) {
										return -get.attitude(player, target);
									},
								);
								('step 1');
								if (result.bool) {
									trigger.num++;
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (event.num < event.targets.length) {
									player.useCard({ name: 'sha' }, event.targets[event.num], false);
									event.num++;
									event.redo();
								} else event.finish();
							},
							ai: {
								order: 5,
							},
						},
						蛇噬: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							content() {
								'step 0';
								if (event.isMine()) {
									event.dialog = ui.create.dialog(get.prompt('蛇噬'));
								}
								player.chooseControl('heart2', 'diamond2', 'club2', 'spade2', 'cancel').ai = function (event) {
									if (Math.random() < 0.5) return 'club2';
									if (Math.random() < 0.5) return 'spade2';
									if (Math.random < 2 / 3) return 'diamond2';
									return 'heart2';
								};
								('step 1');
								if (event.dialog) {
									event.dialog.close();
								}
								if (result.control && result.control.includes('2')) {
									game.log(player, '指定的花色为' + get.translation(result.control));
									var suit = result.control.slice(0, result.control.length - 1);
									var cards = [];
									for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
										var card = ui.cardPile.childNodes[i];
										cards.push(card);
										if (card.suit == suit || i >= 3) {
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
									if (event.cards[event.cards.length - 1].suit == event.suit) {
										event.cards.pop().discard();
									}
									if (event.cards.length) {
										player.gain(event.cards, 'draw2');
									}
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
											if (target.hp >= 4) return [1, 2];
											if (target.hp == 3) return [1, 1.5];
											if (target.hp == 2) return [1, 0.5];
										}
									},
								},
							},
						},
						机颖: {
							audio: 'ext:名存实亡/audio:3',
							enable: 'phaseUse',
							usable: 1,
							filterTarget: true,
							selectTarget: [1, 2],
							content() {
								'step 0';
								target.turnOver();
								target.loseMaxHp();
								('step 1');
								player.draw(1);
							},
						},
						巧舌: {
							audio: 'ext:名存实亡/audio:2',
							forced: true,
							trigger: {
								global: ['useCard'],
							},
							filter: (event) => event.card.name == 'sha',
							check: (event, player) => event.targets.some((Q) => Q.isFriendsOf(player)),
							async content(event, trigger, player) {
								//QQQ
								const result = await player
									.chooseTarget((c, p, t) => t.countCards('hej'))
									.set('ai', (target) => 10 - get.attitude(player, target))
									.forResult();
								if (result.targets && result.targets[0]) {
									const { result: result1 } = await player.chooseTarget().set('ai', (target) => -get.attitude(player, target));
									if (result1.targets && result1.targets[0]) {
										await player.discardPlayerCard(result.targets[0], 'hej', true);
										trigger.targets = result1.targets;
									}
								}
							},
						},
						雄辩: {
							audio: 'ext:名存实亡/audio:2',
							filter(event, player) {
								return (event.card.name == 'sha' || get.type(event.card) == 'trick') && event.targets;
							},
							check(event, player) {
								return event.parent.excluded.includes(player) || get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
							},
							trigger: {
								target: 'useCardToBegin',
							},
							content() {
								trigger.cancel();
								player.draw();
							},
							ai: {
								effect: {
									target(card) {
										if (get.type(card) != 'trick') return;
										if (card.name == 'tiesuo') return [0, 0];
										if (card.name == 'yihuajiemu') return [0, 1];
										if (get.tag(card, 'multineg')) return [0, 2];
									},
								},
							},
						},
						连横: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								var list = game.filterPlayer(function (current) {
									current.removeSkill('连横_mark');
									return current.group != 'qun';
								});
								if (list.length >= 1) {
									var target = list.randomGet();
									player.line(target);
									target.addSkill('连横_mark');
								}
							},
							group: '连横_init',
							subSkill: {
								mark: {
									charlotte: true,
									mod: {
										playerEnabled(card, player, target) {
											if (target.group == 'qun' || (_status.kangqinEvent == '合纵连横' && target.isLinked())) return false;
										},
									},
									marktext: '横',
									mark: true,
									intro: {
										content() {
											if (_status.kangqinEvent == '合纵连横') return '不能对群势力角色和已横置的角色使用牌';
											return '不能对群势力角色使用牌';
										},
									},
								},
								init: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										global: 'gameDrawAfter',
									},
									forced: true,
									content() {
										var list = game.filterPlayer(function (current) {
											return current.group != 'qun';
										});
										if (list.length) {
											var target = list.randomGet();
											player.line(target);
											target.addSkill('连横_mark');
										}
									},
								},
							},
						},
						lvbuwei_jugu: {
							audio: 'ext:名存实亡/audio:true',
							mod: {
								maxHandcard(player, num) {
									return num + player.maxHp;
								},
							},
							trigger: {
								global: 'gameDrawAfter',
								player: 'enterGame',
							},
							forced: true,
							content() {
								player.draw(Math.min(player.maxHp, 20));
								player.gainMaxHp(player.maxHp);
							},
						},
						lvbuwei_qihuo: {
							audio: 'ext:名存实亡/audio:true',
							enable: 'phaseUse',
							usable: 1,
							delay: 0,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								event.list = [];
								var hs = player.getCards('h');
								for (var i = 0; i < hs.length; i++) {
									var card = hs[i];
									if (event.list.includes(get.type(card, 'trick'))) continue;
									event.list.push(get.type(card, 'trick'));
								}
								('step 1');
								player.chooseControl(event.list, function (event, player) {
									return event.list.randomGet();
								}).prompt = '奇货:请选择一种类别';
								('step 2');
								var cards = player.getCards('h', function (card) {
									return get.type(card, 'trick') == result.control;
								});
								player.discard(cards);
								player.draw(cards.length * 2);
							},
							ai: {
								order: 1,
								result: {
									player: 4,
								},
								threaten: 1.55,
							},
						},
						lvbuwei_chunqiu: {
							audio: 'ext:名存实亡/audio:true',
							trigger: { player: ['useCard', 'respond'] },
							usable: 2,
							content() {
								player.draw(2);
							},
						},
						lvbuwei_baixiang: {
							audio: 'ext:名存实亡/audio:true',
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') >= player.hp * 2 && !player.storage.lvbuwei_baixiang;
							},
							derivation: ['lvbuwei_zhongfu'],
							content() {
								'step 0';
								player.storage.lvbuwei_baixiang = true;
								player.awakenSkill('lvbuwei_baixiang');
								('step 1');
								var num = player.maxHp - player.hp;
								if (num > 0) player.recover(num);
								player.addSkill('lvbuwei_zhongfu');
								game.log(player, '获得了技能〖仲父〗');
							},
						},
						lvbuwei_zhongfu: {
							audio: 'ext:名存实亡/audio:true',
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							content() {
								var skill = ['吕不韦奸雄', '吕不韦仁德', '吕不韦制衡'].randomGet();
								player.addTempSkill(skill, { player: 'phaseBefore' });
								game.log(player, '获得了技能', '〖', skill, '〗');
							},
						},
						吕不韦奸雄: {
							nobracket: true,
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'damageEnd' },
							filter(event, player) {
								return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
							},
							content() {
								player.gain(trigger.cards);
								player.draw();
								player.recover();
								player.$gain2(trigger.cards);
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										if (get.tag(card, 'damage')) return [1, 0.5];
									},
								},
							},
						},
						吕不韦仁德: {
							nobracket: true,
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							filterCard: true,
							selectCard: [1, Infinity],
							discard: false,
							prepare: 'give',
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								if (ui.selected.cards.length > 1) return 0;
								if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
								if (!ui.selected.cards.length && card.name == 'du') return 20;
								var player = get.owner(card);
								if (player.hp == player.maxHp || player.countCards('h') <= 1) {
									if (ui.selected.cards.length) {
										return -1;
									}
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i].hasSkill('haoshi') && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
											return 11 - get.value(card);
										}
									}
									if (player.countCards('h') > player.hp) return 10 - get.value(card);
									if (player.countCards('h') > 2) return 6 - get.value(card);
									return -1;
								}
								return 10 - get.value(card);
							},
							content() {
								target.gain(cards, player);
								player.recover();
							},
							ai: {
								order(skill, player) {
									if (player.hp < player.maxHp && player.countCards('h') > 1) {
										return 10;
									}
									return 1;
								},
								result: {
									target(player, target) {
										if (target.hasSkillTag('nogain')) return 0;
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											if (target.hasSkillTag('nodu')) return 0;
											return -10;
										}
										if (target.hasJudge('lebu')) return 0;
										var nh = target.countCards('h');
										var np = player.countCards('h');
										if (player.hp == player.maxHp || player.countCards('h') <= 1) {
											if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
										}
										return Math.max(1, 5 - nh);
									},
								},
								effect: {
									target(card, player, target) {
										if (player == target && get.type(card) == 'equip') {
											if (player.countCards('e', { subtype: get.subtype(card) })) {
												var players = game.filterPlayer();
												for (var i = 0; i < players.length; i++) {
													if (players[i] != player && get.attitude(player, players[i]) > 0) {
														return 0;
													}
												}
											}
										}
									},
								},
								threaten: 0.8,
							},
						},
						吕不韦制衡: {
							nobracket: true,
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filterCard: true,
							selectCard: [1, Infinity],
							prompt: '弃置任意张牌并摸双倍的牌',
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								player.draw(2 * cards.length);
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
								threaten: 1.5,
							},
						},
						zhaoji_shanwu: {
							audio: 'ext:名存实亡/audio:true',
							trigger: {
								player: 'useCardToBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return get.color(card) == 'black' ? 2 : 0;
								});
								('step 1');
								if (result.judge > 0) {
									trigger.directHit = true;
								}
							},
							group: ['zhaoji_shanwu_judge'],
							subSkill: {
								judge: {
									audio: 'zhaoji_shanwu',
									trigger: {
										target: 'useCardToBegin',
									},
									filter(event, player) {
										if (event.player == player) return false;
										if (event.card.name == 'sha') return true;
										return false;
									},
									forced: true,
									content() {
										'step 0';
										player.judge(function (card) {
											return get.color(card) == 'red' ? 2 : 0;
										});
										('step 1');
										if (result.judge > 0) {
											trigger.untrigger();
											trigger.finish();
										}
									},
								},
							},
						},
						zhaoji_daqi: {
							audio: 'ext:名存实亡/audio:true',
							init(player) {
								if (!player.storage.zhaoji_daqi) player.storage.zhaoji_daqi = 0;
							},
							marktext: '期',
							intro: {
								content: '当前有#个<期>标记',
							},
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								return player.storage.zhaoji_daqi != Infinity && player.storage.zhaoji_daqi >= 10;
							},
							content() {
								game.log(player, '失去了', player.storage.zhaoji_daqi, '个<期>标记');
								player.storage.zhaoji_daqi = 0;
								player.unmarkSkill('zhaoji_daqi');
								var hp = player.maxHp - player.hp;
								var card = player.maxHp - player.countCards('h');
								if (hp > 0) player.recover(hp);
								if (card > 0) player.draw(card);
								player.storage.zhaoji_huoluan = true;
							},
							group: ['zhaoji_daqi_damage', 'zhaoji_daqi_card'],
							subSkill: {
								damage: {
									trigger: {
										player: 'damageAfter',
										source: 'damageEnd',
									},
									audio: 'zhaoji_daqi',
									forced: true,
									content() {
										player.storage.zhaoji_daqi += trigger.num;
										player.markSkill('zhaoji_daqi');
										game.log(player, '获得了', trigger.num, '个<期>标记');
									},
								},
								card: {
									audio: 'zhaoji_daqi',
									trigger: {
										player: ['useCard', 'respond'],
									},
									forced: true,
									content() {
										player.storage.zhaoji_daqi++;
										player.markSkill('zhaoji_daqi');
										game.log(player, '获得了1个<期>标记');
									},
								},
							},
						},
						zhaoji_xianji: {
							audio: 'ext:名存实亡/audio:true',
							init(player) {
								player.storage.nzry_dinghuo = false;
							},
							intro: {
								content: 'limited',
							},
							mark: true,
							enable: 'phaseUse',
							filter(event, player) {
								return !player.storage.zhaoji_xianji && player.storage.zhaoji_daqi > 0;
							},
							check(event, player) {
								var hp = player.maxHp - player.hp;
								var card = 3 - player.countCards('he');
								if (hp + card > 0) return true;
								return false;
							},
							content() {
								'step 0';
								player.awakenSkill('zhaoji_xianji');
								player.storage.zhaoji_xianji = true;
								('step 1');
								var hs = player.getCards('he');
								if (hs.length) player.discard(hs);
								game.log(player, '失去了', player.storage.zhaoji_daqi, '个<期>标记');
								player.storage.zhaoji_daqi = 0;
								player.unmarkSkill('zhaoji_daqi');
								player.gainMaxHp();
								('step 2');
								var hp = player.maxHp - player.hp;
								var card = player.maxHp - player.countCards('h');
								if (hp > 0) player.recover(hp);
								if (card > 0) player.draw(card);
								player.storage.zhaoji_huoluan = true;
							},
							ai: {
								order: 1,
								result: {
									player(player, target) {
										var hp = player.maxHp - player.hp;
										var card = player.maxHp - player.countCards('h');
										return 0 + hp + card;
									},
								},
							},
						},
						zhaoji_huoluan: {
							audio: 'ext:名存实亡/audio:true',
							trigger: {
								player: ['zhaoji_daqiAfter', 'zhaoji_xianjiAfter'],
							},
							forced: true,
							content() {
								'step 0';
								event.targets = game.filterPlayer();
								event.targets.remove(player);
								event.targets.sort(lib.sort.seat);
								player.line(event.targets);
								event.targets2 = event.targets.slice(0);
								('step 1');
								if (event.targets2.length) {
									event.targets2.shift().damage('nocard');
									event.redo();
								}
							},
						},
						评荐: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: ['damageEnd', 'phaseBegin', 'phaseEnd'],
							},
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								var skills = [];
								for (var i in lib.character) {
									for (var j = 0; j < lib.character[i][3].length; j++) {
										var info = lib.skill[lib.character[i][3][j]];
										if (info && (info.gainable || !info.unique)) {
											skills.add(lib.character[i][3][j]);
										}
									}
								}
								var link = skills.randomGet();
								player.addTempSkill(link, { player: 'phaseAfter' });
								player.mark(link, {
									name: get.translation(link),
									content: lib.translate[link + '_info'],
								});
								game.log(player, '获得技能', '【' + get.translation(link) + '】');
								('step 1');
								player.draw(3);
							},
							ai: {
								noe: true,
								effect: {
									target(card, player) {
										if (card.name == 'du') return [1, Infinity];
										if (card.name == 'tao') return [1, Infinity];
										if (card.name == 'sha') return [1, Infinity];
										if (card.name == 'guanshi') return [1, 3];
										if (player.countCards('h', 'sha') > 1 && card.name == 'zhuge') return [1, 4];
									},
								},
							},
							group: ['评荐1'],
						},
						评荐1: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								var skills = [];
								for (var i in lib.character) {
									for (var j = 0; j < lib.character[i][3].length; j++) {
										var info = lib.skill[lib.character[i][3][j]];
										if (info && (info.gainable || !info.unique)) {
											skills.add(lib.character[i][3][j]);
										}
									}
								}
								var link = skills.randomGet();
								player.addTempSkill(link, { player: 'phaseAfter' });
								player.mark(link, {
									name: get.translation(link),
									content: lib.translate[link + '_info'],
								});
								game.log(player, '获得技能', '【' + get.translation(link) + '】');
								('step 1');
								player.draw(3);
								//._triggered=null;
								// if(trigger.source!=undefined&&trigger.source!=player){
								//player.gainPlayerCard(true,trigger.source,[Math.ceil(trigger.source.countCards('he')/2)].randomGet());
								// }
							},
							ai: {
								noe: true,
								effect: {
									target(card, player) {
										if (card.name == 'du') return [1, Infinity];
										if (card.name == 'tao') return [1, Infinity];
										if (card.name == 'sha') return [1, Infinity];
										if (card.name == 'guanshi') return [1, 3];
										if (player.countCards('h', 'sha') > 1 && card.name == 'zhuge') return [1, 4];
									},
								},
							},
						},
						侠济: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.draw(4);
								player.chooseTarget(get.prompt('侠济'), [1, 4]).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets.sort(lib.sort.seat);
									result.targets.map(function (item) {
										player.discardPlayerCard(item, 'he', true);
									});
								}
								player.chooseTarget(get.prompt('侠济'), [1, 4]).set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									result.targets.sort(lib.sort.seat);
									result.targets.map(function (item) {
										item.recover();
									});
								}
							},
						},
						救途: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'dyingBegin' },
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								'step 0';
								player.draw();
								if (
									player.countCards('he', (card) => {
										return get.color(card) == 'red';
									})
								)
									player.chooseCard('选择展示一张红色牌', 'he', true, (card) => {
										return get.color(card) == 'red';
									});
								('step 1');
								if (result.bool) {
									player.showCards(result.cards[0]);
									var num = result.cards[0].number;
									trigger.player.recover(num);
									trigger.player.draw(num);
								}
							},
						},
						悬疠: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'discardEnd' },
							usable: 4,
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.suit == 'spade' && get.position(i) == 'd') {
											return true;
										}
									}
								return false;
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							content() {
								trigger.player.loseHp();
								player.draw();
								player.changeHujia();
							},
						},
						追姬zhuiji: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseUseBegin' },
							content() {
								player.draw(2);
								player.recover(2);
								player.addTempSkill('追姬zhuiji2');
							},
						},
						追姬zhuiji2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseUseAfter' },
							content() {
								'step 0';
								player.chooseTarget(get.prompt('追姬zhuiji')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, 2);
									result.targets[0].loseHp();
								}
							},
						},
						齐眉qimei: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: ['loseEnd', 'gainEnd', 'changeHp'],
							},
							usable: 2,
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
								var list1 = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list1.sort(lib.sort.seat);
								if (list1.length) {
									player.line(list1, 'green');
									for (var i = 0; i < list1.length; i++) {
										list1[i].chooseToDiscard('he', true);
									}
								}
							},
						},
						zt昭讨: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								player.gain(game.createCard('qijia'));
								player.gain(game.createCard('guohe'));
								player.gain(game.createCard('wanjian'));
								player.gain(game.createCard('juedou'));
								player.gain(game.createCard('huoshaolianying'));
							},
						},
						s三c陈: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								var stat = player.getStat('s三c陈');
								return !stat || !stat.includes(target);
							},
							content() {
								'step 0';
								var stat = player.getStat();
								if (!stat.s三c陈) stat.s三c陈 = [];
								stat.s三c陈.push(target);
								target.draw(3);
								('step 1');
								player.chooseTarget(get.prompt('s三c陈')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									player.discardPlayerCard(3, result.targets[0], 'he', true);
								}
								('step 3');
								if (result.bool && result.cards && result.cards.length) {
									var list = [],
										list1 = [];
									for (var i of result.cards) {
										list.add(get.type2(i));
										list1.add(i.suit);
									}
									list = [...new Set(list)];
									list1 = [...new Set(list1)];
									if (list.length == result.cards.length || list1.length == result.cards.length) {
										target.draw(2);
										player.getStat('skill').s三c陈--;
									}
								}
							},
							ai: {
								order: 9,
								threaten: 1.7,
								result: {
									target(player, target) {
										if (target.hasSkillTag('nogain')) return -0.1;
										return 1;
									},
								},
							},
							intro: {
								content: '已发动过#次技能',
							},
						},
						p破z竹: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('p破z竹'), function (card, player, target) {
										return target.countCards('he');
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.choosePlayerCard(result.targets[0], 'he', true);
								}
								('step 2');
								if (result.bool) {
									player.showCards(result.cards[0]);
									event.num = result.cards[0].number;
									player
										.chooseTarget(get.prompt('p破z竹'), function (card, player, target) {
											return target.countCards('he');
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								('step 3');
								if (result.bool) {
									player.choosePlayerCard(result.targets[0], 'he', true);
									event.t = result.targets[0];
								}
								('step 4');
								if (result.bool) {
									player.showCards(result.cards[0]);
									event.t.damage(event.num + result.cards[0].number);
								}
							},
							ai: {
								threaten: 1.6,
								expose: 0.2,
							},
						},
						暗匿: {
							audio: 'ext:名存实亡/audio:2',
							usable: 1,
							trigger: { player: ['loseHpBegin', 'damageBegin'] },
							content() {
								trigger.cancel();
							},
						},
						炎火: {
							audio: 'ext:名存实亡/audio:2',
							forced: true,
							trigger: {
								global: 'damageBegin',
							},
							filter(event, player) {
								return event.nature === 'fire' && event.player.isEnemiesOf(player);
							},
							content() {
								player.popup(`<span style="color:firebrick;font-family:'宋体';font-weight:bold;position: relative;z-index: 2000;">炎<span style="color:yellow;text-shadow: 0 0 4px firebrick;">火</span></span>🔥`);
								if (trigger.player.countCards('he', { color: 'red' })) trigger.player.chooseToDiscard(`<span style="color:firebrick;font-family:'宋体';font-weight:bold;">弃置一张红色牌</span>`, 'he', { color: 'red' }, true);
								trigger.num++;
							},
						},
						行夏: {
							audio: 'ext:名存实亡/audio:2',
							group: ['行夏2', '行夏4'],
							forced: true,
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								player.linergbl(list, { color: [178, 34, 34] });
								list.map((i) => {
									i.chooseToDiscard(`<span style="color:firebrick;font-family:'宋体';font-weight:bold;">弃置一张红色牌</span>`, 'he', { color: 'red' }, true);
									i.damage([2, 3].randomGet(), 'fire');
								});
								var list = [{ name: 'sha', nature: 'fire' }, 'huogong'];
								player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
								player.recover();
							},
						},
						行夏2: {
							audio: 'ext:名存实亡/audio:2',
							forced: true,
							trigger: {
								source: 'damageBegin',
							},
							content() {
								trigger.nature = 'fire';
							},
						},
						行夏3: {
							audio: 'ext:名存实亡/audio:2',
							forced: true,
							trigger: {
								source: 'damageBegin',
							},
							content() {
								trigger.num++;
							},
						},
						行夏4: {
							audio: 'ext:名存实亡/audio:2',
							forced: true,
							trigger: {
								player: 'useCardBegin',
							},
							filter(event, player) {
								var card = event.card;
								return (card.name == 'sha' && card.nature == 'fire') || card.name == 'huogong';
							},
							content() {
								player.addTempSkill('行夏3', {
									player: 'useCardAfter',
								});
							},
						},
						smyyx反馈: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'damageBegin'] },
							content() {
								'step 0';
								game.mp45('simayi月下瑶谋sptx');
								('step 1');
								event.num = [1, 2, 3, 4].randomGet(); //QQQ
								player.chooseTarget(get.prompt('smyyx反馈')).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 2');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], event.num + trigger.num, true);
								}
								('step 3');
								var colors = result.cards.map((i) => get.color(i));
								if (colors.includes('black')) player.changeHujia();
								if (colors.includes('red')) player.gain(game.createCard(['shandian', 'tao'].randomGet()), 'draw');
								if (!player.countCards('e', (c) => c.name == 'xuwanglian虚妄镰')) player.equip(game.createCard('xuwanglian虚妄镰', 'club', 2), player);
							},
						},
						smyyx鬼才: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'judge' },
							group: 'smyyx鬼才2',
							forced: true,
							async content(event, trigger, player) {
								//QQQ
								await player.draw();
								if (player.countCards('he')) {
									var { result } = await player.chooseCard(true).set('ai', function (card) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										var judging = _status.event.judging;
										var result = trigger.judge(card) - trigger.judge(judging);
										var attitude = get.attitude(player, trigger.player);
										if (attitude == 0 || result == 0) return 0;
										if (attitude > 0) return result;
										return -result;
									});
									if (result.cards && result.cards[0]) {
										player.showCards(result.cards[0]);
										const card = game.createCard(result.cards[0]);
										player.respond(card, 'smyyx鬼才', 'highlight', 'noOrdering');
										trigger.player.judging[0] = card;
										trigger.orderingCards.push(card);
										game.log(trigger.player, '的判定牌改为', card);
									}
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						smyyx鬼才2: {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							popup: false,
							content() {
								game.JPG4('simayi月下瑶谋zs', 2000);
							},
						},
						霸刀: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							content() {
								player.draw(2);
								player.useCard(game.createCard('xiangyudao项羽刀', 'spade', 1), player);
							},
						},
						虚箭: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								//QQQ
								player.changeHujia();
								var gainCards = [];
								for (var i = 0; i < [1, 3].randomGet(); i++) {
									gainCards.push(game.createCard('wanjian'));
								}
								gainCards.push(game.createCard('sha'));
								player.gain(gainCards, 'draw');
							},
						},
						忠耀: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseBegin' },
							group: '忠耀2',
							content() {
								if (!player.countCards('e', (c) => c.name == '烈画雀弓')) player.equip(game.createCard('烈画雀弓', 'heart', 13), player);
								if (!player.countCards('e', (c) => c.name == 'modao陌刀')) player.equip(game.createCard('modao陌刀', 'club', 13), player);
							},
						},
						忠耀2: {
							trigger: {
								player: 'equipBegin',
							},
							audio: 'ext:名存实亡/audio:2',
							forced: true,
							filter(event, player) {
								return player.countCards('e', { subtype: 'equip1' }) && get.subtype(event.card) == 'equip1' && (event.card.name == '烈画雀弓' || event.card.name == 'modao陌刀');
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
						cuanwei: {
							enable: 'phaseUse',
							usable: 2,
							init(player) {
								player.storage.cuanwei = [];
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
											player.storage.cuanwei.push(result.card.name);
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
										if (player.hasSkill('cuanwei3')) return 0;
										var allshown = true;
										for (var i = 0; i < game.players.length; i++) {
											if (game.players[i].ai.shown == 0) {
												allshown = false;
											}
											if (game.players[i] != player && game.players[i].countCards('h') && get.attitude(player, game.players[i]) > 0) {
												return 1;
											}
										}
										if (allshown) return 1;
										return 0;
									},
								},
								threaten: 1.6,
							},
							group: ['cuanwei5'],
						},
						cuanwei4: {
							trigger: { player: 'chooseToRespondBegin' },
							filter(event, player) {
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player)) return false;
								//if(player.storage.cuanwei.includes('shan')) return false;
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
								trigger.result = { bool: true, card: { name: 'shan' }, skill: 'cuanwei_backup' };
								player.storage.cuanwei.push('shan');
							},
						},
						cuanwei5: {
							enable: 'chooseToUse',
							filter(event, player) {
								return event.type == 'dying';
							},
							onuse(result, player) {
								player.storage.cuanwei.push('tao');
							},
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: { name: 'tao' },
							ai: {
								skillTagFilter(player) {
									return !player.storage.cuanwei.includes('tao');
								},
								threaten: 1.5,
								save: true,
							},
						},
						cuanwei_backup: {},
						zzhongzi: {
							audio: 'ext:名存实亡/audio:2',
							group: ['zzhongzi2'],
							enable: 'chooseToUse',
							filter(event, player) {
								return player.countCards('h', { type: 'basic' });
							},
							chooseButton: {
								dialog() {
									var list = [];
									for (var i in lib.card) {
										if (!lib.translate[i + '_info']) continue;
										if (!lib.card[i].content) continue;
										if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
										if (lib.card[i].type == 'basic') list.push(['basic', '', i]);
									}
									list.push(['基本', '', 'sha', 'fire']);
									list.push(['基本', '', 'sha', 'thunder']);
									list.push(['毒杀', '', 'sha', 'poison']);
									return ui.create.dialog('冢子:请选择想要使用的基本牌', [list, 'vcard']);
								},
								filter(button, player) {
									return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									var player = _status.event.player;
									var shaTarget = false;
									for (var i = 0; i < game.players.length; i++) {
										if (player.canUse('sha', game.players[i]) && ai.get.effect(game.players[i], { name: 'sha' }, player) > 0) {
											shaTarget = true;
										}
									}
									if (player.isDamaged()) return button.link[2] == 'tao' ? 1 : -1;
									if (shaTarget && player.countCards('h', 'sha') && !player.countCards('h', 'jiu')) return button.link[2] == 'jiu' ? 1 : -1;
									if (shaTarget && !player.countCards('h', 'sha')) return button.link[2] == 'sha' ? 1 : -1;
									return button.link[2] == 'sha' ? 1 : -1;
								},
								backup(links, player) {
									return {
										filterCard(card) {
											return get.type(card) == 'basic';
										},
										audio: 1,
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
						zzhongzi2: {
							audio: 'ext:名存实亡/audio:2',
							enable: ['chooseToRespond'],
							filterCard(card) {
								return get.type(card) == 'basic';
							},
							viewAs: {
								name: 'shan',
							},
							viewAsFilter(player) {
								if (!player.countCards('h', { type: 'basic' })) return false;
							},
							prompt: '将一张基本牌当闪打出',
							check() {
								return 1;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('h', { type: 'basic' })) return false;
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
						zhaolei2: {
							audio: 'ext:名存实亡/audio:2',
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
								target.damage('thunder', true);
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
						},
						zhaolei: {
							audio: 'ext:名存实亡/audio:2',
							group: ['zhaolei2'],
							trigger: {
								source: 'damageAfter',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'thunder';
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('zhaolei'), function (card, player, target) {
									return get.distance(trigger.player, target) <= 1;
								}).ai = function (target) {
									return get.damageEffect(target, player, player, 'thunder');
								};
								('step 1');
								if (result.bool) {
									var card = get.cards()[0];
									ui.discardPile.appendChild(card);
									player.showCards(card);
									event.bool = get.color(card) == 'black';
									event.target = result.targets[0];
									trigger.player.line(event.target, 'thunder');
								} else {
									event.finish();
								}
								('step 2');
								if (event.bool) {
									event.target.damage('thunder');
								}
							},
						},
						guijinpi: {
							audio: 'ext:名存实亡/audio:2',
							group: ['guijinpi2'],
							init(player) {
								player.node.name.dataset.nature = 'thunder';
							},
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.nature == 'thunder') return true;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								player.recover(trigger.num);
								if (player.hp == player.maxHp) player.draw(trigger.num);
							},
							ai: {
								nothunder: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'thunderDamage')) return [0, 2];
									},
								},
							},
						},
						guijinpi2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								source: 'damageBefore',
							},
							filter(event, player) {
								return event.player != undefined && event.num > 0;
							},
							_priority: null,
							forced: true,
							content() {
								'step 0';
								player.chooseControl('雷电属性', '穿透雷电', ui.create.dialog('请选择一项', 'hidden')).ai = function (event, player) {
									var player2 = trigger.player;
									var equip2 = trigger.player.getEquips(2);
									if (player2 == player) return '雷电属性';
									if (player2.hasSkillTag('nofire')) return '穿透雷电';
									if (player2.hasSkillTag('nothunder')) return '雷电属性';
									if (equip2 && equip2.name == 'tengjia') return '雷电属性';
									return '雷电属性';
								};
								('step 1');
								if (result.control == '雷电属性') {
									trigger.nature = 'thunder';
								} else {
									trigger.untrigger();
									trigger.finish();
									var ex = 0;
									if (trigger.card && trigger.card.name == 'sha') {
										if (player.skills.includes('jiu')) ex++;
										if (player.skills.includes('luoyi2')) ex++;
										if (player.skills.includes('reluoyi2')) ex++;
									}
									trigger.player.damage('thunder', trigger.num + ex, true)._triggered = null;
								}
							},
						},
						shuyi: {
							group: ['shuyi2'],
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.nature == 'fire') return true;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								player.recover(trigger.num);
								if (player.hp == player.maxHp) player.draw(trigger.num);
							},
							ai: {
								nofire: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'fireDamage')) return [0, 2];
									},
								},
							},
						},
						shuyi2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								source: 'damageBefore',
							},
							filter(event, player) {
								return event.player != undefined && event.num > 0;
							},
							_priority: null,
							forced: true,
							content() {
								'step 0';
								player.chooseControl('火焰属性', '穿透火焰', ui.create.dialog('请选择一项', 'hidden')).ai = function (event, player) {
									var player2 = trigger.player;
									var equip2 = trigger.player.getEquips(2);
									if (player2 == player) return '火焰属性';
									if (player2.hasSkillTag('nofire')) return '穿透火焰';
									if (player2.hasSkillTag('nothunder')) return '火焰属性';
									if (equip2 && equip2.name == 'tengjia') return '火焰属性';
									return '火焰属性';
								};
								('step 1');
								if (result.control == '火焰属性') {
									trigger.nature = 'fire';
								} else {
									trigger.untrigger();
									trigger.finish();
									var ex = 0;
									if (trigger.card && trigger.card.name == 'sha') {
										if (player.skills.includes('jiu')) ex++;
										if (player.skills.includes('luoyi2')) ex++;
										if (player.skills.includes('reluoyi2')) ex++;
									}
									trigger.player.damage('fire', trigger.num + ex, true)._triggered = null;
								}
							},
						},
						xianming: {
							audio: 'ext:名存实亡/audio:2',
							init(player) {
								player.node.name.dataset.nature = 'fire';
							},
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original && i.original != 'j') return true;
									}
								return false;
							},
							content() {
								'step 0';
								var check;
								for (var i = 0; i < game.players.length; i++) {
									if (get.attitude(player, game.players[i]) > 0 && game.players[i].countCards('j')) {
										check = true;
										break;
									}
								}
								player.chooseTarget('请选择目标', 2, function (card, player, target) {
									if (ui.selected.targets.length) {
										var from = ui.selected.targets[0];
										var judges = from.getCards('j');
										for (var i = 0; i < judges.length; i++) {
											if (!target.hasJudge(judges[i].viewAs || judges[i].name)) return true;
										}
										if (target.isMin()) return false;
										if ((from.getEquips(1) && !target.getEquips(1)) || (from.getEquips(2) && !target.getEquips(2)) || (from.getEquips(3) && !target.getEquips(3)) || (from.getEquips(4) && !target.getEquips(4)) || (from.getEquips(5) && !target.getEquips(5)) || from.getCards('h')) return true;
										return false;
									} else {
										return target.countCards('hej') > 0;
									}
								}).ai = function (target) {
									if (check) return 0;
									var player = _status.event.player;
									if (ui.selected.targets.length == 0) {
										if (target.countCards('j') && get.attitude(player, target) > 0) return 10;
										if (get.attitude(player, target) < 0) {
											for (var i = 0; i < game.players.length; i++) {
												if (get.attitude(player, game.players[i]) > 0) {
													if ((target.getEquips(1) && !game.players[i].getEquips(1)) || (target.getEquips(2) && !game.players[i].getEquips(2)) || (target.getEquips(3) && !game.players[i].getEquips(3)) || (target.getEquips(4) && !game.players[i].getEquips(4)) || (target.getEquips(5) && !game.players[i].getEquips(5)) || target.getCards('h')) return -get.attitude(player, target);
												}
											}
										}
										return 0;
									}
									return -get.attitude(player, target) * get.attitude(player, ui.selected.targets[0]);
								};
								('step 1');
								if (!result.bool) {
									event.finish();
									return;
								}
								trigger.untrigger();
								trigger.finish();
								player.discard(result.cards);
								player.line2(result.targets);
								event.targets = result.targets;
								('step 2');
								('step 3');
								if (targets.length == 2) {
									player.choosePlayerCard(
										'hej',
										function (button) {
											var player = _status.event.player;
											var targets0 = _status.event.targets0;
											var targets1 = _status.event.targets1;
											if (get.attitude(player, targets0) > get.attitude(player, targets1)) {
												return get.position(button.link) == 'j' ? 10 : 0;
											} else {
												if (get.position(button.link) == 'j') return -10;
												return ai.get.equipValue(button.link);
											}
										},
										targets[0],
									);
								} else {
									event.finish();
								}
								('step 4');
								if (result.bool) {
									var link = result.links[0];
									if (get.position(link) == 'e') {
										event.targets[1].equip(link);
									} else if (get.position(link) == 'h') {
										event.targets[1].gain(link);
									} else if (link.viewAs) {
										event.targets[1].addJudge({ name: link.viewAs }, [link]);
									} else {
										event.targets[1].addJudge(link);
									}
									event.targets[0].$give(link, event.targets[1]);
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						绝色: {
							audio: 'ext:名存实亡/audio:2',
							group: ['绝色2'],
							trigger: {
								source: 'damageAfter',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('绝色'), function (card, player, target) {
									return get.distance(trigger.player, target) <= 1;
								}).ai = function (target) {
									return get.damageEffect(target, player, player, 'fire');
								};
								('step 1');
								if (result.bool) {
									var card = get.cards()[0];
									ui.discardPile.appendChild(card);
									player.showCards(card);
									event.bool = get.color(card) == 'red';
									event.target = result.targets[0];
									trigger.player.line(event.target, 'fire');
								} else {
									event.finish();
								}
								('step 2');
								if (event.bool) {
									event.target.damage('fire');
								}
							},
						},
						yulupi: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget: true,
							selectTarget: [1, 3],
							content() {
								'step 0';
								if (target == targets[0]) {
									game.asyncDraw(targets, 2);
								}
								('step 1');
								if (target == targets[0]) {
								}
								('step 2');
								target.chooseToDiscard(2, true);
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										switch (target.countCards('he') == 0) {
											case 0:
												return 0;
											case 1:
												return 0.5;
											case 2:
												return 0.8;
											default:
												return 1;
										}
									},
								},
								threaten: 1.2,
							},
						},
						绝色2: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filterCard: true,
							selectCard: [1, Infinity],
							prompt: '弃置任意张牌并选择该数量的角色,这些角色受到一点火焰伤害',
							selectTarget() {
								var num = ui.selected.cards.length;
								if (ui.selected.cards.length == 1) return [1, 1]; //QQQ
								if (ui.selected.cards.length == 2) return [2, 2];
								if (ui.selected.cards.length == 3) return [3, 3];
								if (ui.selected.cards.length == 4) return [4, 4];
								if (ui.selected.cards.length > 4) return [4, num];
							},
							filterTarget: true,
							check(card) {
								return 7 - get.value(card);
							},
							content() {
								'step 0';
								target.damage('fire');
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
						},
						yanpu: {
							trigger: {
								player: 'phaseAfter',
							},
							filter(event, player) {
								return !player.storage.jihuo && player.countCards('h') > 0;
							},
							forced: true,
							content() {
								'step 0';
								var next = player.chooseToDiscard(get.prompt('jihuo'));
								next.ai = ai.get.unuseful2;
								('step 1');
								if (result.bool) {
									player.storage.jihuo = true;
								} else {
									event.finish();
								}
								('step 2');
								player.phase('nodelay');
								('step 3');
								player.storage.jihuo = false;
							},
							ai: {
								threaten: 1.2,
							},
						},
						anfu: {
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								var nh = player.countCards('h');
								var nm = 1;
								for (var i = 0; i < game.players.length; i++) {
									var target = game.players[i];
									if (target != player && Math.abs(target.countCards('h') - nh) <= nm) {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								var nh = player.countCards('h');
								var nm = 1;
								var check = true;
								if (player.countCards('h', 'tao')) {
									check = false;
								} else if (player.countCards('h', 'shan') && player.countCards('h', 'wuxie')) {
									check = false;
								}
								player.chooseTarget(get.prompt('kuixin'), function (card, player, target) {
									return target != player && Math.abs(target.countCards('h') - nh) <= nm;
								}).ai = function (target) {
									if (!check) return 0;
									if (get.attitude(player, target) < 0) {
										return target.countCards('h') - nh;
									}
									return 0;
								};
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									var cards0 = target.getCards('h');
									var cards1 = player.getCards('h');
									target.gain(cards1);
									player.gain(cards0);
									target.$give(cards0.length, player);
									player.$give(cards1.length, target);
								}
							},
							ai: {
								expose: 0.2,
								threaten: 1.5,
							},
						},
						fuyanchen: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') < 4;
							},
							init(player) {
								player.storage.guozai2 = 0;
							},
							content() {
								var num = 4 - player.countCards('h');
								player.draw(num);
								player.addSkill('guozai2');
								player.storage.guozai2 += num;
								game.addVideo('storage', player, ['guozai2', player.storage.guozai2]);
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
						},
						hanlie: {
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								var num = Math.floor(Math.random() * 3);
								if (num > 0) player.draw(num);
							},
						},
						chengying: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseUseEnd',
							},
							forced: true,
							filter(event, player) {
								return get.cardCount(true, player) > 0;
							},
							content() {
								player.draw(get.cardCount(true, player));
							},
							ai: {
								threaten: 1.3,
							},
						},
						huaiji: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: ['useCard'],
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								player.draw();
							},
						},
						zuoshou: {
							audio: 'ext:名存实亡/audio:2',
							enable: ['chooseToRespond'],
							filterCard: {
								type: 'equip',
							},
							filter(event, player) {
								return player.countCards('he', { type: 'equip' }) > 0;
							},
							viewAs: {
								name: 'shan',
							},
							position: 'he',
							prompt: '将一张装备牌当闪使用或打出',
							check() {
								return 1;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('he', { type: 'equip' })) return false;
								},
								basic: {
									useful: [7, 2],
									value: [7, 2],
								},
							},
						},
						juyipi: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'changeHp',
							},
							forced: true,
							filter(event, player) {
								return event.num != 0;
							},
							content() {
								player.draw(Math.abs(trigger.num));
							},
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'thunderDamage')) return;
										if (get.tag(card, 'damage') || get.tag(card, 'recover')) {
											return [1, 0.2];
										}
									},
								},
							},
							group: 'xfenxin2',
						},
						weizhongpi: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'recoverAfter',
							},
							forced: true,
							content() {
								player.draw(2);
							},
							ai: {
								threaten: 0.8,
							},
						},
						zhongwei: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h', 'sha') > 0;
							},
							usable: 1,
							filterCard: {
								name: 'sha',
							},
							discard: false,
							prepare: 'give',
							filterTarget(card, player, target) {
								return target != player && !target.hasSkill('zhongwei2');
							},
							check(card) {
								if (_status.event.player.hp >= 3) return 8 - get.value(card);
								return 7 - get.value(card);
							},
							content() {
								target.storage.zhongwei2 = cards[0];
								target.storage.zhongwei3 = player;
								game.addVideo('storage', target, ['zhongwei2', get.cardInfo(cards[0]), 'card']);
								target.addSkill('zhongwei2');
							},
							ai: {
								order: 2,
								result: {
									target(player, target) {
										var att = get.attitude(player, target);
										if (att >= 0) return 0;
										return get.damageEffect(target, player, target, 'thunder');
									},
								},
								expose: 0.2,
							},
						},
						zhongwei2: {
							trigger: {
								source: 'damageAfter',
							},
							forced: true,
							mark: 'card',
							filter(event, player) {
								return player.storage.zhongwei2 && player.storage.zhongwei3;
							},
							content() {
								'step 0';
								if (player.storage.zhongwei3 && player.storage.zhongwei3.isAlive()) {
									player.damage(player.storage.zhongwei3);
									player.storage.zhongwei3.line(player, 'thunder');
								} else {
									player.damage('nosource');
								}
								('step 1');
								var he = player.getCards('he');
								if (he.length) {
									player.discard(he.randomGet());
								}
								('step 2');
								player.$throw(player.storage.zhongwei2);
								player.storage.zhongwei2.discard();
								delete player.storage.zhongwei2;
								delete player.storage.zhongwei3;
								player.removeSkill('zhongwei2');
							},
							group: 'zhongwei3',
							intro: {
								content: 'card',
							},
						},
						zhongwei3: {
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							popup: false,
							content() {
								player.storage.zhongwei2.discard();
								delete player.storage.zhongwei2;
								delete player.storage.zhongwei3;
								player.removeSkill('zhongwei2');
							},
						},
						guijin: {
							audio: 'ext:极略三国/audio:1',
							srlose: true,
							enable: 'chooseToUse',
							mark: true,
							init(player) {
								player.storage.sgk_zhuizun = false;
							},
							filter(event, player) {
								if (event.type != 'dying') return false;
								if (player != event.dying) return false;
								if (player.storage.sgk_zhuizun) return false;
								return true;
							},
							content() {
								'step 0';
								player.hp = Math.min(1, player.maxHp);
								player.update();
								player.unmarkSkill('sgk_zhuizun');
								player.storage.sgk_zhuizun = false;
								player.addSkill('sgk_zhuizun2');
								('step 1');
								var targets = game.players.slice(0);
								targets.remove(player);
								targets.sort(lib.sort.seat);
								event.targets = targets;
								('step 2');
								if (event.targets.length) {
									event.target = event.targets.shift();
								} else {
									event.finish();
								}
								('step 3');
								if (event.target.countCards('h')) {
									event.target.chooseCard('选择一张手牌交给' + get.translation(player), true).ai = function (card) {
										return -get.value(card);
									};
								} else {
									event.goto(2);
								}
								('step 4');
								if (result.bool) {
									player.gain(result.cards[0]);
									target.$give(1, player);
								}
								event.goto(2);
							},
							ai: {
								order: 1,
								skillTagFilter(player) {
									if (player.storage.sgk_zhuizun) return false;
									if (player.hp > 0) return false;
								},
								save: true,
								result: {
									player: 10,
								},
								threaten(player, target) {
									if (!target.storage.sgk_zhuizun) return 0.6;
								},
							},
							intro: {
								content: 'limited',
							},
						},
						膂力: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'damageEnd',
								source: 'damageEnd',
							},
							content() {
								var stat = player.getStat().skill;
								stat.膂力++;
								var num = player.hp - player.countCards('h');
								if (num > 0) player.draw(num);
								else player.recover(-num);
							},
						},
						仇决: {
							derivation: ['背水', '清剿'],
							trigger: {
								global: 'phaseAfter',
							},
							audio: 'ext:名存实亡/audio:2',
							juexingji: true,
							forced: true,
							init(player, skill) {
								if (!player.storage[skill]) player.storage[skill] = false;
							},
							filter(event, player) {
								if (player.storage.仇决) return false;
								return Math.abs(player.hp - player.countCards('h')) >= 3;
							},
							content() {
								player.awakenSkill('仇决');
								player.storage.仇决 = true;
								player.loseMaxHp();
								player.addSkill('背水');
							},
						},
						背水: {
							trigger: {
								player: 'phaseBefore',
							},
							audio: 'ext:名存实亡/audio:2',
							juexingji: true,
							forced: true,
							init(player, skill) {
								if (!player.storage[skill]) player.storage[skill] = false;
							},
							filter(event, player) {
								if (player.storage.背水) return false;
								return Math.min(player.hp, player.countCards('h')) < 2;
							},
							content() {
								player.awakenSkill('背水');
								player.storage.背水 = true;
								player.loseMaxHp();
								player.addSkill('清剿');
							},
						},
						清剿: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return player.countCards('h') && (ui.cardPile.hasChildNodes() || ui.discardPile.hasChildNodes());
							},
							content() {
								'step 0';
								player.discard(player.getCards('h'));
								('step 1');
								var evt = trigger.parent;
								if (evt && evt.getParent && !evt.清剿) {
									evt.清剿 = true;
									var next = game.createEvent('清剿_discard', false, evt.parent);
									next.player = player;
									next.setContent(function () {
										var hs = player.getCards('he');
										if (hs.length) player.discard(hs);
									});
								}
								('step 2');
								var list = [];
								var typelist = [];
								var getType = function (card) {
									var sub = get.subtype(card);
									if (sub) return sub;
									return card.name;
								};
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									var typex = getType(node);
									if (!typelist.includes(typex)) {
										list.push(node);
										typelist.push(typex);
										if (list.length >= 8) break;
									}
								}
								if (list.length < 8) {
									for (var i = 0; i < ui.discardPile.childElementCount; i++) {
										var node = ui.discardPile.childNodes[i];
										var typex = getType(node);
										if (!typelist.includes(typex)) {
											list.push(node);
											typelist.push(typex);
											if (list.length >= 8) break;
										}
									}
								}
								player.gain(list, 'gain2');
							},
						},
						诗怨: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								target: 'useCardToBegin',
							},
							forced: true,
							content() {
								player.draw(2 + get.sgn(trigger.player.hp - player.hp));
							},
						},
						毒逝: {
							audio: 'ext:名存实亡/audio:2',
							group: ['毒逝2'],
							trigger: {
								source: 'damageEnd',
							},
							forced: true, //QQQ
							filter: (event, player) => game.countPlayer((Q) => Q.isEnemiesOf(player) && !Q.hasSkill('毒逝')),
							content() {
								'step 0';
								player.chooseTarget('请选择【毒逝】的目标', true, (C, P, Q) => Q.isEnemiesOf(P) && !Q.hasSkill('毒逝')).set('ai', (target) => -get.attitude(player, target)); //QQQ
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.markSkill('毒逝');
									target.addSkillLog('毒逝2');
									player.removeSkill('毒逝2');
								}
							},
							intro: {
								content: '您已经获得弘农王的诅咒',
							},
						},
						毒逝2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								player.loseHp();
							},
							ai: {
								threaten: 0.5,
								neg: true,
							},
						},
						余威: {
							ai: {
								combo: '诗怨',
							},
						},
						sanchen: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								var stat = player.getStat('sanchen');
								return !stat || !stat.includes(target);
							},
							content() {
								'step 0';
								var stat = player.getStat();
								if (!stat.sanchen) stat.sanchen = [];
								stat.sanchen.push(target);
								target.draw(3);
								('step 1');
								if (!target.countCards('he')) event.finish();
								else
									target.chooseToDiscard('he', true, 3).set('ai', function (card) {
										var list = ui.selected.cards.map(function (i) {
											return get.type2(i);
										});
										if (!list.includes(get.type2(card))) return 7 - get.value(card);
										return -get.value(card);
									});
								('step 2');
								if (result.bool && result.cards && result.cards.length) {
									var list = [];
									for (var i of result.cards) list.add(get.type2(i));
									if (list.length == result.cards.length) {
										target.draw();
										player.getStat('skill').sanchen--;
									}
								}
							},
							ai: {
								order: 9,
								threaten: 1.7,
								result: {
									target(player, target) {
										if (target.hasSkillTag('nogain')) return -0.1;
										return 1;
									},
								},
							},
							intro: {
								content: '已发动过#次技能',
							},
						},
						pozhu: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							content() {
								player.draw(2);
								player.storage.pozhu = 1;
								player.phaseDiscard();
							},
							group: ['pozhu_init', 'pozhu_start', 'pozhu_discard', 'pozhu_discard_red'],
							subSkill: {
								init: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										global: 'gameStart',
									},
									forced: true,
									popup: false,
									content() {
										player.storage.pozhu = 0;
									},
								},
								start: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									popup: false,
									content() {
										player.storage.pozhu = 0;
									},
								},
								discard: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										player: 'phaseDiscardEnd',
									},
									forced: true,
									filter(event, player) {
										return (!event.cards || event.cards.length == 0) && player.storage.pozhu == 1;
									},
									content() {
										player.recover();
									},
								},
								discard_red: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										player: 'phaseDiscardEnd',
									},
									prompt2(event, player) {
										return '破竹:是否进行一个新的出牌阶段？';
									},
									filter(event, player) {
										if (!event.cards) return false;
										if (event.cards.length == 0) return false;
										if (player.storage.pozhu == 0) return false;
										var flag = 0;
										var cards = event.cards;
										for (var i = 0; i < cards.length; i++) {
											if (get.color(cards[i]) == 'red') flag = 1;
										}
										if (flag == 1) return true;
										return false;
									},
									content() {
										player.phaseUse();
									},
									ai: {
										result: {
											player(player, target) {
												return 1.5;
											},
										},
									},
								},
							},
							ai: {
								order: 8,
								expose: 0.2,
								threaten: 1.2,
								result: {
									player(player) {
										var count = player.countCards('h');
										if (count >= player.hp - 1) return 1.5;
										else if (player.hp == 3 && count == 1) {
											return 7 - get.value(player.getCards()[0]);
										} else if (player.hp == 2) {
											return -1;
										}
										return 1;
									},
								},
							},
						},
						zhaotao: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.countCards('h');
							},
							check(event, player) {
								var cards = player.getCards('h');
								var has = 0;
								var du = 0;
								for (var i = 0; i < cards.length; i++) {
									if (get.value(cards[i]) < 6) {
										has = 1;
										if (cards[i].name != du) {
											du = 1;
										}
									}
								}
								if (has == 1) {
									if (du == 0 && player.hp == 1) {
										return false;
									}
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt2('zhaotao'), [1, 1]).set('ai', function (card) {
									if (card.name == 'du' && player.hp == 1) {
										return -1;
									}
									return 6 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.draw();
									event.card = result.cards[0];
									player.judge(function (card) {
										var check;
										if (!player.canMoveCard(true)) {
											check = false;
										} else {
											check = game.hasPlayer(function (current) {
												return get.attitude(player, current) > 0 && current.countCards('j');
											});
											if (!check) {
												check = game.hasPlayer(function (current) {
													return get.attitude(player, current) < 0 && current.countCards('e');
												});
											}
										}
										if (card.suit == result.cards[0].suit) {
											if (check) {
												return 3;
											}
											return 1;
										}
										if (get.color(card) != get.color(result.cards[0])) {
											return 2;
										}
										return 0;
									});
								}
								('step 2');
								if (result.color && result.suit) {
									if (result.color != get.color(event.card)) {
										player.draw();
									} else if (result.suit == event.card.suit) {
										player.moveCard(true);
									} else {
										event.finish();
									}
								}
							},
							ai: {
								expose: 0.2,
								threaten: 1.3,
							},
						},
						识度: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return game.hasPlayer(function (target) {
									return player != target;
								});
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool && target.isAlive()) {
									var cards = target.getCards('h');
									if (cards.length) player.gain(cards, target, 'giveAuto');
								} else event.finish();
								('step 2');
								var num = Math.floor(player.countCards('h') / 2);
								if (num && target.isAlive()) player.chooseCard('h', num, true, '交给' + get.translation(target) + get.cnNumber(num) + '张牌');
								else event.finish();
								('step 3');
								if (result.bool && result.cards && result.cards.length) target.gain(result.cards, player, 'giveAuto');
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										var delta = target.countCards('h') - player.countCards('h');
										if (delta < 0) return 0;
										return -1 - delta;
									},
								},
							},
						},
						宝箧: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseAfter',
							},
							filter(event, player) {
								return _status.currentPhase != player && player.storage.宝箧 == 0 && (player.storage.宝箧_damaged == 1 || player.storage.宝箧_gain == 1);
							},
							check(event, player) {
								if (_status.currentPhase.next == player) return true;
								var flag = 0;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (get.distance(player, players[i], 'attack') <= 1 && get.attitude(player, players[i]) < 0 && player.countCards('h', { name: 'sha' }) > 0) {
										if (players[i].countCards('h') <= 2) return true;
										flag = 1;
									}
								}
								var cards = player.getCards('h');
								for (var i = 0; i < cards.length; i++) {
									if (get.type(cards[i]) == 'trick') {
										if (cards[i].name == 'wuzhong' || cards[i].name == 'zengbin') return true;
										if (player.getUseValue({ name: cards[i].name }) >= 5 && flag == 1) return true;
										if (player.getUseValue({ name: cards[i].name }) >= 7) return true;
									}
									if (cards[i].name == 'tao' && player.isDamaged()) return true;
								}
								return false;
							},
							content() {
								player.storage.宝箧 = 1;
								player.storage.宝箧_isin = 1;
								player.stat.push({ card: {}, skill: {} });
								player.phaseUse();
							},
							group: ['宝箧_init', '宝箧_start', '宝箧_damage', '宝箧_gain', '宝箧_damage', '宝箧_use'],
							subSkill: {
								init: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										global: ['gameStart', 'roundStart'],
									},
									forced: true,
									popup: false,
									content() {
										player.storage.宝箧 = 0;
									},
								},
								start: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										global: 'phaseBefore',
									},
									forced: true,
									popup: false,
									content() {
										player.storage.宝箧_isin = 0;
										player.storage.宝箧_damage = 0;
										player.storage.宝箧_damaged = 0;
										player.storage.宝箧_gain = 0;
									},
								},
								damaged: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										player: 'damageAfter',
									},
									forced: true,
									popup: false,
									content() {
										player.storage.宝箧_damaged = 1;
									},
								},
								gain: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										player: 'gainAfter',
									},
									forced: true,
									popup: false,
									content() {
										player.storage.宝箧_gain = 1;
									},
								},
								damage: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										source: 'damageAfter',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return player.storage.宝箧_isin == 1;
									},
									content() {
										player.storage.宝箧_damage = 1;
									},
								},
								use: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										player: 'phaseUseEnd',
									},
									forced: true,
									filter(event, player) {
										return player.storage.宝箧_isin == 1 && player.storage.宝箧_damage == 1;
									},
									content() {
										'step 0';
										var list = ['回复一点体力', '摸一张牌'];
										player.chooseControl(list, true).set('prompt', '宝箧:选择一项执行').ai = function () {
											if (player.hp < player.maxHp) return '回复一点体力';
											return '摸一张牌';
										};
										('step 1');
										if (result.control) {
											if (result.control == '回复一点体力') {
												player.recover();
											} else player.draw();
										} else event.finish();
									},
								},
							},
							ai: {
								expose: 0.6,
								threaten: 0.5,
							},
						},
						宜室: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								player.chooseToDiscard('he', true, 3);
								player.gain(game.createCard('sha'));
								player.gain(game.createCard('shan'));
								player.gain(game.createCard('tao'));
							},
						},
						瑰藻: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseDiscardBegin',
							},
							forced: true,
							content() {
								player.draw();
								player.recover();
							},
						},
						讥谀: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								var hs = player.getCards('h');
								for (var i = 0; i < hs.length; i++) {
									if (event.filterCard(hs[i], player)) {
										return true;
									}
								}
								return false;
							},
							filterTarget(card, player, target) {
								return target.countCards('h') && !player.storage.讥谀.includes(target);
							},
							content() {
								'step 0';
								var spade = true;
								if (player.isTurnedOver() || get.attitude(target, player) > 0 || target.hp <= 2) {
									spade = false;
								}
								target
									.chooseToDiscard('h', true)
									.set('ai', function (card) {
										if (card.suit == 'spade') {
											if (_status.event.spade) {
												return 10 - get.value(card);
											} else {
												return -10 - get.value(card);
											}
										}
										if (_status.event.parent.player.storage.讥谀2.includes(card.suit)) {
											return -3 - get.value(card);
										}
										return -get.value(card);
									})
									.set('spade', spade);
								('step 1');
								var card = result.cards[0];
								if (get.color(card) == 'black') {
									target.turnOver();
									target.loseHp();
								}
								player.storage.讥谀.push(target);
								player.storage.讥谀2.add(card.suit);
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										if (player.isTurnedOver() || target.countCards('h') <= 3) return -1;
										return 0;
									},
								},
							},
							group: ['讥谀1', '讥谀2'],
							mod: {
								cardEnabled(card, player) {
									if (player.storage.讥谀2 && player.storage.讥谀2.includes(card.suit)) return false;
								},
							},
						},
						讥谀2: {
							trigger: {
								player: ['phaseUseBegin', 'phaseAfter'],
							},
							silent: true,
							content() {
								player.storage.讥谀 = [];
								player.storage.讥谀2 = [];
							},
							forced: true,
							popup: false,
						},
						讥谀1: {
							mod: {
								maxHandcard(player, num) {
									return num + player.countCards('h');
								},
							},
						},
						hongyi: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he') >= Math.min(2, game.dead.length);
							},
							selectCard() {
								return Math.min(2, game.dead.length);
							},
							filterCard: true,
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								var num = Math.min(2, game.dead.length);
								if (!num) return 1;
								if (num == 1) return 7 - get.value(card);
								return 5 - get.value(card);
							},
							position: 'he',
							content() {
								game.mp45('yanghuiyu');
								player.addTempSkill('hongyi2', { player: 'phaseBeginStart' });
								player.storage.hongyi2.add(target);
								player.markSkill('hongyi2');
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (target.hasJudge('lebu')) return -0.5;
										return -1 - target.countCards('h');
									},
								},
							},
						},
						hongyi2: {
							audio: 'hongyi',
							trigger: {
								global: 'damageBegin',
							},
							charlotte: true,
							forced: true,
							logTarget: 'source',
							filter(event, player) {
								return player.storage.hongyi2.includes(event.source);
							},
							content() {
								'step 0';
								trigger.source.judge();
								('step 1');
								if (result.color == 'black') trigger.num--;
								else trigger.player.draw();
							},
							intro: {
								content: '已选中$为技能目标',
							},
							init(player, skill) {
								if (!player.storage[skill]) player.storage[skill] = [];
							},
						},
						劝封: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							filter(event, player) {
								return player.countCards('h', 'tao') <= 0;
							},
							forced: true,
							content() {
								player.gain(game.createCard('tao'));
								player.draw();
							},
						},
						擅专: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return player != event.player && !event.player.storage._disableJudge && event.player.countCards('he') && !event.player.countCards('j');
							},
							content() {
								'step 0';
								player.choosePlayerCard(trigger.player, 'he', get.prompt('擅专', trigger.player)).set('ai', function (button) {
									if (get.attitude(_status.event.player, _status.event.target) >= 0) return 0;
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									var card = result.cards[0];
									trigger.player.$throw(card);
									if (get.type(card, false) == 'delay') trigger.player.addJudge(card);
									else trigger.player.addJudge({ name: get.color(card, false) == 'red' ? 'lebu' : 'bingliang' }, result.cards);
								}
							},
							group: '擅专_draw',
							subfrequent: ['draw'],
							subSkill: {
								draw: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									prompt: '是否发动【擅专】摸一张牌？',
									content() {
										player.draw();
									},
								},
							},
						},
						托孤: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 3,
							forced: true,
							delay: 0,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.countCards('h');
								});
							},
							content() {
								'step 0';
								var targets = game.filterPlayer(function (current) {
									return current.countCards('h');
								});
								var num = targets.length;
								for (var i = 0; i < targets.length; i++) {
									targets[i] = [targets[i], targets[i].countCards('h', { color: 'black' })];
								}
								targets.sort(function (a, b) {
									return b[1] - a[1];
								});
								for (var i = 1; i < targets.length; i++) {
									if (targets[i][1] < targets[0][1]) {
										targets.splice(i);
										break;
									}
								}
								for (var i = 0; i < targets.length; i++) {
									targets[i] = targets[i][0];
								}
								event.targets = targets;
								var rand = Math.random();
								var choice = targets.randomGet();
								player
									.chooseTarget('猜测手牌中黑色牌最多的角色', true, function (card, player, target) {
										return target.countCards('h');
									})
									.set('ai', function (target) {
										if (rand < 0.6 || player == game.me) {
											return target.isMaxHandcard() ? 1 : 0;
										} else if (rand < 0.8) {
											return target == choice ? 1 : 0;
										} else {
											return Math.random();
										}
									});
								('step 1');
								if (event.targets.includes(result.targets[0])) {
									player.popup('成功');
									game.log(player, '发动', '【托孤】', '成功');
									var dialog = ui.create.dialog('hidden');
									dialog.add('获得任意一名角色的一张手牌');
									var list = game
										.filterPlayer(function (current) {
											return current != player && current.countCards('h');
										})
										.sortBySeat();
									for (var i = 0; i < list.length; i++) {
										dialog.addText(get.translation(list[i]));
										dialog.add(list[i].getCards('h'));
									}
									player.chooseButton(dialog, true).set('ai', function (button) {
										if (get.attitude(player, get.owner(button.link)) > 0) return -1;
										return get.value(button.link);
									});
								} else {
									player.popup('失败');
									game.log(player, '发动', '【托孤】', '失败');
									event.finish();
								}
								('step 2');
								if (result.bool && result.links && result.links.length) {
									var owner = get.owner(result.links[0]);
									if (owner) {
										owner.give(result.links, player);
										player.line(owner);
									} else {
										player.gain(result.links, 'gain2');
									}
								}
							},
							ai: {
								order: 10,
								result: {
									player: 10,
								},
							},
						},
						誉名: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'useCardEnd',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								var evt = event.getParent('phaseUse');
								if (!evt || evt.player != player) return false;
								return player.countCards('he') > 0;
							},
							content() {
								player.chooseToDiscard(1, true);
							},
						},
						yuxu: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								var evt = event.getParent('phaseUse');
								if (!evt || evt.player != player) return false;
								return player.countCards('he') > 0;
							},
							content() {
								trigger.yuxu = true;
								player.addTempSkill('yuxu2');
								player.draw();
							},
						},
						誉虚: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								var evt = event.getParent('phaseUse');
								if (!evt || evt.player != player) return false;
								return player.countCards('he') > 0;
							},
							content() {
								trigger.誉虚 = true;
								player.addTempSkill('yuxu2');
								player.draw(2);
								player.chooseToDiscard('he', true);
							},
						},
						yuxu2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'useCardEnd',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								var evt = event.getParent('phaseUse');
								if (!evt || evt.player != player) return false;
								return player.countCards('he') > 0;
							},
							content() {
								player.draw();
							},
						},
						xjshijian: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							forced: true,
							content() {
								'step 0';
								var next = player.chooseToDiscard('he', get.prompt('xjshijian', trigger.player), '弃置一张牌并令其获得技能〖誉虚〗至回合结束');
								next.set('check', get.attitude(player, trigger.player) > 0 && trigger.player.countCards('h') > 2);
								next.ai = function (card) {
									if (_status.event.check) return 5 - get.value(card);
									return -1;
								};
								('step 1');
								if (result.bool) trigger.player.addTempSkill('yuxu');
							},
							ai: {
								expose: 0.25,
							},
						},
						实荐: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current.isEnemiesOf(player);
								});
								list.sort(lib.sort.seat);
								for (var i = 0; i < list.length; i++) {
									list[i].chooseToDiscard('he', true);
								}
								('step 1');
								trigger.player.addTempSkill('誉虚');
							},
							ai: {
								expose: 0.25,
							},
						},
						荐虚: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							forced: true,
							content() {
								'step 0';
								var next = player.chooseToDiscard('he', get.prompt('荐虚', trigger.player), '弃置一张牌并令其获得技能〖誉名〗至回合结束');
								next.set('check', get.attitude(player, trigger.player) > 0 && trigger.player.countCards('h') > 2);
								next.ai = function (card) {
									if (_status.event.check) return 5 - get.value(card);
									return -1;
								};
								('step 1');
								if (result.bool) trigger.player.addTempSkill('誉名');
							},
							ai: {
								expose: 0.25,
							},
						},
						歃盟: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'useCardEnd',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								return get.type(event.card) == 'trick' && event.cards[0] && event.cards[0] == event.card;
							},
							content() {
								player.gain(trigger.card, 'gain2');
							},
						},
						盟誓: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								var hs = player.getCards('h');
								if (hs.length < 2) return false;
								var red = 0,
									black = 0;
								for (var i of hs) {
									if (get.color(i, player) == 'red') red++;
									else black++;
									if (red > 1 || black > 1) return true;
								}
								return false;
							},
							complexCard: true,
							selectCard: 2,
							filterCard(card, player) {
								if (ui.selected.cards.length) return get.color(card, player) == get.color(ui.selected.cards[0], player);
								var color = get.color(card, player);
								return (
									player.countCards('h', function (cardx) {
										return cardx != card && color == get.color(cardx, player);
									}) > 0
								);
							},
							filterTarget: true,
							check(card) {
								return 7 - get.value(card);
							},
							position: 'h',
							content() {
								target.draw(2);
								player.draw(3);
							},
							ai: {
								order: 6,
								result: { target: 2 },
							},
						},
						将烈: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha' && event.target.countCards('h') > 0;
							},
							check(event, player) {
								return get.attitude(player, event.target) < 0;
							},
							logTarget: 'target',
							content() {
								'step 0';
								trigger.target.showHandcards();
								('step 1');
								var cards = trigger.target.getCards('h');
								var list = [];
								for (var i = 0; i < cards.length; i++) {
									list.add(get.color(cards[i]));
								}
								if (list.length == 1) event._result = { control: list[0] };
								else {
									list.sort();
									trigger.target
										.chooseControl(list)
										.set('prompt', '选择弃置一种颜色的所有手牌')
										.set('ai', function () {
											var player = _status.event.player;
											if (get.value(player.getCards('h', { color: 'red' })) >= get.value(player.getCards('h', { color: 'black' }))) return 'black';
											return 'red';
										});
								}
								('step 2');
								trigger.target.discard(trigger.target.getCards('h', { color: result.control }));
							},
						},
						往烈: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							check(event, player) {
								return (!player.hasJudge('lebu') || !player.hasJudge('bingliang')) && player.hp > 2;
							},
							content() {
								player.recover();
								player.addTempSkill('往烈_phaseDrawBegin', 'phaseAfter');
								player.addTempSkill('往烈_distance', 'phaseAfter');
								player.addTempSkill('往烈_discard', 'phaseAfter');
								player.addTempSkill('往烈_giveCard', 'phaseAfter');
							},
							init(player) {
								player.storage.往烈_discard = [];
							},
							subSkill: {
								phaseDrawBegin: {
									trigger: {
										player: 'phaseDrawBegin',
									},
									forced: true,
									popup: false,
									content() {
										trigger.num += player.maxHp + player.hp;
									},
								},
								distance: {
									mod: {
										globalFrom(from, to, distance) {
											return -Infinity;
										},
									},
								},
								discard: {
									trigger: {
										player: 'discardAfter',
									},
									forced: true,
									popup: false,
									marktext: '忠',
									_priority: -1,
									filter(event, player) {
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												if (get.position(i) == 'd') {
													return true;
												}
											}
										return false;
									},
									content() {
										for (var i = 0; i < trigger.cards.length; i++) {
											if (get.position(trigger.cards[i]) == 'd') {
												player.storage.往烈_discard = player.storage.往烈_discard.concat(trigger.cards[i]);
											}
										}
										player.markSkill('往烈_discard');
									},
									intro: {
										content: 'cards',
									},
								},
								giveCard: {
									trigger: {
										player: 'phaseDiscardAfter',
									},
									filter(event, player) {
										return player.storage.往烈_discard.length;
									},
									forced: true,
									content() {
										'step 0';
										player.chooseTarget('是否发动【往烈】让一名角色获得你本回合的弃牌？', function (card, player, target) {
											return player != target;
										}).ai = function (target) {
											return get.attitude(player, target) > 0;
										};
										('step 1');
										if (result.bool) {
											result.targets[0].gain(player.storage.往烈_discard);
											result.targets[0].$gain(player.storage.往烈_discard);
											delete player.storage.往烈_discard;
											player.storage.往烈_discard = [];
											player.unmarkSkill('往烈_discard');
										} else {
											delete player.storage.往烈_discard;
											player.storage.往烈_discard = [];
											player.unmarkSkill('往烈_discard');
										}
									},
								},
							},
						},
						铸刃: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							position: 'he',
							filterCard: true,
							prompt: '弃一张牌,摸两张牌将你失去的专属装备置入你的装备区',
							check(card) {
								return 8 - get.value(card);
							},
							filter(event, player) {
								return !player.getEquip('pyzhuren_shandian') || !player.getEquip('pyzhuren_club') || !player.getEquip('pyzhuren_diamond') || !player.getEquip('pyzhuren_heart') || !player.getEquip('pyzhuren_spade');
							},
							content() {
								player.draw(2);
								if (!player.getEquip('pyzhuren_shandian')) {
									player.equip(game.createCard('pyzhuren_shandian', 'spade', 1), player);
								}
								if (!player.getEquip('pyzhuren_club')) {
									player.equip(game.createCard('pyzhuren_club', 'club', 1), player);
								}
								if (!player.getEquip('pyzhuren_diamond')) {
									player.equip(game.createCard('pyzhuren_diamond', 'diamond', 1), player);
								}
								if (!player.getEquip('pyzhuren_spade')) {
									player.equip(game.createCard('pyzhuren_spade', 'spade', 1), player);
								}
								if (!player.getEquip('pyzhuren_heart')) {
									player.equip(game.createCard('pyzhuren_heart', 'heart', 1), player);
								}
							},
						},
						天匠: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'equipBegin',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('e', { subtype: 'equip1' }) && get.subtype(event.card) == 'equip1';
							},
							async content(event, trigger, player) {
								trigger.cancel();
								player.draw(2);
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
						pyzhuren_heart: {
							audio: true,
							trigger: { source: 'damageEnd' },
							usable: 1,
							equipSkill: true,
							filter(event, player) {
								return event.parent.name == 'sha';
							},
							check(event, player) {
								return player.isDamaged();
							},
							content() {
								'step 0';
								player.judge(function (card) {
									var player = _status.event.getParent('pyzhuren_heart').player;
									if (player.isHealthy() && get.color(card) == 'red') return 0;
									return 2;
								});
								('step 1');
								if (result.color == 'red') player.recover();
								else player.draw(2);
							},
						},
						pyzhuren_diamond: {
							audio: true,
							trigger: { source: 'damageBegin' },
							forced: true,
							usable: 2,
							equipSkill: true,
							mod: {
								cardUsable(card, player, num) {
									var cardx = player.getEquip('pyzhuren_diamond');
									if (card.name == 'sha' && (!cardx || player.hasSkill('pyzhuren_diamond', null, false) || (!_status.pyzhuren_diamond_temp && !ui.selected.cards.includes(cardx)))) {
										return num + 1;
									}
								},
								cardEnabled2(card, player) {
									if (!_status.event.addCount_extra || player.hasSkill('pyzhuren_diamond', null, false)) return;
									if (card && card == player.getEquip('pyzhuren_diamond')) {
										_status.pyzhuren_diamond_temp = true;
										var bool = lib.filter.cardUsable({ name: 'sha' }, player);
										delete _status.pyzhuren_diamond_temp;
										if (!bool) return false;
									}
								},
							},
							filter(event, player) {
								if (event.parent.name != 'sha') return false;
								return (
									player.countCards('he', function (card) {
										return card != player.getEquip('pyzhuren_diamond');
									}) > 0
								);
							},
							content() {
								'step 0';
								var next = player.chooseToDiscard(
									'he',
									function (card, player) {
										return card != player.getEquip('pyzhuren_diamond');
									},
									get.prompt(event.name, trigger.player),
									'弃置一张牌,令即将对其造成的伤害+1',
								);
								next.ai = function (card) {
									if (_status.event.goon) return 6 - get.value(card);
									return -1;
								};
								next.set(
									'goon',
									get.attitude(player, trigger.player) < 0 &&
									!trigger.player.hasSkillTag('filterDamage', null, {
										player: player,
										card: trigger.card,
									}),
								);
								('step 1');
								if (result.bool) trigger.num++;
								else player.getStat('triggerSkill').pyzhuren_diamond--;
							},
							ai: {
								expose: 0.25,
							},
						},
						pyzhuren_club: {
							audio: true,
							trigger: { player: 'useCardBegin' },
							forced: true,
							equipSkill: true,
							usable: 2,
							filter(event, player) {
								if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
								var info = get.info(event.card);
								if (info.allowMultiple == false) return false;
								if (event.targets && !info.multitarget) {
									if (
										game.hasPlayer(function (current) {
											return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
										})
									) {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								var prompt2 = '为' + get.translation(trigger.card) + '额外指定一个目标';
								player
									.chooseTarget([1, player.storage.fumian_red], get.prompt(event.name), function (card, player, target) {
										var player = _status.event.player;
										if (_status.event.targets.includes(target)) return false;
										return lib.filter.targetEnabled2(_status.event.card, player, target);
									})
									.set('prompt2', prompt2)
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, player, player);
									})
									.set('targets', trigger.targets)
									.set('card', trigger.card);
								('step 1');
								if (result.bool) {
									if (!_status.connectMode && !event.isMine()) game.delayx();
									event.targets = result.targets;
								} else {
									player.getStat('triggerSkill')[event.name]--;
									event.finish();
								}
								('step 2');
								if (event.targets) {
									trigger.targets.addArray(event.targets);
								}
							},
						},
						pyzhuren_spade: {
							audio: true,
							trigger: { player: 'useCardToEnd' },
							filter(event, player) {
								return event.card.name == 'sha'; //&&event.targets.length==1&&get.color(event.card)=='black';
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							logTarget: 'target',
							content() {
								//trigger.target.gain(trigger.cards.filterInD(),'gain2','log');
								trigger.target.loseHp(5); //.set('source',player);
							},
							ai: {
								jueqing: true,
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'unequip') {
										if (arg && arg.name == 'sha' && get.color(arg.card) == 'black') return true;
										return false;
									}
								},
							},
						},
						pyzhuren_spade2: { onremove: true },
						pyzhuren_shandian: {
							audio: true,
							trigger: { player: 'useCardToEnd' },
							filter(event, player) {
								return event.card.name == 'sha'; //&&event.targets.length==1;
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							logTarget: 'target',
							content() {
								'step 0';
								trigger.target.judge(function (card) {
									var suit = card.suit;
									if (suit == 'spade') return -10;
									if (suit == 'club') return -5;
									return 0;
								});
								('step 1');
								if (result.suit == 'spade') {
									trigger.target.damage(3, 'thunder');
									//trigger.parent.excluded.add(trigger.target);
								} else if (result.suit == 'club') {
									trigger.target.damage('thunder');
									player.recover();
									player.draw();
								}
							},
						},
						qicaishenluqcsl: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { source: 'damageBegin' },
							forced: true,
							filter(event, player) {
								return lib.linked.includes(event.nature);
							},
							content() {
								trigger.num++;
							},
						},
						lfhmj: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'shaBegin' },
							_priority: 5,
							logTarget: 'target',
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								trigger.target.chooseToDiscard('he', true);
								player.draw();
							},
						},
						guofengyupao: {
							mod: {
								targetEnabled(card, player, target, now) {
									if (player != target) {
										if (get.type(card) == 'trick') return false;
									}
								},
							},
						},
						xiuluolianyuji修罗炼狱戟: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								var target = event.player;
								return event.parent.name == 'sha' || event.parent.name == 'juedou';
							},
							content() {
								trigger.num++;
								trigger.player.loseHp();
							},
							mod: {
								selectTarget(card, player, range) {
									if (card.name == 'sha') range[1] += 7;
								},
							},
						},
						jinwuluorigong金乌落日弓: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'loseEnd' },
							filter(event, player) {
								return _status.currentPhase == player;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('jinwuluorigong金乌落日弓'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(trigger.num, result.targets[0], 'he', true);
								}
							},
						},
						shishengshibailun: {
							group: 'shishengshibailun1',
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseAfter' },
							filter(event, player) {
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (typeof game.players[i].storage.十胜 == 'number') num += game.players[i].storage.十胜;
								}
								if (num > 0) return true;
								return false;
							},
							prompt(event, player) {
								var str = '';
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (typeof game.players[i].storage.十胜 == 'number') num += game.players[i].storage.十胜;
								}
								str += '移除场上全部的【胜】标记,摸' + num + '张牌,增加等量体力上限';
								return str;
							},
							check(event, player) {
								if (player.countCards('h') == 0 || player.hp == 1) return 1;
								return 0;
							},
							content() {
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].storage.十胜) {
										player.line(game.players[i], 'water');
									}
									if (typeof game.players[i].storage.十胜 == 'number') {
										num += game.players[i].storage.十胜;
										game.players[i].unmarkSkill('十胜');
										game.players[i].storage.十胜 = 0;
									}
								}
								player.draw(num);
								player.gainMaxHp(num);
							},
						},
						shishengshibailun1: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseAfter' },
							filter(event, player) {
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (typeof game.players[i].storage.十败 == 'number') num += game.players[i].storage.十败;
								}
								if (num > 0) return true;
								return false;
							},
							prompt(event, player) {
								var str = '';
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (typeof game.players[i].storage.十败 == 'number') num += game.players[i].storage.十败;
								}
								str += '移除场上全部的【败】标记,令一名角色弃' + num + '张牌';
								return str;
							},
							check(event, player) {
								if (player.countCards('h') == 0 || player.hp == 1) return 1;
								return 0;
							},
							content() {
								'step 0';
								var num = 0;
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i].storage.十败) {
										player.line(game.players[i], 'water');
									}
									if (typeof game.players[i].storage.十败 == 'number') {
										num += game.players[i].storage.十败;
										game.players[i].unmarkSkill('十败');
										game.players[i].storage.十败 = 0;
									}
								}
								event.num = num;
								('step 1');
								player
									.chooseTarget(get.prompt('shishengshibailun1'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, event.num);
								}
							},
						},
						guimoubingjingshan: {
							audio: 'ext:名存实亡/audio:2',
							usable: 1,
							trigger: {
								source: 'damageBegin',
							},
							content() {
								trigger.player.hp -= trigger.num; //QQQ
								player.discardPlayerCard(2, trigger.player, 'he', true);
								trigger.cancel();
								var list = ['sha', 'tao', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
								if (get.mode() == 'guozhan') {
									list = list.concat(['xietianzi', 'shuiyanqijunx', 'lulitongxin', 'lianjunshengyan', 'chiling', 'diaohulishan', 'yuanjiao', 'huoshaolianying']);
								}
								var realname = list.randomGet();
								var card = game.createCard(realname, null, null, null);
								player.useCard(card, trigger.player);
							},
						},
						caiwang: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['useCard', 'respondBegin'] },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('caiwang'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true, 1);
								}
							},
						},
						naxiang: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseUseBefore',
							},
							check(event, player) {
								var q = game.countPlayer(function (current) {
									return get.attitude(player, current) <= 0;
								});
								if (q > 0) return true;
							},
							prompt: '是否发动<纳降>可以弃置一名其他角色一张牌,若该牌不为【闪】,视为你对其使用了一张【杀】;若该牌为【闪】,你获得其一张牌',
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('选择一名其他角色弃置其一张手牌'), 1, function (card, player, target) {
										return target != player && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										return get.attitude(player, target) <= 0;
									});
								('step 1');
								if (result.bool) {
									t = result.targets[0];
									player.discardPlayerCard(true, t, 'he', 1);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									reca = result.cards[0];
									if (reca.name == 'shan') {
										player.gainPlayerCard(t, 'he', 1, true);
									} else {
										player.useCard({ name: 'sha' }, t, false);
									}
								}
							},
						},
						识鹿: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							forced: true,
							content() {
								if (trigger.name == 'phase') {
									player.useCard(game.createCard('qicaishenluqcsl', 'heart', 13), player);
									player.storage.军略++;
									game.log(player, '获得一个<军略>标记');
									player.draw(2);
								}
							},
						},
						军略: {
							audio: 'ext:名存实亡/audio:2',
							init(player) {
								player.storage.军略 = 0;
							},
							marktext: '军',
							intro: {
								content(storage) {
									return '当前有' + storage + '个<军略>标记';
								},
							},
							mark: true,
							trigger: {
								player: 'damageAfter',
								source: 'damageAfter',
							},
							forced: true,
							content() {
								player.storage.军略++;
								game.log(player, '获得一个<军略>标记');
							},
						},
						摧克: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								if (player.storage.军略 % 2 == 1) {
									player.chooseTarget('是否发动【摧克】来对一名角色造成一点伤害？').ai = function (target) {
										return -get.attitude(player, target);
									};
								} else if (player.storage.军略 % 2 == 0) {
									player.chooseTarget('是否发动【摧克】来横置一名角色并弃置其区域内的一张牌？').ai = function (target) {
										return -get.attitude(player, target);
									};
								} else {
									event.finish();
								}
								('step 1');
								if (result.bool) {
									player.line(result.targets);
									if (player.storage.军略 % 2 == 1) {
										result.targets[0].damage();
									} else {
										result.targets[0].link();
										player.discardPlayerCard(result.targets[0], 1, 'hej');
									}
								}
								('step 2');
								if (player.storage.军略 > 7) {
									player
										.chooseControl(['是', '否'])
										.set('ai', function () {
											return '是';
										})
										.set('prompt', '是否弃置所有<军略>标记并对所有其他角色造成一点伤害？');
								} else {
									event.finish();
								}
								('step 3');
								if (result.control == '是') {
									player.line(game.players);
									player.storage.军略 = 0;
									game.log(player, '移去了所有<军略>标记');
									for (var i = 0; i < game.players.length; i++) {
										if (game.players[i] != player) game.players[i].damage();
									}
								}
							},
						},
						绽火: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return player.storage.军略 > 0;
							},
							check(event, player) {
								var num = game.countPlayer(function (current) {
									return get.attitude(player, current) < 0 && current.isLinked();
								});
								return (
									player.storage.军略 >= num &&
									num ==
									game.countPlayer(function (current) {
										return get.attitude(player, current) < 0;
									})
								);
							},
							content() {
								'step 0';
								player.chooseTarget([0, player.storage.军略], '请选择【绽火】的目标', function (card, player, target) {
									return target.isLinked();
								}).ai = function (target) {
									return -get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.line(result.targets);
									player.storage.军略 = 0;
									game.log(player, '移去了所有<军略>标记');
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].discard(result.targets[i].getCards('e'));
										result.targets[i].damage('fire');
									}
								}
							},
						},
						凤鸣: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							content() {
								if (trigger.name == 'phase') {
									player.useCard(game.createCard('lfhmj', 'spade', 2), player);
									player.draw(2);
								}
							},
						},
						昭l烈: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('昭l烈'), function (card, player, target) {
										return target != player && get.distance(player, target, 'attack') <= 1;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (get.attitude(player, target) > 0) return 0;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool) {
									trigger.num++;
									player.storage.昭l烈 = result.targets[0];
									player.addTempSkill('昭l烈2', 'phaseDrawAfter');
								}
							},
						},
						昭l烈2: {
							trigger: { player: 'phaseDrawEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								event.cards = get.cards(10);
								player.showCards(event.cards);
								('step 1');
								event.basic = [];
								event.nonbasic = [];
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.type(i) == 'basic') {
											if (i.name != 'tao') {
												event.basic.push(i);
											}
										} else {
											event.nonbasic.push(i);
										}
									}
								var num = event.nonbasic.length;
								if (num == 0) {
									if (event.basic.length == 0) {
										event.finish();
										return;
									}
									player.storage.昭l烈
										.chooseTarget(
											function (card, player, target) {
												var source = _status.event.source;
												return target == source || target == source.storage.昭l烈;
											},
											true,
											'选择一个目标获得' + get.translation(event.basic),
										)
										.set('ai', function (target) {
											return get.attitude(_status.event.player, target);
										})
										.set('source', player);
								} else {
									player.storage.昭l烈
										.chooseToDiscard(num, 'he', '弃置' + get.cnNumber(num) + '张牌并令' + get.translation(player) + '拿牌,或受到' + get.cnNumber(num) + '点伤害并拿牌')
										.set('ai', function (card) {
											var player = _status.event.player;
											switch (_status.event.num) {
												case 1:
													return player.hp > 1 ? 0 : 7 - get.value(card);
												case 2:
													return 8 - get.value(card);
												case 3:
													return 10 - get.value(card);
												default:
													return 0;
											}
										})
										.set('num', num);
								}
								('step 2');
								var num = event.nonbasic.length;
								var undone = false;
								if (num == 0) {
									if (event.basic.length) {
										result.targets[0].gain(event.basic, 'gain2', 'log');
									}
								} else {
									if (result.bool) {
										if (event.basic.length) {
											player.gain(event.basic, 'gain2', 'log');
										}
									} else {
										player.storage.昭l烈.damage(num);
										if (event.basic.length) {
											undone = true;
										}
									}
								}
								if (!undone) {
									delete player.storage.昭l烈;
									event.finish();
								}
								('step 3');
								if (player.storage.昭l烈.isAlive()) {
									player.storage.昭l烈.gain(event.basic, 'gain2', 'log');
								} else {
									for (var i = 0; i < event.basic.length; i++) {
										event.basic[i].discard();
									}
								}
								delete player.storage.昭l烈;
							},
						},
						龙怨: {
							mark: true,
							marktext: '龙',
							intro: {
								content(storage, player, skill) {
									if (player.storage.龙怨 == true) return '出牌阶段开始时,你可加1点体力上限并摸2张牌,本回合你的锦囊牌均视为雷杀且无使用次数限制';
									return '出牌阶段开始时,你可回复一点体力并摸2张牌,本回合你的红色手牌均视为火杀且无距离限制';
								},
							},
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							content() {
								if (player.storage.龙怨 == true) {
									player.storage.龙怨 = false;
									player.gainMaxHp();
									player.draw(2);
									player.addTempSkill('龙怨_2', { player: 'phaseAfter' });
								} else {
									player.storage.龙怨 = true;
									player.recover();
									player.draw(2);
									player.addTempSkill('龙怨_1', { player: 'phaseAfter' });
								}
							},
							subSkill: {
								1: {
									mod: {
										cardEnabled(card, player) {
											if (_status.event.skill != '龙怨_1' && (card.name != 'sha' || card.nature != 'fire') && get.color(card) == 'red') return false;
										},
										cardUsable(card, player) {
											if (_status.event.skill != '龙怨_1' && (card.name != 'sha' || card.nature != 'fire') && get.color(card) == 'red') return false;
										},
										cardRespondable(card, player) {
											if (_status.event.skill != '龙怨_1' && (card.name != 'sha' || card.nature != 'fire') && get.color(card) == 'red') return false;
										},
										cardSavable(card, player) {
											if (_status.event.skill != '龙怨_1' && (card.name != 'sha' || card.nature != 'fire') && get.color(card) == 'red') return false;
										},
										targetInRange(card) {
											if ((card.name == 'sha' && card.nature == 'fire') || _status.event.skill == '龙怨_1') return true;
										},
									},
									enable: ['chooseToUse', 'chooseToRespond'],
									filterCard: { color: 'red' },
									viewAs: { name: 'sha', nature: 'fire' },
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
										order: 4,
										useful: -1,
										value: -1,
									},
								},
								2: {
									mod: {
										cardEnabled(card, player) {
											if (_status.event.skill != '龙怨_2' && get.type(card) == 'trick') return false;
										},
										cardUsable(card, player) {
											if (_status.event.skill != '龙怨_2' && get.type(card) == 'trick') return false;
										},
										cardRespondable(card, player) {
											if (_status.event.skill != '龙怨_2' && get.type(card) == 'trick') return false;
										},
										cardSavable(card, player) {
											if (_status.event.skill != '龙怨_2' && get.type(card) == 'trick') return false;
										},
										cardUsable(card, player) {
											if (card.name == 'sha' && card.nature == 'thunder') return Infinity;
										},
									},
									enable: ['chooseToUse', 'chooseToRespond'],
									filterCard: { type: 'trick' },
									viewAs: { name: 'sha', nature: 'thunder' },
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
										order: 4,
										useful: -1,
										value: -1,
									},
								},
							},
						},
						//锁定技.你受伤/回复体力后,你回复一点体力或对一名角色造成1点伤害;每名角色的回合限一次,你获得手牌或失去手牌后,你摸一张牌或弃置一名其他角色一张牌
						允忠: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['changeHp'] },
							forced: true,
							usable: 1,
							async content(event, trigger, player) {
								//QQQ
								const result = await player
									.chooseTarget('对一名角色造成1点伤害')
									.set('ai', (target) => -get.attitude(player, target))
									.forResult();
								if (result.targets && result.targets[0]) {
									player.line(result.targets[0], 'green');
									result.targets[0].damage();
								} else player.recover();
							},
							group: '允忠2',
						},
						允忠2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: ['loseAfter', 'gainAfter'],
							},
							forced: true,
							usable: 1,
							async content(event, trigger, player) {
								//QQQ
								const result = await player
									.chooseTarget('弃置一名其他角色一张牌', (c, p, t) => t.countCards('he'))
									.set('ai', (target) => -get.attitude(player, target))
									.forResult();
								if (result.targets && result.targets[0]) {
									player.line(result.targets[0], 'green');
									player.discardPlayerCard(result.targets[0], true, 'he');
								} else player.draw();
							},
						},
						博览: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							content() {
								trigger.player.loseHp();
								trigger.player.clearSkills();
							},
						},
						仪法: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'useCardToBegin' },
							filter(event, player) {
								return player != event.player && (event.card.name == 'sha' || (get.color(event.card) == 'black' && get.type(event.card) == 'trick'));
							},
							content() {
								var target = trigger.player;
								target.addSkill('仪法2');
								target.storage.仪法2 += 1;
								target.markSkill('仪法2');
							},
						},
						仪法2: {
							silent: true,
							mark: true,
							intro: { content: '手牌上限-#' },
							init(player) {
								player.storage.仪法2 = 0;
							},
							mod: {
								maxHandcard(player, num) {
									return num - player.storage.仪法2;
								},
							},
						},
						驭袍: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							content() {
								if (trigger.name == 'phase') {
									player.useCard(game.createCard('guofengyupaolm', 'diamond', 3), player);
									player.draw(2);
								}
							},
						},
						涉猎: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseDrawBefore' },
							content() {
								'step 0';
								player.recover();
								('step 1');
								event.cards = get.cards(5);
								if (event.isMine() == false) {
									event.dialog = ui.create.dialog('涉猎', event.cards);
								}
								('step 2');
								if (event.dialog) event.dialog.close();
								var dialog = ui.create.dialog('涉猎', event.cards);
								player.chooseButton([0, 5], dialog, true).set('ai', function (button) {
									return get.value(button.link);
								}).filterButton = function (button) {
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
								player.gain(cards2, 'log');
								if (cards2.length) player.$gain2(cards2);
								for (var i = 0; i < cards.length; i++) {
									cards[i].discard();
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						gongxin神吕蒙: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 5,
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
										event.videoId,
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
										return get.color(button.link) == 'red';
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
									player.chooseControl('弃置', '置于牌堆顶');
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
								if (result.control == '置于牌堆顶') {
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
						功獒: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'dyingBegin' },
							forced: true,
							usable: 5, //QQQ
							content() {
								player.gainMaxHp();
								player.recover();
								player.draw(2);
							},
							ai: {
								threaten: 1.5,
							},
						},
						举义: {
							audio: 'ext:名存实亡/audio:2',
							derivation: ['溃散', '威重'],
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								var num = player.maxHp;
								player.draw(num);
								player.addSkill('威重');
								player
									.chooseTarget(get.prompt('举义'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].addSkill('溃散');
								}
							},
						},
						溃散: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseEnd' },
							forced: true,
							content() {
								player.loseHp();
								player.loseMaxHp();
							},
						},
						威重: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: ['gainMaxHpEnd', 'loseMaxHpEnd'],
							},
							forced: true,
							content() {
								'step 0';
								player.draw();
								player
									.chooseTarget(get.prompt('威重'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
								}
							},
						},
						忠鉴: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('忠鉴'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(3, result.targets[0], 'he', true);
									player.draw();
								}
							},
						},
						才识: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseUseBegin' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('才识'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.addSkill('才识2');
									target.storage.才识2 += 1;
									target.markSkill('才识2');
									target.addTempSkill('才识4', 'phaseAfter');
									player.addSkill('才识3');
									player.storage.才识3 += 1;
									player.markSkill('才识3');
									player.recover();
								}
							},
						},
						才识2: {
							silent: true,
							mark: true,
							intro: { content: '手牌上限-#' },
							init(player) {
								player.storage.才识2 = 0;
							},
							mod: {
								maxHandcard(player, num) {
									return num - player.storage.才识2;
								},
							},
						},
						才识3: {
							silent: true,
							mark: true,
							intro: { content: '手牌上限+#' },
							init(player) {
								player.storage.才识3 = 0;
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.才识3;
								},
							},
						},
						才识4: {
							mark: true,
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
						诏颂: {
							audio: 'ext:名存实亡/audio:4',
							trigger: {
								global: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.draw();
								('step 1');
								player
									.chooseTarget(get.prompt('选择一名角色获得其一张牌'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									player.gainPlayerCard(result.targets[0], 'he', true);
								}
								('step 3');
								player
									.chooseTarget(get.prompt('选择一名角色令其使用杀无攻击范围限制且使用目标数可加二直到其下个回合结束并摸一张牌增加一点体力上限回复一点体力'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 4');
								if (result.bool) {
									result.targets[0].addTempSkill('诏颂2', { player: 'phaseAfter' });
									result.targets[0].draw();
									result.targets[0].gainMaxHp();
									result.targets[0].recover();
								}
								('step 5');
								player
									.chooseTarget(get.prompt('选择一名角色令其下个回合不能使用杀并失去一点体力并弃置其一张牌'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 6');
								if (result.bool) {
									result.targets[0].addTempSkill('诏颂3', { player: 'phaseAfter' });
									result.targets[0].loseHp();
									player.discardPlayerCard(result.targets[0], 'he', true);
								}
							},
						},
						诏颂2: {
							mark: true,
							marktext: '颂',
							intro: {
								content: '使用杀无攻击范围限制且使用目标数可加二',
							},
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
								selectTarget(card, player, range) {
									if (card.name == 'sha') range[1] += 2;
								},
							},
						},
						诏颂3: {
							mark: true,
							marktext: '诏',
							intro: {
								content: '无法使用杀直到你下个回合结束后',
							},
							mod: {
								cardEnabled(card) {
									if (card.name == 'sha') return false;
								},
							},
						},
						离思: {
							usable: 1,
							audio: 'ext:名存实亡/audio:4',
							trigger: {
								player: ['useCardAfter', 'respond'],
							},
							filter(event, player) {
								if (get.itemtype(event.cards) != 'cards') return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.isInPile()) {
											return true;
										}
									}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('离思'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att < 3) return 0;
										if (target.hasJudge('lebu')) {
											att /= 5;
										}
										if (target.hasSha() && _status.event.sha) {
											att /= 5;
										}
										if (_status.event.wuxie && target.needsToDiscard(1)) {
											att /= 5;
										}
										return att / (1 + get.distance(player, target, 'absolute'));
									})
									.set('sha', trigger.cards[0].name == 'sha')
									.set('wuxie', trigger.cards[0].name == 'wuxie');
								('step 1');
								if (result.bool) {
									var list = [];
									for (var i = 0; i < trigger.cards.length; i++) {
										if (trigger.cards[i].isInPile()) {
											list.push(trigger.cards[i]);
										}
									}
									result.targets[0].gain(list, 'gain2');
									player.draw(2);
								}
							},
						},
						三陈: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								var stat = player.getStat('三陈');
								return !stat || !stat.includes(target);
							},
							content() {
								'step 0';
								var stat = player.getStat();
								if (!stat.三陈) stat.三陈 = [];
								stat.三陈.push(target);
								target.draw(6);
								('step 1');
								if (!target.countCards('he')) event.finish();
								else
									target.chooseToDiscard('he', true, 3).set('ai', function (card) {
										var list = ui.selected.cards.map(function (i) {
											return get.type2(i);
										});
										if (!list.includes(get.type2(card))) return 7 - get.value(card);
										return -get.value(card);
									});
								('step 2');
								if (result.bool && result.cards && result.cards.length) {
									var list = [];
									for (var i of result.cards) list.add(get.type2(i));
									if (list.length == result.cards.length) {
										target.draw(2);
										player.getStat('skill').三陈--;
									}
								}
							},
							ai: {
								order: 9,
								threaten: 1.7,
								result: {
									target(player, target) {
										if (target.hasSkillTag('nogain')) return -0.1;
										return 1;
									},
								},
							},
							intro: {
								content: '已发动过#次技能',
							},
						},
						破竹: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							content() {
								'step 0';
								player.chooseTarget(get.prompt('破竹'), [1, 4], function (card, player, target) {
									return true;
								});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										var X = result.targets[i].maxHp - result.targets[i].hp;
										result.targets[i].chooseToDiscard('he', true, X);
										result.targets[i].damage(1);
									}
								}
							},
							ai: {
								threaten: 1.6,
								expose: 0.2,
							},
						},
						昭讨: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								player.gain(game.createCard('qijia'));
								player.gain(game.createCard('guohe'));
								player.gain(game.createCard('wanjian'));
								player.gain(game.createCard('huoshaolianying'));
							},
						},
						毦征: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 2;
								var fellow = game.addFellow(pos, 'baihaochihou白毦斥候');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('忠臣');
								fellow.draw(fellow.maxHp);
								fellow.node.identity.dataset.color = fellow.identity;
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'baihaobing');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('忠臣');
								fellow1.draw(fellow1.maxHp);
								fellow1.node.identity.dataset.color = fellow1.identity;
								('step 1');
								player.removeSkill('毦征');
							},
						},
						shennu神怒: {
							trigger: { source: 'damageEnd', player: 'damageEnd' },
							forced: true,
							mark: true,
							marktext: '怒',
							audio: 'ext:名存实亡/audio:2',
							filter(event, player) {
								return event.num > 0;
							},
							init(player) {
								player.storage.shennu神怒 = 4;
								game.addVideo('storage', player, ['shennu神怒', player.storage.shennu神怒]);
							},
							content() {
								player.storage.shennu神怒 += trigger.num;
								game.addVideo('storage', player, ['shennu神怒', player.storage.shennu神怒]);
							},
							intro: {
								content: 'mark',
							},
							ai: {
								combo: '愤世',
								maixie: true,
								maixie_hp: true,
							},
						},
						愤世: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.storage.shennu神怒 >= 6;
							},
							usable: 1, //QQQ
							content() {
								'step 0';
								player.storage.shennu神怒 -= 6;
								event.targets = game.filterPlayer();
								event.targets.remove(player);
								event.targets.sort(lib.sort.seat);
								event.targets2 = event.targets.slice(0);
								player.line(event.targets, 'green');
								('step 1');
								if (event.targets.length) {
									event.targets.shift().damage(1 + player.storage.shennu神怒);
									event.redo();
								}
								('step 2');
								if (event.targets2.length) {
									var cur = event.targets2.shift();
									if (cur && cur.countCards('he')) {
										cur.chooseToDiscard('he', true, 4 * player.storage.shennu神怒);
									}
									event.redo();
								}
							},
							intro: {
								content: 'limited',
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										return game.countPlayer(function (current) {
											if (current != player) {
												return get.sgn(get.damageEffect(current, player, player));
											}
										});
									},
								},
							},
						},
						空前kq: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							derivation: '无双魔界神吕布',
							filter(event, player) {
								return player.storage.shennu神怒 >= 2 && !player.hasSkill('无双魔界神吕布');
							},
							content() {
								player.storage.shennu神怒 -= 2;
								player.addTempSkill('无双魔界神吕布');
							},
							ai: {
								order: 5,
								result: {
									player(player) {
										if (!player.storage.愤世) return 0;
										var cards = player.getCards('h', 'sha');
										if (cards.length) {
											if (
												game.hasPlayer(function (current) {
													return player.canUse('sha', current) && get.effect(current, cards[0], player, player) > 0 && current.hasShan();
												})
											) {
												return 1;
											}
										}
										return 0;
									},
								},
							},
						},
						juemou绝谋: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'useCard' },
							usable: 5, //QQQ
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								trigger.player.loseHp();
								player.storage.shennu神怒++;
								game.addVideo('storage', player, ['shennu神怒', player.storage.shennu神怒]);
							},
							ai: {
								threaten: 1.4,
								noautowuxie: true,
							},
						},
						炼戟: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							forced: true,
							content() {
								if (trigger.name == 'phase') {
									player.useCard(game.createCard('xiuluolianyuji修罗炼狱戟', 'diamond', 12), player);
									player.storage.shennu神怒++;
									game.log(player, '获得一个<神怒>标记');
									player.draw(2);
								}
							},
						},
						无双魔界神吕布: {
							forced: true,
							group: ['无双魔界神吕布1', '无双魔界神吕布2'],
						},
						无双魔界神吕布1: {
							audio: 'ext:名存实亡/audio:2',
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
						无双魔界神吕布2: {
							audio: 'ext:名存实亡/audio:2',
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
						當先: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								player.draw(3);
								player.phaseUse();
								('step 1');
								player.getStat().card = {};
							},
						},
						伏櫪: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'dyingBegin',
							}, //QQQ
							content() {
								'step 0';
								trigger.player.recover(player.maxHp);
								('step 1');
								player
									.chooseTarget(get.prompt('伏櫪'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									result.targets[0].turnOver();
								}
							},
							ai: {
								save: true,
								result: {
									player: 10,
								},
								threaten(player, target) {
									if (!target.storage.伏櫪) return 0.9;
								},
							},
						},
						落乌: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							forced: true,
							content() {
								if (trigger.name == 'phase') {
									player.useCard(game.createCard('jinwuluorigong金乌落日弓', 'heart', 5), player);
									player.draw(2);
								}
							},
						},
						慧论: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							forced: true,
							content() {
								if (trigger.name == 'phase') {
									player.useCard(game.createCard('shishengshibailun', null, 10), player);
									player.draw(2);
								}
							},
						},
						辉翊: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							forced: true,
							content() {
								if (trigger.name == 'phase') {
									player.useCard(game.createCard('guimoubingjingshan', 'spade', 1), player);
									player.draw(2);
								}
							},
						},
						魄襲: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 2,

							filterTarget(card, player, target) {
								//return target!=player&&target.countCards('h')>0;
								return target != player;
							},
							content() {
								'step 0';
								event.list1 = [];
								event.list2 = [];
								if (target.countCards('h') > 0) {
									var chooseButton = player.chooseButton(4, 'hidden', ['你的手牌', player.getCards('h'), get.translation(target.name) + '的手牌', target.getCards('h'), 'hidden']);
								} else {
									var chooseButton = player.chooseButton(4, 'hidden', ['你的手牌', player.getCards('h'), 'hidden']);
								}
								chooseButton.set('ai', function (button) {
									//if(button.link.name=='du') return 1;
									return 0;
								});
								chooseButton.filterButton = function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
									}
									return true;
								};
								('step 1');
								if (result.bool) {
									var list = result.links;
									for (var i = 0; i < list.length; i++) {
										if (get.owner(list[i]) == player) {
											event.list1.push(list[i]);
										} else {
											event.list2.push(list[i]);
										}
									}
									target.discard(event.list2);
									player.discard(event.list1);
								}
								('step 2');
								if (event.list1.length + event.list2.length == 4) {
									if (event.list1.length == 0) player.gainMaxHp();
									if (event.list1.length == 1) {
										player.addTempSkill('魄襲1', { player: 'phaseAfter' });
									}
									if (event.list1.length == 3) player.recover();
									if (event.list1.length == 4) player.draw(4);
								}
							},
							ai: {
								order: 13,
								result: {
									target(player, target, card) {
										return -1;
									},
								},
							},
						},
						魄襲1: {
							mod: {
								maxHandcard(player, num) {
									return num + 1;
								},
							},
						},
						劫營: {
							init(player) {
								player.storage.劫營 = 0;
							},
							marktext: '營',
							intro: {
								content(storage) {
									return '当前有' + storage + '个<營>';
								},
							},
							mark: true,
							group: ['劫營_1', '劫營_2', '劫營_3'],
							subSkill: {
								1: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										global: 'gameStart',
									},
									forced: true,
									content() {
										player.storage.劫營++;
										game.log(player, '获得了<營>标记');
									},
								},
								2: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									content() {
										'step 0';
										player.chooseTarget(get.prompt('劫營'), function (card, player, target) {
											return target.storage.劫營 == undefined;
										}).ai = function (target) {
											return -1;
										};
										('step 1');
										if (result.bool) {
											var target = result.targets[0];
											player.line(target);
											if (player.storage.劫營1 != undefined) {
												var pl = player.storage.劫營1;
												delete pl.storage.劫營;
												pl.unmarkSkill('劫營');
												game.log(pl, '失去了<營>标记');
											} else {
												delete player.storage.劫營;
												player.unmarkSkill('劫營');
												game.log(player, '失去了<營>标记');
											}
											player.storage.劫營1 = target;
											if (target.storage.劫營 == undefined) target.storage.劫營 = 0;
											target.storage.劫營++;
											target.markSkill('劫營');
											game.log(target, '获得了<營>标记');
										}
									},
								},
								3: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										global: 'phaseAfter',
									},
									forced: true,
									filter(event, player) {
										return event.player != player && event.player.storage.劫營 != undefined && event.player.countCards('h') > 0;
									},
									content() {
										trigger.player.$give(trigger.player.getCards('h'), player);
										player.gain(trigger.player.getCards('h'), trigger.player);
									},
								},
							},
						},
						_劫營: {
							mod: {
								cardUsable(card, player, num) {
									if (player.storage.劫營 != undefined && card.name == 'sha') return num + 1;
								},
								maxHandcard(player, num) {
									if (player.storage.劫營 != undefined) return num + 1;
								},
							},
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							filter(event, player) {
								return player.storage.劫營 != undefined;
							},
							content() {
								trigger.num++;
							},
						},
						辟易: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var pos = 3;
								var fellow = game.addFellow(pos, 'jinfanchuanlingshi锦帆传令使');
								fellow.side = player.side;
								if (player.identity != 'zhu') fellow.identity = player.identity;
								else fellow.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow._group = player.identity;
								fellow.setIdentity('<font color=#9ACD32>兴霸精锐</font>');
								fellow.draw(fellow.maxHp);
								//------------------------------------------------------------------
								var fellow1 = game.addFellow(pos, 'jinfanqibing锦帆奇兵');
								fellow1.side = player.side;
								if (player.identity != 'zhu') fellow1.identity = player.identity;
								else fellow1.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow1._group = player.identity;
								fellow1.setIdentity('<font color=#9ACD32>兴霸精锐</font>');
								fellow1.draw(fellow1.maxHp);
								//------------------------------------------------------------------
								var fellow2 = game.addFellow(pos, 'jinfanqinggongdui锦帆轻弓队');
								fellow2.side = player.side;
								if (player.identity != 'zhu') fellow2.identity = player.identity;
								else fellow2.identity = 'zhong';
								if (lib.config.mode == 'guozhan') fellow2._group = player.identity;
								fellow2.setIdentity('<font color=#9ACD32>兴霸精锐</font>');
								fellow2.draw(fellow2.maxHp);
								('step 1');
								player.removeSkill('辟易');
							},
						},
						十胜: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'useCardEnd' },
							marktext: '胜',
							init(player) {
								player.storage.十胜 = 0;
							},
							intro: {
								content(storage) {
									return '当前有' + storage + '个<胜>';
								},
							},
							mark: true,
							forced: true,
							usable: 5, //QQQ
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('十胜'), function (card, player, target) {
									return true;
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.line(event.target);
									if (event.target.storage.十胜 == undefined) event.target.storage.十胜 = 0;
									event.target.markSkill('十胜');
									event.target.storage.十胜++;
									if (player.storage.十胜)
										player.chooseTarget(get.prompt('十胜'), [1, player.storage.十胜], function (card, player, target) {
											return true;
										});
								}
								('step 2');
								if (result.bool) {
									var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
									result.targets.sort(lib.sort.seat);
									for (var i = 0; i < result.targets.length; i++) {
										trigger.player.useCard(card, result.targets[i]);
									}
								}
							},
							ai: {
								threaten: 1.4,
								noautowuxie: true,
							},
							group: '十胜1',
						},
						十胜1: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								if (!event.player.storage.十胜) return false;
								return true;
							},
							content() {
								trigger.player.storage.十胜--;
								trigger.player.draw(2 * trigger.num);
							},
						},
						十败: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'useCardEnd' },
							marktext: '败',
							init(player) {
								player.storage.十败 = 0;
							},
							intro: {
								content(storage) {
									return '当前有' + storage + '个<败>';
								},
							},
							mark: true,
							forced: true,
							filter(event, player) {
								return event.card.name == 'sha';
							},
							content() {
								'step 0';
								player.chooseTarget('选择一名角色获得一枚败标记', function (card, player, target) {
									return true;
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.line(event.target);
									if (event.target.storage.十败 == undefined) event.target.storage.十败 = 0;
									event.target.markSkill('十败');
									event.target.storage.十败++;
								}
							},
							ai: {
								threaten: 1.4,
								noautowuxie: true,
							},
							group: ['十败1', '十败2'],
						},
						十败1: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								if (!event.player.storage.十败) return false;
								return true;
							},
							content() {
								trigger.player.storage.十败--;
								trigger.player.chooseToDiscard('he', true, 2);
							},
						},
						十败2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'useCard' },
							filter(event, player) {
								return get.type(event.card) != 'equip' && player.storage.十败;
							},
							content() {
								'step 0';
								if (player.storage.十败)
									player.chooseTarget('令目标角色减1到败标记数', [1, Math.min(trigger.targets, player.storage.十败)], function (card, player, target) {
										return _status.event.getTrigger().targets.includes(target);
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										trigger.targets.remove(result.targets[i]);
									}
								}
							},
						},
						dingcesgj: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('选择一名角色令其不能使用或打出除杀以外的牌直到其下个回合结束后'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('dingcesgj神郭嘉2', { player: 'phaseAfter' });
								}
								('step 2');
								player
									.chooseTarget(get.prompt('选择一名角色令其不能使用或打出除随机锦囊以外的牌直到其下个回合结束后'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 3');
								if (result.bool) {
									result.targets[0].addTempSkill('dingcesgj神郭嘉1', { player: 'phaseAfter' });
								}
							},
						},
						dingcesgj神郭嘉1: {
							charlotte: true,
							mark: true,
							intro: { content: '不能使用或打出除随机锦囊以外的牌' },
							mod: {
								cardEnabled(card, player) {
									var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
									if (get.mode() == 'guozhan') {
										list = list.concat(['xietianzi', 'shuiyanqijunx', 'lulitongxin', 'lianjunshengyan', 'chiling', 'diaohulishan', 'yuanjiao', 'huoshaolianying']);
									}
									var realname = list.randomGet();
									if (card.name != realname) return false;
								},
								cardUsable(card, player) {
									var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
									if (get.mode() == 'guozhan') {
										list = list.concat(['xietianzi', 'shuiyanqijunx', 'lulitongxin', 'lianjunshengyan', 'chiling', 'diaohulishan', 'yuanjiao', 'huoshaolianying']);
									}
									var realname = list.randomGet();
									if (card.name != realname) return false;
								},
								cardRespondable(card, player) {
									var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
									if (get.mode() == 'guozhan') {
										list = list.concat(['xietianzi', 'shuiyanqijunx', 'lulitongxin', 'lianjunshengyan', 'chiling', 'diaohulishan', 'yuanjiao', 'huoshaolianying']);
									}
									var realname = list.randomGet();
									if (card.name != realname) return false;
								},
								cardSavable(card, player) {
									var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
									if (get.mode() == 'guozhan') {
										list = list.concat(['xietianzi', 'shuiyanqijunx', 'lulitongxin', 'lianjunshengyan', 'chiling', 'diaohulishan', 'yuanjiao', 'huoshaolianying']);
									}
									var realname = list.randomGet();
									if (card.name != realname) return false;
								},
							},
						},
						dingcesgj神郭嘉2: {
							charlotte: true,
							mark: true,
							intro: { content: '不能使用或打出除杀以外的牌' },
							mod: {
								cardEnabled(card, player) {
									if (card.name != 'sha') return false;
								},
								cardUsable(card, player) {
									if (card.name != 'sha') return false;
								},
								cardRespondable(card, player) {
									if (card.name != 'sha') return false;
								},
								cardSavable(card, player) {
									if (card.name != 'sha') return false;
								},
							},
						},
						擅s专z: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return player != event.player && event.player.countCards('he');
							},
							content() {
								'step 0';
								player.choosePlayerCard(trigger.player, 'he', get.prompt('擅s专z', trigger.player)).set('ai', function (button) {
									if (get.attitude(_status.event.player, _status.event.target) >= 0) return 0;
									return get.value(button.link);
								});
								('step 1');
								if (result.bool) {
									var card = result.cards[0];
									trigger.player.$throw(card);
									if (get.type(card, false) == 'delay') trigger.player.addJudge(card);
									else trigger.player.addJudge({ name: get.color(card, false) == 'red' ? 'lebu' : 'bingliang' }, result.cards);
								}
							},
							group: '擅s专z_draw',
							subfrequent: ['draw'],
							subSkill: {
								draw: {
									audio: 'ext:名存实亡/audio:2',
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									prompt: '是否发动【擅s专z】摸一张牌？',
									content() {
										player.draw();
									},
								},
							},
						},
						托t孤g: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 3,
							forced: true,
							delay: 0,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.countCards('h');
								});
							},
							content() {
								'step 0';
								var targets = game.filterPlayer(function (current) {
									return current.countCards('h');
								});
								var num = targets.length;
								for (var i = 0; i < targets.length; i++) {
									targets[i] = [targets[i], targets[i].countCards('h', { color: 'black' })];
								}
								targets.sort(function (a, b) {
									return b[1] - a[1];
								});
								for (var i = 1; i < targets.length; i++) {
									if (targets[i][1] < targets[0][1]) {
										targets.splice(i);
										break;
									}
								}
								for (var i = 0; i < targets.length; i++) {
									targets[i] = targets[i][0];
								}
								event.targets = targets;
								var rand = Math.random();
								var choice = targets.randomGet();
								player
									.chooseTarget('猜测手牌中黑色牌最多的角色', true, function (card, player, target) {
										return target.countCards('h');
									})
									.set('ai', function (target) {
										if (rand < 0.6 || player == game.me) {
											return target.isMaxHandcard() ? 1 : 0;
										} else if (rand < 0.8) {
											return target == choice ? 1 : 0;
										} else {
											return Math.random();
										}
									});
								('step 1');
								if (event.targets.includes(result.targets[0])) {
									player.popup('成功');
									game.log(player, '发动', '【托孤】', '成功');
									var dialog = ui.create.dialog('hidden');
									dialog.add('获得任意一名角色的一张手牌');
									var list = game
										.filterPlayer(function (current) {
											return current != player && current.countCards('h');
										})
										.sortBySeat();
									for (var i = 0; i < list.length; i++) {
										dialog.addText(get.translation(list[i]));
										dialog.add(list[i].getCards('h'));
									}
									player.chooseButton(dialog, true).set('ai', function (button) {
										if (get.attitude(player, get.owner(button.link)) > 0) return -1;
										return get.value(button.link);
									});
								} else {
									player.popup('失败');
									game.log(player, '发动', '【托孤】', '失败');
									event.finish();
								}
								('step 2');
								if (result.bool && result.links && result.links.length) {
									var owner = get.owner(result.links[0]);
									if (owner) {
										owner.give(result.links, player);
										player.line(owner);
									} else {
										player.gain(result.links, 'gain2');
									}
									player.draw(2);
								}
							},
							ai: {
								order: 10,
								result: {
									player: 10,
								},
							},
						},
						忿肆: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('忿肆'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage();
									player.useCard({ name: 'sha' }, result.targets[0], false);
									result.targets[0].useCard({ name: 'sha' }, player, false);
								}
							},
						},
						助势: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'recoverEnd' },
							filter(event, player) {
								if (player.group != 'wei') return false;
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
						潜渊: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							content() {
								'step 0';
								var cards = get.cards(5);
								event.cards = cards;
								var num = player.maxHp - player.hp;
								var next = player.chooseCardButton(cards, '选择获得的牌', [1, num]).set('filterButton', function (button) {
									return true;
								});
								('step 1');
								if (result.bool) {
									player.gain(result.links);
									player.$draw(result.links);
								}
								for (var i = event.cards.length - 1; i >= 0; i--) {
									if (!result.bool || !result.links.includes(event.cards[i])) {
										ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
									}
								}
							},
						},
						决讨: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseUseBegin' },
							content() {
								'step 0';
								event.num = 5;
								event.numx = 0;
								('step 1');
								var list = [];
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									list.push(ui.cardPile.childNodes[i]);
									ui.cardPile.childNodes[i].remove();
									i--;
									if (list.length == 5) break;
								}
								event.list = list;
								('step 2');
								event.str = '选择一名角色若能对其使用' + get.translation(event.list[event.numx].name) + '则对其使用';
								player
									.chooseTarget(function (card, player, target) {
										return true;
									})
									.set('prompt', '决讨<br><br><div class="text" style="color: blue">' + event.str + '</div>')
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 3');
								if (result.bool) {
									var x = event.list[event.numx];
									if (event.list.length && player.canUse(x.name, result.targets[0])) {
										player.useCard(x, result.targets[0]);
									}
								} else {
									event.finish();
								}
								('step 4');
								if (--event.num > 0) {
									event.numx++;
									player.chooseBool('是否再次发动【决讨】？');
								} else {
									event.finish();
								}
								('step 5');
								if (result.bool) {
									event.goto(2);
								}
							},
						},
						fen忿si肆: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('fen忿si肆'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage();
									result.targets[0].useCard({ name: 'sha' }, player, false);
									player.useCard({ name: 'sha' }, result.targets[0], false);
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						zhu助shi势: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'recoverEnd' },
							filter(event, player) {
								if (player.group != 'wei') return false;
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
						qian潜yuan渊: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							content() {
								'step 0';
								var cards = get.cards(7);
								event.cards = cards;
								var num = player.maxHp - player.hp;
								var next = player.chooseCardButton(cards, '选择获得的牌', [1, num]).set('filterButton', function (button) {
									return true;
								});
								('step 1');
								if (result.bool) {
									player.gain(result.links);
									player.$draw(result.links);
								}
								for (var i = event.cards.length - 1; i >= 0; i--) {
									if (!result.bool || !result.links.includes(event.cards[i])) {
										ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
									}
								}
							},
						},
						//出牌阶段开始时,你可以选择一名角色对其使用牌堆的1张牌,共可至多执行7次(目标须合法若不合法跳过该次)
						jue决tao讨: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							async content(event, trigger, player) {
								//QQQ
								var num = 7;
								while (num-- > 0) {
									const result = await player
										.chooseButton(['选择一名角色对其使用牌堆的1张牌', Array.from(ui.cardPile.childNodes).slice(0, 7)])
										.set('ai', (button) => player.getUseValue(button.link))
										.forResult();
									if (result.links && result.links[0]) {
										game.cardsGotoOrdering(result.links);
										await player.chooseUseTarget(result.links[0], true, false);
									}
								}
							},
						},
						佑关: {
							audio: 'ext:名存实亡/audio:4',
							trigger: {
								global: 'phaseUseEnd',
							},
							forced: true,
							content() {
								'step 0';
								var list = ['♠️️️', '♥️️️', '♣️️️', '♦️️️', '取消'];
								player.chooseControl(list).set('prompt', get.prompt('佑关'));
								('step 1');
								switch (result.control) {
									case '♠️️️': {
										player.addTempSkill('佑关1', { player: 'phaseAfter' });
										break;
									}
									case '♥️️️': {
										player.addTempSkill('佑关2', { player: 'phaseAfter' });
										break;
									}
									case '♣️️️': {
										player.addTempSkill('佑关3', { player: 'phaseAfter' });
										break;
									}
									case '♦️️️': {
										player.addTempSkill('佑关4', { player: 'phaseAfter' });
										break;
									}
									case '取消': {
										break;
									}
								}
							},
						},
						佑关wt: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseUseEnd',
							},
							forced: true,
							content() {
								'step 0';
								var list = ['♠️️️', '♥️️️', '♣️️️', '♦️️️', '取消'];
								player.chooseControl(list).set('prompt', get.prompt('佑关wt'));
								('step 1');
								switch (result.control) {
									case '♠️️️': {
										player.addTempSkill('佑关1', { player: 'phaseAfter' });
										break;
									}
									case '♥️️️': {
										player.addTempSkill('佑关2', { player: 'phaseAfter' });
										break;
									}
									case '♣️️️': {
										player.addTempSkill('佑关3', { player: 'phaseAfter' });
										break;
									}
									case '♦️️️': {
										player.addTempSkill('佑关4', { player: 'phaseAfter' });
										break;
									}
									case '取消': {
										break;
									}
								}
							},
						},
						佑关wy: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseUseEnd',
							},
							forced: true,
							content() {
								'step 0';
								var list = ['♠️️️', '♥️️️', '♣️️️', '♦️️️', '取消'];
								player.chooseControl(list).set('prompt', get.prompt('佑关wy'));
								('step 1');
								switch (result.control) {
									case '♠️️️': {
										player.addTempSkill('佑关1', { player: 'phaseAfter' });
										break;
									}
									case '♥️️️': {
										player.addTempSkill('佑关2', { player: 'phaseAfter' });
										break;
									}
									case '♣️️️': {
										player.addTempSkill('佑关3', { player: 'phaseAfter' });
										break;
									}
									case '♦️️️': {
										player.addTempSkill('佑关4', { player: 'phaseAfter' });
										break;
									}
									case '取消': {
										break;
									}
								}
							},
						},
						佑关1: {
							mod: {
								maxHandcard(player, num) {
									var hs = player.getCards('h');
									for (var i = 0; i < hs.length; i++) {
										if (hs[i].suit == 'spade') {
											num++;
										}
									}
									return num;
								},
							},
						},
						佑关2: {
							mod: {
								maxHandcard(player, num) {
									var hs = player.getCards('h');
									for (var i = 0; i < hs.length; i++) {
										if (hs[i].suit == 'heart') {
											num++;
										}
									}
									return num;
								},
							},
						},
						佑关3: {
							mod: {
								maxHandcard(player, num) {
									var hs = player.getCards('h');
									for (var i = 0; i < hs.length; i++) {
										if (hs[i].suit == 'club') {
											num++;
										}
									}
									return num;
								},
							},
						},
						佑关4: {
							mod: {
								maxHandcard(player, num) {
									var hs = player.getCards('h');
									for (var i = 0; i < hs.length; i++) {
										if (hs[i].suit == 'diamond') {
											num++;
										}
									}
									return num;
								},
							},
						},
						摇佩: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseDiscardEnd',
							},
							content() {
								'step 0';
								player.chooseControl('令其摸牌你执行另一项', '令其回复体力你执行另一项');
								('step 1');
								if (result.control == '令其摸牌你执行另一项') {
									trigger.player.draw(2);
									player.recover();
								} else {
									player.draw(2);
									trigger.player.recover();
								}
							},
						},
						鸣鸾: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'recoverEnd',
							},
							content() {
								player.chooseToDiscard('he', true);
								player.draw(trigger.player.countCards('he'));
							},
						},
						三顾: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'phaseUseBegin' },
							forced: true,
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
									const target = trigger.player.next;
									const att = get.attitude(player, target);
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
									event.goto(2);
								} else if (event.isOnline()) {
									event.player.send(chooseButton, true, event.player, event.cards);
									event.player.wait();
									game.pause();
								} else {
									event.switchToAuto();
									event.goto(2);
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
								('step 2');
								var scards = get.cards(3);
								player.showCards(scards);
								event.scards = scards;
								('step 3');
								for (var i = 0; i < event.scards.length; i++) {
									trigger.player.gain(game.createCard(event.scards[i]), 'gain2');
								}
								for (var i = event.scards.length - 1; i >= 0; i--) {
									ui.cardPile.insertBefore(event.scards[i], ui.cardPile.firstChild);
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						轶祖: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { target: 'useCardToBegin' },
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return event.card.name == 'sha' || event.card.name == 'juedou';
							},
							content() {
								player.gainMaxHp();
								player.hp = player.maxHp;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha' || card.name == 'juedou') return 'zeroplayertarget';
									},
								},
							},
						},
						晋冕: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							content() {
								if (trigger.name == 'phase') {
									player.useCard(game.createCard('xuwangzhimian虚妄之冕', 'spade', 6), player);
									player.storage.忍戒qkss++;
									game.log(player, '获得一个<忍戒>标记');
									player.draw(2);
								}
							},
						},
						忍戒qkss: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							group: '忍戒qkss2',
							mark: true,
							filter(event, player) {
								return event.num > 0;
							},
							init(player) {
								player.storage.忍戒qkss = 0;
								game.addVideo('storage', player, ['忍戒qkss', player.storage.忍戒qkss]);
							},
							content() {
								player.storage.忍戒qkss += 2 * trigger.num;
								game.addVideo('storage', player, ['忍戒qkss', player.storage.忍戒qkss]);
							},
							intro: {
								content: 'mark',
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
										if (get.tag(card, 'damage')) {
											if (target.hp == target.maxHp) {
												if (!target.hasSkill('极略qkss')) {
													return [0, 1];
												}
												return [0.7, 1];
											}
											return 0.7;
										}
									},
									player(card, player) {
										if (_status.currentPhase != player) return;
										if (_status.event.name != 'chooseToUse' || _status.event.player != player) return;
										if (get.type(card) == 'basic') return;
										if (get.tag(card, 'gain')) return;
										if (get.value(card, player, 'raw') >= 7) return;
										if (player.hp <= 2) return;
										if (!player.hasSkill('极略qkss') || player.storage.忍戒qkss == 0) {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						忍戒qkss2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseDiscardEnd' },
							forced: true,
							filter(event, player) {
								return event.cards && event.cards.length;
							},
							content() {
								player.storage.忍戒qkss += 2 * trigger.cards.length;
								game.addVideo('storage', player, ['忍戒qkss', player.storage.忍戒qkss]);
							},
						},
						拜印qkss: {
							trigger: { player: 'phaseBegin' },
							forced: true,
							audio: 'ext:名存实亡/audio:2',
							filter(event, player) {
								return player.storage.忍戒qkss >= 4;
							},
							content() {
								player.gainMaxHp();
								player.recover();
								player.addSkill('极略qkss');
							},
						},
						极略qkss: {
							group: ['极略qkss_guicai', '极略qkss_fangzhu', '极略qkss_wansha', '极略qkss_zhiheng', '极略qkss_jizhi'],
						},
						极略qkss_guicai: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'judge' },
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 0 && player.storage.忍戒qkss > 0;
							},
							content() {
								'step 0';
								player.chooseCard('是否弃置一枚<忍>,并发动【鬼才】？').ai = function (card) {
									var trigger = _status.event.parent._trigger;
									var player = _status.event.player;
									var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
									var attitude = get.attitude(player, trigger.player);
									if (attitude == 0 || result == 0) return 0;
									if (attitude > 0) {
										return result - get.value(card) / 2;
									} else {
										return -result - get.value(card) / 2;
									}
								};
								('step 1');
								if (result.bool) {
									player.respond(result.cards, 'highlight');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.storage.忍戒qkss--;
									if (trigger.player.judging[0].clone) {
										trigger.player.judging[0].clone.delete();
										game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
									}
									trigger.player.judging[0].discard();
									trigger.player.judging[0] = result.cards[0];
									trigger.position.appendChild(result.cards[0]);
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						极略qkss_fangzhu: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							_priority: -1,
							filter(event, player) {
								return player.storage.忍戒qkss > 0;
							},
							content() {
								'step 0';
								player.chooseTarget('是否弃置一枚<忍>,并发动【放逐】？', function (card, player, target) {
									return player != target;
								}).ai = function (target) {
									if (target.hasSkillTag('noturn')) return 0;
									if (target.isTurnedOver()) {
										return get.attitude(player, target) - 1;
									} else {
										if (player.maxHp - player.hp == 1) {
											return -get.attitude(player, target) - 1;
										}
									}
									return 0;
								};
								('step 1');
								if (result.bool) {
									player.storage.忍戒qkss--;
									result.targets[0].loseHp(player.maxHp - player.hp);
									result.targets[0].turnOver();
								}
							},
						},
						极略qkss_wansha: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.storage.忍戒qkss > 0;
							},
							content() {
								player.storage.忍戒qkss--;
								player.addTempSkill('w完杀sssm');
							},
						},
						w完杀sssm: {
							audio: 'ext:名存实亡/audio:2',
							global: 'w完杀sssm2',
							trigger: { global: 'dying' },
							_priority: 15,
							forced: true,
							filter(event, player) {
								return _status.currentPhase == player && event.player != player;
							},
							content() { },
						},
						w完杀sssm2: {
							mod: {
								cardSavable(card, player) {
									if (!_status.currentPhase) return;
									if (_status.currentPhase.hasSkill('w完杀sssm') && _status.currentPhase != player) {
										if (card.name == 'tao' && _status.event.dying != player) return false;
									}
								},
							},
						},
						极略qkss_zhiheng: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.storage.忍戒qkss > 0;
							},
							position: 'he',
							filterCard: true,
							selectCard: [1, Infinity],
							prompt: '弃置一枚<忍>,弃置任意张牌并摸1+等量的牌',
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								player.storage.忍戒qkss--;
								player.draw(1 + cards.length);
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										var num = 0;
										var cards = player.getCards('he');
										for (var i = 0; i < cards.length; i++) {
											if (get.value(cards[i]) < 6) {
												num++;
											}
										}
										if (cards.length > 2) return 1;
										if (cards.length == 2 && player.storage.极略qkss > 1);
										return 0;
									},
								},
								threaten: 1.5,
							},
						},
						极略qkss_jizhi: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'useCard' },
							filter(event, player) {
								return get.type(event.card) == 'trick' && event.cards[0] && event.cards[0] == event.card && player.storage.忍戒qkss > 0;
							},
							content() {
								player.storage.忍戒qkss--;
								player.draw();
							},
							ai: {
								threaten: 1.4,
							},
						},
						连破qkss: {
							audio: 'ext:名存实亡/audio:2',
							round: 3, //QQQ
							trigger: {
								source: ['dieAfter', 'dying'],
							},
							forced: true,
							filter(event, player) {
								return !player.hasSkill('连破qkss2');
							},
							content() {
								player.phase('nodelay');
							},
						},
						xuwangzhimian虚妄之冕: {
							trigger: { player: 'phaseDrawBegin' },
							forced: true,
							content() {
								trigger.num += 4;
								player.storage.忍戒qkss += 4;
								game.log(player, '获得一个<忍戒>标记');
							},
							ai: {
								threaten: 1.3,
							},
						},
						碧落玄鹄三顾: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'phaseUseBegin' },
							forced: true,
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
									const target = trigger.player.next;
									const att = get.attitude(player, target);
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
									event.goto(2);
								} else if (event.isOnline()) {
									event.player.send(chooseButton, true, event.player, event.cards);
									event.player.wait();
									game.pause();
								} else {
									event.switchToAuto();
									event.goto(2);
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
								('step 2');
								var scards = get.cards(3);
								player.showCards(scards);
								event.scards = scards;
								('step 3');
								for (var i = 0; i < event.scards.length; i++) {
									trigger.player.gain(game.createCard(event.scards[i]), 'gain2');
									player.gain(game.createCard(event.scards[i]), 'gain2');
								}
								for (var i = event.scards.length - 1; i >= 0; i--) {
									ui.cardPile.insertBefore(event.scards[i], ui.cardPile.firstChild);
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
						碧落玄鹄轶祖: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { target: 'useCardToBegin' },
							check(event, player) {
								return get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return event.card.name == 'sha' || event.card.name == 'juedou';
							},
							content() {
								player.gainMaxHp(2);
								player.hp = player.maxHp;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha' || card.name == 'juedou') return 'zeroplayertarget';
									},
								},
							},
						},
						观星妙算神谟: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseBegin',
								global: 'drawBefore',
							},
							usable: 1, //QQQ
							forced: true,
							content() {
								'step 0';
								if (player.isUnderControl()) {
									game.modeSwapPlayer(player);
								}
								var cards = get.cards(5);
								event.cards = cards;
								var switchToAuto = function () {
									_status.imchoosing = false;
									if (event.dialog) event.dialog.close();
									if (event.control) event.control.close();
									const target = trigger.player;
									const att = get.attitude(player, target);
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
						挑衅妙算神谟: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('挑衅妙算神谟'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(2, result.targets[0], 'he', true);
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								player.chooseTarget(get.prompt('挑衅妙算神谟'), function (card, player, target) {
									return true;
								});
								('step 3');
								if (result.bool) {
									event.target2 = result.targets[0];
									player.line2([event.target2, event.target]);
								} else event.finish();
								('step 4');
								event.target2.useCard({ name: 'sha' }, event.target, false);
							},
						},
						志继妙算神谟: {
							audio: 'ext:名存实亡/audio:2',
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
						膂lv力li: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'damageEnd',
								source: 'damageEnd',
							},
							content() {
								var num = player.hp - player.countCards('h');
								if (num > 0) player.draw(num);
								else player.recover(-num);
							},
						},
						仇chou决jue: {
							derivation: ['背bei水shui', '清qing剿jiao'],
							trigger: {
								global: 'phaseAfter',
							},
							audio: 'ext:名存实亡/audio:2',
							forced: true,
							filter(event, player) {
								if (player.storage.仇chou决jue) return false;
								return Math.abs(player.hp - player.countCards('h')) >= 3;
							},
							content() {
								player.gainMaxHp();
								player.addSkill('背bei水shui');
							},
						},
						背bei水shui: {
							trigger: {
								player: 'phaseBefore',
							},
							audio: 'ext:名存实亡/audio:2',
							forced: true,
							filter(event, player) {
								return Math.min(player.hp, player.countCards('h')) < 2;
							},
							content() {
								player.gainMaxHp();
								player.addSkill('清qing剿jiao');
							},
						},
						清qing剿jiao: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return player.countCards('h') && (ui.cardPile.hasChildNodes() || ui.discardPile.hasChildNodes());
							},
							content() {
								'step 0';
								event.disnum = player.getCards('h').length;
								player.discard(player.getCards('h'));
								('step 1');
								player
									.chooseTarget(get.prompt('清qing剿jiao'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									result.targets[0].chooseToDiscard('h', true, event.disnum);
								}
								('step 3');
								var list = [];
								var typelist = [];
								var getType = function (card) {
									var sub = get.subtype(card);
									if (sub) return sub;
									return card.name;
								};
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									var typex = getType(node);
									if (!typelist.includes(typex)) {
										list.push(node);
										typelist.push(typex);
										if (list.length >= 8) break;
									}
								}
								if (list.length < 8) {
									for (var i = 0; i < ui.discardPile.childElementCount; i++) {
										var node = ui.discardPile.childNodes[i];
										var typex = getType(node);
										if (!typelist.includes(typex)) {
											list.push(node);
											typelist.push(typex);
											if (list.length >= 8) break;
										}
									}
								}
								player.gain(list, 'gain2');
							},
						},
						急筹: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							content() {
								var jnyou = ['taoyuan', 'wugu', 'wuzhong', 'lianjunshengyan', 'yuanjiao'].randomGet();
								var jndi = ['juedou', 'tiesuo', 'guohe', 'shunshou', 'lulitongxin', 'diaohulishan'].randomGet();
								if (trigger.player.isFriendsOf(player)) player.useCard({ name: jnyou }, trigger.player);
								if (trigger.player.isEnemiesOf(player)) player.useCard({ name: jndi }, trigger.player);
							},
						},
						机谕: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'damageEnd' },
							content() {
								var gaincard = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (get.type(ui.cardPile.childNodes[i]) == 'trick') {
										gaincard.push(ui.cardPile.childNodes[i].name);
									}
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (get.type(ui.discardPile.childNodes[i]) == 'trick') {
										gaincard.push(ui.discardPile.childNodes[i].name);
									}
								}
								gaincard = [...new Set(gaincard)];
								player.draw(gaincard.length);
							},
						},
						lieduanhuodao烈锻火刀: {
							audio: 'ext:名存实亡/audio:2',
							usable: 2,
							nobracket: true,
							trigger: { player: 'shaBegin' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('lieduanhuodao烈锻火刀'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									trigger.num += [1, 3].randomGet();
									trigger.targets.push(result.targets[0]);
									result.targets[0].damage([1, 3].randomGet(), ['fire', 'thunder'].randomGet());
									result.targets[0].loseHp([1, 3].randomGet());
									player.recover([1, 3].randomGet());
									player.draw([1, 3].randomGet());
								}
							},
						},
						烈铸: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].useCard(game.createCard('lieduanhuodao烈锻火刀', 'heart', 10), list[i]);
									}
								}
								player.draw(2);
								player.gain(game.createCard('sha'));
								player.$draw();
							},
						},
						tiejiliguduo: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'shaEnd' },
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 5;
								},
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('tiejiliguduo'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage([1, 5].randomGet());
								}
							},
						},
						蒺藜蛮王奋击: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: ['useCardBegin', 'respondBegin'],
							},
							forced: true,
							usable: 5,
							content() {
								'step 0';
								var n = player.getAttackRange();
								var num = 5 + (n * (n + 1)) / 2;
								player.draw(num);
								('step 1');
								player
									.chooseTarget(get.prompt('蒺藜蛮王奋击'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									result.targets[0].damage();
								}
							},
							ai: {
								threaten: 1.3,
							},
						},
						藜击: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							content() {
								if (trigger.name == 'phase') {
									player.useCard(game.createCard('tiejiliguduo', 'spade', 9), player);
									player.draw(2);
								}
							},
						},
						囚避: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseUseBegin' },
							content() {
								player.addTempSkill('囚避2');
								player.addTempSkill('囚避3', { player: 'phaseBegin' });
								if (player.storage.封尉) player.draw(Math.min(player.maxHp, 20));
							},
						},
						囚避2: {
							mod: {
								playerEnabled(card, player, target) {
									if (player != target) return false;
								},
							},
						},
						囚避3: {
							mod: {
								targetEnabled(card, player, target, now) {
									if (card.name == 'sha' || card.name == 'juedou') return false;
								},
							},
						},
						封尉: {
							group: '封尉2',
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseDiscardEnd',
							},
							filter(event, player) {
								return event.cards && event.cards.length;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('封尉'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < trigger.cards.length; i++) {
										player.useCard({ name: 'sha' }, result.targets[0], false);
									}
								}
							},
						},
						封尉2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'recoverAfter',
							},
							filter: (event, player) => event.player.hp == 1,
							forced: true,
							content() {
								player.gainMaxHp();
								player.recover();
								player.storage.封尉 = true;
							},
						},
						昊宠: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'useCardEnd' },
							filter(event, player) {
								return player.maxHp != player.countCards('h');
							},
							content() {
								'step 0';
								var num = player.maxHp - player.countCards('h');
								if (num > 0) {
									player.draw(num);
									player.gainMaxHp();
									player.recover();
								} else if (num < 0) {
									player
										.chooseTarget(get.prompt('昊宠'), function (card, player, target) {
											return true;
										})
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								}
								event.num = num;
								('step 1');
								if (result.bool && result.targets) {
									result.targets[0].chooseToDiscard('he', true, 2);
								}
							},
						},
						矜谨: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'damageEnd', source: 'damageEnd' },
							usable: 2,
							filter(event, player) {
								return event.num && event.source && event.player && event.player.isAlive() && event.source.isAlive() && event.source != event.player;
							},
							logTarget(event, player) {
								if (event.player == player) return event.source;
								return event.player;
							},
							content() {
								var X = Math.max(1, Math.abs(player.hp - player.countCards('h')));
								var mp = trigger.source == player ? trigger.player : trigger.source;
								mp.chooseToDiscard('he', true, X);
								player.draw(X);
							},
							ai: {
								maixie: true,
								maixie_hp: true,
							},
						},
						早岐: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('早岐'), function (card, player, target) {
										return target.countCards('he');
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(result.targets[0], 'he', true);
									event.target = result.targets[0];
								}
								('step 2');
								if (result.bool && result.cards) {
									var color = get.color(result.cards[0]);
									if (color == 'black') {
										for (var i = 0; i < 3; i++) {
											player.useCard({ name: 'shunshou' }, event.target);
										}
									}
									if (color == 'red') {
										for (var i = 0; i < 3; i++) {
											player.useCard({ name: 'toulianghuanzhu' }, event.target);
										}
									}
								}
							},
						},
						潜伺: {
							audio: 'ext:名存实亡/audio:2',
							usable: 2,
							trigger: { global: 'useCardEnd' },
							content() {
								if (!get.tag(current, 'damage')) {
									var listjnname = [];
									for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
										var current = ui.cardPile.childNodes[i];
										if (get.tag(current, 'damage')) listjnname.push(current.name);
									}
									for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
										var current = ui.discardPile.childNodes[i];
										if (get.tag(current, 'damage')) listjnname.push(current.name);
									}
									player.gain(game.createCard(listjnname.randomGet()));
									player.$draw();
								} else {
									var listjnname1 = [];
									for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
										var current = ui.cardPile.childNodes[i];
										if (!get.tag(current, 'damage')) listjnname1.push(current.name);
									}
									for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
										var current = ui.discardPile.childNodes[i];
										if (!get.tag(current, 'damage')) listjnname1.push(current.name);
									}
									player.gain(game.createCard(listjnname1.randomGet()));
									player.$draw();
								}
							},
						},
						z铸r刃: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							content() {
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								if (list.length) {
									player.line(list, 'green');
									for (var i = 0; i < list.length; i++) {
										list[i].useCard(game.createCard(['huocuidao', 'yanleicuidao焰雷淬刀'].randomGet(), 'heart', 8), list[i]);
									}
								}
								player.draw(2);
							},
						},
						t天j匠: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'equipBegin',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('e', { subtype: 'equip1' }) && get.subtype(event.card) == 'equip1';
							},
							async content(event, trigger, player) {
								trigger.cancel();
								player.draw(2);
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
								const { targets } = await player
									.chooseTarget(get.prompt('t天j匠'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									})
									.forResult();
								if (targets.length) {
									player.useCard({ name: 'sha' }, targets[0], false);
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
						yanleicuidao焰雷淬刀: {
							audio: 'ext:名存实亡/audio:2',
							usable: 4,
							trigger: { player: 'shaBegin' },
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								'step 0';
								game.JPG4('yanleicuidaotx', 2000);
								player.draw(4);
								player.recover(2);
								trigger.num += 2;
								player
									.chooseTarget(get.prompt('yanleicuidao焰雷淬刀'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(2, result.targets[0], 'he', true);
									player.useCard({ name: 'sha', nature: 'thunder' }, result.targets[0], false);
									result.targets[0].damage(5, 'thunder');
								}
							},
						},
						huocuidao: {
							audio: 'ext:名存实亡/audio:1',
							usable: 2,
							trigger: { player: 'shaBegin' },
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								'step 0';
								player.draw(2);
								player.recover(4);
								trigger.num += 4;
								player
									.chooseTarget(get.prompt('huocuidao'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard(4, result.targets[0], 'he', true);
									player.useCard({ name: 'sha', nature: 'fire' }, result.targets[0], false);
									result.targets[0].damage(5, 'fire');
								}
							},
						},
						凶镬镬惩俘兵: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'phaseBegin' },
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								game.playAudio('../extension/名存实亡/audio/xurong镬惩俘兵音效.mp3');
								game.mp45('xurong镬惩俘兵攻击');
								player.gainPlayerCard(trigger.player, 'h', true);
								player.gainPlayerCard(trigger.player, 'e', true);
								trigger.player.damage('fire');
								trigger.player.addTempSkill('凶镬镬惩俘兵1');
								trigger.player.loseHp();
								trigger.player.addTempSkill('凶镬镬惩俘兵2');
							},
						},
						凶镬镬惩俘兵1: {
							mod: {
								playerEnabled(card, player, target) {
									if (card.name == 'sha') return false;
								},
							},
							mark: true,
							marktext: '禁',
							intro: {
								content: '本回合内不能对<徐荣>使用<杀>',
							},
						},
						凶镬镬惩俘兵2: {
							mod: {
								maxHandcard(player, num) {
									return num - 2;
								},
							},
							marktext: '减',
							mark: true,
							intro: {
								content: '本回合内手牌上限-2',
							},
						},
						杀绝镬惩俘兵: {
							group: '杀绝镬惩俘兵2',
							audio: 'ext:名存实亡/audio:2',
							forced: true,
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.player.isEnemiesOf(player);
							},
							content() {
								game.playAudio('../extension/名存实亡/audio/xurong镬惩俘兵音效.mp3');
								game.mp45('xurong镬惩俘兵出场');
								trigger.num++;
							},
						},
						杀绝镬惩俘兵2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								global: 'dying',
							},
							forced: true,
							_priority: 7,
							content() {
								player.gain(trigger.parent.cards, 'gain2');
							},
						},
						qingtonghuo青铜镬: {
							audio: 'ext:名存实亡/audio:2',
							nobracket: true,
							trigger: { player: 'phaseUseBegin' },
							filter(event, player) {
								return player.countCards('h', (card) => {
									return get.tag(card, 'damage');
								});
							},
							content() {
								'step 0';
								game.playAudio('../extension/名存实亡/audio/xurong镬惩俘兵音效.mp3');
								game.mp45('xurong镬惩俘兵特殊');
								var card = player
									.getCards('h', (card) => {
										return get.tag(card, 'damage');
									})
									.randomGet();
								event.card = card;
								player
									.chooseTarget(get.prompt('qingtonghuo青铜镬'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage('fire');
									player.useCard(game.createCard(event.card.name), result.targets[0], false);
									game.playAudio('../extension/名存实亡/audio/xurong镬惩俘兵音效.mp3');
									game.mp45('xurong镬惩俘兵待机');
								}
							},
						},
						镬惩: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							content() {
								player.useCard(game.createCard('qingtonghuo青铜镬', 'spade', 2), player);
								player.draw(2);
							},
						},
						密诏困龙欲出: {
							group: '密诏困龙欲出2',
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 2,
							content() {
								'step 0';
								game.playAudio('../extension/名存实亡/audio/liuxie困龙欲出音效.mp3');
								game.mp45('liuxie困龙欲出攻击');
								('step 1');
								player
									.chooseTarget(get.prompt('密诏困龙欲出'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									var cards = player.getCards('h');
									result.targets[0].gain(cards);
									cards.map((item) => {
										item.mizhaoCard = true;
									});
									var num = player.getCards('h').length;
									player.$give(num, result.targets[0]);
									result.targets[0].draw(num);
									event.t = result.targets[0];
								} else event.finish();
								('step 3');
								player
									.chooseTarget(get.prompt('密诏困龙欲出'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 4');
								if (result.bool) {
									result.targets[0].chooseToDiscard('he', true);
									result.targets[0].chooseToDiscard('he', true, (card) => {
										return get.color(card) == 'red';
									});
									event.t.useCard({ name: 'sha' }, result.targets[0], false);
								}
								('step 5');
								game.mp45('liuxie困龙欲出待机');
							},
						},
						密诏困龙欲出2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'useCardEnd' },
							filter(event, player) {
								if (event.cards) {
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											return i.mizhaoCard;
										}
								}
								return false;
							},
							content() {
								'step 0';
								game.playAudio('../extension/名存实亡/audio/liuxie困龙欲出音效.mp3');
								game.mp45('liuxie困龙欲出出场');
								('step 1');
								switch ([0, 3].randomGet()) {
									case 0:
										{
											[player, trigger.player].map((item) => {
												item.recover();
											});
										}
										break;
									case 1:
										{
											[player, trigger.player].map((item) => {
												item.draw(2);
											});
										}
										break;
									case 2:
										{
											[player, trigger.player].map((item) => {
												item.gain(game.createCard('shan'));
												item.gain(game.createCard('shan'));
												item.$draw(2);
											});
										}
										break;
									default: {
										[player, trigger.player].map((item) => {
											item.gain(game.createCard('jinchan'));
											item.gain(game.createCard('jinchan'));
											item.$draw(2);
										});
									}
								}
							},
						},
						天命困龙欲出: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { target: 'shaBegin' },
							content() {
								'step 0';
								game.playAudio('../extension/名存实亡/audio/liuxie困龙欲出音效.mp3');
								game.mp45('liuxie困龙欲出特殊');
								('step 1');
								player.chooseToDiscard(2, true, 'he');
								player.draw(4);
								('step 2');
								player
									.chooseTarget(get.prompt('天命困龙欲出'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 3');
								if (result.bool) {
									result.targets[0].chooseToDiscard(2, true, 'he');
									result.targets[0].draw(4);
								}
							},
						},
						//你于回合外失去牌结束后,你可以选择一项: 1,获得一张你选择的基本牌(花色点数为随机),对一名角色造成一点伤害;
						//2,对一名角色造成一点伤害,令其弃置你选择的基本牌名的所有手牌,你摸等量+1张牌
						哲妇gh: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'loseAfter' },
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								return true;
							},
							content() {
								//QQQ
								'step 0';
								player
									.chooseControl('选项一', '选项二')
									.set('prompt', '哲妇gh')
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.control == '选项一') {
									player.chooseControl('杀', '闪', '桃', '酒');
									event.goto(2);
								} else {
									player.chooseControl('杀', '闪', '桃', '酒');
									event.goto(4);
								}
								('step 2');
								var name;
								switch (result.control) {
									case '杀':
										name = 'sha';
										break;
									case '闪':
										name = 'shan';
										break;
									case '桃':
										name = 'tao';
										break;
									case '酒':
										name = 'jiu';
										break;
								}
								event.name = name;
								player.gain(game.createCard(name));
								player.$draw();
								player
									.chooseTarget(get.prompt('哲妇gh'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 3');
								if (result.bool) {
									result.targets[0].damage();
								}
								event.finish();
								('step 4');
								var name;
								switch (result.control) {
									case '杀':
										name = 'sha';
										break;
									case '闪':
										name = 'shan';
										break;
									case '桃':
										name = 'tao';
										break;
									case '酒':
										name = 'jiu';
										break;
								}
								event.name = name;
								player
									.chooseTarget(get.prompt('哲妇gh'), 1, function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 5');
								if (result.bool) {
									result.targets[0].damage();
									var card = result.targets[0].getCards('h', function (card) {
										return card.name == event.name;
									});
									const num = card.length;
									result.targets[0].discard(card);
									player.draw(num);
								}
							},
						},
						遗毒gh: {
							usable: 2,
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								if (!['basic', 'trick'].includes(get.type(event.card))) return false;
								if (get.tag(event.card, 'damage')) return true;
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('遗毒gh'), function (card, player, target) {
										return trigger.targets.includes(target);
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.X = result.targets[0];
									player
										.chooseControl('基本牌', '锦囊牌')
										.set('prompt', '遗毒<br><br><div class="text" style="color: #800080; text-align:center">令其弃置全部基本牌或锦囊牌</div>')
										.set('ai', function (target) {
											return -get.attitude(player, target);
										});
								} else event.finish();
								('step 2');
								if (result.control == '基本牌') {
									var card = event.X.getCards('h', function (card) {
										return get.type(card) == 'basic';
									});
									event.X.discard(card);
								} else {
									var card = event.X.getCards('h', function (card) {
										return get.type(card, 'trick') == 'trick';
									});
									event.X.discard(card);
								}
								player.draw(3);
							},
							ai: {
								threaten: 1.4,
							},
						},
						蒺藜骁勇金衔: {
							audio: 'ext:名存实亡/audio:2',
							nobracket: true,
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + player.getAttackRange();
								},
							},
							trigger: {
								player: ['useCardBegin', 'respondBegin'],
							},
							//frequent:true,
							usable: 5,
							content() {
								'step 0';
								game.JPG4('shamoke骁勇金衔dhtx', 2000);
								var n = player.getAttackRange();
								var num = 5 + n;
								player.draw(num);
								('step 1');
								player
									.chooseTarget(get.prompt('蒺藜蛮王奋击'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									result.targets[0].damage();
								}
							},
							ai: {
								threaten: 1.3,
							},
						},
						却敌: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'useCardToBegin' },
							filter(event, player) {
								return event.card.name == 'sha' || event.card.name == 'juedou';
							},
							usable: 2,
							content() {
								'step 0';
								game.mp45('wenyang势若万钧Sptx');
								('step 1');
								player.linergbl(trigger.target, { color: [169 / 3, 153 / 3, 251 / 3], brightness: 3 });
								('step 2');
								player.gainPlayerCard(trigger.target, 2, 'he', true);
								trigger.target.chooseToDiscard('he', true, 2, '<span style="color: #a999fb;filter:brightness(3);">请弃置两张基本牌</span>');
								trigger.target.loseMaxHp();
								player.addTempSkill('却敌2', { source: 'damageAfter' });
							},
						},
						却敌2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { source: 'damageBegin' },
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						椎锋: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'phaseUse',
							usable: 4,
							content() {
								'step 0';
								game.mp45('攻击wenyang势若万钧');
								('step 1');
								player
									.chooseTarget(get.prompt('椎锋'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									player.linergbl(result.targets[0], { color: [169 / 3, 153 / 3, 251 / 3], brightness: 3 });
									result.targets[0].loseHp();
									player.useCard({ name: 'juedou' }, result.targets[0]);
								}
							},
						},
						冲坚: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseEnd', 'dyingBegin'] },
							content() {
								'step 0';
								game.mp45('待机wenyang势若万钧');
								('step 1');
								var gainCards = [];
								for (var i = 0; i < player.countCards('he', (card) => get.type(card) == 'equip'); i++) {
									gainCards.push(game.createCard('jiu'));
								}
								player.gain(gainCards, 'draw');
								player
									.chooseTarget(get.prompt('冲坚'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									player.linergbl(result.targets[0], { color: [51 / 3, 79 / 3, 127 / 3], brightness: 3 });
									player.gainPlayerCard(
										result.targets[0],
										'he',
										player.countCards('he', (card) => get.type(card) == 'equip'),
										true,
									);
									player.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
						},
						仇绝: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'dyingBegin' },
							content() {
								game.mp45('出场wenyang势若万钧');
								player.draw(2);
								player.getStat('skill').椎锋 = 0;
							},
						},
						钧决: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.mp45('特殊wenyang势若万钧');
								ui.arena.setNumber(game.players.length + 3);
								function addFellows(num, namesArr, identityObj = { content: '忠臣', color: '#000000' }, spacing = 120) {
									for (var i = 0; i < num; i++) {
										const fellow = game.addFellow(num, namesArr[i]);
										fellow.side = player.side;
										fellow.identity = player.identity !== 'zhu' ? player.identity : 'zhong';
										if (lib.config.mode === 'guozhan') fellow._group = player.identity;
										fellow.setIdentity(`<font color="${identityObj.color}">${identityObj.content}</font>`);
										fellow.draw(fellow.maxHp);
									}
								}
								addFellows(3, ['wendizhongzhuangbubing', 'wendizhongzhuangbubing', 'wendizhongzhuangbubing'], { content: '钧锐', color: '#3e5790' }, 240);
								player.removeSkill('钧决');
							},
						},
						文鸯不臣: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseBegin',
								global: 'dyingBegin',
							},
							usable: 1, //QQQ
							content() {
								'step 0';
								game.mp45('特殊wenyang势若万钧');
								('step 1');
								player.chooseTarget('选择一名魏或吴势力角色,你与其势力相同', function (card, player, target) {
									return target.group == 'wei' || (target.group == 'wu' && target != player);
								});
								('step 2');
								if (result.bool) {
									var pl = result.targets[0];
									player.storage.ll = pl;
									pl.markSkill('文鸯不臣');
									if (player.identity != 'zhu') player.identity = pl.identity;
									player.setIdentity(pl.identity);
									player.node.identity.dataset.color = pl.identity;
									player.setIdentity('<font class="fontbg">魏</font><font class="fontgb">吴</font>');
									if (lib.config.mode == 'guozhan') {
										player.identity = player.storage.ll.identity;
										player.setIdentity();
										player._group = pl.identity;
										player.identityShown = true;
										lib.character[player.name][1] = pl.identity;
										player.setIdentity('<font class="fontbg">魏</font><font class="fontgb">吴</font>');
									}
								}
							},
							marktext: '臣',
							intro: {
								content: '已对你臣服',
							},
							group: '文鸯不臣2',
						},
						文鸯不臣2: {
							trigger: { player: 'phaseBefore' },
							forced: true,
							popup: false,
							silent: true,
							content() {
								for (var i = 0; i < game.players.length; i++) {
									delete game.players[i].storage.ll;
									game.players[i].unmarkSkill('文鸯不臣');
								}
								player.unmarkSkill('文鸯不臣');
							},
						},
						成章: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								game.JPG4('caozhi七步成诗dhtx', 2500);
								lib.init.css(`extension/名存实亡/`, '汉仪行楷');
								const text = '煮豆燃豆萁豆在釜中泣本是同根生相煎何太急煮豆持作羹漉菽以为汁萁在釜下燃豆在釜中泣本自同根生相煎何太急';
								const words = text.split('');
								words.map((word) => {
									var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
									var str = `<span style="color:${randomColor}" class="shiyonghyxk">${word}</span>`;
									return str;
								});
								player.chooseButton(['成章:是否选择一个文字？<div class="text center shiyonghyxk">你可选择七步诗中的一个文字,随机获得1～7张首字母与该文字相同牌名的牌</div>', [words, 'vcard']], 1);
								('step 1');
								if (result.bool) {
									var szm = get.pinyin(result.links[0][2], { pattern: 'first', toneType: 'none' }).slice(0)[0]; //QQQ
									game.log(result.links[0][2]);
									game.log(szm);
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										if (get.pinyin(get.translation(lib.inpile[i]), { pattern: 'first', toneType: 'none' }).slice(0)[0] == szm) list.push(lib.inpile[i]);
									}
									game.log(list);
									if (list.length) {
										var gainCards = [];
										for (var i = 0; i < [1, 7].randomGet(); i++) {
											gainCards.push(game.createCard(list.randomGet()));
										}
										player.gain(gainCards, 'draw');
									} else player.draw([1, 7].randomGet());
								}
							},
						},
						czre落英: {
							gainable: true,
							group: ['czre落英1', 'czre落英2'],
						},
						czre落英1: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'discardAfter' },
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.suit == 'club' && get.position(i) == 'd') {
											return true;
										}
									}
								return false;
							},
							frequent: 'check',
							check(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.suit == 'club' && get.position(i) == 'd') {
											if (i.name == 'du') return false;
										}
									}
								return true;
							},
							content() {
								'step 0';
								if (trigger.delay == false) game.delay();
								('step 1');
								var cards = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].suit == 'club' && get.position(trigger.cards[i]) == 'd') {
										cards.push(trigger.cards[i]);
									}
								}
								if (cards.length) {
									player.gain(cards, 'log');
									player.$gain2(cards);
									player.draw(cards.length);
								}
							},
						},
						czre落英2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'judgeAfter' },
							frequent: 'check',
							check(event, player) {
								return event.result.card.name != 'du';
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (event.result.card.parentNode.id != 'discardPile') return false;
								return event.result.card.suit == 'club';
							},
							content() {
								player.gain(trigger.result.card, 'log');
								player.$gain2(trigger.result.card);
								player.draw();
							},
						},
						czre酒诗: {
							group: ['czre酒诗1', 'czre酒诗2', 'czre酒诗3'],
						},
						czre酒诗1: {
							audio: 'ext:名存实亡/audio:2',
							enable: 'chooseToUse',
							filter(event, player) {
								if (player.classList.contains('turnedover')) return false;
								if (event.parent.name == 'phaseUse') {
									return lib.filter.filterCard({ name: 'jiu' }, player, event);
								}
								if (event.type != 'dying') return false;
								if (player != event.dying) return false;
								return true;
							},
							content() {
								if (_status.event.getParent(2).type == 'dying') {
									event.dying = player;
								}
								player.turnOver();
								player.useCard({ name: 'jiu' }, player);
							},
							ai: {
								save: true,
								skillTagFilter(player) {
									return player.hp <= 0 && !player.isTurnedOver();
								},
								order: 5,
								result: {
									player(player) {
										if (_status.event.parent.name == 'phaseUse') {
											if (player.countCards('h', 'jiu') > 0) return 0;
											if (player.getEquip('zhuge') && player.countCards('h', 'sha') > 1) return 0;
											if (!player.countCards('h', 'sha')) return 0;
											var targets = [];
											var target;
											var players = game.filterPlayer();
											for (var i = 0; i < players.length; i++) {
												if (get.attitude(player, players[i]) < 0) {
													if (player.canUse('sha', players[i], true, true)) {
														targets.push(players[i]);
													}
												}
											}
											if (targets.length) {
												target = targets[0];
											} else {
												return 0;
											}
											var num = get.effect(target, { name: 'sha' }, player, player);
											for (var i = 1; i < targets.length; i++) {
												var num2 = get.effect(targets[i], { name: 'sha' }, player, player);
												if (num2 > num) {
													target = targets[i];
													num = num2;
												}
											}
											if (num <= 0) return 0;
											var e2 = target.getEquip(2);
											if (e2) {
												if (e2.name == 'tengjia') {
													if (!player.countCards('h', { name: 'sha', nature: 'fire' }) && !player.getEquip('zhuque')) return 0;
												}
												if (e2.name == 'renwang') {
													if (!player.countCards('h', { name: 'sha', color: 'red' })) return 0;
												}
												if (e2.name == 'baiyin') return 0;
											}
											if (player.getEquip('guanshi') && player.countCards('he') > 2) return 1;
											return target.countCards('h') > 3 ? 0 : 1;
										}
										if (player == _status.event.dying || player.isTurnedOver()) return 3;
									},
								},
								effect: {
									target(card, player, target) {
										if (card.name == 'guiyoujie') return [0, 0.5];
										if (target.isTurnedOver()) {
											if (get.tag(card, 'damage')) {
												if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
												if (target.hp == 1) return;
												return [1, target.countCards('h') / 2];
											}
										}
									},
								},
							},
						},
						czre酒诗2: {
							trigger: { player: 'damageAfter' },
							silent: true,
							filter(event, player) {
								return player.classList.contains('turnedover');
							},
							content() {
								player.storage.czre酒诗 = true;
							},
						},
						czre酒诗3: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'damageAfter' },
							check(event, player) {
								return player.isTurnedOver();
							},
							filter(event, player) {
								if (player.storage.czre酒诗) {
									return true;
								}
								return false;
							},
							content() {
								player.storage.czre酒诗 = false;
								player.turnOver();
								player.draw(2);
								player.gainMaxHp();
							},
						},
						mingguangkai: {
							audio: true,
							nobracket: true,
							trigger: { target: 'useCardToBegin' },
							filter(event, player) {
								return ['huogong', 'huoshaolianying'].includes(event.card.name) || (event.card.name == 'sha' && event.card.nature == 'fire');
							},
							content() {
								trigger.cancel();
								var gainCardNames = ['chiling', 'diaohulishan', 'guohe', 'huogong', 'huoshaolianying', 'jiedao', 'juedou', 'jinchan', 'lulitongxin', 'nanman', 'qijia', 'shengdong', 'shuiyanqijunx', 'shunshou', 'taoyuan', 'tiesuo', 'wugu', 'wuxie', 'wuzhong', 'wanjian', 'xietianzi', 'yiyi', 'yuanjiao', 'zengbin', 'zhibi'].randomGets(2);
								var gainCards = gainCardNames.map((i) => game.createCard(i));
								player.gain(gainCards, 'draw');
							},
						},
						赐铠: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							content() {
								player.draw(2);
								player.equip(game.createCard('mingguangkai', 'spade', 1), player);
							},
						},
						曹植不臣: {
							audio: 'ext:名存实亡/audio:2',
							trigger: {
								player: 'phaseBegin',
								global: 'dyingBegin',
							},
							usable: 1, //QQQ
							content() {
								'step 0';
								player.chooseTarget('选择一名魏或群势力角色,你与其势力相同', function (card, player, target) {
									return target.group == 'wei' || (target.group == 'qun' && target != player);
								});
								('step 1');
								if (result.bool) {
									var pl = result.targets[0];
									player.storage.ll = pl;
									pl.markSkill('曹植不臣');
									if (player.identity != 'zhu') player.identity = pl.identity;
									player.setIdentity(pl.identity);
									player.node.identity.dataset.color = pl.identity;
									player.setIdentity('<font class="fontbw">魏</font><font class="fontwb">群</font>');
									if (lib.config.mode == 'guozhan') {
										player.identity = player.storage.ll.identity;
										player.setIdentity();
										player._group = pl.identity;
										player.identityShown = true;
										lib.character[player.name][1] = pl.identity;
										player.setIdentity('<font class="fontbw">魏</font><font class="fontwb">群</font>');
									}
								}
							},
							marktext: '臣',
							intro: {
								content: '已对你臣服',
							},
							group: '曹植不臣2',
						},
						曹植不臣2: {
							trigger: { player: 'phaseBefore' },
							forced: true,
							popup: false,
							silent: true,
							content() {
								for (var i = 0; i < game.players.length; i++) {
									delete game.players[i].storage.ll;
									game.players[i].unmarkSkill('曹植不臣');
								}
								player.unmarkSkill('曹植不臣');
							},
						},
						灵慧: {
							audio: 4,
							trigger: { player: 'phaseEnd' },
							content() {
								for (var i = 0; i < [1, 3].randomGet(); i++) {
									player.draw(2);
									player.chooseToUse();
								}
							},
						},
						黠策: {
							audio: 4,
							trigger: { player: 'damageEnd' },
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('黠策'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].addTempSkill('fengyin');
									if (Math.random() < 0.5) player.recover();
								}
							},
						},
						御心: {
							audio: 4,
							trigger: { global: 'dyingBegin' },
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							usable: 1,
							content() {
								trigger.player.recover(Math.max(1, player.hp) - trigger.player.hp);
							},
						},
						_bailingyun: {
							trigger: { player: 'dieBegin' },
							_priority: 2,
							forced: true,
							filter(event, player) {
								return player.name == 'bailingyun柏灵筠' || player.name1 == 'bailingyun柏灵筠' || player.name2 == 'bailingyun柏灵筠';
							},
							content() {
								game.playAudio('../extension/名存实亡/audio/bailingyun柏灵筠.mp3');
							},
						},
						qimingqiang七鸣枪: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'shaEnd' },
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							usable: 1,
							nobracket: true,
							content() {
								'step 0';
								game.JPG4('qimingqiang七鸣枪dhtx', 1000);
								event.num = 7;
								('step 1');
								player.judge();
								('step 2');
								if (result.number <= 7) trigger.target.damage();
								if (get.type(result, 'trick') == 'trick') {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										if (get.tag({ name: lib.inpile[i] }, 'damage')) list.push(lib.inpile[i]);
									}
									player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'draw');
								}
								('step 3');
								if (event.num--) event.goto(1);
							},
						},
						七鸣: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: ['phaseBegin', 'phaseEnd'] },
							forced: true,
							content() {
								game.playAudio('../extension/名存实亡/audio/文鸯胜利.mp3');
								player.draw(2);
								player.useCard(game.createCard('qimingqiang七鸣枪', 'spade', 7), player);
							},
						},
						纵驰: {
							audio: 'ext:名存实亡/audio:2',
							group: '纵驰2',
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								function quDiaoGang(str) {
									return str.replace(/_/g, '');
								}
								var Zname = [event.player.name, event.player.name1, event.player.name2].filter((i) => i);
								return Zname.some((i) => quDiaoGang(i).includes('sima'));
							},
							content() {
								trigger.num += player.countCards('he', { color: 'black' });
								// var n=game.countPlayer(i=>['s','i','m','a'].some(y=>i.name.includes(y)||i.name1.includes(y)||i.name2.includes(y)));
								var n = game.countPlayer((i) => ['s', 'i', 'm', 'a'].some((y) => [i.name, i.name1, i.name2].some((b) => b && b.includes(y))));
								player.draw(n);
							},
						},
						纵驰2: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { source: 'damageBegin' },
							content() {
								// var n=game.countPlayer(i=>['s','i','m','a'].some(y=>{
								// var Zname = [i.name, i.name1, i.name2].filter(a=> a);
								// return Zname.some(b=>b.includes(y));
								// }));
								var n = game.countPlayer((i) => ['s', 'i', 'm', 'a'].some((y) => [i.name, i.name1, i.name2].some((b) => b && b.includes(y))));
								player.draw(n);
							},
						},
						横骋: {
							audio: 'ext:名存实亡/audio:2',
							group: '横骋2',
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								function quDiaoGang(str) {
									return str.replace(/_/g, '');
								}
								var Zname = [event.player.name, event.player.name1, event.player.name2].filter((i) => i);
								return Zname.some((i) => quDiaoGang(i).includes('sima'));
							},
							mod: {
								globalFrom(from, to, distance) {
									return distance - from.countCards('he', { color: 'black' });
								},
								globalTo(from, to, distance) {
									return distance + to.countCards('he', { color: 'black' });
								},
							},
							content() {
								trigger.player.chooseToDiscard('he', true, 2, '<span style="color: rgb(16, 47, 29);filter:brightness(3);">请弃置两张牌</span>');
								trigger.player.loseHp();
							},
						},
						横骋2: {
							trigger: { global: 'gameDrawEnd' },
							silent: true,
							popup: false,
							content() {
								if (!player.storage.横骋2) {
									player.storage.横骋2 = true;
									var Tpdiv = ui.create.div(player);
									var tupian = ' ';
									var naka = player.node.avatar.offsetWidth + 6;
									var gaodu = -36;
									if (player.name2) {
										naka *= 2;
									}
									var zuo = 15;
									zuo = naka - 50;
									tupian = tupian + '<img style="position:absolute;width:60px;top:' + gaodu + 'px;left:' + zuo + 'px;" src="extension/名存实亡/image/wenyang纵横驰骋hpdhtx.jpg">';
									Tpdiv.innerHTML = tupian;
									ui.updatem(player);
									var player1 = player;
									var Tpdiv1 = ui.create.div(player1);
									var tupian1 = ' ';
									var naka1 = player1.node.avatar.offsetWidth + 6;
									var gaodu1 = -36;
									if (player1.name2) {
										naka1 *= 2;
									}
									var zuo1 = 15;
									zuo1 = naka1 / 2 - 60;
									tupian1 = tupian1 + '<img style="position:absolute;width:60px;top:' + gaodu1 + 'px;left:' + zuo1 + 'px;" src="extension/名存实亡/image/wenyang纵横驰骋hpdhtx.jpg">';
									Tpdiv1.innerHTML = tupian1;
									ui.updatem(player1);
								}
							},
						},
						xuwanglian虚妄镰: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'loseEnd' },
							nobracket: true,
							filter(event, player) {
								return event.cards && event.cards.some((i) => get.color(i) == 'black'); //QQQ
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							usable: 1,
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (result.number <= 7 || get.color(result) == 'black') trigger.player.damage('thunder');
							},
						},
						xiangyudao项羽刀: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'shaBegin' },
							nobracket: true,
							content() {
								'step 0';
								player.gainPlayerCard(trigger.target, 'he', true);
								('step 1');
								if (player.countCards('he', (c) => get.color(c) == 'black') > player.countCards('he', (c) => get.color(c) == 'red')) trigger.target.damage();
							},
						},
						modao陌刀: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'shaBegin' },
							usable: 3,
							content() {
								'step 0';
								event.cards = get.cards(4);
								if (event.isMine() == false) {
									event.dialog = ui.create.dialog('陌刀', event.cards);
								}
								player.chooseControl('不同牌名', '不同花色');
								('step 1');
								if (event.dialog) event.dialog.close();
								var dialog = ui.create.dialog('陌刀', event.cards);
								if (result.control == '不同花色') {
									player.chooseButton([0, 4], dialog, true).set('ai', function (button) {
										return get.value(button.link);
									}).filterButton = function (button) {
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
										}
										return true;
									};
								} else {
									player.chooseButton([0, 4], dialog, true).set('ai', function (button) {
										return get.value(button.link);
									}).filterButton = function (button) {
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											if (button.link.name == ui.selected.buttons[i].link.name) return false;
										}
										return true;
									};
								}
								('step 2');
								var cards2 = [];
								for (var i = 0; i < result.buttons.length; i++) {
									cards2.push(result.buttons[i].link);
									cards.remove(result.buttons[i].link);
								}
								player.gain(cards2, 'log');
								if (cards2.length) {
									player.$gain2(cards2);
									trigger.target.damage(cards2.length);
								}
								for (var i = 0; i < cards.length; i++) {
									cards[i].discard();
								}
							},
						},
						烈画雀弓: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'shaBegin' },
							nobracket: true,
							content() {
								'step 0';
								player.gainPlayerCard(trigger.target, [1, 3].randomGet(), 'he', true);
								('step 1');
								if (result.bool) {
									if (result.cards.some((card) => get.tag(card, 'damage'))) player.gain(game.createCard('wanjian'), 'draw');
								}
							},
						},
						huoba火把: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								'step 0';
								game.mp45('huoba火把sptx');
								player
									.chooseTarget(get.prompt('huoba火把'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.discardPlayerCard([1, 3].randomGet(), result.targets[0], 'he', true);
									event.t = result.targets[0];
								}
								('step 2');
								if (result.bool) {
									var n = result.cards.filter((card) => get.translation(card.name).length >= 2).length;
									event.t.damage('fire', n);
								}
							},
						},
						pangufu盘古斧: {
							audio: 'ext:名存实亡/audio:2',
							nobracket: true,
							trigger: { player: 'shaBegin' },
							filter(event, player) {
								return player.countCards('he', (card) => get.tag(card, 'damage'));
							},
							content() {
								player.chooseToDiscard((card) => get.tag(card, 'damage'), 'he', true, '<span style="color: rgb(51, 43, 0);filter:brightness(5);">请弃置1张伤害标签牌</span>');
								trigger.directHit = true;
								player.addTempSkill('pangufu盘古斧2', 'shaAfter');
								player.changeHujia();
							},
							ai: {
								threaten: 0.5,
							},
						},
						pangufu盘古斧2: {
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						},
						wuzhui乌骓: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseEnd' },
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (get.color(result) == 'black') player.gainMaxHp(2 + player.countCards('he', (card) => get.color(card) == 'black'));
							},
						},
						tianjidun天机盾: {
							audio: 'ext:名存实亡/audio:2',
							nobracket: true,
							trigger: { player: 'damageBegin' },
							forced: true,
							audio: true,
							filter(event, player) {
								if (event.num < player.hp) return false;
								if (event.source && event.source.hasSkillTag('unequip', false, event.card)) return false;
								return true;
							},
							_priority: -10,
							content() {
								trigger.cancel();
								player.changeHujia(2);
							},
						},
						援盾: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { player: 'phaseBegin' },
							content() {
								var cardlist = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									if (get.type({ name: lib.inpile[i] }) == 'basic') cardlist.push(lib.inpile[i]);
								}
								var list = game.filterPlayer(function (current) {
									return current.isFriendsOf(player);
								});
								list.sort(lib.sort.seat);
								list.map(function (item) {
									item.gain(game.createCard(cardlist.randomGet()), 'draw');
									if (!item.countCards('e', (c) => c.name == 'tianjidun天机盾')) item.equip(game.createCard('tianjidun天机盾', 'spade', 2), item);
								});
							},
						},
						东援: {
							audio: 'ext:名存实亡/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								return event.num == 0;
							},
							check(event, player) {
								return get.attitude(player, event.player) >= 0;
							},
							content() {
								trigger.player.recover();
							},
						},
					},
				};
				lib.config.all.characters.add('名存实亡');
				lib.config.characters.add('名存实亡');
				for (var i in QQQ.character) {
					QQQ.character[i][4].add(`ext:名存实亡/image/${i}.jpg`);
				}
				lib.translate['名存实亡_character_config'] = `名存实亡`;
				return QQQ;
			});
		},
		config: {
			skinSupportMp4: {
				name: '皮肤支持mp4文件',
				init: true,
			},
			leidianDaVideo: {
				name: '<span style="color: #7DF9FF">雷电伤害mp4文件</span>',
				init: true,
			},
			shuiyanqijunxhesdjx: {
				name: '水淹七军、声东击西强化',
				init: true,
			},
			huoyanDaVideo: {
				name: '<span style="color: #FF4500">火焰伤害mp4文件</span>',
				init: true,
			},
			hujiaGif: {
				name: '<span style="color: #33a3dc;filter:brightness(3);">护甲动画特效</span>',
				init: true,
			},
			fuleipdcg: {
				name: '浮雷动画特效',
				init: true,
			},
		},
		package: {
			card: {
				card: {
					pyzhuren_heart: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -2,
						},
						skills: ['pyzhuren_heart'],
						ai: {
							basic: {
								equipValue: 4,
							},
						},
					},
					pyzhuren_diamond: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -1,
						},
						skills: ['pyzhuren_diamond'],
						ai: {
							basic: {
								equipValue: 3,
							},
						},
					},
					pyzhuren_club: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -1,
						},
						skills: ['pyzhuren_club'],
						ai: {
							basic: {
								equipValue: 5,
							},
						},
						onLose() {
							player.recover();
						},
					},
					pyzhuren_spade: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						skills: ['pyzhuren_spade'],
						ai: {
							basic: {
								equipValue: 3,
							},
						},
					},
					pyzhuren_shandian: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -3,
						},
						skills: ['pyzhuren_shandian'],
						ai: {
							basic: {
								equipValue: 3,
							},
						},
					},
					qicaishenluqcsl: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip4',
						distance: { globalFrom: -1 },
						skills: ['qicaishenluqcsl'],
					},
					lfhmj: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -2,
						},
						skills: ['lfhmj', 'feilongduofeng2'],
						ai: {
							basic: {
								equipValue: 3,
							},
						},
					},
					guofengyupaolm: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip2',
						skills: ['guofengyupao', 'keji'],
					},
					xiuluolianyuji修罗炼狱戟: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -3,
						},
						skills: ['xiuluolianyuji修罗炼狱戟'],
					},
					jinwuluorigong金乌落日弓: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -9,
						},
						skills: ['jinwuluorigong金乌落日弓'],
					},
					shishengshibailun: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip5',
						skills: ['shishengshibailun'],
					},
					guimoubingjingshan: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -3,
						},
						skills: ['guimoubingjingshan'],
					},
					xuwangzhimian虚妄之冕: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip5',
						skills: ['xuwangzhimian虚妄之冕'],
					},
					lieduanhuodao烈锻火刀: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['lieduanhuodao烈锻火刀'],
					},
					tiejiliguduo: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						distance: {
							attackFrom: -5,
						},
						skills: ['tiejiliguduo'],
						ai: {
							basic: {
								equipValue: 4,
							},
						},
					},
					yanleicuidao焰雷淬刀: {
						fullskin: true,
						distance: { attackFrom: -3 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['yanleicuidao焰雷淬刀'],
					},
					huocuidao: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['huocuidao'],
					},
					qingtonghuo青铜镬: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip2',
						skills: ['qingtonghuo青铜镬'],
					},
					mingguangkai: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip2',
						skills: ['mingguangkai'],
					},
					qimingqiang七鸣枪: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['qimingqiang七鸣枪'],
					},
					xuwanglian虚妄镰: {
						fullskin: true,
						distance: { attackFrom: -1 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['xuwanglian虚妄镰'],
					},
					xiangyudao项羽刀: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['xiangyudao项羽刀'],
					},
					modao陌刀: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['modao陌刀'],
					},
					烈画雀弓: {
						fullskin: true,
						distance: { attackFrom: -6 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['烈画雀弓'],
					},
					huoba火把: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['huoba火把'],
					},
					pangufu盘古斧: {
						fullskin: true,
						distance: { attackFrom: -2 },
						type: 'equip',
						subtype: 'equip1',
						skills: ['pangufu盘古斧'],
					},
					wuzhui乌骓: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip4',
						distance: { globalFrom: -2 },
						skills: ['wuzhui乌骓'],
					},
					tianjidun天机盾: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip2',
						skills: ['tianjidun天机盾'],
						onLose() {
							player.changeHujia(6);
						},
					},
				},
				translate: {
					xiangyudao项羽刀: '项羽刀',
					xiangyudao项羽刀_info: '当你使用【杀】时,你可以获得其一张牌,若你的黑色牌大于红色牌对其造成一点伤害',
					modao陌刀: '陌刀',
					modao陌刀_info: '每回合限3次,使用杀时亮出牌堆顶的四张牌你选择获得不同牌名或不同花色各一张,对一名角色造成等量伤害',
					烈画雀弓: '烈画雀弓',
					烈画雀弓_info: '你使用杀时可弃置目标角色随机1～3张牌,若其中有伤害标签牌,你获得一张万箭齐发',
					huoba火把: '火把',
					huoba火把_info: '回合开始时你可弃置一名角色1～3张牌,对其造成1+所弃置牌牌名数不小于2的张数点伤害',
					pangufu盘古斧: '盘古斧',
					pangufu盘古斧_info: '当你使用杀时,若你有伤害标签牌,你可以选择弃置一张伤害标签牌,令此杀无法闪避,你增加一点护甲.此杀造成的伤害时,伤害值+2直到使用杀结束后',
					wuzhui乌骓: '乌骓',
					wuzhui乌骓_info: '回合结束时,你可进行一次判定,若结果为黑色,你增加2+你体力上限数点上限',
					tianjidun天机盾: '天机盾',
					tianjidun天机盾_info: '失去此装备获得6点护甲,你受到致命伤害时防止之改为增加2点护甲',
					xuwanglian虚妄镰: '虚妄镰',
					xuwanglian虚妄镰_info: '每回合限一次,一名角色失去黑色牌后,你可进行一次判定,若判定牌点数不大于7或为黑色,你对其造成一点雷电伤害',
					qimingqiang七鸣枪: '七鸣枪',
					qimingqiang七鸣枪_info: `<span style="font-size: 24px; color: blue; text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.5), 1px -1px 0 rgba(0, 0, 0, 0.5), -1px 1px 0 rgba(0, 0, 0, 0.5), 1px 1px 0 rgba(0, 0, 0, 0.5); -webkit-text-fill-color: transparent; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: blue;">每名角色回合限一次,你使用杀后可判定7次,若点数小于7你对目标角色造成一点伤害,若为锦囊牌你获得两张伤害标签牌</span>`,
					mingguangkai: '明光铠',
					mingguangkai_info: '当你成为【火烧连营】、【火攻】、【铁索连环】或火【杀】的目标时,可取消之改为获得两张牌名不同的普通锦囊牌',
					huocuidao: '火淬刀',
					huocuidao_info: '每名角色回合限2次,你使用杀时,可摸2张牌,回复4点体力,令此杀造成的伤害+4,选择一名角色,弃置其4张牌,视为对其使用一张火杀,对其造成5点火焰伤害',
					qingtonghuo青铜镬: '青铜镬',
					qingtonghuo青铜镬_info: '出牌阶段开始时,若你手牌中有伤害标签牌,你可对其造成一点火焰伤害,视为对其随机使用一张你手牌中有的伤害标签牌',
					yanleicuidao焰雷淬刀: '焰雷淬刀',
					yanleicuidao焰雷淬刀_info: '每名角色回合限4次,你使用杀时,可摸4张牌,回复2点体力,令此杀造成的伤害+2,选择一名角色,弃置其2张牌,视为对其使用一张雷杀,对其造成5点雷电伤害',
					tiejiliguduo: '铁蒺藜骨朵',
					tiejiliguduo_info: '你可额外使用5张杀,你使用杀后可对一名角色造成随机1到5点伤害',
					lieduanhuodao烈锻火刀: '烈锻火刀',
					lieduanhuodao烈锻火刀_info: '每名角色回合限2次,你使用杀时可选择一名角色,令此伤害加一,其成为额外目标,对其造成随机1到3点的随机雷电或火焰伤害,其失去随机1到3点体力,你回复随机1到3点体力,摸随机1到3张牌',
					pyzhuren_heart: '红缎枪',
					pyzhuren_heart_info: '每回合限一次,当你使用【杀】造成伤害后,你可以进行判定,若结果为:红色,你回复1点体力;黑色:你摸两张牌',
					pyzhuren_diamond: '烈淬刀',
					pyzhuren_diamond_info: '每回合限两次,当你使用【杀】对目标角色造成伤害时,你可以弃置一张牌,令此伤害+1.你使用【杀】的次数上限+1',
					pyzhuren_club: '水波剑',
					pyzhuren_club_info: '每回合限两次,当你使用普通锦囊牌或【杀】时,你可以为此牌增加一个目标.当你失去装备区里的【水波剑】后,你回复1点体力',
					pyzhuren_spade: '混毒弯匕',
					pyzhuren_spade_info: '当你使用【杀】指定目标后,你可令其失去X点体力(X为此技能本回合内发动过的次数且至多为5)',
					pyzhuren_shandian: '天雷刃',
					pyzhuren_shandian_info: '当你使用【杀】指定目标后,可令其进行判定,若结果为:♠️️,其受到3点雷属性伤害;♣️️,其受到1点雷属性伤害,你回复1点体力并摸一张牌',
					qicaishenluqcsl: '七彩神鹿',
					qicaishenluqcsl_info: '锁定技,你计算与其他角色的距离时-1,当你造成属性伤害时,你令此伤害+1',
					lfhmj: '鸾凤和鸣剑',
					lfhmj_info: '你使用杀指定目标时可令该角色弃置一张牌你摸一张牌,并有飞龙夺凤改变势力效果',
					guofengyupaolm: '国风玉袍',
					guofengyupaolm_info: '锁定技,你不能成为其他角色使用普通锦囊牌的目标,若你装备着国风玉袍视为你拥有克己',
					xiuluolianyuji修罗炼狱戟: '修罗炼狱戟',
					xiuluolianyuji修罗炼狱戟_info: '你使用杀或决斗可额外指定7名角色为目标,当你使用杀造成伤害时,你令此伤害+1,并可令其失去一点体力',
					jinwuluorigong金乌落日弓: '金乌落日弓',
					jinwuluorigong金乌落日弓_info: '你于你的回合失去牌后可令一名角色弃置等量的牌',
					shishengshibailun: '十胜十败论',
					shishengshibailun1: '十胜十败论(败论)',
					shishengshibailun_info: '你于你的回合开始时可弃置场上所有胜标记并摸等量牌,增加等量体力上限,可弃置场上所有败标记,令一名角色弃置等量牌',
					guimoubingjingshan: '鬼谋冰晶扇',
					guimoubingjingshan_info: '每名角色回合限一次,你造成伤害可视为神圣伤害且弃置其两张牌,并视为使用一张你选择的锦囊牌',
					xuwangzhimian虚妄之冕: '虚妄之冕',
					xuwangzhimian虚妄之冕_info: '摸牌阶段你可额外摸4张牌,获得4枚忍戒标记',
				},
			},
			intro: "素材提供:平西镇北征南破东定中拢左揽右震天憾地司马<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '作者苏婆玛丽奥弃坑,素材提供者大司马代更',
		},
	};
});

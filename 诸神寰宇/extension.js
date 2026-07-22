import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '诸神寰宇',
		content(config, pack) {
			Array.prototype.includes = Array.prototype.includes;
			window.isMobile = navigator.userAgent.match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i);
			window._extension_css = lib.init.css('extension/诸神寰宇', 'extension');
			lib.zshy_ChooseRole = {};
			lib.zshy_ChooseRole.cardList = function () {
				var list = [];
				for (var i in lib.characterPack) {
					var role = i,
						str = role;
					if (lib.translate[role + '_character_config']) {
						str = lib.translate[role + '_character_config'];
					}
					lib.card['zshy_ChooseRole_' + role] = {
						fullskin: true,
						type: str,
					};
					lib.zshy_ChooseRole['zshy_ChooseRole_' + role] = i;
					lib.translate['zshy_ChooseRole_' + role] = str;
					lib.translate['zshy_ChooseRole_' + role + '_info'] = str;
					list.push('zshy_ChooseRole_' + role);
				}
				return list;
			};
			game.zshyHasExtension = function (str) {
				return lib.config.extensions && lib.config.extensions.includes(str) && lib.config['extension_' + str + '_enable'];
			};
			game.zshyHasExtensionInstalled = function (str) {
				return lib.config.extensions && lib.config.extensions.includes(str);
			};
			lib.skill._zshyzhenwangpeiyin = {
				trigger: {
					player: 'dieBegin',
				},
				fixed: true,
				forced: true,
				popup: false,
				lastDo: true,
				charlotte: true,
				superCharlotte: true,
				filter(event, player) {
					return event.player.name.indexOf('zshy_') == 0;
				},
				content() {
					game.playAudio('../extension/诸神寰宇/audio/character', trigger.player.name);
				},
			};
			lib.rank.rarity.junk.addArray([
			]);
			lib.rank.rarity.rare.addArray([
			]);
			lib.rank.rarity.epic.addArray([
				'zshy_ZguanyuBZ',
				'zshy_ZzhangfeiBZ',
				'zshy_ZmachaoBZ',
				'zshy_ZzhaoyunBZ',
				'zshy_ZliubeiBZ',
				'zshy_ZsunquanBZ',
				'zshy_ZcaocaoBZ',
				'zshy_ZyuanshuBZ',
				'zshy_ZganningBZ',
				'zshy_ZlvmengBZ',
				'zshy_ZhuanggaiBZ',
				'zshy_ZxiahoudunBZ',
				'zshy_ZzhangliaoBZ',
				'zshy_ZxuzhuBZ',
				'zshy_ZlvbuBZ',
				'zshy_ZhuaxiongBZ',
				'zshy_ZzhugeliangBZ',
				'zshy_ZzhouyuBZ',
				'zshy_ZluxunBZ',
				'zshy_ZhuatuoBZ',
				'zshy_ZsimayiBZ',
				'zshy_ZguojiaBZ',
				'zshy_ZhuangyueyingBZ',
				'zshy_ZdaqiaoBZ',
				'zshy_ZzhenjiBZ',
				'zshy_ZdiaochanBZ',
				'zshy_ZsunshangxiangBZ',
				'zshy_ZweiyanSHZL',
				'zshy_ZxiahouyuanSHZL',
				'zshy_ZcaorenSHZL',
				'zshy_ZxiaoqiaoSHZL',
				'zshy_ZhuangzhongSHZL',
				'zshy_ZzhoutaiSHZL',
				'zshy_ZyujiSHZL',
				'zshy_ZzhangjiaoSHZL',
				'zshy_ZdianweiSHZL',
				'zshy_ZxunyuSHZL',
				'zshy_ZpangtongSHZL',
				'zshy_ZwolongzhugeSHZL',
				'zshy_ZtaishiciSHZL',
				'zshy_ZpangdeSHZL',
				'zshy_ZyanliangwenchouSHZL',
				'zshy_ZyuanshaoSHZL',
				'zshy_ZxuhuangSHZL',
				'zshy_ZcaopiSHZL',
				'zshy_ZsunjianSHZL',
				'zshy_ZdongzhuoSHZL',
				'zshy_ZzhurongSHZL',
				'zshy_ZmenghuoSHZL',
				'zshy_ZjiaxuSHZL',
				'zshy_ZlusuSHZL',
				'zshy_ZzhangheSHZL',
				'zshy_ZdengaiSHZL',
				'zshy_ZjiangweiSHZL',
				'zshy_ZliushanSHZL',
				'zshy_ZsunceSHZL',
				'zshy_ZzhangshaozhanghongSHZL',
				'zshy_ZzuociSHZL',
				'zshy_ZcaiwenjiSHZL',
				'zshy_ZwangjiSHZL',
				'zshy_ZyanyanSHZL',
				'zshy_ZwangpingSHZL',
				'zshy_ZlujiSHZL',
				'zshy_ZsunliangSHZL',
				'zshy_ZpengliangpengyueSHZL',
				'zshy_ZxuyouSHZL',
				'zshy_ZluzhiSHZL',
				'zshy_ZyuanshuSHZL',
				'zshy_ZhaozhaoSHZL',
				'zshy_ZchendaoSHZL',
				'zshy_ZzhugezhanSHZL',
				'zshy_ZzhoufeiSHZL',
				'zshy_ZguanqiujianSHZL',
				'zshy_ZlukangSHZL',
				'zshy_ZzhangxiuSHZL',
			]);
			lib.rank.rarity.legend.addArray([
				'zshy_AAanjing',
				'zshy_AAantianhen',
				'zshy_AAjiusheng',
				'zshy_ABjieke',
				'zshy_AChonglian',
				'zshy_ACmohen',
				'zshy_ADcanglan',
				'zshy_ADjiuri',
				'zshy_ADzhan',
				'zshy_BAchuyinweilai',
				'zshy_BAguyuefangyuan',
				'zshy_BAlongyi',
				'zshy_BAyangjian',
				'zshy_BAyixiangren',
				'zshy_BBaisha',
				'zshy_BBlilimu',
				'zshy_BCjinniuzuo',
				'zshy_Mguanyu',
				'zshy_Mzhangfei',
				'zshy_Mmachao',
				'zshy_Mzhaoyun',
				'zshy_Mliubei',
				'zshy_Msunquan',
				'zshy_Mcaocao',
				'zshy_Myuanshu',
				'zshy_Mlvmeng',
				'zshy_Yshenzhaoyun',
				'zshy_ZshenguanyuSHZL',
				'zshy_ZshenlvmengSHZL',
				'zshy_ZshenzhouyuSHZL',
				'zshy_ZshenzhugeliangSHZL',
				'zshy_ZshenlvbuSHZL',
				'zshy_ZshencaocaoSHZL',
				'zshy_ZshensimayiSHZL',
				'zshy_ZshenzhaoyunSHZL',
				'zshy_ZshenliubeiSHZL',
				'zshy_ZshenluxunSHZL',
				'zshy_ZshenzhangliaoSHZL',
				'zshy_ZshenganningSHZL',
				'zshy_ZshenzhangfeiXD',
				'zshy_ZshenmachaoXD',
			]);
			if (config.WJQZ == '1' || config.WJQZ == '2') {
				if (config.WJQZ == '1') {
					lib.namePrefix.set('安璟', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '安璟',
					});
					lib.namePrefix.set('安天痕', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '安天痕',
					});
					lib.namePrefix.set('玖笙', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '玖笙',
					});
					lib.namePrefix.set('杰克', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '杰克',
					});
					lib.namePrefix.set('红莲', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '红莲',
					});
					lib.namePrefix.set('墨痕', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '墨痕',
					});
					lib.namePrefix.set('苍澜', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '苍澜',
					});
					lib.namePrefix.set('旧日', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '旧日',
					});
					lib.namePrefix.set('斩', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '斩',
					});
					lib.namePrefix.set('命', {
						showName: '',
					});
					lib.namePrefix.set('初', {
						showName: '',
					});
					lib.namePrefix.set('标', {
						showName: '',
					});
					lib.namePrefix.set('风', {
						showName: '',
					});
					lib.namePrefix.set('火', {
						showName: '',
					});
					lib.namePrefix.set('林', {
						showName: '',
					});
					lib.namePrefix.set('山', {
						showName: '',
					});
					lib.namePrefix.set('阴', {
						showName: '',
					});
					lib.namePrefix.set('雷', {
						showName: '',
					});
					lib.namePrefix.set('武', {
						showName: '',
					});
				} else {
					lib.namePrefix.set('安璟', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '虚无神尊',
					});
					lib.namePrefix.set('安天痕', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '天外虚影',
					});
					lib.namePrefix.set('玖笙', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '噬灭寰宇',
					});
					lib.namePrefix.set('杰克', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '戏命魔师',
					});
					lib.namePrefix.set('红莲', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '焚罪业火',
					});
					lib.namePrefix.set('墨痕', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '墨染春秋',
					});
					lib.namePrefix.set('苍澜', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '孤身侠客',
					});
					lib.namePrefix.set('旧日', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '末世君主',
					});
					lib.namePrefix.set('斩', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '斩命龙骑',
					});
					lib.namePrefix.set('初', {
						color: '#FFD700',
						nature: 'soilmm',
						showName: '初',
					});
					lib.namePrefix.set('命', {
						color: '#E1E1E1',
						nature: 'soilmm',
						showName: '命',
					});
					lib.namePrefix.set('标', {
						color: '#FFFFFF',
						nature: 'soilmm',
						showName: '标',
					});
					lib.namePrefix.set('风', {
						color: '#00FFFF',
						nature: 'soilmm',
						showName: '风',
					});
					lib.namePrefix.set('火', {
						color: '#FF0000',
						nature: 'soilmm',
						showName: '火',
					});
					lib.namePrefix.set('林', {
						color: '#00FF00',
						nature: 'soilmm',
						showName: '林',
					});
					lib.namePrefix.set('山', {
						color: '#CD853F',
						nature: 'soilmm',
						showName: '山',
					});
					lib.namePrefix.set('阴', {
						color: '#1E90FF',
						nature: 'soilmm',
						showName: '阴',
					});
					lib.namePrefix.set('雷', {
						color: '#8A2BE2',
						nature: 'soilmm',
						showName: '雷',
					});
					lib.namePrefix.set('武', {
						color: '#FF8C00',
						nature: 'soilmm',
						showName: '武',
					});
				}
			}
			if (lib.config.extension_诸神寰宇_KPBJ && lib.config.extension_诸神寰宇_KPBJ != '默认') {
				var KPcss = document.createElement('style');
				KPcss.innerHTML = ".card:empty,.card.infohidden{background:url('extension/诸神寰宇/other/Picture/Cardback/" + lib.config.extension_诸神寰宇_KPBJ + '.jpg' + "');background-size:100% 100% !important;}";
				document.head.appendChild(KPcss);
			}
			window.kpimport = function (func) {
				func(lib, game, ui, get, ai, _status);
			};
			if (lib.config.extension_诸神寰宇_WJBJ && lib.config.extension_诸神寰宇_WJBJ != '默认') {
				var WJcss = document.createElement('style');
				WJcss.innerHTML = "#window .player{background:url('extension/诸神寰宇/other/Picture/Roleback/" + lib.config.extension_诸神寰宇_WJBJ + '.jpg' + "');background-size:100% 100% !important;}";
				document.head.appendChild(WJcss);
			}
			window.wjimport = function (func) {
				func(lib, game, ui, get, ai, _status);
			};
			game.zshyplayBackgroundMusic = function () {
				var temp = lib.config.extension_诸神寰宇_BJYY;
				if (temp == '0') {
					temp = Math.floor(2 + Math.random() * 11);
					temp = temp.toString();
				}
				ui.backgroundMusic.pause();
				var item = {
					2: 'Dragonborn.mp3',
				};
				if (item[temp]) ui.backgroundMusic.src = 'extension/诸神寰宇/other/Music/' + item[temp];
				else {
					game.playBackgroundMusic();
					ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
				}
			};
			if (lib.config.extension_诸神寰宇_BJYY && lib.config.extension_诸神寰宇_BJYY != '1') {
				lib.arenaReady.push(function () {
					game.zshyplayBackgroundMusic();
					ui.backgroundMusic.addEventListener('ended', game.zshyplayBackgroundMusic);
				});
			}
			game.zshyplayBackgroundPicture = function () {
				var temp = lib.config.extension_诸神寰宇_BJTP;
				if (temp == '0') {
					var list = ['2', '3', '4', '5', '6', '白龙-背', '白龙-侧', '黑龙', '红妆未嫁', '11', '12', '13', '14', '15', '16', '苍澜', '18', '19', '20', '21', '澜殇', '23', '24', '寐魂师', '26', '27', '28'];
					if (_status.zshyplayBackgroundPicture) list.remove(_status.zshyplayBackgroundPicture);
					temp = list.randomGet();
				}
				_status.zshyplayBackgroundPicture = temp;
				if (temp !== '1') game.broadcastAll() + ui.background.setBackgroundImage('extension/诸神寰宇/other/Picture/Wallpaper/' + temp + '.jpg');
				else game.broadcastAll() + ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
				var item = lib.config.extension_诸神寰宇_BJTP;
				if (item != '0') {
					if (_status.zshyplayBackgroundPicture_timeout) {
						clearTimeout(_status.zshyplayBackgroundPicture_timeout);
					}
				} else if (item == '0') {
					var autotime = lib.config.extension_诸神寰宇_QTSJ;
					var Timeout = autotime ? parseInt(autotime) : 30000;
					var Timeout2 = _status.zshyplayBackgroundPicture_Timeout2;
					if (_status.zshyplayBackgroundPicture_timeout && Timeout2 && Timeout2 != Timeout) {
						clearTimeout(_status.zshyplayBackgroundPicture_timeout);
					}
					_status.zshyplayBackgroundPicture_timeout = setTimeout(function () {
						game.zshyplayBackgroundPicture();
					}, Timeout);
					_status.zshyplayBackgroundPicture_Timeout2 = Timeout;
				}
			};
			if (lib.config.extension_诸神寰宇_BJTP && lib.config.extension_诸神寰宇_BJTP != '1') {
				lib.arenaReady.push(function () {
					game.zshyplayBackgroundPicture();
				});
			}
			if (config.PDTJ) {
				lib.arenaReady.push(function () {
					ui.create.system(
						'牌堆统计',
						function () {
							if (!_status.gameStarted) return;
							game.pause2();
							const cardsInfo = game.players
								.map((item) => item.getCards('h'))
								.flat(window.Infinity)
								.concat(...ui.cardPile.childNodes)
								.concat(...ui.discardPile.childNodes)
								.map((item) => ({
									name: item.name,
									suit: item.suit,
									number: item.number,
									nature: get.translation(item.nature),
									color: get.color(item),
									type: get.translation(get.type(item), 'trick'),
									translate: lib.translate[item.name],
									link: item,
								}));
							let cardStatistics = {
								杀: {
									num: 0,
									type: '基本',
								},
								火杀: {
									num: 0,
									type: '基本',
								},
								雷杀: {
									num: 0,
									type: '基本',
								},
								红杀: {
									num: 0,
									type: '基本',
								},
								黑杀: {
									num: 0,
									type: '基本',
								},
								'♠️️2~9': {
									num: 0,
									type: '花色',
								},
							};
							let typeList = ['点数', '花色'];
							for (let card of cardsInfo) {
								typeList.add(card.type);
								if (!cardStatistics[card.translate])
									cardStatistics[card.translate] = {
										num: 0,
										type: card.type,
									};
								if (!cardStatistics[get.translation(card.suit)])
									cardStatistics[get.translation(card.suit)] = {
										num: 0,
										type: '花色',
									};
								if (!cardStatistics[card.number])
									cardStatistics[card.number] = {
										num: 0,
										type: '点数',
									};
								if (ui.cardPile.contains(card.link)) {
									cardStatistics[card.translate].num++;
									cardStatistics[get.translation(card.suit)].num++;
									cardStatistics[card.number].num++;
									if (card.name === 'sha') {
										if (get.color(card) === 'black') {
											cardStatistics.黑杀.num++;
											if (card.suit === 'spade' && card.number <= 9 && card.number >= 2) cardStatistics['♠️️2~9'].num++;
										} else if (get.color(card) === 'red') cardStatistics.红杀.num++;
									}
								}
								if (card.nature) {
									if (!cardStatistics[card.nature + card.translate])
										cardStatistics[card.nature + card.translate] = {
											num: 0,
											type: card.type,
										};
									if (ui.cardPile.contains(card.link)) cardStatistics[card.nature + card.translate].num++;
								}
							}
							let popupContainer = ui.create.div(
								'.popup-container',
								ui.window,
								{
									zIndex: 10,
									background: 'rgb(0,0,0,.3)',
								},
								function () {
									this.delete(500);
									game.resume2();
								}
							);
							let statistics = ui.create.div('.card-statistics', '牌堆统计', popupContainer);
							let statisticsTitle = ui.create.div('.card-statistics-title', statistics);
							let statisticsContent = ui.create.div('.card-statistics-content', statistics);
							typeList.forEach((item) => {
								ui.create.div(statisticsTitle, '', item);
								statisticsContent[item] = ui.create.div(statisticsContent, '');
							});
							for (var i in cardStatistics) {
								let items = ui.create.div('.items');
								let item = ui.create.div('.item', i, items);
								let num = ui.create.div('.item-num', `X${cardStatistics[i].num}`, items);
								statisticsContent[cardStatistics[i].type].appendChild(items);
							}
						},
						true,
						true
					);
				});
			}
			if (config.SJYB) {
				lib.translate._SJYB = '随机应变';
				lib.skill._SJYB = {
					superCharlotte: true,
					charlotte: true,
					fixed: true,
					trigger: {
						global: 'dieBegin',
					},
					lastDo: true,
					_priority: -999,
					check: () => false,
					logTarget: 'player',
					filter(event, player) {
						if (player != game.me && !player.isUnderControl() && get.mode() != 'identity') return false;
						var idy = event.player.identity;
						if (player.identity != 'nei') return false;
						return idy == 'zhong' || idy == 'mingzhong' || idy == 'fan';
					},
					prompt2(event, player) {
						return '用<内奸>身份交换' + get.translation(event.player) + '的' + get.translation(event.player.identity) + '身份';
					},
					content() {
						game.broadcastAll(
							function (player, target, shown) {
								var identity = player.identity;
								player.identity = target.identity;
								if (shown || player == game.me) {
									player.setIdentity();
								}
								target.identity = identity;
							},
							player,
							trigger.player,
							trigger.player.identityShown
						);
					},
				};
			}
			if (config.ZWZJ && lib.config.mode == 'identity') {
				lib.skill._xigua_zhuwanzhongji_ = {
					charlotte: true,
					trigger: {
						global: 'dieBegin',
					},
					forced: true,
					filter(event, player) {
						return event.player.identity == 'zhu' && (player.identity == 'zhong' || player.identity == 'mingzhong');
					},
					logTarget: 'player',
					content() {
						game.broadcastAll(
							function (player, target) {
								target.identity = player.identity;
								if (player.identity == 'mingzhong') game.zhong = target;
								delete target.isZhu;
								player.identity = 'zhu';
								game.zhu = player;
								player.showIdentity();
								target.showIdentity();
							},
							player,
							trigger.player
						);
						event.trigger('zhuUpdate');
					},
				};
			}
		},
		precontent(zshy) {
			//—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
			const numfunc = function () {
				if (!lib.number) {
					lib.number = [];
					for (var i = 1; i < 14; i++) {
						lib.number.add(i);
					}
				} //添加lib.number
				window.sgn = function (bool) {
					if (bool) return 1;
					return -1;
				};//true转为1,false转为-1
				window.numberq0 = function (num) {
					if (isNaN(Number(num))) return 0;
					return Math.abs(Number(num));
				};//始终返回正数(取绝对值)
				window.numberq1 = function (num) {
					if (isNaN(Number(num))) return 1;
					return Math.max(Math.abs(Number(num)), 1);
				};//始终返回正数且至少为1(取绝对值)
				window.number0 = function (num) {
					if (isNaN(Number(num))) return 0;
					return Math.max(Number(num), 0);
				};//始终返回正数
				window.number1 = function (num) {
					if (isNaN(Number(num))) return 1;
					return Math.max(Number(num), 1);
				};//始终返回正数且至少为1
				window.deepClone = function (obj, visited = new WeakMap()) {
					if (obj === null || typeof obj !== 'object' || obj instanceof window.Element) {
						return obj;
					}
					if (visited.has(obj)) {
						return visited.get(obj);
					}
					if (Array.isArray(obj)) {
						return obj.map((item) => deepClone(item, visited));
					}
					const clonedObj = {};
					visited.set(obj, clonedObj);
					for (let key in obj) {
						if (Object.hasOwn(obj, key)) {
							clonedObj[key] = deepClone(obj[key], visited);
						}
					}
					return clonedObj;
				}; //深拷贝对象
				window.factorial = function (num) {
					num = Math.round(num);
					if (num < 0) {
						return 0;
					}
					if (num < 2) {
						return 1;
					}
					let result = 1;
					for (let i = 2; i <= num; i++) {
						result *= i;
					}
					return result;
				}; //阶乘
				window.isPrime = function (num) {
					if (num === 2 || num === 3) return true;
					if (num < 2 || num % 2 === 0 || num % 3 === 0) return false;
					for (let i = 5; i * i <= num; i += 6) {
						if (num % i === 0 || num % (i + 2) === 0) return false;
					}
					return true;
				}; // 质数
			};
			numfunc();
			//—————————————————————————————————————————————————————————————————————————————视为转化虚拟牌相关自创函数
			const shiwei = function () {
				lib.element.player.filterCardx = function (card, filter) {
					if (typeof card == 'string') {
						card = { name: card };
					}
					const player = this, info = get.info(card);
					if (!lib.filter.cardEnabled(card, player)) return false; //卡牌使用限制
					if (info.notarget) return true;
					if (!info.filterTarget) return true;
					if (!info.enable) return true;
					return game.hasPlayer(function (current) {
						if (info.multicheck && !info.multicheck(card, player)) return false;
						if (filter) {
							if (!lib.filter.targetInRange(card, player, current)) return false; //距离限制
							return lib.filter.targetEnabledx(card, player, current);
						}
						return lib.filter.targetEnabled(card, player, current); //目标限制
					});
				}; //适用于choosetouse的filtercard
				lib.element.player.filterCard = function (card, filter) {
					if (typeof card == 'string') {
						card = { name: card };
					}
					const player = this, info = get.info(card), event = _status.event;
					const evt = event.name.startsWith('chooseTo') ? event : event.getParent((q) => q.name.startsWith('chooseTo'));
					if (evt.filterCard2) {
						return evt._backup.filterCard(card, player, evt);
					}//viewAs的技能会修改chooseToUse事件的filterCard
					else if (evt.filterCard && evt.filterCard != lib.filter.filterCard) {
						return evt.filterCard(card, player, evt);//这里也有次数限制
					}
					else {
						if (!lib.filter.cardEnabled(card, player)) return false;//卡牌使用限制
						if (info.notarget) return true;
						if (!info.filterTarget) return true;
						if (!info.enable) return true;
						if (evt.name == 'chooseToRespond') return true;//chooseToRespond无次数距离目标限制
						if (filter) {
							if (!lib.filter.cardUsable(card, player, evt)) return false;//次数限制
						}
						if (evt.filterTarget && evt.filterTarget != lib.filter.filterTarget) {
							return game.hasPlayer(function (current) {
								return evt.filterTarget(card, player, current);
							});
						}
						return game.hasPlayer(function (current) {
							if (info.multicheck && !info.multicheck(card, player)) return false;
							if (filter) {
								if (!lib.filter.targetInRange(card, player, current)) return false;//距离限制
								return lib.filter.targetEnabledx(card, player, current);
							}
							return lib.filter.targetEnabled(card, player, current);//目标限制
						});
					}
				};//删除次数限制//filter决定有无次数距离限制//viewAs的技能会修改chooseToUse事件的filterCard
				lib.element.player.qcard = function (type, filter, range) {
					const list = [];
					for (const i in lib.card) {
						const info = lib.card[i];
						if (info.mode && !info.mode.includes(lib.config.mode)) {
							continue;
						}
						if (!info.content) {
							continue;
						}
						if (['delay', 'equip'].includes(info.type)) {
							continue;
						}
						if (type && info.type != type) {
							continue;
						}
						if (filter !== false) {
							const player = this;
							if (range !== false) {
								range = true;
							}
							if (!player.filterCard(i, range)) {
								continue;
							}
						}
						list.push([lib.suits.randomGet(), lib.number.randomGet(), i]); //花色/点数/牌名/属性/应变
						if (i == 'sha') {
							for (const j of Array.from(lib.nature.keys())) {
								list.push([lib.suits.randomGet(), lib.number.randomGet(), 'sha', j]);
							}
						}
					}
					return list;
				}; //可以转化为的牌//filter控制player.filterCard//range控制是否计算次数与距离限制
			};
			shiwei();
			game.import('character', function () {
				var zshy_XWSD_ = {
					name: 'zshy_XWSD_',
					character: {
						zshy_AAanjing: ['male', 'shen', 'Infinity/Infinity/Infinity', ['zshy_AAanjing_Shenzun', 'zshy_AAanjing_Jinmie', 'zshy_AAanjing_Wusheng', 'zshy_AAanjing_Yanmie'], ['shen', 'des:诸神之始,诸神之焉,烬灭归墟,虚无湮灭.孤此一人,其曰:【神尊】.']],
						zshy_AAantianhen: ['male', 'shen', '9/9/0', ['zshy_AAantianhen_xuying', 'zshy_AAantianhen_miehen'], ['shen', 'des:虚无之影,存在于暗影之中的存在.']],
						zshy_AAjiusheng: ['female', 'shen', '9/9/0', ['zshy_AAjiusheng_huanying', 'zshy_AAjiusheng_mieshi'], ['shen', 'des:吞噬之始,噬灭之焉.']],
						zshy_ABjieke: ['male', 'shen', '9/9/0', ['zshy_ABjieke_ximing', 'zshy_ABjieke_mingpai'], ['shen', 'des:擅长卡牌的戏命魔术师,实则是个病娇……']],
						zshy_AChonglian: ['female', 'shen', '9/9/0', ['zshy_AChonglian_yehuo', 'zshy_AChonglian_fenzui'], ['shen', 'des:原创角色……']],
						zshy_ACmohen: ['male', 'shen', '9/9/0', ['zshy_ACmohen_moji', 'zshy_ACmohen_rumu', 'zshy_ACmohen_sanfen', 'zshy_ACmohen_huamo'], ['shen', 'des:原创角色……']],
						zshy_ADcanglan: ['female', 'shen', '9/9/0', ['zshy_ADcanglan_guying', 'zshy_ADcanglan_anxing'], ['shen', 'des:原创角色……']],
						zshy_ADjiuri: ['male', 'shen', '9/9/0', ['zshy_ADjiuri_junwei', 'zshy_ADjiuri_zuifa'], ['shen', 'des:原创角色……']],
						zshy_ADzhan: ['male', 'shen', '9/9/0', [], ['shen', 'des:原创角色……']],
						zshy_BAchuyinweilai: ['female', 'shen', '3/3/0', ['zshy_BAchuyinweilai_xuni', 'zshy_BAchuyinweilai_huanyin'], ['shen', 'des:虚拟歌姬,成名曲<甩葱歌>……']],
						zshy_BAguyuefangyuan: ['male', 'shen', '4/4/0', [], ['shen', 'des:<蛊真人>中的主角,青茅山古月一族……']],
						zshy_BAlongyi: ['male', 'shen', '4/4/0', ['zshy_BAlongyi_moyi', 'zshy_BAlongyi_baitong'], ['shen', 'des:<上古卷轴4:天际>中的主角,末代龙裔……']],
						zshy_BAyangjian: ['male', 'shen', '1/1/0', ['zshy_BAyangjian_guiqu', 'zshy_BAyangjian_guiyan'], ['shen', 'des:<人间如狱>中的主角,意外掌握鬼眼的高中生,一步步走向神坛,化身杨戬,然而,他这一具神明身躯的背后,藏着的是一个可悲的灵魂.']],
						zshy_BAyixiangren: ['male', 'shen', '3/4/0', ['zshy_BAyixiangren_xueyuan', 'zshy_BAyixiangren_lieshen', 'zshy_BAyixiangren_xunying'], ['shen', 'des:<血源诅咒>中的主角,掌握了血源之力的血源猎人,或许他不是第一个,也许也不是最后一个.']],
						zshy_BBaisha: ['female', 'shen', '3/3/0', ['zshy_BBaisha_jihun', 'zshy_BBaisha_fusheng'], ['shen', 'des:原创角色……']],
						zshy_BBlilimu: ['female', 'shen', '3/3/0', ['zshy_BBlilimu_mingyou', 'zshy_BBlilimu_moqi'], ['shen', 'des:原创角色……']],
						zshy_BCjinniuzuo: ['male', 'shen', '4/4/0', ['zshy_xingli', 'zshy_BCjinniuzuo_xingzhen'], ['shen', 'des:原创角色……']],
						zshy_Mguanyu: ['male', 'shu', '4/4/0', ['zshy_Mguanyu_choose'], ['shu', 'des:命运之途,择其一而入.']],
						zshy_Mzhangfei: ['male', 'shu', '4/4/0', ['zshy_Mzhangfei_choose'], ['shu', 'des:命运之途,择其一而入.']],
						zshy_Mmachao: ['male', 'shu', '4/4/0', ['zshy_Mmachao_choose'], ['shu', 'des:命运之途,择其一而入.']],
						zshy_Mzhaoyun: ['male', 'shu', '4/4/0', ['zshy_Mzhaoyun_choose'], ['shu', 'des:命运之途,择其一而入.']],
						zshy_Mliubei: ['male', 'shu', '4/4/0', ['zshy_Mliubei_choose'], ['shu', 'zhu', 'des:命运之途,择其一而入.']],
						zshy_Msunquan: ['male', 'wu', '4/4/0', ['zshy_Msunquan_choose'], ['wu', 'zhu', 'des:命运之途,择其一而入.']],
						zshy_Mcaocao: ['male', 'wei', '4/4/0', ['zshy_Mcaocao_choose'], ['wei', 'zhu', 'des:命运之途,择其一而入.']],
						zshy_Myuanshu: ['male', 'qun', '4/4/0', ['zshy_Myuanshu_choose'], ['qun', 'zhu', 'des:命运之途,择其一而入.']],
						zshy_Mlvmeng: ['male', 'wu', '4/4/0', ['zshy_Mlvmeng_choose'], ['wu', 'des:命运之途,择其一而入.']],
					},
					characterSort: {
						zshy_XWSD_: {
							zshy_ygys: [
								'zshy_AAanjing',
								'zshy_AAantianhen',
							],
							zshy_jmhy: [
								'zshy_AAjiusheng',
								'zshy_ABjieke',
								'zshy_AChonglian',
								'zshy_ACmohen',
							],
							zshy_ztmd: [
								'zshy_ADcanglan',
								'zshy_ADjiuri',
								'zshy_ADzhan',
							],
							zshy_yjlk: [
								'zshy_BAchuyinweilai',
								'zshy_BAguyuefangyuan',
								'zshy_BAlongyi',
								'zshy_BAyangjian',
								'zshy_BAyixiangren',
							],
							zshy_yzzw: [
								'zshy_BBaisha',
								'zshy_BBlilimu',
							],
							zshy_sexz: [
								'zshy_BCjinniuzuo',
							],
							zshy_wjmt: [
								'zshy_Mguanyu',
								'zshy_Mzhangfei',
								'zshy_Mmachao',
								'zshy_Mzhaoyun',
								'zshy_Mliubei',
								'zshy_Msunquan',
								'zshy_Mcaocao',
								'zshy_Myuanshu',
								'zshy_Mlvmeng',
							],
						},
					},
					characterTitle: {
						zshy_AAanjing: '虚无神尊',
						zshy_AAantianhen: '虚无之影',
						zshy_AAjiusheng: '噬灭寰宇',
						zshy_ABjieke: '戏命魔师',
						zshy_AChonglian: '焚罪天地',
						zshy_ACmohen: '墨染千秋',
						zshy_ADcanglan: '孤身侠客',
						zshy_ADjiuri: '末世君主',
						zshy_ADzhan: '斩命龙骑',
						zshy_BAchuyinweilai: '最初之音',
						zshy_BAguyuefangyuan: '炼天魔尊',
						zshy_BAlongyi: '龙之末裔',
						zshy_BAyangjian: '鬼眼',
						zshy_BAyixiangren: '血源猎人',
						zshy_BBaisha: '亡灵圣女',
						zshy_BBlilimu: '翡翠恶魔',
						zshy_BCjinniuzuo: '金牛王座',
						zshy_Mguanyu: '威震华夏',
						zshy_Mzhangfei: '万夫不当',
						zshy_Mmachao: '西凉铁骑',
						zshy_Mzhaoyun: '七进七出',
						zshy_Mliubei: '仁义之士',
						zshy_Msunquan: '制衡之道',
						zshy_Mcaocao: '乱世奸雄',
						zshy_Myuanshu: '野心仲帝',
						zshy_Mlvmeng: '白衣渡江',
					},
					characterReplace: {
						zshy_Mguanyu: ['zshy_Mguanyu', 'zshy_ZguanyuBZ', 'zshy_ZshenguanyuSHZL'],
						zshy_Mzhangfei: ['zshy_Mzhangfei', 'zshy_ZzhangfeiBZ', 'zshy_ZshenzhangfeiXD'],
						zshy_Mmachao: ['zshy_Mmachao', 'zshy_ZmachaoBZ', 'zshy_ZshenmachaoXD'],
						zshy_Mzhaoyun: ['zshy_Mzhaoyun', 'zshy_ZzhaoyunBZ', 'zshy_ZshenzhaoyunSHZL', 'zshy_Yshenzhaoyun'],
						zshy_Mliubei: ['zshy_Mliubei', 'zshy_ZliubeiBZ', 'zshy_ZshenliubeiSHZL'],
						zshy_Msunquan: ['zshy_Msunquan', 'zshy_ZsunquanBZ'],
						zshy_Mcaocao: ['zshy_Mcaocao', 'zshy_ZcaocaoBZ', 'zshy_ZshencaocaoSHZL'],
						zshy_Myuanshu: ['zshy_Myuanshu', 'zshy_ZyuanshuBZ', 'zshy_ZyuanshuSHZL'],
						zshy_Mlvmeng: ['zshy_Mlvmeng', 'zshy_ZlvmengBZ', 'zshy_ZshenlvmengSHZL'],
						zshy_ZzhangliaoBZ: ['zshy_ZzhangliaoBZ', 'zshy_ZshenzhangliaoSHZL'],
						zshy_ZzhugeliangBZ: ['zshy_ZzhugeliangBZ', 'zshy_ZwolongzhugeSHZL', 'zshy_ZshenzhugeliangSHZL'],
						zshy_ZzhouyuBZ: ['zshy_ZzhouyuBZ', 'zshy_ZshenzhouyuSHZL'],
						zshy_ZluxunBZ: ['zshy_ZluxunBZ', 'zshy_ZshenluxunSHZL'],
						zshy_ZsimayiBZ: ['zshy_ZsimayiBZ', 'zshy_ZshensimayiSHZL'],
					},
					dynamicTranslate: {},
					card: {},
					skill: {
						zshy_AAanjing_Shenzun: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							filter(event, player) {
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							content() {
								if (!player.isDisabledJudge()) player.disableJudge();
								player.chat(['此局,聊戏莽夫而已.'].randomGet());
							},
							group: ['zshy_AAanjing_Shenzun_NTurn', 'zshy_AAanjing_Shenzun_Nchangejudge', 'zshy_AAanjing_Shenzun_Nusecard', 'zshy_AAanjing_Shenzun_Nusetodie', 'zshy_AAanjing_Shenzun_NChoosetodie', 'zshy_AAanjing_Shenzun_NDie', 'zshy_AAanjing_Shenzun_NNochange', 'zshy_AAanjing_Shenzun_NNodamage', 'zshy_AAanjing_Shenzun_NNodie', 'zshy_AAanjing_Shenzun_NFinality'],
							subSkill: {
								NTurn: {
									forced: true,
									trigger: {
										player: ['turnOverBefore'],
									},
									filter(event, player, name) {
										if (name != 'turnOverBefore') return true;
										return !player.isTurnedOver();
									},
									logTarget: 'source',
									content() {
										player.chat(['神尊之威,企是尔等能挡？'].randomGet());
										trigger.cancel();
									},
									ai: {
										noturn: true,
										noturnOver: true,
									},
								},
								Nchangejudge: {
									forced: true,
									lastDo: true,
									trigger: {
										global: 'judge',
									},
									forced: true,
									filter(event, player, name) {
										return true;
									},
									content() {
										'step 0';
										var str = '神尊:' + get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否将其改为1种花色？';
										player
											.chooseControl('spade', 'heart', 'diamond', 'club', 'none', 'cancel2')
											.set('prompt', str)
											.set('ai', function () {
												var judging = _status.event.judging;
												var trigger = _status.event.getTrigger();
												var res1 = trigger.judge(judging);
												var list = lib.suit.slice(0);
												var attitude = get.attitude(player, trigger.player);
												if (attitude == 0) return 0;
												var getj = function (suit) {
													return trigger.judge({
														name: judging.name,
														nature: get.nature(judging),
														suit: suit,
														number: judging.number,
													});
												};
												list.sort(function (a, b) {
													return (getj(b) - getj(a)) * get.sgn(attitude);
												});
												if ((getj(list[0]) - res1) * attitude > 0) return list[0];
												return 'cancel2';
											})
											.set('judging', trigger.player.judging[0]);
										('step 1');
										if (result.control != 'cancel2') {
											player.popup(result.control + 2);
											game.log(player, '将判定结果的花色改为了', '#y' + get.translation(result.control + 2));
											if (!trigger.fixedResult) trigger.fixedResult = {};
											trigger.fixedResult.suit = result.control;
											trigger.fixedResult.color = get.color({ suit: result.control });
										}
										player.chat(['改天换地,不过举手之间.'].randomGet());
									},
									ai: {
										rejudge: true,
										tag: {
											rejudge: 1,
										},
									},
								},
								Nusecard: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									silent: true,
									popup: false,
									lastDo: true,
									logTarget: 'source',
									filter(event, player, name) {
										return true;
									},
									content() {
										var card = trigger.card;
										trigger.baseDamage += Infinity;
										trigger.directHit.addArray(game.players);
										if (trigger.addCount !== false) {
											trigger.addCount = false;
											player.getStat('card')[card.name]--;
										}
									},
									ai: {
										presha: true,
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'sha';
										},
									},
								},
								Nusetodie: {
									trigger: {
										player: ['useCardAfter', 'respondAfter'],
									},
									forced: true,
									filter(event, player, name) {
										return true;
									},
									content() {
										'step 0';
										var str = '令一名其他角色死亡';
										player
											.chooseTarget(get.prompt('zshy_AAanjing_Shenzun_Nusetodie'), str, function (card, player, target) {
												return target != player;
											})
											.set('ai', function (target) {
												var player = _status.event.player;
												return get.damageEffect(target, player, player) / Math.sqrt(target.countCards('h'));
											});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											player.chat(['身死道消,不过如此.'].randomGet());
											target.die();
										}
									},
									ai: {
										expose: 1,
										threaten: 4,
									},
								},
								NChoosetodie: {
									enable: 'phaseUse',
									filterTarget(card, player, target) {
										return player != target;
									},
									prompt(event, player) {
										return '你可以选择一名角色死亡';
									},
									content() {
										player.chat(['身死道消,不过如此.'].randomGet());
										target.die();
									},
									ai: {
										order: 9,
										threaten: 1.1,
									},
								},
								NDie: {
									trigger: {
										source: 'damageBegin1',
									},
									forced: true,
									filter(event, player) {
										return player != event.player;
									},
									logTarget: 'player',
									content() {
										player.chat(['虚无之力,烬灭寰宇唯举手之间.'].randomGet());
										trigger.cancel();
										if (trigger.player != player) trigger.player.die();
										trigger.source = undefined;
										trigger._triggered = null;
									},
									ai: {
										damage: true,
									},
								},
								NNochange: {
									trigger: {
										player: ['damageBefore', 'recoverBefore', 'loseHpBefore', 'loseMaxHpBefore', 'gainMaxHpBefore'],
									},
									forced: true,
									logTarget: 'source',
									content() {
										trigger.cancel();
										if (trigger.source && trigger.source != player) {
											trigger.source.die();
										}//QQQ
									},
									ai: {
										nodamage: true,
										nofire: true,
										nothunder: true,
										notrick: true,
										nodu: true,
									},
								},
								NNodamage: {
									trigger: {
										player: ['damageBegin4'],
									},
									forced: true,
									logTarget: 'source',
									content() {
										player.chat(['虚无之力,烬灭寰宇唯举手之间.'].randomGet());
										trigger.cancel();
										if (trigger.source && trigger.source != player) {
											trigger.source.die();
										}//QQQ
									},
									ai: {
										nodamage: true,
										nofire: true,
										nothunder: true,
										notrick: true,
										nodu: true,
									},
								},
								NNodie: {
									forced: true,
									trigger: {
										player: ['dieBefore'],
									},
									logTarget: 'source',
									content() {
										trigger.cancel();
										player.chat(['虚无之身,尔等焉能毁之？'].randomGet());
										if (trigger.source && trigger.source != player) {
											trigger.source.die();
										}//QQQ
										if (player.maxHp < 1) {
											player.maxHp = 1;
										}
										player.hp = player.maxHp;
									},
									ai: {
										nodamage: true,
										nofire: true,
										nothunder: true,
										notrick: true,
										nodu: true,
									},
								},
								NFinality: {
									trigger: {
										global: 'dieBegin',
									},
									forced: true,
									firstDo: true,
									content() {
										player.chat(['身死道消,此局已了.'].randomGet());
										var winners = player.getFriends();
										game.over(player == game.me || winners.includes(game.me));
									},
								},
							},
							ai: {
								threaten: 4,
								noh: true,
								noe: true,
								nodu: true,
								save: true,
								usedu: true,
								maihp: true,
								noturn: true,
								maixie: true,
								nofire: true,
								presha: true,
								damage: true,
								jueqing: true,
								mingzhi: true,
								rejudge: true,
								notrick: true,
								useShan: true,
								nodamage: true,
								nothunder: true,
								norespond: true,
								nodiscard: true,
								noturnOver: true,
								damageBonus: true,
								filterDamage: true,
							},
						},
						zshy_AAanjing_Jinmie: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								return true;
							},
							filter(event, player) {
								return player.qcard().length;
							},
							chooseButton: {
								dialog(event, player) {
									var list = player.qcard();//QQQ
									return ui.create.dialog('虚无', [list, 'vcard']);
								},
								check(button) {
									var name = button.link[2];
									var player = _status.event.player;
									var evt = _status.event.parent;
									var card = { name: name, nature: button.link[3] };
									return evt.type == 'phase' ? player.getUseValue(card) : 1;
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										popname: true,
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
										},
										precontent() {
											player.chat(['虚无之力,万物皆可化之.'].randomGet());
										},
									};
								},
								prompt(links, player) {
									return '选择【' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '】的目标';
								},
							},
							mod: {
								maxHandcardBase(player, num) {
									return Infinity;
								},
								targetEnabled(card, player, target) {
									if (player != target) return false;
								},
								targetInRange(card) {
									return true;
								},
								cardUsable(card) {
									return Infinity;
								},
								canBeGained(card, player, target) {
									if (player != target && get.position(card) == 'hej') return false;
								},
								canBeDiscarded(card, player, target) {
									if (player != target && get.position(card) == 'hej') return false;
								},
								aiOrder(player, card, num) {
									if (card.name == 'sha') return num + 1;
								},
							},
							ai: {
								respondSha: true,
								respondShan: true,
								skillTagFilter(player) {
									if (player.isIn()) return true;
								},
								order() {
									return [1, 3, 5, 7, 9].randomGet();
								},
								result: {
									player(player) {
										if (_status.event.type == 'dying') {
											return get.attitude(player, _status.event.dying);
										}
										return 1;
									},
								},
							},
						},
						zshy_AAanjing_Wusheng: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							enable: 'phaseUse',
							init(player) {
								player.storage.zshy_AAanjing_Wusheng = [];
							},
							content() {
								('step 0');
								var list = player.qcard(false, false);//QQQ
								player.chooseButton(['无生', [list, 'vcard']], true).set('ai', function (button) {
									return list.randomGet();
								});
								('step 1');
								var cardx = game.createCard({ name: result.links[0][2] });
								player.chat(['无中生有,又有何难？'].randomGet());
								player.storage.zshy_AAanjing_Wusheng.add(cardx), player.gain(cardx, 'gain2');
							},
							ai: {
								order: 0,
								result: {
									player: 0,
								},
							},
							group: 'zshy_AAanjing_Wusheng_Destroy',
							subSkill: {
								Destroy: {
									trigger: {
										global: ['loseEnd', 'cardsDiscardEnd'],
									},
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										if (event.name == 'lose' && event.position != ui.discardPile) return false;
										var storage = player.storage.zshy_AAanjing_Wusheng;
										if (!storage) return false;
										for (var i of event.cards) {
											if (storage.includes(i)) return true;
										}
										return false;
									},
									content() {
										var cards = [];
										var storage = player.storage.zshy_AAanjing_Wusheng;
										for (var i of trigger.cards) {
											if (storage.includes(i)) {
												storage.remove(i);
												cards.push(i);
											}
										}
										game.cardsGotoSpecial(cards);
										game.log(cards, '被销毁了');
									},
								},
							},
						},
						zshy_AAanjing_Yanmie: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								return event.player != player;
							},
							prompt2(event, player) {
								return '令' + get.translation(event.card) + '无效';
							},
							check(event, player) {
								var effect = 0;
								if (event.card.name == 'wuxie' || event.card.name == 'shan') {
									if (get.attitude(player, event.player) < -1) effect = -1;
								} else if (event.targets && event.targets.length) {
									for (var i = 0; i < event.targets.length; i++) {
										effect += get.effect(event.targets[i], event.card, event.player, player);
									}
								}
								if (effect < 0) {
									if (event.card.name == 'sha') {
										var target = event.targets[0];
										if (target == player) return !player.countCards('h', 'shan');
										else return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
									} else return true;
								}
								return false;
							},
							logTarget: 'player',
							content() {
								('step 0');
								trigger.targets.length = 0;
								trigger.all_excluded = true;
								game.log(player, '令', trigger.card, '无效了');
								player.chat(['湮灭尔等,须臾之间.'].randomGet());
								('step 1');
								trigger.player.die();
							},
						},
						zshy_AAantianhen_xuying: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							filter(event, player) {
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							content() {
								if (!player.isDisabledJudge()) player.disableJudge();
							},
							group: ['zshy_AAantianhen_xuying_NTurn', 'zshy_AAantianhen_xuying_NDrawTo', 'zshy_AAantianhen_xuying_Nusecard', 'zshy_AAantianhen_xuying_NChoosetodie', 'zshy_AAantianhen_xuying_NDie', 'zshy_AAantianhen_xuying_NNochange', 'zshy_AAantianhen_xuying_NNodie'],
							subSkill: {
								NTurn: {
									forced: true,
									trigger: {
										player: ['turnOverBefore'],
									},
									filter(event, player, name) {
										if (name != 'turnOverBefore') return true;
										return !player.isTurnedOver();
									},
									logTarget: 'source',
									content() {
										trigger.cancel();
									},
								},
								NDrawTo: {
									trigger: {
										player: 'loseAfter',
										global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
									},
									forced: true,
									filter(event, player) {
										return player.countCards('h') < player.maxHp;
									},
									content() {
										player.drawTo(player.maxHp);
									},
									ai: {
										noh: true,
										skillTagFilter(player, tag) {
											if (tag == 'noh' && player.countCards('h') > player.maxHp) return false;
										},
									},
								},
								Nusecard: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									silent: true,
									popup: false,
									lastDo: true,
									logTarget: 'source',
									content() {
										var card = trigger.card;
										trigger.baseDamage += Infinity;
										trigger.directHit.addArray(game.players);
										if (trigger.addCount !== false) {
											trigger.addCount = false;
											player.getStat('card')[card.name]--;
										}
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'sha';
										},
									},
								},
								NChoosetodie: {
									enable: 'phaseUse',
									forced: true,
									filterTarget(card, player, target) {
										return player != target;
									},
									prompt(event, player) {
										return '你可以选择一名角色死亡';
									},
									content() {
										player.chat(['身死道消,不过如此.'].randomGet());
										target.die();
									},
									ai: {
										order: 9,
										threaten: 1.1,
									},
								},
								NDie: {
									trigger: {
										source: 'damageBegin1',
									},
									forced: true,
									filter(event, player) {
										return player != event.player;
									},
									logTarget: 'player',
									content() {
										trigger.source = undefined;
										trigger._triggered = null;
									},
								},
								NNochange: {
									trigger: {
										player: ['damageBefore', 'recoverBefore', 'loseHpBefore', 'loseMaxHpBefore', 'gainMaxHpBefore'],
									},
									forced: true,
									logTarget: 'source',
									content() {
										if (trigger.source != player) trigger.cancel();
										if (trigger.source && trigger.source != player) {
											trigger.source.die();
										}//QQQ
									},
								},
								NNodie: {
									forced: true,
									trigger: {
										player: ['dieBefore'],
									},
									logTarget: 'source',
									content() {
										trigger.cancel();
										if (trigger.source && trigger.source != player) {
											trigger.source.die();
										}//QQQ
										if (player.maxHp < 1) {
											player.maxHp = 1;
										}
										player.hp = player.maxHp;
									},
								},
							},
							ai: {
								threaten: 4,
								noh: true,
								noe: true,
								nodu: true,
								save: true,
								usedu: true,
								maihp: true,
								noturn: true,
								maixie: true,
								nofire: true,
								presha: true,
								damage: true,
								jueqing: true,
								mingzhi: true,
								rejudge: true,
								notrick: true,
								useShan: true,
								nodamage: true,
								nothunder: true,
								norespond: true,
								nodiscard: true,
								noturnOver: true,
								damageBonus: true,
								filterDamage: true,
							},
						},
						zshy_AAantianhen_miehen: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								return event.player != player;
							},
							prompt2(event, player) {
								return '令' + get.translation(event.card) + '无效';
							},
							check(event, player) {
								var effect = 0;
								if (event.card.name == 'wuxie' || event.card.name == 'shan') {
									if (get.attitude(player, event.player) < -1) effect = -1;
								} else if (event.targets && event.targets.length) {
									for (var i = 0; i < event.targets.length; i++) {
										effect += get.effect(event.targets[i], event.card, event.player, player);
									}
								}
								if (effect < 0) {
									if (event.card.name == 'sha') {
										var target = event.targets[0];
										if (target == player) return !player.countCards('h', 'shan');
										else return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
									} else return true;
								}
								return false;
							},
							logTarget: 'player',
							content() {
								('step 0');
								var list = ['灭痕', '行踪'];
								player
									.chooseControl(list, function () {
										if (get.effect(trigger.player, trigger.card, player, trigger.player) < 0) {
											return '灭痕';
										}
										return '行踪';
									})
									.set('prompt', '灭痕<br>灭痕:令此牌无效<br>行踪:使用一张手牌');
								('step 1');
								if (result.control == '灭痕') {
									trigger.targets.length = 0;
									trigger.all_excluded = true;
									game.log(player, '令', trigger.card, '无效了');
								} else {
									if (player.countCards('h')) {
										player.chooseToUse({
											filterCard(card, player) {
												if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
												return lib.filter.filterCard.apply(this, arguments);
											},
											prompt: '行踪:是否使用一张手牌？',
										});
									}
								}
							},
							mod: {
								maxHandcardBase(player, num) {
									return Infinity;
								},
								targetEnabled(card, player, target) {
									if (player != target) return false;
								},
								targetInRange(card) {
									return true;
								},
								cardUsable(card) {
									return Infinity;
								},
								aiOrder(player, card, num) {
									if (card.name == 'sha') return num + 1;
								},
							},
						},
						zshy_AAjiusheng_huanying: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								var type = get.type2(name);
								if (type == 'basic') return player.countCards('hs', { type: 'basic' });
								if (type == 'trick') return player.countCards('hs', { type: ['trick', 'delay'] });
							},
							filter(event, player) {
								for (var i of lib.inpile) {
									var type = get.type2(i),
										filter = event.filterCard;
									if (type == 'basic' && filter({ name: i }, player, event) && player.countCards('hs', { type: 'basic' })) return true;
									if (type == 'trick' && filter({ name: i }, player, event) && player.countCards('hs', { type: ['trick', 'delay'] })) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i of lib.inpile) {
										var type = get.type2(i),
											filter = event.filterCard;
										if (type == 'basic' && player.countCards('hs', { type: 'basic' })) {
											if (filter({ name: i }, player, event)) list.push(['基本', '', i]);
											if (i == 'sha') {
												for (var j of lib.inpile_nature) {
													if (filter({ name: i, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
												}
											}
										}
										if (type == 'trick' && player.countCards('hs', { type: ['trick', 'delay'] })) {
											if (filter({ name: i }, player, event)) list.push(['锦囊', '', i]);
										}
									}
									return ui.create.dialog('幻影', [list, 'vcard'], 'hidden');
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									var player = _status.event.player;
									return player.getUseValue({ name: button.link[2] }) + 1;
								},
								backup(links, player) {
									return {
										filterCard(card, player, target) {
											if (get.type(links[0][2]) == 'basic') return get.type2(card) == 'basic';
											return get.type2(card) == 'trick';
										},
										check(card, player, target) {
											return 15 - get.value(card);
										},
										viewAs: { name: links[0][2], nature: links[0][3] },
										position: 'hs',
										popname: true,
										precontent() {
										},
									};
								},
								prompt(links, player) {
									if (get.type(links[0][2]) != 'basic') return '将一张锦囊牌当做' + get.translation(links[0][2]) + '使用';
									return '将一张基本牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
								},
							},
							ai: {
								respondSha: true,
								respondShan: true,
								fireAttack: true,
								skillTagFilter(player, tag) {
									if (!player.countCards('hs', { type: 'basic' })) return false;
								},
								order: 1,
								result: {
									player(player) {
										if (_status.event.type == 'dying') {
											return get.attitude(player, _status.event.dying);
										}
										return 1;
									},
								},
							},
							group: ['zshy_AAjiusheng_huanying_Start', 'zshy_AAjiusheng_huanying_DrawTo', 'zshy_AAjiusheng_huanying_Usecard', 'zshy_AAjiusheng_huanying_Dying', 'zshy_AAjiusheng_huanying_Revive'],
							subSkill: {
								Start: {
									forced: true,
									trigger: {
										player: ['loseMaxHpBefore', 'turnOverBefore'],
									},
									filter(event, player, name) {
										if (name != 'turnOverBefore') return true;
										return !player.isTurnedOver();
									},
									content() {
										trigger.cancel();
									},
								},
								DrawTo: {
									trigger: {
										player: 'loseAfter',
										global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
									},
									forced: true,
									filter(event, player) {
										return player.countCards('h') < player.maxHp;
									},
									content() {
										player.drawTo(player.maxHp);
									},
									ai: {
										noh: true,
										skillTagFilter(player, tag) {
											if (tag == 'noh' && player.countCards('h') > player.maxHp) return false;
										},
									},
								},
								Usecard: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									silent: true,
									popup: false,
									lastDo: true,
									mod: {
										maxHandcardBase(player, num) {
											return Infinity;
										},
										targetInRange(card) {
											return true;
										},
										cardUsable(card) {
											return Infinity;
										},
										aiOrder(player, card, num) {
											if (card.name == 'sha') return num + 1;
										},
									},
									content() {
										var card = trigger.card;
										trigger.directHit.addArray(game.players);
										if (trigger.addCount !== false) {
											trigger.addCount = false;
											player.getStat('card')[card.name]--;
										}
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'sha';
										},
									},
								},
								Dying: {
									trigger: {
										player: ['damageBefore', 'loseHpBefore', 'dying'],
									},
									forced: true,
									logTarget: 'source',
									content() {
										trigger.cancel();
									},
								},
								Revive: {
									forced: true,
									trigger: {
										player: ['dieBefore'],
									},
									logTarget: 'source',
									content() {
										trigger.cancel();
										if (trigger.source && trigger.source != player) {
											trigger.source.die();
										}//QQQ
										if (player.maxHp < 1) {
											player.maxHp = 1;
										}
										player.hp = player.maxHp;
									},
								},
							},
						},
						zshy_AAjiusheng_mieshi: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								source: 'damageBegin1',
							},
							filter(event, player) {
								return player != event.player;
							},
							logTarget: 'player',
							content() {
								trigger.cancel();
								trigger.player.die();
							},
							group: ['zshy_AAjiusheng_mieshi_Start', 'zshy_AAjiusheng_mieshi_Choosetodie'],
							subSkill: {
								Start: {
									trigger: {
										global: 'phaseBefore',
										player: 'enterGame',
									},
									forced: true,
									filter(event, player) {
										return event.name != 'phase' || game.phaseNumber == 0;
									},
									content() {
										if (!player.isDisabledJudge()) player.disableJudge();
									},
								},
								Choosetodie: {
									enable: 'phaseUse',
									filterTarget(card, player, target) {
										return player != target;
									},
									content() {
										target.die();
									},
									ai: {
										order: 9,
										threaten: 1.1,
									},
								},
							},
						},
						zshy_ABjieke_ximing: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['loseMaxHpBefore', 'turnOverBefore'],
							},
							filter(event, player, name) {
								if (name != 'turnOverBefore') return true;
								return !player.isTurnedOver();
							},
							content() {
								trigger.cancel();
							},
							group: ['zshy_ABjieke_ximing_start', 'zshy_ABjieke_ximing_dying'],
							subSkill: {
								start: {
									trigger: {
										global: 'phaseBefore',
										player: 'enterGame',
									},
									forced: true,
									filter(event, player) {
										return event.name != 'phase' || game.phaseNumber == 0;
									},
									content() {
										if (!player.isDisabledJudge()) player.disableJudge();
									},
									mod: {
										targetInRange(card) {
											return true;
										},
										cardUsable(card) {
											return Infinity;
										},
										aiOrder(player, card, num) {
											if (card.name == 'sha') return num + 1;
										},
									},
								},
								dying: {
									trigger: {
										player: ['damageBefore', 'loseHpBefore', 'dieBefore'],
									},
									forced: true,
									logTarget: 'source',
									content() {
										trigger.cancel();
										player.chat(['戏命生死,此可伤吾？哈哈哈哈!'].randomGet());
									},
								},
							},
							ai: {
								nodamage: true,
								nofire: true,
								nothunder: true,
								notrick: true,
								nodu: true,
							},
						},
						zshy_ABjieke_mingpai: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['useCard', 'respond'],
							},
							content() {
								player.draw();
							},
							group: ['zshy_ABjieke_mingpai_carddamage'],
							subSkill: {
								carddamage: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									silent: true,
									popup: false,
									lastDo: true,
									content() {
										var num = trigger.card.number;
										trigger.baseDamage = num;
									},
								},
							},
							ai: {
								threaten: 4,
								presha: true,
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 0.1];
									},
								},
							},
						},
						zshy_AChonglian_yehuo: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['loseMaxHpBefore', 'damageBefore', 'loseHpBefore'],
							},
							content() {
								trigger.cancel();
								player.chat(['业火焚罪,此过乃消……'].randomGet());
							},
							mod: {
								targetInRange(card) {
									return true;
								},
							},
							ai: {
								nodamage: true,
								nofire: true,
								nothunder: true,
								notrick: true,
								nodu: true,
							},
						},
						zshy_AChonglian_fenzui: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							content() {
								('step 0');
								var str = '令一名其他角色弃置所有牌名为【' + get.translation(trigger.card.name) + '】的牌';
								str += ',你摸一张牌并减少其1点体力上限';
								player
									.chooseTarget(get.prompt('zshy_AChonglian_fenzui'), str, function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player) / Math.sqrt(target.countCards('h'));
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									var name = trigger.card.name;
									var cards = target.getCards('he', { name: name });
									target.discard(cards);
									player.draw();
									target.damage('kami');
								}
							},
							ai: {
								expose: 1,
								threaten: 4,
								damage: true,
							},
						},
						zshy_ACmohen_moji: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['loseMaxHpBefore', 'damageBefore', 'loseHpBefore'],
							},
							content() {
								trigger.cancel();
								player.chat(['以身化墨,不触分毫.'].randomGet());
							},
							group: ['zshy_ACmohen_moji_Damage'],
							subSkill: {
								Damage: {
									trigger: {
										source: ['damageBegin4'],
									},
									charlotte: true,
									forced: true,
									popup: false,
									silent: true,
									lastDo: true,
									filter(event, player, target) {
										return target != player && !event.hasNature('kami');
									},
									logTarget: 'player',
									content() {
										trigger.cancel();
										trigger.player.damage(trigger.num, 'kami').source = player;
									},
									ai: {
										damage: true,
										expose: 1,
										threaten: 4,
									},
								},
							},
							ai: {
								nodamage: true,
								nofire: true,
								nothunder: true,
								notrick: true,
								nodu: true,
							},
						},
						zshy_ACmohen_rumu: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: 'useCard',
							},
							silent: true,
							popup: false,
							lastDo: true,
							content() {
								trigger.directHit.addArray(game.players);
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									return arg.card.name == 'sha';
								},
							},
						},
						zshy_ACmohen_sanfen: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							firstDo: true,
							filter(event, player) {
								if (event.targets.length <= 0) return false;
								if (!['basic', 'trick'].includes(get.type(event.card, false))) return false;
								if (event.card.storage && event.card.storage.zshy_ACmohen_sanfen) return false;
								if (event.card.storage && event.card.storage.zshy_ACmohen_sanfen_double) return false;
								return true;
							},
							content() {
								('step 0');
								event.targets = trigger.targets;
								event.cardx = {
									name: trigger.card.name,
									nature: trigger.card.nature,
									storage: {
										zshy_ACmohen_sanfen: true,
									},
								};
								player
									.chooseTarget(
										get.prompt('zshy_ACmohen_sanfen'),
										function (card, player, target) {
											return lib.filter.targetEnabled2(event.cardx, player, target);
										},
										'视为对一名角色使用一张' + get.translation(event.cardx)
									)
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.effect(target, event.cardx, player);
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.targetx = target;
									player.useCard(event.cardx, target, false);
								} else event.finish();
							},
							group: ['zshy_ACmohen_sanfen_Double'],
							subSkill: {
								Double: {
									trigger: {
										player: 'useCardAfter',
									},
									forced: true,
									lastDo: true,
									filter(event, player) {
										if (event.targets.length <= 0) return false;
										if (!['basic', 'trick'].includes(get.type(event.card, false))) return false;
										if (event.card.storage && event.card.storage.zshy_ACmohen_sanfen) return false;
										if (event.card.storage && event.card.storage.zshy_ACmohen_sanfen_double) return false;
										return true;
									},
									content() {
										('step 0');
										event.targets = trigger.targets;
										event.cardx = {
											name: trigger.card.name,
											nature: trigger.card.nature,
											storage: {
												zshy_ACmohen_sanfen_double: true,
											},
										};
										player
											.chooseTarget(
												get.prompt('zshy_ACmohen_sanfen_double'),
												function (card, player, target) {
													return lib.filter.targetEnabled2(event.cardx, player, target);
												},
												'视为对一名角色使用一张' + get.translation(event.cardx)
											)
											.set('ai', function (target) {
												var player = _status.event.player;
												return get.effect(target, event.cardx, player);
											});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											event.targetx = target;
											player.useCard(event.cardx, target, false);
										} else event.finish();
									},
								},
							},
						},
						zshy_ACmohen_huamo: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: 'gainAfter',
							},
							check: () => true,
							filter(event, player) {
								return player.countCards('he');
							},
							content() {
								('step 0');
								var cards = player.getCards('h');
								if (cards.length) {
									player.loseToSpecial(cards, 'zshy_ACmohen_huamo');
									game.log(player, '将所有手牌放到了武将牌上');
								} else event.finish();
								('step 1');
								player.markSkill('zshy_ACmohen_huamo');
							},
							marktext: '墨',
							intro: {
								mark(dialog, storage, player) {
									dialog.addSmall(
										player.getCards('s', function (card) {
											return card.hasGaintag('zshy_ACmohen_huamo');
										})
									);
								},
								markcount(storage, player) {
									return player.getCards('s', function (card) {
										return card.hasGaintag('zshy_ACmohen_huamo');
									}).length;
								},
								onunmark(storage, player) {
									var cards = player.getCards('s', function (card) {
										return card.hasGaintag('zshy_ACmohen_huamo');
									});
									if (cards.length) {
										player.lose(cards, ui.discardPile);
										player.$throw(cards, 1000);
										game.log(cards, '进入了弃牌堆');
									}
								},
							},
							group: ['zshy_ACmohen_huamo_Start', 'zshy_ACmohen_huamo_Deputy'],
							subSkill: {
								Start: {
									audio: 'zshy_ACmohen_huamo',
									trigger: {
										global: 'phaseBefore',
										player: 'enterGame',
									},
									forced: true,
									filter(event, player) {
										return event.name != 'phase' || game.phaseNumber == 0;
									},
									content() {
										('step 0');
										var cards = player.getCards('h');
										if (cards.length) {
											player.loseToSpecial(cards, 'zshy_ACmohen_huamo');
											game.log(player, '将所有手牌放到了武将牌上');
										} else event.finish();
										('step 1');
										player.markSkill('zshy_ACmohen_huamo');
									},
								},
								Deputy: {
									audio: 'zshy_ACmohen_huamo',
									trigger: {
										player: 'loseAfter',
									},
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										if (!event.ss || !event.ss.length) return false;
										for (var i in event.gaintag_map) {
											if (event.gaintag_map[i].includes('zshy_ACmohen_huamo')) return true;
											return false;
										}
									},
									content() {
										var num = player.getCards('s', function (card) {
											return card.hasGaintag('zshy_ACmohen_huamo');
										}).length;
										if (num > 0) player.markSkill('zshy_ACmohen_huamo');
										else player.unmarkSkill('zshy_ACmohen_huamo');
									},
								},
							},
						},
						zshy_ADcanglan_guying: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['damageBegin4'],
							},
							forced: true,
							content() {
								trigger.cancel();
								player.removeMark('zshy_ADcanglan_guying', 1);
							},
							marktext: '影痕',
							intro: {
								name2: '影痕',
								content: '你造成的伤害+#',
							},
							group: ['zshy_ADcanglan_guying_Damage', 'zshy_ADcanglan_guying_NoChange'],
							subSkill: {
								Damage: {
									forced: true,
									trigger: {
										source: ['loseMaxHpBefore', 'damageBegin4', 'loseHpBefore'],
									},
									content() {
										player.addMark('zshy_ADcanglan_guying', 1);
									},
									ai: {
										norespond: true,
									},
								},
								NoChange: {
									trigger: {
										player: ['loseMaxHpBefore', 'damageBegin4', 'loseHpBegin'],
									},
									forced: true,
									popup: false,
									silent: true,
									firstDo: true,
									content() {
										trigger.cancel();
										player.chat(['孤影吊寒梅,红妆人未归.'].randomGet());
									},
								},
							},
							ai: {
								nodamage: true,
								nofire: true,
								nothunder: true,
								notrick: true,
							},
						},
						zshy_ADcanglan_anxing: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'phaseBegin',
								player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'],
							},
							content() {
								('step 0');
								player.draw();
								if (player.countCards('h')) {
									player.chooseToUse({
										filterCard(card, player) {
											if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										prompt: '暗行:是否使用一张手牌？',
									});
								}
							},
							group: ['zshy_ADcanglan_anxing_Usecard', 'zshy_ADcanglan_anxing_Sha'],
							subSkill: {
								Usecard: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									firstDo: true,
									content() {
										trigger.directHit.addArray(
											game.filterPlayer(function (current) {
												return current != player;
											})
										);
									},
									ai: {
										norespond: true,
										directHit_ai: true,
									},
								},
								Sha: {
									trigger: {
										source: 'damageBegin3',
									},
									forced: true,
									silent: true,
									popup: false,
									lastDo: true,
									content() {
										var pnum = player.countMark('zshy_ADcanglan_guying');
										trigger.num += pnum;
									},
									ai: {
										presha: true,
										damageBonus: true,
									},
									mod: {
										attackRangeBase() {
											return Infinity;
										},
									},
								},
							},
						},
						zshy_ADjiuri_junwei: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['damageBegin4'],
							},
							filter(event, player, target) {
								return player.countMark('zshy_ADjiuri_junwei') < player.maxHp;
							},
							content() {
								('step 0');
								player
									.chooseTarget('是否选择一名其他角色替你受到伤害？', function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var evt = _status.event;
										return get.effect(target, { name: 'damage' }, evt.source, evt.player);
									});
								('step 1');
								if (result.bool) {
									trigger.cancel();
									result.targets[0].damage(trigger.num, trigger.nature).source = trigger.source;
									player.draw(trigger.num);
									player.addMark('zshy_ADjiuri_junwei', 1);
								}
							},
							marktext: '君威',
							intro: {
								name2: '君威',
								content: '已被冒犯#次',
							},
							group: ['zshy_ADjiuri_junwei_end'],
							subSkill: {
								end: {
									trigger: {
										source: ['damageEnd'],
									},
									forced: true,
									popup: false,
									silent: true,
									firstDo: true,
									filter(event, player, target) {
										return player.countMark('zshy_ADjiuri_junwei') > 0;
									},
									content() {
										var num = player.countMark('zshy_ADjiuri_junwei');
										player.removeMark('zshy_ADjiuri_junwei', num);
									},
								},
							},
							ai: {
								expose: 1,
								link: true,
								maixie(event, player, target) {
									return player.countMark('zshy_ADjiuri_junwei') < player.maxHp;
								},
								damage: true,
								nofire(event, player, target) {
									return player.countMark('zshy_ADjiuri_junwei') < player.maxHp;
								},
								notrick(event, player, target) {
									return player.countMark('zshy_ADjiuri_junwei') < player.maxHp;
								},
								mingzhi: true,
								nodamage(event, player, target) {
									return player.countMark('zshy_ADjiuri_junwei') < player.maxHp;
								},
								nothunder(event, player, target) {
									return player.countMark('zshy_ADjiuri_junwei') < player.maxHp;
								},
								filterDamage: true,
							},
						},
						zshy_ADjiuri_zuifa: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								source: ['damageEnd'],
								player: ['damageEnd'],
							},
							forced: true,
							filter(event, player, target) {
								return event.player == player || !player.getStorage('zshy_ADjiuri_zuifa').includes(event.player);
							},
							content() {
								('step 0');
								event.count = Math.min(trigger.num, 9);
								('step 1');
								event.count--;
								player.chooseTarget(get.prompt('zshy_ADjiuri_zuifa'), '对一名角色造成普通、冰、火、雷、神属性伤害各1点').set('ai', function (target) {
									var player = _status.event.player;
									return get.attitude(player, target) < 0.3;
								});
								('step 2');
								if (result.targets?.length) {
									result.targets[0].damage(1).source = null;
									result.targets[0].damage(1, 'ice').source = null;
									result.targets[0].damage(1, 'fire').source = null;
									result.targets[0].damage(1, 'thunder').source = null;
									result.targets[0].damage(1, 'kami').source = null;
								}
								('step 3');
								if (event.count > 0) {
									event.goto(1);
								}
							},
							ai: {
								expose: 1,
								link: true,
								maixie: true,
								damage: true,
							},
						},
						zshy_BAchuyinweilai_xuni: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['damageBegin3', 'loseHpBegin'],
							},
							check: () => true,
							filter(event, player) {
								return player.countMark('zshy_BAchuyinweilai_huanyin') > 0;
							},
							content() {
								trigger.cancel();
								player.removeMark('zshy_BAchuyinweilai_huanyin', 1);
							},
							ai: {
								filterDamage: true,
								skillTagFilter(player, tag) {
									if (player.countMark('zshy_BAchuyinweilai_huanyin') > player.maxHp) return false;
								},
							},
						},
						zshy_BAchuyinweilai_huanyin: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							lastDo: true,
							forced: true,
							fixed: true,
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								return player.countMark('zshy_BAchuyinweilai_huanyin') > 0;
							},
							filter(event, player) {
								return player.countMark('zshy_BAchuyinweilai_huanyin') > 0 && player.qcard().length;
							},
							chooseButton: {
								//每回合限X次,当你需要使用或打出一张牌时,则你可以发动技能〖幻音〗,视为使用或打出一张基本牌或普通锦囊牌.(X为你的体力上限)<li>你使用的🃏牌无距离与次数限制、不可响应且牌面数值+Y.(Y为〖幻音〗剩余使用次数)<li>当你的体力减少时,重置本回合使用次数
								dialog(event, player) {
									const list = player.qcard();
									return ui.create.dialog('幻音', [list, 'vcard']);
								},//QQQ
								check(button) {
									var name = button.link[2];
									var player = _status.event.player;
									var evt = _status.event.parent;
									var card = { name: name, nature: button.link[3] };
									return evt.type == 'phase' ? player.getUseValue(card) : 1;
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										popname: true,
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
										},
										precontent() {
											player.removeMark('zshy_BAchuyinweilai_huanyin', 1);
										},
									};
								},
								prompt(links, player) {
									return '选择【' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '】的目标';
								},
							},
							marktext: '幻音',
							intro: {
								content: '当前已拥有#枚「幻音」',
							},
							ai: {
								respondSha: true,
								respondShan: true,
								skillTagFilter(player) {
									if (player.isIn()) return true;
								},
								order() {
									return [1, 3, 5, 7, 9].randomGet();
								},
								result: {
									player(player) {
										if (_status.event.type == 'dying') {
											return get.attitude(player, _status.event.dying);
										}
										return 1;
									},
								},
							},
							group: ['zshy_BAchuyinweilai_huanyin_Add', 'zshy_BAchuyinweilai_huanyin_Norespond'],
							subSkill: {
								Add: {
									trigger: {
										global: ['phaseBefore'],
										player: ['damageBegin4', 'loseHpBegin'],
									},
									forced: true,
									popup: false,
									silent: true,
									firstDo: true,
									filter(event, player, target) {
										return true;
									},
									content() {
										var x = player.maxHp,
											y = player.countMark('zshy_BAchuyinweilai_huanyin');
										if (y < x) player.addMark('zshy_BAchuyinweilai_huanyin', x - y);
										else if (y > x) player.removeMark('zshy_BAchuyinweilai_huanyin', y - x);
									},
								},
								Norespond: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									silent: true,
									popup: false,
									lastDo: true,
									filter(event, player) {
										return get.color(event.card) == 'none';
									},
									content() {
										var card = trigger.card;
										var num = player.countMark('zshy_BAchuyinweilai_huanyin');
										trigger.baseDamage += num;
										trigger.directHit.addArray(game.players);
										if (trigger.addCount !== false) {
											trigger.addCount = false;
											player.getStat('card')[card.name]--;
										}
									},
									ai: {
										damageBonus: true,
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'sha' && get.color(arg.card) == 'none';
										},
									},
								},
							},
						},
						zshy_BAguyuefangyuan_liandao: {
						},
						zshy_BAlongyi_moyi: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								global: ['dieAfter'],
							},
							filter(event, player, target) {
								return true;
							},
							content() {
								player.addMark('zshy_BAlongyi_moyi', 1);
								player.recover(1);
								player.draw(2);
							},
							marktext: '龙魂',
							intro: {
								name2: '龙魂',
								content: '血脉中的龙魂被激发出来,拥有非比寻常的力量.<br>当前拥有龙魂:#颗.<br>当前手牌上限+#.<br>当前出【杀】次数+#.',
							},
							group: ['zshy_BAlongyi_moyi_Start', 'zshy_BAlongyi_moyi_Die'],
							subSkill: {
								Start: {
									trigger: {
										player: ['enterGame'],
										global: ['phaseBefore'],
									},
									forced: true,
									filter(event, player) {
										return event.name != 'phase' || game.phaseNumber == 0;
									},
									content() {
										player.addMark('zshy_BAlongyi_moyi', 1);
										player.recover(1);
										player.draw(2);
									},
								},
								Die: {
									trigger: {
										player: ['dieBefore'],
									},
									filter(event, player) {
										return player.countMark('zshy_BAlongyi_moyi') > 0;
									},
									content() {
										trigger.cancel();
										player.removeMark('zshy_BAlongyi_moyi', 1);
										player.hp = player.maxHp;
										player.draw(4);
									},
								},
							},
						},
						zshy_BAlongyi_baitong: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							lastDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							filter(event, player, target) {
								return player != _status.currentPhase;
							},
							content() {
								player.draw();
								if (player.countCards('h')) {
									player.chooseToUse({
										filterCard(card, player) {
											if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
											if (get.type(card) == get.type(trigger.card)) return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										prompt: '百通:是否使用一张手牌？',
									});
								}
							},
							ai: {
								useShan() {
									return player != _status.currentPhase;
								},
							},
							group: ['zshy_BAlongyi_baitong_Draw'],
							subSkill: {
								Draw: {
									trigger: {
										player: ['phaseDrawBegin2'],
									},
									forced: true,
									preHidden: true,
									filter(event, player) {
										return !event.numFixed;
									},
									content() {
										var num = player.countMark('zshy_BAlongyi_moyi');
										trigger.num += num;
									},
									ai: {
										threaten: 1.5,
									},
									forced: true,
									silent: true,
									popup: false,
									lastDo: true,
									mod: {
										maxHandcard(player, num) {
											return num + player.countMark('zshy_BAlongyi_moyi');
										},
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + player.countMark('zshy_BAlongyi_moyi');
										},
									},
								},
							},
						},
						zshy_BAyangjian_guiqu: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},//QQQ
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								source: ['damageAfter'],
							},
							content() {
								('step 0');
								var target = trigger.player,
									list = [],
									choiceList = ['令' + get.translation(target) + '减少1点体力上限并回复1点体力', '移除' + get.translation(target) + '武将牌的1个技能并摸两张牌', '获得并移除' + get.translation(target) + '武将牌1个技能'];
								if (trigger.num >= 1) list.push('选项一');
								else choiceList[0] = '<span style="opacity:0.5">"+choiceList[0]+"</span>';
								event.list1 = target.getSkills(true, false).filter((skill) => {
									if (skill == 'jiu') return false;
									if (!lib.translate[skill + '_info']) return false;
									if (lib.translate[skill + '_info'] == '') return false;
									var info = get.info(skill);
									if (!info) return false;
									return true;
								});
								if (event.list1.length && trigger.num >= 2) list.push('选项二');
								event.list2 = target.getSkills(true, false).filter((skill) => {
									if (skill == 'jiu') return false;
									if (player.hasSkill(skill)) return false;
									if (!lib.translate[skill + '_info']) return false;
									if (lib.translate[skill + '_info'] == '') return false;
									var info = get.info(skill);
									if (!info) return false;
									return true;
								});
								if (event.list2.length && trigger.num >= 3) list.push('选项三');
								player
									.chooseControl(list, 'cancel2')
									.set('choiceList', choiceList)
									.set('ai', function () {
										var att = get.attitude(player, target);
										if (att < 0) {
											if (event.list2.length && trigger.num >= 3) return '选项三';
											if (event.list1.length && trigger.num == 2) return '选项二';
											return '选项一';
										} else return 'cancel2';
									});
								('step 1');
								if (result.control != 'cancel2') {
									var target = trigger.player;
									event.target = target;
									if (result.control == '选项一') {
										target.loseMaxHp();
										player.recover();
										event.finish();
									} else if (result.control == '选项二') {
										var lists = event.list1;
										event.videoId = lib.status.videoId++;
										var func = function (skills, id) {
											var dialog = ui.create.dialog('forcebutton');
											dialog.videoId = id;
											dialog.add('鬼躯:请选择要移除的1个技能,摸两张牌并回复1点体力');
											for (var i = 0; i < skills.length; i++) {
												if (lib.translate[lists[i] + '_info']) {
													var translation = get.translation(lists[i]);
													if (translation[0] == '新' && translation.length == 3) translation = translation.slice(1, 3);
													else translation = translation.slice(0, 2);
													dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
												}
											}
											dialog.addText('<br>');
										};
										if (player == game.me) func(lists, event.videoId);
										player.chooseControl(lists, true).set('ai', function () {
											return lists.randomGet();
										});
									} else {
										var lists = event.list2;
										event.videoId = lib.status.videoId++;
										var func = function (skills, id) {
											var dialog = ui.create.dialog('forcebutton');
											dialog.videoId = id;
											dialog.add('鬼躯:请选择要获得并移除的1个技能');
											for (var i = 0; i < skills.length; i++) {
												if (lib.translate[lists[i] + '_info']) {
													var translation = get.translation(lists[i]);
													if (translation[0] == '新' && translation.length == 3) translation = translation.slice(1, 3);
													else translation = translation.slice(0, 2);
													dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
												}
											}
											dialog.addText('<br>');
										};
										if (player == game.me) func(lists, event.videoId);
										player.chooseControl(lists, true).set('ai', function () {
											return lists.randomGet();
										});
										event.goto(3);
									}
								} else event.finish();
								('step 2');
								game.broadcastAll('closeDialog', event.videoId);
								var link = result.control;
								target.popup(link);
								target.removeSkill(link);
								player.draw(2);
								player.recover();
								game.log(target, '失去了技能', '【' + get.translation(link) + '】');
								event.finish();
								('step 3');
								game.broadcastAll('closeDialog', event.videoId);
								var link = result.control;
								player.addSkillLog(link);
								target.popup(link);
								target.removeSkill(link);
								game.log(target, '失去了技能', '【' + get.translation(link) + '】');
							},
							group: ['zshy_BAyangjian_guiqu_effect'],
							subSkill: {
								effect: {
									charlotte: true,
									trigger: { player: 'useCardToPlayered' },
									forced: true,
									popup: false,
									logTarget: 'target',
									filter(event, player) {
										return player.hp > event.target.hp;
									},
									content() {
										game.log(trigger.target, '不能响应', trigger.card);
										trigger.directHit.push(trigger.target);
									},
								},
							},
						},
						zshy_BAyangjian_guiyan: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['gainMaxHpEnd'],
							},
							filter(event, player) {
								return player.maxHp > 10;
							},
							content() {
								player.die();
							},
							group: ['zshy_BAyangjian_guiyan_dying', 'zshy_BAyangjian_guiyan_HaveLook'],
							subSkill: {
								dying: {
									trigger: {
										player: ['damageBegin4', 'loseHpBegin', 'dying'],
									},
									forced: true,
									filter(event, player) {
										return player.hp - event.num <= 0 && player.maxHp > 0;
									},
									logTarget: 'source',
									content() {
										trigger.cancel();
										player.gainMaxHp();
										player.recover(1 - player.hp);
										if (trigger.source != player) trigger.source.damage(player.maxHp + 1);
									},
								},
								HaveLook: {
									trigger: {
										global: 'phaseBefore',
										player: 'enterGame',
									},
									forced: true,
									firstDo: true,
									filter(event, player) {
										return !player.hasSkill('zshy_BAyangjian_guiyan_Look');
									},
									content() {
										player.addSkill('zshy_BAyangjian_guiyan_Look');
									},
								},
								Look: {
									charlotte: true,
									mark: true,
									marktext: '鬼眼',
									intro: {
										mark(dialog, content, player) {
											if (player != game.me) return '۩' + get.translation(player) + '观看牌堆中';
											var list = [];
											var num1 = Math.min(player.maxHp, ui.cardPile.childElementCount);
											for (var i = 0; i < num1; i++) {
												list.push(ui.cardPile.childNodes[i]);
											}
											dialog.addSmall(list);
										},
									},
								},
							},
						},
						zshy_BAyixiangren_xueyuan: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['damageBefore'],
							},
							derivation: ['zshy_BAyixiangren_xuezhou'],
							logTarget: 'source',
							filter(event, player, target) {
								return target != player;
							},
							content() {
								if (trigger.num > 1) trigger.cancel();
								if (trigger.source != player) {
									trigger.source.addMark('zshy_BAyixiangren_xuezhou', trigger.num);
									trigger.source.addSkill('zshy_BAyixiangren_xuezhou');
								}
							},
							group: ['zshy_BAyixiangren_xueyuan_base'],
							subSkill: {
								base: {
									trigger: {
										player: ['loseHpBefore', 'loseMaxHpBefore'],
									},
									forced: true,
									firstDo: true,
									logTarget: 'source',
									filter(event, player, target) {
									},
									content() {
										trigger.cancel();
									},
									ai: {
										filterDamage: true,
										effect: {
											target(card, player, target, current) {
												if (player.hasSkillTag('jueqing', false, target)) return 0;
												if (get.tag(card, 'loseHp')) return 0;
											},
										},
									},
								},
							},
						},
						zshy_BAyixiangren_lieshen: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								source: ['damageBefore'],
							},
							derivation: ['zshy_BAyixiangren_xuezhou'],
							logTarget: 'player',
							filter(event, player, target) {
								return target != player;
							},
							content() {
								if (trigger.player != player) {
									trigger.player.addMark('zshy_BAyixiangren_xuezhou', trigger.num);
									trigger.player.addSkill('zshy_BAyixiangren_xuezhou');
								}
							},
							group: ['zshy_BAyixiangren_lieshen_die'],
							subSkill: {
								die: {
									trigger: {
										global: 'dieBefore',
									},
									forced: true,
									filter(event, player) {
										return event.player != player && event.player.countMark('zshy_BAyixiangren_xuezhou') > 0;
									},
									content() {
										'step 0';
										var list = [];
										var skills = trigger.player.getSkills(true, false).filter((skill) => {
											if (skill == 'jiu') return false;
											if (skill == 'zshy_BAyixiangren_xuezhou') return false;
											if (player.hasSkill(skill)) return false;
											if (!lib.translate[skill + '_info']) return false;
											if (lib.translate[skill + '_info'] == '') return false;
											var info = get.info(skill);
											if (!info) return false;
											return true;
										});
										if (!skills.length) {
											event.finish();
											return;
										} else {
											for (var skill of skills) {
												list.push([skill, '<div class="popup text" style="width:calc(100%-10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
											}
											var next = player.chooseButton(['猎神:请选择获得任意个技能', [list, 'textbutton']]);
											next.set('forced', false);
											next.set('selectButton', [0, skills.length]);
											next.set('ai', function (button) {
												return Math.random();
											});
											next.set('skills', skills);
										}
										('step 1');
										if (result.links?.length) {
											var skills = result.links;
											player.addSkill(skills.slice(0));
											game.log(player, '获得了以下技能:', '#g' + get.translation(skills));
											var marknum = trigger.player.countMark('zshy_BAyixiangren_xuezhou');
											player.gainMaxHp();
											player.recover();
											player.draw(marknum);
										}
									},
								},
							},
						},
						zshy_BAyixiangren_xunying: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								target: 'useCardToTarget',
							},
							filter(event, player, target) {
								return event.player != player;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								var list = ['反击', '闪避'];
								player
									.chooseControl(list, function () {
										if (get.effect(trigger.player, trigger.card, player, trigger.player) < 0) {
											if (get.tag(cards, 'damage')) {
												return '闪避';
											} else {
												return '反击';
											}
										} else return '闪避';
									})
									.set('prompt', '迅影<br>反击:你使用一张牌<br>闪避:若「闪避」不大于你的体力值,则令此牌对你无效');
								('step 2');
								if (result.control == '反击') {
									if (player.countCards('h')) {
										player.chooseToUse({
											filterCard(card, player) {
												if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
												return lib.filter.filterCard.apply(this, arguments);
											},
											prompt: '反击:是否使用一张手牌？',
										});
									} else event.finish();
								} else {
									if (player.countMark('zshy_BAyixiangren_xunying') < player.hp) {
										trigger.targets.remove(player);
										trigger.parent.triggeredTargets2.remove(player);
										trigger.untrigger();
										game.log(player, '令', trigger.card, '对其无效');
										player.addMark('zshy_BAyixiangren_xunying', 1);
									} else event.finish();
								}
							},
							marktext: '闪避',
							intro: {
								name2: '闪避',
								content: '本回合已闪避#次',
							},
							group: ['zshy_BAyixiangren_xunying_end'],
							subSkill: {
								end: {
									trigger: {
										global: ['phaseEnd'],
									},
									forced: true,
									popup: false,
									silent: true,
									firstDo: true,
									filter(event, player, target) {
										return player.countMark('zshy_BAyixiangren_xunying') > 0;
									},
									content() {
										var num = player.countMark('zshy_BAyixiangren_xunying');
										player.removeMark('zshy_BAyixiangren_xunying', num);
									},
								},
							},
						},
						zshy_BAyixiangren_xuezhou: {
							onremove(player, skill) {
								player.addSkillLog(skill);
							},
							_priority: -Infinity,
							superCharlotte: true,
							charlotte: true,
							forced: true,
							firstDo: true,
							forced: true,
							fixed: true,
							trigger: {
								player: ['recoverBefore', 'gainMaxHpBefore', 'phaseBegin', 'roundStart'],
							},
							mark: true,
							marktext: '血咒',
							intro: {
								name2: '血咒',
								content: '受到血咒,当前手牌上限-#.',
							},
							filter(event, player) {
								return player.hasMark('zshy_BAyixiangren_xuezhou');
							},
							content() {
								if (trigger.name == 'gainMaxHpBefore') {
									trigger.cancel();
								} else if (trigger.name == 'recoverBefore') {
									player.loseMaxHp(trigger.num);
								} else if (trigger.name == 'roundStart') {
									player.loseMaxHp();
								} else if (trigger.name == 'phaseBegin') {
									player.loseHp();
								}
								player.addMark('zshy_BAyixiangren_xuezhou', trigger.num);
							},
							mod: {
								maxHandcard(player, num) {
									return num - player.countMark('zshy_BAyixiangren_xuezhou');
								},
							},
						},
						zshy_BBaisha_jihun: {
							trigger: {
								global: ['dieBefore'],
							},
							forced: true,
							charlotte: true,
							filter(event, player, target) {
								return event.player != player;
							},
							content() {
								'step 0';
								var list = [];
								var skills = trigger.player.getSkills(true, false).filter((skill) => {
									if (skill == 'jiu') return false;
									if (skill == 'zshy_BBaisha_wangling') return false;
									if (player.hasSkill(skill)) return false;
									if (!lib.translate[skill + '_info']) return false;
									if (lib.translate[skill + '_info'] == '') return false;
									var info = get.info(skill);
									if (!info) return false;
									return true;
								});
								if (!skills.length) {
									event.finish();
									return;
								} else {
									for (var skill of skills) {
										list.push([skill, '<div class="popup text" style="width:calc(100%-10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
									}
									var next = player.chooseButton(['汲魂:请选择获得的一个技能', [list, 'textbutton']]);
									next.set('forced', false);
									next.set('selectButton', [0, 1]);
									next.set('ai', function (button) {
										return Math.random();
									});
									next.set('skills', skills);
								}
								('step 1');
								if (result.links?.length) {
									var skills = result.links;
									player.addSkill(skills.slice(0));
									game.log(player, '获得了以下技能:', '#g' + get.translation(skills));
								}
							},
							group: ['zshy_BBaisha_jihun_damage'],
							subSkill: {
								damage: {
									trigger: {
										player: ['damageEnd', 'dieBefore'],
									},
									forced: true,
									charlotte: true,
									content() {
										'step 0';
										if (event.name == 'dieBefore') {
											player.gainMaxHp();
										} else {
											player.draw();
										}
									},
								},
							},
						},
						zshy_BBaisha_fusheng: {
							trigger: {
								global: ['dieBegin'],
							},
							forceDie: true,
							charlotte: true,
							derivation: ['zshy_BBaisha_wangling'],
							check(event, player) {
								if (event.player == game.zhu) {
									if (player == event.player || player.identity == 'zhong' || player.identity == 'mingzhong') return true;
								}
								if (
									game.hasPlayer(function (current) {
										return current.hasSkill('zshy_BBaisha_wangling') && get.attitude(player, current) > 3 && !event.player.hasSkill('zshy_BBaisha_wangling');
									})
								)
									return false;
								return true;
							},
							filter(event, player, target) {
								return !event.player.hasSkill('zshy_BBaisha_wangling');
							},
							logTarget: 'player',
							prompt2(event, player) {
								return '若你死亡,则你可以复活回复至满状态并摸四张牌,否则你可以增加1点体力上限,若' + get.translation(event.player) + '没有〖亡灵〗,则防止其死亡并令其回复体力至上限,令其获得〖亡灵〗并摸四张牌';
							},
							content() {
								'step 0';
								if (!player.isAlive()) {
									player.revive();
									game.addVideo('revive', player);
									event.dead = player;
									player.hp = player.maxHp;
									player.draw(4);
								} else {
									player.gainMaxHp();
								}
								('step 1');
								var target = trigger.player;
								if (target.hasSkill('zshy_BBaisha_wangling')) return event.finish();
								else {
									var target = trigger.player;
									event.target = target;
									trigger.cancel();
									if (target.maxHp < 1) target.gainMaxHp(1 - target.maxHp);
									('step 2');
									target.recover(target.maxHp - target.hp);
									target.addSkill('zshy_BBaisha_wangling');
									target.draw(4);
									('step 3');
									game.countPlayer(function (current) {
										if (current != target && current.hasSkill('zshy_BBaisha_wangling')) {
											current.line(player);
											current.say('死亡,如此奢侈的安眠……');
											current.die();
										}
									});
								}
							},
						},
						zshy_BBaisha_wangling: {
							mark: true,
							marktext: '亡灵',
							intro: {
								content: '已被复活',
							},
						},
						zshy_BBlilimu_mingyou: {
							enable: ['chooseToUse', 'chooseToRespond'],
							delay: false,
							forced: true,
							charlotte: true,
							mark: true,
							marktext: '契约',
							intro: {
								content: '已有#张契约',
							},
							hiddenCard(player, name) {
								if (lib.inpile.includes(name)) return true;
							},
							filter(event, player, card) {
								for (var i of lib.inpile) {
									if (event.filterCard && event.filterCard({ name: i }, player, event)) return true;
								}
								return false;
							},
							content() {
								'step 0';
								var evt = event.getParent(2);
								evt.set('zshy_BBlilimu_mingyou', true);
								var cards = get.cards(player.isPhaseUsing() ? player.maxHp : player.maxHp * 2);
								if (Array.isArray(cards)) for (var i of cards) {
									ui.cardPile.insertBefore(i.fix(), ui.cardPile.firstChild);
								}
								player
									.chooseButton(['命佑:请选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards])
									.set('filterButton', function (button) {
										return _status.event.cards.includes(button.link);
									})
									.set(
										'cards',
										cards.filter(function (card) {
											return evt.filterCard(card, evt.player, evt);
										})
									)
									.set('ai', function (button) {
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
									var card = result.links[0],
										name = card.name;
									if (evt.name == 'chooseToUse') {
										game.broadcastAll(
											function (result, name) {
												lib.skill.zshy_BBlilimu_mingyou_backup.viewAs = { name: name, cards: [result] };
											},
											card,
											name
										);
										evt.set('_backupevent', 'zshy_BBlilimu_mingyou_backup');
										evt.set('openskilldialog', '命佑:请选择' + get.translation(card) + '的目标');
										evt.backup('zshy_BBlilimu_mingyou_backup');
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
								respondSha: true,
								respondShan: true,
								skillTagFilter(player) {
									return true;
								},
								order(item, player) {
									if (player && _status.event.type == 'phase') {
										var max = 0,
											add = false;
										var list = lib.inpile.filter((name) => ['basic', 'trick'].includes(get.type(name)));
										if (list.includes('sha')) add = true;
										list = list.map((namex) => {
											return { name: namex };
										});
										if (add) lib.inpile_nature.forEach((naturex) => list.push({ name: 'sha', nature: naturex }));
										for (var card of list) {
											if (player.getUseValue(card) > 0) {
												var temp = get.order(card);
												if (temp > max) max = temp;
											}
										}
										if (max > 0) max += 0.3;
										return max;
									}
									return 1;
								},
								result: {
									player(player) {
										if (_status.event.type == 'dying') {
											return get.attitude(player, _status.event.dying);
										}
										return 1;
									},
								},
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + player.countMark('zshy_BBlilimu_mingyou');
								},
							},
							group: ['zshy_BBlilimu_mingyou_DrawTo', 'zshy_BBlilimu_mingyou_Add'],
							subSkill: {
								backup: {
									selectCard: -1,
									filterCard() {
										return false;
									},
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
								},
								DrawTo: {
									trigger: {
										player: 'loseAfter',
										global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
									},
									forced: true,
									filter(event, player, target) {
										return player.countCards('h') > 0;
									},
									content() {
										var num = player.countCards('h');
										player.chooseToDiscard(num, true);
										player.addMark('zshy_BBlilimu_mingyou', num);
									},
									ai: {
										noh: true,
										skillTagFilter(player, tag) {
											if (tag == 'noh') return false;
										},
									},
								},
							},
						},
						zshy_BBlilimu_moqi: {
							trigger: {
								player: 'loseAfter',
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
							},
							forced: true,
							lastDo: true,
							filter(event, player, target) {
								return player.countMark('zshy_BBlilimu_mingyou') >= player.maxHp;
							},
							content() {
								var num = player.maxHp;
								player.removeMark('zshy_BBlilimu_mingyou', num);
								player.gainMaxHp();
								player.recover();
							},
						},
						zshy_xingli: {
							trigger: {
								global: ['roundStart'],
								player: ['damageEnd'],
							},
							forced: true,
							charlotte: true,
							content() {
								'step 0';
								var str = '为一名角色从12个随机技能中选择至多1个获得';
								player
									.chooseTarget(get.prompt('zshy_xingli'), str, function (card, player, target) {
										return (
											target.getSkills(true, false).filter((skill) => {
												if (skill == 'jiu') return false;
												if (!lib.translate[skill + '_info']) return false;
												if (lib.translate[skill + '_info'] == '') return false;
												var info = get.info(skill);
												if (!info) return false;
												return true;
											}).length
										);
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										var att = get.attitude(player, target);
										if (target == player) {
											return 999;
										} else return att;
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									var list = [];
									var skills = [];
									if (!_status.characterskill) {
										_status.characterskill = [];
										for (var i in lib.character) {
											if (lib.character[i][4].includes('boss')) continue;
											if (lib.character[i][4].includes('minskin')) continue;
											if (lib.character[i][4].includes('hiddenboss')) continue;
											if (lib.character[i][4].includes('Unaffected')) continue;
											if (lib.character[i][4].includes('stonehidden')) continue;
											if (Array.isArray(lib.character[i][3])) _status.characterskill.addArray(lib.character[i][3]);
										}
									}
									for (var i in lib.skill) {
										if (lib.skill[i].nobracket == true) continue;
										if (!get.translation(i, 'info') || get.translation(i + '_info').length === 0) continue;
										if (_status.characterskill.includes(i)) skills.add(i);
									}
									links = skills.randomGets(12);
									for (var skill of links) {
										list.push([skill, '<div class="popup text" style="width:calc(100%-10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
									}
									var next = player.chooseButton(['星力:请选择令' + get.translation(target) + '获得至多1个技能', [list, 'textbutton']]);
									next.set('forced', true);
									next.set('selectButton', [1, 1]);
									next.set('ai', function (button) {
										return Math.random();
									});
									next.set('skills', links);
								} else event.goto(0);
								('step 2');
								if (result.links?.length) {
									var skills = result.links;
									target.addSkill(skills.slice(0));
									game.log(target, '获得了以下技能:', '#g' + get.translation(skills));
								}
							},
							ai: {
								order: 9,
								threaten: 2.5,
							},
						},
						zshy_BCjinniuzuo_xingzhen: {
							trigger: { player: 'useCardToPlayered' },
							forced: true,
							charlotte: true,
							logTarget: 'target',
							filter(event, player) {
								return event.target != player && (event.card.name == 'sha' || get.type(event.card, false) == 'trick');
							},
							content() {
								trigger.target.loseHp(true);
								game.log(trigger.target, '不能响应', trigger.card);
								trigger.directHit.push(trigger.target);
								player.discardPlayerCard(trigger.target, 'he', true);
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (player !== target && get.itemtype(target) === 'player' && (card.name === 'sha' || get.type(card, false) === 'trick')) return [1, 0, 1, -1];
									},
								},
							},
						},
						zshy_Mguanyu_choose: {
							charlotte: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							derivation: ['zshy_choosewei1', 'zshy_wusheng', 'zshy_GYmashu', 'zshy_zhuiming', 'zshy_duoshou', 'zshy_chooseshu1', 'zshy_nianen', 'zshy_chooseshu2', 'zshy_yijue', 'zshy_chenjue', 'zshy_wushen', 'zshy_wuhun', 'zshy_weihun', 'zshy_enhun', 'zshy_shenghun', 'zshy_yihun', 'zshy_nuzhan'],
							popup: false,
							silent: true,
							_priority: Infinity,
							content() {
								'step 0';
								var list = ['wei', 'shu', 'shen'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return ['wei', 'shu'].randomGet();
									})
									.set('prompt', '入世:请选择入世时机');
								('step 1');
								player.group = result.control;
								('step 2');
								if (player.group == 'wei') {
									if (get.mode() == 'guozhan') {
										player.identity = 'wei';
									}
									player.addSkill('zshy_choosewei1');
									player.addSkill('zshy_wusheng');
									player.addSkill('zshy_GYmashu');
									player.addSkill('zshy_zhuiming');
									if (player.name == 'zshy_Mguanyu') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mguanyu1.jpg');
									}
								}
								if (player.group == 'shu') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shu';
									}
									player.addSkill('zshy_chooseshu1');
									player.addSkill('zshy_wusheng');
									player.addSkill('zshy_zhuiming');
									if (player.name == 'zshy_Mguanyu') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mguanyu.jpg');
									}
								}
								if (player.group == 'shen') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shen';
									}
									player.gainMaxHp();
									player.recover();
									player.addSkill('zshy_wushen');
									player.addSkill('zshy_wuhun');
									player.addSkill('zshy_nuzhan');
									if (player.name == 'zshy_Mguanyu') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenguanyuSHZL.jpg');
									}
								}
							},
						},
						zshy_choosewei1: {
							trigger: {
								source: 'dieAfter',
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.hasSkill('zshy_zhuiming') && !player.hasSkill('zshy_duoshou');
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_choosewei1');
								player.addSkillLog('zshy_choosewei1');
								('step 1');
								var list = ['入魏', '返蜀'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return list.randomGet();
									})
									.set('prompt', '择主:<br>入魏:获得〖夺首〗.<br>返蜀:转变势力为蜀势力,失去〖马术〗,获得〖义绝〗.');
								('step 2');
								if (result.control == '入魏') {
									player.addSkill('zshy_duoshou');
									if (player.name == 'zshy_Mguanyu') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mguanyu1.jpg');
									}
								} else {
									player.changeGroup('shu');
									if (get.mode() == 'guozhan') {
										player.identity = 'shu';
									}
									player.removeSkill('zshy_GYmashu');
									player.addSkill('zshy_yijue');
									if (player.name == 'zshy_Mguanyu') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mguanyu.jpg');
									}
								}
							},
						},
						zshy_chooseshu1: {
							trigger: {
								player: 'dyingAfter',
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.maxHp > 1 && player.hasSkill('zshy_zhuiming') && !player.hasSkill('zshy_nianen');
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_chooseshu1');
								player.addSkillLog('zshy_chooseshu1');
								player.changeGroup('wei');
								if (get.mode() == 'guozhan') {
									player.identity = 'wei';
								}
								('step 1');
								player.recover(1);
								player.draw(3);
								player.addSkill('zshy_chooseshu2');
								player.addSkill('zshy_nianen');
								if (player.name == 'zshy_Mguanyu') {
									player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mguanyu1.jpg');
								}
							},
						},
						zshy_chooseshu2: {
							trigger: {
								source: 'dieAfter',
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.hasSkill('zshy_zhuiming') && !player.hasSkill('zshy_duoshou') && !player.hasSkill('zshy_yijue');
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_chooseshu2');
								player.addSkillLog('zshy_chooseshu2');
								('step 1');
								var list = ['入魏', '返蜀'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return list.randomGet();
									})
									.set('prompt', '择主:<br>入魏:获得〖马术-夺首〗.<br>返蜀:转变势力为蜀势力,失去〖念恩〗,获得〖义绝〗.');
								('step 1');
								if (result.control == '入魏') {
									player.addSkill('zshy_GYmashu');
									player.addSkill('zshy_duoshou');
								} else {
									player.changeGroup('shu');
									if (get.mode() == 'guozhan') {
										player.identity = 'shu';
									}
									player.removeSkill('zshy_nianen');
									player.addSkill('zshy_yijue');
									if (player.name == 'zshy_Mguanyu') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mguanyu.jpg');
									}
								}
							},
						},
						zshy_zhuiming: {
							audio: 'ext:诸神寰宇/audio/character:0',
							trigger: {
								global: 'roundStart',
							},
							forced: true,
							forceDie: true,
							charlotte: true,
							popup: false,
							content() {
								if (!player.isAlive()) {
									player.revive();
									game.addVideo('revive', player);
									event.dead = player;
									player.gainMaxHp();
									player.hp = player.maxHp;
									player.draw(4);
									if (player.hasSkill('zshy_wusheng')) {
										player.removeSkill('zshy_wusheng');
										player.addSkill('zshy_wushen');
									}
									if (player.hasSkill('zshy_nianen') && player.hasSkill('zshy_duoshou')) {
										player.removeSkill('zshy_nianen');
										player.removeSkill('zshy_duoshou');
										player.addSkill('zshy_shenghun');
									} else {
										if (player.hasSkill('zshy_duoshou')) {
											player.removeSkill('zshy_duoshou');
											player.addSkill('zshy_weihun');
										} else {
											if (player.hasSkill('zshy_nianen')) {
												player.removeSkill('zshy_nianen');
												player.addSkill('zshy_enhun');
											} else {
												if (player.hasSkill('zshy_yijue')) {
													player.removeSkill('zshy_yijue');
													player.addSkill('zshy_yihun');
												} else player.addSkill('zshy_wuhun');
											}
										}
									}
									if (player.hasSkill('zshy_chenjue')) {
										player.removeSkill('zshy_chenjue');
										player.addSkill('zshy_nuzhan');
									}
									player.changeGroup('shen');
									if (get.mode() == 'guozhan') {
										player.identity = 'shen';
									}
									player.removeSkill('zshy_zhuiming');
									player.removeSkill('zshy_choosewei1');
									player.removeSkill('zshy_chooseshu1');
									player.removeSkill('zshy_chooseshu2');
									if (player.name == 'zshy_Mguanyu') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenguanyuSHZL.jpg');
									}
								} else event.finish();
							},
							group: ['zshy_zhuiming1'],
						},
						zshy_zhuiming1: {
							trigger: {
								source: 'dieAfter',
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.maxHp > 1 && player.hasSkill('zshy_zhuiming') && !player.hasSkill('zshy_chenjue');
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_zhuiming1');
								player.addSkillLog('zshy_shenwei2');
								('step 1');
								player.addSkill('zshy_chenjue');
								('step 2');
								player.removeSkill('zshy_zhuiming1');
							},
						},
						zshy_duoshou: {
							audio: 'ext:诸神寰宇/audio/character:2',
							init(player) {
								if (player.getHistory('useCard', (evt) => get.color(evt.card) == 'red').length) player.addTempSkill('zshy_duoshou_used');
							},
							trigger: {
								player: 'useCard',
								source: 'damageSource',
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'damage') return player.getHistory('sourceDamage').indexOf(event) == 0;
								if (get.color(event.card) == 'red' && !player.hasSkill('zshy_duoshou_used')) return true;
								return get.type(event.card) == 'basic' && player.getHistory('useCard', (evt) => get.type(evt.card) == 'basic').indexOf(event) == 0;
							},
							async content(event, trigger, player) {
								if (trigger.name == 'damage') player.draw();
								else {
									if (get.color(trigger.card) == 'red' && !player.hasSkill('zshy_duoshou_used')) {
										game.log(trigger.card, '无距离限制');
										player.addTempSkill('zshy_duoshou_used');
									}
									if (get.type(trigger.card) == 'basic' && player.getHistory('useCard', (evt) => get.type(evt.card) == 'basic').indexOf(trigger) == 0) {
										game.log(trigger.card, '不计入次数上限且基础伤害+1');
										trigger.addCount = false;
										if (player.stat[player.stat.length - 1].card.sha > 0) player.stat[player.stat.length - 1].card.sha--;
										trigger.baseDamage++;
									}
								}
							},
							mod: {
								targetInRange(card, player, target) {
									if (get.color(card) == 'red' && !player.hasSkill('zshy_duoshou_used')) return true;
								},
							},
							subSkill: {
								used: {
									charlotte: true,
								},
							},
						},
						zshy_GYmashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						zshy_nianen: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								if (!player.countCards('hes')) return false;
								if (player.hasSkill('zshy_nianen_blocker')) return false;
								for (var name of lib.inpile) {
									if (get.type2(name) != 'basic') continue;
									var card = { name: name };
									if (event.filterCard && event.filterCard(card, player, event)) return true;
									if (name == 'sha') {
										for (var nature of lib.inpile_nature) {
											card.nature = nature;
											if (event.filterCard && event.filterCard(card, player, event)) return true;
										}
									}
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var name of lib.inpile) {
										if (name == 'sha') {
											if (event.filterCard && event.filterCard({ name }, player, event)) list.push(['基本', '', 'sha']);
											for (var nature of lib.inpile_nature) {
												if (event.filterCard && event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
											}
										} else if (get.type(name) == 'basic' && event.filterCard({ name }, player, event)) list.push(['基本', '', name]);
									}
									var dialog = ui.create.dialog('念恩', [list, 'vcard']);
									dialog.direct = true;
									return dialog;
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
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
										audio: 'zshy_nianen',
										filterCard: true,
										popname: true,
										check(card) {
											return 8 - get.value(card);
										},
										position: 'hes',
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											var card = event.result.card;
											if (get.color(card, player) != 'red' || card.name != 'sha' || get.natureList(card).length) {
												player.addTempSkill('zshy_nianen_blocker');
												player.addAdditionalSkill('zshy_nianen_blocker');
											}
										},
									};
								},
								prompt(links, player) {
									return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							hiddenCard(player, name) {
								if (!lib.inpile.includes(name)) return false;
								var type = get.type2(name);
								return type == 'basic' && player.countCards('hes') > 0 && !player.hasSkill('zshy_nianen_blocker');
							},
							ai: {
								fireAttack: true,
								respondSha: true,
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('hes') || player.hasSkill('zshy_nianen_blocker')) return false;
								},
								order: 1,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
							subSkill: {
								blocker: {
									charlotte: true,
									mark: true,
									marktext: '恩',
									intro: { content: '〖念恩〗已失效' },
								},
							},
						},
						zshy_chenjue: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target.countCards('h') && target != player;
							},
							content() {
								'step 0';
								player.choosePlayerCard(target, true, 'h');
								('step 1');
								if (result.cards?.length) {
									var card = result.cards[0];
									event.card = card;
									player.showCards(card, get.translation(player) + '对' + get.translation(target) + '发动了【嗔绝】');
								} else event.finish();
								('step 2');
								var suit = card.suit;
								var str = get.translation(suit);
								player
									.chooseToDiscard('嗔绝:是否弃置至少一张' + str + '牌？', '若如此做,你对其造成等量伤害;或点击<取消>,获得其所有' + str + '手牌', 'he', { suit: suit }, [1, Infinity])
									.set('ai', (card) => {
										if (ui.selected.cards.length >= _status.event.num) return 0;
										return 6 - get.value(card);
									})
									.set(
										'num',
										(function () {
											var eff = get.damageEffect(target, player, player);
											if (eff > 0) {
												if (get.attitude(player, target) > 0) {
													return 1;
												}
												var cards = target.getCards('h', { suit: suit });
												if (cards.length > 2 || get.value(cards) >= 6) {
													return 0;
												}
												if (!player.hasSkillTag('jueqing', false, target) && target.hasSkillTag('filterDamage', null, { player: player })) return 1;
												return Infinity;
											}
											return 0;
										})()
									);
								('step 3');
								if (result.cards?.length) {
									target.damage(result.cards.length);
								} else {
									var cards = target.getCards('h', { suit: card.suit });
									if (cards.length) player.gain(cards, target, 'giveAuto', 'bySelf');
								}
							},
							ai: {
								expose: 0.4,
								order: 10,
								result: {
									target(player, target) {
										return -Math.sqrt(target.countCards('h'));
									},
								},
							},
							group: ['zshy_chenjue_guanjue'],
							subSkill: {
								guanjue: {
									audio: 'zshy_chenjue',
									trigger: {
										player: ['useCard', 'respond'],
									},
									forced: true,
									filter(event, player) {
										return player.group == 'shu';
										return lib.suit.includes(event.card.suit);
									},
									content() {
										'step 0';
										var targets = game.filterPlayer((current) => current != player);
										var suit = trigger.card.suit;
										for (var target of targets) {
											target.addTempSkill('zshy_chenjue_ban');
											target.markAuto('zshy_chenjue_ban', [suit]);
										}
									},
								},
								ban: {
									charlotte: true,
									mod: {
										cardEnabled(card, player) {
											if (player.getStorage('zshy_chenjue_ban').includes(card.suit)) return false;
										},
										cardRespondable(card, player) {
											if (player.getStorage('zshy_chenjue_ban').includes(card.suit)) return false;
										},
										cardSavable(card, player) {
											if (player.getStorage('zshy_chenjue_ban').includes(card.suit)) return false;
										},
									},
									mark: true,
									marktext: '绝',
									intro: {
										content: '本回合内不能使用或打出$的牌',
									},
								},
							},
						},
						zshy_weihun: {
							audio: 'zshy_wuhun',
							trigger: {
								player: ['damageBegin4', 'loseHpBegin'],
							},
							forced: true,
							charlotte: true,
							content() {
								'step 0';
								player.draw(trigger.num);
								('step 1');
								var str = '令一名其他角色获得' + trigger.num + '枚<魂>';
								player.chooseTarget(get.prompt('zshy_weihun'), str, lib.filter.notMe).set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									if (att < 0) {
										if (target.countMark('zshy_weihun') < target.hp) return 2;
										return 1;
									}
									return 0;
								});
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target);
									target.addMark('zshy_weihun', trigger.num);
								}
							},
							marktext: '魂',
							intro: {
								name2: '魂',
								content: 'mark',
							},
							group: ['zshy_weihun_Die', 'zshy_weihun_Draw'],
							subSkill: {
								Die: {
									audio: 'zshy_weihun',
									trigger: {
										player: 'die',
									},
									forced: true,
									forceDie: true,
									filter(event, player) {
										return game.hasPlayer(function (current) {
											return current.hasMark('zshy_weihun');
										});
									},
									logTarget() {
										return game.filterPlayer(function (current) {
											return current.hasMark('zshy_weihun');
										});
									},
									content() {
										game.countPlayer(function (current) {
											var num = current.countMark('zshy_weihun');
											if (num > 0) {
												current.removeMark('zshy_weihun', num);
												if (num >= current.hp) {
													current.die();
												} else {
													current.randomDiscard('he', num, true);
													current.loseHp(num);
												}
											}
										});
									},
								},
								Draw: {
									trigger: {
										source: 'damageSource',
										player: 'useCard',
									},
									forced: true,
									content() {
										if (trigger.name == 'damage') player.draw();
										else {
											trigger.baseDamage++;
										}
									},
								},
							},
						},
						zshy_shenghun: {
							audio: 'zshy_wuhun',
							trigger: {
								player: ['damageBegin4', 'loseHpBegin'],
							},
							forced: true,
							charlotte: true,
							content() {
								'step 0';
								player.draw(trigger.num);
								('step 1');
								var str = '令一名其他角色获得' + trigger.num + '枚<魂>';
								player.chooseTarget(get.prompt('zshy_shenghun'), str, lib.filter.notMe).set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									if (att < 0) {
										if (target.countMark('zshy_shenghun') < target.hp) return 2;
										return 1;
									}
									return 0;
								});
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target);
									target.addMark('zshy_shenghun', trigger.num);
								}
							},
							marktext: '魂',
							intro: {
								name2: '魂',
								content: 'mark',
							},
							group: ['zshy_shenghun_Die', 'zshy_shenghun_Draw', 'zshy_shenghun_Recover'],
							subSkill: {
								Die: {
									audio: 'zshy_shenghun',
									trigger: {
										player: 'die',
									},
									forced: true,
									forceDie: true,
									filter(event, player) {
										return game.hasPlayer(function (current) {
											return current.hasMark('zshy_shenghun');
										});
									},
									logTarget() {
										return game.filterPlayer(function (current) {
											return current.hasMark('zshy_shenghun');
										});
									},
									content() {
										game.countPlayer(function (current) {
											var num = current.countMark('zshy_shenghun');
											if (num > 0) {
												current.removeMark('zshy_shenghun', num);
												if (num >= current.hp) {
													current.die();
												} else {
													current.randomDiscard('he', num, true);
													current.loseHp(num);
												}
											}
										});
									},
								},
								Draw: {
									trigger: {
										source: 'damageSource',
										player: 'useCard',
									},
									forced: true,
									content() {
										if (trigger.name == 'damage') player.draw();
										else {
											trigger.baseDamage++;
										}
									},
								},
								Recover: {
									trigger: {
										source: ['damageBegin4'],
									},
									prompt(event, player) {
										return '你是否选择将伤害效果转化为治疗效果？';
									},
									content() {
										trigger.cancel();
										target.recover(trigger.num);
									},
								},
							},
						},
						zshy_enhun: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['damageBegin4', 'loseHpBegin'],
							},
							forced: true,
							charlotte: true,
							content() {
								'step 0';
								player.draw(trigger.num);
								('step 1');
								var str = '令一名其他角色获得' + trigger.num + '枚<魂>';
								player.chooseTarget(get.prompt('zshy_enhun'), str, lib.filter.notMe).set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									if (att < 0) {
										if (target.countMark('zshy_enhun') < target.hp) return 2;
										return 1;
									}
									return 0;
								});
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target);
									target.addMark('zshy_enhun', trigger.num);
								}
							},
							marktext: '魂',
							intro: {
								name2: '魂',
								content: 'mark',
							},
							group: ['zshy_enhun_Die', 'zshy_enhun_Recover'],
							subSkill: {
								Die: {
									audio: 'zshy_enhun',
									trigger: {
										player: 'die',
									},
									forced: true,
									forceDie: true,
									filter(event, player) {
										return game.hasPlayer(function (current) {
											return current.hasMark('zshy_enhun');
										});
									},
									logTarget() {
										return game.filterPlayer(function (current) {
											return current.hasMark('zshy_enhun');
										});
									},
									content() {
										game.countPlayer(function (current) {
											var num = current.countMark('zshy_enhun');
											if (num > 0) {
												current.removeMark('zshy_enhun', num);
												if (num >= current.hp) {
													current.die();
												} else {
													current.randomDiscard('he', num, true);
													current.loseHp(num);
												}
											}
										});
									},
								},
								Recover: {
									trigger: {
										source: ['damageBegin4'],
									},
									prompt(event, player) {
										return '你是否选择将伤害效果转化为治疗效果？';
									},
									check(event, player, target) {
										get.attitude(player, event.target) > 0;
									},
									content() {
										trigger.cancel();
										target.recover(trigger.num);
									},
								},
							},
						},
						zshy_yihun: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['damageBegin4', 'loseHpBegin'],
							},
							forced: true,
							charlotte: true,
							content() {
								'step 0';
								player.draw(trigger.num);
								('step 1');
								var str = '令一名其他角色获得' + trigger.num + '枚<魂>';
								player.chooseTarget(get.prompt('zshy_yihun'), str, lib.filter.notMe).set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									if (att < 0) {
										if (target.countMark('zshy_yihun') < target.hp) return 2;
										return 1;
									}
									return 0;
								});
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target);
									target.addMark('zshy_yihun', trigger.num);
								}
							},
							marktext: '魂',
							intro: {
								name2: '魂',
								content: 'mark',
							},
							group: ['zshy_yihun_Die', 'zshy_yihun_Usecard'],
							subSkill: {
								Die: {
									audio: 'zshy_yihun',
									trigger: {
										player: 'die',
									},
									forced: true,
									forceDie: true,
									filter(event, player) {
										return game.hasPlayer(function (current) {
											return current.hasMark('zshy_yihun');
										});
									},
									logTarget() {
										return game.filterPlayer(function (current) {
											return current.hasMark('zshy_yihun');
										});
									},
									content() {
										game.countPlayer(function (current) {
											var num = current.countMark('zshy_yihun');
											if (num > 0) {
												current.removeMark('zshy_yihun', num);
												if (num >= current.hp) {
													current.die();
												} else {
													current.randomDiscard('he', num, true);
													current.loseHp(num);
												}
											}
										});
									},
								},
								Usecard: {
									trigger: {
										player: ['useCardToTargeted'],
									},
									forced: true,
									filter(event, player, target) {
										return target != player;
									},
									content() {
										var ccolor = get.color(trigger.card);
										if (ccolor == 'red') {
											player.gainPlayerCard(target, true, 'he');
											target.loseHp();
										} else {
											player.discardPlayerCard(target, true, 'he');
											target.addTempSkill('zshy_yihun_Refuse');
										}
									},
								},
								Refuse: {
									charlotte: true,
									mark: true,
									mod: {
										cardEnabled2(card) {
											if (get.position(card) == 'h') return false;
										},
									},
									intro: {
										content: '不能使用或打出手牌',
									},
								},
							},
						},
						zshy_nuzhan: {
							audio: 'ext:诸神寰宇/audio/character:3',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('hes') && !player.hasSkill('zshy_nuzhan_Off');
							},
							filterCard(card, player) {
								var suit = card.suit;
								if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
									if (i.suit == suit) return false;
								}
								return true;
							},
							position: 'hes',
							selectCard: [1, 5],
							complexCard: true,
							filterTarget: true,
							check(card) {
								return 7 - get.value(card);
							},
							content() {
								'step 0';
								var dnum = target.hp + target.hp;
								if (cards.length >= dnum) {
									target.die();
									player.draw(3);
								} else {
									target.damage(cards.length);
								}
								('step 1');
								if (!target.isAlive()) {
									player.addTempSkill('zshy_nuzhan_Off', 'phaseUseEnd');
									player.recover();
								} else {
									player.draw(cards.length);
									player.damage(cards.length);
								}
							},
							ai: {
								order() {
									return [1, 2, 3, 4].randomGet();
								},
								result: {
									target(player, target) {
										var hp = target.hp;
										if (hp < 4) return -4 + hp;
										return -1;
									},
								},
								tag: {
									damage: 1,
								},
							},
							subSkill: {
								Off: {
									charlotte: true,
								},
							},
						},
						zshy_Mzhangfei_choose: {
							audio: 'ext:诸神寰宇/audio/character:0',
							charlotte: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							derivation: ['zshy_paoxiao', 'zshy_tishen', 'zshy_renshi', 'zshy_shencai', 'zshy_xunshi'],
							popup: false,
							silent: true,
							_priority: Infinity,
							content() {
								'step 0';
								var list = ['shu', 'shen'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return ['shu'].randomGet();
									})
									.set('prompt', '入世:请选择入世时机');
								('step 1');
								player.group = result.control;
								('step 2');
								if (player.group == 'shu') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shu';
									}
									player.addSkill('zshy_paoxiao');
									player.addSkill('zshy_tishen');
									player.addSkill('zshy_renshi');
									if (player.name == 'zshy_Mzhangfei') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mzhangfei.jpg');
									}
								}
								if (player.group == 'shen') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shen';
									}
									player.addSkill('zshy_shencai');
									player.addSkill('zshy_xunshi');
									if (player.name == 'zshy_Mzhangfei') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenzhangfeiXD.jpg');
									}
								}
							},
						},
						zshy_renshi: {
							audio: 'ext:诸神寰宇/audio/character:0',
							trigger: {
								global: 'roundStart',
							},
							forced: true,
							forceDie: true,
							charlotte: true,
							popup: false,
							content() {
								if (!player.isAlive()) {
									player.revive();
									game.addVideo('revive', player);
									event.dead = player;
									if (player.maxHp != 4) player.gainMaxHp(4 - player.maxHp);
									player.recover(4);
									player.draw(4);
									player.addSkill('zshy_shencai');
									if (player.hasSkill('zshy_paoxiao')) {
										player.removeSkill('zshy_paoxiao');
										player.addSkill('zshy_xunshi');
									}
									player.changeGroup('shen');
									if (get.mode() == 'guozhan') {
										player.identity = 'shen';
									}
									player.removeSkill('zshy_renshi');
									if (player.name == 'zshy_Mzhangfei') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenzhangfeiXD.jpg');
									}
								} else event.finish();
							},
						},
						zshy_Mmachao_choose: {
							charlotte: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							derivation: ['zshy_shenwei', 'zshy_MCmashu', 'zshy_tieji', 'zshy_zhuiji', 'zshy_shichou', 'zshy_weihou', 'zshy_shouli', 'zshy_hengwu'],
							popup: false,
							silent: true,
							_priority: Infinity,
							content() {
								'step 0';
								var list = ['shu', 'qun', 'shen'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return ['shu', 'qun'].randomGet();
									})
									.set('prompt', '入世:请选择入世时机');
								('step 1');
								player.group = result.control;
								('step 2');
								if (player.group == 'shu') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shu';
									}
									player.addSkill('zshy_MCmashu');
									player.addSkill('zshy_tieji');
									player.addSkill('zshy_shenwei');
									if (player.name == 'zshy_Mmachao') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mmachao.jpg');
									}
								}
								if (player.group == 'qun') {
									if (get.mode() == 'guozhan') {
										player.identity = 'qun';
									}
									player.addSkill('zshy_shichou');
									player.addSkill('zshy_zhuiji');
									player.addSkill('zshy_shenwei');
									if (player.name == 'zshy_Mmachao') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mmachao1.jpg');
									}
								}
								if (player.group == 'shen') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shen';
									}
									player.addSkill('zshy_shouli');
									player.addSkill('zshy_hengwu');
									if (player.name == 'zshy_Mmachao') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenmachaoXD.jpg');
									}
								}
							},
							subSkill: {
								shu1: {},
							},
						},
						zshy_shenwei: {
							trigger: {
								source: ['damageEnd'],
							},
							forced: true,
							filter(event, player) {
								return event.hasNature('thunder');
							},
							content() {
								player.addMark('zshy_shenwei', trigger.num);
							},
							intro: {
								content: '已经造成#点雷电伤害',
							},
							group: ['zshy_shenwei1', 'zshy_shenwei2'],
						},
						zshy_shenwei1: {
							trigger: {
								source: 'dieAfter',
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.maxHp > 1 && !player.hasSkill('zshy_weihou');
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_shenwei1');
								player.addSkillLog('zshy_shenwei1');
								('step 1');
								player.addSkill('zshy_weihou');
								('step 2');
								player.removeSkill('zshy_shenwei1');
							},
						},
						zshy_shenwei2: {
							trigger: {
								source: ['damageEnd'],
							},
							lastDo: true,
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.countMark('zshy_shenwei') >= 8 && !player.hasSkill('zshy_shouli') && !player.hasSkill('zshy_hengwu');
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_shenwei2');
								player.addSkillLog('zshy_shenwei2');
								('step 1');
								if (player.hasSkill('zshy_MCmashu') || player.hasSkill('zshy_zhuiji')) {
									player.removeSkill('zshy_MCmashu');
									player.removeSkill('zshy_zhuiji');
									player.addSkill('zshy_shouli');
								}
								if (player.hasSkill('zshy_tieji') || player.hasSkill('zshy_shichou')) {
									player.removeSkill('zshy_tieji');
									player.removeSkill('zshy_shichou');
									player.addSkill('zshy_hengwu');
								}
								player.changeGroup('shen');
								if (get.mode() == 'guozhan') {
									player.identity = 'shen';
								}
								if (player.name == 'zshy_Mmachao') {
									player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenmachaoXD.jpg');
								}
								('step 2');
								player.removeSkill('zshy_shenwei2');
							},
						},
						zshy_shichou: {
							audio: 'ext:诸神寰宇/audio/character:4',
							trigger: {
								player: 'useCard2',
							},
							forced: true,
							filter(event, player, target) {
								return event.card && event.card.name == 'sha' && game.countPlayer() > 2;
							},
							content() {
								'step 0';
								var num = Math.max(1, player.getDamagedHp() + 1);
								player.chooseTarget('是否发动【誓仇】,令至多' + num + '名其他角色也成为此【杀】的目标？', [1, num], function (card, player, target) {
									return target != player && !trigger.targets.includes(target) && player.canUse({ name: 'sha' }, target);
								}).ai = function (target) {
									return get.effect(target, { name: 'sha' }, _status.event.player);
								};
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets;
									player.line(targets, trigger.card.nature);
									trigger.targets.addArray(targets);
								}
							},
						},
						zshy_zhuiji: {
							audio: 'zshy_shichou',
							trigger: { player: 'useCardToPlayered' },
							forced: true,
							shaRelated: true,
							logTarget: 'target',
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.target.countCards('he') > 0 && get.distance(player, event.target) == 1;
							},
							content() {
								'step 0';
								var target = trigger.target;
								event.target = target;
								if (target.countCards('e') == 0) event._result = { index: 0 };
								else
									target
										.chooseControl()
										.set('choiceList', ['弃置一张牌', '弃置装备区的所有牌'])
										.set('ai', function (card) {
											var min = Infinity,
												equ = 0,
												es = player.getCards('e'),
												hs = player.getCards('he');
											for (var i of hs) {
												var val = get.value(i);
												min = Math.min(min, val);
												if (es.includes(i)) equ += val;
											}
											equ /= es.length;
											if (min < equ - 1) return 0;
											return 1;
										});
								('step 1');
								if (result.index == 0) {
									target.chooseToDiscard('he', true);
								} else {
									target.chooseToDiscard(target.getCards('e', lib.filter.cardRecastable), true);
								}
							},
							mod: {
								globalFrom(from, to) {
									if (from.hp >= to.hp) return -Infinity;
								},
							},
						},
						zshy_shouli_backup: {
							sourceSkill: 'zshy_shouli',
							filterCard() {
								return false;
							},
							prompt: '请选择【杀】的目标',
							selectCard: -1,
							precontent() {
								var cards = event.result.card.cards;
								event.result.cards = cards;
								var owner = get.owner(cards[0]);
								event.target = owner;
								owner.$give(cards[0], player, false);
								player.popup(event.result.card.name, 'metal');
								event.parent.addCount = false;
							},
						},
						zshy_weihou: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: ['chooseToRespond', 'chooseToUse'],
							filter(event, player) {
								var list = ['sha', 'juedou'];
								for (var i = 0; i < list.length; i++) {
									if (event.filterCard && event.filterCard({ name: list[i] }, player)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = ['sha', 'juedou'];
									list[0] = ['基本', '', list[0]];
									list[1] = ['锦囊', '', list[1]];
									return ui.create.dialog('威侯', [list, 'vcard']);
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									return 10;
								},
								backup(links, player) {
									return {
										audio: 'zshy_weihou',
										filterCard(card, player) {
											return get.type(card) != 'basic';
										},
										position: 'hes',
										selectCard: 1,
										popname: true,
										ai(card) {
											return 8 - get.value(card);
										},
										viewAs: { name: links[0][2] },
									};
								},
								prompt(links, player) {
									return '将一张非基本牌当' + get.translation(links[0][2]) + '使用或打出';
								},
							},
							ai: {
								order: 8,
								result: {
									player(player) {
										return 2;
									},
								},
								threaten: 1.6,
							},
							group: ['zshy_weihou_sub1', 'zshy_weihou_sub2', 'zshy_weihou_sub3'],
							subSkill: {
								sub1: {
									trigger: { player: 'useCard1' },
									forced: true,
									firstDo: true,
									filter(event, player) {
										return event.card && event.skill && (event.card.name == 'sha' || event.card.name == 'juedou') && get.color(event.card) == 'red' && event.cards && event.cards.length == 1 && get.type(event.cards[0]) != 'basic';
									},
									content() {
										trigger.baseDamage++;
									},
								},
								sub2: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: {
										source: ['damageEnd'],
									},
									forced: true,
									filter(event, player) {
										return event.num != 0;
									},
									content() {
										player.addMark('zshy_weihou_sub2', trigger.num);
										if (player.countMark('zshy_weihou_sub2') > 0 && !player.hasSkill('zshy_weihou_sub5')) {
											player.draw();
											player.addTempSkill('zshy_weihou_sub5');
										}
										if (player.countMark('zshy_weihou_sub2') > 1 && !player.hasSkill('zshy_weihou_sub6')) {
											player.chooseDrawRecover(2, true);
											player.addTempSkill('zshy_weihou_sub6');
										}
										if (player.countMark('zshy_weihou_sub2') > 2) {
											player.addTempSkill('zshy_weihou_sub4');
										}
									},
								},
								sub3: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player.hasMark('zshy_weihou_sub2');
									},
									content() {
										var num = player.countMark('zshy_weihou_sub2');
										player.removeMark('zshy_weihou_sub2', num);
									},
								},
								sub4: {
									charlotte: true,
									mod: {
										targetInRange(card) {
											return true;
										},
										cardUsable(card) {
											return Infinity;
										},
										aiOrder(player, card, num) {
											if (card.name == 'sha') return num--;
										},
									},
								},
								sub5: {
								},
								sub6: {
								},
							},
						},
						zshy_Mzhaoyun_choose: {
							charlotte: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							derivation: ['zshy_hualong', 'zshy_longdan', 'zshy_yajiao', 'zshy_chongzhen', 'zshy_fengsheng', 'zshy_longhun', 'zshy_juejing', 'zshy_longpo'],
							popup: false,
							silent: true,
							_priority: Infinity,
							content() {
								'step 0';
								var list = ['shu', 'qun', 'shen'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return ['shu', 'qun'].randomGet();
									})
									.set('prompt', '入世:请选择入世时机');
								('step 1');
								player.group = result.control;
								('step 2');
								if (player.group == 'shu') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shu';
									}
									if (player.maxHp != 5) {
										player.gainMaxHp(4 - player.maxHp);
									}
									player.addSkill('zshy_longdan');
									player.addSkill('zshy_yajiao');
									player.addSkill('zshy_hualong');
									if (player.name == 'zshy_Mzhaoyun') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mzhaoyun.jpg');
									}
								}
								if (player.group == 'qun') {
									if (get.mode() == 'guozhan') {
										player.identity = 'qun';
									}
									if (player.maxHp != 5) {
										player.gainMaxHp(3 - player.maxHp);
									}
									player.addSkill('zshy_longdan');
									player.addSkill('zshy_chongzhen');
									player.addSkill('zshy_hualong');
									if (player.name == 'zshy_Mzhaoyun') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mzhaoyun1.jpg');
									}
								}
								if (player.group == 'shen') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shen';
									}
									if (player.maxHp != 5) {
										player.gainMaxHp(2 - player.maxHp);
									}
									player.addSkill('zshy_longhun');
									player.addSkill('zshy_juejing');
									player.addSkill('zshy_hualong');
									if (player.name == 'zshy_Mzhaoyun') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenzhaoyunSHZL.jpg');
									}
								}
							},
							subSkill: {
								group1: {},
							},
						},
						zshy_hualong: {
							trigger: {
								source: 'damageEnd',
								player: ['damageEnd', 'recoverEnd'],
							},
							charlotte: true,
							forced: true,
							fixed: true,
							content() {
								player.addMark('zshy_hualong', trigger.num);
							},
							intro: {
								content: '造成/受到伤害、回复体力共#点',
							},
							group: ['zshy_hualong1', 'zshy_hualong2', 'zshy_hualong3'],
						},
						zshy_hualong1: {
							trigger: {
								source: 'damageEnd',
								player: ['damageEnd', 'recoverEnd'],
							},
							charlotte: true,
							forced: true,
							fixed: true,
							juexingji: true,
							filter(event, player) {
								return player.countMark('zshy_hualong') >= 7 && !player.hasSkill('zshy_fengsheng');
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_hualong1');
								('step 1');
								player.addSkill('zshy_fengsheng');
								('step 2');
								player.removeSkill('zshy_hualong1');
							},
						},
						zshy_hualong2: {
							trigger: {
								source: 'damageEnd',
								player: ['damageEnd', 'recoverEnd'],
							},
							_priority: -10,
							charlotte: true,
							forced: true,
							fixed: true,
							juexingji: true,
							filter(event, player) {
								return player.countMark('zshy_hualong') >= 14 && !player.hasSkill('zshy_longhun') && !player.hasSkill('zshy_juejing') && !player.hasSkill('zshy_longpo');
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_hualong2');
								('step 1');
								if (player.hasSkill('zshy_longdan')) {
									player.removeSkill('zshy_longdan');
									player.addSkill('zshy_longhun');
								}
								if (player.hasSkill('zshy_yajiao') || player.hasSkill('zshy_chongzhen')) {
									player.removeSkill('zshy_yajiao');
									player.removeSkill('zshy_chongzhen');
									player.addSkill('zshy_juejing');
								}
								player.loseMaxHp();
								player.chooseDrawRecover(true);
								player.changeGroup('shen');
								if (get.mode() == 'guozhan') {
									player.identity = 'shen';
								}
								if (player.name == 'zshy_Mzhaoyun') {
									player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenzhaoyunSHZL.jpg');
								}
								player.removeSkill('zshy_hualong2');
							},
						},
						zshy_hualong3: {
							trigger: {
								source: 'damageEnd',
								player: ['damageEnd', 'recoverEnd'],
							},
							lastDo: true,
							charlotte: true,
							forced: true,
							fixed: true,
							juexingji: true,
							filter(event, player) {
								return player.countMark('zshy_hualong') >= 28 && !player.hasSkill('zshy_longpo');
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_hualong3');
								('step 1');
								if (player.hasSkill('zshy_longhun')) {
									player.removeSkill('zshy_longhun');
								}
								if (player.hasSkill('zshy_juejing')) {
									player.removeSkill('zshy_juejing');
								}
								player.loseMaxHp();
								player.chooseDrawRecover(true);
								player.addSkill('zshy_longpo');
								player.changeGroup('shen');
								if (get.mode() == 'guozhan') {
									player.identity = 'shen';
								}
								if (player.name == 'zshy_Mzhaoyun') {
									player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Yshenzhaoyun.jpg');
								}
								player.removeSkill('zshy_hualong3');
							},
						},
						zshy_chongzhen: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: { player: ['useCard', 'respond'] },
							filter(event, player) {
								if (event.card.name != 'sha' && event.card.name != 'shan') return false;
								if (!event.skill || !event.skill.indexOf('zshy_chongzhen') || event.skill.indexOf('zshy_longdan') == -1) return false;
								var target = lib.skill.chongzhen.logTarget(event, player);
								return target;
							},
							logTarget(event, player) {
								if (event.name == 'respond') return event.source;
								if (event.card.name == 'sha') return event.targets[0];
								return event.respondTo[0];
							},
							prompt2(event, player) {
								var target = lib.skill.chongzhen.logTarget(event, player);
								return '对' + get.translation(target) + '使用一张无距离与次数限制的【杀】';
							},
							content() {
								var target = lib.skill.chongzhen.logTarget(trigger, player);
								player.useCard({ name: 'sha' }, target, true);
							},
							ai: {
								combo: 'zshy_longdan',
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
						zshy_fengsheng: {
							trigger: {
								player: ['damageBegin4'],
							},
							charlotte: true,
							lastDo: true,
							filter(event, player) {
								return event.num >= player.hp && !player.hasSkill('zshy_fengsheng_clear');
							},
							content() {
								'step 0';
								var str = '请选择重铸的牌';
								trigger.cancel();
								player.chooseCard([1, Infinity], 'he', str).set('ai', function (card) {
									return 10 - get.value(card);
								});
								('step 1');
								if (result.cards?.length) {
									player.recast(result.cards);
									player.addTempSkill('zshy_fengsheng_clear', { global: 'roundStart' });
								}
							},
							subSkill: {
								clear: {
									marktext: '逢生',
									intro: { content: '本轮已发动〖逢生〗' },
								},
							},
						},
						zshy_Mliubei_choose: {
							charlotte: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							derivation: ['zshy_jieyi', 'zshy_rende', 'zshy_renyi', 'zshy_jishan', 'zshy_zhenqiao', 'zshy_longnu', 'zshy_jieying'],
							popup: false,
							silent: true,
							_priority: Infinity,
							content() {
								'step 0';
								var list = ['shu', 'qun', 'shen'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return ['shu', 'qun'].randomGet();
									})
									.set('prompt', '入世:请选择入世时机');
								('step 1');
								player.group = result.control;
								('step 2');
								if (player.group == 'shu') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shu';
									}
									player.addSkill('zshy_rende');
									player.addSkill('zshy_renyi');
									player.addSkill('zshy_jieyi');
									if (player.name == 'zshy_Mliubei') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mliubei.jpg');
									}
								}
								if (player.group == 'qun') {
									if (get.mode() == 'guozhan') {
										player.identity = 'qun';
									}
									player.addSkill('zshy_jishan');
									player.addSkill('zshy_zhenqiao');
									player.addSkill('zshy_jieyi');
									if (player.name == 'zshy_Mliubei') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mliubei1.jpg');
									}
								}
								if (player.group == 'shen') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shen';
									}
									player.gainMaxHp(2);
									player.addSkill('zshy_longnu');
									player.addSkill('zshy_jieying');
									if (player.name == 'zshy_Mliubei') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenliubeiSHZL.jpg');
									}
								}
							},
							subSkill: {
								group1: {},
							},
						},
						zshy_jieyi: {
							trigger: {
								global: ['dieAfter'],
							},
							charlotte: true,
							forced: true,
							fixed: true,
							juexingji: true,
							filter(event, player, target) {
								return event.player.group == player.group && (!player.hasSkill('zshy_longnu') || !player.hasSkill('zshy_jieying'));
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_jieyi');
								('step 1');
								var jishannum = game.countPlayer();
								var marknum = player.countMark('zshy_renyi') + jishannum * 2;
								player.removeMark('zshy_renyi', marknum);
								player.draw(marknum);
								('step 2');
								if (player.hasSkill('zshy_rende')) player.removeSkill('zshy_rende');
								if (player.hasSkill('zshy_renyi')) player.removeSkill('zshy_renyi');
								if (player.hasSkill('zshy_jishan')) player.removeSkill('zshy_jishan');
								if (player.hasSkill('zshy_zhenqiao')) player.removeSkill('zshy_zhenqiao');
								player.gainMaxHp(2);
								player.recover(2);
								player.addSkillLog('zshy_longnu');
								player.addSkillLog('zshy_jieying');
								player.changeGroup('shen');
								if (get.mode() == 'guozhan') {
									player.identity = 'shen';
								}
								if (player.name == 'zshy_Mliubei') {
									player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenliubeiSHZL.jpg');
								}
							},
						},
						zshy_jishan: {
							audio: 'ext:诸神寰宇/audio/character:0',
							trigger: { global: 'damageBegin4' },
							usable: 1,
							filter(event, player) {
								return player.hp > 0;
							},
							logTarget: 'player',
							prompt2: '你与其各摸一张牌,若是同势力角色则各摸两张',
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							group: 'zshy_jishan_recover',
							content() {
								'step 0';
								player.markAuto('zshy_jishan', [trigger.player]);
								('step 1');
								if (player.isIn() && trigger.player.isIn()) {
									var targets = [player, trigger.player];
									targets.sortBySeat(_status.currentPhase);
									if (trigger.player.group == player.group) {
										targets[0].draw(2, 'nodelay');
										targets[1].draw(2);
									} else {
										targets[0].draw('nodelay');
										targets[1].draw();
									}
								}
							},
							intro: { content: '已与$一起摸过牌' },
							ai: { expose: 0.2 },
							subSkill: {
								recover: {
									audio: 'zshy_jishan',
									trigger: { source: 'damageSource' },
									filter(event, player) {
										return game.hasPlayer((current) => {
											return current.isMinHp() && player.getStorage('zshy_jishan').includes(current);
										});
									},
									usable: 1,
									forced: true,
									content() {
										'step 0';
										player
											.chooseTarget(get.prompt('zshy_jishan_recover'), '令一名体力值最小且你对其发动过〖积善①〗的角色回复1点体力', (card, player, target) => {
												return target.isMinHp() && player.getStorage('zshy_jishan').includes(target);
											})
											.set('ai', (target) => {
												return get.recoverEffect(target, _status.event.player, _status.event.player);
											});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											if (target.group == player.group) {
												target.recover(2);
											} else {
												target.recover();
											}
										} else player.getStat('triggerSkill').zshy_jishan_recover--;
									},
								},
							},
						},
						zshy_zhenqiao: {
							audio: 'ext:诸神寰宇/audio/character:0',
							trigger: { player: 'useCardToTargeted' },
							forced: true,
							shaRelated: true,
							filter(event, player) {
								return event.isFirstTarget && event.card.name == 'sha';
							},
							content() {
								trigger.parent.effectCount++;
							},
							mod: {
								attackRange(player, num) {
									if (player.group == 'qun') return num + 1;
								},
								aiOrder(player, card, num) {
									if (num > 0 && get.itemtype(card) === 'card' && get.subtype(card) === 'equip1' && !player.getEquip(1)) {
										if (
											card.name !== 'zhuge' ||
											player.getCardUsable('sha') ||
											!player.needsToDiscard() ||
											player.countCards('hs', (i) => {
												return i.name === 'sha' && lib.filter.cardEnabled(i, player);
											}) < 2
										)
											return 0;
									}
								},
								aiValue(player, card, num) {
									if (num > 0 && get.itemtype(card) === 'card' && card.name !== 'zhuge' && get.subtype(card) === 'equip1' && !player.getEquip(1)) return 0.01 * num;
								},
								aiUseful() {
									return lib.skill.zshy_zhenqiao.mod.aiValue.apply(this, arguments);
								},
							},
						},
						zshy_Msunquan_choose: {
							charlotte: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							derivation: ['zshy_chenchen', 'zshy_yixin', 'zshy_panshi', 'zshy_zhangquan', 'zshy_zhiheng'],
							popup: false,
							_priority: Infinity,
							content() {
								'step 0';
								var list = ['wei', 'wu'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return ['wei', 'wu'].randomGet();
									})
									.set('prompt', '入世:请选择入世时机');
								('step 1');
								player.group = result.control;
								('step 2');
								if (player.group == 'wei') {
									if (get.mode() == 'guozhan') {
										player.identity = 'wei';
									}
									player.addSkill('zshy_chenchen');
									player.addSkill('zshy_yixin');
									if (player.name == 'zshy_Msunquan') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Msunquan.jpg');
									}
								}
								if (player.group == 'wu') {
									if (get.mode() == 'guozhan') {
										player.identity = 'wu';
									}
									player.addSkill('zshy_zhiheng');
									if (player.name == 'zshy_Msunquan') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Msunquan1.jpg');
									}
								}
								if (player.group == 'shen') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shen';
									}
									player.addSkill('zshy_zhiheng');
									if (player.name == 'zshy_Msunquan') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Msunquan2.jpg');
									}
								}
							},
						},
						zshy_chenchen: {
							trigger: {
								global: 'roundStart',
							},
							forced: true,
							lastDo: true,
							filter(event, player, group) {
								if (player.group == 'wei') {
									return (
										game.countPlayer(function (current, player) {
											return current.group == 'wei';
										}) > 0
									);
								}
								if (player.group == 'shu') {
									return (
										game.countPlayer(function (current, player) {
											return current.group == 'shu';
										}) > 0
									);
								}
								if (player.group == 'wu') {
									return (
										game.countPlayer(function (current, player) {
											return current.group == 'wu';
										}) > 0
									);
								}
								if (player.group == 'qun') {
									return (
										game.countPlayer(function (current, player) {
											return current.group == 'qun';
										}) > 0
									);
								}
								if (player.group == 'jin') {
									return (
										game.countPlayer(function (current, player) {
											return current.group == 'jin';
										}) > 0
									);
								}
							},
							content() {
								var weinum = game.countPlayer(function (current, player) {
									return current.group == 'wei';
								});
								var shunum = game.countPlayer(function (current, player) {
									return current.group == 'shu';
								});
								var wunum = game.countPlayer(function (current, player) {
									return current.group == 'wu';
								});
								var qunnum = game.countPlayer(function (current, player) {
									return current.group == 'qun';
								});
								var jinnum = game.countPlayer(function (current, player) {
									return current.group == 'jin';
								});
								if (player.group == 'wei') player.addMark('zshy_chenchen', weinum);
								if (player.group == 'shu') player.addMark('zshy_chenchen', shunum);
								if (player.group == 'wu') player.addMark('zshy_chenchen', wunum);
								if (player.group == 'qun') player.addMark('zshy_chenchen', qunnum);
								if (player.group == 'jin') player.addMark('zshy_chenchen', jinnum);
							},
							marktext: '称臣',
							intro: {
								name2: '称臣',
								content: '隐忍不发,谋定后动!',
							},
							group: ['zshy_chenchen_mark'],
							subSkill: {
								mark: {
									trigger: {
										player: 'damageBegin4',
									},
									charlotte: true,
									forced: true,
									filter(event, player) {
										if (player.countMark('zshy_chenchen') > 0) return true;
										return false;
									},
									content() {
										'step 0';
										player
											.chooseTarget('是否选择一名同势力角色替你受到伤害？', function (card, player, target) {
												if (player.group == 'wei') return target.group == 'wei';
												if (player.group == 'shu') return target.group == 'shu';
												if (player.group == 'wu') return target.group == 'wu';
												if (player.group == 'qun') return target.group == 'qun';
												if (player.group == 'jin') return target.group == 'jin';
											})
											.set('ai', function (target) {
												var evt = _status.event;
												return get.effect(target, { name: 'damage' }, evt.source, evt.player);
											});
										('step 1');
										if (result.bool) {
											trigger.cancel();
											player.removeMark('zshy_chenchen', 1);
											result.targets[0].damage(trigger.num, trigger.nature).source = trigger.source;
											player.draw(trigger.num);
											player.addMark('zshy_yixin', 1);
										}
									},
								},
							},
						},
						zshy_yixin: {
							trigger: {
								global: ['roundStart'],
								player: ['phaseEnd'],
							},
							forced: true,
							filter(event, player) {
								return player.countMark('zshy_yixin') > 0;
							},
							content() {
								var num = player.countMark('zshy_yixin');
								player.draw(num);
							},
							marktext: '异心',
							intro: {
								name2: '异心',
								content: '时机有变,异心横生!',
							},
							group: ['zshy_yixin_awaken', 'zshy_yixin_sub1'],
							subSkill: {
								awaken: {
									trigger: {
										player: ['phaseBegin'],
									},
									charlotte: true,
									forced: true,
									fixed: true,
									juexingji: true,
									filter(event, player) {
										if (player.countMark('zshy_yixin') < player.maxHp + player.countMark('zshy_chenchen') || player.hasSkill('zshy_panshi')) return false;
										return true;
									},
									content() {
										'step 0';
										player.awakenSkill('zshy_yixin_awaken');
										('step 1');
										player.removeSkill('zshy_chenchen');
										player.addSkill('zshy_panshi');
										player.changeGroup('wu');
										if (get.mode() == 'guozhan') {
											player.identity = 'wu';
										}
										player.removeSkill('zshy_yixin_awaken');
									},
								},
								sub1: {
									trigger: {
										global: 'dieAfter',
									},
									charlotte: true,
									forced: true,
									fixed: true,
									juexingji: true,
									filter(event, player) {
										if (player.group == 'wei') {
											return (
												game.countPlayer(function (current, player) {
													return current.group == 'wei';
												}) == 1 && !player.hasSkill('zshy_zhangquan')
											);
										}
										if (player.group == 'shu') {
											return (
												game.countPlayer(function (current, player) {
													return current.group == 'shu';
												}) == 1 && player.hasSkill('zshy_zhangquan')
											);
										}
										if (player.group == 'wu') {
											return (
												game.countPlayer(function (current, player) {
													return current.group == 'wu';
												}) == 1 && !player.hasSkill('zshy_zhangquan')
											);
										}
										if (player.group == 'qun') {
											return (
												game.countPlayer(function (current, player) {
													return current.group == 'qun';
												}) == 1 && !player.hasSkill('zshy_zhangquan')
											);
										}
										if (player.group == 'jin') {
											return (
												game.countPlayer(function (current, player) {
													return current.group == 'jin';
												}) == 1 && !player.hasSkill('zshy_zhangquan')
											);
										}
										return false;
									},
									content() {
										'step 0';
										player.awakenSkill('zshy_yixin_sub1');//QQQ
										('step 1');
										player.addSkill('zshy_zhangquan');
										player.removeSkill('zshy_yixin_sub1');
									},
								},
							},
						},
						zshy_panshi: {
							trigger: {
								global: ['damageEnd', 'recoverEnd'],
							},
							forced: true,
							filter(event, player) {
								if (player.group == 'wei') {
									if (event.player.group == 'wei' && event.player != player) return true;
								}
								if (player.group == 'shu') {
									if (event.player.group == 'shu' && event.player != player) return true;
								}
								if (player.group == 'wu') {
									if (event.player.group == 'wu' && event.player != player) return true;
								}
								if (player.group == 'qun') {
									if (event.player.group == 'qun' && event.player != player) return true;
								}
								if (player.group == 'jin') {
									if (event.player.group == 'jin' && event.player != player) return true;
								}
								return false;
							},
							content() {
								if (trigger.player.isAlive == true || trigger.event != 'dying' || trigger.source != player) {
									player.useCard({ name: 'sha' }, trigger.player, true);
								}
							},
							group: ['zshy_panshi_sub1'],
							subSkill: {
								sub1: {
									audio: 'zshy_panshi',
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									filter(event, player, card) {
										return player.countCards('he');//QQQ
									},
									content() {
										'step 0';
										var str = '请选择重铸的牌';
										player.chooseCard([1, Infinity], 'he', str).set('ai', function (card) {
											return 10 - get.value(card);
										});
										('step 1');
										if (result.cards?.length) {
											player.recast(result.cards);
										}
									},
								},
							},
						},
						zshy_zhangquan: {
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								var list = ['wei', 'shu', 'wu', 'qun', 'jin'];
								player
									.chooseControl(list)
									.set('ai', function () {
										if (
											game.countPlayer(function (current, player) {
												return current.group == 'wei';
											}) > 1
										)
											return 'wei';
										if (
											game.countPlayer(function (current, player) {
												return current.group == 'shu';
											}) > 1
										)
											return 'shu';
										if (
											game.countPlayer(function (current, player) {
												return current.group == 'wu';
											}) > 1
										)
											return 'wu';
										if (
											game.countPlayer(function (current, player) {
												return current.group == 'qun';
											}) > 1
										)
											return 'qun';
										if (
											game.countPlayer(function (current, player) {
												return current.group == 'jin';
											}) > 1
										)
											return 'jin';
									})
									.set('prompt', '掌权:请选择你要变更为的势力？');
								('step 1');
								player.group = result.control;
								if (get.mode() == 'guozhan') {
									player.identity = result.control;
								}
								player.recover();
							},
							ai: {
								order(item, player) {
									return 100;
								},
								result: {
									player: 10,
								},
								nokeep: true,
								skillTagFilter(player, tag, arg) {
									if (player.group == 'wei') {
										return (
											game.countPlayer(function (current, player) {
												return current.group == 'wei';
											}) == 1
										);
									}
									if (player.group == 'shu') {
										return (
											game.countPlayer(function (current, player) {
												return current.group == 'shu';
											}) == 1
										);
									}
									if (player.group == 'wu') {
										return (
											game.countPlayer(function (current, player) {
												return current.group == 'wu';
											}) == 1
										);
									}
									if (player.group == 'qun') {
										return (
											game.countPlayer(function (current, player) {
												return current.group == 'qun';
											}) == 1
										);
									}
									if (player.group == 'jin') {
										return (
											game.countPlayer(function (current, player) {
												return current.group == 'jin';
											}) == 1
										);
									}
									return false;
								},
								threaten: 1.56,
							},
						},
						zshy_Mcaocao_choose: {
							charlotte: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							derivation: ['zshy_rongshi', 'zshy_jianxiong', 'zshy_xiandao', 'zshy_guixin', 'zshy_feiying'],
							popup: false,
							_priority: Infinity,
							content() {
								'step 0';
								var list = ['wei', 'shen'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return ['wei'].randomGet();
									})
									.set('prompt', '入世:请选择入世时机');
								('step 1');
								player.group = result.control;
								('step 2');
								if (player.group == 'wei') {
									if (get.mode() == 'guozhan') {
										player.identity = 'wei';
									}
									player.addSkill('zshy_rongshi');
									player.addSkill('zshy_jianxiong');
									player.addSkill('zshy_xiandao');
									if (player.name == 'zshy_Mcaocao') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mcaocao.jpg');
									}
								}
								if (player.group == 'shen') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shen';
									}
									player.loseMaxHp();
									player.addSkill('zshy_guixin');
									player.addSkill('zshy_feiying');
									if (player.name == 'zshy_Mcaocao') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshencaocaoSHZL.jpg');
									}
								}
							},
						},
						zshy_rongshi: {
							trigger: {
								global: ['roundStart'],
							},
							charlotte: true,
							forced: true,
							fixed: true,
							content() {
								var num = game.countPlayer(function (current, player) {
									return current.group == 'wei';
								});
								player.addMark('zshy_rongshi', num);
								var num = player.countMark('zshy_rongshi');
								player.draw(num);
							},
							marktext: '容士',
							intro: {
								name: '容士',
								name2: '容士',
								content: '已经容忍#次',
							},
							group: ['zshy_rongshi_refuse', 'zshy_rongshi_damage'],
							subSkill: {
								refuse: {
									trigger: {
										global: ['phaseBegin'],
									},
									charlotte: true,
									forced: true,
									fixed: true,
									juexingji: true,
									filter(event, player) {
										var num = game.countPlayer() + game.countPlayer();
										return player.countMark('zshy_rongshi') >= num && !player.hasSkill('zshy_guixin') && !player.hasSkill('zshy_feiying');
									},
									content() {
										'step 0';
										player.awakenSkill('zshy_rongshi_refuse');
										('step 1');
										player.removeSkill('zshy_rongshi');
										if (player.hasSkill('zshy_jianxiong')) {
											player.removeSkill('zshy_jianxiong');
											player.addSkill('zshy_guixin');
										}
										if (player.hasSkill('zshy_xiandao')) {
											player.removeSkill('zshy_xiandao');
											player.addSkill('zshy_feiying');
										}
										player.changeGroup('shen');
										if (get.mode() == 'guozhan') {
											player.identity = 'shen';
										}
										if (player.name == 'zshy_Mcaocao') {
											player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshencaocaoSHZL.jpg');
										}
									},
								},
								damage: {
									trigger: {
										player: ['damageEnd'],
									},
									forced: true,
									content() {
										player.addMark('zshy_rongshi', trigger.num);
									},
								},
							},
						},
						zshy_xiandao: {
							trigger: {
								player: 'gainAfter',
								global: 'loseAsyncAfter',
							},
							forced: true,
							filter(event, player) {
								var evt = event.getParent('phaseDraw'),
									hs = player.getCards('h'),
									cards = event.getg(player);
								return (
									cards.length > 1 &&
									(!evt || evt.player != player) &&
									cards.filter(function (card) {
										return hs.includes(card) && game.checkMod(card, player, 'unchanged', 'cardEnabled2', player) !== false;
									}).length == cards.length &&
									player.hasUseTarget(
										{
											name: 'sha',
											cards: event.cards,
										},
										false
									)
								);
							},
							content() {
								'step 0';
								player.chooseTarget('是否对一名角色使用一张无视距离且不计次限的【杀】？').set('ai', function (target) {
									var evt = _status.event;
									return get.effect(target, { name: 'sha' }, evt.source, evt.player);
								});
								('step 1');
								if (result.targets?.length) player.useCard({ name: 'sha' }, result.targets[0], false);
								else {
									event.finish;
								}
							},
						},
						zshy_Myuanshu_choose: {
							charlotte: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							derivation: ['zshy_wangzun', 'zshy_yongsi', 'zshy_weidi', 'zshy_minue'],
							popup: false,
							_priority: Infinity,
							content() {
								'step 0';
								var list = ['qun'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return ['qun'].randomGet();
									})
									.set('prompt', '入世:请选择入世时机');
								('step 1');
								player.group = result.control;
								('step 2');
								if (player.group == 'qun') {
									if (get.mode() == 'guozhan') {
										player.identity = 'qun';
									}
									player.addSkill('zshy_wangzun');
									player.addSkill('zshy_yongsi');
									if (player.name == 'zshy_Myuanshu') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Myuanshu.jpg');
									}
								}
							},
						},
						zshy_Mlvmeng_choose: {
							charlotte: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							derivation: ['zshy_shibie', 'zshy_keji', 'zshy_qinxue', 'zshy_botu', 'zshy_shelie', 'zshy_SLMgongxin'],
							popup: false,
							_priority: Infinity,
							content() {
								'step 0';
								var list = ['wu', 'shen'];
								player
									.chooseControl(list)
									.set('ai', function () {
										return ['wu'].randomGet();
									})
									.set('prompt', '入世:请选择入世时机');
								('step 1');
								player.group = result.control;
								('step 2');
								if (player.group == 'wu') {
									if (get.mode() == 'guozhan') {
										player.identity = 'wu';
									}
									player.addSkill('zshy_shibie');
									player.addSkill('zshy_keji');
									player.addSkill('zshy_qinxue');
									player.addSkill('zshy_botu');
									if (player.name == 'zshy_Mlvmeng') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_Mlvmeng.jpg');
									}
								}
								if (player.group == 'shen') {
									if (get.mode() == 'guozhan') {
										player.identity = 'shen';
									}
									player.loseMaxHp();
									player.addSkill('zshy_shelie');
									player.addSkill('zshy_SLMgongxin');
									if (player.name == 'zshy_Mlvmeng') {
										player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenlvmengSHZL.jpg');
									}
								}
							},
						},
						zshy_shibie: {
							trigger: {
								global: ['phaseEnd'],
							},
							charlotte: true,
							forced: true,
							fixed: true,
							juexingji: true,
							filter(event, player, card) {
								return player.countCards('h') >= player.maxHp * 3 && !player.hasSkill('zshy_shelie') && !player.hasSkill('zshy_SLMgongxin');
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_shibie');//QQQ
								('step 1');
								player.loseMaxHp();
								player.addSkill('zshy_shelie');
								player.addSkill('zshy_SLMgongxin');
								('step 2');
								player.removeSkill('zshy_keji');
								player.removeSkill('zshy_qinxue');
								player.removeSkill('zshy_botu');
								('step 3');
								player.group = 'shen';
								if (get.mode() == 'guozhan') {
									player.identity = 'shen';
								}
								if (player.name == 'zshy_Mlvmeng') {
									player.node.avatar.setBackgroundImage('extension/诸神寰宇/image/character/zshy_ZshenlvmengSHZL.jpg');
								}
							},
						},
					},
					translate: {
						zshy_ygys: '远古遗神',
						zshy_jmhy: '烬灭寰宇',
						zshy_ztmd: '诛天灭地',
						zshy_yjlk: '异界来客',
						zshy_yzzw: '异族之威',
						zshy_sexz: '十二星座',
						zshy_wjmt: '无尽命途',
						zshy_AAanjing: '安璟',
						zshy_AAanjing_Shenzun: '神尊',
						zshy_AAanjing_Shenzun_info: '【绝恒技】<li>游戏开始时,你废除判定区并防止翻面.<li>当一名角色展示判定牌后,你可以改变判定牌的花色.<li>你使用/打出的牌不可响应且伤害或回复基数+∞,你打出的【杀】无次数限制.<li>当你使用或打出牌结算后,你可以令一名其他角色死亡.<li>出牌阶段,你可以选择一名其他角色令其死亡.<li>你对其他角色造成的伤害视为无来源的即死伤害且不触发技能效果.<li>防止任何角色对你进行任何的 体力/体力上限 的变化,若变化来源不为你,其立即结算死亡.<li>你无法进行死亡结算且强制复活.<li>当场上有角色死亡时,你所在的阵营获得游戏胜利.',
						zshy_AAanjing_Jinmie: '烬灭',
						zshy_AAanjing_Jinmie_info: '【绝恒技】<li>当你需要使用或打出一张牌时,你可以发动〖烬灭〗,视为使用或打出一张基本牌或普通锦囊牌.<li>你的手牌没有上限限制;你不能成为其他角色的卡牌目标;你使用的牌无距离和次数限制;你所有区域的牌不能被其他角色获得或弃置.',
						zshy_AAanjing_Wusheng: '无生',
						zshy_AAanjing_Wusheng_info: '【绝恒技】<li>出牌阶段,你可以自选获得一张牌,此牌进入弃牌堆后销毁.',
						zshy_AAanjing_Yanmie: '湮灭',
						zshy_AAanjing_Yanmie_info: '【绝恒技】<li>当其他角色使用牌时,你令此牌无效,该角色死亡.',
						zshy_AAantianhen: '安天痕',
						zshy_AAantianhen_xuying: '虚影',
						zshy_AAantianhen_xuying_info: '【绝恒技】<li>游戏开始时,你废除判定区并防止翻面.<li>当你获得/失去牌后,你将手牌摸至体力上限.<li>你使用/打出的牌不可响应且伤害或回复基数+∞,你打出的【杀】无次数限制.<li>出牌阶段,你可以选择一名其他角色令其死亡.<li>你造成的伤害视为无来源且不触发技能效果.<li>防止其他角色对你进行任何的 体力/体力上限 的变化,其立即结算死亡.<li>防止你的死亡结算,回复至1点体力上限,你回复至满体力.',
						zshy_AAantianhen_miehen: '灭痕',
						zshy_AAantianhen_miehen_info: '【绝恒技】<li>你没有手牌上限限制;你不能成为其他角色的卡牌目标;你使用的牌无距离和次数限制.<li>当其他角色使用牌时,你选择一项:<br>①灭痕:令此牌无效.<br>②观迹:你摸一张牌.',
						zshy_AAjiusheng: '玖笙',
						zshy_AAjiusheng_huanying: '幻影',
						zshy_AAjiusheng_huanying_info: '【绝恒技】<li>你可以将一张基本/锦囊牌当做任意基本/锦囊牌使用或打出;你打出的牌不可响应.<li>防止你 减少体力上限/翻面/受到伤害/失去体力/死亡.<li>当你获得/失去牌后,你将手牌摸至体力上限.<li>你的手牌没有上限限制;你使用的牌无距离和次数限制.',
						zshy_AAjiusheng_mieshi: '灭噬',
						zshy_AAjiusheng_mieshi_info: '【绝恒技】<li>游戏开始时,废除你的判定区.<li>当你对其他角色造成伤害时,其死亡.',
						zshy_ABjieke: '杰克',
						zshy_ABjieke_ximing: '戏命',
						zshy_ABjieke_ximing_info: '【绝恒技】<li>防止你 减少体力上限/翻面/受到伤害/失去体力/死亡.<li>游戏开始时,废除你的判定区.<li>你使用的牌无距离和次数限制.',
						zshy_ABjieke_mingpai: '命牌',
						zshy_ABjieke_mingpai_info: '【绝恒技】<li>当你使用或打出牌时,你摸一张牌.<li>你使用的牌基本伤害和回复改为该牌点数.',
						zshy_AChonglian: '红莲',
						zshy_AChonglian_yehuo: '业火',
						zshy_AChonglian_yehuo_info: '【绝恒技】<li>防止你 减少体力上限/受到伤害/失去体力.<li>你使用的牌无距离限制.',
						zshy_AChonglian_fenzui: '焚罪',
						zshy_AChonglian_fenzui_info: '【绝恒技】<li>当你使用或打出牌A结算后,你可以令一名其他角色弃置所有与牌A名称相同的牌,你摸一张牌并对其造成一点神属性伤害.',
						zshy_ACmohen: '墨痕',
						zshy_ACmohen_moji: '墨迹',
						zshy_ACmohen_moji_info: '【绝恒技】<li>防止你 减少体力上限/受到伤害/失去体力.<li>当你造成的伤害视为神属性伤害.',
						zshy_ACmohen_rumu: '入木',
						zshy_ACmohen_rumu_info: '【绝恒技】<li>你使用的牌不可响应.',
						zshy_ACmohen_sanfen: '三分',
						zshy_ACmohen_sanfen_info: '【绝恒技】<li>当你使用有目标的基本牌或普通锦囊牌结算后,你可以额外视为对一名角色使用一张同名同属性的牌两次.',
						zshy_ACmohen_sanfen_double: '三分',
						zshy_ACmohen_huamo: '化墨',
						zshy_ACmohen_huamo_info: '【绝恒技】<li>当你获得牌后,你将所有手牌置于武将牌上作为「墨」.<li>你可以如手牌般使用或打出「墨」牌.',
						zshy_ADcanglan: '苍澜',
						zshy_ADcanglan_guying: '孤影',
						zshy_ADcanglan_guying_info: '【绝恒技】<li>当你即将造成其他角色 减少体力上限/受到伤害/失去体力 时,你增加1枚「影痕」.<li>受到伤害时,你减少1枚「影痕」.<li>防止你减少体力上限/失去体力/受到伤害.',
						zshy_ADcanglan_anxing: '暗行',
						zshy_ADcanglan_anxing_info: '【绝恒技】<li>你使用的牌基本伤害+X且不可响应.(X为你「影痕」的数量)<li>任意角色回合开始阶段或你 受到伤害/失去体力/失去体力上限 前,你摸一张牌并使用一张手牌.<li>你没有攻击距离限制.',
						zshy_ADjiuri: '旧日',
						zshy_ADjiuri_junwei: '君威',
						zshy_ADjiuri_junwei_info: '【绝恒技】<li>本局限X次,当你受到伤害时,你可以选择一名其他角色替你受到伤害,你摸等量牌.(X为你的体力上限)<li>当你造成伤害后,你重置〖君威〗使用次数.',
						zshy_ADjiuri_zuifa: '罪罚',
						zshy_ADjiuri_zuifa_info: '【绝恒技】<li>当你造成/受到1点伤害后,你可以令一名其他角色受到无来源的普通、冰、火、雷、神属性伤害各1点.',
						zshy_ADzhan: '斩',
						zshy_ADzhan_duanming: '',
						zshy_BAchuyinweilai: '初音未来',
						zshy_BAchuyinweilai_xuni: '虚拟',
						zshy_BAchuyinweilai_xuni_info: '【绝恒技】<li>当你受到伤害/失去体力时,减少1次本回合的〖幻音〗使用次数,防止之.',
						zshy_BAchuyinweilai_huanyin: '幻音',
						zshy_BAchuyinweilai_huanyin_info: '【绝恒技】<li>每回合限X次,当你需要使用或打出一张牌时,则你可以发动技能〖幻音〗,视为使用或打出一张基本牌或普通锦囊牌.(X为你的体力上限)<li>你使用的🃏牌无距离与次数限制、不可响应且牌面数值+Y.(Y为〖幻音〗剩余使用次数)<li>当你的体力减少时,重置本回合使用次数.',
						zshy_BAguyuefangyuan: '古月方源',
						zshy_BAguyuefangyuan_liandao: '炼道',
						zshy_BAguyuefangyuan_liandao_info: '',
						zshy_BAguyuefangyuan_poming: '破命',
						zshy_BAguyuefangyuan_poming: '',
						zshy_BAlongyi: '龙裔',
						zshy_BAlongyi_moyi: '末裔',
						zshy_BAlongyi_moyi_info: '【绝恒技】<li>游戏开始时/角色死亡后,你获得1枚「龙魂」,回复1点体力并摸两张牌.<li>当你即将死亡时,你可以减少1枚「龙魂」,回复至满体力并摸四张牌.',
						zshy_BAlongyi_baitong: '百通',
						zshy_BAlongyi_baitong_info: '【绝恒技】<li>当你在回合外使用或打出手牌后,你摸一张牌并可以使用一张非同类型手牌.<li>你的手牌上限、出【杀】次数、摸牌数+X.(X为「龙魂」数)',
						zshy_BAyangjian: '杨间',
						zshy_BAyangjian_guiqu: '鬼躯',
						zshy_BAyangjian_guiqu_info: '【绝恒技】<li>当你造成伤害后,你可以根据造成伤害值,选择以下任意一项:<br>①1点:其减少1点体力上限,你回复1点体力.<br>②2点:移除其武将牌上1个技能,你摸两张牌并回复1点体力.<br>③3点:获得并移除其武将牌上1个技能.<li>当你对体力值小于你的角色使用牌时,其无法响应此牌.',
						zshy_BAyangjian_guiyan: '鬼眼',
						zshy_BAyangjian_guiyan_info: '【绝恒技】<li>当你的体力上限大于10点时,你强制结算死亡.<li>防止你的濒死,你增加1点体力上限并回复体力值至1点,若此次濒死的伤害来源不为你,则你对其造成X点伤害.(X为你的体力上限)<li>游戏开始时,你获得「鬼眼」;当你拥有「鬼眼」时,你可以观看牌顶X张牌(X为你的体力上限).',
						zshy_BAyixiangren: '异乡人',
						zshy_BAyixiangren_xueyuan: '血源',
						zshy_BAyixiangren_xueyuan_info: '【绝恒技】<li>防止你减少体力上限/失去体力/受到大于1点的伤害.<li>当你受到伤害时,你令其获得〖血咒〗并增加X枚「血咒」.(X为本次变化值)',
						zshy_BAyixiangren_lieshen: '猎神',
						zshy_BAyixiangren_lieshen_info: '【绝恒技】<li>当你对其他角色造成伤害前,则你令其获得〖血咒〗并增加X枚「血咒」.(X为本次变化值)<li>当有「血咒」的角色死亡前,你回复1点体力并增加1点体力上限,摸「血咒」数量张牌,你可以获得其武将牌上任意个技能.',
						zshy_BAyixiangren_xunying: '迅影',
						zshy_BAyixiangren_xunying_info: '【绝恒技】<li>当你成为其他角色的卡牌目标时,你摸一张牌并选择1项:<br>①反击:使用一张牌.<br>②闪避:令此牌对你无效.(每回合使用次数不超过你的体力值)',
						zshy_BAyixiangren_xuezhou: '血咒',
						zshy_BAyixiangren_xuezhou_info: '【绝恒技】<li>当你 回复体力/增加体力上限 前,减少同等体力上限/取消之 并增加同等数量的「血咒」.<li>每轮游戏开始时/你的回合开始阶段,你减少1点体力上限/失去1点体力.<li>你的手牌上限-X.(X为「血咒」数)',
						zshy_BBaisha: '艾莎',
						zshy_BBaisha_jihun: '汲魂',
						zshy_BBaisha_jihun_info: '【状态技】<li>其他角色死亡前,你获得其一项技能.<li>当你 受到伤害/死亡 时,你摸一张牌/增加1点体力上限.',
						zshy_BBaisha_fusheng: '复生',
						zshy_BBaisha_fusheng_info: '【状态技||亡灵技】<li>当其他角色死亡时,若你已死亡,则复活至满状态并摸四张牌,否则你增加1点体力上限,若该角色没有〖亡灵〗,则防止其死亡并令其回复体力至上限、获得〖亡灵〗并摸四张牌,最后令除其外所有拥有〖亡灵〗的角色依次失去〖亡灵〗并强制阵亡.',
						zshy_BBaisha_wangling: '亡灵',
						zshy_BBaisha_wangling_info: '【状态技】<li>当任意角色回合开始时,你选择一名拥有〖复生〗的其他角色,若如此做,你将操纵权转交给其直到你死亡.',
						zshy_BBlilimu: '莉莉姆',
						zshy_BBlilimu_mingyou: '命佑',
						zshy_BBlilimu_mingyou_info: '【状态技】<li>当你需要使用或打出非无懈牌时,你可以观看牌堆顶X张牌(若此时为你的出牌阶段,则X为你的体力上限,否则为2倍体力上限),若其中有符合条件的,则你可以使用打出之,增加1点「契约」.<li>当你获得或失去牌后,若你有手牌,则你弃置所有手牌并获得等量「契约」.<li>你使用的【杀】+X.(X为「契约」数)',
						zshy_BBlilimu_moqi: '魔契',
						zshy_BBlilimu_moqi_info: '【状态技】<li>当你获得或失去牌后,若「契约」数不小于X,则你移除X点「契约」,增加1点体力上限并回复同等体力.(X为你的体力上限)',
						zshy_xingli: '星力',
						zshy_xingli_info: '【状态技】<li>每轮游戏开始/你受到伤害后,你为一名角色从12个随机技能中选择至多1个获得.',
						zshy_BCjinniuzuo: '金牛座',
						zshy_BCjinniuzuo_xingzhen: '星震',
						zshy_BCjinniuzuo_xingzhen_info: '【状态技】<li>你使用【杀】或普通锦囊牌指定其他角色为目标后,其失去1点体力且无法响应此牌,你弃置其一张牌.',
						zshy_Mguanyu: '命关羽',
						zshy_Mguanyu_choose: '入世',
						zshy_Mguanyu_choose_info: '【状态技】<li>游戏开始时,你选择1个势力并获得对应技能.<br>魏:获得〖择主〗/〖武圣〗/〖马术〗/〖追命〗.<br>蜀:获得〖入魏〗/〖武圣〗/〖追命〗.<br>神:增加1点体力上限并回复1点体力,获得〖武神〗/〖武魂〗/〖怒斩〗.',
						zshy_choosewei1: '择主',
						zshy_choosewei1_info: '<li>当你击杀一名角色后,你选择1项:<br>1.入魏:获得〖夺首〗.<br>2.返蜀:转变势力为蜀势力,失去〖马术〗,获得〖义绝〗.',
						zshy_chooseshu1: '入魏',
						zshy_chooseshu1_info: '<li>当你脱离濒死状态后,你转变势力为魏势力,回复1点体力并摸三张牌,获得〖择主〗/〖念恩〗.',
						zshy_chooseshu2: '择主',
						zshy_chooseshu2_info: '<li>当你击杀一名角色后,你选择1项:<br>1.入魏:获得〖马术〗/〖夺首〗.<br>2.返蜀:转变势力为蜀势力,失去〖念恩〗,获得〖义绝〗.',
						zshy_zhuiming: '追命',
						zshy_zhuiming_info: '<li>当你击杀一名角色时,你获得〖嗔绝〗.<li>亡灵技,当你死亡后,你将在下一轮开始时复活并增加1点体力上限至5点,回复至满体力,摸四张牌,〖武圣〗升级为〖武神〗,〖念恩〗升级为〖恩魂〗,〖夺首〗升级为〖威魂〗,〖义绝〗升级为〖义魂〗,若同时拥有〖夺首〗与〖念恩〗,则融合升级为〖圣魂〗,若未获得〖*魂〗四者之一,则获得〖武魂〗,〖嗔绝〗升级为〖怒斩〗,更换势力为神势力角色,最后失去〖追命〗/〖择主〗/〖入魏〗.',
						zshy_chenjue: '嗔绝',
						zshy_chenjue_info: '<li>出牌阶段限1次,你可以展示一名其他角色的一张手牌,选择1项:<br>①弃置任意张该花色的牌,对其造成等量伤害.<br>②获得该角色手牌中所有此花色的牌.<li>锁定技,当你使用或打出有花色的牌时,你令所有其他角色于此回合内不能使用或打出该花色的牌.',
						zshy_GYmashu: '马术',
						zshy_GYmashu_info: '【锁定技】<li>你计算与其他角色的距离时-1.',
						zshy_duoshou: '夺首',
						zshy_duoshou_info: '【锁定技】<li>①你每回合使用的第一张红色牌无距离限制.<br>②你每回合使用的第一张基本牌不计入使用次数且基础伤害/回复+1.<br>③你每回合第一次造成伤害后,你摸一张牌.',
						zshy_nianen: '念恩',
						zshy_nianen_info: '<li>你可以将一张牌当任意基本牌使用或打出,若此牌不为红色或你以此法使用或打出的牌不为普通【杀】,则直到此回合结束,该技能失效.',
						zshy_weihun: '威魂',
						zshy_weihun_info: '【状态技】<li>当你受到伤害或失去体力时,你摸X张牌,可以令一名其他角色获得X枚<魂>(X为触发数值).<br>②当你死亡时,你令所有有<魂>的角色弃置所有<魂>,随机弃置X张牌并失去X点体力(X为其弃置的<魂>数量),若X不小于其的体力值,则改为直接结算死亡.<br>③你使用的牌基础数值+1;当你造成伤害时,你摸一张牌.',
						zshy_shenghun: '圣魂',
						zshy_shenghun_info: '【状态技】<li>当你受到伤害或失去体力时,你摸X张牌,可以令一名其他角色获得X枚<魂>(X为触发数值).<br>②当你死亡时,你令所有有<魂>的角色弃置所有<魂>,随机弃置X张牌并失去X点体力(X为其弃置的<魂>数量),若X不小于其的体力值,则改为直接结算死亡.<br>③你使用的牌基础数值+1;当你造成伤害时,你摸一张牌.<br>④当你即将造成伤害时,你可以将伤害效果转化为回复效果.',
						zshy_enhun: '恩魂',
						zshy_enhun_info: '【状态技】<li>当你受到伤害或失去体力时,你摸X张牌,可以令一名其他角色获得X枚<魂>(X为触发数值).<br>②当你死亡时,你令所有有<魂>的角色弃置所有<魂>,随机弃置X张牌并失去X点体力(X为其弃置的<魂>数量),若X不小于其的体力值,则改为直接结算死亡.<br>③当你即将造成伤害时,你可以将伤害效果转化为回复效果.',
						zshy_yihun: '义魂',
						zshy_yihun_info: '【状态技】<li>当你受到伤害或失去体力时,你摸X张牌,可以令一名其他角色获得X枚<魂>(X为触发数值).<br>②当你死亡时,你令所有有<魂>的角色弃置所有<魂>,随机弃置X张牌并失去X点体力(X为其弃置的<魂>数量),若X不小于其的体力值,则改为直接结算死亡.<br>③当你对其他角色使用牌时,若牌为红色,则你获得目标角色一张牌,其失去1点体力;若牌为黑色,则你弃置目标一张牌,其不能使用或打出手牌.',
						zshy_nuzhan: '怒斩',
						zshy_nuzhan_info: '出牌阶段,你可以弃置至多五张不同花色的牌并对一名角色造成等量点伤害,若造成伤害大于等于其体力值的两倍,则该角色立即结算死亡,你摸三张牌,你回复1点体力并使本阶段〖怒斩〗失效;否则你摸等量张牌并受到伤害来源为自己的等量伤害.',
						zshy_Mzhangfei: '命张飞',
						zshy_Mzhangfei_choose: '入世',
						zshy_Mzhangfei_choose_info: '【状态技】<li>游戏开始时,你选择1个势力并获得对应技能.<br>蜀:获得〖咆哮〗/〖替身〗/〖任使〗.<br>神:获得〖神裁〗/〖巡使〗.',
						zshy_renshi: '任使',
						zshy_renshi_info: '亡灵技,当你死亡后,你将在下一轮开始时复活并增加体力与体力上限至4点,摸四张牌,〖咆哮〗升级为〖巡使〗,获得〖神裁〗,更换势力为神势力角色,最后失去〖任使〗并终止命运技触发.',
						zshy_Mmachao: '命马超',
						zshy_Mmachao_choose: '入世',
						zshy_Mmachao_choose_info: '【状态技】<li>游戏开始时,你选择1个势力并获得对应技能.<br>蜀:获得〖马术〗/〖铁骑〗/〖威侯〗/〖神威〗.<br>群:获得〖追击〗/〖誓仇〗/〖神威〗.<br>神:获得〖狩骊〗/〖横骛〗.',
						zshy_shenwei: '神威',
						zshy_shenwei_info: '【觉醒技】<li>当你造成8点雷电伤害及以上后,〖马术〗/〖追击〗升级为〖狩骊〗,〖铁骑〗/〖誓仇〗升级为〖横骛〗,更换势力为神势力角色.<br>②当你击杀一名角色后,你获得〖威侯〗.',
						zshy_shenwei1: '神威',
						zshy_shenwei2: '神威',
						zshy_shichou: '誓仇',
						zshy_shichou_info: '<br>当你使用【杀】时,你可以令至多X名角色也成为此【杀】的目标.(X为你已损失的体力值+1)',
						zshy_zhuiji: '追击',
						zshy_zhuiji_info: '【锁定技】<li>①你至体力值不大于你的角色的距离为1.<br>②当你使用【杀】指定距离为1的角色为目标后,你令其选择一项:<br>⒈弃置一张牌.<br>⒉弃置装备区内的所有牌.',
						zshy_weihou: '威侯',
						zshy_weihou_info: '①你可将一张非基本牌当【杀】或【决斗】使用或打出,你以此法使用红色转化牌的伤害值+1.<br>②锁定技,当你造成伤害后,你根据本回合累计造成的伤害获得不同的效果:<br>1点:你摸一张牌;<br>2点:你选择回复1点体力或摸两张牌;<br>3点:此回合使用牌无距离和次数限制.',
						zshy_Mzhaoyun: '命赵云',
						zshy_Mzhaoyun_choose: '入世',
						zshy_Mzhaoyun_choose_info: '【状态技】<li>游戏开始时,你选择1个势力并获得对应技能.<br>蜀;获得〖龙胆〗/〖涯角〗/〖化龙〗.<br>群:获得〖龙胆〗/〖冲阵〗/〖化龙〗.<br>神:〖龙魂〗/〖绝境〗/〖化龙〗.',
						zshy_hualong: '化龙',
						zshy_hualong_info: '【觉醒技】<li>当你造成/受到伤害,回复体力大于等于7点时,你获得〖逢生〗.<li>当你造成/受到伤害,回复体力大于等于14点时,失去〖龙胆〗/〖涯角〗/〖冲阵〗,获得〖龙魂〗/〖绝境〗,减少1点体力上限,选择回复1点体力或摸一张牌,并更换势力为神势力角色.<li>当你造成/受到伤害,回复体力大于等于28点时,失去〖龙魂〗/〖绝境〗,获得〖龙魄〗,减少1点体力上限,选择回复1点体力或摸一张牌,并更换势力为神势力角色.',
						zshy_hualong1: '化龙',
						zshy_hualong2: '化龙',
						zshy_hualong3: '化龙',
						zshy_chongzhen: '冲阵',
						zshy_chongzhen_info: '当你使用或打出【杀】或【闪】时,你可以获得 使用/回应 目标角色的一张牌,视为对其使用一张无距离与次数限制的【杀】.',
						zshy_fengsheng: '逢生',
						zshy_fengsheng_info: '【状态技】<br>每轮限1次,当你受到致命伤害时,你可以取消之,重置任意张牌.',
						zshy_Mliubei: '命刘备',
						zshy_Mliubei_choose: '入世',
						zshy_Mliubei_choose_info: '【状态技】<li>游戏开始时,你选择1个势力并获得对应技能.<br>蜀;获得〖仁德〗/〖仁义〗/〖结义〗.<br>群:获得〖积善〗/〖振鞘〗/〖结义〗.<br>神:增加2点体力上限并回复2点体力,获得〖龙怒〗/〖结营〗.',
						zshy_jieyi: '结义',
						zshy_jieyi_info: '<li>当任意角色死亡时,若其为你同势力的角色,则你弃置所有「仁」,并摸X张牌(X为「仁」数+存活角色数*2),失去〖仁德〗/〖仁义〗/〖积善〗/〖振鞘〗,增加2点体力上限并回复2点体力,并获得〖龙怒〗/〖结营〗.',
						zshy_jishan: '积善',
						zshy_jishan_info: '<li>每回合限1次.当一名角色受到伤害时,你可以与其各摸一张牌,若该角色为同势力武将,则各摸两张.<li>每回合限1次.当你造成伤害后,你可以令一名体力值最小且你对其发动过〖积善①〗的角色回复1点体力,若该角色为同势力武将,则回复2点.',
						zshy_zhenqiao: '振鞘',
						zshy_zhenqiao_info: '【锁定技】<li>你的攻击范围+1;当你使用【杀】指定目标后,你令此【杀】的效果额外结算1次.',
						zshy_Msunquan: '命孙权',
						zshy_Msunquan_choose: '入世',
						zshy_Msunquan_choose_info: '【状态技】<li>游戏开始时,你选择1个势力并获得对应技能.<br>魏:获得〖称臣〗/〖异心〗.<br>吴:获得〖制衡〗.',
						zshy_chenchen: '称臣',
						zshy_chenchen_info: '<li>锁定技,每轮游戏开始时,你获得X枚「称臣」.(X为场上同势力角色数)<li>状态技,当你受到伤害时,你可以移除1枚「称臣」并选择一名同势力角色替你受到伤害,你摸等量牌并获得1枚「异心」.',
						zshy_yixin: '异心',
						zshy_yixin_info: '<li>每轮游戏开始时/你的回合结束时,若你拥有「异心」,则你摸X张牌.<li>觉醒技,你的回合开始时,若「异心」数大于等于X(X为你的体力上限+「称臣」数),则你失去〖称臣〗,获得〖叛势〗,并转换势力为吴势力.<li>觉醒技,当场上一名角色死亡后,若场上无其他与你同势力的角色,则你获得〖掌权〗.',
						zshy_panshi: '叛势',
						zshy_panshi_info: '<li>锁定技,当同势力的其他角色 受到伤害/回复体力 后,若来源不为你,则你视为对其出一张无距离与次数限制的【杀】.<li>当你造成1点伤害后,你可以重铸任意张牌.',
						zshy_zhangquan: '掌权',
						zshy_zhangquan_info: '<li>出牌阶段限1次,你可以转变你的势力,回复1点体力.',
						zshy_Mcaocao: '命曹操',
						zshy_Mcaocao_choose: '入世',
						zshy_Mcaocao_choose_info: '【状态技】<li>游戏开始时,你选择1个势力并获得对应技能.<br>魏:获得〖容士〗/〖奸雄〗/〖献刀〗.<br>神:减少1点体力上限,获得〖归心〗/〖飞影〗.',
						zshy_rongshi: '容士',
						zshy_rongshi_info: '【锁定技】<li>每轮游戏开始时,你获得X枚「容士」,摸Y张牌.(X为场上存活魏势力角色数,Y为「容士」数)<li>当你受到伤害后,你获得X枚「容士」.(X为本次受到的伤害)<li>每名角色回合开始时,若「容士」数大于等于存活角色数的2倍,则你失去〖容士〗/〖奸雄〗/〖献刀〗,获得〖归心〗/〖飞影〗.',
						zshy_xiandao: '献刀',
						zshy_xiandao_info: '<li>当你于摸牌阶段外得到一张以上的牌时,你可以视为对一名角色使用一张无距离与次数限制的【杀】.',
						zshy_Myuanshu: '命袁术',
						zshy_Myuanshu_choose: '入世',
						zshy_Myuanshu_choose_info: '【状态技】<li>游戏开始时,你选择1个势力并获得对应技能.<br>群:获得〖妄尊〗/〖庸肆〗.',
						zshy_Mlvmeng: '命吕蒙',
						zshy_Mlvmeng_choose: '入世',
						zshy_Mlvmeng_choose_info: '【状态技】<li>游戏开始时,你选择1个势力并获得对应技能.<br>吴:获得〖士别〗/〖克己〗/〖勤学〗/〖博图〗.<br>神:减少1点体力上限,获得〖涉猎〗/〖攻心〗.',
						zshy_shibie: '士别',
						zshy_shibie_info: '【觉醒技】<li>回合结束阶段,若你的手牌大于你体力上限的3倍,则你减少1点体力上限,失去〖克己〗/〖勤学〗/〖博图〗,获得〖涉猎〗/〖攻心〗.',
					},
				};
				for (var i in zshy_XWSD_.character) {
					if (zshy_XWSD_.translate[i]) {
						if (zshy_XWSD_.translate[i].indexOf('安璟') == 0) zshy_XWSD_.translate[i + '_prefix'] = '安璟';
						if (zshy_XWSD_.translate[i].indexOf('安天痕') == 0) zshy_XWSD_.translate[i + '_prefix'] = '安天痕';
						if (zshy_XWSD_.translate[i].indexOf('玖笙') == 0) zshy_XWSD_.translate[i + '_prefix'] = '玖笙';
						if (zshy_XWSD_.translate[i].indexOf('杰克') == 0) zshy_XWSD_.translate[i + '_prefix'] = '杰克';
						if (zshy_XWSD_.translate[i].indexOf('红莲') == 0) zshy_XWSD_.translate[i + '_prefix'] = '红莲';
						if (zshy_XWSD_.translate[i].indexOf('墨痕') == 0) zshy_XWSD_.translate[i + '_prefix'] = '墨痕';
						if (zshy_XWSD_.translate[i].indexOf('苍澜') == 0) zshy_XWSD_.translate[i + '_prefix'] = '苍澜';
						if (zshy_XWSD_.translate[i].indexOf('旧日') == 0) zshy_XWSD_.translate[i + '_prefix'] = '旧日';
						if (zshy_XWSD_.translate[i].indexOf('斩') == 0) zshy_XWSD_.translate[i + '_prefix'] = '斩';
						if (zshy_XWSD_.translate[i].indexOf('命') == 0) zshy_XWSD_.translate[i + '_prefix'] = '命';
					}
					for (var i in zshy_XWSD_.character) {
						zshy_XWSD_.character[i][4].push('ext:诸神寰宇/image/character/' + i + '.jpg');
					}
				}
				lib.config.all.characters.add('zshy_XWSD_');
				lib.config.characters.add('zshy_XWSD_');
				lib.translate.zshy_XWSD__character_config = '诸神寰宇';
				return zshy_XWSD_;
			});
			game.import('character', function () {
				var zshy_ZSGSA_ = {
					name: 'zshy_ZSGSA_',
					character: {
						zshy_Yshenzhaoyun: ['male', 'shen', '1/1/0', ['zshy_longpo'], ['shen']],
						zshy_ZguanyuBZ: ['male', 'shu', '4/4/0', ['zshy_wusheng', 'zshy_yijue'], ['shu']],
						zshy_ZzhangfeiBZ: ['male', 'shu', '4/4/0', ['zshy_paoxiao', 'zshy_tishen'], ['shu']],
						zshy_ZmachaoBZ: ['male', 'shu', '4/4/0', ['zshy_MCmashu', 'zshy_tieji'], ['shu']],
						zshy_ZzhaoyunBZ: ['male', 'shu', '4/4/0', ['zshy_longdan', 'zshy_yajiao'], ['shu']],
						zshy_ZliubeiBZ: ['male', 'shu', '4/4/0', ['zshy_rende', 'zshy_renyi'], ['shu', 'zhu']],
						zshy_ZsunquanBZ: ['male', 'wu', '4/4/0', ['zshy_zhiheng'], ['wu', 'zhu']],
						zshy_ZcaocaoBZ: ['male', 'wei', '4/4/0', ['zshy_jianxiong'], ['wei', 'zhu']],
						zshy_ZyuanshuBZ: ['male', 'qun', '4/4/0', ['zshy_wangzun'], ['qun', 'zhu']],
						zshy_ZganningBZ: ['male', 'wu', '4/4/0', ['zshy_jinfan', 'zshy_qixi'], ['wu']],
						zshy_ZlvmengBZ: ['male', 'wu', '4/4/0', ['zshy_keji', 'zshy_qinxue', 'zshy_botu'], ['wu']],
						zshy_ZhuanggaiBZ: ['male', 'wu', '4/4/0', ['zshy_kurou', 'zshy_zhaxiang'], ['wu']],
						zshy_ZxiahoudunBZ: ['male', 'wei', '4/4/0', ['zshy_ganglie', 'zshy_qingjian'], ['wei']],
						zshy_ZzhangliaoBZ: ['male', 'wei', '4/4/0', ['zshy_tuxi', 'zshy_zhengbing', 'zshy_powei'], ['wei']],
						zshy_ZxuzhuBZ: ['male', 'wei', '4/4/0', ['zshy_luoyi', 'zshy_huwei'], ['wei']],
						zshy_ZlvbuBZ: ['male', 'qun', '5/5/0', ['zshy_wushuang', 'zshy_liqu'], ['qun']],
						zshy_ZhuaxiongBZ: ['male', 'qun', '6/6/0', ['zshy_yaowu', 'zshy_shizhan'], ['qun']],
						zshy_ZzhugeliangBZ: ['male', 'shu', '3/3/0', ['zshy_guanxing', 'zshy_kongcheng'], ['shu']],
						zshy_ZzhouyuBZ: ['male', 'wu', '3/3/0', ['zshy_yingzi', 'zshy_fanjian', 'zshy_ronghuo'], ['wu']],
						zshy_ZluxunBZ: ['male', 'wu', '3/3/0', ['zshy_qianxun', 'zshy_lianying'], ['wu']],
						zshy_ZhuatuoBZ: ['male', 'qun', '3/3/0', ['zshy_jijiu', 'zshy_qingnang'], ['qun']],
						zshy_ZsimayiBZ: ['male', 'wei', '3/3/0', ['zshy_guicai', 'zshy_fankui'], ['wei']],
						zshy_ZguojiaBZ: ['male', 'wei', '3/3/0', ['zshy_tiandu', 'zshy_yice', 'zshy_yiji'], ['wei']],
						zshy_ZhuangyueyingBZ: ['female', 'shu', '3/3/0', ['zshy_jizhi', 'zshy_qicai'], ['shu']],
						zshy_ZdaqiaoBZ: ['female', 'wu', '3/3/0', ['zshy_guose', 'zshy_liuli'], ['wu']],
						zshy_ZzhenjiBZ: ['female', 'wei', '3/3/0', ['zshy_qingguo', 'zshy_luoshen'], ['wei']],
						zshy_ZdiaochanBZ: ['female', 'qun', '3/3/0', ['zshy_lijian', 'zshy_biyue'], ['qun']],
						zshy_ZsunshangxiangBZ: ['female', 'wu', '3/3/0', ['zshy_xiaoji', 'zshy_jieyin'], ['wu']],
						zshy_ZweiyanSHZL: ['male', 'shu', '4/4/0', ['zshy_kuanggu', 'zshy_qimou'], ['shu']],
						zshy_ZxiahouyuanSHZL: ['male', 'wei', '4/4/0', ['zshy_shensu', 'zshy_shebian'], ['wei']],
						zshy_ZcaorenSHZL: ['male', 'wei', '4/4/0', ['zshy_jushou', 'zshy_jiewei'], ['wei']],
						zshy_ZxiaoqiaoSHZL: ['female', 'wu', '3/3/0', ['zshy_tianxiang', 'zshy_hongyan', 'zshy_piaoling'], ['wu']],
						zshy_ZhuangzhongSHZL: ['male', 'shu', '4/4/0', ['zshy_liegong'], ['shu']],
						zshy_ZzhoutaiSHZL: ['male', 'wu', '4/4/0', ['zshy_buqu', 'zshy_fenji'], ['wu']],
						zshy_ZyujiSHZL: ['male', 'qun', '3/3/0', ['zshy_guhuo'], ['qun']],
						zshy_ZzhangjiaoSHZL: ['male', 'qun', '3/3/0', ['zshy_leiji', 'zshy_guidao'], ['qun', 'zhu']],
						zshy_ZshenguanyuSHZL: ['male', 'shen', '5/5/0', ['zshy_wushen', 'zshy_wuhun'], ['shen']],
						zshy_ZshenlvmengSHZL: ['male', 'shen', '3/3/0', ['zshy_shelie', 'zshy_SLMgongxin'], ['shen']],
						zshy_ZdianweiSHZL: ['male', 'wei', '4/4/0', ['zshy_qiangxi', 'zshy_ninge'], ['wei']],
						zshy_ZxunyuSHZL: ['male', 'wei', '3/3/0', ['zshy_quhu', 'zshy_jieming'], ['wei']],
						zshy_ZpangtongSHZL: ['male', 'shu', '3/3/0', ['zshy_lianhuan', 'zshy_niepan'], ['shu']],
						zshy_ZwolongzhugeSHZL: ['male', 'shu', '3/3/0', ['zshy_huoji', 'zshy_bazhen', 'zshy_kanpo', 'zshy_cangzhuo'], ['shu']],
						zshy_ZtaishiciSHZL: ['male', 'wu', '4/4/0', ['zshy_tianyi', 'zshy_hanzhan'], ['wu']],
						zshy_ZpangdeSHZL: ['male', 'qun', '4/4/0', ['zshy_jianchu', 'zshy_PDmashu'], ['qun']],
						zshy_ZyanliangwenchouSHZL: ['male', 'qun', '4/4/0', ['zshy_shuangxiong'], ['qun']],
						zshy_ZyuanshaoSHZL: ['male', 'qun', '4/4/0', ['zshy_luanji'], ['qun', 'zhu']],
						zshy_ZshenzhouyuSHZL: ['male', 'shen', '4/4/0', ['zshy_yeyan', 'zshy_qinyin'], ['shen']],
						zshy_ZshenzhugeliangSHZL: ['male', 'shen', '3/3/0', ['zshy_qixing', 'zshy_dawu', 'zshy_kuangfeng'], ['shen']],
						zshy_ZxuhuangSHZL: ['male', 'wei', '4/4/0', ['zshy_duanliang', 'zshy_jiezi'], ['wei']],
						zshy_ZcaopiSHZL: ['male', 'wei', '3/3/0', ['zshy_fangzhu', 'zshy_xingshang', 'zshy_songwei'], ['wei', 'zhu']],
						zshy_ZsunjianSHZL: ['male', 'wu', '4/5/0', ['zshy_yinghun', 'zshy_wulie'], ['wu', 'zhu']],
						zshy_ZdongzhuoSHZL: ['male', 'qun', '8/8/0', ['zshy_jiuchi', 'zshy_roulin', 'zshy_benghuai', 'zshy_baonue'], ['qun', 'zhu']],
						zshy_ZzhurongSHZL: ['female', 'shu', '4/4/0', ['zshy_juxiang', 'zshy_lieren', 'zshy_changbiao'], ['shu']],
						zshy_ZmenghuoSHZL: ['male', 'shu', '4/4/0', ['zshy_huoshou', 'zshy_zaiqi'], ['shu']],
						zshy_ZjiaxuSHZL: ['male', 'qun', '3/3/0', ['zshy_wansha', 'zshy_luanwu', 'zshy_weimu'], ['qun']],
						zshy_ZlusuSHZL: ['male', 'wu', '3/3/0', ['zshy_haoshi', 'zshy_dimeng'], ['wu']],
						zshy_ZshenlvbuSHZL: ['male', 'shen', '6/6/0', ['zshy_kuangbao', 'zshy_wuqian', 'zshy_wumou', 'zshy_shenfen', 'zshy_SLBwushuang'], ['shen']],
						zshy_ZshencaocaoSHZL: ['male', 'shen', '3/3/0', ['zshy_guixin', 'zshy_feiying'], ['shen', 'zhu']],
						zshy_ZzhangheSHZL: ['male', 'wei', '4/4/0', [], ['wei']],
						zshy_ZdengaiSHZL: ['male', 'wei', '4/4/0', [], ['wei']],
						zshy_ZjiangweiSHZL: ['male', 'shu', '4/4/0', [], ['shu']],
						zshy_ZliushanSHZL: ['male', 'shu', '3/3/0', [], ['shu']],
						zshy_ZsunceSHZL: ['male', 'wu', '4/4/0', [], ['wu']],
						zshy_ZzhangshaozhanghongSHZL: ['male', 'wu', '3/3/0', [], ['wu']],
						zshy_ZzuociSHZL: ['male', 'qun', '3/3/0', [], ['qun']],
						zshy_ZcaiwenjiSHZL: ['female', 'qun', '3/3/0', [], ['qun']],
						zshy_ZshensimayiSHZL: ['male', 'shen', '4/4/0', ['zshy_renjie', 'zshy_lianpo', 'zshy_baiyin'], ['shen', 'zhu']],
						zshy_ZshenzhaoyunSHZL: ['male', 'shen', '2/2/0', ['zshy_longhun', 'zshy_juejing'], ['shen']],
						zshy_ZwangjiSHZL: ['male', 'wei', '3/3/0', [], ['wei']],
						zshy_ZyanyanSHZL: ['male', 'shu', '4/4/0', [], ['shu']],
						zshy_ZwangpingSHZL: ['male', 'shu', '3/3/0', [], ['shu']],
						zshy_ZlujiSHZL: ['male', 'wu', '3/3/0', [], ['wu']],
						zshy_ZsunliangSHZL: ['male', 'wu', '3/3/0', [], ['wu']],
						zshy_ZpengliangpengyueSHZL: ['male', 'wei', '3/3/0', [], ['wei']],
						zshy_ZxuyouSHZL: ['male', 'qun', '3/3/0', [], ['qun']],
						zshy_ZluzhiSHZL: ['male', 'qun', '3/3/0', [], ['qun']],
						zshy_ZshenliubeiSHZL: ['male', 'shen', '6/6/0', ['zshy_longnu', 'zshy_jieying'], ['shen', 'zhu']],
						zshy_ZshenluxunSHZL: ['male', 'shen', '4/4/0', ['zshy_junlve', 'zshy_cuike', 'zshy_zhanhuo'], ['shen']],
						zshy_ZyuanshuSHZL: ['male', 'qun', '4/4/0', ['zshy_yongsi'], ['qun', 'zhu']],
						zshy_ZhaozhaoSHZL: ['male', 'wei', '4/4/0', ['zshy_zhengu'], ['wei']],
						zshy_ZchendaoSHZL: ['male', 'shu', '4/4/0', [], ['shu']],
						zshy_ZzhugezhanSHZL: ['male', 'shu', '3/3/0', [], ['shu']],
						zshy_ZzhoufeiSHZL: ['female', 'wu', '3/3/0', [], ['wu']],
						zshy_ZguanqiujianSHZL: ['male', 'wei', '4/4/0', [], ['wei']],
						zshy_ZlukangSHZL: ['male', 'wu', '4/4/0', [], ['wu']],
						zshy_ZzhangxiuSHZL: ['male', 'qun', '4/4/0', [], ['qun']],
						zshy_ZshenzhangliaoSHZL: ['male', 'shen', '4/4/0', ['zshy_duorui', 'zshy_zhiti'], ['shen']],
						zshy_ZshenganningSHZL: ['male', 'shen', '3/6/0', ['zshy_poxi', 'zshy_SGNjieying'], ['shen']],
						zshy_ZshenzhangfeiXD: ['male', 'shen', '4/4/0', ['zshy_shencai', 'zshy_xunshi'], ['shen']],
						zshy_ZshenmachaoXD: ['male', 'shen', '4/4/0', ['zshy_shouli', 'zshy_hengwu'], ['shen']],
					},
					characterSort: {
						zshy_ZSGSA_: {
							zshy_ZSGSA_AAAA: ['zshy_Yshenzhaoyun'],
							zshy_ZSGSA_SHHJ: ['zshy_ZguanyuBZ', 'zshy_ZzhangfeiBZ', 'zshy_ZmachaoBZ', 'zshy_ZzhaoyunBZ'],
							zshy_ZSGSA_XJMZ: ['zshy_ZliubeiBZ', 'zshy_ZsunquanBZ', 'zshy_ZcaocaoBZ', 'zshy_ZyuanshuBZ'],
							zshy_ZSGSA_YGSJ: ['zshy_ZganningBZ', 'zshy_ZlvmengBZ', 'zshy_ZhuanggaiBZ', 'zshy_ZxiahoudunBZ', 'zshy_ZzhangliaoBZ', 'zshy_ZxuzhuBZ', 'zshy_ZlvbuBZ', 'zshy_ZhuaxiongBZ'],
							zshy_ZSGSA_WWQL: ['zshy_ZzhugeliangBZ', 'zshy_ZzhouyuBZ', 'zshy_ZluxunBZ', 'zshy_ZhuatuoBZ', 'zshy_ZsimayiBZ', 'zshy_ZguojiaBZ'],
							zshy_ZSGSA_JGHY: ['zshy_ZhuangyueyingBZ', 'zshy_ZdaqiaoBZ', 'zshy_ZzhenjiBZ', 'zshy_ZdiaochanBZ', 'zshy_ZsunshangxiangBZ'],
							zshy_ZSGSA_FENG: ['zshy_ZweiyanSHZL', 'zshy_ZxiahouyuanSHZL', 'zshy_ZcaorenSHZL', 'zshy_ZxiaoqiaoSHZL', 'zshy_ZhuangzhongSHZL', 'zshy_ZzhoutaiSHZL', 'zshy_ZyujiSHZL', 'zshy_ZzhangjiaoSHZL', 'zshy_ZshenguanyuSHZL', 'zshy_ZshenlvmengSHZL'],
							zshy_ZSGSA_HUO: ['zshy_ZdianweiSHZL', 'zshy_ZxunyuSHZL', 'zshy_ZpangtongSHZL', 'zshy_ZwolongzhugeSHZL', 'zshy_ZtaishiciSHZL', 'zshy_ZpangdeSHZL', 'zshy_ZyanliangwenchouSHZL', 'zshy_ZyuanshaoSHZL', 'zshy_ZshenzhouyuSHZL', 'zshy_ZshenzhugeliangSHZL'],
							zshy_ZSGSA_LIN: ['zshy_ZxuhuangSHZL', 'zshy_ZcaopiSHZL', 'zshy_ZsunjianSHZL', 'zshy_ZdongzhuoSHZL', 'zshy_ZzhurongSHZL', 'zshy_ZmenghuoSHZL', 'zshy_ZjiaxuSHZL', 'zshy_ZlusuSHZL', 'zshy_ZshenlvbuSHZL', 'zshy_ZshencaocaoSHZL'],
							zshy_ZSGSA_SHAN: ['zshy_ZzhangheSHZL', 'zshy_ZdengaiSHZL', 'zshy_ZjiangweiSHZL', 'zshy_ZliushanSHZL', 'zshy_ZsunceSHZL', 'zshy_ZzhangshaozhanghongSHZL', 'zshy_ZzuociSHZL', 'zshy_ZcaiwenjiSHZL', 'zshy_ZshensimayiSHZL', 'zshy_ZshenzhaoyunSHZL'],
							zshy_ZSGSA_YIN: ['zshy_ZwangjiSHZL', 'zshy_ZyanyanSHZL', 'zshy_ZwangpingSHZL', 'zshy_ZlujiSHZL', 'zshy_ZsunliangSHZL', 'zshy_ZpengliangpengyueSHZL', 'zshy_ZxuyouSHZL', 'zshy_ZluzhiSHZL', 'zshy_ZshenliubeiSHZL', 'zshy_ZshenluxunSHZL'],
							zshy_ZSGSA_LEI: ['zshy_ZyuanshuSHZL', 'zshy_ZhaozhaoSHZL', 'zshy_ZchendaoSHZL', 'zshy_ZzhugezhanSHZL', 'zshy_ZzhoufeiSHZL', 'zshy_ZguanqiujianSHZL', 'zshy_ZlukangSHZL', 'zshy_ZzhangxiuSHZL', 'zshy_ZshenzhangliaoSHZL', 'zshy_ZshenganningSHZL'],
							zshy_ZSGSA_XDSW: ['zshy_ZshenzhangfeiXD', 'zshy_ZshenmachaoXD'],
						},
					},
					characterTitle: {
						zshy_Yshenzhaoyun: '天龙乘云',
						zshy_ZguanyuBZ: '威震华夏',
						zshy_ZzhangfeiBZ: '万夫不当',
						zshy_ZmachaoBZ: '西凉铁骑',
						zshy_ZzhaoyunBZ: '七进七出',
						zshy_ZliubeiBZ: '仁义之士',
						zshy_ZsunquanBZ: '制衡之道',
						zshy_ZcaocaoBZ: '乱世奸雄',
						zshy_ZyuanshuBZ: '野心仲帝',
						zshy_ZganningBZ: '锦帆游侠',
						zshy_ZlvmengBZ: '士别三日',
						zshy_ZhuanggaiBZ: '轻身为国',
						zshy_ZxiahoudunBZ: '独眼罗刹',
						zshy_ZzhangliaoBZ: '袭敌不备',
						zshy_ZxuzhuBZ: '勇力绝人',
						zshy_ZlvbuBZ: '不败战神',
						zshy_ZhuaxiongBZ: '愈战愈勇',
						zshy_ZzhugeliangBZ: '决策千里',
						zshy_ZzhouyuBZ: '雄姿英发',
						zshy_ZluxunBZ: '谦谦君子',
						zshy_ZhuatuoBZ: '鹿林圣手',
						zshy_ZsimayiBZ: '鹰视狼顾',
						zshy_ZguojiaBZ: '智策奇佐',
						zshy_ZhuangyueyingBZ: '智心巧手',
						zshy_ZdaqiaoBZ: '国色之姿',
						zshy_ZzhenjiBZ: '洛水倾国',
						zshy_ZdiaochanBZ: '闭月羞花',
						zshy_ZsunshangxiangBZ: '弓腰美姬',
						zshy_ZweiyanSHZL: '嗜血独狼',
						zshy_ZxiahouyuanSHZL: '绝尘妙才',
						zshy_ZcaorenSHZL: '坚石铁壁',
						zshy_ZxiaoqiaoSHZL: '矫情之花',
						zshy_ZhuangzhongSHZL: '没金饮羽',
						zshy_ZzhoutaiSHZL: '舍身护主',
						zshy_ZyujiSHZL: '幻惑众心',
						zshy_ZzhangjiaoSHZL: '大贤良师',
						zshy_ZshenguanyuSHZL: '鬼神再临',
						zshy_ZshenlvmengSHZL: '圣光国士',
						zshy_ZdianweiSHZL: '古之恶来',
						zshy_ZxunyuSHZL: '王佐之才',
						zshy_ZpangtongSHZL: '放浪形骸',
						zshy_ZwolongzhugeSHZL: '卧龙出山',
						zshy_ZtaishiciSHZL: '笃烈之士',
						zshy_ZpangdeSHZL: '人马一体',
						zshy_ZyanliangwenchouSHZL: '虎狼兄弟',
						zshy_ZyuanshaoSHZL: '四世三公',
						zshy_ZshenzhouyuSHZL: '赤壁火神',
						zshy_ZshenzhugeliangSHZL: '赤壁妖师',
						zshy_ZxuhuangSHZL: '亚夫之风',
						zshy_ZcaopiSHZL: '霸业继者',
						zshy_ZsunjianSHZL: '魂佑江东',
						zshy_ZdongzhuoSHZL: '西凉魔王',
						zshy_ZzhurongSHZL: '野性女王',
						zshy_ZmenghuoSHZL: '南蛮之王',
						zshy_ZjiaxuSHZL: '冷酷毒士',
						zshy_ZlusuSHZL: '独断好施',
						zshy_ZshenlvbuSHZL: '修罗之道',
						zshy_ZshencaocaoSHZL: '超世英杰',
						zshy_ZzhangheSHZL: '',
						zshy_ZdengaiSHZL: '',
						zshy_ZjiangweiSHZL: '',
						zshy_ZliushanSHZL: '',
						zshy_ZsunceSHZL: '',
						zshy_ZzhangshaozhanghongSHZL: '',
						zshy_ZzuociSHZL: '',
						zshy_ZcaiwenjiSHZL: '',
						zshy_ZshensimayiSHZL: '晋国之祖',
						zshy_ZshenzhaoyunSHZL: '神威如龙',
						zshy_ZwangjiSHZL: '',
						zshy_ZyanyanSHZL: '',
						zshy_ZwangpingSHZL: '',
						zshy_ZlujiSHZL: '',
						zshy_ZsunliangSHZL: '',
						zshy_ZpengliangpengyueSHZL: '',
						zshy_ZxuyouSHZL: '',
						zshy_ZluzhiSHZL: '',
						zshy_ZshenliubeiSHZL: '誓守桃园',
						zshy_ZshenluxunSHZL: '红莲业火',
						zshy_ZyuanshuSHZL: '',
						zshy_ZhaozhaoSHZL: '扣弦豪将',
						zshy_ZchendaoSHZL: '',
						zshy_ZzhugezhanSHZL: '',
						zshy_ZzhoufeiSHZL: '',
						zshy_ZguanqiujianSHZL: '',
						zshy_ZlukangSHZL: '',
						zshy_ZzhangxiuSHZL: '',
						zshy_ZshenzhangliaoSHZL: '雁门刑天',
						zshy_ZshenganningSHZL: '江表力牧',
						zshy_ZshenzhangfeiXD: '两界巡使',
						zshy_ZshenmachaoXD: '神威天将',
					},
					dynamicTranslate: {},
					card: {},
					skill: {
						zshy_bancard: {
							mark: true,
							marktext: '封印',
							mod: {
								cardEnabled2(card) {
									if (get.position(card) == 'h') return false;
								},
							},
							intro: {
								content: '不能使用或打出手牌',
							},
						},
						zshy_longpo: {
							audio: 'ext:诸神寰宇/audio/character:4',
							enable: ['chooseToUse', 'chooseToRespond'],
							charlotte: true,
							hiddenCard(player, name) {
								var type = get.type2(name);
								if (type == 'basic') return player.countCards('hs', { type: 'basic' });
								if (type == 'trick') return player.countCards('hs', { type: ['trick', 'delay'] });
							},
							filter(event, player) {
								for (var i of lib.inpile) {
									var type = get.type2(i),
										filter = event.filterCard;
									if (type == 'basic' && filter({ name: i }, player, event) && player.countCards('hs', { type: 'basic' })) return true;
									if (type == 'trick' && filter({ name: i }, player, event) && player.countCards('hs', { type: ['trick', 'delay'] })) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i of lib.inpile) {
										var type = get.type2(i),
											filter = event.filterCard;
										if (type == 'basic' && player.countCards('hs', { type: 'basic' })) {
											if (filter({ name: i }, player, event)) list.push(['基本', '', i]);
											if (i == 'sha') {
												for (var j of lib.inpile_nature) {
													if (filter({ name: i, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
												}
											}
										}
										if (type == 'trick' && player.countCards('hs', { type: ['trick', 'delay'] })) {
											if (filter({ name: i }, player, event)) list.push(['锦囊', '', i]);
										}
									}
									return ui.create.dialog('龙魄', [list, 'vcard'], 'hidden');
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									var player = _status.event.player;
									return player.getUseValue({ name: button.link[2] }) + 1;
								},
								backup(links, player) {
									return {
										filterCard(card, player, target) {
											if (get.type(links[0][2]) == 'basic') return get.type2(card) == 'basic';
											return get.type2(card) == 'trick';
										},
										check(card, player, target) {
											return 15 - get.value(card);
										},
										viewAs: { name: links[0][2], nature: links[0][3] },
										position: 'hs',
										popname: true,
										precontent() {
										},
									};
								},
								prompt(links, player) {
									if (get.type(links[0][2]) != 'basic') return '将一张锦囊牌当做' + get.translation(links[0][2]) + '使用';
									return '将一张基本牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
								},
							},
							mod: {
								maxHandcardBase(player, num) {
									return num + 4;
								},
							},
							ai: {
								respondSha: true,
								respondShan: true,
								fireAttack: true,
								skillTagFilter(player, tag) {
									if (!player.countCards('hs', { type: 'basic' })) return false;
								},
								order: 1,
								result: {
									player(player) {
										if (_status.event.type == 'dying') {
											return get.attitude(player, _status.event.dying);
										}
										return 1;
									},
								},
							},
							group: ['zshy_longpo_MaxHp', 'zshy_longpo_DrawTo', 'zshy_longpo_Usecard'],
							subSkill: {
								MaxHp: {
									audio: 'zshy_longpo',
									trigger: {
										player: ['loseMaxHpBefore', 'turnOverBefore'],
									},
									forced: true,
									filter(event, player, name) {
										if (name != 'turnOverBefore') return true;
										return !player.isTurnedOver();
									},
									content() {
										trigger.cancel();
									},
									ai: {
										noturn: true,
									},
								},
								DrawTo: {
									audio: 'zshy_longpo',
									trigger: {
										player: 'loseAfter',
										global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
									},
									forced: true,
									filter(event, player, target) {
										return player.countCards('h') < 4 + player.maxHp;
									},
									content() {
										var num = 4 + player.maxHp;
										player.drawTo(num);
									},
									ai: {
										noh: true,
										skillTagFilter(player, tag) {
											if (tag == 'noh' && player.countCards('h') > 4) return false;
										},
									},
								},
								Usecard: {
									audio: 'zshy_longpo',
									trigger: {
										player: ['useCard', 'respond'],
									},
									forced: true,
									content() {
										if (trigger.card.suit == 'spade') trigger.directHit = game.players;//QQQ
										if (trigger.card.suit == 'club') player.draw();
										if (trigger.card.suit == 'heart') player.recover();
										if (trigger.card.suit == 'diamond') trigger.baseDamage++;
										if (trigger.card.suit == 'none') player.gainMaxHp();
									},
									ai: {
										directHit_ai(player, tag, arg) {
											if (arg.card.suit == 'spade') return true;
										},
										skillTagFilter(player, tag, arg) {
											return arg.card.suit;
										},
									},
								},
							},
						},
						zshy_wusheng: {
							audio: 'ext:诸神寰宇/audio/character:5',
							audioname: ['zshy_Mguanyu'],
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								if ('sha' != name) return false;
								return player.countCards('hes', { color: 'red' });
							},
							filter(event, player) {
								if (!player.countCards('hes', { color: 'red' })) return false;
								return event.filterCard({ name: 'sha', color: 'red' }, player, event);
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									if (event.filterCard && event.filterCard({ name: 'sha', color: 'red' }, player, event)) {
										list.push(['基本', '', 'sha']);
										for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
									}
									return ui.create.dialog('武圣', [list, 'vcard']);
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2], color: 'red' }, player, _status.event.parent);
								},
								check(button) {
									var player = _status.event.player;
									return player.getUseValue({ name: button.link[2] }) + 1;
								},
								backup(links, player) {
									return {
										filterCard(card, player) {
											return get.color(card) == 'red';
										},
										position: 'hes',
										popname: true,
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
										},
										check(card, player, target) {
											return 7 - get.value(card);
										},
										precontent() {
										},
									};
								},
								prompt(links, player) {
									var name = links[0][2],
										nature = links[0][3];
									return '将一张红色牌当作' + (get.translation(nature) || '') + '【' + get.translation(name) + '】使用或打出';
								},
							},
							mod: {
								targetInRange(card) {
									if (card.name == 'sha' && get.color(card) == 'red' && card.suit == 'diamond') return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return (num += player.getDamagedHp());
								},
							},
							ai: {
								fireAttack: true,
								respondSha: true,
								skillTagFilter(player, tag) {
									return player.countCards('hes', { color: 'red' });
								},
								order(name, player) {
									return get.order({ name: 'sha' }) + 0.5;
								},
								result: {
									player: 1,
								},
							},
							group: ['zshy_wusheng_Red', 'zshy_wusheng_usetarget'],
							subSkill: {
								Red: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									silent: true,
									popup: false,
									firstDo: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && get.color(event.card) == 'red' && event.card.suit == 'heart';
									},
									content() {
										trigger.baseDamage++;
									},
									ai: {
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'sha' && get.color(arg.card) == 'red';
										},
									},
								},
								usetarget: {
									audio: 'zshy_wusheng',
									trigger: {
										player: 'useCardToTargeted',
									},
									forced: true,
									logTarget: 'target',
									prompt: '武圣:是否弃置其一张手牌,若为【闪】则其不能响应？',
									filter(event, player, card, target) {
										return event.card && event.card.name == 'sha' && event.targets && event.targets.length == 1;
									},
									check(event, player) {
										return get.attitude(player, event.target) < 0;
									},
									content() {
										'step 0';
										player.discardPlayerCard('h', trigger.target, true);
										('step 1');
										if (result.bool && result.cards.length && result.cards[0].name == 'shan') {
											game.log(trigger.target, '不能响应', trigger.card);
											trigger.directHit.push(trigger.target);
										}
									},
								},
							},
						},
						zshy_yijue: {
							audio: 'ext:诸神寰宇/audio/character:2',
							audioname: ['zshy_Mguanyu'],
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && target.countCards('h');
							},
							content() {
								'step 0';
								target.chooseCard(true, 'h').set('ai', function (card) {
									var player = _status.event.player;
									if ((player.hasShan() || player.hp < 3) && get.color(card) == 'black') return 0.5;
									return Math.max(1, 20 - get.value(card));
								});
								('step 1');
								player.loseHp();
								target.showCards(result.cards);
								event.card2 = result.cards[0];
								player.gain(event.card2, target, 'give', 'bySelf');
								if (get.color(event.card2) == 'black') {
									if (!target.hasSkill('fengyin')) {
										target.addTempSkill('fengyin');
									}
									target.addTempSkill('zshy_yijue_refuse');
									event.finish();
								} else {
									target.loseHp();
									player.gain(1, target, true);
								}
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										return -4;
									},
								},
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (!arg.target.hasSkillTag('zshy_yijue_refuse')) return false;
								},
							},
							subSkill: {
								refuse: {
									trigger: {
										player: 'damageBegin1',
									},
									filter(event, player) {
										return event.source && event.source == _status.currentPhase && event.card && event.card.name == 'sha' && get.color(event.card) == 'red' && event.notLink();
									},
									popup: false,
									forced: true,
									charlotte: true,
									content() {
										trigger.num++;
									},
									mark: true,
									mod: {
										cardEnabled2(card) {
											if (get.position(card) == 'h') return false;
										},
									},
									intro: {
										content: '不能使用或打出手牌',
									},
								},
							},
						},
						zshy_paoxiao: {
							audio: 'ext:诸神寰宇/audio/character:4',
							trigger: { player: 'shaMiss' },
							forced: true,
							content() {
								player.addTempSkill('zshy_paoxiao_effect', 'phaseUseAfter');
								player.addSkill('zshy_paoxiao_damage');
								player.addMark('zshy_paoxiao_damage', 1);
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
							group: ['zshy_paoxiao_end', 'zshy_paoxiao_effect', 'zshy_paoxiao_mangji'],
							subSkill: {
								damage: {
									audio: 'zshy_paoxiao',
									trigger: {
										source: 'damageBegin1',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && player.countMark('zshy_paoxiao_damage') > 0;
									},
									content() {
										trigger.num += player.countMark('zshy_paoxiao_damage');
										player.removeSkill('zshy_paoxiao_damage');
									},
									intro: { content: '下一次使用【杀】造成伤害时令伤害值+#' },
								},
								effect: {
									charlotte: true,
									trigger: { player: 'useCardToPlayered' },
									forced: true,
									popup: false,
									logTarget: 'target',
									filter(event, player) {
										return player.countMark('zshy_paoxiao_damage') >= event.target.hp;
									},
									content() {
										game.log(trigger.target, '不能响应', trigger.card);
										trigger.directHit.push(trigger.target);
									},
								},
								mangji: {
									audio: 'zshy_paoxiao',
									forced: true,
									trigger: {
										global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
									},
									forced: true,
									filter(event, player) {
										if (player.hp < 1) return false;
										if (['damage', 'loseHp', 'recover'].includes(event.name)) return true;
										var evt = event.getl(player);
										if (event.name == 'equip' && event.player == player) return !evt || evt.cards.length != 1;
										if (!evt || !evt.es.length) return false;
										return game.hasPlayer((current) => player.canUse('sha', current, false));
									},
									content() {
										'step 0';
										player
											.chooseTarget({
												prompt: '莽击:选择一名角色,视为对一名其他角色使用一张【杀】',
												forced: true,
												filterTarget(card, player, target) {
													return player.canUse('sha', target, false);
												},
											})
											.set('ai', function (target) {
												var player = _status.event.player;
												return get.effect(target, { name: 'sha' }, player, player);
											});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											if (player.canUse('sha', target, false)) player.useCard({ name: 'sha' }, target, false);
										}
									},
								},
								end: {
									trigger: {
										player: ['phaseEnd'],
									},
									forced: true,
									filter(event, player) {
										return player.countMark('zshy_paoxiao_damage') > 0;
									},
									content() {
										var num = player.countMark('zshy_paoxiao_damage');
										player.draw(num);
									},
								},
							},
						},
						zshy_tishen: {
							audio: 'ext:诸神寰宇/audio/character:2',
							mark: true,
							limited: true,
							trigger: {
								player: ['phaseZhunbeiBegin', 'dying'],
							},
							filter(event, player) {
								if (player.storage.zshy_tishen) return false;
								return player.isDamaged();
							},
							check(event, player) {
								if (name == 'dying') return true;
								if (player.hp <= 2 || player.getDamagedHp() > 2) return true;
								if (player.getDamagedHp() <= 1) return false;
								return player.getDamagedHp() < game.roundNumber;
							},
							content() {
								player.awakenSkill('zshy_tishen');
								player.addSkillLog('zshy_tishen');
								player.hp = player.maxHp;
								var dnum = player.maxHp - player.hp;
								player.draw(dnum);
							},
							intro: {
								content: 'limited',
							},
						},
						zshy_tieji: {
							audio: 'ext:诸神寰宇/audio/character:4',
							audioname: ['zshy_Mmachao'],
							trigger: { player: 'useCardToPlayered' },
							logTarget: 'target',
							filter(event, player) {
								return player != event.target && event.card.name == 'sha' && event.target.isIn();
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								'step 0';
								var target = trigger.target;
								event.target = target;
								target.addTempSkill('fengyin');
								trigger.directHit.add(target);
								('step 1');
								player.gainPlayerCard(target, 'he', true);
								player.draw();
							},
							shaRelated: true,
							ai: {
								presha: true,
								ignoreSkill: true,
								directHit_ai: true,
							},
							group: ['zshy_tieji_Sha'],
							subSkill: {
								Sha: {
									trigger: {
										source: 'damageBegin3',
									},
									forced: true,
									silent: true,
									popup: false,
									firstDo: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										trigger.num += player.getDamagedHp();
									},
									ai: {
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'sha';
										},
									},
								},
							},
						},
						zshy_MCmashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 2;
								},
							},
						},
						zshy_longdan: {
							audio: 'ext:诸神寰宇/audio/character:4',
							hiddenCard(player, name) {
								if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
								if (name == 'jiu') return player.countCards('hs', 'tao') > 0;
								return false;
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							position: 'hs',
							prompt: '将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
							viewAs(cards, player) {
								var name = false;
								switch (cards[0]?.name) {
									case 'sha':
										name = 'shan';
										break;
									case 'shan':
										name = 'sha';
										break;
									case 'tao':
										name = 'jiu';
										break;
									case 'jiu':
										name = 'tao';
										break;
								}
								if (name) return { name: name };
								return null;
							},
							check(card) {
								var player = _status.event.player;
								if (_status.event.type == 'phase') {
									var max = 0;
									var name2;
									var list = ['sha', 'tao', 'jiu'];
									var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
									for (var i = 0; i < list.length; i++) {
										var name = list[i];
										if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
											var temp = get.order({ name: name });
											if (temp > max) {
												max = temp;
												name2 = map[name];
											}
										}
									}
									if (name2 == card.name) return 1;
									return 0;
								}
								return 1;
							},
							filterCard(card, player, event) {
								event = event || _status.event;
								var filter = event._backup.filterCard;
								var name = card.name;
								if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
								if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
								if (name == 'tao' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
								if (name == 'jiu' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
								return false;
							},
							filter(event, player) {
								var filter = event.filterCard;
								if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
								if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
								if (filter({ name: 'tao' }, player, event) && player.countCards('hs', 'jiu')) return true;
								if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', 'tao')) return true;
								return false;
							},
							mod: {
								aiValue(player, card, num) {
									if (card.name != 'sha' && card.name != 'shan') return;
									var geti = function () {
										var cards = player.getCards('hs', function (card) {
											return card.name == 'sha' || card.name == 'shan';
										});
										if (cards.includes(card)) {
											return cards.indexOf(card);
										}
										return cards.length;
									};
									return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
								},
								aiUseful() {
									return lib.skill.zshy_longdan.mod.aiValue.apply(this, arguments);
								},
							},
							ai: {
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag) {
									var name;
									switch (tag) {
										case 'respondSha':
											name = 'shan';
											break;
										case 'respondShan':
											name = 'sha';
											break;
									}
									if (!player.countCards('hs', name)) return false;
								},
								order(item, player) {
									if (player && _status.event.type == 'phase') {
										var max = 0;
										var list = ['sha', 'tao', 'jiu'];
										var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
										for (var i = 0; i < list.length; i++) {
											var name = list[i];
											if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
												var temp = get.order({ name: name });
												if (temp > max) max = temp;
											}
										}
										if (max > 0) max += 0.3;
										return max;
									}
									return 4;
								},
							},
							group: 'zshy_longdan_Deputy',
							subSkill: {
								Deputy: {
									trigger: {
										player: ['useCard', 'respond'],
									},
									forced: true,
									firstDo: true,
									forced: true,
									filter(event, player) {
										return event.skill == 'zshy_longdan';
									},
									content() {
										player.draw();
									},
								},
							},
						},
						zshy_yajiao: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: { player: 'loseAfter' },
							forced: true,
							filter(event, player) {
								return player != _status.currentPhase && ['useCard', 'respond'].includes(event.parent.name);
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('zshy_yajiao'), '选择获得一名角色区域内一张牌,摸一张牌', function (card, player, target) {
										return target.countGainableCards(player, 'hej');
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (!player.countCards('h')) return false;
										return get.effect(target, { name: 'guohe_copy2' }, player, player) > 1;
									});
								('step 1');
								if (result.targets?.length) {
									player.line(result.targets[0]);
									player.gainPlayerCard(result.targets[0], 'hej', true);
									player.draw();
								} else player.draw();
							},
							ai: {
								order: 9,
								result: {
									target() {
										return 3;
									},
								},
							},
						},
						zshy_rende: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							lose: false,
							delay: false,
							discard: false,
							position: 'hes',
							filterCard: true,
							selectCard: [1, Infinity],
							filter(event, player) {
								return player.countCards('hes');
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								var player = get.owner(card);
								if (ui.selected.cards.length) return 0;
								if (player.needsToDiscard()) {
									return 10 - get.value(card);
								}
								return 7 - get.value(card);
							},
							content() {
								'step 0';
								event.num = 0;
								event.count = 0;
								player.give(cards, target);
								('step 1');
								for (var i of cards) {
									event.num++;
									event.count++;
								}
								var dnum = event.num + event.num;
								if (event.num > 0 && target.group == player.group) {
									player.addMark('zshy_renyi', dnum);
								} else {
									if (event.num > 0) player.addMark('zshy_renyi', event.num);
								}
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (target.hasSkillTag('nogain')) return 0;
										var nh = target.countCards('h');
										return Math.max(1, 5 - nh);
									},
								},
							},
						},
						zshy_renyi: {
							audio: 'zshy_rende',
							trigger: {
								global: 'roundStart',
							},
							forced: true,
							lastDo: true,
							filter(event, player) {
								return (
									game.countPlayer(function (current, player) {
										return current.group == 'shu';
									}) > 0
								);
							},
							content() {
								var num = game.countPlayer(function (current, player) {
									return current.group == 'shu';
								});
								player.addMark('zshy_renyi', num);
							},
							marktext: '仁',
							intro: {
								name2: '仁',
								content: 'mark',
							},
							group: 'zshy_renyi_Basic',
							subSkill: {
								Basic: {
									audio: 'zshy_renyi',
									enable: ['chooseToUse', 'chooseToRespond'],
									hiddenCard(player, name) {
										return get.type(name) == 'basic' && player.countMark('zshy_renyi') > 1;
									},
									filter(event, player) {
										if (event.type == 'wuxie' || player.countMark('zshy_renyi') < 2) return false;
										for (var i of lib.inpile) {
											if (get.type(i) != 'basic') continue;
											var card = { name: i };
											if (event.filterCard && event.filterCard(card, player, event)) return true;
											if (i == 'sha') {
												for (var j of lib.inpile_nature) {
													card.nature = j;
													if (event.filterCard && event.filterCard(card, player, event)) return true;
												}
											}
										}
										return false;
									},
									chooseButton: {
										dialog(event, player) {
											var list = [];
											for (var i of lib.inpile) {
												if (get.type(i) != 'basic') continue;
												var card = { name: i };
												if (event.filterCard && event.filterCard(card, player, event)) list.push(['基本', '', i]);
												if (i == 'sha') {
													for (var j of lib.inpile_nature) {
														card.nature = j;
														if (event.filterCard && event.filterCard(card, player, event)) list.push(['基本', '', i, j]);
													}
												}
											}
											return ui.create.dialog('仁义', [list, 'vcard']);
										},
										filter(button, player) {
											var card = { name: button.link[2], nature: button.link[3] };
											var evt = _status.event.parent;
											return evt.filterCard(card, player, evt);
										},
										check(button, player) {
											if (typeof button.link == 'string') return -1;
											if (_status.event.parent.type != 'phase') return 1;
											return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
										},
										backup(links, player) {
											return {
												popname: true,
												selectCard: -1,
												filterCard() {
													return false;
												},
												viewAs: {
													name: links[0][2],
													nature: links[0][3],
												},
												precontent() {
													player.removeMark('zshy_renyi', 2);
												},
											};
										},
										prompt(links, player) {
											return '视为使用或打出' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
										},
									},
									ai: {
										respondSha: true,
										respondShan: true,
										skillTagFilter(player) {
											if (!player.countMark('zshy_renyi') > 1) return false;
										},
										order: 1,
										result: {
											player(player) {
												if (_status.event.dying) {
													return get.attitude(player, _status.event.dying);
												}
												return _status.event.type == 'phase' && player.countMark('zshy_renyi') <= 2 ? 0 : 1;
											},
										},
									},
								},
							},
						},
						zshy_zhiheng: {
							audio: 'ext:诸神寰宇/audio/character:2',
							audioname: ['zshy_ZshensimayiSHZL'],
							mod: {
								maxHandcard(player, num) {
									return num + player.countMark('zshy_zhiheng');
								},
							},
							marktext: '衡',
							intro: {
								name: '制衡',
								name2: '制衡',
								content: 'mark',
							},
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filterCard: lib.filter.cardDiscardable,
							discard: false,
							lose: false,
							delay: false,
							selectCard: [1, Infinity],
							prompt(event) {
								var str = '出牌阶段限1次.你可以弃置任意张牌并摸等量的牌,你根据弃置手牌数是否达到数量依次执行效果.';
								return str;
							},
							check(card) {
								var player = _status.event.player;
								if (!player.countCards('h', 'tao') && get.position(card) == 'h' && !player.countCards('h', 'du')) return 1;
								else return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.discard(cards);
								('step 1');
								player.draw(cards.length);
								if (cards.length > 1) {
									player.addMark('zshy_zhiheng_dun', 1);
								}
								if (cards.length > 2) {
									player.draw();
								}
								if (cards.length > 3) {
									player.addMark('zshy_zhiheng_attack', 1);
								}
								if (cards.length > 4) {
									player.recover();
								}
								if (cards.length > 5) {
									player.addMark('zshy_zhiheng', 1);
								}
							},
							ai: {
								order: 10,
								result: {
									player: 10,
								},
								nokeep: true,
								skillTagFilter(player, tag, arg) {
									if (tag === 'nokeep') return (!arg || (arg && arg.card && arg.card.name === 'tao')) && player.isPhaseUsing() && !player.getStat().skill.zshy_zhiheng && player.hasCard((card) => card.name !== 'tao', 'h');
								},
								threaten: 1.56,
							},
							group: ['zshy_zhiheng_damage', 'zshy_zhiheng_damage1'],
							subSkill: {
								dun: {
									marktext: '守',
									intro: {
										name: '守御',
										name2: '守御',
										content: 'mark',
									},
								},
								attack: {
									marktext: '攻',
									intro: {
										name: '攻伐',
										name2: '攻伐',
										content: 'mark',
									},
								},
								damage: {
									audio: 'zshy_zhiheng',
									trigger: {
										player: 'damageBegin4',
									},
									lastDo: true,
									filter(event, player) {
										return player.hasMark('zshy_zhiheng_dun');
									},
									check(event, player) {
										return get.attitude(player, event.player) > 0;
									},
									logTarget: 'player',
									prompt2(event, player) {
										return '弃置1枚「守」并防止' + get.translation(event.player) + '即将受到的' + event.num + '点伤害';
									},
									content() {
										player.removeMark('zshy_zhiheng_dun', 1);
										trigger.cancel();
									},
								},
								damage1: {
									audio: 'zshy_zhiheng',
									trigger: {
										source: 'damageBegin4',
									},
									lastDo: true,
									filter(event, player) {
										return player.hasMark('zshy_zhiheng_attack');
									},
									check(event, player) {
										return get.attitude(player, event.player) < 0;
									},
									logTarget: 'player',
									prompt2(event, player) {
										return '弃置1枚「攻」并令' + get.translation(event.player) + '即将受到的伤害增加1点';
									},
									content() {
										player.removeMark('zshy_zhiheng_attack', 1);
										trigger.num++;
									},
								},
							},
						},
						zshy_jianxiong: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							logTarget: 'source',
							content() {
								'step 0';
								if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
									player.gain(trigger.cards, 'gain2');
								}
								if (trigger.source) {
									player.draw(trigger.source.hp);
								}//QQQ
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										if (get.tag(card, 'damage') && player != target) {
											var cards = card.cards,
												evt = _status.event;
											if (evt.player == target && card.name == 'damage' && evt.parent.type == 'card') cards = evt.parent.cards.filterInD();
											if (target.hp <= 1) return;
											if (get.itemtype(cards) != 'cards') return;
											for (var i of cards) {
												if (i.name == 'tao') return [1, 5];
											}
											if (get.value(cards, target) >= 7 + target.getDamagedHp()) return [1, 3];
											return [1, 0.6];
										}
									},
								},
							},
						},
						zshy_wangzun: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'phaseBegin',
							},
							check(event, player) {
								var target = event.player;
								return get.attitude(player, target) < 0;
							},
							filter(event, player) {
								var target = event.player;
								if (target == player) return false;
								return target.isIn();
							},
							logTarget: 'player',
							prompt2(event, player) {
								var target = event.player;
								return '摸一张牌,令' + get.translation(target) + '其获得1枚「妄尊」.';
							},
							content() {
								var target = trigger.player;
								player.draw();
								target.addSkill('zshy_wangzun_debuff');
								target.addMark('zshy_wangzun_debuff', 1);
							},
							ai: {
								expose: 1,
								threaten: 2,
							},
							subSkill: {
								debuff: {
									mark: true,
									marktext: '妄尊',
									intro: {
										name: '妄尊',
										name2: '妄尊',
										content: 'mark',
									},
									mod: {
										maxHandcard(player, num) {
											return num - player.countMark('zshy_wangzun_debuff');
										},
									},
									trigger: {
										source: ['damageEnd'],
									},
									forced: true,
									filter(event, player, target) {
										return event.player.hasSkill('zshy_wangzun');
									},
									content() {
										player.removeMark('zshy_wangzun_debuff', 1);
										if (player.countMark('zshy_wangzun_debuff') <= 0) player.removeSkill('zshy_wangzun_debuff');
									},
								},
							},
						},
						zshy_tongji: {
						},
						zshy_jinfan: {
							mod: {
								globalTo(from, to, current) {
									return current + 1;
								},
							},
						},
						zshy_qixi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							audioname: ['zshy_Mganning'],
							trigger: { player: 'useCardToPlayered' },
							forced: true,
							logTarget: 'target',
							filter(event, player) {
								return event.target != player && (event.card.name == 'sha' || get.type(event.card, false) == 'trick') && event.target.countCards('he') > 0 && get.color(event.card) == 'black';
							},
							content() {
								'step 0';
								trigger.target.chooseToDiscard('he', true);
								('step 1');
								if (result.bool && result.cards.length && get.color(result.cards[0], trigger.target) == get.color(trigger.card)) {
									game.log(trigger.target, '不能响应', trigger.card);
									trigger.directHit.push(trigger.target);
									player.say('可识得我锦帆游侠？哈哈哈哈!');
									player.gainPlayerCard(trigger.target, 'he', true);
								}
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (player !== target && get.itemtype(target) === 'player' && (card.name === 'sha' || get.type(card, false) === 'trick') && target.countCards('he') && !target.hasSkillTag('noh')) return [1, 0, 1, -1];
									},
								},
							},
						},
						zshy_keji: {
							audio: 'ext:诸神寰宇/audio/character:2',
							audioname: ['zshy_Mlvmeng'],
							forced: true,
							trigger: {
								player: ['phaseDiscardBefore'],
							},
							content() {
								player.draw();
								if (player.countCards() > player.hp) {
									player.recover();
								}
								trigger.cancel();
							},
						},
						zshy_qinxue: {
							audio: 'ext:诸神寰宇/audio/character:2',
							audioname: ['zshy_Mlvmeng'],
							enable: 'phaseUse',
							usable: 1,
							lose: false,
							delay: false,
							position: 'h',
							discard: false,
							filterCard(card, player, event) {
								return !card.hasGaintag('zshy_qinxue');
							},
							filter(event, player) {
								var num = 0,
									cards = player.getCards('h');
								for (var i of cards) {
									if (!i.hasGaintag('zshy_qinxue')) num++;
								}
								return num > 0;
							},
							check(card) {
								if (get.type(card) != 'basic' && get.type(card) != 'trick') return 0;
								return get.value(card) - 6;
							},
							prompt: '出牌阶段限1次,你可以复制一张手牌,称为<勤学>牌',
							content() {
								var card = cards[0];
								var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
								player.gain(cardx).gaintag.add('zshy_qinxue');
							},
							ai: {
								order: 9,
								result: {
									player: 9,
								},
							},
							marktext: '勤学',
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							onremove(player, skill) {
								var cards = player.getExpansions(skill);
								if (cards.length) player.loseToDiscardpile(cards);
							},
							mod: {
								ignoredHandcard(card, player) {
									if (card.hasGaintag('zshy_qinxue')) return true;
								},
							},
						},
						zshy_botu: {
							audio: 'ext:诸神寰宇/audio/skill:2',
							audioname: ['zshy_Mlvmeng'],
							trigger: { global: 'phaseAfter' },
							forced: true,
							filter(event, player) {
								var history = event.player.getHistory('useCard');
								var suits = [];
								for (var i = 0; i < history.length; i++) {
									var suit = history[i].card.suit;
									if (suit) suits.add(suit);
								}
								return suits.length >= 4;
							},
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player.phase('nodelay');
							},
						},
						zshy_kurou: {
							audio: 'ext:诸神寰宇/audio/character:5',
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							content() {
								player.loseHp();
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.hujia;
								},
							},
							group: ['zshy_kurou_damage'],
							subSkill: {
								damage: {
									trigger: {
										player: 'damageBegin4',
									},
									forced: true,
									filter(event, player) {
										return event.hasNature('fire');
									},
									content() {
										trigger.cancel();
										player.loseHp(trigger.num);
									},
									ai: {
										effect: {
											target(card, player, target) {
												if (get.tag(card, 'fireDamage')) return [1, 3];
											},
										},//QQQ
									},
								},
							},
							ai: {
								order() {
									return [5, 6, 7, 8].randomGet();
								},
								result: {
									player(player) {
										if (player.hp < 2 && !player.canSave(player)) return -1;
										return 1;
									},
								},
							},
						},
						zshy_zhaxiang: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: { player: 'loseHpEnd' },
							forced: true,
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								event.count--;
								player.changeHujia();
								player.draw(3);
								if (player.isPhaseUsing()) {
									player.addTempSkill('zshy_zhaxiang_gain');
									player.addMark('zshy_zhaxiang_gain', 1, false);
								}
								('step 2');
								if (event.count > 0 && player.hasSkill('zshy_zhaxiang') && !get.is.blocked('zshy_zhaxiang', player)) {
									event.goto(1);
								}
							},
							ai: {
								maihp: true,
								effect(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, 1];
										return 1.2;
									}
									if (get.tag(card, 'loseHp')) {
										if (target.hp <= 0) return;
										var using = target.isPhaseUsing();
										if (target.hp <= 1) return [1, player.countCards('h') <= 0 && using ? 3 : 0];
										if (using && target.countCards('h', { name: 'sha', color: 'red' })) return [1, 3];
										return [
											1,
											target.countCards('h') <= target.hp ||
												(using &&
													game.hasPlayer(function (current) {
														return current != player && get.attitude(player, current) < 0 && player.inRange(current);
													}))
												? 3
												: 2,
										];
									}
								},
							},
							subSkill: {
								gain: {
									audio: 'ext:诸神寰宇/audio/character:2',
									mod: {
										targetInRange(card, player, target, now) {
											if (card.name == 'sha' && get.color(card) == 'red') return true;
										},
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + player.storage.zshy_zhaxiang_gain;
										},
									},
									charlotte: true,
									trigger: { player: 'useCard' },
									filter(event, player) {
										return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
									},
									forced: true,
									content() {
										trigger.directHit.addArray(game.players);
										if (player.isHealthy() == true) {
											player.changeHujia();
										} else {
											player.recover();
										}
									},
									intro: { content: '<br>使用【杀】的次数上限+#<br><br>使用红色【杀】无距离限制且不能被【闪】响应' },
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'sha' && get.color(arg.card) == 'red';
										},
									},
								},
							},
						},
						zshy_ganglie: {
							audio: 'ext:诸神寰宇/audio/character:4',
							trigger: { player: 'damageEnd' },
							filter(event, player) {
								return event.source != undefined && event.num > 0;
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0;
							},
							logTarget: 'source',
							preHidden: true,
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								if (get.mode() == 'guozhan') event.num = 1;
								('step 1');
								player.judge(function (card) {
									if (get.color(card) == 'red') return 1;
									return 0;
								});
								('step 2');
								if (result.color == 'black') {
									if (trigger.source.countCards('he')) {
										trigger.source.loseHp();
										player.discardPlayerCard(trigger.source, 'he', true);
									}
								} else if (trigger.source.isIn()) {
									trigger.source.damage();
									player.gainPlayerCard(trigger.source, 'he', true);
								}
								event.num--;
								if (event.num > 0 && player.hasSkill('zshy_ganglie')) {
									player.chooseBool(get.prompt2('zshy_ganglie'));
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									event.goto(1);
								}
							},
							ai: {
								maixie_defend: true,
								expose: 0.4,
							},
						},
						zshy_qingjian: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'gainAfter',
								global: 'loseAsyncAfter',
							},
							forced: true,
							filter(event, player) {
								return event.getg(player).length && player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.chooseCard(get.prompt2('zshy_qingjian'), 'he', [1, player.countCards('he')]).ai = function (card) {
									return 4 - get.value(card);
								};
								('step 1');
								if (result.bool) {
									player.addSkill('zshy_qingjian_gain');
									player.addToExpansion(result.cards, 'giveAuto', player).gaintag.add('zshy_qingjian_gain');
								} else player.getStat('triggerSkill').zshy_qingjian--;
							},
							subSkill: {
								gain: {
									audio: 'zshy_qingjian',
									charlotte: true,
									trigger: {
										global: ['phaseBegin', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd', 'phaseEnd'],
									},
									forced: true,
									filter(event, player) {
										return player.getExpansions('zshy_qingjian_gain').length;
									},
									onremove(player, skill) {
										var cards = player.getExpansions(skill);
										if (cards.length) player.loseToDiscardpile(cards);
									},
									content() {
										'step 0';
										var cards = player.getExpansions('zshy_qingjian_gain');
										player
											.chooseTarget(true, lib.filter.notMe)
											.set('createDialog', ['清俭:将这些牌交给一名角色' + (cards.length > 1 ? ',增加1点护甲' : ''), cards])
											.set('ai', (target) => get.attitude(player, target));//QQQ
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											player.line(target, 'thunder');
											if (player.give(player.getExpansions('zshy_qingjian_gain'), target).cards.length) {
												player.changeHujia();
											}
										}
										('step 2');
										player.removeSkill('zshy_qingjian_gain');
									},
									intro: {
										markcount: 'expansion',
										mark(dialog, storage, player) {
											var cards = player.getExpansions('zshy_qingjian_gain');
											if (player.isUnderControl(true)) dialog.addAuto(cards);
											else return '共有' + get.cnNumber(cards.length) + '张牌';
										},
									},
								},
							},
							ai: {
								order: 9,
								threaten: 1.5,
							},
						},
						zshy_tuxi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'phaseDrawBegin2',
							},
							forced: true,
							preHidden: true,
							filter(event, player) {
								return (
									event.num > 0 &&
									!event.numFixed &&
									game.hasPlayer(function (target) {
										return target.countCards('h') > 0 && player != target;
									})
								);
							},
							content() {
								'step 0';
								var num = get.copy(trigger.num);
								if (get.mode() == 'guozhan' && num > 2) num = 2;
								player
									.chooseTarget(
										get.prompt('zshy_tuxi'),
										'获得至多' + get.translation(num) + '名角色的各一张手牌,少摸等量的牌',
										[1, num],
										function (card, player, target) {
											return target.countCards('h') > 0 && player != target;
										},
										function (target) {
											var att = get.attitude(_status.event.player, target);
											if (target.hasSkill('tuntian')) return att / 10;
											return 1 - att;
										}
									)
									.setHiddenSkill('zshy_tuxi');
								('step 1');
								if (result.targets?.length) {
									result.targets.sortBySeat();
									player.gainMultiple(result.targets);
									trigger.num -= result.targets.length;
								} else {
									event.finish();
								}
								('step 2');
							},
							ai: {
								threaten: 1.6,
								expose: 0.2,
							},
						},
						zshy_zhengbing: {
							audio: 'ext:诸神寰宇/audio/character:0',
							enable: 'phaseUse',
							usable: 1,
							filterCard: lib.filter.cardRecastable,
							check(card) {
								var player = _status.event.player,
									val = 5 + ['shan', 'tao'].includes(card.name) * 1.5;
								if (player.needsToDiscard() > 2 && card.name == 'sha' && player.countCards('hs', 'sha') > 1) val += 0.5;
								return val - get.value(card);
							},
							position: 'he',
							groupSkill: true,
							lose: false,
							discard: false,
							delay: false,
							content() {
								'step 0';
								player.recast(cards);
								switch (cards[0]?.name) {
									case 'sha':
										player.addTempSkill('zshy_zhengbing_sha');
										player.addMark('zshy_zhengbing_sha', 2, false);
										break;
									case 'shan':
										player.draw();
										break;
									case 'tao':
										player.changeHujia();
								}
							},
							ai: {
								order: 7,
								result: { player: 1 },
							},
							subSkill: {
								sha: {
									charlotte: true,
									mod: {
										maxHandcard(player, num) {
											return num + player.countMark('zshy_zhengbing_sha');
										},
									},
									intro: {
										content: '手牌上限+#',
									},
								},
							},
						},
						zshy_powei: {
							audio: 'zshy_tuxi',
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return game.hasPlayer((current) => {
									return player.inRange(current) && current.countGainableCards(player, 'he') > 0;
								});
							},
							groupSkill: true,
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(
										get.prompt('zshy_powei'),
										'获得攻击范围内任意名角色的各一张牌.回合结束时这些角色中未受过伤害的角色依次获得你的一张牌.',
										(card, player, target) => {
											return player.inRange(target) && target.countGainableCards(player, 'he') > 0;
										},
										[1, Infinity]
									)
									.set('ai', (target) => {
										var player = _status.event.player;
										return get.effect(target, { name: 'shunshou_copy2' }, player, player);
									});
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets.slice();
									targets.sortBySeat();
									player.gainMultiple(result.targets, 'he');
								}
							},
						},
						zshy_luoyi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'phaseDrawBegin1',
							},
							forced: true,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								'step 0';
								player.draw(3);
								player.addTempSkill('zshy_luoyi_damage', { player: 'phaseBefore' });
							},
							subSkill: {
								damage: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: { source: 'damageBegin1' },
									filter(event, player) {
										return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
									},
									forced: true,
									content() {
										trigger.num++;
									},
									ai: {
										damageBonus: true,
										skillTagFilter(player, tag, arg) {
											if (tag === 'damageBonus') return arg && arg.card && (arg.card.name === 'sha' || arg.card.name === 'juedou');
										},
									},
								},
							},
						},
						zshy_huwei: {
							audio: 'ext:诸神寰宇/audio/character:0',
							init(player) {
								if (player.getHistory('useCard', (evt) => evt.card.name == 'sha').length) player.addTempSkill('zshy_huwei_used');
							},
							mod: {
								targetInRange(card, player, target) {
									if (card.name == 'sha' && !player.hasSkill('zshy_huwei_used')) return true;
								},
							},
							trigger: {
								player: 'useCard',
								source: 'damageSource',
							},
							filter(event, player) {
								if (event.name == 'damage') return player.getHistory('sourceDamage').indexOf(event) == 0;
								if (event.card.name == 'sha' && !player.hasSkill('zshy_huwei_used')) return true;
								return get.type(event.card) == 'basic' && player.getHistory('useCard', (evt) => get.type(evt.card) == 'basic').indexOf(event) == 0;
							},
							forced: true,
							async content(event, trigger, player) {
								if (trigger.name == 'damage') player.draw();
								else {
									if (trigger.card.name == 'sha' && !player.hasSkill('zshy_huwei_used')) {
										game.log(trigger.card, '无距离限制');
										player.addTempSkill('zshy_huwei_used');
									}
									if (get.type(trigger.card) == 'basic' && player.getHistory('useCard', (evt) => get.type(evt.card) == 'basic').indexOf(trigger) == 0) {
										game.log(trigger.card, '不计入次数上限');
										trigger.addCount = false;
										if (player.stat[player.stat.length - 1].card.sha > 0) player.stat[player.stat.length - 1].card.sha--;
									}
								}
							},
							subSkill: { used: { charlotte: true } },
						},
						zshy_wushuang: {
							audio: 'ext:诸神寰宇/audio/character:2',
							shaRelated: true,
							forced: true,
							group: ['zshy_wushuang_sha', 'zshy_wushuang_juedou'],
							preHidden: ['zshy_wushuang_sha', 'zshy_wushuang_juedou'],
							subSkill: {
								sha: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: { player: 'useCardToPlayered' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
									},
									logTarget: 'target',
									async content(event, trigger, player) {
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
											if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1) return false;
										},
									},
								},
								juedou: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: { player: 'useCardToPlayered', target: 'useCardToTargeted' },
									forced: true,
									logTarget(trigger, player) {
										return player == trigger.player ? trigger.target : trigger.player;
									},
									filter(event, player) {
										return event.card && event.card.name == 'juedou';
									},
									async content(event, trigger, player) {
										const id = (player == trigger.player ? trigger.target : trigger.player).playerid;
										const idt = trigger.target.playerid;
										const map = trigger.parent.customArgs;
										if (!map[idt]) map[idt] = {};
										if (!map[idt].shaReq) map[idt].shaReq = {};
										if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
										map[idt].shaReq[id]++;
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											if (arg && arg.card.name != 'juedou' || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
										},
									},
								},
							},
						},
						zshy_liqu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.card && event.card.name == 'sha' && event.player != player && event.player.isIn() && event.player.countGainableCards(player, 'hej') > 0;
							},
							forced: true,
							content() {
								'step 0';
								player
									.gainPlayerCard(get.prompt('zshy_liqu', trigger.player), trigger.player, 'hej', 'visibleMove')
									.set('ai', function (button) {
										var player = _status.event.player,
											target = _status.event.target;
										if (get.attitude(player, target) > 0 && get.position(button.link) === 'j') return 4 + get.value(button.link);
										if (get.type(button.link) === 'equip') return _status.event.juedou;
										return 3;
									})
									.set(
										'juedou',
										(() => {
											if (
												get.attitude(player, trigger.player) > 0 &&
												game.hasPlayer(function (current) {
													return player.canUse({ name: 'juedou' }, current) && current != trigger.player && current != player && get.effect(current, { name: 'juedou' }, player, _status.event.player) > 2;
												})
											)
												return 5;
											if (
												game.hasPlayer(function (current) {
													return player.canUse({ name: 'juedou' }, current) && current != trigger.player && current != player && get.effect(current, { name: 'juedou' }, player, _status.event.player) < 0;
												})
											)
												return 1;
											return 4;
										})()
									)
									('step 1');
								if (result.cards?.length) {
									if (get.type(result.cards[0]) == 'equip') {
										player.draw();
										event.finish();
									} else {
										player.useCard({ name: 'juedou' }, trigger.player, 'noai', 'nowuxie');
									}
								} else event.finish();
							},
							ai: {
								halfneg: true,
							},
							group: ['zshy_liqu_sub1'],
							subSkill: {
								sub1: {
									trigger: {
										source: 'damageBegin3',
									},
									forced: true,
									silent: true,
									popup: false,
									firstDo: true,
									filter(event, player) {
										return event.card && event.card.name == 'juedou';
									},
									content() {
										trigger.num += player.getDamagedHp();
									},
									ai: {
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'juedou';
										},
									},
								},
							},
						},
						zshy_yaowu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'damageBegin3',
							},
							filter(event, player) {
								return event.card && (get.color(event.card) != 'red' || (event.source && event.source.isIn()));
							},
							forced: true,
							content() {
								if (get.color(trigger.card) != 'red') {
									player.draw(2);
									player.recover();
								} else trigger.source.chooseDrawRecover(1, true);
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.color(card) == 'red') {
											let num = player.isDamaged() ? 1.6 : 0.7;
											if (get.attitude(player, target) > 0 && player.hp < 3) return [1, 0, 1, num];
											return [1, 0, 1, num / 2];
										}
										return [1, 0.6];
									},
								},
							},
						},
						zshy_shizhan: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return target != player && player.canUse('juedou', target);
							},
							filter(event, player, target) {
								if (player.countMark('zshy_shizhan') <= player.getDamagedHp()) return true;
								return false;
							},
							content() {
								player.addMark('zshy_shizhan', 1);
								player.useCard({ name: 'juedou' }, target, 'noai');
							},
							ai: {
								order: 2,
								result: {
									player(player, target) {
										return get.effect(player, { name: 'juedou' }, player, target);
									},
								},
							},
							group: ['zshy_shizhan_clear'],
							subSkill: {
								clear: {
									trigger: {
										player: ['phaseEnd'],
									},
									forced: true,
									popup: false,
									filter(event, player, target) {
										return player.countMark('zshy_shizhan') > 0;
									},
									content() {
										var num = player.countMark('zshy_shizhan');
										player.removeMark('zshy_shizhan', num);
									},
								},
							},
						},
						zshy_guanxing: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							content() {
								player.chooseToGuanxing(7);
								player.chooseDrawRecover(true);
							},
						},
						zshy_kongcheng: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							check: () => true,
							filter(event, player) {
								return player.countCards('h');
							},
							prompt2: '你可以将任意张手牌置入「空城」',
							content() {
								'step 0';
								var cards = player.getCards('h');
								if (cards.length) {
									player.loseToSpecial(cards, 'zshy_kongcheng');
									game.log(player, '将所有手牌放到了武将牌上');
								} else event.finish();
								('step 1');
								player.markSkill('zshy_kongcheng');
							},
							marktext: '空城',
							intro: {
								mark(dialog, storage, player) {
									dialog.addSmall(
										player.getCards('s', function (card) {
											return card.hasGaintag('zshy_kongcheng');
										})
									);
								},
								markcount(storage, player) {
									return player.getCards('s', function (card) {
										return card.hasGaintag('zshy_kongcheng');
									}).length;
								},
								onunmark(storage, player) {
									var cards = player.getCards('s', function (card) {
										return card.hasGaintag('zshy_kongcheng');
									});
									if (cards.length) {
										player.lose(cards, ui.discardPile);
										player.$throw(cards, 1000);
										game.log(cards, '进入了弃牌堆');
									}
								},
							},
							mod: {
								targetEnabled(card, player, target) {
									if (target.countCards('h') == 0) {
										if (card.name == 'sha' || card.name == 'juedou') return false;
									}
								},
							},
							group: ['zshy_kongcheng_Start', 'zshy_kongcheng_Deputy'],
							subSkill: {
								Start: {
									audio: 'zshy_kongcheng',
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
										var cards = player.getCards('h');
										if (cards.length) {
											player.loseToSpecial(cards, 'zshy_kongcheng');
											game.log(player, '将所有手牌放到了武将牌上');
										} else event.finish();
										('step 1');
										player.markSkill('zshy_kongcheng');
									},
								},
								Deputy: {
									audio: 'zshy_kongcheng',
									trigger: {
										player: 'loseAfter',
									},
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										if (!event.ss || !event.ss.length) return false;
										for (var i in event.gaintag_map) {
											if (event.gaintag_map[i].includes('zshy_kongcheng')) return true;
											return false;
										}
									},
									content() {
										var num = player.getCards('s', function (card) {
											return card.hasGaintag('zshy_kongcheng');
										}).length;
										if (num > 0) player.markSkill('zshy_kongcheng');
										else player.unmarkSkill('zshy_kongcheng');
									},
								},
							},
						},
						zshy_yingzi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['phaseDrawBegin2'],
							},
							forced: true,
							preHidden: true,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num += player.maxHp;
							},
							ai: {
								threaten: 1.5,
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.maxHp;
								},
							},
						},
						zshy_fanjian: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: ['phaseUse'],
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('h') > 0;
							},
							content() {
								player.gainPlayerCard(target, true, 'hej', 'visible');
								target.damage('fire');
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										return -target.countCards('he');
									},
								},
								threaten: 2,
							},
						},
						zshy_ronghuo: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								source: 'damageBegin3',
							},
							filter(event, player) {
								return event.hasNature('fire');
							},
							forced: true,
							content() {
								trigger.num += trigger.num;
								game.setNature(trigger, 'fire');
							},
							ai: {
								threaten: 3.5,
							},
						},
						zshy_qianxun: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								target: 'useCardToTarget',
								player: 'addJudgeBefore',
							},
							forced: true,
							_priority: 15,
							check(event, player) {
								return event.name == 'addJudge' || get.effect(event.target, event.card, event.player, player) < 0;
							},
							filter(event, player) {
								return event.card && event.card.name == 'shunshou' || get.type(event.card) == 'delay';
							},
							content() {
								if (trigger.name == 'addJudge') {
									trigger.cancel();
								} else trigger.parent.targets.remove(player);
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'shunshou' || get.type(card) == 'delay') return 'zeroplayertarget';
									},
								},
							},
							group: ['zshy_qianxun_sub1'],
							subSkill: {
								sub1: {
									audio: 'ext:诸神寰宇/audio/character:2',
									init(player) {
										if (!player.storage.zshy_qianxun_sub2) player.storage.zshy_qianxun_sub2 = [];
									},
									trigger: {
										target: 'useCardToBegin',
										player: 'judgeBefore',
									},
									filter(event, player) {
										if (player.countCards('h') == 0) return false;
										if (event.parent.name == 'phaseJudge') {
											if (lib.skill.zshy_qianxun.trigger.player == 'judgeBefore') {
												return true;
											}
											return event.result && event.result.judge != 0;
										}
										if (event.name == 'judge') return false;
										if (event.card && get.type(event.card) == 'trick' && event.player != player) return true;
									},
									content() {
										player.storage.zshy_qianxun_sub2 = player.storage.zshy_qianxun_sub2.concat(player.getCards('h'));
										game.addVideo('storage', player, ['zshy_qianxun_sub2', get.cardsInfo(player.storage.zshy_qianxun_sub2), 'cards']);
										player.lose(player.getCards('h'), ui.special, 'toStorage');
										player.addSkill('zshy_qianxun_sub2');
									},
									ai: {
										effect(card, player, target) {
											if (!target.hasFriend()) return;
											if (player == target) return;
											var type = get.type(card);
											var nh = target.countCards();
											if (type == 'trick') {
												if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
													if (get.tag(card, 'damage')) {
														if (nh < 3 || target.hp <= 2) return 0.8;
													}
													return [1, nh];
												}
											} else if (type == 'delay') {
												return [0.5, 0.5];
											}
										},
									},
								},
								sub2: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: { global: 'phaseEnd' },
									forced: true,
									content() {
										player.gain(player.storage.zshy_qianxun_sub2, 'fromStorage', 'draw');
										player.storage.zshy_qianxun_sub2.length = 0;
										player.removeSkill('zshy_qianxun_sub2');
										game.addVideo('storage', player, ['zshy_qianxun_sub2', get.cardsInfo(player.storage.zshy_qianxun_sub2), 'cards']);
									},
									mark: true,
									intro: {
										content: 'cardCount',
										onunmark(storage, player) {
											if (storage && storage.length) {
												player.$throw(storage, 1000);
												game.cardsDiscard(storage);
												game.log(storage, '被置入了弃牌堆');
												player.storage.zshy_qianxun_sub2.length = 0;
											}
										},
									},
								},
							},
						},
						zshy_lianying: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'loseAfter',
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter'],
							},
							forced: true,
							filter(event, player) {
								if (player.countCards('h')) return false;
								var evt = event.getl(player);
								return evt && evt.hs && evt.hs.length;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('zshy_lianying'), '令X名角色摸Y张牌(x为你的体力上限,Y为该角色的体力值且最少为1)', [1, player.maxHp]).ai = function (target) {
									var player = _status.event.player;
									if (player == target) return get.attitude(player, target) + 10;
									return get.attitude(player, target);
								};
								('step 1');
								if (result.targets?.length) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].draw(Math.max(1, result.targets[i].hp));
									}
								} else event.finish();
								('step 2');
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
							group: ['zshy_lianying_sub1', 'zshy_lianying_sub2'],
							subSkill: {
								sub1: {
									audio: 'zshy_lianying',
									trigger: { player: 'phaseUseBefore' },
									forced: true,
									filter(event, player) {
										return (
											game.countPlayer(function (current) {
												return current.isLinked();
											}) > 0
										);
									},
									content() {
										player.addTempSkill('zshy_lianying_sub3');
									},
								},
								sub2: {
									audio: 'zshy_lianying',
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									popup: false,
									forced: true,
									filter(event, player) {
										return event.nature && event.player.isLinked();
									},
									content() {
										trigger.num++;
									},
								},
								sub3: {
									forced: true,
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return Infinity;
										},
									},
								},
							},
						},
						zshy_jijiu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'chooseToUse',
							viewAsFilter(player) {
								return player != _status.currentPhase && player.countCards('hes') > 0;
							},
							filterCard(card) {
								return true;
							},
							position: 'hes',
							viewAs: { name: 'tao' },
							prompt: '将一张牌当桃使用',
							check(card) {
								return 15 - get.value(card);
							},
							ai: {
								threaten: 1.5,
							},
							mod: {
								aiValue(player, card, num) {
									if (card.name != 'tao') return;
									const cards = player.getCards('hs', (card) => card.name == 'tao');
									cards.sort((a, b) => (a.name == 'tao' ? 1 : 2) - (b.name == 'tao' ? 1 : 2));
									var geti = () => {
										if (cards.includes(card)) cards.indexOf(card);
										return cards.length;
									};
									return Math.max(num, [6.5, 4, 3, 2][Math.min(geti(), 2)]);
								},
								aiUseful() {
									return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
								},
							},
						},
						zshy_qingnang: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							filterCard: true,
							check(card) {
								var player = _status.event.player;
								if (
									game.countPlayer(function (current) {
										return get.recoverEffect(current, player, player) > 0 && get.attitude(player, current) > 2;
									}) > 1 &&
									get.color(card) == 'black' &&
									player.countCards('h', { color: 'red' }) > 0
								)
									return 3 - get.value(card);
								return 9 - get.value(card);
							},
							filterTarget(card, player, target) {
								if (target.hp >= target.maxHp || target.hasSkill('zshy_qingnang_off')) return false;
								return true;
							},
							content() {
								target.addTempSkill('zshy_qingnang_off');
								if (get.color(cards[0]) == 'black') player.tempBanSkill('zshy_qingnang');
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
							group: ['zshy_qingnang_recover'],
							subSkill: {
								off: {
								},
								recover: {
									audio: 'zshy_qingnang',
									trigger: {
										player: 'useCard',
									},
									forced: true,
									silent: true,
									popup: false,
									firstDo: true,
									filter(event, player, card) {
										return event.card && event.card.name == 'tao';
									},
									content() {
										trigger.baseDamage++;
									},
									ai: {
										skillTagFilter(player, arg, card) {
											return arg.card.name == 'tao';
										},
									},
								},
							},
						},
						zshy_fankui: {
							audio: 'ext:诸神寰宇/audio/character:4',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.source && event.source.countGainableCards(player, 'hej') && event.num > 0 && event.source != player;
							},
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								var num = 0;
								if (trigger.source.countCards('h')) num++;
								if (trigger.source.countCards('e')) num++;
								if (trigger.source.countCards('j')) num++;
								if (num > 0) {
									player.gainPlayerCard(trigger.source, num, 'hej', true).set('filterButton', function (button) {
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
										}
										return true;
									});
								}
								trigger.source.loseHp();
								player.draw();
								event.count--;
								if (event.count > 0) {
									player.chooseBool(get.prompt2('zshy_fankui'));
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.goto(1);
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
											if (player.hasSkill('jueqing')) return [1, -1.5];
											if (get.attitude(target, player) < 0) return [1, 1];
										}
									},
								},
							},
						},
						zshy_guicai: {
							audio: 'ext:诸神寰宇/audio/character:4',
							audioname: ['zshy_ZshensimayiSHZL'],
							trigger: {
								global: 'judge',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('hes') > 0;
							},
							content() {
								'step 0';
								player.draw();
								player
									.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('zshy_guicai'), 'he')
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
								if (result.cards?.length) {
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
									ui.discardPile.appendChild(trigger.player.judging[0]);
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
						zshy_tiandu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'phaseJudgeBefore',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return true;
								return event.player.isAlive();
							},
							content() {
								'step 0';
								event.judgestr = '闪电';
								trigger.player.judge(function (card) {
									if (card.suit == 'spade' && card.number > 1 && card.number < 10) return -6;
									return 0;
								}, event.judgestr);
								('step 1');
								if (result.card.suit == 'spade' && result.card.number > 1 && result.card.number < 10) {
									trigger.player.damage(3, 'thunder', 'nosource');
								} else {
									event.finish();
								}
							},
							group: 'zshy_tiandu_sub1',
							subSkill: {
								sub1: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: {
										player: 'judgeEnd',
									},
									forced: true,
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
										player.draw(player.maxHp - player.hp);
									},
								},
							},
						},
						zshy_yice: {
							audio: 'zshy_yiji',
							trigger: {
								player: 'dying',
							},
							_priority: 7,
							forced: true,
							charlotte: true,
							filter(event, player) {
								return player.hp <= 0;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return card.suit != 'heart' ? -1 : 1;
								});
								('step 1');
								if (result.bool) {
									player.recover(1 - player.hp);
								}
							},
							ai: {
								threaten: 0.8,
							},
							group: ['zshy_yice_sub1'],
							subSkill: {
								sub1: {
									audio: 'zshy_tiandu',
									trigger: {
										player: 'phaseBegin',
									},
									content() {
										'step 0';
										event.cards = get.cards(2);
										player.chooseCardButton(event.cards, 1, true, '选择获得一张牌').ai = ai.get.buttonValue;
										('step 1');
										var choice = result.links[0];
										if (Array.isArray(cards)) for (var i of cards) {
											ui.cardPile.appendChild(i);
										}
										player.showCards(choice);
										player.gain(choice);
										game.log(player, '发动遗策');
										if (get.type(choice) == 'basic') {
											player.addTempSkill('zshy_yice_sub2', 'phaseAfter');
											player.addTempSkill('mashu', 'phaseAfter');
										} else {
											player.discard(player.getCards('j'));
											player.draw();
										}
									},
								},
								sub2: {
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + 1;
										},
									},
								},
							},
						},
						zshy_yiji: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								event.count = 1;
								('step 1');
								player.draw(3);
								event.given = 0;
								('step 2');
								player.chooseCardTarget({
									filterCard: true,
									selectCard: [1, Infinity],
									filterTarget(card, player, target) {
										return player != target && target != event.temp;
									},
									ai1(card) {
										if (ui.selected.cards.length) return -1;
										if (card.name == 'du') return 20;
										return _status.event.player.countCards('h') - _status.event.player.hp;
									},
									ai2(target) {
										var att = get.attitude(_status.event.player, target);
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											if (target.hasSkillTag('nodu')) return 0;
											return 1 - att;
										}
										return att - 4;
									},
									prompt: '请选择要送人的卡牌',
								});
								('step 3');
								if (result.targets?.length) {
									player.line(result.targets, 'green');
									result.targets[0].gain(result.cards, player, 'giveAuto');
									event.given += result.cards.length;
									if (event.given < 2) {
										event.temp = result.targets[0];
										event.goto(2);
									} else if (event.count < trigger.num) {
										delete event.temp;
										event.count++;
										player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
									} else event.finish();
								} else if (event.count < trigger.num) {
									delete event.temp;
									event.count++;
									player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
								} else event.finish();
								('step 4');
								if (result.bool) {
									event.goto(1);
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								result: {
									effect(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											var num = 1;
											if (get.attitude(player, target) > 0) {
												if (player.needsToDiscard()) {
													num = 0.7;
												} else {
													num = 0.5;
												}
											}
											if (player.hp >= 4) return [1, num * 2];
											if (target.hp == 3) return [1, num * 1.5];
											if (target.hp == 2) return [1, num * 0.5];
										}
									},
								},
								threaten: 0.6,
							},
							mod: {
								maxHandcard(player, num) {
									return num * 10;
								},
							},
						},
						zshy_jizhi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							audioname: ['zshy_ZshensimayiSHZL'],
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick' || get.type(event.card, 'delay') == 'delay';
							},
							content() {
								player.draw();
							},
							ai: {
								threaten: 1.4,
								noautowuxie: true,
							},
							group: ['zshy_jizhi_sub1', 'zshy_jizhi_sub2'],
							subSkill: {
								sub1: {
									audio: 'zshy_jizhi',
									trigger: {
										global: 'useCardAfter',
									},
									filter(event, player) {
										return event.card && event.card.name == 'wuxie' && event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
									},
									check(event, player) {
										return get.attitude(player, event.player) > 2;
									},
									content() {
										trigger.player.draw();
										player.gain(trigger.cards, 'gain2');
									},
								},
								sub2: {
									audio: 'zshy_jizhi',
									trigger: {
										player: 'judgeEnd',
									},
									forced: true,
									filter(event, player) {
										return get.type(event.result.card, 'trick') == 'trick' || get.type(event.result.card, 'delay') == 'delay';
									},
									content() {
										player.gain(trigger.result.card);
										player.$gain2(trigger.result.card);
										game.log(player, '获得了' + get.translation(trigger.result.card));
									},
								},
							},
						},
						zshy_qicai: {
							mod: {
								targetInRange(card, player, target, now) {
									var type = get.type(card);
									if (type == 'trick' || type == 'delay') return true;
								},
								wuxieRespondable() {
									return false;
								},
							},
							ai: { forceYingbian: true },
							group: 'zshy_qicai_sub1',
							subSkill: {
								sub1: {
									trigger: {
										player: 'phaseDiscardBegin',
									},
									forced: true,
									filter(event, player) {
										return event.parent.name == 'phaseDiscard' && player.countCards('h', { type: 'basic' }) < player.countCards('h');
									},
									content() { },
									mod: {
										ignoredHandcard(card, player) {
											if (get.type(card) != 'basic') {
												return true;
											}
										},
										cardDiscardable(card, player, name) {
											if (name == 'phaseDiscard' && get.type(card) != 'basic') return false;
										},
									},
								},
							},
						},
						zshy_guose: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							discard: false,
							filter(event, player) {
								return player.countCards('hes', { suit: 'diamond' }) > 0;
							},
							prepare: 'throw',
							position: 'hes',
							filterCard: {
								suit: 'diamond',
							},
							filterTarget(card, player, target) {
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
							},
							ai: {
								result: {
									target(player, target) {
										if (target.hasJudge('lebu')) return -get.effect(target, { name: 'lebu' }, player, target);
										return get.effect(target, { name: 'lebu' }, player, target);
									},
								},
								order: 9,
							},
							group: 'zshy_guose_sub1',
							subSkill: {
								sub1: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: {
										global: ['phaseUseSkipped', 'phaseUseCancelled'],
									},
									forced: true,
									filter(event, player) {
										return event.player != player;
									},
									content() {
										var chat = ['没天过,气不气啊？', '∠( ᐛ 」∠)_你出牌阶段没了.'].randomGet();
										player.say(chat);
										player.draw();
									},
								},
							},
						},
						zshy_liuli: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							_priority: 5,
							filter(event, player) {
								if (player.countCards('hes') == 0) return false;
								return game.hasPlayer(function (current) {
									return current != event.player && current != player && lib.filter.targetEnabled(event.card, event.player, current);
								});
							},
							content() {
								'step 0';
								player.draw();
								var next = player.chooseCardTarget({
									position: 'hes',
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
									prompt: get.prompt('zshy_liuli'),
								});
								('step 1');
								if (result.cards?.length) {
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
										for (var i of players) {
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
						zshy_qingguo: {
							audio: 'ext:诸神寰宇/audio/character:4',
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard(card, player) {
								return get.color(card) == 'black';
							},
							position: 'hes',
							viewAs: {
								name: 'shan',
							},
							viewAsFilter(player) {
								if (!player.countCards('hes', { color: 'black' })) return false;
							},
							prompt: '将一张黑色牌当闪打出',
							check() {
								return 1;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('hes', { color: 'black' })) return false;
								},
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') && current < 0) return 0.6;
									},
								},
								order: 3,
								basic: {
									useful: [7, 2],
									value: [7, 2],
								},
								result: {
									player: 1,
								},
							},
							mod: {
								targetInRange(card, player, target, now) {
									if (get.color(card) == 'black') return true;
								},
							},
						},
						zshy_luoshen: {
							audio: 'ext:诸神寰宇/audio/character:4',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseUseEnd'],
							},
							forced: true,
							prompt2: '进行判定并获得判定牌,若结果为黑色则可以继续判定',
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'black') return 1;
									return -1;
								}).judge2 = function (result) {
									return result.bool == true ? true : false;
								};
								('step 1');
								player.gain(result.card, 'gain2').gaintag.add('zshy_luoshen');
								('step 2');
								if (result.color != 'black') event.finish();
								else player.chooseBool('是否再次发动【洛神】？').set('frequentSkill', 'zshy_luoshen');
								('step 3');
								if (result.bool) {
									event.goto(0);
								}
							},
							mod: {
								ignoredHandcard(card, player) {
									if (card.hasGaintag('zshy_luoshen')) return true;
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.hasGaintag('zshy_luoshen')) return false;
								},
							},
						},
						zshy_lijian: {
							audio: 'ext:诸神寰宇/audio/character:4',
							enable: 'phaseUse',
							usable: 2,
							filterTarget(card, player, target) {
								if (player == target) return false;
								return target.countCards('h') > 0;
							},
							selectTarget: 2,
							multitarget: true,
							multiline: true,
							filter(event, player) {
								return player.countCards('hes') > 0;
							},
							filterCard: true,
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								if (targets[0].countCards('h') && targets[1].countCards('h')) {
									targets[0].chooseToCompare(targets[1]);
								} else {
									event.finish();
								}
								('step 1');
								if (result.bool) {
									targets[1].damage(targets[0]);
									targets[1].chooseToDiscard(1, 'he', true);
									targets[0].chooseToDiscard(1, 'he', true);
								} else {
									targets[0].damage(targets[1]);
									targets[0].chooseToDiscard(1, 'he', true);
									targets[1].chooseToDiscard(1, 'he', true);
								}
							},
							ai: {
								expose: 0.3,
								threaten: 2,
								order: 9,
								result: {
									target: -1,
								},
							},
						},
						zshy_biyue: {
							audio: 'ext:诸神寰宇/audio/character:4',
							trigger: {
								player: ['phaseJieshuBegin', 'phaseBegin'],
							},
							forced: true,
							content() {
								var num = 1;
								if (!player.countCards('e')) {
									num = 2;
								}
								player.draw(num);
							},
						},
						zshy_xiaoji: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (Array.isArray(event.cards)) for (var i of event.cards) {
									if (i.original == 'e') return true;
								}
								return false;
							},
							forced: true,
							content() {
								var num = 0;
								if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
									if (i.original == 'e') num += 2;
									if (_status.currentPhase == player) num++;
								}
								player.draw(num);
							},
							ai: {
								noe: true,
								reverseEquip: true,
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
									},
								},
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha' && player.getEquip(1)) return Infinity;
								},
							},
						},
						zshy_jieyin: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							lose: false,
							delay: false,
							discard: false,
							position: 'he',
							filterCard: true,
							filterTarget: true,
							filter(event, player) {
								return player.countCards('he');
							},
							check(card) {
								var player = _status.event.player;
								if (get.position(card) == 'e') {
									if (player.countCards('h', { type: 'equip' })) return 15 - get.value(card);
									return 10 - get.value(card);
								}
								return 7 - get.value(card);
							},
							content() {
								'step 0';
								if (target != player) player.give(cards, target);
								else {
									player.discard(cards, true);
									player.chooseDrawRecover(true);
									event.finish();
								}
								('step 1');
								player.chooseDrawRecover(2, true);
								target.chooseDrawRecover(2, true);
								('step 2');
								target.chooseToUse({
									filterCard(card, player) {
										if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
										return lib.filter.filterCard.apply(this, arguments);
									},
									prompt: '结姻:是否使用一张手牌？',
								});
							},
							ai: {
								order() {
									return [2, 4, 6, 8].randomGet();
								},
								result: {
									target(player, target) {
										if (target != player) {
											if (target.isDamaged()) return 3;
											return 2;
										}
										return 0.5;
									},
								},
							},
						},
						zshy_kuanggu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								source: 'damageAfter',
							},
							forced: true,
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								event.num--;
								player.draw();
								player.recover();
								('step 3');
								if (event.num > 0) {
									event.goto(1);
								}
							},
						},
						zshy_qimou: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.hp > 1;
							},
							content() {
								'step 0';
								player.loseHp();
								player.addMark('zshy_qimou_Buff', 1, false);
								player.addTempSkill('zshy_qimou_Buff');
								('step 1');
								var list = [];
								for (var i of lib.inpile) {
									var type = get.type(i);
									if (type != 'trick') continue;
									list.push([type, '', i]);
								}
								player
									.chooseButton(['奇谋:是否视为使用一张普通锦囊牌？', [list, 'vcard']])
									.set('filterButton', function (button) {
										var cardx = { name: button.link[2] };
										return game.hasPlayer(function (current) {
											return player.canUse(cardx, current, false);
										});
									})
									.set('ai', function (button) {
										return player.getUseValue({ name: button.link[2] });
									});
								('step 2');
								if (result.links?.length) {
									var card = { name: result.links[0][2] };
									player.chooseUseTarget(card, true, 'nodistance').set('addCount', false);
								}
							},
							ai: {
								order() {
									return [7, 9, 11].randomGet();
								},
								effect: {
									player(card, player) {
										if (card.name == 'nanman' || card.name == 'wanjian') return [1, 5];
									},
								},
								result: {
									player(player) {
										if (player.hp == 1) return 1;
										if (
											game.hasPlayer(function (current) {
												return player.canUse('sha', current, false) && get.effect(current, { name: 'sha' }, player, player) > 0;
											})
										)
											return player.hp;
										return 0;
									},
								},
							},
							subSkill: {
								Buff: {
									charlotte: true,
									marktext: '谋',
									intro: {
										content: '本回合进攻距离+#',
									},
									mod: {
										globalFrom(from, to, distance) {
											return distance - from.countMark('zshy_qimou_Buff');
										},
									},
								},
							},
						},
						zshy_shensu: {
							audio: 'ext:诸神寰宇/audio/character:4',
							trigger: {
								player: ['phaseJudgeBefore'],
							},
							forced: true,
							content() {
								'step 0';
								var str = '跳过当前阶段,摸一张牌视为对一名其他角色使用一张无视距离的【杀】';
								player
									.chooseTarget(get.prompt('zshy_shensu'), str, function (card, player, target) {
										if (player == target) return false;
										return player.canUse({ name: 'sha' }, target, false);
									})
									.set('ai', function (target) {
										return get.effect(target, { name: 'sha' }, player, player);
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									trigger.cancel();
									player.draw();
									player.useCard({ name: 'sha' }, target, false);
								}
							},
							group: 'zshy_shensu_Sha',
							subSkill: {
								Sha: {
									audio: 'zshy_shensu',
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									content() {
										'step 0';
										var str = '翻面并视为对一名其他角色使用一张无视距离的【杀】';
										player
											.chooseTarget(get.prompt('zshy_shensu'), str, function (card, player, target) {
												if (player == target) return false;
												return player.canUse({ name: 'sha' }, target, false);
											})
											.set('ai', function (target) {
												var player = _status.event.player;
												if (trigger.player.next == player && !player.isTurnedOver()) return 0;
												return get.effect(target, { name: 'sha' }, player, player);
											});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											player.turnOver();
											player.useCard({ name: 'sha' }, target, false);
										}
									},
								},
							},
						},
						zshy_shebian: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['turnOverEnd'],
							},
							forced: true,
							content() {
								'step 0';
								player.draw();
								if (player.canMoveCard(null, true)) {
									player.moveCard();
								}
								('step 1');
								if (player.countCards('h')) {
									player.chooseToUse({
										filterCard(card, player) {
											if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										prompt: '设变:是否使用一张手牌？',
									});
								} else event.finish();
							},
							group: ['zshy_shebian_damage'],
							subSkill: {
								damage: {
									trigger: {
										player: ['damageEnd'],
									},
									forced: true,
									content() {
										'step 0';
										var str = '视为对一名其他角色使用一张无视距离的【杀】';
										player
											.chooseTarget(get.prompt('zshy_shebian'), str, function (card, player, target) {
												if (player == target) return false;
												return player.canUse({ name: 'sha' }, target, false);
											})
											.set('ai', function (target) {
												var player = _status.event.player;
												if (trigger.player.next == player && !player.isTurnedOver()) return 0;
												return get.effect(target, { name: 'sha' }, player, player);//QQQ
											});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											player.turnOver(false);
											player.useCard({ name: 'sha' }, target, false);
										}
										if (player.canMoveCard(null, true)) {
											player.moveCard();
										}
										('step 2');
										if (player.countCards('h')) {
											player.chooseToUse({
												filterCard(card, player) {
													if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
													return lib.filter.filterCard.apply(this, arguments);
												},
												prompt: '设变:是否使用一张手牌？',
											});
										} else event.finish();
									},
									ai: {
										order() {
											if (current.isTurnedOver() == true) {
												return 9;
											} else return 0;
										},
									},
								},
							},
						},
						zshy_jushou: {
							audio: 'ext:诸神寰宇/audio/character:4',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							content() {
								player.draw(4);
								player.recover();
								player.turnOver();
								var cardx = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								if (cardx) {
									player.gain(cardx, 'gain2');
									player.chooseUseTarget(cardx);
								} else player.say('无物可用,可惜……');
							},
						},
						zshy_jiewei: {
							audio: 'ext:诸神寰宇/audio/character:4',
							enable: 'chooseToUse',
							filterCard: true,
							position: 'e',
							viewAs: { name: 'wuxie' },
							filter(event, player) {
								return player.countCards('e') > 0;
							},
							viewAsFilter(player) {
								return player.countCards('e') > 0;
							},
							prompt: '将一张装备区内的牌当无懈可击使用',
							check(card) {
								return 8 - get.equipValue(card);
							},
							threaten: 1.2,
							group: ['zshy_jiewei_move', 'zshy_jiewei_wuxie'],
							subSkill: {
								move: {
									audio: 'zshy_jiewei',
									trigger: {
										player: ['turnOverEnd'],
									},
									content() {
										'step 0';
										if (player.canMoveCard()) {
											player.moveCard();
										}
										('step 1');
										if (player.countCards('h')) {
											player.chooseToUse({
												filterCard(card, player) {
													if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
													return lib.filter.filterCard.apply(this, arguments);
												},
												prompt: '据守:是否使用一张手牌？',
											});
										} else event.finish();
									},
								},
							},
							ai: {
								basic: {
									useful: [6, 4, 3],
									value: [6, 4, 3],
								},
							},
						},
						zshy_tianxiang: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'damageBegin3',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('hes', function (card) {
									return card.suit != 'heart';
								});
							},
							content() {
								'step 0';
								var str = '重铸一张非♥️️牌';
								player
									.chooseCard('hes', function (card) {
										return card.suit != 'heart';
									})
									.set('ai', function (card) {
										if (get.damageEffect(player, trigger.source, player, trigger.nature) < 0) {
											return 10 - get.value(card);
										}
										return 0 - get.value(card);
									})
									.set('prompt', get.prompt('zshy_tianxiang'))
									.set('prompt2', str);
								('step 1');
								if (result.cards?.length) {
									player.recast(result.cards);
								}
							},
							ai: {
								maixie_defend: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return;
										if (get.tag(card, 'damage') && target.countCards('hes') > 1) return 0.7;
									},
								},
							},
							group: ['zshy_tianxiang_Return'],
							subSkill: {
								Return: {
									trigger: {
										player: 'damageBegin4',
									},
									forced: true,
									filter(event, player) {
										return player.countCards('hes', { suit: 'heart' });
									},
									content() {
										'step 0';
										var str = '防止即将受到的' + trigger.num + '点伤害';
										if (player.countCards('hes')) {
											player
												.chooseCardTarget({
													position: 'hes',
													filterCard(card, player) {
														return card.suit == 'heart';
													},
													filterTarget(card, player, target) {
														return player != target;
													},
													ai1(card) {
														return 6 - get.value(card);
													},
													ai2(target) {
														var att = get.attitude(_status.event.player, target);
														var trigger = _status.event.getTrigger();
														var da = 0;
														if (_status.event.player.hp == 1) da = 10;
														var eff = get.damageEffect(target, trigger.source, target);
														if (att == 0) return 0.1 + da;
														if (eff >= 0 && att > 0) {
															return att + da;
														}
														if (att > 0 && target.hp > 1) {
															if (target.maxHp - target.hp >= 3) return att * 1.1 + da;
															if (target.maxHp - target.hp >= 2) return att * 0.9 + da;
														}
														return -att + da;
													},
													prompt: get.prompt('zshy_tianxiang'),
													prompt2: '交给一名其他角色一张♥️️牌取消之并选择一项:<br>①视为伤害来源令其失去X点体力;(X为你的体力值+1)<br>②视为伤害来源对其造成Y点伤害(Y为你已损失的体力值+1)',
												})
												.setHiddenSkill(event.name);
										} else event.finish();
										('step 1');
										if (result.bool) {
											trigger.cancel();
											var targetx = result.targets[0];
											event.targetx = targetx;
											player.give(result.cards, targetx);
										} else event.finish();
										('step 2');
										if (event.targetx.isIn()) {
											event.source = false;
											if (trigger.source) event.source = trigger.source;
											var lnum = Math.min(2, 1 + player.hp),
												dnum = Math.min(2, 1 + player.getDamagedHp());
											player
												.chooseControl(true)
												.set('choiceList', ['视为' + get.translation(event.source) + '令' + get.translation(event.targetx) + '失去' + lnum + '点体力', '视为' + get.translation(event.source) + '对' + get.translation(event.targetx) + '造成' + dnum + '点伤害'])
												.set('ai', function (target) {
													var player = _status.event.player;
													var att = get.attitude(player, event.targetx);
													if (event.targetx.hasSkillTag('maihp')) att = -att;
													if (att > 0) return 1;
													return 0;
												})
												.set('prompt', '天香:请选择一项');
										} else event.finish();
										('step 3');
										if (result.index == 0) {
											var lnum = Math.min(2, 1 + player.hp);
											if (event.source == false) event.targetx.loseHp(lnum);
											else event.targetx.loseHp(lnum).source = event.source;
										} else {
											var dnum = Math.min(2, 1 + player.getDamagedHp());
											if (event.source == false) event.targetx.damage(dnum, 'nosource');
											else event.targetx.damage(dnum).source = event.source;
										}
									},
									ai: {
										maixie_defend: true,
										effect: {
											target(card, player, target) {
												if (player.hasSkillTag('jueqing', false, target)) return;
												if (get.tag(card, 'damage') && target.countCards('hes') > 1) return 0.7;
											},
										},
									},
								},
							},
						},
						zshy_hongyan: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'judge',
							},
							usable: 1,
							forced: true,
							filter(event, player) {
								if (event.fixedResult && event.fixedResult.suit) return event.fixedResult.suit == 'heart';
								return event.player.judging[0].suit == 'heart';
							},
							content() {
								'step 0';
								var str = '红颜:' + get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否将之改为1种非♥️️？';
								player
									.chooseControl('spade', 'diamond', 'club', 'none', 'cancel2')
									.set('prompt', str)
									.set('ai', function () {
										var judging = _status.event.judging;
										var trigger = _status.event.getTrigger();
										var res1 = trigger.judge(judging);
										var list = ['spade', 'diamond', 'club', 'none'];
										var attitude = get.attitude(player, trigger.player);
										if (attitude == 0) return 0;
										var getj = function (suit) {
											return trigger.judge({
												name: judging.name,
												nature: get.nature(judging),
												suit: suit,
												number: judging.number,
											});
										};
										list.sort(function (a, b) {
											return (getj(b) - getj(a)) * get.sgn(attitude);
										});
										if ((getj(list[0]) - res1) * attitude > 0) return list[0];
										return 'cancel2';
									})
									.set('judging', trigger.player.judging[0]);
								('step 1');
								if (result.control != 'cancel2') {
									player.addExpose(0.25);
									player.popup(result.control);
									game.log(player, '将判定结果改为了', '#y' + get.translation(result.control + 2));
									if (!trigger.fixedResult) trigger.fixedResult = {};
									trigger.fixedResult.suit = result.control;
									trigger.fixedResult.color = get.color({ suit: result.control });
								}
							},
							ai: {
								rejudge: true,
								tag: {
									rejudge: 0.4,
								},
								expose: 0.5,
							},
							mod: {
								suit(card, suit) {
									if (suit == 'spade') return 'heart';
								},
							},
						},
						zshy_piaoling: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'loseAfter',
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
							},
							forced: true,
							filter(event, player) {
								var evt = event.getl(player);
								if (!evt || !evt.cards2 || !evt.cards2.length) return false;
								for (var i of evt.cards2) {
									if (i.suit == 'heart') return true;
								}
								return false;
							},
							content() {
								'step 0';
								event.count = 0;
								var cards = trigger.getl(player).hs;
								for (var i of cards) {
									event.count++;
								}
								('step 1');
								event.count--;
								player.judge(function (card) {
									if (card.suit != 'heart') return 2;
									return 1;
								});
								('step 2');
								if (result.suit == 'heart') {
									player.gain(result.card, 'gain2');
									player
										.chooseTarget(get.prompt('zshy_piaoling'), '弃置一名角色区域内一张牌', function (card, player, target) {
											return target.countDiscardableCards(player, 'hej');
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											return get.effect(target, { name: 'guohe_copy2' }, player, player) > 0;
										});
								} else event.goto(4);
								('step 3');
								if (result.targets?.length) {
									player.line(result.targets[0]);
									player.discardPlayerCard(result.targets[0], 'hej', true);
								}
								('step 4');
								if (event.count > 0) {
									event.goto(1);
								}
							},
						},
						zshy_liegong: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'useCardToTargeted',
							},
							derivation: ['zshy_moshi'],
							shaRelated: true,
							check(event, player) {
								var target = event.target;
								if (
									target.hasSkillTag('filterDamage', null, {
										player: player,
										card: event.card,
									})
								)
									return false;
								return get.attitude(player, target) < 0;
							},
							filter(event, player) {
								var target = event.target;
								if (event.card.name != 'sha') return false;
								return player.isHealthy() || target.countCards('h') > 1 || target.hp > 1;
							},
							prompt2(event, player) {
								var str = '令' + get.translation(event.target) + '不能响应' + get.translation(event.card);
								str += '且此【杀】对其的伤害基数+' + (event.target.isHealthy() ? 2 : 1);
								return str;
							},
							//<li>锁定技,你使用的【杀】无距离限制.<li>当你使用【杀】指定目标后,若其手牌大于一张/体力值大于1点/你未受伤,则你可以令其不能响应此【杀】且此【杀】对其的伤害基数+X(若其未/已受伤,则X为2/1).<li>当你对其他角色使用【杀】后,你令其获得〖没矢〗,并将此【杀】置于其武将牌上称为「矢」.<li>当你使用【杀】对其他角色造成伤害后,其获得1枚「箭伤」
							content() {
								var target = trigger.target;
								trigger.parent.directHit.push(target);
								var id = target.playerid,
									hp = target.isHealthy() ? 2 : 1;
								var map = trigger.parent.customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].extraDamage != 'number') {
									map[id].extraDamage = 0;
								}
								map[id].extraDamage += hp;
								if (trigger.cards?.length) {
									target.addToExpansion(trigger.cards, 'gain2').gaintag.add('zshy_moshi');
								}//QQQ
								target.addSkill('zshy_moshi');
							},
							mod: {
								aiOrder(player, card, num) {
									if (card.name == 'sha') return num + Infinity;
								},
								targetInRange(card, player, target) {
									if (card.name == 'sha') {
										return true;
									}
								},
							},
							group: ['zshy_liegong_Add'],
							subSkill: {
								Add: {
									trigger: {
										source: 'damageAfter',
									},
									shaRelated: true,
									forced: true,
									filter(event, player) {
										return event.card?.name == 'sha';
									},//QQQ
									logTarget: 'player',
									content() {
										trigger.player.addMark('zshy_moshi_Sha', 1);
									},
								},
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (get.attitude(player, arg.target) <= 0 && arg.card.name == 'sha' && (player.isHealthy() || arg.target.countCards('h') > 1 || arg.target.hp > 1)) return true;
									return false;
								},
							},
						},
						zshy_moshi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							prompt: '出牌阶段,你可以获得武将牌上的一张【杀】.(若有「箭伤」,则需失去1点体力)',
							check() {
								if (
									player.hasSkillTag('jueqing', null, {
										player: player,
										card: event.card,
									})
								)
									return false;
								if (player.hp > 1 && player.countMark('zshy_moshi_Sha') > 0) {
									return true;
								} else if (
									player.hasCard(function (card) {
										return card.name != 'sha';
									}, 'he')
								)
									return true;
								return false;
							},
							filter(event, player, target) {
								var target = event.player,
									mark = target.getExpansions('zshy_moshi');
								return mark.length;
							},
							content() {
								'step 0';
								if (player.countMark('zshy_moshi_Sha')) {
									player.removeMark('zshy_moshi_Sha', 1);
									player.loseHp();
								}
								var cards = player.getExpansions('zshy_moshi');
								if (cards.length == 1) event._result = { bool: true, links: cards };
								else player.chooseCardButton('请选择要获得的一张【杀】', cards, true);
								('step 1');
								if (result.links?.length) {
									player.gain(result.links, player, 'giveAuto');
								}
							},
							marktext: '矢',
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							group: ['zshy_moshi_Sha'],
							subSkill: {
								Sha: {
									audio: 'zshy_moshi',
									trigger: {
										global: 'roundStart',
									},
									forced: true,
									firstDo: true,
									charlotte: true,
									filter(event, player) {
										return player.countMark('zshy_moshi_Sha') > 0;
									},
									content() {
										var num = player.countMark('zshy_moshi_Sha');
										player.loseHp(num);
									},
									mod: {
										maxHandcard(player, num) {
											var sha = player.getExpansions('zshy_moshi_Sha').length;
											if (sha > 0) return num - sha;
										},
									},
									marktext: '箭伤',
									intro: {
										content: '已中#箭',
									},
								},
							},
							ai: {},
							ai: {
								neg: true,
								jueqing: true,
								order() {
									return [3, 5, 7, 9].randomGet();
								},
								result: {
									player(player) {
										return player.getExpansions('zshy_moshi').length - 1;
									},
								},
							},
						},
						zshy_buqu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'chooseToUseBefore',
							},
							forced: true,
							filter(event, player) {
								return event.type == 'dying' && player.isDying() && event.dying == player && !event.parent._zshy_buqu;
							},
							content() {
								'step 0';
								trigger.parent._zshy_buqu = true;
								var card = get.cards()[0];
								event.card = card;
								player.addToExpansion(card, 'gain2').gaintag.add('zshy_buqu');
								('step 1');
								var cards = player.getExpansions('zshy_buqu'),
									num = card.number;
								player.showCards(cards, '不屈');
								if (Array.isArray(cards)) for (var i of cards) {
									if (i != card && i.number == num) {
										player.gain(card, 'gain2');
										return;
									}
								}
								trigger.cancel();
								trigger.result = { bool: true };
								if (player.hp <= 0) {
									player.recover(1 - player.hp);
									var num = player.getDamagedHp();
									player.draw(num);
								}
							},
							ai: {
								save: true,
								skillTagFilter(player, tag, target) {
									if (player != target) return false;
								},
							},
							marktext: '创',
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.getExpansions('zshy_buqu').length;
								},
							},
						},
						zshy_fenji: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: ['gainAfter', 'loseAfter', 'loseAsyncAfter'],
							},
							filter(event, player) {
								if (event.name == 'lose') {
									if (event.type != 'discard' || !event.player.isIn()) return false;
									if ((event.discarder || event.getParent(2).player) == event.player) return false;
									if (!event.getl(event.player).hs.length) return false;
									return true;
								} else if (event.name == 'gain') {
									if (event.giver || event.parent.name == 'gift') return false;
									const cards = event.getg(event.player);
									if (!cards.length) return false;
									return game.hasPlayer(function (current) {
										if (current == event.player) return false;
										const hs = event.getl(current).hs;
										for (var i of hs) {
											if (cards.includes(i)) return true;
										}
										return false;
									});
								} else if (event.type == 'gain') {
									if (event.giver || !event.player || !event.player.isIn()) return false;
									const hs = event.getl(event.player);
									return game.hasPlayer(function (current) {
										if (current == event.player) return false;
										const cards = event.getg(current);
										for (var i of cards) {
											if (hs.includes(i)) return true;
										}
									});
								} else if (event.type == 'discard') {
									if (!event.discarder) return false;
									return game.hasPlayer(function (current) {
										return current != event.discarder && event.getl(current).hs.length;
									});
								}
								return false;
							},
							getIndex(event, player, triggername) {
								const targets = [];
								if (event.name == 'gain') {
									const cards = event.getg(event.player);
									targets.addArray(
										game.filterPlayer(function (current) {
											if (current == event.player) return false;
											const hs = event.getl(current).hs;
											for (var i of hs) {
												if (cards.includes(i)) return true;
											}
											return false;
										})
									);
								} else if (event.name == 'loseAsync' && event.type == 'discard') {
									targets.addArray(
										game.filterPlayer(function (current) {
											return current != event.discarder && event.getl(current).hs.length;
										})
									);
								} else targets.push(event.player);
								return targets;
							},
							async cost(event, trigger, player) {
								const target = event.indexedData;
								event.result = await player
									.chooseBool(get.prompt('fenji', target), '失去1点体力,令该角色摸两张牌')
									.set('ai', function () {
										return get.attitude(player, target) > 4;//QQQ
									})
									.forResult();
							},
							async content(event, trigger, player) {
								const target = event.indexedData;
								await player.loseHp();
								await player.draw();
								await target.draw(2);
							},
						},
						zshy_guhuo: {
							audio: 'ext:诸神寰宇/audio/character:2',
							derivation: ['zshy_chanyuan'],
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								return lib.inpile.includes(name) && player.countCards('h') > 0 && player.hasMark('zshy_guhuo');
							},
							filter(event, player) {
								if (!player.countCards('hs') || !player.hasMark('zshy_guhuo')) return false;
								for (var i of lib.inpile) {
									var type = get.type(i);
									if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
									if (i == 'sha') {
										for (var j of lib.inpile_nature) {
											if (event.filterCard && event.filterCard({ name: i, nature: j }, player, event)) return true;
										}
									}
								}
								return false;
							},
							chooseButton: {
								dialog() {
									var list = [];
									for (var i of lib.inpile) {
										var type = get.type(i);
										if (type == 'basic' || type == 'trick') list.push([type, '', i]);
										if (i == 'sha') {
											for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
										}
									}
									return ui.create.dialog('蛊惑', [list, 'vcard']);
								},
								filter(button, player) {
									var evt = _status.event.parent;
									return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
								},
								check(button) {
									var player = _status.event.player;
									var rand = _status.event.parent.getRand('zshy_guhuo');
									var hasEnemy = game.hasPlayer(function (current) {
										return current != player && !current.hasSkill('zshy_chanyuan') && (get.realAttitude || get.attitude)(current, player) < 0;
									});
									var card = { name: button.link[2], nature: button.link[3] };
									var val = _status.event.parent.type == 'phase' ? player.getUseValue(card) : 1;
									if (val <= 0) return 0;
									if (hasEnemy && rand > 0.3) {
										if (
											!player.countCards('h', function (cardx) {
												if (card.name == cardx.name) {
													if (card.name != 'sha') return true;
													return get.is.sameNature(card, cardx);
												}
												return false;
											})
										)
											return 0;
										return 3 * val;
									}
									return val;
								},
								backup(links, player) {
									return {
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
											suit: 'none',
											number: null,
										},
										filterCard(card, player, target) {
											var result = true;
											var suit = card.suit,
												number = card.number;
											card.suit = 'none';
											card.number = null;
											var mod = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
											if (mod != 'unchanged') result = mod;
											card.suit = suit;
											card.number = number;
											return result;
										},
										position: 'hs',
										ignoreMod: true,
										ai1(card) {
											var player = _status.event.player;
											var hasEnemy = game.hasPlayer(function (current) {
												return current != player && !current.hasSkill('zshy_chanyuan') && (get.realAttitude || get.attitude)(current, player) < 0;
											});
											var rand = _status.event.getRand('zshy_guhuo');
											var cardx = lib.skill.zshy_guhuo_backup.viewAs;
											if (hasEnemy && rand > 0.3) {
												if (card.name == cardx.name && (card.name != 'sha' || get.is.sameNature(card, cardx))) return 10;
												return 0;
											}
											return 6 - get.value(card);
										},
										precontent() {
											player.addTempSkill('zshy_guhuo_guess');
											var card = event.result.cards[0];
											event.result.card.suit = card.suit;
											event.result.card.number = card.number;
										},
									};
								},
								prompt(links) {
									return '将一张手牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							marktext: '蛊惑',
							intro: {
								content: '本回合〖蛊惑〗还可发动#次',
							},
							group: ['zshy_guhuo_Add'],
							subSkill: {
								guess: {
									trigger: {
										player: ['useCardBefore', 'respondBefore'],
									},
									forced: true,
									silent: true,
									popup: false,
									charlotte: true,
									firstDo: true,
									filter(event, player) {
										return event.skill && event.skill.indexOf('zshy_guhuo_') == 0;
									},
									content() {
										'step 0';
										player.removeMark('zshy_guhuo', 1);
										event.fake = false;
										var card = trigger.cards[0];
										if (card.name != trigger.card.name || (card.name == 'sha' && !get.is.sameNature(trigger.card, card))) event.fake = true;
										player.line(trigger.targets, get.nature(trigger.card));
										event.cardTranslate = get.translation(trigger.card.name);
										trigger.card.number = card.number;
										trigger.card.suit = card.suit;
										trigger.skill = 'zshy_guhuo_backup';
										if (trigger.card.name == 'sha' && get.natureList(trigger.card).length) event.cardTranslate = get.translation(trigger.card.nature) + event.cardTranslate;
										player.popup(event.cardTranslate, trigger.name == 'useCard' ? 'metal' : 'wood');
										event.prompt = '是否质疑' + get.translation(player) + '声明的' + event.cardTranslate + '？';
										game.log(player, '声明了', '#y' + event.cardTranslate);
										event.targets = game
											.filterPlayer(function (current) {
												return current != player && !current.hasSkill('zshy_chanyuan');
											})
											.sortBySeat();
										event.targets2 = event.targets.slice(0);
										player.lose(card, ui.ordering).relatedEvent = trigger;
										if (!event.targets.length) event.goto(5);
										else if (_status.connectMode) event.goto(3);
										event.betrays = [];
										('step 1');
										event.target = targets.shift();
										event.target.chooseButton([event.prompt, [['zshy_guhuo_ally', 'zshy_guhuo_betray'], 'vcard']], true, function (button) {
											var player = _status.event.player;
											var evt = _status.event.getParent('zshy_guhuo_guess');
											if (!evt) return Math.random();
											var ally = button.link[2] == 'zshy_guhuo_ally';
											if (ally && (player.hp <= 1 || get.attitude(player, evt.player) >= 0)) return 1.1;
											return Math.random();
										});
										('step 2');
										if (result.links[0][2] == 'zshy_guhuo_betray') {
											event.betrays.push(target);
											target.addExpose(0.2);
										}
										event.goto(targets.length ? 1 : 5);
										('step 3');
										var list = event.targets.map(function (target) {
											return [target, [event.prompt, [['zshy_guhuo_ally', 'zshy_guhuo_betray'], 'vcard']], true];
										});
										player
											.chooseButtonOL(list)
											.set('switchToAuto', function () {
												_status.event.result = 'ai';
											})
											.set('processAI', function () {
												var choice = Math.random() > 0.5 ? 'zshy_guhuo_ally' : 'zshy_guhuo_betray';
												var player = _status.event.player;
												var evt = _status.event.getParent('zshy_guhuo_guess');
												if (player.hp <= 1 || (evt && (get.realAttitude || get.attitude)(player, evt.player) >= 0)) choice = 'zshy_guhuo_ally';
												return {
													bool: true,
													links: [['', '', choice]],
												};
											});
										('step 4');
										for (var i in result) {
											if (result[i].links[0][2] == 'zshy_guhuo_betray') {
												event.betrays.push(lib.playerOL[i]);
												lib.playerOL[i].addExpose(0.2);
											}
										}
										('step 5');
										for (var i of event.targets2) {
											var b = event.betrays.includes(i);
											i.popup(b ? '质疑' : '不质疑', b ? 'fire' : 'wood');
											game.log(i, b ? '#y质疑' : '#g不质疑');
										}
										('step 6');
										player.showCards(trigger.cards);
										if (event.betrays.length) {
											event.betrays.sortBySeat();
											if (event.fake) {
												for (var i of event.betrays) {
													i.draw(2);
													i.recover();
												}
												trigger.cancel();
												trigger.parent.goto(0);
												game.log(player, '声明的', '#y' + event.cardTranslate, '作废了');
											} else {
												var next = game.createEvent('zshy_guhuo_final', false);
												event.next.remove(next);
												trigger.after.push(next);
												next.targets = event.betrays;
												next.setContent(lib.skill.zshy_guhuo_guess.contentx);
												event.finish();
											}
										} else event.finish();
										('step 7');
									},
									contentx() {
										'step 0';
										event.target = targets.shift();
										if (event.target.countCards > 0) {
											event.target.chooseToDiscard(true, '弃置一张牌').set('ai', function (card) {
												return 9 - get.value(card);
											});
										}
										event.target.loseHp();
										('step 1');
										target.addSkills('zshy_chanyuan');
										if (targets.length) event.goto(0);
									},
								},
								Add: {
									trigger: {
										global: ['phaseBefore'],
									},
									forced: true,
									popup: false,
									silent: true,
									firstDo: true,
									content() {
										var x = player.maxHp,
											y = player.countMark('zshy_guhuo');
										if (y < x) player.addMark('zshy_guhuo', x - y);
										else if (y > x) player.removeMark('zshy_guhuo', y - x);
									},
								},
								backup: {},
							},
							ai: {
								fireAttack: true,
								respondShan: true,
								respondSha: true,
								skillTagFilter(player) {
									if (!player.countCards('hs') || !player.hasMark('zshy_guhuo')) return false;
								},
								order: 10,
								result: {
									player: 1,
								},
								threaten: 1.3,
							},
						},
						zshy_chanyuan: {
							init(player, skill) {
								player.addSkillBlocker(skill);
							},
							onremove(player, skill) {
								player.removeSkillBlocker(skill);
							},
							skillBlocker(skill, player) {
								return skill != 'chanyuan' && skill != 'zshy_chanyuan' && !lib.skill[skill].charlotte && !lib.skill[skill].persevereSkill && player.hp <= 1;
							},
							mark: true,
							intro: {
								content(storage, player, skill) {
									var str = '<li>锁定技,你不能于〖蛊惑〗的结算流程中进行质疑.当你的体力值不大于1时,你的其他技能失效.';
									var list = player.getSkills(null, false, false).filter(function (i) {
										return lib.skill.zshy_chanyuan.skillBlocker(i, player);
									});
									if (list.length) str += '<br><li>失效技能:' + get.translation(list);
									return str;
								},
							},
							audio: 2,
							trigger: { player: 'changeHp' },
							filter(event, player) {
								return get.sgn(player.hp - 1.5) != get.sgn(player.hp - 1.5 - event.num);
							},
							forced: true,
							content() { },
						},
						zshy_leiji: {
							audio: 'ext:诸神寰宇/audio/character:2',
							derivation: 'zshy_leiji_faq',
							trigger: { player: ['useCard', 'respond'] },
							filter(event, player) {
								return event.card && event.card.name == 'shan' || (event.name == 'useCard' && event.card.name == 'shandian');
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
								player.judge(lib.skill.zshy_leiji.judgeCheck).judge2 = function (result) {
									return result.bool ? true : false;
								};
							},
							group: 'zshy_leiji_misa',
							subSkill: {
								misa: {
									audio: 'zshy_leiji',
									trigger: { global: 'judgeEnd' },
									forced: true,
									filter(event, player) {
										return ['spade', 'club'].includes(event.result.suit);
									},
									content() {
										'step 0';
										event.num = 1 + ['club', 'spade'].indexOf(trigger.result.suit);
										if (event.num == 1 && player.isDamaged()) {
											player.recover();
										} else {
											player.recover(2);
										}
										player.chooseTarget('雷击:是否对一名角色造成' + event.num + '点雷电伤害？').ai = function (target) {
											var player = _status.event.player;
											return get.damageEffect(target, player, player, 'thunder');
										};
										('step 1');
										if (result.targets?.length) {
											player.line(result.targets, 'thunder');
											result.targets[0].damage(event.num, 'thunder');
										}
									},
								},
							},
							ai: {
								useShan: true,
								effect: {
									target_use(card, player, target, current) {
										let name;
										if (typeof card == 'object') {
											if (card.viewAs) name = card.viewAs;
											else name = card.name;
										}
										if (
											name == 'shandian' ||
											(get.tag(card, 'respondShan') &&
												!player.hasSkillTag(
													'directHit_ai',
													true,
													{
														target: target,
														card: card,
													},
													true
												))
										) {
											let club = 0,
												spade = 0;
											if (
												game.hasPlayer(function (current) {
													return get.attitude(target, current) < 0 && get.damageEffect(current, target, target, 'thunder') > 0;
												})
											) {
												club = 2;
												spade = 4;
											}
											if (!club && !spade) return 1;
											if (name === 'sha') {
												if (
													!target.mayHaveShan(
														player,
														'use',
														target.getCards('h', (i) => {
															return i.hasGaintag('sha_notshan');
														})
													)
												)
													return;
											} else if (!target.mayHaveShan(player)) return 1 - 0.1 * Math.min(5, target.countCards('hs'));
											if (!target.hasSkillTag('rejudge')) return [1, (club + spade) / 4];
											let pos = player == target || player.hasSkillTag('viewHandcard', null, target, true) ? 'hes' : 'e',
												better = club > spade ? 'club' : 'spade',
												max = 0;
											target.hasCard(function (cardx) {
												if (cardx.suit == better) {
													max = 2;
													return true;
												}
												if (spade && get.color(cardx) == 'black') max = 1;
											}, pos);
											if (max == 2) return [1, Math.max(club, spade)];
											if (max == 1) return [1, Math.min(club, spade)];
											if (pos == 'e') return [1, Math.min((Math.max(1, target.countCards('hs')) * (club + spade)) / 4, Math.max(club, spade))];
											return [1, (club + spade) / 4];
										}
									},
									target(card, player, target) {
										if (name == 'lebu' || name == 'bingliang') return [target.hasSkillTag('rejudge') ? 0.4 : 1, 2, target.hasSkillTag('rejudge') ? 0.4 : 1, 0];
									},
								},
							},
						},
						zshy_guidao: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: { global: 'judge' },
							filter(event, player) {
								return player.countCards('hes', { color: 'black' }) > 0;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('zshy_guidao'), 'hes', function (card) {
										if (get.color(card) != 'black') return false;
										var player = _status.event.player;
										var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
										if (mod2 != 'unchanged') return mod2;
										var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
										if (mod != 'unchanged') return mod;
										return true;
									})
									.set('ai', function (card) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										var judging = _status.event.judging;
										var result = trigger.judge(card) - trigger.judge(judging);
										var attitude = get.attitude(player, trigger.player);
										if (attitude == 0 || result == 0) {
											if (trigger.player != player) return 0;
											if (
												game.hasPlayer(function (current) {
													return get.attitude(player, current) < 0;
												})
											) {
												var checkx = lib.skill.xinleiji.judgeCheck(card, true) - lib.skill.xinleiji.judgeCheck(judging);
												if (checkx > 0) return checkx;
											}
											return 0;
										}
										if (attitude > 0) {
											return result;
										} else {
											return -result;
										}
									})
									.set('judging', trigger.player.judging[0]);
								('step 1');
								if (result.cards?.length) {
									player.respond(result.cards, 'highlight', 'zshy_guidao', 'noOrdering');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.$gain2(trigger.player.judging[0]);
									player.gain(trigger.player.judging[0]);
									var card = result.cards[0];
									if (card.suit == 'spade' && card.number > 1 && card.number < 10) player.draw('nodelay');
									trigger.player.judging[0] = result.cards[0];
									trigger.orderingCards.addArray(result.cards);
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
								}
								('step 3');
							},
							mod: {
								aiOrder(player, card, num) {
									if (num > 0 && get.itemtype(card) == 'card' && get.color(card) == 'black' && get.type(card) == 'equip') num * 1.35;
								},
								aiValue(player, card, num) {
									if (num > 0 && get.itemtype(card) == 'card' && get.color(card) == 'black') return num * 1.15;
								},
								aiUseful(player, card, num) {
									if (num > 0 && get.itemtype(card) == 'card' && get.color(card) == 'black') return num * 1.35;
								},
							},
							ai: {
								rejudge: true,
								tag: {
									rejudge: 1,
								},
							},
						},
						zshy_wushen: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								if ('sha' != name) return false;
								return player.countCards('hes');
							},
							filter(event, player) {
								if (event.name == 'chooseToUse' && !player.hasUseTarget({ name: 'sha' }, true, true)) {
									return false;
								}
								return player.countCards('hes') && event.filterCard({ name: 'sha' }, player, event);
							},
							//<li>锁定技,你可以将一张牌当作任意属性的【杀】使用或打出.<li>你使用红色牌无距离限制、不可响应且基础数值+1,你使用【杀】的次数+X.(X为你已损失体力值+1)<li>当你使用【杀】指定目标后,你观看并弃置该角色一张牌.
							chooseButton: {
								dialog(event, player) {
									const list = [];
									for (var j of Array.from(lib.nature.keys())) {
										list.push([lib.suits.randomGet(), lib.number.randomGet(), 'sha', j]);
									}
									return ui.create.dialog('武神', [list, 'vcard']);
								},//QQQ
								check(button) {
									var player = _status.event.player;
									return player.getUseValue({ name: button.link[2] }) + 1;
								},
								backup(links, player) {
									return {
										filterCard: true,
										position: 'hes',
										popname: true,
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
										},
										check(card, player, target) {
											return 7 - get.value(card);
										},
										precontent() {
										},
									};
								},
								prompt(links, player) {
									var name = links[0][2],
										nature = links[0][3];
									return '将一张牌当作' + (get.translation(nature) || '') + '【' + get.translation(name) + '】使用或打出';
								},
							},
							ai: {
								fireAttack: true,
								respondSha: true,
								skillTagFilter(player, tag) {
									return player.countCards('hes');
								},
								order: 1,
								result: {
									player: 1,
								},
							},
							mod: {
								targetInRange(card) {
									if (get.color(card) == 'red') return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha' && get.color(card) == 'red') return (num += player.getDamagedHp() + 1);
								},
								aiOrder(player, card, num) {
									if (card.name == 'sha' && get.color(card) == 'red') return num--;
								},
							},
							group: ['zshy_wushen_Red', 'zshy_wushen_usetarget'],
							subSkill: {
								Red: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									silent: true,
									popup: false,
									lastDo: true,
									filter(event, player) {
										return get.color(event.card) == 'red';
									},
									content() {
										trigger.baseDamage++;
										trigger.directHit.addArray(game.players);
										if (trigger.addCount != false) {
											trigger.addCount = false;
										}
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'sha' && get.color(arg.card) == 'red';
										},
									},
								},
								usetarget: {
									audio: 'wusheng',//QQQ
									trigger: {
										player: ['useCardToTargeted'],
									},
									forced: true,
									logTarget: 'target',
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.targets && event.targets.length == 1;
									},
									check(event, player) {
										return get.attitude(player, event.target) < 0;
									},
									content() {
										player.discardPlayerCard('he', trigger.target, true, 'visible');
									},
								},
							},
						},
						zshy_wuhun: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['damageBegin4', 'loseHpBegin'],
							},
							forced: true,
							charlotte: true,
							content() {
								'step 0';
								player.draw(trigger.num);
								('step 1');
								var str = '令一名其他角色获得' + trigger.num + '枚<魂>';
								player.chooseTarget(get.prompt('zshy_wuhun'), str, lib.filter.notMe).set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									if (att < 0) {
										if (target.countMark('zshy_wuhun') < target.hp) return 2;
										return 1;
									}
									return 0;
								});
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target);
									target.addMark('zshy_wuhun', trigger.num);
								}
							},
							marktext: '魂',
							intro: {
								name2: '魂',
								content: 'mark',
							},
							group: 'zshy_wuhun_die',
							subSkill: {
								die: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: {
										player: 'die',
									},
									forced: true,
									forceDie: true,
									filter(event, player) {
										return game.hasPlayer(function (current) {
											return current.hasMark('zshy_wuhun');
										});
									},
									logTarget() {
										return game.filterPlayer(function (current) {
											return current.hasMark('zshy_wuhun');
										});
									},
									content() {
										game.countPlayer(function (current) {
											var num = current.countMark('zshy_wuhun');
											if (num > 0) {
												current.removeMark('zshy_wuhun', num);
												if (num >= current.hp) {
													current.die();
												} else {
													current.randomDiscard('he', num, true);
													current.loseHp(num);
												}
											}
										});
									},
								},
							},
						},
						zshy_shelie: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								var history = event.player.getHistory('useCard');
								var suits = [];
								var types = [];
								for (var i = 0; i < history.length; i++) {
									var suit = history[i].card.suit;
									if (suit) suits.add(suit);
									types.add(get.type(history[i].card));
								}
								return suits.length >= 4 || types.length >= 3;
							},
							content() {
								player.draw(2);
								var next = player.phaseUse();
								event.next.remove(next);
								trigger.parent.next.push(next);
							},
							group: ['zshy_shelie_Gain', 'zshy_shelie_keji'],
							subSkill: {
								Gain: {
									audio: 'zshy_shelie',
									trigger: {
										player: 'drawBefore',
									},
									check(event, player) {
										return Math.random() < 0.9;
									},
									filter(event, player) {
										return event.num > 0;
									},
									prompt2(event, player) {
										var num = event.num;
										return '改为随机获得' + num + '张某种类型或位置的牌';
									},
									content() {
										'step 0';
										trigger.cancel();
										event.cards = [];
										event.num = 1;
										event.getResultString = function (str) {
											switch (str) {
												case '基本':
													return 'basic';
												case '装备':
													return 'equip';
												case '锦囊':
													return 'trick';
												case '地图':
													return 'land';
											}
											return str;
										};
										('step 1');
										player
											.chooseControl('基本', '装备', '锦囊', '地图', '牌顶', '牌底', '弃牌堆', function () {
												if (Math.random() < 0.6) return '基本';
												if (Math.random() < 0.6) return '锦囊';
												if (Math.random() < 0.6) return '装备';
												return '基本';
											})
											.set('prompt', '★涉猎★<li>共计要获得' + trigger.num + '张牌<li>请选择要获得的第' + event.num + '张牌的类型或位置');
										('step 2');
										if (result.control == '牌顶') player.gain(get.cards()[0], 'gain2');
										else if (result.control == '牌底') player.gain(get.bottomCards()[0], 'gain2');
										else if (result.control == '弃牌堆') {
											var pile = ui.discardPile.childNodes;
											var cards = Array.from(pile).randomGets(1);
											if (cards) player.gain(cards, 'gain2');
										} else {
											var want = event.getResultString(result.control);
											var cardx = get.cardPile(function (card) {
												return get.type(card, 'trick') == want;
											});
											if (cardx) player.gain(cardx, 'gain2');
											else player.gain(get.cards()[0], 'gain2');
										}
										('step 3');
										if (event.num < trigger.num) {
											event.num++;
											event.goto(1);
										}
									},
								},
								keji: {
									audio: 'zshy_shelie',
									forced: true,
									trigger: {
										player: ['phaseDiscardBefore', 'phaseUseEnd'],
									},
									content() {
										if ((event.name = 'phaseUseEnd')) {
											player.draw();
											player.recover();
										} else trigger.cancel();
									},
								},
							},
						},
						zshy_SLMgongxin: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'useCardToPlayered',
								target: 'useCardToTargeted',
							},
							shaRelated: true,
							check(event, player) {
								var target = lib.skill.zshy_SLMgongxin.logTarget(event, player);
								return get.attitude(player, target) < 0;
							},
							filter(event, player) {
								var target = lib.skill.zshy_SLMgongxin.logTarget(event, player);
								if (player == target || event.targets.length != 1) return false;
								return target.isAlive() && target.countCards('h');
							},
							logTarget(event, player) {
								return player == event.player ? event.target : event.player;
							},
							prompt2(event, player) {
								var target = lib.skill.zshy_SLMgongxin.logTarget(event, player);
								return '观看' + get.translation(target) + '的手牌并选择一项:';
							},
							content() {
								'step 0';
								var target = lib.skill.zshy_SLMgongxin.logTarget(trigger, player);
								event.target = target;
								event.num = target.getCards('h').reduce(function (arr, card) {
									return arr.add(card.suit), arr;
								}, []).length;
								('step 1');
								player
									.chooseButton(2, ['攻心', target.getCards('h'), [['获得此牌', '置于牌顶'], 'tdnodes']])
									.set('filterButton', function (button) {
										var type = typeof button.link;
										if (ui.selected.buttons.length && type == typeof ui.selected.buttons[0].link) return false;
										return true;
									})
									.set('ai', function (button) {
										var target = _status.event.target;
										var type = typeof button.link;
										if (type == 'object') return get.value(button.link, target);
									});
								('step 2');
								if (result.links?.length) {
									if (typeof result.links[0] != 'string') result.links.reverse();
									var card = result.links[1],
										choice = result.links[0];
									if (choice == '获得此牌') player.gain(card, target, 'giveAuto');
									else {
										target.lose(card, ui.cardPile, 'visible', 'insert');
										game.log(target, '的', card, '被置于牌堆顶');
										player.draw('bottom');
									}
								} else event.finish();
							},
							ai: {
								expose: 0.2,
							},
						},
						zshy_qiangxi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								if (!player.isAlive() && !player.hasCard((card) => lib.skill.zshy_qiangxi.filterCard(card), 'he')) return false;
								return game.hasPlayer((current) => lib.skill.olqiangxi.filterTarget(null, player, current));
							},
							filterCard(card, player) {
								return get.subtype(card) == 'equip1';
							},
							position: 'he',
							filterTarget(card, player, target) {
								return target != player;
								var stat = player.getStat()._zshy_qiangxi;
								return !stat || !stat.includes(target);
							},
							selectCard() {
								if (_status.event.player.isAlive() == 'true') return 1;
								return [0, 1];
							},
							content() {
								if (cards.length) target.damage(2, 'nocard');
								else target.damage('nocard');
							},
							ai: {
								damage: true,
								order: 9,
								result: {
									player(player, target) {
										return get.damageEffect(player, player, player);
									},
									target(player, target) {
										return get.damageEffect(target, player, target);
									},
								},
								threaten: 1.5,
							},
						},
						zshy_ninge: {
							audio: 'zshy_qiangxi',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								if (player != event.player && player != event.source) return false;
								return event.player.getHistory('damage').indexOf(event) >= 1;
							},
							logTarget: 'player',
							forced: true,
							content() {
								player.draw();
								var num = Math.max(1, trigger.player.countCards('h') - player.hp + 1);
								if (trigger.player != player) player.discardPlayerCard(trigger.player, num, true, 'hej');
							},
						},
						zshy_quhu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								return game.hasPlayer(function (current) {
									return player.canCompare(current);
								});
							},
							filterTarget(card, player, target) {
								return player.canCompare(target);
							},
							async content(event, trigger, player) {
								const target = event.target;
								const { bool } = await player.chooseToCompare(target).forResult();
								if (!bool) return void (await player.damage(target));
								if (
									!game.hasPlayer(function (player) {
										return player != target;
									})
								)
									return;
								const result = await player
									.chooseTarget(function (card, player, target) {
										const source = _status.event.source;
										return target != source;
									}, true)
									.set('ai', function (target) {
										return get.damageEffect(target, _status.event.source, player);
									})
									.set('source', target).forResult();
								if (!result.bool || !result.targets || !result.targets.length) return;
								target.line(result.targets[0], 'green');
								const num = Math.max(player.hp, target.hp - result.targets[0].hp);
								await result.targets[0].damage(num, target);
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										const att = get.attitude(player, target);
										const oc = target.countCards('h') == 1;
										if (att > 0 && oc) return 0;
										const players = game.filterPlayer();
										for (var i of players) {
											if (i != target && i != player) {
												if (get.damageEffect(i, target, player) > 0) {
													return att > 0 ? att / 2 : att - (oc ? 5 : 0);
												}
											}
										}
										return 0;
									},
									player(player, target) {
										if (target.hasSkillTag('jueqing', false, target)) return -10;
										const hs = player.getCards('h');
										let mn = 1;
										for (var i = 0; i < hs.length; i++) {
											mn = Math.max(mn, hs[i].number);
										}
										if (mn <= 11 && player.hp < 2) return -20;
										let max = player.maxHp - hs.length;
										const players = game.filterPlayer();
										for (var i of players) {
											if (get.attitude(player, i) > 2) {
												max = Math.max(Math.min(5, i.hp) - i.countCards('h'), max);
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
						zshy_jieming: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: { player: ['damageEnd', 'die'] },
							forced: true,
							forceDie: true,
							filter(event, player) {
								if (event.name == 'die') return true;
								return player.isIn();
							},
							content() {
								'step 0';
								event.count = trigger.num || 1;
								('step 1');
								event.count--;
								player
									.chooseTarget(get.prompt2('zshy_jieming'), function (card, player, target) {
										return target.maxHp > 0;
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										var draw = target.maxHp - target.countCards('h');
										if (draw >= 0) {
											if (target.hasSkillTag('nogain')) att /= 6;
											if (att > 2) {
												return Math.sqrt(draw + 1) * att;
											}
											return att / 3;
										}
										if (draw < -1) {
											if (target.hasSkillTag('nogain')) att *= 6;
											if (att < -2) {
												return -Math.sqrt(1 - draw) * att;
											}
										}
										return 0;
									});
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									target.draw(target.hp + player.hp);
								} else event.finish();
								('step 3');
								var num = target.countCards('h') - target.maxHp;
								if (num > 0 && target != player) {
									target.chooseToDiscard('h', true, num);
									player.chooseDrawRecover(num, true);
								}
								('step 4');
								if (event.count > 0 && player.isIn() && player.hasSkill('zshy_jieming')) event.goto(1);
							},
							ai: {
								expose: 0.2,
								order: 9,
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && target.hp > 1) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											var max = 0;
											var players = game.filterPlayer();
											for (var i of players) {
												if (get.attitude(target, i) > 0) {
													max = Math.max(i.hp - i.countCards('h'), max);
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
									},
								},
							},
						},
						zshy_lianhuan: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'useCardToTargeted',
							},
							check(event, player) {
								var eff = get.effect(event.target, { name: 'guohe_copy2' }, player, player);
								return get.attitude(player, event.target) < 0 && eff > 0;
							},
							filter(event, player) {
								var target = event.target;
								if (target == player || !target.isIn()) return false;
								return target.isLinked() && target.countCards('he');
							},
							logTarget: 'target',
							prompt2(event, player) {
								return '令' + get.translation(event.target) + '随机弃置1张牌';
							},
							content() {
								trigger.target.randomDiscard('he', true);
							},
							ai: {
								expose: 0.2,
							},
							group: 'zshy_lianhuan_Link',
							subSkill: {
								Link: {
									audio: 'zshy_lianhuan',
									enable: 'phaseUse',
									filter(event, player) {
										return player.countCards('hes', { color: 'black' });
									},
									filterCard(card, player) {
										return get.color(card) == 'black';
									},
									lose: false,
									delay: false,
									discard: false,
									position: 'hes',
									check(card) {
										return 4 - get.value(card);
									},
									prompt: '出牌阶段,你可以重铸1张黑色牌,视为使用1张【铁索连环】',
									content() {
										'step 0';
										player.recast(cards);
										('step 1');
										player.chooseUseTarget({ name: 'tiesuo' }, false);//QQQ
									},
									ai: {
										order() {
											return [5, 7, 9].randomGet();
										},
										result: {
											player: 1,
										},
									},
								},
							},
						},
						zshy_niepan: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'chooseToUse',
							mark: true,
							limited: true,
							init(player) {
								player.storage.zshy_niepan = false;
							},
							filter(event, player) {
								if (player.storage.zshy_niepan) return false;
								if (event.type == 'dying') {
									if (player != event.dying) return false;
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_niepan');
								player.addSkillLog('zshy_niepan');
								player.storage.zshy_niepan = true;
								('step 1');
								player.link(false);
								('step 2');
								player.turnOver(false);
								('step 3');
								player.draw(4);
								('step 4');
								if (player.hp < player.maxHp) {
									player.hp = player.maxHp;
								}
								('step 5');
								player.chooseControl('zshy_huoji', 'zshy_bazhen', 'zshy_kanpo').set('prompt', '选择获得一个技能').ai = function () {
									return ['zshy_huoji', 'zshy_bazhen', 'zshy_kanpo'].randomGet();
								};
								('step 6');
								player.addSkills(result.control);
							},
							derivation: ['zshy_huoji', 'zshy_bazhen', 'zshy_kanpo'],
							ai: {
								order: 1,
								skillTagFilter(player, tag, target) {
									if (player != target || player.storage.zshy_niepan) return false;
								},
								save: true,
								result: {
									player(player) {
										if (player.hp <= 0) return 10;
										if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
										return 0;
									},
								},
								threaten(player, target) {
									if (!target.storage.zshy_niepan) return 0.6;
								},
							},
							intro: {
								content: 'limited',
							},
						},
						zshy_huoji: {
							audio: 'ext:诸神寰宇/audio/character:4',
							audioname: ['zshy_ZpangtongSHZL'],
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('hes');
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								'step 0';
								target.addTempSkill('fengyin', 'zshy_huojiAfter');
								('step 1');
								if (player.countCards('hes')) {
									var str = '请弃置任意张牌,并对' + get.translation(target) + '造成等量的火焰伤害';
									player.chooseToDiscard(get.prompt('zshy_huoji'), [1, Infinity], 'hes', str, true).set('ai', function (card) {
										if (ui.selected.cards.length) {
											if (target.hasSkillTag('filterDamage')) return 0;
											if (Math.random() < 0.5) return 0;
											return 6 - get.value(card);
										}
										return 7 - get.value(card);
									});
								} else event.finish();
								('step 2');
								if (result.bool) {
									player.line(target, 'fire');
									target.damage(result.cards.length, 'fire');
									var num = result.cards.length - player.hp;
									if (result.cards.length > player.hp) player.losehp(num, 'fire');
								}
								('step 3');
								if (!target.isAlive()) player.chooseDrawRecover(true);
							},
							ai: {
								order() {
									return [3, 4, 5, 6].randomGet();
								},
								result: {
									target(player, target) {
										if (
											!player.getCards('hes', function (card) {
												return get.value(card) < 8;
											}).length ||
											player.hasUnknown()
										)
											return 0;
										const att = get.sgn(get.attitude(player, target));
										const targets = game.filterPlayer((target) => get.damageEffect(target, player, player, 'fire'));
										if (!targets.includes(target)) return 0;
										return att * get.damageEffect(target, player, player, 'fire');
									},
								},
								tag: {
									fireDamage: 1,
									natureDamage: 1,
								},
							},
						},
						zshy_bazhen: {
							audio: 'ext:诸神寰宇/audio/character:2',
							audioname: ['zshy_ZpangtongSHZL'],
							equipSkill: true,
							inherit: 'bagua_skill',
							filter(event, player) {
								if (player.getEquip('bagua')) return false;
								return lib.skill.bagua_skill.filter.apply(this, arguments);
							},
							prompt2(event, player) {
								return '进行判定,若为红色,则视为你使用或打出【闪】';
							},
							ai: {
								respondShan: true,
								freeShan: true,
								effect: {
									target(card, player, target) {
										if (player == target && get.subtype(card) == 'equip2') if (get.equipValue(card) <= 7.5) return 0;
										return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
									},
								},
							},
							mod: {
								ignoredHandcard(card, player) {
									if (card.hasGaintag('zshy_bazhen')) return true;
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.hasGaintag('zshy_bazhen')) return false;
								},
							},
							group: 'zshy_bazhen_Gain',
							subSkill: {
								Gain: {
									audio: 'zshy_bazhen',
									trigger: {
										global: 'judgeEnd',
									},
									usable: 1,
									forced: true,
									filter(event, player) {
										if (!event.result || event.result.color != 'black') return false;
										return event.result.card && get.position(event.result.card, true) == 'o';
									},
									content() {
										player.draw();
									},
								},
							},
						},
						zshy_kanpo: {
							audio: 'ext:诸神寰宇/audio/character:2',
							audioname: ['zshy_ZpangtongSHZL'],
							trigger: {
								global: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								var storage = player.storage.zshy_kanpo;
								return !storage.length;
							},
							init(player) {
								if (!player.storage.zshy_kanpo) {
									player.storage.zshy_kanpo = [];
									player.markSkill('zshy_kanpo');
								}
							},
							async content(event, map) {
								var player = map.player,
									storage = player.storage.zshy_kanpo;
								player.markSkill('zshy_kanpo');
								const list = get.inpileVCardList((info) => {
									if (info[2] == 'sha' && info[3]) return false;
									return true;
								});
								const func = () => {
									const event = get.event();
									const controls = [
										(link) => {
											const evt = get.event();
											if (evt.dialog && evt.dialog.buttons) {
												for (var i = 0; i < evt.dialog.buttons.length; i++) {
													const button = evt.dialog.buttons[i];
													button.classList.remove('selectable');
													button.classList.remove('selected');
													const counterNode = button.querySelector('.caption');
													if (counterNode) counterNode.childNodes[0].innerHTML = ``;
												}
												ui.selected.buttons.length = 0;
												game.check();
											}
											return;
										},
									];
									event.controls = [ui.create.control(controls.concat(['清除选择', 'stayleft']))];
								};
								if (event.isMine()) func();
								var result = await player
									.chooseButton(['看破:是否记录至多7个牌名？', [list, 'vcard']], [1, 7], false)
									.set('ai', function (button) {
										if (ui.selected.buttons.length >= 7) return 0;
										switch (button.link[2]) {
											case 'wuxie':
												return 5 + Math.random();
											case 'sha':
												return 5 + Math.random();
											case 'tao':
												return 4 + Math.random();
											case 'jiu':
												return 3 + Math.random();
											case 'lebu':
												return 3 + Math.random();
											case 'shan':
												return 4.5 + Math.random();
											case 'wuzhong':
												return 4 + Math.random();
											case 'shunshou':
												return 2.7 + Math.random();
											case 'nanman':
												return 2 + Math.random();
											case 'wanjian':
												return 1.6 + Math.random();
											default:
												return 1.5 + Math.random();
										}
									})
									.set('custom', {
										add: {
											confirm(bool) {
												if (bool != true) return;
												const event = get.event().parent;
												if (event.controls) event.controls.forEach((i) => i.close());
												if (ui.confirm) ui.confirm.close();
												game.uncheck();
											},
											button() {
												if (ui.selected.buttons.length) return;
												const event = get.event();
												if (event.dialog && event.dialog.buttons) {
													for (var i = 0; i < event.dialog.buttons.length; i++) {
														const button = event.dialog.buttons[i];
														const counterNode = button.querySelector('.caption');
														if (counterNode) counterNode.childNodes[0].innerHTML = ``;
													}
												}
												if (!ui.selected.buttons.length) {
													const evt = event.parent;
													if (evt.controls) evt.controls[0].classList.add('disabled');
												}
											},
										},
										replace: {
											button(button) {
												const event = get.event();
												if (!event.isMine()) return;
												if (button.classList.contains('selectable') == false) return;
												if (ui.selected.buttons.length >= 7) return false;
												button.classList.add('selected');
												ui.selected.buttons.push(button);
												let counterNode = button.querySelector('.caption');
												const count = ui.selected.buttons.filter((i) => i == button).length;
												if (counterNode) {
													counterNode = counterNode.childNodes[0];
													counterNode.innerHTML = `×${count}`;
												} else {
													counterNode = ui.create.caption(
														`<span style='font-size:24px;font-family:xinwei;
												text-shadow:#FFF 0 0 4px,#FFF 0 0 4px,rgba(74,29,1,1)0 0 3px;'>×${count}</span>`,
														button
													);
													counterNode.style.right = '5px';
													counterNode.style.bottom = '2px';
												}
												const evt = event.parent;
												if (evt.controls) evt.controls[0].classList.remove('disabled');
												game.check();
											},
										},
									});
								if (result.links?.length) {
									var names = result.links.map((link) => link[2]);
									storage = names;
								}
								player.markSkill('zshy_kanpo');
							},
							marktext: '破',
							intro: {
								markcount(storage) {
									return storage.length;
								},
								mark(dialog, content, player) {
									const storage = player.getStorage('zshy_kanpo');
									if (player.isUnderControl(true) && storage.length) {
										dialog.addText('当前记录牌名:');
										dialog.addSmall([storage, 'vcard']);
									}
								},
							},
							group: ['zshy_kanpo_Doing', 'zshy_kanpo_card', 'zshy_kanpo_nowuxie'],
							subSkill: {
								Doing: {
									audio: 'zshy_kanpo',
									trigger: {
										global: 'useCard',
									},
									filter(event, player) {
										return event.player != player && player.storage.zshy_kanpo.includes(event.card.name);
									},
									prompt2(event, player) {
										return '移除' + get.translation(event.card.name) + '的记录,令' + get.translation(event.card) + '无效';
									},
									check(event, player) {
										var effect = 0;
										if (event.card.name == 'wuxie' || event.card.name == 'shan') {
											if (get.attitude(player, event.player) < -1) effect = -1;
										} else if (event.targets && event.targets.length) {
											for (var i = 0; i < event.targets.length; i++) {
												effect += get.effect(event.targets[i], event.card, event.player, player);
											}
										}
										if (effect < 0) {
											if (event.card.name == 'sha') {
												var target = event.targets[0];
												if (target == player) return !player.countCards('h', 'shan');
												else return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
											} else return true;
										}
										return false;
									},
									logTarget: 'player',
									content() {
										'step 0';
										var mark = player.storage.zshy_kanpo;//QQQ
										mark.remove(trigger.card.name);
										if (mark.length) player.markSkill('zshy_kanpo');
										else player.unmarkSkill('zshy_kanpo');
										('step 1');
										trigger.targets.length = 0;
										trigger.all_excluded = true;
										game.log(player, '令', trigger.card, '无效了');
										('step 2');
										player.draw('nodelay');
									},
								},
								card: {
									enable: 'chooseToUse',
									hiddenCard(player, name) {
										return ['wuxie'].includes(name) && player.countCards('hes');
									},
									filter(event, player) {
										if (!player.countCards('hes')) return false;
										for (var i of ['wuxie']) {
											if (event.filterCard && event.filterCard({ name: i }, player, event)) return true;
										}
										return false;
									},
									chooseButton: {
										dialog(event, player) {
											var list = [];
											for (var i of ['wuxie']) {
												var type = get.type2(i, false);
												if (event.filterCard && event.filterCard({ name: i }, player, event)) {
													list.push([type, '', i]);
												}
											}
											return ui.create.dialog('看破', [list, 'vcard']);
										},
										filter(button, player) {
											return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
										},
										check(button) {
											if (_status.event.parent.type != 'phase') return 1;
											return _status.event.player.getUseValue({ name: button.link[2] }, null, true);
										},
										backup(links, player) {
											return {
												filterCard: true,
												position: 'hes',
												popname: true,
												viewAs: {
													name: links[0][2],
												},
												check(card, player, target) {
													return 8 - get.value(card);
												},
												precontent() {
												},
											};
										},
										prompt(links, player) {
											return '将一张牌当作【' + get.translation(links[0][2]) + '】使用';
										},
									},
									mod: {
										aiValue(player, card, num) {
											if (card.name != 'wuxie' && !player.countCards('hes')) return;
											var cards = player.getCards('hes', function (card) {
												return card.name == 'wuxie' || ['black', 'red', 'none'].includes(get.color(card));
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
									},//QQQ
									ai: {
										order: 1,
										result: {
											player: 1,
										},
									},
								},
								nowuxie: {
									trigger: {
										player: ['useCard'],
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.card && event.card.name == 'wuxie';
									},
									content() {
										trigger.directHit.addArray(game.players);
									},
								},
							},
						},
						zshy_cangzhuo: {
							mod: {
								ignoredHandcard(card, player) {
									if (get.type(card, 'trick') == 'trick') {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && get.type(card, 'trick') == 'trick') return false;
								},
							},
						},
						zshy_tianyi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							filter(event, player) {
								var x = game.countPlayer();
								if (player.getStat().skill.zshy_tianyi >= x) return false;
								return player.countCards('h');
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('h');
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									player.addMark('zshy_tianyi_Buff', 1, false);
									player.addTempSkill('zshy_tianyi_Buff');
								}
							},
							ai: {
								order() {
									return [5, 7, 9, 11].randomGet();
								},
								result: {
									target(player, target) {
										var hs = target.countCards('h');
										if (hs < 3) return -2;
										return -1;
									},
								},
							},
							subSkill: {
								Buff: {
									marktext: '义',
									charlotte: true,
									intro: {
										content: '本阶段以下属性+#:【杀】的使用次数、【杀】的指定目标数',
									},
									mod: {
										selectTarget(card, player, range) {
											if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) {
												range[1] += player.countMark('zshy_tianyi_Buff');
											}
										},
										cardUsable(card, player, num) {
											if (card.name == 'sha') {
												return (num += player.countMark('zshy_tianyi_Buff'));
											}
										},
										globalFrom(from, to, distance) {
											return -Infinity;
										},
									},
								},
							},
						},
						zshy_hanzhan: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['chooseToCompareAfter', 'compareMultipleAfter'],
								target: ['chooseToCompareAfter', 'compareMultipleAfter'],
							},
							forced: true,
							filter(event, player) {
								if (event.preserve) return false;
								return [event.card1, event.card2].filterInD('od').length;
							},
							content() {
								player.gain([trigger.card1, trigger.card2].filterInD('od'), 'gain2');
							},
							group: ['zshy_hanzhan_Compare1'],
							subSkill: {
								Compare1: {
									audio: 'zshy_hanzhan',
									trigger: {
										global: 'chooseToCompareBegin',
									},
									filter(event, player) {
										if (player == event.player) return true;
										if (event.targets) return event.targets.includes(player);
										return player == event.target;
									},
									check(trigger, player) {
										var num = 0;
										var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
										while (targets.length) {
											var target = targets.shift();
											if (target.getCards('hej').length > 1) num -= get.attitude(player, target);
										}
										return num > 0;
									},
									logTarget(event, player) {
										if (player != event.player) return event.player;
										return event.targets || event.target;
									},
									prompt2(event, player) {
										return '令其改为随机使用1张牌进行拼点';
									},
									content() {
										var targets = player == trigger.player ? (trigger.targets ? trigger.targets.slice(0) : [trigger.target]) : [trigger.player];
										if (!trigger.fixedResult) trigger.fixedResult = {};
										while (targets.length) {
											var target = targets.shift();
											var hs = target.getCards('he');
											if (hs.length) trigger.fixedResult[target.playerid] = hs.randomGet();
										}
									},
								},
							},
						},
						zshy_jianchu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['useCardToPlayered'],
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.target.countDiscardableCards(player, 'he') > 0;
							},
							forced: true,
							content() {
								'step 0';
								player
									.gainPlayerCard(trigger.target, get.prompt('zshy_jianchu', trigger.target))
									.set('ai', function (button) {
										if (!_status.event.att) return 0;
										if (get.position(button.link) == 'e') {
											if (get.subtype(button.link) == 'equip2') return 5 * get.value(button.link);
											return get.value(button.link);
										}
										return 1;
									})
									.set('att', get.attitude(player, trigger.target) <= 0);
								('step 1');
								if (result.links?.length) {
									if (get.type(result.links[0], null, result.links[0].original == 'h' ? player : false) != 'basic') {
										trigger.parent.directHit.add(trigger.target);
										player.addTempSkill('zshy_jianchu_damage');
										player.addMark('zshy_jianchu_damage', 1, false);
									} else if (trigger.cards) {
										player.recover();
										var list = [];
										if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
											if (get.position(i, true) == 'o') list.push(i);
										}
										if (list.length) player.gain(list, 'gain2', 'log');
									}
								}
							},
							subSkill: {
								damage: {
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + player.countMark('zshy_jianchu_damage');
										},
									},
								},
							},
							ai: {
								unequip: true,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'directHit_ai')
										return (
											arg.card.name == 'sha' &&
											arg.target.countCards('e', function (card) {
												return get.value(card) > 1;
											}) > 0
										);
									if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
									return false;
								},
							},
						},
						zshy_PDmashu: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						zshy_shuangxiong: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: { player: 'phaseUseBefore' },
							forced: true,
							filter: (event, player) => player.countCards('he') > 0,
							content() {
								'step 0';
								player
									.chooseToDiscard('he', get.prompt('zshy_shuangxiong'), '弃置一张牌,你本回合内可以将一张与此牌颜色不同的牌当做【决斗】使用')
									.set('ai', function (card) {
										let player = _status.event.player;
										if (!_status.event.goon || player.skipList.includes('phaseUse')) return -get.value(card);
										let color = get.color(card),
											effect = 0,
											cards = player.getCards('hes'),
											sha = false;
										for (var cardx of cards) {
											if (cardx == card || get.color(cardx) == color) continue;
											var cardy = { name: 'juedou' },
												eff1 = player.getUseValue(cardy);
											if (get.position(cardx) == 'e') {
												var eff2 = get.value(cardx);
												if (eff1 > eff2) effect += eff1 - eff2;
												continue;
											} else if (cardx.name == 'sha') {
												if (sha) {
													effect += eff1;
													continue;
												} else sha = true;
											}
											var eff2 = player.getUseValue(cardx, null, true);
											if (eff1 > eff2) effect += eff1 - eff2;
										}
										return effect - get.value(card);
									})
									.set('goon', player.hasValueTarget({ name: 'juedou' }) && !player.hasSkill('zshy_shuangxiong_effect'));
								('step 1');
								if (result.cards?.length) {
									var color = get.color(result.cards[0], player);
									player.markAuto('zshy_shuangxiong_effect', [color]);
									player.addTempSkill('zshy_shuangxiong_effect');
								}
							},
							group: ['zshy_shuangxiong_juedou', 'zshy_shuangxiong_sub1'],
							subSkill: {
								effect: {
									audio: 'zshy_shuangxiong',
									enable: 'chooseToUse',
									viewAs: { name: 'juedou' },
									position: 'hes',
									viewAsFilter(player) {
										return player.hasCard((card) => lib.skill.zshy_shuangxiong_effect.filterCard(card, player), 'hes');
									},
									filterCard(card, player) {
										var color = get.color(card),
											colors = player.getStorage('zshy_shuangxiong_effect');
										for (var i of colors) {
											if (color != i) return true;
										}
										return false;
									},
									prompt() {
										var colors = _status.event.player.getStorage('zshy_shuangxiong_effect');
										var str = '将一张颜色';
										for (var i = 0; i < colors.length; i++) {
											if (i > 0) str += '或';
											str += '不为';
											str += get.translation(colors[i]);
										}
										str += '的牌当做【决斗】使用';
										return str;
									},
									check(card) {
										var player = _status.event.player;
										if (get.position(card) == 'e') {
											var raw = get.value(card);
											var eff = player.getUseValue({ name: 'juedou' });
											return eff - raw;
										}
										var raw = player.getUseValue(card, null, true);
										var eff = player.getUseValue({ name: 'juedou' });
										return eff - raw;
									},
									charlotte: true,
									ai: { order: 7 },
								},
								juedou: {
									audio: 'zshy_shuangxiong',
									trigger: { global: 'phaseJieshuBegin' },
									trigger: {
										global: 'damageAfter',
									},
									forced: true,
									filter(event, player, target) {
										return event.card && event.card.name == 'juedou' && event.source != player;
									},
									content() {
										player.draw('nodelay');
									},
								},
								sub1: {
									trigger: {
										source: 'damageBegin3',
									},
									forced: true,
									silent: true,
									popup: false,
									firstDo: true,
									filter(event, player) {
										return event.card && event.card.name == 'juedou';
									},
									content() {
										trigger.num++;
									},
									ai: {
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'juedou';
										},
									},
								},
							},
						},
						zshy_luanji: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							lose: false,
							delay: false,
							selectCard: 2,
							discard: false,
							position: 'hes',
							multiline: true,
							multitarget: true,
							complexCard: true,
							check(card) {
								return 7 - get.value(card);
							},
							selectTarget: [1, Infinity],
							filterCard(card, player) {
								if (ui.selected.cards.length) {
									return get.color(card) == get.color(ui.selected.cards[0]);
								}
								var cards = player.getCards('hes');
								if (Array.isArray(cards)) for (var i of cards) {
									if (card != i) {
										if (get.color(card) == get.color(i)) return true;
									}
								}
								return false;
							},
							filter(event, player, card) {
								return player.countCards('hes') > 1;
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							prompt(event, player) {
								var str = '出牌阶段,你可以将2张颜色相同的牌当作任意属性【杀】或【万箭齐发】对任意名其他角色使用(以此法使用的【杀】不计入使用次数)';
								return str;
							},
							content() {
								'step 0';
								var list = ['wanjian'];
								list.push(['基本', '', 'sha']);
								for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
								player.chooseButton(['乱击:请选择要使用的牌', [list, 'vcard']], true).set('ai', function (button) {
									var player = _status.event.player;
									for (var i of targets) {
										var effx1 = 0,
											eff1 = get.effect(i, { name: 'wanjian' }, player, player);
										if (eff1 > 0) effx1 = eff1;
									}
									return 0;
									return get.rand(0, 1);
								});
								('step 1');
								if (result.links?.length) {
									var cardx = result.links[0][2];
									var cardn = result.links[0][3];
									var targetsx = targets.sortBySeat();
									player.useCard({ name: cardx, nature: cardn }, cards, targetsx);
								}
							},
							ai: {
								order() {
									return [3, 4, 5, 6, 7].randomGet();
								},
								result: {
									target(player, target) {
										var eff1 = get.effect(target, { name: 'wanjian' }, player, player);
										if (!target.hasSkillTag('notrick')) {
											return -0.1;
										}
										return 0;
									},
								},
							},
							group: 'zshy_luanji_Gain',
							subSkill: {
								Gain: {
									trigger: {
										global: ['respondAfter'],
									},
									forced: true,
									filter(event, player) {
										var target = event.player;
										if (_status.currentPhase != player) return false;
										return target != player && event.cards.filterInD().length;
									},
									logTarget: 'player',
									content() {
										player.gain(trigger.cards.filterInD(), 'gain2');
									},
								},
							},
						},
						zshy_yeyan: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							delay: 0.5,
							visible: true,
							discard: false,
							position: 'hes',
							prepare: 'throw',
							filterCard: true,
							complexCard: true,
							loseTo: 'discardPile',
							selectCard: [1, Infinity],
							filter(event, player) {
								return player.countCards('hes');
							},
							check(card) {
								return 6 - get.value(card);
							},
							prompt: '出牌阶段限1次,你可以重铸任意张牌,可以对一名角色造成1点火焰伤害,最后可以对另一名角色造成2点火焰伤害',
							content() {
								'step 0';
								player.draw(cards.length);
								('step 1');
								player.chooseTarget(get.prompt('zshy_yeyan'), '对一名角色造成1点火焰伤害').set('ai', function (target) {
									var player = _status.event.player;
									return get.damageEffect(target, player, player, 'fire');
								});
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									target.damage('fire');
								}
								('step 3');
								player.chooseTarget(get.prompt('zshy_yeyan'), '对一名角色造成2点火焰伤害').set('ai', function (target) {
									var player = _status.event.player;
									return get.damageEffect(target, player, player, 'fire');
								});
								('step 4');
								if (result.targets?.length) {
									result.targets[0].damage(2, 'fire');
								}
							},
							ai: {
								order() {
									return [1, 2, 3, 4].randomGet();
								},
								result: {
									player: 1,
								},
							},
							group: 'zshy_yeyan_fire',
							subSkill: {
								fire: {
									trigger: {
										global: 'phaseJieshuBegin',
									},
									forced: true,
									filter(event, player) {
										var history = event.player.getHistory('useCard');
										var suits = [];
										var types = [];
										for (var i = 0; i < history.length; i++) {
											var suit = history[i].card.suit;
											if (suit) suits.add(suit);
											types.add(get.type(history[i].card));
										}
										return suits.length >= 4 && types.length >= 3;
									},
									content() {
										'step 0';
										var str = '对一名其他角色造成3点火焰伤害';
										player.chooseTarget(get.prompt('zshy_yeyan'), str, lib.filter.notMe).set('ai', function (target) {
											var player = _status.event.player;
											return get.damageEffect(target, player, player, 'fire');
										});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											target.damage(3, 'fire');
										}
									},
								},
							},
						},
						zshy_qinyin: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: ['loseAfter', 'loseAsyncAfter'],
							},
							forced: true,
							filter(event, player) {
								if (event.type != 'discard') return false;
								return game.hasPlayer((current) => {
									var evt = event.getl(current);
									if (!evt || !evt.cards2 || evt.cards2.filterInD('d').length < 2) return false;
									return true;
								});
							},
							content() {
								'step 0';
								var str = '令任意名角色各回复1点体力';
								player
									.chooseTarget(get.prompt('zshy_qinyin'), str, [1, Infinity], function (card, player, target) {
										return target.isDamaged();
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.recoverEffect(target, player, player);
									});
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets.sortBySeat();
									player.line(targets);
									player.popup('回复体力');
									for (var i of targets) i.recover();
								}
								('step 2');
								var str = '令任意名角色各失去1点体力';
								player
									.chooseTarget(get.prompt('zshy_qinyin'), str, [1, Infinity], function (card, player, target) {
										return !target.isDying();
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.effect(target, { name: 'losehp' }, player, player);
									});
								('step 3');
								if (result.targets?.length) {
									var targets = result.targets.sortBySeat();
									player.line(targets);
									player.popup('失去体力');
									for (var i of targets) i.loseHp();
								}
							},
						},
						zshy_qixing: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'phaseBefore',
								player: ['enterGame', 'recoverEnd'],
								source: ['damageEnd'],
							},
							forced: true,
							filter(event, player, name) {
								if (name == 'recoverEnd' || name == 'damageEnd') return true;
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							content() {
								'step 0';
								if (event.triggername == 'recoverEnd' || event.triggername == 'damageEnd') player.addToExpansion(get.cards(), 'draw').gaintag.add('zshy_qixing');
								else player.addToExpansion(get.cards(7), 'draw').gaintag.add('zshy_qixing');
								('step 1');
								var cards = player.getExpansions('zshy_qixing');
								if (!cards.length || !player.countCards('hes')) {
									event.finish();
									return;
								}
								var next = player.chooseToMove('【七星】:你可以用任意张牌交换等量的「星」');
								next.set('list', [
									[get.translation(player) + '的「星」', cards],
									['手牌和装备区', player.getCards('hes')],
								]);
								next.set('filterMove', function (from, to) {
									return typeof to != 'number';
								});
								next.set('processAI', function (list) {
									var player = _status.event.player,
										cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
											return get.useful(a) - get.useful(b);
										}),
										cards2 = cards.splice(0, player.getExpansions('zshy_qixing').length);
									return [cards2, cards];
								});
								('step 2');
								if (result.bool) {
									var pushs = result.moved[0],
										gains = result.moved[1];
									pushs.removeArray(player.getExpansions('zshy_qixing'));
									gains.removeArray(player.getCards('hes'));
									if (!pushs.length || pushs.length != gains.length) return;
									player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('zshy_qixing');
									game.log(player, '将', pushs, '作为「星」置于武将牌上');
									player.gain(gains, 'gain2');
								}
							},
							marktext: '星',
							intro: {
								markcount: 'expansion',
								mark(dialog, content, player) {
									var content = player.getExpansions('zshy_qixing');
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) {
											dialog.addAuto(content);
										} else {
											return '共有' + get.cnNumber(content.length) + '张星';
										}
									}
								},
								content(content, player) {
									var content = player.getExpansions('zshy_qixing');
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) {
											return get.translation(content);
										}
										return '共有' + get.cnNumber(content.length) + '张星';
									}
								},
							},
							onremove(player, skill) {
								var cards = player.getExpansions(skill);
								if (cards.length) player.loseToDiscardpile(cards);
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.getExpansions('zshy_qixing').length;
								},
							},
							group: 'zshy_qixing_Change',
							subSkill: {
								Change: {
									audio: 'zshy_qixing',
									trigger: {
										global: 'zshy_kuangfeng_DebuffEnd',
										player: ['phaseDrawAfter', 'zshy_kuangfeng_DrawEnd'],
									},
									forced: true,
									filter(event, player, name) {
										if (name != 'phaseDrawAfter') return true;
										return player.getExpansions('zshy_qixing').length && player.countCards('hes');
									},
									content() {
										'step 0';
										if (event.triggername != 'phaseDrawAfter') player.addToExpansion(get.cards(), 'draw').gaintag.add('zshy_qixing');
										('step 1');
										var cards = player.getExpansions('zshy_qixing');
										if (!cards.length || !player.countCards('hes')) {
											event.finish();
											return;
										}
										var next = player.chooseToMove('【七星】:你可以用任意张牌交换等量的「星」');
										next.set('list', [
											[get.translation(player) + '的「星」', cards],
											['手牌和装备区', player.getCards('hes')],
										]);
										next.set('filterMove', function (from, to) {
											return typeof to != 'number';
										});
										next.set('processAI', function (list) {
											var player = _status.event.player,
												cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
													return get.useful(a) - get.useful(b);
												}),
												cards2 = cards.splice(0, player.getExpansions('zshy_qixing').length);
											return [cards2, cards];
										});
										('step 2');
										if (result.bool) {
											var pushs = result.moved[0],
												gains = result.moved[1];
											pushs.removeArray(player.getExpansions('zshy_qixing'));
											gains.removeArray(player.getCards('hes'));
											if (!pushs.length || pushs.length != gains.length) return;
											player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('zshy_qixing');
											game.log(player, '将', pushs, '作为「星」置于武将牌上');
											player.gain(gains, 'gain2');
										}
									},
								},
							},
						},
						zshy_dawu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								return player.getExpansions('zshy_qixing').length;
							},
							content() {
								'step 0';
								var num = Math.min(game.countPlayer(), player.getExpansions('zshy_qixing').length);
								var str = '弃置至多' + num + '枚「星」,令等量名没有「雾」的角色获得1枚「雾」';
								player
									.chooseTarget(get.prompt('zshy_dawu'), str, [1, num], function (card, player, target) {
										return !target.hasSkill('zshy_dawu_Buff');
									})
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										if (att >= 4) {
											if (_status.event.allUse) return att;
											if (target.hp == 1) return att;
											if (target.hp == 2 && target.countCards('he') <= 2) return att * 0.7;
											return 0;
										}
										return -1;
									})
									.set(
										'allUse',
										player.getExpansions('zshy_qixing').length >=
										game.countPlayer(function (current) {
											return get.attitude(player, current) > 4;
										}) *
										2
									);
								('step 1');
								if (result.targets?.length) {
									var length = result.targets.length;
									for (var i = 0; i < length; i++) result.targets[i].addSkill('zshy_dawu_Buff');
									player.chooseCardButton('大雾:请弃置' + length + '枚「星」', length, player.getExpansions('zshy_qixing'), true);
								} else event.finish();
								('step 2');
								player.loseToDiscardpile(result.links);
							},
							ai: {
								combo: 'zshy_qixing',
							},
							group: ['zshy_dawu_Remove', 'zshy_dawu_add'],
							subSkill: {
								Remove: {
									trigger: {
										player: ['phaseUseBegin', 'dieBegin'],
									},
									forced: true,
									popup: false,
									silent: true,
									charlotte: true,
									content() {
										for (var i of game.players) {
											if (i.hasSkill('zshy_dawu_Buff')) i.removeSkill('zshy_dawu_Buff');
										}
									},
								},
								add: {
									audio: 'zshy_dawu',
									trigger: {
										global: ['phaseBefore'],
										player: ['enterGame'],
									},
									forced: true,
									filter(event, player) {
										return event.name != 'phase' || game.phaseNumber == 0;
									},
									content() {
										player.addSkill('zshy_dawu_Buff');
									},
								},
								Buff: {
									audio: 'zshy_dawu',
									trigger: {
										player: 'damageBegin4',
									},
									forced: true,
									charlotte: true,
									content() {
										player.draw(trigger.num);
										if (!trigger.hasNature('thunder')) trigger.cancel();
										else if (trigger.source && trigger.source.isIn()) {
											player.line(trigger.source, 'fire');
											trigger.source.addMark('zshy_kuangfeng_Debuff', trigger.num, false);
											trigger.source.addSkill('zshy_kuangfeng_Debuff');
										}
									},
									mark: true,
									marktext: '雾',
									intro: {
										content: '受到的非雷电伤害无效',
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
								},
							},
						},
						zshy_kuangfeng: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['phaseBegin', 'phaseEnd'],
							},
							forced: true,
							filter(event, player) {
								return player.getExpansions('zshy_qixing').length;
							},
							content() {
								'step 0';
								var num = Math.min(game.countPlayer(), player.getExpansions('zshy_qixing').length);
								var str = '弃置至多' + num + '枚「星」,令等量名没有「雾」的角色获得1枚「风」';
								player
									.chooseTarget(get.prompt('zshy_kuangfeng'), str, [1, num], function (card, player, target) {
										return !target.hasSkill('zshy_dawu_Buff');
									})
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										if (att < 0) {
											if (target.hasSkillTag('nofire') || target.getEquip('baiyin')) return 0;
											if (target.getEquip('tengjia') || target.hp < 2 || num > 6) return 1;
											return 0;
										}
										return 0;
									});
								('step 1');
								if (result.targets?.length) {
									var length = result.targets.length;
									for (var i = 0; i < length; i++) {
										result.targets[i].addMark('zshy_kuangfeng_Debuff', 1, false);
										result.targets[i].addSkill('zshy_kuangfeng_Debuff');
									}
									player.chooseCardButton('狂风:请弃置' + length + '枚「星」', length, player.getExpansions('zshy_qixing'), true);
								} else event.finish();
								('step 2');
								player.loseToDiscardpile(result.links);
							},
							ai: {
								combo: 'zshy_qixing',
							},
							group: 'zshy_kuangfeng_Draw',
							subSkill: {
								Draw: {
									audio: 'zshy_kuangfeng',
									trigger: {
										global: 'damageBegin3',
									},
									forced: true,
									logTarget: 'player',
									filter(event, player) {
										return !event.hasNature('fire') && event.player.hasMark('zshy_kuangfeng_Debuff');
									},
									content() {
										player.draw(trigger.num);
									},
								},
								Debuff: {
									audio: 'zshy_kuangfeng',
									trigger: {
										player: 'damageBegin3',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.hasNature('fire');
									},
									content() {
										'step 0';
										player.removeMark('zshy_kuangfeng_Debuff', 1);
										trigger.num += trigger.num;
										('step 1');
										if (!player.hasMark('zshy_kuangfeng_Debuff')) player.removeSkill('zshy_kuangfeng_Debuff');
									},
									marktext: '风',
									intro: {
										name2: '风',
										content: '受到的火焰伤害翻倍',
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'fireDamage')) return 1.5;
											},
										},
									},
								},
							},
						},
						zshy_duanliang: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'chooseToUse',
							filterCard(card, player) {
								return get.color(card) == 'black';
							},
							filter(event, player) {
								return player.hasCard((card) => get.color(card) == 'black', 'hes');
							},
							position: 'hes',
							viewAs: { name: 'bingliang' },
							prompt: '将一张黑色牌当做兵粮寸断使用',
							check(card) {
								return 6 - get.value(card);
							},
							mod: {
								targetInRange(card, player, target) {
									if (card.name == 'bingliang') return true;
								},
							},
							ai: {
								order: 9,
							},
							group: ['zshy_duanliang_skip'],
							subSkill: {
								skip: {
									audio: 'zshy_duanliang',
									trigger: {
										global: ['phaseJudgeBegin'],
									},
									filter(event, player) {
										return event.player.isIn() && event.player != player && event.player.countCards('j');
									},
									check(event, player) {
										return get.attitude(event.player, player) < 0;
									},
									prompt: '是否获得其判定区一张牌,令其跳过摸牌阶段？',
									content() {
										player.gainPlayerCard(trigger.player, 'j', true);
										trigger.player.skip('phaseDraw');
									},
								},
							},
						},
						zshy_jiezi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: ['phaseDrawSkipped', 'phaseDrawCancelled'],
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('zshy_jiezi'), '你可选择一名角色,若其没有「辎」,则获得1枚「辎」并摸一张牌,否则其摸两张牌.').set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									return att;
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									if (!target.hasMark('zshy_jiezi')) {
										target.addMark('zshy_jiezi', 1);
										target.draw();
									} else target.draw(2);
								}
							},
							marktext: '辎',
							intro: {
								name2: '辎',
								content: 'mark',
							},
							group: 'zshy_jiezi_extra',
							subSkill: {
								extra: {
									audio: 'zshy_jiezi',
									trigger: { global: 'phaseDrawAfter' },
									forced: true,
									filter(event, player) {
										return event.player.hasMark('zshy_jiezi');
									},
									logTarget: 'player',
									content() {
										const evt = trigger.getParent('phase', true, true);
										if (evt && evt.phaseList) evt.phaseList.splice(evt.num + 1, 0, 'phaseDraw|zshy_jiezi');
										trigger.player.removeMark('zshy_jiezi', trigger.player.countMark('zshy_jiezi'));
									},
								},
							},
						},
						zshy_fangzhu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							audioname: ['zshy_ZshensimayiSHZL'],
							trigger: {
								player: ['phaseBegin', 'damageEnd'],
							},
							forced: true,
							content() {
								'step 0';
								event.count = trigger.name == 'damage' ? trigger.num : 1;
								event.num = player.getDamagedHp() + 1;
								('step 1');
								event.count--;
								('step 2');
								var list = [],
									choiceList = ['令一名角色翻面并摸' + event.num + '张牌', '令一名角色随机弃置' + event.num + '张牌并失去1点体力', '令一名角色非状态技失效直到其回合结束', '令一名角色本回合不能使用或打出手牌'];
								list.push('选项一', '选项二');
								if (
									game.hasPlayer(function (current) {
										return current != player && !current.hasSkill('baiban');
									})
								)
									list.push('选项三');
								else choiceList[2] = "<span style='opacity:0.5'>" + choiceList[2] + '</span>';
								if (
									game.hasPlayer(function (current) {
										return current != player && !current.hasSkill('zshy_bancard');
									})
								)
									list.push('选项四');
								else choiceList[3] = "<span style='opacity:0.5'>" + choiceList[3] + '</span>';
								player
									.chooseControl(list, 'cancel2')
									.set('choiceList', choiceList)
									.set('ai', function () {
										var player = _status.event.player;
										if (
											game.hasPlayer(function (current) {
												return get.attitude(player, current) > 0 && !current.hasSkillTag('noturn') && current.isTurnedOver();
											})
										)
											return '选项一';
										if (list.includes('选项四')) {
											if (
												game.hasPlayer(function (current) {
													return get.attitude(player, current) < 0 && current.countCards('h') > 3;
												}) &&
												Math.random() < 0.8
											)
												return '选项四';
										}
										if (list.includes('选项三')) {
											if (
												game.hasPlayer(function (current) {
													return get.attitude(player, current) < 0;
												}) &&
												Math.random() < 0.7
											)
												return '选项三';
										}
										if (
											game.hasPlayer(function (current) {
												return get.effect(current, { name: 'losehp' }, player, player);
											})
										)
											return '选项二';
										return 'cancel2';
									})
									.set('prompt', get.prompt('zshy_fangzhu'));
								('step 3');
								if (result.control != 'cancel2') {
									event.control = result.control;
									if (event.control == '选项一') {
										player.chooseTarget(get.prompt('zshy_fangzhu'), '令一名角色翻面并摸' + event.num + '张牌').set('ai', function (target) {
											var player = _status.event.player;
											var att = get.attitude(player, target);
											if (att > 0) {
												if (target.isTurnedOver() && !target.hasSkillTag('noturn')) return 1;
											}
											if (att < 0) {
												if (!target.isTurnedOver() && !target.hasSkillTag('noturn')) return 1;
											}
											return 0;
										});
									} else if (event.control == '选项二') {
										player.chooseTarget(get.prompt('zshy_fangzhu'), '令一名角色随机弃置' + event.num + '张牌并失去1点体力').set('ai', function (target) {
											var player = _status.event.player;
											if (get.attitude(player, target) >= 0) return 0;
											return get.effect(target, { name: 'losehp' }, player, player);
										});
									} else if (event.control == '选项三') {
										player
											.chooseTarget(
												get.prompt('zshy_fangzhu'),
												function (card, player, target) {
													return target != player && !target.hasSkill('baiban');
												},
												'令一名角色非状态技失效直到其回合结束'
											)
											.set('ai', function (target) {
												var player = _status.event.player;
												return -get.attitude(player, target);
											});
									} else {
										player
											.chooseTarget(
												get.prompt('zshy_fangzhu'),
												function (card, player, target) {
													return target != player && !target.hasSkill('fengyin');
												},
												'令一名角色本回合不能使用或打出手牌'
											)
											.set('ai', function (target) {
												var player = _status.event.player;
												return -get.attitude(player, target) * target.countCards('h');
											});
									}
								} else event.finish();
								('step 4');
								if (result.targets?.length) {
									var target = result.targets[0];
									if (event.control == '选项一') {
										target.turnOver();
										target.draw(event.num);
									} else if (event.control == '选项二') {
										target.randomDiscard(event.num, 'he', true);
										target.loseHp();
									} else if (event.control == '选项三') {
										target.addTempSkill('baiban', { player: 'phaseEnd' });
									} else target.addTempSkill('zshy_bancard');
								} else event.goto(2);
								('step 5');
								if (event.count > 0) event.goto(1);
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (target.hp < 2 || !target.hasFriend()) return;
											var hastarget = false;
											var turnfriend = false;
											var players = game.filterPlayer();
											for (var i of players) {
												if (get.attitude(target, i) < 0 && !i.isTurnedOver()) {
													hastarget = true;
												}
												if (get.attitude(target, i) > 0 && i.isTurnedOver()) {
													hastarget = true;
													turnfriend = true;
												}
											}
											if (get.attitude(player, target) > 0 && !hastarget) return;
											if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
											if (target.hp > 1) return [1, 0.6];
										}
									},
								},
							},
						},
						zshy_xingshang: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'dieBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player != player;
							},
							logTarget: 'player',
							content() {
								'step 0';
								var list = [];
								var skills = trigger.player.getOriginalSkills();
								if (skills.length) {
									for (var skill of skills) {
										list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
									}
									var next = player.chooseButton(['行殇:请选择要获得的1个技能', [list, 'textbutton']]);
									next.set('forced', false);
									next.set('selectButton', 1);
									next.set('ai', function (button) {
										return Math.random();
									});
									next.set('skills', skills);
								} else event.goto(3);
								('step 1');
								if (result.links?.length) {
									var skill = result.links[0];
									player.addSkillLog(skill);
								}
								('step 2');
								var target = trigger.player,
									list = [],
									choiceList = ['回复1点体力', '获得' + get.translation(target) + '区域内所有牌', '依次执行前2项'];
								if (!player.isHealthy()) list.push('选项一');
								else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
								if (target.countCards('hej')) list.push('选项二');
								else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
								if (list.includes('选项二') && list.includes('选项一')) list.push('选项三');
								else choiceList[2] = '<span style="opacity:0.5">' + choiceList[2] + '</span>';
								if (list.length) {
									player
										.chooseControl(list, 'cancel2')
										.set('choiceList', choiceList)
										.set('ai', function () {
											var player = _status.event.player;
											var att = get.attitude(player, target);
											if (att >= 0) {
												if (list.includes('选项二')) return '选项二';
											}
											if (att < 0) {
												if (list.includes('选项三')) return '选项三';
												if (list.includes('选项一')) return '选项一';
											}
											return 'cancel2';
										})
										.set('prompt', get.prompt('zshy_xingshang'));
								} else event.finish();
								('step 4');
								if (result.control != 'cancel2') {
									var target = trigger.player;
									player.line(target, 'thunder');
									if (result.control == '选项一') player.recover();
									else if (result.control == '选项二') {
										player.gain(target.getCards('hej'), target, 'giveAuto');
									} else {
										player.recover();
										player.gain(target.getCards('hej'), target, 'giveAuto');
									}
								}
							},
						},
						zshy_songwei: {
							audio: 'ext:诸神寰宇/audio/character:2',
							zhuSkill: true,
							group: 'zshy_songwei_other',
							subSkill: {
								other: {
									audio: 'zshy_songwei',
									forceaudio: true,
									trigger: { global: 'judgeEnd' },
									sourceSkill: 'zshy_songwei',
									filter(event, player) {
										if (event.player == player || event.player.group != 'wei') return false;
										if (event.result.color != 'black') return false;
										return player.hasZhuSkill('zshy_songwei', event.player);
									},
									async cost(event, trigger, player) {
										event.result = await trigger.player
											.chooseBool('是否发动【颂威】,令' + get.translation(player) + '选择回复1点体力或摸两张牌？')
											.set('choice', get.attitude(trigger.player, player) > 0)
											.forResult();
									},
									async content(event, trigger, player) {
										trigger.player.line(player, 'green');
										player.chooseDrawRecover(2, true);
									},
								},
							},
						},
						zshy_yinghun: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['phaseBegin', 'phaseEnd'],
							},
							forced: true,
							content() {
								'step 0';
								event.num = player.getDamagedHp() + 1;
								('step 1');
								var list = [],
									choiceList = ['令一名角色摸' + event.num + '张牌', '令一名角色随机弃置' + event.num + '张牌'];
								list.push('选项一');
								list.push('选项二');
								if (list.length) {
									player
										.chooseControl(list, 'cancel2')
										.set('choiceList', choiceList)
										.set('ai', function () {
											if (
												game.hasPlayer(function (current) {
													return get.attitude(player, current) > 0 && (!current.hujia || current.countCards('h') < 5);
												}) &&
												list.includes('选项一')
											)
												return '选项一';
											if (
												game.hasPlayer(function (current) {
													return get.attitude(player, current) < 0 && (7 > current.countCards('he') > 1 || get.effect(current, { name: 'losehp' }, player, player));
												}) &&
												list.includes('选项二')
											)
												return '选项二';
											return 'cancel2';
										})
										.set('prompt', get.prompt('zshy_yinghun'));
								} else event.finish();
								('step 2');
								if (result.control != 'cancel2') {
									event.control = result.control;
									if (event.control == '选项一') {
										var str1 = '令一名角色摸' + event.num + '张牌';
										player.chooseTarget(get.prompt('zshy_yinghun'), str1).set('ai', function (target) {
											var player = _status.event.player;
											var att = get.attitude(player, target);
											if (!target.hujia || target.countCards('h') < 5) {
												return att * 2;
											}
											return att;
										});
									} else if (event.control == '选项二') {
										var str2 = '令一名角色随机弃置' + event.num + '张牌';
										player.chooseTarget(get.prompt('zshy_yinghun'), str2).set('ai', function (target) {
											var player = _status.event.player;
											var att = get.attitude(player, target);
											return -att;
										});
									}
								} else event.finish();
								('step 3');
								if (result.targets?.length) {
									var target = result.targets[0];
									if (event.control == '选项一') {
										target.draw(event.num);
									} else if (event.control == '选项二') {
										target.randomDiscard(event.num, 'he', true);
									}
								} else event.goto(1);
								('step 4');
								player.draw();
								if (player.countCards('h')) {
									player.chooseToUse({
										filterCard(card, player) {
											if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										prompt: '英魂:是否使用一张手牌？',
									});
								} else event.finish();
							},
						},
						zshy_wulie: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							filter(event, player) {
								return (
									game.hasPlayer(function (current) {
										return !current.hasSkill('zshy_wulie_Buff');
									}) && player.hp > 0
								);
							},
							filterTarget(card, player, target) {
								return !target.hasSkill('zshy_wulie_Buff');
							},
							prompt: '出牌阶段,你可以失去1点体力并令一名没有「烈」的角色获得「烈」,你摸1张牌并获得1点护甲',
							content() {
								'step 0';
								player.loseHp();
								target.addSkill('zshy_wulie_Buff');
								('step 1');
								player.draw();
								player.changeHujia();
							},
							group: ['zshy_wulie_damage'],
							subSkill: {
								Buff: {
									audio: 'zshy_wulie',
									trigger: {
										player: 'damageBegin4',
									},
									forced: true,
									charlotte: true,
									filter(event, player, name) {
										return event.num >= player.hp;
									},
									content() {
										trigger.cancel();
										player.removeSkill('zshy_wulie_Buff');
									},
									ai: {
										damageBonus: true,
									},
									mark: true,
									marktext: '烈',
									intro: {
										content: '获得英魂庇佑',
									},
								},
								damage: {
									audio: 'zshy_wulie',
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									charlotte: true,
									filter(event, player, target, card) {
										return !event.player.countCards('h');
									},
									content() {
										trigger.num++;
									},
								},
							},
							ai: {
								order() {
									return [5, 6, 7, 8].randomGet();
								},
								result: {
									target(player, target) {
										if (player.hp < 2 && !player.canSave(player)) return 0;
										return 1;
									},
								},
							},
						},
						zshy_jiuchi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'chooseToUse',
							filterCard(card, player) {
								return card.suit == 'spade';
							},
							viewAs: { name: 'jiu' },
							position: 'he',
							viewAsFilter(player) {
								return player.hasCard((card) => card.suit == 'spade', 'he');
							},
							prompt: '将一张♠️️牌当酒使用',
							check(cardx, player) {
								if (player && player == cardx.player) return true;
								if (_status.event.type == 'dying') return 1;
								var player = _status.event.player;
								var shas = player.getCards('he', function (card) {
									return card != cardx && card.name == 'sha';
								});
								if (!shas.length) return -1;
								if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('he', 'zhuge'))) {
									return 0;
								}
								shas.sort(function (a, b) {
									return get.order(b) - get.order(a);
								});
								var card = false;
								if (shas.length) {
									for (var i = 0; i < shas.length; i++) {
										if (shas[i] != cardx && lib.filter.filterCard(shas[i], player)) {
											card = shas[i];
											break;
										}
									}
								}
								if (card) {
									if (
										game.hasPlayer(function (current) {
											return (
												get.attitude(player, current) < 0 &&
												!current.hasShan() &&
												current.hp + current.countCards('he', { name: ['tao', 'jiu'] }) > 1 + (player.storage.jiu || 0) &&
												player.canUse(card, current, true, true) &&
												!current.hasSkillTag('filterDamage', null, {
													player: player,
													card: card,
													jiu: true,
												}) &&
												get.effect(current, card, player) > 0
											);
										})
									) {
										return 4 - get.value(cardx);
									}
								}
								return -1;
							},
							ai: {
								threaten: 1.5,
							},
							mod: {
								ignoredHandcard(card, player) {
									if (card.suit == 'spade') return true;
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.suit == 'spade') return false;
								},
							},
							trigger: { source: 'damageEnd' },
							forced: true,
							filter(event, player) {
								if (event.name == 'chooseToUse') return player.hasCard((card) => card.suit == 'spade', 'he');
								return event.card && event.card.name == 'sha' && event.getParent(2).jiu == true && !player.hasSkill('zshy_benghuai_ban');
							},
							content() {
								player.addTempSkill('zshy_benghuai_ban');
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'jiu') return Infinity;
								},
							},
						},
						zshy_roulin: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: { player: 'useCardToPlayered' },
							forced: true,
							filter(event, player, target) {
								return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target) && event.target.hasSex('female');
							},
							logTarget: 'target',
							async content(event, trigger, player) {
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
									if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1) return false;
								},
							},
							group: ['zshy_roulin_gain'],
							subSkill: {
								gain: {
									audio: 'zshy_roulin',
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									lastDo: true,
									filter(event, player, target) {
										return event.player.hasSex('female');
									},
									content() {
										'step 0';
										event.count = Math.min(trigger.num, 9);
										('step 1');
										event.count--;
										player.gainMaxHp();
										player.recover();
										trigger.player.loseMaxHp();
										('step 2');
										if (event.count > 0) {
											event.goto(1);
										}
									},
								},
							},
						},
						zshy_benghuai: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['phaseJieshuBegin'],
							},
							forced: true,
							filter(event, player, target) {
								return !player.isMinHp();
							},
							content() {
								'step 0';
								if (player.hasSkill('zshy_benghuai_ban')) {
									player.draw(2);
									event.finish();
								} else return;
								('step 1');
								var str1 = '失去1点体力',
									str2 = '减少1点体力上限';
								player
									.chooseControl(str1, str2)
									.set('prompt', '崩坏:失去1点体力或减1点体力上限')
									.set('ai', function (event, player) {
										if (player.hp == player.maxHp) return str1;
										if (player.hp < player.maxHp - 1 || player.hp <= 2) return str2;
										return str1;
									});
								('step 2');
								if (result.control == '失去1点体力') {
									player.loseHp();
									player.draw();
								} else {
									player.loseMaxHp(true);
									player.draw();
								}
							},
							ai: {
								threaten: 0.5,
								neg: true,
							},
							subSkill: {
								ban: {
									mark: true,
									marktext: '酒池',
									intro: {
										name2: '酒池',
										content: '本回合〖崩坏〗效果已转变',
									},
								},
							},
						},
						zshy_baonue: {
							audio: 'ext:诸神寰宇/audio/character:2',
							zhuSkill: true,
							trigger: {
								global: 'damageSource',
							},
							filter(event, player) {
								if (player == event.source || !event.source || event.source.group != 'qun') return false;
								return player.hasZhuSkill('zshy_baonue', event.source);
							},
							forced: true,
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								event.count--;
								player.chooseBool('是否发动【暴虐】？').set('choice', get.attitude(player, player) > 0);
								('step 2');
								if (result.bool) {
									player
										.judge(function (card) {
											if (card.suit == 'spade') return 4;
											return 0;
										})
										.set('callback', function () {
											if (event.judgeResult.suit == 'spade') {
												player.recover();
												if (get.position(event.judgeResult.card, true) == 'o') player.gain(event.judgeResult.card, 'gain2', 'log');
											}
										}).judge2 = function (result) {
											return result.bool ? true : false;
										};
								} else {
									event.finish();
								}
								('step 3');
								if (event.count && lib.skill.zshy_baonue.filter(trigger, player)) event.goto(1);
							},
						},
						zshy_juxiang: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								target: 'useCardToTargeted',
							},
							forced: true,
							filter(event, player) {
								if (event.card.name != 'nanman') return false;
								return event.targets;
							},
							content() {
								trigger.parent.excluded.add(player);
								player.draw();
								game.log(player, '令', trigger.card, '对其无效');
							},
							ai: {
								effect: {
									target(card) {
										if (card.name != 'nanman') return;
									},
								},
							},
							group: ['zshy_juxiang_Gain', 'zshy_juxiang_gain'],
							subSkill: {
								Gain: {
									audio: 'zshy_juxiang',
									trigger: {
										global: 'useCardAfter',
									},
									forced: true,
									filter(event, player) {
										if (event.card.name != 'nanman') return false;
										return event.player != player && event.cards.someInD();
									},
									content() {
										player.gain(trigger.cards.filterInD(), 'gain2');
									},
								},
								gain: {
									trigger: {
										player: ['phaseBegin'],
									},
									forced: true,
									content() {
										var card = get.cardPile(function (card) {
											return card.name == 'nanman';
										});
										player.gain(card, 'gain2').gaintag.add('zshy_juxiang');
									},
								},
							},
						},
						zshy_lieren: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								source: 'damageAfter',
							},
							check(event, player) {
								var hs = player.getCards('h');
								for (var i = 0; i < hs.length; i++) {
									var val = get.value(hs[0]);
									if (hs[i].number < 9 && val > 6) return false;
								}
								var target = lib.skill.zshy_lieren.logTarget(event, player);
								var eff = get.damageEffect(target, player, player);
								var att = get.attitude(player, target);
								return att < 0 && eff > 0;
							},
							filter(event, player) {
								var target = lib.skill.zshy_lieren.logTarget(event, player);
								return target && target.isIn() && player.canCompare(target);
							},
							logTarget(event, player) {
								return player == event.player ? event.source : event.player;
							},
							prompt2(event, player) {
								var str = '与',
									target = lib.skill.zshy_lieren.logTarget(event, player);
								str += get.translation(target) + '拼点,若其没赢,则你获得其1张牌并对其造成1点伤害';
								return str;
							},
							content() {
								'step 0';
								var target = lib.skill.zshy_lieren.logTarget(trigger, player);
								(event.target = target), player.chooseToCompare(target);
								('step 1');
								if (result.winner != target) {
									player.line(target);
									if (target.countGainableCards(player, 'he')) {
										player.gainPlayerCard(target, true, 'he');
									}
									target.damage();
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						zshy_changbiao: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							lose: false,
							delay: false,
							discard: false,
							position: 'hes',
							multiline: true,
							filterCard: true,
							multitarget: true,
							selectCard: [1, Infinity],
							selectTarget() {
								return [1, _status.event.player.hp];
							},
							filter(event, player) {
								return player.countCards('hes');
							},
							filterTarget(card, player, target) {
								return player.canUse('sha', target, false);
							},
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.discard(cards, true);
								player.addMark('zshy_changbiao_Draw', cards.length, false);
								player.addTempSkill('zshy_changbiao_Draw', 'phaseAfter');
								('step 1');
								var targets = targets.sortBySeat();
								player.useCard({ name: 'sha', nature: 'stab' }, targets, false);
							},
							ai: {
								order() {
									return [3, 5, 7].randomGet();
								},
								result: {
									target(player, target) {
										return get.effect(target, { name: 'sha', nature: 'stab' }, player, target);
									},
								},
							},
							subSkill: {
								Draw: {
									audio: 'zshy_changbiao',
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									charlotte: true,
									marktext: '标',
									intro: {
										name2: '标',
										content: '回合结束时摸#张牌',
									},
									filter(event, player) {
										return player.hasMark('zshy_changbiao_Draw');
									},
									content() {
										player.draw(player.countMark('zshy_changbiao_Draw'));
									},
								},
							},
						},
						zshy_huoshou: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: ['useCard'],
							},
							forced: true,
							filter(event, player, card) {
								return event.card && event.card.name == 'nanman' && event.player != player;
							},
							content() {
								player.draw();
								trigger.customArgs.default.customSource = player;
							},
							group: ['zshy_huoshou_cancel'],
							subSkill: {
								cancel: {
									audio: 'zshy_huoshou',
									trigger: { target: 'useCardToBefore' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'nanman';
									},
									content() {
										trigger.cancel();
									},
								},
							},
						},
						zshy_zaiqi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
							},
							forced: true,
							filter(event, player) {
								return player.hp < 7;
							},
							content() {
								event.cards = get.cards(7 - player.hp);
								game.cardsGotoOrdering(event.cards);
								player.showCards(event.cards);
								let num = 0;
								event.cards = event.cards.filter((i) => {
									if (i.suit == 'heart') {
										num++;
										return false;
									}
									return true;
								});
								if (num > 0) player.recover(num);
								if (event.cards.length) {
									player.gain(event.cards, 'gain2');
								}
							},
						},
						zshy_wansha: {
							audio: 'ext:诸神寰宇/audio/character:2',
							audioname: ['zshy_ZshensimayiSHZL'],
							trigger: {
								global: 'dyingBegin',
							},
							forced: true,
							content() {
								'step 0';
								var str = '令任意名符合条件的其他角色本回合非状态技失效且不能使用带有<回复>标签的基本牌';
								player
									.chooseTarget(get.prompt('zshy_wansha'), str, [1, Infinity], function (card, player, target) {
										if (target == trigger.player || target == player) return false;
										return !target.hasSkill('baiban') || !target.hasSkill('zshy_wansha_Debuff');
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets.sortBySeat();
									for (var i of targets) {
										i.addTempSkill('baiban');
										i.addTempSkill('zshy_wansha_Debuff');
									}
								}
							},
							ai: {
								expose: 0.5,
								threaten: 3.5,
							},
							subSkill: {
								Debuff: {
									mark: true,
									marktext: '杀',
									charlotte: true,
									intro: {
										content: '不能使用带有<回复>标签的基本牌',
									},
									mod: {
										cardEnabled(card, player) {
											if (get.tag(card, 'recover') && get.type(card) == 'basic') return false;
										},
										cardSavable(card, player) {
											if (get.tag(card, 'recover') && get.type(card) == 'basic') return false;
										},
									},
								},
							},
						},
						zshy_luanwu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							selectTarget: -1,
							multiline: true,
							content() {
								'step 0';
								target
									.chooseToUse(
										'乱武:使用一张杀或失去1点体力',
										function (card) {
											if (card.name != 'sha') return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										function (card, player, target) {
											if (player == target) return false;
											var dist = get.distance(player, target);
											if (dist > 1) {
												if (
													game.hasPlayer(function (current) {
														return current != player && get.distance(player, current) < dist;
													})
												) {
													return false;
												}
											}
											return lib.filter.filterTarget.apply(this, arguments);
										}
									)
									.set('ai2', function () {
										return get.effect_use.apply(this, arguments) - _status.event.effect;
									})
									.set('effect', get.effect(target, { name: 'losehp' }, target, target));
								('step 1');
								if (result.bool == false) {
									target.loseHp();
								}
							},
							contentAfter() {
								player.chooseUseTarget('chuqibuyi', '是否使用一张【出其不意】？', false, 'nodistance');
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
										for (var i of players) {
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
						zshy_weimu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							mod: {
								targetEnabled(card) {
									if (get.type2(card) == 'trick') return false;
								},
							},
							trigger: { player: 'damageBegin4' },
							forced: true,
							filter(event, player) {
								return player == _status.currentPhase;
							},
							content() {
								trigger.cancel();
								var num = trigger.num;
								player.draw(2 * num);
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (target == _status.currentPhase && get.tag(card, 'damage')) return [0, 2, 0, 0];
									},
								},
							},
							group: 'zshy_weimu_log',
							subSkill: {
								log: {
									audio: 'zshy_weimu',
									trigger: { global: 'useCard1' },
									forced: true,
									firstDo: true,
									filter(event, player) {
										if (event.player == player) return false;
										if (get.color(event.card) != 'black' || get.type(event.card) != 'trick') return false;
										var info = lib.card[event.card.name];
										return info && info.selectTarget && info.selectTarget == -1 && !info.toself;
									},
									content() { },
								},
							},
						},
						zshy_haoshi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'phaseDrawBegin2',
							},
							forced: true,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num += game.countPlayer();
								player.addTempSkill('zshy_haoshi_give', 'phaseDrawAfter');
							},
							ai: {
								order: 9,
							},
							subSkill: {
								give: {
									trigger: {
										player: 'phaseDrawEnd',
									},
									forced: true,
									charlotte: true,
									popup: false,
									filter(event, player) {
										return player.countCards('h') > 0;
									},
									content() {
										'step 0';
										var targets = game.filterPlayer(function (target) {
											return target != player;
										});
										player.chooseCardTarget({
											position: 'h',
											filterCard: true,
											filterTarget(card, player, target) {
												return _status.event.targets.includes(target);
											},
											targets: targets,
											selectTarget: [0, 1],
											selectCard: [0, Infinity],
											prompt: '可以将任意张手牌交给一名其他角色',
											forced: true,
											ai1(card) {
												var goon = false,
													player = _status.event.player;
												for (var i of _status.event.targets) {
													if (get.attitude(i, player) > 0 && get.attitude(player, i) > 0) goon = true;
													break;
												}
												if (goon) {
													if (
														!player.hasValueTarget(card) ||
														(card.name == 'sha' &&
															player.countCards('h', function (cardx) {
																return cardx.name == 'sha' && !ui.selected.cards.includes(cardx);
															}) > player.getCardUsable('sha'))
													)
														return 2;
													return Math.max(2, get.value(card) / 4);
												}
												return 1 / Math.max(1, get.value(card));
											},
											ai2(target) {
												return get.attitude(_status.event.player, target);
											},
										});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											player.line(target, 'green');
											player.give(result.cards, target);
											player.markAuto('zshy_haoshi_help', [target]);
											player.addTempSkill('zshy_haoshi_help', { player: 'phaseBeginStart' });
										}
									},
								},
								help: {
									trigger: { target: 'useCardToTargeted' },
									forced: true,
									charlotte: true,
									filter(event, player) {
										if (!player.storage.zshy_haoshi_help || !player.storage.zshy_haoshi_help.length) return false;
										if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
										for (var i of player.storage.zshy_haoshi_help) {
											if (i.countCards('h') > 0) return true;
										}
										return false;
									},
									content() {
										'step 0';
										if (!event.targets) event.targets = player.storage.zshy_haoshi_help.slice(0).sortBySeat();
										event.target = event.targets.shift();
										event.target
											.chooseCard('h', '好施:是否将一张手牌交给' + get.translation(player) + '？')
											.set('ai', function (card) {
												var player = _status.event.player,
													target = _status.event.getTrigger().player;
												if (!_status.event.goon) {
													if (get.value(card, player) < 0 || get.value(card, target) < 0) return 1;
													return 0;
												}
												var cardx = _status.event.getTrigger().card;
												if (card.name == 'shan' && get.tag(cardx, 'respondShan') && target.countCards('h', 'shan') < player.countCards('h', 'shan')) return 2;
												if (card.name == 'sha' && (cardx.name == 'juedou' || (get.tag(card, 'respondSha') && target.countCards('h', 'sha') < player.countCards('h', 'sha')))) return 2;
												if (get.value(card, target) > get.value(card, player) || target.getUseValue(card) > player.getUseValue(card)) return 1;
												if (player.hasSkillTag('noh')) return 0.5 / Math.max(1, get.value(card, player));
												return 0;
											})
											.set('goon', get.attitude(event.target, player) > 0);
										('step 1');
										if (result.cards?.length) {
											target.give(result.cards, player);
										}
										if (targets.length) event.goto(0);
									},
								},
							},
						},
						zshy_dimeng: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return game.hasPlayer((current) => lib.skill.zshy_dimeng.filterTarget(null, player, current));
							},
							selectTarget: 2,
							complexTarget: true,
							filterTarget(card, player, target) {
								if (target == player) return false;
								if (!ui.selected.targets.length) {
									return game.hasPlayer(function (current) {
										if (current == player || current == target) return false;
										return true;
									});
								}
								return true;
							},
							multitarget: true,
							multiline: true,
							content() {
								targets[0].swapHandcards(targets[1]);
								player.markAuto('zshy_dimeng', [targets]);
								for (let targets of player.getStorage('zshy_dimeng')) {
									if (targets.length < 2) continue;
									var num = Math.abs(targets[0].countCards('h') - targets[1].countCards('h'));
									if (num > 0 && player.countCards('he') > 0) player.addMark('zshy_dimeng', num, false);
								}
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.countMark('zshy_dimeng');
								},
							},
							marktext: '缔盟',
							intro: {
								content: '本回合手牌上限+#',
							},
							ai: {
								threaten: 4.5,
								pretao: true,
								nokeep: true,
								order: 1,
								expose: 0.2,
								result: {
									target(player, target) {
										if (!ui.selected.targets.length) return -Math.sqrt(target.countCards('h'));
										return -delval * (h1.length - h2.length);
									},
								},
							},
							group: ['zshy_dimeng_end'],
							subSkill: {
								end: {
									trigger: { player: 'phaseEnd' },
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player.countMark('zshy_dimeng');
									},
									content() {
										var num = player.countMark('zshy_dimeng');
										player.removeMark('zshy_dimeng', num);
									},
								},
							},
						},
						zshy_kuangbao: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								source: 'damageEnd',
								player: 'damageAfter',
								global: 'phaseBegin',
							},
							forced: true,
							content() {
								var num = trigger.num,
									mark = player.countMark('zshy_kuangbao');
								if (player.hasSkill('zshy_wushuang')) num++;
								if (event.triggername == 'phaseBegin') {
									if (mark > player.maxHp) {
										var num = player.maxHp;
										player.removeMark('zshy_kuangbao', num);
										player.gainMaxHp(), player.recover();
									} else {
										player.draw();
										player.addMark('zshy_kuangbao', 1);
									}
								} else player.addMark('zshy_kuangbao', num);
							},
							marktext: '怒',
							markimage: 'extension/诸神寰宇/other/Files/Mark/zshy_kuangbao.png',
							intro: {
								name2: '怒',
								content: 'mark',
							},
							ai: {
								maixie: true,
								maixie_hp: true,
							},
						},
						zshy_wuqian: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							filter(event, player) {
								return (
									player.countMark('zshy_kuangbao') > 1 &&
									game.hasPlayer(function (current) {
										return current != player && !player.getStorage('zshy_wuqian').includes(current);
									})
								);
							},
							filterTarget(card, player, target) {
								return target != player && !player.getStorage('zshy_wuqian').includes(target);
							},
							content() {
								player.removeMark('zshy_kuangbao', 2);
								player.draw(2);
								target.damage();
								player.markAuto('zshy_wuqian', [target]);
								target.addTempSkill('baiban');
								target.addTempSkill('fengyin');
							},
							ai: {
								order() {
									return [10, 11, 12].randomGet();
								},
								result: {
									target: -1,
								},
							},
							intro: {
								content: '本阶段已对$发动过〖无前〗',
							},
							group: ['zshy_wuqian_Delete'],
							subSkill: {
								Delete: {
									trigger: {
										global: 'phaseUseAfter',
									},
									popup: false,
									silent: true,
									forced: true,
									firstDo: true,
									content() {
										player.unmarkSkill('zshy_wuqian');
									},
								},
							},
						},
						zshy_wumou: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) != 'basic';
							},
							content() {
								player.addMark('zshy_kuangbao', 1);
								player.draw();
							},
							mod: {
								cardname(card, player) {
									if (!['basic', 'equip'].includes(lib.card[card.name].type)) return 'juedou';
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return (num += player.getDamagedHp());
								},
							},
							ai: {
								respondSha: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondSha') && current < 0) return 0.6;
									},
								},
							},
						},
						zshy_shenfen: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countMark('zshy_kuangbao') >= game.countPlayer() - 1;
							},
							content() {
								'step 0';
								player.removeMark('zshy_kuangbao', game.countPlayer() - 1);
								event.targets = game.filterPlayer();
								event.count = event.targets.length - 1;
								event.targets.remove(player);
								event.targets.sort(lib.sort.seat);
								player.line(event.targets, 'green');
								event.targets2 = event.targets.slice(0);
								event.targets3 = event.targets.slice(0);
								('step 1');
								if (event.targets2.length) {
									event.targets2.shift().damage('nocard');
									event.redo();
								}
								('step 2');
								if (event.targets.length) {
									event.current = event.targets.shift();
									event.current.discard(event.current.getCards('e')).delay = false;
								}
								('step 3');
								if (event.targets.length) event.goto(2);
								('step 4');
								if (event.targets3.length) {
									var target = event.targets3.shift();
									target.discard(target.getCards('h'), true);
								}
								('step 5');
								if (event.targets3.length) event.goto(4);
								('step 6');
								var num3 = game.countPlayer(function (current) {
									return current != player;
								});
								if (event.count > num3) {
									player.draw(game.countPlayer() - 1);
									delete player.getStat().skill.zshy_shenfen;
									event.finish();
								} else {
									player
										.chooseControl('失去体力', '翻面', function (event, player) {
											if (get.effect(player, { name: 'losehp' }, player, player) < 0) return '翻面';
											if (player.isTurnedOver() && !player.hasSkillTag('noturn')) return '翻面';
											return '失去体力';
										})
										.set('prompt', '神愤:请选择愤怒的代价!');
								}
								('step 7');
								if (result.control == '失去体力') player.loseHp();
								else player.turnOver();
							},
							ai: {
								combo: 'zshy_kuangbao',
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
							group: ['zshy_shenfen_damageEnd'],
							subSkill: {
								damageEnd: {
									trigger: {
										source: ['damageEnd'],
									},
									forced: true,
									lastDo: true,
									filter(event, player, target) {
										if (player.hp > event.player.hp) return false;
										return true;
									},
									content() {
										player.damage();
									},
								},
							},
						},
						zshy_SLBwushuang: {
							audio: 'ext:诸神寰宇/audio/character:2',
							shaRelated: true,
							forced: true,
							group: ['zshy_SLBwushuang_sha', 'zshy_SLBwushuang_juedou', 'zshy_SLBwushuang_sub1'],
							preHidden: ['zshy_SLBwushuang_sha', 'zshy_SLBwushuang_juedou', 'zshy_SLBwushuang_sub1'],
							subSkill: {
								sha: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: { player: 'useCardToPlayered' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
									},
									logTarget: 'target',
									async content(event, trigger, player) {
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
											if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1) return false;
										},
									},
								},
								juedou: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: { player: 'useCardToPlayered', target: 'useCardToTargeted' },
									forced: true,
									logTarget(trigger, player) {
										return player == trigger.player ? trigger.target : trigger.player;
									},
									filter(event, player) {
										return event.card && event.card.name == 'juedou';
									},
									async content(event, trigger, player) {
										const id = (player == trigger.player ? trigger.target : trigger.player).playerid;
										const idt = trigger.target.playerid;
										const map = trigger.parent.customArgs;
										if (!map[idt]) map[idt] = {};
										if (!map[idt].shaReq) map[idt].shaReq = {};
										if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
										map[idt].shaReq[id]++;
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											if (arg && arg.card.name != 'juedou' || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
										},
									},
								},
								sub1: {
									trigger: {
										source: 'damageBegin3',
									},
									forced: true,
									silent: true,
									popup: false,
									firstDo: true,
									filter(event, player) {
										return event.card && (event.card.name == 'juedou' || event.card.name == 'sha');
									},
									content() {
										trigger.num += player.getDamagedHp();
									},
									ai: {
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'juedou' || event.card.name == 'sha';
										},
									},
								},
							},
						},
						zshy_guixin: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.player == player || !player.getStorage('zshy_guixin').includes(event.player);
							},
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								event.count--;
								var targetx = trigger.player;
								player.draw('nodelay'), targetx.draw('nodelay');
								if (targetx != player) player.markAuto('zshy_guixin', [targetx]);
								('step 2');
								player
									.chooseTarget(
										get.prompt('zshy_guixin'),
										[1, Infinity],
										function (card, player, target) {
											return target.countGainableCards(player, 'hej');
										},
										'获得任意名角色区域内各一张牌'
									)
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.effect(target, { name: 'shunshou_copy2' }, player, player) > 0;
									});
								('step 3');
								if (result.targets?.length) {
									var targets = result.targets.sortBySeat();
									player.line(targets, 'thunder');
									for (var i of targets) player.gainPlayerCard(i, 'hej', true);
									if (trigger.player == player) {
										for (var i of targets) player.damage('kami');
									}
								}
								('step 4');
								if (event.count > 0) {
									event.goto(1);
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten(player, target) {
									if (target.hp == 1) return 2.5;
									return 0.9;
								},
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp == 1) return 0.8;
											if (player != target) return [1, 0.6];
										}
									},
								},
							},
							intro: {
								content: '本轮已对$发动过〖归心〗',
							},
							group: 'zshy_guixin_Delete',
							subSkill: {
								Delete: {
									trigger: {
										global: 'roundStart',
									},
									popup: false,
									silent: true,
									forced: true,
									firstDo: true,
									content() {
										player.unmarkSkill('zshy_guixin');
									},
								},
							},
						},
						zshy_feiying: {
							mod: {
								maxHandcard(player, num) {
									return num + player.maxHp;
								},
								globalTo(from, to, distance) {
									return distance + 1;
								},
							},
						},
						zshy_renjie: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['chooseToUseAfter', 'chooseToRespondAfter'],
								global: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'useCard') {
									if (event.player == player || get.type(event.card) != 'trick') return false;
									const history = game.getGlobalHistory('everything', (evt) => evt.player == player && ['useCard', 'respond'].includes(evt.name));
									return !history.some((evt) => Array.isArray(evt.respondTo) && evt.respondTo[1] == event.card && evt.card.name == 'wuxie');
								}
								const evt = event.getParent(2);
								if (!evt || evt.name != 'useCard' || evt.player == player) return false;
								return event.respondTo && !event.result.bool;
							},
							content() {
								player.addMark('zshy_renjie', 1);
							},
							marktext: '忍',
							intro: {
								name2: '忍',
								content: 'mark',
							},
							global: 'zshy_renjie_global',
							group: ['zshy_renjie_damage', 'zshy_renjie_gain'],
							subSkill: {
								damage: {
									audio: 'zshy_renjie',
									trigger: {
										source: 'damageBegin4',
									},
									check(event, player) {
										if (get.attitude(player, event.player) >= 0) return true;
										return get.damageEffect(event.player, player, player) <= 0;
									},
									logTarget: 'player',
									prompt2(event, player) {
										return '防止对' + get.translation(event.player) + '造成伤害并获得' + event.num + '枚<忍>';
									},
									content() {
										trigger.cancel();
										player.addMark('zshy_renjie', trigger.num);
									},
									ai: {
										effect: {
											player(card, player, target) {
												if (get.tag(card, 'damage') && get.attitude(player, target) >= 0) return [0, 0, 0, 1];
											},
										},
									},
								},
								global: {
									hiddenCard: () => true,
									ai: {
										respondSha: true,
										respondShan: true,
									},
								},
								gain: {
									trigger: {
										global: ['phaseJieshuBegin'],
									},
									forced: true,
									filter(event, player) {
										return player.countMark('zshy_renjie') >= player.maxHp;
									},
									content() {
										var num = player.maxHp;
										player.removeMark('zshy_renjie', num);
										player.addMark('zshy_lianpo', 1);
									},
								},
							},
						},
						zshy_lianpo: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'dieAfter',
							},
							forced: true,
							content() {
								player.addMark('zshy_lianpo', 1);
							},
							marktext: '破',
							intro: {
								name2: '破',
								content: 'mark',
							},
							group: ['zshy_lianpo_extra'],
							subSkill: {
								extra: {
									audio: 'zshy_lianpo',
									trigger: {
										global: 'phaseJieshuAfter',
									},
									check(event, player) {
										return player.isTurnedOver() || player.hp < 2 || player.countMark('zshy_renjie') > 3 || Math.random() < 0.5;
									},
									filter(event, player) {
										return player.hasMark('zshy_lianpo');
									},
									prompt2: '弃置1枚「破」、回复1点体力并摸一张牌,复原武将牌并执行1个额外回合',
									content() {
										player.removeMark('zshy_lianpo', 1);
										player.recover();
										player.draw();
										player.link(false);
										player.turnOver(false);
										player.phase('nodelay');
									},
								},
							},
						},
						zshy_baiyin: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'phaseJieshuBefore',
							},
							forced: true,
							juexingji: true,
							derivation: ['zshy_guicai', 'zshy_fangzhu', 'zshy_jizhi', 'zshy_zhiheng', 'zshy_wansha'],
							filter(event, player) {
								return player.countMark('zshy_renjie') >= player.maxHp;
							},
							content() {
								'step 0';
								player.awakenSkill('zshy_baiyin');
								player.loseMaxHp();
								('step 1');
								player.draw();
								player.recover();
								if (player.hasSkill('zshy_lianpo')) player.addMark('zshy_lianpo', 1);
								('step 2');
								for (var i of lib.skill.zshy_baiyin.derivation) player.addSkillLog(i);
							},
						},
						zshy_longhun: {
							audio: 'ext:诸神寰宇/audio/character:4',
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt: '将至多两张♦️️牌当火杀,♥️️牌当桃,♣️️牌当闪,♠️️牌当无懈可击使用或打出',
							hiddenCard(player, name) {
								if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
								if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
								if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
							},
							viewAs(cards, player) {
								var name = false;
								var nature = null;
								switch (cards[0]?.suit) {
									case 'club':
										name = 'shan';
										break;
									case 'diamond':
										name = 'sha';
										nature = 'fire';
										break;
									case 'spade':
										name = 'wuxie';
										break;
									case 'heart':
										name = 'tao';
										break;
								}
								if (name) return { name: name, nature: nature };
								return null;
							},
							check(card) {
								if (ui.selected.cards.length) return 7 - get.value(card);
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
												return (name != 'sha' || get.value(card) < 7) && card.suit == map[name];
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
									if (name2 == card.suit) return name2 == 'diamond' ? 7 - get.value(card) : 20 - get.value(card);
									return 0;
								}
								return 1;
							},
							position: 'hes',
							forced: true,
							charlotte: true,
							selectCard: [1, 2],
							complexCard: true,
							filterCard(card, player, event) {
								if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
								event = event || _status.event;
								var filter = event._backup.filterCard;
								var name = card.suit;
								if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
								if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
								if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
								if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
								return false;
							},
							filter(event, player) {
								var filter = event.filterCard;
								if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) return true;
								if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) return true;
								if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
								if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
								return false;
							},
							ai: {
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag) {
									var name;
									switch (tag) {
										case 'respondSha':
											name = 'diamond';
											break;
										case 'respondShan':
											name = 'club';
											break;
										case 'save':
											name = 'heart';
											break;
									}
									if (!player.countCards('hes', { suit: name })) return false;
								},
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
							group: 'zshy_longhun_Buff',
							subSkill: {
								Buff: {
									trigger: {
										player: ['useCard', 'respond'],
									},
									forced: true,
									popup: false,
									firstDo: true,
									filter(event, player) {
										return event.skill == 'zshy_longhun' && event.cards && event.cards.length == 2;
									},
									content() {
										'step 0';
										var card = trigger.card;
										trigger.baseDamage++;
										trigger.directHit.addArray(game.players);
										if (trigger.addCount !== false) {
											trigger.addCount = false;
											player.getStat('card')[card.name]--;
										}
										game.log(player, '令', card, '不可响应、不计次限且伤害基数+1');
										('step 1');
										player
											.chooseTarget(get.prompt('zshy_longhun'), '获得一名角色区域内一张牌', function (card, player, target) {
												return target.countGainableCards(player, 'hej');
											})
											.set('ai', function (target) {
												return get.effect(target, { name: 'shunshou_copy2' }, player, player) > 0;
											});
										('step 2');
										if (result.targets?.length) {
											player.line(result.targets);
											player.gainPlayerCard(result.targets[0], 'hej', true);
										}
									},
								},
							},
						},
						zshy_juejing: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['loseMaxHpBefore', 'damageBefore', 'dying', 'dyingAfter'],
								global: 'damageAfter',
							},
							forced: true,
							charlotte: true,
							filter(event, player, name) {
								if (name != 'damageAfter') return true;
								return event.player != player;
							},
							content() {
								if (event.triggername == 'loseMaxHpBefore') trigger.cancel();
								else {
									if (event.triggername == 'damageAfter') player.draw();
									else player.draw(player.getDamagedHp());
								}
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.maxHp;
								},
							},
						},
						zshy_longnu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								var list = ['失去1点体力并摸两张牌', '减少1点体力上限并摸四张牌'];
								player
									.chooseControl(true)
									.set('choiceList', list)
									.set('ai', function () {
										if (player.isDamaged() && player.maxHp > 1) return 1;
										return 0;
									})
									.set('prompt', '龙怒:请选择一项');
								('step 1');
								if (result.index == 0) {
									player.loseHp();
									player.draw(2);
								} else {
									player.loseMaxHp();
									player.draw(4);
								}
							},
							mod: {
								targetInRange(card, player) {
									if (card.name == 'sha' && get.nature(card) == 'fire') return true;
								},
								cardUsable(card, player) {
									if (card.name == 'sha' && get.nature(card) == 'thunder') return Infinity;
								},
							},
							group: ['zshy_longnu_Sha', 'zshy_longnu_Gaindie', 'zshy_longnu_Red', 'zshy_longnu_Black'],
							subSkill: {
								Sha: {
									audio: 'zshy_longnu',
									enable: ['chooseToUse', 'chooseToRespond'],
									prompt: '将一张黑/红色牌当作雷/火杀使用或打出',
									hiddenCard(player, name) {
										if (name == 'sha') return player.countCards('hes', { color: ['red', 'black'] });
									},
									viewAs(cards, player) {
										if (cards.length) {
											var name = false,
												nature = null;
											switch (get.color(cards[0], player)) {
												case 'red':
													name = 'sha';
													nature = 'fire';
													break;
												case 'black':
													name = 'sha';
													nature = 'thunder';
													break;
											}
											if (name) return { name: name, nature: nature };
										}
										return null;
									},
									check(card) {
										return 6 - get.value(card);
									},
									position: 'hes',
									filterCard(card, player, event) {
										event = event || _status.event;
										var filter = event._backup.filterCard,
											color = get.color(card, player);
										if (color == 'red' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
										if (color == 'black' && filter({ name: 'sha', cards: [card], nature: 'thunder' }, player, event)) return true;
										return false;
									},
									filter(event, player) {
										var filter = event.filterCard;
										if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { color: 'red' })) return true;
										if (filter({ name: 'sha', nature: 'thunder' }, player, event) && player.countCards('hes', { color: 'black' })) return true;
										return false;
									},
									ai: {
										order: 4.2,
										respondSha: true,
										skillTagFilter(player, tag) {
											if (!player.countCards('hes', { color: ['red', 'black'] })) return false;
										},
									},
								},
								Gaindie: {
									audio: 'zshy_longnu',
									trigger: {
										source: 'dieBegin',
									},
									forced: true,
									content() {
										player.gainMaxHp();
										player.recover();
									},
								},
								Red: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									silent: true,
									popup: false,
									lastDo: true,
									filter(event, player) {
										return event.card.name == 'sha' && get.nature(event.card) == 'fire';
									},
									content() {
										trigger.baseDamage++;
									},
									ai: {
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'sha' && get.nature(event.card) == 'fire';
										},
									},
								},
								Black: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									silent: true,
									popup: false,
									lastDo: true,
									filter(event, player) {
										return event.card.name == 'sha' && get.nature(event.card) == 'thunder';
									},
									content() {
										trigger.directHit.addArray(game.players);
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											return arg.card.name == 'sha' && get.nature(arg.card) == 'thunder';
										},
									},
								},
							},
						},
						zshy_jieying: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['linkBefore', 'enterGame'],
								global: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'link') return player.isLinked();
								return (event.name != 'phase' || game.phaseNumber == 0) && !player.isLinked();
							},
							content() {
								var num = game.countPlayer(function (current) {
									return current.isLinked();
								});
								player.draw(num);
								if (trigger.name != 'link') player.link(true);
								else trigger.cancel();
							},
							mod: {
								maxHandcard(player, num) {
									var n = game.countPlayer(function (current) {
										return current.isLinked();
									});
									if (n > 0) return num + n;
								},
							},
							ai: {
								effect: {
									target(card) {
										if (card.name == 'tiesuo') return [0, 0.1];
									},
								},
							},
							group: ['zshy_jieying_Damage', 'zshy_jieying_Link'],
							subSkill: {
								Damage: {
									audio: 'zshy_jieying',
									trigger: {
										player: 'damageBefore',
									},
									forced: true,
									filter(event, player) {
										return event.hasNature() && player.isDamaged();
									},
									content() {
										trigger.cancel();
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (!target.isDamaged()) return;
												if (get.tag(card, 'natureDamage')) return 'zerotarget';
											},
										},
									},
								},
								Link: {
									trigger: {
										global: 'phaseJieshuBegin',
									},
									forced: true,
									content() {
										'step 0';
										player.chooseTarget(get.prompt('zshy_jieying'), '令一名角色横置或重置').set('ai', function (target) {
											var player = _status.event.player;
											return get.effect(target, { name: 'tiesuo' }, player, player);
										});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											if (target.isLinked()) target.link(false);
											else target.link(true);
										}
									},
									ai: {
										expose: 0.2,
									},
								},
							},
						},
						zshy_junlve: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'damageAfter',
								source: 'damageEnd',
							},
							forced: true,
							content() {
								player.addMark('zshy_junlve', trigger.num);
							},
							marktext: '略',
							intro: {
								content: 'mark',
							},
							group: 'zshy_junlve_Deputy',
							subSkill: {
								Deputy: {
									audio: 'zshy_junlve',
									trigger: {
										player: 'phaseUseBegin',
									},
									forced: true,
									filter(event, player) {
										return player.hasMark('zshy_junlve');
									},
									content() {
										'step 0';
										event.num = Math.min(game.countPlayer(), player.countMark('zshy_junlve'));
										player.draw(event.num);
										('step 1');
										var str = '令至多' + get.cnNumber(event.num) + '名角色横置或重置';
										player.chooseTarget(get.prompt('zshy_junlve'), str, [1, event.num]).set('ai', function (target) {
											var player = _status.event.player;
											if (target.isLinked()) return get.attitude(player, target);
											return -get.attitude(player, target);
										});
										('step 2');
										if (result.targets?.length) {
											var targets = result.targets.sortBySeat();
											player.line(targets);
											for (var i of targets) i.link();
										}
									},
								},
							},
						},
						zshy_cuike: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('zshy_cuike'), '获得一名角色区域内1张牌', function (card, player, target) {
										return target.countGainableCards(player, 'hej');
									})
									.set('ai', function (target) {
										return get.effect(target, { name: 'shunshou_copy2' }, player, player) > 0;
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.gainPlayerCard(target, 'hej', true);
								}
								('step 2');
								player.chooseTarget(get.prompt('zshy_cuike'), '对一名角色造成1点伤害').set('ai', function (target) {
									var player = _status.event.player;
									return get.damageEffect(target, player, player);
								});
								('step 3');
								if (result.targets?.length) {
									var target = result.targets[0];
									target.damage();
								}
							},
							group: 'zshy_cuike_cancel',
							subSkill: {
								cancel: {
									audio: 'zshy_cuike',
									trigger: {
										global: 'useCardToBefore',
									},
									check(event, player) {
										var effect = 0,
											name = event.card.name;
										if (name == 'wuxie' || name == 'shan' || name == 'zshy_jiandun' || name == 'zshy_pangazhijiao') {
											if (get.attitude(player, event.player) < -1) effect = -1;
										} else if (event.targets && event.targets.length) {
											for (var i = 0; i < event.targets.length; i++) {
												effect += get.effect(event.targets[i], event.card, event.player, player);
											}
										}
										if (get.attitude(event.player, player) >= 0) return false;
										if (get.tag(event.card, 'damage') || event.player.hp < 2) return true;
										return effect < 0;
									},
									filter(event, player) {
										if (!['basic', 'trick'].includes(get.type(event.card)) || !player.hasMark('zshy_junlve')) return false;
										return event.player != player && get.color(event.card) == 'red' && event.targets.length == 1;
									},
									prompt2(event, player) {
										var card = get.translation(event.card);
										var target = get.translation(event.player);
										var str = '弃置1枚「军略」并令' + card + '无效';
										if (get.tag(event.card, 'damage')) str += ',对' + target + '造成1点火焰伤害';
										return str;
									},
									logTarget: 'player',
									content() {
										'step 0';
										player.removeMark('zshy_junlve', 1);
										trigger.cancel();
										('step 1');
										if (get.tag(trigger.card, 'damage')) trigger.player.damage('fire');
									},
									ai: {
										expose: 0.2,
										threaten: 1.8,
										fireattack: true,
									},
								},
							},
						},
						zshy_zhanhuo: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							multiline: true,
							multitarget: true,
							filter(event, player) {
								return (
									player.countMark('zshy_junlve') > 1 &&
									game.hasPlayer(function (target) {
										return player != target && target.isLinked();
									})
								);
							},
							filterTarget(card, player, target) {
								return player != target && target.isLinked();
							},
							selectTarget() {
								var player = _status.event.player;
								var num1 = Math.floor(player.countMark('zshy_junlve'));
								return [1, num1];
							},
							content() {
								'step 0';
								event.num = 1;
								('step 1');
								var x = targets.length;
								if (x > 2) event.num++;
								var targets = targets.sortBySeat();
								event.targets = targets;
								player.removeMark('zshy_junlve', x);
								for (var i of targets) player.discardPlayerCard(i, 'he', [1, x]);
								('step 2');
								var str = '对其中一名角色造成' + event.num + '点火焰伤害';
								player
									.chooseTarget(get.prompt('zshy_zhanhuo'), str, function (card, player, target) {
										return _status.event.targets.includes(target);
									})
									.set('targets', targets)
									.set('ai', function (target) {
										return get.damageEffect(target, player, player, 'fire');
									});
								('step 3');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target);
									target.damage('fire', event.num);
								}
							},
							ai: {
								order() {
									return [1, 2, 3, 4, 5].randomGet();
								},
								result: {
									target(player, target) {
										if (target.hasSkillTag('nofire')) return 0;
										return get.damageEffect(target, player);
									},
								},
							},
						},
						zshy_yongsi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: { player: 'phaseDrawBegin2' },
							forced: true,
							mod: {
								maxHandcard(player, num) {
									return num + game.countGroup();
								},
							},
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num += game.countGroup();
							},
						},
						zshy_weidi: {
						},
						zshy_zhengu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['phaseZhunbeiBegin', 'damageAfter'],
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && !player.getStorage('zshy_zhengu').includes(current);
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget('镇骨:请记录一名未记录的其他角色', true, function (card, player, target) {
										return target != player && !player.getStorage('zshy_zhengu').includes(target);
									})
									.set('ai', function (target) {
										var player = _status.event.player,
											att = get.attitude(player, target);
										if (att < 0) return 2 * target.countCards('h');
										return 1;
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target);
									player.markAuto('zshy_zhengu', [target]);
								}
							},
							intro: {
								content: '已记录目标:$',
							},
							group: ['zshy_zhengu_Player', 'zshy_zhengu_Doing'],
							subSkill: {
								Player: {
									trigger: {
										player: ['phaseEnd'],
									},
									forced: true,
									filter(event, player) {
										return game.hasPlayer(function (current) {
											return current != player && current.countCards('h') != player.countCards('h');
										});
									},
									content() {
										'step 0';
										var str = '令一名其他角色将手牌数摸或弃至与你相同';
										player
											.chooseTarget(get.prompt('zshy_zhengu'), str, function (card, player, target) {
												return target != player && target.countCards('h') != player.countCards('h');
											})
											.set('ai', function (target) {
												var player = _status.event.player,
													att = get.attitude(player, target);
												var eff = get.effect(target, { name: 'draw' }, player, player);
												var ts = target.countCards('h'),
													hs = player.countCards('h');
												var num = ts - hs,
													numx = Math.abs(num);
												if (num < 0) {
													if (eff > 0) return att * 2;
													return att;
												}
												return -att * numx;
											});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											var ts = target.countCards('h'),
												hs = player.countCards('h');
											if (ts > hs) target.chooseToDiscard(ts - hs, true);
											else target.draw(hs - ts);
										}
									},
								},
								Doing: {
									audio: 'zshy_zhengu',
									trigger: {
										global: ['phaseBegin', 'phaseEnd'],
									},
									filter(event, player) {
										if (!event.player.isIn() || event.player.countCards('h') == player.countCards('h')) return false;
										return event.player != player && player.getStorage('zshy_zhengu').includes(event.player);
									},
									check(event, player) {
										var target = event.player,
											att = get.attitude(player, target);
										var ts = target.countCards('h'),
											hs = player.countCards('h');
										var eff = get.effect(target, { name: 'draw' }, player, player);
										var num = ts - hs;
										if (num < 0) {
											if (eff > 0 && att > 0) return true;
										}
										if (num > 0 && att < 0) return true;
										return false;
									},
									prompt2(event, player) {
										var target = event.player,
											ts = target.countCards('h'),
											hs = player.countCards('h');
										var str = '令' + get.translation(target),
											num = ts - hs,
											numx = Math.abs(num);
										if (num < 0) str += '摸' + numx + '张牌';
										else str += '弃置' + numx + '张手牌';
										return str;
									},
									logTarget: 'player',
									content() {
										var target = trigger.player;
										var ts = target.countCards('h'),
											hs = player.countCards('h');
										if (ts > hs) target.chooseToDiscard(ts - hs, true);
										else target.draw(hs - ts);
									},
								},
							},
						},
						zshy_duorui: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: ['phaseBefore'],
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (event.player == player) return false;
								var list = [];
								var listm = [];
								var listv = [];
								if (event.player.name1 != undefined) listm = lib.character[event.player.name1][3];
								else listm = lib.character[event.player.name][3];
								if (event.player.name2 != undefined) listv = lib.character[event.player.name2][3];
								listm = listm.concat(listv);
								var func = function (skill) {
									var info = get.info(skill);
									if (!info || info.persevereSkill) return false;
									return true;
								};
								for (var i = 0; i < listm.length; i++) {
									if (func(listm[i])) list.add(listm[i]);
								}
								return list.length;
							},
							check(event, player) {
								if (get.attitude(_status.event.player, event.player) >= 0) return false;
								return true;
							},
							logTarget: 'player',
							content() {
								'step 0';
								var list = [];
								var listm = [];
								var listv = [];
								if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
								else listm = lib.character[trigger.player.name][3];
								if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
								listm = listm.concat(listv);
								var func = function (skill) {
									var info = get.info(skill);
									if (!info || info.persevereSkill) return false;
									return true;
								};
								for (var i = 0; i < listm.length; i++) {
									if (func(listm[i])) list.add(listm[i]);
								}
								event.skills = list;
								player.chooseControl(list, 'cancel2').set('prompt', '选择' + get.translation(trigger.player) + '武将牌上的一个技能并令其失效');
								('step 1');
								trigger.player.disableSkill('zshy_duorui_gain', result.control);
								trigger.player.addTempSkill('zshy_duorui_gain', { player: 'phaseAfter' });
								game.log(player, '选择了', trigger.player, '的技能', '#g【' + get.translation(result.control) + '】');
							},
							group: ['zshy_duorui_damage'],
							subSkill: {
								damage: {
									audio: 'zshy_duorui',
									trigger: {
										source: 'damageBefore',
									},
									forced: true,
									charlotte: true,
									content() {
										'step 0';
										var target = trigger.player,
											list = [],
											choiceList = ['获得并失效' + get.translation(target) + '武将牌1个技能', '移除' + get.translation(target) + '武将牌1个技能', '减少其1点体力上限'];
										event.list1 = target.getSkills(true, false).filter((skill) => {
											if (skill == 'jiu') return false;
											if (player.hasSkill(skill)) return false;
											if (!lib.translate[skill + '_info']) return false;
											if (lib.translate[skill + '_info'] == '') return false;
											var info = get.info(skill);
											if (!info) return false;
											return true;
										});
										if (event.list1.length) list.push('选项一');
										else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
										event.list2 = target.getSkills(true, false).filter((skill) => {
											if (skill == 'jiu') return false;
											if (!lib.translate[skill + '_info']) return false;
											if (lib.translate[skill + '_info'] == '') return false;
											var info = get.info(skill);
											if (!info) return false;
											return true;
										});
										if (event.list2.length) list.push('选项二');
										else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
										list.push('选项三');
										player
											.chooseControl(list, 'cancel2')
											.set('choiceList', choiceList)
											.set('ai', function () {
												var att = get.attitude(player, target);
												if (att < 0) {
													if (list.includes('选项一') && Math.random() < 0.7) return '选项一';
													if (list.includes('选项二') && Math.random() < 0.7) return '选项二';
													return '选项三';
												}
												return 'cancel2';
											})
											.set('prompt', get.prompt('zshy_duorui'));
										('step 1');
										if (result.control != 'cancel2') {
											var target = trigger.player;
											event.target = target;
											if (result.control == '选项三') {
												target.loseMaxHp();
												event.finish();
											} else if (result.control == '选项二') {
												var lists = event.list2;
												event.videoId = lib.status.videoId++;
												var func = function (skills, id) {
													var dialog = ui.create.dialog('forcebutton');
													dialog.videoId = id;
													dialog.add('夺锐:请选择要移除的1个技能');
													for (var i = 0; i < skills.length; i++) {
														if (lib.translate[lists[i] + '_info']) {
															var translation = get.translation(lists[i]);
															if (translation[0] == '新' && translation.length == 3) translation = translation.slice(1, 3);
															else translation = translation.slice(0, 2);
															dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
														}
													}
													dialog.addText('<br>');
												};
												if (player == game.me) func(lists, event.videoId);
												player.chooseControl(lists, true).set('ai', function () {
													return lists.randomGet();
												});
											} else {
												var lists = event.list1;
												event.videoId = lib.status.videoId++;
												var func = function (skills, id) {
													var dialog = ui.create.dialog('forcebutton');
													dialog.videoId = id;
													dialog.add('夺锐:请选择要获得并失效的1个技能');
													for (var i = 0; i < skills.length; i++) {
														if (lib.translate[lists[i] + '_info']) {
															var translation = get.translation(lists[i]);
															if (translation[0] == '新' && translation.length == 3) translation = translation.slice(1, 3);
															else translation = translation.slice(0, 2);
															dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
														}
													}
													dialog.addText('<br>');
												};
												if (player == game.me) func(lists, event.videoId);
												player.chooseControl(lists, true).set('ai', function () {
													return lists.randomGet();
												});
												event.goto(3);
											}
										} else event.finish();
										('step 2');
										game.broadcastAll('closeDialog', event.videoId);
										var link = result.control;
										target.popup(link);
										target.removeSkill(link);
										game.log(target, '失去了技能', '【' + get.translation(link) + '】');
										event.finish();
										('step 3');
										game.broadcastAll('closeDialog', event.videoId);
										var link = result.control;
										player.addSkillLog(link);
										target.disableSkill('zshy_duorui_gain', link);
										target.addTempSkill('zshy_duorui_gain', { player: 'phaseBefore' });
										game.log(target, '失效了技能', '【' + get.translation(link) + '】');
									},
								},
								gain: {
									onremove(player, skill) {
										player.enableSkill(skill);
									},
									mark: true,
									charlotte: true,
									intro: {
										content(storage, player, skill) {
											var list = [];
											for (var i in player.disabledSkills) {
												if (player.disabledSkills[i].includes(skill)) list.push(i);
											}
											if (list.length) {
												var str = '失效技能:';
												for (var i = 0; i < list.length; i++) {
													if (lib.translate[list[i] + '_info']) str += get.translation(list[i]) + '、';
												}
												return str.slice(0, str.length - 1);
											}
										},
									},
								},
							},
						},
						zshy_zhiti: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return player.countDisabled() > 0;
								return event.player.isIn();
							},
							content() {
								'step 0';
								var target = trigger.player;
								var att = get.attitude(player, target);
								var list = [],
									choiceList = ['令' + get.translation(target) + '复原1个装备栏', '令' + get.translation(target) + '废除1个装备栏'];
								if (target.countDisabled() > 0) list.push('选项一');
								else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '</span>';
								if (target.hasEnabledSlot()) list.push('选项二');
								else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
								player
									.chooseControl(list, 'cancel2')
									.set('choiceList', choiceList)
									.set('ai', function () {
										if (list.includes('选项一')) {
											if (att > 0) return '选项一';
										}
										if (list.includes('选项二')) {
											if (att < 0) return '选项二';
										}
										return 'cancel2';
									})
									.set('prompt', get.prompt('zshy_zhiti'));
								('step 1');
								if (result.control != 'cancel2') {
									if (result.control == '选项一') {
										trigger.player.chooseToEnable();
									} else trigger.player.chooseToDisable();
								}
							},
							group: 'zshy_zhiti_Attack',
							subSkill: {
								Attack: {
									audio: 'zshy_zhiti',
									trigger: {
										global: 'phaseDrawBegin',
									},
									forced: true,
									filter(event, player) {
										return !event.numFixed;
									},
									content() {
										'step 0';
										player.draw();
										if (player.countCards('h')) {
											player.chooseToUse({
												filterCard(card, player) {
													if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
													return lib.filter.filterCard.apply(this, arguments);
												},
												prompt: '止啼:是否使用一张手牌？',
											});
										} else event.finish();
										('step 1');
										if (result.bool) {
											trigger.num--;
										}
									},
								},
							},
						},
						zshy_poxi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target.countCards('hej');
							},
							content() {
								'step 0';
								event.list1 = [];
								event.list2 = [];
								if (player.countCards('hej')) {
									var chooseButton = player.chooseButton([1, 5], ['你区域的牌', player.getCards('hej'), get.translation(target) + '区域的牌', target.getCards('hej')]);
								} else var chooseButton = player.chooseButton([1, 5], [get.translation(target) + '区域的牌', target.getCards('hej')]);
								chooseButton.set('target', target);
								chooseButton.set('ai', function (button) {
									var player = _status.event.player;
									var target = _status.event.target;
									var ps = [],
										ts = [];
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										var card = ui.selected.buttons[i].link;
										if (target.getCards('hej').includes(card)) ts.push(card);
										else ps.push(card);
									}
									var card = button.link;
									var owner = get.owner(card);
									var val = get.value(card) || 1;
									if (owner == target) {
										if (ts.length > 1) return 0;
										if (ts.length == 0 || player.hp > 3) return val;
										return 2 * val;
									}
									return 7 - val;
								});
								chooseButton.set('filterButton', function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
									}
									return true;
								});
								('step 1');
								if (result.links?.length) {
									var list = result.links;
									for (var i = 0; i < list.length; i++) {
										if (get.owner(list[i]) == player) {
											event.list1.push(list[i]);
										} else event.list2.push(list[i]);
									}
									if (event.list1.length && event.list2.length) {
										game.loseAsync({
											lose_list: [
												[player, event.list1],
												[target, event.list2],
											],
											discarder: player,
										}).setContent('discardMultiple');
									} else if (event.list2.length) target.discard(event.list2, true);
									else player.discard(event.list1, true);
								} else event.finish();
								('step 2');
								var num = event.list1.length + event.list2.length;
								if (num > 0) {
									if (num >= 5) player.gainMaxHp();
									if (num >= 4) player.phase('nodelay');
									if (num >= 3) player.skip('phaseDiscard');
									if (num >= 2) player.recover();
									if (num >= 1) player.draw(2);
								}
							},
							ai: {
								order: 12,
								result: {
									target: -1,
								},
							},
						},
						zshy_SGNjieying: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							content() {
								player.addMark('zshy_SGNjieying_Mark', 1, false);
								player.addSkill('zshy_SGNjieying_Mark');
							},
							group: ['zshy_SGNjieying_Jieshu', 'zshy_SGNjieying_After', 'zshy_SGNjieying_Die'],
							subSkill: {
								Jieshu: {
									trigger: {
										player: 'phaseJieshuBegin',
									},
									forced: true,
									filter(event, player) {
										return player.hasMark('zshy_SGNjieying_Mark');
									},
									content() {
										'step 0';
										var num = player.countMark('zshy_SGNjieying_Mark'),
											str = '交给至多' + num + '名其他角色各1枚「营」';
										player.chooseTarget(get.prompt('zshy_SGNjieying'), str, [1, num], function (card, player, target) {
											return target != player;
										}).ai = function (target) {
											var att = get.attitude(player, target);
											if (att < 0) {
												if (target.hasMark('zshy_SGNjieying_Mark')) return 0;
												if (target.isTurnedOver() || target.countCards('he') < 2) return 0.2;
												if (target.countCards('he') && target.countCards('j', { name: 'lebu' })) return target.countCards('he') * 0.8 + target.getHandcardLimit() * 0.7 + 2;
												return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
											}
											if (att > 0) {
												if (!target.hasMark('zshy_SGNjieying_Mark')) return 0.1;
												return 0;
											}
											return 0;
										};
										('step 1');
										if (result.targets?.length) {
											var targets = result.targets.sortBySeat();
											for (var i of targets) {
												player.removeMark('zshy_SGNjieying_Mark', 1);
												i.addMark('zshy_SGNjieying_Mark', 1, false);
												i.addSkill('zshy_SGNjieying_Mark');
											}
										}
									},
								},
								After: {
									audio: 'zshy_SGNjieying',
									trigger: {
										global: 'phaseAfter',
									},
									check(event, player) {
										return get.effect(event.player, { name: 'shunshou_copy2' }, player, player) > 0;
									},
									filter(event, player) {
										return event.player.hasMark('zshy_SGNjieying_Mark') && event.player.isAlive();
									},
									logTarget: 'player',
									prompt2(event, player) {
										var str = '获得' + get.translation(event.player) + '1枚「营」';
										if (event.player.countGainableCards(player, 'hej') && event.player != player) str += '获得其区域内任意张牌';
										return str;
									},
									content() {
										'step 0';
										var target = trigger.player;
										var num = target.countCards('hej');
										target.removeMark('zshy_SGNjieying_Mark', 1);
										player.addMark('zshy_SGNjieying_Mark', 1, false);
										if (num > 0) player.gainPlayerCard(target, 'hej', [1, num]);
									},
								},
								Die: {
									trigger: {
										player: 'dieBegin',
									},
									forced: true,
									filter(event, player) {
										return game.hasPlayer(function (current) {
											return current.hasMark('zshy_SGNjieying_Mark');
										});
									},
									content() {
										'step 0';
										var str = '令一名其他角色获得你所有的「营」';
										player.chooseTarget(get.prompt('zshy_SGNjieying'), str, [1, 1], function (card, player, target) {
											return target != player;
										}).ai = function (target) {
											return get.attitude(player, target);
										};
										('step 1');
										if (result.bool) {
											var num = player.countMark('zshy_SGNjieying_Mark');
											player.removeMark('zshy_SGNjieying_Mark', num);
											var targets = result.targets.sortBySeat();
											for (var i of targets) {
												i.addMark('zshy_SGNjieying_Mark', num);
											}
										} else return;
										('step 2');
										var str = '令任意名有「营」的其他角色弃置所有「营」和所有牌';
										player.chooseTarget(get.prompt('zshy_SGNjieying'), str, [1, Infinity], function (card, player, target) {
											return target != player && target.hasMark('zshy_SGNjieying_Mark');
										}).ai = function (target) {
											return -get.attitude(player, target);
										};
										('step 3');
										if (result.targets?.length) {
											var targets = result.targets.sortBySeat();
											for (var i of targets) {
												var num = i.countMark('zshy_SGNjieying_Mark');
												i.removeMark('zshy_SGNjieying_Mark', num);
												i.discard(i.getCards('he'), true);
											}
										}
									},
								},
								Mark: {
									charlotte: true,
									audio: 'zshy_SGNjieying',
									marktext: '营',
									markimage: 'extension/诸神寰宇/other/Files/Mark/zshy_SGNjieying.png',
									intro: {
										name2: '营',
										content: 'mark',
									},
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + player.countMark('zshy_SGNjieying_Mark');
										},
										maxHandcard(player, num) {
											return num + player.countMark('zshy_SGNjieying_Mark');
										},
									},
									trigger: {
										player: 'phaseDrawBegin2',
									},
									forced: true,
									filter(event, player) {
										return !event.numFixed && player.hasMark('zshy_SGNjieying_Mark');
									},
									content() {
										trigger.num += player.countMark('zshy_SGNjieying_Mark');
									},
									ai: {
										nokeep: true,
										skillTagFilter(player) {
											if (
												!game.hasPlayer(function (current) {
													return get.attitude(player, current) < 0 && current.hasSkill('zshy_SGNjieying');
												})
											)
												return false;
										},
									},
								},
							},
						},
						zshy_shencai: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							filter(event, player) {
								return event.player != player && event.player.isAlive();
							},
							logTarget: 'player',
							prompt2(event, player) {
								return '你可以判定并获得判定牌,根据判定牌花色对' + get.translation(event.player) + '进行断罪';
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (card.suit == 'none') return 2;
									if (card.suit == 'diamond') return 1.5;
									return 1;
								});
								('step 1');
								event.suit = result.suit;
								player.gain(result.card, 'gain2');
								player.gainPlayerCard(trigger.player, 'he', true);
								('step 2');
								var target = trigger.player;
								if (event.suit == 'spade') {
									if (!target.hasSkill('zshy_shencai_spade')) {
										target.addSkill('zshy_shencai_spade');
										event.finish();
									}
								} else if (event.suit == 'club') {
									if (!target.hasSkill('zshy_shencai_club')) {
										target.addSkill('zshy_shencai_club');
										event.finish();
									}
								} else if (event.suit == 'diamond') {
									if (!target.hasSkill('zshy_shencai_diamond')) {
										target.addSkill('zshy_shencai_diamond');
										event.finish();
									}
								} else if (event.suit == 'heart') {
									if (!target.hasSkill('zshy_shencai_heart')) {
										target.addSkill('zshy_shencai_heart');
										event.finish();
									}
								} else {
									if (!target.hasSkill('zshy_shencai_none')) {
										target.addSkill('zshy_shencai_none');
										event.finish();
									}
								}
								('step 3');
								trigger.player.addMark('zshy_shencai_die', 1);
								trigger.player.addSkill('zshy_shencai_die');
							},
							ai: {
								expose: 0.3,
								threaten: 5,
							},
							global: 'zshy_shencai_AI',
							group: 'zshy_shencai_Use',
							subSkill: {
								Use: {
									audio: 'zshy_shencai',
									enable: 'phaseUse',
									usable: 1,
									filterTarget(card, player, target) {
										return target != player;
									},
									prompt(event, player) {
										return '你可以审判一名其他角色';
									},
									content() {
										'step 0';
										player.judge(function (card) {
											if (card.suit == 'none') return 2;
											if (card.suit == 'diamond') return 1.5;
											return 1;
										});
										('step 1');
										event.suit = result.suit;
										player.gain(result.card, 'gain2');
										player.gainPlayerCard(target, 'he', true);
										('step 2');
										if (event.suit == 'spade') {
											if (!target.hasSkill('zshy_shencai_spade')) {
												target.addSkill('zshy_shencai_spade');
												event.finish();
											}
										} else if (event.suit == 'club') {
											if (!target.hasSkill('zshy_shencai_club')) {
												target.addSkill('zshy_shencai_club');
												event.finish();
											}
										} else if (event.suit == 'diamond') {
											if (!target.hasSkill('zshy_shencai_diamond')) {
												target.addSkill('zshy_shencai_diamond');
												event.finish();
											}
										} else if (event.suit == 'heart') {
											if (!target.hasSkill('zshy_shencai_heart')) {
												target.addSkill('zshy_shencai_heart');
												event.finish();
											}
										} else {
											if (!target.hasSkill('zshy_shencai_none')) {
												target.addSkill('zshy_shencai_none');
												event.finish();
											}
										}
										('step 3');
										target.addMark('zshy_shencai_die', 1);
										target.addSkill('zshy_shencai_die');
									},
									ai: {
										order() {
											return [3, 5, 7, 9].randomGet();
										},
										result: {
											target: -1,
										},
									},
								},
								AI: {
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											if (!arg || !arg.card || !['basic', 'trick'].includes(get.type(arg.card)) || get.tag(arg.card, 'damage')) return false;
											if (!arg.target || !arg.target.hasSkill('zshy_shencai_club')) return false;
											return true;
										},
									},
								},
								spade: {
									mark: true,
									marktext: '笞',
									intro: {
										name: '神裁',
										content: '受到1点伤害后,失去1点体力上限',
									},
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									charlotte: true,
									content() {
										'step 0';
										event.count = Math.min(trigger.num, 9);
										('step 1');
										event.count--;
										player.loseMaxHp();
										('step 2');
										if (event.count > 0) event.goto(1);
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'damage') && current < 0) return 1.6;
											},
										},
									},
								},
								club: {
									mark: true,
									marktext: '杖',
									intro: {
										name: '神裁',
										content: '不能响应带有『伤害』标签的基本牌和普通锦囊牌',
									},
									trigger: {
										target: 'useCardToTargeted',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										if (!['basic', 'trick'].includes(get.type(event.card))) return false;
										if (get.tag(event.card, 'damage')) return true;
										return false;
									},
									content() {
										trigger.directHit.add(player);
										game.log(player, '不能响应', trigger.card);
									},
								},
								heart: {
									audio: 'zshy_shencai',
									mark: true,
									marktext: '流',
									intro: {
										name: '神裁',
										content: '回合结束时,将武将牌翻至背面',
									},
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									charlotte: true,
									content() {
										player.turnOver(true);
									},
								},
								diamond: {
									mark: true,
									marktext: '徒',
									intro: {
										name: '神裁',
										content: '以此法外失去牌后,随机弃置一张牌',
									},
									trigger: {
										player: 'loseAfter',
										global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										if (
											!player.hasCard(function (card) {
												return lib.filter.cardDiscardable(card, player, 'zshy_shencai_diamond');
											}, 'he')
										)
											return false;
										var evt = event.getParent('zshy_shencai_diamond');
										if (evt && evt.player == player) return false;
										var evt = event.getl(player);
										return evt && evt.cards2 && evt.cards2.length;
									},
									content() {
										'step 0';
										event.cards = player.getCards('he', function (card) {
											return lib.filter.cardDiscardable(card, player, 'zshy_shencai_diamond');
										});
										('step 1');
										if (cards.length) player.discard(cards.randomGet());
									},
								},
								none: {
									audio: 'zshy_shencai',
									mark: true,
									marktext: '裁',
									intro: {
										name: '神裁',
										content: '回复体力时,摸一张牌并取消之',
									},
									trigger: {
										player: 'recoverBegin',
									},
									forced: true,
									charlotte: true,
									content() {
										player.draw();
										trigger.cancel();
									},
									ai: {
										effect: {
											target(card, player, target) {
												if (get.tag(card, 'recover')) return 'zeroplayertarget';
											},
										},
									},
								},
								die: {
									audio: 'zshy_shencai',
									mark: true,
									marktext: '死',
									intro: {
										name: '神裁',
										content: '任意角色回合结束后,若你的体力值或存活角色数小于#,则你死亡',
									},
									trigger: {
										global: 'phaseAfter',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										var num = player.countMark('zshy_shencai_die');
										return num > player.hp || num > game.countPlayer();
									},
									content() {
										player.die();
									},
								},
							},
						},
						zshy_xunshi: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								if (!player.countCards('hes', { color: 'none' })) return false;
								if (!lib.inpile.includes(name)) return false;
								var type = get.type(name);
								return type == 'basic' || type == 'delay';
							},
							filter(event, player) {
								if (!player.countCards('hes', { color: 'none' })) return false;
								for (var i of lib.inpile) {
									var type = get.type(i);
									if ((type == 'basic' || type == 'delay') && event.filterCard({ name: i }, player, event)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (name == 'sha') {
											if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
											for (var j of lib.inpile_nature) {
												if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
											}
										} else if (get.type(name) == 'delay' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
										else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
									}
									return ui.create.dialog('巡使', [list, 'vcard']);
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									if (_status.event.parent.type != 'phase') return 1;
									var player = _status.event.player;
									return player.getUseValue({ name: button.link[2], nature: button.link[3] });
								},
								backup(links, player) {
									return {
										filterCard(card, player) {
											return get.color(card) == 'none';
										},
										popname: true,
										position: 'hes',
										check(card) {
											return 7 - get.value(card);
										},
										viewAs: {
											color: 'none',
											name: links[0][2],
											nature: links[0][3],
										},
										precontent() {
										},
									};
								},
								prompt(links, player) {
									return '将一张🃏牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
								},
							},
							ai: {
								save: true,
								fireAttack: true,
								respondSha: true,
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('hes', { color: 'none' })) return false;
								},
								order: 1,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
							isXunshi(card) {
								var info = lib.card[card.name];
								if (!info || (info.type != 'trick' && info.type != 'delay')) return false;
								if (info.notarget) return false;
								if (info.selectTarget != undefined) {
									if (Array.isArray(info.selectTarget)) {
										if (info.selectTarget[0] < 0) return !info.toself;
										return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
									} else {
										if (info.selectTarget < 0) return !info.toself;
										return info.selectTarget != 1;
									}
								}
								return false;
							},
							mod: {
								suit(card, suit) {
									if (lib.skill.zshy_xunshi.isXunshi(card)) return 'none';
								},
								targetInRange(card) {
									const suit = get.color(card);
									const name = card.name;
									if (suit == 'none' || suit == 'unsure' || name == 'sha') return true;
								},
								cardUsable(card) {
									const suit = get.color(card);
									const name = card.name;
									if (suit == 'none' || suit == 'unsure' || name == 'sha') return Infinity;
								},
								ignoredHandcard(card, player) {
									if (get.color(card) == 'none') return true;
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && get.color(card) == 'none') return false;
								},
								aiValue(player, card, num) {
									if (lib.skill.zshy_xunshi.isXunshi(card)) return 15;
								},
							},
							group: 'zshy_xunshi_Deputy',
							subSkill: {
								Deputy: {
									trigger: {
										player: 'useCard2',
									},
									forced: true,
									filter(event, player) {
										if (get.color(event.card) != 'none') return false;
										if (!['basic', 'trick'].includes(get.type(event.card))) return false;
										if (event.targets && event.targets.length) return true;
										var info = get.info(event.card);
										if (info.allowMultiple == false) return false;
										if (event.targets && !info.multitarget) {
											if (
												game.hasPlayer(function (current) {
													return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
												})
											)
												return true;
										}
										return false;
									},
									content() {
										'step 0';
										var str = '为' + get.translation(trigger.card) + '增加或减少任意个目标';
										player
											.chooseTarget(get.prompt('zshy_xunshi'), str, [1, Infinity], function (card, player, target) {
												var player = _status.event.player;
												if (_status.event.targets.includes(target)) return true;
												return lib.filter.targetEnabled2(_status.event.card, player, target);
											})
											.set('ai', function (target) {
												var trigger = _status.event.getTrigger();
												var player = _status.event.player;
												return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
											})
											.set('targets', trigger.targets)
											.set('card', trigger.card);
										('step 1');
										if (result.targets?.length) {
											var targets = result.targets.sortBySeat();
											if (trigger.targets.includes(targets[0])) trigger.targets.removeArray(targets);
											else trigger.targets.addArray(targets);
										}
									},
								},
							},
						},
						zshy_shouli: {
							audio: 'ext:诸神寰宇/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								if (player != _status.currentPhase && (name == 'sha' || name == 'shan')) return true;
							},
							filter(event, player) {
								if (event.responded || event.zshy_shouli || event.type == 'wuxie') return false;
								if (
									game.hasPlayer(function (current) {
										return current.getCards('e', (card) => get.type(card) == 'equip' && get.color(card) == 'black').length;
									}) &&
									event.filterCard(
										{
											name: 'sha',
											storage: { zshy_shouli: true },
										},
										player,
										event
									)
								)
									return true;
								if (
									game.hasPlayer(function (current) {
										return current.getCards('e', (card) => get.type(card) == 'equip' && get.color(card) != 'black').length;
									}) &&
									event.filterCard(
										{
											name: 'shan',
											storage: { zshy_shouli: true },
										},
										player,
										event
									)
								)
									return true;
								return false;
							},
							delay: false,
							filterTarget(card, player, target) {
								var event = _status.event,
									evt = event;
								if (event._backup) evt = event._backup;
								var eqshan = target.getCards('e', (card) => get.type(card, false) == 'equip' && get.color(card) != 'black');
								var eqsha = target.getCards('e', (card) => get.type(card, false) == 'equip' && get.color(card) == 'black');
								if (
									eqshan.length &&
									eqshan.some((card) =>
										evt.filterCard({
											name: 'shan',
											storage: { zshy_shouli: true },
										},
											player,
											event
										)
									)
								)
									return true;
								return eqsha.some((card) => {
									var sha = {
										name: 'sha',
										storage: { zshy_shouli: true },
									};
									if (evt.filterCard && evt.filterCard(sha, player, event)) {
										if (!evt.filterTarget) return true;
										return game.hasPlayer(function (current) {
											return evt.filterTarget(sha, player, current);
										});
									}
								});
							},
							prompt: '将场上一张黑/非黑色装备牌当作【杀】/【闪】使用或打出',
							content() {
								'step 0';
								var evt = event.getParent(2);
								evt.set('zshy_shouli', true);
								var list = [];
								var eqshan = target.getCards('e', (card) => get.type(card, false) == 'equip' && get.color(card) != 'black');
								var eqsha = target.getCards('e', (card) => get.type(card, false) == 'equip' && get.color(card) == 'black');
								var backupx = _status.event;
								_status.event = evt;
								try {
									if (
										eqshan.length &&
										eqshan.some((card) => {
											var shan = {
												name: 'shan',
												storage: { zshy_shouli: true },
											};
											if (evt.filterCard && evt.filterCard(shan, player, event)) return true;
											return false;
										})
									)
										list.push('shan');
									if (
										eqsha.length &&
										eqsha.some((card) => {
											var sha = {
												name: 'sha',
												storage: { zshy_shouli: true },
											};
											if (
												evt.filterCard(sha, player, evt) &&
												(!evt.filterTarget ||
													game.hasPlayer(function (current) {
														return evt.filterTarget(sha, player, current);
													}))
											)
												return true;
											return false;
										})
									)
										list.push('sha');
								} catch (e) {
									game.print(e);
								}
								_status.event = backupx;
								if (list.length == 1) {
									event.cardName = list[0];
									var cards = list[0] == 'shan' ? eqshan : eqsha;
									if (cards.length == 1)
										event._result = {
											bool: true,
											links: [cards[0]],
										};
									else
										player
											.choosePlayerCard(true, target, 'e')
											.set('filterButton', function (button) {
												return _status.event.cards.includes(button.link);
											})
											.set('cards', cards);
								} else player.choosePlayerCard(true, target, 'e');
								('step 1');
								var evt = event.getParent(2);
								if (result.links?.length) {
									var name = event.cardName || (get.type(result.links[0]) == 'equip' && (get.color(result.links[0]) == 'black' ? 'sha' : 'shan'));
									if (evt.name == 'chooseToUse') {
										game.broadcastAll(
											function (result, name) {
												lib.skill.zshy_shouli_backup.viewAs = {
													name: name,
													cards: [result],
													storage: { zshy_shouli: true },
												};
												lib.skill.zshy_shouli_backup.prompt = '选择' + get.translation(name) + '(' + get.translation(result) + ')的目标';
											},
											result.links[0],
											name
										);
										evt.set('_backupevent', 'zshy_shouli_backup');
										evt.backup('zshy_shouli_backup');
										evt.set('openskilldialog', '选择' + get.translation(name) + '(' + get.translation(result.links[0]) + ')的目标');
										evt.set('norestore', true);
										evt.set('custom', {
											add: {},
											replace: { window() { } },
										});
									} else {
										delete evt.result.skill;
										delete evt.result.used;
										evt.result.card = {
											name: name,
											cards: [result.links[0]],
											storage: { zshy_shouli: true },
										};
										evt.result.cards = [result.links[0]];
										target.$give(result.links[0], player, false);
										evt.redo();
										return;
									}
								}
								evt.goto(0);
							},
							ai: {
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag) {
									if (tag == 'respondSha')
										return game.hasPlayer(function (current) {
											return current.hasCard((card) => get.type(card, false) == 'equip' && get.color(card, false) == 'black', 'e');
										});
									return game.hasPlayer(function (current) {
										return current.hasCard((card) => get.type(card, false) == 'equip' && get.color(card, false) != 'black', 'e');
									});
								},
								order() {
									return [2, 4, 6].randomGet();
								},
								result: {
									player(player, target) {
										var att = Math.max(8, get.attitude(player, target));
										if (_status.event.type != 'phase') return 9 - att;
										if (!player.hasValueTarget({ name: 'sha' })) return 0;
										return 9 - att;
									},
								},
							},
							mod: {
								cardUsable(card) {
									if (card.storage && card.storage.zshy_shouli) return Infinity;
								},
								targetInRange(card) {
									if (card.storage && card.storage.zshy_shouli) return true;
								},
								globalFrom(from, to, distance) {
									var num = game.countPlayer(function (current) {
										return current.countCards('ej') > 0;
									});
									if (num > 0) return distance - num;
								},
							},
							group: 'zshy_shouli_Equip',
							subSkill: {
								Equip: {
									audio: 'ext:诸神寰宇/audio/character:2',
									trigger: {
										global: 'roundStart',
									},
									prompt2(event, player) {
										return '你可以令所有角色依次执行一项:①使用一张装备牌并摸一张牌;②随机使用牌堆或弃牌堆中一张装备牌.';
									},
									content() {
										'step 0';
										event.targets = game.filterPlayer().sortBySeat(player);
										event.target = event.targets.shift();
										('step 1');
										var str = '狩骊:使用一张装备牌并摸一张牌,或随机使用牌堆或弃牌堆中一张装备牌';
										player.line(target, 'green');
										if (!target.countCards('hs', { type: 'equip' })) event._result = { bool: false };
										else
											target
												.chooseToUse(str, function (card, player, event) {
													if (get.type(card) != 'equip') return false;
													return lib.filter.filterCard.apply(this, arguments);
												})
												.set('ai', () => 1);
										('step 2');
										if (result.bool) target.draw();
										else {
											var card = get.cardPile2(function (card) {
												var type = get.subtype(card);
												if (get.type(card) != 'equip') return false;
												return target.canUse(card, target);
											});
											if (card) target.chooseUseTarget(card, 'nopopup', 'noanimate', true);
										}
										('step 3');
										event.target = event.targets.shift();
										if (event.target) event.goto(1);
									},
								},
							},
						},
						zshy_hengwu: {
							audio: 'ext:诸神寰宇/audio/character:2',
							trigger: {
								player: ['useCard', 'respond'],
							},
							forced: true,
							firstDo: true,
							filter(event, player) {
								var suit = event.card.suit;
								var name = event.card.name;
								if (
									!player.hasCard(function (card) {
										return card.suit == suit;
									}, 'h')
								)
									return true;
								if (name == 'sha' || name == 'shan') {
									return game.hasPlayer(function (current) {
										return current != player && !current.hasSkill('baiban');
									});
								}
								return false;
							},
							content() {
								'step 0';
								var suit = trigger.card.suit;
								if (
									!player.hasCard(function (card) {
										return card.suit == suit;
									}, 'h')
								) {
									var num = game.countPlayer(function (current) {
										return current.countCards('ej', function (card) {
											return card.suit == suit;
										});
									});
									player.draw(Math.max(1, num));
								}
								('step 1');
								var name = trigger.card.name;
								if (
									(name == 'sha' || name == 'shan') &&
									game.hasPlayer(function (current) {
										return current != player && !current.hasSkill('baiban');
									})
								) {
									var str = '令一名其他角色本回合非状态技失效';
									player
										.chooseTarget(get.prompt('zshy_hengwu'), str, function (card, player, target) {
											return target != player && !target.hasSkill('baiban');
										})
										.set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											if (target == _status.currentPhase) return -att * 2;
											return -att * Math.min(4, target.hp);
										});
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									result.targets[0].addTempSkill('baiban');
								}
							},
							group: 'zshy_hengwu_Damage',
							subSkill: {
								Damage: {
									audio: 'zshy_hengwu',
									trigger: {
										global: 'damageBefore',
									},
									forced: true,
									filter(event, player) {
										var target = event.player;
										return target.isIn() && (target.hasSkill('fengyin') || target.hasSkill('baiban'));
									},
									content() {
										'step 0';
										var list = ['令' + get.translation(trigger.player) + '摸两张牌并回复非锁定或状态技', '令' + get.translation(trigger.player) + '受到的伤害翻倍并改为雷属性'];
										player
											.chooseControl('cancel2')
											.set('choiceList', list)
											.set('ai', function () {
												var target = trigger.player,
													att = get.attitude(player, target);
												var eff = get.damageEffect(target, player, player, 'thunder');
												if (att > 0) return 0;
												if (att < 0 && eff > 0) return 1;
												return 'cancel2';
											});
										('step 1');
										if (result.control != 'cancel2') {
											var target = trigger.player;
											if (result.index == 0) {
												target.draw(2);
												target.removeSkill('fengyin');
												target.removeSkill('baiban');
											} else {
												trigger.num += trigger.num;
												game.setNature(trigger, 'thunder');
											}
										}
									},
								},
							},
						},
					},
					translate: {
						zshy_ZSGSA_AAAA: '光阴长河',
						zshy_ZSGSA_SHHJ: '标准-蜀汉虎将',
						zshy_ZSGSA_XJMZ: '标准-贤君明主',
						zshy_ZSGSA_YGSJ: '标准-勇冠三军',
						zshy_ZSGSA_WWQL: '标准-帷幄千里',
						zshy_ZSGSA_JGHY: '标准-巾帼红颜',
						zshy_ZSGSA_FENG: '神话再临-其疾如风',
						zshy_ZSGSA_HUO: '神话再临-侵略如火',
						zshy_ZSGSA_LIN: '神话再临-其徐如林',
						zshy_ZSGSA_SHAN: '神话再临-不动如山',
						zshy_ZSGSA_YIN: '神话再临-难知如阴',
						zshy_ZSGSA_LEI: '神话再临-动如雷震',
						zshy_ZSGSA_XDSW: '限定-神武',
						zshy_bancard: '封印',
						zshy_Yshenzhaoyun: '初神赵云',
						zshy_longpo: '龙魄',
						zshy_longpo_info: '【状态技】<li>防止你减少体力上限或翻面,你的手牌上限+4.<li>当你获得或失去牌后,若手牌数不足X张,你将手牌数摸至X张.(X为你的体力上限+4)<li>你可以将一张基本/锦囊牌当作任意基本/锦囊牌使用或打出.<li>你使用或打出牌时,根据花色执行不同效果:<br>♠️️:此牌无法响应;♣️️:你摸一张牌;♥️️:回复1点体力;♦️️此牌基础数值+1;🃏:增加1点体力上限.',
						zshy_ZguanyuBZ: '标关羽',
						zshy_wusheng: '武圣',
						zshy_wusheng_info: '【锁定技】<li>你可以将一张红色牌当作任意属性的【杀】使用或打出.<li>你使用的♦️️【杀】无距离限制;你使用的♥️️【杀】伤害基数+1.<li>当你使用【杀】指定唯一目标后,你弃置其一张手牌,若为【闪】则其不能响应此【杀】.<li>你的出啥次数+X.(X为你已损失体力值)',
						zshy_yijue: '义绝',
						zshy_yijue_info: '<li>出牌阶段限1次,你可以失去1点体力,令一名有手牌的其他角色展示一张手牌,获得之.若此牌为黑色,则该角色不能使用或打出牌,非锁定技失效,且受到来自你的红色【杀】的伤害+1直到回合结束.若此牌为红色,则该角色失去1点体力,你获得其一张牌.',
						zshy_ZzhangfeiBZ: '标张飞',
						zshy_paoxiao: '咆哮',
						zshy_paoxiao_info: '<li>锁定技,你使用【杀】无次数限制.<li>锁定技,当你使用的【杀】被【闪】抵消时,你获得一枚「咆哮」(→)当你因【杀】造成伤害时,你弃置所有「咆哮」并令伤害值+X(X为「咆哮」数).<li>回合结束阶段,若你武将牌上有「咆哮」,则摸X张牌.(X为「咆哮」数)<li>锁定技,当你装备区里的牌数变化后,若你的体力值不小于1,你可以视为使用一张【杀】.<li>当你使用牌指定角色目标后,若你的「咆哮」数大于等于其体力值,则其无法响应此牌.',
						zshy_tishen: '替身',
						zshy_tishen_info: '<li>限定技,准备阶段或濒死时,你可以将体力回复至上限,摸X张牌(X为你回复的体力值).',
						zshy_ZmachaoBZ: '标马超',
						zshy_MCmashu: '马术',
						zshy_MCmashu_info: '【锁定技】<li>你的进攻距离+2.',
						zshy_tieji: '铁骑',
						zshy_tieji_info: '<li>当你使用【杀】指定其他角色为目标后,你可以令目标角色不能响应此【杀】,且其所有非锁定技失效直到回合结束.你获得其一张牌并摸一张牌.<li>你使用的【杀】伤害+X.(X为你损失的体力值)',
						zshy_ZzhaoyunBZ: '标赵云',
						zshy_longdan: '龙胆',
						zshy_longdan_info: '<li>你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出,摸一张牌.',
						zshy_yajiao: '涯角',
						zshy_yajiao_info: '<li>锁定技,当你于回合外使用或打出手牌后,你可以获得一名角色区域的牌,摸一张牌.',
						zshy_ZliubeiBZ: '标刘备',
						zshy_rende: '仁德',
						zshy_rende_info: '<li>出牌阶段,你可以交给一名其他角色任意张牌,你获得等量枚「仁」,若该角色为同势力武将,则获得的「仁」数量翻倍.',
						zshy_renyi: '仁义',
						zshy_renyi_info: '<li>每轮游戏开始时,你获得X枚「仁」(X为存活蜀势力数);当你需要使用或打出基本牌时,你可以弃置2枚「仁」并视为使用或打出之.',
						zshy_ZsunquanBZ: '标孙权',
						zshy_zhiheng: '制衡',
						zshy_zhiheng_info: '<li>出牌阶段限1次,你可以弃置任意张牌并摸等量的牌,你根据弃置手牌数依次执行效果:<br>两张:获得1枚「守」.(当你受到伤害时,你可以弃置1枚「守」,取消之)<br>三张:摸一张牌<br>四张:获得1枚「攻」.(当你造成伤害时,你可以弃置1枚「攻」,令其伤害+1)<br>五张:回复1点体力.<br>六张:获得1枚「衡」.(你的手牌上限+X,X为「衡」的数量)',
						zshy_ZcaocaoBZ: '标曹操',
						zshy_jianxiong: '奸雄',
						zshy_jianxiong_info: '<li>当你受到伤害前,你可以获得对你造成伤害的牌并摸X张牌.(X为造成伤害角色的当前体力值)',
						zshy_hujia: '护驾',
						zshy_ZyuanshuBZ: '标袁术',
						zshy_wangzun: '妄尊',
						zshy_wangzun_info: '<li>当一名其他角色的准备阶段开始时,你可以摸一张牌,其获得1枚「妄尊」,有「妄尊」的角色手牌上限-1.<li>锁定技,当有「妄尊」的角色对你造成伤害时,其减少1枚「妄尊」.',
						zshy_tongji: '同疾',
						zshy_tongji_info: '<li>',
						zshy_ZganningBZ: '标甘宁',
						zshy_jinfan: '锦帆',
						zshy_jinfan_info: '【锁定技】<li>你的防御距离+1.',
						zshy_qixi: '奇袭',
						zshy_qixi_info: '<li>你使用黑色【杀】或黑色普通锦囊牌指定其他角色为目标后,你可以令其弃置一张牌,若其弃置的牌与你使用的牌颜色相同,则其无法响应此牌你获得其一张牌.',
						zshy_fenwei: '奋威',
						zshy_fenwei_info: '<li>',
						zshy_ZlvmengBZ: '标吕蒙',
						zshy_keji: '克己',
						zshy_keji_info: '【锁定技】<li>弃牌阶段开始时,你跳过此阶段并摸一张牌,若此时手牌数大于你的体力值,回复1点体力.',
						zshy_qinxue: '勤学',
						zshy_qinxue_info: '<li>出牌阶段限1次,你可以复制一张手牌,称为<勤学>牌,此牌不计入手牌上限.',
						zshy_botu: '博图',
						zshy_botu_info: '<li>任意角色的回合结束阶段,若其本回合内使用过至少4种花色,则你摸一张牌并获得1个额外的回合.',
						zshy_gongxin: '攻心',
						zshy_ZhuanggaiBZ: '标黄盖',
						zshy_kurou: '苦肉',
						zshy_kurou_info: '<li>出牌阶段限1次,你可以失去1点体力.<li>锁定技,你的手牌上限+X.(X为你的护甲数)<li>你受到的火焰伤害视为失去体力.',
						zshy_zhaxiang: '诈降',
						zshy_zhaxiang_info: '【锁定技】<li>当你失去1点体力后,你摸三张牌并获得1点护甲(最多获得5点护甲);若此时是你的出牌阶段,则你本回合获得此下效果:<br>①使用【杀】的次数+1,使用红色【杀】无距离限制且不能被【闪】响应,回复1点体力.(若体力满则获得1点护甲,最多获得5点护甲)',
						zshy_ZxiahoudunBZ: '标夏侯惇',
						zshy_ganglie: '刚烈',
						zshy_ganglie_info: '<li>当你受到1点伤害后,你可进行判定,若结果为:红色,你对伤害来源造成1点伤害,获得其一张牌;黑色,你令伤害来源失去1点体力,弃置其一张牌.',
						zshy_qingjian: '清俭',
						zshy_qingjian_info: '<li>当你得到牌后,你可以将任意张牌扣置于武将牌上.任意阶段结束时,你将这些牌交给一名其他角色,你获得X点护甲并摸一张牌.(X为你给出牌数的一半且向下取整)',
						zshy_ZzhangliaoBZ: '标张辽',
						zshy_tuxi: '突袭',
						zshy_tuxi_info: '<li>摸牌阶段摸牌时,你可以少摸任意张牌,获得等量的角色的各一张手牌.',
						zshy_zhengbing: '整兵',
						zshy_zhengbing_info: '<li>出牌阶段限1次.你可以重铸一张牌,若此牌为:<br>【杀】:你本回合手牌上限+2;<br>【闪】:你摸一张牌;<br>【桃】:你获得1点护甲.',
						zshy_powei: '破围',
						zshy_powei_info: '<li>出牌阶段开始时,你可以获得攻击范围内任意名角色各一张牌.',
						zshy_ZxuzhuBZ: '标许褚',
						zshy_luoyi: '裸衣',
						zshy_luoyi_info: '【锁定技】<li>摸牌阶段开始时,你多摸三张牌,直到你的下回合开始,你使用的【杀】或【决斗】造成伤害时,此伤害+1.',
						zshy_huwei: '虎威',
						zshy_huwei_info: '【锁定技】<li>你每回合使用的第一张【杀】无距离限制.<li>你每回合使用的第一张基本牌不计入使用次数.<li>你每回合第1次造成伤害后,你摸一张牌.',
						zshy_ZlvbuBZ: '标吕布',
						zshy_wushuang: '无双',
						zshy_wushuang_info: '【锁定技】<li>当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应.',
						zshy_liqu: '利驱',
						zshy_liqu_info: '<li>当你使用【杀】对一名其他角色造成伤害后,你可以获得其区域内的一张牌;若此牌不为装备牌,则视为你对其使用一张不能被无懈的【决斗】;若此牌为装备牌,则你摸一张牌.<li>你使用的【决斗】造成的伤害+X.(X为你已损失体力值)',
						zshy_ZhuaxiongBZ: '标华雄',
						zshy_yaowu: '耀武',
						zshy_yaowu_info: '【锁定技】<li>当一名角色对你造成伤害时,若此牌为红色,该角色选择回复1点体力或摸一张牌.否则你选择回复1点体力并摸两张牌.',
						zshy_shizhan: '势斩',
						zshy_shizhan_info: '<li>出牌阶段限X次,你可以选择一名其他角色.视为你对其使用一张【决斗】.(X为你已损失体力值)',
						zshy_ZzhugeliangBZ: '标诸葛亮',
						zshy_guanxing: '观星',
						zshy_guanxing_info: '【锁定技】<li>你的准备阶段,你观看牌顶七张牌,可以将其中任意张牌以任意顺序置于牌堆顶或牌堆底,选择回复1点体力或摸一张牌.',
						zshy_kongcheng: '空城',
						zshy_kongcheng_info: '【锁定技】<li>游戏开始时/你的回合开始阶段,你将所有手牌置于武将牌上作为「空城」.<li>你可以如手牌般使用或打出「空城」牌.<li>若你没有手牌,则你不能成为【杀】/【决斗】的目标.',
						zshy_ZzhouyuBZ: '标周瑜',
						zshy_yingzi: '英姿',
						zshy_yingzi_info: '【锁定技】<li>摸牌阶段,你多摸X张牌,你的手牌上限+X.(X为你的体力上限)',
						zshy_fanjian: '反间',
						zshy_fanjian_info: '<li>出牌阶段限1次,你可以观看其他角色的牌并获得其中一张,对其造成1点火焰伤害.',
						zshy_ronghuo: '融火',
						zshy_ronghuo_info: '【锁定技】<li>你造成的火焰伤害翻倍.',
						zshy_ZluxunBZ: '标陆逊',
						zshy_qianxun: '谦逊',
						zshy_qianxun_info: '【锁定技】<li>当你成为【顺手牵羊】或延时锦囊牌的目标后,取消之.<li>每当一张延时类锦囊牌或其他角色使用的普通锦囊牌生效时,若你是此牌的目标,你可以将所有手牌置于你的武将牌上,若如此做,此回合结束时,你获得你武将牌上的所有牌.',
						zshy_lianying: '连营',
						zshy_lianying_info: '【锁定技】<li>你的出牌阶段开始前,若场上有处于横置状态的角色,则本回合你使用或打出杀没有数量限制.<li>锁定技,你对已横置角色造成的属性伤害+1.<li>当你失去最后的手牌时,你可以使X名角色摸Y张牌.(x为你的体力上限,Y为该角色的体力值且至少为1)',
						zshy_ZhuatuoBZ: '标华佗',
						zshy_jijiu: '急救',
						zshy_jijiu_info: '<li>你的回合外,你可以将一张牌当作【桃】使用.',
						zshy_qingnang: '青囊',
						zshy_qingnang_info: '【锁定技】<li>你使用的【桃】回复值+1.<li>出牌阶段,你可以弃置一张手牌,令一名本回合内未成为过〖青囊〗的目标的角色回复至满体力.若你弃置的是黑色牌,则你本回合内不能再发动〖青囊〗.',
						zshy_ZsimayiBZ: '标司马懿',
						zshy_guicai: '鬼才',
						zshy_guicai_info: '<li>在任意角色的判定牌生效前,你摸一张牌,可以打出一张牌代替之.',
						zshy_fankui: '反馈',
						zshy_fankui_info: '<li>每当你受到1点伤害后,你可以获得伤害来源区域内的各一张牌并令其失去一点体力,你摸一张牌.',
						zshy_ZguojiaBZ: '标郭嘉',
						zshy_tiandu: '天妒',
						zshy_tiandu_info: '【锁定技】<li>你的判定阶段开始时,你进行1次额外的【闪电】判定.<li>你可以立即获得你的判定牌,摸x张牌.(x为你已损失的体力且至少为1)',
						zshy_yice: '遗策',
						zshy_yice_info: '【锁定技】<li>当你进入濒死状态时,你进行1次判定,若结果为♥️️,你将体力回复至1点.<li>回合开始时,你可以观看牌堆顶两张牌,获得其中一张牌并展示之:1.若该牌为基本牌,你获得技能<马术>直到回合结束,且本回合你可以多使用一张杀;2.若不为基本牌,你弃置你武将上的判定牌,摸一张牌.',
						zshy_yiji: '遗计',
						zshy_yiji_info: '【锁定技】<li>当你受到1点伤害后,你可以摸三张牌,可以将任意张手牌交给其他角色.<li>你的手牌上限为体力值的10倍.',
						zshy_ZhuangyueyingBZ: '标黄月英',
						zshy_jizhi: '集智',
						zshy_jizhi_info: '【锁定技】<li>每当你使用或打出一张非转化锦囊牌,你摸一张牌;<li>当其他角色使用的【无懈可击】结算完成后,你可以令其摸一张牌,你获得该【无懈可击】;<li>当你进行判定后,若判定结果为锦囊牌,你立即获得该牌.',
						zshy_qicai: '奇才',
						zshy_qicai_info: '【锁定技】<li>你的锦囊牌无视距离且不能被【无懈可击】响应;<li>弃牌阶段,你的非基本牌不计入手牌上限;<li>锁定技,你使用带有【应变】标签的牌可以无视条件直接生效.',
						zshy_ZdaqiaoBZ: '标大乔',
						zshy_guose: '国色',
						zshy_guose_info: '<li>出牌阶段,你可以选择1项:将一张♦️️牌当做【乐不思蜀】使用.<li>或弃置一张♦️️牌并弃置场上的一张【乐不思蜀】.选择完成后,你摸一张牌.<li>锁定技,当其他角色跳过出牌阶段后,你摸一张牌.',
						zshy_liuli: '流离',
						zshy_liuli_info: '<li>当你成为【杀】的目标时你摸一张牌,可以弃置一张牌将其转移给一名其他角色.(此角色不能是[杀]的使用者)【锁定技】<li>你计算与其他角色距离为1.',
						zshy_ZzhenjiBZ: '标甄姬',
						zshy_qingguo: '倾国',
						zshy_qingguo_info: '【锁定技】<li>你使用的黑色牌没有距离限制.你可以将一张黑色牌当做【闪】使用或打出.',
						zshy_luoshen: '洛神',
						zshy_luoshen_info: '<li>准备阶段或出牌阶段结束时,你可以进行判定并获得判定牌,若结果为黑色则可以继续判定,你以此法获得的牌不计入手牌上限.',
						zshy_ZdiaochanBZ: '标貂蝉',
						zshy_lijian: '离间',
						zshy_lijian_info: '<li>出牌阶段限2次,你可以弃置一张手牌并指定两名角色进行拼点,拼点赢的角色对没赢的角色造成1点伤害,之后各弃置一张牌',
						zshy_biyue: '闭月',
						zshy_biyue_info: '<li>准备和结束阶段,你可以摸一张牌,若你的装备区没有牌,则改为摸两张牌.',
						zshy_ZsunshangxiangBZ: '标孙尚香',
						zshy_xiaoji: '枭姬',
						zshy_xiaoji_info: '【锁定技】<li>每当你失去一张装备牌,你可以摸两张牌,若此时在你的回合内,你额外摸一张牌.<li>若你装备了武器牌,你的回合内使用杀没有次数限制.',
						zshy_jieyin: '结姻',
						zshy_jieyin_info: '<li>出牌阶段限1次,你可以选择一名角色并选择一张牌,若该角色为你,则你弃置此牌并选择回复1点体力或摸一张牌,否则你将此牌交给该角色,与其各选择回复1点体力或摸两张牌,最后其可以使用一张手牌.',
						zshy_ZweiyanSHZL: '风魏延',
						zshy_kuanggu: '狂骨',
						zshy_kuanggu_info: '【锁定技】<li>当你造成1点伤害后,你摸一张牌并回复1点体力.',
						zshy_qimou: '奇谋',
						zshy_qimou_info: '<li>出牌阶段限1次,若你的体力值大于1点,则你可以失去1点体力,令你本回合的进攻距离+1,你可以视为使用一张普通锦囊牌.',
						zshy_ZxiahouyuanSHZL: '风夏侯渊',
						zshy_shensu: '神速',
						zshy_shensu_info: '<li>判定阶段开始前/你的回合结束时,你可以 摸一张牌/翻面 并跳过之,视为对一名其他角色使用一张无视距离的【杀】.',
						zshy_shebian: '设变',
						zshy_shebian_info: '<li>当你 受到伤害/武将牌翻面 后,你 可以复原武将牌/摸一张牌,你可以视为对一名其他角色使用一张无视距离的【杀】,再移动场上一张牌并使用一张手牌.',
						zshy_ZcaorenSHZL: '风曹仁',
						zshy_jushou: '据守',
						zshy_jushou_info: '<li>你的回合结束阶段,你可以摸四张牌,回复1点体力并翻面,获得一张装备牌并可以使用之.',
						zshy_jiewei: '解围',
						zshy_jiewei_info: '<li>你可以将一张装备区内的牌当无懈可击使用;<li>当你翻面时,你可以移动一张牌,使用一张手牌.',
						zshy_ZxiaoqiaoSHZL: '风小乔',
						zshy_tianxiang: '天香',
						zshy_tianxiang_info: '<li>当你受到伤害时,你可以重铸一张非♥️️牌,可以交给一名其他角色一张♥️️牌防止之并选择1项:<br>①视为伤害来源令其失去X点体力;(X为你的体力值+1且最大值为2)<br>②视为伤害来源对其造成Y点伤害.(Y为你已损失的体力值+1且最大值为2)',
						zshy_hongyan: '红颜',
						zshy_hongyan_info: '<li>锁定技,你区域内的♠️️牌和♠️️判定牌均视为♥️️;<li>每回合限1次,任意角色的♥️️判定牌生效前,你可以将之改为1种非♥️️.',
						zshy_piaoling: '飘零',
						zshy_piaoling_info: '<li>当你失去一张♥️️牌后,你进行判定,若结果为♥️️,则你可以获得之并弃置一名角色区域内一张牌.',
						zshy_ZhuangzhongSHZL: '风黄忠',
						zshy_liegong: '烈弓',
						zshy_liegong_info: '<li>锁定技,你使用的【杀】无距离限制.<li>当你使用【杀】指定目标后,若其手牌大于一张/体力值大于1点/你未受伤,则你可以令其不能响应此【杀】且此【杀】对其的伤害基数+X(若其未/已受伤,则X为2/1).<li>当你对其他角色使用【杀】后,你令其获得〖没矢〗,并将此【杀】置于其武将牌上称为「矢」.<li>当你使用【杀】对其他角色造成伤害后,其获得1枚「箭伤」.',
						zshy_moshi: '没矢',
						zshy_moshi_info: '<li>出牌阶段,你可以获得一张「矢」.(若你有「箭伤」,则需失去1点体力)<li>每轮回合开始时,你失去X点体力;你的手牌上限-X.(X为「箭伤」的数量)',
						zshy_ZzhoutaiSHZL: '风周泰',
						zshy_buqu: '不屈',
						zshy_buqu_info: '【锁定技】<li>你的手牌上限+X.(X为「创」的数量)<li>当你进入濒死状态时,你亮出牌堆顶1张牌并置于你的武将牌上,称为「创」,若此牌的点数与你已有的「创」点数相同,则你获得此牌,否则你回复体力至1点,摸等同你已损失体力张牌.',
						zshy_fenji: '奋激',
						zshy_fenji_info: '<li>当一名角色的手牌不因赠予或交给而被另一名角色得到后,或一名角色的手牌被另一名角色弃置后,你可以失去1点体力并摸一张牌,令其摸两张牌.',
						zshy_ZyujiSHZL: '风于吉',
						zshy_guhuo: '蛊惑',
						zshy_guhuo_info: '<li>每名角色的回合限X次,你可以扣置一张手牌当作一张基本牌或普通锦囊牌使用或打出.其他角色同时选择是否质疑.你展示此牌.若有质疑的角色:若此牌为假,则此牌作废,且所有质疑者摸两张牌并回复1点体力;为真,则所有质疑角色于此牌结算完成后依次弃置一张牌并失去1点体力,并获得技能〖缠怨〗.(X为你的体力上限)',
						zshy_guhuo_guess: '蛊惑',
						zshy_chanyuan: '缠怨',
						zshy_chanyuan_info: '【锁定技】<li>你不能于〖蛊惑〗的结算流程中进行质疑.当你的体力值不大于1时,你的其他技能失效.',
						zshy_guhuo_ally: '信任',
						zshy_guhuo_betray: '质疑',
						zshy_guhuo_ally_bg: '真',
						zshy_guhuo_betray_bg: '假',
						zshy_ZzhangjiaoSHZL: '风张角',
						zshy_leiji: '雷击',
						zshy_leiji_info: '<li>①当你使用【闪】或【闪电】,或打出【闪】时,你可以进行判定.<li>②当判定的判定牌生效后,若结果为:<br>♠️️,你回复2点体力.<br>♣️️:你回复1点体力.<br>你可对一名角色造成同等雷电伤害.',
						zshy_guidao: '鬼道',
						zshy_guidao_info: '<li>一名角色的判定牌生效前,你可以打出一张黑色牌作为判定牌并获得原判定牌.若你以此法打出的牌为♠️️2-9,则你摸一张牌.',
						zshy_ZshenguanyuSHZL: '风神关羽',
						zshy_wushen: '武神',
						zshy_wushen_info: '<li>锁定技,你可以将一张牌当作任意属性的【杀】使用或打出.<li>你使用红色牌无距离限制、不可响应且基础数值+1,你使用【杀】的次数+X.(X为你已损失体力值+1)<li>当你使用【杀】指定目标后,你观看并弃置该角色一张牌.',
						zshy_wuhun: '武魂',
						zshy_wuhun_info: '【状态技】<li>当你受到伤害或失去体力时,你摸X张牌,可以令一名其他角色获得X枚「魂」(X为触发值).<li>当你死亡时,你令所有有「魂」的角色弃置所有「魂」,随机弃置X张牌并失去X点体力(X为其弃置的「魂」数量),若X不小于其的体力值,则改为直接结算死亡.',
						zshy_ZshenlvmengSHZL: '风神吕蒙',
						zshy_shelie: '涉猎',
						zshy_shelie_info: '【锁定技】<li>任意角色结束阶段,若其本回合使用过至少4种花色或3种类别的牌,则你摸两张牌并获得一个额外的出牌阶段.<li>当你摸牌时,你改为依次随机获得共计X张某种类型或位置的牌(X为摸牌数+1).<li>弃牌阶段开始时,你跳过此阶段;出牌阶段结束时,你摸一张牌并回复1点体力.',
						zshy_SLMgongxin: '攻心',
						zshy_SLMgongxin_info: '<li>当你使用牌指定其他角色/其他角色使用牌指定你为唯一目标后,你可以观看对方的手牌并选择一项:<br>①获得其中一张牌;<br>②将其中一张牌置于牌堆顶并从牌堆底摸一张牌.',
						zshy_ZdianweiSHZL: '火典韦',
						zshy_qiangxi: '强袭',
						zshy_qiangxi_info: '<li>出牌阶段限2次,你可以弃置一张武器牌,对一名其他角色造成2点伤害,或直接对一名其他角色造成1点伤害.',
						zshy_ninge: '狞恶',
						zshy_ninge_info: '【锁定技】<li>当一名角色于一回合内再次受到伤害后,若该角色/伤害来源为你,则你摸一张牌,若其不为你,则弃置其X张牌.(X为其手牌与其体力值之差且至少为1)',
						zshy_ZxunyuSHZL: '火荀彧',
						zshy_quhu: '驱虎',
						zshy_quhu_info: '<li>出牌阶段限1次,你可以与一名其他角色拼点,若你赢,则该角色对另一名由你指定的角色造成X点伤害.若你没赢,你受到1点伤害.(X为该角色与指定角色的体力值之差、你的体力值两者之间最大值)',
						zshy_jieming: '节命',
						zshy_jieming_info: '<li>当你受到1点伤害后或死亡时,你可令一名角色摸X张牌,若其手牌数大于其体力上限且该角色不为你,则其将手牌弃置至与其体力上限相同,你选择回复1点体力或摸Y张牌.(X为你与其体力和值,Y为弃置牌数)',
						zshy_ZpangtongSHZL: '火庞统',
						zshy_lianhuan: '连环',
						zshy_lianhuan_info: '【锁定技】<li>出牌阶段,你可以重铸1张黑色牌,视为使用1张【铁索连环】.<li>其他横置角色成为牌的目标后,则你可以令其随机弃置1张牌.',
						zshy_niepan: '涅槃',
						zshy_niepan_info: '【限定技】<li>当你处于濒死状态时,你复原你的武将牌,摸四张牌并回复至满体力.选择获得1个未获得的技能:〖八阵〗/〖火计〗/〖看破〗.',
						zshy_ZwolongzhugeSHZL: '火卧龙诸葛',
						zshy_huoji: '火计',
						zshy_huoji_info: '<li>出牌阶段限1次,你可以选择一名其他角色,令其于此事件中非锁定技失效,你弃置任意张牌并对其造成等量点火焰伤害,同时你受到本次伤害超出你体力值的同等火焰伤害,最后若其死亡,则你选择回复1点体力或摸一张牌.',
						zshy_bazhen: '八阵',
						zshy_bazhen_info: '【锁定技】<li>你始终视为装备着【八卦阵】.<li>每回合首次有黑色判定牌生效后,你摸一张牌.',
						zshy_kanpo: '看破',
						zshy_kanpo_info: '【锁定技】<li>每名角色回合开始前,若你没有已记录的牌名,则你可以依次记录至多7个牌名.<li>其他角色使用〖看破〗记录的牌时,你可以移去1个记录并令此牌无效,摸一张牌.<li>你可以将一张牌当作【无懈可击】使用.<li>你使用的【无懈可击】不可被响应.',
						zshy_cangzhuo: '藏拙',
						zshy_cangzhuo_info: '<li>弃牌阶段,你的锦囊牌不计入手牌上限.',
						zshy_ZtaishiciSHZL: '火太史慈',
						zshy_tianyi: '天义',
						zshy_tianyi_info: '<li>出牌阶段限X次(X为存活角色数),你可以强制与一名有手牌的其他角色拼点,若你赢,则本回合你使用牌无距离限制且令以下属性+1:【杀】的使用次数、【杀】的指定目标数.',
						zshy_hanzhan: '酣战',
						zshy_hanzhan_info: '【锁定技】<li>当你拼点结束后,你获得双方的拼点牌.<li>当你发起拼点或成为拼点目标时,你可以令对方随机将1张牌作为其的拼点牌.',
						zshy_ZpangdeSHZL: '火庞德',
						zshy_jianchu: '鞬出',
						zshy_jianchu_info: '<li>当你使用【杀】指定一名角色为目标后,你可以获得其任意区域的一张牌,根据获得牌类型执行对应效果:<br>①非基本牌:此【杀】不可被【闪】响应且你本回合使用【杀】的次数上限+1;<br>②基本牌:你获得此【杀】并回复1点体力.',
						zshy_PDmashu: '马术',
						zshy_PDmashu_info: '<li>你的进攻距离+1.',
						zshy_ZyanliangwenchouSHZL: '火颜良文丑',
						zshy_shuangxiong: '双雄',
						zshy_shuangxiong_info: '<li>出牌阶段开始前,你可以弃置一张牌.若如此做,你本回合内可以将一张与此牌颜色不同的牌当做【决斗】使用.<li>任意角色受到非你使用的【决斗】造成的伤害后,你摸一张牌.<li>你使用的【决斗】对其他角色造成的伤害+1.',
						zshy_ZyuanshaoSHZL: '火袁绍',
						zshy_luanji: '乱击',
						zshy_luanji_info: '【锁定技】<li>其他角色于你的回合内打出牌后,你获得此牌对应的所有实体牌.<li>出牌阶段,你可以将2张颜色相同的牌当作任意属性【杀】或【万箭齐发】对任意名其他角色使用.(以此法使用的【杀】不计入使用次数)',
						zshy_xueyi: '血裔',
						zshy_ZshenzhouyuSHZL: '火神周瑜',
						zshy_yeyan: '业炎',
						zshy_yeyan_info: '<li>出牌阶段限1次,你可以重铸任意张牌,可以对一名角色造成1点火焰伤害,最后可以对另一名角色造成2点火焰伤害.<li>任意角色回合结束阶段,若其本回合使用过至少4种花色和3种类别的牌,则你可以对一名其他角色造成3点火焰伤害.',
						zshy_qinyin: '琴音',
						zshy_qinyin_info: '【锁定技】<li>任意角色因弃置而一次性失去至少2张牌后,你可以选择令任意名角色各回复1点体力,选择令任意名角色各失去1点体力.',
						zshy_ZshenzhugeliangSHZL: '火神诸葛亮',
						zshy_qixing: '七星',
						zshy_qixing_info: '【锁定技】<li>游戏开始时/当你回复体力、造成伤害后或〖狂风〗被触发后,你将牌堆顶的7/1张牌置于武将牌上,称为「星」;你的手牌上限+X(X为「星」的数量).<li>当你发动〖七星〗或你的摸牌阶段结束后,你可以用任意张牌交换等量的「星」.',
						zshy_dawu: '大雾',
						zshy_dawu_info: '【锁定技】<li>游戏开始阶段,你获得1枚「雾」.<li>你的回合结束阶段,你可以弃置任意枚「星」,令等量名没有「雾」的角色各获得1枚「雾」直到你的下个出牌阶段开始时.<li>有「雾」的角色受到非雷电/雷电伤害时,摸X张牌并防止之/令伤害来源获得X枚「风」(X为伤害值).',
						zshy_kuangfeng: '狂风',
						zshy_kuangfeng_info: '【锁定技】<li>你的回合开始或结束时,你可以弃置任意枚「星」,令等量名没有「雾」的角色各获得1枚「风」.<li>有「风」的角色受到非火焰/火焰伤害时,你摸X张牌/其弃置1枚「风」并令伤害值+X(X为伤害值).',
						zshy_ZxuhuangSHZL: '林徐晃',
						zshy_duanliang: '断粮',
						zshy_duanliang_info: '<li>你可以将一张黑色牌当做【兵粮寸断】使用.<li>你使用【兵粮寸断】无距离限制.<li>任意其他角色判定阶段开始时,若其判定区有牌,则你可以获得其中一张并令其跳过摸牌阶段.',
						zshy_jiezi: '截辎',
						zshy_jiezi_info: '<li>当有角色跳过摸牌阶段后,你可选择一名角色,若其没有「辎」,则获得一枚「辎」并摸一张牌,否则其摸两张牌.<li>一名角色的摸牌阶段结束时,若其有「辎」,则你移去其「辎」,令其获得一个额外的摸牌阶段.',
						zshy_ZcaopiSHZL: '林曹丕',
						zshy_fangzhu: '放逐',
						zshy_fangzhu_info: '【锁定技】<li>回合开始时,或当你受到1点伤害后,你可以令一名角色执行一项(X为你的已损失体力值+1):<br>①翻面并摸X张牌;<br>②随机弃置X张牌并失去1点体力;<br>③非状态技失效直到其回合结束;<br>④本回合不能使用或打出手牌.',
						zshy_xingshang: '行殇',
						zshy_xingshang_info: '【锁定技】<li>其他角色死亡时,你可以获得其武将牌上1个技能,可以选择一项:<br>①回复1点体力;<br>②获得其区域内所有牌;<br>③依次执行前2项.',
						zshy_songwei: '颂威',
						zshy_songwei_info: '【主公技】<li>其他魏势力的角色的判定牌结果为黑色且生效后,你选择回复1点体力或摸两张牌.',
						zshy_ZsunjianSHZL: '林孙坚',
						zshy_yinghun: '英魂',
						zshy_yinghun_info: '【锁定技】<li>回合开始或结束时,你可以选择:<br>①令一名角色摸X张牌;<br>②令一名角色随机弃置X张牌;<br>执行完选项后你摸一张牌并选择一张牌使用.(X为你已损失体力值+1)',
						zshy_wulie: '武烈',
						zshy_wulie_info: '<li>出牌阶段,你可以失去1点体力并令一名没有「烈」的角色获得「烈」,你摸1张牌并获得1点护甲.<li>有「烈」的角色受到不小于其体力值的伤害时,防止之并弃置「烈」.<li>你对没有手牌的角色造成的伤害+1.',
						zshy_ZdongzhuoSHZL: '林董卓',
						zshy_jiuchi: '酒池',
						zshy_jiuchi_info: '<li>你可以将一张♠️️牌当做【酒】使用.<li>你的♠️️牌不计入手牌上限.<li>你使用【酒】无次数限制,且当你于回合内使用带有【酒】效果的【杀】造成伤害后,你令你的〖酒池〗效果转变为回合结束时摸两张牌直到回合结束.',
						zshy_roulin: '肉林',
						zshy_roulin_info: '【锁定技】<li>你对女性角色使用【杀】时,其需连续使用两张【闪】才能抵消.<li>当你对女性角色造成1点伤害后,你夺取其1点体力上限.',
						zshy_benghuai: '崩坏',
						zshy_benghuai_info: '【锁定技】<li>你的结束阶段,若你的体力不为全场最少,你失去1点体力或减1点体力上限,摸一张牌.',
						zshy_baonue: '暴虐',
						zshy_baonue_info: '【主公技】<li>其他群雄角色造成1点伤害后,你可进行判定,若为♠️️,你回复1点体力并获得判定牌.',
						zshy_ZzhurongSHZL: '林祝融',
						zshy_juxiang: '巨象',
						zshy_juxiang_info: '【锁定技】<li>其他角色使用的【南蛮入侵】结算后,你获得此牌对应的所有实体牌.<li>当你成为【南蛮入侵】的目标后,则你摸一张牌并令此牌对你无效.<li>你的回合开始时,你从牌堆或弃牌堆中随机获得一张【南蛮入侵】.',
						zshy_lieren: '烈刃',
						zshy_lieren_info: '<li>当你造成伤害后,你可以与其拼点,若其没赢,则你获得其1张牌并对其造成1点伤害.',
						zshy_changbiao: '长标',
						zshy_changbiao_info: '<li>出牌阶段限1次,你可以弃置任意张牌并视为对X名角色使用一张不计次限且无视距离的刺【杀】(X为你的体力值),你于回合结束时摸Y张牌(Y为你以此法弃置的牌数).',
						zshy_ZmenghuoSHZL: '林孟获',
						zshy_huoshou: '祸首',
						zshy_huoshou_info: '【锁定技】<li>【南蛮入侵】对你无效.<li>你视为所有【南蛮入侵】的伤害来源.<li>当场上有其他角色使用【南蛮入侵】时,你摸一张牌.',
						zshy_zaiqi: '再起',
						zshy_zaiqi_info: '你的回合准备/结束阶段,你可以亮出牌堆顶的X张牌(X为7-你的体力值),并回复Y点体力(Y为其中♥️️牌的数目).你将这些♥️️牌置入弃牌堆,并获得其余的牌.',
						zshy_ZjiaxuSHZL: '林贾诩',
						zshy_wansha: '完杀',
						zshy_wansha_info: '<li>任意角色进入濒死状态时,你可以令任意名不为你与其的角色本回合非状态技失效且不能使用带有『回复』标签的基本牌.',
						zshy_luanwu: '乱武',
						zshy_luanwu_info: '<li>出牌阶段限1次,你可令所有其他角色依次选择一项:①对距离最近(或之一)的角色使用一张【杀】;②失去1点体力.结算完成后,你可视为使用一张【出其不意】(无距离限制).',
						zshy_weimu: '帷幕',
						zshy_weimu_info: '【锁定技】<li>你不能成为锦囊牌的目标.<li>当你于回合内受到伤害时,你防止此伤害并摸2X张牌(X为伤害值).',
						zshy_ZlusuSHZL: '林鲁肃',
						zshy_haoshi: '好施',
						zshy_haoshi_info: '<li>摸牌阶段开始时,你可以多摸X张牌.(X为场上角色数)<li>摸牌阶段结束时,你可以将任意手牌数交给一名其他角色并获得如下效果直到你下回合开始:当你成为【杀】或普通锦囊牌的目标后,其可以交给你一张手牌.',
						zshy_dimeng: '缔盟',
						zshy_dimeng_info: '<li>出牌阶段限1次,你可令两名其他角色交换手牌.若如此做,你的手牌上限+X直至你的下一个回合开始.(X为这两名角色手牌数之差)',
						zshy_ZshenlvbuSHZL: '林神吕布',
						zshy_kuangbao: '狂暴',
						zshy_kuangbao_info: '【锁定技】<li>任意角色回合开始时,若「怒」的数量大于X,则你弃置点那X枚「怒」、增加1点体力上限并回复1点体力,否则你摸一张牌并获得1枚「怒」;当你受到或造成伤害后,你获得Y枚「怒」(X为你的体力上限,Y为伤害值,若你拥有〖无双〗,则Y+1).',
						zshy_wuqian: '无前',
						zshy_wuqian_info: '<li>出牌阶段每名其他角色限1次,你可以弃置2枚「怒」并摸两张牌,对一名其他角色造成1伤害并令其本回合非锁定技失效.',
						zshy_wumou: '无谋',
						zshy_wumou_info: '【锁定技】<li>你的非基本、装备牌均视为【决斗】.<li>当你受到非基本牌的伤害后,获得1枚「怒」并摸一张牌.<li>你使用【杀】的次数+X.(X为你已损失体力)',
						zshy_shenfen: '神愤',
						zshy_shenfen_info: '<li>出牌阶段限1次,你可以弃置X枚「怒」,并对所有其他角色各造成1点伤害,令这些角色各弃置所有牌,若有角色因此死亡,则你摸X张牌并重置〖神愤〗,否则你选择失去1点体力或翻面.(X为存活角色数-1)<li>当你造成伤害后,若该角色体力不小于你,则你受到1点伤害.',
						zshy_SLBwushuang: '无双',
						zshy_SLBwushuang_info: '【锁定技】<li>当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应.<li>你使用【杀】或【决斗】造成的伤害+X.(X为你已损失体力值)',
						zshy_ZshencaocaoSHZL: '林神曹操',
						zshy_guixin: '归心',
						zshy_guixin_info: '【锁定技】<li>任意角色受到1点伤害前,若其为你/本轮你未记录该角色,则你与其各摸一张牌并记录该角色,你可以获得任意名角色区域内各一张牌,若受到伤害的角色为你,则你视为对被获得牌的角色依次造成1点神属性伤害.',
						zshy_feiying: '飞影',
						zshy_feiying_info: '【锁定技】<li>你的防御距离+1;你的手牌上限+X.(X为你的体力上限)',
						zshy_ZzhangheSHZL: '山张郃',
						zshy_ZdengaiSHZL: '山邓艾',
						zshy_ZjiangweiSHZL: '山姜维',
						zshy_ZliushanSHZL: '山刘禅',
						zshy_ZsunceSHZL: '山孙策',
						zshy_ZzhangshaozhanghongSHZL: '山张昭张纮',
						zshy_ZzuociSHZL: '山左慈',
						zshy_ZcaiwenjiSHZL: '山蔡文姬',
						zshy_ZshensimayiSHZL: '山神司马懿',
						zshy_renjie: '忍戒',
						zshy_renjie_info: '【锁定技】<li>当你造成伤害时,你可以防止之并获得等量枚「忍」.<li>当你需要响应其他角色使用的牌时,若你未响应,则你获得1枚「忍」.<li>任意角色的回合结束时,若你的「忍」大于等于X,则你失去X枚「忍」并获得1枚「破」.(X为你的体力上限)',
						zshy_lianpo: '连破',
						zshy_lianpo_info: '【锁定技】<li>其他角色死亡后,你获得1枚「破」;任意角色的回合结束后,你可以弃置1枚「破」、回复1点体力并摸一张牌,复原武将牌并执行1个额外的回合.',
						zshy_baiyin: '拜印',
						zshy_baiyin_info: '【觉醒技】<li>任意角色的回合结束前,若你的「忍」数量不小于你的体力上限,则你减少1点体力上限并选择回复1点体力并摸一张牌,获得1枚「破」和〖鬼才〗、〖放逐〗、〖集智〗、〖制衡〗、〖完杀〗.',
						zshy_ZshenzhaoyunSHZL: '山神赵云',
						zshy_longhun: '龙魂',
						zshy_longhun_info: '【状态技】<li>你可以将至多两张同花色的牌按以下规则使用或打出:♥️️当【桃】、♦️️当【火杀】、♣️️当【闪】、♠️️当【无懈可击】.<li>若你发动〖龙魂〗时使用或打出的牌数大于1,则你令此牌不可响应、不计次限且牌面数值+1,可以获得一名角色区域内一张牌.',
						zshy_juejing: '绝境',
						zshy_juejing_info: '【状态技】<li>防止你减少体力上限;当你进入或脱离濒死状态时或其他角色受到伤害后,你摸X张牌(X为你的已损失体力+1).<li>你的手牌上限+X.(X为你的体力上限)',
						zshy_ZwangjiSHZL: '阴王基',
						zshy_ZyanyanSHZL: '阴严颜',
						zshy_ZwangpingSHZL: '阴王平',
						zshy_ZlujiSHZL: '阴陆绩',
						zshy_ZsunliangSHZL: '阴孙亮',
						zshy_ZpengliangpengyueSHZL: '阴剻良剻越',
						zshy_ZxuyouSHZL: '阴许攸',
						zshy_ZluzhiSHZL: '阴卢植',
						zshy_ZshenliubeiSHZL: '阴神刘备',
						zshy_longnu: '龙怒',
						zshy_longnu_info: '【锁定技】<li>你可以将一张 黑/红 色牌当作 雷/火 属性的【杀】使用或打出.<li>你使用 雷/火 【杀】无 次数/距离 限制.<li>你使用 雷/火 【杀】无法响应/伤害+1.<li>出牌阶段开始时,你选择一项:①失去1点体力并摸两张牌;②减少1点体力上限并摸四张牌.<li>当你击杀一名角色时,你增加1点体力上限并回复1点体力.',
						zshy_jieying: '结营',
						zshy_jieying_info: '【锁定技】<li>你的手牌上限+X(X为全场已横置角色数);若你已受伤,则防止你即将受到的属性伤害.<li>游戏开始时,或当你的武将牌重置时,你摸X张牌并横置之.(X为场上已横置角色数量)<li>任意角色结束阶段,你可以令一名角色横置或重置.',
						zshy_ZshenluxunSHZL: '阴神陆逊',
						zshy_junlve: '军略',
						zshy_junlve_info: '【锁定技】<li>当你受到或造成伤害后,你获得X个「军略」.(X为伤害值)<li>出牌阶段开始时,你摸Y张牌,可以令至多Y名角色横置或重置.(Y为「军略」的数量且至多为存活角色数)',
						zshy_cuike: '摧克',
						zshy_cuike_info: '【锁定技】<li>准备阶段或结束阶段,你可以获得一名角色区域内1张牌,可以对一名角色造成1点伤害.<li>其他角色使用红色基本牌或普通锦囊牌指定唯一目标时,你可以弃置1枚「军略」并令此牌无效,若此牌带有『伤害』标签,则你对其造成1点火焰伤害.',
						zshy_zhanhuo: '绽火',
						zshy_zhanhuo_info: '<li>出牌阶段,你可以选择任意名已横置的其他角色并弃置X枚「军略」,你先依次弃置这些角色至多X张牌,再选择对其中一名角色造成X点火焰伤害(X为你选择的角色数).',
						zshy_ZyuanshuSHZL: '雷袁术',
						zshy_yongsi: '庸肆',
						zshy_yongsi_info: '【锁定技】<li>你的手牌上限+X(X为场上势力数).<li>你的摸牌阶段,你多模X张(X为场上势力数).',
						zshy_weidi: '伪帝',
						zshy_ZhaozhaoSHZL: '雷郝昭',
						zshy_zhengu: '镇骨',
						zshy_zhengu_info: '<li>准备阶段,或当你受到伤害后,你记录一名未记录的其他角色.<li>已记录的角色回合开始/结束时,你可以令其将手牌数摸或弃至与你相同.<li>你的回合结束时,你可以令一名其他角色将手牌数摸或弃至与你相同.',
						zshy_ZchendaoSHZL: '雷陈到',
						zshy_ZzhugezhanSHZL: '雷诸葛瞻',
						zshy_ZzhoufeiSHZL: '雷周妃',
						zshy_ZguanqiujianSHZL: '雷毋丘俭',
						zshy_ZlukangSHZL: '雷陆抗',
						zshy_ZzhangxiuSHZL: '雷张绣',
						zshy_ZshenzhangliaoSHZL: '雷神张辽',
						zshy_duorui: '夺锐',
						zshy_duorui_info: '【状态技】<li>其他角色回合开始前,你可以令其1个技能失效直至其回合结束.<li>当你即将对目标角色造成伤害时,你可以选择任意一项:<br>①获得其武将牌上1个技能并令其该技能失效直至其回合开始前;<br>②移除其武将牌上1个技能;<br>③减少其1点体力上限.',
						zshy_zhiti: '止啼',
						zshy_zhiti_info: '【锁定技】<li>任意角色摸牌阶段摸牌时,你可以摸一张牌,使用一张牌,若如此做,你令该角色此阶段摸牌数-1.<li>任意其他角色回合结束时,你可以令其选择复原或废除1个装备栏.<li>你的回合结束时,你可以选择复原1个装备栏.',
						zshy_ZshenganningSHZL: '雷神甘宁',
						zshy_poxi: '魄袭',
						zshy_poxi_info: '<li>出牌阶段限1次,你可以选择一名角色并观看其的手牌,可以弃置你与其区域内至多5张花色不同的牌,若以此法弃置的牌总数至少为:<br>①:则你摸两张牌;<br>②:则你回复1点体力;<br>③:则你跳过弃牌阶段;<br>④:则你执行1个额外回合;<br>⑤:则你增加1点体力上限.',
						zshy_SGNjieying: '劫营',
						zshy_SGNjieying_info: '【锁定技】<li>准备阶段,你获得1枚「营」;结束阶段,你可以交给至多X名其他角色各1枚「营」(X为你的「营」数量).<li>当你死亡时,你可以令一名角色获得你所有的「营」,可以令任意名有「营」的其他角色弃置所有「营」和所有牌.<li>有「营」的角色摸牌阶段摸牌数、使用【杀】的次数、手牌上限+Y(Y为其「营」的数量).<li>有「营」的其他角色回合结束后,你可以获得其1枚「营」,可以获得其区域内任意张牌.',
						zshy_ZshenzhangfeiXD: '武神张飞',
						zshy_shencai: '神裁',
						zshy_shencai_info: '<li>出牌阶段限1次,你可以对一名其他角色发动〖神裁〗(X为你的体力值);任意角色回合结束后,所有「死」数量大于体力值或存活角色数的角色依次结算死亡.<li>其他角色出牌阶段开始时,你可以判定并获得判定牌和其一张牌,根据判定结果令其获得以下对应效果:<br>①♠️️(<笞>),当你受到1点伤害后,失去1点体力上限;<br>②♣️️(<杖>),你不能响应带有『伤害』标签的基本牌和普通锦囊牌;<br>③♥️️(<流>),回合结束时,你将武将牌翻至背面;<br>④♦️️(<徒>),当你以此法外失去牌后,随机弃置一张牌;<br>⑤🃏(<裁>),当你回复体力时,摸一张牌并取消之.<br>⑥重复获得,改为获得1枚<死>.',
						zshy_xunshi: '巡使',
						zshy_xunshi_info: '【锁定技】<li>你使用🃏牌与【杀】无距离和次数限制;你的🃏牌不计入手牌上限;你区域内的多目标锦囊牌和对应判定牌均视为🃏.<li>你可以将一张🃏牌当做任意基本牌或延时锦囊牌使用或打出;当你使用🃏基本牌或普通锦囊牌指定目标后,你可以为此牌增加或减少任意个目标.',
						zshy_ZshenmachaoXD: '武神马超',
						zshy_shouli: '狩骊',
						zshy_shouli_backup: '狩骊',
						zshy_shouli_info: '【锁定技】<li>每轮游戏开始时,你可以令所有角色依次执行一项:<br>①使用一张装备牌并摸一张牌;<br>②随机使用牌堆或弃牌堆中一张装备牌.<li>你可以将场上一张黑色装备牌当作【杀】(无视距离且不计次限),非黑色装备牌当作【闪】使用或打出;你的进攻距离+X(X为场上有牌的角色数).',
						zshy_hengwu: '横骛',
						zshy_hengwu_info: '【锁定技】<li>当你使用或打出牌时,满足以下条件触发指定效果:<br>①若你的手牌中没有与此牌花色相同的牌,则你可以摸X张牌(X为场上与此牌花色相同的牌数且至少为1);<br>②若此牌为【杀】或【闪】,则你可以令一名其他角色本回合非状态技失效.<li>非锁定或状态技失效的角色即将受到伤害时,你可以选择一项:<br>①令其摸两张牌并回复非锁定或状态技;<br>②令其受到的伤害翻倍并改为雷属性.',
					},
				};
				for (var i in zshy_ZSGSA_.character) {
					if (zshy_ZSGSA_.translate[i]) {
						if (zshy_ZSGSA_.translate[i].indexOf('初') == 0) zshy_ZSGSA_.translate[i + '_prefix'] = '初';
						if (zshy_ZSGSA_.translate[i].indexOf('标') == 0) zshy_ZSGSA_.translate[i + '_prefix'] = '标';
						if (zshy_ZSGSA_.translate[i].indexOf('风') == 0) zshy_ZSGSA_.translate[i + '_prefix'] = '风';
						if (zshy_ZSGSA_.translate[i].indexOf('火') == 0) zshy_ZSGSA_.translate[i + '_prefix'] = '火';
						if (zshy_ZSGSA_.translate[i].indexOf('林') == 0) zshy_ZSGSA_.translate[i + '_prefix'] = '林';
						if (zshy_ZSGSA_.translate[i].indexOf('山') == 0) zshy_ZSGSA_.translate[i + '_prefix'] = '山';
						if (zshy_ZSGSA_.translate[i].indexOf('阴') == 0) zshy_ZSGSA_.translate[i + '_prefix'] = '阴';
						if (zshy_ZSGSA_.translate[i].indexOf('雷') == 0) zshy_ZSGSA_.translate[i + '_prefix'] = '雷';
						if (zshy_ZSGSA_.translate[i].indexOf('武') == 0) zshy_ZSGSA_.translate[i + '_prefix'] = '武';
					}
					for (var i in zshy_ZSGSA_.character) {
						zshy_ZSGSA_.character[i][4].push('ext:诸神寰宇/image/character/' + i + '.jpg');
					}
				}
				lib.config.all.characters.add('zshy_ZSGSA_');
				lib.config.characters.add('zshy_ZSGSA_');
				lib.translate.zshy_ZSGSA__character_config = '重置三国';
				return zshy_ZSGSA_;
			});
		},
		config: {
			Top: {
				name: '———★游戏功能★———',
				clear: true,
			},
			WJQZ: {
				name: '武将前缀',
				intro: '<li>搬运魔改自<第叁幻界>,特此致谢!<li>选择后,调整本扩展武将分包中对应武将的前缀:①默认:原色调;②高亮:改色调.',
				init: '2',
				item: {
					0: '默认',
					1: '隐藏',
					2: '高亮',
				},
			},
			KPBJ: {
				name: '卡牌背景',
				intro: '<li>搬运魔改自<倾国倾城>,特此致谢!<li>选择后,可以根据自己的喜好选择卡背样式.',
				init: '默认',
				item: {
					默认: '默认',
					传统: '传统',
					复古: '复古',
					科幻: '科幻',
					石金: '石金',
					无名: '无名',
					周年: '周年',
					纯金: '纯金',
					古典: '古典',
					金龙: '金龙',
					无边: '无边',
					炫彩: '炫彩',
				},
				onclick(item) {
					game.saveConfig('extension_诸神寰宇_KPBJ', item);
				},
				visualMenu(node, link) {
					node.style.height = node.offsetWidth * 1.4 + 'px';
					node.style.backgroundSize = '100% 100%';
					node.className = 'button character incardback';
					node.setBackgroundImage('extension/诸神寰宇/other/Picture/Cardback/' + link + '.jpg');
				},
			},
			WJBJ: {
				name: '武将背景',
				intro: '选择后,可以根据自己的喜好选择武将背面样式.',
				init: '默认',
				item: {
					默认: '默认',
					复古: '复古',
					金龙: '金龙',
					无名: '无名',
					银龙: '银龙',
					纸金: '纸金',
					周年: '周年',
					暗影: '暗影',
					低调: '低调',
					耀金: '耀金',
					朴素: '朴素',
					男影: '男影',
					女影: '女影',
					炫彩: '炫彩',
				},
				onclick(item) {
					game.saveConfig('extension_诸神寰宇_WJBJ', item);
				},
				visualMenu(node, link) {
					node.style.height = node.offsetWidth * 1.4 + 'px';
					node.style.backgroundSize = '100% 100%';
					node.className = 'button character inroleback';
					node.setBackgroundImage('extension/诸神寰宇/other/Picture/Roleback/' + link + '.jpg');
				},
			},
			BJYY: {
				name: '背景音乐',
				intro: '<br>搬运魔改自<倾国倾城>,特此致谢!<br>选择后,立即更换游戏背景音乐.',
				init: lib.config.extension_诸神寰宇_BJYY === undefined ? '1' : lib.config.extension_诸神寰宇_BJYY,
				item: {
					0: '随机',
					1: '默认',
					2: 'Dragonborn.mp3',
					3: 'Sat Tee Touy.mp3',
					4: 'Ride On.mp3',
					5: 'Terraria Day.mp3',
					6: '思念皆成空.mp3',
					7: '未来のメロディー.mp3',
					8: 'Love Is Heavy.mp3',
					9: '再见悟空.mp3',
					10: '穿越时空的思念.mp3',
					11: 'What Is Love.mp3',
				},
				onclick(item) {
					game.saveConfig('extension_诸神寰宇_BJYY', item);
					game.zshyplayBackgroundMusic();
					ui.backgroundMusic.addEventListener('ended', game.zshyplayBackgroundMusic);
				},
			},
			BJTP: {
				name: '背景图片',
				init: true,
				intro: '<br>搬运魔改自<时空枢纽>,特此致谢!<br>选择后,立即更换游戏背景图片.',
				init: lib.config.extension_诸神寰宇_BJTP === undefined ? '1' : lib.config.extension_诸神寰宇_BJTP,
				item: {
					0: '随机',
					1: '默认',
					2: '2',
					3: '3',
					4: '4',
					5: '5',
					6: '6',
					'白龙-背': '白龙-背',
					'白龙-侧': '白龙-侧',
					黑龙: '黑龙',
					红妆未嫁: '红妆未嫁',
					11: '11',
					12: '12',
					13: '13',
					14: '14',
					15: '15',
					16: '16',
					苍澜: '苍澜',
					18: '18',
					19: '19',
					20: '20',
					21: '21',
					澜殇: '澜殇',
					23: '23',
					24: '24',
					寐魂师: '寐魂师',
					26: '26',
					27: '27',
					28: '28',
				},
				onclick(item) {
					game.saveConfig('extension_诸神寰宇_BJTP', item);
					game.zshyplayBackgroundPicture();
				},
				visualMenu(node, link) {
					node.style.height = node.offsetWidth * 0.67 + 'px';
					node.style.backgroundSize = '100% 100%';
					node.className = 'button character zshyBackgroundname';
					node.setBackgroundImage('extension/诸神寰宇/other/Picture/Wallpaper/' + link + '.jpg');
				},
			},
			PDTJ: {
				name: '牌堆统计',
				init: true,
				intro: '<br>搬运魔改自<假装无敌>,特此致谢!<br>开启后,将【牌堆统计】按钮加入右上角顶部菜单;游戏开始所有人摸牌后,点击可查看统计的牌堆.',
			},
			SJYB: {
				name: '随机应变',
				init: true,
				intro: '<br>搬运魔改自<第叁幻界>,特此致谢!<br>开启后,仅身份模式有效,当一名反贼或忠臣正常死亡时,则玩家内奸可以与其交换身份.',
			},
			ZWZJ: {
				name: '主亡忠继模式',
				init: true,
				intro: '<br>搬运魔改自<第叁幻界>,特此致谢!<br>身份模式生效,主公死了由忠臣继承,重启生效.',
			},
			SCWJ: {
				name: '点击清除已收藏的武将',
				clear: true,
				init: true,
				intro: '<br>搬运魔改自<第叁幻界>,特此致谢!',
				onclick() {
					if (!lib.config.favouriteCharacter.length) {
						alert('提示:您当前没有已收藏的武将,无需操作!');
						return;
					} else {
						if (confirm('请确认是否要清除当前所有已收藏的武将？')) {
							var list = [];
							for (var i = 0; i < lib.config.favouriteCharacter.length; i++) {
								var favname = lib.config.favouriteCharacter[i];
								if (lib.character[favname]) list.push(favname);
							}
							lib.config.favouriteCharacter.removeArray(list);
							game.saveConfig('favouriteCharacter', lib.config.favouriteCharacter);
							game.uncheck();
							game.check();
							if (confirm('清除成功,是否立即重启游戏以应用清除？')) game.reload();
							else return;
						} else return;
					}
				},
			},
			End: {
				name: '———★拓展介绍★———',
				clear: true,
				init: true,
				intro: '<br>本拓展只为作者一时起兴制作,武将,技能,功能,特效等皆为学习其他优秀作者拓展,如引起反感等一系列不适因素请删除本拓展,如遇到侵权等相关法律法规或其他问题,请立即告知作者予以处理(联系方式:QQ:1983332105)',
			},
		},
		package: {
			intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br><li>本拓展专有名词解释:<br>夺取:你增加1点体力上限并回复1点体力,其减少1点体力上限.<br>绝恒技:与武将牌绑定的技能,无法失效与失去.<li>本拓展制作测试版本为1.10.16.1,若使用低于该版本导致的其他问题可尝试自己解决,若出现高版本导致的问题可反馈给作者进行修复.<li>本拓展包括 诸神寰宇包 与 重置三国包 ,其中 诸神寰宇包 主要包括非三国武将(强度感人),三国命系列武将(可行走命运线);重置三国包主要包括对于三国原武将的加强重置,强度大概略弱于顶阴(大概吧……),部分武将强度感人,谨慎开启AI选将……<li>本拓展只为作者一时起兴制作,武将,技能,功能,特效等皆为学习其他优秀作者拓展,如引起反感等一系列不适因素请删除本拓展,如遇到侵权等相关法律法规或其他问题,请立即告知作者予以处理(联系方式:QQ:1983332105)<li>本拓展在无名杀<第叁幻界>扩展交流群(群号:178323816)中交流传播,严禁以此拓展进行任何牟利行为.',
			author: '云烫半月霞',
			version: '0.0',
		},
	};
});

import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '坎公骑冠剑',
		content(config, pack) {
			//更新公告
			if (pack.changeLog) game.showExtensionChangeLog(pack.changeLog);
			//武将选择势力的函数
			lib.element.player.gt_chooseGroup = function (forced, log, broadcast) {
				var next = game.createEvent('gt_chooseGroup');
				next.player = this;
				next.forced = forced; //是否锁定
				next.log = log;
				next.broadcast = broadcast;
				next.setContent(function () {
					'step 0';
					var list = [],
						str;
					list = ['gt_huo', 'gt_shui', 'gt_tu', 'gt_guang', 'gt_an', 'gt_xu'];
					if (!forced) {
						str = '是否选择一个属性改变你的属性？';
						list.push('cancel2');
					} else str = '请选择一个属性!';
					player.chooseControl(list, ui.create.dialog(str, 'hidden')).ai = function () {
						return Math.floor(Math.random() * list.length);
					};
					('step 1');
					if (result.control && result.control != 'cancel2') {
						player.changeGroup(result.control, event.log, event.broadcast);
						event.result = { bool: true, control: result.control };
					} else {
						event.result = { bool: false };
					}
				});
			};
			//开启无属性选择属性
			if (config.gt_wu_chooseGroup) {
				lib.skill._gt_chooseGroup = {
					mode: ['identity'],
					trigger: { global: ['gameStart', 'gameDrawBefore'] },
					forced: true,
					popup: false,
					silent: true,
					filter(event, player) {
						return player.group && player.group == 'gt_wu';
					},
					content() {
						player.gt_chooseGroup(true, false);
					},
				};
			}
			//更换bgm,修改自扩展<奥特物语>
			game.gt_bgm = function () {
				//if(lib.config.gt_bgm)
				var bgm = lib.config.gt_bgm;
				ui.backgroundMusic.pause();
				if (bgm && bgm != 'origin') {
					ui.backgroundMusic.src = 'extension/坎公骑冠剑/audio/bgm/' + bgm + '.mp3';
					ui.backgroundMusic.addEventListener('ended', game.gt_bgm);
				} else {
					game.playBackgroundMusic();
					ui.backgroundMusic.addEventListener('ended', game.playBackgroundMusic);
				}
			};
			if (lib.config.extension_坎公骑冠剑_gt_bgm && lib.config.extension_坎公骑冠剑_gt_bgm != 'origin') {
				lib.arenaReady.push(function () {
					game.gt_bgm();
					ui.backgroundMusic.addEventListener('ended', game.gt_bgm);
				});
			}
			game.arkBgp = function () {
				if (lib.config.ark_backgroundpicture) var bgp = lib.config.ark_backgroundpicture;
				if (bgp && bgp != 'origin') {
					ui.background.setBackgroundImage('extension/奥特物语/arkBgp/' + bgp + '.png');
				} else {
					ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
				}
			};
			//武将评级
			lib.rank.rarity.legend.add(
				//传说
				'opanicsido',
				'boss_jialan',
				'boss_beisi'
			);
			lib.rank.rarity.epic.add(
				//史诗
				'gt_weilaigongzhu',
				'gt_nuokexiya',
				'gt_pulixila',
				'gt_aa72',
				'gt_andelasi',
				'gt_malina',
				'gt_alefu',
				'gt_meilier',
				'gt_jialan',
				'gt_naili',
				'gt_jiabailie',
				'gt_lin',
				'gt_weilaiqishi',
				'gt2_weilaiqishi',
				'gt_beisi',
				'gt_hana',
				'gt_lu',
				'gt_meiya',
				'gt_leiyi',
				'gt_paerwadi',
				'gt_ailina',
				'gt_ruipina',
				'gt_ailinuo',
				'gt_kelala',
				'gt_lanr',
				'gt_keluosaier',
				'gt_youjin',
				'gtsp_suofei',
				'gtre_keleige',
				'gtre_karina',
				'gt_keluomu',
				'gt_diniya',
				'gt_walunxiya',
				'gt_jin',
				'gt_luosaita',
				'gt_xiya',
				'gtsp_aimi',
				'gt_baimeng',
				'gt_aoerka',
				'gt_ougema',
				'gt_fengkuangxiongmaotuan',
				'gt_baixue',
				'gtsp_xiapila'
			);
			lib.rank.rarity.rare.add(
				//精品
				'gt_chixue',
				'gt_keleige',
				'gt_karina',
				'gt_suofei',
				'gt_aimi'
			);
			lib.rank.rarity.junk.add(
				//垃圾
				'gt_he',
				'gt_she',
				'gt_it'
			);
			//死亡配音(已移动至启动代码)
			//boss登场
			//坎公boss
			if (lib.boss) {
				const boss = {
					boss_opanicsido: {
						checkResult(player) {
							if (player == game.boss && game.boss.name != 'opanicsido') {
								return false;
							}
						},
						gameDraw(player) {
							return 4;
						},
						minion: {
							7: ['gt_alefu', 'gt_lin', 'gt_weilaiqishi', 'gt_beisi', 'gt_hana', 'gt_lu'].randomGet(),
							8: ['gt_naili', 'gt_jialan'].randomGet(),
							3: ['gt_malina', 'gt_weilaigongzhu'].randomGet(),
							2: ['gt_jiabailie', 'gt_meilier', 'gt_karina', 'gt_nuokexiya'].randomGet(),
						},
						randchoice(name, list) {
							if (Math.random() > 1 / 3) {
								return name;
							} else {
								var arr = ['gt_malina', 'gt_alefu', 'gt_weilaigongzhu', 'gt_meilier', 'gt_karina', 'gt_lin', 'gt_weilaiqishi', 'gt_jiabailie', 'gt_naili', 'gt_jialan', 'gt_nuokexiya', 'gt_beisi', 'gt_hana'];
								arr.removeArray(list);
								return arr.randomGet();
							}
						},
						//controlid:'shenwuzaishi',
						control(type, control) {
							if (type == 'cancel') {
								if (!control.classList.contains('glow')) return;
								var dialog = control.dialog;
								dialog.content.removeChild(control.backup1);
								dialog.buttons.removeArray(control.backup2);
								game.uncheck();
								game.check();
							} else {
								var control = ui.create.control('坎公骑冠剑', function () {
									if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) {
										return;
									}
									var dialog = _status.event.dialog;
									this.dialog = dialog;
									if (this.classList.contains('glow')) {
										this.backup1.remove();
										dialog.buttons.removeArray(this.backup2);
									} else {
										var links = [];
										for (var i = 0; i < dialog.buttons.length; i++) {
											links.push(dialog.buttons[i].link);
										}
										for (var i = 0; i < this.backup2.length; i++) {
											if (links.includes(this.backup2[i].link)) {
												this.backup2[i].style.display = 'none';
											} else {
												this.backup2[i].style.display = '';
											}
										}
										dialog.content.insertBefore(this.backup1, dialog.buttons[0].parentNode);
										dialog.buttons.addArray(this.backup2);
									}
									this.classList.toggle('glow');
									game.uncheck();
									game.check();
								});
								control.backup1 = ui.create.div('.buttons');
								control.backup2 = ui.create.buttons(['gt_malina', 'gt_alefu', 'gt_weilaigongzhu', 'gt_meilier', 'gt_karina', 'gt_lin', 'gt_weilaiqishi', 'gt_jiabailie', 'gt_naili', 'gt_jialan', 'gt_nuokexiya', 'gt_beisi', 'gt_hana'], 'character', control.backup1);
								return control;
							}
						},
						init() {
							for (var i of game.players) {
								switch (i.name1) {
									case 'gt_weilaigongzhu': {
										i.equip(game.createCard2('gt_jiefangzhe', 'heart', 13));
										lib.inpile.add('gt_jiefangzhe');
										break;
									}
									case 'gt_lin': {
										i.equip(game.createCard2('gt_honglian', 'heart', 9));
										lib.inpile.add('gt_honglian');
										break;
									}
								}
							}
							lib.inpile.sort(lib.sort.card);
						},//QQQ
					},
					boss_jialan: {
						//loopType:2,
						randchoice() {
							return lib.boss.boss_opanicsido.randchoice.apply(this, arguments);
						},
						control() {
							return lib.boss.boss_opanicsido.control.apply(this, arguments);
						},
						init() {
							return lib.boss.boss_opanicsido.init.apply(this, arguments);
						},
					},
					boss_beisi: {
						loopType: 2,
						randchoice() {
							return lib.boss.boss_opanicsido.randchoice.apply(this, arguments);
						},
						control() {
							return lib.boss.boss_opanicsido.control.apply(this, arguments);
						},
						init() {
							return lib.boss.boss_opanicsido.init.apply(this, arguments);
						},
					},
				};//QQQ
				Object.assign(lib.boss, boss);
			}
		},
		precontent(kgqgj) {
			//—————————————————————————————————————————————————————————————————————————————boss模式相关函数,目前改用代理来排序
			const boss = function () {
				lib.skill._sort = {
					trigger: {
						player: ['phaseEnd'],
					},
					silent: true,
					forceDie: true,
					forceOut: true,
					filter() {
						game.sort();
					},
					content() { },
				}; //排座位
				let _me;
				Reflect.defineProperty(game, 'me', {
					get() {
						return _me;
					},
					set(v) {
						_me = v;
						if (game.players.includes(v) && game.players[0] != v) {
							game.sort();//因为李白最先进入players,挑战模式不管选什么挑战李白,都会变成game.me是李白
						} //如果数组target[meIndex]是李白,那么替换掉的一瞬间,接下来调用就会再添加一个李白,导致数组两个李白
					}, //更换game.me之后第一时间排序
				});
				game.sort = function () {
					const players = game.players.filter(Boolean);
					const deads = game.dead.filter(Boolean);
					const allPlayers = deads.concat(players);//先移除players后面玩家会前移,再添加入dead需要同排序取前
					const bool = lib.config.dieremove;
					const playerx = bool ? players : allPlayers;
					ui.arena.setNumber(playerx.length);
					if (bool) {
						deads.forEach((player) => {
							player.classList.add('removing', 'hidden');
							if (!player.deadposition) {
								const num = Number(player.dataset.position);
								player.deadposition = num;
								player.dataset.position = num - 1;
							}
						});
					}//隐藏死亡角色
					playerx.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
					if (playerx.includes(game.me) && playerx[0] != game.me) {
						while (playerx[0] != game.me) {
							const start = playerx.shift();
							playerx.push(start);
						}
					}//将玩家排至数组首位
					playerx.forEach((player, index, array) => {
						player.dataset.position = index;
						const zhu = _status.roundStart || game.zhu || game.boss || array.find((p) => p.seatNum == 1) || array[0];
						const zhuPos = Number(zhu.dataset.position);
						const num = index - zhuPos + 1;
						if (index < zhuPos) {
							player.seatNum = players.length - num;
						} else {
							player.seatNum = num;
						}
					});//修改dataset.position与seatNum
					players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
					players.forEach((player, index, array) => {
						if (bool) {
							player.classList.remove('removing', 'hidden');
						}
						if (index == 0) {
							if (ui.handcards1Container && ui.handcards1Container.firstChild != player.node.handcards1) {
								while (ui.handcards1Container.firstChild) {
									ui.handcards1Container.firstChild.remove();
								}
								ui.handcards1Container.appendChild(player.node.handcards1.addTempClass('start').fix());
							}
							if (game.me != player) {
								ui.updatehl();
							}
						}
						player.previous = array[index === 0 ? array.length - 1 : index - 1];
						player.next = array[index === array.length - 1 ? 0 : index + 1];
					});//展示零号位手牌/修改previous/显示元素
					allPlayers.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
					allPlayers.forEach((player, index, array) => {
						player.previousSeat = array[index === 0 ? array.length - 1 : index - 1];
						player.nextSeat = array[index === array.length - 1 ? 0 : index + 1];
					});//修改previousSeat
					game.players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
					return true;
				};
				game.players = new Proxy([], {
					set(target, property, value) {
						const result = Reflect.set(target, property, value);
						if (property === 'length') {
							game.sort();
						}
						return result;
					},
				});
				game.dead = new Proxy([], {
					set(target, property, value) {
						const result = Reflect.set(target, property, value);
						if (property === 'length') {
							game.sort();
						}
						return result;
					},
				});
				game.kongfunc = function () {
					return game.kong;
				};
				game.kong = {
					set() {
						return this;
					},
					get player() {
						return game.me;
					}, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
					cards: [],
					result: {
						cards: [],
					},
					gaintag: [],
					forResult() { },
				};
				game.changeBossQ = function (name) {
					_status.event.forceDie = true;
					const boss = game.addPlayerQ(name);
					boss.side = true;
					if (game.additionaldead) {
						game.additionaldead.push(game.boss);
					} else {
						game.additionaldead = [game.boss];
					}
					boss.setIdentity('zhu');
					boss.identity = 'zhu';
					const player = game.boss;
					game.boss = boss;
					game.addVideo('bossSwap', player, '_' + boss.name);
					if (game.me == player) {
						game.swapControl(boss);
					}
					return boss;
				};
				game.addPlayerQ = function (name) {
					const player = ui.create.player(ui.arena).addTempClass('start');
					player.getId();
					if (name) player.init(name);
					game.players.push(player);
					player.draw(Math.min(player.maxHp, 20));
					return player;
				};
				lib.element.player.addFellow = function (name) {
					const player = this;
					const npc = game.addPlayerQ(name);
					player.guhuo(npc);
					return npc;
				}; //添加随从
				lib.element.player.guhuo = function (target) {
					const player = this;
					target.side = player.side;
					let identity = player.identity;
					if (player.identity == 'zhu') {
						identity = 'zhong';
					} // 挑战模式多个主身份,会导致boss多个回合
					target.identity = identity;
					target.setIdentity(identity, 'blue');
					target.boss = player;
					target.ai.modAttitudeFrom = function (from, to, att) {
						if (to == from.boss) return 99;
						return att;
					}; //这里from是本人
					target.ai.modAttitudeTo = function (from, to, att) {
						if (to.boss == from) return 99;
						return att;
					}; //这里to是本人
					return player;
				}; //令一名角色服从你
			};
			boss();
			game.import('character', function () {
				//武将框背景色(借鉴于扩展<天灾之下>)
				var style = document.createElement('style');
				style.innerHTML = `#arena>.player>.camp-wrap[data-camp='gt_huo']>.camp-back {
						background: linear-gradient(to bottom, rgb(184,46,5), rgb(122,4,4));
		        	}.player>.camp-wrap[data-camp='gt_huo']>.camp-name {
						text-shadow: 0 0 5px rgb(184,46,5), 0 0 10px rgb(184,46,5), 0 0 15px rgb(184,46,5);
					}.player>.camp-wrap[data-camp='gt_shui']>.camp-back {
						background: linear-gradient(to bottom, rgb(0,118,184), rgb(9,65,136));
					}.player>.camp-wrap[data-camp='gt_shui']>.camp-name {
						text-shadow: 0 0 5px rgb(0,118,184), 0 0 10px rgb(0,118,184), 0 0 15px rgb(0,118,184);
					}.player>.camp-wrap[data-camp='gt_tu']>.camp-back {
						background: linear-gradient(to bottom, rgb(134,93,41), rgb(96,57,18));
					}.player>.camp-wrap[data-camp='gt_tu']>.camp-name {
						text-shadow: 0 0 5px rgb(134,93,41), 0 0 10px rgb(134,93,41), 0 0 15px rgb(134,93,41);
					}.player>.camp-wrap[data-camp='gt_guang']>.camp-back {
						background: linear-gradient(to bottom, rgb(227,150,0), rgb(170,90,11));
					}.player>.camp-wrap[data-camp='gt_guang']>.camp-name {
						text-shadow: 0 0 5px rgb(227,150,0), 0 0 10px rgb(227,150,0), 0 0 15px rgb(227,150,0);
					}.player>.camp-wrap[data-camp='gt_an']>.camp-back {
						background: linear-gradient(to bottom, rgb(152,30,156), rgb(72,9,143));
					}.player>.camp-wrap[data-camp='gt_an']>.camp-name {
						text-shadow: 0 0 5px rgb(152,30,156), 0 0 10px rgb(152,30,156), 0 0 15px rgb(152,30,156);
					}.player>.camp-wrap[data-camp='gt_xu']>.camp-back {
						background: linear-gradient(to bottom, rgb(75,99,111), rgb(55,55,55));
					}.player>.camp-wrap[data-camp='gt_xu']>.camp-name {
						text-shadow: 0 0 5px rgb(75,99,111), 0 0 10px rgb(75,99,111), 0 0 15px rgb(75,99,111);
					}`;
				document.head.appendChild(style);
				//武将包
				var kgqgj = {
					name: 'kgqgj', //武将包命名(必填)
					connect: true, //该武将包是否可以联机(必填)
					//自定义势力
					group: ['gt_huo', 'gt_shui', 'gt_tu', 'gt_guang', 'gt_an', 'gt_xu', 'gt_wu'],
					//势力颜色
					groupnature: {
						gt_huo: 'fire',
						gt_shui: 'water',
						gt_tu: 'soil',
						gt_guang: 'metal',
						gt_an: 'thunder',
						gt_xu: 'gray',
						//"gt_wu":"snow",
					},
					//武将代码
					character: {
						opanicsido: ['male', 'gt_wu', 4, ['gt_jiejian', 'gt_fenghe'], []],
						//"db_opanicsido":["male","gt_xu","3/6",["opanicsido1","opanicsido2"],["hiddenSkill","doublegroup:gt_huo:gt_shui:gt_tu:gt_guang:gt_an:gt_xu"]],
						boss_opanicsido: ['male', '', 0, ['boss_opanicsido1', 'boss_opanicsido2'], ['boss']],
						//"gt_shenmiren":["male","gt_wu",4,["gt_jiejian","gt_fenghe"],["hiddenSkill"]],
						gt_he: ['male', 'gt_wu', 1, [], []],
						gt_she: ['female', 'gt_wu', 1, ['gt_suoxie'], []],
						gt_it: ['none', 'gt_wu', 1, [], []],
						gz_shibing1gt_huo: ['male', 'wei', 0, [], []],
						gz_shibing2gt_huo: ['female', 'wei', 0, [], []],
						gz_shibing1gt_shui: ['male', 'wei', 0, [], []],
						gz_shibing2gt_shui: ['female', 'wei', 0, [], []],
						gz_shibing1gt_tu: ['male', 'wei', 0, [], []],
						gz_shibing2gt_tu: ['female', 'wei', 0, [], []],
						gz_shibing1gt_guang: ['male', 'wei', 0, [], []],
						gz_shibing2gt_guang: ['female', 'wei', 0, [], []],
						gz_shibing1gt_an: ['male', 'wei', 0, [], []],
						gz_shibing2gt_an: ['female', 'wei', 0, [], []],
						gz_shibing1gt_xu: ['male', 'wei', 0, [], []],
						gz_shibing2gt_xu: ['female', 'wei', 0, [], []],
						gz_shibing1gt_wu: ['male', 'wei', 0, [], []],
						gz_shibing2gt_wu: ['female', 'wei', 0, [], []],
						//ssr
						//1普利特维采
						//"gt_puliteweicai":["female","gt_huo",4,["gt_shenghuo","gt_huomian"],[]],
						//2
						//3玛丽娜
						gt_malina: ['female', 'gt_shui', 5, ['gt_qianyin', 'gt_juesheng'], []],
						//6芭莉
						//"gt_bali":["female","gt_tu",3,["gt_xianhua","gt_youli"],[]],
						//7瑞皮娜
						gt_ruipina: ['female', 'gt_an', 4, ['gt_yinglang', 'gt_liexi'], []],
						//8兰儿
						gt_lanr: ['female', 'gt_xu', 4, ['gt_zhouquan', 'gt_taiji', 'gt_suxing'], []],
						//9尤金
						gt_youjin: ['female', 'gt_guang', 4, ['gt_teji', 'gt_jiche'], []],
						//10蒂尼亚
						gt_diniya: ['female', 'gt_tu', 3, ['gt_shajian', 'gt_shabao'], []],
						//12奈莉
						gt_naili: ['female', 'gt_xu', 3, ['gt_huwei', 'gt_xianyu'], []],
						//14欧格玛
						gt_ougema: ['male', 'gt_an', 5, ['gt_bidun', 'gt_tongyu'], []],
						//15阿勒夫
						gt_alefu: ['male', 'gt_tu', 4, ['gt_moxiang', 'gt_shanshen'], []],
						//16美娅
						gt_meiya: ['female', 'gt_huo', 3, ['gt_nuanfeng', 'gt_qingdian'], []],
						//17未来公主
						gt_weilaigongzhu: ['female', 'gt_guang', 5, ['gt_fengbao', 'gt_pingzhang', 'gt_jiefang'], ['zhu']],
						//18佳岚
						gt_jialan: ['male', 'gt_shui', 3, ['gt_daoshu', 'gt_shenling'], []],
						boss_jialan: ['male', 'gt_wu', 3, ['gt_daofa', 'gt_huxian', 'gt_beinu'], ['boss', 'bossallowed']],
						//19贝丝
						gt_beisi: ['female', 'gt_an', 4, ['gt_kousha', 'gt_lieshi'], []],
						boss_beisi: ['female', 'gt_wu', 4, ['gt_qinxi', 'gt_shoulie', 'gt_longhua'], ['boss', 'bossallowed']],
						//20鲁
						gt_lu: ['female', 'gt_tu', 4, ['gt_luren', 'gt_zhongji'], []],
						//21加百列
						gt_jiabailie: ['female', 'gt_guang', 3, ['gt_tianlai', 'gt_shenjiang'], []],
						//22琳
						gt_lin: ['female', 'gt_huo', 4, ['gt_zuichu', 'gt_qigong'], []],
						//23未来骑士
						gt_weilaiqishi: ['female', 'gt_xu', 4, ['gt_hufu', 'gt_tuji'], []],
						gt2_weilaiqishi: ['female', 'gt_xu', 4, ['gt_lianju', 'gt_chuangshang'], []],
						//24维罗妮卡
						//"gt_weiluonika":["female","gt_shui",3,["gt_shengyin","gt_shengguang"],[]],
						//25诺克西娅
						gt_nuokexiya: ['female', 'gt_an', 3, ['gt_jiangling', 'gt_futi', 'gt_konghun1'], []],
						gt_heianlinghun: ['none', 'gt_an', 2, ['gt_konghun2'], []],
						//26梅丽尔
						gt_meilier: ['female', 'gt_tu', 3, ['gt_luohua', 'gt_benglie'], []],
						//29罗茜
						//"gt_luoxi":["female","gt_huo",3,["gt_jiean","gt_xifa"],[]],
						//30索菲
						gtsp_suofei: ['female', 'gt_xu', 4, ['gt_chonglang', 'gt_baipao'], []],
						//32埃莉诺
						gt_ailinuo: ['female', 'gt_guang', 3, ['gt_payin', 'gt_hexian'], []],
						//34埃里娜
						gt_ailina: ['female', 'gt_xu', 5, ['gt_tiancheng', 'gt_jiyu'], []],
						//35卡麦尔
						//"gt_kamaier":["male","gt_tu",3,["gt_fengshou","gt_ziran"],[]],
						//37奥尔卡
						gt_aoerka: ['female', 'gt_shui', 3, ['gt_dilei', 'gt_chujue'], []],
						//39哈娜
						gt_hana: ['female', 'gt_shui', 4, ['gt_shenpan', 'gt_bumie'], []],
						//41克拉拉
						gt_kelala: ['female', 'gt_huo', 3, ['gt_ranjin', 'gt_kuilei'], []],
						//42帕尔瓦蒂
						gt_paerwadi: ['female', 'gt_tu', 4, ['gt_gongzuo', 'gt_youhua'], []],
						//43普莉希拉
						gt_pulixila: ['female', 'gt_guang', '3/3/2', ['gt_hunxie'], []],
						//44克劳德
						//"gt_kelaode":["male","gt_an",3,["gt_xieyu","gt_xietong"],[]],
						//46蕾伊
						gt_leiyi: ['female', 'gt_huo', 4, ['gt_zhanji', 'gt_fanji'], []],
						//47AA72
						gt_aa72: ['female', 'gt_shui', 3, ['gt_shuiqiang', 'gt_shuangbeng'], []],
						//48SP罗兰茵
						//"gtsp_luolanyin":["female","gt_xu",3,["gt_jinji","gt_fangwei"],[]],
						//49疯狂熊猫团
						gt_fengkuangxiongmaotuan: ['female', 'gt_tu', 4, ['gt_mafan'], []],
						gt_fengkuangxiongmaotuan2: ['male', 'gt_tu', 1, [], []],
						gt_fengkuangxiongmaotuan3: ['male', 'gt_tu', 1, [], []],
						//50克罗姆
						gt_keluomu: ['female', 'gt_xu', 3, ['gt_shuangqiang', 'gt_shewen', 'gt_duya'], []],
						//51瓦伦西亚
						gt_walunxiya: ['female', 'gt_guang', 4, ['gt_chuanxin', 'gt_jici'], []],
						//52克罗塞尔
						gt_keluosaier: ['female', 'gt_an', 3, ['gt_dianzi', 'gt_hairu', 'gt_houduan'], []],
						//53安德拉斯
						gt_andelasi: ['female', 'gt_shui', 3, ['gt_tulu', 'gt_hanqi'], []],
						//54堇
						gt_jin: ['female', 'gt_an', 4, ['gt_renshu', 'gt_xunying'], []],
						//55拜蒙
						gt_baimeng: ['female', 'gt_huo', 5, ['gt_pohuai', 'gt_zhanshen'], []],
						gt_baimeng2: ['female', 'gt_huo', 5, ['gt_pohuai', 'gt_zhanshen'], []],
						//56罗塞塔
						gt_luosaita: ['female', 'gt_tu', 3, ['gt_kuaiqiang', 'gt_sushe', 'gt_danjia'], []],
						//57白雪
						gt_baixue: ['male', 'gt_shui', 4, ['gt_zaoxue', 'gt_dongri'], []],
						//58卡米拉
						gt_kamila: ['female', 'gt_an', 3, ['gt_qiju', 'gt_rimu', 'gt_duoluo'], ['hiddenSkill']],
						//59凯伊
						//"gt_kai":["male","gt_guang",4,["gt_zhiyuan","gt_zhengyi","gt_shuangren"],[]],
						//62汐雅
						gt_xiya: ['female', 'gt_shui', 3, ['gt_paopao', 'gt_shuibo', 'gt_shuiyun'], []],
						//63SP艾米
						gtsp_aimi: ['female', 'gt_huo', 4, ['gt_nuqi', 'gt_nuhuo'], []],
						//65SP夏皮拉
						gtsp_xiapila: ['female', 'gt_guang', 4, ['gt_shachan', 'gt_xiari'], []],
						//sr
						//5卡瑞娜
						gt_karina: ['female', 'gt_an', 3, ['gt_xieyue', 'gt_yongheng'], []],
						gtre_karina: ['female', 'gt_an', 3, ['gt_shuangyue', 'gtre_xieyue', 'gt_yongheng'], []],
						gt_xialuote: ['female', 'gt_an', 3, ['gte_xieyue', 'gte_yongheng'], []],
						//15索菲
						gt_suofei: ['female', 'gt_guang', 3, ['gt_jiguang', 'gt_dianci'], []],
						//18克雷格
						gt_keleige: ['male', 'gt_tu', 5, ['gt_zhanhou', 'gt_baohu'], []],
						gtre_keleige: ['male', 'gt_tu', 5, ['gtre_zhanhou', 'gtre_baohu'], []],
						//19赤雪
						gt_chixue: ['female', 'gt_huo', 4, ['gt_feiyan', 'gt_douzhi'], []],
						//26艾米
						gt_aimi: ['female', 'gt_xu', 4, ['gt_kuangnu', 'gt_kuangbao'], []],
						//"sp_aimi":["female","gt_xu",4,["sp_kuangbao"],[]],
					},
					characterReplace: {
						gt_weilaiqishi: ['gt_weilaiqishi', 'gt2_weilaiqishi'],
						gt_suofei: ['gt_suofei', 'gtsp_suofei'],
						gt_karina: ['gt_karina', 'gtre_karina'],
						gt_keleige: ['gt_keleige', 'gtre_keleige'],
						gt_aimi: ['gt_aimi', 'gtsp_aimi'],
					},
					//武将分栏
					characterSort: {
						kgqgj: {
							kgqgj: [],
							kgqgj_zhanshi: ['gt_alefu', 'gt_lin', 'gt_weilaiqishi', 'gt_beisi', 'gt_hana', 'gt_lu', 'gt_leiyi', 'gt_paerwadi', 'gt_ruipina', 'gt_chixue', 'gt_lanr', 'gtsp_suofei', 'gt_youjin', 'gt_walunxiya', 'gt_jin', 'gt_aimi', 'gtsp_aimi', 'gt_fengkuangxiongmaotuan', 'gt_baixue', 'gtsp_xiapila'],
							kgqgj_sheshou: ['gt_naili', 'gt_jialan', 'gt_pulixila', 'gt_aa72', 'gt_kelala', 'gt_andelasi', 'gt_keluomu', 'gt_suofei', 'gt_diniya', 'gt_luosaita', 'gt_aoerka'],
							kgqgj_tanke: ['gt_malina', 'gt_weilaigongzhu', 'gt_keleige', 'gt_ailina', 'gt_baimeng', 'gt_ougema'],
							kgqgj_fuzhu: ['gt_jiabailie', 'gt_meilier', 'gt_karina', 'gt_nuokexiya', 'gt_meiya', 'gt_ailinuo', 'gt_keluosaier', 'gt_xiya'],
							kgqgj_erzhuan: ['gt2_weilaiqishi'],
							kgqgj_shengjie: ['gtre_keleige', 'gtre_karina'],
							kgqgj_boss: ['boss_jialan', 'boss_beisi'],
							kgqgj_other: ['opanicsido', 'gt_he', 'gt_she', 'gt_it'],
						},
					},
					//武将称号
					characterTitle: {
						opanicsido: 'opanicsido',
						//ssr
						gt_puliteweicai: '战争女神', //1
						gt_malina: '海军舰长', //3
						gt_bali: '鲜花少女', //6
						gt_ruipina: '冰雪魔女', //7
						gt_lanr: '档案室文字记录员', //8
						gt_youjin: '电影演员', //9
						gt_diniya: '舞姬弓箭手', //10
						gt_naili: '八尾狐', //12
						gt_ougema: '机甲战士', //14
						gt_alefu: '魔像骑士', //15
						gt_meiya: '驱魔师', //16
						gt_weilaigongzhu: '反抗军领袖', //17
						gt_jialan: '九尾狐', //18
						gt_beisi: '黑暗魔法师', //19
						gt_lu: '圣诞老人小帮手', //20
						gt_jiabailie: '大天使', //21
						gt_lin: '醉刀仙', //22
						gt_weilaiqishi: '未踏之地', //23
						gt2_weilaiqishi: '未踏之地',
						gt_weiluonika: '勇士教教主', //24
						gt_nuokexiya: '死灵法师', //25
						gt_meilier: '丰收神兽', //26
						gt_luoxi: '怪盗', //29
						gtsp_suofei: '海滩科学家', //30
						gt_ailinuo: '繁荣女神', //32
						gt_ailina: '传奇勇士', //34
						gt_kamaier: '丰收之神', //35
						gt_aoerka: '海洋佣兵', //37
						gt_hana: '冥界使者', //39
						gt_kelala: '被束缚的孩子', //41
						gt_paerwadi: '优秀员工', //42
						gt_pulixila: '半吸血鬼', //43
						gt_kelaode: '恶魔郡伯爵', //44
						gt_leiyi: '兽人剑士', //46
						gt_aa72: '小宝机器人', //47
						gt_luolanyin: 'SP旅馆老板娘', //48
						gt_fengkuangxiongmaotuan: '派对不速之客', //49
						gt_keluomu: 'No.9', //50
						gt_walunxiya: '近卫军队长', //51
						gt_keluosaier: '契约者', //52
						gt_andelasi: '屠戮者', //53
						gt_jin: '忍者', //54
						gt_baimeng: '破坏者', //55
						gt_luosaita: '猎人', //56
						gt_baixue: '雪之子', //57
						gt_kamila: '第1军团军长', //58
						gt_kai: 'H.E.R.O.S', //59
						gt_xiya: '海洋杂货商', //62
						gtsp_aimi: '海滩女仆', //63
						gtsp_xiapila: '沙滩龙骑士', //65
						//sr
						gt_karina: '吸血鬼少女', //5
						gtre_karina: '吸血鬼少女',
						gt_suofei: '科学家', //15
						gt_keleige: '勇士挑战者', //18
						gtre_keleige: '勇士挑战者',
						gt_chixue: '武士', //19
						gt_aimi: '双面女仆', //26
					},
					//武将介绍
					characterIntro: {
						//1普利特维采
						gt_puliteweicai: '普利特维采,战争女神.<br><br>具有随意控制火焰的能力,神界力量源泉世界树被烧之后,丧失神力,无法完全发挥实力.虽实力不足,也想保持神之威严,平时严于律己,处事谨慎.但是,频繁露出马脚,经常因情绪激动而进退失据,破绽百出的呆萌女神.<br><br>被封印时答应,只要有资格的勇士访问浮游城,就会出手相助.未被封印的500年前,与勇士们一起踏上了远征之路,却在征途中多次经历失去亲人的痛苦,开始畏惧孤独寂寞.曾是自己手下部将的天使安吉是普利特维采最信任的人,如今下落不明.普利特维采身边出现新伙伴,值得欣慰,但又怕失去这名新伙伴而令人忧虑.偶尔陷入沉思,像是在回顾过去.',
						//3玛丽娜
						gt_malina: '玛丽娜是阿德拉王国最年轻海军司令,是坎特伯雷信赖的盟友.<br><br>坎特伯雷沦陷的那天,她失去了军舰伊尔米娜号和上面的船员.这痛苦使她离开了海军,开始作为十字军独自对付侵略者.<br><br>玛丽娜带领的舰队被认为是阿德拉海军最强的舰队.她精确而迅速的指示使舰队可以向任何敌人释放致命的弹幕.她还以其强大的剑术而闻名.尽管身材矮小,但她以惊人的力量挥舞着几乎和自己一样大的剑.她甚至可以用她著名的船锚,将食人魔甩来甩去.她可能看起来冷漠而冷酷,但这并不意味着她缺乏激情.在谈到她真正想要关注的事情时,她只是选择性的冷漠.换句话说,除非对她而言是首要事项,否则不要期望她会在乎.',
						//6芭莉
						gt_bali: '鲜花少女芭莉是丰收之神的侍奉使者.游遍世界,收集人们幸福的回忆,正在执行拯救被烧毁的世界树的任务.<br><br>借助神秘鲜花之力,帮人们实现愿望,取走他们的幸福回忆作为代价.暗暗下决心,绝不干涉错综复杂的人间烦事.但,看到为了一己之私不惜丢弃宝贵的美好过往的人们,便会心寒,碰上遭遇不幸而诚心祈祷的人们,便会不忍忽视,伸出援手.尤其,对那些被遗弃的人们特别心软.有时,人们想实现的愿望规模超出所付出的代价,芭莉就要用自己的幸福回忆填补缺失.芭莉事先并不知在哪儿能遇上需要帮助的人.于是,她会在世界各地留住更多美好回忆,以备不时之需.<br><br>芭莉在执行任务时会坚持两个原则.第一、聚集丰收之神和大自然的威力惩罚基于过分贪念想利用芭莉的人们,绝不心慈手软.第二、签订公平合约,对方许下的愿望,都尽力帮他实现,唯独想让逝者重生的愿望例外.因为,有些人曾经许下现已成为禁忌的愿望,他们的下场都惨不忍睹.',
						//7瑞皮娜
						gt_ruipina: '冰雪魔女瑞皮娜是能召唤野狼的因纽特人传说中的冰雪魔女.<br><br>善变,残忍,且恶名昭著.时隔几十年,在人类中现身,狩猎森林中的人类仅仅是为了消遣取乐.每每现身,都会给人类带来连连不断的雪崩雪暴.冒着冰雪风暴,执意前往森林狩猎的人类就是瑞皮娜的猎物,无一幸免.阴晴不定的瑞皮娜,一高兴就会放了猎物,不开心就会拖着猎物到处走,让其饱受痛苦而亡.恶习怪癖集于一身, 成为频繁出现在因纽特人传说中的大恶棍.<br><br>瑞皮娜本人却乐在其中.让瑞皮娜引以为豪的是人类畏缩不前,不敢向自己挑战.每隔几十年现身,是考虑到人类的寿命,不想被新一代的人类所遗忘.岁月流逝,嬉戏人类成瘾的瑞皮娜,现身周期越来越短,气候变化更加恶劣,现身装扮越发奢华.每天一次,躲在山洞安乐窝中上网搜索自己的名字,最普遍的搜索关键词为<瑞皮娜>、<瑞皮娜魔女>、< 瑞皮娜装扮>.',
						//8兰儿
						gt_lanr: '记录员兰儿的主要工作是在世代传承的档案室里组合文字,并把它记录下来.<br><br>作为祖祖辈辈守护并管理档案室的记录员世家后裔,兰儿竭尽所能做好本职工作,发挥记录员及笔杆子的作用.兰儿用组合的文字撰写的书籍,能让文字气场增幅,档案室里数不胜数的书架层层叠加,几乎遮盖全部天花板.记录员具有熟练控制文字气场的能力,正确无误地找出某一本书位于哪一个书架上的哪一个区域,对兰儿来讲是轻而易举的事情.在档案室寂静的氛围中,聆听纸张与文字间流动的气息,专注于活灵活现的文字,屏住呼吸,默默赞许文字的魅力,这便是兰儿的日常生活.<br><br>记录员组合文字的方式与凡人不同,与常人读写的文字组合毫无相似之处.因此,记录员组合出来的文字与常人使用的语言和文字相差甚远.但,兰儿的言行举止又与具有资深经验的老人如出一辙惯用书面语,语气就像文人雅士一般文绉绉. 长年累月,档案室文字的气场与人类历史始源之间的距离逐渐拉大,开始不受控制,流向档案室外的现象越来越频.感到神奇的兰儿为了-探究竟,迈步走向文字的归属之地——人间世界.',
						//9尤金
						gt_youjin: '尤金是伯莱坞电影演员.<br><br>身为无名艺人,长期扮演群众演员、替角、特技替身等角色.一次偶然的机遇,让尤金从特技替身被提拔为主演,凭借超凡演技得到观众认可,成为当之无愧的电影明星.出演贝尔导演执导的[坎特伯雷王国],演艺生涯达到顶峰,饰演充满正义感的英雄形象,也给人们留下了深刻印象.从此,淳朴、诚恳的角色与尤金画上了等号.在屏幕中塑造的道德教材般诚实形象与尤金真实性格有些出入在接受演艺杂志媒体采访时,尤金透露,有机会的话,她想挑战反派角色.喜欢恐怖片、怪兽片或是大快人心的二流情感电影,足以表明尤金有别于他人的独特面.<br><br>万分热情投入于演技,从中享受幸福感觉的勤勉型演员.尤金的词典里根本不存在<马虎>二字,认定只要勤奋努力,好事就会接踵而来.无名特技替身生活并没有让尤金因当不了主演而心灰意冷反而让她更加拼搏上进.因此,尤金精通所有武器,摩托车特技也是堪称一绝.成为当红明星,也对同甘共苦的旧摩托车爱不释手,当成自己的热情搭档.',
						//10蒂尼亚
						gt_diniya: '蒂尼亚是沙漠王国知名的舞姬弓箭手刺客.<br><br>平日里是远近闻名的舞姬,另一天摇身一变成为快速准确的弓箭手刺客.不曾告诉妈妈自己的双重身份,雪白布料与随之摆动的发丝让蒂尼亚的曼妙舞姿更加妩媚动人,也能协助刺客蒂尼亚在银白月光下隐身,攻击目标.<br><br>过于乐观,天真(？)的刺客,就像纯真无邪的孩子,不经深思熟虑除掉暗杀对象.蒂尼亚之所以没有任何愧疚感,干净利落完成刺杀任务,是因为坚守着目标是<坏人>这一原则.若想除掉自己的对手,只要瞎编两句说他是坏蛋,蒂尼亚就会不假思索相信.被蒂尼亚除掉的人当中甚至还有<一次用两张抽纸的坏人>.蒂尼亚认为自己是当之无愧的行踪隐秘正义守护神.<br><br>小时候,沙漠精灵妈妈留下人类爸爸和姐姐,带着蒂尼亚离家出走.妈妈禁止提起爸爸和姐姐,但是,蒂尼亚非常惦记从小失联的姐姐.脑海中,姐姐的脸已经模糊不清,也不知道长大后姐姐变成什么样子.但,蒂尼亚坚信姐妹情深,魔法般的命运会让她们心心相印,彼此牵引对方.',
						//12奈莉
						gt_naili: '奈莉,长有八条尾巴的狐仙.<br><br>八尾狐奈莉,天生少一条尾巴,凭借狐仙宝玉之力施展道法.从小与九尾狐佳岚一起成长,一起修炼.因少一条尾巴,道法不及佳岚,修炼偶尔需要佳岚的协助.急需帮助的村民们用恳切祈祷与隆重祭典唤醒了长眠石像奈莉.<br><br>总想利用幼儿般可爱的外表戏弄对方,却不能被人视作小孩.故意装出一副可爱至极的模样瞒过对方,若受骗的人信以为真,把她当作小孩,即刻变脸,恼羞成怒.‘竟把我当成不懂人情世故的孩童？!’缺乏耐心,脾气暴躁,却正值耿介,直言不讳.<br><br>外表稚嫩,却已经历漫长的岁月,从不用敬语,时常大声斥责别人,酷似不懂礼节的孩子.其实,奈莉颇为明智,能够妥善帮助遇到困难的人们,诚实履行身为神仙的义务.与外表相反,兴趣爱好偏向老人,喜欢<又香又甜>锅巴糖果,比起透心凉的冰水,更爱喝<热水>.',
						//14欧格玛
						gt_ougema: '欧格玛,巨型机甲武器.<br><br>身高18米,体重51吨,由地精发明家博士改造侵略者盔甲而成的机器人,所用材料,除侵略者和博士以外,无人知晓.佩戴巨剑,对近程战斗有利,头部最多可装备6枚导弹.抖动躯体,在指定范围内形成震动磁场,对范围内的敌人持续施加压力.<br><br>地精青年艾登是欧格玛驾驶员.侵略者袭击旅馆时,热血青年艾登为了守护笑面神,自告奋勇参加敢死队.受到侵略者空袭,艾登全身上下满是伤痕.幸而,地精发明家博士利用在侵略者盔甲上面发现的技术救活了筋骨尽断,奄奄一息的艾登.博士用机械配件代替了一些无法重生的器官,复活的艾登俨然是半机器人地精.正因为如此,艾登才能成为唯一与欧格玛<通灵>的驾驶员.艾登的身体能与欧格玛融合,操控欧格玛更加得心应手.<br><br>变成欧格玛的半人半机驾驶员之前,艾登除了满腔正义感,什么都没有.住在旅馆的那段期间,以旅馆英雄自诩,是一个冲动莽撞的青年.侵略者战斗结束之后,重获新生的艾登才真正了解到履行身为<笑面神守护勇士>的使命才是自己该做的.目前,艾登假装自己是人类的伙伴,在笑面神罗兰茵周围徘徊,忠实地执行笑面神守护任务,以免她受到侵略者和其他邪恶势力侵袭.',
						//15阿勒夫
						gt_alefu: '阿勒夫是一位专门制作木魔像的炼金术师,追求完美的唯美主义者.<br><br>阿勒夫对美有自己的一套哲学(可以说是个人品味),虽然常人无法理解.他不仅关心外在美,更认同内在美的重要,美是由内向外焕发的.他自带完美雷达,他相信即使看起来再美的人如果完美雷达没反应,那么其内在肯定是丑陋的.只要阿勒夫能找到完美之人,他将对那个人完全服从.<br><br>尽管他外表是个小孩,但他已经38岁了.以前曾有女性嫌弃他太老,于是制造了一种神秘的药物使他变得年轻.但因其无法控制年轻程度,最后变成小孩子.其实他有方法可以变回昔日模样,只是变成小孩后,女性对他的警戒大大降低,也就慢慢接受以小孩的模样生活下去.<br><br>他在家中使用的全名是阿勒夫伊德.他出生在炼金术世家,是个聪颖的孩子,只是喜欢偷懒;某些时候,他也有些女性化的一面.他喜欢用炼金术制作宝石,并将其作为礼物送给女性.当有人寻求帮助时,他马上就能做出一个魔像为人服务.随着与邻国的战争开始,他应王室的要求用桦木做出史上最坚固的魔像,成功保护了国家.但皇室以魔像的力量为契机,试图发动另一场战争.阿勒夫伊德坚决拒绝使用魔像作为战争工具,因而最终被永远流放.离开他的国家后,他发誓要重新好好生活,并改名为阿勒夫.',
						//17未来公主
						gt_weilaigongzhu: '十年后,未来的坎特伯雷公主终于和来到未来浮游城的守护者重逢了.曾经那个无忧无虑跑遍浮游城每个角落的小公主,现在已经长大了.<br><br>身为守护者的你离开浮游城之后,踏上拉赫帝国冒险之旅,却再也没有回来.小公主曾听到拉赫帝国人厌恶坎特伯雷人的传闻,这更让她感到不安.记得上一次你用拉赫帝国公用电话与她通话时说一切安好,小公主还在电话里为你加油助威.当时,不知骑士去向的小公主难以抚平忐忑不安的心,笃定拉赫帝国人及其皇帝对你下了毒手.就在此时,阿依莎高喊着<拉赫帝国与坎特伯雷成为友好同盟>出现在小公主面前.阿依莎与夏皮拉告诉小公主,你比她们早一步离开了拉赫帝国,还以为你已经回到了浮游城.<br><br>年仅10岁的小公主无法理解这突如其来的离别究竟为何,也没有人告诉过她<坦然接受>反而是应对良策.小公主只能一直等下去.她相信骑士不会忘记自己的使命,总有一天骑士会归来,一如既往地第一个和她打招呼.不过,浮游城里调皮的孩子 却欺负她,还说:<你的骑士逃跑了.你姐姐和骑士都讨厌你,他们不要你了.> 温顺的小公主听到这些刺耳的话也会变得凶巴巴,拼了命似的将他们赶走,回到旅馆,就会放声大哭.小公主撕心裂肺的哭声让冷漠的罗兰茵都会感到心疼.<br><br>一时间谣言四起,有人说你死了,有人说你逃走了,也有人说你恪守本分,不管在哪里都会履行自己的义务.小公主不相信任何人说的话,她只相信暂时陷入迷途的守护者终究会回到自己的身边.但是日复一日,年复一年,小公主所坚信的愿望终于支离破碎.因为太过信任,小公主所承受的打击是旁人无法体会的.<br><br>一晃又过了几年,整日以泪洗面,等待查无音讯之人的小公主逐渐心碎泪干,勉强挤出来的泪水也只是因为怨恨和对背信弃义的憎恨.要是你还在这里,这几年发生的一切悲剧或许能避免.浮游城沦为人类的最后一道防线,并肩作战的伙伴们一一逝去,只留下名字和墓碑.而敌人根本不给小公主喘息的机会,一波波不断来袭.长大的公主变成了为拯救人类而孤军奋战的军人,现在,她是志在收复灭亡国家领土的反抗军领袖.在骑士团长伊娃的严格训练下,公主长大后成为坚定的领袖,脸上却经常交替地闪过对沉重负担的压抑、严肃、疲劳,儿时天真烂漫的笑容早已不见踪影.',
						//18佳岚
						gt_jialan: '佳岚,长有九条尾巴的狐仙.<br><br>九尾狐佳岚常年深居狐狸洞,经过潜心修炼,如愿登上封神榜.佳岚与奈莉青梅竹马,两人既是朋友也是对手.佳岚比奈莉多一条尾巴,能够施展更具威力的道法.<br><br>当奈莉沉眠于石像中后,佳岚带着无家可归的小妲璃云游四方,悉心帮助那些有难之人.然而,贪婪的人类忘恩负义.他们垂涎于佳岚的神仙道法,密谋试图将佳岚的一身绝技据为己有,最终导致小妲璃含冤而死.佳岚悲痛不已,怒火攻心,以至于险些走火入魔.好在奈莉从长眠中苏醒,赶在佳岚铸成大错前阻止了他.经过奈莉的劝解,佳岚逐渐振作起来,也拾回了作为神仙普渡众生的初心.重新踏上修心之路的佳岚决心虔诚修炼,希望练就一身能掌控道法的弓箭术.佳岚不拘于停留一处,想用一颗温暖的心抚慰更多人,照亮更宽广的世界.<br><br>漫长的岁月如风而逝,当佳岚修炼成功重返人间时,映入眼帘的一片天地竟是奇形怪状,怪异无边.周围不乏道法能人,更是让人大吃一惊,这世界变得不可思议,越看越糊涂,用途不明的神奇法宝随处可见.在佳岚眼里,利用尖端科学技术打造的全新世界无疑是用超凡道法变换的魔幻天地.另外,暂且不说其他人,佳岚认定索菲是个性格怪癖的神仙.',
						//19贝丝
						gt_beisi: '贝丝,是侵略者阵营的魔法师,也是侵略者组织首席大祭司.<br><br>她时常小题大做,却又足智多谋.贝丝始终坚持<力敌不如智取>,每次制定作战计划时,她就像是在下棋一样,总会先规划整个布局,再预测敌人可能采取的行动与反应,从而制定策略.贝丝总是喜欢在自己的战略中增加戏剧性,尤其注重自己的出场镜头戏剧性.通常来说假扮成普通流民潜入拉赫帝国的坎特伯雷收容所,应该是最有效的.但是,贝丝偏偏选择扮演人见人爱的佩妮,在这期间她欺骗流民,背叛族人,在流民区横行霸道;过了一段时间之后,才露出了自己的真面目.贝丝这么做不仅仅是为了战略,多少也是为了自己的闪亮登场做一个完美铺垫.贝丝向来不达目的誓不罢休,所有人对于她来说只是一枚可用的棋子.为了实现目标,她可以毫不犹豫地抛弃任何人,而这些是为了完成侵略者使命,并按照天神预言履行义务的一部分.<br><br>在侵略者阵营中,天神预言早已被认为是绝对<旨意>,是不可否认的崇高信仰.贝丝和其他侵略者一样,一出生就开始受到熏陶,并且长久地学习、祈祷和信奉这些观点,认为所有过程都是为了夺回原本属于自己的世界.贝丝的棋盘式战略完全根据天神预言进行设计,因为真理永远不会失败.她经常为其他人的无知感到悲伤,毕竟可怜的其他族群是根本不会懂得这些.然而守护者的出现让贝丝的坚定信念开始动摇.因为天神预言到了所有事,但却没有预言到有关守护者的一切.此后,守护者成了贝丝计划中的一大变数,不按常理出牌的守护者也常常让贝丝感到头疼.是天神错了吗?还是守护者作为异类破坏了天神的真实性?贝丝陷入了无限的自我怀疑中.<br><br>贝丝极其讨厌别人叫自己的真名,所有人必须称她为大祭司.这称呼似乎对贝丝而言更为珍贵.',
						//20鲁
						gt_lu: '鲁,圣诞老人小帮手,每逢圣诞节协助圣诞老人将礼物送到世界各地.<br><br>鲁是从古至今存在于世的鹿人族成员.小时候,鲁的族人惨遭偷猎者屠杀,只剩下鲁一个人.野外生存能力和良好的身体素质是鲁与生俱来的本领,而长辈们赐予的名字似乎有被封印的特殊力量.平时隐姓埋名,告知对方的都是别名,只有圣诞老人才知道她的真名.<br><br>鲁待人冷漠,总是对世间万物冷嘲热讽,处事非常冷静.然而,在帮助圣诞老人解决问题或执行任务时,却像变了一个人似的,性格非常火爆,工作充满激情.但正因为如此,她也会经常<丢了西瓜捡了芝麻>.鲁擅长使用炸药和巨型枪支,凭借操纵的<天赋>,驾驶卡车、飞机等大型交通工具也是得心应手.因为雪橇不能遮风挡雨,所以怕冷的圣诞老人痛下决心买了一架专机用于运输礼物.某日,圣诞老人看到鲁正游刃有余地开着专机,吓得跳了起来.圣诞老人问鲁<什么时候拿到了飞行执照?>,鲁却说:<今天第一次开飞机…>.从此之后,这件事就被大家津津乐道.不过,气急败坏的圣诞老人对着鲁的后背用力打了一巴掌,第二天,她就考取了忒提斯飞行员特级执照.<br><br>小时候,鲁是一个身体虚弱的爱哭宝宝.只要受冻,她的鼻子就会变得红红的.邻居家的小孩看到这个样子就会嘲笑她,小小鲁听到后便会哇哇大哭.这时,只要见到甜甜的糖果,马上就会停止哭泣开始微笑.即便长大后遇见圣诞老人,并与其签订<真名契约>以表忠心,她也没改掉爱吃甜食的习惯.',
						//21加百列
						gt_jiabailie: '加百列,经营便利店的前任大天使.<br><br>世界树被烧毁后,失去原有力量的加百列只能在凡界经营一家普通的便利店,以维持生计.虽然今时不同往日,但是店里不乏员工,她还算是一个小有成就的老板.她宣称她会以<维护世界和平为己任,坚持行善积德为使命>,在别人眼里加百列是个大好人,她甚至还获得了<天使老板>、<先进个体户>等称号.<br><br>然而,天使般面孔的背后,却隐藏着疯狂压榨员工的真面目.仗势欺人是加百列最擅长的,经常无视劳动法规定的最低时薪标准,不肯签定劳动合同也是因为不想保障员工权益.加百列甚至将店里过期商品以半价卖给员工,还不忘给自己脸上贴金,说这是在表达对于员工的关怀.尽管她比恶魔还努力压榨员工,加百列仍持有圣洁力量,这让人百思不得其解.在加百列圣洁力量的影响下,人们回复旺盛的精力,而且对诸事充满信心.加百列恰恰是利用这一点,对员工实施<小恩小惠>,让员工无休止地工作.<br><br>曾经侍奉普利特维采的天使一一安吉,是这家店工作时间最长的员工.安吉为了拯救被封印的普利特维采,担任了快要崩溃的天界财务部部长一职.正因为如此,她背负了沉重的债务.就在这时加百列诱惑安吉,使她成为自己店里的员工.不仅如此,加百列还渐渐增加安吉的工作量,安吉在便利店的时间逐渐超过了天界财务部工作时间.每当安吉想回天界时,加百列便说安吉<对普利特维采的忠诚也不过如此>,受到刺激的安吉只能继续留在便利店工作.于是,饱受贫困折磨,对世间人情世故一窍不通的安吉庆幸能以半价买到过期商品而感激加百列,还坚信只要自己努力工作,就能攒够买布丁的钱,并将它献给普利特维采.',
						//22琳
						gt_lin: '琳,在消逝之都经营餐厅的厨师.<br><br>作为厨师的她,平时会用怪物肉作为餐厅的主要食材.刚开始,餐厅的口碑还不错,客人来来往往.就在她以为一切已经走上正轨的时候,一位顾客的差评使刚有起色的生意遭到打击.于是,琳把自己灌醉,试图去忘掉这种悲伤.在她醉醺醺地回家的途中,她救了一个差一点被摩托车撞伤的孩子,自己却身受重伤,昏迷不醒.后来奇迹发生,起死回生的琳像是突然开窍了,厨艺大有进步,还掌握了一套经营餐厅的理论.于是,她下定决心,尝试最后一次.<br><br>其实,琳的不幸从餐厅毁于一旦之前就开始了,她可以算是不幸的化身.小时候,父母的新店因为卷入星河派和春秋派的争斗而倒闭.之后找到的几份工作,也不知道是沾了什么晦气都会倒闭.琳没有选择,只好硬着头皮去向第一次工作的餐厅学厨艺. 无论琳想尝试做什么事,都不会有好结果.久而久之,琳养成了借茶消愁的习惯,隔三差五就喝茶,还醉得不省人事.<br><br>琳喜欢世上所有的茶,但最喜欢的还是消逝之都的特产一谷物茶.喝茶后的琳可以和任何人谈笑风生,也可以和任何人大打出手.那时候的琳性格豪放,活泼友善,清醒时反而却容易紧张.与人交手时亦是如此,只要杯茶,琳就会信心倍增, 挥刀时毫不犹豫,充满力量.琳的刀法非常独特,她的醉刀拳让人分不清是在表演武艺,还是因为喝醉站不稳才摇摆不定的.',
						//23未来骑士
						gt_weilaiqishi: '当可以传送守护者回到过去的大门在未来天堂堡垒开启时,在所有平行宇宙里、数不清的骑士当中的守护者骑士,决定「留在未来世界」并待上10年.<br><br>骑士凝视着大门,她知道未来是可以被阻止的,这样一来10年前的小公主就不会被抛弃.但是,想到才刚适应过去的未来公主可能不复存在,以及想到公主在没有骑士的陪 伴下奋斗了10年的岁月可能会消失,因此骑士做了决定,一个留在未来世界继续战斗的决定.<br><br>从那之后过了10年,与黑暗魔法师的战斗变得更加艰辛,扭转战局似乎是不可能的事.大部分的领土依旧被侵略者占领,活下来的防卫军所剩无几.虽然如此,防卫军并没有解散或放弃,他们坚信骑士不会再次抛弃他们,防卫军在骑士与公主的身后团结一致,获得微小但珍贵的进展并取回一些领地,这就是为什么骑士可以有信心地安慰公主,不要责怪自己没有让骑士回到过去的理由.有了陪伴在身边战斗的伙伴,骑士不后悔待在未来的决定.虽然未来还有许多困难要克服,骑士、公主,以及剩下的防卫军都信赖着彼此勇往直前.',
						gt2_weilaiqishi: '当可以传送守护者回到过去的大门在未来天堂堡垒开启时,在所有平行宇宙里、数不清的骑士当中的守护者骑士,决定「留在未来世界」并待上10年.<br><br>骑士凝视着大门,她知道未来是可以被阻止的,这样一来10年前的小公主就不会被抛弃.但是,想到才刚适应过去的未来公主可能不复存在,以及想到公主在没有骑士的陪 伴下奋斗了10年的岁月可能会消失,因此骑士做了决定,一个留在未来世界继续战斗的决定.<br><br>从那之后过了10年,与黑暗魔法师的战斗变得更加艰辛,扭转战局似乎是不可能的事.大部分的领土依旧被侵略者占领,活下来的防卫军所剩无几.虽然如此,防卫军并没有解散或放弃,他们坚信骑士不会再次抛弃他们,防卫军在骑士与公主的身后团结一致,获得微小但珍贵的进展并取回一些领地,这就是为什么骑士可以有信心地安慰公主,不要责怪自己没有让骑士回到过去的理由.有了陪伴在身边战斗的伙伴,骑士不后悔待在未来的决定.虽然未来还有许多困难要克服,骑士、公主,以及剩下的防卫军都信赖着彼此勇往直前.',
						//24维罗妮卡
						gt_weiluonika: '维罗妮卡是勇士教的女祭司.<br><br>「勇士教」是一个有着「传说的神选者会给予他们救赎并脱离所有世间折磨」信仰的组织,也是一个从侵略者开始攻击人类后创立的新宗教.他们的命运与目标是找到传说的神选者,因为没有人知道谁是神选者,也不知道这个人是否真的存在.他们相信他们必须找到可能还没有意识到自己就是「勇士教」的候选人,并透过神选者试炼唤醒他们身为勇士的能力.关于试炼的细节没有人知晓,但听说目前没有人在试炼后活下来.<br><br>在外面,维罗妮卡是个亲切又天真的领导者,以她纯粹的宗教信念带领人们去信仰与奉献.她是如此的天真,以至于她甚至会向数倍于她体型的敌人传教.但是,当有人拒绝相信勇士时,就完全是不同一回事了.听说当维罗妮卡强迫非信徒跪下忏悔时,眼睛会散发出令人毛骨悚然的光芒.当然,还有另一种状况下她的眼睛会发光,那就是当她遇见勇士候选人的时候.<br><br>维罗妮卡对勇士教非物质的信仰可称为狂热份子当之无愧.她从无条件的信仰本身获得强大的力量,并转化为圣洁的力量.毕竟,在世界之树被烧毁后,还有少数可以正式赐予圣洁力量的神,所以无论多么有力量,她的圣洁力量还是来路不明的危险天赋.然而对信徒来说,没有比勇士更强大的、活生生证据.维罗妮卡使用「被勇士教赐予的圣洁力量」向全世界传道,改变非信徒并逮捕那些逃离礼拜的人.最近,新勇士候选人「守护者骑士」的报告吸引了她的注意.',
						//25诺克西娅
						gt_nuokexiya: '诺克希娅是个可以召唤死灵并用尸块制造怪物的死灵师女孩.<br><br>她先天的力量使她可以看见死灵并与它们沟通,也可以召唤以世界各地收集的「碎片」组成怪物.诺克希娅可以跟任何无生命的东西做朋友并赋予它们角色,就像在玩过家家一样.其中一位巨大的朋友,像是有着保护欲的父亲一样总是待在诺克希娅身旁.<br><br>在诺克希娅小时候,还不了解她的能力是特别的「力量」.以前,她无法分辨生物是活的或死的,并和后者做朋友.其他小孩都和娃娃一起玩,诺克希娅则自己创造了「娃娃」和它们一起玩.大人们对于诺克希娅从动物尸块创造出怪物的行为感到害怕,争论要驱逐她,甚至父母也抛弃了她.所以就在10岁以前,诺克希娅离开了她的家乡开始在世界各地旅行,她在坟墓或是墓园的时候感到最自在了.<br><br>诺克希娅从来不知道怎么像一般人一样表达或感觉情绪,长时间和死灵生活在一起使她的面部表情和声音变得冷漠.还有因为大部分的活人看到她和死灵打招呼时总是感到害怕或憎恶,这让她认为和死灵站在同一边才是对的.尽管和活人打交道很困难又讨厌,诺克希娅依然羡慕他们打造的奢靡文化还有甜点,尤其是在小时候看到店里陈列的巧克力,对她来说真是一大杰作.',
						//26梅丽尔
						gt_meilier: '梅丽尔是丰收之神卡麦尔的神兽,是只拥有花草力量的羊驼.通常,她以羊驼型态伴随在芭莉身边但她可以变化成人类型态.<br><br>她是讨厌几乎所有事物的悲观主义者,也讨厌所有人,甚至包含丰收之神卡麦尔.她的确很感激卡麦尔以爱与呵护将她养大,但是她总是因为忍不住卡麦尔不停的唠叨而翻白眼.卡麦尔希望梅丽尔可以像对芭莉眨眼一样的看着他,但梅丽尔宁愿对着地上吐,要求他不要骚扰她.对卡麦尔来说,梅丽尔无止尽的叛逆过程真是太可悲了.<br><br>梅丽尔讨厌人类,她永远无法理解为什么芭莉愿意帮助那些贪婪的人类;甚至有时候消耗自身的幸福回忆.曾有段时间梅丽尔喜欢人类,因为当人们的目光落在梅丽尔身上时,会立刻因为她可爱的样子而无法自拔.但很久以前,有群人类滥用芭莉的同情心并祈求浪费她回忆的过分事情.如果梅丽尔没有即时惩罚他们,芭莉甚至都不记得梅丽尔和卡麦尔了.自此之后梅丽尔变得警惕人类以从这些自私种族手上保护芭莉.<br><br>梅丽尔讨厌她的人类型态,并不断发牢骚变成人形有多么的不舒服和笨重,还有必须穿上很多的服装.也许这就是为什么当芭莉要求她变化成人形时,她看起来很不耐烦并随便地穿上她的祭司服.芭莉总是尽可能地整理好梅丽尔的服装,但是转眼间又乱七八糟了.尽管梅丽尔无疑是个怪咖,芭莉依然爱她原本的样子.',
						//29罗茜
						gt_luoxi: '罗茜是一位世界级的罪犯,即使拥有最强大保全系统的有钱人也会对她感到害怕.<br><br>她是伪装﹑逃脱﹑误导以及魔术的大师.正当你以为瞥见她时,她就消失了.正当你以为抓到她时,欲发现双手空空.罗茜也是拥有所有可以用于犯罪的知识和技术的天才,对魔术﹑体操和田径很有天分,还拥有医学﹑保全﹑心理学和炼金术的博士学位.不过,虽然每张学位证书上的名字都不一样.她在罪犯之间被称为犯罪公主,大部分的人出自于仰慕才这样叫她.<br><br>罗茜只为了刺激和好玩犯罪,她的犯罪形式以及轻重程度完全看心情.如果你瞥见她而且差点抓到她了,表示她想和你玩.她心情不好的时候,你会因为没有注意到她或犯罪的任何迹象而路过.罗茜在犯罪时最享受的部分就是,刺激、兴奋还有在追逐过程中造成的混乱,被正义英雄顽强地追逐给了她最大的乐趣,使用她华丽的文字游戏来唬弄英雄的判断力和玩智力游戏也是额外特点.当然,就算她玩得很开心,不代表会还你被盗走的物品或金钱.<br><br>罗茜有许多不为人知的一面,她的实际年纪﹑过去,甚至「罗茜」这个名字都不知道是不是真名.有人认为罗茜是因为困扰的青少年时期或社会的腐败而成为骗子,但她只是嘲笑这所有的分析,并说︰「认为别的原因造就了今天的我是个严重的错觉.」她只是在享受而已!<br><br>虽然罗茜因为享受而犯罪,却不擅长开玩笑.她想讲一个合适的笑活,但总是以错误的方式讲出很妙的话.即使想出了一些聪明的笑话,但她表达的方式通常会毁了它,当紧张的气氛因为她开的玩笑而逐渐消失时,她总是感到很受伤.',
						//30索菲
						gtsp_suofei: '超人气科学家一—索菲!今年夏天将席卷整个海滩!<br><br>潜入坎特伯雷高中调查侵略者水晶一案时,人气王的经历让索菲至今难忘.为了再次成为人气王,索菲搜集了世界各地<夏日人气女性>的资料.经过一番研究,她终于得出了结论,并以此为基础进行了形象大改造.索菲利用带有电击与速冻功能的全新减肥仪强行减肥,还在时尚专家的帮助下打造了最流行的泳装,甚至佩戴了可以随便改变瞳孔颜色、提高视力的特制隐形眼镜.总的来说,索菲的转型堪称完美!但是,她钟爱的减肥仪却因为有安全隐患,在申请专利的时候被多次拒绝.<br><br>索菲这次也秉持着<说到做到>的意志力,以她几乎等于零的运动神经学会了冲浪.她不再是一名整天躲在房里做研究、还缺乏维生素D的科学家了.现在的索菲俨然成为了一名肌肉紧实、强壮有力的科学家.于她而言,拿起改造为冲浪板的神奇激光暴风,简直轻轻松松.但人们不明白的是,为什么她要在海滩挥动冲浪板.改造的冲浪板配有神奇激光束,它会在索菲冲浪时制造巨大的浪花,淹没其他冲浪者.<br><br>为了炫耀自己的新变化,索菲经常出现在海滩,但每次出现都会惹出事来.自从索菲骄傲地在海边闲逛,海滩就会接连有人受伤.造成的伤害有:只看脸想和索菲调情结果被揍、在海滩散步时被索菲挥动的冲浪板打中、在索菲附近冲浪被巨浪卷走等等.正因为这样,海滩救生员总是缺人.不知道索菲有没有得到梦寐以求的人气,但可以肯定的是,海滩上的人们看到她就会躲得远远的.既然索菲本人对自己的变化非常满意,只要不在意那些不断在她身边受伤的人,这也算是一件好事吧?',
						//32埃莉诺
						gt_ailinuo: '埃莉诺是统治世界、至高无上的天神之一.<br><br>埃莉诺是财富与繁荣之神,她天生注定会赚钱,就算游手好闲.埃莉诺的命运使她成为天界财务的核心人物,但这也在世界之树失去力量后,她离开天界的那一刻,天界的财务受到了不可挽回的损失.天界还没有克服这样的不量气,刚好被指派为天界实物局秘书的天使安洁,正在为了偿还债务而努力.但是艾莉诺却对此不在意,而且不想帮忙天界的财务.<br><br>埃莉诺也是充满高级艺术品味的女神.她享受史诗、古典音乐,也擅长演奏竖琴.傅闻从她竖琴弹奏出来的旋律可以抚慰勇者们的心.唯一的问题就是,听了她音乐的勇者们变得太沉醉在旋律中并降低太多的戒心.她最爱的活动就是自己可以担任主要演奏者的音乐会.除非舞台设计、灯光和每位演奏者的服装都是最高级的,她才会考虑参加那个活动.<br><br>埃莉诺是个优柔寡断的懒人,只想要花钱闲晃,不想要处理任何重要的事情.她不想要深思任何严肃的事情,并通常直接忽视它们.但多亏这样,她很容易就屈服并适应任何环境.因为她,改变变得很艰难,成功的机会还很低,而且重点很令人恼怒.听说埃莉诺曾经希望并梦想着,身为天界的至高女神,带领着世界通往一个美好的方向,并努力朝目标前进.但是,一次又一次的失败,让她渐渐放弃.现在,埃莉诺只专心在不需要专注或努力的事情上,而且厌恶地逃离重要的事情或是问题.',
						//34埃里娜
						gt_ailina: '埃里娜是传说中的英雄、莉莉丝的骑士,也是魔界国家安全局的局长.<br><br>她平时的形态是老奶奶,但可以暂时觉醒,变回年轻的自己.埃里娜在老年形态下,仍然是一位经验丰富且强大的战士,但她将在紧要关头凝聚力量,回复并使用她从辉煌时代就拥有的能力.然而,回复到年轻的形态需要大量的能量.当她回复原样时,她的记忆力和力量会变得微弱,之后她需要一个漫长的回复期.<br><br>埃里娜是一个活生生的传说,她的名字在近1500年的历史书上频繁出现.无数的诗歌都在赞颂她的胜利,最著名的是她如何击败四个魔神并将他们封印在自己体内.她所持有的魔神魔力,让身体发生了超越一般人的身体能力变化,让她可以在长到不可思议的时间内继续冒险.然而,即使是传说的英雄也经不起时间的考验,在1500年后变成了一个老奶奶.现在她是一个健忘的老奶奶,有时候会放空.<br><br>埃里娜对英雄的热情和精神随着时间的推移而消退,现在的她以更实际、更超然的方式思考和行动.她意识到几个世纪的时间会带走她的亲人、战友,甚至她的事业.所以,她恪守规则,不亲近别人,选择一个人而不是与战友一起冒险.莉莉丝是她一直以来的伙伴,几乎就像家人一样,是规则的例外.莉莉丝可能不会同意这一点,因为埃里娜沉默而任性的态度几乎每天都让她抓狂.',
						//35卡麦尔
						gt_kamaier: '卡麦尔是丰收之神,透过大地和生命本身的力量掌管动植物.<br><br>他是普罗米西亚麾下的神,执行回复世界之树的任务.卡麦尔曾经是一位拥有强大法力的伟大巫师.当普罗米西亚需要一位下位神来管理世界之树时,他被普罗米西亚赐予神圣力量后成为神.卡麦尔目前的首要任务是回复被烧毁的世界之树.他会打倒任何威胁它的人,不论是人类或是神.<br><br>卡麦尔是大型公司卡玛逊的创办人.卡玛逊是一个使用无人机接收订单和运送商品的线上购物中心.它的成立是为了实现卡麦尔获得世界上最大金融力量的目标.他的商业策略非常激进,在业内恶名昭彰,因为他击败了竞争对手,并在他雇用的机器人身上消除了「机器人可以忽略它不喜欢的命令」的思考回路.卡麦尔一直用从卡玛逊那里赚来的钱买下世界之树的遗迹.卡麦尔似乎是在自己寻找回复世界之树的线索,但不知为何,他完全停止了所有的调查.他建造并开放了一部分废墟,成为卡玛逊园区主题公园.卡玛逊园区以拥有众多神秘神器而闻名,即使是现在,也不时会在卡玛逊园区看见在封闭区域内进行调查的团体.调查团体消失后,这个区域进行维护,成为卡玛逊园区的新区域.<br><br>卡麦尔可能是一个大公司冷酷又恶名昭彰的执行长,但对芭莉和梅丽尔来说,却很温暖人心.他把用爱心抚养和教导的两个徒弟当作自己的小孩,但他的爱却很少像其他所有父母一样得到回报.梅丽尔对卡麦尔的关心特别厌烦,这经常让他有点闷.尽管担心芭莉和梅丽尔,卡麦尔总是送他的两个徒弟去远方旅行.不知道是为了回复世界之树,还是为了隐藏他生意人的生活.',
						//37奥尔卡
						gt_aoerka: '奥尔卡是一名军阀佣兵.总是出现在有大冲突的地区.<br><br>她是金钱和力量的坚定信徒.对奥尔卡来说,强者与有钱人凌驾于弱者是理所当然的,而击败强者则是夺取更高位置的必要条件.奥尔卡决心成为这条食物链的顶端,她可以为此付出任何代价.任何有钱赚的工作都必须接受,死后就可以安宁了.奥尔卡完全沉迷于能量饮料和咖啡等兴奋剂.由于睡眠不足,她时常感到疲惫和易怒,但她成为「顶级掠食者」的决心从未动摇.<br><br>然而她完全放弃了社会规范、习俗和责任.对奥尔卡来说,「那些东西不值钱也不好玩」.许多下属因为奥尔卡的能力和高成功率而追随她,但她自己并不管理、照顾或信任他们.有兴致的时候就聚集人取乐,失去兴致就不理他们.<br><br>最近,奥尔卡受雇于攻击阿德拉的侵略者,与王国的海军进行了一场大战.阿德拉的海军司令玛丽娜在战斗中与奥尔卡战斗.紧张的战斗导致奥尔卡夺取了玛丽娜的眼睛,而她则夺取了奥尔卡的手臂.这就是为什么玛丽娜在她的左眼上戴着眼罩,而奥尔卡有一个义肢左臂.奥尔卡痴迷于砍断她手臂的玛丽娜,因为她相信自己是唯一值得并且有能力击杀玛丽娜的人.听到玛丽娜待在浮游城的消息后,奥尔卡亲自前往那里,期待着她最终击杀克星并变得更加强大的那一刻.',
						//39哈娜
						gt_hana: '她是负责引渡死者灵魂走向正确道路的死神.<br><br>由于马虎的性格和天生的厄运,她所做的一切往往都是一团糟.在她有生之年,事情往往还未解决的时候失败就会接踵而至,特别是她主动出面的时候.正因为如此,即使现在成为冥界股份有限公司的职员,也不敢轻易踏出第一步.<br><br>她以死神工作时非常的努力,但是却一直出现失误,收效甚微.因为失误再加上不幸,导致事态进一步恶化的情况变得更糟.结果,工作评估垫底,被公司烙上无能死神的烙印.<br><br>生前围绕着哈娜发生多起诡异的猝死事件.虽然有些人认为这是迷信,但接近哈娜的人通常很快就死了.如此反复,村民们开始一个个地离开哈娜,没过多久,哈娜身边已经没有一人了.这件事深深铭刻在哈娜的心里,这使得她生怕接近别人.<br><br>一个生前留下了强烈遗憾的灵魂,到了冥界就会失去所有的记忆.那些失去记忆的灵魂,有的会成为亡灵游荡在黄泉之下,有的则会成为死神,而哈娜正属于后者.虽然有些死神会因某种契机试图寻回自己的记忆,最终成功解脱痛苦得到转生,但这终究是极为罕见的例子——实际上,大部分死神已经在冥界生活了数个世纪之久.由此看来,死神的数量是一直在增加的;但由于更为快速的冥界人口增长,冥界股份有限公司反而长期处于人手短缺的状态.',
						//41克拉拉
						gt_kelala: '克拉拉,勇土教圣女.<br><br>她称呼维罗妮卡为<教主姐姐>,并忠实地跟随着维罗妮卡.在外人眼里,她们二人关系亲密,一同过着有信仰的生活.于是,普通信众自然也把她们当成学习的榜样.然而,她们之间关系却是真正的主仆,克拉拉只能遵照维罗妮卡的命令办事.不知道为什么,克拉拉的自我意识已经完全崩溃,她认为只有按照维罗妮卡的意愿为勇士教奉献自我才是快乐的,这也是她活下去的唯一理由.<br><br>身为圣女和<武器>,克拉拉是勇士教传教人.而所谓的<传教活动>,就是严惩那些反对勇士教大义的人.只要维罗妮卡下达指令,克拉拉就会激发体内未知的力量处决异教徒.但有时克拉拉会陷入疯狂失去意识,失控的克拉拉无法分清敌我,毫无顾忌地攻击所有人.维罗妮卡却不在乎这种奇怪的状态,反倒认为是<勇士的奇迹>.这样的态度也导致了克拉拉在私下里被视为<随时可能爆炸的定时炸弹>.<br><br>当然,强大的力量从来不乏敬畏者,尤其是当外部力量入侵以至于希望丧失的时候,更是如此.克拉拉那些冠以圣女之名的活动总是令人印象深刻.这也唤起了人们对于圣女>的记忆,并甘愿加入勇士教一一<圣女>是500年前出现,但逐渐人们遗忘的存在.因此,保留行政职能的邻国及其他组织开始警惕日益扩大势力的勇士教,但出于对圣女之力的惧怕,未能采取措施.<br><br>克拉拉初次公开亮相的时间众说纷纭,但大多数人认同她是在勇士教第三次远征之后露面的.为了追寻勇土的踪迹,维罗妮卡和直属祭司们前往人界以外的世界,开始了第三次远征.对于这次远征勇士教信众认为这是勇士教成立以来,面临的最重大存亡危机之一.当时,以远征地区的一个寺院为中心,发生了威力巨大的爆炸,一瞬间远征地区夷为平地,彻底从地球上消失.而现场,只有维罗妮卡牵着一个不知名的女信众生还.自那以后,可怕的惨叫声每晚都会从勇士教圣坛深处传来,像是有人在被拷问一样.一些人能从克拉拉身上感受到过于强大的再生魔法气场,但从来没有人敢问是否与此有关联.',
						//42帕尔瓦蒂
						gt_paerwadi: '帕尔瓦蒂是卡玛逊非官方售后团队中最优秀的员工.<br><br>卡玛逊非官方售后处理团队是聚集众多暗杀者的地方,用于处理妨碍或威胁卡玛逊公司的人,帕尔瓦蒂每次都取得了最佳表现的工作成果.帕尔瓦蒂对上级服从,无论目标是谁,都能迅速处理.由于这种出色的能力,她总能把目标地区搞得一团乱,但帕尔瓦蒂并不知道造成这种混乱的主角是自己.<br><br>帕尔瓦蒂从小就和妹妹一起在父亲手下接受各种训练,她之所以就职于卡玛逊公司,是因为父亲的遗言:希望能在平凡的公司工作,平凡地生活.她认为在卡玛逊公司工作,就是能过上平凡的生活,但现实往往不是那么简单.多次申请卡玛逊面试都惨遭落选后,好不容易才被推荐到一个能够发挥自己技能的部门中成功录用.<br><br>现在父亲的心愿已经实现,帕尔瓦蒂毫不怀疑相信她自己和其他人一样,是一个普通的上班族. 由于工作性质她经常搬家,搬家比较麻烦,但她唯一的爱好就是在新城镇找新餐馆. 虽然一切都是令人满意的生活,但如果有一种愿望的话,她希望妹妹蒂尼亚也会像自己一样过着平凡的生活.',
						//43普莉希拉
						gt_pulixila: '普莉希拉是恶魔郡州长克劳德伯爵和高阶恶魔母亲生下的半吸血鬼.由于是在魔界也有深厚渊源的两个家庭结合,因此打从出生就受到许多人的瞩目.此外,普莉希拉继了两个家庭所有特点,生来便具有难以溯源的强大魔力.<br><br>最近仅以脱离魔神现身的诅咒一事为人所知.魔神其中的彼列现身是只出现在继承魔神之血的恶魔身上的现象.魔神就算死去也不会彻底消灭,会在继承自己血液的其他恶魔身上现身,吸收其魔力并回复力量,等力量全部回复,便会以完好的魔神之躯复活.也许是因为吸收魔力,魔神的咒通常都会出现在当代生来具有最强大魔力的恶魔身上.一些恶魔害怕整个魔界会因为魔神复活再次被战争与恐惧笼罩,一直以来都在寻找开始受到彼列侵占的恶魔,并在魔神完全觉醒前阻断宿主,阻止魔神复活.比起所有法则,彼列现身相关强大法律一直被视为优先,且彼列现身的恶魔,不管是什么身分都会被击杀.此外,这样的斗争持续超过300年,且再也无法在魔界找到彼列的现身,彼列的诅咒似乎就这样消失了. 然而某一天,彼列的现身犹如谎言般,在普莉希拉的母亲爱丽丝身上开始了.虽然克劳德与爱丽丝试图合力阻挡侵占,但力量不足,最终达到难以隐藏症状的境地.想到要是彼列的现身再次出现的事被其他居民知道,不只是自己,就连心爱的女儿普莉希拉也会牺牲的爱丽丝,为了阻止普莉希拉陷入危险,便结束了自己的性命,但就像在嘲笑爱丽丝的牺牲一样,彼列将魔手伸向年幼的女儿普莉希拉.普莉希拉的身躯一开始被侵占,继妻子之后,无法再失去女儿的克劳德伯爵便开始拼命寻找拯救普莉希拉的方法,即使是要受困于无限反覆的时空束缚……由于克劳德伯爵的牺牲,本来侵占普莉希拉身躯的彼列气息便消失了,但是因为彼列失去父母的普莉希拉面临的现实,是由于州长不在而变得混乱的恶魔郡.普莉希拉无法放任父母曾经热爱的城市不管,便登上了新任州长的位子.曾对克劳德效忠的近卫队长与助理,继承伯爵的遗愿守在普莉希拉身边.在继承两边血液的混血少女面前,恶魔和吸血鬼全都安静低下头来,继承典礼比任何时候都要平和.<br><br>然而普莉希拉还不熟悉州长的位子,但为了成为像父亲一样出色的统治者,她正在不断努力.也许是为了摆脱以前内向的面貌,她特别专注于在百忙之中抽空和助理思考有魄力的台词,或是和近卫队长一起智看起来强大的技能·雕然官员们认为她不成熟,但她为了毫无瑕疵填补父亲的空缺尽心尽力,且对所有人都很亲切,所以大家都很疼惜这个年轻的州长.另一边,不只是官员们给予新任州长充满关爱的关注,由于一连串的事件,普莉希拉登上一炮而红的政客行列,成为恶魔郡居民们最关心的话题.出门时擦的护手霜品牌、睡前的书是什么内容等等,普莉希拉的一切都会引起热议.其中明显受欢迎的八卦就是她吸不吸血,有人说普莉希拉也会吸血,也有人持相反意见,街头巷尾议论纷纷,但答案是<普莉希拉也会吸血>.因为普莉希拉也有吸血鬼血统,所以某种程度上看来是理所当然的.据说她特别喜欢以克劳德伯爵的秘方制成的特制血液料理.',
						//44克劳德
						gt_kelaode: '克劳德伯爵是恶魔郡的州长.<br><br>克劳德在恶魔和吸血鬼社会中实现了看似不可能的统一.五百年前魔界统一战争结束后,魔族和吸血鬼突然要生活在同一个屋檐下,双方都无法接受彼此的分歧,冲突逐渐在他们之间酝酿.在矛盾和仇恨快要淹没恶魔郡时,克劳德出现并介入.他许诺两个种族繁荣与和谐,并娶了一个贵族魔族的女儿爱丽丝为妻.两人的结合象征着恶魔郡内部的团结.克劳德得到了恶魔郡公民全心全意的支持,成为了恶魔郡的领袖.有人说克劳德和爱丽丝的结合是一场没有感情的政治婚姻,但克劳德对爱丽丝的爱意是真实的.克劳德没有表现出来,但他深爱着她的陪伴,以及他们共同创造的一方天地.无论何时,他会保护妻子留下的珍宝,他们心爱的女儿普里西拉.正因如此,克劳德踏入永恒封印,争取渺茫的希望.<br><br>在普里西拉的记忆中,克劳德是一个冷漠沉静的父亲.但他其实很爱惜她,普里西拉年幼时写给克劳德的所有信件,都被存放在高度保密但他触手可及的地方.克劳德在经历痛苦的循环时,这些信件也坚定了他的决心.<br><br>克劳德活了很长时间,是一个真正的强者.他天生拥有强大的魔力,是纯血吸血鬼,甚至他可以说莉莉丝是乳臭未干的小孩儿.在漫长的时光中积累的经验使他站在恶魔郡的顶点,利用人造太阳的爆炸来扭转时间,只有因为施法者是克劳德才有可能.<br><br>就像其他吸血鬼一样,克劳德也吸血.许多人担心克劳德在吸血时会咬伤受害者的脖子.因为是纯血吸血鬼,他实际上更喜欢喝像血包一样的精制血液,因为他认为自愿给予的贡品比强行采血更有价值.<br><br>克劳德是烹饪书<享受血液的100种方法>的作者.这是他给普里西拉研究饮血方法的结果,普里西拉有饮血的冲动,但她不喜欢喝.伯爵家的精制血包都是用伯爵本人写的食谱制作的,虽然好喝,但制作的过程非常讲究.因此,伯爵家的很多厨师虽然薪水不薄,但在短时间内就辞职了.',
						//46蕾伊
						gt_leiyi: '蕾伊,兽人组织<爪牙>的首领.<br><br><爪牙>是一个以保障兽人权益为宗旨、以护佑兽人不让其受到歧视,并最终建立兽人专属国度为目标的组织.然而成立之初的<爪牙>因先前被压迫许久,导致整体比较激进,为达目的不择手段行动时,也会选择最偏激且极端的方式.正当人们以为‘ 爪牙>即将变为危险团体时,蕾伊成为了组织的首领.作为首领,蕾伊给所有成员下达的第一道命令是 <暂且收敛自己的尖牙利爪>.于是兽人们在蕾伊的领导下,克制自己的攻击性,逐渐融入社会,被大家所接纳.如今的<爪牙>在人们心目中不仅是一个拥有许多能工巧匠的团队,更是一个社会公益团队.然而,不是所有人都看好<爪牙>,仍有一些戒备该组织的声音,也有传闻说: <爪牙>曾经与黑帮巨头有过接触.某报社甚至刊登了目击蕾伊与使用禁忌死灵术的少女秘密碰头的报道,但因这家报社一夜倒闭,举报人也未曾露面,所以无从得知内容是否属实.<br><br>对蕾伊来说,追随自己的兽人就是她的亲人.虽然表面上看来蕾伊做事有些莽撞,不假思索,但她的潜意识里一直都有对<亲人>的热爱,一举一动都是对<亲人>情深义重的表现.一旦认定对方是自己的手足,蕾伊就会对其深信不疑,这让部下们颇为担心.然而,也正是因为这种性格, 蕾伊手下不乏忠贞不二的兽人.<br><br>身为兽人一族,蕾伊的头发长得非常快,需要经常修剪,剪下来的头发还可以满足她的小癖好——用自己的头发编织衣物.心血来潮时,她还会把这些衣物当做礼物送给周围的亲人和朋友.蕾伊小时候曾一度想成为一名时装设计师,从而可以将自己的兴趣演变为谋生能力,并在专业老师的指导下成就一番事业.但兽人的身份,让她被各大美术学院拒绝,求学道路上屡屡受挫.在蕾伊受过的各种委屈中,小时候的这段经历便是她最为痛苦的回忆……但蕾伊并未放弃爱好,不断精进!现在她用自己头发编织的衣服不仅质量好,而且款式新,连一些科班出身的设计师都只能望其项背.因此,这些衣物一出现在市场,就会被狂热的爱好者哄抢一空, 成交价格更是超乎想象.<br><br>近年来,蕾伊时常为了裂痕山脉因纽特人的事情而苦恼.由于因纽特人外表特殊,很多人误以为他们也属于兽人,但其实并非同一种族.兽人可以变身为动物形态,因纽特人却不能,这是两者之间最为关键性的差异,也是辨别两者非同族的最佳方式.但是,为了融入人类社会,兽人一般很少露出动物形态.几名因纽特人便利用这点,乔装成狼人到处行骗获利,就连兽人也难分辨出真正的狼人和因纽特人.外族冒充导致伤害与损失持续不断,一直以来精心树立的兽人积极形象快要因此而损毁,这让蕾伊终日愁眉不展.',
						//47AA72
						gt_aa72: 'AA72的AA是Amusement Android 的缩写,不同于既有的MK系列,是特别为了娱乐和游戏所制造的新型机器人.为了改善以前的机器人都有的问题讨厌工作的性格,在设计新型机器人AA系列时,设计成在执行各自擅长的功能和任务时会感受到有意义·AA72装备了用来装饰炎热夏日度假尾声的烟火功能,为了让使用者感到快乐而被制造出来但在夏天来临前,无法收到任何命令的AA72失去了对生命的热情.对于为了夏日度假而诞生的AA72来说是理所当然的事.但当初出货时没有被交接到的AA72,误会没有命令是因为自己没有用.AA72认为自己是垃圾,而走向天堂堡垒外面海边的垃圾桶,并在那裡遇见了救生员优姬.AA72在和优姬同行的过程解开了误会,变得更了解自己·伴随著回忆,也获得了史黛拉这个名字.或许是很喜欢这个新名字,AA72从那之后每次自我介绍时都一定会加上自订名称名史黛拉因为有会被报废处理的阴影·没有命令时她会很不安·每当这种时候,她会去找使用者·尽可能说明自己的功能,希望使用者能使用她·其他机器人都无法理解这样的AA72,·并羡慕一年只要放一次烟火就可以休息的AA72.特别是忙于战斗的MK.99最近在改变涂色成AA.99时被发现了.AA72为了证明自己存在的必要性,一直到处找工作.主要是帮忙优姬守护海边·或是帮萝兰茵跑腿.如果能够帮上其他人的忙,即使是有点无理的要求,她通常都来者不拒·她甚至答应苏熙和玛莉安要她成为实验材料的请求·幸好在天堂堡垒居民们的警告和萝兰茵的监视下,阻挡了这个实验.但因为一连串的事件而感到疲惫的萝兰茵说MK系列反而还比较好,宣布会中断生产AA系列.',
						//48罗兰茵
						gt_luolanyin: '今夏,为各位献上海滩回忆的夏日旅馆老板娘一罗兰茵!<br><br>旅馆老板娘罗兰茵每天夜以继日地忙于工作,总是用迷之微笑迎接冒险者们 虽然不曾面露倦容,但她有时候也想要什么事都不想,好好休息,只是没有时间而已<br><br>罗兰茵决定要前往这几年不断延期的度假,并首次制作了原先只存在图稿上的娱乐机器人 有别于主要负责战斗和家事的既有MK系列,负责庆典的特殊机器人AA72就此诞生了.<br><br>特别是在看到会自己去寻找任务的AA系列后,她因而深受感动,让机器人穿上她从卡玛逊购入的特制泳装.<br><br>AA72在海滩上消失时,罗兰茵异于往常地非常慌张,因为除了这是第一次有机器人离家出走,再加上AA72的主要零件冷却装置还没有装上去 她马上派其他机器人去搜索海滩,并向救生员请求协助.但她没有想到那位救生员会带著AA72逃跑.<br><br>罗兰茵结束度假回到天堂堡垒后做的第一件事,就是重新建立机器人的交接制度.加强交接、新增任务监测系统、新增任务认证系统等等,在各个方面进行了优化 虽然有机器人心存不满,觉得去玩一趟却多了些麻烦事,但据说被罗兰茵叫去会谈室后就渐渐平静下来了.<br><br>今年<夏日焦点>把罗兰茵选为<现在最受欢迎的女人>第一名 索菲吵著问为什么第一名不是自己,但罗兰茵只是回应说那种排名有什么重要的 但根据一位女仆的证词,她在萝兰茵房里发现一本奇怪的相簿·里面珍藏着谈论罗兰茵特辑的新闻剪报.',
						//49疯狂熊猫团
						gt_fengkuangxiongmaotuan: '疯狂熊猫团,是雇佣兵、服务人员,也是派对不速之客!不管什么事,哪里有钱可赚,哪里就有他们的身影.<br><br>斯嘉丽是疯狂熊猫雇佣兵团的首领,小时候她被父亲寄养在修女院.当听到父亲说<你是好孩子,会理解我吧?年幼的斯嘉丽只能轻轻点头表示默认.为了成为一个乖孩子,斯嘉丽一直忍气吞声,她渴望别人能给予她一丝善意,却只换来其他孩子们的欺凌和修女们满含失望的目光.有一天-位据说性格非常刁钻蛮横的商人来到了修女院,准备做一笔生意.人们早已听说这位商人会为了利润不择手段,甚至用恶毒的方法折磨别人,起初大家都不愿意和他亲近.但是到了商人离开修女院的那一天,人们的态度已经大幅转变,所有人对商人都变得非常友善.斯嘉丽拦住了正准备启程的商人,向他询问了获得别人善待的秘诀.商人笑着回答道<只要有钱,不管你样貌如何,这世上所有的人都会善待你.>听了商人的一番话,斯嘉丽当晚就逃出了修女院.<br><br>小熊猫虽然尖嘴薄舌,还一身臭脾气, 但他非常喜欢在别人面前炫耀自己过去的英雄事迹.因为他能言善辩,所以只要他讲起故事,大家都会听得入迷,没听完绝不会起身离开.在加入疯狂熊猫团之前,小熊猫曾是个说书人,身边不乏忠实粉丝.一有空,小熊猫就会向他人讲起自己的过往,但每次讲述的内容都不-一样,没人知道他到底做了哪些事.甚至,连他那可笑的名字是不是真名也无从确认.不过,小熊猫口中的故事也有始终如一的部分,一是他因膝盖中箭而退役,二是他非常珍惜疯狂熊猫团的伙伴们.<br><br>丹尼原名丹尼尔,儿时的他聪明绝顶,是一名被坎特伯雷大学提前录取的少年英才.当时这件事在坎特伯雷成为了热门话题,丹尼尔父母出版的<育儿日记>在全国书店掀起了热销狂潮,一度成为了最畅销书籍.丹尼尔的父母非常享受被人瞩目的感觉,然而丹尼尔却与之相反,人们的目光使他感到疲惫,让他逐渐变得意志消沉.突然有一天, 丹尼尔发高烧昏迷了过去,体温连续数日居高不下.被高烧折磨好几天的丹尼尔终于醒了过来,但是大病初愈的他仿佛失去了过去的灵气,在丹尼尔身上已经找不到以往聪慧的模样了.傻里傻气的丹尼尔不再是人们关注的焦点,很快世人就开始对他冷漠以待,而丹尼尔父母的关心也转向了次子.最终,丹尼尔被人们彻底遗忘了,就连他在一位红发女子拜访世家的那一天消失得无影无踪,都没有人察觉到有什么异样.<br><br>目前,仍然没有人知道是什么样的契机让这三人凑在一起组建了疯狂熊猫团.但不管怎样,为财富东奔西走的疯狂熊猫团就像团结友爱的一家人,比任何人都更信任对方,彼此相依为命.<br><br>只要能赚钱,无论海角天涯,疯狂熊猫团都会飞奔过去.疯狂熊猫团比任何人还要早的得知了浮游城即将举办特别派对的消息,他们认为华丽的装饰与豪华晚餐的派对一定能吸引很多富得流油的贵宾.疯狂熊猫团将目标锁定在<大赚一笔>,待切准备就绪,他们信心十足地参加了派对.面对实力超群的竞争对手们,疯狂熊猫团费尽千辛万苦终于获得了昂贵奖品,但不知为何,他们贫穷的雇佣兵生活仍在继续.听说,好不容易在派对获得的奖品被他们拿来当锅垫用.',
						//50克罗姆小姐
						gt_keluomu: 'No.9克罗姆小姐,是黑帮团伙<水库蟒蛇>领导人之一.<br><br>克罗姆小姐加入<水库蟒蛇>是在几年前,正值组织在拉赫帝国为扩张势力而与其他犯罪集团竞争的时候.据说,当时克鲁姆小姐是与<水库蟒蛇>对抗的组织的基层随行人员,有一天她联系了<水库蟒蛇>,提议进行交易.内容是:如果你想要拉赫帝国,你要给我一个干部职位.组织成员们认为这是敌人的密探,并要求立即除掉她,但老板<伟大的奶奶>对克罗姆小姐的大胆很感兴趣.而且,以 失败一次就是死亡 为条件,给了她一年的时间和机会.<br><br>进入<水库蟒蛇>的克罗姆小姐立即扩大了组织的业务.不仅是武器走私,还有煽动、扰乱、暗杀.只要付钱,什么脏活她都干.此后,克鲁姆小姐接近了拉赫帝国的富裕阶层、贵族、皇室等权力阶层.他们刚开始非常警惕,但不久也被克罗姆小姐华丽的言辞所迷惑,组织接受的委托逐渐增加.随着在帝国的影响力增加,克罗姆小姐开始铲除竞争对手.虽然有一些抵抗的动向,但已经无法对抗与拉赫帝国腐败权力层形成牢固勾结关系的<水库蟒蛇>.就这样,克罗姆小姐用了一年将<水库蟒蛇>打造成拉赫帝国暗中的最大组织.<br><br>在帝国效力后,克鲁姆小姐得到了<伟大的奶奶>的认可,成为组织的第九任干部.克鲁姆小姐一上任就迫不及待地解决了分散在组织里的麻烦.在她的轶事中,最有名的是推翻组织的武器走私揭发案,以维持治安的名义获得勋章,伟大的奶奶听到后也大笑起来,对此感到满意.之后她的功劳得到认可,专门负责组织的作战设计.<br><br>克罗姆小姐喜欢毫无差错地按照自己的计划进行作战,她最讨厌计划被打乱.因突发行动而破坏克罗姆小姐作战的人,不论敌我,她都会亲自出面除掉.与作战中发生的伤亡相比,因不服从命令而死亡的组织成员的人数更多.因此,组织内部也有人说,克罗姆小姐应该受到惩戒,但事实证明,即使把因不服从命令而死亡的组织成员加起来,人数也比预想的要少得多,因此就对这件事不闻不问了.<br><br>但克罗姆小姐并不满足于第九领导人的身份.<水库蟒蛇> 对于她而言,只不过是冲向更高处的跳板.在克罗姆小姐的眼里,尽忠于<伟大的奶奶>的阿拉贝尔和其他团伙成员都是可以随意拿来利用的棋子.虽然她掌握了埃尔韦拉的行踪,但为了以后使用,一直瞒着组织.克鲁姆小姐是<水库蟒蛇>的干部,但为了自己的目的,她可以和任何人联手.即使对方是组织瞄准的目标.',
						//51瓦伦西亚
						gt_walunxiya: '瓦伦西亚,恶魔郡的皇家精英卫队队长.皇家精英卫队队长由最忠诚的吸血鬼组成,拥有最强的武力.瓦伦西亚上尉的剑术惊人,在魔界剑术比赛中未尝一败.在成为皇家精英卫队上尉后,瓦伦西亚每一项任务都没有失败,她对这个记录感到非常自豪,瓦伦西亚自信的介绍自己是<恶魔郡的最强剑客>,并且继续保持自己未尝一败的记录.<br><br>许多吸血鬼非常崇拜瓦伦西亚,因为她英勇无敌的剑术,迷人的外表以及她在年轻时就成为皇家精英卫队队长的事实.瓦伦西亚在登上恶魔郡月刊的封面后,许多崇拜着她的年轻吸血鬼陆续参加了皇家精英卫队入门测试.另一方面,也有人对她持负面看法.她的过度自信和缺乏经验受到质疑,瓦伦西亚也看不起除了伯爵之外的其他人,因此,她与伯爵的助手和其他人发生了许多冲突.最重要的是,从小只专注训练剑术的她缺乏灵活性和常识,这让瓦伦西亚相当笨拙,有一个来自伯爵府的著名故事,讲述了瓦伦西亚如何将整理文书工作误认为<处理好它>,并一击将一摞文件劈掉的趣事.<br><br>在承担了为比自己年轻很多的普莉希拉服务的任务后,瓦伦西亚感觉自己的责任更大了,因此,她一直在行动,但似乎对普莉希拉没有太大帮助.相反,是普莉希拉一直给闷闷不乐的瓦伦西亚打气,最近,她在花更多的时间进行训练,她说她做了一个关于某个未知骑士的噩梦,但没有向任何人透露更多的细节,即使普莉希拉用好奇的大眼睛来询问,瓦伦西亚也只是羞红着脸回避了这个问题.<br><br>她严格区分着公事和私事,身为皇家卫队长执勤时,举止严谨,但一天结束后,她回到家后,回直接跳到床上看牛管,由于她特别喜欢动物,她的牛管收藏里充满了各种可爱的动物视频.当她对某些事情感到好奇时,她会在牛管上查找.对于瓦伦西亚来说,对于没有生活经验的人来说,牛管上的信息等于常识.最近,在查找诸如<骑士>、<决斗>和<失败>等关键字时,她了解到一个失败的骑士应该向对手说<杀了我!无论如何我的精神都不会投降的!>',
						//52克罗塞尔
						gt_keluosaier: '克罗塞尔是从一开始就称霸魔界的四魔神之一.在遥远的过去,莉莉斯和埃琳娜经过漫长的斗争打败了魔神,但魔神的灵魂并没有完全消失,而是开始寻找重新复活的方法.<br><br>狡猾的谋略家克罗塞尔选择的方法是与魔族签订契约.克罗塞尔找到了合适的宿主,他诱惑负责魔界安卓机器人生产的大企业<网络机器人>的研究所所长莫妮卡说,如果接受自己,她会把自己从所有痛苦中解放出来.被无尽的工作和过度劳累折磨的莫妮卡接受了克罗塞尔的提议,克罗塞尔按契约占据了莫妮卡的身体.但克罗塞尔侵蚀莫妮卡的身体,慢慢回复力量的计划被莉莉丝和埃琳娜发现了.莉莉丝利用特殊的封印将四魔神封印在了宿主身上,她在谈到预言中的<灭亡时刻>后,表示如果与自己合作,她们日后就能获得自由,并向魔神和宿主提出了服从的契约.这时贝利亚抛弃宿主逃走了,但克罗塞尔、安德拉斯和拜蒙接受了莉莉丝的提议,以获取自由为条件签订了契约.<br><br>签约时,莫妮卡对克罗塞尔只有一个条件,那就是有品位的言行.对于这个条件,克罗塞尔不以为然,但她很明显错了.与莫妮卡的契约给他带来了比任何考验都大的痛苦.因为莫妮卡每当克罗塞尔做出想喝一点的行为时,脑海中就会响起令人超出想象的唠叨和阴沉的笑声,而且在战斗中如果美甲有瑕疵,就会被折磨得失去精神.其中,莫妮卡最愤怒的是克罗塞尔弄坏她的新款名牌大衣的时候,她令人头痛的尖叫一刻也没有停止.最终,克罗塞尔只能配合莉莉丝的工作,工作了三天三夜,给她买了一件新大衣后她才停下来.通过一系列的过程,莫妮卡得到了连传说中的勇士、至高无上的神都无法实现的马辛·克罗塞尔的完全投降.现在克罗塞尔按照莫妮卡的规则完美地过着<正确的生活>.<br><br>不知不觉间,一杯完成任务回家喝的碳酸大麦茶成了克洛塞尔唯一的乐趣.每天都被莉莉丝的命令和莫妮卡在脑海中的唠叨折磨得身心疲惫的克罗塞尔偶然品尝到的碳酸大麦茶,使她忘记了以魔神之躯复活的梦幻般的味道.在这一点上,莫妮卡表示因为要管理身材,所以每月只允许喝一杯,所以每月只有一天的<碳酸大麦茶日>比什么都珍贵.对克罗塞尔来说,碳酸大麦茶是让他坚持到遥远的自由日的唯一动力.',
						//53安德拉斯
						gt_andelasi: '安德拉斯对未服侍自己的人一律都是给予平等的死亡,是名残忍的屠杀者.虽然她是曾统治魔界的四魔神之一,过去败给了莉莉丝和埃里娜后失去了肉体.但是安德拉斯的灵魂并没有消失,后来她附身在一脉相传的的魔族身上,开始回复力量.<br><br>安德拉斯是通过一个奇怪组织附身在席琳身上的.在魔界统一战事中成立的该组织绑架了战事孤儿,当作祭品献上,借此获得魔力,把高纯度的魔力累积在体内让魔神降临,他们的目的是想借此从战事中获得胜利.献上数千名孩童作为祭品,该组织的首领成功让魔神附身在自己的身上.但安德拉斯无法原谅该组织胆敢利用自己的行为,于是当场杀光了所有人.而她附身在带着魔力,原本要被献祭的孩子席琳体内.<br><br>自从被绑架后,席琳早已放弃自己的人生,并向魔神祈祷让她总有一天能够报仇,当安德拉斯现身在自己眼前时,她相信是自己的祈祷实现了.席琳真心的感谢和敬爱,让安德拉斯感到有些惊慌失措.因为在她还是魔神的那段时期,连魔族都畏惧她,不相信、也不愿意追随她.安德拉斯认为是因为席琳被绑架后,长期被囚禁的关系,才导致精神异常.虽然一心认为等她回复正常时,也会和其他魔族一样陷入恐惧和绝望,但随着漫长的时间过去,席琳对安德拉斯的敬爱和信任却越来越强烈.这让安德拉斯开始对席琳产生兴趣.这是她生平第一次对非强者以外的魔族感兴趣.<br><br>后来有相当长的时间,她都过着隐瞒身份的日子,但不幸的是,席琳与安德拉斯被搜索魔神的莉莉丝发现了.经过一番激战后,安德拉斯战败了,莉莉丝提议说未来会给予她自由,但条件是要服从自己.其他魔神都认为依照安德拉斯的个性是绝对不会妥协的.魔神们都认为她的自尊心非常强,会和贝利亚一样,最终抛弃宿主逃走.但出乎意料的是,安德拉斯很爽快就接受了契约.虽然安德拉斯表面上说要瞒住莉莉丝偷偷找其他宿主太麻烦了,但真实原因就不得而知了.<br><br>有一次,安德拉斯因为说莉莉丝是只会耍伎俩的小鬼,结果被莉莉丝禁足了一个月.听见安德拉斯大声嘶吼说光凭这点程度是无法束缚自己的,莉斯就连同席琳要求每天提供的玛德莲与爱情小说也一起禁止了.从那天起,安德拉斯会默默看莉莉丝的眼色,说话也变得小心翼翼.但她只有在莉莉丝面前会小心而已,现在还是每天晚上会偷偷和席琳一起说莉莉丝的坏话.',
						//54
						gt_jin: '堇的母亲是人类,父亲是鬼族,她是半人半妖的混血.<br><br>堇虽然只有一半的鬼族血统,但是因为她是带诅咒的孩子,人们对她即嫌弃又厌恶,于是将她们母女二人一起赶出了村庄,她的母亲向她的父亲求助,但是她父亲鬼族所在的村子已经寸草不生了.<br><br>一位咒术师接近了流离颠沛、身心疲惫的母亲,术士说<因为婴儿有鬼族的血,所以她是没有安息之地的,但如果是我的话...>他花了很长时间来说服这位母亲,成功领养了堇,但咒术师的说辞是假的,他意图把堇变成咒术的核心.对咒术师来说,流淌着鬼的血液的堇是他实现目标的绝佳材料,就这样,得到了堇的咒术师,把她关在了木箱里面准备仪式,但是堇的力量的强大超出了咒术师的预料,咒术失控了,诅咒的力量覆盖了四方,包括咒术师在内的全部生物都消逝了,这一带变成了亡者之地.<br><br>只有堇因为鬼的力量所带来的强大生命力勉强活了下来,在箱子里面保持着微弱的生命,青雪和赤雪来到了这片死亡之地,打破封印救下了堇,虽然青雪和赤雪对木箱里面有个婴儿感到十分意外,但还是决定收养堇.<br><br>就这样,在赤雪和青雪的养育下长大的堇被两人争相称赞的同时也热心地教导各自擅长的东西.堇不断地学习体术、术式、一般常识,在二人的教导下,她学到了很多东西.虽然从形式上来看赤雪、青雪和堇是师生关系,但随着时间的流逝,对他们各自来说都有了更深更大的意义.<br><br>但是,三者的关系因为堇的错误而破裂,经过修行,成长优秀的堇进行了最后的试炼,和赤雪一起挑战古代的恶魔的战斗.在战斗中,堇展现出了压倒恶魔的实力,不过,就在要进行终结的一击的时候,她觉得如果这个试炼就这样结束的话就会和赤雪分开,她因此犹豫了一会,这个机会被恶魔抓住了,恶魔用尽最后的力量发动了石化诅咒,为了保护堇,赤雪替堇承受了诅咒,受到诅咒变成石头的赤雪,虽然没有责怪堇,但是堇比谁都明白这是自己的失误导致的.为了控制妖刀,青雪没能和赤雪一同前进,得知事情缘由的青雪同样陷入了深深的自责.<br><br>之后的堇和青雪,为了让赤雪复原,几乎尝试了所有的方法.但是他们的愿望没有实现几次相聚之后,两人选择离开赤雪身边,堇也好,青雪也罢,虽然都承认彼此是重要的人,但只要相聚在一起,就会想起赤雪,每次看到对方的脸都会有一种罪恶感,无法原谅自己的两人各自走上了不同的道路.就这样,独自一人的堇一边把赤雪和青雪的教导放在心里磨练术法和体术,一边为了寻找从石化中解开赤雪的方法而继续旅行.虽然有时也会帮助遇到困难的人,但堇并没有什么目的,只是为了遵守和赤雪的约定,想和青雪三个人一起找回那段宝贵的时光.<br><br>就这样,数百年的时光流逝,不知不觉间,她的身边聚集了许多被她拯救过的人,堇把他们收为弟子,像赤雪和青雪一样,把自己的技艺传授给他们.他的弟子又向自己的弟子传授技艺,不久就诞生了一个新的流派,自称为忍者,不同流派的忍者们对堇抱有近乎信仰的感情.<br><br>因为有了过去失败的经历,堇对石化解除的赤雪的照顾是过度的,跟随堇的忍者们也都是以她为主,只要赤雪说肚子饿了,堇和她手下的忍者们就会从附近所有的饮食店搜罗食物,为了逃离这样的情况,赤雪瞒着堇和其他忍者们外出的日子越来越多了,但是不管去到哪里,堇都会利用手下的忍者找到她的藏身之处,堇想要每天都陪在赤雪的身边,不离不弃.',
						//56
						gt_luosaita: '罗塞塔是黑帮团伙<水库蟒蛇>的创始成员及干部,目前现在已经离开组织,成为在世界各地流浪的猎人.<br><br>罗塞塔小时候在被称为<狼腹>的地方过着痛苦的生活.<狼腹>是绑架贫民窟被遗弃的孩子,把他们培养成某种团伙战斗员的设施,由于严刑拷打和互相残杀的残酷训练,这里被称为地狱.罗塞塔虽身处地狱,但也同时在寻找反击的机会,她遇到了与自己志同道合的奥利维亚,两人决定一起离开这个地狱.两人在夺取武器后,将<狼腹>中的所有成员全部清除,并将设施烧成灰烬.在这之后,不想再经历地狱般经历的罗塞塔和奥利维亚两人,组成了能够保护彼此的组织<水库蟒蛇>.<br><br>随着<水库蟒蛇>的发展,罗塞塔和奥利维亚就组织运营方针逐渐发生冲突.罗塞塔主张弱小的成员也是组织的一份子应当保护.与罗塞塔不同的奥利维亚则认为弱者是会让组织陷入危险的无用存在.最终,罗塞塔为了整顿组织,向好友兼首领奥利维亚申请决斗.经过激烈的血战,罗塞塔败北了,最终离开<水库蟒蛇>.罗塞塔一消失,奥利维亚便毫无顾忌地整顿组织,因罗塞塔而尚存的人道也都被抹除了.至今流传的<即使是一次任务失败或失败的团伙成员也会被除名>的法则也是在这时制定的.<br><br>离开组织后.漂泊不定的罗塞塔有一天偶然救了被组织追杀的埃尔韦拉.埃尔韦拉固执地缠着罗塞塔说自己也想变强,并提出三天内让罗塞塔做任何事为条件,两人于是同行在一起.起初,罗塞塔想让埃尔韦拉做些无用事,但确认了埃尔韦拉坚强的真心后,罗塞塔给她留下了武器以及承认弟子身份的信后便离开了.<br><br>她在碳酸大麦茶爱好者中被称为传奇人物.罗塞塔每年都参加副本王国的<恶魔之路>巡礼,虽然规定巡礼路是四人一组参加,但罗塞塔每次都以自己能喝四人份为由独自参加.据说,成功踏上巡礼之路后,最后再喝一杯的瞬间,周围客人都会欢呼和掌声不断.<br><br>对于警察而言,罗塞塔是另一种意义的闻名,那就是醉酒后到处酣睡的习惯.在街上、楼顶,甚至别人的床上,只要罗塞塔喝得烂醉,就会在意想不到的地方发现她.如果想叫醒罗塞塔,她就会向周围乱开枪,引发一场骚乱.到了早晨,罗塞塔会若无其事地站起来,再次去喝茶了.',
						//57白雪
						gt_baixue: '白兽,为了和珍贵的朋友一起创造美好的回忆,诚心许愿变成了<白雪>!对白兽而言,小公主是独一无二的珍贵朋友.刚来到浮游城时,白兽除了守护者对谁都保持着绝对的警惕,甚至连罗兰茵为他准备的食物也不敢吃.就这样,白兽的身体日渐消瘦,最后近乎虚脱,只能瘫在地上.小公主看见白兽那么可怜,不忍心让他一直饿着肚子,就把自己的鸡腿让给了白兽.小公主对白兽的照顾可以说是无微不至,为了和白兽更亲近,她还会模仿小狗狗跟白兽沟通.在小公主的不懈努力下,白兽终于敞开心扉和她成为了好朋友.<br><br>然而有一天,白兽想表达自己对小公主的好感从而扑进了她的怀里,却压伤了她.白兽以前用同样的方式向守护者表达过自己的好感,那时候守护者并没有受伤,而且显得特别开心.所以这次,白兽只是想像对待守护者-样向其表达好感,没想到小公主和守护者不同,对她而言,自己沉重的身体和锐利的爪子足以给她带来危险.无意间伤害了小公主的白兽也被吓了一跳,从那以后,他克制着自己,不去<拥抱>小公主,因此这样的事件再也没有发生过.即便如此,未能向小公主表达好感,反而伤害了她的白兽非常自责.<br><br>白兽心想,如果自己变成像小公主一样的人类,就可以尽情地和她玩一整天, 不用担心会伤害到她.于是浮游城雪花节当天,白兽去找芭莉许下了一个愿望:变成人类一天.以前人们来找芭莉都是为了一己私利,她早已疲于应付那些因贪念而许愿的人.然而,白兽不同,他纯真的心愿触动了芭莉的内心,让她重新燃起了帮他人实现愿望的斗志.为了让白兽和小公主相处融洽,芭莉不仅教会了白兽人类的语言和行为逻辑,还送了他很多漂亮的衣服.<br><br>变成人类的白兽还不太习惯柔软的双手和光滑的皮肤,但是,可以无忧无虑地和小公主尽情玩耍这一点就已经让他感到非常幸福了.而化为人形的白兽最开心的一件事,莫过于堆雪人.他原本是栖息于寒冷的裂痕山脉中的守护之狼,喜欢冰凉的东西,皑皑白雪更是他最钟爱的玩具.处于野兽形态时,白兽只能在雪地上跑来跑去和打滚来感受雪的冰凉感,变成人类形态后,双手可以更加精细地揉捏雪团子,体验到更多玩雪的乐趣,对于白兽来说,这无疑是为他展开了崭新的世界.兴奋不已的白兽在小公主的陪伴下开心地玩着雪,直到旅馆周围堆满雪人他才停了下来.<br><br>庆典结束后,白兽虽然变回了原来的模样,但他和小公主的关系更加亲密了.变成人类的经验,让白兽懂得了怎样才能在不伤害小公主的情况下和她一起玩耍.因此,就算不再变成人类,白兽也已感到非常满足.不过,当天空飘起雪花时,白兽就会因为想滚雪球堆雪人而考虑再次许愿.',
						//58卡米拉
						gt_kamila: '卡米拉,侵略者第1军团军长.曾经是继A.H.498年贝娅特丽克丝二世之后即位的坎特伯雷王室的女王.在坎特伯雷被侵略者侵略后便下落不明,之后据悉在入侵魔界的侵略者第1军团中活动.<br><br>在侵略者军团的军长中,卡米拉被公认为是有能力的指挥官.起初救世主任命卡米拉为第1军团军长时,其他军长们对救世主的绝对信任感受到了巨大冲击,但卡米拉军长通过交给自己的作战证明表现出了出色的指挥和战斗能力.看到入侵魔界行动中<仿佛能洞察未来>的行动,军团长们不得不承认卡米拉的军长地位.值得一提的是,第4军团军长虽然承认卡米拉的能力,但同时也保持了警惕,甚至派遣了自己的副军长担任监视角色.<br><br>卡米拉小时候就以出色的才能而闻名,甚至被称为勇士公主.她在很多领域都表现出色,其中枪法和魔法是他人无法比拟的.贝娅特丽克丝二世为她在全国请来了优秀的老师,但没过多久反而超越了那些老师.教她的老师们一致评价说:<如果卡米拉没有继承王室的血脉,她将成为历代坎特伯雷中最强的战士.>特别是骑士团长伊娃在教她时,痛感到才能的差异,一时陷入过低谷.<br><br>过去的卡米拉尽管有着非凡的才能,但她对自己的生活并没有太大的热爱.由于长期的教育,使她对遵循人类预言命运感到强烈的义务感,除了预言以外的一切都麻木了.这不仅包括那些有趣的游戏、表现出的非凡才能的魔法和枪法,甚至是她自己.但是遇到小公主后,一切都开始改变了.没多久,冰冷的卡米拉公主成为了温暖的女王.她自己也不知道这种变化是因为小公主,还是因为意识到命运可能会改变.唯一可以确定的是,对于卡米拉来说,照顾小公主不仅是王室的义务,已经成为比自己的命运更珍贵的存在.',
						//59凯伊
						gt_kai: 'H.E.R.O.S凯伊的H.E.R.O.S是Heavenhold Emergency Recovery Operating System的缩写,是为在遇到紧急情况时回复浮游城系统而制作的机器人.<br><br>从前建造浮游城的时候,为防止控制权转移给敌人的情况,开始设计在任何情况下都可以支援勇士回复控制权的AI.但是设计一个能够处理浮游城的所有控制并具有辨别勇士能力的AI是相当困难的.作为解决方案,是以最适合执行任务的凯登的精神为基础来制作AI.但在将凯登的记忆移植到AI的过程中,从开始创建浮游城时的记忆出现了错误,因此只剩下凯登童年的记忆.这样完成的AI被命名为Kaden Artificial Intelligence,即凯伊.<br><br>小时候的凯登经常喊着<正义>这个词,他以过分的热情将一切与正义结合在一起,这一特质也移植到了凯伊身上.凯伊在刚开始运作的时候做的第一件事就是在浮游城内部转了一圈,用控制权限用<正义>给各式装置命名.据说也正因如此,浮游城的员工们苦不堪言,不喊一声<正义>,设备就无法运转.凯伊在这之后也惹出了不少麻烦,比如大谈正义热血吵到令人耳朵疼,很多人认为这种规定已经与控制权相结合,而且有着自己的魅力,所以最后还是决定维持下去.<br><br>和凯登的童年一样,凯伊也有想成为勇士的愿望,但他最清楚自己不可能成为勇士,他的诞生就是为了控制浮游城,帮助危机中的勇士.为了不妨碍自己的使命,凯伊试图抹去心中的那个愿望,但最终还是无法完全放弃,于是他偷偷设计了一个勇士的姿势来表达他理想中的那个形象.这在某些人看来是个有点尴尬的姿势,但对凯伊而言,摆出这个姿势时,就感觉自己像个勇士.之后将这个姿势解释为<提升勇气和热情的正义神圣的姿势>,并表示启动重要设备时一定要摆勇士的姿势.<br><br>在凯伊全部学习结束后,遵循原计划,为了遵守凯伊的目的以及防止变形,必须让凯伊在浮游城的最底层休眠.这是在浮游城全员齐聚的情况下进行的,这时候就连曾经对凯伊不屑一顾的人都感到遗憾.凯伊直到冬眠之前还安抚大家说自己能做好,所有人都希望能够再次见到凯伊,但同时期望创造凯伊不会苏醒的未来.',
						//62汐雅
						gt_xiya: '汐雅是环游全世界收集和销售物品的万物商.<br><br>喜欢不分大海和陆地收集珍贵的物品.从小就喜欢寻找在大海中很难找到的珍珠或形状奇特的珊瑚,之后,汐雅的好奇心延续到了陆地上的东西,明白了想要得到想要的东西就需要财物,汐雅用自己的收藏品开始了第一次生意,原本只能在大海深处买到的稀有物品瞬间被卖出去了,这时,希雅看到买了自己的东西而高兴的人们,感到最大的意义,决心把做生意当作天职.<br><br>因为对财产和表面装饰没有太大的关心,所以每次都穿着随意的衣服,铺上渔网和包袱做生意,但是因为这样随意的样子,经常会引起是非,不喜欢纷争的希雅即使以较低的价格出售物品或缴纳摊位税等,让自己受到损失也要最大限度地避免纷争,但随着时间的推移,城市的交易场所发生了难以适应的快速变化,随着人数的增加,纠纷也变得难以承受,最终,她开始到能够集中精力做生意的偏僻地方,不知不觉间,汐雅成为了商人之间虽然出售珍贵物品,但却很难见到的传说般的存在.<br><br>每年到一个海边村庄做一次生意.汐雅离开城市访问过的一个村庄,虽然位置和规模都不适合做生意,但他们对希雅带来的东西感到真心高兴,还招待了大麦茶和零食,被亲切的待遇所感动的希雅每年都去这个村庄,和居民们变得亲近,帮助村子里的事情或一起玩耍,居民们也向为村子做出贡献的希雅赠送了店铺形态的推车作为报答,每次都辛苦地搬运行李的希雅被这个礼物感动得热泪盈眶.因此,对汐雅来说,这个村庄是比任何大城市都重要的地方,托村子的福,汐雅经历了很大的变化.随着时代的过去和村庄的发展,人们蜂拥而至,被卷入大大小小的事件中,但对于这个村子,汐雅无法像其他地方一样抛弃并逃跑,她明白了不再只有从纷争中逃跑才是正确答案.<br><br>为了不让人小看自己,利用长时间做生意经验中练成的口才和人鱼的力量,开始对抗威胁村庄和平的纷争.',
						//63SP艾米
						gtsp_aimi: '超人气双面女仆一艾米!今年夏天将为海滩游客提供特别服务!<br><br>艾米和往常一样,最近一段时间也跟自己的搭档魔法师道尔夫一起从事雇佣兵的工作.道尔夫好玩懒做,又喜欢虚张声势,经常把所有差事都丢给艾米,而艾米也早已习惯了一个人承担一切.然而有一天,道尔夫不知起了什么兴致,突然提议今年夏天去海边度假,听到这句话,艾米内心无比兴奋.虽然她面无表情地点了点头表示同意,但一转身,就立刻跑去准备度假用品了.对度假充满期待的她,恨不得带上所有能在海滩玩的东西.不过,艾米很快就发现自己上当了.道尔夫带着艾米来海边根本不是为了度假,他的真正目的是从海滩游客身上捞一笔.还没弄清楚是怎么回事,艾米就按照道尔夫的要求换上改良款式的女仆泳衣当上了海滩服务员.<先在海滩大赚一笔,再去超级豪华酒店享受舒适的假期!>艾米深深地叹了一口气,这才意识到,自己又傻傻地相信了道尔夫的花言巧语.<br><br>事已至此,艾米只好硬着头皮开始了服务员的工作.但店铺开张第天起,店里就来 了不少找茬闹 事的客人,甚至有不少男客人看到艾米穿着一身泳衣就向她搭讪.从来没有当过服务员的艾米,应付麻烦客人的要求就已经很困难了,这些来搭讪的难缠客人,更是让她倍感压力.可是,道尔夫只会不断强调<接待客人时,必须始终保持微笑!>艾米压抑心中的怒火勉强露出了微笑,但随着客人们的无理取闹越来越严重,艾米隐忍多时的第二人格终于彻底爆发了.<br><br>后来,店铺被卷入一场在海滩发生的大骚乱,没过多久就倒闭了.道尔夫承认自己强迫艾米做了一些她不愿意的工作,并向她道了歉.不仅如此,为了得到艾米的原谅,他还答应给艾米提供为期一周的特别假期.道尔夫原本以为艾米会像以前那样原谅他并拒绝休假.但出乎意料的是,艾米申请了一天的休假,并说要和一位朋友去村里逛逛.回来后,艾米也没有告诉道尔夫这一天是和谁一起度过的,但她脸上洋溢着幸福的光彩.好奇的道尔夫偷偷看了艾米的明年计划表,发现那上面已经标注了明年再来海滩度假的日期.',
						//65SP夏皮拉
						gtsp_xiapila: '拉赫帝国超人气龙骑士——夏皮拉,今年夏天想让阿依莎度过最美好的假期!<br><br>夏皮拉带着她的<完美假期计划>径直奔向了海滩,却发现皇女依旧身穿制服,沿着海岸线进行实地调查.却发现皇女依旧身穿制服,和她展开了有关军事作战的讨论.她越发觉得心急如焚,但也无法直接打断阿依莎.<br><br>暮色降临时,换上海滩泳装的阿依莎出现在了她的面前.一股莫名的感动涌上心头,她知道,平时只穿制服的阿依莎一定是为她特意换上了泳装.那一晚没有其他人打扰她们,夏皮拉和阿依莎一边享用温馨的晚餐,一边眺望大海,度过了一段愉快的时光……',
						//sr
						//5卡瑞娜
						gt_karina: '卡瑞娜,吸血鬼野丫头.<br><br>人类与吸血鬼长期和平共处,吸血鬼不再汲取人类血液而生存.成熟而有礼的吸血鬼会在献血车等正规的交易所购买血液.但身为历史悠久的吸血鬼家族独生女,从小娇生惯养的卡瑞娜根本不在意这些礼仪与流程.只要是看着漂亮,闻着香甜,吃着美味的东西,非要占为己有,才善罢甘休的不懂事的吸血鬼少女.<br><br>跟在路人后面,吸取少量血液,对卡瑞娜来讲,只是有趣而甜美的游戏.小心不要被她天真的面孔所骗,若有机会与其同行,一定要记得随身携带补铁药丸.',
						gtre_karina: '',
						//15索菲
						gt_suofei: '索菲,魔法学院高材生.<br><br>虽没有任何魔法天赋,却擅长融合魔法与技术进行创新发明,施展名曰<魔科学>的超凡魔法.<br><br>聪明伶俐,但缺乏社交能力,不会分场合,经常口无遮拦地说出<比我笨的你们>侮辱对方.不认识索菲的人还以为她品性恶劣,其实,索菲只是不懂得交际,分不清哪些话该说,哪些话不该讲,也不明白怎样才是为对方着想.她喜欢指出别人的缺点,而为他人讲解是想炫耀自己胜过旁人的能力,因此,越发难以与人相处.<br><br>曾经向学院申请过组建<给魔法时代寄抗议信>社团,被学院领导拒绝.(根据考据,其角色原型应该出自女版<捉鬼敢死队>)',
						//18克雷格
						gt_keleige: '克雷格,地牢王国勇士落选者.<br><br>为了成为勇士,20年来一直不懈锻炼,每5年参加地牢勇土大赛,挑战大恶魔击杀,但是屡战屡败只好在一家酒吧当保镖维持生计. 失败虽不陌生,但害怕20年的努力与付出成为泡影,这种恐惧让他痛苦难耐.即使如此,面对挫折,永不言败,奋力向前的韧劲与勇气绝不亚于其他勇土挑战者.<br><br>体格健壮,拥有超强抵抗能力的挑战者,只身抵挡火攻、水攻、魔法等各种物理攻击,堪称人肉盾牌.穿戴一身性能优良的盔甲,战斗力大大提升.',
						gtre_keleige: '克雷格,现任浮游城士兵训练教官,他也是一名为了成为真正的勇士积极进取、不断超越自我的战士.<br><br>20年来,克雷格以勇士为目标,不懈锻炼,勇于挑战.但或许时运不济,亦或命途多舛,克雷格在前几次地牢勇士大赛中表现平平.即便如此,他也没有放弃信念,反而更加锲而不舍地追求自己的梦想.经历漫长的失败后,克雷格终于击败地牢大恶魔,实现了多年来的心愿.挑战途中,克雷格因为披上了哈尔巴尔临阵脱逃时丢弃的盔甲,大赛结束后差一点让哈尔巴尔冒名邀功.幸好,守护者与艾尔丽灵机一动,巧妙地揭穿了厚颜无耻的哈尔巴尔.误会消除了,克雷格也就自然而然得到了大家的认可,成为了地牢王国的勇士.然而,就在愿望实现的那一天,克雷格放弃了成为勇士.在与守护者并肩作战的过程中,克雷格心里滋生了一个新的愿望,他想与守护者一起拯救世界并成为一名真正的勇士.艾尔丽知道克雷格的新愿望之后,表示赞成并全力支持他.于是,他们和守护者一起离开地牢王国前往了浮游城.<br><br>为了成为勇士,克雷格长期在艰难的环境中努力奋斗,所以每当他看到别人和过去的自己一样身处困境时,都会伸出援手.一开始,克雷格只是给那些需要帮助的人提一些简单的建议或帮他们矫正训练姿势.后来,这种基于丰富实战经验的各种知识和优秀的传授方式让越来越多的人喜欢,克雷格身边的追随者一天比一天多了起来.想请教克雷格的人实在是太多了,以至于最后克雷格不得不进行集体授课.骑士团长伊娃关注到了这一点,便正式任命克雷格为训练教官.如今,克雷格已经完全适应了教官的工作并且成为了浮游城首席教官.<br><br>诸如包括剑术和盾牌术在内的各种身体训练、在艰苦环境中生存的方法、预防倦怠的心态训练等,这些都是由克雷格负责培训的课程.只要克雷格开讲,每门课都会人气爆棚,其中最受欢迎的就是<地牢逃生攻略>.克雷格对装备和消耗品严重短缺的极限环境做了精细描述,内容生动逼真,他还能准确示范教材中所提到的生存技巧,水平堪称一流.<br><br>跟随克雷格的艾尔丽,告别了收集遗物的工作并且开始了新的生活.艾尔丽之所以改变想法是因为她看到了克雷格现在深受他人敬仰,很多人还需要依赖克雷格的帮助.于是,艾尔丽决心做一个踏踏实实的人,即使以后面对受人敬仰的克雷格也能问心无愧.艾尔丽认为自己若能入职全球大型企业卡马逊,就可以在克雷格身边继续帮他实现新的梦想.因此,艾尔丽立刻向卡马逊客服中心提交了一份名为<卡马逊存在的67个问题>的调研报告,并声称若想拿到解决方案就聘用她.就这样,艾尔丽的卡马逊就业计划成功了,后来这件事广为流传,在希望入职卡马逊的新人当中更是成为了一段传奇.入职成功后,艾尔丽在职场中快速晋升,目前担任卡马逊浮游城支部的部长.',
						//19赤雪
						gt_chixue: '赤雪,游历世界的剑士.<br><br>化身石像500年之久,苏醒之后,对变化万千的世界感到陌生.相反,对其他人完全不知的过往世界倒是了如指掌.面对与以往不同的新武器与战斗方式,不加深思,用过去传统方式与习惯投入战斗,豪放不羁的过去世界剑士.<br><br>无论过去,还是现在,赤雪浪迹天涯的目的只有一个,就是与强者对决.只要有机会,便不顾一切挑战强者,每次交战都会全力以赴.性格豪爽,败在实力派强者手上,毫无怨言.淳朴善良的赤雪的爱好仅仅是与强者较量.',
						//26艾米
						gt_aimi: '艾米,身穿仆人服的雇佣兵.<br><br>艾米身上的这套仆人服并不是自愿穿上的,是谎称宫廷魔法师的搭档道尔夫为了演戏不露马脚而要求的.<br><br>长期穿着不喜欢的服装,还要配合虚有其表的懒鬼道尔夫演戏,导致精神压力过大.总是一副冷漠阴沉的表情,时常低声嘟囔.与对手交战时,之前积累的压力得到释放,露出可怕面孔,变成另外个人. 毫无疑问, 战斗中的艾米是名副其实的狂暴战士. 挥舞巨剑如使用木棍般轻松自如, 拥有非凡的腕力.吼声震慑四方,拥有超强战斗力,乐于交战,都令人毛骨悚然.',
					},
					translate: {
						//势力部分
						gt_shui: '水',
						gt_huo: '火',
						gt_tu: '土',
						gt_guang: '光',
						gt_an: '暗',
						gt_xu: '虚',
						gt_wu: '无',
						//分组部分
						kgqgj: '坎公骑冠剑',
						kgqgj_zhanshi: '坎公骑冠剑·战士',
						kgqgj_sheshou: '坎公骑冠剑·射手',
						kgqgj_tanke: '坎公骑冠剑·坦克',
						kgqgj_fuzhu: '坎公骑冠剑·辅助',
						kgqgj_erzhuan: '坎公骑冠剑·二专',
						kgqgj_shengjie: '坎公骑冠剑·升阶',
						kgqgj_boss: '坎公骑冠剑·首领',
						kgqgj_other: '坎公骑冠剑·其他',
						//武将部分
						opanicsido: '残荷',
						boss_opanicsido: '残荷的试炼',
						gt_shenmiren: '神秘人',
						gt_he: '他',
						gt_she: '她',
						gt_it: '它',
						//士兵
						gz_shibing1gt_huo: '坎兵',
						gz_shibing2gt_huo: '坎兵',
						gz_shibing1gt_shui: '坎兵',
						gz_shibing2gt_shui: '坎兵',
						gz_shibing1gt_tu: '坎兵',
						gz_shibing2gt_tu: '坎兵',
						gz_shibing1gt_guang: '坎兵',
						gz_shibing2gt_guang: '坎兵',
						gz_shibing1gt_an: '坎兵',
						gz_shibing2gt_an: '坎兵',
						gz_shibing1gt_xu: '坎兵',
						gz_shibing2gt_xu: '坎兵',
						gz_shibing1gt_wu: '坎兵',
						gz_shibing2gt_wu: '坎兵',
						//ssr
						gt_puliteweicai: '普利特维采', //1
						gt_malina: '玛丽娜', //3
						gt_bali: '芭莉', //6
						gt_ruipina: '瑞皮娜', //7
						gt_lanr: '兰儿', //8
						gt_youjin: '尤金', //9
						gt_diniya: '蒂尼亚', //10
						gt_naili: '奈莉', //12
						gt_ougema: '欧格玛', //14
						gt_alefu: '阿勒夫', //15
						gt_meiya: '美娅', //16
						gt_weilaigongzhu: '未来公主', //17
						gt_jialan: '佳岚', //18
						boss_jialan_ab: '九尾狐',
						boss_jialan: '九尾狐佳岚',
						gt_beisi: '贝丝', //19
						boss_beisi_ab: '黑暗魔法师',
						boss_beisi: '黑暗魔法师贝丝',
						gt_lu: '鲁', //20
						gt_jiabailie: '加百列', //21
						gt_lin: '琳', //22
						gt_weilaiqishi: '未来骑士', //23
						gt2_weilaiqishi: 'Ⅱ未来骑士',
						gt2_weilaiqishi_prefix: 'Ⅱ',
						//"gt2_weilaiqishi_ab":"未来骑士",
						gt_weiluonika: '维罗妮卡', //24
						gt_nuokexiya: '诺克希娅', //25
						gt_heianlinghun: '黑暗灵魂',
						gt_meilier: '梅丽尔', //26
						gt_luoxi: '罗茜', //29
						gtsp_suofei: 'SP索菲', //30
						gtsp_suofei_prefix: 'SP',
						//"gtsp_suofei_ab":"索菲",
						gt_ailinuo: '埃莉诺', //32
						gt_ailina: '埃里娜', //34
						gt_kamaier: '卡麦尔', //35
						gt_aoerka: '奥尔卡', //37
						gt_hana: '哈娜', //39
						gt_kelala: '克拉拉', //41
						gt_paerwadi: '帕尔瓦蒂', //42
						gt_pulixila: '普莉希拉', //43
						gt_kelaode: '克劳德', //44
						gt_leiyi: '蕾伊', //46
						gt_aa72: 'AA72', //47
						gtsp_luolanyin: 'SP罗兰茵', //48
						gtsp_luolanyin_prefix: 'SP',
						gt_fengkuangxiongmaotuan: '疯狂熊猫团', //49
						gt_keluomu: '克罗姆小姐', //50
						gt_keluomu_ab: '克罗姆',
						gt_walunxiya: '瓦伦西亚', //51
						gt_keluosaier: '克罗塞尔', //52
						gt_andelasi: '安德拉斯', //53
						gt_jin: '堇', //54
						gt_baimeng: '拜蒙', //55
						gt_luosaita: '罗塞塔', //56
						gt_baixue: '白雪', //57
						gt_kamila: '卡米拉', //58
						gt_kai: '凯伊', //59
						gt_xiya: '汐雅', //62
						gtsp_aimi: 'SP艾米', //63
						gtsp_aimi_prefix: 'SP',
						//"gtsp_aimi_ab":"艾米",
						gtsp_xiapila: 'SP夏皮拉', //65
						gtsp_xiapila_prefix: 'SP',
						//"gtsp_xiapila_ab":"夏皮拉",
						//sr
						gt_karina: '卡瑞娜', //5
						gtre_karina: '界卡瑞娜',
						gtre_karina_prefix: '界',
						//"gtre_karina_ab":"卡瑞娜",
						gt_xialuote: '夏洛特',
						gt_suofei: '索菲', //15
						gt_keleige: '克雷格', //18
						gtre_keleige: '界克雷格',
						gtre_keleige_prefix: '界',
						//"gtre_keleige_ab":"克雷格",
						gt_chixue: '赤雪', //19
						gt_aimi: '艾米', //26
						sp_aimi: '艾米',
						//技能部分
						opanicsido0: '试炼',
						opanicsido0_info: '你登场后,你可以从X张<坎公骑冠剑>武将牌中选择一名并获得其所有技能(X为你的体力上限).', //,你将势力属性变为与其相同.",
						opanicsido1: '摸鱼',
						opanicsido1_info: '隐匿技,你登场后,你可以从X张<坎公骑冠剑>武将牌中选择一名并获得其所有技能(X为你的体力上限).', //,你将势力属性变为与其相同.",
						opanicsido2: '划水',
						opanicsido2_info: '出牌阶段限一次,你可以从Y张<坎公骑冠剑>武将牌中选择并获得至多Y个技能(限定技、觉醒技、使命技、主公技除外)直到你下次发动此技能(Y为你已损失的体力值).',
						boss_opanicsido1: '试炼',
						boss_opanicsido1_info: '在与<坎公骑冠剑>角色的战斗中击败残荷.',
						//"boss_opanicsido2":"规则",
						//"boss_opanicsido2_info":"击杀随从的盟军摸三张牌;盟军阵亡后,其余盟军各摸一张牌(若其为<坎公骑冠剑>角色则改为摸三张牌).",
						boss_title: '首领',
						gt_suoxie: '锁血',
						gt_suoxie_info: '锁定技,当你进入濒死状态时,取消之.',
						gt_jiejian: '借鉴',
						gt_jiejian_info: '锁定技,游戏开始时,你获得一名其他角色武将牌上的所有技能.', //,你将势力属性变为与其相同.",
						gt_fenghe: '缝合',
						gt_fenghe_info: '出牌阶段限一次,你可以失去一个技能并获得场上角色武将牌上的一个技能.',
						//ssr
						//1普利特维采
						gt_shenghuo: '圣火',
						gt_shenghuo_info: '出牌阶段限一次,你可以将一张红色牌当火【杀】使用并复原你的武将牌.你以此法造成伤害后,直到你的下个回合结束,你使用红色牌后可以视为使用一张火【杀】.',
						gt_huomian: '豁免',
						gt_huomian_info: '锁定技,当你受到伤害时,你进行一次判定,若结果为♥️️️,防止此伤害.',
						//3玛丽娜
						gt_juesheng: '决胜',
						gt_juesheng_info: '当你因【决斗】对一名角色造成伤害后,你可以获得1点护甲.', //当你第偶数次发动此技能时,你对其造成1点伤害.",
						gt_qianyin: '牵引',
						gt_qianyin_info: '出牌阶段限一次,你可以摸一张牌并与一名其他角色拼点,赢的角色视为对没赢的角色使用一张【决斗】.',
						//6芭莉
						gt_xianhua: '鲜花',
						gt_xianhua2: '鲜花',
						gt_xianhua_info: '每名角色的出牌阶段限一次,其可以从牌堆随机获得其没有的花色的牌各一张,你观看并弃置其或你等量的牌.',
						gt_youli: '游历',
						gt_youli_info: '每轮限一次,当一名角色因弃置而失去牌后,你可以获得这些牌.',
						//7瑞皮娜
						gt_yinglang: '影狼',
						gt_yinglang_info: '锁定技,你使用【杀】无距离限制.你使用【杀】造成的伤害随机增加0-2点.',
						gt_liexi: '猎袭',
						gt_liexi_info: '出牌阶段限一次,你可以将一张牌当一张指定至多四名座次相邻目标的【南蛮入侵】使用.',
						gt_zuzhou: '诅咒',
						gt_zuzhou_info: 'undefined',
						gt_heimao: '黑猫',
						gt_heimao_info: 'undefined',
						//8兰儿
						gt_zhouquan: '咒拳',
						gt_zhouquan2: '咒拳',
						gt_zhouquan_info: '锁定技,当你使用或打出一张牌后,你获得此牌名称字数个<咒>(最多25个).当你需要使用或打出一张【杀】时,你可以移去五个<咒>,视为使用或打出一张雷【杀】.',
						gt_taiji: '太极',
						gt_taiji_info: '转换技,出牌阶段限一次,阳:你可以将一张红色牌当一张【火烧连营】使用;阴:你可以将一张黑色牌当一张【水淹七军】使用.',
						gt_suxing: '复苏',
						gt_suxing_info: '每三轮限一次,当一名角色受到伤害后,若其体力值小于体力上限的一半,你可以令其回复1点体力.',
						//9尤金
						gt_teji: '特技',
						gt_teji_info: '锁定技,你对攻击范围内的角色使用【杀】无次数限制;你对攻击范围外的角色使用【杀】无距离限制.',
						gt_jiche: '机车',
						gt_jiche_info: '出牌阶段限一次,你可以与你的上家或下家交换位置并对其造成1点伤害.',
						//10蒂尼亚
						gt_shajian: '沙箭',
						gt_shajian2: '沙箭',
						gt_shajian_info: '每回合限一次,当你使用或打出一张【杀】或【闪】时,你可以摸一张牌并弃置对方一张牌,令其获得一枚<沙>标记(至多为2).',
						gt_shabao: '沙暴',
						gt_shabao_damage: '沙暴',
						gt_shabao_info: '出牌阶段限一次,你可以将一张牌当【万箭齐发】使用.当你因此对有两枚<沙>的角色造成伤害后,你令其移去两枚<沙>并对其造成1点伤害.',
						//12奈莉
						gt_xianyu: '仙玉',
						gt_xianyu_info: '一名角色的回合结束时,你可以摸X张牌(X为本回合你因弃置而失去牌的数量).',
						gt_huwei: '狐尾',
						gt_huwei_info: '锁定技,当你使用或打出第二、三、五张牌时,你弃置至多一张牌并弃置一名其他角色等量的牌;当你使用或打出第八张牌时,你弃置至多两张牌并弃置一名其他角色等量的牌,重置此技能.',
						//14欧格玛
						gt_bidun: '臂盾',
						gt_bidun2: '臂盾',
						gt_bidun_info: '锁定技,当你于每回合第一次受到伤害后,你对伤害来源造成等量伤害.出牌阶段限一次,你可以摸两张牌,若如此做,攻击范围内含有你的角色可以对你使用一张【杀】.',
						gt_tongyu: '统御',
						gt_tongyu_info: '结束阶段,你可以令任意名手牌数小于你的角色各摸一张牌.',
						//15阿勒夫
						gt_moxiang: '魔像',
						gt_moxiang_info: '其他角色的出牌阶段开始时,你可以交给其一张手牌,其可以令你摸一张牌.若其为女性角色,则改为其可以令你摸两张牌.',
						gt_shanshen: '山神',
						gt_shanshen_info: '锁定技,当你受到伤害时,若伤害来源的攻击范围大于2,此伤害为1.',
						//16美娅
						gt_qumo: '驱魔',
						gt_qumo_info: '每回合限一次,当一名角色受到伤害后,你可以进行一次判定,若结果为:红色,受伤角色回复1点体力并弃置判定区的一张牌;黑色,你视为对伤害来源使用一张火【杀】且此【杀】造成伤害后你摸一张牌.',
						gt_qingdian: '庆典',
						gt_qingdian_info: '出牌阶段,你可以与一名角色猜拳,赢的角色获得对方所有手牌.',
						gt_nuanfeng: '暖风',
						gt_nuanfeng_info: '蓄力技(10/10),每回合每项限一次,当一名角色受到伤害后,你可以消耗1点蓄力值或弃置一张红色牌,令其回复1点体力.',
						gtold_nuanfeng_info: '游戏开始时,你获得十个<暖风>标记.每回合每项限一次,当一名角色受到伤害后,你可以选择一项:1.移去一枚<暖风>标记;2.弃置一张红色牌.若如此做,其回复1点体力.',
						//17未来公主
						gt_fengbao: '风暴',
						gt_fengbao_info: '出牌阶段限一次,你可以将一张武器牌当【出其不意】使用并摸此牌攻击范围张牌.',
						gt_pingzhang: '屏障',
						gt_pingzhang_info: '当你使用的锦囊牌造成伤害后,你可以令一名角色获得1枚<屏障>标记.(每名角色至多可以有3枚<屏障>标记,有<屏障>标记的角色受到伤害时,防止此伤害并移去1枚<屏障>标记)',
						gt_zhengzhao: '征召',
						gt_zhengzhao_info: '出牌阶段限一次,你可以令所有在你的攻击范围内的角色选择一项:1.对你使用一张【杀】;2.令你摸一张牌.',
						gt_jiefang: '解放',
						gt_jiefang2: '解放',
						gt_jiefang_info: '主公技,当其他<坎公骑冠剑>角色受到的伤害被防止时,其可以令你摸一张牌.',
						//18佳岚
						gt_daoshu: '道术',
						gt_daoshu2: '道术',
						gt_daoshu_red: '道术·红',
						gt_daoshu_black: '道术·黑',
						gt_daoshu_info: '每回合限一次,当你失去牌后,若其中有:黑色,你可以视为使用一张雷【杀】;红色,你可以视为使用一张【无中生有】.',
						gtold_daoshu_info: '每回合限一次,当一名其他角色获得你的一张牌后,若此牌为:红色,你可以视为使用一张【无中生有】;黑色,你可以视为使用一张雷【杀】.',
						gt_daoshu2_info: '每回合限一次,当你使用一张牌后,若此牌为:红色,你可以视为使用一张【无中生有】;黑色,你可以视为使用一张雷【杀】.',
						gt_shenling: '神灵',
						gt_shenling2: '神灵',
						gt_shenling_info: '使命技,其他角色的出牌阶段限一次,其可以令你交给其一张牌.<br>失败:当一名其他角色死亡时,或当你进入濒死状态时,你回复体力至上限并视为对所有其他角色依次使用一张雷【杀】,将〖道术〗描述中<当一名其他角色获得你的一张牌后>修改为<当你使用或打出一张牌后>.',
						gt_daofa: '道法',
						gt_daofa_info: '每回合限一次,当你使用或打出一张牌后,你可以视为使用一张雷【杀】.',
						gt_huxian: '狐仙',
						gt_huxian_info: '一名角色的回合结束时,若你的手牌数小于你的体力上限,你可以视为使用一张【无中生有】.',
						gt_beinu: '悲怒',
						gt_beinu_boss: '九尾狐佳岚',
						gt_beinu_info: '觉醒技,准备阶段,你将体力上限修改为九并回复体力至上限.',
						//19贝丝
						gt_kousha: '扣杀',
						gt_kousha_info: '出牌阶段限一次,你可以将一张【杀】当刺【杀】使用并摸X张牌.(X为在你攻击范围内的角色数且至多为3)',
						gt_lieshi: '猎食',
						gt_lieshi_info: '锁定技,攻击范围内有你的角色视为在你的攻击范围内;当你使用【杀】对其他角色造成伤害后,你获得1点护甲.',
						gt_qinxi: '侵袭',
						gt_qinxi2: '侵袭',
						gt_qinxi_info: '出牌阶段限一次,你可以视为使用一张【决斗】.',
						gt_qinxi2_info: '出牌阶段限一次,你可以视为使用一张【南蛮入侵】.',
						gt_shoulie: '狩猎',
						gt_shoulie2: '狩猎',
						gt_shoulie_info: '锁定技,攻击范围内有你的角色视为在你的攻击范围内;当你对其他角色造成伤害后,你弃置其一张牌.',
						gt_shoulie2_info: '锁定技,攻击范围内有你的角色视为在你的攻击范围内;当你对其他角色造成伤害后,你获得其一张牌.',
						gt_longhua: '龙化',
						gt_longhua_boss: '黑暗魔法师贝丝',
						gt_longhua_battle: '黑暗魔法师贝丝',
						gt_longhua_intro: '黑暗魔法师贝丝',
						gt_longhua_info: '觉醒技,当你即将死亡时,你加1点体力上限并回复体力至上限,获得技能〖魔化〗并将中〖侵袭〗的<【决斗】>改为<【南蛮入侵】>.若如此做,你废除装备区并立即开始你的回合.',
						gt_mohua: '魔化',
						gt_mohua_info: '觉醒技,当你即将死亡时,你加1点体力上限并回复体力至上限,将〖狩猎〗中的<弃置>改为<获得>.若如此做,你废除判定区并立即开始你的回合.',
						//20鲁
						gt_luren: '鹿人',
						gt_luren2: '鹿人',
						gt_luren_info: '你可以将一张装备牌当一张无距离限制且无视防具的【杀】使用.每回合限一次,当你造成或受到伤害后,你可以选择一项: 1.将对方装备区的一张牌移动至你的装备区;2.随机使用一张装备牌.',
						gt_zhongjie: '终结',
						gt_zhongjie_info: '限定技,出牌阶段,你可以令本回合你使用装备牌转化的【杀】无次数限制且伤害为目标角色的体力值.若如此做,结束阶段,你死亡.',
						gt_zhongji: '终极',
						gt_zhongji_info: '当你使用【杀】指定目标后,你可以令此【杀】伤害+X并失去1点体力(X为目标角色的体力值-1).',
						//21加百列
						gt_shenjiang: '神降',
						gt_shenjiang_info: '当一名角色获得你的牌后,你可以观看其手牌,选择一项:1.令其回复1点体力;2.对其造成1点雷电伤害.',
						gt_tianlai: '天籁',
						gt_tianlai_info: '出牌阶段限一次,你可以弃置任意张牌,摸等量的牌,若你以此法弃置所有手牌,你回复1点体力.若如此做,你可以将任意张牌交给一名体力值小于你的角色.',
						//22琳
						gt_qigong: '气功',
						gt_qigong_info: '出牌阶段结束时,你可以将手牌数摸至体力上限.',
						gt_zuichu: '醉厨',
						gt_zuichu_info: '你可以将至多两张红色／黑色牌当火【杀】／【酒】使用.若你以此法使用了两张:红色牌,此火【杀】对一名角色造成伤害后,其失去1点体力;黑色牌,你的下一张【杀】需要用依次使用两张【闪】响应.',
						gt_penhuo: '喷火',
						gt_penhuo_info: '每回合限一次,你可以将一张红色牌当【酒】使用,你可以视为使用一张火【杀】.',
						//23未来骑士
						gt_hufu: '护符',
						gt_hufu_info: '出牌阶段限一次,你可以弃置一张牌并获得一个<护符>标记直到你的下个回合开始(有<护符>的角色受到伤害时,防止此伤害,移去<护符>).',
						gt_tuji: '突击',
						gt_tuji_info: '锁定技,你的黑色牌视为雷【杀】,你以此法使用雷【杀】无次数限制且无视防具.',
						gt_lianju: '链锯',
						gt_lianju_info: '出牌阶段,你可以将一张黑色牌当无次数限制、无视防具且攻击范围为2的雷【杀】使用.',
						gt_chuangshang: '创伤',
						gt_chuangshang_info: '锁定技,当你使用【杀】对一名角色造成伤害时,其获得一个<创伤>标记.(一名角色的回合结束时,有<创伤>标记的角色移去一个<创伤>标记并失去1点体力)',
						gt_chuangshang2: '创伤',
						gt_chuangshang2_info: '锁定技,一名角色的回合结束时,有<创伤>标记的角色移去一枚<创伤>标记并失去1点体力.',
						//24维罗妮卡
						gt_shengyin: '圣印',
						gt_shengyin_info: '出牌阶段限一次,你可以将牌堆顶的一张牌置于一名角色的判定区内,称为<圣印>,其于判定阶段进行判定,若判定结果为黑色,你对其造成1点雷电伤害.',
						gt_shengguang: '圣光',
						gt_shengguang_info: '每轮限一次,当一张红色判定牌生效后,你可以令任意名角色各摸两张牌.',
						//25————————————————————————————————————————————————————————————诺克西娅
						gt_jiangling: '降灵',
						gt_jiangling_info: '出牌阶段限一次,你可以获得随从<黑暗灵魂>',
						gt_futi: '附体',
						gt_futi_info: '当你成为伤害牌的目标时,将其转移给黑暗灵魂',
						gt_konghun1: '控魂',
						gt_konghun1_info: '你造成1点伤害后,黑暗灵魂摸一张牌回复1点体力.',
						gt_konghun2: '控魂',
						gt_konghun2_info: '你造成1点伤害后,诺克西娅摸一张牌回复1点体力.',
						//26————————————————————————————————————————————————————————————梅丽尔
						gt_benglie: '崩裂',
						gt_benglie_info: '出牌阶段限一次,你可以弃置任意张花色均不相同的牌,选择一名其他角色,除非其弃置等量的牌,否则其受到X点伤害(X为你弃置手牌数的一半且向上取整),你获得技能<飞影>直到你的下个回合开始.',
						gt_luohua: '落花',
						gt_luohua_info: '每轮限X次(X为土属性角色数且至多为2),当其他角色因弃置而失去手牌时,你可以摸等量的牌.',
						//29————————————————————————————————————————————————————————————罗茜
						gt_xifa: '戏法',
						gt_xifa_info: '每回合限一次,你可以将一张牌当【杀／闪】或智囊使用或打出.',
						gt_manbu: '漫步',
						gt_manbu_info: '当你对其他角色造成伤害后,你可以令其他角色计算与你的距离+1直到你的下个回合开始.',
						gt_jiean: '劫案',
						gt_jiean_info: '出牌阶段限一次,你可以令任意名角色各摸两张牌.直到你的下个回合开始,这些角色受到【杀】造成的伤害后,伤害来源可以获得其所有手牌.这些角色的回合结束时,你可以对其使用一张【杀】.',
						//30索菲
						gt_chonglang: '冲浪',
						gt_chonglang_info: '每回合限一次,当你对一名角色造成伤害后,你可以弃置一张牌,对含有其的至多四名座次相邻的角色依次造成1点雷电伤害.',
						gt_baipao: '白袍',
						gt_baipao_info: '锁定技,当你受到伤害时,你摸X张牌(X为你已损失的体力值).',
						//32埃莉诺
						gt_payin: '琶音',
						gt_payin_change: '琶音',
						gt_payin_info: '韵律技,每回合限一次,当你使用一张<br/>平:基本牌后,你可以令任意名角色各摸一张牌;<br/>仄:锦囊牌后,你可以获得一名其他角色一张牌;<br/>转韵:当你使用一张装备牌后.',
						gt_ping: '平',
						gt_ze: '仄',
						gt_hexian: '和弦',
						gt_hexian_info: '光属性角色的结束阶段,你可以令其摸一张牌.',
						//34埃里娜
						gt_tiancheng: '天惩',
						gt_tiancheng2: '天惩',
						gt_tiancheng_info: '出牌阶段限一次,你可以将一张牌当延时锦囊牌对自己使用,你可以视为使用一张【杀】,此【杀】造成伤害后,你获得1点护甲.',
						gt_jiyu: '极御',
						gt_jiyu2: '极御',
						gt_jiyu_info: '锁定技,你受到的雷电伤害减至1点.当你的判定牌生效后,你摸一张牌.',
						//35卡麦尔
						gt_fengshou: '丰收',
						gt_fengshou_info: '出牌阶段限一次,你可以将任意张类别不同的牌当一张可以指定等量目标的【杀】使用并获得目标角色一张牌.',
						gt_ziran: '自然',
						gt_ziran_info: '当你失去最后一张手牌时,你可以令任意名角色各回复1点体力.',
						//37奥尔卡
						gt_dilei: '地雷',
						gt_dilei_info: '出牌阶段限一次,你可以摸两张牌并将至多三张牌随机插入牌堆前2X张牌中(X为角色数).当一名其他角色获得<地雷>牌后,你可以弃置这些牌.',
						gt_chujue: '处决',
						gt_chujue_info: '当你对一名其他角色造成伤害后,你可以进行一次判定,若结果为黑色,你视为对其使用一张【杀】.',
						//39哈娜
						gt_shenpan: '审判',
						gt_shenpan_info: '出牌阶段,你可以弃置X张牌并横置一名角色或对一名已横置的角色造成1点冰属性伤害.(X为本回合此技能已发动的次数)',
						gt_bumie: '不灭',
						gt_bumie_info: '昂扬技,锁定技,当你进入濒死状态时,你回复体力至1点并防止本回合接下来受到的伤害,且本回合结束后,你获得一个额外的回合.<br>激昂:你造成6点伤害.',
						//41克拉拉
						gt_ranjin: '燃尽',
						gt_ranjin_info: '出牌阶段限一次,你可以摸一张牌,本回合你的所有手牌均视为火【杀】.',
						gt_kuilei: '傀儡',
						gt_kuilei_info: '锁定技,回合结束时,你摸X张牌(X为本回合你造成过的伤害值).你使用【杀】的次数上限至少为你的体力上限.',
						//42帕尔瓦蒂
						gt_gongzuo: '工作',
						gt_gongzuo2: '工作',
						gt_gongzuo_info: '出牌阶段限一次,你可以横置至多两名其他角色.当你对横置的角色造成伤害后,你可以摸一张牌.',
						gt_youhua: '优化',
						gt_youhua_info: '锁定技,横置的角色视为在你的攻击范围内且不能响应你使用的牌.',
						//43普莉希拉
						gt_hunxie: '混血',
						gt_hunxie2: '混血',
						//"gt_hunxie2_info":"当你跳过一个阶段后,你可以摸一张牌.",
						gt_hunxie_info: '蓄力技(0/6),出牌阶段,你可以消耗6点蓄力值并摸一张牌,获得<爆发>标记直到你的下个回合开始.当你使用或打出一张牌时,若你没有<爆发>标记,你获得X点蓄力值(X为此牌名称字数),若你有<爆发>标记,你摸一张牌.',
						gt_baofa: '爆发',
						gt_baofa_info: '你可以将一张牌当一张本回合你未以此法转化过的基本牌或锦囊牌使用或打出,若此牌为红色,你摸一张牌且本回合此技能失效.',
						gt_haojie: '浩劫',
						gt_haojie_info: '当你使用或打出一张牌后,你可以令其他角色交给你一张牌.若其因此失去最后一张牌,你对其造成1点伤害.',
						//44克劳德
						gt_xietong: '血统',
						gt_xietong2: '血统',
						gt_xietong_info: '你可以跳过一个阶段并获得一个<天惩>标记(一名角色的回合结束时,若你有<天惩>标记,你弃置一张牌并移去一个<天惩>标记).若你以此法跳过:摸牌阶段,你可以移动场上的一张牌;出牌阶段,你可以视为使用一张雷【杀】.',
						gt_riji: '日祭',
						gt_riji2: '日祭',
						gt_riji_info: '当你跳过一个阶段后,你可以摸一张牌.',
						//46蕾伊
						gt_zhanji: '斩击',
						gt_zhanji_info: '出牌阶段结束时,若你未于此阶段使用过【杀】,你可以施法:你可以视为使用一张攻击范围和基础伤害均为X的火【杀】.',
						gt_fanji: '反击',
						gt_fanji_info: '每回合限一次,当你成为一张其他角色使用的实体非转化伤害类牌的目标时,你可以放弃响应此牌并选择一项:反击:此牌对你造成伤害时改为你对伤害来源造成1点火焰伤害并摸三张牌;观望:本回合你可以额外发动一次此技能.同时对方选择一项:佯攻:令此牌无效并摸一张牌;突袭:令此牌正常结算.',
						gt_fanji_intro: '反击',
						gt_fanji_intro_info: '进入反击状态时,不能响应其他角色使用的牌.双方须分别从多个选项中选择一项并获得相应效果直到退出反击状态.',
						gt_fanji_def2: '反击',
						gt_fanji_def1: '观望',
						gt_fanji_atk1: '佯攻',
						gt_fanji_atk2: '突袭',
						//47AA72
						gtre_shuiqiang: '水枪',
						gt_shuiqiang2: '水枪',
						gt_shuiqiang2_backup: '水枪',
						gtre_shuiqiang_info: '蓄力技(0/3),你可以消耗1点蓄力值,视为使用一张【杀】.一名角色的回合结束时,你获得1点蓄力值.',
						gt_shuiqiang: '水枪',
						gt_shuiqiang_info: '一名角色的回合结束时,若<火箭>数小于三,你可以摸一张牌,将一张手牌置于你的武将牌上,称为<火箭>.你可以将<火箭>当【杀】使用或打出.',
						gt_shuangbeng: '双泵',
						gt_shuangbeng_draw: '双泵·摸牌',
						gt_shuangbeng_sha: '双泵·追杀',
						gt_shuangbeng_info: '每回合每项限两次,1.当你使用【杀】造成伤害后,你可以摸一张牌;2.当一名角色受到【杀】造成的伤害后,你可以对其使用一张【杀】.',
						//48SP罗兰茵
						gt_jinji: '进击',
						gt_jinji2: '进击',
						gt_jinji3: '进击',
						gt_jinji4: '进击',
						gt_jinji_info: '一名角色的回合结束时,若<火箭>数小于三,你可以摸一张牌,将一张手牌置于你的武将牌上,称为<火箭>.你可以将<火箭>当【杀】使用.',
						gt_fangwei: '防卫',
						gt_fangwei_info: '每回合每项限两次,1.当你使用【杀】造成伤害后,你可以摸一张牌;2.当一名角色受到【杀】造成的伤害后,你可以对其使用一张【杀】.',
						//49疯狂熊猫团
						gt_mafan: '麻烦',
						gt_mafan_info: '蓄力技(0／24),出牌阶段,若你没有<熊猫>标记,你可以消耗24点蓄力值并获得<熊猫>标记直到本回合结束,摸两张牌;若你有<熊猫>标记,你可以视为使用一张【杀】并移去<熊猫>标记.当你使用一张牌指定目标后或成为一张牌的目标后,若你没有<熊猫>标记,你获得此牌名称字数+2点蓄力值.',
						//50克罗姆
						gt_paidui: '派对',
						gt_paidui_info: '锁定技,游戏开始时,你从坎公扩展随机五个发动时机为出牌阶段的技能中获得一个技能.',
						gt_shuangqiang: '双枪',
						gt_shuangqiang_info: '出牌阶段开始时,你可以失去一个含有主动技能的技能并获得场上一名角色武将牌上的一个含有主动技能的技能.当一名角色发动主动技能后,其可以令你摸一张牌.',
						gt_shewen: '蛇吻',
						gt_shewen_info: '出牌阶段限一次,你可以将一张牌当【趁火打劫】使用.',
						gt_duya: '毒牙',
						gt_duya_info: '锁定技,你每回合第一次对一名角色造成伤害后,其失去1点体力且本回合非锁定技失效. ',
						gt_jisu: '激素',
						gt_jisu_info: '当一名角色发动主动技能后,你可以摸一张牌.',
						//51瓦伦西亚
						gt_chuanxin: '穿心',
						gt_chuanxin2: '穿心',
						gt_chuanxin3: '穿心',
						gt_chuanxin_info: '锁定技,你使用【杀】可以指定任意名攻击范围内的角色.每当你第三次因【杀】造成伤害时,此伤害翻倍.',
						gt_jici: '疾刺',
						gt_jici2: '疾刺',
						gt_jici_info: '出牌阶段限一次,你可以将一张牌当【决斗】使用.若你因此造成伤害,你摸两张牌,你可以令一名其他角色摸一张牌.',
						//52克罗塞尔
						gt_dianzi: '电子',
						gt_dianzi_info: '出牌阶段限一次,你可以弃置任意张牌并令等量角色各获得一点护甲.',
						gt_hairu: '骇入',
						gt_hairu_info: '准备阶段,你可以观看一名角色的所有牌,你可以使用其中一张.',
						gt_houduan: '后端',
						gt_houduan_info: '锁定技,当你对一名角色造成伤害后,你令其获得一个<网页>标记.当有<网页>标记的角色获得护甲时,你获得等量护甲并令其移去一个<网页>标记.',
						//53安德拉斯
						gt_tulu: '屠戮',
						gt_tulu2: '屠戮',
						gt_tulu3: '屠戮',
						gtre_tulu_info: '蓄力技(2/4),出牌阶段,你可以消耗所有蓄力值并弃置4-X张牌(X为蓄力值点数),对一名其他角色造成1点冰属性伤害.当你使用一张牌时,你获得1点蓄力值.',
						gt_tulu_info: '锁定技,当你使用或打出一张非虚拟非转化牌时,你获得一枚<冰晶>(至多为4).游戏开始时,你获得2枚<冰晶>.出牌阶段,你可以移去所有<冰晶>并弃置4-X张牌(X为<冰晶>数),视为使用一张冰【杀】.',
						gt_bingzang: '冰葬',
						gt_bingzang2: '冰葬',
						gt_bingzang_info: '锁定技,你于出牌阶段使用或打出的第三、四张实体非转化牌造成的伤害翻倍.当你的蓄力值达到3或更多时,你摸一张牌.',
						gt_hanqi: '寒气',
						gt_hanqi2: '寒气',
						gt_hanqi_info: '锁定技,你使用或打出的第三、四张非虚拟非转化牌伤害+1(你使用或打出四张非虚拟非转化牌后重新计数).当你的<冰晶>数达到三或更多时,你摸一张牌.',
						//54堇
						gt_renshu: '忍术',
						gt_renshu2: '忍术',
						gt_renshu_info: '出牌阶段限一次,你可以获得一个<分身>直到你的下个回合结束.当你于出牌阶段使用一张基本牌或普通锦囊时,你可以弃置至多X张牌并令此牌额外结算等量次(X为你拥有的<分身>数).',
						gt_xunying: '迅影',
						gt_xunying_info: '锁定技,你计算与其他角色的距离-X(X为你拥有的<分身>数).',
						//55拜蒙
						gt_pohuai: '破坏',
						gt_pohuai2: '破坏',
						gt_pohuai_info: '出牌阶段,你可以将一张牌当【火山】对自己使用并视为对其他角色使用一张火【杀】,此火【杀】对目标角色造成伤害后,其下回合使用牌仅能指定你或其为目标.',
						gt_zhanshen: '战神',
						gt_zhanshen2: '战神',
						gt_zhanshen_info: '锁定技,你使用基本牌时摸一张牌.若你的判定区有牌,你的锦囊牌均视为火【杀】.',
						//56罗塞塔
						gt_kuaiqiang: '快枪',
						gt_kuaiqiang2: '快枪',
						gt_kuaiqiang_info: '当一名角色使用【杀】造成伤害时,你可以弃置一张牌,令此伤害+1.出牌阶段,若你没有手牌,你可以摸两张牌.',
						gt_sushe: '速射',
						gt_sushe_info: '出牌阶段限一次,你可以依次使用手牌中所有可使用的牌并弃置其余的牌,摸两张牌.',
						gt_danjia: '弹夹',
						gt_danjia_info: '当你不因〖速射〗使用第三、四、五张牌后(你发动〖速射〗后重新计数),你有60%、30%、10%的概率可以发动一次〖速射〗.',
						//57白雪
						gt_zaoxue: '造雪',
						gt_zaoxue_info: '出牌阶段限一次,你可以将一张牌作为<雪>置于你的武将牌上并施法:将所有<雪>当一张伤害和攻击范围均为X的冰【杀】使用.',
						gt_dongri: '冬日',
						gt_dongri_info: '每回合限两次,当你对一名角色造成伤害后,你可以获得其一张牌.你可以额外使用X张【杀】(X为水属性角色数且至多为4).',
						//58卡米拉
						gt_qiju: '棋局',
						gt_qiju_info: '隐匿技,锁定技,你登场后,你获得至多四名角色的各一张牌并摸4-X张牌(X为你选择的角色数),将四张点数不同的牌置于你的武将牌上,称为<棋>.',
						// "gt_moteng": "魔藤",
						// "gt_moteng_info": "出牌阶段限一次,你可以与一名角色拼点,你标记没赢的角色(若其已被标记则改为对其造成1点伤害并移去此标记),弃置其一张牌(若其没有牌则改为对其造成1点伤害).",
						gt_rimu: '日暮',
						gt_rimu_info: '出牌阶段限一次,你可以与一名角色拼点:若其没赢,你视为对其使用一张刺【杀】;若你没赢,你移去一张<棋>.出牌阶段结束时,若你没有<棋>,你死亡.',
						gt_duoluo: '堕落',
						gt_duoluo_info: '锁定技,你的与<棋>点数相同的牌点数视为Q.你可以将点数为Q的牌当与<棋>同名的牌使用或打出.',
						//"gt_duoluo_info":"锁定技,当你成为一张黑色基本牌或普通锦囊牌的目标后,你摸一张牌.每回合限一次,你可以将一张黑色牌当本回合你使用或打出的上一张基本牌或普通锦囊牌使用或打出.",
						//59凯伊
						gt_zhiyuan: '支援',
						gt_zhiyuan_info: '隐匿技,当你登场后,你可以与一名角色交换座次.',
						gt_zhengyi: '正义',
						gt_zhengyi_info: '出牌阶段限一次,你可以与一名角色拼点,你标记没赢的角色(若其已被标记则改为对其造成1点伤害并移去此标记),弃置其一张牌(若其没有牌则改为对其造成1点伤害).',
						gt_qidong: '启动',
						gt_qidong_info: '出牌阶段限一次,你可以与一名角色拼点,你视为对没赢的角色使用一张刺【杀】,此刺【杀】造成伤害时,你令其获得<藤>标记(若其已有<藤>标记则令此伤害+1并移去此标记).',
						gt_shuangren: '双刃',
						gt_shuangren_info: '当你使用一张黑色牌指定目标后,或成为一张黑色牌的目标后,你可以摸一张牌.',
						//62汐雅
						gt_paopao: '泡泡',
						gt_paopao2: '泡泡',
						gt_paopao_info: '蓄力技(10/10),出牌阶段限一次,你可以消耗1点蓄力值,令一名角色回复1点体力.',
						gt_shuibo: '水波',
						gt_shuibo2: '水波',
						gt_shuibo_info: '其他角色的出牌阶段限一次,其可以交给你任意张牌,你交给其等量的牌或令其回复1点体力.当你令一名角色回复体力后,你可以令其摸一张牌并复原武将牌.',
						gt_shuiyun: '水韵',
						gt_shuiyun_info: '当一名角色死亡时,你可以令其他角色各回复1点体力.',
						//63SP艾米
						gt_nuqi: '怒气',
						gt_nuqi_info: '蓄力技(0/4),出牌阶段,你可以消耗4点蓄力值并获得<狂暴>标记直到你的下个回合开始.若你没有<狂暴>标记,当你使用牌指定目标或成为牌的目标后,你获得1点蓄力值;若你有<狂暴>标记,你使用牌无次数限制.',
						gt_nuhuo: '怒火',
						gt_nuhuo_info: '锁定技,若你没有<狂暴>标记,你受到伤害时摸一张牌;若你有<狂暴>标记,你造成伤害时摸X张牌(X为你已损失的体力值).',
						//65SP夏皮拉
						gt_shachan: '沙铲',
						gt_shachan2: '沙铲',
						gt_shachan_info: '一名角色的回合结束时,你可以获得1枚<铲>.你可以弃置一枚<铲>并将一张牌当刺【杀】使用或打出.',
						gt_xiari: '夏日',
						gt_xiari2: '夏日',
						gt_xiari_info: '你可以额外使用X张【杀】(X为<铲>数).当你使用【杀】造成伤害后,你可以与一名光属性角色各摸一张牌.',
						//sr
						//5卡瑞娜
						gt_xieyue: '血月',
						gt_xieyue_info: '每回合限一次,当一名角色造成伤害后,若你与其距离不大于1,你可以与其各摸一张牌,若伤害来源为你,你可以少摸一张牌并回复1点体力.',
						gtre_xieyue: '血月',
						gtre_xieyue_info: '每回合限一次,当一名角色造成伤害后,若你与其距离不大于1,你可以摸两张牌并交给其一张牌,若伤害来源为你,你可以少摸一张牌并回复1点体力.',
						gte_xieyue: '血月',
						gte_xieyue_info: '每回合限一次,当一名角色造成伤害时,若你与其距离不大于1,你可以与其各摸一张牌.',
						gt_yongheng: '永恒',
						gt_yongheng_info: '昂扬技,当你进入濒死状态时,你可以回复2点体力.<br>激昂:你回复6点体力.',
						gtre_yongheng: '永恒',
						gtre_yongheng_info: '当你进入濒死状态时,若你的武将牌正面向上,你可以不结算濒死状态并翻面.若如此做,当你翻回正面时,你回复2点体力.',
						gte_yongheng: '永恒',
						gte_yongheng_info: '当你进入濒死状态时,你可以回复1点体力并移除此武将牌.',
						gt_jicheng: '继承',
						gt_jicheng_info: '出牌阶段限一次,你可以获得随从<夏洛特>,若你已获得<夏洛特>,则销毁之,重新获得.(<夏洛特>的体力值、体力上限和初始手牌均为2.回合结束时,你可以切换至对方并进行一个额外回合.)',
						gt_shuangyue: '双月',
						gt_shuangyue_info: '出牌阶段限一次,若你没有副将,你可以失去1点体力并召唤<夏洛特>作为你的副将.',
						//15索菲
						gt_jiguang: '激光',
						gt_jiguang_info: '出牌阶段限一次,你可以弃置任意张牌并对等量座次相邻的角色各造成1点雷电伤害伤害.',
						gt_dianci: '电磁',
						gt_dianci_info: '当你对暗属性角色造成伤害后,你可以摸两张牌.',
						//18克雷格
						gt_zhanhou: '战吼',
						gt_zhanhou_info: '当你受到伤害后,你可以令至多X名角色各摸一张牌(X为你已损失的体力值).',
						gtre_zhanhou: '战吼',
						gtre_zhanhou_info: '当你受到伤害后,你可以观看牌堆顶的X张牌并分配给任意角色(X为你已损失的体力值).',
						gt_baohu: '保护',
						gt_baohu_info: '当你攻击范围内的角色受到伤害时,若其体力值小于你,你可以代替其受到伤害.',
						gtre_baohu: '保护',
						gtre_baohu_info: '当一名角色受到伤害时,若其体力值不大于你,你可以代替其受到伤害.',
						//19赤雪
						gt_feiyan: '飞燕',
						gt_feiyan_info: '当你于出牌阶段使用有目标的基本牌或普通锦囊牌时,你可令此牌额外结算一次,本回合你不能再使用牌.',
						gt_douzhi: '斗志',
						gt_douzhi_info: '出牌阶段限一次,你可以与一名角色拼点:赢的角色弃两张牌,没赢的角色翻面.',
						//26艾米
						gt_kuangnu: '狂怒',
						gt_kuangnu_info: '锁定技,当你使用一张牌时,你摸一张牌并弃置一张牌.',
						gt_kuangbao: '狂暴',
						gt_kuangbao_info: '锁定技,当你击杀一名角色后,你摸两张牌且本回合使用牌无次数限制.',
						sp_kuangbao: '狂暴',
						sp_kuangbao_info: '出牌阶段开始时,你可以失去一点体力并选择至多X项:1.摸X张牌;2.你于此阶段使用的第X张牌伤害+X;3.你于此阶段使用的第X张牌额外选择X名角色.(X为你已损失的体力值)',
					},
					//动态描述
					dynamicTranslate: {
						gt_kousha(player) {
							//var num=game.countPlayer(function(current){return current.inRange(player);});
							var num = Math.min(
								game.countPlayer(function (current) {
									return player.inRange(current);
								}),
								3
							);
							return '出牌阶段限一次,你可以将一张【杀】当刺【杀】使用并摸' + get.cnNumber(num) + '张牌.';
						},
						gt_qinxi(player) {
							if (player.storage.gt_longhua) return '出牌阶段限一次,你可以视为使用一张【南蛮入侵】.';
							return '出牌阶段限一次,你可以视为使用一张【决斗】.';
						},
						gt_luohua(player) {
							var num = Math.min(
								game.countPlayer(function (current) {
									return current.group == 'gt_tu';
								}),
								2
							);
							return '每轮限' + get.cnNumber(num) + '次,当其他角色因弃置而失去手牌时,你可以摸等量的牌.';
						},
					},
					//技能代码
					skill: {
						//死亡配音移动至武将包尾部批量处理
						gt_suoxie: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								player: 'dying',
							},
							forced: true,
							charlotte: true,
							content() {
								player.nodying = true;
								//trigger.cancel();
							},
						},
						//残荷
						gt_jiejian: {
							trigger: { global: 'gameStart', player: 'enterGame' },
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('gt_jiejian'), true, function (card, player, target) {
										var list = [];
										if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
										if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
										if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
										list = list.filter(function (i) {
											return !player.hasSkill(i);
										});
										return list.length;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										var list = [];
										if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
										if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
										if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
										list = list.filter(function (i) {
											return !player.hasSkill(i);
										});
										return list.length + Math.random();
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									//player.loseMaxHp();
									var list = [];
									if (lib.character[target.name]) list.addArray(lib.character[target.name][3]);
									if (lib.character[target.name1]) list.addArray(lib.character[target.name1][3]);
									if (lib.character[target.name2]) list.addArray(lib.character[target.name2][3]);
									player.addSkillLog(list);
								}
							},
						},
						gt_fenghe: {
							enable: 'phaseUse',
							//usable:1,
							//charlotte:true,
							filter(event, player) {
								if (player.hasSkill('gt_fenghe_used')) return false;
								return true;
							},
							content() {
								'step 0';
								var skills = player.getSkills(null, false, false).filter(function (i) {
									if (!lib.translate[i + '_info']) return false;
									if (i == 'gt_fenghe') return true;
									var info = get.info(i);
									return info && !info.charlotte;
								});
								var list = [];
								for (var skill of skills) {
									list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
								}
								var next = player.chooseButton(['请选择失去一个技能', [list, 'textbutton']]);
								next.set('forced', true);
								//next.set('selectButton',[1,skills.length]);
								next.set('ai', function (button) {
									var skill = button.link,
										skills = _status.event.skills.slice(0);
									skills.removeArray(['gt_fenghe']);
									if (player.awakenedSkills.includes(skill)) return 2;
									if (get.info(skill).zhuSkill && player.identity != 'zhu') return 2;
									if (get.info(skill).hiddenSkill) return 2;
									//if(skills.includes(skill)) return 1+Math.random();
									return Math.random();
								});
								next.set('skills', skills);
								('step 1');
								if (result.links?.length) {
									event.skills = result.links;
									var skills = [];
									for (var i of game.players) {
										i.getSkills(null, false, false).filter(function (j) {
											if (player.hasSkill(j)) return false;
											if (!lib.translate[j + '_info']) return false;
											var info = get.info(j);
											if (info && !info.charlotte) skills.add(j);
										});
									}
									var list = [];
									for (var skill of skills) {
										list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
									}
									var next = player.chooseButton(['请选择获得一个技能', [list, 'textbutton']]);
									next.set('forced', true);
									//next.set('selectButton',[1,skills.length]);
									next.set('ai', function (button) {
										var skill = button.link,
											skills = _status.event.skills.slice(0);
										//skills.removeArray(['xinanguo','lanjiang','rezhiheng','junkyuheng']);
										//if(skills.includes(skill)) return 2;
										//if(skill=='junkyuheng') return 1;
										return Math.random();
									});
									next.set('skills', skills);
								}
								('step 2');
								if (result.bool) {
									player.addTempSkill('gt_fenghe_used');
									game.log(player, '失去了技能', '#g【' + get.translation(event.skills.slice(0)) + '】');
									player.removeSkill(event.skills.slice(0));
									var skills = result.links;
									//game.log(player,'获得了以下技能:','#g'+get.translation(skills));
									player.addSkillLog(skills.slice(0));
								}
							},
							subSkill: {
								used: {},
							},
							ai: {
								order: 6,
								//threaten:1.6,
								result: {
									player: 1,
								},
							},
						},
						opanicsido0: {
							trigger: { global: 'gameDrawAfter' },
							content() {
								'step 0';
								var list = [];
								list = get.gainableCharacters(function (info) {
									return info[1] == 'gt_huo' || info[1] == 'gt_shui' || info[1] == 'gt_tu' || info[1] == 'gt_guang' || info[1] == 'gt_an' || info[1] == 'gt_xu';
								});
								//移除已登场的武将
								list.remove('opanicsido'); //把武将从技能将池中移除
								list.remove('boss_jialan');
								list.remove('boss_beisi');
								list.remove('gt_he');
								list.remove('gt_she');
								list.remove('gt_it');
								player.chooseButton(['摸鱼:选择获得一张武将牌上的所有技能', [list.randomGets(player.maxHp), 'character']], true);
								('step 1');
								if (result.links?.length) {
									var name = result.links[0];
									player.flashAvatar('opanicsido0', name);
									game.log(player, '获得了', '#y' + get.translation(name), '的所有技能');
									player.addSkill(lib.character[name][3]);
									player.storage.opanicsido = name;
									//player.sex=lib.character[name][0];
									//player.group=lib.character[name][1];
								}
							},
						},
						opanicsido1: {
							trigger: { player: 'showCharacterAfter' },
							hiddenSkill: true,
							filter(event, player) {
								return event.toShow.includes('opanicsido');
							},
							content() {
								'step 0';
								var list = [];
								list = get.gainableCharacters(function (info) {
									return info[1] == 'gt_huo' || info[1] == 'gt_shui' || info[1] == 'gt_tu' || info[1] == 'gt_guang' || info[1] == 'gt_an' || info[1] == 'gt_xu';
								});
								//移除已登场的武将
								list.remove('opanicsido'); //把武将从技能将池中移除
								list.remove('boss_jialan');
								list.remove('boss_beisi');
								list.remove('gt_he');
								list.remove('gt_she');
								list.remove('gt_it');
								player.chooseButton(['摸鱼:选择获得一张武将牌上的所有技能', [list.randomGets(player.maxHp), 'character']], true);
								('step 1');
								if (result.links?.length) {
									var name = result.links[0];
									player.flashAvatar('opanicsido1', name);
									game.log(player, '获得了', '#y' + get.translation(name), '的所有技能');
									player.addSkill(lib.character[name][3]);
									player.storage.opanicsido = name;
									//player.sex=lib.character[name][0];
									//player.group=lib.character[name][1];
								}
							},
						},
						opanicsido2: {
							enable: 'phaseUse',
							usable: 1,
							charlotte: true,
							superCharlotte: true,
							filter(event, player) {
								return player.maxHp - player.hp;
							},
							content() {
								'step 0';
								var list = [];
								list = get.gainableCharacters(function (info) {
									return info[1] == 'gt_huo' || info[1] == 'gt_shui' || info[1] == 'gt_tu' || info[1] == 'gt_guang' || info[1] == 'gt_an' || info[1] == 'gt_xu';
								});
								list.remove(player.storage.opanicsido);
								list.remove('opanicsido'); //把武将从技能将池中移除
								list.remove('boss_jialan');
								list.remove('boss_beisi');
								list.remove('gt_he');
								list.remove('gt_she');
								list.remove('gt_it');
								list = list.randomGets(player.maxHp - player.hp);
								var skills = [];
								for (var i of list) {
									skills.addArray(
										(lib.character[i][3] || []).filter(function (skill) {
											var info = get.info(skill);
											return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill && !info.fixed;
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
										skills: skills.randomGets(player.maxHp - player.hp),
									};
									if (event.dialog) event.dialog.close();
									if (event.control) event.control.close();
								};
								var chooseButton = function (list, skills) {
									var event = _status.event;
									if (!event._result) event._result = {};
									event._result.skills = [];
									var rSkill = event._result.skills;
									var dialog = ui.create.dialog('请选择获得至多' + get.cnNumber(player.maxHp - player.hp) + '个技能', [list, 'character'], 'hidden');
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
												if (rSkill.length >= player.maxHp - player.hp) return;
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
								('step 1');
								var map = event.result || result;
								if (map && map.skills && map.skills.length) {
									event.trigger('opanicsido2');
									for (var i of map.skills) {
										player.addTempSkill(i, { player: 'opanicsido2' });
									}
								}
							},
							ai: {
								order: 8,
								//threaten:1.6,
								result: {
									player: 1,
								},
							},
						},
						//残荷的试炼
						boss_opanicsido1: {
							trigger: { global: 'gameStart' },
							forced: true,
							popup: false,
							mode: ['boss'],//QQQ
							content() {
								player.smoothAvatar();
								player.init('opanicsido');
								game.addVideo('reinit2', player, player.name);
							},
						},
						boss_opanicsido2: {
							global: 'boss_opanicsido',
						},
						boss_opanicsido: {
							trigger: { global: 'dieAfter' },
							silent: true,
							forced: true,
							filter(event, player) {
								return player.identity != 'zhong' && player != game.boss;
							},
							content() {
								if (trigger.player.identity == 'zhong' && player == trigger.source) {
									player.draw(3);
									player.recover();
								} else if (trigger.player.identity == 'cai' && player.identity == 'cai') {
									player.draw(player.group == 'gt_huo' || player.group == 'gt_shui' || player.group == 'gt_tu' || player.group == 'gt_guang' || player.group == 'gt_an' || player.group == 'gt_xu' ? 3 : 1);
									player.recover();
								}
							},
						},
						//ssr
						//1普利特维采
						gt_shenghuo: {
							marktext: '圣火',
							intro: {
								name: '圣火',
								name2: '圣火',
								//content:"本轮已发动#次落花",
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							enable: 'phaseUse',
							filterCard() {
								return false;
							},
							selectCard: -1,
							//filterCard:{color:"red"},
							//selectCard:1,
							position: 'hes',
							check(card) {
								return 6 - get.value(card);
							},
							viewAs: {
								name: 'huogong',
								//nature:'fire',
								storage: { gt_shenghuo: true },
							},
							onuse(result, player) {
								player.link(false);
								player.turnOver(false);
							},
							group: ['gt_shenghuo_awake', 'gt_shenghuo_effect'],
							subSkill: {
								awake: {
									trigger: { source: 'damageSource' },
									//audio:"gt_shenghuo",
									forced: true,
									filter(event, player) {
										//return event.parent.skill=='gt_shenghuo';
										return event.nature == 'fire';
									},
									content() {
										player.markSkill('gt_shenghuo');
										player.storage.gt_shenghuo = true;
										player.addSkill('gt_shenghuo_mark');
									},
									silent: true,
								},
								effect: {
									trigger: {
										player: ['useCardAfter', 'respondAfter'],
									},
									//audio:"gt_shabao",
									forced: true,
									filter(event, player) {
										//if(get.color(event.card)!='red') return false;
										if (!player.storage.gt_shenghuo) return false;
										return event.cards && event.cards.length;
									},
									content() {
										player.chooseUseTarget('###是否发动【圣火】？###视为使用一张火【杀】', { name: 'sha', nature: 'fire' }, false);
									},
									silent: true,
								},
								mark: {
									mark: true,
									trigger: {
										player: 'phaseAfter',
									},
									filter(event, player) {
										return player.storage.gt_shenghuo;
									},
									forced: true,
									charlotte: true,
									content() {
										player.addSkill('gt_shenghuo_unmark');
										player.removeSkill('gt_shenghuo_mark');
									},
									silent: true,
								},
								unmark: {
									trigger: {
										player: 'phaseEnd',
									},
									filter(event, player) {
										return player.storage.gt_shenghuo;
									},
									forced: true,
									charlotte: true,
									content() {
										delete player.storage.gt_shenghuo;
										player.unmarkSkill('gt_shenghuo');
										player.removeSkill('gt_shenghuo_unmark');
									},
									silent: true,
								},
							},
						},
						gt_huomian: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'damageBegin' },
							forced: true,
							content() {
								'step 0';
								player
									.judge((card) => {
										if (card.suit == 'heart') return 2;
										return -1;
									})
									.set('judge2', (result) => {
									});
								('step 1');
								if (result.suit == 'heart') trigger.cancel();
							},
						},
						//3玛丽娜
						gt_juesheng: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								return event.card && event.card.name == 'juedou';
							},
							content() {
								player.changeHujia();
							},
						},
						gt_qianyin: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							filter(event, player) {
								return player.countCards('h') >= 0;
							},
							filterTarget(event, player, target) {
								return player.canCompare(target);
							},
							content() {
								'step 0';
								//player.out();
								player.draw();
								('step 1');
								player.chooseToCompare(target);
								//player.chooseToPSS(target);//
								('step 2');
								if (result.num1 > result.num2) {
									var card = { name: 'juedou' };
									if (player.canUse(card, target, false)) player.useCard(card, target, false);
								}
								if (result.num1 < result.num2) {
									var card = { name: 'juedou' };
									if (target.canUse(card, player, false)) target.useCard(card, player, false);
								}
							},
							ai: {
								order() {
									return get.order({ name: 'juedou' }) + 0.1;
								},
								//threaten:1.3,
								expose: 0.5,
								result: {
									player(player, target) {
										return get.effect(target, { name: 'juedou' }, player, player);
										//return -get.attitude(player,target);
									},
								},
							},
						},
						//6芭莉
						gt_xianhua: {
							global: 'gt_xianhua2',
							audio: 'ext:坎公骑冠剑/audio/character:2',
						},
						gt_xianhua2: {
							audio: 'gt_xianhua',
							forceaudio: true,
							enable: 'phaseUse',
							usable: 1,
							prompt() {
								var player = _status.event.player;
								var list = game.filterPlayer(function (target) {
									return target.hasSkill('gt_xianhua', player);
								});
								var str = '你可以从牌堆随机获得你没有的花色的牌各一张,令' + get.translation(list);
								if (list.length > 1) str += '中的一人';
								str += '观看并弃置你或其等量的牌';
								return str;
							},
							filter(event, player) {
								var suits = lib.suit.slice(0),
									hs = player.getCards('h');
								for (var i of hs) {
									suits.remove(i.suit);
									if (!suits.length) return false;
								}
								return game.hasPlayer(function (target) {
									return target.hasSkill('gt_xianhua', player); //&&target!=player&&target.countCards('he')>0;
								});
							},
							filterTarget(card, player, target) {
								return target.hasSkill('gt_xianhua', player); //&&target!=player;
							},
							content() {
								'step 0';
								var suits = lib.suit.slice(0),
									hs = player.getCards('h');
								for (var i of hs) {
									suits.remove(i.suit);
								}
								var cards = [];
								for (var i of suits) {
									var card = get.cardPile(function (card) {
										return card.suit == i;
									});
									if (card) cards.push(card);
								}
								if (cards.length) player.gain(cards, 'gain2');
								event.cards.length = cards.length;
								if (target == player) event.goto(3);
								('step 1');
								event.list1 = [];
								event.list2 = [];
								var chooseButton = target.chooseButton(event.cards.length, [get.translation(player.name) + '的牌', player.getCards('he'), '你的牌', target.getCards('he')], true).set('prompt', '鲜花:弃置' + get.translation(player.name) + '或你' + get.cnNumber(event.cards.length) + '张牌');
								chooseButton.set('target', target);
								chooseButton.set('ai', function (button) {
									var player = _status.event.player;
									var target = _status.event.target;
									var ps = [];
									var ts = [];
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										var card = ui.selected.buttons[i].link;
										if (target.getCards('he').includes(card)) ts.push(card);
										else ps.push(card);
									}
									var card = button.link;
									var owner = get.owner(card);
									var val = get.value(card);
									if (owner == player) {
										if (get.attitude(target, player)) {
											if (ts.length) return 6 - val;
											return 6 - val;
										}
										return value;
									}
									return 7 - val;
								});
								chooseButton.set('filterButton', function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (get.owner(button.link) != get.owner(ui.selected.buttons[i].link)) return false;
									}
									return true;
								});
								('step 2');
								if (result.links?.length) {
									var list = result.links;
									for (var i = 0; i < list.length; i++) {
										if (get.owner(list[i]) == player) {
											event.list1.push(list[i]);
										} else {
											event.list2.push(list[i]);
										}
									}
									if (event.list2.length) {
										target.discard(event.list2);
									} else player.discard(event.list1);
								}
								event.finish();
								('step 3');
								target.chooseToDiscard('he', event.cards.length, '鲜花:弃置' + get.cnNumber(event.cards.length) + '张牌', true);
							},
							ai: {
								order: 1,
								expose: 0.5,
								result: {
									player(player, target) {
										var target = game.findPlayer(function (current) {
											return current.hasSkill('gt_xianhua');
										});
										if (target) {
											return get.attitude(player, target);
										}
									},
								},
							},
						},
						gt_youli: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								global: 'loseAfter',
							},
							filter(event, player) {
								return event.type == 'discard' && !player.hasSkill('gt_youli_disabled');
							},
							check(trigger, card, player) {
								var val = 0;
								if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
									var card = i;
									val += get.value(card);
								}
								return val > 7;
							},
							content() {
								player.addTempSkill('gt_youli_disabled', 'roundStart');
								player.gain(trigger.cards);
								player.$gain2(trigger.cards);
								game.log(player, '获得了', trigger.cards);
							},
							subSkill: {
								disabled: {
									mark: true,
									intro: {
										content: '本轮已发动',
									},
								},
							},
						},
						//7瑞皮娜
						gt_yinglang: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							mod: {
								targetInRange(card, player, target) {
									if (card.name == 'sha') return true;
								},
							},
							trigger: { source: 'damageBegin1' },
							forced: true,
							//logTarget:'player',
							filter(event, player) {
								return event.parent.name == 'sha';
							},
							content() {
								var num = [1, 2, 0].randomGet();
								if (get.isLuckyStar(player)) num = 2;
								trigger.num += num;
								if (num == 0) trigger.player.say('瑞皮娜,下水道中的下水道…');
								if (num == 2) player.say('瑞皮娜最棒!');
							},
						},
						gt_liexi: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								if (player == target) return false;
								//var next=player.next,prev=player.previous;
								var selected = ui.selected.targets;
								//if(!selected.includes(next)&&!selected.includes(prev)) return (target==next||target==prev);
								if (ui.selected.targets.length) {
									for (var i of selected) {
										if (i.next == target || i.previous == target) return true;
									}
									return false;
								}
								return true;
							},
							//complexSelect:true,
							//complexCard:true,
							complexTarget: true,
							selectTarget: [1, 4],
							filterCard: true,
							selectCard: 1,
							position: 'hes',
							check(card) {
								return 6 - get.value(card); //小于南蛮价值5
							},
							viewAs: { name: 'nanman' },
							ai: {
								order: 9,
								result: {
									target(player, target) {
										return -1;
									},
								},
							},
						},
						gt_zuzhou: {
							audio: 'ext:坎公骑冠剑:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countDisabled() < 6 && player.countCards('e') > 0;
							},
							filterTarget(player, target) {
								return player != target;
							},
							content() {
								'step 0';
								var list = [];
								for (var i = 0; i < 6; i++) {
									if (player.getEquip(i)) list.push('equip' + i);
								}
								player.chooseControl(list, true);
								('step 1');
								if (result.control) {
									player.disableEquip(result.control);
								}
								('step 2');
								event.target.turnOver();
							},
						},
						gt_heimao: {
							audio: 'ext:坎公骑冠剑:2',
							trigger: {
								global: ['loseAfter'],
							},
							filter(event, player) {
								if (event.player != player || get.color(event.card) != 'black') return false;
							},
							content() {
								if (player.countDisabled()) {
									player.chooseToEnable();
								} else {
									player.draw();
								}
							},
						},
						//8兰儿
						gt_zhouquan: {
							marktext: '咒',
							intro: {
								name: '咒拳',
								name2: '咒',
								content: '当前有#个<咒>',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								player: ['useCard', 'respond'],
							},
							filter(event, player) {
								if (player.countMark('gt_zhouquan') >= 25) return false;
								return event.cards && event.cards.length;
							},
							content() {
								var num = Math.min(get.translation(trigger.card.name).length, 25 - player.countMark('gt_zhouquan'));
								player.addMark('gt_zhouquan', num);
							},
							group: ['gt_zhouquan2', 'gt_zhouquan3'],
						},
						gt_zhouquan2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								return player.countMark('gt_zhouquan') >= 5;
							},
							prompt: '移去五个<咒>,视为使用或打出一张雷【杀】',
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: {
								name: 'sha',
								nature: 'thunder',
								//storage:{gt_zhouquan2:true},
							},
							precontent() {
								player.removeMark('gt_zhouquan', 5);
							},
						},
						gt_zhouquan3: {
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								return event.card && event.card.storage && event.card.storage.gt_zhouquan2;
							},
							content() {
								player.removeMark('gt_zhouquan', 5);
							},
						},
						gt_taiji: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							enable: 'phaseUse',
							zhuanhuanji: true,
							mark: true,
							intro: {
								markcount(storage, player) {
									return player.storage.gt_taiji ? '阴' : '阳';
								},
								content(storage, player, skill) {
									var str = player.storage.gt_taiji ? '出牌阶段限一次,你可以获得一名其他角色一张牌' : '出牌阶段限一次,你可以令任意名角色各摸一张牌';
									return str;
								},
							},
							filter(event, player) {
								return player.countCards('hes');
							},
							filterCard(card, player) {
								return player.storage.gt_taiji ? get.color(card) == 'black' : get.color(card) == 'red';
							},
							selectCard: 1,
							position: 'hes',
							check(card) {
								return 6 - get.value(card);
							},
							viewAs(cards, player) {
								return player.storage.gt_taiji ? { name: 'shuiyanqijunx' } : { name: 'huoshaolianying' };
							},
							onuse(result, player) {
								player.changeZhuanhuanji('gt_taiji');
							},
							ai: {
								order(name, player) {
									return player.storage.gt_taiji ? get.order({ name: 'shuiyanqijunx' }) : get.order({ name: 'huoshaolianying' });
								},
								expose: 0.5,
								//threaten:2,
							},
						},
						gt_suxing: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								//if(player.hasSkill('gt_suxing_disabled')) return false;
								if (!event.player.isAlive()) return false;
								return event.player.hp < event.player.maxHp / 2;
							},
							round: 3,
							check(event, player) {
								return get.attitude(player, event.player) > 3;
							},
							content() {
								trigger.player.recover();
								//player.addTempSkill('gt_suxing_disabled','roundStart');
							},
							subSkill: {
								disabled: {
									mark: true,
									intro: {
										content: '本轮已发动',
									},
								},
							},
						},
						//9尤金
						gt_teji: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								player: 'useCard1',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							content() {
								trigger.audioed = true;
							},
							ai: {
								expose: 0.2,
								//threaten:1.4,
							},
							mod: {
								targetInRange(card, player, target) {
									if (!player.inRange(target)) return true;
								},
								cardUsableTarget(card, player, target) {
									if (player.inRange(target)) return true;
								},
							},
						},
						gt_jiche: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(event, player, target) {
								return target == player.next || target == player.previous;
							},
							content() {
								'step 0';
								game.broadcastAll(
									function (target1, target2) {
										game.swapSeat(target1, target2);
									},
									player,
									target
								);
								('step 1');
								target.damage();
							},
							ai: {
								order: 4,
								result: {
									target(player, target) {
										if (target == player.next) return -4;
										if (target == player.previous) return target.hp - 1;
										return -1;
									},
								},
							},
						},
						//10蒂尼亚
						gt_shajian: {
							//global:"gt_shajian2",
							audio: 'ext:坎公骑冠剑/audio/character:2',
							marktext: '沙',
							intro: {
								name: '沙',
								content: 'mark',
							},
							//direct:true,
							trigger: {
								player: ['useCard', 'respond'],
							},
							filter(event, player) {
								//var stat=player.getStat().skill;
								//if(!stat.gt_shajian) stat.gt_shajian=0;
								//if(stat.gt_shajian>1) return false;
								if (player.getStat('skill').gt_shajian) return false;
								return event.card && event.card.name == 'sha' || event.card.name == 'shan';
								return true;
							},
							check(event, player) {
								var target = lib.skill.gt_shajian.logTarget(event, player);
								return get.attitude(player, target) < 0;
							},
							logTarget(event, player) {
								if (event.name == 'respond') return event.source;
								//return event.targets[0]||event.respondTo[0];
								if (event.card.name == 'sha') return event.targets[0];
								return event.respondTo[0];
							},
							content() {
								var target = lib.skill.gt_shajian.logTarget(trigger, player);
								event.target = target;
								player.draw();
								player.discardPlayerCard(target, 'he', true);
								if (target.countMark('gt_shajian') < 2) target.addMark('gt_shajian', 1);
								//else target.removeSkill('gt_shajian_remove');
								//var stat=player.getStat().skill;
								//if(!stat.gt_shajian) stat.gt_shajian=0;
								//stat.gt_shajian++;
								player.getStat('skill').gt_shajian = 1;
							},
							subSkill: {
								block: {
									forced: true,
									popup: false,
								},
								remove: {
									trigger: {
										global: 'phaseEnd',
									},
									filter(event, player) {
										if (!player.hasMark('gt_shajian')) return false;
										return true;
									},
									forced: true,
									content() {
										player.removeMark('gt_shajian', 1);
										player.removeSkill('gt_shajian_remove');
									},
									silent: true,
								},
							},
						},
						gt_shabao: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							enable: 'phaseUse',
							filterCard(card, player) {
								//return get.type(card)=='trick';
								return true;
							},
							position: 'hes',
							viewAs: {
								name: 'wanjian',
								storage: { gt_shabao: true },
							},
							check(card) {
								return 6 - get.value(card);
							},
							group: ['gt_shabao_damage'],
							subSkill: {
								damage: {
									trigger: { source: 'damageSource' },
									//audio:"gt_shabao",
									forced: true,
									filter(event, player) {
										if (event.player.countMark('gt_shajian') < 2) return false;
										return event.parent.skill == 'gt_shabao';
									},
									content() {
										trigger.player.removeMark('gt_shajian', 2);
										trigger.player.damage();
									},
									silent: true,
								},
							},
						},
						//12奈莉
						gt_xianyu: {
							marktext: '仙玉',
							intro: {
								name: '仙玉',
								name2: '仙玉',
								content: '本回合已弃置#张牌',
							},
							forced: true,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return player.getHistory('lose', function (evt) {
									return evt.type == 'discard';
								}).length;
							},
							content() {
								var cards = [];
								player.getHistory('lose', function (evt) {
									if (evt.type == 'discard') cards.addArray(evt.cards2);
								});
								player.draw(cards.length);
								player.unmarkSkill('gt_xianyu');
							},
							group: 'gt_xianyu_count',
							subSkill: {
								count: {
									trigger: { player: 'loseAfter' },
									filter(event, player) {
										if (event.type != 'discard' || !event.cards2) return false;
										//var evt=event.getHistory('discard');
										//return evt&&evt.name=='discard'&&evt.player==player;
										return true;
									},
									content() {
										var cards = [];
										player.getHistory('lose', function (evt) {
											if (evt.type == 'discard') cards.addArray(evt.cards2);
										});
										player.storage.gt_xianyu = cards.length;
										player.markSkill('gt_xianyu');
									},
									forced: true,
									silent: true,
									firstDo: true,
									noHidden: true,
									popup: false,
								},
							},
							ai: {},
						},
						gt_huwei: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							forced: true,
							filter(event, player) {
								var num = (player.getAllHistory('useCard').length + player.getAllHistory('respond').length) % 8;
								return num == 2 || num == 3 || num == 5 || num == 0;
							},
							content() {
								'step 0';
								var num = (player.getAllHistory('useCard').length + player.getAllHistory('respond').length) % 8;
								player.chooseCardTarget({
									position: 'he',
									filterCard: true,
									selectCard: [1, num == 0 ? 2 : 1],
									filterTarget(card, player, target) {
										return target != player && target.countCards('he') > 0;
									},
									ai1(card) {
										return 6 - get.value(card);
									},
									ai2(target) {
										var player = _status.event.player;
										if (target.countCards('he') < (num == 0 ? 2 : 1)) return false;
										return -get.attitude(player, target);
									},
									prompt: '弃置至多' + get.cnNumber(num == 0 ? 2 : 1) + '张牌,弃置一名其他角色等量的牌',
								});
								('step 1');
								if (result.cards?.length) {
									player.discard(result.cards);
									player.discardPlayerCard(result.cards.length, 'he', result.targets[0], true);
								}
							},
							ai: {
								expose: 0.5,
								//threaten:1.5,
							},
							group: 'gt_huwei_count',
							intro: {
								content(storage, player) {
									var str = '已使用或打出的牌数:';
									str += storage;
									str += '<br>目标牌数:2/3/5/8';
									return str;
								},
							},
							subSkill: {
								count: {
									trigger: {
										player: ['useCard', 'respond'],
									},
									silent: true,
									firstDo: true,
									noHidden: true,
									content() {
										player.storage.gt_huwei = (player.getAllHistory('useCard').length + player.getAllHistory('respond').length) % 8;
										player.markSkill('gt_huwei');
									},
									forced: true,
									popup: false,
								},
							},
						},
						//14欧格玛
						gt_bidun: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							enable: 'phaseUse',
							content() {
								player.draw(2);
							},
							global: 'gt_bidun1',
							group: 'gt_bidun2',
							ai: {
								order: 4,
								result: {
									player(player, target) {
										if (player.hp <= 2) return -2;
										if (player.countCards('h', 'shan') == 0) return -1;
										return 1;
									},
								},
							},
						},
						gt_bidun1: {
							trigger: { global: ['useSkillAfter'] },
							filter(event, player) {
								return event.player != player && event.skill == 'gt_bidun';
							},
							forced: true,
							content() {
								player
									.chooseToUse(
										function (card, player, event) {
											if (card.name != 'sha') return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										'是否对' + get.translation(trigger.player) + '使用一张杀？'
									)
									.set('complexSelect', true)
									.set('filterTarget', function (card, player, target) {
										if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
										return lib.filter.filterTarget.apply(this, arguments);
									})
									.set('sourcex', trigger.player);
							},
						},
						gt_bidun2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							forced: true,
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								if (player.hasSkill('gt_bidun2_used')) return false;
								return event.source;
							},
							check(event, player) {
								return get.attitude(player, event.source) < 1;
							},
							content() {
								trigger.source.damage(trigger.num);
								player.addTempSkill('gt_bidun2_used');
							},
							subSkill: {
								used: {},
							},
							ai: {
								maixie_defend: true,
								filterDamage: true,
								skillTagFilter(player, tag, arg) {
									if (player.hasSkill('gt_bidun2_used')) return false;
									if (arg && arg.player) {
										if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
									}
								},
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										if (!target.hasSkill('gt_bidun2_used')) return 0.8;
									},
								},
							},
						},
						gt_tongyu: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'phaseJieshuBegin' },
							filter(event, player) {
								return game.countPlayer(function (current) {
									return current.countCards('h') < player.countCards('h');
								});
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('gt_tongyu'), '令任意名手牌数小于你的角色各摸一张牌', [1, Infinity], function (card, player, target) {
										return target.countCards('h') < player.countCards('h');
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									game.asyncDraw(result.targets, 1);
								}
							},
							ai: {
								expose: 0.5,
							},
						},
						//15阿勒夫
						gt_moxiang: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							filter(event, player) {
								if (player.countCards('h') < 1) return false;
								return event.player != player;
							},
							logTarget: 'player',
							check(event, player) {
								if (player.hp < 2 && player.countCards('h') < 1) return false;
								return get.attitude(player, event.player) > 2;
							},
							content() {
								'step 0';
								player.chooseCard(1, 'he', true, '交给' + get.translation(trigger.player) + '一张牌').set('ai', function (card) {
									if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
								});
								('step 1');
								trigger.player.gain(result.cards, player, 'giveAuto');
								('step 2');
								trigger.player.chooseBool('是否令' + get.translation(player) + '摸' + (trigger.player.hasSex('female') ? 2 : 1) + '张牌？').set('choice', get.attitude(trigger.player, player) > 0);
								('step 3');
								if (result.bool) {
									trigger.player.line(player, 'green');
									player.draw(trigger.player.hasSex('female') ? 2 : 1);
								}
							},
							ai: {
								expose: 0.5,
								//threaten:1.2,
							},
						},
						gt_shanshen: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player, name) {
								if (!event.source) return false;
								var range = event.source.getAttackRange();
								return event.num > 1 && range > 2;
							},
							preHidden: true,
							content() {
								return (trigger.num = 1);
							},
							ai: {
								filterDamage: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.player) {
										if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
										if (arg && arg.player.getAttackRange() > 2) return true;
									}
									return false;
								},
							},
						},
						//16美娅
						gt_qumo: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { global: 'damageEnd' },
							filter(event, player, card, target) {
								var stat = player.getStat().skill;
								if (!stat.gt_qumo) stat.gt_qumo = 0;
								if (get.color(event.card) == 'black') return event.source != undefined && event.player.isAlive();
								return false;
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0 && get.attitude(player, event.player) >= 0;
							},
							logTarget: 'player',
							preHidden: true,
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'red') return 1;
									return 0;
								});
								('step 1');
								if (result.color == 'red') {
									trigger.player.recover();
									trigger.player.discardPlayerCard(trigger.player, 'j', true);
								}
								if (result.color == 'black') {
									var card = { name: 'sha', nature: 'fire' };
									var target = trigger.source;
									if (player.canUse(card, target, false)) player.useCard(card, target, false);
									player.addTempSkill('gt_qumo_effect', { player: 'shaAfter' });
								}
							},
							ai: {
								expose: 0.5,
							},
							subSkill: {
								effect: {
									trigger: { source: 'damageSource' },
									filter(event, player) {
										if (event.card.name != 'sha') return false;
										return true;
									},
									forced: true,
									content() {
										player.draw();
										var stat = player.getStat().skill;
										stat.gt_daoshu++;
									},
									forced: true,
									popup: false,
								},
							},
						},
						gt_qingdian: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							//usable:1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(event, player, target) {
								return target != player && target.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToPSS(target);
								('step 1');
								if (result.tie) event.finish();
								else if (result.bool) {
									player.gainPlayerCard(target, target.countCards('h'), 'h', true);
								} else {
									target.gainPlayerCard(player, player.countCards('h'), 'h', true);
								}
							},
							ai: {
								order: 1,
								//threaten:1.1,
								expose: 0.5,
								result: {
									target(player, target) {
										var maxval = 0;
										var hs = player.getCards('h');
										for (var i = 0; i < hs.length; i++) {
											maxval = Math.max(maxval, get.value(hs[i]));
										}
										var dh = target.countCards('h') - player.countCards('h');
										var att = get.attitude(player, target);
										if (target.hasSkill('qingjian')) return false;
										if (dh <= 0) return 0;
										if (maxval > 7) return 0;
										if (att < 0) return maxval - 6 - dh;
										return -1;
									},
								},
							},
						},
						gtold_nuanfeng: {
							marktext: '暖风',
							intro: {
								name: '暖风',
								name2: '暖风',
								content: '当前有#个<暖风>',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							filter(event, player) {
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							content() {
								player.addMark('gt_nuanfeng', 10);
							},
							group: ['gt_nuanfeng2'],
							subSkill: {
								mark: {},
								card: {},
							},
						},
						gt_nuanfeng: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { global: 'damageEnd' },
							forced: true,
							chargeSkill: true,
							filter(event, player, card, target) {
								if (event.player.isHealthy()) return false;
								if (!event.player.isAlive()) return false;
								return (player.countCards('he', { color: 'red' }) && !player.hasSkill('gt_nuanfeng_card')) || (player.countMark('charge') && !player.hasSkill('gt_nuanfeng_mark'));
							},
							content() {
								'step 0';
								var list = ['消耗1点蓄力值', '弃置一张红色牌', '取消'];
								if (player.hasSkill('gt_nuanfeng_mark') || !player.countMark('charge')) list.remove('消耗1点蓄力值');
								if (player.hasSkill('gt_nuanfeng_card') || !player.countCards('he', { color: 'red' })) list.remove('弃置一张红色牌');
								player
									.chooseControl(list, function () {
										var player = _status.event.player;
										var att = get.attitude(player, trigger.player);
										if (list.includes('弃置一张红色牌')) {
											if (att > 0 && trigger.player.isDamaged() && get.recoverEffect(trigger.player) > 0 && player.countCards('he', { color: 'red' })) {
												var maxval = 15;
												var hs = player.getCards('he', { color: 'red' });
												for (var i = 0; i < hs.length; i++) {
													maxval = Math.min(maxval, get.value(hs[i]));
												}
												if (maxval > 9 && list.includes('消耗1点蓄力值')) {
													return '消耗1点蓄力值';
												} else return '弃置一张红色牌';
											}
										}
										if (list.includes('消耗1点蓄力值')) {
											if (att > 0 && trigger.player.isDamaged() && get.recoverEffect(trigger.player) > 0 && player.countMark('charge')) {
												return '消耗1点蓄力值';
											}
										}
										return '取消';
									})
									.set('prompt', '暖风:令' + get.translation(trigger.player) + '回复1点体力');
								('step 1');
								if (result.control == '弃置一张红色牌') {
									player.chooseToDiscard(true, { color: 'red' }, 'he');
									player.addTempSkill('gt_nuanfeng_card');
									trigger.player.recover();
								} else if (result.control == '消耗1点蓄力值') {
									player.removeMark('charge', 1);
									player.addTempSkill('gt_nuanfeng_mark');
									trigger.player.recover();
								}
							},
							group: ['gt_nuanfeng_charge'],
							subSkill: {
								charge: {
									trigger: {
										global: 'phaseBefore',
										player: 'enterGame',
									},
									forced: true,
									filter(event, player) {
										return event.name != 'phase' || game.phaseNumber == 0;
									},
									content() {
										player.addMark('charge', 10);
									},
								},
								mark: {},
								card: {},
							},
							ai: {
								//threaten:2,
								expose: 0.5,
							},
						},
						//17未来公主
						gt_fengbao: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							enable: 'phaseUse',
							filter(event, player) {
								return player.hasCard(function (card) {
									return get.subtype(card) == 'equip1';
								}, 'hes');
							},
							filterCard(card, player) {
								return get.subtype(card) == 'equip1';
							},
							position: 'hes',
							viewAs: {
								name: 'chuqibuyi',
								storage: { gt_fengbao: true },
							},
							check(card) {
								return 6 - get.value(card);
							},
							group: ['gt_fengbao_draw'],
							subSkill: {
								draw: {
									trigger: { player: 'useCard' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_fengbao;
									},
									content() {
										var card = trigger.cards[0];
										var num = 1;
										var info = get.info(card, false);
										if (info && info.distance && typeof info.distance.attackFrom == 'number') num -= info.distance.attackFrom;
										player.draw(num);
									},
									silent: true,
								},
							},
						},
						gt_pingzhang: {
							marktext: '屏障',
							intro: {
								name: '屏障',
								name2: '屏障',
								content: '当前有#个<屏障>',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('gt_pingzhang'), '令一名角色获得1个<屏障>')
									.set('filterTarget', function (card, player, target) {
										if (target.countMark('gt_pingzhang') > 2) return false;
										return true;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										var eff = get.attitude(player, target) * (20 - target.hp - target.countMark('gt_pingzhang'));
										if (player == target && player.identity == 'zhu') return 0.6 * eff;
										return eff;
									});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
									event.bool = false;
									event.target.addMark('gt_pingzhang', 1);
									event.target.addSkill('gt_pingzhang2');
								} else {
									event.finish();
								}
							},
							ai: {
								expose: 0.5,
								//threaten:1.3,
							},
						},
						gt_pingzhang2: {
							charlotte: true,
							ai: {
								filterDamage: true,
								skillTagFilter(player, tag, arg) {
									if (!player.hasMark('gt_pingzhang')) return false;
									if (arg && arg.player) {
										if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
									}
								},
							},
						},
						_gt_pingzhang: {
							//屏障效果
							trigger: {
								global: ['damageBegin4'],
							},
							forced: true,
							filter(event, player) {
								return event.player.hasMark('gt_pingzhang') && (event.name == 'damage' || !event.numFixed);
							},
							content() {
								trigger.cancel();
								trigger.player.removeMark('gt_pingzhang', 1);
							},
						},
						gt_zhengzhao: {
							audio: 'gt_jiefang',
							usable: 1,
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return target != player && player.inRange(target);
							},
							selectTarget: -1,
							multitarget: true,
							multiline: true,
							content() {
								'step 0';
								event.num = 1;
								event.targets = targets.slice(0);
								event.targets.sort(lib.sort.seat);
								('step 1');
								if (event.targets.length) {
									var target = event.targets.shift();
									event.target = target;
									target
										.chooseToUse(
											function (card, player, event) {
												if (card.name != 'sha') return false;
												return lib.filter.filterCard.apply(this, arguments);
											},
											'征召:对' + get.translation(player) + '使用一张杀,或令其摸一张牌'
										)
										.set('targetRequired', true)
										.set('complexSelect', true)
										.set('filterTarget', function (card, player, target) {
											if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
											return lib.filter.filterTarget.apply(this, arguments);
										})
										.set('sourcex', player);
								} else {
									event.finish();
								}
								('step 2');
								if (!result.bool) {
									player.draw();
									event.num = 1;
								} else {
									event.num = result.cards.length + 1;
								}
								event.goto(1);
							},
							ai: {
								order: 4,
								result: {
									player(player, target) {
										if (target.countCards('h') == 0) return 1;
										if (target.countCards('h') < player.countCards('h')) return 1;
										else return -0.1;
										if (player.hp <= 2) return -2;
										if (player.countCards('h', 'shan') == 0) return -1;
										return -0.5;
									},
								},
							},
						},
						gt_jiefang: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							zhuSkill: true,
							trigger: { global: 'damageCancelled' },
							filter(event, player) {
								if (event.player == player || (event.player.group != 'gt_huo' && event.player.group != 'gt_tu' && event.player.group != 'gt_shui' && event.player.group != 'gt_guang' && event.player.group != 'gt_an' && event.player.group != 'gt_xu' && event.player.group != 'gt_wu')) return false;
								return player.hasZhuSkill('gt_jiefang', event.player);
							},
							forced: true,
							content() {
								'step 0';
								trigger.player.chooseBool('是否发动【解放】,令' + get.translation(player) + '摸一张牌？').set('choice', get.attitude(trigger.player, player) > 0);
								('step 1');
								if (result.bool) {
									trigger.player.line(player, 'yellow');
									trigger.player.say('为了坎特伯雷!');
									//player.say("为了坎特伯雷!");
									player.draw();
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						//18佳岚
						gtold_daoshu: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							group: ['gt_daoshu_1', 'gt_daoshu_2'],
							derivation: 'gt_daoshu2',
							subSkill: {
								1: {
									trigger: {
										global: 'gainAfter',
									},
									forced: true,
									filter(event, player) {
										var stat = player.getStat().skill;
										if (!stat.gt_daoshu) stat.gt_daoshu = 0;
										if (stat.gt_daoshu > 0) return false;
										//if(name=='damageEnd'&&!player.storage.beishui) return false;
										if (!player.storage.gt_daoshu) {
											if (player == event.player || !event.player.isIn()) return false;
											var evt = event.getl(player);
											if (!evt || !evt.cards2.length) return false;
											for (var i of evt.cards2) {
												if (get.color(i, player) == 'red') return true;
												if (get.color(i, player) == 'black') return true;
											}
										}
										return false;
									},
									content() {
										'step 0';
										var cards = trigger.getl(player).cards2;
										for (var i of cards) {
											event[get.color(i, player)] = true;
											if (event.red && event.black) break;
										}
										if (event.red) {
											player.chooseUseTarget('###是否发动【道术】？###视为使用一张【无中生有】', { name: 'wuzhong' }, false);
										}
										if (event.black) {
											player.chooseUseTarget('###是否发动【道术】？###视为使用一张雷【杀】', { name: 'sha', nature: 'thunder' }, false);
										}
										var stat = player.getStat().skill;
										stat.gt_daoshu++;
										('step 1');
										var stat = player.getStat().skill;
										if (!result.bool) stat.gt_daoshu--;
									},
								},
								2: {
									audio: 'gt_daoshu',
									trigger: {
										player: ['useCardAfter', 'respondAfter'],
									},
									forced: true,
									filter(event, player) {
										var stat = player.getStat().skill;
										if (!stat.gt_daoshu) stat.gt_daoshu = 0;
										if (stat.gt_daoshu > 0) return false;
										if (player.storage.gt_daoshu) {
											if (get.color(event.card, player) == 'red') return true;
											if (get.color(event.card, player) == 'black') return true;
										}
										return false;
									},
									content() {
										'step 0';
										if (get.color(trigger.card) == 'red') {
											player.chooseUseTarget('###是否发动【道术】？###视为使用一张【无中生有】', { name: 'wuzhong' }, false);
										}
										if (get.color(trigger.card) == 'black') {
											player.chooseUseTarget('###是否发动【道术】？###视为使用一张雷【杀】', { name: 'sha', nature: 'thunder' }, false);
										}
										var stat = player.getStat().skill;
										stat.gt_daoshu++;
										('step 1');
										var stat = player.getStat().skill;
										if (!result.bool) stat.gt_daoshu--;
									},
									ai: {
										expose: 0.5,
										//threaten:1.5,
									},
								},
							},
						},
						gt_daoshu: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							group: ['gt_daoshu_red', 'gt_daoshu_black'],
							subSkill: {
								red: {
									trigger: {
										player: 'loseAfter',
									},
									forced: true,
									filter(event, player) {
										if (!player.hasSkill('gt_daoshu_used')) {
											//if(player==event.player||!event.player.isIn()) return false;
											var evt = event.getl(player);
											if (!evt || !evt.cards2.length) return false;
											for (var i of evt.cards2) {
												if (get.color(i, player) == 'red') return true;
												//if(get.color(i,player)=='black') return true;
											}
										}
										return false;
									},
									content() {
										'step 0';
										player.chooseUseTarget('###是否发动【道术】？###视为使用一张【无中生有】', { name: 'wuzhong' }, false);
										('step 1');
										if (!result.bool) event.finish();
										else player.addTempSkill('gt_daoshu_used');
										//},
									},
								},
								black: {
									trigger: {
										player: 'loseAfter',
									},
									forced: true,
									filter(event, player) {
										if (!player.hasSkill('gt_daoshu_used')) {
											//if(player==event.player||!event.player.isIn()) return false;
											var evt = event.getl(player);
											if (!evt || !evt.cards2.length) return false;
											for (var i of evt.cards2) {
												//if(get.color(i,player)=='red') return true;
												if (get.color(i, player) == 'black') return true;
											}
										}
										return false;
									},
									content() {
										'step 0';
										player.chooseUseTarget('###是否发动【道术】？###视为使用一张雷【杀】', { name: 'sha', nature: 'thunder' }, false);
										('step 1');
										if (!result.bool) event.finish();
										else player.addTempSkill('gt_daoshu_used');
									},
								},
								used: {
								},
							},
						},
						gtold_shenling: {
							global: 'gt_shenling2',
							audio: 'ext:坎公骑冠剑/audio/character:2',
							dutySkill: true,
							group: 'gt_shenling_fail',
							subSkill: {
								fail: {
									audio: 'ext:坎公骑冠剑/audio/character:2',
									trigger: {
										global: 'dieAfter',
										player: 'dying',
									},
									forced: true,
									limited: true,
									content() {
										'step 0';
										game.log(player, '使命失败');
										//player.addSkill('gt_shenling_failed');
										player.awakenSkill('gt_shenling');
										player.storage.gt_daoshu = true;
										if (player.hp < player.maxHp) {
											player.hp = player.maxHp;
										}
										event.targets = game.filterPlayer();
										event.targets.remove(player);
										event.targets.sort(lib.sort.seat);
										//player.line(event.targets,'water');
										('step 1');
										if (event.targets.length) {
											//event.targets.shift().damage();
											player.useCard({ name: 'sha', nature: 'thunder' }, event.targets.shift(), false);
											event.redo();
										}
										//player.chooseUseTarget('###是否发动【神灵】？###视为使用一张【南蛮入侵】',{name:'nanman'},true);
									},
								},
								failed: {
									mark: true,
									intro: {
										content: '使命失败',
									},
								},
							},
						},
						gt_shenling: {
							global: 'gt_shenling2',
							audio: 'ext:坎公骑冠剑/audio/character:2',
							dutySkill: true,
							group: 'gt_shenling_fail',
							subSkill: {
								fail: {
									audio: 'ext:坎公骑冠剑/audio/character:2',
									trigger: {
										global: 'dieAfter',
									},
									forced: true,
									dutySkill: true,
									content() {
										'step 0';
										game.log(player, '使命失败');
										//player.addSkill('gt_shenling_failed');
										player.awakenSkill('gt_shenling');
										event.targets = game.filterPlayer();
										event.targets.remove(player);
										event.targets.sort(lib.sort.seat);
										//player.line(event.targets,'water');
										('step 1');
										if (event.targets.length) {
											//event.targets.shift().damage();
											player.useCard({ name: 'sha', nature: 'thunder' }, event.targets.shift(), false);
											event.redo();
										}
									},
								},
								failed: {
									mark: true,
									intro: {
										content: '使命失败',
									},
								},
							},
						},
						gt_shenling2: {
							audio: 'gt_shenling',
							forceaudio: true,
							enable: 'phaseUse',
							usable: 1,
							prompt() {
								var player = _status.event.player;
								var list = game.filterPlayer(function (target) {
									return target.hasSkill('gt_shenling', player) && player.canCompare(target);
								});
								var str = '令' + get.translation(list);
								if (list.length > 1) str += '中的一人';
								str += '交给你一张牌';
								return str;
							},
							filter(event, player) {
								return game.hasPlayer(function (target) {
									return target.hasSkill('gt_shenling', player) && target != player && target.countCards('he') > 0;
								});
							},
							filterTarget(card, player, target) {
								return target.hasSkill('gt_shenling', player) && target != player;
							},
							content() {
								'step 0';
								target.chooseCardTarget({
									forced: true,
									position: 'he',
									filterCard: true,
									selectCard: 1,
									filterTarget(card, player, target) {
										return target == event.player;
									},
									check(card) {
										if (get.attitude(player, target) > 0) {
											return 9 - get.value(card);
										} else return 6 - get.value(card);
									},
									prompt: '交给' + get.translation(player) + '一张牌.',
								});
								('step 1');
								if (result.targets?.length) {
									target.give(result.cards, result.targets[0]);
								}
							},
							ai: {
								order: 6,
								expose: 0.5,
								result: {
									player(player, target) {
										var target = game.findPlayer(function (current) {
											return current.hasSkill('gt_shenling');
										});
										if (target) {
											return get.attitude(player, target);
										}
									},
								},
							},
						},
						//九尾狐
						gt_daofa: {
							audio: 'gt_daoshu',
							nobracket: true,
							charlotte: true,
							superCharlotte: true,
							ruleSkill: true,
							filter(event, player) {
								var stat = player.getStat().skill;
								if (!stat.gt_daofa) stat.gt_daofa = 0;
								if (stat.gt_daofa > 0) return false;
								return true;
							},
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							forced: true,
							content() {
								'step 0';
								player.chooseUseTarget('###是否发动【道法】？###视为使用一张雷【杀】', { name: 'sha', nature: 'thunder' }, false);
								var stat = player.getStat().skill;
								stat.gt_daofa++;
								('step 1');
								var stat = player.getStat().skill;
								if (!result.bool) stat.gt_daofa--;
							},
						},
						gt_huxian: {
							forced: true,
							//direct:true,
							nobracket: true,
							charlotte: true,
							superCharlotte: true,
							ruleSkill: true,
							audio: 'gt_shenling',
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return player.maxHp > player.countCards('h');
							},
							content() {
								player.chooseUseTarget('###是否发动【狐仙】？###视为使用一张【无中生有】', { name: 'wuzhong' }, true);
								//player.draw(player.maxHp-player.countCards('h'));
							},
							ai: {
								order: 0.5,
								//threaten:5,
							},
						},
						boss_title: {
							audio: 'ext:坎公骑冠剑/audio:1',
						},
						gt_beinu: {
							audio: 'boss_title',
							//enable:'chooseToUse',
							trigger: { player: 'phaseZhunbeiBegin' },
							nobracket: true,
							charlotte: true,
							superCharlotte: true,
							ruleSkill: true,
							forced: true,
							juexingji: true,
							content() {
								'step 0';
								player.awakenSkill('gt_beinu');
								player.storage.gt_beinu = true;
								if (lib.config.gt_boss_intro) {
									player.addSkill('jialan_die');
								}
							},
							group: 'gt_beinu_intro',
							subSkill: {
								intro: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									filter(event, player) {
										return player.name1 == 'boss_jialan';
									},
									content() {
										'step 0';
										player.awakenSkill('gt_qinxi_intro');
										lib.config.background_music = 'music_custom';
										lib.config.background_music_src = ui.backgroundMusic.src = `extension/坎公骑冠剑/audio/boss/bgm_boss_intro.mp3`;
										('step 1');
										if (lib.config.gt_boss_intro) {
											player.say('剩下的时间不多了.');
										}
										('step 2');
										if (lib.config.gt_boss_intro) {
											game.findPlayer2(function (current) {
												if (current.name == 'gt_naili') {
													current.say('住手啊,佳岚!');
												}
												if (
													game.countPlayer(function (current) {
														return current.name == 'gt_naili';
													}) == 0
												) {
													player.say('奈莉:<住手啊,佳岚!>');
												}
												//else player.say('奈莉:<住手啊,佳岚!>');
											});
										}
										('step 3');
										if (lib.config.gt_boss_intro) {
											player.say('…');
										}
										('step 4');
										if (lib.config.gt_boss_intro) {
											player.say('终究还是这样的结局.');
										}
										('step 5');
										if (lib.config.gt_boss_intro) {
											player.say('无法挽回了.');
										}
										('step 6');
										player.maxHp = 9;
										//player.hp=9
										('step 7');
										player.hp = player.maxHp;
										if (player.name1 == 'boss_jialan') {
											player.node.avatar.setBackgroundImage('extension/坎公骑冠剑/image/character/boss_jialan_a.jpg');
										}
										('step 8');
										if (lib.config.gt_boss_intro) {
											game.findPlayer2(function (current) {
												if (current.name == 'gt_naili') {
													current.say('不可以,佳岚!');
												}
												if (
													game.countPlayer(function (current) {
														return current.name == 'gt_naili';
													}) == 0
												) {
													player.say('奈莉:<不可以,佳岚!>');
												}
											});
										}
										('step 9');
										if (lib.config.gt_boss_intro) {
											player.say('我已经不能回头了.');
										}
										('step 10');
										lib.config.background_music = 'music_custom';
										lib.config.background_music_src = ui.backgroundMusic.src = `extension/坎公骑冠剑/audio/boss/bgm_battle_boss.mp3`;
									},
									silent: true,
								},
							},
						},
						jialan_die: {
							trigger: { player: 'dieBegin' },
							forced: true,
							juexingji: true,
							filter(event, player) {
								if (!player.storage.gt_beinu) return false;
								return player.name1 == 'boss_jialan';
							},
							content() {
								'step 0';
								player.awakenSkill('jialan_die');
								ui.backgroundMusic.src = 'extension/坎公骑冠剑/audio/boss/.mp3';
								player.say('啊啊啊啊啊啊啊!');
								('step 1');
								player.maxHp = 3;
								if (player.name1 == 'boss_jialan') {
									player.node.avatar.setBackgroundImage('extension/坎公骑冠剑/image/character/boss_jialan.jpg');
								}
								ui.backgroundMusic.src = 'extension/坎公骑冠剑/audio/boss/bgm_boss_intro.mp3';
								('step 2');
								player.say('不要…阻止…我!!');
								('step 3');
								game.findPlayer2(function (current) {
									if (current.name == 'gt_naili') {
										current.say('住手,佳岚!');
									}
									if (
										game.countPlayer(function (current) {
											return current.name == 'gt_naili';
										}) == 0
									) {
										player.say('奈莉:<住手,佳岚!>');
									}
								});
								('step 4');
								game.findPlayer2(function (current) {
									if (current.name == 'gt_naili') {
										current.say('佳岚的愤怒…如此强烈…');
									}
									if (
										game.countPlayer(function (current) {
											return current.name == 'gt_naili';
										}) == 0
									) {
										player.say('奈莉:<佳岚的愤怒…如此强烈…>');
									}
								});
								('step 5');
								game.findPlayer2(function (current) {
									if (current.name == 'gt_naili') {
										current.say('照这样下去…');
									}
									if (
										game.countPlayer(function (current) {
											return current.name == 'gt_naili';
										}) == 0
									) {
										player.say('奈莉:<照这样下去…>');
									}
								});
								('step 6');
								player.say('你是不会明白的…那种痛苦…悲伤…');
								('step 7');
								player.say('我将以生命为代价,打破这种痛苦的轮回!');
								('step 8');
								game.findPlayer2(function (current) {
									if (current.name == 'gt_naili') {
										current.say('我不会让你做傻事的!');
									}
									if (
										game.countPlayer(function (current) {
											return current.name == 'gt_naili';
										}) == 0
									) {
										player.say('奈莉:<我不会让你做傻事的!>');
									}
								});
								('step 9');
								game.findPlayer2(function (current) {
									if (current.name == 'gt_naili') {
										current.say('就算牺牲我的狐仙宝玉,我也要救你…');
									}
									if (
										game.countPlayer(function (current) {
											return current.name == 'gt_naili';
										}) == 0
									) {
										player.say('奈莉:<就算牺牲我的狐仙宝玉,我也要救你…>');
									}
								});
								('step 10');
								game.findPlayer2(function (current) {
									if (current.name == 'gt_naili') {
										current.say('醒醒,佳岚!');
									}
									if (
										game.countPlayer(function (current) {
											return current.name == 'gt_naili';
										}) == 0
									) {
										player.say('奈莉:<醒醒,佳岚!>');
									}
								});
								('step 11');
								ui.backgroundMusic.src = 'extension/坎公骑冠剑/audio/boss/.mp3';
							},
							silent: true,
						},
						//19贝丝
						gt_kousha: {
							enable: 'phaseUse',
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							filterCard: {
								name: 'sha',
							},
							selectCard: 1,
							viewAs: {
								name: 'sha',
								nature: 'stab',
								storage: { gt_kousha: true },
							},
							filter(event, player) {
								return true;
							},
							//onuse:function(result,player){
							//player.addTempSkill('gt_kousha_effect');
							//},
							group: ['gt_kousha_draw'], //"gt_kousha_damage"],
							ai: {
								//respondSha:true,
								order() {
									return get.order({ name: 'sha' }) + 0.1;
								},
								expose: 0.5,
								//threaten:1.3,
							},
							subSkill: {
								draw: {
									trigger: { player: 'useCard' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_kousha && event.card.name == 'sha';
									},
									content() {
										//var num=game.countPlayer(function(current){return current.inRange(player);});
										var num = Math.min(
											game.countPlayer(function (current) {
												return player.inRange(current);
											}),
											3
										);
										player.draw(num);
									},
									silent: true,
								},
								damage: {
									trigger: { player: 'useCardToPlayered' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_kousha && event.card.name == 'sha';
									},
									content() {
										var num = Math.min(
											game.countPlayer(function (current) {
												return player.inRange(current);
											}),
											3
										);
										if (num >= 3) {
											var id = trigger.target.playerid;
											var map = trigger.parent.customArgs;
											if (!map[id]) map[id] = {};
											if (typeof map[id].extraDamage != 'number') {
												map[id].extraDamage = 0;
											}
											map[id].extraDamage++;
										}
									},
									silent: true,
								},
							},
						},
						gt_lieshi: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							mod: {
								inRange(from, to) {
									if (!from.hasSkill('gt_lieshi') || from.gt_lieshi) return;
									from.gt_lieshi = true;
									var bool = to.inRange(from);
									delete from.gt_lieshi;
									if (bool) return true;
									//if(to.inRange(from)) return true;//爆栈小能手
								},
							},
							trigger: {
								source: 'damageSource',
							},
							//usable:1,
							filter(event, player) {
								return event.card?.name == 'sha';
							},//QQQ
							content() {
								player.changeHujia();
							},
						},
						//黑暗魔法师
						gt_qinxi: {
							audio: 'gt_kousha',
							enable: 'phaseUse',
							usable: 1,
							nobracket: true,
							charlotte: true,
							superCharlotte: true,
							ruleSkill: true,
							filterCard: true,
							selectCard: 0,
							position: 'h',
							viewAs(cards, player) {
								if (player.storage.gt_longhua) return { name: 'nanman' };
								else return { name: 'juedou' };
							},
							ai: {
								skillTagFilter(player) {
									var num = Math.min(
										game.countPlayer(function (current) {
											return player.inRange(current);
										}),
										3
									);
									return player.countCards('h') >= 3 - num;
								},
								order(name, player) {
									if (player.storage.gt_longhua) return get.order({ name: 'nanman' }) - 0.1;
									return get.order({ name: 'juedou' }) - 0.1;
								},
								expose: 0.5,
								//threaten:2,
							},
							derivation: 'gt_qinxi2',
							group: ['gt_qinxi_title', 'gt_qinxi_intro'],
							subSkill: {
								intro: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									filter(event, player) {
										return player.name1 == 'boss_beisi';
									},
									content() {
										'step 0';
										player.awakenSkill('gt_qinxi_intro');
										lib.config.background_music = 'music_custom';
										lib.config.background_music_src = ui.backgroundMusic.src = `extension/坎公骑冠剑/audio/boss/bgm_boss_intro.mp3`;
										('step 1');
										if (lib.config.gt_boss_intro) {
											player.say('守护者.');
										}
										('step 2');
										if (lib.config.gt_boss_intro) {
											player.say('天神曾告诫过我,要尽量避免和你接触.');
										}
										('step 3');
										if (lib.config.gt_boss_intro) {
											player.say('别和你有任何关系,才是最好的选择.');
										}
										('step 4');
										if (lib.config.gt_boss_intro) {
											player.say('…我却不以为然.');
										}
										('step 5');
										if (lib.config.gt_boss_intro) {
											player.say('也许…命运早已注定你我始终有交集.');
										}
										('step 6');
										if (lib.config.gt_boss_intro) {
											game.findPlayer2(function (current) {
												if (current.name == 'gt_weilaigongzhu') {
													current.say('现在,你该为你的罪行付出代价了.');
												}
												if (
													game.countPlayer(function (current) {
														return current.name == 'gt_weilaigongzhu';
													}) == 0
												) {
													player.say('守护者:<现在,你该为你的罪行付出代价了>');
												}
											});
										}
										('step 7');
										if (lib.config.gt_boss_intro) {
											player.say('这句话应该由我来说,守护者.');
										}
										('step 8');
										if (lib.config.gt_boss_intro) {
											player.say('你我之间的孽缘…');
										}
										('step 9');
										if (lib.config.gt_boss_intro) {
											player.say('就此斩断吧!');
											game.playAudio('../extension/坎公骑冠剑/audio/boss/02_beth_jump_01');
										}
										('step 10');
										lib.config.background_music = 'music_custom';
										lib.config.background_music_src = ui.backgroundMusic.src = `extension/坎公骑冠剑/audio/boss/bgm_battle_boss.mp3`;
									},
									silent: true,
								},
								title: {
									audio: 'boss_title',
									trigger: { player: 'phaseZhunbeiBegin' },
									forced: true,
									limited: true,
									filter(event, player) {
										return player.name1 == 'boss_beisi';
									},
									content() {
										player.awakenSkill('gt_qinxi_title');
									},
								},
							},
						},
						gt_shoulie: {
							audio: 'gt_lieshi',
							forced: true,
							charlotte: true,
							superCharlotte: true,
							mod: {
								inRange(from, to) {
									if (to.inRange(from)) return true;
								},
							},
							trigger: {
								source: 'damageSource',
							},
							content() {
								if (player.storage.gt_mohua) player.gainPlayerCard(true, trigger.player, 'he');
								else player.discardPlayerCard(true, trigger.player, 'he');
							},
							ai: {
								//threaten:1.2,
							},
							derivation: 'gt_shoulie2',
						},
						gt_longhua: {
							audio: 'ext:坎公骑冠剑/audio:1',
							trigger: {
								player: 'dieBegin',
							},
							nobracket: true,
							charlotte: true,
							superCharlotte: true,
							ruleSkill: true,
							forced: true,
							juexingji: true,
							content() {
								'step 0';
								player.awakenSkill('gt_longhua');
								player.storage.gt_longhua = true;
								player.gainMaxHp();
								('step 1');
								player.hp = player.maxHp;
								player.addSkill('gt_mohua');
								trigger.cancel();
								//废除装备区
								player.disableEquip('equip1');
								player.disableEquip('equip2');
								player.disableEquip('equip3');
								player.disableEquip('equip4');
								player.disableEquip('equip5');
								('step 2');
								//立即开始你的回合
								player.update();
								ui.clear();
								if (player.isLinked()) player.link();
								if (player.isTurnedOver()) player.turnOver();
								player.discard(player.getCards('j'));
								('step 3');
								const evt = _status.event.getParent('phase');
								if (evt && evt.name) {
									evt.finish();
								}
								player.phase('nodelay');
							},
							ai: {
							},
							group: 'gt_longhua_dieBefore',
							derivation: 'gt_mohua',
							subSkill: {
								dieBefore: {
									trigger: { player: 'dieBefore' },
									forced: true,
									juexingji: true,
									filter(event, player) {
										return player.name1 == 'boss_beisi';
									},
									content() {
										'step 0';
										player.awakenSkill('gt_longhua_dieBefore');
										if (lib.config.gt_boss_intro) {
											ui.backgroundMusic.src = 'extension/坎公骑冠剑/audio/boss/.mp3';
										}
										('step 1');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_01');
										}
										('step 2');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_02');
										}
										('step 3');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_03');
										}
										('step 4');
										if (lib.config.gt_boss_intro) {
											player.say('我现在这样子…');
											player.node.avatar.setBackgroundImage('extension/坎公骑冠剑/image/character/boss_beisi_.jpg');
											ui.backgroundMusic.src = 'extension/坎公骑冠剑/audio/boss/bgm_boss_end_intro.mp3';
										}
										('step 5');
										if (lib.config.gt_boss_intro) {
											player.say('是天神指定的最大禁忌.');
										}
										('step 6');
										if (lib.config.gt_boss_intro) {
											player.say('这是为了获得瞬间的力量,而背弃人性的行为.');
										}
										('step 7');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
										}
										('step 8');
										if (lib.config.gt_boss_intro) {
											player.say('但是…');
										}
										('step 9');
										if (lib.config.gt_boss_intro) {
											player.say('为了我们种族的生存…');
										}
										('step 10');
										if (lib.config.gt_boss_intro) {
											player.say('也为了人类的延续…!');
										}
										('step 11');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
											lib.config.background_music = 'music_custom';
											lib.config.background_music_src = ui.backgroundMusic.src = `extension/坎公骑冠剑/audio/boss/01_beth_transform_05.mp3`;
										}
										('step 12');
										if (lib.config.gt_boss_intro) {
											player.say('…我会坦然接受坠入罪恶深渊的命运.');
										}
										('step 13');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
										}
										('step 14');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
										}
										('step 15');
										player.node.avatar.setBackgroundImage('extension/坎公骑冠剑/image/character/boss_beisi_a.jpg');
										('step 16');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
										}
										('step 17');
										if (lib.config.gt_boss_intro) {
											player.say('就让我来了结你吧,守护者.');
										}
										('step 18');
										if (lib.config.gt_boss_intro) {
											player.say('不…');
										}
										('step 19');
										if (lib.config.gt_boss_intro) {
											player.say('带来灭亡的人啊!');
										}
										('step 20');
										lib.config.background_music = 'music_custom';
										lib.config.background_music_src = ui.backgroundMusic.src = `extension/坎公骑冠剑/audio/boss/bgm_boss_end_a.mp3`;
									},
									silent: true,
								},
							},
						},
						gt_mohua: {
							trigger: {
								player: 'dieBegin',
							},
							nobracket: true,
							charlotte: true,
							superCharlotte: true,
							ruleSkill: true,
							forced: true,
							juexingji: true,
							content() {
								'step 0';
								player.awakenSkill('gt_mohua');
								player.storage.gt_mohua = true;
								player.gainMaxHp();
								('step 1');
								player.hp = player.maxHp;
								trigger.cancel();
								if (lib.config.gt_boss_intro) {
									player.addSkill('beisi_die');
								}
								//废除判定区
								player.disableJudge();
								('step 2');
								//立即开始你的回合
								player.update();
								ui.clear();
								if (player.isLinked()) player.link();
								if (player.isTurnedOver()) player.turnOver();
								player.discard(player.getCards('j'));
								('step 3');
								const evt = _status.event.getParent('phase');
								if (evt && evt.name) {
									evt.finish();
								}
								player.phase('nodelay');
							},
							ai: {
							},
							group: ['gt_mohua_dieBefore'],
							subSkill: {
								dieBefore: {
									trigger: { player: 'dieBefore' },
									forced: true,
									juexingji: true,
									filter(event, player) {
										return player.name1 == 'boss_beisi';
									},
									content() {
										'step 0';
										player.awakenSkill('gt_mohua_dieBefore');
										if (lib.config.gt_boss_intro) {
											ui.backgroundMusic.src = 'extension/坎公骑冠剑/audio/boss/.mp3';
										}
										('step 1');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/02_die_boss_beth_01');
										}
										('step 2');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_06');
										}
										('step 3');
										if (lib.config.gt_boss_intro) {
											game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_07');
										}
										player.node.avatar.setBackgroundImage('extension/坎公骑冠剑/image/character/boss_beisi_b.jpg');
										('step 4');
										if (lib.config.gt_boss_intro) {
										}
										game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_laugh_02');
										('step 5');
										lib.config.background_music = 'music_custom';
										lib.config.background_music_src = ui.backgroundMusic.src = `extension/坎公骑冠剑/audio/boss/bgm_boss_end_b.mp3`;
									},
									silent: true,
								},
							},
						},
						beisi_die: {
							trigger: { player: 'dieBegin' },
							forced: true,
							juexingji: true,
							filter(event, player) {
								if (!player.storage.gt_mohua) return false;
								return player.name1 == 'boss_beisi';
							},
							content() {
								'step 0';
								player.awakenSkill('gt_mohua_die');
								('step 1');
								ui.backgroundMusic.src = 'extension/坎公骑冠剑/audio/boss/02_die_boss_beth_02.mp3';
								('step 2');
								game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
								('step 3');
								game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
								('step 4');
								game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
								('step 5');
								player.say('呜…');
								('step 6');
								player.say('呜哇啊啊啊啊…');
								('step 7');
								player.say('守护者…');
								game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
								('step 8');
								player.say('我不能送你去天神那里…');
								('step 8');
								game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
								('step 9');
								player.say('守护者…!!!');
								('step 10');
								player.say('不、不、不不不不…');
								game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
								('step 11');
								game.playAudio('../extension/坎公骑冠剑/audio/boss/01_beth_transform_04');
								('step 12');
								player.say('我不想死,我不想死,我不想死…');
								('step 13');
								player.say('天…神…');
								('step 14');
								ui.backgroundMusic.src = 'extension/坎公骑冠剑/audio/boss/.mp3';
							},
							silent: true,
						},
						//20鲁
						gt_luren: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							mod: {
								targetInRange(card) {
									if (card.storage && card.storage.gt_luren) return true;
								},
							},
							filter(event, player) {
								return player.hasCard(function (card) {
									return get.type(card) == 'equip';
								}, 'hes');
							},
							filterCard(card, player) {
								return get.type(card) == 'equip';
							},
							position: 'hes',
							viewAs: {
								name: 'sha',
								storage: { gt_luren: true },
							},
							//prompt:"将一张装备牌当杀使用",
							check(card) {
								//if(player.storage.gt_zhongjie) return true;
								return 5 - get.value(card);
							},
							onuse(result, player) {
								player.addSkill('gt_luren_effect');
							},
							ai: {
								respondSha: true,
								order() {
									return get.order({ name: 'sha' }) - 0.1;
								},
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'unequip') {
										if (!arg || !arg.card || !arg.card.storage || !arg.card.storage.gt_luren) return false;
										return true;
									}
									return (
										arg == 'use' &&
										player.hasCard(function (card) {
											return get.type(card) == 'equip';
										}, 'hes')
									);
								},
								//threaten:1.3,
							},
							subSkill: {
								effect: {
									trigger: {
										player: 'useCardToPlayered',
									},
									forced: true,
									content() {
										trigger.target.addTempSkill('qinggang2');
										trigger.target.storage.qinggang2.add(trigger.card);
										trigger.target.markSkill('qinggang2');
										player.removeSkill('gt_luren_effect');
									},
									ai: {
										unequip: true,
									},
									silent: true,
								},
							},
							group: 'gt_luren2',
						},
						gt_luren2: {
							audio: 'gt_luren',
							trigger: {
								player: 'damageEnd',
								source: 'damageSource',
							},
							forced: true,
							filter(event, player, target) {
								var stat = player.getStat().skill;
								if (!stat.gt_luren2) stat.gt_luren2 = 0;
								if (stat.gt_luren2 > 0) return false;
								for (var i = 1; i < 6; i++) {
									if (player.isEmpty(i)) return event.source;
								}
								return false;
							},
							logTarget(event, player) {
								return player == event.player ? event.source : event.player;
							},
							content() {
								'step 0';
								var stat = player.getStat().skill;
								stat.gt_luren2++;
								var target = lib.skill.gt_luren2.logTarget(trigger, player);
								var next;
								if (
									target.hasCard(function (card) {
										return player.isEmpty(get.subtype(card));
									}, 'e')
								) {
									next = player
										.chooseControl('移动装备', '使用装备', '取消', function (event, player) {
											var source = _status.event.sourcex;
											var att = get.attitude(player, target);
											if (source.hasSkillTag('noe')) {
												if (att > 0) {
													return '移动装备';
												}
											} else if (
												att <= 0 &&
												source.countCards('e', function (card) {
													return get.value(card, source) > 0 && get.effect(player, card, player, player) > 0;
												})
											) {
												return '移动装备';
											}
											return '使用装备';
										})
										.set('sourcex', target);
								} else {
									next = player.chooseControl('使用装备', '取消', function () {
										var att = get.attitude(player, target);
										return '使用装备';
									});
								}
								next.set('prompt', get.prompt('gt_luren2')); //.set('prompt2','将对方装备区内的一张牌移动至你的装备区或将牌堆或随机使用一张装备牌');
								('step 1');
								var target = lib.skill.gt_luren2.logTarget(trigger, player);
								if (result.control == '移动装备') {
									player
										.choosePlayerCard(target, 'e', '将一张装备牌移至你的装备区', true)
										.set('filterButton', function (button) {
											return _status.event.player.isEmpty(get.subtype(button.link));
										})
										.set('ai', function (button) {
											return get.effect(player, button.link, player, player);
										});
								} else if (result.control == '使用装备') {
									for (var i = 1; i < 7; i++) {
										if (player.isEmpty(i)) {
											var sub = 'equip' + i,
												card = get.cardPile(function (card) {
													return get.subtype(card, false) == sub && !get.cardtag(card, 'gifts');
												});
											if (card) {
												player.$gain2(card);
												player.equip(card);
												break;
											}
										}
									}
									event.finish();
								} else {
									var stat = player.getStat().skill;
									if (!result.bool) stat.gt_luren2--;
									event.finish();
								}
								('step 2');
								var target = lib.skill.gt_luren2.logTarget(trigger, player);
								if (result.links?.length) {
									target.$give(result.links[0], player, false);
									player.equip(result.links[0]);
									player.addExpose(0.2);
								}
							},
							ai: {
								//threaten:1.5,
								maixie_defend: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										return 0.8;
										// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
									},
								},
							},
						},
						gt_zhongjie: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							limited: true,
							content() {
								player.awakenSkill('gt_zhongjie');
								player.addTempSkill('gt_zhongjie_effect', { player: 'phaseEnd' });
								player.addSkill('gt_zhongjie_end');
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) + 0.1;
								},
								result: {
									player(player) {
										var num = player.hp + player.countCards('hs', { name: ['tao', 'jiu'] });
										if (
											((player.identity != 'zhu' && player.identity != 'nei') ||
												game.countPlayer(function (current) {
													return get.attitude(player, current);
												}) < 2) &&
											player.countCards('hes', function (card) {
												return get.type(card) == 'equip';
											}) >
											num + 1
										) {
											return 1;
										}
										return 0;
									},
								},
							},
							subSkill: {
								effect: {
									mod: {
										cardUsable(card, player) {
											if (card.storage && card.storage.gt_luren) return Infinity;
										},
										aiValue(player, card, num) {
											if (get.type(card) == 'equip') return 1;
										},
									},
									trigger: { player: 'useCardToPlayered' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.cards && event.cards.length == 1 && get.type(event.cards[0]) == 'equip';
									},
									content() {
										var id = trigger.target.playerid;
										var map = trigger.parent.customArgs;
										if (!map[id]) map[id] = {};
										if (typeof map[id].extraDamage != 'number') {
											map[id].extraDamage = 0;
										}
										map[id].extraDamage = trigger.target.hp - 1;
									},
									ai: {
										damageBonus: true,
									},
									silent: true,
								},
								end: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									content() {
										player.die();
										player.removeSkill('gt_zhongjie_end');
									},
									silent: true,
								},
							},
						},
						gt_zhongji: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'useCardToPlayered' },
							//forced:true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							check(event, player) {
								return (
									event.target.hp > 1 &&
									!event.target.hasSkillTag('filterDamage', null, {
										player: player,
										card: event.card,
									}) &&
									get.attitude(player, event.target) < 0
								);
							},
							content() {
								var id = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].extraDamage != 'number') {
									map[id].extraDamage = 0;
								}
								map[id].extraDamage = trigger.target.hp - 1;
								player.loseHp();
							},
							ai: {
								damageBonus: true,
							},
						},
						//21加百列
						gt_shenjiang: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								global: 'gainAfter',
							},
							filter(event, player) {
								if (player == event.player || !event.player.isIn()) return false;
								var evt = event.getl(player);
								if (!evt || !evt.cards2.length) return false;
								return true;
							},
							content() {
								'step 0';
								player.viewHandcards(trigger.player);
								('step 1');
								player
									.chooseControl()
									.set('choiceList', ['令' + get.translation(trigger.player) + '回复1点体力', '对' + get.translation(trigger.player) + '造成1点雷电伤害'])
									.set('ai', function () {
										var player = _status.event.player;
										if (get.attitude(player, trigger.player) > 3) return 0;
										return 1;
									});
								('step 2');
								if (result.index == 0) {
									trigger.player.recover();
								} else {
									trigger.player.damage('thunder', 'nocard');
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'gain')) return [1, 0, 0, -1.5];
									},
								},
							},
						},
						gt_tianlai: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filterCard: lib.filter.cardDiscardable,
							discard: false,
							lose: false,
							delay: false,
							selectCard: [1, Infinity],
							check(card) {
								var player = _status.event.player;
								if (
									get.position(card) == 'h' &&
									!player.countCards('h', 'du') &&
									player.hp < player.maxHp &&
									!player.countCards('h', function (card) {
										return get.value(card) >= 8;
									})
								) {
									return 1;
								}
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.discard(cards);
								event.num = 1;
								var hs = player.getCards('h');
								if (!hs.length) event.num = 0;
								for (var i = 0; i < hs.length; i++) {
									if (!cards.includes(hs[i])) {
										event.num = 0;
										break;
									}
								}
								('step 1');
								player.draw(cards.length);
								if (event.num) player.recover();
								('step 2');
								player.chooseCardTarget({
									filterCard: true,
									position: 'he',
									selectCard: [1, Infinity],
									filterTarget(card, player, target) {
										return target.hp < player.hp;
										//return player!=target&&target.isMinHp();
									},
									ai1(card) {
										//if(ui.selected.cards.length>0) return 0;
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
										if (!ui.selected.cards.length && card.name == 'du') return 20;
										//if(player.countCards('he')>player.hp) return 10-get.value(card);
										return 6 - get.value(card);
									},
									ai2(target) {
										var att = get.attitude(_status.event.player, target);
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											if (target.hasSkillTag('nodu')) return 0;
											return 1 - att;
										}
										return att - 3;
									},
									prompt: '请选择要送人的卡牌',
								});
								('step 3');
								if (result.targets?.length) {
									player.line(result.targets, 'green');
									result.targets[0].gain(result.cards, player, 'giveAuto');
								}
							},
							ai: {
								order: 1,
								//threaten:1.6,
								result: {
									player: 1,
								},
							},
						},
						//22琳
						gt_qigong: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								player: 'phaseUseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.maxHp > player.countCards('h');
							},
							content() {
								player.draw(player.maxHp - player.countCards('h'));
							},
						},
						gt_zuichu: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							//技能发动时机
							enable: ['chooseToUse', 'chooseToRespond'],
							//发动时提示的技能描述
							//prompt:'红色牌当杀,黑色牌当酒',
							//判断当前时机能否发动技能
							filter(event, player) {
								//获取当前时机的卡牌选择限制
								var filter = event.filterCard;
								//如果当前时机能够使用火杀并且角色有红牌则可以发动技能
								if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { color: 'red' })) return true;
								//如果当前时机能够使用酒并且角色有黑牌则可以发动技能
								if (filter({ name: 'jiu' }, player, event) && player.countCards('hes', { color: 'black' })) return true;
								return false;
							},
							//选牌合法性判断
							filterCard(card, player, event) {
								//第二张牌和第一张颜色相同
								if (ui.selected.cards.length) return get.color(card, player) == get.color(ui.selected.cards[0], player);
								event = event || _status.event;
								//获取当前时机的卡牌选择限制
								var filter = event._backup.filterCard;
								//获取卡牌颜色
								var name = get.color(card, player);
								//如果这张牌是红色并且当前时机能够使用火杀则可以选择
								if (name == 'red' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
								//如果这张牌是黑色并且当前时机能够使用酒则可以选择
								if (name == 'black' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
								//上述条件都不满足则不能选择这张牌
								return false;
							},
							//选牌数量
							selectCard: [1, 2],
							//确保选择第一张牌后 重新检测第二张牌的合法性 避免选择两张颜色不同的牌
							complexCard: true,
							//选牌范围:手牌区和装备区和木马
							position: 'hes',
							//动态的viewAs
							viewAs(cards, player) {
								var name = false;
								var nature = null;
								//根据选择的卡牌的颜色 判断要转化出的卡牌是火杀还是酒
								switch (get.color(cards[0], player)) {
									case 'red':
										name = 'sha';
										nature = 'fire';
										break;
									case 'black':
										name = 'jiu';
										break;
								}
								//返回判断结果
								if (name) return { name: name, nature: nature };
								return null;
							},
							//AI选牌思路
							check(card) {
								if (_status.event.type == 'dying' && ui.selected.cards.length) return -1;
								if (ui.selected.cards.length) return 6 - get.value(card);
								if (_status.event.type == 'dying') return 1 / Math.max(0.1, get.value(card));
								var player = _status.event.player;
								var max = 0;
								var name2;
								var list = ['sha', 'jiu'];
								var map = { sha: 'red', jiu: 'black' };
								for (var i = 0; i < list.length; i++) {
									var name = list[i];
									if (
										player.countCards('hes', function (card) {
											return get.value(card) < 6 && get.color(card, player) == map[name];
										}) &&
										player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null })
									) {
										var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
										if (temp > max) {
											max = temp;
											name2 = map[name];
										}
									}
								}
								if (name2 == get.color(card, player)) return 6 - get.value(card);
								return 0;
							},
							//让系统知道玩家有酒
							hiddenCard(player, name) {
								if (name == 'jiu') return player.countCards('hes', { color: 'black' });
							},
							ai: {
								fireAttack: true,
								respondSha: true,
								//respondShan:true,
								//让系统知道角色<有杀>
								skillTagFilter(player, tag) {
									var name;
									if (!player.countCards('hes', { color: 'red' })) return false;
								},
								//AI牌序
								order(item, player) {
									if (player && _status.event.type == 'phase') {
										var max = 0;
										var list = ['sha', 'jiu'];
										var map = { sha: 'red', jiu: 'black' };
										for (var i = 0; i < list.length; i++) {
											var name = list[i];
											if (
												player.countCards('hes', function (card) {
													return get.value(card) < 6 && get.color(card, player) == map[name];
												}) > 0 &&
												player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
											) {
												var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
												if (temp > max) max = temp;
											}
										}
										//max/=1.01;
										return max;
									}
									return 2;
								},
							},
							group: ['gt_zuichu_sha', 'gt_zuichu_jiu'],
							subSkill: {
								sha: {
									trigger: { source: 'damageSource' },
									filter(event, player) {
										return event.parent.skill == 'gt_zuichu' && event.card.name == 'sha' && event.parent.name == 'sha' && event.cards.length == 2;
									},
									forced: true,
									popup: false,
									content() {
										trigger.player.loseHp();
									},
								},
								jiu: {
									trigger: { player: 'useCard' },
									forced: true,
									popup: false,
									filter(event, player) {
										var evt = event;
										return ['jiu'].includes(evt.card.name) && evt.skill == 'gt_zuichu' && evt.cards && evt.cards.length == 2;
									},
									content() {
										player.addSkill('gt_zuichu_jiusha');
									},
								},
								jiusha: {
									mark: true,
									marktext: '醉厨',
									intro: {
										name: '醉厨',
										content: '你使用的下一张【杀】需要依次使用两张【闪】响应',
									},
									trigger: { player: 'useCardToPlayered' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
									},
									//_priority:-1,
									logTarget: 'target',
									content() {
										var id = trigger.target.playerid;
										var map = trigger.parent.customArgs;
										if (!map[id]) map[id] = {};
										if (typeof map[id].shanRequired == 'number') {
											map[id].shanRequired++;
										} else {
											map[id].shanRequired = 2;
										}
										player.removeSkill('gt_zuichu_jiusha');
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											if (arg && arg.card.name != 'sha' || arg.target.countCards('h', 'shan') > 1) return false;
										},
									},
								},
							},
						},
						//23未来骑士
						gt_hufu: {
							enable: 'phaseUse',
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							position: 'h',
							filterCard: true,
							selectCard: 1,
							prompt: '弃置一张手牌并获得<护符>',
							check(card) {
								return 7 - get.value(card);
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								player.addMark('gt_hufu', 1);
								player.addSkill('gt_hufu_mark');
								player.addSkill('gt_hufu_remove');
							},
							group: ['gt_hufu_effect'],
							subSkill: {
								mark: {
									mark: true,
									marktext: '护符',
									intro: {
										name: '护符',
										content: '防止你受到的一次伤害',
									},
									charlotte: true,
									ai: {
										filterDamage: true,
										skillTagFilter(player, tag, arg) {
											if (!player.hasMark('gt_hufu')) return false;
											if (
												!game.hasPlayer(function (current) {
													return current.hasSkill('gt_hufu_effect');
												})
											)
												return false;
											if (arg && arg.player) {
												if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
											}
										},
									},
								},
								effect: {
									trigger: {
										global: ['damageBegin4'],
									},
									forced: true,
									filter(event, player) {
										return event.player.hasMark('gt_hufu') && (event.name == 'damage' || !event.numFixed);
									},
									content() {
										player.line(trigger.player, 'green');
										if (trigger.name == 'damage') {
											trigger.cancel();
											trigger.player.removeMark('gt_hufu', 1);
											trigger.player.removeSkill('gt_hufu_mark');
										} else {
											event.finish();
										}
									},
								},
								remove: {
									forced: true,
									trigger: {
										player: 'phaseBefore',
									},
									content() {
										player.removeMark('gt_hufu', 1);
										player.removeSkill('gt_hufu_mark');
									},
								},
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
						},
						gt_tuji: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
							},
							forced: true,
							logTarget: 'target',
							content() {
								trigger.target.addTempSkill('qinggang2');
								trigger.target.storage.qinggang2.add(trigger.card);
								trigger.target.markSkill('qinggang2');
							},
							ai: {
								expose: 0.2,
								//threaten:1.4,
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.name == 'sha' && get.color(arg.card) == 'black') return true;
									return false;
								},
							},
							mod: {
								cardname(card, player) {
									if (get.color(card) == 'black') return 'sha';
								},
								cardnature(card, player) {
									if (get.color(card) == 'black') return 'thunder';
								},
								cardUsable(card, player) {
									if (card.name == 'sha' && card.nature == 'thunder') return Infinity;
								},
								ai: {
									effect: {
										target(card, player, target, current) {
											if (get.tag(card, 'respondSha') && current < 0) return 0.6;
										},
									},
									respondSha: true,
								},
							},
						},
						//未来骑士Ⅱ
						gt_lianju: {
							audio: 'gt_hufu',
							enable: 'phaseUse',
							mod: {
								cardUsable(card, player) {
									if (card.storage && card.storage.gt_lianju) return Infinity;
								},
								targetInRange(card, player, target) {
									if (card.storage && card.storage.gt_lianju) return get.distance(player, target) <= 2;
								},
							},
							filter(event, player) {
								return player.hasCard(function (card) {
									return get.color(card) == 'black';
								}, 'hes');
							},
							filterCard: {
								color: 'black',
							},
							position: 'hes',
							viewAs: {
								name: 'sha',
								nature: 'thunder',
								storage: { gt_lianju: true },
							},
							//prompt:"将一张装备牌当杀使用",
							check(card) {
								//if(player.storage.gt_zhongjie) return true;
								return 5 - get.value(card);
							},
							onuse(result, player) {
								player.addSkill('gt_lianju_effect');
							},
							ai: {
								respondSha: true,
								order() {
									return get.order({ name: 'sha' }) - 0.1;
								},
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'unequip') {
										if (!arg || !arg.card || !arg.card.storage || !arg.card.storage.gt_lianju) return false;
										return true;
									}
									return (
										arg == 'use' &&
										player.hasCard(function (card) {
											return get.color(card) == 'black';
										}, 'hes')
									);
								},
								//threaten:1.3,
							},
							subSkill: {
								effect: {
									trigger: {
										player: 'useCardToPlayered',
									},
									forced: true,
									content() {
										trigger.target.addTempSkill('qinggang2');
										trigger.target.storage.qinggang2.add(trigger.card);
										trigger.target.markSkill('qinggang2');
										player.removeSkill('gt_lianju_effect');
									},
									silent: true,
								},
							},
						},
						gt_chuangshang: {
							audio: 'gt_tuji',
							//global:"gt_chuangshang2",
							//derivation:'gt_chuangshang2',
							marktext: '创伤',
							intro: {
								name: '创伤',
								name2: '创伤',
								content: '当前共有#个标记',
							},
							trigger: { source: 'damageBegin' },
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							content() {
								trigger.player.addMark('gt_chuangshang', 1);
							},
						},
						_gt_chuangshang: {
							//创伤效果
							//audio:"gt_tuji",
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								return player.hasMark('gt_chuangshang');
							},
							forced: true,
							content() {
								player.removeMark('gt_chuangshang', 1);
								player.loseHp();
							},
							silent: true,
						},
						//24维罗妮卡
						old_shengyin: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return true;
							},
							content() {
								'step 0';
								target.judge(function (card) {
									if (card.suit == 'spade') return -4;
									return 0;
								}).judge2 = function (result) {
									return result.bool == false ? true : false;
								};
								('step 1');
								if (result.bool == false) {
									event.target.damage(2, 'thunder');
								}
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										if (target.hasSkill('hongyan')) return 0;
										if (get.damageEffect(target, player, player, 'thunder')) return 1;
										return -1;
									},
								},
								expose: 0.5,
								//threaten:1.2,
							},
						},
						gt_shengyin: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he');
							},
							filterCard: true,
							filterTarget(card, player, target) {
								return !target.hasJudge('gt_shengyin_card');
							},
							check(card) {
								return 6 - get.value(card);
							},
							prepare: 'give',
							position: 'he',
							discard: false,
							lose: false,
							delay: false,
							content() {
								'step 0';
								target.addJudge({ name: 'gt_shengyin_card' }, cards[0]);
								cards[0].storage.gt_shengyin = player;
								('step 1');
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (target.hasSkill('hongyan')) return 0;
										if (get.damageEffect(target, player, player, 'thunder')) return -1;
										return -1;
									},
								},
								expose: 0.5,
								//threaten:1.2,
							},
						},
						gt_shengguang: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { global: 'judgeEnd' },
							forced: true,
							filter(event, player) {
								if (player.hasSkill('gt_shengguang_disabled')) return false;
								return get.position(event.result.card, true) == 'o' && get.color(event.result.card) == 'red';
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('gt_shengguang'), '令任意名角色各摸两张牌', [1, Infinity], function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									game.asyncDraw(result.targets, 2);
									player.addTempSkill('gt_shengguang_disabled', 'roundStart');
								}
							},
							subSkill: {
								disabled: {
									mark: true,
									intro: {
										content: '本轮已发动',
									},
								},
							},
						},
						//25————————————————————————————————————————————————————————————诺克西娅
						//出牌阶段限一次,你可以获得随从<黑暗灵魂>(<黑暗灵魂>的体力值/体力上限/初始手牌均为2)
						gt_jiangling: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							charlotte: true,
							group: ['gt_jiangling_soul'],
							async content(event, trigger, player) {
								player.addFellow('gt_heianlinghun');
							},
							ai: {
								order: 17,
								result: {
									player: 1,
								},
							},
						},
						//当你成为伤害牌的目标时,将其转移给黑暗灵魂
						gt_futi: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								target: 'useCardToTarget',
							},
							filter(event, player) {
								return game.players.some((q) => q.hasSkill('gt_konghun2') && q != player);
							},
							forced: true,
							async content(event, trigger, player) {
								const npc = game.players.find((q) => q.hasSkill('gt_konghun2') && q != player);
								const evt = trigger.parent;
								evt.targets.remove(player);
								evt.targets.push(npc);
							},
						},
						//你或<黑暗灵魂>造成1点伤害后,对方可以摸一张牌或回复1点体力
						gt_konghun1: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								source: 'damageSource',
							},
							forced: true,
							filter(event, player) {
								return game.players.some((q) => q.hasSkill('gt_konghun2') && q != player);
							},
							async content(event, trigger, player) {
								const npcs = game.players.filter((q) => q.hasSkill('gt_konghun2') && q != player);
								for (const npc of npcs) {
									npc.draw();
									npc.recover();
								}
							},
						},
						gt_konghun2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								source: 'damageSource',
							},
							forced: true,
							filter(event, player) {
								return game.players.some((q) => q.hasSkill('gt_konghun1') && q != player);
							},
							async content(event, trigger, player) {
								const npcs = game.players.filter((q) => q.hasSkill('gt_konghun1') && q != player);
								for (const npc of npcs) {
									npc.draw();
									npc.recover();
								}
							},
						},
						//26————————————————————————————————————————————————————————————梅丽尔
						gt_benglie: {
							enable: 'phaseUse',
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							filterCard(card, player) {
								if (ui.selected.cards.length) {
									var suit = card.suit;
									for (var i of ui.selected.cards) {
										if (i.suit == suit) return false;
									}
								}
								return true;
							},
							selectCard: [1, 4],
							complexCard: true,
							position: 'he',
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								if (ui.selected.cards.length) return 6 + ui.selected.cards.length - get.value(card);
								return 6 - get.value(card);
								//如果手中有价值小于6的牌就发动,否则不发动;
							},
							content() {
								'step 0';
								target.chooseToDiscard('he', cards.length, '弃置' + get.cnNumber(cards.length) + '张牌,或点取消受到' + Math.ceil(cards.length / 2) + '点伤害').set('ai', function (card) {
									var player = _status.event.player;
									if (ui.selected.cards.length) return 6 + ui.selected.cards.length - get.value(card);
									return 6 - get.value(card);
								});
								('step 1');
								if (!result.bool) {
									target.damage(cards.length > 2 ? 2 : 1);
								}
								('step 2');
								//if(cards.length>=2)
								player.addTempSkill('gt_benglie_effect', { player: 'phaseBegin' });
							},
							subSkill: {
								effect: {
									mark: true,
									intro: {
										markcount: () => 1,
										content: '其他角色计算与你的距离+1',
									},
									mod: {
										globalTo(from, to, distance) {
											return distance + 1;
										},
									},
								},
							},
							ai: {
								order: 6,
								damage: true,
								//threaten:1.8,
								result: {
									target(player, target) {
										return -1 / (target.countCards('h') + 1);
									},
								},
							},
						},
						gt_luohua: {
							marktext: '落花',
							intro: {
								name: '落花',
								name2: '落花',
								content: '本轮已发动#次落花',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								global: 'loseAfter',
							},
							filter(event, player) {
								var num = Math.min(
									game.countPlayer(function (current) {
										return current.group == 'gt_tu';
									}),
									2
								);
								if ((player.storage.gt_luohua || 0) >= num) return false;
								return event.type == 'discard' && event.player != player;
							},
							check(trigger, card, player) {
								if (trigger.cards.length < 2) return false;
							},
							content() {
								//player.addTempSkill('gt_luohua_disabled','roundStart');
								player.draw(trigger.cards.length);
								if (!player.storage.gt_luohua) player.storage.gt_luohua = 0;
								player.storage.gt_luohua++;
								player.markSkill('gt_luohua');
							},
							group: 'gt_luohua_refresh',
							subSkill: {
								refresh: {
									trigger: { global: 'roundStart' },
									forced: true,
									charlotte: true,
									popup: false,
									filter(event, player) {
										return true;
									},
									content() {
										player.storage.gt_luohua = 0;
										player.unmarkSkill('gt_luohua');
									},
									silent: true,
								},
								disabled: {
									mark: true,
									intro: {
										content: '本轮已发动',
									},
								},
							},
						},
						//29罗茜
						gtold_xifa: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							intro: { content: '本轮已转化花色:$' },
							filter(event, player) {
								return player.countCards('hes');
							},
							filterCard(card, player) {
								if (!player.storage.gt_xifa) return true;
								return !player.storage.gt_xifa.includes(card.suit);
							},
							position: 'hes',
							selectCard: 1,
							viewAs: {
								name: 'sha',
								nature: 'fire',
								storage: { gt_xifa: true },
							},
							onuse(result, player) {
								if (!player.storage.gt_xifa) player.storage.gt_xifa = [];
								player.storage.gt_xifa.add(result.cards[0].suit);
								player.markSkill('gt_xifa');
								player.addSkill('gt_xifa_refresh');
							},
							subSkill: {
								refresh: {
									trigger: { global: 'roundStart' },
									forced: true,
									filter(event, player) {
										return player.storage.gt_xifa;
									},
									content() {
										delete player.storage.gt_xifa;
										player.unmarkSkill('gt_xifa');
										player.removeSkill('gt_xifa_refresh');
									},
									silent: true,
								},
							},
						},
						gt_xifa: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							//enable:'chooseToUse',
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								if (!player.countCards('hes') || player.hasSkill('gt_xifa_block')) return false;
								var list = ['sha', 'shan'];
								list.addArray(get.zhinangs());
								for (var i of lib.inpile) {
									if (list.includes(i) && event.filterCard({ name: i }, player, event)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = ['sha', 'shan'];
									list.addArray(get.zhinangs());
									return ui.create.dialog('戏法', [list, 'vcard']);
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									if (_status.event.parent.type != 'phase') return 1;
									var player = _status.event.player;
									if (player.countCards('hs', button.link[2])) return 0;
									var player = _status.event.player;
									return player.getUseValue({
										name: button.link[2],
										nature: button.link[3],
									});
								},
								backup(links, player) {
									return {
										filterCard: true,
										audio: 'gt_xifa',
										popname: true,
										ai1(card) {
											return 8 - get.value(card);
										},
										position: 'hes',
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											player.addTempSkill('gt_xifa_block');
											player.removeMark('spwuku', 1);
										},
									};
								},
								prompt(links, player) {
									return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							hiddenCard(player, name) {
								if (!lib.inpile.includes(name)) return false;
								var list = ['sha', 'shan'];
								list.addArray(get.zhinangs());
								return list.includes(name) && player.countCards('hes') > 0 && !player.hasSkill('gt_xifa_block');
							},
							ai: {
								combo: 'spwuku',
								fireAttack: true,
								respondSha: true,
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countMark('spwuku') || !player.countCards('hes') || player.hasSkill('gt_xifa_block')) return false;
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
								block: {},
							},
						},
						gt_xifa_backup: { audio: 'gt_xifa' },
						gt_manbu: {
							mod: {
								globalTo(from, to, distance) {
									if (to.storage.gt_manbu) return distance + to.storage.gt_manbu;
								},
							},
							intro: { content: '其他角色计算与你的距离+#' },
							trigger: { source: 'damageSource' },
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							content() {
								if (!player.storage.gt_manbu) player.storage.gt_manbu = 0;
								player.storage.gt_manbu++;
								player.markSkill('gt_manbu');
								player.addSkill('gt_manbu_refresh');
							},
							subSkill: {
								refresh: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									filter(event, player) {
										return player.storage.gt_manbu;
									},
									content() {
										delete player.storage.gt_manbu;
										player.unmarkSkill('gt_manbu');
										player.removeSkill('gt_manbu_refresh');
									},
									silent: true,
								},
							},
						},
						gt_jiean: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								if (!player.storage.gt_payin) return true;
								return target != player && target.countCards('he');
							},
							selectTarget: [1, Infinity],
							content() {
								target.draw(2);
								target.addAdditionalSkill('gt_jiean_' + player.playerid, 'gt_jiean_effect');
								target.markAuto('gt_jiean_effect', [player]);
								player.addTempSkill('gt_jiean_clear', { player: 'phaseBegin' });
							},
							group: ['gt_jiean_sha'],
							subSkill: {
								effect: {
									trigger: { player: 'damageEnd' },
									charlotte: true,
									mark: true,
									marktext: '劫',
									intro: {
										name: '劫案',
										name2: '劫案',
										content: '$的同伙',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && player.countCards('h');
									},
									content() {
										player.give(player.getCards('h'), trigger.source);
									},
									//silent:true,
								},
								clear: {
									charlotte: true,
									onremove(player) {
										game.countPlayer(function (current) {
											current.removeAdditionalSkill('gt_jiean_' + player.playerid);
										});
									},
								},
								sha: {
									trigger: { global: 'phaseEnd' },
									forced: true,
									filter(event, player) {
										return event.player.hasSkill('gt_jiean_effect') && player.canUse('sha', event.player, false);
									},
									content() {
										player.chooseToUse({ name: 'sha' }, trigger.player, -1, '对' + get.translation(trigger.player) + '使用一张【杀】');
									},
								},
								oldsha: {
									trigger: { player: 'phaseBefore' },
									forced: true,
									filter(event, player) {
										return game.countPlayer(function (current) {
											return current.hasSkill('gt_jiean_effect');
										});
									},
									content() {
										player.chooseToUse({
											prompt() {
												var player = _status.event.player;
												var list = game.filterPlayer(function (target) {
													return target.hasSkill('gt_jiean_effect');
												});
												var str = '对' + get.translation(list);
												if (list.length > 1) str += '中的一人';
												str += '使用一张【杀】';
												return str;
											},
											filterCard(card, player) {
												return card.name == 'sha' && lib.filter.filterCard.apply(this, arguments);
											},
											filterTarget(card, player, target) {
												return target != player && target.hasSkill('gt_jiean_effect'); //&&lib.filter.filterTarget.apply(this,arguments);
											},
											addCount: false,
										});
									},
								},
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) + 0.1;
								},
								result: { player: 1 },
							},
						},
						//30索菲
						gt_chonglang: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								if (player.hasSkill('gt_chonglang_block')) return false;
								return player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									position: 'he',
									filterCard: true,
									complexSelect: true,
									complexCard: true,
									complexTarget: true,
									selectCard: [1, 1],
									selectTarget: [1, 4],
									filterTarget(card, player, target) {
										var selected = ui.selected.targets;
										if (!selected.includes(trigger.player)) return target == trigger.player;
										for (var i of selected) {
											if (i.next == target || i.previous == target) return true;
										}
										return false;
									},
									ai1(card) {
										return 6 - get.value(card);
									},
									ai2(target) {
										var player = _status.event.player;
										return -get.attitude(player, target);
									},
									prompt: '弃置一张牌并选择含有' + get.translation(trigger.player) + '的至多四名座次相邻的角色',
								});
								('step 1');
								if (result.cards?.length) {
									player.discard(result.cards);
									player.addTempSkill('gt_chonglang_block');
									result.targets.sortBySeat();
									for (var i of result.targets) i.damage('thunder');
								}
							},
							subSkill: {
								block: {
								},
							},
						},
						gt_baipao: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								//player:"changeHp",
								player: 'damageBegin',
							},
							filter(event, player) {
								//if(event.num>=0) return false;
								return player.isDamaged();
							},
							forced: true,
							content() {
								player.draw(player.getDamagedHp());
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
								//threaten:0.6,
							},
						},
						//32埃莉诺
						gtold_payin: {
							mark: true,
							gt_yunlv: true, //没什么用,做做样子
							marktext: '♪',
							intro: {
								markcount(storage, player) {
									if (!player.storage.gt_payin) return '平';
									else return '仄';
								},
								content(storage, player, skill) {
									var str = player.storage.gt_payin ? '出牌阶段限一次,你可以获得一名其他角色一张牌' : '出牌阶段限一次,你可以令任意名角色各摸一张牌';
									return str;
								},
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							//usable:1,
							filter(event, player, name) {
								if (player.hasSkill('gt_payin_block')) return false;
								return true;
							},
							filterTarget(card, player, target) {
								if (!player.storage.gt_payin) return true;
								return target != player && target.countCards('he');
							},
							selectTarget() {
								var player = _status.event.player;
								return [1, player.storage.gt_payin ? 1 : Infinity];
							},
							content() {
								player.addTempSkill('gt_payin_block');
								if (!player.storage.gt_payin) target.draw();
								else player.gainPlayerCard(true, target, 'he');
							},
							group: ['gt_payin_change'],
							subSkill: {
								change: {
									trigger: {
										source: 'damageSource',
									},
									forced: true,
									filter(event, player) {
										if (player.isPhaseUsing()) return true;
										return false;
									},
									content() {
										player.popup('♪');
										player.removeSkill('gt_payin_block');
										player.storage.gt_payin = !player.storage.gt_payin;
									},
								},
								block: {
								},
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										if (player.storage.gt_payin == true) return -1;
										return 1;
									},
								},
							},
						},
						gt_payin: {
							mod: {
								aiOrder(player, card, num) {
									if (player.hasSkill('gt_payin_block')) {
										if (get.type(card) == 'equip') return num + 5;
									} else {
										if (player.storage.gt_payin ? get.type(card) == 'trick' : get.type(card) == 'basic') return num + 5;
										if (player.storage.gt_payin ? get.type(card) == 'basic' : get.type(card) == 'trick') return num / 5;
									}
								},
							},
							gt_yunlv: true, //没什么用,做做样子
							zhuanhuanji: true, //用转换技的写法
							mark: true,
							//marktext:'♪',
							intro: {
								markcount(storage, player) {
									return player.storage.gt_payin ? '仄' : '平';
								},
								content(storage, player, skill) {
									var str = player.storage.gt_payin ? '出牌阶段限一次,你可以获得一名其他角色一张牌' : '出牌阶段限一次,你可以令任意名角色各摸一张牌';
									return str;
								},
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'useCardAfter' },
							forced: true,
							filter(event, player, name) {
								if (get.type(event.card) == 'equip') return true;
								return !player.hasSkill('gt_payin_block');
							},
							content() {
								'step 0';
								var str = player.storage.gt_payin ? '出牌阶段限一次,你可以获得一名其他角色一张牌' : '出牌阶段限一次,你可以令任意名角色各摸一张牌';
								if (player.storage.gt_payin ? get.type(trigger.card) == 'trick' : get.type(trigger.card) == 'basic')
									player
										.chooseTarget(get.prompt('gt_payin'), str, [1, player.storage.gt_payin ? 1 : Infinity], function (card, player, target) {
											if (!player.storage.gt_payin) return true;
											return target != player && target.countCards('he');
										})
										.set('ai', function (target) {
											var att = get.attitude(player, target);
											return player.storage.gt_payin ? -att : att;
										});
								else if (get.type(trigger.card) == 'equip') {
									//player.popup('♪');
									player.removeSkill('gt_payin_block');
									player.changeZhuanhuanji('gt_payin');
									//player.storage.gt_payin=!player.storage.gt_payin;
									event.finish();
								}
								('step 1');
								if (result.bool) {
									player.addTempSkill('gt_payin_block');
									player.storage.gt_payin ? player.gainPlayerCard(true, result.targets[0], 'he') : game.asyncDraw(result.targets);
								}
							},
							//group:['gt_payin_change'],
							subSkill: {
								change: {
									trigger: {
										source: 'damageSource',
									},
									forced: true,
									filter(event, player) {
										if (player.isPhaseUsing()) return true;
										return false;
									},
									content() {
										player.removeSkill('gt_payin_block');
										player.changeZhuanhuanji('gt_payin');
										//player.storage.gt_payin=!player.storage.gt_payin;
									},
								},
								block: {
								},
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										if (player.storage.gt_payin == true) return -1;
										return 1;
									},
								},
							},
						},
						gt_hexian: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { global: 'phaseJieshuBegin' },
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							filter(event, player) {
								return event.player.group == 'gt_guang';
							},
							content() {
								trigger.player.draw();
							},
							ai: {
								expose: 0.5,
							},
						},
						//34埃里娜
						gt_tiancheng: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									if (get.type(name) == 'delay' && player.canAddJudge({ name: name })) return player.countCards('he');
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (get.type(name) == 'delay' && player.canAddJudge({ name: name })) list.push(['延时锦囊', '', name]);
									}
									return ui.create.dialog('', [list, 'vcard']);
								},
								filter(button, player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (get.type(name) == 'delay' && player.canAddJudge({ name: name })) return player.countCards('hes');
									}
									return false;
								},
								check(button) {
									var card = { name: button.link[2], nature: button.link[3] },
										player = _status.event.player;
									return 6 - get.value(card, player);
								},
								backup(links, player) {
									return {
										audio: 'gt_tiancheng',
										filterCard: true,
										selectCard: 1,
										selectTarget: -1,
										filterTarget(card, player, target) {
											return player == target;
										},
										popname: true,
										ai1(card) {
											return 5 - get.value(card);
										},
										position: 'hes',
										viewAs: {
											name: links[0][2],
											storage: { gt_tiancheng: true },
										},
										ai: {
											result: {
												target(player, target) {
													if (
														player.getUseValue({
															name: 'sha',
															//nature:'thunder',
														})
													)
														return 1;
													var list = [];
													for (var i = 0; i < lib.inpile.length; i++) {
														var name = lib.inpile[i];
														if (get.type(name) == 'delay' && player.canAddJudge({ name: name })) return 1 - get.value({ name: name });
													}
													return -1;
												},
											},
										},
									};
								},
								prompt(links, player) {
									return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '对自己使用';
								},
							},
							group: ['gt_tiancheng_sha'],
							subSkill: {
								sha: {
									trigger: { player: 'useCardAfter' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_tiancheng;
									},
									content() {
										'step 0';
										player.chooseUseTarget(
											'###是否发动【天惩】？###视为使用一张【杀】',
											{
												name: 'sha',
												storage: { gt_tiancheng_sha: true },
											},
											false
										);
										('step 1');
										if (
											player.hasHistory('sourceDamage', function (evt) {
												var card = evt.card;
												if (!card || card.name != 'sha') return false;
												var evtx = evt.getParent('useCard');
												return card.storage && card.storage.gt_tiancheng_sha;
											})
										)
											player.changeHujia();
									},
									silent: true,
								},
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) - 0.1;
								},
								result: { player: 1 },
							},
						},
						re_tiancheng: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('hej') && player.canAddJudge({ name: 'shandian' });
							},
							filterTarget(card, player, target) {
								return player.canUse('sha', target, true);
							},
							content() {
								'step 0';
								player.choosePlayerCard(true, player, 'hej');
								('step 1');
								if (result.cards?.length) {
									player.useCard({ name: 'shandian' }, result.cards, false, player);
									player.chooseUseTarget(
										{
											name: 'sha',
											nature: 'thunder',
										},
										'请选择雷【杀】的目标',
										false
									);
								}
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) - 0.1;
								},
								result: { target: -1 },
							},
						},
						gt_xushi: {
							//intro:{content:'本轮已转化:$'},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								return game.hasPlayer((current) => current.countCards('ej')) || !player.isTurnedOver();
							},
							content() {
								'step 0';
								var list = ['将场上的一张牌当【闪电】使用,视为使用一张雷【杀】', '将场上的一张牌当【兵粮寸断】对自己使用,摸两张牌', '将场上的一张牌当【乐不思蜀】对自己使用,对其他角色造成1点伤害', '翻至背面并于此阶段结束时执行一个出牌阶段'];
								if (player.isTurnedOver()) list.remove('翻至背面并于此阶段结束时执行一个出牌阶段');
								if (!game.hasPlayer((current) => current.countCards('ej'))) {
									player.turnOver(true);
									player.addTempSkill(event.name + '_on');
									event.finish();
								} else
									player
										.chooseControl()
										.set('ai', function () {
											return _status.event.controls.randomGet();
										})
										.set('choiceList', list)
										.set('prompt', '请选择一项');
								('step 1');
								event.choose = result.control;
								if (result.control != '选项四')
									player
										.chooseTarget(true, '请选择一名目标', function (card, player, target) {
											return target.countCards('ej');
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											return get.damageEffect(target, player, player);
										});
								else {
									player.turnOver(true);
									player.addTempSkill(event.name + '_on');
									event.finish();
								}
								('step 2');
								event.target = result.targets[0];
								player.choosePlayerCard(true, event.target, 'ej');
								('step 3');
								if (event.choose == '选项一') {
									player.useCard({ name: 'shandian' }, result.cards, false, player);
									player.chooseUseTarget(
										{
											name: 'sha',
											nature: 'thunder',
										},
										'请选择雷【杀】的目标',
										false
									);
								}
								if (event.choose == '选项二') {
									player.useCard({ name: 'bingliang' }, result.cards, false, player);
									player.draw(2);
								}
								if (event.choose == '选项三') {
									player.useCard({ name: 'lebu' }, result.cards, false, player);
									var targets = game.filterPlayer((current) => current != player).sortBySeat();
									for (var i of targets) i.damage();
								}
							},
							subSkill: {
								on: {
									trigger: {
										player: 'phaseUseAfter',
									},
									silent: true,
									charlotte: true,
									_priority: 1,
									content() {
										player.removeSkill(event.name);
										var next = player.phaseUse();
										event.next.remove(next);
										trigger.next.push(next);
									},
								},
							},
						},
						gt_jiyu: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player, name) {
								return event.nature == 'thunder' && event.num > 1;
							},
							preHidden: true,
							content() {
								return (trigger.num = 1);
							},
							group: ['gt_jiyu2'],
							ai: {
								filterDamage: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.player) {
										if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
									}
									if (arg && arg.card && arg.card.nature == 'thunder') {
										return true;
									}
									return false;
								},
							},
						},
						gt_jiyu2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'judgeEnd' },
							forced: true,
							filter(event, player) {
								return get.position(event.result.card, true) == 'o';
							},
							content() {
								player.draw();
							},
						},
						//35卡麦尔
						gt_fengshou: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player.canUse('sha', target, true);
							},
							filterCard(card, player) {
								return true;
							},
							position: 'hej',
							complexSelect: true,
							complexCard: true,
							complexTarget: true,
							selectCard: [1, 3],
							selectTarget() {
								return [ui.selected.cards.length, ui.selected.cards.length];
							},
							check(card) {
								var player = _status.event.player;
								if (
									ui.selected.cards.length <
									game.countPlayer(function (current) {
										return get.attitude(player, current) < 0 && player.inRange(current);
									})
								) {
									if (ui.selected.cards.length) return 6 + ui.selected.cards.length - get.value(card);
									return 6 - get.value(card);
								}
								return -get.value(card);
							},
							viewAs: {
								name: 'sha',
								storage: { gt_fengshou: true },
							},
							ai: {
								//respondSha:true,
								order() {
									return get.order({ name: 'sha' }) + 0.1;
								},
								expose: 0.5,
								//threaten:1.3,
							},
							group: 'gt_fengshou_gain',
							ai: {
								//respondSha:true,
								order() {
									return get.order({ name: 'sha' }) + 0.1;
								},
								expose: 0.5,
								//threaten:1.3,
							},
							subSkill: {
								gain: {
									trigger: { player: 'useCardToPlayered' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_fengshou && event.card.name == 'sha';
									},
									content() {
										player.gainPlayerCard(true, trigger.target, 'he');
									},
									silent: true,
								},
							},
						},
						gt_ziran: {},
						//37奥尔卡
						gt_dilei: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player.chooseCard('he', false, [1, 3], '选择至多三张牌洗入牌堆').set('ai', function (card) {
									var player = _status.event.player;
									var value = Math.max(get.value(card), get.equipValue(card));
									return 5 - value;
								});
								('step 2');
								if (result.cards?.length) {
									player.$throw(result.cards.length, 1000);
									player.lose(result.cards, ui.cardPile).insert_index = function () {
										return ui.cardPile.childNodes[get.rand(0, game.players.length * 2)];
									};
									player.markAuto('gt_dilei', result.cards);
									game.log(player, '将' + get.cnNumber(result.cards.length) + '张牌插入牌堆');
								} else event.finish();
								('step 3');
								game.updateRoundNumber();
							},
							intro: {
								mark(dialog, content, player) {
									if (player == game.me || player.isUnderControl()) dialog.addAuto(content);
									else {
										var names = [];
										for (var i of content) names.add(i.name);
										return get.translation(names);
									}
								},
							},
							ai: {
								order: 7,
								//threaten:1.6,
								result: {
									player: 1,
								},
							},
							group: 'gt_dilei_gain',
							subSkill: {
								gain: {
									trigger: {
										global: ['gainAfter', 'cardsDiscardAfter'],
									},
									forced: true,
									filter(event, player) {
										return (
											player.storage.gt_dilei &&
											player.storage.gt_dilei.length &&
											event.cards.filter(function (i) {
												return player.storage.gt_dilei.includes(i);
											}).length
										);
									},
									content() {
										'step 0';
										var list = trigger.cards.filter(function (i) {
											return player.storage.gt_dilei.includes(i);
										});
										if (trigger.name == 'gain' && trigger.player != player) player.chooseBool(get.prompt('gt_dilei'), '令' + get.translation(trigger.player) + '弃置' + get.translation(list)).set('choice', get.attitude(trigger.player, player) < 0);
										('step 1');
										var list = trigger.cards.filter(function (i) {
											return player.storage.gt_dilei.includes(i);
										});
										player.unmarkAuto('gt_dilei', list);
										if (result.bool) {
											trigger.player.discard(list);
											//trigger.player.damage(list.length);
											//player.draw(list.length);
										}
									},
								},
							},
						},
						gt_chujue: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								source: 'damageSource',
							},
							//usable:1,
							filter(event, player) {
								//if(event.card&&event.card.storage&&event.card.storage.gt_chujue) return false;
								if (event.player == player) return false;
								return event.player.isAlive();
							},
							check(event, player) {
								//if(player.isPhaseUsing()) return true;
								return get.attitude(player, event.player) < 0;
							},
							//logTarget:'source',
							content() {
								'step 0';
								player.judge();
								('step 1');
								if (result.color == 'black') {
									if (player.canUse({ name: 'sha' }, trigger.player, false)) player.useCard({ name: 'sha', storage: { gt_chujue: true } }, trigger.player, false);
								}
								if (result.color == 'red') {
									//trigger.player.addTempSkill('gt_chujue_black');
									//event.trigger('gt_chujue');
								}
							},
							global: 'gt_chujue_red',
							subSkill: {
								black: {},
								red: {
									trigger: { global: 'gt_chujue' },
									filter(event, player) {
										if (player.hasSkill('gt_chujue_black')) return false;
										return event.player.canUse({ name: 'juedou' }, player, false);
									},
									check(event, player) {
										return get.effect(player, { name: 'juedou' }, event.player, player);
									},
									content() {
										trigger.player.useCard({ name: 'juedou' }, player, false);
										trigger.cancel();
									},
								},
							},
						},
						//39哈娜
						gt_shenpan: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							//usable:1,
							filterTarget(card, player, target) {
								return true;
							},
							filterCard: true,
							position: 'he',
							selectCard() {
								var player = _status.event.player;
								var num = player.getStat('skill').gt_shenpan || 0;
								return num;
							},
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								if (!target.isLinked()) target.link();
								else target.damage('ice', 'nocard');
							},
							ai: {
								order() {
									return get.order({ name: 'tiesuo' }) - 0.1;
								},
								result: {
									target(player, target) {
										if (!target.isLinked()) return -1;
										return -1.5;
									},
									player(player, target) {
										if (!target.isLinked()) return get.effect(target, { name: 'tiesuo' }, player, player);
										return get.effect(target, { name: 'shacopy', nature: 'ice' }, player, player);
									},
								},
								expose: 0.5,
							},
						},
						gt_bumie: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								player: 'dying',
							},
							//round: 6,
							forced: true,
							//juexingji:true,
							sunbenSkill: true,
							filter(event, player) {
								return !player.hasSkill('gt_bumie_sunben');
							},
							content() {
								//player.awakenSkill(event.name);
								player.recover(1 - player.hp);
								player.phase('nodelay');
								player.addSkill('gt_bumie_sunben');
								player.addTempSkill('gt_bumie_nodamage');
								player.addTempSkill('gt_bumie_phase');
							},
							ai: {
							},
							subSkill: {
								disabled: {
									mark: true,
									intro: {
										content: '本轮已发动',
									},
								},
								sunben: {
									charlotte: true,
									init(player) {
										player.storage.gt_bumie_sunben = 0;
									},
									mark: true,
									intro: {
										markcount(num) {
											return (num || 0).toString();
										},
										content: '伤害进度:#/6',
									},
									trigger: {
										source: 'damageSource',
									},
									filter(event, player) {
										return true;
									},
									forced: true,
									popup: false,
									firstDo: true,
									content() {
										'step 0';
										player.addMark('gt_bumie_sunben', trigger.num, false);
										('step 1');
										if (player.countMark('gt_bumie_sunben') >= 6) {
											player.removeSkill('gt_bumie_sunben');
											player.popup('不灭');
											game.log(player, '回复了技能', '#g【不灭】');
										}
									},
								},
								nodamage: {
									trigger: { player: 'damageBegin4' },
									filter(event, player) {
										return true;
									},
									mark: true,
									forced: true,
									charlotte: true,
									content() {
										trigger.cancel();
									},
									ai: {
										nodamage: true,
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'damage')) return [0, 0];
											},
										},
									},
									intro: {
										content: '防止本回合受到的所有伤害',
									},
								},
								phase: {
									trigger: { global: 'phaseAfter' },
									forced: true,
									filter(event, player) {
										return true;
									},
									content() {
										player.phase('nodelay');
										player.removeSkill('gt_bumie_nodamage');
										player.removeSkill('gt_bumie_phase');
									},
								},
							},
						},
						//41克拉拉
						gt_ranjin: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.getHandcardLimit() > 0;
							},
							content() {
								player.draw();
								player.addTempSkill('gt_ranjin_mark');
							},
							subSkill: {
								mark: {
									//mark:true,
									intro: {
										content: '手牌上限为0,所有手牌均视为火杀',
									},
									mod: {
										cardname(card, player) {
											return 'sha';
										},
										cardnature(card, player) {
											return 'fire';
										},
										ai: {
											effect: {
												target(card, player, target, current) {
													if (get.tag(card, 'respondSha') && current < 0) return 0.6;
												},
											},
											respondSha: true,
										},
									},
								},
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										var num = 0;
										var cards = player.getCards('h');
										if (Array.isArray(cards)) for (var i of cards) {
											num += Math.max(0, get.value(i, player, 'raw'));
										}
										if (
											player.hasValueTarget({
												name: 'sha',
												nature: 'fire',
											})
										)
											return 5 * player.getCardUsable('sha') - num;
										return 0;
									},
								},
								//threaten:1.6,
							},
						},
						new_ranjin: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.getHandcardLimit() > 0;
							},
							content() {
								'step 0';
								event.num = 0;
								('step 1');
								event.num++;
								player.chooseUseTarget(
									{
										name: 'sha',
										nature: 'fire',
									},
									'请选择火【杀】的目标(' + event.num + '/' + player.getHandcardLimit() + ')',
									false
								);
								('step 2');
								if (result.bool && event.num < player.getHandcardLimit()) event.goto(1);
								else {
									player.addTempSkill('gt_ranjin_effect');
								}
							},
							subSkill: {
								effect: {
									//mark:true,
									mod: {
										maxHandcard(player, num) {
											return 0;
										},
									},
								},
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										var num = 0;
										var cards = player.getCards('h');
										if (Array.isArray(cards)) for (var i of cards) {
											num += Math.max(0, get.value(i, player, 'raw'));
										}
										num /= player.getHandcardLimit();
										//num*=player.hp;
										//if(cards.length>=3&&player.hp>=3) return 0;
										if (
											player.hasValueTarget({
												name: 'sha',
												nature: 'fire',
											})
										)
											return 6 - num;
										return 0;
									},
								},
								//threaten:1.6,
							},
						},
						gt_kuilei: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return player.maxHp;
								},
							},
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.getHistory('sourceDamage').length;
							},
							content() {
								var num = 0;
								player.getHistory('sourceDamage', function (evt) {
									num += evt.num;
								});
								player.draw(num);
								player.unmarkSkill('gt_kuilei');
							},
							group: 'gt_kuilei_count',
							intro: {
								name: '傀儡',
								name2: '傀儡',
								content: '本回合已造成#点伤害',
							},
							subSkill: {
								count: {
									trigger: {
										source: 'damageSource',
									},
									silent: true,
									firstDo: true,
									noHidden: true,
									content() {
										var num = 0;
										player.getHistory('sourceDamage', function (evt) {
											num += evt.num;
										});
										player.storage.gt_kuilei = num;
										player.markSkill('gt_kuilei');
									},
									forced: true,
									popup: false,
								},
							},
						},
						//42帕尔瓦蒂
						old_gongzuo: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							hiddenCard(player, name) {
								if (
									(name == 'sha' || name == 'tiesuo') &&
									player.hasCard(function (card) {
										return get.color(card) == 'black';
									}, 'hes')
								)
									return true;
								return false;
							},
							enable: 'phaseUse',
							filter(event, player) {
								return (
									player.hasCard(function (card) {
										return get.color(card) == 'black';
									}, 'hes') &&
									(event.filterCard && event.filterCard({ name: 'sha' }, player, event) || event.filterCard({ name: 'tiesuo' }, player, event))
								);
							},
							chooseButton: {
								dialog() {
									return ui.create.dialog('工作', [
										[
											['基本', '', 'sha', 'thunder'],
											['锦囊', '', 'tiesuo'],
										],
										'vcard',
									]);
								},
								filter(button, player) {
									var evt = _status.event.parent;
									return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
								},
								check(button) {
									var card = { name: button.link[2], nature: button.link[3] },
										player = _status.event.player;
									return get.value(card, player) * get.sgn(player.getUseValue(card));
								},
								backup(links, player) {
									return {
										audio: 'gt_gongzuo',
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
										},
										filterCard: { color: 'black' },
										position: 'hes',
										popname: true,
										check(card) {
											return 5 - get.value(card);
										},
									};
								},
								prompt(links) {
									return '将一张黑色牌当做' + (links[0][3] ? get.translation(links[0][3]) : '') + '【' + get.translation(links[0][2]) + '】使用';
								},
							},
							ai: {
								respondSha: true,
								skillTagFilter(player, tag, arg) {
									return player.hasCard(function (card) {
										return get.color(card) == 'black';
									}, 'hes');
								},
								order: 7,
								result: { player: 1 },
							},
						},
						gt_gongzuo: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && !target.isLinked();
							},
							selectTarget: [1, 2],
							line: 'thunder',
							content() {
								if (!target.isLinked()) target.link();
							},
							group: ['gt_gongzuo2', 'gt_gongzuo3'],
							ai: {
								order() {
									return get.order({ name: 'tiesuo' }) * 2;
								},
								result: {
									target(player, target) {
										return -1;
									},
								},
							},
						},
						gt_gongzuo2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { source: 'damageSource' },
							filter(event, player) {
								return event.gongzuo;
							},
							content() {
								player.draw();
							},
						},
						gt_gongzuo3: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { source: 'damageBegin' },
							silent: true,
							firstDo: true,
							filter(event, player) {
								return event.player.isLinked();
							},
							content() {
								trigger.gongzuo = true;
							},
						},
						gt_youhua: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							mod: {
								inRange(from, to) {
									if (to.isLinked()) return true;
								},
							},
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return (
									event.card &&
									(get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
									game.hasPlayer(function (current) {
										//return current!=player&&get.distance(current,player)<=1;
										return current != player && current.isLinked();
									})
								);
							},
							content() {
								trigger.directHit.addArray(
									game.filterPlayer(function (current) {
										return current != player && current.isLinked();
									})
								);
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg, target) {
									//return get.distance(arg.target,player)<=1;
									return arg.target.isLinked();
								},
							},
						},
						//43普莉希拉
						gt_xinghong: {
							audio: 'ext:坎公骑冠剑:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') >= 0;
							},
							filterTarget(player, target) {
								return player != target;
							},
							content() {
								'step 0';
								player.choosePlayerCard(target, 'h', true);
								('step 1');
								player.showCards(result.cards);
								('step 2');
								//if(get.color(event.cards)=='red'){
								//player.chooseUseTarget({name:'sha'},true,event.cards,false).viewAs=true;
								//}
								player.useCard({ name: 'wuzhong' }, result.cards, false, player);
							},
						},
						gt_hunxie: {
							marktext: '爆发',
							intro: {
								content: '当你使用或打出一张牌时,你摸一张牌',
							},
							enable: 'phaseUse',
							//usable:1,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							chargeSkill: true,
							filter(event, player) {
								return player.countMark('charge') >= 6;
							},
							content() {
								var num = player.countMark('charge');
								player.removeMark('charge', 6);
								player.markSkill('gt_hunxie');
								player.storage.gt_hunxie = true;
								player.draw();
							},
							group: ['gt_hunxie_charge', 'gt_hunxie_unmark'],
							subSkill: {
								charge: {
									audio: 'gt_hunxie',
									forced: true,
									trigger: {
										player: ['useCard', 'respond'],
									},
									filter(event, player) {
										if (!player.storage.gt_hunxie) return player.countMark('charge') < 6;
										return true;
									},
									content() {
										if (!player.storage.gt_hunxie) {
											var num = Math.min(get.translation(trigger.card.name).length, 6 - player.countMark('charge'));
											player.addMark('charge', num);
										} else player.draw();
									},
								},
								unmark: {
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									filter(event, player) {
										return player.storage.gt_hunxie;
									},
									content() {
										delete player.storage.gt_hunxie;
										player.unmarkSkill('gt_hunxie');
									},
								},
							},
							ai: {
								//threaten:2,
								order: 10,
								result: {
									player: 1,
								},
							},
						},
						oldgt_hunxie: {
							mark: true,
							marktext: ' ',
							intro: {
								markcount(storage, player) {
									if (!player.hasSkill('gt_hunxie3')) return '克制';
									else return '爆发';
								},
								content(storage, player, skill) {
									var str = player.hasSkill('gt_hunxie3') ? '当你使用或打出一张牌时,你摸一张牌' : '当你使用或打出一张牌时,你获得此牌名称字数个<血>标记(至多为6)';
									return str;
								},
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								player: ['useCard', 'respond'],
								//player:'useCardToPlayered',
								//target:'useCardToTargeted',
							},
							filter(event, player) {
								if (!player.hasSkill('gt_hunxie3')) return player.countMark('gt_hunxie2') < 6;
								return true;
							},
							content() {
								if (!player.hasSkill('gt_hunxie3')) {
									var num = Math.min(get.translation(trigger.card.name).length, 6 - player.countMark('gt_hunxie2'));
									player.addMark('gt_hunxie2', num);
								} else player.draw();
							},
							group: 'gt_hunxie2',
							//derivation:'gt_haojie',
						},
						gt_hunxie2: {
							marktext: '血',
							intro: {
								name: '血',
								content: 'mark',
							},
							enable: 'phaseUse',
							//usable:1,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							filter(event, player) {
								return player.countMark('gt_hunxie2') >= 6;
							},
							content() {
								'step 0';
								var num = player.countMark('gt_hunxie2');
								player.removeMark('gt_hunxie2', num);
								player.addTempSkill('gt_hunxie3', { player: 'phaseBegin' });
								//player.addTempSkill('gt_haojie',{player:'phaseBegin'});
								if (player.hp < player.maxHp) {
									player
										.chooseControl('回复1点体力', '摸一张牌', function (event, player) {
											if (player.isDamaged() && get.recoverEffect(player) && player.countCards('h', 'tao') == 0) {
												return '回复1点体力';
											} else return '摸一张牌';
										})
										.set('prompt', '混血:回复1点体力或摸一张牌');
								} else player.draw();
								('step 1');
								if (result.control == '回复1点体力') {
									player.recover();
								}
								if (result.control == '摸一张牌') {
									player.draw();
								}
							},
							ai: {
								//threaten:2,
								order: 10,
								result: {
									player: 1,
								},
							},
						},
						gt_hunxie3: {},
						gt_haojie: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
								//player:'useCardToPlayered',
								//target:'useCardToTargeted',
							},
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('gt_haojie'), function (card, player, target) {
										return target != player && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										return 5 - att;
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									target.chooseCard('he', true, '浩劫:将一张牌交给' + get.translation(player));
								} else {
									event.finish();
								}
								('step 2');
								if (result.cards?.length) {
									event.target.give(result.cards, player, true);
								}
								('step 3');
								//if(target.countCards('he')==0) event.target.damage();
							},
						},
						gt_baofa: {
							intro: { content: '本轮已转化:$' },
							mark: true,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								if (player.hasSkill('gt_baofa_block')) return false;
								return player.countCards('hes');
								//if(player.countMark('gt_baofa')>=player.hp) return false;
								//return player.countCards('hs',{type:'basic'})+player.countCards('hs',{type:'trick'});
							},
							init(player) {
								if (!player.storage.gt_baofa) player.storage.gt_baofa = [];
							},
							hiddenCard(player, name) {
								return !player.hasSkill('gt_baofa_block') && !player.getStorage('gt_baofa').includes(name) && player.countCards('hes') && lib.inpile.includes(name);
								//return player.countMark('gt_baofa')<player.hp&&(!player.getStorage('gt_baofa').includes(name)&&(player.countCards('hs',{type:'basic'})||player.countCards('hs',{type:'trick'}))&&lib.inpile.includes(name));
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (player.storage.gt_baofa && player.storage.gt_baofa.includes(name)) continue;
										if (name == 'sha') {
											if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
											for (var j of lib.inpile_nature) {
												if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
											}
										} else if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
										else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
									}
									return ui.create.dialog('', [list, 'vcard']);
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									//if(_status.event.parent.type!='phase') return 1;
									var player = _status.event.player;
									if (_status.event.parent.type != 'phase') {
										if (player.countCards('hes', { color: 'black' })) {
											if (get.color(card) == 'red') return 0;
											return 1 / Math.max(0.1, get.value(card));
										}
										return 1;
									}
									if (player.countCards('hs', button.link[2]) > 0) return 0;
									if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
									return Math.max(
										get.value({ name: button.link[2] }) * 3,
										player.getUseValue({
											name: button.link[2],
											nature: button.link[3],
										})
									);
								},
								backup(links, player) {
									return {
										filterCard: true,
										selectCard: 1,
										audio: 'gt_baofa',
										popname: true,
										ai1(card) {
											var player = _status.event.player;
											if (player.countCards('hes', { color: 'black' })) {
												if (get.color(card) == 'red') return 0;
												return 1 / Math.max(0.1, get.value(card));
											}
											if (_status.event.parent.type != 'phase') {
												return 1 / Math.max(0.1, get.value(card));
											}
											return (
												get.value({
													name: links[0][2],
													nature: links[0][3],
												}) - get.value(card)
											);
										},
										position: 'hes',
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											//player.removeMark('gt_hunxie',1);
											player.storage.gt_baofa.add(event.result.card.name);
										},
									};
								},
								prompt(links, player) {
									return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							ai: {
								//combo:'gt_hunxie',
								pretao: true,
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag, arg) {
									if (!player.countCards('hes')) return false;
									//if(!(player.countCards('hs',{type:'basic'})+player.countCards('hs',{type:'trick'}))) return false;
									var name = tag == 'respondSha' ? 'sha' : 'shan';
									return !player.storage.gt_baofa.includes(name);
								},
								order: 4,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
							group: ['gt_baofa_refresh', 'gt_baofa_draw'],
							subSkill: {
								refresh: {
									trigger: { global: 'phaseEnd' },
									forced: true,
									charlotte: true,
									popup: false,
									filter(event, player) {
										return true;
									},
									content() {
										//var num=Math.min(player.hp,player.countMark('gt_baofa'));
										//player.draw(num)
										//player.removeMark('gt_hunxie',num);
										player.storage.gt_baofa = [];
										//player.changeHujia(2-player.hujia);
									},
									silent: true,
								},
								draw: {
									trigger: { player: ['useCard', 'respond'] },
									forced: true,
									charlotte: true,
									popup: false,
									filter(event, player) {
										return get.color(event.card) == 'red' && event.skill == 'gt_baofa_backup'; //&&player!=_status.currentPhase;
									},
									content() {
										player.draw();
										player.addTempSkill('gt_baofa_block');
									},
									silent: true,
								},
								block: {},
							},
						},
						gt_baofa_backup: { audio: 'gt_baofa' },
						//44克劳德
						gt_riji: {
							//转换技混血
							trigger: {
								player: 'useCard', //"respond"],
								//player:'useCardToPlayered',
								target: 'useCardToTargeted',
							},
							//trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
							forced: true,
							zhuanhuanji: true,
							filter(event, player) {
								if (player.countMark('gt_riji2') < 6 && !player.storage.gt_riji) return true;
								var color = player.storage.gt_riji ? 'black' : 'red';
								if (get.color(event.card) == color) return true;
								return false;
								//return get.type(event.card)=='basic'||get.type(event.card)=='trick';
								//return true;
							},
							content() {
								if (player.countMark('gt_riji2') < 6 && !player.storage.gt_riji) player.addMark('gt_riji2', 1);
								var color = player.storage.gt_riji ? 'black' : 'red';
								if (get.color(trigger.card) == color) player.draw();
							},
							group: 'gt_riji2',
							//derivation:'gt_baofa',
						},
						gt_riji2: {
							mark: true,
							marktext: '克制',
							intro: {
								name: '克制',
								content: '转换技,锁定技,当你使用一张牌或成为一张牌的目标后,若此牌为红色,你摸一张牌.',
							},
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							filter(event, player) {
								return player.countMark('gt_riji2') >= 6;
							},
							content() {
								'step 0';
								if (player.hp < player.maxHp) {
									player
										.chooseControl('回复1点体力', '摸一张牌', function (event, player) {
											if (player.isDamaged() && get.recoverEffect(player) && player.hp < player.countCards('hs', { type: 'basic' }) + player.countCards('hs', { type: 'trick' })) {
												return '回复1点体力';
											} else return '摸一张牌';
										})
										.set('prompt', '混血:回复1点体力或摸一张牌');
								} else player.draw();
								('step 1');
								if (result.control == '回复1点体力') {
									player.recover();
								}
								if (result.control == '摸一张牌') {
									player.draw();
								}
								('step 2');
								//player.draw(2)
								//player.recover();
								var num = player.countMark('gt_riji2');
								//player.draw(num)
								player.removeMark('gt_riji2', num);
								player.removeSkill('gt_riji2');
								player.addSkill('gt_riji3');
								player.changeZhuanhuanji('gt_riji');
							},
							ai: {
								//combo:'gt_hunxie',
								//threaten:2,
								order: 10,
								result: {
									player: 1,
								},
							},
						},
						gt_riji3: {
							trigger: { player: 'phaseBegin' },
							forced: true,
							mark: true,
							marktext: '爆发',
							intro: {
								name: '爆发',
								content: '转换技,锁定技,当你使用一张牌或成为一张牌的目标后,若此牌为红色,你摸一张牌.',
							},
							content() {
								player.removeSkill('gt_riji3');
								player.addSkill('gt_riji2');
								player.changeZhuanhuanji('gt_riji');
							},
						},
						gt_xietong2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { source: 'damageBegin1' },
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							filter(event, player) {
								return player.countCards('he') >= player.getDamagedHp();
							},
							content() {
								'step 0';
								player.chooseToDiscard(player.getDamagedHp(), '弃置' + get.cnNumber(player.getDamagedHp()) + '张牌,令此伤害+1').set('ai', function (card) {
									var player = _status.event.player;
									return 8 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									trigger.num++;
									if (player.hp < player.maxHp) {
										player
											.chooseControl('回复1点体力', '获得' + get.translation(trigger.player) + '一张牌', function (event, player) {
												if (player.isDamaged() && get.recoverEffect(target) > 0) {
													return '回复1点体力';
												} else return '获得' + get.translation(trigger.player) + '一张牌';
											})
											.set('prompt', '血统:回复1点体力或获得' + get.translation(trigger.player) + '一张牌');
									} else player.gainPlayerCard(true, trigger.player, 'he');
								} else event.finish();
								('step 2');
								if (result.control == '回复1点体力') {
									player.recover();
								}
								if (result.control == '获得' + get.translation(trigger.player) + '一张牌') {
									player.gainPlayerCard(true, trigger.player, 'he');
								}
							},
						},
						//46蕾伊
						gt_zhanji: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							mahouSkill: true,
							trigger: { player: 'phaseUseEnd' },
							filter(event, player) {
								//if(player.getHistory('skipped').includes('phaseUse')) return !player.hasSkill('gt_zhanji_mahou');
								var history = player.getHistory('useCard');
								for (var i = 0; i < history.length; i++) {
									if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
								}
								return !player.hasSkill('gt_zhanji_mahou');
							},
							//direct:true,
							content() {
								'step 0';
								player
									.chooseControl('1回合', '2回合', '3回合')
									.set('prompt', '请选择施法时长')
									.set('ai', function () {
										var player = _status.event.player;
										var safe = player.hp;
										if (safe < Math.min(3, game.countPlayer())) {
											var next = player.next;
											while (next != player && get.attitude(next, player) > 0) {
												safe++;
												next = next.next;
											}
										}
										return Math.max(1, Math.min(safe, 3, game.countPlayer())) - 1;
									});
								('step 1');
								player.storage.gt_zhanji_mahou = [result.index + 1, result.index + 1];
								player.addTempSkill('gt_zhanji_mahou', { player: 'die' });
							},
							ai: {
								fireAttack: true,
								//threaten:1.6,
							},
							subSkill: {
								mahou: {
									trigger: { global: 'phaseEnd' },
									forced: true,
									popup: false,
									charlotte: true,
									content() {
										'step 0';
										var list = player.storage.gt_zhanji_mahou;
										player.storage.gt_zhanji = player.storage.gt_zhanji_mahou;
										list[1]--;
										if (list[1] == 0) {
											game.log(player, '的<斩击>魔法生效');
											var num = list[0];
											player.chooseUseTarget('###是否发动【斩击】？###视为使用一张火【杀】', { name: 'sha', nature: 'fire' }, false);
											player.addTempSkill('gt_zhanji_sha');
											player.removeSkill('gt_zhanji_mahou');
										} else {
											game.log(player, '的<斩击>魔法剩余', '#g' + list[1] + '回合');
											player.markSkill('gt_zhanji_mahou');
										}
										('step 1');
										player.removeSkill('gt_zhanji_sha');
									},
									mark: true,
									marktext: '♗',
									intro: {
										name: '施法:斩击',
										markcount(storage) {
											if (storage) return storage[1];
											return 0;
										},
										content(storage) {
											if (storage) {
												return '经过' + storage[1] + '个<回合结束时>后,视为使用一张攻击范围和伤害均为' + storage[0] + '的火【杀】.';
											}
											return '未指定施法效果';
										},
									},
								},
								sha: {
									mod: {
										targetInRange(card, player, target) {
											var list = player.storage.gt_zhanji;
											var num = list[0];
											return get.distance(player, target) <= num;
										},
									},
									trigger: { player: 'useCardToPlayered' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										var id = trigger.target.playerid;
										var map = trigger.parent.customArgs;
										if (!map[id]) map[id] = {};
										if (typeof map[id].extraDamage != 'number') {
											map[id].extraDamage = 0;
										}
										var list = player.storage.gt_zhanji;
										var num = list[0];
										map[id].extraDamage = num - 1;
										player.removeSkill('gt_zhanji_sha');
									},
									ai: {
										damageBonus: true,
									},
									silent: true,
								},
							},
						},
						gt_fanji: {
							//derivation:"gt_fanji_intro",
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { target: 'useCardToTarget' },
							usable: 1,
							//forced:true,
							filter(event, card, player, target) {
								if (event.cards.length && get.tag(event.card, 'damage')) return event.player != player;
							},
							check(event, player) {
								var target = event.player;
								if (get.attitude(player, target) >= 0) return false;
								return true;
							},
							content() {
								'step 0';
								var target = trigger.player;
								game.log(player, '对', target, '发起了', '#y反击');
								if (_status.connectMode) {
									player
										.chooseButtonOL(
											[
												[
													player,
													[
														'反击:此牌对你造成伤害时改为你对伤害来源造成1点火焰伤害并摸三张牌<br>观望:本回合可以额外发动一次此技能',
														[
															[
																['', '', 'gt_fanji_def2'],
																['', '', 'gt_fanji_def1'],
															],
															'vcard',
														],
													],
													true,
												],
												[
													target,
													[
														'佯攻:令此牌无效并摸一张牌<br>突袭:令此牌正常结算',
														[
															[
																['', '', 'gt_fanji_atk1'],
																['', '', 'gt_fanji_atk2'],
															],
															'vcard',
														],
													],
													true,
												],
											],
											function () { },
											function () {
												return 1 + Math.random();
											}
										)
										.set('switchToAuto', function () {
											_status.event.result = 'ai';
										})
										.set('processAI', function () {
											var buttons = _status.event.dialog.buttons;
											return {
												bool: true,
												links: [buttons.randomGet().link],
											};
										});
								}
								('step 1');
								var target = trigger.player;
								if (_status.connectMode) {
									event.mes = result[player.playerid].links[0][2];
									event.tes = result[target.playerid].links[0][2];
									event.goto(4);
								} else {
									player.chooseButton(
										[
											'反击:此牌对你造成伤害时改为你对伤害来源造成1点火焰伤害并摸三张牌<br>观望:本回合可以额外发动一次此技能',
											[
												[
													['', '', 'gt_fanji_def2'],
													['', '', 'gt_fanji_def1'],
												],
												'vcard',
											],
										],
										true
									).ai = function () {
										return 1 + Math.random();
									};
								}
								('step 2');
								var target = trigger.player;
								event.mes = result.links[0][2];
								target.chooseButton(
									[
										'佯攻:令此牌无效并摸一张牌<br>突袭:令此牌正常结算',
										[
											[
												['', '', 'gt_fanji_atk1'],
												['', '', 'gt_fanji_atk2'],
											],
											'vcard',
										],
									],
									true
								).ai = function () {
									return 1 + Math.random();
								};
								('step 3');
								event.tes = result.links[0][2];
								('step 4');
								var target = trigger.player;
								game.broadcast(function () {
									ui.arena.classList.add('thrownhighlight');
								});
								ui.arena.classList.add('thrownhighlight');
								game.addVideo('thrownhighlight1');
								target.$compare(game.createCard(event.tes, '', ''), player, game.createCard(event.mes, '', ''));
								game.log(target, '选择了', '#g' + get.translation(event.tes));
								game.log(player, '选择了', '#g' + get.translation(event.mes));
								('step 5');
								var target = trigger.player;
								var mes = event.mes.slice(12);
								var tes = event.tes.slice(12);
								var str;
								trigger.directHit.add(player); //无法响应
								trigger.card.storage.gt_fanji = true; //标记反击牌
								if (tes == 1) {
									var evt = trigger.getParent('useCard');
									evt.excluded.addArray(evt.targets);
									trigger.cancel();
									trigger.player.draw();
								}
								if (mes == 1) {
									player.getStat('triggerSkill').gt_fanji--;
								}
								if (mes == 2 && tes == 2) {
									player.addTempSkill('gt_fanji_effect');
									str = get.translation(player) + '反击成功';
									game.log(player, '#g反击成功');
									event.result = { bool: true };
								} else {
									str = '无事发生';
									game.log('#g无事发生');
									event.result = { bool: false };
								}
								game.broadcastAll(function (str) {
									var dialog = ui.create.dialog(str);
									dialog.classList.add('center');
									setTimeout(function () {
										dialog.close();
									}, 1000);
								}, str);
								('step 6');
								game.broadcastAll(function () {
									ui.arena.classList.remove('thrownhighlight');
								});
								game.addVideo('thrownhighlight2');
								if (event.clear !== false) {
									game.broadcastAll(ui.clear);
								}
							},
							ai: {
								fireAttack: true,
								maixie_defend: true,
							},
							subSkill: {
								effect: {
									trigger: { player: 'damageBegin' },
									audio: 'ext:坎公骑冠剑/audio/character:2',
									forced: true,
									filter(event, player) {
										//if(!event.card||!event.card.storage||!event.card.storage.gt_fanji) return false;
										return event.card && event.card.storage && event.card.storage.gt_fanji;
									},
									content() {
										trigger.cancel();
										trigger.source.damage('fire', 1, 'nocard');
										player.draw(3);
										player.removeSkill('gt_fanji_effect');
									},
									//silent:true,
								},
							},
						},
						//47AA72
						gt_shuiqiang: {
							marktext: '火箭',
							intro: {
								name: '火箭',
								content: 'expansion',
								markcount: 'expansion',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							//forced:true,
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return player.getExpansions('gt_shuiqiang').length < 3;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								if (player.countCards('h')) {
									player.chooseCard('将一张手牌置于武将牌上作为<火箭>', true);
								} else event.finish();
								('step 2');
								if (result.cards?.length) {
									player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('gt_shuiqiang');
								}
							},
							group: 'gt_shuiqiang2',
							//derivation:'gt_baofa',
						},
						gt_shuiqiang2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								return player.getExpansions('gt_shuiqiang').length && event.filterCard({ name: 'sha' }, player, event);
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog('水枪', player.getExpansions('gt_shuiqiang'), 'hidden');
								},
								filter(button, player) {
									var card = button.link;
									if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
									var evt = _status.event.parent;
									return evt.filterCard({ name: 'sha' }, player, evt);
								},
								backup(links, player) {
									return {
										audio: 'gt_shuiqiang2',
										selectCard: -1,
										position: 'x',
										filterCard: (card) => card == lib.skill.gt_shuiqiang2_backup.card,
										viewAs: { name: 'sha' },
										card: links[0],
									};
								},
								prompt(links, player) {
									return '选择【杀】(' + get.translation(links[0]) + ')的目标';
								},
							},
							ai: {
								respondSha: true,
								order() {
									return get.order({ name: 'sha' }) + 0.1;
								},
								result: {
									player: 1,
								},
								//threaten:1.3,
							},
						},
						gtre_shuiqiang: {
							enable: ['chooseToUse', 'chooseToRespond'],
							audio: 'ext:坎公骑冠剑/audio/character:2',
							chargeSkill: true,
							filter(event, player) {
								return player.countMark('charge');
							},
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: {
								name: 'sha',
								storage: { gt_shuiqiang: true },
							},
							group: ['gt_shuiqiang_charge', 'gt_shuiqiang_discharge'],
							ai: {
								//respondSha:true,
								order() {
									return get.order({ name: 'sha' }) + 0.1;
								},
								expose: 0.5,
								//threaten:1.3,
							},
							subSkill: {
								discharge: {
									trigger: { player: 'useCard' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_shuiqiang && event.card.name == 'sha';
									},
									content() {
										player.removeMark('charge', 1);
									},
									silent: true,
								},
								charge: {
									trigger: { global: 'phaseEnd' },
									forced: true,
									filter(event, player) {
										return player.countMark('charge') < 3;
									},
									content() {
										player.addMark('charge', 1);
									},
									silent: true,
								},
							},
						},
						gt_shuangbeng: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							group: ['gt_shuangbeng_draw', 'gt_shuangbeng_sha', 'gt_shuangbeng_use'],
							subSkill: {
								draw: {
									audio: 'gt_shuangbeng',
									//usable:2,
									trigger: { source: 'damageSource' },
									//frequent:true,
									forced: true,
									filter(event, player) {
										if (player.getStat('skill').gt_shuangbeng_draw >= 2) return false;
										return event.card && event.card.name == 'sha';
									},
									content() {
										'step 0';
										player.chooseBool('双泵:是否摸一张牌？'); //.set('frequentSkill','gt_shuangbeng');
										('step 1');
										if (result.bool) {
											player.draw();
											if (!player.getStat('skill').gt_shuangbeng_draw) player.getStat('skill').gt_shuangbeng_draw = 1;
											else player.getStat('skill').gt_shuangbeng_draw++;
										}
									},
									silent: true,
								},
								sha: {
									audio: 'gt_shuangbeng',
									//usable:2,
									trigger: { global: 'damageEnd' },
									forced: true,
									filter(event, player) {
										if (player.getStat('skill').gt_shuangbeng_sha >= 2) return false;
										if (event.player == player) return false;
										return event.card && event.card.name == 'sha';
									},
									content() {
										player
											.chooseToUse(
												function (card, player, event) {
													if (card.name != 'sha') return false;
													return lib.filter.cardEnabled.apply(this, arguments);
												},
												'双泵:是否对' + get.translation(trigger.player) + '使用一张【杀】？'
											)
											.set('complexSelect', true)
											.set('filterTarget', function (card, player, target) {
												if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
												return lib.filter.targetEnabled.apply(this, arguments);
											})
											.set('sourcex', trigger.player)
											.set('addCount', false);
									},
									silent: true,
								},
								use: {
									audio: 'gt_shuangbeng',
									trigger: { player: 'logSkillBegin' },
									forced: true,
									filter(event, player) {
										return event.skill == 'gt_shuangbeng_sha';
									},
									content() {
										if (!player.getStat('skill').gt_shuangbeng_sha) player.getStat('skill').gt_shuangbeng_sha = 1;
										else player.getStat('skill').gt_shuangbeng_sha++;
									},
									silent: true,
								},
							},
							ai: {
								//expose:0.5,
								//threaten:1.3,
							},
						},
						//48SP罗兰茵
						gt_jinji: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.hujia;
							},
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: {
								name: 'nanman',
								storage: { gt_jinji: true },
							},
							group: ['gt_jinji_hujia'],
							subSkill: {
								hujia: {
									audio: 'gt_jinji',
									trigger: { player: 'useCard' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_jinji;
									},
									content() {
										player.changeHujia(-1);
										game.log(player, '失去了一点护甲');
									},
									silent: true,
								},
							},
							ai: {
								order() {
									return get.order({ name: 'nanman' });
								},
								result: {
									player(player, target) {
										//if(player.hujia>1)
										return get.effect(target, { name: 'nanman' }, player, player);
									},
								},
							},
						},
						gt_fangwei: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							//frequent:true,
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							//usable:1,
							filter(event, player) {
								if (event.card.name == 'sha') {
									return true;
								}
								return false;
							},
							content() {
								player.changeHujia();
							},
							group: ['gt_fangwei_draw'],
							subSkill: {
								draw: {
									audio: 'gt_fangwei',
									usable: 2,
									trigger: {
										player: 'damageEnd',
										source: 'damageSource',
									},
									//frequent:true,
									filter(event, player) {
										//if(player==event.player&&event.hujia) return true;
										//if(player==event.source&&player.hujia) return true;
										return player == event.player ? event.hujia : player.hujia;
									},
									content() {
										player.draw();
									},
								},
							},
							ai: {
								presha: true,
								//threaten:1.2,
							},
						},
						//49疯狂熊猫团
						gt_mafan: {
							marktext: '熊猫',
							intro: {
								content: 'mark',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							//usable:1,
							chargeSkill: true,
							filter(event, player, name) {
								if (player.countMark('charge') < 24) {
									//return player.storage.gt_mafan;
									return player.hasSkill('gt_mafan_mark');
								}
								return true;
							},
							filterTarget(card, player, target) {
								//if(player.storage.gt_mafan){
								if (player.hasSkill('gt_mafan_mark')) {
									return player.canUse('sha', target, true);
								}
								return true;
							},
							selectTarget() {
								var player = _status.event.player;
								//var num=player.storage.gt_mafan?1:0;
								var num = player.hasSkill('gt_mafan_mark') ? [1, 1] : [0, 0];
								return num;
							},
							content() {
								//if(player.storage.gt_mafan){
								if (player.hasSkill('gt_mafan_mark')) {
									player.useCard(
										{
											name: 'sha',
											storage: { gt_mafan: true },
										},
										target,
										false
									);
									//player.chooseUseTarget('###是否发动【麻烦】？###视为使用一张【杀】',{name:'sha'},false).logSkill='gt_mafan';
									//delete player.storage.gt_mafan;
									//player.unmarkSkill('gt_mafan');
									player.removeSkill('gt_mafan_mark');
								} else {
									var num = player.countMark('charge');
									player.removeMark('charge', 24);
									//player.markSkill('gt_mafan');
									//player.storage.gt_mafan=true;
									player.addTempSkill('gt_mafan_mark', { player: 'phaseBegin' });
									player.draw(2);
									//player.changeHujia(2);
									//event.finish();
								}
							},
							group: ['gt_mafan_charge', 'gt_mafan_flash'],
							subSkill: {
								charge: {
									//audio:"gt_hunxie",
									forced: true,
									trigger: {
										player: 'useCardToPlayered',
										target: 'useCardToTargeted',
									},
									filter(event, player) {
										if (!event.isFirstTarget && player != event.target) return false;
										//if(player.storage.gt_mafan) return false;
										if (player.hasSkill('gt_mafan_mark')) return false;
										return player.countMark('charge') < 24;
									},
									content() {
										var num = Math.min(get.cardNameLength(trigger.card) + 2, 24 - player.countMark('charge'));
										player.addMark('charge', num);
									},
									silent: true,
								},
								mark: {
									mark: true,
									marktext: '熊猫',
									intro: {
										name: '熊猫',
										//content:"防止你受到的一次伤害",
									},
									charlotte: true,
								},
								flash: {
									trigger: {
										global: 'phaseBegin',
									},
									forced: true,
									filter(event, player) {
										return player.name1 == 'gt_fengkuangxiongmaotuan';
									},
									content() {
										'step 0';
										player.flashAvatar('gt_mafan', 'gt_fengkuangxiongmaotuan2');
										('step 1');
										player.flashAvatar('gt_mafan', 'gt_fengkuangxiongmaotuan3');
									},
								},
							},
							ai: {
								//threaten:2,
								order(item, player) {
									if (player.storage.gt_mafan) {
										return get.order({ name: 'sha' }, player) + 10;
									}
									return 10;
								},
								result: {
									target: -1,
								},
							},
						},
						//50克罗姆
						gt_paidui: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { global: 'gameStart', player: 'enterGame' },
							forced: true,
							content() {
								'step 0';
								var list = [];
								var skills = [];
								var map = [];
								var evt = event.getParent(2);
								var characterList = [];
								game.countPlayer(function (current) {
									if (current.name && lib.character[current.name] && current.name.indexOf('gz_shibing') != 0 && current.name.indexOf('gz_jun_') != 0) characterList.add(current.name);
									if (current.name1 && lib.character[current.name1] && current.name1.indexOf('gz_shibing') != 0 && current.name1.indexOf('gz_jun_') != 0) characterList.add(current.name1);
									if (current.name2 && lib.character[current.name2] && current.name2.indexOf('gz_shibing') != 0 && current.name2.indexOf('gz_jun_') != 0) characterList.add(current.name2);
								});
								characterList.randomSort();
								for (var i = 0; i < characterList.length; i++) {
									var name = characterList[i];
									if (name.includes('zuoci') || name.includes('xushao')) continue;
									var skills2 = lib.character[name][3];
									for (var j = 0; j < skills2.length; j++) {
										if (player.getStorage('gt_paidui').includes(skills2[j])) continue;
										if (get.is.locked(skills2[j], player)) continue;
										var info = lib.translate[skills2[j] + '_info'];
										if (skills.includes(skills2[j])) {
											list.add(name);
											if (!map[name]) map[name] = [];
											map[name].push(skills2[j]);
											skills.add(skills2[j]);
											continue;
										}
										var list2 = [skills2[j]];
										game.expandSkills(list2);
										for (var k = 0; k < list2.length; k++) {
											var info = lib.skill[list2[k]];
											if (!info || !info.enable || info.charlotte || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
											//if((info.enable=='phaseUse'||(Array.isArray(info.enable)&&info.enable.includes('phaseUse')))||(info.enable=='chooseToUse'||(Array.isArray(info.enable)&&info.enable.includes('chooseToUse')))){
											if (info.enable == 'phaseUse' || info.enable == 'phaseUse') {
												if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) continue;
												if (info.init || info.onChooseToUse) continue;
												if (info.filter) {
													try {
														var bool = info.filter(evt, player);
														if (!bool) continue;
													} catch (e) {
														continue;
													}
												} else if (info.viewAs && typeof info.viewAs != 'function') {
													try {
														if (evt.filterCard && !evt.filterCard(info.viewAs, player, evt)) continue;
														if (info.viewAsFilter && info.viewAsFilter(player) == false) continue;
													} catch (e) {
														continue;
													}
												}
												list.add(name);
												if (!map[name]) map[name] = [];
												map[name].push(skills2[j]);
												skills.add(skills2[j]);
												break;
											}
										}
									}
									//if(list.length>2) break;
								}
								if (skills.length) {
									//skills.unshift('摸一张牌');
									skills.push('cancel2');
									player.chooseControl(skills).set('dialog', ['派对:请选择获得的技能', [list, 'character']]);
								} else event.finish();
								('step 1');
								if (result.control == 'cancel2') return;
								player.markAuto('gt_paidui', [result.control]);
								player.addSkill(result.control);
							},
						},
						gt_shuangqiang: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'phaseUseBegin' },
							forced: true,
							filter(event, player) {
								if (player.hasSkill('gt_shuangqiang_used')) return false;
								return true;
							},
							content() {
								'step 0';
								var skills = player.getSkills(null, false, false).filter(function (i) {
									if (!lib.translate[i + '_info']) return false;
									var info = get.info(i);
									return info && !info.charlotte && (info.enable == 'phaseUse' || info.enable == 'phaseUse');
								});
								var list = [];
								for (var skill of skills) {
									list.push([skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【' + get.translation(skill) + '】</div><div>' + lib.translate[skill + '_info'] + '</div></div>']);
								}
								var next = player.chooseButton([get.prompt('gt_shuangqiang'), '请选择失去一个技能', [list, 'textbutton']]);
								//next.set('forced',true);
								//next.set('selectButton',[1,skills.length]);
								next.set('ai', function (button) {
									var skill = button.link,
										skills = _status.event.skills.slice(0);
									skills.removeArray(['gt_fenghe']);
									if (player.awakenedSkills.includes(skill)) return 2;
									if (get.info(skill).zhuSkill && player.identity != 'zhu') return 2;
									if (get.info(skill).hiddenSkill) return 2;
									//if(skills.includes(skill)) return 1+Math.random();
									return Math.random();
								});
								next.set('skills', skills);
								('step 1');
								if (!result.bool) return;
								event.skills = result.links;
								var list = [];
								var skills = [];
								var map = [];
								var evt = event.getParent(2);
								var characterList = [];
								game.countPlayer(function (current) {
									if (current.name && lib.character[current.name] && current.name.indexOf('gz_shibing') != 0 && current.name.indexOf('gz_jun_') != 0) characterList.add(current.name);
									if (current.name1 && lib.character[current.name1] && current.name1.indexOf('gz_shibing') != 0 && current.name1.indexOf('gz_jun_') != 0) characterList.add(current.name1);
									if (current.name2 && lib.character[current.name2] && current.name2.indexOf('gz_shibing') != 0 && current.name2.indexOf('gz_jun_') != 0) characterList.add(current.name2);
								});
								characterList.randomSort();
								for (var i = 0; i < characterList.length; i++) {
									var name = characterList[i];
									if (name.includes('zuoci') || name.includes('xushao')) continue;
									var skills2 = lib.character[name][3];
									for (var j = 0; j < skills2.length; j++) {
										//if(player.getStorage('gt_paidui').includes(skills2[j])) continue;
										if (player.hasSkill(skills2[j])) continue;
										//if(get.is.locked(skills2[j],player)) continue;
										var info = lib.translate[skills2[j] + '_info'];
										if (skills.includes(skills2[j])) {
											list.add(name);
											if (!map[name]) map[name] = [];
											map[name].push(skills2[j]);
											skills.add(skills2[j]);
											continue;
										}
										var list2 = [skills2[j]];
										game.expandSkills(list2);
										for (var k = 0; k < list2.length; k++) {
											var info = lib.skill[list2[k]];
											if (!info || !info.enable || info.charlotte || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
											//if((info.enable=='phaseUse'||(Array.isArray(info.enable)&&info.enable.includes('phaseUse')))||(info.enable=='chooseToUse'||(Array.isArray(info.enable)&&info.enable.includes('chooseToUse')))){
											if (info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse')) || info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse'))) {
												if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) continue;
												if (info.init || info.onChooseToUse) continue;
												list.add(name);
												if (!map[name]) map[name] = [];
												map[name].push(skills2[j]);
												skills.add(skills2[j]);
												break;
											}
										}
									}
									//if(list.length>2) break;
								}
								if (skills.length) {
									//skills.unshift('摸一张牌');
									//skills.push('cancel2');
									player.chooseControl(skills).set('dialog', ['派对:请选择获得的技能', [list, 'character']]);
								} else event.finish();
								('step 2');
								if (result.control == 'cancel2' || !result.control) return;
								player.addTempSkill('gt_shuangqiang_used');
								game.log(player, '失去了技能', '#g【' + get.translation(event.skills.slice(0)) + '】');
								player.removeSkill(event.skills.slice(0));
								player.addSkillLog(result.control);
							},
							group: 'gt_shuangqiang2',
							subSkill: {
								used: {},
							},
						},
						gt_shuangqiang2: {
							trigger: { global: ['useSkillAfter'] },
							audio: 'ext:坎公骑冠剑/audio/character:2',
							filter(event, player) {
								if (event.type != 'player') return false;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								trigger.player.chooseBool(get.prompt('gt_shuangqiang'), '令' + get.translation(player) + '摸一张牌？').set('choice', get.attitude(trigger.player, player) > 0);
								('step 1');
								if (result.bool) {
									trigger.player.line(player, 'gray');
									player.draw();
								}
							},
						},
						gt_shewen: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							enable: 'phaseUse',
							//filterCard:function(){return false},
							//selectCard:-1,
							filterCard: true,
							selectCard: 1,
							position: 'hes',
							check(card) {
								return 6 - get.value(card);
							},
							viewAs: {
								name: 'chenghuodajie',
								//storage:{gt_jici:true},
							},
						},
						gt_duya: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								var stat = player.getStat();
								if (!stat.gt_duya) return true;
								return !stat.gt_duya.includes(event.player);
							},
							forced: true,
							//direct:true,
							content() {
								var stat = player.getStat();
								if (!stat.gt_duya) stat.gt_duya = [];
								stat.gt_duya.push(trigger.player);
								//trigger.num++;
								trigger.player.loseHp();
								trigger.player.addTempSkill('fengyin');
							},
						},
						gt_jisu: {
							trigger: { global: [/*'logSkill',*/ 'useSkillAfter'] },
							audio: 'ext:坎公骑冠剑/audio/character:2',
							//usable:1,
							filter(event, player) {
								if (event.type != 'player') return false;
								var skill = event.sourceSkill || event.skill;
								var info = get.info(skill);
								if (info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse')) || info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse'))) return true;
								if (info.enable == 'chooseToUse' || (Array.isArray(info.enable) && info.enable.includes('chooseToUse')) || info.enable == 'chooseToUse' || (Array.isArray(info.enable) && info.enable.includes('chooseToUse'))) return true;
								if (info.enable == 'chooseToRespond' || (Array.isArray(info.enable) && info.enable.includes('chooseToRespond')) || info.enable == 'chooseToRespond' || (Array.isArray(info.enable) && info.enable.includes('chooseToRespond'))) return true;
								return false;
							},
							forced: true,
							content() {
								player.draw();
							},
						},
						//51瓦伦西亚
						gt_chuanxin: {
							mod: {
								selectTarget(card, player, range) {
									if (Array.isArray(range) && range[1] == -1) return;
									if (card.name == 'sha') range[1] += Infinity;
								},
							},
							marktext: '穿心',
							intro: {
								name: '穿心',
								content: 'mark',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							//logTarget:"target",
							content() {
								var num = player.countMark('gt_chuanxin');
								if (num < 2) player.addMark('gt_chuanxin', 1);
								else {
									player.removeMark('gt_chuanxin', num);
									trigger.num *= 2;
									game.log(trigger.card, '的伤害值', '#y×2');
								}
							},
							ai: {
								expose: 0.2,
								//threaten:1.4,
							},
						},
						gt_jici: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							usable: 1,
							enable: 'phaseUse',
							//filterCard:function(){return false},
							//selectCard:-1,
							filterCard: true,
							selectCard: 1,
							position: 'hes',
							check(card) {
								return 6 - get.value(card);
							},
							viewAs: {
								name: 'juedou',
								storage: { gt_jici: true },
							},
							onuse(result, player) {
								player.addTempSkill('gt_jici_draw');
							},
							subSkill: {
								draw: {
									trigger: { source: 'damageSource' },
									//audio:"gt_shabao",
									forced: true,
									filter(event, player) {
										return event.parent.skill == 'gt_jici';
									},
									content() {
										'step 0';
										player.draw(2);
										('step 1');
										player
											.chooseTarget(get.prompt('gt_jici'), '令一名其他角色摸一张牌', function (card, player, target) {
												return target != player;
											})
											.set('ai', function (target) {
												var att = get.attitude(_status.event.player, target);
												return att;
											});
										('step 2');
										if (result.targets?.length) {
											var target = result.targets[0];
											event.target = target;
											target.draw();
										}
									},
									silent: true,
								},
								sha: {
									mod: {
										cardUsable(card, player) {
											if (card.name == 'sha') return Infinity;
										},
									},
									silent: true,
								},
							},
						},
						gt_jici2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								return event.card && event.card.name == 'juedou';
							},
							content() {
								'step 0';
								player.draw(2);
								player
									.chooseTarget(get.prompt('gt_jici2'), '令一名其他角色摸一张牌', [1, 1], function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									game.asyncDraw(result.targets);
								}
							},
						},
						//52克罗塞尔
						gt_hairu: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('gt_hairu'), function (card, player, target) {
										return target != player && target.countCards('he') > 0;
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										return 5 - att;
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									var cards = target.getCards('he');
									player
										.chooseButton(['骇入:使用其中一张牌', cards])
										.set('filterButton', function (button) {
											return player.hasUseTarget(button.link);
										})
										.set('ai', function (button) {
											return player.getUseValue(button.link);
										});
								}
								('step 2');
								if (result.links?.length) {
									var card = result.links[0];
									player.chooseUseTarget(card, false);
								}
							},
							//group:'gt_dianzi',
							ai: {
								expose: 0.2,
								//threaten:1.3,
							},
						},
						gt_dianzi: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return true;
							},
							filterCard(card, player) {
								return true;
							},
							position: 'hej',
							complexSelect: true,
							complexCard: true,
							complexTarget: true,
							selectCard: [1, Infinity],
							selectTarget() {
								return [ui.selected.cards.length, ui.selected.cards.length];
							},
							check(card) {
								var player = _status.event.player;
								if (
									ui.selected.cards.length <
									game.countPlayer(function (current) {
										return get.attitude(player, current) > 0;
									})
								)
									return 6 - get.value(card);
								return -get.value(card);
							},
							line: 'thunder',
							content() {
								target.changeHujia();
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										if (target.hujia >= 5) return 0;
										return 1;
									},
								},
							},
						},
						gt_houduan: {
							marktext: '网页',
							intro: {
								name: '后端',
								name2: '网页',
								content: 'mark',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								source: 'damageSource',
							},
							content() {
								trigger.player.addMark('gt_houduan', 1);
							},
							ai: {
								expose: 0.2,
								//threaten:1.3,
							},
						},
						_gt_houduan: {
							//网页后端
							trigger: {
								player: ['changeHujiaAfter'],
							},
							forced: true,
							filter(event, player) {
								return player.hasMark('gt_houduan') && event.num > 0;
							},
							content() {
								game.findPlayer2(function (current) {
									if (current.hasSkill('gt_houduan')) {
										current.changeHujia(trigger.num);
									}
								});
								player.removeMark('gt_houduan', 1);
							},
						},
						//53安德拉斯
						gt_tulu: {
							marktext: '冰晶',
							intro: {
								name: '屠戮',
								name2: '冰晶',
								content: '当前有#个<冰晶>',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								player: ['useCard', 'respond'],
							},
							filter(event, player) {
								if (player.countMark('gt_tulu') >= 4) return false;
								return event.cards && event.cards.length;
							},
							content() {
								player.addMark('gt_tulu', 1);
								event.trigger('gt_bingjing');
							},
							group: ['gt_tulu2', 'gt_tulu3'],
						},
						gt_tulu2: {
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							filter(event, player) {
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							content() {
								player.addMark('gt_tulu', 2);
							},
						},
						gt_tulu3: {
							audio: 'gt_bingzang',
							enable: 'phaseUse',
							filter(event, player) {
								var num = 4 - player.countMark('gt_tulu');
								return player.countCards('he') >= num;
							},
							filterTarget(card, player, target) {
								return player.canUse('sha', target, true);
							},
							filterCard: true,
							position: 'he',
							selectCard() {
								var player = _status.event.player,
									num = 4 - player.countMark('gt_tulu');
								return num;
							},
							check(card) {
								return 6 - get.value(card);
							},
							prompt() {
								var player = _status.event.player,
									num = 4 - player.countMark('gt_tulu');
								return '移去' + player.countMark('gt_tulu') + '个<冰晶>并弃置' + num + '张牌,视为使用一张冰【杀】';
							},
							content() {
								player.removeMark('gt_tulu', player.countMark('gt_tulu'));
								player.useCard({ name: 'sha', nature: 'ice' }, target, false);
							},
							ai: {
								order(item, player) {
									return get.order({ name: 'sha', nature: 'ice' }, player) + 10;
								},
								result: {
									target(player, target) {
										if (ui.selected.cards.length) return 0;
										return get.effect(target, { name: 'sha', nature: 'ice' }, player, target);
									},
								},
							},
						},
						gt_bingzang: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { source: 'damageBegin1' },
							filter(event, player) {
								return event.card && event.card.storage && event.card.storage.gt_bingzang;
							},
							forced: true,
							content() {
								trigger.num *= 2;
								game.log(trigger.card, '的伤害值', '#y×2');
							},
							group: ['gt_bingzang_count', 'gt_bingzang_unmark', 'gt_bingzang2'],
							intro: {
								content: '已使用或打出#张牌',
							},
							subSkill: {
								count: {
									trigger: {
										player: ['useCard', 'respond'],
									},
									filter(event, player) {
										return player.isPhaseUsing() && event.cards.length;
									},
									content() {
										if (!player.storage.gt_bingzang) player.storage.gt_bingzang = 0;
										player.storage.gt_bingzang++;
										if (player.storage.gt_bingzang) player.markSkill('gt_bingzang');
										if (player.storage.gt_bingzang == 3 || player.storage.gt_bingzang == 4) trigger.card.storage.gt_bingzang = true; //标记冰葬牌
									},
									silent: true,
									forced: true,
									popup: false,
								},
								unmark: {
									trigger: {
										player: 'phaseEnd',
									},
									filter(event, player) {
										return player.storage.gt_bingzang;
									},
									content() {
										delete player.storage.gt_bingzang;
										player.unmarkSkill('gt_bingzang');
									},
									silent: true,
									forced: true,
									popup: false,
								},
							},
						},
						gt_bingzang2: {
							audio: 'gt_tulu',
							trigger: { player: 'gt_bingjing' },
							filter(event, player) {
								return player.countMark('charge') >= 3;
								//return player.countMark('gt_tulu')>=3;
							},
							forced: true,
							content() {
								player.draw();
							},
						},
						gtre_tulu: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							chargeSkill: true,
							filter(event, player) {
								var num = 4 - player.countMark('charge');
								return player.countCards('he') >= num;
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							filterCard: true,
							position: 'he',
							selectCard() {
								var player = _status.event.player,
									num = 4 - player.countMark('charge');
								return num;
							},
							check(card) {
								return 6 - get.value(card);
							},
							prompt() {
								var player = _status.event.player,
									num = 4 - player.countMark('charge');
								return '消耗' + player.countMark('charge') + '点蓄力值并弃置' + num + '张牌,对一名其他角色造成1点冰属性伤害.';
							},
							content() {
								player.removeMark('charge', player.countMark('charge'));
								target.damage('ice');
							},
							group: 'gt_tulu_charge',
							subSkill: {
								charge: {
									audio: 'gt_tulu',
									forced: true,
									trigger: {
										global: 'phaseBefore',
										player: ['enterGame', 'useCard'],
									},
									filter(event, player) {
										if (player.countMark('charge') >= 4) return false;
										if (event.name == 'useCard')
											return true; //event.cards.length&&event.card.isCard;
										else {
											return event.name != 'phase' || game.phaseNumber == 0;
										}
									},
									content() {
										var num = trigger.name == 'useCard' ? 1 : 2;
										player.addMark('charge', num);
										event.trigger('gt_bingjing');
									},
								},
							},
							ai: {
								order(item, player) {
									return get.order({ name: 'sha', nature: 'ice' }, player) + 10;
								},
								result: {
									target(player, target) {
										//if(ui.selected.cards.length) return 0;
										return get.effect(target, { name: 'sha', nature: 'ice' }, player, target);
									},
								},
							},
						},
						gt_hanqi: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'useCardToPlayered' },
							forced: true,
							filter(event, player) {
								var num =
									(player.getAllHistory('useCard', function (evt) {
										return evt.card && evt.cards.length;
									}).length +
										player.getAllHistory('respond', function (evt) {
											return evt.card && evt.cards.length;
										}).length) %
									4;
								return (num == 3 || num == 0) && event.card && event.cards.length && get.tag(event.card, 'damage'); //&&event.card.name=='sha';
							},
							content() {
								var id = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].extraDamage != 'number') {
									map[id].extraDamage = 0;
								}
								map[id].extraDamage++;
							},
							ai: {
								damageBonus: true,
							},
							group: ['gt_hanqi_count', 'gt_hanqi2'],
							intro: {
								content(storage, player) {
									var str = '已使用';
									str += storage;
									str += '张牌';
									return str;
								},
							},
							subSkill: {
								count: {
									trigger: {
										player: ['useCard', 'respond'],
									},
									filter(event, player) {
										return event.card && event.cards.length; //&&event.card.name=='sha';
									},
									silent: true,
									firstDo: true,
									noHidden: true,
									content() {
										player.storage.gt_hanqi =
											(player.getAllHistory('useCard', function (evt) {
												return evt.card && evt.cards.length;
											}).length +
												player.getAllHistory('respond', function (evt) {
													return evt.card && evt.cards.length;
												}).length) %
											4;
										player.markSkill('gt_hanqi');
									},
									forced: true,
									popup: false,
								},
								unmark: {
									trigger: {
										player: 'phaseEnd',
									},
									filter(event, player) {
										return player.storage.gt_hanqi;
									},
									content() {
										delete player.storage.gt_hanqi;
										player.unmarkSkill('gt_hanqi');
									},
									silent: true,
									forced: true,
									popup: false,
								},
							},
						},
						gt_hanqi2: {
							audio: 'gt_tulu',
							trigger: { player: 'gt_bingjing' },
							filter(event, player) {
								return player.countMark('gt_tulu') >= 3;
							},
							forced: true,
							content() {
								player.draw();
							},
						},
						//54堇
						gt_renshu: {
							marktext: '分身',
							intro: {
								name: '忍术',
								name2: '分身',
								content: '当前有#个<分身>',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								player.addMark('gt_renshu', 1);
							},
							group: ['gt_renshu2', 'gt_renshu_mark'],
							subSkill: {
								mark: {
									trigger: {
										player: 'phaseAfter',
									},
									filter(event, player) {
										if (!player.hasMark('gt_renshu')) return false;
										return true;
									},
									forced: true,
									charlotte: true,
									content() {
										player.addSkill('gt_renshu_remove');
									},
									silent: true,
								},
								remove: {
									trigger: {
										player: 'phaseEnd',
									},
									filter(event, player) {
										if (!player.hasMark('gt_renshu')) return false;
										return true;
									},
									forced: true,
									content() {
										player.removeMark('gt_renshu', 1);
										player.removeSkill('gt_renshu_remove');
									},
									//silent:true,
								},
								buff: {
									trigger: { player: 'useCardAfter' },
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.gt_renshu_buff != undefined;
									},
									content() {
										'step 0';
										event.card = trigger.gt_renshu_buff[0];
										event.count = trigger.gt_renshu_buff[1];
										('step 1');
										event.count--;
										for (var i of trigger.targets) {
											if (!i.isIn() || !player.canUse(card, i, false)) return;
										}
										if (trigger.addedTarget && !trigger.addedTarget.isIn()) return;
										if (trigger.addedTargets && trigger.addedTargetfs.length) {
											for (var i of trigger.addedTargets) {
												if (!i.isIn()) return;
											}
										}
										var next = player.useCard(get.copy(card), trigger.targets, false);
										if (trigger.addedTarget) next.addedTarget = trigger.addedTarget;
										if (trigger.addedTargets && trigger.addedTargets.length) next.addedTargets = trigger.addedTargets.slice(0);
										if (event.count > 0) event.redo();
									},
								},
							},
							ai: {
								order: 10,
								result: { player: 1 },
							},
						},
						gt_renshu2: {
							audio: 'gt_renshu',
							trigger: { player: 'useCard' },
							filter(event, player) {
								if (player.countMark('gt_renshu') < 1) return false;
								var type = get.type(event.card, false);
								if (type != 'basic' && type != 'trick') return false;
								return player.isPhaseUsing();
								//return true;
							},
							forced: true,
							prompt2(event) {
								return '令' + get.translation(event.card) + '额外结算' + get.cnNumber(event.player.countMark('gt_renshu')) + '次';
							},
							check(event, player) {
								return !get.tag(event.card, 'norepeat');
							},
							content() {
								'step 0';
								var num = player.countMark('gt_renshu');
								player.chooseToDiscard([1, num], 'he', get.prompt('gt_renshu'), '弃置至多' + get.cnNumber(num) + '牌,令' + get.translation(trigger.card) + '额外结算等量次').set('ai', function (card) {
									if (get.tag(event.card, 'norepeat')) return -1;
									//if(!player.hasValueTarget(card)) return 8-get.value(card);
									return get.value(trigger.card) - get.value(card);
								});
								('step 1');
								if (result.cards?.length) {
									var length = result.cards.length;
									game.log(trigger.card, '额外结算' + get.cnNumber(length) + '次');
									trigger.effectCount += length;
								}
							},
						},
						oldgt_renshu2: {
							audio: 'gt_renshu',
							trigger: { player: 'useCardToPlayered' },
							filter(event, player) {
								if (event.card.storage && event.card.storage.gt_renshu) return false;
								var type = get.type(event.card, false);
								if (type != 'basic' && type != 'trick') return false;
								return player.isPhaseUsing();
								//return true;
							},
							prompt2(event) {
								return '令' + get.translation(event.card) + '额外结算' + get.cnNumber(event.player.countMark('gt_renshu')) + '次';
							},
							check(event, player) {
								return !get.tag(event.card, 'norepeat');
							},
							content() {
								player.addTempSkill('gt_renshu_buff');
								var num = player.countMark('gt_renshu');
								trigger.parent.gt_renshu_buff = [
									{
										name: trigger.card.name,
										nature: trigger.card.nature,
										storage: { gt_renshu: true },
									},
									num,
								];
							},
						},
						gt_xunying: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							mod: {
								globalFrom(from, to, distance) {
									return distance - from.countMark('gt_renshu');
								},
							},
						},
						//55拜蒙
						gt_pohuai: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							//usable:1,
							filter(event, player) {
								if (player.hasJudge('huoshan')) return false;
								return player.countCards('hes') > 0;
							},
							position: 'hes',
							discard: false,
							lose: false,
							delay: false,
							filterCard(card, player, event) {
								return player.canAddJudge({ name: 'huoshan', cards: [card] });
							},
							filterTarget(card, player, target) {
								return player.canUse('sha', target, true);
							},
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								player.useCard({ name: 'huoshan' }, cards, false, player);
								player.useCard({ name: 'sha', nature: 'fire', storage: { gt_pohuai_sha: true } }, target, false);
							},
							group: ['gt_pohuai_sha', 'gt_pohuai_debuff'],
							subSkill: {
								sha: {
								},
								debuff: {
									trigger: { source: 'damageSource' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_pohuai_sha;
									},
									content() {
										trigger.player.addTempSkill('gt_pohuai_mark', { player: 'phaseEnd' });
										trigger.player.markAuto('gt_pohuai_mark', [player]);
									},
									silent: true,
								},
								mark: {
									charlotte: true,
									mark: true,
									marktext: '熔岩',
									intro: {
										name: '熔岩',
										name2: '熔岩',
										content: '使用牌只能指定$和自己为目标',
									},
									mod: {
										playerEnabled(card, player, target) {
											if (player != target && !player.getStorage('gt_pohuai_mark').includes(target)) return false;
										},
									},
								},
							},
							ai: {
								order(item, player) {
									return get.order({ name: 'sha', nature: 'fire' }, player);
								},
								result: {
									target(player, target) {
										return get.effect(target, { name: 'sha', nature: 'fire' }, player, target);
									},
								},
							},
						},
						gt_zhanshen: {
							mod: {
								cardname(card, player) {
									if (['trick', 'delay'].includes(lib.card[card.name].type) && player.countCards('j')) return 'sha';
								},
								cardnature(card, player) {
									if (['trick', 'delay'].includes(lib.card[card.name].type) && player.countCards('j')) return 'fire';
								},
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'basic';
							},
							content() {
								player.draw();
							},
							group: ['gt_zhanshen_baimeng', 'gt_zhanshen_ruini'],
							subSkill: {
								baimeng: {
									trigger: { player: 'addJudgeAfter' },
									forced: true,
									filter(event, player) {
										return player.name1 == 'gt_baimeng' && player.countCards('j');
									},
									content() {
										player.node.avatar.setBackgroundImage('extension/坎公骑冠剑/image/character/gt_baimeng2.jpg');
									},
									silent: true,
								},
								ruini: {
									trigger: { player: 'loseAfter' },
									forced: true,
									filter(event, player) {
										return player.name1 == 'gt_baimeng' && player.countCards('j') == 0;
									},
									content() {
										player.node.avatar.setBackgroundImage('extension/坎公骑冠剑/image/character/gt_baimeng.jpg');
									},
									silent: true,
								},
							},
						},
						//56罗塞塔
						gt_kuaiqiang: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								global: 'damageBegin1',
							},
							filter(event, card, player) {
								return event.parent.name == 'sha';
							},
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard(1, 'he', '弃置一张牌,令此【杀】伤害+1').set('ai', function (card) {
									var player = _status.event.player;
									var att = get.attitude(player, trigger.player);
									if (att < 0) {
										return 7 - get.value(card);
									}
									return -1;
								});
								('step 1');
								if (result.bool) trigger.num++;
							},
							group: ['gt_kuaiqiang2'],
							ai: {
								expose: 0.2,
								//threaten:1.4,
							},
						},
						gt_kuaiqiang2: {
							audio: 'gt_kuaiqiang',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h') == 0;
							},
							content() {
								player.draw(2);
							},
							ai: {
								order: 10,
								result: { player: 1 },
							},
						},
						gtold_sushe: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player.canUse('sha', target, true);
							},
							filterCard: true,
							position: 'h',
							selectCard: -1,
							content() {
								player.useCard({ name: 'sha' }, target, false);
								player.draw(2);
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										var num = 0;
										var cards = player.getCards('h');
										if (Array.isArray(cards)) for (var i of cards) {
											num += Math.max(0, get.value(i, player, 'raw'));
										}
										if (
											player.hasValueTarget({
												name: 'sha',
											})
										)
											return 16 - num;
										return 0;
									},
								},
								//threaten:1.6,
							},
						},
						gt_sushe: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								delete player.storage.gt_danjia;
								player.unmarkSkill('gt_danjia');
								('step 1');
								player.chooseToUse(function (card, player, event) {
									//if(!get.tag(card,'damage')) return false;
									return lib.filter.filterCard.apply(this, arguments);
								}, '速射:使用一张手牌');
								('step 2');
								if (result.bool) {
									event.goto(1);
								} else {
									player.discard(player.getCards('h'));
									player.draw(2);
								}
							},
							group: 'gt_sushe_danjia',
							subSkill: {
								danjia: {
									audio: 'gt_sushe',
									trigger: { player: 'gt_danjia' },
									check(event, player) {
										var num = 0;
										var cards = player.getCards('h');
										if (Array.isArray(cards)) for (var i of cards) {
											if (player.hasUseTarget(i, player, 'raw')) num += Math.max(0, get.value(i, player, 'raw'));
										}
										if (10 > num) return true;
										return false;
									},
									content() {
										var next = game.createEvent('gt_sushe');
										next.player = player;
										next.setContent(lib.skill.gt_sushe.content);
									},
									//silent:true,
								},
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										var num = 0;
										var cards = player.getCards('h');
										if (Array.isArray(cards)) for (var i of cards) {
											if (player.hasUseTarget(i, player, 'raw')) num += Math.max(0, get.value(i, player, 'raw'));
										}
										return 10 - num;
									},
								},
								//threaten:1.6,
							},
						},
						gt_danjia: {
							//mark:true,
							marktext: '弹夹',
							intro: {
								name: '弹夹',
								content(storage, player) {
									var str = '已使用';
									str += storage;
									str += '张牌';
									return str;
								},
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								player: ['useCardAfter'],
							},
							forced: true,
							filter(event, player) {
								return event.getParent(2).name != 'gt_sushe';
							},
							content() {
								if (!player.storage.gt_danjia) player.storage.gt_danjia = 0;
								player.storage.gt_danjia++;
								if (player.storage.gt_danjia) player.markSkill('gt_danjia');
								if (player.storage.gt_danjia == 3) var num = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0].randomGet();
								else if (player.storage.gt_danjia == 4) var num = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0].randomGet();
								else if (player.storage.gt_danjia == 5) var num = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0].randomGet();
								else var num = 0;
								if (num == 1) {
									event.trigger('gt_danjia');
								}
							},
							ai: {
								expose: 0.5,
								//threaten:1.5,
							},
						},
						//57白雪
						gt_zaoxue: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							mahouSkill: true,
							filter(event, player) {
								return !player.hasSkill('gt_zaoxue_mahou') && player.countCards('he');
							},
							filterCard: lib.filter.cardDiscardable,
							selectCard: 1,
							position: 'hes',
							discard: false,
							lose: false,
							delay: false,
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.addToExpansion(cards, player, 'giveAuto').gaintag.add('gt_zaoxue');
								player
									.chooseControl('1回合', '2回合', '3回合')
									.set('prompt', '请选择施法时长')
									.set('ai', function () {
										var player = _status.event.player;
										var safe = player.hp;
										if (safe < Math.min(3, game.countPlayer())) {
											var next = player.next;
											while (next != player && get.attitude(next, player) > 0) {
												safe++;
												next = next.next;
											}
										}
										return Math.max(1, Math.min(safe, 3, game.countPlayer())) - 1;
									});
								('step 1');
								player.storage.gt_zaoxue_mahou = [result.index + 1, result.index + 1];
								player.addTempSkill('gt_zaoxue_mahou', { player: 'die' });
							},
							marktext: '雪',
							onremove(player, skill) {
								var cards = player.getExpansions(skill);
								if (cards.length) player.loseToDiscardpile(cards);
							},
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							subSkill: {
								mahou: {
									trigger: { global: 'phaseEnd' },
									forced: true,
									popup: false,
									charlotte: true,
									content() {
										var list = player.storage.gt_zaoxue_mahou;
										player.storage.gt_zaoxue = list[0];
										list[1]--;
										if (list[1] == 0) {
											game.log(player, '的<造雪>魔法生效');
											var cards = player.getExpansions('gt_zaoxue');
											if (cards.length) {
												player.chooseUseTarget({ name: 'sha', nature: 'ice', storage: { gt_zaoxue: true } }, false, cards, false).viewAs = true;
											}
											player.addTempSkill('gt_zaoxue_sha');
											player.removeSkill('gt_zaoxue_mahou');
										} else {
											game.log(player, '的<造雪>魔法剩余', '#g' + list[1] + '回合');
											player.markSkill('gt_zaoxue_mahou');
										}
									},
									ai: { threaten: 2.5 },
									mark: true,
									//该图标为灵魂宝石
									marktext: '♗',
									intro: {
										name: '施法:造雪',
										markcount(storage) {
											if (storage) return storage[1];
											return 0;
										},
										content(storage) {
											if (storage) {
												return '经过' + storage[1] + '个<回合结束时>后,若有<雪>,则将所有<雪>将一张伤害和攻击范围均为' + storage[0] + '的冰【杀】使用';
											}
											return '未指定施法效果';
										},
									},
								},
								sha: {
									mod: {
										targetInRange(card, player, target) {
											var num = player.storage.gt_zaoxue;
											return card.storage && card.storage.gt_zaoxue && get.distance(player, target) <= num;
										},
									},
									trigger: { player: 'useCardToPlayered' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.card && event.card.storage && event.card.storage.gt_zaoxue;
									},
									content() {
										var id = trigger.target.playerid;
										var map = trigger.parent.customArgs;
										if (!map[id]) map[id] = {};
										if (typeof map[id].extraDamage != 'number') {
											map[id].extraDamage = 0;
										}
										var num = player.storage.gt_zaoxue;
										map[id].extraDamage = num - 1;
									},
									ai: {
										damageBonus: true,
									},
									silent: true,
								},
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
								//threaten:1.5
							},
						},
						gt_dongri: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') {
										return (
											num +
											Math.min(
												game.countPlayer(function (current) {
													return current.group == 'gt_shui';
												}),
												4
											)
										);
									}
								},
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { source: 'damageSource' },
							usable: 2,
							filter(event, player) {
								return event.player.countCards('he') > 0;
							},
							content() {
								player.gainPlayerCard(true, trigger.player, 'he');
							},
						},
						//58卡米拉
						gt_qiju: {
							marktext: '棋',
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							onremove(player, skill) {
								var cards = player.getExpansions(skill);
								if (cards.length) player.loseToDiscardpile(cards);
							},
							trigger: { player: 'showCharacterAfter' },
							filter(event, player) {
								return event.toShow.includes('gt_kamila');
							},
							forced: true,
							hiddenSkill: true,
							content() {
								'step 0';
								player.chooseTarget(
									get.prompt('gt_qiju'),
									'获得至多四名角色的各一张手牌,摸少选角色数张牌',
									[0, 4],
									function (card, player, target) {
										return target.countCards('hej') > 0 && player != target;
									},
									function (target) {
										var att = get.attitude(_status.event.player, target);
										if (target.countCards('he') && target != player) {
											if (target.hasSkill('tuntian')) return att / 10;
											return 1 - att;
										}
										if (target.countCards('j') && target != player) {
											return att;
										}
									},
									true
								);
								('step 1');
								if (result.targets?.length) {
									if (result.targets?.length) {
										result.targets.sortBySeat();
										player.gainMultiple(result.targets, 'hej');
									}
									player.draw(4 - result.targets.length);
								} else {
									event.finish();
								}
								('step 2');
								var nhe = player.countCards('he');
								if (nhe) {
									player
										.chooseCard(
											'he',
											4,
											'将四张点数不同的牌置于你的武将牌上',
											true
											// (card, player) => {
											// 	if (ui.selected.cards.length) {
											// 		var number = card.number;
											// 		for (var i of ui.selected.cards) {
											// 			if (i.number == number) return false;
											// 		}
											// 	}
											// 	return true;
											// }
										)
										.set('complexCard', true)
										.set('ai', function (card) {
											var player = _status.event.player;
											if (card.number == 12) return -get.value(card);
											if (get.type(card, player) == 'equip') return -get.value(card);
											if (ui.selected.cards.length) {
												var number = card.number;
												for (var i of ui.selected.cards) {
													if (i.number == number) return -get.value(card);
												}
											}
											return get.value(card) - 4;
										});
								} else {
									event.finish();
								}
								('step 3');
								if (result.cards?.length) {
									player.addToExpansion(result.cards, player, 'gain2').gaintag.add('gt_qiju');
								}
							},
						},
						gt_moteng: {
							intro: {
								content: 'mark',
							},
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(event, player, target) {
								return player.canCompare(target);
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.num1 >= result.num2) {
									target.damage();
									if (target.countMark('gt_moteng')) {
										target.damage();
										target.removeMark('gt_moteng', 1);
									} else target.addMark('gt_moteng', 1);
									if (target.countDiscardableCards(player, 'he')) {
										player.discardPlayerCard(target, 'he', true);
									} else target.damage();
								}
								if (result.num1 <= result.num2) {
									player.damage();
									if (player.countMark('gt_moteng')) {
										player.damage();
										player.removeMark('gt_moteng', 1);
									} else player.addMark('gt_moteng', 1);
									if (player.countDiscardableCards(player, 'he')) {
										player.chooseToDiscard('he', true);
									} else player.damage();
								}
							},
							ai: {
								order: 7,
								result: {
									target(player, target) {
										var hs = player.getCards('h').sort(function (a, b) {
											return b.number - a.number;
										});
										var ts = target.getCards('h').sort(function (a, b) {
											return b.number - a.number;
										});
										if (!hs.length || !ts.length) return 0;
										if (hs[0].number > ts[0].number || hs[0].number - ts.length >= 9 + Math.min(2, player.hp / 2)) return get.sgnAttitude(player, target) * get.damageEffect(target, player, player);
										return 0;
									},
								},
							},
						},
						gt_rimu: {
							// intro: {
							// 	content: 'mark',
							// },
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							filter(event, player) {
								return player.countCards('h') > 0 && player.getExpansions('gt_qiju').length;
							},
							filterTarget(event, player, target) {
								return player.canCompare(target);
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								var card = {
									name: 'sha',
									nature: 'stab',
									storage: { gt_rimu: true },
								};
								if (result.num1 >= result.num2) {
									player.useCard(card, target, false);
								}
								if (result.num1 <= result.num2) {
									player.chooseCardButton('移去一张<棋>', true, player.getExpansions('gt_qiju'));
								}
								('step 2');
								if (result.bool) player.loseToDiscardpile(result.links);
							},
							group: ['gt_rimu_die'],
							subSkill: {
								die: {
									trigger: { player: 'phaseUseEnd' },
									forced: true,
									filter(event, player) {
										return player.getExpansions('gt_qiju').length == 0;
									},
									content() {
										player.die();
									},
									silent: true,
								},
								stab: {
									trigger: { source: 'damageBegin' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_rimu;
									},
									content() {
										if (trigger.player.countMark('gt_rimu')) {
											trigger.num++;
											trigger.player.removeMark('gt_rimu', 1);
										} else trigger.player.addMark('gt_rimu', 1);
									},
									silent: true,
								},
							},
							ai: {
								order(item, player) {
									return get.order({ name: 'sha', nature: 'stab' }, player);
								},
								result: {
									target(player, target) {
										var hs = player.getCards('h').sort(function (a, b) {
											return b.number - a.number;
										});
										var ts = target.getCards('h').sort(function (a, b) {
											return b.number - a.number;
										});
										if (!hs.length || !ts.length) return 0;
										if (hs[0].number > ts[0].number || hs[0].number - ts.length >= 9 + Math.min(2, player.hp / 2)) return get.sgnAttitude(player, target) * get.damageEffect(target, player, player);
										return 0;
									},
								},
							},
						},
						gt_duoluo: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							mod: {
								cardnumber(card, player) {
									var cards = player.getExpansions('gt_qiju');
									if (Array.isArray(cards)) for (var i of cards) {
										if (i.number == card.number) return 12;
									}
								},
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								if (
									!player.hasCard((card) => {
										return _status.connectMode || card.number === 12;
									}, 'hes')
								)
									return false;
								for (const name of lib.inpile) {
									if (player.getStorage('gt_duoluo_used').includes(name)) continue;
									const card = { name };
									var cards = player.getExpansions('gt_qiju');
									if (Array.isArray(cards)) for (var i of cards) {
										if (i.name == name) return true;
									}
								}
								return false;
							},
							hiddenCard(player, name) {
								if (!lib.inpile.includes(name)) return false;
								if (player.getStorage('gt_duoluo_used').includes(name)) return false;
								if (
									!player.hasCard((card) => {
										return _status.connectMode || card.number === 12;
									}, 'hes')
								)
									return false;
								var cards = player.getExpansions('gt_qiju');
								if (Array.isArray(cards)) for (var i of cards) {
									if (i.name == name) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									var cards = player.getExpansions('gt_qiju');
									if (Array.isArray(cards)) for (var i of cards) {
										list.add(['', '', i.name]);
									}
									list = list.filter((info) => {
										const name = info[2],
											nature = info[3];
										if (player.getStorage('gt_duoluo_used').includes(name)) return false;
										const card = { name, nature };
										return event.filterCard(card, player, event);
									});
									return ui.create.dialog('堕落', [list, 'vcard']);
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
										audio: 'gt_duoluo',
										filterCard(card, player) {
											return card.number === 12;
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
										// precontent() {
										// 	if (!player.storage.gt_duoluo_used) {
										// 		player.when({ global: "phaseAfter" }).then(() => {
										// 			delete player.storage.gt_duoluo_used;
										// 		});
										// 	}
										// 	player.markAuto("gt_duoluo_used", event.result.card.name);
										// },
									};
								},
								prompt(links, player) {
									return '将一张点数为Q的牌当' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							subSkill: {
								backup: {},
							},
							ai: {
								fireAttack: true,
								respondSha: true,
								skillTagFilter(player) {
									if (
										!player.hasCard((card) => {
											return _status.connectMode || card.number === 12;
										}, 'hes')
									)
										return false;
								},
								order: 4,
								result: {
									player(player) {
										if (get.event('dying')) return get.attitude(player, get.event('dying'));
										return 1;
									},
								},
							},
						},
						//59凯伊
						gt_zhiyuan: {
							trigger: { player: 'showCharacterAfter' },
							filter(event, player) {
								return event.toShow.includes('gt_kai');
							},
							hiddenSkill: true,
							forced: true,
							content() {
								player
									.chooseTarget(get.prompt2('gt_zhiyuan'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.attitude(player, target);
									});
							},
						},
						gt_zhengyi: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							dutySkill: true,
							chooseButton: {
								dialog(event, player) {
									var list = [];
									var nature = ['thunder', 'stab', 'fire', 'ice'];
									for (var i of nature) {
										if (player.hasSkill('gt_zhengyi_' + i)) continue;
										list.push(['基本', '', 'sha', i]);
									}
									return ui.create.dialog('正义', [list, 'vcard']);
								},
								filter(button, player) {
									return _status.event.parent.filterCard(
										{
											name: button.link[2],
											nature: button.link[3],
										},
										player,
										_status.event.parent
									);
								},
								backup(links, player) {
									return {
										audio: 'gt_zhengyi',
										filterTarget(event, player, target) {
											return target == player;
										},
										filterCard: () => false,
										selectTarget: 1,
										selectCard: -1,
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
											storage: { gt_zhengyi: true },
										},
										precontent() {
											player.addMark('gt_zhengyi', 1);
											player.addTempSkill('gt_zhengyi_sha');
										},
									};
								},
								prompt(links, player) {
									return '视为对自己使用一张' + (get.translation(links[0][3]) || '') + '【' + get.translation(links[0][2]) + '】';
								},
							},
							mod: {
								cardUsable(card, player) {
									if (card.storage && card.storage.gt_zhengyi) return Infinity;
								},
							},
							subSkill: {
								sha: {
									trigger: { player: 'useCard' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_zhengyi;
									},
									content() {
										if (trigger.addCount !== false) {
											trigger.addCount = false;
											var stat = player.getStat('card');
											if (stat && stat.sha) stat.sha--;
										}
									},
									silent: true,
								},
							},
							ai: {
								order: 7,
							},
						},
						gt_qidong: {
							intro: {
								content: 'mark',
							},
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(event, player, target) {
								return player.canCompare(target);
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								var card = {
									name: 'sha',
									nature: 'stab',
									storage: { gt_rimu: true },
								};
								if (result.num1 <= result.num2) {
									player.useCard(card, player, false);
								}
								if (result.num1 >= result.num2) {
									player.useCard(card, target, false);
								}
							},
							group: ['gt_rimu_stab'],
							subSkill: {
								stab: {
									trigger: { source: 'damageBegin' },
									forced: true,
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.gt_rimu;
									},
									content() {
										if (trigger.player.countMark('gt_rimu')) {
											trigger.num++;
											trigger.player.removeMark('gt_rimu', 1);
										} else trigger.player.addMark('gt_rimu', 1);
									},
									silent: true,
								},
							},
							ai: {
								order(item, player) {
									return get.order({ name: 'sha', nature: 'stab' }, player);
								},
								result: {
									target(player, target) {
										var hs = player.getCards('h').sort(function (a, b) {
											return b.number - a.number;
										});
										var ts = target.getCards('h').sort(function (a, b) {
											return b.number - a.number;
										});
										if (!hs.length || !ts.length) return 0;
										if (hs[0].number > ts[0].number || hs[0].number - ts.length >= 9 + Math.min(2, player.hp / 2)) return get.sgnAttitude(player, target) * get.damageEffect(target, player, player);
										return 0;
									},
								},
							},
						},
						gt_shuangren: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							//forced:true,
							forced: true,
							trigger: {
								player: 'useCardToPlayered',
								target: 'useCardToTargeted',
							},
							filter(event, player) {
								if (!event.isFirstTarget && player != event.target) return false;
								if (get.color(event.card) != 'black') return false;
								return true;
								//var type=get.type(event.card);
								//return type=='basic'||type=='trick';
							},
							content() {
								player.draw();
							},
							//group:['gt_duoluo_use','gt_duoluo_mark'],
							intro: {
								content: '$',
							},
							subSkill: {
								used: {},
								use: {
									audio: 'gt_duoluo',
									enable: ['chooseToUse', 'chooseToRespond'],
									filter(event, player) {
										if (player.hasSkill('gt_duoluo_used')) return false;
										return player.storage.gt_duoluo && player.countCards('hes', { color: 'black' });
									},
									filterCard: { color: 'black' },
									selectCard: 1,
									position: 'hes',
									check(card) {
										return 6 - get.value(card);
									},
									viewAs(cards, player) {
										var name = player.storage.gt_duoluo.name;
										var nature = player.storage.gt_duoluo.nature;
										if (name) return { name: name, nature: nature };
										return null;
									},
									hiddenCard(player, name) {
										return player.storage.gt_duoluo && name == player.storage.gt_duoluo.name && player.countCards('hes', { color: 'black' });
									},
									onuse(result, player) {
										player.addTempSkill('gt_duoluo_used');
									},
									ai: {
										respondSha: true,
										respondShan: true,
										skillTagFilter(player, tag, arg) {
											var name = tag == 'respondSha' ? 'sha' : 'shan';
											return player.storage.gt_duoluo && name == player.storage.gt_duoluo.name && player.countCards('hes', { color: 'black' });
										},
										order: 4,
										result: {
											player(player) {
												if (_status.event.dying) return get.attitude(player, _status.event.dying);
												return 1;
											},
										},
									},
								},
								mark: {
									trigger: {
										player: ['useCard1', 'respond'],
										global: 'phaseBeginStart',
									},
									filter(event, player, name) {
										if (name == 'phaseBeginStart') return true;
										var type = get.type(event.card);
										return type == 'basic' || type == 'trick';
									},
									content() {
										if (event.triggername == 'phaseBeginStart') {
											delete player.storage.gt_duoluo;
											player.unmarkSkill('gt_duoluo');
										} else {
											player.storage.gt_duoluo = trigger.card;
											player.markSkill('gt_duoluo');
										}
									},
									silent: true,
									firstDo: true,
								},
							},
						},
						//62汐雅
						gt_paopao: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							chargeSkill: true,
							filter(event, player) {
								return player.countMark('charge');
							},
							filterTarget(event, player, target) {
								return target.isDamaged();
							},
							content() {
								player.removeMark('charge', 1);
								target.recover();
							},
							group: ['gt_paopao_charge'],
							subSkill: {
								charge: {
									trigger: {
										global: 'phaseBefore',
										player: 'enterGame',
									},
									forced: true,
									filter(event, player) {
										return event.name != 'phase' || game.phaseNumber == 0;
									},
									content() {
										player.addMark('charge', 10);
									},
								},
							},
							ai: {
								order: 6,
								result: {
									target: 1,
								},
							},
						},
						gt_shuibo: {
							global: 'gt_shuibo2',
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { global: 'recoverAfter' },
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							filter(event, player) {
								return event.source == player;
							},
							logTarget: 'player',
							content() {
								trigger.player.draw();
								trigger.player.link(false);
								trigger.player.turnOver(false);
							},
						},
						gt_shuibo2: {
							audio: 'gt_shuibo',
							//forceaudio:true,
							enable: 'phaseUse',
							usable: 1,
							prompt() {
								var player = _status.event.player;
								var list = game.filterPlayer(function (target) {
									return target.hasSkill('gt_shuibo', player);
								});
								var str = '将任意张牌交给' + get.translation(list);
								if (list.length > 1) str += '中的一人';
								return str;
							},
							filter(event, player) {
								return game.hasPlayer(function (target) {
									return target.hasSkill('gt_shuibo', player) && target != player && player.countCards('he') > 0;
								});
							},
							filterTarget(card, player, target) {
								return target.hasSkill('gt_shuibo', player) && target != player;
							},
							filterCard: lib.filter.cardDiscardable,
							discard: false,
							lose: false,
							delay: false,
							selectCard: [1, Infinity],
							position: 'he',
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.give(cards, target);
								('step 1');
								var num = cards.length;
								target.chooseCard('he', num, '交给' + get.translation(player) + '' + get.cnNumber(num) + '张牌,或取消并令其回复1点体力', player.isHealthy() ? true : false)
									.set('ai', function (card) {
										var att = get.attitude(target, player);
										if (player.isHealthy() || att < 0) {
											return 6 - get.value(card);
										}
										return -1;
									});//QQQ
								('step 2');
								if (result.cards?.length) {
									target.give(result.cards, player);
								} else player.recover(target);
							},
							ai: {
								order: 1,
								expose: 0.5,
								result: {
									player(player, target) {
										var target = game.findPlayer(function (current) {
											return current.hasSkill('gt_shuibo');
										});
										if (target) {
											return get.attitude(player, target);
										}
									},
								},
							},
						},
						gt_shuiyun: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								global: 'die',
							},
							check(event, player) {
								var recover = 0,
									lose = 0,
									players = game.filterPlayer();
								for (var i of players) {
									if (i != player && i.hp < i.maxHp) {
										if (get.attitude(player, i) > 0) {
											if (i.hp < 2) {
												recover += 0.5;
											}
											recover++;
										} else if (get.attitude(player, i) < 0) {
											if (i.hp < 2) {
												recover -= 0.5;
											}
											recover--;
										}
									}
								}
								if (recover > 0) return true;
								return false;
							},
							content() {
								'step 0';
								event.num = 0;
								event.players = game.filterPlayer();
								('step 1');
								if (event.num < event.players.length) {
									var target = event.players[event.num];
									if (target != player) {
										target.recover();
									}
									event.num++;
									event.redo();
								}
							},
						},
						//63SP艾米
						gt_nuqi: {
							marktext: '狂暴',
							intro: {
								content: '你使用牌无次数限制',
							},
							enable: 'phaseUse',
							//usable:1,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							chargeSkill: true,
							filter(event, player) {
								return player.countMark('charge') >= 4;
							},
							content() {
								var num = player.countMark('charge');
								player.removeMark('charge', 4);
								player.markSkill('gt_nuqi');
								player.storage.gt_nuqi = true;
							},
							group: ['gt_nuqi_charge', 'gt_nuqi_unmark'],
							subSkill: {
								charge: {
									audio: 'gt_nuqi',
									forced: true,
									trigger: {
										player: 'useCardToPlayered',
										target: 'useCardToTargeted',
									},
									filter(event, player) {
										if (!event.isFirstTarget && player != event.target) return false;
										if (player.storage.gt_nuqi) return false;
										return player.countMark('charge') < 4;
									},
									content() {
										if (!player.storage.gt_nuqi) {
											player.addMark('charge', 1);
										}
										//else trigger.directHit.addArray(game.players);
									},
									mod: {
										cardUsable(card, player) {
											if (player.storage.gt_nuqi) return Infinity;
										},
									},
								},
								unmark: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									filter(event, player) {
										return player.storage.gt_nuqi;
									},
									content() {
										delete player.storage.gt_nuqi;
										player.unmarkSkill('gt_nuqi');
									},
								},
							},
							ai: {
								//threaten:2,
								order: 10,
								result: {
									player(player, target) {
										return player.countCards('h', function (card) {
											return player.hasValueTarget(card, null, true);
										});
									},
								},
							},
						},
						gt_nuhuo: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								player: 'damageBegin',
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player, target) {
								if (!player.storage.gt_nuqi) return player == event.player;
								return player == event.source;
							},
							content() {
								var num = player.getDamagedHp();
								player.draw(player.storage.gt_nuqi == true ? num : 1);
							},
							ai: {
								//threaten:1.5,
								//maixie:true,
							},
						},
						//65SP夏皮拉
						gtold_shachan: {
							marktext: '沙铲',
							intro: {
								name: '铲',
								content: 'expansion',
								markcount: 'expansion',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return player.countCards('he') && player.getExpansions('gt_shachan').length < 3;
							},
							content() {
								'step 0';
								player.chooseCard('将一张手牌置于武将牌上作为<沙铲>').set('ai', function (card) {
									var player = _status.event.player;
									var value = Math.max(get.value(card), get.equipValue(card));
									return 6 - value;
								});
								('step 1');
								if (result.cards?.length) {
									player.addToExpansion(result.cards, player, 'giveAuto').gaintag.add('gt_shachan');
								}
							},
							group: 'gtold_shachan2',
							//derivation:'gt_baofa',
						},
						gtold_shachan2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								return player.getExpansions('gt_shachan').length && event.filterCard({ name: 'sha' }, player, event);
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog('沙铲', player.getExpansions('gt_shachan'), 'hidden');
								},
								filter(button, player) {
									var card = button.link;
									if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
									var evt = _status.event.parent;
									return evt.filterCard({ name: 'sha' }, player, evt);
								},
								backup(links, player) {
									return {
										audio: 'gt_shachan2',
										selectCard: -1,
										position: 'x',
										filterCard: (card) => card == lib.skill.gt_shachan2_backup.card,
										viewAs: {
											name: 'sha',
											nature: 'stab',
										},
										card: links[0],
									};
								},
								prompt(links, player) {
									return '选择【杀】(' + get.translation(links[0]) + ')的目标';
								},
							},
							ai: {
								respondSha: true,
								order() {
									return get.order({ name: 'sha' }) + 0.1;
								},
								result: {
									player: 1,
								},
								//threaten:1.3,
							},
						},
						gt_shachan: {
							marktext: '铲',
							intro: {
								name: '沙铲',
								content: 'mark',
								markcount: 'mark',
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return player.countMark('gt_shachan') < 3;
							},
							content() {
								player.addMark('gt_shachan', 1);
							},
							group: 'gt_shachan2',
							//derivation:'gt_baofa',
						},
						gt_shachan2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								return player.countMark('gt_shachan') && event.filterCard({ name: 'sha', nature: 'stab' }, player, event);
							},
							filterCard: lib.filter.cardDiscardable,
							check(card) {
								return 5 - get.value(card);
							},
							selectCard: 1,
							position: 'hes',
							viewAs: {
								name: 'sha',
								nature: 'stab',
								//storage:{gt_shachan2:true},
							},
							precontent() {
								player.removeMark('gt_shachan', 1);
							},
							ai: {
								respondSha: true,
								order() {
									return get.order({ name: 'sha' });
								},
								result: {
									player: 1,
								},
								//threaten:1.3,
							},
						},
						gt_xiari: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + player.countMark('gt_shachan');
								},
							},
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { source: 'damageSource' },
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('gt_xiari'), '与一名光属性角色各摸一张牌')
									.set('filterTarget', function (card, player, target) {
										return target.group == 'gt_guang';
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.draw();
									result.targets[0].draw();
								}
							},
						},
						gtold_xiari: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								//if(player.isTurnedOver()) return false;
								return true;
							},
							filterTarget(card, player, target) {
								return true;
							},
							content() {
								player.turnOver();
								target.damage();
							},
							group: 'gt_xiari2',
							ai: {
								order: 1,
								result: {
									target: -1,
								},
								//threaten:1.5
							},
						},
						gt_xiari2: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'turnOverEnd' },
							filter(event, player) {
								//if(player.isTurnedOver()) return false;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('gt_xiari'), '与一名光属性角色各摸一张牌')
									.set('filterTarget', function (card, player, target) {
										return target.group == 'gt_guang';
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.draw();
									result.targets[0].draw();
								}
							},
						},
						//sr
						//5卡瑞娜
						gt_jicheng: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							charlotte: true,
							group: ['gt_jicheng_swap'],
							async content(event, trigger, player) {
								player.addFellow('gt_xialuote');
							},
							ai: {
								order: 17,
								result: {
									player: 1,
								},
							},
							group: ['gt_jicheng_1'],
							subSkill: {
								1: {
									audio: 'ext:坎公骑冠剑/audio/character:2',
									trigger: {
										target: 'useCardToTarget',
									},
									filter(event, player) {
										return game.players.some((q) => q.hasSkill('gte_xieyue') && q != player);
									},
									forced: true,
									async content(event, trigger, player) {
										const npc = game.players.find((q) => q.hasSkill('gte_xieyue') && q != player);
										const evt = trigger.parent;
										evt.targets.remove(player);
										evt.targets.push(npc);
									},
								}
							}
						},
						gt_shuangyue: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							charlotte: true,
							filter(event, player) {
								if (player.name2 && player.name2.indexOf('gz_shibing') != 0) return false;
								return true;
							},
							content() {
								//player.awakenSkill('gt_shuangyue');
								player.loseHp();
								player.name2 = 'gt_she'; //赋值白板武将
								player.classList.add('fullskin2');
								player.reinit(player.name2, 'gt_xialuote', [player.hp, player.maxHp]);
								lib.character[player.name2][1] = player.group;
								player.node.avatar2.show();
							},
							ai: {
								order: 17,
								result: {
									player(player) {
										if (player.hp < 2) return -1;
										return 1;
									},
								},
							},
						},
						gt_xieyue: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							forced: true,
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								if (player.hasSkill('gt_xieyue_used')) return false;
								if (!event.source) return false;
								return get.distance(player, event.source) <= 1;
								//return event.player!=player;
								//return true;
							},
							content() {
								'step 0';
								var controls = ['draw_card', 'recover_hp', 'cancel2'];
								if (player.isHealthy() || trigger.source != player) controls.remove('recover_hp');
								player
									.chooseControl(controls, function (event, player) {
										var player = _status.event.player;
										var att = get.attitude(player, trigger.source);
										if (controls.includes('recover_hp') && player.isDamaged() && get.recoverEffect(player) > 0 && (player.hp == 1 || player.needsToDiscard() || player.hasSkillTag('maixie_hp'))) {
											return 'recover_hp';
										}
										if (att > -3) {
											return 'draw_card';
										}
										return 'cancel2';
									})
									.set('prompt', get.prompt2('gt_xieyue'));
								('step 1');
								if (result.control != 'cancel2') {
									player.addTempSkill('gt_xieyue_used');
									if (result.control == 'draw_card') {
										player.draw();
										trigger.source.draw();
									} else {
										player.recover();
										player.draw();
									}
								}
							},
							subSkill: {
								used: {},
							},
							ai: {
								expose: 0.2,
								//threaten:1.3,
							},
						},
						gtre_xieyue: {
							audio: 'gt_xieyue',
							forced: true,
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								if (player.hasSkill('gtre_xieyue_used')) return false;
								if (!event.source) return false;
								return get.distance(player, event.source) <= 1;
							},
							content() {
								'step 0';
								var controls = ['draw_card', 'recover_hp', 'cancel2'];
								if (player.isHealthy() || trigger.source != player) controls.remove('recover_hp');
								player
									.chooseControl(controls, function (event, player) {
										var player = _status.event.player;
										var att = get.attitude(player, trigger.source);
										if (controls.includes('recover_hp') && player.isDamaged() && get.recoverEffect(player) > 0 && (player.hp == 1 || player.needsToDiscard() || player.hasSkillTag('maixie_hp'))) {
											return 'recover_hp';
										}
										if (att > -5) {
											return 'draw_card';
										}
										return 'cancel2';
									})
									.set('prompt', get.prompt2('gtre_xieyue'));
								('step 1');
								if (result.control != 'cancel2') {
									player.addTempSkill('gtre_xieyue_used');
									if (result.control == 'draw_card') {
										player.draw(2);
									} else {
										player.recover();
										player.draw();
										event.finish();
									}
								} else event.finish();
								('step 2');
								var cards = player.getCards('he');
								if (cards.length && trigger.source != player && trigger.source.isAlive()) {
									if (cards.length == 1) event._result = { bool: true, cards: cards };
									else player.chooseCard('he', '血月:交给' + get.translation(trigger.source) + '一张牌', true);
								}
								('step 3');
								if (result.cards?.length) {
									player.give(result.cards, trigger.source);
								}
							},
							subSkill: {
								used: {},
							},
							ai: {
								expose: 0.2,
								//threaten:1.3,
							},
						},
						gte_xieyue: {
							audio: 'gt_xieyue',
							usable: 1,
							//frequent:true,
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								if (!event.source) return false;
								return get.distance(player, event.source) <= 1;
								//return event.player != player;
							},
							check(event, player) {
								if (player.isPhaseUsing()) return true;
								return get.attitude(player, event.source) > -3;
							},
							logTarget: 'source',
							content() {
								player.draw();
								trigger.source.draw();
							},
							ai: {
								expose: 0.2,
								//threaten:1.3,
							},
						},
						old_yongheng: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								player: 'dying',
							},
							filter(event, player) {
								if (player.isTurnedOver()) return false;
								return true;
							},
							content() {
								'step 0';
								player.recover();
								player.turnOver();
								('step 1');
								player.chooseToUse(function (card, player, event) {
									if (!get.tag(card, 'damage')) return false;
									return lib.filter.filterCard.apply(this, arguments);
								}, '永恒:使用一张伤害类牌');
								('step 2');
								var bool = game.hasPlayer2(function (current) {
									return (
										current.getHistory('damage', function (evt) {
											return evt.getParent(4) == event;
										}).length
									);
								});
								if (bool) player.turnOver();
							},
						},
						gt_yongheng: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'chooseToUse',
							//round: 6,
							sunbenSkill: true,
							filter(event, player) {
								if (player.isTurnedOver()) return false;
								if (event.type == 'dying') {
									if (player != event.dying) return false;
									return !player.hasSkill('gt_yongheng_sunben');
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.recover(2);
								('step 1');
								player.addSkill('gt_yongheng_sunben');
							},
							subSkill: {
								sunben: {
									charlotte: true,
									init(player) {
										player.storage.gt_yongheng_sunben = 0;
									},
									mark: true,
									intro: {
										markcount(num) {
											return (num || 0).toString();
										},
										content: '回血进度:#/6',
									},
									trigger: {
										player: 'recoverAfter',
									},
									filter(event, player) {
										return true;
									},
									forced: true,
									popup: false,
									firstDo: true,
									content() {
										'step 0';
										player.addMark('gt_yongheng_sunben', trigger.num, false);
										('step 1');
										if (player.countMark('gt_yongheng_sunben') >= 6) {
											player.removeSkill('gt_yongheng_sunben');
											player.popup('永恒');
											game.log(player, '回复了技能', '#g【永恒】');
										}
									},
								},
							},
							ai: {
								order: 1,
								skillTagFilter(player, arg, target) {
									if (player.isTurnedOver()) return false;
								},
								save: true,
								result: {
									player(player) {
										if (player.hp <= 0) return 10;
										if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
										return 0;
									},
								},
							},
						},
						gte_yongheng: {
							audio: 'gt_yongheng',
							enable: 'chooseToUse',
							filter(event, player) {
								if (player.isTurnedOver()) return false;
								if (event.type == 'dying') {
									if (player != event.dying) return false;
									return true;
								}
								return false;
							},
							content() {
								player.recover();
								if (lib.character[player.name1][3].includes('gte_yongheng')) {
									player.name1 = 'gt_she';
									player.classList.add('fullskin2');
									var to = 'gz_shibing' + (lib.character[player.name1][0] == 'male' ? 1 : 2) + lib.character[player.name1][1];
									player.reinit(player.name1, to, [player.hp, player.maxHp]);
									lib.character[player.name1][1] = player.group;
									player.removeSkill(lib.character[player.name1][3].slice(0));
									player.node.avatar2.show();
									game.log(player, '移除了主将', '#g' + get.translation(player.name1));
								}
								if (lib.character[player.name2][3].includes('gte_yongheng')) {
									//player.name2='gt_she'
									player.classList.add('fullskin2');
									var to = 'gz_shibing' + (lib.character[player.name2][0] == 'male' ? 1 : 2) + lib.character[player.name2][1];
									player.removeSkill(lib.character[player.name2][3].slice(0));
									player.reinit(player.name2, to, [player.hp, player.maxHp]);
									lib.character[player.name2][1] = player.group;
									player.node.avatar2.show();
									game.log(player, '移除了副将', '#g' + get.translation(player.name2));
								}
							},
							ai: {
								order: 1,
								skillTagFilter(player, arg, target) {
									if (player.isTurnedOver()) return false;
								},
								save: true,
								result: {
									player(player) {
										if (player.hp <= 0) return 10;
										if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
										return 0;
									},
								},
							},
						},
						//15索菲
						gt_jiguang: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								//if(player==target) return false;
								//var next=player.next,prev=player.previous;
								var selected = ui.selected.targets;
								//if(!selected.includes(next)&&!selected.includes(prev)) return (target==next||target==prev);
								if (ui.selected.targets.length) {
									for (var i of selected) {
										if (i.next == target || i.previous == target) return true;
									}
									return false;
								}
								return true;
							},
							filterCard(card, player) {
								return true;
							},
							position: 'he',
							complexSelect: true,
							complexCard: true,
							complexTarget: true,
							selectCard: [1, Infinity],
							selectTarget() {
								return [ui.selected.cards.length, ui.selected.cards.length];
							},
							check(card) {
								var player = _status.event.player;
								if (
									ui.selected.cards.length <
									game.countPlayer(function (current) {
										return get.attitude(player, current) < 0;
									})
								)
									return 6 - get.value(card);
								return -get.value(card);
							},
							//line:'thunder',
							content() {
								target.damage(1, 'thunder');
							},
							ai: {
								order: 6,
								result: {
									target(player, target) {
										return -1;
									},
								},
							},
						},
						gt_dianci: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							filter(event, player) {
								return event.player.group == 'gt_an';
							},
							trigger: {
								source: 'damageSource',
							},
							forced: true,
							content() {
								player.draw(2);
							},
							ai: {
								expose: 0.2,
								//threaten:1.3,
							},
						},
						//18克雷格
						gt_zhanhou: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return player.isDamaged();
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('gt_zhanhou'), '令至多' + get.cnNumber(player.getDamagedHp()) + '名角色各摸一张牌', [1, player.getDamagedHp()], function (card, player, target) {
										return true;
										//return target.isDamaged();
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									game.asyncDraw(result.targets);
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
								//threaten:0.6,
							},
						},
						gtnew_zhanhou: {
							audio: 'gt_zhanhou',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.isDamaged();
							},
							filterTarget(card, player, target) {
								return true;
							},
							selectTarget() {
								return [1, _status.event.player.getDamagedHp()];
							},
							content() {
								target.draw();
							},
							group: 'gt_zhanhou',
							ai: {
								expose: 0.5,
								order: 9,
								result: {
									target: 1,
								},
							},
						},
						gtre_zhanhou: {
							audio: 'gt_zhanhou',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return player.isDamaged();
							},
							forced: true,
							content() {
								'step 0';
								event.cards = game.cardsGotoOrdering(get.cards(player.getDamagedHp())).cards;
								if (_status.connectMode)
									game.broadcastAll(function () {
										_status.noclearcountdown = true;
									});
								event.given_map = {};
								('step 1');
								if (event.cards.length) {
									player.chooseCardButton('战吼:请选择要分配的牌', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
										if (ui.selected.buttons.length == 0) return 1;
										return 0;
									});
								} else {
									event.finish();
								}
								('step 2');
								if (result.links?.length) {
									event.cards.removeArray(result.links);
									event.togive = result.links.slice(0);
									player
										.chooseTarget('选择一名角色获得' + get.translation(result.links), true)
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
										.set('enemy', get.value(event.togive[0], player, 'raw') < 0);
								}
								('step 3');
								if (result.targets?.length) {
									var id = result.targets[0].playerid,
										map = event.given_map;
									if (!map[id]) map[id] = [];
									map[id].addArray(event.togive);
								}
								if (cards.length) event.goto(1);
								('step 4');
								if (_status.connectMode) {
									game.broadcastAll(function () {
										delete _status.noclearcountdown;
										game.stopCountChoose();
									});
								}
								var list = [];
								for (var i in event.given_map) {
									var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
									player.line(source, 'green');
									list.push([source, event.given_map[i]]);
								}
								game.loseAsync({
									gain_list: list,
									giver: player,
									animate: 'draw',
								}).setContent('gaincardMultiple');
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
								//threaten:0.6,
							},
						},
						gt_baohu: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							//usable:1,
							//frequent:true,
							trigger: {
								global: 'damageBegin4',
							},
							filter(event, player) {
								return event.player != player && event.player.hp < player.hp && player.inRange(event.player);
							},
							check(event, player) {
								//if(player.isPhaseUsing()) return true;
								return get.attitude(player, event.player) > 3;
							},
							content() {
								trigger.player = player;
							},
							ai: {
								expose: 0.5,
								//threaten:1.3,
							},
						},
						gtre_baohu: {
							audio: 'gt_baohu',
							//usable:1,
							//frequent:true,
							trigger: {
								global: 'damageBegin4',
							},
							filter(event, player) {
								return event.player != player && event.player.hp <= player.hp;
							},
							check(event, player) {
								//if(player.isPhaseUsing()) return true;
								return get.attitude(player, event.player) > 3;
							},
							content() {
								trigger.player = player;
							},
							ai: {
								expose: 0.5,
								//threaten:1.3,
							},
						},
						//19赤雪
						oldgt_feiyan: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'useCardToPlayered' },
							filter(event, player) {
								if (event.card.storage && event.card.storage.gt_feiyan) return false;
								var type = get.type(event.card, false);
								if (type != 'basic' && type != 'trick') return false;
								return player.isPhaseUsing();
							},
							prompt2(event) {
								return '令' + get.translation(event.card) + '额外结算一次,本回合不能再使用牌';
							},
							check(event, player) {
								return (
									!get.tag(event.card, 'norepeat') &&
									!player.countCards('h', function (card) {
										return player.hasValueTarget(card, null, true);
									})
								);
							},
							content() {
								player.addTempSkill('gt_feiyan_buff');
								trigger.parent.gt_feiyan_buff = [
									{
										name: trigger.card.name,
										nature: trigger.card.nature,
										storage: { gt_feiyan: true },
									},
									1,
								];
							},
							subSkill: {
								buff: {
									trigger: { player: 'useCardAfter' },
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.gt_feiyan_buff != undefined;
									},
									content() {
										'step 0';
										event.card = trigger.gt_feiyan_buff[0];
										event.count = trigger.gt_feiyan_buff[1];
										('step 1');
										event.count--;
										for (var i of trigger.targets) {
											if (!i.isIn() || !player.canUse(card, i, false)) return;
										}
										if (trigger.addedTarget && !trigger.addedTarget.isIn()) return;
										if (trigger.addedTargets && trigger.addedTargetfs.length) {
											for (var i of trigger.addedTargets) {
												if (!i.isIn()) return;
											}
										}
										var next = player.useCard(get.copy(card), trigger.targets, false);
										if (trigger.addedTarget) next.addedTarget = trigger.addedTarget;
										if (trigger.addedTargets && trigger.addedTargets.length) next.addedTargets = trigger.addedTargets.slice(0);
										if (event.count > 0) event.redo();
										('step 2');
										player.addTempSkill('gt_feiyan_debuff');
									},
								},
								debuff: {
									mod: {
										cardEnabled(card, player) {
											return false;
										},
									},
								},
							},
						},
						gt_feiyan: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'useCard' },
							filter(event, player) {
								var type = get.type(event.card, false);
								if (type != 'basic' && type != 'trick') return false;
								return player.isPhaseUsing();
							},
							prompt2(event) {
								return '令' + get.translation(event.card) + '额外结算一次,本回合不能再使用牌';
							},
							check(event, player) {
								return (
									!get.tag(event.card, 'norepeat') &&
									!player.countCards('h', function (card) {
										return player.hasValueTarget(card, null, true);
									})
								);
							},
							content() {
								player.addTempSkill('gt_feiyan_debuff');
								trigger.effectCount++;
								game.log(trigger.card, '额外结算一次');
							},
							subSkill: {
								debuff: {
									mod: {
										cardEnabled(card, player) {
											return false;
										},
									},
								},
							},
						},
						gt_douzhi: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:坎公骑冠剑/audio/character:2',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(event, player, target) {
								return player.canCompare(target);
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									player.chooseToDiscard('he', 2, true);
									target.turnOver();
								} else if (result.tie) {
									player.turnOver();
									target.turnOver();
								} else {
									target.chooseToDiscard('he', 2, true);
									player.turnOver();
								}
							},
							ai: {
								order: 2,
								result: {
									target(player, target) {
										if (
											!player.hasCard(function (card) {
												if (get.position(card) != 'h') return false;
												var val = get.value(card);
												if (val < 0) return true;
												if (val <= 5) {
													return card.number >= 11;
												}
												if (val <= 6) {
													return card.number >= 13;
												}
												return false;
											})
										)
											return 0;
										if (target.isTurnedOver()) return 1;
										return -1;
									},
								},
							},
						},
						gt_nixi: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { source: 'damageSource' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								player.draw(2);
								var cards = player.getCards('he', (card) => lib.filter.cardDiscardable(card, player, trigger.name));
								player.discard(cards.randomGet());
							},
						},
						//26艾米
						spgt_kuangnu: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							usable: 5,
							filter(event, player) {
								return true;
							},
							content() {
								player.draw();
								player.chooseToDiscard('he', true).set('ai', function (card) {
									if (!player.hasValueTarget(card)) return 8 - get.value(card);
									return 6 - get.value(card);
								});
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
								//threaten:1.5
							},
						},
						gt_kuangnu: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								var num = player.hasSkill('gt_kuangbao_effect') ? 2 : 1;
								player.draw(num);
								player.chooseToDiscard('he', true);
								('step 1');
								if (get.color(result.cards) == 'black') trigger.directHit.addArray(game.players);
							},
						},
						gt_kuangbao: {
							audio: 'ext:坎公骑冠剑/audio/character:2',
							trigger: { source: 'dieAfter' },
							forced: true,
							filter(event, player) {
								return !player.hasSkill('gt_kuangbao_effect');
							},
							content() {
								player.addSkill('gt_kuangbao_effect');
							},
							subSkill: {
								effect: {
									mod: {
										cardUsable(card, player) {
											return Infinity;
										},
									},
									mark: true,
									intro: {
										content: '你使用牌无次数限制,〖狂怒〗摸牌数+1',
									},
									trigger: { player: 'phaseBegin' },
									forced: true,
									filter(event, player) {
										return true;
									},
									content() {
										player.removeSkill('gt_kuangbao_effect');
									},
								},
							},
						},
						sp_kuangbao: {
							intro: { content: '已记录数字:$' },
							audio: 'ext:坎公骑冠剑/audio/character:2',
							enable: 'phaseUse',
							content() {
								'step 0';
								player.loseHp();
								('step 1');
								var list = [
									'摸X张牌',
									'本回合第X张牌伤害+X',
									'本回合第X张牌可以额外指定X名角色',
									//'当XXX造成伤害时摸牌',
								],
									num = player.getDamagedHp(),
									num2 = player.getHistory('useCard').length;
								if (!player.storage.sp_kuangbao) player.storage.sp_kuangbao = [];
								player.storage.sp_kuangbao.add(num);
								player.markSkill('sp_kuangbao');
								for (var i = 0; i < list.length; i++) {
									list[i] = [i, list[i].replace(/X/g, num)];
								}
								var next = player.chooseButton(['狂暴:请选择至多' + get.cnNumber(num) + '项', [list, 'textbutton']]);
								next.set('forced', true);
								next.set('selectButton', [1, num]);
								next.set('filterButton', function (button) {
									return true;
								});
								next.set('ai', function (button) {
									var player = _status.event.player;
									var event = _status.event.getTrigger();
									switch (button.link) {
										case 0: {
											return num + Math.random();
										}
										case 1: {
											return (
												player.countCards('h', function (card) {
													return player.hasValueTarget(card, null, true);
												}) -
												num +
												num2 +
												Math.random()
											);
										}
										case 2: {
											return (
												player.countCards('h', function (card) {
													return player.hasValueTarget(card, null, true);
												}) -
												num +
												num2 +
												Math.random()
											);
										}
									}
								});
								('step 2');
								var map = [
									function (trigger, player, event) {
										player.draw(player.getDamagedHp());
									},
									function (trigger, player, event) {
										player.addTempSkill('sp_kuangbao_damage');
									},
									function (trigger, player, event) {
										player.addTempSkill('sp_kuangbao_target');
									},
								];
								for (var i of result.links) {
									game.log(player, '选择了', '#g【狂暴】', '的', '#y选项' + get.cnNumber(i + 1, true));
									map[i](trigger, player, event);
								}
								if (!result.links.includes(0)) event.finish();
							},
							group: ['sp_kuangbao_count', 'sp_kuangbao_count'],
							subSkill: {
								count: {
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										var num = player.getHistory('useCard').length;
										return player.getStorage('sp_kuangbao').includes(num) && event.cards.length;
									},
									content() {
										trigger.card.storage.sp_kuangbao = true; //标记狂暴牌
									},
									silent: true,
									forced: true,
									popup: false,
								},
								damage: {
									trigger: { source: 'damageBegin1' },
									filter(event, player) {
										return event.card && event.card.storage && event.card.storage.sp_kuangbao;
									},
									forced: true,
									content() {
										trigger.num += player.getHistory('useCard').length;
									},
									silent: true,
									forced: true,
									popup: false,
								},
								target: {
									mod: {
										selectTarget(card, player, range) {
											if (card.storage && card.storage.sp_kuangbao && range[1] != -1) range[1] += player.getHistory('useCard').length;
										},
									},
									silent: true,
									forced: true,
									popup: false,
								},
								unmark: {
									trigger: {
										player: 'phaseEnd',
									},
									filter(event, player) {
										return player.storage.sp_kuangbao;
									},
									content() {
										delete player.storage.sp_kuangbao;
										player.unmarkSkill('sp_kuangbao');
									},
									silent: true,
									forced: true,
									popup: false,
								},
							},
							ai: {
								basic: {
									order: 1,
								},
								result: {
									player(player) {
										if (player.countCards('h') >= player.hp - 1) return -1;
										if (player.hp < 3) return -1;
										return 1;
									},
								},
							},
						},
					},
				};
				for (var i in kgqgj.character) {
					kgqgj.character[i][4].push('ext:坎公骑冠剑/image/character/' + i + '.jpg'); //标准插画
					kgqgj.character[i][4].push('die:ext:坎公骑冠剑/audio/character/' + i + '.mp3'); //死亡语音
				}
				lib.config.all.characters.add('kgqgj');
				lib.config.characters.add('kgqgj');
				lib.translate.kgqgj_character_config = '坎公骑冠剑';
				return kgqgj;
			});
			game.import('card', function () {
				var kgqgj = {
					name: 'kgqgj', //卡包命名
					connect: true, //卡包是否可以联机
					card: {
						//24维罗妮卡
						gt_shengyin_card: {
							fullskin: true,
							type: 'delay',
							wuxieable: false,
							modTarget(card, player, target) {
								return lib.filter.judge(card, player, target);
							},
							enable(card, player) {
								return player.canAddJudge(card);
							},
							filterTarget(card, player, target) {
								return lib.filter.judge(card, player, target) && player == target;
							},
							judge(card) {
								if (get.color(card) == 'red') return 0;
								return -4;
							},
							effect() {
								var source = cards[0].storage.gt_shengyin;
								//if(!source||!source.isAlive()) return;
								if (result.color == 'black') {
									source.line(player, 'thunder');
									player.damage(source, 1, 'thunder');
									//player.chooseToDiscard('he',true);
								}
							},
							ai: {
								basic: {
									order: 1,
									useful: 0,
									value: 0,
								},
								result: {
									target: -1,
								},
								tag: {
									// damage:1,
									// natureDamage:1,
									// thunderDamage:1,
								},
							},
						},
						//欢迎我公主
						gt_welcome: {
							type: 'gt_magic',
							//mode: ['identity', 'guozhan'],
							fullskin: true,
							image: 'ext:坎公骑冠剑/image/card/gt_welcome.png', //图片
							//以下与一般卡牌一样
							enable() {
								return false;
							},
							savable(card, player, dying) {
								return dying != game.boss;
							},
							selectTarget: -1,
							filterTarget(card, player, target) {
								return false;
							},
							content() {
								'step 0';
								target.link(false);
								target.turnOver(false);
								target.recover(target.maxHp - target.hp);
								target.discard(target.getCards('j'));
								game.log(card, '被销毁了');
								('step 1');
								const evt = _status.event.getParent('phase');
								if (evt && evt.name) {
									evt.finish();
								}
								target.phase('nodelay');
							},
							ai: {
								basic: {
									useful(card, i) {
										if (_status.event.player == game.boss) {
											return 0;
										}
										return 8;
									},
									value(card, player, i) {
										if (player == game.boss) {
											return 0;
										}
										return 8;
									},
								},
								order() {
									return get.order({ name: 'tao' }) + 0.2;
								},
								result: {
									target: 2,
									target_use(player, target) {
										// if(player==target&&player.hp<=0) return 2;
										if (player.hasSkillTag('nokeep', true, null, true)) return 2;
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
												if (player == target) return 2;
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
							},
						},
						//向我微笑未来公主
						gt_smile: {
							type: 'gt_magic',
							fullskin: true,
							enable: true,
							image: 'ext:坎公骑冠剑/image/card/gt_smile.png', //卡牌图片
							filterTarget(card, player, target) {
								return target != game.boss;
							},
							content() {
								target.addMark('gt_pingzhang', 1);
								target.addSkill('gt_pingzhang2');
							},
							ai: {
								order: 5,
								basic: {
									useful(card, i) {
										if (_status.event.player == game.boss) {
											return 0;
										}
										return 5;
									},
									value(card, player, i) {
										if (player == game.boss) {
											return 0;
										}
										return 5;
									},
								},
								result: {
									target: 1.5,
								},
							},
						},
						//解放者
						gt_jiefangzhe: {
							fullskin: true,
							enable: true,
							image: 'ext:坎公骑冠剑/image/card/gt_jiefangzhe.png',
							type: 'equip',
							subtype: 'equip1',
							distance: { attackFrom: -3 },
							ai: {
								equipValue(card, player) {
									if (player.name1 == 'gt_weilaigongzhu') return 6;
								},
								basic: {
									equipValue: 2,
								},
							},
							skills: ['gt_jiefangzhe_skill'],
						},
						//红莲
						gt_honglian: {
							fullskin: true,
							enable: true,
							image: 'ext:坎公骑冠剑/image/card/gt_honglian.png',
							type: 'equip',
							subtype: 'equip1',
							distance: { attackFrom: -1 },
							ai: {
								equipValue(card, player) {
									if (player.name1 == 'gt_lin') return 6;
								},
								basic: {
									equipValue: 2,
								},
							},
							skills: ['gt_honglian_skill'],
						},
					}, //卡格式
					skill: {
						gt_jiefangzhe_skill: {
							equipSkill: true,
							audio: true,
							forced: true,
							trigger: {
								target: 'useCardToTargeted',
							},
							filter(event, player) {
								if (!(event.card.name == 'sha' && player.isPhaseUsing())) return false;
								return player.name1 == 'gt_weilaigongzhu';
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('gt_pingzhang'), '令一名角色获得1个<屏障>').set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
									event.bool = false;
									event.target.addMark('gt_pingzhang', 1);
									event.target.addSkill('gt_pingzhang2');
								} else {
									event.finish();
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'sha' && target.isPhaseUsing()) return [1, 0];
									},
								},
							},
						},
						gt_honglian_skill: {
							equipSkill: true,
							audio: true,
							forced: true,
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								if (event.card && get.nature(event.card) == 'fire') {
									return player.name1 == 'gt_lin';
								}
								return false;
							},
							content() {
								trigger.player.loseHp();
							},
							ai: {
								//threaten:1.2,
							},
						},
					}, //技能
					translate: {
						//衍生
						gt_shengyin_card: '圣印',
						gt_shengyin_card_info: '此牌不可被【无懈可击】响应.若判定结果为黑色,你受到使用者造成的1点雷电伤害.',
						//魔卡
						gt_magic: '魔卡',
						gt_welcome: '欢迎我公主',
						gt_welcome_info: '对一名处于濒死状态的角色使用,令其回复体力至上限并立即开始其的回合.(使用后销毁)',
						gt_smile: '向我微笑未来公主',
						gt_smile_info: '出牌阶段,对一名角色使用,令其获得一个<屏障>标记.',
						gt_jiefangzhe: '解放者',
						gt_jiefangzhe_info: '(未来公主专属)出牌阶段,当你成为【杀】的目标时,你可以令一名角色获得一个<屏障>.',
						gt_jiefangzhe_skill: '解放者',
						gt_honglian: '红莲',
						gt_honglian_info: '(醉刀仙琳专属)当你对一名角色造成火焰伤害后,其失去1点体力.',
						gt_honglian_skill: '红莲',
					}, //翻译
				};
				lib.translate.kgqgj_card_config = '坎公骑冠剑';
				lib.config.all.cards.add('kgqgj');
				lib.config.cards.add('kgqgj');
				return kgqgj;
			});
		},
		config: {
			死亡移除: {
				name: '<span class="Qmenu">死亡移除</span>',
				intro: '死亡后移出游戏',
				init: true,
				onclick(result) {
					game.saveConfig('dieremove', result);
				},
			},
			gt_wu_chooseGroup: {
				name: '无属性角色开局选属性',
				intro: '无属性角色开局选择一种属性(火、土、水、光、暗、虚)',
				init: true,
			},
			gt_boss_intro: {
				name: '剧情模式',
				intro: '开启后BOSS战会附带简略剧情',
				init: false,
				onclick(item) {
					game.saveConfig('extension_坎公骑冠剑_gt_boss_intro', item);
					game.saveConfig('gt_boss_intro', item);
				},
			},
			gt_bgm: {
				name: '坎公BGM',
				init: lib.config.gt_bgm !== undefined ? lib.config.ark_backgroundmusic : 'origin',
				item: {
					origin: '默认',
					bgm_admiral: '海军舰长',
					bgm_aisha: '阿伊莎',
					bgm_alchemist: '炼金术士',
					bgm_aprilfoolsday: '愚人节',
					bgm_bari_theme: '芭莉',
					bgm_craig: '克雷格',
					bgm_darkmagician: '黑暗魔法师',
					bgm_flaming_castle: '燃烧的城堡',
					bgm_flaming_castle_02: '燃烧的城堡2',
					bgm_idol: '塞西尔',
					bgm_idol_lyric: '塞西尔的吟唱',
					bgm_idol_panorama_01: '塞西尔的讲述1',
					bgm_idol_panorama_02: '塞西尔的讲述2',
					bgm_iron_teatan: '钢铁泰坦',
					bgm_kk_01: '欢快的主题曲',
					bgm_lana: '拉娜',
					bgm_little_princess: '小公主',
					bgm_little_princess_02: '小公主2',
					bgm_lynn_theme: '琳',
					bgm_marian: '玛丽娜',
					bgm_marvin: '马修',
					bgm_messiah_theme: '天神/救世主',
					bgm_oasis: '沙漠绿洲',
					bgm_pirate: '海贼',
					bgm_trio: '疯狂熊猫三人组',
					bgm_trio_non_fight: '疯狂熊猫三人组休战',
				},
				onclick(item) {
					game.saveConfig('extension_坎公骑冠剑_gt_bgm', item);
					game.saveConfig('gt_bgm', item);
					game.gt_bgm();
					ui.backgroundMusic.addEventListener('ended', game.gt_bgm);
				},
			},
		},
		package: {
			intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br>坎公扩展交流群386095671',
			author: '残荷',
			version: '2.4.0',
			changeLog: 'v2.4.0<br>2024年6月8日更新<br>新增:第一军团军长 <br>坎公扩展交流群386095671',
			// "v2.3.0<br>2024年3月10日更新<br>新增:无 <br>修改:<br>1.卡瑞娜:【血月】新增距离限制、【永恒】更改为昂扬技<br>2.哈娜:【不灭】更改为昂扬技<br>其他问题修复与优化<br>坎公扩展交流群386095671",
			// "坎公扩展V2.2.0<br>2023年10月11日更新<br>1.新增疯狂熊猫团、白雪、SP夏皮拉<br>2.其他技能调整和bug修复<br>坎公扩展交流群386095671",
			// "坎公扩展V2.1.0<br>2023年8月1日更新<br>1、修改AA72〖水枪〗、安德拉斯〖屠戮〗、堇〖忍术〗、哈娜〖不灭〗<br>2、重做兰儿、克罗姆、升阶卡瑞娜<br>3、新增奥尔卡、欧格玛<br>4、其他技能调整和bug修复<br>坎公扩展交流群386095671",
			// "坎公扩展V2.0.1<br>2023年8月9日更新<br>修复了美娅〖暖风〗在选择取消的情况下能回复体力的bug",
			// "坎公扩展V2.0.0<br>2023年8月1日更新<br>1.哈娜〖不灭〗修改为觉醒技,美娅〖暖风〗、普莉希拉〖混血〗、AA72〖水枪〗、安德拉斯〖屠戮〗等修改为蓄力技<br>2、修改佳岚〖道术〗的发动条件和〖神灵〗的使命效果,修改埃莉诺〖琶音〗韵律条件,修改蒂尼亚〖沙箭〗〖沙暴〗、瓦伦西亚〖疾刺〗发动条件及效果,<br>3、新增拜蒙、汐雅、艾米、SP艾米<br>4、其他技能调整和bug修复<br>5、修改部分文件位置<br>坎公扩展交流群386095671",
			// "2023年7月27日<br>测试内容有较大的不稳定性,具体内容以正式版为准",
			// "2023年7月6日<br>1.新增堇、罗塞塔(暂无配音)<br>2、修复部分技能描述错误<br>3、其他技能调整和bug修复",
			// "2023年5月27日<br>1.新增蒂尼亚、瓦伦西亚<br>2、修复部分技能描述错误<br>3、新增测试角色界克雷格、界卡瑞娜(需通过自由选将自行选择)<br>4、其他技能调整和bug修复",
			// "2023年5月15日<br>1.新增克罗姆、索菲<br>2、修改哈娜<br>3、其他技能调整和bug修复",
			// "2023年4月27日<br>1.新增尤金、索菲<br>2、新增梅丽尔皮肤花之啦啦队队员<br>3、其他技能调整和bug修复",
			// "2023年4月1日<br>愚人节快乐<br>1.新增克罗塞尔、安德拉斯",
			// "2023年3月13日<br>1.新增赤雪、兰儿<br>2.修改未来公主<br>其他技能调整和bug修复",
			// "2023年2月18日<br>1.新增克拉拉<br>2.新增更新日志<br>其他技能调整和bug修复",
			// "v2.4.0<br>2024年6月8日更新<br>新增: <br>修改:<br>其他问题修复与优化<br>坎公扩展交流群386095671",
			// "更新日志",
		},
	};
});

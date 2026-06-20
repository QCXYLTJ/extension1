import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '胜负统计',
		content: function (config, pack) {
			lib.skill._sftj_operateJl = {
				//胜负记录操作
				enable: 'phaseUse',
				filter: function (event, player) {
					return player == game.me && lib.config.extension_胜负统计_operateJl;
				},
				filterTarget: function (card, player, target) {
					if (target.name.indexOf('unknown') == 0 && (target.name2 == undefined || target.name2.indexOf('unknown') == 0)) return false;
					return true;
				},
				selectTarget: [0, Infinity],
				multitarget: true,
				multiline: true,
				prompt: '若选择角色则对这些角色的武将牌当前游戏模式的胜负记录进行操作，否则从所有武将包选择进行操作',
				log: false,
				charlotte: true,
				superCharlotte: true,
				content: function () {
					'step 0';
					targets.sortBySeat();
					if (targets.length) {
						event.names = [];
						for (let i of targets) {
							if (i.name.indexOf('unknown')) event.names.push(i.name);
							if (i.name2 != undefined && i.name2.indexOf('unknown')) event.names.push(i.name2);
						}
						event.goto(4);
					} else {
						let ts = [];
						event.sorts = [];
						for (let i in lib.characterPack) {
							if (Object.prototype.toString.call(lib.characterPack[i]) === '[object Object]') {
								event.sorts.push(lib.characterPack[i]);
								ts.push(lib.translate[i + '_character_config']);
							}
						}
						if (!ts.length) event.finish();
						else {
							event.videoId = lib.status.videoId++;
							let func = function (player, list, id) {
								let choiceList = ui.create.dialog('请选择要做记录操作的武将所在的武将包');
								choiceList.videoId = id;
								for (let i = 0; i < list.length; i++) {
									let str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">' + list[i] + '</div>';
									let next = choiceList.add(str);
									next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
									next.firstChild.link = i;
									for (let j in lib.element.button) {
										next[j] = lib.element.button[j];
									}
									choiceList.buttons.add(next.firstChild);
								}
								return choiceList;
							};
							if (game.me.isOnline2()) game.me.send(func, game.me, ts, event.videoId);
							event.dialog = func(game.me, ts, event.videoId);
							if (_status.auto) event.dialog.style.display = 'none';
							let next = game.me.chooseButton();
							next.set('dialog', event.videoId);
							next.set('forced', true);
							next.set('ai', function (button) {
								return 1;
							});
							next.set('selectButton', [0, ts.length]);
						}
					}
					('step 1');
					if (game.me.isOnline2()) game.me.send('closeDialog', event.videoId);
					event.dialog.close();
					if (result.links && result.links.length) {
						let nums = result.links.sort();
						event.names = [];
						for (let num of nums) {
							for (let i in event.sorts[num]) {
								event.names.push(i);
							}
						}
						if (!event.names.length) {
							alert('所选武将包不包含武将');
							event.finish();
						}
					} else event.finish();
					('step 2');
					player.chooseButton(['请选择要对当前游戏模式胜负记录进行操作的武将', [event.names, 'character']], [1, Infinity]).ai = function (button) {
						return 0;
					};
					('step 3');
					if (result.bool && result.links) event.names = result.links;
					else event.finish();
					('step 4');
					player
						.chooseControl(['修改', '删除', '取消'])
						.set('prompt', '请选择要对所选武将当前游戏模式胜负记录进行的操作')
						.set('ai', function () {
							return '取消';
						});
					('step 5');
					if (result.control == '取消') event.finish();
					else if (result.control == '删除') {
						let mode = get.statusModeInfo(true),
							cgn = get.sfConfigName(),
							num = 0;
						if (cgn.length > 1) {
							for (let i of cgn) {
								if (confirm('您确定要删除这' + event.names.length + '个武将' + mode + get.identityInfo(i) + '胜负记录吗？')) {
									for (let name of event.names) {
										if (lib.config[i][name]) {
											delete lib.config[i][name];
											num++;
										}
									}
									game.saveConfig(i, lib.config[i]);
								}
							}
							if (num) alert('成功清除' + num + '条胜负记录');
						} else if (confirm('您确定要删除这' + event.names.length + '个武将' + lib.translate[get.mode()] + '模式' + mode + '胜负记录吗？')) {
							for (let name of event.names) {
								if (lib.config[i][name]) {
									delete lib.config[cgn[0]][name];
									num++;
								}
							}
							game.saveConfig(cgn[0], {});
							if (num) alert('成功清除' + num + '条胜负记录');
						}
						event.finish();
					} else event.cgns = get.sfConfigName();
					('step 6');
					if (event.cgns.length > 1) {
						let trans = [];
						for (let i = 0; i < event.cgns.length; i++) {
							trans.push(get.identityInfo(event.cgns[i]));
						}
						trans.push('取消');
						player
							.chooseControl(trans)
							.set('prompt', '请选择要修改的胜负记录类型')
							.set('ai', function () {
								return '取消';
							});
					} else if (!event.cgns.length) event.finish();
					else event._result = { index: 0, control: get.identityInfo(event.cgns[0]) };
					('step 7');
					if (result.control == '取消') event.finish();
					else {
						event.cgn = event.cgns[result.index];
						event.num = 0;
					}
					('step 8');
					if (!lib.config[event.cgn][event.names[event.num]]) lib.config[event.cgn][event.names[event.num]] = { win: 0, lose: 0 };
					event.prese = lib.config[event.cgn][event.names[event.num]].win;
					('step 9');
					let as = ['+10'],
						sm = get.statusModeInfo(true);
					if (event.prese >= 10) as.push('-10');
					as.push('+1');
					if (event.prese) as.push('-1');
					as.push('确定修改');
					as.push('不修改');
					player
						.chooseControl(as)
						.set('prompt', '获胜场数：<font color=#00FFFF>' + event.prese + '</font>')
						.set('prompt2', '<center>修改<font color=#FFFF00>' + lib.translate[event.names[event.num]] + '</font>' + sm + '<font color=#00FF00>' + get.identityInfo(event.cgn) + '</font>获胜场数记录</center><br><center>原获胜场数：<font color=#FF3300>' + lib.config[event.cgn][event.names[event.num]].win + '</font></center>')
						.set('ai', function () {
							return '不修改';
						});
					('step 10');
					if (result.control == '确定修改') {
						lib.config[event.cgn][event.names[event.num]].win = event.prese;
						game.saveConfig(event.cgn, lib.config[event.cgn]);
					} else if (result.control == '不修改') {
						if (lib.config[event.cgn][event.names[event.num]].win + lib.config[event.cgn][event.names[event.num]].lose == 0) delete lib.config[event.cgn][event.names[event.num]];
					} else {
						if (result.control == '+1') event.prese++;
						else if (result.control == '-1') event.prese--;
						else if (result.control == '+10') event.prese += 10;
						else if (result.control == '-10') event.prese -= 10;
						event.goto(9);
					}
					('step 11');
					if (!lib.config[event.cgn][event.names[event.num]]) lib.config[event.cgn][event.names[event.num]] = { win: 0, lose: 0 };
					event.prese = lib.config[event.cgn][event.names[event.num]].lose;
					('step 12');
					let bs = ['+10'],
						sd = get.statusModeInfo(true);
					if (event.prese >= 10) bs.push('-10');
					bs.push('+1');
					if (event.prese) bs.push('-1');
					bs.push('确定修改');
					bs.push('不修改');
					player
						.chooseControl(bs)
						.set('prompt', '失败场数：<font color=#FF3300>' + event.prese + '</font>')
						.set('prompt2', '<center>修改<font color=#FFFF00>' + lib.translate[event.names[event.num]] + '</font>' + sd + '<font color=#00FF00>' + get.identityInfo(event.cgn) + '</font>失败场数记录</center><br><center>原失败场数：<font color=#00FFFF>' + lib.config[event.cgn][event.names[event.num]].lose + '</font></center>')
						.set('ai', function () {
							return '不修改';
						});
					('step 13');
					if (result.control == '确定修改') {
						lib.config[event.cgn][event.names[event.num]].lose = event.prese;
						game.saveConfig(event.cgn, lib.config[event.cgn]);
					} else if (result.control == '不修改') {
						if (lib.config[event.cgn][event.names[event.num]].win + lib.config[event.cgn][event.names[event.num]].lose == 0) delete lib.config[event.cgn][event.names[event.num]];
					} else {
						if (result.control == '+1') event.prese++;
						else if (result.control == '-1') event.prese--;
						else if (result.control == '+10') event.prese += 10;
						else if (result.control == '-10') event.prese -= 10;
						event.goto(12);
					}
					('step 14');
					event.num++;
					if (event.num < event.names.length) event.goto(8);
					('step 15');
					event.cgns.remove(event.cgn);
					if (event.cgns.length) event.goto(6);
				},
				ai: {
					result: {
						target: 0,
					},
				},
			};
			lib.translate._sftj_operateJl = '<font color=#00FFFF>记录操作</font>';
			lib.skill._sftj_start = {
				trigger: { global: 'gameStart' },
				filter: function (event, player) {
					if (player == game.me) {
						game.countPlayer2(function (current) {
							current.storage.sftj = {
								cg1: current.name1,
								cg2: current.name2,
							};
						});
						if (lib.config.extension_胜负统计_apart) return true;
					}
				},
				silent: true,
				priority: 157,
				charlotte: true,
				superCharlotte: true,
				content: function () {
					get.sfInit();
				},
			};
		},
		precontent: function () {
			lib.get.statusModeInfo = function (sf) {
				//获取当前游戏模式名称
				let info = lib.translate[get.mode()];
				if (_status.mode && (!sf || lib.config.extension_胜负统计_apart)) {
					let sm;
					switch (get.mode()) {
						case 'identity':
							if (_status.mode == 'normal') sm = '标准';
							else if (_status.mode == 'zhong') sm = '明忠';
							else if (_status.mode == 'purple') sm = '3v3v2';
							break;
						case 'guozhan':
							if (_status.mode == 'normal') sm = '势备';
							else if (_status.mode == 'yingbian') sm = '应变';
							else if (_status.mode == 'old') sm = '怀旧';
							else if (_status.mode == 'free') sm = '自由';
							break;
						case 'versus':
							if (_status.mode == 'four') sm = '对抗';
							else if (_status.mode == 'three') sm = '统率';
							else if (_status.mode == 'two') sm = '欢乐';
							else if (_status.mode == 'guandu') sm = '官渡';
							else if (_status.mode == 'jiange') sm = '剑阁';
							else if (_status.mode == 'siguo') sm = '四国';
							else if (_status.mode == 'standard') sm = '自由';
							break;
						case 'doudizhu':
							if (_status.mode == 'normal') sm = '休闲';
							else if (_status.mode == 'kaihei') sm = '开黑';
							else if (_status.mode == 'huanle') sm = '欢乐';
							else if (_status.mode == 'binglin') sm = '兵临';
							else if (_status.mode == 'online') sm = '智斗';
							break;
						case 'single':
							lib.translate[_status.mode + '2'];
							break;
						case 'chess':
							if (_status.mode == 'combat') sm = '自由';
							else if (_status.mode == 'three') sm = '统率';
							else if (_status.mode == 'leader') sm = '君主';
							break;
					}
					if (sm) info += ' - ' + sm;
				}
				return info + '模式';
			};
			lib.get.identityInfo = function (str) {
				/*获取字符串中最后一个'_'后面的身份翻译
			参数：待清洗字符串
			*/
				if (typeof str != 'string') return '';
				let clean = str.split('_');
				if (get.sfConfigName().length <= 1) return '';
				clean = clean[clean.length - 1];
				if (clean.indexOf('unknown') == 0) return '未知';
				if (isNaN(parseInt(clean[clean.length - 1]))) clean += '2';
				let trans = lib.translate[clean];
				if (typeof trans != 'string') return '';
				return trans;
			};
			lib.get.sfConfigName = function (identity) {
				/*获取当前游戏模式下武将的胜负统计配置名
			参数：身份
			有身份 返回当前游戏模式胜负统计对应身份配置名（字符串）
			无身份 返回所有可能的身份配置名（数组）
			*/
				let mode = get.mode(),
					cgn = 'extension_胜负统计_' + mode,
					sm = '';
				if (_status.mode && lib.config.extension_胜负统计_apart && _status.mode != 'deck') sm = '_' + _status.mode;
				if (typeof identity != 'string') {
					if (mode == 'identity') {
						if (_status.mode == 'purple') return [cgn + sm + '_rZhu', cgn + sm + '_rZhong', cgn + sm + '_rNei', cgn + sm + '_rYe'];
						let configs = [];
						configs.addArray([cgn + sm + '_zhu', cgn + sm + '_zhong', cgn + sm + '_fan', cgn + sm + '_nei']);
						if (_status.mode == 'zhong') configs.push(cgn + sm + '_mingzhong');
						return configs;
					}
					if (mode == 'doudizhu' || mode == 'single') return [cgn + sm + '_zhu', cgn + sm + '_fan'];
					return [cgn + sm];
				}
				if (mode == 'identity' && _status.mode == 'purple') return cgn + sm + '_r' + identity.slice(1);
				if (mode == 'identity' || mode == 'doudizhu' || mode == 'single') return cgn + sm + '_' + identity;
				return cgn + sm;
			};
			lib.get.purifySFConfig = function (config, min) {
				//筛选至少min场的胜负记录
				if (Object.prototype.toString.call(config) !== '[object Object]') return config;
				if (typeof min != 'number' || isNaN(min)) min = 0;
				let result = {},
					judge = false;
				for (let i in config) {
					if (!judge) {
						if (Object.prototype.toString.call(config[i]) !== '[object Object]') return config;
						judge = true;
					}
					if (config[i].win + config[i].lose >= min) result[i] = config[i];
				}
				return result;
			};
			lib.get.sfInit = function (sf, now) {
				//初始化
				let cgn;
				if (typeof sf != 'string') cgn = get.sfConfigName();
				else cgn = [sf];
				for (let sf of cgn) {
					if (Object.prototype.toString.call(lib.config[sf]) !== '[object Object]') lib.config[sf] = {};
					for (let i in lib.config[sf]) {
						let all = lib.config[sf][i].win + lib.config[sf][i].lose;
						if (all) lib.config[sf][i].sl = lib.config[sf][i].win / all;
						else lib.config[sf][i].sl = 0;
						if (!now && lib.config.extension_胜负统计_display != 'off') {
							if (lib.characterTitle[i] == undefined) lib.characterTitle[i] = '';
							else lib.characterTitle[i] += '<br>';
							lib.characterTitle[i] += get.identityInfo(sf) + '<br>';
							if (lib.config.extension_胜负统计_display != 'sf') lib.characterTitle[i] += '总场数：' + all + ' 胜率：' + Math.round(10000 * lib.config[sf][i].sl) / 100 + '%<br>';
							if (lib.config.extension_胜负统计_display != 'sl') lib.characterTitle[i] += lib.config[sf][i].win + '胜 ' + lib.config[sf][i].lose + '负<br>';
						}
					}
					game.saveConfig(sf, lib.config[sf]);
				}
			};
			lib.arenaReady.push(function () {
				if (!lib.config.extension_胜负统计_apart) get.sfInit();
				lib.onover.push(function (result) {
					if (!lib.config.extension_胜负统计_record) return;
					let curs = game.filterPlayer2(true, null, true),
						wins = [],
						can = true,
						id = [],
						mode = get.mode();
					if (mode == 'identity') {
						if (_status.mode == 'purple') {
							if (result || lib.config.extension_胜负统计_sw) id = game.me.identity;
							else if (
								game.hasPlayer(function (current) {
									if (current.identity.indexOf('Zhu') == 1) {
										id = current.identity;
										return true;
									}
									return false;
								})
							);
							else if (
								!game.hasPlayer(function (current) {
									return current.identity.indexOf('Ye') != 1;
								})
							)
								id = 'rYe';
							else id = 'none';
							switch (id) {
								case 'rZhu':
								case 'rZhong':
								case 'bNei':
									wins = game.filterPlayer2(
										function (target) {
											return ['rZhu', 'rZhong', 'bNei'].contains(target.identity);
										},
										null,
										true
									);
									break;
								case 'bZhu':
								case 'bZhong':
								case 'rNei':
									wins = game.filterPlayer2(
										function (target) {
											return ['bZhu', 'bZhong', 'rNei'].contains(target.identity);
										},
										null,
										true
									);
									break;
								case 'rYe':
								case 'bYe':
									wins = game.filterPlayer2(
										function (target) {
											return ['rYe', 'bYe'].contains(target.identity);
										},
										null,
										true
									);
									break;
							}
						} else {
							if (result || lib.config.extension_胜负统计_sw) id = game.me.identity;
							else if (game.players.length == 1) id = game.players[0].identity;
							else if (game.zhu.isDead()) id = 'fan';
							else id = 'zhu';
							switch (id) {
								case 'fan':
									wins = game.filterPlayer2(
										function (target) {
											return target.identity == 'fan';
										},
										null,
										true
									);
									break;
								case 'nei':
									wins = game.players;
									break;
								default:
									wins = game.filterPlayer2(
										function (target) {
											return ['zhu', 'zhong', 'mingzhong'].contains(target.identity);
										},
										null,
										true
									);
							}
						}
					} else if (mode == 'guozhan') {
						if (result || lib.config.extension_胜负统计_sw) {
							if (game.me.identity == 'ye') wins = [game.me];
							else {
								id = lib.character[game.me.name1][1];
								wins = game.filterPlayer2(
									function (target) {
										return target.identity != 'ye' && lib.character[target.name1][1] == id;
									},
									null,
									true
								);
							}
						} else if (
							game.countPlayer(function (current) {
								if (current.identity == 'ye') return true;
								let g = lib.character[current.name1][1];
								if (!id.contains(g)) {
									id.add(g);
									return true;
								}
								return false;
							}) > 1
						)
							can = false;
						else if (game.players[0].identity == 'ye') wins = game.players;
						else {
							id = lib.character[game.players[0].name1][1];
							wins = game.filterPlayer2(
								function (target) {
									return target.identity != 'ye' && lib.character[target.name1][1] == id;
								},
								null,
								true
							);
						}
					} else if (mode == 'doudizhu' || mode == 'single' || mode == 'boss') {
						if ((game.zhu && game.zhu.isDead()) || (game.boss && game.boss.isDead()))
							wins = game.filterPlayer2(
								function (target) {
									return target.identity != 'zhu' && target.identity != 'zhong';
								},
								null,
								true
							);
						else
							wins = game.filterPlayer2(
								function (target) {
									return target.identity == 'zhu' || target.identity == 'zhong';
								},
								null,
								true
							);
					} else {
						if (result || lib.config.extension_胜负统计_sw)
							wins = game.filterPlayer2(
								function (target) {
									return target.side == game.me.side;
								},
								null,
								true
							);
						else if (
							game.countPlayer(function (current) {
								for (let s of id) {
									if (s.side == current.side) return false;
								}
								id.add(current);
								return true;
							}) > 1
						)
							can = false;
						else
							wins = game.filterPlayer2(
								function (target) {
									return target.side == game.players[0].side;
								},
								null,
								true
							);
					}
					for (let i of curs) {
						if (((!can || !lib.config.extension_胜负统计_tryAll) && game.me != i) || (mode == 'boss' && i.identity == 'zhong')) continue;
						let bool;
						if (lib.config.extension_胜负统计_sw) {
							if (wins.contains(i)) bool = result;
							else bool = !result;
						} else if (wins.contains(i)) bool = true;
						else bool = false;
						let cgn = get.sfConfigName(i.identity || 'unknown'),
							names = [];
						if (i.storage.sftj && i.name1 != i.storage.sftj.cg1) {
							if (lib.config.extension_胜负统计_change == 'pre' && i.storage.sftj.cg1 != undefined) names.push(i.storage.sftj.cg1);
							else if (lib.config.extension_胜负统计_change == 'nxt' && i.name1 != undefined) names.push(i.name1);
						} else if (i.name1 != undefined) names.push(i.name1);
						if (i.storage.sftj && i.name2 != i.storage.sftj.cg2) {
							if (lib.config.extension_胜负统计_change == 'pre' && i.storage.sftj.cg2 != undefined) names.push(i.storage.sftj.cg2);
							else if (lib.config.extension_胜负统计_change == 'nxt' && i.name2 != undefined) names.push(i.name2);
						} else if (i.name2 != undefined) names.push(i.name2);
						for (let j of names) {
							if (lib.config[cgn][j] == undefined) lib.config[cgn][j] = { win: 0, lose: 0 };
							if (bool == true) lib.config[cgn][j].win++;
							else lib.config[cgn][j].lose++;
						}
					}
					for (let i of get.sfConfigName()) {
						game.saveConfig(i, lib.config[i]);
					}
				});
			});
		},
		config: {
			apart: {
				name: '<span style="font-family: xingkai">区分当前游戏模式</font>',
				intro: '开启后，武将胜负统计将<font color=#FF0000>区分开当前游戏模式</font>（即按照菜单->开始->模式->游戏模式分开统计）',
				init: true,
				onclick: function (item) {
					game.saveExtensionConfig('胜负统计', 'apart', item);
					if (!lib.config.extension_胜负统计_apart_alerted) {
						game.saveExtensionConfig('胜负统计', 'apart_alerted', true);
						alert('为避免调整此配置后继续使用本扩展功能可能带来的冲突，将自动重启游戏');
					}
					game.reload();
				},
			},
			display: {
				name: '<span style="font-family: xinwei">胜负场数相关显示</span>',
				intro: '调整武将信息上方的胜率、胜负场数相关显示',
				init: 'all',
				item: {
					all: '都显示',
					sf: '显示胜负场数',
					sl: '显示胜率',
					off: '不显示',
				},
				onclick: function (item) {
					game.saveExtensionConfig('胜负统计', 'display', item);
				},
			},
			record: {
				name: '<span style="font-family: xingkai">武将胜负记录</span>',
				intro: '开启后，游戏结束将根据玩家胜负记录玩家所使用的武将胜负',
				init: true,
				onclick: function (item) {
					game.saveExtensionConfig('胜负统计', 'record', item);
				},
			},
			tryAll: {
				name: '<span style="font-family: xingkai">尝试记录全场武将</span>',
				intro: '开启后，游戏结束将记录根据玩家胜负可以推测出来胜负的角色所使用的武将胜负',
				init: false,
				onclick: function (item) {
					game.saveExtensionConfig('胜负统计', 'tryAll', item);
				},
			},
			sw: {
				name: '<span style="font-family: xingkai">其他阵营视为同一阵营</span>',
				intro: '开启后，游戏结束进行记录时其他阵营将视为同一阵营，即玩家方赢、其余方均输，玩家方没赢，其余方均赢',
				init: false,
				onclick: function (item) {
					game.saveExtensionConfig('胜负统计', 'sw', item);
				},
			},
			change: {
				name: '<span style="font-family: xingkai">更换武将角色</font>',
				intro: '如果一个角色在游戏结束时用的武将和游戏开始时不同，可以选择记录游戏开始时的（最初的）或者记录游戏结束时的（最后的）',
				init: 'off',
				item: {
					off: '不记录',
					pre: '记录最初的',
					nxt: '记录最后的',
				},
				onclick: function (item) {
					game.saveExtensionConfig('胜负统计', 'change', item);
				},
			},
			operateJl: {
				name: '<span style="font-family: xingkai">出牌阶段可修改胜负记录</font>',
				intro: '开启后，出牌阶段可以对场上武将或所有武将当前游戏模式的胜负记录进行批量删除或修改操作',
				init: false,
				onclick: function (item) {
					game.saveExtensionConfig('胜负统计', 'operateJl', item);
				},
			},
			slRank: {
				name: '当前模式胜率排行榜',
				clear: true,
				onclick: function () {
					let mode = get.statusModeInfo(true),
						cgn = get.sfConfigName(),
						num = 0;
					for (let i of cgn) {
						get.sfInit(i, true);
						let rankNum = parseInt(lib.config.extension_胜负统计_rankNum),
							sortedKeys = Object.entries(get.purifySFConfig(lib.config[i], parseInt(lib.config.extension_胜负统计_min)))
								.sort(function (a, b) {
									let res = Math.round(100000 * a[1].sl) - Math.round(100000 * b[1].sl);
									if (rankNum > 0) res = -res;
									if (res == 0) return b[1].win + b[1].lose - a[1].win - a[1].lose;
									return res;
								})
								.slice(0, Math.abs(rankNum))
								.map((entry) => entry[0]);
						if (!sortedKeys.length) continue;
						let txt = mode + '武将' + get.identityInfo(i) + '胜率排行榜（' + (rankNum > 0 ? '正序' : '倒序') + '）';
						for (let j = 0; j < sortedKeys.length; j++) {
							txt += '\n   第' + (j + 1) + '名   ' + lib.translate[sortedKeys[j]] + '|' + sortedKeys[j] + '\n                     ' + lib.config[i][sortedKeys[j]].win + '胜' + lib.config[i][sortedKeys[j]].lose + '负      胜率：' + Math.round(100000 * lib.config[i][sortedKeys[j]].sl) / 1000 + '%';
						}
						num++;
						alert(txt);
					}
					if (!num) alert('当前模式暂无符合条件的记录');
				},
			},
			rankNum: {
				name: '<span style="font-family: xingkai">排行榜展示</font>：',
				intro: '和选项连起来读',
				init: '10',
				item: {
					10: '前十名',
					5: '前五名',
					15: '前十五名',
					20: '前二十名',
					50: '前五十名',
					'-10': '最后十名',
					'-5': '最后五名',
					'-15': '最后十五名',
					'-20': '最后二十名',
					'-50': '最后五十名',
				},
				onclick: function (item) {
					game.saveExtensionConfig('胜负统计', 'rankNum', item);
				},
			},
			min: {
				name: '<span style="font-family: xingkai">只筛选总场数：</font>',
				intro: '在展示当前游戏模式武将胜率排行榜时，只在符合本配置条件的记录中筛选',
				init: '10',
				item: {
					3: '不少于3局的',
					5: '不少于5局的',
					7: '不少于7局的',
					10: '不少于10局的',
					20: '不少于20局的',
					30: '不少于30局的',
					50: '不少于50局的',
					0: '不少于0局的',
				},
				onclick: function (item) {
					game.saveExtensionConfig('胜负统计', 'min', item);
				},
			},
			loadJl: {
				name: '载入当前模式武将胜负记录',
				clear: true,
				onclick: function () {
					let container = ui.create.div('.popup-container.editor');
					let editorpage = ui.create.div(container);
					let discardConfig = ui.create.div('.editbutton', '取消', editorpage, function () {
						ui.window.classList.remove('shortcutpaused');
						ui.window.classList.remove('systempaused');
						container.delete(null);
						delete window.saveNonameInput;
					});
					let node = container;
					let map = get.sfConfigName();
					let str = '';
					for (let i of map) {
						str += '_status.' + i + ' = {\r	//请在此大括号内填写' + get.statusModeInfo(true) + '你想载入的武将' + get.identityInfo(i) + '胜负记录\r};\r';
					}
					str += '//请在{}内进行编辑，务必使用英文标点符号！';
					node.code = str;
					ui.window.classList.add('shortcutpaused');
					ui.window.classList.add('systempaused');
					let saveInput = function () {
						let code;
						if (container.editor) code = container.editor.getValue();
						else if (container.textarea) code = container.textarea.value;
						try {
							eval(code);
							for (let i of map) {
								if (_status[i] && Object.prototype.toString.call(_status[i]) !== '[object Object]') throw 'typeError';
							}
						} catch (e) {
							if (e === 'typeError') alert('类型错误');
							else alert('代码语法有错误，请仔细检查（' + e + '）');
							return;
						}
						for (let i of map) {
							if (_status[i])
								for (let name in _status[i]) {
									lib.config[i][name] = _status[i][name];
								}
							game.saveConfig(i, lib.config[i]);
						}
						ui.window.classList.remove('shortcutpaused');
						ui.window.classList.remove('systempaused');
						container.delete();
						container.code = code;
						delete window.saveNonameInput;
					};
					window.saveNonameInput = saveInput;
					let saveConfig = ui.create.div('.editbutton', '保存', editorpage, saveInput);
					let editor = ui.create.div(editorpage);
					if (node.aced) {
						ui.window.appendChild(node);
						node.editor.setValue(node.code, 1);
					} else if (lib.device == 'ios') {
						ui.window.appendChild(node);
						if (!node.textarea) {
							let textarea = document.createElement('textarea');
							editor.appendChild(textarea);
							node.textarea = textarea;
							lib.setScroll(textarea);
						}
						node.textarea.value = node.code;
					} else {
						let aceReady = function () {
							ui.window.appendChild(node);
							let mirror = window.CodeMirror(editor, {
								value: node.code,
								mode: 'javascript',
								lineWrapping: !lib.config.touchscreen && lib.config.mousewheel,
								lineNumbers: true,
								indentUnit: 4,
								autoCloseBrackets: true,
								theme: 'mdn-like',
							});
							lib.setScroll(editor.querySelector('.CodeMirror-scroll'));
							node.aced = true;
							node.editor = mirror;
						};
						if (!window.ace) {
							import('../../game/codemirror.js').then(() => {
								aceReady();
							});
							lib.init.css('layout/default', 'codemirror');
						}
						else {
							aceReady();
						}
					}
				},
			},
			copyJl: {
				name: '复制当前模式武将胜负记录',
				clear: true,
				onclick: function () {
					let cgn = get.sfConfigName();
					let mode = get.statusModeInfo(true) + '所有武将';
					let copy = '',
						show = true;
					for (let i of cgn) {
						show = true;
						if (!confirm(copy + '是否复制' + mode + get.identityInfo(i) + '胜负记录？')) {
							copy = '';
							continue;
						}
						let map = lib.config[i] || {},
							txt = '	//' + mode + get.identityInfo(i) + '胜负记录\r';
						get.sfInit(i, true);
						for (let name in map) {
							txt += '\r	"' + name + '":{\r		win: ' + map[name].win + ',\r		lose: ' + map[name].lose + ',\r	},';
						}
						let textarea = document.createElement('textarea');
						textarea.setAttribute('readonly', 'readonly');
						textarea.value = txt;
						document.body.appendChild(textarea);
						textarea.select();
						if (document.execCommand('copy')) {
							document.execCommand('copy');
							copy = mode + get.identityInfo(i) + '胜负记录已成功复制到剪切板，建议您先粘贴到其他地方再进行后续操作。\n';
						} else copy = mode + get.identityInfo(i) + '胜负记录复制失败。\n';
						document.body.removeChild(textarea);
						show = false;
					}
					if (!show) {
						if (copy.includes('失败')) alert(copy.split('。')[0]);
						else alert(copy.split('，')[0]);
					}
				},
			},
			deleteJl: {
				name: '删除当前模式武将胜负记录',
				clear: true,
				onclick: function () {
					let mode = get.statusModeInfo(true),
						cgn = get.sfConfigName();
					if (cgn.length > 1) {
						let num = 0;
						for (let i of cgn) {
							if (confirm('您确定要清空' + mode + '所有武将' + get.identityInfo(i) + '胜负记录吗？')) {
								num++;
								game.saveConfig(i, {});
							}
						}
						if (num) alert('成功清除' + num + '项');
					} else if (confirm('您确定要清空' + lib.translate[get.mode()] + '模式' + mode + '所有武将的胜负记录吗？')) {
						game.saveConfig(cgn[0], {});
						alert('清除成功');
					}
				},
			},
		},
		package: {
			intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br><font color=#FF3300>注意：本扩展</font>内，<br>◆以下<span style="font-family: xinwei">魏体</span>选项均<font color=#70F3FF>重启后生效</font>！其余选项<font color=#FF3300>即时生效</font><br>◆<font color=#70F3FF>长按选项</font>有提示',
			author: '157',
			version: '1.0',
		},
	};
});

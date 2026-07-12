'use strict';
import { lib, game, ui, get, ai, _status } from '../../../../../noname.js';
const modules = [
	'./free_choose.js',
	'./element/get.js',
	'./element/game.js',
	'./element/player.js',
	'./start.js',
	'./connect_init.js',
	'./mode_config.js',
	'./activity.js',
	'./buffs.js',
	'./style.js',
	'./character_dialog.js',
	'./shop.js',
	'./weather.js'
];
for (const module of modules) {
	await import(module);
}//QQQ
import { getFile } from './get_file.js';
// 编辑将池
import { func as characterListSet } from './character_list_set.js';
(async function () {
	let extensionInfo = await lib.init.promises.json(`extension/大权在握/info.json`);
	Array.prototype.includes = Array.prototype.includes;
	lib.dqzw_boss_modes = {
		guihua: '桂华洗霜',
		dengshen: '登神长阶',
	};
	// 预加载(随便整整)
	let path = 'extension/' + (window.dqzw_extension_name || '大权在握') + '/image/',
		list = ['choice', 'choice/cardback', 'icon', 'mode', 'background', 'character', 'character/sort', 'buffs/0', 'buffs/1', 'buffs/2', 'buffs/3', 'activity'],
		storage = ui.create.div('.forcehide.dqzw_image_storage_' + get.id(), document.body);
	if (get.configOL('preload', 'dqzw_guihuaxishuang'))
		list.forEach(folder => {
			game.getFileList(path + folder, (_folder, files) => {
				files.forEach(file => {
					let img = new Image();
					img.src = path + folder + '/' + file;
					storage.appendChild(img);
				});
			});
		});
	if (!lib.config.dqzw_boss_guihua_character_list_scheme)
		game.saveConfig('dqzw_boss_guihua_character_list_scheme', {
			default: {
				name: '默认设置',
				list: Object.keys(lib.character),
			},
		});
	if (!lib.config.dqzw_boss_bossList_mode) game.saveConfig('dqzw_boss_bossList_mode', 'guihua');
	lib.arenaReady.push(() => {
		ui.dqzw_boss_cssText();
	});
	lib.dqzw_boss_oldAnimate = HTMLDivElement.prototype.addTempClass || HTMLDivElement.prototype.animate;
	let info = {
		name: 'dqzw_guihuaxishuang',
		dqzw_bossResident: ['dqzw_boss_caoe', 'dqzw_boss_wangshu', 'dqzw_boss_ehuang', 'dqzw_boss_changxi', 'dqzw_boss_change'],
		character: {
			dqzw_boss_shibing: ['male', 'qun', 0, [], ['character:shibing1']],
			dqzw_boss_jisi: ['male', 'shen', 4, ['dqzw_boss_shenwei', 'dqzw_boss_shenen', 'dqzw_boss_shenci']],
			dqzw_boss_caoe: ['female', 'shen', 13, ['dqzw_boss_shoujiang', 'dqzw_boss_tijiang', 'dqzw_boss_juexun', 'dqzw_boss_xiaxiao']],
			dqzw_boss_wangshu: ['female', 'shen', 12, ['dqzw_boss_yinyue', 'dqzw_boss_shenche']],
			dqzw_boss_ehuang: ['female', 'shen', 13, ['dqzw_boss_jili', 'dqzw_boss_fuzhu']],
			dqzw_boss_changxi: ['female', 'shen', 9, ['dqzw_boss_xiangjiu', 'dqzw_boss_yingyue', 'dqzw_boss_leyong', 'dqzw_boss_tianzhui']],
			dqzw_boss_change: ['female', 'shen', 9, ['dqzw_boss_qiedan', 'dqzw_boss_feisheng']],
			dqzw_boss_dengshen_leader_1: ['unknown', 'dqzw_xukong', 0, []],
			dqzw_boss_dengshen_leader_2: ['unknown', 'dqzw_xukong', 0, []],
			dqzw_boss_dengshen_zhouqun: ['male', 'shu', 4, ['dqzw_boss_tiansuan', 'dqzw_boss_chenshuo', 'dqzw_boss_xingxiang']],
			dqzw_boss_dengshen_zhaozhi: ['male', 'shu', 4, ['dqzw_boss_mengjie', 'dqzw_boss_tongguan', 'dqzw_boss_xingmeng']],
		},
		startBefore() { },
		start() {
			'step 0';
			_status.dqzw_boss_mode = get.configOL('dqzw_mode', 'dqzw_guihuaxishuang');
			num = get.configOL((_status.dqzw_boss_mode || '') + '_player_number', 'dqzw_guihuaxishuang');
			if (num > 0) {
				lib.configOL.player_number = num;
				lib.config.player_number = num;
				lib.config.number = Number(num);
			}
			if (_status.connectMode) {
				let password = get.configOL('room_password', 'dqzw_guihuaxishuang');
				//联机创建房间
				game.waitForPlayer();
				if (typeof password == 'number' ? true : password) {
					password = Number(password);
					if (!isNaN(password)) game.roomPassword = password;
				}
			}
			game.dqzw_saveProgress = create => {
				let list = [];
				let map = {
					players: {},
					lib: parseObject(
						Object.assign({}, lib, {
							element: { __type__: 'not' },
							extensionPack: { __type__: 'not' },
							extensionMenu: { __type__: 'not' },
							card: { __type__: 'not' },
							cardPack: { __type__: 'not' },
							character: { __type__: 'not' },
							skill: { __type__: 'not' },
							skilllist: { __type__: 'not' },
							configMenu: { __type__: 'not' },
							characterIntro: { __type__: 'not' },
							characterTitle: { __type__: 'not' },
							characterPack: { __type__: 'not' },
							characterFilter: { __type__: 'not' },
							characterSort: { __type__: 'not' },
							characterReplace: { __type__: 'not' },
							characterGuozhanFilter: { __type__: 'not' },
							characterDialogGroup: { __type__: 'not' },
							connectCardPack: { __type__: 'not' },
							connectCharacterPack: { __type__: 'not' },
							description: { __type__: 'not' },
							dynamicTranslate: { __type__: 'not' },
							translate: { __type__: 'not' },
							help: { __type__: 'not' },
							mode: { __type__: 'not' },
						}),
						false
					),
					game: parseObject(game),
					_status: parseObject(_status),
				};
				game.hasPlayer2(current => {
					let id = current.playerid;
					map.players[id] = parseObject(result(current), null, current);
					if (current._ip) map[id]._ip = current._ip;
				}, true);
				function parseObject(obj, filter, parent, content) {
					list.push(obj);
					let newObject = {};
					Object.keys(obj).forEach(key => {
						newObject[key] = (getType(obj[key]) == 'player' && key.startsWith('previous')) || key.startsWith('next') || obj[key] == parent || (filter !== false && typeof filter == 'function' ? filter(obj, key, newObject) : filter !== false && obj[key] == list.at(-1)) ? (content && typeof content == 'function' ? content(obj, key, newObject) : { __type__: 'not' }) : obj[key] && typeof obj[key] == 'object' && (Object.values(obj[key]).includes(obj) || Object.values(obj[key]).includes(parent)) ? result(obj[key], true, obj) : result(obj[key]);
					});
					list.remove(obj);
					return newObject;
				}
				function result(item, parse, parent) {
					let type = getType(item);
					return [
						[
							type == 'player',
							() => {
								let obj = Object.assign(
									{
										[item.getCards ? '__cards__' : void 0]: {
											h: result(item.getCards('h')),
											e: result(item.getCards('e')),
											j: result(item.getCards('j')),
											s: result(item.getCards('s')),
											x: result(item.getCards('x')),
										},
										__type__: 'Player',
									},
									item
								);
								if (parse) return parseObject(obj, false, parent);
								return obj;
							},
						],
						[
							type == 'event',
							() => {
								return { info: get.eventInfoOL(item), __type__: 'GameEvent' };
							},
						],
						[
							type == 'card',
							() => {
								let card = Object.assign(item, { __type__: 'Card' });
								card.cards = [];
								return card;
							},
						],
						[type == 'Array', () => item.map(item => result(item, true, item))],
						[type == 'object', () => parseObject(item, true, item)],
						[type == 'function', () => Object.assign({ __type__: 'Function' }, { info: item.toString() })],
						[
							type == 'HTMLElement',
							() =>
								Object.assign(
									{},
									parseObject(
										item,
										(obj, key) => getType(obj[key]) == 'player',
										null,
										(obj, key) => (getType(obj[key]) == 'player' && { playerid: obj[key].playerid, __type__: 'Player' }) || { __type__: 'not' }
									),
									{
										info: item.outerHTML || { __type__: 'not' },
										__type__: item instanceof HTMLDivElement ? 'HTMLDivElement' : 'HTMLElement',
									}
								),
						],
						[1, () => item],
					].find(item => item[0])[1]();
				}
				function getType(item) {
					return (Array.isArray(item) && 'Array') || (item == null && 'Null') || (get.is.object(item) && 'object') || get.itemtype(item) || (item instanceof HTMLElement && 'HTMLElement') || typeof item;
				}
				if (create)
					return game.writeFile(
						`${get.stringify(map)}`,
						'mode',
						'dqzw_guihuaxishuang_active.json',
						function load() { }
					);
				return map;
			};
			// 活动
			{
				if (_status.dqzw_boss_activity == 'springFestival')
					lib.card.list.push(
						...[
							...[
								['club', 1],
								['heart', 13],
								['diamond', 5],
								['spade', 2],
							].map(item => [...item, 'dqzw_boss_activity_springFestival_yanhua']),
							...[
								['club', 7],
								['heart', 4],
								['diamond', 2],
								['spade', 10],
							].map(item => [...item, 'dqzw_boss_activity_springFestival_tianzhu']),
							...[
								['heart', 1],
								['diamond', 1],
							].map(item => [...item, 'dqzw_boss_activity_springFestival_baozhu']),
						]
					);
			}
			_status.dqzw_mode_config = lib.dqzw_mode_config[_status.dqzw_boss_mode];
			ui.create.dqzw_boss_modeStartPage();
			{
				let config = get.configOL('mode_exclusive_layout', 'dqzw_guihuaxishuang');
				if (config) ui.arena.dataset.rightLayout = 'on';
				// 防止按钮飞出屏幕,可能会有bug(
				lib.config.mode = 'boss';
				//启用手杀布局
				if (config) lib.init.layout('long2');
			}
			// 联机自由选将
			if (get.configOL('mode_connect_free_choose', 'dqzw_guihuaxishuang')) game.addGlobalSkill('dqzw_connect_free_choose');
			('step 1');
			// 没有启动？¿？强制启动!!!
			if (_status._dqzw_boss_mode_start && !game._dqzw_boss_mode_started) {
				_status._dqzw_boss_mode_start();
				delete _status._dqzw_boss_mode_start;
			}
			if (_status.dqzw_boss_activity == 'springFestival') {
				_status.tempBackground = 'ext:大权在握/image/activity/springFestival/background/bg.jpg';
				game.updateBackground();
			}
			var modeConfig = _status.dqzw_mode_config;
			if (lib.dqzw_mode_start[_status.dqzw_boss_mode]) lib.dqzw_mode_start[_status.dqzw_boss_mode]();
			// 创建角色
			if (_status.connectMode) {
				game.randomMapOL();
				game.friend = game.players.slice(0);
				game.broadcast(
					function (players, list, config, mode) {
						game.friend = players;
						if (list) {
							let none = list.filter(name => name === null || !name || !get.character(name));
							if (none.length)
								game.send(
									'exec',
									function (list, id) {
										if (!lib.nonedBossList) lib.nonedBossList = {};
										if (id && lib.playerOL[id]) lib.nonedBossList[id] = list;
									},
									none,
									game.onlineId || game.me.playerid
								);
						}
						_status.dqzw_boss_mode = mode;
					},
					game.friend,
					Object.keys(lib.character),
					lib.dqzw_mode_config,
					_status.dqzw_boss_mode
				);
				if (modeConfig && modeConfig.setSeat && !modeConfig.setSeatBroadcast) modeConfig.setSeat(game.players.randomSort(), modeConfig);
				game.broadcastAll(
					function (players, config) {
						if (config && config.setSeat) {
							if (config.setSeatBroadcast) config.setSeat(players, config);
							return;
						}
						let num = 0;
						players.forEach((player, index) => {
							let seat = index + num++;
							player.dataset.position = seat;
							player.seatNum = seat + 1;
						});
						ui.arena.setNumber(players.length * 2);
					},
					game.players.randomSort(),
					modeConfig
				);
			} else {
				game.prepareArena(lib.config.number);
				game.friend = game.players.slice(0);
				if (modeConfig && modeConfig.setSeat) modeConfig.setSeat(game.players.randomSort(), modeConfig);
				else {
					let num = 0;
					for (let player of game.players.randomSort()) {
						player.getId();
						player.dataset.position = game.players.indexOf(player) + num++;
						player.seatNum = game.players.indexOf(player) + num;
					}
					ui.arena.setNumber(game.players.length * 2);
				}
				game.chooseCharacter();
			}
			if (!modeConfig || !modeConfig.setSeat) {
				game.players.forEach(player => {
					player.seatNum = (player.dataset.position * 1 || 0) + 1;
				});
				game.updateSeat(null, game.players.length * 2 - 1);
			}
			('step 2');
			let none = Object.keys(lib.character).filter(name => name === null || !name || !get.character(name));
			Object.keys(lib.character).remove(...none, ...(lib.config[(_status.connectMode ? 'connect_' : '') + 'dqzw_boss_banned'] || []));
			none = none.filter(name => name !== null);
			if ((none.length && lib.config.dqzw_none_boss_character != none.join('')) || lib.nonedBossList) {
				let str = 'boss将池中以下武将不存在,已删除\n';
				if (lib.nonedBossList) for (var id in lib.nonedBossList) str += (lib.playerOL[id].nickname || id) + ':' + get.translation(lib.nonedBossList[id]) + '\n';
				if (none.length) str += (lib.nonedBossList ? '房主:' : '') + get.translation(none);
				game.saveConfig('dqzw_none_boss_character', none.join(''));
				game.broadcastAll(function (str) {
					if (str) alert(str);
				}, str);
				delete lib.nonedBossList;
			}
			('step 3');
			event.trigger('chooseCharacterOver');
			('step 4');
			let level = lib.config[`dqzw_boss_${_status.dqzw_boss_mode}_mode_level`] * 1 || 0;
			if (lib.dqzw_checkpointLevel_callback && lib.dqzw_checkpointLevel_callback[level]) lib.dqzw_checkpointLevel_callback[level](level);
			_status.dqzw_checkpoint_level = level + 1;
			if (get.configOL('single_control', 'dqzw_guihuaxishuang')) game.addGlobalSkill('autoswap');
			('step 5');
			var modeConfig = _status.dqzw_mode_config;
			if (!_status.dqzw_noStartSKill && modeConfig && modeConfig.startGainableSkills) {
				let skills = modeConfig.startGainableSkills;
				if (typeof skills == 'function') skills = skills(event, game.me);
				if (_status.connectMode) game.chooseSkillObtainOL(game.friend, skills, '请选择你要获得的技能').ai = () => get.rand(1, 5);
				else {
					for (let player of game.friend) player.chooseSkillObtain(skills, '请选择你要获得的技能').set('ai', () => get.rand(1, 5));
				}
			}
			('step 6');
			var modeConfig = _status.dqzw_mode_config,
				start = modeConfig && modeConfig.gameStart;
			if (start) {
				if (typeof start == 'function') start(event, game.me);
				else
					game.friend.forEach(player => {
						player.addSkill(start);
					});
			}
			('step 7');
			if (lib.checkpoint) game.createCheckpoint(lib.checkpoint[_status.dqzw_checkpoint_progress || 0]);
			('step 8');
			game.broadcastAll(function (config) {
				lib.setPopped(
					ui.create.system('手牌', null, true),
					() => {
						let uiintro = ui.create.dialog('hidden'),
							added = false;
						for (let player of game.me.getFriends()) {
							let cards = player.getCards('h');
							added = true;
							uiintro.add((player.nickname || 'AI') + '(' + get.translation(player) + ')的手牌');
							if (cards.length) uiintro.addSmall(cards, true);
							else uiintro.add('(无)');
						}
						if (!added) uiintro.add('无队友');
						return uiintro;
					},
					220
				);
				if (config)
					lib.setPopped(
						ui.create.system('天气', null, true),
						() => {
							let uiintro = ui.create.dialog('当前天气效果', 'hidden'),
								weather = _status.dqzw_boss_weather;
							if (weather) {
								let name = lib.skill[weather.name] ? weather.name : 'dqzw_boss_' + weather.name,
									skillinfo = lib.translate[weather.value + '_info'];
								if (weather.type == 'skill') uiintro.add('类型:技能');
								if (weather.range == 'global') uiintro.add('生效对象:所有角色');
								else if (weather.player) uiintro.add('生效对象:' + player.name1);
								uiintro.add('来源:' + (weather.source || '无'));
								if (name) uiintro.add('「' + get.translation(name) + '」');
								if (lib.translate[name + '_info']) {
									uiintro.add('效果描述');
									uiintro.addText(lib.translate[name + '_info']);
								}
								if (weather.type == 'skill' && lib.skill[weather.value] && skillinfo && skillinfo != lib.translate[name + '_info']) {
									uiintro.add('技能描述');
									uiintro.addText(skillinfo);
								}
							} else uiintro.add('(无)');
							return uiintro;
						},
						220
					);
			}, get.configOL('random_weather', 'dqzw_guihuaxishuang'));
			game.phaseLoop(game.players[0]);
		},
		// 卡牌
		card: {
			// 晋势
			dqzw_boss_choice_group_skill_jin: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/group_skill_jin.jpg',
			},
			dqzw_boss_choice_group_skill_jin_upgrade: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/group_skill_jin_upgrade.jpg',
				ai: {
					result: {
						target: 3,
					},
				},
			},
			// 群心
			dqzw_boss_choice_group_skill_qun: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/group_skill_qun.jpg',
			},
			dqzw_boss_choice_group_skill_qun_upgrade: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/group_skill_qun_upgrade.jpg',
				ai: {
					result: {
						target: 3,
					},
				},
			},
			// 蜀义
			dqzw_boss_choice_group_skill_shu: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/group_skill_shu.jpg',
			},
			dqzw_boss_choice_group_skill_shu_upgrade: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/group_skill_shu_upgrade.jpg',
				ai: {
					result: {
						target: 3,
					},
				},
			},
			// 吴耀
			dqzw_boss_choice_group_skill_wu: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/group_skill_wu.jpg',
			},
			dqzw_boss_choice_group_skill_wu_upgrade: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/group_skill_wu_upgrade.jpg',
				ai: {
					result: {
						target: 3,
					},
				},
			},
			// 魏业
			dqzw_boss_choice_group_skill_wei: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/group_skill_wei.jpg',
			},
			dqzw_boss_choice_group_skill_wei_upgrade: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/group_skill_wei_upgrade.jpg',
				ai: {
					result: {
						target: 3,
					},
				},
			},
			// 成长
			dqzw_boss_choice_growth: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/growth.jpg',
				ai: {
					result: {
						target(player, target, card) {
							let val = 4;
							if (target.maxHp > 4 && target.hp > 3) val = 1;
							else val += get.rand(1, 3);
							return val;
						},
					},
				},
			},
			// 复活
			dqzw_boss_choice_revive: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/revive.jpg',
				ai: {
					result: {
						player: 100,
					},
				},
			},
			// 获得技能
			dqzw_boss_choice_skill: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/skill.jpg',
				ai: {
					result: {
						target: (_player, _target, card) => get.skillRank(card.skill, 'inout') * 1.8,
					},
				},
			},
			// 绝烈-伤害
			dqzw_boss_choice_juelie_damage: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/juelie_damage.jpg',
				ai: {
					result: {
						target: () => get.rand(1, 3),
					},
				},
			},
			// 绝烈-回复
			dqzw_boss_choice_juelie_recover: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/juelie_recover.jpg',
				ai: {
					result: {
						target: () => get.rand(1, 2),
					},
				},
			},
			// 命运
			dqzw_boss_choice_destiny: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/destiny.jpg',
				ai: {
					result: {
						target: () => get.rand(0, 2),
					},
				},
			},
			// 幸运
			dqzw_boss_choice_lucky: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/lucky.jpg',
				ai: {
					result: {
						target: (_player, target) => target.getDamagedHp() / 2 + get.rand(2, 4),
					},
				},
			},
			// 复活甲
			dqzw_boss_choice_shilian_guardianAngel: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/shilian_guardianAngel.jpg',
				ai: {
					result: {
						target: (_player, target) => 10 - (target.maxHp + target.hp),
					},
				},
			},
			// 获得技能
			dqzw_boss_choice_shilian_skill: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/shilian_skill.jpg',
				ai: {
					result: {
						target: (_player, target) => Math.max(1, target.dqzw_getRecastableSkills().length / 3),
					},
				},
			},
			// 重铸技能
			dqzw_boss_choice_shilian_recast: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/shilian_recast.jpg',
				ai: {
					result: {
						target: (_player, target) => target.dqzw_getRecastableSkills().length / get.rand(4, 10),
					},
				},
			},
			dqzw_boss_choice_xingxiang_east: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/xingxiang_east.jpg',
			},
			dqzw_boss_choice_xingxiang_south: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/xingxiang_south.jpg',
			},
			dqzw_boss_choice_xingxiang_west: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/xingxiang_west.jpg',
			},
			dqzw_boss_choice_xingxiang_north: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/xingxiang_north.jpg',
			},
			dqzw_boss_choice_xingxiang_middle: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/xingxiang_middle.jpg',
			},
			dqzw_boss_choice_mengjie_wuyong: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/mengjie_wuyong.jpg',
			},
			dqzw_boss_choice_mengjie_renzhi: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/mengjie_renzhi.jpg',
			},
			dqzw_boss_choice_mengjie_guojue: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/mengjie_guojue.jpg',
			},
			dqzw_boss_choice_mengjie_gangying: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/mengjie_gangying.jpg',
			},
			dqzw_boss_choice_mengjie_duomou: {
				fullimage: true,
				fullskin: true,
				image: 'ext:大权在握/image/choice/mengjie_duomou.jpg',
			},
			// 烟花
			dqzw_boss_activity_springFestival_yanhua: {
				image: 'ext:大权在握/image/activity/springFestival/card/yanhua.png',
				decadeImage: 'inherit:decade/yanhua.png',
				fullskin: true,
				type: 'trick',
				enable: true,
				filterTarget: true,
				selectTarget: -1,
				content() {
					'step 0';
					if (typeof event.baseDamage != 'number') event.baseDamage = 1;
					('step 1');
					let card = (target.getAllHistory('sourceDamage', evt => evt.card).at(-1) || {}).card;
					if (card)
						target
							.chooseCard(
								`展示一张${get.translation(card.name)}或受到${event.baseDamage || 1}点火焰伤害`,
								'he',
								card => card.name == get.event('_cardName'),
								card => {
									let player = get.player(),
										source = get.event('_sourcePlayer');
									if (get.damageEffect(player, source, player) >= 0) return 0;
									if (source.hasSkillTag('notricksource')) return 0;
									if (player.hasSkillTag('notrick')) return 0;
									return 100000 - get.value(card);
								}
							)
							.set('_cardName', card.name)
							.set('_sourcePlayer', player)
							.set('autochoose', function () {
								return this.player && this.player.hasCard(get.event('_cardName'), 'he');
							});
					('step 2');
					if (result && result.bool && result.cards && result.cards.length) target.showCards(result.cards);
					else target.damage(event.baseDamage || 1, 'fire', player);
				},
				ai: {
					wuxie(target, card, player, viewer) {
						if (get.attitude(viewer, target) > 0 && !target.hasCard(card => card.name == ((target.getAllHistory('sourceDamage', evt => evt.card).at(-1) || {}).card || {}).name, 'he')) {
							if (!target.countCards('h') || target.hp == 1) return 0;
						}
					},
					basic: {
						order: 6,
						useful: [5, 3],
						value: 5,
					},
					result: {
						target_use(player, target) {
							if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
							let nh = target.countCards('h');
							if (get.mode() == 'identity' && target.isZhu && nh < 3 && target.hp < 2) return -100;
							let card = (target.getAllHistory('sourceDamage', evt => evt.card).at(-1) || {}).card || {};
							if (target.hasKnownCards(player, cardx => /[he]/.test(get.position(cardx)) && cardx.name == card.name) && get.damageEffect(target, player, player, 'fire') < 1) return 0;
							if (!nh) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						},
						target(player, target) {
							let nh = target.countCards('h');
							if (get.mode() == 'identity' && target.isZhu && nh < 3 && target.hp < 2) return -100;
							let card = (target.getAllHistory('sourceDamage', evt => evt.card).at(-1) || {}).card || {};
							if (target.hasKnownCards(player, cardx => /[he]/.test(get.position(cardx)) && cardx.name == card.name) && get.damageEffect(target, player, player, 'fire') < 1) return 0;
							if (nh == 0) return -2;
							if (nh == 1) return -1.7;
							return -1.5;
						},
					},
					tag: {
						damage: 1,
						fireDamage: 1,
						natureDamage: 1,
					},
				},
			},
			// 爆竹
			dqzw_boss_activity_springFestival_baozhu: {
				image: 'ext:大权在握/image/activity/springFestival/card/baozhu.png',
				decadeImage: 'inherit:decade/baozhu.png',
				fullskin: true,
				type: 'basic',
				filterTarget: true,
				global: 'g_dqzw_boss_activity_springFestival_baozhu_use',
				content() {
					'step 0';
					if (target.getCards('h').length) {
						player.chooseControl('ok').set('dialog', [get.translation(target) + '的手牌', target.getCards('h')]);
						game.addCardKnower(target.getCards('h'), player);
					}
					('step 1');
					let cards = target.getCards('h', { color: 'black' });
					if (cards.length) target.discard(cards);
					else player.addTempSkill('dqzw_boss_activity_springFestival_baozhu_out');
				},
				ai: {
					basic: {
						order: 8,
						useful: [6, 2],
						value: 6,
					},
					result: {
						target(player, target) {
							let att = get.attitude(player, target);
							if (!target.getCards('h').length) return 0;
							return -(-att + target.getCards('h').length);
						},
					},
					tag: {
						loseCard: 1,
						discard: 1,
						out: 1,
					},
				},
			},
			// 天烛
			dqzw_boss_activity_springFestival_tianzhu: {
				image: 'ext:大权在握/image/activity/springFestival/card/tianzhu.png',
				decadeImage: 'inherit:decade/tianzhu.png',
				fullskin: true,
				type: 'basic',
				enable: true,
				filterTarget: (card, player, target) => player.isEnemiesOf(target),
				selectTarget: -1,
				contentBefore() {
					if (game.boss && ((game.boss.length && game.boss.includes(player)) || game.boss == player)) player.draw(3);
				},
				content() {
					'step 0';
					event.baseDamage = 2;
					('step 1');
					if (game.boss && ((game.boss.length && game.boss.includes(player)) || game.boss == player)) target.damage(event.baseDamage || 2, 'fire');
					else {
						target.setStorage('dqzw_boss_activity_springFestival_tianzhu_damage', {
							card: card,
							num: event.baseDamage || 2,
							source: player,
						});
						target.addSkill('dqzw_boss_activity_springFestival_tianzhu_damage');
					}
				},
				ai: {
					basic: {
						order: 8.5,
						useful: 5.5,
						value: 8.2,
					},
					result: {
						player(player, target) {
							if (game.boss && ((game.boss.length && game.boss.includes(player)) || game.boss == player)) return 3;
							return 1;
						},
						target_use(player, target) {
							if (get.damageEffect(target, player, player, 'fire') < 1) return 0;
							return -3.5;
						},
						target(player, target) {
							let att = get.attitude(player, target);
							if (att > 1) return 0;
							return -Math.max(0, -att + get.damageEffect(target, player, player, 'fire'));
						},
					},
					tag: {
						draw: (card, player = get.player()) => {
							if (game.boss && ((game.boss.length && game.boss.includes(player)) || game.boss == player)) return 3;
							return 0;
						},
						damage: 2,
						fireDamage: 2,
						natureDamage: 2,
					},
				},
			},
		},
		// 技能
		skill: {
			g_dqzw_boss_activity_springFestival_baozhu_use: {
				trigger: {
					player: 'phaseUseBegin',
				},
				filter: (event, player) => !event._notrigger.includes(event.player) && player.hasUsableCard('dqzw_boss_activity_springFestival_baozhu'),
				silent: true,
				content() {
					'step 0';
					player.chooseToUse(get.prompt('dqzw_boss_activity_springFestival_baozhu').replace(/发动/, '使用'), (card, player) => card.name == 'dqzw_boss_activity_springFestival_baozhu' && lib.filter.cardEnabled(card, player, 'forceEnable')).targetRequired = true;
					('step 1');
					if (result.bool && lib.skill[event.name].filter(trigger, player, event.triggername)) event.goto(0);
				},
			},
			dqzw_boss_activity_springFestival_baozhu_out: {
				charlotte: true,
				group: 'undist',
				init: player => {
					if (player.isIn()) {
						game.broadcastAll(player => {
							player.classList.add('out');
						}, player);
						game.log(player, '移出了游戏');
					}
				},
				onremove: player => {
					if (player.isOut()) {
						game.broadcastAll(player => {
							player.classList.remove('out');
						}, player);
						game.log(player, '移回了游戏');
					}
				},
			},
			dqzw_boss_activity_springFestival_tianzhu_damage: {
				trigger: {
					player: 'useCard',
				},
				filter: evt => get.tag(evt.card, 'damage'),
				silent: true,
				charlotte: true,
				content() {
					'step 0';
					player
						.chooseTarget(
							'选择一名友方角色,令其成为此牌的唯一目标',
							true,
							(_event, player, target) => player.isFriendsOf(target) && player.canUse(get.event('_useCard'), target),
							target => 1000 - -get.effect(target, get.event('_useCard'), get.player(), get.player())
						)
						.set('_useCard', trigger.card);
					('step 1');
					trigger.targets.length = 0;
					if (result.targets && result.targets.length) trigger.targets.push(...result.targets);
					let info = player.getStorage(event.name, 0);
					if (info) {
						let damage = player.damage(info.num, 'fire', info.card, info.source);
						event.next.remove(damage);
						trigger.after.push(damage);
					}
					player.removeSkill(event.name, true);
				},
				mark: true,
				marktext: '烛',
				intro: {
					name: '天烛',
					content: '下一张伤害牌必须指定友方角色为唯一目标且于结算后受到两点火焰伤害',
				},
			},
			dqzw_boss_jiyue: {
				enable: 'phaseUse',
				usable: 1,
				filter(_event, player) {
					return player.countCards('h') > 2;
				},
				filterTarget(_event, player, target) {
					return player.isEnemiesOf(target);
				},
				check(card) {
					return 8 - get.value(card);
				},
				filterCard: {
					color: 'red',
				},
				selectCard: 3,
				discard: false,
				lose: false,
				delay: false,
				content() {
					'step 0';
					player.give(cards, target);
					('step 1');
					event.dcard = Math.floor(target.countCards('h') / 2);
					event.dhandcard = target.countCards('h');
					player
						.chooseControl(`获得其${event.dcard}张牌`, `将手牌䃼至${event.dhandcard}张`)
						.set('_target', target)
						.set('dcard', event.dcard)
						.set('dhandcard', event.dhandcard)
						.set('ai', function () {
							let target = _status.event._target,
								player = _status.event.player,
								dcard = _status.event.dcard,
								dhandcard = _status.event.dhandcard;
							if (dcard > dhandcard) return 0;
							return 1;
						});
					('step 2');
					switch (result.index) {
						case 0:
							player.gainPlayerCard(target, 'h', event.dcard, true);
							break;
						case 1:
							player.drawTo(event.dhandcard);
					}
				},
				ai: {
					order: 1,
					result: {
						target(player, target) {
							if (target.countCards('h') + 3 - player.countCards('h') - 3 > 4) return -target.countCards('h');
						},
					},
				},
			},
			dqzw_boss_randeng: {
				enable: 'phaseUse',
				usable: 1,
				filter(_event, player) {
					return player.countCards('h') > 1;
				},
				filterCard: true,
				selectCard: 2,
				discard: false,
				loseTo: 'special',
				check(card) {
					if (get.tag(card, 'damage')) return 4 - get.value(card);
					return 8 - get.value(card);
				},
				content() {
					player.getFriends(true).forEach(player => {
						player.addTempSkill(event.name + '_addDamage', 'roundStart');
					});
					player.addTempSkill(event.name + '_mark', 'roundStart');
				},
				ai: {
					order: 13,
					result: {
						player(player) {
							let list = player.getFriends(true);
							if (list) {
								list = list
									.sort((a, b) => {
										return a.seatNum - b.seatNum;
									})
									.slice(list.indexOf(player));
								let num = list.reduce((pre, cur) => {
									return (
										pre +
										cur.countCards('h', card => {
											return get.tag(card, 'damage');
										})
									);
								}, 0);
								if (num > 2) return num;
							}
						},
					},
				},
				subSkill: {
					addDamage: {
						trigger: {
							source: 'damageBegin1',
						},
						silent: true,
						content() {
							trigger.num++;
						},
					},
					mark: {
						mark: true,
						intro: {
							content: '己方角色造成的伤害+1',
						},
					},
				},
			},
			dqzw_boss_shangyue: {
				enable: 'phaseUse',
				usable: 1,
				filter(_event, player) {
					return game.hasPlayer(function (target) {
						return player.isEnemiesOf(target) && target.countCards('h');
					});
				},
				filterTarget(_event, player, target) {
					return player.isEnemiesOf(target) && target.countCards('h');
				},
				content() {
					player.gainPlayerCard(target, 'h', 'visible', 3, true);
				},
				ai: {
					order: 13,
					result: {
						player: 1,
						target(player, target, card) {
							return -(target.countCards('h') + target.countCards('h') == 3 ? 10 : 0);
						},
					},
				},
			},
			dqzw_boss_guanchao: {
				enable: 'phaseUse',
				usable: 1,
				selectTarget: -1,
				filter(_event, player) {
					return game.hasPlayer(target => {
						return player.isEnemiesOf(target) && target.countCards('h');
					});
				},
				filterTarget(_event, player, target) {
					return player.isEnemiesOf(target) && target.countCards('h');
				},
				content() {
					'step 0';
					target
						.chooseCard(
							`请选择要展示并令
                                ${get.translation(player)}
                                获得的牌
                                `,
							true
						)
						.set('ai', card => {
							return -get.value(card);
						});
					('step 1');
					target.showCards(
						result.cards,
						`
                                观潮
                                <br>
                                ${get.translation(target)}展示的牌
                                `
					);
					('step 2');
					player.gain(result.cards, target, 'gain2');
				},
				ai: {
					order: 11,
					result: {
						player: 1,
					},
				},
			},
			dqzw_boss_yingui: {
				mod: {
					aiOrder(player, card, num) {
						if (card.name == 'jiu') return num + get.order({ name: 'kaihua' }, player);
					},
				},
				trigger: {
					player: ['phaseBegin', 'useCardAfter'],
				},
				filter(event, player) {
					if (event.name == 'phase') return get.cardPile('jiu');
					return event.card && event.card.name == 'jiu';
				},
				forced: true,
				content() {
					if (trigger.name == 'phase') {
						let card = get.cardPile('jiu');
						if (card) player.gain(card, 'gain2');
					} else
						player.useCard(
							{
								name: 'kaihua',
							},
							player
						);
				},
			},
			dqzw_boss_shilian_guardianAngel: {
				mark: true,
				intro: {
					content: 'limited',
				},
				init: player => (player.storage.dqzw_boss_shilian_guardianAngel = true),
				trigger: {
					player: 'dying',
				},
				filter: (_event, player) => player.storage.dqzw_boss_shilian_guardianAngel,
				forced: true,
				notGainableSkill: true,
				limited: true,
				nobracket: true,
				_priority: 20,
				//锁定技,你进入濒死状态时回复体力至上限,若此时不是你的回合则立即结束当前回合
				async content(event, trigger, player) {//QQQ
					player.awakenSkill(event.name);
					player.recover(player.getDamagedHp());
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
					player.phase('nodelay');
				},
			},
			dqzw_boss_chuanxi: {
				trigger: {
					player: 'useCard',
				},
				filter: event => !/equip|delay/.test(get.type(event.card)),
				forced: true,
				dqzw_limitable: true,
				content() {
					trigger.effectCount++;
				},
			},
			dqzw_boss_shanqing: {
				trigger: {
					source: 'damageAfter',
				},
				filter: event => event.num > 0,
				forced: true,
				dqzw_limitable: true,
				content() {
					if (player.isDamaged()) player.recover(trigger.num);
					else player.changeHujia(trigger.num);
				},
			},
			dqzw_boss_tianzhu: {
				trigger: {
					global: 'damageAfter',
				},
				filter: event => event.num > 0,
				forced: true,
				dqzw_limitable: true,
				content() {
					player.gainMaxHp(trigger.num);
				},
			},
			dqzw_boss_yuanze: {
				trigger: {
					player: 'recoverBegin',
				},
				filter: event => event.num > 0,
				forced: true,
				dqzw_limitable: true,
				content() {
					player.changeHujia(trigger.num);
				},
			},
			dqzw_boss_cangsi: {
				trigger: {
					player: 'phaseUseEnd',
				},
				filter: (_event, player) => player.hasUseTarget((player.getHistory('useCard', evt => !/equip|delay/.test(get.type(evt.card))).at(-1) || {}).card),
				forced: true,
				dqzw_limitable: true,
				content() {
					let cards = get.bottomCards(),
						card = player.getHistory('useCard', evt => !/equip|delay/.test(get.type(evt.card))).at(-1).card;
					player.chooseUseTarget(`将${get.translation(cards)}当【${get.translation(card.name)}】使用`, card, cards);
				},
			},
			dqzw_boss_xueyue: {
				trigger: {
					player: 'dying',
				},
				filter(event, player) {
					return (
						game.friend &&
						game.friend.includes(player) &&
						!player.hasSkill('dqzw_boss_xueyue_round') &&
						player.getFriends(target => {
							return target.countCards('h');
							//  && target.getStorage('dqzw_xueyue_choice').length;
						}).length
					);
				},
				forced: true,
				notGainableSkill: true,
				content() {
					'step 0';
					event.targets = player.getFriends(target => {
						return target.countCards('h');
						//  && target.getStorage('dqzw_xueyue_choice').length;
					});
					('step 1');
					if (!event.targets.length) {
						event.goto(3);
						return;
					}
					target = event.targets.shift();
					let list = ['弃置所有手牌令' + get.translation(player) + '回复1点体力', '弃置所有手牌并摸等量的牌'],
						option = ['回血', '制衡'];
					target
						.chooseControl(
							...option,
							'cancel2'
						)
						.set('choiceList', list)
						.set('prompt', get.prompt(event.name))
						.set('target', player)
						.set('ai', () => {
							let target = _status.event.target,
								player = _status.event.player,
								canSave =
									player.canSave(target) ||
									player.countCards('hs', card => {
										let info = get.info(card);
										if (!info.singleCard) {
											let mod = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
											if (mod == false) return false;
											mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
											if (mod != 'unchanged') return mod;
										}
										return lib.filter.cardSavable(card, player, target);
									}) >=
									-target.hp + 1;
							if (!canSave && target.hp >= 0 && player.countCards('h') < 5) return '回血';
							if (
								!canSave &&
								player.getCards('h').every(card => {
									return 6 - get.value(card);
								})
							)
								return '制衡';
							return 'cancel2';
						});
					event.target = target;
					('step 2');
					if (!result || !result.control || result.control == 'cancel2') {
						event.goto(1);
						return;
					}
					let cards = target.getCards('h');
					//, index;
					target.discard(cards);
					switch (result.control) {
						case '回血':
							player.recover();
							//index = 0;
							break;
						case '制衡':
							target.draw(cards.length);
						//index = 1;
					}
					//target.getStorage('dqzw_xueyue_choice').remove(index);
					if (event.targets.length) event.goto(1);
					('step 3');
					player.addTempSkill(event.name + '_round', 'roundStart');
				},
				subSkill: {
					round: {
						charlotte: true,
					},
				},
			},
			dqzw_boss_yuexuan: {
				group: ['dqzw_boss_xueyue', 'dqzw_boss_shiyue', 'dqzw_boss_yuehua'],
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				_priority: 10,
				notGainableSkill: true,
				filter(_event, player) {
					return game.friend && game.friend.includes(player);
				},
				content() {
					player.draw();
				},
				mod: {
					cardUsable(card, player, num) {
						if (game.friend && game.friend.includes(player) && card.name == 'sha') return num + 1;
					},
				},
			},
			dqzw_boss_shiyue: {
				trigger: {
					global: 'die',
				},
				filter(event, player) {
					return (
						event.player != player &&
						player.isFriendsOf(event.player) &&
						event.player.getSkills(true, false, false).filter(name => {
							return lib.skill[name] && !lib.skill[name].notGainableSkill;
						}).length
					);
				},
				notGainableSkill: true,
				forced: true,
				logTarget: 'player',
				content() {
					'step 0';
					let skills = trigger.player.getSkills(true, false, false).filter(name => {
						return lib.skill[name] && !lib.skill[name].notGainableSkill;
					});
					if (skills.length) player.chooseSkillObtain(skills, get.prompt(event.name) + '<br>获得' + get.translation(trigger.player) + '一个技能');
				},
			},
			dqzw_boss_yuehua: {
				mark: true,
				intro: {
					content: 'limited',
				},
				trigger: {
					//global: 'checkpointStart'
					player: 'dieBegin',
				},
				filter(_event, player) {
					return !player.storage.dqzw_boss_yuehua && lib.skill.rest && lib.skill.rest.enter;
				},
				global: 'dqzw_boss_yuehua_enterRest',
				limited: true,
				notGainableSkill: true,
				//forced: true,
				forceDie: true,
				forced: true,
				content() {
					trigger.cancel();
					player.restinfo = { round: 1 };
					lib.skill.rest.enter(player);
					player.storage.dqzw_boss_yuehua = true;
				},
				subSkill: {
					mark: {
						marktext: '华',
						intro: {
							content: '死亡时改为修整两轮',
						},
					},
					enterRest: {
						trigger: {
							player: 'dieBegin',
						},
						filter(_event, player) {
							return player.hasMark('dqzw_boss_yuehua_mark') && lib.skill.rest && lib.skill.rest.enter;
						},
						forceDie: true,
						silent: true,
						content() {
							trigger.cancel();
							player.removeMark('dqzw_boss_yuehua_mark', player.countMark('dqzw_boss_yuehua'));
							player.restinfo = { round: 2 };
							game.log(player, '的', '#g【月华】', '标记生效');
							lib.skill.rest.enter(player);
						},
					},
				},
			},
			rest: {
				enter(player, log) {
					if (get.itemtype(player) == 'player') {
						let info = { round: 1 };
						if (player.restinfo) info = player.restinfo;
						for (let name in info) {
							switch (name) {
								case 'round':
									player.storage.restRound = info[name];
									break;
								case 'phase':
									player.storage.restPhase = info[name];
									break;
								case 'globalPhase':
									player.storage.restPhase = info[name];
									player.storage.restPhase.global = true;
									break;
							}
						}
						game.broadcastAll(function (player) {
							player.classList.add('out');
						}, player);
						switch (typeof log) {
							case 'string':
								game.log(log);
								return;
							case 'function':
								game.log(log(player));
								return;
							case 'object':
								if (Array.isArray(log)) game.log(...log);
								return;
						}
						let phase = info.phase || info.globalPhase;
						if (log !== false) {
							game.log(player, '修整', '#g' + phase > 0 ? get.cnNumber(phase) + '回合' : info.round ? get.cnNumber(info.round) + '轮' : '');
							game.log(player, '移出了游戏');
						}
						player.addSkill('rest');
					}
				},
				trigger: {
					global: ['roundStart', 'phaseBefore'],
				},
				silent: true,
				forceOut: true,
				forceDie: true,
				forced: true,
				charlotte: true,
				notGainableSkill: true,
				filter(event, player, name) {
					let storage = player.storage;
					if (Object.keys(storage).length) {
						if (storage.restPhase) return event.name == 'phase' && storage.restPhase.global ? true : event.player == player;
						if (storage.restRound) return name != 'phaseBefore';
					}
					return false;
				},
				content() {
					let storage = player.storage;
					if (event.triggername == 'phaseBefore') {
						storage.restPhase--;
					} else {
						storage.restRound--;
					}
					if (!storage.restRound && !storage.restPhase) {
						game.broadcastAll(function (player) {
							player.classList.remove('out');
						}, player);
						if (player.storage.restRecover !== false) player.hp = player.maxHp;
						game.log(player, '回到游戏');
						delete player.storage.restRound;
						delete player.storage.restPhase;
						delete player.storage.restRecover;
					}
				},
			},
			dqzw_boss_yuanyue: {
				trigger: {
					player: 'phaseAfter',
				},
				init(player) {
					if (!player.storage.dqzw_boss_xueyue_choice) player.storage.dqzw_boss_xueyue_choice = [0, 1];
				},
				filter(_event, player) {
					let map = {};
					player.getHistory('useCard', evt => {
						let color = get.color(evt.card);
						if (color == 'none') return;
						if (!map[color]) map[color] = 1;
						else map[color]++;
					});
					return Math.min(...Object.values(map));
				},
				forced: true,
				_priority: -5,
				content() {
					let map = {};
					player.getHistory('useCard', evt => {
						let color = get.color(evt.card);
						if (color == 'none') return;
						if (!map[color]) map[color] = 1;
						else map[color]++;
					});
					player.draw(Math.min(...Object.values(map)));
				},
			},
			dqzw_boss_canyue: {
				intro: {
					content: '已记录花色:$',
				},
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					let suit = event.card.suit;
					return suit && !player.getStorage('dqzw_boss_canyue').includes(suit);
				},
				forced: true,
				content() {
					'step 0';
					player.markAuto(event.name, [trigger.card.suit]);
					if (player.getStorage(event.name).length > 3) {
						player.unmarkAuto(event.name, player.getStorage(event.name));
						player
							.chooseTarget(true, `请选择【${get.translation(event.name)}】的目标`, '弃置一名角色的一张牌', function (_event, player, target) {
								return target.countDiscardableCards(player, 'he') > 0;
							})
							.set('ai', function (target) {
								let player = _status.event.player;
								return get.effect(
									target,
									{
										name: 'guohe_copy2',
									},
									player,
									player
								);
							});
					}
					('step 1');
					if (result.bool) {
						let target = result.targets[0];
						player.line(target, 'green');
						player.discardPlayerCard(target, 'he', true);
					}
				},
			},
			dqzw_boss_boss_jiyue: {
				notGainableSkill: true,
				mod: {
					cardUsable(card, player, num) {
						if (
							player.getFriends(true).reduce((pre, cur) => {
								return pre + cur.countCards('h');
							}, 0) /
							player.getFriends(true).length >
							player.getEnemies().reduce((pre, cur) => {
								return pre + cur.countCards('h');
							}, 0) /
							player.getEnemies().length &&
							card.name == 'sha'
						)
							return Infinity;
					},
				},
			},
			dqzw_boss_shenwei: {
				trigger: {
					global: 'gainAfter',
				},
				usable: 5,
				filter(event, player) {
					return event.player != player && event.cards.length && event.getParent(2).name != 'dqzw_boss_shenwei';
				},
				forced: true,
				logTarget: 'player',
				content() {
					player.draw(trigger.cards.length);
				},
			},
			dqzw_boss_shenen: {
				trigger: {
					player: 'gainAfter',
				},
				filter(event, player) {
					return event.cards && event.cards.length;
				},
				_priority: -5,
				forced: true,
				content() {
					'step 0';
					event.num = trigger.cards.length;
					let next = player.chooseToMove();
					next.set(
						'prompt',
						get.prompt(event.name) +
						`<div class = "text center">
                                对至多${get.cnNumber(Math.min(event.num, game.players.length))}名角色造成${event.num}点伤害或回复${event.num}点体力
                                </div>`
					);
					next.set('list', [['场上角色', [game.players.slice(0), 'player']], ['造成伤害'], ['回复体力']]);
					next.set('filterOk', function (moved) {
						return moved[1].length || moved[2].length;
					});
					next.set('filterMove', function (from, to, moved) {
						if (/1|2/.test(to) && moved[0].includes(from.link) && moved[1].length + moved[2].length + 1 > Math.min(game.players.length, _status.event.num)) return false;
						if (isNaN(Number(to))) {
							add(from, to.parentNode._link);
							add(to, from.parentNode._link);
						} else add(from, to);
						function add(node, index) {
							let nature,
								list = ['recover', 'target'];
							if (index == 1) {
								nature = list[1];
								node.link.classList.add(nature);
								node.link.classList.remove(list[0]);
								node.link.prompt('受到伤害', 'fire');
							}
							if (index == 2) {
								nature = list[0];
								node.link.classList.add(nature);
								node.link.classList.remove(list[1]);
								node.link.prompt('回复体力', 'wood');
							}
							if (!nature) {
								while (list.length) node.link.classList.remove(list.shift());
								node.link.unprompt();
							}
						}
						return true;
					});
					next.set('num', event.num);
					next.set('processAI', function (list) {
						let players = list[0][1][0],
							result = [[], [], [[], [], []]],
							num = Math.min(players.length, _status.event.num),
							player = _status.event.player;
						for (let current of players) {
							result[0].push({
								player: current,
								val: get.damageEffect(current, player, player),
							});
							result[1].push({
								player: current,
								val: get.recoverEffect(current, player, player),
							});
						}
						result.forEach(arr => {
							arr.sort((a, b) => {
								return b.val - a.val;
							});
						});
						while (num-- > 0) {
							if (result[0][0].val > result[1][0].val && result[0].length) result[2][1].push(result[0].shift().player);
							else if (result[1].length) result[2][2].push(result[1].shift().player);
							else break;
						}
						return result[2];
					});
					('step 1');
					game.broadcastAll(function () {
						game.players.forEach(player => {
							player.classList.remove('target');
							player.classList.remove('recover');
							player.unprompt();
						});
					});
					if (result.moved && (result.moved[1].length || result.moved[2].length)) {
						let damage = result.moved[1],
							recover = result.moved[2];
						player.line(damage, 'fire');
						player.line(recover, 'green');
						damage.forEach(player => {
							player.damage(event.num);
						});
						recover.forEach(player => {
							player.recover(event.num);
						});
					}
				},
			},
			dqzw_boss_shenci: {
				trigger: {
					player: 'gainAfter',
				},
				filter(event, player) {
					return event.cards && event.cards.length;
				},
				_priority: 5,
				forced: true,
				content() {
					'step 0';
					event.num = trigger.cards.length;
					let next = player.chooseToMove();
					next.set(
						'prompt',
						get.prompt(event.name) +
						`<div class = "text center">
                                令至多${get.cnNumber(Math.min(event.num, game.players.length))}名角色摸或弃置${get.cnNumber(event.num)}张牌
                                </div>`
					);
					next.set('list', [['场上角色', [game.players.slice(0).remove(player), 'player']], ['弃置牌'], ['摸牌']]);
					next.set('filterOk', function (moved) {
						return moved[1].length || moved[2].length;
					});
					next.set('filterMove', function (from, to, moved) {
						if (to == 1 && from && !from.getDiscardableCards(_status.event.player, 'he').length) return false;
						if (/1|2/.test(to) && moved[0].includes(from.link) && moved[1].length + moved[2].length + 1 > Math.min(game.players.slice(0).remove(player).length, _status.event.num)) return false;
						if (isNaN(Number(to))) {
							add(from, to.parentNode._link);
							add(to, from.parentNode._link);
						} else add(from, to);
						function add(node, index) {
							let nature,
								list = ['recover', 'target'];
							if (index == 1) {
								nature = list[1];
								node.link.classList.add(nature);
								node.link.classList.remove(list[0]);
								node.link.prompt('弃置牌', 'fire');
							}
							if (index == 2) {
								nature = list[0];
								node.link.classList.add(nature);
								node.link.classList.remove(list[1]);
								node.link.prompt('摸牌', 'wood');
							}
							if (!nature) {
								while (list.length) node.link.classList.remove(list.shift());
								node.link.unprompt();
							}
						}
						return true;
					});
					next.set('num', event.num);
					next.set('processAI', function (list) {
						let players = list[0][1][0],
							result = [[], [], [[], [], []]],
							num = Math.min(players.length, _status.event.num),
							player = _status.event.player;
						for (let current of players) {
							if (current.getDiscardableCards(player, 'he').length)
								result[0].push({
									player: current,
									val: Math.max(-get.attitude(player, current) - current.countCards('h'), 1),
								});
							result[1].push({
								player: current,
								val: Math.max(get.attitude(player, current) - current.countCards('h'), 1),
							});
						}
						result.forEach(arr => {
							arr.sort((a, b) => {
								return b.val - a.val;
							});
						});
						while (num-- > 0) {
							if (result[0][0].val > result[1][0].val && result[0].length) result[2][1].push(result[0].shift().player);
							else if (result[1].length) result[2][2].push(result[1].shift().player);
							else break;
						}
						return result[2];
					});
					('step 1');
					game.broadcastAll(function () {
						game.players.forEach(player => {
							player.classList.remove('target');
							player.classList.remove('recover');
							player.unprompt();
						});
					});
					if (result.moved && (result.moved[1].length || result.moved[2].length)) {
						let discard = result.moved[1],
							draw = result.moved[2];
						player.line(discard, 'fire');
						player.line(draw, 'green');
						discard.forEach(player => {
							player.chooseToDiscard(event.num, true);
						});
						draw.forEach(player => {
							player.draw(event.num, 'nodelay');
						});
					}
				},
			},
			dqzw_boss_shoujiang: {
				audio: 'ext:大权在握/audio/skill:true',
				trigger: {
					player: 'damageBegin4',
				},
				forced: true,
				filter(event, player) {
					return event.num > 1;
				},
				content() {
					trigger.num = 1;
					player.draw('nodelay');
				},
				ai: {
					filterDamage: true,
					skillTagFilter(player, tag, arg) {
						if (arg && arg.player && arg.player.hasSkillTag('jueqing', false, player)) return false;
					},
				},
			},
			dqzw_boss_tijiang: {
				audio: 'ext:大权在握/audio/skill:true',
				enable: 'phaseUse',
				usable: 1,
				selectTarget: -1,
				filterTarget: lib.filter.notMe,
				content() {
					'step 0';
					player.gainPlayerCard(target, true);
					('step 1');
					player
						.chooseCard('将一张牌交给' + get.translation(target), 'he', true)
						.set('target', target)
						.set('ai', card => {
							let att = get.attitude(_status.event.player, _status.event.target);
							if (att < 2) return -get.value(card);
							return 8 - get.value(card);
						});
					('step 2');
					if (result.cards) player.give(result.cards, target);
				},
				contentAfter() {
					let list = [];
					player.getCards('h').forEach(card => {
						list.add(get.type2(card, player));
					});
					player.showHandcards();
					player.draw(list.length);
				},
				ai: {
					order: 13,
					result: {
						player: 1,
					},
				},
			},
			dqzw_boss_juexun: {
				audio: 'ext:大权在握/audio/skill:true',
				trigger: {
					global: 'dying',
				},
				filter(event, player) {
					return event.player != player;
				},
				logTarget: 'player',
				check(event, player) {
					if (get.attitude(player, event.player) > 1) return player.getDamagedHp() >= player.maxHp / 2 || event.player.maxHp <= player.hp;
					return false;
				},
				content() {
					trigger.player.hp = trigger.player.maxHp;
					player.loseHp(trigger.player.maxHp);
				},
			},
			dqzw_boss_xiaxiao: {
				init: player => (player.storage.dqzw_boss_xiaxiao = []),
				audio: 'ext:大权在握/audio/skill:true',
				enable: 'phaseUse',
				filterTarget(_event, player, target) {
					return (target.countCards('he') || target.getDamagedHp()) && target != player && !player.storage.dqzw_boss_xiaxiao.includes(target);
				},
				content() {
					'step 0';
					if (target.countCards('he'))
						target
							.chooseCard(
								`交给${get.translation(player)}一张牌并摸一张牌
				                ${target.getDamagedHp() ? '或取消并回复一点体力' : ''}`,
								'he',
								!target.getDamagedHp()
							)
							.set('ai', card => {
								if (_status.event.player.getDamagedHp() > 0) return 0;
								return -get.value(card);
							});
					player.storage.dqzw_boss_xiaxiao.push(target);
					player.addTempSkill('dqzw_boss_xiaxiao_remove', { player: 'phaseUseAfter' });
					('step 1');
					if (result.cards) {
						target.give(result.cards, player);
						target.draw('nodelay');
					} else target.recover();
				},
				subSkill: {
					remove: {
						onremove: player => (player.storage.dqzw_boss_xiaxiao = []),
					},
				},
				ai: {
					order: 11,
					result: {
						player: 1,
						target: 1,
					},
				},
			},
			dqzw_boss_yinyue: {
				audio: 'ext:大权在握/audio/skill:2',
				mod: {
					aiOrder(player, card, num) {
						let cards = player.storage.dqzw_boss_yinyue_cards;
						if (typeof card == 'object' && cards) {
							let number = cards.reduce((pre, cur) => {
								return pre + cur.number;
							}, 0),
								cardnum = card.number,
								val = 13 - cardnum;
							if (card.number >= number) return num + val + 30;
							return num + val;
						}
					},
				},
				intro: {
					content(storage, player) {
						let cards = player.storage.dqzw_boss_yinyue_cards;
						return (
							'拼点牌的点数+' +
							storage +
							(cards
								? '<br>上次失去牌的总点数:' +
								cards.reduce((pre, cur) => {
									return pre + cur.number;
								}, 0)
								: '')
						);
					},
				},
				group: 'dqzw_boss_yinyue_number',
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					let evt = event.getl(player);
					return evt && evt.cards2 && evt.cards2.length && !/use|respond/.test(event.type);
				},
				silent: true,
				content() {
					let cards = player.storage[event.name + '_cards'] || [],
						evt = trigger.getl(player),
						cards2 = (evt && evt.cards2) || [],
						pre = cards.reduce((pre, cur) => {
							return pre + cur.number;
						}, 0),
						cur = cards2.reduce((pre, cur) => {
							return pre + cur.number;
						}, 0);
					if (cur >= pre) {
						player.draw(_status.dqzw_checkpoint_level || 1);
					}
					player.storage[event.name + '_cards'] = cards2;
					player.storage[event.name] =
						Math.max(
							...cards2.map(card => {
								return card.number;
							})
						) || 0;
					player.markSkill(event.name);
					game.broadcastAll(
						function (player, name, num) {
							let mark = player.marks[name];
							if (mark) {
								if (!mark.markcount2) {
									mark.markcount2 = ui.create.div('.markcount.menubutton', mark, {
										left: '-16%',
									});
									mark.classList.add('overflowmark');
								}
								if (num > 0) {
									mark.markcount2.innerHTML = num;
									mark.markcount2.show();
								}
								player.markSkill('ark_jieshuang');
							}
						},
						player,
						event.name,
						cur
					);
				},
				subSkill: {
					number: {
						audio: 'ext:大权在握/audio/skill:true',
						trigger: {
							player: 'compare',
							target: 'compare',
						},
						filter(event, player) {
							if (!player.storage.dqzw_boss_yinyue || event['num' + (player == event.player ? 1 : 2)] >= 13) return false;
							if (event.player == player) return !event.iwhile;
							return true;
						},
						forced: true,
						content() {
							let num = Math.min(13 - trigger['num' + (player == trigger.player ? 1 : 2)], player.storage.dqzw_boss_yinyue || 1);
							game.log(player, '拼点牌点数+', '#y' + num);
							trigger['num' + (player == trigger.player ? 1 : 2)] += num;
						},
					},
				},
			},
			dqzw_boss_shenche: {
				audio: 'ext:大权在握/audio/skill:true',
				enable: 'phaseUse',
				usable: 1,
				filter(_event, player) {
					return game.hasPlayer(target => {
						return player.canCompare(target);
					});
				},
				filterTarget(_event, player, target) {
					return player.canCompare(target);
				},
				content() {
					'step 0';
					player.chooseToCompare(target);
					('step 1');
					if (result.bool) {
						let dnum = Math.abs(result.num1 - result.num2);
						let next = target.chooseToMove(true);
						next.set('prompt', '分配此三项使系数和不小于点数之差');
						next.set('list', [
							[
								'',
								[
									[
										[1, '[1]受到1点伤害'],
										[2, '[2]减少1点体力上限'],
										[4, '[4]选择失去一个技能'],
									],
									'tdnodes',
								],
							],
							[
								'还需' + dnum + '点',
								[],
								list => {
									let num = _status.event.num || 0,
										summation = list.reduce((pre, cur) => {
											return pre + cur.link * (cur.count || 1);
										}, 0);
									let dnum = num - summation;
									if (dnum > 0) return '还需' + dnum + '点';
									return '已满足';
								},
							],
						]);
						next.set('num', dnum);
						next.set('filterOk', function (moved) {
							let num = _status.event.num || 0,
								summation = moved[1].reduce((pre, cur) => {
									return pre + cur.link * (cur.count || 1);
								}, 0);
							return num - summation < 1;
						});
						next.set('filterMove', function (from, to, moved) {
							let event = _status.event,
								num = event.num || 0,
								list = event.buttonss;
							if (isNaN(Number(to)) || !from || from.parentNode._link == to) return false;
							else {
								ui.selected.guanxing_button.classList.remove('glow2');
								delete ui.selected.guanxing_button;
								if (to == 0) {
									let num = --from.count;
									if (num < 2 && from._markcount) from._markcount.hide();
									if (from._markcount) from._markcount.innerHTML = from.count;
									if (num < 1 || !num) from.remove();
								}
								if (to == 1) {
									let node = [...list[1].children].find(node => {
										return node.link == from.link;
									});
									if (
										from.link == 4 &&
										((node && node.count) || 0) + 1 >
										event.player.getSkills(true, false, false).filter(skill => {
											return lib.translate[skill] && lib.translate[skill + '_info'];
										}).length
									)
										return false;
									if (!node) ui.create.button([from.link, from.textContent], 'tdnodes', list[1]);
									else {
										if (!node._markcount)
											node._markcount = ui.create.div(
												'.menubutton',
												{
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
													position: 'absolute',
													width: (document.body.offsetHeight / 100) * 1 + 'px',
													height: (document.body.offsetHeight / 100) * 1 + 'px',
													right: '-5%',
													bottom: '-5%',
													fontSize: (document.body.offsetHeight / 100) * 2 + 'px',
													borderRadius: '100%',
												},
												node
											);
										node.count = (node.count || 1) + 1;
										node._markcount.show();
										node._markcount.innerHTML = node.count;
									}
								}
								for (let buttons of list) {
									event.moved[buttons._link] = [...buttons.children];
									if (buttons.textPrompt) buttons.previousSibling.innerHTML = '<div class = "text center" >' + buttons.textPrompt([...buttons.children]) + '</div>';
								}
								if (
									event.filterOk(
										list.map(buttons => {
											return [...buttons.children];
										})
									)
								)
									ui.create.confirm('o');
								else {
									if (!event.forced) ui.create.confirm('c');
									else if (ui.confirm) ui.confirm.close();
								}
							}
							return false;
						});
						next.set('processAI', function (list) {
							let event = _status.event,
								num = event.num,
								player = event.player,
								result = [
									{
										link: 1,
										count: 0,
									},
									{
										link: 2,
										count: 0,
									},
									{
										link: 4,
										count: 0,
									},
								],
								temp = Object.keys(player.tempSkills).length;
							while (num > 0) {
								if (!player.hasSkillTag('filterDamage', true, player, true)) {
									if (temp--) {
										result[2].count++;
										num -= 4;
										continue;
									}
									if (player.getDamagedHp() + result[0].count > 2) {
										result[1].count++;
										num -= 2;
										continue;
									}
									if (player.hp - result[0].count < 0) {
										if (player.maxHp > 3) {
											result[1].count++;
											num -= 2;
										} else {
											result[2].count++;
											num -= 4;
										}
										continue;
									}
								}
								result[0].count++;
								num -= 1;
							}
							return [[], result];
						});
					}
					('step 2');
					if (result.moved && result.moved[1] && result.moved[1].length) {
						let map = {
							1: 0,
							2: 0,
							4: 0,
						},
							list = {
								1: 'damage',
								2: 'loseMaxHp',
								4: num => {
									let skills = target.getSkills(true, false, false).filter(skill => {
										return lib.translate[skill] && lib.translate[skill + '_info'];
									});
									num = Math.min(num, skills.length);
									target.chooseSkillObtain(skills, `请选择要失去的${get.cnNumber(num)}个技能`, num, true).set('remove', true);
								},
							};
						for (let button of result.moved[1]) map[button.link] += button.count || 1;
						for (let key in map) map[key] > 0 && typeof list[key] == 'function' ? list[key](map[key]) : target[list[key]](map[key]);
					}
				},
				ai: {
					order: 8,
					result: {
						player: 1,
						target: -1,
					},
				},
			},
			dqzw_boss_jili: {
				audio: 'ext:大权在握/audio/skill:true',
				trigger: {
					global: ['loseAfter'],
				},
				//锁定技,一名角色一次失去至少2张牌后,你获得其中X张牌.(X为其此次失去牌数的一半且向上取整)
				filter(event, player) {
					return event.cards?.length > 1;
				},
				forced: true,
				async content(event, trigger, player) {//QQQ
					const num = Math.ceil(trigger.cards.length / 2);
					const { result: { links } } = await player.chooseButton([get.prompt2(event.name), trigger.cards], [1, num], button => get.value(button.link));
					if (links?.length) {
						player.gain(links, 'gain2');
					}
				},
			},
			dqzw_boss_fuzhu: {
				audio: 'ext:大权在握/audio/skill:2',
				enable: 'phaseUse',
				usable: 3,
				complexCard: true,
				position: 'he',
				filter(_event, player) {
					return (
						player.countCards('he', card => {
							return !player.hasCard(cardx => {
								return card != cardx && card.suit == cardx.suit;
							}, 'he');
						}) > 1
					);
				},
				filterCard(card) {
					return !ui.selected.cards.some(cardx => cardx.suit == card.suit);
				},
				filterTarget(card, player, target) {
					return target.getDamagedHp() > 0;
				},
				selectCard() {
					let map = {
						1: 4,
						2: 3,
						3: 2,
					};
					return map[_status.dqzw_checkpoint_level || 1];
				},
				selectTarget() {
					return [1, _status.dqzw_checkpoint_level || 1];
				},
				check(card) {
					return 8 - get.value(card);
				},
				content() {
					target.recover((_status.dqzw_checkpoint_level || 1) + 1);
				},
				ai: {
					order: 11,
					result: {
						target(player, target) {
							return get.recoverEffect(target, player, player);
						},
					},
				},
			},
			dqzw_boss_xiangjiu: {
				audio: 'ext:大权在握/audio/skill:true',
				init(player) {
					Reflect.defineProperty(player, 'maxHp', {
						set() {
							game.log(player, '防止了此次体力上限变动');
						},
						get() {
							return 9;
						},
					});
				},
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				intro: {
					name2: '相',
					content: 'mark',
				},
				forced: true,
				filter(event, player) {
					return event.name != 'phase' || game.phaseNumber == 0;
				},
				content() {
					let num = Math.min(9 - player.countMark(event.name), 6);
					if (num > 0) player.addMark(event.name, num);
				},
				group: ['dqzw_boss_xiangjiu_gain', 'dqzw_boss_xiangjiu_prevent'],
				subSkill: {
					gain: {
						audio: 'dqzw_boss_xiangjiu',
						trigger: {
							player: 'phaseUseEnd',
							global: 'damageBegin4',
						},
						filter(event, player) {
							if (event.name == 'phaseUse') return !player.hasMark('dqzw_boss_xiangjiu');
							return player.countMark('dqzw_boss_xiangjiu') < 9 && ((event.source && player.isFriendsOf(event.source) && event.num > 1) || (player.isFriendsOf(event.player) && event.num == 1));
						},
						_priority: 5,
						forced: true,
						content() {
							player.addMark('dqzw_boss_xiangjiu');
						},
					},
					prevent: {
						audio: 'dqzw_boss_xiangjiu',
						trigger: {
							player: ['gainMaxHpBefore', 'loseMaxHpBefore'],
						},
						filter(event, player) {
							return event.num > 0;
						},
						firstDo: true,
						forced: true,
						content() {
							trigger.cancel();
							game.log(player, '防止了此次体力上限变动');
						},
					},
				},
			},
			dqzw_boss_yingyue: {
				mark: true,
				marktext: '☯',
				intro: {
					content(storage) {
						if (storage)
							return `当同阵营角色受到伤害或失去体力时,
					                你可以失去一枚<相>并获得一枚<缺>标记,令此次数值-1`;
						return `当同阵营角色造成伤害或回复体力时,
					              你可以失去一枚<相>并获得一枚<盈>标记,令此次数值+1`;
					},
				},
				audio: 'ext:大权在握/audio/skill:true',
				trigger: {
					global: ['damageBegin2', 'damageBegin4', 'recoverBegin', 'loseHpBegin'],
				},
				filter(event, player, name) {
					let bool = player.storage.dqzw_boss_yingyue;
					if (!player.hasMark('dqzw_boss_xiangjiu')) return false;
					if (bool) {
						if (event.name != 'loseHp' && name != 'damageBegin4') return false;
						return event.num > 0 && player.isFriendsOf(event.player);
					} else {
						if (event.name != 'recover' && name != 'damageBegin2') return false;
						return event[event.name == 'damage' ? 'source' : 'player'] && player.isFriendsOf(event[event.name == 'damage' ? 'source' : 'player']);
					}
				},
				zhuanhuanji: true,
				logTarget(event, player) {
					let bool = player.storage.dqzw_boss_yingyue;
					if (bool) return event.player;
					return event[event.name == 'damage' ? 'source' : 'player'];
				},
				content() {
					'step 0';
					let name = event.triggername;
					if (trigger.name == 'recover' || name == 'damageBegin2') {
						trigger.num++;
						player.addMark(event.name + '_ying');
						if (trigger.name == 'damage') game.log(trigger.source, '对', trigger.player, '造成的伤害+1');
						else game.log(trigger.player, '本次回复值+1');
					}
					if (trigger.name == 'loseHp' || name == 'damageBegin4') {
						trigger.num--;
						player.addMark(event.name + '_que');
						if (trigger.name == 'damage') game.log(...(trigger.source ? [trigger.source, '对'] : []), trigger.player, (trigger.source ? '造成' : '受到') + '的伤害-1');
						else game.log(trigger.player, '失去的体力值-1');
					}
					player.changeZhuanhuanji(event.name);
					player.removeMark('dqzw_boss_xiangjiu');
					('step 1');
					event.trigger('addMark');
				},
				subSkill: {
					ying: {
						marktext: '盈',
						intro: {
							name: '盈',
							content: 'mark',
						},
					},
					que: {
						marktext: '缺',
						intro: {
							name: '缺',
							content: 'mark',
						},
					},
				},
			},
			dqzw_boss_leyong: {
				audio: 'ext:大权在握/audio/skill:true',
				trigger: {
					player: 'addMark',
				},
				filter(_event, player) {
					return [player.countMark('dqzw_boss_yingyue_ying'), player.countMark('dqzw_boss_yingyue_que')].some(num => /[135]/.test(num));
				},
				forced: true,
				content() {
					player.draw('nodelay');
				},
			},
			dqzw_boss_tianzhui: {
				audio: 'ext:大权在握/audio/skill:true',
				trigger: {
					player: 'addMark',
				},
				filter(_event, player) {
					return [player.countMark('dqzw_boss_yingyue_ying'), player.countMark('dqzw_boss_yingyue_que')].includes(7);
				},
				forced: true,
				content() {
					'step 0';
					if (player.countMark('dqzw_boss_yingyue_ying') >= 7) {
						player.chooseToDiscard('h', [1, Infinity]);
						event.num = -(1 - player.hp);
						player.removeMark('dqzw_boss_yingyue_ying', player.countMark('dqzw_boss_yingyue_ying'));
						player.loseHp(event.num);
						event.ying = 1;
					} else if (player.countMark('dqzw_boss_yingyue_que') >= 7) {
						player
							.chooseControl('1', '2', '3', '4', 'cancel2')
							.set('prompt', '摸至多四张牌')
							.set('ai', () => '4');
						event.num = player.getDamagedHp();
						player.changeHp(event.num);
						player.removeMark('dqzw_boss_yingyue_que', player.countMark('dqzw_boss_yingyue_que'));
					}
					('step 1');
					if (result.control && result.control != 'cancel2') player.draw(result.control * 1);
					num = player.countMark('dqzw_boss_xiangjiu');
					let str = get.cnNumber(num);
					if (num > 0)
						player
							.chooseTarget(
								get.prompt(event.name),
								`令至多${str}名其他角色
                                ${event.ying ? '失去' : '回复'}${str}点体力`,
								[1, num],
								lib.filter.notMe,
								target => {
									let evt = _status.event,
										player = evt.player;
									if (evt.ying) return -get.attitude(player, target);
									return get.recoverEffect(target, player, player);
								}
							)
							.set('ying', event.ying);
					('step 2');
					if (result.targets && result.targets.length) {
						player.line(result.targets, event.ying ? 'fire' : 'green');
						if (event.ying) for (let target of result.targets) target.loseHp(event.num);
						else for (let target of result.targets) target.recover(event.num);
					}
					let num1 = player.getFriends(true).length,
						num2 = player.getEnemies().length;
					if (event.ying && num1 > 0) player.addMark('dqzw_boss_yingyue_que', num1);
					else if (num2 > 0) player.addMark('dqzw_boss_yingyue_ying', num2);
					('step 3');
					event.trigger('addMark');
				},
			},
			dqzw_boss_qiedan: {
				audio: 'ext:大权在握/audio/skill:2',
				trigger: {
					player: lib.phaseName.map(name => {
						return name + 'Begin';
					}),
				},
				filter(event, player) {
					return player.hasCard(card => {
						return lib.filter.cardDiscardable(card, player, event);
					});
				},
				_priority: 5,
				forced: true,
				content() {
					'step 0';
					player.chooseCardTarget({
						filterCard(card) {
							return lib.filter.cardDiscardable(card, player, _status.event);
						},
						filterTarget(card, player, target) {
							return target.countGainableCards(player, 'he');
						},
						selectTarget: [1, _status.dqzw_checkpoint_level || 1],
						ai1(card) {
							return 9 - get.value(card);
						},
						ai2(target) {
							return -get.attitude(_status.event.player, target);
						},
						position: 'he',
						prompt: get.prompt2(event.name),
					});
					('step 1');
					if (result.cards && result.targets && result.cards.length && result.targets.length) {
						player.discard(result.cards);
						event.targets = result.targets;
					} else event.finish();
					('step 2');
					target = event.targets.shift();
					player.gainPlayerCard(target, [1, _status.dqzw_checkpoint_level || 1], 'he', 'visible');
					delete result.cards;
					('step 3');
					if (result.cards) player.addShownCards(result.cards, 'visible_card');
					if (event.targets.length) event.goto(2);
				},
			},
			dqzw_boss_feisheng: {
				mod: {
					cardUsable(card) {
						if (
							(card.cards || [card]).every(cardx => {
								return get.is.shownCard(cardx);
							})
						)
							return Infinity;
					},
					aiOrder(_player, card, num) {
						if (
							(card.cards || [card]).every(cardx => {
								return get.is.shownCard(cardx);
							})
						)
							return num - 10;
					},
					aiUseful(_player, card, num) {
						if (
							(card.cards || [card]).every(cardx => {
								return get.is.shownCard(cardx);
							})
						)
							return num - 20;
					},
				},
				audio: 'ext:大权在握/audio/skill:true',
				trigger: {
					player: ['loseBegin', 'loseAfter'],
					global: ['equipBegin', 'addJudgeBegin', 'gainBegin', 'loseAsyncBegin', 'addToExpansionBegin', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player, name) {
					if (name.slice(-5) == 'Begin') {
						if (
							event.cards &&
							event.cards.some(card => {
								return get.is.shownCard(card);
							})
						)
							event.lostExposedCard = true;
						return;
					}
					let evt = event.getl(player);
					return (
						evt &&
						evt.cards &&
						evt.cards.length &&
						event.lostExposedCard &&
						!player.hasCard(card => {
							return get.is.shownCard(card);
						}, 'hejsx')
					);
				},
				forced: true,
				content() {
					'step 0';
					player.draw((_status.dqzw_checkpoint_level || 1) + 1, 'nodelay');
					player.chooseTarget(get.translation(event.name) + ':是否对一名角色造成' + get.cnNumber(_status.dqzw_checkpoint_level || 1) + '点伤害？').set('ai', target => get.damageEffect(target, _status.event.player, _status.event.player));
					('step 1');
					if (result.targets?.length) {
						player.line(result.targets, 'green');
						result.targets[0].damage(_status.dqzw_checkpoint_level || 1);
					}
					let evt = trigger.getParent('phase');
					if (evt && evt.name == 'phase') {
						game.log(evt.player, '结束了回合');
						evt.finish();
						evt.untrigger(true);
					}
					if (lib.skill.rest && lib.skill.rest.enter) {
						player.restinfo = { phase: 1 };
						player.storage.restRecover = false;
						lib.skill.rest.enter(player);
					}
				},
			},
			dqzw_boss_xingye: {
				mod: {
					maxHandcardFinal(player, num) {
						return num - 2;
					},
				},
				trigger: {
					player: 'phaseDrawBegin2',
				},
				filter(event, player) {
					return !event.numFixed && (game.boss == player || game.boss.includes(player));
				},
				silent: true,
				firstDo: true,
				forced: true,
				charlotte: true,
				notGainableSkill: true,
				content() {
					trigger.num++;
				},
			},
			dqzw_boss_lieri: {
				trigger: {
					player: 'damageBegin2',
				},
				filter(event, player) {
					let bool;
					if (event.hasNature && lib.natureSeparator) {
						bool = event.hasNature('fire');
						if (game.boss == event.source || game.boss.includes(event.source)) return !bool;
						return bool;
					}
					if (event.nature) bool = event.nature.split(lib.natureSeparator || '|').includes('fire');
					if (game.boss == event.source || game.boss.includes(event.source)) return (event.nature && event.nature.indexOf('fire') < 0) || !bool;
					return event.nature && event.nature.indexOf('fire') > -1 && bool;
				},
				silent: true,
				firstDo: true,
				forced: true,
				charlotte: true,
				notGainableSkill: true,
				content() {
					if (game.boss == trigger.source || game.boss.includes(trigger.source)) {
						if (trigger.hasNature && lib.natureSeparator && trigger.nature) trigger.nature += lib.natureSeparator + 'fire';
						else trigger.nature = 'fire';
					}
					trigger.num++;
				},
				ai: {
					fireAttack: true,
					fireDamage: true,
				},
			},
			dqzw_boss_baoyu: {
				trigger: {
					player: 'damageBegin2',
				},
				filter(event, player) {
					let bool;
					if (event.hasNature && lib.natureSeparator) {
						bool = event.hasNature('ice');
						if (game.boss == event.source || game.boss.includes(event.source)) return !bool;
						return bool;
					}
					if (event.nature) bool = event.nature.split(lib.natureSeparator || '|').includes('ice');
					if (game.boss == event.source || game.boss.includes(event.source)) return (event.nature && event.nature.indexOf('ice') < 0) || !bool;
					return event.nature && event.nature.indexOf('ice') > -1 && bool;
				},
				silent: true,
				firstDo: true,
				forced: true,
				charlotte: true,
				notGainableSkill: true,
				content() {
					if (game.boss == trigger.source || game.boss.includes(trigger.source)) {
						if (trigger.hasNature && lib.natureSeparator && trigger.nature) trigger.nature += lib.natureSeparator + 'ice';
						else trigger.nature = 'ice';
					}
					trigger.num++;
				},
				ai: {
					iceAttack: true,
					iceDamage: true,
				},
			},
			dqzw_boss_leiting: {
				trigger: {
					player: ['damageBegin2', 'damageAfter'],
				},
				filter(event, player, name) {
					let bool;
					if (event.hasNature && lib.natureSeparator) {
						bool = event.hasNature('thunder');
						if (name == 'damageBegin2') return (game.boss == event.source || game.boss.includes(event.source)) && !bool;
						return bool && event.notLink() && !event.isLinkDamage;
					}
					if (event.nature) bool = event.nature.split(lib.natureSeparator || '|').includes('thunder');
					if (name == 'damageBegin2') return (game.boss == event.source || game.boss.includes(event.source)) && ((event.nature && event.nature.indexOf('thunder') < 0) || !bool);
					return event.nature && event.nature.indexOf('thunder') > -1 && bool && event.notLink() && !event.isLinkDamage;
				},
				silent: true,
				firstDo: true,
				forced: true,
				charlotte: true,
				notGainableSkill: true,
				content() {
					'step 0';
					if (event.triggername == 'damageAfter') {
						let next = game.createEvent('_lianhuan');
						next.player = player;
						next._trigger = trigger;
						next.triggername = event.triggername;
						next.forceDie = true;
						next.setContent(function () {
							'step 0';
							event.logvid = trigger.getLogv();
							('step 1');
							event.targets = game.filterPlayer(current => {
								return current != player && get.distance(current, player) < 2;
							});
							lib.tempSortSeat = _status.currentPhase || player;
							event.targets.sort(lib.sort.seat);
							delete lib.tempSortSeat;
							event._args = [trigger.num, trigger.nature, trigger.cards, trigger.card];
							if (trigger.source) event._args.push(trigger.source);
							else event._args.push('nosource');
							('step 2');
							if (event.targets.length) {
								let target = event.targets.shift();
								target.damage.apply(target, event._args.slice(0)).set('isLinkDamage', true);
								event.redo();
							}
						});
						return;
					}
					if (game.boss == trigger.source || game.boss.includes(trigger.source)) {
						if (trigger.hasNature && lib.natureSeparator && trigger.nature) trigger.nature += lib.natureSeparator + 'thunder';
						else trigger.nature = 'thunder';
					}
				},
				ai: {
					thunderAttack: true,
					thunderDamage: true,
				},
			},
			dqzw_boss_chunxiao: {
				trigger: {
					player: 'phaseDrawBegin2',
				},
				filter(event, player) {
					return !event.numFixed;
				},
				silent: true,
				firstDo: true,
				forced: true,
				charlotte: true,
				notGainableSkill: true,
				content() {
					trigger.num++;
					if (game.boss == player || game.boss.includes(player)) trigger.num++;
				},
			},
			dqzw_boss_zhongxia: {
				mod: {
					maxHandcardFinal(player, num) {
						return num - 1;
					},
					cardUsable(card, _player, num) {
						if (card.name == 'sha') return num + 1;
					},
				},
				trigger: {
					player: 'phaseDrawBegin2',
				},
				filter(event, player) {
					return !event.numFixed && (game.boss == player || game.boss.includes(player));
				},
				silent: true,
				firstDo: true,
				forced: true,
				charlotte: true,
				notGainableSkill: true,
				content() {
					trigger.num++;
				},
			},
			dqzw_boss_shangqiu: {
				mod: {
					maxHandcardFinal(player, num) {
						return num + 2;
					},
				},
			},
			dqzw_boss_new_zhixi: {
				mod: {
					cardEnabled(card, player) {
						if (player.getStat().new_zhixi2 || player.getStat().new_zhixi >= player.hp) return false;
					},
					cardUsable(card, player) {
						if (player.getStat().new_zhixi2 || player.getStat().new_zhixi >= player.hp) return false;
					},
					cardRespondable(card, player) {
						if (player.getStat().new_zhixi2 || player.getStat().new_zhixi >= player.hp) return false;
					},
					cardSavable(card, player) {
						if (player.getStat().new_zhixi2 || player.getStat().new_zhixi >= player.hp) return false;
					},
				},
				firstDo: true,
				silent: true,
				content() {
					player.getStat().new_zhixi = (player.getStat().new_zhixi || 0) + 1;
					if (get.type2(trigger.card) == 'trick') player.getStat().new_zhixi2 = true;
				},
				inherit: 'new_zhixi',
			},
			dqzw_boss_buff_zuijiu: {
				trigger: {
					source: 'damageBegin2',
				},
				filter: (event, player) => _status.dqzw_globalBuffs.includes('dqzw_jiuzhuangrendan') && event.card && event.card.name == 'sha',
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.num++;
				},
			},
			dqzw_daodaobaoji: {
				trigger: {
					source: 'damageBegin2',
				},
				filter: (_event, player) => _status.dqzw_globalBuffs.includes('dqzw_daodaobaoji'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.num++;
				},
			},
			dqzw_pijiazaibing: {
				trigger: {
					global: 'gameStart',
				},
				filter: (_event, player) => player.dqzw_hasBuff('dqzw_pijiazaibing'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					let name = Object.keys(lib.card)
						.filter(name => get.type(name) == 'equip')
						.randomGet();
					if (name) player.chooseUseTarget(game.createCard(name), true);
				},
			},
			dqzw_dongfengbubian: {
				trigger: {
					global: 'linkBefore',
				},
				filter: (_event, player) => _status.dqzw_globalBuffs.includes('dqzw_dongfengbubian'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.cancel();
				},
			},
			dqzw_shuxingwuju: {
				trigger: {
					global: 'damageBegin4',
				},
				filter: (event, player) => _status.dqzw_globalBuffs.includes('dqzw_shuxingwuju') && event.nature,
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.cancel();
				},
			},
			dqzw_beishuiyizhan: {
				trigger: {
					global: 'roundStart',
				},
				filter: (_event, player) => player.dqzw_hasBuff('dqzw_beishuiyizhan'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					player.recover();
				},
			},
			dqzw_cangtaohu: {
				mod: {
					ignoredHandcard(card, player) {
						if (player.dqzw_hasBuff('dqzw_cangtaohu') && card.name == 'tao') return true;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_cuixue: {
				trigger: {
					source: 'damageAfter',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_cuixue') && event.card && event.card.name == 'sha' && !player.hasSkill('dqzw_cuixue_used'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					player.draw(2, 'nodelay');
					player.addTempSkill(event.name + '_used', 'roundStart');
				},
				subSkill: {
					used: { charlotte: true },
				},
			},
			dqzw_dangtouyibang: {
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					let useSha;
					[...player.getHistory('useCard')].reverse().some(evt => {
						if (evt.isRound) return true;
						if (evt.card.name == 'sha') {
							useSha = true;
							return true;
						}
					});
					return player.dqzw_hasBuff('dqzw_dangtouyibang') && event.card.name == 'sha' && !useSha;
				},
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.baseDamage++;
				},
			},
			dqzw_duoduoyishan: {
				trigger: {
					player: 'drawBegin',
				},
				filter: (_event, player) => player.dqzw_hasBuff('dqzw_duoduoyishan') && player.getHistory('gain', evt => evt.parent.name == 'draw').length == 4,
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.num *= 2;
				},
			},
			dqzw_hexinhuiyuan_1: {
				mod: {
					dqzw_countShopRefresh(player, num) {
						if (player.dqzw_hasBuff('dqzw_hexinhuiyuan_1')) return num + 1;
					},
					dqzw_shopRefreshFilter(_player, list) {
						list.push({
							id: 'dqzw_hexinhuiyuan_1',
							content: gold => gold > 99,
						});
						return list;
					},
					dqzw_shopRefreshCallback(_player, list) {
						list.push({
							id: 'dqzw_hexinhuiyuan_1',
							eval: true,
							content() {
								cost += 100;
								changeGold(-100);
							},
						});
						return list;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_houfazhiren: {
				trigger: {
					player: ['phaseDrawBegin', 'phaseJieshuBegin'],
				},
				filter(event, player) {
					if (event.name == 'phaseDraw') return player.dqzw_hasBuff('dqzw_houfazhiren') && !event.numFixed;
					return player.getStat()._dqzw_houfazhiren_draw;
				},
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					if (trigger.name == 'phaseDraw') {
						trigger.num--;
						player.getStat()._dqzw_houfazhiren_draw = true;
					} else player.draw(2, 'nodelay');
				},
			},
			dqzw_huishouliyong: {
				trigger: {
					player: 'loseAfter',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_huishouliyong') && event.swapEquip && event.cards.length,
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					player.dqzw_changeGold(50);
				},
			},
			dqzw_laoguzhuangbei: {
				mod: {
					canBeDiscarded(card, source, player) {
						if (player.dqzw_hasBuff('dqzw_laoguzhuangbei') && player.getCards('e').includes(card)) return false;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_yanhuo: {
				trigger: {
					source: 'damageBegin2',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_yanhuo') && event.nature && event.nature.includes('fire'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.num++;
				},
			},
			dqzw_jinglei: {
				trigger: {
					source: 'damageBegin2',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_jinglei') && event.nature && event.nature.includes('thunder'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.num++;
				},
			},
			dqzw_xihuo: {
				trigger: {
					player: 'damageBegin3',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_xihuo') && event.nature && event.nature.includes('fire'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.num--;
				},
			},
			dqzw_dinglei: {
				trigger: {
					player: 'damageBegin3',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_dinglei') && event.nature && event.nature.includes('thunder'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.num--;
				},
			},
			dqzw_zongqing: {
				trigger: {
					player: 'recoverAfter',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_zongqing') && game.hasPlayer(current => current.isDamaged()) && !player.hasSkill('dqzw_zongqing_used'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					'step 0';
					player.chooseTarget(
						'###' + get.prompt(event.name) + '###令一名其他角色回复1点体力',
						(_event, player, target) => player != target && target.isDamaged(),
						target => get.recoverEffect(target, get.player(), get.player())
					);
					('step 1');
					if (result.targets && result.targets.length) {
						player.line(result.targets, 'green');
						result.targets[0].recover();
						player.addTempSkill(event.name + '_used', 'roundStart');
					}
				},
				subSkill: {
					used: { charlotte: true },
				},
			},
			dqzw_leidianjiaojia: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				filter: (_event, player) => player.dqzw_hasBuff('dqzw_dinglei') && game.hasPlayer(current => player.isEnemiesOf(current) && current.countCards('j'), true),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					let players = game.filterPlayer(current => player.isEnemiesOf(current) && current.countCards('j'), 0, true);
					player.line(players);
					players.forEach(player => {
						player.damage(2, 'thunder');
					});
				},
			},
			dqzw_shaqitengteng: {
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard: { name: 'shan' },
				position: 'hes',
				viewAs: {
					name: 'sha',
				},
				viewAsFilter: player => player.hasCard('shan', 'hes'),
				prompt: '将一张【闪】当杀使用或打出',
				filter: (_event, player) => player.dqzw_hasBuff('dqzw_shaqitengteng'),
				check: card => {
					let val = get.value(card);
					return 6 - val;
				},
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				ai: {
					respondSha: true,
					respondShan: true,
				},
			},
			dqzw_yitaozhijiu: {
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard: { name: 'tao' },
				position: 'hes',
				viewAs: {
					name: 'jiu',
				},
				viewAsFilter: player => player.hasCard('tao', 'hes'),
				hiddenCard(name, player) {
					if (name == 'jiu') return player.hasCard('tao', 'hes');
					return false;
				},
				prompt: '将一张【桃】当酒使用或打出',
				filter: (_event, player) => player.dqzw_hasBuff('dqzw_yitaozhijiu'),
				check: card => {
					let val = get.value(card);
					return 5 - val;
				},
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				ai: {
					save: true,
				},
			},
			dqzw_cedingtianxia: {
				trigger: {
					global: 'damageAfter',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_cedingtianxia') && event.card && get.type2(event.card) == 'trick',
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					player.draw('nodelay');
				},
			},
			dqzw_daoshengyi: {
				trigger: {
					player: ['drawBefore', 'useCardAfter'],
				},
				filter(event, player) {
					if (!player.dqzw_hasBuff('dqzw_daoshengyi')) return false;
					if (event.name == 'draw') return event.parent.name == 'wuzhong';
					return event.card.name == 'wuzhong';
				},
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					if (trigger.name == 'draw') trigger.num++;
					else player.recover();
				},
			},
			dqzw_shangdianbawang: {
				mod: {
					dqzw_shopPriceIncreaseFinal(num, player) {
						if (player.dqzw_hasBuff('dqzw_shangdianbawang')) return 0;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_huiyuanshangdian_1: {
				mod: {
					dqzw_countShopCommodity(player, _type, num) {
						if (player.dqzw_hasBuff('dqzw_huiyuanshangdian_1')) return num + 1;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_jinnangmiaoji: {
				trigger: {
					player: 'phaseDrawAfter',
				},
				filter: (event, player) => event.num > 0 && player.dqzw_hasBuff('dqzw_jinnangmiaoji'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					player.addMark(event.name + '_max', Math.ceil(trigger.num / 2), false);
					player.addTempSkill(event.name + '_max', { player: 'phaseAfter' });
				},
				subSkill: {
					max: {
						mod: {
							maxHandcard: (player, num) => num + player.countMark('dqzw_jinnangmiaoji_max'),
						},
						intro: {
							content: '手牌上限+#',
						},
						charlotte: true,
					},
				},
			},
			dqzw_leitingwanjun: {
				trigger: {
					global: 'phaseJudgeBegin',
				},
				filter: (_event, player) => player.dqzw_hasBuff('dqzw_leitingwanjun'),
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.player.executeDelayCardEffect('shandian');
				},
			},
			dqzw_jiangliurixia: {
				mod: {
					maxHandcard(player, num) {
						if (_status.dqzw_globalBuffs.includes('dqzw_jiangliurixia')) return num - 3;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_yishijiaozi: {
				filter(event, player) {
					if (!game.friend || !game.friend.includes(player) || !_status.dqzw_globalBuffs.includes('dqzw_yishijiaozi')) return false;
					if (typeof lib.skill.jiaozi.filter == 'function') return lib.skill.jiaozi.filter.apply(this, arguments);
					return true;
				},
				inherit: 'jiaozi',
			},
			dqzw_hexinhuiyuan_2: {
				mod: {
					dqzw_countShopRefresh(player, num) {
						if (player.dqzw_hasBuff('dqzw_hexinhuiyuan_2')) return num + 5;
					},
					dqzw_shopRefreshFilter(_player, list) {
						list.push({
							id: 'dqzw_hexinhuiyuan_2',
							content: gold => gold > 99,
						});
						return list;
					},
					dqzw_shopRefreshCallback(_player, list) {
						if (!list.some(item => item.id == 'dqzw_hexinhuiyuan_1'))
							list.push({
								id: 'dqzw_hexinhuiyuan_2',
								eval: true,
								content() {
									cost += 100;
									changeGold(-100);
								},
							});
						return list;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_haoshenfa: {
				mod: {
					ignoredHandcard(card, player) {
						if (player.dqzw_hasBuff('dqzw_haoshenfa') && card.name == 'shan') return true;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_huiyuanshangdian_2: {
				mod: {
					dqzw_countShopCommodity(player, _type, num) {
						if (player.dqzw_hasBuff('dqzw_huiyuanshangdian_2')) return num + 2;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_nengshouhuidao: {
				mod: {
					dqzw_shopCommodityFinalPriceFinish(num, player) {
						if (player.dqzw_hasBuff('dqzw_nengshouhuidao')) return Math.floor(num * 0.8);
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_wenhejilue: {
				mod: {
					targetEnabled(card, player) {
						if (player.dqzw_hasBuff('dqzw_wenhejilue') && get.type(card) == 'delay') return false;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_nanmizhenxiong: {
				filter(event, player) {
					if ((game.friend && game.friend.includes(player)) || !_status.dqzw_globalBuffs.includes('dqzw_nanmizhenxiong')) return false;
					if (typeof lib.skill.jueqing.filter == 'function') return lib.skill.jueqing.filter.apply(this, arguments);
					return true;
				},
				inherit: 'jueqing',
			},
			dqzw_daodaozhiming: {
				filter(event, player) {
					if (!game.friend || !game.friend.includes(player) || !_status.dqzw_globalBuffs.includes('dqzw_daodaozhiming')) return false;
					if (typeof lib.skill.luoyi.filter == 'function') return lib.skill.luoyi.filter.apply(this, arguments);
					return true;
				},
				inherit: 'luoyi',
			},
			dqzw_anzhongtouxi: {
				mod: {
					cardUsable(card, player) {
						if (player.dqzw_hasBuff('dqzw_anzhongtouxi') && card.name == 'sha' && get.color(card) == 'black') return Infinity;
					},
				},
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_jingjizhijia: {
				trigger: {
					player: 'damageAfter',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_jingjizhijia') && event.source && event.num > 0,
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.source.damage(trigger.num);
				},
			},
			dqzw_paiwang: {
				trigger: {
					player: 'useCard',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_paiwang') && get.color(event.card) == 'red',
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					player.draw('nodelay');
				},
			},
			dqzw_kuangleibaoyan: {
				trigger: {
					source: 'damageBegin2',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_kuangleibaoyan') && !event.card && !event.cards,
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					trigger.num += 3;
				},
			},
			dqzw_ligunli: {
				trigger: {
					global: 'checkpointCreateAfter',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_ligunli') && player.dqzw_boss_gold > 0,
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					let num = Math.ceil(player.dqzw_boss_gold / 20);
					if (num > 0) player.dqzw_changeGold(num);
				},
			},
			dqzw_pianzhuanzhijia: {
				trigger: {
					player: 'damageAfter',
				},
				filter: (event, player) => player.dqzw_hasBuff('dqzw_pianzhuanzhijia') && event.source && event.num > 0,
				silent: true,
				buffSkill: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				content() {
					let target = game.filterPlayer(current => current != player, 0, true).randomGet();
					if (target) {
						player.line(target, 'green');
						target.damage(trigger.num).set('includeOut', true);
					}
				},
			},
			dqzw_boss_mengyue: {
				trigger: {
					player: 'changeHp',
				},
				filter(_event, player) {
					return player.hp < player.maxHp / 2;
				},
				forced: true,
				notGainableSkill: true,
				async content(event, trigger, player) {//QQQ
					game.broadcastAll('clear');
					player.recover(4);
					player.awakenSkill(event.name);
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
					player.phase('nodelay');
				},
			},
			dqzw_boss_dengshen: {
				forced: true,
				charlotte: true,
				notGainableSkill: true,
			},
			dqzw_boss_shaUsable: {
				mod: {
					cardUsable(card, _player, num) {
						if (card.name == 'sha') return num + 4;
					},
				},
			},
			dqzw_boss_niepan: {
				content() {
					'step 0';
					player.awakenSkill(event.name);
					player.discard(player.getCards('hej'));
					('step 1');
					player.draw(5);
					('step 2');
					if (player.hp < 4) player.recover(4 - player.hp);
					('step 3');
					player.turnOver(false);
					('step 4');
					player.link(false);
				},
				inherit: 'sbniepan',
			},
			dqzw_boss_tuibian: {
				init: player => (player.storage.dqzw_boss_tuibian = 2),
				trigger: {
					player: 'dying',
				},
				filter: (_event, player) => player.storage.dqzw_boss_tuibian,
				forced: true,
				notGainableSkill: true,
				dqzw_limitable: true,
				_priority: 20,
				async content(event, trigger, player) {//QQQ
					player.storage.dqzw_boss_tuibian--;
					player.discard(player.getCards('he'));
					player.gainMaxHp(Math.min(10, Math.ceil((_status.dqzw_checkpoint_progress || 0) / 2)));
					player.recover(player.getDamagedHp());
					player.drawTo(player.getHandcardLimit());
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
					player.phase('nodelay');
				},
			},
			dqzw_boss_yuancheng: {
				trigger: {
					player: 'damageBegin4',
				},
				filter: (event, player) => event.source != player,
				forced: true,
				usable: 20,
				notGainableSkill: true,
				dqzw_limitable: true,
				_priority: 20,
				content() {
					'step 0';
					player.judge(card => {
						let trigger = _status.event.getTrigger();
						if (trigger.source) {
							if (get.color(card) == 'red') return 2;
							if (get.color(card) == 'black') return trigger.source.countCards('h') / 2;
						}
						return 0;
					});
					('step 1');
					switch (result.color) {
						case 'black':
							if (trigger.source) {
								player.line(trigger.source, 'green');
								trigger.source.discard(trigger.source.getCards('h'));
							}
							break;
						case 'red':
							if (trigger.source) {
								player.line(trigger.source, 'fire');
								trigger.source.damage('fire');
							}
							break;
					}
				},
			},
			dqzw_boss_pozhe: {
				trigger: {
					source: 'damageAfter',
				},
				forced: true,
				notGainableSkill: true,
				dqzw_limitable: true,
				_priority: 20,
				content() {
					player.draw('nodelay');
				},
			},
			dqzw_boss_xige: {
				trigger: {
					player: ['damageBefore', 'phaseAfter'],
				},
				filter: (event, player) => (event.name == 'damage' ? !player.getStat().dqzw_boss_xige_cancel : true),
				forced: true,
				notGainableSkill: true,
				dqzw_limitable: true,
				_priority: 20,
				content() {
					if (trigger.name == 'phase') player.changeHujia(1);
					else {
						trigger.cancel();
						player.getStat().dqzw_boss_xige_cancel = true;
					}
				},
			},
			dqzw_boss_hunyou: {
				trigger: {
					player: 'damageBegin2',
				},
				filter: (_event, player) => player.hasHistory('damage'),
				forced: true,
				notGainableSkill: true,
				dqzw_limitable: true,
				_priority: 20,
				usable: 20,
				content() {
					trigger.num -= player.getHistory('damage').length;
				},
			},
			dqzw_boss_quanbian: {
				trigger: {
					player: 'phaseAfter',
				},
				filter: event => !event.skill,
				forced: true,
				notGainableSkill: true,
				dqzw_limitable: true,
				_priority: 20,
				content() {
					player.phase('nodelay');
				},
			},
			dqzw_boss_weishe: {
				trigger: {
					source: 'damageBegin2',
				},
				filter: (event, player) => player.isEnemiesOf(event.player),
				forced: true,
				notGainableSkill: true,
				dqzw_limitable: true,
				_priority: 20,
				content() {
					trigger.num++;
				},
			},
			dqzw_boss_tianxuan: {
				group: ['dqzw_boss_kuizeng_junheng', 'dqzw_boss_kuizeng_huimie', 'dqzw_boss_kuizeng_siwang', 'dqzw_boss_kuizeng_mingyun'],
				forced: true,
				notGainableSkill: true,
				dqzw_limitable: true,
			},
			dqzw_boss_shenkui: {
				trigger: {
					player: 'dieBegin',
				},
				filter: event => event.source && lib.dqzw_boss_kuizengList,
				forced: true,
				forceDie: true,
				notGainableSkill: true,
				dqzw_limitable: true,
				_priority: 20,
				logTarget: 'source',
				content() {
					let source = trigger.source;
					if (source) {
						let skill = lib.dqzw_boss_kuizengList.filter(skill => !source.hasSkill(skill)).randomGet();
						if (skill) source.addSkill(skill);
					}
				},
			},
			dqzw_boss_kuizeng_junheng: {
				trigger: {
					player: 'gainAfter',
				},
				usable: 5,
				filter: event => !event.parent.dqzw_boss_kuizeng_junheng,
				forced: true,
				notGainableSkill: true,
				_priority: 20,
				nobracket: true,
				content() {
					player.draw('nodelay').dqzw_boss_kuizeng_junheng = true;
				},
			},
			dqzw_boss_kuizeng_huimie: {
				trigger: {
					source: 'damageAfter',
				},
				usable: 5,
				filter: event => !event.dqzw_boss_kuizeng_huimie && event.player.isAlive(),
				notGainableSkill: true,
				_priority: 20,
				nobracket: true,
				logTarget: 'player',
				check: (event, player) => get.damageEffect(event.player, event.source, player) > 0,
				content() {
					trigger.player.damage().dqzw_boss_kuizeng_huimie = true;
				},
			},
			dqzw_boss_kuizeng_siwang: {
				trigger: {
					player: ['useCard', 'respond'],
				},
				filter: (_event, player) => game.hasPlayer(current => player.isEnemiesOf(current) && current.countCards('h')),
				forced: true,
				notGainableSkill: true,
				_priority: 20,
				nobracket: true,
				content() {
					let target = game.filterPlayer(current => player.isEnemiesOf(current) && current.countCards('h')).randomGet();
					if (target) {
						player.line(target, 'green');
						target.discard(target.getCards('h').randomGet());
					}
				},
			},
			dqzw_boss_kuizeng_mingyun: {
				trigger: {
					player: 'phaseAfter',
				},
				filter: (event, player) => !event.skill && !player.hasSkill('dqzw_boss_kuizeng_mingyun_used'),
				forced: true,
				notGainableSkill: true,
				dqzw_limitable: true,
				_priority: 20,
				nobracket: true,
				content() {
					player.phase('nodelay');
					player.addTempSkill(event.name + '_used', 'roundStart');
				},
				subSkill: {
					used: {
						charlotte: true,
					},
				},
			},
			dqzw_boss_group_skill_jin: {
				trigger: {
					player: ['phaseDrawAfter', 'phaseAfter'],
				},
				filter(event, player) {
					if (event.name != 'phaseDraw' && !player.storage.dqzw_boss_group_skill_upgrade) return false;
					return event.name == 'phaseDraw' ? player.countCards('h', card => card.suit != 'none') > 0 : player.getHistory('useCard').length;
				},
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: 20,
				content() {
					'step 0';
					if (trigger.name == 'phaseDraw') player.draw([...new Set(player.getCards('h', card => card.suit != 'none').map(card => card.suit))].length, 'nodelay');
					else player.draw(player.getHistory('useCard').length, 'nodelay');
				},
			},
			dqzw_boss_group_skill_wei: {
				init: player => (player.storage.dqzw_boss_group_skill_wei_count = 0),
				trigger: {
					player: ['phaseBegin', 'damageAfter'],
				},
				filter(event, player) {
					if (event.name != 'phase' && !player.storage.dqzw_boss_group_skill_upgrade) return false;
					return true;
				},
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: 20,
				content() {
					'step 0';
					let num = Math.min(5, player.storage.dqzw_boss_group_skill_wei_count || 0);
					if (!player.storage.dqzw_boss_group_skill_wei_count) player.storage.dqzw_boss_group_skill_wei_count = 0;
					if (trigger.name != 'phase') {
						player.storage.dqzw_boss_group_skill_wei_count++;
						event.goto(2);
					} else {
						player
							.chooseTarget('###' + get.prompt(event.name) + '###令一名其他角色选择弃置' + get.cnNumber(num) + '张牌或令你摸' + get.cnNumber(num) + '张牌', true, lib.filter.notMe, target => {
								let num = _status.event.num,
									att = get.attitude(get.player(), target);
								if (att < 1 && target.countCards('he') >= num) return -att + 5;
								return att;
							})
							.set('num', num);
					}
					event.num = num;
					('step 1');
					if (result.targets && result.targets.length) {
						let num = event.num;
						if (num > 0) {
							let target = result.targets[0];
							target
								.chooseToDiscard('he', num)
								.set('ai', function () {
									if (get.attitude(get.player(), _status.event.target) > 1) return 0;
									return 8 - get.value.apply(this, arguments);
								})
								.set('target', player);
							//else ;
						} else event.finish();
						player.storage.dqzw_boss_group_skill_wei_count++;
					}
					('step 2');
					if (!result || !result.cards || !result.cards.length) player.draw(event.num, 'nodelay');
				},
			},
			dqzw_boss_group_skill_shu: {
				mod: {
					cardUsable(card, _player, num) {
						if (card.name == 'sha') return num + 3;
					},
				},
				trigger: {
					player: 'phaseUseEnd',
					source: 'damageAfter',
				},
				filter(event, player) {
					if (event.name != 'phaseUse' && (!event.card || event.card.name != 'sha' || !player.storage.dqzw_boss_group_skill_upgrade)) return false;
					return player.getHistory('useCard', evt => evt.card.name == 'sha').length;
				},
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: 20,
				content() {
					if (trigger.name == 'phaseUse') player.draw(player.getHistory('useCard', evt => evt.card.name == 'sha').length, 'nodelay');
					else player.draw('nodelay');
				},
			},
			dqzw_boss_group_skill_wu: {
				//init: player => player.storage.dqzw_boss_group_skill_wu_count = 0,
				trigger: {
					player: ['phaseBegin', 'phaseAfter'],
				},
				filter(_event, player, name) {
					if (name != 'phaseAfter' && !player.storage.dqzw_boss_group_skill_upgrade) return false;
					return player.countCards('h') < player.hp || player.hp < player.countCards('h');
				},
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: 20,
				content() {
					let recover = player.countCards('h') - player.hp,
						draw = player.hp - player.countCards('h');
					if (draw > 0) player.draw(draw, 'nodelay');
					if (recover > 0) player.recover(recover);
				},
			},
			dqzw_boss_group_skill_qun: {
				trigger: {
					player: 'phaseDiscardBefore',
				},
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: 80,
				firstDo: true,
				content() {
					if (player.storage.dqzw_boss_group_skill_upgrade) {
						trigger.setContent(lib.element.content.phaseUse);
						trigger.name = 'phaseUse';
						trigger.step = 0;
						trigger._triggered = 0;
						trigger.finished = false;
					} else trigger.cancel();
				},
			},
			dqzw_boss_juelie: {
				init(player, skill) {
					player.storage[skill] = [0, 0];
				},
				trigger: {
					player: 'recoverBegin',
					source: 'damageBegin2',
				},
				notGainableSkill: true,
				notLimitableSkill: true,
				forced: true,
				filter(event, player) {
					return player.getStorage('dqzw_boss_juelie')[event.name == 'damage' ? 0 : 1] > 0;
				},
				content() {
					trigger.num += player.getStorage('dqzw_boss_juelie')[trigger.name == 'damage' ? 0 : 1] || 0;
				},
			},
			dqzw_boss_shilian: {
				enable: 'phaseUse',
				notGainableSkill: true,
				notLimitableSkill: true,
				chooseButton: {
					dialog() {
						let list = ['skill', 'recast', 'guardianAngel'],
							dialog = ui.create.dialog('试炼');
						list.forEach(name => {
							let button = game.dqzw_createChoiceCard('dqzw_boss_choice_shilian_' + name, null, 'shilian.jpg');
							button.link = name;
							dialog.buttons.push(button);
						});
						dialog.style.setProperty('left', '18%', 'important');
						dialog.style.setProperty('top', '5%', 'important');
						dialog.style.setProperty('min-width', (document.body.offsetWidth / 100) * 60 + 'px', 'important');
						dialog.style.setProperty('min-height', (document.body.offsetHeight / 100) * 70 + 'px', 'important');
						game.dqzw_genius_draw(dialog, [...ui.dqzw_choice_cardPile.children]);
						dialog.add('');
						return dialog;
					},
					check: button => get.effect(get.player(), button, get.player(), get.player()),
					backup(links, player) {
						player.removeSkill('dqzw_boss_shilian', true);
						let map = {
							skill() {
								player.chooseSkillObtain(lib.dqzw_boss_leaderExclusiveSkill.randomGets(3));
							},
							recast() {
								let skills = player.dqzw_getRecastableSkills(),
									stock = player.getStockSkills(true, true, true);
								player.removeSkill(skills, true);
								player.addSkill(lib.dqzw_boss_gainable_skills.randomGets(stock.length)).notLimitable = true;
								player.addSkill(lib.dqzw_boss_gainable_skills.randomGets(skills.length - stock.length));
							},
							guardianAngel() {
								player.gainMaxHp(5);
								player.recover(5);
								player.addSkill('dqzw_boss_shilian_guardianAngel');
							},
						};
						return {
							content: map[links[0]] || function () { },
						};
					},
				},
				ai: {
					order: 1,
					result: {
						player: 1,
					},
				},
				subSkill: { backup: {} },
			},
			dqzw_boss_tempCountGainableReward: {
				mod: {
					dqzw_countGainableReward: (player, num) => num + (player.storage.dqzw_boss_tempCountGainableReward || 0),
					dqzw_countSelectableReward: (player, num) => num + (player.storage.dqzw_boss_tempCountSelectableReward || 0),
				},
				onremove: player => {
					player.storage.dqzw_boss_tempCountGainableReward = 0;
					player.storage.dqzw_boss_tempCountSelectableReward = 0;
				},
				forced: true,
				charlotte: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_boss_adjustment_skill: {
				enable: 'phaseUse',
				filter: (event, player) => player.dqzw_getBackpackItem('skill').length && lib.checkpoint && lib.checkpoint[_status.dqzw_checkpoint_progress - 1 || 0] && !lib.checkpoint[_status.dqzw_checkpoint_progress - 1 || 0].adjustmentSkill,
				content() {
					'step 0';
					player.chooseSkillSlotReplace(player.dqzw_getBackpackItem('skill'));
					('step 1');
					if (result.moved) {
						let skills = [...player.getSkillSlot()];
						result.moved[0].forEach((item, index) => {
							player.replaceSkillSlot(index, item.skill).type = 'adjustment-skill';
							player.addSkill(item.skill).notLimitable = true;
						});
						player.dqzw_toBackpack(
							result.moved[1].map(item => item.skill).filter(name => name != 'dqzw_skill_slot'),
							'skill'
						);
						event.skills = skills;
					} else event.finish();
					('step 2');
					let skillSlot = player.getSkillSlot();
					event.skills.forEach(skill => {
						if (!skillSlot.includes(skill)) player.removeSkill(skill, true).notLimitable = true;
					});
					player.dqzw_loseBackpackItem(skillSlot, 'skill');
					if (lib.checkpoint && lib.checkpoint[_status.dqzw_checkpoint_progress - 1 || 0]) lib.checkpoint[_status.dqzw_checkpoint_progress - 1 || 0].adjustmentSkill = true;
				},
			},
			dqzw_boss_gain_skill_limit: {
				mod: {
					dqzw_countGainableReward: (player, num) => num + Math.min(2, Math.floor((_status.dqzw_checkpoint_progress || 0) / 20)),
					dqzw_countSelectableReward: (player, num) => num + Math.min(2, Math.floor((_status.dqzw_checkpoint_progress || 0) / 20)),
				},
				trigger: {
					player: 'addSkillBefore',
				},
				notGainableSkill: true,
				notLimitableSkill: true,
				silent: true,
				lastDo: true,
				_priority: -4444,
				filter: (event, player) => player.countSkillSlot(true) && !event.notLimitable,
				content() {
					'step 0';
					let skills = Array.isArray(trigger.skill) ? [] : [trigger.skill];
					event.skills = player.dqzw_getRestrictedSkills(skills);
					if (!event.skills.length) event.finish();
					('step 1');
					let skill = event.skills.shift();
					if (player.countSkillSlot() && !player.getSkillSlot().includes(skill)) {
						player.chooseBool('###是否获得技能【' + get.translation(skill) + '】？###' + get.skillInfoTranslation(skill, player));
					}
					event.skill = skill;
					('step 2');
					if (player.countSkillSlot() && result.bool) {
						if (result.bool === true) player.replaceSkillSlot(player.findSkillSlot(), event.skill);
					} else {
						trigger.cancel();
						player.dqzw_toBackpack([event.skill], 'skill');
					}
					if (event.skills.length) event.goto(1);
				},
			},
			dqzw_boss_lose_skill_limit: {
				trigger: {
					player: 'removeSkillBefore',
				},
				notGainableSkill: true,
				notLimitableSkill: true,
				silent: true,
				firstDo: true,
				_priority: 4444,
				filter: (event, player) => player.countSkillSlot(true) && player.getSkillSlot().includes(event.skill) && !event.notLimitable,
				content() {
					let skill = trigger.skill;
					if (Array.isArray(skill))
						skill.forEach(skill => {
							player.replaceSkillSlot(skill, 'dqzw_skill_slot');
						});
					else player.replaceSkillSlot(skill, 'dqzw_skill_slot');
				},
			},
			dqzw_boss_gain_maxHp_limit: {
				trigger: {
					player: 'gainMaxHpBefore',
				},
				notGainableSkill: true,
				notLimitableSkill: true,
				silent: true,
				firstDo: true,
				_priority: 2333,
				filter: event => event.player.maxHp + event.num > 20,
				content() {
					trigger.num = Math.min(20 - trigger.player.maxHp, trigger.num);
					if (trigger.num < 1) trigger.cancel();
				},
			},
			dqzw_boss_gain_card_limit: {
				trigger: {
					player: 'gainBefore',
				},
				notGainableSkill: true,
				notLimitableSkill: true,
				silent: true,
				firstDo: true,
				_priority: 2333,
				filter: event => ((event.cards && event.cards.length) || 0) + event.player.countCards('h') > 50,
				content() {
					'step 0';
					let num = trigger.player.countCards('h') + trigger.cards.length - 50;
					trigger.cards = (trigger.cards || []).slice(0, -num);
					if (!trigger.cards.length) trigger.cancel();
					if (num > 0) trigger.player.chooseCard(`你可重铸${get.cnNumber(num)}张牌`, num, lib.filter.cardRecastable, card => 6 - get.value(card));
					('step 1');
					if (result.cards) trigger.player.recast(result.cards);
				},
			},
			dqzw_boss_leader_rage: {
				trigger: {
					player: 'changeHp',
					global: ['roundStart', 'phaseBegin'],
				},
				filter: (event, player) => game.boss && ((game.boss.includes && game.boss.includes(player)) || game.boss == player) && lib.checkpoint && lib.checkpoint[_status.dqzw_checkpoint_progress - 1 || 0] && (event.name == 'changeHp' ? player.hp < 6 && get.rand(1, 100) < 2 && !player.storage.dqzw_bossRage : game.roundNumber - lib.checkpoint[_status.dqzw_checkpoint_progress - 1 || 0].roundNumber > 4),
				forceDie: true,
				forceOut: true,
				silent: true,
				firstDo: true,
				charlotte: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: 7777,
				content() {
					let progress = _status.dqzw_checkpoint_progress,
						info = lib.checkpoint && lib.checkpoint[progress - 1 || 0],
						num = game.roundNumber - (info && info.roundNumber);
					if (trigger.name == 'changeHp') {
						let number = Math.min(10, Math.floor(progress / 2)),
							newPhase = () => {
								_status.event.parent.insert(function () {
									const evt = _status.event.getParent('phase');
									if (evt && evt.name) {
										evt.finish();
									}
									player.phase('nodelay');
								}, { player });
							};
						[
							[
								!progress || progress < 31,
								() => {
									game.enemy.forEach(current => {
										if (current.isDead()) {
											current.revive(number);
											_status.event.insert(
												function () {
													event.trigger('revive');
												},
												{ player: current, source: player }
											);
											current.directgain(get.cards(3));
										}
									});
									game.broadcast(
										(players, player, hp) => {
											players.forEach(current => {
												if (current && current.isDead()) current.revive(hp);
											});
										},
										game.enemy,
										player,
										number
									);
									game.asyncDraw(game.enemy);
									player.recover(number);
								},
							],
							[
								progress < 61,
								() => {
									let players = game.filterPlayer(current => player.isEnemiesOf(current), 0, true);
									player.line(players, 'thunder');
									players.forEach(player => {
										player.damage(number, 'thunder').set('includeOut', true);
									});
									player.recover(number);
									player.draw(number * 2);
									newPhase();
								},
							],
							[
								progress > 60,
								() => {
									let players = game.filterPlayer(current => player.isEnemiesOf(current), 0, true);
									number = Math.min(20, Math.floor(progress / 2));
									if (player.hp < number) player.recover(number - player.hp);
									player.draw(number * 2);
									player.line(players, 'fire');
									players.forEach(player => {
										player.damage(number, 'fire').set('includeOut', true);
										player.chooseToDiscard('e', true, Infinity);
									});
									newPhase();
								},
							],
						];
						player.storage.dqzw_bossRage = true;
					}
					else {
						if (num == 5 && event.triggername == 'roundStart') {
							let players = player.getEnemies();
							player.line(players, 'fire');
							players.forEach(current => {
								current.chooseToDiscard('hej', true, Infinity);
							});
						}
						if (num > 6 && event.triggername == 'phaseBegin' && player.isEnemiesOf(trigger.player)) {
							trigger.player.loseHp();
						}
					}
				},
			},
			dqzw_boss_change_gold: {
				trigger: {
					source: 'damageAfter',
					player: ['useCard', 'damageAfter'],
					global: ['die', 'checkpointCreateAfter'],
				},
				forceDie: true,
				forceOut: true,
				silent: true,
				firstDo: true,
				charlotte: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				filter: (event, player) => game.friend && game.friend.includes(player) && (/die|damage|checkpointCreate/.test(event.name) || event.getParent(2).name == '_save'),
				content() {
					let name = 'dqzw_boss_currentCheckpoint_';
					if (trigger.name == 'die')
						game.friend.forEach(current => {
							current.dqzw_changeGold(current == trigger.source ? 50 : 30);
						});
					if (trigger.name == 'useCard') player.dqzw_changeGold(10);
					if (trigger.name == 'damage') {
						name = name + (trigger.source == player ? 'sourceDamage' : 'damage');
						player.storage[name] = (player.storage[name] || 0) + trigger.num;
					}
					if (trigger.name == 'checkpointCreate') {
						player.storage[name + 'sourceDamage'] = 0;
						player.storage[name + 'damage'] = 0;
					}
				},
			},
			dqzw_boss_tiansuan: {
				audio: ['oltianhou', 'oltianhou_spade', 'oltianhou_heart', 'oltianhou_club', 'oltianhou_diamond'],
				trigger: {
					player: ['loseAfter', 'useCard', 'damageBegin4'],
					source: 'damageBegin2',
					global: ['changeNumber', 'gameStart', 'equipAfter', 'phaseBefore', 'phaseAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					if (event.name == 'damage') return player.getHistory('damage').length + player.getHistory('sourceDamage').length > 1;
					if (event.name == 'useCard') return true;
					if (event.getParent('dqzw_boss_tiansuan').name == 'dqzw_boss_tiansuan' || event.parent.name == 'useCard') return false;
					let cards = player.getCards('h');
					for (let number = 13; number > 0; number--) {
						let num = cards.filter(card => card.number == number).length;
						if (num > 1 || !num) return true;
					}
					return false;
				},
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				content() {
					'step 0';
					if (trigger.name == 'damage') {
						//if ((trigger.source == player && player.getHistory('sourceDamage').length > 1)
						//    || (trigger.player == player && player.getHistory('damage').length > 1))
						trigger.cancel();
						return;
					}
					if (trigger.name == 'useCard' && typeof event.num != 'number') {
						let num = trigger.card.number;
						if (num % 2 == 0) {
							trigger.directHit.add(...game.filterPlayer(0, 0, true));
							game.log(trigger.card, '不可响应');
						} else {
							trigger.baseDamage++;
							game.log(trigger.card, '伤害/回复基数+1');
						}
					}
					if (typeof event.num != 'number') event.num = 13;
					if (!event.cards) event.cards = [];
					if (!event.map) event.map = {};
					let number = event.num--,
						num = player.countCards('h', card => card.number == number);
					if (num > 1) event.map[number] = num - 1;
					else if (num < 1) {
						let card = get.cardPile(card => !event.cards.includes(card) && card.number == number);
						if (card) event.cards.push(card);
					}
					if (number > 0) event.redo();
					('step 1');
					if (event.map && Object.keys(event.map).length)
						player
							.chooseToDiscard(
								`请选择要弃置的卡牌`,
								Object.keys(event.map).reduce((pre, cur) => pre + event.map[cur], 0),
								true,
								card => {
									let map = _status.event.numberMap,
										player = get.player(),
										number = card.number;
									if (!map[number]) return false;
									return ui.selected.cards.filter(cardx => number == cardx.number).length < map[number] * 1;
								}
							)
							.set('numberMap', event.map)
							.set('complexCard', true);
					if (event.cards && event.cards.length) player.gain(event.cards, 'draw');
				},
				ai: {
					noh: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return;
								if (target.getHistory('damage').length > 1) return 'zeroplayertarget';
							}
						},
					},
				},
			},
			dqzw_boss_chenshuo: {
				audio: 'olchenshuo',
				global: 'dqzw_boss_chenshuo_number',
				trigger: {
					player: 'damageAfter',
					source: 'damageAfter',
				},
				silent: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				content() {
					'step 0';
					player.chooseCard('h', get.prompt2(event.name)).set('ai', card => {
						let damage = get.tag(card, 'damage'),
							recover = get.tag(card, 'recover');
						if (damage || recover) return Math.max(damage, recover) + 1;
						return 1;
					});
					('step 1');
					if (result.cards) {
						let card = result.cards[0],
							control = trigger.source == player ? '+3' : '-3';
						game.log(player, '将', card, '的点数', '#y' + control, `(${Math.max(1, Math.min(13, eval(`card.number ${control}`)))})`);
						eval(`
				                    card.storage.dqzw_boss_chenshuo_number = (card.storage.dqzw_boss_chenshuo_number || 0) ${control};
				                `);
						event.trigger('changeNumber');
						//player.storage.dqzw_boss_chenshuo_use = [card, result.index];
						//player.addTempSkill(event.name + '_use');
					}
				},
				subSkill: {
					number: {
						mod: {
							cardnumber(card, _player, number) {
								if (card.storage.dqzw_boss_chenshuo_number) return Math.max(1, Math.min(13, number + card.storage.dqzw_boss_chenshuo_number));
							},
						},
					},
					use: {
						trigger: {
							player: 'useCard',
						},
						filter(event, player) {
							let info = player.storage.dqzw_boss_chenshuo_use;
							return info && /basic|trick/.test(get.type(event.card)) && eval(`event.card.number ${info[1] ? '>=' : '<='} info[0].number`);
						},
						silent: true,
						charlotte: true,
						_priority: get.rand(10, 1500),
						content() {
							trigger.effectCount++;
							player.removeSkill(event.name, true);
							game.log(trigger.card, '额外结算一次');
						},
						ai: {
							effect: {
								player(card, player) {
									let info = player.storage.dqzw_boss_chenshuo_use;
									if (info && /basic|trick/.test(get.type(card)) && eval(`card.number ${info[1] ? '>=' : '<='} info[0].number`)) return 2;
								},
							},
						},
					},
				},
			},
			dqzw_boss_xingxiang: {
				group: ['dqzw_boss_xingxiang_north', 'dqzw_boss_xingxiang_west', 'dqzw_boss_xingxiang_south', 'dqzw_boss_xingxiang_east'],
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_boss_xingxiang_east: {
				trigger: {
					player: 'useCard2',
				},
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				filter(event, player) {
					let info = get.info(event.card);
					return info.allowMultiple != false && !info.multitarget && event.targets && game.hasPlayer(current => !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current)) && get.type(event.card) == 'trick' && player.isPhaseUsing() && player.getHistory('useCard', evt => get.type(evt.card) == 'trick').length < 3;
				},
				content() {
					'step 0';
					player
						.chooseTarget(
							get.prompt(event.name),
							(card, player, target) => {
								return _status.event.targets.includes(target) || lib.filter.targetEnabled2(_status.event.card, player, target);
							},
							target => {
								let trigger = _status.event.getTrigger(),
									player = get.player();
								return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
							}
						)
						.set('prompt2', '为' + get.translation(trigger.card) + '增加或减少一个目标')
						.set('targets', trigger.targets)
						.set('card', trigger.card);
					('step 1');
					if (result.bool) {
						event.targets = result.targets;
					} else event.finish();
					('step 2');
					if (event.targets) {
						player.line(event.targets);
						if (trigger.targets.includes(event.targets[0])) trigger.targets.remove(...event.targets);
						else trigger.targets.add(...event.targets);
					}
				},
			},
			dqzw_boss_xingxiang_south: {
				trigger: {
					source: 'damageBegin2',
				},
				usable: 1,
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				filter: (event, player) => event.nature && player.isPhaseUsing(),
				content() {
					trigger.num += 2;
				},
			},
			dqzw_boss_xingxiang_west: {
				trigger: {
					source: 'damageBegin2',
				},
				usable: 1,
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				filter: (event, player) => event.card && event.card.name == 'sha' && !event.card.nature && player.isPhaseUsing(),
				content() {
					trigger.num += 2;
				},
			},
			dqzw_boss_xingxiang_north: {
				trigger: {
					player: ['useCardAfter', 'respondAfter'],
				},
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				filter: (event, player) => player.isPhaseUsing() && (player.getAllHistory('useCard', evt => evt.getParent('phaseUse').name == 'phaseUse').length + player.getAllHistory('respond', evt => evt.getParent('phaseUse').name == 'phaseUse')) % 2 == 0,
				content() {
					player.draw('nodelay');
				},
			},
			dqzw_boss_xingxiang_middle: {
				group: ['dqzw_boss_xingxiang_north', 'dqzw_boss_xingxiang_west', 'dqzw_boss_xingxiang_south', 'dqzw_boss_xingxiang_east'],
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_boss_mengjie: {
				audio: 'dcmengjie',
				trigger: {
					global: ['phaseBefore', 'phaseAfter'],
				},
				filter: (event, _player, name) => (name == 'phaseAfter' ? event.wake || event.skill == 'dcwumei' : true),
				silent: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				content() {
					if (event.triggername == 'phaseAfter') {
						player.phase('nodelay');
					} else {
						let name = event.name;
						game.hasPlayer2(current => current.addTempSkill(name + '_change', { global: ['changeHp', 'phaseEnd'] }), true);
						trigger.player.addTempSkill(name + '_wake', (event, current) => {
							if (event.name == 'phaseJieshu') {
								if (!game.hasPlayer2(current => current.hasSkill(name + '_change') || current.hasHistory('sourceDamage'), true)) {
									let storage = current.storage.dqzw_boss_mengjie_wake;
									storage.forEach(item => {
										let player = (lib.playerOL || game.playerMap)[item.id];
										if (player && player.hp != item.hp) {
											game.log(player, '的体力从', get.cnNumber(player.hp, true), '改为', get.cnNumber(item.hp, true));
											player.changeHp(item.hp - player.hp)._triggered = null;
										}
									});
									trigger.wake = true;
								}
								return true;
							}
						});
					}
				},
				subSkill: {
					change: {
						charlotte: true,
					},
					wake: {
						init: player => {
							player.storage.dqzw_boss_mengjie_wake = game.filterPlayer2(0, 0, true).map(player => {
								return {
									id: player.playerid,
									hp: player.hp,
								};
							});
						},
						charlotte: true,
					},
				},
			},
			dqzw_boss_tongguan: {
				global: 'dqzw_boss_tongguan_damage',
				notGainableSkill: true,
				notLimitableSkill: true,
				subSkill: {
					damage: {
						audio: 'dctongguan',
						enable: 'phaseUse',
						usable: 1,
						filter: (_event, player) => !player.hasSkill('dqzw_boss_tongguan', void 0, void 0, void 0, false),
						filterTarget: lib.filter.notMe,
						prompt: '失去1点体力并视为对一名角色造成1点伤害',
						content() {
							player.loseHp();
							target.damage('unreal');
						},
						ai: {
							result: {
								target: 0,
							},
						},
					},
				},
			},
			dqzw_boss_xingmeng: {
				group: ['dqzw_boss_mengjie_duomou', 'dqzw_boss_mengjie_renzhi', 'dqzw_boss_mengjie_wuyong', 'dqzw_boss_mengjie_gangying'],
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_boss_mengjie_duomou: {
				trigger: {
					player: 'drawBegin',
				},
				usable: 3,
				filter: event => event.parent.name != 'phaseDraw' && !event.dqzw_boss_mengjie_duomou,
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				content() {
					player.draw(2, 'nodelay').dqzw_boss_mengjie_duomou = true;
				},
			},
			dqzw_boss_mengjie_renzhi: {
				trigger: {
					player: 'phaseJieshu',
				},
				filter: (_event, player) => game.hasPlayer(current => current.hasHistory('gain', evt => evt.giver == player && evt.parent.name != 'gift' && evt.cards.length)),
				silent: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				content() {
					'step 0';
					player.chooseTarget('令一名角色将手牌䃼至体力上限').set('ai', target => {
						let player = get.player();
						if (get.attitude(player, target) > 1) return target.maxHp - target.countCards('h');
						return 0;
					});
					('step 1');
					if (result.targets) {
						let target = result.targets[0];
						target.drawTo(target.maxHp);
					}
				},
			},
			dqzw_boss_mengjie_gangying: {
				trigger: {
					player: ['phaseBefore', 'phaseJieshuBegin'],
				},
				filter: (event, player) => (event.name == 'phaseJieshu' ? player.hp > player.countCards('h') || !player.hasSkill('dqzw_boss_mengjie_gangying_recover') : true),
				silent: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				content() {
					'step 0';
					if (trigger.name == 'phase') player.addTempSkill(event.name + '_recover', 'recoverBefore');
					else
						player.chooseTarget('令一名角色回复体力至上限').set('ai', target => {
							let player = get.player();
							if (get.attitude(player, target) > 1) return target.getDamagedHp();
							return 0;
						});
					('step 1');
					if (result.targets) {
						let target = result.targets[0];
						target.recover(target.getDamagedHp());
					}
				},
				subSkill: {
					recover: {
						charlotte: true,
					},
				},
			},
			dqzw_boss_mengjie_wuyong: {
				trigger: {
					source: 'damageAfter',
				},
				usable: 3,
				filter: event => !event.dqzw_boss_mengjie_wuyong && event.player.isAlive(),
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
				_priority: get.rand(10, 1500),
				content() {
					trigger.player.damage().dqzw_boss_mengjie_wuyong = true;
				},
			},
			dqzw_boss_mengjie_guojue: {
				group: ['dqzw_boss_mengjie_duomou', 'dqzw_boss_mengjie_renzhi', 'dqzw_boss_mengjie_wuyong', 'dqzw_boss_mengjie_gangying'],
				forced: true,
				notGainableSkill: true,
				notLimitableSkill: true,
			},
			dqzw_boss_change_group: {
				trigger: {
					global: 'gameStart',
				},
				filter: (_event, player) => game.friend.includes(player) && !game._dqzw_boss_changeGroup,
				silent: true,
				content() {
					'step 0';
					event.players = [...game.friend];
					('step 1');
					player = event.players.shift();
					event.player = player;
					let list = ['wei', 'shu', 'wu', 'qun', 'jin'],
						id = lib.status.videoId++,
						create = (id, list, has, player) => {
							let dialog = ui.create.dialog(has ? '你的势力技' : '请选择你的势力');
							game.dqzw_choice_initCardPile();
							if (!has)
								[...list].reverse().forEach(group => {
									dialog.buttons.push(game.dqzw_createChoiceCard('dqzw_boss_choice_group_skill_' + group, null, 'group_' + group + '.jpg'));
								});
							else dialog.buttons.push(game.dqzw_createChoiceCard('dqzw_boss_choice_group_skill_' + player.group, null, 'group_' + player.group + '.jpg'));
							dialog.style.setProperty('left', '6%', 'important');
							dialog.style.setProperty('top', '5%', 'important');
							dialog.style.setProperty('min-width', (document.body.offsetWidth / 100) * 80 + 'px', 'important');
							dialog.style.setProperty('min-height', (document.body.offsetHeight / 100) * 60 + 'px', 'important');
							if (!_status.connectMode && player.isUnderControl()) game.swapPlayerAuto(player);
							game.dqzw_genius_draw(dialog, [...ui.dqzw_choice_cardPile.children]);
							dialog.add('');
							dialog.videoId = id;
						};
					if (!list.includes(player.group)) {
						if (player.isOnline()) player.send(create, id, list, false, player);
						else create(id, list, false, player);
						player.chooseControl(list);
					} else if (player.isOnline()) player.send(create, id, list, true, player);
					else create(id, list, true, player);
					event.videoId = id;
					event.player = player;
					('step 2');
					if (result && result.control) {
						player.changeGroup(result.control);
						return;
					}
					player.chooseControl('ok');
					('step 3');
					event._result = {};
					player.addSkill('dqzw_boss_group_skill_' + player.group).notLimitable = true;
					game.broadcastAll('closeDialog', event.videoId);
					game._dqzw_boss_changeGroup = true;
					if (_status.dqzw_boss_activity == 'springFestival') {
						let names = ['nian_', 'xi_'],
							name;
						if (player.group != 'jin') name = names.randomGet();
						else name = names[0];
						game.broadcastAll(
							(player, name, group, translation) => {
								player.classList.remove('fullskin2');
								player.node.avatar2.hide();
								player.node.name2.hide();
								player.node.avatar.setBackgroundImage(`extension/大权在握/image/activity/springFestival/character/${name}${group}.jpg`);
								player.node.name.innerHTML = (name == 'nian_' ? '年' : '夕') + '兽大' + translation;
							},
							player,
							name,
							player.group,
							get.translation(player.group)
						);
					}
					if (event.players.length) event.goto(1);
				},
			},
			_feiyang: {
				trigger: { player: 'phaseJudgeBegin' },
				charlotte: true,
				forced: true,
				filter(_event, player) {
					let config = lib.dqzw_mode_config[_status.dqzw_boss_mode] || _status.dqzw_mode_config;
					return (config && config.feiyang ? config.feiyang.apply(this, arguments) : true) && player.countCards('j') && player.countCards('h') > 1;
				},
				content() {
					'step 0';
					player
						.chooseToDiscard('h', 2, get.prompt(event.name), '弃置两张手牌,弃置判定区里的一张牌')
						.set('ai', function (card) {
							if (_status.event.goon) return 6 - get.value(card);
							return 0;
						})
						.set(
							'goon',
							player.hasCard(function (card) {
								return (
									get.effect(
										player,
										{
											name: card.viewAs || card.name,
											cards: [card],
										},
										player,
										player
									) < 0
								);
							}, 'j')
						);
					('step 1');
					if (result.bool) player.discardPlayerCard(player, 'j', true);
				},
			},
			_bahu: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				charlotte: true,
				forced: true,
				filter(_event, player) {
					let config = lib.dqzw_mode_config[_status.dqzw_boss_mode] || _status.dqzw_mode_config;
					return config && config.bahu ? config.bahu.apply(this, [false, ...arguments]) : true;
				},
				content() {
					player.draw();
				},
				mod: {
					cardUsable(card, player, num) {
						let config = lib.dqzw_mode_config[_status.dqzw_boss_mode];
						if ((config && config.bahu ? config.bahu.apply(this, [true, ...arguments]) : true) && card.name == 'sha') return num + 1;
					},
				},
			},
			_dqzw_replaceHandcards: {
				trigger: {
					global: 'gameDrawAfter',
				},
				filter(event, player) {
					return !game._replaceHandcards;
				},
				silent: true,
				firstDo: true,
				content() {
					game._replaceHandcards = true;
					let config = get.configOL('change_card', 'dqzw_guihuaxishuang');
					if (config != 'disabled') {
						switch (config) {
							case 'once':
								config = 1;
								break;
							case 'twice':
								config = 2;
								break;
							case 'quintic':
								config = 5;
								break;
							case 'eight':
								config = 8;
								break;
							case 'twelve':
								config = 12;
								break;
							case 'unlimited':
								config = Infinity;
						}
						if (config) game.dqzw_replaceHandcards(game.friend).set('num', config);
					}
				},
			},
			_dqzw_boss_random_weather: {
				trigger: {
					player: 'checkpointCreateAfter',
				},
				filter(event, player) {
					let config = lib.dqzw_mode_config[_status.dqzw_boss_mode] || _status.dqzw_mode_config;
					return get.configOL('random_weather', 'dqzw_guihuaxishuang') && (config && config.weather ? config.weather.apply(this, arguments) : true);
				},
				silent: true,
				firstDo: true,
				forceDie: true,
				content() {
					'step 0';
					let id = lib.status.videoId++,
						list = Object.keys(lib.dqzw_boss_weather),
						map = lib.dqzw_boss_weather,
						weather = list.randomGet();
					game.createWeather(id, list, weather, map);
					event.weather = weather;
					event.videoId = id;
					('step 1');
					('step 2');
					game.broadcastAll(function (id) {
						let dialog = get.idDialog(id);
						if (dialog && dialog._random_result) {
							let node = dialog._random_result,
								pre = node.previousElementSibling;
							node.parentNode.style.whiteSpace = '';
							[...node.parentNode.children].forEach(nodex => {
								if (nodex != node) nodex.classList.add('forcehide');
							});
							node.classList.remove('tdnode');
							let skill = lib.skill[node.link] ? node.link : 'dqzw_boss_' + node.link,
								name = lib.translate[skill],
								info = lib.translate[skill + '_info'];
							Object.assign(node.style, {
								position: 'relative',
								width: (document.body.offsetWidth / 100) * 14 + 'px',
								height: (document.body.offsetHeight / 100) * 16 + 'px',
								overflow: 'auto',
							});
							node.innerHTML = '';
							ui.create.div(
								'.text.center',
								`
			                                「${name || '木有翻译捏'}」
			                            `,
								{
									position: 'relative',
									width: '96%',
									margin: '2%',
									fontSize: '120%',
								},
								node
							);
							node.appendChild(document.createElement('br'));
							ui.create.div(
								'.text',
								{
									position: 'relative',
									width: '96%',
								},
								`
			                                ${info || (!name ? '怎么描述也木有!!' : '木有描述捏')}
			                            `,
								node
							);
						}
					}, event.videoId);
					('step 3');
					('step 4');
					game.broadcastAll('closeDialog', event.videoId);
				},
			},
		},
		element: {
			player: {
				chooseSkillObtain(skills, prompt) {
					let next = game.createEvent('chooseSkillObtain'),
						args = Array.from(arguments).slice(2);
					next.skills = skills || [];
					next.args = args;
					next._args = [...arguments];
					next.player = this;
					next.prompt = prompt;
					next.setContent('chooseSkillObtain');
					return next;
				},
				chooseSkillSlotReplace(skills, prompt, filter) {
					let next = game.createEvent('chooseSkillSlotReplace');
					next.player = this;
					next.skills = skills;
					next.prompt = prompt;
					next.filter = filter;
					next._args = arguments;
					next.setContent('chooseSkillSlotReplace');
					return next;
				},
				gainSkillSlot(num = 1, log) {
					let next = game.createEvent('gainSkillSlot');
					next.player = this;
					next.num = num;
					next.log = log;
					next.setContent('gainSkillSlot');
					return next;
				},
				loseSkillSlot(num = 1, log) {
					let next = game.createEvent('loseSkillSlot');
					next.player = this;
					next.num = num;
					next.log = log;
					next.setContent('loseSkillSlot');
					return next;
				},
				replaceSkillSlot(index, skill) {
					let next = game.createEvent('replaceSkillSlot');
					next.player = this;
					next.index = index;
					next.skill = skill;
					next.setContent('replaceSkillSlot');
					return next;
				},
				dqzw_gainBuffs(buffs, reverse) {
					let next = game.createEvent('dqzw_gainBuffs');
					next.player = this;
					next.list = buffs;
					next.reverse = reverse;
					next.setContent('dqzw_gainBuffs');
					return next;
				},
				dqzw_loseBuffs(buffs, reverse) {
					let next = game.createEvent('dqzw_loseBuffs');
					next.player = this;
					next.list = buffs;
					next.reverse = reverse;
					next.setContent('dqzw_loseBuffs');
					return next;
				},
				dqzw_toBackpack(item, position) {
					let next = game.createEvent('dqzw_toBackpack');
					next.player = this;
					next.position = position;
					next.list = Array.isArray(item) ? item : [item];
					next.setContent('dqzw_toBackpack');
					return next;
				},
				dqzw_loseBackpackItem(item, position) {
					let next = game.createEvent('dqzw_loseBackpackItem');
					next.player = this;
					next.position = position;
					next.list = Array.isArray(item) ? item : [item];
					next.setContent('dqzw_loseBackpackItem');
					return next;
				},
				dqzw_changeGold(num, log, min = 0) {
					let next = game.createEvent('dqzw_changeGlod');
					next.player = this;
					next.num = num;
					next.min = min;
					next.log = log;
					next.setContent('dqzw_changeGold');
					return next;
				},
				dqzw_chooseReward(list, select, ...args) {
					let next = game.createEvent('dqzw_chooseReward');
					next.player = this;
					next.list =
						list ||
						(() => {
							let num = this.dqzw_countGainableReward();
							list = [];
							while (num-- > 0)
								list.push(
									game
										.dqzw_boss_getRewardList(this, list)
										.filter(item => item[0])
										.randomGet()
								);
							return list;
						})();
					next.num = select || [1, this.dqzw_countSelectableReward()];
					next.setContent('dqzw_chooseReward');
					next.args = args;
					next._args = arguments;
					return next;
				},
				getSkillSlot() {
					return this.dqzw_skill_slot || [];
				},
				countSkillSlot(all) {
					return this.getSkillSlot().filter(name => all || name == 'dqzw_skill_slot').length;
				},
				findSkillSlot(name) {
					return this.getSkillSlot().indexOf('dqzw_skill_slot');
				},
				dqzw_getBuffs() {
					return this.dqzw_buffs ? Object.keys(this.dqzw_buffs).map(id => this.dqzw_buffs[id]) : [];
				},
				dqzw_getDeBuffs() {
					return this.dqzw_debuffs ? Object.keys(this.dqzw_debuffs).map(id => this.dqzw_debuffs[id]) : [];
				},
				dqzw_hasBuff(key) {
					return this.dqzw_getBuffs().some((item, i, arr) => (typeof key == 'function' ? key(item, i, arr) : item.id == key));
				},
				dqzw_hasDeBuff(key) {
					return this.dqzw_getDeBuffs().some((item, i, arr) => (typeof key == 'function' ? key(item, i, arr) : item.id == key));
				},
				dqzw_findBuff(key) {
					return this.dqzw_getBuffs().find((item, i, arr) => (typeof key == 'function' ? key(item, i, arr) : item.id == key));
				},
				dqzw_findDeBuff(key) {
					return this.dqzw_getDeBuffs().find((item, i, arr) => (typeof key == 'function' ? key(item, i, arr) : item.id == key));
				},
				dqzw_countBuffs(key) {
					return this.dqzw_getBuffs().filter((item, i, arr) => (typeof key == 'function' ? key(item, i, arr) : key ? item.id == key : true)).length;
				},
				dqzw_countDeBuffs() {
					return this.dqzw_getDeBuffs().filter((item, i, arr) => (typeof key == 'function' ? key(item, i, arr) : key ? item.id == key : true)).length;
				},
				dqzw_getGainableBuffs(filter, level, list = lib.dqzw_buff_list, noprobability, nomod) {
					return list.filter((item, index, list) => {
						if (typeof item.level != 'number' || isNaN(item.level)) item.level = 0;
						if ((level !== undefined && item.level != level) || (filter && !filter(item, this, index, list))) return false;
						let probability = lib.dqzw_buff_level[item.level].probability || 0,
							random = Number(('' + Math.random()).replace(/([0-9]+.[0-9]{4})[0-9]*/, '$1')) * 100;
						if (!noprobability && item.probability) {
							if (typeof item.probability == 'function') probability = item.probability(probability, this, item, index, random, list, filter);
							else probability = item.probability;
						}
						if (!noprobability && !nomod) {
							let mod = game.checkMod(probability, this, item, filter, list, index, 'unchanged', 'dqzw_buffGainProbability', this);
							if (mod != 'unchanged') probability = mod;
						}
						if (item.filter && !item.filter(this, item, probability, random, index, filter, nomod)) return false;
						if (random <= probability || noprobability) return true;
					});
				},
				dqzw_getBackpackItem(key) {
					let backpack = this.dqzw_backpack || {};
					if (key) return backpack[key] || [];
					return backpack;
				},
				dqzw_getRestrictedSkills(skills) {
					let stockSkills = this.getStockSkills(true, true, true),
						allSkills =
							lib.dqzw_gainable_skills ||
							Object.keys(lib.characterPack)
								.map(pack => Object.keys(lib.characterPack[pack]).map(name => lib.characterPack[pack][name][3] || []))
								.flat(2),
						derivation = game
							.expandSkills(this.getSkills(true, false, false))
							.filter(skill => {
								return lib.translate[skill];
							})
							.map(skill => {
								let info = get.info(skill),
									list = [],
									reg = /\.(addSkill|addSkillLog)\((\[|'|")?('|")([^])*?\3(\]|"|')?\)/g,
									getSkills = list => {
										return list
											.map(list => {
												let arr1 = list.split('"'),
													arr2 = list.split("'"),
													skills = [];
												if (arr1.length == 3) skills.push(arr1[1]);
												else for (var i = 1; i < arr1.length; i += arr1[i + 1] == ',' ? 2 : 1) skills.push(arr1[i]);
												if (arr2.length == 3) skills.push(arr2[1]);
												else for (var i = 1; i < arr2.length; i += arr2[i + 1] == ',' ? 2 : 1) skills.push(arr2[i]);
												return skills;
											})
											.flat();
									};
								if (info.derivation) return info.derivation;
								if (info.contentBefore) list.push(getSkills(info.contentBefore.toString().match(reg) || []));
								if (info.content) list.push(getSkills(info.content.toString().match(reg) || []));
								if (info.contentAfter) list.push(getSkills(info.contentAfter.toString().match(reg) || []));
								return list;
							})
							.flat();
					return skills.filter(skill => {
						let info = get.info(skill);
						if (!info) return false;
						return (
							(!stockSkills.includes(skill) &&
								//&& !this.hasSkill(skill)
								!this.tempSkills[skill] &&
								allSkills.includes(skill) &&
								!derivation.includes(skill) &&
								!info.notGainableSkill &&
								!info.notLimitableSkill) ||
							info.dqzw_limitable
						);
					});
				},
				dqzw_getRecastableSkills(filter, back) {
					return this.getStockSkills(true, true, true)
						.filter(skill => back || this.hasSkill(skill, void 0, void 0, void 0, false))
						.concat(this.getSkillSlot().filter(slot => slot != 'dqzw_skill_slot'))
						.filter(skill => (filter ? filter(skill, this, back) : true));
				},
				dqzw_countGainableReward(num = 3) {
					let config = _status.dqzw_mode_config;
					if (config && config.countReward) num = config.countReward;
					let mod = game.checkMod(this, num, 'dqzw_countGainableReward', this);
					if (mod) num = mod;
					return num;
				},
				dqzw_countSelectableReward(num = 1) {
					let config = _status.dqzw_mode_config;
					if (config && config.countReward) num = config.countSelectReward;
					let mod = game.checkMod(this, num, 'dqzw_countSelectableReward', this);
					if (mod) num = mod;
					return num;
				},
				dqzw_countShopRefresh(num = 0) {
					let config = _status.dqzw_mode_config;
					if (config && config.countShopRefresh) num = config.countShopRefresh;
					let mod = game.checkMod(this, num, 'dqzw_countShopRefresh', this);
					if (mod) num = mod;
					return num;
				},
				dqzw_countShopCommodity(num = 0, type) {
					let config = _status.dqzw_mode_config;
					if (config && config.CountShopCommodity) num = config.countShopCommodity;
					let mod = game.checkMod(this, type, num, 'dqzw_countShopCommodity', this);
					if (mod) num = mod;
					return num;
				},
				dqzw_shopRefreshCallback(list = []) {
					let config = _status.dqzw_mode_config;
					if (config && config.shopRefreshCallback) list = config.dqzw_shopRefreshCallback;
					let mod = game.checkMod(this, list, 'dqzw_shopRefreshCallback', this);
					if (mod) list = mod;
					return list;
				},
				dqzw_shopRefreshFilter(list = []) {
					let config = _status.dqzw_mode_config;
					if (config && config.shopRefreshCallback) list = config.dqzw_shopRefreshFilter;
					let mod = game.checkMod(this, list, 'dqzw_shopRefreshFilter', this);
					if (mod) list = mod;
					return list;
				},
				dqzw_shopPriceIncrease(num, price, increase, item, ...args) {
					let config = _status.dqzw_mode_config;
					if (config && config.dqzw_shopPriceIncrease) num = price * (config.dqzw_shopPriceIncrease - 1);
					num = game.checkMod(num, this, price, increase, item, ...(args || []), num, 'dqzw_shopPriceIncreaseBase', this);
					num = game.checkMod(num, this, price, increase, item, ...(args || []), num, 'dqzw_shopPriceIncrease', this);
					num = game.checkMod(num, this, price, increase, item, ...(args || []), num, 'dqzw_shopPriceIncreaseFinal', this);
					return num;
				},
				dqzw_shopCommodityPrice(num, item, ...args) {
					let config = _status.dqzw_mode_config;
					if (config && config.dqzw_shopCommodityPrice) num = config.dqzw_shopCommodityPrice;
					num = game.checkMod(num, this, item, ...(args || []), num, 'dqzw_shopCommodityPriceBase', this);
					num = game.checkMod(num, this, item, ...(args || []), num, 'dqzw_shopCommodityPrice', this);
					num = game.checkMod(num, this, item, ...(args || []), num, 'dqzw_shopCommodityPriceFinal', this);
					return num;
				},
				dqzw_shopCommodityFinalPrice(num, item, ...args) {
					let config = _status.dqzw_mode_config;
					if (config && config.dqzw_shopCommodityPrice) num = config.dqzw_shopCommodityPrice;
					num = game.checkMod(num, this, item, ...(args || []), num, 'dqzw_shopCommodityFinalPriceBase', this);
					num = game.checkMod(num, this, item, ...(args || []), num, 'dqzw_shopCommodityFinalPrice', this);
					num = game.checkMod(num, this, item, ...(args || []), num, 'dqzw_shopCommodityFinalPriceFinish', this);
					return num;
				},
				dqzw_boss_enterShop(name, players = [this], ai) {
					let next = game.createEvent('dqzw_boss_enterShop');
					next.player = this;
					next.players = players;
					next.ai = ai || function () { };
					next.map = {};
					if (typeof name == 'string')
						players.forEach(player => {
							next.map[player.playerid] = name;
						});
					else next.map = name;
					next.setContent('dqzw_boss_enterShop');
					return next;
				},
				dieAfter() {
					if (game.boss_checkResult && game.boss_checkResult(this) === false) return;
					let config = _status.dqzw_mode_config;
					if (config.dieAfter) config.dieAfter.call(this, ...arguments);
				},
			},
			content: {
				chooseSkillObtain() {
					'step 0';
					if (event.isOnline()) event.send();
					else {
						if (player.isUnderControl()) game.swapPlayerAuto(player);
						let skills = event.skills;
						if (!skills || !skills.length) return;
						if (typeof event.skills == 'function') skills = event.skills(player);
						skills = skills.filter(
							event.filter ||
							(skill => {
								return event.remove ? true : !player.hasSkill(skill);
							})
						);
						if (!skills || !skills.length) return;
						let dialog = ui.create.dialog(event.prompt || (event.remove === true ? '请选择要失去的技能' : '选择一个技能获得之'), 'forcebutton'),
							table = ui.create.div(
								{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexWrap: 'wrap',
									position: 'relative',
									width: '100%',
									height: (document.body.offsetHeight / 100) * 60 + 'px',
									overflow: 'auto',
								},
								dialog.content
							);
						Object.assign(dialog.style, {
							left: '10%',
							width: (document.body.offsetWidth / 100) * 80 + 'px',
							minHeight: (document.body.offsetHeight / 100) * 60 + 'px',
						});
						if (player != game.me) dialog.style.display = 'none';
						lib.setScroll(table);
						for (let skill of skills) {
							if (!lib.translate[skill] || !lib.translate[skill + '_info']) continue;
							let info = get.info(skill),
								container = ui.create.div('.pointerdiv.shadowed', table, {
									position: 'relative',
									width: '16%',
									height: (document.body.offsetHeight / 100) * 36 + 'px',
									margin: '2%',
									overflow: 'auto',
								}),
								name = ui.create.div(
									'',
									container,
									{
										position: 'relative',
										width: '96%',
										margin: '2%',
										fontSize: '120%',
									},
									`
					                        ${info && info.nobracket ? '' : '「'}	
					                        ${get.translation(skill)}	
					                        ${info && info.nobracket ? '' : '」'}	
					                    `
								);
							info = ui.create.div(
								'.text',
								container,
								{
									position: 'relative',
									width: '96%',
								},
								`
					                        ${get.translation(skill + '_info')}    
					                    `
							);
							container.link = skill;
							dialog.buttons.push(container);
							for (var i of Object.keys(lib.element.button)) container[i] = lib.element.button[i];
							container.addEventListener(
								lib.config.touchscreen ? 'touchend' : 'click',
								// 有人点不了,这里改一下(
								function () {
									if (_status.draggingtouchdialog || _status.dragged || !(_status.event && _status.event.isMine()) || !this.classList.contains('selectable')) return;
									if (this.classList.contains('selected')) {
										ui.selected.buttons.remove(this);
										this.classList.remove('selected');
										if (_status.multitarget || _status.event.complexSelect) {
											game.uncheck();
											game.check();
										}
									} else {
										this.classList.add('selected');
										ui.selected.buttons.add(this);
									}
									game.check();
								}
							);
						}
						let next = player.chooseButton(...event.args, dialog);
						next.ai = event.ai || (event.remove === true ? button => -get.skillRank(button.link, 'inout') : button => get.skillRank(button.link, 'inout'));
					}
					('step 1');
					event.result = result;
					if (result && result.links && event.defaultout !== false) {
						if (event.remove == true) {
							if (event.popup !== false) player.popup(result.links, 'fire');
							player.removeSkill(result.links, true);
							if (event.log !== false) game.log(player, '失去了技能', '#y【' + get.translation(result.links) + '】');
						} else player.addSkillLog(result.links);
					}
					if (event.callback) event.callback(event.player, event.result);
				},
				gainSkillSlot() {
					if (!player.dqzw_skill_slot) player.dqzw_skill_slot = [];
					let num = event.num;
					player.dqzw_skill_slot.push(...new Array(num).fill('dqzw_skill_slot'));
					if (event.log !== false) game.log(player, '获得了', get.cnNumber(num), '个空', '#g技能槽');
					game.broadcastAll(
						(player, list) => {
							player.dqzw_skill_slot = list;
						},
						player,
						player.dqzw_skill_slot
					);
				},
				loseSkillSlot() {
					if (!player.dqzw_skill_slot) player.dqzw_skill_slot = [];
					let num = event.num;
					while (num-- > 0) player.dqzw_skill_slot.remove(player.getSkillSlot()[player.findSkillSlot()]);
					if (event.log !== false) game.log(player, '失去了', get.cnNumber(num), '个空', '#g技能槽');
					game.broadcastAll(
						(player, list) => {
							player.dqzw_skill_slot = list;
						},
						player,
						player.dqzw_skill_slot
					);
				},
				replaceSkillSlot() {
					if (!player.dqzw_skill_slot) player.dqzw_skill_slot = [];
					let index = typeof event.index == 'number' ? event.index : player.getSkillSlot().indexOf(event.index),
						to = event.skill;
					if (index != -1 && player.getSkillSlot()[index]) player.getSkillSlot()[index] = to;
					else event.bool = false;
					game.broadcastAll(
						(player, list) => {
							player.dqzw_skill_slot = list;
						},
						player,
						player.dqzw_skill_slot
					);
				},
				dqzw_gainBuffs() {
					if (!player.dqzw_buffs) player.dqzw_buffs = {};
					if (!player.dqzw_debuffs) player.dqzw_debuffs = {};
					if (!_status.dqzw_globalBuffs) _status.dqzw_globalBuffs = [];
					if (!_status.dqzw_globalDeBuffs) _status.dqzw_globalDeBuffs = [];
					let reverse = (event.reverse && 'de') || '',
						position = 'dqzw_' + reverse + 'buffs';
					if (!event.list) event.list = [];
					for (let buff of event.list) {
						let skill = buff.skill,
							map = [
								[val => val == 'inherit', () => (skill = buff.id)],
								[val => typeof val == 'function', () => (skill = skill(buff.id, event, buff))],
							];
						event.current = buff;
						if (!buff.nobuff) player[position][buff.id] = buff;
						if (skill !== false) {
							let result = map.find(filter => filter[0](skill));
							if (result) result[1]();
							else skill = skill || buff.id;
							if (typeof buff.init == 'function') eval(`(${buff.init})();`);
							let info = get.info(skill);
							if (info) {
								if (buff.global !== false) {
									if (buff.isGlobal) _status['dqzw_global' + (event.reverse ? 'De' : '') + 'Buffs'].add(buff.id);
									game.addGlobalSkill(skill);
								} else if (!buff.noAdd) player.addSkill(skill);
							}
						}
						event.trigger('gain' + buff.id);
						game.broadcastAll(
							(player, position, buff) => {
								if (player.node && player.node.dqzw_boss_buffs && ![...player.node.dqzw_boss_buffs.children].find(node => node.info && node.info.id == buff.id)) {
									let node = game.dqzw_createBuff(
										{
											width: '23%',
											height: '48%',
										},
										[player.node.dqzw_boss_buffs],
										buff
									);
									node.classList.add('dqzw-boss-filter-shadow');
									node.style.setProperty('--color', 'rgba(0, 0, 0, .8)');
								}
							},
							player,
							position,
							buff
						);
					}
					game.broadcast(
						(player, position, buffs) => {
							player[position] = buffs;
						},
						player,
						position,
						player[position]
					);
				},
				dqzw_loseBuffs() {
					'step 0';
					if (!player.dqzw_buffs) player.dqzw_buffs = {};
					if (!player.dqzw_debuffs) player.dqzw_debuffs = {};
					if (!_status.dqzw_globalBuffs) _status.dqzw_globalBuffs = [];
					if (!_status.dqzw_globalDeBuffs) _status.dqzw_globalDeBuffs = [];
					let reverse = (event.reverse && 'de') || '';
					for (let buff of event.list) {
						let skill = buff.skill,
							position = 'dqzw_' + reverse + 'buffs',
							map = [
								[val => val == 'inherit', () => (skill = buff.id)],
								[val => typeof val == 'function', () => (skill = skill(buff.id, event))],
							];
						event.current = buff;
						delete player[position][buff.id];
						if (skill !== false) {
							let result = map.find(filter => filter[0](skill));
							if (result) result[1]();
							else skill = skill || buff.id;
							if (typeof buff.onremove == 'function') eval(`(${buff.onremove}());`);
							let info = get.info(skill);
							if (info) {
								if (!game.hasPlayer2(player => player.dqzw_hasBuff(buff.id), true)) {
									_status['dqzw_global' + (event.reverse ? 'De' : '') + 'Buffs'].remove(buff.id);
									game.removeGlobalSkill(skill);
								}
								player.removeSkill(skill, true);
							}
						}
						event.trigger('lose' + buff.id);
						game.broadcastAll(
							(player, position, buff) => {
								if (player.node && player.node.dqzw_boss_buffs) ([...player.node.dqzw_boss_buffs.children].find(node => node.info && node.info.id == buff.id && node.delete) || { delete: () => 0 }).delete();
							},
							player,
							position,
							buff
						);
					}
					game.broadcast(
						(player, position, buffs) => {
							player[position] = buffs;
						},
						player,
						position,
						player[position]
					);
				},
				chooseSkillSlotReplace() {
					'step 0';
					let next = player.chooseToMove();
					next.set('prompt', event.prompt || '请选择要替换的技能');
					next.set('filterMove', function (_from, to) {
						let evt = _status.event;
						(filter = evt._filter), (buttons = evt.buttonss);
						buttons.forEach(buttons =>
							[...buttons.children].forEach(button => {
								if (button._customintro) return;
								button._customintro = dialog => {
									dialog.addText(get.skillInfoTranslation(button.link.skill, _status.event.player));
								};
								lib.setIntro(button);
							})
						);
						return evt.filter ? evt.filter.apply(this, arguments) : typeof to != 'number';
					});
					next.set('_filter', event.filter);
					next.set('list', [
						[event.prompt2 || '当前技能', [(event.list || player.getSkillSlot()).map(skill => [{ skill, index: 0, type: 'slot' }, get.translation(skill)]), 'tdnodes']],
						[event.prompt3 || '放入背包', [event.skills.map(skill => [{ skill, index: 1, type: 'lose' }, get.translation(skill)]), 'tdnodes']],
					]);
					('step 1');
					event.result = result;
				},
				dqzw_toBackpack() {
					if (!player.dqzw_backpack) player.dqzw_backpack = {};
					let backpack = player.dqzw_backpack,
						position = event.position,
						list = event.list;
					if (!backpack[position]) backpack[position] = [];
					backpack[position].add(...list);
					game.broadcast(
						(player, item) => {
							player.dqzw_backpack = item;
						},
						player,
						backpack
					);
				},
				dqzw_loseBackpackItem() {
					if (!player.dqzw_backpack) player.dqzw_backpack = {};
					let backpack = player.dqzw_backpack,
						position = event.position,
						list = event.list;
					if (!list) delete backpack[position];
					else {
						if (!backpack[position]) backpack[position] = [];
						backpack[position].remove(...list);
					}
					game.broadcast(
						(player, item) => {
							player.dqzw_backpack = item;
						},
						player,
						backpack
					);
				},
				dqzw_changeGold() {
					player.dqzw_boss_gold = Math.floor(Math.max(event.min, (player.dqzw_boss_gold || 0) + event.num));
					if (event.log !== false) game.log(player, `#y${event.num > 0 ? '获得了' : '失去了'}`, '#g' + Math.abs(event.num), '#b金币');
					game.broadcast(
						(player, num) => {
							player.dqzw_boss_gold = num;
						},
						player,
						player.dqzw_boss_gold
					);
				},
				dqzw_chooseReward() {
					'step 0';
					event._num = parseInt(lib.configOL.choose_timeout);
					game.broadcastAll(() => {
						lib.configOL.choose_timeout = 20;
					});
					if (player.isOnline()) event.send();
					else {
						if (player.isUnderControl()) game.swapPlayerAuto(player);
						let dialog = ui.create.dialog('选择奖励');
						game.dqzw_choice_initCardPile();
						event.list.forEach(item => {
							if (item[0]) {
								let card = game.dqzw_createChoiceCard(item[1].image, item[1].noclick, item[1].back);
								card.link = item[1];
								if (item[1].init) item[1].init(card, player);
								dialog.buttons.push(card);
							}
						});
						dialog.add('');
						dialog.style.setProperty('left', '6%', 'important');
						dialog.style.setProperty('top', '5%', 'important');
						dialog.style.setProperty('min-width', (document.body.offsetWidth / 100) * 80 + 'px', 'important');
						dialog.style.setProperty('min-height', (document.body.offsetHeight / 100) * 60 + 'px', 'important');
						game.dqzw_genius_draw(dialog, [...ui.dqzw_choice_cardPile.children]);
						event.dialog = dialog;
						if (event.setDialog) event.setDialog(dialog, player, event);
						(event.setFunc || (() => { }))(
							player.chooseButton(dialog, ...(event.args || []), event.num).set('ai', card => {
								let player = get.player();
								return get.effect(player, card, player, player);
							}),
							event
						);
					}
					('step 1');
					game.broadcastAll(num => {
						lib.configOL.choose_timeout = num || 40;
					}, event._num);
					event.result = result;
					if (event.result.links && event.result.links.length && event.defaultout !== false)
						event.result.links.forEach(item => {
							if (typeof item.click == 'function')
								event.insert(item.click, {
									player,
									_result: event.result,
									info: item,
								});
						});
				},
				dqzw_boss_enterShop() {
					'step 0';
					event.over = function () {
						if (event.control) event.control.close();
						game.resume();
						_status.imchoosing = false;
						event.choosing = false;
					};
					if (player.isOnline()) event.send();
					else {
						game.dqzw_createShopDialog(event.players, event.map, event.ai);
						event.choosing = true;
						event.control = ui.create.control('ok', event.over);
						if (_status.connectMode) game.countChoose();
						game.pause();
						if (event.log !== false) game.log(...(event.log || [player, '#g进入了商店']));
					}
					('step 1');
					if (event.closeDialog !== false && event.dialogs) Object.keys(event.dialogs).forEach(id => event.dialogs[id].close());
					if (event.defaultout !== false && event.result) {
						let map = {};
						Object.keys(event.result).forEach(id => {
							let result = event.result[id],
								player = (lib.playerOL || game.playerMap)[id] || (event.player);
							if (!map[id])
								map[id] = {
									cards: [],
									buffs: [],
									skills: [],
									gold: 0,
								};
							if (result.cost) map[id].gold += result.cost;
							result.purchased.forEach(info => {
								if (info.result) info.result(player, info, false, map[id]);
							});
						});
						event._purchasedMap = map;
						Object.keys(map).forEach(id => {
							let result = map[id],
								player = (lib.playerOL || game.playerMap)[id] || (event.player);
							if (result.cards.length) player.gain(result.cards, 'gain2');
							if (result.skills.length) player.addSkill(result.skills);
							if (result.buffs) player.dqzw_gainBuffs(result.buffs);
							if (result.gold) player.dqzw_changeGold(-result.gold);
						});
					}
					player.getHistory('custom').push(event);
				},
				dqzw_replaceHandcards() {
					'step 0';
					if (event.players.includes(player || game.me)) {
						event.player = player || game.me;
						if (!event.isMine()) {
							over();
							return;
						}
						if ((player || game.me).isUnderControl()) game.swapPlayerAuto(player);
						event.cards = (player || game.me).getCards('h');
						event.dialog = ui.create.dialog(getText(undefined, event));
						game.pause();
						event.choosing = true;
						event.replacenum = 0;
						event.control = ui.create.control('ok', 'cancel2', function (link) {
							if (game.online && _status.cannotReplace) return;
							if (link == 'cancel2') over();
							else {
								if (!--event.num) over();
								event.replacenum++;
								_status.cannotReplace = true;
								if (game.online) game.send('exec', event.callback || callback, event, event.player || game.me, event.sendback || sendback);
								else (event.callback || callback)(event, event.player || game.me, event.sendback || sendback);
							}
						});
						if (_status.connectMode) game.countChoose();
						event.switchToAuto = event.auto || auto;
						event.getText = getText;
						function getText(str = '', event) {
							let score = '';
							if (event.cards && event.cards.reduce)
								score =
									'<br>手牌评分:' +
									Math.min(
										Math.floor(
											event.cards.reduce((pre, cur) => {
												return pre + get.value(cur, event.player || game.me);
											}, 0) * 3.6
										),
										100
									);
							return '是否使用手气卡？' + (event.num == Infinity ? '' : '(剩余' + event.num + '张)') + score + str;
						}
						function callback(event, player, sendback) {
							if (!player) return;
							let hs = player.getCards('h');
							game.broadcastAll(
								function (player, hs) {
									game.addVideo('lose', player, [get.cardsInfo(hs), [], [], []]);
									for (let card of hs) card.discard(false);
								},
								player,
								hs
							);
							let cards = get.cards(hs.length);
							player._start_cards = cards || [];
							player.directgain(cards);
							if (sendback) sendback(cards);
						}
						function over() {
							if (event.dialog) event.dialog.close();
							if (event.control) event.control.close();
							game.resume();
							_status.imchoosing = false;
							event.choosing = false;
							if (event.over) event.over();
						}
						function auto() {
							over();
						}
						function sendback(cards, event) {
							event = event || _status.event || { player: game.me };
							event.cards = cards || [];
							if (event.getText && event.dialog && event.dialog.content && cards) event.dialog.content.children[0].innerHTML = event.getText(undefined, event);
						}
					}
					('step 1');
					event.result = {
						bool: !!event.replacenum,
						num: event.replacenum,
					};
					event.resume();
				},
				dqzw_replaceHandcardsOL() {
					'step 0';
					function send(num, callback, over) {
						let next = game.createEvent('replaceHandcards');
						next.player = game.me;
						next.players = [game.me];
						next.callback = callback;
						next.num = num;
						next.over = over;
						next.setContent('dqzw_replaceHandcards');
						if (game.online) game.resume();
					}
					function sendback(event, player, callback) {
						if (event && player) {
							let hs = player.getCards('h');
							game.broadcastAll(
								function (player, hs) {
									game.addVideo('lose', player, [get.cardsInfo(hs), [], [], []]);
									for (let card of hs) card.discard(false);
								},
								player,
								hs
							);
							let cards = get.cards(hs.length);
							player._start_cards = cards || [];
							player.directgain(cards);
							if (player.isOnline2())
								player.send(
									function (cards, callback) {
										_status.cannotReplace = false;
										if (callback) callback(cards);
									},
									cards,
									callback
								);
						}
					}
					for (let player of event.players) {
						if (player.isOnline()) {
							event.withol = true;
							player.send(send, event.num, sendback, event.over);
							player.wait();
						} else if (player == game.me) {
							event.withme = true;
							player.wait();
							game.dqzw_replaceHandcards(game.me, false).set('num', event.num);
							player.showTimer(parseInt(lib.configOL.choose_timeout) * 1000);
						}
					}
					('step 1');
					if (event.withme) game.me.unwait(result);
					('step 2');
					if (event.withol && !event.resultOL) game.pause();
				},
			},
		},
		game: {
			// 联机选将
			chooseCharacterOL() {
				let next = game.createEvent('chooseCharacter', false);
				next.setContent(function () {
					'step 0';
					game.initIdentity('f');
					let list = event.characterList || get.charactersOL(),
						// 候选武将数
						num = get.configOL((_status.dqzw_boss_mode || '') + '_choose_character_number', 'dqzw_guihuaxishuang') || get.configOL('choose_character_number', 'dqzw_guihuaxishuang'),
						double = get.configOL((_status.dqzw_boss_mode || '') + '_double_character', 'dqzw_guihuaxishuang') || get.configOL('double_character', 'dqzw_guihuaxishuang');
					_status.characterlist = list.slice(0);
					event.list = list.slice(0);
					list = {};
					for (let player of game.players) list[player.playerid] = event.list.randomRemove(Math.max(2, num || (6 - game.players.length) * 2));
					let id = lib.status.videoId++;
					game.broadcastAll(function () {
						// 方便测试
						window.ui = ui;
						window.lib = lib;
						window._status = _status;
						window.game = game;
						window.get = get;
					});
					game.dqzw_createCharacterDialog(id, list, game.players);
					event.videoId = id;
					event.targets = game.players.slice(0);
					_status._choose_players = [];
					event.ai = function (button) {
						let info = lib.character[button.link];
						if (!info) return 1;
						let num = get.infoHp(info[2]) / 2 + get.infoHujia(info[2]);
						switch (game.getRarity(button.link)) {
							case 'legend':
								return 10 + num;
							case 'epic':
								return 8 + num;
							case 'rare':
								return 6 + num;
							case 'common':
								return 4 + num;
							case 'junk':
								return 2 + num;
						}
						return 1;
					};
					event._double_choose = double;
					event.callback = function (player, result) {
						if (game.online) game.send('exec', init, player, result);
						else init(player, result.links);
						function init(player, name) {
							game.broadcastAll(
								function (player, result) {
									let name = result.links || result;
									if (name.length) player.init(...name);
									if (ui.dialog && ui.dialog.table) {
										for (let list of ui.dialog.table.characterList) {
											if (list.ownerId == player.playerid) {
												for (let character of list.characterList.children) {
													if (name.includes(character.link) && !character.classList.contains('selected')) character.classList.add('target');
												}
												if (list.playerInfo) list.playerInfo.textContent += '(已选定)';
											}
										}
									}
									if (ui.dialog && ui.dialog._callback) ui.dialog._callback(ui.dialog, player, result, true);
								},
								player,
								name
							);
						}
					};
					event.clickButton = function (that) {
						if ((_status.event.isMine && !_status.event.isMine()) || !that || !that.classList || !that.classList.contains('selectable')) return;
						let id = _status.event.dialogId || _status.event.dialog,
							double = _status.event._double_choose,
							buttons = ui.selected.buttons;
						_status.clicked = true;
						if (that.classList.contains('selected')) {
							buttons.remove(that);
							that.classList.remove('selected');
							let links = buttons.map(button => button.link);
							if (game.online) game.send('exec', update, game.onlineID, links, that.link);
							else update(game.me.playerid, links, that.link);
							function update(playerid, links, link) {
								if (lib.playerOL[playerid]) {
									game.broadcastAll(
										function (player, names, name) {
											if (!ui.dialog) return;
											let avatar = ui.dialog._avatar && ui.dialog._avatar[player.playerid];
											if (avatar) {
												if (names.length) {
													avatar.classList.remove('fullskin2');
													avatar.node.avatar2.hide();
													avatar.node.name2.hide();
													avatar.node.avatar.show();
													avatar.node.avatar.setBackground(names[0], 'character');
													avatar.node.name.innerHTML = get.slimName(names[0]);
												} else {
													avatar.node.avatar.style.backgroundImage = '';
													avatar.node.name.innerHTML = '';
												}
											}
											if (ui.dialog && ui.dialog._callback) ui.dialog._callback(ui.dialog, player, names.length && names);
											if (player == game.me) return;
											let button = find(name);
											if (button) button.classList.remove('target');
											function find(name) {
												return ui.dialog.buttons.find(button => button.link == name);
											}
										},
										lib.playerOL[playerid],
										links,
										link
									);
								}
							}
						} else {
							let pre = buttons[0] && buttons[0].link,
								remove;
							if (!double) {
								buttons.forEach(button => button.classList.remove('selected'));
								ui.selected.buttons.length = 0;
								remove = true;
							} else if (ui.selected.buttons.length > 1) {
								buttons[0].classList.remove('selected');
								ui.selected.buttons.shift();
								remove = true;
							}
							that.classList.add('selected');
							buttons.push(that);
							let links = buttons.map(button => button.link);
							if (game.online) game.send('exec', add, game.onlineID, links, pre, remove);
							else add(game.me.playerid, links, pre, remove);
						}
						function add(playerid, name, pre, remove) {
							if (lib.playerOL[playerid]) {
								game.broadcastAll(
									function (player, names, pre, remove) {
										if (!ui.dialog) return;
										let avatar = ui.dialog._avatar && ui.dialog._avatar[player.playerid];
										if (avatar) {
											if (names.length > 1) {
												avatar.classList.add('fullskin2');
												avatar.node.avatar2.setBackground(names[1], 'character');
												avatar.node.avatar2.show();
												avatar.node.name2.show();
												avatar.node.name2.innerHTML = get.slimName(names[1]);
											} else {
												avatar.classList.remove('fullskin2');
												avatar.node.avatar2.hide();
											}
											avatar.node.avatar.show();
											avatar.node.avatar.setBackground(names[0], 'character');
											avatar.node.name.innerHTML = get.slimName(names[0]);
										}
										if (ui.dialog && ui.dialog._callback) ui.dialog._callback(ui.dialog, player, names);
										if (player == game.me) return;
										let button = find(names[names.length - 1]),
											prebutton = find(pre);
										if (button) button.classList.add('target');
										if (remove && prebutton) prebutton.classList.remove('target');
										function find(name) {
											return ui.dialog.buttons.find(button => button.link == name);
										}
									},
									lib.playerOL[playerid],
									name,
									pre,
									remove
								);
							}
						}
						game.check();
					};
					event.targets.slice(0).forEach((player, index) => {
						player.wait();
						if (player.isOnline()) {
							_status._choose_players.push(player);
							player.send(
								function (id, callback, ai, click, double) {
									let next = game.me.chooseButton(true);
									next.complexSelect = true;
									next.dialog = id;
									next.callback = callback;
									next.ai = ai;
									next.selectButton = () => {
										let evt = _status.event;
										return evt && evt.isMine() ? (evt._double_choose ? [1, 3] : [1, 2]) : 1;
									};
									next.custom = {
										add: {},
										replace: {
											window() { },
											button: click,
										},
									};
									next.insert(
										function () {
											let dialog = get.idDialog(event.videoId);
											game.send(
												'exec',
												(player, id) => {
													let players = _status._choose_players,
														dialog = get.idDialog(id);
													player._choosed = true;
													if (players && players.every(player => player._choosed) && dialog && dialog._open && !dialog._opened) dialog._open();
												},
												player,
												event.videoId
											);
										},
										{ player: game.me, videoId: id }
									);
									if (double) next._double_choose = true;
									next.dialogId = id;
									game.resume();
								},
								id,
								event.callback,
								event.ai,
								event.clickButton,
								event._double_choose
							);
							event.targets.remove(player);
						} else if (player == game.me) {
							event.last = player;
							event.targets.remove(player);
						}
					});
					event.dialog = get.idDialog(event.videoId);
					let players = _status._choose_players,
						dialog = event.dialog;
					if (dialog && dialog._open && !dialog._opened && (!players || !players.length)) dialog._open();
					('step 1');
					if (targets.length) {
						let current = event.targets.shift();
						let next = current.chooseButton(true);
						next.complexSelect = true;
						next.dialog = event.videoId;
						next.dialogId = event.videoId;
						next.callback = event.callback;
						next.ai = event.ai;
						next.filterButton = button => {
							return button.ownerId == _status.event.player.playerid;
						};
						if (event._double_choose) {
							next._double_choose = true;
							next.selectButton = [1, 2];
						}
						event.target = current;
					} else event.goto(3);
					('step 2');
					target.unwait(result);
					event.goto(1);
					('step 3');
					if (event.last) {
						let next = game.me.chooseButton(true);
						next.complexSelect = true;
						next.dialog = event.videoId;
						next.dialogId = event.videoId;
						next.callback = event.callback;
						next.selectButton = () => (_status.event && _status.event.isMine() ? [1, 2] : 1);
						next.ai = event.ai;
						if (event._double_choose) {
							next._double_choose = true;
							next.selectButton = () => (_status.event && _status.event.isMine() ? [1, 3] : 1);
						}
						next.custom = {
							add: {},
							replace: {
								window() { },
								button: event.clickButton,
							},
						};
					} else event.goto(5);
					('step 4');
					game.me.unwait(result);
					('step 5');
					if (!event.resultOL) {
						game.pause();
					}
					('step 6');
					event.result = event.resultOL;
					('step 7');
					for (let player of game.players) {
						_status.characterlist.removeArray([player.name, player.name1, player.name2]);
						game.broadcastAll(player => {
							player.show();
						}, player);
					}
					if (event.dialog && event.dialog._over) event.dialog._over(event);
					game.broadcastAll('closeDialog', event.videoId);
				});
			},
			//单机选将
			chooseCharacter() {
				let next = game.createEvent('chooseCharacter', false);
				next.setContent(function () {
					'step 0';
					game.initIdentity('f');
					let list = [],
						// 候选武将数
						num = get.config((_status.dqzw_boss_mode || '') + '_choose_character_number', 'dqzw_guihuaxishuang') || get.config('choose_character_number', 'dqzw_guihuaxishuang'),
						double = get.config((_status.dqzw_boss_mode || '') + '_double_character', 'dqzw_guihuaxishuang') || get.config('double_character', 'dqzw_guihuaxishuang');
					for (let name in lib.character) if (!lib.filter.characterDisabled(name)) list.push(name);
					_status.characterlist = list.slice(0);
					event.list = list.slice(0);
					list = {};
					for (let player of game.players) {
						list[player.playerid] = event.list.randomRemove(Math.max(2, num ? num : (6 - game.players.length) * 2));
					}
					let id = lib.status.videoId++;
					game.dqzw_createCharacterDialog(id, list, game.players, (button, player) => {
						button.owner = player;
						return get.config('four_assign', 'dqzw_guihuaxishuang');
					});
					event.videoId = id;
					event.targets = game.players.slice(0).remove(game.me);
					event.targets.push(game.me);
					event._double_choose = double;
					event.ai = function (button) {
						let info = get.character(button.link);
						if (!info) return 1;
						let num = get.infoHp(info[2]) / 2 + get.infoHujia(info[2]);
						switch (game.getRarity(button.link)) {
							case 'legend':
								return 10 + num;
							case 'epic':
								return 8 + num;
							case 'rare':
								return 6 + num;
							case 'common':
								return 4 + num;
							case 'junk':
								return 2 + num;
						}
						return 1;
					};
					event.callback = function (player, result) {
						if (Object.values(event.select).length) {
							for (var id in event.select) init(game.playerMap[id], event.select[id]);
						} else init(player, result);
						function init(player, result) {
							let dialog = _status.event.dialog,
								name = result.links || result;
							if (Array.isArray(name) || name.bool) {
								player.init(...name);
								if (dialog && dialog.table) {
									for (let list of dialog.table.characterList) {
										if (list.ownerId == player.playerid) {
											for (let character of list.characterList.children) {
												if (name.includes(character.link) && !character.classList.contains('selected')) character.classList.add('target');
											}
											if (list.playerInfo) list.playerInfo.textContent += '(已选定)';
										}
									}
								}
							}
							if (dialog && dialog._callback) dialog._callback(dialog, player, result, true);
						}
					};
					event.clickButton = function (that) {
						if ((_status.event.isMine && !_status.event.isMine()) || !that || !that.classList || !that.classList.contains('selectable')) return;
						_status.clicked = true;
						let player = that.owner || _status.event.player,
							num = ui.selected.buttons.length,
							free = _status.event.free_choose,
							dialog = free ? _status.event.dialogxx : _status.event.dialog,
							buttons = ui.selected.buttons,
							double = _status.event._double_choose,
							avatar = dialog._avatar,
							config = get.config('four_assign', 'dqzw_guihuaxishuang');
						if (free && config) player = game.players[double ? Math.min(lib.config.number - 1, Math.floor(num / 2)) : Math.min(game.players.length - 1, num)];
						if (that.classList.contains('selected')) {
							buttons.remove(that);
							that.classList.remove('selected');
							let links = get.links(free && config && double ? buttons.slice(game.players.indexOf(player) * 2, (game.players.indexOf(player) + 1) * 2) : free && config ? [buttons[game.players.indexOf(player)]].filter(button => button) : buttons.filter(button => button.owner == that.owner));
							update(player);
							event.select[player.playerid] = links;
							function update(player) {
								if (avatar) avatar = avatar[player.playerid];
								if (avatar) {
									if (links.length) {
										avatar.classList.remove('fullskin2');
										avatar.node.avatar2.hide();
										avatar.node.name2.hide();
									} else {
										avatar.node.avatar.style.backgroundImage = '';
										avatar.node.name.innerHTML = '';
									}
								}
								if (dialog._callback) dialog._callback(dialog, player, links.length && links);
							}
						} else {
							let selected = buttons.filter(button => button.owner == that.owner);
							if (!(free && config) && (double ? selected.length > 1 : true)) {
								buttons.remove(
									...buttons.filter(button => {
										if (double ? button == selected[0] : !config ? true : button.owner == that.owner) {
											button.classList.remove('selected');
											for (var id in event.select) {
												if (event.select[id] && event.select[id].remove) event.select[id].remove(button.link);
											}
											return true;
										}
									})
								);
							}
							that.classList.add('selected');
							buttons.push(that);
							let links = get.links(free && config && double ? buttons.slice(game.players.indexOf(player) * 2, (game.players.indexOf(player) + 1) * 2) : free && config ? [buttons[game.players.indexOf(player)]] : buttons.filter(button => button.owner == that.owner));
							event.select[player.playerid] = links;
							update(player, links);
							function update(player, names) {
								let avatar = dialog._avatar && dialog._avatar[player.playerid];
								if (avatar) {
									if (names.length > 1) {
										avatar.classList.add('fullskin2');
										avatar.node.avatar2.setBackground(names[1], 'character');
										avatar.node.avatar2.show();
										avatar.node.name2.show();
										avatar.node.name2.innerHTML = get.slimName(names[1]);
									} else {
										avatar.classList.remove('fullskin2');
										avatar.node.avatar2.hide();
									}
									avatar.node.avatar.show();
									avatar.node.avatar.setBackground(names[0], 'character');
									avatar.node.name.innerHTML = get.slimName(names[0]);
								}
								if (dialog._callback) dialog._callback(dialog, player, names);
							}
						}
						game.check();
					};
					event.dialog = get.idDialog(event.videoId);
					event.select = {};
					if (get.config('four_assign', 'dqzw_guihuaxishuang')) event.targets = [game.me];
					if (event.dialog && event.dialog._open) event.dialog._open();
					('step 1');
					if (targets.length) {
						let current = event.targets.shift(),
							next = current.chooseButton(true);
						next.complexSelect = true;
						next.dialog = event.videoId;
						next.callback = event.callback;
						next.ai = event.ai;
						next.selectButton =
							current != game.me
								? 1 : function () {
									let assign = get.config('four_assign', 'dqzw_guihuaxishuang'),
										double = _status.event._double_choose,
										num = lib.config.number,
										free = _status.event.free_choose;
									return _status.event && _status.event.isMine() ? [assign ? num : 1, (assign && free ? num : assign ? num + 1 : 2) * (double ? 2 : 1)] : 1;
								};
						next.filterOk = () => {
							if (_status.event._double_choose && get.config('four_assign', 'dqzw_guihuaxishuang')) return Object.keys(event.select).length >= lib.config.number;
							return true;
						};
						next.custom = {
							add: {},
							replace: {
								window() { },
								button: event.clickButton,
							},
						};
						next.filterButton = function (button) {
							if (this.free_choose || get.config('four_assign', 'dqzw_guihuaxishuang')) return true;
							return button.ownerId == _status.event.player.playerid;
						};
						if (event._double_choose) {
							next._double_choose = true;
							if (current != game.me) next.selectButton = [1, 2];
						}
						event.target = current;
						if (current == game.me) {
							next.closeDialog = true;
							if (lib.onfree) {
								lib.onfree.push(function () {
									next.dialogxx = ui.create.characterDialog('heightset');
									if (ui.cheat2) {
										lib.dqzw_boss_oldAnimate.call(ui.cheat2, 'controlpressdownx', 500);
										ui.cheat2.classList.remove('disabled');
									}
								});
							} else {
								next.dialogxx = ui.create.characterDialog('heightset');
							}
							ui.create.cheat2 = function () {
								ui.cheat2 = ui.create.control('自由选将', function () {
									ui.selected.buttons.forEach(button => {
										event.clickButton(button);
									});
									if (this.dialog == next.dialog) {
										this.dialog.close();
										next.dialog = this.backup;
										next.free_choose = false;
										this.backup.open();
										delete this.backup;
										game.uncheck();
										game.check();
									} else {
										this.backup = next.dialog;
										next.dialog.close();
										next.free_choose = true;
										next.dialog = next.dialogxx;
										this.dialog = next.dialog;
										this.dialog.open();
										game.uncheck();
										game.check();
									}
								});
								if (lib.onfree) ui.cheat2.classList.add('disabled');
							};
							if (!ui.cheat2 && get.config('free_choose', 'dqzw_guihuaxishuang')) ui.create.cheat2();
						}
					} else event.goto(3);
					('step 2');
					event.goto(1);
					('step 3');
					for (let player of game.players) {
						_status.characterlist.removeArray([player.name, player.name1, player.name2]);
						player.show();
					}
					if (event.dialog && event.dialog._over) event.dialog._over();
					if (ui.cheat2) {
						ui.cheat2.close();
						delete ui.cheat2;
					}
				});
			},//AAA
			chooseSkillObtainOL(players, skills, prompt) {
				let next = game.createEvent('chooseSkillObtain'),
					args = Array.from(arguments).slice(3);
				next.skills = skills;
				next.args = args;
				next.players = players.slice(0);
				next.prompt = prompt;
				next.setContent(function () {
					'step 0';
					event.players.slice(0).forEach(player => {
						player.wait();
						if (player.isOnline()) {
							player.send(
								function (skills, prompt, ai, args, set) {
									let next = game.me
										.chooseSkillObtain(skills, prompt, ...args)
										.set('defaultout', false)
										.set('ai', ai);
									if (set) for (let list of set) next.set(list[0], list[1]);
									game.resume();
								},
								event.skills,
								event.prompt,
								event.ai,
								event.args,
								event._set
							);
							event.players.remove(player);
						} else if (player == game.me) {
							event.last = player;
							event.players.remove(player);
						}
					});
					('step 1');
					event.resultAI = {};
					if (event.players.length) {
						let current = event.players.shift(),
							next = current
								.chooseSkillObtain(event.skills, event.prompt, ...event.args)
								.set('defaultout', false)
								.set('ai', event.ai);
						if (event._set) for (let list of event._set) next.set(list[0], list[1]);
						event.target = current;
					} else event.goto(3);
					('step 2');
					if (target) {
						event.resultAI[target.playerid] = result;
						target.unwait(result);
					}
					event.goto(1);
					('step 3');
					if (event.last) {
						let next = game.me
							.chooseSkillObtain(event.skills, event.prompt, ...event.args)
							.set('defaultout', false)
							.set('ai', event.ai);
						if (event._set) for (let list of event._set) next.set(list[0], list[1]);
					} else event.goto(5);
					('step 4');
					game.me.unwait(result);
					('step 5');
					if (!event.resultOL) {
						game.pause();
					}
					('step 6');
					event.result = Object.assign({}, event.resultOL, event.resultAI);
					if (event.result)
						for (var id in event.result) {
							if (lib.playerOL[id]) {
								if (event.defaultout !== false && event.result[id].links) lib.playerOL[id].addSkillLog(event.result[id].links[0]);
								if (event.callback) event.callback(lib.playerOL[id], event.result[id]);
							}
						}
				});
				return next;
			},
			dqzw_boss_getRewardList(player, list) {
				let config = _status.dqzw_mode_config,
					has = name => list.some(item => item[1].name == name);
				if (config && config.rewardList) return config.rewardList.apply(this, arguments);
				return [
					[
						!has('成长'),
						{
							name: '成长',
							image: 'dqzw_boss_choice_growth',
							back: 'growth.jpg',
							click() {
								let num = get.rand(1, 100),
									list = [
										[num < 6, () => (num = 5)],
										[num < 11, () => (num = 4)],
										[num < 21, () => (num = 3)],
										[num < 31, () => (num = 2)],
										[1, () => (num = 1)],
									].forEach(item => item[0] && item[1]());
								player.gainMaxHp(num);
								player.recover(num);
							},
						},
					],
					[
						!has('幸运'),
						{
							name: '幸运',
							image: 'dqzw_boss_choice_lucky',
							back: 'lucky.jpg',
							click() {
								let num = Number(player.storage.dqzw_boss_tempCountGainableReward) || 0,
									select = Number(player.storage.dqzw_boss_tempCountSelectableReward) || 0;
								player.recover(player.getDamagedHp());
								player.storage.dqzw_boss_tempCountGainableReward = num + 1;
								player.storage.dqzw_boss_tempCountSelectableReward = select + 1;
								player.addTempSkill('dqzw_boss_tempCountGainableReward', function (event, player, name) {
									return name == 'chooseButtonBegin' && event.parent.name == 'dqzw_chooseReward' && player == event.player;
								});
							},
						},
					],
					[
						1,
						{
							name: '技能',
							image: 'dqzw_boss_choice_skill',
							back: 'skill.png',
							character: Object.keys(lib.characterPack)
								.map(pack => Object.keys(lib.characterPack[pack]))
								.flat()
								.filter(name => !(list || []).some(info => info.character == name) || !player || !((get.character(name) || [])[3] || []).some(skill => player.hasSkill(skill)))
								.randomGet(),
							click() {
								player.addSkill(event.info.skill);
							},
							init(node, player) {
								let background = node.background,
									skill = ((get.character(this.character) || [])[3] || []).randomGet(),
									exclusive = lib.dqzw_boss_playerExclusiveSkill,
									back = ui.create.div('', background, {
										left: 0,
										top: 0,
										width: '100%',
										height: '100%',
										borderRadius: '4%',
									});
								if (exclusive && exclusive.length && get.rand(1, 100) < 11) {
									this.character = 'dqzw_jisi';
									skill = exclusive.randomGet();
								}
								back.setBackground(this.character || 'dqzw_jisi', 'character');
								back.style.backgroundSize = '100% 100%';
								let up = background.appendChild(back.cloneNode(true));
								back.style.transform = 'scaleX(.91) scaleY(.936)';
								up.style.backgroundImage = background.style.backgroundImage;
								background.style.backgroundImage = 'none';
								node.background.style.zoom = 1.1;
								let scale = 0.75,
									height = document.body.offsetHeight / 100,
									width = document.body.offsetWidth,
									originalWidth = width * game.documentZoom * 0.65,
									wideScreen = originalWidth > 600,
									skillName = ui.create.div(
										'',
										get.skillTranslation(skill, player),
										{
											top: '68.5%',
											left: '12%',
											color: 'black',
											fontWeight: 'bold',
											fontFamily: 'dqzw_fangzhengzhunyuan',
											fontSize: height * (wideScreen ? 2.4 : 1.4) + 'px',
											textShadow: 'none',
											transform: `scale(${scale})`,
										},
										node.image
									),
									skillInfo = ui.create.div(
										'',
										get.skillInfoTranslation(skill, player),
										{
											top: '65%',
											left: '18%',
											width: '82%',
											height: '32%',
											color: 'black',
											fontWeight: 'bold',
											fontFamily: 'dqzw_hanyiwenhei',
											fontSize: height * (2) + 'px',
											lineHeight: height * (2.5) + 'px',
											paddingTop: '1%',
											textShadow: 'none',
											transform: `scale(${scale})`,
											overflowY: 'auto',
										},
										node.image
									);
								lib.setScroll(skillInfo);
								this.skill = skill;
								node.skillName = skillName;
								node.skillInfo = skillInfo;
								node._customintro = dialog => {
									dialog.add(get.skillTranslation(skill, player));
									dialog.addText(get.skillInfoTranslation(skill, player));
								};
							},
						},
					],
					[
						!has('命运'),
						{
							name: '命运',
							image: 'dqzw_boss_choice_destiny',
							back: 'destiny.jpg',
							click() {
								[
									() => {
										player.popup('好运');
										[
											() => {
												let boss = (game.boss.randomGet && game.boss.randomGet()) || game.boss;
												if (boss && boss.discard) boss.discard(boss.getCards('h').randomGets(boss.countCards('h') / 2));
											},
											() => player.gainMaxHp(),
											() => player.draw(4),
											() => player.recover(get.rand(1, 6)),
											() => {
												let skills = lib.dqzw_boss_gainable_skills.randomGets(3);
												player.chooseSkillObtain(skills).set('defaultout', (player, result) => {
													let num = _status.dqzw_checkpoint_progress || 0;
													player.addTempSkill(result.links[0], () => _status.dqzw_checkpoint_progress - num > 4);
												});
											},
										].randomGet()();
									},
									() => {
										player.popup('厄运');
										let boss = (game.boss.randomGet && game.boss.randomGet()) || game.boss;
										[() => player.discard(player.getCards('h').randomGets(player.countCards('h') / 2)), () => boss.addSkill(lib.dqzw_boss_gainable_skills.randomGet()), () => boss.draw(4), () => boss.gainMaxHp(), () => player.addTempSkill('mbzhixi')].randomGet()();
									},
								].randomGet()();
							},
						},
					],
					[
						!has('绝烈-伤害增加') && player && player.hasSkill('dqzw_boss_juelie'),
						{
							name: '绝烈-伤害增加',
							image: 'dqzw_boss_choice_juelie_damage',
							back: 'juelie.jpg',
							click() {
								if (player.storage.dqzw_boss_juelie) player.storage.dqzw_boss_juelie[0]++;
							},
						},
					],
					[
						!has('绝烈-回复增加') && player && player.hasSkill('dqzw_boss_juelie'),
						{
							name: '绝烈-回复增加',
							image: 'dqzw_boss_choice_juelie_recover',
							back: 'juelie.jpg',
							click() {
								if (player.storage.dqzw_boss_juelie) player.storage.dqzw_boss_juelie[1]++;
							},
						},
					],
					[
						!has('复活') && game.friend.find(player => player.isDead()),
						{
							name: '复活',
							image: 'dqzw_boss_choice_revive',
							back: 'revive.jpg',
							click() {
								'step 0';
								player
									.chooseTarget('复活一名队友', (_event, _player, target) => _status.event.targets.includes(target))
									.set(
										'targets',
										game.friend.filter(player => player.isDead())
									)
									.set('deadTarget', true);
								('step 1');
								if (result.targets && result.targets.length) {
									let target = result.targets[0];
									target.revive(target.maxHp);
									target.directgain(get.cards(3));
									game.broadcast(player => {
										player.revive(player.maxHp);
									}, target);
									_status.event.insert(
										function () {
											event.trigger('revive');
										},
										{ player: target, source: player }
									);
								}
							},
						},
					],
					[
						!has('势力技-升级') && player && player.hasSkill('dqzw_boss_group_skill_' + player.group) && !player.storage.dqzw_boss_group_skill_upgrade,
						{
							name: '势力技-升级',
							image: `dqzw_boss_choice_group_skill_${player.group}_upgrade`,
							back: `group_${player.group}.jpg`,
							click() {
								player.storage.dqzw_boss_group_skill_upgrade = true;
							},
						},
					],
				];
			},
			dqzw_createBuff(style, options, item) {
				let url = 'extension/大权在握/image/',
					buff = ui.create.div(
						'.dqzw-boss-buffs',
						{
							background: `url(${url}buffs/${item.level || 0}/${item.id}.png), url(${url}buffs/${item.level || 0}/${item.name}.png)`,
							backgroundSize: '100% 100%, 100% 100%',
							...style,
						},
						...options
					);
				if ('id' in item) buff.style.setProperty('--buffId', item.id);
				if ('name' in item) buff.style.setProperty('--buffName', item.name);
				buff.style.setProperty('--buffLevel', item.level || 0);
				buff.info = item;
				return buff;
			},
			dqzw_createCharacterDialog(id, list, players, filter, avatarId, idList = 300) {
				let type = get.configOL('choose_character_style', 'dqzw_guihuaxishuang'),
					create = lib.dqzw_boss_characterDialogStyle;
				if (!avatarId) avatarId = players.map(() => get.id());
				idList = Array.from(Array(idList))
					.map(() => get.id())
					.filter(id => !game.players.map(player => player.playerid).includes(id));
				game.broadcastAll(
					(id, list, players, filter, create, avatarId, idList) => {
						let dialog = ui.create.dialog();
						dialog.style.setProperty('left', '10%', 'important');
						dialog.style.setProperty('top', '5%', 'important');
						dialog.style.setProperty('width', (document.body.offsetWidth / 100) * 80 + 'px', 'important');
						dialog.style.setProperty('min-height', (document.body.offsetHeight / 100) * 76 + 'px', 'important');
						dialog.videoId = id;
						if (create) create(dialog, id, list, players, filter, avatarId, idList);
					},
					id,
					list,
					players,
					filter,
					create[type] || create.default,
					avatarId,
					idList
				);
			},
			dqzw_createShopDialog(players, map, ai) {
				let type = get.configOL('choose_character_style', 'dqzw_guihuaxishuang'),
					create = lib.dqzw_boss_shopStyle;
				game.broadcastAll(
					(players, map, ai, create) => {
						if (create) create(players, map, ai);
					},
					players,
					map,
					ai,
					create[type] || create.default
				);
			},
			dqzw_boss_getShopInfo(player) {
				let pile = lib.inpile,
					pack = lib.cardPack.mode_derivation,
					history = [],
					characters = lib.dqzw_boss_gainableSkill_character,
					names = pile.concat(pack).concat(lib.dqzw_boss_deleteEquips),
					equips = names.filter(name => get.type(name) == 'equip' && (lib.card[name] ? !lib.card[name].destroy : false)),
					tricks = names.filter(name => get.type2(name) == 'trick'),
					basics = names.filter(name => get.type(name) == 'basic'),
					buffs = [...lib.dqzw_buff_list],
					levelJudge = {
						card: [
							[num => !num || num < 1, 0],
							[num => num > 6.9, 3],
							[num => num > 5.1, 2],
							[num => num > 2.8, 1],
						],
						skill: [
							[num => !num || num < 0.6, 0],
							[num => num > 1.5, 3],
							[num => num > 0.9, 2],
							[num => num > 0.5, 1],
						],
					},
					getCard = (name, price, type, __init) => {
						history.add(name);
						return {
							name: get.translation(name).slice(0, 5),
							type,
							price,
							level: (levelJudge.card.find(item => item[0](get.value({ name }, player) || 0)) || [])[1] || 0,
							info: ' ',
							card: game.createCard(name),
							result(player, item, mandatory, map) {
								if (map && map.cards) map.cards.push(game.createCard(item.card));
								else if (mandatory) player.directgain([game.createCard(item.card)]);
								else player.gain(game.createCard(item.card), 'gain2');
							},
							__init,
							init(node) {
								let card = game.createCard(this.card);
								if (card) {
									card.style.zoom = 0.8;
									node.info.appendChild(card);
								}
								if (this.__init) this.__init.apply(this, arguments);
							},
						};
					},
					getSkill = (name, price, type) => {
						history.add(name);
						return {
							name: get.translation(name).slice(0, 5),
							type,
							price,
							skill: name,
							level: (levelJudge.skill.find(item => item[0](get.skillRank(name, 'inout') || 0)) || [])[1] || 0,
							info: get.skillInfoTranslation(name, player),
							result(player, item, _mandatory, map) {
								if (map && map.skills) map.skills.push(item.skill);
								else player.addSkill(item.skill);
							},
						};
					},
					getBuff = (item, price, type, __init) => {
						history.add(name);
						let list = [200, 400, 600, 800];
						return {
							name: get.translation(item.name).slice(0, 5),
							type,
							price: price || item.price || list[item.level || 0],
							level: item.level || 0,
							info: item.intro,
							buff: item,
							result(player, item, mandatory, map) {
								let event = {
									list: [item.buff],
									trigger: () => 0,
									finish: () => 0,
								};
								if (map && map.buffs) map.buffs.push(item.buff);
								else if (mandatory) eval(`(${lib.element.content.dqzw_gainBuffs})(event, 0, 0, player, 0, 0, 0, 0, 0, 0, 0, 0, 0, _status, lib, game, ui, get, ai);`);
								else player.dqzw_gainBuffs([item.buff]);
							},
							__init,
							init(node) {
								let url = 'extension/大权在握/image/',
									container = ui.create.div(
										{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											position: 'relative',
											width: '100%',
											height: (document.body.offsetHeight / 100) * 15 + 'px',
										},
										node.info,
										0
									),
									back = ui.create.div(
										{
											width: '46%',
											height: '100%',
											background: `url(${url}background/back_buff.png)`,
											backgroundSize: '100% 100%',
											transform: 'scale(1.12)',
										},
										container
									),
									icon = game.dqzw_createBuff(
										{
											width: '56%',
											height: '88%',
											transform: 'scale(.8)',
										},
										[container],
										this.buff
									);
								if (this.__init) this.__init.apply(this, arguments);
							},
						};
					},
					getRandomBuffs = (num, buffList, tiem = 400) => {
						let list = [],
							done;
						if (Number(time) > 0)
							setTimeout(() => {
								done = true;
							}, time);
						while (!done && list.length < num) {
							let buff = player.dqzw_getGainableBuffs((item, player) => !player.dqzw_hasBuff(item.id) && !(_status.dqzw_globalBuffs || []).includes(item.id) && !(_status.dqzw_globalDeBuffs || []).includes(item.id), void 0, buffList || buffs, true).randomGet();
							if (buff) list.add(buff);
							else break;
						}
						done = true;
						return list;
					},
					getRandomSkills = (num, skillList, time = 400) => {
						let list = [],
							done;
						if (Number(time) > 0)
							setTimeout(() => {
								done = true;
							}, time);
						while (!done && list.length < num) {
							let skill = (skillList || skills).filter(skill => !player.hasSkill(skill)).randomGet();
							if (skill) list.add(skill);
							else break;
						}
						done = true;
						return list;
					},
					getRandomCards = (num, cardList = [], time = 400) => {
						let list = [],
							done;
						if (Number(time) > 0)
							setTimeout(() => {
								done = true;
							}, time);
						while (!done && list.length < num) {
							let card = cardList.randomGet();
							if (card) list.add(card);
							else break;
						}
						done = true;
						return list;
					},
					getSkillSlot = () => {
						return {
							name: '技能槽',
							type: 'skillSlot',
							price: 1000,
							level: 2,
							info: '空技能槽',
							result(player, item, mandatory) {
								if (mandatory) lib.element.content.gainSkillSlot({}, 0, void 0, player, 0, 0, 0, 0, 0, 0, 0, 0, 0, _status, lib, game, ui, get, ai);
								else player.gainSkillSlot();
							},
						};
					};
				//list, types, prompt, options
				return [
					{
						name: '艾欧尼亚均衡商店',
						content() {
							return [
								equips
									.randomGets(player.dqzw_countShopCommodity(3, 'equip'))
									.map(name => getCard(name, get.rand(30, 200), 'equip'))
									.concat(tricks.randomGets(player.dqzw_countShopCommodity(3, 'trick')).map(name => getCard(name, get.rand(70, 400), 'trick')))
									.concat(
										(function (num) {
											let skillSlots = [];
											while (num-- > 0) skillSlots.push(getSkillSlot());
											return skillSlots;
										})(player.dqzw_countShopCommodity(1, 'skillSlot'))
									),
								[{ type: 'equip' }, { type: 'trick' }, { type: 'skillSlot', name: '技能槽' }],
								'艾欧尼亚均衡商店',
								{
									refresh(_map, original, create) {
										let list1 = [...equips],
											list2 = [...tricks],
											newMap = {};
										Object.keys(original).forEach(type => {
											newMap[type] = [...original[type]];
										});
										history.forEach(name => {
											if (get.rand(1, 100) < 61) {
												list1.remove(name);
												list2.remove(name);
											}
										});
										Object.keys(newMap).forEach(type => {
											let list = newMap[type];
											if (type == 'equip') newMap[type] = list.map(item => create(getCard(list1.randomRemove(), get.rand(30, 200), 'equip')));
											if (type == 'trick') newMap[type] = list.map(item => create(getCard(list2.randomGet(), get.rand(70, 400), 'trick')));
										});
										return newMap;
									},
								},
							];
						},
					},
					{
						name: '来自宋朝的樊楼',
						content() {
							let skills = characters
								.filter(item => item.info[0] == 'female')
								.map(item => item.skills)
								.flat();
							return [
								skills
									.randomGets(player.dqzw_countShopCommodity(5, 'skill'))
									.map(skill => getSkill(skill, get.rand(300, 1200), 'skill'))
									.concat(getRandomBuffs(player.dqzw_countShopCommodity(5, 'buff')).map(item => getBuff(item, void 0, 'buff')))
									.concat(
										(function (num) {
											let skillSlots = [];
											while (num-- > 0) skillSlots.push(getSkillSlot());
											return skillSlots;
										})(player.dqzw_countShopCommodity(2, 'skillSlot'))
									),
								[
									{ type: 'skill', name: '技能' },
									{ type: 'buff', name: '增益' },
									{ type: 'skillSlot', name: '技能槽' },
								],
								'来自宋朝的樊楼',
								{
									refresh(_map, original, create) {
										let list1 = [...buffs],
											list2 = [...skills],
											newMap = {};
										Object.keys(original).forEach(type => {
											newMap[type] = [...original[type]];
										});
										history.forEach(name => {
											if (get.rand(1, 100) < 61) {
												list1.remove(name);
												list2.remove(name);
											}
										});
										Object.keys(newMap).forEach(type => {
											let list = newMap[type];
											if (type == 'skill') newMap[type] = list.map(item => create(getSkill(list2.randomRemove(), get.rand(300, 1200), 'skill')));
											if (type == 'buff') newMap[type] = getRandomBuffs(list.length, list1).map(item => create(getBuff(item, void 0, 'buff')));
										});
										return newMap;
									},
								},
							];
						},
					},
				];
			},
			dqzw_replaceHandcards(...args) {
				let next = game.createEvent('replaceHandcards');
				if (Array.isArray(args[0])) {
					next.players = args[0];
				} else {
					next.players = [];
					for (let arg of args) {
						if (get.itemtype(arg) == 'player') next.players.push(arg);
					}
				}
				if (_status.connectMode && args[1] !== false) next.setContent('dqzw_replaceHandcardsOL');
				else next.setContent('dqzw_replaceHandcards');
				return next;
			},
			// 关卡创建
			createCheckpoint(info, draw, enter) {
				let next = game.createEvent('checkpointCreate');
				next.player = game.me;
				next.info = info;
				next.draw = draw;
				next.enter = enter;
				next.forceDie = true;
				next.setContent(function () {
					'step 0';
					let info = event.info,
						draw = event.draw,
						modeConfig = _status.dqzw_mode_config,
						enter = event.enter;
					if (modeConfig && modeConfig.createCheckpointStart) modeConfig.createCheckpointStart.call(this, event);
					if (game.enemy) {
						game.enemy.forEach(enemy => {
							enemy.removeSkill(enemy.getSkills(true, null, false), true);
							enemy.delete();
							if (game.playerMap && game.playerMap[enemy.playerid]) delete game.playerMap[enemy.playerid];
							if (lib.playerOL && lib.playerOL[enemy.playerid]) delete lib.playerOL[enemy.playerid];
							game.players.remove(enemy);
							game.dead.remove(enemy);
						});
						game.enemy.length = 0;
					} else game.enemy = [];
					if (!_status.dqzw_checkpoint_progress) _status.dqzw_checkpoint_progress = 0;
					if (_status.dqzw_pre_checkpoint_player_seat)
						_status.dqzw_pre_checkpoint_player_seat.forEach(map => {
							map.player.seatNum = map.seat;
							game.broadcast(
								(player, num) => {
									player.seatNum = num;
								},
								map.player,
								map.seat
							);
						});
					game.boss = [];
					let player_number;
					if (info.enemy) {
						player_number = info.enemy.number + game.friend.length;
						if (player_number)
							game.broadcastAll(function (num) {
								ui.arena.setNumber(num);
							}, player_number);
						let num = info.enemy.number,
							seats = [...Array(num)].map((_item, index) => index + 1),
							list = info.enemy.list;
						loop: for (let playerInfo of list) {
							let playerNum = playerInfo.number == 'full' ? num : playerInfo.number * 1 || 1;
							if (num < 1) break;
							if (playerNum) {
								let index = 0,
									isArray = Array.isArray(playerInfo.seat);
								while (playerNum--) {
									let clone = Object.assign({}, playerInfo, {
										seat: isArray ? playerInfo.seat[index] || null : playerInfo.seat,
									}),
										player = create(clone, info.enemy.number);
									num--;
									index++;
									game.enemy.push(player);
									init(clone, player, info.enemy.number);
									if (clone.finish) break loop;
								}
								if (num < 1) break;
							}
						}
						game.initIdentity('e');
						function create(playerInfo, num) {
							let player = lib.dqzw_boss_oldAnimate.call(ui.create.player(ui.arena), 'start'),
								id = get.id(),
								seat;
							player.getId();
							if (!player.playerid) player.playerid = id;
							if (lib.playerOL && !lib.playerOL[id]) lib.playerOL[id] = player;
							if (game.playerMap && !game.playerMap[id]) game.playerMap[id] = player;
							if (playerInfo.seat || seats.length) {
								let players = game.players.concat(game.dead),
									start = players
										.filter(current => {
											return !players.some(currentx => {
												return (currentx.seatNum || 1) == (current.seatNum || 1) + 1;
											});
										})
										.sort((a, b) => {
											return a.seatNum - b.seatNum;
										})[0];
								if (start) start = start.seatNum + 1;
								seat = (typeof playerInfo.seat == 'function' ? playerInfo.seat(playerInfo, player, num) : playerInfo.seat == 'auto' ? 0 : playerInfo.seat) || seats[0];
								seats.remove(seat);
								seat = (!playerInfo.seat && start) || seat;
								while (game.hasPlayer2(player => (player.seatNum || 1) == seat, true)) seat++;
								player.changeSeat(seat);
								player.seatNum = seat;
							}
							game.players.push(player);
							game.arrangePlayers();
							game.broadcast(
								function (info, id, seat, players, dead) {
									let player = lib.dqzw_boss_oldAnimate.call(ui.create.player(ui.arena), 'start');
									player.playerid = id;
									if (!lib.playerOL[id]) lib.playerOL[id] = player;
									if (seat) {
										player.changeSeat(seat);
										player.seatNum = seat;
									}
									game.players.push(player);
									game.arrangePlayers();
								},
								playerInfo,
								id,
								seat
							);
							return player;
						}
						function init(playerInfo, player, num) {
							if (!playerInfo) return;
							let name = playerInfo.name,
								skill = playerInfo.skill,
								hp = playerInfo.hp,
								maxHp = playerInfo.maxHp;
							if (typeof name == 'function') name = name(playerInfo, player);
							switch (name) {
								case 'auto':
									if (playerInfo.type == 'boss') name = Object.keys(lib.character).randomRemove(2);
									else name = [_status.characterlist.randomRemove()];
									break;
								default:
									if (typeof name == 'string') name = name.split(' ');
							}
							if (name) player.init(...name);
							if (skill) {
								if (typeof skill == 'function') skill = skill.call(playerInfo, player);
								if (typeof skill == 'string') skill = skill.split(' ');
								player.addSkill(skill);
							}
							if (hp || maxHp) {
								if (typeof hp == 'function') hp = hp(playerInfo, player);
								if (typeof maxHp == 'function') maxHp = maxHp(playerInfo, player);
								player.maxHp = maxHp || hp || player.maxHp;
								player.hp = hp || player.hp;
							}
							if (playerInfo.type && game[playerInfo.type]) {
								player.dataset.dqzw_type = playerInfo.type;
								game[playerInfo.type].add(player);
							}
							if (playerInfo.type == 'boss' && _status.dqzw_boss_activity == 'springFestival')
								game.broadcastAll(player => {
									player.classList.remove('fullskin2');
									player.node.avatar2.hide();
									player.node.name2.hide();
									player.node.avatar.setBackgroundImage(`extension/大权在握/image/activity/springFestival/character/boss.jpg`);
									player.node.name.innerHTML = '年兽';
								}, player);
							game.broadcast(
								function (player, name, character) {
									if (name && player) player.init(...name);
								},
								player,
								name
							);
							return player;
						}
					}
					if (typeof info.me == 'function') info.me(game.friend, info);
					game.broadcast(function (enemy) {
						if (game.enemy)
							game.enemy.forEach(enemy => {
								enemy.delete();
								game.players.remove(enemy);
								game.dead.remove(enemy);
							});
						game.enemy = enemy;
					}, game.enemy);
					game.players.forEach(player => player.update());
					if (draw || !_status.dqzw_checkpoint_progress) game.gameDraw(event.startPlayer || game.players[0], draw || info.draw || game.gameDrawNum);
					else {
						event.insert(
							function () {
								let num = event.num || event.draw || event.info.draw || game.gameDrawNum || 4;
								game.hasPlayer2(current => {
									if (!current._start_cards) {
										let numx = num;
										if (typeof num == 'function') numx = num(current);
										if (numx > 0) {
											if (current.getTopCards) current.directgain(current.getTopCards(numx));
											else current.directgain(get.cards(numx));
										}
										current._start_cards = current.getCards('h');
									}
								}, true);
								event.trigger('gameDraw');
							},
							{ name: 'gameDraw', player: game.me, info, draw }
						);
					}
					_status.dqzw_pre_checkpoint_player_seat = game.friend.map(player => {
						return { player, seat: player.seatNum };
					});
					game.updateSeat();
					_status.dqzw_checkpoint_progress++;
					let config = get.configOL('player_enter_game', 'dqzw_guihuaxishuang');
					if (enter !== false && _status.dqzw_checkpoint_progress > 1) {
						(event.players || game.enemy).concat(config ? game.friend : []).forEach(player => {
							game.triggerEnter(player);
						});
					}
					if (info.over) info.over();
					if (modeConfig && modeConfig.createCheckpoint) modeConfig.createCheckpoint.call(this, event);
					('step 1');
					if (!event.nocStart) event.trigger('checkpointStart');
					('step 2');
					if (!event.nogStart) event.trigger('gameStart');
				});
			},
			createWeather(id, list, weather, map, prompt, callback, roundback, speed) {
				let next = game.createEvent('createWeather');
				next.player = game.me;
				next.videoId = id;
				next.list = list;
				next.weather = weather;
				next.map = map;
				next.prompt = prompt;
				next.callback = callback;
				next.roundback = roundback;
				next.speed = speed;
				next.forceDie = true;
				next.setContent(function () {
					game.broadcastAll(
						function (id, list, weather, map, prompt, callback, roundback, speed, round) {
							let dialog = ui.create.dialog('forcebutton');
							dialog.videoId = id;
							dialog.textPrompt = dialog.add(typeof prompt == 'function' ? prompt(dialog, list, weather, map, callback) : prompt || '本关天气是<br>▼');
							let table = ui.create.div(
								{
									position: 'relative',
									transition: 'all .3s',
									width: '100%',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
								},
								dialog.content
							);
							Object.assign(dialog.style, {
								left: '38%',
								width: (document.body.offsetWidth / 100) * 24 + 'px',
								height: (document.body.offsetHeight / 100) * 32 + 'px',
							});
							dialog.table = table;
							list.randomSort();
							for (var i = 0; i < list.length; i++) {
								let weathername = list[i],
									button = ui.create.button([weathername, get.translation('dqzw_boss_' + weathername)], 'tdnodes', table);
								button.index = i;
								button.style.transition = '';
								button.className = 'shadowed pointerdiv tdnode';
								if (weathername == weather) dialog._random_result = button;
								if (i != 2) button.classList.add('transparent2');
							}
							function getMargin(node, type) {
								let style = getComputedStyle(node);
								function number(str) {
									return str.slice(0, -2) * 1;
								}
								if (type == 'width') return number(style.marginLeft) + number(style.marginRight);
								if (type == 'height') return number(style.marginTop) + number(style.marginBottom);
								return 0;
							}
							let duration = 50,
								count = 0;
							round = get.rand(...(round ? round : [2, 4]));
							speed = (speed || 220) / round;
							(function move(tx, callback = game.kongfunc) {
								let x = table.scrollLeft,
									sx = (tx - x) / duration,
									st = Date.now();
								(function _move() {
									let time = Date.now() - st;
									table.scrollLeft += sx * time;
									if (time >= duration) {
										table.scrollLeft = 0;
										table.appendChild(table.firstChild);
										for (let i = 0, list = [...table.children]; i < list.length; i++) {
											let node = list[i];
											if (!node) continue;
											node.classList.add('transparent2');
											if (i == 2 || (round > 0 && i == 3)) {
												node.classList.remove('transparent2');
												if (round < 1 && node.link == weather) {
													callback(node, list, dialog);
													return;
												}
											}
										}
										if (round > 0 && ++count >= list.length) {
											count = 0;
											duration += speed;
											round--;
											if (roundback) roundback(table, dialog, count, round, duration, speed);
										}
										setTimeout(move, 0, table.firstChild.offsetWidth + getMargin(table.firstChild, 'width'), callback);
										return;
									}
									requestAnimationFrame(_move);
								})();
							})(
								table.firstChild.offsetWidth + getMargin(table.firstChild, 'width'),
								callback ||
								function (node) {
									if (!node) node = {};
									game.resume();
									let path = '大权在握/weather/' + node.link + '.gif',
										img = new Image();
									img.src = map[node.link + '_path'] || 'extension/' + path;
									img.onload = () => {
										if (_status.dqzw_boss_activity != 'springFestival') {
											_status.tempBackground = map[node.link + '_path'] || 'ext:' + path;
											game.updateBackground();
										}
									};
									if (map && map[node.link]) {
										let result = map[node.link];
										(function create(result) {
											if (Array.isArray(result)) {
												let list = [];
												for (var item of result) list.push(create(item));
												return (_status.dqzw_boss_weather = list);
											}
											switch (typeof result) {
												case 'string':
													if (result == 'default')
														_status.dqzw_boss_weather = {
															type: 'skill',
															range: 'global',
															value: lib.skill[node.link] ? node.link : 'dqzw_boss_' + node.link,
															name: node.link,
														};
													else if (lib.skill[node.link])
														_status.dqzw_boss_weather = {
															type: 'skill',
															range: 'global',
															value: result,
															name: node.link,
														};
													break;
												case 'function':
													result = result(node.link, node, game.me);
													if (result !== undefined) _status.dqzw_boss_weather = result;
											}
											return _status.dqzw_boss_weather;
										})(result);
									}
								}
							);
							game.pause();
						},
						event.videoId,
						event.list,
						event.weather,
						event.map,
						event.prompt,
						event.callback,
						event.roundback,
						event.round
					);
				});
				return next;
			},
			// 抽卡动画(抄的七圣召唤)
			dqzw_genius_draw(dialog, cards, callback = game.kongfunc, rotate) {
				if (!_status.dqzw_genius_draw) _status.dqzw_genius_draw = [];
				_status.dqzw_genius_draw.forEach(clone => clone.remove());
				if (_status.connectMode & game.online ? false : _status.event & !_status.event.isMine()) return;
				let interval = (dialog.clientWidth - cards[0].clientWidth * cards.length) / 2 || 0,
					init = card => {
						if (card && card.style) {
							_status.dqzw_genius_draw.push((card.clone = card.parentNode.appendChild(card.cloneNode(true))));
							card.style.transition = 'none';
							dialog.appendChild(card.hide());
							Object.assign(card.clone.style, {
								position: 'absolute',
								transform: 'rotate(90deg) rotateY(-180deg)' + card.style.transform.replace(/rotate[XY]?\((.)*?\)|translate[XY]?\((.)*?\)/gim, ''),
							});
						}
					},
					index = cards[1],
					getRect = node => {
						if (!node) return {};
						let rect = node.getBoundingClientRect(),
							x = rect.x / game.documentZoom + margin('Left'),
							y = rect.y / game.documentZoom + margin('Top');
						function margin(type) {
							return getComputedStyle(node)['margin' + type].slice(0, -2) * 1;
						}
						return {
							x,
							y,
						};
					};
				if (Array.isArray(index) && index.every(item => parseFloat(card).toString() != 'NaN')) cards = cards[0];
				else index = null;
				dialog.classList.add('dqzw-presentation');
				if (Array.isArray(cards))
					for (var i of cards) {
						let card = i;
						if (index) {
							if (index.find(item => item.card == card && item.index == i)) init(card);
							else
								dialog.appendChild(
									cards
										.find(card => card)
										.cloneNode(true)
										.hide()
								);
						} else init(card);
					}
				dialog.style.setProperty('--dqzw-presentation-margin', Math.max((dialog.clientWidth - (cards.find(card => card) || { clientWidth: 0 }).clientWidth * cards.length) / cards.length, (dialog.clientWidth / 100) * 2) + 'px');
				dialog.listenTransition(() => {
					let list = [];
					setTimeout(() => {
						while (list.length < cards.length) {
							let card = cards[cards.length - (list.length + 1)],
								clone = card.clone;
							if (!card || !clone) break;
							list.push(card);
							let x = getRect(card).x,
								cx = getRect(clone).x,
								y = getRect(card).y,
								cy = getRect(clone).y,
								[dx, dy] = [Math.abs(Math.max(cx, x)) - Math.min(cx, x) - 40, Math.abs(Math.max(y, cy)) - Math.min(y, cy) + 28];
							setTimeout(() => {
								clone.style.transform += ' translateY(-' + dx + 'px)';
								clone.listenTransition(() => {
									clone.listenTransition(() => {
										clone.listenTransition(() => {
											if (callback.call(card, cards) !== false) {
												clone.remove();
												card.show();
												delete card.clone;
											}
										});
										clone.style.transform += ' translateY(60px)';
									});
									clone.style.transform += ' rotate(90deg) translateY(-' + dy + 'px)' + (rotate === false ? '' : rotate ? rotate : 'rotateY(180deg)');
								});
							}, 150 * list.length);
						}
					}, 0);
				});
			},
			dqzw_choice_initCardPile() {
				if (ui.dqzw_choice_cardPile) ui.dqzw_choice_cardPile.innerHTML = '';
			},
			dqzw_createChoiceCard(name, noclick, path = 'group.jpg', onclick) {
				let card = ui.create.card(null, 'noclick', noclick).init({ name }),
					background = ui.create.div(),
					image = ui.create.div(),
					height = document.body.offsetHeight / 100;
				card.style.setProperty('min-width', height * 28 + 'px', 'important');
				card.style.setProperty('min-height', height * 42 + 'px', 'important');
				card.style.setProperty('perspective', '600px', 'important');
				card.style.setProperty('transform-style', 'preserve-3d', 'important');
				card.style.setProperty('box-shadow', 'none', 'important');
				background.style.setProperty('background-image', `url(${'extension/大权在握/image/choice/cardback/' + path})`, 'important');
				background.style.setProperty('transform', 'rotateY(180deg)', 'important');
				background.style.setProperty('display', 'block', 'important');
				background.style.setProperty('background-size', '100% 100%', 'important');
				background.style.setProperty('width', '100%', 'important');
				background.style.setProperty('height', '100%', 'important');
				background.style.setProperty('padding', '0', 'important');
				background.style.setProperty('backface-visibility', 'hidden', 'important');
				image.style.setProperty('backface-visibility', 'hidden', 'important');
				image.style.setProperty('background-image', card.node.image.style.backgroundImage, 'important');
				image.style.setProperty('background-size', '100% 100%', 'important');
				image.style.setProperty('height', '100%', 'important');
				image.style.setProperty('width', '100%', 'important');
				image.style.setProperty('left', 0, 'important');
				image.style.setProperty('top', 0, 'important');
				image.style.setProperty('position', 'absolute', 'important');
				image.style.setProperty('transform', 'translate3d(1%, 1%, 0)', 'important');
				card.style.backgroundImage = 'none';
				card.innerHTML = '';
				if (onclick !== false) card.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', onclick || ui.click.button);
				card.appendChild(image);
				card.appendChild(background);
				card.background = background;
				card.image = image;
				if (ui.dqzw_choice_cardPile) ui.dqzw_choice_cardPile.appendChild(card);
				game.broadcast(card => {
					if (ui.dqzw_choice_cardPile) ui.dqzw_choice_cardPile.appendChild(card);
				}, card);
				return card;
			},
			gameDrawNum(player) {
				let config = _status.dqzw_mode_config;
				if (config.gameDraw) return config.gameDraw.call(this, arguments);
				if (game.boss && (game.boss == player || (game.boss.includes && game.boss.includes(player)))) return 5;
				if (!_status.dqzw_checkpoint_progress || _status.dqzw_checkpoint_progress < 2 || (game.enemy && game.enemy.includes(player))) return game.friend.includes(player) ? Number(get.configOL('player_initial_handcard_number', 'dqzw_guihuaxishuang')) || 4 : 4;
				return 0;
			},
			updateSeat(seat, num) {
				game.filterPlayer2(0, 0, true).forEach(player => {
					game.broadcastAll(
						function (player, num) {
							let str = get.cnNumber(num, true) + '号位';
							if (!player.node.seat)
								player.node.seat = ui.create.div('.seat', player, str, {
									position: 'absolute',
									margin: '5px',
									fontFamily: 'xinwei',
									fontSize: '15px',
									letterSpacing: '-3px',
									[player.name2 ? undefined : 'right']: '5px',
									[player.name2 ? 'left' : undefined]: '5px',
									top: player.name2 ? '48%' : '12%',
									textAlign: 'right',
								});
							else player.node.seat.innerHTML = str;
							player.node.seat.dataset.nature = 'wood';
						},
						player,
						player.seatNum
					);
				});
				if (seat !== false)
					game.broadcastAll(function (num) {
						let pos = game.me.seatNum - 1,
							players = game.filterPlayer2(0, 0, true),
							temp;
						num = num || game.countPlayer2(0, true);
						for (let player of players) {
							temp = player.seatNum - 1 - pos;
							if (temp < 0) temp += num;
							player.dataset.position = temp;
							if (temp > ui.arena.dataset.number * 1) player.seatNum = ui.arena.dataset.number * 1;
						}
						game.arrangePlayers();
						game.players.sort((a, b) => {
							return (a.seatNum || 1) - (b.seatNum || 1);
						});
					}, num);
			},
			initIdentity(identity, nature, players = game.filterPlayer2(true, 0, true), side) {
				switch (identity) {
					case 'f':
						identity = 'friend';
						nature = 'wu';
						players = game.friend;
						side = false;
						break;
					case 'e':
						identity = 'enemy';
						nature = 'shu';
						players = game.enemy;
						side = true;
				}
				game.broadcastAll(
					function (players, identity, nature, side) {
						for (let player of players) {
							player.identity = identity;
							player.setIdentity(identity, nature || identity);
							player.side = side;
						}
					},
					players,
					identity,
					nature,
					side
				);
			},
			dqzw_boss_addPlayer(seat = game.countPlayer2(0, true) + 1, character = [], num) {
				let player = game.addPlayer(),
					map = lib.playerOL || game.playerMap,
					players = game.filterPlayer2(0, 0, true),
					id = get.id();
				player.getId();
				player.seatNum = seat;
				players.forEach(current => {
					if (current != player && current.seatNum >= seat) current.seatNum++;
				});
				if (num > 0) player.directgain(get.cards(num));
				if (map && !map[id]) map[id] = player;
				player.addSkill(character.map(name => get.character(name)[3]).flat());
				player.init(...character);
				game.broadcast(
					(seat, character, id, players, list) => {
						let player = game.addPlayer(void 0, ...character);
						player.getId();
						player.seatNum = seatNum;
						player.playerid = id;
						lib.playerOL[id] = player;
						game.players.push(player);
						players.forEach((player, index) => {
							player.seatNum = list[index];
						});
					},
					seat,
					character,
					id,
					players,
					players.map(player => player.seatNum)
				);
				game.updateSeat();
				return player;
			},
			dqzw_boss_getFile: getFile,
			modeSwapPlayer(...args) {
				game.swapPlayer.apply(game, args);
			},
		},
		get: {
			rawAttitude(from, to) {
				return from.side === to.side ? 9 : -9;
			},
		},
		dynamicTranslate: {
			dqzw_boss_yingyue(player, skill) {
				let info = lib.translate[skill + '_info'];
				if (player.storage[skill]) return info.replace(/(阳:(.)*?.)/, '<span class = bluetext>$1</span>');
				return info.replace(/(阴:(.)*?;)/, '<span class = bluetext>$1</span>');
			},
			dqzw_boss_juelie(player, skill) {
				let info = lib.translate[skill + '_info'],
					storage = player.getStorage('dqzw_boss_juelie'),
					num = 0;
				if (storage.length) return info.replace(/\[\d*?\]/gim, val => '[' + storage[num++] + ']');
				return info;
			},
			dqzw_boss_group_skill_jin(player, skill) {
				let info = lib.translate[skill + '_info'];
				if (player.storage.dqzw_boss_group_skill_upgrade) return info + '回合结束时,你摸本回合使用卡牌数张牌.';
				return info;
			},
			dqzw_boss_group_skill_wei(player, skill) {
				let info = lib.translate[skill + '_info'];
				if (player.storage.dqzw_boss_group_skill_upgrade) return info + '当你受到伤害后,你摸X张牌.';
				return info;
			},
			dqzw_boss_group_skill_shu(player, skill) {
				let info = lib.translate[skill + '_info'];
				if (player.storage.dqzw_boss_group_skill_upgrade) return info + '当你使用【杀】造成伤害后,摸一张牌.';
				return info;
			},
			dqzw_boss_group_skill_wu(player, skill) {
				let info = lib.translate[skill + '_info'];
				if (player.storage.dqzw_boss_group_skill_upgrade) return info.replace('回合结束时', '回合开始或结束时');
				return info;
			},
			dqzw_boss_group_skill_qun(player, skill) {
				let info = lib.translate[skill + '_info'];
				if (player.storage.dqzw_boss_group_skill_upgrade) return '锁定技,你的弃牌阶段开始前,将之效果改为出牌阶段.';
				return info;
			},
		},
		translate: {
			friend: '友',
			enemy: '敌',
			dqzw_boss_shibing: '士兵',
			dqzw_boss_jisi: 'boss·祭祀',
			dqzw_boss_jisi_ab: '祭祀',
			dqzw_boss_caoe: '曹娥',
			dqzw_boss_wangshu: '望舒',
			dqzw_boss_ehuang: '娥皇',
			dqzw_boss_changxi: '常羲',
			dqzw_boss_change: '嫦娥',
			dqzw_boss_jiyue: '祭月',
			dqzw_boss_jiyue_info: '出牌阶段限一次,你可交给一名敌方角色三张红色牌并获得其一半手牌或将手牌摸至与其相同.',
			dqzw_boss_randeng: '燃灯',
			dqzw_boss_randeng_info: '出牌阶段限一次,你可将两张手牌移出游戏令己方角色本轮造成的伤害+1.',
			dqzw_boss_randeng_mark: '燃灯',
			dqzw_boss_shangyue: '赏月',
			dqzw_boss_shangyue_info: '出牌阶段限一次,你可观看并获得一名敌方角色的三张手牌.',
			dqzw_boss_guanchao: '观潮',
			dqzw_boss_guanchao_info: '出牌阶段限一次,你可令所有敌方角色依次展示一张牌并令你获得之.',
			dqzw_boss_yingui: '饮桂',
			dqzw_boss_yingui_info: '锁定技,回合开始时,你获得一张【酒】;当你使用【酒】后,视为使用一张【树上开花】.',
			dqzw_boss_yuanyue: '圆月',
			dqzw_boss_yuanyue_info: '锁定技,回合结束时,你摸X张牌.(X为你本回合使用颜色最少的牌数)',
			dqzw_boss_canyue: '残月',
			dqzw_boss_canyue_info: '锁定技,当你使用一张牌后,若你未记录该牌的花色则记录之,当你记录花色数大于3时清除记录并弃置一名角色一张牌.',
			dqzw_boss_boss_jiyue: '寂月',
			dqzw_boss_boss_jiyue_info: '当与你同阵营角色平均手牌数大于敌方角色平均手牌数时,你使用【杀】无次数限制.',
			dqzw_boss_shenwei: '神威',
			dqzw_boss_shenwei_info: '每回合限五次,当其他角色不因此技能获得牌时,你摸等量的牌.',
			dqzw_boss_shenen: '神恩',
			dqzw_boss_shenen_info: '当你获得牌时,你可对等量名角色造成等量/回复等量点伤害/体力.',
			dqzw_boss_shenci: '神赐',
			dqzw_boss_shenci_info: '当你获得牌后,你可令等量名其他角色摸/弃置等量张牌.',
			dqzw_boss_xueyue: '血月',
			dqzw_boss_xueyue_info: '每轮限一次,当你进入濒死状态时,其他友方角色可选择一项:1.弃置所有手牌,令你回复一点体力.2.弃置所有手牌摸等量的牌.',
			dqzw_boss_yuexuan: '月选',
			dqzw_boss_yuexuan_info: '①锁定技,准备阶段开始时,你摸一张牌.出牌阶段你使用【杀】的次数+1;②锁定技,当一名友方角色阵亡后,你可选择其一个技能获得之;③限定技,阵亡时改为休整一轮;④每轮限一次,当你进入濒死状态时,其他友方角色可选择一项:1.弃置所有手牌,令你回复一点体力.2.弃置所有手牌摸等量的牌.',
			dqzw_boss_shiyue: '噬月',
			dqzw_boss_shiyue_info: '当一名友方角色阵亡后,你可选择其一个技能获得之.',
			dqzw_boss_yuehua: '月华',
			dqzw_boss_yuehua_info: '限定技,你阵亡时改为休整一轮.', //'限定技,一关开始时,你可选择一名角色,失去2点体力上限或失去体力至2点令其获得一枚<月华>标记.有<月华>标记的角色阵亡时,改为休整两轮.',
			dqzw_boss_mengyue: '梦月',
			dqzw_boss_mengyue_info: '锁定技,当你体力小于一半时,你回复4点体力并立即进行一个你的回合,该技能失效.',
			dqzw_boss_shoujiang: '守江',
			dqzw_boss_shoujiang_info: '锁定技,当你受到伤害值大于1的伤害时减少至1并摸一张牌.',
			dqzw_boss_tijiang: '啼江',
			dqzw_boss_tijiang_info: '出牌阶段限一次,你可以依次获得所有其他角色各一张牌并交给所有其他角色各一张牌,结算完成后,你展示所有手牌并摸X张牌(X为手牌中包含的类型数).',
			dqzw_boss_juexun: '决寻',
			dqzw_boss_juexun_info: '当有角色进入濒死状态时,你可以令其体力回复至体力上限,你失去等同于其体力上限的体力值.',
			dqzw_boss_xiaxiao: '霞孝',
			dqzw_boss_xiaxiao_info: '出牌阶段每名角色限一次,你可令一名其他角色选择一项:1.交给你一张牌并摸一张牌;2.回复1点体力.',
			dqzw_boss_yinyue: '引月',
			dqzw_boss_yinyue_info: '锁定技,当你不应使用或打出失去牌后,若因此失去牌的总点数不小于你上次失去牌的总点数,你摸1/2/3张牌(据难度而定);你的拼点牌的点数+X.(X为你上一次失去牌中最大的点数)',
			dqzw_boss_shenche: '神车',
			dqzw_boss_shenche_info: '出牌阶段限一次,你可与一名其他角色拼点,若你赢,则其分配此三项使系数和不小于点数之差:1.【1】你对其造成1点伤害;2.【2】你减少其一点体力上限;3.【4】其选择失去一个技能.',
			dqzw_boss_jili: '集砾',
			dqzw_boss_jili_info: '锁定技,一名角色一次失去至少2张牌后,你获得其中X张牌.(X为其此次失去牌数的一半且向上取整).',
			dqzw_boss_fuzhu: '复柱',
			dqzw_boss_fuzhu_info: '出牌阶段限三次,你可弃置4/3/2张花色不同的牌令1/2/3名角色回复2/3/4点体力(据难度而定).',
			dqzw_boss_xiangjiu: '相九',
			dqzw_boss_xiangjiu_info: '①锁定技,游戏开始时,你获得6枚<相>标记(<相>标记数至多为9).当同阵营角色造成大于1的伤害或受到等于1的伤害时,你获得1枚<相>.出牌阶段结束时,若<相>数为0,你获得1枚<相>.②你的体力上限始终为9.',
			dqzw_boss_yingyue: '盈月',
			dqzw_boss_yingyue_info: '转换技.若你<相>标记数大于0,当同阵营角色:阴:造成伤害或回复体力时,你可以获得一枚<盈>标记,此次数值+1;阳:受到伤害或失去体力时,你获得一枚<缺>标记,此次数值-1.最后你失去一枚<相>.',
			dqzw_boss_leyong: '乐咏',
			dqzw_boss_leyong_info: '锁定技,当你<盈>/<缺>标记数达到1/3/5时,你摸一张牌',
			dqzw_boss_tianzhui: '天椎',
			dqzw_boss_tianzhui_info: '锁定技,当你<盈>/ <缺>标记数达到7时,你弃置所有<盈>/ <缺>并弃置任意张手牌/摸至多四张牌,将体力值流失至1点/修改至体力上限,并可令至多x名其他角色(x为你当前<相>标记数)也失去/回复y点体力值(y为本次因此技能而改变的体力数值).每有一名同阵营(盈7触发)/敌方(缺7触发)存活角色,你获得一枚<缺>/<盈>.',
			dqzw_boss_qiedan: '窃丹',
			dqzw_boss_qiedan_info: '你的每阶段开始时,你可弃置一张牌获得1/2/3名角色区域内1/2/3张牌并明置此牌(根难度而定).',
			dqzw_boss_feisheng: '飞升',
			dqzw_boss_feisheng_info: '锁定技,你使用明置牌无次数限制;当你失去最后一张明置牌时,你摸2/3/4张牌并对一名角色造成1/2/3点伤害(据难度而定)结束当前回合并将你的武将牌移除游戏直至你的下回合开始. ',
			dqzw_boss_xingye: '星夜',
			dqzw_boss_xingye_info: '所有角色手牌上限-2,boss摸牌阶段摸牌+1',
			dqzw_boss_lieri: '烈日',
			dqzw_boss_lieri_info: '火属性伤害+1,boss伤害视为火属性',
			dqzw_boss_baoyu: '暴雨',
			dqzw_boss_baoyu_info: '冰属性伤害+1,boss伤害视为冰属性',
			dqzw_boss_leiting: '雷霆',
			dqzw_boss_leiting_info: '雷属性伤害被传导给距离与受伤角色不大于1的所有其他角色,boss伤害视为雷属性',
			dqzw_boss_chunxiao: '春晓',
			dqzw_boss_chunxiao_info: '所有角色摸牌阶段摸牌数+1,boss额外+1',
			dqzw_boss_zhongxia: '仲夏',
			dqzw_boss_zhongxia_info: '所有角色手牌上限-1,出牌阶段使用【杀】次数+1,boss摸牌阶段摸牌+1',
			dqzw_boss_shangqiu: '殇秋',
			dqzw_boss_shangqiu_info: '所有角色手牌上限+2',
			dqzw_boss_handong: '寒冬',
			dqzw_boss_handong_info: '所有角色获得【止息】',
			dqzw_boss_new_zhixi_info: '你的回合内,若你使用过的牌数不小于X或使用了锦囊牌,则你不能使用或打出牌(X为你的体力值).',
			_feiyang: '飞扬',
			_feiyang_info: '判定阶段开始时,若你的判定区有牌,则你可以弃置两张手牌,弃置你判定区的一张牌.每回合限一次.',
			_bahu: '跋扈',
			_bahu_info: '锁定技,准备阶段开始时,你摸一张牌.出牌阶段,你可以多使用一张【杀】.',
			//挑战难度
			dqzw_boss_checkpointLevel_guihua_1: '简单',
			dqzw_boss_checkpointLevel_guihua_1_info: '<nd>小兵体力:<nt>4</nt></nd><nd>二关小兵体力:<nt>8</nt></nd><nd>一关BOSS体力:<nt>15</nt></nd><nd>二关BOSS体力:<nt>20</nt></nd><nd>三关BOSS体力:<nt>25</nt></nd><nd>BOSS获得技能「<nt><dqzw-tiptext text = dqzw_boss_boss_jiyue_info>寂月</dqzw-tiptext></nt>」</nd>',
			dqzw_boss_checkpointLevel_guihua_2: '普通',
			dqzw_boss_checkpointLevel_guihua_2_info: '敌方角色额外获得技能「飞扬」与「跋扈」,BOSS阵亡获得技能效果改为:第1关,获得其X/2(向下取整)个技能.第2/3关,获得其X/2(向下/上取整)个技能移除X/2(向下取整)个技能',
			dqzw_boss_checkpointLevel_guihua_3: '困难',
			dqzw_boss_checkpointLevel_guihua_3_info: '<nd>BOSS体力上限<nt>+5</nt></nd><nd>BOSS获得技能「<nt><dqzw-tiptext text = dqzw_boss_mengyue_info>梦月</dqzw-tiptext></nt>」</nd>',
			dqzw_boss_checkpointLevel_guihua_4: '地狱',
			dqzw_boss_checkpointLevel_guihua_4_info: '所有小兵变为BOSS将池中任意武将单将',
			//模式介绍
			dqzw_boss_guihua_help: '一共三关至多三人挑战,击败所有敌人即可胜利.<br>玩家的体力上限+2,初始拥有技能「<dqzw-tiptext text = dqzw_boss_yuexuan_info>月选</dqzw-tiptext>」,游戏开始时玩家可从以下技能中选择一个获得「<dqzw-tiptext text = dqzw_boss_jiyue_info>祭月</dqzw-tiptext>」、「<dqzw-tiptext text = dqzw_boss_randeng_info>燃灯</dqzw-tiptext>」、「<dqzw-tiptext text = dqzw_boss_shangyue_info>赏月</dqzw-tiptext>」、「<dqzw-tiptext text = dqzw_boss_guanchao_info>观潮</dqzw-tiptext>」、「<dqzw-tiptext text = dqzw_boss_yingui_info>饮桂</dqzw-tiptext>」.<br>第一关3小兵1BOSS,第二关4小兵2BOSS,第三关3BOSS与一名常驻BOSS.<br>小兵随机获得技能「<dqzw-tiptext text = dqzw_boss_yuanyue_info>圆月</dqzw-tiptext>」或「<dqzw-tiptext text = dqzw_boss_canyue_info>残月</dqzw-tiptext>」.<br>BOSS为BOSS将池中随机武将双将(不会重复出现,但部分难度效果不会如此).<br>击败BOSS后可以获得你未拥有且其拥有的技能(初始可获得技能数为2,第三关为3).',
			dqzw_boss_dengshen_info_bg: '登',
			dqzw_boss_dengshen_leader_1: '首领',
			dqzw_boss_dengshen_leader_2: '首领',
			dqzw_skill_slot: '空技能槽',
			dqzw_boss_juelie: '绝烈',
			dqzw_boss_juelie_info: '你造成的伤害+<span style = "color: red">[0]</span>, 受到的回复值+<span style = "color: green">[0]</span>.',
			dqzw_boss_shilian: '试炼',
			dqzw_boss_shilian_info: '出牌阶段,你可以选择以下一项执行并失去此技能:1.重铸你的所有技能;2.从3个随机boss技能中选择一个获得;3.附着「守护天使」状态,增加5点体力上限并回复5点体力.',
			dqzw_boss_adjustment_skill: '技能调整',
			dqzw_boss_adjustment_skill_info: '每关限一次,你可以替换背包与技能槽中的技能',
			dqzw_boss_group_skill_jin: '晋势',
			dqzw_boss_group_skill_jin_info: '锁定技,摸牌阶段结束后,你摸手牌中花色数张牌.',
			dqzw_boss_group_skill_wei: '魏业',
			dqzw_boss_group_skill_wei_info: '锁定技,回合开始时,你须令一名其他角色选择一项:1.弃置X张牌;2.令你摸X张牌(X为你发动此技能的次数且至多为5).',
			dqzw_boss_group_skill_shu: '蜀义',
			dqzw_boss_group_skill_shu_info: '锁定技,你使用【杀】的次数+3,你的出牌阶段结束时,摸本回合使用【杀】数张牌.',
			dqzw_boss_group_skill_wu: '吴耀',
			dqzw_boss_group_skill_wu_info: '锁定技,你的回合结束时,若你的手牌数与体力值不相等,摸或回复至相等.',
			dqzw_boss_group_skill_qun: '群心',
			dqzw_boss_group_skill_qun_info: '锁定技,你的弃牌阶段开始前,跳过之.',
			dqzw_boss_chuanxi: '川隙',
			dqzw_boss_chuanxi_info: '锁定技,你使用的即时牌额外结算一次.',
			dqzw_boss_shanqing: '山倾',
			dqzw_boss_shanqing_info: '锁定技,你对一名角色造成伤害后,若你未受伤则回复等同于伤害值的体力,否则你获得等量护甲.',
			dqzw_boss_tianzhu: '天柱',
			dqzw_boss_tianzhu_info: '锁定技,当一名角色受到伤害后,你增加等同于伤害值的体力上限.',
			dqzw_boss_yuanze: '渊泽',
			dqzw_boss_yuanze_info: '锁定技,你回复体力时获得等同于回复量的护甲.',
			dqzw_boss_cangsi: '沧祀',
			dqzw_boss_cangsi_info: '锁定技,出牌阶段结束时,你将牌堆底的牌当你本回合使用的最后一张即时牌使用.',
			dqzw_boss_shilian_guardianAngel: '守护天使',
			dqzw_boss_shilian_guardianAngel_info: '锁定技,你进入濒死状态时回复体力至上限,若此时不是你的回合则立即结束当前回合.',
			dqzw_boss_dengshen: '登神',
			dqzw_boss_dengshen_info: '你视为拥有技能「飞扬」与「跋扈」.',
			dqzw_boss_choice_group_skill_jin: '<div class = caption><li>晋势</li></div><div class = text style = "display: inline">锁定技,摸牌阶段结束后,你摸手牌的花色数张牌.</div><div class = caption><li>升级-添加描述</li></div><div class = text style = "display: inline">回合结束时,你摸本回合使用卡牌数张牌.</div>',
			dqzw_boss_choice_group_skill_wei: '<div class = caption><li>魏业</li></div><div class = text style = "display: inline">锁定技,回合开始时,你须令一名其他角色选择一项:1.弃置X张牌;2.令你摸X张牌.(X为你发动此技能的次数且至多为5)</div><div class = caption><li>升级-添加描述</li></div><div class = text style = "display: inline">当你受到伤害后,你摸X张牌.</div>',
			dqzw_boss_choice_group_skill_shu: '<div class = caption><li>蜀义</li></div><div class = text style = "display: inline">锁定技,你使用【杀】的次数+3,你的出牌阶段结束时,摸本回合使用【杀】数张牌.</div><div class = caption><li>升级-添加描述</li></div><div class = text style = "display: inline">当你使用【杀】造成伤害后,摸一张牌.</div>',
			dqzw_boss_choice_group_skill_wu: '<div class = caption><li>吴耀</li></div><div class = text style = "display: inline">锁定技,你的回合结束时,若你的手牌数与体力值不相等,摸或回复至相等.</div><div class = caption><li>升级-添加描述</li></div><div class = text style = "display: inline">回合开始时</div>',
			dqzw_boss_choice_group_skill_qun: '<div class = caption><li>群心</li></div><div class = text style = "display: inline">锁定技,你的弃牌阶段开始时,跳过之.</div><div class = caption><li>升级-修改描述</li></div><br><div class = text style = "display: inline">锁定技,你的弃牌阶段开始前,将之效果改为出牌阶段.</div>',
			dqzw_boss_choice_shilian_recast: '重铸所有技能',
			dqzw_boss_choice_shilian_skill: '从5个随机boss技能中选择一个获得',
			dqzw_boss_choice_shilian_guardianAngel: '附着「守护天使」状态,增加5点体力上限并回复5点体力',
			dqzw_boss_choice_growth: '随机增加1~5点体力上限并回复等量体力',
			dqzw_boss_choice_lucky: '回满体力,下次奖励选项与可选数+1',
			dqzw_boss_choice_destiny: '随机触发以下一个效果:随机弃置一个boss的一半手牌;增加一点体力上限;摸四张牌;随机回复1~6点体力;三个随机技能中选择一个获得五关(临时技能);随机弃置你一半手牌;当前boss获得一个随机技能;随机一个boss摸四张牌;随机一个boss增加一点体力上限;你获得一回合【止息】',
			dqzw_boss_choice_revive: '复活一名队友',
			dqzw_boss_choice_juelie_damage: '使你绝烈的伤害值+1',
			dqzw_boss_choice_juelie_recover: '使你绝烈的回复值+1',
			dqzw_boss_dengshen_zhouqun: '周群',
			dqzw_boss_tiansuan: '天算',
			dqzw_boss_tiansuan_info: '锁定技,你的手牌始终为1~13点数各一张;偶数牌不可响应,奇数牌数值+1;你每回合只能受到或造成两次伤害.',
			dqzw_boss_chenshuo: '谶说',
			dqzw_boss_chenshuo_info: '当你造成/受到伤害后,你可将一张手牌点数+/-3(最大13,最小1).', //,你本回合使用的下一张点数不大于/小于此牌的基本牌或普通锦囊牌额外结算一次.',
			dqzw_boss_xingxiang: '星象',
			dqzw_boss_xingxiang_info: '锁定技,你视为拥有所有〔<dqzw-tiptext text = dqzw_boss_xingxiang_text>星象</dqzw-tiptext>〕.',
			dqzw_boss_xingxiang_middle: '中宫',
			dqzw_boss_xingxiang_middle_info: '锁定技,你视为拥有其他所有〔<dqzw-tiptext text = dqzw_boss_xingxiang_text>星象</dqzw-tiptext>〕.',
			dqzw_boss_xingxiang_north: '北宫',
			dqzw_boss_xingxiang_north_info: '锁定技,出牌阶段,你每使用或打出两张牌后,摸一张牌.',
			dqzw_boss_xingxiang_west: '西宫',
			dqzw_boss_xingxiang_west_info: '锁定技,出牌阶段,你首次使用普通【杀】造成伤害时,该伤害+2.',
			dqzw_boss_xingxiang_south: '南宫',
			dqzw_boss_xingxiang_south_info: '锁定技,出牌阶段,你首次造成属性伤害时,该伤害+2.',
			dqzw_boss_xingxiang_east: '东宫',
			dqzw_boss_xingxiang_east_info: '锁定技,出牌阶段,你使用的前三张普通锦囊牌多选或少选一个目标.',
			dqzw_boss_xingxiang_text: '<div class = caption><li>北宫</li></div><div class = text style = "display: inline">锁定技,出牌阶段,你每使用或打出两张牌后,摸一张牌.</div><div class = caption><li>西宫</li></div><div class = text style = "display: inline">锁定技,出牌阶段,你首次使用普通【杀】造成伤害时,该伤害+2.</div><div class = caption><li>南宫</li></div><div class = text style = "display: inline">锁定技,出牌阶段,你首次造成属性伤害时,该伤害+2.</div><div class = caption><li>东宫</li></div><div class = text style = "display: inline">锁定技,出牌阶段,你使用的前三张普通锦囊牌多选或少选一个目标.</div>',
			dqzw_boss_dengshen_zhaozhi: '赵直',
			dqzw_boss_mengjie: '梦解',
			dqzw_boss_mengjie_info: '锁定技,未造成体力变动的回合视为<dqzw-tiptext text = "该回合结束时,将所有存活角色的体力值调整为此回合开始时的数值">预演回合</dqzw-tiptext>;每当预演回合结束后,你执行一个你的回合.',
			dqzw_boss_tongguan: '统观',
			dqzw_boss_tongguan_info: '其他角色出牌阶段限一次,其可以失去1点体力视为对一名其他角色造成1点伤害.',
			dqzw_boss_xingmeng: '星梦',
			dqzw_boss_xingmeng_info: '你拥有所有〔<dqzw-tiptext text = dqzw_boss_mengjie_text>占梦</dqzw-tiptext>〕.',
			dqzw_boss_mengjie_duomou: '多谋',
			dqzw_boss_mengjie_duomou_info: '锁定技,每回合限三次,当你于摸牌阶段外不因此技能摸牌时,摸两张牌.',
			dqzw_boss_mengjie_renzhi: '仁智',
			dqzw_boss_mengjie_renzhi_info: '回合结束时,若你于本回合内交给其他角色过牌,你可令一名其他角色将手牌摸至体力上限.',
			dqzw_boss_mengjie_wuyong: '武勇',
			dqzw_boss_mengjie_wuyong_info: '锁定技,每回合限三次,当你不因此效果造成伤害时,对受伤角色造成1点伤害.',
			dqzw_boss_mengjie_gangying: '刚硬',
			dqzw_boss_mengjie_gangying_info: '锁定技,回合结束时,若你本回合回复过体力或手牌数大于体力值,你可令一名角色回复体力至上限.',
			dqzw_boss_mengjie_guojue: '果决',
			dqzw_boss_mengjie_guojue_info: '锁定技,你视为拥有其他所有〔<dqzw-tiptext text = dqzw_boss_mengjie_text>梦解</dqzw-tiptext></div>〕.',
			dqzw_boss_mengjie_text: '<div class = caption><li>多谋</li></div><div class = text style = "display: inline">锁定技,每回合限三次,当你于摸牌阶段外不因此技能摸牌时,摸两张牌.</div><div class = caption><li>仁智</li></div><div class = text style = "display: inline">回合结束时,若你于本回合内交给其他角色过牌,你可令一名其他角色将手牌摸至体力上限.</div><div class = caption><li>武勇</li></div><div class = text style = "display: inline">锁定技,每回合限三次,当你不因此效果造成伤害时,对受伤角色造成1点伤害.</div><div class = caption><li>刚硬</li></div><div class = text style = "display: inline">锁定技,回合结束时,若你本回合回复过体力或手牌数大于体力值,你可令一名角色回复体力至上限.</div>',
			dqzw_boss_tuibian: '蜕变',
			dqzw_boss_tuibian_info: '锁定技,每局游戏限两次,你进入濒死状态时,弃置所有牌,增加X点体力上限,回复所有体力并将手牌补至上限,若此时不是你的回合,则立即结束当前回合(X为当前层数一半,向上取整且至多为10).',
			dqzw_boss_yuancheng: '渊惩',
			dqzw_boss_yuancheng_info: '锁定技,你受到伤害时若来源不为你则判定:若结果不为黑色,则对伤害来源造成一点火焰伤害,否则弃置其所有手牌.',
			dqzw_boss_pozhe: '破折',
			dqzw_boss_pozhe_info: '锁定技,你造成伤害时摸一张牌.',
			dqzw_boss_xige: '曦阁',
			dqzw_boss_xige_info: '锁定技,防止你每回合受到的第一次伤害;回合结束时,你获得一点护甲.',
			dqzw_boss_hunyou: '魂佑',
			dqzw_boss_hunyou_info: '锁定技,你受到的伤害-X.(X为你本回合受伤次数)',
			dqzw_boss_quanbian: '权变',
			dqzw_boss_quanbian_info: '锁定技,你的通常回合结束后,获得一个额外回合.',
			dqzw_boss_weishe: '威慑',
			dqzw_boss_weishe_info: '锁定技,你对敌方角色造成伤害时,令此伤害+1.',
			dqzw_boss_tianxuan: '天选',
			dqzw_boss_tianxuan_info: '锁定技,你视为拥有全部〔<dqzw-tiptext text = dqzw_boss_kuizeng>馈赠</dqzw-tiptext>〕.',
			dqzw_boss_shenkui: '神馈',
			dqzw_boss_shenkui_info: '锁定技,击杀你的角色随机获得一个其未拥有的〔<dqzw-tiptext text = dqzw_boss_kuizeng>馈赠</dqzw-tiptext>〕.',
			dqzw_boss_kuizeng_junheng: '均衡馈赠',
			dqzw_boss_kuizeng_junheng_info: '锁定技,每回合限五次,你不因此技能而获得牌时,摸一张牌.',
			dqzw_boss_kuizeng_siwang: '死亡馈赠',
			dqzw_boss_kuizeng_siwang_info: '锁定技,你使用或打出一张牌后,随机弃置一名敌方角色一张手牌.',
			dqzw_boss_kuizeng_huimie: '毁灭馈赠',
			dqzw_boss_kuizeng_huimie_info: '每回合限五次,你不因此效果造成伤害后,可以对受伤角色造成1点伤害.',
			dqzw_boss_kuizeng_mingyun: '命运馈赠',
			dqzw_boss_kuizeng_mingyun_info: '锁定技,每轮限一次,你的通常回合结束后,获得一个额外回合.',
			dqzw_boss_kuizeng: `馈赠效果:<br><div class = caption><li>均衡馈赠</li></div><div class = text style = "display: inline">锁定技,每回合限五次,你不因此技能而获得牌时,摸一张牌.</div><div class = caption><li>死亡馈赠</li></div><div class = text style = "display: inline">锁定技,你使用或打出一张牌后,随机弃置一名敌方角色一张手牌.</div><div class = caption><li>毁灭馈赠</li></div><div class = text style = "display: inline">每回合限五次,你不因此效果造成伤害后,可以对受伤角色造成1点伤害.</div><div class = caption><li>命运馈赠</li><div class = text style = "display: inline">锁定技,每轮限一次,你的通常回合结束后,获得一个额外回合.</div>`,
			//挑战难度
			dqzw_boss_checkpointLevel_dengshen_1_title: '<span style = "color: hsl(289, 91%, 59%)">虚空入侵</span>',
			dqzw_boss_checkpointLevel_dengshen_1: '<span style = "font-size: 65%">第一赛段</span>',
			dqzw_boss_checkpointLevel_dengshen_1_info: '这是文本这是文本这是文本',
			dqzw_boss_activity_springFestival_yanhua: '烟花',
			dqzw_boss_activity_springFestival_yanhua_info: '出牌阶段,对所有角色使用,依次展示与其上次造成伤害的牌牌名相同的牌,否则受到1点火焰伤害.',
			dqzw_boss_activity_springFestival_tianzhu: '天烛',
			dqzw_boss_activity_springFestival_tianzhu_info: '出牌阶段,对所有敌方角色使用,其下一张伤害牌必须唯一指定同阵营角色,且于结算完成后受到2点火焰伤害.(若为BOSS效果改为摸三张牌并对所有敌方角色造成2点火焰伤害)',
			dqzw_boss_activity_springFestival_baozhu: '爆竹',
			dqzw_boss_activity_springFestival_baozhu_info: '出牌阶段开始时,你对一名角色使用,观看其手牌并弃置其中所有黑色牌;若其没有黑色牌,你调离之.',
		},
	};
	lib.dqzw_buff_list.forEach(item => {
		if (item.skill !== false && info.skill[item.id] && !info.translate[item.id]) info.translate[item.id] = (lib.skill[item.skill] && lib.translate[item.skill]) || item.name;
	});
	let config = {
		translate: '大权在握',
		config: {
			update(config, map) {
				let connect = _status.connectMode ? 'connect_' : '',
					get = (type, name) => {
						return eval(`${type}[connect + name]`) || { hide: () => 0, show: () => 0 };
					},
					modes = Object.keys(lib.dqzw_boss_modes),
					mode = get('config', 'dqzw_mode'),
					exec = {
						guihua: () => 0,
						dengshen: () => 0,
					};
				for (var i in map) {
					let belong = modes.find(name => i.indexOf(connect + name) == 0);
					if (belong && mode != belong) map[i].hide();
					else map[i].show();
				}
				if (exec[mode]) exec[mode]();
			},
			dqzw_mode: {
				name: '模式选择',
				init: 'guihua',
				item: lib.dqzw_boss_modes,
				onsave() {
					game.dqzw_updateRoomConfig();
				},
				forced: true,
				restart: true,
			},
			guihua_player_number: {
				name: '游戏人数',
				init: 3,
				item: {
					1: '单人',
					2: '双人',
					3: '三人',
				},
				onsave: result => {
					lib.configOL.player_number = result;
					if (_status.waitingForPlayer) {
						lib.configOL.number = Number(result);
						game.saveConfig('player_number', result, 'dqzw_guihuaxishuang');
						game.dqzw_updateRoomConfig({ number: result });
						game.dqzw_updateConnectPlayers();
					}
				},
				forced: true,
				restart: true,
			},
			guihua_group_skill: {
				name: '启用势力技',
				init: true,
			},
			dengshen_player_number: {
				name: '游戏人数',
				intro: 'Boss数量为游戏人数/3(向上取整)',
				init: 3,
				item: {
					1: '单人',
					2: '双人',
					3: '三人',
					4: '四人',
					5: '五人',
					6: '六人',
				},
				onsave: result => {
					lib.configOL.player_number = result;
					if (_status.waitingForPlayer) {
						lib.configOL.number = Number(result);
						game.saveConfig('player_number', result, 'dqzw_guihuaxishuang');
						game.dqzw_updateRoomConfig({ number: result });
						game.dqzw_updateConnectPlayers();
					}
				},
				forced: true,
				restart: true,
			},
			dengshen_double_character: {
				name: '允许双将',
				init: true,
				forced: true,
				restart: true,
			},
			card_list_multiple: {
				name: '牌堆卡牌数',
				init: '5',
				item: {
					1: '默认',
					2: '两倍',
					3: '三倍',
					4: '四倍',
					5: '五倍',
					8: '八倍',
					10: '十倍',
				},
				forced: true,
				restart: true,
			},
			choose_character_number: {
				name: '候选武将数',
				init: 6,
				item: {
					3: '三',
					4: '四',
					5: '五',
					6: '六',
					7: '七',
					8: '八',
					9: '九',
				},
				forced: true,
				restart: true,
			},
			player_initial_handcard_number: {
				name: '玩家初始手牌数',
				init: 4,
				item: {
					2: '二',
					3: '三',
					4: '四',
					5: '五',
					6: '六',
					7: '七',
					8: '八',
				},
				forced: true,
				restart: true,
			},
			guihua_kill_draw: {
				name: '击杀小兵摸牌',
				init: 'disabled',
				item: {
					disabled: '否',
					1: '一',
					2: '二',
					3: '三',
					4: '四',
					5: '五',
				},
				forced: true,
				restart: true,
			},
			choose_character_style: {
				name: '选将框样式',
				init: 'default',
				item: {
					default: '默认',
					decade: '十周年',
					//mobile: '移动版',
					online: 'OL',
				},
				forced: true,
				restart: true,
			},
			free_choose: {
				name: '自由选将',
				init: false,
				forced: true,
				restart: true,
				connect_banned: true,
			},
			mode_connect_free_choose: {
				name: '联机自由选将',
				init: false,
				intro: '开启后所有玩家都可以自由选将,建议测试或与好友游玩时开启',
				forced: true,
				restart: true,
				connect: true,
			},
			four_assign: {
				name: '代替队友选将',
				init: false,
				restart: true,
				forced: true,
				connect_banned: true,
			},
			preload: {
				name: '预加载',
				intro: '游戏启动时就加载图片,优化游戏内体验',
				init: true,
				forced: true,
				connect_banned: true,
			},
			single_control: {
				name: '代替队友行动',
				init: false,
				restart: true,
				forced: true,
				connect_banned: true,
				onsave: bool => {
					game.saveConfig('single_control', bool, 'boss');
				},
			},
			random_weather: {
				name: '随机天气',
				intro: '每关开始时随机生成一种天气',
				init: false,
				restart: true,
				forced: true,
			},
			room_password: {
				name: '房间密码',
				init: '',
				input: true,
				forced: true,
				connect: true,
				onblur() {
					let password = this.innerHTML.replace(/[^\d]/g, '');
					if (password) {
						password = Number(password);
						if (isNaN(password)) password = '';
						password = String(password).slice(0, 12);
						if (_status._dialog_func_exec)
							_status._dialog_func_exec(password => {
								let func = password => {
									if (ui.dqzw_boss_mode_start_currentRoomPassword) ui.dqzw_boss_mode_start_currentRoomPassword.firstElementChild.innerHTML = password;
								};
								func(password);
								broadcast(func, password);
							}, password);
						game.roomPassword = password;
						game.saveConfig('connect_room_password', password, 'dqzw_guihuaxishuang');
					}
					this.innerHTML = password;
				},
			},
			change_card: {
				name: '开启手气卡',
				init: 'disabled',
				forced: true,
				item: {
					disabled: '禁用',
					once: '一次',
					twice: '两次',
					quintic: '五次',
					eight: '八次',
					twelve: '十二次',
					unlimited: '无限',
				},
			},
			player_enter_game: {
				name: '每关开始视为游戏开始',
				intro: '每关开始时触发玩家时机为游戏开始时的技能',
				init: false,
				forced: true,
				restart: true,
			},
			mode_exclusive_layout: {
				name: '右手布局',
				intro: '游戏布局改为手杀,玩家武将牌显示在右侧(可能不兼容UI扩展,在装有部分UI扩展时默认关闭)',
				init: false,
				forced: true,
				restart: true,
			},
			boss_character_list: {
				name: '编辑BOSS将池',
				clear: true,
				onclick: characterListSet,
			},
		},
	};
	delete window.dqzw_extension_name;
	//————使该模式可联机(需解除联机限制)————//
	//将该模式添加到常规模式中
	lib.config.all.stockmode.add('dqzw_guihuaxishuang');
	//该模式联机的设置,必须
	let connect_config = {};
	for (let name in config.config) {
		if (config.config[name].connect_banned) continue;
		connect_config[name == 'update' ? name : 'connect_' + name] = config.config[name];
		if (config.config[name].connect && !_status.connectMode) delete config.config[name];
	}
	//导入游戏模式
	game.addMode('dqzw_guihuaxishuang', info, config);
	lib.mode.dqzw_guihuaxishuang.splash = 'ext:大权在握/image/mode/dqzw_guihuaxishuang.jpg';
	lib.mode.dqzw_guihuaxishuang._content = info;
	lib.mode.dqzw_guihuaxishuang.connect = connect_config;
	// 自定义HTML标签
	if ('customElements' in window) {
		window.customElements.define(
			'dqzw-font',
			class extends HTMLElement {
				static get observedAttributes() {
					return ['color', 'back'];
				}
				update() {
					let color = this.getAttribute('color'),
						back = this.getAttribute('back');
					if (back) {
						Object.assign(this.style, {
							background: back,
							backgroundClip: 'text',
							webkitBackgroundClip: 'text',
							color: 'transparent',
						});
					} else this.style.color = color;
				}
				attributeChangedCallback() {
					this.update();
				}
				constructor() {
					super();
					this.update();
				}
			}
		);
	}
})();

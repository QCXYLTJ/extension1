import { lib, game, ui, get, ai, _status } from '../../noname.js';
Reflect.defineProperty(game, 'chooseCharacterOL', {
	get: () =>
		function () {
			if (_status.mode == 'purple') {
				game.chooseCharacterPurpleOL();
				return;
			} else if (_status.mode == 'stratagem') {
				game.chooseCharacterStratagemOL();
				return;
			}
			var next = game.createEvent('chooseCharacter');
			next.setContent(function () {
				'step 0';
				ui.arena.classList.add('choose-character');
				var i;
				var identityList;
				if (_status.mode == 'zhong') {
					event.zhongmode = true;
					identityList = ['zhu', 'zhong', 'mingzhong', 'nei', 'fan', 'fan', 'fan', 'fan'];
				} else {
					identityList = get.identityList(game.players.length);
				}
				identityList.randomSort();
				game.players.forEach((npc, i, arr) => {
					const identity = identityList[i];
					npc.identity = identity;
					npc.setIdentity('cai');
					npc.node.identity.classList.add('guessing');
					if (event.zhongmode) {
						if (identity == 'mingzhong') {
							game.zhu = npc;
						} else if (identity == 'zhu') {
							game.zhu2 = npc;
						}
					} else {
						if (identity == 'zhu') {
							game.zhu = npc;
						}
					}
					npc.identityShown = false;
				});//QQQ
				if (lib.configOL.special_identity && !event.zhongmode && game.players.length == 8) {
					var map = {};
					var zhongs = game.filterPlayer(function (current) {
						return current.identity == 'zhong';
					});
					var fans = game.filterPlayer(function (current) {
						return current.identity == 'fan';
					});
					if (fans.length >= 1) {
						map.identity_zeishou = fans.randomRemove();
					}
					if (zhongs.length > 1) {
						map.identity_dajiang = zhongs.randomRemove();
						map.identity_junshi = zhongs.randomRemove();
					} else if (zhongs.length == 1) {
						if (Math.random() < 0.5) {
							map.identity_dajiang = zhongs.randomRemove();
						} else {
							map.identity_junshi = zhongs.randomRemove();
						}
					}
					game.broadcastAll(
						function (zhu, map) {
							for (var i in map) {
								map[i].special_identity = i;
							}
						},
						game.zhu,
						map
					);
					event.special_identity = map;
				}
				game.zhu.setIdentity();
				game.zhu.identityShown = true;
				game.zhu.isZhu = game.zhu.identity == 'zhu';
				game.zhu.node.identity.classList.remove('guessing');
				game.me.setIdentity();
				game.me.node.identity.classList.remove('guessing');
				if (game.me.special_identity) {
					game.me.node.identity.firstChild.innerHTML = get.translation(game.me.special_identity + '_bg');
				}
				for (var i = 0; i < game.players.length; i++) {
					game.players[i].send(
						function (zhu, zhuid, me, identity) {
							for (var i in lib.playerOL) {
								lib.playerOL[i].setIdentity('cai');
								lib.playerOL[i].node.identity.classList.add('guessing');
							}
							zhu.identityShown = true;
							zhu.identity = zhuid;
							if (zhuid == 'zhu') zhu.isZhu = true;
							zhu.setIdentity();
							zhu.node.identity.classList.remove('guessing');
							me.setIdentity(identity);
							me.node.identity.classList.remove('guessing');
							if (me.special_identity) {
								me.node.identity.firstChild.innerHTML = get.translation(me.special_identity + '_bg');
							}
							ui.arena.classList.add('choose-character');
						},
						game.zhu,
						game.zhu.identity,
						game.players[i],
						game.players[i].identity
					);
				}
				var list;
				var list2 = [];
				var list3 = [];
				var list4 = [];
				event.list = [];
				event.list2 = [];
				var libCharacter = {};
				for (var i = 0; i < lib.configOL.characterPack.length; i++) {
					var pack = lib.characterPack[lib.configOL.characterPack[i]];
					for (var j in pack) {
						// if(j=='zuoci') continue;
						if (lib.character[j]) libCharacter[j] = lib.character[j];
					}
				} //筛选connect_characters
				_status.QQQlist = [];
				for (var i of lib.configOL.characterPack) {
					if (['standard', 'refresh', 'shenhua', 'yijiang', 'sp', 'onlyOL', 'yingbian', 'clan', 'xinghuoliaoyuan', 'huicui', 'xianding', 'sp2', 'extra', 'mobile', 'shiji', 'sb', 'tw', 'collab', 'jsrg', 'offline', 'old', 'diy', 'ddd', 'key', 'yxs', 'hearth', 'gwent', 'mtg', 'ow', 'swd', 'gujian', 'xianjian', 'sixiang', 'newjiang'].includes(i)) continue;
					for (var j in lib.characterPack[i]) {
						_status.QQQlist.add(j);
					}
				}
				for (i in lib.characterReplace) {
					var ix = lib.characterReplace[i];
					for (var j = 0; j < ix.length; j++) {
						if (!libCharacter[ix[j]] || lib.filter.characterDisabled(ix[j])) ix.splice(j--, 1);
					}
					if (ix.length) {
						event.list.push(i);
						event.list2.push(i);
						list4.addArray(ix);
						var bool = false;
						for (var j of ix) {
							if (libCharacter[j].isZhugong) {
								bool = true;
								break;
							}
						}
						(bool ? list2 : list3).push(i);
					}
				}
				game.broadcast(function (list) {
					for (var i in lib.characterReplace) {
						var ix = lib.characterReplace[i];
						for (var j = 0; j < ix.length; j++) {
							if (!list.includes(ix[j])) ix.splice(j--, 1);
						}
					}
				}, list4);
				for (i in libCharacter) {
					if (list4.includes(i)) continue;
					if (lib.filter.characterDisabled(i, libCharacter)) continue;
					event.list.push(i);
					event.list2.push(i);
					list4.push(i);
					if (libCharacter[i].isZhugong) {
						list2.push(i);
					} else {
						list3.push(i);
					}
				} //筛选禁将
				_status.characterlist = list4.slice(0);
				if (event.zhongmode) {
					list = event.list.randomGets(8);
				} else {
					var getZhuList = function (list2) {
						var limit_zhu = lib.configOL.limit_zhu;
						if (!limit_zhu || limit_zhu == 'off') return list2.slice(0).sort(lib.sort.character);
						if (limit_zhu != 'group') {
							var num = parseInt(limit_zhu) || 6;
							return list2.randomGets(num).sort(lib.sort.character);
						}
						var getGroup = function (name) {
							if (lib.characterReplace[name]) return lib.character[lib.characterReplace[name][0]][1];
							return lib.character[name][1];
						};
						var list2x = list2.slice(0);
						list2x.randomSort();
						for (var i = 0; i < list2x.length; i++) {
							for (var j = i + 1; j < list2x.length; j++) {
								if (getGroup(list2x[i]) == getGroup(list2x[j])) {
									list2x.splice(j--, 1);
								}
							}
						}
						list2x.sort(lib.sort.character);
						return list2x;
					};
					list = getZhuList(list2).concat(list3.randomGets(5));
				}
				var next = game.zhu.chooseButton(true);
				next.set('selectButton', lib.configOL.double_character ? 2 : 1);
				next.set('createDialog', ['选择角色', [_status.QQQlist.randomGets(20), 'characterx']]);
				next.set('ai', function (button) {
					return Math.random();
				}); //选将
				('step 1');
				if (!game.zhu.name) {
					game.zhu.init(result.links[0], result.links[1]);
				}
				event.list.remove(get.sourceCharacter(game.zhu.name1));
				event.list.remove(get.sourceCharacter(game.zhu.name2));
				event.list2.remove(get.sourceCharacter(game.zhu.name1));
				event.list2.remove(get.sourceCharacter(game.zhu.name2));
				if (game.players.length > 4) {
					if (!game.zhu.isInitFilter('noZhuHp')) {
						game.zhu.maxHp++;
						game.zhu.hp++;
						game.zhu.update();
					}
				}
				game.broadcast(
					function (zhu, name, name2, addMaxHp) {
						if (!zhu.name) {
							zhu.init(name, name2);
						}
						if (addMaxHp) {
							if (!zhu.isInitFilter('noZhuHp')) {
								zhu.maxHp++;
								zhu.hp++;
								zhu.update();
							}
						}
					},
					game.zhu,
					result.links[0],
					result.links[1],
					game.players.length > 4
				);
				if (game.zhu.group == 'shen' && !game.zhu.isUnseen(0)) {
					var list = ['wei', 'shu', 'wu', 'qun', 'jin', 'key'];
					for (var i = 0; i < list.length; i++) {
						if (!lib.group.includes(list[i])) list.splice(i--, 1);
						else list[i] = ['', '', 'group_' + list[i]];
					}
					game.zhu.chooseButton(['请选择神武将的势力', [list, 'vcard']], true).set('ai', function () {
						return Math.random();
					});
				} else if (get.is.double(game.zhu.name1)) {
					game.zhu._groupChosen = true;
					var list = get.is.double(game.zhu.name1, true);
					for (var i = 0; i < list.length; i++) {
						if (!lib.group.includes(list[i])) list.splice(i--, 1);
						else list[i] = ['', '', 'group_' + list[i]];
					}
					game.zhu.chooseButton(['请选择你的势力', [list, 'vcard']], true).set('ai', function () {
						return Math.random();
					});
				} else event.goto(3);
				('step 2');
				var name = result.links[0][2].slice(6);
				game.zhu.changeGroup(name);
				('step 3');
				var list = [];
				var selectButton = lib.configOL.double_character ? 2 : 1;
				var num,
					num2 = 0;
				if (event.zhongmode) {
					num = 6;
				} else {
					num = Math.floor(event.list.length / (game.players.length - 1));
					if (num > 5) {
						num = 5;
					}
					num2 = event.list.length - num * (game.players.length - 1);
					if (lib.configOL.double_nei) {
						num2 = Math.floor(num2 / 2);
					}
					if (num2 > 2) {
						num2 = 2;
					}
				}
				for (var i = 0; i < game.players.length; i++) {
					if (game.players[i] != game.zhu) {
						var num3 = 0;
						if (event.zhongmode) {
							if (game.players[i].identity == 'nei' || game.players[i].identity == 'zhu') {
								num3 = 2;
							}
						} else {
							if (game.players[i].identity == 'nei') {
								num3 = num2;
							}
						}
						var str = '选择角色';
						if (game.players[i].special_identity) {
							str += '(' + get.translation(game.players[i].special_identity) + ')';
						}
						list.push([game.players[i], [str, [_status.QQQlist.randomGets(20), 'characterx']], selectButton, true]);
					}
				} //选将
				game.me.chooseButtonOL(list, function (player, result) {
					if (game.online || player == game.me) player.init(result.links[0], result.links[1]);
				});
				('step 4');
				var shen = [];
				for (var i in result) {
					if (result[i] && result[i].links) {
						for (var j = 0; j < result[i].links.length; j++) {
							event.list2.remove(get.sourceCharacter(result[i].links[j]));
						}
					}
				}
				for (var i in result) {
					if (result[i] == 'ai') {
						result[i] = event.list2.randomRemove(lib.configOL.double_character ? 2 : 1);
						for (var j = 0; j < result[i].length; j++) {
							var listx = lib.characterReplace[result[i][j]];
							if (listx && listx.length) result[i][j] = listx.randomGet();
						}
					} else {
						result[i] = result[i].links;
					}
					if (get.is.double(result[i][0]) || (lib.character[result[i][0]] && lib.character[result[i][0]].group == 'shen' && !lib.character[result[i][0]].hasHiddenSkill)) shen.push(lib.playerOL[i]);
				}
				event.result2 = result;
				if (shen.length) {
					var list = ['wei', 'shu', 'wu', 'qun', 'jin', 'key'];
					for (var i = 0; i < list.length; i++) {
						if (!lib.group.includes(list[i])) list.splice(i--, 1);
						else list[i] = ['', '', 'group_' + list[i]];
					}
					for (var i = 0; i < shen.length; i++) {
						if (get.is.double(result[shen[i].playerid][0])) {
							shen[i]._groupChosen = true;
							shen[i] = [
								shen[i],
								[
									'请选择你的势力',
									[
										get.is.double(result[shen[i].playerid][0], true).map(function (i) {
											return ['', '', 'group_' + i];
										}),
										'vcard',
									],
								],
								1,
								true,
							];
						} else shen[i] = [shen[i], ['请选择神武将的势力', [list, 'vcard']], 1, true];
					}
					game.me
						.chooseButtonOL(shen, function (player, result) {
							if (player == game.me) player.changeGroup(result.links[0][2].slice(6), false, false);
						})
						.set('switchToAuto', function () {
							_status.event.result = 'ai';
						})
						.set('processAI', function () {
							return {
								bool: true,
								links: [_status.event.dialog.buttons.randomGet().link],
							};
						});
				} else event._result = {};
				('step 5');
				if (!result) result = {};
				for (var i in result) {
					if (result[i] && result[i].links) result[i] = result[i].links[0][2].slice(6);
					else if (result[i] == 'ai')
						result[i] = (function () {
							var player = lib.playerOL[i];
							var list = ['wei', 'shu', 'wu', 'qun', 'jin', 'key'];
							for (var ix = 0; ix < list.length; ix++) {
								if (!lib.group.includes(list[ix])) list.splice(ix--, 1);
							}
							if (_status.mode != 'zhong' && game.zhu && game.zhu.group) {
								if (['re_zhangjiao', 'liubei', 're_liubei', 'caocao', 're_caocao', 'sunquan', 're_sunquan', 'zhangjiao', 'sp_zhangjiao', 'caopi', 're_caopi', 'liuchen', 'caorui', 'sunliang', 'sunxiu', 'sunce', 're_sunben', 'ol_liushan', 're_liushan', 'key_akane', 'dongzhuo', 're_dongzhuo', 'ol_dongzhuo', 'jin_simashi', 'caomao'].includes(game.zhu.name)) return game.zhu.group;
								if (game.zhu.name == 'yl_yuanshu') {
									if (player.identity == 'zhong') list.remove('qun');
									else return 'qun';
								}
								if (['sunhao', 'xin_yuanshao', 're_yuanshao', 're_sunce', 'ol_yuanshao', 'yuanshu', 'jin_simazhao', 'liubian'].includes(game.zhu.name)) {
									if (player.identity != 'zhong') list.remove(game.zhu.group);
									else return game.zhu.group;
								}
							}
							return list.randomGet();
						})();
				}
				var result2 = event.result2;
				game.broadcast(
					function (result, result2) {
						for (var i in result) {
							if (!lib.playerOL[i].name) {
								lib.playerOL[i].init(result[i][0], result[i][1]);
							}
							if (result2[i] && result2[i].length) lib.playerOL[i].changeGroup(result2[i], false, false);
						}
						setTimeout(function () {
							ui.arena.classList.remove('choose-character');
						}, 500);
					},
					result2,
					result
				);
				for (var i in result2) {
					if (!lib.playerOL[i].name) {
						lib.playerOL[i].init(result2[i][0], result2[i][1]);
					}
					if (result[i] && result[i].length) lib.playerOL[i].changeGroup(result[i], false, false);
				}
				if (event.special_identity) {
					for (var i in event.special_identity) {
						game.zhu.addSkill(i);
					}
				}
				for (var i = 0; i < game.players.length; i++) {
					_status.characterlist.remove(game.players[i].name);
					_status.characterlist.remove(game.players[i].name1);
					_status.characterlist.remove(game.players[i].name2);
				}
				setTimeout(function () {
					ui.arena.classList.remove('choose-character');
				}, 500);
			});
		},
	set() { },
});
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '星舟扩展',
		content(config, pack) {
			//—————————————————————————————————————————————————————————————————————————————获取卡牌历史相关自创函数
			const cardfunc = function () {
				game.isxuni = function (event) {
					if (!event.cards || !event.card) {
						return false;
					}
					if (event.cards.length == 1 && event.cards[0].name == event.card.name) {
						return true;
					}
					return null;
				};//事件卡牌是否为虚拟牌或转化牌
				game.center = function () {
					const list = [];
					game.countPlayer2(function (current) {
						current.getHistory('lose', function (evt) {
							if (evt.position == ui.discardPile) list.addArray(evt.cards);
						});
					});
					game.getGlobalHistory('cardMove', function (evt) {
						if (evt.name == 'cardsDiscard') list.addArray(evt.cards);
					});
					return list;
				}; //获取本回合进入弃牌堆的牌
				game.lose = function () {
					const list = [];
					for (const npc of game.players.concat(game.dead)) {
						const his = npc.actionHistory;
						const evt = his[his.length - 1];
						for (const e of evt.lose) {
							if (e.cards?.length) {
								list.addArray(e.cards);
							}
						}
					}
					return list;
				}; //获取本回合失去过的牌
				game.xunshi = function (card) {
					const name = (typeof card == 'string') ? card : card.name;
					const info = lib.card[name];
					if (!info) {
						console.warn(name + '没有卡牌info');
						return false;
					}
					if (info.notarget || info.selectTarget == undefined) return false;
					if (Array.isArray(info.selectTarget)) {
						if (info.selectTarget[0] < 0) return !info.toself;
						return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
					} else {
						if (info.selectTarget < 0) return !info.toself;
						return info.selectTarget != 1;
					}
				}; //多目标牌检测
			};
			cardfunc();
			//—————————————————————————————————————————————————————————————————————————————技能相关自创函数
			const jineng = function () {
				lib.element.player.qhasSkill = function (s) {
					const player = this;
					return player.GS().includes(s);
				};//武将是否拥有某技能
				lib.element.player.GS = function () {
					const player = this;
					const skills = player.skills.slice();
					for (const i of Array.from(player.node.equips.childNodes)) {
						if (Array.isArray(lib.card[i.name].skills)) {
							skills.addArray(lib.card[i.name].skills);
						}
					}
					for (const i in player.additionalSkills) {
						if (Array.isArray(player.additionalSkills[i])) {
							skills.addArray(player.additionalSkills[i]);
						} else if (typeof player.additionalSkills[i] == 'string') {
							skills.add(player.additionalSkills[i]);
						}
					}
					skills.addArray(Object.keys(player.tempSkills));
					skills.addArray(player.hiddenSkills);
					skills.addArray(player.invisibleSkills);
					return skills;
				}; //获取武将所有技能函数
				lib.element.player.GAS = function () {
					const player = this;
					const skills = player.skills.slice();
					for (const i in player.additionalSkills) {
						if (Array.isArray(player.additionalSkills[i])) {
							skills.addArray(player.additionalSkills[i]);
						} else if (typeof player.additionalSkills[i] == 'string') {
							skills.add(player.additionalSkills[i]);
						}
					}
					return skills;
				}; //获取武将的武将牌上技能函数
				lib.element.player.GES = function () {
					const player = this;
					const skills = [];
					for (const i of Array.from(player.node.equips.childNodes)) {
						if (Array.isArray(lib.card[i.name].skills)) {
							skills.addArray(lib.card[i.name].skills);
						}
					}
					return skills;
				}; //获取武将装备技能函数
				lib.element.player.GTS = function () {
					const player = this;
					return Object.keys(player.tempSkills);
				}; //获取武将临时技能函数
				lib.element.player.RS = function (skillx) {
					const player = this;
					if (Array.isArray(skillx)) {
						for (const i of skillx) {
							player.RS(i);
						}
					} else {
						player.skills.remove(skillx);
						player.hiddenSkills.remove(skillx);
						player.invisibleSkills.remove(skillx);
						delete player.tempSkills[skillx];
						for (var i in player.additionalSkills) {
							player.additionalSkills[i].remove(skillx);
						}
						player.checkConflict(skillx);
						player.RST(skillx);
						if (lib.skill.global.includes(skillx)) {
							lib.skill.global.remove(skillx);
							delete lib.skill.globalmap[skillx];
							for (var i in lib.hook.globalskill) {
								lib.hook.globalskill[i].remove(skillx);
							}
						}
					}
					return player;
				}; //移除技能函数
				lib.element.player.RST = function (skills) {
					const player = this;
					if (typeof skills == 'string') {
						skills = [skills];
					}
					game.expandSkills(skills);
					for (const skillx of skills) {
						player.initedSkills.remove(skillx);
						for (var i in lib.hook) {
							if (Array.isArray(lib.hook[i]) && lib.hook[i].includes(skillx)) {
								try {
									delete lib.hook[i];
								} catch (e) {
									console.log(i + 'lib.hook不能delete');
								}
							}
						}
						for (var i in lib.hook.globalskill) {
							if (lib.hook.globalskill[i].includes(skillx)) {
								lib.hook.globalskill[i].remove(skillx);
								if (lib.hook.globalskill[i].length == 0) {
									delete lib.hook.globalskill[i];
								}
							}
						}
					}
					return player;
				}; //移除技能时机函数
				lib.element.player.CS = function () {
					const player = this;
					const skill = player.GS();
					game.expandSkills(skill);
					player.skills = [];
					player.tempSkills = {};
					player.initedSkills = [];
					player.invisibleSkills = [];
					player.hiddenSkills = [];
					player.additionalSkills = {};
					for (const key in lib.hook) {
						if (key.startsWith(player.playerid)) {
							try {
								delete lib.hook[key];
							} catch (e) {
								console.log(key + 'lib.hook不能delete');
							}
						}
					}
					for (const hook in lib.hook.globalskill) {
						for (const i of skill) {
							if (lib.hook.globalskill[hook].includes(i)) {
								lib.hook.globalskill[hook].remove(i);
							}
						}
					}
					return player;
				}; //清空所有技能函数
				lib.element.player.DS = function () {
					const player = this;
					const skill = player.GS();
					game.expandSkills(skill);
					player._hookTrigger = ['QQQ_fengjin'];
					player.storage.skill_blocker = ['QQQ_fengjin'];
					for (const i of skill) {
						player.disabledSkills[i] = 'QQQ';
						player.storage[`temp_ban_${i}`] = true;
					}
					return player;
				}; //失效所有技能函数
				lib.skill.QQQ_fengjin = {
					hookTrigger: {
						block: (event, player, triggername, skill) => true,
					},
					skillBlocker(skill, player) {
						const info = lib.skill[skill];
						return info && !info.kangxing;
					},
				};
			}; //技能相关自创函数
			jineng();
			game.GIF0 = function (Q, time) {
				var img = document.createElement('img');
				img.src = 'extension/星舟扩展/GIF/' + Q + '.gif';
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
			lib.group.addArray(['ltny', 'orgn', 'shenchi', 'terra']);
			lib.ltny = function () {
				var targets = game.players.filter((i) => i.group == 'ltny');
				return targets || [];
			};
			lib.skill.twwuhun.content = function () {
				'step 0';
				player
					.judge(function (card) {
						var name = card.name;
						if (name == 'tao' || name == 'taoyuan') return -25;
						return 15;
					})
					.set('forceDie', true).judge2 = function (result) {
						return result.bool;
					};
				('step 1');
				var num = game.countPlayer(function (current) {
					return current != player && current.hasMark('twwuhun');
				});
				if (result.bool && num > 0) {
					player
						.chooseTarget('请选择【武魂】的目标', '选择至少一名拥有<梦魇>标记的角色.令这些角色各自失去X点体力(X为其<梦魇>标记数)', true, [1, num], function (card, player, target) {
							return target != player && target.hasMark('twwuhun');
						})
						.set('forceDie', true)
						.set('ai', function (target) {
							return -get.attitude(_status.event.player, target);
						});
				} else event.finish();
				('step 2');
				var targets = result.targets.sortBySeat();
				player.line(targets, 'fire');
				event.targets = targets;
				('step 3');
				var target = targets.shift();
				if (target.hasSkill('mstaiqing') && !target.hasSkill('mstaiqing_defended')) {
					target.addSkill('mstaiqing_defended');
				} else {
					var num = target.countMark('twwuhun');
					if (num > 0) target.loseHp(num);
				}
				if (targets.length) event.redo();
			};
			lib.skill.new_wuhun.subSkill = {
				die: {
					audio: 'wuhun2',
					trigger: { player: 'die' },
					filter(event, player) {
						return game.hasPlayer(function (current) {
							return current != player && current.hasMark('new_wuhun');
						});
					},
					forced: true,
					forceDie: true,
					content() {
						'step 0';
						var num = 0;
						for (var i = 0; i < game.players.length; i++) {
							var current = game.players[i];
							if (current != player && current.countMark('new_wuhun') > num) {
								num = current.countMark('new_wuhun');
							}
						}
						player
							.chooseTarget(true, '请选择【武魂】的目标', '令其进行判定,若判定结果不为【桃】或【桃园结义】,则其死亡', function (card, player, target) {
								return target != player && target.countMark('new_wuhun') == _status.event.num;
							})
							.set('ai', function (target) {
								return -get.attitude(_status.event.player, target);
							})
							.set('forceDie', true)
							.set('num', num);
						('step 1');
						if (result.targets?.length) {
							var target = result.targets[0];
							event.target = target;
							player.line(target, { color: [255, 255, 0] });
						}
						('step 2');
						if (target.hasSkill('mstaiqing') && !target.hasSkill('mstaiqing_defended')) {
							target.addSkill('mstaiqing_defended');
							event.finish();
						} else {
							target.judge(function (card) {
								if (['tao', 'taoyuan'].includes(card.name)) return 10;
								return -10;
							}).judge2 = function (result) {
								return result.bool == false ? true : false;
							};
						}
						('step 3');
						if (!result.bool) target.die();
					},
				},
			};
			lib.skill.duanchang.content = function () {
				var target = trigger.source;
				if (target.hasSkill('mstaiqing') && !target.hasSkill('mstaiqing_defended')) {
					target.addSkill('mstaiqing_defended');
				} else {
					trigger.source.clearSkills();
				}
			};
			lib.skill.dcjuexiang.content = function () {
				'step 0';
				if (trigger.source && trigger.source.isIn()) {
					var target = trigger.source;
					if (target.hasSkill('mstaiqing') && !target.hasSkill('mstaiqing_defended')) {
						target.addSkill('mstaiqing_defended');
					} else {
						trigger.source.discard(trigger.source.getCards('e'));
						trigger.source.loseHp();
					}
				}
				('step 1');
				player
					.chooseTarget('绝响:是否令一名其他角色获得技能〖残韵〗？', lib.filter.notMe)
					.set('ai', function (target) {
						return get.attitude(_status.event.player, target);
					})
					.set('forceDie', true);
				('step 2');
				if (result.targets?.length) {
					var target = result.targets[0];
					player.line(target, 'thunder');
					target.addSkills('dccanyun');
				}
			};
			lib.skill.new_juexiang.content = function () {
				'step 0';
				if (trigger.source) {
					var target = trigger.source;
					if (target.hasSkill('mstaiqing') && !target.hasSkill('mstaiqing_defended')) {
						target.addSkill('mstaiqing_defended');
					} else {
						trigger.source.discard(trigger.source.getCards('e'));
						trigger.source.loseHp();
					}
				}
				('step 1');
				player
					.chooseTarget('【绝响】:是否令一名其他角色获得技能〖残韵〗？', function (card, player, target) {
						return target != player;
					})
					.set('ai', function (target) {
						var att = get.attitude(_status.event.player, target);
						if (target.countCards('ej', { suit: 'club' })) att = att * 2;
						return 10 + att;
					})
					.set('forceDie', true);
				('step 2');
				if (result.targets?.length) {
					var target = result.targets[0];
					event.target = target;
					player.line(target, 'thunder');
					target.addSkills('new_canyun');
					target
						.discardPlayerCard('是否弃置自己区域内的一张♣️️牌,获得技能〖绝响〗？', target, 'hej')
						.set('ai', function (button) {
							if (get.position(button.link) == 'j') return 100 + get.value(button.link);
							return 100 - get.value(button.link);
						})
						.set('visible', true)
						.set('filterButton', function (button) {
							return button.link.suit == 'club';
						});
				} else event.finish();
				('step 3');
				if (result.bool) target.addSkills('new_juexiang');
			};
			lib.skill.huilei.content = function () {
				var target = trigger.source;
				if (target.hasSkill('mstaiqing') && !target.hasSkill('mstaiqing_defended')) {
					target.addSkill('mstaiqing_defended');
				} else {
					trigger.source.discard(trigger.source.getCards('he'));
				}
			};
			lib.skill.yechou.content = function () {
				'step 0';
				player
					.chooseTarget(get.prompt2('yechou'), function (card, player, target) {
						return player != target && target.getDamagedHp() > 1;
					})
					.set('forceDie', true)
					.set('ai', function (target) {
						let att = get.attitude(_status.event.player, target);
						if (att > 0) return 0;
						att = Math.sqrt(0.01 - att);
						return att * (get.distance(_status.currentPhase, target, 'absolute') || game.players.length);
					});
				('step 1');
				if (result.targets?.length) {
					var target = result.targets[0];
					player.line(target, 'green');
					if (target.hasSkill('mstaiqing') && !target.hasSkill('mstaiqing_defended')) {
						target.addSkill('mstaiqing_defended');
					} else target.addTempSkill('yechou2', { player: 'phaseZhunbeiBegin' });
				}
			};
			lib.skill.jsrgyechou.content = function () {
				'step 0';
				player.chooseTarget(get.prompt2('jsrgyechou'), lib.filter.notMe).set('ai', (target) => {
					var player = _status.event.player;
					return -get.attitude(player, target);
				});
				('step 1');
				if (result.targets?.length) {
					var target = result.targets[0];
					if (target.hasSkill('mstaiqing') && !target.hasSkill('mstaiqing_defended')) {
						target.addSkill('mstaiqing_defended');
					} else {
						target.addSkill('jsrgyechou_effect');
						target.addMark('jsrgyechou_effect', 1, false);
					}
				}
			};
		},
		precontent() {
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '星舟扩展',
					connect: true,
					characterSort: {
						星舟扩展: {
							binary: ['msshu', 'msvvan', 'msyywc', 'msslls', 'mslfzw', 'mszxsh', 'mssgls', 'mslmht', 'mshlmt', 'msyvgnd', 'mshehzl', 'msmtlxy', '路加萨尔古斯'],
							original: ['ms_zhaoyun', 'ms_liubei', 'ms_guanyu', 'msd_zhaoyun', 'ms_caojie'],
							hoshikami: ['mslan', 'msys', 'mstaiyi', 'msxp', 'msklb', 'msnnk'],
							orgn2: ['mschaos'],
							prototype: ['msrvvan', 'mstlxy'],
						},
					},
					characterTitle: {
						QQQ_caomao: '潛龍於淵',
						路加萨尔古斯: '历法之王',
						msvvan: '烛骑士',
						msrvvan: '初版·烛骑士',
						mslfzw: '历法之王',
						msys: '丰饶星神',
						mslan: '巡猎星神',
						msslls: '序外执行者',
						mszxsh: '莱达光明之神',
						mstaiyi: '秩序星神',
						msxp: '同谐星神',
						msklb: '存护星神',
						msnnk: '毁灭星神',
						mstlxy: '高洁的圣主',
						mssgls: '圣光审判者',
						mslmht: '空元行者',
						mshlmt: '无情权威',
						msyvgnd: '永恒恩典',
						mshehzl: '万塔巫王',
						msmtlxy: '魔王',
					},
					dynamicTranslate: {
						mslongnu(player) {
							if (player.storage.mszhaolie) return '出牌阶段开始时,你可以失去1点体力或体力上限并摸两张牌,本回合你的红色/黑色牌均视为火/雷【杀】且无距离次数限制.';
							if (player.hasSkill('mslongnu_2')) return '转换技,锁定技,阴:出牌阶段开始时,你失去1点体力并摸一张牌,本阶段内你的红色手牌均视为火【杀】且无距离限制.<span class="legendtext">阳:出牌阶段开始时,你减1点体力上限并摸一张牌,本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制.</span>';
							if (player.hasSkill('mslongnu_1')) return '转换技,锁定技,<span class="legendtext">阴:出牌阶段开始时,你失去1点体力并摸一张牌,本阶段内你的红色手牌均视为火【杀】且无距离限制.</span>阳:出牌阶段开始时,你减1点体力上限并摸一张牌,本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制.';
							if (player.storage.mslongnu == true) return '转换技,锁定技,阴:出牌阶段开始时,你失去1点体力并摸一张牌,本阶段内你的红色手牌均视为火【杀】且无距离限制.<span class="bluetext">阳:出牌阶段开始时,你减1点体力上限并摸一张牌,本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制.</span>';
							return '转换技,锁定技,<span class="bluetext">阴:出牌阶段开始时,你失去1点体力并摸一张牌,本阶段内你的红色手牌均视为火【杀】且无距离限制.</span>阳:出牌阶段开始时,你减1点体力上限并摸一张牌,本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制.';
						},
						mshuozhong(player) {
							if (get.mode() == 'identity' && _status.mode != 'purple' && !_status.brawl) return '锁定技,你视为拥有能造成火焰伤害的神势力武将技能,你造成的伤害改为火焰伤害.当你造成火焰伤害后,令一名角色回复1点体力.';
							return '锁定技,你视为拥有能造成火焰伤害的神势力武将技能,你造成的伤害改为火焰伤害.当你造成火焰伤害后,令一名友方角色回复1点体力,若其体力值已满则改为增加1点体力上限.';
						},
						msshenghu(player) {
							var str = '锁定技,你造成/受到伤害后,亮出牌堆顶伤害值张牌并记录点数之和,获得其中一种类型的所有牌,弃置剩余牌并回复等量体力.你的锁定技不会失效.';
							if (player.storage.mszhongzhang) str += '每记录220点数,你激活【圣剑】中未激活的一项.';
							return str;
						},
						msshengjian(player) {
							var str = '锁定技,你使用/打出/弃置牌后,记录此牌点数.';
							if (player.storage.mszhongzhang) {
								var skills = lib.skill.msshengjian.derivation.filter((i) => player.hasSkill(i));
								str += '你拥有';
								for (var i of skills) str += '【' + get.translation(i) + '】';
								str += '的效果.';
								return str;
							} else str += '【圣剑】和【圣护】记录的点数之和每达到22点,你获得一个<圣剑>标记(至多为5).根据你的标记数获得对应效果.';
							return str;
						},
						msgouzhu(player) {
							if (player.storage.msjiejing) return '锁定技,游戏开始时你获得3点护甲;准备阶段开始时,你可以失去1点体力并获得2点护甲,你的手牌上限+x(x为你的护甲数).';
							return '锁定技,游戏开始时你获得3点护甲;准备阶段开始时,若你体力值不为1,你失去1点体力并获得1点护甲,你的手牌上限+x(x为你的护甲数).';
						},
					},
					character: {
						msshu: ['female', 'shen', 4, ['msjiahe', 'mskurong', 'msfengrao', 'mschangqing'], ['ext:星舟扩展/image/msshu.jpg', 'die:ext:星舟扩展/audio/die/msshu.mp3', 'boss', 'bossallowed']], //QQQ
						msvvan: ['female', 'ltny', 4, ['mszhuguang', 'mslveying', 'msanyao'], ['ext:星舟扩展/image/msvvan.jpg', 'die:ext:星舟扩展/audio/die/msvvan.mp3', 'boss', 'bossallowed']],
						msslls: ['female', 'shen', 6, ['msxingjie', 'msxinghu', 'msxinghui', 'msxingbie'], ['ext:星舟扩展/image/msslls.jpg', 'boss', 'bossallowed']],
						mslfzw: ['male', 'shen', 12, ['mslifa', 'msshimo', 'mskongyuan'], ['ext:星舟扩展/image/mslfzw.jpg', 'boss', 'bossallowed']],
						msys: ['female', 'shen', 6, ['msyanli', 'msmingche', 'msyuanyin', 'msfue'], ['ext:星舟扩展/image/msys.jpg', 'boss', 'bossallowed']],
						mslan: ['male', 'shen', 6, ['msguangxun', 'msweishi', 'mstaiqing', 'mslianpo'], ['ext:星舟扩展/image/mslan.jpg', 'boss', 'bossallowed']],
						ms_zhaoyun: ['male', 'shen', 4, ['msjuejing', 'mslonghun', 'mszhanjiang', 'mslongyou'], ['character:dc_zhaoyun', 'die:ext:星舟扩展/audio/die/ms_zhaoyun.mp3', 'boss', 'bossallowed']],
						ms_liubei: ['male', 'shen', 6, ['mslongnu', 'msjieying', 'mszhaolie'], ['ext:星舟扩展/image/ms_liubei.jpg', 'die:ext:星舟扩展/audio/die/ms_liubei.mp3', 'boss', 'bossallowed']],
						ms_guanyu: ['male', 'shen', 6, ['mswushen', 'mswuhun', 'mszhongyi', 'msglongyou'], ['ext:星舟扩展/image/ms_guanyu.jpg', 'die:ext:星舟扩展/audio/die/ms_guanyu.mp3', 'boss', 'bossallowed']],
						mschaos: ['male', 'orgn', 12, ['msbian', 'mshundun', 'msxukong', 'msshenshi'], ['ext:星舟扩展/image/mschaos.jpg', 'boss', 'bossallowed']],
						msrvvan: ['female', 'ltny', 4, ['mszhuguang', 'msrlveying', 'msranyao'], ['ext:星舟扩展/image/msvvan.jpg', 'die:ext:星舟扩展/audio/die/msvvan.mp3', 'boss', 'bossallowed']],
						msd_zhaoyun: ['male', 'shen', 1, ['msdjuejing', 'msdlonghun', 'msdzhanjiang', 'mshuzhu'], ['InitFilter:noZhuHp:noZhuSkill', 'character:dc_zhaoyun', 'die:ext:星舟扩展/audio/die/ms_zhaoyun.mp3', 'boss', 'bossallowed']],
						msyywc: ['female', 'shenchi', 3, ['mshuozhong', 'msyingyao', 'msshengxi'], ['ext:星舟扩展/image/msyywc.jpg', 'die:ext:星舟扩展/audio/die/msyywc.mp3', 'boss', 'bossallowed']],
						mszxsh: ['female', 'shen', 22, ['msshenghu', 'msshengjian', 'mszhongzhang'], ['ext:星舟扩展/image/mszxsh.jpg', 'die:ext:星舟扩展/audio/die/mszxsh.mp3', 'boss', 'bossallowed']],
						mstaiyi: ['none', 'shen', 6, ['mszhixu', 'mszhenhuan', 'mszhangkong', 'msshenen'], ['ext:星舟扩展/image/mstaiyi.jpg', 'boss', 'bossallowed']],
						msxp: ['female', 'shen', 6, ['mstongxie', 'msjiqun', 'mstonghua', 'msxili'], ['ext:星舟扩展/image/msxp.jpg', 'boss', 'bossallowed']],
						mstlxy: ['female', 'terra', 3, ['msheiguan', 'msrenshan', 'msxiwang', 'mschuancheng'], ['ext:星舟扩展/image/mstlxy.jpg', 'boss', 'bossallowed']],
						mssgls: ['none', 'shen', 6, ['mszhumo', 'msjianding', 'msfusheng', 'msshenzhao'], ['ext:星舟扩展/image/mssgls.jpg', 'boss', 'bossallowed']],
						mslmht: ['male', 'shen', 4, ['msxiaoshi', 'mskongwang', 'msshenjian', 'msxingzhi'], ['ext:星舟扩展/image/mslmht.jpg', 'boss', 'bossallowed']],
						mshlmt: ['female', 'ltny', 4, ['msduduan', 'msquanwei', 'mszhubei'], ['ext:星舟扩展/image/mshlmt.jpg', 'boss', 'bossallowed']],
						msyvgnd: ['female', 'ltny', 4, ['msendian', 'mswanxia', 'msenci'], ['ext:星舟扩展/image/msyvgnd.jpg', 'boss', 'bossallowed']],
						ms_caojie: ['female', 'qun', 3, ['msshouxi', 'mshuiming'], ['ext:星舟扩展/image/ms_caojie.jpg', 'boss', 'bossallowed']],
						mshehzl: ['male', 'ltny', 120, ['mschiyu', 'msyongdun', 'mszhaozhi', 'mschenshi'], ['ext:星舟扩展/image/mshehzl.jpg', 'boss', 'bossallowed']],
						msmtlxy: ['female', 'terra', 4, ['mschenai', 'msyinrao', 'msmiaoyuan', 'mschonggou'], ['ext:星舟扩展/image/msmtlxy.jpg', 'boss', 'bossallowed']],
						msklb: ['male', 'shen', 6, ['msgouzhu', 'mshupo', 'msjiejing'], ['ext:星舟扩展/image/msklb.jpg', 'boss', 'bossallowed']],
						msnnk: ['male', 'shen', 6, ['msjinmie', 'msjielv', 'mszhanyi', 'msreji'], ['ext:星舟扩展/image/msnnk.jpg', 'boss', 'bossallowed']],
						路加萨尔古斯: ['female', 'shen', 20, ['历法', '王息', '敕命'], ['ext:星舟扩展/image/路加萨尔古斯.jpg', 'die:ext:星舟扩展/audio/die/路加萨尔古斯.mp3', 'boss', 'bossallowed']],
						QQQ_caomao: ['male', 'wei', 3, ['QQQ_qianlong', 'QQQ_weitong'], ['ext:星舟扩展/image/caomao3.jpg', 'die:ext:星舟扩展/audio/die/caomao.mp3', 'boss', 'bossallowed', 'zhu']],
					},
					characterIntro: {
						路加萨尔古斯: '在现实的另一侧,过去与未来之王发出号令.死亡与生命一同列阵只为实现萨尔贡化身那宏伟而壮丽的愿望.而为了应对即将到来的邪魔危机,路加萨尔古斯凭依其后代王女推进之王亚历山德莉娜·维娜·维多利亚再次现世',
						msys: "<span class='legendtext'>「花儿肆意绽放,迎向无法逃避的凋零;鸟儿展翼啼唱,飞向无法逃避的坠落; 溪儿潺潺淙淙,淌向无法逃避的干涸————缘何万物必要消亡?宇宙间必有一方灵药,足以医治名为「短寿的顽疾.」<br>————佚名, <此生苦短></span><br>令诸有情,所求皆得.<br>药师是众生哺育者,乐土之神,旨在令生命兴盛不熄.<br>他是从不拒绝祈愿,不忍视衰亡和病痛的星神.",
						mslan: "<span class='legendtext'>「仇忾无涯,征逐无疆,猎君几多愁?辰矢在弦,金瞳炽焱,帝弓莫回首.」<br>————仙舟, <寰宇通鉴></span><br>被称为帝弓司命的游弋星神,无止尽地游荡于诸世界之间,铲除曾荼毒其家园的不死孽物.<br>岚的游猎从来不计代价,其拯救和破坏也几无差别.",
						mstaiyi: '执掌『秩序』命途的古老星神.<br>祂神迹拂过之处,总有天外合唱班的歌声渺渺,那些音符呈现立体的纵向排列——而其组成的圣歌,即是祂自己的声音.',
						msxp: "<span class='legendtext'>「普世同谐,群星共熠,无上功德颂神主!世人同袍,万物同根,赐福之风拂大地!」<br>————<谐乐颂>第一乐章</span><br>来自多个谐乐天体世界的集群星神.千面一体的希佩,宣唱着和谐一致的喜乐.<br>为了对抗宇宙无情的法则,智慧生命需要抹煞孱弱的私欲与个体的差别,融入同一阙谐乐中————以强援弱,以死护生.",
						msvvan: '薇薇安娜·德罗斯特,莱塔尼亚施彤领选帝侯霍赫贝格家族后裔,前卡西米尔人气竞技骑士.经耀骑士临光举荐,在罗德岛登记为合作干员.<br>擅长使用光影类源石技艺,配以华丽的剑术技巧,能在战场上灵活御敌.驻留本舰期间将为罗德岛提供战术与外勤任务支援.',
						msrvvan: '薇薇安娜·德罗斯特,莱塔尼亚施彤领选帝侯霍赫贝格家族后裔,前卡西米尔人气竞技骑士.经耀骑士临光举荐,在罗德岛登记为合作干员.<br>擅长使用光影类源石技艺,配以华丽的剑术技巧,能在战场上灵活御敌.驻留本舰期间将为罗德岛提供战术与外勤任务支援.',
						msshu: '黍,炎国农业天师,天师府授业天师.曾于炎国北部农业基地大荒城从事农业研究多年且已有丰富的科研成果.现因访问亲属,以访客身份暂驻罗德岛.',
						msslls: '2023年年费精灵,代号索拉里斯,来自异域的苍穹,终末遨游的孤星,手中的魔盒·苍星之理承载着来自未来的记忆和力量,为阻止命定的轮回前往星之所向.',
						mszxsh: '2022年年费精灵,莱达宇宙的光明之神,光耀涤世,斩破暗夜,圣华神临,唯序至上!',
						mshlmt: '出自手游<明日方舟>,正式登场于活动剧情「崔林特尔梅之金」<br>莱塔尼亚现任统治者.是依靠巫妖的祝福、高卢的技术、巫王的术式制造出的生命.双子女皇之一,莱塔尼亚最锋利的剑,被称为<无情权威>.收留了深律作为自己的女王密使,在对待孩子时会露出温柔的一面,但在外界依旧保持着威严用来震慑莱塔尼亚的权贵.始源之角降临后,双子女皇利用二重奏成功击败了巫王,但荒域中的混沌物质和邪魔开始侵蚀现实.为阻止这些魔物的入侵,在赫琳玛特的法术引领下,散落虚空的<始源之塔>的碎末重新凝聚,建成了一座新的<塔>.最终,赫琳玛特被<塔’封印在了荒域.赫琳玛特被封印后,莱塔尼亚对外宣称她<失去声音>.',
						msyvgnd: '出自手游<明日方舟>初次登场于活动剧情「尘影余音」,正式登场于活动剧情「 崔林特尔梅之金」<br>莱塔尼亚现任统治者.是依靠巫妖的祝福、高卢的技术、巫王的术式制造出的生命.双子女皇之一,莱塔尼亚最坚实的盾,被称为<永恒恩典>.心思缜密,在始源之角降临前召见了薇薇安娜,有意让她成为新的女王之声为自己行事,默许了珂拉与巫王残党的行动.始源之角降临后与赫琳玛特利用二重奏成功击败了巫王,但荒域中的混沌物质和邪魔开始侵蚀现实,在赫琳玛特独自留下来抵抗邪魔后,伊维格娜德撑起了盾,回到现实世界护住了双塔和双塔下的万民,成为莱塔尼亚唯-的女皇,将原本分裂为二的统治权全部抓在了自己手中.',
						msyywc: '苇草,驻留罗德岛的维多利亚南部办事处期间,曾提出撤离申请,近期再次成功与罗德岛建立联络.目前正以深池名义带领小股部队在维多利亚境内活动,以救助被暴力胁迫的塔拉人为主要行动目标.',
						mshehzl: '出自游戏<明日方舟>登场于活动剧情「 崔林特尔梅之金」.<br>莱塔尼亚历史上最著名的君王,曾经是莱塔尼亚恩瓦德大区的选帝侯,在五十岁时被选举为莱塔尼亚的皇帝,上任后篡改了金律乐章,剔除其中的叙拉古分部,以此平息了菜塔尼亚届时的混乱.曾度为莱塔尼亚带去繁荣,以及长达六十年的残暴统治.在莱塔尼亚面临高卢的威胁时,以一己之力引发了史上著名的四皇会战,使莱塔尼亚陷入漫长的战乱,而后于1077年被双子女皇击杀.死后依然存在于被称作荒域’的空间里,并撑起了-座容纳人类从古至今一切牺牲的帕维永.在巫王残党通过金律乐章打开连接现实与荒域>的入口后,再次被攻入<荒域>的双子女皇击败,最终被巫妖弗莱蒙特从荒域放逐.',
						mstlxy: '特蕾西娅,卡兹戴尔移动城市的建立者,卡兹戴尔军事委员会创始人之一,巴别塔组织的创立者,曾是卡兹戴尔的最高领袖.执政期间,她致力于推进医疗、教育、城市基础建设等事业,多次带领萨卡兹击退了外敌的入侵,并且在外交工作中颇有建树.后于卡兹戴尔与维多利亚的战争中身亡.该人事档案留存在罗德岛人事部封存的资料库中.',
						msmtlxy: '特蕾西娅,卡兹戴尔移动城市的建立者,卡兹戴尔军事委员会创始人之一,巴别塔组织的创立者,曾是卡兹戴尔的最高领袖.执政期间,她致力于推进医疗、教育、城市基础建设等事业,多次带领萨卡兹击退了外敌的入侵,并且在外交工作中颇有建树.后于卡兹戴尔与维多利亚的战争中身亡.该人事档案留存在罗德岛人事部封存的资料库中.',
						mssgls: '2015年年费精灵圣光灵王的完全体形态,拥有了全新的形态和更强的远古力量,但始终不变的是心中对正义的坚持!',
						mslmht: '2024年年费精灵,本名罗姆怀特,来自远方的游写旅人.偶影独游,行至空元.',
						msnnk: "<span class='legendtext'>「如果熵增是宇宙不可逆转的法则,热寂是物质世界难以逃避的命运,那我们又何苦挣扎?燃烧,聚变,湮灭.若想迎接新生,就必先投身终结.」<br>————收集自某位科学家按下核爆的按钮前,琥珀2152纪</span><br>宇宙的诞生是种错谬;文明若是浩瀚群星中悄然兴起的癌症 ,纷争即智慧生灵间唯一通行的语言.为了修正如是错误,抹去宇宙的污点,纳努克成为熵之化身.",
						msklb: "<span class='legendtext'>「哲思者仰望星河,探求文明的终极目标————「筑墙,」雄浑的回声响彻脑海: 「筑墙.」<br>————阿德里安·斯宾塞·史密斯,<有关星空的寓言集></span><br>天彗星墙、亚空晶壁、巨引源基盘的砌造者,崇拜者称其「 琥珀王」.其为更古老的「黄昏战争」的幸存者.扡知晓大敌的吞噬迫在眉睫.因此不得不以光年为单位铸造障壁加以封印,隔绝保护尚有生机的世界.",
					},
					skill: {
						msjiahe: {
							audio: 'ext:星舟扩展/audio/msshu:2',
							trigger: {
								global: 'phaseBefore',
								player: ['enterGame', 'phaseDiscardBefore'],
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'phaseDiscard') return player.countCards('h') > 0;
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							intro: {
								markcount: 'expansion',
								mark(dialog, content, player) {
									var content = player.getExpansions('msjiahe');
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) {
											dialog.addAuto(content);
										} else {
											return '共有' + get.cnNumber(content.length) + '张禾';
										}
									}
								},
								content(content, player) {
									var content = player.getExpansions('msjiahe');
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) {
											return get.translation(content);
										}
										return '共有' + get.cnNumber(content.length) + '张禾';
									}
								},
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.getExpansions('msjiahe').length;
								},
							},
							content() {
								'step 0';
								if (trigger.name != 'phaseDiscard') player.draw(12);
								('step 1');
								if (trigger.name != 'phaseDiscard') {
									var num = player.countCards('h') - 4;
									player.chooseCard(num, true, 'h', '将' + num + '张牌置于武将牌上,称为<禾>').set('ai', function (card) {
										return 7 - get.value(card);
									});
								} else
									player.chooseCard([1, Infinity], 'he', '是否将任意张牌置于武将牌上,称为<禾>？').set('ai', function (card) {
										return 3 - get.value(card);
									});
								('step 2');
								if (result.cards?.length) {
									player.addToExpansion(result.cards, 'giveAuto', player).gaintag.add('msjiahe');
								}
							},
							group: ['msjiahe_draw'],
							subSkill: {
								draw: {
									trigger: {
										player: 'phaseDrawAfter',
									},
									forced: true,
									filter(event, player) {
										return player.getExpansions('msjiahe').length && player.countCards('h') > 0;
									},
									content() {
										'step 0';
										var cards = player.getExpansions('msjiahe');
										if (!cards.length || !player.countCards('h')) {
											event.finish();
											return;
										}
										var next = player.chooseToMove('嘉禾:是否交换<禾>和手牌？');
										next.set('list', [
											[get.translation(player) + '(你)的禾', cards],
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
												cards2 = cards.splice(0, player.getExpansions('msjiahe').length);
											return [cards2, cards];
										});
										('step 1');
										if (result.bool) {
											var pushs = result.moved[0],
												gains = result.moved[1];
											pushs.removeArray(player.getExpansions('msjiahe'));
											gains.removeArray(player.getCards('h'));
											if (!pushs.length || pushs.length != gains.length) return;
											player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('msjiahe');
											game.log(player, '将', pushs, '作为<禾>置于武将牌上');
											player.gain(gains, 'draw');
										}
									},
								},
							},
						},
						mskurong: {
							audio: 'ext:星舟扩展/audio/msshu:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							intro: {
								content(storage) {
									return '受到伤害/失去体力+1';
								},
							},
							filter(event, player) {
								return player.getExpansions('msjiahe').length;
							},
							content() {
								'step 0';
								var num = Math.min(game.countPlayer(), player.getExpansions('msjiahe').length);
								player.chooseTarget(get.prompt('mskurong'), '令至多' + get.cnNumber(num) + '名角色受到伤害增加', [1, num]).set('ai', function (target) {
									if (ui.selected.targets) return 0;
									return -1;
								});
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets.sortBySeat();
									var length = targets.length;
									targets.forEach((target) => {
										target.markAuto('mskurong', [player]);
									});
									player.addTempSkill('mskurong_effect', { player: 'phaseBeginStart' });
									player.storage.mskurong_effect.addArray(targets);
									player.chooseCardButton('选择弃置' + get.cnNumber(length) + '张<禾>', length, player.getExpansions('msjiahe'), true);
								} else {
									event.finish();
								}
								('step 2');
								player.loseToDiscardpile(result.links);
							},
							subSkill: {
								effect: {
									audio: 'mskurong',
									trigger: {
										global: ['damageBegin3', 'loseHpBegin'],
									},
									charlotte: true,
									forced: true,
									init(player, skill) {
										player.storage[skill] = [];
									},
									onremove(player, skill) {
										for (var i of player.storage[skill]) {
											i.unmarkSkill('mskurong');
										}
										player.storage[skill] = [];
									},
									filter(event, player) {
										return player.storage.mskurong_effect.includes(event.player) && event.num > 0;
									},
									content() {
										trigger.num++;
										var next = game.createEvent('changqing', false);
										next.player = trigger.player;
										next.setContent(function () {
											event.trigger('changqing');
										});
									},
								},
							},
						},
						msfengrao: {
							audio: 'ext:星舟扩展/audio/msshu:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								return player.getExpansions('msjiahe').length;
							},
							intro: {
								content(storage) {
									return '防止受到的伤害';
								},
							},
							content() {
								'step 0';
								var num = Math.min(game.countPlayer(), player.getExpansions('msjiahe').length);
								player
									.chooseTarget(get.prompt('msfengrao'), '令至多' + get.cnNumber(num) + '名角色防止受到的伤害', [1, num])
									.set('ai', function (target) {
										if (target.isMin()) return 0;
										if (target.hasSkill('biantian2') || target.hasSkill('dawu2')) return 0;
										var att = get.attitude(player, target);
										if (att >= 4) {
											if (target.hp > 2 && (target.isHealthy() || target.hasSkillTag('maixie'))) return 0;
											if (_status.event.allUse) return att;
											if (target.hp == 1) return att;
											if (target.hp == 2 && target.countCards('he') <= 2) return att * 0.7;
											return 0;
										}
										return -1;
									})
									.set(
										'allUse',
										player.getExpansions('msjiahe').length >=
										game.countPlayer(function (current) {
											return get.attitude(player, current) > 4;
										}) *
										2
									);
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets.sortBySeat();
									var length = targets.length;
									targets.forEach((target) => {
										target.markAuto('msfengrao', [player]);
									});
									player.addTempSkill('msfengrao_effect', { player: 'phaseBeginStart' });
									player.storage.msfengrao_effect.addArray(targets);
									player.chooseCardButton('选择弃置' + get.cnNumber(length) + '张<禾>', length, player.getExpansions('msjiahe'), true);
								} else {
									event.finish();
								}
								('step 2');
								player.loseToDiscardpile(result.links);
							},
							subSkill: {
								effect: {
									audio: 'msfengrao',
									trigger: {
										global: ['damageBegin4', 'phaseEnd'],
									},
									charlotte: true,
									forced: true,
									init(player, skill) {
										player.storage[skill] = [];
									},
									onremove(player, skill) {
										for (var i of player.storage[skill]) {
											i.unmarkSkill('msfengrao');
										}
										player.storage[skill] = [];
									},
									filter(event, player) {
										return player.storage.msfengrao_effect.includes(event.player);
									},
									content() {
										if (trigger.name == 'phase') {
											var num = [1, 2].randomGet();
											trigger.player.recover(num);
										} else trigger.cancel();
										var next = game.createEvent('changqing', false);
										next.player = trigger.player;
										next.setContent(function () {
											event.trigger('changqing');
										});
									},
									ai: {
										nofire: true,
										nodamage: true,
										nothunder: true,
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'damage')) return 'zeroplayertarget';
											},
										},
									},
								},
							},
						},
						mschangqing: {
							audio: 'ext:星舟扩展/audio/msshu:2',
							trigger: {
								global: 'changqing',
							},
							forced: true,
							content() {
								player.draw();
								if (trigger.player == player) player.draw(3);
							},
						},
						msxingjie: {
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								if (!event.source) return false;
								var skills = event.source.getSkills(null, false, false).filter((skill) => {
									var info = get.info(skill);
									if (!info || info.charlotte || get.skillInfoTranslation(skill, event.source).length == 0) return false;
									return !event.source.storage.msxingjie_block || !event.source.storage.msxingjie_block.includes(skill);
								});
								return skills.length;
							},
							logTarget: 'source',
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								event.num--;
								var skills = trigger.source.getSkills(null, false, false).filter((skill) => {
									var info = get.info(skill);
									if (!info || info.charlotte || get.skillInfoTranslation(skill, trigger.source).length == 0) return false;
									return !trigger.source.storage.msxingjie_block || !trigger.source.storage.msxingjie_block.includes(skill);
								});
								if (skills.length) {
									player.chooseControl(skills);
								} else event.finish();
								('step 2');
								if (result.control) {
									if (!trigger.source.storage.msxingjie_block) trigger.source.storage.msxingjie_block = [];
									trigger.source.storage.msxingjie_block.push(result.control);
									if (trigger.source.hasSkill('msxingjie_blocker')) {
										trigger.source.addSkillBlocker('msxingjie_blocker');
										trigger.source.update();
									} else trigger.source.addTempSkill('msxingjie_blocker');
									game.log(trigger.source, '的', '#g【' + get.translation(result.control) + '】', '失效了');
								} else event.finish();
								('step 3');
								if (event.num > 0) event.goto(1);
							},
							group: 'msxingjie_damage',
							subSkill: {
								damage: {
									trigger: {
										source: 'damageSource',
									},
									forced: true,
									content() {
										'step 0';
										var character = ['shen_guanyu', 'shen_lvmeng', 'shen_zhouyu', 'shen_caocao', 'shen_lvbu', 'shen_zhaoyun', 'shen_simayi'];
										var skills = [],
											skillw = player.getSkills(null, false, false).filter((skill) => {
												var info = get.info(skill);
												if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
												return true;
											});
										for (var i of character) {
											var skillx = lib.character[i][3].filter((skill) => !skillw.includes(skill));
											for (var j of skillx) {
												lib.character['xingjie_' + j] = [null, null, null, [j], ['character:' + i]];
												lib.translate['xingjie_' + j] = lib.translate[j];
											}
											skills.addArray(skillx.map((k) => 'xingjie_' + k));
										}
										if (skills.length) {
											player.chooseButton(['获得一个技能,或点取消摸体力上限张牌', [skills, 'character']]);
										} else
											event._result = {
												bool: false,
											};
										('step 1');
										if (result.links?.length) {
											player.addSkills(result.links[0].slice(8));
										} else player.draw(Math.min(player.maxHp, 20));
									},
								},
								blocker: {
									init(player, skill) {
										player.addSkillBlocker(skill);
									},
									onremove(player, skill) {
										player.removeSkillBlocker(skill);
										player.storage.msxingjie_block = [];
									},
									charlotte: true,
									skillBlocker(skill, player) {
										var info = get.info(skill);
										return info && !info.charlotte && player.storage.msxingjie_block && player.storage.msxingjie_block.includes(skill);
									},
									mark: true,
									marktext: '解',
									intro: {
										content(list, player, skill) {
											var storage = player.getSkills(null, false, false).filter(function (i) {
												return lib.skill.msxingjie_blocker.skillBlocker(i, player);
											});
											if (storage.length) return '失效技能:' + get.translation(storage);
											return '无失效技能';
										},
									},
								},
							},
						},
						msxinghu: {
							trigger: { player: 'damageBegin4' },
							forced: true,
							filter(event, player) {
								if (
									player.countCards('e', (card) => {
										return ['equip3', 'equip4', 'equip6'].includes(get.subtype(card));
									}) > 0
								)
									return true;
								if (player.getEquips(2).length) return event.hasNature();
								return !event.hasNature();
							},
							content() {
								trigger.cancel();
							},
							ai: {
								nofire: true,
								nodamage: true,
								nothunder: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) {
											if (
												player.countCards('e', (card) => {
													return ['equip3', 'equip4', 'equip6'].includes(get.subtype(card));
												}) > 0
											)
												return 'zeroplayertarget';
											if (player.getEquips(2).length && get.tag(card, 'natureDamage')) return 'zeroplayertarget';
											if (player.getEquips(2).length == 0 && !get.tag(card, 'natureDamage')) return 'zeroplayertarget';
										}
									},
								},
							},
							mod: {
								canBeDiscarded(card, source, player) {
									if (get.position(card) == 'e' && get.subtypes(card).some((slot) => slot == 'equip4' || slot == 'equip3' || slot == 'equip6')) return false;
								},
								canBeGained(card, source, player) {
									if (get.position(card) == 'e' && get.subtypes(card).some((slot) => slot == 'equip4' || slot == 'equip3' || slot == 'equip6')) return false;
								},
								cardDiscardable(card, player) {
									if (get.position(card) == 'e' && get.subtypes(card).some((slot) => slot == 'equip4' || slot == 'equip3' || slot == 'equip6')) return false;
								},
							},
						},
						msxinghui: {
							trigger: {
								player: ['phaseDrawBegin2', 'phaseJieshuBegin'],
							},
							forced: true,
							filter(event, player, name) {
								if (player.hasSkill('msxinghui_block')) return false;
								return name == 'phaseJieshuBegin' || !event.numFixed;
							},
							content() {
								'step 0';
								if (event.triggername == 'phaseJieshuBegin') {
									player.judge((card) => {
										if (get.color(card) == 'red') return 4;
										return 2;
									});
								} else {
									trigger.num += player.hp;
									event.finish();
								}
								('step 1');
								if (result.color) {
									if (result.color == 'red') {
										if (result.card) player.gain(result.card, 'gain2');
										player.chooseTarget('星辉:令一名角色执行一个额外回合', true).set('ai', function (target) {
											return get.attitude(player, target);
										});
									} else {
										var next = game.createEvent('xinghui', false);
										next.player = player;
										next.setContent(lib.skill.msxinghui.contentx);
										event.finish();
									}
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.phase('nodelay');
									//player.addTempSkill('msxinghui_block',{player:'phaseBeginStart'});
								}
							},
							ai: {
								threaten: 1.5,
							},
							contentx() {
								'step 0';
								var cards = [];
								event.cards = cards;
								if (!lib.skill.yongjin.filter(null, player, cards)) {
									event.finish();
									return;
								}
								var next = player.chooseTarget(2, function (card, player, target) {
									if (ui.selected.targets.length) {
										var from = ui.selected.targets[0];
										if (target.isMin()) return false;
										var es = from.getCards('e', function (card) {
											return !_status.event.cards.includes(card);
										});
										for (var i = 0; i < es.length; i++) {
											if (target.canEquip(es[i])) return true;
										}
										return false;
									} else {
										return (
											target.countCards('e', function (card) {
												return !_status.event.cards.includes(card);
											}) > 0
										);
									}
								});
								next.set('ai', function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									var sgnatt = get.sgn(att);
									if (ui.selected.targets.length == 0) {
										if (target == player && player.hasSkill('decadexuanfeng')) {
											if (
												player.countCards('e', function (card) {
													return (
														!_status.event.cards.includes(card) &&
														game.hasPlayer(function (current) {
															return current != target && current.canEquip(card) && get.effect(current, card, player, player) < 0;
														})
													);
												}) > 0
											)
												return 18;
											return 7;
										} else if (att > 0) {
											if (
												target.countCards('e', function (card) {
													return (
														get.value(card, target) < 0 &&
														!_status.event.cards.includes(card) &&
														game.hasPlayer(function (current) {
															return current != target && current.canEquip(card) && get.effect(current, card, player, player) < 0;
														})
													);
												}) > 0
											)
												return 9;
										} else if (att < 0) {
											if (
												game.hasPlayer(function (current) {
													if (current != target && get.attitude(player, current) > 0) {
														var es = target.getCards('e', function (card) {
															return !_status.event.cards.includes(card);
														});
														for (var i = 0; i < es.length; i++) {
															if (get.value(es[i], target) > 0 && current.canEquip(card) && get.effect(current, es[i], player, current) > 0) return true;
														}
													}
												})
											) {
												return -att;
											}
										}
										return 0;
									}
									var es = ui.selected.targets[0].getCards('e', function (card) {
										return !_status.event.cards.includes(card);
									});
									var i;
									var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
									for (i = 0; i < es.length; i++) {
										if (ui.selected.targets[0] == player && player.hasSkill('decadexuanfeng')) {
											var bool = game.hasPlayer(function (current) {
												return get.attitude(player, current) < 0 && current.countDiscardableCards(player, 'he') > 0 && get.damageEffect(current, player, player) > 0;
											});
											if (
												bool &&
												player.countCards('e', function (card) {
													return !_status.event.cards.includes(card) && target.canEquip(card) && get.effect(target, card, player, player) > 0;
												})
											)
												return 2.5 * Math.abs(att);
											else if (bool) return 1 / Math.max(1, Math.abs(att));
											else return get.damageEffect(target, player, player);
										}
										if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.effect(target, es[i], player, target)) == sgnatt && target.canEquip(es[i])) {
											return Math.abs(att);
										}
									}
									if (i == es.length) {
										return 0;
									}
									return -att * get.attitude(player, ui.selected.targets[0]);
								});
								next.set('multitarget', true);
								next.set('cards', cards);
								next.set('targetprompt', ['被移走', '移动目标']);
								next.set('prompt', '移动场上的一张装备牌');
								('step 1');
								if (result.targets?.length) {
									player.line2(result.targets, 'green');
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								('step 3');
								if (targets.length == 2) {
									player
										.choosePlayerCard(
											'e',
											true,
											function (button) {
												var player = _status.event.player;
												var targets0 = _status.event.targets0;
												var targets1 = _status.event.targets1;
												if (get.attitude(player, targets0) > 0 && get.attitude(player, targets1) < 0) {
													if (get.value(button.link, targets0) < 0 && get.effect(targets1, button.link, player, targets1) > 0) return 10;
													return 0;
												} else {
													return get.value(button.link) * get.effect(targets1, button.link, player, player);
												}
											},
											targets[0]
										)
										.set('nojudge', event.nojudge || false)
										.set('targets0', targets[0])
										.set('targets1', targets[1])
										.set('filterButton', function (button) {
											if (_status.event.cards.includes(button.link)) return false;
											var targets1 = _status.event.targets1;
											return targets1.canEquip(button.link);
										})
										.set('cards', cards);
								} else {
									event.finish();
								}
								('step 4');
								if (result.bool && result.links.length) {
									var link = result.links[0];
									player.addTempSkill('msxinghui_equip', { player: 'phaseBeginStart' });
									player.storage.msxinghui_equip = link;
									cards.add(link);
									event.targets[1].equip(link);
									event.targets[0].$give(link, event.targets[1]);
								} else event.finish();
							},
							global: 'msxinghui_global',
							subSkill: {
								block: {
									charlotte: true,
								},
								global: {
									mod: {
										cardDiscardable(card, player, name) {
											if (
												name == 'phaseDiscard' &&
												game.countPlayer((current) => {
													return current.hasSkill('msxinghui_equip') && current.storage.msxinghui_equip == card;
												}) > 0
											) {
												return false;
											}
										},
										canBeDiscarded(card, source, player) {
											if (
												game.countPlayer((current) => {
													return current.hasSkill('msxinghui_equip') && current.storage.msxinghui_equip == card;
												}) > 0
											)
												return false;
										},
									},
								},
								equip: {
									charlotte: true,
									init(player, skill) {
										player.storage[skill] = false;
									},
								},
							},
							mod: {
								maxHandcardBase(player, num) {
									if (!player.hasSkill('msxinghui_block')) return player.maxHp;
								},
							},
						},
						msxingbie: {
							trigger: { player: 'die' },
							forced: true,
							forceDie: true,
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget('星别:令一名角色获得你的一个技能', true, lib.filter.notMe).ai = function (target) {
									return get.attitude(player, target);
								};
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0],
										info = lib.character[target.name || target.name1];
									event.target = target;
									var hp = get.infoHp(info[2]);
									var maxHp = get.infoMaxHp(info[2]);
									target.maxHp = maxHp;
									target.hp = hp;
									target.update();
									game.log(target, '将体力上限调整为了', maxHp, ',将体力值调整为了', hp);
									var skills = player.getSkills(null, false, false).filter((skill) => {
										var infox = get.info(skill);
										if (!infox || infox.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
										return true;
									});
									if (skills.length) {
										if (skills.length == 1 || target.group == 'shen') {
											event._result = {
												bool: true,
												control: skills,
											};
										} else target.chooseControl(skills).set('prompt', '选择获得一个技能');
									} else event.finish();
								} else event.finish();
								('step 2');
								if (result.control) {
									event.target.addSkills(result.control);
								}
							},
						},
						mszhuguang: {
							audio: 'ext:星舟扩展/audio/msvvan:2',
							trigger: {
								global: ['roundStart', 'phaseBefore'],
								player: 'enterGame',
							},
							forced: true,
							init(player, skill) {
								player.storage[skill] = [];
							},
							forced: true,
							filter(event, player, name) {
								if (name == 'roundStart')
									return (
										player.storage.mszhuguang.length <= 4 &&
										game.countPlayer((c) => {
											return !player.storage.mszhuguang.includes(c);
										}) > 0
									);
								return (
									game.countPlayer((i) => {
										return i != player && !i.isZhu2();
									}) > 0 &&
									(event.name != 'phase' || game.phaseNumber == 0)
								);
							},
							content() {
								'step 0';
								player.chooseTarget('烛光:查看一名角色的身份', true, function (card, player, target) {
									if (event.triggername == 'roundStart') return !player.storage.mszhuguang.includes(target);
									return target != player && !target.isZhu2();
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									player.storage.mszhuguang.push(target);
									var list = [target.identity == 'mingzhong' ? 'zhong' : target.identity];
									player.chooseButton(
										[
											'###' + get.translation(target) + '的身份是###',
											[
												list,
												function (item, type, position, noclick, node) {
													return lib.skill.jxlianpo.$createButton(item, type, position, noclick, node);
												},
											],
										],
										true
									);
								} else event.finish();
								('step 2');
								if (event.target.isFriendsOf(player)) event.target.draw();
								else if (event.target.countCards('hej') > 0) player.discardPlayerCard(event.target, 'hej', true);
								if (event.target.isZhu2() && ['mingzhong', 'zhong'].includes(player.identity)) event.target.draw(3);
								if (player.identity == 'nei') player.draw(game.players.length);
								event.trigger('zhuguang');
							},
						},
						mslveying: {
							audio: 'ext:星舟扩展/audio/msvvan:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							global: ['caochuan_skill'],
							filter(event, player) {
								if (player.countMark('mslveying') >= 20 || !player.countCards('hes')) return false;
								for (var i of ['shan', 'tao', 'jiu', 'wuxie', 'caochuan']) {
									if (event.filterCard({ name: i }, player, event)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [],
										listx = ['shan', 'tao', 'jiu', 'wuxie', 'caochuan'];
									for (var i = 0; i < listx.length; i++) {
										var name = listx[i];
										if (['wuxie', 'caochuan'].includes(name) && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
										else if (['shan', 'tao', 'jiu'].includes(name) && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
									}
									return ui.create.dialog('掠影', [list, 'vcard']);
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
										popname: true,
										check(card) {
											return 8 - get.value(card);
										},
										audio: 'mslveying',
										position: 'hes',
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											player.addTempSkill('mslveying_draw');
											player.addMark('mslveying', 1, false);
										},
									};
								},
								prompt(links, player) {
									return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							hiddenCard(player, name) {
								return ['shan', 'tao', 'jiu', 'wuxie', 'caochuan'].includes(name) && player.countMark('mslveying') < 20 && player.countCards('hes') > 0;
							},
							subSkill: {
								backup: {},
								draw: {
									trigger: {
										player: ['useCard', 'respond'],
									},
									forced: true,
									charlotte: true,
									onremove(player) {
										player.storage.mslveying = 0;
									},
									filter(event, player) {
										return event.skill && event.skill == 'mslveying_backup';
									},
									content() {
										player.draw();
									},
								},
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (player.countMark('mslveying') >= 20 || !player.countCards('hes')) return false;
								},
								order: 1,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
						},
						msanyao: {
							audio: 'ext:星舟扩展/audio/msvvan:2',
							trigger: {
								player: ['changeHpAfter', 'zhuguang'],
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.hp < 3 || player.storage.mszhuguang.length > 3;
							},
							content() {
								'step 0';
								player.awakenSkill('msanyao');
								player.gainMaxHp(2);
								('step 1');
								player.chooseDrawRecover(4, 2);
								player.removeSkills('mszhuguang');
								player.addSkills(['mssanhua', 'msmingmie']);
							},
							derivation: ['mssanhua', 'msmingmie'],
						},
						mssanhua: {
							audio: 'ext:星舟扩展/audio/msvvan:2',
							trigger: {
								player: ['damageBegin4', 'loseHpBegin'],
							},
							forced: true,
							content() {
								'step 0';
								player.judge((card) => {
									if (get.color(card) == 'red') return 2;
									return 4;
								});
								('step 1');
								if (result.color) {
									if (result.color == 'red') {
										var cards = [];
										if (result.card) cards.add(result.card);
										if (trigger.cards) cards.addArray(trigger.cards);
										if (cards) player.gain(cards, 'gain2');
									} else trigger.cancel();
								}
							},
						},
						msmingmie: {
							audio: 'ext:星舟扩展/audio/msvvan:2',
							enable: 'phaseUse',
							filterCard: true,
							position: 'he',
							silent: true,
							selectCard: [1, Infinity],
							content() {
								player.changeHujia(cards.length);
							},
							group: 'msmingmie_hujia',
							subSkill: {
								hujia: {
									trigger: {
										player: 'loseHpBefore',
										source: 'damageBegin1',
									},
									filter(event, player) {
										return player.hujia > 0;
									},
									forced: true,
									content() {
										var audio = game.parseSkillAudio('msmingmie', player)[trigger.name == 'loseHp' ? 0 : 1];
										game.playAudio(audio);
										if (trigger.name == 'loseHp') trigger.cancel();
										else trigger.num += player.hujia;
									},
								},
							},
						},
						mslifa: {
							trigger: {
								player: ['phaseJudgeBefore', 'judgeBefore'],
							},
							forced: true,
							init(player) {
								lib.translate['mslifa_lingce'] = '灵策';
								lib.translate['mslifa_qicai'] = '奇才';
								lib.translate['mslifa_yinshi'] = '隐士';
								lib.translate['mslifa_weimu'] = '帷幕';
							},
							filter(event, player) {
								if (event.name != 'judge') return true;
								if (['shencai', 'twwuhun', 'new_wuhun_die', 'mswuhun'].includes(event.parent.name)) return true;
								if (!event.judge) return false;
								for (var i = 0; i < 20; i++) {
									if (event.judge(ui.cardPile.childNodes[i]) > 0) return false;
								}
								return true;
							},
							content() {
								trigger.cancel();
							},
							group: ['mslifa_lingce', 'mslifa_qicai', 'mslifa_yinshi', 'mslifa_weimu'],
							derivation: ['lingce', 'qicai', 'xinfu_yinshi', 'reweimu'],
							subSkill: {
								lingce: {
									inherit: 'lingce',
									audio: 'lingce',
									filter(event, player) {
										if (
											player.hasSkill('lingce') ||
											player.countCards('e', (card) => {
												return ['equip3', 'equip4', 'equip6'].includes(get.subtype(card));
											}) > 0
										)
											return false;
										if (!event.cards || event.cards.length !== 1) return false;
										return event.card.name == 'qizhengxiangsheng' || get.zhinangs().includes(event.card.name) || (player.getStorage('dinghan') && player.getStorage('dinghan').includes(event.card.name));
									},
								},
								qicai: {
									inherit: 'qicai',
									mod: {
										targetInRange(card, player, target, now) {
											if (player.hasSkill('qicai') || player.getEquips(1).length) return;
											if (['trick', 'delay'].includes(get.type(card))) return true;
										},
									},
								},
								yinshi: {
									inherit: 'xinfu_yinshi',
									audio: 'xinfu_yinshi',
									filter(event, player) {
										if (player.hasSkill('xinfu_yinshi') || player.getEquips(2).length) return false;
										const skill = lib.skill.jianjie;
										if (skill.hasMark('huoji', player) || skill.hasMark('lianhuan', player)) return false;
										if (!player.hasEmptySlot(2)) return false;
										if (event.hasNature()) return true;
										return get.type(event.card, 'trick') == 'trick';
									},
								},
								weimu: {
									inherit: 'reweimu',
									audio: 'reweimu',
									mod: {
										targetEnabled(card, player) {
											if (player.hasSkill('reweimu') || player.getEquips(5).length) return;
											if (get.type2(card) == 'trick' && get.color(card) == 'black') return false;
										},
									},
									filter(event, player) {
										if (player.hasSkill('reweimu') || player.getEquips(5).length) return false;
										return player == _status.currentPhase;
									},
								},
							},
						},
						msshimo: {
							trigger: {
								player: 'changeHpAfter',
							},
							forced: true,
							filter(event, player) {
								if (event.num >= 0) return false;
								if (!(player.hasEnabledSlot(1) || player.hasEnabledSlot(2) || player.hasEnabledSlot(5) || player.hasEnabledSlot('horse'))) return false;
								var hp = player.hp - event.num;
								if (player.hp <= 4) return hp > 4;
								if (player.hp <= 6) return hp > 6;
								if (player.hp <= 8) return hp > 8;
								return player.hp <= 10 && hp > 10;
							},
							content() {
								'step 0';
								player.chooseToDisable(true);
								('step 1');
								switch (result.control) {
									case 'equip1':
										player.addTempSkills('qicai', 'neverend');
										break;
									case 'equip2':
										player.addTempSkills('xinfu_yinshi', 'neverend');
										break;
									case 'equip3_4':
										player.addTempSkills(['dinghan', 'lingce'], 'neverend');
										break;
									case 'equip5':
										player.addTempSkills('reweimu', 'neverend');
										break;
								}
								('step 2');
								if (
									game.hasPlayer((current) => {
										if (current.name2 && current.name2 == 'mshldh') return true;
										if (current.name1 && current.name1 == 'mshldh') return true;
										if (current.name && current.name == 'mshldh') return true;
									}) &&
									(player.hasEnabledSlot(1) || player.hasEnabledSlot(2) || player.hasEnabledSlot(5) || player.hasEnabledSlot('horse'))
								)
									event.goto(0);
							},
							derivation: ['dinghan'],
						},
						mskongyuan: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return !player.hasEnabledSlot();
							},
							content() {
								'step 0';
								player.awakenSkill('mskongyuan');
								player.loseMaxHp(Math.floor(player.maxHp / 2));
								('step 1');
								var list = [];
								for (var i = 1; i < 6; i++) {
									for (var j = 0; j < player.countDisabledSlot(i); j++) {
										list.push(i);
									}
								}
								if (list.length) player.enableEquip(list);
								('step 2');
								player.changeSkills(['tiandu', 'reguicai'], ['mslifa']);
							},
							derivation: ['tiandu', 'reguicai'],
						},
						msyanli: {
							forced: true,
							group: 'msyanli_bagua',
							subSkill: {
								bagua: {
									inherit: 'rw_bagua_skill',
									filter(event, player) {
										if (game.countPlayer((i) => i.isEnemiesOf(player) && i.hasSkill('msguangxun')) > 0) return false;
										if (player.getEquips(2).length) return false;
										if (event.responded) return false;
										if (event.bagua_skill) return false;
										if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
										if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
										return true;
									},
								},
							},
						},
						msmingche: {
							trigger: {
								player: ['damageBegin4', 'recoverAfter'],
							},
							forced: true,
							filter(event, player) {
								if (game.countPlayer((i) => i.isEnemiesOf(player) && i.hasSkill('msguangxun')) > 0) return false;
								if (event.name == 'recover') return player.hp > 0 && player.hp <= event.num && event.card && event.cards.length == 1 && event.cards[0].name == 'sha' && !event.cards[0].nature;
								return true;
							},
							content() {
								if (trigger.name == 'recover') player.recover(2);
								else if (trigger.num > 1) trigger.num = 1;
								else player.draw(3);
							},
							mod: {
								cardname(card, player) {
									if (card.name == 'sha' && !card.nature) return get.color(card) == 'red' ? 'tao' : 'jiu';
								},
								ignoredHandcard(card, player) {
									if (card.name == 'sha' && !card.nature) {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.name == 'sha' && !card.nature) {
										return false;
									}
								},
								maxHandcardBase(player, num) {
									return player.maxHp;
								},
							},
						},
						msyuanyin: {
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								if (game.countPlayer((i) => i.isEnemiesOf(player) && i.hasSkill('msguangxun')) > 0) return false;
								return player.hp * 2 < player.maxHp;
							},
							init(player, skill) {
								player.storage[skill] = 0;
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								event.num--;
								if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
									player.gain(trigger.cards, 'gain2');
								}
								player.draw(player.getDamagedHp() + player.storage.msyuanyin);
								('step 2');
								player.storage.msyuanyin++;
								if (event.num > 0) {
									event.goto(1);
								}
							},
							group: 'msyuanyin_draw',
							subSkill: {
								draw: {
									trigger: {
										player: 'loseAfter',
										global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
									},
									forced: true,
									filter(event, player) {
										if (game.countPlayer((i) => i.isEnemiesOf(player) && i.hasSkill('msguangxun')) > 0) return false;
										if (player == _status.currentPhase) return false;
										var evt = event.getl(player);
										return evt.cards2 && evt.cards2.length > 1;
									},
									content() {
										player.draw(trigger.getl(player).cards2.length + 1);
									},
								},
							},
						},
						msfue: {
							trigger: {
								player: 'damageBegin3',
							},
							forced: true,
							filter(event, player) {
								if (game.countPlayer((i) => i.isEnemiesOf(player) && i.hasSkill('msguangxun')) > 0) return false;
								return event.source && event.source != player;
							},
							content() {
								'step 0';
								player.judge((card) => {
									if (get.color(card) == 'red') return 4;
									return 2;
								});
								('step 1');
								if (result.color) {
									if (result.color == 'red') trigger.source.loseHp(player.getDamagedHp());
									else {
										var num = Math.min(player.getDamagedHp() + 6, trigger.source.countCards('he'));
										if (num > 0) trigger.source.chooseToDiscard('he', true, num);
									}
								}
							},
						},
						msguangxun: {
							trigger: {
								player: ['loseAfter', 'gainAfter', 'phaseBegin', 'enterGame', 'damageEnd'],
								global: ['phaseBefore', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
							},
							forced: true,
							init(player, skill) {
								player.storage[skill] = 0;
							},
							intro: {
								markcount: () => null,
								content(storage, player) {
									var target = game.players.find((i) => i.name == 'msys');
									if (!target) return '无效果';
									if (target.isEnemiesOf(player)) return '丰饶星神·药师的防御性锁定技已被封印';
									return '防止你对丰饶星神·药师造成的伤害';
								},
							},
							filter(event, player, name) {
								if (name == 'phaseBegin' || name == 'damageEnd') return player.hasUseTarget({ name: 'wanjian' });
								if (name == 'phaseBefore' && game.phaseNumber > 0) return false;
								for (var i of ['basic', 'trick']) {
									if (player.getCards('h').every((j) => get.type2(j) != i)) return true;
								}
								return false;
							},
							content() {
								player.storage.msguangxun++;
								if (event.triggername == 'phaseBegin' || event.triggername == 'damageEnd') {
									var card = { name: 'wanjian' };
									if (player.hasUseTarget(card)) player.chooseUseTarget(card, true);
								} else player.draw(game.players.length);
							},
							group: ['msguangxun_viewas', 'msguangxun_mark', 'msguangxun_defend'],
							subSkill: {
								defend: {
									trigger: {
										source: 'damageBegin1',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.player && event.player.name == 'msys' && event.player.isFriendsOf(player);
									},
									content() {
										trigger.cancel();
									},
								},
								viewas: {
									enable: 'phaseUse',
									viewAs: { name: 'wanjian' },
									precontent() {
										player.storage.msguangxun++;
									},
									filterCard: true,
									position: 'hes',
									selectCard: 2,
									check(card) {
										var player = _status.event.player;
										var targets = game.filterPlayer(function (current) {
											return player.canUse('wanjian', current);
										});
										var num = 0;
										for (var i = 0; i < targets.length; i++) {
											var eff = get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
											if (targets[i].hp == 1) {
												eff *= 1.5;
											}
											num += eff;
										}
										if (!player.needsToDiscard(-1)) {
											if (targets.length >= 7) {
												if (num < 2) return 0;
											} else if (targets.length >= 5) {
												if (num < 1.5) return 0;
											}
										}
										return 6 - get.value(card);
									},
									ai: {
										basic: {
											order: 8.9,
										},
									},
								},
								mark: {
									trigger: {
										player: 'enterGame',
										global: ['phaseBefore', 'dieAfter'],
									},
									forced: true,
									firstDo: true,
									filter(event, player) {
										var bool = game.players.filter((i) => i.name == 'msys').length;
										if (event.name == 'die') return !bool;
										return bool && (event.name != 'phase' || game.phaseNumber == 0);
									},
									content() {
										if (trigger.name == 'die') player.unmarkSkill('msguangxun');
										else {
											player.markSkill('msguangxun');
										}
									},
								},
							},
						},
						msweishi: {
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name != 'wanjian' || player.countCards('he') == 0) return false;
								return player.isDamaged() && ((event.cards && event.cards.length > 1));
							},
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard('he', '危矢:是否弃置一张牌？').set('ai', (card) => 4 - get.value(card));
								('step 1');
								if (result.bool) {
									player.chooseControl('加伤', '回血', '减少目标').set('ai', () => '加伤');
								} else event.finish();
								('step 2');
								if (result.control != '减少目标') {
									trigger.weishi = result.index + 1;
									event.finish();
								} else {
									player
										.chooseTarget('为' + get.translation(trigger.card) + '减少至多3个目标', true, [1, 3], function (card, player, target) {
											return _status.event.targets.includes(target);
										})
										.set('targets', trigger.targets)
										.set('ai', function (target) {
											var player = _status.event.player;
											return -get.effect(target, _status.event.getTrigger().card, player, player);
										});
								}
								('step 3');
								if (result.targets?.length) {
									trigger.targets.removeArray(result.targets);
								}
							},
							group: 'msweishi_effect',
							subSkill: {
								effect: {
									trigger: {
										source: 'damageBegin1',
										player: 'useCardAfter',
									},
									charlotte: true,
									forced: true,
									firstDo: true,
									filter(event, player) {
										if (event.name == 'useCard') return event.weishi && event.weishi == 2;
										var evt = event.getParent(2);
										return evt.weishi && evt.weishi == 1;
									},
									content() {
										if (trigger.name == 'useCard') {
											var num = 0;
											player.getHistory('sourceDamage', (evt) => {
												if (!evt.card || evt.card != trigger.card) return false;
												num += evt.num;
											});
											if (num == 0) num++;
											player.recover(num);
										} else trigger.num++;
									},
								},
							},
						},
						mstaiqing: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.hasSkill('mstaiqing_defended') || player.storage.msguangxun >= 4;
							},
							content() {
								'step 0';
								if (!player.hasSkill('mstaiqing_defended')) player.addSkill('mstaiqing_defended');
								player.awakenSkill('mstaiqing');
								player.gainMaxHp(2);
								('step 1');
								var num = player.maxHp - game.players.length;
								if (num > 0) {
									player.storage.mstaiqing_defended = num;
									player.markSkill('mstaiqing_defended');
								}
								('step 2');
								player.addSkills('msyimie');
							},
							derivation: 'msyimie',
							subSkill: {
								defended: {
									forced: true,
									charlotte: true,
									init(player, skill) {
										player.storage[skill] = 0;
									},
									intro: {
										content: '手牌上限+#',
									},
									mod: {
										maxHandcard(player, num) {
											return num + player.storage.mstaiqing_defended;
										},
									},
								},
							},
						},
						msyimie: {
							trigger: {
								source: 'damageBegin1',
							},
							logTarget: 'player',
							content() {
								'step 0';
								player.chooseToDiscard('弃置一张牌,或点取消失去1点体力,令此伤害+' + (trigger.player.hp - 1), 'he').set('ai', function (card) {
									return 7 - get.value(card);
								});
								('step 1');
								if (!result.bool) player.loseHp();
								trigger.num += trigger.player.hp - 1;
							},
						},
						mslianpo: {
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								return player.getStat('kill') > 0;
							},
							content() {
								player.phase('nodelay');
							},
							group: 'mslianpo_damage',
							subSkill: {
								damage: {
									trigger: {
										player: ['phaseBegin', 'phaseEnd'],
										source: 'damageBegin1',
									},
									forced: true,
									charlotte: true,
									firstDo: true,
									filter(event, player) {
										if (event.name == 'phase') return event.skill && event.skill == 'mslianpo';
										var evt = event.getParent('phase');
										return evt && evt.skill && evt.skill == 'mslianpo';
									},
									intro: {
										content: '本回合造成的伤害+1',
									},
									content() {
										if (trigger.name == 'phase') {
											if (event.triggername == 'phaseBegin') player.markSkill(event.name);
											else player.unmarkSkill(event.name);
										} else trigger.num++;
									},
								},
							},
						},
						msjuejing: {
							audio: 'ext:星舟扩展/audio/ms_zhaoyun:2',
							trigger: {
								player: 'loseAfter',
								global: ['phaseBefore', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'phase') return player.countCards('h', (card) => card.suit != 'heart') != player.maxHp;
								if (event.name == 'gain' && event.player == player) return player.countCards('h', (card) => card.suit != 'heart') > player.maxHp;
								var evt = event.getl(player);
								if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h', (card) => card.suit != 'heart') >= player.maxHp) return false;
								var evt = event;
								for (var i = 0; i < 4; i++) {
									evt = evt.getParent('msjuejing');
									if (evt.name != 'msjuejing') return true;
								}
								return false;
							},
							content() {
								'step 0';
								var num = player.maxHp - player.countCards('h', (card) => card.suit != 'heart');
								if (num > 0) player.draw(num);
								else player.chooseToDiscard('h', true, -num, (card) => card.suit != 'heart');
								('step 1');
								if (player.countCards('h', (card) => card.suit != 'heart') != player.maxHp) event.goto(0);
							},
							ai: {
								noh: true,
							},
							group: 'msjuejing_rej',
							subSkill: {
								rej: {
									trigger: {
										player: ['phaseDrawBefore', 'phaseJudgeBefore', 'turnOverBefore'],
									},
									init(player) {
										player.turnOver(false);
									},
									forced: true,
									filter(event, player) {
										return event.name != 'turnOver' || !player.classList.contains('turnedover');
									},
									content() {
										trigger.cancel();
									},
								},
							},
						},
						mslonghun: {
							audio: 'ext:星舟扩展/audio/ms_zhaoyun:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt: '将♦️️牌当做杀,♥️️牌当做桃,♣️️牌当做闪,♠️️牌当做无懈可击使用或打出',
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
							selectCard: [1, 3],
							complexCard: true,
							position: 'hes',
							filterCard(card, player, event) {
								if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
								event = event || _status.event;
								var filter = event._backup.filterCard;
								var name = card.suit;
								if (name == 'club' && filter({ name: 'shan' }, player, event)) return true;
								if (name == 'diamond' && filter({ name: 'sha', nature: 'fire' }, player, event)) return true;
								if (name == 'spade' && filter({ name: 'wuxie' }, player, event)) return true;
								if (name == 'heart' && filter({ name: 'tao' }, player, event)) return true;
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
							init(player, skill) {
								player.storage[skill] = 0;
							},
							onuse(event, player) {
								if (player.storage.mslonghun + 1 == player.maxHp) {
									player.storage.mslonghun = 0;
									player.gainMaxHp();
								} else player.storage.mslonghun++;
							},
							onrespond(event, player) {
								if (player.storage.mslonghun + 1 == player.maxHp) {
									player.storage.mslonghun = 0;
									player.gainMaxHp();
								} else player.storage.mslonghun++;
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
							hiddenCard(player, name) {
								if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
								if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
								if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
							},
							group: ['mslonghun_num', 'mslonghun_discard'],
							subSkill: {
								num: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									popup: false,
									filter(event) {
										var evt = event;
										return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'mslonghun' && evt.cards && evt.cards.length > 1;
									},
									content() {
										trigger.baseDamage += trigger.cards.length - 1;
									},
								},
								discard: {
									trigger: {
										player: ['useCardAfter', 'respondAfter'],
									},
									forced: true,
									popup: false,
									logTarget() {
										return _status.currentPhase;
									},
									autodelay(event) {
										return event.name == 'respond' ? 0.5 : false;
									},
									filter(evt, player) {
										return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'mslonghun' && evt.cards && evt.cards.length > 1 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
									},
									content() {
										player.line(_status.currentPhase, 'green');
										player.discardPlayerCard(_status.currentPhase, 'he', trigger.cards.length - 1, true);
									},
								},
							},
						},
						mszhanjiang: {
							audio: 'ext:星舟扩展/audio/ms_zhaoyun:2',
							trigger: {
								player: ['phaseZhunbeiBegin', 'useCard'],
							},
							filter(event, player) {
								if (event.name == 'useCard') return player.getEquips('qinggang').length;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (players[i] != player && players[i].getEquips('qinggang').length) {
										return true;
									}
								}
							},
							forced: true,
							content() {
								'step 0';
								if (trigger.name == 'useCard') {
									trigger.directHit.addArray(game.players);
									event.finish();
								} else {
									player.chooseBool('是否发动【斩将】,获得场上的【青釭剑】？');
								}
								('step 1');
								if (result.bool) {
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i] != player) {
											var e = players[i].getEquips('qinggang');
											if (e.length) {
												player.line(players[i], 'green');
												player.gain(e, players[i], 'give', 'bySelf');
											}
										}
									}
								}
							},
							mod: {
								cardUsable(card, player) {
									if (player.getEquips('qinggang').length) return Infinity;
								},
								targetInRange(card, player) {
									if (player.getEquips('qinggang').length) return true;
								},
							},
						},
						mslongnu: {
							audio: 'ext:星舟扩展/audio/ms_liubei:2',
							mark: true,
							zhuanhuanji: true,
							marktext: '☯',
							intro: {
								content(storage, player, skill) {
									if (player.storage.mslongnu == true) return '锁定技,出牌阶段开始时,你减1点体力上限并摸一张牌,本阶段内你的锦囊牌均视为雷杀且无使用次数限制';
									return '锁定技,出牌阶段开始时,你失去1点体力并摸一张牌,本阶段内你的红色手牌均视为火杀且无距离限制';
								},
							},
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return !player.storage.mszhaolie;
							},
							forced: true,
							content() {
								'step 0';
								player.changeZhuanhuanji('mslongnu');
								if (player.storage.mslongnu != true) {
									player.loseMaxHp();
								} else {
									player.loseHp();
								}
								player.draw();
								('step 1');
								if (player.storage.mslongnu != true) {
									player.addTempSkill('mslongnu_2', 'phaseUseAfter');
								} else {
									player.addTempSkill('mslongnu_1', 'phaseUseAfter');
								}
							},
							group: 'mslongnu_rewrite',
							subSkill: {
								rewrite: {
									trigger: {
										player: 'phaseUseBegin',
									},
									filter(event, player) {
										return player.storage.mszhaolie;
									},
									forced: true,
									content() {
										'step 0';
										player
											.chooseControl('baonue_hp', 'baonue_maxHp', 'cancel2', function (event, player) {
												if (player.hp == player.maxHp) return 'baonue_hp';
												if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
												return 'baonue_hp';
											})
											.set('prompt', '龙怒:是否失去1点体力或减1点体力上限？');
										('step 1');
										if (result.control != 'cancel2') {
											if (result.control == 'baonue_hp') {
												player.loseHp();
											} else {
												player.loseMaxHp(true);
											}
											player.draw(2);
											player.addTempSkill('mslongnu_3', 'phaseUseAfter');
										} else event.finish();
									},
								},
								1: {
									charlotte: true,
									mod: {
										cardname(card, player) {
											if (get.color(card) == 'red') return 'sha';
										},
										cardnature(card, player) {
											if (get.color(card) == 'red') return 'fire';
										},
										targetInRange(card) {
											if (get.color(card) == 'red') return true;
										},
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
								2: {
									charlotte: true,
									mod: {
										cardname(card, player) {
											if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'sha';
										},
										cardnature(card, player) {
											if (['trick', 'delay'].includes(lib.card[card.name].type)) return 'thunder';
										},
										cardUsable(card, player) {
											if (card.name == 'sha' && game.hasNature(card, 'thunder')) return Infinity;
										},
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
								3: {
									charlotte: true,
									mod: {
										cardname(card, player) {
											return 'sha';
										},
										cardnature(card, player) {
											return get.color(card) == 'black' ? 'thunder' : 'fire';
										},
										cardUsable(card, player) {
											if (card.name == 'sha' && (game.hasNature(card, 'thunder') || game.hasNature(card, 'fire'))) return Infinity;
										},
										targetInRange(card) {
											if (card.name == 'sha' && (game.hasNature(card, 'thunder') || game.hasNature(card, 'fire'))) return true;
										},
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
							ai: {
								fireAttack: true,
								halfneg: true,
								threaten: 1.05,
							},
						},
						mslongnu_rewrited: {
							audio: 'mslongnu',
						},
						msjieying: {
							audio: 'ext:星舟扩展/audio/ms_liubei:2',
							global: 'msjieying_g',
							ai: {
								effect: {
									target(card) {
										if (card.name == 'tiesuo') return 'zeroplayertarget';
									},
								},
							},
							group: ['msjieying_1', 'msjieying_2', 'msjieying_block'],
							subSkill: {
								block: {
									trigger: {
										global: 'damageBegin',
									},
									filter(event, player) {
										if (event.source && event.source == player) return false;
										if (!event.hasNature()) return false;
										return player.hasAllHistory('useSkill', (evt) => {
											if (evt.skill != 'msjieying') return false;
											return evt.targets && evt.targets.includes(event.player);
										});
									},
									forced: true,
									logTarget: 'player',
									content() {
										trigger.cancel();
									},
								},
								1: {
									audio: 'msjieying',
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
										if (trigger.name != 'link') player.link(true);
										else trigger.cancel();
									},
								},
								2: {
									audio: 'msjieying',
									trigger: {
										player: 'phaseJieshuBegin',
									},
									forced: true,
									filter(event, player) {
										return game.hasPlayer(function (current) {
											return current != player && !current.isLinked();
										});
									},
									content() {
										'step 0';
										player.chooseTarget('结营:是否横置一名其他角色？', function (card, player, target) {
											return target != player && !target.isLinked();
										}).ai = function (target) {
											return 1 + Math.random();
										};
										('step 1');
										if (result.targets?.length) {
											player.line(result.targets);
											result.targets[0].link(true);
										} else {
											event.finish();
										}
									},
								},
								g: {
									mod: {
										maxHandcard(player, num) {
											if (
												game.countPlayer(function (current) {
													return current.hasSkill('msjieying');
												}) > 0 &&
												player.isLinked()
											)
												return num + 3;
										},
									},
								},
							},
						},
						mszhaolie: {
							trigger: {
								player: 'dieBefore',
							},
							forced: true,
							juexingji: true,
							derivation: ['mslonghun', 'tianren', 'mslongnu_rewrited'],
							content() {
								'step 0';
								trigger.cancel();
								player.awakenSkill('mszhaolie');
								player.storage.mszhaolie = true;
								var num = get.infoMaxHp(lib.character[player.name][2]);
								game.log(num);
								if (player.isZhu) num++;
								num = num * game.roundNumber;
								if (player.maxHp > num) player.loseMaxHp(player.maxHp - num);
								else if (player.maxHp < num) player.gainMaxHp(num - player.maxHp);
								('step 1');
								player.hp = player.maxHp;
								player.draw(Math.min(player.maxHp, 20));
								('step 2');
								player.addSkills(['mslonghun', 'tianren']);
							},
						},
						mslongyou: {
							init(player, skill) {
								if (get.mode() == 'identity' && _status.mode != 'purple' && !_status.brawl) {
									lib.translate[skill + '_info'] = '本模式不可用';
									lib.skill[skill] = {};
								} else game.addGlobalSkill(skill + '_g');
							},
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							logTarget: 'source',
							filter(event, player) {
								if (!event.source || event.source.isFriendsOf(player)) return false;
								return event.source.getSkills(null, false, false).some((skill) => {
									var info = get.info(skill);
									if (!info || info.charlotte || get.skillInfoTranslation(skill, event.source).length == 0) return false;
									return true;
								});
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								var skills = trigger.source.getSkills(null, false, false).filter((skill) => {
									var info = get.info(skill);
									if (!info || info.charlotte || get.skillInfoTranslation(skill, trigger.source).length == 0) return false;
									return true;
								});
								if (skills.length == 0) event.finish();
								else player.chooseControl(skills);
								('step 2');
								trigger.source.popup(result.control);
								trigger.source.removeSkills(result.control);
								event.num--;
								if (event.num > 0) event.goto(1);
							},
							subSkill: {
								g: {
									mod: {
										playerEnabled(card, player, target) {
											if (
												player.hasSkill('mslongyou') ||
												!game.hasPlayer((i) => {
													return i.hasSkill('mslongyou') && player.isEnemiesOf(i);
												})
											)
												return;
											if (!target.hasSkill('mslongyou') || player.isFriendsOf(target)) return false;
										},
									},
								},
							},
						},
						msbian: {
							trigger: {
								player: 'enterGame',
								global: 'phaseBefore',
							},
							filter(event, player) {
								return event.name != 'phase' || game.roundNumber == 0;
							},
							forced: true,
							charlotte: true,
							isForce(player) {
								if (player.isUnseen(0)) return true;
								if (!lib.character[player.name]) return false;
								var info = lib.character[player.name];
								var list = ['魏', '蜀', '吴', '群', '晋', '键', '秦', '莱', '西', '蒙', '璃', '稻', '须', '枫', '君', '臣', '民'];
								if (list.includes(get.translation(info[1]))) return true;
								return false;
							},
							intro: {
								name: '彼岸花',
								name2: '彼岸花',
								content: 'mark',
							},
							async content(event, trigger, player) {
								//QQQ
								var character = ['shen_guanyu', 'shen_lvmeng', 'shen_zhouyu', 'shen_zhugeliang', 'shen_caocao', 'shen_lvbu', 'shen_zhaoyun', 'shen_simayi'];
								for (var i of game.players) {
									i.addSkill('msbian_g');
									if (!lib.skill.msbian.isForce(i) && !character.includes(i.name)) {
										var skills = i.getSkills(null, false, false).filter((skill) => {
											var info = get.info(skill);
											if (!info || get.is.locked(skill, i) || get.skillInfoTranslation(skill, i).length == 0) return false;
											return true;
										});
										if (skills.some((skill) => get.info(skill).charlotte)) i.die();
										if (skills.length) i.addMark('msbian', skills.length);
									}
								}
							},
							group: 'msbian_unblock',
							subSkill: {
								unblock: {
									trigger: {
										global: 'damageEnd',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.player.isIn() && event.player.countMark('msbian') > 0;
									},
									content() {
										'step 0';
										event.num = Math.min(trigger.num, 9);
										('step 1');
										event.num--;
										trigger.player.removeMark('msbian', 1);
										var skills = trigger.player.getSkills(null, false, false).filter(function (i) {
											if (get.info(i) && get.info(i).limited) return false;
											var translation = get.skillInfoTranslation(i, trigger.player);
											if (!translation) return false;
											var match = translation.match(/<?出牌阶段限一次/g);
											if (match && match.some((value) => value == '限一次')) return false;
											return lib.skill.msbian_g.skillBlocker(i, player);
										});
										if (skills.length) {
											var skill = skills.randomGet();
											trigger.player.storage.noblock.remove(skill);
											game.log(trigger.player, '回复了', '#g【' + get.translation(skill) + '】');
											trigger.player.removeSkillBlocker('msbian_g');
											event.restore = true;
										}
										('step 2');
										if (event.restore) trigger.player.addSkillBlocker('msbian_g');
										if (trigger.player.countMark('msbian') == 0) trigger.player.die();
										if (event.num > 0) event.goto(1);
									},
								},
								g: {
									init(player, skill) {
										var character = ['shen_guanyu', 'shen_lvmeng', 'shen_zhouyu', 'shen_zhugeliang', 'shen_caocao', 'shen_lvbu', 'shen_zhaoyun', 'shen_simayi'];
										if (!lib.skill.msbian.isForce(player)) {
											player.storage.noblock = player.getSkills(null, false, false).filter(function (i) {
												return !lib.skill[i].charlotte && !get.is.locked(i, player);
											});
											if (character.includes(player.name)) player.storage.noblock = ['none'];
											player.addSkillBlocker(skill);
										}
									},
									onremove(player, skill) {
										if (!lib.skill.msbian.isForce(player)) player.removeSkillBlocker(skill);
									},
									trigger: {
										player: 'phaseDrawBegin2',
									},
									forced: true,
									filter(event, player) {
										return lib.skill.msbian.isForce(player) && !event.numFixed && game.hasPlayer((i) => i.hasSkill('msbian'));
									},
									content() {
										trigger.num += 3 * game.countPlayer((i) => i.hasSkill('msbian'));
									},
									charlotte: true,
									skillBlocker(skill, player) {
										if (player.storage.noblock && !player.storage.noblock.includes(skill)) return false;
										return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
									},
									mark: true,
									intro: {
										content(storage, player, skill) {
											if (lib.skill.msbian.isForce(player)) {
												var num = game.countPlayer((i) => i.hasSkill('msbian'));
												return '摸牌阶段额定摸牌数+' + 3 * num;
											}
											var list = player.getSkills(null, false, false).filter(function (i) {
												return lib.skill.msbian_g.skillBlocker(i, player);
											});
											if (list.length) return '失效技能:' + get.translation(list);
											return '无失效技能';
										},
									},
								},
							},
						},
						mshundun: {
							charlotte: true,
							forced: true,
							trigger: {
								source: 'damageBegin1',
								player: 'damageEnd',
							},
							filter(event, player, name) {
								var target = name == 'damageBegin1' ? event.player : event.source;
								return target && target.isIn() && target.hasMark('msbian') && player.getDamagedHp() > 0;
							},
							content() {
								'step 0';
								if (event.triggername != 'damageEnd') {
									trigger.num += player.getDamagedHp();
									event.finish();
								} else {
									trigger.source.judge((card) => {
										if (get.color(card) == 'red') return 4;
										return 2;
									});
								}
								('step 1');
								if (result.color) {
									var num = player.getDamagedHp();
									if (result.color == 'red') trigger.source.loseHp(num);
									else {
										var numx = trigger.source.countCards('he');
										trigger.source.chooseToDiscard('he', true, num);
										if (numx < num) trigger.source.loseHp(num - numx);
									}
								}
							},
							global: 'mshundun_target',
							subSkill: {
								target: {
									mod: {
										playerEnabled(card, player, target) {
											if (
												!game.hasPlayer((i) => {
													return i.hasSkill('mshundun');
												}) ||
												!player.hasMark('msbian')
											)
												return;
											if (!player.hasSkill('mshundun') && player == target) return false;
											if (!target.hasSkill('mshundun') && !target.hasMark('msbian')) return false;
										},
									},
								},
							},
						},
						msxukong: {
							charlotte: true,
							forced: true,
							mod: {
								maxHandcard(player, num) {
									return num + game.countPlayer((i) => !i.hasMark('msbian'));
								},
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								var num = game.countPlayer((i) => !i.hasMark('msbian'));
								return num > 0 && num < game.players.length;
							},
							content() {
								'step 0';
								player.draw(game.countPlayer((i) => !i.hasMark('msbian')));
								event.targets = game.filterPlayer((i) => i.hasMark('msbian')).sortBySeat();
								event.num = 0;
								player.line(event.targets[event.num], 'green');
								('step 1');
								if (event.targets[event.num]) {
									event.targets[event.num].damage();
									event.num++;
									event.redo();
								} else event.finish();
							},
							group: 'msxukong_save',
							subSkill: {
								save: {
									trigger: {
										global: 'dying',
									},
									filter(event, player) {
										return event.reason && event.reason.parent.name == 'msxukong';
									},
									forced: true,
									content() {
										'step 0';
										trigger.player.recover();
										('step 1');
										trigger.player.loseMaxHp();
									},
								},
							},
						},
						msshenshi: {
							charlotte: true,
							forced: true,
							derivation: 'mslunhui',
							trigger: {
								global: 'dieBegin',
							},
							filter(event, player) {
								return event.player.hasMark('msbian') || !player.storage.mslunhui || player.storage.mslunhui < 5;
							},
							logTarget: 'player',
							content() {
								'step 0';
								if (trigger.player.hasMark('msbian')) {
									var skills = trigger.player.getSkills(null, false, false).filter((skill) => {
										var infox = get.info(skill);
										if (!infox || infox.charlotte || get.skillInfoTranslation(skill, trigger.player).length == 0) return false;
										return true;
									});
									if (skills.length) {
										if (skills.length == 1 || trigger.player.group == 'shen') {
											event._result = {
												bool: true,
												control: skills,
											};
										} else player.chooseControl(skills).set('prompt', '选择获得一个技能');
									} else event.finish();
								} else event.goto(2);
								('step 1');
								player.addSkills(result.control);
								('step 2');
								if (!player.hasSkill('mslunhui')) {
									player.addSkills('mslunhui');
									player.storage.mslunhui = 1;
								} else if (player.storage.mslunhui < 5) player.storage.mslunhui++;
								player.markSkill('mslunhui');
							},
						},
						mslunhui: {
							init(player, skill) {
								player.storage.lunhui = 0;
							},
							mark: true,
							intro: {
								content(storage, player) {
									return '发动次数:' + player.storage.lunhui + '/' + storage;
								},
							},
							trigger: {
								player: 'dieBefore',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								return player.storage.lunhui < player.storage.mslunhui;
							},
							content() {
								'step 0';
								trigger.cancel();
								player.storage.lunhui++;
								player.loseMaxHp();
								player.markSkill('mslunhui');
								('step 1');
								player.hp = player.maxHp;
								('step 2');
								player.draw(Math.min(player.maxHp, 20));
								player.turnOver();
							},
						},
						mswushen: {
							audio: 'ext:星舟扩展/audio/ms_guanyu:2',
							charlotte: true,
							forced: true,
							mod: {
								suit(card, suit) {
									if (suit == 'spade') return 'heart';
									if (suit == 'club') return 'diamond';
								},
								cardUsable(card, player) {
									if (card.wushen && get.tag(card, 'damage')) return Infinity;
								},
								targetInRange(card, player) {
									if (card.wushen && get.tag(card, 'damage')) return true;
								},
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								if (!player.countCards('hes')) return false;
								var list = [];
								player.getHistory('useCard', (evt) => {
									if (get.type(evt.card) != 'trick' || !evt.skill || evt.skill != 'mswushen_backup') return false;
									list.push(evt.card.name);
								});
								for (var i of lib.inpile) {
									var type = get.type2(i);
									if (list.includes(i)) continue;
									if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i, wushen: true }, player, event)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									var listx = [];
									player.getHistory('useCard', (evt) => {
										if (get.type(evt.card) != 'trick' || !evt.skill || evt.skill != 'mswushen_backup') return false;
										listx.push(evt.card.name);
									});
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (listx.includes(name)) continue;
										if (name == 'sha') {
											if (event.filterCard({ name: name, wushen: true }, player, event)) list.push(['基本', '', 'sha']);
											for (var nature of lib.inpile_nature) {
												if (event.filterCard({ name: name, nature: nature, wushen: true }, player, event)) list.push(['基本', '', 'sha', nature]);
											}
										} else if (get.type2(name) == 'trick' && event.filterCard({ name: name, wushen: true }, player, event)) list.push(['锦囊', '', name]);
										else if (get.type(name) == 'basic' && event.filterCard({ name: name, wushen: true }, player, event)) list.push(['基本', '', name]);
									}
									return ui.create.dialog('武神', [list, 'vcard']);
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
										audio: 'mswushen',
										filterCard: (card) => ['diamond', 'heart'].includes(card.suit),
										popname: true,
										check(card) {
											return 8 - get.value(card);
										},
										position: 'hes',
										viewAs: { name: links[0][2], nature: links[0][3], wushen: true },
									};
								},
								prompt(links, player) {
									return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							hiddenCard(player, name) {
								if (!lib.inpile.includes(name)) return false;
								var list = [];
								player.getHistory('useCard', (evt) => {
									if (get.type(evt.card) != 'trick' || !evt.skill || evt.skill != 'mswushen_backup') return false;
									list.push(evt.card.name);
								});
								if (list.includes(name)) return false;
								var type = get.type2(name);
								return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0;
							},
							ai: {
								fireAttack: true,
								respondSha: true,
								respondShan: true,
								order: 1,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
							global: 'mswushen_number',
							group: 'mswushen_effect',
							subSkill: {
								backup: { charlotte: true },
								effect: {
									audio: 'mswushen',
									trigger: {
										player: 'useCard',
										source: 'damageBegin1',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										if (event.name == 'damageBegin1' && !event.notLink()) return false;
										return event.card && event.card.wushen && get.tag(event.card, 'damage');
									},
									content() {
										if (trigger.name == 'useCard') {
											trigger.directHit.addArray(game.players);
										} else trigger.num += 2;
									},
								},
								number: {
									mod: {
										cardnumber(card) {
											return 2;
										},
									},
								},
							},
						},
						mswuhun: {
							forced: true,
							charlotte: true,
							audio: 'ext:星舟扩展/audio/ms_guanyu:2',
							trigger: {
								player: ['dieBegin', 'damageEnd'],
							},
							filter(event, player) {
								if (event.name == 'damage') return event.source && event.source.isIn();
								return game.hasPlayer((i) => i != player && i.hasMark('mswuhun'));
							},
							marktext: '梦魇',
							intro: {
								name: '梦魇',
								name2: '梦魇',
								content: 'mark',
							},
							content() {
								'step 0';
								if (trigger.name == 'damage') {
									var num = Math.min(trigger.num, trigger.source.countCards('he'));
									var num2 = trigger.num;
									if (trigger.source.isEnemiesOf(player) && player.hasSkill('msglongyou')) {
										if (get.mode() == 'identity' && _status.mode != 'purple' && !_status.brawl) {
										} else {
											num2 *= 2;
										}
									}
									trigger.source.addMark('mswuhun', num2);
									player.gainPlayerCard(trigger.source, true, num, 'he');
									event.finish();
								} else {
									player
										.judge(function (card) {
											var name = card.name;
											if (name == 'tao' || name == 'taoyuan') return -25;
											return 15;
										})
										.set('forceDie', true).judge2 = function (result) {
											return result.bool;
										};
								}
								('step 1');
								if (result.bool) {
									player
										.chooseTarget('武魂:令任意名梦魇标记最多的角色死亡', [1, Infinity], true, function (card, player, target) {
											return game.players.every((i) => i.countMark('mswuhun') <= target.countMark('mswuhun'));
										})
										.set('ai', (target) => {
											return -get.attitude(player, target);
										});
								} else event.finish();
								('step 2');
								for (var i of result.targets) {
									if (i.hasSkill('mstaiqing') && !i.hasSkill('mstaiqing_defended')) {
										i.addSkill('mstaiqing_defended');
										event.clear = i;
									} else i.die();
								}
								('step 3');
								event.targets = game.players
									.filter((i) => {
										if (event.clear && event.clear == i) return false;
										return i.hasMark('mswuhun');
									})
									.sortBySeat();
								event.num = 0;
								('step 4');
								var target = event.targets[event.num];
								if (target.hasSkill('mstaiqing') && !target.hasSkill('mstaiqing_defended')) {
									target.addSkill('mstaiqing_defended');
									event.num++;
									event.goto(6);
								} else {
									var num = target.countMark('mswuhun');
									target.chooseToDiscard(num, '弃置' + num + '张牌,或点取消失去' + num + '点体力', 'he');
								}
								('step 5');
								if (!result.bool) {
									var target = event.targets[event.num],
										num = target.countMark('mswuhun');
									target.loseHp(num);
								}
								event.num++;
								('step 6');
								if (event.num < event.targets.length) event.goto(4);
								('step 7');
								if ((!player.storage.wfuhuo || player.storage.wfuhuo < 2) && game.hasPlayer((i) => i.isIn() && i.hasMark('mswuhun'))) {
									if (!player.storage.wfuhuo) player.storage.wfuhuo = 1;
									else player.storage.wfuhuo++;
									trigger.cancel();
									player.loseMaxHp();
									player.when('loseMaxHpEnd').then(() => player.recover(114));
								}
							},
						},
						mszhongyi: {
							trigger: {
								player: 'changeHpAfter',
							},
							filter(event, player) {
								return player.hp - event.num >= 2 && player.hp < 2;
							},
							audio: 'ext:星舟扩展/audio/ms_guanyu:1',
							forced: true,
							charlotte: true,
							content() {
								'step 0';
								var cards = [];
								game.players.forEach((i) => {
									cards.addArray(i.getCards('ej', (card) => card.number == 2));
								});
								if (cards.length) {
									player.gain(cards, 'give');
									event.cards = cards;
								} else event.finish();
								('step 1');
								player.chooseCardTarget({
									filterCard(card) {
										return event.cards.includes(card);
									},
									selectCard: [1, Infinity],
									filterTarget: true,
									forced: true,
									prompt: '将获得的2点数牌交给其他角色',
									ai1(card) {
										return 7 - get.value(card);
									},
									ai2(target) {
										return get.attitude(player, target);
									},
								});
								('step 2');
								if (result.targets?.length) {
									player.give(result.cards, result.targets[0]);
									if (result.targets[0].hasMark('mswuhun')) result.targets[0].removeMark('mswuhun', Math.min(result.cards.length, result.targets[0].countMark('mswuhun')));
									if (player.getCards('h').some((i) => !result.cards.includes(i) && event.cards.includes(i))) event.goto(1);
								} else event.finish();
							},
						},
						msglongyou: {
							forced: true,
							charlotte: true,
							init(player, skill) {
								if (get.mode() == 'identity' && _status.mode != 'purple' && !_status.brawl) {
									lib.translate[skill + '_info'] = '本模式不可用';
									lib.skill[skill] = {};
								} else game.addGlobalSkill(skill + '_g');
							},
							subSkill: {
								g: {
									mod: {
										playerEnabled(card, player, target) {
											if (
												player.hasSkill('msglongyou') ||
												!game.hasPlayer((i) => {
													return i.hasSkill('msglongyou') && player.isEnemiesOf(i);
												})
											)
												return;
											if (!target.hasSkill('msglongyou') || player.isFriendsOf(target)) return false;
										},
									},
								},
							},
						},
						msrlveying: {
							audio: 'mslveying',
							enable: ['chooseToUse', 'chooseToRespond'],
							global: ['caochuan_skill'],
							filter(event, player) {
								if (player.countMark('msrlveying') >= 5 || !player.countCards('hes')) return false;
								for (var i of ['shan', 'tao', 'jiu', 'wuxie', 'caochuan']) {
									if (event.filterCard({ name: i }, player, event)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [],
										listx = ['shan', 'tao', 'jiu', 'wuxie', 'caochuan'];
									for (var i = 0; i < listx.length; i++) {
										var name = listx[i];
										if (['wuxie', 'caochuan'].includes(name) && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
										else if (['shan', 'tao', 'jiu'].includes(name) && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
									}
									return ui.create.dialog('掠影', [list, 'vcard']);
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
										popname: true,
										check(card) {
											return 8 - get.value(card);
										},
										audio: 'mslveying',
										position: 'hes',
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											player.addTempSkill('msrlveying_draw');
											player.addMark('msrlveying', 1, false);
										},
									};
								},
								prompt(links, player) {
									return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							hiddenCard(player, name) {
								return ['shan', 'tao', 'jiu', 'wuxie', 'caochuan'].includes(name) && player.countMark('msrlveying') < 5 && player.countCards('hes') > 0;
							},
							subSkill: {
								backup: {},
								draw: {
									trigger: {
										player: ['useCard', 'respond'],
									},
									forced: true,
									charlotte: true,
									onremove(player) {
										player.storage.msrlveying = 0;
									},
									filter(event, player) {
										return event.skill && event.skill == 'msrlveying_backup';
									},
									content() {
										player.draw();
									},
								},
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (player.countMark('msrlveying') >= 5 || !player.countCards('hes')) return false;
								},
								order: 1,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
						},
						msranyao: {
							audio: 'msanyao',
							trigger: {
								player: ['zhuguang'],
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.storage.mszhuguang.length > 3;
							},
							content() {
								'step 0';
								player.awakenSkill('msranyao');
								player.gainMaxHp(2);
								('step 1');
								player.chooseDrawRecover(4, 2);
								player.removeSkills('mszhuguang');
								player.addSkills(['msrsanhua', 'msmingmie']);
							},
							derivation: ['msrsanhua', 'msmingmie'],
						},
						msrsanhua: {
							audio: 'mssanhua',
							trigger: {
								player: ['damageBegin4'],
							},
							forced: true,
							content() {
								'step 0';
								player.judge((card) => {
									if (get.color(card) == 'red') return 2;
									return 4;
								});
								('step 1');
								if (result.color) {
									if (result.color == 'red') {
										var cards = [];
										if (trigger.cards) cards.addArray(trigger.cards);
										if (cards) player.gain(cards, 'gain2');
									} else trigger.cancel();
								}
							},
						},
						msdjuejing: {
							audio: 'msjuejing',
							trigger: {
								player: 'loseAfter',
							},
							forced: true,
							filter(event, player) {
								for (var i of lib.suits) {
									if (player.countCards('h', (card) => card.suit == i) < player.maxHp) return true;
								}
								return false;
							},
							content() {
								if (player.countCards('h', (i) => lib.card[i.name].type == 'delay' || game.xunshi(i)) < player.maxHp) {
									var card = Array.from(ui.cardPile.childNodes)
										.filter((i) => lib.card[i.name].type == 'delay' || game.xunshi(i))
										.randomGets(player.maxHp);
									if (card && card.length) player.gain(card, 'gain2'); //QQQ
								}
								for (var i of lib.suits) {
									if (player.countCards('h', (card) => card.suit == i) < player.maxHp) {
										var card = Array.from(ui.cardPile.childNodes)
											.filter((Q) => Q.suit == i)
											.randomGets(player.maxHp);
										if (card && card.length) player.gain(card, 'gain2'); //QQQ
									}
								}
							},
							mod: {
								suit(card) {
									if (lib.card[card.name].type == 'delay' || game.xunshi(card)) return 'none';
								},
							},
							ai: {
								effect: {
									target(card) {
										if (card.name == 'guohe') return 0.1;
									},
									player(card, player, target) {
										if (player.getEquips('zhuge') && get.subtype(card) == 'equip1' && card.name != 'zhuge') return -1;
										return [1, 1.6]; //无脑用牌
									},
								},
								noh: true,
							},
							//延时锦囊视为🃏,检测类型需要检测名字,你又有个花色♥️️视为杀,这样导致花色=>类型=>名字=>花色=>类型无限堆栈
						},
						msdlonghun: {
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt: '将♦️️牌当做火【杀】,♥️️牌当做【桃】,♣️️牌当做【闪】,♠️️牌当做【无懈可击】使用或打出',
							viewAs(cards, player) {
								var name;
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
							init(player) {
								player.storage.msdlonghun = 0;
							},
							onuse(result, player) {
								player.storage.msdlonghun++;
								if (player.storage.msdlonghun > 9) {
									//QQQ
									player.storage.msdlonghun = 0;
									player.gainMaxHp();
								}
							},
							onrespond(result, player) {
								player.storage.msdlonghun++;
								if (player.storage.msdlonghun > 9) {
									//QQQ
									player.storage.msdlonghun = 0;
									player.gainMaxHp();
								}
							},
							check(card) {
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
							audio: 'longhun', //QQQ
							position: 'hes',
							filterCard(card, player, event) {
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
							hiddenCard(player, name) {
								if (name == 'wuxie' && _status.connectMode && player.countCards('hes') > 0) return true;
								if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
								if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
							},
						},
						msdzhanjiang: {
							audio: 'mszhanjiang',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (players[i] != player && (players[i].getEquips('qinggang').length || players[i].getEquips('yinyueqiang').length)) {
										return true;
									}
								}
							},
							prompt: '是否发动【斩将】,获得场上的【青釭剑】/【银月枪】？',
							content() {
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (players[i] != player) {
										var e = players[i].getEquips('qinggang').concat(players[i].getEquips('yinyueqiang'));
										if (e.length) {
											player.line(players[i], 'green');
											player.gain(e, players[i], 'give', 'bySelf');
										}
									}
								}
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name != 'sha') return;
									if (player.getEquips('qinggang').length || player.getEquips('yinyueqiang').length) return num + 5;
								},
								targetInRange(card, player) {
									if (player.getEquips('qinggang').length || player.getEquips('yinyueqiang').length) return true;
								},
							},
						},
						mshuzhu: {
							round: 2,
							trigger: {
								global: 'dying',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseToDiscard('护主:是否弃置一张🃏牌令' + get.translation(trigger.player) + '回复体力？', function (card, player) {
										return card.suit == 'none';
									})
									.set('ai', function (card) {
										if (_status.event.att > 0) return 1;
										return 0;
									})
									.set('att', get.attitude(player, trigger.player));
								('step 1');
								if (result.bool) {
									var target = trigger.player,
										info = lib.character[target.name || target.name1];
									var maxHp = get.infoMaxHp(info[2]);
									target.maxHp = maxHp;
									target.update();
									game.log(target, '将体力上限调整为了', maxHp);
								} else event.finish();
								('step 2');
								if (trigger.player.hp < trigger.player.maxHp) trigger.player.hp = trigger.player.maxHp;
								trigger.player.drawTo(trigger.player.maxHp);
								('step 3');
								var card = game.createCard('huxinjing');
								if (card && trigger.player.canEquip(card, true)) trigger.player.equip(card);
								('step 4');
								if (trigger.player == player) player.addTempSkill('mshuzhu_effect', 'roundStart');
							},
							subSkill: {
								effect: {
									charlotte: true,
									mark: true,
									intro: {
										content: '本轮【龙魂】使用次数翻倍',
									},
								},
							},
						},
						mshuozhong: {
							init() {
								for (var i of ['yeyan', 'nzry_dinghuo', 'pingxiang']) {
									lib.skill[i].usable = 1;
								}
								lib.translate['mshuozhong_honglian'] = '红莲';
								lib.translate['mshuozhong_honglian_info'] = '锁定技,结束阶段,你摸两张牌,并对所有敌人造成1点伤害.';
							},
							audio: 'ext:星舟扩展/audio/msyywc:2',
							trigger: {
								source: ['damageBegin', 'damageSource'],
							},
							forced: true,
							firstDo: true,
							filter(event, player, name) {
								if (name == 'damageSource') return event.hasNature('fire');
								var list = get.natureList(event.nature);
								return !event.hasNature() || list.some((i) => i != 'fire');
							},
							content() {
								'step 0';
								if (event.triggername == 'damageBegin') {
									trigger.nature = 'fire';
									event.finish();
								} else {
									player
										.chooseTarget('火种:令一名角色回复1点体力', function (card, player, target) {
											if (get.mode() == 'identity' && _status.mode != 'purple' && !_status.brawl) return true;
											return player.isFriendsOf(target);
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											return get.attitude(player, target);
										});
								}
								('step 1');
								var target = result.targets[0];
								player.line(target, 'green');
								if (get.mode() == 'identity' && _status.mode != 'purple' && !_status.brawl) target.recover();
								else {
									if (target.isDamaged()) target.recover();
									else target.gainMaxHp();
								}
							},
							group: ['mshuozhong_honglian', 'yeyan', 'relonghun', 'nzry_junlve', 'nzry_dinghuo', 'pingxiang'],
							subSkill: {
								honglian: {
									audio: 'mshuozhong',
									trigger: {
										player: 'phaseJieshuBegin',
									},
									forced: true,
									content() {
										'step 0';
										event.players = get.players(player);
										event.players.remove(player);
										player.draw(2);
										('step 1');
										if (event.players.length) {
											event.players.shift().damage('fire');
											event.redo();
										}
									},
								},
							},
						},
						msyingyao: {
							audio: 'ext:星舟扩展/audio/msyywc:2',
							forced: true,
							trigger: {
								player: 'damageBegin4',
								source: 'damageBegin1',
							},
							filter(event, player, name) {
								if (name == 'damageBegin1' && !player.isDamaged()) return false;
								return event.hasNature('fire');
							},
							content() {
								if (event.triggername == 'damageBegin1') {
									player.recover(trigger.num);
								} else {
									trigger.cancel();
									if (player.isDamaged()) player.recover(trigger.num);
									else player.gainMaxHp();
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'fireDamage')) return [0, 10];
									},
								},
							},
						},
						msshengxi: {
							audio: 'ext:星舟扩展/audio/msyywc:2',
							round: 1,
							trigger: {
								global: 'dying',
							},
							filter(event, player) {
								return player.isFriendsOf(event.player);
							},
							forced: true,
							content() {
								'step 0';
								event.targets = game.players.filter((i) => player.isEnemiesOf(i)).sortBySeat();
								('step 1');
								if (event.targets.length) {
									event.targets.shift().damage('fire');
									event.redo();
								}
								('step 2');
								var num = 0;
								player.getHistory('sourceDamage', (evt) => {
									if (evt.parent == event) num += evt.num;
								});
								trigger.player.recover(num);
							},
						},
						msshenghu: {
							forced: true,
							charlotte: true,
							trigger: {
								player: 'damageEnd',
								source: 'damageSource',
							},
							content() {
								'step 0';
								var cards = game.cardsGotoOrdering(get.cards(trigger.num)).cards;
								event.cards = cards;
								player.showCards(cards, get.translation(player) + '发动了【圣护】');
								if (!player.storage.msshengjian_count) player.storage.msshengjian_count = 0;
								var num = 0;
								cards.forEach((card) => (num += card.number));
								player.storage.msshengjian_count += num;
								game.log(player, '记录了', '#r' + num);
								('step 1');
								if (player.storage.mszhongzhang) {
									if (player.storage.msshengjian_count >= 220 && player.hasSkill('msshenghu')) {
										while (player.storage.msshengjian_count >= 220) {
											player.storage.msshengjian_count -= 220;
											var skills = lib.skill.msshengjian.derivation.filter((i) => !player.hasSkill(i));
											if (skills.length) {
												player.addSkills(skills.randomGet());
											}
										}
									}
								} else {
									if (player.storage.msshengjian_count >= 22 && player.hasSkill('msshengjian')) {
										while (player.storage.msshengjian_count >= 22 && player.countMark('msshengjian') < 5) {
											player.storage.msshengjian_count -= 22;
											player.addSkills(lib.skill.msshengjian.derivation[player.countMark('msshengjian')]);
											player.addMark('msshengjian', 1);
										}
									}
								}
								player.update();
								('step 2');
								var list = [];
								var dialog = ['圣护:获得一种类型的所有牌'];
								for (var type of ['equip', 'basic', 'trick']) {
									if (event.cards.some((i) => get.type2(i) == type)) {
										dialog.push('<div class="text center">' + get.translation(type) + '牌</div>');
										dialog.push(event.cards.filter((i) => get.type2(i) == type));
										list.push(type);
									}
								}
								if (list.length) {
									if (list.length > 1) {
										player
											.chooseControl(list)
											.set('dialog', dialog)
											.set('ai', () => {
												return _status.event.control;
											})
											.set(
												'control',
												(() => {
													var getv = (cards) => cards.map((i) => get.value(i)).reduce((p, c) => p + c, 0);
													return list.sort((a, b) => {
														return getv(event.cards.filter((i) => get.type2(i) == b)) - getv(event.cards.filter((i) => get.type2(i) == a));
													})[0];
												})()
											);
									} else {
										event._result = {
											bool: true,
											control: list[0],
										};
									}
								} else event.finish();
								('step 3');
								var cards = event.cards.filter((i) => get.type2(i) == result.control);
								var cardsb = event.cards.filter((i) => get.type2(i) != result.control);
								player.gain(cards, 'gain2');
								player.recover(cardsb.length);
							},
							ai: {
								nofire: true,
								nothunder: true,
								nodamage: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) return [1, 1];
									},
								},
							},
						},
						msshengjian: {
							forced: true,
							charlotte: true,
							trigger: {
								player: ['loseAfter', 'useCard', 'respond'],
								global: 'loseAsyncAfter',
							},
							filter(event, player) {
								if (event.name.indexOf('lose') == -1) return event.cards && event.cards.length;
								if (event.type != 'discard') return false;
								var evt = event.getl(player);
								return evt && evt.cards2 && evt.cards2.length;
							},
							mark: true,
							intro: {
								markcount(storage) {
									var num = storage || 0;
									if (num > 10) num -= 10;
									return num;
								},
								content(storage, player) {
									var num = storage || 0;
									if (num > 10) num -= 10;
									var str = '当前<圣剑>标记数:' + num;
									str += '<br>当前记录点数:' + (player.storage.msshengjian_count || 0);
									return str;
								},
							},
							derivation: ['msshengjiana', 'msshengjianb', 'msshengjianc', 'msshengjiand', 'msshengjiane'],
							content() {
								'step 0';
								var cards = trigger.name.indexOf('lose') == -1 ? trigger.cards : trigger.getl(player).cards2;
								if (!player.storage.msshengjian_count) player.storage.msshengjian_count = 0;
								var num = 0;
								cards.forEach((card) => (num += card.number));
								player.storage.msshengjian_count += num;
								game.log(player, '记录了', '#r' + num);
								('step 1');
								if (player.storage.mszhongzhang) {
									if (player.storage.msshengjian_count >= 220 && player.hasSkill('msshenghu')) {
										while (player.storage.msshengjian_count >= 220) {
											player.storage.msshengjian_count -= 220;
											var skills = lib.skill.msshengjian.derivation.filter((i) => !player.hasSkill(i));
											if (skills.length) {
												player.addSkills(skills.randomGet());
											}
										}
									}
								} else {
									if (player.storage.msshengjian_count >= 22 && player.hasSkill('msshengjian')) {
										while (player.storage.msshengjian_count >= 22 && player.countMark('msshengjian') < 5) {
											player.storage.msshengjian_count -= 22;
											player.addSkills(lib.skill.msshengjian.derivation[player.countMark('msshengjian')]);
											player.addMark('msshengjian', 1);
										}
									}
								}
								player.update();
							},
						},
						msshengjiana: {
							trigger: {
								player: 'useCard',
							},
							firstDo: true,
							filter(event, player) {
								return event.card.name == 'sha';
							},
							forced: true,
							charlotte: true,
							content() {
								trigger.directHit.addArray(game.players);
								trigger.card.shengjian_tag = true;
							},
							ai: {
								unequip: true,
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (!arg || !arg.card || !arg.card.shengjian_tag) return false;
								},
							},
							mod: {
								targetInRange(card, player) {
									return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + player.countMark('msshengjian');
								},
							},
						},
						msshengjianb: {
							trigger: {
								player: ['damageBegin3', 'loseMaxHpBegin', 'changeHujiaBegin'],
							},
							firstDo: true,
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (event.name == 'changeHujia') return event.type != 'gain';
								if (event.name == 'loseMaxHp') return player.hujia > 0;
								return event.hasNature();
							},
							content() {
								if (trigger.name == 'loseMaxHp') trigger.cancel();
								else if (trigger.name == 'damage') {
									trigger.cancel();
									player.changeHujia(trigger.num);
								} else {
									if (trigger.type != 'damage') trigger.cancel();
									else {
										player.addSkill('msshengjianb_hand');
										if (!player.storage.msshengjianb_hand) player.storage.msshengjianb_hand = 0;
										player.storage.msshengjianb_hand += Math.abs(trigger.num);
										player.gainMaxHp(Math.abs(trigger.num));
									}
								}
							},
							ai: {
								effect: {
									target(card) {
										if (get.tag(card, 'natureDamage')) return [0, 10];
									},
								},
							}, //QQQ
							subSkill: {
								hand: {
									trigger: {
										source: 'damageBegin1',
									},
									firstDo: true,
									charlotte: true,
									forced: true,
									content() {
										trigger.num += player.storage.msshengjianb_hand || 0;
									},
									mod: {
										maxHandcard(player, num) {
											return num + (player.storage.msshengjianb_hand || 0);
										},
									},
									mark: true,
									intro: {
										content: '造成伤害、手牌上限+#',
									},
								},
							},
						},
						msshengjianc: {
							trigger: {
								player: ['loseAfter'],
							},
							firstDo: true,
							forced: true,
							charlotte: true,
							filter(event, player) {
								return event.cards && event.cards.length > 1; //QQQ
							},
							content() {
								player.draw(2 * trigger.cards.length);
							},
							mod: {
								targetEnabled(card, player) {
									if ((get.tag(card, 'damage') && get.type(card) == 'trick') || get.type(card) == 'delay') return false;
								},
							},
							group: ['msshengjianc_1'],
							subSkill: {
								1: {
									trigger: {
										player: ['dying'],
									},
									firstDo: true,
									forced: true,
									charlotte: true,
									async content(event, trigger, player) {
										const result = await player
											.chooseTarget('圣剑:令一名角色失去体力', true)
											.set('ai', (target) => target.isEnemiesOf(_status.event.player))
											.forResult();
										if (result.targets?.length) {
											player.line(result.targets[0], 'green');
											result.targets[0].loseHp(Math.ceil(player.getDamagedHp() / 2));
										}
									},
								}, //QQQ
							},
						},
						msshengjiand: {
							trigger: {
								player: 'changeHpAfter',
								source: 'damageBegin1',
							},
							firstDo: true,
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (event.name == 'changeHp') return event.num < 0;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget('令一名角色的一个锁定技失效', true).set('ai', function (target) {
									return -get.attitude(player, target);
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									var skills = target.getSkills(null, false, false).filter((skill) => {
										var info = get.info(skill);
										if (target.disabledSkills && target.disabledSkills[skill]) return false;
										if (!info || info.charlotte || !get.is.locked(skill) || get.skillInfoTranslation(skill, target).length == 0) return false;
										return true;
									});
									event.target = target;
									player.chooseControl(skills);
								} else event.finish();
								('step 2');
								event.target.disableSkill('msshengjian', result.control);
								if (!player.storage.msshengjian_four) player.storage.msshengjian_four = [];
								if (!player.storage.msshengjian_foured) player.storage.msshengjian_foured = [];
								player.storage.msshengjian_four.push([event.target, result.control]);
								if (event.target.name2 != undefined) {
									game.log(event.target, '移除了副将', '#b' + event.target.name2);
									event.target.changeCharacter([event.target.name], false);
									event.target.chooseToDiscard('he', true, event.target.hp);
								}
							},
							group: 'msshengjiand_clear',
							subSkill: {
								clear: {
									trigger: {
										global: 'roundStart',
										player: 'phaseEnd',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player.storage.msshengjian_four || player.storage.msshengjian_foured;
									},
									content() {
										if (event.triggername == 'roundStart') {
											for (var i of player.storage.msshengjian_four.slice(0)) {
												player.storage.msshengjian_four.remove(i);
												player.storage.msshengjian_foured.push(i);
											}
										} else {
											for (var i of player.storage.msshengjian_foured.slice(0)) {
												player.storage.msshengjian_foured.remove(i);
												if (i[0].disabledSkills[i[1]]) delete i[0].disabledSkills[i[1]];
												game.log(i[0], '的', '#g【' + get.translation(i[1]) + '】', '回复了');
											}
											_status.event.clearStepCache();
										}
									},
								},
							},
						},
						msshengjiane: {
							firstDo: true,
							forced: true,
							charlotte: true,
							trigger: {
								global: ['logSkill', 'useSkillAfter'],
							},
							filter(event, player) {
								if (event.type != 'player') return false;
								var skill = event.sourceSkill || event.skill;
								var info = get.info(skill);
								return !info.charlotte && !info.limited && event.player.isEnemiesOf(player);
							},
							logTarget: 'player',
							content() {
								'step 0';
								var skill = trigger.sourceSkill || trigger.skill;
								player.chooseControl('失去技能', '结束回合').set('prompt', get.translation(trigger.player) + '发动了技能【' + get.translation(skill) + '】');
								('step 1');
								if (result.control == '失去技能') {
									var skill = trigger.sourceSkill || trigger.skill;
									trigger.player.removeSkills(skill);
									trigger.player.popup(skill);
								} else {
									var cards = Array.from(ui.ordering.childNodes);
									while (cards.length) {
										cards.shift().discard();
									}
									var evt = _status.event.getParent('phase');
									if (evt && evt.name == 'phase') {
										//QQQ
										evt.finish();
									}
								}
								trigger.player.addSkill('msshengjiane_card');
							},
							subSkill: {
								card: {
									trigger: {
										global: 'phaseEnd',
									},
									forced: true,
									charlotte: true,
									forced: true,
									filter(event, player) {
										return event.player.hasSkill('msshengjian');
									},
									content() {
										player.removeSkill(event.name);
									},
									mod: {
										cardEnabled2(card) {
											return false;
										},
									},
								},
							},
						},
						mszhongzhang: {
							forced: true,
							charlotte: true,
							trigger: {
								player: 'dieBefore',
							},
							juexingji: true,
							content() {
								'step 0';
								trigger.cancel();
								player.awakenSkill('mszhongzhang');
								player.storage[event.name] = true;
								player.loseMaxHp(Math.floor(player.maxHp / 2));
								('step 1');
								player.hp = player.maxHp;
								var skills = lib.skill.msshengjian.derivation.slice(0, player.storage.msshengjian);
								var save = skills.randomGets(2);
								player.removeSkill(skills.removeArray(save));
								game.log(player, '保留了', '#g' + get.translation(save));
							},
							init(player, skill) {
								player.storage[skill] = false;
							},
						},
						mszhixu: {
							forced: true,
							zhuanhuanji: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							mark: true,
							marktext: '☯',
							intro: {
								content(storage, player) {
									var num = Math.min(3, player.getAllHistory('useSkill', (evt) => evt.skill == 'mszhixu').length + 1);
									var str = '准备阶段,';
									if (num > 1) str += '你摸' + get.cnNumber(num - 1) + '张牌并';
									if (storage) str += '增加' + num + '点体力上限<br>';
									else str += '回复' + num + '点体力<br>';
									str += '你可以将一张' + (storage ? '红色' : '黑色') + '牌当作无距离限制的基本牌使用或打出';
									return str;
								},
							},
							content() {
								var num = Math.min(3, player.getAllHistory('useSkill', (evt) => evt.skill == 'mszhixu').length);
								if (player.storage.mszhixu) player.gainMaxHp(num);
								else player.recover(num);
								if (num > 1) player.draw(num - 1);
								player.changeZhuanhuanji('mszhixu');
							},
							hiddenCard(player, name) {
								if (
									player.group == 'wu' &&
									(name == 'sha' || name == 'jiu') &&
									player.hasCard(function (card) {
										return get.type(card) == 'equip';
									}, 'hes')
								)
									return true;
								return false;
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								if (event.name && event.name == 'phaseZhunbei') return true;
								if (!player.countCards('hes', (card) => get.color(card, player) == (player.storage.mszhixu ? 'red' : 'black'))) return false;
								for (var i of lib.inpile) {
									var type = get.type2(i);
									if (type == 'basic' && event.filterCard({ name: i }, player, event)) return true;
								}
								return false;
							},
							mod: {
								targetInRange(card) {
									if (card.storage && card.storage.mszhixu) return true;
								},
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (name == 'sha') {
											if (event.filterCard({ name }, player, event)) list.push(['基本', '', 'sha']);
											for (var nature of lib.inpile_nature) {
												if (event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
											}
										} else if (get.type(name) == 'basic' && event.filterCard({ name }, player, event)) list.push(['基本', '', name]);
									}
									return ui.create.dialog('秩序', [list, 'vcard']);
								},
								check(button) {
									if (_status.event.parent.type != 'phase') return 1;
									var player = _status.event.player;
									return player.getUseValue({
										name: button.link[2],
										nature: button.link[3],
									});
								},
								backup(links, player) {
									return {
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
											storage: { mszhixu: true },
										},
										filterCard(card) {
											var player = _status.event.player,
												storage = player.storage.mszhixu;
											return get.color(card, player) == (storage ? 'red' : 'black');
										},
										position: 'hes',
										popname: true,
										check(card) {
											return 5 - get.value(card);
										},
									};
								},
								prompt(links, player) {
									var storage = player.storage.mszhixu;
									return '将一张' + (storage ? '红' : '黑') + '色牌当做' + (links[0][3] ? get.translation(links[0][3]) : '') + '【' + get.translation(links[0][2]) + '】使用或打出';
								},
							},
							ai: {
								respondSha: true,
								respondShan: true,
								save: true,
								skillTagFilter(player, tag, arg) {
									return player.countCards('hes', (card) => get.color(card, player) == (player.storage.mszhixu ? 'red' : 'black'));
								},
								order(item, player) {
									if (_status.event.type != 'phase') return 1;
									return 4;
								},
								result: {
									player: 1,
								},
							},
						},
						mszhenhuan: {
							forced: true,
							trigger: {
								player: 'phaseJudgeBefore',
								global: 'roundStart',
							},
							content() {
								'step 0';
								if (event.triggername == 'roundStart') event.target = player;
								else {
									trigger.cancel();
									event.finish();
								}
								('step 1');
								event.target = event.target.next;
								var info = lib.character[event.target.name1 || event.target.name];
								if (info) {
									var hp = get.infoHp(info[2]);
									var maxHp = get.infoMaxHp(info[2]);
									if (hp != event.target.hp || maxHp != event.target.maxHp) player.line(event.target, 'green');
									event.target.maxHp = maxHp;
									event.target.hp = hp;
									event.target.update();
								}
								if (event.target != player.previous) event.redo();
							},
						},
						mszhangkong: {
							enable: 'phaseUse',
							limited: true,
							filterCard(card) {
								if (ui.selected.cards.length) return card.name != ui.selected.cards[0].name;
								return true;
							},
							selectCard: 2,
							position: 'h',
							discard: false,
							lose: false,
							delay: false,
							complexSelect: true,
							check(card) {
								if (get.type(card) != 'basic' && get.type(card) != 'trick') return 0;
								return get.value(card) - 7.5;
							},
							content() {
								'step 0';
								var cardv = [];
								player.awakenSkill('mszhangkong');
								for (var card of cards) {
									var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
									if (cardx) cardv.push(cardx);
								}
								player.gain(cardv).gaintag.add('mszhangkong');
								player.addSkill('mszhangkong_effect');
							},
							ai: {
								order: 15,
								result: {
									player: 1,
								},
							},
							subSkill: {
								effect: {
									mod: {
										canBeGained(card, source, player) {
											if (card.hasGaintag('mszhangkong')) return false;
										},
										canBeDiscarded(card, source, player) {
											if (card.hasGaintag('mszhangkong')) return false;
										},
										cardDiscardable(card, player) {
											if (card.hasGaintag('mszhangkong')) return false;
										},
										suit(card) {
											if (card.hasGaintag('mszhangkong')) return 'none';
										},
										aiOrder(player, card, num) {
											if (num > 0 && get.itemtype(card) === 'card' && card.hasGaintag('mszhangkong')) return num + 0.16;
										},
										aiValue(player, card, num) {
											if (num > 0 && get.itemtype(card) === 'card' && card.hasGaintag('mszhangkong')) return 2 * num;
										},
										aiUseful(player, card, num) {
											if (num > 0 && !player._mszhangkong_mod && get.itemtype(card) === 'card' && card.hasGaintag('mszhangkong')) {
												if (player.canIgnoreHandcard(card)) return Infinity;
												player._mszhangkong_mod = true;
												if (
													player.hp < 3 &&
													player.needsToDiscard(0, (i, player) => {
														return !player.canIgnoreHandcard(i) && get.useful(i) > 6;
													})
												)
													return num * 1.5;
												return num * 10;
											}
										},
									},
									trigger: {
										player: ['useCardAfter', 'respondAfter'],
									},
									charlotte: true,
									forced: true,
									filter(event, player) {
										return player.hasHistory('lose', function (evt) {
											if (evt.parent != event) return false;
											for (var i in evt.gaintag_map) {
												if (evt.gaintag_map[i].includes('mszhangkong')) {
													if (
														event.cards.some((card) => {
															return card.cardid == i;
														})
													)
														return true;
												}
											}
											return false;
										});
									},
									content() {
										'step 0';
										var cards = [];
										player.getHistory('lose', function (evt) {
											if (evt.parent != trigger) return false;
											for (var i in evt.gaintag_map) {
												if (evt.gaintag_map[i].includes('mszhangkong')) {
													var cardsx = trigger.cards.filter((card) => {
														return card.cardid == i;
													});
													if (cardsx.length) cards.addArray(cardsx);
												}
											}
										});
										if (cards.length) {
											player.gain(cards, 'gain2').gaintag.addArray(['mszhangkong', 'mszhangkong_clear']);
											player.addTempSkill('mszhangkong_clear');
										}
									},
								},
								clear: {
									charlotte: true,
									init() {
										lib.translate['mszhangkong_clear'] = 'invisible';
									},
									onremove(player) {
										player.removeGaintag('mszhangkong_clear');
									},
									mod: {
										cardEnabled2(card, player) {
											var cards = [];
											if (card.cards) cards.addArray(cards);
											if (get.itemtype(card) == 'card') cards.push(card);
											for (var cardx of cards) {
												if (cardx.hasGaintag('mszhangkong_clear')) return false;
											}
										},
										cardRespondable(card, player) {
											var cards = [];
											if (card.cards) cards.addArray(cards);
											if (get.itemtype(card) == 'card') cards.push(card);
											for (var cardx of cards) {
												if (cardx.hasGaintag('mszhangkong_clear')) return false;
											}
										},
										cardSavable(card, player) {
											var cards = [];
											if (card.cards) cards.addArray(cards);
											if (get.itemtype(card) == 'card') cards.push(card);
											for (var cardx of cards) {
												if (cardx.hasGaintag('mszhangkong_clear')) return false;
											}
										},
									},
								},
							},
						},
						msshenen: {
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (player.hasSkill('msshenen_blocker')) return false;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								var choices = [];
								var choiceList = ['令' + get.translation(trigger.card) + '对其中一个目标角色造成的伤害+1', '令任意名其他角色各摸一张牌', '令任意名角色本回合不能使用或打出' + get.translation(get.type2(trigger.card)) + '牌', '摸三张牌,〖神恩〗于本回合失效'];
								if (trigger.targets && trigger.targets.length) choices.push('选项一');
								else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '(无目标角色)</span>';
								if (game.countPlayer((i) => i != player)) choices.push('选项二');
								else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
								choices.push('选项三');
								choices.push('选项四');
								player
									.chooseControl(choices, 'cancel2')
									.set('choiceList', choiceList)
									.set('prompt', get.prompt('msshenen'))
									.set('ai', () => {
										return _status.event.choice;
									})
									.set(
										'choice',
										(() => {
											var choicesx = choices.slice();
											var cards = player.getCards('hs');
											var bool1 =
												get.tag(trigger.card, 'damage') &&
												choicesx.includes('选项一') &&
												trigger.targets.some((current) => {
													return get.attitude(player, current) < 0;
												}),
												bool2 = choicesx.includes('选项二');
											if (player.getCards('hs', (card) => player.hasUseTarget(card, true, true)).length <= 2) return '选项四';
											if (bool1 && bool2 && Math.random() > 0.5) return '选项三';
											if (bool1) return '选项一';
											return 'cancel2';
										})()
									);
								('step 1');
								if (result.control != 'cancel2') {
									game.log(player, '选择了', '#y' + result.control);
									var index = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control) + 1;
									var next = game.createEvent('msshenen_after');
									next.player = player;
									next.card = trigger.card;
									next.setContent(lib.skill.msshenen['content' + index]);
								}
							},
							content1() {
								'step 0';
								player
									.chooseTarget('令' + get.translation(card) + '对其中一个目标造成的伤害+1', true, (card, player, target) => {
										return _status.event.targets.includes(target);
									})
									.set('ai', (target) => {
										return 2 - get.attitude(_status.event.player, target);
									})
									.set('targets', event.parent.getTrigger().targets);
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target);
									player.addTempSkill('dcqingshi_ex');
									if (!player.storage.dcqingshi_ex) player.storage.dcqingshi_ex = [];
									player.storage.dcqingshi_ex.push([target, card]);
								}
							},
							content2() {
								'step 0';
								player.chooseTarget('令任意名角色各摸一张牌', [1, Infinity], true).set('ai', (target) => {
									return get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets;
									targets.sortBySeat();
									player.line(targets);
									game.asyncDraw(targets);
									game.delayex();
								}
							},
							content3() {
								'step 0';
								player.chooseTarget('令任意名角色本回合不能使用或打出' + get.translation(get.type2(card)) + '牌', [1, Infinity], true).set('ai', (target) => {
									return -get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets,
										type = get.type2(card);
									targets.sortBySeat();
									player.line(targets);
									for (var i of targets) {
										player.popup(get.translation(type) + '牌');
										i.addTempSkill('msshenen_jilei');
										i.storage.msshenen_jilei.add(type);
									}
									game.delayex();
								}
							},
							content4() {
								'step 0';
								player.draw(3);
								player.addTempSkill('msshenen_blocker');
							},
							subSkill: {
								blocker: {
									charlotte: true,
								},
								jilei: {
									charlotte: true,
									intro: {
										content(storage) {
											return '不能使或打出' + get.translation(storage) + '牌';
										},
									},
									init(player, skill) {
										if (!player.storage[skill]) player.storage[skill] = [];
									},
									mark: true,
									mod: {
										cardEnabled(card, player) {
											if (player.storage.msshenen_jilei.includes(get.type(card, 'trick'))) {
												var hs = player.getCards('h'),
													cards = [card];
												if (Array.isArray(card.cards)) cards.addArray(card.cards);
												for (var i of cards) {
													if (hs.includes(i)) return false;
												}
											}
										},
										cardRespondable(card, player) {
											if (player.storage.msshenen_jilei.includes(get.type(card, 'trick'))) {
												var hs = player.getCards('h'),
													cards = [card];
												if (Array.isArray(card.cards)) cards.addArray(card.cards);
												for (var i of cards) {
													if (hs.includes(i)) return false;
												}
											}
										},
										cardSavable(card, player) {
											if (player.storage.msshenen_jilei.includes(get.type(card, 'trick'))) {
												var hs = player.getCards('h'),
													cards = [card];
												if (Array.isArray(card.cards)) cards.addArray(card.cards);
												for (var i of cards) {
													if (hs.includes(i)) return false;
												}
											}
										},
									},
								},
							},
						},
						mstongxie: {
							forced: true,
							zhuanhuanji: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							mark: true,
							marktext: '☯',
							intro: {
								content(storage, player) {
									var num = Math.min(3, player.getAllHistory('useSkill', (evt) => evt.skill == 'mstongxie').length + 1);
									var str = '准备阶段,';
									if (num > 1) str += '你摸' + get.cnNumber(num - 1) + '张牌并';
									if (storage) str += '增加' + num + '点体力上限<br>';
									else str += '回复' + num + '点体力<br>';
									str += '你可以将一张' + (storage ? '红色' : '黑色') + '牌当作无距离限制的基本牌使用或打出';
									return str;
								},
							},
							onremove() {
								for (var i of game.players) {
									i.removeSkill('mstongxie_effect');
								}
							},
							content() {
								'step 0';
								for (var i of game.players) {
									i.removeSkill('mstongxie_effect');
								}
								var num = Math.min(3, player.getAllHistory('useSkill', (evt) => evt.skill == 'mstongxie').length);
								if (player.storage.mstongxie) player.gainMaxHp(num);
								else player.recover(num);
								if (num > 1) player.draw(num - 1);
								player.changeZhuanhuanji('mstongxie');
								('step 1');
								if (get.mode() == 'identity' && _status.mode != 'purple' && !_status.brawl) {
									player.chooseTarget([1, Infinity], '令任意名其他角色获得【同谐】效果', true, lib.filter.notMe).set('ai', function (target) {
										return get.attitude(player, target);
									});
								} else
									event._result = {
										bool: true,
										targets: player.getFriends(true),
									};
								('step 2');
								player.line(result.targets, 'green');
								for (var i of result.targets) {
									if (i != player) {
										i.addTempSkill('mstongxie_effect', 'neverEnd');
										i.storage.mstongxie_effect = player.storage.mstongxie ? false : true;
									}
								}
							},
							hiddenCard(player, name) {
								if (
									player.group == 'wu' &&
									(name == 'sha' || name == 'jiu') &&
									player.hasCard(function (card) {
										return get.type(card) == 'equip';
									}, 'hes')
								)
									return true;
								return false;
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								if (event.name && event.name == 'phaseZhunbei') return true;
								if (!player.countCards('hes', (card) => get.color(card, player) == (player.storage.mstongxie ? 'red' : 'black'))) return false;
								for (var i of lib.inpile) {
									var type = get.type2(i);
									if (type == 'basic' && event.filterCard({ name: i }, player, event)) return true;
								}
								return false;
							},
							mod: {
								targetInRange(card) {
									if (card.storage && card.storage.mstongxie) return true;
								},
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (name == 'sha') {
											if (event.filterCard({ name }, player, event)) list.push(['基本', '', 'sha']);
											for (var nature of lib.inpile_nature) {
												if (event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
											}
										} else if (get.type(name) == 'basic' && event.filterCard({ name }, player, event)) list.push(['基本', '', name]);
									}
									return ui.create.dialog('同谐', [list, 'vcard']);
								},
								check(button) {
									if (_status.event.parent.type != 'phase') return 1;
									var player = _status.event.player;
									return player.getUseValue({
										name: button.link[2],
										nature: button.link[3],
									});
								},
								backup(links, player) {
									return {
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
											storage: { mstongxie: true },
										},
										filterCard(card) {
											var player = _status.event.player,
												storage = player.storage.mstongxie;
											return get.color(card, player) == (storage ? 'red' : 'black');
										},
										position: 'hes',
										popname: true,
										check(card) {
											return 5 - get.value(card);
										},
									};
								},
								prompt(links, player) {
									var storage = player.storage.mstongxie;
									return '将一张' + (storage ? '红' : '黑') + '色牌当做' + (links[0][3] ? get.translation(links[0][3]) : '') + '【' + get.translation(links[0][2]) + '】使用或打出';
								},
							},
							ai: {
								respondSha: true,
								respondShan: true,
								save: true,
								skillTagFilter(player, tag, arg) {
									return player.countCards('hes', (card) => get.color(card, player) == (player.storage.mstongxie ? 'red' : 'black'));
								},
								order(item, player) {
									if (_status.event.type != 'phase') return 1;
									return 4;
								},
								result: {
									player: 1,
								},
							},
							subSkill: {
								effect: {
									mark: true,
									intro: {
										content: '视为拥有【同谐】的相反状态效果',
									},
									hiddenCard(player, name) {
										if (
											player.group == 'wu' &&
											(name == 'sha' || name == 'jiu') &&
											player.hasCard(function (card) {
												return get.type(card) == 'equip';
											}, 'hes')
										)
											return true;
										return false;
									},
									enable: ['chooseToUse', 'chooseToRespond'],
									filter(event, player) {
										if (event.name && event.name == 'phaseZhunbei') return true;
										if (!player.countCards('hes', (card) => get.color(card, player) == (player.storage.mstongxie_effect ? 'red' : 'black'))) return false;
										for (var i of lib.inpile) {
											var type = get.type2(i);
											if (type == 'basic' && event.filterCard({ name: i }, player, event)) return true;
										}
										return false;
									},
									mod: {
										targetInRange(card) {
											if (card.storage && card.storage.mstongxie) return true;
										},
									},
									chooseButton: {
										dialog(event, player) {
											var list = [];
											for (var i = 0; i < lib.inpile.length; i++) {
												var name = lib.inpile[i];
												if (name == 'sha') {
													if (event.filterCard({ name }, player, event)) list.push(['基本', '', 'sha']);
													for (var nature of lib.inpile_nature) {
														if (event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
													}
												} else if (get.type(name) == 'basic' && event.filterCard({ name }, player, event)) list.push(['基本', '', name]);
											}
											return ui.create.dialog('同谐', [list, 'vcard']);
										},
										check(button) {
											if (_status.event.parent.type != 'phase') return 1;
											var player = _status.event.player;
											return player.getUseValue({
												name: button.link[2],
												nature: button.link[3],
											});
										},
										backup(links, player) {
											return {
												viewAs: {
													name: links[0][2],
													nature: links[0][3],
													storage: { mstongxie: true },
												},
												filterCard(card) {
													var player = _status.event.player,
														storage = player.storage.mstongxie_effect;
													return get.color(card, player) == (storage ? 'red' : 'black');
												},
												position: 'hes',
												popname: true,
												check(card) {
													return 5 - get.value(card);
												},
											};
										},
										prompt(links, player) {
											var storage = player.storage.mstongxie_effect;
											return '将一张' + (storage ? '红' : '黑') + '色牌当做' + (links[0][3] ? get.translation(links[0][3]) : '') + '【' + get.translation(links[0][2]) + '】使用或打出';
										},
									},
									ai: {
										respondSha: true,
										respondShan: true,
										save: true,
										skillTagFilter(player, tag, arg) {
											return player.countCards('hes', (card) => get.color(card, player) == (player.storage.mstongxie_effect ? 'red' : 'black'));
										},
										order(item, player) {
											if (_status.event.type != 'phase') return 1;
											return 4;
										},
										result: {
											player: 1,
										},
									},
								},
							},
						},
						msjiqun: {
							forced: true,
							trigger: {
								player: ['phaseJudgeBefore', 'phaseDiscardBefore'],
								global: 'roundStart',
							},
							async content(event, trigger, player) {
								if (event.triggername == 'roundStart') {
									game.countPlayer((Q) => {
										if (Q.isFriendsOf(player)) Q.hp = Q.maxHp;
									});
								} else {
									trigger.cancel();
									var list = [];
									for (var name of lib.inpile) {
										if (get.type(name) == 'delay') list.push([get.type(name), '', name]);
									}
									const result = await player
										.chooseButton(['选择要当作的延时锦囊牌', [list, 'vcard']])
										.set('ai', (button) => _status.event.player.getUseValue({ name: button.link[2] }))
										.forResult();
									if (result.links?.length) {
										lib.skill.msjiqun_sidao.viewAs = { name: result.links[0][2] };
										await player
											.chooseToUse()
											.set('openskilldialog', '将一张牌当作一张延时锦囊牌')
											.set('norestore', true)
											.set('_backupevent', 'msjiqun_sidao')
											.set('custom', {
												add: {},
												replace: { window() { } },
											})
											.backup('msjiqun_sidao');
									}
								}
							},
							subSkill: {
								sidao: {
									filterCard(card) {
										return get.itemtype(card) == 'card';
									},
									log: false,
									position: 'hs',
									viewAs: {
										name: 'lebu',
									},
									check(card) {
										return 7 - get.value(card);
									},
								},
							},
						}, //QQQ
						mstonghua: {
							enable: 'phaseUse',
							limited: true,
							filterCard: true,
							selectCard: 3,
							position: 'h',
							discard: false,
							lose: false,
							delay: false,
							complexSelect: true,
							check(card) {
								if (get.type(card) != 'basic' && get.type(card) != 'trick') return 0;
								return get.value(card) - 7.5;
							},
							content() {
								'step 0';
								var cardv = [];
								player.awakenSkill('mstonghua');
								for (var card of cards) {
									var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
									if (cardx) cardv.push(cardx);
								}
								player.gain(cardv).gaintag.add('mstonghua');
								player.addSkill('mstonghua_effect');
							},
							ai: {
								order: 15,
								result: {
									player: 1,
								},
							},
							subSkill: {
								effect: {
									mod: {
										canBeGained(card, source, player) {
											if (card.hasGaintag('mstonghua')) return false;
										},
										canBeDiscarded(card, source, player) {
											if (card.hasGaintag('mstonghua')) return false;
										},
										cardDiscardable(card, player) {
											if (card.hasGaintag('mstonghua')) return false;
										},
										suit(card) {
											if (card.hasGaintag('mstonghua')) return 'none';
										},
										aiOrder(player, card, num) {
											if (num > 0 && get.itemtype(card) === 'card' && card.hasGaintag('mstonghua')) return num + 0.16;
										},
										aiValue(player, card, num) {
											if (num > 0 && get.itemtype(card) === 'card' && card.hasGaintag('mstonghua')) return 2 * num;
										},
										aiUseful(player, card, num) {
											if (num > 0 && !player._mstonghua_mod && get.itemtype(card) === 'card' && card.hasGaintag('mstonghua')) {
												if (player.canIgnoreHandcard(card)) return Infinity;
												player._mstonghua_mod = true;
												if (
													player.hp < 3 &&
													player.needsToDiscard(0, (i, player) => {
														return !player.canIgnoreHandcard(i) && get.useful(i) > 6;
													})
												)
													return num * 1.5;
												return num * 10;
											}
										},
									},
									trigger: {
										player: ['useCardAfter', 'respondAfter'],
									},
									charlotte: true,
									forced: true,
									filter(event, player) {
										return player.hasHistory('lose', function (evt) {
											if (evt.parent != event) return false;
											for (var i in evt.gaintag_map) {
												if (evt.gaintag_map[i].includes('mstonghua')) {
													if (
														event.cards.some((card) => {
															return card.cardid == i;
														})
													)
														return true;
												}
											}
											return false;
										});
									},
									content() {
										'step 0';
										var cards = [];
										player.getHistory('lose', function (evt) {
											if (evt.parent != trigger) return false;
											for (var i in evt.gaintag_map) {
												if (evt.gaintag_map[i].includes('mstonghua')) {
													var cardsx = trigger.cards.filter((card) => {
														return card.cardid == i;
													});
													if (cardsx.length) cards.addArray(cardsx);
												}
											}
										});
										if (cards.length) {
											player.gain(cards, 'gain2').gaintag.addArray(['mstonghua', 'mstonghua_clear']);
											player.addTempSkill('mstonghua_clear');
										}
									},
								},
								clear: {
									charlotte: true,
									init() {
										lib.translate['mstonghua_clear'] = 'invisible';
									},
									onremove(player) {
										player.removeGaintag('mstonghua_clear');
									},
									mod: {
										cardEnabled2(card, player) {
											var cards = [];
											if (card.cards) cards.addArray(cards);
											if (get.itemtype(card) == 'card') cards.push(card);
											for (var cardx of cards) {
												if (cardx.hasGaintag('mstonghua_clear')) return false;
											}
										},
										cardRespondable(card, player) {
											var cards = [];
											if (card.cards) cards.addArray(cards);
											if (get.itemtype(card) == 'card') cards.push(card);
											for (var cardx of cards) {
												if (cardx.hasGaintag('mstonghua_clear')) return false;
											}
										},
										cardSavable(card, player) {
											var cards = [];
											if (card.cards) cards.addArray(cards);
											if (get.itemtype(card) == 'card') cards.push(card);
											for (var cardx of cards) {
												if (cardx.hasGaintag('mstonghua_clear')) return false;
											}
										},
									},
								},
							},
						},
						msxili: {
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (player.hasSkill('msxili_blocker')) return false;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								var choices = [];
								var choiceList = ['令' + get.translation(trigger.card) + '对其中一个目标角色造成的伤害+1', '令任意名其他角色各摸一张牌', '令任意名角色本回合不能使用或打出' + get.translation(get.type2(trigger.card)) + '牌', '摸四张牌,〖洗礼〗于本回合失效'];
								if (trigger.targets && trigger.targets.length) choices.push('选项一');
								else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '(无目标角色)</span>';
								if (game.countPlayer((i) => i != player)) choices.push('选项二');
								else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
								choices.push('选项三');
								choices.push('选项四');
								player
									.chooseControl(choices, 'cancel2')
									.set('choiceList', choiceList)
									.set('prompt', get.prompt('msxili'))
									.set('ai', () => {
										return _status.event.choice;
									})
									.set(
										'choice',
										(() => {
											var choicesx = choices.slice();
											var cards = player.getCards('hs');
											var bool1 =
												get.tag(trigger.card, 'damage') &&
												choicesx.includes('选项一') &&
												trigger.targets.some((current) => {
													return get.attitude(player, current) < 0;
												}),
												bool2 = choicesx.includes('选项二');
											if (player.getCards('hs', (card) => player.hasUseTarget(card, true, true)).length <= 2) return '选项四';
											if (bool1 && bool2 && Math.random() > 0.5) return '选项三';
											if (bool1) return '选项一';
											return 'cancel2';
										})()
									);
								('step 1');
								if (result.control != 'cancel2') {
									game.log(player, '选择了', '#y' + result.control);
									var index = ['选项一', '选项二', '选项三', '选项四'].indexOf(result.control) + 1;
									var next = game.createEvent('msxili_after');
									next.player = player;
									next.card = trigger.card;
									next.setContent(lib.skill.msxili['content' + index]);
								}
							},
							content1() {
								'step 0';
								player
									.chooseTarget('令' + get.translation(card) + '对其中任意个目标造成的伤害+1', [1, Infinity], true, (card, player, target) => {
										return _status.event.targets.includes(target);
									})
									.set('ai', (target) => {
										return 2 - get.attitude(_status.event.player, target);
									})
									.set('targets', event.parent.getTrigger().targets);
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets;
									player.line(targets, 'green');
									player.addTempSkill('dcqingshi_ex');
									if (!player.storage.dcqingshi_ex) player.storage.dcqingshi_ex = [];
									for (var target of targets) {
										player.storage.dcqingshi_ex.push([target, card]);
									}
								}
							},
							content2() {
								'step 0';
								player.chooseTarget('令任意名角色各摸一张牌', [1, Infinity], true).set('ai', (target) => {
									return get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets;
									targets.sortBySeat();
									player.line(targets);
									game.asyncDraw(targets);
									game.delayex();
								}
							},
							content3() {
								'step 0';
								player.chooseTarget('令任意名角色本回合不能使用或打出' + get.translation(get.type2(card)) + '牌', [1, Infinity], true).set('ai', (target) => {
									return -get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.targets?.length) {
									var targets = result.targets,
										type = get.type2(card);
									targets.sortBySeat();
									player.line(targets);
									for (var i of targets) {
										player.popup(get.translation(type) + '牌');
										i.addTempSkill('msxili_jilei');
										i.storage.msxili_jilei.add(type);
									}
									game.delayex();
								}
							},
							content4() {
								'step 0';
								player.draw(4);
								player.addTempSkill('msxili_blocker');
							},
							group: 'msxili_effect',
							subSkill: {
								effect: {
									trigger: {
										global: 'dying',
									},
									forced: true,
									filter(event, player) {
										if (['nei', 'bNei', 'rNei'].includes(player.identity)) return false;
										return event.source && event.source == player;
									},
									logTarget: 'player',
									content() {
										trigger.player.hp = player.maxHp;
										var identity = ['zhu', 'rZhu', 'bZhu'].includes(player.identity) ? 'zhong' : player.identity;
										trigger.player.identity = identity;
										trigger.player.setIdentity();
										trigger.player.identityShown = true;
										trigger.player.node.identity.classList.remove('guessing');
										trigger.player.reinit(trigger.player.name, Object.keys(lib.character).randomGet()); //QQQ
									},
								},
								blocker: {
									charlotte: true,
								},
								jilei: {
									charlotte: true,
									intro: {
										content(storage) {
											return '不能使或打出' + get.translation(storage) + '牌';
										},
									},
									init(player, skill) {
										if (!player.storage[skill]) player.storage[skill] = [];
									},
									mark: true,
									mod: {
										cardEnabled(card, player) {
											if (player.storage.msxili_jilei.includes(get.type(card, 'trick'))) {
												var hs = player.getCards('h'),
													cards = [card];
												if (Array.isArray(card.cards)) cards.addArray(card.cards);
												for (var i of cards) {
													if (hs.includes(i)) return false;
												}
											}
										},
										cardRespondable(card, player) {
											if (player.storage.msxili_jilei.includes(get.type(card, 'trick'))) {
												var hs = player.getCards('h'),
													cards = [card];
												if (Array.isArray(card.cards)) cards.addArray(card.cards);
												for (var i of cards) {
													if (hs.includes(i)) return false;
												}
											}
										},
										cardSavable(card, player) {
											if (player.storage.msxili_jilei.includes(get.type(card, 'trick'))) {
												var hs = player.getCards('h'),
													cards = [card];
												if (Array.isArray(card.cards)) cards.addArray(card.cards);
												for (var i of cards) {
													if (hs.includes(i)) return false;
												}
											}
										},
									},
								},
							},
						},
						msheiguan: {
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							filter(event, player) {
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							content() {
								var card = game.createCard2('mswmcx', 'club', 11);
								player.$gain2(card);
								player.equip(card);
							},
							mod: {
								canBeGained(card, source, player) {
									if (_status.event.getParent('mschuancheng', true)) return;
									if (player.getEquips('mswmcx').includes(card)) return false;
								},
								canBeDiscarded(card, source, player) {
									if (player.getEquips('mswmcx').includes(card)) return false;
								},
								canBeReplaced(card, player) {
									if (player.getEquips('mswmcx').includes(card)) return false;
								},
								cardDiscardable(card, player) {
									if (player.getEquips('mswmcx').includes(card)) return false;
								},
							},
							group: 'msheiguan_blocker',
							subSkill: {
								blocker: {
									trigger: {
										player: 'loseBefore',
									},
									forced: true,
									filter(event, player) {
										if (event.getParent('mschuancheng', true)) return false;
										var cards = player.getEquips('mswmcx');
										return Array.isArray(event.cards) && event.cards.some((card) => cards.includes(card)); //QQQ
									},
									content() {
										trigger.cards.removeArray(player.getEquips('mswmcx'));
									},
								},
							},
						},
						mswmcx: {
							trigger: {
								player: 'useCard',
							},
							equipSkill: true,
							forced: true,
							filter(event, player) {
								return !get.tag(event.card, 'damage') && get.type2(event.card) == 'trick'; //QQQ
							}, //写反了get.tag会导致频繁检测不存在的info,addmark不存在的技能也会,get.info不存在的技能字符串也会
							content() {
								trigger.directHit.addArray(game.players);
							},
						},
						msrenshan: {
							trigger: {
								player: 'useCard',
								global: 'phaseBegin',
							},
							filter(event, player) {
								if (event.name == 'useCard') return event.card.name == 'tao';
								return true;
							},
							forced: true,
							content() {
								if (trigger.name == 'useCard') player.draw();
								else {
									var card = get.cardPile((card) => card.number == 6);
									if (card) player.gain(card, 'gain2').gaintag.add('msrenshan');
								}
							},
							mod: {
								ignoredHandcard(card, player) {
									if (card.hasGaintag('msrenshan')) {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.hasGaintag('msrenshan')) {
										return false;
									}
								},
								cardname(card) {
									if (card.hasGaintag('msrenshan')) return 'tao';
								},
								cardnature(card) {
									if (card.hasGaintag('msrenshan')) return false;
								},
							},
						},
						msxiwang: {
							enable: 'phaseUse',
							filter(event, player) {
								return game.hasPlayer((target) => player.canCompare(target));
							},
							filterTarget(card, player, target) {
								return player.canCompare(target);
							},
							usable: 3,
							selectTarget: [1, 3],
							multitarget: true,
							multiline: true,
							content() {
								'step 0';
								player.chooseToCompare(targets).setContent('chooseToCompareMeanwhile');
								('step 1');
								if (result.winner && result.winner == player) {
									var list = [];
									for (var i of ['wugu', 'zhulu_card']) {
										if (player.hasUseTarget(i)) list.push(i);
									}
									if (list.length) {
										var card = { name: list.randomGet() };
										player.chooseUseTarget(card, true);
									}
								} else {
									for (var i of targets.concat([player])) {
										i.recover(2);
										i.draw(2);
									}
								}
							},
							ai: {
								order: 9,
								result: {
									target: 1,
								},
							},
						},
						mschuancheng: {
							trigger: {
								player: 'dying',
							},
							zhuSkill: true,
							forced: true,
							filter(event, player) {
								if (!player.hasZhuSkill('mschuancheng')) return false;
								return true;
							},
							content() {
								'step 0';
								player.chooseTarget(true, lib.filter.notMe, '传承:令一名角色获得【文明的存续】并成为主公').set('ai', function (target) {
									return get.attitude(player, target);
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'green');
									var card = ['cardPile', 'discardPile']
										.map((pos) => Array.from(ui[pos].childNodes))
										.flat()
										.find((card) => card.name == 'mswmcx');
									if (card) {
										event.bool = true;
										target.gain(card, 'gain2');
										if (target.canEquip(card, true)) target.equip(card);
									} else {
										for (var current of game.players) {
											var cardx = current.getCards('hej').find((card) => card.name == 'mswmcx');
											if (cardx) {
												current.give(cardx, target);
												if (target.canEquip(cardx, true)) target.equip(cardx);
												event.bool = true;
												break;
											}
										}
									}
									if (!event.bool) {
										var card = game.createCard2('mswmcx', 'club', 11);
										if (card) {
											target.gain(card, 'gain2');
											if (target.canEquip(card, true)) target.equip(card);
										}
									}
									player.removeSkills(['msheiguan', 'mschuancheng']);
									game.broadcastAll(
										function (player, target) {
											target.identity = 'zhu';
											player.identity = 'zhong';
											delete player.isZhu;
											game.zhu = target;
											player.showIdentity();
											target.showIdentity();
										},
										player,
										target
									);
									event.trigger('zhuUpdate');
								} else event.finish();
								('step 2');
								var list = [];
								while (list.length < 4) {
									var card = get.cardPile((card) => card.number == 6 && !list.includes(card));
									if (card) list.push(card);
									else break;
								}
								if (list.length) player.gain(list, 'gain2');
								var info = lib.character[player.name];
								var hp = get.infoHp(info[2]) + 1;
								var maxHp = get.infoMaxHp(info[2]) + 1;
								player.maxHp = maxHp;
								player.hp = hp;
								player.update();
							},
						},
						mszhumo: {
							forced: true,
							trigger: {
								source: 'damageSource',
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								if (!player.isDamaged()) return false;
								return event.name != 'damage' || player.isEnemiesOf(event.player);
							},
							content() {
								var num = player.getDamagedHp();
								if (trigger.name == 'damage') {
									trigger.player.loseHp(num);
								} else player.draw(num);
							},
						},
						msjianding: {
							trigger: {
								source: 'damageBegin4',
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (player != _status.currentPhase) return false;
								if (event.name == 'damage') return event.card && event.card.jianding;
								return get.tag(event.card, 'damage') && !player.getHistory('useCard', (evt) => get.tag(evt.card, 'damage') && evt != event).length;
							},
							content() {
								if (trigger.name == 'damage') trigger.num *= 2;
								else {
									trigger.directHit.addArray(game.players);
									trigger.card.jianding = true;
								}
							},
						},
						msfusheng: {
							forced: true,
							trigger: {
								player: 'dying',
							},
							init(player, skill) {
								player.storage[skill] = 0;
							},
							filter(event, player) {
								return player.storage.msfusheng < 2;
							},
							content() {
								player.storage.msfusheng++;
								player.hp = player.maxHp;
								player.addSkill('msfusheng_block');
								player.when({ global: 'phaseAfter' }).then(() => {
									player.when({ player: 'phaseEnd' }).then(() => {
										player.removeSkill('msfusheng_block');
									});
								});
							},
							subSkill: {
								block: {
									trigger: {
										player: ['damageBegin', 'loseHpBegin'],
									},
									mark: true,
									intro: {
										content: '防止你受到的伤害、失去的体力',
									},
									forced: true,
									charlotte: true,
									content() {
										trigger.cancel();
									},
								},
							},
						},
						msshenzhao: {
							trigger: {
								source: 'die',
							},
							forced: true,
							filter(event, player) {
								if (player.hasSkill('msshenzhao_skill')) player.removeSkill('msshenzhao_skill');
								return !player.hasSkill('msshenzhao_block');
							},
							content() {
								player.addSkill('msshenzhao_block');
								player.when({ global: 'phaseAfter' }).then(() => {
									player.when({ player: 'phaseEnd' }).then(() => {
										player.removeSkill('msshenzhao_block');
										player.removeSkill('msshenzhao_skill');
									});
								});
							},
							group: 'msshenzhao_hit',
							subSkill: {
								hit: {
									trigger: {
										global: 'recoverBegin',
									},
									filter(event, player) {
										return event.player.hasAllHistory('damage', (evt) => evt.source && evt.source == player);
									},
									forced: true,
									content() {
										trigger.num--;
									},
								},
								block: {
									trigger: {
										player: ['damageBegin'],
									},
									mark: true,
									intro: {
										content: '防止你受到的非技能伤害',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										var skill = event.getParent(2);
										if (skill && game.players.some((i) => i.hasSkill(skill))) return !player.hasSkill('msshenzhao_skill');
										return true;
									},
									content() {
										var skill = trigger.getParent(2);
										if (skill && game.players.some((i) => i.hasSkill(skill))) player.addSkill('msshenzhao_skill');
										trigger.cancel();
									},
								},
								skill: {
									charlotte: true,
								},
							},
						},
						msxiaoshi: {
							trigger: {
								global: 'dieBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return !player.hasSkill('msxiaoshi_block');
								return true;
							},
							content() {
								'step 0';
								if (trigger.player != player) {
									var num = 1;
									if (trigger.player.name2) num++;
									player.gainMaxHp(num);
								} else {
									trigger.cancel();
									player.addAdditionalSkills(event.name, []);
									player.addSkill('msxiaoshi_block');
									player.recover(1 - player.hp);
									event.finish();
								}
								('step 1');
								var skills = lib.character[trigger.player.name][3] || [];
								if (skills.length) player.addAdditionalSkills(event.name, skills, true);
								player.hp = player.maxHp;
								if (trigger.player.name2) {
									var skills = lib.character[trigger.player.name2][3] || [];
									if (skills.length) {
										if (skills.length == 1) {
											event._result = { control: skills[0] };
										} else player.chooseControl(skills).set('prompt', '获得一个技能');
									} else event.finish();
								} else event.finish();
								('step 2');
								player.addAdditionalSkills(event.name, [result.control], true);
							},
							subSkill: {
								block: {
									charlotte: true,
								},
							},
						},
						mskongwang: {
							intro: {
								content: '记录黑色点数:$',
							},
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return player.countMark('mskongwang') >= 72;
							},
							forced: true,
							content() {
								'step 0';
								player.removeMark('mskongwang', player.countMark('mskongwang'));
								player.chooseTarget('空妄:对一名角色造成体力上限点雷电伤害', true).set('ai', function (target) {
									return get.damageEffect(target, player, player);
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.damage(target.maxHp, 'thunder');
								}
							},
							group: 'mskongwang_record',
							subSkill: {
								record: {
									trigger: {
										player: ['useCard', 'respond', 'loseAfter'],
									},
									filter(event, player) {
										if (event.name != 'lose') return event.cards && event.cards.length;
										return event.type == 'discard' && event.cards.length;
									},
									forced: true,
									content() {
										var red = 0,
											black = 0;
										for (var i of trigger.cards) {
											if (get.color(i, null) == 'red') red += i.number;
											else black += i.number;
										}
										if (red > 0) {
											player.addMark('msshenjian', red);
										}
										if (black > 0) {
											player.addMark('mskongwang', black);
										}
									},
								},
							},
						},
						msshenjian: {
							intro: {
								content: '记录红色点数:$',
							},
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return player.countMark('msshenjian') >= 36;
							},
							forced: true,
							content() {
								'step 0';
								player.removeMark('msshenjian', player.countMark('msshenjian'));
								player.chooseTarget('神谶:对一名角色造成3点火焰伤害', true).set('ai', function (target) {
									return get.damageEffect(target, player, player);
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.damage(3, 'fire');
								}
							},
						},
						msxingzhi: {
							forced: true,
							trigger: {
								global: 'dieBegin',
							},
							filter(event, player) {
								if (!['msslls', 'mszxsh', 'mssgls', 'mslmht'].includes(event.player.name)) return false;
								return !player.getHistory('useSkill', (evt) => evt.skill == 'msxingzhi' && evt.targets && evt.targets.includes(event.player)).length;
							},
							logTarget: 'player',
							content() {
								trigger.cancel();
								trigger.player.hp = trigger.player.maxHp;
								trigger.player.draw(5);
							},
						},
						mschongshen: {
						},
						msduduan: {
							trigger: {
								source: ['damageBefore'],
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'damage') return event.nature != 'thunder' || (event.card && event.card.duduan);
								return get.tag(event.card, 'damage');
							},
							content() {
								'step 0';
								if (trigger.name == 'damage') {
									if (trigger.nature != 'thunder') trigger.nature = 'thunder';
									if (trigger.card && trigger.card.duduan) trigger.num++;
									event.finish();
								} else {
									player.judge();
								}
								('step 1');
								if (get.type(result.card) == 'equip') {
									trigger.card.duduan = true;
								} else trigger.directHit.addArray(game.players);
							},
						},
						msquanwei: {
							enable: 'chooseToUse',
							usable: 1,
							filter(event, player) {
								if (!player.countCards('hes')) return false;
								for (var i of lib.inpile) {
									var card = { name: i };
									if (lib.skill.xunshi.isXunshi(card) && get.tag(card, 'damage') && event.filterCard(card, player, event)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i of lib.inpile) {
										var card = { name: i };
										if (lib.skill.xunshi.isXunshi(card) && get.tag(card, 'damage') && event.filterCard(card, player, event)) list.push(['', '', i]);
									}
									return ui.create.dialog('权威', [list, 'vcard']);
								},
								check(button) {
									return _status.event.player.getUseValue({ name: button.link[2] });
								},
								backup(links, player) {
									return {
										viewAs: {
											name: links[0][2],
										},
										filterCard: () => true,
										selectCard: 1,
										popname: true,
										precontent() {
										},
									};
								},
								prompt(links, player) {
									return '将一张牌当作' + get.translation(links[0][2]) + '使用';
								},
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
							group: 'msquanwei_draw',
							subSkill: {
								draw: {
									trigger: {
										global: 'damageBegin4',
									},
									forced: true,
									content() {
										player.draw();
									},
								},
							},
						},
						mszhubei: {
							groupSkill: true,
							forced: true,
							trigger: {
								global: ['phaseDrawBegin2', 'recoverBegin', 'damageBegin1', 'loseMaxHpBegin'],
							},
							filter(event, player, name) {
								if (player.group != 'ltny') return false;
								if (name == 'loseMaxHpBegin') return true;
								var target = event.name == 'damage' ? event.source : event.player;
								if ((event.name == 'damage' || event.name == 'recover') && target != _status.currentPhase) return false;
								if (target.group != player.group) return false;
								return name != 'phaseDrawBegin2' || !event.numFixed;
							},
							content() {
								if (event.triggername == 'loseMaxHpBegin') trigger.cancel();
								else trigger.num++;
							},
							global: 'mszhubei_g',
							subSkill: {
								g: {
									mod: {
										maxHandcard(player, num) {
											if (
												game.countPlayer(function (current) {
													return current.hasSkill('mszhubei') && current.group == 'ltny';
												}) > 0 &&
												player.group == 'ltny'
											)
												return num + 2;
										},
									},
								},
							},
						},
						msendian: {
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							init() {
								lib.card['lianjunshengyan'] = {
									fullskin: true,
									audio: true,
									type: 'trick',
									enable(card, player) {
										if (get.mode() == 'guozhan') return !player.isUnseen();
										return true;
									},
									mode: ['guozhan', 'boss', 'identity'],
									filterTarget(card, player, target) {
										if (get.mode() == 'guozhan') return target != player && target.identity != 'unknown' && target.isEnemiesOf(player);
										return true;
									},
									selectTarget() {
										return get.mode() == 'guozhan' ? [1, 1] : [-1, -1]; //QQQ
									},
									changeTarget(player, targets) {
										if (get.mode() == 'guozhan') {
											var target = targets[0];
											targets.push(player);
											if (target.identity != 'ye') {
												game.filterPlayer(function (current) {
													return target != current && target.isFriendsOf(current) && !current.hasSkill('diaohulishan');
												}, targets);
											}
										}
									},
									content() {
										'step 0';
										if (get.mode() != 'guozhan') {
											//if(get.mode()=="boss"){
											if (player == target) target.draw(game.filterPlayer().length);
											else target.chooseDrawRecover(true);
											if (!event.notrigger) {
												var next = game.createEvent('ljsyAfter', false);
												next.player = target;
												next.source = player;
												next.targets = targets;
												next.setContent(() => {
													event.trigger('ljsyAfter');
												});
											}
											event.finish();
										} else {
											if (target == player) {
												var num = targets.length - 1;
												event.num = num;
												var damaged = target.maxHp - target.hp;
												if (damaged == 0) {
													target.draw(num);
													if (!event.notrigger) {
														var next = game.createEvent('ljsyAfter', false);
														next.player = target;
														next.source = player;
														next.targets = targets;
														next.setContent(() => {
															event.trigger('ljsyAfter');
														});
													}
													event.finish();
												} else {
													var list = [];
													for (var i = Math.min(num, damaged); i >= 0; i--) {
														list.push('摸' + (num - i) + '回' + i);
													}
													target.chooseControl(list).set('prompt', '请分配自己的摸牌数和回复量').ai = () => 0;
												}
											} else {
												target.draw();
											}
										}
										('step 1');
										if (target != player) target.link(false);
										else if (typeof result.control == 'string') {
											var index = result.control.indexOf('回');
											var draw = parseInt(result.control.slice(1, index));
											var recover = parseInt(result.control.slice(index + 1));
											if (draw) target.draw(draw);
											if (recover) target.recover(recover);
										}
										if (!event.notrigger) {
											var next = game.createEvent('ljsyAfter', false);
											next.player = target;
											next.source = player;
											next.targets = targets;
											next.setContent(() => {
												event.trigger('ljsyAfter');
											});
										}
									},
									ai: {
										wuxie(target, card, player, viewer) {
											if (get.mode() == 'guozhan') {
												if (!_status._aozhan) return 0;
											}
										},
										order: 6,
										value: 4,
										useful: 2,
										result: {
											target(player, target) {
												if (player == target) return 2;
												return 1;
											},
										},
									},
								};
							},
							forced: true,
							filter(event, player) {
								return (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.includes('lianjunshengyan');
							},
							contentx() {
								'step 0';
								player.chooseTarget('令一名角色获得1点护甲', true).set('ai', function (target) {
									var player = _status.event.player;
									return get.attitude(player, target);
								});
								('step 1');
								var target = result.targets[0];
								player.line(target, 'green');
								target.changeHujia();
							},
							content() {
								var cards = [];
								while (cards.length < 23) {
									cards.push(game.createCard2('lianjunshengyan'));
								}
								game.broadcastAll(function () {
									lib.inpile.add('lianjunshengyan');
								});
								game.cardsGotoPile(cards, () => {
									return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
								});
							},
							group: 'msendian_effect',
							subSkill: {
								effect: {
									trigger: {
										player: 'ljsyAfter',
									},
									forced: true,
									content() {
										'step 0';
										var result = Math.random() > 0.4 ? 2 : 1;
										player
											.chooseControl('选项一', '选项二', '选项三', '选项四')
											.set('choiceList', ['增加1点体力上限', '失去1点体力并令一名角色获得1点护甲', '令【联军盛宴】对你额外结算一次', '回复1点体力'])
											.set('ai', function (event) {
												var result = Math.random() > 0.4 ? 2 : 1;
												return result;
											});
										('step 1');
										game.log(result.index);
										switch (result.control) {
											case '选项一':
												player.gainMaxHp();
												event.finish();
												break;
											case '选项二': {
												player.loseHp();
												var next = game.createEvent('endianhujai', false);
												next.player = player;
												next.setContent(lib.skill.msendian.contentx);
												event.finish();
												break;
											}
											case '选项三': {
												var next = game.createEvent('reljsy', false);
												next.target = player;
												next.player = trigger.source;
												next.targets = trigger.targets;
												next.notrigger = true;
												next.setContent(lib.card.lianjunshengyan.content);
												event.finish();
												break;
											}
											case '选项四':
												player.recover();
												event.finish();
												break;
										}
									},
								},
							},
						},
						mswanxia: {
							groupSkill: true,
							forced: true,
							trigger: {
								global: ['damageBegin4', 'changeHujiaBegin'],
							},
							filter(event, player) {
								if (player.group != 'ltny' || event.player.group != 'ltny') return false;
								if (event.name == 'damage') return event.player.hujia && event.num > 1;
								return event.num > 0;
							},
							content() {
								if (trigger.name == 'damage') trigger.num = 1;
								else trigger.num *= 2;
							},
						},
						msenci: {
							forced: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return player.hasUseTarget({ name: 'lianjunshengyan' });
							},
							content() {
								player.chooseUseTarget({ name: 'lianjunshengyan' }, true);
							},
						},
						msshouxi: {
							audio: 'shouxi',
							trigger: {
								target: 'useCardToTargeted',
							},
							forced: true,
							init(player) {
								if (!player.storage.msshouxi) player.storage.msshouxi = [];
							},
							filter(event, player) {
								return (event.card.name == 'sha' || (get.type(event.card) == 'trick' && get.tag(event.card, 'damage'))) && event.player.isIn();
							},
							content() {
								'step 0';
								var list = lib.inpile.filter(function (i) {
									if (player.storage.msshouxi.includes(i)) return false;
									var type = get.type2(i);
									if (type == 'basic' || type == 'trick') return true;
									return false;
								});
								for (var i = 0; i < list.length; i++) {
									list[i] = [get.type(list[i]), '', list[i]];
								}
								if (list.length) {
									player.chooseButton([get.prompt('msshouxi', trigger.player), [list, 'vcard']]).set('ai', function (button) {
										return Math.random();
									});
								} else event.finish();
								('step 1');
								if (result.links?.length) {
									var name = result.links[0][2];
									event.vcard = result.links;
									event.cardname = name;
									player.storage.msshouxi.add(name);
									player.popup(name);
									game.log(player, '声明了', '#y' + get.translation(name));
								} else {
									event.finish();
								}
								('step 2');
								var name = event.cardname;
								trigger.player
									.chooseToDiscard(function (card) {
										return card.name == _status.event.cardname;
									})
									.set('ai', function (card) {
										if (_status.event.att < 0) {
											return 10 - get.value(card);
										}
										return 0;
									})
									.set('att', get.attitude(trigger.player, player))
									.set('cardname', name)
									.set('dialog', ['守玺:请弃置一张【' + get.translation(name) + '】,否则此牌对' + get.translation(player) + '无效', [event.vcard, 'vcard']]);
								('step 3');
								if (result.bool == false) {
									trigger.excluded.push(player);
									event.finish();
								} else {
									player.draw(2);
								}
								('step 4');
								player.chooseToGive(trigger.player, 'he', true);
							},
							group: 'msshouxi_clear',
							subSkill: {
								clear: {
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									charlotte: true,
									content() {
										player.storage.msshouxi = [];
									},
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && get.attitude(player, target) < 0) {
											return 0.3;
										}
									},
								},
							},
						},
						mshuiming: {
							audio: 'huimin',
							inherit: 'huimin',
							group: 'mshuiming_draw',
							subSkill: {
								draw: {
									trigger: {
										global: 'gainAfter',
									},
									filter(event, player) {
										return !event.getParent('mshuiming_draw', true) && event.getParent('mshuiming', true) && event.player.countCards('h') == event.player.maxHp;
									},
									forced: true,
									logTarget: 'player',
									content() {
										player.draw();
									},
								},
							},
						},
						mschiyu: {
							trigger: {
								global: 'phaseBefore',
								player: ['damageEnd'],
							},
							forced: true,
							content() {
								'step 0';
								var targets = game.players.filter((i) => !i.isZhu2()),
									num = 0,
									list = [];
								while (num < targets.length) {
									var target = targets.filter((i) => i != targets[num]).randomGet();
									list.push(targets[num], target);
									game.broadcastAll(
										(target, targetx) => {
											game.swapSeat(target, targetx, false);
										},
										targets[num],
										target
									);
									num++;
								}
								('step 1');
								if (trigger.name == 'damage') {
									var evt = _status.event.getParent('phase');
									if (evt && evt.name == 'phase') {
										evt.finish();
									}
									game.log(_status.currentPhase, '结束了回合');
									player.phase('nodelay'); //QQQ
									game.mschiyu_phase = true;
								}
							},
							ai: {
								nofire: true,
								nothunder: true,
								nodamage: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) return 'zeroplayertarget';
									},
								},
							},
							group: 'mschiyu_phase',
							subSkill: {
								phase: {
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									filter(event, player) {
										return game.mschiyu_phase;
									},
									content() {
										'step 0';
										for (var i of game.players) {
											if (i.group != 'ltny' || i == player) continue;
											var skillsa = i.getSkills(null, false, false).filter((skill) => {
												var info = get.info(skill);
												if (!info || info.charlotte || get.is.locked(skill) || get.skillInfoTranslation(skill, i).length == 0) return false;
												return true;
											});
											var skillsb = i.getSkills(null, false, false).filter((skill) => {
												var info = get.info(skill);
												if (!info || info.charlotte || !get.is.locked(skill) || get.skillInfoTranslation(skill, i).length == 0) return false;
												return true;
											});
											i.tempBanSkill(skillsb);
											i.disableSkill('olchuanwu', skillsa);
											i.addTempSkill('olchuanwu_restore');
											var str = '';
											for (var j of skills) {
												str += '【' + get.translation(j) + '】、';
												i.popup(j);
											}
											str = str.slice(0, -1);
											game.log(i, '的技能', '#g' + str, '失效了');
										}
										('step 1');
										var list = [];
										for (var i of lib.inpile) {
											var card = { name: i }; //QQQ
											if (lib.skill.xunshi.isXunshi(card) && get.type(card) == 'trick' && get.tag(card, 'damage')) list.push(card);
										}
										event.cards = list;
										('step 2');
										var card = event.cards.shift();
										player.chooseUseTarget(card, true, false, 'nodistance');
										if (event.cards.length) event.redo();
										delete game.mschiyu_phase;
									},
								},
							},
						},
						msyongdun: {
							trigger: {
								source: 'damageSource',
								player: 'damageEnd',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (!game.filterPlayer((i) => i.group == 'ltny').length) return false;
								return event[player == event.player ? 'source' : 'player'] != undefined;
							},
							content() {
								trigger[player == trigger.player ? 'source' : 'player'].addMark('msyongdun', game.filterPlayer((i) => i.group == 'ltny').length);
							},
							intro: {
								content: 'mark',
							},
							global: 'msyongdun_recover',
							group: ['msyongdun_damage', 'msyongdun_lose'],
							subSkill: {
								recover: {
									trigger: {
										player: 'recoverBegin',
									},
									filter(event, player) {
										return player.hasMark('msyongdun');
									},
									forced: true,
									charlotte: true,
									content() {
										trigger.num--;
										player.removeMark('msyongdun', 1);
									},
									mod: {
										cardEnabled2(card, player) {
											if (player.hasMark('msyongdun')) return false;
										},
										playerEnabled(card, player, target) {
											if (player.group == 'ltny' || player.hasSkill('msyongdun')) return;
											if (game.players.every((i) => !i.hasMark('msyongdun'))) return;
											if (!target.hasMark('msyongdun')) return false;
										},
									},
								},
								lose: {
									trigger: {
										player: 'phaseBegin',
									},
									lastDo: true,
									filter(event, player) {
										return game.hasPlayer((i) => i.hasMark('msyongdun'));
									},
									forced: true,
									charlotte: true,
									content() {
										for (var i of game.players) {
											if (i.hasMark('msyongdun')) i.loseHp(2 * i.maxHp);
										}
									},
								},
								damage: {
									trigger: {
										global: 'damageBegin1',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										if (event.source && event.source == player && game.filterPlayer((i) => i.group == 'ltny').length) return true;
										return event.player.hasMark('msyongdun') && game.filterPlayer((i) => i.group == 'ltny').length;
									},
									content() {
										if (trigger.source && trigger.source == player) {
											trigger.num += game.filterPlayer((i) => i.group == 'ltny').length;
										}
										if (trigger.player.hasMark('msyongdun')) {
											var num = (game.filterPlayer((i) => i.group == 'ltny').length + 1) * trigger.num;
											player.draw(num);
											player.recover(num);
											player.changeHujia(num);
										}
									},
								},
							},
						},
						mszhaozhi: {
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							lastDo: true,
							charlotte: true,
							content() {
								trigger.cancel();
								player.hp = player.maxHp;
								player.tempBanSkill('mszhaozhi', 'neverEnd', false);
								player.addSkill('mszhaozhi_effect');
							},
							group: 'mszhaozhi_win',
							subSkill: {
								win: {
									trigger: {
										global: 'roundStart',
									},
									forced: true,
									charlotte: true,
									filter(event, player, name) {
										return game.roundNumber >= 300;
									},
									content() {
										game.over(true);
									},
								},
								effect: {
									trigger: {
										global: 'roundStart',
										player: ['phaseBegin', 'damageBegin3'],
									},
									forced: true,
									charlotte: true,
									filter(event, player, name) {
										if (name == 'roundStart') return game.roundNumber >= 302;
										if (event.name == 'damage') return !player.hujia;
										return game.hasPlayer((i) => i.group != 'ltny');
									},
									content() {
										if (event.triggername == 'roundStart') {
											game.over(true);
										} else if (trigger.name == 'damage') {
											trigger.cancel();
										} else {
											var num = 0;
											for (var i of game.players) {
												if (i.group != 'ltny') {
													i.loseHp();
													num++;
												}
											}
											player.changeHujia(num);
										}
									},
								},
							},
						},
						mschenshi: {
							trigger: {
								global: 'damageBefore',
							},
							forced: true,
							groupSkill: true,
							charlotte: true,
							filter(event, player) {
								if (player.group != 'ltny') return false;
								if (event.source && event.source != player && event.player != player) return false;
								if (event.player == player) return true;
								return event.player.group == 'ltny';
							},
							content() {
								if (trigger.player == player) {
									if (trigger.source && trigger.source.group == 'ltny') {
										trigger.cancel();
										trigger.player.loseHp(trigger.num);
									} else {
										if (trigger.num > 1) trigger.num = 1;
										else trigger.cancel();
									}
								} else {
									trigger.cancel();
									trigger.player.loseHp(trigger.num);
								}
							},
							intro: {
								content: 'mark',
							},
							group: 'mschenshi_draw',
							global: 'mschenshi_die',
							subSkill: {
								die: {
									trigger: {
										player: 'dieBegin',
									},
									filter(event, player) {
										return !event.getParent('dying', true) && player.hasMark('mschenshi');
									},
									forced: true,
									charlotte: true,
									content() {
										trigger.cancel();
										player.removeMark('mschenshi', 1);
									},
								},
								draw: {
									filter(event, player) {
										if (event.name == 'phase') return game.phaseNumber == 0;
										if (event.player.group != 'ltny') return false;
										return player.group == 'ltny' && game.filterPlayer((i) => i.group == 'ltny').length;
									},
									trigger: {
										global: ['changeHpAfter', 'loseMaxHpAfter', 'gainMaxHpAfter', 'phaseBefore'],
									},
									forced: true,
									charlotte: true,
									content() {
										if (trigger.name == 'phase') {
											for (var i of game.filterPlayer((i) => i.group == 'ltny')) i.addMark('mschenshi', i.hp);
										} else game.asyncDraw(game.filterPlayer((i) => i.group == 'ltny'));
									},
								},
							},
						},
						mschenai: {
							audio: 'ext:星舟扩展/audio/msmtlxy:2',
							forced: true,
							trigger: {
								global: 'damageBefore',
							},
							filter(event, player) {
								for (var i of [event.player, event.source]) {
									if (i && i == player) return true;
								}
								return false;
							},
							content() {
								trigger.cancel();
								var next = trigger.player.loseHp();
								if (trigger.source) next.source = trigger.source;
							},
							intro: {
								name: '微尘',
								name2: '微尘',
								content: 'mark',
							},
							group: ['mschenai_draw', 'mschenai_nodie', 'mschenai_end'],
							subSkill: {
								end: {
									audio: 'mschenai',
									trigger: {
										global: 'phaseJieshuBegin',
									},
									filter(event, player) {
										return player.countMark('mschenai') > 0;
									},
									forced: true,
									content() {
										'step 0';
										player.removeMark('mschenai', 1);
										player.chooseControl('回复1点体力', '摸4张牌', '增加1点体力上限');
										('step 1');
										if (result.index == 0) player.recover();
										if (result.index == 1) {
											var cards = [];
											while (cards.length < 4) {
												var card = get.cardPile((card) => {
													if (get.type(card) != 'basic') return false;
													return !cards.length || cards.every((i) => i.suit != card.suit);
												});
												if (card) cards.push(card);
												else break;
											}
											if (cards.length) player.gain(cards, 'draw');
										}
										if (result.index == 2) player.gainMaxHp();
									},
								},
								nodie: {
									audio: 'mschenai',
									trigger: {
										player: 'dieBegin',
									},
									filter(event, player) {
										return !event.getParent('dying', true) && player.countMark('mschenai') >= player.maxHp;
									},
									forced: true,
									content() {
										trigger.cancel();
									},
								},
								draw: {
									audio: 'mschenai',
									trigger: {
										global: ['useCardAfter', 'respondAfter', 'discardAfter', 'changeHpAfter', 'gainMaxHpAfter', 'loseMaxHpAfter'],
									},
									forced: true,
									content() {
										var num = trigger.num ? Math.abs(trigger.num) : trigger.cards && trigger.cards.length ? trigger.cards.length : 1;
										player.addMark('mschenai', num);
										//player.draw(num);
									},
								},
							},
						},
						msyinrao: {
							audio: 'ext:星舟扩展/audio/msmtlxy:2',
							trigger: {
								player: ['dying', 'loseMaxHpAfter'],
							},
							filter(event, player) {
								if (event.name != 'dying' && player.maxHp >= 4) return false;
								return player.countMark('mschenai');
							},
							forced: true,
							content() {
								if (trigger.name == 'dying') {
									player.removeMark('mschenai', 1);
									player.recover(1 - player.hp);
									player.draw(3);
								} else {
									player.removeMark('mschenai', player.maxHp);
									player.gainMaxHp(4 - player.maxHp);
								}
							},
						},
						msmiaoyuan: {
							audio: 'ext:星舟扩展/audio/msmtlxy:2',
							trigger: {
								player: 'loseHpAfter',
							},
							filter(event, player) {
								return player.countMark('mschenai');
							},
							content() {
								'step 0';
								player.removeMark('mschenai', 1);
								player.judge();
								('step 1');
								if (get.type(result.card) == 'equip') {
									var target = trigger.source || trigger.parent.player;
									if (target && target.isIn()) target.addSkill('msmiaoyuan_bl');
									event.finish();
								} else {
									player.chooseTarget('令任意名角色回复1点体力或增加1点体力上限', [1, Infinity], true).set('ai', function (target) {
										return get.attitude(player, target);
									});
								}
								('step 2');
								if (result.bool) event.targets = result.targets.sortBySeat();
								else event.finish();
								('step 3');
								event.target = event.targets.shift();
								player.line(event.target, 'green');
								if (event.target.isDamaged()) player.chooseControl('回血', '加上限');
								else event._result = { control: '加上限' };
								('step 4');
								if (result.control == '回血') event.target.recover();
								else event.target.gainMaxHp();
								if (event.targets.length) event.goto(3);
							},
							group: 'msmiaoyuan_clear',
							subSkill: {
								clear: {
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									content() {
										for (var i of game.players) i.removeSkill('msmiaoyuan_bl');
									},
								},
								bl: {
									mark: true,
									marktext: '束缚',
									intro: {
										content: '无法使用打出弃置牌',
									},
									mod: {
										cardEnabled2(card, player) {
											if (game.hasPlayer((i) => i.hasSkill('msmiaoyuan'))) return false;
										},
										cardDiscardable(card, player) {
											if (game.hasPlayer((i) => i.hasSkill('msmiaoyuan'))) return false;
										},
									},
								},
							},
						},
						mschonggou: {
							audio: 'ext:星舟扩展/audio/msmtlxy:2',
							forced: true,
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								return player.countMark('mschenai') >= 100;
							},
							content() {
								'step 0';
								player.removeMark('mschenai', 100);
								('step 1');
								var maxhp = 0,
									max = {};
								for (var i of game.players) {
									maxhp += i.maxHp;
								}
								var level = Math.floor(maxhp / game.players.length),
									other = maxhp % game.players.length;
								for (var i of game.players) max[i.playerid] = level;
								while (other > 0) {
									other--;
									var target = game.players.randomGet();
									max[target.playerid]++;
								}
								for (var i of game.players) {
									var num = i.maxHp - max[i.playerid];
									if (num > 0) i.loseMaxHp(num);
									else if (num < 0) i.gainMaxHp(-num);
								}
								('step 2');
								var maxhp = 0,
									max = {};
								for (var i of game.players) {
									maxhp += i.hp;
								}
								var level = Math.floor(maxhp / game.players.length),
									other = maxhp % game.players.length;
								for (var i of game.players) max[i.playerid] = level;
								while (other > 0) {
									other--;
									var target = game.players.randomGet();
									max[target.playerid]++;
								}
								for (var i of game.players) {
									var num = i.hp - max[i.playerid];
									if (num > 0) i.loseHp(num);
									else if (num < 0) i.recover(-num);
								}
							},
						},
						msgouzhu: {
							init(player) {
								Reflect.defineProperty(player, 'hujia', {
									get() {
										if (!game.hujia) game.hujia = 0;
										return game.hujia;
									},
									set(value) {
										if (value > game.hujia) game.hujia = value;
									},
								}); //扣减体力上限抗性
							},
							forced: true,
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							filter(event, player) {
								return event.name != 'phase' || game.roundNumber == 0;
							},
							content() {
								player.changeHujia(3);
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.hujia;
								},
							},
							group: ['msgouzhu_gain', 'msgouzhu_1'],
							subSkill: {
								gain: {
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									locked(skill, player) {
										if (!player || !player.storage.msjiejing) return true;
										return false;
									},
									filter(event, player) {
										if (player.storage.msjiejing) return true;
										return player.hp != 1;
									},
									forced: true,
									content() {
										'step 0';
										if (player.storage.msjiejing) {
											if (!player.storage.msjiejing) event.skillHidden = true;
											player.chooseBool(get.prompt('msgouzhu'), '失去1点体力,获得2点护甲').set('ai', function () {
												var player = _status.event.player;
												if (player.hp > 1) return true;
												return false;
											});
										} else event._result = { bool: true };
										('step 1');
										if (result.bool) {
											player.loseHp();
											var num = player.storage.msjiejing ? 2 : 1;
											player.changeHujia(num);
										} else event.finish();
									},
								},
								1: {
									trigger: {
										player: ['damageAfter'],
									},
									forced: true,
									async content(event, trigger, player) {
										game.hujia -= trigger.num;
										player.update();
									},
								},
							},
						},
						mshupo: {
							forced: true,
							trigger: {
								player: ['damageBegin3', 'damageEnd'],
							},
							filter(event, player, name) {
								if (!player.hujia) return false;
								if (name == 'damageEnd') return true;
								return event.num > player.hujia;
							},
							content() {
								'step 0';
								if (event.triggername == 'damageEnd') {
									if (trigger.source) {
										player.chooseControl('对' + get.translation(trigger.source) + '造成1点伤害并弃置其一张牌', '回复1点体力并摸一张牌');
									} else
										event._result = {
											index: 1,
											control: '回复1点体力并摸一张牌',
										};
								} else {
									var num = trigger.num - player.hujia;
									trigger.num -= num;
									player.draw(num);
									event.finish();
								}
								('step 1');
								if (result.index == 0) {
									if (trigger.source) {
										player.line(trigger.source, 'green');
										trigger.source.damage();
										player.discardPlayerCard(trigger.source, 'he', true);
									}
								} else {
									player.recover();
									player.draw();
								}
							},
						},
						msjiejing: {
							trigger: {
								player: ['changeHujiaEnd', 'changeHpEnd'],
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return !player.storage.msjiejing && (player.hujia >= 5 || player.hp == 1);
							},
							content() {
								player.awakenSkill('msjiejing');
								player.storage.msjiejing = true;
								player.addSkills(['msfanzhen']);
							},
							derivation: 'msfanzhen',
						},
						msfanzhen: {
							trigger: {
								player: 'damageBegin4',
								source: 'damageBegin1',
							},
							filter(event, player, name) {
								if (name == 'damageBegin4') return true;
								return player.hujia;
							},
							forced: true,
							content() {
								'step 0';
								if (event.triggername == 'damageBegin4') {
									player.changeHujia();
									if (trigger.source) trigger.source.loseHp();
									event.finish();
								} else {
									var num = player.hujia;
									player.chooseControl('摸' + num + '张牌', '此伤害+' + num);
								}
								('step 1');
								if (result.index == 0) player.draw(player.hujia);
								else trigger.num += player.hujia;
							},
						},
						msjinmie: {
							marktext: '烬',
							trigger: {
								source: 'damageSource',
								player: ['damageEnd', 'enterGame'],
								global: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								return (event.name != 'damage' && (event.name != 'phase' || game.phaseNumber == 0)) || event.num > 0;
							},
							content() {
								player.addMark('msjinmie', trigger.name == 'damage' ? trigger.num : 3);
							},
							intro: {
								name: '烬灭',
								content: 'mark',
							},
							ai: {
								combo: 'msreji',
								maixie: true,
								maixie_hp: true,
							},
							group: 'msjinmie_wumou',
							subSkill: {
								wumou: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									filter(event, player) {
										return get.type(event.card) == 'trick' && !get.tag(event.card, 'damage');
									},
									content() {
										'step 0';
										if (player.hasMark('msjinmie')) {
											player.chooseControlList(['移去一枚【烬灭】标记', '失去1点体力'], true).set('ai', function (event, player) {
												if (get.effect(player, { name: 'losehp' }, player, player) >= 0) return 1;
												if (player.storage.msjinmie > 6) return 0;
												if (player.hp + player.countCards('h', 'tao') > 3) return 1;
												return 0;
											});
										} else {
											player.loseHp();
											event.finish();
										}
										('step 1');
										if (result.index == 0) {
											player.removeMark('msjinmie', 1);
										} else {
											player.loseHp();
										}
									},
									ai: {
										effect: {
											player_use(card, player) {
												if (get.type(card) == 'trick' && !get.tag(card, 'damage') && get.value(card) < 6) {
													return [0, -2];
												}
											},
										},
										neg: true,
									},
								},
							},
						},
						msjielv: {
							trigger: {
								player: ['loseHpEnd', 'phaseZhunbeiBegin'],
							},
							forced: true,
							content() {
								'step 0';
								if (event.triggername == 'loseHpEnd') {
									var num = Math.ceil(player.maxHp / 2);
									player.draw(num);
									player.changeHujia();
									event.finish();
								} else {
									player.chooseTarget('令一名角色摸或弃牌', true);
								}
								('step 1');
								event.target = result.targets[0];
								var num = get.cnNumber(player.getDamagedHp());
								player.chooseControl('摸' + num + '弃一', '摸一弃' + num); //QQQ
								('step 2');
								if (result.index == 0) {
									event.target.draw(player.getDamagedHp());
									event.target.chooseToDiscard(1, true, 'he');
								} else {
									event.target.draw();
									if (player.getDamagedHp() > 0) event.target.chooseToDiscard(player.getDamagedHp(), true, 'he');
									event.target.addTempSkill('msjielv_tieqi');
								}
							},
							mod: {
								targetInRange(card, player, target) {
									if (target.hasSkill('msjielv_tieqi')) {
										return true;
									}
								},
								cardUsableTarget(card, player, target) {
									if (target.hasSkill('msjielv_tieqi')) return true;
								},
							},
							subSkill: {
								tieqi: {
									init(player, skill) {
										player.addSkillBlocker(skill);
									},
									onremove(player, skill) {
										player.removeSkillBlocker(skill);
									},
									charlotte: true,
									skillBlocker(skill, player) {
										return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
									},
									mark: true,
									intro: {
										content(storage, player, skill) {
											var list = player.getSkills(null, false, false).filter(function (i) {
												return lib.skill.msjielv_tieqi.skillBlocker(i, player);
											});
											if (list.length) return '失效技能:' + get.translation(list);
											return '无失效技能';
										},
									},
								},
							},
						},
						mszhanyi: {
							enable: 'phaseUse',
							filter(event, player) {
								return player.countMark('msjinmie');
							},
							usable: 1,
							content() {
								player.removeMark('msjinmie', 1);
								player.addTempSkill('mszhanyi_wushuang');
								player.addTempSkill('mszhanyi_chongjian');
								for (var i of game.players) i.addTempSkill('mszhanyi_equip');
							},
							subSkill: {
								chongjian: {
									enable: 'chooseToUse',
									filter(event, player) {
										if (!player.countCards('hes')) return false;
										if (event.filterCard({ name: 'sha' }, player, event)) return true;
										for (var i of lib.inpile) {
											var type = get.type(i);
											if (type == 'trick' && get.tag({ name: i }, 'damage') && event.filterCard({ name: i }, player, event)) return true;
										}
										return false;
									},
									chooseButton: {
										dialog(event, player) {
											var list = [];
											for (var i = 0; i < lib.inpile.length; i++) {
												var name = lib.inpile[i];
												if (name == 'sha') {
													if (event.filterCard({ name }, player, event)) list.push(['基本', '', 'sha']);
													for (var nature of lib.inpile_nature) {
														if (event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
													}
												} else if (get.type(name) == 'trick' && get.tag({ name: name }, 'damage') && event.filterCard({ name }, player, event)) list.push(['锦囊', '', name]);
											}
											return ui.create.dialog('战意', [list, 'vcard']);
										},
										check(button) {
											if (_status.event.parent.type != 'phase') return 1;
											var player = _status.event.player;
											return player.getUseValue({
												name: button.link[2],
												nature: button.link[3],
											});
										},
										backup(links, player) {
											return {
												filterCard: true,
												popname: true,
												check(card) {
													return 8 - get.value(card);
												},
												selectTarget: [1, Infinity],
												position: 'hes',
												viewAs: { name: links[0][2], nature: links[0][3], zhanyi: true },
											};
										},
										prompt(links, player) {
											return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
										},
									},
									hiddenCard(player, name) {
										if (!lib.inpile.includes(name)) return false;
										var type = get.type(name);
										return (type == 'basic' || type == 'trick') && get.tag({ name: name }, 'damage') && player.countCards('hes') > 0;
									},
									ai: {
										fireAttack: true,
										respondSha: true,
										respondShan: true,
										skillTagFilter(player) {
											if (!player.countCards('hes')) return false;
										},
										order: 1,
										result: {
											player(player) {
												if (_status.event.dying) return get.attitude(player, _status.event.dying);
												return 1;
											},
										},
									},
								},
								wushuang: {
									trigger: {
										source: 'damageBegin1',
										global: 'useCardToPlayered',
									},
									forced: true,
									filter(event, player, name) {
										if (name == 'damageBegin1') return event.card && event.card.zhanyi;
										return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
									},
									logTarget(event) {
										if (event.name == 'damage') return event.player;
										return event.target;
									},
									content() {
										if (trigger.name == 'damage') trigger.num++;
										else {
											var id = trigger.target.playerid;
											var map = trigger.parent.customArgs;
											if (!map[id]) map[id] = {};
											if (typeof map[id].shanRequired == 'number') {
												map[id].shanRequired++;
											} else {
												map[id].shanRequired = 2;
											}
										}
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
										},
									},
								},
								equip: {
									ai: {
										unequip2: true,
									},
									mark: true,
									marktext: '※',
									intro: {
										content: '当前防具技能已失效',
									},
								},
							},
						},
						msreji: {
							enable: 'phaseUse',
							filter(event, player) {
								return player.countMark('msjinmie') >= 7;
							},
							usable: 1,
							content() {
								'step 0';
								player.removeMark('msjinmie', 7);
								event.targets = game.filterPlayer();
								event.targets.remove(player);
								event.targets.sort(lib.sort.seat);
								player.line(event.targets, 'green');
								event.targets2 = event.targets.slice(0);
								event.targets3 = event.targets.slice(0);
								player.damage('nocard');
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
									target.chooseToDiscard(7, 'h', true).delay = false;
								}
								('step 5');
								if (event.targets3.length) event.goto(4);
								('step 6');
								for (var i of game.players) {
									if (i.countCards('h') < player.countCards('h')) i.addSkill('fengyin');
								}
							},
							ai: {
								combo: 'msjinmie',
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
						历法: {
							init(player) {
								player.storage = new Proxy(player.storage, {
									get(u, i) {
										if (i == 'skill_blocker') return [];
										return u[i];
									},
								});
								player.disabledSkills = new Proxy(
									{},
									{
										get: () => [],
									}
								);
								Reflect.defineProperty(player, 'maxHp', {
									get() {
										return this._maxHp || 20;
									},
									set(value) {
										if (!this._maxHp) this._maxHp = 20;
										if (value > this._maxHp) this._maxHp = value;
									},
								});
								{
									game.dead['push'] = new Proxy(Array.prototype['push'], {
										apply(target, thisArg, args) {
											if (player.hp > 0)
												return Reflect.apply(
													target,
													thisArg,
													args.filter((item) => item != player)
												);
											else return Reflect.apply(target, thisArg, args);
										},
									});
									game.players['remove'] = new Proxy(Array.prototype['remove'], {
										apply(target, thisArg, args) {
											if (player.hp > 0)
												return Reflect.apply(
													target,
													thisArg,
													args.filter((item) => item != player)
												);
											return Reflect.apply(target, thisArg, args);
										},
									});
									player.dieAfter = function () {
										if (player.hp > 0) return;
										lib.element.player.dieAfter.apply(this, arguments);
									};
									player.die = function () {
										if (player.hp > 0) return;
										return lib.element.player.die.apply(this, arguments);
									};
									player.node.hp.classList.add = new Proxy(DOMTokenList.prototype['add'], {
										apply(target, thisArg, args) {
											if ('hidden' == args[0]) return;
											else return Reflect.apply(target, thisArg, args);
										},
									});
									player.classList.add = new Proxy(DOMTokenList.prototype['add'], {
										apply(target, thisArg, args) {
											if (player.hp > 0 && 'dead' == args[0]) return;
											return Reflect.apply(target, thisArg, args);
										},
									});
									player.classList.toggle = new Proxy(DOMTokenList.prototype['toggle'], {
										apply(target, thisArg, args) {
											if (player.hp > 0 && 'dead' == args[0]) return;
											return Reflect.apply(target, thisArg, args);
										},
									});
								}
							},
							trigger: {
								player: ['judgeBefore'],
							},
							forced: true,
							fixed: true,
							charlotte: true,
							async content(event, trigger, player) {
								trigger.finished = true;
							},
							group: ['历法_1', '历法_2', '历法_3'],
							subSkill: {
								1: {
									audio: 'ext:星舟扩展/audio/路加萨尔古斯:1',
									trigger: {
										player: ['damageBefore'],
									},
									forced: true,
									fixed: true,
									charlotte: true,
									filter: (event, player) => event.nature || (event.card && get.type(event.card) == 'trick'),
									async content(event, trigger, player) {
										await player.draw(trigger.num);
										trigger.finished = true;
									},
									ai: {
										effect: {
											target(card) {
												if (get.tag(card, 'natureDamage')) return [0, 4];
											},
										},
									}, //QQQ
									priority: 523,
								},
								2: {
									audio: 'ext:星舟扩展/audio/路加萨尔古斯:1',
									trigger: {
										global: ['useCard0'],
									},
									forced: true,
									fixed: true,
									charlotte: true,
									filter: (event, player) => event.player != player && event.targets && event.targets.includes(player) && event.card && get.type(event.card) == 'trick' && !get.tag(event.card, 'damage') && !get.tag(event.card, 'recover'),
									async content(event, trigger, player) {
										trigger.excluded.push(player);
									},
									ai: {
										effect: {
											target(card, player, target) {
												if (get.type(card) == 'trick' && !get.tag(card, 'recover') && player != target) return 'zerotarget';
											},
										},
									}, //QQQ
								},
								3: {
									trigger: {
										player: ['dieBefore'],
									},
									forced: true,
									fixed: true,
									charlotte: true,
									filter: (event, player) => player.hp > 0,
									async content(event, trigger, player) {
										trigger.finished = true;
									},
								},
							},
						},
						敕命: {
							audio: 'ext:星舟扩展/audio/路加萨尔古斯:2',
							enable: 'phaseUse',
							fixed: true,
							charlotte: true,
							usable: 1,
							async content(event, trigger, player) {
								for (var i of game.players) {
									if (i.isEnemiesOf(player) && (i.name == '哈兰杜汗' || i.next.name == '哈兰杜汗' || i.previous.name == '哈兰杜汗')) {
										var hp = i.hp;
										await i.damage(1, Array.from(lib.nature.keys()).randomGet());
										if (i.hp >= hp) i.loseHp();
									} else if (i.isEnemiesOf(player) && Math.random() > 0.5) {
										var hp = i.hp;
										await i.damage(1, Array.from(lib.nature.keys()).randomGet());
										if (i.hp >= hp) i.loseHp();
									}
								}
							},
							ai: {
								order: 10,
								result: {
									player: 1,
								},
							},
						},
						王息: {
							trigger: {
								global: ['gameStart'],
							},
							forced: true,
							fixed: true,
							charlotte: true,
							async content(event, trigger, player) {
								for (var i of game.players) {
									if (i.isFriendsOf(player) && (i.name == '路加萨尔古斯' || get.translation(i.name) == '亚历山德莉娜·维娜·维多利亚')) i.addSkill('诸王之息');
								}
							},
						},
						诸王之息: {
							audio: 'ext:星舟扩展/audio/路加萨尔古斯:2',
							trigger: {
								source: ['damageBegin4'],
							},
							forced: true,
							fixed: true,
							charlotte: true,
							filter: (event, player) => event.parent.parent.skill != '敕命',
							async content(event, trigger, player) {
								if (!trigger.num) trigger.num = 0;
								trigger.num += 4;
							},
							group: ['诸王之息_1', '诸王之息_2'],
							subSkill: {
								1: {
									audio: 'ext:星舟扩展/audio/路加萨尔古斯:1',
									trigger: {
										player: ['damageBegin4'],
									},
									forced: true,
									fixed: true,
									charlotte: true,
									async content(event, trigger, player) {
										trigger.num = Math.min(trigger.num / 10 - 3, 0);
									},
									priority: -524,
								},
								2: {
									audio: 'ext:星舟扩展/audio/路加萨尔古斯:2',
									trigger: {
										global: ['roundStart'],
									},
									forced: true,
									fixed: true,
									charlotte: true,
									async content(event, trigger, player) {
										player.hp += 3;
									},
								},
							},
						},
						//【潜龙】
						//持恒技,①游戏开始时,你获得20枚<道心>值.②当你回复体力值/ 得到牌 / 受到1点伤害 / 造成1点伤害后,你获得5 / 10 / 15 / 20枚<道心>值(上限为100枚).③若你的<道心>值不小于25 / 50 / 75 / 100,你视为拥有【清正】、【奸雄】/【酒诗】、【恢拓】/【行殇】、【放逐】/【决进】、【征逆】.
						QQQ_qianlong: {
							derivation: ['QQQ_qingzheng', 'QQQ_jianxiong', 'QQQ_huituo', 'QQQ_jiushi', 'QQQ_xingshang', 'QQQ_fangzhu', 'QQQ_juejin'],
							trigger: {
								player: ['gainAfter', 'damageEnd', 'recoverEnd'],
								source: ['damageEnd'],
							},
							audio: 'mbqianlong',
							forced: true,
							fixed: true,
							charlotte: true,
							mark: true,
							intro: {
								name: '道心',
								content(storage, player) {
									return `当前道心值${player.storage.QQQ_qianlong}`;
								},
							},
							init(player) {
								player.storage.QQQ_qianlong = 20;
								player.node.avatar.style.backgroundImage = `url(extension/星舟扩展/image/caomao3.jpg)`;
								ui.background.setBackgroundImage('extension/星舟扩展/image/caomao1.jpg');
							},
							async content(event, trigger, player) {
								switch (trigger.name) {
									case 'gain':
										player.storage.QQQ_qianlong += 10;
										break;
									case 'damage':
										if (trigger.player == player) {
											player.storage.QQQ_qianlong += 15;
										} else {
											player.storage.QQQ_qianlong += 20;
										}
										break;
									case 'recover':
										player.storage.QQQ_qianlong += 5;
										break;
								}
								if (player.storage.QQQ_qianlong > 24) {
									player.addSkill('QQQ_qingzheng');
									player.addSkill('QQQ_jianxiong');
								}
								if (player.storage.QQQ_qianlong > 49) {
									player.addSkill('QQQ_huituo');
									player.addSkill('QQQ_jiushi');
								}
								if (player.storage.QQQ_qianlong > 74) {
									player.addSkill('QQQ_xingshang');
									player.addSkill('QQQ_fangzhu');
								}
								if (player.storage.QQQ_qianlong > 99) {
									player.addSkill('QQQ_juejin');
								}
							},
						},
						//【卫统】
						//持恒技,主公技,游戏开始时,若你有【潜龙】且场上有其他魏势力角色,你因【潜龙】于游戏开始时获得的<道心>值修改为70枚.
						QQQ_weitong: {
							trigger: {
								global: ['gameStart'],
							},
							audio: 'mbweitong',
							forced: true,
							fixed: true,
							charlotte: true,
							zhuSkill: true,
							filter: (event, player) => lib.config.mode == 'identity' && player.hasSkill('QQQ_qianlong') && player.identity == 'zhu' && game.players.some((q) => q != player && q.group == 'wei'),
							async content(event, trigger, player) {
								player.storage.QQQ_qianlong += 50;
							},
						},
						//出牌阶段开始时,你可以弃置1种花色的所有手牌,并观看一名有手牌的其他角色的手牌,你弃置其中一种花色的所有牌.若其被弃置的牌数小于你以此法弃置的牌数,你对其造成1点伤害
						QQQ_qingzheng: {
							audio: 'mbcmqingzheng',
							trigger: { player: 'phaseUseBegin' },
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							forced: true,
							fixed: true,
							charlotte: true,
							async content(event, trigger, player) {
								//QQQ
								const result = await player
									.chooseButton(['弃置1种花色的所有牌', [lib.suits, 'vcard']], 1)
									.set('filterButton', (button) => player.countCards('h', { suit: button.link }) > 0)
									.set('ai', (button) => {
										return 6 - player.countCards('h', { suit: button.link });
									}).forResult();
								if (result.links?.length) {
									const { result: result1 } = await player
										.chooseTarget('观看一名其他角色的手牌并弃置其中一种花色的所有牌', (card, player, target) => target != player && target.countCards('h'))
										.set('ai', (target) => {
											var player = _status.event.player,
												att = get.attitude(player, target);
											if (att >= 0) return 0;
											return 1 - att / 2 + Math.sqrt(target.countCards('h'));
										});
									if (result1.targets && result1.targets[0]) {
										const target = result1.targets[0];
										const card1 = player.getCards('h', { suit: result.links[0] });
										player.discard(card1);
										var list = [];
										var dialog = ['清正:弃置' + get.translation(target) + '一种花色的所有牌'];
										for (var suit of lib.suits) {
											if (target.countCards('h', { suit: suit })) {
												dialog.push('<div class="text center">' + get.translation(suit + '2') + '牌</div>');
												dialog.push(target.getCards('h', { suit: suit }));
												list.push(suit);
											}
										}
										if (list.length) {
											const { result: result2 } = await player
												.chooseControl(list)
												.set('dialog', dialog)
												.set('ai', () => {
													var getv = (cards) => cards.map((i) => get.value(i)).reduce((p, c) => p + c, 0);
													return list.sort((a, b) => {
														return getv(target.getCards('h', { suit: b })) - getv(target.getCards('h', { suit: a }));
													})[0];
												});
											const card2 = target.getCards('h', { suit: result2.control });
											target.discard(card2, 'notBySelf').set('discarder', player);
											if (card1.length > card2.length) {
												target.damage();
											}
										}
									}
								}
							},
						},
						//【奸雄】
						//持恒技,当你受到伤害后,你可以获得对你造成伤害的牌并摸2+ X张牌【X为受到伤害数】.
						QQQ_jianxiong: {
							audio: 'rejianxiong',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							fixed: true,
							charlotte: true,
							async content(event, trigger, player) {
								if (trigger.cards && trigger.cards[0]) {
									player.gain(trigger.cards, 'gain2');
								}
								player.draw(2 + trigger.num);
							},
							ai: {
								maixie: true,
								maixie_hp: true,
							},
						},
						//【恢拓】
						//持恒技,当你受到伤害后,你可以令一名角色进行一次判定,若结果为红色,该角色回复X点体力值;否则该角色摸X张牌.
						QQQ_huituo: {
							audio: 'huituo',
							trigger: { player: 'damageEnd' },
							forced: true,
							fixed: true,
							charlotte: true,
							content() {
								'step 0';
								var forced = event.forced === undefined ? false : event.forced;
								var info = get.skillInfoTranslation('huituo', player);
								var str = `###${forced ? '恢拓:请选择一名角色' : get.prompt('huituo')}###令一名角色判定.若结果为红色,其回复1点体力;若结果为黑色,其摸${get.cnNumber(trigger.num)}张牌`;
								player.chooseTarget(str, event.forced).set('ai', function (target) {
									var player = _status.event.player;
									if (get.attitude(player, target) > 0) {
										return get.recoverEffect(target, player, player) + 1;
									}
									return 0;
								});
								('step 1');
								if (result.targets?.length) {
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
										event.target.recover(trigger.num);
									} else {
										event.target.draw(trigger.num);
									}
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
							},
						},
						//【酒诗】
						//持恒技,①当你需要使用【酒】时,若你的武将牌正面向上,你可以翻面,视为使用一张【酒】.②当你受到伤害后,若你的武将牌于受到伤害时背面向上,则你翻回正面.③当你翻面后,你随机获得牌堆里的一张牌.
						QQQ_jiushi: {
							audio: 'mbcmjiushi',
							fixed: true,
							charlotte: true,
							group: ['QQQ_jiushi_3', 'QQQ_jiushi_4'],
							hiddenCard(player, name) {
								if (name == 'jiu') return !player.isTurnedOver();
								return false;
							},
							enable: 'chooseToUse',
							filter(event, player) {
								if (player.classList.contains('turnedover')) return false;
								return event.filterCard({ name: 'jiu' }, player, event);
							},
							async content(event, trigger, player) {
								if (_status.event.getParent(2).type == 'dying') {
									event.dying = player;
									event.type = 'dying';
								}
								player.turnOver();
								player.useCard({ name: 'jiu' }, player);
							},
							ai: {
								order: 5,
								result: {
									player: 1,
								},
								effect: {
									target: 1,
								},
							},
							subSkill: {
								3: {
									audio: 'mbcmjiushi',
									trigger: {
										player: 'damageEnd',
									},
									filter(event, player) {
										return player.isTurnedOver();
									},
									forced: true,
									fixed: true,
									charlotte: true,
									async content(event, trigger, player) {
										player.turnOver();
									},
								},
								4: {
									audio: 'mbcmjiushi',
									trigger: {
										player: 'turnOverAfter',
									},
									forced: true,
									fixed: true,
									charlotte: true,
									async content(event, trigger, player) {
										player.gain(Array.from(ui.cardPile.childNodes).randomGet(), 'gain2', 'log');
									},
								},
							},
						},
						//【行殇】
						//持恒技,当其他角色死亡时,你可以选择一项: 回复所有体力值并摸一张牌或获得其所有牌.
						QQQ_xingshang: {
							audio: 'rexingshang',
							trigger: {
								global: 'die',
							},
							forced: true,
							fixed: true,
							charlotte: true,
							async content(event, trigger, player) {
								var choice = ['回复体力'];
								if (trigger.player.countCards('he')) {
									choice.push('获得牌');
								}
								const result = await player
									.chooseControl(choice)
									.set('prompt', get.prompt2('rexingshang'))
									.set('ai', function () {
										if (trigger.player.countCards('he') > 3) return '获得牌';
										return '回复体力';
									}).forResult();
								if (result.control == '获得牌') {
									event.togain = trigger.player.getCards('he');
									player.gain(event.togain, trigger.player, 'giveAuto', 'bySelf');
								} else {
									player.recover();
									player.draw();
								}
							},
						},
						//【放逐】
						//持恒技,出牌阶段限一次,你可以选择一名其他角色并选择一项执行(不可对上轮被此技能选中的目标选择执行相同效果): 1,令其不能使用手牌中的非锦囊/ 非基本 / 非装备牌直到其回合结束;2,令其武将牌翻面并令其非锁定技失效直到本轮结束;3,令其所有技能失效直到其回合结束;4,令其失去所有技能直到游戏结束(该效果身份场不可选).
						QQQ_fangzhu: {
							getList: [
								{
									//0
									prompt: () => '令一名其他角色于手牌中只能使用基本牌直到其回合结束',
									filter: (player) => game.hasPlayer((target) => target != player && !target.getStorage('QQQ_fangzhu_ban').includes('basic')),
									filterTarget: (card, player, target) => target != player && !target.getStorage('QQQ_fangzhu_ban').includes('basic'),
									async content(player, target) {
										target.addTempSkill('QQQ_fangzhu_ban', { player: 'phaseEnd' });
										target.markAuto('QQQ_fangzhu_ban', ['basic']);
									},
									ai: {
										result: {
											target(player, target) {
												return -target.countCards('hs', (q) => get.type(q) != 'basic');
											},
										},
									},
								},
								{
									//1
									prompt: () => '令一名其他角色于手牌中只能使用锦囊牌直到其回合结束',
									filter: (player) => game.hasPlayer((target) => target != player && !target.getStorage('QQQ_fangzhu_ban').includes('trick')),
									filterTarget: (card, player, target) => target != player && !target.getStorage('QQQ_fangzhu_ban').includes('trick'),
									async content(player, target) {
										target.addTempSkill('QQQ_fangzhu_ban', { player: 'phaseEnd' });
										target.markAuto('QQQ_fangzhu_ban', ['trick']);
									},
									ai: {
										result: {
											target(player, target) {
												return -target.countCards('hs', (q) => get.type(q) != 'trick');
											},
										},
									},
								},
								{
									//2
									prompt: () => '令一名其他角色于手牌中只能使用装备牌直到其回合结束',
									filter: (player) => game.hasPlayer((target) => target != player && !target.getStorage('QQQ_fangzhu_ban').includes('equip')),
									filterTarget: (card, player, target) => target != player && !target.getStorage('QQQ_fangzhu_ban').includes('equip'),
									async content(player, target) {
										target.addTempSkill('QQQ_fangzhu_ban', { player: 'phaseEnd' });
										target.markAuto('QQQ_fangzhu_ban', ['equip']);
									},
									ai: {
										result: {
											target(player, target) {
												return -target.countCards('hs', (q) => get.type(q) != 'equip');
											},
										},
									},
								},
								{
									//3
									prompt: () => '令其所有技能失效直到其回合结束',
									filter: (player) => game.hasPlayer((target) => target != player),
									filterTarget: lib.filter.notMe,
									async content(player, target) {
										for (var i of target.GS()) {
											target.disableSkill('技能失效', i);
										}
										target.when({ player: 'phaseAfter' }).then(() => {
											player.enableSkill('技能失效');
										});
									},
									ai: {
										result: {
											target(player, target) {
												return -target.getSkills(null, false).filter((i) => get.info(i) && !get.info(i).charlotte).length;
											},
										},
									},
								},
								{
									//4
									prompt: () => '令其失去所有技能直到游戏结束(该效果身份场不可选)',
									filter: () => get.mode() != 'identity',
									filterTarget: lib.filter.notMe,
									async content(player, target) {
										target.skills = [];
										target.tempSkills = {};
										target.additionalSkills = {};
									},
									ai: {
										result: {
											target(player, target) {
												return -target.skills.length * 2;
											},
										},
									},
								},
								{
									//5
									prompt: () => '令一名其他角色将武将牌翻面并令其非锁定技失效直到本轮结束',
									filter: (player) => game.hasPlayer((target) => target != player),
									filterTarget: lib.filter.notMe,
									async content(player, target) {
										await target.turnOver();
										target.addTempSkill('fengyin', { global: 'roundStart' });
									},
									ai: {
										result: {
											target(player, target) {
												return target.isTurnedOver() ? -1 : -3;
											},
										},
									},
								},
							],
							audio: ['sbfangzhu_mb_caomao1.mp3', 'sbfangzhu_mb_caomao2.mp3'],
							enable: 'phaseUse',
							filter(event, player) {
								return get.info('QQQ_fangzhu').getList.some((effect) => {
									return effect.filter(player);
								});
							},
							usable: 1,
							fixed: true,
							charlotte: true,
							chooseButton: {
								dialog() {
									let dialog = ui.create.dialog('放逐:请选择一项', 'hidden');
									const list = get.info('QQQ_fangzhu').getList.slice();
									dialog.add([
										list.map((effect) => {
											return [effect, effect.prompt()];
										}),
										'textbutton',
									]);
									return dialog;
								},
								filter(button, player) {
									const effect = button.link;
									return effect.filter(player);
								},
								check(button) {
									const player = get.event().player,
										effect = button.link;
									if (button.link == get.info('QQQ_fangzhu').getList[4]) return 99;
									if (button.link == get.info('QQQ_fangzhu').getList[3]) return 98;
									return 100 * Math.random();
								},
								backup(links, player) {
									const effect = links[0];
									return {
										effect: effect,
										audio: 'QQQ_fangzhu',
										audioname: ['mb_caomao'],
										filterCard: () => false,
										selectCard: -1,
										filterTarget: effect.filterTarget,
										async content(event, trigger, player) {
											const target = event.targets[0],
												effect = lib.skill.QQQ_fangzhu_backup.effect;
											await effect.content(player, target);
										},
										ai: effect.ai,
									};
								},
								prompt(links, player) {
									const effect = links[0],
										str = '###放逐###';
									return str + '<div class="text center">' + effect.prompt() + '</div>';
								},
							},
							ai: {
								order: 7,
								result: {
									player: 10,
								},
							},
							subSkill: {
								backup: {},
								kill: {
									charlotte: true,
									mark: true,
									marktext: '禁',
									intro: { content: '不能响应其他角色使用的牌' },
									trigger: { global: 'useCard1' },
									filter(event, player) {
										return event.player != player;
									},
									forced: true,
									popup: false,
									async content(event, trigger, player) {
										trigger.directHit.add(player);
									},
								},
								ban: {
									charlotte: true,
									mark: true,
									marktext: '禁',
									intro: {
										markcount: () => 0,
										content(storage) {
											if (storage.length > 1) return '不能使用手牌';
											return '于手牌中只能使用' + get.translation(storage[0]) + '牌';
										},
									},
									mod: {
										cardEnabled(card, player) {
											const storage = player.getStorage('QQQ_fangzhu_ban');
											const hs = player.getCards('h'),
												cards = [card];
											if (Array.isArray(card.cards)) cards.addArray(card.cards);
											if (cards.containsSome(...hs) && (storage.length > 1 || !storage.includes(get.type2(card)))) return false;
										},
										cardSavable(card, player) {
											const storage = player.getStorage('QQQ_fangzhu_ban');
											const hs = player.getCards('h'),
												cards = [card];
											if (Array.isArray(card.cards)) cards.addArray(card.cards);
											if (cards.containsSome(...hs) && (storage.length > 1 || !storage.includes(get.type2(card)))) return false;
										},
									},
								},
							},
						},
						//【决进】
						//持恒技,限定技,出牌阶段,你可以令所有角色依次将体力值调整至1并获得Y点护甲(Y为一名角色的体力值,你以此法获得的护甲数额外+ 6).你将牌堆,弃牌堆,场上及所有角色区域内的【闪】、【桃】和【酒】移出游戏且增加如下<向死存魏>光环: 当有【闪】、【桃】和【酒】进入弃牌堆后立即移出游戏.
						//【征逆】
						//持恒技,觉醒技,当你发动【决进】后,你增加1点体力上限并失去所有<道心>值,获得技能【忿肆】和【决讨】,因【潜龙】视为拥有的非限定技修改为永久拥有不可失去直到游戏结束.
						QQQ_juejin: {
							audio: 'mbjuejin',
							persevereSkill: true,
							enable: 'phaseUse',
							limited: true,
							fixed: true,
							charlotte: true,
							filterCard: () => false,
							selectCard: [-1, -2],
							filterTarget: true,
							selectTarget: -1,
							multiline: true,
							async contentBefore(event, trigger, player) {
								player.changeSkin({ characterName: 'mb_caomao' }, 'mb_caomao_shadow');
								player.awakenSkill('QQQ_juejin');
							},
							async content(event, trigger, player) {
								player.node.avatar.style.backgroundImage = `url(extension/星舟扩展/image/caomao4.jpg)`;
								ui.background.setBackgroundImage('extension/星舟扩展/image/caomao2.jpg');
								game.GIF0('caomao', 4000);
								ui.backgroundMusic.src = `extension/星舟扩展/audio/caomaoBGM.mp3`;
								ui.backgroundMusic.loop = true;
								const target = event.target;
								const delt = target.getHp(true) - 1,
									num = Math.abs(delt);
								if (delt != 0) {
									if (delt > 0) {
										await target.changeHp(-delt).set('_triggered', null);
									} else await target.recover(num);
								}
								if (num > 0) {
									await target.changeHujia(num + (player == target ? 6 : 0));
								} else if (player == target) {
									await target.changeHujia(6);
								}
							},
							async contentAfter(event, trigger, player) {
								game.addGlobalSkill('QQQ_juejin_xiangsicunwei');
								player.$fullscreenpop('向死存魏!', 'thunder');
								const cards = ['cardPile', 'discardPile'].map((pos) => Array.from(ui[pos].childNodes)).flat();
								const filter = (card) => ['shan', 'tao', 'jiu'].includes(card.name);
								const cardx = cards.filter(filter);
								if (cardx.length) {
									await game.cardsGotoSpecial(cardx);
									game.log(cardx, '被移出了游戏');
								}
								for (const target of game.filterPlayer()) {
									const sishis = target.getCards('hej', filter);
									if (sishis.length) await target.lose(sishis);
								}
								player.gainMaxHp();
								player.storage.QQQ_qianlong = 0;
								player.addSkill('fensi');
								player.addSkill('juetao');
							},
							ai: {
								order: 10,
								result: {
									player: 10,
								},
							},
							subSkill: {
								xiangsicunwei: {
									trigger: {
										global: ['loseAfter', 'equipAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
									},
									forced: true,
									silent: true,
									firstDo: true,
									filter(event, player) {
										const nameList = ['shan', 'tao', 'jiu'];
										return event.getd().some((card) => {
											return nameList.includes(card.name) && get.position(card, true) === 'd';
										});
									},
									async content(event, trigger, player) {
										const nameList = ['shan', 'tao', 'jiu'];
										const cards = trigger.getd().filter((card) => {
											return nameList.includes(card.name) && get.position(card, true) === 'd';
										});
										await game.cardsGotoSpecial(cards);
										game.log(cards, '被移出了游戏');
									},
								},
							},
						},
						//【殒诅】
						//持恒技,①当你死亡时,若你本局身份为主公且场上有忠臣或内奸存活,则你与随机一位忠臣或内奸交换身份(击杀你的角色除外).②击杀你的角色每回合准备阶段和结束阶段各失去1点体力值,无法使用或打出任何牌直到其回合结束.
						QQQ_yunzu: {
							audio: 'mbjuejin',
							trigger: {
								player: ['die'],
							},
							forced: true,
							fixed: true,
							charlotte: true,
							async content(event, trigger, player) {
								const qqq = game.players.filter((q) => q != player && ['nei', 'zhong'].includes(q.identity));
								if (player.identity == 'zhu' && qqq.length) {
									const q = qqq.randomGet();
									const temp = player.identity;
									player.identity = q.identity;
									q.identity = temp;
								}
								if (trigger.source) {
									trigger.source.addSkill('QQQ_yunzu_1');
									trigger.source.addTempSkill('QQQ_yunzu_2', { player: 'phaseAfter' });
								}
							},
							subSkill: {
								1: {
									trigger: {
										player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
									},
									forced: true,
									fixed: true,
									charlotte: true,
									async content(event, trigger, player) {
										player.loseHp();
									},
								},
								2: {
									mod: {
										cardEnabled2(card, player) {
											return false;
										},
									},
								},
							},
						},
					},
					translate: {
						QQQ_caomao: '曹髦',
						路加萨尔古斯: '路加萨尔古斯',
						msshu: '黍',
						msvvan: '薇薇安娜',
						msrvvan: '薇薇安娜',
						msyywc: '焰影苇草',
						msslls: '索拉里斯',
						mslfzw: '路加萨尔古斯',
						msys: '药师',
						mslan: '岚',
						mstaiyi: '太一',
						msxp: '希佩',
						msklb: '克里珀',
						msnnk: '纳努克',
						mszxsh: '至序圣华',
						mstlxy: '特蕾西娅',
						msmtlxy: '梦特蕾西娅',
						msmtlxy_prefix: '梦',
						ms_zhaoyun: '神赵云',
						ms_zhaoyun_prefix: '神',
						msd_zhaoyun: '经典高达一号',
						msd_zhaoyun_prefix: '经典',
						ms_liubei: '神刘备',
						ms_liubei_prefix: '神',
						ms_guanyu: '神关羽',
						ms_guanyu_prefix: '神',
						mschaos: '卡奥斯',
						ltny: '莱',
						ltny2: '莱塔尼亚',
						shenchi: '深',
						shenchi2: '深池',
						binary: '二元奇构',
						original: '原创魔改',
						hoshikami: '星神',
						prototype: '初稿原设',
						orgn: '源',
						orgn2: '起源神',
						terra: '泰',
						terra2: '泰拉',
						mssgls: '圣光灵神',
						mslmht: '罗姆怀特',
						mshlmt: '赫林玛特',
						msyvgnd: '伊维格娜德',
						ms_caojie: '梦曹节',
						ms_caojie_prefix: '梦',
						mshehzl: '赫尔昏佐伦',
						QQQ_qianlong: '潜龙',
						QQQ_qianlong_info: '持恒技,①游戏开始时,你获得20枚<道心>值.②当你回复体力值/ 得到牌 / 受到1点伤害 / 造成1点伤害后,你获得5 / 10 / 15 / 20枚<道心>值(上限为100枚).③若你的<道心>值不小于25 / 50 / 75 / 100,你视为拥有【清正】、【奸雄】/【酒诗】、【恢拓】/【行殇】、【放逐】/【决进】、【征逆】',
						QQQ_weitong: '卫统',
						QQQ_weitong_info: '持恒技,主公技,游戏开始时,若你有【潜龙】且场上有其他魏势力角色,你因【潜龙】于游戏开始时获得的<道心>值修改为70枚',
						QQQ_qingzheng: '清正',
						QQQ_qingzheng_info: '出牌阶段开始时,你可以弃置1种花色的所有手牌,并观看一名有手牌的其他角色的手牌,你弃置其中一种花色的所有牌.若其被弃置的牌数小于你以此法弃置的牌数,你对其造成1点伤害',
						QQQ_jianxiong: '奸雄',
						QQQ_jianxiong_info: '持恒技,当你受到伤害后,你可以获得对你造成伤害的牌并摸2+ X张牌【X为受到伤害数】',
						QQQ_huituo: '恢拓',
						QQQ_huituo_info: '持恒技,当你受到伤害后,你可以令一名角色进行一次判定,若结果为红色,该角色回复X点体力值;否则该角色摸X张牌',
						QQQ_jiushi: '酒诗',
						QQQ_jiushi_info: '持恒技,①当你需要使用【酒】时,若你的武将牌正面向上,你可以翻面,视为使用一张【酒】.②当你受到伤害后,若你的武将牌于受到伤害时背面向上,则你翻回正面.③当你翻面后,你随机获得牌堆里的一张牌',
						QQQ_xingshang: '行殇',
						QQQ_xingshang_info: '持恒技,当其他角色死亡时,你可以选择一项: 回复所有体力值并摸一张牌或获得其所有牌',
						QQQ_fangzhu: '放逐',
						QQQ_fangzhu_info: '持恒技,出牌阶段限一次,你可以选择一名其他角色并选择一项执行(不可对上轮被此技能选中的目标选择执行相同效果): 1,令其不能使用手牌中的非锦囊/ 非基本 / 非装备牌直到其回合结束;2,令其武将牌翻面并令其非锁定技失效直到本轮结束;3,令其所有技能失效直到其回合结束;4,令其失去所有技能直到游戏结束(该效果身份场不可选)',
						QQQ_juejin: '决进',
						QQQ_juejin_info: '持恒技,限定技,出牌阶段,你可以令所有角色依次将体力值调整至1并获得Y点护甲(Y为一名角色的体力值,你以此法获得的护甲数额外+ 6).你将牌堆,弃牌堆,场上及所有角色区域内的【闪】、【桃】和【酒】移出游戏且增加如下<向死存魏>光环: 当有【闪】、【桃】和【酒】进入弃牌堆后立即移出游戏.你增加1点体力上限并失去所有<道心>值,获得技能【忿肆】和【决讨】,因【潜龙】视为拥有的非限定技修改为永久拥有不可失去直到游戏结束',
						QQQ_yunzu: '殒诅',
						QQQ_yunzu_info: '持恒技,①当你死亡时,若你本局身份为主公且场上有忠臣或内奸存活,则你与随机一位忠臣或内奸交换身份(击杀你的角色除外).②击杀你的角色每回合准备阶段和结束阶段各失去1点体力值,无法使用或打出任何牌直到其回合结束',
						诸王之息: '诸王之息',
						诸王之息_info: '持恒技,你造成的伤害+ 4,受到的伤害减少90% (若伤害低于9点则防止此伤害),受到的伤害- 3,每轮回合结束时回复3点体力值',
						王息: '王息',
						王息_info: '宗族技,锁定技,所有同阵营的阿斯兰王室角色游戏开始时获得诸王之息BUFF',
						敕命: '敕命',
						敕命_info: '出牌阶段限一次,你对敌方随机数量的角色造成1点随机属性伤害【若对方防止或免疫伤害则改为失去体力】; 若【大地之鞭·哈兰杜汗】在场时,优先指定其及其周围的敌方角色造成伤害【此技能伤害不享受诸王之息BUFF加成】',
						历法: '历法',
						历法_info: '1.你始终跳过判定阶段,无法成为判定目标;2.你的体力上限不会减少且免疫直接死亡,当你受到属性伤害和锦囊伤害时,防止之并同时摸X张牌【X为该牌造成的伤害值】: 3其他角色的非回复类锦囊牌对你无效【不包括伤害类锦囊牌】; 4自身锁定技不会被失效',
						msjiahe: '嘉禾',
						msjiahe_info: '锁定技,①游戏开始时你摸12张牌,选择4张手牌作为起始手牌,其余的牌置于你的武将牌上,称为<禾>.②摸牌阶段结束时,你可以用任意张手牌交换等量的<禾>.③弃牌阶段开始时,你可以将任意张牌置入<禾>.④你的手牌上限+X(X为你的<禾>数)',
						mskurong: '枯荣',
						mskurong_info: '结束阶段开始时,你可以弃置任意张<禾>并选择等量角色,这些角色受到的伤害和失去的体力值+1.',
						msfengrao: '丰饶',
						msfengrao_info: '结束阶段开始时,你可以弃置任意张<禾>并选择等量角色,防止这些角色受到的所有伤害直到你的下个回合开始,且其回合结束时回复1~2点体力.',
						mschangqing: '长青',
						mschangqing_info: '锁定技,一名角色触发【枯荣】或【丰饶】的效果时,你摸一张牌;若触发的对象为你,你摸三张牌.',
						msxingjie: '星解',
						msxingjie_info: '锁定技,当你受到1点伤害后,你令伤害来源的一个技能本回合失效;当你造成伤害时,你可以选择一项:1.摸体力上限张牌,2.获得风林火山一名神将的一个技能.',
						msxinghu: '星护',
						msxinghu_info: '锁定技,①若你未装备防具/装备防具,防止你受到的非属性伤害/属性伤害.②若你装备了坐骑,防止你受到的一切伤害.③你的坐骑牌不可被获得或弃置.',
						msxinghui: '星辉',
						msxinghui_info: '锁定技,①摸牌阶段你额外摸体力值张牌,你的手牌上限等于体力上限.②结束阶段开始时,你进行一次判定,若结果为:黑色,你移动场上一张装备牌且此牌不可被弃置直到你的下回合开始;红色,你获得判定牌并令一名角色执行一个额外回合.',
						msxingbie: '星别',
						msxingbie_info: '锁定技,当你死亡时,你令一名角色将体力值和体力上限调整至游戏开始时,其获得一项你的技能(若其为神势力,改为获得你的所有技能).',
						mszhuguang: '烛光',
						mszhuguang_info: '锁定技,①游戏开始时,你查看一名不为主公的其他角色的身份;②每局游戏限四次,一轮游戏开始时,你查看一名未查看过身份的角色的身份.执行:你与其阵营相同,你令其摸一张牌;你与其阵营不同,你弃置其区域内一张牌;你为忠臣且其为主公,其摸三张牌;你为内奸,你摸存活人数张牌.',
						mslveying: '掠影',
						mslveying_info: '每回合限20次,你可以将区域内的一张牌当做一张防御类/增益类牌使用或打出,摸一张牌.',
						msanyao: '暗耀',
						msanyao_info: '觉醒技,当你发动4次【烛光】或体力值低于3后,你增加2点体力上限,回复2点体力或摸四张牌,失去【烛光】并获得【散华】和【明灭】.',
						mssanhua: '散华',
						mssanhua_info: '锁定技,当你受到伤害/失去体力时,你进行判定.若结果为:黑色,防止之;红色,你获得判定牌和造成伤害/失去体力的牌.',
						msmingmie: '明灭',
						msmingmie_info: '出牌阶段,你可以弃置任意张牌并获得等量护甲.若你有护甲,当你失去体力时防止之,你造成的伤害+X(X为你的护甲值).',
						mslifa: '历法',
						mslifa_info: '锁定技,你跳过判定阶段,你进行判定效果为负面的判定时,取消之.若你未装备:坐骑,你视为拥有【灵策】;防具,你视为拥有【隐士】;武器,你视为拥有【奇才】;宝物,你视为拥有【帷幕】.',
						msshimo: '始末',
						msshimo_info: '锁定技,当你的体力值降低至10/8/6/4点及以下时,你须废除一项装备栏并获得【历法】中对应的技能(若【大地之鞭·哈兰杜汗】存活,改为废除两项).你以此法废除坐骑栏时,获得【定汉】.',
						mskongyuan: '空元',
						mskongyuan_info: '觉醒技,准备阶段开始时,若你的所有装备栏均已废除,你减少一半体力上限(向下取整)并回复所有废除的装备栏,失去【历法】并获得【天妒】和【鬼才】.',
						msyanli: '厌离',
						msyanli_info: '锁定技,若你未装备防具,你视为拥有【先天八卦阵】的效果.',
						msmingche: '明澈',
						msmingche_info: '锁定技,当你受到伤害时,若此伤害值为1,你摸三张牌,否则改为1点.你的黑/红色普通杀视为【酒】/【桃】且不计入手牌上限,你使用以此法转化的牌脱离濒死时,回复2点体力.你的手牌上限等于你的体力上限.',
						msyuanyin: '愿印',
						msyuanyin_info: '锁定技,①当你受到1点伤害后,若你的体力值小于体力上限的一半,你获得对你造成伤害的牌并摸X张牌(X为你已损失的体力值+【愿印】①发动次数).②当你于回合外一次性失去至少两张牌时,你摸失去牌数+1张牌.',
						msfue: '伏厄',
						msfue_info: '锁定技,你受到其他角色造成的伤害时,你进行一次判定.若结果为:红色,伤害来源失去X点体力;黑色,伤害来源弃置X+6张牌.(X为你已损失的体力值)',
						msguangxun: '光巡',
						msguangxun_info: '锁定技,①准备阶段或当你受到伤害后,你视为使用一张【万箭齐发】.②你可以将任意两张牌当做【万箭齐发】使用.③当你手牌中基本牌或锦囊牌的牌数为0时,你摸场上角色数张牌.④若【丰饶星神·药师】为你的:敌方,你令其所有防御性锁定技失效;友方,防止你对其造成的伤害.',
						msweishi: '危矢',
						msweishi_info: '当你使用转化的【万箭齐发】时,若你已受伤,你可以弃置一张牌并选择一项:1.此牌造成的伤害+1;2.此牌结算完成后,你回复此牌造成伤害值点体力(至少回复1点);3.为此牌减少至多三个目标.',
						mstaiqing: '太清',
						mstaiqing_info: '①你免疫一次亡语的影响.②准备阶段,若你已发动【太清】①或至少发动过4次【光巡】,你增加2点体力上限并令手牌上限+X(X为你的体力上限-场上角色数),获得【夷灭】.',
						msyimie: '夷灭',
						msyimie_info: '当你造成伤害时,你可以弃置一张牌或失去1点体力,令此伤害+X(X为受伤角色体力值-1).',
						mslianpo: '连破',
						mslianpo_info: '一名角色的回合结束时,若你此回合内击杀过其他角色,你执行一个额外回合,且此回合内你造成的伤害+1.',
						msjuejing: '绝境',
						msjuejing_info: '锁定技,你始终跳过判定阶段和摸牌阶段.当你的手牌数改变后,若非♥️️牌的数量不等于你的体力上限,调整至体力上限.你不会翻面.',
						mslonghun: '龙魂',
						mslonghun_info: '你可以将同花色的至多三张牌按以下规则使用:♠️️当【无懈可击】,♣️️当【闪】,♥️️当【桃】,♦️️当火【杀】.你以此法使用红色牌时伤害值/回复量+X,使用黑色牌时你弃置当前回合角色X张牌.(X为以此法使用牌数-1).你每以此法使用体力上限张牌,你增加1点体力上限.',
						mszhanjiang: '斩将',
						mszhanjiang_info: '准备阶段,你可以获得场上的【青釭剑】.若你装备了【青釭剑】,你使用牌无距离次数限制且不可被响应.',
						mslongyou: '龙佑',
						mslongyou_info: '锁定技,敌方角色只能使用牌指定你为目标,你每受到其造成的1点伤害便令其失去1个技能.',
						mslongnu: '龙怒',
						mslongnu_info: '转换技,锁定技,阴:出牌阶段开始时,你失去1点体力并摸一张牌,本阶段内你的红色手牌均视为火【杀】且无距离限制.阳:出牌阶段开始时,你减1点体力上限并摸一张牌,本阶段内你的锦囊牌均视为雷【杀】且无使用次数限制.',
						mslongnu_rewrited: '龙怒·改',
						mslongnu_rewrited_info: '出牌阶段开始时,你可以失去1点体力或体力上限并摸两张牌,本回合你的红色/黑色牌均视为火/雷【杀】且无距离次数限制.',
						msjieying: '结营',
						msjieying_info: '锁定技,你始终处于横置状态,已横置的角色手牌上限+3.结束阶段,你可以横置一名其他角色,并防止其受到的伤害来源不为你的属性伤害直到你死亡.',
						mszhaolie: '昭烈',
						mszhaolie_info: '觉醒技,当你即将死亡时,取消之并将体力上限增加至{初始体力上限×当前轮次},回复体力至体力上限-存活人数,摸体力上限张牌,获得【龙魂】【天任】并修改【龙怒】.',
						msbian: '彼岸',
						msbian_info: '锁定技,游戏开始时,你令所有国籍势力的角色摸牌阶段额定摸牌数+3,非国籍势力角色非锁定技失效并获得失效技能数个<彼岸花>标记(对神话再临系列武将无效),若其非锁定技无法失效则其死亡.拥有<彼岸花>的角色每受到1点伤害则移去一个<彼岸花>并随机解封一个不为限定技且描述不含有<限一次>的技能,当其<彼岸花>数归零时,其死亡.你的技能不会失效.',
						mshundun: '混沌',
						mshundun_info: '锁定技,你对拥有<彼岸花>的角色造成的伤害+X,其对你造成伤害后,进行一次判定:若结果为黑色,其弃置X张牌(不足则改为失去等量体力);红色,其失去X点体力(X为你已损失的体力值).拥有<彼岸花>的角色使用牌只能指定你和其他拥有彼岸花的角色为目标.',
						msxukong: '虚空',
						msxukong_info: '锁定技,你的手牌上限+Y,准备阶段你摸Y张牌并对所有拥有<彼岸花>的角色造成1点伤害(Y为未拥有<彼岸花>的角色数).若其因此而进入濒死状态,你令其回复1点体力并减少1点体力上限.',
						msshenshi: '神蚀',
						msshenshi_info: '锁定技,拥有<彼岸花>的角色死亡时,你获得其一项技能(其为神势力则改为所有技能).其他角色死亡时,你获得【轮回】并令【轮回】使用次数+1(至多为5).',
						mslunhui: '轮回',
						mslunhui_info: '锁定技,每局游戏限零次,当你即将死亡时,你减少1点体力上限并回复全部体力,摸体力上限张牌并翻面.',
						mswushen: '武神',
						mswushen_info: '锁定技,你的♠️️️/♣️️️牌视为♥️️️/♦️️牌,所有角色区域内的牌点数视为2.你可以将一张♥️️️/♦️️️牌当做任意一张牌使用或打出(每种锦囊牌每回合限一次),你以此法使用的伤害类牌造成伤害+2,无距离次数限制且不可被响应.',
						mswuhun: '武魂',
						mswuhun_info: '锁定技,①你受到伤害后,获得伤害来源伤害值张牌并令其获得伤害值个梦魇标记.②你死亡时,你可以进行判定,若结果不为【桃】或【桃园结义】,你令任意名梦魇标记数最多的角色死亡,剩余拥有梦魇标记的角色依次选择一项:1.弃置梦魇标记数张牌,2.失去梦魇标记数点体力,若仍有拥有梦魇标记的角色存活,你减少一点体力上限,复活并回复全部体力(至多复活两次).③你的技能不会失效.',
						mszhongyi: '忠义',
						mszhongyi_info: '锁定技,当你的体力值降低至2以下时,你获得场上所有点数为2的牌并交给任意名其他角色,以此法获得牌的角色减少等量个梦魇标记.',
						msglongyou: '龙佑',
						msglongyou_info: '锁定技,敌方角色只能使用牌指定你为目标,且获得梦魇标记时数量翻倍.',
						msrlveying: '掠影',
						msrlveying_info: '每回合限5次,你可以将区域内的一张牌当做一张防御类/增益类牌使用或打出,摸一张牌.',
						msranyao: '暗耀',
						msranyao_info: '觉醒技,当你发动4次【烛光】后,你增加2点体力上限,回复2点体力或摸四张牌,失去【烛光】并获得【散华】和【明灭】.',
						msrsanhua: '散华',
						msrsanhua_info: '锁定技,当你受到伤害时,你进行判定.若结果为:黑色,防止之;红色,你获得造成伤害的牌.',
						msdjuejing: '绝境',
						msdjuejing_info: '锁定技,①你始终跳过判定阶段和摸牌阶段.②你的多目标锦囊牌和延时锦囊牌视为🃏.③你每种花色的手牌数恒定为1.',
						msdlonghun: '龙魂',
						msdlonghun_info: '每回合限三十次,你可以你的牌按以下规则使用:♠️️当【无懈可击】,♣️️当【闪】,♥️️当【桃】,♦️️当火【杀】.你每以此法使用体力上限张牌,你增加1点体力上限(至多为5).',
						msdzhanjiang: '斩将',
						msdzhanjiang_info: '准备阶段,你可以获得场上的【青釭剑】/【银月枪】.若你装备了【青釭剑】/【银月枪】,你使用牌无距离限制且使用【杀】的次数上限+5.',
						mshuzhu: '护主',
						mshuzhu_info: '每两轮限一次,一名角色进入濒死时,你可以弃置一张🃏牌令其将体力上限调整至游戏开始时并回复所有体力,其将手牌补至体力上限并装备【护心镜】.若该角色为你,本轮你使用【龙魂】的次数限制翻倍.',
						mshuozhong: '火种',
						mshuozhong_info: '锁定技,你视为拥有能造成火焰伤害的神势力武将技能,你造成的伤害改为火焰伤害.当你造成火焰伤害后,令一名友方角色回复1点体力,若其体力值已满则改为增加1点体力上限.',
						mshuozhong_append: '<span style="font-family:yuanli">视为拥有的技能:<br>【业炎】【龙魂】<br> 【军略】【绽火】<br>【平襄】【红莲】.</span>',
						msyingyao: '映耀',
						msyingyao_info: '锁定技,当你受到火焰伤害时,防止之并回复等量体力,若你体力值已满则改为增加1点体力上限.当你造成火焰伤害时,回复等量体力.',
						msshengxi: '生息',
						msshengxi_info: '锁定技,你拥有的神势力武将的限定技改为<出牌阶段限一次>.每轮限一次,一名友方角色进入濒死时,你对所有敌方角色造成1点火焰伤害并令其回复等量体力.',
						msshenghu: '圣护',
						msshenghu_info: '锁定技,你造成/受到伤害后,亮出牌堆顶伤害值张牌并记录点数之和,获得其中一种类型的所有牌,弃置剩余牌并回复等量体力.你的锁定技不会失效.',
						msshengjian: '圣剑',
						msshengjian_info: '锁定技,你使用/打出/弃置牌后,记录此牌点数.【圣剑】和【圣护】记录的点数之和每达到22点,你获得一个<圣剑>标记(至多为5).根据你的标记数获得对应效果.',
						msshengjiana: '圣剑·1枚',
						msshengjiana_info: '锁定技,你使用牌无距离限制、无视防具、不可被响应,你使用【杀】的次数+X(X为你的<圣剑>标记数).',
						msshengjianb: '圣剑·2枚',
						msshengjianb_info: '锁定技,防止你受到的属性伤害并获得等量护甲.你每失去1点护甲,手牌上限+1,造成伤害值+1,体力上限+1.若你拥有护甲,你的体力上限不会减少,护甲只能通过伤害减少.',
						msshengjianc: '圣剑·3枚',
						msshengjianc_info: '锁定技,你无法成为延时锦囊牌和伤害类锦囊牌的目标,你一次性失去不少于两张牌时摸两倍的牌.当你进入濒死时,你令一名角色失去X点体力.(X为你已损失体力值的一半,向上取整)',
						msshengjiand: '圣剑·4枚',
						msshengjiand_info: '锁定技,你造成伤害时/体力值减少时令一名角色的一个锁定技失效直到你的下回合结束,若其有副将,你令其移除副将并弃置体力值张牌.',
						msshengjiane: '圣剑·5枚',
						msshengjiane_info: '锁定技,敌方角色发动技能后,你选择1项:1.令其失去此技能,2.终止一切结算,结束当前回合.若如此做,该角色无法使用或打出牌直到你的回合结束.',
						mszhongzhang: '终章',
						mszhongzhang_info: '觉醒技,当你死亡时,你减少一半的体力上限(向下取整,为0则改为增加记录点数/22点体力上限),失去所有<圣剑>标记并复活,修改【圣剑】为仅保留随机两项已激活的效果;【圣护】增加效果:每记录220点数,激活一个【圣剑】中未激活的效果.',
						mszhixu: '秩序',
						mszhixu_info: '转换技,锁定技.准备阶段开始时,阴:你回复X点体力并摸X-1张牌;阳:你增加X点体力上限并摸X-1张牌.你可以将一张:阳,红色牌;阴,黑色牌,当做无距离限制的基本牌使用或打出.(X此技能发动次数且至多为3)',
						mszhenhuan: '镇寰',
						mszhenhuan_info: '锁定技,一轮游戏开始时,你将所有其他角色的体力和体力上限调整至游戏开始时;你始终跳过判定阶段.',
						mszhangkong: '掌控',
						mszhangkong_info: '限定技,出牌阶段,你可以复制手牌中两张牌名不同的牌,你使用或打出以此法复制的牌后获得之,且你本回合无法再使用或打出此牌.你的复制牌不可被弃置、获得且视为🃏.',
						msshenen: '神恩',
						msshenen_info: '当你使用牌时, 你可选择一项:1.令此牌对其中一个目标造成的伤害+1;2.令任意名角色各摸一张牌;3.令任意名角色本回合不能使用或打出与此牌类型相同的牌;4.摸三张牌且【神恩】本回合失效.',
						mstongxie: '同谐',
						mstongxie_info: '转换技,锁定技.①准备阶段开始时,阴:你回复X点体力并摸X-1张牌;阳:你增加X点体力上限并摸X-1张牌.(X此技能发动次数且至多为4)②你可以将一张:阳,红色牌;阴,黑色牌,当做无距离限制的基本牌使用或打出,你的友方角色获得另一状态下的效果(若为身份场,改为令任意名角色获得另一状态下的效果).',
						msjiqun: '集群',
						msjiqun_info: '锁定技,一轮游戏开始时,你令所有友方角色(若为身份场,改为令任意名角色)回复全部体力;你始终跳过判定和弃牌阶段,并且可以将一张牌当作一张延时锦囊牌使用.',
						mstonghua: '同化',
						mstonghua_info: '限定技,出牌阶段,你可以复制手牌中的三张牌,你使用或打出以此法复制的牌后获得之,且你本回合无法再使用或打出此牌.你的复制牌不可被弃置、获得且视为🃏.',
						msxili: '洗礼',
						msxili_info: '当你使用牌时,你可选择一项:1.令此牌对任意个目标造成的伤害+1;2.令任意名角色各摸一张牌;3.令任意名角色本回合不能使用或打出与此牌类型相同的牌;4.摸四张牌且【洗礼】本回合失效.若你身份不为内奸,你令一名角色进入濒死后,将其变为你方阵营并回复所有体力,随机替换其武将牌.',
						msheiguan: '黑冠',
						msheiguan_info: '锁定技,游戏开始时你装备【文明的存续】.此牌无法被其他角色获得、弃置、移动.',
						mswmcx: '文明的存续',
						mswmcx_info: '锁定技,你使用的非伤害牌不可被响应.',
						msrenshan: '仁善',
						msrenshan_info: '锁定技,每回合开始时,你获得一张点数为6的牌,此牌视为不计入手牌上限的【桃】.你使用【桃】时摸一张牌.',
						msxiwang: '希望',
						msxiwang_info: '出牌阶段限三次,你可以与至多三名其他角色进行拼点.若你没赢,你与这些角色各回复2点体力并摸两张牌;否则你随机使用一张【五谷丰登】或【逐鹿天下】.',
						mschuancheng: '传承',
						mschuancheng_info: '主公技,锁定技,你进入濒死时,令一名角色获得【文明的存续】并失去【黑冠】,将其身份改为主公、你的身份改为忠臣,获得四张点数为6的牌并将体力调整至游戏开始时.',
						mszhumo: '诛魔',
						mszhumo_info: '锁定技,准备阶段,你摸X张牌;你对敌方角色造成伤害后令其失去X点体力.(X为你已损失的体力值)',
						msjianding: '剑定',
						msjianding_info: '锁定技,你于回合内使用的第一张伤害类牌不可被响应且造成伤害翻倍.',
						msfusheng: '复生',
						msfusheng_info: '锁定技,每局游戏限两次,你进入濒死时回复所有体力,防止你受到的伤害/体力流失直到下回合结束.',
						msshenzhao: '神诏',
						msshenzhao_info: '锁定技,你击杀一名角色后,防止你受到的所有非技能伤害和一次技能伤害直到下回合结束.受到过你造成的伤害的角色回复值-1.',
						msxiaoshi: '消逝',
						msxiaoshi_info: '锁定技,①一名角色死亡时,你增加1点体力上限并回复全部体力,获得其所有技能;若其有副将,你获得其副将一个技能并额外增加1点体力上限.②每局游戏限一次,你死亡前失去所有以此法获得的技能,取消之并回复体力至1点.',
						mskongwang: '空妄',
						mskongwang_info: '你使用、打出、弃置黑色牌时,记录其点数.结束阶段,若以此法记录的点数不少于72,全部清除并对一名角色造成体力上限点雷电伤害.',
						msshenjian: '神谶',
						msshenjian_info: '你使用、打出、弃置红色牌时,记录其点数.结束阶段,若以此法记录的点数不少于36,全部清除并对一名角色造成3点火焰伤害.',
						msxingzhi: '行至',
						msxingzhi_info: '年费技,锁定技,所有年费角色视为拥有技能【重生】.',
						mschongshen: '重生',
						mschongshen_info: '锁定技,限定技,你死亡时复活,回复所有体力并摸五张牌.',
						msduduan: '独断',
						msduduan_info: '锁定技,你造成的伤害改为雷电伤害;你使用伤害类牌时进行判定,若结果为装备牌,造成伤害+1;否则此牌不可被响应.',
						msquanwei: '权威',
						msquanwei_info: '一名角色受到伤害时,你摸一张牌.每回合限一次,你可以将一张牌当作一张多目标伤害类锦囊牌使用.',
						mszhubei: '铸碑',
						mszhubei_info: '莱势力技,锁定技,与你相同势力的角色摸牌阶段摸牌数+1、手牌上限+2、无法减少体力上限,回合内造成伤害/回复量+1.',
						msendian: '恩典',
						msendian_info: '锁定技,游戏开始时你将23张【联军盛宴】加入牌堆.一张【联军盛宴】对你结算完成后,你可选择一项:1.增加1点体力上限;2.失去1点体力并令一名角色获得1点护甲;3.令此牌对你额外结算一次;4.回复1点体力.',
						mswanxia: '晚霞',
						mswanxia_info: '莱势力技,锁定技,与你相同势力的角色获得护甲翻倍,有护甲时受到伤害至多为1.',
						msenci: '恩赐',
						msenci_info: '锁定技,准备阶段开始时,你视为使用一张【联军盛宴】.',
						msshouxi: '守玺',
						msshouxi_info: '锁定技,当你成为【杀】或伤害类锦囊牌的目标后,你须声明未声明过的一张非装备牌牌名,令使用者选择一项:1.此牌对你无效;2.弃置一张声明牌,令你摸两张牌并交给其一张牌.准备阶段,清除声明牌的记录.',
						mshuiming: '惠民',
						mshuiming_info: '结束阶段,你可以摸X张牌并展示等量手牌(X为手牌数小于体力值的角色数),从其中一名角色开始依次获得其中一张.一名角色因此获得牌后,若其手牌数等于体力上限,你摸一张牌.',
						mschiyu: '痴愚',
						mschiyu_info: '锁定技,你的技能不会失效,你的体力上限不会减少.每回合开始时或你受到伤害后,你随机调换主公外所有角色的座次;若为受到伤害触发,结束当前回合并执行一个你的额外回合.此回合开始时所有非【莱】势力角色本回合非锁定技失效.',
						msyongdun: '慵钝',
						msyongdun_info: '锁定技,你造成/受到伤害后令受伤角色/伤害来源获得X枚<慵钝>标记.非【莱】势力角色只能使用牌指定有<慵钝>标记的角色,拥有<慵钝>标记的角色回复体力时回复值-1并移去1枚标记,无法使用或打出牌,受到伤害时你摸X+1张牌、获得X+1点护甲并回复X+1点体力.你的回合开始时,令所有拥有<慵钝>标记的角色失去两倍体力上限的体力.你造成的伤害+X.(X为【莱】势力角色数)',
						mszhaozhi: '诏制',
						mszhaozhi_info: '锁定技,你首次死亡时复活并回复所有体力,获得以下效果:{若你没有护甲,防止受到的伤害;回合开始时所有非【莱】势力角色失去1点体力,你获得等量护甲;游戏轮次达到300时你获胜}.',
						mschenshi: '尘世',
						mschenshi_info: '莱势力技,锁定技,与你相同势力的角色与你相互造成伤害时改为体力流失,与你不同势力的角色对你造成伤害时,若为1防止之,否则改为1.与你相同势力的角色体力值或体力上限变化时,所有与你相同势力的角色摸一张牌.游戏开始时,与你势力相同的角色免疫体力值次直接死亡.',
						mschenai: '尘埃',
						mschenai_info: '锁定技,你受到/造成的伤害视为失去1点体力.当有角色使用,打出,弃置牌后或者体力值和体力上限发生变化后,你获得等量的<微尘>标记.当<微尘>标记数量大于或等于自身体力上限时你免疫直接死亡.一名角色的结束阶段,你移去一个<微尘>标记并执行一项:1.回复1点体力;2.摸四张花色各不相同的基本牌;3.增加1点体力上限.',
						msyinrao: '萦绕',
						msyinrao_info: '锁定技,当你进入濒死状态时,你移去1枚<微尘>标记,将体力值回复到1点并摸3张牌.当你的体力上限小于4时,移去等同于当前体力上限数量的<微尘>标记并将体力上限增加至4.',
						msmiaoyuan: '渺远',
						msmiaoyuan_info: '一名角色令你失去体力时,你移去1枚<微尘>标记进行一次判定,若判定结果为装备牌,你令其获得<束缚>状态[无法使用,打出,弃置任何牌]直到你的准备阶段开始,否则令至少一名角色回复1点体力或增加1点体力上限.',
						mschonggou: '重构',
						mschonggou_info: '锁定技,一轮游戏结束时,若你的<微尘>标记数不少于100,你移去100枚标记并均分所有角色的体力上限和体力值.',
						msgouzhu: '构筑',
						msgouzhu_info: '锁定技,游戏开始时你获得3点护甲;准备阶段开始时,若你体力值不为1,你失去1点体力并获得1点护甲,你的手牌上限+x(x为你的护甲数).',
						mshupo: '琥珀',
						mshupo_info: '锁定技,你受到1点伤害后,若你有护甲,你须选择1项:1.对伤害来源造成1点伤害并弃置其一张牌;2.回复1点体力并摸一张牌.若你有护甲,当你受到大于你护甲值的伤害时,减免至护甲值并摸等量的牌.',
						msjiejing: '结晶',
						msjiejing_info: '觉醒技,当你的护甲达到5或你的体力值为1时,你减少3点体力上限并获得【反震】,并修改【构筑】为{锁定技,游戏开始时你获得3点护甲;准备阶段开始时,你可以失去1点体力并获得2点护甲;你的手牌上限+x(x为你的护甲数).}',
						msfanzhen: '反震',
						msfanzhen_info: '当你受到1点伤害时,你获得1点护甲并令伤害来源失去1点体力,当你造成伤害时选择一项:1.摸X张牌;2.此伤害+X.(X为你的护甲值)',
						msjinmie: '烬灭',
						msjinmie_info: '锁定技,游戏开始时,你获得3枚<烬灭>标记,你造成受到1点伤害时获得1枚<烬灭>标记.当你使用非伤害非延时类锦囊时你须选择一项:1,弃置1枚<烬灭>标记; 2,失去1点体力.',
						msjielv: '戒律',
						msjielv_info: '锁定技,当你每失去点体力时,你摸x张牌并获得1点护甲[x为你的体力上限的一半向上取整].准备阶段开始时,你选择一名角色并选择一项令其执行:1,摸y张牌弃置1张牌; 2,摸1张牌弃置y张牌,若该角色执行选项2,则令其当回合所有非锁定技失效且你对其使用牌时无距离限制和无次数限制[y为你已损失的体力值].',
						mszhanyi: '战意',
						mszhanyi_info: '出牌阶段,你可以弃置1枚<烬灭>标记,令全场的防具失效并成为[杀]的目标时需要打出2张闪,弃置<烬灭>标记之后你可以将任意一张牌当做 [杀]或伤害类锦囊牌使用并造成的伤害+1.且可额外指定任意角色为目标.',
						msreji: '热寂',
						msreji_info: '出牌阶段限一次,你可以弃置7枚<烬灭>标记,对所有角色造成1点伤害,弃置其他角色的装备区里的所有牌并令其弃置七张手牌,若其手牌数小于你,其非锁定技失效.',
					},
				};
				lib.config.all.characters.add('星舟扩展');
				lib.config.characters.add('星舟扩展');
				lib.translate['星舟扩展_character_config'] = `星舟扩展`;
				return QQQ;
			});
			if (lib.config.extension_星舟扩展_武将全部可选) {
				Reflect.defineProperty(lib.filter, 'characterDisabled', {
					get: () =>
						function (i) {
							return !lib.character[i];
						},
					set() { },
				}); //取消禁将
				lib.filter.characterDisabled2 = function (i) {
					return !lib.character[i];
				}; //取消禁将
				get.gainableSkills = function (func, player) {
					var list = [];
					for (var i in lib.character) {
						for (var j = 0; j < lib.character[i][3].length; j++) {
							list.add(lib.character[i][3][j]);
						}
					}
					return list;
				}; //BOSS选将
				get.gainableSkillsName = function (name, func) {
					var list = [];
					if (name && lib.character[name]) {
						for (var j = 0; j < lib.character[name][3].length; j++) {
							list.add(lib.character[name][3][j]);
						}
					}
					return list;
				}; //BOSS选将
				Reflect.defineProperty(ui.create, 'characterDialog', {
					get: () =>
						function () {
							var filter, str, noclick, thisiscard, seperate, expandall, onlypack, heightset, precharacter, characterx;
							for (var i = 0; i < arguments.length; i++) {
								if (arguments[i] === 'thisiscard') {
									thisiscard = true;
								} else if (arguments[i] === 'expandall') {
									expandall = true;
								} else if (arguments[i] === 'heightset') {
									heightset = true;
								} else if (arguments[i] == 'precharacter') {
									precharacter = true;
								} else if (arguments[i] == 'characterx') {
									characterx = true;
								} else if (typeof arguments[i] == 'string' && arguments[i].startsWith('onlypack:')) {
									onlypack = arguments[i].slice(9);
								} else if (typeof arguments[i] == 'object' && typeof arguments[i].seperate == 'function') {
									seperate = arguments[i].seperate;
								} else if (typeof arguments[i] === 'string') {
									str = arguments[i];
								} else if (typeof arguments[i] === 'function') {
									filter = arguments[i];
								} else if (typeof arguments[i] == 'boolean') {
									noclick = arguments[i];
								}
							}
							var list = [];
							const groups = [];
							var dialog;
							var node = ui.create.div('.caption.pointerspan');
							if (get.is.phoneLayout()) {
								node.style.fontSize = '30px';
							}
							var namecapt = [];
							var getCapt = function (str) {
								var capt;
								if (str.indexOf('_') == -1) {
									capt = str[0];
								} else {
									capt = str[str.lastIndexOf('_') + 1];
								}
								capt = capt.toLowerCase();
								if (!/[a-z]/i.test(capt)) {
									capt = '自定义';
								}
								return capt;
							};
							if (thisiscard) {
								for (var i in lib.card) {
									if (!lib.translate[`${i}_info`]) continue;
									if (filter && filter(i)) continue;
									list.push(['', get.translation(lib.card[i].type), i]);
									if (namecapt.indexOf(getCapt(i)) == -1) {
										namecapt.push(getCapt(i));
									}
								}
							} else {
								var groupnum = {};
								for (var i in lib.character) {
									list.push(i);
									if (get.is.double(i)) {
										groups.add('double');
									} else {
										const Q = lib.character[i][1];
										if (!groupnum[Q]) groupnum[Q] = 0;
										groupnum[Q]++;
										if (groupnum[Q] > 20) {
											groups.add(lib.character[i][1]);
										} //删除多余势力
									}
									if (namecapt.indexOf(getCapt(i)) == -1) {
										namecapt.push(getCapt(i));
									}
								}
							}
							namecapt.sort(function (a, b) {
								return a > b ? 1 : -1;
							});
							groups.sort(lib.sort.group);
							if (!thisiscard) {
								namecapt.remove('自定义');
								namecapt.push('newline');
								for (var i in lib.characterDialogGroup) {
									namecapt.push(i);
								}
							}
							var newlined = false;
							var newlined2;
							var packsource;
							var clickCapt = function (e) {
								if (_status.dragged) return;
								if (dialog.currentcapt2 == '最近' && dialog.currentcaptnode2 != this && !dialog.currentcaptnode2.inited) {
									dialog.currentcapt2 = null;
									dialog.currentcaptnode2.classList.remove('thundertext');
									dialog.currentcaptnode2.inited = true;
									dialog.currentcaptnode2 = null;
								}
								if (this.alphabet) {
									if (this.classList.contains('thundertext')) {
										dialog.currentcapt = null;
										dialog.currentcaptnode = null;
										this.classList.remove('thundertext');
										if (this.touchlink) {
											this.touchlink.classList.remove('active');
										}
										for (var i = 0; i < dialog.buttons.length; i++) {
											if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
												dialog.buttons[i].classList.add('nodisplay');
											} else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
												dialog.buttons[i].classList.add('nodisplay');
											} else {
												dialog.buttons[i].classList.remove('nodisplay');
											}
										}
									} else {
										if (dialog.currentcaptnode) {
											dialog.currentcaptnode.classList.remove('thundertext');
											if (dialog.currentcaptnode.touchlink) {
												dialog.currentcaptnode.touchlink.classList.remove('active');
											}
										}
										dialog.currentcapt = this.link;
										dialog.currentcaptnode = this;
										this.classList.add('thundertext');
										if (this.touchlink) {
											this.touchlink.classList.add('active');
										}
										for (var i = 0; i < dialog.buttons.length; i++) {
											if (dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
												dialog.buttons[i].classList.add('nodisplay');
											} else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
												dialog.buttons[i].classList.add('nodisplay');
											} else if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
												dialog.buttons[i].classList.add('nodisplay');
											} else {
												dialog.buttons[i].classList.remove('nodisplay');
											}
										}
									}
								} else {
									if (newlined2) {
										newlined2.style.display = 'none';
										if (!packsource.onlypack) {
											packsource.classList.remove('thundertext');
											if (!get.is.phoneLayout() || !lib.config.filternode_button) {
												packsource.innerHTML = '武将包';
											}
										}
									}
									if (this.classList.contains('thundertext')) {
										dialog.currentcapt2 = null;
										dialog.currentcaptnode2 = null;
										this.classList.remove('thundertext');
										if (this.touchlink) {
											this.touchlink.classList.remove('active');
										}
										for (var i = 0; i < dialog.buttons.length; i++) {
											if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
												dialog.buttons[i].classList.add('nodisplay');
											} else if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
												dialog.buttons[i].classList.add('nodisplay');
											} else {
												dialog.buttons[i].classList.remove('nodisplay');
											}
										}
									} else {
										if (dialog.currentcaptnode2) {
											dialog.currentcaptnode2.classList.remove('thundertext');
											if (dialog.currentcaptnode2.touchlink) {
												dialog.currentcaptnode2.touchlink.classList.remove('active');
											}
										}
										dialog.currentcapt2 = this.link;
										dialog.currentcaptnode2 = this;
										this.classList.add('thundertext');
										if (this.touchlink) {
											this.touchlink.classList.add('active');
										} else if (this.parentNode == newlined2) {
											packsource.innerHTML = this.innerHTML;
											packsource.classList.add('thundertext');
										}
										for (var i = 0; i < dialog.buttons.length; i++) {
											if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
												dialog.buttons[i].classList.add('nodisplay');
											} else if (dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
												dialog.buttons[i].classList.add('nodisplay');
											} else if (dialog.currentgroup && dialog.buttons[i].group != dialog.currentgroup) {
												dialog.buttons[i].classList.add('nodisplay');
											} else {
												if (dialog.buttons[i].activate) {
													dialog.buttons[i].activate();
												}
												dialog.buttons[i].classList.remove('nodisplay');
											}
										}
									}
								}
								if (dialog.seperate) {
									for (var i = 0; i < dialog.seperate.length; i++) {
										if (!dialog.seperate[i].nextSibling.querySelector('.button:not(.nodisplay)')) {
											dialog.seperate[i].style.display = 'none';
											dialog.seperate[i].nextSibling.style.display = 'none';
										} else {
											dialog.seperate[i].style.display = '';
											dialog.seperate[i].nextSibling.style.display = '';
										}
									}
								}
								if (filternode) {
									if (filternode.querySelector('.active')) {
										packsource.classList.add('thundertext');
									} else {
										packsource.classList.remove('thundertext');
									}
								}
								if (e) e.stopPropagation();
							};
							for (var i = 0; i < namecapt.length; i++) {
								if (namecapt[i] == 'newline') {
									newlined = document.createElement('div');
									newlined.style.marginTop = '5px';
									newlined.style.display = 'block';
									if (get.is.phoneLayout()) {
										newlined.style.fontSize = '32px';
									} else {
										newlined.style.fontSize = '22px';
									}
									newlined.style.textAlign = 'center';
									node.appendChild(newlined);
								} else if (newlined) {
									var span = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius');
									span.style.margin = '3px';
									span.style.width = 'auto';
									span.innerHTML = ` ${namecapt[i].toUpperCase()} `;
									span.link = namecapt[i];
									span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
									newlined.appendChild(span);
									node[namecapt[i]] = span;
									if (namecapt[i] == '收藏') {
										span._nature = 'fire';
									} else {
										span._nature = 'wood';
									}
								} else {
									var span = document.createElement('span');
									span.innerHTML = ` ${namecapt[i].toUpperCase()} `;
									span.link = namecapt[i];
									span.alphabet = true;
									span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
									node.appendChild(span);
								}
							}
							if (!thisiscard) {
								var natures = ['water', 'soil', 'wood', 'metal'];
								var span = document.createElement('span');
								newlined.appendChild(span);
								span.style.margin = '8px';
								var clickGroup = function () {
									if (_status.dragged) return;
									if (dialog.currentcapt2 == '最近' && dialog.currentcaptnode2 != this && !dialog.currentcaptnode2.inited) {
										dialog.currentcapt2 = null;
										dialog.currentcaptnode2.classList.remove('thundertext');
										dialog.currentcaptnode2.inited = true;
										dialog.currentcaptnode2 = null;
									}
									var node = this,
										link = this.link;
									if (node.classList.contains('thundertext')) {
										dialog.currentgroup = null;
										dialog.currentgroupnode = null;
										node.classList.remove('thundertext');
										for (var i = 0; i < dialog.buttons.length; i++) {
											if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
												dialog.buttons[i].classList.add('nodisplay');
											} else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
												dialog.buttons[i].classList.add('nodisplay');
											} else {
												dialog.buttons[i].classList.remove('nodisplay');
											}
										}
									} else {
										if (dialog.currentgroupnode) {
											dialog.currentgroupnode.classList.remove('thundertext');
										}
										dialog.currentgroup = link;
										dialog.currentgroupnode = node;
										node.classList.add('thundertext');
										for (var i = 0; i < dialog.buttons.length; i++) {
											if (dialog.currentcapt && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt)) {
												dialog.buttons[i].classList.add('nodisplay');
											} else if (dialog.currentcapt2 && dialog.buttons[i].capt != dialog.getCurrentCapt(dialog.buttons[i].link, dialog.buttons[i].capt, true)) {
												dialog.buttons[i].classList.add('nodisplay');
											} else if (dialog.currentgroup == 'double') {
												if (dialog.buttons[i]._changeGroup) dialog.buttons[i].classList.remove('nodisplay');
												else dialog.buttons[i].classList.add('nodisplay');
											} else if (dialog.currentgroup == 'ye') {
												if (dialog.buttons[i].group == 'ye') dialog.buttons[i].classList.remove('nodisplay');
												else dialog.buttons[i].classList.add('nodisplay');
											} else {
												if (dialog.buttons[i]._changeGroup || dialog.buttons[i].group != dialog.currentgroup) {
													dialog.buttons[i].classList.add('nodisplay');
												} else {
													dialog.buttons[i].classList.remove('nodisplay');
												}
											}
										}
									}
								};
								for (var i = 0; i < groups.length; i++) {
									var span = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
									span.style.margin = '3px';
									newlined.appendChild(span);
									span.innerHTML = get.translation(groups[i]);
									span.link = groups[i];
									span._nature = natures[i];
									span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickGroup);
								}
								var span = document.createElement('span');
								newlined.appendChild(span);
								span.style.margin = '8px';
								packsource = ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
								packsource.style.margin = '3px';
								newlined.appendChild(packsource);
								var filternode = null;
								var clickCaptNode = function (e) {
									delete _status.filterCharacter;
									ui.window.classList.remove('shortcutpaused');
									filternode.delete();
									filternode.classList.remove('shown');
									clickCapt.call(this.link, e);
								};
								if (get.is.phoneLayout() && lib.config.filternode_button) {
									newlined.style.marginTop = '';
									packsource.innerHTML = '筛选';
									filternode = ui.create.div('.popup-container.filter-character.modenopause');
									ui.create.div(filternode);
									filternode.listen(function (e) {
										if (this.classList.contains('removing')) return;
										delete _status.filterCharacter;
										ui.window.classList.remove('shortcutpaused');
										this.delete();
										this.classList.remove('shown');
										e.stopPropagation();
									});
									for (var i = 0; i < node.childElementCount; i++) {
										if (node.childNodes[i].tagName.toLowerCase() == 'span') {
											node.childNodes[i].style.display = 'none';
											node.childNodes[i].touchlink = ui.create.div(filternode.firstChild, clickCaptNode, '.menubutton.large.capt', node.childNodes[i].innerHTML);
											node.childNodes[i].touchlink.link = node.childNodes[i];
										}
									}
									ui.create.node('br', filternode.firstChild);
								} else {
									if (onlypack) {
										packsource.onlypack = true;
										packsource.innerHTML = get.translation(onlypack + '_character_config');
										packsource.style.display = 'none';
										packsource.previousSibling.style.display = 'none';
									} else {
										packsource.innerHTML = '武将包';
									}
								}
								newlined2 = document.createElement('div');
								newlined2.style.marginTop = '5px';
								newlined2.style.display = 'none';
								newlined2.style.fontFamily = 'xinwei';
								newlined2.classList.add('pointernode');
								if (get.is.phoneLayout()) {
									newlined2.style.fontSize = '32px';
								} else {
									newlined2.style.fontSize = '22px';
								}
								newlined2.style.textAlign = 'center';
								node.appendChild(newlined2);
								packsource.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
									if (packsource.onlypack) return;
									if (_status.dragged) return;
									if (get.is.phoneLayout() && lib.config.filternode_button && filternode) {
										_status.filterCharacter = true;
										ui.window.classList.add('shortcutpaused');
										ui.window.appendChild(filternode);
										ui.refresh(filternode);
										filternode.classList.add('shown');
										var dh = filternode.offsetHeight - filternode.firstChild.offsetHeight;
										if (dh > 0) {
											filternode.firstChild.style.top = dh / 2 + 'px';
										} else {
											filternode.firstChild.style.top = '';
										}
									} else {
										if (newlined2.style.display == 'none') {
											newlined2.style.display = 'block';
										} else {
											newlined2.style.display = 'none';
										}
									}
								});
								var packlist = [];
								for (var i = 0; i < lib.config.all.characters.length; i++) {
									if (!lib.config.characters.includes(lib.config.all.characters[i])) continue;
									packlist.push(lib.config.all.characters[i]);
								}
								for (var i in lib.characterPack) {
									if (lib.config.characters.includes(i) && !lib.config.all.characters.includes(i)) {
										packlist.push(i);
									}
								}
								for (var i = 0; i < packlist.length; i++) {
									var span = document.createElement('div');
									span.style.display = 'inline-block';
									span.style.width = 'auto';
									span.style.margin = '5px';
									if (get.is.phoneLayout()) {
										span.style.fontSize = '32px';
									} else {
										span.style.fontSize = '22px';
									}
									span.innerHTML = lib.translate[packlist[i] + '_character_config'];
									span.link = packlist[i];
									span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
									newlined2.appendChild(span);
									if (filternode && !onlypack) {
										span.touchlink = ui.create.div(filternode.firstChild, clickCaptNode, '.menubutton.large', span.innerHTML);
										span.touchlink.link = span;
									}
								}
							}
							var groupSort;
							if (thisiscard) {
								groupSort = function (name) {
									var type = lib.card[name[2]].type;
									if (lib.cardType[type]) {
										return lib.cardType[type];
									}
									switch (type) {
										case 'basic':
											return 0;
										case 'chess':
											return 1.5;
										case 'trick':
											return 2;
										case 'delay':
											return 3;
										case 'equip':
											return 4;
										case 'zhenfa':
											return 5;
										default:
											return 6;
									}
								};
								list.sort(function (a, b) {
									var del = groupSort(a) - groupSort(b);
									if (del != 0) return del;
									var aa = a,
										bb = b;
									if (a.includes('_')) {
										a = a.slice(a.lastIndexOf('_') + 1);
									}
									if (b.includes('_')) {
										b = b.slice(b.lastIndexOf('_') + 1);
									}
									if (a != b) {
										return a > b ? 1 : -1;
									}
									return aa > bb ? 1 : -1;
								});
							} else {
								list.sort(lib.sort.character);
							}
							dialog = ui.create.dialog('hidden');
							dialog.classList.add('noupdate');
							dialog.classList.add('scroll1');
							dialog.classList.add('scroll2');
							dialog.classList.add('scroll3');
							dialog.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
								_status.clicked2 = true;
							});
							if (heightset) {
								dialog.style.height = (game.layout == 'long2' || game.layout == 'nova' ? 380 : 350) + 'px';
								dialog._scrollset = true;
							}
							dialog.getCurrentCapt = function (link, capt, noalph) {
								var currentcapt = noalph ? this.currentcapt2 : this.currentcapt;
								if (this.seperatelist && noalph) {
									if (this.seperatelist[currentcapt].includes(link)) return capt;
									return null;
								}
								if (lib.characterDialogGroup[currentcapt]) {
									return lib.characterDialogGroup[currentcapt](link, capt);
								}
								if (lib.characterPack[currentcapt]) {
									if (lib.characterPack[currentcapt][link]) {
										return capt;
									}
									return null;
								}
								return this.currentcapt;
							};
							if (str) {
								dialog.add(str);
							}
							dialog.add(node);
							if (thisiscard) {
								if (seperate) {
									seperate = seperate(list);
									dialog.seperate = [];
									dialog.seperatelist = seperate.list;
									if (dialog.seperatelist) {
										newlined = document.createElement('div');
										newlined.style.marginTop = '5px';
										newlined.style.display = 'block';
										newlined.style.fontFamily = 'xinwei';
										if (get.is.phoneLayout()) {
											newlined.style.fontSize = '32px';
										} else {
											newlined.style.fontSize = '22px';
										}
										newlined.style.textAlign = 'center';
										node.appendChild(newlined);
										for (var i in dialog.seperatelist) {
											var span = document.createElement('span');
											span.style.margin = '3px';
											span.innerHTML = i;
											span.link = i;
											span.seperate = true;
											span.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', clickCapt);
											newlined.appendChild(span);
										}
									}
									for (var i in seperate) {
										if (i == 'list') continue;
										var link = '';
										var linkcontent = seperate[i];
										if (i.includes('_link:')) {
											link = i.slice(i.indexOf('_link:') + 6);
											i = i.slice(0, i.indexOf('_link:'));
										}
										var nodesep = dialog.add(i);
										nodesep.link = link;
										dialog.seperate.push(nodesep);
										dialog.add([linkcontent, 'vcard'], noclick);
									}
								} else {
									dialog.add([list, 'vcard'], noclick);
								}
							} else {
								if (precharacter) {
									dialog.add([list, 'precharacter'], noclick);
								} else if (characterx) {
									dialog.add([list, 'characterx'], noclick);
								} else {
									dialog.add([list, 'character'], noclick);
								}
							}
							dialog.add(ui.create.div('.placeholder'));
							for (var i = 0; i < dialog.buttons.length; i++) {
								if (thisiscard) {
									dialog.buttons[i].capt = getCapt(dialog.buttons[i].link[2]);
								} else {
									dialog.buttons[i].group = lib.character[dialog.buttons[i].link][1];
									dialog.buttons[i].capt = getCapt(dialog.buttons[i].link);
								}
							}
							if (!expandall) {
								if (!thisiscard && (lib.characterDialogGroup[lib.config.character_dialog_tool] || lib.config.character_dialog_tool == '自创')) {
									clickCapt.call(node[lib.config.character_dialog_tool]);
								}
							}
							//仅仅下面是新加的,by Curpond
							let container = dialog.querySelector('.content-container>.content');
							let Searcher = ui.create.div('.searcher.caption');
							let input = document.createElement('input');
							input.style.textAlign = 'center';
							input.style.border = 'solid 2px #294510';
							input.style.borderRadius = '6px';
							input.style.fontWeight = 'bold';
							input.style.fontSize = '21px';
							let find = ui.create.button(['find', '搜索'], 'tdnodes');
							find.style.display = 'inline';
							let clickfind = function (e) {
								e.stopPropagation();
								let value = input.value;
								if (value == '') {
									game.alert('搜索不能为空');
									input.focus();
									return;
								}
								let list = [];
								for (let btn of dialog.buttons) {
									if (new RegExp(value, 'g').test(get.translation(btn.link))) {
										btn.classList.remove('nodisplay');
									} else {
										btn.classList.add('nodisplay');
									}
								}
							};
							input.addEventListener('keyup', (e) => {
								if (e.key == 'Enter') clickfind(e);
							});
							find.listen(clickfind);
							Searcher.appendChild(input);
							Searcher.appendChild(find);
							container.prepend(Searcher);
							return dialog;
						},
					set() { },
				}); //选将列表修改
			} //武将全部可选
		},
		config: {
			武将全部可选: {
				name: '<span class="Qmenu">武将全部可选</span>',
				intro: '开启后,任何禁将、隐藏武将、BOSS武将都会变得可选,你甚至可以在BOSS模式用BOSS自己打自己',
				init: true,
			},
		},
		package: {
			card: {
				card: {
					mswmcx: {
						fullskin: true,
						image: 'ext:星舟扩展/image/mswmcxex.jpg',
						type: 'equip',
						subtype: 'equip5',
						equipDelay: false,
						loseDelay: false,
						ai: {
							basic: {
								equipValue: 4,
							},
						},
						enable: true,
						selectTarget: -1,
						filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
						modTarget: true,
						allowMultiple: false,
						content() {
							if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
						},
						toself: true,
						skills: ['mswmcx'],
					},
				},
				translate: {
					mswmcx: '文明的存续',
					mswmcx_info: '锁定技,你使用的非伤害牌不可被响应.',
				},
			},
			intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>",
			author: '月雪',
			version: '1.0',
		},
	};
});

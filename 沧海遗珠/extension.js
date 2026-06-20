import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '沧海遗珠',
		content(config, pack) { },
		precontent() {
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
			//--------------谋离间函数
			lib.element.player.ybdc_sblijian = function (list) {
				game.countPlayer(function (current) {
					//计算游戏中的每个玩家
					if (list.includes(current)) {
						var targetx = list.slice().sortBySeat(current)[1];
						var card = {
							name: 'juedou',
						};
						if (current.canUse(card, targetx)) current.useCard(card, targetx);
					}
				});
			};
			//--------------制衡函数
			lib.element.player.ybyhy_zhiheng = function (list) {
				this.discard(list);
				this.draw(list.length);
			};
			//-------------获取其已发动限定技的数量
			get.ybbmh_chizhang = function (player) {
				var list = [];
				var skills = player.getOriginalSkills();
				for (var i = 0; i < skills.length; i++) {
					if (lib.skill[skills[i]].limited && player.awakenedSkills.includes(skills[i])) {
						list.push(skills[i]);
					}
				}
				return list;
			};
			lib.skill._yb_phaseNumber = {
				forced: true,
				charlotte: true,
				trigger: {
					player: 'phaseUseBegin',
				},
				content() {
					player.addMark('_yb_phaseNumber', 1, false);
				},
				firstDo: true,
			};
			lib.translate._yb_phaseNumber = '出牌阶段计数';
			/*****************↓此函数为夜白搬运自本人扩展,请勿更改!*****************/
			/*****************↓此函数为夜白搬运自本人扩展,请勿更改!*****************/
			/*****************↓此函数为夜白搬运自本人扩展,请勿更改!*****************/
			get.YB_suit = function (cards, i) {
				let atk = get[i] || get.suit;
				var list2 = [];
				for (var k of cards) {
					if (list2.length == 0 || !list2.includes(atk(k))) list2.add(atk(k));
				}
				return list2;
			};
			//-------------将手牌数调整至num,num不能不写
			lib.element.player.YB_changeHandCard = function (num) {
				'step 0';
				var num22 = this.countCards('h');
				if (num22 > num) {
					this.chooseToDiscard('h', num22 - num, true);
				} else if (num22 < num) {
					this.draw(num - num22);
				}
			};
			lib.element.player.YB_temp = function (skill, num) {
				var num = num || 1;
				if (!lib.skill[skill]) lib.skill[skill] = { onremove: true, charlotte: true };
				this.addTempSkill(skill);
				this.addMark(skill);
			};
			//极其方便的扶汉函数在此
			lib.element.player.YB_fuhan = function (i, type) {
				var next = game.createEvent('YB_fuhan', false);
				next.player = this;
				if (i != 'old' && i != 'tw') {
					next.groupa = i[0];
					next.numa = i[1];
					next.numb = i[2];
					next.band = i[3];
					next.sex = i[4];
					next.zhu = i[5];
					next.banb = type;
				} else {
					next.banb = i;
				}
				next.setContent('YB_fuhan');
				return next;
			};
			lib.element.content.YB_fuhan = function () {
				'step 0';
				if (!event.numa) {
					event.numa = 5;
				}
				if (!event.band) {
					event.band = [];
				}
				if (event.groupa == 'all') {
					delete event.groupa;
				}
				if (!event.zhu) {
					event.zhu == '';
				}
				if (!event.sex || event.sex.length == 0 || event.sex == 'all') {
					event.sex = ['female', 'male', 'double', 'none'];
				}
				if (event.banb == 'old') {
					event.goto(3);
				}
				if (event.banb == 'tw') {
					event.goto(5);
				}
				('step 1');
				var list;
				if (!event.numb) {
					event.numb = 2;
				}
				if (_status.characterlist) {
					list = [];
					for (var i = 0; i < _status.characterlist.length; i++) {
						var name = _status.characterlist[i];
						if (event.sex.includes(lib.character[name][0])) {
							if (!event.groupa) {
								list.push(name);
							} else if (event.groupa.includes(lib.character[name][1])) {
								list.push(name);
							} //groupa应用
						}
					}
				} else if (_status.connectMode) {
					list = get.charactersOL(function (i) {
						return event.groupa.includes(lib.character[i][1]) && event.sex.includes(lib.character[i][0]);
					});
				} else {
					list = get.gainableCharacters(function (info) {
						return event.groupa.includes(info[1]) && event.sex.includes(info[0]);
					});
				}
				var players = game.players.concat(game.dead);
				for (var i = 0; i < players.length; i++) {
					list.remove(players[i].name);
					list.remove(players[i].name1);
					list.remove(players[i].name2);
				}
				if (event.zhu == 'zhu') {
					for (var z of list) {
						if (!lib.character[z][4] || !lib.character[z][4].includes('zhu')) event.band.add(z);
					}
				} else if (event.zhu == 'nozhu') {
					for (var z of list) {
						if (lib.character[z][4] && lib.character[z][4].includes('zhu')) event.band.add(z);
					}
				}
				if (event.band.length > 0) {
					for (var j of event.band) {
						if (list.includes(j)) list.remove(j); //应用数据band
					}
				}
				list = list.randomGets(event.numa); //应用数据numa
				var skills = [];
				for (var i of list) {
					skills.addArray(
						(lib.character[i][3] || []).filter(function (skill) {
							var info = get.info(skill);
							return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
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
						skills: skills.randomGets(2),
					};
					if (event.dialog) event.dialog.close();
					if (event.control) event.control.close();
				};
				var tara = get.cnNumber(event.numb); //翻译大写数字
				var chooseButton = function (list, skills) {
					var event = _status.event;
					if (!event._result) event._result = {};
					event._result.skills = [];
					var rSkill = event._result.skills;
					var dialog = ui.create.dialog('请选择获得至多' + tara + '个技能', [list, 'character'], 'hidden');
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
								if (rSkill.length >= event.numb) return;
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
				('step 2');
				var map = event.result || result;
				if (map && map.skills && map.skills.length) {
					for (var i of map.skills) player.addSkillLog(i);
				}
				event.finish();
				('step 3');
				event.num = event.numa;
				var list;
				if (!event.numb) {
					event.numb = player.name1 || player.name;
				}
				if (_status.characterlist) {
					list = [];
					for (var i = 0; i < _status.characterlist.length; i++) {
						var name = _status.characterlist[i];
						if (event.sex.includes(lib.character[name][0])) {
							if (!event.groupa) {
								list.push(name);
							} else if (event.groupa.includes(lib.character[name][1])) {
								list.push(name);
							} //groupa应用
						}
					}
				} else if (_status.connectMode) {
					list = get.charactersOL(function (i) {
						return event.groupa.includes(lib.character[i][1]) && event.sex.includes(lib.character[i][0]);
					});
				} else {
					list = get.gainableCharacters(function (info) {
						return event.groupa.includes(info[1]) && event.sex.includes(info[0]);
					});
				}
				var players = game.players.concat(game.dead);
				for (var i = 0; i < players.length; i++) {
					list.remove(players[i].name);
					list.remove(players[i].name1);
					list.remove(players[i].name2);
				}
				if (event.band.length > 0) {
					for (var j of event.band) {
						if (list.includes(j)) list.remove(j); //应用数据band
					}
				}
				if (event.zhu == 'zhu') {
					for (var z of list) {
						if (!lib.character[z][4] || !lib.character[z][4].includes('zhu')) event.band.add(z);
					}
				} else if (event.zhu == 'nozhu') {
					for (var z of list) {
						if (lib.character[z][4] && lib.character[z][4].includes('zhu')) event.band.add(z);
					}
				}
				// var dialog=ui.create.dialog();
				// dialog.add([list.randomGets(5),'character']);
				var kkk = get.translation(event.numb);
				player
					.chooseButton(true)
					.set('ai', function (button) {
						return get.rank(button.link, true) - lib.character[button.link][2];
					})
					.set('createDialog', ['将' + kkk + '替换为一名角色', [list.randomGets(event.num), 'character']]);
				('step 4');
				// event.name=event.numb;
				player.reinit(event.numb, result.links[0], false);
				if (_status.characterlist) {
					_status.characterlist.add(event.numb);
					_status.characterlist.remove(result.links[0]);
				}
				event.finish();
				('step 5');
				event.num = event.numa;
				if (_status.characterlist) {
					list = [];
					for (var i = 0; i < _status.characterlist.length; i++) {
						var name = _status.characterlist[i];
						if (event.sex.includes(lib.character[name][0])) {
							if (!event.groupa) {
								list.push(name);
							} else if (event.groupa.includes(lib.character[name][1])) {
								list.push(name);
							} //groupa应用
						}
					}
				} else if (_status.connectMode) {
					list = get.charactersOL(function (i) {
						return event.groupa.includes(lib.character[i][1]) && event.sex.includes(lib.character[i][0]);
					});
				} else {
					list = get.gainableCharacters(function (info) {
						return event.groupa.includes(info[1]) && event.sex.includes(info[0]);
					});
				}
				var players = game.players.concat(game.dead);
				for (var i = 0; i < players.length; i++) {
					list.remove(players[i].name);
					list.remove(players[i].name1);
					list.remove(players[i].name2);
				}
				if (event.band.length > 0) {
					for (var j of event.band) {
						if (list.includes(j)) list.remove(j); //应用数据band
					}
				}
				if (event.zhu == 'zhu') {
					for (var z of list) {
						if (!lib.character[z][4] || !lib.character[z][4].includes('zhu')) event.band.add(z);
					}
				} else if (event.zhu == 'nozhu') {
					for (var z of list) {
						if (lib.character[z][4] && lib.character[z][4].includes('zhu')) event.band.add(z);
					}
				}
				var ttt = get.translation(event.numb);
				player.chooseButton([ttt + ':选择获得一张武将牌上的所有技能', [list.randomGets(event.num), 'character']], true);
				('step 6');
				if (result.bool) {
					var name = result.links[0];
					player.flashAvatar(event.numb, name);
					game.log(player, '获得了', '#y' + get.translation(name), '的所有技能');
					player.addSkill(lib.character[name][3]);
				}
			};
			/*****************↑此函数为夜白搬运自本人扩展,请勿更改!*****************/
			/*****************↑此函数为夜白搬运自本人扩展,请勿更改!*****************/
			/*****************↑此函数为夜白搬运自本人扩展,请勿更改!*****************/
			//将包文件在这↓
			lib.init.js(`extension/沧海遗珠/ext`, 'No1_chyz');
			lib.init.css(`extension/沧海遗珠/css`, 'chyz_css');
			//将包文件在这↑
			//此处收纳前缀
			{
				lib.namePrefix.set('绘', {
					showName: '绘',
					color: '#007f47',
					nature: 'chyz_fsjh',
				});
			}
			if (!lib.qhlypkg) {
				lib.qhlypkg = [];
			}
			lib.qhlypkg.push({
				isExt: true, //是否是扩展,一般填true
				filterCharacter(name) {
					for (var i of ['yb_', 'ybxx', 'ybh_', 'QQQ_']) {
						if (name.indexOf(i) == 0) return true;
					}
					//判断此ID的武将是否属于此皮肤包.推荐用前缀判断.
					//在这里不判断直接返回true是很没有武德的行为,可能覆盖别人的扩展配置.
				},
				prefix: 'extension/沧海遗珠/', //原皮前缀,标识原皮肤的位置.
				skin: {
					standard: 'extension/沧海遗珠/skin/standard/', //可切换普通皮肤的前缀
				},
				// audioOrigin:'extension/沧海遗珠/audio/character/',//原技能配音位置
				// audio:'extension/沧海遗珠/skin/audio/',//切换皮肤后的技能配音位置
			});
		},
		package: {
			intro: '<p style="color: rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black;">扩展发起:戏中好气<br>技能设计:戏中好气<br>代码撰写:<夜白>\<潜水的火></p><br><span style=\'color: gold\'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>',
			author: '戏中好气',
			version: '1.1.1.1',
		},
	};
});

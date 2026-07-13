import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	//wanbi
	return {
		name: '划水池',
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
			if (pack.changeLog) game.showExtensionChangeLog(pack.changeLog);
			//普通
			lib.rank.rarity.junk.addArray([]);
			//精品
			lib.rank.rarity.rare.addArray(['hs_zhugedan', 'gentle_huashui', 'air_huashui', 'stub_huashui', 'memory_huashui']);
			//史诗
			lib.rank.rarity.epic.addArray(['hs_zhaoyun', 'hs_xiahoudun', 'hs_liubiao', 'hs_caopi', 'hs_yanwen', 'hs_luxun', 'hs_huangzhong', 'hs_caochong', 'hs_fazheng', 'hs_caoren', 'hs_huatuo', 'hs_xujing', 'hs_lvmeng', 'hs_weiyan', 'hs_yangyi', 'hs_sunquan', 'hs_zhouqun', 'hs_dengai', 'hs_xusheng', 'hs_wangyuanji', 'hs_pangtong', 'hs_sunluban', 'hs_xushu', 'hs_gaoshun', 'hs_jiachong', 'hs_guanyu', 'hs_sunxiu', 'hs_luotong', 'hs_zhangjiao', 'hs_zhangbao', 'hs_zhangliang', 'hs_dongzhuo', 'hs_heqi', 'hs_liuzan', 'hs_haozhao', 'hs_zhangqiying', 'hs_xizhicai', 'hs_duyu', 'hs_liuqi', 'hs_yanghu', 'hs_zhugeliang', 'hs_quyi', 'hs_wangcan', 'hs_zhanghe', 'hs_lvdai', 'hs_lingtong', 'hs_masu', 'hs_zixu', 'hs_fuxuan', 'hs_yuanshao', 'hs_simazhao']);
			//传说
			lib.rank.rarity.legend.addArray(['hs_zhonghui', 'hs_jiaxu', 'hs_caorui', 'hs_yujin', 'hs_zuoci', 'hs_wanglang', 'hs_caocao', 'hs_liubei', 'hs_xunyou', 'hs_maliang', 'hs_zhangling']);
			//prefix
			for (var i in lib.characterPack.huashui) {
				if (i.startsWith('hs_')) lib.translate[i + '_prefix'] = '∭';
				else lib.translate[i + '_prefix'] = '划水∭';
			}
			lib.namePrefix.set('∭', {
				getSpan() {
					const span = document.createElement('span');
					span.style.fontFamily = 'NonameSuits';
					span.textContent = '🌊';
					return span.outerHTML;
				},
			});
			lib.namePrefix.set('划水∭', {
				getSpan() {
					const span = document.createElement('span');
					span.style.fontFamily = 'NonameSuits';
					span.textContent = '🌊';
					return span.outerHTML;
				},
			});
			//JieMark&&隐匿
			lib.element.player.hs_removeJieMark = function () {
				if (this.$jieMark) {
					this.$jieMark.remove();
					this.$jieMark.undefined;
				}
			};
			lib.element.player.hs_setJieMark = function (character) {
				if (lib.config.extension_划水池_jieMark && lib.config.extension_划水池_jieMark != 'hide') {
					this.update();
				}
			};
			//mark
			lib.element.content.hs_addMark = function () {
				'step 0';
				event.trigger('hs_addMark');
				('step 1');
				event.trigger('addMark');
			};
			lib.element.player.hs_addMark = function (i, num, log) {
				'step 0';
				if (!num) num = 1;
				if (!this.storage[i]) this.storage[i] = num;
				else this.storage[i] += num;
				if (log !== false) {
					var str,
						info = get.info(i);
					if (info && info.intro && (info.intro.name || info.intro.name2)) str = info.intro.name2 || info.intro.name;
					else str = lib.translate[i];
					if (str) game.log(this, '获得了', get.cnNumber(num), '个', '#g【' + str + '】');
				}
				this.markSkill(i);
				var next = game.createEvent('hs_addMark');
				next.player = this;
				next.num = num;
				next.markname = i;
				next.log = log;
				next.setContent('hs_addMark');
			};
			//recover
			lib.element.content.hs_recoverTo = function () {
				'step 0';
				player.recover(event.num2, event.args);
				('step 1');
				player.hp = event.num;
				player.update();
			};
			lib.element.player.hs_recoverTo = function (num, args) {
				if (num > this.maxHp) num = this.maxHp;
				if (!args) args = '';
				var num2 = num - this.hp;
				if (!num2 || num2 <= 0) return 0;
				else {
					var next = game.createEvent('hs_recoverTo');
					next.player = this;
					next.num = num;
					next.num2 = num2;
					next.args = args;
					next.setContent('hs_recoverTo');
					return num2;
				}
			};
			//changeMaxHp
			lib.element.player.hs_changeMaxHpTo = function (num) {
				var num0 = num - this.maxHp;
				if (num0 > 0) this.gainMaxHp(num0);
				else if (num0 < 0) this.loseMaxHp(-num0);
				return num0;
			};
			//draw
			lib.element.player.hs_changeHandCardTo = function (num) {
				var num0 = player.countCards('h');
				if (num0 < num) player.drawTo(num);
				else if (num0 > num) player.chooseToDiscard(true, num0 - num, '请将手牌弃置至' + get.cnNumber(num) + '张');
			};
			//skill
			lib.element.player.hs_getSkills = function (zhuSkill, tempSkill, equipSkill, special) {
				var list = this.getSkills(false, false),
					list1 = [];
				for (var i of list) {
					var info = get.info(i);
					if (i == 'jiu') continue;
					if (!info) continue;
					if (zhuSkill) {
						if (info.zhuSkill && !this.hasZhuSkill(i)) continue;
					} else if (info.zhuSkill) continue;
					if (!tempSkill && info.temp) continue;
					if (!equipSkill && info.equipSkill) continue;
					if (special === false) {
						if (info.juexingji) continue;
						if (info.hiddenSkill) continue;
						if (info.zhuSkill) continue;
						if (info.charlotte) continue;
						if (info.limited) continue;
						if (info.dutySkill) continue;
					} else if (typeof special == 'string') {
						if (!info[special]) continue;
					}
					if (get.translation(`${i}_info`) != `${i}_info`) list1.add(i);
				}
				if (!tempSkill) {
					for (var j in this.tempSkills) list1.removeArray(j);
				}
				return list1;
			};
			lib.element.content.hs_removeSkill = function () {
				'step 0';
				var skill = event.skills.shift(),
					info = lib.skill[skill];
				player.unmarkSkill(skill);
				game.broadcastAll(
					function (player, skill) {
						player.skills.remove(skill);
						player.hiddenSkills.remove(skill);
						delete player.tempSkills[skill];
						for (var i in player.additionalSkills) {
							player.additionalSkills[i].remove(skill);
						}
					},
					player,
					skill
				);
				player.checkConflict(skill);
				if (info) {
					if (info.onremove) {
						if (typeof info.onremove == 'function') info.onremove(player, skill);
						else if (Array.isArray(info.onremove)) {
							for (var i = 0; i < info.onremove.length; i++) delete player.storage[info.onremove[i]];
						}
					}
					var cards = player.storage[skill];
					if (get.itemtype(cards) == 'card') cards = [cards];
					if (get.itemtype(cards) == 'cards') {
						if (player.onremove == 'discard') player.$throw(cards);
						if (player.onremove == 'discard' || player.onremove == 'lose') game.cardsDiscard(cards);
					}
					delete player.storage[skill];
					player.removeSkillTrigger(skill);
					if (!info.keepSkill) player.removeAdditionalSkill(skill);
				}
				player.enableSkill(skill + '_awake');
				if (player.node.gainSkill && player.node.gainSkill.skills && player.node.gainSkill.skills.includes(skill)) {
					player.node.gainSkill.lose(skill);
				}
				('step 1');
				if (event.skills.length) event.goto(0);
				else event.trigger('removeSkill');
			};
			lib.element.player.hs_removeSkill = function (skills) {
				if (!skills) return;
				if (typeof skills == 'string') skills = [skills];
				if (!Array.isArray(skills)) return;
				if (!skills.length) return;
				var next = game.createEvent('hs_removeSkill');
				next.setContent('hs_removeSkill');
				next.player = this;
				next.skills = skills;
				return next;
			};
			lib.element.player.hs_removeSkillLog = function (skill, popup) {
				if (!skill) return this;
				this.hs_removeSkill(skill);
				if (!Array.isArray(skill)) skill = [skill];
				game.log(
					this,
					'失去了技能',
					...skill.map((i) => {
						if (popup === true) this.popup(i);
						return '#g【' + get.translation(i) + '】';
					})
				);
			};
			lib.element.player.hs_clearSkills = function () {
				for (var i in this.additionalSkills) this.removeAdditionalSkill(i);
				this.hs_removeSkill(this.skills);
				this.checkConflict();
				this.checkMarks();
			};
			lib.element.player.hs_setSkillAudio = function (skills, audioName) {
				if (typeof skills == 'string') skills = [skills];
				var list = [];
				for (var skill of skills) {
					var info = lib.skill[skill];
					if (info) {
						list.add(skill);
						if (info.group) {
							if (typeof info.group == 'string') list.add(info.group);
							else if (Array.isArray(info.group)) list.addArray(info.group);
						}
					}
					game.expandSkills(list);
					for (var i of list) {
						if (!lib.skill[i]) {
							alert(i + '不存在值');
							lib.skill[i] = {};
						}
						if (!lib.skill[i].audioname2) lib.skill[i].audioname2 = {};
						var audio = audioName;
						if (Array.isArray(audioName)) audio = audioName.randomGet();
						if (lib.skill[i].audioname2) lib.skill[i].audioname2[this.name] = audio;
					} //QQQ
				}
			};
			lib.element.player.hs_getAdditionalSkill = function (skill) {
				if (!this.additionalSkills[skill]) this.additionalSkills[skill] = [];
				else if (typeof this.additionalSkills[skill] == 'string') this.additionalSkills[skill] = [this.additionalSkills[skill]];
				return this.additionalSkills[skill];
			};
			lib.element.player.failSkill = function (skill) {
				try {
					game.broadcastAll(
						function (player, skill) {
							player.$failSkill(skill);
						},
						this,
						skill
					);
				} catch (e) { }
			};
			game.getSkillInfo = function (skill) {
				var info = get.info(skill),
					tran = '',
					str;
				if (info.prompt) {
					if (typeof info.prompt == 'string') tran += info.prompt + '<br><br>';
					else {
						try {
							str = info.prompt();
						} catch (e) {
							str = false;
						}
						if (str) tran += str + '<br><br>';
					}
				}
				if (get.translation(skill + '_info') != skill + '_info') {
					if (tran.length) tran += '『' + get.translation(skill) + '』:';
					tran += get.translation(skill + '_info');
				} else {
					var num = skill.lastIndexOf('_');
					if (num != -1) {
						var parskill = skill.slice(0, num);
						if (get.translation(parskill) != parskill && get.translation(parskill + '_info') != parskill + '_info') {
							tran = '『' + get.translation(skill) + '』<br>『' + get.translation(parskill) + '』:' + get.translation(parskill + '_info');
						}
					}
				}
				return tran;
			};
			game.hs_getAllCharacters = function (...args) {
				var func,
					num,
					list0,
					list = [];
				for (var i of args) {
					if (typeof i == 'function') func = i;
					if (typeof i == 'number') num = i;
				}
				if (_status.connectMode) list = get.charactersOL();
				else {
					if (get.mode() == 'guozhan') list0 = lib.characterPack.mode_guozhan;
					else list0 = lib.character;
					for (var i in list0) {
						var info = lib.character[i];
						if (!info) continue;
						if (func && !func(info, i)) continue;
						if (lib.filter.characterDisabled(i)) continue;
						if (lib.filter.characterDisabled2(i)) continue;
						list.push(i);
					}
				}
				var players = game.players.concat(game.dead);
				for (var i = 0; i < players.length; i++) {
					list.remove(players[i].name);
					list.remove(players[i].name1);
					list.remove(players[i].name2);
				}
				if (num && list.length > num) return list.randomGets(num);
				return list;
			};
			game.hs_getAllSkills = function (...args) {
				var func,
					num,
					skills = [],
					players = [],
					list = game.hs_getAllCharacters();
				for (var i of args) {
					if (typeof i == 'function') func = i;
					else if (typeof i == 'number') num = i;
					else if (get.itemtype(i) == 'player') players.add(i);
					else if (get.itemtype(i) == 'players') players.addArray(i);
				}
				for (var i of list) {
					if (i.startsWith('gz_jun')) continue;
					for (var j of lib.character[i][3]) {
						var skill = lib.skill[j];
						if (!skill || skill.zhuSkill) continue;
						if (skill.ai && skill.ai.notemp) continue;
						if (func && !func(skill, j)) continue;
						skills.add(j);
					}
				}
				if (players.length) {
					for (var i of players) skills.removeArray(i.hs_getSkills());
				}
				if (num && skills.length > num) return skills.randomGets(num);
				return skills;
			};
			//game.print("AAA",game.me.trydistancefun("globalTo"))
			//init
			lib.element.content.hs_reinit = function () {
				'step 0';
				if (event.num == 0) {
					player.smoothAvatar(false);
					if (event.dunxing && event.target) {
						if (event.target.isUnseen(0)) {
							player.node.avatar.style.backgroundImage = '';
							player.node.name.innerHTML = get.verticalStr('主将', true);
							event.nopopup2 = true;
						} else {
							player.node.avatar.style.backgroundImage = event.target.node.avatar.style.backgroundImage;
							if (player.node.avatar.style.backgroundImage) {
								player.setBackgroundImage(`image/character/default_silhouette_${event.target.sex == 'female' ? 'female' : 'male'}.jpg`);
							}
							player.node.name.innerHTML = event.target.node.name.innerHTML;
						}
						if (event.target.$jieMark) {
							if (player.$jieMark == undefined) player.$jieMark = dui.element.create('jie-mark', player);
							else player.appendChild(player.$jieMark);
							player.$jieMark.style.backgroundImage = event.target.$jieMark.style.backgroundImage;
						} else player.hs_removeJieMark();
					} else if (!event.name1) {
						if (lib.character[player.name] && lib.character[player.name][0] == 'female') {
							player.node.avatar.setBackgroundImage('extension/划水池/image/card/shibing2.jpg');
						} else player.node.avatar.setBackgroundImage('extension/划水池/image/card/shibing1.jpg');
						player.node.name.innerHTML = get.verticalStr('士兵', true);
						player.hs_removeJieMark();
					} else {
						player.node.avatar.setBackground(event.name1, 'character');
						player.node.name.innerHTML = get.slimName(event.name1);
						player.hs_setJieMark(event.name1);
					}
					if (player == game.me && ui.fakeme) ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
					if (event.sex) player.sex = event.sex;
					if (get.mode() != 'guozhan' && event.group) player.group = event.group;
				} else {
					player.smoothAvatar(true);
					if (event.dunxing && event.target) {
						if (event.target.isUnseen(1)) {
							player.node.avatar2.style.backgroundImage = '';
							player.node.name2.innerHTML = get.verticalStr('副将', true);
							event.nopopup2 = true;
						} else {
							player.node.avatar2.style.backgroundImage = event.target.node.avatar2.style.backgroundImage;
							player.node.name2.innerHTML = event.target.node.name2.innerHTML;
						}
					} else if (!event.name1) {
						if (lib.character[player.name2] && lib.character[player.name2][0] == 'female') {
							player.node.avatar2.setBackgroundImage('extension/划水池/image/card/shibing2.jpg');
						} else player.node.avatar2.setBackgroundImage('extension/划水池/image/card/shibing1.jpg');
						player.node.name2.innerHTML = get.verticalStr('士兵', true);
					} else {
						player.node.avatar2.setBackground(event.name1, 'character');
						player.node.name2.innerHTML = get.slimName(event.name1);
					}
				}
				if (!event.nopopup && !event.nopopup2) {
					if (!event.name1) game.log(player, '移除了', '#y' + (event.num == 0 ? '主将' : '副将'));
					else game.log(player, '将', '#y' + (event.num == 0 ? '主将' : '副将'), '变换为了', '#b' + event.name1);
				}
				if (!event.noskill) {
					var name = player.name,
						list = [];
					if (event.num != 0) name = player.name2;
					for (var i of lib.character[name][3]) {
						if (!(event.keepSkills && event.keepSkills.includes(i))) {
							player.awakenSkill(i);
							list.push('#g【' + get.translation(i) + '】');
						}
					}
					if (list.length) game.log(player, '失去了技能', ...list);
					if (event.skills) player.addSkillLog(event.skills, true);
					event.trigger('showCharacterAfter');
				}
				player.update();
				if (event.name2) {
					event.num = 1;
					event.name1 = event.name2;
					delete event.name2;
					delete event.nopopup2;
					event.redo();
				}
				('step 1');
				if (event.maxHp) player.hs_changeMaxHpTo(event.maxHp);
				('step 2');
				if (event.hp) player.hs_recoverTo(event.hp);
				('step 3');
				if (event.hujia) player.hs_changeHujiaTo(event.hujia);
			};
			lib.element.player.hs_reinit = function (...args) {
				var next = game.createEvent('hs_reinit');
				next.player = this;
				for (var i of args) {
					if (typeof i == 'string') {
						if (i == 'dunxing') next.dunxing = true;
						else if (i == 'nopopup') next.nopopup = true;
						else if (i == 'noskill') next.noskill = true;
						else if (lib.character[i]) {
							var info = lib.character[i];
							next.name1 = i;
							next.sex = info[0];
							if (!i.startsWith('gz_')) next.group = info[1];
							next.hp = get.infoHp(info[2]);
							next.maxHp = get.infoMaxHp(info[2]);
							next.hujia = get.infoHujia(info[2]);
							next.skills = info[3];
						}
					} else if (Array.isArray(i) && i.length) next.keepSkills = i;
					else if (get.itemtype(i) == 'player') {
						next.target = i;
						next.num = 0;
						next.name1 = i.name;
						if (i.name2) next.name2 = i.name2;
						next.sex = i.sex;
						if (!i.name.startsWith('gz_')) next.group = i.group;
						next.noskill = true;
					} else if (typeof i == 'number') next.num = i;
				}
				next.setContent('hs_reinit');
				return next;
			};
			//player
			lib.element.player.hs_filterOtherPlayer = function (func, list) {
				var players = game.filterPlayer(func, list);
				if (players.includes(this)) players.remove(this);
				return players;
			};
			//destroyCards
			lib.element.content.hs_destroyCards = function () {
				'step 0';
				if (event.lose) game.hs_loseCards(cards);
				('step 1');
				for (var i of cards) {
					i.fix();
					i.remove();
					i.destroyed = true;
				}
				if (event.log) game.log(player, '销毁了', cards);
			};
			lib.element.player.hs_destroyCards = function (cards, lose, log) {
				var next = game.createEvent('hs_destroyCards');
				next.player = this;
				if (get.itemtype(cards) == 'card') cards = [cards];
				next.cards = cards;
				next.lose = lose;
				next.log = log;
				next.setContent('hs_destroyCards');
				return next;
			};
			//getcards
			game.hs_getCardsFrom = function (cards) {
				var dic = {},
					cardss = [];
				for (var i of cards) {
					var owner = get.owner(i, 'judge');
					if (owner) {
						if (dic[owner.playerid]) dic[owner.playerid].add(i);
						else dic[owner.playerid] = [i];
					} else cardss.add(i);
				}
				return [dic, cardss];
			};
			game.hs_loseCards = function (cards, show, show2, log, log2) {
				var dic = game.hs_getCardsFrom(cards)[0];
				for (var i of game.filterPlayer2()) {
					var card = dic[i.playerid];
					if (card) {
						i.lose(card, ui.ordering);
						if (show) {
							if (show2) i.$throw(card, 100);
							else i.$throw(card.length, 100);
						}
						i.update();
						if (log) {
							if (i == game.me || log2) game.log(i, '失去了', card);
							else game.log(i, '失去了', card.length, '张牌');
						}
					}
				}
				game.cardsGotoOrdering(cards);
				game.updateRoundNumber();
			};
			//distributeCards
			lib.element.content.hs_distributeCards = function () {
				'step 0';
				game.hs_loseCards(cards);
				var listi = [],
					players = [],
					cardsi = cards.slice(0);
				if (event.ai) listi = event.ai(cardsi, targets);
				else {
					for (var i = 0; i < targets.length; i++) {
						listi.push([get.translation(targets[i]), []]);
						players.add(i);
					}
					for (var card of cardsi) {
						players.sort(function (a, b) {
							var attb = get.attitude(player, targets[b]),
								atta = get.attitude(player, targets[a]),
								numb = targets[b].countCards('h') + listi[b][1].length + 1,
								numa = targets[a].countCards('h') + listi[a][1].length + 1,
								aa = (atta + 0.5) / numa,
								bb = (attb + 0.5) / numb;
							if (atta < 0) aa = atta * numa;
							if (attb < 0) bb = attb * numb;
							return bb - aa;
						});
						listi[players[0]][1].add(card);
					}
				}
				var next = player.chooseToMove(get.translation(event.parent.name) + ':请分配这些牌(若对话框显示不完整,可下滑操作)', true);
				next.set('list', listi);
				next.processAI = function (list) {
					var resultlist = [];
					for (var i of list) resultlist.push(i[1]);
					return resultlist;
				};
				('step 1');
				event.result = { list: [] };
				for (var i = 0; i < targets.length; i++) {
					if (result.moved[i].length) {
						event.result.list.add([targets[i], result.moved[i]]);
						game.log(player, '将', result.moved[i], '分配给了', targets[i]);
						player.line(targets[i]);
						if (event.give) targets[i].gain(result.moved[i].slice(0), player, 'giveAuto');
						else targets[i].gain(result.moved[i].slice(0), 'gain2');
					}
				}
			};
			lib.element.player.hs_distributeCards = function (cards, targets, give) {
				var next = game.createEvent('hs_distributeCards');
				if (cards.length && targets.length) {
					next.cards = cards;
					next.targets = targets.sortBySeat();
					next.player = this;
					next.give = give;
					next.setContent('hs_distributeCards');
					next._args = Array.from(arguments);
				} else next.setContent('emptyEvent');
				return next;
			};
			//pushCards
			lib.element.content.hs_pushPileCards = function () {
				'step 0';
				if (event.buttom) event.text = '牌堆底';
				else event.text = '牌堆顶';
				game.hs_loseCards(event.cardss, true, event.log);
				if (event.cardss.length > 1) {
					var next = player.chooseToMove(get.translation(event.parent.name) + ':将牌按顺序置于' + event.text, true);
					next.set('list', [[event.text, event.cardss]]);
					next.set('reverse', _status.currentPhase && _status.currentPhase.next ? get.attitude(player, _status.currentPhase.next) > 0 : false);
					next.set('processAI', function (list) {
						var cards = list[0][1].slice(0);
						cards.sort(function (a, b) {
							return (_status.event.reverse ? 1 : -1) * (get.value(b) - get.value(a));
						});
						return [cards];
					});
				} else event._result = { bool: true, moved: [event.cardss] };
				('step 1');
				var cards = result.moved[0].slice(0);
				if (player == game.me || event.log) {
					if (cards.length < 2) game.log(player, '将', cards, '置于' + event.text);
					else game.log(player, '将', cards, '共计' + get.cnNumber(cards.length) + '张牌置于' + event.text);
				} else game.log(player, '将' + get.cnNumber(cards.length) + '张牌置于' + event.text);
				if (!event.buttom) cards.reverse();
				for (var i of cards) {
					if (get.position(i, true) == 'o') i.fix();
					if (event.buttom) ui.cardPile.appendChild(i);
					else ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
				}
				game.updateRoundNumber();
			};
			lib.element.player.hs_pushPileCards = function (cards, buttom, log) {
				if (get.itemtype(cards) == 'card') cards = [cards];
				if (cards.length) {
					var next = game.createEvent('hs_pushPileCards');
					next.cardss = cards;
					next.buttom = buttom;
					next.player = this;
					next.log = log;
					next.setContent('hs_pushPileCards');
				}
			};
			//discardCardsMultiple
			lib.element.content.hs_discardCardsMultiple = function () {
				'step 0';
				if (targets.length) {
					var target = targets.shift();
					player.discardPlayerCard(target, ...event.args);
				} else event.finish();
				('step 1');
				event.goto(0);
			};
			lib.element.player.hs_discardCardsMultiple = function (targets, args) {
				var next = game.createEvent('hs_discardCardsMultiple');
				next.setContent('hs_discardCardsMultiple');
				next.player = this;
				next.targets = targets;
				next.args = args;
			};
			//image
			lib.element.player.hs_changeBackground = function (name, skin) {
				var filename = name + '.jpg',
					file = `extension/划水池/image/character/${filename}`;
				if (skin) {
					filename = skin;
					file = `extension/划水池/image/skin/${name}/${filename}`;
				}
				if (this.name == name || this.name1 == name) this.node.avatar.setBackgroundImage(file);
				if (this.name2 == name) this.node.avatar2.setBackgroundImage(file);
			};
			//count
			lib.element.player.hs_getGain = function (...args) {
				var list = [],
					list1 = [],
					list2 = [],
					num = 0,
					num1 = 0,
					num2 = 0,
					draw,
					all,
					num0;
				for (var i of args) {
					if (i === true) draw = true;
					else if (i === false) draw = false;
					if (i == 'num') num0 = true;
					else all = i;
				}
				if (all == 'round' && !this.storage.hs_countRound) all = 'all';
				if (all == 'round') {
					var list0 = [];
					for (var j = this.storage.hs_countRound - 1; j < this.actionHistory.length; j++) list0.addArray(this.actionHistory[j].gain);
					for (var evt of list0) {
						num += evt.cards.length;
						list.addArray(evt.cards);
						if (evt.parent.name == 'draw') {
							num1 += evt.cards.length;
							list1.addArray(evt.cards);
						} else {
							num2 += evt.cards.length;
							list2.addArray(evt.cards);
						}
					}
				} else if (all == 'all') {
					this.getAllHistory('gain', function (evt) {
						num += evt.cards.length;
						list.addArray(evt.cards);
						if (evt.parent.name == 'draw') {
							num1 += evt.cards.length;
							list1.addArray(evt.cards);
						} else {
							num2 += evt.cards.length;
							list2.addArray(evt.cards);
						}
					});
				} else {
					this.getHistory('gain', function (evt) {
						num += evt.cards.length;
						list.addArray(evt.cards);
						if (evt.parent.name == 'draw') {
							num1 += evt.cards.length;
							list1.addArray(evt.cards);
						} else {
							num2 += evt.cards.length;
							list2.addArray(evt.cards);
						}
					});
				}
				if (num0) {
					if (draw === true) return num1;
					if (draw === false) return num2;
					return num;
				} else {
					if (draw === true) return list1;
					if (draw === false) return list2;
					return list;
				}
			};
			lib.element.player.hs_getLose = function (...args) {
				var list = [],
					list1 = [],
					list2 = [],
					num = 0,
					num1 = 0,
					num2 = 0,
					use,
					all,
					num0;
				for (var i of args) {
					if (i === true) use = true;
					else if (i === false) use = false;
					else if (i == 'num') num0 = true;
					else all = i;
				}
				if (all == 'round' && !this.storage.hs_countRound) all = 'all';
				if (all == 'round') {
					var list0 = [];
					for (var j = this.storage.hs_countRound - 1; j < this.actionHistory.length; j++) {
						list0.addArray(this.actionHistory[j].lose);
					}
					for (var evt of list0) {
						num += evt.cards2.length;
						list.addArray(evt.cards2);
						if (evt.parent.name == 'useCard') {
							num1 += evt.cards2.length;
							list1.addArray(evt.cards2);
						} else {
							num2 += evt.cards2.length;
							list2.addArray(evt.cards2);
						}
					}
				} else if (all == 'all') {
					this.getAllHistory('lose', function (evt) {
						num += evt.cards2.length;
						list.addArray(evt.cards2);
						if (evt.parent.name == 'useCard') {
							num1 += evt.cards2.length;
							list1.addArray(evt.cards2);
						} else {
							num2 += evt.cards2.length;
							list2.addArray(evt.cards2);
						}
					});
				} else {
					this.getHistory('lose', function (evt) {
						num += evt.cards2.length;
						list.addArray(evt.cards2);
						if (evt.parent.name == 'useCard') {
							num1 += evt.cards2.length;
							list1.addArray(evt.cards2);
						} else {
							num2 += evt.cards2.length;
							list2.addArray(evt.cards2);
						}
					});
				}
				if (num0) {
					if (use === true) return num1;
					if (use === false) return num2;
					return num;
				} else {
					if (use === true) return list1;
					if (use === false) return list2;
					return list;
				}
			};
			lib.element.player.hs_countDamage = function (...args) {
				var num = 0,
					num1 = 0,
					times,
					all,
					key = 'damage';
				for (var i of args) {
					if (i === true) times = true;
					if (i == 'source') key = 'sourceDamage';
					else all = i;
				}
				if (all == 'round' && !this.storage.hs_countRound) all = 'all';
				if (all == 'round') {
					var list0 = [];
					for (var j = this.storage.hs_countRound - 1; j < this.actionHistory.length; j++) list0.addArray(this.actionHistory[j][key]);
					for (var evt of list0) {
						num += evt.num;
						num1++;
					}
				} else if (all == 'all') {
					this.getAllHistory(key, function (evt) {
						num += evt.num;
						num1++;
					});
				} else {
					this.getHistory(key, function (evt) {
						num += evt.num;
						num1++;
					});
				}
				if (times) return num1;
				return num;
			};
			if (lib.config.extension_划水池_countShow) {
				lib.skill._hs_countMark = {
					charlotte: true,
					forceDie: true,
					_priority: -Infinity,
					lastDo: true,
					forced: true,
					marktext: '统计',
					intro: {
						name: '统计',
						name2: '统计',
						content(storage, player) {
							return '本回合已<br>' + '获得' + player.hs_getGain('num') + '张牌<br>' + '失去' + player.hs_getLose('num') + '张牌<br>' + '不因使用而失去' + player.hs_getLose(false, 'num') + '张牌<br>' + '造成' + player.hs_countDamage('source') + '点伤害<br>' + '受到' + player.hs_countDamage() + '点伤害<br>' + '<br>本轮已<br>' + '获得' + player.hs_getGain('round', 'num') + '张牌<br>' + '失去' + player.hs_getLose('round', 'num') + '张牌<br>' + '不因使用而失去' + player.hs_getLose(false, 'round', 'num') + '张牌<br>' + '造成' + player.hs_countDamage('round', 'source') + '点伤害<br>' + '受到' + player.hs_countDamage('round') + '点伤害<br>' + '<br>累计已<br>' + '获得' + player.hs_getGain('all', 'num') + '张牌<br>' + '失去' + player.hs_getLose('all', 'num') + '张牌<br>' + '不因使用而失去' + player.hs_getLose(false, 'all', 'num') + '张牌<br>' + '造成' + player.hs_countDamage('all', 'source') + '点伤害<br>' + '受到' + player.hs_countDamage('all') + '点伤害<br>';
						},
					},
					trigger: {
						global: ['loseAfter', 'changeHp', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'phaseBefore', 'phaseBegin', 'phaseEnd', 'phaseAfter', 'roundStart', 'roundAfter'],
					},
					forced: true,
					popup: false,
					filter(event, player) {
						return player.isAlive();
					},
					content() {
						player.markSkill('_hs_countMark');
					},
				};
			}
			//out
			lib.skill._hs_out_cancel = {
				trigger: {
					player: ['damageBegin1', 'loseHpBegin', 'recoverBegin', 'gainMaxHpBegin', 'loseMaxHpBegin', 'dyingBegin', 'dieBegin'],
				},
				forced: true,
				popup: false,
				forceDie: true,
				firstDo: true,
				filter(event, player) {
					return player.isOut() && player.storage.hs_out;
				},
				content() {
					trigger.cancel();
				},
			};
			lib.translate._hs_out_cancel = 'MISS';
			//shashan
			lib.skill._hs_shashanUse = {
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(event, player) {
					if (player.countCards('h', 'hs_shashan')) return event.filterCard({ name: 'sha' }, player, event) || event.filterCard({ name: 'shan' }, player, event);
					else return false;
				},
				chooseButton: {
					dialog(event, player) {
						return ui.create.dialog(
							'选择视为的牌',
							[
								[
									['基本', '', 'sha'],
									['基本', '', 'shan'],
								],
								'vcard',
							],
							'hidden'
						);
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
							popname: true,
							filterCard: {
								name: 'hs_shashan',
							},
							ai1(card) {
								return 1;
							},
							viewAs(cards, player) {
								return { name: links[0][2] }; //QQQ
							},
							position: 'h',
						};
					},
					prompt(links, player) {
						return '将一张【杀/闪】当做' + get.translation(links[0][2]) + '使用或打出';
					},
				},
				ai: {
					order() {
						var player = _status.event.player;
						var event = _status.event;
						if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) return get.order({ name: 'sha' }) - 0.01;
						else return get.order({ name: 'shan' }) - 0.01;
					},
					skillTagFilter(player, tag, arg) {
						if (tag == 'respondSha' || tag == 'respondShan') return player.hasCard('hs_shashan', 'h');
						if (tag == 'fireAttack')
							return player.hasCard(function (card) {
								return card.name == 'hs_shashan' && get.nature(card) == 'fire';
							}, 'h');
					},
					result: {
						player(player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
					respondSha: true,
					respondShan: true,
					fireAttack: true,
				},
			};
			lib.translate._hs_shashanUse = '杀闪';
			//zhuSkill
			lib.hs_enhance_zhuSkill = {
				liuyan: ['luanji', 'new_rewusheng'],
				huanggai: ['liangzhu', 'buqu', 'gzbuqu'],
				hs_caorui: ['xingshuai', 'zhushi'],
				hs_liubiao: ['drlt_weidi', 'xinhuangtian'],
				hs_caopi: ['zhushi', 'rehujia'],
				hs_sunquan: ['olzhiba', 'nscangxi'],
				hs_sunxiu: ['tianming', 'nzry_lijun'],
				hs_zhangjiao: ['olbaonue', 'yjyongquan'],
				hs_dongzhuo: ['olxueyi', 'sbxueyi'],
				hs_caocao: ['songwei', 'zhushi'],
				hs_liubei: ['olruoyu', 'rejijiang'],
			};
			lib.skill._hs_enhance_zhu = {
				trigger: {
					global: 'gameStart',
				},
				forced: true,
				charlotte: true,
				_priority: 600,
				lastDo: true,
				filter(event, player) {
					if (!game.zhu) return false;
					if (game.hs_enhance_zhuSkill) return false;
					if (!lib.hs_enhance_zhuSkill[game.zhu.name]) return false;
					return game.zhu.storage.enhance_zhu;
				},
				content() {
					'step 0';
					game.zhu.hs_removeSkill(game.zhu.storage.enhance_zhu);
					('step 1');
					var skill = lib.hs_enhance_zhuSkill[game.zhu.name].randomGet();
					game.zhu.addSkill(skill);
					game.zhu.storage.enhance_zhu = skill;
					game.hs_enhance_zhuSkill = true;
				},
			};
			//markClear
			lib.skill._hs_countRoundClear = {
				trigger: {
					global: ['roundStart', 'gameDrawAfter'],
				},
				charlotte: true,
				forceDie: true,
				_priority: 999,
				firstDo: true,
				forced: true,
				popup: false,
				content() {
					//countRound
					player.storage.hs_countRound = player.actionHistory.length;
					//密策
					player.clearMark('hs_mice', false);
					//知略
					player.storage.hs_zhilve = {};
				},
			};
			lib.skill._hs_countPhaseClear = {
				trigger: {
					global: ['phaseBeforeStart', 'gameDrawAfter'],
				},
				charlotte: true,
				forceDie: true,
				_priority: 999,
				firstDo: true,
				forced: true,
				popup: false,
				content() {
					//挟术
					player.clearMark('hs_xieshu', false);
					//过论
					player.storage.hs_guolun = [];
					player.unmarkSkill('hs_guolun');
					//狂骨
					player.storage.hs_kuanggu = false;
					player.storage.hs_kuanggu1 = 0;
					//度断
					player.storage.hs_duoduan = 0;
					//破军
					player.storage.hs_pojun_suit = [];
					player.storage.hs_pojun_number = [];
					player.unmarkSkill('hs_pojun_fengyin');
					//侠望
					player.storage.hs_xiawang = [];
					player.unmarkSkill('hs_xiawang');
					//镇御
					player.clearMark('hs_yj_bingshi', false);
					player.clearMark('hs_yj_junxing', false);
					//符咒
					player.clearMark('hs_fuzhou_gain', false);
					player.clearMark('hs_fuzhou_use', false);
					//冲静
					delete player.storage.hs_chongjing_suit;
					delete player.storage.hs_chongjing_number;
					player.clearMark('hs_chongjing', false);
					//浣龙
					player.clearMark('hs_huanlong', false);
					//奇佐
					player.storage.hs_qizuo_last = player.getStorage('hs_qizuo');
					player.clearMark('hs_qizuo', false);
					//三陈
					player.storage.hs_sanchen_max = 3;
					player.clearMark('hs_sanchen', false);
					//奸雄
					player.clearMark('hs_jianxiong', false);
					//制蛮
					delete player.storage.hs_zhiman;
					//挟令
					delete player.storage.hs_xieling_used;
					//结营
					player.storage.hs_jieying_use = 0;
					//奇策
					player.clearMark('hs_qice', false);
					player.storage.hs_qice_count = 0;
					//授箓
					player.clearMark('hs_shoulu', false);
					//九节杖
					player.clearMark('hs_jiujie_skill', false);
				},
			};
			//连营
			lib.skill._hs_lianying = {
				intro: {
					name: '连营',
					name2: '连营',
					content: '有#枚<连营>标记',
				},
				marktext: '连营',
				charlotte: true,
				firstDo: true,
				forced: true,
				popup: false,
				trigger: {
					player: ['hs_addMark', 'hs_removeMark'],
				},
				filter(event, player) {
					if (event.markname != '_hs_lianying') return false;
					if (player.hasMark('_hs_lianying') && !player.isLinked()) return true;
					return player.isLinked() && !player.hasMark('_hs_lianying');
				},
				content() {
					player.link();
				},
				group: '_hs_lianying_link',
				subSkill: {
					link: {
						charlotte: true,
						firstDo: true,
						forced: true,
						popup: false,
						trigger: {
							player: 'linkBefore',
						},
						filter(event, player) {
							return event.player.isLinked() && event.player.hasMark('_hs_lianying');
						},
						content() {
							trigger.cancel();
							player.removeMark('_hs_lianying');
						},
					},
				},
			};
			//于禁
			lib.element.content.hs_zhenyuChange = function () {
				'step 0';
				if (player.storage.hs_zhenyu) player.storage.hs_zhenyu += num;
				else player.storage.hs_zhenyu = num;
				if (player.storage.hs_zhenyu < 0) player.storage.hs_zhenyu = 0;
				player.markSkill('hs_zhenyu');
				('step 1');
				event.trigger('hs_zhenyuChange');
			};
			lib.element.player.hs_zhenyuChange = function (num) {
				var next = game.createEvent('hs_zhenyuChange');
				next.player = this;
				if (typeof num != 'number') num = 1;
				next.num = num;
				var event = _status.event;
				next.source = event.player;
				next.setContent('hs_zhenyuChange');
				return next;
			};
			//黄巾
			lib.element.player.hs_isHuangjin = function () {
				return !!this.storage._hs_huangjin;
			};
			lib.element.content.hs_addHuangjin = function () {
				if (player.hs_isHuangjin()) return;
				player.storage._hs_huangjin = true;
				player.markSkill('_hs_huangjin');
				game.log('<span data-nature=metalmm>苍天已死,黄天当立!</span>', player, '加入了', '<span data-nature=metalmm>黄巾</span>');
				event.trigger('hs_addHuangjin');
			};
			lib.element.player.hs_addHuangjin = function () {
				var next = game.createEvent('hs_addHuangjin');
				next.player = this;
				next.setContent('hs_addHuangjin');
				return next;
			};
			lib.skill._hs_huangjin = {
				intro: {
					name: '<span data-nature=metalmm>黄巾</span>',
					content: '<span data-nature=metalmm>苍天已死,黄天当立!</span>',
				},
				charlotte: true,
			};
			lib.translate._hs_huangjin = '黄巾';
			//酒池
			lib.element.player.hs_changeJiu = function (num) {
				if (typeof num != 'number') num = 1;
				this.storage.jiu += num;
				if (this.storage.jiu > 0) {
					this.markSkill('jiu');
					if (!this.hasSkill('jiu')) {
						game.broadcastAll(function (target) {
							target.addSkill('jiu');
							if (!target.node.jiu && lib.config.jiu_effect) {
								target.node.jiu = ui.create.div('.playerjiu', target.node.avatar);
								target.node.jiu2 = ui.create.div('.playerjiu', target.node.avatar2);
							}
						}, this);
					}
				} else this.unmarkSkill('jiu');
			};
			//background
			game.getFileList('extension/划水池/background/image/', function (folders, files) {
				if (files && files.length) {
					for (var i of files) {
						lib.extensionMenu[`extension_划水池`].background.item[i] = "<img style='width:100px;height:60px;' src=extension/划水池/background/image/" + i + '>';
					}
					var background = lib.config[`extension_划水池_background`];
					if (background == '0' || files.includes(background)) {
						if (background == '0') background = files.randomGet();
						ui.background.setBackgroundImage(`extension/划水池/background/image/` + background);
						ui.background.style.backgroundSize = '100% 100%';
						ui.background.style.backgroundPosition = '50% 50%';
						lib.config.image_background = `../../extension/划水池/background/image/` + background.slice(0, -4);
					}
				} else {
					delete lib.extensionMenu.extension_划水池.background;
				}
			});
			game.getFileList('extension/划水池/background/music/', function (folders, files) {
				if (files && files.length) {
					for (var i of files) lib.extensionMenu[`extension_划水池`].backmusic.item[i] = i;
					var backmusic = lib.config[`extension_划水池_backmusic`];
					if (backmusic == '0' || files.includes(backmusic)) {
						if (backmusic == '0') backmusic = files.randomGet();
						lib.config.background_music = 'music_custom';
						lib.config.background_music_src = 'extension/划水池/background/music/' + backmusic;
						if (!ui.backgroundMusic) ui.backgroundMusic = document.createElement('audio');
						game.playBackgroundMusic();
					}
				} else {
					delete lib.extensionMenu.extension_划水池.backmusic;
				}
			});
			//
			lib.arenaReady.push(function () {
				if (game.hs_extensionCheck('划水配置')) game.removeExtension('划水配置');
				//skillAudio
				game.hs_funtionChange('game.trySkillAudio', false, '!lib.skill.global.includes(skill)', false, "skill.startsWith('hs_') ||");
				//charge
				lib.skill.charge.intro.content = function (storage, player, skill) {
					if (!storage) storage = 0;
					var txt = '当前蓄力点数:' + storage,
						limit = player.hs_getChargeLimit();
					if (limit > 0) txt += '/' + limit;
					return txt;
				};
				lib.element.player.hs_getChargeLimit = function () {
					var limit = 0,
						skills = this.getSkills('invisible').concat(lib.skill.global);
					game.expandSkills(skills);
					for (var i of skills) {
						var info = lib.skill[i];
						if (info.zhuSkill && !this.hasZhuSkill(i)) continue;
						if (info && info.chargeLimit) limit += info.chargeLimit;
					}
					return limit;
				};
				lib.element.player.hs_canGetCharge = function () {
					return this.hs_getChargeLimit() - this.countMark('charge') > 0;
				};
				lib.element.player.hs_addCharge = function (num) {
					if (typeof num != 'number' || !num) num = 1;
					var limit = this.hs_getChargeLimit();
					if (num > limit - this.countMark('charge')) num = limit - this.countMark('charge');
					if (num > 0) this.addMark('charge', num);
					if (num < 0) this.storage.charge = limit;
					this.markSkill('charge');
				};
				lib.element.player.hs_loseCharge = function (num) {
					if (typeof num != 'number' || !num) num = 1;
					var num0 = this.countMark('charge');
					if (num > num0) num = num0;
					if (num > 0) this.removeMark('charge', num);
				};
				//cooperation
				lib.element.player.hs_checkCooperationStatus = function (reason) {
					var storage = this.getStorage('cooperation'),
						target;
					for (var info of storage) {
						if (info.reason == reason && info.target) target = info.target;
					}
					if (target) return this.checkCooperationStatus(target, reason);
					else return false;
				};
				lib.card.cooperation_damage = {
					fullimage: true,
					image: 'ext:划水池/image/card/xieli_tongchou.jpg',
				};
				lib.card.cooperation_draw = {
					fullimage: true,
					image: 'ext:划水池/image/card/xieli_bingjin.jpg',
				};
				lib.card.cooperation_discard = {
					fullimage: true,
					image: 'ext:划水池/image/card/xieli_shucai.jpg',
				};
				lib.card.cooperation_use = {
					fullimage: true,
					image: 'ext:划水池/image/card/xieli_luli.jpg',
				};
				//createCard
				game.hs_createCard = function ([suit, number, name, nature], truth) {
					var card;
					if (truth) card = game.createCard2(name, suit, number, nature);
					else card = game.createCard(name, suit, number, nature);
					return card;
				};
				lib.element.player.hs_createCardsToPile = function ([suit, number, name, nature], truth, num) {
					if (typeof num != 'number') num = 1;
					var list = [];
					for (var i = 0; i < num; i++) {
						var su, nu;
						if (Array.isArray(suit)) su = suit[i % suit.length];
						else su = suit;
						if (Array.isArray(number)) nu = number[i % number.length];
						else nu = number;
						var card = game.hs_createCard([su, nu, name, nature], truth);
						ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
						game.broadcastAll(function () {
							lib.inpile.add(name);
						});
						list.add(card);
					}
					game.updateRoundNumber();
					game.log(this, '将', list, '加入了牌堆');
				};
				//hujia
				lib.element.player.hs_changeHujiaTo = function (num) {
					var num0 = num - this.hujia;
					this.changeHujia(num0);
					return num0;
				};
				lib.element.player.hs_changeMaxHujia = function (num) {
					if (!this.maxHujia) this.maxHujia = 5;
					this.maxHujia += num;
				};
				lib.element.content.hs_updateRoundNumber = function () {
					event.trigger('hs_updateRoundNumber');
				};
				//号令天下
				lib.card.gz_haolingtianxia.content = function () {
					'step 0';
					event.list = game
						.filterPlayer(function (current) {
							return current != target;
						})
						.sortBySeat();
					if (!target.isIn()) event.finish();
					('step 1');
					event.current = event.list.shift();
					if ((!event.current && event.current.isIn()) || event.current.hasSkill('diaohulishan')) {
						if (event.list.length) event.redo();
						else event.finish();
					} else {
						if ((get.mode() == 'guozhan' && event.current.identity == 'wei') || event.current.group == 'wei') {
							event.current.chooseBool('是否视为对' + get.translation(target) + '使用一张【杀】？', '若点击「取消」则改为获得其一张牌').set('ai', function () {
								var player = _status.event.player,
									target = _status.event.parent.target;
								if (get.effect(target, { name: 'sha' }, player) < 0) return false;
								return get.effect(target, { name: 'shunshou' }, player) <= get.effect(target, { name: 'sha' }, player);
							});
						} else {
							event.current.chooseToDiscard('he', '弃置一张牌,并视为对' + get.translation(target) + '使用一张【杀】,或点击「取消」弃置其一张牌').set('ai', function (card) {
								var player = _status.event.player,
									target = _status.event.parent.target;
								if (get.effect(target, { name: 'sha' }, player) < 0) return -1;
								if (get.effect(target, { name: 'guohe' }, player) < get.effect(target, { name: 'sha' }, player)) return -1;
								return 5 - get.value(card);
							});
						}
					}
					('step 2');
					if (!result.bool) {
						if ((get.mode() == 'guozhan' && event.current.identity == 'wei') || event.current.group == 'wei') {
							if (player.storage.hs_xieling2) event.current.gainPlayerCard(target, 'he', true).set('boolline', true);
							else event.current.gainPlayerCard(target, 'he').set('boolline', true);
						} else {
							if (player.storage.hs_xieling2) event.current.discardPlayerCard('hej', target, true).set('boolline', true);
							event.current.discardPlayerCard('hej', target).set('boolline', true);
						}
					} else if (
						event.current.canUse(
							{
								name: 'sha',
							},
							target,
							false
						)
					)
						event.current.useCard({ name: 'sha' }, target, false);
					if (event.list.length && target.isIn()) event.goto(1);
				};
				lib.translate.gz_haolingtianxia_info = '出牌阶段,对体力值不是最少的一名角色使用.除该角色外,每名角色可以选择一项:1.弃置一张手牌视为对其使用一张无距离限制的【杀】(魏势力角色无需弃牌);2.弃置其一张牌(魏势力角色改为获得其一张牌).';
				if (config.packShow) {
					for (var i in lib.characterPack) {
						for (var j in lib.characterPack[i]) {
							if (!lib.characterTitle[j]) lib.characterTitle[j] = get.translation(i + '_character_config');
							else lib.characterTitle[j] = get.translation(i + '_character_config') + '·' + get.colorspan(lib.characterTitle[j]);
						}
					}
				}
				//setCharge
				if (config.setCharge) {
					//姜维
					lib.skill.sbtiaoxin = {
						audio: 2,
						enable: 'phaseUse',
						usable: 1,
						chargeSkill: true,
						chargeNum: 4,
						chargeLimit: 4,
						filter(event, player) {
							return player.hasMark('charge');
						},
						filterTarget: lib.filter.notMe,
						selectTarget() {
							return [1, _status.event.player.countMark('charge')];
						},
						multiline: true,
						group: 'sbtiaoxin_backflow',
						content() {
							'step 0';
							target
								.chooseToUse(
									function (card, player, event) {
										if (card.name != 'sha') return false;
										return lib.filter.filterCard.apply(this, arguments);
									},
									'挑衅:对' + get.translation(player) + '使用一张杀,或交给其一张牌'
								)
								.set('targetRequired', true)
								.set('complexSelect', true)
								.set('filterTarget', function (card, player, target) {
									if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
									return lib.filter.targetEnabled.apply(this, arguments);
								})
								.set('sourcex', player);
							('step 1');
							if (!result.bool && target.countCards('he') > 0) {
								target.chooseCard('he', '交给' + get.translation(player) + '一张牌', true);
							} else event.finish();
							('step 2');
							if (result.cards?.length) {
								target.give(result.cards, player);
							}
						},
						contentAfter() {
							player.hs_loseCharge(targets.length);
						},
						ai: {
							threaten: 1.2,
							order: 4,
							expose: 0.2,
							result: {
								target(player, target) {
									if (target.countGainableCards(player, 'he') == 0) return 0;
									return -1;
								},
								player(player, target) {
									if (!target.canUse('sha', player)) return 0;
									if (target.countCards('h') == 0) return 0;
									if (target.countCards('h') == 1) return -0.1;
									if (player.hp <= 2) return -2;
									if (player.countCards('h', 'shan') == 0) return -1;
									return -0.5;
								},
							},
						},
						subSkill: {
							backflow: {
								audio: 'sbtiaoxin',
								trigger: {
									player: 'loseAfter',
									global: 'loseAsyncAfter',
								},
								forced: true,
								filter(event, player) {
									if (!player.hs_canGetCharge()) return false;
									if (event.type != 'discard') return false;
									var evt = event.getParent('phaseDiscard');
									return evt && evt.player == player && event.getl(player).cards2.length;
								},
								content() {
									player.hs_addCharge(trigger.getl(player).cards2.length);
								},
							},
						},
					};
					//全琮
					lib.skill.sbyaoming = {
						audio: 2,
						chargeSkill: true,
						chargeNum: 2,
						chargeLimit: 4,
						enable: 'phaseUse',
						filter(event, player) {
							return player.countMark('charge') > 0;
						},
						filterTarget: true,
						prompt() {
							var num = _status.event.player.storage.sbyaoming_status;
							var list = ['弃置一名手牌数不小于你的角色的一张牌', ';或令一名手牌数不大于你的角色摸一张牌'];
							if (typeof num == 'number') list[num] += '(上次选择)';
							return list[0] + list[1];
						},
						content() {
							'step 0';
							player.hs_loseCharge();
							var num = target.countCards('h'),
								num2 = player.countCards('h');
							if (num == num2 && target.countCards('he') > 0) {
								var choice = get.attitude(player, target) > 0 ? 1 : 0;
								var str = get.translation(target),
									choiceList = ['弃置' + str + '的一张牌', '令' + str + '摸一张牌'];
								if (typeof player.storage.sbyaoming_status == 'number') choiceList[player.storage.sbyaoming_status] += '(上次选择)';
								var next = player.chooseControl().set('choiceList', choiceList);
								next.set('ai_choice', choice);
								next.set('ai', () => _status.event.ai_choice);
							} else event._result = { index: num > num2 ? 0 : 1 };
							('step 1');
							if (result.index == 0) {
								player.discardPlayerCard(target, true, 'he');
							} else target.draw();
							if (typeof player.storage.sbyaoming_status == 'number' && result.index != player.storage.sbyaoming_status) {
								player.hs_addCharge();
								delete player.storage.sbyaoming_status;
							} else {
								player.storage.sbyaoming_status = result.index;
							}
						},
						ai: {
							order: 6,
							result: {
								target(player, target) {
									var eff = [0, 0],
										hs = player.countCards('h'),
										ht = target.countCards('h');
									if (hs >= ht) {
										eff[0] = get.effect(target, { name: 'wuzhong' }, player, player) / 2;
										if (player.storage.sbyaoming_status == 0) eff[0] *= 1.2;
									}
									if (hs < ht) {
										eff[1] = get.effect(target, { name: 'guohe_copy2' }, player, player);
										if (player.storage.sbyaoming_status == 1) eff[1] *= 1.2;
									}
									return Math.max.apply(Math, eff);
								},
							},
						},
						group: 'sbyaoming_damage',
						subSkill: {
							damage: {
								trigger: {
									player: 'damageEnd',
								},
								forced: true,
								content() {
									'step 0';
									if (player.hs_canGetCharge()) {
										player.hs_addCharge(trigger.num);
									}
									('step 1');
									player.chooseTarget(get.prompt('sbyaoming'), lib.skill.sbyaoming.prompt()).set('ai', function (target) {
										var player = _status.event.player;
										return get.effect(target, 'sbyaoming', player, player);
									});
									('step 2');
									if (result.targets?.length) {
										player.useSkill('sbyaoming', result.targets);
									}
								},
							},
						},
					};
					//赵云
					lib.skill.sblongdan = {
						audio: 2,
						enable: ['chooseToUse', 'chooseToRespond'],
						chargeSkill: true,
						chargeNum: 1,
						chargeLimit: 3,
						filter(event, player) {
							if (event.type == 'wuxie' || !player.hasMark('charge')) return false;
							var marked = player.hasSkill('sblongdan_mark', null, null, false);
							for (var name of lib.inpile) {
								if (!marked && name != 'sha' && name != 'shan') continue;
								if (get.type(name) != 'basic') continue;
								if (player.hasCard(lib.skill.sblongdan.getFilter(name, player), 'hs')) {
									if (event.filterCard && event.filterCard({ name: name }, player, event)) return true;
									if (marked && name == 'sha') {
										for (var nature of lib.inpile_nature) {
											if (
												event.filterCard &&
												event.filterCard(
													{
														name: name,
														nature: nature,
													},
													player,
													event
												)
											)
												return true;
										}
									}
								}
							}
							return false;
						},
						chooseButton: {
							dialog(event, player) {
								var list = [];
								var marked = player.hasSkill('sblongdan_mark', null, null, false);
								for (var name of lib.inpile) {
									if (!marked && name != 'sha' && name != 'shan') continue;
									if (get.type(name) != 'basic') continue;
									if (player.hasCard(lib.skill.sblongdan.getFilter(name, player), 'hs')) {
										if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
										if (marked && name == 'sha') {
											for (var nature of lib.inpile_nature) {
												if (
													event.filterCard &&
													event.filterCard(
														{
															name: name,
															nature: nature,
														},
														player,
														event
													)
												)
													list.push(['基本', '', name, nature]);
											}
										}
									}
								}
								return ui.create.dialog('龙胆', [list, 'vcard'], 'hidden');
							},
							check(button) {
								if (_status.event.parent.type != 'phase') return 1;
								var player = _status.event.player,
									card = { name: button.link[2], nature: button.link[3] };
								if (card.name == 'jiu' && Math.min(player.countMark('charge'), player.countCards('h', { type: 'basic' })) < 2) return 0;
								return player.getUseValue(card, null, true);
							},
							backup(links, player) {
								return {
									viewAs: {
										name: links[0][2],
										nature: links[0][3],
									},
									filterCard: lib.skill.sblongdan.getFilter(links[0][2], player),
									position: 'he',
									popname: true,
									check(card) {
										return 6 / Math.max(1, get.value(card));
									},
									precontent() {
										player.hs_loseCharge();
										player.addTempSkill('sblongdan_draw');
									},
								};
							},
							prompt(links, player) {
								var marked = player.hasSkill('sblongdan_mark', null, null, false);
								var card = {
									name: links[0][2],
									nature: links[0][3],
								};
								if (marked) return '将一张基本牌当做' + get.translation(card) + '使用';
								return '将一张' + (card.name == 'sha' ? '闪' : '杀') + '当做' + get.translation(card) + '使用';
							},
						},
						hiddenCard(player, name) {
							if (get.type(name) != 'basic' || !player.hasMark('charge')) return false;
							var marked = player.hasSkill('sblongdan_mark', null, null, false);
							if (!marked && name != 'sha' && name != 'shan') return false;
							return player.hasCard(lib.skill.sblongdan.getFilter(name, player), 'hs');
						},
						ai: {
							respondSha: true,
							respondShan: true,
							skillTagFilter(player, tag) {
								return lib.skill.sblongdan.hiddenCard(player, tag == 'respondSha' ? 'sha' : 'shan');
							},
							order: 9,
							result: {
								player(player) {
									if (_status.event.dying) return get.attitude(player, _status.event.dying);
									return 1;
								},
							},
						},
						getFilter(name, player) {
							if (!player.hasSkill('sblongdan_mark', null, null, false)) {
								if (name == 'sha') return { name: 'shan' };
								if (name == 'shan') return { name: 'sha' };
								return () => false;
							}
							return { type: 'basic' };
						},
						group: 'sblongdan_charge',
						onremove(player) {
							player.removeSkill('sblongdan_mark');
						},
						subSkill: {
							backup: { audio: 'sblongdan' },
							mark: { charlotte: true },
							draw: {
								charlotte: true,
								trigger: { player: ['useCardAfter', 'respondAfter'] },
								forced: true,
								popup: false,
								filter(event, player) {
									return event.skill == 'sblongdan_backup';
								},
								content() {
									player.draw();
								},
							},
							charge: {
								audio: 'sblongdan',
								trigger: {
									global: 'phaseEnd',
								},
								forced: true,
								filter(event, player) {
									return player.hs_canGetCharge();
								},
								content() {
									player.hs_addCharge();
								},
							},
						},
					};
				}
				//
				if (lib.config.mode == 'identity') {
					game.hs_chooseCharacter_ai = function (player, list, list2, back) {
						if (!list.length) list = [''];
						var listc = list.slice(0);
						listc.randomSort();
						if (listc.length < 2) listc.push('');
						if (_status.brawl && _status.brawl.chooseCharacterAi) {
							if (_status.brawl.chooseCharacterAi(player, list, list2, back) !== false) return;
						}
						var replace = function (choice) {
							var list0 = lib.characterReplace[choice];
							if (list0 && list0.length) {
								var list1 = list0.filter(function (character) {
									if (lib.filter.characterDisabled2(character)) return false;
									return !lib.filter.characterDisabled(character);
								});
								if (list1.length) return list1.randomGet();
							}
							return choice;
						};
						if (_status.event.zhongmode) {
							var choice = replace(listc[0]),
								choice2 = replace(listc[1]);
							if (get.config('double_character')) player.init(choice, choice2);
							else player.init(choice);
							if (player.identity == 'mingzhong') {
								player.hp++;
								player.maxHp++;
								player.update();
							}
						} else if (player.identity == 'zhu') {
							list2.randomSort();
							var choice, choice2;
							if (!_status.event.zhongmode && Math.random() < 0.85 && list2.length) {
								choice = list2[0];
								choice2 = list[0];
								if (choice2 == choice) choice2 = list[1];
							} else {
								choice = list[0];
								choice2 = list[1];
							}
							choice = replace(choice);
							choice2 = replace(choice2);
							if (get.config('double_character')) player.init(choice, choice2);
							else player.init(choice);
							if (game.players.length > 4) {
								player.hp++;
								player.maxHp++;
								player.update();
							}
						} else if (player.identity == 'zhong') {
							if (game.zhu.group && Math.random() < 0.9) {
								var choice,
									choice2 = listc[0],
									listg = listc.filter(function (char) {
										if (!lib.character[char]) return false;
										if (get.config('choose_group') && lib.character[char][1] == 'shen') return true;
										return lib.character[char][1] == game.zhu.group;
									});
								if (listg.length) choice = listg[0];
								else choice = listc[1];
								if (choice == choice2) choice2 = listc[1];
								choice = replace(choice);
								choice2 = replace(choice2);
								if (get.config('double_character')) player.init(choice, choice2);
								else player.init(choice);
							} else {
								var choice = replace(listc[0]),
									choice2 = replace(listc[1]);
								if (get.config('double_character')) player.init(choice, choice2);
								else player.init(choice);
							}
						} else if (player.identity == 'nei') {
							var listC = listc.sort(function (a, b) {
								var rank = function (name) {
									if (game.getRarity(name) == 'junk') return 1;
									if (game.getRarity(name) == 'common') return 2;
									if (game.getRarity(name) == 'rare') return 3;
									if (game.getRarity(name) == 'epic') return 4;
									if (game.getRarity(name) == 'legend') return 5;
								};
								return rank(b) - rank(a);
							});
							var choice = replace(listC[0]),
								choice2 = replace(listC[1]);
							if (get.config('double_character')) player.init(choice, choice2);
							else player.init(choice);
						} else if (game.zhu.group && Math.random() < 0.6) {
							var choice,
								choice2 = listc[0],
								listg = listc.filter(function (char) {
									return lib.character[char] && lib.character[char][1] != game.zhu.group;
								});
							if (listg.length) choice = listg[0];
							else choice = listc[1];
							if (choice == choice2) choice2 = listc[1];
							choice = replace(choice);
							choice2 = replace(choice2);
							if (get.config('double_character')) player.init(choice, choice2);
							else player.init(choice);
						} else {
							var listC = listc.sort(function (a, b) {
								var rank = function (name) {
									if (game.getRarity(name) == 'junk') return 1;
									if (game.getRarity(name) == 'common') return 2;
									if (game.getRarity(name) == 'rare') return 3;
									if (game.getRarity(name) == 'epic') return 3;
									if (game.getRarity(name) == 'legend') return 3;
								};
								return rank(b) - rank(a);
							});
							var choice = replace(listC[0]),
								choice2 = replace(listC[1]);
							if (get.config('double_character')) player.init(choice, choice2);
							else player.init(choice);
						}
						if (back) {
							list.remove(get.sourceCharacter(player.name1));
							list.remove(get.sourceCharacter(player.name2));
							for (var i = 0; i < list.length; i++) back.push(list[i]);
						}
						if (typeof lib.config.test_game == 'string' && player == game.me.next) player.init(lib.config.test_game);
						if (get.is.double(player.name1)) {
							player._groupChosen = true;
							player.group = get.is.double(player.name1, true).randomGet();
							player.node.name.dataset.nature = get.groupnature(player.group);
						} else if (get.config('choose_group') && player.group == 'shen' && !player.isUnseen(0)) {
							var list = lib.group.slice(0);
							list.remove('shen');
							if (game.hs_extensionCheck('假装无敌') && lib.config.extension_假装无敌_qingyao_guanfangshili) list = ['wei', 'shu', 'wu', 'qun', 'jin'];
							if (list.length)
								player.group = (function () {
									if (_status.mode != 'zhong') {
										if (game.zhu.name == 'yl_yuanshu') {
											if (player.identity == 'zhong') list.remove('qun');
											else return 'qun';
										}
										if (game.zhu.group) {
											if (player.identity == 'zhong') return game.zhu.group;
											else if (Math.random() < 0.65) list.remove(game.zhu.group);
										}
									}
									return list.randomGet();
								})();
						}
						player.node.name.dataset.nature = get.groupnature(player.group);
					};
					game.hs_funtionChange2('game.chooseCharacter', /event.ai/g, 'game.hs_chooseCharacter_ai');
				}
				//
				for (var i in lib.characterPack.huashui) {
					if (i.startsWith('hs_')) {
						var name = i.slice(3);
						if (!lib.characterReplace[name]) lib.characterReplace[name] = [];
						for (var j in lib.character) {
							if (j.length >= name.length) {
								var list = ['_', 'shen', 'yun'];
								for (var t of list) {
									var num = j.lastIndexOf(t);
									if (num != -1 && j.slice(num + t.length) == name) lib.characterReplace[name].add(j);
									else if (j == t + name) lib.characterReplace[name].add(j);
								}
							}
							if (get.translation(j).length) {
								if (get.translation(j) == get.translation(i).slice(1)) lib.characterReplace[name].add(j);
								else if (get.translation(j).slice(1) == get.translation(i).slice(1)) lib.characterReplace[name].add(j);
							}
						}
					}
				}
				for (var i in lib.characterReplace) {
					if (!lib.characterReplace[i]) delete lib.characterReplace[i];
					if (lib.characterReplace[i].length < 2) delete lib.characterReplace[i];
				}
				//win&&out
				if (config.jishuscore && ['huashui_mode', 'identity', 'doudizhu', 'guozhan'].includes(lib.config.mode) && !game.online) {
					var addOverDialogorigin = game.addOverDialog;
					game.addOverDialog = function (dialog, result) {
						for (var i of game.players.concat(game.dead)) {
							if (!i.storage._hs_countScore)
								i.storage._hs_countScore = {
									damage: 0,
									recover: 0,
									draw: 0,
									control: 0,
								};
						}
						var winner = [],
							loser = [],
							me = game.me._trueMe || game.me,
							players = game.players.concat(game.dead);
						if (lib.config.mode == 'huashui_mode') {
							if (_status.hs_set && _status.hs_countRecord) me.storage._hs_countScore.control = Math.pow(_status.hs_set - 1, 2) * 30;
							if (me.isAlive()) {
								winner = [me];
								for (var i of players) {
									if (i != me) loser.add(i);
								}
							} else {
								loser = [me];
								for (var i of players) {
									if (i != me) winner.add(i);
								}
							}
						} else if (lib.config.mode == 'identity') {
							var noHasDead = function (identity) {
								for (var i of game.dead) {
									if (i.identity == identity) return false;
								}
								return true;
							};
							for (var i of players) {
								if (i.identity == 'nei' && i.isAlive()) {
									var zhong = [],
										fan = [];
									for (var j of game.players) {
										if (j.identity == 'zhong' || j.identity == 'zhu') zhong.add(j);
										else if (j.identity == 'fan') fan.add(j);
									}
									i.storage._hs_countScore.control = (game.dead.length - Math.abs(zhong.length + 1 - fan.length) + 1) * 20;
								}
							}
							if (game.zhu.isAlive()) {
								for (var i of players) {
									if (['zhu', 'zhong'].includes(i.identity)) winner.add(i);
									else loser.add(i);
								}
								if (noHasDead('zhong')) {
									for (var i of winner) i.storage._hs_countScore.control = 100;
								}
							} else {
								for (var i of game.players) {
									if (i.identity == 'fan') winner.add(i);
									if (i.identity == 'zhong') loser.add(i);
								}
								if (winner.length || loser.length) {
									for (var i of players) {
										if (i.identity == 'fan') winner.add(i);
										else loser.add(i);
									}
									if (noHasDead('fan')) {
										for (var i of winner) i.storage._hs_countScore.control = 100;
									}
								} else {
									winner = game.players;
									loser = game.dead;
									for (var i of winner) i.storage._hs_countScore.control = players.length * 50;
								}
							}
							for (var i of players) {
								if (i.isAlive()) i.storage._hs_countScore.control += 10 * game.dead.length;
							}
						} else if (lib.config.mode == 'doudizhu') {
							if (game.zhu.isAlive()) {
								winner = [game.zhu];
								for (var i of players) {
									if (i != game.zhu) loser.add(i);
								}
							} else {
								loser = [game.zhu];
								for (var i of players) {
									if (i != game.zhu) winner.add(i);
								}
							}
						}
						for (var i of winner) i.storage._hs_countScore.control += 100;
						for (var i of players) {
							var score = 0;
							for (var j in i.storage._hs_countScore) score += i.storage._hs_countScore[j];
							i.技术分 = score;
						}
						var mvp = [],
							score = -1,
							table,
							tr,
							td;
						for (var i of players) {
							if (i.技术分 == score) mvp.add(i);
							else if (i.技术分 > score) {
								mvp = [i];
								score = i.技术分;
							}
						}
						_status.mvper = mvp;
						table = document.createElement('table');
						tr = document.createElement('tr');
						tr.appendChild(document.createElement('td'));
						td = document.createElement('td');
						td.innerHTML = '技术分';
						tr.appendChild(td);
						td = document.createElement('td');
						td.innerHTML = '攻击分数';
						tr.appendChild(td);
						td = document.createElement('td');
						td.innerHTML = '治疗分数';
						tr.appendChild(td);
						td = document.createElement('td');
						td.innerHTML = '辅助分数';
						tr.appendChild(td);
						td = document.createElement('td');
						td.innerHTML = '局势分数';
						tr.appendChild(td);
						table.appendChild(tr);
						dialog.add(ui.create.div('.placeholder'));
						dialog.content.appendChild(table);
						var showScore = function (player, tab) {
							player.局势分数 = player.storage._hs_countScore.control;
							player.治疗分数 = player.storage._hs_countScore.recover;
							player.攻击分数 = player.storage._hs_countScore.damage;
							player.辅助分数 = player.storage._hs_countScore.draw;
							var tr, td;
							tr = document.createElement('tr');
							if (_status.mvper.includes(player)) tr.style.color = 'orangered';
							td = document.createElement('td');
							td.innerHTML = get.translation(i);
							tr.appendChild(td);
							td = document.createElement('td');
							td.innerHTML = i.技术分;
							tr.appendChild(td);
							td = document.createElement('td');
							td.innerHTML = player.storage._hs_countScore.damage;
							tr.appendChild(td);
							td = document.createElement('td');
							td.innerHTML = player.storage._hs_countScore.recover;
							tr.appendChild(td);
							td = document.createElement('td');
							td.innerHTML = player.storage._hs_countScore.draw;
							tr.appendChild(td);
							td = document.createElement('td');
							td.innerHTML = player.storage._hs_countScore.control;
							tr.appendChild(td);
							tab.appendChild(tr);
						};
						if (winner.length) {
							table = document.createElement('table');
							for (var i of winner) showScore(i, table);
							dialog.add(ui.create.div('.placeholder'));
							dialog.content.appendChild(table);
						}
						if (loser.length) {
							table = document.createElement('table');
							table.style.opacity = '0.5';
							for (var i of loser) showScore(i, table);
							dialog.add(ui.create.div('.placeholder'));
							dialog.content.appendChild(table);
						}
						_status.showShouSha局势 = true;
						if (addOverDialogorigin) addOverDialogorigin.apply(this, arguments);
					};
				}
				//乱斗
				if (config.luandou && lib.config.mode == 'identity') {
					lib.skill._hs_luandou = {
						trigger: {
							global: 'gameStart',
						},
						forced: true,
						charlotte: true,
						_priority: 999,
						firstDo: true,
						filter(event, player) {
							if (_status.mode != 'normal') return false;
							return game.players.length > 4 && !game.hs_luandounum;
						},
						content() {
							var players = player.hs_filterOtherPlayer(function (current) {
								return current != game.zhu;
							});
							var list1 = [];
							for (var t of players) {
								if (t.special_identity) {
									list1.push(t.special_identity);
									t.special_identity = '';
								}
							}
							var list = ['zhong', 'fan', 'nei'];
							if (player.identity != 'zhu') list.remove(player.identity);
							var players0 = players.randomGets(list.length);
							for (var j = 0; j < list.length; j++) {
								players0[j].identity = list[j];
								players.remove(players0[j]);
							}
							for (var i of players) {
								i.identity = ['zhong', 'fan', 'fan', 'nei'].randomGet();
							}
							if (list1.length) {
								if (list1.includes('identity_zeishou')) {
									var fan = player
										.hs_filterOtherPlayer(function (current) {
											return current.identity == 'fan';
										})
										.randomGet();
									fan.special_identity = 'identity_zeishou';
									list1.remove('identity_zeishou');
								}
								var zhongs = player.hs_filterOtherPlayer(function (current) {
									return current.identity == 'zhong';
								});
								for (var n of zhongs) {
									if (list1.length) {
										var si = list1.randomGet();
										n.special_identity = si;
										list1.remove(si);
									} else break;
								}
							}
							game.hs_luandounum = true;
						},
					};
				}
			});
			if (config.jishuscore) {
				lib.skill._hs_countScore = {
					trigger: {
						player: ['changeHp', 'gainEnd', 'loseEnd'],
					},
					forced: true,
					firstDo: true,
					silent: true,
					popup: false,
					content() {
						var change = function (name, choice, num) {
							if (name && name.storage) {
								if (!name.storage._hs_countScore)
									name.storage._hs_countScore = {
										damage: 0,
										recover: 0,
										draw: 0,
										control: 0,
									};
								if (!name.storage._hs_countScore[choice]) name.storage._hs_countScore[choice] = 0;
								name.storage._hs_countScore[choice] += num;
							}
						};
						var evt = trigger.parent;
						if (trigger.name == 'changeHp') {
							if (evt.source) {
								if (evt.name == 'recover') {
									if (player.hp <= trigger.num) change(evt.source, 'recover', 3);
									change(evt.source, 'recover', 3 * trigger.num);
								} else if (evt.name == 'damage') {
									if (player.hp <= 0) change(evt.source, 'damage', 3);
									change(evt.source, 'damage', -3 * trigger.num);
								}
							}
						} else if (trigger.name == 'gain') {
							if (trigger.cards && trigger.cards.length) change(player, 'draw', trigger.cards.length);
						} else if (evt.parent.player != player) change(evt.parent.player, 'draw', trigger.cards.length);
					},
				};
			}
			//国战
			if (lib.characterPack.mode_guozhan) {
				if (config.hsGuoZhan) {
					var hs_guozhan = [];
					for (var i in lib.characterPack.huashui) {
						var gz_name = 'gz_' + i,
							info = lib.character[i];
						if (info[1] == 'huashui') info[4].add('doublegroup:qun:wei:shu:wu:jin');
						if (info[4].includes('hiddenSkill')) info[4].remove('hiddenSkill');
						lib.characterPack.mode_guozhan[gz_name] = info;
						hs_guozhan.add(gz_name);
					}
					lib.characterPack.mode_guozhan.gz_hs_zhonghui[1] = 'ye';
					lib.characterPack.mode_guozhan.gz_hs_jiaxu[1] = 'ye';
					lib.translate.hs_duoshi_info = '转换技,锁定技.你的手牌上限等于体力上限.阳:当你造成伤害,或一名角色进入濒死时,你失去体力至1点并增加等量体力上限,你视为拥有『缜略』.阴:当你受到伤害,或一名角色进入濒死时,你减少已损体力值一半的体力上限(向下取整)并摸等量牌,回复体力至体力上限,你视为拥有『帷幕』.';
					lib.characterPack.mode_guozhan.gz_hs_yangyi[4].add('doublegroup:shu:wei');
					lib.translate.hs_yuanfei_info = '限定技.当你进入濒死时,你可以减一点体力上限并回复一点体力,失去技能<度断>.';
					lib.characterPack.mode_guozhan.gz_hs_pangtong[4].add('doublegroup:wu:shu');
					lib.translate.hs_zhanji_info = '觉醒技.回合开始时,你获得『密策』.';
					lib.characterPack.mode_guozhan.gz_hs_xushu[4].add('doublegroup:shu:wei');
					lib.translate.hs_wuyan_info = '使命技.①游戏开始时,你须选择一名其他角色,当其成为除其以外角色使用牌的目标时,你可以交给其一张牌.②失败:当你或其受到不小于体力值的伤害时,你取消之,你失去『侠望』并移出游戏,直至其死亡或触发游戏结束结算';
					lib.characterPack.mode_guozhan.gz_hs_zuoci[4].add('doublegroup:qun:shu:wei:wu:jin');
					lib.characterPack.mode_guozhan.gz_hs_liuqi[4].add('doublegroup:shu:qun');
					//
					lib.characterSort.mode_guozhan.gz_huashui = hs_guozhan;
					lib.translate.gz_huashui = '划水池';
					lib.skill._hs_guozhanImage = {
						trigger: {
							global: 'gameDrawAfter',
							player: 'showCharacterAfter',
						},
						forced: true,
						charlotte: true,
						_priority: 999,
						firstDo: true,
						filter(event, player) {
							return get.mode() == 'guozhan';
						},
						content() {
							var list = [
								['hs_yangyi', 'wei'],
								['hs_pangtong', 'shu'],
								['hs_jiaxu', 'wei'],
							];
							for (var i of list) {
								if (player.identity == i[1]) {
									var name = i[0],
										file = `extension/划水池/image/skin/${name}/${name}2.jpg`;
									if (player.name == 'gz_' + name) player.node.avatar.setBackgroundImage(file);
									else if (player.name2 == 'gz_' + name) player.node.avatar2.setBackgroundImage(file);
								}
							}
						},
					};
				}
			}
		},
		precontent(huashui) {
			game.hs_extensionCheck = function (name) {
				return lib.config.extensions && lib.config.extensions.includes(name) && lib.config['extension_' + name + '_enable'];
			};
			game.hs_funtionChange = function (fun, last, find, after, text, last2, find2, after2) {
				try {
					if (!eval(fun)) return;
					var origin = eval(fun).toString(),
						num,
						num2,
						text0,
						text2;
					if (last) num = origin.lastIndexOf(find);
					else num = origin.indexOf(find);
					if (num == -1) return;
					if (after) num += find.length;
					if (find2) {
						if (last2) num2 = origin.lastIndexOf(find2);
						else num2 = origin.indexOf(find2);
						if (num2 <= num) return;
						if (after2) num2 += find2.length;
						text2 = origin.slice(num2);
					} else text2 = origin.slice(num);
					if (num == 0) text0 = '';
					else text0 = origin.slice(0, num);
					eval(fun + ' = ' + text0 + text + text2);
				} catch (e) { }
			};
			game.hs_funtionChange2 = function (fun, find, replace) {
				if (!eval(fun)) return;
				var origin = eval(fun).toString();
				if (!replace) replace = '';
				var newfun = origin.replace(find, replace);
				eval(fun + ' = ' + newfun);
			};
			//dir
			game.createDir('extension/划水池/background/image/');
			game.createDir('extension/划水池/background/music/');
			//css
			lib.init.css('extension/划水池', 'extension');
			//huashui_mode
			if (lib.config.extension_划水池_huashui_mode) {
				var huashui_mode_info = {
					name: 'huashui_mode',
					start() {
						'step 0';
						var playback = localStorage.getItem(lib.configprefix + 'playback');
						if (playback) {
							ui.create.me();
							ui.arena.style.display = 'none';
							ui.system.style.display = 'none';
							_status.playback = playback;
							localStorage.removeItem(lib.configprefix + 'playback');
							var store = lib.db.transaction(['video'], 'readwrite').objectStore('video');
							store.get(parseInt(playback)).onsuccess = function (e) {
								if (e.target.result) {
									game.playVideoContent(e.target.result.video);
								} else {
									alert('播放失败:找不到录像');
									game.reload();
								}
							};
							event.finish();
						} else {
							_status.mode = get.config('mode_set');
							if (_status.mode == 'three') _status.hs_set = 4;
							else if (_status.mode == 'two') _status.hs_set = 3;
							else _status.hs_set = 2;
						}
						('step 1');
						game.prepareArena(_status.hs_set);
						('step 2');
						for (var i of game.players) i.getId();
						game.chooseCharacter();
						('step 3');
						if (ui.coin) _status.coinCoeff = get.coinCoeff([game.me.name]);
						var players = get.players(lib.sort.position);
						var info = [];
						for (var i of players) {
							if (i == game.me) {
								i.identity = 'zhui';
								i.node.identity.setBackgroundImage('extension/划水池/image/card/identity_zhu.jpg');
							} else {
								i.identity = 'fani';
								i.node.identity.setBackgroundImage('extension/划水池/image/card/identity_fan.jpg');
							}
							info.push({
								name: i.name1,
								name2: i.name2,
								identity: i.identity,
							});
							i.ai.shown = 1;
						}
						_status.videoInited = true;
						game.addVideo('init', null, info);
						event.trigger('gameStart');
						('step 4');
						var players = game.players.slice(0);
						players.sortBySeat(game.me);
						for (var i = 0; i < players.length; i++) {
							players[i].seatNum = i + 1;
						}
						('step 5');
						game.gameDraw(game.me, function (current) {
							if (current == game.me) return 4 + _status.hs_set;
							return 4;
						});
						game.replaceHandcards(game.players);
						('step 6');
						game.phaseLoop(game.me);
						game.me.showGiveup();
					},
					game: {
						addRecord(bool) {
							if (typeof bool == 'boolean') {
								if (!lib.config.gameRecord.huashui_mode) lib.config.gameRecord.huashui_mode = { data: {} };
								if (!_status.hs_countRecord) _status.hs_countRecord = 0;
								var mode = get.config('mode_set'),
									data = lib.config.gameRecord.huashui_mode.data,
									str = '';
								if (typeof data[mode] != 'number') data[mode] = 0;
								if (_status.hs_countRecord > data[mode]) data[mode] = _status.hs_countRecord;
								for (var j in data) {
									if (data[j] && _status.hs_set) str += '1v' + (_status.hs_set - 1).toString() + ' 最高胜场:' + data[j] + '<br>';
								}
								lib.config.gameRecord.huashui_mode.str = str;
								game.saveConfig('gameRecord', lib.config.gameRecord);
							}
						},
						getVideoName() {
							var str = get.translation(game.me.name);
							return [str, '无尽远征 - ' + get.translation(_status.mode) + '人 - ' + _status.hs_countRecord + '场'];
						},
						chooseCharacter() {
							var next = game.createEvent('chooseCharacter', false);
							next.showConfig = true;
							next.addPlayer = true;
							next.ai = function (player, list, back) {
								var listc = list.slice(0, 2);
								for (var i = 0; i < listc.length; i++) {
									var listx = lib.characterReplace[listc[i]];
									if (listx && listx.length) listc[i] = listx.randomGet();
								}
								player.init(listc[0]);
								if (back) {
									list.remove(get.sourceCharacter(player.name1));
									list.remove(get.sourceCharacter(player.name2));
									for (var i = 0; i < list.length; i++) back.push(list[i]);
								}
								player.node.name.dataset.nature = get.groupnature(player.group);
							};
							next.setContent(function () {
								'step 0';
								ui.arena.classList.add('choose-character');
								event.list = [];
								for (var i in lib.character) {
									if (!lib.filter.characterDisabled(i)) event.list.add(i);
								}
								event.list.randomSort();
								var list = event.list.slice(0, parseInt(get.config('choice_num')));
								if (_status.auto) {
									event.ai(game.me, list);
									lib.init.onfree();
								} else {
									var dialog = ui.create.dialog('选择角色', 'hidden', [list, 'character']);
									game.me.chooseButton(dialog, true, 2).set('onfree', true);
									var createCharacterDialog = function () {
										event.dialogxx = ui.create.characterDialog('heightset');
										if (ui.cheat2) {
											ui.cheat2.addTempClass('controlpressdownx', 500);
											ui.cheat2.classList.remove('disabled');
										}
									};
									if (lib.onfree) lib.onfree.push(createCharacterDialog);
									else createCharacterDialog();
									ui.create.cheat2 = function () {
										ui.cheat2 = ui.create.control('自由选将', function () {
											if (this.dialog == _status.event.dialog) {
												if (game.changeCoin) game.changeCoin(50);
												this.dialog.close();
												_status.event.dialog = this.backup;
												this.backup.open();
												delete this.backup;
												game.uncheck();
												game.check();
												if (ui.cheat) {
													ui.cheat.addTempClass('controlpressdownx', 500);
													ui.cheat.classList.remove('disabled');
												}
											} else {
												if (game.changeCoin) game.changeCoin(-10);
												this.backup = _status.event.dialog;
												_status.event.dialog.close();
												_status.event.dialog = _status.event.parent.dialogxx;
												this.dialog = _status.event.dialog;
												this.dialog.open();
												game.uncheck();
												game.check();
												if (ui.cheat) ui.cheat.classList.add('disabled');
											}
										});
										if (lib.onfree) ui.cheat2.classList.add('disabled');
									};
									ui.create.cheat = function () {
										_status.createControl = ui.cheat2;
										ui.cheat = ui.create.control('更换', function () {
											if (ui.cheat2 && ui.cheat2.dialog == _status.event.dialog) return;
											if (game.changeCoin) game.changeCoin(-3);
											event.list = event.list.concat(list);
											event.list.randomSort();
											list = event.list.slice(0, parseInt(get.config('choice_num')));
											var buttons = ui.create.div('.buttons');
											var node = _status.event.dialog.buttons[0].parentNode;
											_status.event.dialog.buttons = ui.create.buttons(list, 'character', buttons);
											_status.event.dialog.content.insertBefore(buttons, node);
											buttons.addTempClass('start');
											node.remove();
											game.uncheck();
											game.check();
										});
										delete _status.createControl;
									};
									if (!_status.brawl || !_status.brawl.chooseCharacterFixed) {
										if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
										if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
									}
								}
								('step 1');
								if (ui.cheat) {
									ui.cheat.close();
									delete ui.cheat;
								}
								if (ui.cheat2) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
								if (result.buttons) {
									event.list.remove(result.buttons[0].link);
									event.list.remove(result.buttons[1].link);
									game.hs_getCharacter(result.buttons[0].link, result.buttons[1].link);
									game.hs_chooseCharacter();
								}
								('step 2');
								for (var i = 1; i < game.players.length; i++) {
									event.list.randomSort();
									event.ai(game.players[i], event.list.slice(0, parseInt(get.config('choice_num'))), event.list);
								}
								_status.characterlist = [];
								for (var i of event.list) _status.characterlist.add(i);
								('step 3');
								for (var i of game.players) _status.characterlist.remove(i.name);
								setTimeout(function () {
									ui.arena.classList.remove('choose-character');
								}, 500);
							});
						},
						updateRoundNumber() {
							if (!_status.hs_countRecord) _status.hs_countRecord = 0;
							game.broadcastAll(
								function (num0, num1, num2, top) {
									if (ui.cardPileNumber) ui.cardPileNumber.innerHTML = '第' + num0 + 1 + '场战役<br>累计第' + num1 + '轮<br>剩余牌: ' + num2;
									_status.pileTop = top;
								},
								_status.hs_countRecord,
								game.roundNumber,
								ui.cardPile.childNodes.length,
								ui.cardPile.firstChild
							);
						},
						hs_chooseCharacter() {
							if (game.hs_hasCharacters.length) {
								var next = game.createEvent('hs_chooseCharacter', false);
								next.setContent(function () {
									'step 0';
									game.me
										.chooseButton(ui.create.dialog('选择出场的角色', [game.hs_hasCharacters, 'character']), true)
										.set('filterButton', function (button) {
											return button.link != game.me.name;
										})
										.set('ai', function (button) {
											return Math.random();
										});
									('step 1');
									if (result.bool) {
										game.addRecentCharacter(result.buttons[0].link);
										game.me.hsre_init(result.buttons[0].link);
									}
								});
							}
						},
						hs_getCharacter() {
							for (var i = 0; i < arguments.length; i++) {
								var name = arguments[i],
									info = lib.character[name];
								if (info) {
									game.hs_hasCharacters.add(name);
									game.hs_Charactersinfo[name] = {
										hp: get.infoHp(info[2]) + _status.hs_set - 2,
										maxHp: get.infoMaxHp(info[2]) + _status.hs_set - 2,
										hujia: get.infoHujia(info[2]) + _status.hs_set - 2,
										sex: info[0],
										group: info[1],
										skills: info[3].slice(0),
										disableJudge: false,
										disabledSlots: {},
										expandedSlots: {},
									};
								}
							}
						},
						hs_removename2() {
							if (game.me.name2) {
								var info = game.hs_Charactersinfo[game.hs_name1],
									info2 = game.hs_Charactersinfo[game.hs_name2],
									hp1 = info.hp,
									maxHp1 = info.maxHp,
									hujia1 = info.hujia,
									skills = info.skills,
									hp2 = info2.hp,
									maxHp2 = info2.maxHp,
									hujia2 = info2.hujia,
									skills2 = info2.skills;
								game.me.maxHp = Math.ceil((game.me.maxHp * maxHp1) / (maxHp1 + maxHp2));
								game.me.hp = Math.ceil((game.me.hp * hp1) / (hp1 + hp2));
								game.me.hujia = Math.ceil((game.me.hujia * hujia1) / (hujia1 + hujia2));
								for (var i of skills2) {
									if (!skills.includes(i)) game.me.hs_removeSkill(i);
								}
								game.me.node.name2.innerHTML = '';
								delete game.me.name2;
								delete game.me.node.name2.innerHTML;
								game.me.node.avatar2.hide();
								game.me.classList.remove('fullskin2');
								game.me.update();
							}
							game.hs_Charactersinfo[game.hs_name1] = {
								hp: game.me.hp,
								maxHp: game.me.maxHp,
								skills: game.me.hs_getSkills(true),
								sex: game.me.sex,
								group: game.me.group,
								hujia: game.me.hujia,
								disableJudge: game.me.isDisabledJudge(),
								disabledSlots: game.me.disabledSlots,
								expandedSlots: game.me.expandedSlots,
							};
						},
						hs_continue(player, source) {
							game.addRecord(true);
							if (player == game.me) {
								game.hs_removename2();
								game.me.hs_clearSkills();
								game.hs_hasCharacters.remove(game.hs_name1);
								game.me.discard(game.me.getCards('hejsx')).forceDie = true;
								if (game.hs_hasCharacters.length) {
									game.me.revive(1, false);
									game.hs_chooseCharacter();
									game.me.draw(_status.hs_set + Math.ceil(_status.hs_countRecord / 6));
								} else game.checkResult();
							} else {
								if (get.population('fani') != 0) {
									game.asyncDraw(game.filterPlayer(), function (current) {
										if (_status.event.source && current == _status.event.source) return _status.hs_set + 1;
										return 1;
									});
								} else {
									player.discard(player.getCards('hejsx')).forceDie = true;
									var next = game.createEvent('hs_continue', false);
									next.setContent(function () {
										'step 0';
										_status.hs_countRecord++;
										game.addRecord(true);
										game.hs_removename2();
										event.num = Math.ceil(_status.hs_countRecord / 5);
										var list = ['摸' + (event.num + _status.hs_set).toString() + '张牌'],
											list0 = ['摸牌'];
										if (_status.characterlist.length > event.num + parseInt(get.config('choice_num'))) {
											list.add('获得' + event.num.toString() + '张新的备选武将牌');
											list0.add('新将');
										}
										if (game.hs_hasCharacters.length > 1) {
											list.add('更换出场武将牌并摸' + (event.num + _status.hs_set - 3).toString() + '张牌', '将一张武将牌作为副将出场,并再下场结束时失去该武将牌');
											list0.add('换将', '副将');
										}
										if (_status.hs_countRecord > 5) {
											list.add('就这样吧');
											list0.add('结束');
										}
										game.me
											.chooseControl(list0)
											.set('choiceList', list)
											.set('prompt', '已进行' + _status.hs_countRecord + '场战役,当前最高纪录为' + lib.config.gameRecord.huashui_mode.data[get.config('mode_set')] + '场<br>请选择接下来的行动')
											.set('ai', function () {
												return '摸牌';
											});
										('step 1');
										event.control = result.control;
										if (result.control == '摸牌') game.me.draw(event.num + _status.hs_set);
										else if (result.control == '新将') {
											var list = _status.characterlist.randomGets(event.num + parseInt(get.config('choice_num')));
											game.me.chooseButton(
												event.num,
												ui.create.dialog('选择获得的备选武将牌', [list, 'character']),
												function (button) {
													return Math.random();
												},
												true
											);
										} else if (result.control == '换将') {
											game.hs_chooseCharacter();
											game.me.draw(event.num + _status.hs_set - 3);
										} else if (result.control == '副将') {
											game.me
												.chooseButton(ui.create.dialog('选择副将武将牌', [game.hs_hasCharacters, 'character']), true)
												.set('filterButton', function (button) {
													return button.link != game.hs_name1;
												})
												.set('ai', function (button) {
													return Math.random();
												});
										} else game.checkResult();
										('step 2');
										if (result.buttons) {
											if (event.control == '新将') {
												for (var i of result.buttons) {
													_status.characterlist.remove(i.link);
													game.hs_getCharacter(i.link);
												}
											} else if (event.control == '副将') {
												var character = result.buttons[0].link;
												game.hs_hasCharacters.remove(character);
												game.me.classList.add('fullskin2');
												game.me.node.avatar2.setBackground(character, 'character');
												game.me.name2 = result.buttons[0].link;
												game.hs_name2 = result.buttons[0].link;
												var info = game.hs_Charactersinfo[character];
												if (info) {
													game.me.node.name2.innerHTML = get.slimName(character);
													game.me.node.avatar2.show();
													game.me.hp += info.hp;
													game.me.maxHp += info.maxHp;
													game.me.hujia += info.hujia;
													game.me.addSkill(info.skills);
													game.me.checkConflict();
												}
												game.me.update();
											}
										}
										for (var current of game.filterPlayer2()) {
											if (current != game.me) current.discard(current.getCards('hejsx')).forceDie = true;
										}
										('step 3');
										for (var current of game.filterPlayer2()) {
											if (_status.characterlist.length) {
												if (current != game.me) {
													var name = _status.characterlist.randomGet();
													_status.characterlist.remove(name);
													current.revive(1, false);
													current.init(name);
													if (current.storage.nohp) {
														current.storage.rawHp += Math.floor(_status.hs_countRecord / 8);
														current.storage.rawMaxHp += Math.floor(_status.hs_countRecord / 4);
														current.storage.rawHujia += Math.floor(_status.hs_countRecord / 12);
													} else {
														current.maxHp += Math.floor(_status.hs_countRecord / 4);
														current.hp += Math.floor(_status.hs_countRecord / 8);
														current.hujia += Math.floor(_status.hs_countRecord / 12);
													}
													current.update();
													game.log('#b' + name, '加入战场');
													current.draw(4 + Math.floor(_status.hs_countRecord / 5));
												}
											} else game.checkResult();
										}
										_status.event.parent.finish();
									});
								}
							}
						},
						checkResult() {
							if (!_status.hs_countRecord) _status.hs_countRecord = 0;
							if (game.me.isAlive()) game.over('已成功进行' + _status.hs_countRecord + '场战役,当前最高纪录为' + lib.config.gameRecord.huashui_mode.data[get.config('mode_set')] + '场');
							else game.over('你不幸的倒在了第' + (_status.hs_countRecord + 1) + '场战役,当前最高纪录为' + lib.config.gameRecord.huashui_mode.data[get.config('mode_set')] + '场');
						},
						hs_hasCharacters: [],
						hs_Charactersinfo: {},
					},
					translate: {
						zhui: '我',
						fani: '敌',
						zhui2: '我方',
						fani2: '敌方',
					},
					element: {
						player: {
							hasZhuSkill() {
								return false;
							},
							dieAfter(source) {
								game.hs_continue(this, source);
							},
							phaseDraw() {
								var next = game.createEvent('phaseDraw');
								next.player = this;
								if (this == game.me) next.num = _status.hs_set;
								else next.num = 2;
								next.setContent('phaseDraw');
								return next;
							},
							hsre_init(character) {
								var info = game.hs_Charactersinfo[character];
								if (!info) game.checkResult();
								this.revive(1, false);
								game.hs_name1 = character;
								this.hs_clearSkills();
								this.node.avatar.setBackground(character, 'character');
								this.node.avatar.show();
								this.node.count.show();
								this.node.equips.show();
								this.name = character;
								this.name1 = character;
								this.sex = info.sex;
								this.group = info.group;
								this.hp = info.hp;
								this.maxHp = info.maxHp;
								this.hujia = info.hujia;
								this.classList = ['player'];
								this.classList.add('fullskin', 'selectable');
								this.expandedSlots = info.expandedSlots;
								this.disabledSlots = info.disabledSlots;
								this.storage._disableJudge = info.disableJudge;
								this.$syncDisable();
								this.node.intro.innerHTML = lib.config.intro;
								this.node.name.dataset.nature = get.groupnature(this.group);
								lib.setIntro(this);
								this.node.name.innerHTML = get.slimName(character);
								this.showCharacter(0, false);
								this.hs_setJieMark(character);
								this.addSkill(info.skills);
								this.checkConflict();
								lib.group.add(this.group);
								if (this.inits) {
									for (var i = 0; i < lib.element.player.inits.length; i++) lib.element.player.inits[i](this);
								}
								if (this._inits) {
									for (var i = 0; i < this._inits.length; i++) this._inits[i](this);
								}
								this.update();
								return this;
							},
						},
					},
					get: {
						rawAttitude(from, to) {
							if (from.identity == to.identity) return 10;
							return -10;
						},
					},
				};
				var huashui_mode_set = {
					translate: '无尽远征',
					extension: '划水池',
					config: {
						mode_set: {
							name: '游戏模式',
							init: 'one',
							item: {
								one: '1v1',
								two: '1v2',
								three: '1v3',
							},
							restart: true,
							forced: true,
						},
						change_choice: {
							name: '开启换将卡',
							init: true,
							onclick(bool) {
								game.saveConfig('change_choice', bool, this._link.config.mode);
								if (get.mode() != 'identity' || (!_status.event.parent.showConfig && !_status.event.showConfig)) return;
								if (!ui.cheat && get.config('change_choice')) ui.create.cheat();
								else if (ui.cheat && !get.config('change_choice')) {
									ui.cheat.close();
									delete ui.cheat;
								}
							},
						},
						free_choose: {
							name: '自由选将',
							init: true,
							onclick(bool) {
								game.saveConfig('free_choose', bool, this._link.config.mode);
								if (!_status.event.parent.showConfig && !_status.event.showConfig) return;
								if (!ui.cheat2 && get.config('free_choose')) ui.create.cheat2();
								else if (ui.cheat2 && !get.config('free_choose')) {
									ui.cheat2.close();
									delete ui.cheat2;
								}
							},
						},
						choice_num: {
							name: '候选武将数',
							init: '7',
							restart: true,
							item: {
								5: '五',
								6: '六',
								7: '七',
								8: '八',
								9: '九',
								10: '十',
							},
						},
					},
				};
				game.addMode('huashui_mode', huashui_mode_info, huashui_mode_set);
				if (game.hs_extensionCheck('手杀ui') && lib.config.extension_手杀ui_qiDongYe == 'othersOn') lib.mode.huashui_mode.splash = 'ext:划水池/image/card/mode1.jpg';
				else lib.mode.huashui_mode.splash = 'ext:划水池/image/card/mode.jpg';
			}
			//group
			lib.group.add('huashui');
			lib.translate.huashui = '水';
			lib.translate['huashui2'] = '<span data-nature=waterm style="color: deepskyblue">划水</span>';
			lib.groupnature.huashui = 'metal';
			//characterPack
			game.import('character', function () {
				var huashui = {
					name: 'huashui',
					connect: true,
					characterSort: {
						huashui: {
							huashui_wei: ['hs_zhonghui', 'hs_zhugedan', 'hs_xiahoudun', 'hs_caorui', 'hs_caopi', 'hs_caochong', 'hs_caoren', 'hs_dengai', 'hs_yujin', 'hs_haozhao', 'hs_xizhicai', 'hs_wanglang', 'hs_wangcan', 'hs_zhanghe', 'hs_caocao', 'hs_xunyou', 'hs_zhenghun', 'hs_caiyang'],
							huashui_shu: ['hs_zhaoyun', 'hs_huangzhong', 'hs_fazheng', 'hs_xujing', 'hs_weiyan', 'hs_yangyi', 'hs_zhouqun', 'hs_xushu', 'hs_guanyu', 'hs_liuqi', 'hs_zhugeliang', 'hs_masu', 'hs_liubei', 'hs_zixu', 'hs_maliang'],
							huashui_wu: ['hs_luxun', 'hs_lvmeng', 'hs_sunquan', 'hs_xusheng', 'hs_pangtong', 'hs_sunluban', 'hs_sunxiu', 'hs_luotong', 'hs_heqi', 'hs_liuzan', 'hs_lvdai', 'hs_lingtong'],
							huashui_qun: ['hs_jiaxu', 'hs_liubiao', 'hs_yanwen', 'hs_huatuo', 'hs_gaoshun', 'hs_zhangjiao', 'hs_zhangbao', 'hs_zhangliang', 'hs_dongzhuo', 'hs_zhangqiying', 'hs_zuoci', 'hs_quyi', 'hs_yuanshao', 'hs_zhangling'],
							huashui_jin: ['hs_wangyuanji', 'hs_jiachong', 'hs_duyu', 'hs_yanghu', 'hs_fuxuan', 'hs_simazhao'],
							huashui_shen: [],
							huashui_bonus: ['gentle_huashui', 'air_huashui', 'stub_huashui', 'memory_huashui'],
						},
					},
					character: {
						gentle_huashui: ['male', 'huashui', 4, ['hs_liuyi', 'hs_wude', 'hs_sixiu', 'hs_baya'], []],
						air_huashui: ['female', 'huashui', 3, ['hs_yixin'], []],
						stub_huashui: ['female', 'huashui', 3, ['hs_huiqiao'], []],
						memory_huashui: ['female', 'huashui', 3, ['hs_yingqiao'], []],
						hs_zhonghui: ['male', 'wei', 4, ['hs_quanji', 'hs_zili'], []],
						hs_zhaoyun: ['male', 'shu', 4, ['hs_yajiao', 'hs_jizhu'], []],
						hs_zhugedan: ['male', 'wei', 3, ['hs_zongbi', 'hs_zhengwu', 'hs_jupan'], []],
						hs_xiahoudun: ['male', 'wei', '1/5/3', ['hs_ganglie', 'hs_fenxi', 'hs_danjing'], []],
						hs_jiaxu: ['male', 'qun', '3/5', ['hs_duoshi', 'hs_luanwu'], []],
						hs_caorui: ['male', 'wei', 3, ['hs_mingjian', 'hs_huituo', 'hs_xingshuai'], ['zhu']],
						hs_liubiao: ['male', 'qun', 4, ['hs_zishou', 'hs_zongshi', 'hs_xiwang'], ['zhu']],
						hs_caopi: ['male', 'wei', '3/4', ['hs_fangzhu', 'hs_xingshang', 'hs_songwei'], ['zhu']],
						hs_yanwen: ['male', 'qun', 4, ['hs_shuangxiong', 'hs_bingzhan'], []],
						hs_luxun: ['male', 'wu', 4, ['hs_renfu', 'hs_zhanhuo'], []],
						hs_huangzhong: ['male', 'shu', 4, ['hs_dingzhan', 'hs_liegong', 'hs_jingshi'], []],
						hs_caochong: ['male', 'wei', 3, ['hs_chengxiang', 'hs_renxin'], []],
						hs_fazheng: ['male', 'shu', 3, ['hs_zijiao', 'hs_xuanhuo'], []],
						hs_caoren: ['male', 'wei', '3/5/3', ['hs_crjushou', 'hs_jiewei'], []],
						hs_huatuo: ['male', 'qun', 3, ['hs_wuqin', 'hs_liaodu', 'hs_mafei'], []],
						hs_xujing: ['male', 'shu', 3, ['hs_boming', 'hs_yuxu'], []],
						hs_lvmeng: ['male', 'wu', 4, ['hs_qinxue', 'hs_dujiang'], []],
						hs_weiyan: ['male', 'shu', '2/5/2', ['hs_kuanggu', 'hs_qimou'], []],
						hs_yangyi: ['male', 'shu', 4, ['hs_duoduan', 'hs_juanxia', 'hs_yuanfei'], []],
						hs_sunquan: ['male', 'wu', 4, ['hs_zhiheng', 'hs_tongye', 'hs_jiuyuan'], ['zhu']],
						hs_zhouqun: ['male', 'shu', 3, ['hs_tiansuan'], []],
						hs_dengai: ['male', 'wei', 4, ['hs_tuntian', 'hs_zaoxian'], []],
						hs_xusheng: ['male', 'wu', 4, ['hs_pojun', 'hs_yicheng'], []],
						hs_wangyuanji: ['female', 'jin', '3/4', ['hs_qianchong', 'hs_shangjian'], []],
						hs_pangtong: ['male', 'wu', '3/4', ['hs_guolun', 'hs_songsang'], []],
						hs_yujin: ['male', 'wei', 4, ['hs_zhenyu', 'hs_yizhong'], []],
						hs_sunluban: ['female', 'wu', '3/4', ['hs_zenhui', 'hs_jiaojin'], []],
						hs_xushu: ['male', 'shu', '3/4', ['hs_xiawang', 'hs_congru', 'hs_wuyan'], []],
						hs_gaoshun: ['male', 'qun', 4, ['hs_xianzhen', 'hs_jinjiu'], []],
						hs_jiachong: ['male', 'jin', 4, ['hs_jianhui', 'hs_xiongshu'], []],
						hs_guanyu: ['male', 'shu', 4, ['hs_wusheng', 'hs_weifan', 'hs_zhuihun'], []],
						hs_sunxiu: ['male', 'wu', '3/4', ['hs_yanzhu', 'hs_xingxue', 'hs_zhaofu'], ['zhu']],
						hs_luotong: ['male', 'wu', 4, ['hs_renzheng'], []],
						hs_zhangjiao: ['male', 'qun', 3, ['hs_xianshou', 'hs_chuandao', 'hs_tiangong', 'hs_huangtian'], ['zhu']],
						hs_zhangbao: ['male', 'qun', 3, ['hs_fuzhou', 'hs_jishi'], []],
						hs_zhangliang: ['male', 'qun', 4, ['hs_jijun', 'hs_fangtong'], []],
						hs_dongzhuo: ['male', 'qun', 5, ['hs_hengzheng', 'hs_jiuchi', 'hs_baoling'], ['zhu']],
						hs_heqi: ['male', 'wu', 4, ['hs_qizhou'], []],
						hs_liuzan: ['male', 'wu', 4, ['hs_kangge', 'hs_zizu'], []],
						hs_haozhao: ['male', 'wei', '2/3', ['hs_zhucang', 'hs_zhengu'], []],
						hs_zhangqiying: ['female', 'qun', 3, ['hs_chongjing', 'hs_huanlong'], []],
						hs_xizhicai: ['male', 'wei', 1, ['hs_shiming', 'hs_qizuo', 'hs_chouce'], []],
						hs_zuoci: ['male', 'qun', 1, ['hs_dunxing'], []],
						hs_duyu: ['male', 'jin', '3/4', ['hs_sanchen', 'hs_wuku', 'hs_pozhu'], []],
						hs_liuqi: ['male', 'shu', '3/4', ['hs_wenji', 'hs_tunjiang'], []],
						hs_yanghu: ['male', 'jin', '3/4', ['hs_mingfa', 'hs_rongbei'], []],
						hs_zhugeliang: ['male', 'shu', 3, ['hs_kongcheng', 'hs_jifeng', 'hs_qixing'], []],
						hs_quyi: ['male', 'qun', 4, ['hs_jiaozi', 'hs_fuji'], []],
						hs_wanglang: ['male', 'wei', 3, ['hs_gushe', 'hs_wangxue'], []],
						hs_wangcan: ['male', 'wei', '3/4', ['hs_ansong', 'hs_shanxi', 'hs_lvming'], []],
						hs_zhanghe: ['male', 'wei', 4, ['hs_qiaobian', 'hs_zhilve'], []],
						hs_lvdai: ['male', 'wu', 4, ['hs_qinguo', 'hs_zhiti'], []],
						hs_caocao: ['male', 'wei', 4, ['hs_yingjia', 'hs_xieling', 'hs_xionglve', 'hs_jianxiong'], ['zhu']],
						hs_lingtong: ['male', 'wu', 4, ['hs_xuanlve', 'hs_yongjin'], []],
						hs_masu: ['male', 'shu', 4, ['hs_zhiman', 'hs_xinzhan'], []],
						hs_liubei: ['male', 'shu', '2/5/2', ['hs_jieying', 'hs_xieming', 'hs_fuhan'], ['zhu']],
						hs_zixu: ['male', 'shu', 3, ['hs_xiujiu', 'hs_yuming'], []],
						hs_fuxuan: ['male', 'jin', 3, ['hs_binggang', 'hs_ee'], []],
						hs_yuanshao: ['male', 'qun', 4, ['hs_zhenshuo', 'hs_aoni'], ['zhu']],
						hs_xunyou: ['male', 'wei', 3, ['hs_qice'], []],
						hs_maliang: ['male', 'shu', 3, ['hs_zishu', 'hs_xiemu'], []],
						hs_zhangling: ['male', 'qun', 3, ['hs_shoulu', 'hs_fuqu'], []],
						hs_simazhao: ['male', 'jin', 4, ['hs_zhaojie', 'hs_tuishi', 'hs_shechao'], []],
						hs_zhenghun: ['male', 'wei', 3, ['hs_pitian', 'hs_fenghuo'], []],
						hs_caiyang: ['male', 'wei', 4, ['hs_zhuixi', 'hs_mochou'], []],
					},
					characterIntro: {
						hs_zhonghui: '字士季.魏名将,太傅钟繇之子.公元263年,他与邓艾带兵攻打蜀国,最终导致蜀国灭亡.之后钟会设计害死邓艾,联合姜维准备自立,最终因部下反叛失败,与姜维一同死于兵变.',
						hs_zhaoyun: '字子龙,常山真定人.身长八尺,姿颜雄伟.长坂坡单骑救阿斗,先主云:<子龙一身都是胆也.>',
						hs_zhugedan: '字公休,曹魏后期的重要将领,诸葛亮的族弟.曾与司马师一同平定毌丘俭、文钦的叛乱.之后因与被诛的夏侯玄、邓飏交厚,且见到王淩、毌丘俭等人的覆灭而心不自安,于甘露二年起兵,并得到东吴的支援,但于次年被镇压,被大将军司马胡奋所斩.',
						hs_xiahoudun: '字元让,沛国谯人.有拔矢啖睛之勇,性格勇猛刚烈.',
						hs_jiaxu: '字文和,武威姑臧人.三国时期魏国著名谋士.曾先后担任三国军阀李傕、张绣、曹操的谋士.官至魏国太尉,谥曰肃侯.',
						hs_caorui: '魏文帝曹丕长子,曹魏第二位皇帝.在位期间指挥曹真、司马懿等人成功防御了吴、蜀的多次攻伐,并且平定鲜卑,攻灭公孙渊,颇有建树.',
						hs_liubiao: '刘表,字景升,山阳郡高平(今山东微山)人.东汉末年名士,汉室宗亲,荆州牧,汉末群雄之一.',
						hs_caopi: '字子桓,三国时期著名的政治家、文学家,曹魏的开国皇帝,公元220－226年在位.沛国谯人,魏武帝曹操与武宣卞皇后的长子.去世后庙号高祖,谥为文皇帝,葬于首阳陵.',
						hs_yanwen: '东汉末年河北袁绍部下武将,素有威名.颜良与文丑一起作为袁绍军队的勇将而闻名.建安四年(199),袁绍以颜良、文丑为将,率精卒十万,准备攻许都;次年,兵进黎阳,遣颜良攻白马.终均亡于关羽刀下.',
						hs_luxun: '本名陆议,字伯言,吴郡吴县人.历任东吴大都督、丞相.吴大帝孙权兄孙策之婿,世代为江东大族.以谦逊之书麻痹关羽,夺取荆州,又有忍辱负重,火烧连营大破蜀军.',
						hs_huangzhong: '字汉升,今河南南阳人.汉末三国时期蜀汉名将.本为刘表部下中郎将,后归刘备,并助刘备攻益州刘璋,在定军山一战中阵斩曹操部下名将夏侯渊.备称汉中王后改封后将军,赐关内侯.',
						hs_caochong: '字仓舒,曹操之子.从小聪明仁爱,与众不同,深受曹操喜爱.留有<曹冲称象>的典故.曹操几次对群臣夸耀他,有让他继嗣之意.可惜曹冲在建安十三病逝,年仅13岁.',
						hs_fazheng: '字孝直,本为刘璋部下,刘备围成都时劝说刘璋投降,而后又与刘备进取汉中,献计将曹操大将夏侯渊斩首.法正善奇谋,深受刘备信任和敬重.',
						hs_caoren: '字子敬,汉族,临淮东城人,中国东汉末年东吴的著名军事统帅.他曾为孙权提出鼎足江东的战略规划,因此得到孙权的赏识,于周瑜死后代替周瑜领兵,守陆口.曾单刀赴会关羽于荆州.',
						hs_huatuo: '字元化,一名旉,沛国谯县(今安徽亳州)人,东汉末年著名的医学家.与董奉、张仲景并称为<建安三神医>..他医术全面,尤其擅长外科,精于手术.并精通内、妇、儿、针灸各科;创编了<五禽戏>,是世界上第一位发明麻醉剂<麻沸散>及发明用针灸医病的先驱者、创始人.在<三国演义>中,华佗曾为关羽刮骨疗毒.',
						hs_xujing: '许靖(？—222年),字文休.汝南郡平舆县(今河南省平舆县)人.汉末至三国蜀汉时期重臣、名士、评论家.许靖因与从弟许邵俱以品评人物而闻名于世.后被刘翊推举为孝廉,任尚书郎.曾先后投奔孔伷、陈祎、许贡、王朗等人,于孙策攻王朗前与家属俱避难交州,受到交趾太守士燮礼待.其后受益州牧刘璋邀请,相继为巴郡、广汉、蜀郡太守.于刘备包围成都时欲越墙叛逃,为刘璋所获.刘备定蜀后欲将其弃用,在法正的建议下方以其为左将军长史.建安二十三年(218年),刘备称汉中王,任命许靖为汉中王傅.章武元年(221年),刘备称帝,任命许靖为司徒,位列三公.章武二年(222年),去世.有文集二卷.',
						hs_lvmeng: '字子明,汝南富陂人,东吴名将,原有<吴下阿蒙>之贬称,后受孙权劝说,奋发读书,最终成就一代名将.陈寿评曰:<吕蒙勇而有谋断,识军计,谲郝普,擒关羽,最其妙者.初虽轻果妄杀,终于克己,有国士之量,岂徒武将而已乎!>',
						hs_weiyan: '字文长,义阳人.三国时期蜀汉名将,魏延作战勇猛,性格孤傲,提出有著名的<子午谷奇谋>.诸葛亮死后,魏延因被陷害谋反而遭杨仪一党所杀.',
						hs_yangyi: '杨仪(？－235年),字威公,襄阳(今湖北襄阳)人,三国时期蜀汉官员.最初为荆州刺史傅群的主簿,后投奔关羽,任为功曹.关羽遣其至成都,大受刘备赞赏,擢为尚书.因与尚书令刘巴不和,调为弘农太守.建兴三年(225年)任丞相参军,此后一直跟随诸葛亮战斗.亮卒,他部署安全退军.诸葛亮在生前定蒋琬继己任,杨仪仅拜中军师.建兴十三年(235年),因多出怨言,被削职流放至汉嘉郡.但杨仪仍不自省,又上书诽谤,言辞激烈,最后下狱,自杀身亡.',
						hs_sunquan: '吴大帝,字仲谋,吴郡富春县人.统领吴与蜀魏三足鼎立,制衡天下.',
						hs_zhouqun: '周群(生卒年不详),字仲直,巴西阆中(今四川阆中)人.周群年少时随父周舒学习占验天算之术.后来刘璋聘请周群为师友从事,其预言大多得以应验.刘备割据益州,任命周群为儒林校尉.曾劝说刘备攻汉中必定不利,事后得到应验,被举荐为茂才.',
						hs_dengai: '字士载,义阳棘阳人.三国时期魏国杰出的军事家、将领.公元263年他与钟会分别率军攻打蜀汉,最后他率先进入成都,使得蜀汉灭亡.后因遭到钟会的污蔑和陷害,被司马昭猜忌而被收押,最后与其子邓忠一起被卫瓘派遣的武将田续所杀害.',
						hs_xusheng: '字文向,琅邪莒县人.三国时期吴将.徐盛最初因讨伐山贼有功而被加为中郎将,后于濡须口之战中表现出色,得到孙权的赞赏.魏文帝曹丕伐吴时,徐盛以疑城之计退去魏军.',
						hs_wangyuanji: '王元姬(217年—268年4月20日),东海郯县(今山东郯城西北)人.三国时期曹魏经学家王朗之孙女、王肃之女,晋文帝司马昭妻子,晋武帝司马炎与齐王司马攸的生母. 王元姬幼时便通<诗经>、<论语>,嫁司马昭后竭尽妇道、谦虚谨慎.其人颇有远见,曾预言钟会谋反之事.泰始元年(265年),司马炎建立西晋,尊王元姬为皇太后,宫号曰崇化宫.王元姬身处太后之位,提倡节俭,身体力行,作为众妃子的表率.在其治理之下,后宫井井有条,众人和睦相处. 泰始四年(268年),王元姬崩逝,终年五十二岁.谥号文明皇后,与司马昭合葬于崇阳陵.',
						hs_pangtong: '庞统,字士元,襄阳(治今湖北襄阳)人.三国时刘备帐下谋士,官拜军师中郎将.才智与诸葛亮齐名,人称<凤雏>.在进围雒县时,统率众攻城,不幸被流矢击中去世,时年三十六岁.追赐统为关内侯,谥曰靖侯.庞统死后,葬于落凤庞统墓坡.',
						hs_yujin: '字文则,泰山钜平人.三国时期曹魏武将.本为鲍信部将,后属曹操,曹操称赞他可与古代名将相比.然而在建安二十四年的襄樊之战中,于禁在败给关羽后投降,致使一代名将晚节不保.',
						hs_sunluban: '孙权之女.孙鲁班与孙权二子孙和不睦.孙权长子孙登死后,孙和被立为太子.孙鲁班向孙权进谗言废孙和太子之位,孙和被废后忧愤而死.',
						hs_xushu: '徐庶本名徐福,出身寒门.早年为人报仇,获救后改名徐庶.后与同郡石广元避难于荆州,与司马徽、诸葛亮、崔州平等人来往密切.刘备屯驻新野时,徐庶前往投奔,并向刘备推荐诸葛亮.徐庶南下时因母亲被曹操所获,辞别刘备,进入曹营.后来此事被艺术加工为<徐庶进曹营,一言不发>等歇后语,被广为流传.而徐庶也成为孝子的典范被加以称赞.魏文帝时,徐庶官至右中郎将、御史中丞.',
						hs_gaoshun: '中国东汉末年将领,吕布帐下中郎将.史载高顺为人清白有威严,不好饮酒,所统率的部队精锐非常,号称<陷阵营>.屡进忠言于吕布,吕布虽知其忠而不能用.曹操击破吕布后,高顺被曹操所杀.',
						hs_jiachong: '贾充(217年—282年),字公闾,平阳襄陵(今山西襄汾)人,三国曹魏至西晋时期大臣,曹魏豫州刺史贾逵之子.西晋王朝的开国元勋.出身平阳贾氏.曾参与镇压淮南二叛和弑杀魏帝曹髦,因此深得司马氏信任,其女儿贾褒(一名荃)及贾南风分别嫁予司马炎弟司马攸及次子司马衷,与司马氏结为姻亲,地位显赫.晋朝建立后,转任车骑将军、散骑常侍、尚书仆射,后升任司空、太尉等要职.更封鲁郡公.咸宁末,为使持节、假黄钺、大都督征讨吴国.吴国平定后,增邑八千户.太康三年(282年),贾充去世.西晋朝廷追赠他为太宰,礼官议谥曰荒,司马炎不采纳,改谥为武.有集五卷.',
						hs_guanyu: '关羽,字云长.曾水淹七军、擒于禁、斩庞德、威震华夏,吓得曹操差点迁都躲避,但是东吴偷袭荆州,关羽兵败被害.后传说吕蒙因关羽之魂索命而死.',
						hs_sunxiu: '孙权第六子,孙綝发动政变罢黜孙亮后,迎立孙休为帝.后孙綝专权,孙休遣使丁奉等人将其诛杀.孙休在位期间,颁布良制,嘉惠百姓,促进了东吴的繁荣.',
						hs_luotong: '骆统(193年－228年),字公绪.会稽郡乌伤县(今浙江义乌)人.东汉末年至三国时期吴国将领、学者,陈国相骆俊之子.骆统二十岁时已任乌程国相,任内有政绩,使得国中民户过万.又迁为功曹,行骑都尉.曾劝孙权尊贤纳士,省役息民.后出任为建忠中郎将.将军凌统逝世后,统领其部曲.因战功迁偏将军,封新阳亭侯,任濡须督.黄武七年(228年),骆统去世,年仅三十六岁.有集十卷,今已佚.',
						hs_zhangjiao: '张角(？－184年),钜鹿(秦治今河北平乡、东汉治今河北宁晋)人.中国东汉末年农民起义军<黄巾军>的领袖.张角修太平道,利用其中的某些宗教观念和社会政治思想,组织群众,约于灵帝建宁(168年-172年)初传道.中平元年(184年),张角以<苍天已死,黄天当立,岁在甲子,天下大吉>为口号,自称<天公将军>,率领群众发动起义,史称<黄巾起义>.不久张角病死,起义军也很快被汉朝所镇压.后世的明教以张角为教祖.',
						hs_zhangbao: '东汉末年黄巾起义的首领之一,张角之弟,张梁之兄.中平元年(184)随兄张角起义,号称<地公将军>.',
						hs_dongzhuo: '字仲颖,陇西临洮人.东汉末年少帝、献帝时权臣,西凉军阀.官至太师、郿侯.其为人残忍嗜杀,倒行逆施,招致群雄联合讨伐,但联合军在董卓迁都长安不久后瓦解.后被其亲信吕布所杀.',
						hs_heqi: '贺齐早年在平定山越的战争中立有大功,讨平叛乱无数,身经百战,所向披靡,深受孙权器重.后来在与曹魏的多次边境争斗中也屡立战功,官至后将军,并领徐州牧.他生性奢绮,尤其军事方面,兵甲器械极为精良,所乘的船只奢华至极.',
						hs_liuzan: '留赞(183年～255年),字正明,会稽长山人(今浙江省金华市)人.少为会稽郡吏,曾参与镇压黄巾起义,后被东吴大将凌统所引用,任屯骑校尉.诸葛恪率众战于东兴,留赞为前部,会战先陷阵,大败魏师,以功升左将军.吴五凤二年(公元255年)留赞任左护军,随孙峻征淮南,因病撤军,被魏将蒋班围困于道,力战而死,时年七十三岁.',
						hs_haozhao: '郝昭(生卒年不详),字伯道,太原人,中国东汉末年至曹魏时期武将.郝昭少年从军,担任部曲督,后屡立战功,逐渐晋升为杂号将军,后受曹真推荐镇守陈仓,防御蜀汉.太和二年(228年),诸葛亮率军北伐,为郝昭所阻,劝降不成,昼夜相攻二十余日后被迫退军.魏明帝因此封其为关内侯.不久病逝.',
						hs_zhangqiying: '褒女者,汉中人也,褒君之后,因以为姓.居汉、沔二水之间.幼而好道,冲静无营.既笄,浣纱于浕水上,云雨晦冥,若有所感而孕.父母责之,忧患而疾.临终谓其母曰:<死后见葬,愿以牛车载送西山之上.’言讫而终.父母置之车中,未及驾牛,其车自行.逾汉、沔二水,横流而渡,直上浕口平元山顶,平元即浕口化也.家人追之,但见五云如盖,天乐骇空,幢节导从,见女升天而去.及视车中,空棺而已.邑人立祠祭之,水旱祈祷俱验.今浕口山顶有双辙迹犹存.其后,陈世安亦于此山得道,白日升天.',
						hs_xizhicai: '先是时,颍川戏志才,筹画士也,太祖甚器之.早卒.太祖与荀彧书曰:<自志才亡后,莫可与计事者.汝、颍固多奇士,谁可以继之？>彧荐嘉.',
						hs_zuoci: '左慈,字元放,庐江人,汉族,自号乌角先生,东汉末年著名方士,少居天柱山,明五经,兼通星纬,明六甲,传说能役使鬼神,坐致行厨.<后汉书>说他少有神道.',
						hs_duyu: '杜预(222年－285年初),字元凯,京兆郡杜陵县(今陕西西安)人,中国魏晋时期军事家、经学家、律学家,曹魏散骑常侍杜恕之子.他积极备战,支持晋武帝司马炎对孙吴作战,并在咸宁五年(279年)成为晋灭吴之战的统帅之一.战后因功进封当阳县侯.杜预耽思经籍,博学多通,多有建树,时誉为<杜武库>.他也是明朝之前唯一一位同时进入文庙和武庙之人.',
						hs_liuqi: '刘琦(？－209年).兖州山阳郡高平县(今山东省济宁市微山县两城镇)人.荆州牧刘表的长子、谏议大夫刘琮兄.官至荆州刺史.建安十四年(209年)病逝.刘琦知道自己会被蔡瑁陷害,故此特意去找诸葛亮请教救命之计(诸葛亮是刘备的部属).诸葛亮怕会被卷入嫡庶争斗,因此不太想说.刘琦知道诸葛亮的心意,于是把他骗到二楼的书房,命人拿走梯子(这就是上屋抽梯的由来),说:<现在你和我也走不下去,你说话也只有我听到.>于是诸葛亮不得已,告诉他春秋时晋国申生在国内被处死,重耳流亡外国才保住性命的事例,教他出奔.',
						hs_yanghu: '羊祜(221年－278年12月27日),字叔子,兖州泰山郡南城县人.西晋时期杰出的战略家、政治家、文学家,曹魏上党太守羊衜之子,汉末才女蔡文姬的外甥.泰始五年(269年),出任车骑将军、开府仪同三司,都督荆州诸军事,坐镇襄阳.在荆州屯田兴学,以德怀柔,深得军民之心;扩充军备,训练士兵,全力筹备灭吴计划.咸宁四年(278年),羊祜去世,临终前举荐度支尚书杜预接替职务.死后获赠侍中、太傅,谥号为<成>.两年后,晋武帝依其策划灭吴,完成统一.唐宋时期,羊祜得以配享武庙.',
						hs_zhugeliang: '诸葛亮(181年—234年10月8日),字孔明,号卧龙,琅琊阳都(今山东省临沂市沂南县)人,三国时期蜀汉丞相,中国古代杰出的政治家、军事家、发明家、文学家.章武元年(221年),刘备称帝,任命诸葛亮为丞相,伐吴失败后,刘备于永安举国托付于诸葛亮.刘禅继位后,封诸葛亮为武乡侯,领益州牧.勤勉谨慎,大小政事必亲自处理,赏罚严明;与东吴联盟,改善和西南各族的关系;实行屯田政策,加强战备.前后五次北伐中原,未能实现兴复汉室的目标.终因积劳成疾,于建兴十二年(234年)病逝于五丈原(今陕西省宝鸡市岐山境内),享年五十四岁 .后主刘禅追谥为忠武侯,后世常以武侯尊称.',
						hs_quyi: '麴义(又作曲义、鞠义),凉州西平郡人,生卒年不详,是东汉末年军阀袁绍部下的将领,能征善战,屡建战功,早年在凉州,精通羌人战法,率领着袁绍的精锐部队.在界桥之战,以八百兵大破公孙瓒两万步兵和一万骑兵.后来,由于自恃功高而骄纵不轨,被袁绍所杀.',
						hs_wanglang: '王朗(？－228年),本名王严,字景兴.东海郡郯县(今山东省临沂市郯城县)人.汉末至三国曹魏时期重臣、经学家.朗早年师从太尉杨赐,因通晓经籍而被拜为郎中.后因杨赐去世而弃官服丧,不应孝廉之命.徐州刺史陶谦举其为茂才,拜徐州治中从事.后升任会稽太守,任内获百姓爱戴.建安元年(196年),王朗率军抵御孙策,终被孙策擒获.王朗甘忍流放的困境,拒绝为孙策效力.后来受到曹操的征辟,辗转数年才抵达许都,被拜为谏议大夫、参司空军事.魏王国建立后,以军祭酒兼领魏郡太守,又任少府、奉常、大理等职.曹丕继王位时,迁御史大夫,封安陵亭侯.曹魏建立后,改任司空,进封乐平乡侯.曹叡继位后,代华歆为司徒,进封兰陵侯.',
						hs_wangcan: '王粲(177年—217年2月17日),字仲宣.山阳郡高平县(今山东省微山县两城镇)人.东汉末年文学家、官员,<建安七子>之一,太尉王龚曾孙、司空王畅之孙.王粲自少即有才名,为学者蔡邕所赏识.司徒想征辟他为黄门侍郎,王粲因为长安局势混乱,没有赴任,选择南下依附荆州牧刘表,但未受到刘表重用.建安十三年(208年),丞相曹操南征荆州,刘表之子刘琮举州投降,王粲也归于曹操,深得曹氏父子信赖,被赐爵关内侯.建安十八年(213年),魏王国建立,王粲任侍中.建安二十二年(216年),随曹操南征孙权,于北还途中病逝,终年四十一岁.王粲善属文,其诗赋为建安七子之冠,又与曹植并称<曹王>.',
						hs_zhanghe: '张郃(？－231年),字儁乂,河间郡鄚县(今河北省任丘市)人.汉末三国时期魏国名将.跟随曹操攻河北,跟随张辽定淮南,跟随夏侯渊平凉州,跟随曹操夺汉中,屡建战功.建安二十年(215年),进军巴西,迁徙民众到汉中,后被蜀将张飞击败.接任荡寇将军.建安二十三年(218年),跟随夏侯渊进入汉中定军山迎战刘备.夏侯渊战死,代理主帅,率部安全撤退.后屯陈仓.曹丕称帝后,迁左将军,受封鄚县侯,跟随曹真击平安定羌胡,又随夏侯尚围攻江陵.太和二年(228年),以特进、右将军的身份随曹真抵御诸葛亮北伐.在街亭之战中大破马谡,迫使诸葛亮退回汉中,迁征西车骑将军.太和五年(231年),司马懿不听张郃劝告,张郃迫不得已领兵追击蜀军,追至木门,中箭身亡,谥曰壮侯.张郃用兵巧变,善列营阵,善估形势,善用地形.蜀汉的诸葛亮等都忌惮张郃.',
						hs_lvdai: '吕岱(161年－256年10月21日),字定公,广陵海陵(今江苏省如皋市)人.三国时期吴国重臣、将领.吕岱一生戮力奉公,为孙吴开疆拓土,功勋赫赫.太平元年九月己丑日(256年10月21日),吕岱去世,年九十六.',
						hs_caocao: '曹操,字孟德,小字阿瞒,沛国谯县(今安徽省亳州市)人 .中国古代杰出的政治家、军事家、文学家、书法家.东汉末年权臣,曹魏政权的奠基者.太尉曹嵩之子.董卓擅政时,散家财起兵,与袁绍等共讨董卓.初平三年(192年)据兖州,分化诱降黄巾军三十余万,选其精锐编为青州军.建安元年(196年),迎汉献帝至许,自为司空,行车骑将军事,总揽朝政.建安十三年(208年),进位丞相.同年率军南征,迫降荆州刘琮,但在赤壁之战中败于孙刘联军.建安十六年(211年),在渭南之战击破关中联军.建安十八年(213年),封魏公.建安二十年(215年),亲征张鲁,取汉中.次年(216年),进爵魏王.建安二十五年(220年),病死于洛阳,享年六十六岁.其子曹丕代汉称帝后,被追尊庙号为太祖,谥号武皇帝,葬于高陵.',
						hs_lingtong: '凌统(189年－217年或237年),字公绩,吴郡馀杭(今浙江杭州市余杭区)人,三国时期吴国名将.凌操之子.凌统在军旅中亲贤礼士,轻财重义,有国士之风.建安十三年(208年),孙权再次攻打江夏,凌统部队为先锋,斩敌将张硕,破其水军,吴军最终得以斩黄祖,大胜而还.被孙权任为承烈都尉.建安二十年(215年),随军攻破皖,升为荡寇中郎将,领沛相.又随吕蒙取长沙、零陵、桂阳三郡,任右部督.从益阳回来后,跟随孙权攻打合肥.孙权未能攻下合肥而撤军.撤军时,前部军队已经出发,魏将张辽等突然出现在津北,包围孙权.凌统率亲近士兵三百冲入敌围,护卫孙权突围而出.凌统回身再战,左右士兵全部战死,凌统依然亲自斩杀数十敌兵.直到孙权彻底安全后才退还.因此,凌统创伤甚重,多亏卓氏良药才得以不死.战后,被拜为偏将军.',
						hs_masu: '马谡(190年－228年),字幼常,襄阳宜城(今湖北宜城南)人,侍中马良之弟,三国时期蜀汉官员、将领.初以荆州从事身份跟随刘备入蜀,历任绵竹县令、成都县令、越嶲太守.蜀汉丞相诸葛亮任用他为参军.马谡才器过人,好论军计.诸葛亮向来对他深为器重,每次接见谈论,从白天到黑夜.建兴六年(228年),马谡在诸葛亮北伐时,因违背诸葛亮作战指令,而导致街亭失守,蜀军撤军后,马谡被诸葛亮处死.',
						hs_liubei: '汉昭烈帝刘备,字玄德,涿郡涿县人,西汉中山靖王刘胜之后,三国时期蜀汉开国皇帝、政治家.史家多称其为先主.刘备少年时拜卢植为师,而后参与镇压黄巾起义.因为自身实力有限,刘备在诸侯混战过程中屡遭失败,先后依附公孙瓒、陶谦、曹操、袁绍、刘表等多个诸侯.但因其始终坚持以德服人的行为准则,受到了四方名士的尊敬,至有陶谦、刘表等放弃让自己的儿子继承基业,而是选择将自己的领地徐州、荆州让给刘备统领.刘备于赤壁之战后,先后拿下荆州、益州,建立了蜀汉政权.而后因为关羽被东吴所害,刘备不听群臣劝阻,执意发动对吴国的战争,结果兵败夷陵,最终于章武三年(223年)病逝于白帝城,终年六十三岁,谥号昭烈皇帝.刘备弘毅宽厚,知人待士,百折不挠,其临死前举国托付给诸葛亮的行为被陈寿赞为<古今之盛轨>.',
						hs_zixu: '紫虚上人,居于锦屏山中的异人,能知人生死贵贱.刘璋派遣刘璝、张任、泠苞、邓贤四人前往雒城守备,四人途经锦屏山,向紫虚上人询问此战吉凶,紫虚上人留下八句言语,预测了庞统之死,又说四人定数难逃,不必再问.',
						hs_yuanshao: '袁绍(？-202年),字本初,汝南汝阳(今河南商水一带)人.东汉末年军阀,汉末群雄之一.袁绍出身于大官僚家庭.灵帝死后,袁绍与外戚何进谋诛宦官.事泄,何进被杀,他尽杀宦官.董卓专权后,袁绍被迫逃往冀州(今河北中南部),以其家族声势号召讨董卓,并被推为盟主.初平四年(193年),率军攻农民起义军黑山军根据地鹿肠山(今河南浚县西南),杀人数万.后遭黑山军张燕部和屠各、乌桓等少数民族起义军联合抗击而罢兵.建安三年(198年),袁绍围易京(今河北雄县西北),城破,公孙瓒自杀.建安五年(200年),在官渡(今河南中牟东北)大战中,为曹操所败.',
						hs_xunyou: '荀攸(157年-214年),字公达,汉末颍阴(今许昌市魏都区)人,是荀彧的堂侄,曹操的重要谋士.荀攸自幼机灵敏捷,汉献帝时,被任命为黄门侍郎.董卓被杀后,荀彧把其推荐给曹操,担任汝南的太守.建安三年(198年),荀攸随曹操出征张绣,临战前为曹操出谋划策,但曹操未采纳,导致战事极为不利,后荀攸又帮曹操重设奇兵,最终击败了敌军.曹操征伐吕布时,荀攸与郭嘉又为其献计活捉了吕布.平定河北期间,荀攸力排众议,主张曹操消灭袁绍诸子,平复冀州.建安十二年(207年),荀攸升任为中军师.建安十九年(214年),荀攸跟随曹操南征孙权时,病死途中.荀攸不仅才智过人,谋略超众,而且为人忠厚谦让,受人敬重,为曹操统一北方大业做出了一定贡献.曹操对荀攸极为器重,评价很高,曹操下令论功封赏时曾说:<忠正密谋,抚安内外,文若(荀彧)是也,公达(荀攸)其次也.>',
						hs_maliang: '马良(187年～222年),字季常,襄阳宜城(今湖北省宜城市)人,三国时期蜀汉官员,马谡之兄.马良兄弟五人都有才华名气,而马良是五人中最为出色.因眉毛中有白毛,人称白眉马良.因此有<马氏五常,白眉最良>的赞誉.建安十四年(209年),刘备担任荆州牧,征辟为州从事.马良与诸葛亮关系友善,曾奉命出使东吴,受到孙权恭敬接待.章武元年(221年),刘备称帝,建立蜀汉政权,任命马良为侍中.章武二年(222年),刘备东征东吴,派马良招纳五溪少数民族.同年,刘备在夷陵之战中兵败,马良遇害身亡.',
						hs_zhangling: '张道陵(34年2月22日—156年),字辅汉,原名陵,道教正一道实际创立者,汉朝东汉时期丰邑(今江苏徐州丰县)人.太上老君降临蜀地,<授以三天正法,命为天师>,张道陵整合当时的:黄老派、方仙道、文始派等先秦修道团体,创立道教称正一盟威之道.后世尊称为<老祖天师>、<正一真人>、<三天扶教大法师>、高明上帝、张天师.著作<老子想尔注>,弟子有3000多人,设立24治,奠基天师道.张道陵、葛玄、许逊、萨守坚合称四大天师.张道陵创建道教的背景:当时在巴蜀一带,原有巴人信奉原始巫教,大规模的淫祀而害民.而这些祀奉鬼妖(学名为:妖邪)的法教巫师聚众敛财,无恶不作.张天师携王长、赵升二位弟子和黄帝九鼎丹经,来到北邙山修行,平定了那些祸害百姓的巫妖之教.川渝一带流传的张天师以太上老君剑印符箓大破鬼兵的故事就是以此为原型的.',
						hs_simazhao: '司马昭(211年—265年9月6日),字子上,河内郡温县(今河南省温县)人.三国时期曹魏权臣,西晋王朝的奠基人之一,晋宣帝司马懿与宣穆皇后张春华次子、晋景帝司马师同母弟、晋武帝司马炎之父.',
						hs_zhenghun: '郑浑(生卒年不详),字文公.开封(今河南省开封市)人.汉末及三国时期曹魏大臣,东汉名儒郑众曾孙、名士郑泰之弟.郑浑早年避乱淮南,后转投豫章太守华歆.又被曹操辟为掾属,历任下蔡县长、邵陵县令,任内颇有政绩,深得民心.任左冯翊时,击杀扰乱郡县的梁兴,又击败作乱的山贼.历任上党太守、京兆尹、丞相掾属等职.曹丕称帝后,拜侍御史,加驸马都尉.先后任阳平、沛郡太守,任内兴修水利,使农田常年丰收,被百姓称为<郑陂>.后转任山阳和魏郡太守.魏明帝曹叡听闻郑浑的事迹之后,下诏将其政绩布告天下.官至将作大匠.卒年不详.',
						hs_caiyang: '蔡阳(？－201年),又作蔡扬,东汉丞相曹操部下武将,汝南太守.于建安六年(201)奉曹操之命攻击与刘备联合的汝南贼龚都等人,兵败被刘备所杀.明代小说<三国演义>改编为<云长擂鼓斩蔡阳>.',
					},
					characterTitle: {
						hs_zhonghui: '谋谟之勋',
						hs_zhaoyun: '常胜将军',
						hs_zhugedan: '琅琊功傲',
						hs_xiahoudun: '独眼的罗刹',
						hs_jiaxu: '文和乱武',
						hs_caorui: '明国之君',
						hs_liubiao: '跨蹈汉南',
						hs_caopi: '大魏文帝',
						hs_yanwen: '虎狼双雄',
						hs_luxun: '雄略儒将',
						hs_huangzhong: '老当益壮',
						hs_caochong: '仁爱神童',
						hs_fazheng: '奇谋善图',
						hs_caoren: '蓝色高达',
						hs_huatuo: '外科圣手',
						hs_xujing: '汉中王傅',
						hs_lvmeng: '恐惧魔王',
						hs_weiyan: '地狱血魔',
						hs_yangyi: '狷狭怨诽',
						hs_sunquan: '大魏吴王',
						hs_zhouqun: '占天明徵',
						hs_dengai: '凿险缒幽',
						hs_xusheng: '破敌卫疆',
						hs_wangyuanji: '<span data-nature=thunder>秉德清贞</span>',
						hs_pangtong: '凤雏',
						hs_yijin: '威严毅重',
						hs_sunluban: '为虎作伥',
						hs_xushu: '<span data-nature=soilmm>侠儒兼备</span>',
						hs_gaoshun: '<span data-nature=graymx>陷阵克敌</span>',
						hs_jiachong: '<span data-nature=black>悖逆篡弑</span>',
						hs_guanyu: '<span data-nature=firemm>义薄云天</span>',
						hs_sunxiu: '<span data-nature=woodmm>志善好学</span>',
						hs_luotong: '<span data-nature=wood>蹇谔匪躬</span>',
						hs_zhangjiao: '<span data-nature=metalmm>大贤良师</span>',
						hs_zhangbao: '<span data-nature=metalmm>大医</span>',
						hs_zhangliang: '<span data-nature=metalmm>大医</span>',
						hs_dongzhuo: '<span data-nature=black>狼戾贼忍</span>',
						hs_heqi: '<span data-nature=wood>马踏群峦</span>',
						hs_liuzan: '<span data-nature=wood>鸷猛壮烈</span>',
						hs_haozhao: '<span data-nature=watermx>万军之拒</span>',
						hs_zhangqiying: '<span data-nature=metal>冲静无营</span>',
						hs_xizhicai: '<span data-nature=water>天妒英才</span>',
						hs_zuoci: '<span data-nature=metal>少有神道</span>',
						hs_duyu: '<span data-nature=keymm>智名克彰</span>',
						hs_liuqi: '<span data-nature=orange>上屋抽梯</span>',
						hs_yanghu: '<span data-nature=keymm>执德鹤璋</span>',
						hs_zhugeliang: '<span data-nature=firemm>鞠躬尽瘁</span>',
						hs_quyi: '<span data-nature=graymx>界桥先登</span>',
						hs_wanglang: '<span data-nature=watermm>曹魏三公</span>',
						hs_wangcan: '<span data-nature=watermm>文若春华</span>',
						hs_zhanghe: '<span data-nature=watermm>料敌机先</span>',
						hs_lvdai: '<span data-nature=wood>通达治体</span>',
						hs_caocao: '<span data-nature=watermx>乱世奸雄</span>',
						hs_lingtong: '<span data-nature=wood>旋勇重义</span>',
						hs_masu: '<span data-nature=firemm>才器过人</span>',
						hs_liubei: '<span data-nature=firemm>惟贤惟德</span>',
						hs_zixu: '<span data-nature=firemm>趋吉避凶</span>',
						hs_fuxuan: '<span data-nature=keymm>辞正匪躬</span>',
						hs_yuanshao: '<span data-nature=metal>四世三公</span>',
						hs_xunyou: '<span data-nature=watermx>经达权变</span>',
						hs_maliang: '<span data-nature=firemm>贞实令士</span>',
						hs_zhangling: '<span data-nature=metal>祖天师</span>',
						hs_simazhao: '<span data-nature=keymm>聪明夙智</span>',
						hs_zhenghun: '<span data-nature=watermx>勤稼茂德</span>',
						hs_caiyang: '<span data-nature=watermx>刀祖宗</span>',
					},
					skill: {
						//彩蛋1
						hs_liuyi: {
							trigger: {
								player: 'phaseBegin',
								global: 'gameDrawAfter',
							},
							forced: true,
							_priority: 500,
							audio: 'ext:划水池/audio:4',
							use(text, num) {
								var next = game.createEvent(_status.event.name + '_use');
								next.player = _status.event.player;
								next.text = text;
								next.num = num;
								next.setContent(function () {
									'step 0';
									var skills = game.hs_getAllSkills(event.num, player, function (info, skill) {
										if (skill == 'hs_zhenyu') return false;
										var name = get.translation(skill);
										for (var i = 0; i < name.length; i++) {
											if (event.text.test(name[i]) == true) return true;
										}
										return false;
									});
									if (skills.length) {
										event.videoId = lib.status.videoId++;
										var func = function (list, id) {
											var dialog = ui.create.dialog('forcebutton');
											dialog.videoId = id;
											dialog.add('选择获得一个技能');
											for (var i = 0; i < list.length; i++) {
												dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">『' + get.translation(list[i]) + '』</div><div>' + game.getSkillInfo(list[i]) + '</div></div>');
											}
											dialog.addText(' <br> ');
										};
										if (player == game.me) func(skills, event.videoId);
										player.chooseControl(skills);
									} else {
										game.log('没有足够的备选技能');
										event.finish();
									}
									('step 1');
									game.broadcastAll('closeDialog', event.videoId);
									if (result.control) {
										player.addTempSkill(result.control, { player: 'phaseBeforeStart' });
										player.hs_setSkillAudio(result.control, 'hs_liuyi');
									}
								});
								return next;
							},
							content() {
								lib.skill.hs_liuyi.use(/礼|乐|射|御|书|数/, 6);
							},
						},
						hs_wude: {
							trigger: {
								player: 'phaseBegin',
								global: 'gameDrawAfter',
							},
							forced: true,
							_priority: 400,
							content() {
								lib.skill.hs_liuyi.use(/温|良|恭|俭|让/, 5);
							},
						},
						hs_sixiu: {
							trigger: {
								player: 'phaseBegin',
								global: 'gameDrawAfter',
							},
							forced: true,
							_priority: 300,
							content() {
								lib.skill.hs_liuyi.use(/恭|敬|惠|义/, 4);
							},
						},
						hs_baya: {
							trigger: {
								player: 'phaseBegin',
								global: 'gameDrawAfter',
							},
							forced: true,
							_priority: 200,
							content() {
								lib.skill.hs_liuyi.use(/琴|棋|书|画|诗|香|花|茶/, 8);
							},
						},
						//彩蛋2
						hs_yixin: {
							trigger: {
								player: 'changeHp',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							usable: 1,
							content() {
								'step 0';
								var dialog = ui.create.dialog(false);
								dialog.add('请输入代码片段');
								var div = document.createElement('div');
								var input = div.appendChild(document.createElement('input'));
								input.placeholder = '请输入代码片段';
								dialog.add(div);
								var Click = function () {
									dialog.remove();
									game.log(player, '输入了' + input.value);
									if (input.value != '') event.str = input.value;
									else event.str = 'hhhhhhhhhhhhhhhhhhhhhhhhhhhh';
									game.resume();
								};
								if (!event.isMine()) {
									list = ['trigger.parent.excluded.add(player)', 'player.draw', 'player.gain', 'player.recover', 'player.gainMaxHp', 'trigger.num++', 'num--', 'baseDamage++', 'game.hasPlayer', 'player.addSkill', 'addTempSkill', 'cancel(', 'player.addSkill', 'player.addSkill'];
									list.push('chooseControl(', 'event.finish(', 'chooseBool(', 'countCards(', 'logSkill(', 'et.attitude(', 'result.bool', 'target.damage(', 'game.filterPlayer(', 'judge(', 'chooseToCompare(');
									list.push('player.draw', 'player.draw', 'player.recover', 'player.recover', 'player.recover', 'player.recover', 'player.recover', 'player.recover', 'player.recover', 'player.gainMaxHp', 'player.gainMaxHp');
									input.value = list.randomGet();
									Click();
								} else {
									dialog.open();
									game.pause();
									var button = ui.create.control('确定', function () {
										button.remove();
										Click();
									});
								}
								('step 1');
								if (event.str) {
									var str = String(event.str),
										list = game.hs_getAllSkills(5, player, function (skill) {
											return String(skill.content).includes(str);
										});
									if (!list.length)
										list = ['chanyuan', 'new_zhixi', 'ranshang', 'chouhai', 'benghuai', 'yinfengyi', 'serafuku'].filter(function (i) {
											return !player.hasSkill(i, null, null, false);
										});
									event.videoId = lib.status.videoId++;
									var func = function (skills, id) {
										var dialog = ui.create.dialog('forcebutton');
										dialog.videoId = id;
										dialog.add('选择获得一个技能');
										for (var i = 0; i < skills.length; i++) {
											dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">『' + get.translation(skills[i]) + '』</div><div>' + game.getSkillInfo(skills[i]) + '</div></div>');
										}
										dialog.addText(' <br> ');
									};
									if (player == game.me) func(list, event.videoId);
									player.chooseControl(list).set('ai', function () {
										return _status.event.choice;
									});
								} else event.finish();
								('step 2');
								game.broadcastAll('closeDialog', event.videoId);
								player.addSkillLog(result.control, true);
								player.hs_setSkillAudio(result.control, 'hs_yixin');
							},
						},
						//彩蛋3
						hs_huiqiao: {
							trigger: {
								global: ['loseAfter', 'changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'gameDrawAfter'],
							},
							audio: 'ext:划水池/audio:3',
							forced: true,
							filter(event, player) {
								return player.countCards('h') != player.getDamagedHp();
							},
							content() {
								var num = player.getDamagedHp() - player.countCards('h');
								if (num > 0) player.draw(num);
								else player.chooseToDiscard('h', true, -num);
							},
							group: 'hs_huiqiao_add',
							ai: {
								noh: true,
								maixie: true,
								maixie_hp: true,
								nodiscard: true,
								reverseEquip: true,
								maihp: true,
							},
							subSkill: {
								add: {
									trigger: {
										player: 'damageEnd',
									},
									audio: 'ext:划水池/audio:3',
									forced: true,
									filter(event, player) {
										return event.num > 0;
									},
									content() {
										player.gainMaxHp(trigger.num);
									},
								},
							},
						},
						//彩蛋4
						hs_yingqiao: {
							trigger: {
								target: 'hs_line',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							content() {
								player.draw();
							},
						},
						//钟会
						hs_quanji: {
							trigger: {
								player: 'damageAfter',
								source: 'damageSource',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							preHidden: true,
							notemp: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								event.count--;
								player.draw();
								('step 2');
								if (player.countCards('h')) player.chooseCard('将一张手牌置于武将牌上作为<权>', true);
								else event.goto(5);
								('step 3');
								if (result.cards?.length) player.addToExpansion(result.cards, player, 'give').gaintag.add('quanji');
								('step 4');
								if (event.count > 0) player.chooseBool(get.prompt2('hs_quanji')).set('frequentSkill', 'hs_quanji');
								else event.finish();
								('step 5');
								if (result.bool) {
									event.goto(1);
								}
							},
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							onremove(player, skill) {
								var cards = player.getExpansions(skill);
								if (cards.length) player.loseToDiscardpile(cards);
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.countExpansions('quanji');
								},
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten: 0.8,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
											if (!target.hasSkill('hs_xieshu') && target.hp > 1) return [0.5, get.tag(card, 'damage')];
											if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.2];
											if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.4];
										}
									},
								},
							},
						},
						hs_zili: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							audio: 'ext:划水池/audio:1',
							juexingji: true,
							forced: true,
							filter(event, player) {
								return !player.hasSkill('hs_xieshu') && player.countExpansions('quanji') >= 3;
							},
							content() {
								'step 0';
								player.chooseDrawRecover(2, true, function (event, player) {
									if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
									return 'draw_card';
								});
								('step 1');
								player.loseMaxHp();
								player.addSkill('hs_xieshu');
								player.awakenSkill('hs_zili');
							},
							derivation: 'hs_xieshu',
						},
						hs_xieshu: {
							intro: {
								name: '挟术',
								name2: '挟术',
								content: '本回合已发动『挟术』#次',
							},
							marktext: '挟术',
							audio: 'ext:划水池/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								if (!event.isMine() && event.hs_xieshu) return false;
								if (player.countExpansions('quanji') <= player.countMark('hs_xieshu') + 1) return false;
								for (var i in lib.card) {
									var type = get.type(i);
									if (type == 'trick' && lib.filter.filterCard({ name: i }, player, event)) return true;
								}
								return false;
							},
							hiddenCard(player, name) {
								return player.countExpansions('quanji') > player.countMark('hs_xieshu') + 1;
							},
							chooseButton: {
								dialog(event, player) {
									event.set('hs_xieshu', true);
									var list = [];
									if (lib.config.extension_划水池_printCardRange) {
										for (var i in lib.card) {
											if (get.translation(`${i}_info`) == `${i}_info`) continue;
											if (!lib.card[i].content) continue;
											if (lib.card[i].mode && !lib.card[i].mode.includes(get.mode())) continue;
											try {
												if (event.filterCard && event.filterCard({ name: i }, player, event) == false) continue;
											} catch (e) {
												continue;
											}
											var type = get.type(i);
											if (type == 'trick') list.add([type, '', i]);
										}
									} else {
										for (var i of lib.inpile) {
											var type = get.type(i);
											if (type == 'trick') list.add([type, '', i]);
										}
									}
									return ui.create.dialog('挟术:选择使用的普通锦囊牌', [list, 'vcard']);
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									var player = _status.event.player;
									return (
										player.getUseValue({
											name: button.link[2],
										}) -
										(player.countMark('hs_xieshu') *
											player.getUseValue({
												name: 'wuzhong',
											})) /
										2
									);
								},
								backup(links, player) {
									var name = links[0][2],
										num = player.countMark('hs_xieshu');
									return {
										chooseButton: {
											select(event, player) {
												return num + 1;
											},
											dialog(event, player) {
												return ui.create.dialog('挟术:选择要转化的<权>', player.getExpansions('quanji'), 'hidden');
											},
											backup(links, player) {
												var cards0 = links;
												return {
													card: cards0,
													audio: 'hs_xieshu',
													popname: true,
													filterCard(card) {
														return cards0.includes(card);
													},
													position: 'x',
													selectCard: -1,
													viewAs: {
														name: name,
													},
													onuse(result, player) {
														player.hs_addMark('hs_xieshu', 1, false);
													},
												};
											},
										},
									};
								},
							},
							ai: {
								order: 5,
								result: {
									player: 1,
								},
							},
						},
						//赵云
						hs_yajiao: {
							audio: 'ext:划水池/audio:5',
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								if (player.countCards('hs', 'hs_shashan')) return event.filterCard({ name: 'tao' }, player, event) || event.filterCard({ name: 'jiu' }, player, event);
								else return false;
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog(
										'选择视为的牌',
										[
											[
												['基本', '', 'tao'],
												['基本', '', 'jiu'],
											],
											'vcard',
										],
										'hidden'
									);
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
										filterCard: {
											name: 'hs_shashan',
										},
										viewAs(cards, player) {
											return { name: links[0][2] }; //QQQ
										},
										ai1(card) {
											return 1;
										},
										position: 'hs',
										onuse(result, player) {
											player.draw();
										},
									};
								},
								prompt(links, player) {
									return '将一张【杀/闪】当做' + get.translation(links[0][2]) + '使用或打出';
								},
							},
							ai: {
								order() {
									var player = _status.event.player;
									var event = _status.event;
									if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) return get.order({ name: 'jiu' }) - 0.01;
									else return get.order({ name: 'tao' }) + 0.01;
								},
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
								save: true,
							},
							mod: {
								aiValue(player, card, num) {
									if (card.name == 'hs_shashan') return num + 1;
								},
								aiUseful(player, card, num) {
									if (card.name == 'hs_shashan') return num + 1;
								}, //QQQ
							},
							group: 'hs_yajiao_change',
							subSkill: {
								change: {
									forced: true,
									audio: 'ext:划水池/audio:5',
									trigger: {
										player: ['useCard1', 'respond', 'phaseUseAfter'],
									},
									filter(event, player) {
										if (event.name != 'phaseUse' && event.card.name != 'sha' && event.card.name != 'shan') return false;
										return player.countCards('hes', function (card) {
											return card.name != 'hs_shashan';
										});
									},
									content() {
										'step 0';
										player
											.chooseCard('hes', '涯角:展是否示一张不为【杀/闪】的牌并改为【杀/闪】？', function (card) {
												return card.name != 'hs_shashan';
											})
											.set('ai', function (card) {
												var player = _status.event.player;
												if (card.name == 'shan') return 5;
												if (card.name == 'sha') {
													if (player.countCards('h', 'hs_shashan') > 3) return -1;
													else return 0.5;
												}
												if (card.name == 'jiu') return 3.5;
												if (card.name == 'tao') return 2;
												if (get.type(card) == 'equip') return 7 - get.equipValue(card, player);
												return 8.1 - get.value(card, player);
											});
										('step 1');
										if (result.cards?.length) {
											player.showCards(result.cards);
											event.card = result.cards[0];
										} else event.finish();
										('step 2');
										var nature = get.nature(event.card, player),
											str = '杀闪';
										if (!nature) {
											if (event.card.name.startsWith('rewrite')) nature = 'kami';
											else if (event.card.name.includes('huo')) nature = 'fire';
											else if (event.card.name.includes('zhuque')) nature = 'fire';
											else if (event.card.name.includes('tengjia')) nature = 'fire';
											else if (event.card.name.includes('lei')) nature = 'thunder';
											else if (event.card.name.includes('shandian')) nature = 'thunder';
											else if (event.card.name.includes('shui')) nature = 'thunder';
											else if (event.card.name.includes('hanbing')) nature = 'ice';
											else if (get.type2(event.card, player) == 'trick' && get.tag(event.card, 'damage')) nature = 'stab';
											else if (game.hs_extensionCheck('天牢令') && get.type(event.card, player) == 'equip' && (get.subtypes(event.card, player).includes('equip1') || get.subtypes(event.card, player).includes('equip4'))) nature = 'tl_she';
										}
										event.card.init([event.card.suit, event.card.number, 'hs_shashan', nature]);
										if (get.position(event.card) != 'h') player.gain(event.card, 'gain2').gaintag.add('hs_yajiao');
										else player.addGaintag(event.card, 'hs_yajiao');
										player.addTempSkill('hs_yajiao_keep');
										if (nature) str = get.translation(nature) + str;
										event.card.node.name.innerHTML = get.verticalStr(str);
									},
								},
								keep: {
									mod: {
										ignoredHandcard(card, player) {
											if (card.hasGaintag('hs_yajiao')) {
												return true;
											}
										},
										cardDiscardable(card, player, name) {
											if (name == 'phaseDiscard' && card.hasGaintag('hs_yajiao')) {
												return false;
											}
										},
									},
									onremove(player) {
										player.removeGaintag('hs_yajiao');
									},
								},
							},
						},
						hs_jizhu: {
							marktext: '积著',
							intro: {
								name: '积著',
								name2: '积著',
								content: '已累计使用或打出#张基本牌',
							},
							forced: true,
							popup: false,
							audio: 'ext:划水池/audio:5',
							trigger: {
								player: ['useCard2', 'respondAfter'],
							},
							filter(event, player) {
								return get.type(event.card) == 'basic';
							},
							content() {
								player.hs_addMark('hs_jizhu', 1, false);
								if (player.countMark('hs_jizhu') % 7 == 0) {
									var card = get.discardPile(function (card) {
										return card.name == 'sha';
									});
									if (card) {
										player.gain(card, 'gain2');
									}
								}
								if (trigger.card.name == 'sha' && trigger.name == 'useCard' && trigger.targets && trigger.targets.length) {
									if (trigger.cards && trigger.cards.length && trigger.card.isCard) player.gainMultiple(trigger.targets, 'hej');
									else {
										for (var i of trigger.targets) {
											i.addTempSkill('qinggang2');
											i.storage.qinggang2.add(trigger.card);
										}
									}
								}
							},
							group: 'hs_jizhu_draw',
							subSkill: {
								draw: {
									trigger: {
										player: 'phaseBegin',
									},
									audio: 'ext:划水池/audio:5',
									forced: true,
									popup: false,
									filter(event, player) {
										return player.countMark('hs_jizhu') >= 7;
									},
									content() {
										var num = Math.trunc(player.countMark('hs_jizhu') / 7);
										player.hs_addMark('hs_jizhu_use', num, false);
										player.removeMark('hs_jizhu', num * 7, false);
										player.draw(num * 2);
										player.addTempSkill('hs_jizhu_use');
									},
								},
								use: {
									marktext: '积著',
									intro: {
										name: '积著',
										name2: '积著',
										content: '出牌阶段使用【杀】和【酒】的次数上限+#',
									},
									onremove(player) {
										player.clearMark('hs_jizhu_use', false);
									},
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha' || card.name == 'jiu') return num + player.countMark('hs_jizhu_use');
										},
									},
								},
							},
						},
						//诸葛诞
						hs_zongbi: {
							trigger: {
								player: 'damageEnd',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							content() {
								'step 0';
								player.markSkill('hs_zongbi');
								player.gainMaxHp();
								player.draw();
								var list = [];
								if (!player.hasSkill('reguanxing')) list.push('reguanxing');
								if (!player.hasSkill('aocai')) list.push('aocai');
								if (!player.hasSkill('mingzhe')) list.push('mingzhe');
								if (list.length) {
									event.list = list;
								} else event.finish();
								('step 1');
								if (event.list.length == 1) event._result = { control: event.list[0] };
								else
									player
										.chooseControl(event.list)
										.set('prompt', '选择获得下列技能中的一个')
										.set('ai', function () {
											if (event.list.includes('reguanxing')) return 'reguanxing';
											return 0;
										});
								('step 2');
								player.addSkillLog(result.control);
								player.popup(result.control);
								if (event.list.length <= 1) {
									player.removeSkill('hs_zongbi');
									player.addSkill('hs_zongbib');
									game.log(player, '修改了技能', '#g『宗庇』');
								}
							},
							derivation: ['hs_zongbib', 'reguanxing', 'aocai', 'mingzhe'],
						},
						hs_zongbib: {
							trigger: {
								player: 'changeHp',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							filter(event, player) {
								return event.num != 0;
							},
							content() {
								player.draw(2);
							},
						},
						hs_zhengwu: {
							trigger: {
								source: 'damageBegin1',
							},
							audio: 'ext:划水池/audio:2',
							marktext: '征吴',
							intro: {
								name: '征吴',
								name2: '征吴',
								content: '已因<征吴<获得#张牌',
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && current.group == 'wei' && !current.hasSkill('hs_zhengwu_zhengwu2') && current.countCards('he') > 0;
								});
							},
							content() {
								'step 0';
								event.targets = player.hs_filterOtherPlayer();
								('step 1');
								if (event.targets.length) {
									var current = event.targets.shift();
									if (current.group == 'wei' && current.countCards('he') > 0 && !current.hasSkill('hs_zhengwu_zhengwu2')) {
										current
											.chooseCard('he', '交给' + get.translation(player) + '一张牌')
											.set('ai', function (card) {
												return -(get.attitude(current, trigger.player) - get.attitude(current, trigger.source));
											})
											.set('target', player);
										event.current = current;
									} else event.redo();
								} else event.goto(3);
								('step 2');
								if (result.cards?.length) {
									player.gain(result.cards, target, 'giveAuto');
									game.log(player, '获得了', event.current, '的', result.cards);
									game.log(event.current, '令', player, '的此次伤害+!');
									trigger.num++;
									player.hs_addMark('hs_zhengwu', 1);
									event.current.addTempSkill('hs_zhengwu_zhengwu2');
								}
								if (event.targets.length) {
									event.goto(1);
								}
								('step 3');
							},
							subSkill: {
								zhengwu2: {},
							},
							ai: {
								damageBonus: true,
							},
						},
						hs_jupan: {
							audio: 'ext:划水池/audio:2',
							enable: 'phaseUse',
							limited: true,
							filter(event, player) {
								return (
									player.countMark('hs_zhengwu') >=
									game.countPlayer(function (current) {
										return current.group == 'wei';
									})
								);
							},
							content() {
								player.hs_recoverTo(player.maxHp);
								player.awakenSkill('hs_zhengwu');
								player.addSkill('hs_tongyuan');
								player.awakenSkill('hs_jupan');
							},
							derivation: ['hs_tongyuan'],
						},
						hs_tongyuan: {
							trigger: {
								player: ['chooseToRespondBefore', 'chooseToUseBefore', 'dying'],
							},
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								if (event.responded) return false;
								if (player.isDying()) cardname = 'jiu';
								else if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) cardname = 'shan';
								else if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) cardname = 'sha';
								else return false;
								if (player.storage.tongyuanaing) return false;
								if (player == _status.currentPhase) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.group == 'wu';
								});
							},
							check(event, player) {
								return get.damageEffect(player, event.player, player) < 0;
							},
							content() {
								'step 0';
								if (event.current == undefined) event.current = player.next;
								if (event.current == player) {
									if (cardname != 'jiu') game.log('无人响应<同援>');
									event.finish();
								} else if (event.current.group == 'wu') {
									if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 2 || event.current.isOnline()) {
										player.storage.tongyuanaing = true;
										var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张' + get.translation(cardname), { name: cardname });
										next.set('ai', function () {
											var event = _status.event;
											return get.attitude(event.player, event.source) - 2;
										});
										next.set('skillwarn', '替' + get.translation(player) + '使用/打出一张' + get.translation(cardname));
										next.noOrdering = true;
										if (cardname == 'sha') next.autochoose = lib.filter.autoRespondSha;
										else if (cardname == 'shan') next.autochoose = lib.filter.autoRespondShan;
										else if (cardname == 'jiu') next.autochoose = player.useCard({ name: 'jiu' }, player);
										next.set('source', player);
									}
								}
								('step 1');
								player.storage.tongyuanaing = false;
								if (result.bool && !(cardname == 'jiu' && player.isDying())) {
									event.finish();
									trigger.result = { bool: true, card: { name: cardname } };
									trigger.responded = true;
									trigger.animate = false;
								} else {
									event.current = event.current.next;
									event.goto(0);
								}
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (player.storage.tongyuanaing) return false;
									return game.hasPlayer(function (current) {
										return current != player && current.group == 'wu';
									});
								},
							},
						},
						//夏侯惇
						hs_ganglie: {
							trigger: {
								player: 'damageEnd',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							content() {
								'step 0';
								player.chooseTarget('受到了' + get.cnNumber(trigger.num) + '点伤害,是否选择一名角色进行判定？', lib.filter.notMe).set('ai', function (target) {
									if (get.attitude(_status.event.player, target) > 0) return -1;
									return 1 - get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
									event.target.judge(function (card) {
										if (get.color(card) == 'red') return 1;
										return 2;
									}).judge2 = function (result) {
										return result.bool;
									};
								} else event.finish();
								('step 2');
								if (result.judge < 1.5) {
									if (event.target.countCards('he')) player.discardPlayerCard(event.target, 'he', true, 2 * trigger.num);
								} else if (event.target.isAlive()) event.target.damage(trigger.num);
							},
							ai: {
								maixie_defend: true,
								expose: 0.4,
							},
							group: 'hs_ganglie_damage',
							subSkill: {
								damage: {
									trigger: {
										player: 'loseHpBefore',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									content() {
										trigger.cancel();
										player.damage(trigger.num, 'nosource');
									},
								},
							},
						},
						hs_fenxi: {
							audio: 'ext:划水池/audio:2',
							trigger: {
								player: 'damageAfter',
								source: 'damageEnd',
							},
							usable: 1,
							check(event, player) {
								if (
									!game.hasPlayer(function (current) {
										if (player == current) return false;
										if (!current.countCards('hej')) return false;
										return lib.card.shunshou.ai.result.target(player, current) > 0;
									})
								)
									return false;
								if (player.hp > 1) return true;
								if (player.hasSkill('hs_ganglie') && player.hujia > 0) return true;
								if (player.hasSkill('hs_crjushou') && player.hujia > 0) return true;
								if (player.hasSkill('hs_danjing') && player.maxHp > 2) return true;
								return (
									player.countCards('h', function (card) {
										return card.name == 'tao' || card.name == 'jiu';
									}) > 0
								);
							},
							content() {
								'step 0';
								player.loseHp();
								('step 1');
								player
									.chooseTarget(get.prompt2('hs_fenxi'), function (card, player, target) {
										return target.countCards('hej') > 0 && player != target;
									})
									.set('ai', function (target) {
										var player = _status.event.player,
											att = get.attitude(player, target);
										if (att < 0) att = -Math.sqrt(-att);
										else att = Math.sqrt(att);
										return att * lib.card.shunshou.ai.result.target(player, target);
									});
								('step 2');
								if (result.bool) player.gainPlayerCard(result.targets[0], 'hej', true);
								if (_status.currentPhase == player) player.changeHujia(1);
							},
						},
						hs_danjing: {
							audio: 'ext:划水池/audio:2',
							enable: 'chooseToUse',
							limited: true,
							filter(event, player) {
								return player.maxHp > 2 && event.type == 'dying' && player == event.dying;
							},
							content() {
								player.loseMaxHp(2);
								player.hs_recoverTo(player.maxHp);
								player.hs_addMark('hs_danjing_mark', 1, false);
								player.restoreSkill('hs_danjing');
							},
							mod: {
								attackRange(player, distance) {
									return distance - player.countMark('hs_danjing_mark') * 2;
								},
							},
							ai: {
								save: true,
								skillTagFilter(player, tag, arg) {
									return player == arg;
								},
								order: 3,
								result: {
									player: 1,
								},
							},
							subSkill: {
								mark: {
									forced: true,
									marktext: '啖睛',
									intro: {
										name: '啖睛',
										name2: '啖睛',
										content: '已发动『啖睛』#次',
									},
								},
							},
						},
						//文和
						hs_duoshi: {
							intro: {
								content(storage, player) {
									if (get.mode() == 'guozhan') {
										if (player.storage.hs_duoshi == true) return '当你受到伤害,或一名角色进入濒死时,你减少已损体力值一半的体力上限(向下取整)并摸等量牌,回复体力至体力上限,你视为拥有『帷幕』';
										else return '当你造成伤害,或一名角色进入濒死时,你失去体力至1点并增加等量体力上限,你视为拥有『缜略』';
									} else {
										if (player.storage.hs_duoshi == true) return '当你受到伤害,或一名角色进入濒死时,你将势力改为<群>,减少已损体力值一半的体力上限(向下取整)并摸等量牌,回复体力至体力上限,你视为拥有『帷幕』';
										else return '当你造成伤害,或一名角色进入濒死时,你将势力改为<魏>,失去体力至1点并增加等量体力上限,你视为拥有『缜略』';
									}
								},
							},
							mark: true,
							zhuanhuanji: true,
							marktext: '☯',
							audio: 'ext:划水池/audio:3',
							init(player) {
								player.storage.hs_duoshi = false;
								player.storage.hs_duoshi_use = false;
							},
							trigger: {
								player: 'damageBegin4',
							},
							forced: true,
							filter(event, player) {
								return player.storage.hs_duoshi;
							},
							content() {
								player.changeZhuanhuanji('hs_duoshi');
								player.markSkill('hs_duoshi');
								if (get.mode() != 'guozhan') player.changeGroup('qun');
								player.hs_changeBackground('hs_jiaxu');
								var num = Math.trunc(player.getDamagedHp() / 2);
								if (num > 0) {
									player.loseMaxHp(num);
									player.draw(num);
								}
								player.hs_recoverTo(player.maxHp);
								player.storage.hs_duoshi_use = true;
							},
							mod: {
								maxHandcardBase(player, num) {
									return player.maxHp;
								},
							},
							ai: {
								nokeep: true,
							},
							derivation: ['hs_jx_weimu', 'hs_jx_zhenlve'],
							group: ['hs_duoshi_use', 'hs_jx_weimu', 'hs_jx_zhenlve', 'hs_duoshi_dying'],
							subSkill: {
								use: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									audio: 'ext:划水池/audio:3',
									filter(event, player) {
										if (event.hs_duoshi) return false;
										return !player.storage.hs_duoshi;
									},
									content() {
										player.changeZhuanhuanji('hs_duoshi');
										player.markSkill('hs_duoshi');
										if (get.mode() != 'guozhan') player.changeGroup('wei');
										player.hs_changeBackground('hs_jiaxu', 'hs_jiaxu2.jpg');
										var num = player.hp - 1;
										if (num > 0) {
											player.loseHp(num);
											player.gainMaxHp(num);
										}
										player.storage.hs_duoshi_use = true;
									},
								},
								dying: {
									trigger: {
										global: 'dyingBegin',
									},
									forced: true,
									popup: false,
									_priority: 200,
									content() {
										if (player.storage.hs_duoshi) {
											player.useSkill('hs_duoshi');
										} else {
											player.useSkill('hs_duoshi_use');
										}
									},
								},
							},
						},
						hs_jx_weimu: {
							trigger: {
								target: 'useCardToTarget',
								player: 'addJudgeBefore',
							},
							audio: 'ext:划水池/audio:2',
							_priority: 15,
							forced: true,
							filter(event, player) {
								if (!player.storage.hs_duoshi_use) return false;
								if (player.storage.hs_duoshi) return false;
								return event.player != player && get.color(event.card) == 'black';
							},
							content() {
								if (trigger.name == 'addJudge') {
									trigger.cancel();
									var owner = get.owner(trigger.card);
									if (owner && owner.getCards('hej').includes(trigger.card)) {
										owner.lose(trigger.card, ui.discardPile);
									} else game.cardsDiscard(trigger.card);
									game.log(trigger.card, '进入了弃牌堆');
								} else trigger.parent.targets.remove(player);
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (player != target && get.color(card) == 'black' && target.storage.hs_duoshi_use && !target.storage.hs_duoshi) {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						hs_jx_zhenlve: {
							trigger: {
								player: ['useCard1', 'addJudgeBefore'],
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							filter(event, player) {
								if (!player.storage.hs_duoshi_use) return false;
								if (!player.storage.hs_duoshi) return false;
								if (event.name == 'addJudge') return true;
								return get.type(event.card) == 'trick';
							},
							content() {
								if (trigger.name == 'addJudge') {
									trigger.cancel();
									var owner = get.owner(trigger.card);
									if (owner && owner.getCards('hej').includes(trigger.card)) {
										owner.lose(trigger.card, ui.discardPile);
									} else game.cardsDiscard(trigger.card);
									game.log(trigger.card, '进入了弃牌堆');
								} else trigger.nowuxie = true;
							},
							mod: {
								targetInRange(card, player, target, now) {
									if (player.storage.hs_duoshi_use && player.storage.hs_duoshi) return true;
								},
								targetEnabled(card, player, target) {
									if (player.storage.hs_duoshi_use && player.storage.hs_duoshi && get.type(card) == 'delay') {
										return false;
									}
								},
							},
						},
						hs_luanwu: {
							audio: 'ext:划水池/audio:3',
							enable: 'phaseUse',
							limited: true,
							filter(event, player) {
								return (
									player.countCards('hs', function (card) {
										return get.tag(card, 'damage');
									}) > 0
								);
							},
							position: 'hs',
							selectCard: 1,
							discard: false,
							lose: false,
							delay: false,
							filterCard(card) {
								return get.tag(card, 'damage');
							},
							check(card) {
								var player = _status.event.player;
								if (card.name != 'huogong') return 1;
								else return -1;
							},
							content() {
								'step 0';
								player.awakenSkill('hs_luanwu');
								event.list = [];
								event.player0 = player;
								event.cards0 = [];
								player.useCard(cards[0], player.hs_filterOtherPlayer());
								('step 1');
								var list = event.player0.getHistory('sourceDamage', function (evt) {
									var card = evt.card;
									var evtx = evt.parent;
									if (evtx.card == card && !event.cards0.includes(card)) {
										event.card = card;
										return true;
									}
									return false;
								});
								event.cards0.push(event.card);
								if (list.length) {
									var list0 = [],
										list1 = event.list;
									for (var i of list) {
										list0.push(i.player);
									}
									event.list = list0.concat(list1);
								}
								('step 2');
								if (event.list.length) {
									event.player0 = event.list.shift();
									game.trySkillAudio('hs_luanwu_die', player, true);
									player.line(event.player0);
									event.player0.chooseToUse('乱武:使用一张伤害性牌或失去一点体力', function (card) {
										return get.tag(card, 'damage');
									});
								} else event.finish();
								('step 3');
								if (result.bool) event.goto(1);
								else {
									event.goto(2);
									event.player0.loseHp();
								}
							},
							ai: {
								pretao: true,
								order: 9,
								result: {
									player(player) {
										return 1;
									},
								},
							},
							subSkill: {
								die: {
									audio: 'ext:划水池/audio:2',
									forced: true,
								},
							},
						},
						//曹叡
						hs_mingjian: {
							audio: 'ext:划水池/audio:3',
							trigger: {
								player: 'damageEnd',
								source: 'damageSource',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								if (event.count > 0) {
									event.count--;
									player.chooseTarget(get.prompt2('hs_mingjian'), lib.filter.notMe).set('ai', function (target) {
										if (target.hasSkill('hs_crjushou')) return 0;
										if (get.mode() == 'identity') {
											if (player.identity == 'zhong' && target.identity == 'zhu') return 1000;
										}
										if (get.attitude(player, target) > 0) {
											if (!target.hasMark('hs_huituo_mark')) return get.attitude(player, target) + 393;
											else if (target.countMark('hs_huituo_mark') < 4) return get.attitude(player, target) + target.countMark('hs_huituo_mark') + 387;
											else if (target.countMark('hs_huituo_mark') < 9) return get.attitude(player, target) + target.countMark('hs_huituo_mark') + 377;
											else if (target.countMark('hs_huituo_mark') < 16) return get.attitude(player, target) + target.countMark('hs_huituo_mark') + 360;
											else if (target.countMark('hs_huituo_mark') < 25) return get.attitude(player, target) + target.countMark('hs_huituo_mark') + 334;
											else if (target.countMark('hs_huituo_mark') < 36) return get.attitude(player, target) + target.countMark('hs_huituo_mark') + 298;
											else if (target.countMark('hs_huituo_mark') < 49) return get.attitude(player, target) + target.countMark('hs_huituo_mark') + 248;
											else if (target.countMark('hs_huituo_mark') < 64) return get.attitude(player, target) + target.countMark('hs_huituo_mark') + 183;
											else if (target.countMark('hs_huituo_mark') < 81) return get.attitude(player, target) + target.countMark('hs_huituo_mark') + 101;
											else if (target.countMark('hs_huituo_mark') < 100) return get.attitude(player, target) + target.countMark('hs_huituo_mark');
											else return get.attitude(player, target);
										} else if (get.attitude(player, target) == 0) {
											if (!target.hasMark('hs_huituo_mark')) return 1;
											else return -1;
										} else if (target.hasMark('hs_huituo_mark')) return get.attitude(player, target) + target.countMark('hs_huituo_mark') + 500;
										else return get.attitude(player, target);
									});
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									event.target = result.targets[0];
									var list = ['获得标记'];
									if (event.target.hasMark('hs_huituo_mark')) list.push('失去标记');
									player
										.chooseControl(list)
										.set('prompt', '选择对' + get.translation(event.target) + '进行的操作')
										.set('ai', function () {
											if (list.includes('失去标记') && get.attitude(player, event.target) <= 0) return '失去标记';
											else return '获得标记';
										});
								}
								('step 3');
								if (result.control == '获得标记') event.target.hs_addMark('hs_huituo_mark');
								else if (result.control == '失去标记') event.target.removeMark('hs_huituo_mark');
								('step 4');
								event.goto(1);
							},
							group: 'hs_mingjian_begin',
							subSkill: {
								begin: {
									trigger: {
										global: 'gameDrawAfter',
										player: 'showCharacterAfter',
									},
									forced: true,
									content() {
										player.awakenSkill('hs_mingjian_begin');
										player.hs_addMark('hs_huituo_mark');
									},
								},
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								combo: 'hs_huituo',
							},
						},
						hs_huituo: {
							global: ['hs_huituo_mark', 'hs_huituo_add', 'hs_huituo_remove'],
							forced: true,
							subSkill: {
								mark: {
									trigger: {
										player: 'phaseDrawBegin2',
									},
									marktext: '恢拓',
									intro: {
										name: '恢拓',
										name2: '恢拓',
										content: '有#枚<恢拓>标记',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										return !event.numFixed && player.hasMark('hs_huituo_mark');
									},
									content() {
										trigger.num += Math.trunc(Math.sqrt(player.countMark('hs_huituo_mark')));
									},
									mod: {
										cardUsable(card, player, num) {
											if (player.hasMark('hs_huituo_mark') && card.name == 'sha') return num + Math.trunc(Math.sqrt(player.countMark('hs_huituo_mark')));
											else return num;
										},
									},
									ai: {
										threaten: 1.5,
									},
								},
								add: {
									trigger: {
										player: 'hs_addMark',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										return event.markname == 'hs_huituo_mark';
									},
									content() {
										var num0 = trigger.player.maxHp - trigger.player.hp;
										var num1 = trigger.num - num0,
											num2 = 0,
											num3;
										if (num1 > 0) {
											num2 = Math.ceil(num1 / 2);
											num3 = Math.floor(num1 / 2) + num0;
										} else num3 = trigger.num;
										if (num2 > 0) trigger.player.gainMaxHp(num2);
										if (num3 > 0) trigger.player.recover(num3);
									},
								},
								remove: {
									trigger: {
										player: 'hs_removeMark',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										return event.markname == 'hs_huituo_mark';
									},
									content() {
										var num = Math.floor(trigger.num / 2);
										if (num > 0) {
											trigger.player.loseMaxHp(num);
											trigger.player.draw(num);
										}
									},
								},
							},
						},
						hs_xingshuai: {
							audio: 'ext:划水池/audio:3',
							enable: 'chooseToUse',
							limited: true,
							zhuSkill: true,
							filter(event, player) {
								if (player.storage.hs_xingshuai) return false;
								if (!player.hasZhuSkill('hs_xingshuai')) return false;
								return (
									event.type == 'dying' &&
									player == event.dying &&
									game.hasPlayer(function (current) {
										return current.hasMark('hs_huituo_mark');
									})
								);
							},
							content() {
								'step 0';
								player.storage.hs_xingshuai = true;
								player.awakenSkill('hs_xingshuai');
								event.targets = player.hs_filterOtherPlayer();
								event.marknum = 0;
								('step 1');
								if (event.targets.length) {
									var current = event.targets.shift();
									if (current.hasMark('hs_huituo_mark')) {
										current
											.chooseBool('是否令' + get.translation(player) + '获得你的所有>恢拓<标记？')
											.set('ai', function () {
												return get.attitude(_status.event.player, _status.event.target) > 0;
											})
											.set('target', player);
										event.current = current;
									} else event.redo();
								} else event.goto(3);
								('step 2');
								if (result.bool) {
									event.current.line(player, 'green');
									event.marknum += event.current.clearMark('hs_huituo_mark');
								}
								event.goto(1);
								('step 3');
								if (event.marknum > 0) player.hs_addMark('hs_huituo_mark', event.marknum, true);
							},
							ai: {
								combo: 'hs_huituo',
								save: true,
								skillTagFilter(player, tag, arg) {
									return player == arg;
								},
								order: 5,
								result: {
									player: 1,
								},
							},
						},
						//刘表
						hs_zishou: {
							trigger: {
								global: 'useCardToPlayered',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							popup: false,
							_priority: 5,
							filter(event, player) {
								if (event.player == player) return event.target != player;
								if (event.player != player) return event.target == player;
							},
							content() {
								'step 0';
								if (player.hasSkill('hs_zongshi_draw')) player.draw().gaintag = ['hs_zongshi'];
								('step 1');
								trigger.player.chooseCard('h', '交给' + get.translation(trigger.target) + '一张手牌或其获得此牌并摸一张牌').set('ai', function (card) {
									if (get.attitude(trigger.player, trigger.target) > 0) return -1;
									else return 11 - get.value(card);
								});
								('step 2');
								if (result.bool) trigger.target.gain(result.cards, trigger.player, 'giveAuto');
								else {
									if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') trigger.target.gain(trigger.cards.filterInD(), 'gain2');
									trigger.target.draw();
								}
							},
							ai: {
								effect: {
									target() {
										return 0.5;
									},
								},
							},
						},
						hs_zongshi: {
							trigger: {
								player: 'phaseZhunbei',
							},
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								return player.countCards('h') >= player.hp;
							},
							check(event, player) {
								return player.hasSkill('hs_zishou');
							},
							content() {
								'step 0';
								var num = game.countGroup();
								if (player.hasZhuSkill('hs_xiwang'))
									num += game.countPlayer(function (current) {
										return current != player && current.group == 'qun';
									});
								player.draw(num).gaintag = ['hs_zongshi'];
								('step 1');
								var num = player.hp;
								if (num > 0)
									player.chooseToDiscard('he', true, Math.min(player.countCards('h'), num), get.prompt2('hs_zongshi')).set('ai', function (card) {
										return 8 - get.value(card, player);
									});
								('step 2');
								if (result.bool) player.addTempSkill('hs_zongshi_draw');
							},
							subSkill: {
								draw: {
									mod: {
										ignoredHandcard(card, player) {
											if (card.hasGaintag('hs_zongshi')) {
												return true;
											}
										},
										cardDiscardable(card, player, name) {
											if (name == 'phaseDiscard' && card.hasGaintag('hs_zongshi')) {
												return false;
											}
										},
									},
									onremove(player) {
										player.removeGaintag('hs_zongshi');
									},
								},
							},
						},
						hs_xiwang: {
							forced: true,
							zhuSkill: true,
							combo: 'hs_zongshi',
						},
						//曹丕
						hs_xingshang: {
							trigger: {
								global: 'dyingBegin',
							},
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								return event.player != player && event.player.countCards('hejx') != 0;
							},
							content() {
								'step 0';
								list = [];
								if (trigger.player.countCards('h') != 0) list.push('手牌');
								if (trigger.player.countCards('e') != 0) list.push('装备区');
								if (trigger.player.countCards('j') != 0) list.push('判定区');
								if (trigger.player.countCards('x') != 0) list.push('武将牌上');
								player
									.chooseControl(list)
									.set('prompt', '选择获得' + get.translation(event.target) + '一个区域的牌')
									.set('choice', get.max(list, get.skillRank, 'item'))
									.set('ai', function () {
										return _status.event.choice;
									});
								('step 1');
								var cards = [];
								if (result.control == '手牌') cards = trigger.player.getCards('h');
								else if (result.control == '装备区') cards = trigger.player.getCards('e');
								else if (result.control == '判定区') cards = trigger.player.getCards('j');
								else if (result.control == '武将牌上') cards = trigger.player.getCards('x');
								if (cards.length) player.gain(cards, 'giveAuto', trigger.player);
								if (!player.storage.hs_xingshang) player.storage.hs_xingshang = {};
								player.storage.hs_xingshang[trigger.player] = cards.length;
							},
							group: ['hs_xingshang_add', 'hs_xingshang_lose'],
							subSkill: {
								lose: {
									trigger: {
										global: 'dyingAfter',
									},
									audio: 'hs_xingshang',
									forced: true,
									filter(event, player) {
										if (!player.storage.hs_xingshang) return false;
										return player.storage.hs_xingshang[event.player] && player.storage.hs_xingshang[event.player] > 0;
									},
									content() {
										'step 0';
										var num = player.storage.hs_xingshang[trigger.player];
										player.chooseCard(true, 'h', num, '行殇:交给' + get.translation(trigger.player) + get.cnNumber(num) + '张牌');
										('step 1');
										trigger.player.gain(result.cards, 'giveAuto', player);
									},
								},
								add: {
									trigger: {
										global: 'damageBegin4',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										return event.player.isTurnedOver();
									},
									content() {
										player.gainMaxHp();
										if (trigger.num > 1) trigger.player.turnOver();
									},
								},
							},
						},
						hs_fangzhu: {
							trigger: {
								player: 'damageAfter',
							},
							audio: 'ext:划水池/audio:2',
							group: ['hs_fangzhu_draw', 'hs_fangzhu_use'],
							forced: true,
							preHidden: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt('hs_fangzhu'), '令一名角色将武将牌翻面并摸' + get.cnNumber(Math.max(player.getDamagedHp() - 1, 0)) + '张牌', lib.filter.notMe).setHiddenSkill('hs_fangzhu').ai = function (target) {
									if (target.hasSkillTag('hs_fangzhu')) return 0;
									var player = _status.event.player;
									if (player.maxHp <= 2) return -1;
									if (get.attitude(_status.event.player, target) == 0) return 0;
									if (get.attitude(_status.event.player, target) > 0) {
										if (target.classList.contains('turnedover')) return 200 - target.countCards('h');
										if (player.getDamagedHp() < 3) return -1;
										return 100 - target.countCards('h');
									} else {
										if (target.classList.contains('turnedover')) return -1;
										if (player.getDamagedHp() >= 3) return -1;
										return 1 + target.countCards('h');
									}
								};
								('step 1');
								if (result.bool) {
									player.loseMaxHp();
								}
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									target.draw(player.getDamagedHp());
									target.turnOver();
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (target.hp <= 1) return;
											if (!target.hasFriend()) return;
											var hastarget = false;
											var turnfriend = false;
											var players = game.filterPlayer();
											for (var i = 0; i < players.length; i++) {
												if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) hastarget = true;
												if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
													hastarget = true;
													turnfriend = true;
												}
											}
											if (get.attitude(player, target) > 0 && !hastarget) return;
											if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
											if (target.hp > 1) return [1, 0.5];
										}
									},
								},
							},
							subSkill: {
								a: {},
								draw: {
									trigger: {
										global: 'turnOverEnd',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									content() {
										player.draw();
									},
								},
								use: {
									filterTarget: lib.filter.notMe,
									audio: 'ext:划水池/audio:2',
									usable: 1,
									enable: 'phaseUse',
									content() {
										'step 0';
										player.loseMaxHp();
										('step 1');
										target.draw(player.getDamagedHp());
										target.turnOver();
									},
									ai: {
										result: {
											player(player, target) {
												if (player.maxHp <= 2) return -10;
												return -1;
											},
											target(player, target) {
												if (target.hasSkillTag('noturn')) return 0;
												if (target.classList.contains('turnedover')) return 4 + target.countCards('h');
												if (player.getDamagedHp() < 3) return -7;
												return 0;
											},
										},
										order: 15,
									},
								},
							},
						},
						hs_songwei: {
							trigger: {
								global: 'damageEnd',
							},
							marktext: '威',
							intro: {
								name: '威',
								name2: '威',
								content: '有#枚<威>标记',
							},
							audio: 'ext:划水池/audio:2',
							zhuSkill: true,
							filter(event, player) {
								if (!event.source) return false;
								if (event.source.group != 'wei') return false;
								return player.hasZhuSkill('hs_songwei');
							},
							forced: true,
							content() {
								player.hs_addMark('hs_songwei', trigger.num, false);
								var num = Math.trunc(player.countMark('hs_songwei') / 2);
								if (num > 0) {
									player.recover(num);
									player.removeMark('hs_songwei', 2 * num, false);
								}
							},
						},
						//双头
						hs_shuangxiong: {
							intro: {
								name: '双雄',
								name2: '双雄',
								markcount(storage, player) {
									var str = '';
									if (storage) {
										for (var i of storage) str += get.translation(i);
									}
									return str;
								},
								content(storage, player) {
									var str = '展示的花色为';
									if (storage) {
										for (var i of storage) str += get.translation(i);
									}
									return str;
								},
							},
							marktext: '双雄 ',
							trigger: {
								player: 'phaseZhunbei',
							},
							audio: 'ext:划水池/audio:2',
							check(event, player) {
								if (player.storage.hs_bingzhan && player.hasSkill('hs_bingzhan')) return true;
								return player.countCards('hes') >= Math.min(player.hp, 3);
							},
							content() {
								player.skip('phaseJudge');
								player.skip('phaseDraw');
								var num = 5;
								if (player.storage.hs_bingzhan && player.hasSkill('hs_bingzhan')) num = 3;
								var cards = get.cards(num);
								game.cardsGotoOrdering(cards);
								player.showCards(cards);
								player.storage.hs_shuangxiong = [];
								for (var i of cards) player.storage.hs_shuangxiong.add(i.suit);
								if (player.storage.hs_bingzhan && player.hasSkill('hs_bingzhan')) player.gain(cards, 'draw');
								player.addTempSkill('hs_shuangxiong_juedou', { player: 'phaseBeforeStart' });
							},
							subSkill: {
								juedou: {
									audio: 'ext:划水池/audio:2',
									enable: 'chooseToUse',
									prompt: '将一张牌当做【决斗】使用',
									viewAs: {
										name: 'juedou',
									},
									position: 'hes',
									filterCard: true,
									check(card) {
										return 9 - get.value(card);
									},
									onuse(result, player) {
										if (player.storage.hs_shuangxiong.length && !player.storage.hs_shuangxiong.includes(result.card.suit)) player.draw();
									},
									onremove(player, skill) {
										player.storage.hs_shuangxiong = [];
									},
									ai: {
										basic: {
											order: 12,
											useful: 1,
											value: 5.5,
										},
									},
								},
							},
						},
						hs_bingzhan: {
							trigger: {
								player: 'phaseUseBegin',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							content() {
								'step 0';
								delete player.storage.hs_bingzhan;
								player.chooseTarget(lib.filter.notMe, get.prompt('hs_bingzhan'), '并战:是否与一名其他角色协同作战').set('ai', function (target) {
									return get.threaten(target) * Math.sqrt(1 + target.countCards('h')) * (target.isTurnedOver() || target.hasJudge('lebu') ? 0.1 : 1);
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.chooseCooperationFor(target, 'hs_bingzhan').set('ai', function (button) {
										var base = 0;
										switch (button.link) {
											case 'cooperation_damage':
												base = 0.6;
												break;
											case 'cooperation_draw':
												base = 0.4;
												break;
											case 'cooperation_discard':
												base = 0.1;
												break;
											case 'cooperation_use':
												base = 0.4;
												break;
										}
										return base + Math.random();
									});
									player.addAdditionalSkill('cooperation', 'hs_bingzhan_hezuo');
								} else event.finish();
								('step 2');
							},
							subSkill: {
								hezuo: {
									charlotte: true,
									trigger: {
										player: 'hs_markSkill',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										return player.hs_checkCooperationStatus('hs_bingzhan') && !player.storage.hs_bingzhan;
									},
									content() {
										var storage = player.getStorage('cooperation'),
											target;
										for (var info of storage) {
											if (info.reason == 'hs_bingzhan' && info.target) target = info.target;
										}
										if (target) game.log(player, '和', target, '的协力成功');
										player.storage.hs_bingzhan = true;
										if (player.isDamaged()) player.draw(player.getDamagedHp());
									},
								},
							},
						},
						//陆逊
						hs_renfu: {
							intro: {
								name: '忍负',
								name2: '忍负',
								content: '本回合已忍负#次',
							},
							marktext: '忍负',
							trigger: {
								global: 'phaseJieshuBegin',
							},
							audio: 'ext:划水池/audio:3',
							forced: true,
							popup: false,
							filter(event, player) {
								return player.hasMark('hs_renfu');
							},
							content() {
								'step 0';
								var num = player.countMark('hs_renfu');
								event.num0 = num;
								event.num = num;
								('step 1');
								if (event.num > 0) {
									event.num--;
									var dialog = '',
										text = '';
									if (player == game.me) {
										dialog = ui.create.dialog('忍负:分配第' + (event.num0 - event.num).toString() + '/' + event.num0.toString() + '枚>连营>标记');
										for (var i of game.filterPlayer().sortBySeat()) {
											if (i.storage.hs_renfu_count) text += get.translation(i) + ':' + i.storage.hs_renfu_count.toString() + '枚<br>';
											else i.storage.hs_renfu_count = 0;
										}
										if (text != '') dialog.add('已分配:<br>' + text);
									}
									player.chooseTarget(dialog, true).set('ai', function (target) {
										var att = get.attitude(_status.event.player, target),
											num = target.countMark('_hs_lianying') + target.storage.hs_renfu_count;
										if (att < 0) return 100 - att - num;
										else if (att > 0) return 1 - att;
										else return 50 - num;
									});
								} else event._result = { bool: false };
								('step 2');
								if (result.targets?.length) {
									result.targets[0].storage.hs_renfu_count++;
									event.goto(1);
								} else {
									var list = [];
									for (var i of game.filterPlayer()) {
										if (i.storage.hs_renfu_count) list.add(i);
									}
									if (list.length) {
										list.sortBySeat();
										for (var i of list) {
											i.hs_addMark('_hs_lianying', i.storage.hs_renfu_count);
											delete i.storage.hs_renfu_count;
										}
										player.clearMark('hs_renfu', false);
									}
								}
							},
							group: ['hs_renfu_count', 'hs_renfu_link'],
							subSkill: {
								count: {
									trigger: {
										target: 'hs_line',
									},
									forced: true,
									popup: false,
									content() {
										player.hs_addMark('hs_renfu', 1, false);
									},
								},
								link: {
									trigger: {
										global: 'linkAfter',
									},
									audio: 'ext:划水池/audio:3',
									forced: true,
									content() {
										player.draw();
										if (trigger.player.isLinked()) trigger.player.hs_addMark('_hs_lianying');
									},
								},
							},
							ai: {
								reverseEquip: true,
							},
						},
						hs_zhanhuo: {
							audio: 'ext:划水池/audio:2',
							usable: 1,
							enable: 'phaseUse',
							filter(event, player) {
								var suits = [];
								for (var i of player.getCards('hes')) suits.add(i.suit);
								return suits.length > 2;
							},
							position: 'hes',
							viewAs: {
								name: 'huoshaolianying',
							},
							filterCard(card, player) {
								if (ui.selected.cards.length) {
									return !ui.selected.cards.filter(function (cardi) {
										return card.suit == cardi.suit;
									}).length;
								} else return true;
							},
							selectCard: 3,
							complexCard: true,
							group: 'hs_zhanhuo_damage',
							subSkill: {
								damage: {
									audio: 'ext:划水池/audio:3',
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									filter(event, player) {
										return event.player.hasMark('_hs_lianying');
									},
									content() {
										trigger.player.removeMark('_hs_lianying');
										if (trigger.nature == 'fire') trigger.num++;
										else trigger.nature = 'fire';
									},
								},
							},
						},
						//黄忠
						hs_dingzhan: {
							marktext: '斩',
							intro: {
								name: '斩',
								name2: '斩',
								content: '有#个<斩>标记',
							},
							group: ['hs_dingzhan_lose', 'hs_dingzhan_mark'],
							audio: 'ext:划水池/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								'step 0';
								var list = [];
								for (var i of game.players) {
									for (var j of i.getCards('ej')) {
										if (j.name == 'hs_chixue') list.add(j);
									}
								}
								if (list.length > 1) {
									var next = player.chooseButton(true);
									if (player == game.me) {
										ui.clear();
										var dialog = ui.create.dialog('定斩:选择获得的【赤血刀】', list, true);
										dialog.classList.add('noupdate');
										dialog.buttons.forEach(function (button) {
											button.classList.add('hs_xianshou');
											var xtx = ui.create.div('.xtx', button),
												xtxName = ui.create.div('.xtxName', xtx),
												target = get.owner(button.link),
												position = get.position(button.link) == 'e' ? "<br><font color='deepskyblue'>装备区</font>" : "<br><font color='yellow'>判定区</font>";
											xtx.style.backgroundImage = target.node.avatar.style.backgroundImage;
											xtxName.innerHTML = get.translation(target.name) + position;
										});
										_status.dieClose.push(dialog);
										dialog.videoId = lib.status.videoId++;
										event.dialog = dialog;
										next.set('dialog', dialog.videoId);
									} else next.createDialog = [list];
								} else {
									if (list.length) event.card = list[0];
									event.goto(2);
								}
								('step 1');
								if (event.dialog) {
									var dialog = event.dialog;
									dialog.close();
									_status.dieClose.remove(dialog);
								}
								event.card = result.links[0];
								('step 2');
								if (!event.card) event.card = get.cardPile('hs_chixue');
								if (!event.card) {
									var suit = ['diamond', 'heart'].randomGet(),
										num = [4, 6, 7, 9, 13].randomGet();
									event.card = game.createCard2('hs_chixue', suit, num);
								}
								if (get.owner(event.card)) player.gain(event.card, get.owner(event.card), 'give', 'bySelf');
								else player.gain(event.card, 'gain2');
							},
							subSkill: {
								mark: {
									trigger: {
										player: 'useCard1',
									},
									forced: true,
									content() {
										player.hs_addMark('hs_dingzhan');
									},
								},
								lose: {
									trigger: {
										player: 'loseHpBegin',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										return player == _status.currentPhase;
									},
									content() {
										trigger.cancel();
									},
								},
							},
						},
						hs_liegong: {
							trigger: {
								player: 'useCard2',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								return player.countCards('he') > 0 || player.hasMark('hs_dingzhan');
							},
							content() {
								'step 0';
								player.storage.hs_liegongnum = 0;
								player.chooseToDiscard('he', [0, 4], '弃置至多4张牌为此【杀】附魔').ai = function (card) {
									if (get.attitude(player, trigger.player) < 0) return 10 - get.value(card);
									else return -1;
								};
								('step 1');
								if (result.bool) {
									event.drawnum = 0;
									event.count = Math.min(player.countMark('hs_dingzhan'), 3);
									player.removeMark('hs_dingzhan', event.count);
									event.count += result.cards.length;
									event.list = ['不可响应', '伤害+1', '摸牌', '无标防具', '非锁定技失效'];
								} else event.finish();
								('step 2');
								event.count--;
								player
									.chooseControl(event.list)
									.set('prompt', event.count + '.选择令此' + get.translation(trigger.card) + '附带的效果:')
									.set('choice', get.max(event.list, get.skillRank, 'item'))
									.set('ai', function () {
										return _status.event.choice;
									});
								('step 3');
								if (result.control != '伤害+1' && result.control != '摸牌') event.list.remove(result.control);
								if (result.control == '无标防具') {
									game.log(player, '使用的此', trigger.card, '无视防具');
									for (var i of trigger.targets) {
										if (!i.hasSkill('qinggang2')) i.addTempSkill('qinggang2');
										i.storage.qinggang2.add(trigger.card);
									}
								} else if (result.control == '不可响应') {
									game.log(player, '使用的此', trigger.card, '不可被响应');
									trigger.directHit.addArray(trigger.targets);
								} else if (result.control == '非锁定技失效') {
									game.log('本回合', trigger.targets, '的非锁定技失效');
									for (var i of trigger.targets) {
										if (!i.hasSkill('fengyin')) i.addTempSkill('fengyin');
									}
								} else if (result.control == '伤害+1') {
									game.log(player, '使用的此', trigger.card, '伤害+1');
									trigger.baseDamage++;
								} else if (result.control == '摸牌') {
									game.log(player, '使用的此', trigger.card, '造成伤害后摸牌+1');
									event.drawnum += 1;
								}
								('step 4');
								if (event.count > 0) event.goto(2);
								else if (event.drawnum > 0) player.storage.hs_liegongnum = event.drawnum;
							},
							ai: {
								directHit_ai: true,
								damageBonus: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'directHit_ai') {
										if (!arg || !arg.card || !arg.target) return false;
										return arg.card.name == 'sha';
									}
								},
							},
							group: 'hs_liegong_draw',
							subSkill: {
								draw: {
									trigger: {
										player: 'shaAfter',
									},
									forced: true,
									filter(event, player) {
										return player.storage.hs_liegongnum && player.storage.hs_liegongnum > 0;
									},
									content() {
										player.draw(player.storage.hs_liegongnum);
									},
								},
							},
						},
						hs_jingshi: {
							trigger: {
								source: 'damageBegin2',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							_priority: -Infinity,
							lastDo: true,
							filter(event, player) {
								if (event.num - 2 < event.player.hujia) return false;
								return event.card && event.card.name == 'sha' && event.notLink();
							},
							content() {
								var demnum = trigger.num,
									truenum = demnum - trigger.player.hujia;
								trigger.num = Math.ceil(truenum / 2) + trigger.player.hujia;
								trigger.player.storage.hs_jingshi = demnum - trigger.num;
							},
							group: 'hs_jingshi_lose',
							subSkill: {
								lose: {
									trigger: {
										player: 'useCardAfter',
									},
									forced: true,
									audio: 'ext:划水池/audio:2',
									filter(event, player) {
										if (!event.targets) return false;
										for (var i of event.targets) {
											if (i.isAlive() && i.storage.hs_jingshi && i.storage.hs_jingshi > 0) return true;
										}
										return false;
									},
									content() {
										for (var i of trigger.targets) {
											if (i.isAlive() && i.storage.hs_jingshi && i.storage.hs_jingshi > 0) {
												player.draw(i.storage.hs_jingshi);
												var num = Math.min(i.storage.hs_jingshi, i.maxHp - 1);
												if (num > 0) i.loseMaxHp(num);
												delete i.storage.hs_jingshi;
											}
										}
									},
								},
							},
							mod: {
								cardnature(card, player) {
									if (
										game.hasPlayer(function (current) {
											return current.hasSkill('DIY_gongqi');
										}) &&
										card.name == 'sha' &&
										!card.nature
									)
										return 'tl_she';
								},
							},
							ai: {
								damageBonus: true,
							},
						},
						//冲儿
						hs_chengxiang: {
							trigger: {
								global: 'damageBegin3',
							},
							audio: 'ext:划水池/audio:5',
							forced: true,
							filter(event, player) {
								if (event.player != player) return event.num > event.player.hp;
								return event.player == player;
							},
							content() {
								'step 0';
								event.drawnum = 0;
								event.weight = 0;
								event.list = ['开始称象', '取消'];
								event.chuan = [];
								event.shi = [];
								for (var i = 0; i < 8; i++) event.shi.push(Math.trunc(40 + Math.random() * 21));
								event.xiang = 200 + Math.trunc(Math.random() * 141);
								event.show = '<img style=width:200px src=extension/划水池/image/card/hs_xiang.jpg><br>时孙权曾致巨象,太祖欲知其斤重,访之群下,咸莫能出其理.';
								('step 1');
								player
									.chooseControl(event.list)
									.set('prompt', event.show)
									.set('ai', function () {
										if (get.attitude(player, trigger.player) < 0) {
											if (event.list.includes('开始称象')) return '开始称象';
											else if (event.list.includes('继续')) return '继续';
											else if (event.list.includes('石4')) return '石4';
											else if (event.list.includes('结束')) return '结束';
											else return '确定';
										} else {
											if (event.list.includes('开始称象')) return '开始称象';
											else if (event.list.includes('继续')) return '继续';
											else if (event.list.includes('石3')) return '石3';
											else if (event.list.includes('石5')) return '石5';
											else if (event.list.includes('石7')) return '石7';
											else if (event.list.includes('石4')) return '石4';
											else if (event.list.includes('石1')) return '石1';
											else if (event.list.includes('结束')) return '结束';
											else return '确定';
										}
									});
								('step 2');
								if (result.control == '取消') event.finish();
								else if (result.control == '开始称象') {
									event.show = '<img style=width:200px src=extension/划水池/image/card/hs_xiang2.jpg><br>置象大船之上,而刻其水痕所至';
									event.list = ['继续'];
									event.goto(1);
								} else if (result.control == '继续') {
									event.show = '<img style=width:200px src=extension/划水池/image/card/hs_chuan0.jpg><br>称物以载之,则校可知矣.';
									event.list = ['石1', '石2', '石3', '石4', '石5', '石6', '石7', '石8'];
									event.goto(1);
								} else if (['石1', '石2', '石3', '石4', '石5', '石6', '石7', '石8'].includes(result.control)) {
									event.chuan.push(result.index);
									event.list.splice(result.index, 1, '移去' + result.control);
									if (!event.list.includes('确定') && event.chuan.length) event.list.push('确定');
									event.show = '<img style=width:200px src=extension/划水池/image/card/hs_chuan' + event.chuan.length + '.jpg><br>称物以载之,则校可知矣.';
									event.goto(1);
								} else if (['移去石1', '移去石2', '移去石3', '移去石4', '移去石5', '移去石6', '移去石7', '移去石8'].includes(result.control)) {
									event.chuan.remove(result.index);
									event.list.splice(result.index, 1, result.control.slice(-2));
									if (event.list.includes('确定') && event.chuan.length < 1) event.list.remove('确定');
									event.show = '<img style=width:200px src=extension/划水池/image/card/hs_chuan' + event.chuan.length + '.jpg><br>称物以载之,则校可知矣.';
									event.goto(1);
								} else if (result.control == '确定') {
									if (event.chuan.length) {
										event.show = '<img style=width:200px src=extension/划水池/image/card/hs_cheng.jpg><br>';
										for (var i = 0; i < event.chuan.length; i++) {
											event.weight += event.shi[event.chuan[i]];
											event.show += '石' + (event.chuan[i] + 1) + '重为' + event.shi[event.chuan[i]] + '石<br>';
										}
										event.chuan = [];
										event.show += '合计为' + event.weight + '石';
										event.list = ['确定'];
										event.goto(1);
									} else {
										if (get.isLuckyStar(player)) {
											event.xiang = Math.min(Math.max(event.weight - 30 + Math.trunc(Math.random() * 61), 200), 340);
											if (Math.random() < 0.05) event.xiang = event.weight;
										}
										event.xiangerror = Math.abs(event.xiang - event.weight);
										event.show = '<img style=width:200px src=extension/划水池/image/card/hs_xiang.jpg><br>此象重为' + event.xiang + '石,相差' + event.xiangerror + '石';
										game.log(player, '称象得' + event.weight + '石,此象重为' + event.xiang + '石,相差' + event.xiangerror + '石');
										event.list = ['结束'];
										event.goto(1);
									}
								}
								('step 3');
								if (event.xiangerror > 120) trigger.num += 1;
								if (event.xiangerror < 80) event.drawnum += 1;
								if (event.xiangerror < 60) event.drawnum += 1;
								if (event.xiangerror < 40) event.drawnum += 1;
								if (event.xiangerror < 20) {
									event.drawnum += 1;
									if (trigger.num > 0) trigger.num -= 1;
								}
								if (event.xiangerror < 10) {
									event.drawnum += 1;
									if (trigger.num > 0) trigger.num -= 1;
									else event.drawnum += 1;
								}
								if (event.xiangerror < 5 && trigger.num > 0) trigger.num -= 1;
								if (event.xiangerror < 3) {
									if (trigger.num > 0) trigger.num = 0;
									else player.recover();
								}
								if (event.xiangerror == 0) {
									player.draw(3);
									player.gainMaxHp(2);
									player.recover();
								}
								('step 4');
								if (event.drawnum) {
									var cards = get.cards(event.drawnum);
									player.hs_distributeCards(cards, game.filterPlayer());
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten: 0.8,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
											if (!target.hasSkill('hs_quanji') && target.hp > 1) return [0.5, get.tag(card, 'damage')];
											if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.2];
											if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.4];
										}
									},
								},
							},
						},
						hs_renxin: {
							trigger: {
								global: 'damageBegin4',
							},
							usable: 1,
							audio: 'ext:划水池/audio:3',
							forced: true,
							filter(event, player) {
								return event.player != player && event.num >= event.player.hp && event.player.countCards('h') < player.countCards('h');
							},
							content() {
								'step 0';
								var num = player.countCards('h') - trigger.player.countCards('h');
								player.chooseToDiscard('仁心:是否弃置' + num + '张牌并翻面,防止' + get.translation(trigger.player) + '受到的伤害？', 'h', num).set('ai', function (card) {
									var player = _status.event.player;
									if (get.attitude(player, _status.event.getTrigger().player) > 3) return 11 - get.value(card);
									else return -1;
								});
								('step 1');
								if (result.bool) {
									player.turnOver();
									trigger.cancel();
								}
							},
							ai: {
								expose: 0.5,
							},
						},
						//法正
						hs_zijiao: {
							trigger: {
								global: ['useCardToPlayered', 'gainAfter'],
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							filter(event, player) {
								if (event.name != 'gain') {
									if (event.player == event.target) return false;
									if (event.player == player) return false;
									if (!event.player.countCards('hej')) return false;
									if (event.target == player) return true;
								} else if (event.player == player) return false;
								return event.player.countExpansions('hs_boming');
							},
							content() {
								player.gainPlayerCard(trigger.player, 'hej', true);
							},
							ai: {
								combo: 'hs_xuanhuo',
							},
						},
						hs_xuanhuo: {
							group: 'hs_xuanhuo_draw',
							audio: 'ext:划水池/audio:3',
							usable: 1,
							enable: 'phaseUse',
							filterCard: true,
							position: 'hes',
							selectCard: [1, Infinity],
							discard: false,
							lose: false,
							selectTarget: 1,
							filterTarget: lib.filter.notMe,
							check(card) {
								return 11 - get.value(card);
							},
							content() {
								target.addToExpansion(cards, player, 'give').gaintag.add('hs_boming');
							},
							ai: {
								order: 1,
								result: {
									player() {
										return game.countPlayer() - 1;
									},
									target: -1,
								},
								threaten: 1.2,
							},
							subSkill: {
								draw: {
									trigger: {
										global: 'gainBegin',
									},
									audio: 'ext:划水池/audio:3',
									forced: true,
									filter(event, player) {
										if (event.parent.name == 'hs_xuanhuo_draw' || event.parent.name == 'hs_boming_draw') return false;
										return event.player.hasExpansions('hs_boming') && event.cards && event.cards.length;
									},
									content() {
										'step 0';
										trigger.cancel();
										player
											.chooseTarget(true, '令一名角色获得这些牌', function (card, player, target) {
												return trigger.player != target;
											})
											.set('ai', function (target) {
												return get.attitude(_status.event.player, target);
											});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											game.log(player, '将', trigger.player, '此次获得的', trigger.cards.length, '张牌交给了', target);
											target.gain(trigger.cards, 'draw');
										}
										('step 2');
										var num = Math.min(trigger.cards.length, trigger.player.countExpansions('hs_boming'));
										trigger.player.chooseCardButton('选择获得的<名>牌', true, num, trigger.player.getExpansions('hs_boming'));
										('step 3');
										if (result.links?.length) {
											trigger.player.gain(result.links, 'gain2');
											if (trigger.player == game.me) game.log(trigger.player, '获得了<名>牌:', result.links);
											else game.log(trigger.player, '获得了', result.links.length, '张<名>牌');
										}
									},
								},
							},
						},
						//曹仁
						hs_crjushou: {
							intro: {
								name: '据守',
								name2: '据守',
								content: '已有#个>据守<标记',
							},
							marktext: '据守',
							trigger: {
								player: 'turnOverAfter',
							},
							forced: true,
							popup: false,
							audio: 'ext:划水池/audio:2',
							content() {
								'step 0';
								if (player.isTurnedOver()) {
									player.chooseTarget(true, '据守:选择获得>据守<标记的角色', lib.filter.notMe).set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att > 0 && target.hasMark('hs_crjushou')) return 0;
										return att;
									});
								} else {
									player.changeHujia(2);
									player.turnOver();
									event.finish();
								}
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									target.hs_addMark('hs_crjushou');
								}
							},
							ai: {
								noturnOver: true,
								noturn: true,
							},
							group: ['hs_crjushou_round', 'hs_crjushou_lose', 'hs_crjushou_recover'],
							subSkill: {
								a: {},
								round: {
									trigger: {
										global: 'roundStart',
									},
									audio: 'ext:划水池/audio:2',
									popup: false,
									forced: true,
									content() {
										player.hs_changeMaxHujia(2);
										player.turnOver();
									},
								},
								lose: {
									trigger: {
										player: 'loseHpBefore',
									},
									forced: true,
									audio: 'ext:划水池/audio:2',
									filter(event, player) {
										return player.isTurnedOver();
									},
									content() {
										trigger.cancel();
										player.damage(trigger.num, 'nosource');
										player.draw(trigger.num);
									},
								},
								recover: {
									trigger: {
										player: 'recoverBegin',
									},
									forced: true,
									audio: 'ext:划水池/audio:2',
									filter(event, player) {
										return player.isTurnedOver() && !player.isDying();
									},
									content() {
										trigger.cancel();
										player.changeHujia(trigger.num);
									},
								},
							},
						},
						hs_jiewei: {
							trigger: {
								global: 'damageBegin4',
							},
							forced: true,
							_priority: 1,
							audio: 'ext:划水池/audio:4',
							filter(event, player) {
								return event.player.hasMark('hs_crjushou');
							},
							content() {
								trigger.cancel();
								trigger.player.hs_addMark('hs_crjushou', trigger.num);
							},
							ai: {
								combo: 'hs_crjushou',
							},
							group: ['hs_jiewei_round', 'hs_jiewei_use'],
							subSkill: {
								round: {
									trigger: {
										global: 'hs_roundAfter',
									},
									forced: true,
									audio: 'ext:划水池/audio:2',
									filter(event, player) {
										for (var i of game.filterPlayer()) {
											if (i.hasMark('hs_crjushou')) return true;
										}
										return false;
									},
									content() {
										for (var i of game.filterPlayer()) {
											var num0 = i.clearMark('hs_crjushou');
											if (num0 > 0) {
												var num = Math.trunc(num0 / 2);
												if (num > 0) i.loseHp(num);
												player.loseHp(num + 1);
											}
										}
									},
								},
								use: {
									trigger: {
										global: ['damageCancelled', 'damageZero'],
										player: 'damageAfter',
									},
									audio: 'ext:划水池/audio:4',
									forced: true,
									content() {
										'step 0';
										player.draw();
										('step 1');
										player.chooseToUse({
											prompt(event, player) {
												var list = [_status.event.player],
													txt = '你';
												if (trigger.player.isAlive()) list.add(trigger.player);
												if (trigger.source) list.add(trigger.source);
												for (var i of list) {
													if (i != _status.event.player) txt += '/' + get.translation(i);
												}
												return '是否对' + txt + '使用一张牌？';
											},
											filterTarget(card, player, target) {
												return target == trigger.player || target == player || target == trigger.source;
											},
											selectTarget: 1,
										});
									},
								},
							},
						},
						//华佗
						hs_wuqin: {
							trigger: {
								global: 'roundStart',
							},
							audio: 'ext:划水池/audio:3',
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt2('hs_wuqin'), lib.filter.notMe).set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
									if (event.target.isHealthy()) event._result = { control: 'add_maxhp' };
									else
										event.target.chooseControl('add_maxhp', 'recover_hp').set('ai', function () {
											var player = _status.event.player;
											if (event.target.hasSkill('hs_crjushou')) return 'recover_hp';
											if (get.attitude(event.target, player) > 1) {
												if (event.target.maxHp < 10) return 'add_maxhp';
												else return 'recover_hp';
											} else if (event.target.getDamagedHp() < event.target.hp && event.target.hp > 3) return 'add_maxhp';
											else return 'recover_hp';
										});
								} else event.finish();
								('step 2');
								if (result.control == 'recover_hp') event.target.recover();
								else event.target.gainMaxHp();
								('step 3');
								if (player.isHealthy()) event._result = { control: 'add_maxhp' };
								else
									player.chooseControl('add_maxhp', 'recover_hp').set('ai', function () {
										return 'add_maxhp';
									});
								('step 4');
								if (result.control == 'recover_hp') player.recover();
								else player.gainMaxHp();
							},
							mod: {
								maxHandcard(player, num) {
									return (
										num +
										game.countPlayer(function (current) {
											return current.isDamaged();
										})
									);
								},
							},
						},
						hs_liaodu: {
							enable: 'phaseUse',
							audio: 'ext:划水池/audio:4',
							usable: 1,
							filter(event, player) {
								return player.countCards('hes', { type: ['equip', 'trick', 'delay'] }) > 0;
							},
							position: 'hes',
							selectCard: 1,
							filterCard(card) {
								if (get.type2(card) == 'trick') return true;
								return get.type(card) == 'equip';
							},
							selectTarget: 1,
							filterTarget: lib.filter.notMe,
							check(card) {
								var player = _status.event.player,
									players = player.hs_filterOtherPlayer(),
									num = 9 - get.value(card);
								players.sort(function (a, b) {
									var maxa = Math.max(a.hp + 1, a.getDamagedHp()),
										maxb = Math.max(b.hp + 1, b.getDamagedHp()),
										atta = get.attitude(player, a),
										attb = get.attitude(player, b);
									if (atta >= 0) maxa += atta;
									if (attb >= 0) maxb += attb;
									return maxb - maxa;
								});
								if (players[0].hp > players[0].getDamagedHp()) {
									if (get.type(card) == 'equip') return num;
								} else if (get.type2(card) == 'trick') return num;
								return 0;
							},
							content() {
								if (get.type(cards[0]) == 'equip') {
									game.log(player, '对', target, '进行了', '#g『开颅』');
									var num1 = Math.trunc(target.hp / 2);
									if (num1 > 0) target.loseHp(num1);
									target.gainMaxHp(num1 + 1);
								} else {
									game.log(player, '对', target, '进行了', '#g『刮骨』');
									var num2 = Math.trunc(target.getDamagedHp() / 2);
									if (num2 > 0) target.loseMaxHp(num2);
									target.recover(num2 + 1);
								}
							},
							ai: {
								order: 9.5,
								result: {
									player(player, target) {
										var num1 = Math.trunc(target.hp + 1 / 2),
											num2 = Math.trunc(target.getDamagedHp() / 2);
										return Math.max(num1, num2) / 2;
									},
									target: 2,
								},
							},
							group: 'hs_liaodu_draw',
							subSkill: {
								draw: {
									forced: true,
									audio: 'hs_wuqin',
									trigger: {
										global: ['gainMaxHpAfter', 'loseMaxHpAfter'],
									},
									filter(event, player) {
										return event.num > 0;
									},
									content() {
										player.draw(trigger.num);
									},
								},
							},
						},
						hs_mafei: {
							trigger: {
								global: 'dieBegin',
							},
							audio: 'ext:划水池/audio:4',
							firstDo: true,
							forced: true,
							filter(event, player) {
								return event.player.maxHp > 1 && !event.player.isTurnedOver();
							},
							content() {
								'step 0';
								player.chooseToDiscard('hes', get.prompt('hs_mafei'), '弃置一张牌令其回复体力').set('ai', function (card) {
									if (get.attitude(player, trigger.player) > 0) return 15 - get.value(card);
									else return -1;
								});
								('step 1');
								if (result.bool) {
									var num = Math.min(Math.ceil(trigger.player.maxHp / 2), 5);
									trigger.cancel();
									trigger.player.turnOver(true);
									trigger.player.hs_recoverTo(num, player);
								}
							},
						},
						//许靖
						hs_boming: {
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							marktext: '名',
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							audio: 'ext:划水池/audio:2',
							group: 'hs_boming_gain',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								player.addToExpansion(player.getCards('h'), player, 'give').gaintag.add('hs_boming');
							},
							subSkill: {
								gain: {
									trigger: {
										global: 'gainEnd',
									},
									forced: true,
									audio: 'ext:划水池/audio:2',
									filter(event, player) {
										if (_status.currentPhase == player) return false;
										return event.player.countCards('h') > player.countExpansions('hs_boming');
									},
									content() {
										'step 0';
										var num1 = player.countExpansions('hs_boming'),
											num2 = trigger.player.countCards('h') - num1;
										event.cards = get.cards(num2);
										event.num1 = num1;
										event.num2 = num2;
										('step 1');
										player.addToExpansion(event.cards, player, 'give').gaintag.add('hs_boming');
										('step 2');
										if (player.countExpansions('hs_boming') <= event.num1) player.draw(event.num2);
									},
								},
							},
						},
						hs_yuxu: {
							trigger: {
								player: 'useCard1',
							},
							group: ['hs_yuxu_use', 'hs_yuxu_gain'],
							forced: true,
							popup: false,
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								for (var i of player.getExpansions('hs_boming')) {
									if (event.card.suit && i.suit == event.card.suit) return true;
									else if (event.card.number && i.number == event.card.number) return true;
								}
								return false;
							},
							content() {
								'step 0';
								var list = [];
								for (var i of player.getExpansions('hs_boming')) {
									if (i.suit == trigger.card.suit || i.number == trigger.card.number) list.push(i);
								}
								event.list = list;
								('step 1');
								player.chooseCardButton('选择弃置的<名>牌', true, 1, event.list).set('ai', function (card) {
									if (card.name == 'wuxie') return 20;
									else return 20 - get.value(card);
								});
								('step 2');
								event.card = result.links[[0]];
								player.loseToDiscardpile(event.card);
							},
							ai: {
								combo: 'hs_boming',
							},
							subSkill: {
								gain: {
									enable: ['chooseToUse', 'chooseToRespond'],
									hiddenCard(player, name) {
										if (name == 'wuxie') return false;
										for (var i of player.getCards('x')) {
											if (i.name == name) return true;
										}
										return false;
									},
									filter(event, player) {
										if (event.responded) return false;
										if (event.hs_yuxu_use) return false;
										for (var i of player.getCards('x')) {
											if (i.name != 'wuxie' && event.filterCard(i, player, event)) return true;
										}
										return false;
									},
									forced: true,
									content() {
										'step 0';
										var cardsi = player.getCards('x');
										event.cards = [];
										for (var i of cardsi) {
											var card = game.createCard(i.name, i.suit, i.number, get.nature(i));
											card.addGaintag(['hs_yuxu', i.gaintag]);
											card.storage.hs_yuxu_use = i;
											if (player == game.me) card.classList.add('drawinghidden');
											if (get.is.singleHandcard() || sort > 0) player.node.handcards1.appendChild(card);
											else player.node.handcards2.appendChild(card);
											card.classList.add('glows');
											event.cards.add(card);
										}
										if (player == game.me) ui.updatehl();
										player.update();
										('step 1');
										var evt = event.getParent(2);
										evt.set('hs_yuxu_use', true);
										evt.goto(0);
										var next = game.createEvent('hs_yuxu_destroy', false);
										next.cards = event.cards;
										next.player = player;
										next.setContent(function () {
											player.hs_destroyCards(cards);
										});
										event.next.remove(next);
										evt.after.unshift(next);
										evt.onresult = function (result) {
											evt.after.remove(next);
											evt.next.unshift(next);
										};
									},
									ai: {
										order: 15,
										result: {
											player: 1,
										},
									},
								},
								use: {
									audio: 'ext:划水池/audio:2',
									trigger: {
										player: ['useCardBefore', 'respondBefore', 'loseBefore'],
									},
									filter(event, player) {
										if (!event.cards) return false;
										for (var i of event.cards) {
											if (i.storage.hs_yuxu_use) return true;
										}
										return false;
									},
									forced: true,
									content() {
										for (var card of trigger.cards) {
											var cardt = card.storage.hs_yuxu_use;
											if (cardt) {
												trigger.cards.remove(card);
												if (trigger.name != 'lose') trigger.cards.add(cardt);
												player.hs_destroyCards(card);
											}
										}
									},
								},
							},
						},
						//吕蒙
						hs_qinxue: {
							trigger: {
								global: 'useCard1',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							filter(event, player) {
								return player != event.player && !player.getStorage('hs_qinxue').includes(event.card.name);
							},
							content() {
								player.markAuto('hs_qinxue', [trigger.card.name]);
							},
							intro: {
								content: '已记录牌名:$',
							},
							group: ['hs_qinxue_use', 'hs_qinxue_show'],
							subSkill: {
								use: {
									trigger: {
										player: 'useCard1',
									},
									forced: true,
									audio: 'ext:划水池/audio:2',
									filter(event, player) {
										return player.getStorage('hs_qinxue').includes(event.card.name);
									},
									content() {
										player.unmarkAuto('hs_qinxue', [trigger.card.name]);
										player.draw();
									},
								},
								show: {
									trigger: {
										global: ['useCardAfter', 'gainAfter'],
									},
									forced: true,
									popup: false,
									content() {
										player.removeGaintag('hs_qinxue');
										var list = [];
										for (var i of player.getCards('hsx')) {
											if (player.getStorage('hs_qinxue').includes(i.name)) list.push(i);
										}
										player.addGaintag(list, 'hs_qinxue');
									},
								},
							},
							mod: {
								ignoredHandcard(card, player) {
									if (player.getStorage('hs_qinxue').includes(card.name)) return true;
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && player.getStorage('hs_qinxue').includes(card.name)) return false;
								},
							},
						},
						hs_dujiang: {
							trigger: {
								player: 'phaseZhunbei',
							},
							group: ['hs_dujiang_achieve', 'hs_dujiang_fail'],
							derivation: ['hs_botu', 'hs_duojing'],
							forced: true,
							dutySkill: true,
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								return player.getStorage('hs_qinxue').length >= 0;
							},
							content() {
								var num = Math.ceil(player.getStorage('hs_qinxue').length / 2) - player.countCards('h');
								if (num > 0) player.draw(num);
								else if (num < 0) player.chooseToDiscard(-num, 'h');
							},
							intro: {
								content: '已造成#点伤害',
							},
							ai: {
								combo: 'hs_qinxue',
								effect: {
									player(card, player, target, current) {
										if (get.tag(card, 'damage')) return [0, -20];
									},
								},
							},
							subSkill: {
								achieve: {
									trigger: {
										player: 'phaseUseBegin',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										return player.getStorage('hs_qinxue').length >= game.countPlayer() * 3;
									},
									content() {
										game.log(player, '成功完成使命');
										player.awakenSkill('hs_dujiang');
										player.addSkillLog(['hs_botu', 'hs_duojing'], true);
									},
								},
								fail: {
									trigger: {
										source: 'damageSource',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									content() {
										'step 0';
										player.hs_addMark('hs_dujiang', 1, false);
										('step 1');
										if (player.countMark('hs_dujiang') >= 3) {
											player.awakenSkill('hs_dujiang');
											player.failSkill('hs_dujiang');
											game.log(player, '使命失败');
											player.loseMaxHp();
											if (player.countCards('h') < player.hp) player.draw(player.hp - player.countCards('h'));
											else if (player.countCards('h') > player.hp) player.chooseToDiscard('h', true, player.countCards('h') - player.hp, '将手牌弃至体力值');
										}
									},
								},
							},
						},
						hs_botu: {
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							audio: 'ext:划水池/audio:2',
							filterCard: lib.filter.cardDiscardable,
							selectCard() {
								var num = _status.event.player.getStorage('hs_qinxue').length;
								return [1, num];
							},
							filter(event, player) {
								return player.getStorage('hs_qinxue').length;
							},
							check(card, player) {
								var cards = ui.selected.cards;
								var num = player.getStorage('hs_qinxue').filter(function (name) {
									if (
										player.countCards('h', function (card) {
											if (cards.includes(card)) return false;
											return card.name != name;
										}) > 1
									)
										return false;
									return get.type(name) != 'basic';
								});
								if (cards.length >= num) return -1;
								return 7 - get.value(card);
							},
							content() {
								'step 0';
								var list = player.getStorage('hs_qinxue'),
									dialog = ui.create.dialog('勤学', [list, 'vcard']);
								player
									.chooseButton(cards.length, dialog, true)
									.set('prompt', '博图:选择 ' + get.cnNumber(cards.length) + '个牌名')
									.set('ai', function (button) {
										var player = _status.event.player,
											name = button.link[2],
											num = get.value({ name: name }, player);
										if (get.type(name) == 'equip') num += 8;
										if (get.type(name) == 'trick') num += 5;
										for (var i of player.getCards('h').filter(function (card) {
											return !cards.includes(card);
										})) {
											if (i.name == name) num -= 1.5;
										}
										return num;
									});
								('step 1');
								var list2 = [];
								for (var i of result.links) list2.add(i[2]);
								player.unmarkAuto('hs_qinxue', list2);
								player.recast(cards, null, function (player, cards) {
									player.draw(cards.length).set('log', false).gaintag = ['hs_botu'];
								});
								player.draw(cards.length).gaintag = ['hs_botu'];
								player.addTempSkill('hs_botu_use');
							},
							ai: {
								combo: 'hs_qinxue',
								order: 1,
								result: {
									player: 2,
								},
								threaten: 1.55,
							},
							subSkill: {
								use: {
									mod: {
										cardEnabled2(card) {
											if (get.itemtype(card) == 'card' && card.hasGaintag('hs_botu')) return false;
										},
									},
									onremove(player) {
										player.removeGaintag('hs_botu');
									},
								},
							},
						},
						hs_duojing: {
							trigger: {
								player: 'useCard2',
							},
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								if (player != _status.currentPhase) return false;
								if (get.type(event.card) != 'basic' && !get.tag(event.card, 'damage')) return false;
								return player.getStorage('hs_qinxue').length;
							},
							content() {
								'step 0';
								var go = false;
								if (trigger.addCount === false) go = false;
								else if (trigger.card.name == 'sha') {
									if (!player.hasSkill('paoxiao') && !player.hasSkill('tanlin3') && !player.hasSkill('zhaxiang2') && !player.hasSkill('fengnu') && !player.getEquip('zhuge') && !trigger.player.getEquip('rewrite_zhuge') && !player.hasSkill('hs_mice_use') && !player.hasSkill('nzry_longnu_2') && !player.hasSkill('kuangcai_use') && !player.hasSkill('olpaoxiao') && !player.hasSkill('rezongshi_paoxiao') && !player.hasSkill('drlt_xiongluan_effect')) {
										if (player.hasSkillTag('respondSha')) go = player.countCards('hs') > 0;
										else if (player.hasSkill('hs_yuxu')) go = player.countCards('hsx', 'sha') > 0;
										else go = player.countCards('hs', 'sha') > 0;
									}
								} else if (trigger.card.name == 'jiu') {
									if (!player.hasSkill('oljiuchi') && !player.hasSkill('hs_mice_use')) {
										if (player.hasSkill('hs_yuxu')) go = player.countCards('hsx', 'jiu') > 0;
										else go = player.countCards('hs', 'jiu') > 0;
									}
								} else if (
									get.tag(trigger.card, 'damage') &&
									trigger.targets.filter(function (cur) {
										cur.getEquips(2).length && get.attitude(player, cur) > 0;
									}).length
								)
									go = true;
								var list = player.getStorage('hs_qinxue');
								var dialog = ui.create.dialog('勤学', [list, 'vcard']);
								player
									.chooseButton(1, dialog)
									.set('prompt', '夺荆:是否令此 ' + get.translation(trigger.card) + ' 不计入使用次数' + get.tag(trigger.card, 'damage') ? '并无视防具？' : '？')
									.set('ai', function (button) {
										if (!_status.event.go) return -1;
										var player = _status.event.player,
											num = get.value({ name: button.link[2] }, player);
										if (button.link[0] == 'equip') num += 8;
										if (button.link[0] == 'trick') num += 4;
										for (var i of player.getCards('h')) {
											if (i.name == button.link[2]) num -= 1;
										}
										return num;
									})
									.set('go', go);
								('step 1');
								if (result.links?.length) {
									player.unmarkAuto('hs_qinxue', [result.links[0][2]]);
									trigger.addCount = false;
									if (player.stat[player.stat.length - 1].card[trigger.card.name] > 0) {
										player.stat[player.stat.length - 1].card[trigger.card.name]--;
									}
									if (get.tag(trigger.card, 'damage')) {
										for (var i of trigger.targets) {
											i.addTempSkill('qinggang2');
											i.storage.qinggang2.add(trigger.card);
										}
									}
								}
							},
							ai: {
								combo: 'hs_qinxue',
								unequip: true,
							},
						},
						//魏延
						hs_kuanggu: {
							trigger: {
								source: 'damageSource',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							filter(event, player) {
								return !player.storage.hs_kuanggu;
							},
							lastDo: true,
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								('step 1');
								event.count--;
								player
									.chooseControl('选项一', '选项二', '背水!', 'cancel2')
									.set('choiceList', ['回合结束时回复一点体力', '获得一点护甲,本回合手牌上限+1', '背水!增加一点体力上限,并依次执行上述所有选项,此技能失效直至回合结束'])
									.set('ai', function () {
										var event = _status.event;
										var num = event.player.countCards('h');
										var num1 = 0;
										for (var i of event.player.getCards('h')) {
											if (event.player.hasUseTarget(i, null, true)) {
												num--;
												if (get.tag(i, 'damage')) num1++;
											}
										}
										if (num1 == 0) return 2;
										if (
											player.hujia < player.maxHujia &&
											!game.hasPlayer(function (current) {
												return current.hasSkillTag('jueqing', false, player);
											})
										)
											return 1;
										if (event.player.hasSkill('hs_qimou')) {
											var num = Math.min(player.countMark('hs_qimou'), player.storage.hs_qimou_maxHp + player.storage.hs_qimou_hp);
											if (event.player.countMark('hs_kuanggu_recover') < num) {
												if (event.player.countMark('hs_kuanggu_recover') + event.player.hp < 5) return 0;
												else if (event.player.getHandcardLimit() <= num) return 1;
												else return 0;
											} else return 1;
										} else {
											if (event.player.countMark('hs_kuanggu_recover') + event.player.hp < Math.min(event.player.maxHp, 4)) return 0;
											else if (event.player.getHandcardLimit() <= num) return 1;
											else return 0;
										}
									});
								if (!player.storage.hs_kuanggu1) player.storage.hs_kuanggu1 = 0;
								('step 2');
								if (result.control != 'cancel2') {
									game.log(player, '选择了', '#g『狂骨』', '的', '#y' + result.control);
									if (result.index % 2 == 0) {
										player.hs_addMark('hs_kuanggu_recover', 1, false);
										if (!player.hasSkill('hs_kuanggu_recover')) player.addTempSkill('hs_kuanggu_recover');
									}
									if (result.index > 0) {
										player.changeHujia();
										player.storage.hs_kuanggu1 += 1;
									}
									if (result.index == 2) {
										player.gainMaxHp();
										player.storage.hs_kuanggu = true;
									}
								}
								('step 3');
								if (event.count > 0 && !player.storage.hs_kuanggu) event.goto(1);
							},
							mod: {
								maxHandcard(player, num) {
									if (player.storage.hs_kuanggu1) return num + player.storage.hs_kuanggu1;
									return num;
								},
							},
							subSkill: {
								recover: {
									intro: {
										content: '回合结束时回复#点体力',
									},
									marktext: '狂骨',
									audio: 'ext:划水池/audio:2',
									trigger: {
										global: 'phaseEnd',
									},
									forced: true,
									filter(event, player) {
										return player.countMark('hs_kuanggu_recover') > 0;
									},
									content() {
										player.recover(player.clearMark('hs_kuanggu_recover', false));
									},
								},
							},
						},
						hs_qimou: {
							intro: {
								content(storage, player, skill) {
									var str = '';
									if (player.storage.hs_qimou_maxHp) str += '失去了' + player.storage.hs_qimou_maxHp + '点体力上限<br>';
									if (player.storage.hs_qimou_hp) str += '失去了' + player.storage.hs_qimou_hp + '点体力<br>';
									if (storage) str += '造成了' + storage + '点伤害';
									return str;
								},
							},
							marktext: '奇谋',
							trigger: {
								player: 'phaseUseBegin',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							filter(event, player) {
								return player.maxHp > 1;
							},
							content() {
								'step 0';
								var map = {},
									list = [],
									num0 = Math.min(player.maxHp - 1, game.countPlayer());
								for (var i = 0; i <= num0; i++) {
									var cn = get.cnNumber(i, true);
									map[cn] = i;
									list.push(cn);
								}
								var shas = player.countCards('hs', function (card) {
									return get.tag(card, 'damage');
								}),
									num1 = Math.min(shas + 2, num0);
								if (player.hasMark('hs_juanxia_lose')) {
									num1 = Math.max(0, Math.min(num1, player.maxHp - player.countMark('hs_juanxia_lose') - 1));
								}
								if (player.hasSkill('spsongshu_block') || player.hasSkill('new_zhixi')) num1 = 0;
								if (!lib.filter.cardEnabled({ name: 'sha' }, player)) num1 = 0;
								if (lib.filter.cardUsable({ name: 'sha' }, player)) num1 = 0;
								event.map = map;
								player
									.chooseControl(list, function () {
										return get.cnNumber(_status.event.goon, true);
									})
									.set('prompt', '失去任意点体力上限')
									.set('goon', num1);
								('step 1');
								var num = event.map[result.control] || 0;
								if (num == 0) event.finish();
								else event.num = num;
								('step 2');
								event.lose = player.loseMaxHp(event.num);
								player.storage.hs_qimou_maxHp = event.num;
								('step 3');
								if (event.lose && event.lose.loseHp) {
									player.storage.hs_qimou_hp = event.lose.loseHp;
									event.num += event.lose.loseHp;
								}
								if (!player.storage.hs_qimou_hp) player.storage.hs_qimou_hp = 0;
								player.draw(event.num);
								player.addTempSkill('hs_qimou_damage', 'phaseUseAfter');
								player.markSkill('hs_qimou');
							},
							subSkill: {
								damage: {
									forced: true,
									popup: false,
									trigger: {
										source: ['damageEnd', 'dieAfter'],
									},
									content() {
										var toGain = false;
										if (trigger.name != 'die') {
											player.hs_addMark('hs_qimou', trigger.num, false);
											if (!player.hasSkill('hs_qimou_use')) {
												player.addTempSkill('hs_qimou_use', 'phaseUseAfter');
											}
											if (player.countMark('hs_qimou') >= player.storage.hs_qimou_maxHp) toGain = true;
										} else toGain = true;
										if (toGain && !player.hasSkill('hs_qimou_max')) {
											player.addTempSkill('hs_qimou_max', 'phaseUseAfter');
										}
									},
									onremove(player) {
										player.clearMark('hs_qimou', false);
										delete player.storage.hs_qimou_maxHp;
										delete player.storage.hs_qimou_hp;
									},
								},
								use: {
									audio: 'ext:划水池/audio:1',
									mod: {
										targetInRange(card, player) {
											if (card.name == 'sha') return true;
										},
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + player.storage.hs_qimou_maxHp + player.storage.hs_qimou_hp;
										},
									},
								},
								max: {
									audio: 'ext:划水池/audio:2',
									trigger: {
										player: 'phaseUseEnd',
									},
									forced: true,
									filter(event, player) {
										return player.hasMark('hs_qimou');
									},
									content() {
										var num = Math.min(player.countMark('hs_qimou'), player.storage.hs_qimou_maxHp + player.storage.hs_qimou_hp);
										player.gainMaxHp(num);
									},
								},
							},
						},
						//杨仪
						hs_duoduan: {
							trigger: {
								target: 'useCardToTarget',
							},
							audio: 'ext:划水池/audio:3',
							forced: true,
							filter(event, player) {
								return player.countCards('he') > 0 && event.player != player && player.storage.hs_duoduan < 2;
							},
							content() {
								'step 0';
								player
									.chooseToDiscard('he', get.prompt2('hs_duoduan'))
									.set('ai', function (card) {
										if (_status.event.goon) {
											var num = 9 - get.value(card);
											var evcard = _status.event.getParent(2);
											if (get.type(card) != get.type(evcard)) num += 5;
											if (get.color(card) != get.color(evcard)) num += 5;
											return num;
										}
										return 0;
									})
									.set(
										'goon',
										(function () {
											if (get.attitude(trigger.player, player) > 0 && trigger.card != 'tao') return true;
											if (get.tag(trigger.card, 'damage')) {
												if (player.hasSkillTag('maixie') || player.hasSkillTag('maixie_hp') || player.hasSkillTag('maixie_defend')) return false;
												if (trigger.card.name == 'sha' && !player.hasShan()) return true;
												if (trigger.card.name == 'wanjian' && !player.hasShan()) return true;
												if (trigger.card.name == 'juedou' && !player.hasSha()) return true;
												if (trigger.card.name == 'nanman' && !player.hasSha()) return true;
											}
											if (player.countCards('hes') < 3) return true;
											return event.getRand() < 0.3;
										})()
									);
								('step 1');
								if (result.bool) {
									player.storage.hs_duoduan += 1;
									var card = result.cards[0];
									player.recast(result.cards);
									if (!get.type(trigger.card) || get.type(card) != get.type(trigger.card)) {
										trigger.excluded.add(player);
										trigger.player.draw(2);
										game.log(trigger.player, '的', trigger.card, '对', player, '失效了');
									}
									if (!get.color(trigger.card) || get.color(card) != get.color(trigger.card)) player.gain(trigger.cards.filterInD(), 'gain2');
								}
							},
							ai: {
								maixie: true,
								threaten: 0.9,
							},
						},
						hs_juanxia: {
							marktext: '狷狭',
							intro: {
								content(storage, player) {
									var text = '';
									if (storage) text += '无法使用、打出或弃置与' + get.translation(storage) + '牌名或点数相同的牌';
									if (player.storage.hs_juanxia_lose) text += '<br>下一个出牌阶段结束时失去' + player.storage.hs_juanxia_lose + '点体力';
									return text;
								},
							},
							audio: 'ext:划水池/audio:3',
							trigger: {
								global: 'hs_roundEnd',
							},
							forced: true,
							content() {
								'step 0';
								event.drawlist = [];
								event.damagelist = [];
								for (var i of player.hs_filterOtherPlayer()) {
									if (i.hs_getGain('round', 'num') >= player.hs_getGain('round', 'num') && i.countCards('hej') > 0) event.drawlist.push(i);
									if (i.hs_countDamage('round', 'source') >= player.hs_countDamage('round', 'source')) event.damagelist.push(i);
								}
								('step 1');
								if (event.drawlist.length) {
									player
										.chooseTarget([1, event.drawlist.length], '弃置任意名符合条件的角色各一张牌', function (card, player, target) {
											return event.drawlist.includes(target);
										})
										.set('ai', function (target) {
											return -get.attitude(_status.event.player, target);
										});
								} else event.goto(3);
								('step 2');
								if (result.targets?.length) {
									var players = result.targets.sortBySeat();
									player.line(players);
									player.hs_discardCardsMultiple(players, ['hej', true]);
								}
								('step 3');
								if (event.damagelist.length) {
									player.chooseCardTarget({
										prompt: '弃置任意张牌,并选择至多等量符合条件的角色',
										prompt2: '选择等量符合条件的角色,施加debuff',
										filterCard: true,
										position: 'hes',
										selectCard: [1, event.damagelist.length],
										filterTarget(card, player, target) {
											return event.damagelist.includes(target);
										},
										selectTarget() {
											return [1, ui.selected.cards.length];
										},
										ai1(card) {
											var num = 0;
											for (var m of event.damagelist) {
												if (get.attitude(player, m) < 0) num += 1;
											}
											return 6 + num - get.value(card);
										},
										ai2(target) {
											var num = target.hasSkillTag('maixie') ? 2 : 0;
											return -get.attitude(_status.event.player, target) - num;
										},
									});
								} else event.finish();
								('step 4');
								if (result.cards?.length) {
									player.discard(result.cards);
									var players = result.targets.sortBySeat();
									player.line(players);
									for (var current of players) {
										current.markAuto('hs_juanxia', result.cards);
										current.hs_addMark('hs_juanxia_lose', 1, false);
									}
								}
							},
							global: 'hs_juanxia_lose',
							subSkill: {
								lose: {
									audio: 'ext:划水池/audio:2',
									trigger: {
										player: 'phaseUseEnd',
									},
									forced: true,
									filter(event, player) {
										return player.hasMark('hs_juanxia_lose');
									},
									content() {
										player.loseHp(player.countMark('hs_juanxia_lose'));
										player.clearMark('hs_juanxia_lose', false);
										player.unmarkAuto('hs_juanxia', player.getStorage('hs_juanxia'));
									},
									mod: {
										cardEnabled2(card, player) {
											for (var i of player.getStorage('hs_juanxia')) {
												if (card.name == i.name) return false;
												if (card.number == i.number) return false;
											}
										},
										cardSavable(card, player) {
											for (var i of player.getStorage('hs_juanxia')) {
												if (card.name == i.name) return false;
												if (card.number == i.number) return false;
											}
										},
										cardDiscardable(card, player) {
											for (var i of player.getStorage('hs_juanxia')) {
												if (card.name == i.name) return false;
												if (card.number == i.number) return false;
											}
										},
									},
								},
							},
						},
						hs_yuanfei: {
							trigger: {
								player: 'dyingBegin',
								global: 'dieAfter',
							},
							audio: 'ext:划水池/audio:1',
							limited: true,
							filter(event, player) {
								return get.mode() != 'guozhan' || event.player == player;
							},
							check(event, player) {
								if (player.hp <= 0) return true;
								if (get.mode() != 'guozhan') {
									var stat = get.situation();
									switch (player.identity) {
										case 'fan':
											return stat > 0;
										case 'zhong':
											return stat < 0;
									}
								}
								return false;
							},
							content() {
								'step 0';
								player.loseMaxHp();
								player.recover();
								player.awakenSkill('hs_yuanfei');
								player.awakenSkill('hs_duoduan');
								if (get.mode() != 'guozhan') {
									player.changeGroup('wei');
									player.hs_changeBackground('hs_yangyi', 'hs_yangyi2.jpg');
								} else event.finish();
								('step 1');
								if (player.identity == 'zhong' || player.identity == 'fan') {
									player.chooseBool('是否将身份改为' + (player.identity == 'zhong' ? '反贼' : '忠臣')).set('ai', function () {
										var stat = get.situation();
										switch (player.identity) {
											case 'fan':
												if (stat < 0) return false;
												if (stat == 0) return Math.random() < 0.6;
												return true;
											case 'zhong':
												if (stat > 0) return false;
												if (stat == 0) return Math.random() < 0.6;
												return true;
										}
									});
								} else event.finish();
								('step 2');
								if (result.bool) {
									if (player.identity == 'zhong') player.identity = 'fan';
									else player.identity = 'zhong';
									if (player.identityShown || player == game.me) player.setIdentity();
								}
							},
						},
						//孙权
						hs_zhiheng: {
							audio: 'ext:划水池/audio:10',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (player.hasExpansions('hs_tongye')) return true;
								return player.countCards('hes') > 0;
							},
							content() {
								'step 0';
								event.list1 = player.getCards('hes').concat(player.getExpansions('hs_tongye'));
								var list2 = get.cards(player.countCards('hesjx'));
								event.list2 = list2;
								event.list3 = [];
								var list0 = ['制衡:选择保留的牌', '牌堆顶', list2];
								if (player.countCards('hs') > 0) list0.push('手牌', player.getCards('hs'));
								if (player.countCards('e') > 0) list0.push('装备区', player.getCards('e'));
								if (player.hasSkill('hs_tongye') && player.hasExpansions('hs_tongye')) list0.push('武将牌上的<业>', player.getExpansions('hs_tongye'));
								player.chooseButton(event.list1.length, list0, true).set('ai', function (button) {
									var player = _status.event.player;
									var type = get.type(button.link);
									var position = get.position(button.link);
									var value = get.value(button.link, player);
									if (position == 'x') value = 0;
									if (type == 'equip' && position != 'e') value += 5;
									if (type == 'equip' && position == 'e') value -= 5;
									if (position == 'c') value += 5;
									return value;
								});
								('step 1');
								if (result.links?.length) {
									var list = result.links;
									for (var i of list) {
										if (get.owner(i) == player)
											event.list1.splice(
												event.list1.findIndex((item) => item === i),
												1
											);
										else {
											event.list2.splice(
												event.list2.findIndex((item) => item === i),
												1
											);
											event.list3.push(i);
										}
									}
									if (event.list1.length) player.discard(event.list1);
									if (event.list3.length) {
										player.gain(event.list3, 'draw');
										game.log(player, '获得了' + get.cnNumber(event.list3.length) + '张牌');
									}
								}
								('step 2');
								if (event.list2.length) player.hs_pushPileCards(event.list2);
							},
							ai: {
								order: 6,
								result: {
									player: 5,
								},
							},
						},
						hs_tongye: {
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							marktext: '统业',
							audio: 'ext:划水池/audio:6',
							trigger: {
								global: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								for (var i of event.cards) {
									if (i.original == 'e') return true;
								}
								return false;
							},
							content() {
								'step 0';
								var num = 0;
								for (var i of trigger.cards) {
									if (i.original == 'e') num++;
								}
								event.count = num;
								('step 1');
								event.count--;
								var card = get.bottomCards(1);
								player.addToExpansion(card, player, 'give').gaintag.add('hs_tongye');
								event.card = card[0];
								('step 2');
								if (get.type(event.card) == 'equip') player.chooseUseTarget(event.card);
								('step 3');
								if (event.count > 0) player.chooseBool(get.prompt2('hs_tongye')).set('frequentSkill', 'hs_tongye');
								else event.finish();
								('step 4');
								if (result.bool) event.goto(1);
							},
							onremove(player, skill) {
								var cards = player.getExpansions(skill);
								if (cards.length) player.loseToDiscardpile(cards);
							},
							ai: {
								combo: 'hs_zhiheng',
								reverseEquip: true,
							},
						},
						hs_jiuyuan: {
							trigger: {
								global: 'recoverBefore',
							},
							audio: 'ext:划水池/audio:2',
							zhuSkill: true,
							forced: true,
							filter(event, player) {
								return player != event.player && event.player.group == 'wu' && player.isDamaged() && event.parent.name != 'hs_jiuyuan' && player.hasZhuSkill('hs_jiuyuan', event.player);
							},
							content() {
								'step 0';
								trigger.player.chooseBool('是否对' + get.translation(player) + '发动『救援』？', '改为令其回复点体力摸牌,你获得一张<业>并摸一张牌').set('ai', function () {
									var evt = _status.event;
									return get.attitude(evt.player, evt.parent.player) > 0 && evt.parent.player.isDamaged();
								});
								('step 1');
								if (result.bool) {
									trigger.player.line(player, 'green');
									trigger.cancel();
									player.recover(trigger.num, trigger.player);
									player.draw(trigger.num);
								}
							},
							group: 'hs_jiuyuan_recover',
							subSkill: {
								recover: {
									trigger: {
										player: 'recoverBegin',
									},
									audio: 'ext:划水池/audio:4',
									zhuSkill: true,
									forced: true,
									filter(event, player) {
										if (!player.hasZhuSkill('hs_jiuyuan')) return false;
										if (!event.source) return false;
										if (event.source.group != 'wu') return false;
										return event.source != player;
									},
									content() {
										'step 0';
										trigger.num++;
										trigger.source.draw();
										('step 1');
										if (player.hasExpansions('hs_tongye')) trigger.source.chooseCardButton('选择获得的<业>牌', true, player.getExpansions('hs_tongye'));
										else event.finish();
										('step 2');
										if (result.links?.length) {
											trigger.source.gain(result.links, player, 'giveAuto');
											game.log(trigger.source, '获得了一张<业>');
										}
									},
								},
							},
						},
						//周群
						hs_tiansuan: {
							trigger: {
								global: 'phaseBegin',
							},
							forced: true,
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								if (_status.currentPhase != player) return event.player.countCards('he') > 0;
								else return true;
							},
							content() {
								'step 0';
								event.count = 0;
								if (_status.currentPhase != player) {
									trigger.player
										.chooseCard('he', '是否交给' + get.translation(player) + '一张牌来抽取一张<命运签>？')
										.set('ai', function (card) {
											return 10 - get.value(card) + get.attitude(trigger.player, player);
										})
										.set('target', player);
									event.goto(2);
								} else
									player.chooseBool('是否摸一张牌,抽取两张<命运签>？').set('ai', function (button) {
										return true;
									});
								('step 1');
								if (result.bool) {
									player.draw();
									event.goto(4);
								} else event.finish();
								('step 2');
								if (result.cards?.length) {
									player.gain(result.cards, trigger.player, 'giveAuto');
								} else event.finish();
								('step 3');
								var list = ['上上签', '上签', '中签', '下签', '下下签'];
								var dialog = ui.create.dialog('天算', [list, 'vcard']);
								player
									.chooseButton(1, dialog)
									.set('prompt', '天算:是否增加其中一个命运签的权重？')
									.set('ai', function (button) {
										var name = button.link[2];
										if (get.attitude(player, trigger.player) > 0 && name == '上上签') return 1;
										else if (get.attitude(player, trigger.player) < 0 && name == '下下签') return 1;
										else if (get.attitude(player, trigger.player) == 0 && name == '中签') return 0.5;
										else if (get.attitude(player, trigger.player) == 0 && name == '上签') return 0.5;
										else return 0;
									});
								('step 4');
								var list = [0, 1, 2, 3, 4, 1, 2, 3];
								if (result.links?.length) {
									var list0 = ['上上签', '上签', '中签', '下签', '下下签'];
									var qian = list0.indexOf(result.links[0][2]);
									list.push(qian, qian, qian);
								}
								var num;
								if (get.isLuckyStar(player)) {
									if (result.links) num = qian;
									else num = 0;
								} else num = list.randomGet();
								event.num = num;
								var tsSkill = {
									audio: 'hs_tiansuan',
									mark: true,
									trigger: {},
									intro: {},
								};
								var skillId = 'hs_tiansuan_' + event.num + event.count + player.playerid + String(Math.floor(Math.random() * 10));
								tsSkill.usable = 2;
								tsSkill.forced = true;
								tsSkill.firstDo = true;
								var tsSkill_info = '锁定技.每回合限两次,';
								var tstrigger = lib.phaseName.randomGet();
								var tsqianhou = lib.skill.hs_tiansuan.triggerQianhou.randomGet();
								tsSkill.trigger.player = tstrigger + tsqianhou.trigger;
								tsSkill_info += get.translation(tstrigger) + tsqianhou.translate + ',你进行一个额外的';
								var tscontent = lib.skill.hs_tiansuan.contentList[event.num];
								tsSkill.content = tscontent.content;
								tsSkill_info += tscontent.translate + '.';
								tsSkill.marktext = tscontent.show;
								event.marktext = tscontent.show;
								tsSkill.intro.content = tsSkill_info;
								lib.skill[skillId] = tsSkill;
								lib.translate[skillId] = tscontent.show + ' ' + get.translation(tstrigger) + tsqianhou.translate.slice(-1);
								event.skillId = skillId;
								game.log(trigger.player, '抽取的命运签为:', '#g' + tscontent.show + ' ' + get.translation(tstrigger) + tsqianhou.translate);
								('step 5');
								if (_status.currentPhase != player) {
									player.chooseBool('是否将此' + event.marktext + '交给' + get.translation(trigger.player) + '？').set('ai', function () {
										if (event.num > 2 && get.attitude(player, trigger.player) < 0) return true;
										return event.num < 3 && get.attitude(player, trigger.player) >= 0;
									});
								} else event._result = { bool: true };
								('step 6');
								if (result.bool) {
									trigger.player.addTempSkill(event.skillId);
									player.line(trigger.player, 'green');
									game.log(trigger.player, '获得了命运签');
								} else trigger.player.draw(2);
								if (_status.currentPhase == player && event.count < 1) {
									event.count++;
									event.goto(4);
								}
							},
							triggerQianhou: [
								{
									trigger: 'Before',
									translate: '开始前',
								},
								{
									trigger: 'After',
									translate: '结束后',
								},
							],
							contentList: [
								{
									content() {
										'step 0';
										player.phaseDraw();
										('step 1');
										player.phaseUse();
									},
									translate: '摸牌阶段和出牌阶段',
									show: '上上签',
								},
								{
									content() {
										'step 0';
										player.phaseDraw();
										('step 1');
										player.recover();
									},
									translate: '摸牌阶段',
									show: '上签',
								},
								{
									content() {
										player.phaseUse();
									},
									translate: '出牌阶段',
									show: '中签',
								},
								{
									content() {
										'step 0';
										player.phaseZhunbei();
										('step 1');
										player.phaseJieshu();
										('step 2');
										player.chooseToDiscard(true);
									},
									translate: '准备阶段和结束阶段并弃一张牌',
									show: '下签',
								},
								{
									content() {
										'step 0';
										player.phaseDiscard();
										('step 1');
										player.loseHp();
									},
									translate: '弃牌阶段并失去一点体力.',
									show: '下下签',
								},
							],
						},
						//邓艾
						hs_tuntian: {
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							marktext: '田',
							popup: false,
							forced: true,
							audio: 'ext:划水池/audio:6',
							trigger: {
								global: 'phaseEnd',
							},
							content() {
								'step 0';
								if (player.hs_getLose('num') + player.hs_countDamage() > 3) {
									if (player.hasExpansions('hs_tuntian')) {
										player.chooseCardButton('选择弃置的<田>', true, player.getExpansions('hs_tuntian'));
									}
								} else event.goto(2);
								('step 1');
								if (result.bool) player.loseToDiscardpile(result.links);
								event.finish();
								('step 2');
								var cards0 = [];
								for (var i of game.filterPlayer2()) cards0.addArray(i.hs_getLose());
								if (cards0.length) {
									var list = player.getExpansions('hs_tuntian'),
										list1 = [],
										list0 = cards0.filterInD('d');
									for (var i of list0) {
										if (get.type(i) == 'trick') {
											var count = 0;
											for (var j of list) {
												if (i.name == j.name) count++;
											}
											for (var e of list1) {
												if (i.name == e.name) count++;
											}
											if (count < 1) list1.push(i);
										}
									}
									event.list = list1;
									if (event.list.length) player.chooseBool(get.prompt2('hs_tuntian')).set('frequentSkill', 'hs_tuntian');
								}
								('step 3');
								if (result.bool) {
									player.addToExpansion(event.list, player, 'gain2').gaintag.add('hs_tuntian');
								}
							},
						},
						hs_zaoxian: {
							trigger: {
								global: 'phaseBegin',
							},
							audio: 'ext:划水池/audio:3',
							juexingji: true,
							forced: true,
							filter(event, player) {
								return player.countExpansions('hs_tuntian') >= 6;
							},
							derivation: 'hs_jixi',
							content() {
								player.awakenSkill('hs_zaoxian');
								player.recover();
								player.addSkill('hs_jixi');
							},
							ai: {
								combo: 'hs_tuntian',
							},
						},
						hs_jixi: {
							trigger: {
								player: ['loseAfter', 'cardsDiscardAfter'],
							},
							usable: 1,
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								if (player.countExpansions('hs_tuntian') < 2) return false;
								for (var i of event.cards) {
									if (i.original == 'h' || i.original == 'e') return true;
								}
								return false;
							},
							popup: false,
							content() {
								'step 0';
								var list = ['选择一张<田>当作【出其不意】使用', player.getExpansions('hs_tuntian')];
								player.chooseButton(list);
								('step 1');
								if (result.links?.length) {
									var num = Math.ceil((player.countExpansions('hs_tuntian') - 1) / 2),
										next = player.chooseUseTarget({ name: 'chuqibuyi' }, result.links, 'nodistance', true, false);
									next.set('prompt', '急袭:选择【出其不意】的目标');
									next.set('selectTarget', [1, num]);
								}
							},
							group: 'hs_jixi_shunshou',
							subSkill: {
								shunshou: {
									trigger: {
										source: 'damageAfter',
									},
									audio: 'ext:划水池/audio:4',
									forced: true,
									filter(event, player) {
										if (event.player == player) return false;
										if (!event.card) return false;
										if (event.card.name != 'chuqibuyi') return false;
										if (!event.player.isAlive()) return false;
										return event.player.countCards('hej') > 0;
									},
									content() {
										player.useCard({ name: 'shunshou' }, trigger.player);
									},
								},
							},
							ai: {
								combo: 'hs_tuntian',
								threaten: 1.2,
							},
						},
						//大宝
						hs_pojun: {
							trigger: {
								target: 'useCardToTarget',
							},
							forced: true,
							audio: 'ext:划水池/audio:3',
							filter(event, player) {
								return event.player != player && player.countCards('hes') > 0;
							},
							content() {
								'step 0';
								player.chooseCard('hes', '破军:是否对' + get.translation(trigger.player) + '使用一张伤害性牌？').set('ai', function (card) {
									var player = _status.event.player,
										target = _status.event.getTrigger().player,
										value = get.value(card);
									if (get.attitude(player, target) > 0) return -1;
									if (!get.tag(card, 'damage')) value -= 4;
									if (!target.storage.hs_pojun_suit.includes(card.suit)) {
										value += 2;
										if (get.color(card) == 'red') value += 3;
									}
									if (target.storage.hs_pojun_number.includes(card.number)) value -= 2;
									return 15 - value;
								});
								('step 1');
								if (result.cards?.length) {
									player.storage.hs_pojun = result.cards[0];
									if (!get.tag(result.cards[0], 'damage')) {
										var nature = ['thunder', 'fire', 'kami', 'ice'].randomGet();
										player.useCard(
											{
												name: 'sha',
												nature: nature,
											},
											result.cards,
											trigger.player
										);
									} else player.useCard(result.cards[0], trigger.player);
								} else event.finish();
								('step 2');
								if (
									player.hasHistory('sourceDamage', function (evt) {
										if (evt.getParent('useCard').card != evt.card) return false;
										return evt.cards.length == 1 && evt.cards.includes(player.storage.hs_pojun);
									})
								) {
									player.draw();
									game.log(trigger.player, '的', '#g【' + get.translation(trigger.card) + '】', '被', player, '#g' + get.translation('hs_pojun'), '了');
									trigger.parent.cancel();
									if (trigger.cards) {
										var cards = trigger.cards.filterInD();
										if (cards.length) player.gain(cards, 'gain2');
									}
								}
							},
							group: 'hs_pojun_sha',
							global: 'hs_pojun_fengyin',
							subSkill: {
								sha: {
									trigger: {
										player: 'useCardToPlayered',
									},
									audio: 'ext:划水池/audio:3',
									forced: true,
									filter(event, player) {
										return event.card && get.tag(event.card, 'damage');
									},
									logTarget: 'target',
									content() {
										'step 0';
										var loged = false,
											show = [];
										if (!trigger.target.storage.hs_pojun_suit) trigger.target.storage.hs_pojun_suit = [];
										if (!trigger.target.storage.hs_pojun_number) trigger.target.storage.hs_pojun_number = [];
										if (trigger.card.suit) {
											if (trigger.target.storage.hs_pojun_suit.includes(trigger.card.suit)) loged = true;
											else trigger.target.storage.hs_pojun_suit.add(trigger.card.suit);
										}
										if (trigger.card.number) {
											if (trigger.target.storage.hs_pojun_number.includes(trigger.card.number)) loged = true;
											else trigger.target.storage.hs_pojun_number.add(trigger.card.number);
										}
										for (var i of trigger.target.storage.hs_pojun_suit.concat(trigger.target.storage.hs_pojun_number)) show.add(get.translation(i));
										trigger.target.setStorage('hs_pojun_fengyin', show.toString(), true);
										if (loged)
											player
												.chooseControl('翻面', '伤害+1', 'cancel2')
												.set('prompt', '破军:你可以令' + get.translation(trigger.target) + '翻面或伤害+1')
												.set('ai', function () {
													var att = get.attitude(player, trigger.target);
													if (att < 0) return '伤害+1';
													else if (att > 0) return '翻面';
													else return 'cancel2';
												});
										('step 1');
										if (result.control == '伤害+1') trigger.parent.baseDamage++;
										else if (result.control == '翻面') trigger.target.turnOver();
									},
								},
								fengyin: {
									intro: {
										content: '无法使用打出:$',
									},
									mod: {
										cardEnabled2(card, player) {
											if (player.storage.hs_pojun_suit && player.storage.hs_pojun_suit.length) {
												for (var i of player.storage.hs_pojun_suit) {
													if (!card.suit || card.suit == i) return false;
												}
											}
											if (player.storage.hs_pojun_suit && player.storage.hs_pojun_number.length) {
												for (var j of player.storage.hs_pojun_number) {
													if (!card.suit || card.number == j) return false;
												}
											}
										},
									},
								},
							},
						},
						hs_yicheng: {
							audio: 'ext:划水池/audio:3',
							filter(event, player) {
								return player.countCards('hes') > 0;
							},
							enable: 'chooseToUse',
							filterCard: true,
							position: 'hes',
							viewAs: {
								name: 'caomu',
							},
							prompt: '将一张牌当【草木皆兵】使用',
							group: 'hs_yicheng_draw',
							global: 'hs_yicheng_tag',
							subSkill: {
								draw: {
									trigger: {
										global: 'phaseJieshuBegin',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										return game.hasPlayer(function (current) {
											if (current == player) return false;
											return (
												current.countCards('h', function (card) {
													return card.hasGaintag('hs_yicheng');
												}) > 0
											);
										});
									},
									content() {
										for (var i of game.filterPlayer()) {
											if (i != player) {
												var list = i.getCards('h', function (card) {
													return card.hasGaintag('hs_yicheng');
												});
												if (list.length) player.gain(list, 'give', i, 'bySelf');
											}
											i.removeGaintag('hs_yicheng');
										}
									},
									ai: {
										effect: {
											player(card, player, target) {
												if (card.name == 'caomu') {
													//QQQ
													return [1, 0, 1, -5];
												}
											},
										},
									},
								},
								tag: {
									trigger: {
										player: 'gainEnd',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.getParent(2).name == 'caomu_skill2' && event.cards.length;
									},
									content() {
										player.addGaintag(trigger.cards, 'hs_yicheng');
									},
								},
							},
						},
						//拍拍手
						hs_qianchong: {
							intro: {
								content(storage, player, skill) {
									var list = ['Ａ', '２', '３', '４', '５', '６', '７', '８', '９', '10', 'Ｊ', 'Ｑ', 'Ｋ'],
										str = '已记录点数:<br>';
									for (var i = 0; i < list.length; i++) {
										if (i != 0) str += ' ';
										if (storage.includes(i + 1)) str += '<span class="firetext">' + list[i] + '</span>';
										else str += list[i];
									}
									return str;
								},
							},
							trigger: {
								global: 'useCardToPlayered',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							filter(event, player) {
								if (event.player == player || event.target != player) return false;
								return event.card && event.card.number && event.card.number != '' && !player.getStorage('hs_qianchong').includes(event.card.number);
							},
							content() {
								player.markAuto('hs_qianchong', [trigger.card.number]);
								trigger.parent.excluded.add(player);
							},
							group: ['hs_qianchong_use', 'hs_qianchong_show'],
							onremove(player) {
								player.removeGaintag('hs_qianchong');
							},
							ai: {
								combo: 'hs_shangjian',
							},
							subSkill: {
								use: {
									trigger: {
										player: 'useCard1',
									},
									audio: 'ext:划水池/audio:4',
									forced: true,
									filter(event, player) {
										return event.card && event.card.number && !player.getStorage('hs_qianchong').includes(event.card.number);
									},
									content() {
										player.markAuto('hs_qianchong', [trigger.card.number]);
										player.stat[player.stat.length - 1].card[trigger.card.name]--;
									},
								},
								show: {
									trigger: {
										global: ['gameDrawAfter', 'useCardAfter', 'gainAfter'],
									},
									forced: true,
									popup: false,
									lastDo: true,
									content() {
										var list = [],
											list1 = [];
										for (var i of player.getCards('hs')) {
											if (player.getStorage('hs_qianchong').includes(i.number)) list1.push(i);
											else list.push(i);
										}
										player.addGaintag(list, 'hs_qianchong');
										player.removeGaintag('hs_qianchong', list1);
									},
								},
							},
						},
						hs_shangjian: {
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							audio: 'ext:划水池/audio:6',
							filter(event, player) {
								return event.player.hs_getLose(false, 'num') > 0;
							},
							content() {
								'step 0';
								var limit,
									list0 = trigger.player.hs_getLose(false),
									list3 = list0.filterInD('d');
								if (trigger.player != player) limit = trigger.player.hp;
								else limit = trigger.player.maxHp;
								if (list0.length <= limit) {
									var numlist = [],
										numtext = '';
									for (var t of list0) {
										if (player.getStorage('hs_qianchong').includes(t.number) && !numlist.includes(t.number)) {
											numlist.push(t.number);
											numtext += '  ' + String(t.number);
										}
									}
									event.numlist = numlist;
									event.num = list0.length;
									var dialog2 = ui.create.dialog('尚俭:是否令' + get.translation(trigger.player) + '摸' + get.cnNumber(event.num) + '张牌');
									if (numlist.length) dialog2.add('可清除的点数有:' + numtext);
									player.chooseBool(dialog2).set('ai', function () {
										return get.attitude(player, trigger.player) >= 0;
									});
								} else if (list3.length && player != trigger.player && trigger.player.isAlive()) {
									var list = [],
										list2 = [];
									for (var i of list3) {
										if (get.tag(i, 'damage')) list.push(i);
										else list2.push(i);
									}
									event.list0 = list3;
									event.list = list;
									var chlist;
									if (list.length) {
										chlist = ['是否对' + get.translation(trigger.player) + '使用这些牌', [list, 'vcard']];
										if (list2.length) chlist.push('并获得剩余牌', [list2, 'vcard']);
									} else if (list2.length) chlist = ['是否获得' + get.translation(trigger.player) + '失去的牌', [list2, 'vcard']];
									else event.finish();
									var dialog = ui.create.dialog('尚俭', ...chlist);
									player.chooseBool(dialog).set('ai', function () {
										return get.attitude(player, trigger.player) <= 0;
									});
									event.goto(2);
								} else event.finish();
								('step 1');
								if (result.bool) {
									player.unmarkAuto('hs_qianchong', event.numlist);
									trigger.player.draw(event.num);
									player.draw(event.numlist.length);
								}
								event.finish();
								('step 2');
								if (result.bool) {
									game.cardsGotoOrdering(event.list0);
								} else event.finish();
								('step 3');
								if (event.list.length && trigger.player.isAlive()) {
									var card = event.list.shift();
									event.list0.remove(card);
									player.useCard(card, trigger.player, false).noActCount = true;
								} else {
									if (event.list0.length) player.gain(event.list0, 'gain2');
									event.finish();
								}
								('step 4');
								event.goto(3);
							},
						},
						//庞统
						hs_guolun: {
							intro: {
								content: '本回合已对$发动过『过论』',
							},
							trigger: {
								global: 'chooseToCompareBegin',
							},
							forced: true,
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								if (player == event.player) return true;
								if (event.targets) return event.targets.includes(player);
								return player == event.target;
							},
							content() {
								player.draw();
							},
							group: ['hs_guolun_use', 'hs_guolun_gain'],
							subSkill: {
								use: {
									enable: 'phaseUse',
									filter(event, player) {
										return game.countPlayer(function (current) {
											return player.canCompare(current) && !player.storage.hs_guolun.includes(current);
										});
									},
									selectTarget: 1,
									filterTarget(card, player, target) {
										return player.canCompare(target) && !player.storage.hs_guolun.includes(target);
									},
									content() {
										player.storage.hs_guolun.add(target);
										player.storage.hs_guolun.sortBySeat();
										player.markSkill('hs_guolun');
										player.chooseToCompare([target]).callback = lib.skill.hs_guolun.callback;
									},
									ai: {
										order: 10,
										result: {
											player: 1.2,
											target: -1,
										},
									},
								},
								gain: {
									trigger: {
										player: ['chooseToCompareAfter', 'compareMultipleAfter'],
										target: ['chooseToCompareAfter', 'compareMultipleAfter'],
									},
									forced: true,
									audio: 'ext:划水池/audio:2',
									popup: false,
									filter(event, player) {
										if (event.hs_used) return false;
										if (player == event.player) return event.num1 > event.num2;
										else return event.num1 < event.num2;
									},
									content() {
										trigger.parent.hs_used = true;
										var target;
										if (player == trigger.player) target = trigger.target;
										else target = trigger.player;
										player.gainPlayerCard(target, 'hej');
									},
								},
							},
							callback() {
								if (event.num1 <= event.num2) player.link(true);
								if (event.num1 >= event.num2) target.link(true);
							},
						},
						hs_songsang: {
							trigger: {
								global: 'dieBegin',
							},
							audio: 'ext:划水池/audio:4',
							limited: true,
							filter(event, player) {
								return event.player != player;
							},
							content() {
								player.awakenSkill('hs_songsang');
								player.addSkill('hs_zhanji');
								if (trigger.player.maxHp > 0) player.gainMaxHp(trigger.player.maxHp);
								if (trigger.player.hp > 0) player.recover(trigger.player.hp);
							},
							group: 'hs_songsang_shu',
							derivation: ['hs_zhanji', 'hs_mice'],
							subSkill: {
								shu: {
									trigger: {
										player: 'dieBefore',
									},
									audio: 'ext:划水池/audio:2',
									limited: true,
									content() {
										player.awakenSkill('hs_songsang');
										player.addSkill('hs_zhanji');
										if (player.maxHp > 0) {
											trigger.cancel();
											player.hs_recoverTo(player.maxHp);
										}
									},
								},
							},
						},
						hs_zhanji: {
							trigger: {
								player: 'phaseBegin',
							},
							audio: 'ext:划水池/audio:2',
							juexingji: true,
							forced: true,
							derivation: 'hs_mice',
							content() {
								player.awakenSkill('hs_zhanji');
								player.addSkill('hs_mice');
								if (get.mode() != 'guozhan') {
									player.changeGroup('shu');
									player.hs_changeBackground('hs_pangtong', 'hs_pangtong2.jpg');
								}
							},
						},
						hs_mice: {
							intro: {
								name: '密策',
								name2: '密策',
								content: '本轮已发动『密策』#次',
							},
							marktext: '密策',
							audio: 'ext:划水池/audio:2',
							trigger: {
								global: 'phaseZhunbeiBegin',
							},
							logTarget: 'player',
							filter(event, player) {
								return player.countMark('hs_mice') < 2;
							},
							check(event, player) {
								return event.player == player || get.attitude(player, event.player) >= 2.8;
							},
							content() {
								'step 0';
								event.num = game.countGroup();
								var num = String(event.num);
								trigger.player
									.chooseControl('上策', '中策', '下策')
									.set('choiceList', ['上策:弃置' + num + '张牌,本回合使用的伤害性牌伤害+1;', '中策:本回合使用【杀】的次数上限+' + num + ';', '下策:摸牌阶段额外摸' + num + '张牌,本回合手牌上限+' + num + ',使用牌不能指定其他角色作为目标.'])
									.set('ai', function () {
										var event = _status.event;
										if (game.countGroup() > 2 && event.player.countCards('h') < 2) return 2;
										if (
											event.player.countCards('hs', function (card) {
												return card.name != 'sha' && get.tag(card, 'damage');
											}) > 3 &&
											event.player.countCards('he') > 6
										)
											return 0;
										if (event.player.countCards('h', 'sha') > 2) return 1;
										return [1, 1, 2].randomGet();
									});
								('step 1');
								player.hs_addMark('hs_mice', 1, false);
								if (result.index == 0) {
									trigger.player.chooseToDiscard(game.countGroup(), 'hes');
									trigger.player.addTempSkill('hs_mice_damage');
									trigger.player.markSkill('hs_mice_damage');
								} else if (result.index == 1) {
									trigger.player.addTempSkill('hs_mice_use');
									trigger.player.storage.hs_mice_use = event.num;
									trigger.player.markSkill('hs_mice_use');
								} else if (result.index == 2) {
									trigger.player.storage.hs_mice_draw = event.num;
									trigger.player.addTempSkill('hs_mice_draw');
									trigger.player.markSkill('hs_mice_draw');
								}
							},
							subSkill: {
								damage: {
									intro: {
										name: '密策',
										name2: '密策',
										content: '『上策』本回合使用的伤害性牌伤害+1',
									},
									marktext: '上策',
									audio: 'ext:划水池/audio:2',
									trigger: {
										player: 'useCard1',
									},
									forced: true,
									filter(event, player) {
										return get.tag(event.card, 'damage');
									},
									content() {
										trigger.baseDamage++;
									},
								},
								use: {
									marktext: '中策',
									intro: {
										name: '密策',
										name2: '密策',
										content: '『中策』本回合使用【杀】的次数上限+#',
									},
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha' && player.storage.hs_mice_use && player.storage.hs_mice_use > 0) return num + player.storage.hs_mice_use;
										},
									},
								},
								draw: {
									intro: {
										name: '密策',
										name2: '密策',
										content: '『下策』本回合手牌上限+#,使用牌不能指定其他角色作为目标.',
									},
									marktext: '下策',
									audio: 'ext:划水池/audio:2',
									trigger: {
										player: 'phaseDrawBegin2',
									},
									forced: true,
									filter(event, player) {
										return !event.numFixed;
									},
									content() {
										trigger.num += player.storage.hs_mice_draw;
									},
									mod: {
										playerEnabled(card, player, target) {
											if (player != target) return false;
										},
										maxHandcard(player, num) {
											return num + player.storage.hs_mice_draw;
										},
									},
								},
							},
						},
						//于禁
						hs_yj_tongbing: {
							trigger: {
								player: ['phaseBegin', 'phaseEnd'],
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							_priority: 24,
							content() {
								player.draw();
							},
						},
						hs_yj_bingshi: {
							intro: {
								name: '兵势',
								content: '本回合已发动『兵势』#次',
							},
							marktext: '兵势',
							audio: 'ext:划水池/audio:2',
							forced: true,
							trigger: {
								player: 'damageSource',
							},
							_priority: 3,
							filter(event, player) {
								return player.countMark('hs_yj_bingshi') < player.storage.hs_zhenyu;
							},
							content() {
								player.hs_addMark('hs_yj_bingshi', 1, false);
								player.draw();
							},
						},
						hs_yj_junxing: {
							intro: {
								name: '军形',
								content: '本回合已发动『军形』#次',
							},
							marktext: '军形',
							audio: 'ext:划水池/audio:2',
							trigger: {
								source: 'damageSource',
							},
							forced: true,
							_priority: 7,
							filter(event, player) {
								return player.countMark('hs_yj_junxing') < player.storage.hs_zhenyu;
							},
							content() {
								player.hs_addMark('hs_yj_junxing', 1, false);
								player.draw();
							},
						},
						hs_yj_zhushou: {
							trigger: {
								player: 'damageAfter',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							usable: 1,
							_priority: 13,
							content() {
								player.changeHujia();
							},
							ai: {
								maixie_defend: true,
								threaten: 0.9,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing')) return;
										if (player._hs_yj_zhushou_tmp) return;
										if (target.hasSkill('shibei_ai')) return;
										if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
										if (get.tag(card, 'damage')) {
											if (target.getHistory('damage').length) return [1, -2];
											else {
												if (get.attitude(player, target) > 0 && target.hp > 1) return 0;
												if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus')) {
													if (card.name == 'sha') return;
													var sha = false;
													player._hs_yj_zhushou_tmp = true;
													var num = player.countCards('h', function (card) {
														if (card.name == 'sha') {
															if (sha) return false;
															else sha = true;
														}
														return get.tag(card, 'damage') && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
													});
													delete player._hs_yj_zhushou_tmp;
													if (player.hasSkillTag('damage')) num++;
													if (num < 2) {
														var enemies = player.getEnemies();
														if (enemies.length == 1 && enemies[0] == target && player.needsToDiscard()) return;
														return 0;
													}
												}
											}
										}
									},
								},
							},
						},
						hs_yj_xiandeng: {
							forced: true,
							inherit: 'xiandeng',
						},
						hs_zhenyu: {
							init(player, skill) {
								if (game.roundNumber > 0) player.useSkill('hs_zhenyu');
							},
							intro: {
								name: '镇御',
								content: '技能数量上限为#',
							},
							marktext: '镇御',
							forced: true,
							popup: false,
							audio: 'ext:划水池/audio:2',
							trigger: {
								global: ['gameDrawAfter', 'showCharacterAfter'],
							},
							content() {
								game.hs_yj_start = true;
								var num = 4;
								if (get.mode() == 'guozhan') num = 6;
								else if (get.config('double_character') && (lib.config.mode == 'identity' || lib.config.mode == 'stone')) num = 6;
								else if (get.config('double_character_jiange') && lib.config.mode == 'versus' && _status.mode == 'jiange') num = 6;
								for (var i of game.filterPlayer()) {
									if (!i.storage.hs_zhenyu) i.hs_zhenyuChange(num);
								}
								if (!player.storage.hs_zhenyu_add) {
									player.hs_zhenyuChange(2);
									player.storage.hs_zhenyu_add = true;
								}
							},
							derivation: ['hs_yj_tongbing', 'hs_yj_bingshi', 'hs_yj_junxing', 'hs_yj_zhushou', 'hs_yj_xiandeng'],
							group: ['hs_zhenyu_change', 'hs_zhenyu_die'],
							subSkill: {
								change: {
									trigger: {
										global: ['hs_changeGroup', 'hs_addSkill', 'hs_removeSkill', 'hs_zhenyuChange'],
									},
									forced: true,
									popup: false,
									audio: 'ext:划水池/audio:1',
									filter(event, player) {
										if (
											(player.name != 'hs_yujin' || player.name2 != 'hs_yujin') &&
											game.hasPlayer(function (current) {
												return current != player && (current.name == 'hs_yujin' || current.name2 == 'hs_yujin') && current.hasSkill('hs_zhenyu');
											})
										)
											return false;
										return game.hs_yj_start;
									},
									content() {
										'step 0';
										game.hs_yj_start = false;
										var list = trigger.player.hs_getSkills(true),
											list0 = ['hs_yj_tongbing', 'hs_yj_bingshi', 'hs_yj_junxing', 'hs_yj_zhushou', 'hs_yj_xiandeng'],
											list1 = list0.filter(function (skill) {
												return !trigger.player.hs_getAdditionalSkill('hs_zhenyu').includes(skill);
											});
										if (trigger.player.storage.skill_blocker && trigger.player.storage.skill_blocker.length) {
											game.hs_yj_start = true;
											event.finish();
										} else if (trigger.name == 'hs_changeGroup' && !event.cg) {
											event.cg = true;
											event.list = list;
										} else if (trigger.player.storage.hs_zhenyu < list.length) {
											var list3 = list0.filter(function (skill) {
												return trigger.player.hs_getAdditionalSkill('hs_zhenyu').includes(skill);
											});
											if (list3.length) {
												var skill0 = list3[list3.length - 1];
												if (skill0) {
													trigger.player.removeAdditionalSkill('hs_zhenyu', skill0);
													game.log(trigger.player, '失去了技能', '#g『' + get.translation(skill0) + '』');
												}
												event.redo();
											} else event.list = list;
										} else if (list1.length && trigger.player.storage.hs_zhenyu > list.length) {
											var num = Math.min(Math.max(trigger.player.storage.hs_zhenyu - list.length, 0), list1.length);
											if (num > 0) {
												var list2 = list1.randomGets(num);
												trigger.player.addAdditionalSkill('hs_zhenyu', list2, true);
												var textlist = [trigger.player, '获得了技能'];
												for (var i of list2) textlist.push('#g『' + get.translation(i) + '』');
												game.log(...textlist);
											} else event.finish();
											event.redo();
										} else {
											game.hs_yj_start = true;
											event.finish();
										}
										('step 1');
										var list = event.list;
										if (list.length) {
											event.videoId = lib.status.videoId++;
											var func = function (skills, id) {
												var dialog = ui.create.dialog('forcebutton');
												dialog.videoId = id;
												dialog.add(get.translation(trigger.player) + (trigger.name == 'hs_changeGroup' ? '势力由' + get.translation(trigger.lastGroup) + '变化为' + get.translation(trigger.group) : '技能数量为' + get.cnNumber(list.length) + ',超出『镇御』限制' + get.cnNumber(trigger.player.storage.hs_zhenyu, true)));
												dialog.add('移除其一个技能');
												for (var i = 0; i < skills.length; i++) {
													dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">『' + get.translation(skills[i]) + '』</div><div>' + game.getSkillInfo(skills[i]) + '</div></div>');
												}
												dialog.addText(' <br> ');
											};
											if (player == game.me) func(list, event.videoId);
											player.chooseControl(list).set('ai', function () {
												return list.randomGet();
											});
										} else event.goto(0);
										('step 2');
										game.broadcastAll('closeDialog', event.videoId);
										if (result.control) {
											trigger.player.awakenSkill(result.control);
											game.log(trigger.player, '失去了技能', '#g『' + get.translation(result.control) + '』');
										}
										event.goto(0);
									},
								},
								die: {
									trigger: {
										player: 'dieAfter',
									},
									forced: true,
									forceDie: true,
									content() {
										game.hs_yj_start = false;
										for (var i of game.players) i.removeAdditionalSkill('hs_zhenyu');
										if (player.storage.hs_zhenyu_add) {
											player.hs_zhenyuChange(-2);
											delete player.storage.hs_zhenyu_add;
										}
									},
								},
							},
							onremove(player, skill) {
								game.hs_yj_start = false;
								for (var i of game.players) i.removeAdditionalSkill('hs_zhenyu');
								if (player.storage.hs_zhenyu_add) {
									player.hs_zhenyuChange(-2);
									delete player.storage.hs_zhenyu_add;
								}
							},
						},
						hs_yizhong: {
							trigger: {
								player: 'damageEnd',
							},
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								return event.num > 0;
							},
							forced: true,
							content() {
								'step 0';
								var list = ['令至多' + get.cnNumber(trigger.num) + '名角色『镇御』中的x加一'],
									list0 = ['加'];
								if (
									game.filterPlayer(function (current) {
										return current.storage.hs_zhenyu > 0;
									}).length
								) {
									list.push('令至多' + get.cnNumber(trigger.num) + '名角色『镇御』中的x减一');
									list0.push('减');
								}
								if (trigger.num > 1) {
									list.push('获得' + get.cnNumber(trigger.num - 1) + '点护甲');
									list0.push('护甲');
								}
								list0.push('cancel2');
								player
									.chooseControl(list0)
									.set('choiceList', list)
									.set('ai', function () {
										if (
											list0.includes('减') &&
											game.filterPlayer(function (current) {
												return get.attitude(player, current) < 0 && current.storage.hs_zhenyu > 0;
											}).length >= trigger.num
										)
											return '减';
										else if (list0.includes('护甲') && trigger.num > 2) return Math.random() > 0.7 ? '加' : '护甲';
										else if (
											list0.includes('减') &&
											game.filterPlayer(function (current) {
												return get.attitude(player, current) < 0 && current.storage.hs_zhenyu > 0;
											}).length
										)
											return '减';
										else return '加';
									});
								('step 1');
								if (result.control != 'cancel2') {
									game.log(player, '选择了', '#g『毅重』', '的', '#y' + result.control);
									if (result.control == '护甲') {
										player.changeHujia(trigger.num - 1);
										event.finish();
									} else if (result.control == '减') {
										player
											.chooseTarget([1, trigger.num], '令至多' + get.cnNumber(trigger.num) + '名角色『镇御』中的x减一', function (card, player, target) {
												return target.storage.hs_zhenyu > 0;
											})
											.set('ai', function (target) {
												if (_status.event.player == target) return -1;
												return -get.attitude(_status.event.player, target) / (target.storage.hs_zhenyu * 2);
											});
									} else if (result.control == '加') {
										player.chooseTarget([1, trigger.num], '令至多' + get.cnNumber(trigger.num) + '名角色『镇御』中的x加一').set('ai', function (target) {
											if (get.attitude(_status.event.player, target) <= 0) return -1;
											return get.attitude(_status.event.player, target) + 20 - target.storage.hs_zhenyu;
										});
										event.goto(3);
									}
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									for (var target of result.targets) {
										target.hs_zhenyuChange(-1);
									}
								}
								event.finish();
								('step 3');
								if (result.targets?.length) {
									for (var target of result.targets) {
										target.hs_zhenyuChange(1);
									}
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten: 0.8,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										if (get.tag(card, 'damage') && player != target) return [1, 0.6];
									},
								},
							},
						},
						//大虎
						hs_zenhui: {
							trigger: {
								global: 'loseAfter',
							},
							forced: true,
							audio: 'ext:划水池/audio:3',
							filter(event, player) {
								if (!event.player.isAlive()) return false;
								if (event.player == player) return false;
								return (
									event.cards &&
									event.cards.filterInD('d').filter(function (card) {
										return game.hasPlayer(function (current) {
											if (event.player == current || !event.player.inRange(current)) return false;
											return lib.filter.targetEnabled2(card, event.player, current);
										});
									}).length
								);
							},
							content() {
								'step 0';
								event.cards = trigger.cards.filterInD('d').filter(function (card) {
									return game.hasPlayer(function (current) {
										if (trigger.player == current || !trigger.player.inRange(current)) return false;
										return lib.filter.targetEnabled2(card, trigger.player, current);
									});
								});
								game.cardsGotoOrdering(event.cards);
								('step 1');
								event.card = event.cards.shift();
								if (trigger.player.isAlive())
									player
										.chooseTarget('选择' + get.translation(trigger.player) + '使用' + get.translation(event.card) + '的目标', function (card, player, target) {
											return trigger.player != target && trigger.player.inRange(target);
										})
										.set('ai', function (target) {
											return get.effect_use(target, event.card, trigger.player, player) * 2;
										});
								('step 2');
								if (result.targets?.length) {
									trigger.player.useCard(event.card, result.targets[0]);
								}
								('step 3');
								if (event.cards.length && trigger.player.isAlive()) event.goto(1);
							},
						},
						hs_jiaojin: {
							trigger: {
								player: 'loseAfter',
							},
							forced: true,
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								for (var i of event.cards) {
									if (i.original == 'h' || i.original == 'e') return true;
								}
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget('弃置一名其他角色区域内的一张牌', function (card, player, target) {
										return target != player && target.countCards('hej');
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										var att = get.attitude(player, target);
										if (att < 0) att = -Math.sqrt(-att);
										else att = Math.sqrt(att);
										return att * lib.card.guohe.ai.result.target(player, target);
									});
								('step 1');
								if (result.bool) player.discardPlayerCard(result.targets[0], 'hej', true);
								('step 2');
								var use = false,
									evt = trigger.parent;
								if (trigger.name.startsWith('lose')) {
									if (trigger.position == ui.discardPile) use = true;
									if (trigger.type && trigger.type == 'gain') {
										evt.cancel();
										use = true;
									}
								} else if (!evt.relatedEvent || evt.relatedEvent.name != 'useCard') use = true;
								if (use) {
									var cards = [];
									if (result.bool) cards = result.cards.filterInD('d');
									for (var i of trigger.cards) {
										if (i.original == 'h') cards.push(i);
									}
									player.gain(cards, 'gain2');
								}
							},
							ai: {
								threaten: 0.8,
								effect: {
									target(card, player, target) {
										if (card.name == 'shunshou' || card.name == 'guohe' || card.name == 'liuxinghuoyu') return 1;
									},
								},
								noh: true,
							},
						},
						//元直
						hs_xiawang: {
							intro: {
								content: '本回合已对$发动过『侠望』',
							},
							prompt(event) {
								return get.translation(event.player) + '受到' + get.translation(event.source) + '造成的伤害,是否摸一张牌发动『侠望』？';
							},
							audio: 'ext:划水池/audio:10',
							popup: false,
							trigger: {
								global: 'damageAfter',
							},
							filter(event, player) {
								if (player.storage.hs_xiawang && player.storage.hs_xiawang.includes(event.player)) return false;
								return event.source && event.source != player && event.source.isAlive();
							},
							check(event, player) {
								if (get.attitude(player, event.source) <= 0) return true;
								else return event.source.hp > 2 && (event.source.hasSkillTag('maixie') || event.source.hasSkillTag('maixie_hp'));
							},
							content() {
								'step 0';
								player.draw();
								if (trigger.player != player) {
									if (!player.storage.hs_xiawang) player.storage.hs_xiawang = [];
									player.storage.hs_xiawang.add(trigger.player);
									player.markSkill('hs_xiawang');
								}
								('step 1');
								if (player.countCards('h', (card) => get.tag(card, 'damage'))) {
									//QQQ
									player.chooseToUse({
										forced: true,
										prompt: '侠望:对' + get.translation(trigger.source) + '使用一张伤害性牌',
										filterCard(card, player, event) {
											if (!get.tag(card, 'damage')) return false;
											return lib.filter.filterCard(card, player, event);
										},
										filterTarget(card, player, target) {
											return target == trigger.source;
										},
										selectTarget: 1,
									});
								} else {
									player.showHandcards();
								}
								('step 2');
								if (result.bool && trigger.player.isAlive() && trigger.player != player && trigger.player.countCards('hes') > 0) {
									trigger.player.chooseCard('hes', '侠望:是否交给' + get.translation(player) + '一张牌？').set('ai', function (card) {
										if (get.attitude(trigger.player, player) <= 0) return -1;
										if (trigger.player.countCards('hes') < 3) return -1;
										return 4.5 + trigger.player.countCards('hes') / 2 - get.value(card);
									});
								} else event.finish();
								('step 3');
								if (result.bool) player.gain(result.cards, trigger.player, 'giveAuto');
							},
							subSkill: {
								audio: {
									audio: 'ext:划水池/audio:2',
								},
							},
						},
						hs_congru: {
							trigger: {
								global: 'hs_roundEnd',
							},
							derivation: 'hs_jiancai',
							juexingji: true,
							forced: true,
							audio: 'ext:划水池/audio:4',
							filter(event, player) {
								return player.hs_countDamage('round', 'source') > 0;
							},
							content() {
								player.awakenSkill('hs_congru');
								player.hs_recoverTo(player.maxHp);
								player.addSkillLog('hs_jiancai', true);
							},
						},
						hs_jiancai: {
							intro: {
								name: '荐才',
								name2: '荐才',
								content: '已拥有$的所有技能',
							},
							marktext: '荐才 ',
							trigger: {
								global: 'roundStart',
							},
							audio: 'ext:划水池/audio:4',
							forceOut: true,
							content() {
								'step 0';
								if (player.storage.hs_jiancai_target) {
									var target = player.storage.hs_jiancai_target;
									target.removeAdditionalSkill('hs_jiancai');
									target.clearMark('hs_jiancai', false);
								}
								var list = game.hs_getAllCharacters(5);
								if (list.length) {
									event.videoId = lib.status.videoId++;
									event.dialog = ui.create.dialog(get.prompt('hs_jiancai'), [list, 'character']);
									event.dialog.videoId = event.videoId;
									if (!event.isMine()) {
										event.dialog.style.display = 'none';
									}
									var next = player.chooseButton(true).set('dialog', event.videoId);
									next.set('selectButton', 1);
									next.set('filterButton', function (button) {
										return button.link != _status.event.current;
									});
									next.set('current', list);
								} else {
									game.log('没有足够的备选武将');
									event.finish();
								}
								var func = function (id, prompt) {
									var dialog = get.idDialog(id);
									if (dialog) {
										dialog.content.childNodes[0].innerHTML = prompt;
									}
								};
								if (event.isMine()) func(event.videoId, '荐才:选择一张武将牌');
								('step 1');
								if (result.links?.length) {
									event.crcard = result.links.slice(0);
									player.chooseTarget('荐才:令一名角色获得' + get.translation(event.crcard) + '的所有技能', true).set('ai', function (target) {
										var player = _status.event.player,
											num = get.attitude(player, target);
										if (game.filterPlayer().includes(player) && player == target) num += 3;
										return num;
									});
								} else event.finish();
								('step 2');
								if (result.bool) {
									var skills = lib.character[event.crcard][3],
										target = result.targets[0];
									player.line(target);
									if (skills.length) {
										target.addAdditionalSkill('hs_jiancai', skills);
										target.hs_setSkillAudio(skills, 'hs_wuyan');
										target.setStorage('hs_jiancai', get.translation(event.crcard), true);
										player.storage.hs_jiancai_target = target;
									}
								}
							},
							group: 'hs_jiancai_die',
							subSkill: {
								die: {
									trigger: {
										player: 'dieAfter',
									},
									forced: true,
									forceDie: true,
									content() {
										if (player.storage.hs_jiancai_target) {
											var target = player.storage.hs_jiancai_target;
											target.removeAdditionalSkill('hs_jiancai');
											target.clearMark('hs_jiancai', false);
										}
									},
								},
							},
							onremove(player, skill) {
								if (player.storage.hs_jiancai_target) {
									var target = player.storage.hs_jiancai_target;
									target.removeAdditionalSkill('hs_jiancai');
									target.clearMark('hs_jiancai', false);
								}
							},
						},
						hs_wuyan: {
							intro: {
								name: '无言',
								name2: '无言',
								content: '已选定角色:$',
							},
							marktext: '无言 ',
							trigger: {
								global: 'useCardToPlayered',
							},
							dutySkill: true,
							forced: true,
							filter(event, player) {
								if (player.storage.hs_wuyan_used) return false;
								if (!player.storage.hs_wuyan_add) return false;
								if (event.target != player.storage.hs_wuyan_add) return false;
								if (event.player == player.storage.hs_wuyan_add) return false;
								return player.countCards('hes') > 0;
							},
							audio: 'ext:划水池/audio:6',
							content() {
								'step 0';
								player.chooseCard('hes', '无言:是否交给' + get.translation(trigger.target) + '一张牌？').set('ai', function (card) {
									var player = _status.event.player;
									if (get.attitude(player, trigger.target) < 0) return -1;
									if (['sha', 'wanjian'].includes(trigger.card.name) && card.name == 'shan') return 100;
									if (['juedou', 'nanman'].includes(trigger.card.name) && card.name == 'sha') return 100;
									if (get.position(card) == 'e') return -1;
									if (get.attitude(player, trigger.target) > 1) return 7 - get.value(card);
									return 0;
								});
								('step 1');
								if (result.cards?.length) {
									trigger.target.gain(result.cards, player, 'giveAuto');
									player.storage.hs_wuyan = get.translation(player.storage.hs_wuyan_add);
									player.markSkill('hs_wuyan');
								}
							},
							group: ['hs_wuyan_add', 'hs_wuyan_fail'],
							subSkill: {
								add: {
									trigger: {
										global: 'gameDrawAfter',
										player: 'showCharacterAfter',
									},
									forced: true,
									audio: 'ext:划水池/audio:3',
									filter(event, player) {
										return !player.storage.hs_wuyan_add;
									},
									content() {
										'step 0';
										player.chooseTarget('请选择『无言』的目标', true, lib.filter.notMe).set('ai', function (target) {
											var player = _status.event.player;
											var att = get.attitude(player, target);
											if (get.mode() == 'identity') {
												if (player.identity == 'zhong' && target.identity == 'zhu') return 1000;
												if (player.identity == 'fan' && target.identity == 'fan') att += 10;
											}
											if (target.hasSkillTag('maixie') || target.hasSkillTag('maixie_hp') || target.hasSkillTag('maixie_defend')) att - 2;
											return att;
										});
										('step 1');
										if (result.targets?.length) {
											player.storage.hs_wuyan_add = result.targets[0];
											if (player == game.me) {
												player.storage.hs_wuyan = get.translation(player.storage.hs_wuyan_add);
												player.markSkill('hs_wuyan');
											}
										}
									},
								},
								fail: {
									intro: {
										name: '无言 ',
										content: '$已被移出游戏',
									},
									marktext: '无言',
									trigger: {
										global: 'damageBegin4',
									},
									audio: 'ext:划水池/audio:3',
									forced: true,
									filter(event, player) {
										if (player.storage.hs_wuyan_used) return false;
										if (event.num < event.player.hp) return false;
										if (event.player.storage.nohp) return false;
										if (event.player == player) return true;
										return player.storage.hs_wuyan_add && player.storage.hs_wuyan_add == event.player;
									},
									content() {
										player.awakenSkill('hs_wuyan');
										player.failSkill('hs_wuyan');
										game.log(player, '使命失败');
										player.storage.hs_wuyan_used = true;
										player.storage.hs_wuyan = get.translation(player.storage.hs_wuyan_add);
										player.markSkill('hs_wuyan');
										player.markSkill('hs_wuyan_fail');
										if (get.mode() != 'guozhan') player.changeGroup('wei');
										trigger.cancel();
										player.awakenSkill('hs_xiawang');
										player.removeLink();
										player.addSkill('hs_wuyan_back');
										player.storage.hs_out = true;
										player.storage.hs_out_in = 'hs_wuyan_back';
										player.out('hs_wuyan');
										player.update();
									},
								},
								back: {
									trigger: {
										global: 'dieAfter',
									},
									audio: 'ext:划水池/audio:3',
									forced: true,
									forceOut: true,
									filter(event, player) {
										if (!player.isOut()) return false;
										if (!player.storage.hs_out) return false;
										if (!player.storage.hs_out_in) return false;
										return player.storage.hs_wuyan_add == event.player;
									},
									content() {
										try {
											var mark = player.node.xSkillMarks.querySelector('[data-id="hs_wuyan"]');
											if (mark) mark.classList.remove('fail');
										} catch (e) { }
										player.unmarkSkill('hs_wuyan_fail');
										player.removeSkill('hs_wuyan_back');
										delete player.storage.hs_out;
										player.in('hs_wuyan');
										delete player.storage.hs_out_in;
										player.update();
									},
								},
							},
						},
						//高顺
						hs_xianzhen: {
							audio: 'ext:划水池/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							selectTarget: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								'step 0';
								event.cards = player.getCards('h').filter(function (card) {
									return get.tag(card, 'damage');
								});
								player.discard(player.getCards('h'));
								('step 1');
								game.hs_loseCards(event.cards, true, true, true, true);
								if (event.cards.length > 1) {
									var next = player.chooseToMove('陷阵:调整牌的使用顺序');
									next.set('list', [['左先右后', event.cards]]);
									next.set('processAI', function (list) {
										var cardsi = list[0][1].slice(0);
										cardsi.sort(function (a, b) {
											return get.value(a) - get.value(b);
										});
										return [cardsi];
									});
								} else if (event.cards.length == 1) event.goto(3);
								('step 2');
								if (result.bool && result.moved && result.moved[0].length) event.cards = result.moved[0];
								else event.finish();
								('step 3');
								var card = event.cards.shift();
								target.addTempSkill('qinggang2');
								target.storage.qinggang2.add(card);
								player.useCard(card, target, false).noActCount = true;
								('step 4');
								if (result.bool) {
									if (
										player.hasHistory('sourceDamage', function (evt) {
											var card = evt.card;
											var evtx = evt.getParent('useCard');
											return evtx.card == card;
										})
									) {
										player.draw();
										player.gainPlayerCard(target, 'hej', true);
									}
								}
								('step 5');
								if (event.cards.length && target.isAlive()) event.goto(3);
							},
							ai: {
								pretao: true,
								order() {
									return get.order({ name: 'sha' }) + 0.15;
								},
								result: {
									player(player) {
										return (
											player.countCards('h', function (card) {
												return get.tag(card, 'damage');
											}) -
											player.countCards('h') / 2
										);
									},
									target(player, target) {
										return -Math.max(
											0.1,
											Math.min(
												target.hp,
												player.countCards('h', function (card) {
													return get.tag(card, 'damage');
												})
											)
										);
									},
								},
							},
						},
						hs_jinjiu: {
							trigger: {
								global: 'gameDrawAfter',
								player: 'gainAfter',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							init(player) {
								if (lib.skill.hs_jinjiu.filter == true) player.useSkill('hs_jinjiu');
							},
							filter(event, player) {
								if (player.countCards('hs') == 0) return false;
								for (var i of player.getCards('hs')) {
									if (i.name == 'jiu') return true;
								}
								return false;
							},
							content() {
								var cards = player.getCards('hs').filter(function (card) {
									return card.name == 'jiu';
								});
								if (cards.length) {
									player.hs_destroyCards(cards, true, true);
									player.draw(2 * cards.length);
								}
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (!target.hasSkill('jiu')) {
											if (!card) return 'zeroplayertarget';
											if (!card.isCard) return 'zeroplayertarget';
											if (!card.cards) return 'zeroplayertarget';
										}
									},
									player(card, player, target, current) {
										if (!player.hasSkill('jiu')) {
											if (!card.isCard) return 'zeroplayertarget';
										}
									},
								},
							},
							group: ['hs_jinjiu_lose', 'hs_jinjiu_cancel', 'hs_jinjiu_use', 'hs_jinjiu_respond', 'hs_jinjiu_damage'],
							subSkill: {
								lose: {
									trigger: {
										global: ['loseAfter', 'cardsDiscardAfter'],
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										if (event.name == 'lose') {
											if (event.position != ui.discardPile) return false;
										}
										for (var i of event.cards) {
											if (i.name == 'jiu') return true;
										}
										return false;
									},
									content() {
										var cards = trigger.cards.filterInD('d').filter(function (card) {
											return card.name == 'jiu';
										});
										if (cards.length) {
											player.hs_destroyCards(cards, true, true);
											player.draw(2 * cards.length);
										}
									},
								},
								cancel: {
									trigger: {
										target: 'useCardToTarget',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										if (player.hasSkill('jiu')) return false;
										if (!event.cards.length) return true;
										if (event.card.name != event.cards[0].name) return true;
										return !event.card.isCard;
									},
									content() {
										trigger.excluded.add(player);
										game.log(trigger.player, '的', trigger.card, '对', player, '失效了');
									},
								},
								use: {
									trigger: {
										player: 'useCard1',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										if (player.hasSkill('jiu')) return false;
										return !event.card.isCard;
									},
									content() {
										trigger.cancel();
										game.log(player, '使用的', trigger.card, '失效了');
									},
								},
								damage: {
									trigger: {
										player: 'damageBegin4',
									},
									audio: 'hs_jinjiu_cancel',
									filter(event, player) {
										if (player.hasSkill('jiu')) return false;
										return !event.card;
									},
									forced: true,
									content() {
										trigger.cancel();
										game.log(player, '防止了此伤害');
									},
								},
								respond: {
									trigger: {
										player: 'useCard',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										if (player.hasSkill('jiu')) return false;
										return (
											event.card &&
											(get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
											game.hasPlayer(function (current) {
												return current.countCards('h') > player.countCards('h');
											})
										);
									},
									content() {
										trigger.directHit.addArray(
											game.filterPlayer(function (current) {
												return current.countCards('h') > player.countCards('h');
											})
										);
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											return arg.target.countCards('h') > player.countCards('h');
										},
									},
								},
							},
						},
						//贾充
						hs_jianhui: {
							trigger: {
								player: 'useCard1',
							},
							forced: true,
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								if (!player.countCards('hes')) return false;
								return get.tag(event.card, 'damage');
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									prompt: '选择任意张牌交给一名其他角色',
									prompt2: '其代替你成为此' + get.translation(trigger.card) + '的使用者',
									filterCard: true,
									position: 'hes',
									selectCard() {
										return [1, player.countCards('hes')];
									},
									filterTarget(card, player, target) {
										return target != player;
									},
									selectTarget: 1,
									ai1(card) {
										return 5 - get.value(card);
									},
									ai2(target) {
										var num = get.attitude(player, target);
										if (num <= 0) {
											return 1 - get.attitude(player, target);
										} else return -1;
									},
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									target.gain(result.cards, player, 'giveAuto');
									player.gainPlayerCard(result.cards.length, target, 'he', true);
									trigger.untrigger();
									trigger.player = target;
									game.log(target, '代替', player, '成为', trigger.card, '的使用者');
								}
							},
						},
						hs_xiongshu: {
							trigger: {
								global: 'damageBegin2',
							},
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								if (!event.source || event.source == player) return false;
								if (event.player != player && _status.currentPhase == event.source) return false;
								if (_status.currentPhase == event.source && !event.source.countCards('he')) return false;
								return event.num > 0;
							},
							forced: true,
							content() {
								'step 0';
								if (trigger.source.countCards('he')) {
									event.loged = true;
									var num = trigger.num;
									if (trigger.source.countCards('he') < trigger.num) num = trigger.source.countCards('he');
									var say = '凶竖:是否获得' + get.translation(trigger.source) + get.cnNumber(num) + '张牌';
									if (_status.currentPhase == player) say += '并对其造成一点伤害？';
									else say += '？';
									player.gainPlayerCard(say, num, trigger.source, 'he').set('ai', function (button) {
										var player = _status.event.player;
										var target = _status.event.source;
										if (get.attitude(player, target) > 0) return -1;
										else return 4 + get.value(button.link);
									});
								} else
									player.chooseBool('凶竖:是否对' + get.translation(trigger.source) + '造成一点伤害？').set('ai', function () {
										return get.attitude(player, trigger.source) <= 0;
									});
								('step 1');
								if (result.bool && _status.currentPhase != trigger.source) {
									trigger.source.damage();
								}
							},
						},
						//云长
						hs_wusheng: {
							trigger: {
								player: 'useCardAfter',
							},
							audio: 'ext:划水池/audio:4',
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								if (!player.hasSha()) return false;
								for (var i of event.targets) {
									if (
										i.isAlive() &&
										get.itemtype(i) == 'player' &&
										!i.hasHistory('damage', function (evt) {
											return evt.card == event.card;
										})
									)
										return true;
								}
							},
							forced: true,
							content() {
								var targets = [];
								for (var i of trigger.targets) {
									if (
										i.isAlive() &&
										get.itemtype(i) == 'player' &&
										!i.hasHistory('damage', function (evt) {
											return evt.card == trigger.card;
										}) &&
										player.canUse('sha', i, false)
									)
										targets.push(i);
								}
								player
									.chooseToUse({
										prompt: '是否对' + get.translation(trigger.targets) + '使用一张【杀】？',
										filterCard(card, player, event) {
											if (card.name != 'sha') return false;
											return lib.filter.filterCard(card, player, event);
										},
										filterTarget(card, player, target) {
											return targets.includes(target);
										},
										selectTarget: -1,
									})
									.set('addCount', false);
							},
							group: 'hs_wusheng_respond',
							subSkill: {
								respond: {
									trigger: {
										player: 'chooseToRespondBegin',
									},
									audio: 'ext:划水池/audio:3',
									prompt: '是否发动『武圣』视为打出一张【杀】？',
									filter(event, player) {
										if (event.responded) return false;
										if (event.hs_wusheng_respond) return false;
										if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
										return lib.filter.cardRespondable({ name: 'sha' }, player, event);
									},
									check(event, player) {
										if (event && (event.ai || event.ai1)) {
											var ai = event.ai || event.ai1;
											var tmp = _status.event;
											_status.event = event;
											var result = ai({ name: 'sha' }, _status.event.player, event);
											_status.event = tmp;
											return result > 0;
										}
										return true;
									},
									content() {
										trigger.hs_wusheng_respond = true;
										trigger.untrigger();
										trigger.set('responded', true);
										trigger.result = { bool: true, card: { name: 'sha' } };
									},
									ai: {
										respondSha: true,
										effect: {
											target(card, player, target, effect) {
												if (get.tag(card, 'respondSha')) return 0.5;
											},
										},
									},
								},
							},
						},
						hs_weifan: {
							trigger: {
								player: 'useCard1',
							},
							forced: true,
							audio: 'ext:划水池/audio:3',
							filter(event, player) {
								return player.hasHistory('lose', function (evt) {
									if (evt.parent != event) return false;
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].includes('hs_wusheng')) return true;
									}
									return false;
								});
							},
							content() { },
							mod: {
								cardname(card, player) {
									if (card.hasGaintag('hs_wusheng')) return 'sha';
								},
								ignoredHandcard(card, player) {
									if (card.hasGaintag('hs_wusheng')) return true;
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.hasGaintag('hs_wusheng')) return false;
								},
							},
							group: ['hs_weifan_shui', 'hs_weifan_yan', 'hs_weifan_get'],
							subSkill: {
								shui: {
									trigger: {
										player: 'useCard2',
									},
									audio: 'ext:划水池/audio:2',
									prompt(event) {
										return '是否发动『武圣』视为对' + get.translation(event.targets) + '使用一张【水淹七军】？';
									},
									filter(event, player) {
										if (!event.targets) return false;
										if (!event.cards.length) return false;
										return get.tag(event.card, 'damage');
									},
									logTarget: 'targets',
									content() {
										player.useCard({ name: 'shuiyanqijunx' }, trigger.targets);
									},
								},
								yan: {
									trigger: {
										player: ['useCardAfter', 'respondAfter'],
									},
									audio: 'ext:划水池/audio:2',
									prompt(event) {
										return '是否发动『武圣』视为对' + get.translation(_status.currentPhase) + '使用一张【水淹七军】？';
									},
									filter(event, player) {
										if (player == _status.currentPhase) return false;
										return event.card && event.card.name == 'sha';
									},
									check(event, player) {
										return get.attitude(player, _status.currentPhase) <= 0;
									},
									logTarget(event, player) {
										return _status.currentPhase;
									},
									content() {
										player.useCard({ name: 'shuiyanqijunx' }, _status.currentPhase);
									},
								},
								get: {
									trigger: {
										global: 'loseAfter',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										if (event.getParent(2).name != 'shuiyanqijunx') return false;
										return event.cards && event.cards.filterInD('d').length;
									},
									content() {
										player.gain(trigger.cards.filterInD('d'), 'gain2').gaintag.add('hs_wusheng');
									},
								},
							},
						},
						hs_zhuihun: {
							intro: {
								name: '追魂',
								name2: '追魂',
								content: '于$回合后进行一个回合',
							},
							trigger: {
								player: 'dieAfter',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							forceDie: true,
							filter(event, player) {
								return player.isDead();
							},
							content() {
								'step 0';
								trigger.cancel();
								player.revive();
								('step 1');
								player.out('hs_zhuihun');
							},
							group: ['hs_zhuihun_die', 'hs_zhuihun_goout', 'hs_zhuihun_back'],
							subSkill: {
								die: {
									trigger: {
										global: 'phaseAfter',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									charlotte: true,
									silent: true,
									forceDie: true,
									forceOut: true,
									filter(event, player) {
										if (!player.isOut()) return false;
										if (!player.storage.hs_zhuihun) return false;
										return player.storage.hs_zhuihun == event.player;
									},
									content() {
										player.phase('hs_zhuihun_die');
									},
									mod: {
										targetInRange(card, player) {
											if (player.isOut()) return true;
										},
										cardUsable(card, player, num) {
											if (player.isOut()) return Infinity;
										},
									},
								},
								goout: {
									trigger: {
										player: 'hs_out',
									},
									forced: true,
									charlotte: true,
									popup: false,
									forceDie: true,
									forceOut: true,
									content() {
										'step 0';
										player
											.chooseTarget('是否选择一名其他角色,于其每个回合结束后对其发动『追魂』？', lib.filter.notMe)
											.set('ai', function (target) {
												var num = get.attitude(player, target) * (target.hp + target.hujia);
												if (target.isTurnedOver()) return num / 4;
												return num;
											})
											.set('includeOut', true);
										('step 1');
										if (result.targets?.length) {
											player.setStorage('hs_zhuihun', result.targets[0], true);
										}
									},
								},
								back: {
									trigger: {
										player: 'hs_in',
									},
									forceOut: true,
									forced: true,
									popup: false,
									content() {
										delete player.storage.hs_zhuihun;
										player.clearMark('hs_zhuihun_goout', false);
									},
								},
							},
						},
						//孙休
						hs_yanzhu: {
							enable: 'phaseUse',
							audio: 'ext:划水池/audio:8',
							usable: 1,
							filterCard: true,
							position: 'hes',
							selectCard: [1, Infinity],
							discard: false,
							lose: false,
							selectTarget: -1,
							reverseOrder: true,
							multitarget: true,
							multiline: true,
							filterTarget(card, player, target) {
								return target != player;
							},
							check(card) {
								return 10 - get.value(card);
							},
							filter(event, player) {
								return player.countCards('hes') > 0;
							},
							content() {
								'step 0';
								ui.clear();
								var dialog = ui.create.dialog('宴诛', cards, true);
								dialog.classList.add('noupdate');
								dialog.id = 'hs_wugu';
								_status.dieClose.push(dialog);
								dialog.videoId = lib.status.videoId++;
								game.addVideo('cardDialog', null, ['宴诛', get.cardsInfo(cards), dialog.videoId]);
								event.preResult = dialog.videoId;
								game.broadcast(
									function (cards, id) {
										var dialog = ui.create.dialog('宴诛', cards, true);
										_status.dieClose.push(dialog);
										dialog.videoId = id;
									},
									cards,
									dialog.videoId
								);
								game.log(player, '亮出了', cards);
								event.gained = [];
								event.targets = targets.sortBySeat(_status.currentPhase);
								event.dialog = dialog;
								('step 1');
								if (event.dialog.buttons.length && event.targets.length) {
									event.target = event.targets.shift();
									event.randomNum = Math.random();
									var next = event.target.chooseButton(function (button) {
										var target = _status.event.player,
											player = _status.event.parent.player,
											num = get.value(button.link, target),
											num2 = get.value(button.link, player);
										if (get.attitude(target, player) < 0) {
											if (num > num2 && event.randomNum > 0.4) return num;
											else if (event.randomNum > 0.7) return num;
											else return -1;
										} else {
											if (player.hasSkill('hs_xingxue')) event.randomNum += 0.2;
											if (num > num2) return num;
											else if (event.randomNum > 0.3) return num;
											else return -1;
										}
									});
									next.set('dialog', event.preResult);
									next.set('closeDialog', false);
									next.set('dialogdisplay', true);
								} else event.goto(3);
								('step 2');
								if (result.bool) {
									var dialog = event.dialog;
									var card;
									for (var i of dialog.buttons) {
										if (i.link == result.links[0]) {
											card = i.link;
											break;
										}
									}
									if (!card) card = event.dialog.buttons[0].link;
									var button;
									for (var i = 0; i < dialog.buttons.length; i++) {
										if (dialog.buttons[i].link == card) {
											button = dialog.buttons[i];
											button.style.transition = 'transform 0.01s ease-in-out';
											button.style.transform = 'scale(0.8)';
											var xtx = ui.create.div('.xtx', button),
												xtxName = ui.create.div('.xtxName', xtx);
											xtx.style.backgroundImage = event.target.node.avatar.style.backgroundImage;
											xtxName.innerHTML = get.translation(event.target.name);
											ui.create.div('.huise', button);
											dialog.buttons.remove(button);
											break;
										}
									}
									if (card) {
										event.target.gain(card, 'give', player, 'visible');
										event.target.$gain2(card);
									}
									game.addVideo('dialogCapt', null, [dialog.videoId, dialog.content.firstChild.innerHTML]);
									game.log(event.target, '选择了', button.link);
									event.gained.add(event.target);
								}
								event.goto(1);
								('step 3');
								var dialog = event.dialog;
								dialog.close();
								_status.dieClose.remove(dialog);
								if (dialog.buttons.length) {
									var remained = [];
									for (var i = 0; i < dialog.buttons.length; i++) {
										remained.push(dialog.buttons[i].link);
									}
									player.addGaintag(remained, 'hs_yanzhu');
								}
								if (event.gained.length) {
									player
										.chooseTarget([1, event.gained.length], get.prompt('hs_yanzhu'), function (card, player, target) {
											return event.gained.includes(target);
										})
										.set('ai', function (target) {
											if (get.attitude(_status.event.player, target) > 0) return -1;
											else return 1;
										});
								} else event.finish();
								('step 4');
								if (result.targets?.length) {
									player.line(result.targets);
									event.targets2 = result.targets.sortBySeat();
								} else event.finish();
								('step 5');
								if (event.targets2.length) {
									event.target2 = event.targets2.shift();
									if (event.target2.countCards('e') > 0) {
										event.target2.chooseControl('discard_card', 'take_damage', function (event, player) {
											if (get.damageEffect(player, event.player, player, 'thunder') >= 0) return 'take_damage';
											if (player.hasSkillTag('reverseEquip')) return 'discard_card';
											if (player.hp > Math.max(player.maxHp / 2, 3) && player.countCards('e') >= 2) return 'take_damage';
											if (player.hp >= 2 && player.countCards('e') >= 4) return 'take_damage';
											return 'discard_card';
										});
									} else {
										event.target2.damage();
										event.redo();
									}
								} else event.finish();
								('step 6');
								if (result.control == 'discard_card') player.gain(event.target2.getCards('e'), event.target2, 'giveAuto');
								else event.target2.damage();
								event.goto(5);
							},
							ai: {
								order: 10,
								result: {
									player: 1,
								},
							},
							mod: {
								targetInRange(card, player, target, now) {
									if (card.cards) {
										for (var i of card.cards) {
											if (i.hasGaintag('hs_yanzhu')) return true;
										}
									} else if (get.itemtype(card) == 'card' && card.hasGaintag('hs_yanzhu')) return true;
								},
							},
							group: 'hs_yanzhu_use',
							subSkill: {
								use: {
									trigger: {
										player: 'useCard1',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return player.hasHistory('lose', function (evt) {
											if (evt.parent != event) return false;
											for (var i in evt.gaintag_map) {
												if (evt.gaintag_map[i].includes('hs_yanzhu')) return true;
											}
											return false;
										});
									},
									firstDo: true,
									content() {
										trigger.addCount = false;
										if (player.stat[player.stat.length - 1].card[trigger.card.name] > 0) player.stat[player.stat.length - 1].card[trigger.card.name]--;
									},
								},
							},
						},
						hs_xingxue: {
							trigger: {
								global: 'phaseEnd',
							},
							audio: 'ext:划水池/audio:8',
							forced: true,
							content() {
								'step 0';
								if (trigger.player != player) event.num = player.hs_getLose('num');
								else event.num = player.hs_getLose(false, 'num');
								if (event.num > 0)
									player.chooseTarget([1, event.num], get.prompt2('hs_xingxue')).set('ai', function (target) {
										return get.attitude(_status.event.player, target) + 1;
									});
								('step 1');
								if (result.targets?.length) {
									event.targets = result.targets.sortBySeat();
									player.line(event.targets);
								} else event.finish();
								('step 2');
								if (event.targets.length) {
									event.current = event.targets.shift();
									event.current.draw(event.num);
								} else event.finish();
								('step 3');
								if (event.current && event.current.countCards('hes')) {
									var num = Math.min(Math.trunc(event.num / 2), event.current.countCards('hes'));
									if (num > 0) {
										event.current.chooseCard(num, '兴学:选择' + get.cnNumber(num) + '张牌置于牌堆顶或牌堆底', 'he', true).set('ai', function (card) {
											return 20 - get.value(card);
										});
									} else event.goto(2);
								} else event.goto(2);
								('step 4');
								if (result.cards?.length) {
									event.cards = result.cards;
									event.current
										.chooseControl('牌堆顶', '牌堆底')
										.set('prompt', '兴学:请选择放置的位置')
										.set('ai', function () {
											if (Math.random() < 0.6) return '牌堆底';
											else return '牌堆顶';
										});
								} else event.goto(2);
								('step 5');
								event.current.hs_pushPileCards(event.cards, result.control == '牌堆底');
								event.goto(2);
							},
						},
						hs_zhaofu: {
							global: 'hs_zhaofu_range',
							zhuSkill: true,
							subSkill: {
								range: {
									mod: {
										inRangeOf(from, to) {
											if (from.group != 'wu') return;
											for (var i of game.filterPlayer()) {
												if (i.hasZhuSkill('hs_zhaofu', from) && to.group != 'wu') return true;
											}
										},
									},
								},
							},
						},
						//骆统
						hs_renzheng: {
							audio: 'ext:划水池/audio:6',
							trigger: {
								global: ['loseAfter', 'gainAfter'],
							},
							forced: true,
							filter(event, player) {
								if (!event.player.isAlive()) return false;
								if (event.parent && event.parent.name == 'hs_renzheng') return false;
								if (event.getParent(2) && event.getParent(2).name == 'hs_renzheng') return false;
								var cards = event.cards.slice(0);
								if (event.name == 'lose') {
									if (!_status.currentPhase || !_status.currentPhase.isAlive()) return false;
									if (player == _status.currentPhase) return false;
									if (event.player == _status.currentPhase) return false;
									if (event.player != player && event.type != 'discard') return false;
									for (var i = 0; i < cards.length; i++) {
										if (get.position(cards[i]) == 'd') {
											if (cards[i].original == 'h') return true;
											else if (cards[i].original == 'e') return true;
										}
									}
								} else if (event.source && event.source.isAlive()) {
									if (event.player == player) return false;
									if (event.source == event.player) return false;
									for (var i = 0; i < cards.length; i++) {
										if (cards[i].original == 'h') return true;
										else if (cards[i].original == 'e') return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								var txt,
									num = 0,
									cards = trigger.cards.slice(0);
								if (trigger.name == 'lose') {
									event.lose = _status.currentPhase;
									event.gain = trigger.player;
									for (var i = 0; i < cards.length; i++) {
										if (get.position(cards[i]) == 'd') {
											if (cards[i].original == 'h') num++;
											else if (cards[i].original == 'e') num++;
										}
									}
									var txt0 = '弃置了';
									if (trigger.player == player) txt0 = '失去了';
									txt = get.translation(event.gain) + txt0 + get.cnNumber(num) + '张手牌,是否交给' + get.translation(event.lose) + '一张牌对其发动『仁政』？';
								} else {
									event.lose = trigger.player;
									event.gain = trigger.source;
									for (var i = 0; i < cards.length; i++) {
										if (cards[i].original == 'h') num++;
										else if (cards[i].original == 'e') num++;
									}
									txt = get.translation(event.lose) + '获得了' + get.translation(event.gain) + get.cnNumber(num) + '张手牌,是否交给' + get.translation(event.lose) + '一张牌对其发动『仁政』？';
								}
								event.num = num;
								player.chooseCard('hes', txt).set('ai', function (card) {
									if (get.attitude(player, event.gain) > 0) {
										if (get.attitude(player, event.lose) < 0) return 11 - get.value(card);
										else if (event.lose.countCards('h') > event.num) return 11 - get.value(card);
									} else if (get.attitude(player, event.lose) < 0 && event.lose.countCards('h') < event.num) return 11 - get.value(card);
									else return -1;
								});
								('step 1');
								if (result.cards?.length) {
									event.lose.gain(result.cards, player, 'giveAuto');
									player.line2([event.lose, event.gain]);
									if (event.lose.countCards('h') < event.num) event._result = { bool: false };
									else
										event.lose.chooseCard('h', event.num, '交给' + get.translation(event.gain) + get.cnNumber(event.num) + '张手牌或受到其造成的一点伤害').set('ai', function (card) {
											if (get.attitude(event.lose, event.gain) > 0) return 10 - get.value(card);
											else return 8 - get.value(card) - event.num;
										});
								} else event.finish();
								('step 2');
								if (result.cards?.length) {
									event.gain.gain(result.cards, event.lose, 'giveAuto');
									player.draw();
								} else {
									player.draw(event.num);
									event.lose.damage(1, event.gain);
								}
							},
						},
						//张角
						hs_xianshou: {
							trigger: {
								global: 'roundStart',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							content() {
								'step 0';
								if (!event.cardName) event.cardName = 'taipingyaoshu';
								var list = [];
								for (var i of game.players) {
									for (var j of i.getCards('ej')) {
										if (j.name == event.cardName) list.add(j);
									}
								}
								if (list.length > 1) {
									var next = player.chooseButton(true);
									if (player == game.me) {
										ui.clear();
										var dialog = ui.create.dialog('仙授:选择获得的【' + get.translation(event.cardName) + '】', list, true);
										dialog.classList.add('noupdate');
										dialog.buttons.forEach(function (button) {
											button.classList.add('hs_xianshou');
											var xtx = ui.create.div('.xtx', button),
												xtxName = ui.create.div('.xtxName', xtx),
												target = get.owner(button.link),
												position = get.position(button.link) == 'e' ? "<br><font color='deepskyblue'>装备区</font>" : "<br><font color='yellow'>判定区</font>";
											xtx.style.backgroundImage = target.node.avatar.style.backgroundImage;
											xtxName.innerHTML = get.translation(target.name) + position;
										});
										_status.dieClose.push(dialog);
										dialog.videoId = lib.status.videoId++;
										event.dialog = dialog;
										next.set('dialog', dialog.videoId);
									} else next.createDialog = [list];
								} else {
									if (list.length) event.card = list[0];
									event.goto(2);
								}
								('step 1');
								if (event.dialog) {
									var dialog = event.dialog;
									dialog.close();
									_status.dieClose.remove(dialog);
								}
								event.card = result.links[0];
								('step 2');
								if (!event.card) event.card = get.cardPile(event.cardName, 'discardPile');
								if (!event.card) event.card = get.cardPile2(event.cardName);
								if (!event.card) {
									var suit = ['spade', 'heart'].randomGet(),
										num = [1, 5, 7, 12].randomGet();
									event.card = game.createCard2(event.cardName, suit, num);
								}
								if (get.owner(event.card)) player.gain(event.card, get.owner(event.card), 'give', 'bySelf');
								else player.gain(event.card, 'gain2');
								player.chooseUseTarget(event.card, true, 'nopopup');
								if (event.cardName == 'taipingyaoshu') {
									event.cardName = 'hs_jiujie';
									delete event.card;
									event.goto(0);
								}
							},
						},
						hs_chuandao: {
							audio: 'ext:划水池/audio:3',
							forced: true,
							popup: false,
							trigger: {
								player: 'phaseDiscardBegin',
							},
							filter(event, player) {
								if (player.countCards('hes') == 0) return false;
								return (
									game.countPlayer(function (current) {
										return current.isDamaged();
									}) > 0
								);
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									prompt: '传道:选择任意名受伤的其他角色',
									prompt2: '并展示至少等量张牌',
									filterCard: true,
									position: 'hes',
									selectCard() {
										var num = _status.event.player.countCards('hes');
										return [ui.selected.targets.length, num];
									},
									filterTarget(card, player, target) {
										return target != player && target.isDamaged();
									},
									selectTarget() {
										return [1, ui.selected.cards.length];
									},
									ai1(card) {
										if (
											game.countPlayer(function (current) {
												return current.isDamaged() && !current.hs_isHuangjin();
											}) < ui.selected.cards.length
										)
											return 11 - get.value(card);
										else return 6 - get.value(card);
									},
									ai2(target) {
										if (!target.hs_isHuangjin()) return 100;
										else if (get.attitude(player, target) <= 0) return -1;
										else return get.attitude(player, target);
									},
								});
								('step 1');
								if (result.cards?.length) {
									event.targets2 = result.targets.sortBySeat();
									ui.clear();
									var cards = result.cards,
										dialog = ui.create.dialog('传道', cards, true);
									dialog.classList.add('noupdate');
									dialog.id = 'hs_wugu';
									_status.dieClose.push(dialog);
									dialog.videoId = lib.status.videoId++;
									game.addVideo('cardDialog', null, ['传道', get.cardsInfo(cards), dialog.videoId]);
									event.preResult = dialog.videoId;
									game.broadcast(
										function (cards, id) {
											var dialog = ui.create.dialog('传道', cards, true);
											_status.dieClose.push(dialog);
											dialog.videoId = id;
										},
										cards,
										dialog.videoId
									);
									game.log(player, '亮出了', cards);
									event.targets = event.targets2.slice(0);
									event.dialog = dialog;
								} else event.finish();
								('step 2');
								if (event.dialog.buttons.length && event.targets.length) {
									event.target = event.targets.shift();
									event.randomNum = Math.random();
									var next = event.target.chooseButton(true, function (button) {
										return get.value(button.link, _status.event.player);
									});
									next.set('dialog', event.preResult);
									next.set('closeDialog', false);
									next.set('dialogdisplay', true);
									next.set('auto', true);
								} else event.goto(4);
								('step 3');
								if (result.bool) {
									var dialog = event.dialog;
									var card;
									for (var i of dialog.buttons) {
										if (i.link == result.links[0]) {
											card = i.link;
											break;
										}
									}
									if (!card) card = event.dialog.buttons[0].link;
									var button;
									for (var i = 0; i < dialog.buttons.length; i++) {
										if (dialog.buttons[i].link == card) {
											button = dialog.buttons[i];
											button.style.transition = 'transform 0.01s ease-in-out';
											button.style.transform = 'scale(0.8)';
											var xtx = ui.create.div('.xtx', button),
												xtxName = ui.create.div('.xtxName', xtx);
											xtx.style.backgroundImage = event.target.node.avatar.style.backgroundImage;
											xtxName.innerHTML = get.translation(event.target.name);
											ui.create.div('.huise', button);
											dialog.buttons.remove(button);
											break;
										}
									}
									if (card) {
										event.target.gain(card, 'give', player, 'visible');
										event.target.$gain2(card);
									}
									game.addVideo('dialogCapt', null, [dialog.videoId, dialog.content.firstChild.innerHTML]);
									game.log(event.target, '选择了', button.link);
									if (!event.target.hs_isHuangjin()) event.target.hs_addHuangjin();
								}
								event.goto(2);
								('step 4');
								var dialog = event.dialog;
								dialog.close();
								_status.dieClose.remove(dialog);
								for (var i of event.targets2) {
									if (!i.hs_isHuangjin()) i.hs_addHuangjin();
								}
							},
							group: 'hs_chuandao_add',
							subSkill: {
								add: {
									audio: 'ext:划水池/audio:3',
									forced: true,
									trigger: {
										global: 'hs_addHuangjin',
									},
									content() {
										player.draw();
										trigger.player.draw();
									},
								},
							},
						},
						hs_tiangong: {
							trigger: {
								global: 'damageBegin1',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							filter(event, player) {
								if (event.nature == 'thunder') return true;
								return event.source && event.source.hs_isHuangjin();
							},
							content() {
								'step 0';
								if (trigger.source && trigger.source.hs_isHuangjin() && trigger.nature != 'thunder') {
									player.chooseBool('天公:' + get.translation(trigger.source) + '对' + get.translation(trigger.player) + '造成伤害,是否将次伤害转化为雷电伤害？').set('ai', function () {
										if (get.attitude(player, trigger.player) > 0) {
											if (trigger.player.hasSkillTag('nothunder')) return true;
											else if (trigger.nature == 'fire') {
												if (trigger.player.hasSkillTag('nofire')) return false;
												else if (trigger.player.hasSkillTag('fireAttack')) return true;
											} else return !trigger.player.isLinked();
										} else {
											if (trigger.player.hasSkillTag('nothunder')) return false;
											else if (trigger.nature == 'fire') {
												if (trigger.player.hasSkillTag('nofire')) return true;
												else if (trigger.player.hasSkillTag('fireAttack')) return false;
											} else return true;
										}
									});
								} else event.goto(2);
								('step 1');
								if (result.bool) {
									event.log = true;
									trigger.nature = 'thunder';
								}
								('step 2');
								if (trigger.nature == 'thunder') {
									if (event.log) game.log(player, '将次伤害转化为了雷电伤害');
									player.draw();
								}
							},
						},
						hs_huangtian: {
							audio: 'ext:划水池/audio:4',
							zhuSkill: true,
							limited: true,
							enable: 'phaseUse',
							filter(event, player) {
								if (player.storage.hs_huangtian) return false;
								if (!player.hasZhuSkill('hs_huangtian')) return false;
								return (
									game.countPlayer(function (current) {
										return current.hs_isHuangjin();
									}) > 0
								);
							},
							check(event, player) {
								var num = game.countPlayer(function (current) {
									return current.hs_isHuangjin();
								});
								if (player.isDamaged()) num += 1;
								return num > (game.countPlayer() * 1.2) / 2;
							},
							content() {
								'step 0';
								player.storage.hs_huangtian = true;
								player.awakenSkill('hs_huangtian');
								var list = game.filterPlayer(function (current) {
									return current.hs_isHuangjin();
								});
								player.line(list);
								for (var i of list) i.loseMaxHp();
								event.num0 = list.length;
								event.num = list.length;
								('step 1');
								if (event.num > 0) {
									event.num--;
									var dialog = ui.create.dialog('黄天:分配第' + (event.num0 - event.num).toString() + '/' + event.num0.toString() + '点雷电伤害'),
										text = '';
									for (var i of game.filterPlayer().sortBySeat()) {
										if (i.storage.hs_huangtian_count) text += get.translation(i) + ':' + i.storage.hs_huangtian_count.toString() + '点<br>';
										else i.storage.hs_huangtian_count = 0;
									}
									if (text != '') dialog.add('已分配:<br>' + text);
									player.chooseTarget(dialog, true).set('ai', function (target) {
										if (target.hasSkillTag('nothunder')) return -1;
										if (target.storage.hs_huangtian_count > target.hp) return -get.attitude(_status.event.player, target);
										else return -get.attitude(_status.event.player, target) * 10;
									});
								} else event.goto(3);
								('step 2');
								if (result.targets?.length) {
									result.targets[0].storage.hs_huangtian_count++;
									event.goto(1);
								} else {
									var list = [];
									for (var i of game.filterPlayer()) {
										if (i.storage.hs_huangtian_count) list.add(i);
									}
									list.sortBySeat();
									player.line(list);
									for (var i of list) {
										i.damage('thunder', i.storage.hs_huangtian_count);
										delete i.storage.hs_huangtian_count;
									}
								}
							},
							ai: {
								effect: {
									player: 1,
								},
								order: 6,
							},
						},
						//张宝
						hs_fuzhou: {
							intro: {
								name: '符咒',
								name2: '符咒',
								content: 'expansion',
								markcount: 'expansion',
							},
							marktext: '符',
							audio: 'ext:划水池/audio:3',
							trigger: {
								player: 'gainAfter',
							},
							forceDie: true,
							forced: true,
							filter(event, player) {
								if (!player.countCards('hes')) return false;
								return game.hasPlayer(function (current) {
									!player.getStorage('hs_fuzhou_gain').includes(current);
								});
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									prompt: '选择任意张牌作为<符>',
									prompt2: '交给任意名角色',
									filterCard: true,
									position: 'hes',
									selectCard() {
										var num = player.countCards('hes');
										return [1, num];
									},
									filterTarget(card, player, current) {
										return !player.getStorage('hs_fuzhou_gain').includes(current);
									},
									selectTarget: 1,
									ai1(card) {
										if (
											game.countPlayer(function (current) {
												return !current.hs_isHuangjin();
											}) > 0 &&
											ui.selected.cards.length >= 1
										)
											return -1;
										return 7.5 - get.value(card);
									},
									ai2(target) {
										if (!target.hs_isHuangjin()) return 100;
										else if (get.mode() == 'identity') {
											if (player.identity == 'zhong') {
												if (target.identity == 'zhu') return 100;
												else return -1;
											} else if (target == player) return 100;
											else return -1;
										} else if (get.attitude(player, target) > 0) return get.attitude(player, target) * 10;
										else if (target == player) return 100;
										else return -1;
									},
								});
								('step 1');
								if (result.cards && result.targets) {
									var target = result.targets[0];
									player.markAuto('hs_fuzhou_gain', target);
									target.addToExpansion(result.cards, player, 'give').gaintag.add('hs_fuzhou');
									if (!target.hs_isHuangjin()) target.hs_addHuangjin();
								}
							},
							group: 'hs_fuzhou_start',
							global: 'hs_fuzhou_use',
							subSkill: {
								start: {
									trigger: {
										global: 'gameDrawAfter',
										player: 'showCharacterAfter',
									},
									forced: true,
									usable: 1,
									content() {
										player.addToExpansion(get.cards(game.countGroup()), 'gain2').gaintag.add('hs_fuzhou');
									},
								},
								use: {
									intro: {
										name: '符咒',
										name2: '符咒',
										content: '本回合已发动『符咒』#次',
									},
									marktext: '符咒',
									audio: 'ext:划水池/audio:6',
									enable: ['chooseToUse', 'chooseToRespond'],
									filter(event, player) {
										if (!event.isMine() && event.hs_fuzhou) return false;
										if (!player.hasExpansions('hs_fuzhou')) return false;
										for (var i in lib.card) {
											var type = get.type(i);
											if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
										}
										return false;
									},
									hiddenCard(player, name) {
										if (get.translation(`${name}_info`) == `${name}_info`) return false;
										if (lib.card[name].mode && !lib.card[name].mode.includes(get.mode())) return false;
										return get.translation(name).length + player.countMark('hs_fuzhou_use') < player.countExpansions('hs_fuzhou');
									},
									chooseButton: {
										dialog(event, player) {
											event.set('hs_fuzhou', true);
											var list1 = [],
												list0 = [];
											if (lib.config.extension_划水池_printCardRange) {
												for (var i in lib.card) {
													if (get.translation(`${i}_info`) == `${i}_info`) continue;
													if (get.translation(i).length + player.countMark('hs_fuzhou_use') > player.countExpansions('hs_fuzhou')) continue;
													if (!lib.card[i].content) continue;
													if (lib.card[i].mode && !lib.card[i].mode.includes(get.mode())) continue;
													try {
														if (event.filterCard && event.filterCard({ name: i }, player, event) == false) continue;
													} catch (e) {
														continue;
													}
													var type = lib.card[i].type;
													if (type == 'basic') {
														list0.add([type, '', i]);
														if (typeof lib.card[i].nature == 'object') {
															for (var nature of lib.card[i].nature) list0.add([type, '', i, nature]);
														}
													} else if (type == 'trick') {
														list1.add([type, '', i]);
														if (typeof lib.card[i].nature == 'object') {
															for (var nature of lib.card[i].nature) list1.add([type, '', i, nature]);
														}
													}
												}
											} else {
												for (var i of lib.inpile) {
													var type = get.type(i);
													if (type == 'basic') {
														list0.add([type, '', i]);
														if (typeof lib.card[i].nature == 'object') {
															for (var nature of lib.card[i].nature) list0.add([type, '', i, nature]);
														}
													} else if (type == 'trick') {
														list1.add([type, '', i]);
														if (typeof lib.card[i].nature == 'object') {
															for (var nature of lib.card[i].nature) list1.add([type, '', i, nature]);
														}
													}
												}
											}
											return ui.create.dialog('符咒:选择要' + (event.name == 'chooseToUse' ? '使用' : '打出') + '的牌', [list0, 'vcard'], [list1, 'vcard']);
										},
										filter(button, player) {
											return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
										},
										check(button) {
											if (_status.event.parent.type != 'phase') return 1;
											var player = _status.event.player;
											if (player.countExpansions('hs_fuzhou') < 6 && get.translation(button.link[2]).length > 3) return -1;
											if (player.countExpansions('hs_fuzhou') < 4 && get.translation(button.link[2]).length > 1) return -1;
											return (
												player.getUseValue({
													name: button.link[2],
													nature: button.link[3],
												}) -
												((get.translation(button.link[2]).length - 1 + player.countMark('hs_fuzhou_use')) *
													player.getUseValue({
														name: 'wuzhong',
													})) /
												2 -
												2
											);
										},
										backup(links, player) {
											var name = links[0][2],
												nature = links[0][3],
												num = player.countMark('hs_fuzhou_use');
											return {
												chooseButton: {
													select(event, player) {
														return get.translation(name).length + num;
													},
													dialog(event, player) {
														return ui.create.dialog('符咒:选择要转化的<符>', player.getExpansions('hs_fuzhou'), 'hidden');
													},
													backup(links, player) {
														var cards0 = links;
														return {
															card: cards0,
															audio: 'hs_fuzhou_use',
															popname: true,
															filterCard(card) {
																return cards0.includes(card);
															},
															position: 'x',
															selectCard: -1,
															viewAs: { name: name, nature: nature },
															onuse(result, player) {
																player.hs_addMark('hs_fuzhou_use', 1, false);
															},
															onrespond(result, player) {
																player.hs_addMark('hs_fuzhou_use', 1, false);
															},
														};
													},
												},
											};
										},
									},
									ai: {
										save: true,
										fireAttack: true,
										respondSha: true,
										respondShan: true,
										skillTagFilter(player) {
											if (!player.hasExpansions('hs_fuzhou')) return false;
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
							},
						},
						hs_jishi: {
							trigger: {
								global: 'hs_addHuangjin',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							content() {
								player.addToExpansion(get.cards(), 'gain2').gaintag.add('hs_fuzhou');
								trigger.player.addToExpansion(get.cards(), 'gain2').gaintag.add('hs_fuzhou');
							},
							group: ['hs_jishi_add', 'hs_jishi_recover'],
							subSkill: {
								add: {
									trigger: {
										global: 'addToExpansionAfter',
									},
									forced: true,
									filter(event, player) {
										return event.gaintag.includes('hs_fuzhou') && !event.player.hs_isHuangjin();
									},
									content() {
										trigger.player.hs_addHuangjin();
									},
								},
								recover: {
									trigger: {
										global: 'recoverAfter',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										return event.player.hs_isHuangjin() && event.player.hp >= player.hp;
									},
									content() {
										player.draw();
									},
								},
							},
						},
						//张梁
						hs_jijun: {
							audio: 'ext:划水池/audio:2',
							forced: true,
							trigger: {
								global: 'hs_addHuangjin',
							},
							filter(event, player) {
								return player.countExpansions('xinfu_jijun') < 36;
							},
							content() {
								trigger.player.draw();
								player.addToExpansion(get.cards(), 'gain2').gaintag.add('xinfu_jijun');
							},
							group: ['hs_jijun_damage', 'hs_jijun_start'],
							subSkill: {
								start: {
									trigger: {
										global: 'gameDrawAfter',
										player: 'showCharacterAfter',
									},
									forced: true,
									usable: 1,
									content() {
										if (!player.hs_isHuangjin()) player.hs_addHuangjin();
										if (player.countExpansions('xinfu_jijun') < 36) {
											var num = Math.min(game.countPlayer(), 36 - player.countExpansions('xinfu_jijun'));
											if (num > 0) player.addToExpansion(get.cards(num), 'gain2').gaintag.add('xinfu_jijun');
										}
									},
								},
								damage: {
									trigger: {
										global: ['damageSource', 'damageEnd'],
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									popup: false,
									content() {
										'step 0';
										if (event.triggername == 'damageSource') {
											if (trigger.source && trigger.source.hs_isHuangjin()) event.player0 = trigger.source;
											else event.finish();
										} else if (trigger.player.isAlive()) {
											if (!trigger.player.hs_isHuangjin()) {
												trigger.player.hs_addHuangjin();
												event.finish();
											} else event.player0 = trigger.player;
										} else event.finish();
										('step 1');
										if (event.player0.countCards('hes') > 0 && player.countExpansions('xinfu_jijun') < 36) {
											event.player0.chooseCard('hes', '方统:是否将一张牌作为<方>置于' + get.translation(player) + '的武将牌上并摸一张牌？').set('ai', function (card) {
												if (get.attitude(event.player0, player) <= 0) return -1;
												return 8.5 - get.value(card);
											});
										}
										('step 2');
										if (result.cards?.length) {
											player.addToExpansion(result.cards, event.player0, 'giveAuto').gaintag.add('xinfu_jijun');
											event.player0.draw();
										}
									},
								},
							},
						},
						hs_fangtong: {
							init(player) {
								if (lib.skill.xinfu_jijun.intro.mark) delete lib.skill.xinfu_jijun.intro.mark;
							},
							audio: 'ext:划水池/audio:6',
							forced: true,
							trigger: {
								source: 'damageBegin1',
							},
							filter(event, player) {
								return event.num > 0 && player.countExpansions('xinfu_jijun') >= event.num;
							},
							content() {
								'step 0';
								player.chooseCardButton(trigger.num, '是否弃置' + get.cnNumber(trigger.num) + '张<方>令此对' + get.translation(trigger.player) + '的伤害+1', player.getExpansions('xinfu_jijun')).set('ai', function (card) {
									if (get.attitude(trigger.player, player) > 0) return -1;
									if (trigger.num > trigger.player.hp) return -1;
									if (trigger.num > 3) return -1;
									return 1;
								});
								('step 1');
								if (result.bool) {
									if (event.isMine()) event.hasadd = true;
									player.loseToDiscardpile(result.links);
								} else event.goto(3);
								('step 2');
								trigger.num++;
								game.log(player, '对', trigger.player, '造成的此伤害+1');
								if (player.countExpansions('xinfu_jijun') >= trigger.num) event.goto(0);
							},
							group: 'hs_fangtong_cancel',
							subSkill: {
								cancel: {
									trigger: {
										global: 'useCard2',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										if (!event.player.hs_isHuangjin()) return false;
										if (event.player == player) return false;
										if (player.countExpansions('xinfu_jijun') <= get.translation(event.card.name).length) return false;
										if (_status.currentPhase == player) return true;
										return event.targets && event.targets.includes(player) && event.targets.length == 1;
									},
									content() {
										'step 0';
										var num = get.translation(trigger.card.name).length + 1;
										player.chooseCardButton(num, '是否弃置' + get.cnNumber(num) + '张<方>令' + get.translation(trigger.player) + '使用的' + get.translation(trigger.card) + '失效', player.getExpansions('xinfu_jijun')).set('ai', function (card) {
											if (get.attitude(trigger.player, player) >= 0) return -1;
											if (get.tag(trigger.card, 'damage')) {
												if (player.hasSkillTag('maixie') || player.hasSkillTag('maixie_hp') || player.hasSkillTag('maixie_defend')) return -1;
												if (trigger.card.name == 'sha' && player.hasShan()) return -1;
												if (trigger.card.name == 'wanjian' && player.hasShan()) return -1;
												if (trigger.card.name == 'nanman' && player.hasSha()) return -1;
											}
											if (player.countExpansions('xinfu_jijun') < player.hp) return -1;
											return trigger.player.getUseValue(card, false);
										});
										('step 1');
										if (result.links?.length) {
											player.loseToDiscardpile(result.links);
											trigger.cancel();
											game.log(trigger.player, '使用的', trigger.card, '失效了');
										}
									},
								},
							},
						},
						//董卓
						hs_hengzheng: {
							trigger: {
								global: 'phaseJieshu',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							content() {
								'step 0';
								if (player.storage.jiu > 0) player.hs_changeJiu(-1);
								else player.loseMaxHp();
								('step 1');
								var cards0 = [];
								for (var i of game.filterPlayer2()) cards0.addArray(i.hs_getLose());
								var cards1 = cards0.filterInD('cd'),
									cards = [],
									plcards = player.getCards('hsejx');
								for (var i of cards0) {
									if (i && !cards1.includes(i) && !plcards.includes(i)) cards.add(i);
								}
								if (cards.length) {
									var list = game.hs_getCardsFrom(cards),
										dic = list[0];
									for (var i of game.filterPlayer2()) {
										if (dic[i.playerid]) {
											player.line(i);
											player.gain(dic[i.playerid], 'give', i);
											i.update();
										}
									}
									if (list[1].length) player.gain(list[1], 'gain2');
								}
							},
							mod: {
								targetInRange(card, player, target) {
									return true;
								},
							},
							group: ['hs_hengzheng_destroy', 'hs_hengzheng_start'],
							subSkill: {
								start: {
									trigger: {
										global: 'gameDrawAfter',
										player: 'showCharacterAfter',
									},
									forced: true,
									usable: 1,
									content() {
										var num = 0;
										for (var i of game.filterPlayer()) {
											if (i.maxHp && typeof i.maxHp == 'number') num += i.maxHp;
										}
										if (num > 0) player.gainMaxHp(Math.ceil(num / 3));
									},
								},
								destroy: {
									trigger: {
										player: ['loseAfter', 'cardsDiscardAfter'],
									},
									audio: 'ext:划水池/audio:5',
									forced: true,
									filter(event, player) {
										event.cards && length > 0;
									},
									content() {
										player.hs_destroyCards(trigger.cards, true, true);
									},
									mod: {
										aiValue(player, card, num) {
											if (get.type(card) == 'equip' || get.type(card) == 'delay') return Math.min(num, 0);
										},
										aiUseful(player, card, num) {
											if (get.type(card) == 'equip' || get.type(card) == 'delay') return Math.min(num, 0);
										},
										aiOrder(player, card, num) {
											if (get.type(card) == 'equip' || get.type(card) == 'delay') return Math.min(num, 0);
										},
									},
								},
							},
						},
						hs_jiuchi: {
							init(player, skill) {
								lib.skill.jiu.marktext = '酒池';
								lib.skill.jiu.intro = {
									name: '酒池',
									name2: '酒池',
									content: '已有#层【酒】效果',
								};
								lib.skill.jiu.onremove = function (player) {
									if (!player.hasSkill('hs_jiuchi')) {
										if (player.node.jiu) {
											player.node.jiu.delete();
											player.node.jiu2.delete();
											delete player.node.jiu;
											delete player.node.jiu2;
										}
										delete player.storage.jiu;
									}
								};
							},
							forced: true,
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.hs_countDamage() > 0;
								});
							},
							content() {
								for (var i of game.filterPlayer()) {
									if (!i.storage.jiu) i.storage.jiu = 0;
									if (!player.storage.jiu) player.storage.jiu = 0;
									var num = i.hs_countDamage();
									if (i.isAlive() && num > 0) {
										i.hs_changeJiu(num);
										if (player != i) player.hs_changeJiu(num);
									}
								}
							},
							global: ['hs_jiuchi_dying', 'hs_jiuchi_use'],
							group: 'hs_jiuchi_sha',
							subSkill: {
								dying: {
									filter(event, player) {
										return player.storage.jiu && event.type == 'dying' && player == event.dying;
									},
									audio: 'ext:划水池/audio:4',
									enable: 'chooseToUse',
									prompt: '酒池:是否失去一层【酒】效果并回复一点体力？',
									content() {
										player.hs_changeJiu(-1);
										player.recover();
									},
									ai: {
										save: true,
										skillTagFilter(player, tag, arg) {
											return player == arg;
										},
										order: 5.5,
										result: {
											player: 1,
										},
									},
								},
								use: {
									trigger: {
										player: ['jiuAfter', 'hs_removeSkill'],
									},
									forced: true,
									popup: false,
									content() {
										if (player.storage.jiu > 0) player.markSkill('jiu');
										else player.unmarkSkill('jiu');
									},
									ai: {
										jiuSustain: true,
										skillTagFilter(player, tag, name) {
											if (name != 'phase') return false;
										},
									},
								},
								sha: {
									trigger: {
										player: 'jiuBegin',
									},
									forced: true,
									audio: 'ext:划水池/audio:4',
									filter(event, player) {
										return !event.card;
									},
									content() {
										trigger.cancel();
										var tri = trigger.getParent(3),
											num = Math.trunc(player.storage.jiu / 2);
										if (!tri.baseDamage) tri.baseDamage = 1;
										if (num > 0) {
											tri.baseDamage += num;
											tri.jiu = true;
											tri.jiu_add = num;
											player.storage.jiu -= num;
											player.markSkill('jiu');
										}
									},
								},
							},
						},
						hs_baoling: {
							trigger: {
								global: 'damageBegin4',
							},
							audio: 'ext:划水池/audio:5',
							zhuSkill: true,
							filter(event, player) {
								if (!player.hasZhuSkill('hs_baoling')) return false;
								if (event.player.group == 'qun') return false;
								if (!event.player.countCards('hej')) return false;
								return player.storage.jiu >= event.num;
							},
							prompt(event, player) {
								var num0 = Math.min(event.player.countCards('hej'), event.num);
								return '是否移除' + get.cnNumber(event.num) + '层【酒】效果,增加' + get.cnNumber(event.num) + '点体力上限并获得' + get.translation(event.player) + get.cnNumber(num0) + '张牌？';
							},
							content() {
								player.hs_changeJiu(-trigger.num);
								player.gainMaxHp(trigger.num);
								player.gainPlayerCard(trigger.num, trigger.player, 'hej', true);
							},
							ai: {
								combo: 'hs_jiuchi',
							},
						},
						//贺笨
						hs_qizhou: {
							marktext: '绮胄',
							intro: {
								name: '绮胄',
								name2: '绮胄',
								content(storage, player) {
									var txt = '拥有技能:<br>';
									for (var i in player.storage.hs_qizhou) {
										txt += get.translation(i) + ':' + get.translation(player.storage.hs_qizhou[i]) + '<br>';
									}
									txt += '<br>';
									for (var j of player.getCards('e')) {
										if (j.storage.hs_qizhou_skill) {
											txt += get.translation(j) + ':' + get.translation(j.storage.hs_qizhou_skill) + '<br>';
										}
									}
									return txt;
								},
							},
							audio: 'ext:划水池/audio:5',
							forced: true,
							trigger: {
								player: 'loseAfter',
							},
							filter(event, player) {
								for (var i of event.cards) {
									if (i.original == 'e') return true;
								}
								return false;
							},
							content() {
								if (!player.storage.hs_qizhou) player.storage.hs_qizhou = {};
								for (var i of trigger.cards) {
									if (i.original == 'e') {
										player.draw();
										var types = get.subtypes(i);
										for (type of types) {
											var skill = i.storage.hs_qizhou_skill,
												haveskill = false,
												old = player.storage.hs_qizhou[type];
											if (skill) {
												for (var j of player.getCards('e')) {
													if (j.storage.hs_qizhou_skill && j.storage.hs_qizhou_skill == skill) {
														haveskill = true;
														break;
													}
												}
												if (!haveskill) player.removeAdditionalSkill('hs_qizhou', skill);
											}
											if (old && old != 'muniu' && lib.card[old] && lib.card[old].skills) {
												for (var j of lib.card[old].skills) player.removeAdditionalSkill('hs_qizhou', j);
											}
											player.storage.hs_qizhou[type] = i.name;
											if (i.name != 'muniu' && lib.card[i.name].skills) {
												for (var j of lib.card[i.name].skills) {
													if (!lib.translate[j + '_info']) lib.translate[j + '_info'] = lib.translate[i.name + '_info'];
												}
												player.addAdditionalSkill('hs_qizhou', lib.card[i.name].skills, true);
												player.hs_setSkillAudio(lib.card[i.name].skills, 'hs_qizhou');
											}
										}
										player.markSkill('hs_qizhou');
									}
								}
							},
							ai: {
								reverseEquip: true,
							},
							group: ['hs_qizhou_gain', 'hs_qizhou_lose', 'hs_qizhou_use'],
							subSkill: {
								gain: {
									trigger: {
										player: 'gainAfter',
									},
									forced: true,
									popup: false,
									content() {
										for (var i of trigger.cards) {
											if (i.storage.hs_qizhou_skill) player.addGaintag(i, get.translation(i.storage.hs_qizhou_skill));
										}
									},
								},
								lose: {
									trigger: {
										global: 'loseAfter',
									},
									audio: 'ext:划水池/audio:4',
									forced: true,
									popup: false,
									filter(event, player) {
										return event.player != player;
									},
									content() {
										var list = trigger.player.hs_getSkills(false, true, false),
											ecards = [];
										for (var i of trigger.cards) {
											if (get.type(i) == 'equip' || i.original == 'e') {
												ecards.add(i);
												if (list.length) i.storage.hs_qizhou_skill = list.randomGet();
											}
										}
										var dcards = ecards.filterInD('d');
										if (dcards.length) {
											player.gain(dcards, 'gain2');
										}
									},
								},
								use: {
									trigger: {
										player: 'equipAfter',
									},
									audio: 'ext:划水池/audio:4',
									forced: true,
									filter(event, player) {
										var skill = event.card.storage.hs_qizhou_skill;
										return skill && !player.hasSkill(skill);
									},
									content() {
										var skill = trigger.card.storage.hs_qizhou_skill;
										player.addAdditionalSkill('hs_qizhou', skill, true);
										player.hs_setSkillAudio(skill, ['hs_qizhou_use', 'hs_qizhou_gain']);
										player.markSkill('hs_qizhou');
									},
									mod: {
										aiValue(player, card, num) {
											if (get.type(card) == 'equip') {
												var skill = card.storage.hs_qizhou_skill;
												if (skill && !player.hasSkill(skill)) return num + 2;
											}
										},
										aiUseful(player, card, num) {
											if (get.type(card) == 'equip') {
												var skill = card.storage.hs_qizhou_skill;
												if (skill && !player.hasSkill(skill)) return num + 2;
											}
										},
									},
								},
							},
						},
						//歌王
						hs_kangge: {
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							audio: 'ext:划水池/audio:5',
							filter(event, player) {
								return player.countCards('hes') > 0;
							},
							check(event, player) {
								return game.hasPlayer(function (current) {
									current.countCards('hes') < player.countCards('hes');
								});
							},
							content() {
								'step 0';
								event.cardsnum = 0;
								event.players = game.filterPlayer().sortBySeat();
								event.currents = event.players.slice();
								event.current = event.currents.shift();
								event.current
									.chooseCard('hes', '是否将一张牌置于牌堆顶对以下循环内的' + get.cnNumber(event.players.length) + '名角色发动『亢歌』？')
									.set('ai', function (card) {
										return 9 - get.value(card);
									})
									.set('promptx', [event.players]);
								event.goto(2);
								('step 1');
								var target = event.currents.shift();
								event.current.line(target);
								event.current = target;
								var str = '<';
								if (event.current == player) {
									if (event.color == 'red') str = '≥';
									else str = '≤';
								} else if (event.color == 'red') str = '>';
								event.current
									.chooseCard('hes', '亢歌:是否将一张点数' + str + event.number + '的牌置于牌堆顶？', '循环内剩余' + get.cnNumber(event.players.length) + '名角色:', function (card, player) {
										var me = _status.event.parent.player;
										if (player == me) {
											if (event.color == 'red') return card.number >= event.number;
											else return card.number <= event.number;
										} else if (event.color == 'red') return card.number > event.number;
										else return card.number < event.number;
									})
									.set('promptx', [event.players])
									.set('ai', function (card) {
										var value = get.value(card);
										if (card.hasGaintag('hs_kangge')) value += 1;
										if (event.current != player) {
											var hasbad = false;
											for (var i of event.players) {
												if (event.current != i && get.attitude(event.current, i) <= 0) {
													hasbad = true;
													break;
												}
											}
											if (hasbad) return 8.5 - value;
											else return -1;
										} else return 10 - value;
									});
								('step 2');
								if (result.cards?.length) {
									if (event.current == player) {
										if (!event.loged) {
											event.loged = true;
										} else game.trySkillAudio('hs_kangge', player, true);
									}
									event.cardsnum++;
									event.color = get.color(result.cards[0], event.current);
									event.number = result.cards[0].number;
									event.current.hs_pushPileCards(result.cards, false, true);
									if (event.currents.length == 0) event.currents = event.players.slice();
									event.goto(1);
								} else if (event.loged) {
									event.players.remove(event.current);
									game.log(event.current, '退出了循环');
									if (event.color == 'red') event.color = 'black';
									else event.color = 'red';
									var num = Math.max(Math.ceil(event.cardsnum / event.players.length), 1);
									for (var i of event.players) {
										if (i == player) player.draw(num + 1, 'bottom').gaintag = ['hs_kangge'];
										else i.draw(num, 'bottom').gaintag = ['hs_kangge'];
									}
									event.cardsnum = 0;
									if (event.current != player && event.players.length > 1) {
										if (event.currents.length == 0) event.currents = event.players.slice();
										event.goto(1);
									} else if (player.hasSkill('hs_fenyin')) {
										event.changeCards1 = player.getCards('h').filter(function (card) {
											return !card.hasGaintag('hs_kangge');
										});
										var value1 = 0;
										for (var i of event.changeCards1) value1 += get.value(i, player);
										player.chooseTarget('奋音:选择一名角色交换不因『亢歌』获得的手牌', lib.filter.notMe).ai = function (target) {
											var player = _status.event.player,
												value2 = 0;
											if (get.attitude(player, target) > 0) return 0;
											for (var i of target.getCards('h').filter(function (card) {
												return !card.hasGaintag('hs_kangge');
											}))
												value2 += get.value(i, player);
											return value2 - value1;
										};
									} else event.finish();
								} else event.finish();
								('step 3');
								if (result.targets?.length) {
									var target = result.targets[0],
										changeCards2 = target.getCards('h').filter(function (card) {
											return !card.hasGaintag('hs_kangge');
										});
									player.swapHandcards(target, event.changeCards1, changeCards2);
								}
							},
							global: 'hs_kangge_range',
							subSkill: {
								range: {
									forced: true,
									mod: {
										targetInRange(card, player) {
											if (card.cards) {
												for (var i of card.cards) {
													if (i.hasGaintag('hs_kangge')) return true;
												}
											} else if (get.itemtype(card) == 'card' && card.hasGaintag('hs_kangge')) return true;
										},
									},
								},
							},
						},
						hs_zizu: {
							trigger: {
								global: 'phaseEnd',
							},
							audio: 'ext:划水池/audio:2',
							limited: true,
							filter(event, player) {
								return player.isDamaged();
							},
							content() {
								player.awakenSkill('hs_zizu');
								player.addSkill('hs_lz_xuepang');
								player.addSkill('hs_lz_xuepang_lose');
							},
							derivation: ['hs_lz_xuepang', 'hs_fenyin'],
						},
						hs_lz_xuepang: {
							trigger: {
								player: 'dyingBegin',
							},
							audio: 'ext:划水池/audio:2',
							juexingji: true,
							forced: true,
							content() {
								player.awakenSkill('hs_lz_xuepang');
								player.removeSkill('hs_lz_xuepang_lose');
								var num = player.hs_recoverTo(player.maxHp);
								if (num > 0) player.draw(num);
								player.addSkillLog('hs_fenyin');
							},
							derivation: 'hs_fenyin',
							subSkill: {
								lose: {
									trigger: {
										global: 'phaseBegin',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									content() {
										player.gainMaxHp();
										player.loseHp();
										if (trigger.player == player) {
											player.skip('phaseUse');
											player.skip('phaseDiscard');
											game.log(player, '跳过了出牌阶段');
											game.log(player, '跳过了弃牌阶段');
										}
									},
								},
							},
						},
						hs_fenyin: {
							trigger: {
								player: 'useCard1',
							},
							audio: 'ext:划水池/audio:5',
							forced: true,
							firstDo: true,
							filter(event, player) {
								return player.hasHistory('lose', function (evt) {
									if (evt.parent != event) return false;
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].includes('hs_kangge')) return true;
									}
									return false;
								});
							},
							content() { },
							ai: {
								combo: 'hs_kangge',
							},
							mod: {
								ignoredHandcard(card, player) {
									if (card.hasGaintag('hs_kangge')) return true;
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.hasGaintag('hs_kangge')) return false;
								},
								cardUsable(card, player, num) {
									if (card.cards) {
										for (var i of card.cards) {
											if (i.hasGaintag('hs_kangge')) return Infinity;
										}
									} else if (get.itemtype(card) == 'card' && card.hasGaintag('hs_kangge')) return Infinity;
								},
							},
						},
						//郝昭
						hs_zhucang: {
							intro: {
								name: '筑仓',
								name2: '筑仓',
								content(storage, player, skill) {
									var hp = 0,
										num = player.storage.hs_zhucang,
										txt = '',
										txt1 = '<br>手牌上限';
									for (var i of game.filterPlayer()) {
										if (i.hp && typeof i.hp == 'number') hp += i.hp;
									}
									if (hp > 0) {
										txt += '全场总体力值' + hp.toString();
										txt1 += '+' + Math.ceil(hp / 3).toString();
									}
									if (player.storage.hs_zhucang > 0) {
										if (hp > 0) txt += '<br>';
										txt += '累计受到' + num.toString() + '次伤害';
										txt1 += '-' + num.toString();
									}
									return txt + txt1;
								},
							},
							marktext: '筑仓',
							audio: 'ext:划水池/audio:2',
							forced: true,
							trigger: {
								player: 'gainEnd',
							},
							filter(event, player) {
								return player.countCards('h') > player.getHandcardLimit();
							},
							content() {
								player.chooseToDiscard(player.countCards('h') - player.getHandcardLimit(), '筑仓:将手牌弃置至手牌上限', true);
							},
							group: 'hs_zhucang_damage',
							subSkill: {
								damage: {
									trigger: {
										player: 'damageBegin4',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										return player.getHandcardLimit() > 0 && event.num > 0;
									},
									content() {
										if (!player.storage.hs_zhucang) player.storage.hs_zhucang = 0;
										player.gainMaxHp(trigger.num);
										trigger.cancel();
										player.storage.hs_zhucang++;
										player.markSkill('hs_zhucang');
										player.update();
									},
								},
							},
							mod: {
								maxHandcard(player, num) {
									var hp = 0,
										storage = 0;
									for (var i of game.filterPlayer()) {
										if (i.hp && typeof i.hp == 'number') hp += i.hp;
									}
									if (player.storage.hs_zhucang && player.storage.hs_zhucang > 0) storage = player.storage.hs_zhucang;
									return num + Math.ceil(hp / 3) - storage;
								},
							},
						},
						hs_zhengu: {
							intro: {
								name: '镇骨',
								name2: '镇骨',
								content: '『镇骨①』已选定角色:$',
							},
							marktext: '镇骨①',
							audio: 'ext:划水池/audio:3',
							forced: true,
							trigger: {
								player: 'phaseEnd',
							},
							content() {
								'step 0';
								player.chooseTarget('是否令一名角色获得效果①？', '①当其或你获得牌后,若其手牌数大于你的手牌数,其将手牌中随机等于差值数量的非<镇骨>牌标记为<镇骨>牌').set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									if (att > 0) return -att;
									return 1 - att + target.countCards('h');
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.storage.hs_zhengu1 = target;
									player.setStorage('hs_zhengu', target, true);
									target.setStorage('hs_zhengu_lose', '①', true);
								}
								player
									.chooseTarget('是否令一名角色获得效果②？', '②当其或你失去牌后,若其手牌数小于你的手牌上限,其将手牌摸置至你的手牌上限', function (card, player, target) {
										if (!player.storage.hs_zhengu1) return true;
										else return player.storage.hs_zhengu1 != target;
									})
									.set('ai', function (target) {
										if (_status.event.player.getHandcardLimit() == 0) return 0;
										var att = get.attitude(_status.event.player, target),
											num = att / (target.countCards('h') + 1);
										if (att <= 0) return att;
										else if (target == _status.event.player) return num;
										return num * 10;
									});
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.storage.hs_zhengu2 = target;
									player.setStorage('hs_zhengu_clear', target, true);
									target.setStorage('hs_zhengu_gain', '②', true);
								}
							},
							onremove(player) {
								var target = player.storage.hs_zhengu1;
								if (target) {
									target.clearMark('hs_zhengu_lose', false);
									target.removeGaintag('hs_zhengu');
								}
								if (player.storage.hs_zhengu2) player.storage.hs_zhengu2.clearMark('hs_zhengu_gain', false);
								delete player.storage.hs_zhengu1;
								delete player.storage.hs_zhengu2;
								player.clearMark('hs_zhengu', false);
								player.clearMark('hs_zhengu_clear', false);
							},
							group: ['hs_zhengu_lose', 'hs_zhengu_gain', 'hs_zhengu_clear'],
							global: 'hs_zhengu_keep',
							subSkill: {
								clear: {
									intro: {
										name: '镇骨',
										name2: '镇骨',
										content: '『镇骨②』已选定角色:$',
									},
									marktext: '镇骨②',
									forced: true,
									popup: false,
									firstDo: true,
									forceDie: true,
									trigger: {
										player: ['phaseBeforeStart', 'dieAfter'],
									},
									content() {
										var target = player.storage.hs_zhengu1;
										if (target) {
											target.clearMark('hs_zhengu_lose', false);
											if (trigger.name == 'phase') {
												var cards = target.getCards('h', function (card) {
													return card.hasGaintag('hs_zhengu');
												});
												if (cards.length) target.discard(cards);
											} else target.removeGaintag('hs_zhengu');
										}
										if (player.storage.hs_zhengu2) player.storage.hs_zhengu2.clearMark('hs_zhengu_gain', false);
										delete player.storage.hs_zhengu1;
										delete player.storage.hs_zhengu2;
										player.clearMark('hs_zhengu', false);
										player.clearMark('hs_zhengu_clear', false);
									},
								},
								lose: {
									intro: {
										name: '镇骨',
										name2: '镇骨',
										content(storage, player, skill) {
											return '①当来源或你获得牌后,若你手牌中非<镇骨>牌数大于来源的手牌数,你将手牌中随机等于差值数量的非<镇骨>牌标记为镇骨牌,你无法使用或打出<镇骨>牌,你失去次效果时弃置所有<镇骨>牌;';
										},
									},
									marktext: '镇骨',
									audio: 'ext:划水池/audio:4',
									forced: true,
									trigger: {
										global: 'gainAfter',
									},
									filter(event, player) {
										if (!player.storage.hs_zhengu1) return false;
										var target = player.storage.hs_zhengu1;
										if (event.player != target && event.player != player) return false;
										return (
											target.countCards('h', function (card) {
												return !card.hasGaintag('hs_zhengu');
											}) > player.countCards('h')
										);
									},
									content() {
										var target = player.storage.hs_zhengu1,
											cards0 = target.getCards('h', function (card) {
												return !card.hasGaintag('hs_zhengu');
											}),
											num = cards0.length - player.countCards('h'),
											cards = cards0.randomGets(num);
										if (cards) target.addGaintag(cards, 'hs_zhengu');
									},
								},
								keep: {
									forced: true,
									mod: {
										cardEnabled2(card, player) {
											if (get.itemtype(card) == 'card' && card.hasGaintag('hs_zhengu')) return false;
										},
									},
								},
								gain: {
									intro: {
										name: '镇骨',
										name2: '镇骨',
										content(storage, player, skill) {
											return '②当你或效果来源失去牌后,若你手牌数小于效果来源的手牌上限,你将手牌摸置至效果来源的手牌上限';
										},
									},
									marktext: '镇骨',
									audio: 'ext:划水池/audio:4',
									forced: true,
									trigger: {
										global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
									},
									filter(event, player) {
										if (!player.storage.hs_zhengu2) return false;
										var target = player.storage.hs_zhengu2,
											evt = event.getl(target),
											evt2 = event.getl(player);
										if (evt && evt.cards2 && evt.cards2.length) return target.countCards('h') < player.getHandcardLimit();
										if (evt2 && evt2.cards2 && evt2.cards2.length) return target.countCards('h') < player.getHandcardLimit();
									},
									content() {
										player.storage.hs_zhengu2.drawTo(player.getHandcardLimit());
									},
								},
							},
						},
						//张琪瑛
						hs_chongjing: {
							intro: {
								name: '冲静',
								name2: '冲静',
								content: '本回合获得的牌视为$',
							},
							marktext: '冲静',
							audio: 'ext:划水池/audio:3',
							trigger: {
								player: 'gainBegin',
							},
							forced: true,
							filter(event, player) {
								return !player.storage.hs_chongjing;
							},
							content() {
								'step 0';
								player.judge();
								('step 1');
								var suit = result.card.suit,
									num = result.card.number;
								lib.translate['tran_hs_chongjing_suit_' + suit] = get.translation(suit);
								lib.translate['tran_hs_chongjing_num_' + num] = get.translation(num);
								lib.translate['hs_chongjing_suit_' + suit] = suit;
								lib.translate['hs_chongjing_num_' + num] = num;
								player.setStorage('hs_chongjing', [suit, num], true);
							},
							mod: {
								suit(card) {
									var tags = card.gaintag;
									if (Array.isArray(tags)) {
										for (var i of tags) {
											if (i.startsWith('tran_hs_chongjing_suit_')) return get.translation(i.slice(5));
										}
									}
								},
								cardnumber(card) {
									var tags = card.gaintag;
									if (Array.isArray(tags)) {
										for (var i of tags) {
											if (i.startsWith('tran_hs_chongjing_num_')) return get.translation(i.slice(5));
										}
									}
								},
							},
							group: ['hs_chongjing_gain', 'hs_chongjing_lose'],
							subSkill: {
								gain: {
									trigger: {
										player: 'gainEnd',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										if (!player.getStorage('hs_chongjing').length) return false;
										return event.cards && event.cards.length;
									},
									content() {
										var list = player.getStorage('hs_chongjing');
										player.addGaintag(trigger.cards, 'tran_hs_chongjing_suit_' + list[0]);
										player.addGaintag(trigger.cards, 'tran_hs_chongjing_num_' + list[1]);
									},
								},
								lose: {
									trigger: {
										player: 'loseAfter',
									},
									audio: 'ext:划水池/audio:3',
									forced: true,
									filter(event, player) {
										for (var i of event.cards) {
											if (
												player.countCards('h', function (card) {
													return card.suit == i.suit;
												}) == 0
											)
												return true;
										}
										return false;
									},
									content() {
										'step 0';
										event.cards = trigger.cards;
										('step 1');
										var i = event.cards.shift();
										if (
											player.countCards('h', function (card) {
												return card.suit == i.suit;
											}) == 0
										)
											player.draw();
										('step 2');
										if (event.cards.length) event.goto(1);
									},
									ai: {
										reverseEquip: true,
									},
								},
							},
						},
						hs_huanlong: {
							intro: {
								name: '浣龙',
								name2: '浣龙',
								content: '出牌阶段多使用#张【杀】<br>手牌上限+#',
							},
							marktext: '浣龙',
							audio: 'ext:划水池/audio:4',
							trigger: {
								player: 'phaseZhunbei',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							check(event, player) {
								var num = -1,
									suits = [];
								for (var i of player.getCards('h')) {
									var suit = i.suit;
									if (!suits.includes(suit)) {
										suits.add(suit);
										num++;
									}
								}
								return num > 0;
							},
							content() {
								'step 0';
								player.showHandcards();
								('step 1');
								var num = -1,
									suits = [];
								for (var i of player.getCards('h')) {
									var suit = i.suit;
									if (!suits.includes(suit)) {
										suits.add(suit);
										num++;
									}
								}
								if (num > 0) player.hs_addMark('hs_huanlong', num, false);
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.countMark('hs_huanlong');
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + player.countMark('hs_huanlong');
								},
							},
						},
						//戏子
						hs_shiming: {
							audio: 'ext:划水池/audio:6',
							trigger: {
								player: ['gainMaxHpAfter', 'loseMaxHpAfter'],
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return card.number;
								}).judge2 = function (result) {
									return result.bool;
								};
								('step 1');
								event.card = result.card;
								player.gain(event.card, 'gain2');
								('step 2');
								var num = event.card.number,
									col = get.color(event.card);
								event.cards0 = [];
								if (num > 0) {
									var cards = get.cards(num, true),
										cards1 = [];
									for (var i of cards) {
										if (get.color(i) == col) event.cards0.add(i);
										else cards1.add(i);
									}
									player.chooseControl('ok').set('dialog', ['逝命:观看牌堆顶' + cards.length + '张牌', '可分配', event.cards0, '不可分配', cards1]);
								} else event.finish();
								('step 3');
								if (event.cards0.length) {
									player.hs_distributeCards(event.cards0, game.filterPlayer());
								}
							},
							group: 'hs_shiming_damage',
							subSkill: {
								damage: {
									trigger: {
										player: 'damageBegin4',
									},
									audio: 'ext:划水池/audio:4',
									forced: true,
									filter(event, player) {
										return event.num > 0;
									},
									content() {
										trigger.cancel();
										player.loseMaxHp();
									},
								},
							},
							mod: {
								aiValue(player, card, num) {
									if (card.name == 'tao') return 0.1;
									if (card.name == 'jiu') return num / 3;
								},
								aiUseful(player, card, num) {
									if (card.name == 'tao') return 0.1;
									if (card.name == 'jiu') return num / 3;
								},
							},
						},
						hs_qizuo: {
							intro: {
								name: '奇佐',
								name2: '奇佐',
								markcount(storage, player) {
									var num = player.getStorage('hs_qizuo_last').length;
									if (storage) num += storage.length;
									return num;
								},
								content(storage, player) {
									var str = '';
									if (storage && storage.length) str += '本回合已发动花色:' + get.translation(storage);
									if (player.storage.hs_qizuo_last && player.storage.hs_qizuo_last.length) {
										str += '<br>上回合已发动花色:' + get.translation(player.storage.hs_qizuo_last);
									}
									return str;
								},
							},
							marktext: '奇佐',
							audio: 'ext:划水池/audio:6',
							trigger: {
								global: 'useCard2',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								var list = player.getStorage('hs_qizuo').addArray(player.getStorage('hs_qizuo_last')),
									num = player.getStorage('hs_qizuo').length,
									suit = event.card.suit;
								if (list.includes(suit)) return false;
								if (
									num >=
									player.countCards('he', function (card) {
										return card.suit != suit;
									})
								)
									return false;
								return event.targets && event.targets.length == 1 && !event.targets.includes(player);
							},
							content() {
								'step 0';
								event.suit = trigger.card.suit;
								var num = player.getStorage('hs_qizuo').length + 1,
									str = '奇佐:' + get.translation(trigger.player) + '对' + get.translation(trigger.targets) + '使用了' + get.translation(trigger.card),
									eff = 0;
								if (event.suit) str += '(' + get.translation(event.suit) + ')';
								str += ',是否弃置' + get.cnNumber(num) + '张';
								if (event.suit) str += '非' + get.translation(event.suit);
								str += '牌并将此牌目标改为你？';
								for (var i = 0; i < trigger.targets.length; i++) {
									eff += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
								}
								player
									.chooseToDiscard('he', num, str, function (card) {
										return card.suit != event.suit;
									})
									.set('ai', function (card) {
										var target = trigger.targets[0],
											num = -player.getStorage('hs_qizuo').length;
										if (get.mode() == 'identity' && player.identity == 'zhong' && target.identity == 'zhu') {
											if (eff / 2 < num) return 12 - get.value(card);
											else if (eff < num) return 9 - get.value(card);
											else if (eff * 2 < num) return 7 - get.value(card);
											else if (eff < -1) return 5 - get.value(card);
											else if (eff < -0.1) return 3 - get.value(card);
										} else if (eff < num) return 9 - get.value(card);
										return -1;
									});
								('step 1');
								if (result.bool) {
									player.line(trigger.player);
									player.markAuto('hs_qizuo', event.suit);
									trigger.targets = [player];
									game.log(player, '将', trigger.player, '使用的', trigger.card, '的目标改为了自己');
								}
							},
						},
						hs_chouce: {
							dutySkill: true,
							trigger: {
								global: 'gameDrawAfter',
								player: 'showCharacterAfter',
							},
							audio: 'ext:划水池/audio:3',
							forced: true,
							filter(event, player) {
								return !player.storage.hs_chouce_player;
							},
							content() {
								'step 0';
								player.chooseTarget('筹策:请选择一名角色,其增加一点体力上限,你将体力上限调整至与其相同', true, lib.filter.notMe).set('ai', function (target) {
									return target.maxHp * (get.attitude(player, target) + 0.1);
								});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
									player.line(event.target);
									player.storage.hs_chouce_player = event.target;
									event.target.gainMaxHp();
								} else event.finish();
								('step 2');
								player.hs_changeMaxHpTo(event.target.maxHp);
							},
							group: ['hs_chouce_achieve', 'hs_chouce_fail'],
							subSkill: {
								achieve: {
									trigger: {
										player: 'dieBefore',
									},
									forced: true,
									audio: 'ext:划水池/audio:3',
									content() {
										'step 0';
										player.awakenSkill('hs_chouce');
										game.log(player, '成功完成使命');
										trigger.cancel();
										if (lib.character[player.name][3].includes('hs_chouce')) event._result = { index: 0 };
										else if (lib.character[player.name1][3].includes('hs_chouce')) event._result = { index: 0 };
										else if (lib.character[player.name2][3].includes('hs_chouce')) event._result = { index: 1 };
										else player.chooseControl(player.name1, player.name2).set('prompt', '请选择要更换的武将牌');
										('step 1');
										event.num = result.index;
										var list = game.hs_getAllCharacters(5, function (info) {
											return info[1] == 'wei';
										});
										if (list.length) {
											player
												.chooseButton(true)
												.set('ai', function (button) {
													return get.rank(button.link, true) - lib.character[button.link][2];
												})
												.set('createDialog', ['将武将牌替换为一名角色', [list, 'character']]);
										} else {
											game.log('没有足够的备选武将');
											event.finish();
										}
										('step 2');
										player.hs_reinit(event.num, result.links[0], ['hs_chouce']);
									},
								},
								fail: {
									trigger: {
										global: 'dieAfter',
									},
									audio: 'ext:划水池/audio:3',
									forced: true,
									filter(event, player) {
										if (!player.storage.hs_chouce_player) return false;
										return event.player == player.storage.hs_chouce_player;
									},
									content() {
										'step 0';
										game.log(player, '使命失败');
										player.awakenSkill('hs_chouce');
										player.failSkill('hs_chouce');
										if (player.isDamaged()) player.hs_recoverTo(player.maxHp);
										('step 1');
										player.awakenSkill('hs_qizuo');
									},
								},
							},
						},
						//左慈
						hs_dunxing: {
							trigger: {
								player: 'showCharacterAfter',
								global: 'roundStart',
							},
							audio: 'ext:划水池/audio:6',
							forced: true,
							changeSeat: true,
							filter(event, player) {
								return !player.storage.hs_dunxing;
							},
							content() {
								'step 0';
								player.chooseTarget('遁形:是否变幻为场上一名其他角色的武将？', lib.filter.notMe).set('ai', function (target) {
									return target.hp + target.hujia * 0.9 + target.maxHp * 0.1 + Math.random() * 0.5;
								});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
									player.storage.hs_dunxing = [player.hp, player.maxHp, player.hujia, player.group, player.sex, event.target];
									player.hs_reinit(event.target, 'dunxing');
								} else event.finish();
								('step 2');
								var skills = event.target.hs_getSkills().filter(function (skill) {
									return !player.hasSkill(skill);
								});
								player.addAdditionalSkill('hs_dunxing', 'hs_dunxing_back');
								player.addAdditionalSkill('hs_dunxing_back', skills);
								player.hs_setSkillAudio(skills, ['hs_dunxing', 'hs_dunxing_back']);
								player.maxHp = event.target.maxHp;
								player.hp = event.target.hp;
								player.hujia = event.target.hujia;
								player.update();
								player.chooseBool('是否与' + get.translation(event.target) + '交换位置？').set('ai', function () {
									return Math.random() < 0.3;
								});
								('step 3');
								if (result.bool) game.swapSeat(player, event.target, false, false, false);
							},
							subSkill: {
								back: {
									trigger: {
										global: 'hs_roundAfter',
										player: 'dyingBegin',
									},
									audio: 'ext:划水池/audio:6',
									forced: true,
									filter(event, player) {
										return player.storage.hs_dunxing;
									},
									content() {
										'step 0';
										player.hs_reinit(player);
										('step 1');
										var storage = player.storage.hs_dunxing;
										player.removeAdditionalSkill('hs_dunxing');
										player.maxHp = storage[1];
										player.hp = storage[0];
										player.hujia = storage[2];
										if (get.mode() != 'guozhan') player.group = storage[3];
										player.sex = storage[4];
										event.target = storage[5];
										player.update();
										player.chooseBool('是否与' + get.translation(event.target) + '交换位置？').set('ai', function () {
											return Math.random() < 0.6;
										});
										('step 2');
										if (result.bool) game.swapSeat(player, event.target, false, false, false);
										delete player.storage.hs_dunxing;
									},
								},
							},
						},
						//杜预
						hs_sanchen: {
							intro: {
								name: '三陈',
								name2: '三陈',
								content(storage, player) {
									var num = storage,
										num1 = player.storage.hs_sanchen_max;
									if (!num) num = 0;
									if (!num1) num1 = 3;
									return '本回合已发动『三陈』' + num + '/' + num1 + '次';
								},
							},
							marktext: '三陈',
							audio: 'ext:划水池/audio:7',
							enable: 'phaseUse',
							filter(event, player) {
								if (player.countMark('hs_sanchen') >= player.countMark('hs_sanchen_max')) return false;
								return (
									player.countCards('h', function (card) {
										var type = get.type(card);
										return type == 'basic' || type == 'trick';
									}) > 0
								);
							},
							filterCard(card, player) {
								var type = get.type(card);
								return type == 'basic' || type == 'trick';
							},
							position: 'h',
							selectCard: 1,
							discard: false,
							lose: false,
							selectTarget: 1,
							filterTarget(card, player, target) {
								for (var i = 1; i < 6; i++) {
									if (target.hasEquipableSlot(i)) return true;
								}
								return false;
							},
							check(card) {
								var player = _status.event.player;
								if (ui.selected.targets.length) {
									var target = ui.selected.targets[0],
										att = get.attitude(player, target),
										list = [1, 2, 3, 4, 5].filter(function (i) {
											return target.hasEquipableSlot(i);
										});
									list.sort(function (a, b) {
										var getEvalue = function (num) {
											if (target.countEmptySlot(num)) return 0;
											else {
												var es = target.getEquips(num),
													val = false;
												for (var i of es) {
													var ev = get.equipValue(i, target);
													if (val === false || ev < val) val == ev;
												}
											}
										};
										return getEvalue(a) - getEvalue(b);
									});
									if (!target.hasSkill('hs_pozhu')) {
										var geteval = function (num) {
											var es = target.getEquips(num);
											if (es.length) {
												for (var i of es) {
													if (get.equipValue(i, target) > 0) return true;
												}
											}
											return false;
										};
										list.remove(3);
										list.remove(4);
										if (geteval(4)) list.push(4);
										if (geteval(3)) list.push(3);
									}
									if (att < 0) {
										list.reverse();
										if ([3, 4].includes(list[0])) return 8 - get.value(card);
										else return card.name == 'shan';
									}
								}
								if (lib.filter.filterCard(card, player, _status.event)) return get.value(card);
								else return -1;
							},
							//每回合限3次,出牌阶段,你可以将手牌中一张基本牌或普通锦囊牌置入一名角色的一个空装备栏或替换其装备栏内的一件装备.当一名角色失去装备区的非装备牌时,你可以从牌堆中获得一张同名牌并摸一张牌
							content() {
								'step 0';
								var list = [];
								for (var i = 1; i < 6; i++) {
									if (target.hasEquipableSlot(i)) list.add('equip' + i.toString());
								}
								player
									.chooseControl(list)
									.set('prompt', '选择将' + get.translation(cards[0]) + '置入的区域')
									.set('ai', function () {
										var att = get.attitude(player, target),
											list = [1, 2, 3, 4, 5].filter(function (i) {
												return !target.isDisabled(i);
											});
										list.sort(function (a, b) {
											var getEvalue = function (num) {
												if (target.countEmptySlot(num)) return 0;
												else {
													var es = target.getEquips(num),
														val = false;
													for (var i of es) {
														var ev = get.equipValue(i, target);
														if (val === false || ev < val) val == ev;
													}
												}
											};
											return getEvalue(a) - getEvalue(b);
										});
										if (!target.hasSkill('hs_pozhu')) {
											var geteval = function (num) {
												var es = target.getEquips(num);
												if (es.length) {
													for (var i of es) {
														if (get.equipValue(i, target) > 0) return true;
													}
												}
												return false;
											};
											list.remove(3);
											list.remove(4);
											if (geteval(4)) list.push(4);
											if (geteval(3)) list.push(3);
										}
										if (att < 0) list.reverse();
										return 'equip' + list[0];
									});
								('step 1');
								player.hs_addMark('hs_sanchen', 1, false);
								var card = cards[0];
								for (var i of [1, 2, 3, 4, 5, 6]) {
									card.classList.remove('equip' + i);
								}
								if (!lib.card[card.name].ai.equipValue) {
									if ([3, 4].includes(result.control) && !target.hasSkill('pozhu')) lib.card[card.name].ai.equipValue = 0;
									else lib.card[card.name].ai.equipValue = 1; //QQQ
								}
								card.storage.hs_subtype = result.control;
								target.equip(card);
								try {
									card.classList.add(result.control);
									var colour = card.getAttribute('data-suit'); // qualifiedName 形参,别管
									var ele = card.getElementsByClassName('name2'); // classNames 形参,别管
									if (!(ele.length > 1)) {
										var e = ele[0].children,
											numb = false;
										if (e.length < 3) {
											var newele = document.createElement('img');
											e[0].parentNode.insertBefore(newele, e[0]);
										}
										e[0].setAttribute('src', 'extension/划水池/image/card/noma.jpg');
										if (colour == 'heart' || colour == 'diamond')
											e[1].style.color = '#EF1806'; // ♦️️/♥️️颜色显示
										else e[1].style.color = '#8DBEDE'; // ♣️️/♠️️颜色显示
										e[1].style.textShadow = '1px 0 0 black, 0 1px 0 black, -1px 0 0 black, 0 -1px 0 black'; // 装备字体描边显示
										e[1].style.fontSize = '14px'; // 装备字体大小
										e[2].style.color = '#E9E8E3'; // 装备字体颜色显示
										e[2].style.textShadow = '1px 0 0 black, 0 1px 0 black, -1px 0 0 black, 0 -1px 0 black'; // 装备字体描边显示
										e[2].style.fontSize = '14px'; // 装备字体大小
										if (e[3]) e[3].remove();
										if (result.control == 'equip3' || result.control == 'equip4') {
											if (target.hasSkill('hs_pozhu')) {
												if (result.control == 'equip4') numb = '-1';
												else if (result.control == 'equip3') numb = '+1';
												if (numb) {
													var txt = document.createElement('span');
													txt.style.color = '#e9e8e3';
													txt.classList.add('equi');
													txt.style.textShadow = '1px 0 0 black, 0 1px 0 black, -1px 0 0 black, 0 -1px 0 black';
													txt.textContent = numb;
													txt.style.fontSize = '14px';
													txt.style.marginLeft = '-1px';
													txt.style.zIndex = 5;
													ele[0].appendChild(txt);
													e[2].parentNode.insertBefore(txt, e[2]);
												}
											}
											var str = e[2].textContent;
											if (str[0] == ' ') str = str.slice(1);
											if (str.length > 2) e[2].textContent = e[2].textContent.slice(0, 3);
											if (numb) {
												if (str.length > 1) {
													for (var i of e) i.style.fontSize = '11px';
												} else {
													for (var i of e) i.style.fontSize = '13px';
												}
											}
										}
										e[0].remove();
									}
								} catch (e) { }
							},
							ai: {
								order: 15,
								result: {
									target(player, target) {
										var list = [];
										for (var i = 1; i < 6; i++) {
											if (target.hasEquipableSlot(i)) {
												if (target.hasEmptySlot(i)) list.push(5);
												else {
													var es = target.getEquips(i),
														val = false;
													for (var i of es) {
														var ev = get.equipValue(i, target);
														if (val === false || ev < val) val == ev;
													}
													if ([3, 4].includes(i) && !target.hasSkill('hs_pozhu')) list.push(-val);
													else list.push(6 - val);
												}
											}
										}
										list.sort(function (a, b) {
											return (b - a) * get.attitude(player, target);
										});
										return list[0];
									},
								},
								threaten: 1.2,
							},
							group: 'hs_sanchen_lose',
							subSkill: {
								lose: {
									trigger: {
										global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
									},
									audio: 'ext:划水池/audio:4',
									forced: true,
									popup: false,
									filter(event, player) {
										return game.hasPlayer2(function (current) {
											var evt = event.getl(current);
											if (evt && evt.cards2 && evt.cards2.length) {
												for (var i of evt.cards2) {
													if (i.original == 'e' && get.type(i, current) != 'equip') return true;
												}
											}
											return false;
										});
									},
									content() {
										var list = [],
											num = 0;
										for (var current of game.filterPlayer2()) {
											var evt = trigger.getl(current);
											if (evt && evt.cards2 && evt.cards2.length) {
												for (var i of evt.cards2) {
													if (i.original == 'e' && get.type(i, current) != 'equip') {
														delete i.storage.hs_subtype;
														num++;
														var card = get.cardPile2(i.name);
														if (card) {
															game.cardsGotoOrdering(card);
															list.add(card);
														}
													}
												}
											}
										}
										if (list.length) player.gain(list, 'gain2');
										player.draw(num);
									},
								},
							},
						},
						hs_wuku: {
							trigger: {
								global: ['damageAfter', 'recoverAfter'],
							},
							audio: 'ext:划水池/audio:7',
							forced: true,
							filter(event, player) {
								if (event.getParent(5)) return event.getParent(5).name != 'hs_wuku';
								return true;
							},
							tryUse(number, target) {
								var next = game.createEvent('hs_wukuTryUse');
								next.player = target;
								next.num = number;
								next.setContent(function () {
									'step 0';
									event.used = [];
									event.equips = player.getEquips(event.num).filter(function (card) {
										return get.type(card, player) != 'equip';
									});
									('step 1');
									var cards = event.equips.filter(function (card) {
										if (event.used.includes(card)) return false;
										return game.hasPlayer(function (current) {
											return player.canUse(card.name, current);
										});
									});
									if (cards.length) {
										if (cards.length > 1) {
											player.chooseButton(['武库:选择使用的牌名', cards]).set('ai', function (button) {
												return get.order(button.link);
											});
										} else event._result = { bool: true, links: cards, skiped: true };
									} else event.goto(4);
									('step 2');
									if (result.links?.length) {
										event.card = result.links[0];
										player.chooseUseTarget(
											{
												name: event.card.name,
												nature: get.nature(event.card, player),
											},
											'是否视为使用一张' + get.translation(event.card.name) + '？',
											false
										);
									} else if (event.skiped) event.goto(4);
									else event.goto(1);
									('step 3');
									if (result.bool) {
										event.used.add(event.card);
										event.goto(1);
									}
									('step 4');
									var num = event.equips.filter(function (card) {
										return !event.used.includes(card);
									}).length;
									if (num > 0) {
										event.parent.player.draw(num);
									}
								});
								return next;
							},
							content() {
								if (trigger.name == 'damage') {
									if (trigger.source) lib.skill.hs_wuku.tryUse(1, trigger.source);
									lib.skill.hs_wuku.tryUse(2, trigger.player);
								}
								if (trigger.name == 'recover') lib.skill.hs_wuku.tryUse(5, trigger.player);
							},
							ai: {
								combo: 'hs_sanchen',
							},
							group: 'hs_wuku_ma',
							subSkill: {
								ma: {
									trigger: {
										player: ['phaseDrawEnd', 'phaseDiscardEnd'],
									},
									forced: true,
									content() {
										if (trigger.name == 'phaseDraw') lib.skill.hs_wuku.tryUse(4, player);
										if (trigger.name == 'phaseDiscard') lib.skill.hs_wuku.tryUse(3, player);
									},
								},
							},
						},
						hs_pozhu: {
							trigger: {
								global: ['dyingBegin', 'dyingAfter'],
							},
							audio: 'ext:划水池/audio:5',
							forced: true,
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								return event.player.isIn();
							},
							content() {
								var list = [],
									list1 = [];
								for (var i = 1; i < 6; i++) {
									list.push(player.countEnabledSlot(i));
								}
								var num = Math.max(...list) + 1;
								for (var i = 1; i < 6; i++) {
									for (var j = num; j > player.countEnabledSlot(i); j--) {
										list1.push(i);
									}
								}
								player.expandEquip(list1.randomGet());
								player.addMark('hs_sanchen_max', 1, false);
								player.markSkill('hs_sanchen');
							},
							ai: {
								combo: 'hs_sanchen',
							},
							mod: {
								attackFrom(from, to, distance) {
									var cards = from.getEquips(1).filter(function (card) {
										return get.type(card, from) != 'equip';
									});
									return distance - cards.length;
								},
								globalFrom(from, to, distance) {
									var cards = from.getEquips(4).filter(function (card) {
										return get.type(card, from) != 'equip';
									});
									return distance - cards.length;
								},
								globalTo(from, to, distance) {
									var cards = to.getEquips(3).filter(function (card) {
										return get.type(card, to) != 'equip';
									});
									return distance + cards.length;
								},
							},
						},
						//刘琦
						hs_wenji: {
							intro: {
								name: '问计',
								name2: '问计',
								content: '『问计』已选择角色:$',
							},
							marktext: '问计',
							trigger: {
								player: ['phaseUseEnd', 'damageBegin4'],
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							content() {
								'step 0';
								var players = player.hs_filterOtherPlayer(function (current) {
									return !player.getStorage('hs_wenji').includes(current);
								});
								if (players.length) {
									player
										.chooseTarget('是否选择一名其他角色成为『问计』的目标？', function (card, player, target) {
											return players.includes(target);
										})
										.set('ai', function (target) {
											return 10 - get.attitude(_status.event.player, target) + target.countCards('h');
										});
								} else event.finish();
								('step 1');
								if (result.targets?.length) {
									player.markAuto('hs_wenji', result.targets);
								}
							},
							mod: {
								playerEnabled(card, player, target) {
									if (player.getStorage('hs_wenji').includes(target) && target.hasExpansions('DIY_kongcheng2')) return false;
								},
							},
							group: ['hs_wenji_gain', 'hs_wenji_use', 'hs_wenji_clear'],
							subSkill: {
								gain: {
									enable: ['chooseToUse', 'chooseToRespond'],
									filter(event, player) {
										if (!player.getStorage('hs_wenji').length) return false;
										if (event.responded) return false;
										if (event.hs_wenji_use) return false;
										if (event.parent.hs_wenji_use) return false;
										for (var i of player.getStorage('hs_wenji')) {
											if (i.countCards('h') > 0 || i.hasExpansions('DIY_kongcheng2')) return true;
										}
										return false;
									},
									hiddenCard(player, name) {
										return player.getStorage('hs_wenji').length;
									},
									forced: true,
									content() {
										'step 0';
										var cardsi = [];
										event.cards = [];
										for (var i of player.getStorage('hs_wenji')) {
											if (i.countCards('h') > 0) cardsi.addArray(i.getCards('h'));
											var cards = i.getExpansions('DIY_kongcheng2');
											if (cards.length) cardsi.addArray(cards);
										}
										for (var i of cardsi) {
											var card = game.createCard(i.name, i.suit, i.number, get.nature(i));
											card.addGaintag(['hs_wenji', get.owner(i)]);
											card.storage.hs_wenji_use = i;
											if (player == game.me) card.classList.add('drawinghidden');
											if (get.is.singleHandcard() || sort > 0) player.node.handcards1.appendChild(card);
											else player.node.handcards2.appendChild(card);
											card.classList.add('glows');
											event.cards.add(card);
										}
										if (player == game.me) ui.updatehl();
										player.update();
										('step 1');
										var evt = event.getParent(2);
										evt.set('hs_wenji_use', true);
										evt.goto(0);
										var next = game.createEvent('hs_wenji_destroy', false);
										next.cards = event.cards;
										next.player = player;
										next.setContent(function () {
											player.hs_destroyCards(cards);
										});
										event.next.remove(next);
										evt.after.unshift(next);
										evt.onresult = function (result) {
											evt.after.remove(next);
											evt.next.unshift(next);
										};
									},
									ai: {
										order: 15,
										result: {
											player: 1,
										},
									},
								},
								use: {
									intro: {
										name: '问计',
										name2: '问计',
										content: '场上已因『问计』失去#张牌',
									},
									marktext: '问计',
									audio: 'ext:划水池/audio:6',
									trigger: {
										player: ['useCardBefore', 'respondBefore', 'loseBefore'],
									},
									filter(event, player) {
										if (!event.cards) return false;
										for (var i of event.cards) {
											if (i.storage.hs_wenji_use) return true;
										}
										return false;
									},
									forced: true,
									forceDie: true,
									content() {
										for (var card of trigger.cards) {
											var cardt = card.storage.hs_wenji_use;
											if (cardt) {
												trigger.cards.remove(card);
												if (trigger.name != 'lose') {
													var owner = get.owner(cardt);
													if (owner) {
														owner.lose(cardt, 'visible', ui.ordering).set('type', 'use');
														if (trigger.name != 'respond') owner.$throw(cardt, 1000);
													}
													trigger.cards.add(cardt);
													player.hs_addMark('hs_wenji_use', 1, false);
												}
												player.hs_destroyCards(card);
											}
										}
									},
								},
								clear: {
									trigger: {
										player: 'phaseBeforeStart',
									},
									forced: true,
									popup: false,
									content() {
										'step 0';
										var targets = player.getStorage('hs_wenji').filter(function (target) {
											return target && target.isAlive();
										}),
											num = player.countMark('hs_wenji_use');
										if (num > 0 && targets.length) {
											var cards = get.cards(num);
											player.hs_distributeCards(cards, targets);
										}
										('step 1');
										player.clearMark('hs_wenji_use', false);
										player.unmarkAuto('hs_wenji', player.getStorage('hs_wenji'));
									},
								},
							},
						},
						hs_tunjiang: {
							intro: {
								name: '屯江',
								name2: '屯江',
								content(storage, player) {
									return '直到第' + (player.storage.hs_tunjiang_clear + 1).toString() + '轮' + get.translation(player) + '的回合开始,防止在' + player.storage.hs_tunjiang + '受到的伤害';
								},
							},
							marktext: '屯江',
							trigger: {
								player: 'phaseBegin',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							content() {
								'step 0';
								var list = lib.phaseName.slice(0).filter(function (name) {
									return !player.skipList.includes(name);
								});
								if (list.length) {
									list.push('cancel2');
									player
										.chooseControl(list)
										.set('prompt', '选择跳过的阶段')
										.set('ai', function () {
											if (player.hp > 1 || player.countCards('hs', { name: ['tao', 'jiu'] })) {
												if (player.countCards('j') > 0 && list.includes('phaseJudge')) return 'phaseJudge';
												if (player.countCards('h') >= player.getHandcardLimit() && list.includes('phaseDiscard')) return 'phaseDiscard';
												if (
													game.countPlayer(function (current) {
														return get.attitude(current, player) < 0;
													}) >
													game.countPlayer(function (current) {
														return get.attitude(current, player) >= 0;
													}) *
													2 &&
													list.includes('phaseUse')
												)
													return 'phaseUse';
											} else return 'cancel2';
										});
								} else event.finish();
								('step 1');
								if (result.control && result.control != 'cancel2') {
									player.damage();
									player.skip(result.control);
									player.storage.hs_tunjiang_cancel = result.control;
									player.storage.hs_tunjiang_clear = game.roundNumber;
									player.setStorage('hs_tunjiang', result.control, true);
									game.log(player, '跳过了', result.control);
								}
							},
							group: ['hs_tunjiang_cancel', 'hs_tunjiang_clear'],
							subSkill: {
								cancel: {
									trigger: {
										player: 'damageBegin3',
									},
									audio: 'ext:划水池/audio:3',
									forced: true,
									filter(event, player) {
										if (!player.storage.hs_tunjiang_cancel) return false;
										var name = player.storage.hs_tunjiang_cancel,
											evt = event.getParent(name);
										return !!(evt && evt.name == name);
									},
									content() {
										trigger.cancel();
										game.log(player, '防止了此伤害');
									},
								},
								clear: {
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										if (!player.storage.hs_tunjiang_clear) return false;
										return game.roundNumber != player.storage.hs_tunjiang_clear;
									},
									content() {
										player.clearMark('hs_tunjiang', false);
										delete player.storage.hs_tunjiang_cancel;
										delete player.storage.hs_tunjiang_clear;
									},
								},
							},
						},
						//羊祜
						hs_mingfa: {
							intro: {
								content: '已记录的牌:$',
							},
							trigger: {
								player: 'phaseEnd',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								player.showHandcards();
								for (var i of player.getCards('h')) {
									var type = get.type2(i);
									if (type == 'basic' || type == 'trick') player.markAuto('hs_mingfa', [i]);
								}
							},
							global: 'hs_mingfa_used',
							group: 'hs_mingfa_use',
							subSkill: {
								used: {
									audio: 'hs_mingfa',
									enable: 'chooseToUse',
									filter(event, player) {
										if (!player.countCards('h')) return false;
										if (!event.isMine() && event.hs_mingfa_used) return false;
										return game.hasPlayer(function (current) {
											if (current == player) return false;
											if (!current.hasSkill('hs_mingfa') || !current.getStorage('hs_mingfa')) return false;
											for (var i of current.getStorage('hs_mingfa')) {
												if (event.filterTarget(i, player, current)) return true;
											}
											return false;
										});
									},
									chooseButton: {
										dialog(event, player) {
											event.set('hs_mingfa_used', true);
											var list = [];
											for (var current of player.hs_filterOtherPlayer()) {
												if (!current.hasSkill('hs_mingfa') || !current.getStorage('hs_mingfa')) continue;
												for (var i of current.getStorage('hs_mingfa')) {
													if (event.filterTarget(i, player, current)) list.push(i);
												}
											}
											return ui.create.dialog('明伐:选择要使用的牌', [list, 'vcard']);
										},
										check(button) {
											var player = _status.event.player;
											return (
												player.getUseValue({
													name: button.link.name,
												}) -
												player.getUseValue({
													name: 'wuzhong',
												}) /
												2
											);
										},
										backup(links, player) {
											return {
												filterCard: true,
												check(card) {
													var num = 3 - get.value(card);
													if (card.name == links[0].name) num += 5;
													if (card.suit == links[0].suit) num += 5;
													if (card.number == links[0].number) num += 5;
													return num;
												},
												audio: 'hs_mingfa',
												popname: true,
												viewAs: links[0],
												filterTarget(card, player, target) {
													var bool = false;
													var players = ui.selected.targets.slice(0);
													for (var i = 0; i < players.length; i++) {
														if (players[i].hasSkill('hs_mingfa')) {
															bool = true;
															break;
														}
													}
													if (!bool && !target.hasSkill('hs_mingfa')) return false;
													return _status.event._backup.filterTarget.apply(this, arguments);
												},
												complexSelect: true,
												onuse(result, player) {
													var num = -1;
													if (result.card.name != result.cards[0].name) num += 1;
													if (result.card.suit != result.cards[0].suit) num += 1;
													if (result.card.number != result.cards[0].number) num += 1;
													if (num != 0) result.targets[0].draw(Math.abs(num));
													if (num > 0) {
														for (var i of result.targets[0].getStorage('hs_mingfa')) {
															if (i.name == result.card.name && i.suit == result.card.suit && i.number == result.card.number) {
																result.targets[0].unmarkAuto('hs_mingfa', [i]);
																break;
															}
														}
													}
													if (num > 1) player.loseHp();
												},
											};
										},
										prompt(links, player) {
											return '将一张牌当做' + get.translation(links[0]) + '使用';
										},
									},
									ai: {
										fireAttack: true,
										respondSha: true,
										respondShan: true,
										save: true,
										order() {
											return get.order({ name: 'sha' }) + 10;
										},
										result: {
											player(player) {
												if (_status.event.dying) return get.attitude(player, _status.event.dying);
												var num0 = 0,
													num1 = 0;
												for (var current of player.hs_filterOtherPlayer()) {
													if (current.hasSkill('hs_mingfa') && current.getStorage('hs_mingfa')) {
														num0 = get.attitude(player, current);
														if (num0 < num1) num1 = num0;
													}
												}
												return -num1;
											},
										},
									},
								},
								use: {
									audio: 'hs_mingfa',
									enable: 'chooseToUse',
									filter(event, player) {
										if (!player.countCards('h')) return false;
										if (!event.isMine() && event.hs_mingfa_use) return false;
										for (var i of player.getStorage('hs_mingfa')) {
											if (event.filterCard(i, player, event)) return true;
										}
										return false;
									},
									hiddenCard(player, name) {
										for (var i of player.getStorage('hs_mingfa')) {
											if (i == name) return true;
										}
										return false;
									},
									chooseButton: {
										dialog(event, player) {
											event.set('hs_mingfa_use', true);
											var list = [];
											for (var i of player.getStorage('hs_mingfa')) {
												if (event.filterCard(i, player, event)) list.push(i);
											}
											return ui.create.dialog('明伐:选择要使用的牌', [list, 'vcard']);
										},
										filter(button, player) {
											return _status.event.parent.filterCard(button.link, player, _status.event.parent);
										},
										check(button) {
											var player = _status.event.player;
											if (
												player.getUseValue({
													name: button.link.name,
												}) > 0
											)
												return get.order({ name: button.link.name }) + 100;
											else return -1;
										},
										backup(links, player) {
											return {
												filterCard: true,
												check(card) {
													var num = -1;
													if (card.name == links[0].name) num += 5;
													if (card.suit == links[0].suit) num += 5;
													if (card.number == links[0].number) num += 5;
													return num;
												},
												popname: true,
												audio: 'hs_mingfa',
												viewAs: links[0],
												onuse(result, player) {
													var num = -1;
													if (result.card.name != result.cards[0].name) num += 1;
													if (result.card.suit != result.cards[0].suit) num += 1;
													if (result.card.number != result.cards[0].number) num += 1;
													if (num != 0) player.draw(Math.abs(num));
													if (num > 0) {
														for (var i of player.getStorage('hs_mingfa')) {
															if (i.name == result.card.name && i.suit == result.card.suit && i.number == result.card.number) {
																player.unmarkAuto('hs_mingfa', [i]);
																break;
															}
														}
													}
													if (num > 1) player.loseHp();
												},
											};
										},
										prompt(links, player) {
											return '将一张牌当做' + get.translation(links[0]) + '使用';
										},
									},
									ai: {
										save: true,
										fireAttack: true,
										respondSha: true,
										respondShan: true,
										order: 200,
										result: {
											player(player) {
												if (_status.event.dying) return get.attitude(player, _status.event.dying);
												return 5;
											},
										},
									},
								},
							},
						},
						hs_rongbei: {
							trigger: {
								player: 'phaseUseEnd',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									for (var i = 1; i < 6; i++) {
										if (current.hasEmptySlot(i)) return true;
									}
									return false;
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget('选择『戎备』的对象', function (card, player, target) {
										for (var i = 1; i < 6; i++) {
											if (target.hasEmptySlot(i)) return true;
										}
										return false;
									})
									.set('ai', function (target) {
										var num = get.attitude(_status.event.player, target);
										for (var i = 1; i < 6; i++) {
											if (target.hasEmptySlot(i)) num++;
										}
										if (_status.event.player == target) num++;
										return num;
									});
								('step 1');
								event.count = 0;
								event.list = [];
								event.target = result.targets[0];
								for (var i = 1; i < 6; i++) {
									if (event.target.hasEmptySlot(i)) event.list.add(i);
								}
								('step 2');
								if (event.list.length) {
									var num = event.list.randomGet(),
										card = get.cardPile2(function (card) {
											return get.subtype(card) == 'equip' + num && event.target.canUse(card, event.target);
										});
									event.list.remove(num);
									if (card) {
										event.target.$gain2(card);
										event.target.equip(card);
										event.count++;
									}
									if (event.count < 2) event.redo();
								}
							},
							mod: {
								aiValue(player, card, num) {
									if (get.type(card) == 'equip') return Math.min(num, num / 3);
								},
								maxHandcard(player, num) {
									return num + player.countCards('e');
								},
							},
						},
						//卧龙
						hs_kongcheng: {
							intro: {
								name: '空城',
								name2: '空城',
								markcount: 'expansion',
								mark(dialog, content, player) {
									var content = player.getExpansions('hs_kongcheng');
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) dialog.addAuto(content);
										else return '已有' + content.length.toString() + '张『空城』牌';
									}
								},
							},
							audio: 'ext:划水池/audio:5',
							trigger: {
								player: 'phaseUseEnd',
							},
							forced: true,
							filter(event, player) {
								if (player.countExpansions('hs_kongcheng') > game.filterPlayer().length + 7) return false;
								return player.countCards('h');
							},
							content() {
								player.addToExpansion(player.getCards('h'), player, 'giveAuto').gaintag.add('hs_kongcheng');
							},
							group: 'hs_kongcheng_damage',
							subSkill: {
								damage: {
									trigger: {
										player: 'damageEnd',
									},
									audio: 'ext:划水池/audio:5',
									logTarget: 'source',
									filter(event, player) {
										if (player.storage.hs_kongcheng_damage) return false;
										return event.source && event.source != player;
									},
									forced: true,
									content() {
										'step 0';
										player
											.chooseCard([0, Infinity], 'h', '空城:是否选择任意张牌并对' + get.translation(trigger.source) + '发动『空城』？')
											.set('ai', function (card) {
												var player = _status.event.player;
												if (get.attitude(player, trigger.source) <= 0) {
													if (get.tag(card, 'damage')) return 10;
													return 8.9 - get.value(card);
												} else if (
													!player.getExpansions('hs_kongcheng').filter(function (cardi) {
														return get.tag(cardi, 'damage');
													}).length
												) {
													if (get.tag(card, 'damage')) return -1;
													return 8.9 - get.value(card);
												} else return -1;
											})
											.set('filterOk', function () {
												var player = _status.event.player;
												return (
													get.attitude(player, trigger.source) <= 0 ||
													!player.getExpansions('hs_kongcheng').filter(function (card) {
														return get.tag(card, 'damage');
													}).length
												);
											});
										('step 1');
										if (result.bool) {
											player.storage.hs_kongcheng_damage = true;
											event.list = player.getExpansions('hs_kongcheng');
											if (result.cards.length) event.list.addArray(result.cards);
											game.hs_loseCards(event.list);
											event.list1 = [];
											player.showCards(event.list);
										} else event.finish();
										('step 2');
										if (event.list.length) {
											var card = event.list.shift();
											if (get.tag(card, 'damage') && trigger.source.isAlive()) player.useCard(card, trigger.source, false).noActCount = true;
											else event.list1.add(card);
										} else {
											if (event.list1.length) player.hs_pushPileCards(event.list1, false, true);
											var cards = get.bottomCards(event.list1.length + 1);
											player.addToExpansion(cards, 'draw').gaintag.add('hs_kongcheng');
											delete player.storage.hs_kongcheng_damage;
											event.finish();
										}
										('step 3');
										event.goto(2);
									},
									ai: {
										unequip: true,
										unequip: true,
										skillTagFilter(player, tag, arg) {
											if (tag == 'unequip') {
												if (!player.storage.hs_kongcheng_damage) return false;
											} else if (tag == 'unequip') {
												if (!player.storage.hs_kongcheng_damage) return false;
											}
										},
									},
								},
							},
						},
						hs_jifeng: {
							trigger: {
								player: 'phaseJieshu',
							},
							audio: 'ext:划水池/audio:11',
							forced: true,
							content() {
								'step 0';
								var cards = get.cards(7),
									red = cards.filter(function (card) {
										return get.color(card) == 'red';
									}),
									black = cards.filter(function (card) {
										return get.color(card) == 'black';
									});
								player.showCards(cards);
								game.cardsGotoOrdering(cards);
								if (black.length > red.length) {
									event.num = red.length;
									event.cards = black;
								} else {
									event.num = black.length;
									event.dawu = true;
									event.cards = red;
								}
								if (event.num > 0)
									player.chooseTarget([1, event.num], '令至多' + get.cnNumber(event.num) + '名角色获得' + (event.dawu ? '『大雾』' : '『狂风』')).set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (event.dawu) {
											if (target.isMin()) return 1;
											if (target.hasSkill('biantian2')) return 1;
											if (att >= 3) {
												if (target.hp == 1) return att + 1;
												if (target.hp == 2 && target.countCards('he') <= 2) return att * 0.7 + 1;
												return 1;
											}
											return att;
										} else return -att;
									});
								('step 1');
								if (result.targets?.length) {
									player.line(result.targets);
									if (event.dawu) {
										for (var target of result.targets) target.hs_addMark('hs_jifeng_dawu');
									} else {
										for (var target of result.targets) target.hs_addMark('hs_jifeng_kuangfeng');
									}
								}
								var num = game.filterPlayer().length;
								if (event.cards.length > num) {
									player.chooseButton(num, ['祭风:选择获得的牌', event.cards], true).set('ai', function (button) {
										var player = _status.event.player;
										return get.value(button.link, player);
									});
								} else event._result = { bool: true, links: event.cards };
								('step 2');
								player.gain(result.links, 'draw2');
							},
							global: ['hs_jifeng_dawu', 'hs_jifeng_kuangfeng'],
							subSkill: {
								dawu: {
									intro: {
										name: '大雾',
										name2: '大雾',
										content: '共有#个<大雾>标记',
									},
									marktext: '雾',
									audio: 'ext:划水池/audio:7',
									trigger: {
										player: 'damageBegin4',
									},
									filter(event, player) {
										if (!player.hasMark('hs_jifeng_dawu')) return false;
										return event.nature != 'thunder';
									},
									forced: true,
									content() {
										player.removeMark('hs_jifeng_dawu', 1);
										trigger.cancel();
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (target.hasMark('hs_jifeng_dawu') && get.tag(card, 'damage') && !get.tag(card, 'thunderDamage')) return 0.5;
											},
										},
										filterDamage: true,
										skillTagFilter(player, tag, arg) {
											if (!player.hasMark('hs_jifeng_dawu')) return false;
											if (arg) {
												if (arg && arg.card) {
													if (arg && arg.card.nature == 'thunder') return false;
													if (get.tag(arg.card, 'thunderDamage')) return false;
												}
												if (arg && arg.player && arg.player.hasSkillTag('jueqing', false, player)) return false;
											}
										},
									},
								},
								kuangfeng: {
									intro: {
										name: '狂风',
										name2: '狂风',
										content: '共有#个<狂风>标记',
									},
									marktext: '风',
									audio: 'ext:划水池/audio:10',
									trigger: {
										player: 'damageBegin3',
									},
									filter(event, player) {
										if (!player.hasMark('hs_jifeng_kuangfeng')) return false;
										return event.nature == 'fire';
									},
									forced: true,
									content() {
										player.removeMark('hs_jifeng_kuangfeng', 1);
										trigger.num++;
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'fireDamage') && target.hasMark('hs_jifeng_kuangfeng')) return 1.5;
											},
										},
									},
								},
							},
						},
						hs_qixing: {
							trigger: {
								player: 'dyingBegin',
							},
							audio: 'ext:划水池/audio:10',
							forced: true,
							content() {
								var cards = get.cards(7),
									save,
									list = [],
									show = [];
								game.cardsGotoOrdering(cards);
								player.showCards(cards);
								for (var i of cards) {
									if (i.name == 'tao' || i.name == 'jiu') {
										show = [i];
										save = true;
										break;
									}
								}
								if (!save) {
									for (var i = 0; i < 4; i++) {
										var num = 0;
										for (var j = i + 1; j < 5; j++) {
											var num1 = num + cards[i].number;
											for (var k = j + 1; k < 6; k++) {
												var num2 = num1 + cards[j].number;
												for (var a = k + 1; a < 7; a++) {
													var num3 = num2 + cards[k].number;
													if (num3 + cards[a].number == 49) {
														list = [i, j, k, a];
														save = true;
													} else if (num3 + cards[a].number < 49 && a < 6) {
														for (var b = a + 1; b < 7; b++) {
															var num4 = num3 + cards[a].number;
															if (num4 + cards[b].number == 49) {
																list = [i, j, k, a, b];
																save = true;
															} else if (num4 + cards[b].number < 49 && b < 6) {
																for (var c = b + 1; c < 7; c++) {
																	var num5 = num4 + cards[b].number;
																	if (num5 + cards[c].number == 49) {
																		list = [i, j, k, a, b, c];
																		save = true;
																	} else if (num5 + cards[c].number < 49 && c < 6) {
																		for (var d = c + 1; d < 7; d++) {
																			if (num5 + cards[c].number + cards[d].number == 49) {
																				list = [i, j, k, a, b, c, d];
																				save = true;
																				break;
																			}
																		}
																	}
																	if (save) break;
																}
															}
															if (save) break;
														}
													}
													if (save) break;
												}
											}
										}
									}
								}
								if (save) {
									for (var i of list) show.add(cards[i]);
									player.showCards(show);
									player.hs_recoverTo(1);
								}
							},
						},
						//麹义
						hs_jiaozi: {
							marktext: '骄姿',
							intro: {
								name: '骄姿',
								name2: '骄姿',
								content(content, player) {
									var num = player.storage.hs_jiaozi_count.toString(),
										num1 = player.countMark('hs_jiaozi').toString();
									return '受到的伤害为原本的' + num + '倍<br>摸牌阶段摸牌数+' + num1 * 2 + '<br>造成的伤害+' + num1;
								},
							},
							audio: 'ext:划水池/audio:9',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							popup: false,
							content() {
								'step 0';
								if (!player.storage.hs_jiaozi_count) player.storage.hs_jiaozi_count = 1;
								player.hs_addMark('hs_jiaozi_add', 1, false);
								('step 1');
								var num0 = player.countMark('hs_jiaozi_add');
								if (num0 && num0 > 0 && Math.sqrt(num0) == Math.trunc(Math.sqrt(num0))) {
									if (player.maxHp > 0) player.gainMaxHp(player.maxHp);
									if (player.hp > 0) player.recover(player.hp);
									var num = player.storage.hs_jiaozi_count;
									if (typeof num == 'number' && num > 0) player.storage.hs_jiaozi_count = num * 2;
									player.hs_addMark('hs_jiaozi', 1, false);
								}
							},
							group: ['hs_jiaozi_draw', 'hs_jiaozi_add', 'hs_jiaozi_multiply'],
							subSkill: {
								add: {
									marktext: '回合',
									intro: {
										name: '骄姿',
										name2: '骄姿',
										content: '已进行#个回合',
									},
									trigger: {
										source: 'damageBegin2',
									},
									audio: 'hs_jiaozi',
									forced: true,
									filter(event, player) {
										return event.num > 0 && player.hasMark('hs_jiaozi');
									},
									content() {
										trigger.num = trigger.num + player.countMark('hs_jiaozi');
									},
								},
								draw: {
									trigger: {
										player: 'phaseDrawBegin2',
									},
									audio: 'hs_jiaozi',
									forced: true,
									filter(event, player) {
										return !event.numFixed && player.hasMark('hs_jiaozi');
									},
									content() {
										trigger.num = trigger.num + player.countMark('hs_jiaozi') * 2;
									},
								},
								multiply: {
									trigger: {
										player: 'damageBegin4',
									},
									audio: 'hs_jiaozi',
									_priority: -Infinity,
									lastDo: true,
									forced: true,
									filter(event, player) {
										return player.storage.hs_jiaozi_count > 1;
									},
									content() {
										trigger.num = trigger.num * player.storage.hs_jiaozi_count;
									},
								},
							},
						},
						hs_fuji: {
							trigger: {
								player: 'useCard1',
							},
							audio: 'ext:划水池/audio:10',
							forced: true,
							filter(event, player) {
								return (
									event.card &&
									(get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
									game.hasPlayer(function (current) {
										if (current.countCards('h') < player.countCards('h')) return true;
										if (current.hp < player.hp) return true;
										return current.getAttackRange() < player.getAttackRange();
									})
								);
							},
							content() {
								var targets1 = game.filterPlayer(function (current) {
									return current.countCards('h') < player.countCards('h');
								}),
									targets2 = game.filterPlayer(function (current) {
										return current.hp < player.hp;
									}),
									targets3 = game.filterPlayer(function (current) {
										return current.getAttackRange() < player.getAttackRange();
									});
								trigger.directHit.addArray(targets1);
								for (var i of targets2) {
									i.addTempSkill('qinggang2');
									i.storage.qinggang2.add(trigger.card);
								}
								for (var i of targets3) {
									if (i.hasSkill('fengyin')) i.storage.hs_fuji_has = true;
									else i.addTempSkill('fengyin');
									i.addTempSkill('hs_fuji_remove');
									i.storage.hs_fuji_remove.add(trigger.card);
								}
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									return arg.target.countCards('h') < player.countCards('h') - 1;
								},
							},
							subSkill: {
								remove: {
									init(player, skill) {
										if (!player.storage.hs_fuji_remove) player.storage.hs_fuji_remove = [];
									},
									trigger: {
										global: 'useCardAfter',
									},
									filter(event, player) {
										if (!player.storage.hs_fuji_remove) return false;
										return player.storage.hs_fuji_remove.includes(event.card);
									},
									silent: true,
									forced: true,
									popup: false,
									_priority: 10,
									content() {
										player.storage.hs_fuji_remove.remove(trigger.card);
										if (!player.storage.hs_fuji_remove.length) {
											if (!player.storage.hs_fuji_has) player.removeSkill('fengyin');
											else delete player.storage.hs_fuji_has;
											player.removeSkill('hs_fuji_remove');
										}
									},
								},
							},
						},
						//王司徒
						hs_gushe: {
							trigger: {
								player: 'damageAfter',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							hs_use(event, player) {
								var targets = game.filterPlayer(function (current) {
									return player.canCompare(current);
								});
								targets.sortBySeat(_status.currentPhase);
								if (targets.length) {
									player.line(targets);
									event.win = 0;
									event.lose = 0;
									player.chooseToCompare(targets).callback = lib.skill.hs_gushe.callback;
								} else event.finish();
							},
							hs_use2(event, player) {
								game.log(player, '此次拼点赢', event.win, '次,没赢', event.lose, '次');
								var num = Math.min(event.lose, player.countCards('h'));
								if (event.win < event.lose && num > 0) player.chooseToDiscard(true, 'he', num);
								else if (event.win > event.lose)
									player.chooseDrawRecover(2, true, function (event, player) {
										if (player.hp == 1 && player.isDamaged()) return 'recover_hp';
										return 'draw_card';
									});
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								lib.skill.hs_gushe.hs_use(event, player);
								('step 2');
								lib.skill.hs_gushe.hs_use2(event, player);
							},
							callback() {
								if (event.num1 > event.num2) event.getParent(2).win++;
								else event.getParent(2).lose++;
							},
							group: ['hs_gushe_use', 'hs_gushe_compare', 'hs_gushe_multiple'],
							subSkill: {
								use: {
									audio: 'hs_gushe',
									enable: 'phaseUse',
									usable: 1,
									content() {
										'step 0';
										player.draw();
										('step 1');
										lib.skill.hs_gushe.hs_use(event, player);
										('step 2');
										lib.skill.hs_gushe.hs_use2(event, player);
									},
									ai: {
										order: 7,
										result: {
											player(player, target) {
												var hs = player.getCards('h');
												for (var i = 0; i < hs.length; i++) {
													if (get.value(hs[i], player) <= 6) return 1;
												}
												return 0;
											},
										},
									},
								},
								compare: {
									trigger: {
										player: 'chooseToCompareAfter',
										target: 'chooseToCompareAfter',
									},
									forced: true,
									popup: false,
									audio: 'ext:划水池/audio:5',
									content() {
										'step 0';
										if (trigger.cards && trigger.cards.length) {
											var cards = trigger.cards.filterInD();
											if (cards.length) {
												player.gain(cards, 'gain2');
												if (trigger.hs_targets && trigger.hs_targets.length) {
													player.chooseCard(trigger.cards.length, 'h', true, '选择交出的牌');
													event.goto(2);
												} else {
													player.chooseToDiscard(trigger.cards.length, 'h', true);
													event.finish();
												}
											}
										} else {
											var cards = [];
											if (get.position(card1) == 'd') cards.add(trigger.card1);
											if (get.position(card2) == 'd') cards.add(trigger.card2);
											if (!cards.length) cards = [trigger.card1, trigger.card2].filterInD();
											if (cards.length) {
												player.gain(cards, 'gain2');
												if (player == trigger.player) {
													if (trigger.num1 >= trigger.num2) {
														player.chooseToDiscard(2, 'h', true);
														event.finish();
													} else player.chooseCard(2, 'h', true, '选择交出的牌');
												} else if (trigger.num1 <= trigger.num2) {
													player.chooseToDiscard(2, 'h', true);
													event.finish();
												} else player.chooseCard(2, 'h', true, '选择交出的牌');
											}
										}
										('step 1');
										if (result.cards?.length) {
											if (player == trigger.player) trigger.target.gain(result.cards, player, 'giveAuto');
											else trigger.player.gain(result.cards, player, 'give');
										}
										event.finish();
										('step 2');
										if (result.bool && result.cards) {
											if (trigger.hs_targets.length == 1) trigger.hs_targets[0].gain(result.cards, player, 'giveAuto');
											else player.hs_distributeCards(result.cards, trigger.hs_targets, true);
										}
									},
								},
								multiple: {
									trigger: {
										player: 'compareMultipleAfter',
										target: 'compareMultipleAfter',
									},
									forced: true,
									popup: false,
									content() {
										if (!trigger.parent.hs_targets) trigger.parent.hs_targets = [];
										if (player == trigger.player) {
											if (trigger.num1 < trigger.num2) trigger.parent.hs_targets.add(trigger.target);
										} else if (trigger.num1 > trigger.num2) trigger.parent.hs_targets.add(trigger.player);
									},
								},
							},
						},
						hs_wangxue: {
							trigger: {
								player: 'gainEnd',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							filter(event, player) {
								return (
									event.cards &&
									event.cards.filter(function (card) {
										return get.type(card) != 'equip';
									}).length > 1
								);
							},
							content() {
								'step 0';
								event.cards = trigger.cards.filter(function (card) {
									return get.type(card) != 'equip';
								});
								player.chooseCardButton('选择此次获得的牌视为牌', true, event.cards);
								('step 1');
								var name = result.links[0].name;
								for (var i of event.cards) i.storage.hs_wangxue = name;
								player.addGaintag(event.cards, 'hs_wangxue');
								player.addGaintag(event.cards, name);
							},
							mod: {
								cardname(card, player) {
									if (card && card.hasGaintag('hs_wangxue') && card.storage.hs_wangxue) return card.storage.hs_wangxue;
								},
							},
						},
						//王粲
						hs_ansong: {
							intro: {
								content: '闇诵失败的牌名:$',
							},
							trigger: {
								player: 'phaseUseBegin',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							popup: false,
							content() {
								'step 0';
								if (player.storage.hs_ansong_log) {
									event.cards = player.storage.hs_ansong_log;
									var list = [],
										list1 = [],
										list2 = [];
									for (var i of lib.inpile) {
										var type = get.type2(i);
										if (type == 'basic') list.add([type, '', i]);
										else if (type == 'trick') list1.add([type, '', i]);
										else list2.add([type, '', i]);
									}
									var dialog = ui.create.dialog(true, '闇诵:声明你上个出牌阶段开始时拥有的手牌', [list, 'vcard'], [list1, 'vcard'], [list2, 'vcard']);
									player.chooseButton([0, Infinity], dialog, true).set('ai', function (button) {
										var player = _status.event.player;
										for (var i of player.storage.hs_ansong_log) {
											if (i.name == button.link[2]) return 100;
										}
										return -1;
									});
								}
								('step 1');
								player.storage.hs_ansong_log = player.getCards('h');
								if (result.links) event.links = result.links;
								else event.finish();
								('step 2');
								if (event.cards) {
									var cards1 = [],
										cards2 = [],
										wrongcards = [],
										truecards = [];
									if (event.cards.length) for (var i of event.cards) cards1.add(i.name);
									if (event.links.length) for (var i of event.links) cards2.add(i[2]);
									if (cards1.length)
										for (var i of cards1) {
											if (cards2.includes(i)) truecards.add(i);
											else wrongcards.add(i);
										}
									if (cards2.length)
										for (var i of cards2) {
											if (cards1.includes(i)) truecards.add(i);
											else wrongcards.add(i);
										}
									if (truecards.length) {
										var getcards = [];
										for (var i of truecards) {
											var card = get.discardPile(function (card) {
												return card.name == i;
											});
											if (card) getcards.add(card);
										}
										if (getcards.length) player.gain(getcards, 'gain2');
									}
									if (wrongcards.length) player.markAuto('hs_ansong', wrongcards);
								}
							},
							mod: {
								cardEnabled2(card, player) {
									if (player.storage.hs_ansong && get.position(card) == 'h') {
										for (var i of player.storage.hs_ansong) {
											if (card.name == i) return false;
										}
									}
								},
								aiValue(player, card, num) {
									if (player.storage.hs_ansong && get.position(card) == 'h') {
										for (var i of player.storage.hs_ansong) {
											if (card.name == i) return 0;
										}
									}
								},
								aiUseful(player, card, num) {
									if (player.storage.hs_ansong && get.position(card) == 'h') {
										for (var i of player.storage.hs_ansong) {
											if (card.name == i) return 0;
										}
									}
								},
							},
						},
						hs_shanxi: {
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							marktext: '檄',
							trigger: {
								player: ['phaseJieshu', 'damageAfter'],
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									prompt: '是否将一张手牌作为<檄>置于一名其他角色的武将牌旁？',
									prompt2: '将<檄>置于一名其他角色的武将牌旁',
									filterCard: true,
									position: 'h',
									selectCard: 1,
									filterTarget(card, player, target) {
										return player != target;
									},
									selectTarget: 1,
									ai1(card) {
										var num = 10 - get.value(card);
										if (ui.selected.targets.length) {
											var target = ui.selected.targets[0];
											for (var i of target.getExpansions('hs_shanxi')) {
												if (i.storage.hs_shanxi_lose == player && card.suit == i.suit) {
													num -= 5;
													break;
												}
											}
											if (target.getCards('h').length) {
												for (var i of target.getCards('h')) {
													if (card.suit == i.suit) num += 0.3;
												}
											}
										}
										return num;
									},
									ai2(target) {
										var num = target.hasSkillTag('maixie') ? 2 : 0;
										return 0.1 - get.attitude(_status.event.player, target) + num;
									},
								});
								('step 1');
								if (result.bool) {
									event.forceDie = true;
									var card = result.cards[0];
									card.storage.hs_shanxi_lose = player;
									result.targets[0].addToExpansion(card, player, 'giveAuto').gaintag.add('hs_shanxi');
									player.draw();
								}
							},
							global: 'hs_shanxi_lose',
							subSkill: {
								lose: {
									trigger: {
										global: ['phaseUseEnd', 'dieAfter'],
									},
									audio: 'hs_shanxi',
									forced: true,
									popup: false,
									filter(event, player) {
										for (var i of player.getExpansions('hs_shanxi')) {
											if (i.storage.hs_shanxi_lose == event.player) return true;
										}
										return false;
									},
									content() {
										'step 0';
										event.cards = [];
										for (var i of player.getExpansions('hs_shanxi')) {
											if (i.storage.hs_shanxi_lose == trigger.player) {
												delete i.storage.hs_shanxi_lose;
												event.cards.add(i);
											}
										}
										player.gain(event.cards, 'gain2');
										('step 1');
										var num = player.countCards('h', function (card) {
											var player = _status.event.player;
											for (var i of _status.event.cards) {
												if (card.suit == i.suit || card.number == i.number) return true;
											}
											return false;
										});
										if (num > 0) player.loseHp(num);
									},
									mod: {
										cardEnabled2(card, player) {
											for (var i of player.getExpansions('hs_shanxi')) {
												var target = i.storage.hs_shanxi_lose;
												if (target.storage.hs_ansong) {
													for (var j of target.storage.hs_ansong) {
														if (card.name == j) return false;
													}
												}
											}
										},
										cardSavable(card, player) {
											for (var i of player.getExpansions('hs_shanxi')) {
												var target = i.storage.hs_shanxi_lose;
												if (target.storage.hs_ansong) {
													for (var j of target.storage.hs_ansong) {
														if (card.name == j) return false;
													}
												}
											}
										},
										cardDiscardable(card, player) {
											for (var i of player.getExpansions('hs_shanxi')) {
												var target = i.storage.hs_shanxi_lose;
												if (target.storage.hs_ansong) {
													for (var j of target.storage.hs_ansong) {
														if (card.name == j) return false;
													}
												}
											}
										},
									},
								},
							},
						},
						hs_lvming: {
							enable: 'phaseUse',
							audio: 'ext:划水池/audio:4',
							usable: 1,
							content() {
								var card = get.cardPile2(function (c) {
									return get.type(c) == 'basic';
								});
								if (card) {
									player.gain(card, 'gain2');
									if (player.storage.hs_ansong) {
										for (var i of player.storage.hs_ansong) {
											if (card.name == i) {
												player.storage.hs_ansong.remove(i);
												break;
											}
										}
									}
								}
							},
							ai: {
								order: 10,
								result: {
									player: 5,
								},
							},
							global: 'hs_lvming_die',
							subSkill: {
								die: {
									trigger: {
										global: 'die',
									},
									audio: 'hs_lvming',
									filter(event, player) {
										return event.player.isDead() && event.player.hasSkill('hs_lvming');
									},
									forced: true,
									popup: false,
									content() {
										'step 0';
										if (player.hasSkill('hs_lvming')) event._result = { bool: true, had: true };
										else
											player.chooseBool('是否学驴叫为' + get.translation(trigger.player) + '送行？').set('ai', function (event, player) {
												if (
													game.hasPlayer(function (current) {
														current.hasSkill('hs_zhenyu') && get.attitude(player, current) > 0;
													})
												) {
													if (player.storage.hs_zhenyu > player.hs_getSkills(true).length) return true;
													else if (player.hasSkill('hs_yizhong')) return true;
													else return Math.random() < 0.3;
												} else return true;
											});
										('step 1');
										if (result.bool) {
											game.log(player, '为', trigger.player, '送行🕯️🕯️🕯️');
											if (!result.had) player.addSkill('hs_lvming');
										}
									},
								},
							},
						},
						//张郃
						hs_qiaobian: {
							intro: {
								name: '巧变',
								name2: '巧变',
								content(storage, player, skill) {
									var txt = '当前回合的阶段依次为:<br><br>';
									if (player.storage.hs_qiaobian_phase) {
										for (var i of player.storage.hs_qiaobian_phase) txt += get.translation(i) + '<br>';
									} else for (var i of lib.phaseName) txt += get.translation(i) + '<br>';
									return txt;
								},
							},
							marktext: '巧变',
							trigger: {
								player: ['phaseEnd', 'damageEnd'],
							},
							audio: 'ext:划水池/audio:7',
							forced: true,
							//回合结束时或当你受到伤害后,你可以摸一张牌,或将从下一回合开始本局游戏你的回合阶段次序中某一阶段永久变为另一阶段
							content() {
								'step 0';
								if (!player.storage.hs_qiaobian_phase) {
									player.storage.hs_qiaobian_phase = lib.phaseName.slice(0);
								}
								var list1 = [],
									list2 = [];
								for (var i = 0; i < player.storage.hs_qiaobian_phase.length; i++) {
									list1.add(['', i, player.storage.hs_qiaobian_phase[i]]);
								}
								for (var j of lib.phaseName.slice(0)) list2.add([j, get.translation(j)]);
								player
									.chooseButton(2, ['巧变', '选择要变化和阶段', [list1, 'vcard'], '变化为', [list2, 'tdnodes']])
									.set('filterButton', function (button) {
										if (ui.selected.buttons.length) {
											if (typeof button.link == 'object') {
												if (typeof ui.selected.buttons[0].link == 'object') return false;
												return button.link[2] != ui.selected.buttons[0].link;
											} else {
												if (typeof ui.selected.buttons[0].link != 'object') return false;
												return button.link != ui.selected.buttons[0].link[2];
											}
										} else return true;
									})
									.set('ai', function (button) {
										var player = _status.event.player;
										if (typeof button.link == 'object') {
											if (player.storage.hs_qiaobian_phase.includes('phaseJudge') && button.link[2] == 'phaseJudge') {
												if (player.countCards('j') > 0) return 5;
												else return 3;
											} else if (player.storage.hs_qiaobian_phase.includes('phaseDiscard') && button.link[2] == 'phaseDiscard') return 4;
											else if (player.storage.hs_qiaobian_phase.includes('phaseJieshu') && button.link[2] == 'phaseJieshu') return 2;
											else if (player.storage.hs_qiaobian_phase.includes('phaseZhunbei') && button.link[2] == 'phaseZhunbei') return 1;
											else return Math.random();
										} else {
											if (button.link == 'phaseDraw' || button.link == 'phaseUse') return Math.random();
											else return -1;
										}
									});
								('step 1');
								if (result.links?.length) {
									if (typeof result.links[0] == 'string') result.links.reverse();
									player.storage.hs_qiaobian_phase[result.links[0][1]] = result.links[1];
									game.log(player, '将', '#y' + get.translation(result.links[0][2]), '变为', '#y' + get.translation(result.links[1]));
									player.addSkill('hs_qiaobian_phase');
								} else {
									player.draw();
								}
							},
							onremove(player) {
								delete player.storage.hs_qiaobian_phase;
							},
							subSkill: {
								phase: {
									trigger: {
										player: 'phaseBeforeStart',
									},
									charlotte: true,
									forced: true,
									forceDie: true,
									forceOut: true,
									audio: 'hs_qiaobian',
									filter(event, player) {
										return player.storage.hs_qiaobian_phase;
									},
									content() {
										trigger.phaseList = player.storage.hs_qiaobian_phase;
									},
								},
							},
						},
						hs_zhilve: {
							trigger: {
								player: ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter'],
							},
							audio: 'ext:划水池/audio:6',
							forced: true,
							popup: false,
							content() {
								'step 0';
								if (!player.storage.hs_zhilve[trigger.name]) {
									player.storage.hs_zhilve[trigger.name] = 1;
									event.finish();
								} else player.storage.hs_zhilve[trigger.name]++;
								('step 1');
								if (player.storage.hs_zhilve[trigger.name] == 2) {
									player.moveCard('知略:是否移动场上的一张牌？');
									event.finish();
								} else {
									player.chooseToDiscard('h', 1, true);
								}
								('step 2');
								if (player.storage.hs_zhilve[trigger.name] == 3) {
									if (game.hasPlayer((current) => current.countGainableCards(player, 'h') > 0)) {
										player
											.chooseTarget('知略:是否弃置至多两名其他角色的各一张手牌？', [1, 2], function (card, player, target) {
												return target != player && target.countGainableCards(player, 'h') > 0;
											})
											.set('ai', function (target) {
												var att = get.attitude(_status.event.player, target);
												if (target.hasSkill('tuntian')) return att / 10;
												return 1 - att;
											});
									}
								} else {
									player.chooseUseTarget(
										{
											name: 'sha',
										},
										'知略:是否视为使用一张【杀】？',
										false,
										'nodistance'
									);
									event.finish();
								}
								('step 3');
								if (result.targets?.length) {
									//QQQ
									var targets = result.targets.sortBySeat();
									player.hs_discardCardsMultiple(targets, ['h', true]);
								}
							},
						},
						//吕岱
						hs_qinguo: {
							intro: {
								content(storage, player, skill) {
									if (
										game.hasPlayer(function (current) {
											return current.hasSkill('DIY_dingpan');
										})
									) {
										if (player.storage.hs_qinguo == true) return '当你使用或打出牌未指定其他角色为目标结算完成后,你可以获得并展示牌堆底一张牌,若这两张牌颜色不同,你可以与一名其他角色进行一次〖定叛·谋弈〗,反之你摸一张牌.';
										else return '当你使用或打出牌未指定其他角色为目标结算完成后,你可以令一名其他角色获得并展示牌堆顶一张牌,若这两张牌颜色不同,你可以与一名其他角色进行一次〖定叛·谋弈〗,反之你摸一张牌.';
									} else if (player.storage.hs_qinguo == true) return '当你使用或打出牌未指定其他角色为目标结算完成后,你可以获得并展示牌堆底一张牌,若这两张牌颜色不同,你可以视为使用一张无距离限制且无视防具的【杀】(不计入使用次数),反之你摸一张牌.';
									else return '当你使用或打出牌未指定其他角色为目标结算完成后,你可以令一名其他角色获得并展示牌堆顶一张牌,若这两张牌颜色不同,你可以视为使用一张无距离限制且无视防具的【杀】(不计入使用次数),反之你摸一张牌.';
								},
							},
							mark: true,
							zhuanhuanji: true,
							marktext: '☯',
							init(player) {
								player.storage.hs_qinguo = false;
							},
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							forced: true,
							popup: false,
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								if (!event.targets) return true;
								if (!event.targets.length) return true;
								if (event.targets.length > 1) return false;
								return event.targets.includes(player);
							},
							content() {
								'step 0';
								if (!player.storage.hs_qinguo)
									player.chooseTarget('勤国:是否令一名其他角色展示并获得牌堆底一张牌？', lib.filter.notMe).set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att < 0) return -1;
										return 1 + get.attitude(_status.event.player, target);
									});
								else
									player.chooseBool('勤国:是否展示并获得牌堆顶一张牌？').set('ai', function () {
										return true;
									});
								('step 1');
								if (result.targets?.length) {
									if (!player.storage.hs_qinguo) result.targets[0].draw('visible');
									else player.draw('bottom', 'visible');
								} else event.finish();
								('step 2');
								player.showCards(result);
								player.changeZhuanhuanji('hs_qinguo');
								if (get.color(trigger.card, player) != get.color(result[0])) {
									if (
										game.hasPlayer(function (current) {
											return current.hasSkill('DIY_dingpan');
										})
									) {
										player.chooseTarget('勤国:是否选择一名其他角色进行〖定叛·谋弈〗？', lib.filter.notMe).set('ai', function (target) {
											var att = get.attitude(_status.event.player, target),
												es = target.getCards('e'),
												val = 0;
											for (var i of es) val += get.value(i, target);
											if (att <= 0) return Math.max(1.5, val / 5) - att;
											else if (es.length && target.hasSkillTag('noe')) return es.length - val / 5;
											else if (val < 0) return 1;
											else return -1;
										});
									} else {
										player
											.chooseUseTarget(
												{
													name: 'sha',
												},
												'勤国:是否视为使用一张【杀】？',
												false,
												'nodistance'
											)
											.set('oncard', function (card) {
												card.hs_qinguo_tag = true;
											});
										event.finish();
									}
								} else player.draw();
								('step 3');
								if (result.targets?.length) {
									player.line(result.targets[0]);
									var next = game.createEvent('DIY_dingpan_mouyi');
									next.player = player;
									next.target = result.targets[0];
									next.setContent(lib.skill.DIY_dingpan_mouyi.content);
								}
							},
							ai: {
								reverseEquip: true,
								unequip: true,
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'unequip') {
										if (_status.event.parent.name != 'hs_qinguo_me') return false;
									} else if (tag == 'unequip') {
										if (!arg || !arg.card || !arg.card.hs_qinguo_tag) return false;
									}
								},
							},
							subSkill: {
								audio: {
									audio: 'ext:划水池/audio:2',
								},
							},
						},
						hs_zhiti: {
							forced: true,
							trigger: {
								player: ['useCardToTargeted', 'useCardToBegin'],
							},
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								return event.targets.length > 1 && event.targets.includes(player);
							},
							content() {
								player.draw();
								trigger.targets.remove(player);
							},
							group: 'hs_zhiti_recover',
							subSkill: {
								recover: {
									trigger: {
										player: 'useCardEnd',
									},
									forced: true,
									audio: 'ext:划水池/audio:2',
									filter(event, player) {
										if (!event.targets) return false;
										return event.targets.length == player.hp;
									},
									content() {
										player.recover();
									},
								},
							},
						},
						//阿瞒
						hs_yingjia: {
							trigger: {
								target: 'hs_line',
							},
							audio: 'ext:划水池/audio:5',
							forced: true,
							changeSeat: true,
							filter(event, player) {
								return event.player != player && player != event.player.next;
							},
							content() {
								if (player == _status.currentPhase) {
									game.swapSeat(trigger.player, player, false, true);
									game.log(trigger.player, '将座位移至', player, '的上家');
								} else {
									game.swapSeat(player, trigger.player.next, false, true);
									game.log(player, '将座位移至', trigger.player, '的下家');
								}
							},
							group: 'hs_yingjia_draw',
							subSkill: {
								draw: {
									trigger: {
										player: 'phaseDrawBegin2',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									preHidden: true,
									filter(event, player) {
										return player.previous && player.previous.isDamaged();
									},
									content() {
										trigger.num += player.previous.getDamagedHp();
									},
								},
							},
						},
						hs_xieling: {
							intro: {
								name: '挟令',
								name2: '挟令',
								content: '『挟令』已使用花色$',
							},
							marktext: '挟令',
							audio: 'ext:划水池/audio:6',
							filter(event, player) {
								if (player.storage.hs_xieling2) return !player.storage.hs_xieling_used;
								return (
									player.countCards('h', function (card) {
										return !player.storage.hs_xieling_suit || !player.storage.hs_xieling_suit.includes(card.suit);
									}) > 0
								);
							},
							enable: 'chooseToUse',
							filterCard(card, player) {
								if (player.storage.hs_xieling2) return false;
								if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
								if (!player.storage.hs_xieling_suit) return true;
								return !player.storage.hs_xieling_suit.includes(card.suit);
							},
							check(card) {
								var num = 7.5 * (game.filterPlayer().length - 1),
									player = _status.event.player;
								for (var i of player.getCards('h')) {
									if (card.suit == i.suit) num -= get.value(i);
								}
								return num;
							},
							selectCard() {
								var player = _status.event.player;
								if (player.storage.hs_xieling2) return -1;
								if (ui.selected.cards.length)
									return player.countCards('h', function (card) {
										return card.suit == ui.selected.cards[0].suit;
									});
								return 1;
							},
							prompt() {
								var player = _status.event.player;
								if (player.storage.hs_xieling2) return '是否视为使用一张【号令天下】？';
								else return '是否将一种花色的手牌当作【号令天下】使用？';
							},
							position: 'h',
							viewAs: {
								name: 'gz_haolingtianxia',
							},
							onuse(result, player) {
								if (player.storage.hs_xieling2) player.storage.hs_xieling_used = true;
								else {
									var suit = result.cards[0].suit;
									if (!player.storage.hs_xieling_suit) player.storage.hs_xieling_suit = [];
									player.storage.hs_xieling_suit.add(suit);
									player.hs_addMark('hs_xieling', get.translation(suit), false);
								}
							},
							group: 'hs_xieling_gain',
							subSkill: {
								gain: {
									trigger: {
										global: 'discardAfter',
									},
									audio: 'ext:划水池/audio:3',
									forced: true,
									filter(event, player) {
										if (!player.storage.hs_xieling2) return false;
										if (event.player == player) return false;
										if (event.getParent(2).name != 'gz_haolingtianxia') return false;
										return event.cards && event.cards.filterInD('d').length;
									},
									content() {
										player.gain(trigger.cards.filterInD('d'), 'gain2').gaintag.add('hs_xieling');
									},
									mod: {
										ignoredHandcard(card, player) {
											if (player.storage.hs_xieling2 && card.hasGaintag('hs_xieling')) {
												return true;
											}
										},
										cardDiscardable(card, player, name) {
											if (player.storage.hs_xieling2 && name == 'phaseDiscard' && card.hasGaintag('hs_xieling')) {
												return false;
											}
										},
									},
								},
							},
						},
						hs_xionglve: {
							juexingji: true,
							forced: true,
							audio: 'ext:划水池/audio:2',
							trigger: {
								global: 'dyingBegin',
							},
							derivation: 'hs_jianxiong',
							filter(event, player) {
								return event.player == player.previous;
							},
							content() {
								'step 0';
								player.awakenSkill('hs_xionglve');
								player.gainMaxHp();
								player.awakenSkill('hs_yingjia');
								player.storage.hs_xieling2 = true;
								player.unmarkSkill('hs_xieling');
								('step 1');
								if (get.mode() == 'identity' && trigger.player.identity == 'zhu') {
									var iden = player.identity;
									player.identity = 'zhu';
									game.zhu = player;
									player.isZhu = true;
									trigger.player.identity = iden;
									delete trigger.player.isZhu;
									if (trigger.player.storage.enhance_zhu) {
										var skill = trigger.player.storage.enhance_zhu;
										trigger.player.removeSkill(skill);
										delete trigger.player.storage.enhance_zhu;
										player.addSkill(skill);
										player.storage.enhance_zhu = skill;
									}
									var spis = [];
									for (var i of game.players) {
										if (i != player && i != trigger.player) {
											if (i.identity == iden) i.identity = 'zhong';
											else i.identity = 'fan';
											if (i.identityShown || i == game.me) i.setIdentity();
										} else i.setIdentity();
										if (i.special_identity) {
											if ((i.identity != 'zhong' && ['identity_junshi', 'identity_dajiang'].includes(i.special_identity)) || (i.identity != 'fan' && i.special_identity == 'identity_zeishou')) {
												spis.add(i.special_identity);
												delete i.special_identity;
											}
										}
									}
									for (var i of ['identity_junshi', 'identity_dajiang']) {
										if (spis.includes(i)) {
											var zhong = game.filterPlayer(function (current) {
												return current.identity == 'zhong' && !current.special_identity;
											});
											if (zhong) zhong.special_identity = i;
										}
									}
									if (spis.includes('identity_zeishou')) {
										var fan = game.filterPlayer(function (current) {
											return current.identity == 'fan' && !current.special_identity;
										});
										if (fan) fan.special_identity = 'identity_zeishou';
									}
									trigger.player.removeSkill(['identity_junshi', 'identity_dajiang', 'identity_zeishou']);
									for (var i of game.players) {
										if (i.special_identity && player.hasSkill(i.special_identity)) player.addSkill(i.special_identity);
									}
								}
							},
							ai: {
								combo: 'hs_xieling',
							},
						},
						hs_jianxiong: {
							zhuSkill: true,
							forced: true,
							limited: true,
							audio: 'ext:划水池/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								if (player.storage.hs_jianxiong) return false;
								return player.hasZhuSkill('hs_jianxiong');
							},
							content() {
								player.storage.hs_jianxiong = true;
								player.awakenSkill('hs_jianxiong');
								player.hs_createCardsToPile([['club', 'spade'], [6, 9, 12], 'gz_haolingtianxia'], true, 5);
							},
						},
						//凌统
						hs_xuanlve: {
							trigger: {
								player: 'loseAfter',
								global: 'loseAsyncAfter',
							},
							audio: 'ext:划水池/audio:9',
							filter(event, player) {
								var cards = event.getl(player).cards2;
								if (!cards || !cards.length) return false;
								if (event.type == 'discard') return true;
								if (event.position == ui.discardPile) return true;
								return event.type == 'loseToDiscardpile';
							},
							forced: true,
							content() {
								'step 0';
								var cards = trigger.getl(player).cards2.filterInD('d');
								if (cards.length) {
									game.cardsGotoOrdering(cards);
									player.storage.hs_xuanlve = cards;
									player.chooseUseTarget({ name: 'sha' }, cards, '选略:是否将此次失去的牌当作【杀】使用？', false, 'nodistance');
								} else event.finish();
								('step 1');
								if (
									player.hasHistory('sourceDamage', function (evt) {
										if (evt.getParent('useCard').card != evt.card) return false;
										return evt.cards && evt.cards.length == player.storage.hs_xuanlve.length && evt.cards.includes(player.storage.hs_xuanlve[0]); //QQQ
									})
								)
									player.moveCard('知略:是否移动场上的一张牌？');
							},
							mod: {
								aiOrder(player, card, num) {
									var info = get.info(card),
										chongzhu = info.chongzhu;
									if (typeof info.chongzhu == 'function') chongzhu = info.chongzhu(_status.event, player);
									if (chongzhu) return Math.min(5.5, num);
								},
								aiValue(player, card, num) {
									if (_status.event.player == player && _status.event.name == 'chooseToDiscard') return num / 2;
								},
							},
							ai: {
								nodiscard: true,
								noe: true,
								noh: true,
							},
						},
						hs_yongjin: {
							trigger: {
								player: 'useCardToPlayered',
							},
							forced: true,
							audio: 'ext:划水池/audio:9',
							filter(event, player) {
								if (!get.tag(event.card, 'damage')) return false;
								return event.target.countCards('hej') > 0;
							},
							content() {
								'step 0';
								player.discardPlayerCard(trigger.target, [1, 2], 'hej', '是否弃置' + get.translation(trigger.target) + '至多两张牌？');
								('step 1');
								if (result.cards?.length) {
									var cards = result.cards.filterInD('d');
									if (cards.length) {
										var list1 = [],
											list2 = [];
										for (var i of cards) {
											if (get.type(i) == get.type(trigger.card)) list1.add(i);
											else list2.add(i);
										}
										if (list2.length) player.gain(list2, 'gain2');
										if (list1.length) player.hs_pushPileCards(list1);
									}
								}
							},
						},
						//马谡
						hs_zhiman: {
							audio: 'ext:划水池/audio:3',
							trigger: {
								player: 'damageBegin4',
								source: 'damageBegin2',
							},
							filter(event, player, name) {
								return event.cards && player.storage.hs_zhiman != name;
							}, //QQQ
							prompt(event, player) {
								var txt,
									cards = [];
								if (event.triggername == 'damageBegin2') {
									txt = '你对';
									if (event.player == player) txt += '自己';
									else txt += get.translation(event.player);
									txt += '造成' + event.num + '点伤害';
								} else {
									txt = '你受到';
									if (event.source == player) txt += '自己';
									else txt += get.translation(event.source);
									txt += '造成的' + event.num + '点伤害';
								}
								txt += ',是否发动『制蛮』防止此伤害';
								if (event.cards) cards = event.cards.filterInD();
								if (cards.length) txt += '并获得(' + get.translation(cards) + ')';
								return txt + '？';
							},
							check(event, player, name) {
								if (name == 'damageBegin2') {
									if (get.damageEffect(event.player, player, player) < 0) return true;
									var att = get.attitude(player, event.player);
									if (att > 0 && event.player.countCards('j')) return true;
									if (event.num > 1) {
										if (att < 0) return false;
										if (att > 0) return true;
									}
									if (event.cards) {
										return event.cards.filterInD().filter(function (card) {
											return get.value(card) > 6;
										}).length;
									} else return false;
								} else return true;
							},
							content() {
								'step 0';
								if (player.storage.hs_zhiman) delete player.storage.hs_zhiman;
								else player.storage.hs_zhiman = event.triggername;
								trigger.cancel();
								('step 1');
								var cards = trigger.cards.filterInD();
								if (cards.length) player.gain(cards, 'gain2');
							},
							ai: {
								maixie_defend: true,
								threaten: 0.9,
								effect: {
									maixie_defend: true,
									threaten: 0.9,
									effect: {
										target(card, player, target) {
											if (player.hasSkillTag('jueqing')) return;
											if (player._hs_zhiman_tmp) return;
											if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
											if (get.tag(card, 'damage')) {
												if (target.hasSkill('jinjian_player2')) return [1, -2];
												else {
													if (get.attitude(player, target) > 0) return [0, 0.2];
													if (get.attitude(player, target) < 0 && !player.hasSkillTag('damageBonus')) {
														var sha = player.getCardUsable({ name: 'sha' });
														player._hs_zhiman_tmp = true;
														var num = player.countCards('h', function (card) {
															if (card.name == 'sha') {
																if (sha == 0) return false;
																else sha--;
															}
															return get.tag(card, 'damage') && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
														});
														delete player._hs_zhiman_tmp;
														if (player.hasSkillTag('damage')) num++;
														if (num < 2) return [0, 0.8];
													}
												}
											}
										},
									},
								},
							},
						},
						hs_xinzhan: {
							audio: 'ext:划水池/audio:3',
							trigger: {
								global: ['damageCancelled', 'damageZero'],
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h') > 0;
								});
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget('心战:是否展示一名其他角色的一张手牌？', function (card, player, target) {
										return target.countCards('h') > 0 && player != target;
									})
									.set('ai', function (target) {
										return 100 - get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
									player.choosePlayerCard(event.target, 'h', true);
								} else event.finish();
								('step 2');
								if (result.cards?.length) {
									event.target.showCards(result.cards);
									if (get.color(result.cards[0]) != 'red') {
										player.draw();
										if (player.countCards('hes') > 0) player.chooseCard('hes', '心战:交给' + get.translation(event.target) + '一张牌', true);
									} else {
										player.gain(result.cards, 'give', event.target, 'bySelf');
										event.finish();
									}
								} else event.finish();
								('step 3');
								if (result.bool) event.target.gain(result.cards, 'give', player);
							},
						},
						//大耳
						hs_jieying: {
							usable: 1,
							enable: 'phaseUse',
							audio: 'ext:划水池/audio:6',
							filterCard: true,
							position: 'hes',
							selectCard: [1, Infinity],
							discard: false,
							lose: false,
							filter(event, player) {
								return player.countCards('hes');
							},
							check(card) {
								var player = _status.event.player;
								if (card.name == 'du') return 20;
								if (ui.selected.cards.length > Math.max(1, player.countCards('h') - 2)) return 0;
								if (
									ui.selected.cards.length + player.getHandcardLimit() > player.countCards('h') - 2 &&
									ui.selected.cards.length >
									2.5 *
									game.countPlayer(function (current) {
										return current != player && get.attitude(player, current) >= 0;
									})
								)
									return -1;
								if (player.countCards('hes') <= 1) {
									for (var i of player.hs_filterOtherPlayer()) {
										if (i.hasSkill('haoshi') && get.attitude(player, i) > 1 && get.attitude(i, player) > 1) return 10 - get.value(card);
									}
									if (player.countCards('he') > player.hp) return 9 - get.value(card);
									if (player.countCards('he') > 2) return 6 - get.value(card);
									return -1;
								}
								return 15 - ui.selected.cards.length - get.value(card);
							},
							forced: true,
							prompt: '结营:是否将牌分配给其他角色？',
							content() {
								'step 0';
								var targetsi = player.hs_filterOtherPlayer().sortBySeat();
								player.hs_distributeCards(cards, targetsi, true).set('ai', function (list, targets) {
									var player = _status.event.player,
										list1 = [],
										players = [],
										list0 = list.slice(0),
										friends = [];
									for (var i = 0; i < targets.length; i++) {
										list1.push([get.translation(targets[i]), []]);
										if (get.attitude(player, targets[i]) >= 0) players.add(i);
										if (get.attitude(player, targets[i]) > 0) friends.add(i);
									}
									if (friends.length) {
										friends.sort(function (a, b) {
											return get.attitude(player, targets[b]) - get.attitude(player, targets[a]);
										});
										for (var i of friends) {
											if (list0.length) list1[i][1].add(list0.shift());
											else break;
										}
										if (list0.length) {
											for (var card of list0) {
												friends.sort(function (a, b) {
													var attb = get.attitude(player, targets[b]) / (1 + targets[b].countCards('h') + list1[b][1].length),
														atta = get.attitude(player, targets[a]) / (1 + targets[a].countCards('h') + list1[a][1].length);
													return attb - atta;
												});
												list1[friends[0]][1].add(card);
											}
											list0 = [];
										}
									}
									if (list0.length && players.length) {
										players.sort(function (a, b) {
											return get.attitude(player, targets[b]) - get.attitude(player, targets[a]);
										});
										if (list0.length)
											for (var i of players) {
												if (list0.length) list1[i][1].add(list0.shift());
												else break;
											}
									}
									if (list0.length) {
										for (var i = 0; i < list0.length; i++) {
											var j = i;
											if (i >= targets.length) j = i % targets.length;
											list1[j][1].add(list0[i]);
										}
									}
									return list1;
								});
								('step 1');
								for (var i of result.list) {
									var num = i[1].length;
									player.hs_addMark('_hs_lianying', num);
									i[0].hs_addMark('_hs_lianying', num);
								}
							},
							ai: {
								order(skill, player) {
									if (player.countCards('h') < game.filterPlayer().length) return 10;
									else if (player.countCards('h') < player.hp + player.maxHp) return 8;
									else return 4;
								},
								result: {
									player: 10,
								},
							},
							global: 'hs_jieying_use',
							subSkill: {
								use: {
									trigger: {
										player: 'useCard',
									},
									audio: 'ext:划水池/audio:6',
									filter(event, player) {
										if (!player.hasMark('_hs_lianying')) return false;
										if (player.storage.hs_jieying_use >= player.countMark('_hs_lianying')) return false;
										var type = get.type(event.card);
										if (type != 'trick' && type != 'basic') return false;
										if (!event.targets.length) return false;
										if (get.info(event.card).multitarget) return false;
										return game.hasPlayer(function (current) {
											if (event.targets.includes(current)) return false;
											if (!current.hasMark('_hs_lianying')) return false;
											return current != player && lib.filter.targetEnabled2(event.card, event.player, current);
										});
									},
									forced: true,
									content() {
										'step 0';
										player
											.chooseTarget('结营:是否为' + get.translation(trigger.card) + '增加一个目标？', function (card, player, target) {
												var trigger = _status.event.getTrigger();
												if (trigger.targets.includes(target)) return false;
												if (!target.hasMark('_hs_lianying')) return false;
												return player != target && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
											})
											.set('ai', function (target) {
												var trigger = _status.event.getTrigger();
												return get.effect(target, trigger.card, trigger.player, _status.event.player);
											});
										('step 1');
										if (result.bool) {
											player.storage.hs_jieying_use++;
											trigger.targets.add(result.targets[0]);
										}
									},
								},
							},
						},
						hs_xieming: {
							trigger: {
								player: ['phaseZhunbei', 'damageAfter'],
							},
							audio: 'ext:划水池/audio:6',
							forced: true,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.hasMark('_hs_lianying');
								});
							},
							content() {
								'step 0';
								event.players = game
									.filterPlayer(function (current) {
										return current.hasMark('_hs_lianying');
									})
									.sortBySeat();
								('step 1');
								var target = event.players.shift();
								if (target.isAlive()) {
									target.removeMark('_hs_lianying');
									target.chooseDrawRecover(2, '携民:是否摸两张牌或回复1点体力？');
								}
								('step 2');
								if (event.players.length) event.goto(1);
							},
							ai: {
								combo: 'hs_jieying',
								effect: {
									target(card) {
										if (card.name == 'tiesuo') return 'zeroplayertarget';
									},
								},
							},
						},
						hs_fuhan: {
							global: 'hs_fuhan_use',
							zhuSkill: true,
							audio: 'ext:划水池/audio:6',
							ai: {
								combo: 'hs_jieying',
							},
							subSkill: {
								use: {
									usable: 1,
									enable: 'phaseUse',
									audio: 'hs_fuhan',
									filterCard: true,
									position: 'hes',
									selectCard: [1, Infinity],
									check(card) {
										return 6 - get.value(card);
									},
									discard: false,
									lose: false,
									selectTarget: 1,
									filterTarget(card, player, target) {
										return target.hasZhuSkill('hs_fuhan', player);
									},
									prompt: '复汉:将任意张牌交给主公',
									filter(event, player) {
										if (!player.hasMark('_hs_lianying')) return false;
										if (!player.countCards('hes')) return false;
										for (var i of player.hs_filterOtherPlayer()) {
											if (i.hasZhuSkill('hs_fuhan', player)) return true;
										}
										return false;
									},
									content() {
										'step 0';
										target.gain(cards, 'give', player);
										('step 1');
										target.hs_addMark('_hs_lianying');
										player.hs_addMark('_hs_lianying');
										target.draw();
										player.draw();
									},
									ai: {
										order: 1,
										result: {
											player: 1,
											target: 1,
										},
									},
								},
							},
						},
						//紫虚
						hs_xiujiu: {
							audio: 'ext:划水池/audio:3',
							trigger: {
								global: 'phaseJieshuEnd',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return player.countCards('h');
							},
							//锁定技,你防止无来源的伤害且判定效果反转.一名角色的结束阶段结束时,你须展示一张手牌,你展示弃牌堆中每名其他角色本回合失去过且与此牌点数或花色相同的牌,并依次当作随机的延时锦囊牌置入其判定区
							async content(event, trigger, player) {
								//QQQ
								const list = game.center();
								if (list[0]) {
									const num = {};
									for (var i of list) {
										num[i.number] = num[i.number] + 1 || 1;
										num[i.suit] = num[i.suit] + 1 || 1;
									}
									const result = await player.chooseCard('h').set('ai', (c) => (num[c.suit] || 0) + (num[i.number] || 0) * -get.attitude(player, trigger.player)).forResult();
									if (result.cards?.length) {
										player.showCards(result.cards);
										var cards = list.filter((q) => q.suit == result.cards[0].suit || q.number == result.cards[0].number);
										var delay = [];
										for (var i in lib.card) {
											var info = lib.card[i];
											if (info.mode && !info.mode.includes(lib.config.mode)) continue;
											if (!info.content) continue;
											if (info.type == 'delay') delay.add(i);
										}
										for (var i of cards) {
											trigger.player.addJudge({ name: delay.randomGet() }, [i]);
										}
									}
								}
							},
							mod: {
								judge(player, result) {
									result.bool = !result.bool;
								},
							},
							group: 'hs_xiujiu_damage',
							subSkill: {
								damage: {
									trigger: {
										player: 'damageBegin1',
									},
									audio: 'hs_xiujiu',
									filter(event, player) {
										return !event.source;
									},
									forced: true,
									content() {
										trigger.cancel();
										game.log(player, '防止了此伤害');
									},
								},
							},
						},
						hs_yuming: {
							trigger: {
								global: 'judgeEnd',
							},
							audio: 'ext:划水池/audio:2',
							filter(event, player) {
								return event.result && event.result.bool == false;
							},
							forced: true,
							content() {
								player.draw();
							},
							group: 'hs_yuming_change',
							subSkill: {
								change: {
									trigger: {
										global: ['phaseZhunbeiSkipped', 'phaseZhunbeiCancelled', 'phaseJudgeSkipped', 'phaseJudgeCancelled', 'phaseDrawSkipped', 'phaseDrawCancelled', 'phaseUseSkipped', 'phaseUseCancelled', 'phaseDiscardSkipped', 'phaseDiscardCancelled', 'phaseJieshuSkipped', 'phaseJieshuCancelled', 'damageAfter'],
									},
									audio: 'ext:划水池/audio:2',
									filter(event, player) {
										if (event.name != 'damage') return true;
										return !event.source;
									},
									forced: true,
									content() {
										'step 0';
										player.chooseTarget('预命:是否反转一名其他角色本局游戏一种判定牌的判定效果？', lib.filter.notMe).set('ai', function (target) {
											var att = (0.01 + Math.random()) * get.attitude(_status.event.player, target),
												list = target.storage.hs_yuming_judge,
												large = ['bingliang', 'lebu', 'caomu'],
												small = ['shandian', 'hongshui', 'fulei', 'huoshan'];
											if (!list) large0 = large;
											else
												var large1 = large.removeArray(list),
													large2 = small.filter(function (name) {
														return list.includes(name);
													}),
													large0 = large1.addArray(large2);
											if (att > 0) {
												if (large0.length) return 1 + att;
												else return -att;
											} else if (large0.length > 6) return -att;
											else return 1 + att;
										});
										('step 1');
										if (result.targets?.length) {
											event.target = result.targets[0];
											if (!event.target.storage.hs_yuming_judge) event.target.storage.hs_yuming_judge = [];
											var list = ['bingliang', 'lebu', 'shandian', 'caomu', 'hongshui', 'fulei', 'huoshan'],
												list2 = event.target.storage.hs_yuming_judge;
											list.removeArray(list2);
											var dialog = ui.create.dialog('预命', '未反转', [list, 'vcard'], '已反转', [list2, 'vcard']);
											player
												.chooseButton(dialog)
												.set('prompt', '预命:选择要反转效果的牌')
												.set('ai', function (button) {
													var att = get.attitude(_status.event.player, event.target),
														large = ['bingliang', 'lebu', 'caomu'],
														small = ['shandian', 'hongshui', 'fulei', 'huoshan'],
														large1 = large.removeArray(list2),
														large2 = small.removeArray(list),
														large0 = large1.addArray(large2);
													if (att > 0) {
														if (large0.includes(button.name)) return 1 + Math.random();
														else return -Math.random();
													} else if (large0.includes(button.name)) return -Math.random();
													else return 1 + Math.random();
												});
										}
										('step 2');
										if (result.links?.length) {
											if (event.target.storage.hs_yuming_judge.includes(result.links[0][2])) event.target.storage.hs_yuming_judge.remove(result.links[0][2]);
											else event.target.storage.hs_yuming_judge.add(result.links[0][2]);
											if (event.target.storage.hs_yuming_judge.length && !event.target.hasSkill('hs_yuming_judge')) event.target.addSkill('hs_yuming_judge');
											event.target.markSkill('hs_yuming_judge');
										}
									},
								},
								judge: {
									charlotte: true,
									marktext: '预命',
									intro: {
										name: '预命',
										name2: '预命',
										content(storage, player, skill) {
											var txt = '';
											if (player.storage.hs_yuming_judge.length) {
												txt = '已反转以下牌的判定效果<br>';
												for (var i of player.storage.hs_yuming_judge) txt += '【' + get.translation(i) + '】<br>';
											}
											return txt;
										},
									},
									mod: {
										judge(player, result) {
											if (player.storage.hs_yuming_judge.includes(_status.event.cardname)) result.bool = !result.bool;
										},
									},
								},
							},
						},
						//傅玄
						hs_binggang: {
							trigger: {
								global: ['gameDrawEnd', 'hs_updateRoundNumber'],
								player: 'showCharacterEnd',
							},
							forced: true,
							popup: false,
							audio: 'ext:划水池/audio:2',
							content() {
								var cardPile = ui.cardPile.childNodes,
									cards1 = [],
									cards2 = [],
									remo = [];
								for (var i = 0; i < cardPile.length; i++) {
									var card = cardPile[i];
									if (get.color(card) == 'red') cards1.add(card);
									if (cards1.length > 1) break;
								}
								for (var i = cardPile.length; i >= 0; i--) {
									var card = cardPile[i];
									if (get.color(card) == 'black') cards2.add(card);
									if (cards2.length > 1) break;
								}
								var cards = cards1.addArray(cards2);
								for (var i of player.getCards('s')) {
									if (i.storage.hs_binggang) {
										var kee = false;
										for (var j of cards) {
											if (i.storage.hs_binggang == j) {
												cards.remove(j);
												kee = true;
												break;
											}
										}
										if (!kee) remo.add(i);
									}
								}
								if (cards.length) {
									for (var i of cards) {
										var card = game.createCard(i.name, i.suit, i.number, get.nature(i));
										card.addGaintag('hs_binggang');
										card.storage.hs_binggang = i;
										if (player == game.me) card.classList.add('drawinghidden');
										if (get.is.singleHandcard() || sort > 0) player.node.handcards1.appendChild(card);
										else player.node.handcards2.appendChild(card);
										card.classList.add('glows');
									}
								}
								if (remo.length) player.hs_destroyCards(remo);
								if (player == game.me) ui.updatehl();
								player.update();
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (card.storage && card.storage.hs_binggang) return [10, 1];
									},
								},
							},
							group: ['hs_binggang_lose', 'hs_binggang_use'],
							subSkill: {
								lose: {
									trigger: {
										player: ['useCardBefore', 'respondBefore', 'loseBefore'],
									},
									forced: true,
									audio: 'hs_binggang',
									filter(event, player) {
										if (!event.cards) return false;
										for (var i of event.cards) {
											if (i.storage.hs_binggang) return true;
										}
										return false;
									},
									content() {
										'step 0';
										for (var card of trigger.cards) {
											if (card.storage.hs_binggang) {
												if (trigger.name != 'lose') {
													var cardtrue = ui.cardPile.removeChild(card.storage.hs_binggang);
													cardtrue.original = 'c';
													trigger.cards.add(cardtrue);
													trigger.cards.remove(card);
												}
												player.hs_destroyCards(card);
												if (trigger.name != 'respond') player.$throw(cardtrue, 1000);
											}
										}
										('step 1');
										game.updateRoundNumber();
									},
								},
								use: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									audio: 'ext:划水池/audio:2',
									filter(event, player) {
										return player.hs_getLose(true).filterInD().length;
									},
									content() {
										var red = [],
											bla = [],
											cards = player.hs_getLose(true).filterInD();
										for (var i of cards) {
											if (get.color(i) == 'red') red.add(i);
											else if (get.color(i) == 'black') bla.add(i);
										}
										if (bla.length) player.hs_pushPileCards(bla, false, true);
										if (red.length) player.hs_pushPileCards(red, true, true);
									},
								},
							},
						},
						hs_ee: {
							trigger: {
								global: 'useCard2',
							},
							audio: 'ext:划水池/audio:3',
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (!event.targets) return false;
								if (!event.targets.length) return false;
								if (
									!game.hasPlayer(function (current) {
										return !event.targets.includes(current);
									})
								)
									return false;
								if (event.card.name == 'sha') return player.hasSha(true);
								if (event.card.name == 'shan') return player.hasShan();
								return player.hasUsableCard(event.card.name);
							},
							content() {
								'step 0';
								var txt = '谔谔:是否打出一张' + get.translation(trigger.card.name);
								if (trigger.targets.includes(player)) txt += ',令一名不为此牌目标的角色代替你';
								else txt += ',并代替目标中的一名角色';
								var next = player.chooseToRespond(txt + '成为此牌目标？', { name: trigger.card.name });
								next.prompt2 = get.translation(trigger.player) + '对' + get.translation(trigger.targets) + '使用了' + get.translation(trigger.card);
								next.ai = function (card) {
									var player = _status.event.player,
										eff1 = get.effect(player, trigger.card, trigger.player, player, true);
									for (var i of trigger.targets) {
										if (trigger.targets.includes(i)) continue;
										var eff2 = get.effect(i, trigger.card, trigger.player, player, true);
										if (eff1 + 1 < eff2) return get.order(card);
									}
									return -1;
								};
								('step 1');
								if (result.bool) {
									var tar = game.filterPlayer(function (current) {
										return !trigger.targets.includes(current);
									}),
										txt;
									if (trigger.targets.length == 1 && tar.includes(player)) {
										event._result = {
											bool: true,
											targets: trigger.targets,
										};
									} else if (tar.length == 1 && trigger.targets.includes(player)) {
										event._result = {
											bool: true,
											targets: tar,
										};
									} else {
										if (trigger.targets.includes(player)) txt = '令一名不为此牌目标的角色代替你';
										else txt = '选择其中一个目标并代替其';
										txt += '成为此' + get.translation(trigger.card) + '目标';
										player
											.chooseTarget(true, txt, function (card, player, target) {
												var res = trigger.targets.includes(target);
												return trigger.targets.includes(player) ? !res : res;
											})
											.set('ai', function (target) {
												var eff1 = get.effect(player, trigger.card, trigger.player, player, true),
													eff2 = get.effect(target, trigger.card, trigger.player, player, true);
												return eff2 - eff1;
											});
									}
								} else event.finish();
								('step 2');
								if (result.bool) {
									var rem, pus;
									if (trigger.targets.includes(player)) {
										rem = player;
										pus = result.targets[0];
									} else {
										rem = result.targets[0];
										pus = player;
									}
									trigger.targets.remove(rem);
									trigger.targets.add(pus);
									game.log(pus, '代替', rem, '成为此', trigger.card, '的目标');
								}
							},
						},
						//大嘴
						hs_zhenshuo: {
							chargeSkill: true,
							chargeNum: 2,
							chargeLimit: 6,
							audio: 'ext:划水池/audio:5',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return !player.isMaxHandcard();
							},
							content() {
								'step 0';
								event.targets = player.hs_filterOtherPlayer();
								player.line(event.targets);
								('step 1');
								event.current = event.targets.shift();
								event.current
									.chooseCard(
										'震朔:是否交给' + get.translation(player) + '一张【闪】？',
										function (card, player) {
											return card.name == 'shan';
										},
										'h'
									)
									.set('ai', function (card) {
										var player = _status.event.player,
											target = _status.event.parent.player,
											att = get.attitude(player, target);
										if (att > 0) {
											if (target.countCards('hs') > 4) return -1;
											else return Math.random() / (target.countCards('h') + 1) - 0.18;
										} else {
											if (player.countCards('hs', 'shan') > 2) return 1;
											else return Math.random() / (player.countCards('hs', 'shan') + 1) - 0.2;
										}
									});
								('step 2');
								if (result.cards?.length) {
									event.current.give(result.cards, player);
								} else player.hs_addCharge();
								if (event.targets.length) event.goto(1);
							},
							group: 'hs_zhenshuo_use',
							subSkill: {
								use: {
									enable: 'phaseUse',
									audio: 'ext:划水池/audio:5',
									filter(event, player) {
										return player.countMark('charge') > 1;
									},
									prompt: '将任意张牌当做【万箭齐发】使用',
									viewAs: {
										name: 'wanjian',
										storage: { hs_zhenshuo: true },
									},
									position: 'hes',
									filterCard: true,
									selectCard: [1, Infinity],
									check(card) {
										var player = _status.event.player,
											num = 0,
											targets = game.filterPlayer(function (current) {
												return player.canUse('wanjian', current);
											}),
											num0 = targets.filter(function (current) {
												return !current.hasShan();
											}),
											cardsnum = player.countCards('hes', function (card0) {
												return get.value(card0) < 10;
											});
										for (var i = 0; i < targets.length; i++) {
											var eff = get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
											if (targets[i].hp == 1) eff *= 1.5;
											num += eff;
										}
										if (cardsnum < num0) {
											if (!player.needsToDiscard(-1)) {
												if (targets.length >= 7) {
													if (num < 1) return -1;
												} else if (targets.length >= 5) {
													if (num < 0.5) return -1;
												}
											}
											if (ui.selected.cards.length) return -1;
											return 8.5 - get.value(card);
										} else if (num0 > 0) return 10 - get.value(card);
										else return 7 - get.value(card);
									},
									onuse(result, player) {
										player.hs_loseCharge(2);
										player.addTempSkill('hs_zhenshuo_draw');
									},
									ai: {
										basic: {
											order: 9.5,
										},
									},
								},
								draw: {
									trigger: {
										player: 'useCardAfter',
									},
									forced: true,
									audio: 'ext:划水池/audio:2',
									charlotte: true,
									filter(event, player) {
										if (!event.card.storage.hs_zhenshuo) return false;
										var num0 = event.cards.length,
											num1 = game.countPlayer2(function (current) {
												return current.hasHistory('damage', function (evt) {
													return event.card == evt.card;
												});
											});
										if (num0 > num1) {
											event.zhenshuo_draw_num = num0 + num1;
											return true;
										}
										return false;
									},
									content() {
										player.draw(trigger.zhenshuo_draw_num);
									},
								},
							},
						},
						hs_aoni: {
							chargeSkill: true,
							chargeNum: 2,
							chargeLimit: 3,
							zhuSkill: true,
							forced: true,
							audio: 'ext:划水池/audio:3',
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								if (!player.hasZhuSkill('hs_aoni')) return false;
								return event.target.hp > player.hp;
							},
							content() {
								player.hs_addCharge();
							},
							group: 'hs_aoni_remove',
							subSkill: {
								remove: {
									forced: true,
									audio: 'hs_aoni',
									trigger: {
										player: 'useCardToPlayer',
									},
									filter(event, player) {
										if (!player.hasMark('charge')) return false;
										if (!player.hasZhuSkill('hs_aoni')) return false;
										return event.target.countCards('h') > player.countCards('h');
									},
									content() {
										player.hs_loseCharge();
										player.gainPlayerCard(trigger.target, 'h', true);
									},
								},
							},
						},
						//荀攸
						hs_qice: {
							intro: {
								name: '奇策',
								name2: '奇策',
								content(storage, player) {
									var list = ['Ａ', '２', '３', '４', '５', '６', '７', '８', '９', '10', 'Ｊ', 'Ｑ', 'Ｋ'],
										str = '已获得点数:<br>';
									for (var i = 0; i < list.length; i++) {
										if (i != 0) str += ' ';
										if (storage.includes(i + 1)) str += '<span class="firetext">' + list[i] + '</span>';
										else str += list[i];
									}
									if (player.storage.hs_qice_use) {
										str += '<br>可使用的锦囊:<br>';
										for (var i of player.storage.hs_qice_use) {
											str += get.translation(i) + '<br>';
										}
									}
									return str;
								},
							},
							marktext: '奇策',
							audio: 'ext:划水池/audio:5',
							trigger: {
								player: ['useCardAfter', 'respondAfter'],
							},
							filter(event, player) {
								if (!event.card.number) return false;
								if (!player.storage.hs_qice) player.storage.hs_qice = [];
								if (player.storage.hs_qice.includes(event.card.number)) return false;
								var cards = Array.from(ui.discardPile.childNodes);
								return cards.length;
							},
							check(event, player) {
								var cards = Array.from(ui.discardPile.childNodes),
									num = event.card.number,
									value = false,
									value0 = 0,
									value1 = 0;
								cards.reverse();
								if (cards.length > 12) cards = cards.slice(0, 12);
								for (var i of player.getCards('h')) {
									value0 += get.value(i, player) - 2;
								}
								for (var i of cards) {
									value1 += get.value(i, player) - 2;
									if (i.number == num) {
										value = value1;
										break;
									}
								}
								if (typeof value != 'number') return false;
								return value >= value0;
							},
							prompt(event, player) {
								var str = '你';
								if (event.name == 'useCard') str += '使用';
								else str += '打出';
								return str + '了' + get.translation(event.card) + ',' + get.prompt('hs_qice');
							},
							content() {
								'step 0';
								if (!player.storage.hs_qice) player.storage.hs_qice = [];
								var cards0 = player.getCards('h'),
									cards = Array.from(ui.discardPile.childNodes);
								if (cards0.length) player.discard(cards0);
								cards.reverse();
								if (cards.length > 12) cards = cards.slice(0, 12);
								event.cards = cards;
								event.gains = [];
								event.num = trigger.card.number;
								event.list = [];
								('step 1');
								if (event.cards.length) {
									event.card = event.cards.shift();
									var next = game.createEvent('showCards');
									next.player = player;
									var cardnum = event.num;
									if (typeof event.num == 'number') cardnum = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'][event.num - 1];
									next.str = '点数为' + cardnum + '时停止展示并获得展示牌';
									next.cards = [event.card];
									next.setContent(function () {
										'step 0';
										event.cardcl = event.cards[0].cloneNode(true);
										event.cardcl.style.setProperty('transform', 'translate(0px, 0px) scale(1)', '');
										var evt = event.parent;
										if (!evt.dialog) {
											evt.dialog = ui.create.dialog();
											evt.dialog.classList.add('noupdate');
											evt.dialog.classList.add('dialog');
											evt.dialog.id = 'hs_qice';
										}
										evt.dialog.show();
										if (!evt.dialogTitle) evt.dialogTitle = ui.create.div('.title', evt.dialog); //标题
										evt.dialogTitle.innerHTML = '奇策▾'; //技能名
										if (!evt.dialogResultIntroduce) evt.dialogResultIntroduce = ui.create.div('.resultIntroduce', evt.dialog);
										evt.dialogResultIntroduce.innerText = '展示牌';
										if (!evt.dialogCardArea) evt.dialogCardArea = ui.create.div('.cardArea', evt.dialog);
										if (!evt.introduce) evt.introduce = ui.create.div('.introduce', evt.dialog); //介绍
										evt.introduce.innerHTML = event.str;
										if (!evt.smallCharacter) evt.smallCharacter = ui.create.div('.smallCharacter', evt.dialog);
										evt.smallCharacter.style.backgroundImage = player.node.avatar.style.backgroundImage;
										('step 1');
										event.parent.dialogCardArea.appendChild(event.cardcl); //卡牌出现在框中
										('step 2');
										var evt = event.parent;
										if (!evt.dialogCardgets) evt.dialogCardgets = [];
										evt.dialogCardgets.push(event.cardcl);
										event.cardcl.style.zIndex = 100;
										for (var i = 0; i < evt.dialogCardgets.length; i++) {
											let st = i * 108 - 540;
											let xm = i * Math.max(0, 108 - 324 / evt.dialogCardgets.length);
											let am = parseFloat(st - xm);
											evt.dialogCardgets[i].style.zIndex = i;
											evt.dialogCardgets[i].style.transform = 'translateX(' + am + 'px)';
										}
									});
									event.gains.add(event.card);
									event.list.add(event.card.number);
								} else {
									if (event.dialog) event.dialog.remove();
									game.log(player, '展示了', event.gains);
									event.finish();
								}
								('step 2');
								if (event.card.number == event.num) {
									if (event.dialog) event.dialog.remove();
									game.log(player, '展示了', event.gains);
									player.gain(event.gains, 'gain2');
									player.markAuto('hs_qice', event.list);
									if (!player.storage.hs_qice_count) player.storage.hs_qice_count = 0;
									player.storage.hs_qice_count++;
								} else event.goto(1);
							},
							group: 'hs_qice_use',
							subSkill: {
								use: {
									trigger: {
										global: 'phaseJieshuBegin',
									},
									audio: 'ext:划水池/audio:2',
									filter(event, player) {
										if (!player.storage.hs_qice_count) return false;
										var cards = Array.from(ui.discardPile.childNodes);
										if (!cards.length) return false;
										return player.storage.hs_qice_count > 0;
									},
									content() {
										'step 0';
										player.storage.hs_qice_count--;
										if (!player.storage.hs_qice_used) player.storage.hs_qice_used = [];
										var list0 = [],
											list = [];
										if (lib.config.extension_划水池_printCardRange) {
											for (var i in lib.card) {
												if (get.translation(`${i}_info`) == `${i}_info`) continue;
												if (!lib.card[i].content) continue;
												if (lib.card[i].mode && !lib.card[i].mode.includes(get.mode())) continue;
												try {
													if (!lib.filter.cardEnabled({ name: i }, player)) continue;
												} catch (e) {
													continue;
												}
												if (player.storage.hs_qice_used.includes(i)) continue;
												var type = get.type2(i);
												if (type == 'trick') list0.add(i);
											}
										} else {
											for (var i of lib.inpile) {
												if (!lib.filter.cardEnabled({ name: i }, player)) continue;
												if (player.storage.hs_qice_used.includes(i)) continue;
												var type = get.type2(i);
												if (type == 'trick') list0.add(i);
											}
										}
										event.list = list0;
										for (var i of list0) list.add(['trick', '', i]);
										var dialog = ui.create.dialog('奇策:选择使用的锦囊牌(剩余' + player.storage.hs_qice_count + '次)', [list, 'vcard']);
										player.chooseButton(1, dialog).set('ai', function (button) {
											return player.getUseValue({ name: button.link[2] });
										});
										('step 1');
										if (result.links?.length) {
											var card = Array.from(ui.discardPile.childNodes)[0],
												name = result.links[0][2];
											player.chooseUseTarget({ name: name }, [card]);
											if (!get.zhinangs().includes(name)) {
												event.list.remove(name);
												player.storage.hs_qice_used.add(name);
											}
											player.storage.hs_qice_use = event.list;
										}
										('step 2');
										if (player.storage.hs_qice_count > 0) event.goto(0);
									},
								},
							},
						},
						//马良
						hs_zishu: {
							intro: {
								name: '自书 - 专属牌堆',
								content(storage, player, skill) {
									if (!storage) return '';
									return '专属牌堆剩余' + storage.length + '张牌';
								},
							},
							marktext: '自书',
							trigger: {
								global: 'gameStart',
							},
							audio: 'ext:划水池/audio:2',
							forced: true,
							filter(event, player, name) {
								return !player.storage.hs_zishu;
							},
							content() {
								player.storage.hs_zishu = lib.skill.hs_zishu.originList.slice(0).randomSort();
								game.log(player, '创建了', '#y专属牌堆');
								player.markSkill('hs_zishu');
							},
							group: ['hs_zishu_draw', 'hs_zishu_restore'],
							subSkill: {
								draw: {
									trigger: {
										player: 'drawBegin',
									},
									audio: 'ext:划水池/audio:2',
									forced: true,
									filter(event, player) {
										if (!player.storage.hs_zishu) return false;
										return player.storage.hs_zishu.length;
									},
									content() {
										trigger.num++;
										trigger.setContent(function () {
											if (typeof event.minnum == 'number' && num < event.minnum) {
												num = event.minnum;
											}
											var cards0 = [],
												cards = [];
											if (player.storage.hs_zishu) {
												var num0 = num;
												for (var i = 0; i < num0; i++) {
													if (player.storage.hs_zishu.length) {
														var list = player.storage.hs_zishu.shift(),
															card = game.hs_createCard(list);
														card.storage.hs_zishu = true;
														cards0.add(card);
														num--;
													} else break;
												}
											}
											if (cards0.length) {
												if (event.animate != false) {
													if (event.visible) {
														var next0 = player.gain(cards0, 'gain2');
														game.log(player, '从', '#y专属牌堆', '摸了' + get.cnNumber(cards0.length) + '张牌(', cards0, ')');
													} else {
														var next0 = player.gain(cards0, 'draw');
														game.log(player, '从', '#y专属牌堆', '摸了' + get.cnNumber(cards0.length) + '张牌');
													}
												} else {
													var next0 = player.gain(cards0);
													if (event.$draw) {
														player.$draw(cards0.length);
													}
												}
												if (event.gaintag) next0.gaintag.addArray(event.gaintag);
												player.markSkill('hs_zishu');
											}
											if (num > 0) {
												if (event.drawDeck) {
													if (event.drawDeck > num) {
														event.drawDeck = num;
													}
													num -= event.drawDeck;
												}
												if (event.log != false) {
													if (num > 0) {
														if (event.bottom) game.log(player, '从牌堆底摸了' + get.cnNumber(num) + '张牌');
														else game.log(player, '摸了' + get.cnNumber(num) + '张牌');
													}
													if (event.drawDeck) {
														game.log(player, '从牌库中获得了' + get.cnNumber(event.drawDeck) + '张牌');
													}
												}
												var cards;
												if (num > 0) {
													if (event.bottom) cards = get.bottomCards(num);
													else if (player.getTopCards) cards = player.getTopCards(num);
													else cards = get.cards(num);
												} else {
													cards = [];
												}
												if (event.drawDeck) {
													cards = cards.concat(player.getDeckCards(event.drawDeck));
												}
												if (event.animate != false) {
													if (event.visible) {
														var next = player.gain(cards, 'gain2');
														if (event.bottom) game.log(player, '从牌堆底摸了' + get.cnNumber(num) + '张牌(', cards, ')');
														else game.log(player, '摸了' + get.cnNumber(num) + '张牌(', cards, ')');
													} else {
														var next = player.gain(cards, 'draw');
													}
												} else {
													var next = player.gain(cards);
													if (event.$draw) {
														player.$draw(cards.length);
													}
												}
												if (event.gaintag) next.gaintag.addArray(event.gaintag);
											}
											event.result = cards.addArray(cards0);
										});
									},
								},
								restore: {
									trigger: {
										player: 'phaseEnd',
									},
									audio: 'hs_zishu',
									forced: true,
									filter(event, player, name) {
										if (!player.storage.hs_zishu) return false;
										return !player.storage.hs_zishu.length;
									},
									content() {
										'step 0';
										var cards = player.getCards('h');
										if (cards.length) player.discard(cards);
										event.cards = [];
										event.players = game.filterPlayer();
										('step 1');
										if (event.players.length) {
											var current = event.players.shift();
											if (current.isIn()) {
												var cards = current.getCards('hesxj', function (card) {
													return card.storage && card.storage.hs_zishu;
												});
												if (cards.length) {
													event.cards.addArray(cards);
												}
											}
											event.redo();
										}
										('step 2');
										player.hs_destroyCards(event.cards, true, true);
										('step 3');
										player.storage.hs_zishu = lib.skill.hs_zishu.originList.slice(0).randomSort();
										game.cardsGotoPile(event.cards, 'triggeronly', 'washCard');
										player.markSkill('hs_zishu');
										('step 4');
										var num = event.cards.length;
										if (num > 0) player.draw(num);
									},
								},
							},
							originList: [
								['spade', 1, 'taigongyinfu'],
								['spade', 2, 'rewrite_bagua'],
								['spade', 3, 'shuiyanqijunx'],
								['spade', 4, 'guohe'],
								['spade', 5, 'sha', 'thunder'],
								['spade', 6, 'lebu'],
								['spade', 7, 'sha', 'ice'],
								['spade', 8, 'sha', 'ice'],
								['spade', 9, 'jiu'],
								['spade', 10, 'bingliang'],
								['spade', 11, 'wuxie'],
								['spade', 12, 'chenghuodajie'],
								['spade', 13, 'dawan'],
								['club', 1, 'rewrite_zhuge'],
								['club', 2, 'rewrite_lanyinjia'],
								['club', 3, 'jiu'],
								['club', 4, 'caomu'],
								['club', 5, 'dilu'],
								['club', 6, 'hs_shashan'],
								['club', 7, 'nanman'],
								['club', 8, 'sha', 'thunder'],
								['club', 9, 'sha', 'stab'],
								['club', 10, 'sha', 'kami'],
								['club', 11, 'hs_shashan'],
								['club', 12, 'tiesuo'],
								['club', 13, 'wuxie'],
								['heart', 1, 'wanjian'],
								['heart', 2, 'hs_shashan'],
								['heart', 3, 'chuqibuyi'],
								['heart', 4, 'suijiyingbian'],
								['heart', 5, 'tao'],
								['heart', 6, 'tao'],
								['heart', 7, 'dongzhuxianji'],
								['heart', 8, 'shan'],
								['heart', 9, 'kaihua'],
								['heart', 10, 'sha', 'fire'],
								['heart', 11, 'sha'],
								['heart', 12, 'shandian'],
								['heart', 13, 'hs_shashan'],
								['diamond', 1, 'wuxinghelingshan'],
								['diamond', 2, 'tao'],
								['diamond', 3, 'shunshou'],
								['diamond', 4, 'sha', 'fire'],
								['diamond', 5, 'yajiaoqiang'],
								['diamond', 6, 'hs_shashan'],
								['diamond', 7, 'shan'],
								['diamond', 8, 'shan'],
								['diamond', 9, 'ly_piliche'],
								['diamond', 10, 'tuixinzhifu'],
								['diamond', 11, 'hs_shashan'],
								['diamond', 12, 'tao'],
								['diamond', 13, 'sha', 'stab'],
							],
						},
						hs_xiemu: {
							trigger: {
								player: 'loseAfter',
							},
							audio: 'ext:划水池/audio:3',
							filter(event, player, name) {
								if (event.parent.name == 'useCard') return false;
								if (event.getParent(2).name == 'hs_xiemu') return false;
								if (_status.currentPhase == player) return false;
								for (var i of event.cards) {
									if (i.original == 'h') return true;
								}
								return false;
							},
							prompt(event) {
								return '是否发动『协穆』摸2张牌,将一张牌交给' + get.translation(_status.currentPhase) + '？';
							},
							content() {
								'step 0';
								player.draw(2);
								player.addMark('hs_xiemu', 1, false);
								('step 1');
								if (_status.currentPhase && _status.currentPhase != player && player.countCards('he')) {
									player.chooseCard(true, 'he', '交给' + get.translation(_status.currentPhase) + '一张牌').set('ai', function (card) {
										return 8 - get.value(card);
									});
								} else event.finish();
								('step 2');
								if (result.bool) _status.currentPhase.gain(result.cards, player, 'giveAuto');
							},
							group: 'hs_xiemu_begin',
							subSkill: {
								begin: {
									trigger: {
										player: 'phaseZhunbei',
									},
									audio: 'ext:划水池/audio:3',
									filter(event, player) {
										return player.hasMark('hs_xiemu');
									},
									prompt(event) {
										return '是否发动『协穆』摸' + event.player.countMark('hs_xiemu') + '张牌,弃置等量牌？';
									},
									content() {
										var num = player.clearMark('hs_xiemu');
										if (num > 0) player.draw(num);
										player.chooseToDiscard('he', num, true);
									},
								},
							},
						},
						//张天师
						hs_shoulu: {
							intro: {
								name: '问计',
								name2: '问计',
								content: '本回合已对$发动『问计』',
							},
							marktext: '问计',
							enable: 'phaseUse',
							audio: 'ext:划水池/audio:4',
							selectTarget: 1,
							filterTarget(card, player, target) {
								return !player.getStorage('hs_shoulu').includes(target);
							},
							filterCard: true,
							position: 'hes',
							selectCard: 1,
							check(card) {
								return 3.5 + _status.event.player.countCards('h') - get.value(card);
							},
							preservecancel: true,
							content() {
								'step 0';
								player.markAuto('hs_shoulu', [target]);
								var list = get.gainableCharacters(function (info) {
									return info[1] == target.group;
								});
								var players = game.players.concat(game.dead);
								for (var i = 0; i < players.length; i++) {
									list.remove(players[i].name);
									list.remove(players[i].name1);
									list.remove(players[i].name2);
								}
								if (list.length) {
									var skills = [],
										useskills = [];
									for (var name of list) {
										skills.addArray(lib.character[name][3]);
									}
									game.expandSkills(skills);
									for (var i of skills) {
										if (i == 'hs_shoulu') continue;
										var info = get.info(i);
										if (!info) continue;
										if (info.chooseButton) continue;
										if (!info.content) continue;
										if (info.enable == 'phaseUse') useskills.add(i);
									}
									if (useskills.length) {
										var lists = useskills;
										if (useskills.length > 3) lists = useskills.randomGets(3);
										var list = [];
										for (var i of lists) {
											list.push([i, '<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">『' + get.translation(i) + '』</div><div>' + game.getSkillInfo(i) + '</div></div>']);
										}
										player.chooseButton(true, ['请选择演示的技能', [list, 'textbutton']]).set('ai', function (button) {
											var num = 10,
												info = lib.skill[button.link];
											if (info) {
												if (info.filterCard || info.selectCard) num -= 5;
												var eff = 0;
												for (var j of game.filterPlayer()) {
													var t = get.effect_use(target, button.link, player, player);
													if (eff < t) eff = t;
												}
												num += eff;
											}
											return num;
										});
									} else event.goto(3);
								} else event.goto(3);
								('step 1');
								if (result.bool && result.links) {
									var skill = result.links[0],
										info = get.info(skill),
										cardinfo = { ...lib.skill.hs_shoulu.createFulu };
									cardinfo.hs_shoulu = {
										skill: skill,
										player: player,
										group: target.group,
									};
									if (info.ai) {
										cardinfo.ai = info.ai;
										if (cardinfo.ai.result) {
											if (cardinfo.ai.result.player) delete cardinfo.ai.result.player;
											if (info.ai.result.player) cardinfo.ai.result.target = info.ai.result.player;
										}
										if (!cardinfo.ai.basic) cardinfo.ai.basic = {};
										if (!cardinfo.ai.tag) cardinfo.ai.tag = {};
										if (info.ai.order && !cardinfo.ai.basic.order) cardinfo.ai.basic.order = info.ai.order;
										if (info.ai.useful && !cardinfo.ai.basic.useful) cardinfo.ai.basic.useful = info.ai.useful;
										if (info.ai.value && !cardinfo.ai.basic.value) cardinfo.ai.basic.value = info.ai.value;
										if (info.ai.damage && !cardinfo.ai.tag.damage) cardinfo.ai.tag.damage = info.ai.damage;
										if (info.ai.loseCard && !cardinfo.ai.tag.loseCard) cardinfo.ai.tag.loseCard = info.ai.loseCard;
										if (info.ai.discard && !cardinfo.ai.tag.discard) cardinfo.ai.tag.discard = info.ai.discard;
										if (info.ai.rejudge && !cardinfo.ai.tag.rejudge) cardinfo.ai.tag.rejudge = info.ai.rejudge;
										if (info.ai.natureDamage && !cardinfo.ai.tag.natureDamage) cardinfo.ai.tag.natureDamage = info.ai.natureDamage;
										if (info.ai.thunderDamage && !cardinfo.ai.tag.thunderDamage) cardinfo.ai.tag.thunderDamage = info.ai.thunderDamage;
										if (info.ai.gain && !cardinfo.ai.tag.gain) cardinfo.ai.tag.gain = info.ai.gain;
										if (info.ai.fireDamage && !cardinfo.ai.tag.fireDamage) cardinfo.ai.tag.fireDamage = info.ai.fireDamage;
									}
									if (!cardinfo.ai.basic.order) cardinfo.ai.basic.order = 7;
									if (!cardinfo.ai.basic.useful) cardinfo.ai.basic.useful = 4;
									if (!cardinfo.ai.basic.value) cardinfo.ai.basic.value = 9;
									var cardId = 'hs_shoulu_' + target.playerid + '_' + skill + '_' + cards[0].name + String(Math.floor(Math.random() * 10));
									lib.card[cardId] = cardinfo;
									lib.translate[cardId] = '符箓-' + get.translation(skill);
									lib.translate[cardId + '_info'] = game.getSkillInfo(skill);
									event.cardId = cardId;
									var next = game.createEvent('hs_shoulu_showUse');
									next.target = player;
									next.card = { name: cardId };
									next.prompt = '请演示<span class="thundertext">『' + get.translation(skill) + '』</span>的使用';
									next.setContent(cardinfo.content);
								} else event.goto(3);
								('step 2');
								if (result.bool) {
									var cardt = game.createCard(event.cardId, cards[0].suit, cards[0].number);
									target.gain(cardt, 'gain2');
									event.finish();
								} else {
									delete lib.card[event.cardId];
									delete lib.translate[event.cardId];
									delete lib.translate[event.cardId + '_info'];
								}
								('step 3');
								player.draw();
							},
							createFulu: {
								image: 'ext:划水池/image/card/fulu.jpg',
								fullskin: true,
								type: 'trick',
								enable: true,
								selectTarget: -1,
								toself: true,
								derivation: 'hs_zhangling',
								filterTarget(card, player, target) {
									return target == player;
								},
								modTarget: true,
								content() {
									'step 0';
									var audioSki = ['hs_shoulu', 'hs_fuqu', 'hs_fuqu_use'].randomGet();
									game.trySkillAudio(audioSki, target, true);
									var info = lib.card[event.card.name].hs_shoulu;
									if (info) {
										event.hs_shoulu_skill = lib.card[event.card.name].hs_shoulu.skill;
										if (event.hs_shoulu_skill) {
											var info = get.info(event.hs_shoulu_skill);
											var next = game.createEvent('hs_shoulu_cardUse');
											next.player = event.target;
											next.filterTarget = info.filterTarget;
											next.selectTarget = info.selectTarget;
											next.filterCard = info.filterCard;
											next.selectCard = info.selectCard;
											next.position = info.position;
											if (info.check) {
												next.ai1 = function (card, player, target) {
													var num = info.check.apply(this, arguments);
													if (num <= 0) num = 0.0001;
													return num;
												};
											} else {
												next.ai1 = function (card, player, target) {
													var num = get.order.apply(this, arguments);
													if (num <= 0) num = 0.0001;
													return num;
												};
											}
											next.ai2 = function (target) {
												var num = 0;
												try {
													num = get.effect_use(target, event.hs_shoulu_skill, _status.event.player, arguments);
												} catch (e) { }
												if (num <= 0) num = 0.0001;
												return num;
											};
											if (event.prompt) next.prompt = event.prompt;
											else next.prompt = '请选择<span class="thundertext">『' + get.translation(event.card.name) + '』.</span>的卡牌/目标';
											next.prompt2 = get.translation(event.card.name + '_info');
											if (typeof next.filterCard == 'object') {
												next.filterCard = get.filter(next.filterCard);
											}
											if (typeof next.filterTarget == 'object') {
												next.filterTarget = get.filter(next.filterTarget, 2);
											}
											if (next.filterCard || next.selectCard) {
												if (next.filterCard == undefined || next.filterCard === true) {
													next.filterCard = lib.filter.all;
												}
												if (next.selectCard == undefined) {
													next.selectCard = 1;
												}
											}
											if (next.filterTarget || next.selectTarget) {
												if (next.filterTarget == undefined || next.filterTarget === true) {
													next.filterTarget = lib.filter.all;
												}
												if (next.selectTarget == undefined) {
													next.selectTarget = 1;
												}
											}
											if (next.filterCard || next.selectCard) {
												if (next.filterTarget || next.selectTarget) next.setContent('chooseCardTarget');
												else {
													next.ai = next.ai1;
													next.setContent('chooseCard');
												}
											} else if (next.filterTarget || next.selectTarget) {
												next.ai = next.ai2;
												next.setContent('chooseTarget');
											} else next.setContent('chooseBool');
										}
									} else event._result = { bool: false };
									('step 1');
									if (result.bool) {
										try {
											target.useSkill(event.hs_shoulu_skill, result.cards, result.targets, false);
											event.result = { bool: true };
										} catch (e) {
											event._result = { bool: false };
										}
									} else event._result = { bool: false };
									('step 2');
									var res = result;
									event.result = res;
								},
								contentAfter() {
									var info = lib.card[event.card.name].hs_shoulu,
										card0 = { ...lib.skill.hs_shoulu.createFuhui };
									if (info && event.cards.length == 1) {
										card0.hs_shoulu = info;
										card0.hs_shoulu.fuhui = true;
										var cardId = 'fuluhui_' + event.card.name;
										lib.card[cardId] = card0;
										lib.translate[cardId] = '灰烬';
										lib.translate[cardId + '_info'] = '〖' + get.translation(info.skill) + '〗使用后的灰烬';
										event.cards[0].init([event.card.suit, event.card.number, cardId]);
									}
								},
								ai: {
									basic: {},
									tag: {},
								},
							},
							createFuhui: {
								image: 'ext:划水池/image/card/fuhui.jpg',
								fullskin: true,
								type: 'trick',
								notarget: true,
								nodelay: true,
								derivation: 'hs_zhangling',
								content() { },
								ai: {
									order: 0.1,
									basic: {
										useful: 0.1,
										value: 0.1,
									},
									tag: {},
								},
							},
							ai: {
								order: 10,
								result: {
									player: 2,
									target: 1.5,
								},
							},
						},
						hs_fuqu: {
							marktext: '符水',
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							trigger: {
								global: 'useCardAfter',
							},
							audio: 'ext:划水池/audio:4',
							forced: true,
							filter(event, player) {
								if (!event.cards.filterInD().length) return false;
								if (event.cards.length != 1) return false;
								var info = lib.card[event.card.name].hs_shoulu;
								if (!info) return false;
								if (info.player != player) return false;
								return info.fuhui;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								var info = lib.card[trigger.card.name].hs_shoulu,
									card0 = { ...lib.skill.hs_fuqu.createFushui };
								card0.hs_fuqu = info;
								card0.hs_fuqu.fuhui = false;
								card0.hs_fuqu.fushui = true;
								var cardId = 'fulushui_' + trigger.card.name;
								lib.card[cardId] = card0;
								lib.translate[cardId] = '符水-' + get.translation(info.group);
								lib.translate[cardId + '_info'] = '〖符箓-' + get.translation(info.skill) + '〗的灰烬制成的符水';
								trigger.cards[0].init([trigger.card.suit, trigger.card.number, cardId]);
								('step 2');
								player.addToExpansion(trigger.cards, 'gain2').gaintag.add('hs_fuqu');
							},
							ai: {
								combo: 'hs_shoulu',
							},
							group: 'hs_fuqu_use',
							subSkill: {
								use: {
									audio: 'ext:划水池/audio:4',
									hiddenCard(player, name) {
										if (get.type(name) != 'basic') return false;
										return name != 'shan';
									},
									enable: 'chooseToUse',
									filter(event, player) {
										var cards = player.getExpansions('hs_fuqu');
										if (event.type == 'wuxie' || event.type == 'respondShan') return false;
										if (!cards.length) return false;
										if (event.type == 'dying') {
											if (!event.filterCard({ name: 'tao' }, player, event) && !event.filterCard({ name: 'jiu' }, player, event)) return false;
											var target = event.dying;
											if (target == player || target.group == 'unknown' || target.group == 'ye') return true;
											for (var i of cards) {
												try {
													var group = lib.card[i.name].hs_fuqu.group;
												} catch (e) {
													game.log(i);
													game.log(i.name);
													game.print(lib.card[i.name]);
													var group = lib.card[i.name].hs_fuqu.group;
													game.log(group);
													game.pause();
												}
												if (group == 'ye' || target.group == group) return true;
											}
											return false;
										}
										return true;
									},
									chooseButton: {
										select: 2,
										dialog(event, player) {
											var dialog = ui.create.dialog('符祛', 'hidden'),
												dic = {},
												list = [];
											for (var i of player.getExpansions('hs_fuqu')) {
												var group = lib.card[i.name].hs_fuqu.group;
												if (!dic[group]) dic[group] = [];
												dic[group].push(i);
											}
											for (var i in dic) list.addArray(dic[i]);
											dialog.add([list, 'card']);
											var pile = lib.inpile;
											var list2 = [];
											for (var i = 0; i < pile.length; i++) {
												var name = pile[i];
												if (name == 'shan' || get.type(name) != 'basic') continue;
												if (name == 'sha') {
													list2.push(['基本', '', 'sha']);
													list2.push(['基本', '', 'sha', 'fire']);
													list2.push(['基本', '', 'sha', 'thunder']);
												} else list2.push(['基本', '', pile[i]]);
											}
											dialog.add([list2, 'vcard']);
											return dialog;
										},
										check(button) {
											if (ui.selected.buttons.length) {
												var evt = _status.event.getParent('chooseToUse');
												var name = button.link[2];
												var player = _status.event.player;
												if (evt.type == 'dying') {
													if (evt.dying != player && get.effect(evt.dying, { name: name }, player, player) <= 0) return 0;
													if (name == 'jiu') return 2.1;
													return 2;
												}
												if (name != 'tao') return 0.1;
											}
											return 1 + Math.random();
										},
										filter(button, player) {
											var evt = _status.event.getParent('chooseToUse');
											if (!ui.selected.buttons.length) {
												if (get.itemtype(button.link) != 'card') return false;
												if (evt.type == 'dying') {
													if (evt.dying == player || evt.dying.group == 'unknown' || evt.dying.group == 'ye') return true;
													var group = lib.card[button.link.name].hs_fuqu.group;
													return evt.dying.group == group || group == 'ye';
												}
												return true;
											} else {
												if (get.itemtype(ui.selected.buttons[0].link) != 'card') return false;
												if (get.itemtype(button.link) == 'card') return false;
												var name = button.link[2];
												var card = { name: name };
												if (button.link[3]) card.nature = button.link[3];
												if (evt.type == 'dying') {
													return evt.filterCard(card, player, evt);
												}
												if (!lib.filter.filterCard(card, player, evt)) return false;
												else if (evt.filterCard && !evt.filterCard(card, player, evt)) return false;
												var info = get.info(card);
												var group = lib.card[ui.selected.buttons[0].link.name].hs_fuqu.group;
												if (info.changeTarget) {
													var list = game.filterPlayer(function (current) {
														return player.canUse(card, current);
													});
													for (var i = 0; i < list.length; i++) {
														var giveup = false;
														var targets = [list[i]];
														info.changeTarget(player, targets);
														for (var j = 0; j < targets.length; j++) {
															if (group != 'ye' && targets[j] != player && targets[j].group != 'unknown' && targets[j].group != 'ye' && targets[j].group != group) {
																giveup = true;
																break;
															}
														}
														if (giveup) continue;
														if (giveup == false) return true;
													}
													return false;
												} else {
													return game.hasPlayer(function (current) {
														return evt.filterTarget(card, player, current) && (group == 'ye' || current == player || current.group == 'unknown' || current.group == 'ye' || current.group == group);
													});
												}
											}
										},
										backup(links, player) {
											var name = links[1][2];
											var nature = links[1][3] || null;
											var card0 = links[0];
											var group = lib.card[card0.name].hs_fuqu.group;
											return {
												card: [card0],
												group: group,
												filterCard(card) {
													return card0 == card;
												},
												position: 'x',
												selectCard: -1,
												check() {
													return 1;
												},
												popname: true,
												audio: 'hs_fuqu_use',
												viewAs: {
													name: name,
													nature: nature,
												},
												filterTarget(card, player, target) {
													var evt = _status.event;
													var info = get.info(card);
													if (!(info.singleCard && ui.selected.targets.length) && group != 'ye' && target.group != 'unknown' && target.group != 'ye' && target.group != group && target != player) return false;
													if (info.changeTarget) {
														var targets = [target];
														info.changeTarget(player, targets);
														for (var i = 0; i < targets.length; i++) {
															if (group != 'ye' && targets[i].group != 'unknown' && targets[i].group != 'ye' && targets[i].group != group && target[i] != player) return false;
														}
													}
													if (evt._backup && evt._backup.filterTarget) return evt._backup.filterTarget(card, player, target);
													return lib.filter.filterTarget(card, player, target);
												},
												onuse(result, player) {
													player.draw();
												},
											};
										},
									},
									ai: {
										order() {
											return 5 * Math.random();
										},
										result: {
											player: 1,
										},
									},
								},
							},
							createFushui: {
								image: 'ext:划水池/image/card/fushui.jpg',
								fullskin: true,
								type: 'trick',
								notarget: true,
								nodelay: true,
								derivation: 'hs_zhangling',
								content() { },
								ai: {
									order: 0.1,
									basic: {
										useful: 0.1,
										value: 0.1,
									},
									tag: {},
								},
							},
						},
						//司马昭
						hs_zhaojie: {
							intro: {
								name: '昭揭',
								name2: '昭揭',
								markcount(storage, player) {
									return player.countCards('h', function (card) {
										if (card && Array.isArray(card.gaintag)) {
											return card.gaintag.some((tag) => tag == 'visible_hs_zhaojie');
										} else return false;
									});
								},
								mark(dialog, content, player) {
									var str = '',
										cards = player.getCards('h', function (card) {
											if (card && Array.isArray(card.gaintag)) {
												return card.gaintag.some((tag) => tag == 'visible_hs_zhaojie');
											} else return false;
										}),
										suits = [
											['spade', '♠️️'],
											['heart', '♥️️'],
											['club', '♣️️'],
											['diamond', '♦️️'],
										];
									if (cards.length) dialog.addAuto(cards);
									else str += '无展示牌<br><br>';
									str += '弃牌堆:<br>';
									for (var j of suits) {
										var suit = j[0],
											count = 0;
										for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
											if (ui.discardPile.childNodes[i].suit == suit) count++;
										}
										str += j[1] + ':' + count + '张<br>';
									}
									return str;
								},
							},
							marktext: '揭',
							mark: true,
							forced: true,
							audio: 'ext:划水池/audio:4',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (!event.cards) return false;
								if (!event.cards.length) return false;
								if (typeof event.card.number != 'number') return false;
								return player.hasHistory('lose', function (evt) {
									if (evt.parent != event) return false;
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].includes('visible_hs_zhaojie')) return true;
									}
									return false;
								});
							},
							content() {
								'step 0';
								var suit = trigger.card.suit,
									num = trigger.card.number,
									count = 0;
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (ui.discardPile.childNodes[i].suit == suit) count++;
								}
								if (num <= count && trigger.targets.length && (get.type(trigger.card) == 'basic' || get.type(trigger.card) == 'trick')) {
									trigger.effectCount++;
									game.log(trigger.card, '额外结算一次');
								}
								if (
									num >= count &&
									game.hasPlayer((current) => {
										return current.countGainableCards(player, 'he') > 0 && current != player;
									})
								) {
									player
										.chooseTarget(
											'昭揭:获得一名角色的一张牌',
											true,
											1,
											function (card, player, target) {
												return target.countCards('he') > 0 && player != target;
											},
											function (target) {
												var player = _status.event.player;
												return get.effect(target, { name: 'shunshou_copy2' }, player, player);
											}
										)
										.setHiddenSkill('hs_zhaojie');
								}
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'fire');
									player.gainPlayerCard(target, true, 'he');
								}
							},
							group: ['hs_zhaojie_lose', 'hs_zhaojie_gain'],
							subSkill: {
								lose: {
									trigger: {
										player: 'loseAfter',
									},
									forced: true,
									popup: false,
									content() {
										for (var i of trigger.cards) i.storage.hs_zhaojie = true;
									},
								},
								gain: {
									trigger: {
										player: 'gainAfter',
									},
									forced: true,
									audio: 'ext:划水池/audio:4',
									filter(event, player) {
										for (var i of event.cards) {
											if (i.storage.hs_zhaojie) return true;
										}
										return false;
									},
									content() {
										var cards = trigger.cards.filter(function (card) {
											return card.storage.hs_zhaojie;
										});
										player.addShownCards(cards, 'visible_hs_zhaojie');
									},
								},
							},
						},
						hs_tuishi: {
							intro: {
								name: '推弑',
								name2: '推弑',
								markcount(storage, player) {
									var num = 0;
									for (var i in storage) num += Math.trunc(storage[i] / 2);
									return num;
								},
								content(storage, player) {
									var text = '';
									for (var i of player.hs_filterOtherPlayer()) {
										var num = storage[i.playerid];
										if (num > 0) text += '获得了' + get.translation(i) + num + '张牌<br>';
									}
									return text;
								},
							},
							marktext: '弑',
							audio: 'ext:划水池/audio:3',
							trigger: {
								player: 'gainEnd',
								global: 'loseAsyncEnd',
							},
							forced: true,
							filter(event, player, name) {
								var cards = event.getg(player);
								if (!cards.length) return false;
								return game.hasPlayer((current) => {
									if (current == player) return false;
									return event.getl(current).cards2.filter(function (card) {
										return cards.includes(card);
									}).length;
								});
							},
							content() {
								'step 0';
								event.cards = trigger.getg(player);
								event.targets = player.hs_filterOtherPlayer();
								('step 1');
								if (event.targets.length) {
									event.target = event.targets.shift();
									var cards2 = trigger.getl(event.target).cards2.filter(function (card) {
										return event.cards.includes(card);
									});
									if (event.target.isIn() && cards2.length) {
										player.chooseButton(1, ['推弑:是否交还给' + get.translation(event.target) + '一张牌？', cards2]).set('ai', function (button) {
											var player = _status.event.player,
												value = get.value(button.link, player),
												att = get.attitude(player, event.target);
											if (att > 0 && event.target.storage.hs_tuishi && event.target.storage.hs_tuishi[player.playerid]) return -1;
											return 10 - value;
										});
									} else event.redo();
								} else {
									if (!trigger.cards.length) trigger.untrigger();
									event.finish();
								}
								('step 2');
								if (result.links?.length) {
									event.target.gain(result.links, player, 'giveAuto');
									if (player.hasMark('hs_tuishi_gain')) {
										player.clearMark('hs_tuishi_gain', false);
										player.draw();
									} else player.addMark('hs_tuishi_gain', 1, false);
									trigger.cards.removeArray(result.links);
								}
								event.goto(1);
							},
							group: ['hs_tuishi_lose', 'hs_tuishi_count', 'hs_tuishi_gain'],
							subSkill: {
								lose: {
									trigger: {
										player: 'discardEnd',
									},
									forced: true,
									filter(event, player, name) {
										if (!event.discarder) return false;
										if (!event.notBySelf) return false;
										if (event.discarder == player) return false;
										if (!event.discarder.isIn()) return false;
										var cards = event.cards.filterInD('d');
										return cards.length;
									},
									content() {
										'step 0';
										player.chooseButton(1, ['推弑:是否交给' + get.translation(trigger.discarder) + '一张牌？', trigger.cards.filterInD('d')]).set('ai', function (button) {
											var player = _status.event.player,
												value = get.value(button.link, player),
												att = get.attitude(player, trigger.discarder);
											if (att > 0 && trigger.discarder.storage.hs_tuishi && trigger.discarder.storage.hs_tuishi[player.playerid]) return -1;
											return 10 - value;
										});
										('step 1');
										if (result.links?.length) {
											trigger.discarder.gain(result.links, player, 'giveAuto');
											if (player.hasMark('hs_tuishi_gain')) {
												player.clearMark('hs_tuishi_gain', false);
												player.draw();
											} else player.addMark('hs_tuishi_gain', 1, false);
											trigger.cards.removeArray(result.links);
											if (!trigger.discarder.storage.hs_tuishi) trigger.discarder.storage.hs_tuishi = {};
											if (!trigger.discarder.storage.hs_tuishi[player.playerid]) trigger.discarder.storage.hs_tuishi[player.playerid] = 0;
											trigger.discarder.storage.hs_tuishi[player.playerid] += result.links.length;
											trigger.discarder.markSkill('hs_tuishi');
											if (!trigger.cards.length) trigger.untrigger();
										}
									},
								},
								count: {
									trigger: {
										global: 'gainEnd',
									},
									firstDo: true,
									popup: false,
									forced: true,
									filter(event, player) {
										if (event.player == player) return false;
										var cards = event.getg(event.player);
										if (!cards.length) return false;
										return event.getl(player).cards2.filter(function (card) {
											return cards.includes(card);
										}).length;
									},
									content() {
										var cards0 = trigger.getg(trigger.player),
											cards = trigger.getl(player).cards2.filter(function (card) {
												return cards0.includes(card);
											});
										if (!trigger.player.storage.hs_tuishi) trigger.player.storage.hs_tuishi = {};
										if (!trigger.player.storage.hs_tuishi[player.playerid]) trigger.player.storage.hs_tuishi[player.playerid] = 0;
										trigger.player.storage.hs_tuishi[player.playerid] += cards.length;
										trigger.player.markSkill('hs_tuishi');
									},
								},
								gain: {
									trigger: {
										global: 'phaseJieshu',
									},
									audio: 'ext:划水池/audio:4',
									forced: true,
									filter(event, player) {
										if (!event.player.storage.hs_tuishi) return false;
										var num = event.player.storage.hs_tuishi[player.playerid];
										return num && num > 1;
									},
									content() {
										'step 0';
										var num0 = trigger.player.storage.hs_tuishi[player.playerid];
										event.num = Math.trunc(num0 / 2);
										player.chooseBool('推弑:是否对' + get.translation(trigger.player) + '造成' + event.num + '点伤害,随机获得其' + event.num * 2 + '张牌？').set('ai', function () {
											if (get.attitude(player, trigger.player) <= 0) return true;
											return trigger.player.hp > event.num && trigger.player.hasSkillTag('maixie');
										});
										('step 1');
										if (result.bool) {
											player.line(trigger.player);
											trigger.player.damage(event.num);
										} else event.goto(3);
										('step 2');
										if (trigger.player.isIn()) {
											var cards = trigger.player.getCards('he');
											if (cards.length) {
												if (cards.length > event.num * 2) cards = cards.randomGets(event.num * 2);
												player.gain(cards, trigger.player, 'giveAuto', 'byself');
											}
										}
										('step 3');
										trigger.player.storage.hs_tuishi[player.playerid] -= event.num * 2;
										var has = false;
										for (var i in trigger.player.storage.hs_tuishi) {
											if (trigger.player.storage.hs_tuishi[i]) {
												has = true;
												break;
											}
										}
										if (!has) trigger.player.unmarkSkill('hs_tuishi');
									},
								},
							},
							onremove(player) {
								game.filterPlayer2(function (target) {
									if (target.storage.hs_tuishi && target.storage.hs_tuishi[player.playerid]) {
										delete target.storage.hs_tuishi[player.playerid];
										var has = false;
										for (var i in target.storage.hs_tuishi) {
											if (trigger.player.storage.hs_tuishi[i]) {
												has = true;
												break;
											}
										}
										if (!has) target.unmarkSkill('hs_tuishi');
									}
								});
							},
						},
						hs_shechao: {
							trigger: {
								player: 'phaseZhunbei',
							},
							audio: 'ext:划水池/audio:4',
							content() {
								'step 0';
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									var card = ui.discardPile.childNodes[i];
									card.storage.hs_zhaojie = true;
								}
								game.washCard();
								('step 1');
								var cards = player.getCards('h');
								if (cards.length) player.loseToDiscardpile(cards);
								event.num = cards.length;
								if (!event.num) event.goto(3);
								('step 2');
								player
									.chooseTarget(
										'摄朝:获得至多' + get.translation(event.num) + '名角色的各一张手牌',
										[1, event.num],
										function (card, player, target) {
											return target.countCards('h') > 0 && player != target;
										},
										function (target) {
											var att = get.attitude(_status.event.player, target);
											if (target.hasSkillTag('nolose') || target.hasSkillTag('noh')) att *= 1.5;
											if (target.hasSkillTag('nogain')) att *= 2;
											return Math.max(20 - att, 0.01);
										}
									)
									.setHiddenSkill('hs_shechao');
								('step 3');
								var drawers = [player];
								if (result.targets?.length) {
									result.targets.sortBySeat();
									player.gainMultiple(result.targets);
									drawers.addArray(result.targets);
								}
								game.asyncDraw(drawers);
							},
							ai: {
								combo: 'hs_zhaojie',
							},
						},
						//郑浑
						hs_pitian: {
							intro: {
								name: '辟田',
								markcount(storage, player) {
									if (storage) return Math.round(storage * 1000) / 1000;
								},
								content(storage, player) {
									if (storage) return '已施肥' + Math.round(storage * 1000) / 1000 + '次';
								},
							},
							marktext: '肥',
							fertilize(num) {
								var next = game.createEvent(_status.event.name + '_fertilize');
								next.player = _status.event.player;
								next.num = num;
								next.setContent(function () {
									'step 0';
									event.trigger('hs_pitian_fertilizeing');
									('step 1');
									event.player.addMark('hs_pitian', event.num, false);
									game.log(event.player, '进行了', '#y' + Math.round(event.num * 1000) / 1000, '次施肥');
								});
							},
							hsrvest() {
								var next = game.createEvent(_status.event.name + '_hsrvest');
								next.player = _status.event.player;
								next.setContent(function () {
									'step 0';
									event.num = event.player.clearMark('hs_pitian', false);
									game.log(event.player, '进行了收获(施肥', '#y' + Math.round(event.num * 1000) / 1000, '次)');
									event.trigger('hs_pitian_hsrvesting');
									('step 1');
									if (event.keep) event.player.addMark('hs_pitian', event.num / 10, false);
									var num1 = Math.trunc(event.num / 3);
									for (var i = 0; i <= num1; i++) event.num += (Math.random() - 0.5) / 2;
									event.round = 0;
									event.dic = {
										maxhp: 4.8,
										recover: 3.5,
										turnover: 3,
										hujia: 3.1,
										link: 2.3,
										judge: 2,
										trick: 1.6,
										equip: 1.4,
										basic: 1,
									};
									('step 2');
									event.map = {};
									('step 3');
									var list = [];
									for (var i in event.dic) {
										if (!event.map[i]) event.map[i] = 0;
										if (event.num >= event.dic[i]) {
											if (i == 'turnover' && (event.map.turnover || !event.player.isTurnedOver())) continue;
											if (i == 'recover' && event.player.getDamagedHp() + event.map.maxhp <= event.map.recover) continue;
											if (i == 'hujia' && event.player.maxHujia <= event.player.hujia + event.map.hujia) continue;
											if (i == 'judge' && event.player.countCards('j') <= event.map.judge) continue;
											if (i == 'link' && (event.map.link || !event.player.isLinked())) continue;
											if (i == 'maxhp') list.push(i, i);
											else if (['trick', 'equip', 'recover'].includes(i) && Math.random() > 0.5) list.push(i, i, i, i);
											else list.push(i, i, i);
										}
									}
									if (list.length) {
										var choice = list.randomGet();
										if (choice) {
											event.num -= event.dic[choice];
											event.map[choice]++;
										}
										event.redo();
									}
									('step 4');
									if (event.map.maxhp) event.player.gainMaxHp(event.map.maxhp);
									('step 5');
									if (event.map.recover) {
										var num = event.map.recover,
											num1 = event.player.getDamagedHp();
										if (num > num1) {
											event.num += (num - num1) * event.dic.recover;
											num = num1;
										}
										event.player.recover(num);
									}
									('step 6');
									if (event.map.hujia) {
										var num = event.map.hujia,
											num1 = event.player.maxHujia - event.player.hujia;
										if (num > num1) {
											event.num += (num - num1) * event.dic.hujia;
											num = num1;
										}
										event.player.changeHujia(num);
									}
									('step 7');
									if (event.map.turnover) {
										if (event.player.isTurnedOver()) event.player.turnOver();
										else event.num += event.dic.turnover;
									}
									('step 8');
									if (event.map.link) {
										if (event.player.isLinked()) event.player.link();
										else event.num += event.dic.link;
									}
									('step 9');
									if (event.map.judge) {
										var cards,
											cards0 = event.player.getCards('j');
										if (cards0.length < event.map.judge) {
											cards = cards0;
											event.num += (event.map.judge - cards0.length) * event.dic.judge;
										} else cards = cards0.randomGets(event.map.judge);
										if (cards?.length) event.player.discard(cards);
									}
									('step 10');
									var cards = [];
									if (event.map.equip) {
										for (var i = 0; i < event.map.equip; i++) {
											var card = get.cardPile(function (card) {
												if (cards.includes(card)) return false;
												return get.type(card) == 'equip';
											});
											if (card) cards.push(card);
											else event.num += event.dic.equip;
										}
									}
									if (event.map.trick) {
										for (var i = 0; i < event.map.trick; i++) {
											var card = get.cardPile(function (card) {
												if (cards.includes(card)) return false;
												return get.type2(card) == 'trick';
											});
											if (card) cards.push(card);
											else event.num += event.dic.trick;
										}
									}
									if (event.map.basic) {
										for (var i = 0; i < event.map.basic; i++) {
											var card = get.cardPile(function (card) {
												if (cards.includes(card)) return false;
												return get.type(card) == 'basic';
											});
											if (card) cards.push(card);
											else event.num += event.dic.basic;
										}
									}
									if (cards.length) event.player.gain(cards, 'gain2');
									('step 11');
									event.round++;
									if (event.num >= 1) {
										if (event.round < 5) event.goto(2);
										else game.log('收获失败', event.num);
									}
								});
							},
							audio: 'ext:划水池/audio:1',
							trigger: {
								player: 'damageAfter',
								source: 'damageSource',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								lib.skill.hs_pitian.fertilize(3);
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											var num = 1;
											if (get.attitude(player, target) > 0) {
												if (player.needsToDiscard()) num = 0.8;
												else num = 0.65;
											}
											if (target.hp >= 4) return [1, num * 2];
											if (target.hp == 3) return [1, num * 1.5];
											return [1, num];
										}
									},
								},
							},
							group: ['hs_pitian_lose', 'hs_pitian_hsrvest'],
							subSkill: {
								lose: {
									trigger: {
										player: 'loseAfter',
									},
									audio: 'ext:划水池/audio:1',
									forced: true,
									filter(event, player) {
										if (event.parent.name == 'useCard') return false;
										for (var i of event.cards) {
											if (i.original == 'h') return true;
										}
										return false;
									},
									content() {
										lib.skill.hs_pitian.fertilize(1);
									},
								},
								hsrvest: {
									trigger: {
										player: 'phaseBegin',
									},
									audio: 'ext:划水池/audio:1',
									forced: true,
									filter(event, player) {
										return player.hasMark('hs_pitian');
									},
									content() {
										lib.skill.hs_pitian.hsrvest();
									},
								},
							},
						},
						hs_fenghuo: {
							trigger: {
								player: 'hs_pitian_fertilizeing',
							},
							audio: 'ext:划水池/audio:1',
							forced: true,
							filter(event, player) {
								if (player.countCards('e') > 3) return true;
								if (player.hp > 3) return true;
								return player.countCards('h') > 6;
							},
							content() {
								var num = 0;
								if (player.countCards('e') > 3) num += 30;
								if (player.hp > 3) num += 30;
								if (player.countCards('h') > 6) num += 30;
								trigger.num *= num / 100 + 1;
								game.log(player, '此次施肥效果增加了', '#y' + num + '%');
							},
							group: ['hs_fenghuo_hsrvest', 'hs_fenghuo_keep'],
							subSkill: {
								hsrvest: {
									trigger: {
										player: 'dyingBegin',
									},
									audio: 'ext:划水池/audio:1',
									prompt: '是否发动『丰获』进行收获？',
									filter(event, player) {
										return player.hasMark('hs_pitian');
									},
									content() {
										lib.skill.hs_pitian.hsrvest();
									},
								},
								keep: {
									trigger: {
										player: 'hs_pitian_hsrvesting',
									},
									audio: 'ext:划水池/audio:1',
									forced: true,
									filter(event, player) {
										if (player.countCards('e') > 3) return false;
										if (player.hp > 3) return false;
										return player.countCards('h') <= 6;
									},
									content() {
										trigger.keep = true;
										game.log(player, '此次收获保留了', '#y10%');
									},
								},
							},
							ai: {
								combo: 'hs_pitian',
							},
						},
						//蔡阳
						hs_zhuixi: {
							limited: true,
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('hs') > 0;
							},
							audio: 'ext:划水池/audio:2',
							viewAs: {
								name: 'juedou',
								storage: {
									hs_zhuixi: true,
									nowuxie: true,
								},
							},
							position: 'hs',
							selectCard: 1,
							discard: false,
							lose: false,
							delay: false,
							filterCard: true,
							check(card) {
								return 9 - get.value(card);
							},
							filterTarget(card, player, target) {
								return get.distance(player, target) > 1;
							},
							onuse(result, player) {
								player.awakenSkill('hs_zhuixi');
								player.addTempSkill('hs_zhuixi_get');
								result.card.storage.hs_zhuixi_user = player;
							},
							subSkill: {
								get: {
									trigger: {
										global: 'juedouAfter',
									},
									forced: true,
									charlotte: true,
									popup: false,
									filter(event, player) {
										if (!event.card.storage.hs_zhuixi) return false;
										return event.card.storage.hs_zhuixi_user == player;
									},
									content() {
										var tars = trigger.targets.add(trigger.player).remove(trigger.turn);
										player.draw();
										for (var i of tars) i.draw();
										trigger.turn.addSkillLog('hs_zhuixi');
										trigger.turn.restoreSkill('hs_zhuixi');
									},
								},
							},
						},
						hs_mochou: {
							intro: {
								name: '殁仇',
								name2: '殁仇',
								markcount(storage, player) {
									var num = 0;
									for (var i in storage.unu) num++;
									for (var i in storage.ed) num++;
									return num;
								},
								content(storage, player) {
									var str1 = '',
										str2 = '';
									for (var sk in storage.ed) {
										str2 += '对';
										var list = [];
										for (var i of storage.ed[sk]) {
											if (!list.includes(i[0])) {
												if (str2.length > 1) str2 += '、';
												str2 += '<span class="firetext">' + get.translation(i[0]) + '</span>';
												list.add(i[0]);
											}
										}
										str2 += '造成伤害后失去<span class="yellowtext">『' + get.translation(sk) + '』</span><br>';
									}
									for (var sk in storage.unu) {
										str1 += '对';
										var list = [];
										for (var i of storage.unu[sk]) {
											if (!list.includes(i[1])) {
												if (str1.length > 1) str1 += '/';
												str1 += '<span class="bluetext">' + get.translation(i[1]) + '</span>';
												list.add(i[1]);
											}
										}
										str1 += '造成伤害后获得<span class="greentext">『' + get.translation(sk) + '』</span><br>';
									}
									if (str1.length) return str1 + '<br><br>' + str2;
									else return str2;
								},
							},
							marktext: '仇',
							lastDo: true,
							trigger: {
								global: 'damageEnd',
							},
							audio: 'ext:划水池/audio:1',
							filter(event, player) {
								if (!event.source) return false;
								if (!event.source.isAlive()) return false;
								if (event.source == player) return false;
								if (event.source == event.player) return false;
								var skills = event.player.hs_getSkills(false, false, false, false);
								return skills.length;
							},
							forced: true,
							content() {
								'step 0';
								var skills = trigger.player.hs_getSkills(false, false, false, false),
									list = [];
								for (var i of skills) {
									list.push([i, '<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">『' + get.translation(i) + '』</div><div>' + game.getSkillInfo(i) + '</div></div>']);
								}
								trigger.player.chooseButton(['殁仇:请选择令' + get.translation(player) + '可以获得的技能', [list, 'textbutton']]).set('ai', function (button) {
									var att = get.attitude(trigger.player, player);
									game.log(att);
									if (att > 0 || (att == 0 && Math.random() > 0.5)) {
										if (!player.hasSkill(button.link)) return 2 + Math.random();
										return Math.random();
									}
									return -1;
								});
								('step 1');
								if (result.bool) {
									if (!player.storage.hs_mochou) player.storage.hs_mochou = { unu: {}, ed: {} };
									if (!player.storage.hs_mochou.unu[result.links[0]]) player.storage.hs_mochou.unu[result.links[0]] = [];
									player.storage.hs_mochou.unu[result.links[0]].push([trigger.player, trigger.source]);
									player.markSkill('hs_mochou');
								}
							},
							group: ['hs_mochou_die', 'hs_mochou_skill'],
							subSkill: {
								skill: {
									charlotte: true,
									forced: true,
									trigger: {
										source: 'damageEnd',
									},
									audio: 'ext:划水池/audio:1',
									filter(event, player) {
										if (!player.storage.hs_mochou) return false;
										var storage = player.storage.hs_mochou;
										for (var sk in storage.ed) {
											for (var i of storage.ed[sk]) {
												if (event.player == i[0]) return true;
											}
										}
										for (var sk in storage.unu) {
											for (var i of storage.unu[sk]) {
												if (event.player == i[1]) return true;
											}
										}
										return false;
									},
									content() {
										var storage = player.storage.hs_mochou;
										for (var sk in storage.ed) {
											for (var i of storage.ed[sk]) {
												if (trigger.player == i[0]) {
													storage.ed[sk].remove(i);
													if (!storage.ed[sk].length) {
														player.removeAdditionalSkill('hs_mochou', sk);
														game.log(player, '失去了技能', '#g『' + get.translation(sk) + '』');
													}
												}
											}
										}
										for (var sk in storage.unu) {
											for (var i of storage.unu[sk]) {
												if (trigger.player == i[1]) {
													if (player.hasSkill(sk)) {
														player.draw(2);
														i[0].draw(2);
													} else {
														player.addAdditionalSkill('hs_mochou', sk, true);
														game.log(player, '获得了技能', '#g『' + get.translation(sk) + '』');
													}
													storage.unu[sk].remove(i);
													if (!storage.ed[sk]) storage.ed[sk] = [];
													storage.ed[sk].push(i);
												}
											}
										}
										player.markSkill('hs_mochou');
									},
								},
								die: {
									trigger: {
										global: 'dieBegin',
									},
									audio: 'hs_mochou_skill',
									filter(event, player) {
										var skills = event.player.hs_getSkills(false, true, false, 'limited');
										for (var i of skills) {
											if (!event.player.awakenedSkills.includes(i)) return true;
										}
									},
									forced: true,
									content() {
										var skills = trigger.player.hs_getSkills(false, true, false, 'limited').filter(function (skill) {
											return !trigger.player.awakenedSkills.includes(skill);
										});
										if (skills.length) player.addSkill(skills);
										for (var i of skills) {
											player.restoreSkill(i);
										}
										var storage = player.storage.hs_mochou;
										for (var sk in storage.ed) {
											for (var i of storage.ed[sk]) {
												if (trigger.player == i[0]) {
													storage.ed[sk].remove(i);
													if (!storage.ed[sk].length) {
														player.removeAdditionalSkill('hs_mochou', sk);
														game.log(player, '失去了技能', '#g『' + get.translation(sk) + '』');
													}
												}
											}
										}
										for (var sk in storage.unu) {
											for (var i of storage.unu[sk]) {
												if (trigger.player == i[1]) storage.unu[sk].remove(i);
											}
										}
										player.markSkill('hs_mochou');
									},
								},
							},
						},
					},
					dynamicTranslate: {
						hs_duoshi(player) {
							if (get.mode() == 'guozhan') {
								if (!player.storage.hs_duoshi_use) return '转换技,锁定技.<span class="bluetext">你的手牌上限等于体力上限.阳:当你造成伤害,或一名角色进入濒死时,你失去体力至1点并增加等量体力上限,</span>你视为拥有『缜略』.阴:当你受到伤害,或一名角色进入濒死时,你减少已损体力值一半的体力上限(向下取整)并摸等量牌,回复体力至体力上限,你视为拥有『帷幕』.';
								else if (player.storage.hs_duoshi) return '转换技,锁定技.<span class="bluetext">你的手牌上限等于体力上限.</span>阳:当你造成伤害,或一名角色进入濒死时,你失去体力至1点并增加等量体力上限,<span class="bluetext">你视为拥有『缜略』.阴:当你受到伤害,或一名角色进入濒死时,你减少已损体力值一半的体力上限(向下取整)并摸等量牌,回复体力至体力上限,</span>你视为拥有『帷幕』.';
								return '转换技,锁定技.<span class="bluetext">你的手牌上限等于体力上限.阳:当你造成伤害,或一名角色进入濒死时,你失去体力至1点并增加等量体力上限,</span>你视为拥有『缜略』.阴:当你受到伤害,或一名角色进入濒死时,你减少已损体力值一半的体力上限(向下取整)并摸等量牌,回复体力至体力上限,<span class="bluetext">你视为拥有『帷幕』</span>.';
							} else {
								if (!player.storage.hs_duoshi_use) return '转换技,锁定技.<span class="bluetext">你的手牌上限等于体力上限.阳:当你造成伤害,或一名角色进入濒死时,你将势力改为<魏>,失去体力至1点并增加等量体力上限,</span>你视为拥有『缜略』.阴:当你受到伤害,或一名角色进入濒死时,你将势力改为<群>,减少已损体力值一半的体力上限(向下取整)并摸等量牌,回复体力至体力上限,你视为拥有『帷幕』.';
								else if (player.storage.hs_duoshi) return '转换技,锁定技.<span class="bluetext">你的手牌上限等于体力上限.</span>阳:当你造成伤害,或一名角色进入濒死时,你将势力改为<魏>,失去体力至1点并增加等量体力上限,<span class="bluetext">你视为拥有『缜略』.阴:当你受到伤害,或一名角色进入濒死时,你将势力改为<群>,减少已损体力值一半的体力上限(向下取整)并摸等量牌,回复体力至体力上限,</span>你视为拥有『帷幕』.';
								return '转换技,锁定技.<span class="bluetext">你的手牌上限等于体力上限.阳:当你造成伤害,或一名角色进入濒死时,你将势力改为<魏>,失去体力至1点并增加等量体力上限,</span>你视为拥有『缜略』.阴:当你受到伤害,或一名角色进入濒死时,你将势力改为<群>,减少已损体力值一半的体力上限(向下取整)并摸等量牌,回复体力至体力上限,<span class="bluetext">你视为拥有『帷幕』</span>.';
							}
						},
						hs_jx_weimu(player) {
							if (player.storage.hs_duoshi_use && !player.storage.hs_duoshi) return '<span class="bluetext">锁定技.当你成为其他角色使用的黑色牌的目标时,取消之.</span>';
							return '锁定技.当你成为其他角色使用的黑色牌的目标时,取消之.';
						},
						hs_jx_zhenlve(player) {
							if (player.storage.hs_duoshi_use && player.storage.hs_duoshi) return '<span class="bluetext">锁定技.你使用牌无距离限制且不能被【无懈可击】响应;你不能成为延时锦囊牌的目标.</span>';
							return '锁定技.你使用牌无距离限制且不能被【无懈可击】响应;你不能成为延时锦囊牌的目标.';
						},
						hs_shuangxiong(player) {
							if (player.storage.hs_bingzhan && player.hasSkill('hs_bingzhan')) return '准备阶段,你可以跳过判定阶段和摸牌阶段.如此做,你展示并获得牌堆顶3张牌.直到你的下回合开始,你可以将一张牌当【决斗】使用,若此牌与展示牌花色均不同,你摸一张牌.';
							return '准备阶段,你可以跳过判定阶段和摸牌阶段.如此做,你展示牌堆顶5张牌.直到你的下回合开始,你可以将一张牌当【决斗】使用,若此牌与展示牌花色均不同,你摸一张牌.';
						},
						hs_qinguo(player) {
							if (
								game.hasPlayer(function (current) {
									return current.hasSkill('DIY_dingpan');
								})
							) {
								if (player.storage.hs_qinguo) return "转换技.阳/<span class='bluetext'>阴:当你使用或打出牌未指定其他角色为目标结算完成后,你可以令</span>一名其他角色/<span class='bluetext'>你获得并展示牌堆</span>顶/<span class='bluetext'>底一张牌,若这两张牌颜色不同,你可以与一名其他角色进行一次〖定叛·谋弈〗,反之你摸一张牌.</span>";
								return "转换技.<span class='bluetext'>阳</span>/阴<span class='bluetext'>:当你使用或打出牌未指定其他角色为目标结算完成后,你可以令一名其他角色</span>/你<span class='bluetext'>获得并展示牌堆顶</span>/底<span class='bluetext'>一张牌,若这两张牌颜色不同,你可以与一名其他角色进行一次〖定叛·谋弈〗,反之你摸一张牌.</span>";
							} else if (player.storage.hs_qinguo) return "转换技.阳/<span class='bluetext'>阴:当你使用或打出牌未指定其他角色为目标结算完成后,你可以令</span>一名其他角色/<span class='bluetext'>你获得并展示牌堆</span>顶/<span class='bluetext'>底一张牌,若这两张牌颜色不同,你可以视为使用一张无距离限制且无视防具的【杀】(不计入使用次数),反之你摸一张牌.</span>";
							return "转换技.<span class='bluetext'>阳</span>/阴<span class='bluetext'>:当你使用或打出牌未指定其他角色为目标结算完成后,你可以令一名其他角色</span>/你<span class='bluetext'>获得并展示牌堆顶</span>/底<span class='bluetext'>一张牌,若这两张牌颜色不同,你可以视为使用一张无距离限制且无视防具的【杀】(不计入使用次数),反之你摸一张牌.</span>";
						},
						hs_xieling(player) {
							if (player.storage.hs_xieling2) return "1级:每种花色限一次,你可以将手牌中一种花色的所有牌当作【号令天下】使用.<br><br><span class='bluetext'>2级:出牌阶段限一次,你可以视为使用一张【号令天下】.你使用的【号令天下】中的<可以>改为<须>.你获得其他角色因【号令天下】弃置的牌且不计入手牌上限.</span>";
							return "<span class='bluetext'>1级:每种花色限一次,你可以将手牌中一种花色的所有牌当作【号令天下】使用.</span><br><br>2级:出牌阶段限一次,你可以视为使用一张【号令天下】.你使用的【号令天下】中的<可以>改为<须>.你获得其他角色因【号令天下】弃置的牌且不计入手牌上限.";
						},
					},
					translate: {
						huashui_wei: '<span data-nature=watermx>魏</span>',
						huashui_shu: '<span data-nature=firemx>蜀</span>',
						huashui_wu: '<span data-nature=woodm>吴</span>',
						huashui_qun: '<span data-nature=metalmm>群</span>',
						huashui_jin: '<span data-nature=keymm>晋</span>',
						huashui_shen: '<span data-nature=orangem>神</span>',
						huashui_bonus: "<span data-nature=waterm style='color: deepskyblue'>划水</span>",
						gentle_huashui: '划水∭君',
						air_huashui: '划水∭幻',
						stub_huashui: '划水∭执',
						memory_huashui: '划水∭念',
						hs_zhonghui: '∭钟会',
						hs_zhaoyun: '∭赵云',
						hs_zhugedan: '∭诸葛诞',
						hs_xiahoudun: '∭夏侯惇',
						hs_jiaxu: '∭贾诩',
						hs_caorui: '∭曹叡',
						hs_liubiao: '∭刘表',
						hs_caopi: '∭曹丕',
						hs_yanwen: '∭颜良文丑',
						hs_luxun: '∭陆逊',
						hs_huangzhong: '∭黄忠',
						hs_caochong: '∭曹冲',
						hs_fazheng: '∭法正',
						hs_caoren: '∭曹仁',
						hs_huatuo: '∭华佗',
						hs_xujing: '∭许靖',
						hs_lvmeng: '∭吕蒙',
						hs_weiyan: '∭魏延',
						hs_yangyi: '∭杨仪',
						hs_sunquan: '∭孙权',
						hs_zhouqun: '∭周群',
						hs_dengai: '∭邓艾',
						hs_xusheng: '∭徐盛',
						hs_wangyuanji: '∭王元姬',
						hs_pangtong: '∭庞统',
						hs_yujin: '∭于禁',
						hs_sunluban: '∭孙鲁班',
						hs_xushu: '∭徐庶',
						hs_gaoshun: '∭高顺',
						hs_jiachong: '∭贾充',
						hs_guanyu: '∭关羽',
						hs_sunxiu: '∭孙休',
						hs_luotong: '∭骆统',
						hs_zhangjiao: '∭张角',
						hs_zhangbao: '∭张宝',
						hs_zhangliang: '∭张梁',
						hs_dongzhuo: '∭董卓',
						hs_heqi: '∭贺齐',
						hs_liuzan: '∭留赞',
						hs_haozhao: '∭郝昭',
						hs_zhangqiying: '∭张琪瑛',
						hs_xizhicai: '∭戏志才',
						hs_zuoci: '∭左慈',
						hs_duyu: '∭杜预',
						hs_liuqi: '∭刘琦',
						hs_yanghu: '∭羊祜',
						hs_zhugeliang: '∭诸葛亮',
						hs_quyi: '∭麹义',
						hs_wanglang: '∭王朗',
						hs_wangcan: '∭王粲',
						hs_zhanghe: '∭张郃',
						hs_lvdai: '∭吕岱',
						hs_caocao: '∭曹操',
						hs_lingtong: '∭凌统',
						hs_masu: '∭马谡',
						hs_liubei: '∭刘备',
						hs_zixu: '∭紫虚上人',
						hs_fuxuan: '∭傅玄',
						hs_yuanshao: '∭袁绍',
						hs_xunyou: '∭荀攸',
						hs_maliang: '∭马良',
						hs_zhangling: '∭张陵',
						hs_simazhao: '∭司马昭',
						hs_zhenghun: '∭郑浑',
						hs_caiyang: '∭蔡阳',
						hs_liuyi: '六艺',
						hs_liuyi_info: '锁定技,游戏开始时,或回合开始时,你从随机六个技能名中包含<礼/乐/射/御/书/数>字样的技能中选择一个获得之,直到你的下一个回合开始.',
						hs_wude: '五德',
						hs_wude_info: '锁定技,游戏开始时,或回合开始时,你从随机五个技能名中包含<温/良/恭/俭/让>字样的技能中选择一个获得之,直到你的下一个回合开始.',
						hs_sixiu: '四修',
						hs_sixiu_info: '锁定技,游戏开始时,或回合开始时,你从随机四个技能名中包含<恭/敬/惠/义>字样的技能中选择一个获得之,直到你的下一个回合开始.',
						hs_baya: '八雅',
						hs_baya_info: '锁定技,游戏开始时,或回合开始时,你从随机八个技能名中包含<琴/棋/书/画/诗/香/花/茶>字样的技能中选择一个获得之,直到你的下一个回合开始.',
						hs_yixin: '裔馨',
						hs_yixin_info: '锁定技.每回合限一次,当你的体力值发生变化时,你输入一行代码,从随机5个content中包含此代码的技能中选择一个获得.',
						hs_huiqiao: '惠巧',
						hs_huiqiao_info: '锁定技.你的手牌数锁定为你的已损体力值,你受到一点伤害后增加一点体力上限.',
						hs_yingqiao: '莹窍',
						hs_yingqiao_info: '锁定技,有角色指向你时,你摸一张牌.',
						hs_quanji: '权计',
						hs_quanji_info: '当你造成或受到一点伤害后,你可以摸一张牌,你将一张牌置于武将牌上,称为<权>.你的手牌上限+X(X为<权>的数量).',
						hs_zili: '自立',
						hs_zili_info: '觉醒技,准备阶段开始时,若<权>的数量不小于3,你减1点体力上限,并选择一项:1、回复1点体力;2、摸两张牌.你获得技能<挟术>.',
						hs_xieshu: '挟术',
						hs_xieshu_info: '出牌阶段,你可以将X+1张<权>当作一张普通锦囊牌使用(X为本回合发动此技能的次数).',
						hs_yajiao: '涯角',
						hs_jizhu: '积著',
						hs_yajiao_info: '你可以将【杀/闪】当作【桃】或【酒】使用或打出,并摸一张牌.出牌阶段结束后,或你当使用或打出【杀】或【闪】时,你可以展示一张不为【杀/闪】的牌并将其改为【杀/闪】,将其置入手牌且本回合不计入手牌上限.',
						hs_jizhu_info: '锁定技.每当你累计使用或打出7张基本牌后,你从弃牌堆中随机获得一张【杀】,下个回合开始时你摸两张牌,你于该回合出牌阶段使用【杀】和【酒】的次数上限+1.你使用的【杀】若为转化牌或虚拟牌则无视目标防具,反之你获得目标一张牌.',
						hs_zongbi: '宗庇',
						hs_zongbi_info: '锁定技,当你受到伤害时,你增加一点体力上限并摸一张牌,从<观星>>傲才>>明哲>中选择一个技能获得.当你获得以上全部技能时,你修改技能＂宗庇＂.',
						hs_zongbib: '宗庇',
						hs_zongbib_info: '锁定技,当你的体力值发生变动时,你摸两张牌.',
						hs_zhengwu: '徴吴',
						hs_zhengwu_info: '每回合每名角色限一次,当你对一名其他角色造成伤害时,场上的其他魏势力角色可以交给你一张牌,该伤害值+x (x为你以此法获得的牌的数量)',
						hs_jupan: '举叛',
						hs_jupan_info: '若你已以＂徴吴＂获得了至少y张牌(y为场上魏势力角色数),你可以将体力值回复至体力上限,失去>徴吴<并获得>同援>.',
						hs_tongyuan: '同援',
						hs_tongyuan_info: '当你在回合外需要使用或打出除【桃】以外的基本牌时,场上的吴势力角色可以代替你使用或打出你需要的牌.',
						hs_ganglie: '刚烈',
						hs_ganglie_info: '当你受到伤害后,你可选择一名角色进行判定,若结果为红,你弃置其2x张牌;不为红,你对其造成x点伤害.(x为此次受到的伤害值).锁定技,你的体力值减少均视为受到无来源的等量伤害.',
						hs_fenxi: '奋袭',
						hs_fenxi_info: '每回合限一次,当你受到或造成伤害后,你可以失去一点体力,可以获得一名其他角色一张牌,若是你的回合,你获得一点护甲.',
						hs_danjing: '啖睛',
						hs_danjing_info: '限定技,当你进入濒死状态时,你可以减少两点体力上限并将体力回复至体力上限,你的攻击范围﹣2.若你的体力上限大于2,你重置此技能.',
						hs_duoshi: '度势',
						hs_duoshi_info: '转换技,锁定技.你的手牌上限等于体力上限.阳:当你造成伤害,或一名角色进入濒死时,你将势力改为<魏>,失去体力至1点并增加等量体力上限,你视为拥有『缜略』.阴:当你受到伤害,或一名角色进入濒死时,你将势力改为<群>,减少已损体力值一半的体力上限(向下取整)并摸等量牌,回复体力至体力上限,你视为拥有『帷幕』.',
						hs_luanwu: '乱武',
						hs_luanwu_info: '限定技.出牌阶段,你可以将一张伤害性牌对所有其他角色使用.受到此牌伤害的角色在此牌结算完成后需使用一张伤害性牌,否则其失去一点体力;此牌结算完成后重复此流程.',
						hs_jx_weimu: '帷幕',
						hs_jx_weimu_info: '锁定技.当你成为其他角色使用的黑色牌的目标时,取消之.',
						hs_jx_zhenlve: '缜略',
						hs_jx_zhenlve_info: '锁定技.你使用牌无距离限制且不能被【无懈可击】响应;你不能成为延时锦囊牌的目标.',
						hs_mingjian: '明鉴',
						hs_mingjian_info: '游戏开始时,你获得一枚<恢拓>标记.当你受到或造成一点伤害时,你可以选择一名其他角色,令其获得或失去一枚<恢拓>标记.',
						hs_huituo: '恢拓',
						hs_huituo_info: '锁定技.有<恢拓>标记的角色摸牌阶段多摸x张牌,出牌阶段使用【杀】的次数上限+x(x为其拥有的<恢拓>标记数量的开方,向下取整).当一名角色获得<恢拓>标记时,其回复等量体力(超出部分改为获得体力上限);当一名角色移去>恢拓>标记时,其减少y点体力上限,摸y张牌(y为其此次失去的<恢拓>标记数量的一半,向下取整).',
						hs_xingshuai: '兴衰',
						hs_xingshuai_info: '主公技,限定技,当你处于濒死状态时,你可以令所有拥有<恢拓>标记的角色选择是否移去其所有<恢拓>标记,你获得等于此次场上移去的<恢拓>标记数量枚<恢拓>标记.',
						hs_zishou: '自守',
						hs_zishou_info: '锁定技,当你/其他角色使用牌指定其他角色/你作为目标时,你/其他角色须交给其一张牌,否则其获得此牌并摸一张牌.',
						hs_zongshi: '宗室',
						hs_zongshi_info: '准备阶段.若你的手牌数不小于体力值,你可以摸X张牌并弃置Y张牌(X为场上势力数,Y为你的体力值),若此做,本回合你发动<自守>时摸一张牌.你通过此技能获得的牌本回合不计入手牌上限.',
						hs_xiwang: '奚望',
						hs_xiwang_info: '主公技,锁定技.你发动『宗室』时,场上所有<群雄>势力角色均视为不同势力.',
						hs_xingshang: '行殇',
						hs_xingshang_info: '当一名角色濒死时,你可以获得其一个区域或武将牌上的所有牌,若其脱离濒死,你须交给其等量牌.当处于翻面状态的角色伤害时,你增加一点体力上限;若此伤害大于1,其翻面.',
						hs_fangzhu: '放逐',
						hs_fangzhu_info: '出牌阶段限一次,或受到伤害后,你可以失去一点体力上限,令一名其他角色摸x张牌并翻面(X为你已损失的体力值).当场上角色翻面时你摸一张牌.',
						hs_songwei: '颂威',
						hs_songwei_info: '主公技,锁定技.场上魏势力的角色造成累计两点伤害后,你回复一点体力.',
						hs_shuangxiong: '双雄',
						hs_shuangxiong_info: '准备阶段,你可以跳过判定阶段和摸牌阶段.如此做,你展示牌堆顶5张牌.直到你的下回合开始,你可以将一张牌当【决斗】使用,若此牌与展示牌花色均不同,你摸一张牌.',
						hs_bingzhan: '并战',
						hs_bingzhan_info: '出牌阶段开始时,你可以选择一名其他角色进行<协力>.若你与其<协力>成功,则你摸已损体力值张牌.直到你的下个回合出牌阶段开始,你修改『双雄』中>展示牌堆顶5张牌<改为>展示并获得牌堆顶3张牌<.',
						hs_renfu: '忍负',
						hs_renfu_info: '锁定技.一名角色横置后,其获得一枚>连营>标记.其横置状态改变时,你摸一张牌.一名角色的结束阶段开始时,你可分配至多X枚>连营>标记(X为你本回合被指向次数).<br><br>※拥有<连营>标记的角色视为处于横置状态,其取消横置视为移去一枚<连营>标记,其移去所有<连营>标记时取消横置.',
						hs_zhanhuo: '绽火',
						hs_zhanhuo_info: '出牌阶段限一次,你可以将三张花色不同的牌当作【火烧连营】使用.你对拥有>连营>标记的角色造成伤害时,其移去一个>连营>标记,若此伤害为火焰伤害则伤害+1,否则此伤害视为火焰伤害.',
						hs_dingzhan: '定斩',
						hs_dingzhan_info: '锁定技.回合开始时,你从场上/牌堆/弃牌堆/场外获得一张【赤血刀】.当你使用牌时,你获得一个<斩>标记.你的回合内,失去体力对你无效.',
						hs_liegong: '烈弓',
						hs_liegong_info: '当你使用【杀】指定目标时,你弃置所有<斩<标记(至多3枚),可以弃置至多4张牌并选择X项(X为你此次弃置的牌数和<斩<标记数量之和),令此【杀】:①无视目标防具;②不可响应;③目标非锁定技失效,④造成的伤害+1;⑤造成伤害后摸一张牌.(④⑤项可多次选择)',
						hs_jingshi: '劲矢',
						hs_jingshi_info: '锁定技.当你使用【杀】不因传导造成伤害时,若伤害值大于目标护甲数,则超出部分伤害只生效一半(向上取整);此牌结算完成后,若目标存活,你摸等于此伤害未生效部分数值的牌,其减少等量的体力上限(至多减至1).<br><br><br>〖联动效果〗当场上存在<§韩当>的『弓骑』技能时,你的普通【杀】均视为射【杀】.',
						hs_chengxiang: '称象',
						hs_chengxiang_info: '锁定技.当你受到伤害时,或其他角色受到大于其体力值的伤害时,你可以表演一次>称象<,根据表演结果获得对应效果.(称象,每颗石重50±10石,象重270±70石,各档次部分奖励概率如下:<br><img style=width:400px src=extension/划水池/image/card/hs_chengxiang_show.jpg>)',
						hs_renxin: '仁心',
						hs_renxin_info: '每回合限一次,当其他角色受到不小于其体力值的伤害时,若其手牌数小于你,你可以将手牌弃置至与其相同并翻面,防止此伤害.',
						hs_zijiao: '锱较',
						hs_xuanhuo: '眩惑',
						hs_zijiao_info: '锁定技.当其他角色使用牌指定你或武将牌上有>名<的角色为目标,或武将牌上有>名<的角色获得牌后,你获得该角色一张牌.',
						hs_xuanhuo_info: '出牌阶段限一次,你可以将任意张牌至于一名角色的武将牌上,称为>名<,当武将牌上有>名<的角色不因『眩惑』或『博名』获得牌时,你将这些牌交给除该角色外的一名角色,该角色选择等量的>名>获得之(若不足则获得所有的>名>).',
						hs_crjushou: '据守',
						hs_crjushou_info: '锁定技.一轮游戏开始时,你获得两点护甲上限并翻面.当你翻面时,若你的武将牌正面朝上,你获得两点护甲并翻面;反之你须令一名其他角色获得一枚<据守>标记.你的失去体力视为受到无来源的伤害并摸等量牌,你的于非濒死时回复体力视为增加护甲,',
						hs_jiewei: '解围',
						hs_jiewei_info: '有<据守>标记的角色受到伤害时,其防止之并获得等量的<据守>标记.一轮游戏结束时,清除场上的<据守>标记,失去<据守>标记的角色失去x点体力,你失去x+1点体力(x为该角色本轮因此技能防止的伤害总值的一半,向下取整).当场上有伤害被防止或你受到伤害后,你摸一张牌并可以对你或其或伤害来源使用一张牌.',
						hs_wuqin: '五禽',
						hs_wuqin_info: '锁定技.你的手牌上限+全场受伤角色数.一轮游戏开始时,你可以选择一名其他角色,与其选择回复一点体力或增加一点体力上限.',
						add_maxhp: '增加体力上限',
						hs_liaodu: '疗毒',
						hs_liaodu_info: '出牌阶段限一次,你可以选择一项:1、弃置一张装备牌令一名其他角色失去当前一半的体力值(向下取整),增加等量+1的体力上限;2、弃置一张锦囊牌令一名其他角色减少当前已损体力值一半的体力上限(向下取整),回复等量+1的体力.一名角色体力上限变化后,你摸等量牌',
						hs_mafei: '麻沸',
						hs_mafei_info: '一名角色死亡前,若其武将牌正面朝上,你可弃一张牌取消之,令其翻面并将体力值回复至体力上限的一半(向上取整,至多为5).',
						hs_boming: '博名',
						hs_yuxu: '誉虚',
						hs_boming_info: '锁定技.一名角色回合结束时,你将所有手牌置于你的武将牌上,成为<名>.一名角色于你的回合外获得牌后,若其手牌数大于你的>名<牌数,你将牌堆顶的对应差值数量的牌作为<名>置于你的武将牌上.',
						hs_yuxu_info: '锁定技.你可以如手牌般使用或打出你武将牌上不为【无懈可击】的牌.当你使用牌时,若你的武将牌上有与此牌花色或点数相同的<名>牌,你须弃置其中一张.',
						hs_qinxue: '勤学',
						hs_botu: '博图',
						hs_dujiang: '渡江',
						hs_duojing: '夺荆',
						hs_qinxue_info: '锁定技.当其他角色使用牌时,你若未记录此牌名,则你记录之;当你使用牌时,若此牌名已被记录,你移除之并摸一张牌.牌名已被记录的牌不计入你的手牌上限.',
						hs_botu_info: '出牌阶段限一次,你可以移除任意『勤学』记录的牌名,重铸等量的牌并摸等量的牌,你以此法获得的牌本回合不能使用.',
						hs_dujiang_info: '使命技.①准备阶段,若『勤学』记录的牌名数>0,你将手牌摸/弃至『勤学』记录的牌名数的一半(向上取整).②使命:出牌阶段开始时,若你『勤学』记录的牌名数量不小于场上角色数的三倍,你获得『博图』和『夺荆』.③失败:当你累计造成三次伤害后,你减少一点体力上限,将手牌摸至或弃至体力值.',
						hs_duojing_info: '当你于回合内使用基本牌或伤害性牌选择目标后,若『勤学』记录的牌名数>0,你可以移除一个记录的牌名令此牌不计入使用次数并无视目标防具.',
						hs_kuanggu: '狂骨',
						hs_kuanggu_info: '当你造成一点伤害后,你可以选择一项:①回合结束时回复一点体力;②获得一点护甲,本回合手牌上限+1;③背水:增加一点体力上限,此技能失效直至回合结束.',
						hs_qimou: '奇谋',
						hs_qimou_info: '出牌阶段开始时,你可以选择减少任意点体力上限(至多为全场角色数).若此做,你摸X张牌(X为你此次失去的体力上限与体力值之和),且你本阶段造成伤害后使用【杀】的次数上限+X且无距离限制;出牌阶段结束时,若你造成的伤害数不小于此次失去的体力上限,或你击杀了角色,你增加等量点体力上限(至多为X).',
						hs_duoduan: '度断',
						hs_duoduan_info: '每回合限两次,当你成为其他角色使用牌的目标时,你可以重铸一张牌,若这此牌与被使用牌类型不同,此牌对你无效,其使用者摸两张牌;若这两张牌颜色不同,你获得此牌.',
						hs_juanxia: '狷狭',
						hs_juanxia_info: '一轮游戏结束时,你可以弃置任意名在本轮中摸牌数不小于你的角色的一张牌;弃置至多等量本轮中造成的伤害数不小于你的角色数的牌,选择至多等量的这些角色,其直至下一个出牌阶段结束无法使用打出或弃置于你弃置的牌牌名或点数相同的牌,且其下一个出牌阶段结束时失去一点体力.',
						hs_yuanfei: '怨诽',
						hs_yuanfei_info: '限定技.其他角色死亡后,或当你进入濒死时,你可以减一点体力上限并回复一点体力,失去『度断』并将势力改为<魏>.若你的身份牌为<忠臣/反贼>,你可以将身份牌替换为<反贼/忠臣>并亮明身份牌.',
						hs_zhiheng: '制衡',
						hs_zhiheng_info: '出牌阶段限一次,你可以观看牌堆顶的x张牌,你可以弃置至多x张牌(可以选择弃置<业>牌)并获得其中对应数量的牌(x为你区域内牌的数量之和).若你未获得所有你观看的牌,你将剩余牌以任意顺序置于牌堆顶.',
						hs_tongye: '统业',
						hs_tongye_info: '当有场上角色失去装备区的一张牌时,你可以将牌堆底一张牌置于你的武将牌上,称为<业>.若此牌为装备牌,则你可使用之.',
						hs_jiuyuan: '救援',
						hs_jiuyuan_info: '主公技.其他吴势力角色回复体力时,若你已受伤,其可选择改为令你摸等量张牌并回复等量体力.其他吴势力角色令你回复体力时,若你武将牌上有<业>,则回复量+1,其摸一张牌并获得一张<业>.',
						hs_tiansuan: '天算',
						hs_tiansuan_info: '回合开始时,你可以摸一张牌,为自己抽取两张<命运签>.其他角色回合开始时,其可以交给你一张牌,你可以为其抽取一张<命运签>并选择交给其此签或令其摸两张牌.<br>' + '当你为其他角色抽取<命运签>时,你可以令其中一种命运签的权重+3.<br>' + '<br>锁定技.每回合限两次,获得<命运签>的角色本回合在随机的一个阶段开始前/结束后时机:<br>' + '上上签(权重1):进行一个额外的摸牌阶段和出牌阶段.<br>' + '上签(权重2):进行一个额外的摸牌阶段并回复一点体力.<br>' + '中签(权重2):进行一个额外的出牌阶段.<br>' + '下签(权重2):进行一个额外的准备阶段和结束阶段并弃一张牌.<br>' + '下下签(权重1):进行一个额外的弃牌阶段并失去一点体力.',
						hs_tuntian: '屯田',
						hs_zaoxian: '凿险',
						hs_jixi: '急袭',
						hs_tuntian_info: '一名角色回合结束时,若x不大于3,你可以将弃牌堆中本回合置入的所有普通锦囊牌置于你的武将牌上(每种牌名限一次),称为<田>.若x大于3且你拥有<田>,你弃置一张<田>.(x为本回合你受到的伤害与失去的牌的数量和)',
						hs_zaoxian_info: '觉醒技.一名角色回合开始时,若你武将牌上<田>的数量不小于6,你回复一点体力,获得『急袭』.',
						hs_jixi_info: '每回合限一次,当你失去手牌或装备区的牌后,你可以将一张<田>当作【出其不意】对至多y角色使用(y为你拥有的<田>的数量的一半,向上取整).当你使用【出其不意】对其他角色造成伤害后,你视为对其使用一张【顺手牵羊】.',
						hs_pojun: '破军',
						hs_yicheng: '疑城',
						hs_pojun_info: '你成为其他角色使用牌的目标后,你可以对其使用一张伤害类牌或将一张非伤害类牌当作随机属性的【杀】对其使用,若造成伤害,则你摸一张牌,该指定你为目标的牌失效且你获得之.你使用伤害性牌指定目标后,其本回合无法使用/打出与此牌花色或点数相同的牌,若该花色或点数已被记录,你可以令其翻面或此牌伤害+1.',
						hs_yicheng_info: '你可以将一张牌当作【草木皆兵】使用.一名角色的结束阶段开始时,你获得所有其他角色手牌中因【草木皆兵】获得的牌.',
						hs_qianchong: '谦冲',
						hs_qianchong_info: '锁定技.当你成为其他角色使用牌的目标后,若你未记录过此牌的点数,你记录之,此牌对你无效.你使用牌时,若你未记录过此牌的点数,你记录之,此牌不计入使用次数.',
						hs_shangjian: '尚俭',
						hs_shangjian_info: '你/其他角色的回合结束时,若其本回合不因使用而失去的牌数不大于其体力上限/体力值,你可以令其摸等量的牌,清除『谦冲』记录中与弃牌点数相同的项并摸等于项数的牌;否则若不是你的回合,你可以对其依次使用其中的伤害性牌并获得位于弃牌堆的剩余牌.',
						hs_guolun: '过论',
						hs_songsang: '送丧',
						hs_zhanji: '展骥',
						hs_mice: '密策',
						hs_guolun_info: '每回合每名角色限一次,出牌阶段,你可以与一名角色拼点,没赢的角色进入连环状态.你拼点开始时,你可以摸一张牌;若你拼点赢,你可以获得拼点对象区域内一张牌.',
						hs_songsang_info: '限定技,一名角色死亡时,你可以获得『展骥』;若该角色是你,你取消之并将体力回复至体力上限,否则你获得其体力上限与体力值.',
						hs_zhanji_info: '觉醒技.回合开始时,你获得『密策』并将势力改为<蜀>.',
						hs_mice_info: '每轮限两次,一名角色准备阶段开始时时,你可以令其选择一项直至回合结束:①上策:弃置x张牌,本回合使用的伤害性牌伤害+1;②中策:本回合使用【杀】的次数上限+x;③下策:摸牌阶段额外摸x张牌,手牌上限+x,使用牌不能指定其他角色作为目标.(x为全场势力数)',
						hs_zhenyu: '镇御',
						hs_yizhong: '毅重',
						hs_zhenyu_info: '锁定技.技能数小于x的角色视为拥有『统兵』『兵势』『军形』『筑守』『先登』中的随机项直至补齐x个技能或获得全部技能.一名角色除因此技能获得的技能外技能数大于x,或势力改变时,你令其失去一个技能.(单将模式各角色x初始为4,双将模式为6,仅统计拥有描述的技能,你的x初始值+2,于禁拥有此技能优先权.)',
						hs_yizhong_info: '当你受到伤害后,你可以选择一项:1.获得y-1点护甲;2.令至多y名角色『镇御』中的x减一;3.令至多y名角色『镇御』中的x加一.(y为此次受到的伤害值)',
						hs_yj_tongbing: '统兵',
						hs_yj_bingshi: '兵势',
						hs_yj_junxing: '军形',
						hs_yj_zhushou: '筑守',
						hs_yj_xiandeng: '先登',
						hs_yj_tongbing_info: '锁定技.回合开始/结束时,你摸一张牌.',
						hs_yj_bingshi_info: '锁定技.每回合限『镇御』中的x次,受到伤害后,你摸一张牌.',
						hs_yj_junxing_info: '锁定技.每回合限『镇御』中的x次,造成伤害后,你摸一张牌.',
						hs_yj_zhushou_info: '锁定技.每回合限一次,你受到的伤害后获得一点护甲.',
						hs_yj_xiandeng_info: '锁定技.出牌阶段,你使用的第一张【杀】不计入次数且无距离限制.',
						hs_zenhui: '谮毁',
						hs_zenhui_info: '其他角色的牌不因使用或打出而进入弃牌堆后,若此牌可以使用,你可以令其视为对你指定的另一名在其攻击范围内的角色使用此牌牌.',
						hs_jiaojin: '骄矜',
						hs_jiaojin_info: '锁定技.当你与回合外失去手牌或装备区的牌时,你可以弃置一名其他角色区域内的一张牌.若这些牌为不因使用或打出而进入弃牌堆或被其他角色获得,你获得这些牌和弃牌堆中弃置的牌.',
						hs_xiawang: '侠望',
						hs_congru: '从儒',
						hs_jiancai: '荐才',
						hs_wuyan: '无言',
						hs_xiawang_info: '当你或一名本回合未对其发动过此技能的其他角色受到来源不是你的伤害后,你可以摸一张牌,若你拥有伤害性牌,你须对伤害来源使用一张伤害性牌,该受到伤害角色可以交给你一张牌,反之你展示所有手牌.',
						hs_congru_info: '觉醒技.一轮游戏结束时,若你在本轮中造成过伤害,你将体力回复至体力上限并获得『荐才』.',
						hs_jiancai_info: '一轮游戏开始时,若你未阵亡,你可以观看随机5张未加入游戏的武将牌,令一名角色获得其中你指定的一张武将牌上所有技能直至你下一次发动此技能.',
						hs_wuyan_info: '使命技.①游戏开始时,你须选择一名其他角色,当其成为除其以外角色使用牌的目标时,你可以交给其一张牌.②失败:当你或其受到不小于体力值的伤害时,你将势力改为<魏>并取消之,你失去『侠望』并移出游戏,直至其死亡或触发游戏结束结算.',
						hs_xianzhen: '陷阵',
						hs_xianzhen_info: '出牌阶段限一次,你可以弃置所有手牌并选择一名其他角色,按照你指定的顺序对其使用其中的伤害性牌(无视距离、不计次数且无视防具).你每以此法使用一张牌造成伤害,你摸一张牌并获得其区域内的一张牌.',
						hs_jinjiu: '禁酒',
						hs_jinjiu_info: '锁定技.当你获得【酒】或有【酒】进入弃牌堆后,你销毁之并摸两张牌;当你未使用【酒】时,非卡牌伤害以及转化牌和虚拟牌对你无效,你的牌被转化时或被限制时取消之,手牌数大于你的角色不能响应你使用的牌.',
						hs_jianhui: '奸回',
						hs_xiongshu: '凶竖',
						hs_jianhui_info: '当你使用伤害性牌时,你可以交给一名其他角色任意张牌,你获得其等量牌且其代替你成为此牌的使用者.',
						hs_xiongshu_info: '其他角色造成伤害时,若目标角色是你或此时不是其的回合,你可以获得其等量的牌,若此时不是是其的回合,你对其造成一点伤害.',
						hs_wusheng: '武圣',
						hs_wusheng_info: '当你使用【杀】结算后,若此【杀】目标未受到伤害,你可以对其使用一张【杀】.当你需要打出【杀】时,你可以视为打出了【杀】.',
						hs_weifan: '围樊',
						hs_weifan_info: '当你使用非虚拟的伤害性牌时/你于回合外使用或打出【杀】后,你可以视为对目标角色/当前回合角色使用一张【水淹七军】.你获得其他角色因【水淹七军】弃置的牌并视为【杀】且不计入手牌上限.',
						hs_zhuihun: '追魂',
						hs_zhuihun_info: '锁定技.当你死亡后,你复活且移出游戏.当你移出游戏后,你可以选择一其他名角色,于其每个回合结束后获得一个回合且使用牌无距离和次数限制.',
						hs_yanzhu: '宴诛',
						hs_yanzhu_info: '出牌阶段限一次,你可以展示任意张牌并令其他角色依次选择是否获得其中一张牌,你可以令其中任意名选择获得牌的角色依次选择一项:①交给你装备区所有牌(至少1张);②受到你造成的一点伤害.你使用未被其他角色获得的展示牌无距离限制且不计入使用次数.',
						hs_xingxue: '兴学',
						hs_xingxue_info: '一名角色回合结束时,若X>0,你可以令至多X名角色依次摸X张牌并将X/2张牌置于牌堆顶或牌堆底.(向下取整,X为你于本回合失去的牌数(若为你的回合,则为不因使用而失去的牌数))',
						hs_zhaofu: '诏缚',
						hs_zhaofu_info: '主公技,锁定技.所有非吴势力角色视为在所有吴势力角色的攻击范围内.',
						hs_renzheng: '仁政',
						hs_renzheng_info: '一名角色被除你以外的其他角色获得/于你或其回合外被弃置(若该角色为你,则改为失去)手牌或装备区的牌后,你可以交给获得牌的角色/当前回合角色一张牌并令其选择一项:①交给失去牌的角色其失去牌的等量的手牌并令你摸一张牌;②令你摸等量牌并受到失去牌的角色造成的一点伤害.',
						hs_xianshou: '仙授',
						hs_xianshou_info: '锁定技,一轮游戏开始时,你从场上/弃牌堆/牌堆/游戏外获得【太平要术】与【九节杖】并装备之,若你未加入<黄巾>,则加入之.',
						hs_chuandao: '传道',
						hs_chuandao_info: '弃牌阶段开始时,你可以选择任意名已受伤的其他角色并展示至少等量张牌,这些角色依次选择一张获得之,其中未加入<黄巾>的角色加入<黄巾>.一名角色加入<黄巾>后,你与其各摸一张牌.',
						hs_tiangong: '天公',
						hs_tiangong_info: '一名角色造成伤害时,①若其已加入<黄巾>,你可以将此伤害改为雷电伤害.②若此伤害为雷电伤害,你摸一张牌.',
						hs_huangtian: '黄天',
						hs_huangtian_info: '主公技,限定技.出牌阶段,你可以令所有加入<黄巾>的角色减少一点体力上限,你分配等量的雷电伤害.',
						hs_fuzhou: '符咒',
						hs_fuzhou_info: '游戏开始时,你将牌堆顶X张牌置于你的武将牌上,称为<符>(X为场上势力数).当你获得牌后,你可以将任意张牌作为<符>置于一名角色的武将上(每名角色每回合限一次).拥有<符>的角色可以将Y+Z张<符>当作任意基本牌或普通锦囊牌使用或打出(Y为视为牌的牌名字数,Z为本回合此技能的使用次数).',
						hs_jishi: '济世',
						hs_jishi_info: '锁定技.一名角色获得<符>后,若其未加入<黄巾>,则其加入之.一名角色加入<黄巾>后,你与其各将牌堆顶一张牌作为<符>置于武将牌上.当一名已加入<黄巾>的角色回复体力后,若其体力值不小于你,你摸一张牌.',
						hs_jijun: '集军',
						hs_jijun_info: '锁定技.①游戏开始时,你加入<黄巾>,并将牌堆顶X张牌置于武将牌上,称为<方>(X为全场角色数,<方>的数量至多为36).②一名角色受到伤害或<黄巾>角色造成伤害后,若其未加入<黄巾>,则其加入之;反之其可以将一张牌作为<方>置于你的武将牌上并摸一张牌.③一名角色加入<黄巾>后,其摸一张牌,你将牌堆顶一张牌作为<方>置于你的武将牌上.',
						hs_fangtong: '方统',
						hs_fangtong_info: '①你造成伤害时,你可以弃置当前伤害值数量的<方>令此伤害+1,可重复此流程.②其他加入<黄巾>的角色于你的回合或仅对你使用牌时,你可以弃置等于此牌的牌名字数+1的<方>令此牌失效.',
						hs_hengzheng: '横征',
						hs_hengzheng_info: '锁定技.游戏开始时,你的体力上限+全场总体力上限/3(向上取整).你使用牌无距离限制,你失去的牌视为销毁之.一名角色的结束阶段,你移除一层【酒】(不足则减少一点体力上限)并获得本回合其他角色失去过且不在牌堆或弃牌堆中或你的区域中的所有牌.',
						hs_jiuchi: '酒池',
						hs_jiuchi_info: '锁定技.①所有角色的【酒】效果不会因为回合结束而失效.②一名角色濒死时可以移除一层【酒】效果并回复一点体力.③一名角色受到伤害后,其于该回合结束时获得等量【酒】效果,若该角色不为你,你获得等量【酒】效果.④你使用的【杀】只附带一半的【酒】效果(向下取整).',
						hs_baoling: '暴凌',
						hs_baoling_info: '主公技.一名非群雄角色受到伤害时,若其区域内有牌,你可以移除X层【酒】效果,增加X点体力上限并获得其X张牌.(X为其此次受到的伤害值)',
						hs_qizhou: '绮胄',
						hs_qizhou_info: '当你失去装备区牌时,你摸一张牌并保留此装备的技能效果直至你再次失去装备区相同位置的牌.其他角色失去装备牌或装备区的牌后,你记录其随机一个技能于此牌上,若此牌进入了弃牌区,则你获得之.你装备记录有技能的牌后视为拥有该技能,直至你失去此装备.',
						hs_kangge: '亢歌',
						hs_kangge_info: '出牌阶段开始时,你可以带着大家一起唱歌.(你令场上所有角色组成循环,从你开始依次将一张点数符合条件的牌置于牌堆顶并令计数+1,若此牌为红/黑,下家点数须大于/小于此牌(若为你,则改为大于等于/小于等于).否则其退出循环并翻转下家点数条件,循环内的角色各摸(计数/循环内的角色数)张牌且使用时无距离限制(若为你则多摸一张)并清零计数.当循环只剩你或你退出循环时结束循环.)',
						hs_zizu: '剚足',
						hs_zizu_info: '限定技.一名角色回合结束时,若你已受伤,你可以表演<剚足>.(你获得<血滂>效果直至濒死.你失去<血滂>效果时,回复体力至体力上限并摸等量牌,获得『奋音』.)',
						hs_lz_xuepang: '血滂',
						hs_lz_xuepang_info: '锁定技.一名角色回合开始时,你增加一点体力上限并失去一点体力,若是你的回合,你跳过出牌和弃牌阶段.',
						hs_fenyin: '奋音',
						hs_fenyin_info: '锁定技.你因『亢歌』获得的牌不计入手牌上限且使用无次数限制.你发动『亢歌』后可以与一名其他角色交换不因『亢歌』而获得的手牌.',
						hs_zhucang: '筑仓',
						hs_zhengu: '镇骨',
						hs_zhucang_info: '锁定技.你的手牌上限+全场总体力值/3(向上取整).当你获得牌后,若你的手牌数大于你的手牌上限,你将手牌弃置至手牌上限.当你受到伤害时,若你的手牌上限大于0,你增加等量体力上限并防止之,你并减少1点手牌上限.',
						hs_zhengu_info: '回合结束时,你可以令至多两名角色获得以下效果中的不同项直至你的下回合开始:①当其或你获得牌后,若其手牌中非<镇骨>牌数大于你的手牌数,其将手牌中随机等于差值数量的非<镇骨>牌标记为镇骨牌,其无法使用或打出<镇骨>牌,其失去次效果时弃置所有镇骨牌;②当其或你失去牌后,若其手牌数小于你的手牌上限,其将手牌摸置至你的手牌上限.',
						hs_chongjing: '冲静',
						hs_chongjing_info: '锁定技.你于每回合首次获得牌时进行判定.本回合你获得的牌视为与该判定牌相同点数和花色.当你失去一张牌后,若你没有与该牌本身花色相同的手牌,你摸一张牌.',
						hs_huanlong: '浣龙',
						hs_huanlong_info: '准备阶段,你可以展示所有手牌,如此做,你本回合出牌阶段使用【杀】的次数上限、手牌上限+此时你手牌中花色数-1.',
						hs_shiming: '逝命',
						hs_shiming_info: '你受到伤害改为减少一点体力上限.你的体力上限变化后,你可以进行一次判定并获得判定牌,你观看牌堆顶判定牌点数张牌并分配其中与判定牌颜色相同的牌.',
						hs_qizuo: '奇佐',
						hs_qizuo_info: '一名其他角色成为除你以外角色使用牌的唯一目标后(本回合和上回合已发动过的花色除外),你可以弃置X张与之花色不同的牌并将此牌目标改为你.(X为本回合你发动此技能的次数+1)',
						hs_chouce: '筹策',
						hs_chouce_info: '使命技.①锁定技.游戏开始时,你选择一名角色,其增加一点体力上限,你将体力上限调整至与其相同.②成功:你死亡时,取消之,你查看5张未登场的魏势力武将,选择其中一张替换你的武将牌,你将体力与体力上限调整至该武将牌上的数值.③失败:该角色死亡后,你将体力回复至体力上限,失去『奇佐』.',
						hs_dunxing: '遁形',
						hs_dunxing_info: '一轮游戏开始时,你可以幻化为场上一名其他角色并选择是否与其交换位置.此轮游戏结束或你进入濒死时,你取消幻化并选择是否与幻化对象交换位置.',
						hs_sanchen: '三陈',
						hs_sanchen_info: '每回合限3次,出牌阶段,你可以将手牌中一张基本牌或普通锦囊牌置入一名角色的一个空装备栏或替换其装备栏内的一件装备.当一名角色失去装备区的非装备牌时,你可以从牌堆中获得一张同名牌并摸一张牌.',
						hs_wuku: '武库',
						hs_wuku_info: '①当一名角色不因『武库①』而造成伤害/受到伤害/回复体力后,若其的武器栏/防具栏/宝物栏存在非装备牌,其视为使用一张不计次数的此牌或令你摸一张牌.②摸牌/弃牌阶段结束时,若你的进攻/防御坐骑栏存在非装备牌,你可以视为使用一张不计次数的此牌.',
						hs_pozhu: '破竹',
						hs_pozhu_info: '锁定技.①你的攻击距离+X你与其他角色的距离-Y/其他角色与你的距离+Z(X,Y,Z为你对应装备栏的非装备牌数).②一名角色于你的回合内进入或脱离濒死时,你额外获得一个随机的装备栏,若你拥有技能『三陈』,你本回合『三陈』的使用次数+1.',
						hs_wenji: '问计',
						hs_wenji_info: '出牌阶段结束,或当你受到伤害时,你可以选择一名未被选中的目标角色,直至你的下回合开始,当你需要使用或打出牌时,你可以观看这些角色的手牌并如手牌般使用或打出.你的下个回合开始前,你查看牌堆顶X张牌并将这些牌分配给这些角色.(X为场上此次因此技能失去的牌数)<br><br><br>〖联动效果〗当场上存在<§诸葛亮>的『空城』技能时,其<疑兵>牌于此技能中视为手牌,当你此技能选中其时,该角色无法成为你使用牌的目标.',
						hs_tunjiang: '屯江',
						hs_tunjiang_info: '你的回合开始时,你可以对自己造成一点伤害并选择跳过此回合的一个阶段,若此做,直至下一轮游戏你的回合开始,你于与该阶段同名的阶段受到伤害时,防止之.',
						phaseZhunbei: '准备阶段',
						phaseJudge: '判定阶段',
						phaseDraw: '摸牌阶段',
						phaseUse: '出牌阶段',
						phaseDiscard: '弃牌阶段',
						phaseJieshu: '结束阶段',
						hs_mingfa: '明伐',
						hs_mingfa_info: '回合结束时,你可以展示所有手牌并记录其中的基本牌和锦囊牌.你可以将一张手牌视为以此法记录的牌使用;其他角色可以将一张手牌视为以此法记录的牌对你使用.若X≠1,你摸∣X-1∣张牌;X>1,你清除该视为牌的记录;若X>2,此牌使用者失去一点体力.(X为此使用牌与视为牌点数/花色/牌名中不同的项数)',
						hs_rongbei: '戎备',
						hs_rongbei_info: '出牌阶段结束时,你可以选择一名角色,令其随机两个空装备栏随机使用牌堆中一张装备牌.你的手牌上限+装备区牌数.',
						hs_kongcheng: '空城',
						hs_jifeng: '祭风',
						hs_qixing: '七星',
						hs_kongcheng_info: '出牌阶段结束时,若你的『空城』牌数不大于全场存活角色数+7,你可以将所有手牌置于武将牌上.当你受到其他角色造成的伤害后,若此技能未在结算中,你展示任意张手牌和所有『空城』牌并对其使用其中的所有伤害性牌,将剩余牌置于牌堆顶并从牌堆底获得等量+1张『空城』牌.(此期间你使用牌无视防具)',
						hs_jifeng_info: '结束阶段,你可以翻开牌堆顶7张牌,若其中红/黑色牌较少,你令至多等量名角色获得一个<狂风>/<大雾>标记,你获得黑/红色牌(至多为全场角色数).有<狂风>标记的角色受到火焰伤害时,其移去一个<狂风>标记并令次伤害+1.有<大雾>标记的角色受到非雷电伤害时,其移去一个<大雾>标记并防止此伤害.',
						hs_qixing_info: '锁定技.你进入濒死时,你翻开牌堆顶7张牌,若其中有【桃】或【酒】,或其中任意张牌点数之和为49,你将体力回复至1点.',
						hs_jiaozi: '骄姿',
						hs_jiaozi_info: '锁定技,你的第X个回合开始时,若X的开方为整数,你的体力上限与体力值翻倍,此后你受到的伤害翻倍,摸牌阶段摸牌数+2,造成的伤害+1.',
						hs_fuji: '伏骑',
						hs_fuji_info: '锁定技.当你使用牌时,手牌数/体力值/攻击距离小于你的角色不能响应此牌/防具失效/非锁定技失效.',
						hs_gushe: '鼓舌',
						hs_gushe_info: '①出牌阶段限一次,或当你受到伤害后,你可以摸一张牌并与其他所有拥有手牌的角色同时拼点,若你赢的次数大于没赢的次数,你回复一点体力或摸两张牌,否则你弃置没赢次数张牌.②你参与拼点结束时,获得处理区中所有拼点牌,你须将等量手牌分配给所有拼赢你的其他角色,若无符合条件的角色则改为弃置等量手牌.',
						hs_wangxue: '王学',
						hs_wangxue_info: '锁定技.当你获得牌时,若其中非装备牌的数量不小于二,你须选择其中一张,这些非装备牌均视为此牌名.',
						hs_ansong: '闇诵',
						hs_shanxi: '擅檄',
						hs_lvming: '驴鸣',
						hs_ansong_info: '锁定技.出牌阶段开始时,若不为你的首个出牌阶段,你声明你上个出牌阶段开始时(发动此技能前)拥有的手牌,你从弃牌堆中获得与其中相符的项牌名相同的牌各一张,若存在不符或缺漏的项,你记录之.你无法使用或打出此技能记录的牌名的手牌.',
						hs_shanxi_info: '结束阶段或当你受到伤害后,你可以将一张手牌置于一名其他角色的武将牌旁,称为<檄>,若此做,你摸一张牌.该角色于你的下一个出牌阶段结束时或你阵亡后获得此牌并失去X点体力(X为其手牌中与此牌点数或花色相同的牌的数量).此期间其无法使用、打出或弃置与你『闇诵』记录牌名相同的牌.',
						hs_lvming_info: '出牌阶段限一次,你可以学驴叫,从牌堆获得一张基本牌,若此牌名已被『闇诵』记录,则清除之.你阵亡后,其他未拥有此技能的角色可以学驴叫,获得此技能.',
						hs_qiaobian: '巧变',
						hs_zhilve: '知略',
						hs_qiaobian_info: '回合结束时或当你受到伤害后,你可以摸一张牌,或将从下一回合开始本局游戏你的回合阶段次序中某一阶段永久变为另一阶段.',
						hs_zhilve_info: '锁定技.你的一个阶段结束后,若X>2,你须弃置一张牌;若X=2,你可以移动场上的一张牌;若X=3,你可以弃置至多两名角色的各一张手牌;若X>3,你可以视为使用一张无视距离且不记次数的【杀】.(X为你本轮游戏中该阶段进行过的次数)',
						hs_qinguo: '勤国',
						hs_qinguo_info: '转换技.阳/阴:当你使用或打出牌未指定其他角色为目标结算完成后,你可以令一名其他角色/你获得并展示牌堆顶/底一张牌,若这两张牌颜色不同,你可以视为使用一张无距离限制且无视防具的【杀】(不计入使用次数),反之你摸一张牌.<br><br><br>〖联动效果〗当场上存在<§步骘>的『定叛』技能时,你将<视为使用一张无距离限制的【杀】>改为<与一名其他角色进行一次〖定叛·谋弈〗>.',
						hs_zhiti: '治体',
						hs_zhiti_info: '锁定技.当你使用牌同时指定你和其他角色作为目标后,你摸一张牌,此牌对你无效.你使用牌结算完成后,若此牌目标数等于你的体力值,你回复一点体力.',
						hs_yingjia: '迎驾',
						hs_xieling: '挟令',
						hs_xionglve: '雄略',
						hs_jianxiong: '奸雄',
						hs_yingjia_info: '锁定技.当不为你的上家的其他角色指向你时,若此时为你的回合,其将座位移至你的上家,否则你将座位移至其的下家.你摸牌阶段摸牌数+你上家的已损生命值.',
						hs_xieling_info: '1级:每种花色限一次,你可以将手牌中一种花色的所有牌当作【号令天下】使用.<br><br>2级:出牌阶段限一次,你可以视为使用一张【号令天下】.你使用的【号令天下】中的<可以>改为<须>.你获得其他角色因【号令天下】弃置的牌且不计入手牌上限.',
						hs_xionglve_info: '觉醒技.你的上家进入濒死时,你增加一点体力上限并失去『迎驾』,若你拥有技能『挟令』则修改之.若其身份为<主公>,则你与其交换身份,与你原身份相同的角色将身份改为<忠臣>,其他角色将身份改为<反贼>.',
						hs_jianxiong_info: '主公技.限定技.你的回合开始时,你在牌堆中加入5张【号令天下】.',
						hs_xuanlve: '旋略',
						hs_yongjin: '勇进',
						hs_xuanlve_info: '当你弃置牌或将牌置入弃牌堆后,你可以将这些牌当作无视距离且不计次数的【杀】使用.若此【杀】造成伤害,你可以移动场上一张牌.',
						hs_yongjin_info: '当你使用伤害性牌指定其他角色作为目标后,你可以弃置其至多两张牌,你获得其中与使用牌类型不同的牌,并将剩余牌置于牌堆顶.',
						hs_zhiman: '制蛮',
						hs_xinzhan: '心战',
						hs_zhiman_info: '每回合各限X次,当你使用牌造成伤害时/受到卡牌造成的伤害时,你可以防止之并获得此牌.(X为你本回合发动另一项的次数+1).',
						hs_xinzhan_info: '当有伤害被防止时,你可以展示一名其他角色的一张手牌,若为红你获得之,反之你摸一张牌并交给其一张牌.',
						hs_jieying: '结营',
						hs_xieming: '携民',
						hs_jieying_info: '出牌阶段限一次,你可以将任意张牌分配给任意其他角色,你与这些角色各获得X枚<连营>标记(X为其获得的牌数).每回合限Y次,拥有<连营>标记的角色使用基本牌或普通锦囊牌时,其可以令另一名拥有<连营>标记的角色也成为此牌目标(Y为其拥有的<连营>标记数).<br><br>※拥有<连营>标记的角色视为处于横置状态,其取消横置视为移去一枚<连营>标记,其移去所有<连营>标记时取消横置.',
						hs_xieming_info: '锁定技.准备阶段,或当你受到伤害后,所有拥有<连营>标记的角色移去一枚<连营>标记并可以选择回复一点体力或摸两张牌.',
						hs_fuhan: '复汉',
						hs_fuhan_info: '主公技.拥有<连营>标记的角色出牌阶段限一次,其可以将任意张牌交给你,你与其各获得一枚<连营>标记并摸一张牌.',
						hs_xiujiu: '休咎',
						hs_yuming: '预命',
						hs_xiujiu_info: '锁定技,你防止无来源的伤害且判定效果反转.一名角色的结束阶段结束时,你须展示一张手牌,你展示弃牌堆中每名其他角色本回合失去过且与此牌点数或花色相同的牌,并依次当作随机的延时锦囊牌置入其判定区.',
						hs_yuming_info: '一名角色判定失败时,你可以摸一张牌.当一名角色跳过阶段或受到无来源的伤害时,你可以反转一名其他角色本局游戏一种延时锦囊牌的判定效果(仅限本体卡牌).',
						hs_binggang: '秉纲',
						hs_binggang_info: '锁定技,牌堆顶前两张红色牌与牌堆底前两张黑色牌对你可见,你可以将这些牌如手牌般使用或打出.你使用的红/黑色牌于当前回合结束时置于牌堆底/顶.',
						hs_ee: '谔谔',
						hs_ee_info: '其他角色使用牌时,若此牌指定了目标且不为所有角色,你可以打出一张同名牌,若此牌目标中包含你,则你令一名不为此牌目标的角色代替你成为此牌目标,反之则你代替目标中的一名角色成为此牌目标.',
						hs_zhenshuo: '震朔',
						hs_aoni: '傲睨',
						hs_zhenshuo_info: '蓄力技(2/6).①结束阶段开始时,若你的手牌数不是全场最多,你可以令所有其他角色选择交给你一张【闪】或令你获得1点蓄力值.②出牌阶段,你可以消耗2点蓄力值,将任意X张牌当作【万箭齐发】使用,若受到此牌伤害的角色数Y小于X,你摸X+Y张牌.',
						hs_aoni_info: '主公技,锁定技,蓄力技(2/3).①你使用牌指定体力值大于你的角色后,获得点蓄力值.②你使用牌指定手牌数大于你的角色时,消耗1点蓄力值,获得其一张手牌.',
						hs_qice: '奇策',
						hs_qice_info: '当你使用或打出牌后,若本回合未以此法获得该点数的牌,你可以弃置所有手牌,依次展示弃牌堆顶非此次置入的牌(至多12张),若展示牌为该点数,则你停止展示并获得所有展示的牌,且本回合结束阶段开始时你可以将弃牌堆顶一张牌当任意锦囊牌使用(除智囊外每种牌名限一次).',
						hs_zishu: '自书',
						hs_zishu_info: '锁定技.游戏开始时,你获得一个专属牌堆.当你摸牌时,若专属牌堆有牌,则改为从专属牌堆摸牌且数量+1(不足则由牌堆补齐).回合结束时,若你的专属牌堆为空,则你弃置所有手牌,收回并重置专属牌堆,若收回了场上的牌,你摸等量牌.',
						hs_xiemu: '协穆',
						hs_xiemu_info: '当你于回合外不因使用或此技能失去手牌后,你可以摸2张牌,将一张牌交给当前回合角色.若此做,你的下个准备阶段可以摸一张牌并弃置一张牌.',
						hs_shoulu: '授箓',
						hs_shoulu_info: '出牌阶段每名角色限一次,你可以选择一名角色并弃置一张牌,你从未登场且与其势力相同武将牌的随机三个出牌阶段主动技中选择一个演示之(无视发动条件),若此做,你将该技能制成符箓交给该角色,反之你摸一张牌.',
						hs_fuqu: '符祛',
						hs_fuqu_info: '锁定技.你制成的符箓使用后,你摸一张牌,你获得符箓灰烬并制成符水置于你的武将牌上.你可以将符水当作任意基本牌对你或对应势力的角色使用.',
						hs_zhaojie: '昭揭',
						visible_hs_zhaojie: '昭揭',
						hs_zhaojie_info: '锁定技.你失去过的牌标记为<昭揭>牌,你的<昭揭>牌对其他角色可见.你使用点数不大于/不小于弃牌堆中该花色牌数的非转化<昭揭>手牌时,你获得其他角色一张牌/额外结算一次.',
						hs_tuishi: '推弑',
						hs_tuishi_info: '当你获得其他角色的牌,或被其他角色弃置牌时,你可以将其中一张牌交给其.你每以此法交出两张牌,你摸一张牌.其每获得你两张牌,其的下一个结束阶段开始时,你可以对其造成1点伤害,随机获得其两张牌.',
						hs_shechao: '摄朝',
						hs_shechao_info: '准备阶段,你可以将弃牌堆的牌标记为<昭揭>牌并洗牌,若此做,你将手牌置入弃牌堆并获得至多等量角色各一张手牌,你与这些角色各摸一张牌.',
						hs_pitian: '辟田',
						hs_pitian_info: '锁定技.你拥有一片田圃.当你造成或受到伤害后,你视为进行三次施肥;当你不因使用而失去手牌后,你视为进行一次施肥.你的回合开始时,你进行一次收获.',
						hs_fenghuo: '丰获',
						hs_fenghuo_info: '你进入濒死时,可以进行收获.①装备区牌数>3;②体力值>3;手牌数>6;你每满足一项,你的施肥效果增加30%.若均不满足,你收获后保留10%.',
						hs_zhuixi: '追袭',
						hs_zhuixi_info: '限定技.出牌阶段,你可以将一张手牌当作不可被〖无懈可击〗响应的〖决斗〗对你与其距离不为1且外体力值不为最小的一名角色使用,你与获胜的角色各摸一张牌,失败的角色获得并复原此技能.',
						hs_mochou: '殁仇',
						hs_mochou_info: '一名角色受到另一名其他角色造成的伤害后,其可以选择其的一个技能(主公技,限定技,觉醒技,隐匿技、使命技等特殊技能除外),当你对该伤害来源造成伤害后,你获得该技能直至该角色阵亡或你对其造成了伤害,若你已有该技能,则你与其各摸两张牌.一名角色阵亡时,你获得其未发动的限定技.',
					},
				};
				for (var i in huashui.character) {
					huashui.character[i][4].push(`ext:划水池/image/character/${i}.jpg`);
					huashui.character[i][4].push(`die:ext:划水池/audio/${i}.mp3`);
					if (lib.config.extension_划水池_hs_hidden) huashui.character[i][4].add('hiddenSkill');
				}
				lib.config.characters.add('huashui');
				lib.config.all.characters.add('huashui');
				lib.translate.huashui_character_config = '<span data-nature=waterm style="font-family:hs_zhukai,xiaozhuan,xingkai,fangsong;color: deepskyblue">划水池</span>';
				return huashui;
			});
			game.import('card', function () {
				var huashui_card = {
					name: 'huashui_card',
					connect: true,
					card: {
						//赵云
						hs_shashan: {
							nature: ['thunder', 'fire', 'kami', 'ice'],
							type: 'basic',
							fullskin: true,
							notarget: true,
							nodelay: true,
							content() { },
							ai: {
								order: 0.1,
								basic: {
									useful: [7, 6, 5, 4, 3, 2, 1],
									value: [7, 6, 5, 4, 3, 2, 1],
								},
								tag: {},
							},
						},
						//黄忠
						hs_chixue: {
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							distance: {
								attackFrom: -2,
							},
							ai: {
								equipValue(card, player) {
									if (player.hp == player.maxHp) return 2.5;
									return 5;
								},
								basic: {
									equipValue: 3,
								},
							},
							skills: ['hs_chixue_skill'],
							onLose() {
								player.loseHp();
							},
						},
						//张角
						hs_jiujie: {
							fullskin: true,
							type: 'equip',
							subtype: 'equip1',
							distance: {
								attackFrom: -2,
							},
							ai: {
								basic: {
									equipValue: 4.5,
								},
							},
							skills: ['hs_jiujie_skill'],
							filterLose(card, player) {
								return player.isDamaged();
							},
							onLose() {
								player.recover();
							},
						},
					},
					skill: {
						hs_chixue_skill: {
							trigger: {
								source: 'damageSource',
							},
							equipSkill: true,
							forced: true,
							group: 'hs_chixue_skill_lose',
							filter(event, player) {
								return event.player.isAlive() && event.parent.name == 'sha';
							},
							content() {
								trigger.player.hs_addMark('hs_chixue_skill_bleed', trigger.num);
								if (!trigger.player.hasSkill('hs_chixue_skill_bleed')) trigger.player.addSkill('hs_chixue_skill_bleed');
							},
							subSkill: {
								lose: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									filter(event, player) {
										return !player.getHistory('sourceDamage').length || player.getHistory('sourceDamage').length < 4;
									},
									content() {
										player.loseHp();
									},
								},
								bleed: {
									intro: {
										name: '流血',
										name2: '流血',
										content: '有#层流血效果',
									},
									marktext: '流血',
									trigger: {
										global: 'phaseBegin',
									},
									forced: true,
									filter(event, player) {
										return player.hasMark('hs_chixue_skill_bleed');
									},
									content() {
										'step 0';
										player.loseHp();
										player.removeMark('hs_chixue_skill_bleed');
										('step 1');
										if (!player.hasMark('hs_chixue_skill_bleed')) player.removeSkill('hs_chixue_skill_bleed');
									},
								},
							},
						},
						hs_jiujie_skill: {
							intro: {
								name: '九节杖',
								content: '本回合已发动【九节杖】#次',
							},
							marktext: '九节',
							equipSkill: true,
							trigger: {
								source: ['damageBegin1', 'recoverBegin'],
							},
							logTarget: 'player',
							filter(event, player) {
								if (event.name == 'recover' && event.player.getDamagedHp() <= 1) return false;
								return player.countMark('hs_jiujie_skill') < player.hp;
							},
							check(event, player) {
								var att = get.attitude(player, event.player);
								if (event.name == 'recover') return att > 0;
								else {
									var eff = get.damageEffect(event.player, player, player, event.nature);
									return att > 0 && eff > 0;
								}
							},
							content() {
								player.hs_addMark('hs_jiujie_skill', 1, false);
								trigger.num++;
							},
						},
					},
					translate: {
						hs_shashan: '杀/闪',
						hs_shashan_info: '一张没有什么用的牌,但是在手牌中可以当作【杀】或【闪】使用或打出.',
						hs_chixue: '赤血刀',
						hs_chixue_skill: '赤血刀',
						hs_chixue_skill_bleed: '流血',
						hs_chixue_info: '锁定技.当你使用杀造成伤害时,目标角色获得等量<流血>效果.结束阶段,若你本回合造成的伤害小于4,或当你失去装备区的【赤血刀】时,你失去一点体力.(流血效果:一名角色回合开始时,你清除一层流血效果并失去一点体力.)',
						hs_jiujie: '九节杖',
						hs_jiujie_skill: '九节杖',
						hs_jiujie_info: '每回合限X次,当你造成回复/伤害时,你可以令次回复/伤害+1(X为你的体力值).当你失去装备区的【九节杖】时,你回复一点体力.',
					},
				};
				var extname = _status.extension;
				for (var cardName in huashui_card.card) {
					var card = huashui_card.card[cardName];
					if (card.fullskin) {
						card.image = `ext:${extname}/image/card/${cardName}.jpg`;
					}
					if (card.audio === true) card.audio = `ext:${extname}/audio/card`;
				}
				lib.config.cards.add('huashui_card');
				lib.config.all.cards.add('huashui_card');
				lib.translate.huashui_card_card_config = '<span data-nature=waterm style="font-family:hs_zhukai,xiaozhuan,xingkai,fangsong;color: deepskyblue">划水池</span>';
				return huashui_card;
			});
		},
		config: {
			gengxin: {
				name: '<span data-nature=woodmm style="color: greenyellow">当前版本:bata4.2</span>',
				init: '1',
				intro: '点击查看扩展版本的更新内容',
				item: {
					1: '<span data-nature=orangemm>更新内容</span>',
				},
				textMenu(node, link) {
					lib.setScroll(node.parentNode);
					node.parentNode.style.transform = 'translateY(-100px)';
					node.parentNode.style.height = '500px';
					node.parentNode.style.width = '500px';
					switch (link) {
						case '1':
							node.innerHTML =
								'<span data-nature=orangemm>更新内容</span><br><br>' +
								'2024.2.18  bata4.2<br><span data-nature=watermx>0.郑浑上线<br>    <郡县罹涝,当兴陂遏,开稻田,此丰民之本.></span><br><span data-nature=watermx>1.蔡阳上线<br>    <此击透骨,一解骨肉之痛!></span><br>2.调整了<span data-nature=watermx>曹仁</span>、<span data-nature=firemx>黄忠</span>、<span data-nature=metalmm>张宝</span>、<span data-nature=watermx>戏志才</span>、<span data-nature=watermx>张郃</span>、<span data-nature=firemx>马良</span>、<span data-nature=keymm>司马昭</span>武将技能强度;<br>3.适配本体v1.10.7.1;<br>4.精简了部分代码,修复了部分bug;<br>5.调整了部分技能逻辑,优化了部分技能ai;<br><br>' +
								'10.18  bata4.1<br><span data-nature=metalmm>0.张陵上线<br>    <神丹结,龙虎现,天地惊,鬼神泣></span><br><span data-nature=keymm>1.司马昭上线<br>    <国器本当能者谋之,何需遮遮掩掩></span><br>2.调整了<span data-nature=firemx>马良</span>武将技能强度;<br>3..适配本体v1.10.3.1;<br>5.优化了部分技能ai;<br><br>' +
								"8.19  bata4.0<br><span data-nature=firemx>0.马良上线<br>    <诸位皆是我大汉之栋梁></span><br><span data-nature=keymm>1.杜预半重做;</span><br>2.调整了<span data-nature=firemx>黄忠</span>武将技能强度;<br>3.修复了<span data-nature=firemx style='color: firebrick'>无尽远征</span>模式自由选将失效的问题;<br>4.适配本体v1.9.125;<br>5.优化了部分技能ai;<br><br>" +
								'7.27  bata3.9<br><span data-nature=watermx>0.荀攸上线<br>    <奇策本天成,妙手偶得之></span><br><span data-nature=firemx>1.紫虚上人半重做;</span><br><span data-nature=watermx>2.曹操半重做;</span><br><span data-nature=metalmm>3.张角半重做;</span><br>4.调整了<span data-nature=watermx>曹仁</span>、<span data-nature=firemx>魏延</span>武将技能强度;<br>5.优化了部分技能ui界面;<br><br>' +
								'7.1  bata3.8<br><span data-nature=keymm>0.傅玄上线<br>    <秉纲而目自张,执本而末自从></span><br><span data-nature=woodm>1.袁绍上线<br>    <乘敌乱而击之,必大获全胜></span><br>2.调整了<span data-nature=firemx>许靖</span>、<span data-nature=metalmm>华佗</span>、<span data-nature=firemx>刘琦</span>、<span data-nature=firemx>关羽</span>、<span data-nature=woodm>骆统</span>,<span data-nature=watermx>董卓</span>、<span data-nature=watermx>曹操</span>、<span data-nature=firemx>周群</span>、<span data-nature=metalmm>麹义</span>、<span data-nature=woodm>吕岱</span>武将技能强度;<br>3.修复了部分情况<span data-nature=firemx>刘备</span>『结营』吞牌的问题;<br>4.修复了部分情况<移出游戏>无法发动、无法返回的问题;<br>5.修复了<span data-nature=woodm>留赞</span>『亢歌』、<span data-nature=metalmm>刘表</span>『宗室』add抛异常的问题;<br>6.修复了部分情况mod不生效的问题;<br>7.优化了部分技能ai,精简了部分代码;<br><br>' +
								'5.12  bata3.7<br><span data-nature=firemx>0.刘备上线<br>    <兵起三路七十万众,尽扫六郡八十一州></span><br><span data-nature=woodm>1.凌统上线<br>    <风急,帆骤,吾军心奋,敌将胆颤也></span><br><span data-nature=firemx>2.马谡上线<br>    <兵法谙熟于心,取胜千里之外></span><br><span data-nature=firemx>3.紫虚上人上线<br>    <贫道乃山野废人,岂知休咎？></span><br><span data-nature=metalmm>4.颜良文丑重做上线<br>    <你我兄弟齐上,焉有一合之将!哥哥说的在理!></span><br><span data-nature=woodm>5.陆逊重做上线<br>    <业火映东水,吴志绽敌营></span><br>6.调整了<span data-nature=watermx>曹操</span>、<span data-nature=woodm>徐盛</span>、<span data-nature=firemx>黄忠</span>、<span data-nature=woodm>孙鲁班</span>武将技能强度;<br>7.修复了部分情况印牌类技能无法使用【无懈可击】的问题;<br>8.修复了部分情况<span data-nature=metalmm>董卓</span>『酒池』会被锁技能的问题;<br>9.优化了部分技能ai,精简了部分代码;<br><br>' +
								"4.30  bata3.6<br><span data-nature=watermx>0.曹操上线<br>    <大忠似奸,留一世功名,前人赞,今人叹,后人羡></span><br><span data-nature=woodm>1.吕岱上线<br>    <以器任干职,以心辅君国></span><br><span data-nature=firemx>2.赵云重做上线<br>    <一腔忠勇匡时难,勇熄狼烟汉祚兴></span><br>3.<span data-nature=firemx style='color: firebrick'>无尽远征</span>模式上线;<br>4.调整了<span data-nature=woodm>吕蒙</span>、<span data-nature=firemx>徐庶</span>、<span data-nature=firemx>周群</span>、<span data-nature=keymm>羊祜</span>、<span data-nature=woodm>徐盛</span>、<span data-nature=firemx>诸葛亮</span>、<span data-nature=watermx>邓艾</span>、<span data-nature=metalmm>张梁</span>、<span data-nature=firemx>魏延</span>、<span data-nature=watermx>夏侯惇</span>、<span data-nature=metalmm>张琪瑛</span>、<span data-nature=woodm>留赞</span>、<span data-nature=woodm>骆统</span>、<span data-nature=watermx>郝昭</span>、<span data-nature=watermx>王粲</span>武将技能强度;<br>5.修复了部分情况<span data-nature=woodm>孙休</span>『宴诛』重复发动的问题;<br>6.优化并精简了部分代码;<br>7.优化了部分技能ai;<br>8.新增部分联动效果;<br><br>" +
								'4.1  bata3.5<br><span data-nature=watermx>0.张郃上线<br>    <用兵之法,在于度势定策而巧为之></span><br>1.调整了<span data-nature=firemx>法正</span>、<span data-nature=firemx>杨仪</span>、<span data-nature=firemx>黄忠</span>、<span data-nature=metalmm>董卓</span>、<span data-nature=firemx>诸葛亮</span>、<span data-nature=watermx>戏志才</span>武将技能强度;<br>2.修复了部分情况<span data-nature=watermx>戏志才</span>『逝命』不生效的问题;<br>3.修复了部分情况回复体力数值错误的问题;<br>4.优化并精简了部分代码;<br>5.优化了部分技能ai;<br>6.新增部分联动&&彩蛋效果;<br><br>' +
								'3.18  bata3.4<br><span data-nature=watermx>0.王粲上线<br>    <率彼东南路,将定一举勋></span><br><span data-nature=woodm>1.孙鲁班重做上线<br>    <尔等欺君罔上,还敢抵赖？></span><br>2.调整了<span data-nature=watermx>夏侯惇</span>、<span data-nature=firemx>法正</span>、<span data-nature=woodm>贺齐</span>、<span data-nature=watermx>曹仁</span>、<span data-nature=metalmm>刘表</span>、<span data-nature=metalmm>董卓</span>武将强度;<br>3.修复了<span data-nature=woodm>孙权</span>『制衡』无法将牌置于牌堆的问题;<br>4.修复了<span data-nature=metalmm>张琪瑛</span>『浣龙』计数不正确的问题;<br>5.修复了<span data-nature=keymm>羊祜</span>『明伐』无法印制延时锦囊的问题;<br>6.修复了<span data-nature=woodm>骆统</span>没有立绘的问题;<br>7.修复了部分情况<一轮游戏结束>时机发动错误的问题;<br>8.调整了<span data-nature=metalmm>左慈</span>『遁形』的实现方式;<br>9.<span data-nature=metalmm>颜良文丑</span>『并战』改用本体<协力>;<br>10.修复了<span data-nature=firemx>刘琦</span>『问计』可以给阵亡角色发牌的问题;<br>11.优化了部分技能ai;<br><br>' +
								'3.11  bata3.3<br><span data-nature=metalmm>0.麹义上线<br>    <白马？哼!定叫他有来无回!></span><br><span data-nature=watermx>1.王朗上线<br>    <公既知天命,识时务,为何要兴无名之师,犯我疆界？></span><br>2.调整<span data-nature=metalmm>董卓</span>、<span data-nature=metalmm>张宝</span>、<span data-nature=metalmm>张琪瑛</span>武将技能强度;<br>3.修复了<span data-nature=watermx>钟会</span>『挟术』不计数的问题;<br>4.修复了<span data-nature=watermx>钟会</span>『挟术』、<span data-nature=metalmm>张宝</span>『符咒』可以印制延时锦囊的问题;<br>5.修复了<span data-nature=watermx>夏侯惇</span>『啖睛』描述与实际效果不符的问题;<br>6.优化了部分技能ai;<br><br>' +
								'3.2  bata3.2<br><span data-nature=keymm>0.羊祜上线<br>    <吾等不妨克日而战,以行君子之争></span><br><span data-nature=firemx>1.诸葛亮上线<br>    <老夫独守此城,何惧万马千军></span><br><span data-nature=firemx>2.法正半重做上线<br>    <用许靖之名望,揽天下之贤士></span><br>3.调整了<span data-nature=watermx>戏志才</span>武将技能强度;<br>4.调整了部分<游戏开始时>时机技能的发动顺序;<br>5.优化了部分技能ai;<br><br>' +
								'2.11  bata3.1<br><span data-nature=keymm>0.杜预上线<br>    <倾荡之势已成,石城尽在眼下></span><br><span data-nature=firemx>1.刘琦上线<br>    <申生在内而危,重耳在外而安></span><br><span data-nature=firemx>2.法正半重做上线<br>    <用许靖之名望,揽天下之贤士></span><br>3.调整了<span data-nature=watermx>钟会</span>『挟术』、<span data-nature=metalmm>张宝</span>『符咒』的卡牌适用范围;<br>4.优化了部分技能ai;<br><br>' +
								'1.13  bata3.0<br><span data-nature=metalmm>0.张琪瑛上线<br>    <水遇寒为冰,精逢神成炁></span><br><span data-nature=watermx>1.戏志才上线<br>    <身受创兮终不悔,愿以我血铸魏垣></span><br><span data-nature=metalmm>2.左慈上线<br>    <幻化之术谨之,为政者自当为国为民></span><br><span data-nature=firemx>3.徐庶重做上线<br>    <吾,誓不为汉贼献一策></span><br>4.调整<span data-nature=watermx>郝昭</span>、<span data-nature=woodm>徐盛</span>武将技能强度;<br>5.修复了<span data-nature=watermx>邓艾</span>『屯田』、<span data-nature=watermx>钟会</span>『挟术』技能无法发动的问题;<br>6.修复了部分情况<span data-nature=woodm>贺齐</span>『绮胄』发动后无法获得牌的问题;<br>7.优化了部分技能ai;<br><br>' +
								'1.7  bata2.9<br><span data-nature=watermx>0.郝昭上线<br>    <三千铁衣裹新鬼,十万旧冢镇孤城></span><br>1.调整<span data-nature=woodm>骆统</span>、<span data-nature=metalmm>张梁</span>、<span data-nature=watermx>曹叡</span>、<span data-nature=firemx>黄忠</span>、<span data-nature=metalmm>张角</span>、<span data-nature=metalmm>张宝</span>、<span data-nature=metalmm>董卓</span>武将技能强度;<br>2.修复了ai使用<span data-nature=watermx>曹冲</span>『称象』吞牌的问题;<br>3修复了ai使用<span data-nature=watermx>钟会</span>『挟术』卡死的问题;<br>4.调整了本池结构和文件路径;<br>5.优化了部分技能ai;<br><br>' +
								'2023.1.3  bata2.8<br><span data-nature=woodm>0.留赞上线<br>    <铁马长刀兮贼破胆,血染白发兮定乾坤></span><br>1.调整<span data-nature=woodm>贺齐</span>、<span data-nature=watermx>曹冲</span>、<span data-nature=firemx>黄忠</span>、<span data-nature=watermx>钟会</span>武将技能强度;<br>2.修复了部分情况<span data-nature=firemx>黄忠</span>、<span data-nature=watermx>钟会</span>报错的问题;<br>3.优化了部分技能UI;<br>4.精简了部分代码;<br>5.优化了部分技能ai;<br><br>' +
								'12.31  bata2.7<br><span data-nature=woodm>0.贺齐上线<br>    <我的船队,要让全建业城的人都看见></span><br><span data-nature=watermx>1.曹仁重做上线<br>    <任你横行霸道,我自岿然不动></span><br>2.调整<span data-nature=metalmm>董卓</span>、<span data-nature=woodm>庞统</span>、<span data-nature=firemx>许靖</span>武将技能强度;<br>3.修复了<span data-nature=firemx>关羽</span>死亡后反复死亡的问题;<br>4.修复了<span data-nature=metalmm>张梁</span>『集军』目标错误的问题;<br>5.修复了<span data-nature=metalmm>董卓</span>『横征』、<span data-nature=keymm>王元姬</span>『尚俭』、<span data-nature=metalmm>高顺</span>『陷阵』可能导致的手牌空缺的问题;<br>6.适配了部分扩展;<br>7.优化了部分技能ai;<br><br>' +
								'12.27  bata2.6<br><span data-nature=metalmm>0.董卓上线<br>    <留守河东,诸位当慷慨解囊,以慰三军><br>1.张梁半重做上线<br>    <合方三十六统,散太平大道></span><br>2.调整<span data-nature=metalmm>张宝</span>、<span data-nature=watermx>曹丕</span>武将技能强度;<br>3.修复了<span data-nature=metalmm>张角</span>『传道』选牌数量限制错误的问题;<br>4.修复了与部分其他扩展的兼容性问题;<br>5.优化了部分技能ai;<br><br>' +
								'12.20  bata2.5<br><span data-nature=metalmm>0.张宝上线<br>    <符咒晚天成,术缚随人意><br>1.张梁上线<br>    <合方三十六统,散太平大道><br>2.张角半重做上线<br>    <苍天已死,黄天当立,岁在甲子,天下大吉></span><br>3.调整<span data-nature=watermx>夏侯惇</span>、<span data-nature=keymm>贾充</span>武将技能强度;<br>4.修复了<span data-nature=watermx>夏侯惇</span>『刚烈』、<span data-nature=firemx>徐庶</span>『无言』技能描述与技能效果不符的问题;<br>5.修复了<span data-nature=watermx>夏侯惇</span>『啖睛』减攻击距离不生效的问题;<br>6.修复了<span data-nature=firemx>徐庶</span>『无言』技能标记不显示的问题;<br>7.调整了部分技能描述;<br>8.优化了部分技能ai;<br><br>' +
								'12.15  bata2.4<br><span data-nature=metalmm>0.张角上线<br>    <苍天已死,黄天当立,岁在甲子,天下大吉></span><br>1.调整<span data-nature=woodm>孙休</span>、<span data-nature=watermx>邓艾</span>、<span data-nature=woodm>骆统</span>武将技能强度;<br>2.修复了部分情况下打开扩展报错的问题;<br>3.修复了<span data-nature=woodm>孙休</span>『宴诛』锁定从玩家开始结算的问题;<br>4.修复了部分情况武将原画不显示的问题;<br>5.剥离了本池非武将扩展部分;<br>6.调整了部分技能逻辑,优化了部分技能ai;<br><br>' +
								'12.12  bata2.3<br><span data-nature=woodm>0.骆统上线<br>    <苟所闻见,夕不待旦.岂能因私废公乎></span><br>1.修复了<span data-nature=watermx>曹仁</span>每轮结束时多扣体力的问题;<br>2.修复了部分情况下<span data-nature=watermx>夏侯惇</span>『啖睛』无法发动的问题;<br>3.修复了部分情况下<一轮游戏结束>阶段重复触发的问题;<br>4.整合了武将骨骼;<br>5.修改了武将标识隐藏的实现方式;<br>6.修改了部分武将原画;<br>7.初步适配了国战模式;<br>8.调整了部分技能逻辑,优化了部分技能ai;<br><br>' +
								'12.8  bata2.2<br><span data-nature=woodm>0.孙休上线<br>    <推杯换盏之际,正是诛灭逆臣之时></span><br>1.调整<span data-nature=metalmm>高顺</span>武将技能强度;<br>2.修复了<span data-nature=watermx>曹叡</span>『恢拓』与部分扩展不兼容的问题;<br>3.修复了部分情况下<span data-nature=metalmm>贾诩</span>插画不显示的问题;<br>4.修复了部分情况<span data-nature=firemx>黄忠</span>报错的问题;<br>5.修复了部分标记无法正常清除的问题;<br>6.调整了部分技能逻辑,优化了部分技能ai;<br><br>' +
								'11.28  bata2.1<br><span data-nature=firemx>0.关羽上线<br>    <酒且斟下,关某片刻便归></span><br><span data-nature=metalmm>1.贾诩重做上线<br>    <我自冷眼看世界,毋问天下是与非></span><br>2.调整<span data-nature=woodm>孙鲁班</span>、<span data-nature=keymm>王元姬</span>、<span data-nature=firemx>徐庶</span>、<span data-nature=woodm>陆逊</span>武将技能强度;<br>3.修复了部分情况下图片不显示的问题;<br>4.修复部分兼容性bug;<br>5.优化了部分技能ai;<br><br>' +
								'11.22  bata2.0<br><span data-nature=keymm>0.贾充上线<br>    <吾佐奉朝日暖煦,又何惮落月残辉？></span><br>1.调整<span data-nature=metalmm>高顺</span>、<span data-nature=woodm>陆逊</span>、<span data-nature=woodm>庞统</span>武将技能强度;<br>2.更换<span data-nature=woodm>陆逊</span>武将插画;<br>3.调整<span data-nature=keymm>王元姬</span>武将势力;<br>4.调整部分武将技能描述;<br>5.修复部分兼容性bug;<br>6.优化了部分技能ai;<br><br>' +
								'11.20  bata1.9<br><span data-nature=metalmm>0.高顺上线<br>    <将众整齐,每战必克></span><br><span data-nature=woodm>1.吕蒙重做上线<br>    <君子藏器于身,待时而动></span><br>2.调整<span data-nature=watermx>王元姬</span>、<span data-nature=woodm>孙鲁班</span>武将技能强度;<br>3.修复了部分情况下由于<span data-nature=firemx>徐庶</span>不在游戏中而导致的结算bug;<br>4.部分技能适配幸运星模式;<br>5.优化了部分技能ai;<br><br>' +
								'11.13  bata1.8<br><span data-nature=firemx>0.徐庶上线<br>    <吾,誓不为汉贼献一策></span><br>1.调整<span data-nature=watermx>于禁</span>『镇御』技能以兼容其他部分扩展;<br>2.修复了<span data-nature=woodm>孙鲁班</span>对死亡角色发动『谮毁』的问题;<br>3.修复了<span data-nature=woodm>孙鲁班</span>『谮毁』可以选择角色自身的问题;<br>4.修复了<span data-nature=watermx>于禁</span>『毅重』描述与实际效果不符的问题;<br>5.修复了托管下<span data-nature=firemx>许靖</span>『誉虚』无限重复发动的问题;<br>6.优化了部分技能ai;<br><br>' +
								'11.11  bata1.7<br><span data-nature=woodm>0.孙鲁班上线<br>    <尔等欺君罔上,还敢抵赖></span><br><span data-nature=watermx>1.于禁重做上线<br>    <奉法行令,事上之节,岂有宽宥之理></span><br><span data-nature=watermx>2.曹丕半重做上线<br>    <远步踏青草,独吊旧人坟></span><br>3.优化了部分技能ai;<br><br>' +
								'11.4  bata1.6<br><span data-nature=watermx>0.于禁上线<br>    <奉法行令,事上之节,岂有宽宥之理></span><br>1.调整<span data-nature=metalmm>颜良文丑</span>、<span data-nature=firemx>周群</span>技能强度;<br>2.<span data-nature=watermx>王元姬</span>『谦冲』增加卡牌标记;<br>3.修复了部分情况<span data-nature=woodm>孙权</span>『救援』卡死的问题;<br>4.部分技能适配幸运星模式;<br>5.优化了部分技能ai;<br><br>' +
								'10.31  bata1.5<br><span data-nature=woodm>0.庞统上线<br>    <昔人乘鹤去,我执魂幡来></span><br>1.调整<span data-nature=firemx>魏延</span>、<span data-nature=woodm>徐盛</span>、<span data-nature=watermx>夏侯惇</span>技能强度;<br>2.修复了部分情况下<span data-nature=firemx>周群</span>『天算』、<span data-nature=watermx>曹丕</span>『行殇』报错的问题;<br>3.修复了角色回合内死亡后<span data-nature=watermx>王元姬</span>行殇的问题;<br>4.修复了<span data-nature=watermx>王元姬</span>部分情况『尚俭』记录错误的问题;<br>5.优化了部分技能ai;<br><br>' +
								'10.26  bata1.4<br><span data-nature=woodm>0.徐盛上线<br>    <这长江天险后,便是江东铁壁!></span><br><span data-nature=watermx>1.王元姬上线<br>    <百姓尚处寒饥之困,吾等不可奢费财力></span><br>2.调整<span data-nature=metalmm>刘表</span>、<span data-nature=firemx>魏延</span>技能强度;<br>3.修复了部分情况<span data-nature=watermx>曹叡</span>恢拓多回复体力的问题;<br>4.修复了回合外<span data-nature=firemx>魏延</span>『狂骨』不结算的问题;<br><br>' +
								'10.19  bata1.3<br><span data-nature=firemx>0.周群上线<br>    <汝既持签问卜,亦当应天受命></span><br><span data-nature=watermx>1.邓艾上线<br>    <屯田储粮以备战,胜望在握></span><br>2.调整<span data-nature=woodm>陆逊</span>、<span data-nature=firemx>许靖</span>、<span data-nature=metalmm>颜良文丑</span>技能强度;<br>3.修复了<span data-nature=watermx>曹仁</span>每轮结束时多扣体力的问题;<br>4.修复了双将模式<span data-nature=firemx>杨仪</span>武将皮肤替换错误的问题;<br>5.优化了<span data-nature=metalmm>华佗</span>、<span data-nature=watermx>曹丕</span>技能ai;<br><br>' +
								'10.15  bata1.2<br><span data-nature=woodm>0.孙权上线<br>    <朕受天命,当统九州之业以开万世></span><br>1.调整<span data-nature=woodm>吕蒙</span>、<span data-nature=watermx>曹叡</span>、<span data-nature=firemx>杨仪</span>技能强度;<br>2.增加部分武将gif动皮;<br>3.增加部分武将骨骼动皮;<br>4.调整部分技能指向逻辑;<br><br>' +
								'10.9  bata1.1<br><span data-nature=firemx>0.杨仪上线<br>    <我岂能与魏延这种莽夫共事？></span><br>1.部分技能增加技能效果记录;<br>2.调整部分武将技能ai;<br>3.调整部分技能逻辑;<br><br>' +
								'10.8  bata1.0<br><span data-nature=firemx>0.魏延上线<br>    <我自横扫天下,蔑视群雄又如何？></span><br>1.修复了<span data-nature=watermx>曹叡</span>非主公身份可以使用主公技的问题<br>2.修复了<span data-nature=woodm>吕蒙</span>ai救助敌人和放弃使命的问题;<br>3.修复了<span data-nature=metalmm>颜良文丑</span>额外摸牌不生效的问题;<br>4.修改了部分技能的使用逻辑,优化了部分技能ai;<br><br>' +
								'10.4  bata0.9<br><span data-nature=woodm>0.吕蒙上线<br>    <君子藏器于身,待时而动></span><br><span data-nature=firemx>1.许靖上线<br>    <为政者当沙汰秽浊,显拔幽滞,以顺民心></span><br>2.调整<span data-nature=metalmm>华佗</span>武将技能强度;<br>3.调整<span data-nature=firemx>法正</span>技能以形成联动;<br><br>' +
								'9.30  bata0.8<br><span data-nature=metalmm>0.华佗上线<br>    <鬼门关前能救死,奈何桥上可扶伤></span><br>1.增加武将阵亡语音;<br>2.调整<span data-nature=woodm>陆逊</span>、<span data-nature=watermx>曹叡</span>武将技能强度;<br>3.修复了<span data-nature=watermx>曹叡</span>技能锁定技描述与实际效果不对应的问题;<br>4.修复了<span data-nature=woodm>陆逊</span>『连营』技能部分情况没有语音的问题;<br><br>' +
								'9.26  bata0.7<br><span data-nature=watermx>0.曹仁上线<br>    <任你横行霸道,我自岿然不动></span><br>1.调整<span data-nature=firemx>法正</span>武将强度;<br>2.修复了<span data-nature=firemx>法正</span>受到非卡牌伤害时技能『恩怨』效果和描述不对应的问题;<br>3.修复了<span data-nature=watermx>曹丕</span>『放逐』、<span data-nature=watermx>夏侯惇</span>『刚烈』,<span data-nature=metalmm>贾诩</span>『度势』可以选择自己为目标的问题;<br>4.修复了<更换背景>功能不显示背景的问题;<br><br>' +
								'9.24  bata0.6<br><span data-nature=firemx>0.法正上线<br>    <用许靖之名望,揽天下之贤士></span><br>1.调整<span data-nature=watermx>曹冲</span>武将强度,增加部分说明;<br>2.修复了<span data-nature=watermx>曹冲</span>『仁心』不显示的问题;<br>3.修复了部分情况<span data-nature=watermx>曹丕</span>『行殇』不发动的问题;<br>4.修复了<更换背景>功能不显示背景的问题;<br><br>' +
								'9.21  bata0.5<br><span data-nature=watermx>0.曹冲上线<br>    <称物以载之,则校可知矣></span><br>1.添加部分武将露头包;<br>2.部分调整<span data-nature=woodm>陆逊</span>的武将强度;<br>3.修复了<span data-nature=firemx>黄忠</span>没有手牌时无法发动『烈弓』的问题;<br>4.添加了更换背景功能;<br><br>' +
								'9.19  bata0.4<br><span data-nature=woodm>0.陆逊上线<br>    <业火映东水,吴志绽敌营></span><br><span data-nature=firemx>1.黄忠上线<br>    <老夫张弓一射,便叫敌军立毙一将!></span><br>2.部分调整<span data-nature=watermx>曹丕</span>、<span data-nature=metalmm>颜良文丑</span>、<span data-nature=watermx>钟会</span>、<span data-nature=metalmm>贾诩</span>的技能强度;<br>3.修复了<span data-nature=watermx>诸葛诞</span>『征吴』强制响应的问题;<br>4.修复了<span data-nature=watermx>曹丕</span>『放逐』摸牌数量错误的问题;<br><br>' +
								'9.16  bata0.3<br><span data-nature=metalmm>0.颜良文丑上线<br>    <你我兄弟并肩,谁人能敌？定可一战而擒!></span><br>1.部分调整<span data-nature=watermx>曹丕</span>的技能强度;<br>2.修复了<span data-nature=watermx>曹叡</span>偶见『恢拓』不触发的问题;<br>3.修复了<span data-nature=watermx>曹丕</span>部分情况显示错误语音错误;<br><br>' +
								'9.15  bata0.2<br><span data-nature=watermx>0.曹丕上线<br>    <远步踏青草,独吊旧人坟></span><br>1.微调了<span data-nature=watermx>曹叡</span>的技能效果与技能描述;<br>2.修复了ai使用<span data-nature=watermx>钟会</span>不会卖血的问题;<br><br>' +
								'9.14  bata0.1<br>发布bata测试;<br><br>' +
								'2022.5.20  alpha0.1<br>发布alpha测试.';
							break;
					}
				},
			},
			mingxie: {
				name: '鸣谢',
				init: '1',
				intro: '点击查看',
				item: {
					1: '<span data-nature=watermx>鸣谢</span>',
					2: '感谢『落樱』等提供的部分武将设计!<br>感谢『Rintim』、『Bauxite_Al』等的代码指导!<br>',
				},
				onclick(item) {
					game.saveConfig('extension_划水池_mingxie', '1');
					ui.update();
				},
			},
			fq: {
				name: '提供建议/问题反馈',
				init: '1',
				intro: '遇到bug/有想加入本池的武将设计/对本池武将强度平衡优化建议,等等 都可以直接联系',
				item: {
					1: '<span data-nature=woodmm>交流群</span>',
					2: '群号:744492032',
					3: '<img style=width:200px src=extension/划水池/image/qqqun.jpg>',
					4: '<span data-nature=metalmm>联系qq</span> 2624221534',
				},
				onclick(item) {
					game.saveConfig('extension_划水池_fq', '1');
					ui.update();
				},
			},
			teb1: {
				name: '<p align=\'center\'><span style="font-size:18px;color: gold;">---------------------</span></p>',
				clear: true,
				nopointer: true,
			},
			jieMark: {
				name: '界标记样式',
				intro: '设置本池界标记样式',
				init: 'huashui_logo1.jpg',
				item: {
					hide: '关闭',
					'huashui_logo1.jpg': '<img style=width:20px src=extension/划水池/image/card/huashui_logo1.jpg>',
					'huashui_logo2.jpg': '<img style=width:20px src=extension/划水池/image/card/huashui_logo2.jpg>',
				},
			},
			printCardRange: {
				name: '印卡技能范围扩展',
				intro: '开启后本池的印卡技能范围将不局限于游戏牌堆.',
				init: false,
			},
			hsGuoZhan: {
				name: '国战适配',
				intro: '开启后本池武将将适配国战模式.',
				init: false,
			},
			hs_hidden: {
				name: '开局隐匿',
				intro: '开启后本池武将将于开局时隐匿.',
				init: false,
			},
			teb_0: {
				name: '<p align=\'center\'><span style="font-size:18px;color: greenyellow;"> ------------- </span></p>',
				clear: true,
				nopointer: true,
			},
			win: {
				name: '赢!',
				intro: '某种意义上来讲,你永远不会输',
				init: false,
			},
			packShow: {
				name: '包名显示',
				intro: '开启后将在武将称号栏显示武将包名.',
				init: true,
			},
			jishuscore: {
				name: '技术分统计',
				intro: '开启后将统计技术分.',
				init: true,
			},
			countShow: {
				name: '统计显示',
				intro: '开启后对局内将显示角色获得失去牌和伤害的统计.',
				init: true,
			},
			background: {
				name: '背景图片',
				intro: '更换背景图片',
				init: 'hide',
				item: {
					hide: '关闭',
					0: '随机',
				},
			},
			backmusic: {
				name: '背景音乐',
				intro: '更换背景音乐',
				init: 'off',
				item: {
					off: '关闭',
					0: '随机',
				},
			},
			teb_1: {
				name: '<p align=\'center\'><span style="font-size:18px;color: orangered;">---------------------</span></p>',
				clear: true,
				nopointer: true,
			},
			setCharge: {
				name: '蓄力技修复',
				intro: '开启此功能后重启生效.开启后蓄力技修复为最大值相加.',
				init: false,
			},
			teb_2: {
				name: '<p align=\'center\'><span style="font-size:18px;color: indianred;">-------一些尝试-------</span></p>',
				clear: true,
				nopointer: true,
			},
			huashui_mode: {
				name: '<span data-nature=firemx style="color: firebrick">无尽远征</span>',
				intro: '启用无尽远征模式',
				init: true,
			},
			luandou: {
				name: '身份乱斗',
				intro: '在人数大于4的身份标准场中,将忠臣、反贼、内奸的数量改为随机.',
				init: false,
			},
			teb_3: {
				name: '<p align=\'center\'><span style="font-size:18px;color:springgreen;">-------------</span></p>',
				clear: true,
				nopointer: true,
			},
		},
		package: {
			intro: "<img style=height:100px src=extension/划水池/image/logo.jpg><br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '划水fran',
			version: 'bata4.2',
			oldversion: 'bata4.1',
			changeLog: '<br>2024.2.18  bata4.2<br><span data-nature=watermx>0.郑浑上线<br>    <郡县罹涝,当兴陂遏,开稻田,此丰民之本.></span><br><span data-nature=watermx>1.蔡阳上线<br>    <此击透骨,一解骨肉之痛!></span><br>2.调整了<span data-nature=watermx>曹仁</span>、<span data-nature=firemx>黄忠</span>、<span data-nature=metalmm>张宝</span>、<span data-nature=watermx>戏志才</span>、<span data-nature=watermx>张郃</span>、<span data-nature=firemx>马良</span>、<span data-nature=keymm>司马昭</span>武将技能强度;<br>3.适配本体v1.10.7.1;<br>4.精简了部分代码,修复了部分bug;<br>5.调整了部分技能逻辑,优化了部分技能ai.<br><br>',
		},
	};
});

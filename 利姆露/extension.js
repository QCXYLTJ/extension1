import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '利姆露',
		content(config, pack) {
			if (!lib.config.kj) lib.config.kj = [];
			if (!lib.config.bs) lib.config.bs = ['slm_lml', 'slm_j'];
			lib.arenaReady.push(function () {
				slm.bs();
				slm.kj();
			});
			const slm = {
				bs() {
					var character = '';
					for (var i = 0; i < lib.config.bs.length; i++) {
						var avatar = lib.config.bs[i];
						if (lib.character[avatar]) {
							if (!lib.config.kj.includes(avatar)) {
								character += '<option value=' + avatar + '>' + lib.translate[avatar] + '</option>';
							}
						}
					}
					lib.extensionMenu.extension_利姆露.bs.name = '请选择需要添加快捷的拟态<br><select id="bsl" size="1" style="width:180px">' + character + '</select>';
				},
				kj() {
					var character = '';
					for (var i = 0; i < lib.config.kj.length; i++) {
						var avatar = lib.config.kj[i];
						if (lib.character[avatar]) {
							character += '<option value=' + avatar + '>' + lib.translate[avatar] + '</option>';
						}
					}
					lib.extensionMenu.extension_利姆露.kj.name = '请选择需要移除快捷的拟态<br><select id="kjl" size="1" style="width:180px">' + character + '</select>';
				},
				update(node) {
					var ui = node.parentNode.children;
					ui[2].innerHTML = lib.extensionMenu.extension_利姆露.bs.name;
					ui[4].innerHTML = lib.extensionMenu.extension_利姆露.kj.name;
				},
			};
			(lib.extensionMenu.extension_利姆露.deleteAll.onclick = function () {
				if (confirm('是否重置快捷栏？')) {
					lib.config.kj = [];
					game.saveConfig('kj', lib.config.kj);
					slm.bs();
					slm.kj();
					slm.update(this);
					alert('重置成功');
				}
			});
			(lib.extensionMenu.extension_利姆露.removekj.onclick = function () {
				var country = document.getElementById('kjl');
				if (country.options[country.selectedIndex]) {
					var str = country.options[country.selectedIndex].value;
				} else {
					alert('没有可以移除快捷的拟态');
					return;
				}
				lib.config.kj.remove(str);
				game.saveConfig('kj', lib.config.kj);
				slm.bs();
				slm.kj();
				slm.update(this);
				alert('移除成功');
			});
			lib.extensionMenu.extension_利姆露.addkj.onclick = function () {
				var country = document.getElementById('bsl');
				if (country.options[country.selectedIndex]) {
					var str = country.options[country.selectedIndex].value;
				} else {
					alert('没有可以添加快捷的拟态');
					return;
				}
				lib.config.kj.push(str);
				game.saveConfig('kj', lib.config.kj);
				slm.bs();
				slm.kj();
				slm.update(this);
				alert('添加成功');
			};
		},
		precontent() { },
		config: {
			bs: {
				name: '',
				clear: true,
				nopointer: true,
			},
			addkj: {
				name: '添加',
				clear: true,
			},
			kj: {
				name: '',
				clear: true,
				nopointer: true,
			},
			removekj: {
				name: '移除',
				clear: true,
			},
			deleteAll: {
				name: '重置快捷拟态',
				clear: true,
			},
		},
		package: {
			character: {
				character: {
					slm_lml: ['none', 'qun', 1, ['slm_nt', 'slm_ts', 'slm_chaozaisheng'], ['zhu',]],
					slm_j: ['female', 'shen', 4, ['slm_lhfs', 'slm_hyzs'], []],
				},
				translate: {
					slm_lml: '利姆露',
					slm_j: '静',
				},
			},
			skill: {
				skill: {
					slm_nt: {
						content(player) {
							if (player.name != 'slm_lml') return;
							var dialog = ui.create.div('.dialog.hidden', ui.window);
							dialog.contentContainer = ui.create.div('.content-container', dialog);
							dialog.content = ui.create.div('.content', dialog.contentContainer);
							dialog.bar1 = ui.create.div('.bar.top', dialog);
							dialog.bar2 = ui.create.div('.bar.bottom', dialog);
							dialog.setBackgroundImage('extension/利姆露/nitai.jpg');
							dialog.style.backgroundColor = 'blue';
							dialog.style.height = '60%';
							player.nitai = dialog;
							var list = [];
							ui.create.caption('快捷', dialog.content);
							var avatar;
							for (var i = 0; i < lib.config.kj.length; i++) {
								avatar = lib.config.kj[i];
								if (lib.character[avatar]) {
									list.push(avatar);
								}
							}
							var buttons1 = ui.create.buttons(list, 'character', dialog.content);
							ui.create.caption('常态', dialog.content);
							list.length = 0;
							for (var i = 0; i < lib.config.bs.length; i++) {
								avatar = lib.config.bs[i];
								if (lib.character[avatar]) {
									if (!lib.config.kj.includes(avatar)) {
										list.push(avatar);
									}
								}
							}
							var buttons2 = ui.create.buttons(list, 'character', dialog.content);
							var buttons = buttons1.concat(buttons2);
							for (var i = 0; i < buttons.length; i++) {
								buttons[i].onclick = function () {
									if (this.link != player.name) {
										player.classList.remove('minskin');
										player.setAvatar(player.name, this.link);
										player.removeAdditionalSkill('slm_nt');
										player.addAdditionalSkill('slm_nt', lib.character[this.link][3]);
									} else {
										player.classList.add('minskin');
										player.setAvatar(player.name, player.name);
										player.removeAdditionalSkill('slm_nt');
									}
								};
							}
						},
						init(player) {
							game.saveConfig('bs', lib.config.bs);
							player.classList.add('minskin');
							lib.skill.slm_nt.content(player);
							player.onclick = function () {
								if (player.name != 'slm_lml' || game.me != player) return;
								if (!player.nitai) {
									lib.skill.slm_nt.content(player);
								} else {
									if (player.shownitai) {
										player.nitai.classList.add('hidden');
										player.shownitai = false;
									} else {
										player.nitai.classList.remove('hidden');
										player.shownitai = true;
									}
								}
							};
						},
					},
					slm_lhfs: {
						ai: {
							threaten: 0.5,
							effect: {
								target(card, player, target, current) {
									return 0.5;
								},
							},
						},
						trigger: {
							player: 'phaseJieshuBegin',
							target: 'useCardToTargeted',
						},
						filter(event, player) {
							if (event.name == 'useCardToTargeted') return event.player != player && event.card;
							return true;
						},
						logTarget(event, player) {
							if (event.player != player) return event.player;
							return false;
						},
						forced: true,
						content() {
							if (trigger.name == 'useCardToTargeted') {
								trigger.player.damage('fire');
							} else {
								player.damage('fire');
							}
						},
					},
					slm_hyzs: {
						trigger: {
							source: 'damageEnd',
						},
						filter(event, player) {
							return event.player.hp <= 1 && event.player.isAlive();
						},
						content() {
							trigger.player.die();
						},
						ai: {
							presha: true,
						},
					},
					slm_ts: {
						trigger: {
							source: 'damageBegin1',
						},
						filter(event, player) {
							return event.player.hp <= 1 && event.skill != 'slm_ts' && event.player != player;
						},
						content() {
							'step 0';
							trigger.cancel();
							trigger.player.damage(2).set('skill', 'slm_ts');
							('step 1');
							if (trigger.player.classList.contains('dead') && !lib.config.bs.includes(trigger.player.name)) lib.config.bs.push(trigger.player.name);
							game.saveConfig('bs', lib.config.bs);
						},
						ai: {
							presha: true,
						},
					},
					slm_rr: {
						trigger: {
							player: 'damageBegin2',
						},
						forced: true,
						content() {
							trigger.num--;
						},
					},
					slm_chaozaisheng: {
						trigger: {
							player: 'changeHp',
						},
						forced: true,
						filter(event, player, name) {
							return event.num < 0;
						},
						content() {
							player.recover();
						},
						ai: {
							maixie: true,
							maixie_hp: true,
						},
					},
				},
				translate: {
					slm_nt: '拟态',
					slm_nt_info: '',
					slm_lhfs: '烈火焚身',
					slm_lhfs_info: '锁定技,回合结束时,你受到一点火焰伤害;其他角色对你使用牌后,其受到一点火焰伤害',
					slm_hyzs: '火焰斩杀',
					slm_hyzs_info: '终结技,当你造成伤害后,若对方的体力值不大于一,则你可以对其追加斩杀效果',
					slm_ts: '吞噬',
					slm_ts_info: '终结技,你对体力值不大于一的角色造成的伤害附带斩杀效果',
					slm_rr: '柔软',
					slm_rr_info: '锁定技,你受到的伤害减一',
					slm_chaozaisheng: '超再生',
					slm_chaozaisheng_info: '锁定技,当你的体力减少时,你回复一点体力.',
				},
			},
			intro: `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>`,
			author: '看破一切',
			version: '1.0',
		},
	};
});

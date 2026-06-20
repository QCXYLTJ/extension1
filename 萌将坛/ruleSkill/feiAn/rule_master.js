'use strict';
window.scqh = function (lib, game, ui, get, ai, _status) {
	var list = {
		skill: {
			_scqh_damage: {
				forced: true,
				trigger: {
					player: 'damageBefore',
				},
				content() {
					trigger.setContent(lib.skill[event.name].damage);
				},
				damage() {
					'step 0';
					event.forceDie = true;
					if (event.unreal) event.goto(4);
					event.trigger('damageBegin1');
					('step 1');
					event.trigger('damageBegin2');
					('step 2');
					event.trigger('damageBegin3');
					('step 3');
					event.trigger('damageBegin4');
					('step 4');
					if (['fire', 'thunder', 'ice'].includes(event.nature)) {
						if (player.hujia > 0 && !player.hasSkillTag('nohujia') && event.nature != 'ice') {
							game.broadcastAll(function (num) {
								if (lib.config.background_audio) game.playAudio('effect/hujia_damage_' + event.nature + (num > 1 ? '2' : ''));
							}, num);
						} else {
							game.broadcastAll(function (num) {
								if (lib.config.background_audio) game.playAudio('effect/damage_' + event.nature + (num > 1 ? '2' : ''));
							}, num);
						}
					} else {
						if (player.hujia > 0 && !player.hasSkillTag('nohujia')) {
							game.broadcastAll(function (num) {
								if (lib.config.background_audio) game.playAudio('effect/hujia_damage' + (num > 1 ? '2' : ''));
							}, num);
						} else {
							game.broadcastAll(function (num) {
								if (lib.config.background_audio) game.playAudio('effect/damage' + (num > 1 ? '2' : ''));
							}, num);
						}
					}
					var str = event.unreal ? '视为受到了' : '受到了';
					if (source) str += '来自' + get.translation(source) + '的';
					str += get.cnNumber(num) + '点';
					if (event.nature) str += get.translation(event.nature) + '属性';
					str += '伤害';
					game.log(player, str);
					if (player.stat[player.stat.length - 1].damaged == undefined) {
						player.stat[player.stat.length - 1].damaged = num;
					} else {
						player.stat[player.stat.length - 1].damaged += num;
					}
					if (source) {
						source.getHistory('sourceDamage').push(event);
						if (source.stat[source.stat.length - 1].damage == undefined) {
							source.stat[source.stat.length - 1].damage = num;
						} else {
							source.stat[source.stat.length - 1].damage += num;
						}
					}
					player.getHistory('damage').push(event);
					if (!event.unreal && num > 0 && player.hujia > 0 && !player.hasSkillTag('nohujia')) {
						event.hujia = Math.min(num, player.hujia);
						num -= event.hujia;
						var strs = '的护甲抵挡了';
						strs += get.cnNumber(event.hujia) + '点';
						if (event.nature) strs += get.translation(event.nature) + '属性';
						strs += '伤害';
						game.log(player, strs);
						player.changeHujia(-event.hujia).type = 'damage';
					}
					if (!event.unreal && num > 0) {
						if (event.notrigger) {
							player.changeHp(-num, false)._triggered = null;
						} else {
							player.changeHp(-num, false);
						}
					}
					if (event.animate !== false) {
						player.$damage(source);
						var natures = (event.nature || '').split(lib.natureSeparator);
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
						var numx = Math.max(0, num - player.hujia);
						player.$damagepop(-numx, natures[0]);
					}
					if (event.unreal) event.goto(6);
					if (!event.notrigger) {
						if (num == 0) {
							event.trigger('damageZero');
							event._triggered = null;
						} else {
							event.trigger('damage');
						}
					}
					('step 5');
					if (player.hp <= 0 && player.isAlive() && !event.nodying) {
						event._dyinged = true;
						player.dying(event);
					}
					if (source && lib.config.border_style == 'auto') {
						var dnum = 0;
						for (var j = 0; j < source.stat.length; j++) {
							if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
						}
						if (dnum >= 2) {
							if (lib.config.autoborder_start == 'silver') {
								dnum += 4;
							} else if (lib.config.autoborder_start == 'gold') {
								dnum += 8;
							}
						}
						if (lib.config.autoborder_count == 'damage') {
							source.node.framebg.dataset.decoration = '';
							if (dnum >= 10) {
								source.node.framebg.dataset.auto = 'gold';
								if (dnum >= 12) source.node.framebg.dataset.decoration = 'gold';
							} else if (dnum >= 6) {
								source.node.framebg.dataset.auto = 'silver';
								if (dnum >= 8) source.node.framebg.dataset.decoration = 'silver';
							} else if (dnum >= 2) {
								source.node.framebg.dataset.auto = 'bronze';
								if (dnum >= 4) source.node.framebg.dataset.decoration = 'bronze';
							}
							if (dnum >= 2) {
								source.classList.add('topcount');
							}
						} else if (lib.config.autoborder_count == 'mix') {
							source.node.framebg.dataset.decoration = '';
							switch (source.node.framebg.dataset.auto) {
								case 'bronze':
									if (dnum >= 4) source.node.framebg.dataset.decoration = 'bronze';
									break;
								case 'silver':
									if (dnum >= 8) source.node.framebg.dataset.decoration = 'silver';
									break;
								case 'gold':
									if (dnum >= 12) source.node.framebg.dataset.decoration = 'gold';
									break;
							}
						}
					}
					('step 6');
					if (!event.notrigger) event.trigger('damageSource');
				},
			},
			_scqh_changeHp: {
				forced: true,
				trigger: {
					player: 'changeHpBefore',
				},
				content() {
					trigger.setContent(lib.skill[event.name].changeHp);
				},
				changeHp() {
					game.getGlobalHistory().changeHp.push(event);
					var num = event.num;
					var evt = event.parent;
					if (num > 0) {
					} else if (num < 0) {
						var number = Math.abs(num) * 500;
						var change = Math.min(player.scqh_Status().LP, number);
						var cut = Math.floor(Math.min(number, change) / 500);
						num += cut;
						if (cut) game.log(player, '抵挡了', cut, '点伤害');
						var age = 0;
						if (evt.name == 'damage' && evt.source && evt.source.scqh_Status().LP) {
							var ATK = evt.source.scqh_Status().ATK;
							var DEF = player.scqh_Status().DEF;
							if (!ATK || evt.source.hasSkillTag('scqh_DirectAttack') || evt.scqh_DirectAttack) {
								DEF = 0;
							}
							age = ATK - DEF;
							if (age < 0) evt.source.scqh_changeStatus('LP', age);
						}
						if (age > 0) change += age;
						var damage = Math.min(player.scqh_Status().LP, change);
						if (player.scqh_Status().LP) player.scqh_changeStatus('LP', -damage);
					}
					player.hp += num;
					if (isNaN(player.hp)) player.hp = 0;
					if (player.hp > player.maxHp) player.hp = player.maxHp;
					player.update();
					if (event.popup !== false) {
						player.$damagepop(num, 'water');
					}
					if (_status.dying.includes(player) && player.hp > 0) {
						_status.dying.remove(player);
						game.broadcast(function (list) {
							_status.dying = list;
						}, _status.dying);
						var evt = event.getParent('_save');
						if (evt && evt.finish) evt.finish();
						evt = event.getParent('dying');
						if (evt && evt.finish) evt.finish();
					}
					event.trigger('changeHp');
				},
			},
			_scqh_initLP: {
				forced: true,
				trigger: {
					global: 'gameDrawBefore',
				},
				filter(event, player) {
					return true;
				},
				content() {
					player.scqh_changeStatus('LP', 4000);
				},
			},
		},
		translate: {
			_scqh_damage: '决斗都市',
			_scqh_changeHp: '决斗都市',
			_scqh_initLP: '决斗都市',
		},
	};
	for (var i in list.skill) {
		game.addSkill(i, list.skill[i], list.translate[i], list.translate[i + '_info']);
	}
};

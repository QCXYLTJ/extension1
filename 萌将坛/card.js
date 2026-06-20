'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
	var list = {
		name: 'scqh',
		connect: true,
		card: {
			scqh_shanxian: {
				global: ['scqh_shanxian_skill'],
				type: 'basic',
				fullskin: true,
				enable: true,
				range: {
					global: 2,
				},
				filterTarget(card, player, target) {
					return true;
				},
				content() {
					'step 0';
					if (target === player) event.finish();
					('step 1');
					event.seat = {
						next: player.next,
						previous: player.previous,
					};
					var list = [];
					list.add('上');
					list.add('下');
					var next = player.chooseControl(list);
					var prompt = '';
					prompt += '成为';
					prompt += get.translation(target);
					prompt += '的【上／下】家;若你的位置未发生变化';
					(prompt += '</br>●上:你与其他角色计算至彼此的距离时各-1'), (prompt += '</br>●下:你与其他角色计算至彼此的距离时各+1'), next.set('prompt', prompt);
					next.set('current', _status.currentPhase);
					next.set('target', target);
					next.set('ai', function () {
						const current = _status.event.current;
						const target = _status.event.target;
						const att = get.attitude(player, target);
						if (current && current === target) return 1;
						if (current && current === player) {
							if (att > 0) return 0;
							return 1;
						}
						const seatfunc = function (player, target) {
							const seat = {
								next: 0,
								previous: 0,
							};
							for (const fangxiang in seat) {
								let targetx = player[fangxiang];
								while (targetx !== target && targetx[fangxiang]) {
									targetx = targetx[fangxiang];
									seat[fangxiang] += 1;
								}
							}
							return seat;
						};
						if (current) {
							const seat = seatfunc(player, current);
							const seat2 = seatfunc(target, current);
							if (att <= 0) {
								if (seat.previous > seat.next && seat.previous > seat2.previous) {
									return 0;
								}
								return 1;
							}
						}
						return 0;
					});
					('step 2');
					var audio = true;
					var evt = event.parent;
					if (evt && evt.name === 'useCard') {
						if (evt.audio === false || evt.skill) audio = false;
					}
					if (audio !== false) {
						game.playAudio('../extension', lib.scqhExtension, 'audio', 'card', 'scqh_shanxian');
					}
					var scqhSwapSeat = function (target1, target2, direction) {
						let totalPopulation = game.players.length + game.dead.length + 1;
						for (let iwhile = 0; iwhile < totalPopulation; iwhile++) {
							let current = target1[direction];
							if (current && current != target2) {
								game.swapSeat(target1, current, false, false);
							} else break;
						}
						let str = direction === 'next' ? '上' : '下';
						game.log(target1, '将座位移至', target2, str, '家位置');
					};
					event.control = result.control;
					if (event.control === '上') {
						if (target !== event.seat.next) {
							scqhSwapSeat(player, target, 'next');
						}
					} else if (event.control === '下') {
						if (target !== event.seat.previous) {
							scqhSwapSeat(player, target, 'previous');
						}
					}
					('step 3');
					if (player.next === event.seat.next && player.previous === event.seat.previous) {
						var skillname = 'scqh_shanxian_skill_' + event.control;
						player.addTempSkill(skillname);
						player.addMark(skillname, 1, false);
						var x = player.countMark('scqh_shanxian_skill_上');
						var y = player.countMark('scqh_shanxian_skill_下');
						var num = x - y;
						if (num && typeof num === 'number') {
							player.markSkill('scqh_shanxian_skill');
						} else player.unmarkSkill('scqh_shanxian_skill');
					}
					('step 4');
					var evt2 = event.getParent(3);
					var juli = get.distance(target, player);
					if (evt2.name === '_scqh_shanxian_global' && juli > target.getAttackRange()) {
						evt2._trigger.neutralize();
					}
				},
				ai: {
					order: 3,
					basic: {
						useful: [6, 4],
						value: [6, 4],
					},
					result: {
						player(player, target) {
							if (player === target) return 0;
							const att = get.attitude(player, target);
							const current = _status.currentPhase;
							const seatfunc = function (player, target) {
								const seat = {
									next: 0,
									previous: 0,
								};
								for (const fangxiang in seat) {
									let targetx = player[fangxiang];
									while (targetx !== target && targetx[fangxiang]) {
										targetx = targetx[fangxiang];
										seat[fangxiang] += 1;
									}
								}
								return seat;
							};
							if (current && current === target) {
								const seat = seatfunc(player, target);
								if (seat.previous > seat.next) return 1;
							} else if (current && current === player) {
								const seat = seatfunc(player, target);
								if (att > 0) {
									if (seat.next > seat.previous) return 1;
								} else {
									if (seat.previous > seat.next) return 1;
								}
							} else if (current && current !== player && current !== target) {
								const seat = seatfunc(player, current);
								const seat2 = seatfunc(target, current);
								if (att <= 0) {
									if (seat.previous > seat.next && seat.previous > seat2.previous) return 1;
								}
							}
							return 0;
						},
					},
				},
			},
			scqh_huhan: {
				audio: 'hanbing_skill',
				type: 'land',
				fullborder: 'silver',
				enable(card, player) {
					return !player.hasSkill('land_used');
				},
				notarget: true,
				content() {
					'step 0';
					lib.card.scqh_huhan.changeLand('scqh_huhan', player);
					lib.card.scqh_huhan.snow();
					var size = ui.create.div('.menubutton');
					size.innerHTML = '下雪';
					size.listen(game.scqh.snowSize);
					event.size = size;
					player.addSkill('scqh_huhan_remove');
					('step 1');
					player.draw(2);
					('step 2');
					player.chooseToDiscard('he', 2, true);
				},
				changeLand(url, player) {
					game.addVideo('changeLand', player, url);
					const parsedPath = lib.path.parse(url);
					delete parsedPath.base;
					if (!parsedPath.dir) parsedPath.dir = 'extension/' + lib.scqhExtension + '/skin/card/';
					if (!parsedPath.ext) parsedPath.ext = '.png';
					const fileName = parsedPath.name;
					game.broadcastAll(
						(formattedPath, name, skill, player) => {
							const node = ui.create.div('.background.upper.land');
							node.setBackgroundImage(formattedPath);
							node.destroy = () => {
								if (node.skill) {
									game.removeGlobalSkill(node.skill);
									if (node.system) node.system.remove();
								}
								node.classList.add('hidden');
								setTimeout(() => node.remove(), 3000);
								if (ui.land == node) ui.land = null;
							};
							if (ui.land) {
								document.body.insertBefore(node, ui.land);
								ui.land.destroy();
							} else {
								node.classList.add('hidden');
								document.body.insertBefore(node, ui.window);
								ui.refresh(node);
								node.classList.remove('hidden');
							}
							ui.land = node;
							if (!name) return;
							node.name = name;
							node.skill = skill;
							if (player) {
								node.player = player;
								player.addTempSkill('land_used');
							}
							lib.setPopped(
								(node.system = ui.create.system(lib.translate[skill], null, true, true)),
								() => {
									const uiIntro = ui.create.dialog('hidden');
									uiIntro.addText(player ? `来源:${get.translation(player)}` : '地图').style.margin = '0';
									uiIntro._place_text = uiIntro.add(ui.create.div('.text', lib.translate[`${skill}_info`]));
									uiIntro.add(ui.create.div('.placeholder.slim'));
									return uiIntro;
								},
								200
							);
							game.addGlobalSkill(skill);
						},
						lib.path.format(parsedPath),
						fileName,
						`${fileName}_skill`,
						player
					);
				},
				snow() {
					if (!game.scqh) game.scqh = {};
					game.scqh.snowRunning = true;
					if (game.scqh.snowStart) {
						game.scqh.snowStart();
					} else {
						var canvas;
						var snowFall = function (snow) {
							snow = snow || {};
							this.maxFlake = snow.maxFlake || 200;
							this.flakeSize = snow.flakeSize || 10;
							this.fallSpeed = snow.fallSpeed || 2;
							this.status = 0;
						};
						var requestAnimationFrame =
							window.requestAnimationFrame ||
							window.mozRequestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
							window.msRequestAnimationFrame ||
							window.oRequestAnimationFrame ||
							function (callback) {
								setTimeout(callback, 1000 / 60);
							};
						var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
						var snowCanvas = function () {
							var snowcanvas = document.createElement('canvas');
							snowcanvas.classList.add('fun');
							snowcanvas.id = 'snowfall';
							ui.window.appendChild(snowcanvas);
							canvas = snowcanvas;
							this.canvas = snowcanvas;
							this.ctx = snowcanvas.getContext('2d');
							lib.onresize.push(function () {
								snowcanvas.width = ui.window.offsetWidth;
								snowcanvas.height = ui.window.offsetHeight;
							});
							snowcanvas.width = ui.window.offsetWidth;
							snowcanvas.height = ui.window.offsetHeight;
						};
						var createFlakes = function () {
							var maxFlake = this.maxFlake;
							var flakes = (this.flakes = []);
							var canvas = this.canvas;
							for (var i = 0; i < 200; i++) {
								flakes.push(new flakeMove(canvas.width, canvas.height, this.flakeSize, this.fallSpeed));
							}
						};
						var drawSnow = function () {
							var maxFlake = this.maxFlake;
							var flakes = this.flakes;
							var ctx = this.ctx;
							var canvas = this.canvas;
							var that = this;
							ctx.clearRect(0, 0, canvas.width, canvas.height);
							for (var e = 0; e < maxFlake; e++) {
								flakes[e].update();
								flakes[e].render(ctx);
							}
							this.loop = requestAnimationFrame(function () {
								drawSnow.apply(that);
							});
						};
						var flakeMove = function (canvasWidth, canvasHeight, flakeSize, fallSpeed) {
							this.x = Math.floor(Math.random() * canvasWidth);
							this.y = Math.floor(Math.random() * canvasHeight);
							this.size = Math.random() * flakeSize + 2;
							this.maxSize = flakeSize;
							this.speed = Math.random() * 1 + fallSpeed;
							this.fallSpeed = fallSpeed;
							this.velY = this.speed;
							this.velX = 0;
							this.stepSize = Math.random() / 30;
							this.step = 0;
						};
						flakeMove.prototype.update = function () {
							var x = this.x;
							var y = this.y;
							this.velX *= 0.98;
							if (this.velY <= this.speed) {
								this.velY = this.speed;
							}
							this.velX += Math.cos((this.step += 0.05)) * this.stepSize;
							this.y += this.velY;
							this.x += this.velX;
							if (this.x >= canvas.width || this.x <= 0 || this.y >= canvas.height || this.y <= 0) {
								this.reset(canvas.width, canvas.height);
							}
						};
						flakeMove.prototype.reset = function (width, height) {
							this.x = Math.floor(Math.random() * width);
							this.y = 0;
							this.size = Math.random() * snow.flakeSize + 2;
							this.speed = Math.random() * 1 + snow.fallSpeed;
							this.velY = this.speed;
							this.velX = 0;
						};
						flakeMove.prototype.render = function (ctx) {
							var snowFlake = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
							snowFlake.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
							snowFlake.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
							snowFlake.addColorStop(1, 'rgba(255, 255, 255, 0)');
							ctx.save();
							ctx.fillStyle = snowFlake;
							ctx.beginPath();
							ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
							ctx.fill();
							ctx.restore();
						};
						snowFall.prototype.start = function () {
							if (this.status == 1 || this.status == 4) {
								return false;
							}
							this.status = 1;
							snowCanvas.apply(this);
							createFlakes.apply(this);
							drawSnow.apply(this);
						};
						snowFall.prototype.stop = function () {
							this.pause();
							this.status = 2;
							this.canvas.parentNode.removeChild(this.canvas);
							this.canvas = null;
						};
						snowFall.prototype.pause = function () {
							if (this.status == 3) {
								return false;
							}
							this.status = 3;
							cancelAnimationFrame(this.loop);
						};
						snowFall.prototype.resume = function () {
							if (this.status == 3 && this.canvas) {
								this.status = 4;
								var that = this;
								this.loop = requestAnimationFrame(function () {
									drawSnow.apply(that);
								});
							}
						};
						var snow = new snowFall();
						game.scqh.snowStart = function () {
							snow.start();
						};
						game.scqh.snowStop = function () {
							game.scqh.snowRunning = false;
							snow.stop();
						};
						game.scqh.snowSize = function () {
							snow.maxFlake = 80;
							snow.flakeSize = 3;
							snow.fallSpeed = 1;
						};
						if (lib.config.coinSnowSize) {
							game.scqh.snowSize();
						}
						snow.start();
					}
				},
				ai: {
					value: 5,
					useful: 3,
					order: 2,
					result: {
						player: 1,
					},
				},
			},
			scqh_sanchaji: {
				enable: true,
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -2,
				},
				filterTarget(card, player, target) {
					return target == player;
				},
				selectTarget: -1,
				modTarget: true,
				toself: true,
				content: lib.element.content.equipCard,
				skills: [],
				onEquip() {
					'step 0';
					var list = ['引雷', '激流'];
					var next = player.chooseControl(list, 'cancel2');
					next.set('choiceList', ['【引雷】:' + get.translation('scqhCard_trident_loyalty_info'), '【激流】:' + get.translation('scqhCard_trident_riptide_info')]);
					next.set('ai', 0);
					('step 1');
					if (result.control && result.control != 'cancel2') {
						var book = 'riptide';
						if (result.control == '引雷') book = 'loyalty';
						player.addSkill('scqhCard_trident_' + book);
					}
				},
				onLose() {
					player.removeSkill('scqhCard_trident_loyalty');
					player.removeSkill('scqhCard_trident_riptide');
				},
				ai: {
					basic: {
						equipValue: 7,
					},
				},
				fullimage: true,
			},
			scqh_hudun: {
				type: 'delay',
				filterTarget: true,
				effect() { },
				ai: {
					basic: {
						order: 1,
						useful: 1,
						value: 4,
					},
					result: {
						target: 1,
					},
				},
				selectTarget: 1,
				enable: true,
				content() {
					target.addJudge(card, cards);
				},
				allowMultiple: false,
				fullskin: true,
				global: [],
			},
			scqh_zhenjian: {
				enable: true,
				type: 'equip',
				subtype: 'equip1',
				distance: {
					attackFrom: -1,
				},
				filterTarget(card, player, target) {
					return target == player;
				},
				selectTarget: -1,
				modTarget: true,
				toself: true,
				content: lib.element.content.equipCard,
				loseDelay: false,
				onLose() {
					var skill = 'scqh_zhenjian_skill';
					var hass = lib.skill[skill];
					if (hass) player.addTempSkill(skill);
				},
				skills: ['qinggang_skill'],
				global: [],
				ai: {
					basic: {
						equipValue: 7,
					},
				},
				fullborder: 'gold',
			},
		},
		skill: {
		},
		translate: {
			scqh_huhan: '沍寒',
			scqh_huhan_info: '摸两张牌,弃置两张牌.地图效果:当你受到冰属性伤害后,随机封印一张手牌(不能使用、打出、弃置).',
			scqh_hudun: '护盾',
			scqh_hudun_info: '判定阶段,你弃置判定区内的此牌.当你受到伤害时,你移去至多Ｘ张【护盾】,减少Ｘ点伤害(Ｘ为你本次伤害量).',
			scqh_shanxian: '闪现',
			scqh_shanxian_info: ['出牌阶段,或其他角色使用的非基本牌对你生效前,对距离在２以内的一名角色使用,将你的座位移动至该角色的【上／下】家位置;若你的位置未发生变化,则根据你的选择获得一项效果直到回合结束(若其计算至你的距离大于其攻击范围,则抵消此牌对你产生的效果):', '●上:你与其他角色计算至彼此的距离时各-1.', '●下:你与其他角色计算至彼此的距离时各+1.'].join('</br>'),
			scqh_zhenjian: '真剑师之剑',
			scqh_zhenjian_info: '锁定技.①你使用的【杀】无视防具.②当你失去装备区内的【真剑师之剑】后,你可以发动【影箭】.',
			scqh_sanchaji: '三叉戟',
			scqh_sanchaji_info: ['转换技.', '◆引雷:当你使用【杀】时,你可以将装备区内的一张【三叉戟】添加入此【杀】的实体牌.若此【杀】命中了目标,则对其发动【雷击】.此【杀】结算结束后,将【三叉戟】置入你的装备区.'].join('</br>'),
			scqhCard_trident_loyalty: '引雷',
			scqhCard_trident_loyalty2: '引雷',
			scqhCard_trident_loyalty_info: '你使用【杀】不受距离限制.当你使用【杀】时,你可以用装备区内的【三叉戟】当做此【杀】的实体牌.若命中,则对目标角色发动〖雷击〗.此【杀】结算结束后,将【三叉戟】置入你的装备区.',
			scqhCard_trident_riptide: '激流',
			scqhCard_trident_riptide_info: '锁定技,当你使用的【杀】结算结束后,若此【杀】造成了伤害,则你成为首个目标角色的上家.若此【杀】未造成伤害,你成为首个目标角色的下家.',
		},
		list: [],
	};
	for (var i in list.card) {
		if (typeof list.card[i].image != 'string') {
			list.card[i].image = 'ext:' + lib.scqhExtension + '/skin/card/' + i + '.png';
		}
	}
	lib.config.all.cards.add('scqh');
	lib.config.cards.add('scqh');
	lib.translate.scqh_card_config = lib.scqhExtension;
	return list;
});

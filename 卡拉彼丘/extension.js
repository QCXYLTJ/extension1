import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '卡拉彼丘',
		content(config, pack) {
			lib.element.player.smash = function () {
				var next = game.createEvent('smash');
				next.player = this;
				for (var i = 0; i < arguments.length; i++) {
					if (typeof arguments[i] == 'number') next.num = arguments[i];
				}
				if (next.num == undefined) next.num = 1;
				if (next.num > this.maxHp - this.countMark('_tl_Broken')) next.num = this.maxHp - this.countMark('_tl_Broken');
				if (next.num <= 0) _status.event.next.remove(next);
				next.setContent('smash');
				return next;
			};
			lib.element.content.smash = function () {
				if (player.countMark('_tl_Broken') >= player.hp) player.loseMaxHp(num);
				else {
					if (num > player.hp - player.countMark('_tl_Broken')) {
						var num2 = player.hp - player.countMark('_tl_Broken');
						player.addMark('_tl_Broken', player.hp, false);
						game.log(player, '被击碎了', get.translation(player.hp), '个', '#g勾玉');
						player.loseMaxHp(num2);
					} else {
						player.addMark('_tl_Broken', num, false);
						game.log(player, '被击碎了', get.translation(num), '个', '#g勾玉');
					}
				}
				if (player.countMark('_tl_Broken')) player.markSkill('_tl_Broken');
				else player.unmarkSkill('_tl_Broken');
			};
			lib.translate['_tl_Broken'] = '碎玉';
			lib.skill._tl_Broken = {
				trigger: {
					player: 'damage',
				},
				firstDo: true,
				forced: true,
				charlotte: true,
				filter(event, player) {
					return player.countMark('_tl_Broken');
				},
				content() {
					'step 0';
					var num = Math.min(player.countMark('_tl_Broken'), trigger.num);
					player.loseMaxHp(num);
					player.removeMark('_tl_Broken', num, false);
					game.log(player, '失去了', get.translation(num), '个', '#g碎玉');
				},
				markimage: 'extension/卡拉彼丘/image/ui/BrokenHp.png',
				intro: {
					name: '破碎的勾玉',
					content: '破碎勾玉数:#',
				},
			};
			var playCALABIYAUAudio = function () {
				var list = ['aodaili', 'baimo', 'feisha', 'lawei', 'ling', 'madeleina', 'ming', 'mixueer', 'xiangnaimei', 'xin', 'xinghui', 'xinxia', 'yiweite'];
				if (lib.CALABIYAUaudio) list.removeArray(lib.CALABIYAUaudio);
				else lib.CALABIYAUaudio = [];
				if (!list.length) {
					lib.CALABIYAUaudio = [];
					var list = ['aodaili', 'baimo', 'feisha', 'lawei', 'ling', 'madeleina', 'ming', 'mixueer', 'xiangnaimei', 'xin', 'xinghui', 'xinxia', 'yiweite'];
				}
				var audio = list.randomGet();
				lib.CALABIYAUaudio.add(audio);
				game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU/CALABIYAU_' + audio);
			};
			var CALABIYAUaudio = setInterval(function () {
				var extension = [].find.call(document.getElementsByTagName('div'), (i) => i.mode == 'extension_卡拉彼丘');
				var character = [].find.call(document.getElementsByTagName('div'), (i) => i.mode == 'CALABIYAU');
				if (extension && character && choose) clearInterval(CALABIYAUaudio);
				if (extension) extension.onclick = () => playCALABIYAUAudio();
				if (character) character.onclick = () => playCALABIYAUAudio();
			}, 500);
			if (lib.config.extension_卡拉彼丘_CALABIYAUChooseAudio) {
				lib.CALABIYAUselectableAudiolength = 14;
				lib.CALABIYAUstr = {
					CALABIYAU_aodaili: '战场上的谈判,不就是靠子弹吗',
					CALABIYAU_baimo: '等着我的好消息吧',
					CALABIYAU_feisha: '嗯,明白了',
					CALABIYAU_lawei: '没问题,我们出发吧',
					CALABIYAU_ling: '一起来引领这个世界的革新吧',
					CALABIYAU_madeleina: '轮到我出场了',
					CALABIYAU_meiruidisi: '为了所有人',
					CALABIYAU_ming: '今日,即便赴死,我也毫无遗憾',
					CALABIYAU_mixueer: '卡丘世界的秩序,由我来维护',
					CALABIYAU_xiangnaimei: '听好哦,战场就是我的舞台',
					CALABIYAU_xin: '任务开始了吗',
					CALABIYAU_xinghui: '什么时候叫我都可以',
					CALABIYAU_xinxia: '疗伤就交给我吧',
					CALABIYAU_yiweite: '早点结束吧,我还有研究没完成呢',
				};
				var CALABIYAUselectableAudio = setInterval(function () {
					var list = ['aodaili', 'baimo', 'feisha', 'lawei', 'ling', 'madeleina', 'meiruidisi', 'ming', 'mixueer', 'xiangnaimei', 'xin', 'xinghui', 'xinxia', 'yiweite'];
					for (var name of list) {
						var selectable = [].find.call(document.getElementsByTagName('div'), function (i) {
							return typeof i.link == 'string' && i.link == 'CALABIYAU_' + name;
						});
						if (selectable) {
							selectable.onclick = (link) => {
								var button = link.path[0].link;
								for (var i of ui.selected.buttons) {
									if (i.link == button) {
										var str = lib.CALABIYAUstr[button];
										var dialog = ui.create.dialog('hidden');
										dialog.classList.add('static');
										dialog.add('<div class="text" style="word-break:break-all;display:inline">' + str + '</div>');
										dialog.classList.add('popped');
										ui.window.appendChild(dialog);
										var width = dialog.content.firstChild.firstChild.offsetWidth;
										if (width < 190) {
											dialog._mod_height = -16;
										} else {
											dialog.content.firstChild.style.textAlign = 'left';
										}
										dialog.style.width = width + 16 + 'px';
										lib.placePoppedDialog(dialog, {
											clientX: (link.path[0].offsetLeft + link.path[0].offsetWidth * 3) * game.documentZoom,
											clientY: (link.path[0].offsetTop + link.path[0].offsetHeight * 3) * game.documentZoom,
										});
										if (dialog._mod_height) {
											dialog.content.firstChild.style.padding = 0;
										}
										setTimeout(
											function () {
												dialog.delete();
											},
											lib.quickVoice.includes(str) ? 3800 : 2000
										);
										game.playAudio('../extension/卡拉彼丘/audio/selected/', button);
									}
								}
							};
							lib.CALABIYAUselectableAudiolength--;
						}
					}
					if (lib.CALABIYAUselectableAudiolength <= 0) clearInterval(CALABIYAUselectableAudio);
				}, 1000);
			}
		},
		precontent(CALABIYAU) {
			lib.init.css('extension/卡拉彼丘', 'extension'); //调用字体CSS
			let CALABIYAU_addGroup = function (name, mapping, gradient) {
				let n, t;
				if (!name) return;
				if (typeof name == 'string') {
					n = name;
					t = name;
				} else if (Array.isArray(name) && name.length == 2 && typeof name[0] == 'string') {
					n = name[0];
					t = name[1];
				} else return;
				if (!mapping || !Array.isArray(mapping) || mapping.length != 3) mapping = [199, 21, 133];
				let y = '(' + mapping[0] + ',' + mapping[1] + ',' + mapping[2];
				let y1 = y + ',1)',
					y2 = y + ')';
				let s = document.createElement('style');
				s.innerHTML = ".player .identity[data-color='diy" + n + "'],";
				s.innerHTML += "div[data-nature='diy" + n + "'],";
				s.innerHTML += "span[data-nature='diy" + n + "'] {text-shadow: black 0 0 1px,rgba" + y1 + ' 0 0 2px,rgba' + y1 + ' 0 0 5px,rgba' + y1 + ' 0 0 10px,rgba' + y1 + ' 0 0 10px}';
				s.innerHTML += "div[data-nature='diy" + n + "m'],";
				s.innerHTML += "span[data-nature='diy" + n + "m'] {text-shadow: black 0 0 1px,rgba" + y1 + ' 0 0 2px,rgba' + y1 + ' 0 0 5px,rgba' + y1 + ' 0 0 5px,rgba' + y1 + ' 0 0 5px,black 0 0 1px;}';
				s.innerHTML += "div[data-nature='diy" + n + "mm'],";
				s.innerHTML += "span[data-nature='diy" + n + "mm'] {text-shadow: black 0 0 1px,rgba" + y1 + ' 0 0 2px,rgba' + y1 + ' 0 0 2px,rgba' + y1 + ' 0 0 2px,rgba' + y1 + ' 0 0 2px,black 0 0 1px;}';
				document.head.appendChild(s);
				if (gradient && Array.isArray(gradient) && Array.isArray(gradient[0]) && gradient[0].length == 3) {
					let str = '',
						st2 = [];
					for (var i = 0; i < gradient.length; i++) {
						str += ',rgb(' + gradient[i][0] + ',' + gradient[i][1] + ',' + gradient[i][2] + ')';
						if (i < 2) st2[i] = 'rgb(' + gradient[i][0] + ',' + gradient[i][1] + ',' + gradient[i][2] + ')';
					}
					let tenUi = document.createElement('style');
					tenUi.innerHTML = ".player>.camp-wrap[data-camp='" + n + "']>.camp-back {background: linear-gradient(to bottom" + str + ');}';
					tenUi.innerHTML += ".player>.camp-wrap[data-camp='" + n + "']>.camp-name {text-shadow: 0 0 5px " + st2[0] + ', 0 0 10px ' + st2[1] + ';}';
					document.head.appendChild(tenUi);
				}
				lib.group.add(n);
				lib.translate[n] = t;
				lib.translate[n + '2'] = t;
				lib.groupnature[n] = 'diy' + n;
			};
			CALABIYAU_addGroup(
				['CALABIYAU_TRUTH', '<span style="font-family: CALABIYAU;">剪</span>'],
				[231, 96, 92],
				[
					[230, 96, 92],
					[24, 9, 9],
				]
			); //剪刀手#F00
			CALABIYAU_addGroup(
				['CALABIYAU_JUSTICE', '<span style="font-family: CALABIYAU;">欧</span>'],
				[88, 130, 250],
				[
					[88, 73, 250],
					[8, 7, 25],
				]
			); //欧泊#4571EC
			CALABIYAU_addGroup(
				['CALABIYAU_FREDOM', '<span style="font-family: CALABIYAU;">乌</span>'],
				[250, 200, 90],
				[
					[235, 180, 60],
					[23, 18, 6],
				]
			); //乌尔比诺#BFC148
			game.import('character', function () {
				var CALABIYAU = {
					name: 'CALABIYAU',
					connect: true,
					characterSort: {
						CALABIYAU: {
							CALABIYAU_TRUTHGroup: ['CALABIYAU_ming', 'CALABIYAU_lawei', 'CALABIYAU_ling', 'CALABIYAU_xiangnaimei', 'CALABIYAU_meiruidisi'],
							CALABIYAU_JUSTICEGroup: ['CALABIYAU_mixueer', 'CALABIYAU_xin', 'CALABIYAU_xinxia', 'CALABIYAU_yiweite', 'CALABIYAU_fulaweiya'],
							CALABIYAU_FREDOMGroup: ['CALABIYAU_xinghui', 'CALABIYAU_aodaili', 'CALABIYAU_baimo', 'CALABIYAU_madeleina', 'CALABIYAU_feisha'],
						},
					},
					character: {
						CALABIYAU_ming: ['female', 'CALABIYAU_TRUTH', 4, ['CALABIYAU_pojiadianqiu', 'CALABIYAU_qiangleizhujia'], []],
						CALABIYAU_lawei: ['female', 'CALABIYAU_TRUTH', 4, ['CALABIYAU_xunyinglieren', 'CALABIYAU_dunyingcangzong'], []],
						CALABIYAU_ling: ['male', 'CALABIYAU_TRUTH', 3, ['CALABIYAU_poxiaoweimu', 'CALABIYAU_bihushengping'], []],
						CALABIYAU_xiangnaimei: ['female', 'CALABIYAU_TRUTH', 3, ['CALABIYAU_xuanlvhuixiang', 'CALABIYAU_yanchukaishi'], []],
						CALABIYAU_meiruidisi: ['female', 'CALABIYAU_TRUTH', 3, ['CALABIYAU_jinsharelang', 'CALABIYAU_liushadazang'], []],
						CALABIYAU_mixueer: ['female', 'CALABIYAU_JUSTICE', 3, ['CALABIYAU_miaomiaopaota', 'CALABIYAU_huolidamiao'], []],
						CALABIYAU_xin: ['male', 'CALABIYAU_JUSTICE', 4, ['CALABIYAU_shouwangzhiyan', 'CALABIYAU_maichongguozai'], []],
						CALABIYAU_xinxia: ['female', 'CALABIYAU_JUSTICE', 3, ['CALABIYAU_zhiliaowurenji', 'CALABIYAU_kaqiuchongsu'], []],
						CALABIYAU_yiweite: ['female', 'CALABIYAU_JUSTICE', 3, ['CALABIYAU_xiongxiongchuji', 'CALABIYAU_shuangshuangshuangfeng'], []],
						CALABIYAU_fulaweiya: ['female', 'CALABIYAU_JUSTICE', 3, ['CALABIYAU_zhihuanmeiying', 'CALABIYAU_huanmenghuadie'], []],
						CALABIYAU_xinghui: ['female', 'CALABIYAU_FREDOM', 3, ['CALABIYAU_shouhuxingmang', 'CALABIYAU_xingkongzhimen'], []],
						CALABIYAU_aodaili: ['female', 'CALABIYAU_FREDOM', 4, ['CALABIYAU_zhonghuoqingxie', 'CALABIYAU_kuanghongluanzha'], []],
						CALABIYAU_baimo: ['male', 'CALABIYAU_FREDOM', 4, ['CALABIYAU_xuankongdouwu', 'CALABIYAU_chongfanjietou'], []],
						CALABIYAU_madeleina: ['female', 'CALABIYAU_FREDOM', 3, ['CALABIYAU_yanliaoshufu', 'CALABIYAU_yanliaopaopao'], []],
						CALABIYAU_feisha: ['female', 'CALABIYAU_FREDOM', 3, ['CALABIYAU_canxizhuizong', 'CALABIYAU_yuxuekuanglu'], []],
					},
					characterTitle: {
						CALABIYAU_ming: '叛逆雷光',
						CALABIYAU_lawei: '第三执行者',
						CALABIYAU_ling: '暗夜之瞳',
						CALABIYAU_xiangnaimei: '灵魂歌姬',
						CALABIYAU_meiruidisi: '归途的旅人',
						CALABIYAU_mixueer: '萌新搜查官',
						CALABIYAU_xin: '黎明之手',
						CALABIYAU_xinxia: '狙击天使',
						CALABIYAU_yiweite: '半融冰晶',
						CALABIYAU_fulaweiya: '幻惑影蝶',
						CALABIYAU_xinghui: '守护星芒',
						CALABIYAU_aodaili: '枪与盾的荣耀',
						CALABIYAU_baimo: '无羁幻彩',
						CALABIYAU_madeleina: '绘梦人',
						CALABIYAU_feisha: '无悲的刀锋',
					},
					characterIntro: {
						CALABIYAU_ming: '剪刀手成员,与世界为敌的反抗者.<br>跨越战场,如闪耀雷霆一般的女子,<叛逆>是她的名片,<雷光>是她的底色.誓言要粉碎眼前一切阻碍的明,扬起剪刀手的旗帜,创造一个所有同伴都不用遭受压迫的公正世界',
						CALABIYAU_lawei: '剪刀手成员,斩破虚妄的利刃.<br>作为剪刀手执行者,拉薇为了揭穿欧泊的虚伪,与自己的过去诀别.她掩盖了自己的情感,一路奋战至今.手中的脉冲刀,斩开一切虚妄之物.然而,过往的友人之影,依旧时而在她面前出现,动摇着她的心灵',
						CALABIYAU_ling: '剪刀手成员,沐浴黑暗,仰望天堂.<br>在一次蓄谋已久的行动中,令背叛了欧泊,与自己的弟弟信分道扬镳.但他的内心深处,还留有一丝细微的温柔.在遮掩一切的炫目光辉下,无人知晓,他在剪刀手所追求的秘密究竟为何',
						CALABIYAU_xiangnaimei: '人气偶像歌姬,高唱幸福之歌.<br>外表甜美可爱的偶像歌姬香奈美,却有着不输剪刀手其他人的,坚强执着的性格.她见到过太多的不幸,为了不让自己的粉丝以及身边的同伴受到伤害,她全力以赴地,为了卡丘世界的未来而歌唱',
						CALABIYAU_meiruidisi: '剪刀手高层,追寻人类未来的科学家',
						CALABIYAU_mixueer: '欧泊小队新锐搜查官,努力守望着美好的理想乡.<br>活力四射的超级玩家米雪儿登场!身为欧泊的新人搜查官,奖章、猫咪、还有游戏是她的最爱!她坚信,有火力大喵陪伴身边,总有一天自己也能够独当一面,成为像父亲一样可靠的英雄!',
						CALABIYAU_xin: '欧泊小队队长,誓要守护卡拉彼丘的一切.<br>看似冷漠无情,却无比真诚直率的信,是欧泊的搜查一班班长.曾遭遇兄长背叛的他,为了追逐背后的真相,不放过任何蛛丝马迹.随身携带的脉冲雷达<守望之眼>,还有他坚定的意志,是他最强大的武器',
						CALABIYAU_xinxia: '欧泊主力干员,探寻世界尽头的旅者.<br>随和、温柔、爱开玩笑的心夏,是欧泊的队医.她有时散漫慵懒,有时细致体贴,让人有些捉摸不透.不过,可别小看她的实力.在战场上,她配备的那把狙击枪,能令所有伤害她同伴的对手胆寒',
						CALABIYAU_yiweite: '欧泊研究员,与玩偶熊做朋友的天才少女.<br>内向弱气,寡言少语的少女伊薇特,是从属于欧泊的研究员.她冰雪一般的外表下,是一颗关爱友人的火热内心.在小熊<菲>的帮助下,她所创造的冰霜能让敌人寸步难行',
						CALABIYAU_fulaweiya: '充满侵略性,心思缜密的特工队长',
						CALABIYAU_xinghui: '星庇所的建立者,寻找和平之路的温柔少女.<br>经营着星庇所的少女星绘,有着天使一般悲悯他人的心肠.病患的增多,纷争的持续让她的脸上显露愁容.她祈望着,乌尔比诺和引航者,能携手让这个世界变得更好',
						CALABIYAU_aodaili: '乌尔比诺小有名气的佣兵,优雅华丽的大小姐.<br>高傲的奥黛丽,是格罗夫家族的大小姐.她手握乌尔比诺的大权,信奉火力即正义.虽说性格看似有些不好相处,但若是有一位能够走入她的心扉,获得她的信任的友人,她也必将接纳与理解他的一切',
						CALABIYAU_baimo: '乌尔比诺高层,追求自由的街头青年.叛逆不羁的白墨看似浪子,实则担负着乌尔比诺的沉重责任.摇滚、嘻哈、街舞、涂鸦……白墨喜欢一切与街头有关的事物,但这些爱好对他来说,不过是一层保护色.他的梦想,是真正的……<自由>',
						CALABIYAU_madeleina: '阳光开朗的服装绘师,在追求艺术的道路上行至远方.<br>开朗乐观,像是邻家妹妹一样可爱的玛德蕾娜是一位来自乌尔比诺的绘师,喜欢绘画,鲜花还有他人的笑容.她用手中的颜料枪自在地涂抹世界,即使在战斗中也总是欢声笑语.过去？那是什么？不记得了哦~',
						CALABIYAU_feisha: '乌尔比诺的尖刀,寻找归宿的杀手',
					},
					card: {
						CALABIYAU_zhiliaowurenji_card: {
							type: 'delay',
							image: 'ext:卡拉彼丘/image/ui/CALABIYAU_zhiliaowurenji.png',
							fullskin: true,
							noEffect: true,
							derivation: 'CALABIYAU_xinxia',
							ai: {
								basic: {
									order: 1,
									useful: 1,
									value: 8,
								},
								result: {
									target: 1,
								},
							},
							enable: true,
							filterTarget(card, player, target) {
								return target.canAddJudge(card);
							},
							content() {
								if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
							},
							allowMultiple: false,
						},
						CALABIYAU_shouwangzhiyan_caomu: {
							audio: true,
							fullskin: true,
							enable: true,
							type: 'delay',
							filterTarget(card, player, target) {
								return lib.filter.judge(card, player, target) && player != target;
							},
							judge(card) {
								if (card.suit == 'club') return -1;
								return 3;
							},
							judge2(result) {
								if (result.bool == false) return true;
								return result.bool;
							},
							effect() {
								if (result.bool) {
									player.addTempSkill('CALABIYAU_shouwangzhiyan_caomu_skill');
								}
							},
							ai: {
								basic: {
									order: 1,
									useful: 1,
									value: 4.5,
								},
								result: {
									player(player, target) {
										return game.countPlayer(function (current) {
											if ((get.distance(target, current) <= 1) & (current != target)) {
												var att = get.attitude(player, current);
												if (att > 3) {
													return -1.1;
												} else if (att > 0) {
													return -1;
												} else if (att < -3) {
													return 1.1;
												} else if (att < 0) {
													return 1;
												}
											}
										});
									},
									target(player, target) {
										if (target.hasJudge('bingliang')) return 0;
										return 1.5 / Math.sqrt(target.countCards('h') + 1);
									},
								},
							},
							selectTarget: 1,
							content() {
								if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
							},
							allowMultiple: false,
						},
					},
					skill: {
						_CALABIYAUxianhua: {
							//audio:'ext:卡拉彼丘/audio:2',
							enable: 'phaseUse',
							clickable(player) {
								for (var i in lib.characterPack['CALABIYAU']) {
									if (Number(lib.config.extension_卡拉彼丘_CALABIYAUXianhua) > 2 || player.name == i || player.name2 == i) player.useSkill('_CALABIYAUxianhua');
								}
							},
							clickableFilter(player) {
								for (var i in lib.characterPack['CALABIYAU']) {
									if (Number(lib.config.extension_卡拉彼丘_CALABIYAUXianhua) > 2 || player.name == i || player.name2 == i) return true;
								}
								return false;
							},
							filter(event, player) {
								for (var i in lib.characterPack['CALABIYAU']) {
									if (Number(lib.config.extension_卡拉彼丘_CALABIYAUXianhua) > 2 || player.name == i || player.name2 == i) return true;
								}
								return false;
							},
							content() {
								game.broadcastAll(function (player) {
									const animate1 = [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(91deg)' }],
										animate2 = [{ transform: 'rotateY(91deg)' }, { transform: 'rotateY(0deg)' }],
										option = {
											duration: 250,
											iterations: 1,
										};
									if (player.style.transform == 'rotateY(91deg)' || player.node.avatar.style.transform == 'rotateY(91deg)') {
										game.playAudio('../extension/卡拉彼丘/audio/_CALABIYAUxianhua2.mp3');
										HTMLElement.prototype.animate.call(player.node.avatar, animate2, option);
										HTMLElement.prototype.animate.call(player.node.avatar2, animate2, option);
										player.node.avatar.style.transform = 'rotateY(0deg)';
										player.node.avatar2.style.transform = 'rotateY(0deg)';
									} else {
										game.playAudio('../extension/卡拉彼丘/audio/_CALABIYAUxianhua1.mp3');
										HTMLElement.prototype.animate.call(player.node.avatar, animate1, option);
										HTMLElement.prototype.animate.call(player.node.avatar2, animate1, option);
										player.node.avatar.style.transform = 'rotateY(91deg)';
										player.node.avatar2.style.transform = 'rotateY(91deg)';
									}
								}, player);
							},
						},
						_CALABIYAUstartShow: {
							trigger: {
								global: 'roundStart',
							},
							firstDo: true,
							forced: true,
							priority: 25,
							filter(event, player) {
								if (player != game.me) return false;
								if (game.roundNumber > 1) return false;
								for (var i in lib.characterPack['CALABIYAU']) {
									if (player.name == i || player.name2 == i) return true;
								}
								return false;
							},
							content() {
								for (var i in lib.characterPack['CALABIYAU']) {
									if (player.name == i) {
										game.playAudio('../extension/卡拉彼丘/audio/init/' + i + '.mp3');
										break;
									} else if (player.name2 == i) {
										game.playAudio('../extension/卡拉彼丘/audio/init/' + i + '.mp3');
										break;
									}
								}
							},
						},
						_CALABIYAUhujia: {
							markimage: 'extension/卡拉彼丘/image/ui/temporary.png',
							intro: {
								name: '临时护甲',
								content(content, player) {
									return '共有' + get.cnNumber(player.storage._CALABIYAUhujia) + '点临时护甲';
								},
							},
							trigger: {
								player: 'changeHujiaEnd',
							},
							forced: true,
							charlotte: true,
							content() {
								if (trigger.num < 0 && player.storage._CALABIYAUhujia > 0) player.storage._CALABIYAUhujia += trigger.num;
								if (player.storage._CALABIYAUhujia > 0) player.markSkill('_CALABIYAUhujia');
								else player.unmarkSkill('_CALABIYAUhujia');
							},
						},
						CALABIYAU_pojiadianqiu: {
							audio: 'ext:卡拉彼丘/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							//frequent:true,
							nobracket: true,
							content() {
								'step 0';
								player.draw();
								('step 1');
								var next = player.chooseToUse();
								next.set('openskilldialog', '破甲电球:是否将一张牌当作移除目标所有护甲的【杀】使用？');
								next.set('norestore', true);
								next.set('_backupevent', 'CALABIYAU_pojiadianqiu_x');
								next.set('custom', {
									add: {},
									replace: { window() { } },
								});
								next.backup('CALABIYAU_pojiadianqiu_x');
								next.set('complexSelect', true);
								next.set('filterTarget', function (card, player, target) {
									return lib.filter.targetEnabled.apply(this, arguments);
								});
								next.set('addCount', false);
							},
							ai: {
								expose: 0.2,
							},
							group: 'CALABIYAU_pojiadianqiu_effect',
							subSkill: {
								effect: {
									trigger: {
										player: 'shaBegin',
									},
									forced: true,
									popup: false,
									forced: true,
									filter(event, player) {
										return event.getParent(3).name == 'CALABIYAU_pojiadianqiu';
									},
									content() {
										trigger.setContent(lib.skill.CALABIYAU_pojiadianqiu_effect.shaContent);
									},
									shaContent() {
										'step 0';
										if (typeof event.shanRequired != 'number' || !event.shanRequired || event.shanRequired < 0) {
											event.shanRequired = 1;
										}
										if (typeof event.baseDamage != 'number') event.baseDamage = 1;
										if (typeof event.extraDamage != 'number') event.extraDamage = 0;
										('step 1');
										if (event.directHit || event.directHit2 || (!_status.connectMode && lib.config.skip_shan && !target.hasShan())) {
											event._result = { bool: false };
										} else if (event.skipShan) {
											event._result = { bool: true, result: 'shaned' };
										} else {
											var next = target.chooseToUse('请使用一张闪响应杀');
											next.set('type', 'respondShan');
											next.set('filterCard', function (card, player) {
												if (card.name != 'shan') return false;
												return lib.filter.cardEnabled(card, player, 'forceEnable');
											});
											if (event.shanRequired > 1) {
												next.set('prompt2', '(共需使用' + event.shanRequired + '张闪)');
											} else if (event.card.nature == 'stab') {
												next.set('prompt2', '(在此之后仍需弃置一张手牌)');
											}
											next.set('ai1', function (card) {
												var target = _status.event.player;
												var evt = _status.event.parent;
												var bool = true;
												if (_status.event.shanRequired > 1 && !get.is.object(card) && target.countCards('h', 'shan') < _status.event.shanRequired) {
													bool = false;
												} else if (target.hasSkillTag('useShan')) {
													bool = true;
												} else if (target.hasSkillTag('noShan')) {
													bool = false;
												} else if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) bool = false;
												if (bool) {
													return get.order(card);
												}
												return 0;
											}).set('shanRequired', event.shanRequired);
											next.set('respondTo', [player, card]);
											//next.autochoose=lib.filter.autoRespondShan;
										}
										('step 2');
										if (!result || !result.bool || !result.result || result.result != 'shaned') {
											event.trigger('shaHit');
										} else {
											event.shanRequired--;
											if (event.shanRequired > 0) {
												event.goto(1);
											} else if (event.card.nature == 'stab' && target.countCards('h') > 0) {
												event.responded = result;
												event.goto(4);
											} else {
												event.trigger('shaMiss');
												event.responded = result;
											}
										}
										('step 3');
										if ((!result || !result.bool || !result.result || result.result != 'shaned') && !event.unhurt) {
											target.changeHujia(-target.hujia);
											event.result = { bool: true };
										} else {
											event.result = { bool: false };
											event.trigger('shaUnhirt');
										}
										event.finish();
										('step 4');
										target.chooseToDiscard('刺杀:请弃置一张牌,否则此【杀】依然造成伤害').set('ai', function (card) {
											var target = _status.event.player;
											var evt = _status.event.parent;
											var bool = true;
											if (get.damageEffect(target, evt.player, target, evt.card.nature) >= 0) bool = false;
											if (bool) {
												return 8 - get.useful(card);
											}
											return 0;
										});
										('step 5');
										if ((!result || !result.bool) && !event.unhurt) {
											target.changeHujia(-target.hujia);
											event.result = { bool: true };
											event.finish();
										} else {
											event.trigger('shaMiss');
										}
										('step 6');
										if ((!result || !result.bool) && !event.unhurt) {
											target.changeHujia(-target.hujia);
											event.result = { bool: true };
											event.finish();
										} else {
											event.result = { bool: false };
											event.trigger('shaUnhirt');
										}
									},
								},
								x: {
									viewAs: {
										name: 'sha',
									},
									forced: true,
									filterCard: true,
									position: 'hes',
									selectCard: 1,
									check(card) {
										return 5 - get.value(card);
									},
								},
							},
						},
						CALABIYAU_qiangleizhujia: {
							audio: 'ext:卡拉彼丘/audio:2',
							sunbenSkill: true,
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_qiangleizhujia_sunben');
							},
							content() {
								'step 0';
								if (!player.storage._CALABIYAUhujia) player.storage._CALABIYAUhujia = 0;
								player.storage._CALABIYAUhujia += 3;
								player.markSkill('_CALABIYAUhujia');
								player.changeHujia(3);
								player.addTempSkill('CALABIYAU_qiangleizhujia_sunben', { source: 'dieAfter' });
								player.addTempSkill('CALABIYAU_qiangleizhujia_hujia', 'roundStart');
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('强雷铸甲');
										game.log(player, '回复了技能', '#g【强雷铸甲】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_qiangleizhujia.mp3');
									},
									charlotte: true,
								},
								hujia: {
									onremove(player) {
										if (player.storage._CALABIYAUhujia > 0) player.changeHujia(-player.storage._CALABIYAUhujia);
									},
									trigger: {
										global: 'phaseEnd',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										let evt = _status.event.getParent('phase');
										return evt && !evt.skill && event.player != player && player.hujia;
									},
									content() {
										if (player.hujia) player.changeHujia(-1);
										player.draw();
										player.phase('nodelay');
									},
								},
							},
							nobracket: true,
						},
						CALABIYAU_xunyinglieren: {
							audio: 'ext:卡拉彼丘/audio:2',
							trigger: {
								global: 'roundStart',
							},
							nobracket: true,
							forced: true,
							zhuanhuanji: true,
							mark: true,
							marktext: '☯',
							intro: {
								content(storage, player) {
									if (player.storage.CALABIYAU_xunyinglieren) return '座次为偶数的其他角色本轮明置手牌';
									return '座次为奇数的其他角色本轮明置手牌';
								},
							},
							content() {
								'step 0';
								player.changeZhuanhuanji('CALABIYAU_xunyinglieren');
								game.countPlayer(function (current) {
									if (current == player) return false;
									if (player.storage.CALABIYAU_xunyinglieren && current.seatNum % 2 == 1) return false;
									if (!player.storage.CALABIYAU_xunyinglieren && current.seatNum % 2 == 0) return false;
									player.line(current, 'thunder');
									current.addTempSkill('CALABIYAU_xunyinglieren_effect', 'roundStart');
								});
							},
							subSkill: {
								effect: {
									trigger: {
										player: 'gainBegin',
									},
									forced: true,
									charlotte: true,
									firstDo: true,
									silent: true,
									init(player) {
										player.addShownCards(player.getCards('h'), 'visible_CALABIYAU_xunyinglieren');
									},
									onremove(player) {
										player.hideShownCards(player.getCards('h'), 'visible_CALABIYAU_xunyinglieren');
									},
									content() {
										trigger.gaintag.add('visible_CALABIYAU_xunyinglieren');
									},
								},
							},
						},
						CALABIYAU_dunyingcangzong: {
							audio: 'ext:卡拉彼丘/audio:2',
							sunbenSkill: true,
							nobracket: true,
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_dunyingcangzong_sunben');
							},
							yinni(player) {
								player.storage.rawHp = player.hp;
								player.storage.rawMaxHp = player.maxHp;
								if (player.skills.length) {
									if (!player.hiddenSkills) {
										player.hiddenSkills = [];
									}
									for (const i of player.skills.slice()) {
										player.removeSkill(i);
										player.hiddenSkills.add(i);
									}
								}
								player.classList.add('unseen');
								player.name = 'unknown';
								player.sex = 'male';
								player.storage.nohp = true;
								player.node.hp.hide();
								player.addSkill('g_hidden_ai');
								player.hp = 1;
								player.maxHp = 1;
								player.update();
							},
							content() {
								'step 0';
								player.addTempSkill('CALABIYAU_dunyingcangzong_sunben', { source: 'dieAfter' });
								player.addSkill('CALABIYAU_dunyingcangzong_phase');
								lib.skill.CALABIYAU_dunyingcangzong.yinni(player);
							},
							priority: -25,
							group: 'CALABIYAU_dunyingcangzong_effect',
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('遁影藏踪');
										game.log(player, '回复了技能', '#g【遁影藏踪】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_dunyingcangzong.mp3');
									},
									charlotte: true,
								},
								phase: {
									trigger: {
										player: '_showHiddenCharacterBefore',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player == _status.currentPhase;
									},
									content() {
										trigger.cancel();
									},
								},
								effect: {
									trigger: {
										player: 'showCharacterAfter',
									},
									filter(event, player) {
										return _status.currentPhase.hp;
									},
									forced: true,
									content() {
										'step 0';
										player.removeSkill('CALABIYAU_dunyingcangzong_phase');
										event.count = Math.min(4, _status.currentPhase.hp);
										('step 1');
										event.count--;
										var cards = game.cardsGotoOrdering(get.cards()).cards;
										player.showCards('遁影藏踪', cards);
										if (
											game.hasPlayer(function (current) {
												return player.canUse({ name: 'chuqibuyi' }, current);
											})
										)
											player.chooseUseTarget({ name: 'chuqibuyi' }, cards, true, false, '请选择出其不意【' + get.translation(cards[0].suit) + cards[0].number + '】的目标').viewAs = true;
										('step 2');
										if (event.count > 0) event.goto(1);
									},
								},
							},
						},
						CALABIYAU_poxiaoweimu: {
							audio: 'ext:卡拉彼丘/audio:2',
							trigger: {
								player: 'useCard2',
							},
							forced: true,
							nobracket: true,
							filter(event, player) {
								if (!event.cards.length) return false;
								return player.getHistory('lose', function (evt) {
									if (evt.parent != event) return false;
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].some((tag) => tag.startsWith('visible_'))) return false;
									}
									return true;
								}).length;
							},
							content() {
								'step 0';
								player.gain(trigger.cards);
								player.addShownCards(trigger.cards, 'visible_CALABIYAU_poxiaoweimu');
							},
							mod: {
								ignoredHandcard(card, player) {
									if (card.gaintag && card.gaintag.some((tag) => tag.startsWith('visible_'))) {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (card.gaintag && card.gaintag.some((tag) => tag.startsWith('visible_'))) {
										return false;
									}
								},
								cardEnabled2(card) {
									if (card.gaintag && card.gaintag.some((tag) => tag.startsWith('visible_'))) {
										return false; //QQQ
									}
								},
								cardRecastable(card, player) {
									if (
										player.getHistory('lose', function (evt) {
											if (!evt.isPhaseUsing()) return false;
											var evtx = evt.getParent(2);
											if (evtx.name != 'recast') return false;
											for (var i in evt.gaintag_map) {
												if (evt.gaintag_map[i].some((tag) => tag.startsWith('visible_'))) return true;
											}
											return false;
										}).length < 3 &&
										card.gaintag &&
										card.gaintag.some((tag) => tag.startsWith('visible_'))
									) {
										return true;
									}
								},
							},
						},
						CALABIYAU_bihushengping: {
							audio: 'ext:卡拉彼丘/audio:2',
							sunbenSkill: true,
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_bihushengping_sunben');
							},
							nobracket: true,
							forced: true,
							content() {
								'step 0';
								player.chooseCard(get.prompt2('CALABIYAU_bihushengping'), [1, Infinity]);
								('step 1');
								if (result.bool) {
									player.addShownCards(result.cards, 'visible_CALABIYAU_bihushengping');
									player.addTempSkill('CALABIYAU_bihushengping_sunben', { source: 'dieAfter' });
									player.addTempSkill('CALABIYAU_bihushengping_effect', 'roundStart');
								}
							},
							route(player, target) {
								if (!player || !target || player != target) {
									return [];
								}
								let left = [], right = [];
								let left2 = player.previous, right2 = player.next;
								while (left2 && ![target, player].includes(left2) && right2 && ![target, player].includes(right2)) {
									left.push(left2);
									right.push(right2);
									left2 = left2.previous;
									right2 = right2.next;
								}
								if (target == left2) {
									return left;
								}
								return right;
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('庇护圣屏');
										game.log(player, '回复了技能', '#g【庇护圣屏】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_bihushengping.mp3');
									},
									charlotte: true,
								},
								effect: {
									audio: 'ext:卡拉彼丘/audio:1',
									trigger: {
										global: 'useCard',
									},
									forced: true,
									filter(event, player) {
										if (event.player == player || !event.targets.length) return false;
										var hs = player.getShownCards();
										if (!hs.some((card) => get.color(card, player) == get.color(event.card))) return false;
										for (var i of event.targets) {
											if (lib.skill.CALABIYAU_bihushengping.route(event.player, i).includes(player)) return true;
										}
										return false;
									},
									content() {
										'step 0';
										player
											.chooseCard(function (card) {
												if (!player.getShownCards().includes(card)) return false;
												return get.color(card, player) == get.color(trigger.card);
											})
											.set('prompt', get.prompt('CALABIYAU_bihushengping'))
											.set('prompt2', '你可以重铸一张' + get.translation(get.color(trigger.card)) + '明置牌取消' + get.translation(trigger.player) + '使用的' + get.translation(trigger.card));
										('step 1');
										if (result.bool) {
											player.recast(result.cards);
											trigger.cancel();
										}
									},
								},
							},
						},
						CALABIYAU_xuanlvhuixiang: {
							audio: 'ext:卡拉彼丘/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_xuanlvhuixiang_used');
							},
							filterCard: true,
							position: 'he',
							filterTarget(card, player, target) {
								return target != player;
							},
							discard: false,
							lose: false,
							delay: false,
							nobracket: true,
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.give(cards, target);
								target.addShownCards(cards, 'visible_CALABIYAU_xuanlvhuixiang');
								target.addSkill('CALABIYAU_xunyinglieren_effect');
								target.addSkill('CALABIYAU_xuanlvhuixiang_clear');
							},
							group: 'CALABIYAU_xuanlvhuixiang_dis',
							ai: {
								order: 10,
								result: {
									target: -1,
								},
							},
							subSkill: {
								sunben: {
									charlotte: true,
								},
								dis: {
									trigger: {
										player: 'phaseBegin',
									},
									charlotte: true,
									filter(event, player) {
										game.countPlayer(function (current) {
											current.removeSkill('CALABIYAU_xuanlvhuixiang_clear');
										});
									},
									content() { },
								},
								clear: {
									onremove(player) {
										var hs = player.getCards('hesx', function (card) {
											return card.hasGaintag('visible_CALABIYAU_xuanlvhuixiang');
										});
										player.discard(hs);
										player.removeSkill('CALABIYAU_xunyinglieren_effect');
									},
									trigger: {
										player: 'loseAfter',
									},
									filter(event, player) {
										for (var i in event.gaintag_map) {
											if (event.gaintag_map[i].includes('visible_CALABIYAU_xuanlvhuixiang')) return true;
										}
										return false;
									},
									content() {
										player.removeSkill('CALABIYAU_xuanlvhuixiang_clear');
										player.removeSkill('CALABIYAU_xunyinglieren_effect');
									},
									mod: {
										cardDiscardable(card, player, name) {
											if (card.hasGaintag('visible_CALABIYAU_xuanlvhuixiang')) {
												return true;
											}
										},
										cardEnabled2(card) {
											if (card.hasGaintag('visible_CALABIYAU_xuanlvhuixiang')) {
												return false;
											}
										},
										cardRecastable(card, player) {
											if (card.hasGaintag('visible_CALABIYAU_xuanlvhuixiang')) {
												return false;
											}
										},
									},
								},
							},
						},
						CALABIYAU_yanchukaishi: {
							audio: 'ext:卡拉彼丘/audio:2',
							sunbenSkill: true,
							enable: 'phaseUse',
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_yanchukaishi_sunben');
							},
							filterCard: true,
							position: 'he',
							discard: false,
							lose: false,
							delay: false,
							nobracket: true,
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.addTempSkill('CALABIYAU_yanchukaishi_sunben', { source: 'dieAfter' });
								player.addShownCards(cards, 'visible_CALABIYAU_yanchukaishi');
								player.addGaintag(cards, 'visible_CALABIYAU_yanchukaishi');
							},
							ai: {
								order: 13,
								result: {
									player: 1,
								},
							},
							global: 'CALABIYAU_yanchukaishi_card',
							group: 'CALABIYAU_yanchukaishi_clear',
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('演出开始');
										game.log(player, '回复了技能', '#g【演出开始】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_yanchukaishi.mp3');
									},
									charlotte: true,
								},
								clear: {
									trigger: {
										player: 'phaseBegin',
									},
									charlotte: true,
									filter(event, player) {
										var hs = player.getCards('hesx', function (card) {
											return card.hasGaintag('visible_CALABIYAU_yanchukaishi');
										});
										player.discard(hs);
									},
									content() { },
								},
								card: {
									charlotte: true,
									mod: {
										cardEnabled2(card, player) {
											var color = [];
											game.countPlayer(function (current) {
												if (current == player) return false;
												var hs = current.getCards('hesx', function (c) {
													return c.hasGaintag('visible_CALABIYAU_yanchukaishi');
												});
												for (var i of hs) color.add(get.color(i));
											});
											if (color.includes(get.color(card))) {
												return false;
											}
										},
									},
								},
							},
						},
						CALABIYAU_jinsharelang: {
							audio: 'ext:卡拉彼丘/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_jinsharelang_used');
							},
							filterCard: true,
							position: 'he',
							filterTarget(card, player, target) {
								return target != player;
							},
							discard: false,
							lose: false,
							delay: false,
							nobracket: true,
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.addTempSkill('CALABIYAU_jinsharelang_used', 'roundStart');
								player.give(cards, target);
								('step 1');
								if (cards[0].number == 1) {
									event._result = { control: '背水' };
								} else {
									player
										.chooseControl('上家', '下家')
										.set('prompt', '金沙热浪')
										.set('prompt2', '令' + get.translation(target) + '的上家或下家与其本巡无法移动座次且获得牌时须弃置一张牌');
								}
								('step 2');
								if (['上家', '背水'].includes(result.control)) target.previous.addSkill('CALABIYAU_jinsharelang_effect');
								target.addSkill('CALABIYAU_jinsharelang_effect');
								if (['下家', '背水'].includes(result.control)) target.next.addSkill('CALABIYAU_jinsharelang_effect');
							},
							group: 'CALABIYAU_jinsharelang_clear',
							subSkill: {
								used: {
									onremove() {
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_jinsharelang.mp3');
									},
									charlotte: true,
								},
								clear: {
									trigger: {
										player: 'phaseBegin',
									},
									charlotte: true,
									filter(event, player) {
										game.countPlayer(function (current) {
											current.removeSkill('CALABIYAU_jinsharelang_effect');
										});
									},
									content() { },
								},
								effect: {
									mark: true,
									marktext: '金沙',
									intro: {
										content: '本巡无法移动座次且获得牌时须弃置一张牌',
									},
									trigger: {
										global: 'swapSeatBegin',
										player: 'gainAfter',
									},
									forced: true,
									charlotte: true,
									filter(event, player, name) {
										if (name == 'swapSeatBegin' && (event.player1 == player || event.player2 == player)) {
											event.cancel();
											return false;
										}
										if (
											!player.hasCard(function (card) {
												return lib.filter.cardDiscardable(card, player, 'CALABIYAU_jinsharelang_effect');
											}, 'he')
										)
											return false;
										var evt = event;
										for (var i = 0; i < 4; i++) {
											evt = evt.getParent('CALABIYAU_jinsharelang_effect');
											if (evt.name != 'CALABIYAU_jinsharelang_effect') return true;
										}
										return false;
									},
									content() {
										'step 0';
										var cards = player.getCards('he', function (card) {
											return lib.filter.cardDiscardable(card, player, 'CALABIYAU_jinsharelang_effect');
										});
										if (cards.length) player.chooseToDiscard('he', true);
									},
								},
							},
						},
						CALABIYAU_liushadazang: {
							audio: 'ext:卡拉彼丘/audio:2',
							sunbenSkill: true,
							enable: 'phaseUse',
							filter(event, player) {
								return (
									!player.hasSkill('CALABIYAU_liushadazang_sunben') &&
									game.hasPlayer(function (current) {
										return current.countCards('ej');
									})
								);
							},
							nobracket: true,
							content() {
								'step 0';
								player.addTempSkill('CALABIYAU_liushadazang_sunben', { source: 'dieAfter' });
								var list = [],
									targets = [],
									cards = [];
								game.countPlayer(function (current) {
									var ej = current.getCards('ej');
									if (ej.length) list.add([current, ej]);
									if (current.countCards('e') && player.canUse({ name: 'sha', nature: 'fire' }, current, false, false)) targets.add(current);
									if (ej.length) cards.addArray(ej);
								});
								game.loseAsync({
									lose_list: list,
									discarder: player,
								}).setContent(function () {
									'step 0';
									event.cards = [];
									for (var i = 0; i < event.lose_list.length; i++) {
										var next = event.lose_list[i][0].lose(event.lose_list[i][1], ui.cardPile);
										next.animate = false;
										next.delay = false;
										next.getlx = false;
										next.type = 'loseToDiscardpile';
										next.insert_index = function () {
											return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
										};
										event.cards.addArray(event.lose_list[i][1]);
									}
									('step 1');
									var discardid = lib.status.videoId++;
									game.broadcastAll(
										function (list, id, cards) {
											for (var i of list) {
												for (var j of i[1]) {
													j.classList.remove('glow');
													j.classList.remove('glows');
												}
												i[0].$throw(i[1], null, 'nobroadcast');
											}
											var cardnodes = [];
											cardnodes._discardtime = get.time();
											for (var ix of list) {
												var card = ix[1];
												for (var i = 0; i < cards.length; i++) {
													if (cards[i].clone) {
														cardnodes.push(cards[i].clone);
													}
												}
											}
											ui.todiscard[id] = cardnodes;
										},
										event.lose_list,
										discardid,
										event.cards
									);
								});
								game.log(player, '将', cards, '洗入了牌堆');
								if (targets.length) player.useCard({ name: 'sha', nature: 'fire' }, targets);
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('流沙大葬');
										game.log(player, '回复了技能', '#g【流沙大葬】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_liushadazang.mp3');
									},
									charlotte: true,
								},
							},
						},
						CALABIYAU_miaomiaopaota: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							trigger: {
								global: 'roundStart',
								player: 'useCardAfter',
							},
							filter(event, player) {
								return (player.hasCard((card) => !card.hasGaintag('CALABIYAU_miaomiaopaota')) && event.name != 'useCard') || (event.name == 'useCard' && event.getParent(2).name == 'CALABIYAU_miaomiaopaota_effect');
							},
							forced: true,
							content() {
								'step 0';
								var str;
								if (
									lib.skill['CALABIYAU_huolidamiao'].filter(trigger, player) &&
									player.countCards('h', function (card) {
										return !card.hasGaintag('CALABIYAU_miaomiaopaota');
									}) > 1
								)
									str = '标记一张手牌或点<确定>发动<火力大喵>标记所有手牌';
								else str = '标记一张手牌';
								if (trigger.name == 'useCard') {
									player.draw();
									if (
										!player.getHistory('sourceDamage', function (evt) {
											return evt.getParent(2) == trigger;
										}).length
									)
										return;
									str = '重新' + str;
								}
								player
									.chooseCard('h')
									.set('ai', function (card) {
										if (['shan', 'wuxie'].includes(card.name)) return -6;
										return player.getUseValue(card);
									})
									.set('selectCard', function () {
										var player = _status.event.player;
										if (
											lib.skill['CALABIYAU_huolidamiao'].filter(_status.event, player) &&
											player.countCards('h', function (card) {
												return !card.hasGaintag('CALABIYAU_miaomiaopaota');
											}) > 1
										)
											return [0, 1];
										return 1;
									})
									.set('filterCard', function (card) {
										return !card.hasGaintag('CALABIYAU_miaomiaopaota');
									})
									.set('prompt', get.prompt('CALABIYAU_miaomiaopaota'))
									.set('prompt2', str);
								('step 1');
								if (result.bool) {
									//if(trigger.name=='useCard') player.removeGaintag('CALABIYAU_miaomiaopaota');
									if (result.cards.length) {
										player.addGaintag(result.cards, 'CALABIYAU_miaomiaopaota');
									} else player.useSkill('CALABIYAU_huolidamiao');
								} else event.finish();
								('step 2');
								if (player.hasSkill('CALABIYAU_huolidamiao_effect')) {
									player.unmarkSkill('CALABIYAU_miaomiaopaota');
									player.markSkill('CALABIYAU_huolidamiao');
								} else {
									player.unmarkSkill('CALABIYAU_huolidamiao');
									player.markSkill('CALABIYAU_miaomiaopaota');
								}
							},
							markimage: 'extension/卡拉彼丘/image/ui/CALABIYAU_miaomiaopaota.png',
							intro: {
								markcount(storage, player) {
									return player.countCards('h', function (card) {
										return card.hasGaintag('CALABIYAU_miaomiaopaota');
									});
								},
								mark(dialog, storage, player) {
									dialog.addAuto(
										player.getCards('h', function (card) {
											return card.hasGaintag('CALABIYAU_miaomiaopaota');
										})
									);
									if (player.hasSkill('CALABIYAU_huolidamiao_effect')) {
										dialog.addSmall('<img style=width:100px src=extension/卡拉彼丘/image/ui/emoticon_huolidamiao.png>');
									}
								},
								content(storage, player) {
									return (
										'共有' +
										get.cnNumber(
											player.countCards('h', function (card) {
												return card.hasGaintag('CALABIYAU_miaomiaopaota');
											})
										) +
										'张标记牌'
									);
								},
							},
							group: 'CALABIYAU_miaomiaopaota_effect',
							subSkill: {
								effect: {
									audio: 'ext:卡拉彼丘/audio:2',
									trigger: {
										global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
									},
									filter(event, player) {
										if (event.player == player && !player.hasCard((card) => card.hasGaintag('CALABIYAU_miaomiaopaota'))) {
											player.unmarkSkill('CALABIYAU_miaomiaopaota');
											player.unmarkSkill('CALABIYAU_huolidamiao');
											player.removeSkill('CALABIYAU_huolidamiao_effect');
										}
										if (event.name.indexOf('lose') == 0) {
											if (event.getlx === false || event.position != ui.discardPile) return false;
										}
										for (var i of event.cards) {
											if (player.countCards('h', (card) => card.hasGaintag('CALABIYAU_miaomiaopaota') && get.type2(card) == get.type2(i))) return true;
										}
										return false;
									},
									forced: true,
									content() {
										'step 0';
										for (var i of trigger.cards) {
											if (player.countCards('h', (card) => card.hasGaintag('CALABIYAU_miaomiaopaota') && get.type2(card) == get.type2(i))) {
												player
													.chooseToUse(
														function (card, player, event) {
															if (!card.hasGaintag('CALABIYAU_miaomiaopaota')) return false;
															return lib.filter.filterCard.apply(this, arguments);
														},
														'###' + get.prompt('CALABIYAU_miaomiaopaota') + '###无次数限制地使用标记牌'
													)
													.set('complexSelect', true);
											}
										}
									},
								},
							},
						},
						CALABIYAU_huolidamiao: {
							audio: 'ext:卡拉彼丘/audio:3',
							nobracket: true,
							sunbenSkill: true,
							filter(event, player) {
								return player.hasSkill('CALABIYAU_huolidamiao') && !player.hasSkill('CALABIYAU_huolidamiao_sunben');
							},
							content() {
								player.addTempSkill('CALABIYAU_huolidamiao_sunben', { source: 'dieAfter' });
								player.addGaintag(player.getCards('h'), 'CALABIYAU_miaomiaopaota');
								player.addSkill('CALABIYAU_huolidamiao_effect');
							},
							markimage: 'extension/卡拉彼丘/image/ui/CALABIYAU_huolidamiao.png',
							intro: {
								markcount(storage, player) {
									return player.countCards('h', function (card) {
										return card.hasGaintag('CALABIYAU_miaomiaopaota');
									});
								},
								mark(dialog, storage, player) {
									dialog.addAuto(
										player.getCards('h', function (card) {
											return card.hasGaintag('CALABIYAU_miaomiaopaota');
										})
									);
									if (player.hasSkill('CALABIYAU_huolidamiao_effect')) {
										dialog.addSmall('<img style=width:100px src=extension/卡拉彼丘/image/ui/emoticon_huolidamiao.png>');
									}
								},
								content(storage, player) {
									return (
										'共有' +
										get.cnNumber(
											player.countCards('h', function (card) {
												return card.hasGaintag('CALABIYAU_miaomiaopaota');
											})
										) +
										'张标记牌'
									);
								},
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('火力大喵');
										game.log(player, '回复了技能', '#g【火力大喵】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_huolidamiao.mp3');
									},
									charlotte: true,
								},
								effect: {
									charlotte: true,
									mod: {
										attackRange(player, num) {
											return Infinity;
										},
									},
								},
							},
						},
						CALABIYAU_shouwangzhiyan: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							enable: 'phaseUse',
							discard: false,
							filter(event, player) {
								if (player.hasJudge('caomu') || player.hasJudge('CALABIYAU_shouwangzhiyan_caomu')) return false;
								return player.countCards('hes') > 0;
							},
							viewAs: {
								name: 'CALABIYAU_shouwangzhiyan_caomu',
							},
							position: 'hes',
							filterCard(card, player, event) {
								return player.canAddJudge({ name: 'caomu', cards: [card] }) && get.type(card, false) != 'delay';
							},
							selectTarget: -1,
							filterTarget(card, player, target) {
								return player == target;
							},
							group: 'CALABIYAU_shouwangzhiyan_draw',
							global: 'CALABIYAU_shouwangzhiyan_judge',
							ai: {
								order: 13,
								result: {
									player: 1,
								},
							},
							subSkill: {
								judge: {
									mod: {
										targetEnabled(card, player, target) {
											const name = typeof card == 'string' ? card : card.viewAs ? card.viewAs : card.name;
											if (name.indexOf('CALABIYAU_shouwangzhiyan') == 0) {
												const namex = name.slice('CALABIYAU_shouwangzhiyan'.length);
												if (namex == 'caomu' && target.hasJudge(namex)) return false;
											} else if (name == 'caomu' && target.hasJudge('CALABIYAU_shouwangzhiyan' + name)) return false;
										},
									},
								},
								draw: {
									audio: 'ext:卡拉彼丘/audio:2',
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										return player.hasJudge('CALABIYAU_shouwangzhiyan_caomu') && event.card.suit == get.suit(player.getJudge('CALABIYAU_shouwangzhiyan_caomu'));
									},
									forced: true,
									charlotte: true,
									content() {
										player.draw();
									},
								},
								caomu_skill: {
									cardSkill: true,
									trigger: {
										player: 'phaseDrawBegin',
									},
									popup: false,
									charlotte: true,
									forced: true,
									content() {
										trigger.num++;
									},
									group: 'CALABIYAU_shouwangzhiyan_caomu_skill2',
									_priority: -50,
								},
								caomu_skill2: {
									cardSkill: true,
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseDrawAfter',
									},
									content() {
										var targets = game.filterPlayer(function (current) {
											return get.distance(player, current) <= 1 && player != current;
										});
										for (var target of targets) target.chooseToDiscard('he', true);
									},
									_priority: -50,
								},
							},
						},
						CALABIYAU_maichongguozai: {
							audio: 'ext:卡拉彼丘/audio:3',
							nobracket: true,
							sunbenSkill: true,
							enable: 'phaseUse',
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_maichongguozai_sunben');
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog(get.prompt2('CALABIYAU_maichongguozai'), 'hidden', [
										[
											['h', '手牌区'],
											['e', '装备区'],
											['j', '判定区'],
										],
										'tdnodes',
									]);
								},
								select: [1, 2],
								filter(button, player) {
									for (var i of game.filterPlayer()) {
										if (player.inRange(i)) i.prompt(ui.selected.buttons.length ? get.cnNumber(i.countCards(ui.selected.buttons[0].link)) : '', 'thunder');
									}
									if (ui.selected.buttons.length) return false;
									return true;
								},
								check(button) {
									var player = _status.event.player;
									var num = 0;
									game.filterPlayer(function (current) {
										if (player.inRange(current)) num -= get.attitude(player, current) * current.countCards(button.link);
									});
									return num;
								},
								backup(links, player) {
									return {
										link: links[0],
										forced: true,
										content() {
											'step 0';
											player.addTempSkill('CALABIYAU_maichongguozai_sunben', { source: 'dieAfter' });
											('step 1');
											game.filterPlayer(function (current) {
												if (player.inRange(current)) {
													var num = current.countCards(lib.skill.CALABIYAU_maichongguozai_backup.link);
													for (var i = 0; i < num; i++) {
														current.executeDelayCardEffect('shandian');
													}
												}
											});
										},
									};
								},
							},
							ai: {
								order(name, player) {
									var list = [];
									for (var i of ['h', 'j', 'e']) {
										var num = 0;
										game.filterPlayer(function (current) {
											if (player.inRange(current)) num -= get.attitude(player, current) * current.countCards(i);
										});
										list.push(num);
									}
									if (list.sort((a, b) => b - a)[0] > 13) return 13;
									return get.order({ name: 'sha' }) + 0.8;
								},
								result: {
									player(player) {
										var list = [];
										for (var i of ['h', 'j', 'e']) {
											var num = 0;
											game.filterPlayer(function (current) {
												if (player.inRange(current)) num -= get.attitude(player, current) * current.countCards(i);
											});
											list.push(num);
										}
										return list.sort((a, b) => b - a)[0];
									},
								},
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('火力大喵');
										game.log(player, '回复了技能', '#g【火力大喵】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_huolidamiao.mp3');
									},
									charlotte: true,
								},
							},
						},
						CALABIYAU_zhiliaowurenji: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							enable: 'phaseUse',
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_zhiliaowurenji_used');
							},
							filterCard: true,
							filterTarget(card, player, target) {
								return player.inRange(target) && target.canAddJudge({ name: 'CALABIYAU_zhiliaowurenji_card' });
							},
							selectTarget() {
								var player = _status.event.player;
								if (player.canAddJudge({ name: 'CALABIYAU_zhiliaowurenji_card' })) return [0, 1];
								return 1;
							},
							check(card) {
								return 9 - get.value(card);
							},
							discard: false,
							lose: false,
							delay: false,
							prompt() {
								var player = _status.event.player;
								if (player.canAddJudge({ name: 'CALABIYAU_zhiliaowurenji_card' })) return '将一张手牌置于攻击范围内角色的判定区或点<确定>对你发动';
								return '将一张手牌置于攻击范围内角色的判定区';
							},
							content() {
								'step 0';
								if (!target) var target = player;
								player.addTempSkill('CALABIYAU_zhiliaowurenji_used', 'roundStart');
								target.addJudge({ name: 'CALABIYAU_zhiliaowurenji_card' }, cards);
								target.addSkill('CALABIYAU_zhiliaowurenji_global');
								('step 1');
								if (!player.storage.CALABIYAU_zhiliaowurenji_card) player.storage.CALABIYAU_zhiliaowurenji_card = [];
								player.storage.CALABIYAU_zhiliaowurenji_card.addArray(cards);
							},
							markimage: 'extension/卡拉彼丘/image/ui/CALABIYAU_zhiliaowurenji.png',
							intro: {
								mark(dialog, storage, player) {
									if (player.storage.CALABIYAU_zhiliaowurenji_card.length) {
										dialog.addText('已派遣无人机:');
										dialog.add([player.storage.CALABIYAU_zhiliaowurenji_card, 'vcard']);
									}
									dialog.addText('待返回无人机:');
									dialog.add([player.storage.CALABIYAU_zhiliaowurenji, 'vcard']);
								},
								content(storage, player) {
									var str = '';
									if (player.storage.CALABIYAU_zhiliaowurenji_card.length) str += '已派遣无人机:<br>' + get.translation(player.storage.CALABIYAU_zhiliaowurenji_card) + '<br>';
									str += '待返回无人机:<br>' + get.translation(player.storage.CALABIYAU_zhiliaowurenji);
									return str;
								},
							},
							group: ['CALABIYAU_zhiliaowurenji_effect', 'CALABIYAU_zhiliaowurenji_draw'],
							ai: {
								order: 9,
								result: {
									target(player, target) {
										if (target.hp == 1) return 5;
										if (player == target && player.countCards('h') > player.hp) return 2;
										return (target.maxHp - target.hp) * 2;
									},
								},
							},
							subSkill: {
								used: {},
								global: {
									trigger: {
										global: 'phaseBegin',
									},
									forced: true,
									charlotte: true,
									init(player) {
										player.storage.CALABIYAU_zhiliaowurenji_number = 3;
									},
									filter(event, player) {
										return player.countCards('j', function (card) {
											return card.viewAs == 'CALABIYAU_zhiliaowurenji_card';
										});
									},
									content() {
										'step 0';
										player.recover();
										if (typeof player.storage.CALABIYAU_zhiliaowurenji_number != 'number') player.storage.CALABIYAU_zhiliaowurenji_number = 3;
										('step 1');
										player.storage.CALABIYAU_zhiliaowurenji_number--;
										if (player.storage.CALABIYAU_zhiliaowurenji_number <= 0 || trigger.player == player) player.removeSkill('CALABIYAU_zhiliaowurenji_global');
									},
									onremove(player) {
										game.cardsDiscard(
											player.getCards('j', function (card) {
												return card.viewAs == 'CALABIYAU_zhiliaowurenji_card';
											})
										);
									},
								},
								effect: {
									audio: 'ext:卡拉彼丘/audio:1',
									trigger: {
										global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
									},
									filter(event, player) {
										if (!event.cards) return false;
										for (var i of event.cards) {
											if (player.storage.CALABIYAU_zhiliaowurenji_card && player.storage.CALABIYAU_zhiliaowurenji_card.includes(i)) return true;
										}
										return false;
									},
									forced: true,
									charlotte: true,
									content() {
										if (!player.storage.CALABIYAU_zhiliaowurenji) player.storage.CALABIYAU_zhiliaowurenji = [];
										for (var i of trigger.cards) {
											if (player.storage.CALABIYAU_zhiliaowurenji_card && player.storage.CALABIYAU_zhiliaowurenji_card.includes(i)) {
												player.storage.CALABIYAU_zhiliaowurenji_card.remove(i);
												player.storage.CALABIYAU_zhiliaowurenji.add(i);
												player.$gain2(i, false);
												game.cardsGotoSpecial(i);
												game.log(player, '销毁了', '#y治疗无人机(' + get.translation(i) + ')');
												player.markSkill('CALABIYAU_zhiliaowurenji');
											}
										}
									},
								},
								draw: {
									audio: 'ext:卡拉彼丘/audio:1',
									trigger: {
										player: 'gainBegin',
									},
									filter(event, player) {
										return event.parent.name == 'draw' && player.storage.CALABIYAU_zhiliaowurenji && player.storage.CALABIYAU_zhiliaowurenji.length;
									},
									forced: true,
									charlotte: true,
									content() {
										'step 0';
										trigger.cards.addArray(player.storage.CALABIYAU_zhiliaowurenji);
										game.log(player, '收回了', player.storage.CALABIYAU_zhiliaowurenji);
										('step 1');
										player.storage.CALABIYAU_zhiliaowurenji = [];
										player.unmarkSkill('CALABIYAU_zhiliaowurenji');
									},
								},
							},
						},
						CALABIYAU_kaqiuchongsu: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							sunbenSkill: true,
							enable: 'phaseUse',
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_kaqiuchongsu_sunben') && game.dead.length;
							},
							nobracket: true,
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget()
									.set('filterTarget', function (card, player, target) {
										return game.dead.includes(target);
									})
									.set('prompt', get.prompt2('CALABIYAU_kaqiuchongsu'))
									.set('deadTarget', true);
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									game.players.add(target);
									game.dead.remove(target);
									target.revive(target.maxHp);
									game.broadcastAll(
										function (target1, target2) {
											let totalPopulation = game.players.length + game.dead.length + 1;
											for (var iwhile = 0; iwhile < totalPopulation; iwhile++) {
												if (target2.next != target1) {
													try {
														lib.element.content.swapSeat(target1, target1.next, false, false);
													} catch (e) {
														game.swapSeat(target1, target1.next, false, false);
													}
												} else break;
											}
											game.log(target2, '将', target1, '的座位移至其后');
										},
										target,
										player
									);
									player.addTempSkill('CALABIYAU_kaqiuchongsu_sunben', { source: 'dieAfter' });
								}
							},
							ai: {
								order: 13,
								result: {
									player(player) {
										return game.dead.filter(function (current) {
											return get.attitude(player, current) > 0;
										});
									},
								},
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('卡丘重塑');
										game.log(player, '回复了技能', '#g【卡丘重塑】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_kaqiuchongsu.mp3');
									},
									charlotte: true,
								},
							},
						},
						CALABIYAU_xiongxiongchuji: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							position: 'hs',
							viewAs: {
								name: 'gz_kefuzhongyuan',
							},
							check(card) {
								return 5 - get.value(card);
							},
							group: 'CALABIYAU_xiongxiongchuji_kefu',
							subSkill: {
								kefu: {
									trigger: {
										player: 'gz_kefuzhongyuanBegin',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.getParent(1).skill == 'CALABIYAU_xiongxiongchuji';
									},
									content() {
										trigger.setContent(lib.skill.CALABIYAU_xiongxiongchuji_kefu.kefuContent);
									},
									kefuContent() {
										'step 0';
										var p1 = '请选择【杀】的目标',
											p2 = '或点击「取消」摸一张牌';
										var next = target.chooseUseTarget('sha', p1, p2, false);
										('step 1');
										if (!result.bool) {
											target.draw(1);
											target.addTempSkill('CALABIYAU_xiongxiongchuji_effect', 'die');
										}
									},
								},
								effect: {
									mark: true,
									markimage: 'extension/卡拉彼丘/image/ui/CALABIYAU_xiongxiongchuji.png',
									intro: {
										content: '下次弃置牌前受到的有来源伤害均改为冰冻伤害',
									},
									trigger: {
										player: ['loseAfter', 'damageBefore'],
										global: 'loseAsyncAfter',
									},
									forced: true,
									filter(event, player) {
										if (event.name == 'damage') return event.source;
										if (event.type != 'discard' || event.getlx === false) return false;
										if (event.getl(player).cards.length) player.removeSkill('CALABIYAU_xiongxiongchuji_effect');
									},
									charlotte: true,
									content() {
										trigger.nature = 'ice';
									},
								},
								bing: {},
							},
						},
						CALABIYAU_shuangshuangshuangfeng: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							sunbenSkill: true,
							trigger: {
								player: 'phaseAfter',
							},
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_shuangshuangshuangfeng_sunben');
							},
							content() {
								'step 0';
								player.addTempSkill('CALABIYAU_shuangshuangshuangfeng_sunben', { source: 'dieAfter' });
								player.addTempSkill('CALABIYAU_shuangshuangshuangfeng_effect', { player: 'phaseBefore' });
							},
							subSkill: {
								effect: {
									trigger: {
										global: 'damageBefore',
									},
									forced: true,
									charlotte: true,
									onremove() {
										game.filterPlayer(function (current) {
											current.removeSkill('CALABIYAU_shuangshuangshuangfeng_ice');
										});
									},
									mark: true,
									markimage: 'extension/卡拉彼丘/image/ui/CALABIYAU_shuangshuangshuangfeng.png',
									intro: {
										content: '本巡内所有伤害均改为冰冻伤害,若为其他角色,则本巡其仅能使用三张牌',
									},
									content() {
										trigger.nature = 'ice';
										if (trigger.player != player) trigger.player.addSkill('CALABIYAU_shuangshuangshuangfeng_ice');
									},
								},
								ice: {
									init(player) {
										if (!player.storage.CALABIYAU_shuangshuangshuangfeng_ice) player.storage.CALABIYAU_shuangshuangshuangfeng_ice = 0;
									},
									onremove(player) {
										player.unmarkSkill('CALABIYAU_shuangshuangshuangfeng_ice');
										delete player.storage.CALABIYAU_shuangshuangshuangfeng_ice;
									},
									mark: true,
									marktext: '爽',
									intro: {
										markcount(num) {
											return Math.min(3, num || 0) + '/3';
										},
										content(storage) {
											return '剩余可使用牌数:' + Math.max(0, 3 - (storage || 0));
										},
									},
									forced: true,
									charlotte: true,
									trigger: {
										player: 'useCard',
									},
									content() {
										if (!player.storage.CALABIYAU_shuangshuangshuangfeng_ice) player.storage.CALABIYAU_shuangshuangshuangfeng_ice = 0;
										player.storage.CALABIYAU_shuangshuangshuangfeng_ice++;
										player.markSkill('CALABIYAU_shuangshuangshuangfeng_ice');
									},
									mod: {
										cardEnabled(card, player) {
											if (player.storage.CALABIYAU_shuangshuangshuangfeng_ice >= 3) return false;
										},
										cardUsable(card, player) {
											if (player.storage.CALABIYAU_shuangshuangshuangfeng_ice >= 3) return false;
										},
										cardRespondable(card, player) {
											if (player.storage.CALABIYAU_shuangshuangshuangfeng_ice >= 3) return false;
										},
										cardSavable(card, player) {
											if (player.storage.CALABIYAU_shuangshuangshuangfeng_ice >= 3) return false;
										},
									},
								},
								sunben: {
									onremove(player) {
										player.popup('爽爽霜风');
										game.log(player, '回复了技能', '#g【爽爽霜风】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_shuangshuangshuangfeng.mp3');
									},
									charlotte: true,
								},
							},
						},
						CALABIYAU_zhihuanmeiying: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							sunbenSkill: true,
							trigger: {
								player: 'changeHpBefore',
							},
							filter(event, player) {
								return event.num < 0 && !player.hasSkill('CALABIYAU_zhihuanmeiying_sunben') && player.countCards('he');
							},
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard(get.prompt2('CALABIYAU_zhihuanmeiying'), 'he');
								('step 1');
								if (result.cards?.length) {
									var color = get.color(result.cards[0]);
									for (var i of [_status.currentPhase, trigger.getParent(1).source]) {
										if (i && i.isAlive()) {
											if (!i.storage.CALABIYAU_zhihuanmeiying_effect) i.storage.CALABIYAU_zhihuanmeiying_effect = [];
											i.storage.CALABIYAU_zhihuanmeiying_effect.add(color);
											i.addSkill('CALABIYAU_zhihuanmeiying_effect');
										}
									}
									trigger.cancel();
									game.log(player, '防止了', -trigger.num, '点体力的扣减');
									player.addSkill('CALABIYAU_zhihuanmeiying_sunben');
									player.addTempSkill('diaohulishan');
								}
							},
							subSkill: {
								sunben: {
									charlotte: true,
									init(player) {
										player.storage.CALABIYAU_zhihuanmeiying_sunben = 0;
									},
									onremove(player) {
										player.storage.CALABIYAU_zhihuanmeiying_sunben = 0;
										player.popup('致幻魅影');
										game.log(player, '回复了技能', '#g【致幻魅影】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_zhihuanmeiying.mp3');
									},
									mark: true,
									intro: {
										markcount(num) {
											return (num || 0).toString();
										},
										content: '技能刷新进度:#/3',
									},
									trigger: {
										global: 'phaseAfter',
										player: 'damage',
									},
									forced: true,
									forceDie: true,
									forceOut: true,
									content() {
										'step 0';
										player.addMark('CALABIYAU_zhihuanmeiying_sunben', event.num || 1, false);
										('step 1');
										if (player.storage.CALABIYAU_zhihuanmeiying_sunben >= 3) player.removeSkill('CALABIYAU_zhihuanmeiying_sunben');
									},
								},
								effect: {
									mark: true,
									marktext: '幻',
									intro: {
										markcount(color) {
											var str = '';
											for (var i of color) str += get.translation(i).slice(0, 1);
											return str;
										},
										content(color) {
											return '不能使用' + get.translation(color) + '的牌直至失去此颜色的牌';
										},
									},
									trigger: {
										player: 'loseAfter',
										global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
									},
									forced: true,
									charlotte: true,
									forced: true,
									filter(event, player) {
										var evt = event.getl(player);
										if (!evt || !evt.cards2 || !evt.cards2.length) return false;
										for (var i of evt.cards2) {
											if (player.storage.CALABIYAU_zhihuanmeiying_effect.includes(get.color(i))) return true;
										}
										return false;
									},
									content() {
										var evt = trigger.getl(player);
										if (!evt || !evt.cards2 || !evt.cards2.length) return false;
										for (var i of evt.cards2) {
											if (!player.storage.CALABIYAU_zhihuanmeiying_effect.length) continue;
											if (player.storage.CALABIYAU_zhihuanmeiying_effect.includes(get.color(i))) player.storage.CALABIYAU_zhihuanmeiying_effect.remove(get.color(i));
										}
										if (!player.storage.CALABIYAU_zhihuanmeiying_effect.length) player.removeSkill('CALABIYAU_zhihuanmeiying_effect');
									},
									mod: {
										cardEnabled(card, player) {
											if (player.storage.CALABIYAU_zhihuanmeiying_effect.includes(get.color(card))) return false;
										},
									},
								},
							},
						},
						CALABIYAU_huanmenghuadie: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							sunbenSkill: true,
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_huanmenghuadie_sunben');
							},
							content() {
								player.addTempSkill('CALABIYAU_huanmenghuadie_sunben', { source: 'dieAfter' });
								player.addTempSkill('CALABIYAU_huanmenghuadie_effect', 'roundStart');
							},
							subSkill: {
								sunben: {
									charlotte: true,
									onremove(player) {
										player.popup('幻梦化蝶');
										game.log(player, '回复了技能', '#g【幻梦化蝶】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_huanmenghuadie.mp3');
									},
								},
								effect: {
									mark: true,
									marktext: '梦',
									intro: {
										content: '本轮被距离3以内其他角色击杀时,改为重整一回合;<br>剩余其他角色使用的单体伤害牌不能指定你为目标.',
									},
									audio: 'CALABIYAU_huanmenghuadie',
									trigger: {
										player: 'dieBefore',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.source && get.distance(player, event.source) <= 3 && event.source != player && player.maxHp > 0;
									},
									content() {
										if (_status.CALABIYAU_huanmenghuadie_return && _status.CALABIYAU_huanmenghuadie_return[player.playerid]) {
											trigger.cancel();
										} else {
											trigger.setContent(lib.skill.CALABIYAU_huanmenghuadie.dieContent);
											trigger.includeOut = true;
										}
									},
									mod: {
										targetEnabled(card, player, target) {
											if (get.distance(target, player) > 3 && get.tag(card, 'damage')) {
												var info = lib.card[card.name];
												if (info) {
													if (info.selectTarget != undefined) {
														if (Array.isArray(info.selectTarget)) {
															if (!info.toself) return false;
														} else {
															if (info.selectTarget != -1 && !info.toself) return false;
														}
													}
												}
											}
										},
									},
								},
								return: {
									trigger: {
										global: 'phaseBefore',
									},
									forced: true,
									charlotte: true,
									silent: true,
									forceDie: true,
									forceOut: true,
									filter(event, player) {
										return !event._CALABIYAU_huanmenghuadie_return && player.isOut() && _status.CALABIYAU_huanmenghuadie_return[player.playerid];
									},
									content() {
										'srep 0';
										trigger._CALABIYAU_huanmenghuadie_return = true;
										game.broadcastAll(function (player) {
											player.classList.remove('out');
										}, player);
										game.log(player, '移回了游戏');
										delete _status.CALABIYAU_huanmenghuadie_return[player.playerid];
										player.hp = player.maxHp;
										player.drawTo(player.maxHp);
										player.removeSkill('CALABIYAU_huanmenghuadie_return');
										('step 1');
										event.trigger('restEnd');
									},
									popup: false,
									_priority: 1,
								},
							},
							dieContent() {
								'step 0';
								event.forceDie = true;
								if (source) {
									game.log(player, '被', source, '杀害');
									if (source.stat[source.stat.length - 1].kill == undefined) {
										source.stat[source.stat.length - 1].kill = 1;
									} else {
										source.stat[source.stat.length - 1].kill++;
									}
								} else {
									game.log(player, '阵亡');
								}
								if (player.isIn() && (!_status.CALABIYAU_huanmenghuadie_return || !_status.CALABIYAU_huanmenghuadie_return[player.playerid])) {
									event.reserveOut = true;
									game.log(player, '进入了修整状态');
									game.log(player, '移出了游戏');
									player.addSkill('CALABIYAU_huanmenghuadie_return');
									if (!_status.CALABIYAU_huanmenghuadie_return) _status.CALABIYAU_huanmenghuadie_return = {};
									_status.CALABIYAU_huanmenghuadie_return[player.playerid] = 1;
								} else event.finish();
								if (!game.countPlayer()) game.over();
								else if (player.hp != 0) {
									player.changeHp(0 - player.hp, false).forceDie = true;
								}
								game.broadcastAll(function (player) {
									if (player.isLinked()) {
										if (get.is.linked2(player)) {
											player.classList.toggle('linked2');
										} else {
											player.classList.toggle('linked');
										}
									}
									if (player.isTurnedOver()) {
										player.classList.toggle('turnedover');
									}
								}, player);
								game.addVideo('link', player, player.isLinked());
								game.addVideo('turnOver', player, player.classList.contains('turnedover'));
								('step 1');
								event.trigger('die');
								('step 2');
								if (event.reserveOut) {
									if (!game.reserveDead) {
										for (var mark in player.marks) {
											if (['CALABIYAU_zhihuanmeiying_sunben', 'CALABIYAU_huanmenghuadie_effect'].includes(mark)) continue;
											player.unmarkSkill(mark);
										}
										var count = 1;
										var list = Array.from(player.node.marks.childNodes);
										if (list.some((i) => ['CALABIYAU_zhihuanmeiying_sunben', 'CALABIYAU_huanmenghuadie_effect'].includes(i.name))) count++;
										while (player.node.marks.childNodes.length > count) {
											var node = player.node.marks.lastChild;
											if (['CALABIYAU_zhihuanmeiying_sunben', 'CALABIYAU_huanmenghuadie_effect'].includes(node.name)) {
												node = node.previousSibling;
											}
											node.remove();
										}
										game.broadcast(
											function (player, count) {
												while (player.node.marks.childNodes.length > count) {
													var node = player.node.marks.lastChild;
													if (['CALABIYAU_zhihuanmeiying_sunben', 'CALABIYAU_huanmenghuadie_effect'].includes(node.name)) {
														node = node.previousSibling;
													}
													node.remove();
												}
											},
											player,
											count
										);
									}
									for (var i in player.tempSkills) {
										if (i != 'CALABIYAU_huanmenghuadie_sunben') player.removeSkill(i);
									}
									var skills = player.getSkills();
									for (var i = 0; i < skills.length; i++) {
										if (lib.skill[skills[i]].temp && skills[i] != 'CALABIYAU_huanmenghuadie_sunben') {
											player.removeSkill(skills[i]);
										}
									}
									event.cards = player.getCards('hejsx');
									if (event.cards.length) {
										player.discard(event.cards).forceDie = true;
									}
								}
								('step 3');
								if (event.reserveOut) {
									game.broadcastAll(function (player) {
										player.classList.add('out');
									}, player);
								}
								if (source && lib.config.border_style == 'auto' && (lib.config.autoborder_count == 'kill' || lib.config.autoborder_count == 'mix')) {
									switch (source.node.framebg.dataset.auto) {
										case 'gold':
										case 'silver':
											source.node.framebg.dataset.auto = 'gold';
											break;
										case 'bronze':
											source.node.framebg.dataset.auto = 'silver';
											break;
										default:
											source.node.framebg.dataset.auto = lib.config.autoborder_start || 'bronze';
									}
									if (lib.config.autoborder_count == 'kill') {
										source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
									} else {
										var dnum = 0;
										for (var j = 0; j < source.stat.length; j++) {
											if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
										}
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
									source.classList.add('topcount');
								}
							},
						},
						CALABIYAU_shouhuxingmang: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							trigger: {
								global: 'phaseBegin',
							},
							filter(event, player) {
								return player.countCards('he') && !player.hasSkill('CALABIYAU_shouhuxingmang_used');
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCard(get.prompt2('CALABIYAU_shouhuxingmang', trigger.player), 'he').set('ai', function (card) {
									if (get.attitude(player, trigger.player) < 1) return -1;
									return 6 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.addTempSkill('CALABIYAU_shouhuxingmang_effect');
									player.storage.CALABIYAU_shouhuxingmang_effect.addArray(result.cards);
									player.addTempSkill('CALABIYAU_shouhuxingmang_used', 'roundStart');
									if (player == trigger.player) {
										game.cardsGotoOrdering(result.cards);
										player.$throw(result.cards, 500);
										setTimeout(
											function (target) {
												target.gain(result.cards, 'gain2');
												game.resume();
											},
											700,
											trigger.player
										);
										game.pause();
									} else player.give(result.cards, trigger.player);
								}
							},
							subSkill: {
								used: {
								},
								effect: {
									audio: 'ext:卡拉彼丘/audio:2',
									trigger: {
										global: 'gainAfter',
									},
									filter(event, player) {
										if (event.player.hujia > 0) return false;
										for (var i of event.cards) {
											if (player.storage.CALABIYAU_shouhuxingmang_effect && player.storage.CALABIYAU_shouhuxingmang_effect.includes(i)) return true;
										}
										return false;
									},
									forced: true,
									charlotte: true,
									init(player) {
										if (!player.storage.CALABIYAU_shouhuxingmang_effect) player.storage.CALABIYAU_shouhuxingmang_effect = [];
									},
									onremove(player) {
										player.gain(player.storage.CALABIYAU_shouhuxingmang_effect, 'gain2');
										player.storage.CALABIYAU_shouhuxingmang_effect = [];
										if (!player.hujia) player.changeHujia();
									},
									content() {
										trigger.player.changeHujia();
									},
								},
							},
						},
						CALABIYAU_xingkongzhimen: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							sunbenSkill: true,
							trigger: {
								global: 'damageBegin4',
							},
							filter(event, player) {
								return event.player != player && !player.hasSkill('CALABIYAU_xingkongzhimen_sunben');
							},
							logTarget: 'player',
							check(event, player) {
								if (get.attitude(player, event.player) < 0) return false;
								return get.attitude(player, event.player) > 3 || event.player.hp <= event.num;
							},
							content() {
								'step 0';
								player.addTempSkill('CALABIYAU_xingkongzhimen_sunben', { source: 'dieAfter' });
								player.storage.CALABIYAU_xingkongzhimen_effect = trigger.player;
								for (var i of [player, trigger.player]) {
									if (!i.storage._CALABIYAUhujia) i.storage._CALABIYAUhujia = 0;
									i.storage._CALABIYAUhujia += 5;
									i.markSkill('_CALABIYAUhujia');
									i.changeHujia(5);
									i.addTempSkill('CALABIYAU_xingkongzhimen_hujia');
								}
								player.addTempSkill('CALABIYAU_xingkongzhimen_effect');
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('星空之门');
										game.log(player, '回复了技能', '#g【星空之门】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_xingkongzhimen.mp3');
									},
									charlotte: true,
								},
								hujia: {
									onremove(player) {
										if (player.storage._CALABIYAUhujia > 0) player.changeHujia(-player.storage._CALABIYAUhujia);
										delete player.storage.CALABIYAU_xingkongzhimen_effect;
									},
								},
								effect: {
									audio: 'ext:卡拉彼丘/audio:1',
									trigger: {
										global: 'phaseEnd',
									},
									charlotte: true,
									filter(event, player) {
										return player.storage.CALABIYAU_xingkongzhimen_effect && player.storage.CALABIYAU_xingkongzhimen_effect.isAlive();
									},
									logTarget: (event, player) => player.storage.CALABIYAU_xingkongzhimen_effect,
									prompt2: '将座次移动至其前',
									check(event, player) {
										var history1 = player.actionHistory;
										for (var i = history1.length - 1; i >= 0; i--) {
											if (history1.isMe && !history1.isSkipped) return true;
											if (history1.isRound) break;
										}
										var history2 = player.storage.CALABIYAU_xingkongzhimen_effect.actionHistory;
										for (var i = history2.length - 1; i >= 0; i--) {
											if (!history2.isSkipped) return false;
											if (history2.isRound) break;
										}
										return true;
									},
									intro: {
										content: '当前回合结束时,可将座次移至$前',
									},
									content() {
										game.broadcastAll(
											function (target1, target2) {
												let totalPopulation = game.players.length + game.dead.length + 1;
												for (var iwhile = 0; iwhile < totalPopulation; iwhile++) {
													if (target1.next != target2) {
														try {
															lib.element.content.swapSeat(target1, target1.next, false, false);
														} catch (e) {
															game.swapSeat(target1, target1.next, false, false);
														}
													} else break;
												}
												game.log(target1, '将座位移至', target2, '前');
											},
											player,
											player.storage.CALABIYAU_xingkongzhimen_effect
										);
									},
								},
							},
						},
						CALABIYAU_zhonghuoqingxie: {
							audio: 'ext:卡拉彼丘/audio:2',
							trigger: {
								global: 'roundStart',
							},
							enable: 'phaseUse',
							usable: 20,
							nobracket: true,
							zhuanhuanji: true,
							mark: true,
							marktext: '☯',
							intro: {
								content(storage, player) {
									if (player.storage.CALABIYAU_zhonghuoqingxie) return '轮次开始时或出牌阶段,你可以解除架设状态并失去1点护甲';
									return '轮次开始时或出牌阶段,你可以进入架设状态并获得1点护甲';
								},
							},
							prompt2(event, player) {
								if (player.storage.CALABIYAU_zhonghuoqingxie) return '解除架设状态并失去1点护甲';
								return '进入架设状态并获得1点护甲';
							},
							content() {
								'step 0';
								player.changeZhuanhuanji('CALABIYAU_zhonghuoqingxie');
								if (player.storage.CALABIYAU_zhonghuoqingxie) player.changeHujia(1);
								else player.changeHujia(-1);
							},
							group: ['CALABIYAU_zhonghuoqingxie_cancel', 'CALABIYAU_zhonghuoqingxie_sha'],
							subSkill: {
								cancel: {
									trigger: {
										global: 'swapSeatBegin',
										player: ['phaseJudgeBefore', 'phaseDrawBefore', 'phaseDiscardBefore'],
									},
									charlotte: true,
									filter(event, player) {
										if (name == 'swapSeatBegin' && (event.player1 == player || event.player2 == player)) {
											event.cancel();
											return false;
										}
										if (player.storage.CALABIYAU_zhonghuoqingxie) event.cancel();
									},
									content() { },
								},
								sha: {
									trigger: {
										player: ['chooseToUseBegin'],
									},
									forced: true,
									popup: false,
									lastDo: true,
									filter(event, player) {
										if (event.responded || event.skill) return false;
										return player.storage.CALABIYAU_zhonghuoqingxie && event.filterCard && event.filterCard({ name: 'sha' }, player, event);
									},
									mod: {
										cardUsable(card, player, num) {
											if (player.storage.CALABIYAU_zhonghuoqingxie && card.name == 'sha') {
												if (player.hasSkill('CALABIYAU_kuanghongluanzha_huo')) return 10;
												else return 4;
											}
										},
										cardEnabled2(card, player) {
											if (_status.event.skill && get.itemtype(card) == 'card' && card.hasGaintag('CALABIYAU_zhonghuoqingxie')) return false;
										},
									},
									copy() {
										var result = [];
										var card = ui.create.card(ui.special);
										card.init([undefined, undefined, 'sha', undefined]);
										card.cardid = undefined;
										card.wunature = undefined;
										card.storage = {}; //QQQ
										card.owner = undefined;
										result.push(card);
										return result;
									},
									contentx() {
										'step 0';
										if (trigger.result.bool) {
											if (trigger.onresult) {
												trigger.onresult(trigger.result);
												delete trigger.onresult;
											}
										}
										('step 1');
										player.lose(event.cards, ui.special)._triggered = null;
										('step 2');
										for (var i of event.cards) {
											i.fix();
											i.remove();
											i.destroyLog = false;
											i.destroyed = true;
										}
									},
									content() {
										'step 0';
										event.cards = lib.skill.CALABIYAU_zhonghuoqingxie_sha.copy();
										game.cardsGotoPile(cards, 'insert');
										player.directgains(event.cards, null, 'CALABIYAU_zhonghuoqingxie');
										('step 1');
										var evt = trigger;
										var onresult = false;
										if (evt.onresult) {
											onresult = evt.onresult;
										}
										var next2 = game.createEvent('CALABIYAU_zhonghuoqingxie_clear', false);
										next2.cards = event.cards;
										next2.player = player;
										next2._trigger = evt;
										next2.setContent(lib.skill.CALABIYAU_zhonghuoqingxie_sha.contentx);
										event.next.remove(next2);
										evt.after.push(next2);
										evt.onresult = function (result) {
											if (evt.after.includes(next2)) {
												evt.after.remove(next2);
												evt.next.push(next2);
											}
											if (result.cards && result.cards.length && (result.cards[0].hasGaintag('CALABIYAU_zhonghuoqingxie') || event.cards.includes(result.cards[0]))) {
												result.card = {
													name: 'sha',
													suit: 'none',
													number: undefined,
													nature: undefined,
													cardid: undefined,
													wunature: undefined,
													storage: undefined,
													cards: [],
												};
												game.cardsDiscard(result.cards);
											}
											if (onresult) onresult.apply(evt, arguments);
											delete evt.onresult;
										};
									},
								},
							},
						},
						CALABIYAU_kuanghongluanzha: {
							audio: 'ext:卡拉彼丘/audio:2',
							sunbenSkill: true,
							nobracket: true,
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_kuanghongluanzha_sunben');
							},
							content() {
								'step 0';
								player.addTempSkill('CALABIYAU_kuanghongluanzha_sunben', { source: 'dieAfter' });
								if (!player.storage.CALABIYAU_zhonghuoqingxie) player.changeZhuanhuanji('CALABIYAU_zhonghuoqingxie');
								player.addTempSkill('CALABIYAU_kuanghongluanzha_huo');
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('狂轰乱炸');
										game.log(player, '回复了技能', '#g【狂轰乱炸】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_kuanghongluanzha.mp3');
									},
									charlotte: true,
								},
								huo: {
									mark: true,
									markimage: 'extension/卡拉彼丘/image/ui/CALABIYAU_zhonghuoqingxie/1.png',
									intro: {
										content: '',
									},
									audio: 'ext:卡拉彼丘/audio:1',
									mod: {
										cardUsable(card, player, num) {
											if (!player.hasSkill('CALABIYAU_zhonghuoqingxie') && player.storage.CALABIYAU_zhonghuoqingxie && card.name == 'sha') return num + 6;
										},
										targetInRange(card, player) {
											if (card.name == 'sha' && player.countUsed('sha', true) < 6) return true;
										},
									},
									trigger: {
										player: 'shaBegin',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player.storage.CALABIYAU_zhonghuoqingxie && player.countUsed('sha', true) <= 6;
									},
									content() {
										game.broadcastAll(function (player) {
											var emotion = ui.create.div('', '<div style="text-align:center"> <img src="extension/卡拉彼丘/image/ui/CALABIYAU_zhonghuoqingxie/' + player.countUsed('sha', true) + '.png"> </div>', game.chess ? ui.chess : ui.window);
											emotion.style.width = '50px';
											emotion.style.height = '50px';
											emotion.style.left = '40%';
											emotion.style.top = '40%';
											emotion.style['z-index'] = 10;
											var mark = player.marks['CALABIYAU_kuanghongluanzha_huo'];
											game.pause();
											setTimeout(function () {
												if (mark) mark.firstChild.innerHTML = '<img src="extension/卡拉彼丘/image/ui/CALABIYAU_zhonghuoqingxie/' + player.countUsed('sha', true) + 's.png" width="20" height="20">';
												emotion.innerHTML = '<div style="text-align:center"> <img src="extension/卡拉彼丘/image/ui/CALABIYAU_zhonghuoqingxie/' + player.countUsed('sha', true) + 'd.png"> </div>';
												setTimeout(function () {
													game.resume();
													if (mark) mark.firstChild.style.transform = 'rotate(-' + 60 * player.countUsed('sha', true) + 'deg)';
													emotion.firstElementChild.style.transform = 'rotate(-60deg)';
													setTimeout(function () {
														if (player.countUsed('sha', true) >= 6) player.unmarkSkill('CALABIYAU_kuanghongluanzha_huo');
														emotion.delete();
													}, 500);
												}, 500);
											}, 500);
										}, player);
										trigger.setContent(lib.skill.CALABIYAU_kuanghongluanzha_huo.shaContent);
									},
									usable: 6,
									shaContent() {
										target.addJudge({ name: 'huoshan' }, get.cards());
									},
								},
							},
						},
						CALABIYAU_xuankongdouwu: {
							audio: 'ext:卡拉彼丘/audio:2',
							enable: 'phaseUse',
							usable: 1,
							nobracket: true,
							filterCard(card) {
								return get.tag(card, 'damage');
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								'step 0';
								if (
									target.countCards('he', function (card) {
										return get.tag(card, 'damage');
									})
								) {
									target
										.chooseToDiscard('he', true, function (card) {
											return get.tag(card, 'damage');
										})
										.set('ai', function (card) {
											return 8 - get.value(card);
										})
										.set('prompt2', '炫空斗舞')
										.set('prompt2', '请弃置一张伤害类牌');
								} else event._result = { bool: false };
								('step 1');
								if (result.bool) {
									if (
										player.countCards('he', function (card) {
											return get.tag(card, 'damage');
										})
									) {
										player
											.chooseToDiscard('he', true, function (card) {
												return get.tag(card, 'damage');
											})
											.set('ai', function (card) {
												return 8 - get.value(card);
											})
											.set('prompt2', '炫空斗舞')
											.set('prompt2', '请弃置一张伤害类牌');
									} else event._result = { bool: false };
								} else {
									target.loseHp();
									event.goto(3);
								}
								('step 2');
								if (result.bool) {
									num = [3, 4].randomGet();
									game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_xuankongdouwu' + num + '.mp3');
									event.goto(0);
								} else {
									player.loseHp();
									event.finish();
								}
								('step 3');
								var list = ['选项一', '选项二', 'cancel2'];
								if (player.countCards('h') == player.maxHp) list.remove('选项二');
								player.chooseControl(list).set('choiceList', ['与' + get.translation(target) + '交换位置', '将手牌数调整至体力上限']);
								('step 4');
								if (result.control != 'cancel2') {
									if (result.control == '选项一') {
										game.broadcastAll(
											function (target1, target2) {
												game.swapSeat(target1, target2);
											},
											player,
											target
										);
									} else {
										if (player.countCards('h') <= player.maxHp) player.drawTo(player.maxHp);
										else player.chooseToDiscard(player.countCards('h') - player.maxHp, true);
									}
								}
							},
						},
						CALABIYAU_chongfanjietou: {
							audio: 'ext:卡拉彼丘/audio:2',
							sunbenSkill: true,
							nobracket: true,
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_chongfanjietou_sunben');
							},
							content() {
								'step 0';
								player.addTempSkill('CALABIYAU_chongfanjietou_sunben', { source: 'dieAfter' });
								player.storage.CALABIYAU_chongfanjietou_effect = [];
								player.storage.CALABIYAU_chongfanjietou_effect.add(player.hp);
								player.storage.CALABIYAU_chongfanjietou_effect.add(player.countCards('h'));
								player.addTempSkill('CALABIYAU_chongfanjietou_effect', 'roundStart');
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('重返街头');
										game.log(player, '回复了技能', '#g【重返街头】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_chongfanjietou.mp3');
									},
									charlotte: true,
								},
								effect: {
									mark: true,
									intro: {
										content(storage, player) {
											var str = '体力:';
											switch (Math.min(3, player.maxHp - storage[0])) {
												case 3:
													str += '<span class=firetext>' + storage[0] + '</span>';
													break;
												case 2:
													str += '<span class=yellowtext>' + storage[0] + '</span>';
													break;
												default:
													str += '<span class=greentext>' + storage[0] + '</span>';
													break;
											}
											return '<div class="text center">' + str + ' 手牌:' + storage[1] + '</div>';
										},
										markcount: () => undefined,
									},
									onremove(player) {
										var next = game.createEvent('CALABIYAU_chongfanjietou_effect', false);
										next.player = player;
										next.setContent(lib.skill.CALABIYAU_chongfanjietou_effect.content);
									},
									firstDo: true,
									forced: true,
									priority: 25,
									trigger: {
										player: 'dying',
									},
									content() {
										'step 0';
										var num1 = player.storage.CALABIYAU_chongfanjietou_effect[0],
											num2 = player.storage.CALABIYAU_chongfanjietou_effect[1];
										player.hp = num1;
										player.update();
										if (player.countCards('h') <= num2) player.drawTo(num2);
										else player.chooseToDiscard(player.countCards('h') - num2, true);
									},
								},
							},
						},
						CALABIYAU_yanliaoshufu: {
							audio: 'ext:卡拉彼丘/audio:2',
							trigger: {
								global: 'phaseBefore',
							},
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_yanliaoshufu_ed');
							},
							nobracket: true,
							forced: true,
							content() {
								'step 0';
								var num;
								var map = {};
								var list = [];
								for (var i = 1; i <= game.players.concat(game.dead).length; i++) {
									var cn = get.cnNumber(i, true);
									map[cn] = i;
									list.push(cn);
								}
								while (map[list[0]] < player.seatNum) {
									var num = list[0];
									list.remove(num);
									list.add(num);
								}
								event.map = map;
								var seatAtt = function (current) {
									var att = get.attitude(player, current),
										num = current.seatNum;
									game.countPlayer(function (target) {
										var nums = [1, -1];
										nums.add(game.players.concat(game.dead).length - 1);
										nums.add(1 - game.players.concat(game.dead).length);
										if (nums.includes(target.seatNum - num)) att += get.attitude(player, target);
									});
									return -att;
								};
								var goonTarget = game.filterPlayer(function (current) {
									return !game.countPlayer(function (target) {
										return seatAtt(target) > seatAtt(current);
									});
								})[0];
								var num = goonTarget.seatNum;
								var dialog = ui.create.dialog(get.prompt2('CALABIYAU_yanliaoshufu'));
								var dialog = ui.create.dialog(get.prompt2('CALABIYAU_yanliaoshufu'));
								dialog.setAttribute('style', 'height: 320px; width: 400px; text-align: center; z-index: 4; transition-property: opacity,background,box-shadow; left: calc(50% - 200px); background: rgba(0,0,0,0.2);');
								dialog.content.style['overflow-x'] = 'visible';
								var table = document.createElement('div');
								table.classList.add('add-setting');
								table.style.margin = '0';
								table.style.width = '0';
								table.style.position = 'relative';
								var centerX = -15,
									centerY = 80,
									radius = 80;
								var radian = (Math.PI * 2) / list.length;
								for (var i = 0; i < list.length; i++) {
									var td = ui.create.div('.shadowed.reduce_radius.pointerdiv');
									td.innerHTML = list[i];
									td.link = map[list[i]];
									td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
									table.appendChild(td);
									dialog.buttons.add(td);
									td.setAttribute('style', 'margin:4px; font-size:18px; padding:5px; padding-left:8px; padding-right:8px; width: auto; position:absolute; left:' + (centerX + radius * Math.sin(radian * i)) + 'px; top:' + (centerY + radius * Math.cos(radian * i)) + 'px;');
								}
								dialog.content.appendChild(table);
								player.chooseButton([1, 2], dialog).set('filterButton', function (button) {
									if (ui.selected.buttons.length) {
										game.filterPlayer(function (current) {
											var nums = [1, -1, 0];
											nums.add(game.players.concat(game.dead).length - 1);
											nums.add(1 - game.players.concat(game.dead).length);
											if (nums.includes(current.seatNum - ui.selected.buttons[0].link) && current != player) current.prompt('颜料束缚');
											//else current.unprompt();
										});
										return false;
									} else {
										game.filterPlayer(function (current) {
											current.unprompt();
										});
									}
									return true;
								});
								('step 1');
								if (result.links?.length) {
									var num = result.links[0];
									var targets = game.filterPlayer(function (current) {
										var nums = [1, -1, 0];
										nums.add(game.players.concat(game.dead).length - 1);
										nums.add(1 - game.players.concat(game.dead).length);
										return nums.includes(current.seatNum - num) && current != player;
									});
									player.line(targets, 'orgend');
									player.addTempSkill('CALABIYAU_yanliaoshufu_ed', 'roundStart');
									for (var i of targets) i.markSkill('CALABIYAU_yanliaoshufu_effect');
									player.storage.CALABIYAU_yanliaoshufu_ed = [num, 3];
								}
							},
							global: 'CALABIYAU_yanliaoshufu_effect',
							subSkill: {
								ed: {
									trigger: {
										global: 'phaseAfter',
									},
									onremove(player) {
										game.filterPlayer(function (current) {
											current.unmarkSkill('CALABIYAU_yanliaoshufu_effect');
										});
										delete player.storage.CALABIYAU_yanliaoshufu_used;
									},
									charlotte: true,
									forced: true,
									content() {
										player.storage.CALABIYAU_yanliaoshufu_used[1]--;
										if (player.storage.CALABIYAU_yanliaoshufu_used[1] < 1) {
											var num = player.storage.CALABIYAU_yanliaoshufu_used[0];
											game.filterPlayer(function (current) {
												current.unmarkSkill('CALABIYAU_yanliaoshufu_effect');
												var nums = [1, -1, 0];
												nums.add(game.players.concat(game.dead).length - 1);
												nums.add(1 - game.players.concat(game.dead).length);
												if (nums.includes(current.seatNum - num)) current.removeSkill('CALABIYAU_yanliaoshufu_effect');
											});
										}
									},
								},
								effect: {
									marktext: '缚',
									intro: {
										content: '无法使用【无懈可击】<br>使用【闪】的次数上限为1',
									},
									trigger: {
										global: 'swapSeatAfter',
									},
									filter(event, player) {
										var list = [],
											nums = [1, -1, 0];
										nums.add(game.players.concat(game.dead).length - 1);
										nums.add(1 - game.players.concat(game.dead).length);
										game.countPlayer(function (current) {
											var storage = current.storage.CALABIYAU_yanliaoshufu_used;
											if (storage) list.add([current, storage[0]]);
										});
										game.countPlayer(function (current) {
											current.unmarkSkill('CALABIYAU_yanliaoshufu_effect');
											for (var i of list) {
												if (current != i[0] && nums.includes(current.seatNum - i[1])) current.markSkill('CALABIYAU_yanliaoshufu_effect');
											}
										});
										return false;
									},
									content() { },
									charlotte: true,
									mod: {
										cardEnabled(card, player) {
											if (
												game.countPlayer(function (current) {
													var storage = current.storage.CALABIYAU_yanliaoshufu_used,
														nums = [1, -1, 0];
													nums.add(game.players.concat(game.dead).length - 1);
													nums.add(1 - game.players.concat(game.dead).length);
													return storage && nums.includes(storage[0] - player.seatNum) && player != current;
												})
											) {
												if (card.name == 'wuxie') return false;
												else if (card.name == 'shan' && player.countUsed('shan', true)) return false;
											}
										},
										cardUsable(card, player) {
											if (
												game.countPlayer(function (current) {
													var storage = current.storage.CALABIYAU_yanliaoshufu_used,
														nums = [1, -1, 0];
													nums.add(game.players.concat(game.dead).length - 1);
													nums.add(1 - game.players.concat(game.dead).length);
													return storage && nums.includes(storage[0] - player.seatNum) && player != current;
												})
											) {
												if (card.name == 'wuxie') return false;
												else if (card.name == 'shan' && player.countUsed('shan', true)) return false;
											}
										},
									},
								},
							},
						},
						CALABIYAU_yanliaopaopao: {
							audio: 'ext:卡拉彼丘/audio:2',
							sunbenSkill: true,
							nobracket: true,
							enable: 'phaseUse',
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_yanliaopaopao_sunben');
							},
							content() {
								player.addTempSkill('CALABIYAU_yanliaopaopao_sunben', { source: 'dieAfter' });
								player.addTempSkill('CALABIYAU_yanliaopaopao_effect', { player: 'phaseBefore' });
								game.filterPlayer(function (current) {
									if (current != player) {
										player.line(current, 'yellow');
										current.maxHp++;
										current.hp++;
										current.addMark('_tl_Broken', 1, false);
										current.markSkill('_tl_Broken');
									}
								});
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('颜料泡泡');
										game.log(player, '回复了技能', '#g【颜料泡泡】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_yanliaopaopao.mp3');
									},
									charlotte: true,
								},
								effect: {
									trigger: {
										global: '_tl_BrokenAfter',
									},
									filter(event, player) {
										return event.player != player;
									},
									forced: true,
									charlotte: true,
									content() {
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_yanliaopaopao_effect.mp3');
										trigger.player.addSkill('CALABIYAU_yanliaopaopao_baiban');
									},
									onremove() {
										game.filterPlayer(function (current) {
											if (current.countMark('_tl_Broken')) {
												current.hp -= 1;
												current.maxHp -= 1;
												current.removeMark('_tl_Broken', 1, false);
											}
											if (!current.countMark('_tl_Broken')) current.removeSkill('CALABIYAU_yanliaopaopao_baiban');
										});
									},
									ai: {
										viewHandcard: true,
										skillTagFilter(player, arg, target) {
											return target != player && target.hasSkill('CALABIYAU_yanliaopaopao_baiban');
										},
									},
								},
								baiban: {
									init(player, skill) {
										player.addSkillBlocker(skill);
									},
									onremove(player, skill) {
										player.removeSkillBlocker(skill);
									},
									charlotte: true,
									skillBlocker(skill, player) {
										var list = [];
										if (lib.character[player.name]) list.addArray(lib.character[player.name][3]);
										if (lib.character[player.name1]) list.addArray(lib.character[player.name1][3]);
										if (lib.character[player.name2]) list.addArray(lib.character[player.name2][3]);
										return !list.includes(skill) && (!lib.skill[skill].charlotte || ['bahu', 'jsrgbahu', 'feiyang', 'olfeiyang', 'jsrgfeiyang', 'zhuSkill_jiangling', 'zhuSkill_fancheng', 'zhuSkill_xiangyang', '_CALABIYAUxianhua'].includes(skill));
									},
									mark: true,
									marktext: '白',
									intro: {
										content(storage, player, skill) {
											var list = player.getSkills(null, false, false).filter(function (i) {
												return lib.skill.CALABIYAU_yanliaopaopao_baiban.skillBlocker(i, player);
											});
											if (list.length) return '失效技能:' + get.translation(list);
											return '无失效技能';
										},
									},
								},
							},
						},
						CALABIYAU_canxizhuizong: {
							audio: 'ext:卡拉彼丘/audio:2',
							nobracket: true,
							zhuanhuanji: true,
							mark: true,
							marktext: '☯',
							intro: {
								content(storage, player) {
									if (player.storage.CALABIYAU_canxizhuizong) return '你对已受伤角色使用牌无距离和次数限制';
									return '当你需要使用即时牌时,你可以观看攻击范围内所有角色的手牌,若其中有所需牌你视为使用之';
								},
							},
							enable: 'chooseToUse',
							hiddenCard(player, name) {
								return !player.storage.CALABIYAU_canxizhuizong && lib.inpile.includes(name);
							},
							filter(event, player) {
								if (event.type == 'phase' && !player.hasSkill('CALABIYAU_canxizhuizong_used')) return true;
								return lib.inpile.some((name) => {
									if (get.type(name) != 'basic' && get.type(name) != 'trick') return false;
									if (player.storage.CALABIYAU_canxizhuizong) return false;
									if (event.filterCard && event.filterCard({ name: name, cards: [] }, player, event)) return true;
									if (name == 'sha') {
										for (var nature of lib.inpile_nature) {
											if (event.filterCard && event.filterCard({ name: name, nature: nature, cards: [] }, player, event)) return true;
										}
									}
									return false;
								});
							},
							mod: {
								targetInRange(card, player, target) {
									if (player.storage.CALABIYAU_canxizhuizong && target.isDamaged()) {
										return true;
									}
								},
								cardUsableTarget(card, player, target) {
									if (player.storage.CALABIYAU_canxizhuizong && target.isDamaged()) return true;
								},
							},
							chooseButton: {
								dialog(event, player) {
									var dialog = ui.create.dialog('残息追踪');
									if (event.type == 'phase' && !player.hasSkill('CALABIYAU_canxizhuizong_used')) {
										dialog._chosenOpt = [];
										var table = document.createElement('div');
										table.classList.add('add-setting');
										table.style.margin = '0';
										table.style.width = '100%';
										table.style.position = 'relative';
										var list = ['视为使用即时牌', '转换一次此技能'];
										if (player.storage.CALABIYAU_canxizhuizong) {
											list.remove('视为使用即时牌');
											dialog.direct = true;
										}
										for (var i of list) {
											var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
											td.innerHTML = '<span>' + i + '</span>';
											td.link = i;
											if (i == list[0] && !player.storage.CALABIYAU_canxizhuizong) {
												td.classList.add('bluebg');
												dialog._chosenOpt.add(td);
											}
											td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
												if (_status.dragged) return;
												if (_status.clicked) return;
												if (_status.justdragged) return;
												_status.tempNoButton = true;
												_status.clicked = true;
												setTimeout(function () {
													_status.tempNoButton = false;
												}, 500);
												var link = this.link;
												if (link == '转换一次此技能') game.uncheck();
												var current = this.parentNode.querySelector('.bluebg');
												if (current) {
													current.classList.remove('bluebg');
													dialog._chosenOpt.remove(current);
												}
												dialog._chosenOpt.add(this);
												this.classList.add('bluebg');
												game.check();
											});
											table.appendChild(td);
											dialog.buttons.add(td);
										}
										dialog.content.appendChild(table);
									}
									var cards = [];
									for (var name of lib.inpile) {
										if (get.type(name) == 'basic' || get.type(name) == 'trick') {
											if (!event.filterCard || !event.filterCard({ name: name }, player, event)) continue;
											cards.push([get.translation(get.type(name)), '', name]);
											if (name == 'sha') {
												for (var j of lib.inpile_nature) cards.push(['基本', '', 'sha', j]);
											}
										}
									}
									if (!player.storage.CALABIYAU_canxizhuizong) dialog.add([cards, 'vcard']);
									return dialog;
								},
								select() {
									var opts = _status.event.dialog._chosenOpt;
									return opts && opts.length && opts[0].link == '转换一次此技能' ? 0 : 1;
								},
								/*filter:function(button,player){
									return _status.event.parent.filterCard({name:button.link[2]},player,_status.event.parent);
								},*/
								check(button) {
									if (typeof button.link == 'string') return -1;
									if (_status.event.parent.type != 'phase') return 1;
									var player = _status.event.player;
									var card = { name: button.link[2], nature: button.link[3] };
									if (
										!game.hasPlayer(function (current) {
											if (player.inRange(current)) {
												var hs = current.getCards('h');
												for (var i of hs) {
													if (!['basic', 'trick'].includes(get.type(i))) continue;
													if (i.name == button.link[2]) return true;
												}
											}
										})
									)
										return -1;
									return player.getUseValue(card);
								},
								backup(links, player) {
									var isUse = links.length == 1;
									if (isUse && links[0] != '转换一次此技能')
										return {
											filterCard: () => false,
											forced: true,
											selectCard: -1,
											viewAs: {
												name: links[0][2],
												nature: links[0][3],
											},
											precontent() {
												'step 0';
												player.changeZhuanhuanji('CALABIYAU_canxizhuizong');
												var list = ['残息追踪'];
												event.card = false;
												game.filterPlayer(function (current) {
													if (player.inRange(current) && current.countCards('h')) {
														list.add('<div class="text center">' + get.translation(current) + '</div>');
														list.add(current.getCards('h'));
														for (var i of current.getCards('h')) {
															if (event.card == true) continue;
															if (i.name == event.result.card.name) event.card = true;
														}
													}
												});
												player.chooseButton(0, list).set('filterButton', function (button) {
													return false;
												});
												('step 1');
												if (event.card == true) {
												}
												('step 2');
											},
										};
									else
										return {
											forced: true,
											content() {
												player.changeZhuanhuanji('CALABIYAU_canxizhuizong');
												player.addTempSkill('CALABIYAU_canxizhuizong_used', 'phaseUseEnd');
												game.log(player, '的', '#g【残息追踪】', '发生了状态变更');
											},
										};
								},
								prompt(links, player) {
									if (links.length == 1) return '尝试使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
									else return '转换此技能';
								},
							},
							ai: {
								order: 13,
								result: {
									player: 1,
								},
							},
							group: 'CALABIYAU_canxizhuizong_effect',
							subSkill: {
								effect: {
									audio: 'ext:卡拉彼丘/audio:2',
									trigger: {
										player: 'useCardBefore',
									},
									filter(event, player) {
										return event.skill == 'CALABIYAU_canxizhuizong_backup';
									},
									forced: true,
									charlotte: true,
									content() {
										trigger.cancel();
									},
								},
								used: {
								},
							},
						},
						CALABIYAU_yuxuekuanglu: {
							audio: 'ext:卡拉彼丘/audio:2',
							sunbenSkill: true,
							nobracket: true,
							enable: 'chooseToUse',
							filter(event, player) {
								return !player.hasSkill('CALABIYAU_yuxuekuanglu_sunben');
							},
							viewAs: {
								name: 'sha',
							},
							filterCard: () => false,
							selectCard: -1,
							precontent() {
								'step 0';
								player.link(false);
								player.turnOver(false);
								var skills = player.getSkills(null, false, false).filter((skill) => {
									var info = get.info(skill);
									if (!info || info.charlotte || !get.is.locked(skill) || get.skillInfoTranslation(skill, player).length == 0) return false;
									return skill != 'CALABIYAU_yuxuekuanglu';
								});
								game.expandSkills(skills);
								var resetSkills = [];
								var suffixs = ['used', 'round', 'block', 'blocker'];
								for (var skill of skills) {
									var info = get.info(skill);
									if (typeof info.usable == 'number') {
										if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
											delete player.getStat('triggerSkill')[skill];
											resetSkills.add(skill);
										}
										if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
											delete player.getStat('skill')[skill];
											resetSkills.add(skill);
										}
									}
									if (info.round && player.storage[skill + '_roundcount']) {
										delete player.storage[skill + '_roundcount'];
										resetSkills.add(skill);
									}
									if (info.zhuanhuanji) {
										if (typeof info.zhuanhuanji == 'function') {
											delete player.storage[skill];
											if (info.init && typeof info.init == 'function') info.init(player);
										} else if (typeof info.zhuanhuanji == 'number') this.removeMark(skill, Infinity, false);
										else delete player.storage[skill];
										resetSkills.add(skill);
									}
									if (info.sunbenSkill) {
										player.removeSkill(skill + '_sunben');
										resetSkills.add(skill);
									}
									if (player.storage[`temp_ban_${skill}`]) {
										delete player.storage[`temp_ban_${skill}`];
									}
									if (player.awakenedSkills.includes(skill)) {
										player.restoreSkill(skill);
										resetSkills.add(skill);
									}
									for (var suffix of suffixs) {
										if (player.hasSkill(skill + '_' + suffix)) {
											player.removeSkill(skill + '_' + suffix);
											resetSkills.add(skill);
										}
									}
								}
								if (resetSkills.length) {
									var str = '';
									for (var i of resetSkills) {
										str += '【' + get.translation(i) + '】、';
									}
									game.log(player, '重置了技能', '#g' + str.slice(0, -1));
								}
								('step 1');
								player.addTempSkill('CALABIYAU_yuxuekuanglu_sunben', { source: 'dieAfter' });
								player.addTempSkill('CALABIYAU_yuxuekuanglu_effect');
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
							subSkill: {
								sunben: {
									onremove(player) {
										player.popup('浴血狂戮');
										game.log(player, '回复了技能', '#g【浴血狂戮】');
										game.playAudio('../extension/卡拉彼丘/audio/CALABIYAU_yuxuekuanglu.mp3');
									},
									charlotte: true,
								},
								effect: {
									audio: 'ext:卡拉彼丘/audio:1',
									trigger: {
										player: 'useCard2',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return ['basic', 'trick'].includes(get.type(event.card)) && get.tag(event.card, 'damage');
									},
									content() {
										trigger.effectCount++;
									},
								},
							},
						},
					},
					dynamicTranslate: {
						CALABIYAU_qiangleizhujia(player) {
							if (player.hasSkill('CALABIYAU_qiangleizhujia_sunben')) return "<span style='opacity:0.5'>昂扬技,轮次开始时,你可获得3点临时护甲至轮次结束.本轮其他角色的额定回合结束时,你衰减1点护甲并摸一张牌,执行一个仅有出牌阶段的回合.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,轮次开始时,你可获得3点临时护甲至轮次结束.本轮其他角色的额定回合结束时,你衰减1点护甲并摸一张牌,执行一个仅有出牌阶段的回合.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_xunyinglieren(player) {
							if (player.storage.CALABIYAU_xunyinglieren) return "转换技,轮次开始时,你令座次为①偶数<span class='thundertext'>②奇数</span>的其他角色本轮明置手牌";
							return "转换技,轮次开始时,你令座次为<span class='thundertext'>①偶数</span>②奇数的其他角色本轮明置手牌";
						},
						CALABIYAU_dunyingcangzong(player) {
							if (player.hasSkill('CALABIYAU_dunyingcangzong_sunben')) return "<span style='opacity:0.5'>昂扬技,轮次开始时,你可隐匿且仅能于回合外登场;<br>当你登场时,你依次将牌堆顶当前回合角色体力值(至多为4)张牌当【出其不意】使用.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,轮次开始时,你可隐匿且仅能于回合外登场;<br>当你登场时,你依次将牌堆顶当前回合角色体力值(至多为4)张牌当【出其不意】使用.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_bihushengping(player) {
							if (player.hasSkill('CALABIYAU_bihushengping_sunben')) return "<span style='opacity:0.5'>昂扬技,轮次开始时,你可以明置任意张牌并令本轮其他角色使用最短路径经过你的牌时,你可以重铸一张同色明置牌取消之.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,轮次开始时,你可以明置任意张牌并令本轮其他角色使用最短路径经过你的牌时,你可以重铸一张同色明置牌取消之.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_yanchukaishi(player) {
							if (player.hasSkill('CALABIYAU_yanchukaishi_sunben')) return "<span style='opacity:0.5'>昂扬技,出牌阶段,你可以明置一张手牌,若此牌在你的区域内,其他角色不能使用或打出与此牌同颜色的牌.回合开始时,弃置这些牌.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,出牌阶段,你可以明置一张手牌,若此牌在你的区域内,其他角色不能使用或打出与此牌同颜色的牌.回合开始时,弃置这些牌.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_liushadazang(player) {
							if (player.hasSkill('CALABIYAU_liushadazang_sunben')) return "<span style='opacity:0.5'>昂扬技,出牌阶段,你可以将场上所有牌洗入剩余牌堆中,你对因此失去装备牌的其他角色依次视为使用一张火【杀】.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,出牌阶段,你可以将场上所有牌洗入剩余牌堆中,你对因此失去装备牌的其他角色依次视为使用一张火【杀】.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_huolidamiao(player) {
							if (player.hasSkill('CALABIYAU_huolidamiao_sunben')) return "<span style='opacity:0.5'>昂扬技,「喵喵炮塔」发动时,你可以改为标记所有手牌.你的攻击范围变为已标记的牌的数量,直至没有标记牌.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,「喵喵炮塔」发动时,你可以改为标记所有手牌.你的攻击范围变为已标记的牌的数量,直至没有标记牌.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_maichongguozai(player) {
							if (player.hasSkill('CALABIYAU_maichongguozai_sunben')) return "<span style='opacity:0.5'>昂扬技,出牌阶段,你可令攻击范围内的其他角色依次进行你指定区域内牌数次【闪电】判定.(至多4次)</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,出牌阶段,你可令攻击范围内的其他角色依次进行你指定区域内牌数次【闪电】判定.(至多4次)<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_kaqiuchongsu(player) {
							if (player.hasSkill('CALABIYAU_kaqiuchongsu_sunben')) return "<span style='opacity:0.5'>昂扬技,出牌阶段,你可以令一名已死亡角色复活,并将其座次移至你的下家.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,出牌阶段,你可以令一名已死亡角色复活,并将其座次移至你的下家.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_shuangshuangshuangfeng(player) {
							if (player.hasSkill('CALABIYAU_shuangshuangshuangfeng_sunben')) return "<span style='opacity:0.5'>昂扬技,回合结束时,你可以令本巡内所有伤害均改为冰冻伤害,且于本巡受到过冰冻伤害的其他角色本巡仅能使用三张牌.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,回合结束时,你可以令本巡内所有伤害均改为冰冻伤害,且于本巡受到过冰冻伤害的其他角色本巡仅能使用三张牌.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_zhihuanmeiying(player) {
							if (player.hasSkill('CALABIYAU_zhihuanmeiying_sunben')) return "<span style='opacity:0.5'>昂扬技,当你扣减体力时,你可以弃置一张牌防止并调离至回合结束.且当前回合角色或伤害来源弃置同颜色牌之前,不能使用该颜色牌.</span><br>☆昂扬:回合结束数和受到伤害数之和为3";
							return '昂扬技,当你扣减体力时,你可以弃置一张牌防止并调离至回合结束.且当前回合角色或伤害来源弃置同颜色牌之前,不能使用该颜色牌.<br>☆昂扬:回合结束数和受到伤害数之和为3';
						},
						CALABIYAU_huanmenghuadie(player) {
							if (player.hasSkill('CALABIYAU_huanmenghuadie_sunben')) return "<span style='opacity:0.5'>昂扬技,轮次开始时,你可以令本轮被距离3以内其他角色击杀的你改为重整一回合,剩余其他角色使用的单体伤害牌不能指定你为目标.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,轮次开始时,你可以令本轮被距离3以内其他角色击杀的你改为重整一回合,剩余其他角色使用的单体伤害牌不能指定你为目标.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_zhonghuoqingxie(player) {
							if (player.storage.CALABIYAU_zhonghuoqingxie) return "转换技,轮次开始时或出牌阶段,你可以①进入<span class='thundertext'>②解除</span>架设状态并①获得<span class='thundertext'>②失去</span>1点护甲.<br>在架设状态,你只有出牌阶段但不可交换座次,可视为使用【杀】但每回合至多使用四张【杀】";
							return "转换技,轮次开始时或出牌阶段,你可以<span class='thundertext'>①进入</span>②解除架设状态并<span class='thundertext'>①获得</span>②失去1点护甲.<br>在架设状态,你只有出牌阶段但不可交换座次,可视为使用【杀】但每回合至多使用四张【杀】";
						},
						CALABIYAU_kuanghongluanzha(player) {
							if (player.hasSkill('CALABIYAU_kuanghongluanzha_sunben')) return "<span style='opacity:0.5'>昂扬技,出牌阶段开始时,你可以进入架设状态,你本回合架设状态下可多使用六张【杀】,且前六张无距离限制并改为将牌堆顶牌当作【火山】置入目标判定区.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,出牌阶段开始时,你可以进入架设状态,你本回合架设状态下可多使用六张【杀】,且前六张无距离限制并改为将牌堆顶牌当作【火山】置入目标判定区.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_chongfanjietou(player) {
							if (player.hasSkill('CALABIYAU_chongfanjietou_sunben')) return "<span style='opacity:0.5'>昂扬技,轮次开始时,你可记录当前的体力值和手牌数;本轮结束时或进入濒死状态时,你将体力值与手牌数调整至与记录值相同.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,轮次开始时,你可记录当前的体力值和手牌数;本轮结束时或进入濒死状态时,你将体力值与手牌数调整至与记录值相同.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_yanliaopaopao(player) {
							if (player.hasSkill('CALABIYAU_yanliaopaopao_sunben')) return "<span style='opacity:0.5'>昂扬技,出牌阶段,你可以令所有其他角色获得一枚破碎的勾玉至你下回合开始,期间失去了此勾玉的角色手牌对你可见且非武将牌上技能失效.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,出牌阶段,你可以令所有其他角色获得一枚破碎的勾玉至你下回合开始,期间失去了此勾玉的角色手牌对你可见且非武将牌上技能失效.<br>☆昂扬:击杀一名角色';
						},
						CALABIYAU_canxizhuizong(player) {
							if (player.storage.CALABIYAU_canxizhuizong) return "转换技,①当你需要使用即时牌时,你可以观看攻击范围内所有角色的手牌,若其中有所需牌你视为使用之;<br><span class='thundertext'>②你对已受伤角色使用牌无距离和次数限制.</span><br>出牌阶段限一次,你可以转换一次此技能";
							return "转换技,<span class='thundertext'>①当你需要使用即时牌时,你可以观看攻击范围内所有角色的手牌,若其中有所需牌你视为使用之;</span><br>②你对已受伤角色使用牌无距离和次数限制.<br>出牌阶段限一次,你可以转换一次此技能";
						},
						CALABIYAU_yuxuekuanglu(player) {
							if (player.hasSkill('CALABIYAU_yuxuekuanglu_sunben')) return "<span style='opacity:0.5'>昂扬技,你可以重置武将牌和其他技能以视为使用一张【杀】,且本回合你使用的伤害牌额外结算一次.</span><br>☆昂扬:击杀一名角色";
							return '昂扬技,出牌阶段,你可以重置武将牌和其他技能以视为使用一张【杀】,且本回合你使用的伤害牌额外结算一次.<br>☆昂扬:击杀一名角色';
						},
					},
					translate: {
						//武将部分
						CALABIYAU_ming: '明',
						CALABIYAU_lawei: '拉薇',
						CALABIYAU_ling: '令',
						CALABIYAU_xiangnaimei: '香奈美',
						CALABIYAU_meiruidisi: '梅瑞狄斯',
						CALABIYAU_mixueer: '米雪儿',
						CALABIYAU_xin: '信',
						CALABIYAU_xinxia: '心夏',
						CALABIYAU_yiweite: '伊薇特',
						CALABIYAU_fulaweiya: '芙拉薇娅',
						CALABIYAU_xinghui: '星绘',
						CALABIYAU_aodaili: '奥黛丽',
						CALABIYAU_baimo: '白墨',
						CALABIYAU_madeleina: '玛德蕾娜',
						CALABIYAU_feisha: '绯莎',
						//卡牌部分
						CALABIYAU_zhiliaowurenji_card: '治疗无人机',
						CALABIYAU_zhiliaowurenji_card_info: '每回合开始时,所属角色回复1点体力,直至三回合或其回合开始.离开判定区时,销毁之,加入召唤者下次摸的牌中',
						CALABIYAU_shouwangzhiyan_caomu: '草木皆兵',
						CALABIYAU_shouwangzhiyan_caomu_info: '出牌阶段,对一名其他角色使用.将【草木皆兵】放置于该角色的判定区里,若判定结果不为♣️️:摸牌阶段,目标角色多摸一张牌;摸牌阶段结束时,与其距离为1的角色各弃置一张牌',
						//技能部分
						_CALABIYAUxianhua: '弦化',
						_CALABIYAUxianhua_info: '',
						_CALABIYAUstartShow: '开场台词',
						_CALABIYAUstartShow_info: '',
						CALABIYAU_pojiadianqiu: '破甲电球',
						CALABIYAU_pojiadianqiu_info: '出牌阶段开始时,你可以摸一张牌并将一张牌当做【杀】使用,此【杀】改为移除目标所有护甲',
						CALABIYAU_qiangleizhujia: '强雷铸甲',
						CALABIYAU_qiangleizhujia_info: '昂扬技,轮次开始时,你可获得3点临时护甲至轮次结束.本轮其他角色的额定回合结束时,你衰减1点护甲并摸一张牌,执行一个仅有出牌阶段的回合.<br>☆昂扬:击杀一名角色',
						CALABIYAU_xunyinglieren: '寻影猎刃',
						CALABIYAU_xunyinglieren_info: '转换技,轮次开始时,你令座次为①偶数②奇数的其他角色本轮明置手牌',
						CALABIYAU_dunyingcangzong: '遁影藏踪',
						CALABIYAU_dunyingcangzong_info: '昂扬技,轮次开始时,你可隐匿且仅能于回合外登场;<br>当你登场时,你依次将牌堆顶当前回合角色体力值(至多为4)张牌当【出其不意】使用.<br>☆昂扬:击杀一名角色',
						CALABIYAU_poxiaoweimu: '破晓帷幕',
						CALABIYAU_poxiaoweimu_info: '你使用非明置牌时,收回并明置之.<br>你的明置牌不计入手牌上限且只能重铸.(出牌阶段限三次)',
						CALABIYAU_bihushengping: '庇护圣屏',
						CALABIYAU_bihushengping_info: '昂扬技,轮次开始时,你可以明置任意张牌并令本轮其他角色使用最短路径经过你的牌时,你可以重铸一张同色明置牌取消之.<br>☆昂扬:击杀一名角色',
						CALABIYAU_xuanlvhuixiang: '旋律回响',
						CALABIYAU_xuanlvhuixiang_info: '回合技,出牌阶段,你可以将一张牌置入一名其他角色的手牌区并明置.若此牌在其区域内,其明置所有手牌且此牌只能被弃置.回合开始时,弃置这些牌',
						CALABIYAU_yanchukaishi: '演出开始',
						CALABIYAU_yanchukaishi_info: '昂扬技,出牌阶段,你可以明置一张手牌,若此牌在你的区域内,其他角色不能使用或打出与此牌同颜色的牌.回合开始时,弃置这些牌.<br>☆昂扬:击杀一名角色',
						CALABIYAU_jinsharelang: '金沙热浪',
						CALABIYAU_jinsharelang_info: '轮次技,出牌阶段,你可分配一张牌,令获得者与其上家或下家本巡无法移动座次且获得牌时须弃置一张牌.<br>背水:此牌点数为A',
						CALABIYAU_liushadazang: '流沙大葬',
						CALABIYAU_liushadazang_info: '昂扬技,出牌阶段,你可以将场上所有牌洗入剩余牌堆中,你对因此失去装备牌的其他角色依次视为使用一张火【杀】.<br>☆昂扬:击杀一名角色',
						CALABIYAU_miaomiaopaota: '喵喵炮塔',
						CALABIYAU_miaomiaopaota_info: '轮次开始时,你可以标记一张手牌.同类型牌进入弃牌堆后,你可以无次数限制的使用标记牌,摸一张牌.若造成了伤害,你可以重新标记',
						CALABIYAU_huolidamiao: '火力大喵',
						CALABIYAU_huolidamiao_info: '昂扬技,「喵喵炮塔」发动时,你可以改为标记所有手牌.你的攻击范围变为无限,直至失去所有标记牌.<br>☆昂扬:击杀一名角色',
						CALABIYAU_shouwangzhiyan: '守望之眼',
						CALABIYAU_shouwangzhiyan_info: '出牌阶段,你可以将一张不为延时锦囊的牌当摸牌效果反转的【草木皆兵】对自己使用,离开判定区前,你使用与之花色相同的牌时摸一张牌',
						CALABIYAU_maichongguozai: '脉冲过载',
						CALABIYAU_maichongguozai_info: '昂扬技,出牌阶段,你可令攻击范围内的其他角色依次进行你指定区域内牌数次【闪电】判定.(至多4次)<br>☆昂扬:击杀一名角色',
						CALABIYAU_zhiliaowurenji: '治疗无人机',
						CALABIYAU_zhiliaowurenji_info: '轮次技,出牌阶段,你可以将一张手牌置于你或攻击范围内角色的判定区,每回合开始时,其回复1点体力,直至三回合或其回合开始.此牌离开判定区时,销毁之,并加入你下次摸的牌中',
						CALABIYAU_kaqiuchongsu: '卡丘重塑',
						CALABIYAU_kaqiuchongsu_info: '昂扬技,出牌阶段,你可以令一名已死亡角色复活,并将其座次移至你的下家.<br>☆昂扬:击杀一名角色',
						CALABIYAU_xiongxiongchuji: '熊熊出击',
						CALABIYAU_xiongxiongchuji_info: '阶段技,出牌阶段,你可将一张手牌当【克服中原】使用,因之摸牌的角色直至下次弃置牌前受到的有来源伤害均改为冰冻伤害',
						CALABIYAU_shuangshuangshuangfeng: '爽爽霜风',
						CALABIYAU_shuangshuangshuangfeng_info: '昂扬技,回合结束时,你可以令本巡内所有伤害均改为冰冻伤害,且于本巡受到过冰冻伤害的其他角色本巡仅能使用三张牌.<br>☆昂扬:击杀一名角色',
						CALABIYAU_zhihuanmeiying: '致幻魅影',
						CALABIYAU_zhihuanmeiying_info: '昂扬技,当你扣减体力时,你可以弃置一张牌防止并调离至回合结束.且当前回合角色或伤害来源弃置同颜色牌之前,不能使用该颜色牌.<br>☆昂扬:回合结束数和受到伤害数之和为3',
						CALABIYAU_huanmenghuadie: '幻梦化蝶',
						CALABIYAU_huanmenghuadie_info: '昂扬技,轮次开始时,你可以令本轮被距离3以内其他角色击杀的你改为重整一回合,剩余其他角色使用的单体伤害牌不能指定你为目标.<br>☆昂扬:击杀一名角色',
						CALABIYAU_shouhuxingmang: '守护星芒',
						CALABIYAU_shouhuxingmang_info: '轮次技,一名角色的回合开始时,你可以交给其一张牌,回合结束时收回之.期间,无护甲的角色获得此牌时,额外获得1点护甲',
						CALABIYAU_xingkongzhimen: '星空之门',
						CALABIYAU_xingkongzhimen_info: '昂扬技,当其他角色受到伤害时,你可以与其获得5点临时护甲至回合结束.届时,你可以将座次移动至其前.<br>☆昂扬:击杀一名角色',
						CALABIYAU_zhonghuoqingxie: '重火倾泻',
						CALABIYAU_zhonghuoqingxie_info: '转换技,轮次开始时或出牌阶段,你可以①进入②解除架设状态并①获得②失去1点护甲.<br>在架设状态,你只有出牌阶段但不可交换座次,可视为使用【杀】但每回合至多使用四张【杀】',
						CALABIYAU_kuanghongluanzha: '狂轰乱炸',
						CALABIYAU_kuanghongluanzha_info: '昂扬技,出牌阶段开始时,你可以进入架设状态,你本回合架设状态下可多使用六张【杀】,且前六张无距离限制并改为将牌堆顶牌当作【火山】置入目标判定区.<br>☆昂扬:击杀一名角色',
						CALABIYAU_xuankongdouwu: '炫空斗舞',
						CALABIYAU_xuankongdouwu_info: '出牌阶段限一次,你可以与一名其他角色轮流弃置一张伤害牌至一方无法弃置,此角色失去1点体力;若此角色不为你,你与其交换座次或将手牌数调整至体力上限',
						CALABIYAU_chongfanjietou: '重返街头',
						CALABIYAU_chongfanjietou_info: '昂扬技,轮次开始时,你可记录当前的体力值和手牌数;本轮结束时或进入濒死状态时,你将体力值与手牌数调整至与记录值相同.<br>☆昂扬:击杀一名角色',
						CALABIYAU_yanliaoshufu: '颜料束缚',
						CALABIYAU_yanliaoshufu_info: '轮次技,一名角色的回合开始时,你可以选择一个座位,本轮的后三回合其与其相连座位上的其他角色无法使用【无懈可击】且每回合使用【闪】的次数上限为1',
						CALABIYAU_yanliaopaopao: '颜料泡泡',
						CALABIYAU_yanliaopaopao_info: '昂扬技,出牌阶段,你可以令所有其他角色获得一枚破碎的勾玉至你下回合开始,期间失去了此勾玉的角色手牌对你可见且非武将牌上技能失效.<br>☆昂扬:击杀一名角色',
						CALABIYAU_canxizhuizong: '残息追踪',
						CALABIYAU_canxizhuizong_info: '转换技,①当你需要使用即时牌时,你可以观看攻击范围内所有角色的手牌,若其中有所需牌你视为使用之;<br>②你对已受伤角色使用牌无距离和次数限制.<br>出牌阶段限一次,你可以转换一次此技能',
						CALABIYAU_yuxuekuanglu: '浴血狂戮',
						CALABIYAU_yuxuekuanglu_info: '昂扬技,你可以重置武将牌和其他技能以视为使用一张【杀】,且本回合你使用的伤害牌额外结算一次.<br>☆昂扬:击杀一名角色',
						//其他部分
						visible_CALABIYAU_xunyinglieren: '被明置',
						visible_CALABIYAU_poxiaoweimu: '破晓帷幕',
						visible_CALABIYAU_bihushengping: '庇护圣屏',
						visible_CALABIYAU_xuanlvhuixiang: '旋律回响',
						visible_CALABIYAU_yanchukaishi: '演出开始',
						unavailable: '不可使用',
						CALABIYAU_TRUTHGroup: "<span style='font-family: CALABIYAU;color: #F00;'>剪</span>剪刀手",
						CALABIYAU_JUSTICEGroup: "<span style='font-family: CALABIYAU;color: #4571EC;'>欧</span>欧泊",
						CALABIYAU_FREDOMGroup: "<span style='font-family: CALABIYAU;color: #BFC148;'>乌</span>乌尔比诺",
						//引文
					},
				};
				for (var i in CALABIYAU.character) {
					CALABIYAU.character[i][4].push('die:ext:卡拉彼丘/audio/' + i + '.mp3');
					CALABIYAU.character[i][4].push('ext:卡拉彼丘/image/character/' + i + '.jpg');
					if (lib.config.CALABIYAUGroup) {
						switch (CALABIYAU.character[i][1]) {
							case 'CALABIYAU_TRUTH':
								CALABIYAU.character[i][1] = 'shu';
								break;
							case 'CALABIYAU_JUSTICE':
								CALABIYAU.character[i][1] = 'wei';
								break;
							case 'CALABIYAU_FREDOM':
								CALABIYAU.character[i][1] = 'qun';
								break;
						}
					}
				}
				lib.config.all.characters.add('CALABIYAU');
				lib.config.characters.add('CALABIYAU');
				lib.translate['CALABIYAU_character_config'] = '<span style="font-family:CALABIYAU;font-style:oblique;">卡拉彼丘</span>';
				return CALABIYAU;
			});
		},
		config: {
			CALABIYAUJianjie: {
				name: '玩前必看',
				intro: '',
				item: {
					1: '',
				},
				textMenu(node, link) {
					lib.setScroll(node.parentNode);
					node.parentNode.style.transform = 'translateY(-100px)';
					node.parentNode.style.height = '532px';
					node.parentNode.style.width = '260px';
					//node.style.width="400px";
					switch (link) {
						case '1':
							node.innerHTML = '<img style=width:240px src=extension/卡拉彼丘/image/ui/卡丘杀第一弹.jpg>';
							break;
					}
				},
			},
			CALABIYAUGroup: {
				name: '势力替换',
				init: false,
				intro: "开启后,将本扩展角色从新增势力改为原生势力.<li><span style='font-family: CALABIYAU;'>剪</span>->蜀<li><span style='font-family: CALABIYAU;'>欧</span>->魏<li><span style='font-family: CALABIYAU;'>乌</span>->群",
				onclick(item) {
					game.saveConfig('extension_卡拉彼丘_CALABIYAUGroup', item);
					game.saveConfig('CALABIYAUGroup', item);
					if (confirm('设置完毕,重启后生效\n是否重启？')) game.reload();
				},
			},
			CALABIYAUChooseAudio: {
				name: '选将语音',
				init: true,
				intro: '开启后,在选将界面点击本扩展武将时会播放对应的配音.<br>注:如果开启了<自动确认>且不为双将模式,会因为选择后自动确认而不能播放配音',
				onclick(item) {
					game.saveConfig('extension_卡拉彼丘_CALABIYAUChooseAudio', item);
					game.saveConfig('CALABIYAUChooseAudio', item);
					if (confirm('设置完毕,重启后生效\n是否重启？')) game.reload();
				},
			},
			CALABIYAUXianhua: {
				name: '弦 化',
				init: '2',
				intro: '开启后,会获得全局技能<弦化>,可在对局中弦化.<br>未实装实际意义',
				item: {
					1: '关闭',
					2: '仅扩展角色',
					3: '所有角色',
				},
			},
		},
		package: {
			intro: "<span style='font-family: yuanli'><li>第一弹<br>本扩展是关于游戏——卡拉彼丘和三国杀的DIY卡牌扩展包,感谢大家的游玩.</span><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '铝宝<br>设计:铝宝、訾灵、辛涟月',
			version: '1.0',
		},
	};
});

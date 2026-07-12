import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '奇特物语',
		content(config, pack) {
			lib.element.player.qtGetName = function () {
				if (this.name.lastIndexOf('_') == -1) {
					return this.name;
				}
				return this.name.slice(this.name.lastIndexOf('_') + 1);
			};
			lib.element.content.phasing = function () {
				'step 0';
				event.trigger('phaseBeginStartBefore');
				('step 1');
				while (ui.dialogs.length) {
					ui.dialogs[0].close();
				}
				if (!player.noPhaseDelay && lib.config.show_phase_prompt) {
					player.popup('回合开始');
				}
				if (lib.config.glow_phase) {
					if (_status.currentPhase) {
						_status.currentPhase.classList.remove('glow_phase');
						game.broadcast(function (player) {
							player.classList.remove('glow_phase');
						}, _status.currentPhase);
					}
					player.classList.add('glow_phase');
					game.broadcast(function (player) {
						player.classList.add('glow_phase');
					}, player);
				}
				_status.currentPhase = player;
				_status.discarded = [];
				game.phaseNumber++;
				player.phaseNumber++;
				game.syncState();
				game.addVideo('phaseChange', player);
				if (game.phaseNumber == 1) {
					delete player._start_cards;
					if (lib.configOL.observe) {
						lib.configOL.observeReady = true;
						game.send('server', 'config', lib.configOL);
					}
				}
				game.log();
				game.log(player, '的回合开始');
				player._noVibrate = true;
				if (get.config('identity_mode') != 'zhong' && get.config('identity_mode') != 'purple' && !_status.connectMode) {
					var num;
					switch (get.config('auto_identity')) {
						case 'one':
							num = 1;
							break;
						case 'two':
							num = 2;
							break;
						case 'three':
							num = 3;
							break;
						case 'always':
							num = -1;
							break;
						default:
							num = 0;
							break;
					}
					if (num && !_status.identityShown && game.phaseNumber > game.players.length * num && game.showIdentity) {
						if (!_status.video) player.popup('显示身份');
						_status.identityShown = true;
						game.showIdentity(false);
					}
				}
				player.ai.tempIgnore = [];
				_status.globalHistory.push({
					cardMove: [],
					custom: [],
					useCard: [],
				});
				game.countPlayer2(function (current) {
					current.actionHistory.push({ useCard: [], respond: [], skipped: [], lose: [], gain: [], sourceDamage: [], damage: [], custom: [], useSkill: [] });
					current.stat.push({ card: {}, skill: {} });
					if (event.parent._roundStart) {
						current.getHistory().isRound = true;
						current.getStat().isRound = true;
					}
				});
				player.getHistory().isMe = true;
				player.getStat().isMe = true;
				if (event.parent._roundStart) {
					game.getGlobalHistory().isRound = true;
				}
				if (ui.land && ui.land.player == player) {
					game.addVideo('destroyLand');
					ui.land.destroy();
				}
				('step 2');
				event.trigger('phaseBeginStart');
			};
			lib.openImageFullscreen = (src, time) => {
				const image = new Image(document.body.clientWidth, document.body.clientHeight);
				image.src = `extension/奇特物语/${src}?t=${Date.now()}`;
				const div = ui.create
					.div(ui.window, {
						width: '100%',
						height: '100%',
						zIndex: 999,
						backgroundSize: '100% 100%',
					})
					.hide();
				let _remove = div.remove;
				div.remove = function () {
					_remove.call(this);
					image.remove();
				};
				image.onload = function () {
					div.css({
						backgroundImage: `url(${this.src})`,
					}).show();
				};
				image.onerror = () => div.remove();
				typeof time === 'number' && setTimeout(() => div.remove(), time);
				return div;
			};
			lib.skill._QT_midun = {
				audio: 'ext:奇特物语/audio:2',
				trigger: {
					global: 'phaseBefore',
					player: ['enterGame', 'showCharacterAfter'],
				},
				filter(event, player) {
					if (get.mode() == 'guozhan') return event.name == 'showCharacter' && event.toShow && event.toShow.includes('qt_yuangukongju');
					if (event.name == 'phase') return player.name == 'qt_yuangukongju';
					return event.name != 'showCharacter' && (event.name != 'phase' || game.phaseNumber == 0);
				},
				forced: true,
				content() {
					'step 0';
					if (player.name != 'qt_yuangukongju') event.finish();
					if (ui.backgroundMusic.src != `extension/奇特物语/audio/backgroundMusic/The Ancient Fear.mp3`) {
						game.saveConfig('volumn_background', parseInt(8));
						ui.backgroundMusic.volume = 8 / 8;
						lib.config.background_music = 'music_custom';
						lib.config.background_music_src = ui.backgroundMusic.src = `extension/奇特物语/audio/backgroundMusic/The Ancient Fear.mp3`;
					}
					setTimeout(function () {
						var a = setTimeout(function () {
							game.log(1);
						}, 1200);
					}, 600);
					('step 1');
					event.openImage = lib.openImageFullscreen('daocaorenCG1.png', 8000);
					('step 2');
					if (!event.num) event.num = 0;
					var previous = player.previous;
					var next = player.next;
					if (next.seatNum != 1) {
						game.broadcastAll(
							function (target1, target2) {
								game.swapSeat(target1, target2, false);
							},
							player,
							previous
						);
						event.num++;
						if (event.num < 8) event.goto(2);
					}
					event.openImage.remove();
					('step 3');
					var list = game.filterPlayer((current) => current != player).sortBySeat();
					event.num = 16 - list.length;
					for (var i = 0; i < list.length; i++) {
						if (i < event.num) {
							var num = list[i].seatNum;
							num += i + 1;
							var player2 = game.addPlayer(num, 'qt_caojianren');
							player2.getId();
							player2.identity = player.identity;
							player2.showIdentity();
							player2.side = player.side;
							player2.identityShown = true;
							player2.init();
						}
					}
					('step 4');
					player
						.chooseTarget('迷遁:请选择要伪装的稻草人', true, function (card, player, target) {
							return target.name == 'qt_caojianren';
						})
						.set('ai', function (target) {
							return Math.random();
						});
					('step 5');
					if (result.bool) {
						event.target = result.targets[0];
						if (game.zhu == player) game.zhu = event.target;
						game.swapPlayer(event.target);
						game.countPlayer(function (current) {
							current.storage.QT_wuhai = false;
						});
						game.countPlayer(function (current) {
							if (current.name == 'qt_yuangukongju') {
								game.removePlayer(current);
							}
						});
						game.countPlayer(function (current) {
							if (current.name == 'qt_daocaoren' && current != player) {
								current.reinit('qt_daocaoren', 'qt_caojianren');
							}
						});
						event.target.reinit('qt_caojianren', 'qt_daocaoren');
					} else {
						event.finish();
					}
				},
			};
			lib.skill._QT_midun_phase = {
				trigger: {
					player: 'phaseBeginStartBefore',
				},
				forced: true,
				filter(event, player) {
					return ['qt_caojianren', 'qt_daocaoren'].includes(player.name);
				},
				content() {
					'step 0';
					if (player.name == 'qt_caojianren') {
						trigger.cancel();
						player.skip('phaseZhunbei');
						player.skip('phaseJudge');
						player.skip('phaseDraw');
						player.skip('phaseUse');
						player.skip('phaseDiscard');
						player.skip('phaseJieshu');
						event.finish();
					}
					('step 1');
					if (player.name == 'qt_daocaoren') {
						player.reinit('qt_daocaoren', 'qt_yuangukongju');
						lib.translate['_QT_midun_phase'] = '远古恐惧';
					} else {
						event.finish();
					}
					('step 2');
					player.trySkillAnimate('_QT_midun_phase');
					('step 3');
					player.useSkill('QT_yege');
				},
			};
			lib.skill._QT_midun_damage = {
				trigger: {
					player: ['damage', 'dieBegin'],
				},
				forced: true,
				filter(event, player) {
					return ['qt_caojianren', 'qt_daocaoren'].includes(player.name);
				},
				content() {
					'step 0';
					if (player.name == 'qt_caojianren') {
						player.node.avatar.setBackgroundImage('extension/奇特物语/image/qt_yuangukongju.jpg');
						lib.translate['_QT_midun_damage'] = '远古恐惧';
						player.node.name.innerHTML = '费德提克';
					} else {
						event.goto(3);
					}
					('step 1');
					player.trySkillAnimate('_QT_midun_damage');
					('step 2');
					bool = false;
					if (game.zhu == player) bool = true;
					game.removePlayer(player);
					if (bool) game.over(false);
					event.finish();
					('step 3');
					if (player.name == 'qt_daocaoren') {
						player.reinit('qt_daocaoren', 'qt_yuangukongju');
						lib.translate['_QT_midun_damage'] = '远古恐惧';
					} else {
						event.finish();
					}
					('step 4');
					player.trySkillAnimate('_QT_midun_damage');
					('step 5');
					if (!_status.dying.length) player.useSkill('QT_yege');
				},
			};
			lib.skill._QT_midun_daocaoren = {
				trigger: {
					player: 'dieBegin',
				},
				forced: true,
				filter(event, player) {
					return game.zhu == player;
				},
				content() {
					'step 0';
					game.countPlayer(function (current) {
						if (current.name == 'qt_daocaoren') {
							player.reinit('qt_daocaoren', 'qt_yuangukongju');
						}
					});
					game.countPlayer(function (current) {
						if (current.name == 'qt_caojianren' || current.name == 'qt_daocaoren') {
							game.removePlayer(current);
						}
					});
				},
			};
			lib.skill._QT_midun_end = {
				trigger: {
					player: 'phaseEnd',
				},
				forced: true,
				filter(event, player) {
					return ['qt_yuangukongju', 'qt_daocaoren'].includes(player.name);
				},
				content() {
					'step 0';
					player
						.chooseTarget('夜割:是否选择一个草间人伪装之？', function (card, player, target) {
							return target.name == 'qt_caojianren';
						})
						.set('ai', function (target) {
							return Math.random();
						});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						game.swapPlayer(event.target);
						game.countPlayer(function (current) {
							current.storage.QT_wuhai = false;
						});
						game.countPlayer(function (current) {
							if (current.hasSkill('QT_kongju')) {
								current.removeSkill('QT_kongju');
							}
						});
						game.countPlayer(function (current) {
							if (current.name == 'qt_yuangukongju') {
								game.removePlayer(current);
							}
						});
						game.countPlayer(function (current) {
							if (current.name == 'qt_daocaoren' && current != player) {
								current.reinit('qt_daocaoren', 'qt_caojianren');
							}
						});
						event.target.reinit('qt_caojianren', 'qt_daocaoren');
					} else {
						event.finish();
					}
				},
			};
			lib.skill._QT_wuhai = {
				trigger: {
					player: 'useCardToPlayered',
				},
				forced: true,
				filter(event, player) {
					if (player.name != 'qt_yuangukongju' || event.target == player) return false;
					return !event.target.storage.QT_wuhai;
				},
				content() {
					'step 0';
					if (!trigger.target.hasSkill('QT_kongju')) {
						trigger.target.addTempSkill('QT_kongju');
						trigger.target.storage.QT_kongju.add(player);
					} else {
						var id = trigger.target.playerid;
						var map = trigger.parent.customArgs;
						if (!map[id]) map[id] = {};
						if (typeof map[id].extraDamage != 'number') {
							map[id].extraDamage = 0;
						}
						map[id].extraDamage++;
					}
				},
			};
			//精品武将
			lib.rank.rarity.rare.addArray([]);
			//史诗武将
			lib.rank.rarity.epic.addArray(['qt_shenlilinghua']);
			//传说武将
			lib.rank.rarity.legend.addArray(['qt_amiya', 'qts_diaochan', 'qt_yunying', 'qt_yuangukongju']);
		},
		precontent() {
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '奇特物语',
					connect: true,
					character: {
						qt_amiya: ['female', 'qun', 4, ['QT_bushu', 'QT_susheng'], []],
						qts_diaochan: ['female', 'shen', '2/3', ['QT_huoxin', 'QT_meihun', 'QT_biyue', 'QT_xiuhua'], []],
						qt_yunying: ['female', 'shu', 4, ['QT_luehuo', 'QT_duanyue', 'QT_zhuiyun'], []],
						qt_shenlilinghua: ['female', 'qun', 5, ['QT_lieqiao', 'QT_linghua'], []],
						qt_yuangukongju: ['male', 'qun', 3, ['QT_midun', 'QT_wuhai'], []],
						qt_caojianren: ['male', 'qun', 3, ['QT_midun_caoren'], []],
						qt_daocaoren: ['male', 'qun', 3, ['QT_midun_daoren'], []],
					},
					characterTitle: {
						qt_amiya: '新的开端',
						qts_diaochan: '欲界非天',
						qt_yunying: '燎原之心',
						qt_shenlilinghua: '白鹭公主',
						qt_yuangukongju: '远古恐惧',
						qt_caojianren: '稻草人',
						qt_daocaoren: '稻草人',
					},
					characterIntro: {
						qt_amiya: '罗德岛的公开领袖,在内部拥有最高执行权.虽然,从外表上看起来仅仅是个不成熟的少女,实际上,她却是深受大家信任的合格的领袖.<br>现在,阿米娅正带领着罗德岛,为了感染者的未来,为了让这片大地挣脱矿石病的阴霾而不懈努力.<br><br>史载,萨卡兹君王奎隆的佩剑,长度约在0.9到1.2米之间,宽约5厘米,材质不明,通体呈黑色,剑身铭刻萨卡兹传统文字,释作<争斗在此止歇>.<br>奎隆继位后整顿卡兹戴尔,深感西方荼害萨卡兹已久,遂率领部分萨卡兹部族向东方迁移,后下落不明.<br>传说,奎隆有令其敌人不战而退之威.有记述称奎隆之敌在与奎隆作战时仿佛会遭受数倍于武器重量之重压,在物理与意志上同遭奎隆捶打,如若侥幸不死,也多成残废.但也有人称奎隆为仁爱君主,任何遭其佩剑划破的创口都不会流血,如若退后,则能苟全性命.<br>不过,部分古籍宣称,在奎隆继位前,其佩剑就已于战争中毁坏,日后奎隆所持武器,只是他以法术塑造出的脆弱外形.这与奎隆此后在萨卡兹冲突中的表现不符,且少有人能解释在此前提下为何奎隆没有重铸爱剑.我推测,奎隆的确有以法术塑形武器之力,其理论基点同样根植于王位,只是奎隆碍于前游侠之身份而甚少使用此类法术.<br>当然,文献记载,奎隆继位后,其佩剑便时常散发青色幽光,如同焰息.由于奎隆性格激烈,此剑日后也被称作<青色怒火>.<br>萨卡兹的大多传说都随卡兹戴尔不断遭毁而佚失,这对历史考察造成很大困难.近日不断有萨卡兹学者呼吁重塑萨卡兹的历史,但研究中为宣扬萨卡兹种之崇高性而向研究材料添油加醋之行为,实为污染.<br>——Logos',
						qts_diaochan: '在东方大陆,传闻中巫祝拥有与生俱来的力量,她有着倾世的绝美容颜,玲珑旖旎的舞姿可以打动神灵,能够赐予战争好运.因此各方势力都会在战事计划初期暗访上门,黄金万两只求巫祝一舞.<br>当弦乐响起,幻舞既出,观者无不沦陷.在他们心中,神灵与自身一样,都将沉沦在这美貌的诱惑中.他们不知道的是,主导战争吉凶胜负的并不是神灵,而是这位所谓的巫祝.<br>旋转于各方势力间,一舞终了情报到手,便是巫祝下达命令之时……',
						qt_yunying: '出生名门的少女云缨,自小听着李娘子的故事长大,憧憬着长安元勋们的传奇人生.<br>为了成为和李娘子一样了不起的英雄,她孜孜不倦的钻研掠火枪,成为街坊邻里眼中<不务正业>的名门千金.初出茅庐的她意料之中地捅了许多篓子,最终被父亲大人扔进大理寺交给狄大人管束,这反而让她来到了更广阔的天地.<br>她脱下小姐的襦裙,换上练功服,系紧人字甲,火红的身影旋风般穿过长安城的大街小巷.从今天开始,<哪里有麻烦,哪里就有她>.绝不要怀疑她的热心肠,当然也不要小瞧她的破坏力',
						qt_shenlilinghua: '继承稻妻城中至为尊崇的三家名门之一——神里家族的,是一对兄妹.哥哥绫人出任<家主>一职,掌管政务,妹妹绫华贵为<公主>,平日主理家族内外事宜.<br>绫华常出现在社交场合,与民间交集也较多.因此,更被人们所熟悉的她反而获得了高于兄长的名望,被雅称为<白鹭公主>.众所周知,神里家的女儿绫华小姐容姿端丽、品行高洁,是深受民众钦慕的人物.<br><br>放眼稻妻领土,未上至雷电将军视听的事务大多由<评定所>处理.<评定所>的议事权分属三家,人称三奉行,即<社奉行>、<天领奉行>与 <勘定奉行>.拥有此三项奉行权利的家族,其姓氏为:神里、九条与柊,乃是稻妻无人不知无人不晓的御三家.而神里绫华,正是社奉行神里家的大小姐,远近闻名的<白鹭公主>.<br>问及她为何被称为白鹭公主,稻妻人各有说辞:<因为绫华大人如白鹭般优雅高洁,您请看,她清丽秀美的外表,她聪敏得体的谈吐,难道当不起一声公主吗？><br><绫华大人她呀,虽说身份高贵,对我们却是礼貌中透着亲切.她个性善良仁厚,很愿意对他人伸出援手.您知道吗？就是她力排众议帮着收容了庶人托马.><br>众说纷纭,却无人说得出<白鹭公主>之名的确切来由.不过,绫华受民众爱戴的事,倒是可见一斑.<br><br>身为社奉行神里家的女儿,绫华常提防着贵胄门庭之间的权力争斗.她年纪尚轻却已名望隆盛,不免遇到嫉妒神里家兄妹的名门子弟暗中挑衅.营造公众形象一事本是形式主义,但对神里家而言,地位使然,再无意义的惯例也有其社交意义.<br>不在稻妻关系网中转圜腾挪,便会坐不稳社奉行之位.因此,兄妹俩达成了一致.兄长绫人政务繁忙且不喜抛头露面,到公众场合现身以树立神里家形象一事,便交给了举止优美、擅长与人打交道的妹妹绫华来办.<br>凭借端庄娴静、风雅有礼的姿态,绫华在各种社交场合都占据了一席之地.无论是跟潜在的合作伙伴交涉,还是与难缠的贵族周旋,她都进退有据,无可挑剔.此外,家族内部诸多事物也由绫华掌理.如果没有她,内宅恐怕早已陷入混乱.<br><br>秋季的一个午后,绫华办完琐事走在回程路上,偶然听见一间老宅中传来苍老的歌声.屋内住着一位双目失明的老妇人.干瘦的手指拨动琴弦,木琴便发出流水般的声响.<br>兴许是耳朵灵敏的关系,老人听见脚步声,询问门外的人是谁.绫华不想她感到困扰,便说自己是迷路误入此地的附近居民.<br>身为社奉行,绫华对民生十分熟悉,很快认出这位膝下无子的孤寡老人正是天气晴朗时在街边弹唱卖艺的那位.曲是过时的老调,歌亦如此.目不能视的老人,早已落后他人太多.即便在追寻永恒的国度之中,也会有活得如此艰辛的人.<br>出于好意,隐瞒身份的绫华陪老人聊了好一会儿.老人当她是普通少女,给她讲木琴的做法和弹法,还将自己收藏的茶叶分了一些给她.与神里家常备的极品茶叶相比,这些粗茶几乎算是草根.但绫华珍重地收下,并再三向她道谢.<br>这一天,她屡次想起双亲.父母若是还在,想必也会有像这样老去的一日.回到家中,绫华将这个故事告诉兄长绫人.兄妹俩一同享用了老人赠予的粗茶.<br>此后每隔一段时日,绫华都亲自前去探望老妇人,依然用着附近居民的名义,每次都为她带去一些平民爱用的生活必需品.<br><街口的绯樱树又开花了,>绫华笑着告诉老人,<如您的琴声一般美丽.><br><br>在民众的想象中,贵族世家吃穿用度规格远超常人,那高贵如神里绫华,一定也过着极其奢侈、极其肆意的生活吧.<br>然而,这样的想法只对了一半.单从形式而言,绫华的生活确实较寻常百姓讲究得多.平日里钻研花道、茶道,品名茶、赏奇花的开销也着实不小.不过,这些都是身为贵族大小姐的她必须掌握的技能,并无<肆意>一说.<br>真正能让绫华露出笑容的,反而是那些寻常百姓也能享受的小事.譬如制作点心,譬如在池塘边捞金鱼,又譬如躲起来阅读八重堂新出的小说…无一不是小事.<br>这种时刻的她,不是受人景仰的白鹭公主,不是掌管神里大宅的绫华大人,而是普普通通的<少女绫华>.卸下端庄持重的对外形象,绽放出随性自在的真我.唯有作为<少女绫华>时,她才能放下重担,做普通女孩也能做的事.<br>深夜肚子饿了,避开佣人偷偷溜到厨房,哼着歌为自己做一碗茶泡饭;茶道课时,偷偷根据茶叶的形状占卜恋爱运势……等等.虽然从未向他人说明,但绫华无比珍惜自己作为普通少女的时间.因为,这样的自由时刻实在很少.<br><br>指导绫华诸门技艺的老师们曾欣慰地表示:无论茶道、剑道或棋道,诸般风雅,绫华都已完全掌握.她俨然是一位文武双全、风姿超绝的贵族小姐了.能教导这样一位学生,身为老师也感到非常愉快.但遗憾之情……当真完全没有吗？绫华默默想道.<br>茶心,和敬清寂的正心.剑心,锐不可当的武心.棋心,审时度势的慧心.茶心、剑心、棋心,俱是她心,此外,却也有着一颗对友人的真心.<br>绫华始终等待着世上能出现一个与她平等相对、并肩而立的友人.如此,才能成为她绫华的好友.<br><也并不是那么难的事吧……可这样的人,究竟在哪里呢？>',
						qt_yuangukongju: '很久以前,在海边的一座高塔中,一名愚蠢的年轻魔法师将某种东西召唤出来,让它进入这个世界却无法控制它.来到他面前的东西,比任何历史记载都更古老、比没有星星的夜更漆黑.这个世界曾竭尽全力遗忘它,而只过了短暂的一瞬,那名法师、那个怪物、还有那座高塔,全都遗失在时间的长河中.<br>符文之地上有什么东西苏醒了.它古老悠久、恐怖骇人.这个被称为费德提克的远古恐惧无声无息地行走在凡人社会的边缘,被恐慌气氛所吸引,以猎物的惊骇为食.它化身成枯瘦简陋的实体,挥舞着破旧的镰刀,亲自收割恐惧.那些不幸从它手中活下来的人,心智会被彻底摧毁.务必小心乌鸦的声音,或者某个像是人类的身影发出的低语……费德提克回来了',
						qt_caojianren: '',
						qt_daocaoren: '',
					},
					translate: {
						qt_amiya: '阿米娅',
						qts_diaochan: '神貂蝉',
						qt_yunying: '云缨',
						qt_shenlilinghua: '神里绫华',
						qt_yuangukongju: '费德提克',
						qt_caojianren: '草间人',
						qt_daocaoren: '草间人',
						QT_bushu: '部署',
						QT_bushu_info: '游戏开始后,你获得三张未加入游戏的可「部署」武将牌,选择一张置于武将牌上并获得其所有技能、性别和势力,直至该「部署」的武将牌被替换.你的每个准备阶段和结束阶段都可以选择一项:①弃置至多两张未展示的武将牌随机获得等量新的武将牌;②更换当前「部署」的武将牌(不可以获得限定技、觉醒技、隐匿技、使命技、主公技等特殊技能)',
						QT_susheng: '苏生',
						QT_susheng_info: '每轮开始时/当你受到1点伤害后,你可以获得一张新的可「部署」武将牌',
						QT_huoxin: '惑心',
						QT_huoxin_info: '锁定技,你对异性角色和异性角色对你使用【杀】时,均视为装备着【雌雄双股剑】',
						QT_meihun: '魅魂',
						QT_meihun_info: '其他男性角色的出牌阶段限一次,其可以交给你X张牌,你减一点体力上限,其加一点体力上限(X为你的体力上限)',
						QT_biyue: '闭月',
						QT_biyue_info: '锁定技,当你的体力值减少时,你将手牌摸至体力上限',
						QT_xiuhua: '修花',
						QT_xiuhua_info: '锁定技,当你即将死亡时,若你区域内有牌,你不死亡并弃置区域内所有牌,将体力上限和体力值调整为Y(Y为你以此法弃置的牌数)',
						QT_baizhouyiheiye: '白昼亦黑夜',
						QT_baizhouyiheiye_info: '出牌阶段限一次,你可以发动「烙印」转换形态',
						QT_mingguangyianying: '明光亦暗影',
						QT_mingguangyianying_info: '出牌阶段限两次,白:你可将一张牌扣与武将牌上,称之为<诞生>,使场上一名角色于其下回合开始时回复一点血量或摸一张牌.若你拥有<诞生>标记,你的摸牌数+1.黑:你可弃置一张<诞生>牌,使场上一名角色于其下回合开始时失去一点血量或弃置一张你指定类型的牌(若没有则随机弃置).<br>当你累计弃置三次<诞生>牌后,场上所有角色进入「终末」状态(弃牌阶段,手牌上限-1)',
						QT_yonghengyiyishun: '永恒亦一瞬',
						QT_yonghengyiyishun_info: '当你使用或打出【杀】/【闪】时,你可以进行一次判定,若结果为红色,你摸一张牌并将一张牌扣与武将牌上,称之为<诞生>',
						QT_luehuo: '掠火',
						QT_luehuo_info: "锁定技,当你发动武将牌上其他技能时,你获得一层「枪意」(至多3层).当你使用一张实体非转化【杀】时,若你有「枪意」,你摸一张牌并移去所有「枪意」,根据移去「枪意」层数执行对应效果:<br><span style='font-family: yuanli' class=firetext>☆止戈(1):此牌额外结算一次并重置『断月』和『追云』.<br>☆摧城(2):此牌结算完成后回复1点体力并重置『断月』和『追云』.<br>☆燎原(3):此牌可以额外指定任意名角色为目标.</span>",
						QT_luehuo_effect1: '止戈',
						QT_luehuo_effect2: '摧城',
						QT_luehuo_effect3: '燎原',
						QT_duanyue: '断月',
						QT_duanyue_info: '每回合限一次,你可以将一名其他角色的一张手牌当作无次数限制的<span class=firetext>火【杀】</span>使用或打出.此牌拥有者进入「眩晕」(非锁定技和防具技能失效)状态直至此【杀】结算完成',
						QT_zhuiyun: '追云',
						QT_zhuiyun_info: '出牌阶段限一次,你可以弃置一张牌或失去一点体力,视为使用一张无距离和次数限制的<span class=firetext>火【杀】</span>',
						QT_lieqiao: '冽鞘',
						QT_lieqiao_info: '①游戏开始时,你可以横置并摸一张牌.②摸牌阶段结束时,你选择一名角色横置(以此法横置的角色无法被属性伤害以外的方法解除横置),若其已横置则改为对其造成一点冰属性伤害;结束阶段开始时,你摸x张牌(x为场上被横置的角色数)',
						QT_lieqiao1: '冽鞘',
						QT_lieqiao2: '冽鞘',
						QT_lieqiao3: '冽鞘',
						QT_linghua: '绫华',
						QT_linghua_info: '限定技,出牌阶段,你可以选择一名角色并视为对其使用了3张冰【杀】;你以此法使用的杀造成伤害后,你选择其一个回合阶段永久失效,你以此法使用的杀被闪抵消后,你死亡',
						QT_linghua2: '绫华',
						QT_midun: '迷遁',
						QT_midun_info: '游戏开始时或你的回合开始时,你在场上所有其他角色之间安插一个「草间人」(已有则大概率不安插).你选择其中一个伪装成「稻草人」',
						QT_wuhai: '巫骇',
						QT_wuhai_info: '①其他角色的出牌阶段限一次,其可以猜测场上一个「草间人」是否为你.②锁定技,当你使用牌指定其他角色为目标时,若其未猜对你的伪装,你对其造成「恐惧」.若其已进入「恐惧」状态,此牌对其伤害+1',
						QT_kongju: '恐惧',
						QT_kongju_info: '锁定技,你无法响应令你获得此技能的角色的牌',
						QT_midun_caoren: '稻草',
						QT_midun_caoren_info: '锁定技,你不参与距离计算且不是牌的合法目标或使用者.你的回合即将开始时,你跳过此回合.当你受到伤害/死亡时,你离开游戏',
						QT_midun_daoren: '稻草',
						QT_midun_daoren_info: '锁定技,你不参与距离计算且不是牌的合法目标或使用者.你的回合即将开始时,你跳过此回合.当你受到伤害/死亡时,你离开游戏',
						QT_yege: '夜割',
						QT_yege_info: '锁定技,你登场时,视为对上家和下家随机使用一张伤害性锦囊牌.你的回合结束时,你重新选择一个「草间人」伪装之',
					},
					skill: {
						QT_bushu: {
							audio: 'ext:奇特物语/audio:2',
							forced: true,
							content() {
								'step 0';
								_status.noclearcountdown = true;
								event.videoId = lib.status.videoId++;
								var cards = player.storage.QT_bushu.character.slice(0);
								var skills = [];
								var sto = player.storage.QT_bushu;
								for (var i in player.storage.QT_bushu.map) {
									skills.addArray(player.storage.QT_bushu.map[i]);
								}
								var cond = 'out';
								if (event.triggername == 'phaseBegin') {
									cond = 'in';
								}
								skills.randomSort();
								skills.sort(function (a, b) {
									return get.skillRank(b, cond) - get.skillRank(a, cond);
								});
								event.aiChoice = skills[0];
								var choice = '更换化身';
								if (event.aiChoice == player.storage.QT_bushu.current2 || get.skillRank(event.aiChoice, cond) < 1) choice = '弃置化身';
								if (player.isOnline2()) {
									player.send(
										function (cards, id) {
											var dialog = ui.create.dialog('是否发动【化身】？', [cards, 'character']);
											dialog.videoId = id;
										},
										cards,
										event.videoId
									);
								}
								event.dialog = ui.create.dialog(get.prompt('QT_bushu'), [cards, 'character']);
								event.dialog.videoId = event.videoId;
								if (!event.isMine()) {
									event.dialog.style.display = 'none';
								}
								if (event.triggername == 'QT_bushu') event._result = { control: '更换化身' };
								else
									player
										.chooseControl('弃置化身', '更换化身', 'cancel2')
										.set('ai', function () {
											return _status.event.choice;
										})
										.set('choice', choice);
								('step 1');
								event.control = result.control;
								if (event.control == 'cancel2') {
									if (player.isOnline2()) {
										player.send('closeDialog', event.videoId);
									}
									delete _status.noclearcountdown;
									if (!_status.noclearcountdown) {
										game.stopCountChoose();
									}
									event.dialog.close();
									event.finish();
									return;
								}
								if (!event.logged) {
									event.logged = true;
								}
								var next = player.chooseButton(true).set('dialog', event.videoId);
								if (event.control == '弃置化身') {
									next.set('selectButton', [1, 2]);
									next.set('filterButton', function (button) {
										return button.link != _status.event.current;
									});
									next.set('current', player.storage.QT_bushu.current);
								} else {
									next.set('ai', function (button) {
										return player.storage.QT_bushu.map[button.link].includes(_status.event.choice) ? 2.5 : 1 + Math.random();
									});
									next.set('choice', event.aiChoice);
								}
								var prompt = event.control == '弃置化身' ? '选择弃置至多两张化身' : '选择要切换的化身';
								var func = function (id, prompt) {
									var dialog = get.idDialog(id);
									if (dialog) {
										dialog.content.childNodes[0].innerHTML = prompt;
									}
								};
								if (player.isOnline2()) {
									player.send(func, event.videoId, prompt);
								} else if (event.isMine()) {
									func(event.videoId, prompt);
								}
								('step 2');
								if (result.bool && event.control != '弃置化身') {
									event.card = result.links[0];
									var func = function (card, id) {
										var dialog = get.idDialog(id);
										if (dialog) {
											for (var i = 0; i < dialog.buttons.length; i++) {
												if (dialog.buttons[i].link == card) {
													dialog.buttons[i].classList.add('selectedx');
												} else {
													dialog.buttons[i].classList.add('unselectable');
												}
											}
										}
									};
									if (player.isOnline2()) {
										player.send(func, event.card, event.videoId);
									} else if (event.isMine()) {
										func(event.card, event.videoId);
									}
									event.skills = player.storage.QT_bushu.map[event.card].slice(0);
									list = ['确定', '返回'];
									player
										.chooseControl(list)
										.set('choice', event.aiChoice)
										.set('ai', function () {
											return _status.event.choice;
										});
								} else {
									lib.skill.QT_bushu.removeHuashen(player, result.links.slice(0));
									lib.skill.QT_bushu.addHuashens(player, result.links.length);
								}
								('step 3');
								if (result.control == '返回') {
									var func = function (id) {
										var dialog = get.idDialog(id);
										if (dialog) {
											for (var i = 0; i < dialog.buttons.length; i++) {
												dialog.buttons[i].classList.remove('selectedx');
												dialog.buttons[i].classList.remove('unselectable');
											}
										}
									};
									if (player.isOnline2()) {
										player.send(func, event.videoId);
									} else if (event.isMine()) {
										func(event.videoId);
									}
									event._result = { control: '更换化身' };
									event.goto(1);
									return;
								}
								if (player.isOnline2()) {
									player.send('closeDialog', event.videoId);
								}
								event.dialog.close();
								delete _status.noclearcountdown;
								if (!_status.noclearcountdown) {
									game.stopCountChoose();
								}
								if (event.control == '弃置化身') return;
								if (player.storage.QT_bushu.current != event.card) {
									player.storage.QT_bushu.current = event.card;
									game.broadcastAll(
										function (character, player) {
											player.sex = lib.character[character][0];
											player.group = lib.character[character][1];
											player.node.name.dataset.nature = get.groupnature(player.group);
										},
										event.card,
										player
									);
								}
								var link = player.storage.QT_bushu.map[event.card].slice(0);
								player.storage.QT_bushu.current2 = event.card;
								player.flashAvatar('QT_bushu', event.card);
								if (player.storage.QT_bushu_skill.length) {
									for (var i = 0; i < player.storage.QT_bushu_skill.length; i++) {
										player.removeSkill(player.storage.QT_bushu_skill[i]);
									}
								}
								player.storage.QT_bushu_skill = [];
								for (var i = 0; i < link.length; i++) {
									player.addSkill(link[i]);
									player.storage.QT_bushu_skill.push(link[i]);
									game.log(player, '获得技能', '#g【' + get.translation(link[i]) + '】');
									player.popup(link[i]);
								}
							},
							init(player) {
								player.storage.QT_bushu = {
									character: [],
									map: {},
								};
								player.storage.QT_bushu_skill = [];
							}, //QQQ之前没有标记才会init
							group: 'QT_bushu_init',
							subSkill: {
								init: {
									trigger: {
										global: 'gameDrawAfter',
										player: 'enterGame',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.name != 'phase' || game.phaseNumber == 0;
									},
									content() {
										lib.skill.QT_bushu.addHuashens(player, 3);
										player.markSkill('QT_bushu');
										var next = game.createEvent('QT_bushu');
										next.player = player;
										next._trigger = trigger;
										next.triggername = 'QT_bushu';
										next.setContent(lib.skill.QT_bushu.content);
									},
								},
							},
							trigger: {
								player: ['phaseBegin', 'phaseEnd', 'QT_bushu'],
							},
							filter(event, player, name) {
								return player.storage.QT_bushu.character.length;
							},
							banned: ['lisu', 'sp_xiahoudun', 'xushao', 'zhoutai', 'old_zhoutai'],
							addHuashen(player) {
								if (!_status.characterlist) {
									var list = [];
									for (var i in lib.character) {
										if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
										list.push(i);
									}
									game.countPlayer2(function (current) {
										list.remove(current.name);
										list.remove(current.name1);
										list.remove(current.name2);
										if (current.storage.QT_bushu && current.storage.QT_bushu.character) list.removeArray(current.storage.QT_bushu.character);
									});
									_status.characterlist = list;
								}
								_status.characterlist.randomSort();
								var bool = false;
								for (var i = 0; i < _status.characterlist.length; i++) {
									var name = _status.characterlist[i];
									if (name.includes('zuoci') || name.indexOf('key') == 0 || lib.skill.QT_bushu.banned.includes(name) || player.storage.QT_bushu.character.includes(name)) continue; //QQQ
									var skills = lib.character[name][3];
									for (var j = 0; j < skills.length; j++) {
										var info = lib.skill[skills[j]];
										if (info.charlotte || (info.unique && !info.gainable) || info.juexingji || info.limited || info.zhuSkill || info.hiddenSkill || info.dutySkill) skills.splice(j--, 1);
									}
									if (skills.length) {
										player.storage.QT_bushu.character.push(name);
										player.storage.QT_bushu.map[name] = skills;
										_status.characterlist.remove(name);
										return name;
									}
								}
							},
							addHuashens(player, num) {
								var list = [];
								for (var i = 0; i < num; i++) {
									var name = lib.skill.QT_bushu.addHuashen(player);
									if (name) list.push(name);
								}
								if (list.length) {
									game.log(player, '获得了', get.cnNumber(list.length) + '张', '可', '#g「部署」', '武将牌');
									lib.skill.QT_bushu.drawCharacter(player, list);
								}
							},
							removeHuashen(player, links) {
								player.storage.QT_bushu.character.removeArray(links);
								_status.characterlist.addArray(links);
								game.log(player, '移去了', get.cnNumber(links.length) + '张', '可', '#g「部署」', '武将牌');
							},
							drawCharacter(player, list) {
								game.broadcastAll(
									function (player, list) {
										if (player.isUnderControl(true)) {
											var cards = [];
											for (var i = 0; i < list.length; i++) {
												var cardname = 'huashen_card_' + list[i];
												lib.card[cardname] = {
													fullimage: true,
													image: 'character:' + list[i],
												};
												lib.translate[cardname] = get.rawName2(list[i]);
												cards.push(game.createCard(cardname, '', ''));
											}
											player.$draw(cards, 'nobroadcast');
										}
									},
									player,
									list
								);
							},
							intro: {
								onunmark(storage, player) {
									_status.characterlist.addArray(storage.character);
									storage.character = [];
								},
								mark(dialog, storage, player) {
									if (storage && storage.current) dialog.addSmall([[storage.current], 'character']);
									if (storage && storage.current2) dialog.add('<div class="text center">' + get.translation(lib.translate[storage.current2]) + '</div>');
									if (storage && storage.character.length) {
										if (player.isUnderControl(true)) {
											dialog.addSmall([storage.character, 'character']);
										} else {
											dialog.addText('共有' + get.cnNumber(storage.character.length) + '张可「部署」武将牌');
										}
									} else {
										return '没有可「部署」武将牌';
									}
								},
								content(storage, player) {
									return '共有' + get.cnNumber(storage.character.length) + '张<>';
								},
								markcount(storage, player) {
									if (storage && storage.character) return storage.character.length;
									return 0;
								},
							},
						},
						QT_susheng: {
							audio: 'ext:奇特物语/audio:2',
							trigger: {
								player: ['damageEnd', 'roundStart'],
							},
							forced: true,
							content() {
								lib.skill.QT_bushu.addHuashens(player, trigger.num || 1);
							},
						},
						QT_huoxin: {
							audio: 'ext:奇特物语/audio:2',
							trigger: {
								player: 'useCardToPlayer',
								target: 'useCardToTarget',
							},
							forced: true,
							filter(event, player) {
								if (event.player.getEquip('cixiong')) return false;
								return event.card.name == 'sha' && event.player.differentSexFrom(event.target);
							},
							content() {
								'step 0';
								trigger.player
									.chooseBool('是否对' + get.translation(trigger.target) + '发动【雌雄双股剑】？')
									.set('prompt2', '当你使用【杀】指定一名异性的目标角色后,你可以令其选择一项:1.弃置一张手牌;2.令你摸一张牌.')
									.set('ai', function (card) {
										return get.attitude(trigger.player, trigger.target) < 0;
									});
								('step 1');
								if (result.bool) {
									trigger.target.chooseToDiscard('弃置一张手牌,或令' + get.translation(trigger.player) + '摸一张牌').set('ai', function (card) {
										var trigger = _status.event.getTrigger();
										return -get.attitude(trigger.target, trigger.player) - get.value(card);
									});
								} else {
									event.finish();
								}
								('step 2');
								if (!result.bool) {
									trigger.player.draw();
								}
							},
						},
						QT_meihun: {
							audio: 'ext:奇特物语/audio:2',
							global: 'QT_meihun_effect',
							subSkill: {
								effect: {
									audio: 'QT_meihun',
									enable: 'phaseUse',
									filter(event, player) {
										if (player.hasSex('female')) return false;
										if (player.hasSkill('QT_meihun') || player.hasSkill('QT_meihun_ed')) return false;
										return game.hasPlayer(function (current) {
											return current.hasSkill('QT_meihun') && player.countCards('he') >= current.maxHp;
										});
									},
									selectCard(card, player, target) {
										var num = 0;
										var list = game.filterPlayer(function (current) {
											return current.hasSkill('QT_meihun');
										});
										for (var i = 0; i < list.length; i++) {
											if (list[i].maxHp > num) num = list[i].maxHp;
										}
										return [0, num];
									},
									position: 'he',
									forced: true,
									delay: false,
									filterCard: true,
									discard: false,
									lose: false,
									filterTarget(card, player, target) {
										return target.hasSkill('QT_meihun') && target.maxHp == ui.selected.cards.length;
									},
									prompt() {
										var player = _status.event.player;
										var list = game.filterPlayer(function (current) {
											return current.hasSkill('QT_meihun');
										});
										var str2 = '';
										for (var i = 0; i < list.length; i++) {
											str2 += get.cnNumber(list[i].maxHp);
											if (i != list.length - 1) str2 += '/';
										}
										var str = '将' + str2 + '张牌交给' + get.translation(list);
										if (list.length > 1) str += '中的一人';
										return str;
									},
									check(card) {
										return 8 - get.value(card);
									},
									content() {
										'step 0';
										player.addTempSkill('QT_meihun_ed');
										player.give(cards, target);
										('step 1');
										target.loseMaxHp();
										player.gainMaxHp();
									},
									ai: {
										order: 2,
										result: {
											player: 1,
										},
									},
								},
								ed: {
								},
							},
						},
						QT_biyue: {
							audio: 'ext:奇特物语/audio:2',
							trigger: {
								player: 'changeHp',
							},
							forced: true,
							filter(event, player) {
								return event.num < 0;
							},
							content() {
								player.drawTo(player.maxHp);
							},
						},
						QT_xiuhua: {
							audio: 'ext:奇特物语/audio:2',
							trigger: {
								player: 'dieBegin',
							},
							filter(event, player) {
								return player.countCards('hej') > 0;
							},
							forced: true,
							content() {
								'step 0';
								trigger.cancel();
								('step 1');
								var cards = player.getCards('hej');
								player.discard(cards);
								player.maxHp = cards.length;
								player.hp = cards.length;
							},
						},
						QT_baizhouyiheiye: {},
						QT_mingguangyianying: {},
						QT_yonghengyiyishun: {},
						QT_luehuo: {
							init(player, storage) {
								player.storage.QT_luehuo = 0;
							},
							mark: true,
							intro: {
								mark(dialog, storage, player) {
									dialog.addText('<div class="text center">当前拥有' + storage + '层「枪意」</div>');
									if (storage == 1) {
										dialog.addText("<span style='font-family: yuanli' class=firetext>坚意·止戈<br>使用【杀】额外结算一次</span>");
									} else if (storage == 2) {
										dialog.addText("<span style='font-family: yuanli' class=firetext>锐意·摧城<br>使用【杀】结算完成后回复1点体力</span>");
									} else if (storage == 3) {
										dialog.addText("<span style='font-family: yuanli' class=firetext>真意·燎原<br>使用【杀】可以令任意名角色成为额外目标</span>");
									}
								},
								content(storage) {
									return '当前拥有' + storage + '层枪意';
								},
							},
							audio: 'ext:奇特物语/audio:2',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.cards.length != 1 || (get.position(event.cards[0], true) != 'o' && event.card.name != event.cards[0].name)) return false;
								return event.card.name == 'sha' && player.storage.QT_luehuo > 0;
							},
							forced: true,
							content() {
								player.draw();
								var num = player.storage.QT_luehuo;
								player.storage.QT_luehuo = 0;
								player.markSkill('QT_luehuo');
								switch (num) {
									case 1:
										player.addTempSkill('QT_luehuo_effect1');
										break;
									case 2:
										player.addTempSkill('QT_luehuo_effect2');
										break;
									case 3:
										player.addTempSkill('QT_luehuo_effect3');
										break;
								}
								player.storage.QT_luehuo = 0;
								player.markSkill('QT_luehuo');
							},
							group: 'QT_luehuo_skill',
							subSkill: {
								skill: {
									forced: true,
									trigger: {
										player: ['logSkillBegin', 'useSkillBegin'],
									},
									popup: false,
									filter(event, player) {
										var skill = event.skill;
										if (['QT_luehuo', 'QT_luehuo_skill', 'QT_luehuo_effect1', 'QT_luehuo_effect2', 'QT_luehuo_effect3'].includes(skill)) return false;
										var info = get.info(skill);
										var skills = player.getOriginalSkills();
										return skills.includes(skill);
									},
									content() {
										game.log(trigger.skill);
										if (player.storage.QT_luehuo < 3) player.storage.QT_luehuo++;
										player.markSkill('QT_luehuo');
									},
								},
								effect1: {
									audio: 'ext:奇特物语/audio:2',
									trigger: {
										player: 'useCardAfter',
									},
									forced: true,
									filter(event, player) {
										return event.card.name == 'sha';
									},
									content() {
										game.playAudio('../extension/奇特物语/audio/QT_luehuo_effect1' + Math.ceil(Math.random() * 2));
										player.removeSkill('QT_luehuo_effect1');
										game.log(player, '发动了', '<span class=firetext>【掠火·止戈】</span>');
										player.popup('掠火·止戈');
										player.removeSkill('QT_duanyue_ed');
										player.removeSkill('QT_zhuiyun_ed');
										var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
										var next = player.useCard(card, trigger.targets, false, 'noai');
										next.set('addCount', false);
										next.set('animate', false);
										next.set('audio', false);
										next.set('nopopup', true);
										player.actionHistory[player.actionHistory.length - 1].useCard.pop();
									},
								},
								effect2: {
									audio: 'ext:奇特物语/audio:2',
									trigger: {
										player: 'useCardAfter',
									},
									forced: true,
									filter(event, player) {
										return event.card.name == 'sha';
									},
									content() {
										game.playAudio('../extension/奇特物语/audio/QT_luehuo_effect2' + Math.ceil(Math.random() * 2));
										player.removeSkill('QT_luehuo_effect2');
										game.log(player, '发动了', '<span class=firetext>【掠火·摧城】</span>');
										player.popup('掠火·摧城');
										player.removeSkill('QT_duanyue_ed');
										player.removeSkill('QT_zhuiyun_ed');
										player.recover();
									},
								},
								effect3: {
									audio: 'ext:奇特物语/audio:2',
									trigger: {
										player: 'useCard',
									},
									forced: true,
									filter(event, player) {
										return event.card.name == 'sha';
									},
									content() {
										'step 0';
										player.removeSkill('QT_luehuo_effect3');
										('step 1');
										player
											.chooseTarget('是否发动【真意·燎原】？', '为' + get.translation(trigger.card) + '添加任意个目标', [1, Infinity], function (card, player, target) {
												var evt = _status.event.getTrigger();
												return target != player && !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target);
											})
											.set('ai', function (target) {
												return get.effect(target, _status.event.getTrigger().card, _status.event.player);
											});
										('step 2');
										if (result.targets?.length) {
											game.playAudio('../extension/奇特物语/audio/QT_luehuo_effect3' + Math.ceil(Math.random() * 2));
											var targets = result.targets;
											game.log(player, '对', targets, '发动了', '<span class=firetext>【掠火·燎原】</span>');
											player.popup('掠火·燎原');
											player.line(targets, trigger.card.nature);
											trigger.targets.addArray(targets);
										} else {
											game.playAudio('../extension/奇特物语/audio/QT_luehuo_effect3' + Math.ceil(Math.random() * 2));
											game.log(player, '发动了', '<span class=firetext>【掠火·燎原】</span>');
										}
									},
								},
							},
						},
						QT_duanyue: {
							enable: ['chooseToUse', 'chooseToRespond'],
							audio: 'ext:奇特物语/audio:2',
							forced: true,
							filter(event, player) {
								if (player.hasSkill('QT_duanyue_ed')) return false;
								if (!event.filterCard || (!event.filterCard({ name: 'sha' }, player, event) && event.type != 'phase')) return false;
								return game.hasPlayer(function (current) {
									return current.countCards('h') > 0;
								});
							},
							content() {
								'step 0';
								var str = '〖断月〗:请选择一名有手牌的其他角色:';
								player.chooseTarget(str, function (card, player, target) {
									return target.countCards('h') > 0 && target != player;
								}).ai = (target) => {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									var h = target.getCards('h')[0];
									if (att <= 0) {
										if (h && !target.hasSkillTag('noh')) return 2;
									} else {
										if (h && target.hasSkillTag('noh')) return 1;
									}
									return 1;
								};
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.addTempSkill('QT_duanyue_ed');
									player.choosePlayerCard(event.target, 'h').set('filterButton', function (button) {
										return event.target.getCards('h').includes(button.link);
									}).ai = get.buttonValue;
								} else {
									_status.QT_duanyue_aiCanceled = true;
									event.finish();
									event.getParent(2).goto(0);
								}
								('step 2');
								if (result.cards?.length) {
									event.cards = result.cards;
									_status.QT_duanyue_aiCanceled = false;
									game.log(player, '对', target, '发动了', '#g【断月】');
									game.playAudio('../extension/奇特物语/audio/QT_duanyue' + Math.ceil(Math.random() * 2));
									player.gain(event.cards, 'give', 'log');
									target.storage.QT_duanyue_sha = player;
									target.addTempSkill('QT_duanyue_effect');
								} else {
									_status.QT_duanyue_aiCanceled = true;
									event.finish();
									event.getParent(2).goto(0);
								}
								('step 3');
								var evt = event.getParent(2);
								var bool = true;
								for (var i of event.cards) {
									if (game.checkMod(i, player, 'unchanged', 'cardEnabled2', player) === false) bool = false;
								}
								if (bool) {
									var card = event.cards[0],
										viewAs = 'sha';
									if (evt.name == 'chooseToUse') {
										var bool2 = true;
										var cardx = {
											name: viewAs,
											suit: event.cards[0].suit,
											number: event.cards[0].number,
											nature: 'fire',
											cards: event.cards,
										};
										if (viewAs == 'sha' && evt.type == 'phase') {
											bool2 = game.hasPlayer((current) => {
												return player.canUse(cardx, current, null);
											});
										}
										game.broadcastAll(function (card) {
											lib.skill.QT_duanyue_backup2.viewAs = card;
											lib.skill.QT_duanyue_backup2.filterCard = (card) => card == lib.skill.QT_duanyue_backup2.viewAs.cards[0];
											lib.skill.QT_duanyue_backup2.selectCard = -1;
											lib.skill.QT_duanyue_backup2.prompt = '选择' + get.translation(card) + '的目标';
										}, cardx);
										if (evt.type == 'phase') {
											game.broadcastAll(function (card) {
												lib.skill.QT_duanyue_backup.viewAs = card;
												lib.skill.QT_duanyue_backup.filterCard = (card) => card == lib.skill.QT_duanyue_backup.viewAs.cards[0];
											}, cardx);
											var next = player.chooseToUse();
											next.set('openskilldialog', '【断月】选择' + get.translation(cardx) + '的目标');
											next.set('filterCard', () => true);
											next.set('filterTarget', function (card, player, target) {
												return player.canUse('sha', target, false);
											});
											if (bool2) next.set('selectCard', -1);
											next.set('addCount', false);
											next.set('_backupevent', 'QT_duanyue_backup');
											next.set('custom', {
												add: {},
												replace: { window() { } },
											});
											next.backup('QT_duanyue_backup');
										}
									} else {
										evt.result.card = {
											name: viewAs,
											nature: 'fire',
											cards: event.cards,
										};
										evt.result.cards = [card];
										evt.redo();
										return;
									}
								} else {
									event.cancel();
								}
								evt.goto(0);
							},
							subSkill: {
								backup: {
									precontent() { },
								},
								backup2: {
									precontent() { },
									filterCard() {
										return false;
									},
									selectCard: -1,
									silent: true,
									forced: true,
									popup: false,
								},
								ed: {
								},
								effect: {
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
									marktext: '眩晕',
									intro: {
										content(storage, player, skill) {
											var list = player.getSkills(null, false, false).filter(function (i) {
												return lib.skill.QT_duanyue_effect.skillBlocker(i, player);
											});
											if (player.getEquip(2)) list.add(player.getEquip(2).name);
											if (list.length) return '失效技能:' + get.translation(list);
											return '无失效技能';
										},
									},
									audio: 'QT_duanyue',
									trigger: {
										global: ['useCardAfter', 'respondAfter'],
									},
									forced: true,
									filter(event, player) {
										if (event.player != player.storage.QT_duanyue_sha) return false;
										return event.card.name == 'sha';
									},
									content() {
										player.removeSkill('QT_duanyue_effect');
									},
									ai: {
										unequip2: true,
									},
								},
							},
							ai: {
								respondSha: true,
								order() {
									var player = _status.event.player;
									if (_status.event.type == 'phase') return 11;
									if (
										game.hasPlayer(function (current) {
											return current.countCards('h') == 1 || current.countCards('e') == 1;
										})
									)
										return get.order({ name: 'sha' }) + 0.4;
									return get.order({ name: 'sha' }) - 0.4;
								},
								result: {
									player(player) {
										if (_status.event.name == 'chooseToUse') {
											if (_status.event.type && _status.event.type == 'phase') {
												if (
													game.hasPlayer((current) => get.effect(current, { name: 'sha' }, player, player) > 0 && player.inRange(current) && get.attitude(player, current) < 0) &&
													game.hasPlayer(function (current) {
														return current.countCards('h') == 1 || current.countCards('e') == 1;
													})
												)
													return 1;
											} else if (_status.event.type && _status.event.type != 'phase' && player.hp <= 2 && player.countCards('h', { name: 'sha' }) == 0) return 1;
											else if (
												_status.event.type &&
												_status.event.type != 'phase' &&
												game.hasPlayer(function (current) {
													return current.countCards('h') == 1 || current.countCards('e') == 1;
												})
											)
												return 1;
										}
										return 0;
									},
								},
							},
						},
						QT_zhuiyun: {
							audio: 'ext:奇特物语/audio:2',
							enable: 'phaseUse',
							position: 'he',
							filterCard: true,
							selectCard: [0, 1],
							filterTarget(card, player, target) {
								return player.canUse('sha', target, false);
							},
							filter(event, player) {
								if (player.hasSkill('QT_zhuiyun_ed')) return false;
								return player.hasUseTarget({ name: 'sha' }, false);
							},
							content() {
								'step 0';
								player.addTempSkill('QT_zhuiyun_ed', { player: 'phaseUseEnd' });
								if (cards.length == 0) {
									player.loseHp();
								}
								('step 1');
								player.useCard({ name: 'sha', nature: 'fire' }, target).addCount = false;
							},
							prompt: '弃置一张牌或失去一点体力,视为使用一张无距离和次数限制的【杀】',
							check(card) {
								return 10 - get.value(card);
							},
							subSkill: {
								ed: {
								},
							},
							ai: {
								order: 10,
								result: {
									player: 1,
									target: -1,
								},
							},
						},
						QT_lieqiao: {
							audio: 'ext:奇特物语/audio:2',
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							group: ['QT_lieqiao1', 'QT_lieqiao3'],
							logTarget: 'player',
							filter(event, player) {
								return game.players.length > 1 && (event.name != 'phase' || game.phaseNumber == 0);
							},
							prompt: '冽鞘:是否摸一张牌并进入横置状态？',
							content() {
								player.draw();
								player.link(true);
							},
						},
						QT_lieqiao3: {
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return (
									game.countPlayer(function (current) {
										return current.isAlive() && current.isLinked();
									}) > 0 && player.isAlive()
								);
							},
							content() {
								var num = game.countPlayer(function (current) {
									return current.isAlive() && current.isLinked();
								});
								player.draw(num);
							},
						},
						QT_lieqiao1: {
							trigger: {
								player: 'phaseDrawEnd',
							},
							popup: false,
							forced: true,
							filter(event, player) {
								return (
									game.countPlayer(function (current) {
										return current.isAlive();
									}) > 0 && player.isAlive()
								);
							},
							content() {
								'step 0';
								player.chooseTarget(1, true, '冽鞘:选择一名角色横置,若其已横置,你对其造成一点冰属性伤害').set('ai', function (target) {
									return -(get.attitude(player, target) + target.getDamagedHp());
								});
								('step 1');
								if (result.bool) {
									if (!result.targets[0].isLinked()) {
										result.targets[0].addSkill('QT_lieqiao2');
										result.targets[0].link(true);
									} else {
										result.targets[0].damage(1, 'ice');
									}
								}
							},
						},
						QT_lieqiao2: {
							trigger: {
								player: ['linkBefore', 'damageBefore'],
							},
							charlotte: true,
							forced: true,
							popup: false,
							filter(event, player) {
								if (event.name == 'link') return player.isLinked();
								if (event.name == 'damage') return event.nature && event.num > 0;
								return false;
							},
							content() {
								if (trigger.name == 'link') {
									trigger.cancel();
								}
								if (trigger.name == 'damage') {
									player.removeSkill('QT_lieqiao2');
								}
							},
						},
						QT_linghua: {
							audio: 'ext:奇特物语/audio:2',
							enable: 'phaseUse',
							limited: true,
							intro: {
								content: 'limited',
							},
							filterTarget: true,
							selectTarget: 1,
							init(player, skill) {
								player.storage[skill] = false;
							},
							filter(event, player) {
								return player.isAlive();
							},
							content() {
								'step 0';
								player.awakenSkill('QT_linghua');
								player.addSkill('QT_linghua2');
								event.count = 3;
								('step 1');
								event.count--;
								('step 2');
								player.useCard({ name: 'sha', nature: 'ice' }, target);
								('step 3');
								if (event.count > 0) {
									event.goto(1);
								} else {
									event.finish();
								}
							},
							mark: true,
						},
						QT_linghua2: {
							trigger: {
								player: 'shaMiss',
								source: 'damageEnd',
							},
							popup: false,
							forced: true,
							filter(event, player) {
								if (event.name == 'damage') {
									return event.getParent(3).name == 'QT_linghua';
								} else {
									return event.getParent(2).name == 'QT_linghua' && player.isAlive();
								}
							},
							content() {
								'step 0';
								if (trigger.name == 'damage') {
									var list = [];
									if (!trigger.player.hasSkill('QT_linghua3')) list.push('令' + get.translation(trigger.player) + '失去准备阶段');
									if (!trigger.player.hasSkill('QT_linghua4')) list.push('令' + get.translation(trigger.player) + '失去判定阶段');
									if (!trigger.player.hasSkill('QT_linghua5')) list.push('令' + get.translation(trigger.player) + '失去摸牌阶段');
									if (!trigger.player.hasSkill('QT_linghua6')) list.push('令' + get.translation(trigger.player) + '失去出牌阶段');
									if (!trigger.player.hasSkill('QT_linghua7')) list.push('令' + get.translation(trigger.player) + '失去弃牌阶段');
									if (!trigger.player.hasSkill('QT_linghua8')) list.push('令' + get.translation(trigger.player) + '失去结束阶段');
									list.push('cancel2');
									player
										.chooseControl(list)
										.set('prompt', get.prompt('QT_linghua', trigger.player))
										.set('ai', function () {
											var evt = _status.event.getTrigger();
											if (get.attitude(player, evt.player) < 0 && !trigger.player.hasSkill('QT_linghua6')) return '令' + get.translation(trigger.player) + '失去出牌阶段';
											if (get.attitude(player, evt.player) < 0 && !trigger.player.hasSkill('QT_linghua5')) return '令' + get.translation(trigger.player) + '失去摸牌阶段';
											if (get.attitude(player, evt.player) > 3 && !trigger.player.hasSkill('QT_linghua7')) return '令' + get.translation(trigger.player) + '失去弃牌阶段';
											if (get.attitude(player, evt.player) > 0 && !trigger.player.hasSkill('QT_linghua4')) return '令' + get.translation(trigger.player) + '失去判定阶段';
											if (get.attitude(player, evt.player) >= 0 && !trigger.player.hasSkill('QT_linghua3')) return '令' + get.translation(trigger.player) + '失去准备阶段';
											if (get.attitude(player, evt.player) >= 0 && !trigger.player.hasSkill('QT_linghua8')) return '令' + get.translation(trigger.player) + '失去结束阶段';
										});
								} else {
									player.die();
									event.finish();
								}
								('step 1');
								if (result.control != 'cancel2') {
									event.control = result.control;
								} else {
									event.finish();
								}
								('step 2');
								if (event.control == '令' + get.translation(trigger.player) + '失去出牌阶段') {
									trigger.player.addSkill('QT_linghua6');
								}
								if (event.control == '令' + get.translation(trigger.player) + '失去摸牌阶段') {
									trigger.player.addSkill('QT_linghua5');
								}
								if (event.control == '令' + get.translation(trigger.player) + '失去弃牌阶段') {
									trigger.player.addSkill('QT_linghua7');
								}
								if (event.control == '令' + get.translation(trigger.player) + '失去判定阶段') {
									trigger.player.addSkill('QT_linghua4');
								}
								if (event.control == '令' + get.translation(trigger.player) + '失去准备阶段') {
									trigger.player.addSkill('QT_linghua3');
								}
								if (event.control == '令' + get.translation(trigger.player) + '失去结束阶段') {
									trigger.player.addSkill('QT_linghua8');
								}
							},
						},
						QT_linghua3: {
							charlotte: true,
							forced: true,
							popup: false,
							trigger: {
								player: 'phaseZhunbeiBefore',
							},
							content() {
								trigger.cancel();
								game.log(player, '跳过了准备阶段');
							},
						},
						QT_linghua4: {
							charlotte: true,
							forced: true,
							popup: false,
							trigger: {
								player: 'phaseJudgeBefore',
							},
							content() {
								trigger.cancel();
								game.log(player, '跳过了判定阶段');
							},
						},
						QT_linghua5: {
							charlotte: true,
							forced: true,
							popup: false,
							trigger: {
								player: 'phaseDrawBefore',
							},
							content() {
								trigger.cancel();
								game.log(player, '跳过了摸牌阶段');
							},
						},
						QT_linghua6: {
							charlotte: true,
							forced: true,
							popup: false,
							trigger: {
								player: 'phaseUseBefore',
							},
							content() {
								trigger.cancel();
								game.log(player, '跳过了出牌阶段');
							},
						},
						QT_linghua7: {
							charlotte: true,
							forced: true,
							popup: false,
							trigger: {
								player: 'phaseDiscardBefore',
							},
							content() {
								trigger.cancel();
								game.log(player, '跳过了弃牌阶段');
							},
						},
						QT_linghua8: {
							charlotte: true,
							forced: true,
							popup: false,
							trigger: {
								player: 'phaseJieshuBefore',
							},
							content() {
								trigger.cancel();
								game.log(player, '跳过了结束阶段');
							},
						},
						QT_midun: {
							audio: 'ext:奇特物语/audio:3',
							derivation: 'QT_yege',
						},
						QT_wuhai: {
							audio: 'ext:奇特物语/audio:10',
							subSkill: {
								guess: {
									enable: 'phaseUse',
									filter(event, player) {
										if (
											player.getHistory('custom', function (evt) {
												return evt.QT_wuhai_guess == true;
											}).length
										)
											return false;
										if (
											game.hasPlayer(function (current) {
												return ['qt_yuangukongju'].includes(current);
											})
										)
											return false;
										return !['qt_caojianren', 'qt_daocaoren', 'qt_yuangukongju'].includes(player.name);
									},
									forced: true,
									audio: 'ext:奇特物语/audio:2',
									content() {
										'step 0';
										player
											.chooseTarget('巫骇:是否猜测费德提克伪装的稻草人？', function (card, player, target) {
												return ['qt_caojianren', 'qt_daocaoren'].includes(target.name);
											})
											.set('ai', function (target) {
												return Math.random();
											});
										('step 1');
										if (result.bool) {
											game.playAudio('../extension/奇特物语/audio/QT_wuhai_guess' + Math.ceil(Math.random() * 2));
											game.log('#bqt_yuangukongju', '对', player, '发动了', '#g【', '#gQT_wuhai', '#g】');
											player.getHistory('custom').push({ QT_wuhai_guess: true });
											if (result.targets[0].name == 'qt_daocaoren') player.storage.QT_wuhai = true;
										}
									},
								},
							},
						},
						QT_kongju: {
							audio: 'ext:奇特物语/audio:5',
							init(player, skill) {
								if (!player.storage[skill]) player.storage[skill] = [];
							},
							charlotte: true,
							mark: true,
							marktext: '恐惧',
							intro: {
								name: '恐惧',
								content: '不能响应$使用的牌',
								markcount() {
									return 0;
								},
							},
							trigger: {
								target: 'useCardToTargeted',
							},
							forced: true,
							filter(event, player) {
								return player.storage.QT_kongju.includes(event.player);
							},
							content() {
								player.popup('恐惧');
								trigger.parent.directHit.add(player);
							},
						},
						QT_midun_caoren: {
							audio: 'ext:奇特物语/audio:2',
							mod: {
								cardEnabled() {
									return false;
								},
								cardSavable() {
									return false;
								},
								targetEnabled() {
									return false;
								},
							},
							global: 'QT_wuhai_guess',
							group: ['undist'],
						},
						QT_midun_daoren: {
							audio: 'ext:奇特物语/audio:2',
							mod: {
								cardEnabled() {
									return false;
								},
								targetEnabled() {
									return false;
								},
							},
							global: 'QT_wuhai_guess',
							group: ['undist'],
						},
						QT_yege: {
							audio: 'ext:奇特物语/audio:4',
							content() {
								'step 0';
								var previous = player.previous;
								var next = player.next;
								var list = [];
								for (var name of lib.inpile) {
									var type = get.type(name);
									if (type != 'trick') continue;
									var card = { name: name };
									if (get.tag(card, 'damage') > 0 && player.hasUseTarget(card)) {
										list.push(name);
									}
								}
								cardName = list.randomGets(1);
								player.useCard({ name: cardName }, [previous, next], false);
							},
						},
					},
				};
				lib.config.all.characters.add('奇特物语');
				lib.config.characters.add('奇特物语');
				for (var i in QQQ.character) {
					QQQ.character[i][4].add(`ext:奇特物语/image/${i}.jpg`)
				}
				lib.translate['奇特物语_character_config'] = `奇特物语`;
				return QQQ;
			});
		},
		package: {
			intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '漠繎、2HAlO₂·H₂Oฅฅ*',
			version: '2.0',
		},
	};
});

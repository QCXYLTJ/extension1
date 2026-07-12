import { lib, game, ui, get, ai, _status } from '../../noname.js';
import('./cards.js');
const extensionInfo = await lib.init.promises.json(`extension/斗破苍穹X阴阳师/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '斗破苍穹X阴阳师',
		content(config, pack) {
			// ---------------------------------------势力------------------------------------------//
			lib.group.push('qxq_dpcq');
			lib.translate.qxq_dpcq = '斗破';
			lib.group.push('qxq_yys');
			lib.translate.qxq_yys = '阴阳师';
			lib.group.push('qxq_yysboss');
			lib.translate.qxq_yysboss = '阴阳师Ⅱ';
			lib.group.push('qxq_yk');
			lib.translate.qxq_yk = '云空';
			// ---------------------------------------属性------------------------------------------//
			game.addNature('light', '光', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('dark', '暗', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('wind', '风', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('gold', '金', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('wood', '木', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('water', '水', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			game.addNature('soil', '土', {
				linked: true,
				order: 1000,
			}); //添加杀的属性
			//-------------------------------------------武将评级------------------------------------------//
			if (lib.rank) {
				//斗破苍穹强度A级-阴阳师R稀有度
				//斗破
				lib.rank.rarity.junk.addArray(['qxq_dpcq_yafei']);
				//阴阳师
				lib.rank.rarity.junk.addArray(['qxq_yys_cszn', 'qxq_yys_jiaotu', 'qxq_yys_zuofutongzi']);
				//斗破苍穹强度S级-阴阳师SR稀有度
				//斗破
				lib.rank.rarity.rare.addArray(['qxq_dpcq_xiaoyixian', 'qxq_dpcq_yaochen', 'qxq_dpcq_mdsnw', 'qxq_dpcq_haibodong']);
				//阴阳师
				lib.rank.rarity.rare.addArray(['qxq_yys_rihefang', 'qxq_yk_fuling']);
				//斗破苍穹强度SS级-阴阳师SSR稀有度
				//斗破
				lib.rank.rarity.epic.addArray(['qxq_dpcq_xiaoyan', 'qxq_dpcq_xiaoxuner', 'qxq_dpcq_yunyun', 'qxq_dpcq_naranyanran', 'qxq_dpcq_lingying']);
				//阴阳师
				lib.rank.rarity.epic.addArray(['qxq_yys_baqidashe', 'qxq_yys_buzhihuo', 'qxq_yys_huiyeji', 'qxq_yys_qianji', 'qxq_yys_yuanjieshen']);
				//斗破苍穹强度SSS级-阴阳师SP稀有度
				//斗破
				lib.rank.rarity.legend.addArray([]);
				//阴阳师
				lib.rank.rarity.legend.addArray(['qxq_yys_gwjttz', 'qxq_yys_tianjianrenxinguiqie']);
			}
			// ---------------------------------------斗破苍穹------------------------------------------//
			lib.skill._qxqdpcq_shanghaijisuan = {
				trigger: {
					global: ['damageBegin'],
				},
				forced: true,
				silent: true,
				_priority: 202130,
				filter(event, player) {
					return event.source;
				},
				async content(event, trigger, player) {
					for (const npc of [trigger.source, trigger.player]) {
						if (!npc.storage.yysinit) {
							npc.yysinit();
						}
					}
					const atk = trigger.source.storage.yysATK || 1000;
					const ATKx = trigger.source.storage.yysATKx / 100;
					const def = trigger.player.storage.yysDEF || 1000;
					const DEFx = trigger.player.storage.yysDEFx / 100;
					const cs = trigger.source.storage.yysCS / 100;
					const css = trigger.source.storage.yysCSS / 100;
					const D = trigger.source.storage.yysDamageup / 100;
					const Dd = -trigger.player.storage.yyssustainup / 100;
					const Da = (1 + D) / (Dd + 1);
					var x = trigger.num;
					var a = atk * (1 + ATKx);
					var d = def * (1 + DEFx);
					var da = a / d;
					var w = da * css;
					var damageda = Math.round(da * Da);
					var damagew = Math.round(w * Da);
					if (Math.random() <= cs) {
						trigger.source.popup('暴击');
						trigger.num += damagew - 1;
						if (trigger.player.hasSkill('yhdizangxiang_dzx')) {
							var l = trigger.player.maxHp;
							var L = Math.round(l * 0.3);
							trigger.player.changeHujia(L);
						}
					} else {
						trigger.num += damageda - 1;
					}
				},
			};
			lib.skill._yh_equipEnd = {
				trigger: {
					global: 'gameStart',
					player: 'useCardEnd',
				},
				silent: true,
				forced: true,
				_priority: 202130,
				filter(event, player, name) {
					if (name == 'useCardEnd') {
						return get.type(event.card) == 'yuhun';
					}
					return player == game.me && game.me.storage.yh_?.length;//QQQ
				},
				content() {
					'step 0';
					if (trigger.name != 'useCard') {
						var yhlist = game.me.storage.yh_;
						for (var i = 0; i < yhlist.length; i++) {
							if (yhlist[i].name == 'yhshanghunniaoA' || yhlist[i].name == 'yhshanghunniaoB' || yhlist[i].name == 'yhshanghunniaoC' || yhlist[i].name == 'yhshanghunniaoD' || yhlist[i].name == 'yhshanghunniaoE' || yhlist[i].name == 'yhshanghunniaoF') {
								player.addSkill('yhshanghunniao');
							}
							if (yhlist[i].name == 'yhzhaocaimaoA' || yhlist[i].name == 'yhzhaocaimaoB' || yhlist[i].name == 'yhzhaocaimaoC' || yhlist[i].name == 'yhzhaocaimaoD' || yhlist[i].name == 'yhzhaocaimaoE' || yhlist[i].name == 'yhzhaocaimaoF') {
								player.addSkill('yhzhaocaimao');
							}
							if (yhlist[i].name == 'yhdizangxiangA' || yhlist[i].name == 'yhdizangxiangB' || yhlist[i].name == 'yhdizangxiangC' || yhlist[i].name == 'yhdizangxiangD' || yhlist[i].name == 'yhdizangxiangE' || yhlist[i].name == 'yhdizangxiangF') {
								player.addSkill('yhdizangxiang');
							}
							if (yhlist[i].name == 'yhzhengA' || yhlist[i].name == 'yhzhengB' || yhlist[i].name == 'yhzhengC' || yhlist[i].name == 'yhzhengD' || yhlist[i].name == 'yhzhengE' || yhlist[i].name == 'yhzhengF') {
								player.addSkill('yhzheng');
							}
							if (yhlist[i].name == 'yhmeiyaoA' || yhlist[i].name == 'yhmeiyaoB' || yhlist[i].name == 'yhmeiyaoC' || yhlist[i].name == 'yhmeiyaoD' || yhlist[i].name == 'yhmeiyaoE' || yhlist[i].name == 'yhmeiyaoF') {
								player.addSkill('yhmeiyao');
							}
							if (yhlist[i].name == 'yhfanhunxiangA' || yhlist[i].name == 'yhfanhunxiangB' || yhlist[i].name == 'yhfanhunxiangC' || yhlist[i].name == 'yhfanhunxiangD' || yhlist[i].name == 'yhfanhunxiangE' || yhlist[i].name == 'yhfanhunxiangF') {
								player.addSkill('yhfanhunxiang');
							}
							if (yhlist[i].name == 'yhkuangguA' || yhlist[i].name == 'yhkuangguB' || yhlist[i].name == 'yhkuangguC' || yhlist[i].name == 'yhkuangguD' || yhlist[i].name == 'yhkuangguE' || yhlist[i].name == 'yhkuangguF') {
								player.addSkill('yhkuanggu');
							}
							if (yhlist[i].name == 'yhzhenmushouA' || yhlist[i].name == 'yhzhenmushouB' || yhlist[i].name == 'yhzhenmushouC' || yhlist[i].name == 'yhzhenmushouD' || yhlist[i].name == 'yhzhenmushouE' || yhlist[i].name == 'yhzhenmushouF') {
								player.addSkill('yhzhenmushou');
							}
							if (yhlist[i].name == 'yhmumeiA' || yhlist[i].name == 'yhmumeiB' || yhlist[i].name == 'yhmumeiC' || yhlist[i].name == 'yhmumeiD' || yhlist[i].name == 'yhmumeiE' || yhlist[i].name == 'yhmumeiF') {
								player.addSkill('yhmumei');
							}
						}
					}
					if (trigger.name == 'useCard') {
						if (trigger.card.name == 'yhshanghunniaoA' || trigger.card.name == 'yhshanghunniaoB' || trigger.card.name == 'yhshanghunniaoC' || trigger.card.name == 'yhshanghunniaoD' || trigger.card.name == 'yhshanghunniaoE' || trigger.card.name == 'yhshanghunniaoF') {
							player.addSkill('yhshanghunniao');
						}
						if (trigger.card.name == 'yhzhaocaimaoA' || trigger.card.name == 'yhzhaocaimaoB' || trigger.card.name == 'yhzhaocaimaoC' || trigger.card.name == 'yhzhaocaimaoD' || trigger.card.name == 'yhzhaocaimaoE' || trigger.card.name == 'yhzhaocaimaoF') {
							player.addSkill('yhzhaocaimao');
						}
						if (trigger.card.name == 'yhdizangxiangA' || trigger.card.name == 'yhdizangxiangB' || trigger.card.name == 'yhdizangxiangC' || trigger.card.name == 'yhdizangxiangD' || trigger.card.name == 'yhdizangxiangE' || trigger.card.name == 'yhdizangxiangF') {
							player.addSkill('yhdizangxiang');
						}
						if (trigger.card.name == 'yhzhengA' || trigger.card.name == 'yhzhengB' || trigger.card.name == 'yhzhengC' || trigger.card.name == 'yhzhengD' || trigger.card.name == 'yhzhengE' || trigger.card.name == 'yhzhengF') {
							player.addSkill('yhzheng');
						}
						if (trigger.card.name == 'yhmeiyaoA' || trigger.card.name == 'yhmeiyaoB' || trigger.card.name == 'yhmeiyaoC' || trigger.card.name == 'yhmeiyaoD' || trigger.card.name == 'yhmeiyaoE' || trigger.card.name == 'yhmeiyaoF') {
							player.addSkill('yhmeiyao');
						}
						if (trigger.card.name == 'yhfanhunxiangA' || trigger.card.name == 'yhfanhunxiangB' || trigger.card.name == 'yhfanhunxiangC' || trigger.card.name == 'yhfanhunxiangD' || trigger.card.name == 'yhfanhunxiangE' || trigger.card.name == 'yhfanhunxiangF') {
							player.addSkill('yhfanhunxiang');
						}
						if (trigger.card.name == 'yhkuangguA' || trigger.card.name == 'yhkuangguB' || trigger.card.name == 'yhkuangguC' || trigger.card.name == 'yhkuangguD' || trigger.card.name == 'yhkuangguE' || trigger.card.name == 'yhkuangguF') {
							player.addSkill('yhkuanggu');
						}
						if (trigger.card.name == 'yhzhenmushouA' || trigger.card.name == 'yhzhenmushouB' || trigger.card.name == 'yhzhenmushouC' || trigger.card.name == 'yhzhenmushouD' || trigger.card.name == 'yhzhenmushouE' || trigger.card.name == 'yhzhenmushouF') {
							player.addSkill('yhzhenmushou');
						}
						if (trigger.card.name == 'yhmumeiA' || trigger.card.name == 'yhmumeiB' || trigger.card.name == 'yhmumeiC' || trigger.card.name == 'yhmumeiD' || trigger.card.name == 'yhmumeiE' || trigger.card.name == 'yhmumeiF') {
							player.addSkill('yhmumei');
						}
					}
					('step 1');
					var shn = 0;
					var dzx = 0;
					var zcm = 0;
					var z = 0;
					var my = 0;
					var fhx = 0;
					var kg = 0;
					var zms = 0;
					var mm = 0;
					var yysyh = player.storage.yh_;
					for (var i = 0; i < yysyh.length; i++) {
						if (yysyh[i].name == 'yhshanghunniaoA' || yysyh[i].name == 'yhshanghunniaoB' || yysyh[i].name == 'yhshanghunniaoC' || yysyh[i].name == 'yhshanghunniaoD' || yysyh[i].name == 'yhshanghunniaoE' || yysyh[i].name == 'yhshanghunniaoF') {
							shn++;
						}
						if (yysyh[i].name == 'yhdizangxiangA' || yysyh[i].name == 'yhdizangxiangB' || yysyh[i].name == 'yhdizangxiangC' || yysyh[i].name == 'yhdizangxiangD' || yysyh[i].name == 'yhdizangxiangE' || yysyh[i].name == 'yhdizangxiangF') {
							dzx++;
						}
						if (yysyh[i].name == 'yhzhaocaimaoA' || yysyh[i].name == 'yhzhaocaimaoB' || yysyh[i].name == 'yhzhaocaimaoC' || yysyh[i].name == 'yhzhaocaimaoD' || yysyh[i].name == 'yhzhaocaimaoE' || yysyh[i].name == 'yhzhaocaimaoF') {
							zcm++;
						}
						if (yysyh[i].name == 'yhzhengA' || yysyh[i].name == 'yhzhengB' || yysyh[i].name == 'yhzhengC' || yysyh[i].name == 'yhzhengD' || yysyh[i].name == 'yhzhengE' || yysyh[i].name == 'yhzhengF') {
							z++;
						}
						if (yysyh[i].name == 'yhmeiyaoA' || yysyh[i].name == 'yhmeiyaoB' || yysyh[i].name == 'yhmeiyaoC' || yysyh[i].name == 'yhmeiyaoD' || yysyh[i].name == 'yhmeiyaoE' || yysyh[i].name == 'yhmeiyaoF') {
							my++;
						}
						if (yysyh[i].name == 'yhfanhunxiangA' || yysyh[i].name == 'yhfanhunxiangB' || yysyh[i].name == 'yhfanhunxiangC' || yysyh[i].name == 'yhfanhunxiangD' || yysyh[i].name == 'yhfanhunxiangE' || yysyh[i].name == 'yhfanhunxiangF') {
							fhx++;
						}
						if (yysyh[i].name == 'yhkuangguA' || yysyh[i].name == 'yhkuangguB' || yysyh[i].name == 'yhkuangguC' || yysyh[i].name == 'yhkuangguD' || yysyh[i].name == 'yhkuangguE' || yysyh[i].name == 'yhkuangguF') {
							kg++;
						}
						if (yysyh[i].name == 'yhzhenmushouA' || yysyh[i].name == 'yhzhenmushouB' || yysyh[i].name == 'yhzhenmushouC' || yysyh[i].name == 'yhzhenmushouD' || yysyh[i].name == 'yhzhenmushouE' || yysyh[i].name == 'yhzhenmushouF') {
							zms++;
						}
						if (yysyh[i].name == 'yhmumeiA' || yysyh[i].name == 'yhmumeiB' || yysyh[i].name == 'yhmumeiC' || yysyh[i].name == 'yhmumeiD' || yysyh[i].name == 'yhmumeiE' || yysyh[i].name == 'yhmumeiF') {
							mm++;
						}
					}
					if (shn < 4 && player.hasSkill('yhshanghunniao_shn')) {
						player.removeSkill('yhshanghunniao_shn');
					} else {
						if (shn > 4 && !player.hasSkill('yhshanghunniao_shn')) {
							player.addSkill('yhshanghunniao_shn');
							player.markSkill('yhshanghunniao_shn');
						}
					}
					if (shn < 2 && player.hasSkill('yhshanghunniao_yysCS')) {
						player.removeSkill('yhshanghunniao_yysCS');
						player.storage.yysCS -= 15;
					}
					if (shn == 0) {
						player.removeSkill('yhshanghunniao');
					}
					if (dzx < 4 && player.hasSkill('yhdizangxiang_dzx')) {
						player.removeSkill('yhdizangxiang_dzx');
					} else {
						if (dzx > 4 && !player.hasSkill('yhdizangxiang_dzx')) {
							player.addSkill('yhdizangxiang_dzx');
							player.markSkill('yhdizangxiang_dzx');
						}
					}
					if (dzx < 2 && player.hasSkill('yhdizangxiang_yysMAXHPup')) {
						var b = player.countMark('yhdizangxiang_yysMAXHPup');
						player.maxHp -= b;
						player.storage.yhdizangxiang_yysMAXHPup = 0;
						player.removeSkill('yhdizangxiang_yysMAXHPup');
					}
					if (dzx == 0) {
						player.removeSkill('yhdizangxiang');
					}
					if (zcm < 4 && player.hasSkill('yhzhaocaimao_zcm')) {
						player.removeSkill('yhzhaocaimao_zcm');
					} else {
						if (zcm > 4 && !player.hasSkill('yhzhaocaimao_zcm')) {
							player.addSkill('yhzhaocaimao_zcm');
							player.markSkill('yhzhaocaimao_zcm');
						}
					}
					if (zcm < 2 && player.hasSkill('yhzhaocaimao_yysDEFx')) {
						player.removeSkill('yhzhaocaimao_yysDEFx');
						player.storage.yysDEFx -= 15;
					}
					if (zcm == 0) {
						player.removeSkill('yhzhaocaimao');
					}
					if (z < 4 && player.hasSkill('yhzheng_z')) {
						player.removeSkill('yhzheng_z');
					} else {
						if (z > 4 && !player.hasSkill('yhzheng_z')) {
							player.addSkill('yhzheng_z');
							player.markSkill('yhzheng_z');
						}
					}
					if (z < 2 && player.hasSkill('yhzheng_yysATKx')) {
						player.removeSkill('yhzheng_yysATKx');
						player.storage.yysATKx -= 15;
					}
					if (z == 0) {
						player.removeSkill('yhzheng');
					}
					if (my < 4 && player.hasSkill('yhmeiyao_my')) {
						player.removeSkill('yhmeiyao_my');
					} else {
						if (my > 4 && !player.hasSkill('yhmeiyao_my')) {
							player.addSkill('yhmeiyao_my');
							player.markSkill('yhmeiyao_my');
						}
					}
					if (my < 2 && player.hasSkill('yhmeiyao_yysDEFx')) {
						player.removeSkill('yhmeiyao_yysDEFx');
						player.storage.yysDEFx -= 15;
					}
					if (my == 0) {
						player.removeSkill('yhmeiyao');
					}
					if (fhx < 4 && player.hasSkill('yhfanhunxiang_fhx')) {
						player.removeSkill('yhfanhunxiang_fhx');
					} else {
						if (fhx > 4 && !player.hasSkill('yhfanhunxiang_fhx')) {
							player.addSkill('yhfanhunxiang_fhx');
							player.markSkill('yhfanhunxiang_fhx');
						}
					}
					if (fhx < 2 && player.hasSkill('yhfanhunxiang_yysRES')) {
						player.removeSkill('yhfanhunxiang_yysRES');
						player.storage.yysRES -= 15;
					}
					if (fhx == 0) {
						player.removeSkill('yhfanhunxiang');
					}
					if (kg < 4 && player.hasSkill('yhkuanggu_kg')) {
						player.removeSkill('yhkuanggu_kg');
					} else {
						if (kg > 4 && !player.hasSkill('yhkuanggu_kg')) {
							player.addSkill('yhkuanggu_kg');
							player.markSkill('yhkuanggu_kg');
						}
					}
					if (kg < 2 && player.hasSkill('yhkuanggu_yysATKx')) {
						player.removeSkill('yhkuanggu_yysATKx');
						player.storage.yysATKx -= 15;
					}
					if (kg == 0) {
						player.removeSkill('yhkuanggu');
					}
					if (zms < 4 && player.hasSkill('yhzhenmushou_zms')) {
						player.removeSkill('yhzhenmushou_zms');
					} else {
						if (zms > 4 && !player.hasSkill('yhzhenmushou_zms')) {
							player.addSkill('yhzhenmushou_zms');
							player.markSkill('yhzhenmushou_zms');
						}
					}
					if (zms < 2 && player.hasSkill('yhzhenmushou_yysCS')) {
						player.removeSkill('yhzhenmushou_yysCS');
						player.storage.yysCS -= 15;
					}
					if (zms == 0) {
						player.removeSkill('yhzhenmushou');
					}
					if (mm < 4 && player.hasSkill('yhmumei_mm')) {
						player.removeSkill('yhmumei_mm');
					} else {
						if (mm > 4 && !player.hasSkill('yhmumei_mm')) {
							player.addSkill('yhmumei_mm');
							player.markSkill('yhmumei_mm');
						}
					}
					if (mm < 2 && player.hasSkill('yhmumei_yysDEFx')) {
						player.removeSkill('yhmumei_yysDEFx');
						player.storage.yysDEFx -= 30;
					}
					if (mm == 0) {
						player.removeSkill('yhmumei');
					}
				},
			};
			lib.skill._qxqyh_discardAfter = {
				trigger: {
					global: ['discardEnd', 'useCardEnd', 'phaseDiscardAfter'],
				},
				forced: true,
				silent: true,
				_priority: 202130,
				content() {
					for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
						if (get.type(ui.discardPile.childNodes[i]) == 'yuhun') {
							ui.discardPile.childNodes[i].delete();
						}
					}
				},
			};
			lib.skill._qxq_removeFellows = {
				trigger: {
					global: 'dieAfter',
					player: 'phaseBegin',
				},
				forced: true,
				silent: true,
				filter(event, player) {
					return (game.zhufellows || game.fanfellows || game.neifellows || game.yysfellows) && game.dead.length;
				},
				_priority: Infinity,
				content() {
					if (game.zhufellows && game.dead.includes(game.zhufellows[0])) {
						game.dead.remove(game.zhufellows[0]);
						game.zhufellows[0].delete();
						game.zhufellows = null;
					}
					if (game.fanfellows && game.dead.includes(game.fanfellows[0])) {
						game.dead.remove(game.fanfellows[0]);
						game.fanfellows[0].delete();
						game.fanfellows = null;
					}
					if (game.neifellows && game.dead.includes(game.neifellows[0])) {
						game.dead.remove(game.neifellows[0]);
						game.neifellows[0].delete();
						game.neifellows = null;
					}
					if (game.yysfellows && game.dead.includes(game.yysfellows[0])) {
						game.dead.remove(game.yysfellows[0]);
						game.yysfellows[0].delete();
						game.yysfellows = null;
					}
				},
			};
			lib.skill._yysCharacterChoose = {
				trigger: {
					global: 'gameStart',
				},
				forced: true,
				silent: true,
				filter(event, player) {
					return player == game.me;
				},
				content() {
					if (lib.config.yysCharacterChoose != undefined && lib.config.yysCharacterChoose != 'none') {
						game.me.addSkill('yysjiangling');
					}
					if (lib.config.yysFriendsCharacterChoose != undefined && lib.config.yysFriendsCharacterChoose != '0') {
						var friends = game.me.getFriends();
						if (lib.config.yysFriendsCharacterChoose == '1') {
							var friend = friends.randomGets(1);
							for (var i = 0; i < friend.length; i++) {
								if (!friend[i].hasSkill('yysjianglingRandom')) {
									friend[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysFriendsCharacterChoose == '2') {
							var friend = friends.randomGets(2);
							for (var i = 0; i < friend.length; i++) {
								if (!friend[i].hasSkill('yysjianglingRandom')) {
									friend[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysFriendsCharacterChoose == '3') {
							var friend = friends.randomGets(3);
							for (var i = 0; i < friend.length; i++) {
								if (!friend[i].hasSkill('yysjianglingRandom')) {
									friend[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysFriendsCharacterChoose == '4') {
							var friend = friends.randomGets(4);
							for (var i = 0; i < friend.length; i++) {
								if (!friend[i].hasSkill('yysjianglingRandom')) {
									friend[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysFriendsCharacterChoose == '5') {
							var friend = friends.randomGets(5);
							for (var i = 0; i < friend.length; i++) {
								if (!friend[i].hasSkill('yysjianglingRandom')) {
									friend[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysFriendsCharacterChoose == '6') {
							var friend = friends.randomGets(6);
							for (var i = 0; i < friend.length; i++) {
								if (!friend[i].hasSkill('yysjianglingRandom')) {
									friend[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysFriendsCharacterChoose == '7') {
							var friend = friends.randomGets(7);
							for (var i = 0; i < friend.length; i++) {
								if (!friend[i].hasSkill('yysjianglingRandom')) {
									friend[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysFriendsCharacterChoose == '8') {
							var friend = friends.randomGets(8);
							for (var i = 0; i < friend.length; i++) {
								if (!friend[i].hasSkill('yysjianglingRandom')) {
									friend[i].addSkill('yysjianglingRandom');
								}
							}
						}
					}
					if (lib.config.yysEnemiesCharacterChoose != undefined && lib.config.yysEnemiesCharacterChoose != '0') {
						var enemies = game.me.getEnemies();
						if (lib.config.yysEnemiesCharacterChoose == '1') {
							var enemy = enemies.randomGets(1);
							for (var i = 0; i < enemy.length; i++) {
								if (!enemy[i].hasSkill('yysjianglingRandom')) {
									enemy[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysEnemiesCharacterChoose == '2') {
							var enemy = enemies.randomGets(2);
							for (var i = 0; i < enemy.length; i++) {
								if (!enemy[i].hasSkill('yysjianglingRandom')) {
									enemy[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysEnemiesCharacterChoose == '3') {
							var enemy = enemies.randomGets(3);
							for (var i = 0; i < enemy.length; i++) {
								if (!enemy[i].hasSkill('yysjianglingRandom')) {
									enemy[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysEnemiesCharacterChoose == '4') {
							var enemy = enemies.randomGets(4);
							for (var i = 0; i < enemy.length; i++) {
								if (!enemy[i].hasSkill('yysjianglingRandom')) {
									enemy[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysEnemiesCharacterChoose == '5') {
							var enemy = enemies.randomGets(5);
							for (var i = 0; i < enemy.length; i++) {
								if (!enemy[i].hasSkill('yysjianglingRandom')) {
									enemy[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysEnemiesCharacterChoose == '6') {
							var enemy = enemies.randomGets(6);
							for (var i = 0; i < enemy.length; i++) {
								if (!enemy[i].hasSkill('yysjianglingRandom')) {
									enemy[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysEnemiesCharacterChoose == '7') {
							var enemy = enemies.randomGets(7);
							for (var i = 0; i < enemy.length; i++) {
								if (!enemy[i].hasSkill('yysjianglingRandom')) {
									enemy[i].addSkill('yysjianglingRandom');
								}
							}
						}
						if (lib.config.yysEnemiesCharacterChoose == '8') {
							var enemy = enemies.randomGets(8);
							for (var i = 0; i < enemy.length; i++) {
								if (!enemy[i].hasSkill('yysjianglingRandom')) {
									enemy[i].addSkill('yysjianglingRandom');
								}
							}
						}
					}
				},
			};
			lib.skill._dpcqBlueFire = {
				trigger: {
					global: ['gameStart'],
				},
				forced: true,
				silent: true,
				popup: false,
				_priority: -10000,
				filter(event, player) {
					return player == game.me;
				},
				content() {
					if ((lib.config.znum == undefined || lib.config.znum > 0) && get.mode() == 'identity') {
						lib.config.znum = 0;
						game.saveConfig('znum', lib.config.znum);
						game.saydpcq('(右上方)所有主忠方鬼火条均已清空!');
					}
					if ((lib.config.fnum == undefined || lib.config.fnum > 0) && get.mode() == 'identity') {
						lib.config.fnum = 0;
						game.saveConfig('fnum', lib.config.fnum);
						game.saydpcq('(右上方)所有反贼方鬼火条均已清空!');
					}
					if ((lib.config.nnum == undefined || lib.config.nnum > 0) && get.mode() == 'identity') {
						lib.config.nnum = 0;
						game.saveConfig('nnum', lib.config.nnum);
						game.saydpcq('(右上方)所有第三方鬼火条均已清空!');
					}
					if ((lib.config.groupnum == undefined || lib.config.groupnum > 0) && get.mode() != 'identity') {
						lib.config.groupnum = 0;
						game.saveConfig('groupnum', lib.config.groupnum);
						game.saydpcq('(右上方)阴阳师势力的鬼火条已清空!');
					}
					if (get.mode() == 'identity') {
						lib.config.BFfulltimezhu = 0;
						game.saveConfig('BFfulltimezhu', lib.config.BFfulltimezhu);
						lib.config.BluefireProcesszhu = 0;
						game.saveConfig('BluefireProcesszhu', lib.config.BluefireProcesszhu);
						lib.config.BFfulltimefan = 0;
						game.saveConfig('BFfulltimefan', lib.config.BFfulltimefan);
						lib.config.BluefireProcessfan = 0;
						game.saveConfig('BluefireProcessfan', lib.config.BluefireProcessfan);
						lib.config.BFfulltimenei = 0;
						game.saveConfig('BFfulltimenei', lib.config.BFfulltimenei);
						lib.config.BluefireProcessnei = 0;
						game.saveConfig('BluefireProcessnei', lib.config.BluefireProcessnei);
						for (var i of game.players) {
							if ((i.identity == 'zhu' || i.identity == 'zhong') && (i.name.includes('qxq_yys') || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom'))) {
								lib.config.znum = 1;
								game.saveConfig('znum', lib.config.znum);
							}
						}
						for (var i of game.players) {
							if (i.identity == 'fan' && (i.name.includes('qxq_yys') || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom'))) {
								lib.config.fnum = 1;
								game.saveConfig('fnum', lib.config.fnum);
							}
						}
						for (var i of game.players) {
							if (i.identity == 'nei' && (i.name.includes('qxq_yys') || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom'))) {
								lib.config.nnum = 1;
								game.saveConfig('nnum', lib.config.nnum);
							}
						}
					} else {
						lib.config.BFfulltimegroup = 0;
						lib.config.BluefireProcessgroup = 0;
						game.saveConfig('BluefireProcessgroup', lib.config.BluefireProcessgroup);
						for (var i of game.players) {
							if (i.name.includes('qxq_yys') || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom')) {
								lib.config.groupnum = 1;
								game.saveConfig('groupnum', lib.config.groupnum);
							}
						}
					}
					for (var i of game.players) {
						if (i.name.includes('qxq_yys') || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom')) {
							game.BlueFire(i);
						}
					}
				},
			};
			lib.skill._dpcqBlueFireshow = {
				trigger: {
					player: ['showCharacterAfter'],
				},
				forced: true,
				silent: true,
				popup: false,
				_priority: Infinity,
				filter(event, player) {
					return get.mode() == 'guozhan';
				},
				content() {
					for (var i of game.players) {
						if (i.name.includes('qxq_yys') || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom')) {
							lib.config.groupnum = 1;
							game.saveConfig('groupnum', lib.config.groupnum);
						}
					}
					for (var i of game.players) {
						if (i.name.includes('qxq_yys') || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom')) {
							game.BlueFire(i);
						}
					}
				},
			};
			lib.skill._dpcqBlueFireadd = {
				trigger: {
					player: ['phaseBefore'],
				},
				forced: true,
				silent: true,
				popup: false,
				_priority: Infinity,
				filter(event, player) {
					if (get.mode() == 'identity' || get.mode() == 'guozhan') return true;
					if (get.mode() != 'identity' && get.mode() != 'guozhan' && (player.name.includes('qxq_yys') || player.hasSkill('yysjiangling') || player.hasSkill('yysjianglingRandom'))) return true;
				},
				content() {
					if (get.mode() == 'identity') {
						if (trigger.player.identity == 'zhu' || trigger.player.identity == 'zhong') {
							if (lib.config.znum > 0) {
								game.log('主忠方鬼火条推进一点!');
								game.saydpcq('主忠方鬼火条推进一点!');
							}
							lib.config.BluefireProcesszhu++;
							game.saveConfig('BluefireProcesszhu', lib.config.BluefireProcesszhu);
							if (lib.config.BluefireProcesszhu >= 5) {
								lib.config.BFfulltimezhu++;
								game.saveConfig('BFfulltimezhu', lib.config.BFfulltimezhu);
								if (lib.config.BFfulltimezhu == 1) {
									if ((event.player.identity == 'zhu' || event.player.identity == 'zhong') && (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom'))) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 3);
										game.updateBlueFire(event.player);
									}
									if (lib.config.znum > 0) {
										game.log('主忠方获得3点鬼火!');
										game.saydpcq('主忠方获得3点鬼火!');
									}
								}
								if (lib.config.BFfulltimezhu == 2) {
									if ((event.player.identity == 'zhu' || event.player.identity == 'zhong') && (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom'))) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 4);
										game.updateBlueFire(event.player);
									}
									if (lib.config.znum > 0) {
										game.log('主忠方获得4点鬼火!');
										game.saydpcq('主忠方获得4点鬼火!');
									}
								}
								if (lib.config.BFfulltimezhu >= 3) {
									if ((event.player.identity == 'zhu' || event.player.identity == 'zhong') && (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom'))) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 5);
										game.updateBlueFire(event.player);
									}
									if (lib.config.znum > 0) {
										game.log('主忠方获得5点鬼火!');
										game.saydpcq('主忠方获得5点鬼火!');
									}
								}
								lib.config.BluefireProcesszhu = 0;
								game.saveConfig('BluefireProcesszhu', lib.config.BluefireProcesszhu);
							}
						}
						if (trigger.player.identity == 'fan') {
							if (lib.config.fnum > 0) {
								game.log('反贼方鬼火条推进一点!');
								game.saydpcq('反贼方鬼火条推进一点!');
							}
							lib.config.BluefireProcessfan++;
							game.saveConfig('BluefireProcessfan', lib.config.BluefireProcessfan);
							if (lib.config.BluefireProcessfan >= 5) {
								lib.config.BFfulltimefan++;
								game.saveConfig('BFfulltimefan', lib.config.BFfulltimefan);
								if (lib.config.BFfulltimefan == 1) {
									if (event.player.identity == 'fan' && (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom'))) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 3);
										game.updateBlueFire(event.player);
									}
									if (lib.config.fnum > 0) {
										game.log('反贼方获得3点鬼火!');
										game.saydpcq('反贼方获得3点鬼火!');
									}
								}
								if (lib.config.BFfulltimefan == 2) {
									if (event.player.identity == 'fan' && (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom'))) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 4);
										game.updateBlueFire(event.player);
									}
									if (lib.config.fnum > 0) {
										game.log('反贼方获得4点鬼火!');
										game.saydpcq('反贼方获得4点鬼火!');
									}
								}
								if (lib.config.BFfulltimefan >= 3) {
									if (event.player.identity == 'fan' && (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom'))) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 5);
										game.updateBlueFire(event.player);
									}
									if (lib.config.fnum > 0) {
										game.log('反贼方获得5点鬼火!');
										game.saydpcq('反贼方获得5点鬼火!');
									}
								}
								lib.config.BluefireProcessfan = 0;
								game.saveConfig('BluefireProcessfan', lib.config.BluefireProcessfan);
							}
						}
						if (trigger.player.identity == 'nei') {
							if (lib.config.nnum > 0) {
								game.log('第三方鬼火条推进一点!');
								game.saydpcq('第三方鬼火条推进一点!');
							}
							lib.config.BluefireProcessnei++;
							game.saveConfig('BluefireProcessnei', lib.config.BluefireProcessnei);
							if (lib.config.BluefireProcessnei >= 5) {
								lib.config.BFfulltimenei++;
								game.saveConfig('BFfulltimenei', lib.config.BFfulltimenei);
								if (lib.config.BFfulltimenei == 1) {
									if (event.player.identity == 'nei' && (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom'))) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 3);
										game.updateBlueFire(event.player);
									}
									if (lib.config.nnum > 0) {
										game.log('第三方获得3点鬼火!');
										game.saydpcq('第三方获得3点鬼火!');
									}
								}
								if (lib.config.BFfulltimenei == 2) {
									if (event.player.identity == 'nei' && (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom'))) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 4);
										game.updateBlueFire(event.player);
									}
									if (lib.config.nnum > 0) {
										game.log('第三方获得4点鬼火!');
										game.saydpcq('第三方获得4点鬼火!');
									}
								}
								if (lib.config.BFfulltimenei >= 3) {
									if (event.player.identity == 'nei' && (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom'))) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 5);
										game.updateBlueFire(event.player);
									}
									if (lib.config.nnum > 0) {
										game.log('第三方获得5点鬼火!');
										game.saydpcq('第三方获得5点鬼火!');
									}
								}
								lib.config.BluefireProcessnei = 0;
								game.saveConfig('BluefireProcessnei', lib.config.BluefireProcessnei);
							}
						}
					}
					if (get.mode() != 'identity' && get.mode() != 'guozhan') {
						if (lib.config.groupnum > 0) {
							game.log('阴阳师势力鬼火条推进一点!');
							game.saydpcq('阴阳师势力鬼火条推进一点!');
						}
						lib.config.BluefireProcessgroup++;
						game.saveConfig('BluefireProcessgroup', lib.config.BluefireProcessgroup);
						if (lib.config.BluefireProcessgroup >= 5) {
							lib.config.BFfulltimegroup++;
							game.saveConfig('BFfulltimegroup', lib.config.BFfulltimegroup);
							if (lib.config.BFfulltimegroup == 1) {
								if (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom')) {
									if (event.player.bluefireused < 0) {
										event.player.bluefireused = 0;
									}
									game.getBF(event.player, 3);
									game.updateBlueFire(event.player);
								}
								if (lib.config.groupnum > 0) {
									game.log('阴阳师势力获得3点鬼火!');
									game.saydpcq('阴阳师势力获得3点鬼火!');
								}
							}
							if (lib.config.BFfulltimegroup == 2) {
								if (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom')) {
									if (event.player.bluefireused < 0) {
										event.player.bluefireused = 0;
									}
									game.getBF(event.player, 4);
									game.updateBlueFire(event.player);
								}
								if (lib.config.groupnum > 0) {
									game.log('阴阳师势力获得4点鬼火!');
									game.saydpcq('阴阳师势力获得4点鬼火!');
								}
							}
							if (lib.config.BFfulltimegroup >= 3) {
								if (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom')) {
									if (event.player.bluefireused < 0) {
										event.player.bluefireused = 0;
									}
									game.getBF(event.player, 5);
									game.updateBlueFire(event.player);
								}
								if (lib.config.groupnum > 0) {
									game.log('阴阳师势力获得5点鬼火!');
									game.saydpcq('阴阳师势力获得5点鬼火!');
								}
							}
							lib.config.BluefireProcessgroup = 0;
							game.saveConfig('BluefireProcessgroup', lib.config.BluefireProcessgroup);
						}
					}
					if (get.mode() == 'guozhan') {
						lib.config.Major = 0;
						game.saveConfig('Major', lib.config.Major);
						for (var i of game.players) {
							if ((i.name.includes('qxq_yys') || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom')) && i.isMajor()) {
								lib.config.Major = 1;
								game.saveConfig('Major', lib.config.Major);
							}
						}
						if (lib.config.Major == 1 && trigger.player.isMajor()) {
							if (lib.config.groupnum > 0) {
								game.log('阴阳师势力鬼火条推进一点!');
								game.saydpcq('阴阳师势力鬼火条推进一点!');
							}
							lib.config.BluefireProcessgroup++;
							game.saveConfig('BluefireProcessgroup', lib.config.BluefireProcessgroup);
							if (lib.config.BluefireProcessgroup >= 5) {
								lib.config.BFfulltimegroup++;
								game.saveConfig('BFfulltimegroup', lib.config.BFfulltimegroup);
								if (lib.config.BFfulltimegroup == 1) {
									if (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom')) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 3);
										game.updateBlueFire(event.player);
									}
									if (lib.config.groupnum > 0) {
										game.log('阴阳师势力获得3点鬼火!');
										game.saydpcq('阴阳师势力获得3点鬼火!');
									}
								}
								if (lib.config.BFfulltimegroup == 2) {
									if (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom')) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 4);
										game.updateBlueFire(event.player);
									}
									if (lib.config.groupnum > 0) {
										game.log('阴阳师势力获得4点鬼火!');
										game.saydpcq('阴阳师势力获得4点鬼火!');
									}
								}
								if (lib.config.BFfulltimegroup >= 3) {
									if (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom')) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 5);
										game.updateBlueFire(event.player);
									}
									if (lib.config.groupnum > 0) {
										game.log('阴阳师势力获得5点鬼火!');
										game.saydpcq('阴阳师势力获得5点鬼火!');
									}
								}
								lib.config.BluefireProcessgroup = 0;
								game.saveConfig('BluefireProcessgroup', lib.config.BluefireProcessgroup);
							}
						}
						if (lib.config.Major == 0 && !trigger.player.isMajor()) {
							if (lib.config.groupnum > 0) {
								game.log('阴阳师势力鬼火条推进一点!');
								game.saydpcq('阴阳师势力鬼火条推进一点!');
							}
							lib.config.BluefireProcessgroup++;
							game.saveConfig('BluefireProcessgroup', lib.config.BluefireProcessgroup);
							if (lib.config.BluefireProcessgroup >= 5) {
								lib.config.BFfulltimegroup++;
								game.saveConfig('BFfulltimegroup', lib.config.BFfulltimegroup);
								if (lib.config.BFfulltimegroup == 1) {
									if (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom')) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 3);
										game.updateBlueFire(event.player);
									}
									if (lib.config.groupnum > 0) {
										game.log('阴阳师势力获得3点鬼火!');
										game.saydpcq('阴阳师势力获得3点鬼火!');
									}
								}
								if (lib.config.BFfulltimegroup == 2) {
									if (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom')) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 4);
										game.updateBlueFire(event.player);
									}
									if (lib.config.groupnum > 0) {
										game.log('阴阳师势力获得4点鬼火!');
										game.saydpcq('阴阳师势力获得4点鬼火!');
									}
								}
								if (lib.config.BFfulltimegroup >= 3) {
									if (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom')) {
										if (event.player.bluefireused < 0) {
											event.player.bluefireused = 0;
										}
										game.getBF(event.player, 5);
										game.updateBlueFire(event.player);
									}
									if (lib.config.groupnum > 0) {
										game.log('阴阳师势力获得5点鬼火!');
										game.saydpcq('阴阳师势力获得5点鬼火!');
									}
								}
								lib.config.BluefireProcessgroup = 0;
								game.saveConfig('BluefireProcessgroup', lib.config.BluefireProcessgroup);
							}
						}
					}
				},
			};
			lib.skill._dpcq_gainZishepi_get = {
				trigger: {
					global: 'gameStart',
				},
				forced: true,
				silent: true,
				popup: false,
				filter(event, player) {
					return player == game.me;
				},
				content() {
					game.dpcqgainItem('zishepi', 1);
				},
			};
			lib.skill._qxqyys_suijiyuhunuse = {
				trigger: {
					global: ['gameStart'],
				},
				forced: true,
				silent: true,
				_priority: 202130,
				filter(event, player) {
					return player == game.me;
				},
				content() {
					'step 0';
					if (lib.config.yuhunl == undefined || lib.config.yuhunl == 0) {
						lib.config.yuhunl = 0;
						game.saveConfig('yuhunl', lib.config.yuhunl);
					}
					('step 1');
					if (lib.config.yuhunh == undefined || lib.config.yuhunh == 0) {
						lib.config.yuhunh = 0;
						game.saveConfig('yuhunh', lib.config.yuhunh);
					}
					('step 2');
					if (lib.config.yuhunl != 0 || lib.config.yuhunh != 0) {
						var n = lib.config.yuhunl;
						var m = lib.config.yuhunh;
						var list = [];
						for (var i = 0; i < n; i++) {
							var yh = ['yhshanghunniao', 'yhzhaocaimao', 'yhdizangxiang', 'yhzheng', 'yhmeiyao', 'yhfanhunxiang', 'yhkuanggu', 'yhzhenmushou', 'yhmumei'].randomGet();
							var st = ['A', 'B', 'C', 'D', 'E', 'F'].randomGet();
							var str = '';
							str += yh;
							str += st;
							var color = ['heart', 'diamond', 'club', 'spade'];
							var num = get.rand(1, 3);
							var yuhun = game.createCard(str, color, num);
							list.push(yuhun);
						}
						for (var i = 0; i < m; i++) {
							var yh = ['yhshanghunniao', 'yhzhaocaimao', 'yhdizangxiang', 'yhzheng', 'yhmeiyao', 'yhfanhunxiang', 'yhkuanggu', 'yhzhenmushou', 'yhmumei'].randomGet();
							var st = ['A', 'B', 'C', 'D', 'E', 'F'].randomGet();
							var str = '';
							str += yh;
							str += st;
							var color = ['heart', 'diamond', 'club', 'spade'];
							var num = get.rand(4, 6);
							var yuhun = game.createCard(str, color, num);
							list.push(yuhun);
						}
						var dialog = ui.create.dialog('从背包处获得的御魂', list, true);
						dialog.style.height = '250px';
						dialog.style.width = '500px';
						dialog.style.left = '0px';
						dialog.style.top = '0px';
						dialog.style.borderRadius = '5px';
						lib.config.yuhunl -= n;
						game.saveConfig('yuhunl', lib.config.yuhunl);
						lib.config.yuhunh -= m;
						game.saveConfig('yuhunh', lib.config.yuhunh);
						game.me.gain(list);
					}
				},
			};
			lib.skill._qxqyys_yuhunBagsEquip = {
				trigger: {
					global: ['gameStart'],
				},
				forced: true,
				silent: true,
				_priority: Infinity,
				filter(event, player) {
					return player == game.me && (game.me.name.includes('qxq_yys_') || lib.config.favouriteCharacter.includes(game.me.name));
				},
				content() {
					var mh = player.maxHp;
					for (var i = 1; i < 7; i++) {
						var yhnaturelist = [];
						var itemATK = 0;
						var itemATKx = 0;
						var itemDEF = 0;
						var itemDEFx = 0;
						var itemCS = 0;
						var itemCSS = 0;
						var itemmaxHp = 0;
						var itemINF = 0;
						var itemRES = 0;
						let TP;
						if (lib.config[`${player.name}_yuhunequip${i}`] && lib.config[`${player.name}_yuhunequip${i}_yuhun`]) {
							const subtype = lib.config[`${player.name}_yuhunequip${i}_yuhun`].subtype;
							var number = lib.config[`${player.name}_yuhunequip${i}_yuhun`].number;
							var suit = ['heart', 'diamond', 'club', 'spade'].randomGet();
							const yuhunMap = {
								yuhun1: 'A',
								yuhun2: 'B',
								yuhun3: 'C',
								yuhun4: 'D',
								yuhun5: 'E',
								yuhun6: 'F',
							};
							TP = yuhunMap[subtype];
							var name = lib.config[`${player.name}_yuhunequip${i}_yuhun`].name + TP;
							if (lib.config[`${player.name}_yuhunequip${i}_yuhun`].ATK != undefined && typeof lib.config[`${player.name}_yuhunequip${i}_yuhun`].ATK == 'number') {
								itemATK += lib.config[`${player.name}_yuhunequip${i}_yuhun`].ATK;
							}
							if (lib.config[`${player.name}_yuhunequip${i}_yuhun`].ATKx != undefined && typeof lib.config[`${player.name}_yuhunequip${i}_yuhun`].ATKx == 'number') {
								itemATKx += lib.config[`${player.name}_yuhunequip${i}_yuhun`].ATKx;
							}
							if (lib.config[`${player.name}_yuhunequip${i}_yuhun`].DEF != undefined && typeof lib.config[`${player.name}_yuhunequip${i}_yuhun`].DEF == 'number') {
								itemDEF += lib.config[`${player.name}_yuhunequip${i}_yuhun`].DEF;
							}
							if (lib.config[`${player.name}_yuhunequip${i}_yuhun`].DEFx != undefined && typeof lib.config[`${player.name}_yuhunequip${i}_yuhun`].DEFx == 'number') {
								itemDEFx += lib.config[`${player.name}_yuhunequip${i}_yuhun`].DEFx;
							}
							if (lib.config[`${player.name}_yuhunequip${i}_yuhun`].CS != undefined && typeof lib.config[`${player.name}_yuhunequip${i}_yuhun`].CS == 'number') {
								itemCS += lib.config[`${player.name}_yuhunequip${i}_yuhun`].CS;
							}
							if (lib.config[`${player.name}_yuhunequip${i}_yuhun`].CSS != undefined && typeof lib.config[`${player.name}_yuhunequip${i}_yuhun`].CSS == 'number') {
								itemCSS += lib.config[`${player.name}_yuhunequip${i}_yuhun`].CSS;
							}
							if (lib.config[`${player.name}_yuhunequip${i}_yuhun`].maxHp != undefined && typeof lib.config[`${player.name}_yuhunequip${i}_yuhun`].maxHp == 'number') {
								itemmaxHp += lib.config[`${player.name}_yuhunequip${i}_yuhun`].maxHp;
							}
							if (lib.config[`${player.name}_yuhunequip${i}_yuhun`].INF != undefined && typeof lib.config[`${player.name}_yuhunequip${i}_yuhun`].INF == 'number') {
								itemINF += lib.config[`${player.name}_yuhunequip${i}_yuhun`].INF;
							}
							if (lib.config[`${player.name}_yuhunequip${i}_yuhun`].RES != undefined && typeof lib.config[`${player.name}_yuhunequip${i}_yuhun`].RES == 'number') {
								itemRES += lib.config[`${player.name}_yuhunequip${i}_yuhun`].RES;
							}
							var cardyh = game.createCard(name, suit, number);
							player.storage.yh_ = player.storage.yh_.concat(cardyh);
							player.directgain(cardyh);
							player.lose(cardyh, ui.special)._triggered = null;
							player.$gain2(cardyh);
						}
						if (TP && ['A', 'B', 'C', 'D', 'E', 'F'].includes(TP)) {
							player.storage.yysATK += itemATK;
							if (itemATKx > 0) {
								player.storage.yysATKx += itemATKx;
							}
							player.storage.yysDEF += itemDEF;
							if (itemDEFx > 0) {
								player.storage.yysDEFx += itemDEFx;
							}
							player.storage.yysCS += itemCS;
							player.storage.yysCSS += itemCSS;
							if (itemATK > 0) {
								player.storage.yh_ATK += itemATK;
								player.storage[`yh_ATK${TP}`] += itemATK;
							}
							if (itemATKx > 0) {
								player.storage.yh_ATKx += itemATKx;
								player.storage[`yh_ATKx${TP}`] += itemATKx;
							}
							if (itemDEF > 0) {
								player.storage.yh_DEF += itemDEF;
								player.storage[`yh_DEF${TP}`] += itemDEF;
							}
							if (itemDEFx > 0) {
								player.storage.yh_DEFx += itemDEFx;
								player.storage[`yh_DEFx${TP}`] += itemDEFx;
							}
							if (itemCS > 0) {
								player.storage.yh_CS += itemCS;
								player.storage[`yh_CS${TP}`] += itemCS;
							}
							if (itemCSS > 0) {
								player.storage.yh_CSS += itemCSS;
								player.storage[`yh_CSS${TP}`] += itemCSS;
							}
							if (itemmaxHp > 0) {
								player.maxHp = numberq0(player.maxHp) + numberq0(Math.round(mh * (itemmaxHp / 100)));
								player.storage.yh_MAXHP += Math.round(player.maxHp - mh);
								player.storage[`yh_MAXHP${TP}`] += Math.round(player.maxHp - mh);
								player.storage.yysMAXHP = numberq0(Math.round(player.maxHp - mh));
							}
							if (itemINF > 0) {
								player.storage.yh_INF += itemINF;
								player.storage[`yh_INF${TP}`] += itemINF;
							}
							if (itemRES > 0) {
								player.storage.yh_RES += itemRES;
								player.storage[`yh_RES${TP}`] += itemRES;
							}
						}
						if (player.maxHp - mh > 0) {
							player.hp += player.maxHp - mh;
						}
					}
				},
			};
			lib.skill._dpcqChangeHp = {
				trigger: {
					player: ['recoverEnd', 'damageEnd', 'loseHpEnd', 'changeHpEnd', 'loseMaxHpEnd', 'gainMaxHpEnd', 'phaseBegin', 'phaseAfter'],
				},
				forced: true,
				filter(event, player) {
					return (player.node.Hp && player.node.Hp != undefined) || (player.node.HpText && player.node.HpText != undefined);
				},
				_priority: 202130,
				content() {
					var percent = (player.hp / player.maxHp) * 100;
					if (percent < 0) {
						var percent = 0;
					}
					var hpcolor = ['grey', 'red', 'purple', 'blue', 'cyan', 'green', 'yellow', 'orange', 'gold', 'colorful'];
					var hpc = Math.floor(percent / 10);
					if (hpc == 10) {
						hpc = 9;
					}
					if (hpcolor[hpc] != 'colorful') {
						player.node.HpText.innerHTML = `<font color=${hpcolor[hpc]}>${Math.round(percent)}&nbsp;%</font>`;
					} else {
						player.node.HpText.innerHTML = Math.round(percent) + '&nbsp;%';
					}
					if (player.node.Hp != undefined) player.node.Hp.style.width = percent * 100 + '%';
				},
			};
			//自动整合技能标记
			lib.skill._qxqdpcq_skillInfo = {
				trigger: {
					global: ['gameStart'],
					player: ['useSkillAfter', 'logSkillBegin'],
				},
				forced: true,
				silent: true,
				filter(event, player) {
					return player.name?.includes('qxq_dpcq');
				},//QQQ
				_priority: 202130,
				content() {
					var list2 = [];
					for (var i in lib.character) {
						if (i == player.name) {
							for (var x = 0; x < lib.character[i][3].length; x++) {
								list2.add(lib.character[i][3][x]);
							}
						}
					}
					for (var i = 0; i < list2.length; i++) {
						var skillname = '' + list2[i];
						player.unmarkSkill(skillname);
					}
					var list1 = player.getSkills();
					for (var i = 0; i < list1.length; i++) {
						var skillname = '' + list1[i];
						if (skillname != 'allSkillInfo' && skillname != 'yysAllIn' && get.info(skillname).unseen && get.info(skillname).unseen === true) player.unmarkSkill(skillname);
					}
					player.addSkill('allSkillInfo');
				},
			};
			lib.skill._yysFrozenSkip = {
				trigger: {
					player: 'phaseBefore',
				},
				mark: true,
				marktext: '冰',
				intro: {
					name: '冰冻',
					content: '该角色已被冰冻,下个回合自动跳过.',
				},
				filter(event, player) {
					return player.isFrozen == true;
				},
				forced: true,
				silent: true,
				content() {
					trigger.cancel();
					player.isFrozen = false;
					game.log(player, '解除了冰冻!');
				},
			};
			//————————————————————————————————————————————————————标记开局初始化
			lib.element.player.yysinit = function () {
				const player = this;
				player.storage.yysinit = true;
				//————————————————————————————————————————————————————buff
				for (const name of ['sustainup', 'Damageup', 'recoverup', 'motive']) {
					if (!player.storage[`yys${name}`]) {
						player.storage[`yys${name}`] = 0;
					}
				}
				player.markSkill('yysAllIn');//buff
				//————————————————————————————————————————————————————御魂
				for (const name of ['ATK', 'ATKx', 'DEF', 'DEFx', 'CS', 'CSS', 'RES', 'INF', 'MAXHP']) {
					if (!player.storage[`yys${name}`]) {
						player.storage[`yys${name}`] = 0;
					}//总属性
					if (!player.storage[`yh_${name}`]) {
						player.storage[`yh_${name}`] = 0;
					}//御魂总属性
					for (const i of ['A', 'B', 'C', 'D', 'E', 'F']) {
						if (!player.storage[`yh_${name}${i}`]) {
							player.storage[`yh_${name}${i}`] = 0;
						}//御魂分属性
					}
				}
				if (!player.storage.yysCSS) {
					player.storage.yysCSS = 150;
				} //暴击伤害加成
				for (const name of ['ATK', 'DEF']) {
					if (!player.storage[`yys${name}`]) {
						player.storage[`yys${name}`] = 1000;
					}
				}//基础攻击防御
				if (!player.storage.yh_) {
					player.storage.yh_ = [];
				}
				player.markSkill('yh_');//御魂
			};
			lib.skill._qxqdpcq_buff = {
				trigger: {
					global: ['gameStart', 'phaseBegin'],
				},
				forced: true,
				popup: false,
				_priority: Infinity,
				filter(event, player) {
					return !player.storage.yysinit;
				},
				async content(event, trigger, player) {
					player.yysinit();
				},
			};
			//————————————————————————————————————————————————————御魂属性
			lib.skill.yh_ = {
				mark: true,
				marktext: '御',
				intro: {
					name: '御魂',
					content(storage, player) {
						var str = '';
						for (const i of player.storage.yh_) {
							str += '、' + get.translation(i);
						}
						return str;
					},
					mark(dialog, content, player) {
						dialog.add('<div class="text center">已装备的御魂</div>');
						if (player.storage.yh_.length) {
							dialog.add(player.storage.yh_);
						}
						dialog.addText('<li>当前御魂总属性加成:');
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/ATK.jpg">`);
						dialog.addText(`<br>固有攻击增加${player.storage.yh_ATK}点`);
						dialog.addText(`<br>攻击百分比增加${player.storage.yh_ATKx}%`);
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/DEF.jpg">`);
						dialog.addText(`<br>固有防御增加${player.storage.yh_DEF}点`);
						dialog.addText(`<br>防御百分比增加${player.storage.yh_DEFx}%`);
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/CS.jpg">`);
						dialog.addText(`<br>暴击增加${player.storage.yh_CS}%`);
						dialog.addText(`<br>爆伤增加${player.storage.yh_CSS}%`);
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/resistanceup.jpg">`);
						dialog.addText(`<br>效果抵抗增加${player.storage.yh_RES}%`);
						dialog.addText(`<br>效果命中增加${player.storage.yh_INF}%`);
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/maxHp.jpg">`);
						dialog.addText(`<br>生命上限增加${player.storage.yh_MAXHP}%`);
						var div = ui.create.div('.menubutton.round', '详', function () {
							var dialog1 = {};
							var background = ui.create.div('hidden');
							background.style.backgroundColor = 'black';
							background.classList.add('popped');
							background.classList.add('static');
							background.style.height = 'calc(40%)';
							background.style.width = 'calc(30%)';
							background.style.left = 'calc(30%)';
							background.style.top = 'calc(30%)';
							background.innerHTML = '<li>当前总属性加成:';
							if (player.storage.yh_ATK > 0) {
								background.innerHTML += `<br>固有攻击增加${player.storage.yh_ATK}点`
							}
							if (player.storage.yh_ATKx > 0) {
								background.innerHTML += `<br>攻击百分比增加${player.storage.yh_ATKx}%`
							}
							if (player.storage.yh_DEF > 0) {
								background.innerHTML += `<br>固有防御增加${player.storage.yh_DEF}点`
							}
							if (player.storage.yh_DEFx > 0) {
								background.innerHTML += `<br>防御百分比增加${player.storage.yh_DEFx}%`
							}
							if (player.storage.yh_CS > 0) {
								background.innerHTML += `<br>暴击增加${player.storage.yh_CS}%`
							}
							if (player.storage.yh_CSS > 0) {
								background.innerHTML += `<br>爆伤增加${player.storage.yh_CSS}%`
							}
							if (player.storage.yh_RES > 0) {
								background.innerHTML += `<br>效果抵抗增加${player.storage.yh_RES}%`
							}
							if (player.storage.yh_INF > 0) {
								background.innerHTML += `<br>效果命中增加${player.storage.yh_INF}%`
							}
							if (player.storage.yh_MAXHP > 0) {
								background.innerHTML += `<br>生命上限增加${player.storage.yh_MAXHP}%`
							}
							background.innerHTML += '<li>当前各号位御魂属性加成:';
							background.innerHTML += '<li><br>当前一号位御魂属性加成:';
							if (player.storage.yh_ATKA > 0) {
								background.innerHTML += `<br>固有攻击增加${player.storage.yh_ATKA}点`
							}
							if (player.storage.yh_ATKxA > 0) {
								background.innerHTML += `<br>攻击百分比增加${player.storage.yh_ATKxA}%`
							}
							if (player.storage.yh_DEFA > 0) {
								background.innerHTML += `<br>固有防御增加${player.storage.yh_DEFA}点`
							}
							if (player.storage.yh_DEFxA > 0) {
								background.innerHTML += `<br>防御百分比增加${player.storage.yh_DEFxA}%`
							}
							if (player.storage.yh_CSA > 0) {
								background.innerHTML += `<br>暴击增加${player.storage.yh_CSA}%`
							}
							if (player.storage.yh_CSSA > 0) {
								background.innerHTML += `<br>爆伤增加${player.storage.yh_CSSA}%`
							}
							if (player.storage.yh_RESA > 0) {
								background.innerHTML += `<br>效果抵抗增加${player.storage.yh_RESA}%`
							}
							if (player.storage.yh_INFA > 0) {
								background.innerHTML += `<br>效果命中增加${player.storage.yh_INFA}%`
							}
							if (player.storage.yh_MAXHPA > 0) {
								background.innerHTML += `<br>生命上限增加${player.storage.yh_MAXHPA}%`
							}
							background.innerHTML += '<li><br>当前二号位御魂属性加成:';
							if (player.storage.yh_ATKB > 0) {
								background.innerHTML += `<br>固有攻击增加${player.storage.yh_ATKB}点`
							}
							if (player.storage.yh_ATKxB > 0) {
								background.innerHTML += `<br>攻击百分比增加${player.storage.yh_ATKxB}%`
							}
							if (player.storage.yh_DEFB > 0) {
								background.innerHTML += `<br>固有防御增加${player.storage.yh_DEFB}点`
							}
							if (player.storage.yh_DEFxB > 0) {
								background.innerHTML += `<br>防御百分比增加${player.storage.yh_DEFxB}%`
							}
							if (player.storage.yh_CSB > 0) {
								background.innerHTML += `<br>暴击增加${player.storage.yh_CSB}%`
							}
							if (player.storage.yh_CSSB > 0) {
								background.innerHTML += `<br>爆伤增加${player.storage.yh_CSSB}%`
							}
							if (player.storage.yh_RESB > 0) {
								background.innerHTML += `<br>效果抵抗增加${player.storage.yh_RESB}%`
							}
							if (player.storage.yh_INFB > 0) {
								background.innerHTML += `<br>效果命中增加${player.storage.yh_INFB}%`
							}
							if (player.storage.yh_MAXHPB > 0) {
								background.innerHTML += `<br>生命上限增加${player.storage.yh_MAXHPB}%`
							}
							background.innerHTML += '<li><br>当前三号位御魂属性加成:';
							if (player.storage.yh_ATKC > 0) {
								background.innerHTML += `<br>固有攻击增加${player.storage.yh_ATKC}点`
							}
							if (player.storage.yh_ATKxC > 0) {
								background.innerHTML += `<br>攻击百分比增加${player.storage.yh_ATKxC}%`
							}
							if (player.storage.yh_DEFC > 0) {
								background.innerHTML += `<br>固有防御增加${player.storage.yh_DEFC}点`
							}
							if (player.storage.yh_DEFxC > 0) {
								background.innerHTML += `<br>防御百分比增加${player.storage.yh_DEFxC}%`
							}
							if (player.storage.yh_CSC > 0) {
								background.innerHTML += `<br>暴击增加${player.storage.yh_CSC}%`
							}
							if (player.storage.yh_CSSC > 0) {
								background.innerHTML += `<br>爆伤增加${player.storage.yh_CSSC}%`
							}
							if (player.storage.yh_RESC > 0) {
								background.innerHTML += `<br>效果抵抗增加${player.storage.yh_RESC}%`
							}
							if (player.storage.yh_INFC > 0) {
								background.innerHTML += `<br>效果命中增加${player.storage.yh_INFC}%`
							}
							if (player.storage.yh_MAXHPC > 0) {
								background.innerHTML += `<br>生命上限增加${player.storage.yh_MAXHPC}%`
							}
							background.innerHTML += '<li><br>当前四号位御魂属性加成:';
							if (player.storage.yh_ATKD > 0) {
								background.innerHTML += `<br>固有攻击增加${player.storage.yh_ATKD}点`
							}
							if (player.storage.yh_ATKxD > 0) {
								background.innerHTML += `<br>攻击百分比增加${player.storage.yh_ATKxD}%`
							}
							if (player.storage.yh_DEFD > 0) {
								background.innerHTML += `<br>固有防御增加${player.storage.yh_DEFD}点`
							}
							if (player.storage.yh_DEFxD > 0) {
								background.innerHTML += `<br>防御百分比增加${player.storage.yh_DEFxD}%`
							}
							if (player.storage.yh_CSD > 0) {
								background.innerHTML += `<br>暴击增加${player.storage.yh_CSD}%`
							}
							if (player.storage.yh_CSSD > 0) {
								background.innerHTML += `<br>爆伤增加${player.storage.yh_CSSD}%`
							}
							if (player.storage.yh_RESD > 0) {
								background.innerHTML += `<br>效果抵抗增加${player.storage.yh_RESD}%`
							}
							if (player.storage.yh_INFD > 0) {
								background.innerHTML += `<br>效果命中增加${player.storage.yh_INFD}%`
							}
							if (player.storage.yh_MAXHPD > 0) {
								background.innerHTML += `<br>生命上限增加${player.storage.yh_MAXHPD}%`
							}
							background.innerHTML += '<li><br>当前五号位御魂属性加成:';
							if (player.storage.yh_ATKE > 0) {
								background.innerHTML += `<br>固有攻击增加${player.storage.yh_ATKE}点`
							}
							if (player.storage.yh_ATKxE > 0) {
								background.innerHTML += `<br>攻击百分比增加${player.storage.yh_ATKxE}%`
							}
							if (player.storage.yh_DEFE > 0) {
								background.innerHTML += `<br>固有防御增加${player.storage.yh_DEFE}点`
							}
							if (player.storage.yh_DEFxE > 0) {
								background.innerHTML += `<br>防御百分比增加${player.storage.yh_DEFxE}%`
							}
							if (player.storage.yh_CSE > 0) {
								background.innerHTML += `<br>暴击增加${player.storage.yh_CSE}%`
							}
							if (player.storage.yh_CSSE > 0) {
								background.innerHTML += `<br>爆伤增加${player.storage.yh_CSSE}%`
							}
							if (player.storage.yh_RESE > 0) {
								background.innerHTML += `<br>效果抵抗增加${player.storage.yh_RESE}%`
							}
							if (player.storage.yh_INFE > 0) {
								background.innerHTML += `<br>效果命中增加${player.storage.yh_INFE}%`
							}
							if (player.storage.yh_MAXHPE > 0) {
								background.innerHTML += `<br>生命上限增加${player.storage.yh_MAXHPE}%`
							}
							background.innerHTML += '<li><br>当前六号位御魂属性加成:';
							if (player.storage.yh_ATKF > 0) {
								background.innerHTML += `<br>固有攻击增加${player.storage.yh_ATKF}点`
							}
							if (player.storage.yh_ATKxF > 0) {
								background.innerHTML += `<br>攻击百分比增加${player.storage.yh_ATKxF}%`
							}
							if (player.storage.yh_DEFF > 0) {
								background.innerHTML += `<br>固有防御增加${player.storage.yh_DEFF}点`
							}
							if (player.storage.yh_DEFxF > 0) {
								background.innerHTML += `<br>防御百分比增加${player.storage.yh_DEFxF}%`
							}
							if (player.storage.yh_CSF > 0) {
								background.innerHTML += `<br>暴击增加${player.storage.yh_CSF}%`
							}
							if (player.storage.yh_CSSF > 0) {
								background.innerHTML += `<br>爆伤增加${player.storage.yh_CSSF}%`
							}
							if (player.storage.yh_RESF > 0) {
								background.innerHTML += `<br>效果抵抗增加${player.storage.yh_RESF}%`
							}
							if (player.storage.yh_INFF > 0) {
								background.innerHTML += `<br>效果命中增加${player.storage.yh_INFF}%`
							}
							if (player.storage.yh_MAXHPF > 0) {
								background.innerHTML += `<br>生命上限增加${player.storage.yh_MAXHPF}%`
							}
							background.innerHTML += `<br>当前已共计增加${player.storage.yh_MAXHP}点生命上限`;
							background.style.borderRadius = '5px';
							background.style['text-align'] = 'left';
							background.style['overflow-x'] = 'hidden';
							background.style['overflow-y'] = 'scroll';
							lib.setScroll(background);
							ui.window.appendChild(background);
							dialog1.background = background;
							var func1 = function () {
								for (var i in dialog1) {
									dialog1[i].delete();
									delete dialog1[i];
								}
							};
							var divx = ui.create.div('.menubutton.round', '×', function () {
								func1();
							});
							divx.style.top = '5px';
							divx.style.left = 'calc(100% - 55px)';
							divx.style.zIndex = 1000;
							background.appendChild(divx);
						});
						div.style.right = 'calc(0%)';
						div.style.top = 'calc(0%)';
						dialog.appendChild(div);
					},
				},
			};
			//————————————————————————————————————————————————————buff属性
			lib.skill.yysAllIn = {
				mark: true,
				marktext: 'Buff',
				intro: {
					name: '属性加成',
					mark(dialog, storage, player) {
						//攻击
						dialog.addText('<font color=red>————攻击类————</font>');
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/ATK.jpg">`);
						dialog.addText('<font color=red>基础攻击力</font>:' + player.storage.yysATK);
						dialog.addText(`<font color=red>攻击加成</font>:${player.storage.yysATKx}%`);
						dialog.addText(`<font color=red>伤害加成</font>:${player.storage.yysDamageup}%`);
						//防御
						dialog.addText('<font color=cyan>————防御类————</font>');
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/sustainup.jpg">`);
						dialog.addText('<font color=cyan>基础防御力</font>:' + player.storage.yysDEF);
						dialog.addText(`<font color=cyan>防御加成</font>:${player.storage.yysDEFx}%`);
						dialog.addText(`<font color=cyan>受伤减免</font>:${player.storage.yyssustainup}%`);
						//暴击爆伤
						dialog.addText('<font color=yellow>———暴击类———</font>');
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/CS.jpg"><img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/CSS.jpg">`);
						dialog.addText(`<font color=yellow>暴击率</font>:${player.storage.yysCS}%`);
						dialog.addText(`<font color=yellow>暴击伤害</font>:${player.storage.yysCSS}%`);
						//命中
						dialog.addText('<font color=orange>————命中类————</font>');
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/infectivityup.jpg">`);
						dialog.addText(`<font color=orange>效果命中</font>:${player.storage.yysINF}%`);
						//抵抗
						dialog.addText('<font color=blue>————抵抗类————</font>');
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/resistanceup.jpg">`);
						dialog.addText(`<font color=blue>效果抵抗</font>:${player.storage.yysRES}%`);
						//治疗
						dialog.addText('<font color=pink>————治疗类————</font>');
						dialog.addSmall(`<img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/maxHp.jpg"><img style=width:20px src="extension/斗破苍穹X阴阳师/jntx/yysrecoverup.jpg">`);
						dialog.addText(`<br>生命上限增加${player.storage.yysMAXHP}%`);
						dialog.addText(`<font color=pink>治疗加成</font>:${player.storage.yysrecoverup}%`);
						dialog.addText(`当前行动条:${player.storage.yysmotive}%,累计100%后获得一个额外回合,负100%后跳过下一个回合`);
						//御魂
						dialog.addText('<font color=purple>————御魂套装————</font>');
						if (player.hasSkill('yhdizangxiang_dzx')) {
							var pictureyh = `<img style=width:50px src="extension/斗破苍穹X阴阳师/jntx/yhdizangxiang.jpg">`;
							dialog.addText('已激活【地藏像】御魂套装效果!');
							dialog.addSmall(pictureyh);
						}
						if (player.hasSkill('yhfanhunxiang_fhx')) {
							var pictureyh = `<img style=width:50px src="extension/斗破苍穹X阴阳师/jntx/yhfanhunxiang.jpg">`;
							dialog.addText('已激活【返魂香】御魂套装效果!');
							dialog.addSmall(pictureyh);
						}
						if (player.hasSkill('yhkuanggu_kg')) {
							var pictureyh = `<img style=width:50px src="extension/斗破苍穹X阴阳师/jntx/yhkuanggu.jpg">`;
							dialog.addText('已激活【狂骨】御魂套装效果!');
							dialog.addSmall(pictureyh);
						}
						if (player.hasSkill('yhmeiyao_my')) {
							var pictureyh = `<img style=width:50px src="extension/斗破苍穹X阴阳师/jntx/yhmeiyao.jpg">`;
							dialog.addText('已激活【魅妖】御魂套装效果!');
							dialog.addSmall(pictureyh);
						}
						if (player.hasSkill('yhmumei_mm')) {
							var pictureyh = `<img style=width:50px src="extension/斗破苍穹X阴阳师/jntx/yhmumei.jpg">`;
							dialog.addText('已激活【木魅】御魂套装效果!');
							dialog.addSmall(pictureyh);
						}
						if (player.hasSkill('yhshanghunniao_shn')) {
							var pictureyh = `<img style=width:50px src="extension/斗破苍穹X阴阳师/jntx/yhshanghunniao.jpg">`;
							dialog.addText('已激活【伤魂鸟】御魂套装效果!');
							dialog.addSmall(pictureyh);
						}
						if (player.hasSkill('yhzhaocaimao_zcm')) {
							var pictureyh = `<img style=width:50px src="extension/斗破苍穹X阴阳师/jntx/yhzhaocaimao.jpg">`;
							dialog.addText('已激活【招财猫】御魂套装效果!');
							dialog.addSmall(pictureyh);
						}
						if (player.hasSkill('yhzheng_z')) {
							var pictureyh = `<img style=width:50px src="extension/斗破苍穹X阴阳师/jntx/yhzheng.jpg">`;
							dialog.addText('已激活【狰】御魂套装效果!');
							dialog.addSmall(pictureyh);
						}
						if (player.hasSkill('yhzhenmushou_zms')) {
							var pictureyh = `<img style=width:50px src="extension/斗破苍穹X阴阳师/jntx/yhzhenmushou.jpg">`;
							dialog.addText('已激活【镇墓兽】御魂套装效果!');
							dialog.addSmall(pictureyh);
						}
					},
				},
			};
			//————————————————————————————————————————————————————其他buff属性开始
			lib.skill._yysrecover = {
				trigger: {
					global: ['recoverBefore'],
				},
				forced: true,
				silent: true,
				nobracket: true,
				filter(event, player) {
					return event.player.storage.yysrecoverup;
				},
				async content(event, trigger, player) {
					var rcu = trigger.player.storage.yysrecoverup / 100;
					trigger.num = trigger.num * (1 + rcu);
				},
			};
			lib.skill._yysRES = {
				trigger: {
					player: ['turnOverBefore', 'linkBefore'],
				},
				forced: true,
				filter(event, player, name) {
					if (name == 'linkBefore') {
						return !player.isLinked();
					}
					return !player.isTurnedOver();
				},
				async content(event, trigger, player) {
					var up = player.storage.yysRES / 100;
					if (Math.random() <= up) {
						trigger.cancel();
					}
					game.log(player, '触发了抵抗!');
				},
			};
			lib.skill._yysmotive1 = {
				trigger: {
					global: ['phaseAfter'],
				},
				forced: true,
				nobracket: true,
				filter(event, player) {
					return player.storage.yysmotive > 99;
				},
				async content(event, trigger, player) {
					player.storage.yysmotive -= 100;
					player.phase('yysmotive');
				},
			};
			lib.skill._yysmotive2 = {
				trigger: {
					player: ['phaseBegin'],
				},
				forced: true,
				nobracket: true,
				filter(event, player) {
					return player.storage.yysmotive < -99;
				},
				async content(event, trigger, player) {
					player.storage.yysmotive += 100;
					trigger.cancel();
				},
			};
			lib.skill.dizzy = {
				mark: true,
				marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/dizzy.jpg>`,
				intro: {
					name: '晕眩',
					content: '回合开始时自动跳过出牌阶段.',
				},
				trigger: {
					player: 'phaseUseBefore',
				},
				forced: true,
				content() {
					'step 0';
					trigger.cancel();
					('step 1');
					player.removeSkill('dizzy');
				},
			};
			lib.skill.bihu = {
				mark: true,
				marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/bihu.jpg>`,
				intro: {
					name: '庇护',
					content: '抵挡一次翻面效果.',
				},
				init(player) {
					player.storage.bihu;
					player.markSkill('bihu');
				},
				trigger: {
					player: ['turnOverBefore', 'phaseZhunbeiBegin'],
				},
				_priority: 20,
				forced: true,
				filter(event, player) {
					return !player.isTurnedOver();
				},
				content() {
					if (trigger.name == 'phaseZhunbei') {
						player.removeSkill('bihu');
					} else {
						trigger.cancel();
						player.removeSkill('bihu');
					}
				},
			};
			//————————————————————————————————————————————————————其他buff属性结束
			lib.skill.allSkillInfo = {
				mark: true,
				marktext: '技',
				intro: {
					name: '角色技能',
					mark(dialog, storage, player) {
						var list2 = [];
						var list1 = player.getSkills();
						for (var i in lib.character) {
							if (i == player.name) {
								dialog.addText(get.translation(i));
								for (var x = 0; x < lib.character[i][3].length; x++) {
									list2.add(lib.character[i][3][x]);
								}
							}
						}
						dialog.addText('<br><li>原武将牌上的技能<br>');
						for (var i = 0; i < list2.length; i++) {
							var skillname = '' + list2[i];
							var info = get.translation(skillname + '_info');
							dialog.addText(`<br>【${get.translation(skillname)}】`);
							dialog.addText(`<li>${info}<br>`);
							if (player.storage[skillname]) {
								if (player.storage[skillname] && player.storage[skillname][0] && typeof player.storage[skillname][0] == 'string') {
									dialog.addText(`<br><br>当前技能【${get.translation(skillname)}】的标记所含内容为:`);
									dialog.addText(`${player.storage[skillname]}<br>`);
								} else {
									if (typeof player.storage[skillname] == 'number') {
										dialog.addText(`<br>当前技能【${get.translation(skillname)}】的标记数为:${player.storage[skillname]}<br>`);
									}
									if (player.storage[skillname] && player.storage[skillname][0] && typeof player.storage[skillname][0] == 'object') {
										var listcard = [];
										var listtarget = [];
										for (var b = 0; b < player.storage[skillname].length; b++) {
											if (get.itemtype(player.storage[skillname][b]) == 'card' || get.itemtype(player.storage[skillname][b]) == 'cards') {
												listcard.push(player.storage[skillname][b]);
											}
										}
										for (var b = 0; b < player.storage[skillname].length; b++) {
											if (get.itemtype(player.storage[skillname][b]) == 'player') {
												listtarget.push(player.storage[skillname][b]);
											}
										}
										if (listcard.length) {
											dialog.addText(`<br><br>当前技能【${get.translation(skillname)}】的标记所含卡牌为:`);
											for (var b = 0; b < listcard.length; b++) {
												if (get.itemtype(listcard[b]) == 'card' || get.itemtype(listcard[b]) == 'cards') {
													dialog.addSmall([[listcard[b].name], 'vcard']);
												}
											}
										}
										if (listtarget.length) {
											dialog.addText(`<br><br>当前技能【${get.translation(skillname)}】的标记所含目标为:`);
											for (var b = 0; b < listtarget.length; b++) {
												if (get.itemtype(listtarget[b]) == 'player') {
													dialog.addSmall([[listtarget[b].name], 'character']);
												}
											}
										}
									}
								}
							}
						}
						dialog.addText('<br><li>已获得的技能<br>');
						for (var i = list1.length; i >= 0; i--) {
							if (!list2.includes(list1[i])) {
								var skillname = '' + list1[i];
								var info = get.translation(skillname + '_info');
								if (!get.translation(skillname + '_info') || get.translation(skillname + '_info') == skillname + '_info') {
									list1.remove(skillname);
								}
							}
						}
						for (var i = 0; i < list1.length; i++) {
							if (!list2.includes(list1[i])) {
								var skillname = '' + list1[i];
								var info = get.translation(skillname + '_info');
								dialog.addText(`<br>【${get.translation(skillname)}】`);
								dialog.addText(`<li>${info}<br>`);
								if (player.storage[skillname]) {
									if (player.storage[skillname] && player.storage[skillname][0] && typeof player.storage[skillname][0] == 'string') {
										dialog.addText('<br><br>当前此技能的标记所含内容为:');
										dialog.addText(`${player.storage[skillname]};<br>`);
									}
									if (typeof player.storage[skillname] == 'number') {
										dialog.addText(`<br>当前此技能的标记数为:${player.storage[skillname]}<br>`);
									}
								}
							}
						}
					},
				},
				onremove(player) {
					player.addSkill('allSkillInfo');
				},
			};
			if (config.qxqdpcq_xiulianzhilu) {
				lib.skill._qxqdpcq_xiulianzhilu = {
					trigger: {
						global: 'gameStart',
						player: 'phaseBegin',
					},
					forced: true,
					silent: true,
					filter(event, player) {
						return !player.hasSkill('douqi') || !player.hasSkill('dpcqjingjie') || !player.hasSkill('dpcqxing') || !player.hasSkill('dpcqgaindouqi') || !player.hasSkill('dpcqgaindq') || !player.hasSkill('xiulian');
					},
					_priority: 202130,
					content() {
						player.addSkill('dpcqjingjie');
						player.addSkill('dpcqxing');
					},
				};
				lib.element.player.dpcqChangeDouQi = function (num) {
					if (isNaN(num)) num = 0;
					var player = this;
					if (!player.storage.douqi) player.storage.douqi = 0;
					if (!player.storage.dpcqjingjie) player.storage.dpcqjingjie = 0;
					if (!player.storage.dpcqxing) player.storage.dpcqxing = 0;
					player.storage.douqi += num;
					if (player.storage.douqi > (player.storage.dpcqjingjie < 8 ? 10 + player.storage.dpcqxing * 10 + player.storage.dpcqjingjie * 150 : 100 + player.storage.dpcqxing * 10 * (player.storage.dpcqjingjie - 5) + player.storage.dpcqjingjie * 150 * (player.storage.dpcqjingjie - 5))) player.storage.douqi = player.storage.dpcqjingjie < 8 ? 10 + player.storage.dpcqxing * 10 + player.storage.dpcqjingjie * 150 : 100 + player.storage.dpcqxing * 10 * (player.storage.dpcqjingjie - 5) + player.storage.dpcqjingjie * 150 * (player.storage.dpcqjingjie - 5);
					if (player.storage.douqi < 0) player.storage.douqi = 0;
				};
				lib.skill._dpcqgaindouqi = {
					//前期
					trigger: {
						player: ['damageEnd', 'recoverEnd'],
					},
					forced: true,
					_priority: 202130,
					filter(event, player) {
						if (player.storage.douqi || player.storage.dpcqjingjie || player.storage.dpcqxing) return true;
					},
					content() {
						if (trigger.name == 'damage') {
							var num = Math.round((10 - player.storage.dpcqxing) * (100 / (player.storage.dpcqjingjie + 1)) * 5) + player.storage.dpcqjingjie * 20;
						}
						if (trigger.name == 'recover') {
							var num = Math.round((10 - player.storage.dpcqxing) * (100 / (player.storage.dpcqjingjie + 1)) * 5) + player.storage.dpcqjingjie * 20;
						}
						player.dpcqChangeDouQi(num * 3);
					},
				};
				lib.skill._dpcqgaindq = {
					//中后期
					trigger: {
						player: ['gainAfter', 'loseAfter', 'useCardEnd'],
					},
					forced: true,
					_priority: 202130,
					filter(event, player) {
						if (player.storage.douqi || player.storage.dpcqjingjie || player.storage.dpcqxing) return true;
					},
					content() {
						if (trigger.name == 'gain') {
							var num = (10 - player.storage.dpcqxing) * (player.storage.dpcqjingjie + Math.round(player.storage.dpcqxing / 2));
						}
						if (trigger.name == 'lose') {
							var num = (10 - player.storage.dpcqxing) * (player.storage.dpcqjingjie + Math.round(player.storage.dpcqxing / 2)) * 3;
						}
						if (trigger.name == 'useCard') {
							var num = (10 - player.storage.dpcqxing) * (player.storage.dpcqjingjie + Math.round(player.storage.dpcqxing / 2)) * 2;
						}
						player.dpcqChangeDouQi(num * 3);
					},
				};
				lib.skill._douqi = {
					//全期平均
					trigger: {
						player: ['phaseZhunbeiBegin'],
					},
					_priority: 300,
					forced: true,
					filter(event, player) {
						if (player.storage.douqi >= 0 && player.storage.dpcqjingjie >= 0 && player.storage.dpcqxing >= 0) return true;
					},
					content() {
						'step 0';
						if (trigger.name == 'phaseZhunbei') {
							var num = player.storage.dpcqxing * 50 + player.storage.dpcqjingjie * 150;
						}
						player.dpcqChangeDouQi(num);
					},
				};
				lib.skill._douqi = {
					//全期平均
					trigger: {
						player: ['logSkillBegin', 'useSkillAfter'],
					},
					_priority: 300,
					silent: true,
					forced: true,
					filter(event, player) {
						if (event.name == 'useSkill' && event.skill != undefined && event.skill != '_dpcqtupo' && event.skill != '_dpcqtp') return true;
						if (event.name != 'useSkill') return true;
					},
					content() {
						'step 0';
						if (trigger.name == 'useSkill') {
							var num = 1 + (10 - player.storage.dpcqxing) * 5 + player.storage.dpcqjingjie * 10;
						} else {
							var num = 1 + (10 - player.storage.dpcqxing) * 5 + player.storage.dpcqjingjie * 10;
						}
						player.dpcqChangeDouQi(num * 3);
					},
				};
				lib.skill.dpcqjingjie = {
					init(player) {
						player.storage.dpcqjingjie = 0;
					},
					mark: true,
					marktext: '境',
					intro: {
						name: '修炼境界',
						content(storage, player) {
							var str = '达到九段/境界九星且满斗气值时可突破至下一境界,当前修炼境界:';
							str += `<li>当前斗气值: ${player.storage.douqi}/${player.storage.dpcqjingjie < 8 ? 10 + player.storage.dpcqxing * 10 + player.storage.dpcqjingjie * 150 : 100 + player.storage.dpcqxing * 10 * (player.storage.dpcqjingjie - 5) + player.storage.dpcqjingjie * 150 * (player.storage.dpcqjingjie - 5)}点`;
							str += '<li>当前境界:';
							if (storage == 0) str += `斗之气·${player.storage.dpcqxing}段<li>当前附加技能:暂无.`;
							if (storage == 1) str += `斗者 ${player.storage.dpcqxing}星<li>当前附加技能:暂无.`;
							if (storage == 2) str += `斗师 ${player.storage.dpcqxing}星<li>当前附加技能:斗气纱衣(消耗5斗气值).`;
							if (storage == 3) str += `大斗师 ${player.storage.dpcqxing}星<li>当前附加技能:斗气铠甲(消耗35斗气值).`;
							if (storage == 4) str += `斗灵 ${player.storage.dpcqxing}星<li>当前附加技能:斗气化物(消耗30斗气值).`;
							if (storage == 5) str += `斗王 ${player.storage.dpcqxing}星<li>当前附加技能:斗气化翼·低阶(消耗50斗气值).`;
							if (storage == 6) str += `斗皇 ${player.storage.dpcqxing}星<li>当前附加技能:斗气纱衣·高阶(消耗65斗气值).`;
							if (storage == 7) str += `斗宗 ${player.storage.dpcqxing}星<li>当前附加技能:凌踏虚空(消耗100斗气值).`;
							if (storage == 8) str += `斗尊 ${player.storage.dpcqxing}星<li>当前附加技能:缚空间锁(消耗150斗气值).`;
							if (storage == 9) str += `九转-半圣· ${player.storage.dpcqxing}转<li>当前附加技能:调动空间(消耗200斗气值)、创造空间(限用一次,消耗200斗气值).`;
							if (storage == 10) str += `斗圣 ${player.storage.dpcqxing}星<li>当前附加技能:空间之力(消耗350斗气值)、创造空间(限用一次,消耗200斗气值).`;
							if (storage == 11) str += '斗帝<li>当前附加技能:空间之力(消耗350斗气值)、创造空间(限用一次,消耗200斗气值)、血脉之力(无消耗).';
							return str;
						},
					},
				};
				lib.skill.dpcqxing = {
					init(player) {
						player.storage.douqi = 0;
						player.storage.dpcqxing = 0;
					},
				};
				lib.skill._dpcqtupo = {
					enable: 'phaseUse',
					_priority: 202130,
					filter(event, player) {
						if (player.storage.dpcqjingjie < 11 && player.storage.dpcqxing >= 9 && player.storage.douqi >= (player.storage.dpcqjingjie < 8 ? 10 + player.storage.dpcqxing * 10 + player.storage.dpcqjingjie * 150 : 100 + player.storage.dpcqxing * 10 * (player.storage.dpcqjingjie - 5) + player.storage.dpcqjingjie * 150 * (player.storage.dpcqjingjie - 5))) return true;
					},
					check() {
						return true;
					},
					content() {
						'step 0';
						event.boolx = true;
						event.plnum = 0;
						for (var i of game.players) {
							if (i.storage.dpcqjingjie && i.storage.dpcqjingjie == 11) event.plnum++;
						}
						if (event.plnum == 2) {
							event.boolx = false;
						}
						var friends = player.getFriends();
						for (var i = 0; i < friends.length; i++) {
							if (friends[i].storage.dpcqjingjie == 11) {
								event.boolx = false;
							}
						}
						('step 1');
						var add = 0;
						if (player.failedNum && player.failedNum == player.storage.dpcqjingjie) {
							add = 0.1;
						}
						if (event.plnum == 1) {
							add += 0.4;
						}
						var x = player.countMark('dpcqjingjie') - 1;
						var y = Math.max(x, 0);
						var z = y / 11 - add;
						z = Math.min(z, 0.9);
						if (event.boolx == false && player.storage.dpcqjingjie == 10) {
							var T = ['源气耗尽,破不了斗帝了,可恶![#生气][#狂怒]'].randomGet();
							player.say(T);
							return;
						} else {
							if (Math.random() < 1 - z) {
								var S = ['修炼多年,终于更进一步,还有谁敢与我一战![#得意][#得意]', '老贼,当年之辱,日后必要你偿命![#阴险][#阴险]', '待我登临巅峰,俯瞰世间,遍寻无敌手.[#不屑][#不屑]'].randomGet();
								player.say(S);
								for (var i of game.players) {
									var O = ['草,真让这小子撞大运了![#不忿][#不忿]', '啥时候也能轮到我来[#不忿]', '有啥好得意的,我也迟早能突破!哼![#不忿]', '小子倒是猖狂[#生气][#生气]'].randomGet();
									if (i != player && i.sex != 'female') i.say(O);
									var Ox = ['嘤嘤嘤,奴家也想早点突破呢~大人可以教我突破的秘诀嘛~[#惨兮兮][#惨兮兮]', '大人,苟富贵勿相忘啊~[#惨兮兮][#惨兮兮]', '大佬,到时候记得带带小萌新啊~[#可爱][#可爱]'].randomGet();
									if (i != player && i.sex == 'female') i.say(Ox);
								}
								player.storage.dpcqxing = 0;
								player.storage.douqi = 0;
								var d = player.countMark('dpcqjingjie');
								player.storage.dpcqjingjie++;
								player.$fullscreenpop('<font color=yellow>突破成功!</font>');
								var recoverNum = Math.min(Math.floor(player.maxHp / 2), 3);
								if (recoverNum > 0) player.recover(recoverNum);
								var drawNum = player.countMark('dpcqjingjie') - 3;
								if (drawNum > 0) player.draw(drawNum);
								if (player.storage.dpcqjingjie == 11) {
									setTimeout(function () {
										var D = ['斗帝,哈哈,劳资终于成了![#大笑][#大笑]', '这就是斗气大陆最巅峰的力量么……[#捂脸][#捂脸]', '本帝已登临世间绝巅,老贼,拿命来吧![#得意][#得意]'].randomGet();
										player.say(D);
									}, 3000);
									var friends = player.getFriends();
									for (var f = 0; f < friends.length; f++) {
										setTimeout(function () {
											var F = ['如此,我们便要仰望大人您了.[#抱大腿][#抱大腿]', '大人,一定要赢啊![#抱大腿][#抱大腿]', '大人一定能消灭那些跳梁小丑的![#助威][#助威]', '我相信大人,能带我们走向胜利!', '[#膜拜][#膜拜]', '什么神仙？[#疑惑][#疑惑]'].randomGet();
											friends[f].say(F);
										}, 4000);
									}
								}
							} else {
								var S = ['咳咳~可恶,又失败了![#生气][#生气]', '我就不信了!贼老天![#狂怒][#狂怒]', '各位,就当无事发生……[#尴尬][#尴尬]'].randomGet();
								player.say(S);
								for (var i of game.players) {
									var O = [`哈哈哈${player.name},你也不太行啊![#鄙视][#鄙视]`, '真是菜鸡,还是看劳资来给你们秀一手![#不屑][#不屑]', '[#鄙视][#鄙视]'].randomGet();
									if (i != player && i.sex != 'female') i.say(O);
									var Ox = ['捂脸~[#害怕]', '看他这惨样,真是吓死伦家了~[#捂脸]', '[#害怕]~[#害怕]~', '这就是天打雷劈嘛……[#捂脸][#捂脸]'].randomGet();
									if (i != player && i.sex == 'female') i.say(Ox);
								}
								player.storage.dpcqxing--;
								player.storage.douqi = 0;
								player.failedNum = player.storage.dpcqjingjie;
								player.$fullscreenpop('<font color=gray>突破失败!</font>');
								player.damage(1, player);
								player.draw();
							}
						}
					},
					ai: {
						order: Infinity,
						result: {
							player: 10,
						},
					},
				};
				lib.skill._dpcqtp = {
					enable: 'phaseUse',
					_priority: 202130,
					filter(event, player) {
						if (player.storage.douqi >= (player.storage.dpcqjingjie < 8 ? 10 + player.storage.dpcqxing * 10 + player.storage.dpcqjingjie * 150 : 100 + player.storage.dpcqxing * 10 * (player.storage.dpcqjingjie - 5) + player.storage.dpcqjingjie * 150 * (player.storage.dpcqjingjie - 5)) && player.storage.dpcqxing < 9) return true;
					},
					check() {
						return true;
					},
					content() {
						player.storage.douqi = 0;
						player.storage.dpcqxing++;
					},
					ai: {
						order: Infinity,
						result: {
							player: 10,
						},
					},
				};
				lib.skill._dpcqdouzhe = {
					enable: 'phaseUse',
					usable: 1,
					_priority: 202130,
					filter(event, player) {
						if (player.storage.douqi >= 0 && player.storage.dpcqjingjie == 1) return !player.storage.dpcq_gongfalearned;
					},
					check() {
						return true;
					},
					content() {
						'step 0';
						player.storage.dpcq_gongfalearned = true;
						player.chooseControlList(['金属性功法', '木属性功法', '水属性功法', '火属性功法', '土属性功法', '光属性功法', '暗属性功法', '冰属性功法', '风属性功法', '雷属性功法', '毒属性功法', '不学习任何功法'], true).set('ai', function (event, player) {
							return ['金属性功法', '木属性功法', '水属性功法', '火属性功法', '土属性功法', '光属性功法', '暗属性功法', '冰属性功法', '风属性功法', '雷属性功法', '毒属性功法', '不学习任何功法'].randomGet();
						});
						('step 1');
						if (result.index == 0) {
							player.addSkill('dpcqgold');
						}
						if (result.index == 1) {
							player.addSkill('dpcqgwood');
						}
						if (result.index == 2) {
							player.addSkill('dpcqwater');
						}
						if (result.index == 3) {
							player.addSkill('dpcqfire');
						}
						if (result.index == 4) {
							player.addSkill('dpcqsoil');
						}
						if (result.index == 5) {
							player.addSkill('dpcqlight');
						}
						if (result.index == 6) {
							player.addSkill('dpcqdark');
						}
						if (result.index == 7) {
							player.addSkill('dpcqice');
						}
						if (result.index == 8) {
							player.addSkill('dpcqwind');
						}
						if (result.index == 9) {
							player.addSkill('dpcqthunder');
						}
						if (result.index == 10) {
							player.addSkill('dpcqpoison');
						} else {
							event.finish();
						}
					},
				};
				lib.skill._dpcqdoushi = {
					enable: 'phaseUse',
					_priority: 202130,
					filter(event, player) {
						if (player.storage.douqi >= 310 && player.storage.dpcqjingjie == 2) return true;
					},
					check() {
						return true;
					},
					content() {
						player.dpcqChangeDouQi(-310);
						lib.skill.dpcqdouqishayi = {
							init(player) {
								player.storage.dpcqdouqishayi = 1;
							},
							onremove(player) {
								player.storage.dpcqdouqishayi = 0;
								delete player.storage.dpcqdouqishayi;
							},
							mark: true,
							marktext: '纱',
							intro: {
								name: '斗气纱衣',
								content: '受到伤害时,有5%概率减少一点所受伤害,每多一层,概率+2%.',
							},
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							content() {
								var num = player.storage.dpcqdouqishayi - 1;
								var p = (5 + num * 2) / 100;
								if (Math.random() < p) trigger.num--;
								player.removeSkill('dpcqdouqishayi');
							},
						};
						if (!player.hasSkill('dpcqdouqishayi')) player.addSkill('dpcqdouqishayi');
						else player.storage.dpcqdouqishayi++;
					},
					ai: {
						order: 4,
						result: {
							recover: 1,
							player(player) {
								if (player.storage.dpcqdouqishayi == undefined || player.storage.dpcqdouqishayi == 0) return 1;
								else return -1;
							},
						},
					},
				};
				lib.skill._dpcqdadoushi = {
					trigger: {
						player: 'damageBegin',
					},
					_priority: 202130,
					filter(event, player) {
						if (player.storage.douqi >= 460 + 120 * (player.storage.dpcqjingjie - 3) && player.storage.dpcqjingjie >= 3) return true;
					},
					check(event, player) {
						return true;
					},
					content() {
						player.dpcqChangeDouQi(460 + 120 * (player.storage.dpcqjingjie - 3));
						player.draw();
						var p = Math.min(player.storage.dpcqjingjie / 10, 0.7);
						if (Math.random() < p) trigger.num--;
					},
				};
				lib.skill._dpcqdouling = {
					enable: ['chooseToUse', 'chooseToRespond'],
					filter(event, player) {
						if (event.type == 'wuxie') return false;
						var hs = player.getCards('h');
						if (!hs.length) return false;
						if (player.storage.douqi < 610 + 100 * (player.storage.dpcqjingjie - 4) || player.storage.dpcqjingjie < 4 || player.dpcqdouling_used == true) return false;
						for (var i of hs) {
							if (game.checkMod(i, player, 'unchanged', 'cardEnabled2', player) === false) return false;
						}
						for (var i of lib.inpile) {
							if (i != 'du' && get.type(i) == 'basic' && event.filterCard({ name: i, cards: hs }, player, event)) {
								return true;
							}
							if (i == 'sha') {
								var list = ['fire', 'thunder', 'ice'];
								for (var j of list) {
									if (event.filterCard && event.filterCard({ name: i, nature: j, cards: hs }, player, event)) {
										return true;
									}
								}
							}
						}
						return false;
					},
					chooseButton: {
						dialog(event, player) {
							var vcards = [],
								hs = player.getCards('h');
							for (var i of lib.inpile) {
								if (i != 'du' && get.type(i) == 'basic' && event.filterCard({ name: i, cards: hs }, player, event)) vcards.push(['基本', '', i]);
								if (i == 'sha') {
									for (var j of lib.inpile_nature) {
										if (event.filterCard && event.filterCard({ name: i, nature: j, cards: hs }, player, event)) vcards.push(['基本', '', i, j]);
									}
								}
							}
							return ui.create.dialog('斗气凝物', [vcards, 'vcard']);
						},
						check(button, player) {
							if (_status.event.parent.type != 'phase') return 1;
							return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
						},
						backup(links, player) {
							return {
								audio: 'ykyueyan',
								popname: true,
								viewAs: { name: links[0][2], nature: links[0][3] },
								filterCard: true,
								selectCard: 1,
								position: 'h',
							};
						},
					},
					hiddenCard(player, name) {
						return name != 'du' && get.type(name) == 'basic' && player.countCards('h') > 0;
					},
					ai: {
						respondSha: true,
						respondShan: true,
						skillTagFilter(player) {
							return player.countCards('h') > 0;
						},
						order: 0.5,
						result: {
							player(player) {
								if (_status.event.dying) {
									return get.attitude(player, _status.event.dying);
								}
								if (_status.event.type == 'respondShan') return 1;
								return 1;
							},
						},
					},
					subSkill: {
						effect: {
							trigger: {
								player: ['useCard', 'respond'],
							},
							forced: true,
							charlotte: true,
							popup: false,
							filter(event, player) {
								if (event.skill != '_dpcqdouling_backup') return false;
								return true;
							},
							content() {
								player.dpcqChangeDouQi(-(610 + 100 * (player.storage.dpcqjingjie - 4)));
								player.dpcqdouling_used = true;
							},
						},
						backup: {},
						clear: {
							trigger: {
								player: 'roundStart',
							},
							silent: true,
							forced: true,
							charlotte: true,
							popup: false,
							filter(event, player) {
								return true;
							},
							content() {
								player.dpcqdouling_used = false;
							},
						},
					},
				};
				lib.skill._dpcqdouwang = {
					enable: 'phaseUse',
					usable: 1,
					_priority: 202130,
					filter(event, player) {
						if (player.storage.douqi >= 760 && !player.getEquip(5) && player.storage.dpcqjingjie == 5) return true;
					},
					check() {
						return true;
					},
					content() {
						player.dpcqChangeDouQi(-760);
						player.useCard(game.createCard('douqishuangyidi'), player);
					},
				};
				lib.skill._dpcqdouhuang = {
					enable: 'phaseUse',
					usable: 1,
					_priority: 202130,
					filter(event, player) {
						if (player.storage.douqi >= 910 && player.storage.dpcqjingjie == 6) return true;
					},
					check() {
						return true;
					},
					content() {
						player.dpcqChangeDouQi(-910);
						player.useCard(game.createCard('douqishuangyigao'), player);
					},
				};
				lib.skill._dpcqdouzong = {
					trigger: {
						player: ['phaseBegin'],
					},
					_priority: 202130,
					filter(event, player) {
						if (player.storage.douqi >= 1060 && player.storage.dpcqjingjie >= 7) return true;
					},
					content() {
						player.dpcqChangeDouQi(-1060);
						player.draw(2);
						lib.skill.dpcqlingtaxukong = {
							mod: {
								maxHandcard(player, num) {
									return num + 2;
								},
							},
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += 2;
							},
						};
						if (!player.hasSkill('dpcqlingtaxukong')) player.addTempSkill('dpcqlingtaxukong', { player: 'phaseBefore' });
					},
				};
				lib.skill._dpcqdouzun = {
					trigger: {
						player: 'equipBegin',
					},
					_priority: 202130,
					filter(event, player) {
						return true;
					},
					silent: true,
					forced: true,
					check() {
						return true;
					},
					content() {
						'step 0';
						event.current = player;
						('step 1');
						event.current = event.current.next;
						('step 2');
						if (event.current == player) return;
						if (player.storage.douqi < 1130 || player.storage.dpcqjingjie != 8 || player.dpcqdouzunClear == true) {
							if (event.current != player) event.goto(1);
						} else
							event.current.chooseControl(`弃置${get.translation(player.name)}的装备牌`, '不弃置', true).set('ai', function (event, player) {
								if (get.attitude(player, event.current) >= 0) return '不弃置';
								else return `弃置${get.translation(player.name)}的装备牌`;
							});
						('step 2');
						if (result.control == `弃置${get.translation(player.name)}的装备牌`) {
							trigger.cancel();
							event.current.dpcqChangeDouQi(-1130);
							event.current.dpcqdouzunClear = true;
							event.finish();
						}
						('step 3');
						if (event.current != player) event.goto(1);
					},
					subSkill: {
						clear: {
							trigger: {
								player: 'roundStart',
							},
							silent: true,
							forced: true,
							content() {
								player.dpcqdouzunClear = false;
							},
						},
					},
				};
				lib.skill._dpcqbansheng = {
					trigger: {
						player: 'equipBefore',
					},
					_priority: 202130,
					filter(event, player) {
						return true;
					},
					check() {
						return true;
					},
					silent: true,
					forced: true,
					content() {
						'step 0';
						event.current = player;
						('step 1');
						event.current = event.current.next;
						('step 2');
						if (event.current == player) return;
						if (player.storage.douqi < 1210 || player.storage.dpcqjingjie != 9 || player.dpcqbanshengClear == true) {
							if (event.current != player) event.goto(1);
						} else
							event.current.chooseControl(`获得${get.translation(player.name)}的装备牌`, '不获得', true).set('ai', function (event, player) {
								if (get.attitude(player, event.current) >= 0) return '不获得';
								else return `获得${get.translation(player.name)}的装备牌`;
							});
						('step 3');
						if (result.control == `获得${get.translation(player.name)}的装备牌`) {
							trigger.cancel();
							event.current.gain(trigger.cards, 'gain2');
							event.current.dpcqChangeDouQi(-1210);
							event.current.dpcqbanshengClear = true;
							event.finish();
						}
						('step 4');
						if (event.current != player) event.goto(1);
					},
					subSkill: {
						clear: {
							trigger: {
								player: 'roundStart',
							},
							silent: true,
							forced: true,
							content() {
								player.dpcqbanshengClear = false;
							},
						},
					},
				};
				lib.skill._dpcqdousheng2 = {
					trigger: {
						player: 'useCardEnd',
					},
					forced: true,
					filter(event, player) {
						return event.cards != undefined && (get.type(event.cards[0]) == 'delay' || get.type(event.cards[0]) == 'equip') && player.storage.douqi >= 100 && player.storage.dpcqjingjie >= 10;
					},
					content() {
						'step 0';
						event.current = player;
						('step 1');
						event.current = event.current.next;
						('step 2');
						if (event.current == player) return;
						if (player.storage.douqi < 3020 || player.storage.dpcqjingjie != 8 || player.dpcqdousheng2_time >= 4) {
							if (event.current != player) event.goto(1);
						} else
							event.current.chooseControl('复制' + get.translation(trigger.cards[0].name), '不复制', true).set('ai', function (event, player) {
								if (get.type(trigger.cards[0]) == 'equip' && get.subtype(trigger.cards[0]) == 'equip1' && !event.current.getEquip(1)) return '复制' + get.translation(trigger.cards[0].name);
								else if (get.type(trigger.cards[0]) == 'equip' && get.subtype(trigger.cards[0]) == 'equip2' && !event.current.getEquip(2)) return '复制' + get.translation(trigger.cards[0].name);
								else if (get.type(trigger.cards[0]) == 'equip' && get.subtype(trigger.cards[0]) == 'equip3' && !event.current.getEquip(3)) return '复制' + get.translation(trigger.cards[0].name);
								else if (get.type(trigger.cards[0]) == 'equip' && get.subtype(trigger.cards[0]) == 'equip4' && !event.current.getEquip(4)) return '复制' + get.translation(trigger.cards[0].name);
								else if (get.type(trigger.cards[0]) == 'equip' && get.subtype(trigger.cards[0]) == 'equip5' && !event.current.getEquip(5)) return '复制' + get.translation(trigger.cards[0].name);
								else return '不复制';
							});
						('step 3');
						if (result.control == '复制' + get.translation(trigger.cards[0].name)) {
							event.current.dpcqChangeDouQi(-3020);
							event.current.dpcqdousheng2_time++;
							var number = trigger.cards[0].number;
							var name = trigger.cards[0].name;
							event.current.gain(game.createCard(name, 'none', number), 'gain2');
							if (Math.random() <= 0.6 + 0.02 * player.storage.dpcqxing) player.draw();
						}
						('step 4');
						if (event.current != player) event.goto(1);
					},
					subSkill: {
						check: {
							trigger: {
								player: 'roundStart',
							},
							silent: true,
							forced: true,
							content() {
								player.dpcqdousheng2_time = 0;
							},
						},
					},
				};
				lib.skill._dpcqdousheng = {
					trigger: {
						player: 'phaseAfter',
					},
					forced: true,
					filter(event, player) {
						if (event.skill) return false;
						return player.storage.douqi >= 4050 && player.storage.dpcqjingjie == 10;
					},
					content() {
						'step 0';
						player.storage.douqi -= 4050;
						player
							.chooseTarget([1, Infinity], get.prompt2('dpcqdousheng'), function (card, player, target) {
								return player != target;
							})
							.set('ai', function (target) {
								var player = _status.event.player;
								var att = get.attitude(player, target);
								var nh = target.countCards('h');
								if (att < 0) {
									for (var i = 0; i < ui.selected.targets.length; i++) {
										if (get.attitude(player, ui.selected.targets[i]) < 0) return 0;
									}
									if (target.hp == 1) {
										if (nh == 0) return 2;
										if (nh == 1) return 1;
									}
								} else if (att > 0) {
									if (target.isTurnedOver()) return 2.5;
									if (target.hp == 1) {
										if (nh == 0) return 2;
										if (nh == 1) return 0.9;
										if (ui.selected.targets.length) return 0.3;
									} else if (target.hp == 2) {
										if (nh == 0) return 1.5;
										if (nh == 1) return 0.5;
										if (ui.selected.targets.length) return 0.2;
									} else if (target.hp == 3) {
										if (nh == 0) return 0.4;
										if (nh == 1) return 0.35;
										if (ui.selected.targets.length) return 0.1;
									}
									if (!target.needsToDiscard(2)) return 0.2;
									if (ui.selected.targets.length || !player.needsToDiscard(2)) return 0.05;
								}
								return 0;
							});
						('step 1');
						if (result.bool) {
							player.insertEvent('dpcqdousheng', lib.skill.dpcqdousheng.content_phase);
							player.storage.dpcqdousheng_targets = result.targets.slice(0);
						}
					},
					content_phase() {
						'step 0';
						event.list = [player].concat(player.storage.dpcqdousheng_targets);
						event.exlist = [];
						event.list.sortBySeat();
						delete player.storage.dpcqdousheng_targets;
						for (var i of game.players) {
							if (!event.list.includes(i)) {
								i.out('dpcqdousheng');
								event.exlist.push(i);
							}
						}
						('step 1');
						if (event.list.length) {
							event.list.shift().phase('dpcqdousheng');
							event.redo();
						}
						('step 2');
						for (var i = 0; i < event.exlist.length; i++) {
							event.exlist[i].in('dpcqdousheng');
						}
						player.removeSkill('dpcqdousheng');
					},
				};
				lib.skill._dpcqdoudi = {
					trigger: {
						player: 'phaseBegin',
					},
					_priority: 202130,
					filter(event, player) {
						if (player.storage.dpcqjingjie == 11) return !player.hasSkill('xuemaizhili');
					},
					forced: true,
					content() {
						player.addSkill('xuemaizhili');
					},
				};
				lib.skill.xuemaizhili = {
					init(player) {
						player.maxHp = 2 * player.maxHp;
						player.hp = 2 * player.hp;
						var friends = player.getFriends();
						if (friends.includes(player)) {
							friends.remove(player);
						}
						for (var i = 0; i < friends.length; i++) {
							if (friends[i]) {
								friends[i].maxHp = Math.round(friends[i].maxHp * 1.5);
								friends[i].hp = Math.round(friends[i].hp * 1.5);
							}
						}
					},
					trigger: {
						global: ['phaseDrawBegin', 'dieBegin'],
					},
					forced: true,
					filter(event, player) {
						if (event.name == 'phaseDraw') return event.player.getFriends().includes(event.player);
						else return evnet.player == player;
					},
					content() {
						if (trigger.name == 'phaseDraw') {
							trigger.num += 2;
							if (trigger.player == player) {
								trigger.num += trigger.num * 2;
							}
						} else {
							player.removeSkill(xuemaizhili);
						}
					},
					onremove(player) {
						var m = player.maxHp;
						player.maxHp = Math.round(m / 2);
						var n = player.hp;
						player.hp = Math.round(n / 2);
						var friends = player.getFriends();
						if (friends.includes(player)) {
							friends.remove(player);
						}
						for (var i = 0; i < friends.length; i++) {
							if (friends[i]) {
								friends[i].maxHp = Math.round(friends[i].maxHp / 1.5);
								friends[i].hp = Math.round(friends[i].hp / 1.5);
							}
						}
					},
				};
			}
			lib.skill.dpcqgold = {
				init(player) {
					player.storage.dpcqgold;
				},
				mark: true,
				marktext: '金',
				intro: {
					name: '功法属性',
					content: '已修习金属性功法,受到火属性伤害时有50%概率令此伤害+1,受到木属性伤害时有50%概率令此伤害-1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqgold') && event.nature;
				},
				content() {
					if (trigger.nature == 'fire') {
						if (Math.random() <= 0.5) {
							trigger.num++;
						}
					}
					if (trigger.nature == 'wood') {
						if (Math.random() <= 0.5) {
							trigger.num--;
						}
					}
				},
				group: ['dpcqgold_gold'],
				subSkill: {
					gold: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'gold';
						},
					},
				},
			};
			lib.skill.dpcqwood = {
				init(player) {
					player.storage.dpcqwood;
				},
				mark: true,
				marktext: '木',
				intro: {
					name: '功法属性',
					content: '已修习木属性功法,受到毒属性、金属性和火属性伤害时有50%概率令此伤害+1,受到水属性和土属性伤害时有50%概率令此伤害-1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqwood') && event.nature;
				},
				content() {
					if (trigger.nature == 'fire' || trigger.nature == 'gold' || trigger.nature == 'poison') {
						if (Math.random() <= 0.5) {
							trigger.num++;
						}
					}
					if (trigger.nature == 'water' || trigger.nature == 'soil') {
						if (Math.random() <= 0.5) {
							trigger.num--;
						}
					}
				},
				group: ['dpcqwood_wood'],
				subSkill: {
					wood: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'wood';
						},
					},
				},
			};
			lib.skill.dpcqwater = {
				init(player) {
					player.storage.dpcqwater;
				},
				mark: true,
				marktext: '水',
				intro: {
					name: '功法属性',
					content: '已修习水属性功法,受到雷属性、木属性、土属性和冰属性伤害时有20%概率令此伤害+1,受到火属性伤害时有80%概率令此伤害-1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqwater') && event.nature;
				},
				content() {
					if (trigger.nature == 'wood' || trigger.nature == 'soil' || trigger.nature == 'ice') {
						if (Math.random() <= 0.2) {
							trigger.num++;
						}
					}
					if (trigger.nature == 'wood') {
						if (Math.random() <= 0.8) {
							trigger.num--;
						}
					}
				},
				group: ['dpcqwater_water'],
				subSkill: {
					water: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'water';
						},
					},
				},
			};
			lib.skill.dpcqfire = {
				init(player) {
					player.storage.dpcqfire;
				},
				mark: true,
				marktext: '火',
				intro: {
					name: '功法属性',
					content: '已修习火属性功法,受到水属性伤害时有80%概率令此伤害+1,受到风属性、木属性、冰属性和金属性伤害时有20%概率令此伤害-1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqfire') && event.nature;
				},
				content() {
					if (trigger.nature == 'water') {
						if (Math.random() <= 0.8) {
							trigger.num++;
						}
					}
					if (trigger.nature == 'wood' || trigger.nature == 'ice' || trigger.nature == 'gold' || trigger.nature == 'wind') {
						if (Math.random() <= 0.2) {
							trigger.num--;
						}
					}
				},
				group: ['dpcqfire_fire'],
				subSkill: {
					fire: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'fire';
						},
					},
				},
			};
			lib.skill.dpcqsoil = {
				init(player) {
					player.storage.dpcqsoil;
				},
				mark: true,
				marktext: '土',
				intro: {
					name: '功法属性',
					content: '已修习土属性功法,受到木属性和风属性伤害时有25%概率令此伤害+1,受到水属性和雷属性伤害时有25%概率令此伤害-1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqsoil') && event.nature;
				},
				content() {
					if (trigger.nature == 'wood' || trigger.nature == 'wind') {
						if (Math.random() <= 0.25) {
							trigger.num++;
						}
					}
					if (trigger.nature == 'water' || trigger.nature == 'thunder') {
						if (Math.random() <= 0.25) {
							trigger.num--;
						}
					}
				},
				group: ['dpcqsoil_soil'],
				subSkill: {
					soil: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'soil';
						},
					},
				},
			};
			lib.skill.dpcqlight = {
				init(player) {
					player.storage.dpcqlight;
				},
				mark: true,
				marktext: '光',
				intro: {
					name: '功法属性',
					content: '已修习光属性功法,受到暗属性伤害时有50%概率令此伤害+1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqlight') && event.nature;
				},
				content() {
					if (trigger.nature == 'dark') {
						if (Math.random() <= 0.5) {
							trigger.num++;
						}
					}
				},
				group: ['dpcqlight_light'],
				subSkill: {
					light: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'light';
						},
					},
				},
			};
			lib.skill.dpcqdark = {
				init(player) {
					player.storage.dpcqdark;
				},
				mark: true,
				marktext: '暗',
				intro: {
					name: '功法属性',
					content: '已修习暗属性功法,受到光属性伤害时有50%概率令此伤害+1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqdark') && event.nature;
				},
				content() {
					if (trigger.nature == 'light') {
						if (Math.random() <= 0.5) {
							trigger.num++;
						}
					}
				},
				group: ['dpcqdark_dark'],
				subSkill: {
					dark: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'dark';
						},
					},
				},
			};
			lib.skill.dpcqice = {
				init(player) {
					player.storage.dpcqice;
				},
				mark: true,
				marktext: '冰',
				intro: {
					name: '功法属性',
					content: '已修习冰属性功法,受到火属性伤害时有50%概率令此伤害+1,受到水属性伤害时有50%概率令此伤害-1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqice') && event.nature;
				},
				content() {
					if (trigger.nature == 'fire') {
						if (Math.random() <= 0.5) {
							trigger.num++;
						}
					}
					if (trigger.nature == 'water') {
						if (Math.random() <= 0.5) {
							trigger.num--;
						}
					}
				},
				group: ['dpcqice_ice'],
				subSkill: {
					ice: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'ice';
						},
					},
				},
			};
			lib.skill.dpcqwind = {
				init(player) {
					player.storage.dpcqwind;
				},
				mark: true,
				marktext: '风',
				intro: {
					name: '功法属性',
					content: '已修习风属性功法,受到火属性伤害时有50%概率令此伤害+1,受到土属性伤害时有50%概率令此伤害-1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqwind') && event.nature;
				},
				content() {
					if (trigger.nature == 'fire') {
						if (Math.random() <= 0.5) {
							trigger.num++;
						}
					}
					if (trigger.nature == 'soil') {
						if (Math.random() <= 0.5) {
							trigger.num--;
						}
					}
				},
				group: ['dpcqwind_wind'],
				subSkill: {
					wind: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'wind';
						},
					},
				},
			};
			lib.skill.dpcqthunder = {
				init(player) {
					player.storage.dpcqthunder;
				},
				mark: true,
				marktext: '雷',
				intro: {
					name: '功法属性',
					content: '已修习雷属性功法,受到水属性伤害时有50%概率令此伤害+1,受到土属性伤害时有50%概率令此伤害-1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqthunder') && event.nature;
				},
				content() {
					if (trigger.nature == 'soil') {
						if (Math.random() <= 0.5) {
							trigger.num++;
						}
					}
					if (trigger.nature == 'water') {
						if (Math.random() <= 0.5) {
							trigger.num--;
						}
					}
				},
				group: ['dpcqthunder_thunder'],
				subSkill: {
					thunder: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'thunder';
						},
					},
				},
			};
			lib.skill.dpcqpoison = {
				init(player) {
					player.storage.dpcqpoison;
				},
				mark: true,
				marktext: '毒',
				intro: {
					name: '功法属性',
					content: '已修习毒属性功法,受到木属性伤害时有50%概率令此伤害+1',
				},
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				filter(event, player) {
					return event.player.hasSkill('dpcqpison') && event.nature;
				},
				content() {
					if (trigger.nature == 'wood') {
						if (Math.random() <= 0.5) {
							trigger.num++;
						}
					}
				},
				group: ['dpcqpoison_poison'],
				subSkill: {
					poison: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'damage' && event.nature == undefined) return true;
							if (event.name != 'damage') return false;
							if (event.nature != undefined) return false;
						},
						content() {
							trigger.nature = 'poison';
						},
					},
				},
			};
			var translate = {
				_dpcqtupo: '突破·境界',
				_dpcqtp: '突破·星级',
				_dpcqdouzhe: '斗气功法',
				_dpcqdoushi: '斗气纱衣',
				_dpcqdadoushi: '斗气铠甲',
				_dpcqdouling: '斗气凝物',
				_dpcqdouwang: '斗气化翼·初阶',
				_dpcqdouhuang: '斗气化翼·高阶',
				_dpcqdouzong: '凌踏虚空',
				_dpcqdouzun: '缚空间锁',
				_dpcqdousheng: '创造空间',
				_dpcqdousheng2: '开辟空间',
				_dpcqdoudi: '血脉之力',
				zhiliuxukong: '滞留虚空',
				zhiliuxukong: '滞留虚空',
				kongjianzhili: '空间之力',
				xuemaizhili: '血脉之力',
				dpcqgold: '金属性功法',
				dpcqwood: '木属性功法',
				dpcqwater: '水属性功法',
				dpcqfire: '火属性功法',
				dpcqsoil: '土属性功法',
				dpcqlight: '光属性功法',
				dpcqdark: '暗属性功法',
				dpcqice: '冰属性功法',
				dpcqwind: '风属性功法',
				dpcqthunder: '雷属性功法',
				dpcqpoison: '毒属性功法',
				yuhun: '御魂',
				_addToMyCollection: '收藏御魂',
				yuhun1: '御魂·壹号位',
				yuhun2: '御魂·贰号位',
				yuhun3: '御魂·叁号位',
				yuhun4: '御魂·肆号位',
				yuhun5: '御魂·伍号位',
				yuhun6: '御魂·陆号位',
				yysboss: 'boss技能',
				yysboss: 'boss技能',
				yysrealboss: '真·boss技能',
				yysrealboss: '真·boss技能',
				_yysbossdie: 'boss奖励',
				_yysrealbossdie: '真·boss奖励',
				bossStorelow: '御魂商店',
				bossStorelow: '御魂商店',
				bossStorehigh: '御魂商店',
				bossStorehigh: '御魂商店',
				yysjiangling: '【阴阳师】将灵',
				yysjiangling: '【阴阳师】将灵',
				BlueFire: "<body><samp id='鬼火条'><strong>鬼火条</strong></samp></body><style>#鬼火条{animation:change 15s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
				BlueFire: "<body><samp id='鬼火条'><strong>鬼火条</strong></samp></body><style>#鬼火条{animation:change 15s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
			};
			for (var i in translate) {
				lib.translate[i] = translate[i];
			}
			game.playdpcq = function (fn, dir, sex) {
				if (lib.config.background_speak) {
					if (dir && sex) game.playAudio(dir, sex, fn);
					else if (dir) game.playAudio(dir, fn);
					else game.playAudio('../extension/斗破苍穹X阴阳师/audio', fn);
				}
			};
			game.playdpcqvideo = function (name, time) {
				game.alive(`extension/斗破苍穹X阴阳师/jntx/${name}.gif`, time, true);
			};
			// ---------------------------------------更新日志------------------------------------------//
			game.dpcq_showChangeLog = function () {
				var dialog = ui.create.dialog('hidden');
				dialog.style.height = 'calc(100%)';
				dialog.style.width = 'calc(100%)';
				dialog.style.left = '0px';
				dialog.style.top = '0px';
				dialog.classList.add('popped');
				dialog.classList.add('static');
				var list_changelog = [];
				for (var i in window.dpcqchangelog) {
					list_changelog.push({
						data: i,
						info: window.dpcqchangelog[i],
					});
				}
				var interval = setInterval(function () {
					var num = 20;
					if (num > list_changelog.length) num = list_changelog.length;
					for (var i = 0; i < num; i++) {
						var data = list_changelog[0].data;
						var info = list_changelog[0].info;
						var list = [];
						var list1 = [];
						dialog.addText(data + `   (${info.version})<br>`, false);
						dialog.addText('<li>' + info.info, false);
						if (info.players.length) {
							for (var j = 0; j < info.players.length; j++) {
								if (lib.character[info.players[j]] != undefined) list.push(info.players[j]);
							}
						}
						if (list.length) dialog.addSmall([list, 'character']);
						if (info.cards.length) {
							for (var j = 0; j < info.cards.length; j++) {
								if (lib.card[info.cards[j]] != undefined) list1.push(info.cards[j]);
							}
						}
						if (list1.length) dialog.addSmall([list1, 'vcard']);
						list_changelog.remove(list_changelog[0]);
						if (list_changelog.length == 0) {
							clearInterval(interval);
						}
					}
				}, 100);
				ui.window.appendChild(dialog);
				var div = ui.create.div('.menubutton.round', '×', function () {
					clearInterval(interval);
					dialog.delete();
					ui.window.removeChild(this);
				});
				div.style.top = '5px';
				div.style.left = 'calc(100% - 55px)';
				div.style.zIndex = 1000;
				ui.window.appendChild(div);
			};
			lib.init.js('extension/斗破苍穹X阴阳师', 'update', function () { });
			game.alive = function (name, time, arena) {
				if (arena) {
					ui.arena.hide();
				}
				game.addVideo('playerfocus2');
				game.broadcastAll(function () {
					ui.arena.classList.add('playerfocus');
					setTimeout(function () {
						ui.arena.classList.remove('playerfocus');
					}, time * 1000);
				});
				ui.background.style.filter = '';
				ui.background.style.webkitFilter = '';
				ui.background.style.transform = '';
				ui.background.setBackgroundImage(name);
				setTimeout(function () {
					if (lib.config.image_background_blur) {
						ui.background.style.filter = 'blur(8px)';
						ui.background.style.webkitFilter = 'blur(8px)';
						ui.background.style.transform = 'scale(1.05)';
					}
					ui.arena.show();
					ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
				}, time * 1000);
			};
			// ---------------------------------------指示线------------------------------------------//
			//原本是参考祖安武将里的,测试后发现有问题,改为参考玄武江湖,星城大佬yyds!\(^o^)/~
			var dpcqLineAnim = {
				time: 1200,
				position: 'screen',
				width: '256px',
				height: '128px',
				backgroundSize: '100% 100%',
				opacity: 1,
				show: 'none',
				fade: true,
				pause: false,
				rate_zhen: 18,
				jump_zhen: false,
				qianzhui: '',
				liang: false,
				isLine: true,
				cycle: true,
				style: {},
				skills: [],
				cards: [],
				forbid: false,
				image: 'hudielinexy',
			};
			game.dpcqPlayLineAnimation = function (name, node, fake, points) {
				var animation = dpcqLineAnim;
				animation.image = name;
				if (lib.config.dpcqGuideTime) {
					animation.time = parseInt(lib.config.dpcqGuideTime);
				}
				if (animation == undefined) return;
				if (animation.time <= 100000) {
					if (animation.pause != false && !_status.paused2 && !_status.nopause) {
						_status.dpcqyys_onAnimationPause = true;
						game.pause2();
					}
					if (_status.dpcqyys_onAnimation == undefined) _status.dpcqyys_onAnimation = 0;
					_status.dpcqyys_onAnimation++;
				}
				var src;
				if (animation.image != undefined) src = `extension/斗破苍穹X阴阳师/jntx/${animation.image}?` + new Date().getTime();
				var finish = function () {
					var animationID;
					var timeoutID;
					var interval;
					var div = ui.create.div();
					if (fake == true) {
						ui.window.appendChild(div);
					} else {
						if (node == undefined || node == false) {
							ui.window.appendChild(div);
						} else {
							node.appendChild(div);
						}
					}
					if (animation.style != undefined) {
						for (var i in animation.style) {
							if (i == 'innerHTML') continue;
							div.style[i] = animation.style[i];
						}
					}
					var judgeStyle = function (style) {
						if (animation.style == undefined) return false;
						if (animation.style != undefined && animation.style[style] != undefined) return true;
						return false;
					};
					if (judgeStyle('innerHTML')) div.innerHTML = animation.style.innerHTML;
					if (judgeStyle('width') == false) div.style.width = animation.width;
					if (judgeStyle('height') == false) div.style.height = animation.height;
					if (judgeStyle('backgroundSize') == false && judgeStyle('background-size') == false) div.style.backgroundSize = animation.backgroundSize;
					if (judgeStyle('opacity') == false) div.style.opacity = animation.opacity;
					if (judgeStyle('zIndex') == false && judgeStyle('z-index') == false) div.style.zIndex = 1001;
					if (judgeStyle('borderRadius') == false && judgeStyle('border-radius') == false) div.style.borderRadius = '5px';
					if (judgeStyle('pointer-events') == false && judgeStyle('pointerEvents') == false) div.style['pointer-events'] = 'none';
					if (src != undefined) {
						if (animation.image.includes('.')) {
							div.setBackgroundImage(src);
						} else {
							var type_frame1 = 0;
							var type_frame = '.jpg';
							var num_frame = 1;
							type_frame = '.png';
							num_frame = 8;
							var folder_frame = `extension/斗破苍穹X阴阳师/jntx/${animation.image}/`;
							var div1 = ui.create.div();
							div1.style.height = '100%';
							div1.style.width = '100%';
							div1.style.top = '0px';
							div1.style.left = '0px';
							div.appendChild(div1);
							var canvas = document.createElement('canvas');
							canvas.width = div1.offsetWidth;
							canvas.height = div1.offsetHeight;
							div1.appendChild(canvas);
							var context = canvas.getContext('2d');
							var start;
							var imgs = [];
							var imgs_num = 0;
							for (var i = 0; i < num_frame; i++) {
								var img = new Image();
								img.src = folder_frame + (animation.qianzhui == undefined ? '' : animation.qianzhui) + (animation.liang == true ? (i < 10 ? '0' + i : i) : i) + type_frame;
								if (i >= num_frame - 1) img.dpcqyys_final = true;
								img.onload = function () {
									imgs.push(this);
									if (this.dpcqyys_final == true) start();
								};
								img.onerror = function () {
									if (this.dpcqyys_final == true) start();
								};
							}
							start = function () {
								var play = function () {
									if (imgs_num >= imgs.length) return;
									var img = imgs[imgs_num];
									context.clearRect(0, 0, img.width, img.height);
									context.drawImage(img, 0, 0, img.width, img.height, 0, 0, div1.offsetWidth, div1.offsetHeight);
									imgs_num++;
									if (animation.jump_zhen == true && imgs[imgs_num + 1] != undefined) imgs.remove(imgs_num + 1);
									if (imgs_num >= imgs.length) {
										if (animation.cycle == true) {
											imgs_num = 0;
										} else {
											if (interval != undefined) clearInterval(interval);
											if (timeoutID != undefined) clearTimeout(timeoutID);
											if (animationID != undefined) cancelAnimationFrame(animationID);
										}
									}
								};
								interval = setInterval(play, animation.rate_zhen == undefined ? 45 : 1000 / animation.rate_zhen);
							};
						}
					}
					if (points == undefined) {
						if (fake == true) {
							div.style.top = top - div.offsetHeight / 2 + 'px';
							div.style.left = left - div.offsetWidth / 2 + 'px';
						} else {
							if (judgeStyle('top') == false) div.style.top = `calc(50% - ${div.offsetHeight / 2}px)`;
							if (judgeStyle('left') == false) div.style.left = `calc(50% - ${div.offsetWidth / 2}px)`;
						}
					} else {
						div.style.top = points[0][1] - div.offsetHeight / 2 + 'px';
						div.style.left = points[0][0] + 'px';
					}
					if (points != undefined) {
						var timeS = (animation.fade == true ? animation.time - 450 : animation.time - 100) / 1000 / 2;
						var getAngle = function (x1, y1, x2, y2, bool) {
							var x = x1 - x2;
							var y = y1 - y2;
							var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
							var cos = y / z;
							var radina = Math.acos(cos);
							var angle = 180 / (Math.PI / radina);
							if (x2 > x1 && y2 === y1) angle = 0;
							if (x2 > x1 && y2 < y1) angle = angle - 90;
							if (x2 === x1 && y1 > y2) angle = -90;
							if (x2 < x1 && y2 < y1) angle = 270 - angle;
							if (x2 < x1 && y2 === y1) angle = 180;
							if (x2 < x1 && y2 > y1) angle = 270 - angle;
							if (x2 === x1 && y2 > y1) angle = 90;
							if (x2 > x1 && y2 > y1) angle = angle - 90;
							if (bool == true && angle > 90) angle -= 180;
							return angle;
						};
						var p1 = points[0];
						var p2 = points[1];
						var x0 = p1[0];
						var y0 = p1[1];
						var x1 = p2[0];
						var y1 = p2[1];
						div.style.transition = 'all 0s';
						div.style.transform = `rotate(${getAngle(x0, y0, x1, y1, true)}deg)` + (x0 > x1 ? '' : ' rotateY(180deg)');
						div.style['transform-origin'] = '0 50%';
						var div2 = ui.create.div();
						div2.style.zIndex = 1000;
						div2.style['pointer-events'] = 'none';
						div2.style.height = '20px';
						div2.style.width = Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2 + 'px';
						div2.style.left = x0 + 'px';
						div2.style.top = y0 - 10 + 'px';
						div2.style.transform = `rotate(${getAngle(x0, y0, x1, y1)}deg) scaleX(0)`;
						div2.style['transform-origin'] = '0 50%';
						div2.style.transition = `all ${(timeS * 4) / 3}s`;
						if (src != undefined && animation.image.indexOf('.') == -1) {
							div2.style.backgroundSize = '100% 100%';
							div2.setBackgroundImage(`extension/斗破苍穹X阴阳师/jntx/${animation.image}/line.png`);
						} else {
							div2.style.background = '#ffffff';
						}
						setTimeout(function () {
							div.style.transition = `all ${(timeS * 4) / 3}s`;
							div.style.transform += ` translateX(${-(Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2)}px)`;
							div2.style.transform = `rotate(${getAngle(x0, y0, x1, y1)}deg) scaleX(1)`;
						}, 50);
						setTimeout(
							function () {
								div2.style.transition = `all ${(timeS * 2) / 3}s`;
								div2.style.transform = `rotate(${getAngle(x0, y0, x1, y1)}deg) translateX(` + (Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5) + 2 - Math.pow(Math.pow(div.offsetHeight / 2, 2) + Math.pow(div.offsetWidth / 2, 2), 0.5)) + 'px) scaleX(0.01)';
							},
							50 + ((timeS * 4) / 3) * 1000
						);
						node.appendChild(div2);
					}
					if (animation.time <= 100000) {
						if (animation.fade == true) {
							if (div2 != undefined) {
								setTimeout(function () {
									div2.hide();
								}, animation.time - 350);
								setTimeout(function () {
									div.hide();
								}, animation.time - 400);
							} else {
								setTimeout(function () {
									div.hide();
								}, animation.time - 350);
							}
						}
						setTimeout(function () {
							if (interval != undefined) clearInterval(interval);
							if (timeoutID != undefined) clearTimeout(timeoutID);
							if (animationID != undefined) cancelAnimationFrame(animationID);
							if (fake == true) {
								ui.window.removeChild(div);
							} else {
								if (node == undefined || node == false) {
									ui.window.removeChild(div);
								} else {
									node.removeChild(div);
								}
							}
							if (div2 != undefined) node.removeChild(div2);
							_status.dpcqyys_onAnimation--;
							if (_status.dpcqyys_onAnimationPause == true && _status.dpcqyys_onAnimation == 0) {
								delete _status.dpcqyys_onAnimationPause;
								game.resume2();
							}
						}, animation.time);
					}
				};
				if (animation.delay != undefined) {
					setTimeout(finish, animation.delay);
				} else {
					finish();
				}
			};
			game.qxq_yys_buzhihuo = function (path) {
				var from = [path[0], path[1]];
				var to = [path[2], path[3]];
				if (game.chess) {
					game.dpcqPlayLineAnimation('hudielinexy', ui.chess, false, [from, to]);
				} else {
					game.dpcqPlayLineAnimation('hudielinexy', ui.arena, false, [from, to]);
				}
			};
			game.linexy = game.qxq_yys_buzhihuo;
			// ---------------------------------------阴阳师------------------------------------------//
			get.is.node = function (_0x57cfx1) {
				var _0x57cfx2 = Object.prototype.toString.call(_0x57cfx1);
				if (_0x57cfx2 && _0x57cfx2.indexOf('[object HTML') === 0) {
					return true;
				}
				return false;
			};
			if (config.qxq_bossbqds) {
				lib.skill._bossnum = {
					trigger: {
						global: 'gameStart',
					},
					forced: true,
					silent: true,
					_priority: Infinity,
					content() {
						lib.config.bossnum = 0;
						game.saveConfig('bossnum', lib.config.bossnum);
					},
				};
				lib.skill._qxqbqds = {
					trigger: {
						player: 'phaseZhunbeiBefore',
					},
					forced: true,
					silent: true,
					filter(event, player) {
						if (get.mode() == 'identity' && lib.config.bossnum == 0) return true;
					},
					_priority: 202130,
					content() {
						'step 0';
						var list = [];
						for (var i of game.players) {
							list.push(i.name);
						}
						if (list.includes('qxq_yys_bossbqds')) return;
						('step 1');
						if (Math.random() <= 0.1) {
							lib.config.bossnum = 1;
							game.saveConfig('bossnum', lib.config.bossnum);
							event.goto(2);
						} else {
							event.goto(3);
						}
						('step 2');
						var ps = [];
						for (var i of game.players) {
							ps.push(i);
						}
						var pl = ps.randomGet();
						player.$fullscreenpop('<font color=red>八岐大蛇出现!</font>');
						var player2 = game.addPlayer('qxq_yys_bossbqds');
						player2.init('qxq_yys_bossbqds');
						player2.maxHp = 10;
						player2.hp = 10;
						player2.group = 'shen';
						player2.identity = ['zhong', 'fan', 'nei'].randomGet();
						player2.setIdentity('蛇');
						player2.identityShown = true;
						player2.draw(5);
						for (var i of game.players) {
							i.dataset.position = [i];
						}
						('step 3');
						event.finish();
					},
				};
				var yhdate1 = ['yhmeiyao', 'yhzhenmushou'];
				game.saveExtensionConfig('斗破苍穹X阴阳师', 'yhdate1', yhdate1);
				var yhdate2 = ['yhzhaocaimao', 'yhfanhunxiang'];
				game.saveExtensionConfig('斗破苍穹X阴阳师', 'yhdate2', yhdate2);
				var yhdate3 = ['yhshanghunniao', 'yhmumei'];
				game.saveExtensionConfig('斗破苍穹X阴阳师', 'yhdate3', yhdate3);
				var yhdate4 = ['yhdizangxiang', 'yhzheng'];
				game.saveExtensionConfig('斗破苍穹X阴阳师', 'yhdate4', yhdate4);
				var yhdate5 = ['yhkuanggu'];
				game.saveExtensionConfig('斗破苍穹X阴阳师', 'yhdate5', yhdate5);
				var yhdate6 = ['yhshanghunniao', 'yhzhaocaimao', 'yhdizangxiang', 'yhzheng', 'yhmeiyao', 'yhfanhunxiang', 'yhkuanggu', 'yhzhenmushou', 'yhmumei'];
				game.saveExtensionConfig('斗破苍穹X阴阳师', 'yhdate6', yhdate6);
				var yhdate0 = ['yhshanghunniao', 'yhzhaocaimao', 'yhdizangxiang', 'yhzheng', 'yhmeiyao', 'yhfanhunxiang', 'yhkuanggu', 'yhzhenmushou', 'yhmumei'];
				game.saveExtensionConfig('斗破苍穹X阴阳师', 'yhdate0', yhdate0);
				lib.skill._yysbossdie = {
					trigger: {
						global: ['dieBefore', 'damageEnd'],
					},
					forced: true,
					silent: true,
					_priority: 202130,
					filter(event, player) {
						return event.player.name == 'qxq_yys_bossbqds';
					},
					content() {
						'step 0';
						delete player.node.MaxHp;
						delete player.node.Hp;
						('step 1');
						if (trigger.name == 'damage') {
							if (trigger.source && trigger.source != undefined && !trigger.source.hasSkill('bossrewardstorage')) {
								trigger.source.addSkill('bossrewardstorage');
							} else {
								if (trigger.source && trigger.source != undefined) {
									trigger.source.storage.bossrewardstorage++;
								}
							}
							event.goto(4);
						} else {
							event.goto(2);
						}
						('step 2');
						trigger.player.identity = 'nei';
						var victory = [];
						for (var i of game.players) {
							if (i.hasSkill('bossrewardstorage')) {
								var yhdate = 'yhdate' + new Date().getDay();
								var yhdate = game.getExtensionConfig('斗破苍穹X阴阳师', yhdate);
								var yh = yhdate.randomGet();
								if (yh == 'yhshanghunniao') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									if (r <= 1 && r > 0.75) {
										var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 1), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 2), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 3), 'gain2');
										}
									}
								}
								if (yh == 'yhdizangxiang') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									if (r <= 1 && r > 0.75) {
										var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 1), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 2), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 3), 'gain2');
										}
									}
								}
								if (yh == 'yhzhaocaimao') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 1), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 2), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 3), 'gain2');
										}
									}
								}
								if (yh == 'yhzheng') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
										i.gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
										i.gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 1), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 2), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 3), 'gain2');
										}
									}
								}
								if (yh == 'yhmeiyao') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 1), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 2), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 3), 'gain2');
										}
									}
								}
								if (yh == 'yhfanhunxiang') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
										i.gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
										i.gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 1), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 2), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 3), 'gain2');
										}
									}
								}
								if (yh == 'yhkuanggu') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
										i.gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
										i.gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 1), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 2), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 3), 'gain2');
										}
									}
								}
								if (yh == 'yhzhenmushou') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
										i.gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
										i.gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 1), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 2), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 3), 'gain2');
										}
									}
								}
								if (yh == 'yhmumei') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
										i.gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
										i.gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 1), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 2), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 3), 'gain2');
										}
									}
								}
								victory.push(i);
							}
						}
						trigger.player.storage.reward = victory;
						var g = 0;
						for (var i of game.players) {
							if (i.hasSkill('bossrewardstorage')) {
								g++;
							}
						}
						if (g > 0) {
							var mvp = [];
							var d = 0;
							for (var i = 0; i < victory.length; i++) {
								if (victory[i].hasSkill('bossrewardstorage') && d <= victory[i].countMark('bossrewardstorage')) {
									d = victory[i].countMark('bossrewardstorage');
									if (mvp.length) {
										mvp.remove(mvp[0]);
									}
									mvp.push(victory[i]);
								}
							}
						}
						if (g > 0 && mvp.length == 1) {
							var yhdate = 'yhdate' + new Date().getDay();
							var yhdate = game.getExtensionConfig('斗破苍穹X阴阳师', yhdate);
							var yh = yhdate.randomGet();
							if (yh == 'yhshanghunniao') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
								}
								if (r <= 1 && r > 0.75) {
									var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
									}
								}
							}
							if (yh == 'yhdizangxiang') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
								}
								if (r <= 1 && r > 0.75) {
									var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
									}
								}
							}
							if (yh == 'yhzhaocaimao') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
									}
								}
							}
							if (yh == 'yhzheng') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
									}
								}
							}
							if (yh == 'yhmeiyao') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
									}
								}
							}
							if (yh == 'yhfanhunxiang') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
									}
								}
							}
							if (yh == 'yhkuanggu') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
									}
								}
							}
							if (yh == 'yhzhenmushou') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
									}
								}
							}
							if (yh == 'yhmumei') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 1), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 2), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
									}
								}
							}
						}
						('step 3');
						if (Math.random() <= 0.1) {
							player.$fullscreenpop('<font color=red>真·八岐大蛇出现!</font>');
							trigger.cancel();
							lib.config.bossnum = 2;
							game.saveConfig('bossnum', lib.config.bossnum);
							trigger.player.init('qxq_yys_bosszbqds');
							game.dpcqMarkHp(trigger.player);
							trigger.player.addSkill('bossidentity');
							for (var i of game.players) {
								if (i.hasSkill('bossrewardstorage')) {
									i.removeSkill('bossrewardstorage');
								}
							}
						} else {
							lib.config.bossnum = 0;
							game.saveConfig('bossnum', lib.config.bossnum);
							for (var i of game.players) {
								if (i.hasSkill('bossrewardstorage')) {
									i.removeSkill('bossrewardstorage');
								}
							}
						}
						if (lib.config.bossnum == 0 && trigger.player.storage.reward.length && Math.random() <= 0.25) {
							trigger.player.useSkill('bossStorelow', player.storage.reward);
						}
						game.removePlayer(trigger.player);
						('step 4');
					},
					ai: {
						order: 10,
						result: {
							player: 1,
						},
					},
				};
				lib.skill.bossrewardstorage = {
					init(player) {
						player.storage.bossrewardstorage = 1;
					},
					mark: false,
				};
				lib.skill._yysrealbossdie = {
					trigger: {
						player: ['dieBefore', 'damageEnd'],
					},
					forced: true,
					silent: true,
					_priority: 202130,
					filter(event, player) {
						return event.player.name == 'qxq_yys_bosszbqds';
					},
					content() {
						'step 0';
						if (trigger.name == 'damage') {
							if (trigger.source && trigger.source != undefined && !trigger.source.hasSkill('bossrealrewardstorage')) {
								trigger.source.addSkill('bossrealrewardstorage');
							} else {
								if (trigger.source && trigger.source != undefined) {
									trigger.source.storage.bossrealrewardstorage++;
								}
							}
							event.goto(4);
						} else {
							var partner = [];
							for (var i of game.players) {
								if (i.hasSkill('bossrealrewardstorage')) {
									partner.push(i);
								}
							}
							if (lib.config.bossnum == 0) {
								if (trigger.source && trigger.source != undefined) {
									game.log(trigger.source, '完成了对【boss·真·八岐大蛇】的击杀,所有挑战者(', partner, ')均获得大量奖励!');
								} else {
									game.log('【boss·真·八岐大蛇】已被击杀,所有挑战者(', partner, ')均获得大量奖励!');
								}
								trigger.player.addSkill('yuhuntime');
								event.goto(2);
							} else {
								event.goto(4);
							}
						}
						('step 1');
						('step 2');
						trigger.player.identity = 'nei';
						var victory = [];
						for (var i of game.players) {
							if (i.hasSkill('bossrealrewardstorage')) {
								var yhdate = 'yhdate' + new Date().getDay();
								var yhdate = game.getExtensionConfig('斗破苍穹X阴阳师', yhdate);
								var yh = yhdate.randomGet();
								if (yh == 'yhshanghunniao') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 4), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (r <= 1 && r > 0.75) {
										var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 5), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 4), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 5), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
								}
								if (yh == 'yhdizangxiang') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 4), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (r <= 1 && r > 0.75) {
										var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										i.gain(game.createCard(yuhun, color, 5), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 4), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 5), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
								}
								if (yh == 'yhzhaocaimao') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 4), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 5), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 4), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 5), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
								}
								if (yh == 'yhzheng') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
										i.gain(game.createCard(yuhun, color, 4), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
										i.gain(game.createCard(yuhun, color, 5), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 4), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 5), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
								}
								if (yh == 'yhmeiyao') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 4), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
										i.gain(game.createCard(yuhun, color, 5), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 4), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 5), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
								}
								if (yh == 'yhfanhunxiang') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
										i.gain(game.createCard(yuhun, color, 4), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
										i.gain(game.createCard(yuhun, color, 5), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 4), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 5), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
								}
								if (yh == 'yhkuanggu') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
										i.gain(game.createCard(yuhun, color, 4), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
										i.gain(game.createCard(yuhun, color, 5), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 4), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 5), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
								}
								if (yh == 'yhzhenmushou') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
										i.gain(game.createCard(yuhun, color, 4), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
										i.gain(game.createCard(yuhun, color, 5), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 4), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 5), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
								}
								if (yh == 'yhmumei') {
									var r = Math.random();
									if (r <= 0.45 && r >= 0) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
										i.gain(game.createCard(yuhun, color, 3), 'gain2');
									}
									if (r > 0.45 && r <= 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
										i.gain(game.createCard(yuhun, color, 4), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (r <= 1 && r > 0.75) {
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
										i.gain(game.createCard(yuhun, color, 5), 'gain2');
										var r = Math.random();
										if (r > 0.9) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
									if (i.hasSkill('yh_Buff')) {
										var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
										var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
										var x = Math.random();
										if (x <= 0.85) {
											i.gain(game.createCard(yuhun, color, 4), 'gain2');
										}
										var y = Math.random();
										if (y <= 0.65) {
											i.gain(game.createCard(yuhun, color, 5), 'gain2');
										}
										var z = Math.random();
										if (z <= 0.45) {
											i.gain(game.createCard(yuhun, color, 6), 'gain2');
										}
									}
								}
								victory.push(i);
							}
						}
						trigger.player.storage.realreward = victory;
						var g = 0;
						for (var i of game.players) {
							if (i.hasSkill('bossrewardstorage')) {
								g++;
							}
						}
						if (g > 0) {
							var mvp = [];
							var d = 0;
							for (var i = 0; i < victory.length; i++) {
								if (victory[i].hasSkill('bossrealrewardstorage') && d <= victory[i].countMark('bossrealrewardstorage')) {
									d = victory[i].countMark('bossrealrewardstorage');
									if (mvp.length) {
										mvp.remove(mvp[0]);
									}
									mvp.push(victory[i]);
								}
							}
						}
						if (g > 0 && mvp.length == 1) {
							var yhdate = 'yhdate' + new Date().getDay();
							var yhdate = game.getExtensionConfig('斗破苍穹X阴阳师', yhdate);
							var yh = yhdate.randomGet();
							if (yh == 'yhshanghunniao') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (r <= 1 && r > 0.75) {
									var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhshanghunniaoA', 'yhshanghunniaoB', 'yhshanghunniaoC', 'yhshanghunniaoD', 'yhshanghunniaoE', 'yhshanghunniaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
							}
							if (yh == 'yhdizangxiang') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (r <= 1 && r > 0.75) {
									var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhdizangxiangA', 'yhdizangxiangB', 'yhdizangxiangC', 'yhdizangxiangD', 'yhdizangxiangE', 'yhdizangxiangF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
							}
							if (yh == 'yhzhaocaimao') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhzhaocaimaoA', 'yhzhaocaimaoB', 'yhzhaocaimaoC', 'yhzhaocaimaoD', 'yhzhaocaimaoE', 'yhzhaocaimaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
							}
							if (yh == 'yhzheng') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhzhengA', 'yhzhengB', 'yhzhengC', 'yhzhengD', 'yhzhengE', 'yhzhengF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
							}
							if (yh == 'yhmeiyao') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhmeiyaoA', 'yhmeiyaoB', 'yhmeiyaoC', 'yhmeiyaoD', 'yhmeiyaoE', 'yhmeiyaoF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
							}
							if (yh == 'yhfanhunxiang') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhfanhunxiangA', 'yhfanhunxiangB', 'yhfanhunxiangC', 'yhfanhunxiangD', 'yhfanhunxiangE', 'yhfanhunxiangF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
							}
							if (yh == 'yhkuanggu') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhkuangguA', 'yhkuangguB', 'yhkuangguC', 'yhkuangguD', 'yhkuangguE', 'yhkuangguF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
							}
							if (yh == 'yhzhenmushou') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhzhenmushouA', 'yhzhenmushouB', 'yhzhenmushouC', 'yhzhenmushouD', 'yhzhenmushouE', 'yhzhenmushouF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
							}
							if (yh == 'yhmumei') {
								var r = Math.random();
								if (r <= 0.45 && r >= 0) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 3), 'gain2');
								}
								if (r > 0.45 && r <= 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (r <= 1 && r > 0.75) {
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
									mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									var r = Math.random();
									if (r > 0.9) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
								if (mvp[0].hasSkill('yh_Buff')) {
									var yuhun = ['yhmumeiA', 'yhmumeiB', 'yhmumeiC', 'yhmumeiD', 'yhmumeiE', 'yhmumeiF'].randomGet();
									var color = ['heart', 'diamond', 'club', 'spade'].randomGet();
									var x = Math.random();
									if (x <= 0.95) {
										mvp[0].gain(game.createCard(yuhun, color, 4), 'gain2');
									}
									var y = Math.random();
									if (y <= 0.75) {
										mvp[0].gain(game.createCard(yuhun, color, 5), 'gain2');
									}
									var z = Math.random();
									if (z <= 0.55) {
										mvp[0].gain(game.createCard(yuhun, color, 6), 'gain2');
									}
								}
							}
						}
						('step 3');
						if (trigger.player.storage.yuhuntime > 0) {
							trigger.player.storage.yuhuntime--;
							event.goto(2);
						} else {
							trigger.player.removeSkill('yuhuntime');
						}
						for (var i of game.players) {
							if (i.hasSkill('bossrealrewardstorage')) {
								i.removeSkill('bossrealrewardstorage');
							}
						}
						('step 4');
						if (trigger.name == 'die') {
							lib.config.bossnum--;
							game.saveConfig('bossnum', lib.config.bossnum);
						}
						if (trigger.name == 'die' && lib.config.bossnum == 0) {
							if (trigger.player.storage.realreward.length && Math.random() <= 0.35) {
								trigger.player.useSkill('bossStorehigh', victory);
							}
							game.removePlayer(trigger.player);
						}
					},
					subSkill: {
						storage: {},
					},
				};
				lib.skill.bossrealrewardstorage = {
					init(player) {
						player.storage.bossrealrewardstorage = 1;
					},
					mark: false,
				};
			}
			if (config.qxq_yuhunBuffTIME) {
				lib.skill._yuhunBuffTIME = {
					trigger: {
						global: 'gameStart',
					},
					nobracket: true,
					forced: true,
					silent: true,
					filter(event, player) {
						return player == game.me;
					},
					_priority: 999,
					content() {
						if (player == game.me) {
							player.addSkill('yh_Buff');
							player.storage._yuhunBuffTIME;
							player.storage.BuffTIMEseconds = 1;
							if (lib.config.BuffTIMEminutes != undefined) {
								var min = lib.config.BuffTIMEminutes;
								player.storage.BuffTIMEminutes = min;
							} else {
								player.storage.BuffTIMEminutes = 0;
							}
							if (lib.config.BuffTIMEhours != undefined) {
								var h = lib.config.BuffTIMEhours;
								player.storage.BuffTIMEhours = h;
							} else {
								player.storage.BuffTIMEhours = 0;
							}
						}
						game.broadcastAll(function (player) {
							player.storage.BuffTIMEseconds = 1;
							var interval = setInterval(function () {
								player.storage.BuffTIMEseconds--;
								if (player.storage.BuffTIMEseconds == 0 && lib.config.BuffTIMEminutes > 0) {
									player.storage.BuffTIMEseconds = 60;
									player.storage.BuffTIMEminutes--;
									lib.config.BuffTIMEminutes--;
									game.saveConfig('BuffTIMEminutes', lib.config.BuffTIMEminutes);
								}
								if (player.storage.BuffTIMEminutes == 0 && lib.config.BuffTIMEhours > 0) {
									player.storage.BuffTIMEminutes = 60;
									player.storage.BuffTIMEhours--;
									lib.config.BuffTIMEhours--;
									game.saveConfig('BuffTIMEhours', lib.config.BuffTIMEhours);
								}
								if (player.storage.BuffTIMEseconds == 0 && (player.storage.BuffTIMEminutes == 0 || player.storage.BuffTIMEminutes == undefined) && (player.storage.BuffTIMEhours == 0 || player.storage.BuffTIMEhours == undefined)) {
									game.log('御魂掉落加成时间已耗尽');
									player.removeSkill('yh_Buff');
									clearInterval(interval);
								}
							}, 1000);
						}, player);
					},
				};
			}
			lib.skill.yh_Buff = {
				init(player) {
					player.storage.yh_Buff;
				},
				mark: true,
				marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yuhunBuff.jpg>`,
				intro: {
					name: '御魂掉落加成',
					content(storage, player) {
						if (player == game.me) {
							var str = '当前击杀boss·八岐大蛇/boss·真·八岐大蛇后,获得更多御魂!<br>当前Buff剩余时间:';
							if (player.storage.BuffTIMEhours && player.storage.BuffTIMEhours > 0) {
								if (player.storage.BuffTIMEhours >= 10) {
									str += `<br>${player.storage.BuffTIMEhours}时`;
								} else {
									str += `<br>0${player.storage.BuffTIMEhours}时`;
								}
							} else {
								str += '<br>00时';
							}
							if (player.storage.BuffTIMEminutes && player.storage.BuffTIMEminutes > 0) {
								if (player.storage.BuffTIMEminutes >= 10) {
									str += player.storage.BuffTIMEminutes + '分';
								} else {
									str += `0${player.storage.BuffTIMEminutes}分`;
								}
							} else {
								str += '00分';
							}
							if (player.storage.BuffTIMEseconds && player.storage.BuffTIMEseconds > 0) {
								if (player.storage.BuffTIMEseconds >= 10) {
									str += player.storage.BuffTIMEseconds + '秒';
								} else {
									str += `0${player.storage.BuffTIMEseconds}秒`;
								}
							} else {
								str += '00秒';
							}
							return str;
						}
					},
				},
				onremove(player) {
					if (player.storage.BuffTIMEseconds == 0 && (player.storage.BuffTIMEminutes == 0 || player.storage.BuffTIMEminutes == undefined) && (player.storage.BuffTIMEhours == 0 || player.storage.BuffTIMEhours == undefined)) {
						game.log('御魂掉落加成已移除');
					} else {
						player.addSkill('yh_Buff');
					}
				},
			};
			lib.skill.bossStorelow = {
				trigger: {
					player: 'dieBegin',
				},
				forced: true,
				filter(event, player) {
					return lib.config.bossnum == 0;
				},
				filterTarget(event, player) {
					return target.hasSkill('bossrewardstorage');
				},
				selectTarget: -1,
				_priority: Infinity,
				contentBefore() {
					'step 0';
					if (get.is.versus()) {
						player
							.chooseControl('顺时针', '逆时针', function (event, player) {
								if (player.next.side == player.side) return '逆时针';
								return '顺时针';
							})
							.set('prompt', `选择${get.translation(card)}的结算方向`);
					} else {
						event.goto(3);
					}
					('step 1');
					if (result && result.control == '顺时针') {
						var evt = event.parent;
						evt.fixedSeat = true;
						evt.targets.sortBySeat();
						evt.targets.reverse();
						if (evt.targets[evt.targets.length - 1] == player) {
							evt.targets.unshift(evt.targets.pop());
						}
					}
					('step 2');
					ui.clear();
					var list = [];
					for (var i = 0; i < game.countPlayer() / 2; i++) {
						var yh = ['yhshanghunniao', 'yhzhaocaimao', 'yhdizangxiang', 'yhzheng', 'yhmeiyao', 'yhfanhunxiang', 'yhkuanggu', 'yhzhenmushou', 'yhmumei'].randomGet();
						var st = ['A', 'B', 'C', 'D', 'E', 'F'].randomGet();
						var str = '';
						str += yh;
						str += st;
						var color = ['heart', 'diamond', 'club', 'spade'];
						var num = get.rand(1, 2);
						var yuhun = game.createCard(str, color, num);
						list.push(yuhun);
					}
					var dialog = ui.create.dialog('御魂商店', list, true);
					_status.dieClose.push(dialog);
					dialog.videoId = lib.status.videoId++;
					game.addVideo('cardDialog', null, ['御魂商店', get.cardsInfo(cards), dialog.videoId]);
					event.parent.preResult = dialog.videoId;
				},
				content() {
					'step 0';
					for (var i = 0; i < ui.dialogs.length; i++) {
						if (ui.dialogs[i].videoId == event.preResult) {
							event.dialog = ui.dialogs[i];
							break;
						}
					}
					if (!event.dialog || !target.countCards('h')) {
						event.finish();
						return;
					}
					var minValue = 20;
					var hs = target.getCards('h');
					for (var i = 0; i < hs.length; i++) {
						minValue = Math.min(minValue, get.value(hs[i], target));
					}
					if (target.isUnderControl(true)) {
						event.dialog.setCaption('选择一御魂并用一御魂替换之');
					}
					var next = target.chooseButton(function (button) {
						return get.value(button.link, _status.event.player) - minValue;
					});
					next.set('dialog', event.preResult);
					next.set('closeDialog', false);
					next.set('dialogdisplay', true);
					('step 1');
					event.dialog.setCaption('御魂商店');
					if (result.bool) {
						event.button = result.buttons[0];
						var yh = target.getCards('h', { type: 'yuhun' });
						if (yh.length) {
							target.chooseCard('用一御魂替换' + get.translation(result.links), 'h', { type: 'yuhun' }, true).ai = function (card) {
								return -get.value(card);
							};
						} else {
							target.popup('没有御魂');
							event.finish();
						}
					} else {
						target.popup('不换');
						event.finish();
					}
					('step 2');
					if (result.bool) {
						target.lose(result.cards, ui.special);
						target.$throw(result.cards);
						game.log(target, '用', result.cards, '替换了', event.button.link);
						target.gain(event.button.link);
						target.$gain2(event.button.link);
						event.dialog.buttons.remove(event.button);
						event.dialog.buttons.push(ui.create.button(result.cards[0], 'card', event.button.parentNode));
						event.button.remove();
					}
				},
				contentAfter() {
					event.dialog = get.idDialog(event.preResult);
					if (!event.dialog) {
						event.finish();
						return;
					}
					for (var i = 0; i < event.dialog.buttons.length; i++) {
						event.dialog.buttons[i].link.discard();
					}
					var dialog = event.dialog;
					dialog.close();
					_status.dieClose.remove(dialog);
					game.addVideo('cardDialog', null, event.preResult);
				},
			};
			lib.skill.bossStorehigh = {
				trigger: {
					player: 'dieBegin',
				},
				forced: true,
				filter(event, player) {
					return lib.config.bossnum == 0;
				},
				filterTarget(event, player) {
					return target.hasSkill('bossrewardstorage');
				},
				selectTarget: -1,
				_priority: Infinity,
				contentBefore() {
					'step 0';
					if (get.is.versus()) {
						player
							.chooseControl('顺时针', '逆时针', function (event, player) {
								if (player.next.side == player.side) return '逆时针';
								return '顺时针';
							})
							.set('prompt', `选择${get.translation(card)}的结算方向`);
					} else {
						event.goto(3);
					}
					('step 1');
					if (result && result.control == '顺时针') {
						var evt = event.parent;
						evt.fixedSeat = true;
						evt.targets.sortBySeat();
						evt.targets.reverse();
						if (evt.targets[evt.targets.length - 1] == player) {
							evt.targets.unshift(evt.targets.pop());
						}
					}
					('step 2');
					ui.clear();
					var list = [];
					for (var i = 0; i < game.countPlayer() / 2; i++) {
						var yh = ['yhshanghunniao', 'yhzhaocaimao', 'yhdizangxiang', 'yhzheng', 'yhmeiyao', 'yhfanhunxiang', 'yhkuanggu', 'yhzhenmushou', 'yhmumei'].randomGet();
						var st = ['A', 'B', 'C', 'D', 'E', 'F'].randomGet();
						var str = '';
						str += yh;
						str += st;
						var color = ['heart', 'diamond', 'club', 'spade'];
						var num = get.rand(2, 4);
						var yuhun = game.createCard(str, color, num);
						list.push(yuhun);
					}
					var dialog = ui.create.dialog('御魂商店', list, true);
					_status.dieClose.push(dialog);
					dialog.videoId = lib.status.videoId++;
					game.addVideo('cardDialog', null, ['御魂商店', get.cardsInfo(cards), dialog.videoId]);
					event.parent.preResult = dialog.videoId;
				},
				content() {
					'step 0';
					for (var i = 0; i < ui.dialogs.length; i++) {
						if (ui.dialogs[i].videoId == event.preResult) {
							event.dialog = ui.dialogs[i];
							break;
						}
					}
					if (!event.dialog || !target.countCards('h')) {
						event.finish();
						return;
					}
					var minValue = 20;
					var hs = target.getCards('h');
					for (var i = 0; i < hs.length; i++) {
						minValue = Math.min(minValue, get.value(hs[i], target));
					}
					if (target.isUnderControl(true)) {
						event.dialog.setCaption('选择一御魂并用一御魂替换之');
					}
					var next = target.chooseButton(function (button) {
						return get.value(button.link, _status.event.player) - minValue;
					});
					next.set('dialog', event.preResult);
					next.set('closeDialog', false);
					next.set('dialogdisplay', true);
					('step 1');
					event.dialog.setCaption('御魂商店');
					if (result.bool) {
						event.button = result.buttons[0];
						var yh = target.getCards('h', { type: 'yuhun' });
						if (yh.length) {
							target.chooseCard('用一御魂替换' + get.translation(result.links), 'h', { type: 'yuhun' }, true).ai = function (card) {
								return -get.value(card);
							};
						} else {
							target.popup('没有御魂');
							event.finish();
						}
					} else {
						target.popup('不换');
						event.finish();
					}
					('step 2');
					if (result.bool) {
						target.lose(result.cards, ui.special);
						target.$throw(result.cards);
						game.log(target, '用', result.cards, '替换了', event.button.link);
						target.gain(event.button.link);
						target.$gain2(event.button.link);
						event.dialog.buttons.remove(event.button);
						event.dialog.buttons.push(ui.create.button(result.cards[0], 'card', event.button.parentNode));
						event.button.remove();
					}
				},
				contentAfter() {
					event.dialog = get.idDialog(event.preResult);
					if (!event.dialog) {
						event.finish();
						return;
					}
					for (var i = 0; i < event.dialog.buttons.length; i++) {
						event.dialog.buttons[i].link.discard();
					}
					var dialog = event.dialog;
					dialog.close();
					_status.dieClose.remove(dialog);
					game.addVideo('cardDialog', null, event.preResult);
				},
			};
			lib.skill.bossidentity = {
				trigger: {
					global: 'phaseZhunbeiBefore',
				},
				forced: true,
				filter(event, player) {
					return event.player.identity && event.player.identity != undefined;
				},
				_priority: Infinity,
				content() {
					var enemies = trigger.player.getEnemies();
					if (enemies.length) {
						var Enemy = enemies.randomGet();
						player.identity = Enemy.identity;
						if (player.identity == 'zhu') {
							player.identity = 'zhong';
						}
						player.identityShown = true;
					} else {
						player.identity = 'nei';
						player.identityShown = true;
					}
				},
				mod: {
					cardEnabled(card) {
						if (get.type(card) == 'equip') return false;
					},
					globalTo(from, to, distance) {
						return 3;
					},
					attackFrom(from, to, distance) {
						return Infinity;
					},
				},
				ai: {
					order: 10,
					result: {
						player: 1,
					},
				},
			};
			lib.skill.yysboss = {
				enable: 'phaseUse',
				usable: 1,
				_priority: 202130,
				check() {
					return true;
				},
				selectCard: 1,
				delay: false,
				round: 4,
				content() {
					for (var i of game.players) {
						if (i.name != 'qxq_yys_bossbqds') {
							if (Math.random() <= 0.5) i.damage();
							if (Math.random() <= 0.05) {
								i.addSkill('dizzy');
							}
						}
					}
				},
				ai: {
					order: 10,
					result: {
						player: 1,
					},
				},
			};
			lib.skill.yysrealboss = {
				enable: 'phaseUse',
				usable: 1,
				_priority: 202130,
				check() {
					return true;
				},
				selectCard: 1,
				delay: false,
				round: 4,
				content() {
					for (var i of game.players) {
						if (i != player) {
							i.damage();
							i.draw();
							if (Math.random() <= 0.45) {
								i.addSkill('dizzy');
								i.draw();
							}
						}
					}
					player.draw(2);
				},
				group: ['yysrealboss_noturnover', 'yysrealboss_anotherphase'],
				subSkill: {
					noturnover: {
						trigger: {
							player: 'turnOverBefore',
						},
						_priority: 20,
						forced: true,
						filter(event, player) {
							return !player.isTurnedOver();
						},
						content() {
							trigger.cancel();
							game.log(player, '无法被翻面!');
						},
					},
					anotherphase: {
						trigger: {
							source: 'dieBegin',
						},
						forced: true,
						charlotte: true,
						superCharlotte: true,
						_priority: null,
						filter(event, player) {
							return event.source && event.source == player;
						},
						content() {
							player.phase('yysrealboss_anotherphase');
						},
					},
				},
				ai: {
					order: 10,
					result: {
						player: 1,
					},
				},
			};
			lib.skill.yuhuntime = {
				init(player) {
					player.storage.yuhuntime = 2;
				},
				mark: false,
			};
			game.AbsReduce = function (player) {
				'step 0';
				var info = lib.character[player.name];
				var skills = player.getSkills();
				var list1 = [];
				for (var i = 0; i < skills.length; i++) {
					var info = get.info(skills[i]);
					if (!info.fixed && !info.unique && !info.zhuSkill) list1.push(skills[i]);
				}
				for (var i = 0; i < list1.length; i++) {
					var str = '' + list1[i];
					player.removeSkill(str);
				}
				('step 1');
				var list2 = [];
				var func = function (skill) {
					var info = get.info(skill);
					if (!info || info.charlotte || info.juexingji || info.mainSkill || info.viceSkill || info.limited || (info.unique && !info.gainable)) return false;
					return true;
				};
				for (var i in lib.character) {
					if (i == player.name) {
						for (var x = 0; x < lib.character[i][3].length; x++) {
							if (func(lib.character[i][3][x])) list2.add(lib.character[i][3][x]);
						}
					}
				}
				for (var i = 0; i < list2.length; i++) {
					var str = '' + list2[i];
					player.addSkill(str);
				}
			};
			lib.element.player.yysAddFellow = function (name, maxHp, skills, init, extension) {
				if (get.mode() == 'identity' && this.group && this.name.includes('qxq_yys')) {
					if (this.identity == 'zhu' || this.identity == 'zhong') {
						if (game.zhufellows) {
							game.log('主忠方召唤位已满!');
							return;
						}
					}
					if (this.identity == 'fan') {
						if (game.fanfellows) {
							game.log('反贼方召唤位已满!');
							return;
						}
					}
					if (this.identity == 'nei') {
						if (game.neifellows) {
							game.log('第三方召唤位已满!');
							return;
						}
					}
				} else {
					if (game.yysfellows) {
						return;
					}
				}
				if (typeof name != 'string') {
					alert('yysAddFellow 角色名错误!');
					return;
				}
				if (!maxHp || typeof maxHp != 'number' || isNaN(maxHp) || maxHp <= 0) {
					if (typeof maxHp == 'string' && maxHp.includes('/')) {
						var hp = parseInt(maxHp.slice(0, maxHp.indexOf('/')));
						var maxHp = parseInt(maxHp.slice(maxHp.indexOf('/') + 1, maxHp.length));
					} else {
						if (maxHp && (maxHp == true || maxHp == false)) {
							var init = maxHp;
						}
						if (maxHp && typeof maxHp == 'string') {
						} else {
							var skills = maxHp;
						}
						if (!maxHp) {
							maxHp = undefined;
						}
					}
				}
				if (this == game.me) {
					this.side = Math.random() < 0.5;
				} else {
					this.side = Math.random() > 0.5;
				}
				var pos = i + 4;
				if (this != game.me) {
					pos += 4;
				}
				var fellow = game.addFellow(pos, name, 'zoominanim');
				fellow.classList.add('minskin');
				fellow.side = this.side;
				if (fellow.identity == 'zhu') fellow.identity = 'zhong';
				if (get.mode() == 'identity' && this.group && this.name.includes('qxq_yys')) {
					if (this.identity == 'zhu' || this.identity == 'zhong') {
						fellow.style.left = 'calc(50% + 10px)';
						fellow.style.top = 'calc(50% + 30px)';
						fellow.identity = 'zhong';
						fellow.setIdentity('忠');
						fellow.identityShown = true;
					}
					if (this.identity == 'fan') {
						fellow.style.left = 'calc(30% + 10px)';
						fellow.style.top = 'calc(50% + 30px)';
						fellow.identity = 'fan';
						fellow.setIdentity('反');
						fellow.identityShown = true;
					}
					if (this.identity == 'nei') {
						fellow.style.left = 'calc(40% + 10px)';
						fellow.style.top = 'calc(30% + 30px)';
						fellow.identity = 'nei';
						fellow.setIdentity('内');
						fellow.identityShown = true;
					}
				} else {
					if (game.yysfellows) {
						fellow.style.left = 'calc(50% + 10px)';
						fellow.style.top = 'calc(50% + 30px)';
						fellow.setIdentity('猜');
						fellow.identityShown = false;
					}
				}
				fellow.group = this.group;
				fellow.maxHp = maxHp;
				fellow.hp = hp == undefined ? maxHp : hp;
				if (skills && (skills == true || skills == false)) {
					var init = skills;
					skills = null;
				}
				if (skills && typeof skills == 'string') {
					skills = null;
				}
				if (init && typeof init == 'string') {
					init = null;
				}
				if (skills && skills.length) {
					for (var i = 0; i < skills.length; i++) {
						fellow.addSkill(skills[i]);
					}
				}
				if (init == true) {
					var list2 = [];
					var func = function (skill) {
						var info = get.info(skill);
						return true;
					};
					for (var i in lib.character) {
						if (i == name) {
							for (var x = 0; x < lib.character[i][3].length; x++) {
								if (func(lib.character[i][3][x])) list2.add(lib.character[i][3][x]);
							}
						}
					}
					for (var i = 0; i < list2.length; i++) {
						var str = '' + list2[i];
						fellow.addSkill(str);
					}
				}
				fellow.node.avatar.setBackgroundImage(`extension/斗破苍穹X阴阳师/image/${name}.jpg`);
				fellow.side = this.side;
				if (get.mode() == 'identity' && this.group && this.name.includes('qxq_yys')) {
					if (this.identity == 'zhu' || this.identity == 'zhong') {
						if (!game.zhufellows) {
							game.zhufellows = [];
						}
						game.zhufellows.push(fellow);
					}
					if (this.identity == 'fan') {
						if (!game.fanfellows) {
							game.fanfellows = [];
						}
						game.fanfellows.push(fellow);
					}
					if (this.identity == 'nei') {
						if (!game.neifellows) {
							game.neifellows = [];
						}
						game.neifellows.push(fellow);
					}
				} else {
					if (!game.yysfellows) {
						game.yysfellows = [];
					}
					game.yysfellows.push(fellow);
				}
				game.addVideo('', null, [fellow.dataset.position, i + 4 + (this == game.me ? 0 : 4)]);
				fellow.dataset.position = i + 4 + (this == game.me ? 0 : 4);
				return fellow;
			};
			lib.element.player.yysCanAddFellow = function () {
				if (get.mode() == 'identity' && this.group && this.name.includes('qxq_yys')) {
					if (this.identity == 'zhu' || this.identity == 'zhong') {
						if (!game.zhufellows) {
							return true;
						}
					}
					if (this.identity == 'fan') {
						if (!game.fanfellows) {
							return true;
						}
					}
					if (this.identity == 'nei') {
						if (!game.neifellows) {
							return true;
						}
					}
				} else {
					if (!game.yysfellows) {
						return true;
					}
				}
				return false;
			};
			lib.element.player.yysHasFellow = function () {
				if (get.mode() == 'identity' && this.group && this.name.includes('qxq_yys')) {
					if (this.identity == 'zhu' || this.identity == 'zhong') {
						if (!game.zhufellows) {
							return false;
						}
					}
					if (this.identity == 'fan') {
						if (!game.fanfellows) {
							return false;
						}
					}
					if (this.identity == 'nei') {
						if (!game.neifellows) {
							return false;
						}
					}
				} else {
					if (!game.yysfellows) {
						return false;
					}
				}
				return true;
			};
			lib.element.player.yysRemoveFellow = function () {
				if (get.mode() == 'identity' && this.group && this.name.includes('qxq_yys')) {
					if (this.identity == 'zhu' || this.identity == 'zhong') {
						if (!game.zhufellows) {
							return;
						}
						if (game.players.includes(game.zhufellows[0])) game.players.remove(game.zhufellows[0]);
						if (game.dead.includes(game.zhufellows[0])) game.dead.remove(game.zhufellows[0]);
						game.zhufellows[0].delete();
						game.zhufellows = null;
					}
					if (this.identity == 'fan') {
						if (!game.fanfellows) {
							return;
						}
						if (game.players.includes(game.fanfellows[0])) game.players.remove(game.fanfellows[0]);
						if (game.dead.includes(game.fanfellows[0])) game.dead.remove(game.fanfellows[0]);
						game.fanfellows[0].delete();
						game.fanfellows = null;
					}
					if (this.identity == 'nei') {
						if (!game.neifellows) {
							return;
						}
						if (game.players.includes(game.neifellows[0])) game.players.remove(game.neifellows[0]);
						if (game.dead.includes(game.neifellows[0])) game.dead.remove(game.neifellows[0]);
						game.neifellows[0].delete();
						game.neifellows = null;
					}
				} else {
					if (!game.yysfellows) {
						return;
					}
					if (game.players.includes(game.yysfellows[0])) game.players.remove(game.yysfellows[0]);
					if (game.dead.includes(game.yysfellows[0])) game.dead.remove(game.yysfellows[0]);
					game.yysfellows[0].delete();
					game.yysfellows = null;
				}
				return this;
			};
			// ---------------------------------------【阴阳师】播放式神动画------------------------------------------//
			var dpcqyys_isPlayMV = false; //QQQ
			lib.config.hasMV = ['baqidashe', 'buzhihuo', 'gwjttz', 'qianji', 'tianjianrenxinguiqie', 'yuanjieshen'];
			game.saveConfig('hasMV', lib.config.hasMV);
			lib.config.MVtime = ['59.99', '50.16', '59.48', '56.82', '59.96', '29.64'];
			game.saveConfig('MVtime', lib.config.MVtime);
			var url2 = 'extension/斗破苍穹X阴阳师/jntx';
			lib.init.css(url2, 'extension');
			var originCharacterCardFunciton = ui.click.charactercard;
			ui.click.charactercard = function () {
				originCharacterCardFunciton.apply(this, arguments);
				var name = arguments[0];
				var hasMV = lib.config.hasMV;
				for (var i = 0; i < hasMV.length; i++) {
					if (name && name.includes(hasMV[i])) {
						lib.config.MVposition = i;
						game.saveConfig('MVposition', lib.config.MVposition);
						if (ui.window.lastChild && ui.window.lastChild.lastChild) {
							var largeButton = ui.create.div('.dpcq-playMV', ui.window.lastChild.lastChild);
							largeButton.innerHTML = '▶播放式神动画';
							largeButton.addEventListener('click', function () {
								if (dpcqyys_isPlayMV == false) {
									dpcqyys_isPlayMV = true;
									game.playdpcq(lib.config.hasMV[lib.config.MVposition] + 'MV');
									game.playdpcqvideo(lib.config.hasMV[lib.config.MVposition] + 'MV', parseFloat(lib.config.MVtime[lib.config.MVposition]));
									setTimeout(
										function () {
											dpcqyys_isPlayMV = false;
										},
										parseFloat(lib.config.MVtime[lib.config.MVposition]) * 1000
									);
								} else {
									alert('请耐心等待,不要频繁点击!若未能播放动画,请在确认是否已下载素材(MV动画+MV音频)后,在下方的反馈bug处,及时联系扩展作者反馈,感谢您的配合!');
								}
							});
						}
					}
				}
			};
			// ---------------------------------------【阴阳师】将灵------------------------------------------//
			lib.skill.yysjiangling = {
				mark: true,
				init(player) {
					if (lib.config.yysCharacterChoose != 'random') {
						for (var i in lib.character) {
							if (i == lib.config.yysCharacterChoose) {
								player.markSkillCharacter('yysjiangling', i);
								game.BlueFire(player);
							}
						}
						player.storage.yysjianglingRandom = [];
						player.storage.yysjianglingRandom.push(lib.config.yysCharacterChoose);
						var list2 = [];
						var func = function (skill) {
							var info = get.info(skill);
							if (!info || info.charlotte || info.juexingji || info.mainSkill || info.viceSkill || info.limited || (info.unique && !info.gainable)) return false;
							return true;
						};
						for (var i in lib.character) {
							if (i == lib.config.yysCharacterChoose) {
								for (var x = 0; x < lib.character[i][3].length; x++) {
									if (func(lib.character[i][3][x])) list2.add(lib.character[i][3][x]);
								}
							}
						}
						for (var i = 0; i < list2.length; i++) {
							var str = '' + list2[i];
							player.addSkill(str);
							player.unmarkSkill(str);
						}
						game.BlueFire(player);
					} else {
						var list = [];
						for (var i in lib.character) {
							if (lib.character[i][1] == 'qxq_yys') {
								list.push(i);
							}
						}
						var pl = list.randomGet();
						player.markSkillCharacter('yysjianglingRandom', pl);
						var list2 = [];
						var func = function (skill) {
							var info = get.info(skill);
							if (!info || info.charlotte || info.juexingji || info.mainSkill || info.viceSkill || info.limited || (info.unique && !info.gainable)) return false;
							return true;
						};
						for (var i in lib.character) {
							if (i == pl) {
								for (var x = 0; x < lib.character[i][3].length; x++) {
									if (func(lib.character[i][3][x])) list2.add(lib.character[i][3][x]);
								}
							}
						}
						for (var i = 0; i < list2.length; i++) {
							var str = '' + list2[i];
							player.addSkill(str);
							player.unmarkSkill(str);
						}
						game.BlueFire(player);
					}
				},
			};
			lib.skill.yysjianglingRandom = {
				mark: true,
				init(player) {
					var list = [];
					for (var i in lib.character) {
						if (lib.character[i][1] == 'qxq_yys') {
							list.push(i);
						}
					}
					for (var i of game.players) {
						if (i.storage.yysjianglingRandom && i.storage.yysjianglingRandom[0]) {
							list.remove(i.storage.yysjianglingRandom[0]);
						}
						if (list.includes(i.name)) {
							list.remove(i.name);
						}
					}
					if (list.length) {
						var pl = list.randomGet();
						player.storage.yysjianglingRandom = [];
						player.storage.yysjianglingRandom.push(pl);
						player.markSkillCharacter('yysjianglingRandom', pl);
					}
					var list2 = [];
					var func = function (skill) {
						var info = get.info(skill);
						if (!info || info.charlotte || info.juexingji || info.mainSkill || info.viceSkill || info.limited || (info.unique && !info.gainable)) return false;
						return true;
					};
					for (var i in lib.character) {
						if (pl && i == pl) {
							for (var x = 0; x < lib.character[i][3].length; x++) {
								if (func(lib.character[i][3][x])) list2.add(lib.character[i][3][x]);
							}
						}
					}
					for (var i = 0; i < list2.length; i++) {
						var str = '' + list2[i];
						player.addSkill(str);
						player.unmarkSkill(str);
					}
					game.BlueFire(player);
				},
			};
			// ---------------------------------------BFSystem------------------------------------------//
			//部分借鉴了【玄武江湖】、部分借鉴了【扩展ol】和【炉石模式】,感谢<寰宇星城>和<极光>两位大佬!
			var url2 = 'extension/斗破苍穹X阴阳师/jntx';
			lib.init.css(url2, 'extension');
			game.getDpBfBarStyle = function () {
				var _0x7c1bx2 = lib.config.xwBfBarLocation;
				if (!_0x7c1bx2) {
					_0x7c1bx2 = 'wildfireshow';
				} else {
					_0x7c1bx2 = 'wildfireshow';
				}
				return {
					button: '.dpcq-Bf-' + _0x7c1bx2,
					name: '.name-' + _0x7c1bx2,
				};
			};
			game.createDpBfBar = function (_0x7c1bx3) {
				var _0x7c1bx4;
				if (!_0x7c1bx3.node) {
					_0x7c1bx3.node = {};
				}
				var _0x7c1bx5 = game.getDpBfBarStyle();
				if (!_0x7c1bx3.node.dpcqBfIcon && ((_0x7c1bx3.name && _0x7c1bx3.name.includes('qxq_yys')) || _0x7c1bx3.hasSkill('yysjiangling') || _0x7c1bx3.hasSkill('yysjianglingRandom'))) {
					_0x7c1bx4 = ui.create.div(_0x7c1bx5.button);
				} else {
					_0x7c1bx4 = _0x7c1bx3.node.dpcqBfIcon;
				}
				_0x7c1bx4.hide();
				_0x7c1bx3.appendChild(_0x7c1bx4);
				_0x7c1bx4.show();
				var _0x7c1bx6;
				if (!_0x7c1bx3.node.dpcqBf && ((_0x7c1bx3.name && _0x7c1bx3.name.includes('qxq_yys')) || _0x7c1bx3.hasSkill('yysjiangling') || _0x7c1bx3.hasSkill('yysjianglingRandom'))) {
					_0x7c1bx6 = ui.create.div(_0x7c1bx5.name, _0x7c1bx4);
					_0x7c1bx6.classList.add('text');
				} else {
					_0x7c1bx6 = _0x7c1bx3.node.dpcqBf;
				}
				_0x7c1bx3.node.dpcqBf = _0x7c1bx6;
				_0x7c1bx3.node.dpcqBfIcon = _0x7c1bx4;
				if (_0x7c1bx3.dpcqBf === undefined) {
					game.defineDpBfProperty(_0x7c1bx3);
				}
				_0x7c1bx6.innerHTML = _0x7c1bx3.dpcqBf + '/' + _0x7c1bx3.dpcqMaxBf;
				if (_0x7c1bx3.dpcqMaxBf <= 0) {
				}
			};
			game.defineDpBfProperty = function (_0x7c1bx3) {
				if (!_0x7c1bx3.storage.dpcqBf) {
					_0x7c1bx3.storage.dpcqBf = 0;
				}
				if (!_0x7c1bx3.storage.dpcqMaxBf) {
					_0x7c1bx3.storage.dpcqMaxBf = 0;
				}
				Reflect.defineProperty(_0x7c1bx3, 'dpcqBf', {
					get() {
						return _0x7c1bx3.storage.dpcqBf;
					},
					set(_0x7c1bx7) {
						if (typeof _0x7c1bx7[0x0] != 'number') {
							throw 'value类型错误';
						}
						switch (_0x7c1bx7[0x1]) {
							case 'gain':
								_0x7c1bx3.gaindpcqBf(_0x7c1bx7[0x0]);
								break;
							case 'lose':
								_0x7c1bx3.losedpcqBf(_0x7c1bx7[0x0]);
								break;
							case 'consume':
								_0x7c1bx3.consumedpcqBf(_0x7c1bx7[0x0]);
								break;
							default:
								_0x7c1bx3.storage.dpcqBf = _0x7c1bx7[0x0];
								var _0x7c1bx4 = _0x7c1bx3.node.dpcqBf;
								_0x7c1bx4.innerHTML = _0x7c1bx3.dpcqBf + '/' + _0x7c1bx3.dpcqMaxBf;
						}
					},
				});
				Reflect.defineProperty(_0x7c1bx3, 'dpcqMaxBf', {
					get() {
						return _0x7c1bx3.storage.dpcqMaxBf;
					},
					set(_0x7c1bx7) {
						if (typeof _0x7c1bx7[0x0] != 'number') {
							throw 'value[0]类型错误';
						}
						switch (_0x7c1bx7[0x1]) {
							case 'gain':
								_0x7c1bx3.gaindpcqMaxBf(_0x7c1bx7[0x0]);
								break;
							case 'lose':
								_0x7c1bx3.losedpcqMaxBf(_0x7c1bx7[0x0]);
								break;
							default:
								_0x7c1bx3.storage.dpcqMaxBf = _0x7c1bx7[0x0];
								game.createDpBfBar(_0x7c1bx3);
								var _0x7c1bx4 = _0x7c1bx3.node.dpcqBf;
								_0x7c1bx4.innerHTML = _0x7c1bx3.dpcqBf + '/' + _0x7c1bx3.dpcqMaxBf;
						}
					},
				});
			};
			lib.element.content.consumeBF = function () {
				'step 0';
				if (!event.num || event.num == 0) {
					event.finish();
				}
				('step 1');
				var friend = event.player.getFriends();
				if (friend && !friend.includes(player)) {
					friend.push(player);
				}
				for (var i = 0; i < friend.length; i++) {
					if (friend[i].name.includes('qxq_yys') || friend[i].hasSkill('yysjiangling') || friend[i].hasSkill('yysjianglingRandom')) {
						friend[i].bluefireused += event.num;
						friend[i].popup('鬼火消耗');
						game.updateBlueFire(friend[i]);
					}
				}
				game.log(player, '消耗了', event.num, '点鬼火.');
				('step 2');
				event.result = {
					num: event.num,
					bool: event.num > 0,
				};
			};
			lib.element.content.loseBF = function () {
				'step 0';
				if (!event.num || event.num == 0) {
					event.finish();
				}
				('step 1');
				var friend = event.player.getFriends();
				if (friend && !friend.includes(player)) {
					friend.push(player);
				}
				for (var i = 0; i < friend.length; i++) {
					if (friend[i].name.includes('qxq_yys') || friend[i].hasSkill('yysjiangling') || friend[i].hasSkill('yysjianglingRandom')) {
						friend[i].bluefireused += event.num;
						friend[i].popup('鬼火损失');
						game.updateBlueFire(friend[i]);
					}
				}
				game.log(player, '损失了', event.num, '点鬼火.');
				('step 2');
				event.result = {
					num: event.num,
					bool: event.num > 0,
				};
			};
			lib.element.content.getBF = function () {
				'step 0';
				if (!event.num || event.num == 0) {
					event.finish();
				}
				('step 1');
				var friend = event.player.getFriends();
				if (friend && !friend.includes(player)) {
					friend.push(player);
				}
				for (var i = 0; i < friend.length; i++) {
					if (friend[i].name.includes('qxq_yys') || friend[i].hasSkill('yysjiangling') || friend[i].hasSkill('yysjianglingRandom')) {
						friend[i].bluefireused -= event.num;
						friend[i].popup('鬼火获得');
						game.updateBlueFire(friend[i]);
					}
				}
				game.log(player, '获得了', event.num, '点鬼火.');
				('step 2');
				event.result = {
					num: event.num,
					bool: event.num > 0,
				};
			};
			game.consumeBF = function (player, SkillConsume) {
				if (typeof player != 'object') {
					var SkillConsume = player;
					var player = game.players.randomGet();
				}
				if (!SkillConsume || typeof SkillConsume != 'number' || isNaN(SkillConsume) || SkillConsume <= 0) {
					var SkillConsume = 1;
				}
				var next = game.createEvent('consumeBF');
				var num = SkillConsume;
				next.setContent('consumeBF');
				next.set('player', player);
				next.set('num', num);
				return next;
			};
			game.loseBF = function (player, losenum) {
				if (typeof player != 'object') {
					var losenum = player;
					var player = game.players.randomGet();
				}
				if (!losenum || typeof losenum != 'number' || isNaN(losenum) || losenum <= 0) {
					var losenum = 1;
				}
				var next = game.createEvent('loseBF');
				var num = losenum;
				next.setContent('loseBF');
				next.set('player', player);
				next.set('num', num);
				return next;
			};
			game.getBF = function (player, getnum) {
				if (typeof player != 'object') {
					var getnum = player;
					var player = game.players.randomGet();
				}
				if (!getnum || typeof getnum != 'number' || isNaN(getnum) || getnum <= 0) {
					var getnum = 1;
				}
				var next = game.createEvent('getBF');
				var num = getnum;
				next.setContent('getBF');
				next.set('player', player);
				next.set('num', num);
				return next;
			};
			lib.arenaReady.push(function () {
				_status.firechance = 0;
				ui.BlueFire = ui.create.system('', null, true);
				ui.BlueFire.style.display = 'none';
				ui.BlueFire.style.display = '';
				ui.BlueFire.innerHTML = lib.translate.BlueFire;
				lib.setPopped(
					ui.BlueFire,
					function () {
						var uiintro = ui.create.dialog('hidden');
						var BlueFireinfo = get.translation(`_BlueFire_${_status.BlueFire}_info`);
						var chancestr = parseInt(_status.BlueFirechance * 100) + '%';
						BlueFireinfo = BlueFireinfo.replace(/&BlueFire&/, chancestr);
						uiintro.add(lib.translate.BlueFire);
						if (get.mode() == 'identity') {
							var numz = 0;
							for (var i of game.players) {
								if (((i.name && i.name.includes('qxq_yys')) || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom')) && (i.identity == 'zhu' || i.identity == 'zhong')) {
									numz++;
								}
							}
							var numf = 0;
							for (var i of game.players) {
								if (((i.name && i.name.includes('qxq_yys')) || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom')) && i.identity == 'fan') {
									numf++;
								}
							}
							var numn = 0;
							for (var i of game.players) {
								if (((i.name && i.name.includes('qxq_yys')) || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom')) && i.identity == 'nei') {
									numn++;
								}
							}
							if (numz > 0) {
								uiintro.add('<div class="text center"><font color=cyan>当前</font><font color=red>主</font><font color=cyan>/</font><font color=yellow>忠</font><font color=cyan>方鬼火条进度:</font></div>');
								var num1 = ui.create.div('WildFire');
								uiintro.add(num1);
								for (var i = 0; i < 5; i++) {
									var span = document.createElement('span');
									span.link = i;
									if (lib.config.BluefireProcesszhu == undefined) {
										lib.config.BluefireProcesszhu = 0;
										game.saveConfig('BluefireProcesszhu', lib.config.BluefireProcesszhu);
									}
									if (i < lib.config.BluefireProcesszhu) {
										span.innerHTML = '<font color=cyan>●</font>';
									} else {
										span.innerHTML = '<font color=brown>○</font>';
									}
									num1.appendChild(span);
								}
							} else {
								uiintro.add('<div class="text center"><font color=orange>当前</font><font color=red>主</font><font color=orange>/</font><font color=yellow>忠</font><font color=orange>方无阴阳师式神/将灵!</font></div>');
							}
							if (numf > 0) {
								uiintro.add('<div class="text center"><font color=cyan>当前</font><font color=green>反贼</font><font color=cyan>方鬼火条进度:</font></div>');
								var num2 = ui.create.div('WildFire');
								uiintro.add(num2);
								for (var i = 0; i < 5; i++) {
									var span = document.createElement('span');
									span.link = i;
									if (lib.config.BluefireProcessfan == undefined) {
										lib.config.BluefireProcessfan = 0;
										game.saveConfig('BluefireProcessfan', lib.config.BluefireProcessfan);
									}
									if (i < lib.config.BluefireProcessfan) {
										span.innerHTML = '<font color=cyan>●</font>';
									} else {
										span.innerHTML = '<font color=brown>○</font>';
									}
									num2.appendChild(span);
								}
							} else {
								uiintro.add('<div class="text center"><font color=orange>当前</font><font color=green>反贼</font><font color=orange>方无阴阳师式神/将灵!</font></div>');
							}
							if (numn > 0) {
								uiintro.add('<div class="text center"><font color=cyan>当前</font><font color=blue>第三</font><font color=cyan>方鬼火条进度:</font></div>');
								var num3 = ui.create.div('WildFire');
								uiintro.add(num3);
								for (var i = 0; i < 5; i++) {
									var span = document.createElement('span');
									span.link = i;
									if (lib.config.BluefireProcessnei == undefined) {
										lib.config.BluefireProcessnei = 0;
										game.saveConfig('BluefireProcessnei', lib.config.BluefireProcessnei);
									}
									if (i < lib.config.BluefireProcessnei) {
										span.innerHTML = '<font color=cyan>●</font>';
									} else {
										span.innerHTML = '<font color=brown>○</font>';
									}
									num3.appendChild(span);
								}
							} else {
								uiintro.add('<div class="text center"><font color=orange>当前</font><font color=blue>第三</font><font color=orange>方无阴阳师式神/将灵!</font></div>');
							}
						} else {
							var numgroup = 0;
							for (var i of game.players) {
								if ((i.name && i.name.includes('qxq_yys')) || i.hasSkill('yysjiangling') || i.hasSkill('yysjianglingRandom')) {
									numgroup++;
								}
							}
							if (numgroup > 0) {
								uiintro.add('<div class="text center"><font color=cyan>当前</font><font color=orange>阴阳师势力</font><font color=cyan>鬼火条进度:</font></div>');
								var num4 = ui.create.div('WildFire');
								uiintro.add(num4);
								for (var i = 0; i < 5; i++) {
									var span = document.createElement('span');
									span.link = i;
									if (lib.config.BluefireProcessgroup == undefined) {
										lib.config.BluefireProcessgroup = 0;
										game.saveConfig('BluefireProcessgroup', lib.config.BluefireProcessgroup);
									}
									if (i < lib.config.BluefireProcessgroup) {
										span.innerHTML = '<font color=cyan>●</font>';
									} else {
										span.innerHTML = '<font color=brown>○</font>';
									}
									num4.appendChild(span);
								}
							} else {
								uiintro.add('<div class="text center"><font color=orange>当前场上无阴阳师势力/阴阳师将灵!</font></div>');
							}
						}
						uiintro.add(ui.create.div('.placeholder.slim'));
						return uiintro;
					},
					220
				);
			});
			game.BlueFire = function (player) {
				if (!player.isMin() || player.forcemin) {
					if (!player.node.bluefire) {
						player.node.bluefire = ui.create.div('.bluefire.hp', player);
					}
					if (typeof player.bluefire !== 'number') {
						player.bluefire = 8;
					}
					player.bluefireused = 5;
					if (!player.actcharacterlist) {
						player.actcharacterlist = [];
					}
					game.updateBlueFire(player);
				}
			};
			game.updateBlueFire = function (player) {
				if (player.bluefireused < 0) {
					player.bluefireused = 0;
				}
				if (player.bluefireused > player.bluefire) {
					player.bluefireused = player.bluefire;
				}
				if (!player.bluefireused) {
					player.bluefireused = 0;
				}
				if (!player.bluefire) {
					player.bluefire = 0;
				}
				if (_status.video) {
					player.bluefire = 2;
				} else {
					game.addVideo('updateBlueFire', player, ['鬼火', player.bluefire, player.bluefireused]);
				}
				var num;
				if (game.layout == 'default' || _status.currentPhase != player) {
					num = player.bluefire;
				} else {
					if (_status.video) {
						num = player.bluefire;
					} else {
						num = player.bluefire - player.bluefireused;
					}
					if (player.bluefire > num) {
						num = player.bluefire;
					}
					if (player.node.bluefire && num > 12) {
						num = player.bluefire + 1;
						player.node.bluefire.classList.add('overflow2');
					} else {
						if (player.node.bluefire) {
							player.node.bluefire.classList.remove('overflow2');
						}
					}
				}
				for (var i = 0; i < 12; i++) {
					if (player.node.bluefire && num > player.node.bluefire.childElementCount) {
						ui.create.div(player.node.bluefire);
					} else {
						if (player.node.bluefire && num < player.node.bluefire.childElementCount) {
							player.node.bluefire.lastChild.remove();
						} else {
							break;
						}
					}
				}
				if (player.node.bluefire) {
					var _0xdf96x9;
					if (_status.video) {
						_0xdf96x9 = player.bluefire;
					} else {
						_0xdf96x9 = player.bluefire - player.bluefireused;
					}
					for (var i = 0; i < player.node.bluefire.childElementCount; i++) {
						if (i < _0xdf96x9) {
							player.node.bluefire.childNodes[i].classList.remove('lost');
							if (i >= player.bluefire) {
								player.node.bluefire.childNodes[i].classList.add('overflow');
							} else {
								player.node.bluefire.childNodes[i].classList.remove('overflow');
							}
						} else {
							player.node.bluefire.childNodes[i].classList.add('lost');
							player.node.bluefire.childNodes[i].classList.remove('overflow');
						}
					}
				}
				if ((player.name && player.name.includes('qxq_yys')) || player.hasSkill('yysjiangling') || player.hasSkill('yysjianglingRandom')) {
					player.storage.dpcqMaxBf = player.bluefire;
					player.storage.dpcqBf = player.bluefire - player.bluefireused;
					Reflect.defineProperty(player, 'dpcqBf', {
						get() {
							return player.storage.dpcqBf;
						},
						set(v) {
							if (typeof v[0x0] != 'number') {
								throw 'value类型错误';
							}
							switch (v[0x1]) {
								case 'gain':
									player.gaindpcqBf(v[0x0]);
									break;
								case 'lose':
									player.losedpcqBf(v[0x0]);
									break;
								case 'consume':
									player.consumedpcqBf(v[0x0]);
									break;
								default:
									player.storage.dpcqBf = v[0x0];
									player.node.dpcqBf.innerHTML = player.dpcqBf + '/' + player.dpcqMaxBf;
							}
						},
					});
					Reflect.defineProperty(player, 'dpcqMaxBf', {
						get() {
							return player.storage.dpcqMaxBf;
						},
						set(v) {
							if (typeof v[0x0] != 'number') {
								throw 'value[0]类型错误';
							}
							switch (v[0x1]) {
								case 'gain':
									player.gaindpcqMaxBf(v[0x0]);
									break;
								case 'lose':
									player.losedpcqMaxBf(v[0x0]);
									break;
								default:
									player.storage.dpcqMaxBf = v[0x0];
									player.node.dpcqBf.innerHTML = player.dpcqBf + '/' + player.dpcqMaxBf;
							}
						},
					});
					var div;
					var _0xdf96xc = game.getDpBfBarStyle();
					if (!player.node.dpcqBfIcon) {
						div = ui.create.div(_0xdf96xc.button);
					} else {
						div = player.node.dpcqBfIcon;
					}
					div.hide();
					player.appendChild(div);
					div.show();
					var _0xdf96xd;
					if (!player.node.dpcqBf) {
						_0xdf96xd = ui.create.div(_0xdf96xc.name, div);
						_0xdf96xd.classList.add('text');
					} else {
						_0xdf96xd = player.node.dpcqBf;
					}
					player.node.dpcqBf = _0xdf96xd;
					player.node.dpcqBfIcon = div;
					_0xdf96xd.innerHTML = player.dpcqBf + '/' + player.dpcqMaxBf;
					if (player.dpcqMaxBf <= 0) {
						player.node.dpcqBfIcon.hide();
						player.node.dpcqBf.hide();
					}
				}
			};
			// ---------------------------------------BagSystem------------------------------------------//
			game.checkMyItemInExtension = function (Extname, item) {
				if (game.bool && game.bool != undefined) {
					delete game.bool;
				}
				game.bool = false;
				if (typeof require == 'function') {
					const fs = require('fs');
					var getCurrentFilenames = function () {
						const __dirname2 = __dirname + '\\extension\\' + Extname; //QQQ
						fs.readdirSync(__dirname2).forEach((file) => {
							if (file == item) game.bool = true;
						});
					};
					getCurrentFilenames();
				} else {
					game.bool = true;
				}
				return game.bool == true;
			};
			game.importMyPictory = function (str) {
				if (str) {
					if (str.length == 0) {
						alert('您未输入内容!');
						return;
					}
					game.download(
						`http://q1.qlogo.cn/g?b=qq&nk=${str}&s=4`,
						'extension/斗破苍穹X阴阳师/image/MyPicture.jpg',
						function () { },
						function () { }
					);
					if (game.dpcqCloseBag && game.dpcqCloseBag != undefined) {
						game.dpcqCloseBag();
					}
					setTimeout(function () {
						game.openCharacterList();
					}, 500);
				}
			};
			game.openCharacterList = function () {
				if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_stop != false) game.pause2();
				var dialog1 = {};
				var background = ui.create.dialog('hidden');
				background.classList.add('popped');
				background.classList.add('static');
				background.style.height = '100%';
				background.style.width = '100%';
				background.style.left = '0px';
				background.style.top = '0px';
				ui.window.appendChild(background);
				dialog1.background = background;
				var bg_new = ui.create.div();
				bg_new.classList.add('popped');
				bg_new.classList.add('static');
				bg_new.style.height = '100%';
				bg_new.style.width = '25%';
				bg_new.style.left = '1%';
				bg_new.style.top = '0%';
				bg_new.style['box-shadow'] = 'none';
				bg_new.style['overflow-y'] = 'scroll';
				bg_new.style.background = 'none';
				bg_new.style['z-index'] = 200;
				bg_new.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/bg_new.jpg');
				bg_new.style.backgroundSize = '100% 100%';
				ui.window.appendChild(bg_new);
				dialog1.bg_new = bg_new;
				var t = ui.create.div('', '人物资料卡');
				t.style.height = '40px';
				t.style.width = '100%';
				t.style.left = '0px';
				t.style.top = '0px';
				t.style['text-align'] = 'left';
				t.innerHTML = '<span style="color: #FFFFFF;font-size:40px;font-weight:600px;font-family:shousha">人物资料卡</span>';
				bg_new.appendChild(t);
				var b1 = ui.create.div();
				b1.style.height = 'calc(100% - 40px)';
				b1.style.width = '50%';
				b1.style.left = '0px';
				b1.style.top = 'calc(0% + 40px)';
				b1.style.borderRadius = '5px';
				b1.style['overflow-y'] = 'scroll';
				bg_new.appendChild(b1);
				var name = [];
				for (var i in lib.character) {
					if (lib.config.favouriteCharacter.includes(i) && i.indexOf('boss') == -1) {
						name.push(i);
					}
				}
				for (var i in lib.character) {
					if (lib.config.favouriteCharacter.indexOf(i) == -1 && i.includes('qxq_yys_') && i.indexOf('boss') == -1) {
						name.push(i);
					}
				}
				for (var i = 0; i < name.length; i++) {
					game[name[i]] = function () {
						for (var x = 0; x < name.length; x++) {
							if (this.innerHTML == `<span style="cursor:pointer;color: #FFFFFF;">${get.translation(name[x])}</span>`) {
								lib.config.thischaractername = name[x];
								game.saveConfig('thischaractername', lib.config.thischaractername);
								game.characterlist = ui.create.div('.menubutton.round', '', function () {
									game.prompt('输入您的QQ号码,使QQ头像作为此头像(设置时需要联网)', game.importMyPictory);
								});
								if (game.checkMyItemInExtension('斗破苍穹X阴阳师', 'MyPicture.jpg')) {
									game.characterlist.setBackgroundImage('extension/斗破苍穹X阴阳师/image/MyPicture.jpg');
									game.characterlist.style.backgroundSize = '100% 100%';
								} else {
									game.characterlist.innerHTML = '点击此处<br>输入QQ<br>设置头像';
								}
								game.characterlist.style.height = 'calc(23%)';
								game.characterlist.style.width = 'calc(14%)';
								game.characterlist.style.left = 'calc(15%)';
								game.characterlist.style.top = 'calc(10%)';
								game.characterlist.style.borderRadius = '5px';
								game.characterlist.style['text-align'] = 'left';
								game.characterlist.style['overflow-x'] = 'hidden';
								game.characterlist.style['overflow-y'] = 'scroll';
								lib.setScroll(game.characterlist);
								background.appendChild(game.characterlist);
								game.nature = ui.create.div();
								game.nature.style.height = 'calc(60%)';
								game.nature.style.width = 'calc(15%)';
								game.nature.style.left = 'calc(15%)';
								game.nature.style.top = 'calc(37%)';
								game.nature.style.borderRadius = '5px';
								game.nature.style.backgroundColor = '#FFFFFF';
								game.nature.innerHTML = '御魂属性:';
								var yhnaturelist = [];
								var itemATK = 0;
								var itemATKx = 0;
								var itemDEF = 0;
								var itemDEFx = 0;
								var itemCS = 0;
								var itemCSS = 0;
								var itemmaxHp = 0;
								var itemINF = 0;
								var itemRES = 0;
								for (var i = 1; i < 7; i++) {
									if (lib.config[lib.config.thischaractername + '_yuhunequip' + i] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`] != undefined) {
										if (lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].ATK != undefined && typeof lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].ATK == 'number') {
											itemATK += lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].ATK;
										}
										if (lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].ATKx != undefined && typeof lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].ATKx == 'number') {
											itemATKx += lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].ATKx;
										}
										if (lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].DEF != undefined && typeof lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].DEF == 'number') {
											itemDEF += lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].DEF;
										}
										if (lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].DEFx != undefined && typeof lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].DEFx == 'number') {
											itemDEFx += lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].DEFx;
										}
										if (lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].CS != undefined && typeof lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].CS == 'number') {
											itemCS += lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].CS;
										}
										if (lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].CSS != undefined && typeof lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].CSS == 'number') {
											itemCSS += lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].CSS;
										}
										if (lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].maxHp != undefined && typeof lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].maxHp == 'number') {
											itemmaxHp += lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].maxHp;
										}
										if (lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].INF != undefined && typeof lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].INF == 'number') {
											itemINF += lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].INF;
										}
										if (lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].RES != undefined && typeof lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].RES == 'number') {
											itemRES += lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].RES;
										}
									}
								}
								game.nature.innerHTML += `<br><br>攻击:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${itemATK}`;
								game.nature.innerHTML += `<br><br>攻击加成:&nbsp&nbsp${itemATKx}%`;
								game.nature.innerHTML += `<br><br>防御:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${itemDEF}`;
								game.nature.innerHTML += `<br><br>防御加成:&nbsp&nbsp${itemDEFx}%`;
								game.nature.innerHTML += `<br><br>暴击:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${itemCS}%`;
								game.nature.innerHTML += `<br><br>暴击伤害:&nbsp&nbsp(150%+)${itemCSS}%`;
								game.nature.innerHTML += `<br><br>生命:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${itemmaxHp}%`;
								game.nature.innerHTML += `<br><br>效果命中:&nbsp&nbsp${itemINF}%`;
								game.nature.innerHTML += `<br><br>效果抵抗:&nbsp&nbsp${itemRES}%`;
								game.nature.style['text-align'] = 'left';
								game.nature.style['overflow-x'] = 'hidden';
								game.nature.style['overflow-y'] = 'scroll';
								lib.setScroll(game.nature);
								background.appendChild(game.nature);
								game.yuhunproequip = ui.create.div();
								game.yuhunproequip.style.height = 'calc(60%)';
								game.yuhunproequip.style.width = 'calc(40%)';
								game.yuhunproequip.style.left = 'calc(32%)';
								game.yuhunproequip.style.top = 'calc(10%)';
								game.yuhunproequip.style.borderRadius = '5px';
								game.yuhunproequip.style['text-align'] = 'left';
								game.yuhunproequip.style['overflow-x'] = 'hidden';
								game.yuhunproequip.style['overflow-y'] = 'scroll';
								lib.setScroll(game.yuhunproequip);
								background.appendChild(game.yuhunproequip);
								if (lib.config[`${lib.config.thischaractername}_yuhunequip1`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip1`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip1`] == undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip1', lib.config[`${lib.config.thischaractername}_yuhunequip1`]);
								}
								if (lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`] = undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip1_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`]);
								}
								game.yuhunequip1 = ui.create.div();
								game.yuhunequip1.style.height = 'calc(15%)';
								game.yuhunequip1.style.width = 'calc(13%)';
								game.yuhunequip1.style.left = 'calc(10%)';
								game.yuhunequip1.style.top = 'calc(10%)';
								game.yuhunequip1.style.borderRadius = '5px';
								game.yuhunequip1.style['text-align'] = 'left';
								game.yuhunequip1.style['overflow-x'] = 'hidden';
								game.yuhunequip1.style['overflow-y'] = 'scroll';
								lib.setScroll(game.yuhunequip1);
								game.yuhunproequip.appendChild(game.yuhunequip1);
								var info1 = ui.create.div('.menu');
								info1.style.transition = 'left 0s,top 0s,opacity .3s';
								info1.style.width = '312px';
								info1.style['pointer-events'] = 'none';
								info1.style['text-align'] = 'left';
								info1.style.animation = 'fadeShow .3s';
								info1.style['-webkit-animation'] = 'fadeShow .3s';
								info1.style['z-index'] = 499;
								game.yuhunequip1.info = info1;
								if (lib.config[`${lib.config.thischaractername}_yuhunequip1`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip1`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`] != undefined) {
									var num = 1;
									var list = [];
									var list1 = [];
									list.push(lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`]);
									var info = ui.create.div('.menu');
									info.style.transition = 'left 0s,top 0s,opacity .3s';
									info.style.width = '312px';
									info.style['pointer-events'] = 'none';
									info.style['text-align'] = 'left';
									info.style.animation = 'fadeShow .3s';
									info.style['-webkit-animation'] = 'fadeShow .3s';
									info.style['z-index'] = 499;
									dialog1.info = info;
									for (var i = 0; i < num; i++) {
										var div1 = ui.create.div('.card.fullskin');
										div1.style.height = '60px';
										div1.style.width = '60px';
										div1.style.top = '0px';
										if (lib.config[`${lib.config.thischaractername}_yuhunequip1`] && lib.config[`${lib.config.thischaractername}_yuhunequip1`] != undefined) div1.style.backgroundImage = `url(extension/斗破苍穹X阴阳师/jntx/${lib.config[`${lib.config.thischaractername}_yuhunequip1`]}.jpg)`;
										div1.style.backgroundSize = 'cover';
										div1.link = list[i];
										div1.link1 = list1[i];
										if (list[i] != undefined) {
											if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_showNum == true) {
												var div_name = ui.create.div();
												div_name.style.height = '10px';
												if (list[i].noBorder == true) {
													div_name.style.width = 'calc(100% - 1px)';
													div_name.style.bottom = '0px';
													div_name.style.right = '1px';
												} else {
													div_name.style.width = 'calc(100% - 3px)';
													div_name.style.bottom = '2px';
													div_name.style.right = '3px';
												}
												div_name.style['font-size'] = '10px';
												div_name.style['text-align'] = 'right';
												div_name.style['font-family'] = 'shousha';
												div_name.style.color = 'white';
												div_name.style['text-shadow'] = 'black 0 0 2px';
												div_name.innerHTML = `<span style="font-weight:600;">${lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`][list1[i]].num}</span>`;
												div1.appendChild(div_name);
												div1.link_name = div_name;
											}
											if (lib.device == undefined) {
												div1.onmouseover = function () {
													var item = this.link;
													info.innerHTML = game.dpcqitem_getStr2(item);
													ui.window.appendChild(info);
													info.hide();
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
													info.show();
												};
												div1.onmousemove = function () {
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
												};
												div1.onmouseout = function () {
													info.hide();
												};
											}
											div1.onclick = function () {
												if (lib.dpcq_dpcqbag[this.link.name] == undefined) {
													return;
												}
												var clickAnimation = function (div) {
													div1.style.transition = 'opacity 0.5s';
													div1.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
														this.style.transform = 'scale(0.95)';
													});
													div1.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
														this.style.transform = '';
													});
													div1.onmouseout = function () {
														this.style.transform = '';
													};
												};
												var item_div = this;
												var background1 = ui.create.dialog('hidden');
												background1.style.height = 'calc(100%)';
												background1.style.width = 'calc(100%)';
												background1.style.left = '0px';
												background1.style.top = '0px';
												background1.style.zIndex = '998';
												ui.window.appendChild(background1);
												var box = document.createElement('div');
												var button = document.createElement('div');
												var button1 = document.createElement('div');
												var button2 = document.createElement('div');
												var boxName = {
													width: '550px',
													display: 'table',
													background: 'rgba(0,0,0,0.4)',
													border: '2px solid black',
													position: 'absolute',
													top: 'calc(50% - 90px)',
													left: 'calc(50% - 275px)',
													zIndex: '999',
													textAlign: 'left',
													lineHeight: '21px',
													borderRadius: '3px',
													animation: 'fadeInDown .3s',
													'-webkit-animation': 'fadeInDown .3s',
												};
												for (var k in boxName) {
													box.style[k] = boxName[k];
												}
												document.body.appendChild(box);
												var item = this.link;
												box.innerHTML = game.dpcqitem_getStr(item, item.num) + '<br><br><br>';
												button.innerHTML = '关闭';
												button1.innerHTML = '卸下';
												clickAnimation(button);
												clickAnimation(button1);
												var btnName = {
													border: '1px solid #ccc',
													width: '70px',
													height: '30px',
													textAlign: 'center',
													lineHeight: '30px',
													outline: 'none',
													position: 'absolute',
													bottom: '10px',
													right: '10px',
													cursor: 'pointer',
												};
												for (var j in btnName) {
													button.style[j] = btnName[j];
													button1.style[j] = btnName[j];
													button2.style[j] = btnName[j];
												}
												button1.style.right = '90px';
												box.appendChild(button);
												box.appendChild(button1);
												button.addEventListener('click', function () {
													background1.delete();
													box.delete();
												});
												button1.link = this.link;
												button1.link1 = this.link1;
												button1.link_name = this.link_name;
												button1.addEventListener('click', function () {
													var item = lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`];
													var name = item.name;
													var subtype = item.subtype;
													var number = item.number;
													var ATK = item.ATK || 'none';
													var ATKx = item.ATKx || 'none';
													var DEF = item.DEF || 'none';
													var DEFx = item.DEFx || 'none';
													var CS = item.CS || 'none';
													var CSS = item.CSS || 'none';
													var maxHp = item.maxHp || 'none';
													var INF = item.INF || 'none';
													var RES = item.RES || 'none';
													game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
													lib.config[`${lib.config.thischaractername}_yuhunequip1`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip1', lib.config[`${lib.config.thischaractername}_yuhunequip1`]);
													lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip1_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`]);
													background1.delete();
													box.delete();
													game.dpcqCloseBag();
													setTimeout(function () {
														game.openCharacterList();
													}, 500);
												});
												var divx = ui.create.div('');
												divx.style.height = '50px';
												divx.style.width = '50px';
												divx.style.top = '10px';
												divx.style.right = '10px';
												divx.style.borderRadius = '5px';
												game.dpcqitem_changebg(this.link, divx);
												box.appendChild(divx);
												ui.window.appendChild(box);
											};
										}
										game.yuhunequip1.appendChild(div1);
									}
								}
								if (lib.config[`${lib.config.thischaractername}_yuhunequip2`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip2`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip2`] == undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip2', lib.config[`${lib.config.thischaractername}_yuhunequip2`]);
								}
								if (lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`] = undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip2_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`]);
								}
								game.yuhunequip2 = ui.create.div();
								game.yuhunequip2.style.height = 'calc(15%)';
								game.yuhunequip2.style.width = 'calc(13%)';
								game.yuhunequip2.style.left = 'calc(10%)';
								game.yuhunequip2.style.top = 'calc(40%)';
								game.yuhunequip2.style.borderRadius = '5px';
								game.yuhunequip2.style['text-align'] = 'left';
								game.yuhunequip2.style['overflow-x'] = 'hidden';
								game.yuhunequip2.style['overflow-y'] = 'scroll';
								lib.setScroll(game.yuhunequip2);
								game.yuhunproequip.appendChild(game.yuhunequip2);
								var info2 = ui.create.div('.menu');
								info2.style.transition = 'left 0s,top 0s,opacity .3s';
								info2.style.width = '312px';
								info2.style['pointer-events'] = 'none';
								info2.style['text-align'] = 'left';
								info2.style.animation = 'fadeShow .3s';
								info2.style['-webkit-animation'] = 'fadeShow .3s';
								info2.style['z-index'] = 499;
								game.yuhunequip2.info = info2;
								if (lib.config[`${lib.config.thischaractername}_yuhunequip2`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip2`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`] != undefined) {
									var num = 1;
									var list = [];
									var list1 = [];
									list.push(lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`]);
									var info = ui.create.div('.menu');
									info.style.transition = 'left 0s,top 0s,opacity .3s';
									info.style.width = '312px';
									info.style['pointer-events'] = 'none';
									info.style['text-align'] = 'left';
									info.style.animation = 'fadeShow .3s';
									info.style['-webkit-animation'] = 'fadeShow .3s';
									info.style['z-index'] = 499;
									dialog1.info = info;
									for (var i = 0; i < num; i++) {
										var div2 = ui.create.div('.card.fullskin');
										div2.style.height = '60px';
										div2.style.width = '60px';
										div2.style.top = '0px';
										if (lib.config[`${lib.config.thischaractername}_yuhunequip2`] && lib.config[`${lib.config.thischaractername}_yuhunequip2`] != undefined) div2.style.backgroundImage = `url(extension/斗破苍穹X阴阳师/jntx/${lib.config[`${lib.config.thischaractername}_yuhunequip2`]}.jpg)`;
										div2.style.backgroundSize = 'cover';
										div2.link = list[i];
										div2.link1 = list1[i];
										if (list[i] != undefined) {
											if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_showNum == true) {
												var div_name = ui.create.div();
												div_name.style.height = '10px';
												if (list[i].noBorder == true) {
													div_name.style.width = 'calc(100% - 1px)';
													div_name.style.bottom = '0px';
													div_name.style.right = '1px';
												} else {
													div_name.style.width = 'calc(100% - 3px)';
													div_name.style.bottom = '2px';
													div_name.style.right = '3px';
												}
												div_name.style['font-size'] = '10px';
												div_name.style['text-align'] = 'right';
												div_name.style['font-family'] = 'shousha';
												div_name.style.color = 'white';
												div_name.style['text-shadow'] = 'black 0 0 2px';
												div_name.innerHTML = `<span style="font-weight:600;">${lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`][list1[i]].num}</span>`;
												div2.appendChild(div_name);
												div2.link_name = div_name;
											}
											if (lib.device == undefined) {
												div2.onmouseover = function () {
													var item = this.link;
													info.innerHTML = game.dpcqitem_getStr2(item);
													ui.window.appendChild(info);
													info.hide();
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
													info.show();
												};
												div2.onmousemove = function () {
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
												};
												div2.onmouseout = function () {
													info.hide();
												};
											}
											div2.onclick = function () {
												if (lib.dpcq_dpcqbag[this.link.name] == undefined) {
													return;
												}
												var clickAnimation = function (div) {
													div2.style.transition = 'opacity 0.5s';
													div2.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
														this.style.transform = 'scale(0.95)';
													});
													div2.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
														this.style.transform = '';
													});
													div2.onmouseout = function () {
														this.style.transform = '';
													};
												};
												var item_div = this;
												var background1 = ui.create.dialog('hidden');
												background1.style.height = 'calc(100%)';
												background1.style.width = 'calc(100%)';
												background1.style.left = '0px';
												background1.style.top = '0px';
												background1.style.zIndex = '998';
												ui.window.appendChild(background1);
												var box = document.createElement('div');
												var button = document.createElement('div');
												var button1 = document.createElement('div');
												var button2 = document.createElement('div');
												var boxName = {
													width: '550px',
													display: 'table',
													background: 'rgba(0,0,0,0.4)',
													border: '2px solid black',
													position: 'absolute',
													top: 'calc(50% - 90px)',
													left: 'calc(50% - 275px)',
													zIndex: '999',
													textAlign: 'left',
													lineHeight: '21px',
													borderRadius: '3px',
													animation: 'fadeInDown .3s',
													'-webkit-animation': 'fadeInDown .3s',
												};
												for (var k in boxName) {
													box.style[k] = boxName[k];
												}
												document.body.appendChild(box);
												var item = this.link;
												box.innerHTML = game.dpcqitem_getStr(item, item.num) + '<br><br><br>';
												button.innerHTML = '关闭';
												button1.innerHTML = '卸下';
												clickAnimation(button);
												clickAnimation(button1);
												var btnName = {
													border: '1px solid #ccc',
													width: '70px',
													height: '30px',
													textAlign: 'center',
													lineHeight: '30px',
													outline: 'none',
													position: 'absolute',
													bottom: '10px',
													right: '10px',
													cursor: 'pointer',
												};
												for (var j in btnName) {
													button.style[j] = btnName[j];
													button1.style[j] = btnName[j];
													button2.style[j] = btnName[j];
												}
												button1.style.right = '90px';
												box.appendChild(button);
												box.appendChild(button1);
												button.addEventListener('click', function () {
													background1.delete();
													box.delete();
												});
												button1.link = this.link;
												button1.link1 = this.link1;
												button1.link_name = this.link_name;
												button1.addEventListener('click', function () {
													var item = lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`];
													var name = item.name;
													var subtype = item.subtype;
													var number = item.number;
													var ATK = item.ATK || 'none';
													var ATKx = item.ATKx || 'none';
													var DEF = item.DEF || 'none';
													var DEFx = item.DEFx || 'none';
													var CS = item.CS || 'none';
													var CSS = item.CSS || 'none';
													var maxHp = item.maxHp || 'none';
													var INF = item.INF || 'none';
													var RES = item.RES || 'none';
													game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
													lib.config[`${lib.config.thischaractername}_yuhunequip2`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip2', lib.config[`${lib.config.thischaractername}_yuhunequip2`]);
													lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip2_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`]);
													background1.delete();
													box.delete();
													game.dpcqCloseBag();
													setTimeout(function () {
														game.openCharacterList();
													}, 500);
												});
												var divx = ui.create.div('');
												divx.style.height = '50px';
												divx.style.width = '50px';
												divx.style.top = '10px';
												divx.style.right = '10px';
												divx.style.borderRadius = '5px';
												game.dpcqitem_changebg(this.link, divx);
												box.appendChild(divx);
												ui.window.appendChild(box);
											};
										}
										game.yuhunequip2.appendChild(div2);
									}
								}
								if (lib.config[`${lib.config.thischaractername}_yuhunequip3`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip3`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip3`] == undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip3', lib.config[`${lib.config.thischaractername}_yuhunequip3`]);
								}
								if (lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`] = undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip3_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`]);
								}
								game.yuhunequip3 = ui.create.div();
								game.yuhunequip3.style.height = 'calc(15%)';
								game.yuhunequip3.style.width = 'calc(13%)';
								game.yuhunequip3.style.left = 'calc(10%)';
								game.yuhunequip3.style.top = 'calc(70%)';
								game.yuhunequip3.style.borderRadius = '5px';
								game.yuhunequip3.style['text-align'] = 'left';
								game.yuhunequip3.style['overflow-x'] = 'hidden';
								game.yuhunequip3.style['overflow-y'] = 'scroll';
								lib.setScroll(game.yuhunequip3);
								game.yuhunproequip.appendChild(game.yuhunequip3);
								var info3 = ui.create.div('.menu');
								info3.style.transition = 'left 0s,top 0s,opacity .3s';
								info3.style.width = '312px';
								info3.style['pointer-events'] = 'none';
								info3.style['text-align'] = 'left';
								info3.style.animation = 'fadeShow .3s';
								info3.style['-webkit-animation'] = 'fadeShow .3s';
								info3.style['z-index'] = 499;
								game.yuhunequip3.info = info3;
								if (lib.config[`${lib.config.thischaractername}_yuhunequip3`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip3`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`] != undefined) {
									var num = 1;
									var list = [];
									var list1 = [];
									list.push(lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`]);
									var info = ui.create.div('.menu');
									info.style.transition = 'left 0s,top 0s,opacity .3s';
									info.style.width = '312px';
									info.style['pointer-events'] = 'none';
									info.style['text-align'] = 'left';
									info.style.animation = 'fadeShow .3s';
									info.style['-webkit-animation'] = 'fadeShow .3s';
									info.style['z-index'] = 499;
									dialog1.info = info;
									for (var i = 0; i < num; i++) {
										var div3 = ui.create.div('.card.fullskin');
										div3.style.height = '60px';
										div3.style.width = '60px';
										div3.style.top = '0px';
										if (lib.config[`${lib.config.thischaractername}_yuhunequip3`] && lib.config[`${lib.config.thischaractername}_yuhunequip3`] != undefined) div3.style.backgroundImage = `url(extension/斗破苍穹X阴阳师/jntx/${lib.config[`${lib.config.thischaractername}_yuhunequip3`]}.jpg)`;
										div3.style.backgroundSize = 'cover';
										div3.link = list[i];
										div3.link1 = list1[i];
										if (list[i] != undefined) {
											if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_showNum == true) {
												var div_name = ui.create.div();
												div_name.style.height = '10px';
												if (list[i].noBorder == true) {
													div_name.style.width = 'calc(100% - 1px)';
													div_name.style.bottom = '0px';
													div_name.style.right = '1px';
												} else {
													div_name.style.width = 'calc(100% - 3px)';
													div_name.style.bottom = '2px';
													div_name.style.right = '3px';
												}
												div_name.style['font-size'] = '10px';
												div_name.style['text-align'] = 'right';
												div_name.style['font-family'] = 'shousha';
												div_name.style.color = 'white';
												div_name.style['text-shadow'] = 'black 0 0 2px';
												div_name.innerHTML = `<span style="font-weight:600;">${lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`][list1[i]].num}</span>`;
												div3.appendChild(div_name);
												div3.link_name = div_name;
											}
											if (lib.device == undefined) {
												div3.onmouseover = function () {
													var item = this.link;
													info.innerHTML = game.dpcqitem_getStr2(item);
													ui.window.appendChild(info);
													info.hide();
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
													info.show();
												};
												div3.onmousemove = function () {
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
												};
												div3.onmouseout = function () {
													info.hide();
												};
											}
											div3.onclick = function () {
												if (lib.dpcq_dpcqbag[this.link.name] == undefined) {
													return;
												}
												var clickAnimation = function (div) {
													div3.style.transition = 'opacity 0.5s';
													div3.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
														this.style.transform = 'scale(0.95)';
													});
													div3.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
														this.style.transform = '';
													});
													div3.onmouseout = function () {
														this.style.transform = '';
													};
												};
												var item_div = this;
												var background1 = ui.create.dialog('hidden');
												background1.style.height = 'calc(100%)';
												background1.style.width = 'calc(100%)';
												background1.style.left = '0px';
												background1.style.top = '0px';
												background1.style.zIndex = '998';
												ui.window.appendChild(background1);
												var box = document.createElement('div');
												var button = document.createElement('div');
												var button1 = document.createElement('div');
												var button2 = document.createElement('div');
												var boxName = {
													width: '550px',
													display: 'table',
													background: 'rgba(0,0,0,0.4)',
													border: '2px solid black',
													position: 'absolute',
													top: 'calc(50% - 90px)',
													left: 'calc(50% - 275px)',
													zIndex: '999',
													textAlign: 'left',
													lineHeight: '21px',
													borderRadius: '3px',
													animation: 'fadeInDown .3s',
													'-webkit-animation': 'fadeInDown .3s',
												};
												for (var k in boxName) {
													box.style[k] = boxName[k];
												}
												document.body.appendChild(box);
												var item = this.link;
												box.innerHTML = game.dpcqitem_getStr(item, item.num) + '<br><br><br>';
												button.innerHTML = '关闭';
												button1.innerHTML = '卸下';
												clickAnimation(button);
												clickAnimation(button1);
												var btnName = {
													border: '1px solid #ccc',
													width: '70px',
													height: '30px',
													textAlign: 'center',
													lineHeight: '30px',
													outline: 'none',
													position: 'absolute',
													bottom: '10px',
													right: '10px',
													cursor: 'pointer',
												};
												for (var j in btnName) {
													button.style[j] = btnName[j];
													button1.style[j] = btnName[j];
													button2.style[j] = btnName[j];
												}
												button1.style.right = '90px';
												box.appendChild(button);
												box.appendChild(button1);
												button.addEventListener('click', function () {
													background1.delete();
													box.delete();
												});
												button1.link = this.link;
												button1.link1 = this.link1;
												button1.link_name = this.link_name;
												button1.addEventListener('click', function () {
													var item = lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`];
													var name = item.name;
													var subtype = item.subtype;
													var number = item.number;
													var ATK = item.ATK || 'none';
													var ATKx = item.ATKx || 'none';
													var DEF = item.DEF || 'none';
													var DEFx = item.DEFx || 'none';
													var CS = item.CS || 'none';
													var CSS = item.CSS || 'none';
													var maxHp = item.maxHp || 'none';
													var INF = item.INF || 'none';
													var RES = item.RES || 'none';
													game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
													lib.config[`${lib.config.thischaractername}_yuhunequip3`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip3', lib.config[`${lib.config.thischaractername}_yuhunequip3`]);
													lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip3_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`]);
													background1.delete();
													box.delete();
													game.dpcqCloseBag();
													setTimeout(function () {
														game.openCharacterList();
													}, 500);
												});
												var divx = ui.create.div('');
												divx.style.height = '50px';
												divx.style.width = '50px';
												divx.style.top = '10px';
												divx.style.right = '10px';
												divx.style.borderRadius = '5px';
												game.dpcqitem_changebg(this.link, divx);
												box.appendChild(divx);
												ui.window.appendChild(box);
											};
										}
										game.yuhunequip3.appendChild(div3);
									}
								}
								game.characterlist2 = ui.create
									.div('.menubutton.round', '', function () {
										ui.click.charactercard(lib.config.thischaractername);
									})
									.setBackground(name[x], 'character');
								game.characterlist2.style.backgroundSize = '100% 100%';
								game.characterlist2.style.height = 'calc(50%)';
								game.characterlist2.style.width = 'calc(30%)';
								game.characterlist2.style.left = 'calc(33%)';
								game.characterlist2.style.top = 'calc(25%)';
								game.characterlist2.style.borderRadius = '5px';
								game.characterlist2.style['text-align'] = 'left';
								game.characterlist2.style['overflow-x'] = 'hidden';
								game.characterlist2.style['overflow-y'] = 'scroll';
								lib.setScroll(game.characterlist2);
								game.yuhunproequip.appendChild(game.characterlist2);
								if (lib.config[`${lib.config.thischaractername}_yuhunequip4`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip4`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip4`] == undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip4', lib.config[`${lib.config.thischaractername}_yuhunequip4`]);
								}
								if (lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`] = undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip4_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`]);
								}
								game.yuhunequip4 = ui.create.div();
								game.yuhunequip4.style.height = 'calc(15%)';
								game.yuhunequip4.style.width = 'calc(13%)';
								game.yuhunequip4.style.right = 'calc(10%)';
								game.yuhunequip4.style.top = 'calc(70%)';
								game.yuhunequip4.style.borderRadius = '5px';
								game.yuhunequip4.style['text-align'] = 'left';
								game.yuhunequip4.style['overflow-x'] = 'hidden';
								game.yuhunequip4.style['overflow-y'] = 'scroll';
								lib.setScroll(game.yuhunequip4);
								game.yuhunproequip.appendChild(game.yuhunequip4);
								var info4 = ui.create.div('.menu');
								info4.style.transition = 'left 0s,top 0s,opacity .3s';
								info4.style.width = '312px';
								info4.style['pointer-events'] = 'none';
								info4.style['text-align'] = 'left';
								info4.style.animation = 'fadeShow .3s';
								info4.style['-webkit-animation'] = 'fadeShow .3s';
								info4.style['z-index'] = 499;
								game.yuhunequip4.info = info4;
								if (lib.config[`${lib.config.thischaractername}_yuhunequip4`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip4`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`] != undefined) {
									var num = 1;
									var list = [];
									var list1 = [];
									list.push(lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`]);
									var info = ui.create.div('.menu');
									info.style.transition = 'left 0s,top 0s,opacity .3s';
									info.style.width = '312px';
									info.style['pointer-events'] = 'none';
									info.style['text-align'] = 'left';
									info.style.animation = 'fadeShow .3s';
									info.style['-webkit-animation'] = 'fadeShow .3s';
									info.style['z-index'] = 499;
									dialog1.info = info;
									for (var i = 0; i < num; i++) {
										var div4 = ui.create.div('.card.fullskin');
										div4.style.height = '60px';
										div4.style.width = '60px';
										div4.style.top = '0px';
										if (lib.config[`${lib.config.thischaractername}_yuhunequip4`] && lib.config[`${lib.config.thischaractername}_yuhunequip4`] != undefined) div4.style.backgroundImage = `url(extension/斗破苍穹X阴阳师/jntx/${lib.config[`${lib.config.thischaractername}_yuhunequip4`]}.jpg)`;
										div4.style.backgroundSize = 'cover';
										div4.link = list[i];
										div4.link1 = list1[i];
										if (list[i] != undefined) {
											if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_showNum == true) {
												var div_name = ui.create.div();
												div_name.style.height = '10px';
												if (list[i].noBorder == true) {
													div_name.style.width = 'calc(100% - 1px)';
													div_name.style.bottom = '0px';
													div_name.style.right = '1px';
												} else {
													div_name.style.width = 'calc(100% - 3px)';
													div_name.style.bottom = '2px';
													div_name.style.right = '3px';
												}
												div_name.style['font-size'] = '10px';
												div_name.style['text-align'] = 'right';
												div_name.style['font-family'] = 'shousha';
												div_name.style.color = 'white';
												div_name.style['text-shadow'] = 'black 0 0 2px';
												div_name.innerHTML = `<span style="font-weight:600;">${lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`][list1[i]].num}</span>`;
												div4.appendChild(div_name);
												div4.link_name = div_name;
											}
											if (lib.device == undefined) {
												div4.onmouseover = function () {
													var item = this.link;
													info.innerHTML = game.dpcqitem_getStr2(item);
													ui.window.appendChild(info);
													info.hide();
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
													info.show();
												};
												div4.onmousemove = function () {
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
												};
												div4.onmouseout = function () {
													info.hide();
												};
											}
											div4.onclick = function () {
												if (lib.dpcq_dpcqbag[this.link.name] == undefined) {
													return;
												}
												var clickAnimation = function (div) {
													div4.style.transition = 'opacity 0.5s';
													div4.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
														this.style.transform = 'scale(0.95)';
													});
													div4.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
														this.style.transform = '';
													});
													div4.onmouseout = function () {
														this.style.transform = '';
													};
												};
												var item_div = this;
												var background1 = ui.create.dialog('hidden');
												background1.style.height = 'calc(100%)';
												background1.style.width = 'calc(100%)';
												background1.style.left = '0px';
												background1.style.top = '0px';
												background1.style.zIndex = '998';
												ui.window.appendChild(background1);
												var box = document.createElement('div');
												var button = document.createElement('div');
												var button1 = document.createElement('div');
												var button2 = document.createElement('div');
												var boxName = {
													width: '550px',
													display: 'table',
													background: 'rgba(0,0,0,0.4)',
													border: '2px solid black',
													position: 'absolute',
													top: 'calc(50% - 90px)',
													left: 'calc(50% - 275px)',
													zIndex: '999',
													textAlign: 'left',
													lineHeight: '21px',
													borderRadius: '3px',
													animation: 'fadeInDown .3s',
													'-webkit-animation': 'fadeInDown .3s',
												};
												for (var k in boxName) {
													box.style[k] = boxName[k];
												}
												document.body.appendChild(box);
												var item = this.link;
												box.innerHTML = game.dpcqitem_getStr(item, item.num) + '<br><br><br>';
												button.innerHTML = '关闭';
												button1.innerHTML = '卸下';
												clickAnimation(button);
												clickAnimation(button1);
												var btnName = {
													border: '1px solid #ccc',
													width: '70px',
													height: '30px',
													textAlign: 'center',
													lineHeight: '30px',
													outline: 'none',
													position: 'absolute',
													bottom: '10px',
													right: '10px',
													cursor: 'pointer',
												};
												for (var j in btnName) {
													button.style[j] = btnName[j];
													button1.style[j] = btnName[j];
													button2.style[j] = btnName[j];
												}
												button1.style.right = '90px';
												box.appendChild(button);
												box.appendChild(button1);
												button.addEventListener('click', function () {
													background1.delete();
													box.delete();
												});
												button1.link = this.link;
												button1.link1 = this.link1;
												button1.link_name = this.link_name;
												button1.addEventListener('click', function () {
													var item = lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`];
													var name = item.name;
													var subtype = item.subtype;
													var number = item.number;
													var ATK = item.ATK || 'none';
													var ATKx = item.ATKx || 'none';
													var DEF = item.DEF || 'none';
													var DEFx = item.DEFx || 'none';
													var CS = item.CS || 'none';
													var CSS = item.CSS || 'none';
													var maxHp = item.maxHp || 'none';
													var INF = item.INF || 'none';
													var RES = item.RES || 'none';
													game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
													lib.config[`${lib.config.thischaractername}_yuhunequip4`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip4', lib.config[`${lib.config.thischaractername}_yuhunequip4`]);
													lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip4_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`]);
													background1.delete();
													box.delete();
													game.dpcqCloseBag();
													setTimeout(function () {
														game.openCharacterList();
													}, 500);
												});
												var divx = ui.create.div('');
												divx.style.height = '50px';
												divx.style.width = '50px';
												divx.style.top = '10px';
												divx.style.right = '10px';
												divx.style.borderRadius = '5px';
												game.dpcqitem_changebg(this.link, divx);
												box.appendChild(divx);
												ui.window.appendChild(box);
											};
										}
										game.yuhunequip4.appendChild(div4);
									}
								}
								if (lib.config[`${lib.config.thischaractername}_yuhunequip5`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip5`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip5`] == undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip5', lib.config[`${lib.config.thischaractername}_yuhunequip5`]);
								}
								if (lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`] = undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip5_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`]);
								}
								game.yuhunequip5 = ui.create.div();
								game.yuhunequip5.style.height = 'calc(15%)';
								game.yuhunequip5.style.width = 'calc(13%)';
								game.yuhunequip5.style.right = 'calc(10%)';
								game.yuhunequip5.style.top = 'calc(40%)';
								game.yuhunequip5.style.borderRadius = '5px';
								game.yuhunequip5.style['text-align'] = 'left';
								game.yuhunequip5.style['overflow-x'] = 'hidden';
								game.yuhunequip5.style['overflow-y'] = 'scroll';
								lib.setScroll(game.yuhunequip5);
								game.yuhunproequip.appendChild(game.yuhunequip5);
								var info5 = ui.create.div('.menu');
								info5.style.transition = 'left 0s,top 0s,opacity .3s';
								info5.style.width = '312px';
								info5.style['pointer-events'] = 'none';
								info5.style['text-align'] = 'left';
								info5.style.animation = 'fadeShow .3s';
								info5.style['-webkit-animation'] = 'fadeShow .3s';
								info5.style['z-index'] = 499;
								game.yuhunequip5.info = info5;
								if (lib.config[`${lib.config.thischaractername}_yuhunequip5`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip5`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`] != undefined) {
									var num = 1;
									var list = [];
									var list1 = [];
									list.push(lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`]);
									var info = ui.create.div('.menu');
									info.style.transition = 'left 0s,top 0s,opacity .3s';
									info.style.width = '312px';
									info.style['pointer-events'] = 'none';
									info.style['text-align'] = 'left';
									info.style.animation = 'fadeShow .3s';
									info.style['-webkit-animation'] = 'fadeShow .3s';
									info.style['z-index'] = 499;
									dialog1.info = info;
									for (var i = 0; i < num; i++) {
										var div5 = ui.create.div('.card.fullskin');
										div5.style.height = '60px';
										div5.style.width = '60px';
										div5.style.top = '0px';
										if (lib.config[`${lib.config.thischaractername}_yuhunequip5`] && lib.config[`${lib.config.thischaractername}_yuhunequip5`] != undefined) div5.style.backgroundImage = `url(extension/斗破苍穹X阴阳师/jntx/${lib.config[`${lib.config.thischaractername}_yuhunequip5`]}.jpg)`;
										div5.style.backgroundSize = 'cover';
										div5.link = list[i];
										div5.link1 = list1[i];
										if (list[i] != undefined) {
											if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_showNum == true) {
												var div_name = ui.create.div();
												div_name.style.height = '10px';
												if (list[i].noBorder == true) {
													div_name.style.width = 'calc(100% - 1px)';
													div_name.style.bottom = '0px';
													div_name.style.right = '1px';
												} else {
													div_name.style.width = 'calc(100% - 3px)';
													div_name.style.bottom = '2px';
													div_name.style.right = '3px';
												}
												div_name.style['font-size'] = '10px';
												div_name.style['text-align'] = 'right';
												div_name.style['font-family'] = 'shousha';
												div_name.style.color = 'white';
												div_name.style['text-shadow'] = 'black 0 0 2px';
												div_name.innerHTML = `<span style="font-weight:600;">${lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`][list1[i]].num}</span>`;
												div5.appendChild(div_name);
												div5.link_name = div_name;
											}
											if (lib.device == undefined) {
												div5.onmouseover = function () {
													var item = this.link;
													info.innerHTML = game.dpcqitem_getStr2(item);
													ui.window.appendChild(info);
													info.hide();
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
													info.show();
												};
												div5.onmousemove = function () {
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
												};
												div5.onmouseout = function () {
													info.hide();
												};
											}
											div5.onclick = function () {
												if (lib.dpcq_dpcqbag[this.link.name] == undefined) {
													return;
												}
												var clickAnimation = function (div) {
													div5.style.transition = 'opacity 0.5s';
													div5.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
														this.style.transform = 'scale(0.95)';
													});
													div5.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
														this.style.transform = '';
													});
													div5.onmouseout = function () {
														this.style.transform = '';
													};
												};
												var item_div = this;
												var background1 = ui.create.dialog('hidden');
												background1.style.height = 'calc(100%)';
												background1.style.width = 'calc(100%)';
												background1.style.left = '0px';
												background1.style.top = '0px';
												background1.style.zIndex = '998';
												ui.window.appendChild(background1);
												var box = document.createElement('div');
												var button = document.createElement('div');
												var button1 = document.createElement('div');
												var button2 = document.createElement('div');
												var boxName = {
													width: '550px',
													display: 'table',
													background: 'rgba(0,0,0,0.4)',
													border: '2px solid black',
													position: 'absolute',
													top: 'calc(50% - 90px)',
													left: 'calc(50% - 275px)',
													zIndex: '999',
													textAlign: 'left',
													lineHeight: '21px',
													borderRadius: '3px',
													animation: 'fadeInDown .3s',
													'-webkit-animation': 'fadeInDown .3s',
												};
												for (var k in boxName) {
													box.style[k] = boxName[k];
												}
												document.body.appendChild(box);
												var item = this.link;
												box.innerHTML = game.dpcqitem_getStr(item, item.num) + '<br><br><br>';
												button.innerHTML = '关闭';
												button1.innerHTML = '卸下';
												clickAnimation(button);
												clickAnimation(button1);
												var btnName = {
													border: '1px solid #ccc',
													width: '70px',
													height: '30px',
													textAlign: 'center',
													lineHeight: '30px',
													outline: 'none',
													position: 'absolute',
													bottom: '10px',
													right: '10px',
													cursor: 'pointer',
												};
												for (var j in btnName) {
													button.style[j] = btnName[j];
													button1.style[j] = btnName[j];
													button2.style[j] = btnName[j];
												}
												button1.style.right = '90px';
												box.appendChild(button);
												box.appendChild(button1);
												button.addEventListener('click', function () {
													background1.delete();
													box.delete();
												});
												button1.link = this.link;
												button1.link1 = this.link1;
												button1.link_name = this.link_name;
												button1.addEventListener('click', function () {
													var item = lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`];
													var name = item.name;
													var subtype = item.subtype;
													var number = item.number;
													var ATK = item.ATK || 'none';
													var ATKx = item.ATKx || 'none';
													var DEF = item.DEF || 'none';
													var DEFx = item.DEFx || 'none';
													var CS = item.CS || 'none';
													var CSS = item.CSS || 'none';
													var maxHp = item.maxHp || 'none';
													var INF = item.INF || 'none';
													var RES = item.RES || 'none';
													game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
													lib.config[`${lib.config.thischaractername}_yuhunequip5`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip5', lib.config[`${lib.config.thischaractername}_yuhunequip5`]);
													lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip5_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`]);
													background1.delete();
													box.delete();
													game.dpcqCloseBag();
													setTimeout(function () {
														game.openCharacterList();
													}, 500);
												});
												var divx = ui.create.div('');
												divx.style.height = '50px';
												divx.style.width = '50px';
												divx.style.top = '10px';
												divx.style.right = '10px';
												divx.style.borderRadius = '5px';
												game.dpcqitem_changebg(this.link, divx);
												box.appendChild(divx);
												ui.window.appendChild(box);
											};
										}
										game.yuhunequip5.appendChild(div5);
									}
								}
								if (lib.config[`${lib.config.thischaractername}_yuhunequip6`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip6`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip6`] == undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip6', lib.config[`${lib.config.thischaractername}_yuhunequip6`]);
								}
								if (lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`].length > 1) {
									lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`] = undefined;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip6_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`]);
								}
								game.yuhunequip6 = ui.create.div();
								game.yuhunequip6.style.height = 'calc(15%)';
								game.yuhunequip6.style.width = 'calc(13%)';
								game.yuhunequip6.style.right = 'calc(10%)';
								game.yuhunequip6.style.top = 'calc(10%)';
								game.yuhunequip6.style.borderRadius = '5px';
								game.yuhunequip6.style['text-align'] = 'left';
								game.yuhunequip6.style['overflow-x'] = 'hidden';
								game.yuhunequip6.style['overflow-y'] = 'scroll';
								lib.setScroll(game.yuhunequip6);
								game.yuhunproequip.appendChild(game.yuhunequip6);
								var info6 = ui.create.div('.menu');
								info6.style.transition = 'left 0s,top 0s,opacity .3s';
								info6.style.width = '312px';
								info6.style['pointer-events'] = 'none';
								info6.style['text-align'] = 'left';
								info6.style.animation = 'fadeShow .3s';
								info6.style['-webkit-animation'] = 'fadeShow .3s';
								info6.style['z-index'] = 499;
								game.yuhunequip6.info = info6;
								if (lib.config[`${lib.config.thischaractername}_yuhunequip6`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip6`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`] != undefined) {
									var num = 1;
									var list = [];
									var list1 = [];
									list.push(lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`]);
									var info = ui.create.div('.menu');
									info.style.transition = 'left 0s,top 0s,opacity .3s';
									info.style.width = '312px';
									info.style['pointer-events'] = 'none';
									info.style['text-align'] = 'left';
									info.style.animation = 'fadeShow .3s';
									info.style['-webkit-animation'] = 'fadeShow .3s';
									info.style['z-index'] = 499;
									dialog1.info = info;
									for (var i = 0; i < num; i++) {
										var div6 = ui.create.div('.card.fullskin');
										div6.style.height = '60px';
										div6.style.width = '60px';
										div6.style.top = '0px';
										if (lib.config[`${lib.config.thischaractername}_yuhunequip6`] && lib.config[`${lib.config.thischaractername}_yuhunequip6`] != undefined) div6.style.backgroundImage = `url(extension/斗破苍穹X阴阳师/jntx/${lib.config[`${lib.config.thischaractername}_yuhunequip6`]}.jpg)`;
										div6.style.backgroundSize = 'cover';
										div6.link = list[i];
										div6.link1 = list1[i];
										if (list[i] != undefined) {
											if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_showNum == true) {
												var div_name = ui.create.div();
												div_name.style.height = '10px';
												if (list[i].noBorder == true) {
													div_name.style.width = 'calc(100% - 1px)';
													div_name.style.bottom = '0px';
													div_name.style.right = '1px';
												} else {
													div_name.style.width = 'calc(100% - 3px)';
													div_name.style.bottom = '2px';
													div_name.style.right = '3px';
												}
												div_name.style['font-size'] = '10px';
												div_name.style['text-align'] = 'right';
												div_name.style['font-family'] = 'shousha';
												div_name.style.color = 'white';
												div_name.style['text-shadow'] = 'black 0 0 2px';
												div_name.innerHTML = `<span style="font-weight:600;">${lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`][list1[i]].num}</span>`;
												div6.appendChild(div_name);
												div6.link_name = div_name;
											}
											if (lib.device == undefined) {
												div6.onmouseover = function () {
													var item = this.link;
													info.innerHTML = game.dpcqitem_getStr2(item);
													ui.window.appendChild(info);
													info.hide();
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
													info.show();
												};
												div6.onmousemove = function () {
													info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
													if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
														info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
													}
												};
												div6.onmouseout = function () {
													info.hide();
												};
											}
											div6.onclick = function () {
												if (lib.dpcq_dpcqbag[this.link.name] == undefined) {
													return;
												}
												var clickAnimation = function (div) {
													div6.style.transition = 'opacity 0.5s';
													div6.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
														this.style.transform = 'scale(0.95)';
													});
													div6.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
														this.style.transform = '';
													});
													div6.onmouseout = function () {
														this.style.transform = '';
													};
												};
												var item_div = this;
												var background1 = ui.create.dialog('hidden');
												background1.style.height = 'calc(100%)';
												background1.style.width = 'calc(100%)';
												background1.style.left = '0px';
												background1.style.top = '0px';
												background1.style.zIndex = '998';
												ui.window.appendChild(background1);
												var box = document.createElement('div');
												var button = document.createElement('div');
												var button1 = document.createElement('div');
												var button2 = document.createElement('div');
												var boxName = {
													width: '550px',
													display: 'table',
													background: 'rgba(0,0,0,0.4)',
													border: '2px solid black',
													position: 'absolute',
													top: 'calc(50% - 90px)',
													left: 'calc(50% - 275px)',
													zIndex: '999',
													textAlign: 'left',
													lineHeight: '21px',
													borderRadius: '3px',
													animation: 'fadeInDown .3s',
													'-webkit-animation': 'fadeInDown .3s',
												};
												for (var k in boxName) {
													box.style[k] = boxName[k];
												}
												document.body.appendChild(box);
												var item = this.link;
												box.innerHTML = game.dpcqitem_getStr(item, item.num) + '<br><br><br>';
												button.innerHTML = '关闭';
												button1.innerHTML = '卸下';
												clickAnimation(button);
												clickAnimation(button1);
												var btnName = {
													border: '1px solid #ccc',
													width: '70px',
													height: '30px',
													textAlign: 'center',
													lineHeight: '30px',
													outline: 'none',
													position: 'absolute',
													bottom: '10px',
													right: '10px',
													cursor: 'pointer',
												};
												for (var j in btnName) {
													button.style[j] = btnName[j];
													button1.style[j] = btnName[j];
													button2.style[j] = btnName[j];
												}
												button1.style.right = '90px';
												box.appendChild(button);
												box.appendChild(button1);
												button.addEventListener('click', function () {
													background1.delete();
													box.delete();
												});
												button1.link = this.link;
												button1.link1 = this.link1;
												button1.link_name = this.link_name;
												button1.addEventListener('click', function () {
													var item = lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`];
													var name = item.name;
													var subtype = item.subtype;
													var number = item.number;
													var ATK = item.ATK || 'none';
													var ATKx = item.ATKx || 'none';
													var DEF = item.DEF || 'none';
													var DEFx = item.DEFx || 'none';
													var CS = item.CS || 'none';
													var CSS = item.CSS || 'none';
													var maxHp = item.maxHp || 'none';
													var INF = item.INF || 'none';
													var RES = item.RES || 'none';
													game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
													lib.config[`${lib.config.thischaractername}_yuhunequip6`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip6', lib.config[`${lib.config.thischaractername}_yuhunequip6`]);
													lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`] = undefined;
													game.saveConfig(lib.config.thischaractername + '_yuhunequip6_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`]);
													background1.delete();
													box.delete();
													game.dpcqCloseBag();
													setTimeout(function () {
														game.openCharacterList();
													}, 500);
												});
												var divx = ui.create.div('');
												divx.style.height = '50px';
												divx.style.width = '50px';
												divx.style.top = '10px';
												divx.style.right = '10px';
												divx.style.borderRadius = '5px';
												game.dpcqitem_changebg(this.link, divx);
												box.appendChild(divx);
												ui.window.appendChild(box);
											};
										}
										game.yuhunequip6.appendChild(div6);
									}
								}
								var yuhunIntroduce = ui.create.div();
								yuhunIntroduce.style.height = 'calc(25%)';
								yuhunIntroduce.style.width = 'calc(40%)';
								yuhunIntroduce.style.left = 'calc(32%)';
								yuhunIntroduce.style.top = 'calc(72%)';
								yuhunIntroduce.style.borderRadius = '5px';
								yuhunIntroduce.style.backgroundColor = '#FFFFFF';
								yuhunIntroduce.innerHTML = '御魂介绍:';
								var yhlist = [];
								for (var i = 1; i < 7; i++) {
									if (lib.config[`${lib.config.thischaractername}_yuhunequip${i}`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`] != undefined) {
										var yhname = lib.config[`${lib.config.thischaractername}_yuhunequip${i}_yuhun`].name;
										yhlist.push(yhname);
									}
								}
								if (yhlist.length) {
									var max = 1;
									var time = 1;
									var most = '';
									for (var i = 0; i < yhlist.length; i++) {
										for (var b = i + 1; b < yhlist.length; b++) {
											if (yhlist[b] == yhlist[i]) {
												time++;
											}
										}
										if (max < time) {
											max = time;
											var most = yhlist[i];
										}
										time = 1;
									}
								}
								if (max >= 4) {
									yuhunIntroduce.innerHTML += '<br>' + lib.dpcq_dpcqbag[most].info;
								} else {
									yuhunIntroduce.innerHTML += '暂无套装效果!';
								}
								yuhunIntroduce.style['text-align'] = 'left';
								yuhunIntroduce.style['overflow-x'] = 'hidden';
								yuhunIntroduce.style['overflow-y'] = 'scroll';
								lib.setScroll(yuhunIntroduce);
								background.appendChild(yuhunIntroduce);
								var characterBag = ui.create.div();
								characterBag.style.height = 'calc(97%)';
								characterBag.style.width = 'calc(20%)';
								characterBag.style.left = 'calc(75%)';
								characterBag.style.top = 'calc(10%)';
								characterBag.style.borderRadius = '5px';
								characterBag.style['text-align'] = 'left';
								characterBag.style['overflow-x'] = 'hidden';
								characterBag.style['overflow-y'] = 'scroll';
								lib.setScroll(characterBag);
								background.appendChild(characterBag);
								var num = 0;
								var list = [];
								var list1 = [];
								for (var i in lib.config.dpcq_dpcqbag) {
									list.push(lib.config.dpcq_dpcqbag[i]);
									lib.config.dpcq_dpcqbag[i].click = false;
									list1.push(i);
									num++;
								}
								var info = ui.create.div('.menu');
								info.style.transition = 'left 0s,top 0s,opacity .3s';
								info.style.width = '312px';
								info.style['pointer-events'] = 'none';
								info.style['text-align'] = 'left';
								info.style.animation = 'fadeShow .3s';
								info.style['-webkit-animation'] = 'fadeShow .3s';
								info.style['z-index'] = 499;
								dialog1.info = info;
								for (var i = 0; i < num; i++) {
									var div = ui.create.div('.card.fullskin');
									div.style.height = '50px';
									div.style.width = '50px';
									div.style.top = '-8px';
									div.style.borderRadius = '5px';
									game.dpcqitem_changebg(list[i], div);
									div.link = list[i];
									div.link1 = list1[i];
									if (list[i] != undefined) {
										if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_showNum == true) {
											var div_name = ui.create.div();
											div_name.style.height = '10px';
											if (list[i].noBorder == true) {
												div_name.style.width = 'calc(100% - 1px)';
												div_name.style.bottom = '0px';
												div_name.style.right = '1px';
											} else {
												div_name.style.width = 'calc(100% - 3px)';
												div_name.style.bottom = '2px';
												div_name.style.right = '3px';
											}
											div_name.style['font-size'] = '10px';
											div_name.style['text-align'] = 'right';
											div_name.style['font-family'] = 'shousha';
											div_name.style.color = 'white';
											div_name.style['text-shadow'] = 'black 0 0 2px';
											div_name.innerHTML = `<span style="font-weight:600;">${lib.config.dpcq_dpcqbag[list1[i]].num}</span>`;
											div.appendChild(div_name);
											div.link_name = div_name;
										}
										if (lib.device == undefined) {
											div.onmouseover = function () {
												var item = this.link;
												info.innerHTML = game.dpcqitem_getStr(item, item.num);
												ui.window.appendChild(info);
												info.hide();
												info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
												info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
												if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
												}
												info.show();
											};
											div.onmousemove = function () {
												info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
												info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
												if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
													info.style.top = event.clientY / game.documentZoom + document.body.scrollTop - info.offsetHeight + 'px';
												}
											};
											div.onmouseout = function () {
												info.hide();
											};
										}
										div.onclick = function () {
											if (lib.dpcq_dpcqbag[this.link.name] == undefined) {
												return;
											}
											var clickAnimation = function (div) {
												div.style.transition = 'opacity 0.5s';
												div.addEventListener(lib.config.touchscreen ? 'touchstart' : 'mousedown', function () {
													this.style.transform = 'scale(0.95)';
												});
												div.addEventListener(lib.config.touchscreen ? 'touchend' : 'mouseup', function () {
													this.style.transform = '';
												});
												div.onmouseout = function () {
													this.style.transform = '';
												};
											};
											var item_div = this;
											var background1 = ui.create.dialog('hidden');
											background1.style.height = 'calc(100%)';
											background1.style.width = 'calc(100%)';
											background1.style.left = '0px';
											background1.style.top = '0px';
											background1.style.zIndex = '998';
											ui.window.appendChild(background1);
											var box = document.createElement('div');
											var button = document.createElement('div');
											var button1 = document.createElement('div');
											var button2 = document.createElement('div');
											var boxName = {
												width: '550px',
												display: 'table',
												background: 'rgba(0,0,0,0.4)',
												border: '2px solid black',
												position: 'absolute',
												top: 'calc(50% - 90px)',
												left: 'calc(50% - 275px)',
												zIndex: '999',
												textAlign: 'left',
												lineHeight: '21px',
												borderRadius: '3px',
												animation: 'fadeInDown .3s',
												'-webkit-animation': 'fadeInDown .3s',
											};
											for (var k in boxName) {
												box.style[k] = boxName[k];
											}
											document.body.appendChild(box);
											var item = this.link;
											box.innerHTML = game.dpcqitem_getStr(item, item.num) + '<br><br><br>';
											button.innerHTML = '关闭';
											button1.innerHTML = '使用';
											button2.innerHTML = '丢弃';
											clickAnimation(button);
											clickAnimation(button1);
											clickAnimation(button2);
											var btnName = {
												border: '1px solid #ccc',
												width: '70px',
												height: '30px',
												textAlign: 'center',
												lineHeight: '30px',
												outline: 'none',
												position: 'absolute',
												bottom: '10px',
												right: '10px',
												cursor: 'pointer',
											};
											for (var j in btnName) {
												button.style[j] = btnName[j];
												button1.style[j] = btnName[j];
												button2.style[j] = btnName[j];
											}
											button1.style.right = '90px';
											box.appendChild(button);
											var bool2 = false;
											if (lib.dpcq_dpcqbag[this.link.name].func != undefined) bool2 = true;
											if (lib.dpcq_dpcqbag[this.link.name].func == undefined && lib.config.dpcq_dpcqbag[this.link1].ext_func != undefined) bool2 = true;
											if (bool2) {
												box.appendChild(button1);
												button2.style.right = '170px';
											} else {
												button2.style.right = '90px';
											}
											box.appendChild(button2);
											button.addEventListener('click', function () {
												var item = this.link;
												if (item && item.click == true) item.click = false;
												background1.delete();
												box.delete();
											});
											button1.link = this.link;
											button1.link1 = this.link1;
											button1.link_name = this.link_name;
											button1.addEventListener('click', function () {
												var bool = false;
												var item = this.link;
												item.click = true;
												if (item.ext_func == undefined) {
													var func = lib.dpcq_dpcqbag[item.name].func;
													var func2 = lib.dpcq_dpcqbag[item.name].func2;
												} else {
													var func = lib.config.dpcq_dpcqbag[this.link1].ext_func;
													var func2 = lib.dpcq_dpcqbag[item.name].func2;
												}
												if (func == undefined) return;
												if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_noTips == true) {
													if (typeof func == 'function') {
														func();
													} else {
														eval(func);
													}
												} else {
													if (confirm(`是否使用${get.translation(item.name)}?`)) {
														if (typeof func == 'function') {
															func();
														} else {
															eval(func);
														}
														background1.delete();
														box.delete();
													} else {
														return;
													}
												}
												if (item.prop_num != undefined && b != undefined && this != undefined) {
													game.dpcqloseItem2(this.link1, item.prop_num);
													if (lib.config.dpcq_dpcqbag[this.link1] == undefined) {
														b.removeChild(item_div);
														background1.delete();
														box.delete();
													} else {
														if (this.link_name != undefined) this.link_name.innerHTML = `<span style="font-weight:600;">${lib.config.dpcq_dpcqbag[this.link1].num}</span>`;
													}
												}
											});
											button2.link = this.link;
											button2.link1 = this.link1;
											button2.addEventListener('click', function () {
												var item = this.link;
												var bool = false;
												if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_noTips1 == true) {
													bool = true;
												} else {
													if (confirm(`是否丢弃${get.translation(item.name)}?`)) {
														bool = true;
													}
												}
												if (bool == true) {
													delete lib.config.dpcq_dpcqbag[this.link1];
													game.saveConfig('dpcq_dpcqbag', lib.config.dpcq_dpcqbag);
													b.removeChild(item_div);
													background1.delete();
													box.delete();
												}
											});
											var divw = ui.create.div('');
											divw.style.height = '50px';
											divw.style.width = '50px';
											divw.style.top = '10px';
											divw.style.right = '10px';
											divw.style.borderRadius = '5px';
											game.dpcqitem_changebg(this.link, divw);
											box.appendChild(divw);
											ui.window.appendChild(box);
										};
									}
									characterBag.appendChild(div);
								}
							}
						}
						for (var j = 0; j < b1.childNodes.length; j++) {
							b1.childNodes[j].style.backgroundColor = '';
						}
						this.style.backgroundColor = '#E00000';
					};
					var div = ui.create.div('', `<span style="cursor:pointer;color: #FFFFFF;">${get.translation(name[i])}</span>`, game[name[i]]);
					div.style['font-size'] = '20px';
					//div.style['line-height']='40px';
					div.style['font-family'] = "'STXinwei','xinwei'";
					div.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					div.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
					div.style['white-space'] = 'nowrap';
					div.style.cursor = 'pointer';
					div.style.height = '5%';
					div.style.width = '100%';
					div.style.top = '0px';
					div.style.left = '0px';
					div.style.borderRadius = '8px';
					div.style.position = 'relative';
					div.style['margin-top'] = '5px';
					div.style['text-align'] = 'center';
					div.link = 'all';
					b1.appendChild(div);
				}
				var div = ui.create.div();
				div.style.height = '100%';
				div.style.width = '100%';
				div.style.left = '0px';
				div.style.top = '0px';
				var func1 = function () {
					if (lib.config.extension_斗破苍穹X阴阳师_dpcqbag_stop != false && _status.dpcq_intro_showDialogs == undefined) game.resume2();
					for (var i in dialog1) {
						dialog1[i].delete();
						delete dialog1[i];
					}
					delete game.closeBag;
					if (_status.dpcq_intro_showDialogs != undefined) _status.dpcq_intro_showDialogs();
				};
				game.dpcqCloseBag = func1;
				setTimeout(function () {
					div.onclick = function () {
						func1();
					};
				}, 750);
				background.appendChild(div);
				var div = ui.create.div('.menubutton.round', '×', function () {
					func1();
				});
				div.style.top = '5px';
				div.style.left = 'calc(100% - 55px)';
				div.style.zIndex = 1000;
				background.appendChild(div);
				game.closeBag = func1;
			};
			game.dpcqclearItems = function () {
				game.saveConfig('dpcq_dpcqbag', {});
			};
			game.dpcqitem_changebg = function (item, div) {
				if (item != undefined && item.useStr != true) {
					if (item.noBorder == true) {
						if (item.imgURL != undefined) {
							div.style.backgroundImage = `url("${item.imgURL}")`;
						} else {
							div.style.backgroundImage = `url(extension/斗破苍穹X阴阳师/jntx/item.jpg),url("${lib.dpcq_dpcqbag[item.name].image}")`;
						}
					} else if (item.character) {
						div.setBackground(item.character, 'character');
						if (item.noBorder != true) {
							var str = div.style.backgroundImage;
							str = `url(extension/斗破苍穹X阴阳师/jntx/item.jpg),` + str;
							div.style.backgroundImage = str;
						}
					} else {
						if (item.imgURL != undefined) {
							div.style.backgroundImage = `url(extension/斗破苍穹X阴阳师/jntx/item.jpg),url("${item.imgURL}")`;
						} else {
							div.style.backgroundImage = `url(extension/斗破苍穹X阴阳师/jntx/item.jpg),url("${lib.dpcq_dpcqbag[item.name].image}")`;
						}
					}
				} else {
					div.style.backgroundImage = `url(extension/斗破苍穹X阴阳师/jntx/item.jpg)`;
					if (item != undefined) div.innerHTML = get.translation(item.name);
				}
				div.style.backgroundSize = 'cover';
			};
			game.dpcqitem_getStr = function (item, num) {
				if (item != undefined) {
					var info2 = '<br>可叠加';
					if (item.canLay == false) info2 = '<br>不可叠加';
					if (item.canLay == 'none') info2 = '';
					var info1 = '';
					if (item.ext_info != undefined) {
						info1 = item.ext_info;
					} else if (item.info != undefined) {
						info1 = item.info;
					} else if (lib.dpcq_dpcqbag[item.name] != undefined) {
						if (lib.dpcq_dpcqbag[item.name].info != undefined) {
							info1 = lib.dpcq_dpcqbag[item.name].info;
						} else {
							info1 = 'No Data';
						}
					}
					var str = '';
					str += `<span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">${get.translation(item.ext_name ? item.ext_name : item.name)}</span>` + info2;
					if (item.natureInfo != undefined) str += `<span style="font-family:shousha;"><span style="font-size:18px;font-weight:600"><br>御魂星级:${item.number || '未知'}</span>`;
					if (item.subtype && item.subtype != undefined) str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">类型:${get.translation(item.subtype)}</span>`;
					if (num != undefined && num != '') str += '<br>数量:' + num;
					if (item.hg_base != undefined && item.hg_max != undefined) {
						str += `<br>觉醒度:${item.hg_base}/` + item.hg_max;
					}
					if (item.subtype && item.subtype.includes('yuhun')) {
						str += '<br><li><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">属性:</span>';
						if (item.ATK && typeof item.ATK == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">攻击&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+${item.ATK}</span>`;
						}
						if (item.ATKx && typeof item.ATKx == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">攻击加成&nbsp&nbsp+${item.ATKx}%</span>`;
						}
						if (item.DEF && typeof item.DEF == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">防御&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+${item.DEF}</span>`;
						}
						if (item.DEFx && typeof item.DEFx == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">防御加成&nbsp&nbsp+${item.DEFx}%</span>`;
						}
						if (item.CS && typeof item.CS == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">暴击&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+${item.CS}%</span>`;
						}
						if (item.CSS && typeof item.CSS == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">暴击伤害&nbsp&nbsp+${item.CSS}%</span>`;
						}
						if (item.maxHp && typeof item.maxHp == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">生命&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+${item.maxHp}%</span>`;
						}
						if (item.INF && typeof item.INF == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">效果命中&nbsp&nbsp+${item.INF}%</span>`;
						}
						if (item.RES && typeof item.RES == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">效果抵抗&nbsp&nbsp+${item.RES}%</span>`;
						}
					}
					str += `<br>简介:<br>&nbsp&nbsp${info1}</span>`;
					return str;
				} else {
					return 'No Data';
				}
			};
			game.dpcqitem_getStr2 = function (item) {
				if (!item || item == undefined) {
					return;
				}
				if (item != undefined) {
					var info1 = '';
					if (item.ext_info != undefined) {
						info1 = item.ext_info;
					} else if (item.info != undefined) {
						info1 = item.info;
					} else if (lib.dpcq_dpcqbag[item.name] != undefined) {
						if (lib.dpcq_dpcqbag[item.name].info != undefined) {
							info1 = lib.dpcq_dpcqbag[item.name].info;
						} else {
							info1 = 'No Data';
						}
					}
					var str = '';
					str += `<span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">${get.translation(item.ext_name ? item.ext_name : item.name)}</span>`;
					str += `<span style="font-family:shousha;"><span style="font-size:18px;font-weight:600"><br>御魂星级:${item.number || '未知'}</span>`;
					if (item.subtype && item.subtype != undefined) str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">御魂类型:${get.translation(item.subtype)}</span>`;
					if (item.subtype && item.subtype.includes('yuhun')) {
						str += '<br><li><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">属性:</span>';
						if (item.ATK && typeof item.ATK == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">攻击&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+${item.ATK}</span>`;
						}
						if (item.ATKx && typeof item.ATKx == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">攻击加成&nbsp&nbsp+${item.ATKx}%</span>`;
						}
						if (item.DEF && typeof item.DEF == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">防御&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+${item.DEF}</span>`;
						}
						if (item.DEFx && typeof item.DEFx == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">防御加成&nbsp&nbsp+${item.DEFx}%</span>`;
						}
						if (item.CS && typeof item.CS == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">暴击&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+${item.CS}%</span>`;
						}
						if (item.CSS && typeof item.CSS == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">暴击伤害&nbsp&nbsp+${item.CSS}%</span>`;
						}
						if (item.maxHp && typeof item.maxHp == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">生命&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp+${item.maxHp}%</span>`;
						}
						if (item.INF && typeof item.INF == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">效果命中&nbsp&nbsp+${item.INF}%</span>`;
						}
						if (item.RES && typeof item.RES == 'number') {
							str += `<br><span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">效果抵抗&nbsp&nbsp+${item.RES}%</span>`;
						}
					}
					str += `<br>简介:<br>&nbsp&nbsp${info1}</span>`;
					return str;
				} else {
					return 'No Data';
				}
			};
			if (lib.config.dpcq_dpcqbag_num == undefined) game.saveConfig('dpcq_dpcqbag_num', 0);
			if (lib.dpcq_dpcqbag == undefined) lib.dpcq_dpcqbag = {};
			if (lib.config.dpcq_dpcqbag == undefined) lib.config.dpcq_dpcqbag = {};
			game.saveConfig('dpcq_dpcqbag', lib.config.dpcq_dpcqbag);
			var dpcqbag = {
				suijiyuhunh: {
					name: 'suijiyuhunh',
					info: '每使用一个,则你在游戏开始时随机获得一种卡池里的4-6星御魂',
					type: 'yuhun',
					canLay: true,
					noBorder: true,
					image: 'extension/斗破苍穹X阴阳师/jntx/suijiyuhunh.jpg',
					func() {
						game.dpcquseItems('suijiyuhunh', 1);
					},
				},
				suijiyuhunl: {
					name: 'suijiyuhunl',
					info: '每使用一个,则你在游戏开始时随机获得一种卡池里的1-3星御魂',
					type: 'yuhun',
					canLay: true,
					noBorder: true,
					image: 'extension/斗破苍穹X阴阳师/jntx/suijiyuhunl.jpg',
					func() {
						game.dpcquseItems('suijiyuhunl', 1);
					},
				},
				zishepi: {
					name: 'zishepi',
					info: '集齐50个后可兑换,获得1-3星的随机御魂',
					type: 'prop',
					canLay: true,
					image: 'extension/斗破苍穹X阴阳师/jntx/zishepi.jpg',
					func() {
						game.dpcqloseItem('zishepi', 50, true);
						game.dpcqgainItem('suijiyuhunl', 1);
						game.saydpcq('使用成功,请在背包中查看,若没有反应,请关闭并重新打开背包!');
					},
				},
				jinshepi: {
					name: 'jinshepi',
					info: '集齐50个后可兑换,获得4-6星的随机御魂',
					type: 'prop',
					canLay: true,
					image: 'extension/斗破苍穹X阴阳师/jntx/jinshepi.jpg',
					func() {
						game.dpcqloseItem('jinshepi', 50, true);
						game.dpcqgainItem('suijiyuhunh', 1);
						game.saydpcq('使用成功,请在背包中查看,若没有反应,请关闭并重新打开背包!');
					},
				},
				yuhunBuff: {
					name: 'yuhunBuff',
					info: '使用后获得御魂掉落加成15分钟',
					type: 'prop',
					canLay: true,
					image: 'extension/斗破苍穹X阴阳师/jntx/yuhunBuff.jpg',
					func() {
						game.dpcquseItems2('yuhunBuff', 1);
						game.saydpcq('使用成功,获得御魂掉落加成15分钟,在扩展界面开启使用御魂Buff的开关后生效!');
					},
				},
				yhdizangxiang: {
					canLay: false,
					image: 'extension/斗破苍穹X阴阳师/jntx/yhdizangxiang.jpg',
					info: '地藏像两件套加成:生命上限+15%;四件套加成:受到暴击时,获得生命上限25%的护盾.',
					func() {
						game.dpcquseItems3('yhdizangxiang', 1);
						game.saydpcq('使用成功!');
					},
				},
				yhfanhunxiang: {
					canLay: false,
					image: 'extension/斗破苍穹X阴阳师/jntx/yhfanhunxiang.jpg',
					info: '返魂香两件套加成:抵抗+15%;四件套加成:受到伤害时,有(15%+效果命中)概率使伤害来源晕眩.',
					func() {
						game.dpcquseItems3('yhfanhunxiang', 1);
						game.saydpcq('使用成功!');
					},
				},
				yhkuanggu: {
					canLay: false,
					image: 'extension/斗破苍穹X阴阳师/jntx/yhkuanggu.jpg',
					info: '狂骨两件套加成:攻击+15%;四件套加成:攻击+X%(X为你拥有的鬼火数x10).',
					func() {
						game.dpcquseItems3('yhkuanggu', 1);
						game.saydpcq('使用成功!');
					},
				},
				yhmeiyao: {
					canLay: false,
					image: 'extension/斗破苍穹X阴阳师/jntx/yhmeiyao.jpg',
					info: '魅妖两件套加成:防御+15%;四件套加成:造成伤害时,有(15%+效果命中)概率使目标陷入混乱直到其回合结束.',
					func() {
						game.dpcquseItems3('yhmeiyao', 1);
						game.saydpcq('使用成功!');
					},
				},
				yhmumei: {
					canLay: false,
					image: 'extension/斗破苍穹X阴阳师/jntx/yhmumei.jpg',
					info: '木魅两件套加成:防御+30%;四件套加成:友方单位受到伤害时,有25%的概率减少伤害来源1点鬼火.',
					func() {
						game.dpcquseItems3('yhmumei', 1);
						game.saydpcq('使用成功!');
					},
				},
				yhshanghunniao: {
					canLay: false,
					image: 'extension/斗破苍穹X阴阳师/jntx/yhshanghunniao.jpg',
					info: '伤魂鸟两件套加成:暴击增加15%;四件套加成:每有一个非己友方角色阵亡,你回复一点体力值,永久增加20%攻击力(失去此套装时移除加成buff).',
					func() {
						game.dpcquseItems3('yhshanghunniao', 1);
						game.saydpcq('使用成功!');
					},
				},
				yhzhaocaimao: {
					canLay: false,
					image: 'extension/斗破苍穹X阴阳师/jntx/yhzhaocaimao.jpg',
					info: '招财猫两件套加成:防御+15%;四件套加成:回合开始时,有50%概率摸两张牌.',
					func() {
						game.dpcquseItems3('yhzhaocaimao', 1);
						game.saydpcq('使用成功!');
					},
				},
				yhzheng: {
					canLay: false,
					image: 'extension/斗破苍穹X阴阳师/jntx/yhzheng.jpg',
					info: '狰两件套加成:攻击+15%;四件套加成:受到伤害时,有45%概率对伤害来源使用一张<杀>.',
					func() {
						game.dpcquseItems3('yhzheng', 1);
						game.saydpcq('使用成功!');
					},
				},
				yhzhenmushou: {
					canLay: false,
					image: 'extension/斗破苍穹X阴阳师/jntx/yhzhenmushou.jpg',
					info: '镇墓兽两件套加成:暴击+15%;四件套加成:暴击伤害+X(X为你的已损体力百分比值).',
					func() {
						game.dpcquseItems3('yhzhenmushou', 1);
						game.saydpcq('使用成功!');
					},
				},
			};
			game.dpcquseItems3 = function (ext_name, subtype, bool1) {
				var items = lib.config.dpcq_dpcqbag;
				var bool = false;
				for (var i in items) {
					var item = items[i];
					if (ext_name == item.ext_name) bool = true;
				}
				if (bool == true) {
					for (var i in items) {
						var item = items[i];
						if (item.click == true) {
							var subtype = item.subtype;
							if (subtype.includes('yuhun')) {
								if (subtype.includes('1')) {
									if (lib.config[`${lib.config.thischaractername}_yuhunequip1`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`] != undefined) {
										var olditem = lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`];
										var name = olditem.name;
										var subtype = olditem.subtype;
										var number = olditem.number;
										var ATK = olditem.ATK || 'none';
										var ATKx = olditem.ATKx || 'none';
										var DEF = olditem.DEF || 'none';
										var DEFx = olditem.DEFx || 'none';
										var CS = olditem.CS || 'none';
										var CSS = olditem.CSS || 'none';
										var maxHp = olditem.maxHp || 'none';
										var INF = olditem.INF || 'none';
										var RES = olditem.RES || 'none';
										game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
									}
									lib.config[`${lib.config.thischaractername}_yuhunequip1`] = item.name;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip1', lib.config[`${lib.config.thischaractername}_yuhunequip1`]);
									lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`] = item;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip1_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip1_yuhun`]);
								}
								if (subtype.includes('2')) {
									if (lib.config[`${lib.config.thischaractername}_yuhunequip2`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`] != undefined) {
										var olditem = lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`];
										var name = olditem.name;
										var subtype = olditem.subtype;
										var number = olditem.number;
										var ATK = olditem.ATK || 'none';
										var ATKx = olditem.ATKx || 'none';
										var DEF = olditem.DEF || 'none';
										var DEFx = olditem.DEFx || 'none';
										var CS = olditem.CS || 'none';
										var CSS = olditem.CSS || 'none';
										var maxHp = olditem.maxHp || 'none';
										var INF = olditem.INF || 'none';
										var RES = olditem.RES || 'none';
										game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
									}
									lib.config[`${lib.config.thischaractername}_yuhunequip2`] = item.name;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip2', lib.config[`${lib.config.thischaractername}_yuhunequip2`]);
									lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`] = item;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip2_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip2_yuhun`]);
								}
								if (subtype.includes('3')) {
									if (lib.config[`${lib.config.thischaractername}_yuhunequip3`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`] != undefined) {
										var olditem = lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`];
										var name = olditem.name;
										var subtype = olditem.subtype;
										var number = olditem.number;
										var ATK = olditem.ATK || 'none';
										var ATKx = olditem.ATKx || 'none';
										var DEF = olditem.DEF || 'none';
										var DEFx = olditem.DEFx || 'none';
										var CS = olditem.CS || 'none';
										var CSS = olditem.CSS || 'none';
										var maxHp = olditem.maxHp || 'none';
										var INF = olditem.INF || 'none';
										var RES = olditem.RES || 'none';
										game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
									}
									lib.config[`${lib.config.thischaractername}_yuhunequip3`] = item.name;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip3', lib.config[`${lib.config.thischaractername}_yuhunequip3`]);
									lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`] = item;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip3_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip3_yuhun`]);
								}
								if (subtype.includes('4')) {
									if (lib.config[`${lib.config.thischaractername}_yuhunequip4`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`] != undefined) {
										var olditem = lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`];
										var name = olditem.name;
										var subtype = olditem.subtype;
										var number = olditem.number;
										var ATK = olditem.ATK || 'none';
										var ATKx = olditem.ATKx || 'none';
										var DEF = olditem.DEF || 'none';
										var DEFx = olditem.DEFx || 'none';
										var CS = olditem.CS || 'none';
										var CSS = olditem.CSS || 'none';
										var maxHp = olditem.maxHp || 'none';
										var INF = olditem.INF || 'none';
										var RES = olditem.RES || 'none';
										game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
									}
									lib.config[`${lib.config.thischaractername}_yuhunequip4`] = item.name;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip4', lib.config[`${lib.config.thischaractername}_yuhunequip4`]);
									lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`] = item;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip4_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip4_yuhun`]);
								}
								if (subtype.includes('5')) {
									if (lib.config[`${lib.config.thischaractername}_yuhunequip5`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`] != undefined) {
										var olditem = lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`];
										var name = olditem.name;
										var subtype = olditem.subtype;
										var number = olditem.number;
										var ATK = olditem.ATK || 'none';
										var ATKx = olditem.ATKx || 'none';
										var DEF = olditem.DEF || 'none';
										var DEFx = olditem.DEFx || 'none';
										var CS = olditem.CS || 'none';
										var CSS = olditem.CSS || 'none';
										var maxHp = olditem.maxHp || 'none';
										var INF = olditem.INF || 'none';
										var RES = olditem.RES || 'none';
										game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
									}
									lib.config[`${lib.config.thischaractername}_yuhunequip5`] = item.name;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip5', lib.config[`${lib.config.thischaractername}_yuhunequip5`]);
									lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`] = item;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip5_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip5_yuhun`]);
								}
								if (subtype.includes('6')) {
									if (lib.config[`${lib.config.thischaractername}_yuhunequip6`] != undefined && lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`] != undefined) {
										var olditem = lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`];
										var name = olditem.name;
										var subtype = olditem.subtype;
										var number = olditem.number;
										var ATK = olditem.ATK || 'none';
										var ATKx = olditem.ATKx || 'none';
										var DEF = olditem.DEF || 'none';
										var DEFx = olditem.DEFx || 'none';
										var CS = olditem.CS || 'none';
										var CSS = olditem.CSS || 'none';
										var maxHp = olditem.maxHp || 'none';
										var INF = olditem.INF || 'none';
										var RES = olditem.RES || 'none';
										game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
									}
									lib.config[`${lib.config.thischaractername}_yuhunequip6`] = item.name;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip6', lib.config[`${lib.config.thischaractername}_yuhunequip6`]);
									lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`] = item;
									game.saveConfig(lib.config.thischaractername + '_yuhunequip6_yuhun', lib.config[`${lib.config.thischaractername}_yuhunequip6_yuhun`]);
								}
							}
							delete lib.config.dpcq_dpcqbag[i];
							if (game.dpcqCloseBag != undefined) {
								game.dpcqCloseBag();
							} else {
								game.saydpcq('使用失败!若出现bug请及时反馈作者!');
							}
						}
					}
					game.saveConfig('dpcq_dpcqbag', lib.config.dpcq_dpcqbag);
					if (game.dpcq_rushBag != undefined) game.dpcq_rushBag();
					game.openCharacterList();
				}
			};
			game.dpcquseItems2 = function (ext_name, num, bool1) {
				var items = lib.config.dpcq_dpcqbag;
				var bool = false;
				for (var i in items) {
					var item = items[i];
					if (ext_name == item.ext_name) bool = true;
				}
				if (bool == true) {
					for (var i in items) {
						var item = items[i];
						if (ext_name == item.ext_name) {
							if (ext_name == 'yuhunBuff') {
								if (lib.config.BuffTIMEminutes == undefined) {
									lib.config.BuffTIMEminutes = 15;
								} else {
									lib.config.BuffTIMEminutes += 15;
								}
								if (lib.config.BuffTIMEminutes >= 60) {
									lib.config.BuffTIMEminutes -= 60;
									if (lib.config.BuffTIMEhours == undefined) {
										lib.config.BuffTIMEhours = 1;
										game.saveConfig('BuffTIMEhours', lib.config.BuffTIMEhours);
									} else {
										lib.config.BuffTIMEhours += 1;
										game.saveConfig('BuffTIMEhours', lib.config.BuffTIMEhours);
									}
								}
								game.saveConfig('BuffTIMEminutes', lib.config.BuffTIMEminutes);
							}
							lib.config.dpcq_dpcqbag[i].num -= num;
							if (lib.config.dpcq_dpcqbag[i].num <= 0) {
								delete lib.config.dpcq_dpcqbag[i];
							}
						}
					}
					game.saveConfig('dpcq_dpcqbag', lib.config.dpcq_dpcqbag);
					if (game.dpcq_rushBag != undefined) game.dpcq_rushBag();
				}
			};
			game.dpcquseItems = function (ext_name, num, bool1) {
				var items = lib.config.dpcq_dpcqbag;
				var bool = false;
				for (var i in items) {
					var item = items[i];
					if (ext_name == item.ext_name) bool = true;
				}
				if (bool == true) {
					for (var i in items) {
						var item = items[i];
						if (ext_name == item.ext_name) {
							if (ext_name == 'suijiyuhunl' || ext_name == 'suijiyuhunh') {
								if (ext_name == 'suijiyuhunl') {
									if (lib.config.yuhunl == undefined) {
										lib.config.yuhunl = 1;
										game.saveConfig('yuhunl', lib.config.yuhunl);
										game.saydpcq('使用成功,御魂将在游戏开始时发放!');
									} else {
										lib.config.yuhunl += 1;
										game.saveConfig('yuhunl', lib.config.yuhunl);
										game.saydpcq('使用成功,御魂将在游戏开始时发放!');
									}
								} else {
									if (lib.config.yuhunh == undefined) {
										lib.config.yuhunh = 1;
										game.saveConfig('yuhunh', lib.config.yuhunh);
										game.saydpcq('使用成功,御魂将在游戏开始时发放!');
									} else {
										lib.config.yuhunh += 1;
										game.saveConfig('yuhunh', lib.config.yuhunh);
										game.saydpcq('使用成功,御魂将在游戏开始时发放!');
									}
								}
							}
							lib.config.dpcq_dpcqbag[i].num -= num;
							if (lib.config.dpcq_dpcqbag[i].num <= 0) {
								delete lib.config.dpcq_dpcqbag[i];
							}
						}
					}
					game.saveConfig('dpcq_dpcqbag', lib.config.dpcq_dpcqbag);
					if (game.dpcq_rushBag != undefined) game.dpcq_rushBag();
				}
			};
			for (var i in dpcqbag) {
				var item = dpcqbag[i];
				lib.dpcq_dpcqbag[i] = item;
			}
			game.dpcqgainItem = function (name, num, ext_name, ext_type, ext_canLay, ext_info, ext_func) {
				if (ext_name == undefined) ext_name = name;
				var items = lib.config.dpcq_dpcqbag;
				var result = false;
				var result1 = -1;
				for (var i in items) {
					var item = items[i];
					if (ext_name == item.ext_name) {
						result = item.name;
						result1 = i;
					}
				}
				if (result == false || (result != false && lib.config.dpcq_dpcqbag[result1].canLay == false)) {
					var item1 = {
						name: name,
						num: num,
						type: lib.dpcq_dpcqbag[name].type,
						canLay: lib.dpcq_dpcqbag[name].canLay,
						hg_base: lib.dpcq_dpcqbag[name].hg_base,
						hg_max: lib.dpcq_dpcqbag[name].hg_max,
						hg_finfish: lib.dpcq_dpcqbag[name].hg_finfish,
						ext_name: ext_name,
					};
					if (lib.dpcq_dpcqbag[name].noBorder != undefined) item1.noBorder = lib.dpcq_dpcqbag[name].noBorder;
					if (lib.dpcq_dpcqbag[name].props_num != undefined) item1.props_num = lib.dpcq_dpcqbag[name].props_num;
					if (lib.dpcq_dpcqbag[name].character != undefined) item1.character = lib.dpcq_dpcqbag[name].character;
					if (ext_type != undefined) item1.type = ext_type;
					if (ext_canLay != undefined) item1.canLay = ext_canLay;
					if (ext_info != undefined) item1.ext_info = ext_info;
					if (ext_func != undefined) item1.ext_func = ext_func;
					lib.config.dpcq_dpcqbag[lib.config.dpcq_dpcqbag_num] = item1;
					game.saveConfig('dpcq_dpcqbag_num', lib.config.dpcq_dpcqbag_num + 1);
				} else {
					lib.config.dpcq_dpcqbag[result1].num += num;
				}
				game.saveConfig('dpcq_dpcqbag', lib.config.dpcq_dpcqbag);
				if (game.dpcq_rushBag != undefined) game.dpcq_rushBag();
			};
			game.dpcqgainItem2 = function (name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES) {
				var num = 1;
				var items = lib.config.dpcq_dpcqbag;
				var result = false;
				var result1 = -1;
				for (var i in items) {
					var item = items[i];
					if (name == item.ext_name) {
						result = item.name;
						result1 = i;
					}
				}
				if (result == false || (result != false && lib.config.dpcq_dpcqbag[result1].canLay == false)) {
					var item1 = {
						name: name,
						num: num,
						subtype: subtype,
						type: lib.dpcq_dpcqbag[name].type,
						canLay: lib.dpcq_dpcqbag[name].canLay,
						hg_base: lib.dpcq_dpcqbag[name].hg_base,
						hg_max: lib.dpcq_dpcqbag[name].hg_max,
						hg_finfish: lib.dpcq_dpcqbag[name].hg_finfish,
						ext_name: name,
						ATK: '',
						ATKx: '',
						DEF: '',
						DEFx: '',
						CS: '',
						CSS: '',
						maxHp: '',
						INF: '',
						RES: '',
						xingji: number ? number : get.rand(0, 6),
						natureInfo: '',
					};
					if (lib.dpcq_dpcqbag[name].noBorder != undefined) item1.noBorder = lib.dpcq_dpcqbag[name].noBorder;
					if (lib.dpcq_dpcqbag[name].props_num != undefined) item1.props_num = lib.dpcq_dpcqbag[name].props_num;
					if (lib.dpcq_dpcqbag[name].character != undefined) item1.character = lib.dpcq_dpcqbag[name].character;
					lib.config.dpcq_dpcqbag[lib.config.dpcq_dpcqbag_num] = item1;
					game.saveConfig('dpcq_dpcqbag_num', lib.config.dpcq_dpcqbag_num + 1);
				} else {
					lib.config.dpcq_dpcqbag[result1].num += num;
				}
				if (number) {
					item1.number = number;
				} else {
					item1.number = '未知';
				}
				if (ATK && typeof ATK == 'number') {
					item1.ATK = ATK;
				}
				if (ATKx && typeof ATKx == 'number') {
					item1.ATKx = ATKx;
				}
				if (DEF && typeof DEF == 'number') {
					item1.DEF = DEF;
				}
				if (DEFx && typeof DEFx == 'number') {
					item1.DEFx = DEFx;
				}
				if (CS && typeof CS == 'number') {
					item1.CS = CS;
				}
				if (CSS && typeof CSS == 'number') {
					item1.CSS = CSS;
				}
				if (maxHp && typeof maxHp == 'number') {
					item1.maxHp = maxHp;
				}
				if (INF && typeof INF == 'number') {
					item1.INF = INF;
				}
				if (RES && typeof RES == 'number') {
					item1.RES = RES;
				}
				game.saveConfig('dpcq_dpcqbag', lib.config.dpcq_dpcqbag);
				if (game.dpcq_rushBag != undefined) game.dpcq_rushBag();
			};
			game.dpcqloseItem = function (ext_name, num, bool1) {
				var items = lib.config.dpcq_dpcqbag;
				var bool = false;
				for (var i in items) {
					var item = items[i];
					if (ext_name == item.ext_name) bool = true;
				}
				if (bool == true) {
					for (var i in items) {
						var item = items[i];
						if (ext_name == item.ext_name) {
							if (ext_name == 'zishepi' || ext_name == 'jinshepi') {
								if (lib.config.dpcq_dpcqbag[i].num >= 50) {
									num = 50;
									lib.config.dpcq_dpcqbag[i].num -= num;
								}
							} else {
								lib.config.dpcq_dpcqbag[i].num -= num;
							}
							if (lib.config.dpcq_dpcqbag[i].num <= 0) {
								delete lib.config.dpcq_dpcqbag[i];
							}
						}
					}
					game.saveConfig('dpcq_dpcqbag', lib.config.dpcq_dpcqbag);
					if (game.dpcq_rushBag != undefined) game.dpcq_rushBag();
				}
			};
			game.dpcqloseItem2 = function (item_num, num, bool) {
				var item = lib.config.dpcq_dpcqbag[item_num];
				var ext_name = lib.config.dpcq_dpcqbag[item_num].ext_name;
				lib.config.dpcq_dpcqbag[item_num].num -= num;
				if (lib.config.dpcq_dpcqbag[item_num].num <= 0) {
					delete lib.config.dpcq_dpcqbag[item_num];
				}
				game.saveConfig('dpcq_dpcqbag', lib.config.dpcq_dpcqbag);
				if (game.dpcq_rushBag != undefined) game.dpcq_rushBag();
			};
			game.dpcqjudgeCanUse = function (ext_name, num) {
				var items = lib.config.dpcq_dpcqbag;
				var bool = false;
				for (var i in items) {
					var item = items[i];
					if (ext_name == item.ext_name) bool = true;
				}
				if (bool == true) {
					for (var i in items) {
						var item = items[i];
						if (ext_name == item.ext_name) {
							if (item.num >= num) return true;
						}
					}
				}
				return false;
			};
			game.dpcqgetItem = function (ext_name) {
				var items = lib.config.dpcq_dpcqbag;
				for (var i in items) {
					var item = items[i];
					if (ext_name == item.ext_name) return i;
				}
				return false;
			};
			game.dpcqcreateItemShow = function (name, info, num, fake) {
				var item;
				if (fake != undefined) {
					item = fake;
				} else {
					if (lib.dpcq_dpcqbag[name] != undefined) item = lib.dpcq_dpcqbag[name];
				}
				var div1 = ui.create.div();
				div1.style.height = '50px';
				div1.style.width = '50px';
				div1.style.borderRadius = '5px';
				game.dpcqitem_changebg(item, div1);
				div1.link = item;
				div1.link1 = num;
				div1.onmouseover = function () {
					info.innerHTML = game.dpcqitem_getStr(this.link, this.link1);
					ui.window.appendChild(info);
					info.hide();
					info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
					info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
					if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
						var num = info.offsetTop + info.offsetHeight - (ui.window.offsetTop + ui.window.offsetHeight);
						info.style.top = info.offsetTop - num + 'px';
					}
					if (info.offsetTop < 0) info.style.top = '0px';
					if (info.offsetLeft + info.offsetWidth > ui.window.offsetLeft + ui.window.offsetWidth) {
						var num = info.offsetLeft + info.offsetWidth - (ui.window.offsetLeft + ui.window.offsetWidth);
						info.style.left = info.offsetLeft - num + 'px';
					}
					if (info.offsetLeft < 0) info.style.left = '0px';
					info.show();
				};
				div1.onmousemove = function () {
					info.style.left = event.clientX / game.documentZoom + 10 + document.body.scrollLeft + 'px';
					info.style.top = event.clientY / game.documentZoom + document.body.scrollTop + 'px';
					if (info.offsetTop + info.offsetHeight > ui.window.offsetTop + ui.window.offsetHeight) {
						var num = info.offsetTop + info.offsetHeight - (ui.window.offsetTop + ui.window.offsetHeight);
						info.style.top = info.offsetTop - num + 'px';
					}
					if (info.offsetTop < 0) info.style.top = '0px';
					if (info.offsetLeft + info.offsetWidth > ui.window.offsetLeft + ui.window.offsetWidth) {
						var num = info.offsetLeft + info.offsetWidth - (ui.window.offsetLeft + ui.window.offsetWidth);
						info.style.left = info.offsetLeft - num + 'px';
					}
					if (info.offsetLeft < 0) info.style.left = '0px';
				};
				div1.onmouseout = function () {
					info.hide();
				};
				var div_name = ui.create.div();
				div_name.style.height = '10px';
				if (item != undefined && item.noBorder == true) {
					div_name.style.width = 'calc(100% - 1px)';
					div_name.style.bottom = '0px';
					div_name.style.right = '1px';
				} else {
					div_name.style.width = 'calc(100% - 3px)';
					div_name.style.bottom = '2px';
					div_name.style.right = '3px';
				}
				div_name.style['font-size'] = '10px';
				div_name.style['text-align'] = 'right';
				div_name.style['font-family'] = 'shousha';
				div_name.style.color = 'white';
				div_name.style['text-shadow'] = 'black 0 0 2px';
				div_name.innerHTML = `<span style="font-weight:600;">${num}</span>`;
				div1.appendChild(div_name);
				return div1;
			};
			lib.translate.yuhun = '御魂';
			lib.translate.prop = '道具';
			lib.translate.suijiyuhunh = '随机御魂·高级';
			lib.translate.suijiyuhunl = '随机御魂·低级';
			lib.translate.zishepi = '八岐大蛇的鳞片·紫';
			lib.translate.jinshepi = '八岐大蛇的鳞片·金';
			lib.translate.yuhunBuff = '御魂Buff';
			game.dpcqdatesignin = function () {
				var date = new Date();
				var day = date.getDate();
				if (lib.date == undefined || lib.date != day) {
					lib.date = day;
				}
				if (lib.config.date == undefined || lib.config.date != day) {
					var date = new Date();
					var day = date.getDate();
					lib.config.date = day;
					game.dpcqgainItem('zishepi', 50);
					game.saydpcq('签到成功,获得八岐大蛇的鳞片·紫 x50,请在背包中查看!');
					game.dpcqgainItem('yuhunBuff', 1);
					game.saydpcq('签到成功,获得15分钟的御魂掉落加成,请在背包中查看!');
					game.saveConfig('date', lib.config.date);
				} else {
					game.saydpcq('今日已签到,请不要重复打卡!');
				}
			};
			game.dpcqmonthsignin = function () {
				var date = new Date();
				var day = date.getDate();
				var month = date.getMonth() + 1;
				if (lib.month == undefined || lib.month != month) {
					lib.month = month;
				}
				if (lib.config.month == undefined || lib.config.month != month) {
					var date = new Date();
					var month = date.getMonth() + 1;
					lib.config.month = month;
					game.dpcqgainItem('jinshepi', 50);
					game.saydpcq('签到成功,获得八岐大蛇的鳞片·金 x50,请在背包中查看!');
					game.dpcqgainItem('zishepi', 150);
					game.saydpcq('签到成功,获得八岐大蛇的鳞片·紫 x150,请在背包中查看!');
					game.dpcqgainItem('yuhunBuff', 4);
					game.saydpcq('签到成功,获得15分钟的御魂掉落加成 x4,请在背包中查看!');
					if (!lib.config.yh_Collect || typeof lib.config.yh_Collect != 'number') {
						lib.config.yh_Collect = 0;
						game.saveConfig('yh_Collect', lib.config.yh_Collect);
					}
					lib.config.yh_Collect++;
					game.saveConfig('yh_Collect', lib.config.yh_Collect);
					game.saydpcq('获得一次<收藏御魂>!可在游戏内出牌阶段使用,用于选择收藏一个已装备的御魂!');
					game.saveConfig('month', lib.config.month);
				} else {
					game.saydpcq('本月已领取,请不要重复领取!');
				}
			};
			game.saydpcq = function (str, num) {
				if (game.game_say_dialog_height == undefined) game.game_say_dialog_height = -45;
				if (game.game_say_dialog_num == undefined) game.game_say_dialog_num = 0;
				game.game_say_dialog_num++;
				var func = function () {
					game.game_say_dialog_onOpened = true;
					game.game_say_dialog_height += 45;
					var dialog = ui.create.dialog('hidden');
					dialog.classList.add('static');
					dialog.add(`<div class="text" style="word-break:break-all;display:inline"><span style="color: #FFFFFF;">${str}</span></div>`);
					dialog.classList.add('popped');
					dialog.style['pointer-events'] = 'none';
					dialog.style['font-family'] = "'STXinwei','xinwei'";
					dialog.style['background-image'] = 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					dialog.style['box-shadow'] = 'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
					if (ui.window) ui.window.appendChild(dialog);
					var width = str.length * 20;
					if (num != undefined) width -= num * 20;
					dialog._mod_height = -16;
					dialog.style.width = width + 'px';
					lib.placePoppedDialog(dialog, {
						clientX: (document.body.offsetLeft + document.body.offsetWidth / 2) * game.documentZoom,
						clientY: (document.body.offsetTop + document.body.offsetHeight / 4) * game.documentZoom, //QQQ
					});
					if (dialog._mod_height) dialog.content.firstChild.style.padding = 0;
					dialog.style.left = `calc(50% - ${(width + 16) / 2}px)`;
					dialog.style.top = `calc(5% + ${game.game_say_dialog_height}px)`;
					dialog.style['z-index'] = 999;
					setTimeout(function () {
						dialog.delete();
						if (game.game_say_dialog_height > ui.window.offsetHeight * 0.95 - dialog.offsetHeight * 2) game.game_say_dialog_height = -45;
						setTimeout(function () {
							if (game.game_say_dialog_num <= 0) game.game_say_dialog_height = -45;
						}, 250);
					}, 1500);
					setTimeout(function () {
						delete game.game_say_dialog_onOpened;
					}, 500);
				};
				var interval = setInterval(function () {
					if (game.game_say_dialog_onOpened == undefined) {
						func();
						game.game_say_dialog_num--;
						clearInterval(interval);
					}
				}, 100);
			};
			var style = document.createElement('style');
			style.innerHTML += '@keyframes rainBowText {' + '0% {text-shadow: black 0 0 1px,rgb(255, 0, 0) 0 0 2px,rgb(255, 0, 0) 0 0 5px,rgb(255, 0, 0) 0 0 10px,rgb(255, 0, 0) 0 0 10px;}' + '14.3% {text-shadow: black 0 0 1px,rgb(255, 165, 0) 0 0 2px,rgb(255, 165, 0) 0 0 5px,rgb(255, 165, 0) 0 0 10px,rgb(255, 165, 0) 0 0 10px;}' + '28.6% {text-shadow: black 0 0 1px,rgb(255, 255, 0) 0 0 2px,rgb(255, 255, 0) 0 0 5px,rgb(255, 255, 0) 0 0 10px,rgb(255, 255, 0) 0 0 10px;}' + '42.9% {text-shadow: black 0 0 1px,rgb(0, 255, 0) 0 0 2px,rgb(0, 255, 0) 0 0 5px,rgb(0, 255, 0) 0 0 10px,rgb(0, 255, 0) 0 0 10px;}' + '57.2% {text-shadow: black 0 0 1px,rgb(0, 0, 255) 0 0 2px,rgb(0, 0, 255) 0 0 5px,rgb(0, 0, 255) 0 0 10px,rgb(0, 0, 255) 0 0 10px;}' + '71.5% {text-shadow: black 0 0 1px,rgb(6,82,121) 0 0 2px,rgb(6,82,121) 0 0 5px,rgb(6,82,121) 0 0 10px,rgb(6,82,121) 0 0 10px;}' + '85.8% {text-shadow: black 0 0 1px,rgb(128, 0, 128) 0 0 2px,rgb(128, 0, 128) 0 0 5px,rgb(128, 0, 128) 0 0 10px,rgb(128, 0, 128) 0 0 10px;}' + '100% {text-shadow: black 0 0 1px,rgb(255, 0, 0) 0 0 2px,rgb(255, 0, 0) 0 0 5px,rgb(255, 0, 0) 0 0 10px,rgb(255, 0, 0) 0 0 10px;}' + '}';
			if (!(lib.config.yh_Collect > 0)) {
				game.saveConfig('yh_Collect', 1);
			}
			lib.skill._addToMyCollection = {
				enable: 'phaseUse',
				forced: true,
				silent: true,
				_priority: 202130,
				filter(event, player) {
					return player.storage.yh_?.length && game.me == player && Number(lib.config.yh_Collect) > 0;
				},//QQQ
				async content(event, trigger, player) {
					lib.config.yh_Collect--;
					game.saveConfig('yh_Collect', lib.config.yh_Collect);
					const { links } = await player.chooseButton(['选择要收藏的御魂', player.storage.yh_], true).forResult();
					if (links?.length) {
						const subtype = get.subtype(links[0]);
						var name = links[0].name;
						var name = name.slice(0, name.length - 1);
						var number = links[0].number;
						const yuhunMap = {
							yuhun1: 'A',
							yuhun2: 'B',
							yuhun3: 'C',
							yuhun4: 'D',
							yuhun5: 'E',
							yuhun6: 'F',
						};
						const level = yuhunMap[subtype];
						var ATK = player.storage[`yh_ATK${level}`] || 'none';
						var ATKx = player.storage[`yh_ATKx${level}`] || 'none';
						var DEF = player.storage[`yh_DEF${level}`] || 'none';
						var DEFx = player.storage[`yh_DEFx${level}`] || 'none';
						var CS = player.storage[`yh_CS${level}`] || 'none';
						var CSS = player.storage[`yh_CSS${level}`] || 'none';
						var maxHp = player.storage[`yh_MAXHP${level}`] || 'none';
						var INF = player.storage[`yh_INF${level}`] || 'none';
						var RES = player.storage[`yh_RES${level}`] || 'none';
						game.dpcqgainItem2(name, subtype, number, ATK, ATKx, DEF, DEFx, CS, CSS, maxHp, INF, RES);
					}
				},
			};
			// ---------------------------------------OtherSystem------------------------------------------//
			var urlx = 'extension/斗破苍穹X阴阳师/jntx';
			lib.init.css(urlx, 'extension');
			game.dpcqMarkHp = function (_0xaa11x1, _0xaa11x2) {
				if (!_0xaa11x1.isMin() || _0xaa11x1.forcemin) {
					if (!_0xaa11x1.node.MaxHp) {
						_0xaa11x1.node.MaxHp = ui.create.div('.MaxHp', _0xaa11x1);
						_0xaa11x1.node.MaxHp.style.width = '100%';
					}
					if (!_0xaa11x1.node.Hp) {
						_0xaa11x1.node.Hp = ui.create.div('.Hp', _0xaa11x1);
						var _0xaa11x3 = _0xaa11x1.maxHp;
						var _0xaa11x4 = _0xaa11x1.hp;
						var _0xaa11x5 = _0xaa11x4 / _0xaa11x3;
						_0xaa11x1.node.Hp.style.width = _0xaa11x5 * 100 + '%';
					}
					if (!_0xaa11x1.node.HpText) {
						_0xaa11x1.node.HpText = ui.create.div('.HpText', _0xaa11x1);
						_0xaa11x1.node.HpText.innerHTML = (_0xaa11x1.hp / _0xaa11x1.maxHp) * 100 + ' %';
					}
				}
			};
			if (lib.config.dpcqyysMarkHpChoose && lib.config.dpcqyysMarkHpChoose != undefined && lib.config.dpcqyysMarkHpChoose != 'none') {
				lib.skill._dpcqyysMarkHpChoose = {
					trigger: {
						global: 'gameStart',
					},
					forced: true,
					silent: true,
					_priority: Infinity,
					content() {
						if (lib.config.dpcqyysMarkHpChoose == 'yys') {
							for (var i of game.players) {
								if (i.name.includes('qxq_yys')) {
									game.dpcqMarkHp(i);
								}
							}
						}
						if (lib.config.dpcqyysMarkHpChoose == 'dpcqyys') {
							for (var i of game.players) {
								if (i.name.includes('qxq_yys') || i.name.includes('qxq_dpcq')) {
									game.dpcqMarkHp(i);
								}
							}
						}
						if (lib.config.dpcqyysMarkHpChoose == 'all') {
							for (var i of game.players) {
								game.dpcqMarkHp(i);
							}
						}
					},
				};
			}
			// ---------------------------------------效果解释------------------------------------------//
			window.dpcqOpenDialog = function (title, icon, content) {
				if (!title) title = '';
				if (!content) content = '';
				if (!window.dpcqCurrentDialogs) {
					window.dpcqCurrentDialogs = [];
				}
				var dialog = ui.create.div('.dpcqyys-dialog', document.body);
				window.dpcqCurrentDialogs.push(dialog);
				var icondiv = ui.create.div('.dpcqyys-dialog-icon', dialog);
				if (icon) {
					icondiv.setBackgroundImage(icon);
				} else {
					icondiv.hide();
				}
				var text = ui.create.div('.dpcqyys-dialog-text', dialog);
				text.innerHTML = content;
				if (lib.config.touchscreen) {
					lib.setScroll(text);
				}
				var titlediv = ui.create.div('.dpcqyys-dialog-title', dialog);
				titlediv.innerHTML = title;
				var close = ui.create.div('.dpcqyys-dialog-close', dialog);
				close.addEventListener('click', function () {
					window.dpcqCurrentDialogs.remove(dialog);
					dialog.delete();
				});
				return dialog;
			};
			var introduce = {
				paimai: {
					name: '拍卖',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;拍卖随机消耗300~900的金币,将随机抽取3~6轮,第一轮参与金币数为250,每经过一轮,参与所需金币数增加25,购买所需金币数额也相应增加,每一轮的拍品也不同,若金币数不足则无法参与竞拍.以下为各轮可能出现的物品种类:第一轮:基本牌、延时锦囊牌;第二轮:基本牌、非延时锦囊牌;第三轮:非延时锦囊牌、武器牌(以上三轮必定出现!);如果有第四轮,则为:防具牌、防御马;如果有第五轮,则为:防御马、进攻马;如果有第六轮,则为:进攻马、宝物牌.以上种类的牌在拍卖时均从牌堆中提取,且每次拍卖两张,拍卖时需用一定数量(一定范围内随机抽取)的金币和一张手牌换取.',
				},
				kaishanyin: {
					name: '开山印',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;你使用<杀>指定目标后,你可弃置一张手牌/装备牌,选择摸一张牌(冷却一回合)或将技能升级为<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('fanhaiyin');\">【翻海印】</a>.",
				},
				fanhaiyin: {
					name: '翻海印',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;你使用<杀>指定目标后,你可弃置一张手牌/装备牌,选择弃置目标一张手牌并将技能切换回<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('kaishanyin');\">【开山印】</a>,或将技能升级为<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('yantianyin');\">【湮天印】</a>.",
				},
				yantianyin: {
					name: '湮天印',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;你使用<杀>指定目标后,你可弃置一张手牌/装备牌,选择弃置目标一张装备牌牌并将技能切换回<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('kaishanyin');\">【开山印】</a>,若你此时为觉醒状态,则可选择弃置一张手牌并将技能继续升级为<a style='color:orange' href=\"javascript:window.dpcqIntroduce('fudiyin');\">【覆地印】</a>.",
				},
				fudiyin: {
					name: '覆地印',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;你使用<杀>指定目标后,你可选择弃置目标所有手牌并将技能切换回<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('kaishanyin');\">【开山印】</a>,若你此时为觉醒状态,则此时可将技能无消耗升级为<a style='color:orange' href=\"javascript:window.dpcqIntroduce('gudiyin');\">【古帝印】</a>.",
				},
				gudiyin: {
					name: '古帝印',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;你使用<杀>指定目标后,你可弃置一张手牌,选择弃置目标所有手牌和装备牌并将其翻面,并且造成等同于目标体力上限一半的伤害值,你将技能切换回<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('kaishanyin');\">【开山印】</a>.",
				},
				jindifentianzhan: {
					name: '金帝焚天斩',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;出牌阶段可发动,使用后移除此技能,对攻击范围内的目标发动斩击,且斩击后可再次发动斩击,最多连续斩击三次,每发动一次斩击减少觉醒状态的一回合持续时间(若持续时间不足,则改为减少一点体力值,你以此法减少的体力值不会导致死亡),同时每发动一次斩击,下一次斩击伤害增加,若成功让目标进入死亡状态(目标使用复活也能触发此效果效果),则你回复一点体力值并增加一点体力上限,若连续三次斩击后目标仍未阵亡,则其减少40%体力上限.斩击期间,你无视任何形式的伤害和体力流失.',
				},
				ronghun: {
					name: '融魂',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;每受到一次火焰伤害,灵魂融合进度+1,进度满时,移除<吞天蟒>灵魂,美杜莎继承其全部体力和体力上限,并获得其所有技能.',
				},
				zhongdu: {
					name: '中毒',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;每个回合开始前流失一点体力,移去一个毒标记.若标记已清空,则移除此技能.',
				},
				fengyin: {
					name: '封印',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;被添加【封印】的角色,其非锁定技均失效.',
				},
				fonuhuolian: {
					name: '佛怒火莲',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;「<font color=orange>佛怒火莲</font>」<br><li><b>萧炎自创斗技-阶别未知</b>,你的回合结束和刚开始时,清除所有标记,你的回合开始后,依据你已拥有的异火,获得相应数量的标记,标记数与异火数和异火排名有关(排名越高的异火标记数加的越多);出牌阶段,你可以选择一名目标并弃置所有手牌,按照标记数量对其造成一定的火焰伤害,若此时你造成的伤害值(包括目标的护甲所抵挡的数值):1、小于1,无事发生;2、等于1,目标随机弃置一张手牌;3、等于2,目标弃置一张手牌或装备牌,若此时目标未重伤,则目标重伤并添加3个重伤标记,若此时目标已重伤,则添加5个重伤标记,若此时目标未烧伤,则进入烧伤状态且添加3个烧伤标记,若目标已烧伤,则添加5个烧伤标记;4、3点及以上,目标弃置所有手牌和装备牌,若此时目标未重伤,则进入重伤状态并添加5个重伤标记,若目标已受重伤,则添加10个重伤标记,若此时目标未烧伤,则目标进入烧伤状态并添加5个烧伤标记,若目标已烧伤,则添加10个烧伤标记.你进入虚弱状态,获得两个虚弱标记(冷却时间五回合).',
				},
				zhongchi: {
					name: '重尺',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;重尺状态:<br>1、你手牌上限-1,回合开始时,你召唤<玄重尺>并装备之,锁定技,你无法装备除<玄重尺>以外的任何武器,你使用武器牌时,改为摸一张牌;<br> 2、你装备<玄重尺>时,使用杀的命中率为80%,命中时造成伤害+1,你使用杀后,可选择切换到<a style='color:orange' href=\"javascript:window.dpcqIntroduce('wuchi');\"><无尺></a>状态并摸一张牌;<br> 3、该状态下,你拥有技能<a style='color:red' href=\"javascript:window.dpcqIntroduce('yanfenshilangchi');\"><焰分噬浪尺></a>.<br> 4、你受到伤害时,若你装备区内有<玄重尺>,有35%概率令此伤害-1,可选择切换到<a style='color:orange' href=\"javascript:window.dpcqIntroduce('wuchi');\"><无尺></a>状态并摸一张牌;",
				},
				wuchi: {
					name: '无尺',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;无尺状态:<br>1、该状态下,你无法装备武器牌,但拥有技能<a style='color:orange' href=\"javascript:window.dpcqIntroduce('bajibeng');\"><八极崩></a>和<a style='color:orange' href=\"javascript:window.dpcqIntroduce('lianyao');\"><炼药></a>; <br>2、摸牌阶段,你的摸牌数+1,同时使回合内出杀次数+1; <br>3、使用杀造成伤害或使用技能<a style='color:orange' href=\"javascript:window.dpcqIntroduce('bajibeng');\"><八极崩></a>后,或受到伤害后,可选择移除技能<a style='color:orange' href=\"javascript:window.dpcqIntroduce('xyfonuhuolian');\"><佛怒火莲></a>并切换至<a style='color:orange' href=\"javascript:window.dpcqIntroduce('zhongchi');\"><重尺></a>状态,召唤<玄重尺>并装备之,若使用杀造成伤害后选择切换,则取消出杀次数+1的效果; <br>4、若你拥有两种及以上的异火,则你拥有技能<a style='color:orange' href=\"javascript:window.dpcqIntroduce('fonuhuolian');\"><佛怒火莲></a>,你使用<a style='color:orange' href=\"javascript:window.dpcqIntroduce('fonuhuolian');\"><佛怒火莲></a>造成的伤害值+1,你使用<a style='color:orange' href=\"javascript:window.dpcqIntroduce('fonuhuolian');\"><佛怒火莲></a>后,可选择切换至<a style='color:orange' href=\"javascript:window.dpcqIntroduce('zhongchi');\"><重尺></a>状态.",
				},
				bajibeng: {
					name: '八极崩',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;近身攻击,只能对距离为1以内的角色使用,你造成伤害时可发动,使目标获得一层<暗劲>,拥有暗劲标记的玩家在回合开始时选择一项:1、受到等同于标记数的伤害;2、跳过出牌阶段.',
				},
				yanfenshilangchi: {
					name: '焰分噬浪尺',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;(冷却时间三回合)出牌阶段,你可以弃置所有红色牌,对一名攻击范围内的目标造成两点火焰伤害,你将武将牌翻面,并强制进入<a style='color:orange' href=\"javascript:window.dpcqIntroduce('wuchi');\"><无尺></a>状态.",
				},
				xyfonuhuolian: {
					name: '佛怒火莲',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;「<font color=orange>佛怒火莲</font>」<br><li><b>萧炎自创斗技-阶别未知</b>,你的回合结束和刚开始时,清除所有标记,你的回合开始后,依据你已拥有的异火,获得相应数量的标记,标记数与异火数和异火排名有关(排名越高的异火标记数加的越多);出牌阶段,你可以选择一名目标并弃置所有手牌,按照标记数量对其造成一定的火焰伤害,若此时你造成的伤害值(包括目标的护甲所抵挡的数值):1、小于1,无事发生;2、等于1,目标随机弃置一张手牌;3、等于2,目标弃置一张手牌或装备牌,若此时目标未重伤,则目标重伤并添加3个重伤标记,若此时目标已重伤,则添加5个重伤标记,若此时目标未烧伤,则进入烧伤状态且添加3个烧伤标记,若目标已烧伤,则添加5个烧伤标记;4、3点及以上,目标弃置所有手牌和装备牌,若此时目标未重伤,则进入重伤状态并添加5个重伤标记,若目标已受重伤,则添加10个重伤标记,若此时目标未烧伤,则目标进入烧伤状态并添加5个烧伤标记,若目标已烧伤,则添加10个烧伤标记.你进入虚弱状态,获得两个虚弱标记(冷却时间五回合).',
				},
				xuling: {
					name: '虚灵',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;虚灵状态下,你不能成为卡牌的目标,不会死亡,不能主动回血,此状态维持三回合,三回合后若你体力值仍为0且没有触发<复活>,则你死亡;若你体力值已大于0,则不再触发此技能;同时,<虚灵>状态期间,你免疫所有非属性伤害,且你每受到一次属性伤害,改为回复相应的体力值.',
				},
				lianyao: {
					name: '炼丹&炼药',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;出牌阶段限两次,你可以弃置两张牌,获得一个<药材>标记;出牌阶段限一次,当你有标记时可选择用<药材>标记炼丹.若选择<炼丹>,则根据你的炼丹等级和药材数目炼丹(默认选择你所能炼制的最高级丹药),炼丹成功的概率随丹药品阶增加而降低,若炼丹成功则随机获得相应品阶的丹药(X阶需要X枚<药>标记换取),丹药种类最多储存三种,且同种丹药储存的数目上限为3,丹药种类达到3种时,不论数目如何,均无法继续炼丹.你使用卡牌后你可以使用任意种类的丹药各一枚,获得相应的丹药效果.<br>每炼一次丹药增加熟练度,熟练度可提高成功率和解锁高阶丹药的炼制.',
				},
				sifangfengbi: {
					name: '四方风壁',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;将目标移出游戏直到你的回合结束.',
				},
				bingdong: {
					name: '冰冻',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;控制效果,回合开始时跳过该回合并移除此状态.',
				},
				xuanbingjuzhui: {
					name: '玄冰巨锥',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;出牌阶段限用一次,将一张牌当作带有<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('bingdong');\">冰冻</a>效果的<万箭齐发>(造成伤害时将目标<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('bingdong');\">冰冻</a>)使用,你将技能替换回<多重冰层>.",
				},
				dushi: {
					name: '毒师',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;你受到/造成伤害时,可以使用<厄>中的一张<毒>并选择伤害来源/目标的一张手牌,使此牌被替换为<毒>当其使用或弃置此牌时,此牌无效化并将其替换为<毒>的效果.',
				},
				dujing: {
					name: '毒经',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;锁定技,<毒>对你无效化,你使用或弃置<毒>时,将其置于<厄>中并摸等量的牌,每个回合开始时,若你的手牌数小于你的体力值,你获得一张<毒>并将其置于<厄>中.',
				},
				shemo: {
					name: '蛇魔',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;蛇魔无法使用锦囊牌和延时锦囊牌,使用<杀>时增加八岐大蛇10%的<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>,造成伤害时给目标附加<毒液>标记.",
				},
				duyeA: {
					name: '毒液',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;累计达到三层时受到两点无来源的伤害,并为八岐大蛇和蛇魔之间血量最低的一名角色回复两点体力值.',
				},
				duyeB: {
					name: '毒液',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;造成伤害时给目标附加一层<a style='color:purple' href=\"javascript:window.dpcqIntroduce('duyeA');\"><毒液></a>.",
				},
				baqizhiying: {
					name: '八岐之影',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;身份局中可使用,如果你的身份为忠或内,则可发动此技能将主公变成<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>,你与主公交换身份并获得一个额外回合,并将技能【神念之影】替换为<a style='color:red' href=\"javascript:window.dpcqIntroduce('shenfenzhiyan');\">【神愤之炎】</a>.若发动前你的身份不为忠或内,则你成为主公,并将技能【神念之影】替换为<a style='color:red' href=\"javascript:window.dpcqIntroduce('shenfenzhiyan');\">【神愤之炎】</a>,并将所有原反贼变成忠臣,所有原主忠方变为反贼(内奸身份不变).",
				},
				shenfenzhiyan: {
					name: '神愤之炎',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;出牌阶段限一次,你可以选择发动【神念之影】或<a style='color:red' href=\"javascript:window.dpcqIntroduce('shenfenzhiyan');\">【神愤之炎】</a>.<a style='color:red' href=\"javascript:window.dpcqIntroduce('shenfenzhiyan');\">【神愤之炎】</a>:出牌阶段消耗三点鬼火,开启蛇魔空间并选择一个敌方目标附加【五感尽失】,随后为所有敌方附加一层<a style='color:purple' href=\"javascript:window.dpcqIntroduce('duyeA');\"><毒液></a>,同时场上每名<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>各使用一张<杀>攻击随机敌方目标(此<杀>不触发增加<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>效果),敌方目标移除【五感尽失】,接着你每消耗一点鬼火,则再次重复触发<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>的攻击效果.",
				},
				xingdongtiao: {
					name: '行动条',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;行动条每达到100%,即可获得一个额外的回合,行动条每减少100%,下个回合开始时自动跳过.',
				},
				chuwu: {
					name: '初舞',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;你使用<杀>时视为使用两次,且第二次的<杀>不触发技能,每次命中率均为50%;处于离殇状态时,技能替换为<a style='color:red' href=\"javascript:window.dpcqIntroduce('zhongwu');\">【终舞】</a>.",
				},
				zhongwu: {
					name: '终舞',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;你使用<杀>时视为使用两次,且第二次的<杀>不触发技能,每次命中率均为75%.',
				},
				lige: {
					name: '离歌',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;你受到伤害时,回复30%生命上限的体力值(至少为一点),你的每个回合开始时,你减少一点体力上限,同时你每有一张手牌,便增加5%<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>;主动施放【烬染不夜】后,你的手牌中每剩余一张<杀>,便有50%的概率对一名随机敌方目标使用一张<杀>(此<杀>不会消耗卡牌).回合开始时,若你的体力上限已为0,则你立即死亡.",
				},
				jinranbuye: {
					name: '烬染不夜',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;出牌阶段限用一次,消耗四点鬼火,对全体敌方使用一张<杀>(不触发<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('chuwu');\">【初舞】</a>/<a style='color:red' href=\"javascript:window.dpcqIntroduce('zhongwu');\">【终舞】</a>的效果);场上每有一名友方角色阵亡,发动此技能消耗鬼火数-1.",
				},
				xianji: {
					name: '先机',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;游戏开始时,施放此技能.',
				},
				dayaozhili: {
					name: '大妖之力',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;每损失1%生命值,提升1%伤害、0.25%防御和0.25%减伤.',
				},
				guiwangzitai: {
					name: '鬼王姿态',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;燃起火海,使友方在回合开始时被灼烧24%当前生命,并免疫伤害直至其回合结束,灼烧视同为体力流失,若友方灼烧后生命比例低于30%或其当前生命值为1,则其解除所有控制和所有增益/减益效果,<鬼王姿态>结束时,为友方全体回复等同鬼王酒吞童子在期间造成伤害的20%的体力.',
				},
				shengminglianjie: {
					name: '生命链接',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;任意链接目标受到伤害时所有均摊目标均摊此伤害,若剩余伤害值小于均摊目标,则将剩余伤害值在所有均摊目标中随机分配.',
				},
				ximeng: {
					name: '汐梦',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;回合结束后扣除3点鬼火,若扣除前鬼火为0,则<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('shendubingdong');\">深度冰冻</a>一回合.",
				},
				shengdubingdong: {
					name: '深度冰冻',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;控制效果,回合开始时跳过该回合并移除此状态.',
				},
				haiyuanbeiji: {
					name: '海原贝戟',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;该召唤物无法行动,无法回血,继承千姬100%的攻击和防御,且生命值为千姬当前攻击力(角色基础攻击力1000,可继承千姬的属性加成)的0.5%,【海原贝戟】在场时,减少【千姬】和【海原贝戟】30%所受伤害,友方受到伤害且【海原贝戟】在场时,【海原贝戟】为其回复所受伤害30%的生命值(回复值不足1时,则改为30%概率回复一点体力),友方单位每使用一点鬼火,【海原贝戟】叠加一层<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('chaosheng');\"><潮声></a>.",
				},
				chaosheng: {
					name: '潮声',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;【海原贝戟】每叠加7层<潮声>,使友方获得3点鬼火,并使全体友方伤害永久提升15%,此增益最多叠加5次.',
				},
				xinjian: {
					name: '心剑',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;该状态下格挡概率加倍,且触发格挡时沉默攻击者直到其回合结束(视为封印技能),心剑状态期间,天剑韧心鬼切无法被邀战(不会成为【决斗】的目标),回合开始时,若敌方的<a style='color:purple' href=\"javascript:window.dpcqIntroduce('yingqie');\"><影切></a>已解除,则<心剑>立即解除.",
				},
				yingqie: {
					name: '影切',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;拥有该标记时,被<a style='color:purple' href=\"javascript:window.dpcqIntroduce('yingzhifenshen');\"><影之分身></a>锁定,该标记在被标记角色和天剑韧心鬼切累计被<杀>命中次数之和达到5次后解除.",
				},
				yingzhifenshen: {
					name: '影之分身',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;分身无法被技能和卡牌选中,回合开始时,若敌方<a style='color:purple' href=\"javascript:window.dpcqIntroduce('yingqie');\"><影切></a>标记已消除,则分身立即消散,否则分身会在本体回合发动技能【天剑·断恶斩】时,对带有<a style='color:purple' href=\"javascript:window.dpcqIntroduce('yingqie');\"><影切></a>的目标发动相同的技能.",
				},
				wei: {
					name: '危',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;带有<危>标记的角色减少75%所受的治疗效果(生效一回合),行动条减少5%,降低防御5%(生效一回合),受到天剑韧心鬼切的下一次伤害将转化为体力流失,移除此标记.',
				},
				bihu: {
					name: '庇护',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;抵挡一次翻面效果.',
				},
				beige: {
					name: '悲歌',
					info: '&nbsp;&nbsp;&nbsp;&nbsp;施放【海潮入梦】后,【千姬】的每个回合开始时,获得一层<悲歌>.',
				},
				yongshengzhixi: {
					name: '永生之汐',
					info: "&nbsp;&nbsp;&nbsp;&nbsp;消耗两点鬼火,立即结束当前回合并拔出<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('haiyuanbeiji');\">【海原贝戟】</a>并将此技能替换为【海潮入梦】,随后令潮汐奔流,每名敌方均有(20%+<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('beige');\"><悲歌></a>层数x10%)的概率受到一点伤害,若<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('beige');\"><悲歌></a>层数达到5层,则造成伤害时额外对其追加一点伤害.",
				},
			};
			window.dpcqIntroduce = function (name) {
				window.dpcqOpenDialog('<li>概念介绍:' + introduce[name].name, null, introduce[name].info);
			};
			// ---------------------------------------武将技能特效------------------------------------------//
			if (config.qxqdpcq_showskillAnimation == true) {
				lib.skill._dpcqshowskillAnimation = {
					trigger: {
						player: ['logSkillBegin', 'useSkillBegin'],
					},
					filter(event, player) {
						return game.skillAnimation == null || game.skillAnimation == undefined || !game.skillAnimation;
					},
					forced: true,
					silent: true,
					content() {
						'step 0';
						var pict = trigger.player.node.avatar.style['background-image'];
						var l = pict.length - 1;
						var path = pict.slice(5, l - 1);
						game.skillAnimation = ui.create.node('img', document.body);
						game.skillAnimation.style.cssText = 'position: absolute;opacity: 0.01;transition:all 0.35s;z-index:6';
						game.skillAnimation.style.top = '30%';
						game.skillAnimation.style.left = '0%';
						game.skillAnimation.style.height = '210px';
						game.skillAnimation.style.width = 210 * (path.width / path.height) + 'px';
						game.skillAnimation.src = path;
						setTimeout(function () {
							game.skillAnimation.style.left = '30%';
							game.skillAnimation.style.transition = 'all 0.5s';
							game.skillAnimation.style.opacity = 0.8;
						}, 50);
						setTimeout(function () {
							game.skillAnimation.style.left = '70%';
							game.skillAnimation.style.opacity = 0.2;
						}, 1000);
						setTimeout(function () {
							if (game.skillAnimation != null) game.skillAnimation.remove();
							if (game.skillAnimation != null) game.skillAnimation = null;
						}, 1200);
					},
				};
			}
			// ---------------------------------------UI人物------------------------------------------//
			//即时显示
			game.uiShow = function (player, time) {
				if (!player) return;
				if (!time) var time = 3;
				if (typeof time == 'string') time = parseInt(time);
				if (isNaN(time)) time = 3;
				if (time < 1000) time = time * 1000;
				if (!player.isMin() || player.forcemin) {
					if (!player.node.uiShow || player.node.uiShow == null) {
						player.node.uiShow = ui.create.div('', player);
						player.node.uiShow.style.cssText = `left:0%;height:100%;width:100%;top:0%;background-image: url(extension/斗破苍穹X阴阳师/jntx/${player.name}.gif);z-index:Infinity;`; //transition:all 1.5s;
						player.node.uiShow.style.backgroundSize = '100% 100%';
					}
					setTimeout(function () {
						player.node.uiShow.delete();
						delete player.node.uiShow;
						player.node.uiShow = null;
					}, time);
				}
			};
			// ---------------------------------------技能卡------------------------------------------//
			if (Number(lib.config.qxqdpcq_skillCard) && Number(lib.config.qxqdpcq_skillCard) > 0) {
				lib.skill._skillCard = {
					trigger: {
						player: 'roundStart',
					},
					_priority: Infinity,
					filter(event, player) {
						return Number(lib.config.qxqdpcq_skillCard) && Number(lib.config.qxqdpcq_skillCard) > 0;
					},
					forced: true,
					content() {
						'step 0';
						if (!event.addnum) {
							event.addnum = Number(lib.config.qxqdpcq_skillCard) || 0; //QQQ
						}
						if (event.addnum == 0) {
							event.finish();
						}
						event.add = function (name) {
							var card = game.createCard2(name, ['heart', 'diamond', 'club', 'spade'].randomGet(), get.rand(1, 13));
							ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
							game.broadcastAll(function () {
								lib.inpile.add(name);
							});
							game.updateRoundNumber();
						};
						event.target = game.players.randomGet();
						event.proskills = lib.character[event.target.name][3];
						event.skills = [];
						for (var i = 0; i < event.proskills.length; i++) {
							var mod = '' + (lib.skill[event.proskills[i]].mod || '');
							var viewAs = '' + (lib.skill[event.proskills[i]].viewAs || '');
							var subSkill = '' + (lib.skill[event.proskills[i]].subSkill || '');
							var group = '' + (lib.skill[event.proskills[i]].group || '');
							var content = '' + (lib.skill[event.proskills[i]].content || '');
							var info = '' + (lib.translate[`${event.proskills[i]}_info`] || '');
							if ((mod.includes('return') || viewAs.includes(':') || content.includes('.') || subSkill.includes(':') || group.length > 0) && info.length > 0) {
								event.skills.push(event.proskills[i]);
							}
						}
						var prompt = '';
						for (var i = 0; i < event.skills.length; i++) {
							var skillinfo = lib.translate[event.skills[i] + '_info'];
							prompt += `<br><li>${lib.translate[event.skills[i]]}:` + lib.translate[`${event.skills[i]}_info`];
						}
						('step 1');
						event.skill = event.skills.randomGet();
						event.list = ['基本牌', '装备牌', '锦囊牌'];
						event.list2 = ['basic', 'equip', 'trick'];
						('step 2');
						event.type = event.list2.randomGet();
						event.number2 = 0;
						while (lib.card[event.number2 + '_' + event.skill] != undefined) {
							event.number2++;
						}
						lib.card[event.number2 + '_' + event.skill] = {
							type: event.type,
							image: '',
							skills: [event.skill],
							skill: event.skill,
							enable: true,
							usable: Infinity,
							updateUsable: 'phaseUse',
							suitList: ['spade', 'heart', 'club', 'diamond'].randomGet(),
							numberList: get.rand(1, 13),
							distance: {},
							filterTarget: true,
							content() { },
							selectTarget: 1,
							modTarget: true,
							savable: true,
							ai: {
								order: 7,
								useful: 4,
								value: 10,
								tag: {
									draw: 1,
									recover: 1,
								},
								result: {
									target(player, target) {
										if (target.hasJudge('lebu')) return 0;
										return Math.max(1, 1 + target.countCards('h') / 10);
									},
								},
							},
						};
						var pict = event.target.node.avatar.style['background-image'];
						if (pict.includes('character')) {
							var img = 'character/' + event.target.name;
						} else if (pict.includes('extension')) {
							var l = pict.length - 1;
							var path = pict.slice(pict.indexOf('extension/') + 10, l - 1);
							var img = 'ext:' + path;
						}
						lib.card[event.number2 + '_' + event.skill].image = img;
						lib.translate[event.number2 + '_' + event.skill] = lib.translate[event.skill] || event.skill;
						lib.translate[`${event.number2}_${event.skill}_info`] = lib.translate[`${event.skill}_info`];
						if (event.type == 'basic') {
							lib.card[event.number2 + '_' + event.skill].content = function () {
								if (cards.length && get.position(cards[0], true) == 'o') {
									if (target != player) {
										target.addTempSkill(lib.card[cards[0].name].skill);
									} else player.addTempSkill(lib.card[cards[0].name].skill, { player: 'phaseBegin' });
								}
							};
							//player.gain(game.createCard(event.skill,lib.card[event.skill].suitList,lib.card[event.skill].numberList));
							event.add(event.number2 + '_' + event.skill);
							event.addnum--;
							if (event.addnum > 0) {
								event.goto(0);
							} else event.finish();
						}
						if (event.type == 'trick') {
							lib.card[event.number2 + '_' + event.skill].content = function () {
								if (cards.length && get.position(cards[0], true) == 'o') {
									if (target != player) {
										target.addTempSkill(lib.card[cards[0].name].skill);
									} else player.addTempSkill(lib.card[cards[0].name].skill, { player: 'phaseBegin' });
								}
							};
							//player.gain(game.createCard(event.skill,lib.card[event.skill].suitList,lib.card[event.skill].numberList));
							event.add(event.number2 + '_' + event.skill);
							event.addnum--;
							if (event.addnum > 0) {
								event.goto(0);
							} else event.finish();
						}
						if (event.type == 'equip') {
							lib.card[event.number2 + '_' + event.skill].content = function () {
								if (cards.length && get.position(cards[0], true) == 'o') {
									target.equip(cards[0]);
								}
							};
						}
						('step 3');
						event.subtype1 = ['武器', '防具', '防御马', '进攻马', '宝物'];
						event.subtype2 = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
						('step 4');
						if (event.type == 'equip') {
							event.thissubtype = event.subtype2.randomGet();
							lib.card[event.number2 + '_' + event.skill].subtype = event.thissubtype;
							var List = [];
							if (event.thissubtype == 'equip1') {
								var disList = [1, 2, 3, 4, 5].randomGet();
								lib.card[event.number2 + '_' + event.skill].distance.attackFrom = -disList;
								List.push('<li>攻击范围:' + disList);
							}
							if (event.thissubtype == 'equip3') {
								lib.card[event.number2 + '_' + event.skill].distance.globalFrom = 1;
								List.push('<li>进攻距离+1');
							}
							if (event.thissubtype == 'equip4') {
								lib.card[event.number2 + '_' + event.skill].distance.globalTo = 1;
								List.push('<li>防御距离+1');
							}
							//player.gain(game.createCard(event.skill,lib.card[event.skill].suitList,lib.card[event.skill].numberList));
							event.add(event.number2 + '_' + event.skill);
							event.addnum--;
							if (event.addnum > 0) {
								event.goto(0);
							} else event.finish();
						}
					},
				};
			}
			if (lib.config.qxq_yk_load != true && lib.config.qxq_yk_load != false) game.saveConfig('qxq_yk_load', true);
			// ---------------------------------------新春主题------------------------------------------//
			//视频背景,取自神秘喵大佬的扩展
			ui.create.dpcqyys_node = function () {
				var tagName, str, innerHTML, position, position2, style, divposition, listen;
				for (var i = 0; i < arguments.length; i++) {
					if (typeof arguments[i] == 'string') {
						if (typeof tagName == 'string') {
							innerHTML = arguments[i];
						} else {
							tagName = arguments[i];
						}
					} else if (get.is.node(arguments[i])) position = arguments[i];
					else if (typeof arguments[i] == 'number') position2 = arguments[i];
					else if (get.itemtype(arguments[i]) == 'divposition') divposition = arguments[i];
					else if (typeof arguments[i] == 'object') style = arguments[i];
					else if (typeof arguments[i] == 'function') listen = arguments[i];
				}
				if (tagName == undefined) {
					tagName = 'div';
				} else {
					var i1 = tagName.indexOf('.');
					var i2 = tagName.indexOf('#');
					if (i1 != -1 || i2 != -1) {
						if (i2 != -1 && i2 < i1) {
							i1 = i2;
						}
						str = tagName.slice(i1);
						tagName = tagName.slice(0, i1);
					}
				}
				var node = document.createElement(tagName);
				if (str) {
					for (var i = 0; i < str.length; i++) {
						if (str[i] == '.') {
							if (node.className.length != 0) {
								node.className += ' ';
							}
							while (str[i + 1] != '.' && str[i + 1] != '#' && i + 1 < str.length) {
								node.className += str[i + 1];
								i++;
							}
						} else if (str[i] == '#') {
							while (str[i + 1] != '.' && str[i + 1] != '#' && i + 1 < str.length) {
								node.id += str[i + 1];
								i++;
							}
						}
					}
				}
				if (position) {
					if (typeof position2 == 'number' && position.childNodes.length > position2) {
						position.insertBefore(node, position.childNodes[position2]);
					} else {
						position.appendChild(node);
					}
				}
				if (style) HTMLDivElement.prototype.css.call(node, style);
				if (divposition) n(node, divposition);
				if (innerHTML) node.innerHTML = innerHTML;
				if (listen) node.addEventListener('click', listen);
				return node;
			};
			game.showMP4 = function () {
				let Video = ui.create.dpcqyys_node(
					'Video',
					ui.create.div(ui.background, {
						zIndex: -1,
						pointerEvents: 'none',
					}),
					{
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: '50% 50%',
						position: 'fixed',
					}
				);
				Video.src = 'extension/斗破苍穹X阴阳师/jntx/HappyNewYear.mp4';
				Video.setAttribute('autoplay', '');
				Video.setAttribute('loop', '');
				Video.setAttribute('loop', '');
				Video.setAttribute('loop', 'muted');
			};
			if (config.dpcqHappyNewYearImage || config.dpcqHappyNewYearImage == undefined) {
				game.showMP4();
				var interval = setInterval(function () {
					if (Math.random() < 0.05) {
						var type = [1, 2, 3].randomGet();
						game[`showNewYearFire${type}`]();
					} else if (Math.random() < 0.1) {
						var type = [1, 3].randomGet();
						game[`showNewYearFire${type}`]();
					}
				}, 3000);
				//每3分钟一次大烟花
				var interval2 = setInterval(function () {
					game.showNewYearFire2(true);
				}, 180000);
				game.showNewYearFire1 = function () {
					if (window.fireworkImg1 != undefined && window.fireworkImg1 != null) return;
					window.fireworkImg1 = ui.create.div('hidden');
					var height = (1 + Math.random()) * 100;
					var width = 0.85 * height;
					window.fireworkImg1.style.height = height + 'px';
					window.fireworkImg1.style.width = width + 'px';
					//位置随机
					var postop = Math.random() * 80;
					var posLeft = Math.random() * 90;
					window.fireworkImg1.style.left = 5 + posLeft + '%';
					window.fireworkImg1.style.top = 10 + postop + '%';
					window.fireworkImg1.style.transition = 'none';
					window.fireworkImg1.style['z-index'] = 5000;
					window.fireworkImg1.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/Fireworks1.gif');
					window.fireworkImg1.style.backgroundSize = '100% 100%';
					ui.background.appendChild(window.fireworkImg1);
					setTimeout(function () {
						ui.background.removeChild(window.fireworkImg1);
						window.fireworkImg1 = null;
					}, 3000);
				};
				game.showNewYearFire2 = function (bool) {
					if (window.fireworkImg2 != undefined && window.fireworkImg2 != null) return;
					window.fireworkImg2 = ui.create.div('hidden');
					if (bool) {
						window.fireworkImg2.style.height = '100%';
						window.fireworkImg2.style.width = '100%';
						window.fireworkImg2.style.left = '0%';
						window.fireworkImg2.style.top = '0%';
					} else {
						var pos = Math.random() * 80;
						window.fireworkImg2.style.height = pos + '%';
						window.fireworkImg2.style.width = pos + '%';
						window.fireworkImg2.style.left = '0%';
						window.fireworkImg2.style.top = '0%';
					}
					window.fireworkImg2.style.transition = 'none';
					window.fireworkImg2.style['z-index'] = 5000;
					window.fireworkImg2.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/Fireworks2.gif');
					window.fireworkImg2.style.backgroundSize = '100% 100%';
					ui.background.appendChild(window.fireworkImg2);
					setTimeout(function () {
						ui.background.removeChild(window.fireworkImg2);
						window.fireworkImg2 = null;
					}, 3000);
				};
				game.showNewYearFire3 = function () {
					if (window.fireworkImg3 != undefined && window.fireworkImg3 != null) return;
					window.fireworkImg3 = ui.create.div('hidden');
					var pos = Math.random() * 80;
					window.fireworkImg3.style.height = pos + '%';
					window.fireworkImg3.style.width = pos + '%';
					window.fireworkImg3.style.left = '0%';
					window.fireworkImg3.style.top = '0%';
					window.fireworkImg3.style.transition = 'none';
					window.fireworkImg3.style['z-index'] = 5000;
					window.fireworkImg3.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/Fireworks3.gif');
					window.fireworkImg3.style.backgroundSize = '100% 100%';
					ui.background.appendChild(window.fireworkImg3);
					setTimeout(function () {
						ui.background.removeChild(window.fireworkImg3);
						window.fireworkImg3 = null;
					}, 6000);
				};
				game.showNewYearlantern = function () {
					var lanternLeft1 = ui.create.div('hidden');
					lanternLeft1.style.height = '200px';
					lanternLeft1.style.width = '200px';
					lanternLeft1.style.left = '0%';
					lanternLeft1.style.top = '0%';
					lanternLeft1.style.transition = 'none';
					lanternLeft1.style['z-index'] = Infinity;
					lanternLeft1.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/lanternLeft1.gif');
					lanternLeft1.style.backgroundSize = '100% 100%';
					ui.background.appendChild(lanternLeft1);
					var lanternLeft2 = ui.create.div('hidden');
					lanternLeft2.style.height = '100%';
					lanternLeft2.style.width = '100%';
					lanternLeft2.style.left = '0%';
					lanternLeft2.style.top = '0%';
					lanternLeft2.style.transition = 'none';
					lanternLeft2.style['z-index'] = Infinity;
					lanternLeft2.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/lanternLeft2.jpg');
					lanternLeft2.style.backgroundSize = '100% 100%';
					ui.background.appendChild(lanternLeft2);
					var lanternRight1 = ui.create.div('hidden');
					lanternRight1.style.height = '250px';
					lanternRight1.style.width = '250px';
					lanternRight1.style.right = '0%';
					lanternRight1.style.top = '0%';
					lanternRight1.style.transition = 'none';
					lanternRight1.style['z-index'] = Infinity;
					lanternRight1.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/lanternRight1.gif');
					lanternRight1.style.backgroundSize = '100% 100%';
					ui.background.appendChild(lanternRight1);
					var lanternRight2 = ui.create.div('hidden');
					lanternRight2.style.height = '100%';
					lanternRight2.style.width = '100%';
					lanternRight2.style.left = '0%';
					lanternRight2.style.top = '0%';
					lanternRight2.style.transition = 'none';
					lanternRight2.style['z-index'] = Infinity;
					lanternRight2.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/lanternRight2.jpg');
					lanternRight2.style.backgroundSize = '100% 100%';
					ui.background.appendChild(lanternRight2);
				};
				game.showNewYearlantern();
				//孔明灯
				for (var i = 0; i < 15; i++) {
					window[`lanternk${i}`] = ui.create.div('hidden');
					var size = get.rand(70, 130);
					window[`lanternk${i}`].style.height = size + 'px';
					window[`lanternk${i}`].style.width = size + 'px';
					window[`lanternk${i}`].size = size;
					window[`lanternk${i}`].style.left = `calc( ${get.rand(30, 70)}% - ${size / 2}px )`;
					window[`lanternk${i}`].style.top = '110%';
					window[`lanternk${i}`].angle = 0;
					window[`lanternk${i}`].style.transition = 'all 8s';
					window[`lanternk${i}`].style['z-index'] = Infinity;
					window[`lanternk${i}`].setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/kmd.jpg');
					window[`lanternk${i}`].style.backgroundSize = '100% 100%';
					ui.background.appendChild(window[`lanternk${i}`]);
				}
				var interval2 = setInterval(function () {
					game.qxq_kmdMove();
				}, 300000);
				window.lanternk = ui.create.div('hidden');
				window.lanternk.style.height = '180px';
				window.lanternk.style.width = '180px';
				window.lanternk.style.left = 'calc( 50% - 90px )';
				window.lanternk.style.top = '110%';
				window.lanternk.top = 110;
				window.lanternk.angle = 0;
				window.lanternk.style.transition = 'all 12s';
				window.lanternk.style['z-index'] = Infinity;
				window.lanternk.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/qxq_kmd.jpg');
				window.lanternk.style.backgroundSize = '100% 100%';
				ui.background.appendChild(window.lanternk);
				game.qxq_kmdMove = function () {
					window.lanternk.style.top = `calc( 0% - ${180}px )`;
					window.lanternk.style.left = `calc( ${get.rand(1, 99)}% - ${90}px )`;
					window.lanternk.style.transform = `rotate(${get.rand(-15, 15)}deg)`;
					setTimeout(function () {
						window.lanternk.style.transition = 'none';
						setTimeout(function () {
							window.lanternk.style.left = `calc( ${get.rand(30, 70)}% - 90px )`;
							window.lanternk.style.top = '110%';
							window.lanternk.top = 110;
							setTimeout(function () {
								window.lanternk.style.transition = 'all 12s';
							}, 100);
						}, 100);
					}, 13000);
				};
				game.qxq_kmdMove2 = function (number) {
					window[`lanternk${number}`].style.top = `calc( 0% - ${window[`lanternk${number}`].size}px )`;
					window[`lanternk${number}`].style.left = `calc( ${get.rand(1, 99)}% - ${window[`lanternk${number}`].size / 2}px )`;
					window[`lanternk${number}`].style.transform = `rotate(${get.rand(-15, 15)}deg)`;
					setTimeout(function () {
						window[`lanternk${number}`].style.transition = 'none';
						setTimeout(function () {
							window[`lanternk${number}`].style.left = `calc(${get.rand(30, 70)}% - ${window[`lanternk${number}`].size / 2}px )`;
							window[`lanternk${number}`].style.top = '110%';
							window[`lanternk${number}`].top = 110;
							setTimeout(function () {
								window[`lanternk${number}`].style.transition = 'all 8s';
							}, 100);
						}, 100);
					}, 9000);
				};
				window.qxq_kmd_blessFirstScreen = false;
				game.qxq_kmdMoveAll = function () {
					setTimeout(function () {
						game.qxq_kmdMove2(0);
						game.qxq_kmdMove2(5);
						game.qxq_kmdMove2(10);
					}, 3000);
					setTimeout(function () {
						game.qxq_kmdMove2(1);
						game.qxq_kmdMove2(6);
						game.qxq_kmdMove2(11);
					}, 6000);
					setTimeout(function () {
						game.qxq_kmdMove2(2);
						game.qxq_kmdMove2(7);
						game.qxq_kmdMove2(12);
					}, 9000);
					setTimeout(function () {
						game.qxq_kmdMove2(3);
						game.qxq_kmdMove2(8);
						game.qxq_kmdMove2(13);
					}, 12000);
					setTimeout(function () {
						game.qxq_kmdMove2(4);
						game.qxq_kmdMove2(9);
						game.qxq_kmdMove2(14);
					}, 15000);
					if (window.qxq_kmd_blessFirstScreen == false) {
						window.qxq_kmd_blessFirstScreen = true;
						setTimeout(function () {
							game.qxq_kmdMove();
						}, 10000);
					} else {
						if (Math.random() <= 0.03)
							setTimeout(function () {
								game.qxq_kmdMove();
							}, 10000);
					}
				};
				game.qxq_kmdMoveAll();
				var intervalAll = setInterval(function () {
					game.qxq_kmdMoveAll();
				}, 25000);
			}
		},
		precontent() {
			lib.extensionMenu.extension_斗破苍穹X阴阳师.yysCharacterChoose = {
				name: '【阴阳师】将灵',
				intro: '选择阴阳师式神作为将灵',
				init: 'none',
				item: {
					none: '无',
					qxq_yys_baqidashe: '八岐大蛇',
					qxq_yys_buzhihuo: '不知火',
					qxq_yys_cszn: '丑时之女',
					qxq_yys_gwjttz: '鬼王酒吞童子',
					qxq_yys_huiyeji: '辉夜姬',
					qxq_yys_jiaotu: '椒图',
					qxq_yys_qianji: '千姬',
					qxq_yys_rihefang: '日和坊',
					qxq_yys_tianjianrenxinguiqie: '天剑韧心鬼切',
					qxq_yys_yuanjieshen: '缘结神',
					qxq_yys_zuofutongzi: '座敷童子',
					random: '随机',
				},
				onclick(item) {
					game.saveConfig('extension_斗破苍穹X阴阳师_yysCharacterChoose', item);
					game.saveConfig('yysCharacterChoose', item);
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.yysFriendsCharacterChoose = {
				name: '【阴阳师】将灵——友方数',
				intro: '选择获得阴阳师式神作为将灵的友方人数',
				init: '0',
				item: {
					0: '零',
					1: '一',
					2: '二',
					3: '三',
					4: '四',
					5: '五',
					6: '六',
					7: '七',
					8: '八',
				},
				onclick(item) {
					game.saveConfig('extension_斗破苍穹X阴阳师_yysFriendsCharacterChoose', item);
					game.saveConfig('yysFriendsCharacterChoose', item);
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.yysEnemiesCharacterChoose = {
				name: '【阴阳师】将灵——敌方数',
				intro: '选择获得阴阳师式神作为将灵的敌方人数',
				init: '0',
				item: {
					0: '零',
					1: '一',
					2: '二',
					3: '三',
					4: '四',
					5: '五',
					6: '六',
					7: '七',
					8: '八',
				},
				onclick(item) {
					game.saveConfig('extension_斗破苍穹X阴阳师_yysEnemiesCharacterChoose', item);
					game.saveConfig('yysEnemiesCharacterChoose', item);
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.dpcqyysMarkHpChoose = {
				name: '设置血条显示',
				intro: '设置血条显示',
				init: 'none',
				item: {
					none: '不显示',
					yys: '仅阴阳师式神',
					dpcqyys: '仅本扩展',
					all: '应用于全部角色',
				},
				onclick(item) {
					game.saveConfig('extension_斗破苍穹X阴阳师_dpcqyysMarkHpChoose', item);
					game.saveConfig('dpcqyysMarkHpChoose', item);
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.dynamic_name = {
				name: '',
				intro: '点击打开本扩展相关人员介绍',
				init: '1',
				item: {
					0: '——————————————————————————————————————————————————————————————————',
					1: "<style>#本扩相关人员{animation:changeS 20s linear 0s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='本扩相关人员'><b>本扩相关人员</b></div></body>",
					2: "<br><br><style>#【作者】:群小乔{animation:changeS 20s linear 1s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='【作者】:群小乔'><b>【作者】:群小乔</b></div></body>",
					3: "<br><br><style>#【测试】:世中人{animation:changeS 20s linear 2s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='【测试】:世中人'><b>【测试】:世中人</b></div></body>",
					4: "<br><br><style>#【感谢素材提供】:世中人、敢邀明月借千载、击碎夸克{animation:changeS 20s linear 3s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='【感谢素材提供】:世中人、敢邀明月借千载、击碎夸克'><b>【感谢素材提供】:世中人、敢邀明月借千载、击碎夸克</b></div></body>",
					5: "<br><br><style>#【感谢指导】:敢邀明月借千载、嘛-樱花{animation:changeS 20s linear 4s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='【感谢指导】:敢邀明月借千载、嘛-樱花'><b>【感谢指导】:敢邀明月借千载、嘛-樱花</b></div></body>",
					6: "<br><br><style>#【感谢相关代码提供】:炉石模式、扩展ol(极光)、玄武江湖(寰宇星城)、失名见闻谭(失名、洪荒)、蜀汉中兴(诗笺)、术樱(嘛-樱花){animation:changeS 20s linear 5s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='【感谢相关代码提供】:炉石模式、扩展ol(极光)、玄武江湖(寰宇星城)、失名见闻谭(失名、洪荒)、蜀汉中兴(诗笺)、术樱(嘛-樱花)'><b>【感谢相关代码提供】:炉石模式、扩展ol(极光)、玄武江湖(寰宇星城)、失名见闻谭(失名、洪荒)、蜀汉中兴(诗笺)、术樱(嘛-樱花)</b></div></body>",
					7: "<br><br><style>#【感谢以下提供bug反馈的大佬or小可爱】:世中人、敢邀明月借千载、赵襄赵襄变赵襄、称象两个桃{animation:changeS 20s linear 6s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='【感谢以下提供bug反馈的大佬or小可爱】:世中人、敢邀明月借千载、赵襄赵襄变赵襄、称象两个桃'><b>【感谢以下提供bug反馈的大佬or小可爱】:世中人、敢邀明月借千载、赵襄赵襄变赵襄、称象两个桃</b></div></body>",
					8: '<br><br>——————————————————————————————————————————————————————————————————',
				},
				onclick() { },
			};
			//背包系统
			lib.extensionMenu.extension_斗破苍穹X阴阳师.characterList = {
				name: "<style>#打开角色资料{animation:changeS 20s linear 1s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='打开角色资料'><b>打开角色资料</b></div></body>",
				clear: true,
				onclick() {
					ui.click.configMenu();
					game.openCharacterList();
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.datesignin = {
				name: "<style>#每日签到{animation:changeS 20s linear 2s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='每日签到'><b>每日签到</b></div></body>",
				clear: true,
				onclick() {
					game.dpcqdatesignin();
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.monthsignin = {
				name: "<style>#每月礼包{animation:changeS 20s linear 3s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='每月礼包'><b>每月礼包</b></div></body>",
				clear: true,
				onclick() {
					game.dpcqmonthsignin();
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.BugFeedBack = {
				name: "<style>#(电脑版)点击此处可反馈Bug{animation:changeS 20s linear 4s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='(电脑版)点击此处可反馈Bug'><b>(电脑版)点击此处可反馈Bug</b></div></body>",
				clear: true,
				onclick() {
					ui.click.configMenu();
					window.open('tencent://message/?uin=1308410188&Menu=yes& Service=300&sigT=42a1e5347953b64c5ff3980f8a6e644d4b31456cb0b6ac6b27663a3c4dd0f4aa14a543b1716f9d45');
					setTimeout(function () {
						alert('感谢您的反馈!');
					}, 5000);
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.changelog = {
				name: "<style>#更新日志{animation:changeS 20s linear 7s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='更新日志'><b>更新日志</b></div></body>",
				clear: true,
				onclick() {
					ui.click.configMenu();
					game.dpcq_showChangeLog();
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.aboutBlueFire = {
				name: "<style>#▶关于鬼火、鬼火条{animation:changeS 20s linear 8s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='▶关于鬼火、鬼火条'><b>▶关于鬼火、鬼火条</b></div></body>",
				clear: true,
				onclick() {
					if (this.hth_more == undefined) {
						var more = ui.create.div('.hth_more', '<div style="border: 1px solid white;text-align:left"><font size=3px>' + '以下为关于鬼火及鬼火条机制的说明:' + '<br><br>1、<font color=red>必要说明</font>:<font color=cyan>该系统只对本扩展的阴阳师角色生效!<br>鬼火显示在武将牌上方,通常上限为8点;<br>鬼火条共计5格,显示于游戏右上角,可随时前往查看推进进度.</font>' + '<br><br>2、<font color=red>获取方式</font>:<font color=cyan>游戏开始时,获得3点初始鬼火.<br>非国战模式下,同阵营友方回合开始时,推进一格鬼火条.<br><li>【友方:身份模式的同身份(主忠视为同身份)、非身份模式(如:挑战模式)的同势力】<br>国战模式下,若你为大势力/小势力,则所有大势力/小势力角色回合开始时,推进一格鬼火条.<br>第一次/第二次/第三次及之后满鬼火条时,清空鬼火条并获得3点/4点/5点鬼火.</font>' + '<br><br>3、<font color=red>使用途径</font>:<font color=cyan>鬼火可用于发动某些主动技能.</font>' + '<br><br>4、<font color=red>特殊说明</font>:<font color=cyan>鬼火通常为同阵营全体成员共享,身份为内时,则同身份共同推进鬼火条、共同获得鬼火,但视为个人消耗.</font>');
						this.parentNode.insertBefore(more, this.nextSibling);
						this.hth_more = more;
						this.innerHTML = '<font color=gray><div class="hth_menu">▼关于鬼火/鬼火条</div></font>';
					} else {
						this.parentNode.removeChild(this.hth_more);
						delete this.hth_more;
						this.innerHTML = '<font color=gray><div class="hth_menu">▶关于鬼火/鬼火条</div></font>';
					}
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.aboutyuhun = {
				name: "<style>#▶关于御魂{animation:changeS 20s linear 9s infinite;}@keyframes changeS{ 0% {color: #FF0000;}7%{color: #FF7F00;}14%{color: #FFFF00;}21%{color: #00FF00;}28% {color: #00FFFF;}35%{color: #0000FF;}42%{color: #8B00FF;}49%{color: #0000FF;}58%{color: #8B00FF;}65%{color: #0000FF;}72% {color: #00FFFF;}79%{color: #00FF00;}86%{color: #FFFF00;}93%{color: #FF7F00;}100% {color: #FF0000;}}</style><body><div id='▶关于御魂'><b>▶关于御魂</b></div></body>",
				clear: true,
				onclick() {
					if (this.hth_more == undefined) {
						var more = ui.create.div('.hth_more', '<div style="border: 1px solid white;text-align:left"><font size=3px>' + '<br><li>御魂的星级显示为卡牌上的数字,装备御魂时,御魂的星级越高,装备后获得的词条和属性值越多.' + '<br><br><li>以下为关于御魂词条种类及各词条效果的说明:' + '<br><br><font color=red>固有攻击</font>:增加<font color=yellow>固定</font>一数值的<font color=red>攻击力</font>' + '<br><br><font color=cyan>固有防御</font>:增加<font color=yellow>固定</font>一数值的<font color=cyan>防御力</font>' + '<br><br><font color=red>百分比攻击</font>:按角色基础攻击力(1000)<font color=yellow>百分比</font>增加的<font color=red>攻击力</font>' + '<br><br><font color=cyan>百分比防御</font>:按角色基础防御力(1000)<font color=yellow>百分比</font>增加的<font color=cyan>防御力</font>' + '<br><br><font color=yellow>暴击</font>:增加角色<font color=yellow>暴击率</font>' + '<br><br><font color=yellow>暴击伤害</font>:增加角色触发<font color=yellow>暴击</font>时造成的伤害' + '<br><br><font color=pink>生命</font>:通常按角色<font color=pink>生命上限</font>的<font color=yellow>百分比</font>值增加相应<font color=pink>生命上限</font>' + '<br><br><font color=orange>效果命中</font>:装备带有控制效果的御魂套装时,增加<font color=orange>触发控制</font>的概率' + '<br><br><font color=blue>效果抵抗</font>:被某些带有控制效果的御魂套装技能<font color=orange>触发控制</font>时,增加<font color=blue>抵抗控制</font>的概率,<font color=blue>触发抵抗</font>时,<font color=red>该控制效果失效</font>,同时效果抵抗还有一定概率可以<font color=blue>抵抗翻面效果</font>' + '<br><br><li>以下为关于御魂掉落种类的说明:' + '<br><font color=red>周一</font><font color=gray>:</font><font color=red>魅妖</font><font color=gray>、</font><font color=orange>镇墓兽</font>' + '<br><font color=orange>周二</font><font color=gray>:</font><font color=yellow>招财猫</font><font color=gray>、</font><font color=green>返魂香</font>' + '<br><font color=yellow>周三</font><font color=gray>:</font><font color=orange>伤魂鸟</font><font color=gray>、</font><font color=green>木魅</font>' + '<br><font color=green>周四</font><font color=gray>:</font><font color=pink>地藏像</font><font color=gray>、</font><font color=orange>狰</font>' + '<br><font color=cyan>周五</font><font color=gray>:</font><font color=cyan>狂骨</font><font color=gray>、' + '<br><font color=blue>周六</font><font color=gray>:</font><font color=gray>所有种类的御魂</font>' + '<br><font color=purple>周日</font><font color=gray>:</font><font color=gray>所有种类的御魂</font>');
						this.parentNode.insertBefore(more, this.nextSibling);
						this.hth_more = more;
						this.innerHTML = '<font color=gray><div class="hth_menu">▼关于御魂</div></font>';
					} else {
						this.parentNode.removeChild(this.hth_more);
						delete this.hth_more;
						this.innerHTML = '<font color=gray><div class="hth_menu">▶关于御魂</div></font>';
					}
				},
			};
			//模式
			lib.extensionMenu.extension_斗破苍穹X阴阳师.qxqdpcq_skillCard = {
				name: '<font color=blue><技能卡></font>',
				intro: '开启后,每轮游戏开始时,将场上武将的技能制成卡牌并加入牌堆(使用该卡牌可获得对应的临时技能),点击可选择加入的卡牌数量/轮.<技能卡>分为基本牌、锦囊牌以及装备牌三种,三种均由随机产生,每轮游戏开始时,均向牌堆内加入一定数量的<技能卡>,技能卡上对应的技能均为场上角色的随机选取的一项技能.<br><li>你使用基本和锦囊牌指定非己目标时,目标添加卡牌说明上的技能直到其回合结束;</li><br><li>指定自己时,你添加该技能直到你的下个回合开始.</li><br><li>使用装备牌时,目标穿戴该装备,且该装备的技能即为卡牌说明上的技能.</li>',
				init: '2',
				item: {
					0: '关闭',
					1: '一张',
					2: '二张',
					3: '三张',
					4: '四张',
					5: '五张',
					6: '六张',
					7: '七张',
					8: '八张',
				},
				onclick(item) {
					game.saveConfig('extension_斗破苍穹X阴阳师_qxqdpcq_skillCard', item);
					game.saveConfig('qxqdpcq_skillCard', item);
				},
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.dpcqHappyNewYearImage = {
				name: '新春特别版背景&特效',
				init: true,
				intro: '将游戏背景设置成新春主题背景,仅在更新至最新素材后才会显示.',
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.qxqdpcq_xiulianzhilu = {
				name: '<font color=yellow>修炼之路(测试版)</font>',
				intro: '开启修炼之路——斗破苍穹',
				init: false,
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.qxq_bossbqds = {
				name: '<font color=red>八岐大蛇的挑战(测试版)</font>',
				intro: '开启模式——八岐大蛇的挑战,战斗中将有概率出现【八岐大蛇】,击败后可获得随机御魂,击败【八岐大蛇】后还有概率出现【真·八岐大蛇】,击败其可获得随机御魂奖励.(若击败八岐大蛇后出现武将重叠的状况,请尝试更换游戏布局)',
				init: false,
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.qxqdpcq_showskillAnimation = {
				name: '<font color=green>武将技能特效</font>',
				intro: '打开时,将在武将发动技能(主动技、触发技)时显示武将头像贴图.',
				init: true,
			};
			lib.extensionMenu.extension_斗破苍穹X阴阳师.qxq_yuhunBuffTIME = {
				name: '<font color=purple>御魂掉落加成</font>',
				intro: '开启后消耗御魂掉落Buff加成时限并获得御魂掉落加成Buff(重启游戏生效)',
				init: false,
			};
			game.import('character', function () {
				var dpcqyys_Character = {
					name: 'dpcqyys_Character',
					connect: true,
					character: {
						qxq_dpcq_haibodong: ['male', 'qxq_dpcq', 4, ['dpcqxuanbingdun', 'dpcqningbingjie', 'dpcqwanhuabingjing', 'dpcqxuanbinglongxiang'], []],
						//"qxq_dpcq_xiaoyan":["male","qxq_dpcq",4,[],[]],
						qxq_dpcq_yafei: ['female', 'qxq_dpcq', 3, ['dpcqliyanshiren', 'dpcqrenruhanxiu', 'dpcqpaimaijuecai'], []],
						qxq_dpcq_xiaoxuner: ['female', 'qxq_dpcq', 3, ['yanfanji', 'guazhang', 'diyinjue', 'dajimiezhi', 'mifa'], []],
						qxq_dpcq_xiaoyixian: ['female', 'qxq_dpcq', '3/4', ['enan', 'yishi'], []],
						qxq_dpcq_mdsnw: ['female', 'qxq_dpcq', 3, ['dpcqsheshejiejie', 'dpcqzhirechijian', 'dpcqyuyansheling'], []],
						qxq_dpcq_lingying: ['male', 'qxq_dpcq', 4, ['dpcqwanyingfu', 'dpcqyingqie', 'dpcqhuanying', 'dpcqyingshazhen'], []],
						qxq_dpcq_qcttm: ['female', 'qxq_dpcq', 8, [], [], []],
						qxq_dpcq_zyys: ['female', 'qxq_dpcq', 4, [], [], []],
						//"qxq_dpcq_yaochen":["male","qxq_dpcq",4,[],[]],
						qxq_dpcq_yunyun: ['female', 'qxq_dpcq', 3, ['fengtuishi', 'liefengxuanwu', 'fzjys', 'fenghuidadi', 'fengxuanbi'], []],
						qxq_dpcq_naranyanran: ['female', 'qxq_dpcq', 3, ['jiaoman', 'qianfenggang', 'feixushenfa', 'flfxj', 'fzjlry'], []],
						qxq_yys_baqidashe: ['male', 'qxq_yys', 4, ['bujiezhili', 'shennianzhiying'], []],
						qxq_yys_buzhihuo: ['female', 'qxq_yys', 3, ['chuwu', 'liying', 'xinghuomantian'], []],
						qxq_yys_cszn: ['female', 'qxq_yys', 3, ['yyscaoren', 'zhouhuo'], []],
						qxq_yys_gwjttz: ['male', 'qxq_yys', 4, ['yyshonglian', 'tianhuonuyan'], []],
						qxq_yys_huiyeji: ['female', 'qxq_yys', 3, ['penglaiyuzhi', 'huoshuqiu', 'longshouzhiyu'], []],
						qxq_yys_jiaotu: ['female', 'qxq_yys', 3, ['runwuwusheng', 'juanliu'], []],
						qxq_yys_qianji: ['female', 'qxq_yys', 3, ['ximeng', 'haichaorumeng'], []],
						qxq_yys_rihefang: ['female', 'qxq_yys', 3, ['yysqingyu', 'ziyang'], []],
						qxq_yys_tianjianrenxinguiqie: ['male', 'qxq_yys', 3, ['zhenjianrenxin', 'tianjianduanezhan'], []],
						qxq_yys_yuanjieshen: ['female', 'qxq_yys', 3, ['fshy', 'scly'], []],
						qxq_yys_zuofutongzi: ['female', 'qxq_yys', '3/4', ['hunzhihuo', 'fuyunchanglong', 'huofuxiangsheng'], []],
						qxq_yyscaoren: ['none', 'qxq_yysboss', 3, [], [], []],
						qxq_yyshaiyuanbeiji: ['none', 'qxq_yysboss', 3, [], [], []],
						qxq_yysshemo: ['male', 'qxq_yysboss', 3, ['duye'], [], []],
						qxq_yystianjianrenxinguiqiefenshen: ['male', 'qxq_yysboss', null, [], [], []],
						qxq_yys_bossbqds: ['male', 'qxq_yysboss', 10, ['yysboss', 'bossidentity'], [], ['des:堕入黑暗的神明']],
						qxq_yys_bosszbqds: ['male', 'qxq_yysboss', 25, ['yysrealboss', 'bossidentity'], [], []],
					},
					characterIntro: {
						qxq_dpcq_haibodong: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;天蚕土豆所著异世大陆类玄幻小说<斗破苍穹>及其衍生作品中角色,号【冰皇】,前一代加玛帝国十大强者之一,米特尔家族太上长老,现为炎盟元老.为人性子孤僻自傲,精通冰系斗气.<br></font><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;男<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色境界】&nbsp;&nbsp;五星斗皇→九星斗宗<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;<font color=cyan>冰皇</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;米特尔家族、<font color=orange>炎盟</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【斗气属性】&nbsp;&nbsp;<font color=cyan>冰</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<米特尔·藤山,那废材现在还活着吧？></i>',
						qxq_dpcq_xiaoyan: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;萧炎,天蚕土豆所著异世大陆类玄幻小说<斗破苍穹>及其衍生作品中的男主角,在<武动乾坤><斗破苍穹前传之药老传奇><大主宰>和<苍穹榜之圣灵纪>四本小说中客串出场.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;资质卓绝,四岁练气,十岁拥有九段斗之气,十一岁成功凝聚斗之气旋,一跃成为家族百年之内最年轻的斗者.却又连续三年功力倒退保持在斗之气三段,从此逐渐沦为遭人白眼的废柴 .十五岁被指腹为婚的纳兰嫣然当众退婚,立下了三年之约 .在吸收他斗气的灵魂药尘的教导下,萧炎凭借执着与信念闯荡大陆,不断取得辉煌的战绩 .<br><br>&nbsp;&nbsp;&nbsp;&nbsp;近不惑之年晋升斗帝 ,自号<炎帝> ,双帝之战中击败魂天帝,封印他千载万世,拯救天下苍生.炎帝之名响彻斗气大陆.为寻找斗帝失踪之谜前往大千世界 ,在大千世界创立<无尽火域>,短短数百年就成为与武境、剑域、万墓之地齐名的大千世界超级巨擘 .<br><br>&nbsp;&nbsp;&nbsp;&nbsp;天邪神陨落二十八年后在苍穹榜上留下完整真名,晋入主宰境,与武祖林动、大主宰牧尘一起成为大千世界的守护者,无尽火域也一跃成为大千世界最强三大势力之一,与武境、牧府齐名 .<br></font><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;男<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色境界】&nbsp;&nbsp;斗破:斗气(斗帝)、灵魂(帝境)&nbsp;&nbsp;大主宰:主宰境<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;<font color=orange>炎帝</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;<font color=orange>磐门</font>、<font color=orange>炎盟</font>、<font color=orange>天府联盟</font>、<font color=orange>无尽火域</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【斗气属性】&nbsp;&nbsp;<font color=red>火</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<三十年河东,三十年河西,莫欺少年穷!></i>',
						qxq_dpcq_yafei: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;米特尔·雅妃,天蚕土豆所著玄幻小说<斗破苍穹>及其衍生作品中的角色,萧炎的红颜知己之一,外号<金之女皇>,米特尔拍卖场首席拍卖师,米特尔家族族长.在乌坦城历练时遇到了萧炎,认为他是自己发现的最有价值的宝物 ,故与之交好.双帝之战后,被萧炎接回乌坦城居住.<br></font><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色境界】&nbsp;&nbsp;斗皇<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;米特尔家族族长<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;米特尔家族、<font color=orange>炎盟</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【斗气属性】&nbsp;&nbsp;未知<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<萧炎弟弟.三年不见.似乎真得变了样了哩.竟然连我都快认不出来了.></i>',
						qxq_dpcq_xiaoxuner: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;萧薰儿,本名古薰儿,天蚕土豆所著异世大陆类玄幻小说<斗破苍穹>及其衍生作品中的女主角之一,<武动乾坤>以及<大主宰>当中客串出场.为古族千金,天之骄女,古族近千年内斗帝血脉觉醒最完美者.拥有异火榜排名第四的金帝焚天炎,后转赠萧炎.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;冷漠又不失温柔,善良不失执着.深爱着丈夫萧炎,可以为他付出一切.实力强横.对待他人态度疏离清冷,唯对萧炎温柔体贴,善解人意.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;双帝之战数十年后晋入斗帝,与萧炎和彩鳞等四帝前往大千世界.在萧炎建立<无尽火域>后为无尽火域主母,与萧炎、彩鳞等人一起抗击域外邪族.<br></font><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色境界】&nbsp;&nbsp;斗帝(斗破)&nbsp;&nbsp;圣品天至尊(大主宰)<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;古族族长的千金、<font color=orange>无尽火域</font>主母<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;古族、<font color=orange>无尽火域</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【斗气属性】&nbsp;&nbsp;<font color=red>火</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<萧炎哥哥,有薰儿在,谁动你,我便杀谁!></i>',
						qxq_dpcq_xiaoyixian: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;小医仙,天蚕土豆所著玄幻小说<斗破苍穹>及其衍生作品中的角色,身负厄难毒体,食毒修炼,万毒不侵,通体毒气.这种会无意识地击杀别人的体质让天性善良的小医仙成为人憎鬼厌的天毒女,在萧炎多次帮助下得以控制.<br></font><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色境界】&nbsp;&nbsp;一星斗圣<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;毒宗宗主、星陨阁长老<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;毒宗、星陨阁、<font color=orange>天府联盟</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【斗气属性】&nbsp;&nbsp;<font color=purple>毒</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<都说了让你走,你却偏不听,现在吃苦头了吧？></i>',
						qxq_dpcq_mdsnw: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;美杜莎女王,<斗破苍穹>女主角之一,又名彩鳞,为加玛帝国塔戈尔大沙漠蛇人部落女王,萧炎的结发之妻.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;霸气冷艳,妖娆绝美,美艳无双,倾国倾城.气质魅惑,身材曲线火爆,连萧薰儿也比不上.被誉为蛇人族部落第一美女.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;天赋异禀,甚至不逊色于萧炎.高冷又不失傲娇,温柔又不失坚强,有着难以想象的执着,拥有君临天下的能力.典型的女王人物.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;萧炎第一个妻子,生有一女,名为萧潇,后与萧炎办了一场婚礼.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;现已和萧薰儿来到大千世界.<br></font><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色境界】&nbsp;&nbsp;斗皇巅峰→斗帝(斗破苍穹)&nbsp;&nbsp;圣品天至尊(大主宰)<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;蛇人部落女王、<font color=orange>无尽火域</font>主母之一<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;蛇人族、<font color=orange>炎盟</font>、<font color=orange>无尽火域</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【斗气属性】&nbsp;&nbsp;<font color=purple>毒</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<老家伙.刚才打的爽了吧？></i>',
						qxq_dpcq_lingying: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;凌影,出自天蚕土豆作品<斗破苍穹>的人物.斗皇强者,为古族派在萧薰儿身边的护卫.<br></font><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;男<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色境界】&nbsp;&nbsp;斗皇<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;古族强者<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;古族<br>&nbsp;&nbsp;&nbsp;&nbsp;【斗气属性】&nbsp;&nbsp;<font color=grey>暗</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<想不到名震加玛帝国的云岚宗,竟是这副德行!整个宗门上千人,竟联手起来对付一个不到二十岁的青年,真是丢尽了当年云破天在大陆上为云岚宗打出来的脸呐!></i>',
						qxq_dpcq_yaochen: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;药尘,天蚕土豆所著异世大陆类玄幻小说<斗破苍穹>及其衍生作品中的角色,<斗破苍穹前传之药老传奇>的主角,<大主宰>中为客串角色,人称药尊者、药圣.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;大陆第一炼药师 ,八品高级炼药宗师 ,后为九品宝丹炼药宗师 .中州星陨阁阁主 、天府联盟盟主 ,拥有异火榜排名十一的骨灵冷火 ,后转赠萧炎 .九转斗尊巅峰强者 ,在萧炎的帮助下重获肉身,突破至半圣 ,后又借助萧炎所带回的黄泉妖圣精血突破至一星斗圣 .来到大千世界后成为无尽火域太上长老,修为达到仙品天至尊后期.<br><br>&nbsp;&nbsp;&nbsp;&nbsp;萧炎的老师,视萧炎为子,是萧炎修炼道路上最为重要的引路人,可以说,没有药尘,就不会有<炎帝>.<br></font><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;男<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色境界】&nbsp;&nbsp;斗圣(斗破)&nbsp;&nbsp;仙品天至尊后期(大主宰)<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;药圣<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;星陨阁、<font color=orange>天府联盟</font>、<font color=orange>无尽火域</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【斗气属性】&nbsp;&nbsp;<font color=red>火</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<哈哈,好,好!我药尘的这双眼睛,总算没有再瞎第二次!哈哈!></i>',
						qxq_dpcq_yunyun: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;云韵,天蚕土豆所著异世大陆类玄幻小说<斗破苍穹>及其衍生作品中的角色,曾化名云芝.加玛帝国十大强者排名第三,三星斗皇强者,云岚宗第九代宗主,纳兰嫣然的老师,师从云岚宗第八代宗主云山.<br></font><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色境界】&nbsp;&nbsp;三星斗皇→八星斗尊<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;云岚宗宗主、花宗宗主<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;云岚宗、花宗<br>&nbsp;&nbsp;&nbsp;&nbsp;【斗气属性】&nbsp;&nbsp;<font color=green>风</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<倔强的家伙,不去就不去,用得着这般嘛.还人情…当我稀罕你这小小斗师的人情不成.></i>',
						qxq_dpcq_naranyanran: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;纳兰嫣然,天蚕土豆所著异世大陆类玄幻小说<斗破苍穹>及其衍生作品中的角色,纳兰家族的大小姐,云岚宗的少宗主.曾与萧炎指腹为婚,但为了拥有自己的幸福与选择命运的权利,在爷爷纳兰桀的不知情下公然前往萧家退婚,使得萧家颜面大失.萧炎一怒之下休妻,并发誓三年之后上云岚宗一洗当日之辱.<br></font><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色境界】&nbsp;&nbsp;斗宗<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;<font color=cyan>原云岚宗下任宗主</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;纳兰家、云岚宗、花宗、<font color=orange>天府联盟</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【斗气属性】&nbsp;&nbsp;<font color=green>风</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<今日的要求,我可以延迟三年,三年之后,你来云岚宗向我挑战,如果输了,我便当众将婚约解除,而到那时候,想必你也进行了家族的成年仪式,所以,就算是输了,也不会让萧叔叔脸面太过难堪,你可敢接？></i>',
						qxq_dpcq_qcttm: '',
						qxq_dpcq_zyys: '',
						qxq_yys_baqidashe: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;来自高天原的邪神<br>&nbsp;&nbsp;&nbsp;&nbsp;曾被封印在阴阳两界的狭间中<br>&nbsp;&nbsp;&nbsp;&nbsp;拥有强大的力量<br>&nbsp;&nbsp;&nbsp;&nbsp;在邪神的眼中<br>&nbsp;&nbsp;&nbsp;&nbsp;人类的死亡与樱花的凋零并无不同<br>&nbsp;&nbsp;&nbsp;&nbsp;邪神从人类身上学会了欺骗与谎言<br>&nbsp;&nbsp;&nbsp;&nbsp;与京都的阴阳师达成了交易<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;自从被封印在阴阳两界的缝隙中,这几百年来,我独自一人,在无边的黑暗中,时而沉睡,又时而醒来.直到有一天,源氏的阴阳师发现了我.<br>&nbsp;&nbsp;&nbsp;&nbsp;源氏的阴阳师想要利用我的力量,为我修建了祭坛.<br>&nbsp;&nbsp;&nbsp;&nbsp;我们达成了交易,源氏向我奉献祭品,作为交换,我赐给源氏我的力量.<br>&nbsp;&nbsp;&nbsp;&nbsp;但是,我在意的并不是源氏的祭品.<br>&nbsp;&nbsp;&nbsp;&nbsp;通过源氏的祭祀,我终于拥有了一只观察人间的眼睛.<br>&nbsp;&nbsp;&nbsp;&nbsp;<人类,就像花期短暂的樱花一样,真脆弱啊.><br>&nbsp;&nbsp;&nbsp;&nbsp;<啊？>源氏的阴阳师惊恐地低下头,<您在和我说话吗,尊贵的蛇神大人？><br>&nbsp;&nbsp;&nbsp;&nbsp;<是啊,你们明明这么脆弱,却想要追求永恒……这可真是……><br>&nbsp;&nbsp;&nbsp;&nbsp;<这是我们的信念.>源氏的阴阳师毫无迟疑地回答我,<家族的繁荣就是我们的信念.><br>&nbsp;&nbsp;&nbsp;&nbsp;<……这可真是无知啊.>我看着那阴阳师单纯而坚定的眼睛,<……不过,你的那份无知,反而令人羡慕.><br>&nbsp;&nbsp;&nbsp;&nbsp;<……您在说什么,蛇神大人？><br>&nbsp;&nbsp;&nbsp;&nbsp;<这个世界上,凡是有生命的东西,只要有开始,就会有结束,只有神例外.>像是自我提醒般的,<……只有神例外.><br>&nbsp;&nbsp;&nbsp;&nbsp;我看向狭间,是无边的黑暗.我要怎样才能穿过阴阳之间的界线,亲自去看看呢？<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;那天突然出现在我面前的源氏阴阳师,名叫源赖光.<br>&nbsp;&nbsp;&nbsp;&nbsp;他的眼神里充满野心和阴谋,就像熊熊燃烧的火焰,却不知道那火焰正在将他自己消耗殆尽.<br>&nbsp;&nbsp;&nbsp;&nbsp;<我叫源赖光.>他年轻而桀骜的脸上,没有一丝畏惧,<尊贵的蛇神,我想请你赐给我,创造生命的力量.><br>&nbsp;&nbsp;&nbsp;&nbsp;<你想要拿那个力量,做什么呢？><br>&nbsp;&nbsp;&nbsp;&nbsp;<我想创造只属于自己的式神.我给你带来了新的祭品,尊贵的蛇神.><br>&nbsp;&nbsp;&nbsp;&nbsp;祭坛上锁着的年轻的巫女,因为恐惧全身都在颤抖.我能感受到从她身上散发出来的灵力,或许……可以用这灵力做一点什么.<br>&nbsp;&nbsp;&nbsp;&nbsp;<我可以把那个力量赐给你.不过,这是有违阴阳之理的行为,只能创造出残缺的生命.><br>&nbsp;&nbsp;&nbsp;&nbsp;<残缺的生命吗？>年轻的脸上浮现出冷漠的笑容,<交易成立.><br>&nbsp;&nbsp;&nbsp;&nbsp;当我的力量进入巫女的身体,她因承受不住这份神力而悲鸣.<br>&nbsp;&nbsp;&nbsp;&nbsp;她就像一朵樱花,凋谢了.<li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;我在等.<br>&nbsp;&nbsp;&nbsp;&nbsp;又是一个新月之夜,逢魔之时.<br>&nbsp;&nbsp;&nbsp;&nbsp;由祭品巫女的鬼魂、怨念和一些腐烂的残肢融合成一团污秽的东西,在祭坛上挣扎、扭动着.<br>&nbsp;&nbsp;&nbsp;&nbsp;终于,那东西化形成了八头八尾的巨蛇.<br>&nbsp;&nbsp;&nbsp;&nbsp;<……还是化成了蛇的样子.>我看着那只巨蛇,<真可惜啊……你们灵魂中本来有许多美丽的东西,但现在却只剩下怨恨了.><br>&nbsp;&nbsp;&nbsp;&nbsp;<复仇……可恶的阴阳师……可恶!罪孽的京都……!><br>&nbsp;&nbsp;&nbsp;&nbsp;被当做力量的容器献祭的巫女,憎恨着阴阳师、憎恨着京都.她们内心产生的恐惧、怨恨变得越来越强,又因为承载了我的力量,她们无法保持自己原本的形态、变成了蛇的样子.<br>&nbsp;&nbsp;&nbsp;&nbsp;<人类的欲望与罪孽孕育出来的怪物.你们既不是人类、也不是妖怪、更不是神……><br>&nbsp;&nbsp;&nbsp;&nbsp;<我是……我是……我是邪神八岐大蛇!!>巨蛇发出痛苦的吼叫,<我是八岐大蛇!我要向京都复仇……!><br>&nbsp;&nbsp;&nbsp;&nbsp;我盯着那只巨蛇,<连自我都舍弃了吗……><br>&nbsp;&nbsp;&nbsp;&nbsp;怪物发出含糊不清的叫声,隐没在祭坛的阴影中.<br>&nbsp;&nbsp;&nbsp;&nbsp;不过,来自阳界巫女们的灵力,和来自暗之间隙的大蛇神的神力……打破阴阳界线的力量,在巨蛇体内孕育着.巨蛇崩坏时,就是我降临人间的机会.<br>&nbsp;&nbsp;&nbsp;&nbsp;那一刻不会太久了.<br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;男<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;<font color=purple>邪神</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;<font color=yellow>高天原</font>(旧)<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<我很感兴趣,人类.></i>',
						qxq_yys_buzhihuo: '【人物简介】<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;原本黑寂的海面上,突然出现了一束火光.<br>&nbsp;&nbsp;&nbsp;&nbsp;火光分裂,滋生,最终成百上千,沿着海面直达天际.<br>&nbsp;&nbsp;&nbsp;&nbsp;这便是大妖怪不知火的传说,它深深地烙印在每一个吉原人的脑海里.<br>&nbsp;&nbsp;&nbsp;&nbsp;每过数十年,不知火便会降临在吉原的海面,带来福祉抑或灾难.<br>&nbsp;&nbsp;&nbsp;&nbsp;不过,传说归传说,真正见过不知火的人,却是寥寥无几.<br>&nbsp;&nbsp;&nbsp;&nbsp;而我,却被赋予了这个神秘又不祥的名字.<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;自从记事起,我便生活在这吉原湾的离岛之上.<br>&nbsp;&nbsp;&nbsp;&nbsp;离岛上并无人居住,只有一座离人阁,一座闻名吉原的烟花之所.<br>&nbsp;&nbsp;&nbsp;&nbsp;我被当作头牌歌姬培养,离人阁之于我是存在的意义,却也是内心的牢笼.<br>&nbsp;&nbsp;&nbsp;&nbsp;每到入夜时分,我一步一步走向伫立在海面之上的舞台.看着远处星星点点的火光,那是慕名而来的游船上的渔灯.<br>&nbsp;&nbsp;&nbsp;&nbsp;待到夜色渐浓,那火光也蔓延开来.它们成百上千,接天连地,一如传说中的大妖怪不知火.<br>&nbsp;&nbsp;&nbsp;&nbsp;歌姬不知火,也许真的是这样呢.<li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;时间原本只是麻木地流逝着,直到一个冒失的阴阳师闯进了我的生活,他仿佛黑暗的房间中照进的一束光线,刺眼却热烈.<br>&nbsp;&nbsp;&nbsp;&nbsp;在我的演出上读懂了我歌声中的无奈,他带着我出海,为我讲述着外面的花花世界.<br>&nbsp;&nbsp;&nbsp;&nbsp;而我,则和着他所作的和歌,跳着真正自由的舞步.<br>&nbsp;&nbsp;&nbsp;&nbsp;夏夜的海黑暗寂静,可是为什么会有火焰？先是遥远的一小束,接着越来越多,蔓延至整个海面.<br>&nbsp;&nbsp;&nbsp;&nbsp;并不是游船的灯火,而是闪动着的橘色火焰,它们随着我的动作起落,仿若相处已久的友人般.<br>&nbsp;&nbsp;&nbsp;&nbsp;也许,在漫长的岁月中,我已经与那传说合而为一了呢.<br><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;<font color=orange>离岛歌姬</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;离岛<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<不知何时起,模糊了人与妖的界限.></i>',
						qxq_yys_cszn: '【人物简介】<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;我从未见过,如此疯狂、残忍的女子.我永远不会忘记她的.<br>&nbsp;&nbsp;&nbsp;&nbsp;在那个月光静谧的夜晚,我正在赶着路.忽然一声惨叫划破夜空.是贼吗？我匆匆跑向下一个路口,不!不是盗贼!那是一个疯子!那个疯子的皮肤,在月光下反射着诡异的光芒,天啊!!她的头上顶着燃烧的蜡烛!她的嘴里发出癫狂的笑声!她手里的锤子,叮!咚!叮!咚!<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;太可怕了!<br>&nbsp;&nbsp;&nbsp;&nbsp;她的笑声让我心里发毛……等等!惨叫是从哪里来的？<br>&nbsp;&nbsp;&nbsp;&nbsp;我颤抖着探头再看……那个疯子无比狰狞地将钉子钉入手中的草人身上,而她的对面,瘫痪着一个人.或者,地上的家伙已经不能称之为人了……地上的可怜家伙随着疯子的动作翻滚着,他挣扎着,等等、他身上喷出的液体是什么？<br>&nbsp;&nbsp;&nbsp;&nbsp;……天啊!!我要逃!!<li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;那个疯子走过来了!向我走过来了!不!不!求求你!放过我……放过我!<br>&nbsp;&nbsp;&nbsp;&nbsp;动弹不得的我,眼睁睁看着她的脸向我靠近,放大,我甚至能看到她诡异的绿色瞳孔里,自己扭曲表情的倒影.<br>&nbsp;&nbsp;&nbsp;&nbsp;「嘘!」她比着手指,向我做了个噤声的动作.<br>&nbsp;&nbsp;&nbsp;&nbsp;我保证,我一辈子都不会说出去.<br><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<嘻嘻嘻~就快结束了~></i>',
						qxq_yys_gwjttz: '【人物简介】<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;记忆中的伊吹,总是伴着悠长的钟声及绵绵细雨.<br>&nbsp;&nbsp;&nbsp;&nbsp;数百年前,山上有座寺庙,许愿尤为灵验,香容络绎不绝.<br>&nbsp;&nbsp;&nbsp;&nbsp;人们都说我是这伊吹山神子,生来就要普度众生.<br>&nbsp;&nbsp;&nbsp;&nbsp;我那时端坐在廊上,日日听着祈福的钟声,香客虔诚地向我跪拜,絮叨迷茫烦恼,我则念经为他们度化.<br>&nbsp;&nbsp;&nbsp;&nbsp;钟声一成不变,佛经一律千篇,唯独世人的烦恼多种多样,怎也渡不完.<br>&nbsp;&nbsp;&nbsp;&nbsp;钟声洪亮悠长,然而听多了,我不免心生厌烦.<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;岁月流逝,僧侣们一个个老去,唯独我还是少年模样,为往来的香客念经.<br>&nbsp;&nbsp;&nbsp;&nbsp;我发现世人的烦恼,也是会变的.<br>&nbsp;&nbsp;&nbsp;&nbsp;人鬼战争四起,百姓生离死別,漫山遍野都是军旗与尸骨.<br>&nbsp;&nbsp;&nbsp;&nbsp;我听着,念着,他们的怨恨像蛇一般缠上我的手脚,日夜在我耳边低语,随着香客们的苦难增生,不断说着人世的荒诞.<br>&nbsp;&nbsp;&nbsp;&nbsp;它说世人皆有相似的脸孔,对神子虔诚而信仰,然而那层皮面下,究竟又藏着怎样的心？<br>&nbsp;&nbsp;&nbsp;&nbsp;我恍然大悟,刹那间怨恨所化的妖气向我冲来,与此同时,我也伸于向它而去,它钻进我的五脏六腑,我却直觉快意.<br>&nbsp;&nbsp;&nbsp;&nbsp;一夜之间我就变了模样,现出鬼爪尖耳,像极了香客口中所说的恶鬼,我在屋中听到钟声响起,走出庙堂,原本对我恭敬的僧侣又惊又怕,把门一关,将我锁在门外,香客们一拥而散,纷纷逃避.<br>&nbsp;&nbsp;&nbsp;&nbsp;我朝老住持门前跑去,房门早已锈蚀,才察觉他已圆寂多年.<li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;我离开了伊吹山,一路远行.<br>&nbsp;&nbsp;&nbsp;&nbsp;抛却神子仁慈的容貌,再无香客向我取经.人们用畏惧的眼神看着我,我便知晓,我从来就不是这匆匆过客中的一员.<br>&nbsp;&nbsp;&nbsp;&nbsp;既已化妖,我跟着妖气指引,往瘴气最浓烈的地域而去,一路上遇到绵延的长军,满山的枯骨.随着鬼域入口愈近,周围不断有人鬼在厮杀.<br>&nbsp;&nbsp;&nbsp;&nbsp;有饥饿的野鬼或武士袭来,厌恶让我伸出鬼爪,利爪瞬间撕裂对方的心脏.炙热的血泼洒在我脸上,不似伊吹山的绵绵细雨,我却如获新生.<br>&nbsp;&nbsp;&nbsp;&nbsp;逐渐深入鬼域,绵延百里的丹波山便是入口.我在这里肆意杀戮.无论是人是鬼,我伸手撕开那些皮面,底下的骨肉和心脏,却都是一般殷红.<br>&nbsp;&nbsp;&nbsp;&nbsp;这世间的规矩,从来不是僧侣口中的清规戒律.弱肉强食,成王败寇,或许这征战不休的恶鬼之地,才是我真正的归途.<br>&nbsp;&nbsp;&nbsp;&nbsp;我脱下僧袍,用妖力点燃,利那间妖火冲中天,方圆百里的人鬼都被妖气叹引,千百之军向我冲来.<br>&nbsp;&nbsp;&nbsp;&nbsp;我大笑起来,来得正好,就让这征战之地成为我的领土与王座,我会用力量让所有人臣服.<br>&nbsp;&nbsp;&nbsp;&nbsp;从此这丹波山上再无神佛,本大爷将会统帅万鬼!<br><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;男<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;<font color=yellow>大江山鬼王</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;大江山<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<这无穷无尽的烈火,将吞噬我最后的动摇!></i>',
						qxq_yys_huiyeji: '【人物简介】<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;我被困在这一小节竹子里,在这片竹林里,一直、一直沉睡着.<br>&nbsp;&nbsp;&nbsp;&nbsp;有一天,一阵突兀的笛声将我唤醒.我从梦中醒来,听着这陌生而清冷的声音,心里却变得温暖了起来.<br>&nbsp;&nbsp;&nbsp;&nbsp;原来这竹林中,除了我,还有其他人在啊……从那天起,我不再是独自一人,还有那笛声一直陪伴着我.它有时在夜晚响起,有时是白天,笛声将我从梦境中唤醒,又伴我入睡.<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;想见见那个吹笛子的人啊……那么美的笛声,一定是个很温柔的人吧.<br>&nbsp;&nbsp;&nbsp;&nbsp;不过到底是什么人,会一直待在竹林里呢？难道竹林中有他的朋友吗？还是说,他和我一样,也被困在了这竹林中呢？<br>&nbsp;&nbsp;&nbsp;&nbsp;我有很多很多问题想问他,有很多很多话想和他说.<br>&nbsp;&nbsp;&nbsp;&nbsp;终于,我从竹子里被解救出来了.我期待地看向四周,竹林中却没有任何人的身影.但是我能感觉到,他一定就在这竹林内.那熟悉的、温柔的氛围,它就在我的身边.<br>&nbsp;&nbsp;&nbsp;&nbsp;可我没有来得及找到他,就被带离了竹林.<li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;之后啊,我一直,一直被关在房间里.<br>&nbsp;&nbsp;&nbsp;&nbsp;虽然大家对我很温柔,但我还是会想念那片竹林,和竹林中那吹笛子的人.<br>&nbsp;&nbsp;&nbsp;&nbsp;可是我到最后,都不知道他到底是谁……<br>&nbsp;&nbsp;&nbsp;&nbsp;真想见到他,对他说一句,<谢谢>.还有,<你的笛声真好听>.<br><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;<font color=cyan>天女</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;<font color=cyan>月宫</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<温柔的月光啊,请照亮我们.></i>',
						qxq_yys_jiaotu: '【人物简介】<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;呐呐~你听说了吗？最近人类那边的世界,好玩的东西越来越多了.有水一样的胭脂,有会 闪闪发光的米粉,还有一条一条的口脂!我真的好想去看一看呀.<br>&nbsp;&nbsp;&nbsp;&nbsp;可是,我家住在这么远这么远的深海里,根本……出不去.谁都好,带我离开这牢笼般的深海,带我去看看人类的世界吧？<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;碰到您,真的太幸运了!我以我的名字作交换,成为您的侍从,请带我到外面的世界看一看吧!<li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;但是,为什么您带我来了,又离开了？是我不够听话吗？是我太喜欢摆弄胭脂？还是我不够强大,不能帮助您了？<br>&nbsp;&nbsp;&nbsp;&nbsp;我会忍住的,不会总想着要新的玩具.我会乖乖的,客人来时不会躲进壳里.我会听话的!当您需要时,绝不吝啬我的力量.<br>&nbsp;&nbsp;&nbsp;&nbsp;求求您,不要抛弃我.<br>&nbsp;&nbsp;&nbsp;&nbsp;还有,我找不到我的主人了,也找不到回家的路.<br>&nbsp;&nbsp;&nbsp;&nbsp;您可以,收留我吗……？<br><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;无<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;无<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<痛痛,分一分就飞走了~呼呼~></i>',
						qxq_yys_qianji: '【人物简介】<br>&nbsp;&nbsp;&nbsp;&nbsp;年幼时的梦境里<br>&nbsp;&nbsp;&nbsp;&nbsp;母亲的身影渐行渐远<br>&nbsp;&nbsp;&nbsp;&nbsp;任凭千姬怎样追逐呼喊<br>&nbsp;&nbsp;&nbsp;&nbsp;都不曾为她驻足<br>&nbsp;&nbsp;&nbsp;&nbsp;隐蔽的礁石群是她独享的乐园<br>&nbsp;&nbsp;&nbsp;&nbsp;在这里,她不再被潮汐所拒绝<br>&nbsp;&nbsp;&nbsp;&nbsp;能尽情倾诉自己内心的卑微与不甘<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;自称八百比丘尼的女人拜访永生之海时,我想起了年幼时曾经做的一个梦.<br>&nbsp;&nbsp;&nbsp;&nbsp;我的母亲,历任最强的女王,她带领着鲛人族征战四海,成为绝对的海上霸主.<br>&nbsp;&nbsp;&nbsp;&nbsp;她的英姿铭刻在每一位鲛人的心中,所有的子民都虔诚地信仰这位女王.<br>&nbsp;&nbsp;&nbsp;&nbsp;闲暇时,女王会亲自聆听新生鮫人的歌唱,给予其祝福.<br>&nbsp;&nbsp;&nbsp;&nbsp;我虽然是女王的孩子,但也和其他鲛人一样期盼着这一刻.<br>&nbsp;&nbsp;&nbsp;&nbsp;怀着激动与不安的心情,我第一次站在女王面前,生涩地唱起了歌.<br>&nbsp;&nbsp;&nbsp;&nbsp;周围的潮汐像是被我的胆怯感染,焦躁地拍打着水之结界,女王挥手,潮汐便安静下来.<br>&nbsp;&nbsp;&nbsp;&nbsp;女王听着我笨拙不安的歌声,她冷漠地让我停止歌唱,没有将祝福赐予我.<br>&nbsp;&nbsp;&nbsp;&nbsp;最终,女王背对着我,在梦里越走越远.<br>&nbsp;&nbsp;&nbsp;&nbsp;年幼的我跟在后面,无论如何呼喊、奔跑,都无法追上母亲.<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;在月光洒落的夜晚,我会偷偷地来到海上某个隐僻的礁石群.<br>&nbsp;&nbsp;&nbsp;&nbsp;这里是我的秘密乐园,我可以在这里尽情地唱歌.只有在这里,我的歌声不会被潮汐拒绝.<br>&nbsp;&nbsp;&nbsp;&nbsp;我可以彻夜高歌,唤醒沉睡的大海,而内心的某处也卑微地期待着能唤醒母亲对我的爱.<br>&nbsp;&nbsp;&nbsp;&nbsp;又是一个夜晚,我独自坐在礁石上,面对红月与沉静的深海歌唱.<br>&nbsp;&nbsp;&nbsp;&nbsp;我的喉咙却突然发疼,发声就如婴儿走路时磕磕碰碰,险些不成音调.<br>&nbsp;&nbsp;&nbsp;&nbsp;海潮拍击礁石,狂风骤雨顷刻袭来,像是利刃般撕裂我的身躯,鳞片生长的肌肤犹如遭受千针刺入.<br>&nbsp;&nbsp;&nbsp;&nbsp;我不甘心.哪怕神形俱灭,我也依旧挺直胸膛,固执地面对这潮汐激起的愤怒.<br>&nbsp;&nbsp;&nbsp;&nbsp;在意识消失前,我听见了婴孩的啼哭声,以及那古老的神圣歌声.<br>&nbsp;&nbsp;&nbsp;&nbsp;梦幻与现实交织,我像是坠入柔软的梦中,有母亲轻柔的低语.<li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;我拨开浓雾,眼前是沉寂深海的鲛人领地,子民们在噩梦中绝望地祷告.<br>&nbsp;&nbsp;&nbsp;&nbsp;日复一日,我听着那些哀嚎入睡,痛饮悔恨的泪水.<br>&nbsp;&nbsp;&nbsp;&nbsp;亲吻着沉睡中女王的手,我明白了自己所期望的使命.<br>&nbsp;&nbsp;&nbsp;&nbsp;即使我并非鲛人族的正统女王,我也要带领族群破冰前行,这就是我的选择.<br>&nbsp;&nbsp;&nbsp;&nbsp;我彻夜不眠地唱着古老的歌谣,祈求破晓到来,未来将至.<br>&nbsp;&nbsp;&nbsp;&nbsp;潮汐簇拥着我,给予我无尽的痛苦,也给予我实现愿望的力量.<br>&nbsp;&nbsp;&nbsp;&nbsp;我看见冰川崩裂的景象,看见成群的鲛人跃出水面,看见停止的时间开始转动.<br>&nbsp;&nbsp;&nbsp;&nbsp;我的歌声一定会传到某个地方,在那里绽放,追逐最初的念想.<br>&nbsp;&nbsp;&nbsp;&nbsp;如果母亲此刻看着我,她一定会为我自豪吧.<br>&nbsp;&nbsp;&nbsp;&nbsp;我的身边不断地升起绚烂的泡沫,朝着朝阳缓缓逝去.<br><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;<font color=cyan>鲛人族</font>女王<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;<font color=cyan>鲛人族</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<在永生之海,时间并没有意义.></i>',
						qxq_yys_rihefang: '【人物简介】<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;呼啊---!今天也是大晴天呢!诶,等等、地、地上怎么躺了一个人......<br>&nbsp;&nbsp;&nbsp;&nbsp;日和坊:「喂!喂!你没事吧？喂......」<br>&nbsp;&nbsp;&nbsp;&nbsp;怎、怎么回事,他都没有反应......<br>&nbsp;&nbsp;&nbsp;&nbsp;唔？好像有黏糊糊的东西......血!他受伤了,天呐---!好严重的伤.总、总之先想办法清理一下伤口、包扎一下好了.<br>&nbsp;&nbsp;&nbsp;&nbsp;日和坊:「先撑住哦!千万、千万不要出事啊!」<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;虽然想办法处理了伤口......也拼命把他搬到了家里......但是这么严重的伤,还是把金鱼爷爷叫过来比较保险吧？<br>&nbsp;&nbsp;&nbsp;&nbsp;可是也不能把他一个人丢在这里啊!<br>&nbsp;&nbsp;&nbsp;&nbsp;日和坊:「对了!晴天娃娃,能拜托你帮我把金鱼爷爷请到家里来吗？」<br>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃:「......」<li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;所金鱼爷爷什么时候才会来呢......不过说起来,这个人穿着忍者似的衣服呢.而且还带着面具......<br>&nbsp;&nbsp;&nbsp;&nbsp;会不会是什么危险的人呀!<br>&nbsp;&nbsp;&nbsp;&nbsp;晴天娃娃:「呜啊!」(污)<br>&nbsp;&nbsp;&nbsp;&nbsp;想到这里,我忍不住吓得跳了起来.<br>&nbsp;&nbsp;&nbsp;&nbsp;木灵:「唔......」<br>&nbsp;&nbsp;&nbsp;&nbsp;他、他醒了!说、说什么好呢......<br>&nbsp;&nbsp;&nbsp;&nbsp;我、我好紧张!<br>&nbsp;&nbsp;&nbsp;&nbsp;木灵:「谢谢你......」<br>&nbsp;&nbsp;&nbsp;&nbsp;他的声音真温柔啊......我冲过去,握住了他的手.<br>&nbsp;&nbsp;&nbsp;&nbsp;我会救你的,我一定要救你.<br><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;无<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;无<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<绝对,绝对不可以放弃!></i>',
						qxq_yys_tianjianrenxinguiqie: '【人物简介】<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;烈火,无穷无尽的烈火包裹了我的身体.<br>&nbsp;&nbsp;&nbsp;&nbsp;锻钢的锤子,穿过那簇幽蓝的烈火用力地朝我砸了下来,落锤的一瞬火星四射.<br>&nbsp;&nbsp;&nbsp;&nbsp;我的断刃在火中融化,如水般柔软,锤子不断击打着刀身,随着锤击,我的刀身已被折叠千百次,我折作千万片,化为一-滩钢水,历经无数痛苦的曲折.<br>&nbsp;&nbsp;&nbsp;&nbsp;被锻造的剧痛一口气点燃了我的记忆,我有如绝处逢生般燃起妖火.<br>&nbsp;&nbsp;&nbsp;&nbsp;这剧痛,是我曾在源氏斩尽天下恶鬼的磨砺,是我血洗源宅那夜同归于尽时的疯狂,锻钢的锤子一下一下地击打,我想起大江山- -战,面对海妖结界时玉石俱焚的决绝,所背负的一切痛苦,终将我折断.<br>&nbsp;&nbsp;&nbsp;&nbsp;那铁锤死死咬住我,带来挫折与磨难,却使我越烧越旺,越发坚韧.<br>&nbsp;&nbsp;&nbsp;&nbsp;我心曾至刚易折,经历的所有苦难化为这业火与锤击,千锤百炼.<br>&nbsp;&nbsp;&nbsp;&nbsp;我要向这一炉烈火,要一颗刚而不折的,韧心.<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;锻打刀芯之后,我的身体燃烧着朝日一般的鲜红.为使我的灵魂能重归刀中,源赖光将烧红的刀刃插入冰冷的契约之血,升起一片血雾,刀刃弯曲着,火焰收入刀身中,露出新生的锋芒.<br>&nbsp;&nbsp;&nbsp;&nbsp;而我的形体终于自黑暗中凝结而出,从彼世的缝隙间坠落,落地时的第一声脚步沉闷而苦痛,却并不迷茫.<br>&nbsp;&nbsp;&nbsp;&nbsp;我站定抬起头来,看到面前的人,才察觉身体有异,正要问询,他却先一-步说.<br>&nbsp;&nbsp;&nbsp;&nbsp;<你的刀身刚被重塑,力量尚未回复,所以暂时只能以这幅样子示人,等到回复力量,形体也会回复如初.><br>&nbsp;&nbsp;&nbsp;&nbsp;<最好的方法就是勤加锻炼,你出自源氏,这里是回复的捷径,你我恩仇相抵,去留也就随你自便.><br>&nbsp;&nbsp;&nbsp;&nbsp;<我不会再逃避,这里是属于我最好的磨刀石.待回复之日,愿与你进行一场堂堂正正的对决><br>&nbsp;&nbsp;&nbsp;&nbsp;源赖光似乎有些惊讶,这一场锻刀来得急且快,此时仍卷着两手袖子,我才发现他的手臂上缠绕着层层叠叠的绷带,渗出血迹.我刚想开口问那伤口,他突然仰天而笑,端起手中新锻之刀,递于我面前.<br>&nbsp;&nbsp;&nbsp;&nbsp;<拭目以待.><li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;我初来源氏时,曾被授予过锻刀之道.<br>&nbsp;&nbsp;&nbsp;&nbsp;一把好刀, 需要历经极为艰难的打造,锻以火、覆以土、淬以水、砥以金、存以木.<br>&nbsp;&nbsp;&nbsp;&nbsp;用坚硬的钢锻刀,刀刃会十分锋利,但却容易断裂,越坚硬的东西其实越脆弱易折.但若使用柔软的钢,就只得牺牲硬度,刀不易断,却也不会利,甚至会在斩劈后翻卷.<br>&nbsp;&nbsp;&nbsp;&nbsp;武士刀的成就在子刚与柔的结合,这矛盾的二者,令刀兼具坚硬与韧性.历经干锤百炼,造就至坚之锋与至韧之芯,而成天下至强之刃.<br>&nbsp;&nbsp;&nbsp;&nbsp;我愿做天下至强之刃,从今往后,以源氏为磨刀石,以手中之刃为信念,只为自己的本心而落斩,斩尽世间之恶念.<br>&nbsp;&nbsp;&nbsp;&nbsp;我即是斩断你如恶鬼般妄念的那一把, 鬼切.<br><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;男<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;<font color=purple>斩鬼之刃</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;源氏家族<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<斩断你如恶鬼般的妄念!></i>',
						qxq_yys_yuanjieshen: '【人物简介】<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;我是依靠人类姻缘而诞生的神明,最初的我还有点小窃喜,毕竟姻缘是如此美好的东西,而且人类都离不开姻缘,这样过不了多久,我就能成为一~位名震四方的强大神明了!<br>&nbsp;&nbsp;&nbsp;&nbsp;可我没有想到,人类如此容易变心,曾经的海誓山盟,好不容易结成的姻缘,都能随意毁去.姻缘终结,我得到的力量也会随之散去.虽然身为缘结神,但现在的我一点都不相信命中注定的姻缘了,一生之诺,人类可是做不到的.<br>&nbsp;&nbsp;&nbsp;&nbsp;百年之前,人界还没有种种夺目的诱惑,那时一封书信、 一次牵手都连接着一-段段姻缘.彼时的我也还身着华贵的服饰,拥有着富丽堂皇的神社.<br>&nbsp;&nbsp;&nbsp;&nbsp;物质的繁华让一颗颗纯净的初心变色,人界的色彩愈加灼目,我却慢慢地褪色.最终我的神社只剩下一个盒子般大小,光鲜的锦衣也无法再维持了.<br>&nbsp;&nbsp;&nbsp;&nbsp;但我才不会放弃,我带着神社去各地旅行,帮助途中的人们缔结姻缘.别看我的神社很小,但是作为神明的气派可是一点都没有少的!<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;严冬时我途经京都的远郊,斗笠上坠着厚厚的积雪.远处一位年迈的婆婆倒在雪地中,我冲上前时,她被另- -位拾荒的老者救起,我看到了他们之间浅浅的姻缘线.<br>&nbsp;&nbsp;&nbsp;&nbsp;婆婆有重症在身,记忆时有时无,行为举止也异于常人.爷爷月明拾荒,日出照顾她.婆婆渐渐好转,甚至学会了写字,那是他给与的名字,幸子.也许他们年轻时没有握住彼此的缘分,但风烛残年之际相遇,亦是一种幸运.<br>&nbsp;&nbsp;&nbsp;&nbsp;我精心地保护着他们的姻缘线,但是爷爷的子女却不愿接受这位来历不明的老人.<br>&nbsp;&nbsp;&nbsp;&nbsp;[你连自己都照顾不好,身体三天两头出问题,还想再给我们添一一个累赘吗？ ]<br>&nbsp;&nbsp;&nbsp;&nbsp;[都这个岁数了还想再找个伴侣,说出去太丢我们的脸了!]<br>&nbsp;&nbsp;&nbsp;&nbsp;被亲人当做累赘的两位老者,于刺骨的雪地中相遇,在孤独的生活中逐渐惺惺相惜,心中甚至萌发了初恋般的悸动.<br>&nbsp;&nbsp;&nbsp;&nbsp;这根脆弱的姻缘线在慢慢变浅,为何、为何缘分要被世俗所束缚!<br>&nbsp;&nbsp;&nbsp;&nbsp;什么都不懂的婆婆,却仿佛知晓了爷爷的困境.皑皑白雪,残破草屋,她籍籍无名而来,又带着名字与回忆独自离去,只留下了一-封字迹支离的信.<br>&nbsp;&nbsp;&nbsp;&nbsp;[幸子在这个年纪遇见你很幸运,与我相遇的你感到幸福吗？我不想失去你,但更不想你受苦,我们来生再见.]<li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;我曾赤诚地对待每一段姻缘,也曾因丧失信仰之力埋怨过、丢脸过、自暴自弃过.<br>&nbsp;&nbsp;&nbsp;&nbsp;那段时间,我强行将有注定姻缘的人连结在一起,却往往起了反作用.<br>&nbsp;&nbsp;&nbsp;&nbsp;会失去的不止有缘分,还有自己的初心.<br>&nbsp;&nbsp;&nbsp;&nbsp;知晓婆婆离开后,爷爷便踉跄着追了出去,泪水淹没了他昏花的眼.<br>&nbsp;&nbsp;&nbsp;&nbsp;我暗下决定,一-定要帮助他们结缘.<br>&nbsp;&nbsp;&nbsp;&nbsp;即使已满头白发、步履蹒跚, 也有握住缘分的资格.<br>&nbsp;&nbsp;&nbsp;&nbsp;我又一次用神力强行将姻缘线连结在一-起,但心境却与以往不同了.<br>&nbsp;&nbsp;&nbsp;&nbsp;彼时的我只想要通过缔结姻缘回复神力,而此刻的我,希望他们能幸福.<br>&nbsp;&nbsp;&nbsp;&nbsp;那些海誓山盟再次回荡在我耳中.<br>&nbsp;&nbsp;&nbsp;&nbsp;[我想念你,却在心底说不出口.]<br>&nbsp;&nbsp;&nbsp;&nbsp;[想跟你永远在一起,就算未来日子会很苦,只要有你在,就足够了.]<br>&nbsp;&nbsp;&nbsp;&nbsp;[拜托啦缘结神!我真的好喜欢他,好喜欢他! 请保佑他能注意到我吧.]<br>&nbsp;&nbsp;&nbsp;&nbsp;[我配不上她,但为了她,我愿意变成更好的自己.]<br>&nbsp;&nbsp;&nbsp;&nbsp;......<br>&nbsp;&nbsp;&nbsp;&nbsp;山林间所有的姻缘线受神力的召唤瞬间明亮,铃音在夜空响彻.<br>&nbsp;&nbsp;&nbsp;&nbsp;婆婆抬起头,看见了那张在心底思念至深的面孔.<br>&nbsp;&nbsp;&nbsp;&nbsp;以红线为桥、红线为路,没有人来打扰,他们终于在这如梦似幻的景色中握紧了缘分.<br>&nbsp;&nbsp;&nbsp;&nbsp;虽然不能像其他神明般给他们带来富丽堂皇的生活,但我会努力守护好这份姻缘,这就是我存在的意义.<br>&nbsp;&nbsp;&nbsp;&nbsp;这一刻,我又开始相信缘分了.<br>&nbsp;&nbsp;&nbsp;&nbsp;等待也许很辛苦,但绝不会被辜负.缘分也许会迟到,但永远不会缺席.<br>&nbsp;&nbsp;&nbsp;&nbsp;不管路途多远,要走多久,我都会来为你结缘,所以请一定要相信缘分.<br><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;<font color=yellow>缘结神</font><br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;<font color=yellow>高天原</font><br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<我可以单身,但你们必须结缘!></i>',
						qxq_yys_zuofutongzi: '【人物简介】<li>传记一</li>&nbsp;&nbsp;&nbsp;&nbsp;我是座敷童子.藏到人们的家里,给他们带去财富和幸运,就是我的职责哦.<br>&nbsp;&nbsp;&nbsp;&nbsp;所以呀,大家都拼命想把我招到家里面去.<br>&nbsp;&nbsp;&nbsp;&nbsp;像是多准备一个小孩的房间啦、在地板下藏钱什么的,人们会这么做,全都是为了引起我的兴趣.<br>&nbsp;&nbsp;&nbsp;&nbsp;不过最后,那些人都只是为了自己的幸福.而我的感受,他们根本就不在乎!<br>&nbsp;&nbsp;&nbsp;&nbsp;「他们想要的,是我带去的好运,并不是我!」<br>&nbsp;&nbsp;&nbsp;&nbsp;……就是从那个时候,我有了这种想法.<li>传记二</li>&nbsp;&nbsp;&nbsp;&nbsp;「啊呀,真是可爱.」<br>&nbsp;&nbsp;&nbsp;&nbsp;她一边对我这么说,一边笑得连脸上的皱纹都堆在一起了.<br>&nbsp;&nbsp;&nbsp;&nbsp;这种笑脸,我太熟悉了.她肯定是想要把我留在家里,才故意对我笑的.<br>&nbsp;&nbsp;&nbsp;&nbsp;「你又来啦,我好高兴.给,你要吃点心吗？」<br>&nbsp;&nbsp;&nbsp;&nbsp;哼,像这种虚伪的笑脸,我才不会被骗呢!<br>&nbsp;&nbsp;&nbsp;&nbsp;……不过我喜欢零食,既然一定要你给我,那我就收下好啦.<br>&nbsp;&nbsp;&nbsp;&nbsp;「你已经是我们家的孩子了呢.」<br>&nbsp;&nbsp;&nbsp;&nbsp;你这种谎话,我才不会相信的!<br>&nbsp;&nbsp;&nbsp;&nbsp;不过……要是真的能见到我的母亲,我是不是也有这种心情呢？哼,我只是想象了一下而已.<li>传记三</li>&nbsp;&nbsp;&nbsp;&nbsp;「咳,咳咳……啊,你在帮我拍拍背吗？谢谢你.」<br>&nbsp;&nbsp;&nbsp;&nbsp;她的身体越来越不好了……<br>&nbsp;&nbsp;&nbsp;&nbsp;怎么会这样!？我明明给这户人家带来了这么多好运!<br>&nbsp;&nbsp;&nbsp;&nbsp;为什么我不能治愈疾病、消除饥饿!<br>&nbsp;&nbsp;&nbsp;&nbsp;看来我是没办法化解这场灾祸了,但是,我可不会就这么什么都不反抗的!<br>&nbsp;&nbsp;&nbsp;&nbsp;母亲她……她就由我来保护!<br><br><li>角色信息:</li>&nbsp;&nbsp;&nbsp;&nbsp;【性别】&nbsp;&nbsp;女<br>&nbsp;&nbsp;&nbsp;&nbsp;【角色身份】&nbsp;&nbsp;无<br>&nbsp;&nbsp;&nbsp;&nbsp;【所属势力】&nbsp;&nbsp;无<br><br>&nbsp;&nbsp;&nbsp;&nbsp;<font color=gray><i>————<大家的运气,我就先收下啦.></i>',
					},
					characterSort: {
						dpcqyys_Character: {
							dpcq: ['qxq_dpcq_xiaoyan', 'qxq_dpcq_yafei', 'qxq_dpcq_xiaoxuner', 'qxq_dpcq_xiaoyixian', 'qxq_dpcq_mdsnw', 'qxq_dpcq_qcttm', 'qxq_dpcq_zyys', 'qxq_dpcq_haibodong', 'qxq_dpcq_yaochen', 'qxq_dpcq_yunyun', 'qxq_dpcq_naranyanran', 'qxq_dpcq_lingying'],
							yys: ['qxq_yys_cszn', 'qxq_yys_jiaotu', 'qxq_yys_rihefang', 'qxq_yys_yuanjieshen', 'qxq_yys_baqidashe', 'qxq_yys_tianjianrenxinguiqie', 'qxq_yys_buzhihuo', 'qxq_yys_huiyeji', 'qxq_yys_zuofutongzi', 'qxq_yys_gwjttz', 'qxq_yys_qianji'],
							boss: ['qxq_yys_bossbqds', 'qxq_yys_bosszbqds'],
						},
					},
					characterTitle: {
						qxq_dpcq_xiaoyan: "<body><samp id='炎帝'>炎帝</samp></body><style>#炎帝{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_dpcq_yafei: "<body><samp id='米特尔拍卖会首席拍卖师'>米特尔拍卖会首席拍卖师</samp></body><style>#米特尔拍卖会首席拍卖师{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style><br>【武将设计】:世中人",
						qxq_dpcq_xiaoxuner: "<body><samp id='古族之女'>古族之女</samp></body><style>#古族之女{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_dpcq_xiaoyixian: "<body><samp id='厄难毒体'>厄难毒体</samp></body><style>#厄难毒体{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_dpcq_mdsnw: "<body><samp id='蛇人族女皇'>蛇人族女皇</samp></body><style>#蛇人族女皇{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style><br>【武将设计】:世中人",
						qxq_dpcq_lingying: "<body><samp id='古族强者'>古族强者</samp></body><style>#古族强者{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_dpcq_qcttm: "<body><samp id='远古の遗种'>远古の遗种</samp></body><style>#远古の遗种{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_dpcq_zyys: "<body><samp id='高阶魔兽'>高阶魔兽</samp></body><style>#高阶魔兽{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_dpcq_haibodong: "<body><samp id='加玛帝国十大强者——冰皇'>加玛帝国十大强者——冰皇</samp></body><style>#加玛帝国十大强者——冰皇{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style><br>【武将设计】:世中人",
						qxq_dpcq_yaochen: "<body><samp id='药圣'>药圣</samp></body><style>#药圣{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_dpcq_yunyun: "<body><samp id='云岚宗宗主'>云岚宗宗主</samp></body><style>#云岚宗宗主{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_dpcq_naranyanran: "<body><samp id='纳兰家族之女'>纳兰家族之女</samp></body><style>#纳兰家族之女{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_cszn: "<body><samp id='R级式神'>R级式神</samp></body><style>#R级式神{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yyscaoren: "<body><samp id='草人'>草人</samp></body><style>#草人{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_jiaotu: "<body><samp id='R级式神'>R级式神</samp></body><style>#R级式神{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_rihefang: "<body><samp id='SR级式神·晴空日和'>SR级式神·晴空日和</samp></body><style>#SR级式神·晴空日和{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_yuanjieshen: "<body><samp id='SSR级式神·元气少女'>SSR级式神·元气少女</samp></body><style>#SSR级式神·元气少女{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_baqidashe: "<body><samp id='SSR级式神·坠入黑暗的神明'>SSR级式神·坠入黑暗的神明</samp></body><style>#SSR级式神·坠入黑暗的神明{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_tianjianrenxinguiqie: "<body><samp id='SP级式神·坚韧の兵器'>SP级式神·坚韧の兵器</samp></body><style>#SP级式神·坚韧の兵器{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_buzhihuo: "<body><samp id='SSR级式神·离岛歌姬'>SSR级式神·离岛歌姬</samp></body><style>#SSR级式神·离岛歌姬{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_huiyeji: "<body><samp id='SSR级式神·竹中少女'>SSR级式神·竹中少女</samp></body><style>#SSR级式神·竹中少女{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_zuofutongzi: "<body><samp id='R级式神'>R级式神</samp></body><style>#R级式神{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_gwjttz: "<body><samp id='SP级式神·大江山鬼王'>SP级式神·大江山鬼王</samp></body><style>#SP级式神·大江山鬼王{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_qianji: "<body><samp id='SSR级式神·手持大戟的海女'>SSR级式神·手持大戟的海女</samp></body><style>#SSR级式神·手持大戟的海女{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_bossbqds: "<body><samp id='坠入黑暗的神明'>坠入黑暗的神明</samp></body><style>#坠入黑暗的神明{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_bosszbqds: "<body><samp id='坠入黑暗的神明'>坠入黑暗的神明</samp></body><style>#坠入黑暗的神明{animation:change 7s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
					},
					skill: {
						hlyh: {
							equipSkill: true,
							init(player) {
								player.storage.hlyh = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·红莲业火',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第八</b>,十二业火诸般合力,焚尽世间一切罪恶!<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间一回合);你受到伤害时,若伤害来源没有罪业标记,则伤害来源添加等同于伤害数量的标记,若伤害来源已有罪业标记,则添加伤害数量两倍的标记数量(无冷却).',
							},
							trigger: {
								player: ['damageEnd'],
							},
							nobracket: true,
							forced: true,
							round: 1,
							filter(event, player) {
								return event.source;
							},
							async content(event, trigger, player) {
								if (trigger.source.countMark('zuiye') <= 0) {
									trigger.source.addSkill('zuiye');
									trigger.source.markSkill('zuiye');
									trigger.source.addMark('zuiye', trigger.num);
								} else {
									trigger.source.addMark('tunyan', 2 * trigger.num);
								}
							},
							group: ['hlyh_damage', 'hymy', 'hlyh_roundcount', 'hlyh_S'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBefore',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['hlyh_damage_roundcount'],
								},
								S: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 2,
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'fire') return false;
										if (event.name == 'damage' && event.nature == 'fire') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('xwty_S');
									},
									logTarget: 'player',
									content() {
										'step 0';
										if (trigger.player.countMark('zuiye') <= 0) {
											var A = trigger.num;
											trigger.player.addSkill('zuiye');
											trigger.player.markSkill('zuiye');
											trigger.player.addMark('zuiye', A);
										} else {
											var A = trigger.num;
											var B = 2 * A;
											trigger.player.addMark('zuiye', B);
										}
									},
									group: ['hlyh_S_roundcount'],
								},
							},
						},
						xwty: {
							equipSkill: true,
							init(player) {
								player.storage.xwty = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·虚无吞炎',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第二</b>,此火生于虚无中,无相可寻,无形可抓,是一种奇异的存在,虚无吞炎,号称吞天噬地之物,拥有着吞噬万物之能,天地之间,唯有寥寥可数的东西,方才能够抗衡那种吞噬之能.<br><li><b>此火效果</b>:你获得对你造成伤害的牌并获得一个标记(无冷却);你免疫火伤,并且免疫时摸一张牌并回复一点体力(无冷却);你将受判定时,若当前是你的准备阶段,你获得判定区内的牌并获得一个标记,否则你获得你的判定结果牌并获得一个标记(无冷却);你即将受到伤害时,进行判定,若为黑色,则获得伤害来源的所有手牌牌并获得一个标记,若为红色,则获得伤害来源的所有装备区内的牌并获得一个标记(冷却时间三回合);你的回合开始时,若你的标记数大于3个,可弃置三个标记,选择一至三名角色获得<子火>直到其回合结束,拥有虚无吞炎<子火>的玩家可在出牌阶段选择一个目标,视为使用一张顺手牵羊;你造成火属性伤害后,你弃置你已有一半的标记数,目标被加上相当于你标记数五分之一(向下取整)的<吞炎>标记,拥有<吞炎>标记的角色少摸X张牌(X相当于<吞炎>标记的数量).<br><br><b><li>当前标记数为#枚</b>',
							},
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0]) == 'd';
							},
							forced: true,
							content() {
								player.storage.xwty++;
								player.gain(trigger.cards);
								player.$gain2(trigger.cards);
								if (player == game.me && (player.name.includes('xwty') || player.name.includes('虚无吞炎') || (player.name2 != undefined && (player.name2.includes('xwty') || player.name2.includes('虚无吞炎')))) && lib.config.achievement.wei.luanshidejianxiong.finished != true) {
									if (_status.achievement1 == undefined) _status.achievement1 = {};
									if (Array.isArray(trigger.cards))
										for (var i of trigger.cards) {
											if (i.name == 'nanman') {
												if (_status.achievement1.luanshidejianxiong1 == undefined) _status.achievement1.luanshidejianxiong1 = 0;
												_status.achievement1.luanshidejianxiong1++;
											}
											if (i.name == 'wanjian') {
												if (_status.achievement1.luanshidejianxiong2 == undefined) _status.achievement1.luanshidejianxiong2 = 0;
												_status.achievement1.luanshidejianxiong2++;
											}
										}
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										if (get.tag(card, 'damage')) return [1, 0.55];
									},
								},
							},
							group: ['hymydr', 'xwty_damage', 'xwty_B', 'xwty_C', 'xwty_D', 'xwty_A', 'xwty_S'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 1,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['xwty_damage_roundcount'],
								},
								S: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 2,
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'fire') return false;
										if (event.name == 'damage' && event.nature == 'fire') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('xwty_S');
									},
									logTarget: 'player',
									content() {
										'step 0';
										if (trigger.player.countMark('tunyan') <= 0) {
											var A = player.countMark('xwty');
											var B = A / 5;
											var C = Math.floor(B);
											var D = A / 2;
											var E = Math.floor(D);
											trigger.player.addSkill('tunyan');
											trigger.player.markSkill('tunyan');
											trigger.player.addMark('tunyan', C);
											player.storage.xwty -= E;
										} else {
											var A = player.countMark('xwty');
											var B = A / 5;
											var C = Math.floor(B);
											var D = A / 2;
											var E = Math.floor(D);
											trigger.player.addMark('tunyan', C);
											player.storage.xwty -= E;
										}
									},
									group: ['xwty_S_roundcount'],
								},
								A: {
									derivation: ['xwtyzihuo'],
									enable: 'phaseUse',
									filterCard(card) {
										return true;
									},
									position: 'he',
									usable: 1,
									round: 2,
									filter(event, player) {
										return player.countCards('he') > 0 && player.countMark('xwty') > 3;
									},
									check(card) {
										return 10 - get.value(card);
									},
									filterTarget(card, player, target) {
										return true;
									},
									selectTarget: [1, 3],
									async content(event, trigger, player) {
										//QQQ
										player.storage.xwty -= 3;
										event.targets[0].addTempSkill('xwtyzihuo', { player: 'phaseAfter' });
									},
									ai: {
										order: 10,
										result: {
											target(player, target) {
												if (player == target && player.countCards('h') < player.hp) return 20;
												return get.recoverEffect(target, player, target);
											},
										},
										threaten: 2,
									},
									group: ['xwty_A_roundcount'],
								},
								B: {
									trigger: {
										player: 'judgeEnd',
									},
									forced: true,
									content() {
										player.gain(trigger.result.card, 'gain2');
										player.draw();
										player.storage.xwty++;
									},
								},
								C: {
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									filter(event, player) {
										return player.countCards('j') > 0;
									},
									content() {
										var hs = player.getCards('j');
										player.gain(hs).set('delay', false);
										player.storage.xwty++;
									},
								},
								D: {
									trigger: {
										player: 'damageEnd',
									},
									round: 3,
									filter(event, player, source) {
										return event.player != event.source && event.player.storage.xwty && event.source != undefined;
									},
									forced: true,
									content() {
										'step 0';
										trigger.player.judge(function (card) {
											return 1;
										});
										('step 1');
										if (get.color(result.card) == 'black') event.bool = 'get1';
										if (get.color(result.card) == 'red') event.bool = 'get1';
										('step 2');
										if (result.bool) {
											player.line(result.targets);
											if (event.bool == 'get1') {
												var hs = trigger.source.getCards('h');
												trigger.player.gain(hs).set('delay', false);
												player.storage.xwty++;
											}
										}
										if (result.bool) {
											player.line(result.targets);
											if (event.bool == 'get2') {
												var hs = trigger.source.getCards('e');
												trigger.player.gain(hs).set('delay', false);
												player.storage.xwty++;
											}
										}
									},
									group: ['xwty_D_roundcount'],
								},
							},
						},
						jlyh: {
							equipSkill: true,
							init(player) {
								player.storage.jlyh = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·净莲妖火',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第三</b>,有净化万物的特效.任何东西,只要被其沾上丁点,就将会被净化成一片虚无,甚至于可以以人的情绪为引,进入体内,内体灵魂斗气都净化为虚无,威力极为恐怖.<br><li><b>此火效果</b>:1、火灵:你的回合,你拥有技能<佛怒火莲>(无冷却);2、净化:你的回合开始时,你弃置所有判定区的牌(无冷却);你造成伤害时,若此伤害没有属性,则转变成火属性(冷却一回合);你造成火焰伤害后,目标需弃置所有手牌和装备牌(冷却一回合);3、你免疫火伤,并且触发时摸一张牌(无冷却).',
							},
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							derivation: ['fnhl'],
							trigger: {
								player: ['phaseZhunbeiBegin'],
								global: 'gameStart',
							},
							filter(event, player) {
								return player.name != 'aaaaaa';
							},
							forced: true,
							content() {
								player.discard(player.getCards('j'));
								player.addTempSkill('fnhl', { player: 'phaseAfter' });
							},
							group: ['jlyh_fire', 'hymydraw', 'jlyh_damage'],
							subSkill: {
								fire: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 2,
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'fire') return false;
										if (event.name == 'damage' && event.nature == 'fire') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('jdfty_f');
									},
									logTarget: 'player',
									content() {
										trigger.player.discard(trigger.player.getCards('he'));
									},
									group: ['jlyh_fire_roundcount'],
								},
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['jlyh_damage_roundcount'],
								},
							},
						},
						jdfty: {
							equipSkill: true,
							init(player) {
								player.storage.jdfty = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·金帝焚天炎',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第四</b>,比不上净莲妖火那般神秘,但在远古时也是拥有着赫赫威名,而且此种异火,乃是古族传承之火,鲜有人能将之降服.金帝焚天炎可是号称连斗气都会被燃烧的可怕异火,传说中金帝焚天炎的第一任主人,施展此火,可是直接将一位斗圣强者所创造的空间给焚烧成了一片虚无.<br><li><b>此火效果</b>:你受到火焰伤害时,免疫之并摸一张牌(无冷却);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间一回合);你造成火焰伤害时:1、若目标未烧伤,则目标进入烧伤状态并添加2层烧伤标记;2、若目标已烧伤,则目标添加3层烧伤标记,同时,若:①此时目标未重伤,则目标陷入重伤状态并添加一个重伤标记,并且此伤害+1;②目标已重伤,则目标添加两个重伤标记,并且此伤害+2(冷却时间三回合).同时,你造成伤害时,目标需弃置所有手牌和装备区内的牌(冷却时间两回合).',
							},
							trigger: {
								source: 'damageBegin2',
							},
							forced: true,
							nobracket: true,
							round: 3,
							filter(event, player) {
								if (event.name == 'damage' && event.nature != 'fire') return false;
								if (event.name == 'damage' && event.nature == 'fire') return true;
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('jdfty');
							},
							logTarget: 'player',
							content() {
								'step 0';
								if (trigger.player.countMark('shaoshang') <= 0) {
									trigger.player.addSkill('shaoshang');
									trigger.player.markSkill('shaoshang');
									trigger.player.addMark('shaoshang', 2);
									event.goto(1);
								} else {
									trigger.player.addMark('shaoshang', 3);
									event.goto(1);
								}
								('step 1');
								if (trigger.player.countMark('zs') <= 0) {
									trigger.player.addTempSkill('zs', { player: 'phaseAfter' });
									trigger.player.markSkill('zs');
									trigger.player.addMark('zs');
									trigger.num++;
									event.finish();
								} else {
									trigger.player.addMark('zs', 2);
									trigger.num += 2;
									event.finish();
								}
							},
							group: ['jdfty_fire', 'hymydraw', 'jdfty_damage', 'jdfty_roundcount'],
							subSkill: {
								fire: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 2,
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'fire') return false;
										if (event.name == 'damage' && event.nature == 'fire') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('jdfty_f');
									},
									logTarget: 'player',
									content() {
										trigger.player.discard(trigger.player.getCards('he'));
									},
									group: ['jdfty_fire_roundcount'],
								},
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 1,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['jdfty_damage_roundcount'],
								},
							},
						},
						slzy: {
							equipSkill: true,
							init(player) {
								player.storage.slzy = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·生灵之焱',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第五</b>,宛如液体版的绿色火焰,迎风暴涨.这等异火极为奇异,因为大多异火固然形态不同,可毕竟都是弥漫着毁灭之力,但这生灵之焱却并不展现强大的破坏力,它闻名于世的是它所充斥的那种生命之力.<br><li><b>此火效果</b>:你受到火焰伤害时,此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你拥有此火时,获得一个标记,你的回合开始,你将所有护甲转化为标记,并额外获得一个标记(无冷却);你造成伤害时,如果是火属性伤害,则你摸一张牌并增加一个标记(冷却时间一回合);你的回合结束,你将所有的标记数等量转化为护甲(无冷却),你拥有生灵之焱时,你的护甲可以抵挡相应体力流失的数值(冷却时间一回合).出牌阶段,你可以弃置一张牌,回复标记数量三分之一的体力值(向下取整,冷却时间三回合).<br><br><b><li>当前标记数为#枚</b>',
							},
							enable: 'phaseUse',
							filterCard(card) {
								return true;
							},
							position: 'he',
							usable: 1,
							round: 3,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							check(card) {
								return 10 - get.value(card);
							},
							filterTarget(player, target) {
								return (target = player);
							},
							content() {
								var C = player.countMark('slzy');
								var B = C / 3;
								var A = Math.floor(B);
								player.recover(A);
							},
							group: ['slzy_roundcount', 'slzy_sl', 'slzy_zy', 'slzy_A', 'slzy_B', 'hsjm'],
							subSkill: {
								sl: {
									trigger: {
										player: ['phaseZhunbeiBegin'],
									},
									_priority: 300,
									forced: true,
									filter(event, player) {
										if (event.player.hujia > 0 && event.player.countMark('slzy') >= 0) return true;
									},
									content() {
										'step 0';
										var A = player.hujia;
										player.storage.slzy += A;
										player.changeHujia(-player.hujia);
										('step 1');
										player.storage.slzy++;
									},
								},
								zy: {
									trigger: {
										player: ['phaseEnd'],
									},
									_priority: 300,
									forced: true,
									filter(event, player) {
										if (event.player.countMark('slzy') >= 0) return true;
									},
									content() {
										'step 0';
										var A = player.countMark('slzy');
										player.changeHujia(A);
										player.storage.slzy -= A;
										('step 1');
										player.storage.slzy++;
									},
								},
								A: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 1,
									logTarget: 'player',
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'fire') return false;
										if (event.name == 'damage' && event.nature == 'fire') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('slzy_A');
									},
									async content(event, trigger, player) {
										//QQQ
										event.player.draw();
										event.player.storage.slzy++;
									},
									group: ['slzy_A_roundcount'],
								},
								B: {
									trigger: {
										player: ['loseHpBegin'],
									},
									forced: true,
									nobracket: true,
									round: 1,
									logTarget: 'player',
									filter(event, player) {
										if (player.hujia > 0) return true;
									},
									async content(event, trigger, player) {
										//QQQ
										var A = trigger.num;
										var B = player.hujia;
										if (B >= A) {
											player.changeHujia(-A);
											trigger.cancel();
										} else {
											player.changeHujia(-B);
											player.loseHp(A - B);
										}
									},
									group: ['slzy_B_roundcount'],
								},
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										if (player == target && player.countCards('h') > player.hp) return 20;
										return get.recoverEffect(target, player, target);
									},
								},
								threaten: 2,
							},
						},
						bhpmy: {
							equipSkill: true,
							init(player) {
								player.storage.bhpmy = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·八荒破灭焱',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第六</b>,可化作一对足有百丈庞大的火焰双翼,霸道绝伦.<br><li><b>此火效果</b>:你受到火焰伤害时,免疫之(无冷却);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间一回合).霸道之火:你造成火属性伤害后,令此伤害+1并让目标陷入重伤状态,若目标已受重伤,则改为令此伤害+2并使目标的重伤标记数+1(冷却时间三回合);你对目标使用杀时进行判定,若为红色,目标不可闪避,若为黑色,则无视目标防具(冷却一回合).火焰之翼:锁定技,你每使用一张牌,你与其他角色的距离-1.',
							},
							trigger: {
								player: 'shaBefore',
							},
							_priority: null,
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							forced: true,
							round: 1,
							logTarget: 'target',
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.zhu(_status.event.player, 'shouyue')) {
										if (card.suit != 'spade') return 2;
									} else {
										if (get.color(card) == 'red') return 2;
									}
									return -0.5;
								});
								('step 1');
								if (result.bool) {
									trigger.directHit = true;
								}
								if (get.color(result.card) == 'black' && player.hasSkill('bhpmy')) {
									player.addTempSkill('qinggang_skill', { player: 'shaEnd' });
								}
							},
							mod: {
								attackFrom(from, to, distance) {
									return distance - from.countUsed();
								},
							},
							shaRelated: true,
							group: ['bhpmy_damage', 'hymy', 'bhpmy_A', 'bhpmy_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 1,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['bhpmy_damage_roundcount'],
								},
								A: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 3,
									logTarget: 'player',
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'fire') return false;
										if (event.name == 'damage' && event.nature == 'fire') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('bhpmy_A');
									},
									content() {
										if (trigger.player.countMark('zs') <= 0) {
											trigger.player.addTempSkill('zs', { player: 'phaseAfter' });
											trigger.player.markSkill('zs');
											trigger.player.addMark('zs');
											trigger.num++;
										} else {
											trigger.player.addMark('zs');
											trigger.num += 2;
										}
									},
									group: ['bhpmy_A_roundcount'],
								},
							},
						},
						jyjzh: {
							equipSkill: true,
							init(player) {
								player.storage.jyjzh = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·九幽金祖火',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第七</b>,与火山石焰融合后威力不弱于金帝焚天炎.<br><li><b>此火效果</b>:你受到火焰伤害时,免疫之(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间一回合);你造成火属性伤害后,令此伤害+1并让目标陷入混乱直到其受到伤害(冷却时间三回合).',
							},
							trigger: {
								source: 'damageBegin2',
							},
							forced: true,
							nobracket: true,
							round: 3,
							logTarget: 'player',
							filter(event, player) {
								if (event.name == 'damage' && event.nature != 'fire') return false;
								if (event.name == 'damage' && event.nature == 'fire') return true;
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('jyjzh');
							},
							content() {
								trigger.num++;
								trigger.player.goMad({ player: 'damageEnd' });
							},
							group: ['jyjzh_damage', 'hymy', 'jyjzh_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBefore',
									},
									round: 1,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['jyjzh_damage_roundcount'],
								},
							},
						},
						sqyyh: {
							equipSkill: true,
							init(player) {
								player.storage.sqyyh = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·三千焱炎火',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第九</b>,又被称为<三千星空焱炎火>,呈紫黑色,成形于星空,能吸收星辰之力不断地变得强大.天降银火,千里之地如处沙漠,昼夜不分,星辰不现,耀日不出.这种异火拥有着一种格外特殊的能力,那便是传闻中的<三千星空体质>.一些曾经与拥有过三千焱炎火的人战斗过的强者将之称为<不死体>,具有极强的回复能力.只要不是被轰成肉泥,那么任何伤势都能回复,不过只是时间问题罢了.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间两回合);你的回合开始时,若你已受伤,则你回复体力上限一半的体力(向下取整,冷却时间两回合);当你受到伤害时,进行判定,若结果为红色,回复一点体力(冷却时间一回合).',
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return player.hp < player.maxHp;
							},
							forced: true,
							round: 2,
							content() {
								var A = player.maxHp;
								var B = A / 2;
								var C = Math.floor(B);
								player.recover(C);
							},
							group: ['sqyyh_damage', 'hsjm', 'sqyyh_roundcount', 'sqyyh_recover'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['sqyyh_damage_roundcount'],
								},
								recover: {
									trigger: {
										player: 'damageEnd',
									},
									filter(event, player) {
										return player.hp < player.maxHp;
									},
									forced: true,
									round: 1,
									content() {
										'step 0';
										player.judge(function (card) {
											return 1;
										});
										('step 1');
										if (get.color(result.card) == 'red') event.bool = 'revover';
										('step 2');
										if (result.bool) {
											if (event.bool == 'red') {
												player.recover();
											}
										}
									},
									group: ['sqyyh_recover_roundcount'],
								},
							},
						},
						jyfy: {
							equipSkill: true,
							init(player) {
								player.storage.jyfy = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·九幽风炎',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第十</b>,诞生于极阴之地的无尽深渊之中,在那里阴风整年不休,此异火就成型于风罡最为猛烈之地.此火有着一种奇异的风声自其中传出,而这种风声传入人耳中会令人感觉到一丝异样的烦躁,这种异声能够引起人情绪上出现波动.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间两回合);你造成火属性伤害后,目标陷入混乱直到其回合结束(冷却时间三回合).',
							},
							trigger: {
								source: 'damageBegin2',
							},
							forced: true,
							nobracket: true,
							round: 3,
							logTarget: 'player',
							filter(event, player) {
								if (event.name == 'damage' && event.nature != 'fire') return false;
								if (event.name == 'damage' && event.nature == 'fire') return true;
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('jyfy');
							},
							content() {
								trigger.player.goMad({ player: 'phaseEnd' });
							},
							group: ['jyfy_damage', 'hsjm', 'jyfy_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['jyfy_damage_roundcount'],
								},
							},
						},
						gllh: {
							equipSkill: true,
							init(player) {
								player.storage.gllh = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·骨灵冷火',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第十一</b>,极寒与极热相结合的奇特火焰,只有在每百年日月交替之时,方才能够在极寒与极阴之地遇见.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);回合开始时,你随机获得以下效果之一:1、你造成伤害时,若此伤害没有属性,则视为火属性伤害;2、你造成伤害时.若此伤害没有属性,则视为冰属性伤害.当你造成火属性伤害时,目标陷入烧伤状态,获得一层层烧伤标记若目标已烧伤则改为两层,随后其每回合开始前受到一点火焰伤害直到目标烧伤标记被清空(冷却时间三回合,与后者分开计算);当你造成冰属性伤害时,此伤害+1且目标被翻面(冷却时间三回合,与前者分开计算).',
							},
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							derivation: ['gllhb', 'gllhh'],
							trigger: {
								player: ['phaseUseBegin'],
								global: 'gameStart',
							},
							filter(event, player) {
								return player.name != 'aaaaaa';
							},
							forced: true,
							content() {
								var n = [1, 2].randomGet();
								if (n == 1) {
									player.addTempSkill('gllhb', { player: 'phaseEnd' });
									player.removeSkill('gllhh');
								}
								if (n == 2) {
									player.addTempSkill('gllhh', { player: 'phaseEnd' });
									player.removeSkill('gllhb');
								}
							},
							group: ['hsjm'],
						},
						jllgh: {
							equipSkill: true,
							init(player) {
								player.storage.jllgh = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·九龙雷罡火',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第十二</b>,火焰升腾间隐隐间能够见到九条银色火龙在火焰之内穿梭而行.异火之内有着龙威凝聚,因此有着震慑灵魂之神效.银色火焰袅袅燃烧,九条细小的火龙在其中四下穿梭,犹如具备着灵智一般,而且隐隐间有着些许龙威从中弥漫而出,令得人灵魂力量感到有些压抑.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);回合开始时,你随机获得以下效果之一:1、你造成伤害时,若此伤害没有属性,则视为火属性伤害;2、你造成伤害时.若此伤害没有属性,则视为雷属性伤害.当你造成火属性伤害时,若目标未烧伤,则目标陷入烧伤状态,获得一层烧伤标记,若已烧伤,则改为获得两层烧伤标记,随后其每回合开始前受到一点火焰伤害直到目标烧伤标记被清空(冷却时间三回合,与后者分开计算);当你造成雷属性伤害时,令此伤害+1并让目标陷入异常状态直到回合结束,陷入异常状态的角色回合开始时,自动跳过出牌阶段(冷却时间三回合,与前者分开计算).',
							},
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							derivation: ['jllghlei', 'jllghhuo'],
							trigger: {
								player: ['phaseUseBegin'],
								global: 'gameStart',
							},
							filter(event, player) {
								return player.name != 'aaaaaa';
							},
							forced: true,
							content() {
								var n = [1, 2].randomGet();
								if (n == 1) {
									player.addTempSkill('jllghlei', { player: 'phaseEnd' });
									player.removeSkill('jllghhuo');
								}
								if (n == 2) {
									player.addTempSkill('jllghhuo', { player: 'phaseEnd' });
									player.removeSkill('jllghlei');
								}
							},
							group: ['hsjm'],
						},
						gldh: {
							equipSkill: true,
							init(player) {
								player.storage.gldh = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·龟灵地火',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第十三</b>,形状如巨龟,浑身布满尖锐火刺,狰狞巨嘴中生满如同刀锋般的獠牙的褐色奇异火焰.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成土属性(冷却时间两回合);你受到伤害时,进行一次判定,若结果为红色,则对伤害来源造成一点伤害,(冷却时间一回合),若结果为黑色,则你获得一个标记.你造成土属性伤害时,目标需弃置等同于标记数量的手牌或装备区内的牌,你移除标记(冷却时间两回合).<br><br><b><li>当前标记数为#枚</b>',
							},
							trigger: {
								player: 'damageBegin',
							},
							nobracket: true,
							forced: true,
							round: 1,
							content() {
								'step 0';
								if (player.hujia <= 0) {
									player.judge('gldh', function (card) {
										return get.color(card) == 'red' ? 1 : -1;
									});
								}
								('step 1');
								if (result.judge > 0) {
									if (trigger && trigger.source) {
										trigger.source.damage();
										var hs = trigger.player.getCards('h');
										var a = hs.randomGet();
										trigger.player.discard(a).set('delay', false);
									}
								} else {
									player.addMark('gldh', 1);
								}
							},
							group: ['gldh_damage', 'gldh_discard', 'hsjm', 'gldh_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'soil';
									},
									group: ['gldh_damage_roundcount'],
								},
								discard: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 2,
									logTarget: 'player',
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'soil') return false;
										if (event.name == 'damage' && event.nature == 'soil') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('gldh_discard');
									},
									content() {
										'step 0';
										if (player.countMark('gldh') > 0) {
											var hs = trigger.player.getCards('he');
											var a = hs.randomGet();
											trigger.player.discard(a).set('delay', false);
											player.storage.gldh--;
											event.goto(1);
										} else {
											event.finish();
										}
										('step 1');
										if (player.countMark('gldh') > 0) {
											event.goto(0);
										}
									},
									group: ['gldh_discard_roundcount'],
								},
							},
						},
						ylxy: {
							equipSkill: true,
							init(player) {
								player.storage.ylxy = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·陨落心炎',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第十四</b>,火由心生,淬气炼骨.号称<修炼作弊器>,可以加快修炼.一旦成功炼化陨落心炎,那么体内便是会源源不断的产生一种心火,而这心火又会完全不用操控的每日每夜每时每刻的煅烧着体内斗气,在这等近乎不停歇的淬炼间,就犹如时时刻刻身体都处在修炼状态之中般,而且这修炼状态效果还比平日修炼更好,这种修炼速度自然会远远高于寻常修炼,所以称之为作弊器.此火还可召唤心火,将人从内而外焚烧殆尽.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间两回合);心火:你的摸牌阶段,你额外摸三张牌(冷却两回合);心火:所有友方角色的摸牌阶段,额外摸两张牌(冷却时间两回合).',
							},
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							round: 2,
							content() {
								trigger.num += 2;
							},
							group: ['ylxy_friendDraw', 'hsjm', 'ylxy_roundcount'],
							subSkill: {
								friendDraw: {
									trigger: {
										global: 'phaseDrawBegin',
									},
									forced: true,
									round: 2,
									filter(event, player) {
										return player.getFriends().includes(event.player);
									},
									content() {
										trigger.num += 2;
									},
									group: ['ylxy_friendDraw_roundcount'],
								},
								damage: {
									trigger: {
										source: 'damageBefore',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['ylxy_damage_roundcount'],
								},
							},
						},
						hxy: {
							equipSkill: true,
							init(player) {
								player.storage.hxy = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·海心焰',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第十五</b>,深蓝色火焰,看上去极为玄异,火焰升腾间,如同清澈海水般缓缓的扩散而开,淡淡的涟漪恍若水波.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成水属性(冷却时间两回合);你造成水属性伤害时,摸一张牌,并让目标额外受到一点火属性伤害.',
							},
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							nobracket: true,
							round: 2,
							logTarget: 'player',
							filter(event, player) {
								if (event.name == 'damage' && event.nature != 'water') return false;
								if (event.name == 'damage' && event.nature == 'water') return true;
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('hxy');
							},
							async content(event, trigger, player) {
								//QQQ
								event.player.draw();
								trigger.player.damage('fire', trigger.source || 'nosource');
							},
							group: ['hxy_damage', 'hsjm', 'hxy_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'water';
									},
									group: ['hxy_damage_roundcount'],
								},
							},
						},
						hysy: {
							equipSkill: true,
							init(player) {
								player.storage.hysy = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·火云水炎',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第十六</b>,形状如同火云,拥有水之力的神奇火焰.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变为水属性伤害(冷却时间三回合),你造成水属性伤害时,令此伤害+1,你弃置一张牌并回复一点体力(冷却时间两回合).',
							},
							trigger: {
								source: 'damageBegin2',
							},
							forced: true,
							nobracket: true,
							round: 2,
							logTarget: 'player',
							filter(event, player) {
								if (event.name == 'damage' && event.nature != 'water') return false;
								if (event.name == 'damage' && event.nature == 'water') return true;
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('hysy');
							},
							async content(event, trigger, player) {
								trigger.num++;
								event.player.chooseToDiscard(get.prompt('hysy')).set('ai', function (card) {
									return 7 - get.value(card);
								});
								event.player.recover();
							},
							group: ['hysy_damage', 'hsjm', 'hysy_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'water';
									},
									group: ['hysy_damage_roundcount'],
								},
							},
						},
						hssy: {
							equipSkill: true,
							init(player) {
								player.storage.hssy = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·火山石焰',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第十七</b>,可与九幽金祖火融合出新型异火,并能跟金帝焚天炎相抗衡而不落下风.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你造成时伤害,若此伤害没有属性,则此伤害转变为土属性伤害(冷却时间两回合);当你造成土属性伤害时,摸两张牌并令此伤害+1(冷却时间两回合).',
							},
							trigger: {
								source: 'damageBegin2',
							},
							forced: true,
							nobracket: true,
							round: 2,
							logTarget: 'player',
							filter(event, player) {
								if (event.name == 'damage' && event.nature != 'soil') return false;
								if (event.name == 'damage' && event.nature == 'soil') return true;
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('hssy');
							},
							content() {
								trigger.num++;
								player.draw(2);
							},
							group: ['hssy_damage', 'hsjm', 'hssy_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'soil';
									},
									group: ['hssy_damage_roundcount'],
								},
							},
						},
						flny: {
							equipSkill: true,
							init(player) {
								player.storage.flny = 1;
								if (_status.weather == 'feng') {
									game.broadcastAll(function (player) {
										ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/feng.jpg');
									}, player);
								}
								if (_status.weather == 'lei') {
									game.broadcastAll(function (player) {
										ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/lei.jpg');
									}, player);
								} else {
									if (!_status.weather) {
										return;
									}
								}
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·风雷怒焱',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第十八</b>,诞生于风雷火三大能量交接之处,此火焰极为狂暴,拥有变化天气之力.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);游戏开始和回合开始时,你随机获得以下效果之一:1、若存在天气效果,则你将天气变化为风,并且造成伤害时,若此伤害没有属性,则视为风属性伤害,你造成风属性伤害时,弃置目标一张装备牌,并且若当前天气为风,则此伤害+1(冷却时间两回合,与后者分开计算);2、若存在天气效果,则你将天气变化为雷,并且造成伤害时,若此伤害没有属性,则视为雷属性伤害,你造成雷属性伤害时,弃置目标一张手牌,并且若当前天气为雷,则此伤害+1(冷却时间两回合,与前者分开计算).',
							},
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							derivation: ['flnyf', 'flnyl'],
							trigger: {
								player: ['phaseZhunbeiBegin'],
								global: 'gameStart',
							},
							filter(event, player) {
								return player.name != 'aaaaaa';
							},
							forced: true,
							content() {
								'step 0';
								var n = [1, 2].randomGet();
								if (n == 1) {
									player.addTempSkill('flnyl', { player: 'phaseEnd' });
									player.$fullscreenpop('<font color=purple>雷</font>');
									player.removeSkill('flnyf');
									if (_status.weather) {
										event.goto(4);
									} else {
										event.finish();
									}
								}
								if (n == 2) {
									player.addTempSkill('flnyf', { player: 'phaseEnd' });
									player.$fullscreenpop('<font color=green>风</font>');
									player.removeSkill('flnyl');
									if (_status.weather) {
										event.goto(2);
									} else {
										event.finish();
									}
								}
								('step 1');
								game.changeWeather();
								event.goto(2);
								('step 2');
								if (_status.weather != 'feng') {
									event.goto(1);
								} else {
									event.finish();
								}
								('step 3');
								game.changeWeather();
								event.goto(4);
								('step 4');
								if (_status.weather != 'lei') {
									event.goto(3);
								} else {
									event.finish();
								}
							},
							group: ['hsjm'],
						},
						qldxh: {
							equipSkill: true,
							init(player) {
								player.storage.qldxh = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·青莲地心火',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第十九</b>,顾名思义,即存在于地心熔岩之中的火焰.生于大地深处,历经大地之火的无数次锤炼、融合、压缩、雕制……十年成灵,百年成形,千年成莲,大成之时,其色偏青,莲心生一簇青火,其名为青莲火,也称青莲地心火.此火威力莫测,在临近火山地带之处甚至能够引发火山喷发,形成大自然的毁灭力量.<br><li><b>此火效果</b>:出牌阶段,你获得一张青火莲子(冷却时间两回合);你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性伤害(冷却时间一回合).',
							},
							inherit: 'qldxh',
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							usable: 1,
							round: 2,
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								if (player == target) return true;
							},
							filterCard(card) {
								return true;
							},
							selectCard() {
								return [0, 1];
							},
							content() {
								target.gain(game.createCard('qhlz'));
							},
							group: ['qldxh_damage', 'hsjm', 'qldxh_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									forced: true,
									round: 1,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['qldxh_damage_roundcount'],
								},
							},
							position: 'he',
							ai: {
								order: 8.5,
								result: {
									target(player, target) {
										if (!player.countCards('he')) {
											if (player.hp < 2) return 0;
											if (target.hp >= player.hp) return 0;
										}
										return get.damageEffect(target, player);
									},
								},
							},
							threaten: 0.5,
						},
						ymdh: {
							equipSkill: true,
							init(player) {
								player.storage.ymdh = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·幽冥毒火',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第二十</b>,火焰中充斥着毒性的异火,其形呈现淡紫色,吸收天地间奇毒而成,威力无穷,沾上一点就让人生不如死.<br><li><b>此火效果</b>:你造成伤害时,若此伤害没有属性,则此伤害转变为毒属性伤害(冷却时间两回合);当你造成毒属性伤害时,若目标未中毒,则目标进入中毒状态并获得一层毒标记(若目标已中毒,则获得两层中毒标记,冷却时间三回合),拥有毒标记的玩家在回合开始前流失一点体力移除一层毒标记;你免疫体力流失,并在触发后摸一张牌(冷却时间两回合).<br><br><b><li>当前标记数为#枚</b>',
							},
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							nobracket: true,
							round: 3,
							logTarget: 'player',
							filter(event, player) {
								if (event.name == 'damage' && event.nature != 'poison') return false;
								if (event.name == 'damage' && event.nature == 'poison') return true;
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('ymdh');
							},
							content() {
								if (trigger.player.countMark('zhongdu') <= 0) {
									trigger.player.addSkill('zhongdu');
									trigger.player.markSkill('zhongdu');
									trigger.player.addMark('zhongdu');
								} else {
									trigger.player.addMark('zhongdu', 2);
								}
							},
							group: ['ymdh_damage', 'ymdh_B', 'ymdh_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'poison';
									},
									group: ['ymdh_damage_roundcount'],
								},
								B: {
									trigger: {
										player: ['loseHpBefore'],
									},
									round: 2,
									forced: true,
									content() {
										trigger.cancel();
										player.draw();
									},
									group: ['ymdh_B_roundcount'],
								},
							},
						},
						ldlhy: {
							equipSkill: true,
							init(player) {
								player.storage.ldlhy = 3;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·六道轮回炎(阴阳逆心炎)',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第二十一</b>,此炎只存在于六道轮回之中,得此炎着,可借用轮回之力,六道之魂,传说为一位斗宗就因此突破到了斗尊,号称轮回尊者!<br><li><b>此火效果</b>:特殊效果:你获得此火时,获得三个记,当你死亡时,若你身上的标记数大于0,则你弃置所有牌后不死并移除一枚标记进行轮回判定,若结果为红色,则你轮回成功,取消死亡后回复等同于体力上限的体力值并摸两张牌,若为黑色,则你轮回失败,取消死亡并摸两张牌(冷却时间三回合),若你身上的标记数不大于1,则不能触发此效果;你造成伤害时,若此伤害没有属性,则此伤害转变为火属性伤害(冷却时间两回合);你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加).<br><br><b><li>当前标记数为#枚</b>',
							},
							trigger: {
								source: 'damageBefore',
							},
							round: 2,
							forced: true,
							filter(event, player) {
								if (event.nature == undefined) return true;
							},
							content() {
								trigger.nature = 'fire';
							},
							group: ['ldlhy_revive', 'hsjm', 'ldlhy_roundcount'],
							subSkill: {
								revive: {
									trigger: {
										player: 'dieBefore',
									},
									forced: true,
									round: 3,
									content() {
										'step 0';
										if (player.storage.ldlhy && player.countMark('ldlhy') > 1) {
											player.storage.ldlhy--;
											player.discard(player.getCards('he'));
											trigger.cancel();
											event.goto(1);
										} else {
											player.removeSkill('ldlhy_revive');
											event.finish();
										}
										('step 1');
										player.judge(function (card) {
											return 1;
										});
										('step 2');
										if (get.color(result.card) == 'red') event.bool = 'revive';
										if (get.color(result.card) == 'black') event.bool = 'cancel';
										('step 3');
										if (result.bool) {
											if (event.bool == 'cancel') {
												player.draw(2);
												game.log('很遗憾,', player, '轮回失败!');
												event.finish();
												player.die();
											}
											if (event.bool == 'revive') {
												var A = player.maxHp;
												player.recover(A);
												player.draw(2);
												game.log('恭喜', player, '轮回成功!');
												event.finish();
											}
										}
									},
									group: ['ldlhy_revive_roundcount'],
								},
							},
						},
						wslh: {
							equipSkill: true,
							init(player) {
								player.storage.wslh = 1;
							},
							round: 4,
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·万兽灵火',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第二十二</b>,一种隐隐浮现万兽模样的红色火焰.<br><li><b>此火效果</b>:你造成伤害时,若此伤害没有属性,则此伤害转变为火属性伤害(冷却时间两回合);你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加).出牌阶段,你可以弃置一张红色牌,从牌堆里随机获得一张+1马/-1马(冷却时间四回合).',
							},
							enable: 'phaseUse',
							usable: 1,
							filterCard: {
								color: 'red',
							},
							position: 'h',
							filter(event, player) {
								return player.countCards('h', { color: 'red' }) > 0;
							},
							content() {
								'step 0';
								player.gain(
									get.cardPile(function (card) {
										if (get.subtype(card, 'equip') == 'equip3') return true;
										if (get.subtype(card, 'equip') == 'equip4') return true;
									}),
									'gain2'
								);
							},
							group: ['wslh_damage', 'hsjm', 'wslh_roundcount', 'wslh_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBefore',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['wslh_damage_roundcount'],
								},
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.color(card) == 'black' && !get.cardtag(card, 'gifts')) return [1, 3];
									},
								},
								threaten: 0.02,
							},
						},
						xhy: {
							equipSkill: true,
							init(player) {
								player.storage.xhy = 1;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '异火·玄黄炎',
								content: '「<font color=orange>异火榜</font>」<br><li><b>排名第二十三</b>,一种深黄色的异火.<br><li><b>此火效果</b>:你造成伤害时,若此伤害没有属性,则此伤害转变为火属性伤害(冷却时间一回合),你造成火焰伤害时,此伤害+1(冷却时间两回合);你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加).',
							},
							trigger: {
								source: 'damageBegin2',
							},
							forced: true,
							nobracket: true,
							round: 2,
							logTarget: 'player',
							filter(event, player) {
								if (event.name == 'damage' && event.nature != 'fire') return false;
								if (event.name == 'damage' && event.nature == 'fire') return true;
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('xhy');
							},
							content() {
								trigger.num++;
							},
							group: ['xhy_damage', 'hsjm', 'xhy_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										trigger.nature = 'fire';
									},
									group: ['xhy_damage_roundcount'],
								},
							},
						},
						zhongdu: {
							mark: true,
							marktext: '毒',
							intro: {
								name: '中毒',
								content: '该角色已中毒,每个回合开始前流失一点体力,移去一个毒标记.<br><br><b><li>当前标记数为#枚</b>',
							},
							init(player) {
								player.storage.zhongdu = 0;
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							silent: true,
							content() {
								player.storage.zhongdu--;
								player.loseHp();
								if (player.storage.zhongdu <= 0) {
									// player.loseHp();
									player.removeSkill('zhongdu');
								} else {
								}
							},
							forced: true,
							popup: false,
						},
						hsjm: {
							trigger: {
								player: 'damageBefore',
							},
							round: 2,
							filter(event, player) {
								return event.nature;
							},
							forced: true,
							content() {
								if (trigger.nature == 'fire') {
									trigger.num--;
								}
							},
							group: ['hsjm_roundcount'],
						},
						yczt: {
							mark: true,
							marktext: '异',
							intro: {
								name: '异常状态',
								content: '该角色已陷入眩晕/麻痹等异常状态,回合开始时自动跳过出牌阶段.',
							},
							init(player) {
								player.storage.yczy;
							},
							trigger: {
								player: 'phaseUseBefore',
							},
							forced: true,
							content() {
								'step 0';
								trigger.cancel();
								('step 1');
								player.removeSkill('yczt');
							},
						},
						shaoshang: {
							mark: true,
							marktext: '烧',
							intro: {
								name: '烧伤',
								content: '该角色已烧伤,每个回合开始前受到一点火焰伤害,移去一个烧伤标记.<br><br><b><li>当前标记数为#枚</b>',
							},
							init(player) {
								player.storage.shaoshang;
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							silent: true,
							content() {
								player.storage.shaoshang--;
								trigger.player.damage('fire', trigger.source || 'nosource');
								if (player.storage.shaoshang <= 0) {
									// player.loseHp();
									player.removeSkill('shaoshang');
								} else {
								}
							},
							forced: true,
							popup: false,
						},
						hymy: {
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						zs: {
							mark: true,
							marktext: '伤',
							intro: {
								name: '重伤状态',
								content: '该角色已陷入重伤状态,回合开始时自动跳过出牌阶段;该角色使用或打出牌时均添加一个重伤标记;该角色受到伤害时,若此时你没有手牌,此伤害+1,并获得两个重伤标记.你的手牌上限减X(X为你的重伤标记数),你的回合结束后,你移去这些标记并退出重伤状态.<br><br><b><li>当前标记数为#枚</b>',
							},
							init(player) {
								player.storage.zs = 1;
							},
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								player.skip('phaseUse');
							},
							group: ['zs_storage', 'zs_remove'],
							subSkill: {
								storage: {
									trigger: {
										player: ['damageBefore'],
									},
									_priority: 99,
									forced: true,
									filter(event, player) {
										if (!player.countCards('h')) return true; //qqq
									},
									content() {
										player.storage.zs += 2;
										trigger.num++;
									},
								},
								remove: {
									trigger: {
										player: 'phaseAfter',
									},
									forced: true,//QQQ
									content() {
										player.removeMark('zs');
										player.removeSkill('zs');
									},
								},
							},
							mod: {
								maxHandcard(player, num) {
									var C = player.countMark('zs');
									return num - C;
								},
							},
						},
						hymydraw: {
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								player.draw();
								trigger.untrigger();
								trigger.finish();
							},
						},
						fnhl: {
							equipSkill: true,
							init(player) {
								player.storage.fnhl = 0;
							},
							marktext: '莲',
							mark: true,
							intro: {
								name: '佛怒火莲',
								content: '「<font color=orange>佛怒火莲</font>」<br><li><b>萧炎自创斗技-阶别未知</b>,你的回合结束和刚开始时,清除所有标记,你的回合开始后,依据你已拥有的异火,获得相应数量的标记,标记数与异火数和异火排名有关(排名越高的异火标记数加的越多);出牌阶段,你可以选择一名目标并弃置所有手牌,按照标记数量对其造成一定的火焰伤害,若此时你造成的伤害值(包括目标的护甲所抵挡的数值):1、小于1,无事发生;2、等于1,目标随机弃置一张手牌;3、等于2,目标弃置一张手牌或装备牌,若此时目标未重伤,则目标重伤并添加3个重伤标记,若此时目标已重伤,则添加5个重伤标记,若此时目标未烧伤,则进入烧伤状态且添加3个烧伤标记,若目标已烧伤,则添加5个烧伤标记;4、3点及以上,目标弃置所有手牌和装备牌,若此时目标未重伤,则进入重伤状态并添加5个重伤标记,若目标已受重伤,则添加10个重伤标记,若此时目标未烧伤,则目标进入烧伤状态并添加5个烧伤标记,若目标已烧伤,则添加10个烧伤标记.你进入虚弱状态,获得两个虚弱标记(冷却时间五回合).<br><br><b><li>当前标记数为#枚</b>.',
							},
							enable: 'phaseUse',
							usable: 1,
							round: 5,
							filterTarget(event, player, target) {
								if (player.name != 'aaaaaa') return (player = target);
							},
							_priority: null,
							forced: true,
							logTarget: 'target',
							content() {
								'step 0';
								player.$fullscreenpop('<font color=#FF0000>佛怒火莲</font>');
								player.say('佛怒火莲!');
								player.addSkill('xuruo');
								player.discard(player.getCards('h'));
								('step 1');
								const C = Math.round(player.countMark('fnhl') / 8);
								target.damage(C, 'fire', player);
								target.say('你这个疯子,我再也不和你玩了啊啊啊!');
								if (C >= 1) {
									event.goto(2);
								}
								if (C < 1) {
									event.finish();
								} //QQQ
								('step 2');
								const num = Math.round(player.countMark('fnhl') / 8);
								if (num >= 3) {
									target.discard(target.getCards('he'));
									event.goto(3);
								} else {
									if (num == 2) {
										var hs = target.getCards('he');
										var a = hs.randomGet();
										target.discard(a).set('delay', false);
										event.goto(4);
									}
									if (num == 1) {
										var hs = target.getCards('h');
										var a = hs.randomGet();
										target.discard(a).set('delay', false);
										event.goto(7);
									} else {
										event.goto(7);
									}
								}
								('step 3');
								if (target.countMark('ze') <= 0) {
									target.addTempSkill('zs', { player: 'phaseAfter' });
									target.markSkill('zs');
									target.addMark('zs', 5);
									event.goto(5);
								} else {
									target.addMark('zs', 10);
									event.goto(5);
								}
								('step 4');
								if (target.countMark('zs') <= 0) {
									target.addTempSkill('zs', { player: 'phaseAfter' });
									target.markSkill('zs');
									target.addMark('zs', 3);
									event.goto(6);
								} else {
									target.addMark('zs', 5);
									event.goto(6);
								}
								('step 5');
								if (target.countMark('shaoshang') <= 0) {
									target.addSkill('shaoshang');
									target.markSkill('shaoshang');
									target.addMark('shaoshang', 5);
									event.goto(7);
								} else {
									target.addMark('shaoshang', 10);
									event.goto(7);
								}
								('step 6');
								if (target.countMark('shaoshang') <= 0) {
									target.addSkill('shaoshang');
									target.markSkill('shaoshang');
									target.addMark('shaoshang', 3);
									event.goto(7);
								} else {
									target.addMark('shaoshang', 5);
									event.goto(7);
								}
								('step 7');
								event.finish();
							},
							group: ['fnhl_roundcount', 'fnhl_storage', 'fnhl_clear'],
							subSkill: {
								storage: {
									trigger: {
										player: ['phaseZhunbeiEnd'],
									},
									_priority: 300,
									forced: true,
									filter(event, player) {
										if (event.player.countMark('fnhl') >= 0) return true;
									},
									content() {
										'step 0';
										if (player.countMark('xhy') > 0) {
											player.storage.fnhl += 1;
											event.goto(1);
										} else {
											event.goto(1);
										}
										('step 1');
										if (player.countMark('wsls') > 0) {
											player.storage.fnhl += 1;
											event.goto(2);
										} else {
											event.goto(2);
										}
										('step 2');
										if (player.countMark('ldlhy') > 0) {
											player.storage.fnhl += 1;
											event.goto(3);
										} else {
											event.goto(3);
										}
										('step 3');
										if (player.countMark('ymdh') > 0) {
											player.storage.fnhl += 2;
											event.goto(4);
										} else {
											event.goto(4);
										}
										('step 4');
										if (player.countMark('qldxh') > 0) {
											player.storage.fnhl += 2;
											event.goto(5);
										} else {
											event.goto(5);
										}
										('step 5');
										if (player.countMark('flny') > 0) {
											player.storage.fnhl += 2;
											event.goto(6);
										} else {
											event.goto(6);
										}
										('step 6');
										if (player.countMark('hssy') > 0) {
											player.storage.fnhl += 2;
											event.goto(7);
										} else {
											event.goto(7);
										}
										('step 7');
										if (player.countMark('hysy') > 0) {
											player.storage.fnhl += 2;
											event.goto(8);
										} else {
											event.goto(8);
										}
										('step 8');
										if (player.countMark('hxy') > 0) {
											player.storage.fnhl += 3;
											event.goto(9);
										} else {
											event.goto(9);
										}
										('step 9');
										if (player.countMark('ylxy') > 0) {
											player.storage.fnhl += 3;
											event.goto(10);
										} else {
											event.goto(10);
										}
										('step 10');
										if (player.countMark('gldh') > 0) {
											player.storage.fnhl += 3;
											event.goto(11);
										} else {
											event.goto(11);
										}
										('step 11');
										if (player.countMark('jllgh') > 0) {
											player.storage.fnhl += 3;
											event.goto(12);
										} else {
											event.goto(12);
										}
										('step 12');
										if (player.countMark('gllh') > 0) {
											player.storage.fnhl += 3;
											event.goto(13);
										} else {
											event.goto(13);
										}
										('step 13');
										if (player.countMark('jyfy') > 0) {
											player.storage.fnhl += 4;
											event.goto(14);
										} else {
											event.goto(14);
										}
										('step 14');
										if (player.countMark('sqyyh') > 0) {
											player.storage.fnhl += 4;
											event.goto(15);
										} else {
											event.goto(15);
										}
										('step 15');
										if (player.countMark('hlyh') > 0) {
											player.storage.fnhl += 4;
											event.goto(16);
										} else {
											event.goto(16);
										}
										('step 16');
										if (player.countMark('jyjzh') > 0) {
											player.storage.fnhl += 4;
											event.goto(17);
										} else {
											event.goto(17);
										}
										('step 17');
										if (player.countMark('bhpmy') > 0) {
											player.storage.fnhl += 5;
											event.goto(18);
										} else {
											event.goto(18);
										}
										('step 18');
										if (player.countMark('slzy') > 0) {
											player.storage.fnhl += 5;
											event.goto(19);
										} else {
											event.goto(19);
										}
										('step 19');
										if (player.countMark('jdfty') > 0) {
											player.storage.fnhl += 6;
											event.goto(20);
										} else {
											event.goto(20);
										}
										('step 20');
										if (player.countMark('jlyh') > 0) {
											player.storage.fnhl += 8;
											event.goto(21);
										} else {
											event.goto(21);
										}
										('step 21');
										if (player.countMark('xwty') > 0) {
											player.storage.fnhl += 8;
											event.finish();
										} else {
											event.finish();
										}
									},
								},
								clear: {
									trigger: {
										player: ['phaseEnd', 'phaseZhunbeiBegin'],
									},
									_priority: 300,
									forced: true,
									filter(event, player) {
										if (event.player.countMark('fnly') >= 0) return true;
									},
									content() {
										'step 0';
										var A = player.countMark('fnhl');
										player.storage.fnhl -= A;
									},
								},
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										if (player.countCards('h') > player.hp) return 20;
										if (player.hp <= 2) return 20;
										return get.damageEffect(target, player, target);
									},
								},
								threaten: 10,
							},
						},
						hymydr: {
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								player.draw();
								player.recover();
								trigger.untrigger();
								trigger.finish();
							},
						},
						zuiye: {
							mark: true,
							marktext: '业',
							intro: {
								name: '罪业',
								content: '所犯之罪,难辞其咎!被标记的角色回合开始时受到等同于标记数量三分之一的伤害(向上取整),并弃置等同于标记数量一半的牌(向上取整),移除当前一半数量的标记(向上取整),若此时已没有标记,则你退出此状态.<br><br><b><li>当前标记数为#枚</b>',
							},
							init(player) {
								player.storage.zuiye;
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							silent: true,
							content() {
								'step 0';
								var A = player.countMark('zuiye');
								var B = A / 2;
								var C = Math.ceil(B);
								var D = A / 3;
								var E = Math.ceil(D);
								trigger.player.damage('fire', E, 'nosource');
								trigger.player.chooseToDiscard('he', C, true).set('ai', get.disvalue2);
								trigger.player.storage.zuiye -= C;
								('step 1');
								if (player.storage.zuiye <= 0) {
									player.removeSkill('zuiye');
								} else {
								}
							},
							forced: true,
							popup: false,
						},
						jllghhuo: {
							mark: true,
							marktext: '<font color=blue>火</font>',
							intro: {
								name: '<font color=blue>九龙雷罡火·火</font>',
								content: '你造成的伤害均为火属性伤害.',
							},
							trigger: {
								source: 'damageBegin1',
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'damage' && event.nature == undefined) return true;
							},
							content() {
								trigger.nature = 'fire';
							},
							group: ['jllghhuo_fire', 'jllgh'],
							subSkill: {
								fire: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 3,
									logTarget: 'player',
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'fire') return false;
										if (event.name == 'damage' && event.nature == 'fire') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('jllghhuo_fire');
									},
									content() {
										if (trigger.player.countMark('shaoshang') <= 0) {
											trigger.player.addSkill('shaoshang');
											trigger.player.markSkill('shaoshang');
											trigger.player.addMark('shaoshang', 2);
										} else {
											trigger.player.addMark('shaoshang');
										}
									},
									group: ['jllghhuo_fire_roundcount'],
								},
							},
						},
						jllghlei: {
							mark: true,
							marktext: '<font color=blue>雷</font>',
							intro: {
								name: '<font color=blue>九龙雷罡火·雷</font>',
								content: '你造成的伤害均为雷属性伤害.',
							},
							trigger: {
								source: 'damageBegin1',
							},
							forced: true,
							filter(event, player) {
								if (event.name == 'damage' && event.nature == undefined) return true;
							},
							content() {
								trigger.nature = 'thunder';
							},
							group: ['jllghlei_thunder', 'jllgh'],
							subSkill: {
								thunder: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 3,
									logTarget: 'player',
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'fire') return false;
										if (event.name == 'damage' && event.nature == 'thunder') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('jllghlei_thunder');
									},
									content() {
										if (trigger.player.countMark('yczt') <= 0) {
											trigger.player.addSkill('yczt');
											trigger.player.markSkill('yczt');
										} else {
											return false;
										}
									},
									group: ['jllghlei_thunder_roundcount'],
								},
							},
						},
						flnyf: {
							init(player) {
								player.storage.flnyf = 1;
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/feng.jpg');
								}, player);
							},
							mark: true,
							marktext: '<font color=green>风</font>',
							intro: {
								name: '<font color=green>风雷怒焱·风</font>',
								content: '你造成的伤害均为风属性伤害.',
							},
							trigger: {
								source: 'damageBegin1',
							},
							round: 2,
							forced: true,
							filter(event, player) {
								if (event.name == 'damage' && event.nature == undefined) return true;
							},
							content() {
								trigger.nature = 'wind';
							},
							group: ['flnyf_wind', 'flnyf_roundcount', 'flnyf_W'],
							subSkill: {
								wind: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 3,
									logTarget: 'player',
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'wind') return false;
										if (event.name == 'damage' && event.nature == 'wind') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('flny_wind');
									},
									content() {
										'step 0';
										var hs = trigger.player.getCards('e');
										var a = hs.randomGet();
										trigger.player.discard(a).set('delay', false);
										('step 1');
										if (_status.weather == 'feng') {
											trigger.num++;
										} else {
											event.finish();
										}
									},
									group: ['flnyf_wind_roundcount'],
								},
								W: {
									trigger: {
										player: 'phaseZhunbeiEnd',
									},
									forced: true,
									content() {
										if (_status.weather == 'feng') {
											game.broadcastAll(function (player) {
												ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/feng.jpg');
											}, player);
										} else {
											if (!_status.weather) {
												return;
											}
										}
									},
								},
							},
						},
						flnyl: {
							init(player) {
								player.storage.flnyl = 1;
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/lei.jpg');
								}, player);
							},
							mark: true,
							marktext: '<font color=blue>雷</font>',
							intro: {
								name: '<font color=blue>九龙·雷</font>',
								content: '你造成的伤害均为雷属性伤害.',
							},
							trigger: {
								source: 'damageBegin1',
							},
							round: 2,
							forced: true,
							filter(event, player) {
								if (event.name == 'damage' && event.nature == undefined) return true;
							},
							content() {
								trigger.nature = 'thunder';
							},
							group: ['flnyl_thunder', 'flnyl_roundcount'],
							subSkill: {
								thunder: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 3,
									logTarget: 'player',
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'thunder') return false;
										if (event.name == 'damage' && event.nature == 'thunder') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('flnyl_thunder');
									},
									content() {
										'step 0';
										var hs = trigger.player.getCards('h');
										var a = hs.randomGet();
										trigger.player.discard(a).set('delay', false);
										('step 1');
										if (_status.weather == 'lei') {
											trigger.num++;
										} else {
											event.finish();
										}
									},
									group: ['flnyl_thunder_roundcount'],
								},
								L: {
									trigger: {
										player: 'phaseZhunbeiEnd',
									},
									forced: true,
									content() {
										if (_status.weather == 'lei') {
											game.broadcastAll(function (player) {
												ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/lei.jpg');
											}, player);
										} else {
											if (!_status.weather) {
												return;
											}
										}
									},
								},
							},
						},
						gllhb: {
							mark: true,
							marktext: '<font color=blue>冰</font>',
							intro: {
								name: '<font color=blue>骨灵冷火·冰</font>',
								content: '你造成的伤害均为冰属性伤害.',
							},
							trigger: {
								source: 'damageBegin1',
							},
							round: 2,
							forced: true,
							filter(event, player) {
								if (event.name == 'damage' && event.nature == undefined) return true;
							},
							content() {
								trigger.nature = 'ice';
							},
							group: ['gllhb_ice', 'gllhb_roundcount'],
							subSkill: {
								ice: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 3,
									logTarget: 'player',
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'ice') return false;
										if (event.name == 'damage' && event.nature == 'ice') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('gllhb_ice');
									},
									content() {
										trigger.num++;
										trigger.player.turnOver();
									},
									group: ['gllhb_ice_roundcount'],
								},
							},
						},
						gllhh: {
							mark: true,
							marktext: '<font color=blue>火</font>',
							intro: {
								name: '<font color=blue>骨灵冷火·火</font>',
								content: '你造成的伤害均为火属性伤害.',
							},
							trigger: {
								source: 'damageBegin1',
							},
							round: 2,
							forced: true,
							filter(event, player) {
								if (event.name == 'damage' && event.nature == undefined) return true;
							},
							content() {
								trigger.nature = 'fire';
							},
							group: ['gllhh_fire', 'gllhh_roundcount'],
							subSkill: {
								fire: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									nobracket: true,
									round: 3,
									filter(event, player) {
										if (event.name == 'damage' && event.nature != 'fire') return false;
										if (event.name == 'damage' && event.nature == 'fire') return true;
										if (event._notrigger.includes(event.player)) return false;
										return event.player.isIn() && !event.player.hasSkill('gllhh_fire');
									},
									logTarget: 'player',
									content() {
										if (trigger.player.countMark('shaoshang') <= 0) {
											trigger.player.addSkill('shaoshang');
											trigger.player.markSkill('shaoshang');
											trigger.player.addMark('shaoshang');
										} else {
											trigger.player.addMark('shaoshang', 2);
										}
									},
									group: ['gllhh_fire_roundcount'],
								},
							},
						},
						xuruo: {
							mark: true,
							marktext: '虚',
							intro: {
								name: '虚弱状态',
								content: '该角色已陷入虚弱状态,虚弱状态下无法使用或打出卡牌,并且受到的伤害+1,其他角色计算与你的距离始终为1,你的摸牌阶段少摸一张牌,并且手牌上限为0.你的回合开始时,移除一个虚弱标记,若此时你没有标记,则退出虚弱状态.<br><br><b><li>当前标记数为#枚</b>',
							},
							init(player) {
								player.storage.xuruo = 1;
							},
							mod: {
								globalTo(from, to, distance) {
									return distance - Infinity;
								},
								cardEnabled() {
									return false;
								},
								cardUsable() {
									return false;
								},
								cardRespondable() {
									return false;
								},
								cardSavable() {
									return false;
								},
								maxHandcard() {
									return 0;
								},
							},
							ai: {
								threaten: 2,
							},
							group: ['xuruo_storage', 'xuruo_remove', 'xuruo_draw'],
							subSkill: {
								storage: {
									trigger: {
										player: ['damageBefore'],
									},
									_priority: 99,
									forced: true,
									content() {
										trigger.num++;
									},
								},
								remove: {
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									content() {
										if (player.countMark('xuruo') <= 0) {
											player.removeMark('xuruo');
											player.removeSkill('xuruo');
											game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/斗破苍穹X阴阳师/image/qxq_dpcq_xiaoxuner.jpg');
										} else {
											player.storage.xuruo--;
										}
									},
								},
								draw: {
									trigger: {
										player: 'phaseDrawBegin',
									},
									forced: true,
									content() {
										trigger.num--;
									},
								},
							},
						},
						xwtyzihuo: {
							group: ['hsjm'],
							init(player) {
								player.storage.xwtyzihuo;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '虚无吞炎·子火',
								content: '非锁定技<br>回合内限一次,你可以选择一名角色,视为对其使用一张顺手牵羊',
							},
							enable: 'phaseUse',
							usable: 1,
							filterTarget() {
								return true;
							},
							content() {
								player.useCard({ name: 'shunshou' }, event.target, false).animate = false;
							},
							ai: {
								order: 321,
								result: {
									target: -1,
								},
								threaten: 2,
								expose: 0.2,
							},
						},
						tunyan: {
							mark: true,
							marktext: '吞',
							intro: {
								name: '吞炎',
								content: '该角色已被吞炎标记,每个回合开始前摸牌数减少X(X为该标记数量).<br><br><b><li>当前标记数为#枚</b>',
							},
							init(player) {
								player.storage.tunyan;
							},
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								var A = player.countMark('tunyan');
								trigger.num -= A;
								player.storage.tunyan -= A;
								player.removeSkill('tunyan');
							},
						},
						zh: {
							equipSkill: true,
							init(player) {
								player.storage.zh = 3;
							},
							marktext: '火',
							mark: true,
							intro: {
								name: '兽火·紫火',
								content: '紫晶翼狮王的火焰.<br><li><b>此火效果</b>:你获得此火时,获得三个标记;你造成伤害时,若此伤害无属性,则有50%的概率转变成火属性,你失去一个标记(冷却时间两回合);你造成火属性伤害时,失去两个标记并有30%的概率令此伤害+1(冷却时间两回合);你使用此火前,若标记数耗尽,则失去此火焰.<br><br><b><li>当前标记数为#枚</b>',
							},
							trigger: {
								source: 'damageBegin2',
							},
							forced: true,
							nobracket: true,
							round: 2,
							logTarget: 'player',
							filter(event, player) {
								if (event.name == 'damage' && event.nature != 'fire') return false;
								if (event.name == 'damage' && event.nature == 'fire') return true;
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('zh');
							},
							content() {
								'step 0';
								if (player.storage.zh <= 0) {
									player.removeSkill('zh');
									event.finish();
								} else {
									player.storage.zh -= 2;
									event.goto(1);
								}
								('step 1');
								if (Math.random() <= 0.3) {
									trigger.num++;
								}
							},
							group: ['zh_damage', 'zh_roundcount'],
							subSkill: {
								damage: {
									trigger: {
										source: 'damageBegin1',
									},
									round: 2,
									forced: true,
									filter(event, player) {
										if (event.name == 'damage' && event.nature == undefined) return true;
									},
									content() {
										'step 0';
										if (player.storage.zh <= 0) {
											player.removeSkill('zh');
											event.finish();
										} else {
											player.storage.zh--;
											event.goto(1);
										}
										('step 1');
										if (Math.random() <= 0.5) {
											trigger.nature = 'fire';
										}
									},
									group: ['zh_damage_roundcount'],
								},
							},
						},
						snzy: {
							mark: true,
							marktext: '约',
							intro: {
								name: '约',
								content: '该角色已定下三年之约,每个回合开始前增加一个标记并多摸一张牌,达到三个标记时可向约定之人发出挑战(视为使用一张决斗),若此时不发出挑战,则你在标记数大于3时时因羞辱而弃置所有手牌中的杀和所有装备牌,并将武将牌翻面(不敢见人),且对方标记耗尽时仍未受到挑战则可摸两张牌.<br><br><b><li>当前标记数为#枚</b>',
							},
							init(player) {
								player.storage.snzy = 0;
							},
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.storage.snzy >= 3;
							},
							filterTarget(card, player, target) {
								var list = player.storage.snzypl;
								return list && player != target && target.name == list[0].name;
							},//QQQ
							selectTarget: 1,
							multitarget: true,
							multiline: true,
							line: 'thunder',
							content() {
								'step 0';
								player.storage.snzypl = [target];
								player.$fullscreenpop('<font color=yellow>三年之约</font>');
								var S = ['三年如期已至,尔等可敢与我一战!'].randomGet();
								player.say(S);
								var A = ['战便战,难道还怕了你不成!'].randomGet();
								target.say(A);
								('step 1');
								target.removeSkill('snzy1');
								player.removeSkill('snzy');
								if (player.hp <= Math.round(player.maxHp / 2)) {
									if (target.identity && target.identuty != 'zhu') {
										player.chooseControl('三年之约', '生死决斗').set('ai', function (event) {
											if (player.countCards('h') >= 3 && player.hp >= 2 && get.attitude(player, target) < 0) return '生死决斗';
										});
									} else {
										if (!target.identity) {
											player.chooseControl('三年之约', '生死决斗').set('ai', function (event) {
												if (player.countCards('h') >= 3 && player.hp >= 2 && get.attitude(player, target) < 0) return '生死决斗';
											});
										}
									}
								} else {
									player.useCard({ name: 'juedou' }, target).animate = false;
									event.goto(3);
								}
								('step 2');
								if (result.control == '三年之约') {
									player.useCard({ name: 'juedou' }, target).animate = false;
								} else {
									player.useSkill('shengsijuedou', player.storage.snzypl);
								}
								('step 3');
								delete player.storage.snzypl;
								delete target.storage.snzy1pl;
							},
							group: ['add'],
							ai: {
								threaten: 1.5,
								order: 8,
								expos: 0.2,
								result: {
									player(player, target) {
										if (player.countCards('h') <= 2) return 0;
										if (get.attitude(target, player) > 0) return 1;
										if (get.effect(target, { name: 'juedou' }, player, player) > 0) return 1.5;
										return 0;
									},
								},
							},
						},
						snzy1: {
							mark: true,
							marktext: '约',
							intro: {
								name: '约',
								content: '该角色已被定下三年之约,每回合减少一个标记,若标记耗尽时未受到挑战则摸两张牌并移除标记.<br><br><b><li>当前标记数为#枚</b>',
							},
							init(player) {
								player.storage.snzy1 = 4;
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							silent: true,
							content() {
								player.storage.snzy1--;
								if (player.storage.snzy1 <= 0) {
									player.removeSkill('snzy1');
									player.draw(2);
									var S = ['废物就是废物,别说三年,就是三十年也还是废物!', '连一战都不敢的家伙,果然不愧是废物!'].randomGet();
									player.say(S);
									delete player.storage.snzy1pl;
								} else {
								}
							},
							forced: true,
							popup: false,
						},
						add: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							silent: true,
							content() {
								player.storage.snzy++;
								player.draw();
								if (player.storage.snzy > 3) {
									var list = [];
									for (var i of game.players) {
										if (i.storage.snzy1) {
											list.push(i);
										}
									}
									if (list.length) {
										player.removeSkill('snzy');
										player.removeMark('snzy');
										var hs = player.getCards('h', { name: 'sha' });
										player.discard(hs).set('delay', false);
										var zb = player.getCards('e');
										player.discard(zb).set('delay', false);
										player.turnOver(true);
									} else {
										var S = ['你连三年都活不到,还妄图与我一战,真是笑话!'].randomGet();
										player.say(S);
										player.removeSkill('snzy');
										player.removeSkill('add');
										delete player.storage.snzypl;
									}
								} else {
								}
							},
							forced: true,
							popup: false,
						},
						yanfanji: {
							trigger: {
								global: 'useCardToBegin',
							},
							filter(event, player) {
								return event.target == player && event.targets.length == 1 && event.player != player && player.countMark('guazhang_gua') > 0 && get.tag(event.card, 'damage');
							},
							content() {
								'step 0';
								player.storage.guazhang_gua--;
								if (Math.random() <= 0.5) {
									event.finish();
								} else {
									event.goto(1);
								}
								('step 1');
								player.chooseTarget(get.prompt('请选择转移的目标'), function (card, player, target) {
									return target != player && player.inRange(target);
								});
								player.line(target, 'green');
								('step 2');
								var target = result.targets[0];
								if (result.bool) {
									trigger.target = target;
								}
								('step 3');
								var target = result.targets[0];
								if (result.bool) {
									if (player.countCards('h', { name: 'sha' }) > 0) {
										player.chooseToUse('是否对此目标追加一张【杀】？', { name: 'sha' }, target)._triggered = null;
										game.log(player, '对', target, '追加使用了一张<杀>!');
									}
								}
							},
							ai: {
								order: 100,
								expose: 0.8,
								threaten: 1.1,
								result: {
									player(player) {
										if (player.countCards('h', { name: 'sha' }) > 0) return 1;
									},
								}, //QQQ
							},
						},
						guazhang: {
							init(player) {
								player.storage.guazhang = [`当前拥有【掌】标记数:${player.storage.guazhang_gua || 0}<br>当前拥有【护】标记数:${player.storage.guazhang_hu || 0}`];
								player.storage.guazhang_gua = 0;
								player.storage.guazhang_hu = 0;
								player.addSkill('guazhang_gua');
								player.addSkill('guazhang_hu');
							},
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i) == 'd') {
											return event.cards && get.itemtype(event.cards) == 'cards' && event.name == 'damage' && event.player != player;
										}
									}
								return false;
							},
							check(event, player) {
								return 1;
							},
							content() {
								if (!trigger.player.storage.guazhang_G) {
									trigger.player.addSkill('guazhang_G');
								}
								var card1 = trigger.player.storage.guazhang_G.randomGet();
								trigger.player.storage.guazhang_G.remove(card1, ui.special)._triggered = null;
								if (Array.isArray(trigger.cards))
									for (var i of trigger.cards) {
										if (get.position(i) == 'd') {
											trigger.player.storage.guazhang_G = trigger.player.storage.guazhang_G.concat(i);
										}
									}
								var card2 = trigger.cards;
								trigger.player.directgain(trigger.cards);
								trigger.player.lose(trigger.cards, ui.special)._triggered = null;
								trigger.player.$gain2(trigger.cards);
								trigger.player.markSkill('guazhang_G');
								if (card1 != undefined) {
									game.log(player, '用', card2, '替换了', trigger.player, '武将牌上的原【卦掌】标记', card1);
									var A = card1.number;
									var B = card2.number;
									if (A == B) {
										game.log('替换的牌数字相同!', player, '获得了一个【掌】标记和一个【护】标记!');
										player.storage.guazhang_hu++;
										if (player.storage.guazhang_gua < 8) {
											player.storage.guazhang_gua++;
										} else {
											game.log(player, '的【掌】标记已达上限,无法继续获得标记!');
										}
									}
									var C = get.color(card1);
									var D = get.color(card2);
									if (C == D) {
										player.draw();
										game.log('替换的牌颜色相同!', player, '摸了一张牌.');
									}
									var E = card1.name;
									var F = card2.name;
									if (E == F && card1.name != 'sha' && card2.name != 'sha') {
										game.log('替换的牌牌名相同,且不为【杀】!', player, '获得了一个【掌】标记和一个【护】标记!');
										player.storage.guazhang_hu++;
										if (player.storage.guazhang_gua < 8) {
											player.storage.guazhang_gua++;
										} else {
											game.log(player, '的【掌】标记已达上限,无法继续获得标记!');
										}
									} else {
										player.draw();
										game.log('替换的牌都是【杀】!', player, '摸了一张牌.');
									}
									var G = card1.suit;
									var H = card2.suit;
									if (G == H) {
										game.log('替换的牌花色相同!', player, '获得了一个【掌】标记!');
										if (player.storage.guazhang_gua < 8) {
											player.storage.guazhang_gua++;
										} else {
											game.log(player, '的【掌】标记已达上限,无法继续获得标记!');
										}
									}
								} else {
									game.log(player, '将', card2, '置于', trigger.player, '的武将牌上,作为【卦掌】标记');
								}
								player.storage.guazhang = [`当前拥有【掌】标记数:${player.storage.guazhang_gua || 0}<br>当前拥有【护】标记数:${player.storage.guazhang_hu || 0}`];
							},
							group: ['guazhang_G', 'dpcqshouhu', 'guazhang_remove', 'guazhang_player', 'guazhang_give'],
							subSkill: {
								G: {
									init(player) {
										player.storage.guazhang_G = [];
									},
									intro: {
										content(storage, player) {
											var str = '';
											if (player.storage.guazhang_G && player.storage.guazhang_G.length) {
												str += get.translation(player.storage.guazhang_G[0]);
												for (var i = 1; i < player.storage.guazhang_G.length; i++) {
													str += '、' + get.translation(player.storage.guazhang_G[i]);
												}
											}
											return str;
										},
										onunmark(storage, player) {
											if (storage && storage.length) {
												player.$throw(storage, 1000);
												game.cardsDiscard(storage);
												game.log(storage, '被置入了弃牌堆');
												player.storage.guazhang_G.length = 0;
											}
										},
										mark(dialog, content, player) {
											var cards = [];
											if (player.storage.guazhang_G && player.storage.guazhang_G.length) {
												for (var i = 0; i < player.storage.guazhang_G.length; i++) {
													cards.push(player.storage.guazhang_G[i]);
												}
											}
											if (cards.length) {
												dialog.add('<div class="text center">卦掌:上一次受到伤害的牌</div>');
												dialog.add(cards);
											} else {
												dialog.add('无');
											}
										},
									},
								},
								remove: {
									trigger: {
										player: 'dieBegin',
									},
									silent: true,
									content() {
										for (var i of game.players) {
											if (i.hasSkill('guazhang_G') && i.storage.guazhang_G) {
												i.removeSkill('guazhang_G');
											}
										}
									},
									forced: true,
									popup: false,
								},
								gua: {
									mark: true,
									unseen: true,
									marktext: '掌',
									init(player) {
										player.storage.guazhang_gua = 0;
									},
									intro: {
										name: '卦掌',
										content: '<br><br><b><li>当前标记数为:#</b>',
									},
								},
								hu: {
									mark: true,
									unseen: true,
									marktext: '护',
									init(player) {
										player.storage.guazhang_hu = 0;
									},
									intro: {
										name: '守护',
										content: '<br><br><b><li>当前标记数为:#</b>',
									},
									trigger: {
										player: ['phaseZhunbeiBegin'],
									},
									_priority: 300,
									forced: true,
									filter(event, player) {
										if (event.player.countMark('guazhang_hu') >= 0) return true;
									},
									content() {
										'step 0';
										if (player.storage.guazhang_gua >= 0) {
										} else {
											player.removeSkill('guazhang_hu');
										}
									},
								},
								give: {
									enable: 'phaseUse',
									usable: 1,
									filter(event, player) {
										if (player.countMark('guazhang_hu') >= 2) return true;
									},
									filterTarget(card, player, target) {
										return player != target && !target.storage.guazhang_hu;
									},
									content() {
										player.storage.guazhang_hu -= 2;
										target.addSkill('guazhang_hu');
										target.storage.guazhang_hu++;
									},
								},
								player: {
									trigger: {
										player: 'damageBefore',
									},
									filter(event, player) {
										if (player.countMark('guazhang_hu') > 0 && player.countMark('guazhang_gua') > 0) return true;
									},
									content() {
										player.storage.guazhang_gua--;
										player.storage.guazhang_hu--;
										player.useCard({ name: 'sha' }, trigger.source)._triggered = null;
										trigger.cancel();
									},
									ai: {
										order: 100,
										result: {
											player(player) {
												return 1;
											},
										},
									},
								},
							},
						},
						liandan: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (player.countMark('yaocai') > 0 && player.countMark('danyao') < 3) return true;
							},
							logTarget: 'player',
							content() {
								'step 0';
								var A = player.countMark('yaocai');
								var B = player.countMark('yaocai_jingyan');
								var C = player.countMark('yaocai_dengji');
								if (A == 5 && C >= 5) {
									event.goto(5);
								} else {
									event.goto(1);
								}
								('step 1');
								var A = player.countMark('yaocai');
								var B = player.countMark('yaocai_jingyan');
								var C = player.countMark('yaocai_dengji');
								if (A >= 4 && C >= 3) {
									event.goto(6);
								} else {
									event.goto(2);
								}
								('step 2');
								var A = player.countMark('yaocai');
								var B = player.countMark('yaocai_jingyan');
								var C = player.countMark('yaocai_dengji');
								if (A >= 3 && C >= 2) {
									event.goto(7);
								} else {
									event.goto(3);
								}
								('step 3');
								var A = player.countMark('yaocai');
								var B = player.countMark('yaocai_jingyan');
								var C = player.countMark('yaocai_dengji');
								if (A >= 2) {
									event.goto(8);
								} else {
									event.goto(4);
								}
								('step 4');
								var A = player.countMark('yaocai');
								var B = player.countMark('yaocai_jingyan');
								var C = player.countMark('yaocai_dengji');
								if (A == 1) {
									event.goto(9);
								} else {
									event.finish();
								}
								('step 5');
								var B = player.countMark('yaocai_jingyan');
								player.storage.yaocai -= 5;
								if (Math.random() <= 0.2 + B / 1000) {
									player.$fullscreenpop('<font color=yellow>炼丹成功</font>');
									if (Math.random() <= 0.95) {
										player.addJudge(game.createCard('shandian'));
										player.popup('丹雷');
										game.log(player, '炼丹成功,引来了丹雷!');
									}
									if (player.storage.yaocai_fanmingdan >= 3) {
										event.finish();
										if (player.countMark('yaocai_jingyan') < 100) {
											player.storage.yaocai_jingyan += 16;
										}
										event.finish();
									} else {
										if (!player.storage.yaocai_fanmingdan) {
											player.addSkill('yaocai_fanmingdan');
											player.storage.yaocai_fanmingdan++;
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan += 16;
											}
											event.finish();
										} else {
											player.storage.yaocai_fanmingdan++;
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan += 16;
											}
											event.finish();
										}
									}
								} else {
									var B = player.countMark('yaocai_jingyan');
									if (Math.random() <= 0.25 - B / 1000) {
										player.damage(1, 'fire', 'nosource');
										player.popup('炸炉');
										game.log(player, '炼丹失败,炸炉!');
									}
									player.$fullscreenpop('<font color=gray>炼丹失败</font>');
									if (player.countMark('yaocai_jingyan') < 100) {
										player.storage.yaocai_jingyan += 8;
										event.finish();
									}
								}
								('step 6');
								var B = player.countMark('yaocai_jingyan');
								player.storage.yaocai -= 4;
								if (Math.random() <= 0.45 + B / 1000) {
									player.$fullscreenpop('<font color=yellow>炼丹成功</font>');
									if (Math.random() <= 0.65) {
										player.addJudge(game.createCard('shandian'));
										player.popup('丹雷');
										game.log(player, '炼丹成功,引来了丹雷!');
									}
									var R = get.rand(0, 1);
									if (R == 0) {
										if (player.storage.yaocai_yinyangxuanlongdan >= 3) {
											event.finish();
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan += 8;
											}
											event.finish();
										} else {
											if (!player.storage.yaocai_yinyangxuanlongdan) {
												player.addSkill('yaocai_yinyangxuanlongdan');
												player.storage.yaocai_yinyangxuanlongdan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 8;
												}
												event.finish();
											} else {
												player.storage.yaocai_yinyangxuanlongdan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 8;
												}
												event.finish();
											}
										}
									}
									if (R == 1) {
										if (player.storage.yaocai_fengxingdan >= 3) {
											event.finish();
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan += 8;
											}
											event.finish();
										} else {
											if (!player.storage.yaocai_fengxingdan) {
												player.addSkill('yaocai_fengxingdan');
												player.storage.yaocai_fengxingdan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 8;
												}
												event.finish();
											} else {
												player.storage.yaocai_fengxingdan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 8;
												}
												event.finish();
											}
										}
									}
								} else {
									var B = player.countMark('yaocai_jingyan');
									if (Math.random() <= 0.15 - B / 1000) {
										player.damage(1, 'fire', 'nosource');
										player.popup('炸炉');
										game.log(player, '炼丹失败,炸炉!');
									}
									player.$fullscreenpop('<font color=gray>炼丹失败</font>');
									if (player.countMark('yaocai_jingyan') < 100) {
										player.storage.yaocai_jingyan += 4;
										event.finish();
									}
								}
								('step 7');
								var B = player.countMark('yaocai_jingyan');
								player.storage.yaocai -= 3;
								if (Math.random() <= 0.65 + B / 1000) {
									player.$fullscreenpop('<font color=yellow>炼丹成功</font>');
									if (Math.random() <= 0.35) {
										player.addJudge(game.createCard('shandian'));
										player.popup('丹雷');
										game.log(player, '炼丹成功,引来了丹雷!');
									}
									var R = get.rand(0, 1);
									if (R == 0) {
										if (player.storage.yaocai_longlidan >= 3) {
											event.finish();
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan += 4;
											}
											event.finish();
										} else {
											if (!player.storage.yaocai_longlidan) {
												player.addSkill('yaocai_longlidan');
												player.storage.yaocai_longlidan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 4;
												}
												event.finish();
											} else {
												player.storage.yaocai_longlidan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 4;
												}
												event.finish();
											}
										}
									}
									if (R == 1) {
										if (player.storage.yaocai_shishengdan >= 3) {
											event.finish();
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan += 4;
											}
											event.finish();
										} else {
											if (!player.storage.yaocai_shishengdan) {
												player.addSkill('yaocai_shishengdan');
												player.storage.yaocai_shishengdan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 4;
												}
												event.finish();
											} else {
												player.storage.yaocai_shishengdan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 4;
												}
												event.finish();
											}
										}
									}
								} else {
									var B = player.countMark('yaocai_jingyan');
									if (Math.random() <= 0.05 - B / 1000) {
										player.damage(1, 'fire', 'nosource');
										player.popup('炸炉');
										game.log(player, '炼丹失败,炸炉!');
									}
									player.$fullscreenpop('<font color=gray>炼丹失败</font>');
									if (player.countMark('yaocai_jingyan') < 100) {
										player.storage.yaocai_jingyan += 2;
										event.finish();
									}
								}
								('step 8');
								var B = player.countMark('yaocai_jingyan');
								player.storage.yaocai -= 2;
								if (Math.random() <= 0.8 + B / 1000) {
									player.$fullscreenpop('<font color=yellow>炼丹成功</font>');
									var R = get.rand(0, 3);
									if (R == 0) {
										if (player.storage.yaocai_fushangdan >= 3) {
											event.finish();
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan += 2;
											}
											event.finish();
										} else {
											if (!player.storage.yaocai_fushangdan) {
												player.addSkill('yaocai_fushangdan');
												player.storage.yaocai_fushangdan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 2;
												}
												event.finish();
											} else {
												player.storage.yaocai_fushangdan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 2;
												}
												event.finish();
											}
										}
									}
									if (R == 1) {
										if (player.storage.yaocai_bingxindan >= 3) {
											event.finish();
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan += 2;
											}
											event.finish();
										} else {
											if (!player.storage.yaocai_bingxindan) {
												player.addSkill('yaocai_bingxindan');
												player.storage.yaocai_bingxindan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 2;
												}
												event.finish();
											} else {
												player.storage.yaocai_bingxindan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 2;
												}
												event.finish();
											}
										}
									}
									if (R == 2) {
										if (player.storage.yaocai_humaidan >= 3) {
											event.finish();
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan += 2;
											}
											event.finish();
										} else {
											if (!player.storage.yaocai_humaidan) {
												player.addSkill('yaocai_humaidan');
												player.storage.yaocai_humaidan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 2;
												}
												event.finish();
											} else {
												player.storage.yaocai_humaidan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 2;
												}
												event.finish();
											}
										}
									}
									if (R == 3) {
										if (player.storage.yaocai_juqisan >= 3) {
											event.finish();
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan += 2;
											}
											event.finish();
										} else {
											if (!player.storage.yaocai_juqisan) {
												player.addSkill('yaocai_juqisan');
												player.storage.yaocai_juqisan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 2;
												}
												event.finish();
											} else {
												player.storage.yaocai_juqisan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan += 2;
												}
												event.finish();
											}
										}
									}
								} else {
									player.$fullscreenpop('<font color=gray>炼丹失败</font>');
									if (player.countMark('yaocai_jingyan') < 100) {
										player.storage.yaocai_jingyan++;
										event.finish();
									}
								}
								('step 9');
								var B = player.countMark('yaocai_jingyan');
								player.storage.yaocai -= 1;
								if (Math.random() <= 0.9 + B / 1000) {
									player.$fullscreenpop('<font color=yellow>炼丹成功</font>');
									var R = get.rand(0, 1);
									if (R == 0) {
										if (player.storage.yaocai_xuliwan >= 3) {
											event.finish();
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan++;
											}
											event.finish();
										} else {
											if (!player.storage.yaocai_xuliwan) {
												player.addSkill('yaocai_xuliwan');
												player.storage.yaocai_xuliwan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan++;
												}
												event.finish();
											} else {
												player.storage.yaocai_xuliwan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan++;
												}
												event.finish();
											}
										}
									}
									if (R == 1) {
										if (player.storage.yaocai_huiqidan >= 3) {
											event.finish();
											if (player.countMark('yaocai_jingyan') < 100) {
												player.storage.yaocai_jingyan++;
											}
											event.finish();
										} else {
											if (!player.storage.yaocai_huiqidan) {
												player.addSkill('yaocai_huiqidan');
												player.storage.yaocai_huiqidan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan++;
												}
												event.finish();
											} else {
												player.storage.yaocai_huiqidan++;
												if (player.countMark('yaocai_jingyan') < 100) {
													player.storage.yaocai_jingyan++;
												}
												event.finish();
											}
										}
									}
								} else {
									player.$fullscreenpop('<font color=gray>炼丹失败</font>');
									if (player.countMark('yaocai_jingyan') < 100) {
										player.storage.yaocai_jingyan++;
										event.finish();
									}
								}
								player.storage.lianyao = [`已拥有的药材数:${player.storage.yaocai || 0}<br>已拥有的丹药:<br>蓄力丸 x ${player.storage.yaocai_xuliwan || 0}<br>回气丹 x ${player.storage.yaocai_huiqidan || 0}<br>覆伤丹 x ${player.storage.yaocai_fushangdan || 0}<br>护脉丹 x ${player.storage.yaocai_humaidan || 0}<br>冰心丹 x ${player.storage.yaocai_bingxindan || 0}<br>聚气散 x ${player.storage.yaocai_juqisan || 0}<br>龙力丹 x ${player.storage.yaocai_longlidan || 0}<br>噬生丹 x ${player.storage.yaocai_shishengdan || 0}<br>阴阳玄龙丹 x ${player.storage.yaocai_yinyangxuanlongdan || 0}<br>风行丹 x ${player.storage.yaocai_fengxingdan || 0}<br>返命丹 x ${player.storage.yaocai_fanmingdan || 0}`];
							},
						},
						dpcqshouhu: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							init(player) {
								if (!player.storage.guazhang_hu) player.storage.guazhang_hu = 0;
							},
							trigger: {
								global: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && event.player.isAlive() && event.player.hasMark('guazhang_hu') && event.source != undefined && player.countMark('guazhang_gua') > 0;
							},
							content() {
								'step 0';
								if (player.hasSkill('guazhang', trigger.player) && trigger.player.isAlive()) {
									trigger.player.chooseBool(`是否向${get.translation(player)}请求发动【卦掌】？`).ai = function () {
										return 1;
									};
								} else event.finish();
								('step 1');
								if (result.bool) {
									event.goto(2);
								} else {
									event.finish();
								}
								('step 2');
								player.chooseControl('对伤害来源发动【卦掌】', '不发动【卦掌】').set('ai', function (event) {
									if (get.attitude(trigger.player, player) > 1) return '对伤害来源发动【卦掌】';
								});
								('step 3');
								if (result.control == '对伤害来源发动【卦掌】') {
									player.storage.guazhang_gua--;
									player.chooseToUse('是否对此伤害来源使用一张【杀】？', { name: 'sha' }, trigger.source);
								} else {
									event.finish();
								}
							},
							ai: {
								order: 100,
								expose: 0.7,
								threaten: 1.1,
								result: {
									player(player) {
										if (player.countCards('h', { name: 'sha' }) > 0) return 1;
									},
								}, //QQQ
							},
						},
						diyinjue: {
							init(player) {
								player.storage.diyinjuenum = 0;
								player.storage.diyinjue = '';
							},
							mark: true,
							unseen: true,
							nobracket: true,
							marktext: '帝',
							intro: {
								name: '帝印决',
								content(storage, player) {
									var str = '';
									if (player.storage.diyinjuenum == 0) str += '开山印:你使用"杀"指定目标后,你可弃置一张手牌/装备牌,选择摸一张牌(冷却一回合)或将技能升级为"翻海印".';
									if (player.storage.diyinjuenum == 1) str += '翻海印:你使用"杀"指定目标后,你可弃置一张手牌/装备牌,选择弃置目标一张手牌并将技能切换回<开山印>,或将技能升级为"湮天印".';
									if (player.storage.diyinjuenum == 2) str += '湮天印:你使用"杀"指定目标后,你可弃置一张手牌/装备牌,选择弃置目标一张装备牌牌并将技能切换回"开山印",若你此时为觉醒状态,则可选择弃置一张手牌并将技能继续升级为"覆地印".';
									if (player.storage.diyinjuenum == 3) str += '覆地印:你使用"杀"指定目标后,你可选择弃置目标所有手牌并将技能切换回"开山印",若你此时为觉醒状态,则此时可将技能无消耗升级为"古帝印".';
									if (player.storage.diyinjuenum == 4) str += '古帝印:你使用"杀"指定目标后,你可弃置一张手牌,选择弃置目标所有手牌和装备牌并将其翻面,并且造成等同于目标体力上限一半的伤害值,你将技能切换回"开山印".';
									return str;
								},
							},
							trigger: {
								player: ['shaEnd'],
							},
							_priority: 300,
							forced: true,
							filter(event, player) {
								if (event.player.storage.diyinjuenum >= 0) return true;
							},
							content() {
								if (player.storage.diyinjuenum == 0) {
									player.storage.diyinjue = ['<br>开山印:你使用"杀"指定目标后,你可弃置一张手牌/装备牌,选择摸一张牌(冷却一回合)或将技能升级为"翻海印".'];
								}
								if (player.storage.diyinjuenum == 1) {
									player.storage.diyinjue = ['<br>翻海印:你使用"杀"指定目标后,你可弃置一张手牌/装备牌,选择弃置目标一张手牌并将技能切换回<开山印>,或将技能升级为"湮天印".'];
								}
								if (player.storage.diyinjuenum == 2) {
									player.storage.diyinjue = ['<br>湮天印:你使用"杀"指定目标后,你可弃置一张手牌/装备牌,选择弃置目标一张装备牌牌并将技能切换回"开山印",若你此时为觉醒状态,则可选择弃置一张手牌并将技能继续升级为"覆地印".".'];
								}
								if (player.storage.diyinjuenum == 3) {
									player.storage.diyinjue = ['<br>覆地印:你使用"杀"指定目标后,你可选择弃置目标所有手牌并将技能切换回"开山印",若你此时为觉醒状态,则此时可将技能无消耗升级为"古帝印".'];
								}
								if (player.storage.diyinjuenum == 4) {
									player.storage.diyinjue = ['<br>古帝印:你使用"杀"指定目标后,你可弃置一张手牌,选择弃置目标所有手牌和装备牌并将其翻面,并且造成等同于目标体力上限一半的伤害值,你将技能切换回"开山印".'];
								}
							},
							group: ['diyinjue_sha'],
							subSkill: {
								sha: {
									trigger: {
										player: 'shaBefore',
									},
									forced: true,
									content() {
										'step 0';
										if (player.countCards('he') > 0) {
											event.goto(1);
										} else {
											event.goto(4);
										}
										('step 1');
										if (player.storage.juexing) {
											if (player.storage.diyinjuenum < 4) {
												event.goto(5);
											} else {
												event.goto(7);
											}
										} else {
											if (player.storage.diyinjuenum < 2) {
												event.goto(2);
											} else {
												event.goto(7);
											}
										}
										('step 2');
										player.chooseControl('升级帝印决', '不升级').set('ai', function (event) {
											if (player.countCards('h') >= 3) return '升级帝印决';
										});
										('step 3');
										if (result.control == '升级帝印决') {
											player.chooseToDiscard(1, 'he', true);
											player.storage.diyinjuenum++;
										} else {
											event.goto(7);
										}
										('step 4');
										event.finish();
										('step 5');
										player.chooseControl('升级帝印决', '不升级').set('ai', function (event) {
											return '升级帝印决';
										});
										('step 6');
										if (result.control == '升级帝印决') {
											player.storage.diyinjuenum++;
										} else {
											event.goto(7);
										}
										('step 7');
										var A = player.countMark('diyinjue');
										if (A == 0) {
											player.addSkill('diyinjue_kaishanyin');
											player.storage.diyinjuenum -= A;
										}
										if (A == 1) {
											player.addSkill('diyinjue_fanhaiyin');
											player.storage.diyinjuenum -= A;
										}
										if (A == 2) {
											player.addSkill('diyinjue_yantianyin');
											player.storage.diyinjuenum -= A;
										}
										if (A == 3) {
											player.addSkill('diyinjue_fudiyin');
											player.storage.diyinjuenum -= A;
										}
										if (A >= 4) {
											player.addSkill('diyinjue_gudiyin');
											player.storage.diyinjuenum -= A;
										}
									},
									ai: {
										order: 100,
										result: {
											player(player) {
												if (player.countCards('h', { name: 'sha' }) > 0) return 1;
											},
										},
									},
								},
								kaishanyin: {
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									round: 1,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										player.draw();
										player.removeSkill('diyinjue_kaishanyin');
									},
									group: ['diyinjue_kaishanyin_roundcount'],
								},
								fanhaiyin: {
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										player.discardPlayerCard(get.prompt('翻海印:弃置目标一张手牌'), trigger.player);
										player.removeSkill('diyinjue_fanhaiyin');
									},
								},
								yantianyin: {
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										player.discardPlayerCard(get.prompt('湮天印:弃置目标一张装备牌'), trigger.player, 'e', true, 'visible');
										player.removeSkill('diyinjue_yantianyin');
									},
								},
								fudiyin: {
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										var hs = trigger.player.getCards('h');
										trigger.player.discard(hs).set('delay', false);
										player.removeSkill('diyinjue_fudiyin');
									},
								},
								gudiyin: {
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										var he = trigger.player.getCards('he');
										trigger.player.discard(he).set('delay', false);
										trigger.player.turnOver(true);
										var mH = trigger.player.maxHp / 2;
										trigger.player.damage(mH);
										player.removeSkill('diyinjue_gudiyin');
									},
								},
							},
						},
						dajimiezhi: {
							init(player) {
								player.storage.dajimiezhi;
							},
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.hasSkill('dajimiezhi');
							},
							mark: true,
							unseen: true,
							nobracket: true,
							marktext: '寂',
							intro: {
								name: '大寂灭指',
								content: '出牌阶段可发动,弃置所有黑色手牌对一名角色造成随机一到两点不触发任何技能效果的伤害,发动后将武将牌翻面并进入虚弱状态.',
							},
							line: 'fire',
							filterTarget(card, player, target) {
								return target != player;
							},
							selectTarget: 1,
							delay: false,
							contentBefore() {
								'step 0';
								if (player.storage.juexing) {
									event.goto(3);
								}
								('step 1');
								var cards = player.getCards('h');
								cards = cards.filter((q) => get.color(i) == 'black'); //qqq
								cards.sort(lib.sort.random);
								player.discard(cards);
							},
							content() {
								player.$fullscreenpop('<font color=black>大寂灭指</font>');
								if (!player.storage.juexing) {
									var hs = target.getCards('e');
									var r = hs.randomGet();
									target.discard(r).set('delay', false);
									player.addSkill('xuruo');
									player.turnOver(true);
									var R = get.rand(1, 2);
									target.damage(R)._triggered = null;
								} else {
									var R = get.rand(1, 2);
									target.damage(R, 'fire')._triggered = null;
								}
							},
							ai: {
								order: 100,
								result: {
									player(player) {
										if (player.storage.juexing > 0) return 1;
									},
								},
							},
						},
						mifa: {
							init(player) {
								player.storage.mifa;
							},
							marktext: '秘',
							mark: true,
							unseen: true,
							intro: {
								name: '秘法',
								content: '觉醒技,当你受到伤害或体力流失或体力上限减少时,或在出牌阶段,若此时你的体力值为1或已损体力值超过两点,则可发动此技能,获得七彩族纹标记;或当你濒死时,强制发动此技能.发动此技能时,你的体力值和体力上限均增加三点,并摸牌至体力上限的一半,拥有七彩族纹时,拥有技能【金帝焚天斩】并强化技能【大寂灭指】(去除大寂灭指的负面效果并将伤害转变为火属性),同时解锁【帝印诀】后两式,此状态维持三回合,三回合后你将以上技能、体力值和体力上限的变化均回复原样并弃置所有牌,你进入虚弱状态.',
							},
							trigger: {
								player: ['dieBegin'],
							},
							_priority: null,
							filter(event, player) {
								if (player.hp <= 0 && event.name == 'die' && player.hasSkill('mifa')) return true;
								return false;
							},
							check(event, player) {
								return event.name == 'die';
							},
							forced: true,
							content() {
								trigger.cancel();
								player.awakenSkill('mifa');
								player.maxHp += 3;
								player.hp += 3;
								var H = player.maxHp / 2;
								var B = player.countCards('h');
								if (H > B) {
									player.draw(H - B);
								}
								player.addSkill('juexing');
								game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/jxxxe.jpg');
							},
							group: ['mifa_A', 'mifa_B'],
							subSkill: {
								A: {
									trigger: {
										player: ['loseHpEnd', 'damageEnd', 'loseMaxHpEnd'],
									},
									_priority: null,
									filter(event, player) {
										if ((player.hp == 1 || player.maxHp - player.hp >= 2) && player.hasSkill('mifa')) return true;
										return false;
									},
									check(event, player) {
										return true;
									},
									content() {
										trigger.cancel();
										player.awakenSkill('mifa');
										player.maxHp += 3;
										player.hp += 3;
										var H = player.maxHp / 2;
										var B = player.countCards('h');
										if (H > B) {
											player.draw(H - B);
										}
										player.addSkill('juexing');
										game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/jxxxe.jpg');
									},
								},
								B: {
									enable: 'phaseUse',
									usable: 1,
									filter(event, player) {
										if ((player.hp == 1 || player.maxHp - player.hp >= 2) && player.hasSkill('mifa')) return true;
									},
									logTarget: 'player',
									content() {
										player.awakenSkill('mifa');
										player.maxHp += 3;
										player.hp += 3;
										var H = player.maxHp / 2;
										var B = player.countCards('h');
										if (H > B) {
											player.draw(H - B);
										}
										player.addSkill('juexing');
										game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/jxxxe.jpg');
									},
									ai: {
										order: 100,
										expose: 1.5,
										threten: 2,
										result: {
											player(player) {
												if (player.countCards('h') < 2 && player.hp == 1) return 1;
											},
										}, //QQQ
									},
								},
							},
						},
						juexing: {
							mark: true,
							marktext: '七',
							intro: {
								name: '七彩族纹',
								content: '当前为觉醒状态,剩余回合数:#',
							},
							init(player) {
								player.storage.juexing = 3;
								player.addTempSkill('jindifentianzhan', { player: 'dieAfter' });
							},
							trigger: {
								player: 'phaseAfter',
							},
							silent: true,
							content() {
								player.storage.juexing--;
								if (player.storage.juexing <= 0) {
									player.removeSkill('juexing');
									player.removeSkill('jindifentianzhan');
									player.discard(player.getCards('he'));
									player.addSkill('xuruo');
									player.hp -= 3;
									player.maxHp -= 3;
									game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/xuruoxxe.jpg');
								} else {
								}
							},
							forced: true,
							popup: false,
						},
						jindifentianzhan: {
							init(player) {
								player.storage.jindifentianzhannum = 0;
								player.storage.jindifentianzhan = [`当前连斩数:${player.storage.jindifentianzhannum || 0}`];
							},
							enable: 'phaseUse',
							filter(event, player) {
								return player.hasSkill('jindifentianzhan') && player.hasSkill('juexing') && player.storage.juexing > 0;
							},
							mark: true,
							unseen: true,
							nobracket: true,
							marktext: '斩',
							intro: {
								name: '金帝焚天斩',
								content: '出牌阶段可发动,使用后移除此技能,对攻击范围内的目标发动斩击,且斩击后可再次发动斩击,最多连续斩击三次,每发动一次斩击减少觉醒状态的一回合持续时间(若持续时间不足,则改为减少一点体力值,你以此法减少的体力值不会导致死亡),同时每发动一次斩击,下一次斩击伤害增加,若成功让目标进入死亡状态(目标使用复活也能触发此效果效果),则你回复一点体力值并增加一点体力上限,若连续三次斩击后目标仍未阵亡,则其减少40%体力上限.斩击期间,你无视任何形式的伤害和体力流失.<br>当前连斩数:#',
							},
							line: 'fire',
							filterTarget(card, player, target) {
								return player.inRange(target);
							},
							check() {
								return true;
							},
							selectTarget: 1,
							delay: false,
							contentBefore(player, target) {
								'step 0';
								player.$fullscreenpop('<font color=yellow>金帝焚天斩</font>');
								game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/jdftxxe.jpg');
								player.addSkill('wudizhuangtai');
							},
							content() {
								//QQQ
								'step 0';
								player.addSkill('zhansha');
								if (player.storage.juexing > 0) {
									player.storage.juexing--;
								} else {
									player.hp--;
								}
								player.storage.jindifentianzhannum++;
								player.storage.jindifentianzhan = [`当前连斩数:${player.storage.jindifentianzhannum || 0}`];
								var num = player.countMark('jindifentianzhan');
								var d = player.maxHp - player.hp;
								player.$fullscreenpop('<font color=yellow>金帝焚天斩:第一斩!</font>');
								player.line(target, 'fire');
								var final = Math.round(num + d / 3);
								target.damage(final, 'fire');
								if (target.hp == undefined) {
									event.goto(5);
								} else {
									event.goto(1);
								}
								('step 1');
								player.chooseControl('发动第二斩', '结束').set('ai', function (event) {
									if (target.hp > 0) return '发动第二斩';
								});
								('step 2');
								if (result.control == '发动第二斩') {
									if (player.storage.juexing > 0) {
										player.storage.juexing--;
									} else {
										player.hp--;
									}
									player.storage.jindifentianzhannum++;
									player.storage.jindifentianzhan = [`当前连斩数:${player.storage.jindifentianzhannum || 0}`];
									var num = player.countMark('jindifentianzhan');
									var d = player.maxHp - player.hp;
									player.$fullscreenpop('<font color=yellow>金帝焚天斩:第二斩!</font>');
									player.line(target, 'fire');
									var final = Math.round(num * 1.5 + d / 3);
									target.damage(final, 'fire');
									if (target.hp == undefined) {
										event.goto(5);
									} else {
										event.goto(3);
									}
								} else {
									event.goto(5);
								}
								('step 3');
								player.chooseControl('发动第三斩', '结束').set('ai', function (event) {
									if (target.hp > 0) return '发动第三斩';
								});
								('step 4');
								if (result.control == '发动第三斩') {
									if (player.storage.juexing > 0) {
										player.storage.juexing--;
									} else {
										player.hp--;
									}
									player.storage.jindifentianzhannum++;
									player.storage.jindifentianzhan = [`当前连斩数:${player.storage.jindifentianzhannum || 0}`];
									var num = player.countMark('jindifentianzhan');
									var d = player.maxHp - player.hp;
									player.$fullscreenpop('<font color=yellow>金帝焚天斩:第三斩!</font>');
									player.line(target, 'fire');
									var final = Math.round(num * 2 + d / 3);
									target.damage(final, 'fire');
									if (target.hp > 0) {
										target.loseMaxHp(Math.round(target.maxHp * 0.4));
									}
									if (target.hp == undefined) {
										event.goto(5);
									} else {
										event.goto(5);
									}
								} else {
									event.goto(5);
								}
								('step 5');
								var j = player.countMark('jindifentianzhan');
								player.storage.jindifentianzhannum -= j;
								player.storage.jindifentianzhan = [`当前连斩数:${player.storage.jindifentianzhannum || 0}`];
							},
							contentAfter(player, target) {
								player.removeSkill('wudizhuangtai');
								player.removeSkill('jindifentianzhan');
								player.removeSkill('zhansha');
								game.broadcastAll() + player.node.avatar.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/jxxxe.jpg');
							},
							ai: {
								order: 100,
								result: {
									player(player) {
										if (player.storage.juexing >= 0 || (player.hp <= 2 && player.countCards('h') < 3)) return 1;
									},
								},
							},
						},
						wudizhuangtai: {
							mark: true,
							marktext: "<body><samp id='无'><strong>无</strong></samp></body><style>#无{animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
							intro: {
								name: "<body><samp id='无敌状态'><strong>无敌状态</strong></samp></body><style>#无敌状态{animation:change 10s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
								content: '该角色免疫伤害,免疫体力流失,不会死亡.',
							},
							init(player) {
								player.storage.wudizhuangtai;
							},
							trigger: {
								player: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore', 'dieBegin'],
							},
							forced: true,
							content() {
								trigger.cancel();
							},
							group: ['wudizhuangtai_death'],
							subSkill: {
								death: {
									init(player) {
										player.storage.jindifentianzhan_death = 0;
									},
								},
							},
						},
						zhansha: {
							trigger: {
								source: 'dieBegin',
							},
							forced: true,
							charlotte: true,
							superCharlotte: true,
							_priority: null,
							content() {
								player.maxHp++;
								player.hp++;
							},
						},
						yyscaoren: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							mark: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/caoren.jpg>`,
							intro: {
								name: '草人',
								content: '出牌阶段限一次,若场上没有<草人>,则你可弃置两张牌,放置一个存在3回合的草人(可能替换场上原本存在的召唤物),并选择一个目标,其生命与草人链接,你失去此技能.草人的身份默认为非己方阵营,且不可回血,不可摸牌,手牌上限始终为0,与其他角色的距离始终为3,草人死亡/链接目标死亡时,你重新获得该技能,若当前是你的回合,则立即结束回合.',
							},
							init(player) {
								player.storage.yyscaoren;
								player.markSkill('yyscaoren');
							},
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return game.players.length > 1 && player.bluefire - player.bluefireused >= 2;
							},
							filterTarget(event, player, target) {
								return player.getEnemies().includes(target) && target != player && target.yysCanAddFellow();
							},
							content() {
								'step 0';
								game.consumeBF(player, 2);
								player.removeSkill('yyscaoren');
								var fellow = target.yysAddFellow('qxq_yyscaoren', 3);
								fellow.setIdentity('傀儡');
								if (get.mode() == 'identity' && this.group && this.name.includes('qxq_yys')) {
									if (this.identity == 'zhu' || this.identity == 'zhong') {
										fellow.style.left = 'calc(50% + 10px)';
										fellow.style.top = 'calc(50% + 30px)';
										fellow.identity = 'zhong';
										fellow.setIdentity('忠');
										fellow.identityShown = true;
									}
									if (this.identity == 'fan') {
										fellow.style.left = 'calc(30% + 10px)';
										fellow.style.top = 'calc(50% + 30px)';
										fellow.identity = 'fan';
										fellow.setIdentity('反');
										fellow.identityShown = true;
									}
									if (this.identity == 'nei') {
										fellow.style.left = 'calc(40% + 10px)';
										fellow.style.top = 'calc(30% + 30px)';
										fellow.identity = 'nei';
										fellow.setIdentity('内');
										fellow.identityShown = true;
									}
								} else {
									if (game.yysfellows) {
										fellow.style.left = 'calc(50% + 10px)';
										fellow.style.top = 'calc(50% + 30px)';
										fellow.setIdentity('猜');
										fellow.identityShown = false;
									}
								}
								fellow.clearSkills(true);
								fellow.addSkill('dpcqbnmp');
								fellow.addSkill('dpcqbnhx');
								fellow.addSkill('dpcqsiwang');
								fellow.node.identity.dataset.color = fellow.identity;
								if (!target.storage.yyscaoren2) target.storage.yyscaoren2 = [];
								target.storage.yyscaoren2.push(fellow);
								target.addSkill('yyscaoren2');
							},
							ai: {
								order: 10,
								result: {
									player: 1,
									damage: 2,
								},
							},
							fullimage: true,
						},
						yyscaoren2: {
							charlotte: true,
							trigger: {
								global: ['damageBegin'],
							},
							forced: true,
							filter(event, player) {
								if (event.player.isDead() || !player.storage.yyscaoren2 || !player.storage.yyscaoren2.includes(event.player) || event.num <= 0) return false;
								if (event.name == 'damage') return true;
								return player.isDamaged();
							},
							logTarget: 'player',
							content() {
								'step 0';
								var target = trigger.player;
								if (!target.storage.yyscaoren_mark) target.storage.yyscaoren_mark = [];
								target.storage.yyscaoren_mark.add(player);
								target.storage.yyscaoren_mark.sortBySeat();
								target.markSkill('yyscaoren_mark');
								('step 1');
								player[trigger.name](trigger.num, 'nosource');
								trigger.player.line(player, 'yellow');
								game.countPlayer(function (current) {
									if (current.name == 'qxq_yyscaoren') {
										if (current.hp <= 0) {
											current.die();
										}
									}
								});
							},
							onremove(player) {
								if (!player.storage.yyscaoren2) return;
								game.countPlayer(function (current) {
									if (player.storage.yyscaoren2.includes(current) && current.storage.yyscaoren_mark) {
										current.storage.yyscaoren_mark.remove(player);
										if (!current.storage.yyscaoren_mark.length) current.unmarkSkill('yyscaoren_mark');
										else current.markSkill('yyscaoren_mark');
									}
								});
								delete player.storage.yyscaoren2;
							},
							group: ['yyscaoren3'],
						},
						yyscaoren3: {
							trigger: {
								global: 'dieEnd',
							},
							silent: true,
							filter(event, player) {
								return event.player == player || (player.storage.yyscaoren2 && player.storage.yyscaoren2.includes(player));
							},
							content() {
								if (player == trigger.player) lib.skill.yyscaoren2.onremove(player);
								else player.storage.yyscaoren2.remove(event.player);
								game.countPlayer(function (current) {
									if (current.name == 'qxq_yys_cszn' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_cszn')) {
										current.addSkill('yyscaoren');
										game.log(current, '重新获得了一个', player, '!');
									}
								});
							},
							forced: true,
							popup: false,
						},
						yyscaoren_mark: {
							marktext: '链',
							intro: {
								name: '链接',
								content: '当你受到伤害后,$受到等量的伤害',
							},
						},
						dpcqbnhx: {
							trigger: {
								player: 'recoverBegin',
							},
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								trigger.cancel();
							},
							mod: {
								globalTo(from, to, distance) {
									return 3;
								},
							},
						},
						dpcqsiwang: {
							mark: true,
							marktext: '人',
							intro: {
								name: '草人',
								content: '<br><br><b><li>还剩#回合</b>',
							},
							init(player) {
								player.storage.dpcqsiwang = 3;
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							silent: true,
							content() {
								player.storage.dpcqsiwang--;
								if (player.storage.dpcqsiwang <= 0) {
									player.removeSkill('dpcqsiwang');
									game.countPlayer(function (current) {
										if (current != player && (current.name == 'qxq_yys_cszn' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_cszn'))) {
											current.addSkill('yyscaoren');
											game.log(current, '重新获得了一个', player, '!');
										}
									});
									player.hp = 0;
									player.die();
								} else {
								}
							},
							mod: {
								globalTo(from, to, distance) {
									return 3;
								},
								maxHandcard() {
									return 0;
								},
							},
							forced: true,
							popup: false,
							group: ['dpcqsiwang_die'],
							subSkill: {
								die: {
									trigger: {
										player: ['dieBegin'],
									},
									forced: true,
									popup: false,
									silent: true,
									content() {
										'step 0';
										trigger.cancel();
										('step 1');
										player.removeSkill('dpcqsiwang');
										game.countPlayer(function (current) {
											if (current != player && (current.name == 'qxq_yys_cszn' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_cszn'))) {
												current.addSkill('yyscaoren');
												game.log(current, '收回了', player, '!');
											}
										});
									},
								},
							},
						},
						dpcqbnmp: {
							trigger: {
								player: ['phaseDrawBegin', 'gainBegin'],
							},
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								trigger.cancel();
							},
							mod: {
								maxHandcard() {
									return 0;
								},
							},
						},
						zhouhuo: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							mark: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/zhouhuo.jpg>`,
							intro: {
								name: '咒火',
								content: '回合结束,对一名随机敌方增加一个<破甲>标记直至其回合开始,拥有<破甲>标记的角色受到的伤害时令受到的伤害值+1,移除一个标记.',
							},
							init(player) {
								player.storage.zhouhuo = 0;
								player.markSkill('zhouhuo');
							},
							trigger: {
								player: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								var enemies = player.getEnemies();
								if (enemies.length) return true;
							},
							getList(player) {
								var enemies = player.getEnemies();
								return enemies.length;
							},
							content() {
								var targets = player.getEnemies();
								if (targets.length) {
									var target = targets.randomGet();
									player.line(target, 'yellow');
									if (!target.storage.pojia) target.addSkill('pojia');
								}
							},
						},
						pojia: {
							mark: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/DEFx.jpg>`,
							intro: {
								name: '破甲',
								content: '该角色已破甲,下一次受到的伤害+1,受到伤害或该角色回合开始时移除此标记.',
							},
							init(player) {
								player.storage.pojia = 1;
								player.markSkill('pojia');
							},
							trigger: {
								player: ['phaseZhunbeiBegin', 'damageBefore'],
							},
							silent: true,
							content() {
								'step 0';
								if (trigger.name == 'damage') {
									trigger.num++;
									event.goto(1);
								} else {
									event.goto(1);
								}
								('step 1');
								player.storage.pojia--;
								if (player.storage.pojia <= 0) {
									player.removeSkill('pojia');
								} else {
								}
							},
							forced: true,
							popup: false,
						},
						feixiangdi: {
							trigger: {
								player: 'phaseDrawBegin',
							},
							usable: 1,
							mod: {
								maxHandcard(player, num) {
									return num++;
								},
							},
							filter(event, player) {
								return player.countCards('h') > 0 && player.storage.douqi > 50;
							},
							content() {
								if (Math.random() <= 0.1) trigger.num++;
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										return player.hp - 0;
									},
								},
							},
						},
						feixianggao: {
							trigger: {
								player: 'phaseDrawBegin',
							},
							usable: 1,
							mod: {
								maxHandcard(player, num) {
									return num + 2;
								},
							},
							filter(event, player) {
								return player.countCards('h') > 0 && player.storage.douqi > 50;
							},
							content() {
								if (Math.random() <= 0.15) trigger.num++;
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										return player.hp - 0;
									},
								},
							},
						},
						xyxqcdj: {
							trigger: {
								player: 'loseBegin',
							},
							filter(event, player, card) {
								if (event.cards) {
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											return i.name == 'du';
										}
								}
							},
							silent: true,
							forced: true,
							content() {
								var list = [];
								if (Array.isArray(trigger.cards))
									for (var i of trigger.cards) {
										if (i.name == 'du') {
											list.push(game.createCard('du', i.suit, i.number));
										}
									}
								player.lose(list, ui.special, 'toStorage')._triggered = null;
								player.$give(list, player);
								if (!player.storage.enan) player.storage.enan = [];
								player.storage.enan.addArray(list);
								player.markSkill('enan');
								player.addTempSkill('xyxqcdj_cancel', { player: 'duBegin' });
							},
							forced: true,
							group: ['xyxqcdj_get'],
							subSkill: {
								get: {
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									filter(event, player) {
										return player.hasSkill('xyxqcdj') && player.countCards('h') < player.hp;
									},
									content() {
										'step 0';
										var list = [];
										var carddu = game.createCard2('du');
										list.push(carddu);
										player.lose(list, ui.special, 'toStorage');
										player.$give(list, player);
										if (!player.storage.enan) player.storage.enan = [];
										player.storage.enan.addArray(list);
										player.markSkill('enan');
									},
								},
								cancel: {
									trigger: {
										player: 'loseHpBefore',
									},
									silent: true,
									forced: true,
									content() {
										player.draw(trigger.num);
										trigger.changeToZero();
									},
									popup: false,
								},
							},
							popup: false,
						},
						yishi: {
							trigger: {
								global: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && player.inRange(event.player) && event.player.countCards('h', { name: 'du' }) > 0;
							},
							content() {
								'step 0';
								trigger.player
									.chooseControl('手牌区', '<厄>标记', '否')
									.set('prompt', '小医仙:【医师】')
									.set('prompt2', '是否将手中的所有非转化的<毒>置于【小医仙】的手牌区或<厄>中？(若如此做,且你体力值少于体力上限的一半时,你回复一点体力.)')
									.set('ai', function (event) {
										if (get.attitude(player, trigger.player) > 0) return '<厄>标记';
										if (get.attitude(player, trigger.player) <= 0 && trigger.player.countCards('h', { name: 'du' }) >= trigger.player.hp / 2 && player.hasSkill('duti')) return '手牌区';
										if (get.attitude(player, trigger.player) <= 0 && trigger.player.countCards('h', { name: 'du' }) >= trigger.player.hp / 2 && !player.hasSkill('duti')) return '<厄>标记';
										if (get.attitude(player, trigger.player) <= 0 && trigger.player.countCards('h', { name: 'du' }) < trigger.player.hp / 2) return '否';
									});
								('step 1');
								if (result.control == '手牌区') {
									var list = [];
									var hs = trigger.player.getCards('h');
									for (var i = 0; i < hs.length; i++) {
										if (!hs[i].hasGaintag('毒') && hs[i].name == 'du') {
											list.push(hs[i]);
										}
									}
									player.gain(list, 'gain2', 'log');
									if (trigger.player.hp < trigger.maxHp / 2) {
										trigger.player.recover();
									}
								}
								if (result.control == '<厄>标记') {
									var list = [];
									var hs = trigger.player.getCards('h');
									for (var i = 0; i < hs.length; i++) {
										if (!hs[i].hasGaintag('毒') && hs[i].name == 'du') {
											list.push(hs[i]);
										}
									}
									player.lose(list, ui.special, 'toStorage');
									player.$give(list, player);
									if (!player.storage.enan) player.storage.enan = [];
									player.storage.enan.addArray(list);
									player.markSkill('enan');
									if (trigger.player.hp < trigger.maxHp / 2) {
										trigger.player.recover();
									}
								}
								if (result.control == '否') {
									event.finish();
								}
							},
						},
						enan: {
							marktext: '厄',
							intro: {
								content: 'cards',
							},
							init(player) {
								player.storage.enan = [];
							},
							trigger: {
								global: 'gameStart',
								player: 'enterGame',
							},
							forced: true,
							filter(event, player) {
								return player.hasSkill('enan');
							},
							content() {
								'step 0';
								var list = [];
								var num = game.players.length;
								for (var i = 0; i < num; i++) {
									var carddu = game.createCard2('du');
									list.push(carddu);
								}
								player.lose(list, ui.special, 'toStorage');
								player.$give(list, player);
								if (!player.storage.enan) player.storage.enan = [];
								player.storage.enan.addArray(list);
								player.markSkill('enan');
							},
							group: ['enan_add', 'enan_addtion', 'enan_die'],
							subSkill: {
								add: {
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										return event.card && event.card.name == 'du';
									},
									content() {
										player.turnOver(true);
										player.loseMaxHp();
										for (var i = 0; i < game.players.length / 2; i++) {
											var carddu = game.createCard2('du');
											player.gain(carddu);
										}
										player.addSkill('duti');
										player.removeSkill('enan_add');
										player.removeSkill('enan_addtion');
										if (_status.currentPhase.name == player.name) {
											var evt = _status.event.getParent('phaseUse');
											if (evt && evt.name == 'phaseUse') {
												evt.skipped = true;
											}
											var evt = _status.event.getParent('phaseUse');
											if (evt && evt.name == 'phaseUse') {
												evt.finish();
											}
										}
									},
									forced: true,
								},
								addtion: {
									trigger: {
										player: 'phaseDiscardAfter',
									},
									filter(event, player) {
										if (event.player == player && event.player.isIn()) {
											return event.player.getHistory('lose', function (evt) {
												var list = evt.hs.filterInD('d');
												for (var i = 0; i < list.length; i++) {
													if (list[i].name == 'du') return evt.type == 'discard' && evt.getParent('phaseDiscard') == event;
												}
											}).length;
										}
										return false;
									},
									content() {
										player.turnOver(true);
										player.loseMaxHp();
										for (var i = 0; i < game.players.length / 2; i++) {
											var carddu = game.createCard2('du');
											player.gain(carddu);
										}
										player.addSkill('duti');
										player.removeSkill('enan_add');
										player.removeSkill('enan_addtion');
										if (_status.currentPhase.name == player.name) {
											var evt = _status.event.getParent('phaseUse');
											if (evt && evt.name == 'phaseUse') {
												evt.skipped = true;
											}
											var evt = _status.event.getParent('phaseUse');
											if (evt && evt.name == 'phaseUse') {
												evt.finish();
											}
										}
									},
									forced: true,
								},
								die: {
									trigger: {
										player: 'dieBegin',
									},
									forced: true,
									filter(event, player) {
										return player.hasSkill('duti');
									},
									content() {
										for (var i of game.players) {
											if (i != player) {
												var hs = i.getCards('h');
												var list = [];
												for (var b = 0; b < hs.length; b++) {
													if (hs[b].name == 'du') {
														list.push(hs[b]);
													}
												}
												i.discard(list, true);
											}
										}
									},
								},
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
						},
						duti: {
							mark: true,
							unseen: true,
							marktext: '体',
							intro: {
								name: '厄难毒体',
								content: '已激活厄难毒体.',
							},
							init(player) {
								player.removeSkill('yishi');
								player.addSkill('dpcqdushi');
								player.addSkill('xyxqcdj');
							},
						},
						dpcqdushi: {
							mark: true,
							unseen: false,
							intro: {
								name: '毒',
								mark(dialog, storage, player) {
									dialog.addText('已标记的目标');
									if (!player.storage.dpcqdushi || !player.storage.dpcqdushi.length) {
										dialog.addText('无');
									} else {
										for (var i = 0; i < player.storage.dpcqdushi.length; i++) {
											var hs = player.storage.dpcqdushi[i].getCards('hej');
											var list = [];
											for (var b = 0; b < hs.length; b++) {
												if (hs[b].hasGaintag('毒')) {
													list.push(hs[b]);
												}
											}
											if (list.length == 0) {
												player.storage.dpcqdushi.remove(player.storage.dpcqdushi[i]);
											}
										}
										for (var i = 0; i < player.storage.dpcqdushi.length; i++) {
											var name = player.storage.dpcqdushi[i].name;
											var n = lib.translate[player.storage.dpcqdushi[i].name];
											dialog.addText(n);
											dialog.addSmall([[name], 'character']);
										}
										if (player == game.me || player.isUnderControl()) {
											dialog.addText('标记为【毒】的牌');
											var sum = 0;
											for (var i = 0; i < player.storage.dpcqdushi.length; i++) {
												var hs = player.storage.dpcqdushi[i].getCards('hej');
												var list = [];
												for (var b = 0; b < hs.length; b++) {
													if (hs[b].hasGaintag('毒')) {
														sum++;
														dialog.addSmall([[hs[b].name], 'vcard']);
														list.push(hs[b]);
													}
												}
												if (list.length == 0) {
													player.storage.dpcqdushi.remove(player.storage.dpcqdushi[i]);
												}
												if (sum == 0) {
													dialog.addText('无');
												}
											}
										}
									}
								},
							},
							init(player) {
								player.storage.dpcqdushi = [];
							},
							onremove(player) {
								delete player.storage.dpcqdushi;
							},
							trigger: {
								player: 'damageBefore',
								source: 'damageBefore',
							},
							filter(event, player) {
								if (event.source == undefined) return false;
								if (event.source != player && event.source.countCards('h') == 0) return false;
								if (event.source == player && event.player.countCards('h') == 0) return false;
								if (!player.storage.enan || player.storage.enan.length == 0) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h') > 0;
								});
							},
							content() {
								'step 0';
								player.markSkill('dpcqdushi');
								('step 1');
								player.chooseButton(['选择要使用的牌', player.storage.enan], true).set('ai', function (button) {
									if (trigger.source != player) {
										var player = _status.event.parent.player;
										var val = player.getUseValue(card);
									} else {
										var source = _status.event.parent.source;
										var val = source.getUseValue(card);
									}
									var card = button.link;
									if (val > 0) return val;
									return get.value(card);
								});
								('step 2');
								if (result.bool) {
									player.storage.enan.remove(result.links[0]);
								}
								('step 3');
								if (trigger.source != player) {
									var list = trigger.source.getCards('h');
								} else {
									var list = trigger.player.getCards('h');
								}
								for (var i = 0; i < list.length; i++) {
									if (list[i].hasGaintag('毒')) {
										list.remove(list[i]);
									}
								}
								player.chooseButton(['选择一张牌将其替换为「毒」', list], true).set('ai', function (button) {
									if (trigger.source != player) {
										var target = trigger.source;
									} else {
										var target = trigger.player;
									}
									var card = button.link;
									var val = target.getUseValue(card);
									if (val > 0) return val;
									return get.value(card);
								});
								('step 4');
								if (result.bool) {
									if (!player.storage.dpcqdushi) player.storage.dpcqdushi = [];
									if (trigger.source != player) {
										if (!player.storage.dpcqdushi.includes(trigger.source)) {
											player.storage.dpcqdushi.push(trigger.source);
										}
										trigger.source.gain(result.links[0], 'gain2', 'hidden').gaintag.add('毒')._triggered = null;
										game.log(trigger.source, '的', result.links[0], '被替换为毒!');
										trigger.source.addSkill('dpcqdushi_replace');
									} else {
										if (!player.storage.dpcqdushi.includes(trigger.player)) {
											player.storage.dpcqdushi.push(trigger.player);
										}
										trigger.player.gain(result.links[0], 'gain2', 'hidden').gaintag.add('毒')._triggered = null;
										game.log(trigger.player, '的', result.links[0], '被替换为毒!');
										trigger.player.addSkill('dpcqdushi_replace');
									}
								}
							},
							ai: {
								order: 12,
								result: {
									target: -1,
								},
							},
							subSkill: {
								replace: {
									trigger: {
										player: ['loseBefore'],
									},
									filter(event, player) {
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												return i.hasGaintag('毒');
											}
									},
									forced: true,
									silent: true,
									content() {
										var num = 0;
										if (Array.isArray(trigger.cards))
											for (var i of trigger.cards) {
												if (i.hasGaintag('毒')) {
													num++;
												}
											}
										if (num > 0) player.loseHp(num);
									},
									onremove(player) {
										var hs = player.getCards('hej');
										var num = 0;
										for (var i = 0; i < hs.length; i++) {
											if (hs[i].hasGaintag('毒')) {
												num++;
											}
										}
										if (num > 0) {
											player.addSkill('dpcqdushi_replace');
										}
									},
									charlotte: true,
									mod: {
										cardname(card, player, name) {
											if (get.itemtype(card) == 'card' && card.hasGaintag('毒')) return 'du';
										},
									},
									popup: false,
								},
							},
						},
						ziyang: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							init(player) {
								player.storage.ziyang;
							},
							mark: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/ziyang.jpg>`,
							intro: {
								name: '滋养',
								content: '出牌阶段限一次,你可以弃置两张牌发动此技能,若此时晴天娃娃存在,则存储日和坊生命上限25%的日光能量,若此时晴天娃娃已牺牲,则令其重生回合数-1.',
							},
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.bluefire - player.bluefireused >= 2;
							},
							logTarget: 'player',
							check() {
								return true;
							},
							content() {
								game.consumeBF(player, 2);
								if (player.hasSkill('yysqingyu')) {
									var X = player.maxHp / 4;
									var x = Math.round(X);
									player.storage.yysqingyu += x;
								} else {
									player.storage.ziyang_qtww--;
								}
							},
							ai: {
								save: true,
								order() {
									return get.order({ name: 'tao' }) - 1;
								},
								expose: 0,
								threaten: 0.5,
								result: {
									player(player) {
										if (player.bluefire - player.bluefireused >= 3) return 1;
									},
								},
							},
							subSkill: {
								qtww: {
									init(player) {
										player.storage.ziyang_qtww = 0;
									},
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yysqingyu.jpg>`,
									intro: {
										name: '晴天娃娃',
										content: '<br><br><b><li>距晴天娃娃复活还剩#回合</b>',
									},
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									content() {
										'step 0';
										player.storage.ziyang_qtww--;
										('step 1');
										if (player.storage.ziyang_qtww <= 0) {
											player.removeSkill('ziyang_qtww');
											player.addSkill('yysqingyu');
										} else {
										}
									},
									forced: true,
								},
							},
						},
						yysqingyu: {
							audio: 'ext:斗破苍穹X阴阳师/audio:3',
							mark: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yysqingyu.jpg>`,
							intro: {
								name: '晴天娃娃',
								content: '自己和友方角色造成伤害时,或受到治疗时,有25%的概率存储等同于伤害值/治疗值的日光能量,存储上限等同于日和坊的生命上限的两倍;敌方回合结束时,日和坊将消耗存储的日光能量,优先为已损体力值最大的自己或友方角色回复已损体力值30%的体力,非己友方角色阵亡时,日和坊将牺牲晴天娃娃并为其治疗100%的生命,若日光能量不足则消耗所有日光能量,若治疗后仍有剩余的日光能量,则其50%用于治疗所有自己友方,晴天娃娃消失,且其重生需四回合.<br><br><b><li>当前日光能量:#点</b>',
							},
							init(player) {
								player.storage.yysqingyu = 0;
								player.markSkill('yysqingyu');
							},
							trigger: {
								global: ['recoverEnd'],
							},
							forced: true,
							filter(event, player) {
								return player.getFriends().includes(event.player) || event.player == player;
							},
							content() {
								var x = trigger.num;
								if (Math.random() <= 0.25) {
									if (player.storage.yysqingyu < 2 * player.maxHp) {
										player.storage.yysqingyu += x;
										var a = player.countMark('yysqingyu');
										player.storage.yysqingyu = Math.min(a, 2 * player.maxHp);
									}
								}
							},
							group: ['yysqingyu_damage', 'yysqingyu_recover'],
							subSkill: {
								damage: {
									trigger: {
										global: ['damageEnd'],
									},
									forced: true,
									filter(event, player) {
										return player.getFriends().includes(event.source) || event.source == player;
									},
									content() {
										var x = trigger.num;
										if (Math.random() <= 0.25) {
											if (player.storage.yysqingyu < 2 * player.maxHp) {
												player.storage.yysqingyu += x;
												var a = player.countMark('yysqingyu');
												player.storage.yysqingyu = Math.min(a, 2 * player.maxHp);
											}
										}
									},
								},
								recover: {
									trigger: {
										global: ['phaseEnd'],
									},
									forced: true,
									filter(event, player) {
										return player.getEnemies().includes(event.player) && event.player != player;
									},
									content() {
										'step 0';
										if (player.storage.yysqingyu == 5) {
											event.finish();
										}
										('step 1');
										var friend = [];
										var pl = [];
										pl.push(player);
										var friend = player.getFriends();
										var H = 0;
										for (var i = 0; i < friend.length; i++) {
											if (friend[i].maxHp - friend[i].hp > pl[0].maxHp - pl[0].hp) {
												H = friend[i].maxHp - friend[i].hp;
												pl.remove(pl[0]);
												pl.push(friend[i]);
											}
										}
										if (pl.length) {
											var M = pl[0].maxHp;
											var N = pl[0].hp;
											var MN = (M - N) * 0.3;
											var X = Math.round(MN);
											var S = player.countMark('yysqingyu');
											var R = Math.min(S, X);
											pl[0].recover(R);
											if (R >= 1) {
												game.log(pl[0], '得到了来自晴天娃娃的阳光能量,回复了', R, '点体力!');
											} else {
												game.log('没有可治疗的重伤武将!');
											}
											player.storage.yysqingyu -= R;
										}
									},
								},
								revive: {
									trigger: {
										global: ['dieBegin'],
									},
									forced: true,
									filter(event, player) {
										return player.getFriends().includes(event.player) && event.player != player;
									},
									content() {
										'step 0';
										trigger.cancel();
										var M = trigger.player.maxHp;
										var N = trigger.player.hp;
										var MN = M - N;
										var X = player.countMark('yysqingyu');
										var R = Math.min(MN, X);
										trigger.player.recover(R);
										player.storage.yysqingyu -= R;
										game.log(player, '牺牲了晴天娃娃,治疗了', trigger.player);
										('step 1');
										if (player.countMark('yysqingyu') > 0) {
											var A = player.countMark('yysqingyu');
											var B = Math.round(A / 2);
											var friend = player.getFriends();
											game.countPlayer(function (current) {
												if (current.name == 'qxq_yys_rihefang' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_rihefang')) {
													friend.push(current);
												}
											});
											for (var i = 0; i < friend.length; i++) {
												friend[i].recover(B);
											}
											player.storage.yysqingyu -= A;
											player.removeSkill('yysqingyu');
											player.addSkill('ziyang_qtww');
											player.storage.ziyang_qtww += 4;
										} else {
											player.removeSkill('yysqingyu');
											player.addSkill('ziyang_qtww');
											player.storage.ziyang_qtww += 4;
											event.finish();
										}
									},
								},
							},
						},
						fshy: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/fshy.jpg>`,
							intro: {
								name: '绯色花月',
								content: '若场上非己友方数大于1,则友方角色回合开始前,赠予其四种随机缘结之一,若其获得的缘结与上一个行动的其他友方相同,则结缘成功,立即获得一张牌,同时缘结神获得一层<缘>(上限7层),若不相同,则结缘失败,缘结神获得一层<生气了>,<生气了>累积五层时,友方下次结缘必定成功,该标记被清空.',
							},
							init(player) {
								player.storage.fshy;
								player.markSkill('fshy');
							},
							group: ['fshy_jieyuan', 'fshy_remove', 'fshy_compare'],
							subSkill: {
								jieyuan: {
									trigger: {
										global: 'phaseZhunbeiBefore',
									},
									forced: true,
									filter(event, player) {
										return player.getFriends().length > 1 && player.getFriends().includes(event.player) && event.player != player;
									},
									content() {
										'step 0';
										var list1 = [];
										game.countPlayer(function (current) {
											if (current.hasSkill('fshy')) {
												list1.push(current);
											}
										});
										if (list1[0].storage.fshy_shengqile >= 5) {
											event.goto(1);
										} else {
											event.goto(2);
										}
										('step 1');
										var list = [];
										list.push(trigger.player);
										var list1 = [];
										game.countPlayer(function (current) {
											if (current.hasSkill('fshy')) {
												list1.push(current);
											}
										});
										var friend = list1[0].getFriends();
										for (var i = 0; i < friend.length; i++) {
											if (friend[i] == trigger.player) {
												var f = i;
											}
										}
										if (f == 0) {
											var friend = list1[0].getFriends();
											var a = friend.length - 1;
											list.push(friend[a]);
										} else {
											var friend = list1[0].getFriends();
											var a = f - 1;
											list.push(friend[a]);
										}
										if (list[1].hasSkill('fshy_jieyuanA')) {
											list[0].addSkill('fshy_jieyuanA');
											list[0].storage.fshy_jieyuanA += 2;
											list1[0].storage.fshy_shengqile = 0;
											list1[0].removeSkill('fshy_shengqile');
										}
										if (list[1].hasSkill('fshy_jieyuanB')) {
											list[0].addSkill('fshy_jieyuanB');
											list[0].storage.fshy_jieyuanB += 2;
											list1[0].storage.fshy_shengqile = 0;
											list1[0].removeSkill('fshy_shengqile');
										}
										if (list[1].hasSkill('fshy_jieyuanC')) {
											list[0].addSkill('fshy_jieyuanC');
											list[0].storage.fshy_jieyuanC += 2;
											list1[0].storage.fshy_shengqile = 0;
											list1[0].removeSkill('fshy_shengqile');
										}
										if (list[1].hasSkill('fshy_jieyuanD')) {
											list[0].addSkill('fshy_jieyuanD');
											list[0].storage.fshy_jieyuanD += 2;
											list1[0].storage.fshy_shengqile = 0;
											list1[0].removeSkill('fshy_shengqile');
										}
										event.finish();
										('step 2');
										var list = [];
										list.push(trigger.player);
										var yj = ['yuanjieA', 'yuanjieB', 'yuanjieC', 'yuanjieD'].randomGet();
										if (yj == 'yuanjieA') {
											list[0].addSkill('fshy_jieyuanA');
											list[0].storage.fshy_jieyuanA += 2;
										}
										if (yj == 'yuanjieB') {
											list[0].addSkill('fshy_jieyuanB');
											list[0].storage.fshy_jieyuanB += 2;
										}
										if (yj == 'yuanjieC') {
											list[0].addSkill('fshy_jieyuanC');
											list[0].storage.fshy_jieyuanC += 2;
										}
										if (yj == 'yuanjieD') {
											list[0].addSkill('fshy_jieyuanD');
											list[0].storage.fshy_jieyuanD += 2;
										}
									},
								},
								yuan: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yuan.jpg>`,
									intro: {
										name: '缘',
										content: '<br><br><b><li>当前层数:#</b>',
									},
									init(player) {
										player.storage.fshy_yuan = 0;
										player.markSkill('fshy_yuan');
									},
								},
								shengqile: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/shengqile.jpg>`,
									intro: {
										name: '生气了',
										content: '达到五层时,下一次结缘必定成功.<br><br><b><li>当前层数:#</b>',
									},
									init(player) {
										player.storage.fshy_shengqile = 0;
										player.markSkill('fshy_shengqile');
									},
								},
								jieyuanA: {
									mark: true,
									marktext: '缘',
									intro: {
										name: '缘结',
										content: '缘结种类:红+红',
									},
									init(player) {
										player.storage.fshy_jieyuanA = 0;
										player.markSkill('fshy_jieyuanA');
									},
								},
								jieyuanB: {
									mark: true,
									marktext: '缘',
									intro: {
										name: '缘结',
										content: '缘结种类:红+白',
									},
									init(player) {
										player.storage.fshy_jieyuanB = 0;
										player.markSkill('fshy_jieyuanB');
									},
								},
								jieyuanC: {
									mark: true,
									marktext: '缘',
									intro: {
										name: '缘结',
										content: '缘结种类:白+红',
									},
									init(player) {
										player.storage.fshy_jieyuanC = 0;
										player.markSkill('fshy_jieyuanC');
									},
								},
								jieyuanD: {
									mark: true,
									marktext: '缘',
									intro: {
										name: '缘结',
										content: '缘结种类:白+白',
									},
									init(player) {
										player.storage.fshy_jieyuanD = 0;
										player.markSkill('fshy_jieyuanD');
									},
								},
								remove: {
									trigger: {
										global: ['phaseEnd'],
									},
									forced: true,
									filter(event, player) {
										return player.getFriends().length > 1 && player.getFriends().includes(event.player) && event.player != player;
									},
									content() {
										var friend = player.getFriends();
										for (var i = 0; i < friend.length; i++) {
											if (friend[i].hasSkill('fshy_jieyuanA')) {
												friend[i].storage.fshy_jieyuanA--;
												if (friend[i].storage.fshy_jieyuanA == 0) {
													friend[i].removeSkill('fshy_jieyuanA');
												}
											}
											if (friend[i].hasSkill('fshy_jieyuanB')) {
												friend[i].storage.fshy_jieyuanB--;
												if (friend[i].storage.fshy_jieyuanB == 0) {
													friend[i].removeSkill('fshy_jieyuanB');
												}
											}
											if (friend[i].hasSkill('fshy_jieyuanC')) {
												friend[i].storage.fshy_jieyuanC--;
												if (friend[i].storage.fshy_jieyuanC == 0) {
													friend[i].removeSkill('fshy_jieyuanC');
												}
											}
											if (friend[i].hasSkill('fshy_jieyuanD')) {
												friend[i].storage.fshy_jieyuanD--;
												if (friend[i].storage.fshy_jieyuanD == 0) {
													friend[i].removeSkill('fshy_jieyuanD');
												}
											}
										}
									},
								},
								compare: {
									trigger: {
										global: ['phaseZhunbeiBegin'],
									},
									forced: true,
									filter(event, player) {
										return player.getFriends().length > 1 && player.getFriends().includes(event.player) && event.player != player;
									},
									content() {
										'step 0';
										var listpl = [];
										var listf = [];
										game.countPlayer(function (current) {
											if (current.hasSkill('fshy')) {
												listpl.push(current);
											}
										});
										var friend = listpl[0].getFriends();
										for (var i = 0; i < friend.length; i++) {
											if (friend[i].hasSkill('fshy_jieyuanA')) {
												listf.push(friend[i]);
											}
											if (friend[i].hasSkill('fshy_jieyuanB')) {
												listf.push(friend[i]);
											}
											if (friend[i].hasSkill('fshy_jieyuanC')) {
												listf.push(friend[i]);
											}
											if (friend[i].hasSkill('fshy_jieyuanD')) {
												listf.push(friend[i]);
											}
										}
										if (listf.length > 1) {
											event.goto(1);
										} else {
											event.goto(9);
										}
										('step 1');
										if (Math.random() <= 1 && trigger.player.hasSkill('fshy_jieyuanA')) {
											event.goto(5);
										} else {
											event.goto(2);
										}
										('step 2');
										if (Math.random() <= 1 && trigger.player.hasSkill('fshy_jieyuanB')) {
											event.goto(6);
										} else {
											event.goto(3);
										}
										('step 3');
										if (Math.random() <= 1 && trigger.player.hasSkill('fshy_jieyuanC')) {
											event.goto(7);
										} else {
											event.goto(4);
										}
										('step 4');
										if (Math.random() <= 1 && trigger.player.hasSkill('fshy_jieyuanD')) {
											event.goto(8);
										} else {
											event.finish();
										}
										('step 5');
										var list = [];
										list.push(trigger.player);
										game.countPlayer(function (current) {
											if (current != trigger.player && current.countMark('fshy_jieyuanA') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanB') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanC') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanD') > 0) {
												list.push(current);
											}
										});
										if (list.length >= 2) {
											if (list[0].hasSkill('fshy_jieyuanA') && list[1].hasSkill('fshy_jieyuanA')) {
												game.log('恭喜', list[0], '和', list[1], '结缘成功!');
												list[0].draw();
												game.countPlayer(function (current) {
													if (current.name == 'qxq_yys_yuanjieshen' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_yuanjieshen')) {
														if (!current.hasSkill('fshy_yuan')) {
															current.addSkill('fshy_yuan');
															current.storage.fshy_yuan++;
															game.log(current, '获得了一个<缘>!');
														} else {
															if (current.countMark('fshy_yuan') < 7) {
																current.storage.fshy_yuan++;
															} else {
																current.storage.fshy_yuan = 7;
															}
														}
													}
												});
											} else {
												game.countPlayer(function (current) {
													if (current.name == 'qxq_yys_yuanjieshen' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_yuanjieshen')) {
														if (!current.hasSkill('fshy_shengqile')) {
															current.addSkill('fshy_shengqile');
															current.storage.fshy_shengqile++;
															game.log(list[0], '和', list[1], '结缘失败!', current, '生气了,后果很严重!');
														} else {
															current.storage.fshy_shengqile++;
															game.log(list[0], '和', list[1], '结缘失败!', current, '生气了,后果很严重!');
														}
													}
												});
											}
										}
										event.finish();
										('step 6');
										var list = [];
										list.push(trigger.player);
										game.countPlayer(function (current) {
											if (current != trigger.player && current.countMark('fshy_jieyuanA') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanB') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanC') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanD') > 0) {
												list.push(current);
											}
										});
										if (list.length >= 2) {
											if (list[0].hasSkill('fshy_jieyuanB') && list[1].hasSkill('fshy_jieyuanB')) {
												game.log('恭喜', list[0], '和', list[1], '结缘成功!');
												list[0].draw();
												game.countPlayer(function (current) {
													if (current.name == 'qxq_yys_yuanjieshen' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_yuanjieshen')) {
														if (!current.hasSkill('fshy_yuan')) {
															current.addSkill('fshy_yuan');
															current.storage.fshy_yuan++;
															game.log(current, '获得了一个<缘>!');
														} else {
															if (current.countMark('fshy_yuan') < 7) {
																current.storage.fshy_yuan++;
															} else {
																current.storage.fshy_yuan = 7;
															}
														}
													}
												});
											} else {
												game.countPlayer(function (current) {
													if (current.name == 'qxq_yys_yuanjieshen' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_yuanjieshen')) {
														if (!current.hasSkill('fshy_shengqile')) {
															current.addSkill('fshy_shengqile');
															current.storage.fshy_shengqile++;
															game.log(list[0], '和', list[1], '结缘失败!', current, '生气了,后果很严重!');
														} else {
															current.storage.fshy_shengqile++;
															game.log(list[0], '和', list[1], '结缘失败!', current, '生气了,后果很严重!');
														}
													}
												});
											}
										}
										event.finish();
										('step 7');
										var list = [];
										list.push(trigger.player);
										game.countPlayer(function (current) {
											if (current != trigger.player && current.countMark('fshy_jieyuanA') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanB') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanC') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanD') > 0) {
												list.push(current);
											}
										});
										if (list.length >= 2) {
											if (list[0].hasSkill('fshy_jieyuanC') && list[1].hasSkill('fshy_jieyuanC')) {
												game.log('恭喜', list[0], '和', list[1], '结缘成功!');
												list[0].draw();
												game.countPlayer(function (current) {
													if (current.name == 'qxq_yys_yuanjieshen' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_yuanjieshen')) {
														if (!current.hasSkill('fshy_yuan')) {
															current.addSkill('fshy_yuan');
															current.storage.fshy_yuan++;
															game.log(current, '获得了一个<缘>!');
														} else {
															if (current.countMark('fshy_yuan') < 7) {
																current.storage.fshy_yuan++;
															} else {
																current.storage.fshy_yuan = 7;
															}
														}
													}
												});
											} else {
												game.countPlayer(function (current) {
													if (current.name == 'qxq_yys_yuanjieshen' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_yuanjieshen')) {
														if (!current.hasSkill('fshy_shengqile')) {
															current.addSkill('fshy_shengqile');
															current.storage.fshy_shengqile++;
															game.log(list[0], '和', list[1], '结缘失败!', current, '生气了,后果很严重!');
														} else {
															current.storage.fshy_shengqile++;
															game.log(list[0], '和', list[1], '结缘失败!', current, '生气了,后果很严重!');
														}
													}
												});
											}
										}
										event.goto(8);
										('step 8');
										var list = [];
										list.push(trigger.player);
										game.countPlayer(function (current) {
											if (current != trigger.player && current.countMark('fshy_jieyuanA') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanB') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanC') > 0) {
												list.push(current);
											}
											if (current != trigger.player && current.countMark('fshy_jieyuanD') > 0) {
												list.push(current);
											}
										});
										if (list.length >= 2) {
											if (list[0].hasSkill('fshy_jieyuanD') && list[1].hasSkill('fshy_jieyuanD')) {
												game.log('恭喜', list[0], '和', list[1], '结缘成功!');
												list[0].draw();
												game.countPlayer(function (current) {
													if (current.name == 'qxq_yys_yuanjieshen' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_yuanjieshen')) {
														if (!current.hasSkill('fshy_yuan')) {
															current.addSkill('fshy_yuan');
															current.storage.fshy_yuan++;
															game.log(current, '获得了一个<缘>!');
														} else {
															if (current.countMark('fshy_yuan') < 7) {
																current.storage.fshy_yuan++;
															} else {
																current.storage.fshy_yuan = 7;
															}
														}
													}
												});
											} else {
												game.countPlayer(function (current) {
													if (current.name == 'qxq_yys_yuanjieshen' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_yuanjieshen')) {
														if (!current.hasSkill('fshy_shengqile')) {
															current.addSkill('fshy_shengqile');
															current.storage.fshy_shengqile++;
															game.log(list[0], '和', list[1], '结缘失败!', current, '生气了,后果很严重!');
														} else {
															current.storage.fshy_shengqile++;
															game.log(list[0], '和', list[1], '结缘失败!', current, '生气了,后果很严重!');
														}
													}
												});
											}
										}
										event.finish();
										('step 9');
										event.finish();
									},
								},
							},
						},
						scly: {
							audio: 'ext:斗破苍穹X阴阳师/audio:3',
							mark: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/scly.jpg>`,
							intro: {
								name: '神赐良缘',
								content: '游戏开始时,你获得<庇护>直到你的回合开始.出牌阶段,你可以弃置三张红色牌并祝福一个友方目标,使其获得庇护,并有(30%+缘层数*10%)概率使全体友方回复一点体力.若拥有至少一层缘,则治疗的溢出部分30%概率转化为护甲;若至少拥有三层缘,则使全体友方获得20%概率的增伤,持续一回合;若至少拥有五层缘,则祝福时令自身获得庇护;若拥有七层缘,则祝福友方时令其获得<再续前缘>.',
							},
							init(player) {
								player.storage.scly;
								player.markSkill('scly');
							},
							enable: 'phaseUse',
							nobracket: true,
							usable: 1,
							filter(event, player) {
								return player.bluefire - player.bluefireused >= 2;
							},
							selectTarget: 1,
							check(card) {
								return 4 - get.value(card);
							},
							content() {
								'step 0';
								game.consumeBF(player, 2);
								player
									.chooseTarget('选择1名玩家(可以是自己),使其获得<庇护>', function (player, target) {
										return true;
									})
									.set('ai', function (target) {
										return get.attitude(player, target) > 0;
									});
								('step 1');
								if (result.bool) {
									result.targets[0].addSkill('bihu');
									if (player.storage.fshy_yuan >= 7) {
										result.targets[0].addSkill('scly_zxqy');
									}
								}
								('step 2');
								if (player.storage.fshy_yuan >= 5) {
									player.addSkill('bihu');
								}
								('step 3');
								if (player.storage.fshy_yuan >= 3) {
									var friend = player.getFriends();
									for (var i = 0; i < friend.length; i++) {
										friend[i].addSkill('scly_zengshang');
									}
									player.addSkill('scly_zengshang');
								}
								('step 4');
								var r = player.countMark('fshy_yuan');
								if (Math.random() <= 0.3 + r / 10) {
									var friend = player.getFriends();
									for (var i = 0; i < friend.length; i++) {
										if (player.storage.fshy_yuan >= 1 && friend[i].hp == friend[i].maxHp && Math.random() <= 0.3) {
											friend[i].changeHujia();
										} else {
											friend[i].recover();
										}
									}
									if (player.storage.fshy_yuan >= 1 && player.hp == player.maxHp && Math.random() <= 0.3) {
										player.changeHujia();
									} else {
										player.recover();
									}
								}
							},
							ai: {
								save: true,
								order() {
									return get.order({ name: 'jiu' });
								},
								result: {
									expose: 0.1,
									threaten: 0.1,
									player(player) {
										if (player.bluefire - player.bluefireused >= 3) return 1;
									},
								},
							},
							group: ['bihu', 'scly_remove'],
							subSkill: {
								zengshang: {
									init(player) {
										player.storage.yysDamageup += 20;
									},
								},
								zxqy: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/zxqy.jpg>`,
									intro: {
										name: '再续前缘',
										content: '获得一个额外的回合.',
									},
									init(player) {
										player.storage.scly_zxqy;
										player.markSkill('scly_zxqy');
									},
									trigger: {
										player: ['phaseAfter'],
									},
									_priority: 20,
									forced: true,
									filter(event, player) {
										return true;
									},
									content() {
										player.phase('scly_zxqy');
										player.removeSkill('scly_zxqy');
									},
								},
								remove: {
									trigger: {
										player: ['phaseZhunbeiBefore'],
									},
									_priority: 20,
									forced: true,
									filter(event, player) {
										return true;
									},
									silent: true,
									content() {
										game.countPlayer(function (current) {
											if (current.hasSkill('scly_zengshang')) {
												current.removeSkill('scly_zengshang');
												current.storage.yysDamageup -= 20;
											}
										});
									},
									popup: false,
								},
							},
						},
						bujiezhili: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/bujiezhili.jpg>`,
							intro: {
								name: '不洁之力',
								content: '冷却两回合,若你的身份不为内,则可以对友方目标使用,若如此做,你立即结束你的出牌阶段,其获得两回合的不洁之力并立即获得一个回合,之后该目标转化为蛇魔,蛇魔拥有技能【毒液】,若你的身份不为内且无其他友方角色存活时,将此技能替换为【八岐之影】,若你的身份为内,则可以对场上非己非主公的任意其他角色使用,使其获得两回合的不洁之力并立即获得一个回合,之后该目标转化为蛇魔,当场上蛇魔数量达到3个或以上时,将此技能替换为【八岐之影】.非身份模式:若游戏不是身份局,则你成为主公并给所有人添加身份,且只能给身份为忠臣的角色添加不洁之力.<br><li>【蛇魔】:蛇魔无法使用锦囊牌和延时锦囊牌,使用<杀>时增加八岐大蛇10%的行动条,造成伤害时给目标附加<毒液>标记.<br><li>【毒液】:累计达到三层时受到两点无来源的伤害,并为八岐大蛇和蛇魔之间血量最低的一名角色回复两点体力值.<br>行动条:行动条每达到100%,即可获得一个额外的回合.',
							},
							init(player) {
								player.storage.duye2;
								player.storage.bujiezhili = 0;
								player.markSkill('bujiezhili');
							},
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								if (get.mode() == 'identity' && player.name != 'qxq_yys_baqidashe' && (player.identity == 'zhu' || player.identity == 'zhong')) return target != player && target.identity == 'zhong' && !target.hasSkill('duye') && !target.hasSkill('bujiezhili_shemoningshi');
								if (get.mode() == 'identity' && player.name != 'qxq_yys_baqidashe' && player.identity == 'fan') return target != player && target.identity == 'fan' && !target.hasSkill('duye') && !target.hasSkill('bujiezhili_shemoningshi');
								if (get.mode() == 'identity' && player.name != 'qxq_yys_baqidashe' && player.identity == 'nei') return target != player && target.identity != 'zhu' && !target.hasSkill('duye') && !target.hasSkill('bujiezhili_shemoningshi');
								if (get.mode() == 'identity') return target.hasSkill('bujiezhili_choose') && !target.hasSkill('duye') && !target.hasSkill('bujiezhili_shemoningshi');
								if (get.mode() != 'identity') return true;
							},
							filter(event, player) {
								return player.bluefire - player.bluefireused >= 2;
							},
							check() {
								return true;
							},
							selectTarget: 1,
							delay: false,
							round: 2,
							content() {
								'step 0';
								target.addSkill('bujiezhili_shemoningshi');
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.skipped = true;
								}
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.finish();
								}
								target.phase('bujiezhili');
							},
							ai: {
								order() {
									return Infinity;
								},
								result: {
									threaten: 1.5,
									player(player) {
										return 1;
									},
								},
							},
							group: ['bujiezhili_add', 'bujiezhili_roundcount', 'bujiezhili_replace', 'bujiezhili_identity', 'shezhishenfen', 'bqdsgroup', 'duye2'],
							subSkill: {
								add: {
									trigger: {
										global: 'gameStart',
										player: ['enterGame', 'phaseZhunbeiBegin'],
									},
									forced: true,
									filter(event, player) {
										if (get.mode() == 'identity') return true;
										if (get.mode() != 'identity') return false;
									},
									content() {
										var friend = player.getFriends();
										for (var i = 0; i < friend.length; i++) {
											if (friend[i].name != 'qxq_yysshemo' && friend[i].identity != 'zhu') {
												friend[i].addSkill('bujiezhili_choose');
											}
										}
									},
								},
								choose: {
									mark: false,
									init(player) {
										player.storage.bujiezhili_choose = 1;
									},
								},
								shemoningshi: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/bujiezhili.jpg>`,
									intro: {
										name: '蛇魔凝视',
										content: '该角色不会受到任何伤害(不包括体力流失),且#个回合后变成蛇魔.',
									},
									init(player) {
										player.storage.bujiezhili_shemoningshi = 2;
										player.markSkill('bujiezhili_shemoningshi');
									},
									trigger: {
										player: ['phaseZhunbeiBefore', 'damageBegin'],
									},
									forced: true,
									filter(event, player) {
										return true;
									},
									content() {
										'step 0';
										if (trigger.name == 'phaseZhunbei') {
											player.storage.bujiezhili_shemoningshi--;
											event.goto(1);
										}
										if (trigger.name == 'damage') {
											trigger.cancel();
											event.goto(2);
										}
										('step 1');
										var list = [];
										game.countPlayer(function (current) {
											if (current.name == 'qxq_yys_baqidashe' || (current.storage.yysjianglingRandom && current.storage.yysjianglingRandom[0] == 'qxq_yys_baqidashe')) {
												list.push(current);
											}
										});
										var h = player.hp;
										var m = player.maxHp;
										if (player.storage.bujiezhili_shemoningshi < 0) {
											player.clearSkills();
											player.init('qxq_yysshemo');
											player.addSkill('bqdsgroup');
											player.hp = h;
											player.maxHp = m;
											if (get.mode() == 'identity') {
												if (list[0] && list[0].identity == 'nei' && player.identity != 'zhu') {
													player.identity = 'nei';
													player.setIdentity('内');
												}
											} else {
												player.group = 'qxq_yys';
												player.changeGroup('qxq_yys');
											}
											var path = player.node.avatar.style['background-image'];
											if (path.indexOf('extension/斗破苍穹X阴阳师/image/qxq_yysshemo.jpg') == -1) {
												var name = 'qxq_yysshemo';
												var playerx = game.addPlayer(name);
												playerx.init('qxq_yys_bossbqds');
												playerx.maxHp = player.maxHp;
												playerx.hp = player.hp;
												playerx.group = player.group;
												playerx.identity = player.identity;
												playerx.setIdentity('蛇');
												playerx.identityShown = player.identityShown;
												var cardsh = player.getCards('h');
												var cardse = player.getCards('e');
												var cardsj = player.getCards('j');
												if (cardsh.length) playerx.gain(cardsh)._triggered = null;
												if (cardse.length) playerx.equip(cardse)._triggered = null;
												if (cardsj.length) playerx.addJudge(cardsj)._triggered = null;
												player.delete();
												for (var i of game.players) {
													i.dataset.position = [i];
												}
											}
										} else {
										}
										('step 2');
										event.finish();
									},
								},
								replace: {
									trigger: {
										player: ['phaseZhunbeiBefore'],
									},
									forced: true,
									filter(event, player) {
										if (get.mode() == 'identity') return true;
										if (get.mode() != 'identity') return false;
									},
									content() {
										var list = [];
										var friend = player.getFriends();
										for (var i = 0; i < friend.length; i++) {
											if (friend[i].name != 'qxq_yysshemo' && friend[i].identity && friend[i].identity != 'zhu') {
												list.push(friend[i]);
											}
										}
										if (list.length) {
											event.finish();
										} else {
											player.removeSkill('bujiezhili');
											player.addSkill('baqizhiying');
										}
									},
								},
								identity: {
									trigger: {
										global: 'gameStart',
									},
									forced: true,
									filter(event, player) {
										if (get.mode() == 'identity' && player.identity && player.identity == 'nei') return true;
										if (get.mode() != 'identity') return false;
									},
									content() {
										player.removeSkill('bujiezhili');
										player.addSkill('bjzl');
									},
								},
							},
						},
						shennianzhiying: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/shennianzhiying.jpg>`,
							intro: {
								name: '神念之影',
								content: '出牌阶段消耗三点鬼火,开启蛇魔空间并选择一个敌方目标附加【五感尽失】,随后为所有敌方附加一层【毒液】,同时场上每名蛇魔各使用一张<杀>攻击随机敌方目标,敌方目标移除【五感尽失】.若你身份为主且场上无忠,则自动将技能替换为【神愤之炎】.',
							},
							init(player) {
								player.storage.duye2;
								player.storage.shennianzhiying = 0;
								player.markSkill('shennianzhiying');
							},
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return !target.hasSkill('bujiezhili_choose') && !target.hasSkill('baqizhiying_choose') && target.name != 'qxq_yysshemo' && target.name != 'qxq_yys_baqidashe';
							},
							filter(event, player) {
								return player.bluefire - player.bluefireused >= 3;
							},
							check() {
								return true;
							},
							selectTarget: 1,
							delay: false,
							contentBefore() {
								'step 0';
								game.consumeBF(player, 3);
								('step 1');
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/shemokongjian.jpg');
								}, player);
								('step 2');
								for (var i of game.players) {
									if (i.name == 'qxq_yysshemo') {
										i.removeSkill('duye_motivation');
									}
								}
							},
							content() {
								'step 0';
								target.addSkill('wuganjinshi');
								if (get.mode() == 'identity') {
									var list = [];
									for (var i of game.players) {
										if (i.name == 'qxq_yysshemo') {
											list.push(i);
										}
									}
									var listE = [];
									var enemies = player.getEnemies();
									for (var i = 0; i < enemies.length; i++) {
										if (enemies[i].name == 'qxq_yysshemo' || enemies[i].name == 'qxq_yys_baqidashe' || (enemies[i].storage.yysjianglingRandom && enemies[i].storage.yysjianglingRandom[0] == 'qxq_yys_baqidashe')) {
											enemies.remove(enemies[i]);
										}
									}
									for (var i = 0; i < enemies.length; i++) {
										if (!enemies[i].hasSkill('duye_du')) {
											enemies[i].addSkill('duye_du');
										} else {
											enemies[i].addMark('duye_du');
										}
									}
									if (list.length) {
										for (var i = 0; i < list.length; i++) {
											if (enemies.length) {
												var enemy = enemies.randomGet();
												list[i].useCard({ name: 'sha' }, enemy);
											}
										}
									}
								} else {
									var list = [];
									for (var i of game.players) {
										if (i.name == 'qxq_yysshemo') {
											list.push(i);
										}
									}
									var listE = [];
									var enemies = [];
									for (var i of game.players) {
										if (i.group != 'qxq_yys') {
											enemies.push(i);
										}
									}
									for (var i = 0; i < enemies.length; i++) {
										if (!enemies[i].hasSkill('duye_du')) {
											enemies[i].addSkill('duye_du');
										} else {
											enemies[i].addMark('duye_du');
										}
									}
									if (list.length) {
										for (var i = 0; i < list.length; i++) {
											if (enemies.length) {
												var enemy = enemies.randomGet();
												list[i].useCard({ name: 'sha' }, enemy);
											}
										}
									}
								}
								('step 1');
								target.removeSkill('wuganjinshi');
							},
							contentAfter() {
								'step 0';
								game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
								('step 1');
								for (var i of game.players) {
									if (i.name == 'qxq_yysshemo') {
										i.addSkill('duye_motivation');
									}
								}
							},
							ai: {
								order() {
									var num = 0;
									for (var i of game.players) {
										if (i.name == 'qxq_yysshemo') {
											num++;
										}
									}
									return get.order({ name: 'sha' }) - 1 + num;
								},
								result: {
									player(player) {
										var num = 0;
										for (var i of game.players) {
											if (i.name == 'qxq_yysshemo') {
												num++;
											}
										}
										if (num == 0 || player.countCards('h') + player.bluefire - player.bluefireused <= 3) {
											return -1;
										}
										if (num == 1 && player.countCards('h') + player.bluefire - player.bluefireused > 3) {
											return 1;
										}
										if (num > 1 || player.countCards('h') + player.bluefire - player.bluefireused >= 3) {
											return 1;
										}
									},
								},
							},
							group: ['shennianzhiying_replace', 'shennianzhiying_gzchange', 'bqdsgroup', 'duye2'],
							subSkill: {
								replace: {
									trigger: {
										player: ['phaseZhunbeiEnd'],
									},
									forced: true,
									filter(event, player) {
										if (get.mode() == 'identity' && ((player.identity && player.identity == 'zhu') || !player.identity)) return true;
										if (get.mode() != 'identity') return false;
									},
									content() {
										var list = [];
										var friend = player.getFriends();
										for (var i = 0; i < friend.length; i++) {
											if (friend[i].name != 'qxq_yysshemo') {
												list.push(friend[i]);
											}
										}
										if (player.identity != 'zhong' && list.length) {
											event.finish();
										} else {
											if (player.identity == 'zhong' && list.length > 1) {
												event.finish();
											} else {
												player.removeSkill('shennianzhiying');
												player.addSkill('shenfenzhiyan');
											}
										}
									},
								},
								gzchange: {
									trigger: {
										player: ['phaseZhunbeiEnd'],
									},
									forced: true,
									filter(event, player) {
										if (get.mode() != 'identity' && !player.storage.shezhishenfen) return true;
										if (get.mode() == 'identity') return false;
									},
									content() {
										var list = [];
										for (var i of game.players) {
											if (i.hasSkill('bujiezhili_choose')) {
												list.push(i);
											}
										}
										if (list.length) {
											event.finish();
										} else {
											player.removeSkill('shennianzhiying');
											player.addSkill('shenfenzhiyan');
										}
									},
								},
							},
						},
						shenfenzhiyan: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/shenfenzhiyan.jpg>`,
							intro: {
								name: '神愤之炎',
								content: '出牌阶段,你可以选择发动【神念之影】或【神愤之炎】.神愤之炎:出牌阶段消耗三点鬼火,开启蛇魔空间并选择一个敌方目标附加【五感尽失】,随后为所有敌方附加一层【毒液】,同时场上每名蛇魔各使用一张<杀>攻击随机敌方目标,敌方目标移除【五感尽失】,接着你每消耗一点鬼火,则再次重复触发蛇魔的攻击效果.',
							},
							init(player) {
								player.storage.duye2;
								player.addTempSkill('duye2', { player: 'dieAfter' });
								player.addSkill('bqdsgroup');
								player.storage.shenfenzhiyan = 0;
								player.markSkill('shenfenzhiyan');
							},
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return !target.hasSkill('bujiezhili_choose') && !target.hasSkill('baqizhiying_choose') && target.name != 'qxq_yysshemo' && target.name != 'qxq_yys_baqidashe';
							},
							filter(event, player) {
								return player.bluefire - player.bluefireused >= 3;
							},
							check() {
								return true;
							},
							selectTarget: 1,
							delay: false,
							contentBefore() {
								'step 0';
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/shemokongjian.jpg');
								}, player);
								('step 1');
								for (var i of game.players) {
									if (i.name == 'qxq_yysshemo') {
										i.removeSkill('duye_motivation');
									}
								}
							},
							content() {
								'step 0';
								target.addSkill('wuganjinshi');
								player.chooseControl('消耗三点鬼火发动神念之影', '消耗全部鬼火发动神愤之炎').set('ai', function (event) {
									if (player.hp >= 3) return '消耗鬼火发动神愤之炎';
								});
								('step 1');
								if (result.control == '消耗全部鬼火发动神愤之炎') {
									var x = player.bluefire - player.bluefireused;
									game.consumeBF(player, x);
									player.storage.shenfenzhiyan_count += -2 + x;
									event.goto(2);
								} else {
									game.consumeBF(player, 3);
									if (get.mode() == 'identity') {
										var list = [];
										for (var i of game.players) {
											if (i.name == 'qxq_yysshemo') {
												list.push(i);
											}
										}
										var listE = [];
										var enemies = player.getEnemies();
										for (var i = 0; i < enemies.length; i++) {
											if (enemies[i].name == 'qxq_yysshemo' || enemies[i].name == 'qxq_yys_baqidashe' || (enemies[i].storage.yysjianglingRandom && enemies[i].storage.yysjianglingRandom[0] == 'qxq_yys_baqidashe')) {
												enemies.remove(enemies[i]);
											}
										}
										for (var i = 0; i < enemies.length; i++) {
											if (!enemies[i].hasSkill('duye_du')) {
												enemies[i].addSkill('duye_du');
											} else {
												enemies[i].addMark('duye_du');
											}
										}
										if (list.length) {
											for (var i = 0; i < list.length; i++) {
												if (enemies.length) {
													var enemy = enemies.randomGet();
													list[i].useCard({ name: 'sha' }, enemy);
												}
											}
										}
									} else {
										var list = [];
										for (var i of game.players) {
											if (i.name == 'qxq_yysshemo') {
												list.push(i);
											}
										}
										var listE = [];
										var enemies = [];
										for (var i of game.players) {
											if (i.group != 'qxq_yys') {
												enemies.push(i);
											}
										}
										for (var i = 0; i < enemies.length; i++) {
											if (!enemies[i].hasSkill('duye_du')) {
												enemies[i].addSkill('duye_du');
											} else {
												enemies[i].addMark('duye_du');
											}
										}
										if (list.length) {
											for (var i = 0; i < list.length; i++) {
												if (enemies.length) {
													var enemy = enemies.randomGet();
													list[i].useCard({ name: 'sha' }, enemy);
												}
											}
										}
									}
									event.goto(4);
								}
								('step 2');
								if (get.mode() == 'identity') {
									var list = [];
									for (var i of game.players) {
										if (i.name == 'qxq_yysshemo') {
											list.push(i);
										}
									}
									var listE = [];
									var enemies = player.getEnemies();
									for (var i = 0; i < enemies.length; i++) {
										if (!enemies[i].hasSkill('duye_du')) {
											enemies[i].addSkill('duye_du');
										} else {
											enemies[i].addMark('duye_du');
										}
									}
									if (list.length) {
										for (var i = 0; i < list.length; i++) {
											var enemy = enemies.randomGet();
											list[i].useCard({ name: 'sha' }, enemy);
										}
									}
								} else {
									var list = [];
									for (var i of game.players) {
										if (i.name == 'qxq_yysshemo') {
											list.push(i);
										}
									}
									var listE = [];
									var enemies = [];
									for (var i of game.players) {
										if (i.group != 'qxq_yys') {
											enemies.push(i);
										}
									}
									for (var i = 0; i < enemies.length; i++) {
										if (!enemies[i].hasSkill('duye_du')) {
											enemies[i].addSkill('duye_du');
										} else {
											enemies[i].addMark('duye_du');
										}
									}
									if (list.length) {
										for (var i = 0; i < list.length; i++) {
											var enemy = enemies.randomGet();
											list[i].useCard({ name: 'sha' }, enemy);
										}
									}
								}
								('step 3');
								if (player.storage.shenfenzhiyan_count > 0) {
									player.storage.shenfenzhiyan_count--;
									event.goto(2);
								} else {
									event.goto(4);
								}
								('step 4');
								target.removeSkill('wuganjinshi');
							},
							contentAfter() {
								'step 0';
								game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
								('step 1');
								for (var i of game.players) {
									if (i.name == 'qxq_yysshemo') {
										i.addSkill('duye_motivation');
									}
								}
							},
							ai: {
								order() {
									var num = 0;
									for (var i of game.players) {
										if (i.name == 'qxq_yysshemo') {
											num++;
										}
									}
									return get.order({ name: 'sha' }) - 1 + num * 2;
								},
								result: {
									player(player) {
										var num = 0;
										for (var i of game.players) {
											if (i.name == 'qxq_yysshemo') {
												num++;
											}
										}
										if (num == 0 || player.bluefire - player.bluefireused <= 3) {
											return -1;
										}
										if (num == 1 && player.bluefire - player.bluefireused > 3) {
											return 1;
										}
										if (num > 1 || player.bluefire - player.bluefireused >= 3) {
											return 1;
										}
									},
								},
							},
							group: ['shenfenzhiyan_count', 'bqdsgroup', 'duye2'],
							subSkill: {
								count: {
									mark: false,
									init(player) {
										player.storage.shenfenzhiyan_count = 0;
									},
								},
							},
						},
						duye: {
							init(player) {
								player.addSkill('bqdsgroup');
								player.storage.duye;
							},
							marktext: '毒',
							mark: true,
							intro: {
								name: '毒液',
								content: '该角色无法使用锦囊牌和延时类镜囊牌,使用<杀>时增加八岐大蛇10%的行动条.该角色造成伤害时,给目标附加一层<毒液>标记,<毒液>标记累积三层时,目标额外受到两点无来源的伤害,同时使八岐大蛇和蛇魔之中生命值最低的一个角色回复两点体力,目标移除<毒液>标记.<br>行动条:角色行动条每达到100%,即可获得一个额外的回合.',
							},
							mod: {
								cardEnabled(player, card) {
									if (get.type(card) == 'trick' || get.type(card) == 'delay') return false;
								},
							},
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							nobracket: true,
							content() {
								if (!trigger.player.hasSkill('duye_du')) {
									trigger.player.addSkill('duye_du');
									trigger.player.storage.duye_du = 1;
								} else {
									trigger.player.storage.duye_du++;
								}
							},
							group: ['duye_motivation'],
							subSkill: {
								du: {
									mark: true,
									marktext: '毒',
									intro: {
										name: '毒',
										content: '累计三层标记后受到两点无来源的伤害,并使八岐大蛇和蛇魔之中生命值最低的一名角色回复两点体力.<br><br><b><li>当前标记数为#枚</b>',
									},
									init(player) {
										player.storage.duye_du = 1;
									},
									trigger: {
										player: 'damageAfter',
										global: 'useSkillAfter',
									},
									content() {
										'step 0';
										if (player.storage.duye_du >= 3) {
											event.goto(1);
										} else {
											event.goto(2);
										}
										('step 1');
										var friend = [];
										for (var i of game.players) {
											if (i.hasSkill('bqdsgroup')) {
												friend.push(i);
											}
										}
										var target = get.min(friend, 'hp', 'list').randomGet();
										if (target) {
											target.hp += 2;
										}
										player.damage(2, 'nosource');
										player.storage.duye_du = 0;
										game.log(target, '回复了两点体力');
										('step 2');
										if (player.storage.duye_du <= 0) {
											player.removeSkill('duye_du');
										} else {
										}
									},
									forced: true,
								},
								motivation: {
									trigger: {
										player: 'shaBegin',
									},
									forced: true,
									nobracket: true,
									content() {
										for (var i of game.players) {
											if (i.hasSkill('shennianzhiying') || i.hasSkill('shenfenzhiyan')) {
												i.storage.yysmotive += 10;
											}
										}
									},
								},
							},
						},
						duye2: {
							marktext: '毒',
							mark: true,
							intro: {
								name: '毒液',
								content: '该角色造成伤害时,给目标附加一层<毒液>标记,<毒液>标记累积三层时,目标额外受到两点无来源的伤害,同时使八岐大蛇和蛇魔之中生命值最低的一个角色回复两点体力,目标移除<毒液>标记.',
							},
							trigger: {
								source: 'damageEnd',
								player: 'useSkillAfter',
							},
							forced: true,
							nobracket: true,
							content() {
								if (trigger.name == 'damage') {
									if (!trigger.player.hasSkill('duye_du')) {
										trigger.player.addSkill('duye_du');
										trigger.player.storage.duye_du = 1;
									} else {
										trigger.player.storage.duye_du++;
									}
								} else {
									for (var i of game.players) {
										if (i.hasSkill('duye_du') && i.storage.duye_du >= 3) {
											i.useSkill('duye_du');
										}
									}
								}
							},
						},
						baqizhiying: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/baqizhiying.jpg>`,
							intro: {
								name: '八岐之影',
								content: '身份局中可使用,如果你的身份为忠或内,则可发动此技能将主公变成蛇魔并交换位置和身份,你获得一个额外回合,并将技能【神念之影】替换为【神愤之炎】,且若你的身份为内,则你发动此技能后将所有蛇魔的身份变为忠.若发动前你的身份不为忠或内,则你成为主公交换位置后,将技能【神念之影】替换为【神愤之炎】,并将所有原反贼变成忠臣,所有原主忠方变为反贼(内奸身份不变).',
							},
							init(player) {
								player.addTempSkill('duye2', { player: 'dieAfter' });
								player.addSkill('bqdsgroup');
								player.storage.baqizhiying = 0;
								player.markSkill('baqizhiying');
							},
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target.hasSkill('baqizhiying_choose');
							},
							filter(event, player) {
								if (get.mode() == 'identity' && player.identity && player.identity != 'zhu') return true;
								if (get.mode() != 'identity') return false;
							},
							check() {
								return true;
							},
							selectTarget: 1,
							delay: false,
							content() {
								'step 0';
								player.removeSkill('baqizhiying');
								player.removeSkill('shennianzhiying');
								player.addSkill('shenfenzhiyan');
								if (player.identity && player.identity != 'zhong' && player.identity != 'nei') {
									event.goto(2);
								} else {
									event.goto(1);
								}
								('step 1');
								if (!player.identity) {
									event.goto(3);
								} else {
									var IDP = player.identity;
									player.identity = 'zhu';
									player.showIdentity();
									game.zhu.identity = IDP;
									game.zhu = player;
									game.zhu.showIdentity();
									game.swapSeat(player, target);
									var h = target.hp;
									var m = target.maxHp;
									target.init('qxq_yysshemo');
									target.hp = h;
									target.maxHp = m - 1;
									if (player.identity == 'zhu') {
										player.setIdentity('主');
										player.node.identity.dataset.color = 'zhu';
									}
									if (target.identity == 'zhong') {
										target.setIdentity('忠');
										target.node.identity.dataset.color = 'zhong';
									}
									if (target.identity == 'fan') {
										target.setIdentity('反');
										target.node.identity.dataset.color = 'fan';
									}
									if (target.identity == 'nei') {
										target.setIdentity('内');
										target.node.identity.dataset.color = 'nei';
									}
									if (IDP == 'nei') {
										var shemo = [];
										game.countPlayer(function (current) {
											if (current.name == 'qxq_yysshemo') {
												shemo.push(current);
											}
										});
										for (var i = 0; i < shemo.length; i++) {
											shemo[i].identity == 'zhong';
											shemo[i].setIdentity('忠');
											shemo[i].node.identity.dataset.color = 'zhong';
										}
									}
									player.phase('baqizhiying');
									player.maxHp++;
									player.hp++;
									event.goto(3);
								}
								event.goto(3);
								('step 2');
								target.maxHp--;
								var listF = player.getFriends();
								var listE = player.getEnemies();
								for (var i = 0; i < listE.length; i++) {
									if (listE[i].identity != 'nei' && listE[i] != target) {
										listE[i].identity = 'fan';
										listE[i].setIdentity('反');
										listE[i].node.identity.dataset.color = 'fan';
									}
								}
								for (var i = 0; i < listF.length; i++) {
									listF[i].identity = 'zhong';
									listF[i].setIdentity('忠');
									listF[i].node.identity.dataset.color = 'zhong';
								}
								game.swapSeat(player, target);
								var IDP = player.identity;
								player.identity = 'zhu';
								player.showIdentity();
								game.zhu.identity = IDP;
								game.zhu = player;
								game.zhu.showIdentity();
								player.setIdentity('主');
								player.node.identity.dataset.color = 'zhu';
								target.setIdentity('反');
								target.node.identity.dataset.color = 'fan';
								player.phase('baqizhiying');
								player.maxhp++;
								player.hp++;
								('step 3');
								event.finish();
							},
							ai: {
								order() {
									return Infinity;
								},
								expose: 1,
								threaten: 1.2,
								result: {
									player(player) {
										return true;
									},
								},
							},
							group: ['baqizhiying_add'],
							subSkill: {
								add: {
									trigger: {
										player: 'phaseZhunbeiBefore',
									},
									forced: true,
									filter(event, player) {
										if (get.mode() == 'identity') return true;
										if (get.mode() != 'identity') return false;
									},
									content() {
										var GAME = game.players;
										for (var i = 0; i < GAME.length; i++) {
											if (GAME[i].identity == 'zhu') {
												GAME[i].addSkill('baqizhiying_choose');
											}
										}
									},
								},
								choose: {
									mark: false,
									init(player) {
										player.storage.baqizhiying_choose = 1;
									},
								},
							},
						},
						wuganjinshi: {
							mark: true,
							marktext: '失',
							intro: {
								name: '五感尽失',
								content: '该角色无法发动时机为<造成伤害>、<受到伤害>、<回复体力>、<流失体力>、<弃牌>、<失去牌>、<摸牌>、<获得牌>的相关触发类技能',
							},
							init(player) {
								player.storage.wuganjinshi;
							},
							nobracket: true,
							trigger: {
								player: ['damageBefore', 'recoverBefore', 'loseHpBefore', 'discardBefore', 'loseBefore', 'drawBefore', 'gainBefore'],
							},
							forced: true,
							popup: false,
							_priority: null,
							content() {
								trigger._triggered = null;
							},
						},
						bjzl: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/bujiezhili.jpg>`,
							intro: {
								name: '不洁之力',
								content: '冷却两回合,若你的身份不为内,则可以对友方目标使用,若如此做,你立即结束你的出牌阶段,其获得两回合的不洁之力并立即获得一个回合,之后该目标转化为蛇魔,蛇魔拥有技能【毒液】,若你的身份不为内且无其他友方角色存活时,将此技能替换为【八岐之影】,若你的身份为内,则可以对场上非己非主公的任意其他角色使用,使其获得两回合的不洁之力,之后该目标转化为蛇魔,当场上蛇魔数量达到3个或以上时,将此技能替换为【八岐之影】.非身份局:若游戏不为身份模式,则你成为主公并给所有人添加身份,且只能给身份为忠臣的角色添加不洁之力.<br><li>【蛇魔】:蛇魔无法使用锦囊牌和延时锦囊牌,使用<杀>时增加八岐大蛇10%的行动条,造成伤害时给目标附加<毒液>标记.<br><li>【毒液】:累计达到三层时受到两点无来源的伤害,并为八岐大蛇和蛇魔之间血量最低的一名角色回复两点体力值.<br><li>【行动条】:行动条每达到100%,即可获得一个额外的回合.',
							},
							init(player) {
								player.addSkill('bqdsgroup');
								player.storage.bjzl = 0;
								player.markSkill('bjzl');
							},
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target.hasSkill('bjzl_choose') && target != player && !target.hasSkill('duye') && !target.hasSkill('bujiezhili_shemoningshi');
							},
							filter(event, player) {
								if (get.mode() == 'identity' && player.bluefire - player.bluefireused >= 2) return true;
								if (get.mode() != 'identity') return false;
							},
							check() {
								return true;
							},
							selectTarget: 1,
							delay: false,
							round: 2,
							content() {
								'step 0';
								target.addSkill('bujiezhili_shemoningshi');
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.skipped = true;
								}
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.finish();
								}
								target.phase('bjzl');
							},
							ai: {
								order() {
									return Infinity;
								},
								result: {
									threaten: 1.5,
									player(player) {
										return 1;
									},
								},
							},
							group: ['bjzl_add', 'bjzl_choose', 'bjzl_replace', 'bjzl_roundcount'],
							subSkill: {
								add: {
									trigger: {
										global: 'gameStart',
										player: ['enterGame', 'phaseZhunbeiBegin'],
									},
									forced: true,
									filter(event, player) {
										if (get.mode() == 'identity' && player.identity && player.identity == 'nei') return true;
										if (get.mode() != 'identity') return false;
									},
									content() {
										for (var i of game.players) {
											if (i.name != 'qxq_yysshemo' && i.identity != 'zhu') {
												if (i.name != 'qxq_yys_baqidashe') {
													i.addSkill('bjzl_choose');
												}
											}
										}
									},
								},
								choose: {
									mark: false,
									init(player) {
										player.storage.bjzl_choose = 1;
									},
								},
								replace: {
									trigger: {
										player: ['phaseZhunbeiBefore'],
									},
									forced: true,
									filter(event, player) {
										if (get.mode() == 'identity' && player.identity && player.identity == 'nei') return true;
										if (get.mode() != 'identity') return false;
									},
									content() {
										var list = [];
										for (var i of game.players) {
											if (i.name == 'qxq_yysshemo') {
												list.push(i);
											}
										}
										if (list.length < 3) {
											event.finish();
										} else {
											player.removeSkill('bjzl');
											player.addSkill('baqizhiying');
										}
									},
								},
							},
						},
						shezhishenfen: {
							init(player) {
								player.storage.shezhishenfen;
							},
							mark: false,
							trigger: {
								global: 'gameStart',
								player: 'showCharacterAfter',
							},
							filter(event, player) {
								if (get.mode() != 'identity' && get.mode() != 'guozhan') return true;
								if (get.mode() == 'guozhan' && event.name == 'showCharacter') return true;
								if (get.mode() == 'identity') return false;
							},
							forced: true,
							_priority: 100,
							content() {
								'step 0';
								if (lib.config.mode == 'guozhan' && get.config('guozhan_mode') != 'mingjiang') {
									for (var i of game.players) {
										i.showCharacter(2);
									}
								} else {
									event.goto(1);
								}
								('step 1');
								player.hp = player.maxHp;
								ui.clear();
								game.zhu = player;
								player.identity = 'zhu';
								player.setIdentity('主');
								player.node.identity.dataset.color = 'zhu';
								player.identityShown = true;
								var players = get.players(false, true);
								var ID = ['fan'];
								if (game.players.length >= 3) {
									ID.push('nei');
								}
								if (game.players.length >= 4) {
									ID.push('zhong');
								}
								if (game.players.length >= 5) {
									var num = game.players.length - 4;
									var numz = Math.round((game.players.length - 1) * (2 / 7)) - 1;
									var numf = Math.round((game.players.length - 1) * (3 / 7)) - 1;
									var numn = num - numz - numf;
									for (var i = 0; i < numz; i++) {
										ID.push('zhong');
									}
									for (var i = 0; i < numf; i++) {
										ID.push('fan');
									}
									for (var i = 0; i < numn; i++) {
										ID.push('nei');
									}
								}
								for (var i of players) {
									if (i != player) {
										var id = ID.randomGet();
										ID.remove(id);
										i.identity = id;
										if (i.identity == 'zhong') {
											i.setIdentity('忠');
											i.node.identity.dataset.color = 'zhong';
										}
										if (i.identity == 'fan') {
											i.setIdentity('反');
											i.node.identity.dataset.color = 'fan';
										}
										if (i.identity == 'nei') {
											i.setIdentity('内');
											i.node.identity.dataset.color = 'nei';
										}
										i.identityShown = true;
									}
								}
								for (var i of game.players) {
									if (i.identity == 'zhong') {
										i.addSkill('bujiezhili_choose');
									}
								}
								player.removeSkill('shezhishenfen');
							},
						},
						bqdsgroup: {
							mark: false,
							init(player) {
								player.storage.bqdsgroup = 1;
							},
						},
						yhshanghunniao: {
							mark: false,
							nobracket: true,
							init(player) {
								player.storage.yhshanghunniao = 0;
							},
							trigger: {
								player: ['useCardAfter'],
							},
							forced: true,
							filter(event, player, card) {
								return get.type(event.card) == 'yuhun' && (event.card.name == 'yhshanghunniaoA' || event.card.name == 'yhshanghunniaoB' || event.card.name == 'yhshanghunniaoC' || event.card.name == 'yhshanghunniaoD' || event.card.name == 'yhshanghunniaoE' || event.card.name == 'yhshanghunniaoF');
							},
							content() {
								'step 0';
								player.storage.yhshanghunniao = 0;
								('step 1');
								var es = trigger.player.storage.yh_;
								for (var i = 0; i < es.length; i++) {
									if (get.subtype(es[i]) == 'yuhun1') {
										if (es[i].name == 'yhshanghunniaoA') {
											player.storage.yhshanghunniao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun2') {
										if (es[i].name == 'yhshanghunniaoB') {
											player.storage.yhshanghunniao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun3') {
										if (es[i].name == 'yhshanghunniaoC') {
											player.storage.yhshanghunniao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun4') {
										if (es[i].name == 'yhshanghunniaoD') {
											player.storage.yhshanghunniao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun5') {
										if (es[i].name == 'yhshanghunniaoE') {
											player.storage.yhshanghunniao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun6') {
										if (es[i].name == 'yhshanghunniaoF') {
											player.storage.yhshanghunniao++;
										}
									}
								}
								if (player.storage.yhshanghunniao == 2 && !player.hasSkill('yhshanghunniao_yysCS')) {
									player.addSkill('yhshanghunniao_yysCS');
								}
								('step 2');
								if (player.storage.yhshanghunniao >= 4 && !player.hasSkill('yhshanghunniao_shn')) {
									player.addSkill('yhshanghunniao_shn');
									game.log(player, '完全激活了伤魂鸟套装效果(拥有此套装时,每有一个非己友方角色阵亡,你回复一点体力值,永久增加20%攻击力)!');
								}
							},
							subSkill: {
								shn: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yhshanghunniao.jpg>`,
									intro: {
										name: '伤魂鸟——四件套',
										content: '每有一个非己友方角色阵亡,你回复一点体力值,永久增加20%攻击力(失去此套装时移除加成buff).',
									},
									trigger: {
										global: 'dieBegin',
									},
									forced: true,
									filter(event, player, card) {
										return player.getFriends().includes(event.player);
									},
									content() {
										player.recover();
										player.storage.yysATKx += 20;
									},
								},
								yysCS: {
									mark: false,
									init(player) {
										player.storage.yysCS += 15;
									},
								},
							},
						},
						yhzhaocaimao: {
							mark: false,
							nobracket: true,
							init(player) {
								player.storage.yhzhaocaimao = 0;
							},
							trigger: {
								player: ['useCardAfter'],
							},
							forced: true,
							filter(event, player, card) {
								return get.type(event.card) == 'yuhun' && (event.card.name == 'yhzhaocaimaoA' || event.card.name == 'yhzhaocaimaoB' || event.card.name == 'yhzhaocaimaoC' || event.card.name == 'yhzhaocaimaoD' || event.card.name == 'yhzhaocaimaoE' || event.card.name == 'yhzhaocaimaoF');
							},
							content() {
								'step 0';
								player.storage.yhzhaocaimao = 0;
								('step 1');
								var es = trigger.player.storage.yh_;
								for (var i = 0; i < es.length; i++) {
									if (get.subtype(es[i]) == 'yuhun1') {
										if (es[i].name == 'yhzhaocaimaoA') {
											player.storage.yhzhaocaimao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun2') {
										if (es[i].name == 'yhzhaocaimaoB') {
											player.storage.yhzhaocaimao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun3') {
										if (es[i].name == 'yhzhaocaimaoC') {
											player.storage.yhzhaocaimao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun4') {
										if (es[i].name == 'yhzhaocaimaoD') {
											player.storage.yhzhaocaimao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun5') {
										if (es[i].name == 'yhzhaocaimaoE') {
											player.storage.yhzhaocaimao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun6') {
										if (es[i].name == 'yhzhaocaimaoF') {
											player.storage.yhzhaocaimao++;
										}
									}
								}
								if (player.storage.yhzhaocaimao == 2 && !player.hasSkill('yhzhaocaimao_yysDEFx')) {
									player.addSkill('yhzhaocaimao_yysDEFx');
								}
								('step 2');
								if (player.storage.yhzhaocaimao >= 4 && !player.hasSkill('yhzhaocaimao_zcm')) {
									player.addSkill('yhzhaocaimao_zcm');
									game.log(player, '完全激活了招财猫套装效果(拥有此套装时,每个回合开始均有50%概率获得两张牌)!');
								}
							},
							subSkill: {
								zcm: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yhzhaocaimao.jpg>`,
									intro: {
										name: '招财猫——四件套',
										content: '每个回合开始均有50%概率获得两张牌.',
									},
									trigger: {
										global: 'phaseZhunbeiBegin',
									},
									forced: true,
									content() {
										player.draw(2);
									},
								},
								yysDEFx: {
									mark: false,
									init(player) {
										player.storage.yysDEFx += 15;
									},
								},
							},
						},
						yhdizangxiang: {
							mark: false,
							nobracket: true,
							init(player) {
								player.storage.yhdizangxiang = 0;
							},
							trigger: {
								player: ['useCardAfter'],
							},
							forced: true,
							filter(event, player, card) {
								return get.type(event.card) == 'yuhun' && (event.card.name == 'yhdizangxiangA' || event.card.name == 'yhdizangxiangB' || event.card.name == 'yhdizangxiangC' || event.card.name == 'yhdizangxiangD' || event.card.name == 'yhdizangxiangE' || event.card.name == 'yhdizangxiangF');
							},
							content() {
								'step 0';
								player.storage.yhdizangxiang = 0;
								('step 1');
								var es = trigger.player.storage.yh_;
								for (var i = 0; i < es.length; i++) {
									if (get.subtype(es[i]) == 'yuhun1') {
										if (es[i].name == 'yhdizangxiangA') {
											player.storage.yhdizangxiang++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun2') {
										if (es[i].name == 'yhdizangxiangB') {
											player.storage.yhdizangxiang++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun3') {
										if (es[i].name == 'yhdizangxiangC') {
											player.storage.yhdizangxiang++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun4') {
										if (es[i].name == 'yhdizangxiangD') {
											player.storage.yhdizangxiang++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun5') {
										if (es[i].name == 'yhdizangxiangE') {
											player.storage.yhdizangxiang++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun6') {
										if (es[i].name == 'yhdizangxiangF') {
											player.storage.yhdizangxiang++;
										}
									}
								}
								if (player.storage.yhdizangxiang == 2 && !player.hasSkill('yhdizangxiang_yysMAXHPup')) {
									player.addSkill('yhdizangxiang_yysMAXHPup');
								}
								('step 2');
								if (player.storage.yhdizangxiang >= 4 && !player.hasSkill('yhdizangxiang_dzx')) {
									player.addSkill('yhdizangxiang_dzx');
									game.log(player, '完全激活了地藏像套装效果(拥有此套装时,受到暴击时获得生命上限30%的护盾)!');
								}
							},
							subSkill: {
								dzx: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yhdizangxiang.jpg>`,
									intro: {
										name: '地藏像——四件套',
										content: '受到暴击时获得生命上限30%的护盾.',
									},
									init(player) {
										player.storage.yhdizangxiang_dzx;
									},
								},
								yysMAXHPup: {
									mark: false,
									init(player) {
										var x = Math.round(player.maxHp * 0.15);
										player.storage.yhdizangxiang_yysMAXHPup = x;
										player.maxHp += x;
									},
								},
							},
						},
						yhzheng: {
							mark: false,
							nobracket: true,
							init(player) {
								player.storage.yhzheng = 0;
							},
							trigger: {
								player: ['useCardAfter'],
							},
							forced: true,
							filter(event, player, card) {
								return get.type(event.card) == 'yuhun' && (event.card.name == 'yhzhengA' || event.card.name == 'yhzhengB' || event.card.name == 'yhzhengC' || event.card.name == 'yhzhengD' || event.card.name == 'yhzhengE' || event.card.name == 'yhzhengF');
							},
							content() {
								'step 0';
								player.storage.yhzheng = 0;
								('step 1');
								var es = trigger.player.storage.yh_;
								for (var i = 0; i < es.length; i++) {
									if (get.subtype(es[i]) == 'yuhun1') {
										if (es[i].name == 'yhzhengA') {
											player.storage.yhzheng++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun2') {
										if (es[i].name == 'yhzhengB') {
											player.storage.yhzheng++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun3') {
										if (es[i].name == 'yhzhengC') {
											player.storage.yhzheng++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun4') {
										if (es[i].name == 'yhzhengD') {
											player.storage.yhzheng++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun5') {
										if (es[i].name == 'yhzhengE') {
											player.storage.yhzheng++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun6') {
										if (es[i].name == 'yhzhengF') {
											player.storage.yhzheng++;
										}
									}
								}
								if (player.storage.yhzheng == 2 && !player.hasSkill('yhzheng_yysATKx')) {
									player.addSkill('yhzheng_yysATKx');
								}
								('step 2');
								if (player.storage.yhzheng >= 4 && !player.hasSkill('yhzheng_z')) {
									player.addSkill('yhzheng_z');
									game.log(player, '完全激活了狰套装效果(拥有此套装时,受到伤害时有45%概率对伤害来源使用一张<杀>)!');
								}
							},
							subSkill: {
								z: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yhzheng.jpg>`,
									intro: {
										name: '狰——四件套',
										content: '受到伤害时,有45%的概率对伤害来源使用一张<杀>.',
									},
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									filter(event, player, card) {
										return event.source && event.source != undefined;
									},
									content() {
										if (Math.random() <= 0.45) {
											player.useCard({ name: 'sha' }, trigger.source);
										}
									},
								},
								yysATKx: {
									mark: false,
									init(player) {
										player.storage.yysATKx += 15;
									},
								},
							},
						},
						yhmeiyao: {
							mark: false,
							nobracket: true,
							init(player) {
								player.storage.yhmeiyao = 0;
							},
							trigger: {
								player: ['useCardAfter'],
							},
							forced: true,
							filter(event, player, card) {
								return get.type(event.card) == 'yuhun' && (event.card.name == 'yhmeiyaoA' || event.card.name == 'yhmeiyaoB' || event.card.name == 'yhmeiyaoC' || event.card.name == 'yhmeiyaoD' || event.card.name == 'yhmeiyaoE' || event.card.name == 'yhmeiyaoF');
							},
							content() {
								'step 0';
								player.storage.yhmeiyao = 0;
								('step 1');
								var es = trigger.player.storage.yh_;
								for (var i = 0; i < es.length; i++) {
									if (get.subtype(es[i]) == 'yuhun1') {
										if (es[i].name == 'yhmeiyaoA') {
											player.storage.yhmeiyao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun2') {
										if (es[i].name == 'yhmeiyaoB') {
											player.storage.yhmeiyao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun3') {
										if (es[i].name == 'yhmeiyaoC') {
											player.storage.yhmeiyao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun4') {
										if (es[i].name == 'yhmeiyaoD') {
											player.storage.yhmeiyao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun5') {
										if (es[i].name == 'yhmeiyaoE') {
											player.storage.yhmeiyao++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun6') {
										if (es[i].name == 'yhmeiyaoF') {
											player.storage.yhmeiyao++;
										}
									}
								}
								if (player.storage.yhmeiyao == 2 && !player.hasSkill('yhmeiyao_yysDEFx')) {
									player.addSkill('yhmeiyao_yysDEFx');
								}
								('step 2');
								if (player.storage.yhmeiyao >= 4 && !player.hasSkill('yhmeiyao_my')) {
									player.addSkill('yhmeiyao_my');
									game.log(player, '完全激活了魅妖套装效果(拥有此套装时,造成伤害时有15%概率使目标陷入混乱直到其回合结束)!');
								}
							},
							subSkill: {
								my: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yhmeiyao.jpg>`,
									intro: {
										name: '魅妖——四件套',
										content: '造成伤害时有(15%+效果命中)概率使目标陷入混乱直到其回合结束.',
									},
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									filter(event, player, card) {
										return event.player != undefined;
									},
									content() {
										var sum = player.storage.yysINF / 100;
										var sumx = trigger.player.storage.yysRES / 100;
										if (Math.random() <= 0.15 + sum) {
											if (Math.random() < sumx) {
												trigger.player.popup('抵抗');
											} else {
												trigger.player.goMad({ player: 'phaseEnd' });
											}
										}
									},
								},
								yysDEFx: {
									mark: false,
									init(player) {
										player.storage.yysDEFx += 15;
									},
								},
							},
						},
						zhenjianrenxin: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							init(player) {
								player.storage.zhenjianrenxin = 0;
								player.storage.yyssustainup -= 20;
							},
							enable: 'phaseUse',
							usable: 1,
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/zhenjianrenxin.jpg>`,
							intro: {
								name: '真剑·韧心',
								content: '永久获得20%伤害减免,受到<杀>的伤害时,若自身处于无法动作(冰冻、翻面),则有35%概率格挡,免疫该次伤害并增加自身10%行动条,同时每次触发格挡,自身伤害提升15%(最多叠加5层),首次受到致命伤害时,回复最大生命值的30%,并增加30%行动条和持续一回合的40%伤害减免;<br><li>【施放】消耗一点鬼火施放,施放后摸一张牌并立即结束当前回合,进入心剑状态2回合,并在身前召唤一个两回合的<影之分身>,若场上没有<影切>标记,则可为一个敌方目标施加<影切>.<br><li>【心剑】该状态下格挡概率加倍,且触发格挡时沉默攻击者直到其回合结束(视为封印技能),心剑状态期间,天剑韧心鬼切无法被邀战(不会成为【决斗】的目标),回合开始时,若敌方的<影切>已解除,则<心剑>立即解除.<br><li>【影切】被<影之分身>锁定,该标记在被标记角色和天剑韧心鬼切累计被<杀>命中次数之和达到5次后解除.<br><li>【影之分身】分身无法被技能和卡牌选中,回合开始时,若敌方<影切>标记已消除,则分身立即消散,否则分身会在本体回合发动技能【天剑·断恶斩】时,对带有<影切>的目标发动相同的技能.',
							},
							filter(event, player) {
								return player.bluefire - player.bluefireused > 0;
							},
							check(event, player) {
								return true;
							},
							content() {
								'step 0';
								game.consumeBF(player, 1);
								player.draw();
								player.addSkill('zhenjianrenxin_xinjian');
								var x = 0;
								for (var i of game.players) {
									if (i.hasSkill('zhenjianrenxin_yingqie')) {
										x++;
									}
								}
								var enemies = player.getEnemies();
								for (var i = 0; i < enemies.length; i++) {
									enemies[i].storage.yingqie = 1;
								}
								if (x == 0) {
									player
										.chooseTarget('请选择标记【影切】的目标', true, function (card, player, target) {
											return target != player && target.storage.yingqie;
										})
										.set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											if (att > 0) return att + 1;
											if (att == 0) return Math.random();
											return att;
										}).animate = false;
								} else {
									event.goto(2);
								}
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.addSkill('zhenjianrenxin_yingqie');
									player.addSkill('zhenjianrenxin_time');
								}
								('step 2');
								var x = 0;
								for (var i of game.players) {
									if (i.hasSkill('yingzhifenshen')) {
										x++;
									}
								}
								if (x == 0 && player.yysCanAddFellow()) {
									var fellow = player.yysAddFellow('qxq_yystianjianrenxinguiqiefenshen');
									fellow.setIdentity('分身');
									if (get.mode() == 'identity' && this.group && this.name.includes('qxq_yys')) {
										if (this.identity == 'zhu' || this.identity == 'zhong') {
											fellow.style.left = 'calc(50% + 10px)';
											fellow.style.top = 'calc(50% + 30px)';
											fellow.identity = 'zhong';
											fellow.setIdentity('忠');
											fellow.identityShown = true;
										}
										if (this.identity == 'fan') {
											fellow.style.left = 'calc(30% + 10px)';
											fellow.style.top = 'calc(50% + 30px)';
											fellow.identity = 'fan';
											fellow.setIdentity('反');
											fellow.identityShown = true;
										}
										if (this.identity == 'nei') {
											fellow.style.left = 'calc(40% + 10px)';
											fellow.style.top = 'calc(30% + 30px)';
											fellow.identity = 'nei';
											fellow.setIdentity('内');
											fellow.identityShown = true;
										}
									} else {
										if (game.yysfellows) {
											fellow.style.left = 'calc(50% + 10px)';
											fellow.style.top = 'calc(50% + 30px)';
											fellow.setIdentity('猜');
											fellow.identityShown = false;
										}
									}
									fellow.maxHp = undefined;
									fellow.hp = undefined;
									fellow.clearSkills(true);
									fellow.addSkill('yingzhifenshen');
									fellow.node.identity.dataset.color = fellow.identity;
									player.line(fellow, 'yellow');
								} else {
									event.goto(3);
								}
								('step 3');
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.skipped = true;
								}
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.finish();
								}
							},
							ai: {
								order() {
									return Infinity;
								},
								expose: 0,
								threaten: 0.4,
								result: {
									player(player) {
										return 1;
									},
								},
							},
							group: ['zhenjianrenxin_renxin', 'zhenjianrenxin_die'],
							subSkill: {
								yingqie: {
									init(player) {
										player.storage.yingqietime = 0;
										player.storage.zhenjianrenxin_yingqie;
									},
									mark: true,
									marktext: '影',
									intro: {
										name: '影切',
										content: '已被添加影切标记.',
									},
									trigger: {
										player: 'damageEnd',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										player.storage.yingqietime++;
										var x = player.countMark('yingqietime');
										for (var i of game.players) {
											if (i.hasSkill('zhenjianrenxin')) {
												var a = i.countMark('yingqietime');
												if (x + a >= 5) {
													player.storage.yingqietime = 0;
													player.removeSkill('zhenjianrenxin_yingqie');
													i.storage.yingqietime = 0;
													i.removeSkill('zhenjianrenxin_time');
												}
											}
										}
									},
								},
								time: {
									init(player) {
										player.storage.yingqietime = 0;
									},
									mark: false,
									trigger: {
										player: 'damageEnd',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										player.storage.yingqietime++;
										var x = player.countMark('yingqietime');
										for (var i of game.players) {
											if (i.hasSkill('zhenjianrenxin_yingqie')) {
												var a = i.countMark('yingqietime');
												if (x + a >= 5) {
													i.storage.yingqietime = 0;
													i.removeSkill('zhenjianrenxin_yingqie');
													player.storage.yingqietime = 0;
													player.removeSkill('zhenjianrenxin_time');
												}
											}
										}
									},
								},
								xinjian: {
									init(player) {
										var x = player.countMark('renxin');
										player.storage.renxin = 2 * x;
										player.addSkill('zhenjianrenxin_xinjianremove');
										player.storage.zhenjianrenxin_xinjian = 2;
									},
									mark: true,
									marktext: '心',
									intro: {
										name: '心剑',
										content: '当前处于心剑状态,该状态下格挡概率加倍,且触发格挡时沉默攻击者直到其回合结束(视为封印技能),心剑状态期间,天剑韧心鬼切无法被邀战(不会成为【决斗】的目标),回合开始时,若敌方的<影切>已解除,则<心剑>立即解除.',
									},
									targetEnabled(card, player, target, now) {
										if (card.name == 'juedou') return false;
									},
								},
								renxin: {
									mark: true,
									marktext: '韧',
									init(player) {
										player.storage.zhenjianrenxin;
										player.storage.renxin = 35;
										player.storage.zhenjianrenxin_renxin = 0;
									},
									intro: {
										name: '真剑·韧心',
										content: '已叠加#层',
									},
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && (player.isTurnedOver() || player.isFrozen == true);
									},
									content() {
										var r = player.countMark('renxin') / 100;
										var s = player.countMark('zhenjianrenxin_renxin');
										if (Math.random() <= r) {
											trigger.cancel();
											player.storage.yysmotive += 10;
											if (s <= 5) {
												player.storage.yysATKx += 15;
											}
											if (player.hasSkill('zhenjianrenxin_xinjian') && trigger.suorce != undefined) {
												trigger.source.addTempSkill('fengyin', { player: 'phaseEnd' });
											}
										}
									},
								},
								die: {
									trigger: {
										player: 'dieBegin',
									},
									forced: true,
									content() {
										trigger.cancel();
										player.storage.yysmotive += 30;
										var h = Math.round(player.maxHp * 0.3);
										player.recover(h);
										player.storage.yyssustainup -= 40;
										player.addSkill('zhenjianrenxin_remove');
									},
								},
								remove: {
									trigger: {
										player: 'phaseZhunbeiBefore',
									},
									forced: true,
									content() {
										player.storage.yyssustainup += 40;
										player.removeSkill('zhenjianrenxin_die');
										player.removeSkill('zhenjianrenxin_remove');
									},
								},
								xinjianremove: {
									trigger: {
										global: 'damageAfter',
										player: 'phaseBefore',
									},
									forced: true,
									filter(event, player) {
										return player.hasSkill('zhenjianrenxin_xinjian');
									},
									content() {
										'step 0';
										if (player.storage.zhenjianrenxin_xinjian > 0) {
											player.storage.zhenjianrenxin_xinjian--;
										} else {
											player.removeSkill('zhenjianrenxin_xinjian');
											var x = player.countMark('renxin');
											player.storage.renxin = Math.round(x / 2);
											player.removeSkill('zhenjianrenxin_xinjianremove');
										}
										('step 1');
										var sum = 0;
										for (var i of game.players) {
											if (i.hasSkill('zhenjianrenxin_yingqie')) {
												sum++;
											}
										}
										if (sum == 0) {
											player.removeSkill('zhenjianrenxin_yingqie');
											var x = player.countMark('renxin');
											player.storage.renxin = Math.round(x / 2);
											player.removeSkill('zhenjianrenxin_xinjianremove');
										}
									},
								},
							},
						},
						tianjianduanezhan: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							init(player) {
								player.storage.tianjianduanezhan = 0;
							},
							enable: 'phaseUse',
							usable: 1,
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/tianjianduanezhan.jpg>`,
							intro: {
								name: '天剑·断恶斩',
								content: '<br><li>凌空起刀,似有鬼兵之影<br>出牌阶段限用一次,若你手牌中的<杀>达到3张,则你可以对一名敌方目标连续使用3张<杀>,分别造成25%、100%、145%的伤害,若目标没有<危>,则给目标添加<危>;<br><li>若处于<心剑>状态,则只需弃置一张手牌发动,并在施放后增加自身40%行动条.<br><li>【危】带有<危>标记的角色减少75%所受的治疗效果(生效一回合),行动条减少5%,降低防御5%(生效一回合),受到天剑韧心鬼切的下一次伤害将转化为体力流失,移除此标记.',
							},
							filter(event, player) {
								if (player.hasSkill('zhenjianrenxin_xinjian') && player.bluefire - player.bluefireused > 0) return true;
								return player.bluefire - player.bluefireused >= 3;
							},
							selectTarget: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								if (player.hasSkill('zhenjianrenxin_xinjian')) {
									game.consumeBF(player, 1);
								} else {
									game.consumeBF(player, 3);
								}
								if (player.hasSkill('zhenjianrenxin_xinjian')) {
									player.storage.yysmotive += 40;
								}
								if (!target.hasSkill('tianjianduanezhan_wei')) {
									target.storage.tjrxadd = 1;
								}
								player.storage.yysDamageup -= 75;
								if (!target.hasSkill('tianjianduanezhan_wei')) {
									target.storage.tjrxadd = 1;
								}
								player.useCard({ name: 'sha' }, target);
								('step 1');
								player.storage.yysDamageup += 75;
								player.useCard({ name: 'sha' }, target);
								('step 2');
								player.storage.yysDamageup += 45;
								player.useCard({ name: 'sha' }, target);
								('step 3');
								if (target.storage.tjrxadd == 1) {
									target.addSkill('tianjianduanezhan_wei');
								}
								target.storage.tjrxadd = 0;
								player.storage.yysDamageup -= 45;
							},
							ai: {
								order() {
									return get.order({ name: 'jiu' }) + get.order({ name: 'sha' }) - 2;
								},
								expose: 0.6,
								threaten: 1,
								result: {
									player(player) {
										for (var i of game.players) {
											if (i.name == 'qxq_yystianjianrenxinguiqiefenshen') {
												return 1;
											}
										}
										return -1;
									},
								},
							},
							subSkill: {
								wei: {
									init(player) {
										player.storage.tianjianduanezhan_wei;
										player.storage.yysrecoverdown += 75;
										player.storage.yysmotive -= 5;
										player.storage.yysDEFx -= 5;
									},
									mark: true,
									marktext: '危',
									trigger: {
										player: ['phaseZhunbeiBegin', 'damageBegin'],
									},
									content() {
										if (trigger.name == 'phaseZhunbei') {
											player.storage.yysrecoverdown -= 75;
											player.storage.yysDEFx += 5;
										} else {
											if (trigger.source && trigger.source.hasSkill('tianjianduanezhan')) {
												player.storage.yysrecoverdown -= 75;
												player.storage.yysDEFx += 5;
												var sum = trigger.num;
												trigger.cancel();
												player.loseHp(sum);
												player.removeSkill('tianjianduanezhan_wei');
											}
										}
									},
								},
							},
						},
						yingzhifenshen: {
							init(player) {
								player.storage.yingzhifenshen = 2;
							},
							trigger: {
								player: ['phaseBegin'],
							},
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								player.storage.yingzhifenshen--;
								var x = 0;
								for (var i of game.players) {
									if (i.hasSkill('zhenjianrenxin_yingqie')) {
										x++;
									}
								}
								if (player.storage.yingzhifenshen == 0 || x == 0) {
									player.removeSkillTrigger('yingzhifenshen_ban');
									player.die();
								} else {
								}
							},
							mod: {
								targetEnabled(card, player, target, now) {
									return false;
								},
								globalTo(from, to, distance, current, player) {
									return Infinity;
								},
							},
							group: ['yingzhifenshen_ban', 'yingzhifenshen_repeat', 'dpcqbnmp', 'dpcqbnhx'],
							subSkill: {
								ban: {
									trigger: {
										player: ['dying', 'dieBegin', 'recoverBegin', 'phaseDrawBegin', 'gainBegin'],
									},
									forced: true,
									filter(event, player) {
										return true;
									},
									content() {
										trigger.cancel();
									},
								},
								repeat: {
									trigger: {
										global: 'useSkillAfter',
									},
									filter(event, player) {
										if (event.skill == 'tianjianduanezhan') return true;
									},
									content() {
										'step 0';
										var list = [];
										for (var i of game.players) {
											if (i.hasSkill('zhenjianrenxin_yingqie')) {
												list.push(i);
											}
										}
										if (list.length == 1) {
											var target = list[0];
											if (!target.hasSkill('tianjianduanezhan_wei')) {
												target.storage.tjrxadd = 1;
											}
											player.storage.yysDamageup -= 75;
											if (!target.hasSkill('tianjianduanezhan_wei')) {
												target.storage.tjrxadd = 1;
											}
											player.useCard({ name: 'sha' }, target);
											player.storage.yysDamageup += 75;
											player.useCard({ name: 'sha' }, target);
											player.storage.yysDamageup += 45;
											player.useCard({ name: 'sha' }, target);
											if (target.storage.tjrxadd == 1) {
												target.addSkill('tianjianduanezhan_wei');
											}
											target.storage.tjrxadd = 0;
											player.storage.yysDamageup -= 45;
										}
									},
								},
							},
						},
						chuwu: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							init(player) {
								player.storage.xinghuomantian_buzhihuo = 0;
								player.storage.chuwucancel = false;
								player.storage.chuwucard = [];
								player.storage.chuwutarget = [];
								player.storage.chuwux = 0;
								player.storage.chuwu = 0;
								player.storage.shatime = 0;
							},
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/chuwu.jpg>`,
							intro: {
								name: '初舞',
								content: '你使用<杀>时视为使用两次,且第二次的<杀>不触发技能,每次命中率均为50%;处于离殇状态时,技能替换为【终舞】.',
							},
							trigger: {
								player: 'shaBefore',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.storage.chuwux == 0;
							},
							forced: true,
							content() {
								'step 0';
								player.storage.chuwux++;
								if (player.storage.shatime >= 2) {
									event.goto(5);
								}
								('step 1');
								if (player.storage.chuwux == 1) {
									var card = game.createCard(trigger.card);
									player.storage.chuwucard.push(card);
									var target = trigger.target;
									player.storage.chuwutarget.push(target);
								}
								('step 2');
								if (player.storage.chuwux <= 2 && player.hasSkill('xinghuomantian_xhjjbuff') && player.storage.xinghuomantian_buzhihuo >= 0) {
									event.goto(3);
								} else {
									if (player.storage.chuwux <= 1 || player.storage.xinghuomantian_time >= 0) {
										event.goto(3);
									} else {
										event.goto(4);
									}
								}
								('step 3');
								var x = Math.random();
								if (x <= 0.5) {
									if (trigger && trigger != undefined) {
										trigger.cancel();
										player.storage.chuwucancel = true;
										game.log('第一次:未命中');
									}
									player.storage.shatime++;
								} else {
									if (trigger && trigger != undefined) {
										trigger.cancel();
									}
								}
								var card = player.storage.chuwucard[0];
								var target = player.storage.chuwutarget[0];
								if (player.storage.chuwucancel == false) {
									player.storage.shatime++;
									player.useCard(card, target)._triggered = null;
									game.log('第一次:已命中');
								}
								var y = Math.random();
								if (y <= 0.5) {
									player.useCard(card, target)._triggered = null;
									game.log('第二次:已命中');
									player.storage.shatime++;
								} else {
									game.log('第二次:未命中');
									player.storage.shatime++;
								}
							},
							group: ['chuwu_shaEnd'],
							subSkill: {
								shaEnd: {
									trigger: {
										player: 'shaEnd',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && player.storage.chuwux == 1 && !player.hasSkill('xinghuomantian_xhjjbuff');
									},
									forced: true,
									silent: true,
									content() {
										player.storage.chuwux = 0;
										player.storage.chuwucancel = false;
										if (!player.hasSkill('xinghuomantian_xhjjbuff')) {
											player.storage.chuwucard.remove(player.storage.chuwucard[0]);
											player.storage.chuwutarget.remove(player.storage.chuwutarget[0]);
										}
									},
									popup: false,
								},
								addtion: {
									audio: 'ext:斗破苍穹X阴阳师/audio:1',
									trigger: {
										player: 'shaBegin',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && player.storage.chuwu_addtionx == 0;
									},
									forced: true,
									content() {
										player.storage.chuwu_addtionx++;
										var card = player.storage.chuwucard[0];
										var target = player.storage.chuwutarget[0];
										var x = Math.random();
										player.storage.chuwu_addtionx = 1;
										if (x <= 0.5) {
											game.log('第三次:未命中');
											if (trigger && trigger != undefined) {
												trigger.cancel();
											}
											player.storage.shatime++;
										} else {
											player.useCard(card, target)._triggered = null;
											game.log('第三次:已命中');
											player.storage.shatime++;
										}
										var y = Math.random();
										if (y <= 0.5) {
											player.useCard(card, target)._triggered = null;
											game.log('第四次:已命中');
											player.storage.shatime++;
										} else {
											game.log('第四次:未命中');
											player.storage.shatime++;
										}
									},
								},
							},
						},
						zhongwu: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							init(player) {
								player.addSkill('lige');
								player.addSkill('jinranbuye');
								player.removeSkill('chuwu');
								player.removeSkill('xinghuomantian');
								player.removeSkill('liying');
								player.storage.zhongwux = 0;
								player.storage.zhongwu = 0;
							},
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/zhongwu.jpg>`,
							intro: {
								name: '终舞',
								content: '你使用<杀>时视为使用两次,且第二次的<杀>不触发技能,每次命中率均为75%.',
							},
							trigger: {
								player: 'shaBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.storage.zhongwux == 0;
							},
							forced: true,
							content() {
								player.storage.zhongwux++;
								var x = Math.random();
								player.storage.zhongwux = 1;
								if (x <= 0.25) {
									trigger.cancel();
									game.log('第一次:未命中');
								} else {
									game.log('第一次:已命中');
								}
								var card = game.createCard(trigger.card);
								var y = Math.random();
								if (y <= 0.75) {
									player.useCard(card, trigger.target)._triggered = null;
									game.log('第二次:已命中');
								} else {
									game.log('第二次:未命中');
								}
							},
							group: ['zhongwu_shaEnd'],
							subSkill: {
								shaEnd: {
									trigger: {
										player: 'shaEnd',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.player.storage.zhongwux == 1;
									},
									forced: true,
									content() {
										player.storage.zhongwux = 0;
									},
								},
							},
						},
						liying: {
							audio: 'ext:斗破苍穹X阴阳师/audio:3',
							init(player) {
								player.storage.liying = 0;
							},
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/liying.jpg>`,
							intro: {
								name: '离影',
								content: '若自身或友方在回合中使用<杀>或回合开始时处于控制状态,则不知火有50%概率起舞,牺牲当前生命值5%(累计达到100%时失去一点体力),使友方获得35%概率的<庇护>,该效果持续一回合,若当前存在<星火结界>,则起舞概率为100%.<br><li>【施放】自身生命值低于50%时可主动施放并进入<离殇>状态,主动进入<离殇>状态时,施放一次无消耗的【烬染不夜】(此【烬染不夜】不视为主动施放),或受到致命伤害时自动施放,施放后移除身上所有增益及减益效果,同时移除所有标记,回复至满体力进入离殇姿态并永久提升30点暴击率,并将技能替换为【离歌】.',
							},
							trigger: {
								global: ['phaseBegin', 'shaAfter'],
							},
							forced: true,
							filter(event, player, target) {
								return player.getFriends().includes(event.player) || event.player == player;
							},
							content() {
								'step 0';
								if (trigger.name == 'sha') {
									event.goto(1);
								} else {
									if (trigger.name == 'phase' && (player.isTurnedOver() || player.isFrozen == true)) {
										event.goto(1);
									} else {
										event.goto(2);
									}
								}
								('step 1');
								if (player.storage.xinghuomantian > 0) {
									if (!player.hasSkill('liying_loseHp')) {
										player.addSkill('liying_loseHp');
									}
									player.storage.liying_loseHp += 5;
									if (!trigger.player.hasSkill('bihu') && Math.random() < 0.35) {
										player.line(trigger.player, 'water');
										trigger.player.addSkill('bihu');
									}
								} else {
									if (Math.random() <= 0.5) {
										if (!player.hasSkill('liying_loseHp')) {
											player.addSkill('liying_loseHp');
										}
										player.storage.liying_loseHp += 5;
										if (!trigger.player.hasSkill('bihu') && Math.random() < 0.35) {
											player.line(trigger.player, 'water');
											trigger.player.addSkill('bihu');
										}
									}
								}
								('step 2');
								if (player.storage.shatime > 0 && player.storage.shatime <= 4) {
									player.removeSkill('chuwu');
								} else {
									player.storage.shatime = 0;
									player.addSkill('chuwu');
								}
								event.finish();
							},
							group: ['liying_die', 'update_buzhihuonodie', 'update_buzhihuonodiex', 'liying_useCard', 'record'],
							subSkill: {
								loseHp: {
									init(player) {
										player.storage.liying_loseHp = 0;
									},
									mark: true,
									marktext: '离',
									intro: {
										name: '离影',
										content: '已损失体力#%,损失100%时流失一点体力.',
									},
									trigger: {
										global: ['shaAfter', 'phaseAfter'],
									},
									filter(event, player) {
										return player.storage.liying_loseHp >= 100;
									},
									forced: true,
									content() {
										player.loseHp();
										player.storage.liying_loseHp -= 100;
										if (player.storage.liying_loseHp <= 0) {
											player.removeSkill('liying_loseHp');
										} else {
										}
									},
								},
								die: {
									mark: true,
									marktext: '离',
									init(player) {
										player.storage.die = false;
									},
								},
								useCard: {
									trigger: {
										player: 'useCardEnd',
									},
									forced: true,
									content() {
										player.addSkill('chuwu');
									},
								},
							},
						},
						lige: {
							init(player) {
								if (player.storage.actu != undefined) {
									player.bluefireused = player.storage.actu;
									game.updateBlueFire(player);
									delete player.storage.actu;
								}
								player.storage.lige = 0;
							},
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/lige.jpg>`,
							intro: {
								name: '离歌',
								content: '你受到伤害后,回复70%生命上限的体力值(至少为一点),你的每个回合开始时,你减少30%体力上限,同时你每有一张手牌,便增加5%行动条;主动施放【烬染不夜】后,你的手牌中每剩余一张<杀>,便有50%的概率对一名随机敌方目标使用一张<杀>(此<杀>不会消耗卡牌).',
							},
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return player.maxHp > 0;
							},
							forced: true,
							content() {
								var x = Math.round(player.maxHp * 0.7);
								var y = Math.max(x, 1);
								player.recover(y);
							},
							group: ['lige_phase', 'lige_useBefore', 'lige_useAfter'],
							subSkill: {
								phase: {
									trigger: {
										player: 'phaseBegin',
									},
									filter(event, player) {
										return player.maxHp > 0;
									},
									forced: true,
									round: 1,
									content() {
										var m = Math.round(player.maxHp * 0.3);
										if (m >= 1) {
											player.loseMaxHp(m);
											game.log(player, '失去了', m, '点体力上限!');
										}
										var h = player.countCards('h');
										if (h > 0) {
											player.storage.yysmotive += 5 * h;
										}
									},
								},
								useBefore: {
									trigger: {
										player: 'useSkillBefore',
									},
									filter(event, player) {
										return event.skill == 'jinranbuye' && player.countCards('h', { name: 'sha' }) > 0;
									},
									silent: true,
									forced: true,
									content() {
										player.removeSkill('chuwu');
										player.removeSkill('zhongwu');
									},
									popup: false,
								},
								useAfter: {
									trigger: {
										player: 'useSkillAfter',
									},
									filter(event, player) {
										return event.skill == 'jinranbuye' && player.countCards('h', { name: 'sha' }) >= 0 && player.storage.jrby > 0;
									},
									silent: true,
									forced: true,
									content() {
										'step 0';
										var h = player.countCards('h', { name: 'sha' });
										var enemies = player.getEnemies();
										for (var i = 0; i < h; h--) {
											var enemy = enemies.randomGet();
											player.line(enemy, 'fire');
											player.useCard({ name: 'sha' }, enemy);
										}
										('step 1');
										player.addSkill('zhongwu');
									},
									popup: false,
								},
							},
						},
						xinghuomantian: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							init(player) {
								player.storage.xinghuomantian = 0;
							},
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/xinghuomantian.jpg>`,
							intro: {
								name: '星火满天',
								content: '出牌阶段限用一次,消耗两张<杀>或<酒>,创造存在两回合的<星火结界>,若已存在结界,则刷新回合数,<星火结界>内的友方全体提升10%伤害,10%减伤;结界中的友方,在其回合使用<杀>后,100%概率对目标额外使用一张不触发技能效果的<杀>,处于<离殇>状态时,该技能替换为【烬染不夜】.<br><li>【先机】游戏开始时,施放【星火满天】.<br><li>当前结界剩余#回合.',
							},
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.bluefire - player.bluefireused >= 2;
							},
							contentBefore() {
								game.consumeBF(player, 2);
								player.$fullscreenpop('<font color=cyan>星火满天</font>');
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/xinghuojiejie.jpg');
								}, player);
							},
							content() {
								game.uiShow(player, 3);
								player.storage.xinghuomantian = 2;
								var t = player.countMark('xinghuomantian');
								player.storage.xhjjbuffadd = t;
								var friend = player.getFriends();
								friend.push(player);
								for (var i = 0; i < friend.length; i++) {
									friend[i].storage.xhjjbuffadd = t;
									if (!friend[i].hasSkill('xinghuomantian_xhjjbuff')) {
										friend[i].storage.yysDamageup += 10;
										friend[i].storage.yyssustainup -= 10;
										friend[i].addSkill('xinghuomantian_xhjjbuff');
										friend[i].addSkill('xinghuomantian_xhjjbuffEnd');
									}
								}
								player.addSkill('xinghuomantian_xhjjbuffcheck');
							},
							ai: {
								order() {
									return get.order({ name: 'jiu' }) + get.order({ name: 'sha' });
								},
								result: {
									expose: 0,
									threaten: 0.9,
									player(player) {
										if (player.storage.xinghuomantian == 0) return 1;
										if (player.storage.xinghuomantian >= 1 && player.bluefire - player.bluefireused > 2) return 1;
									},
								},
							},
							group: ['xinghuomantian_gameStart'],
							subSkill: {
								gameStart: {
									trigger: {
										global: 'gameStart',
									},
									forced: true,
									_priority: 5201314,
									content() {
										'step 0';
										player.$fullscreenpop('<font color=cyan>先机:星火满天!</font>');
										('step 1');
										player.$fullscreenpop('<font color=cyan>星火满天</font>');
										game.broadcastAll(function (player) {
											ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/xinghuojiejie.jpg');
										}, player);
										player.storage.xinghuomantian = 3;
										var t = player.countMark('xinghuomantian');
										player.storage.xhjjbuffadd = t;
										var friend = player.getFriends();
										if (!friend.includes(player)) friend.push(player);
										for (var i = 0; i < friend.length; i++) {
											friend[i].storage.xhjjbuffadd = t;
											if (!friend[i].hasSkill('xinghuomantian_xhjjbuff')) {
												friend[i].storage.yysDamageup += 10;
												friend[i].storage.yyssustainup -= 10;
												friend[i].addSkill('xinghuomantian_xhjjbuff');
												friend[i].addSkill('xinghuomantian_xhjjbuffEnd');
											}
										}
										if (!player.hasSkill('xinghuomantian_xhjjbuffcheck')) player.addSkill('xinghuomantian_xhjjbuffcheck');
									},
								},
								xhjjbuff: {
									init(player) {
										player.storage.xhjjx = 0;
									},
									trigger: {
										player: 'shaBegin',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && player.storage.xhjjx == 0;
									},
									forced: true,
									content() {
										game.log('星火满天效果:额外出杀一次.');
										var x = ['1', '2'].randomGet();
										if (x == '1') {
											game.playdpcq('xinghuomantian1');
										}
										if (x == '2') {
											game.playdpcq('xinghuomantian2');
										}
										player.storage.xhjjx = 1;
										if (player.name != 'qxq_yys_buzhihuo') {
											player.storage.xhjjx = 1;
											var card = game.createCard(trigger.card);
											player.useCard(card, trigger.target)._triggered = null;
										} else {
											if (player.storage.xinghuomantian_buzhihuo >= 0) {
												player.storage.xinghuomantian_buzhihuo--;
												player.storage.chuwux = 0;
												player.useSkill('chuwu_addtion');
												player.removeSkill('chuwu_shaEnd');
											}
										}
									},
								},
								xhjjbuffEnd: {
									trigger: {
										player: 'shaAfter',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && player.storage.xhjjx == 1;
									},
									forced: true,
									silent: true,
									content() {
										player.storage.xhjjx = 0;
										if (player.storage.yysjianglingRandom && player.storage.yysjianglingRandom[0] == 'qxq_yys_buzhihuo') {
											player.storage.chuwucard.remove(player.storage.chuwucard[0]);
											player.storage.chuwutarget.remove(player.storage.chuwutarget[0]);
											if (player.storage.chuwux != 0) {
												player.useSkill('chuwu_shaEnd');
											}
										}
									},
									popup: false,
								},
								xhjjbuffcheck: {
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									content() {
										if (player.storage.xinghuomantian == 0 || player.storage.xhjjbuffadd == 0) {
											player.removeSkill('xinghuomantian_xhjjbuff');
											player.removeSkill('xinghuomantian_xhjjbuffEnd');
											player.storage.yyssustainup += 10;
											player.storage.yysDamageup -= 10;
											var friend = player.getFriends();
											for (var i = 0; i < friend.length; i++) {
												friend[i].storage.xhjjbuffadd = 0;
												friend[i].removeSkill('xinghuomantian_xhjjbuff');
												friend[i].removeSkill('xinghuomantian_xhjjbuffEnd');
												friend[i].storage.yyssustainup += 10;
												friend[i].storage.yysDamageup -= 10;
											}
											player.removeSkill('xinghuomantian_xhjjbuffcheck');
											game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
										} else {
											player.storage.xinghuomantian--;
											player.storage.xhjjbuffadd--;
										}
									},
								},
							},
						},
						jinranbuye: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							init(player) {
								player.storage.jrby = 1;
								player.storage.frienddead = 0;
								player.storage.jinranbuye = 0;
							},
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/jinranbuye.jpg>`,
							intro: {
								name: '烬染不夜',
								content: '出牌阶段限用一次,消耗四张牌,对全体敌方使用一张<杀>;场上每有一名友方角色阵亡,发动所需卡牌数-1.',
							},
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.bluefire - player.bluefireused + game.dead.filter((q) => q.isFriendsOf(player, true)).length >= 4;
							},//QQQ
							contentBefore() {
								player.removeSkillTrigger('zhongwu');
								player.removeSkillTrigger('chuwu');
							},
							async content(event, trigger, player) {
								game.consumeBF(player, Math.max(4 - game.dead.filter((q) => q.isFriendsOf(player, true)).length, 0));
								for (const i of player.getEnemies()) {
									await player.useCard({ name: 'sha' }, i);
								}
							},
							contentAfter() {
								player.addSkillTrigger('zhongwu');
							},
							ai: {
								order(item, player) {
									var x = 12;
									for (var i of game.players) {
										if (get.mode() == 'identity' && i.identity == player.identity) {
											x--;
										}
										if (get.mode() != 'identity' && i.group == player.group) {
											x--;
										}
									}
									return x;
								},
								expose: 1,
								threaten: 1.2,
								result: {
									player(player) {
										var num = 0;
										for (var i of game.players) {
											if (get.mode() == 'identity' && i.identity == player.identity) {
												num++;
											}
											if (get.mode() != 'identity' && i.group == player.group) {
												num++;
											}
										}
										if (num < 4 && player.bluefire - player.bluefireused > 5) return 1;
										if (num < 3 && player.bluefire - player.bluefireused > 4) return 1;
										if (num < 2 && player.bluefire - player.bluefireused > 3) return 1;
										if (num < 1 && player.bluefire - player.bluefireused >= 2) return 1;
									},
								},
							},
						},
						update: {
							subSkill: {
								buzhihuonodie: {
									trigger: {
										player: 'dieBegin',
									},
									silent: true,
									forced: true,
									content() {
										'step 0';
										trigger.cancel();
										('step 1');
										var r = ['1', '2', '3', '4'].randomGet();
										if (r == '1') {
											game.playdpcq('liying1');
										}
										if (r == '2') {
											game.playdpcq('liying2');
										}
										if (r == '3') {
											game.playdpcq('liying3');
										}
										if (r == '4') {
											game.playdpcq('liying4');
										}
										game.AbsReduce(player);
										player.storage.yysCS += 30;
										var h = player.hp;
										var m = player.maxHp;
										player.recover(m - h);
										player.removeSkill('undefined_buzhihuonodie');
										player.removeSkill('undefined_buzhihuonodiex');
										player.storage.xinghuomantian = 0;
										player.storage.xhjjbuffadd = 0;
										player.useSkill('xinghuomantian_xhjjbuffcheck');
										player.addSkill('zhongwu');
									},
									popup: false,
								},
								buzhihuonodiex: {
									enable: 'phaseUse',
									filter(event, player) {
										return player.hp <= player.maxHp * 0.5;
									},
									silent: true,
									content() {
										'step 0';
										var r = ['1', '2', '3', '4'].randomGet();
										if (r == '1') {
											game.playdpcq('liying1');
										}
										if (r == '2') {
											game.playdpcq('liying2');
										}
										if (r == '3') {
											game.playdpcq('liying3');
										}
										if (r == '4') {
											game.playdpcq('liying4');
										}
										game.AbsReduce(player);
										player.storage.yysCS += 30;
										var h = player.hp;
										var m = player.maxHp;
										player.recover(m - h);
										player.removeSkill('undefined_buzhihuonodie');
										player.removeSkill('undefined_buzhihuonodiex');
										player.storage.xinghuomantian = 0;
										player.storage.xhjjbuffadd = 0;
										player.useSkill('xinghuomantian_xhjjbuffcheck');
										player.$fullscreenpop('<font color=red>烬染不夜</font>');
										player.storage.jrby = 0;
										player.removeSkill('chuwu');
										player.removeSkill('liying');
										player.removeSkill('xinghuomantian');
										var ACT = player.bluefireused;
										player.storage.actu = ACT;
										('step 3');
										player.useSkill('jinranbuye')._triggered = null;
										player.addSkill('zhongwu');
									},
									forced: true,
									popup: false,
									ai: {
										order: 10,
										result: {
											player(player) {
												var list = player.getFriends();
												if ((!list || list.length <= 1) && (!player.indetity || (player.identity && player.identity != 'nei')) && player.hp < 2 && player.countCards('h', { name: 'sha' }) > 1) {
													return 1;
												} else {
													return -1;
												}
											},
										},
									},
								},
							},
						},
						record: {
							trigger: {
								global: 'gameStart',
							},
							mark: false,
							forced: true,
							silent: true,
							init(player) {
								player.storage.record = [];
							},
							content() {
								for (var i of game.players) {
									if (player.getFriends().includes(i) && player != i) {
										player.storage.record.push(i);
									}
								}
								var x = player.storage.record.length;
								lib.config.jrbyrecordA = x;
								game.saveConfig('jrbyrecordA', lib.config.jrbyrecordA);
							},
							popup: false,
						},
						yhfanhunxiang: {
							mark: false,
							nobracket: true,
							init(player) {
								player.storage.yhfanhunxiang = 0;
							},
							trigger: {
								player: ['useCardAfter'],
							},
							forced: true,
							filter(event, player, card) {
								return get.type(event.card) == 'yuhun' && (event.card.name == 'yhfanhunxiangA' || event.card.name == 'yhfanhunxiangB' || event.card.name == 'yhfanhunxiangC' || event.card.name == 'yhfanhunxiangD' || event.card.name == 'yhfanhunxiangE' || event.card.name == 'yhfanhunxiangF');
							},
							content() {
								'step 0';
								player.storage.yhfanhunxiang = 0;
								('step 1');
								var es = trigger.player.storage.yh_;
								for (var i = 0; i < es.length; i++) {
									if (get.subtype(es[i]) == 'yuhun1') {
										if (es[i].name == 'yhfanhunxiangA') {
											player.storage.yhfanhunxiang++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun2') {
										if (es[i].name == 'yhfanhunxiangB') {
											player.storage.yhfanhunxiang++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun3') {
										if (es[i].name == 'yhfanhunxiangC') {
											player.storage.yhfanhunxiang++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun4') {
										if (es[i].name == 'yhfanhunxiangD') {
											player.storage.yhfanhunxiang++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun5') {
										if (es[i].name == 'yhfanhunxiangE') {
											player.storage.yhfanhunxiang++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun6') {
										if (es[i].name == 'yhfanhunxiangF') {
											player.storage.yhfanhunxiang++;
										}
									}
								}
								if (player.storage.yhfanhunxiang == 2 && !player.hasSkill('yhfanhunxiang_yysRES')) {
									player.addSkill('yhfanhunxiang_yysRES');
								}
								('step 2');
								if (player.storage.yhfanhunxiang >= 4 && !player.hasSkill('yhfanhunxiang_fhx')) {
									player.addSkill('yhfanhunxiang_fhx');
									game.log(player, '完全激活了返魂香套装效果(拥有此套装时,受到伤害时有15%概率令伤害来源晕眩)!');
								}
							},
							subSkill: {
								fhx: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yhfanhunxiang.jpg>`,
									intro: {
										name: '返魂香——四件套',
										content: '受到伤害时有(15%+效果命中)概率令伤害来源晕眩.',
									},
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									filter(event, player, card) {
										return event.source && event.source != undefined;
									},
									content() {
										var sum = player.storage.yysINF / 100;
										var sumx = trigger.source.storage.yysRES / 100;
										if (Math.random() <= 0.15 + sum) {
											if (Math.random() < sumx) {
												trigger.source.popup('抵抗');
											} else {
												trigger.source.addSkill('dizzy');
												game.log(trigger.source, '陷入晕眩状态!');
											}
										}
									},
								},
								yysRES: {
									mark: false,
									init(player) {
										player.storage.yysRES += 15;
									},
								},
							},
						},
						shengsijuedou: {
							onremove(player) { },
							enable: 'phaseUse',
							forced: true,
							filter(event, player) {
								if (event.skill) return false;
								return true;
							},
							selectTarget: 1,
							filterTarget: true,
							content() {
								'step 0';
								game.addGlobalSkill('ssjdremove');
								('step 1');
								player.insertEvent('shengsijuedou', lib.skill.shengsijuedou.content_phase);
								player.storage.shengsijuedou = [];
								player.storage.shengsijuedou.push(player);
								player.storage.shengsijuedou.push(target);
								target.storage.shengsijuedou = [];
								target.storage.shengsijuedou.push(target);
								target.storage.shengsijuedou.push(player);
								event.list = player.storage.shengsijuedou;
								event.exlist = [];
								event.list.sortBySeat();
								for (var i of game.players) {
									if (!event.list.includes(i)) {
										i.out('shengsijuedou');
										event.exlist.push(i);
									}
								}
								player.storage.exshengsijuedou = event.exlist;
								target.storage.exshengsijuedou = event.exlist;
								player.addSkill('shengsijuedouanger');
								target.addSkill('shengsijuedouanger');
							},
							content_phase() {
								'step 0';
								event.list = player.storage.shengsijuedou;
								('step 1');
								if (event.list.length) {
									var pl = event.list.shift();
									pl.storage.shengsijuedouanger++;
									pl.phase('shengsijuedou');
									event.redo();
								}
							},
							ai: {
								threaten: 1.5,
							},
						},
						ssjdremove: {
							trigger: {
								global: ['dieAfter'],
							},
							_priority: 56123154,
							forced: true,
							content() {
								let list = [];
								for (var i of game.players) {
									if (i.storage.shengsijuedou) {
										list = i.storage.shengsijuedou;
									}
								}
								let exlist = [];//QQQ
								for (var i of game.players) {
									if (i.storage.exshengsijuedou) {
										exlist = i.storage.exshengsijuedou;
									}
								}
								for (const b of list) {
									b.removeSkill('shengsijuedouanger');
									delete b.storage.shengsijuedouanger;
								}
								delete player.storage.shengsijuedou;
								for (const i of exlist) {
									i.in('shengsijuedou');
								}
								for (var i of game.players) {
									if (i.storage.exshengsijuedou) {
										delete i.storage.exshengsijuedou;
									}
								}
								game.removeGlobalSkill('ssjdremove');
							},
						},
						shengsijuedouanger: {
							init(player) {
								player.storage.shengsijuedouanger = 0;
							},
							mark: true,
							marktext: '怒',
							intro: {
								name: '怒气值',
								content(storage, player) {
									var str = '每个回合开始时获得一点怒气值,怒气值越高,造成伤害越高.';
									if (player.storage.shengsijuedouanger >= 0) {
										str += `<br>当前怒气值为:${player.storage.shengsijuedouanger}.`;
									}
									if (player.storage.shengsijuedouanger >= 0) {
										str += `<br>当前造成伤害增加:${Math.round(player.countMark('shengsijuedouanger') / 3)}点.`;
									}
									return str;
								},
							},
							trigger: {
								source: 'damageBegin',
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								if (trigger.name == 'damage') {
									var x = Math.round(player.countMark('shengsijuedouanger') / 3);
									trigger.num += x;
								} else {
									player.storage.shengsijuedouanger++;
								}
							},
						},
						penglaiyuzhi: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							nobracket: true,
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return (event.player.name.includes('qxq_yys') || event.player.hasSkill('yysjiangling') || event.player.hasSkill('yysjianglingRandom')) && event.card && event.card.name == 'sha';
							},
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/penglaiyuzhi.jpg>`,
							mark: true,
							init(player) {
								player.storage.penglaiyuzhi = 0;
							},
							intro: {
								name: '蓬莱玉枝',
								content: '你对<阴阳师>势力的角色造成伤害时,有10%概率减少其所在阵营一点鬼火.',
							},
							forced: true,
							content() {
								var Enemy = trigger.player.getFriends();
								Enemy.push(trigger.player);
								if (Math.random() <= 0.1) {
									game.loseBF(trigger.player, 1);
								}
							},
						},
						huoshuqiu: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							nobracket: true,
							trigger: {
								global: 'useCard',
							},
							filter(event, player, card) {
								return event.targets.length == 1 && event.targets.includes(player) && get.tag(event.card, 'damage') && !player.hasSkill('huoshuqiu_huanjingbuff');
							},
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/huoshuqiu.jpg>`,
							mark: true,
							init(player) {
								player.storage.huoshuqiu = 0;
							},
							intro: {
								name: '火鼠裘',
								content: '你成为伤害型卡牌的目标时,有20%的概率获得一点鬼火.在<蓬莱幻境>中,所有友方角色成为伤害型卡牌的目标时,所在阵营有20%的概率获得一点鬼火.',
							},
							forced: true,
							content() {
								if (Math.random() <= 0.2) {
									game.getBF(player, 1);
								}
							},
							subSkill: {
								huanjingbuff: {
									trigger: {
										global: ['phaseBegin', 'useCard'],
									},
									filter(event, player, card) {
										if (event.name == 'useCard') return event.targets.length == 1 && event.targets.includes(player) && get.tag(event.card, 'damage');
										if (event.name == 'phase') return event.player.isFriendsOf(player);
									},
									forced: true,
									content() {
										if (trigger.name == 'useCard') {
											if (Math.random() <= 0.2) {
												game.getBF(player, 1);
											}
										} else {
											if (Math.random() <= 0.67) {
												game.getBF(player, 1);
											}
										}
									},
								},
							},
						},
						longshouzhiyu: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							init(player) {
								player.storage.longshouzhiyu = 0;
							},
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/longshouzhiyu.jpg>`,
							intro: {
								name: '龙首之玉',
								content: '出牌阶段限用一次,消耗两张<闪>或<桃>,创造存在两回合的<蓬莱幻境>,若已存在幻境,则只需消耗一张牌,并刷新回合数,<蓬莱幻境>内的友方全体提升25%防御,20%效果抵抗;结界中的友方,在其回合开始前有67%的概率获得一点鬼火.<br><li>【先机】游戏开始时,施放【龙首之玉】.<br><li>当前结界剩余#回合.',
							},
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (!player.hasSkill('huoshuqiu_huanjingbuff')) return player.bluefire - player.bluefireused >= 2;
								if (player.hasSkill('huoshuqiu_huanjingbuff')) return player.bluefire - player.bluefireused >= 1;
							},
							contentBefore() {
								if (!player.hasSkill('huoshuqiu_huanjingbuff')) game.consumeBF(player, 2);
								if (player.hasSkill('huoshuqiu_huanjingbuff')) game.consumeBF(player, 1);
								player.$fullscreenpop('<font color=cyan>龙首之玉</font>');
								game.broadcastAll(function (player) {
									ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/penglaihuanjing.jpg');
								}, player);
							},
							content() {
								player.storage.longshouzhiyu = 2;
								var t = player.countMark('longshouzhiyu');
								player.storage.huanjingbuffadd = t;
								var friend = player.getFriends();
								friend.push(player);
								for (var i = 0; i < friend.length; i++) {
									friend[i].storage.huanjingbuffadd = t;
									if (!friend[i].hasSkill('huoshuqiu_huanjingbuff')) {
										friend[i].storage.yysDEFx += 25;
										friend[i].storage.yysRES += 20;
										friend[i].addSkill('huoshuqiu_huanjingbuff');
									}
								}
								player.addSkill('longshouzhiyu_huanjingbuffcheck');
							},
							ai: {
								order() {
									return get.order({ name: 'shan' }) + get.order({ name: 'tao' });
								},
								result: {
									expose: 0,
									threaten: 0.4,
									player(player) {
										if (player.storage.longshouzhiyu == 0) return 1;
										if (player.hp >= 2 && player.storage.longshouzhiyu >= 1 && player.bluefire - player.bluefireused > 2) return 1;
									},
								},
							},
							group: ['longshouzhiyu_gameStart'],
							subSkill: {
								gameStart: {
									trigger: {
										global: 'gameStart',
									},
									forced: true,
									_priority: 5211314,
									content() {
										'step 0';
										player.$fullscreenpop('<font color=cyan>先机:龙首之玉!</font>');
										('step 1');
										player.$fullscreenpop('<font color=cyan>龙首之玉</font>');
										game.broadcastAll(function (player) {
											ui.background.setBackgroundImage('extension/斗破苍穹X阴阳师/jntx/penglaihuanjing.jpg');
										}, player);
										player.storage.longshouzhiyu = 3;
										var t = player.countMark('longshouzhiyu');
										player.storage.huanjingbuffadd = t;
										var friend = player.getFriends();
										friend.push(player);
										for (var i = 0; i < friend.length; i++) {
											friend[i].storage.huanjingbuffadd = t;
											if (!friend[i].hasSkill('huoshuqiu_huanjingbuff')) {
												friend[i].storage.yysDEFx += 25;
												friend[i].storage.yysRES += 20;
												friend[i].addSkill('huoshuqiu_huanjingbuff');
											}
										}
										player.addSkill('longshouzhiyu_huanjingbuffcheck');
									},
								},
								huanjingbuffcheck: {
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									content() {
										if (player.storage.longshouzhiyu == 0 || player.storage.xhjjbuffadd == 0) {
											var friend = player.getFriends();
											friend.push(player);
											for (var i = 0; i < friend.length; i++) {
												friend[i].storage.xhjjbuffadd = 0;
												friend[i].removeSkill('huoshuqiu_huanjingbuff');
												friend[i].storage.yysDEFx -= 25;
												friend[i].storage.yysRES -= 20;
											}
											player.removeSkill('longshouzhiyu_huanjingbuffcheck');
											game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
										} else {
											player.storage.longshouzhiyu--;
											player.storage.xhjjbuffadd--;
										}
									},
								},
							},
						},
						hunzhihuo: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/hunzhihuo.jpg>`,
							mark: true,
							init(player) {
								player.storage.hunzhihuo = 0;
							},
							nobracket: true,
							intro: {
								name: '魂之火',
								content: '使用<杀>时,有50%概率获得一点鬼火,否则你有50%概率摸一张牌.',
							},
							trigger: {
								player: 'shaBefore',
							},
							forced: true,
							content() {
								if (Math.random() <= 0.5) {
									game.getBF(player, 1);
								} else {
									if (Math.random() <= 0.5) {
										player.draw();
									}
								}
							},
						},
						huofuxiangsheng: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/huofuxiangsheng.jpg>`,
							mark: true,
							init(player) {
								player.storage.huofuxiangsheng = 0;
							},
							nobracket: true,
							intro: {
								name: '祸福相生',
								content: '出牌阶段限一次,牺牲当前20%生命值,获得3点鬼火.',
							},
							enable: 'phaseUse',
							usable: 1,
							content() {
								var h = Math.round(player.hp * 0.2);
								if (h > 0) {
									player.loseHp(h);
								}
								game.getBF(player, 3);
							},
							ai: {
								order: 7,
								result: {
									player(player) {
										if (get.mode() == 'identity' && (player.identity == 'zhu' || player.identity == 'zhong') && lib.config.BluefireProcesszhu <= 3 && player.bluefire - player.bluefireused <= 3) {
											return 1;
										}
										if (get.mode() == 'identity' && player.identity == 'fan' && lib.config.BluefireProcessfan <= 3 && player.bluefire - player.bluefireused <= 3) {
											return 1;
										}
										if (get.mode() == 'identity' && player.identity == 'nei' && lib.config.BluefireProcessnei <= 3 && player.bluefire - player.bluefireused <= 3) {
											return 1;
										}
										if (get.mode() != 'identity' && lib.config.BluefireProcessgroup <= 3 && player.bluefire - player.bluefireused <= 3) {
											return 1;
										}
									},
								},
							},
						},
						fuyunchanglong: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/fuyunchanglong.jpg>`,
							mark: true,
							init(player) {
								player.storage.fuyunchanglong = 0;
							},
							nobracket: true,
							intro: {
								name: '福运昌隆',
								content: '游戏开始时,获得3点鬼火.',
							},
							trigger: {
								global: 'phaseBefore',
							},
							_priority: 10086,
							filter(event, player) {
								return player.storage.getBF == false;
							},
							forced: true,
							content() {
								player.storage.getBF = true;
								game.getBF(player, 3);
							},
							group: ['fuyunchanglong_storage'],
							subSkill: {
								storage: {
									trigger: {
										global: 'gameStart',
									},
									forced: true,
									content() {
										player.storage.getBF = false;
									},
								},
							},
						},
						fengtuishi: {
							nobracket: true,
							trigger: {
								player: 'damageBefore',
							},
							filter(event, player) {
								var num = 0;
								for (var i of game.players) {
									if (player != i && player.inRange(i)) num++;
								}
								return event.nature && event.nature == 'fire' && player.countCards('h') >= 3 && num > 0;
							},
							check(event, player) {
								var num = 0;
								for (var i of game.players) {
									if (player != i && player.inRange(i) && get.attitude(i, player) <= 0) num++;
								}
								if (num > 0 && player.countCards('he') > 4) return true;
								return false;
							},
							content() {
								'step 0';
								var ds = player.chooseToDiscard(3, true);
								var prompt2 = '选择要转移的目标';
								player
									.chooseTarget(get.prompt('fengtuishi'), function (card, player, target) {
										var player = _status.event.player;
										return target != player && player.inRange(target);
									})
									.set('prompt2', prompt2)
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.attitude(target, player) <= 0;
									})
									.set('card', trigger.card)
									.set('targets', trigger.targets);
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets && event.targets[0]) {
									player.line(event.targets[0], 'red');
									trigger.player = event.targets[0];
									player.storage.fzjys++;
								}
							},
						},
						liefengxuanwu: {
							init(player) {
								player.storage.liefengxuanwu = [`当前<裂>标记数:${player.storage.liefengxuanwu_lie || 0}.`];
							},
							nobracket: true,
							enable: 'phaseUse',
							usable: 1,
							selectCard: 2,
							filterCard: true,
							selectTarget: 1,
							filterTarget: true,
							filter(event, player) {
								return player.countCards('h') >= 2;
							},
							content() {
								'step 0';
								player.storage.fzjys++;
								target.addSkill('liefengxuanwu_lie');
								target.storage.liefengxuanwuSource = [];
								target.storage.liefengxuanwuSource.push(player);
								('step 1');
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.skipped = true;
								}
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.finish();
								}
								player.storage.liefengxuanwu = [`当前<裂>标记数:${player.storage.liefengxuanwu_lie || 0}.`];
							},
							ai: {
								order: 15,
								result: {
									damage: 2,
									player(player) {
										if (player.countCards('h') > 2) return 1;
									},
								},
							},
							subSkill: {
								lie: {
									init(player) {
										player.storage.liefengxuanwu_lie = 2;
									},
									mark: true,
									unseen: true,
									marktext: '裂',
									intro: {
										name: '裂风旋舞',
										content: '每使用一张牌,将受到来自【云韵】的一张<杀>并移除一个标记,或【云韵】的回合开始时,移除此标记.当前标记数:#.',
									},
									trigger: {
										player: 'useCardAfter',
										global: 'phaseBegin',
									},
									filter(event, player) {
										if (event.name == 'useCard' && player.storage.liefengxuanwu_lie >= 0) {
											return player.storage.liefengxuanwuSource && player.storage.liefengxuanwuSource[0];
										} //QQQ
										if (event.name != 'useCard' && event.player.hasSkill('liefengxuanwu')) return true;
										return false;
									},
									forced: true,
									//你可以弃置两张牌并选择一个目标立即结束出牌阶段,该目标添加两个<裂>标记直到你的下一个回合开始前,在此期间,目标每使用一张牌,则移除一个<裂>标记,视为你对其使用一张<杀>
									content() {
										if (trigger.name == 'useCard') {
											if (player.storage.liefengxuanwu_lie > 0) {
												player.storage.liefengxuanwuSource[0].line(player, 'green');
												player.storage.liefengxuanwuSource[0].useCard({ name: 'sha' }, player);
												player.storage.liefengxuanwu_lie--;
											} else {
												delete player.storage.liefengxuanwuSource;
												player.removeSkill('liefengxuanwu_lie');
											}
										} else {
											delete player.storage.liefengxuanwuSource;
											player.removeSkill('liefengxuanwu_lie');
										}
										player.storage.liefengxuanwu = [`当前<裂>标记数:${player.storage.liefengxuanwu_lie || 0}.`];
									},
								},
							},
						},
						fzjys: {
							nobracket: true,
							init(player) {
								player.storage.fzjys = 0;
							},
							mark: true,
							unseen: true,
							marktext: '陨',
							intro: {
								name: '风之极·陨杀',
								content: '当前标记数为:#.',
							},
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.storage.fzjys >= 7;
							},
							selectTarget: 1,
							filterTarget(player, target) {
								return player != target;
							},
							content() {
								player.$fullscreenpop('<font color=cyan>风之极·陨杀!</font>');
								player.storage.fzjys = 0;
								var shans = target.getCards('h', 'shan');
								var shas = player.getCards('h', 'sha');
								if (shans.length >= shas.length) {
									target.discard(shans, true);
									player.discard(shas, true);
								} else {
									target.discard(shans, true);
									player.discard(shas, true);
									if (shas.length - shans.length) {
										target.damage(shas.length - shans.length);
									}
								}
							},
							ai: {
								order: 5,
								result: {
									damage: 2,
									player(player) {
										if (player.countCards('h', { name: 'sha' }) >= 3) {
											return 1;
										}
									},
								},
							},
						},
						fenghuidadi: {
							nobracket: true,
							trigger: {
								player: ['logSkillBegin'],
							},
							filter(event, player) {
								if (event.skill && event.skill == 'cs') return true;
								return false;
							},
							silent: true,
							forced: true,
							group: ['cs'],
							content() {
								player.draw();
							},
						},
						fenghuidadi: {
							nobracket: true,
							trigger: {
								player: ['useSkillAfter', 'logSkillBegin'],
							},
							filter(event, player) {
								if (event.name == 'useSkill' && (event.skill == 'liefengxuanwu' || event.skill == 'fzjys' || event.skill == 'fengxuanbi' || event.skill == 'sifangfengbi')) return true;
								if (event.name == 'logSkillBegin' && event.skill && event.skill == 'fengtuishi') return true;
								return false;
							},
							silent: true,
							forced: true,
							content() {
								player.draw();
							},
						},
						fengxuanbi: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') >= 2;
							},
							selectTarget: 1,
							filterTarget(player, target) {
								return player != target;
							},
							filterCard: true,
							selectCard: 2,
							content() {
								player.storage.fzjys++;
								if (target.storage.fengxuanbi_used && target.storage.fengxuanbi_used.length >= 4) {
									delete target.storage.fengxuanbi_used;
									if (!player.storage.sifangfengbi) {
										player.storage.sifangfengbi = [];
									}
									player.storage.sifangfengbi.push(target);
									player.useSkill('sifangfengbi');
								} else {
									var x = ['basic', 'trick', 'equip', 'delay'].randomGet();
									if (!target.hasSkill('fengxuanbi_used')) {
										target.addSkill('fengxuanbi_used');
										target.storage.fengxuanbi_used = [];
									}
									if (x == 'basic') {
										target.addTempSkill('fengxuanbi_basic', { player: 'phaseAfter' });
										if (!target.storage.fengxuanbi_used.includes(x)) {
											target.storage.fengxuanbi_used.push(x);
										}
									}
									if (x == 'trick') {
										target.addTempSkill('fengxuanbi_trick', { player: 'phaseAfter' });
										if (!target.storage.fengxuanbi_used.includes(x)) {
											target.storage.fengxuanbi_used.push(x);
										}
									}
									if (x == 'equip') {
										target.addTempSkill('fengxuanbi_equip', { player: 'phaseAfter' });
										if (!target.storage.fengxuanbi_used.includes(x)) {
											target.storage.fengxuanbi_used.push(x);
										}
									}
									if (x == 'delay') {
										target.addTempSkill('fengxuanbi_delay', { player: 'phaseAfter' });
										if (!target.storage.fengxuanbi_used.includes(x)) {
											target.storage.fengxuanbi_used.push(x);
										}
									}
								}
							},
							ai: {
								order: 40,
								result: {
									damage: 1,
									player: 1,
								},
							},
							nobracket: true,
							group: ['fengxuanbi_in'],
							subSkill: {
								basic: {
									init(player) {
										player.storage.fengxuanbi_basic = 0;
									},
									mark: true,
									marktext: '风',
									intro: {
										name: '风旋壁',
										content: '该角色不能使用基本牌直到其回合结束.',
									},
									mod: {
										cardEnabled(card) {
											if (get.type(card) == 'basic') return false;
										},
									},
								},
								trick: {
									init(player) {
										player.storage.fengxuanbi_trick = 0;
									},
									mark: true,
									marktext: '风',
									intro: {
										name: '风旋壁',
										content: '该角色不能使用锦囊牌直到其回合结束.',
									},
									mod: {
										cardEnabled(card) {
											if (get.type(card) == 'trick') return false;
										},
									},
								},
								equip: {
									init(player) {
										player.storage.fengxuanbi_equip = 0;
									},
									mark: true,
									marktext: '风',
									intro: {
										name: '风旋壁',
										content: '该角色不能使用装备牌直到其回合结束.',
									},
									mod: {
										cardEnabled(card) {
											if (get.type(card) == 'equip') return false;
										},
									},
								},
								delay: {
									init(player) {
										player.storage.fengxuanbi_delay = 0;
									},
									mark: true,
									marktext: '风',
									intro: {
										name: '风旋壁',
										content: '该角色不能使用延时锦囊牌直到其回合结束.',
									},
									mod: {
										cardEnabled(card) {
											if (get.type(card) == 'delay') return false;
										},
									},
								},
								in: {
									trigger: {
										player: 'phaseAfter',
									},
									filter(event, player) {
										return player.storage.sifangfengbi && player.storage.sifangfengbi.length;
									},
									forced: true,
									content() {
										player.useSkill('sifangfengbi_in');
									},
								},
								used: {
									init(player) {
										player.storage.fengxuanbi_used = [];
									},
									mark: true,
									marktext: '风',
									intro: {
										name: '风旋壁',
										content(storage, player) {
											var str = '';
											if (player.storage.fengxuanbi_used.length >= 0) {
												str += `已受到以下${player.storage.fengxuanbi_used.length}种风旋壁效果:`;
											}
											if (player.storage.fengxuanbi_used.includes('basic')) {
												str += '<br>基本牌';
											}
											if (player.storage.fengxuanbi_used.includes('trick')) {
												str += '<br>锦囊牌';
											}
											if (player.storage.fengxuanbi_used.includes('equip')) {
												str += '<br>装备牌';
											}
											if (player.storage.fengxuanbi_used.includes('delay')) {
												str += '<br>延时类锦囊牌';
											}
											return str;
										},
									},
								},
							},
						},
						sifangfengbi: {
							nobracket: true,
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') >= 2;
							},
							selectTarget: 1,
							filterTarget(player, target) {
								return player != target;
							},
							filterCard: true,
							selectCard: 2,
							content() {
								player.storage.fzjys++;
								if (!player.storage.sifangfengbi) {
									player.storage.sifangfengbi = [];
								}
								if (target) {
									player.storage.sifangfengbi.push(target);
								}
								for (var i = 0; i < player.storage.sifangfengbi.length; i++) {
									player.storage.sifangfengbi[i].out('sifangfengbi');
								}
							},
							group: ['sifangfengbi_in'],
							subSkill: {
								in: {
									trigger: {
										player: 'phaseAfter',
									},
									forced: true,
									content() {
										for (var i = 0; i < player.storage.sifangfengbi.length; i++) {
											player.storage.sifangfengbi[i].in('sifangfengbi');
										}
										delete player.storage.sifangfengbi;
									},
								},
							},
						},
						qianfenggang: {
							nobracket: true,
							trigger: {
								player: 'useSkillAfter',
							},
							filter(event, player) {
								return event.skill == 'flfxj' || event.skill == 'fzjlry';
							},
							forced: true,
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'black' && trigger.skill == 'flfxj') {
									player.draw();
								}
								if (get.color(result.card) == 'red' && trigger.skill == 'fzjlry') {
									player.draw();
								}
							},
						},
						flfxj: {
							init(player) {
								player.storage.flfxj = [`当前<剑>标记数为:${player.storage.flfxj_zhuiji || 0}`];
							},
							nobracket: true,
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h', { name: 'sha' }) > 0;
							},
							selectCard: 1,
							filterCard(card) {
								return card.name == 'sha';
							},
							content() {
								player.addTempSkill('flfxj_zhuiji');
								player.storage.flfxj_zhuiji = 2;
								player.storage.flfxj = [`当前<剑>标记数为:${player.storage.flfxj_zhuiji || 0}`];
							},
							ai: {
								order: 20,
								result: {
									damage: 1,
									player(player) {
										if (player.countCards('h', { name: 'sha' }) > 1) {
											return 1;
										}
									},
								},
							},
							subSkill: {
								zhuiji: {
									init(player) {
										player.storage.flfxj_zhuiji = 2;
									},
									mark: true,
									unseen: true,
									marktext: '剑',
									intro: {
										name: '分灵分形剑',
										content: '当你的<杀>被目标闪避时,你弃置一枚标记,对目标追击一张<杀>.当前标记数:#.',
									},
									trigger: {
										player: 'shaMiss',
									},
									forced: true,
									filter(event, player) {
										return player.storage.flfxj_zhuiji > 0;
									},
									content() {
										'step 0';
										player.storage.flfxj_zhuiji--;
										player.useCard(game.createCard({ name: 'sha' }), trigger.target, -1).set('addCount', false);
										('step 1');
										if (player.storage.flfxj_zhuiji == 0) {
											player.removeSkill('flfxj_zhuiji');
										} else {
										}
										player.storage.flfxj = [`当前<剑>标记数为:${player.storage.flfxj_zhuiji || 0}`];
									},
									onremove(player) {
										delete player.storage.flfxj_zhuiji;
										player.storage.flfxj = [`当前<剑>标记数为:${player.storage.flfxj_zhuiji || 0}`];
									},
								},
							},
						},
						fzjlry: {
							nobracket: true,
							init(player) {
								player.storage.fzjlry = 0;
							},
							mark: true,
							unseen: true,
							marktext: '耀',
							intro: {
								name: '风之极·落日耀',
								content: '标记数达到25个时可发动,当前标记数:#.',
							},
							enable: 'phaseUse',
							usable: 1,
							round: 3,
							filter(event, player) {
								return player.storage.fzjlry >= 25;
							},
							filterTarget(player, target) {
								return player != target;
							},
							selectTarget: 1,
							content() {
								player.$fullscreenpop('<font color=red>风之极·落日耀!</font>');
								player.storage.fzjlry = 0;
								var shans = target.getCards('h', { type: 'basic' });
								var shas = player.getCards('h', { type: 'basic' });
								if (shans.length >= shas.length) {
									target.discard(shans, true);
									player.discard(shas, true);
								} else {
									target.discard(shans, true);
									player.discard(shas, true);
									if (shas.length - shans.length) {
										target.damage(shas.length - shans.length);
									}
								}
							},
							ai: {
								order: 25,
								result: {
									damage: 2,
									player(player) {
										if (player.countCards('h', { type: 'trick' }) + player.countCards('h', { type: 'equip' }) + player.countCards('h', { type: 'delay' }) >= 2) {
											return 1;
										}
									},
								},
							},
							group: ['fzjlry_roundcount'],
						},
						feixushenfa: {
							nobracket: true,
							init(player) {
								player.storage.feixushenfa = [];
							},
							mark: true,
							unseen: true,
							marktext: '絮',
							intro: {
								name: '飞絮',
								content(storage, player) {
									var str = '已判定出的数字:';
									if (player.storage.feixushenfa.includes('1')) {
										str += 'A ';
									}
									if (player.storage.feixushenfa.includes('2')) {
										str += '2 ';
									}
									if (player.storage.feixushenfa.includes('3')) {
										str += '3 ';
									}
									if (player.storage.feixushenfa.includes('4')) {
										str += '4 ';
									}
									if (player.storage.feixushenfa.includes('5')) {
										str += '5 ';
									}
									if (player.storage.feixushenfa.includes('6')) {
										str += '6 ';
									}
									if (player.storage.feixushenfa.includes('7')) {
										str += '7 ';
									}
									if (player.storage.feixushenfa.includes('8')) {
										str += '8 ';
									}
									if (player.storage.feixushenfa.includes('9')) {
										str += '9 ';
									}
									if (player.storage.feixushenfa.includes('10')) {
										str += '10 ';
									}
									if (player.storage.feixushenfa.includes('11')) {
										str += 'J ';
									}
									if (player.storage.feixushenfa.includes('12')) {
										str += 'Q ';
									}
									if (player.storage.feixushenfa.includes('13')) {
										str += 'K ';
									}
									return str;
								},
							},
							trigger: {
								player: ['chooseToRespondBefore', 'chooseToUseBefore'],
							},
							forced: true,
							filter(event, player) {
								if (event.responded) return false;
								if (event.filterCard && event.filterCard({ name: 'shan' }, player, event) && player.countCards('h') > 0) return true;
							},
							content() {
								'step 0';
								player.storage.fzjlry++;
								if (player.storage.feixushenfa.length >= 13) {
									delete player.storage.feixushenfa;
								}
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								event.number = result.card.number;
								event.number2 = '' + event.number;
								if (!player.storage.feixushenfa) {
									player.storage.feixushenfa = [];
								}
								('step 2');
								if (!player.storage.feixushenfa.includes(event.number2)) {
									player.storage.feixushenfa.push(event.number2);
									event.goto(3);
								} else {
									player.storage.fzjlry += event.number;
									event.goto(5);
								}
								('step 3');
								var cards = player.getCards('h');
								var canusecard = [];
								if (Array.isArray(cards))
									for (var i of cards) {
										if (!player.storage.feixushenfa.includes('' + i.number)) {
											canusecard.push(i);
										}
									}
								if (canusecard.length == 0) event.goto(5);
								player.chooseCardButton('选择一张数字与<絮>标记内数字均不同的手牌当作【闪】打出', canusecard).filterButton = function (button) {
									return true;
								};
								('step 4');
								if (result.bool) {
									if (!player.storage.lastcard || player.storage.lastcard.length > 1) {
										player.storage.lastcard = [];
									}
									player.storage.lastcard.push(result.links[0]);
									player.lose(result.links[0]);
									event.finish();
									trigger.result = { bool: true, card: { name: 'shan' } };
									trigger.responded = true;
									trigger.animate = false;
									trigger.untrigger();
								}
								('step 5');
							},
						},
						jiaoman: {
							trigger: {
								global: 'gameStart',
							},
							forced: true,
							content() {
								var list = [];
								var listx = [];
								for (var i of game.players) {
									if (i.name != 'qxq_dpcq_naranyanran') {
										listx.push(i);
										if (i.hasSkill('renru')) {
											list.push(i);
										}
									}
								}
								if (list.length) {
									list[0].useCard(game.createCard('snzy'), player);
									player.draw(2);
								} else {
									listx.randomGet().useCard(game.createCard('snzy'), player);
									player.draw(2);
								}
							},
						},
						yhkuanggu: {
							mark: false,
							nobracket: true,
							init(player) {
								player.storage.yhkuanggu = 0;
							},
							trigger: {
								player: ['useCardAfter'],
							},
							forced: true,
							filter(event, player, card) {
								return get.type(event.card) == 'yuhun' && (event.card.name == 'yhkuangguA' || event.card.name == 'yhkuangguB' || event.card.name == 'yhkuangguC' || event.card.name == 'yhkuangguD' || event.card.name == 'yhkuangguE' || event.card.name == 'yhkuangguF');
							},
							content() {
								'step 0';
								player.storage.yhkuanggu = 0;
								('step 1');
								var es = trigger.player.storage.yh_;
								for (var i = 0; i < es.length; i++) {
									if (get.subtype(es[i]) == 'yuhun1') {
										if (es[i].name == 'yhkuangguA') {
											player.storage.yhkuanggu++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun2') {
										if (es[i].name == 'yhkuangguB') {
											player.storage.yhkuanggu++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun3') {
										if (es[i].name == 'yhkuangguC') {
											player.storage.yhkuanggu++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun4') {
										if (es[i].name == 'yhkuangguD') {
											player.storage.yhkuanggu++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun5') {
										if (es[i].name == 'yhkuangguE') {
											player.storage.yhkuanggu++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun6') {
										if (es[i].name == 'yhkuangguF') {
											player.storage.yhkuanggu++;
										}
									}
								}
								if (player.storage.yhkuanggu == 2 && !player.hasSkill('yhkuanggu_yysATKx')) {
									player.addSkill('yhkuanggu_yysATKx');
								}
								('step 2');
								if (player.storage.yhkuanggu >= 4 && !player.hasSkill('yhkuanggu_kg')) {
									player.addSkill('yhkuanggu_kg');
									game.log(player, '完全激活了狂骨套装效果(拥有此套装时,攻击+X%(X为你拥有的鬼火数x10))!');
								}
							},
							subSkill: {
								kg: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yhkuanggu.jpg>`,
									intro: {
										name: '狂骨——四件套',
										content(storage, player) {
											var str = '';
											if (player.storage.yhkuanggu_kg && player.storage.yhkuanggu_kg >= 0) {
												str += `攻击加成提高X(X为你已拥有的鬼火数x10),当前攻击力增加:${player.storage.yhkuanggu_kg}%.`;
											} else {
												str += '攻击加成提高X(X为你已拥有的鬼火数x10),当前攻击力增加:0%.';
											}
											return str;
										},
									},
									trigger: {
										player: ['consumeBFAfter', 'loseBFAfter', 'getBFAfter'],
									},
									forced: true,
									content() {
										if (player.storage.yhkuanggu_kg) {
											var m = player.storage.yhkuanggu_kg;
											player.storage.yysATKx -= m;
										}
										var x = player.bluefire - player.bluefireused;
										player.storage.yhkuanggu_kg = x * 10;
										if (player.storage.yysATKx < 1) {
											player.storage.yysATKx = player.storage.yhkuanggu_kg;
										}
									},
									onremove(player) {
										var x = player.storage.yhkuanggu_kg;
										player.storage.yysATKx -= x;
									},
								},
								yysATKx: {
									mark: false,
									init(player) {
										player.storage.yysATKx += 15;
									},
								},
							},
						},
						yhzhenmushou: {
							mark: false,
							nobracket: true,
							init(player) {
								player.storage.yhzhenmushou = 0;
							},
							trigger: {
								player: ['useCardAfter'],
							},
							forced: true,
							filter(event, player, card) {
								return get.type(event.card) == 'yuhun' && (event.card.name == 'yhzhenmushouA' || event.card.name == 'yhzhenmushouB' || event.card.name == 'yhzhenmushouC' || event.card.name == 'yhzhenmushouD' || event.card.name == 'yhzhenmushouE' || event.card.name == 'yhzhenmushouF');
							},
							content() {
								'step 0';
								player.storage.yhzhenmushou = 0;
								('step 1');
								var es = trigger.player.storage.yh_;
								for (var i = 0; i < es.length; i++) {
									if (get.subtype(es[i]) == 'yuhun1') {
										if (es[i].name == 'yhzhenmushouA') {
											player.storage.yhzhenmushou++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun2') {
										if (es[i].name == 'yhzhenmushouB') {
											player.storage.yhzhenmushou++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun3') {
										if (es[i].name == 'yhzhenmushouC') {
											player.storage.yhzhenmushou++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun4') {
										if (es[i].name == 'yhzhenmushouD') {
											player.storage.yhzhenmushou++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun5') {
										if (es[i].name == 'yhzhenmushouE') {
											player.storage.yhzhenmushou++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun6') {
										if (es[i].name == 'yhzhenmushouF') {
											player.storage.yhzhenmushou++;
										}
									}
								}
								if (player.storage.yhzhenmushou == 2 && !player.hasSkill('yhzhenmushou_yysCS')) {
									player.addSkill('yhzhenmushou_yysCS');
								}
								('step 2');
								if (player.storage.yhzhenmushou >= 4 && !player.hasSkill('yhzhenmushou_zms')) {
									player.addSkill('yhzhenmushou_zms');
									game.log(player, '完全激活了镇墓兽套装效果(拥有此套装时,暴击伤害+X(X为你的已损体力百分比值))!');
								}
							},
							subSkill: {
								zms: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yhzhenmushou.jpg>`,
									intro: {
										name: '镇墓兽——四件套',
										content(storage, player) {
											var str = '暴击伤害+X(X为你的已损体力百分比值),当前暴击伤害增加:';
											if (player.storage.yhzhenmushou_zms && player.storage.yhzhenmushou_zms >= 0) {
												str += `${player.storage.yhzhenmushou_zms}%`;
											} else {
												str += '0%';
											}
											return str;
										},
									},
									init(player) {
										player.storage.yhzhenmushou_zms = 0;
									},
									trigger: {
										player: ['changeHpBegin', 'gainMaxHpBegin', 'loseMaxHpBegin', 'phaseBegin'],
									},
									forced: true,
									content() {
										player.storage.yysCSS -= player.storage.yhzhenmushou_zms;
										var x = Math.round((player.maxHp - player.hp) / player.maxHp) * 100;
										player.storage.yhzhenmushou_zms = x;
										player.storage.yysCSS += x;
									},
									onremove(player) {
										player.storage.yysCSS -= player.storage.yhzhenmushou_zms;
									},
								},
								yysCS: {
									mark: false,
									init(player) {
										player.storage.yysCS += 15;
									},
								},
							},
						},
						juanliu: {
							enable: 'phaseUse',
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							nobracket: true,
							mark: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/juanliu.jpg>`,
							intro: {
								name: '涓流',
								content: '出牌阶段限一次,消耗三点鬼火,使所有友方的生命相互链接,受到伤害时均摊,若剩余伤害值小于均摊目标,则将剩余伤害值在均摊目标中随机分配.',
							},
							usable: 1,
							filter(event, player) {
								return game.players.length > 1 && player.bluefire - player.bluefireused >= 3;
							},
							content() {
								game.consumeBF(player, 3);
								var target = player.getFriends(true);
								if (!player.storage.juanliu2) player.storage.juanliu2 = [];
								player.storage.juanliu2.push(target);
								player.addSkill('juanliu2');
								if (!player.hasSkill('juanliu_End')) {
									player.addSkill('juanliu_End');
								} else {
									player.storage.juanliu_End = 2;
								}
							},
							subSkill: {
								End: {
									init(player) {
										player.storage.juanliu_End = 2;
									},
									mark: true,
									marktext: '涓',
									intro: {
										name: '涓流',
										content: '当前涓流状态还剩#回合.',
									},
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									content() {
										player.storage.juanliu_End--;
										if (player.storage.juanliu_End == 0) {
											player.removeSkill('juanliu_End');
											player.removeSkill('juanliu2');
											delete player.storage.juanliu2;
										}
									},
								},
								mark: {
									marktext: '涓',
									intro: {
										name: '涓流',
										content: '受到伤害时,若伤害值大于1点,则将此伤害平摊给所有被链接的目标(包括自己),若平摊后仍有剩余伤害值,则将剩余伤害值在所有均摊目标中随机分配.',
									},
								},
							},
						},
						juanliu2: {
							charlotte: true,
							trigger: {
								global: ['damageBefore'],
							},
							forced: true,
							filter(event, player) {
								if (event.player.isDead() || !player.storage.juanliu2 || !player.storage.juanliu2.includes(event.player) || event.num <= 1 || event.source == undefined) return false;
								if (event.name == 'damage') return true;
								if (event.player == player) return true;
								return player.isDamaged();
							},
							logTarget: 'player',
							content() {
								'step 0';
								var damagenum = trigger.num;
								trigger.cancel();
								var target = trigger.player;
								if (!target.storage.juanliu_mark) target.storage.juanliu_mark = [];
								target.storage.juanliu_mark.add(player);
								target.storage.juanliu_mark.sortBySeat();
								target.markSkill('juanliu_mark');
								var list = player.storage.juanliu2;
								if (!list.includes(player)) {
									list.push(player);
								}
								var ln = list.length;
								var d = Math.floor(damagenum / ln);
								var damageend = damagenum - ln * d;
								if (d > 0) {
									trigger.num = d;
									for (var i = 0; i < list.length; i++) {
										if (list[i] != trigger.player) {
											list[i][trigger.name](trigger.num, 'nosource');
										}
									}
								}
								if (damageend > 0) {
									var listr = list.randomGets(damageend);
									for (var i = 0; i < listr.length; i++) {
										listr[i][trigger.name](1, 'nosource');
									}
								}
							},
							onremove(player) {
								if (!player.storage.juanliu2) return;
								game.countPlayer(function (current) {
									if (player.storage.juanliu2.includes(current) && current.storage.juanliu_mark) {
										current.storage.juanliu_mark.remove(player);
										if (!current.storage.juanliu_mark.length) current.unmarkSkill('juanliu_mark');
										else current.markSkill('juanliu_mark');
									}
								});
								delete player.storage.juanliu2;
							},
							group: 'juanliu3',
						},
						juanliu3: {
							trigger: {
								global: 'dieBegin',
							},
							silent: true,
							filter(event, player) {
								return event.player == player || (player.storage.juanliu2 && player.storage.juanliu2.includes(player));
							},
							content() {
								if (player == trigger.player) lib.skill.juanliu2.onremove(player);
								else player.storage.juanliu2.remove(event.player);
							},
							forced: true,
							popup: false,
						},
						runwuwusheng: {
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							nobracket: true,
							mark: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/runwuwusheng.jpg>`,
							intro: {
								name: '润物无声',
								content: '受到伤害时,给所有友方提升20%爆伤直到其回合结束.',
							},
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							content() {
								var friends = player.getFriends(true);
								for (var i = 0; i < friends.length; i++) {
									if (!friends[i].hasSkill('runwuwusheng_yysCSS')) {
										friends[i].addSkill('runwuwusheng_yysCSS');
									}
								}
							},
							subSkill: {
								yysCSS: {
									init(player) {
										player.storage.yysCSS += 20;
									},
									trigger: {
										player: 'phaseAfter',
									},
									forced: true,
									content() {
										player.removeSkill('runwuwusheng_yysCSS');
									},
									onremove(player) {
										player.storage.yysCSS -= 20;
									},
								},
							},
						},
						yyshonglian: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							nobracket: true,
							mod: {
								suit(card, suit) {
									return 'none';
								},
							},
							mark: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/honglian.jpg>`,
							intro: {
								name: '红莲',
								content: '免疫翻面和混乱,同时减少30%治疗效果,你在场时,友方全体获得<大妖之力>,同时自身受<大妖之力>的提升伤害效果翻倍.<br><li>【大妖之力】:每损失1%生命值,提升1%伤害、0.25%防御和0.25%减伤.',
							},
							init(player) {
								player.addSkill('yyshonglian_dayaozhili');
							},
							trigger: {
								global: ['turnOverBefore', 'dieBegin', 'recoverEnd'],
							},
							_priority: 200,
							forced: true,
							filter(event, player) {
								if (event.name == 'turnOver') return event.player == player && !player.isTurnedOver();
								if (event.name == 'die') return player.getFriends().includes(event.player);
								if (event.name == 'recover') return player.getFriends().includes(event.player) && event.player.hp > 0;
							},
							content() {
								if (trigger.name == 'turnOver') {
									trigger.cancel();
								}
								if (trigger.name == 'die') {
									if (trigger.player != player) {
										trigger.player.removeSkill('yyshonglian_dayaozhili');
									} else {
										var friends = player.getFriends();
										if (!friends.includes(player)) {
											friends.push(player);
										}
										for (var i = 0; i < friends.length; i++) {
											friends[i].removeSkill('yyshonglian_dayaozhili');
										}
									}
								}
								if (trigger.name == 'recover') {
									if (!trigger.player.hasSkill('yyshonglian_dayaozhili')) {
										trigger.player.addSkill('yyshonglian_dayaozhili');
									}
								}
							},
							group: ['yyshonglian_gameStart'],
							subSkill: {
								gameStart: {
									trigger: {
										global: 'gameStart',
									},
									forced: true,
									content() {
										var friends = player.getFriends();
										for (var i = 0; i < friends.length; i++) {
											if (!friends[i].hasSkill('yyshonglian_dayaozhili')) {
												friends[i].addSkill('yyshonglian_dayaozhili');
											}
										}
									},
								},
								dayaozhili: {
									init(player) {
										player.storage.dyzlzs = 0;
										player.storage.dyzlzf = 0;
										player.storage.dyzljs = 0;
										var x = Math.round(((player.maxHp - player.hp) / player.maxHp) * 100);
										if (player.hasSkill('yyshonglian')) {
											x = x * 2;
										}
										player.storage.dyzlzs += x;
										player.storage.yysDamageup += x;
										var y = Math.round(((player.maxHp - player.hp) / player.maxHp) * 25);
										player.storage.dyzlzf += y;
										player.storage.yysDEFx += y;
										var z = Math.round(((player.maxHp - player.hp) / player.maxHp) * 25);
										player.storage.dyzljs += z;
										player.storage.yyssustainup -= z;
									},
									trigger: {
										player: ['changeHp', 'damageEnd', 'loseHpEnd', 'loseMaxHpEnd', 'phaseBefore', 'phaseAfter'],
									},
									forced: true,
									content() {
										'step 0';
										var x = player.storage.dyzlzs;
										var y = player.storage.dyzlzf;
										var z = player.storage.dyzljs;
										player.storage.yysDamageup -= x;
										player.storage.yysDEFx -= y;
										player.storage.yyssustainup += z;
										('step 1');
										player.storage.dyzlzs = 0;
										player.storage.dyzlzf = 0;
										player.storage.dyzljs = 0;
										('step 2');
										var x = Math.round(((player.maxHp - player.hp) / player.maxHp) * 100);
										if (player.hasSkill('yyshonglian')) {
											x = x * 2;
										}
										player.storage.dyzlzs += x;
										player.storage.yysDamageup += x;
										var y = Math.round(((player.maxHp - player.hp) / player.maxHp) * 25);
										player.storage.dyzlzf += y;
										player.storage.yysDEFx += y;
										var z = Math.round(((player.maxHp - player.hp) / player.maxHp) * 25);
										player.storage.dyzljs += z;
										player.storage.yyssustainup -= z;
									},
									onremove(player) {
										'step 0';
										var x = player.storage.dyzlzs;
										var y = player.storage.dyzlzf;
										var z = player.storage.dyzljs;
										player.storage.yysDamageup -= x;
										player.storage.yysDEFx -= y;
										player.storage.yyssustainup += z;
										('step 1');
										player.storage.dyzlzs = 0;
										player.storage.dyzlzf = 0;
										player.storage.dyzljs = 0;
										('step 2');
										delete player.storage.dyzlzs;
										delete player.storage.dyzlzf;
										delete player.storage.dyzljs;
									},
								},
							},
						},
						tianhuonuyan: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							nobracket: true,
							mark: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/tianhuonuyan.jpg>`,
							intro: {
								name: '天火怒焱',
								content: '出牌阶段,若自身处于非<鬼王姿态>,则可消耗三点鬼火发动此技能,若如此做,则击退所有敌方40%行动条,自身进入<鬼王姿态>两回合.<br><li>【鬼王姿态】:燃起火海,使友方在回合开始时被灼烧24%当前生命,并免疫伤害直至其回合结束,灼烧视同为体力流失,若友方灼烧后生命比例低于30%或其当前生命值为1,则其解除所有控制和所有增益/减益效果,<鬼王姿态>结束时,为友方全体回复等同鬼王酒吞童子在期间造成伤害的20%的体力.',
							},
							enable: 'phaseUse',
							_priority: 200,
							forced: true,
							filter(event, player) {
								return !player.hasSkill('tianhuonuyan_guiwang') && player.bluefire - player.bluefireused >= 3;
							},
							content() {
								game.consumeBF(player, 3);
								player.addSkill('tianhuonuyan_guiwang');
								var friends = player.getFriends();
								friends.push(player);
								for (var i of game.players) {
									if (!friends.includes(i)) {
										i.storage.yysmotive -= 40;
									}
								}
							},
							ai: {
								order: 10000,
								result: {
									player(player) {
										var hs = player.getCards('h');
										var num = 0;
										for (var i = 0; i < hs.length; i++) {
											if (get.tag(hs[i], 'damage')) {
												num++;
											}
										}
										if (num == 2 && Math.random() <= 0.5) {
											return 1;
										}
										if (num > 2) {
											return 1;
										}
									},
								},
							},
							subSkill: {
								guiwang: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/guiwangzitai.jpg>`,
									intro: {
										name: '鬼王姿态',
										content(storage, player) {
											var str = '';
											if (player.storage.tianhuonuyan_guiwang >= 0) {
												str += `当前鬼王姿态剩余${player.storage.tianhuonuyan_guiwang}回合.`;
											}
											if (player.storage.tianhuonuyan_guiwangdamage >= 0) {
												str += `当前鬼王姿态期间共造成${player.storage.tianhuonuyan_guiwangdamage}点伤害.`;
											}
											return str;
										},
									},
									init(player) {
										player.storage.tianhuonuyan_guiwangdamage = 0;
										player.storage.tianhuonuyan_guiwang = 2;
										var friends = player.getFriends();
										friends.push(player);
										for (var i = 0; i < friends.length; i++) {
											if (!friends[i].hasSkill('tianhuonuyan_firehp')) {
												friends[i].addSkill('tianhuonuyan_firehp');
											}
										}
										player.addSkill('tianhuonuyan_firehpBefore');
									},
									trigger: {
										player: ['phaseBegin'],
										source: ['damageEnd'],
									},
									forced: true,
									content() {
										if (trigger.name == 'damage' && trigger.source && trigger.source == player) {
											player.storage.tianhuonuyan_guiwangdamage += trigger.num;
										} else {
											player.storage.tianhuonuyan_guiwang--;
											if (player.storage.tianhuonuyan_guiwang == 0) {
												player.removeSkill('tianhuonuyan_guiwang');
											}
										}
									},
									onremove(player) {
										var friends = player.getFriends();
										if (!friends.includes(player)) friends.push(player);
										for (var i = 0; i < friends.length; i++) {
											if (friends[i].hasSkill('tianhuonuyan_firehp')) {
												friends[i].removeSkill('tianhuonuyan_firehp');
												var rnum = Math.round(player.storage.tianhuonuyan_guiwangdamage / 5);
												if (rnum > 0) friends[i].recover(rnum);
											}
										}
										delete player.storage.tianhuonuyan_guiwang;
										delete player.storage.tianhuonuyan_guiwangdamage;
										player.removeSkill('tianhuonuyan_firehpBefore');
									},
								},
								firehpBefore: {
									trigger: {
										global: ['phaseCancelled', 'phaseAfter'],
									},
									forced: true,
									silent: true,
									content() {
										lib.phasenum = 0;
										('step 1');
										lib.phasenum++;
										if (!lib.phasepl) {
											var nextSeat = _status.currentPhase.next;
											lib.phasepl = nextSeat;
										} else {
											lib.phasepl = lib.phasepl.next;
										}
										('step 2');
										var friends = player.getFriends();
										if (!friends.includes(player)) friends.push(player);
										for (var i of game.players) {
											if ((i.name == lib.phasepl.name && i.isTurnedOver() && lib.phasenum < 17) || (i.name == lib.phasepl.name && !friends.includes(i))) {
												event.final = false;
												event.goto(1);
											}
										}
										event.final = true;
										if (event.final && event.final == true) {
											event.goto(3);
										} else {
											event.goto(4);
										}
										('step 3');
										var nextplname = lib.phasepl.name;
										player.storage.nextpl = lib.phasepl.name;
										var friends = player.getFriends();
										friends.push(player);
										var listname = [];
										for (var i = 0; i < friends.length; i++) {
											listname.push(friends[i].name);
										}
										if (listname.includes(nextplname)) {
											trigger.trigger('firehp');
										}
										('step 4');
										event.finish();
									},
									popup: false,
								},
								firehp: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/zhuoshao.jpg>`,
									intro: {
										name: '灼烧',
										content: '回合开始前,流失当前24%的生命值并免疫伤害直到回合结束,若灼烧后生命比例低于30%,解除所有控制和所有增益/减益效果.',
									},
									trigger: {
										global: 'firehp',
									},
									forced: true,
									filter(event, player) {
										for (var i of game.players) {
											if (i.hasSkill('tianhuonuyan_firehpBefore')) {
												if (player.name == i.storage.nextpl) {
													return true;
												}
											}
										}
									},
									content() {
										var h = Math.round(player.hp * 0.24);
										if (h > 0) {
											player.hp -= h;
										}
										var x = player.hp / player.maxHp;
										if (x < 0.3 || player.hp == 1) {
											player.link(false);
											player.turnOver(false);
											game.AbsReduce(player);
										}
										if (!player.isTurnedOver()) {
											player.addTempSkill('tianhuonuyan_wudi');
										}
									},
								},
								wudi: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/wudi.jpg>`,
									intro: {
										name: '免疫伤害',
										content: '免疫伤害直到回合结束.',
									},
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									content() {
										trigger.cancel();
									},
								},
							},
						},
						yhmumei: {
							nobracket: true,
							init(player) {
								player.storage.yhmumei = 0;
								player.storage.yhmumei_mm = 0;
							},
							trigger: {
								player: ['useCardAfter'],
							},
							forced: true,
							filter(event, player, card) {
								return get.type(event.card) == 'yuhun' && (event.card.name == 'yhmumeiA' || event.card.name == 'yhmumeiB' || event.card.name == 'yhmumeiC' || event.card.name == 'yhmumeiD' || event.card.name == 'yhmumeiE' || event.card.name == 'yhmumeiF');
							},
							content() {
								'step 0';
								player.storage.yhmumei = 0;
								('step 1');
								var es = trigger.player.storage.yh_;
								for (var i = 0; i < es.length; i++) {
									if (get.subtype(es[i]) == 'yuhun1') {
										if (es[i].name == 'yhmumeiA') {
											player.storage.yhmumei++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun2') {
										if (es[i].name == 'yhmumeiB') {
											player.storage.yhmumei++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun3') {
										if (es[i].name == 'yhmumeiC') {
											player.storage.yhmumei++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun4') {
										if (es[i].name == 'yhmumeiD') {
											player.storage.yhmumei++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun5') {
										if (es[i].name == 'yhmumeiE') {
											player.storage.yhmumei++;
										}
									}
									if (get.subtype(es[i]) == 'yuhun6') {
										if (es[i].name == 'yhmumeiF') {
											player.storage.yhmumei++;
										}
									}
								}
								if (player.storage.yhmumei == 2 && !player.hasSkill('yhmumei_yysDEFx')) {
									player.addSkill('yhmumei_yysDEFx');
								}
								('step 2');
								if (player.storage.yhmumei >= 4 && !player.hasSkill('yhmumei_mm')) {
									player.addSkill('yhmumei_mm');
									game.log(player, '完全激活了木魅套装效果(拥有此套装时,友方单位受到伤害时,有25%的概率减少伤害来源1点鬼火)!');
								}
							},
							subSkill: {
								mm: {
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yhmumei.jpg>`,
									intro: {
										name: '木魅——四件套',
										content: '友方单位受到伤害时,有25%的概率减少伤害来源1点鬼火.',
									},
									trigger: {
										global: 'damageEnd',
									},
									forced: true,
									filter(event, player, card) {
										return player.getFriends().includes(event.player) && event.source && event.source != undefined && (event.source.name.includes('qxq_yys') || event.source.hasSkill('yysjiangling') || event.source.hasSkill('yysjianglingRandom'));
									},
									content() {
										if (Math.random() <= 0.25) {
											game.loseBF(trigger.source, 1);
										}
									},
								},
								yysDEFx: {
									mark: false,
									init(player) {
										player.storage.yysDEFx += 30;
									},
								},
							},
						},
						ximeng: {
							init(player) {
								player.storage.ximeng = 0;
							},
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/ximeng.jpg>`,
							intro: {
								name: '汐梦',
								content: '<li>在潮汐中前行.<br>被动效果:敌方任一角色回合结束后,千姬增加10%行动条.<br><li>【施放】:出牌阶段限一次,消耗两点鬼火,对一名目标造成一点伤害,若【海原贝戟】在场,额外对目标附加【汐梦】,持续一回合.<li>【汐梦】:回合结束后扣除3点鬼火,若扣除前鬼火为0,则冰冻一回合.<li>【冰冻】:控制效果,回合开始时跳过该回合并移除此状态.',
							},
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								return player.getEnemies().includes(event.player);
							},
							content() {
								player.storage.yysmotive += 10;
								var num = 0;
								for (var i of game.players) {
									if (i.name == 'qxq_yyshaiyuanbeiji') {
										num++;
									}
								}
								if (num == 0) {
									player.removeSkill('yongshengzhixi');
									player.storage.yongshengzhixi_beige = 0;
									delete player.storage.yongshengzhixi_beige;
									player.unmarkSkill('yongshengzhixi_beige');
									player.addSkill('haichaorumeng');
								} else {
									player.addSkill('yongshengzhixi');
									player.markSkill('yongshengzhixi_beige');
									player.removeSkill('haichaorumeng');
								}
							},
							group: ['ximeng_use'],
							subSkill: {
								use: {
									audio: 'ext:斗破苍穹X阴阳师/audio:3',
									enable: 'phaseUse',
									usable: 1,
									filter(event, player) {
										return player.bluefire - player.bluefireused >= 2;
									},
									filterTarget: true,
									selectTarget: 1,
									content() {
										'step 0';
										game.consumeBF(player, 2);
										('step 1');
										target.damage();
										var num = 0;
										for (var i of game.players) {
											if (i.name == 'qxq_yyshaiyuanbeiji') {
												num++;
											}
										}
										if (num > 0) {
											target.addSkill('ximeng_xm');
										}
									},
									ai: {
										order: 2,
										result: {
											player(player) {
												if (player.bluefire - player.bluefireused > 3) {
													return 1;
												} else {
													return -1;
												}
											},
										},
									},
								},
								xm: {
									trigger: {
										player: 'phaseAfter',
									},
									forced: true,
									mark: true,
									marktext: '汐',
									intro: {
										name: '汐梦',
									},
									content() {
										if (player.name.includes('qxq_yys') || player.hasSkill('yysjiangling') || player.hasSkill('yysjianglingRandom')) {
											var num = player.bluefire - player.bluefireused;
											if (num >= 3) {
												game.loseBF(player, 3);
											}
											if (num > 0) {
												game.loseBF(player, num);
											}
											if (num == 0) {
												player.isFrozen = true;
											}
										}
										player.removeSkill('ximeng_xm');
									},
								},
							},
						},
						haichaorumeng: {
							init(player) {
								player.storage.haichaorumeng = 0;
							},
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/haichaorumeng.jpg>`,
							intro: {
								name: '海潮入梦',
								content: '<li>被动效果:【千姬】手持【海原贝戟】时,免疫翻面效果.<li>【施放】:立即结束当前回合,召唤【海原贝戟】并为其附加3层<潮声>,释放后将技能替换为【永生之汐】.<li>【海原贝戟】:该召唤物无法行动,无法回血,继承千姬100%的攻击和防御,且生命值为千姬当前攻击力(角色基础攻击力1000,可继承千姬的属性加成)的0.5%,【海原贝戟】在场时,减少【千姬】和【海原贝戟】30%所受伤害,友方受到伤害且【海原贝戟】在场时,海原贝戟为其回复所受伤害30%的生命值(回复值不足1时,则改为30%概率回复一点体力),友方单位每使用一点鬼火,【海原贝戟】叠加一层<潮声>.<li>【潮声】:【海原贝戟】每叠加7层<潮声>,使友方获得3点鬼火,并使全体友方伤害永久提升15%,此增益最多叠加5次.',
							},
							trigger: {
								player: 'turnOverBefore',
							},
							forced: true,
							filter(event, player) {
								var num = 0;
								for (var i of game.players) {
									if (i.name == 'qxq_yyshaiyuanbeiji') {
										num++;
									}
								}
								if (num == 0) {
									return true;
								}
								return false;
							},
							content() {
								trigger.cancel();
							},
							group: ['haichaorumeng_use'],
							subSkill: {
								use: {
									audio: 'ext:斗破苍穹X阴阳师/audio:2',
									enable: 'phaseUse',
									usable: 1,
									filter(event, player) {
										return player.yysCanAddFellow();
									},
									content() {
										'step 0';
										var fellow = player.yysAddFellow('qxq_yyshaiyuanbeiji');
										if (get.mode() == 'identity' && this.group && this.name.includes('qxq_yys')) {
											if (this.identity == 'zhu' || this.identity == 'zhong') {
												fellow.style.left = 'calc(50% + 10px)';
												fellow.style.top = 'calc(50% + 30px)';
												fellow.identity = 'zhong';
												fellow.setIdentity('忠');
												fellow.identityShown = true;
											}
											if (this.identity == 'fan') {
												fellow.style.left = 'calc(30% + 10px)';
												fellow.style.top = 'calc(50% + 30px)';
												fellow.identity = 'fan';
												fellow.setIdentity('反');
												fellow.identityShown = true;
											}
											if (this.identity == 'nei') {
												fellow.style.left = 'calc(40% + 10px)';
												fellow.style.top = 'calc(30% + 30px)';
												fellow.identity = 'nei';
												fellow.setIdentity('内');
												fellow.identityShown = true;
											}
										} else {
											if (game.yysfellows) {
												fellow.style.left = 'calc(50% + 10px)';
												fellow.style.top = 'calc(50% + 30px)';
												fellow.setIdentity('猜');
												fellow.identityShown = false;
											}
										}
										fellow.clearSkills(true);
										fellow.setIdentity('戟');
										if (!player.storage.yysATKx) {
											player.storage.yysATKx = 0;
										}
										fellow.maxHp = (player.storage.yysATK * (100 + player.storage.yysATKx)) / 100 / 200;
										fellow.hp = fellow.maxHp;
										fellow.storage.yysATK = player.storage.yysATK;
										fellow.storage.yysDEF = player.storage.yysDEF; //QQQ
										fellow.addSkill('dpcqbnmp');
										fellow.addSkill('dpcqbnhx');
										fellow.addSkill('haichaorumeng_hybjrecover');
										fellow.addSkill('haichaorumeng_hybjchaosheng');
										fellow.markSkill('haichaorumeng_hybjchaosheng');
										fellow.node.avatar.setBackgroundImage('extension/斗破苍穹X阴阳师/image/qxq_yyshaiyuanbeiji.jpg');
										fellow.node.identity.dataset.color = fellow.identity;
										fellow.storage.yyssustainup -= 30;
										player.storage.hcrmbuffadd = true;
										player.storage.yyssustainup -= 30;
										player.removeSkill('haichaorumeng');
										player.addSkill('yongshengzhixi');
										player.markSkill('yongshengzhixi_beige');
										('step 1');
										var evt = _status.event.getParent('phaseUse');
										if (evt && evt.name == 'phaseUse') {
											evt.skipped = true;
										}
										var evt = _status.event.getParent('phaseUse');
										if (evt && evt.name == 'phaseUse') {
											evt.finish();
										}
									},
									ai: {
										order: 999,
										result: {
											player: 1,
										},
									},
								},
								hybjrecover: {
									silent: true,
									onremove(player) {
										player.addSkill('haichaorumeng_hybjrecover');
									},
									trigger: {
										global: 'damageEnd',
									},
									forced: true,
									filter(event, player) {
										return player.getFriends().includes(event.player) && event.num > 0;
									},
									content() {
										var recovernum = Math.round(event.num * 0.3);
										if (recovernum < 1) {
											if (Math.random() <= 0.3) {
												trigger.player.recover();
												player.line(trigger.player, 'green');
											}
										} else {
											trigger.player.recover(recovernum);
											player.line(trigger.player, 'green');
										}
									},
									popup: false,
								},
								hybjchaosheng: {
									silent: true,
									init(player) {
										player.storage.haichaorumeng_hybjchaosheng = 3;
									},
									onremove(player) {
										if (!player.chaoshengSkillRemoved) {
											player.addSkill('haichaorumeng_hybjchaosheng');
										} else {
											delete player.storage.haichaorumeng_hybjchaosheng;
										}
									},
									mark: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/chaosheng.jpg>`,
									intro: {
										name: '潮声',
										content: '达到7层时返还3点鬼火,当前层数为#.',
									},
									trigger: {
										global: 'consumeBFEnd',
									},
									filter(event, player) {
										return player.getFriends().includes(event.player);
									},
									forced: true,
									content() {
										'step 0';
										game.playdpcq('chaosheng');
										player.storage.haichaorumeng_hybjchaosheng += trigger.num;
										if (player.storage.haichaorumeng_hybjchaosheng >= 7) {
											player.storage.haichaorumeng_hybjchaosheng -= 7;
											var group = trigger.player.getFriends();
											if (!group.includes(trigger.player)) {
												group.push(trigger.player);
											}
											for (var i = 0; i < group.length; i++) {
												if (!group[i].storage.hybjAddTime || group[i].storage.hybjAddTime < 5) {
													if (!group[i].storage.hybjAddTime) {
														group[i].storage.hybjAddTime = 0;
													}
													group[i].storage.hybjAddTime++;
													group[i].storage.yysATKx += 15;
													game.log('潮声使', group[i], '的伤害增加15%!');
												}
											}
											game.log(player, '返还了3点鬼火!');
											game.getBF(trigger.player, 3);
										}
										('step 1');
										if (player.storage.haichaorumeng_hybjchaosheng >= 7) {
											event.goto(0);
										} else {
											event.finish();
										}
									},
									popup: false,
								},
							},
						},
						yongshengzhixi: {
							init(player) {
								player.storage.yongshengzhixi = 0;
								player.storage.yongshengzhixi_beige = 0;
							},
							onremove(player) {
								if (player.storage.hcrmbuffadd == true) {
									player.storage.yysATKx -= 30;
									player.storage.hcrmbuffadd = false;
								}
								if (player.storage.yongshengzhixi_beige) {
									player.storage.yongshengzhixi_beige = 0;
									delete player.storage.yongshengzhixi_beige;
								}
							},
							mark: true,
							nobracket: true,
							marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/yongshengzhixi.jpg>`,
							intro: {
								name: '永生之汐',
								content(storage, player) {
									var str = '<li>【施放】:消耗两点鬼火,立即结束当前回合并拔出【海原贝戟】并将此技能替换为【海潮入梦】,随后令潮汐奔流,每名敌方均有(20%+【悲歌】层数x10%)的概率受到一点伤害,若【悲歌】层数达到5层,则造成伤害时额外对其追加一点伤害.<li>【悲歌】:施放【海潮入梦】后,【千姬】的每个回合开始时,获得一层【悲歌】.';
									if (player.hasSkill('yongshengzhixi_beige')) str += `<br><li>当前【悲歌】层数为${player.storage.yongshengzhixi_beige}.`;
									return str;
								},
							},
							audio: 'ext:斗破苍穹X阴阳师/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.bluefire - player.bluefireused >= 2;
							},
							content() {
								'step 0';
								game.consumeBF(player, 2);
								('step 1');
								for (var i of game.players) {
									if (i.name == 'qxq_yyshaiyuanbeiji') {
										player.chaoshengSkillRemoved = true;
										i.removeSkill('haichaorumeng_hybjchaosheng');
										player.yysRemoveFellow();
									}
								}
								for (var i = 0; i < game.dead.length; i++) {
									if (game.dead[i].name == 'qxq_yyshaiyuanbeiji') {
										player.chaoshengSkillRemoved = true;
										game.dead[i].removeSkill('haichaorumeng_hybjchaosheng');
										player.yysRemoveFellow();
									}
								}
								var num = player.storage.yongshengzhixi_beige;
								var enemy = player.getEnemies();
								if (enemy && enemy.length) {
									for (var i = 0; i < enemy.length; i++) {
										if (Math.random() <= 0.2 + num / 10) {
											if (player.storage.yongshengzhixi_beige >= 5) {
												enemy[i].damage(2);
											} else {
												enemy[i].damage();
											}
										}
									}
								}
								('step 2');
								player.storage.yongshengzhixi_beige = 0;
								delete player.storage.yongshengzhixi_beige;
								player.removeSkill('yongshengzhixi');
								player.storage.yongshengzhixi_beige = 0;
								delete player.storage.yongshengzhixi_beige;
								player.unmarkSkill('yongshengzhixi_beige');
								player.addSkill('haichaorumeng');
								('step 3');
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.skipped = true;
								}
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.finish();
								}
							},
							ai: {
								order: 0.1,
								result: {
									player(player) {
										if (player.storage.yongshengzhixi_beige <= 3) return -1;
										if (player.storage.yongshengzhixi_beige == 3 && Math.random() <= 0.5) return 1;
										if (player.storage.yongshengzhixi_beige == 4 && Math.random() <= 0.75) return 1;
										if (player.storage.yongshengzhixi_beige == 5) return 1;
									},
								},
							},
							group: ['yongshengzhixi_check', 'yongshengzhixi_beige'],
							subSkill: {
								check: {
									silent: true,
									trigger: {
										global: 'phaseBegin',
									},
									forced: true,
									content() {
										var num = 0;
										for (var i of game.players) {
											if (i.name == 'qxq_yyshaiyuanbeiji') {
												num++;
											}
										}
										if (num == 0) {
											player.removeSkill('yongshengzhixi');
											player.storage.yongshengzhixi_beige = 0;
											delete player.storage.yongshengzhixi_beige;
											player.unmarkSkill('yongshengzhixi_beige');
											player.addSkill('haichaorumeng');
											for (var i = 0; i < game.dead.length; i++) {
												if (game.dead[i].name == 'qxq_yyshaiyuanbeiji') {
													player.chaoshengSkillRemoved = true; //QQQ
													game.dead[i].removeSkill('haichaorumeng_hybjchaosheng');
													game.dead[i].delete();
												}
											}
										} else {
											player.addSkill('yongshengzhixi');
											player.markSkill('yongshengzhixi_beige');
										}
									},
									popup: false,
								},
								beige: {
									onremmove(player) {
										delete player.storage.yongshengzhixi_beige;
									},
									mark: true,
									nobracket: true,
									marktext: `<img style=width:20px src=extension/斗破苍穹X阴阳师/jntx/beige.jpg>`,
									intro: {
										name: '悲歌',
										content: '当前悲歌层数为#.',
									},
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									content() {
										player.storage.yongshengzhixi_beige++;
									},
								},
							},
						},
						dpcqwanyingfu: {
							nobracket: true,
							trigger: {
								global: 'useCardToBegin',
							},
							filter(event, player) {
								if (player.hasSkill('dpcqwanyingfu_cannot')) return false;
								return event.target == player && event.targets.length == 1 && event.player != player && get.tag(event.card, 'damage') && player.countCards('h', { color: 'black' }) > 0;
							},
							filterCard: {
								color: 'black',
							},
							selectCard: 1,
							content() {
								'step 0';
								var next = player.chooseToDiscard(get.prompt2('【万影缚】:请弃置一张黑色牌'), { color: 'black' }, true);
								next.set('ai', function (card) {
									return 9 - get.value(card);
								});
								('step 1');
								lib.skill.dpcqwanyingfu_cannot = {
									nobracket: true,
									mod: {
										playerEnabled(card, player, target) {
											if (card.name == 'sha') return false;
										},
										cardEnabled(card, player) {
											if (card.name == 'sha') return false;
										},
										cardEnabled2(card, player) {
											if (card.name == 'sha') return false;
										},
										cardRespondable(card, player) {
											if (card.name == 'sha') return false;
										},
										cardSavable(card, player) {
											if (card.name == 'sha') return false;
										},
										targetInRange(card) {
											if (card.name == 'sha') return false;
										},
									},
									trigger: {
										global: 'phaseAfter',
									},
									forced: true,
									content() {
										player.removeSkill('dpcqwanyingfu_cannot');
									},
								};
								lib.translate.dpcqwanyingfu_cannot = '万影缚';
								lib.translate.dpcqwanyingfu_cannot_info = '锁定技,此回合结束前,你无法使用<杀>.';
								player.addTempSkill('dpcqwanyingfu_cannot');
								var evt = _status.event.parent.parent;
								while (evt.name == 'tirgger' || evt.name == 'arrangeTrigger') {
									evt = evt.parent;
									if (evt.name != 'tirgger' && evt.name != 'arrangeTrigger') {
										evt.finish();
									}
								}
							},
						},
						dpcqyingqie: {
							nobracket: true,
							init(player) {
								lib.card['qie1'] = {
									type: 'equip',
									subtype: 'equip1',
									image: '',
									usable: Infinity,
									updateUsable: 'phaseUse',
									suitList: ['spade', 'heart', 'club', 'diamond'].randomGet(),
									numberList: get.rand(1, 13),
									distance: {
										attackFrom: -1,
									},
									filterTarget(card, player, target) {
										return target == player;
									},
									modTarget(card, player, target) {
										return target == player;
									},
									content() {
										player.equip(card);
									},
									selectTarget: -1,
									toself: true,
									savable: true,
									async onEquip(event, trigger, player) {
										var E = player.getCards('e');
										var num = 0;
										for (var i = 0; i < E.length; i++) {
											if (['qie1', 'qie9', 'qie10', 'qie11', 'qie12', 'qie13', 'qie14'].includes(E[i].name)) num++;
										}
										if (num >= 3) player.addSkill('dpcqyingqie_respond3');
										if (num >= 5) player.addSkill('dpcqyingqie_respond5');
									},
									onLose(player) {
										var E = player.getCards('e');
										var num = 0;
										for (var i = 0; i < E.length; i++) {
											if (['qie1', 'qie9', 'qie10', 'qie11', 'qie12', 'qie13', 'qie14'].includes(E[i].name)) num++;
										}
										if (num < 3) player.removeSkill('dpcqyingqie_respond3');
										if (num < 5) player.removeSkill('dpcqyingqie_respond5');
									},
									ai: { basic: { order: 13.2, useful: 3, value: 2.2, equipValue: 9.1 }, tag: { draw: 2 } },
								};
								lib.card['qie1'].image = 'ext:斗破苍穹X阴阳师/image/qie.jpg';
								lib.translate['qie1'] = '切';
								lib.translate['qie1_info'] = '<仅对<凌影>生效>每装备一张,攻击距离+2.';
								for (var i = 9; i < 15; i++) {
									lib.card[`qie${i}`] = {
										type: 'equip',
										subtype: 'equip' + i,
										image: '',
										usable: Infinity,
										updateUsable: 'phaseUse',
										suitList: ['spade', 'heart', 'club', 'diamond'].randomGet(),
										numberList: get.rand(1, 13),
										distance: {
											attackFrom: -1,
										},
										filterTarget(card, player, target) {
											return target == player;
										},
										modTarget(card, player, target) {
											return target == player;
										},
										content() {
											player.equip(card);
										},
										selectTarget: -1,
										toself: true,
										savable: true,
										async onEquip(event, trigger, player) {
											var E = player.getCards('e');
											var num = 0;
											for (var i = 0; i < E.length; i++) {
												if (['qie1', 'qie9', 'qie10', 'qie11', 'qie12', 'qie13', 'qie14'].includes(E[i].name)) num++;
											}
											if (num >= 3) player.addSkill('dpcqyingqie_respond3');
											if (num >= 5) player.addSkill('dpcqyingqie_respond5');
										},
										onLose(player) {
											var E = player.getCards('e');
											var num = 0;
											for (var i = 0; i < E.length; i++) {
												if (['qie1', 'qie9', 'qie10', 'qie11', 'qie12', 'qie13', 'qie14'].includes(E[i].name)) num++;
											}
											if (num < 3) player.removeSkill('dpcqyingqie_respond3');
											if (num < 5) player.removeSkill('dpcqyingqie_respond5');
										},
										ai: { basic: { order: 13.2, useful: 3, value: 2.2, equipValue: 9.1 }, tag: { draw: 2 } },
									};
									lib.card[`qie${i}`].image = 'ext:斗破苍穹X阴阳师/image/qie.jpg';
									lib.translate[`qie${i}`] = '切';
									lib.translate[`qie${i}_info`] = '<仅对<凌影>生效>每装备一张,攻击距离+2.';
								}
								lib.skill.dpcqyingqie_res_sha = {
									enable: ['chooseToUse', 'chooseToRespond'],
									filterCard: {
										name: ['qie1', 'qie9', 'qie10', 'qie11', 'qie12', 'qie13', 'qie14'],
									},
									viewAs: {
										name: 'sha',
									},
									viewAsFilter(player) {
										if (player.countCards('he', 'qie1')) return true;
										if (player.countCards('he', 'qie9')) return true;
										if (player.countCards('he', 'qie10')) return true;
										if (player.countCards('he', 'qie11')) return true;
										if (player.countCards('he', 'qie12')) return true;
										if (player.countCards('he', 'qie13')) return true;
										if (player.countCards('he', 'qie14')) return true;
										return false;
									},
									position: 'e',
									prompt: '将一张装备区内的<切>当杀使用或打出',
									check() {
										return 1;
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'respondSha') && current < 0) return 0.6;
											},
										},
										respondSha: true,
										skillTagFilter(player) {
											if (player.countCards('he', 'qie1')) return true;
											if (player.countCards('he', 'qie9')) return true;
											if (player.countCards('he', 'qie10')) return true;
											if (player.countCards('he', 'qie11')) return true;
											if (player.countCards('he', 'qie12')) return true;
											if (player.countCards('he', 'qie13')) return true;
											if (player.countCards('he', 'qie14')) return true;
											return false;
										},
										order() {
											return get.order({ name: 'sha' }) - 0.1;
										},
										useful: -1,
										value: -1,
										yingbian(card, player, targets, viewer) {
											if (get.attitude(viewer, player) <= 0) return 0;
											var base = 0,
												hit = false;
											if (get.cardtag(card, 'yingbian_hit')) {
												hit = true;
												if (
													targets.filter(function (target) {
														return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
													})
												)
													base += 5;
											}
											if (get.cardtag(card, 'yingbian_all')) {
												if (
													game.hasPlayer(function (current) {
														return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
													})
												)
													base += 5;
											}
											if (get.cardtag(card, 'yingbian_damage')) {
												if (
													targets.filter(function (target) {
														return (
															get.attitude(player, target) < 0 &&
															(hit ||
																!target.mayHaveShan() ||
																player.hasSkillTag(
																	'directHit_ai',
																	true,
																	{
																		target: target,
																		card: card,
																	},
																	true
																)) &&
															!target.hasSkillTag('filterDamage', null, {
																player: player,
																card: card,
																jiu: true,
															})
														);
													})
												)
													base += 5;
											}
											return base;
										},
										canLink(player, target, card) {
											if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
											if (
												target.mayHaveShan() &&
												!player.hasSkillTag(
													'directHit_ai',
													true,
													{
														target: target,
														card: card,
													},
													true
												)
											)
												return false;
											if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
											return true;
										},
										basic: {
											useful: [5, 3, 1],
											value: [5, 3, 1],
										},
										result: {
											target(player, target, card, isLink) {
												var eff = (function () {
													if (!isLink && player.hasSkill('jiu')) {
														if (
															!target.hasSkillTag('filterDamage', null, {
																player: player,
																card: card,
																jiu: true,
															})
														) {
															if (get.attitude(player, target) > 0) {
																return -7;
															} else {
																return -4;
															}
														}
														return -0.5;
													}
													return -1.5;
												})();
												if (
													!isLink &&
													target.mayHaveShan() &&
													!player.hasSkillTag(
														'directHit_ai',
														true,
														{
															target: target,
															card: card,
														},
														true
													)
												)
													return eff / 1.2;
												return eff;
											},
										},
										tag: {
											respond: 1,
											respondShan: 1,
											damage(card) {
												if (card.nature == 'poison') return;
												return 1;
											},
											natureDamage(card) {
												if (card.nature) return 1;
											},
											fireDamage(card, nature) {
												if (card.nature == 'fire') return 1;
											},
											thunderDamage(card, nature) {
												if (card.nature == 'thunder') return 1;
											},
											poisonDamage(card, nature) {
												if (card.nature == 'poison') return 1;
											},
										},
									},
								};
								lib.translate.dpcqyingqie_res_sha = '影切·杀';
								player.addSkill('dpcqyingqie_res_sha');
								lib.skill.dpcqyingqie_res_shan = {
									enable: ['chooseToRespond', 'chooseToUse'],
									filterCard: {
										name: ['qie1', 'qie9', 'qie10', 'qie11', 'qie12', 'qie13', 'qie14'],
									},
									viewAs: {
										name: 'shan',
									},
									prompt: '将一张装备区内的<切>当闪使用或打出',
									check() {
										return 1;
									},
									position: 'e',
									viewAsFilter(player) {
										if (player.countCards('he', 'qie1')) return true;
										if (player.countCards('he', 'qie9')) return true;
										if (player.countCards('he', 'qie10')) return true;
										if (player.countCards('he', 'qie11')) return true;
										if (player.countCards('he', 'qie12')) return true;
										if (player.countCards('he', 'qie13')) return true;
										if (player.countCards('he', 'qie14')) return true;
										return false;
									},
									ai: {
										respondShan: true,
										skillTagFilter(player) {
											if (player.countCards('he', 'qie1')) return true;
											if (player.countCards('he', 'qie9')) return true;
											if (player.countCards('he', 'qie10')) return true;
											if (player.countCards('he', 'qie11')) return true;
											if (player.countCards('he', 'qie12')) return true;
											if (player.countCards('he', 'qie13')) return true;
											if (player.countCards('he', 'qie14')) return true;
										},
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'respondShan') && current < 0) return 0.6;
											},
										},
										order() {
											return get.order({ name: 'shan' }) - 0.1;
										},
										useful: -1,
										value: -1,
										basic: {
											useful: [7, 5.1, 2],
											value: [7, 5.1, 2],
										},
										result: {
											player: 1,
										},
									},
								};
								lib.translate.dpcqyingqie_res_shan = '影切·闪';
								player.addSkill('dpcqyingqie_res_shan');
								lib.skill.dpcqyingqie_res_end2 = {
									audio: 'ext:斗破苍穹X阴阳师/audio:2',
									trigger: {
										player: 'respond',
									},
									filter(event, player) {
										if (event.skill != 'dpcqyingqie_res_shan' && event.skill != 'dpcqyingqie_res_sha') return false;
										return player.countCards('he', { name: 'qie1' }) > 0 || player.countCards('he', { name: 'qie9' }) > 0 || player.countCards('he', { name: 'qie10' }) > 0 || player.countCards('he', { name: 'qie11' }) > 0 || player.countCards('he', { name: 'qie12' }) > 0 || player.countCards('he', { name: 'qie13' }) > 0 || player.countCards('he', { name: 'qie14' }) > 0;
									},
									logTarget: 'source',
									prompt2: '当你因发动〖影切·杀〗或〖影切·闪〗而使用或打出【杀】或【闪】时,你可以弃置一张【影】并对对方使用一张【杀】.',
									content() {
										if (player.countCards('h', { name: 'sha' }) > 0) {
											player.chooseToUse('是否对此目标追加一张【杀】？', { name: 'sha' }, trigger.source);
											game.log(player, '对', trigger.source, '追加使用了一张<杀>!');
										}
									},
								};
								lib.translate['dpcqyingqie_res_end2'] = '影切';
								player.addSkill('dpcqyingqie_res_end2');
								lib.skill.dpcqyingqie_res_end1 = {
									audio: 'ext:斗破苍穹X阴阳师/audio:2',
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										if ((event.card.name != 'sha' && event.card.name != 'shan') || (event.skill != 'dpcqyingqie_res_sha' && event.skill != 'dpcqyingqie_res_shan')) return false;
										var target = lib.skill.dpcqyingqie_res_end1.logTarget(event, player);
										return target != undefined;
									},
									logTarget(event, player) {
										if (event.card.name == 'sha') return event.targets[0];
										return event.respondTo[0];
									},
									prompt2: '当你因发动〖影切·杀〗或〖影切·闪〗而使用或打出【杀】或【闪】时,你可以弃置一张【影】并对对方使用一张【杀】.',
									content() {
										var target = lib.skill.dpcqyingqie_res_end1.logTarget(trigger, player);
										if (player.countCards('h', { name: 'sha' }) > 0) {
											player.chooseToUse('是否对此目标追加一张【杀】？', { name: 'sha' }, target);
											game.log(player, '对', target, '追加使用了一张<杀>!');
										}
									},
								};
								lib.translate['dpcqyingqie_res_end1'] = '影切';
								player.addSkill('dpcqyingqie_res_end1');
							},
							enable: 'phaseUse',
							usable: 1,
							filterCard: {
								subtype: ['equip1', 'equip9', 'equip10', 'equip11', 'equip12', 'equip13', 'equip14'],
							},
							selectCard: [0, Infinity],
							position: 'he',
							prompt: '选择任意数量的<切>或武器牌,使其转化为<切>.',
							content() {
								var list = event.cards;
								for (var i = 0; i < list.length; i++) {
									var num = [1, 9, 10, 11, 12, 13, 14].randomGet();
									player.gain(game.createCard('qie' + num, lib.card[`qie${num}`].suit, lib.card[`qie${num}`].number))._triggered = null;
								}
								lib.translate['dpcqyingqie_respond3'] = '影切';
								lib.translate['dpcqyingqie_respond3_info'] = '你打出的杀,目标需使用两张【闪】方可抵消.';
								lib.translate['dpcqyingqie_respond5'] = '影切';
								lib.translate['dpcqyingqie_respond5_info'] = '你打出的杀,目标需使用三张【闪】方可抵消,且造成的伤害+1.';
							},
							group: ['dpcqyingqie_start'],
							subSkill: {
								start: {
									trigger: {
										global: 'gameStart',
									},
									forced: true,
									content() {
										var i = [1, 9, 10, 11, 12, 13, 14].randomGet();
										player.gain(game.createCard('qie' + i, lib.card[`qie${i}`].suit, lib.card[`qie${i}`].number));
										var i = [1, 9, 10, 11, 12, 13, 14].randomGet();
										player.gain(game.createCard('qie' + i, lib.card[`qie${i}`].suit, lib.card[`qie${i}`].number));
									},
								},
								respond3: {
									nobracket: true,
									trigger: {
										player: 'useCardToPlayered',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
									},
									logTarget: 'target',
									content() {
										var id = trigger.target.playerid;
										var map = trigger.parent.customArgs;
										if (!map[id]) map[id] = {};
										if (typeof map[id].shanRequired == 'number') {
											map[id].shanRequired++;
										} else {
											map[id].shanRequired = 2;
										}
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
										},
									},
								},
								respond5: {
									nobracket: true,
									trigger: {
										player: ['shaBegin', 'useCardToPlayered'],
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
									},
									logTarget: 'target',
									content() {
										if (trigger.name == 'sha') {
											if (!trigger.baseDamage) trigger.baseDamage = 1;
											trigger.baseDamage += 1;
										} else {
											var id = trigger.target.playerid;
											var map = trigger.parent.customArgs;
											if (!map[id]) map[id] = {};
											if (typeof map[id].shanRequired == 'number') {
												map[id].shanRequired += 2;
											} else {
												map[id].shanRequired = 3;
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
							},
						},
						dpcqhuanying: {
							nobracket: true,
							init(player) {
								for (var i = 2; i < 9; i++) {
									lib.card[`ying${i}`] = {
										type: 'equip',
										subtype: 'equip' + i,
										image: '',
										usable: Infinity,
										updateUsable: 'phaseUse',
										suitList: ['spade', 'heart', 'club', 'diamond'].randomGet(),
										numberList: get.rand(1, 13),
										distance: {
											globalFrom: -1,
											globalTo: 1,
										},
										filterTarget(card, player, target) {
											return target == player;
										},
										modTarget(card, player, target) {
											return target == player;
										},
										content() {
											player.equip(card);
										},
										selectTarget: -1,
										toself: true,
										savable: true,
										onEquip: [],
										onLose: [],
										ai: { basic: { order: 13.2, useful: 3, value: 2.2, equipValue: 9.1 }, tag: { draw: 2 } },
									};
									lib.card[`ying${i}`].image = 'ext:斗破苍穹X阴阳师/image/ying.jpg';
									lib.translate[`ying${i}`] = '影';
									lib.translate[`ying${i}_info`] = '<仅对<凌影>生效>攻击距离+1,防御距离+1.';
								}
								lib.skill.dpcqhuanying_shan = {
									enable: ['chooseToRespond', 'chooseToUse'],
									filterCard: {
										name: ['ying2', 'ying3', 'ying4', 'ying5', 'ying6', 'ying7', 'ying8'],
									},
									viewAs: {
										name: 'shan',
									},
									prompt: '将一张装备区内的<影>当闪使用或打出',
									check() {
										return 1;
									},
									position: 'e',
									viewAsFilter(player) {
										if (player.countCards('he', 'ying2')) return true;
										if (player.countCards('he', 'ying3')) return true;
										if (player.countCards('he', 'ying4')) return true;
										if (player.countCards('he', 'ying5')) return true;
										if (player.countCards('he', 'ying6')) return true;
										if (player.countCards('he', 'ying7')) return true;
										if (player.countCards('he', 'ying8')) return true;
										return false;
									},
									ai: {
										respondShan: true,
										skillTagFilter(player) {
											if (player.countCards('he', 'ying2')) return true;
											if (player.countCards('he', 'ying3')) return true;
											if (player.countCards('he', 'ying4')) return true;
											if (player.countCards('he', 'ying5')) return true;
											if (player.countCards('he', 'ying6')) return true;
											if (player.countCards('he', 'ying7')) return true;
											if (player.countCards('he', 'ying8')) return true;
										},
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'respondShan') && current < 0) return 0.6;
											},
										},
										order() {
											return get.order({ name: 'shan' }) - 0.1;
										},
										useful: -1,
										value: -1,
										basic: {
											useful: [7, 5.1, 2],
											value: [7, 5.1, 2],
										},
										result: {
											player: 1,
										},
									},
								};
								lib.translate.dpcqhuanying_shan = '幻影·闪';
								player.addSkill('dpcqhuanying_shan');
								lib.skill.dpcqhuanying_end2 = {
									audio: 'ext:斗破苍穹X阴阳师/audio:2',
									trigger: {
										player: 'respond',
									},
									filter(event, player) {
										if (event.skill != 'dpcqhuanying_shan') return false;
										return true;
									},
									prompt2: '当你因发动〖幻影·闪〗而使用或打出【闪】时,你可以弃置一张【影】并对视为打出【闪】并对攻击范围内的一名角色使用一张【杀】.',
									content() {
										'step 0';
										player.chooseTarget(get.prompt2('请选择使用【杀】的目标'), function (card, player, target) {
											return target != player && player.inRange(target);
										});
										('step 1');
										if (result.bool) {
											var target = result.targets[0];
											player.useCard({ name: 'sha' }, target);
										}
									},
								};
								lib.translate['dpcqhuanying_end2'] = '影切';
								player.addSkill('dpcqhuanying_end2');
								lib.skill.dpcqyingqie_res_end1 = {
									audio: 'ext:斗破苍穹X阴阳师/audio:2',
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										if (event.card.name != 'shan' || event.skill != 'dpcqhuanying_shan') return false;
										return true;
									},
									prompt2: '当你因发动〖影切·杀〗或〖影切·闪〗而使用或打出【杀】或【闪】时,你可以弃置一张【影】并对对方使用一张【杀】.',
									content() {
										'step 0';
										player.chooseTarget(get.prompt2('请选择使用【杀】的目标'), function (card, player, target) {
											return target != player && player.inRange(target);
										});
										('step 1');
										if (result.bool) {
											var target = result.targets[0];
											player.useCard({ name: 'sha' }, target);
										}
									},
								};
								lib.translate['dpcqyingqie_res_end1'] = '影切';
								player.addSkill('dpcqyingqie_res_end1');
							},
							enable: 'phaseUse',
							usable: 1,
							filterCard: {
								subtype: ['equip2', 'equip3', 'equip4', 'equip5', 'equip6', 'equip7', 'equip8'],
							},
							selectCard: [0, Infinity],
							position: 'he',
							prompt: '选择任意数量的<影>或非武器牌,使其转化为<影>.',
							content() {
								var list = event.cards;
								for (var i = 0; i < list.length; i++) {
									var num = get.rand(2, 8);
									player.gain(game.createCard('ying' + num, lib.card[`ying${num}`].suit, lib.card[`ying${num}`].number), 'gain2')._triggered = null;
								}
							},
							group: ['dpcqhuanying_start'],
							subSkill: {
								start: {
									trigger: {
										global: 'gameStart',
									},
									forced: true,
									content() {
										var subtype = ['ying2', 'ying3', 'ying4', 'ying5', 'ying6', 'ying7', 'ying8'].randomGet();
										player.equip(game.createCard(subtype, lib.card[subtype].suit, lib.card[subtype].number), 'equip2')._triggered = null;
										var subtype = ['ying2', 'ying3', 'ying4', 'ying5', 'ying6', 'ying7', 'ying8'].randomGet();
										player.equip(game.createCard(subtype, lib.card[subtype].suit, lib.card[subtype].number), 'equip2')._triggered = null;
									},
								},
							},
						},
						dpcqyingshazhen: {
							nobracket: true,
							derivation: ['dpcqshunyuyingshazhen'],
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.player != player;
							},
							content() {
								'step 0';
								var list = [];
								for (var i = 0; i < player.getCards('e').length; i++) {
									if (['ying2', 'ying3', 'ying4', 'ying5', 'ying6', 'ying7', 'ying8'].indexOf(player.getCards('e')[i].name) != -1) list.push(player.getCards('e')[i]);
								}
								player.disCard_ying = list.length;
								player.lose(list);
								var target = trigger.player;
								lib.skill.becomeBaiBan = {
									init(player) {
										player.isFlying = true;
									},
									trigger: {
										global: 'phaseAfter',
									},
									forced: true,
									content() {
										player.removeSkill('becomeBaiBan');
									},
									onremove(player) {
										for (var i = 0; i < player.loseSkill.length; i++) {
											player.addSkill(player.loseSkill[i]);
										}
										player.isFlying = false;
									},
								};
								target.loseSkill = target.skills;
								target.skills = [];
								target.addSkill('becomeBaiBan');
								player.target = target;
								if ((player.countCards('e', { name: 'ying2' }) || player.countCards('e', { name: 'ying3' }) || player.countCards('e', { name: 'ying4' }) || player.countCards('e', { name: 'ying5' }) || player.countCards('e', { name: 'ying6' }) || player.countCards('e', { name: 'ying7' }) || player.countCards('e', { name: 'ying8' })) && (player.countCards('e', { name: 'qie1' }) || player.countCards('e', { name: 'qie9' }) || player.countCards('e', { name: 'qie10' }) || player.countCards('e', { name: 'qie11' }) || player.countCards('e', { name: 'qie12' }) || player.countCards('e', { name: 'qie13' }) || player.countCards('e', { name: 'qie14' })))
									player.chooseControl('发动【瞬狱·影杀阵】', '不发动').set('ai', function (event) {
										if (player.countCards('h', { name: 'sha' }) >= 2) return '发动【瞬狱·影杀阵】';
									});
								('step 1');
								if (result.control == '发动【瞬狱·影杀阵】') {
									if (player.target != undefined) {
										player.target2 = player.target;
										player.target = undefined;
										player.discard_ying = player.disCard_ying;
										player.disCard_ying = undefined;
										if (!player.target2.isFlying) return;
									}
									player.useSkill('dpcqshunyuyingshazhen');
								} else {
									player.target = undefined;
									player.disCard_ying = undefined;
									event.finish();
								}
							},
						},
						dpcqshunyuyingshazhen: {
							nobracket: true,
							trigger: {
								player: 'dpcqshunyuyingshazhen',
							},
							content() {
								'step 0';
								var target = player.target2;
								var list = [];
								for (var i = 0; i < player.getCards('e').length; i++) {
									if (['qie1', 'qie9', 'qie10', 'qie11', 'qie12', 'qie13', 'qie14'].indexOf(player.getCards('e')[i].name) != -1) list.push(player.getCards('e')[i]);
								}
								if (list.length == 0) return;
								player.lose(list);
								player.discard_qie = list.length;
								var num = Math.min(player.discard_ying || 0, player.discard_qie || 0);
								if (num == 0) return;
								player.callFellow = [];
								for (var x = 0; x < num; x++) {
									var pos = game.players.length + x;
									lib.character.ying = ['male', 'qxq_dpcq', 3, [], []];
									lib.translate.ying = '影';
									var fellow = game.addFellow(pos, 'ying', 'zoominanim');
									fellow.classList.add('minskin');
									fellow.identity = player.identity == 'zhu' ? 'zhong' : player.identity;
									fellow.maxHp = 3;
									fellow.hp = 3;
									lib.skill.dpcqyingqie_res_sha2 = lib.skill.dpcqyingqie_res_sha;
									lib.skill.dpcqyingqie_res_sha2.position = 'he';
									fellow.addSkill('dpcqyingqie_res_sha2');
									lib.skill.dpcqyingqie_res_shan2 = lib.skill.dpcqyingqie_res_shan;
									lib.skill.dpcqyingqie_res_shan2.position = 'he';
									fellow.addSkill('dpcqyingqie_res_shan2');
									fellow.style.left = `calc(20% + ${280 * x}px)`;
									fellow.style.top = 'calc(30% + 25px)';
									fellow.dataset.position = pos;
									fellow.node.avatar.setBackgroundImage('extension/斗破苍穹X阴阳师/image/ying.jpg');
									fellow.useCard(game.createCard('sha'), target);
									player.callFellow.push(fellow);
								}
								('step 1');
								player.target2 = undefined;
								var nameList = [];
								for (var name in lib.card) {
									if (lib.card[name].type == 'equip' && !nameList.includes(name)) {
										nameList.push(name);
									}
								}
								for (var i = 0; i < player.callFellow.length; i++) {
									game.removePlayer(player.callFellow[i]);
									player.gain(game.createCard(nameList.randomGet(), ['heart', 'diamond', 'club', 'spade'].randomGet(), get.rand(1, 13)))._triggered = null;
								}
							},
						},
						dpcqningbingjing: {
							nobracket: true,
							trigger: {
								player: 'useCardToBegin',
							},
							filter(event, card) {
								return event.card && event.card.nature && event.card.nature == 'ice';
							},
							content() {
								'step 0';
								player.chooseControl('造成伤害后额外弃置目标一张牌', '摸一张牌').set('ai', function (event) {
									if (player.countCards('h') >= 3) return '造成伤害后额外弃置目标一张牌';
									else return '摸一张牌';
								});
								('step 1');
								if (result.control == '造成伤害后额外弃置目标一张牌') {
									player.dpcqningbingjing_target = trigger.target;
								} else {
									player.draw();
								}
							},
							group: ['dpcqningbingjing_discard'],
							subSkill: {
								discard: {
									trigger: {
										source: 'damageBegin2',
									},
									audio: true,
									filter(event, player) {
										if (event.source.dpcqningbingjing_target == undefined) return false;
										if (event.card && event.card.name == 'sha' && event.card.nature == 'ice' && event.player.getCards('he').length) return true;
									},
									check(event, player) {
										var target = event.player;
										var eff = get.damageEffect(target, player, player, event.nature);
										if (get.attitude(player, target) > 0) {
											if (eff >= 0) return false;
											return true;
										}
										if (eff <= 0) return true;
										if (target.hp == 1) return false;
										if (event.num > 1 || player.hasSkill('tianxianjiu') || player.hasSkill('luoyi2') || player.hasSkill('reluoyi2')) return false;
										if (target.countCards('he') < 2) return false;
										var num = 0;
										var cards = target.getCards('he');
										if (Array.isArray(cards))
											for (var i of cards) {
												if (get.value(i) > 6) num++;
											}
										if (num >= 2) return true;
										return false;
									},
									forced: true,
									logTarget: 'player',
									content() {
										var list = trigger.player.getCards('he');
										if (list.length) {
											trigger.player.discard(list.randomGet());
											player.line(trigger.player);
										}
										player.dpcqningbingjing_target = undefined;
									},
								},
							},
						},
						dpcqxuanbingxuansha: {
							init(player) {
								player.dpcqxuanbingxuansha_time = 2;
								lib.skill.dpcqxuanbingxuansha_res1 = {
									trigger: {
										player: 'useCard',
									},
									silent: true,
									forced: true,
									filter(event, player) {
										if (event.card.name != 'sha' || event.skill != 'dpcqxuanbingxuansha') return false;
										return true;
									},
									content() {
										player.dpcqxuanbingxuansha_time--;
									},
								};
								player.addSkill('dpcqxuanbingxuansha_res1');
								lib.skill.dpcqxuanbingxuansha_res2 = {
									trigger: {
										player: 'respond',
									},
									filter(event, player) {
										if (event.skill != 'dpcqxuanbingxuansha') return false;
										return true;
									},
									silent: true,
									forced: true,
									content() {
										player.dpcqxuanbingxuansha_time--;
									},
								};
								player.addSkill('dpcqxuanbingxuansha_res2');
								lib.skill.dpcqxuanbingxuansha_clear = {
									trigger: {
										global: 'phaseAfter',
									},
									silent: true,
									forced: true,
									content() {
										player.dpcqxuanbingxuansha_time = 2;
									},
								};
								player.addSkill('dpcqxuanbingxuansha_clear');
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard: {
								suit: 'club',
							},
							viewAs: {
								name: 'sha',
								nature: 'ice',
							},
							viewAsFilter(player) {
								if (player.dpcqxuanbingxuansha_time <= 0) return false;
								if (!player.countCards('hs', { suit: 'club' })) return false;
							},
							position: 'hs',
							prompt: '将一张♣️️牌当杀使用或打出',
							check() {
								return 1;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondSha') && current < 0) return 0.6;
									},
								},
								respondSha: true,
								skillTagFilter(player) {
									if (!player.countCards('hs', { suit: 'club' })) return false;
								},
								order() {
									return get.order({ name: 'sha' }) + 0.1;
								},
								useful: -1,
								value: -1,
								yingbian(card, player, targets, viewer) {
									if (get.attitude(viewer, player) <= 0) return 0;
									var base = 0,
										hit = false;
									if (get.cardtag(card, 'yingbian_hit')) {
										hit = true;
										if (
											targets.filter(function (target) {
												return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
											})
										)
											base += 5;
									}
									if (get.cardtag(card, 'yingbian_all')) {
										if (
											game.hasPlayer(function (current) {
												return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
											})
										)
											base += 5;
									}
									if (get.cardtag(card, 'yingbian_damage')) {
										if (
											targets.filter(function (target) {
												return (
													get.attitude(player, target) < 0 &&
													(hit ||
														!target.mayHaveShan() ||
														player.hasSkillTag(
															'directHit_ai',
															true,
															{
																target: target,
																card: card,
															},
															true
														)) &&
													!target.hasSkillTag('filterDamage', null, {
														player: player,
														card: card,
														jiu: true,
													})
												);
											})
										)
											base += 5;
									}
									return base;
								},
								canLink(player, target, card) {
									if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
									if (
										target.mayHaveShan() &&
										!player.hasSkillTag(
											'directHit_ai',
											true,
											{
												target: target,
												card: card,
											},
											true
										)
									)
										return false;
									if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
									return true;
								},
								basic: {
									useful: [5, 3, 1],
									value: [5, 3, 1],
								},
								result: {
									target(player, target, card, isLink) {
										var eff = (function () {
											if (!isLink && player.hasSkill('jiu')) {
												if (
													!target.hasSkillTag('filterDamage', null, {
														player: player,
														card: card,
														jiu: true,
													})
												) {
													if (get.attitude(player, target) > 0) {
														return -7;
													} else {
														return -4;
													}
												}
												return -0.5;
											}
											return -1.5;
										})();
										if (
											!isLink &&
											target.mayHaveShan() &&
											!player.hasSkillTag(
												'directHit_ai',
												true,
												{
													target: target,
													card: card,
												},
												true
											)
										)
											return eff / 1.2;
										return eff;
									},
								},
								tag: {
									respond: 1,
									respondShan: 1,
									damage(card) {
										if (card.nature == 'poison') return;
										return 1;
									},
									natureDamage(card) {
										if (card.nature) return 1;
									},
									fireDamage(card, nature) {
										if (card.nature == 'fire') return 1;
									},
									thunderDamage(card, nature) {
										if (card.nature == 'thunder') return 1;
									},
									poisonDamage(card, nature) {
										if (card.nature == 'poison') return 1;
									},
								},
							},
						},
						dpcqxuanbingdun: {
							nobracket: true,
							trigger: {
								player: 'damageBefore',
							},
							filter(event, player) {
								if (_status.currentPhase != player && event.nature != 'ice' && player.countCards('he') > 0) return true;
							},
							check(card) {
								return true;
							},
							content() {
								'step 0';
								player.chooseToDiscard(1, 'he', true).set('ai', function (card) {
									return 10 - get.value(card);
									return 0;
								});
								('step 1');
								trigger.nature = 'ice';
							},
						},
						dpcqningbingjie: {
							nobracket: true,
							init(player) {
								player.dpcqxuanbingxuansha_record = 0;
							},
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								return event.card && event.card.suit == 'club';
							},
							forced: true,
							content() {
								'step 0';
								player.dpcqxuanbingxuansha_record++;
								if (player.dpcqxuanbingxuansha_record < 6) event.finish();
								('step 1');
								player.chooseTarget(1, get.prompt2('dpcqningbingjie'), function (card, player, target) {
									return player != target;
								});
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target);
									player.discardPlayerCard('he', target, true);
									player.discardPlayerCard('he', target, true);
									player.dpcqxuanbingxuansha_record = 0;
								} else {
									event.finish();
								}
							},
							group: ['dpcqxuanbingxuansha'],
						},
						dpcqwanhuabingjing: {
							init(player) {
								lib.skill.dpcqwanhuabingjing_draw = {
									trigger: {
										player: 'phaseDrawBegin2',
									},
									filter(event, player) {
										return !event.numFixed;
									},
									forced: true,
									content() {
										if (!player.dpcqwanhuabingjing_drawnum) player.dpcqwanhuabingjing_drawnum = 1;
										trigger.num += player.dpcqwanhuabingjing_drawnum;
										player.removeSkill('dpcqwanhuabingjing_draw');
									},
									onremove(player) {
										player.dpcqwanhuabingjing_drawnum = 0;
									},
								};
							},
							nobracket: true,
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'ice';
							},
							content() {
								if (!player.hasSkill('dpcqwanhuabingjing_draw')) {
									if (!player.dpcqwanhuabingjing_drawnum) player.dpcqwanhuabingjing_drawnum = 1;
									player.addSkill('dpcqwanhuabingjing_draw');
								} else player.dpcqwanhuabingjing_drawnum++;
								trigger.cancel();
							},
						},
						dpcqxuanbinglongxiang: {
							nobracket: true,
							trigger: {
								player: 'phaseUseAfter',
							},
							filter(event, player) {
								return player.hp <= 2 && player.countCards('h', { color: 'black' }) > 0;
							},
							content() {
								'step 0';
								var num = 2 * player.hp;
								var next = player.chooseToDiscard('he', { color: 'black' }, get.prompt2('dpcqxuanbinglongxiang'), [1, num]);
								next.ai = function (card) {
									if (get.position(card) == 'e') return 7 - get.value(card);
									return 8 - get.value(card);
								};
								next.delay = false;
								('step 1');
								if (result.bool) {
									event.num = result.cards.length;
									event.goto(2);
								} else {
									event.finish();
								}
								('step 2');
								player.chooseTarget(get.prompt('请选择目标1'), function (card, player, target) {
									return target != player;
								});
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									event.targetx = target;
									event.goto(4);
								} else event.finish();
								('step 4');
								player.chooseTarget(get.prompt('请选择你与目标1攻击范围内的共同目标'), function (card, player, target) {
									return player.inRange(target) && event.targetx.inRange(target);
								});
								('step 5');
								if (result.bool) {
									var target = result.targets[0];
									event.targety = target;
								}
								('step 6');
								for (var i = 0; i < event.num; i++) {
									if (event.targetx != undefined) player.discardPlayerCard('he', event.targetx, true);
									if (event.targety != undefined) player.discardPlayerCard('he', event.targety, true);
								}
								('step 7');
								if (event.targetx != undefined) event.targetx.damage(player.hp);
							},
						},
						dpcqsheshejiejie: {
							init(player) {
								lib.skill.dpcqsheshejiejie_draw = {
									trigger: {
										global: 'phaseBegin',
									},
									forced: true,
									content() {
										player.draw();
									},
								};
							},
							trigger: {
								player: 'phaseDiscardAfter',
							},
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.chooseToDiscard(1, 'he', true);
								('step 1');
								player.turnOver();
								player.addTempSkill('dpcqsheshejiejie_draw', { player: 'phaseDiscardEnd' });
							},
						},
						dpcqzhirechijian: {
							init(player) {
								player.dpcqzhirechijian_time = 0;
							},
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player, card) {
								return player.dpcqzhirechijian_time == 0 && event.card && get.color(event.card) == 'red';
							},
							content() {
								trigger.nature = 'fire';
								trigger.num++;
								player.dpcqzhirechijian_time++;
							},
							group: ['dpcqzhirechijian_clear'],
							subSkill: {
								clear: {
									trigger: {
										global: 'phaseBefore',
									},
									forced: true,
									content() {
										player.dpcqzhirechijian_time = 0;
									},
								},
							},
						},
						dpcqyuyansheling: {
							init(player) {
								lib.skill.dpcqmdsnw_fengyin = {
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
												return lib.skill.fengyin.skillBlocker(i, player);
											});
											if (list.length) return '失效技能:' + get.translation(list);
											return '无失效技能';
										},
									},
									mod: {
										playerEnabled(card, player, target) {
											if (card.name != 'tao' && card.name != 'jiu' && card.name != 'shan') return false;
										},
										cardEnabled(card, player) {
											if (card.name != 'tao' && card.name != 'jiu' && card.name != 'shan') return false;
										},
										cardEnabled2(card, player) {
											if (card.name != 'tao' && card.name != 'jiu' && card.name != 'shan') return false;
										},
										cardUsable(card, player) {
											if (card.name != 'tao' && card.name != 'jiu' && card.name != 'shan') return 0;
										},
										cardRespondable(card, player) {
											if (card.name != 'tao' && card.name != 'jiu' && card.name != 'shan') return false;
										},
										cardSavable(card, player) {
											if (card.name != 'tao' && card.name != 'jiu' && card.name != 'shan') return false;
										},
										targetInRange(card) {
											if (card.name != 'tao' && card.name != 'jiu' && card.name != 'shan') return false;
										},
									},
									trigger: {
										global: 'phaseBefore',
										player: 'useCardEnd',
									},
									filter(event, player) {
										if (event.name == 'phase') player.useCard_time = 0;
										return event.player == player.target;
									},
									forced: true,
									content() {
										if (trigger.name == 'phase') player.removeSkill('dpcqmdsnw_fengyin');
										else player.useCard_time++;
									},
								};
								lib.translate.dpcqmdsnw_fengyin = '封印';
								lib.translate.dpcqmdsnw_fengyin_info = '来自【美杜莎女王】的封印,你的非锁定技全部失效,且每个回合只能使用和打出【桃】【酒】【闪】直到【美杜莎女王】的下一个回合开始';
							},
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.countCards('h') >= 8;
							},
							content() {
								'step 0';
								player.chooseToDiscard(8, 'he', true);
								('step 1');
								player
									.chooseTarget(1, get.prompt2('dpcqyuyansheling'), function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										var att = get.attitude(player, target);
										var nh = target.countCards('h');
										return -att * nh;
									});
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'fire');
									target.target = player;
									target.addSkill('dpcqmdsnw_fengyin');
								}
							},
						},
						dpcqliyanshiren: {
							init(player) {
								player.dpcqliyanshiren_use = [];
							},
							nobracket: true,
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								return !player.dpcqliyanshiren_use.includes(event.card.suit) && _status.currentPhase == player && event.card != undefined;
							},
							content() {
								'step 0';
								event.suit = trigger.card.suit;
								player.dpcqliyanshiren_use.push(event.suit);
								player
									.chooseTarget('请选择【利眼识人】目标', true, function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										var nh = target.countCards('h');
										if (att > 0) return att + 1;
										if (att == 0) return Math.random();
										return -att * nh;
									}).animate = false;
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									var cards = target.getCards('h');
									player.showCards(cards, get.translation(target.name) + '的手牌');
									if (Array.isArray(cards))
										for (var i of cards) {
											if (i.suit == event.suit) {
												event.bool = true;
											}
										}
								}
								if (event.bool != true) event.finish();
								('step 2');
								player.chooseControl(`令${get.translation(event.target.name)}摸一张牌`, `令${get.translation(event.target.name)}弃一张牌`, function (event, player) {
									return `令${get.translation(event.target.name)}弃一张牌`;
								});
								('step 3');
								if (result.control == `令${get.translation(event.target.name)}摸一张牌`) {
									event.target.draw();
								} else {
									event.target.chooseToDiscard('he', 1, true);
									game.log(event.target);
								}
							},
							group: ['dpcqliyanshiren_check'],
							subSkill: {
								check: {
									trigger: {
										player: 'phaseBegin',
									},
									silent: true,
									forced: true,
									content() {
										player.dpcqliyanshiren_use = [];
									},
									popup: false,
								},
							},
						},
						dpcqrenruhanxiu: {
							init(player) {
								lib.skill.dpcqrenruhanxiu_zhang = {
									init(player) {
										player.storage.dpcqrenruhanxiu_zhang = 1;
									},
									mark: true,
									marktext: '账',
									intro: {
										name: '账',
										content: '当前标记数:#.',
									},
									onremove(player) {
										player.storage.dpcqrenruhanxiu_zhang = -1;
										delete player.storage.dpcqrenruhanxiu_zhang;
									},
								};
							},
							nobracket: true,
							trigger: {
								player: 'damageBegin',
							},
							filter(event, player) {
								return event.source != undefined && event.source != player;
							},
							forced: true,
							content() {
								if (!player.record_zhang) player.record_zhang = 0;
								player.record_zhang++;
								if (!trigger.source.hasSkill('dpcqrenruhanxiu_zhang')) trigger.source.addSkill('dpcqrenruhanxiu_zhang');
								else trigger.source.storage.dpcqrenruhanxiu_zhang++;
							},
							group: ['dpcqrenruhanxiu_use'],
							subSkill: {
								use: {
									trigger: {
										player: 'phaseBegin',
									},
									filter(event, player) {
										if (player.record_zhang != undefined && player.record_zhang > 0) return player.countCards('he') >= 3;
									},
									check(event, player) {
										if (player.record_zhang >= 3) return true;
										return false;
									},
									content() {
										'step 0';
										player.chooseToDiscard('he', 3, true);
										('step 1');
										for (var i of game.players) {
											if (i.hasSkill('dpcqrenruhanxiu_zhang')) {
												var x = i.storage.dpcqrenruhanxiu_zhang;
												i.chooseToDiscard('he', x + 1, true);
												i.storage.dpcqrenruhanxiu_zhang = -1;
												i.removeSkill('dpcqrenruhanxiu_zhang');
											}
										}
										player.record_zhang = 0;
									},
								},
							},
						},
						dpcqpaimaijuecai: {
							nobracket: true,
							init(player) {
								lib.dpcqpaimaijuecai_price = 0;
								player.storage.dpcqpaimaijuecai = [];
								lib.exchangeCharacter = player;
								lib.translate.dpcqpaimaijuecai_exchange = '拍卖绝才·交易';
							},
							global: 'dpcqpaimaijuecai_exchange',
							mark: true,
							marktext: '宝',
							intro: {
								name: '宝',
								content: 'cards',
							},
							enable: 'phaseUse',
							filter(event, player) {
								return player.storage.dpcqpaimaijuecai.length == 0 && player.countCards('he') > 0;
							},
							selectCard: [1, 6],
							filterCard: true,
							check(card) {
								return 5 - get.value(card);
							},
							content() {
								player.storage.dpcqpaimaijuecai = player.storage.dpcqpaimaijuecai.concat(event.cards);
								player.directgain(event.cards);
								player.lose(event.cards, ui.special)._triggered = null;
								player.$gain2(event.cards);
							},
							ai: {
								order: 10,
								result: {
									draw: 15,
									recover: 2,
									player: 1,
								},
							},
							group: ['dpcqpaimaijuecai_draw'],
							subSkill: {
								draw: {
									trigger: {
										player: 'phaseBefore',
									},
									filter(event, player) {
										return player.storage.dpcqpaimaijuecai && player.storage.dpcqpaimaijuecai.length;
									},
									forced: true,
									content() {
										player.draw(player.storage.dpcqpaimaijuecai.length);
										lib.dpcqpaimaijuecai_price = 0;
									},
								},
								exchange: {
									enable: 'phaseUse',
									filter(event, player) {
										if (lib.exchangeCharacter && lib.exchangeCharacter.storage.dpcqpaimaijuecai.length == 0) return false;
										if (player.countCards('he') < lib.dpcqpaimaijuecai_price + 1) return false;
										return player.storage.dpcqpaimaijuecai == undefined && player.countCards('he') > 0;
									},
									check(card) {
										var player = _status.currentPhase;
										var target = lib.exchangeCharacter;
										if (get.attitude(player, target) <= 0) {
											if (player.countCards('h') - player.hp / 2 > 0 && lib.dpcqpaimaijuecai_price + 1 < 3) return 3 - get.value(card);
											if (lib.dpcqpaimaijuecai_price + 1 <= 2 && player.countCards('h') > lib.dpcqpaimaijuecai_price + 1) return 3 - get.value(card);
										} else {
											if (player.countCards('h') > 2 && lib.dpcqpaimaijuecai_price + 1 < 4) return 5.5 - get.value(card);
											if (lib.dpcqpaimaijuecai_price + 1 <= 3 && player.countCards('h') > lib.dpcqpaimaijuecai_price + 1) return 5.5 - get.value(card);
										}
										return false;
									},
									selectCard() {
										var x = lib.dpcqpaimaijuecai_price;
										return x + 1;
									},
									position: 'he',
									filterCard: true,
									content() {
										'step 0';
										for (var i of game.players) {
											if (i.name == 'yafei' && i.storage.dpcqpaimaijuecai.length) event.target = i;
										}
										if (!event.target) event.finish();
										if (event.cards.length >= 2) player.draw();
										lib.dpcqpaimaijuecai_price = event.cards.length;
										event.use = event.cards;
										lib.exchangePlayer = player;
										lib.exchangeCharacter.gain(event.cards, true);
										var list = lib.exchangeCharacter.storage.dpcqpaimaijuecai;
										lib.exchangeCharacter.chooseButton(['选择要交换的<宝>', list], true).ai = function (player) {
											if (get.attitude(lib.exchangePlayer, lib.exchangeCharacter) < 0) return 1 / get.value(list);
											else return get.value(list);
										};
										('step 1');
										if (result.bool) {
											event.cards = result.buttons[0];
											var name = event.cards.name;
											var suit = event.cards.suit;
											var number = event.cards.number;
											for (var i = 0; i < lib.exchangeCharacter.storage.dpcqpaimaijuecai.length; i++) {
												if (lib.exchangeCharacter.storage.dpcqpaimaijuecai[i].suit == suit && lib.exchangeCharacter.storage.dpcqpaimaijuecai[i].name == name && lib.exchangeCharacter.storage.dpcqpaimaijuecai[i].number == number) {
													var cardx = lib.exchangeCharacter.storage.dpcqpaimaijuecai[i];
													break;
												}
											}
											lib.exchangeCharacter.storage.dpcqpaimaijuecai.remove(cardx)._triggered = null;
											lib.exchangeCharacter.lose(cardx);
											var cards = game.createCard(name, suit, number);
											lib.exchangePlayer.gain(cards, 'gain2')._triggered = null;
											game.log(player, '用', event.use, '和', lib.exchangeCharacter, '交换了', cards);
										}
									},
									ai: {
										basic: {
											order: 5,
										},
										expose: 0.05,
										result: {
											player(player) {
												var target = lib.exchangeCharacter;
												if (get.attitude(player, target) <= 0) {
													if (player.countCards('h', 'du') >= lib.dpcqpaimaijuecai_price + 1) return 1;
													if (player.countCards('h') - lib.dpcqpaimaijuecai_price >= 3 && lib.dpcqpaimaijuecai_price + 1 < 3) return 1;
												} else {
													if (player.countCards('h') - lib.dpcqpaimaijuecai_price >= 2 && lib.dpcqpaimaijuecai_price + 1 < 4) return 1;
												}
												return -1;
											},
										},
									},
								},
							},
						},
					},
					translate: {
						qxq_dpcq_xiaoyan: '萧炎',
						qxq_dpcq_yafei: '雅妃',
						qxq_dpcq_xiaoxuner: '萧薰儿',
						qxq_dpcq_xiaoyixian: '小医仙',
						qxq_dpcq_mdsnw: '美杜莎女王',
						qxq_dpcq_lingying: '凌影',
						qxq_dpcq_qcttm: '七彩吞天蟒',
						qxq_dpcq_zyys: '紫幽炎蛇',
						qxq_dpcq_haibodong: '海波东',
						qxq_dpcq_yaochen: '药尘',
						qxq_dpcq_yunyun: '云韵',
						qxq_dpcq_naranyanran: '纳兰嫣然',
						dpcq: "<body><samp id='斗破苍穹'><strong>斗破苍穹</strong></samp></body><style>#斗破苍穹{animation:change 15s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						yys: "<body><samp id='阴阳师'><strong>阴阳师</strong></samp></body><style>#阴阳师{animation:change 15s linear 0s infinite;}@keyframes change{0% {color: #FF0000;}10%{color: #FF7F00;}20%{color: #FFFF00;}30%{color: #00FF00;}40% {color: #00FFFF;}50%{color: #0000FF;}60%{color: #8B00FF;}70%{color: #0000FF;}75%{color: #00FFFF ;}80%{color: #00FF00;}85%{color: #FFFF00 ;}90%{color:  #FF7F00;}100%{color: #FF0000;}}</style>",
						qxq_yys_cszn: '丑时之女',
						qxq_yyscaoren: '草人',
						qxq_yys_jiaotu: '椒图',
						qxq_yys_rihefang: '日和坊',
						qxq_yys_yuanjieshen: '缘结神',
						qxq_yys_baqidashe: '八岐大蛇',
						qxq_yys_tianjianrenxinguiqie: '天剑韧心鬼切',
						qxq_yys_buzhihuo: '不知火',
						qxq_yys_huiyeji: '辉夜姬',
						qxq_yys_zuofutongzi: '座敷童子',
						qxq_yys_gwjttz: '鬼王酒吞童子',
						qxq_yys_qianji: '千姬',
						qxq_yysshemo: '蛇魔',
						qxq_yyshaiyuanbeiji: '海原贝戟',
						qxq_yystianjianrenxinguiqiefenshen: '分身',
						boss: 'boss',
						qxq_yys_bossbqds: 'boss·八岐大蛇',
						qxq_yys_bosszbqds: 'boss·真·八岐大蛇',
						zhongdu: '中毒',
						zhongdu_info: '每个回合开始前流失一点体力,移去一个毒标记.若标记已清空,则移除此技能.',
						hsjm: '火伤减免',
						hsjm_info: '',
						yczt: '异常状态',
						yczt_info: '回合开始时自动跳过出牌阶段',
						shaoshang: '烧伤',
						shaoshang_info: '每个回合开始前受到一点火焰伤害,移去一个烧伤标记',
						hymy: '火焰免疫',
						hymy_info: '你始终免疫火焰伤害',
						zs: '重伤',
						zs_info: '该角色已陷入重伤状态,回合开始时自动跳过出牌阶段;该角色使用或打出牌时均添加一个重伤标记;该角色受到伤害时,若此时你没有手牌,此伤害+1,并获得两个重伤标记.你的手牌上限减X(X为你的重伤标记数),你的回合结束后,你移去这些标记并退出重伤状态.',
						hymydraw: '火焰免疫',
						hymydraw_info: '你始终免疫火焰伤害,触发此技能时摸一张牌',
						fnhlrange: '佛怒火莲',
						fnhlrange_info: '',
						fnhl: '佛怒火莲',
						fnhl_info: '「<font color=orange>佛怒火莲</font>」<br><li><b>萧炎自创斗技-阶别未知</b>,你的回合结束和刚开始时,清除所有标记,你的回合开始后,依据你已拥有的异火,获得相应数量的标记,标记数与异火数和异火排名有关(排名越高的异火标记数加的越多);出牌阶段,你可以选择一名目标并弃置所有手牌,按照标记数量对其造成一定的火焰伤害,若此时你造成的伤害值(包括目标的护甲所抵挡的数值):1、小于1,无事发生;2、等于1,目标随机弃置一张手牌;3、等于2,目标弃置一张手牌或装备牌,若此时目标未重伤,则目标重伤并添加3个重伤标记,若此时目标已重伤,则添加5个重伤标记,若此时目标未烧伤,则进入烧伤状态且添加3个烧伤标记,若目标已烧伤,则添加5个烧伤标记;4、3点及以上,目标弃置所有手牌和装备牌,若此时目标未重伤,则进入重伤状态并添加5个重伤标记,若目标已受重伤,则添加10个重伤标记,若此时目标未烧伤,则目标进入烧伤状态并添加5个烧伤标记,若目标已烧伤,则添加10个烧伤标记.你进入虚弱状态,获得两个虚弱标记(冷却时间五回合).',
						hymydr: '火焰免疫',
						hymydr_info: '你始终免疫火焰伤害,触发此技能时摸一张牌并回复一点体力',
						zuiye: '罪业',
						zuiye_info: '被标记的角色回合开始时受到等同于标记数量三分之一的伤害(向上取整),并弃置等同于标记数量一半的牌(向上取整),移除当前一半数量的标记(向上取整),若此时已没有标记,则你退出此状态.',
						jllghhuo: '九龙雷罡火·火',
						jllghhuo_info: '',
						jllghlei: '九龙雷罡火·雷',
						jllghlei_info: '',
						flnyf: '风雷怒焱·风',
						flnyf_info: '',
						flnyl: '风雷怒焱·雷',
						flnyl_info: '',
						gllhb: '骨灵冷火·冰',
						gllhb_info: '',
						gllhh: '骨灵冷火·火',
						gllhh_info: '',
						xuruo: '虚弱',
						xuruo_info: '无法使用或打出卡牌,并且受到的伤害+1,其他角色计算与你的距离始终为1,你的摸牌阶段少摸一张牌,并且手牌上限为0.你的回合开始时,移除一个虚弱标记,若此时你没有标记,则退出虚弱状态.',
						xwtyzihuo: '虚无吞炎·子火',
						xwtyzihuo_info: '回合内限一次,你可以选择一名角色,视为对其使用一张顺手牵羊',
						tunyan: '吞炎',
						tunyan_info: '',
						zh: '紫火',
						zh_info: '紫晶翼狮王的火焰.<br><li><b>此火效果</b>:你获得此火时,获得三个标记;你造成伤害时,若此伤害无属性,则有50%的概率转变成火属性,你失去一个标记(冷却时间两回合);你造成火属性伤害时,失去两个标记并有30%的概率令此伤害+1(冷却时间两回合);你使用此火前,若标记数耗尽,则失去此火焰.',
						snzy1: '三年之约',
						snzy1_info: '该角色已被定下三年之约,每回合减少一个标记,若标记耗尽时未受到挑战则摸两张牌并移除标记.',
						add: '三年之约',
						add_info: '',
						yanfanji: '燕返',
						yanfanji_info: '借力打力,若你成为一张牌的唯一目标,则你可以弃置一个<掌>标记,有50%的概率可以选择一个攻击范围内的目标并将此牌的效果转移给该目标,之后还可以选择对目标追加使用一张不触发任何技能效果的"杀".',
						guazhang: '卦掌',
						guazhang_info: '守护卦掌,你的<掌>标记数不得多于8枚.<br>卦掌:你使用牌指定单个目标造成伤害时,可选择将此牌置于目标武将牌上作为<卦>标记,若此时目标已有标记,则替换之,若此替换的标记与原标记的卡牌:①颜色相同:你摸一张牌;②花色相同:你获得一个<掌>标记;③牌名相同:若牌名不是<杀>,则你获得一个<掌>标记和一个<护>标记,若牌名是<杀>,则你摸一张牌;④点数相同:你获得一个<掌>标记和一个<护>标记;<br>若你使用牌指定多个目标,则只能替换一个目标<br>守护:出牌阶段,你可以弃置一个<护>标记并将一个<护>标记(共计消耗两个)转移给其他角色(转移后该标记在该角色回合开始前消失);场上拥有<护>标记的角色,在受到伤害后,你可以弃置一个<掌>标记,对伤害来源使用一张<杀>,若伤害角色是你,则你可以弃置一个<掌>标记和<护>标记防止此伤害并可以选择对伤害来源追加使用一张<杀>.',
						liandan: '炼丹',
						liandan_info: '出牌阶段限一次,当你有标记时可选择用<药材>标记炼丹.',
						dpcqshouhu: '守护',
						dpcqshouhu_info: '',
						diyinjue: '帝印决',
						diyinjue_info: "分为<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('kaishanyin');\">【开山印】</a>、<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('fanhaiyin');\">【翻海印】</a>、<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('yantianyin');\">【湮天印】</a>、<a style='color:orange' href=\"javascript:window.dpcqIntroduce('fudiyin');\">【覆地印】</a>、<a style='color:orange' href=\"javascript:window.dpcqIntroduce('gudiyin');\">【古帝印】</a>五式,默认拥有<开山印>,你使用杀时,可弃置一张牌,将技能升级,未处于觉醒状态,则只能将技能升级为前三式.",
						dajimiezhi: '大寂灭指',
						dajimiezhi_info: '大寂灭指:回合内限用一次,选择目标造成随机一到两点不触发任何技能效果的伤害,你将武将牌翻面并进入虚弱状态.',
						mifa: '秘法',
						mifa_info: "觉醒技,当你受到伤害或体力流失或体力上限减少时,或在出牌阶段,若此时你的体力值为1或已损体力值超过两点,则可发动此技能,获得七彩族纹标记;或当你濒死时,强制发动此技能.发动此技能时,你的体力值和体力上限均增加三点,并摸牌至体力上限的一半,拥有七彩族纹时,拥有技能<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('jindifentianzhan');\">【金帝焚天斩】</a>并强化技能【大寂灭指】(去除大寂灭指的负面效果并将伤害转变为火属性),同时解锁【帝印诀】后两式,此状态维持三回合,三回合后你将以上技能、体力值和体力上限的变化均回复原样并弃置所有牌,你进入虚弱状态.",
						juexing: '七彩族纹',
						juexing_info: '',
						jindifentianzhan: '金帝焚天斩',
						jindifentianzhan_info: '出牌阶段可发动,使用后移除此技能,对攻击范围内的目标发动斩击,且斩击后可再次发动斩击,最多连续斩击三次,每发动一次斩击减少觉醒状态的一回合持续时间(若持续时间不足,则改为减少一点体力值,你以此法减少的体力值不会导致死亡),同时每发动一次斩击,下一次斩击伤害增加,若成功让目标进入死亡状态(目标使用复活也能触发此效果效果),则你回复一点体力值并增加一点体力上限,若连续三次斩击后目标仍未阵亡,则其减少40%体力上限.斩击期间,你无视任何形式的伤害和体力流失.',
						wudizhuangtai: '无敌状态',
						wudizhuangtai_info: '',
						zhansha: '斩杀',
						zhansha_info: '',
						yyscaoren: '草人',
						yyscaoren_info: '出牌阶段限一次,若场上没有<草人>,则你可消耗两点鬼火,放置一个存在3回合的草人(可能替换场上原本存在的召唤物),并选择一个目标,其生命与草人链接,你失去此技能.草人的身份默认为非己方阵营,且不可回血,不可摸牌,手牌上限始终为0,与其他角色的距离始终为3,草人死亡/链接目标死亡时,你重新获得该技能,若当前是你的回合,则立即结束回合.',
						yyscaoren2: '草人',
						yyscaoren2_info: '',
						yyscaoren3: '草人',
						yyscaoren3_info: '',
						yyscaoren_mark: '草人',
						yyscaoren_mark_info: '',
						dpcqbnmp: '不能摸牌',
						dpcqbnmp_info: '',
						dpcqbnhx: '不能回血',
						dpcqbnhx_info: '',
						dpcqsiwang: '死亡',
						dpcqsiwang_info: '',
						zhouhuo: '咒火',
						zhouhuo_info: '回合结束,对一名随机敌方增加一个<破甲>标记直至其回合开始,拥有<破甲>标记的角色受到的伤害时令受到的伤害值+1,移除一个标记.',
						pojia: '破甲',
						pojia_info: '',
						douqishayi: '斗气纱衣',
						douqishayi_info: '回合内限一次,你可以消耗5点斗气并获得一个<纱>.当你受到伤害时,你失去所有<纱>并有5%概率令伤害-1(等级到达大斗师后失去此技能)',
						douqikaijia: '斗气铠甲',
						douqikaijia_info: '每回合限一次,当你即将受到伤害时,你可以消耗35点斗气并摸一张牌,有X的概率令伤害-1(X为你的<斗气境界/10>且至多为70%).',
						feixiangdi: '斗气化翼·低',
						feixiangdi_info: '装备后,你的手牌上限+1,且摸牌阶段有10%的概率多摸一张牌',
						feixianggao: '斗气化翼·高',
						feixianggao_info: '装备后,你的手牌上限+2,且你的摸牌阶段有15%的概率多摸一张牌(等级到达斗宗后失去此技能)',
						xyxqcdj: '毒经',
						xyxqcdj_info: '锁定技,<毒>对你无效化,你使用或弃置<毒>时,将其置于<厄>中并摸等量的牌,每个回合开始时,若你的手牌数小于你的体力值,你获得一张<毒>并将其置于<厄>中.',
						yishi: '医师',
						yishi_info: '任意其他角色在回合开始时,若你在其攻击范围内,其可以选择将手中的所有非转化的<毒>置于你的手牌区或<厄>中,若其如此做,且其体力值少于其体力上限的一半,其回复一点体力.',
						enan: '厄难',
						enan_info: "游戏开始时,你获得等同于场上角色数的<毒>并将其置于你的武将牌上,称为<厄>.锁定技,你首次使用<毒>,或者弃置<毒>时,激活【毒体】,失去一点体力上限并将武将牌翻面,获得等同于场上角色数一半的<毒>,将技能【医师】替换为<a style='color:purple' href=\"javascript:window.dpcqIntroduce('dushi');\">【毒师】</a>,获得技能<a style='color:purple' href=\"javascript:window.dpcqIntroduce('dujing');\">【毒经】</a>.若当前为你的出牌阶段,则立即结束此阶段.你阵亡时,若你已激活【毒体】,则你令全场所有角色弃置手中的所有<毒>(包括转化牌).",
						duti: '毒体',
						duti_info: '已激活厄难毒体.',
						dpcqdushi: '毒师',
						dpcqdushi_info: '你受到/造成伤害时,可以使用<厄>中的一张<毒>并选择伤害来源/目标的一张手牌,使此牌被替换为<毒>当其使用或弃置此牌时,此牌无效化并将其替换为<毒>的效果.',
						ziyang: '滋养',
						ziyang_info: '出牌阶段限一次,你可以消耗两点鬼火发动此技能,若此时晴天娃娃存在,则存储日和坊生命上限25%的日光能量,若此时晴天娃娃已牺牲,则令其重生回合数-1.',
						yysqingyu: '晴雨',
						yysqingyu_info: '自己和友方角色造成伤害时,或受到治疗时,有25%的概率存储等同于伤害值/治疗值的日光能量,存储上限等同于日和坊的生命上限的两倍;敌方回合结束时,日和坊将消耗存储的日光能量,优先为已损体力值最大的自己或友方角色回复已损体力值30%的体力,非己友方角色阵亡时,日和坊将牺牲晴天娃娃并为其治疗100%的生命,若日光能量不足则消耗所有日光能量,若治疗后仍有剩余的日光能量,则其50%用于治疗所有自己友方,晴天娃娃消失,且其重生需四回合.',
						fshy: '绯色花月',
						fshy_info: '若场上非己友方数大于1,则友方角色回合开始前,赠予其四种随机缘结之一,若其获得的缘结与上一个行动的其他友方相同,则结缘成功,立即获得一张牌,同时缘结神获得一层<缘>(上限7层),若不相同,则结缘失败,缘结神获得一层<生气了>,<生气了>累积五层时,友方下次结缘必定成功,该标记被清空.',
						scly: '神赐良缘',
						scly_info: "游戏开始时,你获得<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('bihu');\"><庇护></a>直到你的回合开始.出牌阶段,你可以消耗三点鬼火并祝福一个友方目标,使其获得庇护,并有(30%+缘层数*10%)概率使全体友方回复一点体力.若拥有至少一层缘,则治疗的溢出部分30%概率转化为护甲;若至少拥有三层缘,则使全体友方获得20%概率的增伤,持续一回合;若至少拥有五层缘,则祝福时令自身获得庇护;若拥有七层缘,则祝福友方时令其获得<再续前缘>.",
						bujiezhili: '不洁之力',
						bujiezhili_info: "冷却两回合,出牌阶段限一次,若你的身份不为内,则可以对友方目标使用,若如此做,你立即结束出牌阶段,其获得两回合的不洁之力并立即获得一个回合,之后该目标转化为<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>,<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>拥有技能<a style='color:purple' href=\"javascript:window.dpcqIntroduce('duyeB');\"><毒液></a>,若你的身份不为内且无其他友方角色存活时,将此技能替换为<a style='color:purple' href=\"javascript:window.dpcqIntroduce('baqizhiying');\">【八岐之影】</a>,若你的身份为内,则可以对场上非己非主公的任意其他角色使用,使其获得两回合的不洁之力并立即获得一个回合,之后该目标转化为<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>,当场上<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>数量达到3个或以上时,将此技能替换为<a style='color:purple' href=\"javascript:window.dpcqIntroduce('baqizhiying');\">【八岐之影】</a>.非身份模式:若游戏不是身份局,则你成为主公并给所有人添加身份,且只能给身份为忠臣的角色添加不洁之力.",
						shennianzhiying: '神念之影',
						shennianzhiying_info: "出牌阶段限一次,消耗三点鬼火,开启<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>空间并选择一个敌方目标附加【五感尽失】,随后为所有敌方附加一层<a style='color:purple' href=\"javascript:window.dpcqIntroduce('duyeA');\"><毒液></a>,同时场上每名<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>各使用一张<杀>攻击随机敌方目标(此<杀>不触发增加<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>效果),敌方目标移除【五感尽失】.若你身份为主且场上无忠,则自动将技能替换为<a style='color:red' href=\"javascript:window.dpcqIntroduce('shenfenzhiyan');\">【神愤之炎】</a>.",
						shenfenzhiyan: '神愤之炎',
						shenfenzhiyan_info: "出牌阶段限一次,你可以选择发动【神念之影】或<a style='color:red' href=\"javascript:window.dpcqIntroduce('shenfenzhiyan');\">【神愤之炎】</a>.<a style='color:red' href=\"javascript:window.dpcqIntroduce('shenfenzhiyan');\">【神愤之炎】</a>:出牌阶段消耗三点鬼火,开启蛇魔空间并选择一个敌方目标附加【五感尽失】,随后为所有敌方附加一层<a style='color:purple' href=\"javascript:window.dpcqIntroduce('duyeA');\"><毒液></a>,同时场上每名<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>各使用一张<杀>攻击随机敌方目标(此<杀>不触发增加<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>效果),敌方目标移除【五感尽失】,接着你每消耗一点鬼火,则再次重复触发<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>的攻击效果.",
						duye: '毒液',
						duye_info: "该角色无法使用锦囊牌和延时类镜囊牌,使用<杀>时增加八岐大蛇10%的<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>.该角色造成伤害时,给目标附加一层<a style='color:purple' href=\"javascript:window.dpcqIntroduce('duyeA');\"><毒液></a>标记,<a style='color:purple' href=\"javascript:window.dpcqIntroduce('duyeA');\"><毒液></a>标记累积三层时,目标额外受到两点无来源的伤害,同时使八岐大蛇和<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>之中生命值最低的一个角色回复两点体力,目标移除<a style='color:purple' href=\"javascript:window.dpcqIntroduce('duyeA');\"><毒液></a>标记.",
						baqizhiying: '八岐之影',
						baqizhiying_info: "身份局中可使用,如果你的身份为忠或内,则可发动此技能将主公变成<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>,你与主公交换身份并获得一个额外回合,并将技能【神念之影】替换为<a style='color:red' href=\"javascript:window.dpcqIntroduce('shenfenzhiyan');\">【神愤之炎】</a>.若发动前你的身份不为忠或内,则你成为主公,并将技能【神念之影】替换为<a style='color:red' href=\"javascript:window.dpcqIntroduce('shenfenzhiyan');\">【神愤之炎】</a>,并将所有原反贼变成忠臣,所有原主忠方变为反贼(内奸身份不变).",
						wuganjinshi: '五感尽失',
						wuganjinshi_info: '',
						bjzl: '不洁之力',
						bjzl_info: "冷却两回合,出牌阶段限一次,若你的身份不为内,则可以对友方目标使用,若如此做,你立即结束你的出牌阶段,其获得两回合的不洁之力并立即获得一个回合,之后该目标转化为<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>,<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>拥有技能<a style='color:purple' href=\"javascript:window.dpcqIntroduce('duyeB');\"><毒液></a>,若你的身份不为内且无其他友方角色存活时,将此技能替换为<a style='color:purple' href=\"javascript:window.dpcqIntroduce('baqizhiying');\">【八岐之影】</a>,若你的身份为内,则可以对场上非己非主公的任意其他角色使用,使其获得两回合的不洁之力,之后该目标转化为<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>,当场上<a style='color:purple' href=\"javascript:window.dpcqIntroduce('shemo');\">蛇魔</a>数量达到3个或以上时,将此技能替换为<a style='color:purple' href=\"javascript:window.dpcqIntroduce('baqizhiying');\">【八岐之影】</a>.非身份局:若游戏不为身份模式,则你成为主公并给所有人添加身份,且只能给身份为忠臣的角色添加不洁之力.",
						shezhishenfen: '设置身份',
						shezhishenfen_info: '',
						bqdsgroup: '友军',
						bqdsgroup_info: '',
						yhshanghunniao: '御魂·伤魂鸟',
						yhshanghunniao_info: '伤魂鸟的两件套加成:暴击增加15%;四件套加成:每有一个非己友方角色阵亡,你回复一点体力值,永久增加20%攻击力(失去此套装时移除加成buff).',
						yhzhaocaimao: '御魂·招财猫',
						yhzhaocaimao_info: '招财猫的两件套加成:防御加成15%;四件套加成:回合开始前,你有50%概率摸两张牌.',
						yhdizangxiang: '御魂·地藏像',
						yhdizangxiang_info: '地藏像的两件套加成:生命上限加成15%;四件套加成:受到暴击时,获得最大生命值30%的护盾.',
						yhzheng: '御魂·狰',
						yhzheng_info: '狰的两件套加成:攻击加成15%;四件套加成:受到伤害时,有45%概率对伤害来源使用一张<杀>.',
						yhmeiyao: '御魂·魅妖',
						yhmeiyao_info: '魅妖的两件套加成:防御加成15%;四件套加成:造成伤害时,有15%概率使目标陷入混乱直到其回合结束.',
						zhenjianrenxin: '真剑·韧心',
						zhenjianrenxin_info: "永久获得20%伤害减免,受到<杀>的伤害时,若自身处于无法动作(<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('bingdong');\">冰冻</a>、翻面),则有35%概率格挡,免疫该次伤害并增加自身10%<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>,同时每次触发格挡,自身伤害提升15%(最多叠加5层),首次受到致命伤害时,回复最大生命值的30%,并增加30%<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>和持续一回合的40%伤害减免;<br><li>【施放】消耗一点鬼火施放,施放后摸一张牌并立即结束当前回合,进入<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xinjian');\">心剑</a>状态2回合,并在身前召唤一个两回合的<a style='color:purple' href=\"javascript:window.dpcqIntroduce('yingzhifenshen');\">【影之分身】</a>,若场上没有<a style='color:purple' href=\"javascript:window.dpcqIntroduce('yingqie');\"><影切></a>标记,则可为一个敌方目标施加<a style='color:purple' href=\"javascript:window.dpcqIntroduce('yingqie');\"><影切></a>.",
						tianjianduanezhan: '天剑·断恶斩',
						tianjianduanezhan_info: "<br><li>凌空起刀,似有鬼兵之影<br>出牌阶段限用一次,消耗三点鬼火,对一个目标使用三张<杀>,每张<杀>分别造成25%、100%、145%的伤害,若目标没有<a style='color:red' href=\"javascript:window.dpcqIntroduce('wei');\"><危></a>,则给目标添加<a style='color:red' href=\"javascript:window.dpcqIntroduce('wei');\"><危></a>;<br><li>若处于<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xinjian');\">心剑</a>状态,则只需消耗一点鬼火发动,并在施放后增加自身40%<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>.",
						yingzhifenshen: '影之分身',
						yingzhifenshen_info: "<a style='color:purple' href=\"javascript:window.dpcqIntroduce('yingzhifenshen');\">【影之分身】</a>分身无法被选中,回合开始时,若敌方<a style='color:purple' href=\"javascript:window.dpcqIntroduce('yingqie');\"><影切></a>标记已消除,则分身立即消散,否则分身会在本体回合发动技能【天剑·断恶斩】时,对带有<a style='color:purple' href=\"javascript:window.dpcqIntroduce('yingqie');\"><影切></a>的目标发动相同的技能.",
						chuwu: '初舞',
						chuwu_info: "你使用<杀>时视为使用两次,且第二次的<杀>不触发技能,每次命中率均为50%;处于离殇状态时,技能替换为<a style='color:red' href=\"javascript:window.dpcqIntroduce('zhongwu');\">【终舞】</a>.",
						zhongwu: '终舞',
						zhongwu_info: '你使用<杀>时视为使用两次,且第二次的<杀>不触发技能,每次命中率均为75%.',
						liying: '离影',
						liying_info: "若自身或友方在回合中使用<杀>或回合开始时处于控制状态,则不知火有50%概率起舞,牺牲当前生命值5%(累计达到100%时失去一点体力),使友方获得35%概率的<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('bihu');\"><庇护></a>,该效果持续一回合,若当前存在<星火结界>,则起舞概率为100%.<br><li>【施放】自身生命值低于50%时可主动施放并进入<离殇>状态,主动进入<离殇>状态时,施放一次无消耗的<a style='color:red' href=\"javascript:window.dpcqIntroduce('jinranbuye');\">【烬染不夜】</a>(此<a style='color:red' href=\"javascript:window.dpcqIntroduce('jinranbuye');\">【烬染不夜】</a>不视为主动施放),或受到致命伤害时自动施放,施放后移除身上所有增益及减益效果,同时移除所有标记,回复至满体力进入离殇姿态并永久提升30点暴击率,并将技能替换为<a style='color:red' href=\"javascript:window.dpcqIntroduce('lige');\">【离歌】</a>.",
						lige: '离歌',
						lige_info: "你受到伤害时,回复30%生命上限的体力值(至少为一点),你的每个回合开始时,你减少一点体力上限,同时你每有一张手牌,便增加5%<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>;主动施放<a style='color:red' href=\"javascript:window.dpcqIntroduce('jinranbuye');\">【烬染不夜】</a>后,你的手牌中每剩余一张<杀>,便有50%的概率对一名随机敌方目标使用一张<杀>(此<杀>不会消耗卡牌).回合开始时,若你的体力上限已为0,则你立即死亡.",
						xinghuomantian: '星火满天',
						xinghuomantian_info: "出牌阶段限用一次,消耗两点鬼火,创造存在两回合的<星火结界>,若已存在结界,则刷新回合数,<星火结界>内的友方全体提升10%伤害,10%减伤;结界中的友方,在其回合使用<杀>后,100%概率对目标额外使用一张不触发技能效果的<杀>,处于<离殇>状态时,该技能替换为<a style='color:red' href=\"javascript:window.dpcqIntroduce('jinranbuye');\">【烬染不夜】</a>.<br><li><a style='color:cyan' href=\"javascript:window.dpcqIntroduce('xianji');\">【先机】</a>游戏开始时,施放【星火满天】.",
						jinranbuye: '烬染不夜',
						jinranbuye_info: "出牌阶段限用一次,消耗四点鬼火,对全体敌方使用一张<杀>(不触发<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('chuwu');\">【初舞】</a>/<a style='color:red' href=\"javascript:window.dpcqIntroduce('zhongwu');\">【终舞】</a>的效果);场上每有一名友方角色阵亡,发动此技能消耗鬼火数-1.",
						update: '离影',
						update_info: '',
						record: 'undefined',
						record_info: '',
						yhfanhunxiang: '御魂·返魂香',
						yhfanhunxiang_info: '返魂香的两件套加成:抵抗加成15%;四件套加成:受到伤害时,有15%概率令伤害来源晕眩.',
						shengsijuedou: '生死决斗',
						shengsijuedou_info: 'undefined',
						ssjdremove: '生死决斗',
						ssjdremove_info: 'undefined',
						shengsijuedouanger: '生死决斗',
						shengsijuedouanger_info: 'undefined',
						penglaiyuzhi: '蓬莱玉枝',
						penglaiyuzhi_info: '你使用<杀>对<阴阳师>势力的角色造成伤害时,有10%概率减少其所在阵营一点鬼火.',
						huoshuqiu: '火鼠裘',
						huoshuqiu_info: '你成为伤害型卡牌的目标时,有20%的概率获得一点鬼火.在<蓬莱幻境>中,所有友方角色成为伤害型卡牌的目标时,所在阵营有20%的概率获得一点鬼火.',
						longshouzhiyu: '龙首之玉',
						longshouzhiyu_info: "出牌阶段限用一次,消耗两点鬼火,创造存在两回合的<蓬莱幻境>,若已存在幻境,则只需消耗一点鬼火,并刷新回合数,<蓬莱幻境>内的友方全体提升25%防御,20%效果抵抗;结界中的友方,在其回合开始前有67%的概率获得一点鬼火.<br><li><a style='color:cyan' href=\"javascript:window.dpcqIntroduce('xianji');\">【先机】</a>游戏开始时,施放【龙首之玉】.",
						hunzhihuo: '魂之火',
						hunzhihuo_info: '使用<杀>时,有50%概率获得一点鬼火,否则你有50%概率摸一张牌.',
						huofuxiangsheng: '祸福相生',
						huofuxiangsheng_info: '出牌阶段限一次,牺牲当前20%生命值,获得3点鬼火.',
						fuyunchanglong: '福运昌隆',
						fuyunchanglong_info: '游戏开始时,获得3点鬼火.',
						fengtuishi: '风推势',
						fengtuishi_info: '你即将受火焰伤害时,可选择弃置三张手牌,将此伤害转移给一名攻击范围内的其他武将.',
						liefengxuanwu: '裂风旋舞',
						liefengxuanwu_info: '出牌阶段限用一次,你可以弃置两张牌并选择一个目标立即结束出牌阶段,该目标添加两个<裂>标记直到你的下一个回合开始前,在此期间,目标每使用一张牌,则移除一个<裂>标记,视为你对其使用一张<杀>.',
						fzjys: '风之极·陨杀',
						fzjys_info: '你每使用一次你的其他技能(<风回大地>除外),便获得一个<陨>标记,出牌阶段,若你的<陨>标记数达到7个,则你可以选择一个目标发动此技能并清空所有<陨>标记,目标弃置所有<闪>,你弃置所有<杀>,若目标<闪>的数目小于你<杀>的数目,则其受到等同于卡牌数差值的伤害.',
						fenghuidadi: '风回大地',
						fenghuidadi_info: '你每使用一次你的其他技能,你便摸一张牌.',
						fengxuanbi: '风旋壁',
						fengxuanbi_info: "出牌阶段限用一次,弃置两张牌并选择一个目标,该目标无法使用<基本牌>、<锦囊牌>、<装备牌>、<延时锦囊牌>随机一种直到其回合结束,若你使用此技能时目标已受到过上述四种debuff,则改为对目标发动<a style='color:green' href=\"javascript:window.dpcqIntroduce('sifangfengbi');\">【四方风壁】</a>,其清除记录.",
						sifangfengbi: '四方风壁',
						sifangfengbi_info: '将目标移出游戏直到你的回合结束.',
						qianfenggang: '千风罡',
						qianfenggang_info: '你每使用一次<分灵分形剑>,便进行一次判定,若判定结果为黑色,你摸一张牌;你每使用一次<风之极·落日耀>便进行一次判定,若判定结果为红色,你摸一张牌.',
						flfxj: '风灵分形剑',
						flfxj_info: '出牌阶段弃置一张<杀>,获得两个<剑>标记直到回合结束,当你的<杀>被目标闪避时,你弃置一枚标记,对目标追击一张<杀>.',
						fzjlry: '风之极·落日耀',
						fzjlry_info: '冷却三回合,出牌阶段限一次,当你的<耀>标记数达到25个及以上,则你可选择一个目标发动此技能,你与目标均弃置所有基本牌,若你弃置牌数更多,则目标受到等同于卡牌数差值的伤害,你移去所有<耀>标记.',
						feixushenfa: '飞絮身法',
						feixushenfa_info: '每当你需要使用或打出一张<闪>时,进行一次判定,若判定的结果与<絮>标记中记录的数字都不同,则将数字记录到<絮>中,你可以使用一张数字与<絮>标记所含数字均不同的卡牌当作<闪>使用,否则,你增加等同于此判定卡牌数字的<耀>标记.此技能每次发动时,均增加一个<耀>标记.当<絮>已记录所有数字(1-13)时,清空记录.',
						jiaoman: '娇蛮',
						jiaoman_info: '游戏开始时,除你外的随机一名其他角色对你使用<三年之约>,若如此做,你摸两张牌,若场上存在角色<萧炎>,则必定由<萧炎>对你使用<三年之约>.',
						yhkuanggu: '御魂·狂骨',
						yhkuanggu_info: '',
						yhzhenmushou: '御魂·镇墓兽',
						yhzhenmushou_info: '',
						juanliu: '涓流',
						juanliu_info: "出牌阶段限一次,消耗三点鬼火,使所有友方获得两回合的<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('shengminglianjie');\">生命链接</a>.",
						juanliu2: '涓流',
						juanliu2_info: '',
						juanliu3: '涓流',
						juanliu3_info: '',
						runwuwusheng: '润物无声',
						runwuwusheng_info: '受到伤害时,给所有友方提升20%爆伤直到其回合结束.',
						yyshonglian: '红莲',
						yyshonglian_info: "免疫翻面和混乱,同时减少30%治疗效果,你在场时,友方全体获得<a style='color:orange' href=\"javascript:window.dpcqIntroduce('dayaozhili');\"><大妖之力></a>,同时自身受<a style='color:orange' href=\"javascript:window.dpcqIntroduce('dayaozhili');\"><大妖之力></a>的提升伤害效果翻倍.",
						tianhuonuyan: '天火怒焱',
						tianhuonuyan_info: "出牌阶段,若自身处于非<a style='color:purple' href=\"javascript:window.dpcqIntroduce('guiwangzitai');\"><鬼王姿态></a>,则可消耗三点鬼火发动此技能,若如此做,则击退所有敌方40%<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>,自身进入<a style='color:purple' href=\"javascript:window.dpcqIntroduce('guiwangzitai');\"><鬼王姿态></a>两回合.",
						yhmumei: '御魂·木魅',
						yhmumei_info: '',
						ximeng: '汐梦',
						ximeng_info: "<li>在潮汐中前行.<br>被动效果:敌方任一角色回合结束后,千姬增加10%<a style='color:yellow' href=\"javascript:window.dpcqIntroduce('xingdongtiao');\">行动条</a>.<br><li>【施放】:出牌阶段限一次,消耗两点鬼火,对一名目标造成一点伤害,若<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('haiyuanbeiji');\">【海原贝戟】</a>在场,额外对目标附加<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('ximeng');\">【汐梦】</a>,持续一回合.",
						haichaorumeng: '海潮入梦',
						haichaorumeng_info: "<li>被动效果:【千姬】手持<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('haiyuanbeiji');\">【海原贝戟】</a>时,免疫翻面效果.<li>【施放】:立即结束当前回合,召唤<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('haiyuanbeiji');\">【海原贝戟】</a>并为其附加3层<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('chaosheng');\"><潮声></a>,释放后将技能替换为<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('yongshengzhixi');\">【永生之汐】</a>.",
						yongshengzhixi: '永生之汐',
						yongshengzhixi_info: "<li>【施放】:消耗两点鬼火,立即结束当前回合并拔出<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('haiyuanbeiji');\">【海原贝戟】</a>并将此技能替换为【海潮入梦】,随后令潮汐奔流,每名敌方均有(20%+<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('beige');\"><悲歌></a>层数x10%)的概率受到一点伤害,若<a style='color:cyan' href=\"javascript:window.dpcqIntroduce('beige');\"><悲歌></a>层数达到5层,则造成伤害时额外对其追加一点伤害.",
						dpcqwanyingfu: '万影缚',
						dpcqwanyingfu_info: '一名角色的回合内限一次,当你成为一张伤害型牌的唯一目标时,你可以打出一张黑色牌令此牌无效,若如此做,则该角色回合结束前,你不能使用和打出【杀】.',
						dpcqyingqie: '影切',
						dpcqyingqie_info: '游戏开始时,获得两张【切】,出牌阶段限一次,你可以将你手牌和装备区中的任意张武器牌替换为随机部位的【切】,你最多能装备七张【切】.你每装备有一张【切】,你的攻击距离+1,装备超过三张【切】(向下取整)时,你使用杀时,对方需打出两张【闪】方可抵消,装备超过五张【切】时,你使用杀时,对方需打出三张【闪】方可抵消,且命中时伤害+1.当你需要使用或打出一张【杀】或【闪】时,你可以弃置一张装备区内的【切】,视为打出一张【杀】或【闪】若如此做,则可对来源或目标追加使用一张【杀】.',
						dpcqhuanying: '幻影',
						dpcqhuanying_info: '游戏开始时,装备两张【影】,出牌阶段限一次,你可以将你手牌和装备区中的任意张非武器装备牌替换为随机部位的【影】,最多装备七张,你每拥有一张【影】,你的攻击距离和防御距离均+1,当你需要使用或打出【闪】时,你可以弃置一张【影】,视为打出一张【闪】并可以选择一名攻击范围内的角色,视为对其使用一张【杀】.',
						dpcqyingshazhen: '影杀阵',
						dpcqyingshazhen_info: '当你对目标造成伤害时,你可以弃置所有装备区内的【影】,使目标进入浮空状态,浮空状态下的角色无法使用卡牌和技能直到本回合结束,你可发动一次【瞬狱·影杀阵】',
						dpcqshunyuyingshazhen: '瞬狱·影杀阵',
						dpcqshunyuyingshazhen_info: '仅可对浮空状态下的角色使用,弃置所有装备区内的【切】,每弃置一张【切】且同时你在【影杀阵】中每有弃置一张【影】,召唤一个暗影分身,每名分身依次对目标使用杀后,将所有暗影分身移出游戏,每移出一名分身,你获得一张随机类型的装备牌.',
						dpcqningbingjing: '凝冰镜',
						dpcqningbingjing_info: '你使用<冰杀>后可以选择一项:<br>①此杀造成伤害后额外弃置敌方一张牌<br>②摸一张牌',
						dpcqxuanbingxuansha: '玄冰旋杀',
						dpcqxuanbingxuansha_info: '每回合限两次,你可以将一张♣️️️牌当作<冰杀>使用或打出',
						dpcqxuanbingdun: '玄冰盾',
						dpcqxuanbingdun_info: '回合外当你即将受到伤害时,你可以弃置一张手牌并将此伤害转换为<冰>属性',
						dpcqningbingjie: '凝冰结',
						dpcqningbingjie_info: '你视为拥有技能【玄冰旋杀】:每回合限两次,你可以将一张牌当作<冰杀>使用或打出;<br>每当你累计使用或打出了六张♣️️️牌后,你可以指定一名角色并弃置其两张牌',
						dpcqwanhuabingjing: '万花冰镜',
						dpcqwanhuabingjing_info: '当你受到<冰>属性伤害时,你防止此伤害并令下次摸牌的摸牌数+1',
						dpcqxuanbinglongxiang: '玄冰龙翔',
						dpcqxuanbinglongxiang_info: '你的出牌阶段结束后,若你的体力值不大于2,则你可以弃置至多2X张黑色牌并指定一个目标,弃置该目标以及同时在你和该目标攻击范围内的任意一名其他角色的Y张牌,并对该目标造成X点伤害(X为你的体力值,Y为你的弃牌数)',
						dpcqsheshejiejie: '摄蛇结界',
						dpcqsheshejiejie_info: '当你的弃牌阶段结束后,你可以翻面并弃置一张牌.若如此做,直到你的下个弃牌阶段开始之前,当有其他角色的回合开始时,你可以摸一张牌.',
						dpcqzhirechijian: '炙热炽箭',
						dpcqzhirechijian_info: '每回合限一次,当你使用红色牌造成伤害时,你可以令此牌伤害改为<火>属性且伤害+1.',
						dpcqyuyansheling: '狱炎蛇灵',
						dpcqyuyansheling_info: '你的回合开始时,你可以弃置8张手牌并封印一名其他角色的所有非锁定技,且令其只能使用或打出<桃><酒>和<闪>,该效果持续到你的下个回合开始.',
						dpcqliyanshiren: '利眼识人',
						dpcqliyanshiren_info: '回合内各花色限一次,当你使用牌后,你可以指定一名其他角色并查看其手牌.若其手牌中有和你使用的牌花色相同的牌,你可以令其摸或弃置一张牌.(同一名角色限两次)',
						dpcqrenruhanxiu: '忍辱含羞',
						dpcqrenruhanxiu_info: '其他角色对你造成伤害后,其获得一个<账>.你的回合开始时,你可以弃置三张牌,并令全场有<账>的角色弃置<账+1>张牌.',
						dpcqpaimaijuecai: '拍卖绝才',
						dpcqpaimaijuecai_info: '回合内限一次,若你没有<宝>,则你可以将至多六张牌放在你的武将牌上称为<宝>.其他角色的回合内,其可以交给你X张牌,你选择并交给其一张<宝>,若其交给你的牌数＞2,则其摸一张牌.你的摸牌阶段开始时,你多摸当前<宝>数量张牌.(X为本回合上一名角色交出的牌的数量+1)',
					},
				};
				for (var i in dpcqyys_Character.character) {
					dpcqyys_Character.character[i][4].push(`ext:斗破苍穹X阴阳师/image/${i}.jpg`);
				}
				lib.config.all.characters.add('dpcqyys_Character');
				lib.config.characters.add('dpcqyys_Character');
				lib.translate.dpcqyys_Character_character_config = '<span style="-webkit-animation:dpcq_Character_character_config 10s infinite;animation:dpcq_Character_character_config 10s infinite;">斗破苍穹</span><font color=gray>X</font><span style="-webkit-animation:yys_Character_character_config 10s infinite;animation:yys_Character_character_config 10s infinite;">阴阳师</span>';
				return dpcqyys_Character;
			});
			//—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
			const numfunc = function () {
				if (!lib.number) {
					lib.number = [];
					for (var i = 1; i < 14; i++) {
						lib.number.add(i);
					}
				} //添加lib.number
				window.sgn = function (bool) {
					if (bool) return 1;
					return -1;
				};//true转为1,false转为-1
				window.numberq0 = function (num) {
					if (isNaN(Number(num))) return 0;
					return Math.abs(Number(num));
				};//始终返回正数(取绝对值)
				window.numberq1 = function (num) {
					if (isNaN(Number(num))) return 1;
					return Math.max(Math.abs(Number(num)), 1);
				};//始终返回正数且至少为1(取绝对值)
				window.number0 = function (num) {
					if (isNaN(Number(num))) return 0;
					return Math.max(Number(num), 0);
				};//始终返回正数
				window.number1 = function (num) {
					if (isNaN(Number(num))) return 1;
					return Math.max(Number(num), 1);
				};//始终返回正数且至少为1
				window.deepClone = function (obj, visited = new WeakMap()) {
					if (obj === null || typeof obj !== 'object' || obj instanceof window.Element) {
						return obj;
					}
					if (visited.has(obj)) {
						return visited.get(obj);
					}
					if (Array.isArray(obj)) {
						return obj.map((item) => deepClone(item, visited));
					}
					const clonedObj = {};
					visited.set(obj, clonedObj);
					for (let key in obj) {
						if (Object.hasOwn(obj, key)) {
							clonedObj[key] = deepClone(obj[key], visited);
						}
					}
					return clonedObj;
				}; //深拷贝对象
				window.factorial = function (num) {
					num = Math.round(num);
					if (num < 0) {
						return 0;
					}
					if (num < 2) {
						return 1;
					}
					let result = 1;
					for (let i = 2; i <= num; i++) {
						result *= i;
					}
					return result;
				}; //阶乘
				window.isPrime = function (num) {
					if (num === 2 || num === 3) return true;
					if (num < 2 || num % 2 === 0 || num % 3 === 0) return false;
					for (let i = 5; i * i <= num; i += 6) {
						if (num % i === 0 || num % (i + 2) === 0) return false;
					}
					return true;
				}; // 质数
			};
			numfunc();
			game.import('card', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '斗破苍穹X阴阳师',
					connect: true,
					card: {
						yihuo: {
							type: 'basic',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							modTarget: true,
							content() {
								'step 0';
								var num = get.rand(1, 100);
								if (num <= 100 && num > 85) {
									event.goto(6);
								}
								if (num <= 85 && num > 70) {
									event.goto(5);
								}
								if (num <= 70 && num > 50) {
									event.goto(4);
								}
								if (num <= 50 && num > 30) {
									event.goto(3);
								}
								if (num <= 30 && num > 10) {
									event.goto(2);
								}
								if (num <= 10) {
									event.goto(1);
								}
								('step 1');
								var num = get.rand(1, 100);
								if (num <= 100 && num > 50) {
									var numDC = get.rand(1, 1);
									if (numDC == 1) {
										player.gain(game.createCard({ name: 'sha', nature: 'fire' }));
									}
								}
								if (num <= 50 && num > 0) {
									var numDC = get.rand(1, 1);
									if (numDC == 1) {
										player.gain(game.createCard('huogong'));
									}
								}
								event.finish();
								('step 2');
								var num = get.rand(1, 100);
								if (num <= 30 && num > 10) {
									var numA = get.rand(1, 1);
									if (numA == 1) {
										player.gain(game.createCard('xhy'));
									}
								}
								if (num <= 50 && num > 30) {
									var numB = get.rand(1, 1);
									if (numB == 1) {
										player.gain(game.createCard('wslh'));
									}
								}
								if (num <= 70 && num > 50) {
									var numC = get.rand(1, 1);
									if (numC == 1) {
										player.gain(game.createCard('ldlhy'));
									}
								}
								if (num <= 85 && num > 70) {
									var numD = get.rand(1, 1);
									if (numD == 1) {
										player.gain(game.createCard('ymdh'));
									}
								}
								if (num <= 100 && num > 85) {
									var numE = get.rand(1, 1);
									if (numE == 1) {
										player.gain(game.createCard('qldxh'));
									}
								}
								if (num <= 10) {
									var numAA = get.rand(1, 1);
									if (numAA == 1) {
										player.gain(game.createCard('shouhuo'));
									}
								}
								event.finish();
								('step 3');
								var num = get.rand(1, 100);
								if (num <= 55 && num > 40) {
									var numF = get.rand(1, 1);
									if (numF == 1) {
										player.gain(game.createCard('flny'));
									}
								}
								if (num <= 70 && num > 55) {
									var numG = get.rand(1, 1);
									if (numG == 1) {
										player.gain(game.createCard('hssy'));
									}
								}
								if (num <= 80 && num > 70) {
									var numH = get.rand(1, 1);
									if (numH == 1) {
										player.gain(game.createCard('hysy'));
									}
								}
								if (num <= 90 && num > 80) {
									var numI = get.rand(1, 1);
									if (numI == 1) {
										player.gain(game.createCard('hxy'));
									}
								}
								if (num <= 100 && num > 90) {
									var numJ = get.rand(1, 1);
									if (numJ == 1) {
										player.gain(game.createCard('ylxy'));
									}
								}
								if (num <= 40) {
									var numBB = get.rand(1, 1);
									if (numBB == 1) {
										player.gain(game.createCard('shouhuo'));
									}
								}
								event.finish();
								('step 4');
								var num = get.rand(1, 100);
								if (num <= 70 && num > 60) {
									var numK = get.rand(1, 1);
									if (numK == 1) {
										player.gain(game.createCard('gldh'));
									}
								}
								if (num <= 80 && num > 70) {
									var numL = get.rand(1, 1);
									if (numL == 1) {
										player.gain(game.createCard('jllgh'));
									}
								}
								if (num <= 90 && num > 80) {
									var numM = get.rand(1, 1);
									if (numM == 1) {
										player.gain(game.createCard('gllh'));
									}
								}
								if (num <= 100 && num > 90) {
									var numN = get.rand(1, 1);
									if (numN == 1) {
										player.gain(game.createCard('jyfy'));
									}
								}
								if (num <= 60) {
									var numCC = get.rand(1, 1);
									if (numCC == 1) {
										player.gain(game.createCard('shouhuo'));
									}
								}
								event.finish();
								('step 5');
								var num = get.rand(1, 100);
								if (num <= 80 && num > 75) {
									var numO = get.rand(1, 1);
									if (numO == 1) {
										player.gain(game.createCard('sqyyh'));
									}
								}
								if (num <= 85 && num > 80) {
									var numP = get.rand(1, 1);
									if (numP == 1) {
										player.gain(game.createCard('hlyh'));
									}
								}
								if (num <= 95 && num > 90) {
									var numQ = get.rand(1, 1);
									if (numQ == 1) {
										player.gain(game.createCard('jyjzh'));
									}
								}
								if (num <= 100 && num > 95) {
									var numR = get.rand(1, 1);
									if (numR == 1) {
										player.gain(game.createCard('bhpmy'));
									}
								}
								if (num <= 75) {
									var numDD = get.rand(1, 1);
									if (numDD == 1) {
										player.gain(game.createCard('shouhuo'));
									}
								}
								event.finish();
								('step 6');
								var num = get.rand(1, 100);
								if (num <= 93 && num > 90) {
									var numS = get.rand(1, 1);
									if (numS == 1) {
										player.gain(game.createCard('slzy'));
									}
								}
								if (num <= 96 && num > 93) {
									var numT = get.rand(1, 1);
									if (numT == 1) {
										player.gain(game.createCard('jdfty'));
									}
								}
								if (num <= 98 && num > 96) {
									var numU = get.rand(1, 1);
									if (numU == 1) {
										player.gain(game.createCard('jlyh'));
									}
								}
								if (num <= 100 && num > 98) {
									var numV = get.rand(1, 1);
									if (numV == 1) {
										player.gain(game.createCard('xwty'));
									}
								}
								if (num <= 90) {
									var numEE = get.rand(1, 1);
									if (numEE == 1) {
										player.gain(game.createCard('shouhuo'));
									}
								}
								event.finish();
							},
							ai: {
								basic: {
									order: 11,
									useful: 10.1,
									value: 9.9,
								},
								result: {
									target: 2,
								},
								tag() {
									'step 0';
									var num = get.rand(1, 100);
									if (num <= 100 && num > 85) {
										event.goto(6);
									}
									if (num <= 85 && num > 70) {
										event.goto(5);
									}
									if (num <= 70 && num > 50) {
										event.goto(4);
									}
									if (num <= 50 && num > 30) {
										event.goto(3);
									}
									if (num <= 30 && num > 10) {
										event.goto(2);
									}
									if (num <= 10) {
										event.goto(1);
									}
									('step 1');
									var num = get.rand(1, 100);
									if (num <= 100 && num > 50) {
										var numDC = get.rand(1, 1);
										if (numDC == 1) {
											player.gain(game.createCard({ name: 'sha', nature: 'fire' }));
										}
									}
									if (num <= 50 && num > 0) {
										var numDC = get.rand(1, 1);
										if (numDC == 1) {
											player.gain(game.createCard('huogong'));
										}
									}
									event.finish();
									('step 2');
									var num = get.rand(1, 100);
									if (num <= 30 && num > 10) {
										var numA = get.rand(1, 1);
										if (numA == 1) {
											player.gain(game.createCard('xhy'));
										}
									}
									if (num <= 50 && num > 30) {
										var numB = get.rand(1, 1);
										if (numB == 1) {
											player.gain(game.createCard('wslh'));
										}
									}
									if (num <= 70 && num > 50) {
										var numC = get.rand(1, 1);
										if (numC == 1) {
											player.gain(game.createCard('ldlhy'));
										}
									}
									if (num <= 85 && num > 70) {
										var numD = get.rand(1, 1);
										if (numD == 1) {
											player.gain(game.createCard('ymdh'));
										}
									}
									if (num <= 100 && num > 85) {
										var numE = get.rand(1, 1);
										if (numE == 1) {
											player.gain(game.createCard('qldxh'));
										}
									}
									if (num <= 10) {
										var numAA = get.rand(1, 1);
										if (numAA == 1) {
											player.gain(game.createCard('shouhuo'));
										}
									}
									event.finish();
									('step 3');
									var num = get.rand(1, 100);
									if (num <= 55 && num > 40) {
										var numF = get.rand(1, 1);
										if (numF == 1) {
											player.gain(game.createCard('flny'));
										}
									}
									if (num <= 70 && num > 55) {
										var numG = get.rand(1, 1);
										if (numG == 1) {
											player.gain(game.createCard('hssy'));
										}
									}
									if (num <= 80 && num > 70) {
										var numH = get.rand(1, 1);
										if (numH == 1) {
											player.gain(game.createCard('hysy'));
										}
									}
									if (num <= 90 && num > 80) {
										var numI = get.rand(1, 1);
										if (numI == 1) {
											player.gain(game.createCard('hxy'));
										}
									}
									if (num <= 100 && num > 90) {
										var numJ = get.rand(1, 1);
										if (numJ == 1) {
											player.gain(game.createCard('ylxy'));
										}
									}
									if (num <= 40) {
										var numBB = get.rand(1, 1);
										if (numBB == 1) {
											player.gain(game.createCard('shouhuo'));
										}
									}
									event.finish();
									('step 4');
									var num = get.rand(1, 100);
									if (num <= 70 && num > 60) {
										var numK = get.rand(1, 1);
										if (numK == 1) {
											player.gain(game.createCard('gldh'));
										}
									}
									if (num <= 80 && num > 70) {
										var numL = get.rand(1, 1);
										if (numL == 1) {
											player.gain(game.createCard('jllgh'));
										}
									}
									if (num <= 90 && num > 80) {
										var numM = get.rand(1, 1);
										if (numM == 1) {
											player.gain(game.createCard('gllh'));
										}
									}
									if (num <= 100 && num > 90) {
										var numN = get.rand(1, 1);
										if (numN == 1) {
											player.gain(game.createCard('jyfy'));
										}
									}
									if (num <= 60) {
										var numCC = get.rand(1, 1);
										if (numCC == 1) {
											player.gain(game.createCard('shouhuo'));
										}
									}
									event.finish();
									('step 5');
									var num = get.rand(1, 100);
									if (num <= 80 && num > 75) {
										var numO = get.rand(1, 1);
										if (numO == 1) {
											player.gain(game.createCard('sqyyh'));
										}
									}
									if (num <= 85 && num > 80) {
										var numP = get.rand(1, 1);
										if (numP == 1) {
											player.gain(game.createCard('hlyh'));
										}
									}
									if (num <= 95 && num > 90) {
										var numQ = get.rand(1, 1);
										if (numQ == 1) {
											player.gain(game.createCard('jyjzh'));
										}
									}
									if (num <= 100 && num > 95) {
										var numR = get.rand(1, 1);
										if (numR == 1) {
											player.gain(game.createCard('bhpmy'));
										}
									}
									if (num <= 75) {
										var numDD = get.rand(1, 1);
										if (numDD == 1) {
											player.gain(game.createCard('shouhuo'));
										}
									}
									event.finish();
									('step 6');
									var num = get.rand(1, 100);
									if (num <= 93 && num > 90) {
										var numS = get.rand(1, 1);
										if (numS == 1) {
											player.gain(game.createCard('slzy'));
										}
									}
									if (num <= 96 && num > 93) {
										var numT = get.rand(1, 1);
										if (numT == 1) {
											player.gain(game.createCard('jdfty'));
										}
									}
									if (num <= 98 && num > 96) {
										var numU = get.rand(1, 1);
										if (numU == 1) {
											player.gain(game.createCard('jlyh'));
										}
									}
									if (num <= 100 && num > 98) {
										var numV = get.rand(1, 1);
										if (numV == 1) {
											player.gain(game.createCard('xwty'));
										}
									}
									if (num <= 90) {
										var numEE = get.rand(1, 1);
										if (numEE == 1) {
											player.gain(game.createCard('shouhuo'));
										}
									}
									event.finish();
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/yihuo.jpg',
							fullimage: true,
						},
						xwty: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							modTarget: true,
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【虚无吞炎】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('xwty');
										player.marks.xwty.setBackgroundImage('extension/斗破苍穹X阴阳师/image/xwty.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【虚无吞炎】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 18,
									useful: 19.9,
									value: 19.9,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/xwty.jpg',
						},
						jlyh: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【净莲妖火】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('jlyh');
										player.marks.jlyh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/jlyh.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【净莲妖火】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 18,
									useful: 19.9,
									value: 19.9,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/jlyh.jpg',
						},
						jdfty: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【金帝焚天炎】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('jdfty');
										player.marks.jdfty.setBackgroundImage('extension/斗破苍穹X阴阳师/image/jdfty.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【金帝焚天炎】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 17.2,
									useful: 18.7,
									value: 18.3,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/jdfty.jpg',
						},
						slzy: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【生灵之焱】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('slzy');
										player.marks.slzy.setBackgroundImage('extension/斗破苍穹X阴阳师/image/slzy.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【生灵之焱】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 17.2,
									useful: 18.1,
									value: 18.4,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/slzy.jpg',
						},
						bhpmy: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【八荒破灭焱】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('bhpmy');
										player.marks.bhpmy.setBackgroundImage('extension/斗破苍穹X阴阳师/image/bhpmy.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【八荒破灭焱】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 17.2,
									useful: 17.9,
									value: 17.3,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/bhpmy.jpg',
						},
						jyjzh: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【九幽金祖火】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('jyjzh');
										player.marks.jyjzh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/jyjzh.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【九幽金祖火】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 17,
									useful: 17.2,
									value: 17.4,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/jyjzh.jpg',
						},
						sqyyh: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【三千焱炎火】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('sqyyh');
										player.marks.sqyyh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/sqyyh.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【三千焱炎火】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 17,
									useful: 16.7,
									value: 17,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/sqyyh.jpg',
						},
						jyfy: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【九幽风炎】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('jyfy');
										player.marks.jyfy.setBackgroundImage('extension/斗破苍穹X阴阳师/image/jyfy.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【九幽风炎】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 16.8,
									useful: 16.7,
									value: 16.8,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/jyfy.jpg',
						},
						gllh: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【骨灵冷火】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('gllh');
										player.marks.gllh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/gllh.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【骨灵冷火】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 16.7,
									useful: 16.8,
									value: 16.7,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/gllh.jpg',
						},
						jllgh: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【九龙雷罡火】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('jllgh');
										player.marks.jllgh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/jllgh.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【九龙雷罡火】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 16.6,
									useful: 16.5,
									value: 16.7,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/jllgh.jpg',
						},
						gldh: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【龟灵地火】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('gldh');
										player.marks.gldh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/gldh.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【龟灵地火】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								trick: {
									order: 16.4,
									useful: 16.4,
									value: 16.3,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/gldh.jpg',
						},
						ylxy: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【陨落心炎】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('ylxy');
										player.marks.ylxy.setBackgroundImage('extension/斗破苍穹X阴阳师/image/ylxy.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【陨落心炎】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								trick: {
									order: 16.3,
									useful: 16.1,
									value: 16,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/ylxy.jpg',
						},
						hxy: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【海心焰】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('hxy');
										player.marks.hxy.setBackgroundImage('extension/斗破苍穹X阴阳师/image/hxy.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【海心焰】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								trick: {
									order: 16.2,
									useful: 15.8,
									value: 15.6,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/hxy.jpg',
						},
						hysy: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【火云水炎】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('hysy');
										player.marks.hysy.setBackgroundImage('extension/斗破苍穹X阴阳师/image/hysy.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【火云水炎】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 16.1,
									useful: 14.9,
									value: 15.2,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/hysy.jpg',
						},
						hssy: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【火山石焰】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('hssy');
										player.marks.hssy.setBackgroundImage('extension/斗破苍穹X阴阳师/image/hssy.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【火山石焰】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 15.8,
									useful: 15.3,
									value: 15.4,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/hssy.jpg',
						},
						flny: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【风雷怒焱】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('flny');
										player.marks.flny.setBackgroundImage('extension/斗破苍穹X阴阳师/image/flny.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【风雷怒焱】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 15.7,
									useful: 14.9,
									value: 15.1,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/flny.jpg',
						},
						qldxh: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【青莲地心火】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('qldxh');
										player.marks.qldxh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/qldxh.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【青莲地心火】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 15.5,
									useful: 14.7,
									value: 14.5,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/qldxh.jpg',
						},
						ymdh: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【幽冥毒火】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('ymdh');
										player.marks.ymdh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/ymdh.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【幽冥毒火】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 15.4,
									useful: 14.9,
									value: 14.4,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/ymdh.jpg',
						},
						ldlhy: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【六道轮回炎】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('ldlhy');
										player.marks.ldlhy.setBackgroundImage('extension/斗破苍穹X阴阳师/image/ldlhy.jpg');
										player.storage.ldlhy = 2;
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【六道轮回炎】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 15.3,
									useful: 14.3,
									value: 14.7,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/ldlhy.jpg',
						},
						wslh: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【万兽灵火】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('wslh');
										player.marks.wslh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/wslh.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【万兽灵火】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 14,
									useful: 13.8,
									value: 13.2,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/wslh.jpg',
						},
						xhy: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【玄黄炎】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('xhy');
										player.marks.xhy.setBackgroundImage('extension/斗破苍穹X阴阳师/image/xhy.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【玄黄炎】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 12,
									useful: 12.4,
									value: 12.1,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/xhy.jpg',
						},
						hlyh: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							modTarget: true,
							content() {
								'step 0';
								player.judge(function (card) {
									return 1;
								});
								('step 1');
								if (get.color(result.card) == 'red') event.bool = 'addSkill';
								if (get.color(result.card) == 'black') event.bool = 'damage';
								('step 2');
								if (result.bool) {
									if (event.bool == 'damage') {
										player.damage(2, 'fire', 'nosource');
										game.log('很遗憾,', player, '尝试收服【红莲业火】失败!受到异火反噬的两点火焰伤害!');
									}
									if (event.bool == 'addSkill') {
										player.addSkill('hlyh');
										player.marks.hlyh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/hlyh.jpg');
										game.log('恭喜', player, '洪福齐天!竟然成功收服了异火【红莲业火】!真是羡煞旁人!');
									}
								}
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 17,
									useful: 17.1,
									value: 17.2,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/hlyh.jpg',
						},
						qhlz: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'basic',
							toself: true,
							enable(event, player) {
								return true;
							},
							lianheng: true,
							logv: false,
							savable(card, player, dying) {
								return dying == player || player.hasSkillTag('jiuOther', null, dying, true);
							},
							usable: 1,
							selectTarget: -1,
							modTarget: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								'step 0';
								player.chooseDrawRecover(1, true);
								('step 1');
								if (typeof event.baseDamage != 'number') event.baseDamage = 1;
								if (target.isDying() || event.getParent(2).type == 'dying') {
									target.recover(event.baseDamage);
									if (_status.currentPhase == target) {
										target.getStat().card.jiu--;
									}
								} else {
									game.addVideo('jiuNode', target, true);
									if (cards?.length) {
										card = cards[0];
									}
									if (!target.storage.jiu) target.storage.jiu = 0;
									target.storage.jiu += event.baseDamage;
									game.broadcastAll(
										function (target, card, gain2) {
											target.addSkill('jiu');
											if (!target.node.jiu && lib.config.jiu_effect) {
												target.node.jiu = ui.create.div('.playerjiu', target.node.avatar);
												target.node.jiu2 = ui.create.div('.playerjiu', target.node.avatar2);
											}
										},
										target,
										card,
										target == targets[0] && cards.length == 1
									);
									if (target == targets[0] && cards.length == 1) {
										if (card.clone && (card.clone.parentNode == target.parentNode || card.clone.parentNode == ui.arena)) {
											game.addVideo('gain2', target, get.cardsInfo([card]));
										}
									}
								}
							},
							ai: {
								basic: {
									useful(card, i) {
										if (_status.event.player.hp > 1) {
											if (i == 0) return 4;
											return 1;
										}
										if (i == 0) return 7.3;
										return 3;
									},
									value(card, player, i) {
										if (player.hp > 1) {
											if (i == 0) return 5;
											return 1;
										}
										if (i == 0) return 7.3;
										return 3;
									},
								},
								order() {
									return get.order({ name: 'sha' }) + 0.2;
								},
								result: {
									target(player, target) {
										if (target && target.isDying()) return 2;
										if (target && !target.isPhaseUsing()) return 0;
										if (lib.config.mode == 'stone' && !player.isMin()) {
											if (player.getActCount() + 1 >= player.bluefire) return 0;
										}
										var shas = player.getCards('h', 'sha');
										if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
											return 0;
										}
										shas.sort(function (a, b) {
											return get.order(b) - get.order(a);
										});
										var card;
										if (shas.length) {
											for (var i = 0; i < shas.length; i++) {
												if (lib.filter.filterCard(shas[i], target)) {
													card = shas[i];
													break;
												}
											}
										} else if (player.hasSha() && player.needsToDiscard()) {
											if (player.countCards('h', 'hufu') != 1) {
												card = { name: 'sha' };
											}
										}
										if (card) {
											if (
												game.hasPlayer(function (current) {
													return (
														get.attitude(target, current) < 0 &&
														target.canUse(card, current, true, true) &&
														!current.hasSkillTag('filterDamage', null, {
															player: player,
															card: card,
															jiu: true,
														}) &&
														get.effect(current, card, target) > 0
													);
												})
											) {
												return 1;
											}
										}
										return 0;
									},
								},
								tag: {
									save: 1,
								},
							},
							fullimage: true,
						},
						zihuo: {
							audio: 'ext:斗破苍穹X阴阳师/audio:2',
							type: 'trick',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							content() {
								player.addSkill('zh');
								player.storage.zh = 3;
								player.marks.zh.setBackgroundImage('extension/斗破苍穹X阴阳师/image/zihuo.jpg');
							},
							fullimage: true,
							ai: {
								playernowuxie: true,
								basic: {
									order: 7,
									useful: 7.4,
									value: 7.1,
								},
								result: {
									target: 1,
								},
								tag: {
									damage: 2,
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/zihuo.jpg',
						},
						shouhuo: {
							type: 'basic',
							enable: true,
							selectTarget: -1,
							cardcolor: 'red',
							toself: true,
							filterTarget(card, player, target) {
								return target == player;
							},
							modTarget: true,
							content() {
								'step 0';
								var num = get.rand(1, 100);
								if (num <= 100 && num > 75) {
									event.goto(4);
								}
								if (num <= 75 && num > 50) {
									event.goto(3);
								}
								if (num <= 50 && num > 25) {
									event.goto(2);
								}
								if (num <= 25) {
									event.goto(1);
								}
								('step 1');
								var num = get.rand(1, 100);
								if (num <= 100 && num > 75) {
									var numA = get.rand(1, 1);
									if (numA == 1) {
										player.gain(game.createCard('zihuo'));
									}
								}
								if (num <= 75 && num > 50) {
									var numB = get.rand(1, 1);
									if (numB == 1) {
										player.gain(game.createCard('huogong'));
									}
								}
								if (num <= 50 && num > 25) {
									var numDC = get.rand(1, 1);
									if (numDC == 1) {
										player.gain(game.createCard({ name: 'sha', nature: 'fire' }));
									}
								}
								if (num <= 25) {
									var numDC = get.rand(1, 1);
									if (numDC == 1) {
										player.draw();
									}
								}
								event.finish();
								('step 2');
								var num = get.rand(1, 100);
								if (num <= 100 && num > 67) {
									var numA = get.rand(1, 1);
									if (numA == 1) {
										player.gain(game.createCard('zihuo'));
									}
								}
								if (num <= 67 && num > 34) {
									var numB = get.rand(1, 1);
									if (numB == 1) {
										player.gain(game.createCard('huogong'));
									}
								}
								if (num <= 34) {
									var numAA = get.rand(1, 1);
									if (numAA == 1) {
										player.gain(game.createCard({ name: 'sha', nature: 'fire' }));
									}
								}
								event.finish();
								('step 3');
								var num = get.rand(1, 100);
								if (num <= 100 && num > 67) {
									var numA = get.rand(1, 1);
									if (numA == 1) {
										player.gain(game.createCard('zihuo'));
									}
								}
								if (num <= 67 && num > 34) {
									var numB = get.rand(1, 1);
									if (numB == 1) {
										player.gain(game.createCard('huogong'));
									}
								}
								if (num <= 34) {
									var numAA = get.rand(1, 1);
									if (numAA == 1) {
										player.gain(game.createCard({ name: 'sha', nature: 'fire' }));
									}
								}
								event.finish();
								('step 4');
								var num = get.rand(1, 100);
								if (num <= 100 && num > 67) {
									var numA = get.rand(1, 1);
									if (numA == 1) {
										player.gain(game.createCard('zihuo'));
									}
								}
								if (num <= 67 && num > 34) {
									var numB = get.rand(1, 1);
									if (numB == 1) {
										player.gain(game.createCard('huogong'));
									}
								}
								if (num <= 34) {
									var numAA = get.rand(1, 1);
									if (numAA == 1) {
										player.gain(game.createCard({ name: 'sha', nature: 'fire' }));
									}
								}
								event.finish();
							},
							ai: {
								basic: {
									order: 11,
									useful: 10.1,
									value: 9.9,
								},
								result: {
									target: 2,
								},
								tag() {
									'step 0'; //QQQ
									var num = get.rand(1, 100);
									if (num <= 100 && num > 75) {
										event.goto(4);
									}
									if (num <= 75 && num > 50) {
										event.goto(3);
									}
									if (num <= 50 && num > 25) {
										event.goto(2);
									}
									if (num <= 25) {
										event.goto(1);
									}
									('step 1');
									var num = get.rand(1, 100);
									if (num <= 100 && num > 75) {
										var numA = get.rand(1, 1);
										if (numA == 1) {
											player.gain(game.createCard('zihuo'));
										}
									}
									if (num <= 75 && num > 50) {
										var numB = get.rand(1, 1);
										if (numB == 1) {
											player.gain(game.createCard('huogong'));
										}
									}
									if (num <= 50 && num > 25) {
										var numDC = get.rand(1, 1);
										if (numDC == 1) {
											player.gain(game.createCard({ name: 'sha', nature: 'fire' }));
										}
									}
									if (num <= 25) {
										var numDC = get.rand(1, 1);
										if (numDC == 1) {
											player.draw();
										}
									}
									event.finish();
									('step 2');
									var num = get.rand(1, 100);
									if (num <= 100 && num > 67) {
										var numA = get.rand(1, 1);
										if (numA == 1) {
											player.gain(game.createCard('zihuo'));
										}
									}
									if (num <= 67 && num > 34) {
										var numB = get.rand(1, 1);
										if (numB == 1) {
											player.gain(game.createCard('huogong'));
										}
									}
									if (num <= 34) {
										var numAA = get.rand(1, 1);
										if (numAA == 1) {
											player.gain(game.createCard({ name: 'sha', nature: 'fire' }));
										}
									}
									event.finish();
									('step 3');
									var num = get.rand(1, 100);
									if (num <= 100 && num > 67) {
										var numA = get.rand(1, 1);
										if (numA == 1) {
											player.gain(game.createCard('zihuo'));
										}
									}
									if (num <= 67 && num > 34) {
										var numB = get.rand(1, 1);
										if (numB == 1) {
											player.gain(game.createCard('huogong'));
										}
									}
									if (num <= 34) {
										var numAA = get.rand(1, 1);
										if (numAA == 1) {
											player.gain(game.createCard({ name: 'sha', nature: 'fire' }));
										}
									}
									event.finish();
									('step 4');
									var num = get.rand(1, 100);
									if (num <= 100 && num > 67) {
										var numA = get.rand(1, 1);
										if (numA == 1) {
											player.gain(game.createCard('zihuo'));
										}
									}
									if (num <= 67 && num > 34) {
										var numB = get.rand(1, 1);
										if (numB == 1) {
											player.gain(game.createCard('huogong'));
										}
									}
									if (num <= 34) {
										var numAA = get.rand(1, 1);
										if (numAA == 1) {
											player.gain(game.createCard({ name: 'sha', nature: 'fire' }));
										}
									}
									event.finish();
								},
							},
							image: 'ext:斗破苍穹X阴阳师/image/shouhuo.jpg',
							fullimage: true,
						},
						douqishuangyidi: {
							type: 'equip',
							subtype: 'equip5',
							skills: ['feixiangdi'],
							ai: {
								order: 9.5,
								equipValue(card, player) {
									if (player.countCards('h')) return 6;
									return 1;
								},
								basic: {
									equipValue: 5,
									order: 5,
									useful: 2,
									value: 5,
								},
								result: {
									target(player, target, card) {
										return get.equipResult(player, target, card.name);
									},
								},
							},
							enable: true,
							selectTarget: -1,
							filterTarget(card, player, target) {
								return target == player;
							},
							modTarget: true,
							allowMultiple: false,
							content() {
								target.equip(card);
							},
							toself: true,
							image: 'ext:斗破苍穹X阴阳师/image/douqishuangyidi.jpg',
							fullimage: true,
						},
						douqishuangyigao: {
							type: 'equip',
							subtype: 'equip5',
							skills: ['feixianggao'],
							ai: {
								order: 9.5,
								equipValue(card, player) {
									if (player.countCards('h')) return 6;
									return 1;
								},
								basic: {
									equipValue: 5,
									order: 5,
									useful: 2,
									value: 5,
								},
								result: {
									target(player, target, card) {
										return get.equipResult(player, target, card.name);
									},
								},
							},
							enable: true,
							selectTarget: -1,
							filterTarget(card, player, target) {
								return target == player;
							},
							modTarget: true,
							allowMultiple: false,
							content() {
								target.equip(card);
							},
							toself: true,
							image: 'ext:斗破苍穹X阴阳师/image/douqishuangyigao.jpg',
							fullimage: true,
						},
						snzy: {
							type: 'trick',
							enable: true,
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								var target = target;
								var player = player;
								if (!player.storage.snzypl && !player.storage.snzy1pl && !target.storage.snzypl && !target.storage.snzy1pl) {
									player.storage.snzypl = [];
									player.storage.snzypl.push(target);
									player.addSkill('snzy');
									player.markSkillCharacter('snzy', target);
									target.storage.snzy1pl = [];
									target.storage.snzy1pl.push(player);
									target.addSkill('snzy1');
									target.markSkillCharacter('snzy1', player);
									player.$fullscreenpop('<font color=yellow>三年之约</font>');
									var S = ['三十年河西,三十年河东,莫欺少年穷!'];
									player.say(S.randomGet());
									player.recover();
									player.draw();
									var A = ['哼!'];
									target.say(A.randomGet());
									var O = ['哟,咋还打起来了？', '啧,我等且看好戏.', '年轻人火气不要这么大,伤肝呐.', '别BB,快打起来!', '板凳花生瓜子火腿肠已经准备好了,各位,看好戏啦!'];
									for (var i of game.players) {
										if (i != player && i != target && i.sex && i.sex == 'female') {
											O.push('哇,你们好暴力啊!');
											O.push('轻置娇臀,静看大佬们表演,嘤嘤嘤.');
										}
										if (i != player && i != target) i.say(O.randomGet());
									}
								} else {
									event.finish();
								}
							},
							ai: {
								basic: {
									order: 9,
									value: 3,
									useful: 1,
								},
								result: {
									target: -2,
								},
								tag: {
									loseHp: 1,
								},
							},
							selectTarget: 1,
							fullimage: true,
							image: 'ext:斗破苍穹X阴阳师/image/snzy.jpg',
						},
					},
					translate: {
						yihuo: '异火',
						yihuo_info: '听说只有极少数的幸运鹅才能见到真正的异火,大多数人见到的都是……',
						hlyh: '异火·红莲业火',
						hlyh_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第八</b>,十二业火诸般合力,焚尽世间一切罪恶!<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间一回合);你受到伤害时,若伤害来源没有罪业标记,则伤害来源添加等同于伤害数量的标记,若伤害来源已有罪业标记,则添加伤害数量两倍的标记数量(无冷却).',
						xwty: '异火·虚无吞炎',
						xwty_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第二</b>,此火生于虚无中,无相可寻,无形可抓,是一种奇异的存在,虚无吞炎,号称吞天噬地之物,拥有着吞噬万物之能,天地之间,唯有寥寥可数的东西,方才能够抗衡那种吞噬之能.<br><li><b>此火效果</b>:你获得对你造成伤害的牌并获得一个标记(无冷却);你免疫火伤,并且免疫时摸一张牌并回复一点体力(无冷却);你将受判定时,若当前是你的准备阶段,你获得判定区内的牌并获得一个标记,否则你获得你的判定结果牌并获得一个标记(无冷却);你即将受到伤害时,进行判定,若为黑色,则获得伤害来源的所有手牌牌并获得一个标记,若为红色,则获得伤害来源的所有装备区内的牌并获得一个标记(冷却时间三回合);你的回合开始时,若你的标记数大于3个,可弃置三个标记,选择一至三名角色获得<子火>直到其回合结束,拥有虚无吞炎<子火>的玩家可在出牌阶段选择一个目标,视为使用一张顺手牵羊;你造成火属性伤害后,你弃置你已有一半的标记数,目标被加上相当于你标记数五分之一(向下取整)的<吞炎>标记,拥有<吞炎>标记的角色少摸X张牌(X相当于<吞炎>标记的数量).',
						jlyh: '异火·净莲妖火',
						jlyh_info: "「<font color=orange>异火榜</font>」<br><li><b>排名第三</b>,有净化万物的特效.任何东西,只要被其沾上丁点,就将会被净化成一片虚无,甚至于可以以人的情绪为引,进入体内,内体灵魂斗气都净化为虚无,威力极为恐怖.<br><li><b>此火效果</b>:1、火灵:你的回合,你拥有技能<a style='color:orange' href=\"javascript:window.dpcqIntroduce('fonuhuolian');\"><佛怒火莲></a>(无冷却);2、净化:你的回合开始时,你弃置所有判定区的牌(无冷却);你造成伤害时,若此伤害没有属性,则转变成火属性(冷却一回合);你造成火焰伤害后,目标需弃置所有手牌和装备牌(冷却一回合);3、你免疫火伤,并且触发时摸一张牌(无冷却).",
						jdfty: '异火·金帝焚天炎',
						jdfty_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第四</b>,比不上净莲妖火那般神秘,但在远古时也是拥有着赫赫威名,而且此种异火,乃是古族传承之火,鲜有人能将之降服.金帝焚天炎可是号称连斗气都会被燃烧的可怕异火,传说中金帝焚天炎的第一任主人,施展此火,可是直接将一位斗圣强者所创造的空间给焚烧成了一片虚无.<br><li><b>此火效果</b>:你受到火焰伤害时,免疫之并摸一张牌(无冷却);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间一回合);你造成火焰伤害时:1、若目标未烧伤,则目标进入烧伤状态并添加2层烧伤标记;2、若目标已烧伤,则目标添加3层烧伤标记,同时,若:①此时目标未重伤,则目标陷入重伤状态并添加一个重伤标记,并且此伤害+1;②目标已重伤,则目标添加两个重伤标记,并且此伤害+2(冷却时间两回合).同时,你造成伤害时,目标需弃置所有手牌和装备区内的牌.',
						slzy: '异火·生灵之焱',
						slzy_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第五</b>,宛如液体版的绿色火焰,迎风暴涨.这等异火极为奇异,因为大多异火固然形态不同,可毕竟都是弥漫着毁灭之力,但这生灵之焱却并不展现强大的破坏力,它闻名于世的是它所充斥的那种生命之力.<br><li><b>此火效果</b>:你受到火焰伤害时,此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你拥有此火时,获得一个标记,你的回合开始,你将所有护甲转化为标记,并额外获得一个标记(无冷却);你造成伤害时,如果是火属性伤害,则你摸一张牌并增加一个标记(冷却时间一回合);你的回合结束,你将所有的标记数等量转化为护甲(无冷却),你拥有生灵之焱时,你的护甲可以抵挡相应体力流失的数值(冷却时间一回合).出牌阶段,你可以弃置一张牌,回复标记数量三分之一的体力值(向下取整,冷却时间三回合).',
						bhpmy: '异火·八荒破灭焱',
						bhpmy_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第六</b>,可化作一对足有百丈庞大的火焰双翼,霸道绝伦.<br><li><b>此火效果</b>:你受到火焰伤害时,免疫之(无冷却);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间一回合).霸道之火:你造成火属性伤害后,令此伤害+1并让目标陷入重伤状态,若目标已受重伤,则改为令此伤害+2并使目标的重伤标记数+1(冷却时间三回合);你对目标使用杀时进行判定,若为红色,目标不可闪避,若为黑色,则无视目标防具(无冷却).火焰之翼:锁定技,你每使用一张牌,你与其他角色的距离-1.',
						jyjzh: '异火·九幽金祖火',
						jyjzh_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第七</b>,与火山石焰融合后威力不弱于金帝焚天炎.<br><li><b>此火效果</b>:你受到火焰伤害时,免疫之(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间一回合);你造成火属性伤害后,令此伤害+1并让目标陷入混乱直到其受到伤害(冷却时间一回合).',
						sqyyh: '异火·三千焱炎火',
						sqyyh_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第九</b>,又被称为<三千星空焱炎火>,呈紫黑色,成形于星空,能吸收星辰之力不断地变得强大.天降银火,千里之地如处沙漠,昼夜不分,星辰不现,耀日不出.这种异火拥有着一种格外特殊的能力,那便是传闻中的<三千星空体质>.一些曾经与拥有过三千焱炎火的人战斗过的强者将之称为<不死体>,具有极强的回复能力.只要不是被轰成肉泥,那么任何伤势都能回复,不过只是时间问题罢了.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间两回合);你的回合开始时,若你已受伤,则你回复体力上限一半的体力(向下取整,冷却时间两回合);当你受到伤害时,进行判定,若结果为红色,回复一点体力(冷却时间一回合).',
						jyfy: '异火·九幽风炎',
						jyfy_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第十</b>,诞生于极阴之地的无尽深渊之中,在那里阴风整年不休,此异火就成型于风罡最为猛烈之地.此火有着一种奇异的风声自其中传出,而这种风声传入人耳中会令人感觉到一丝异样的烦躁,这种异声能够引起人情绪上出现波动.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间一回合);你造成火属性伤害后,目标陷入混乱直到其回合结束(冷却时间一回合).',
						gllh: '异火·骨灵冷火',
						gllh_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第十一</b>,极寒与极热相结合的奇特火焰,只有在每百年日月交替之时,方才能够在极寒与极阴之地遇见.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);回合开始时,你随机获得以下效果之一:1、你造成伤害时,若此伤害没有属性,则视为火属性伤害;2、你造成伤害时.若此伤害没有属性,则视为冰属性伤害.当你造成火属性伤害时,目标陷入烧伤状态,获得一层层烧伤标记若目标已烧伤则改为两层,随后其每回合开始前受到一点火焰伤害直到目标烧伤标记被清空(冷却时间三回合,与后者分开计算);当你造成冰属性伤害时,此伤害+1且目标被翻面(冷却时间三回合,与前者分开计算).',
						jllgh: '异火·九龙雷罡火',
						jllgh_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第十二</b>,火焰升腾间隐隐间能够见到九条银色火龙在火焰之内穿梭而行.异火之内有着龙威凝聚,因此有着震慑灵魂之神效.银色火焰袅袅燃烧,九条细小的火龙在其中四下穿梭,犹如具备着灵智一般,而且隐隐间有着些许龙威从中弥漫而出,令得人灵魂力量感到有些压抑.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);回合开始时,你随机获得以下效果之一:1、你造成伤害时,若此伤害没有属性,则视为火属性伤害;2、你造成伤害时.若此伤害没有属性,则视为雷属性伤害.当你造成火属性伤害时,若目标未烧伤,则目标陷入烧伤状态,获得一层烧伤标记,若已烧伤,则改为获得两层烧伤标记,随后其每回合开始前受到一点火焰伤害直到目标烧伤标记被清空(冷却时间三回合,与后者分开计算);当你造成雷属性伤害时,令此伤害+1并让目标陷入异常状态直到回合结束,陷入异常状态的角色回合开始时,自动跳过出牌阶段(冷却时间三回合,与前者分开计算).',
						gldh: '异火·龟灵地火',
						gldh_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第十三</b>,形状如巨龟,浑身布满尖锐火刺,狰狞巨嘴中生满如同刀锋般的獠牙的褐色奇异火焰.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成土属性(冷却时间两回合);你受到伤害时,进行一次判定,若结果为红色,则对伤害来源造成一点伤害,(冷却时间一回合),若结果为黑色,则你获得一个标记.你造成土属性伤害时,目标需弃置等同于标记数量的手牌或装备区内的牌,你移除标记(冷却时间两回合).',
						ylxy: '异火·陨落心炎',
						ylxy_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第十四</b>,火由心生,淬气炼骨.号称<修炼作弊器>,可以加快修炼.一旦成功炼化陨落心炎,那么体内便是会源源不断的产生一种心火,而这心火又会完全不用操控的每日每夜每时每刻的煅烧着体内斗气,在这等近乎不停歇的淬炼间,就犹如时时刻刻身体都处在修炼状态之中般,而且这修炼状态效果还比平日修炼更好,这种修炼速度自然会远远高于寻常修炼,所以称之为作弊器.此火还可召唤心火,将人从内而外焚烧殆尽.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性(冷却时间一回合);心火:你的摸牌阶段,你额外摸两张牌(冷却一回合);心火:所有友方角色的摸牌阶段,额外摸一张牌(冷却时间一回合).',
						hxy: '异火·海心焰',
						hxy_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第十五</b>,深蓝色火焰,看上去极为玄异,火焰升腾间,如同清澈海水般缓缓的扩散而开,淡淡的涟漪恍若水波.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成水属性(冷却时间两回合);你造成水属性伤害时,摸一张牌,并让目标额外受到一点火属性伤害(冷却时间两回合).',
						hysy: '异火·火云水炎',
						hysy_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第十六</b>,形状如同火云,拥有水之力的神奇火焰.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变为水属性伤害(冷却时间两回合),你造成水属性伤害时,令此伤害+1,你弃置一张牌并回复一点体力(冷却时间一回合).',
						hssy: '异火·火山石焰',
						hssy_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第十七</b>,可与九幽金祖火融合出新型异火,并能跟金帝焚天炎相抗衡而不落下风.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变为土属性伤害(冷却时间两回合);当你造成土属性伤害时,摸两张牌并令此伤害+1(冷却时间两回合).',
						flny: '异火·风雷怒焱',
						flny_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第十八</b>,诞生于风雷火三大能量交接之处,此火焰极为狂暴,拥有变化天气之力.<br><li><b>此火效果</b>:你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加);游戏开始和回合开始时,你随机获得以下效果之一:1、若存在天气效果,则你将天气变化为风,并且造成伤害时,若此伤害没有属性,则视为风属性伤害,你造成风属性伤害时,弃置目标一张装备牌,并且若当前天气为风,则此伤害+1(冷却时间两回合,与后者分开计算);2、若存在天气效果,则你将天气变化为雷,并且造成伤害时,若此伤害没有属性,则视为雷属性伤害,你造成雷属性伤害时,弃置目标一张手牌,并且若当前天气为雷,则此伤害+1(冷却时间两回合,与前者分开计算).',
						qldxh: '异火·青莲地心火',
						qldxh_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第十九</b>,顾名思义,即存在于地心熔岩之中的火焰.生于大地深处,历经大地之火的无数次锤炼、融合、压缩、雕制……十年成灵,百年成形,千年成莲,大成之时,其色偏青,莲心生一簇青火,其名为青莲火,也称青莲地心火.此火威力莫测,在临近火山地带之处甚至能够引发火山喷发,形成大自然的毁灭力量.<br><li><b>此火效果</b>:出牌阶段,你获得一张青火莲子(冷却时间一回合);你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加);你造成伤害时,若此伤害没有属性,则此伤害转变成火属性伤害(冷却时间一回合).',
						ymdh: '异火·幽冥毒火',
						ymdh_info: "「<font color=orange>异火榜</font>」<br><li><b>排名第二十</b>,火焰中充斥着毒性的异火,其形呈现淡紫色,吸收天地间奇毒而成,威力无穷,沾上一点就让人生不如死.<br><li><b>此火效果</b>:你造成伤害时,若此伤害没有属性,则此伤害转变为毒属性伤害(冷却时间两回合);当你造成毒属性伤害时,若目标未<a style='color:green' href=\"javascript:window.dpcqIntroduce('zhongdu');\"><中毒></a>,则目标进入<a style='color:green' href=\"javascript:window.dpcqIntroduce('zhongdu');\"><中毒></a>状态并获得一层毒标记(若目标已<a style='color:green' href=\"javascript:window.dpcqIntroduce('zhongdu');\"><中毒></a>,则获得两层<a style='color:green' href=\"javascript:window.dpcqIntroduce('zhongdu');\"><中毒></a>标记,冷却时间三回合),拥有毒标记的玩家在回合开始前流失一点体力移除一层毒标记;你免疫体力流失,并在触发后摸一张牌(冷却时间两回合).",
						ldlhy: '异火·六道轮回炎(阴阳逆心炎)',
						ldlhy_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第二十一</b>,此炎只存在于六道轮回之中,得此炎着,可借用轮回之力,六道之魂,传说为一位斗宗就因此突破到了斗尊,号称轮回尊者!<br><li><b>此火效果</b>:特殊效果:你获得此火时,获得三个标记,当你死亡时,若你身上的标记数大于1,则你弃置所有牌后不死并移除一枚标记进行轮回判定,若结果为红色,则你轮回成功,取消死亡后回复等同于体力上限的体力值并摸两张牌,若为黑色,则你轮回失败,则死亡,若你身上的标记数不大于1,则不能触发此效果;你造成伤害时,若此伤害没有属性,则此伤害转变为火属性伤害(冷却时间两回合);你受到火焰伤害时,令此伤害减一(冷却时间两回合,此效果不与其他异火叠加).',
						wslh: '异火·万兽灵火',
						wslh_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第二十二</b>,一种隐隐浮现万兽模样的红色火焰.<br><li><b>此火效果</b>:你造成伤害时,若此伤害没有属性,则此伤害转变为火属性伤害(冷却时间一回合);你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加).出牌阶段,你可以弃置一张红色牌,从牌堆里随机获得一张+1马/-1马(冷却时间三回合).',
						xhy: '异火·玄黄炎',
						xhy_info: '「<font color=orange>异火榜</font>」<br><li><b>排名第二十三</b>,一种深黄色的异火.<br><li><b>此火效果</b>:你造成伤害时,若此伤害没有属性,则此伤害转变为火属性伤害(冷却时间一回合),你造成火焰伤害时,此伤害+1(冷却时间一回合);你受到火焰伤害时,令此伤害减一(冷却时间一回合,此效果不与其他异火叠加).',
						qhlz: '青火莲子',
						qhlz_info: '出牌阶段和濒死时,你可以将此牌当作<酒>使用,并选择摸一张牌或者回复一点体力.',
						zihuo: '紫火',
						zihuo_info: '使用后必定获得紫火和3个紫火标记!',
						shouhuo: '兽火',
						shouhuo_info: '似乎是个兽火呢……要不试试看？',
						douqishuangyidi: '斗气双翼·低阶',
						douqishuangyidi_info: '装备后,你的手牌上限+1,且摸牌阶段有10%的概率多摸一张牌',
						douqishuangyigao: '斗气双翼·高阶',
						douqishuangyigao_info: '装备后,你的手牌上限+2,且你的摸牌阶段有15%的概率多摸一张牌',
						snzy: '三年之约',
						snzy_info: '定下三年之约,每个回合开始前增加一个标记并多摸一张牌,达到三个标记时可向约定之人发出挑战(视为使用一张决斗),若此时不发出挑战,则你在标记数大于3时时因羞辱而弃置所有手牌中的杀和所有装备牌,并将武将牌翻面(不敢见人),且对方标记耗尽时仍未受到挑战则可摸两张牌,若履行约定时你的体力值为体力上限的一半或更低且约定目标不是主公,则你可将原来的三年之约升级为【生死决斗】!<br><li>【生死决斗】:将除你和目标外的所有人移出游戏,你与目标对决,且每个回合开始前你/目标增加怒气值,怒气值越高,造成伤害越高,一方阵亡后,所有人回到游戏.',
					},
				};
				for (const i in QQQ.card) {
					const info = QQQ.card[i];
					info.image = `ext:斗破苍穹X阴阳师/image/${i}.jpg`;
					lib.inpile.add(i);
					if (info.mode && !info.mode.includes(lib.config.mode)) continue;
					lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
				}
				lib.config.all.cards.add('斗破苍穹X阴阳师');
				lib.config.cards.add('斗破苍穹X阴阳师');
				lib.translate.斗破苍穹X阴阳师_card_config = '<span style="-webkit-animation:dpcq_Character_character_config 10s infinite;animation:dpcq_Character_character_config 10s infinite;">斗破苍穹</span><font color=gray>X</font><span style="-webkit-animation:yys_Character_character_config 10s infinite;animation:yys_Character_character_config 10s infinite;">阴阳师</span>';
				return QQQ;
			});
		},
		help: {
			修炼之路: '<li>【斗者】:<br>修习斗气功法.<br><br><li>【斗师】:<br>拥有技能【斗气纱衣】:回合内限一次,你可以消耗5点斗气并获得一个<纱>.当你受到伤害时,你失去所有<纱>并有5%概率令伤害-1,每多一层<纱>,概率+2%(等级到达大斗师后失去此技能).<br><br><li>【大斗师】:<br>拥有技能【斗气铠甲】:每回合限一次,当你即将受到伤害时,你可以消耗35点斗气并摸一张牌,有X的概率令伤害-1(X为你的<斗气境界/10>且至多为70%).<br><br><li>【斗灵】:<br>拥有技能【斗气凝物】:每轮限一次,当你需要<打出>基本牌时,你可以消耗30点斗气视为打出此牌.<br><br><li>【斗王】:<br>拥有技能【斗气化翼】:回合内限一次,你可以消耗40点斗气,召唤一张<斗气化翼>(等级到达斗皇后失去此技能).<br><i>斗气化翼:宝物牌,被弃置后移出牌堆.装备后,你的手牌上限+1,且摸牌阶段有10%的概率多摸一张牌.</i><br><br><li>【斗皇】:<br>拥有技能【高级斗气化翼】:回合内限一次,你可以消耗65点斗气,召唤一张<高阶·斗气化翼>高阶·斗气化翼:宝物牌,被弃置后移出牌堆.装备后,你的手牌上限+2,且你的摸牌阶段有15%的概率多摸一张牌(等级到达斗宗后失去此技能).<br><br><li>【斗宗】:<br>拥有技能【凌踏虚空】:回合开始时限一次,你可以消耗100点斗气,并令摸牌阶段多摸两张牌,本回合手牌上限+2.<br><br><li>【斗尊】:<br>拥有技能【缚空间锁】:每回合限一次,当有其他角色装备装备牌时,你可以消耗110点斗气并将此装备牌弃置(等级达到斗尊后失去此技能).<br><br><li>【斗尊巅峰-半圣】:<br>拥有技能【调动空间】:每回合限一次,当有其他角色装备装备牌时,你可以消耗150点斗气并将此牌移到你的手牌区(等级达到斗圣后失去此技能)<br><br><li>【斗圣】:<br>拥有技能【开辟空间】:每回合限四次,当有其他角色使用装备牌或延时锦囊牌后,你可以消耗200点斗气,获得此牌的<🃏复制牌>,并有60%的概率摸一张牌(每提高一个星级,此概率便提高2%).<br><br><li>【斗帝】:<br>保留【斗圣】原有技能,额外获得【血脉之力】,拥有【血脉之力】的角色,其和其友方回合开始时,额外摸两张牌,且其自身在摸牌阶段的摸牌结算数量翻倍!获得【血脉之力】时,其血量和血量上限翻倍,其友方血量和血量上限增加50%.',
			'<技能卡>': '分为基本牌、锦囊牌以及装备牌三种,三种均由随机产生,每轮游戏开始时,均向牌堆内加入一定数量的<技能卡>,技能卡上对应的技能均为场上角色的随机一项技能.<br><li>你使用基本和锦囊牌指定非己目标时,目标添加卡牌说明上的技能直到其回合结束;</li><br><li>指定自己时,你添加该技能直到你的下个回合开始.</li><br><li>使用装备牌时,目标穿戴该装备,且该装备的技能即为卡牌说明上的技能.</li>',
		},
		package: extensionInfo,
	};
});

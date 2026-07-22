'use strict';
//—————————————————————忽悠宇宙武将—————————————————————//
game.import('character', function (lib, game, ui, get, ai, _status) {
	let hyyz = {};
	hyyz.name = 'hyyz';
	hyyz.connect = false;
	hyyz.characterSort = {};
	hyyz.characterReplace = {};
	hyyz.character = {
		hyyz_hyyz: ['unknown', 'shen', Infinity, ['hyyz_hyyz'], []],
		xt_jingyuan: ['male', 'hyyz_xt', 4, ['xtshenjun', 'xtzhankan', 'xtshence'], ['zhu']],
		xt_qingque: ['female', 'hyyz_xt', 3, ['xtlaoyue', 'xtmenqing', 'xtangang'], []],
		xt_bailu: ['female', 'hyyz_xt', 3, ['xtleiyin', 'xtxuanhu'], []],
		xt_luocha: ['male', 'hyyz_xt', 3, ['xtzanghua', 'xtlunzhuan'], ['zhu']],
		xt_waerte: ['male', 'hyyz_xt', 4, ['xtduanjie', 'xtshenpan'], []],
		xt_yinlang: ['female', 'hyyz_xt', 3, ['xthuiya', 'xtruqin', 'xtfengjin'], []],
		xt_jizi: ['female', 'hyyz_xt', 4, ['xtzhuiji', 'xtxinghuo', 'xttianhuo'], ['zhu']],
		xt_ren: ['male', 'hyyz_xt', 1, ['xtzhuchou', 'xthuiduo', 'xttushang'], []],
		b3_hua: ['female', 'hyyz_b3', 3, ['b3cunjin', 'b3shenyin', 'b3fusheng'], []],
		xt_bronya: ['female', 'hyyz_xt', 3, ['xtceli', 'xtchuxin'], ['zhu']],
		xt_sushang: ['female', 'hyyz_xt', 4, ['xtmengdong', 'xtruoming', 'xthuangwu'], []],
		xt_danhengyinyue: ['male', 'hyyz_xt', 4, ['xtnilin', 'xtwangtu'], []],
		b3_kaiwen: ['male', 'hyyz_b3', 4, ['b3qishuang', 'b3shenghen', 'b3jiushi'], ['zhu']], //die:bgm代替
		xt_kaituozhe: ['female', 'hyyz_xt', 4, ['xtkaituo'], [], 'xtkaituo'],
		xt_jingliu: ['female', 'hyyz_xt', 4, ['xtfeiguang', 'xtzhuanpo'], []],
		xt_huohuo: ['female', 'hyyz_xt', 3, ['xtqienuo', 'xtqushen', 'xtsuiyang'], []],
		xt_ruanmei: ['female', 'hyyz_xt', 3, ['xtpeiyu', 'xtnicha'], []],
		xt_yinzhi: ['male', 'hyyz_xt', 4, ['xtxinyang', 'xtximei'], []],
		xt_zhenliyisheng: ['male', 'hyyz_xt', 4, ['xtbianbo', 'xtguina'], []],
		b3_jizi: ['female', 'hyyz_b3', 4, ['b3xiepin', 'b3poxiao', 'b3huozhong'], []],
		xt_huahuo: ['female', 'hyyz_xt', 3, ['xtjiaoshi', 'xtkehun', 'xtjiamian'], []],
		xt_huangquan: ['female', 'hyyz_xt', 1, ['xtlunshi', 'xtxuwu', 'xtanshang'], []],
		xt_shajin: ['male', 'hyyz_xt', 4, ['xtniming', 'xtpoai', 'xtqingzhi'], []],
	};
	hyyz.characterIntro = {
		hyyz_hyyz: '忽悠宇宙',
		xt_jingyuan: '仙舟联盟帝弓七天将之一,负责节制罗浮云骑军的「神策将军」.师从前代「罗浮」剑首,但并不显名于武力.',
		xt_qingque: '仙舟「罗浮」太卜司的卜者,兼书库管理员.因工作一再偷闲摸鱼,即将贬无可贬成为「掌门人」.',
		xt_bailu: '仙舟「罗浮」持明族的尊长,有「衔药龙女」之称的医士.以独门医理和唯有龙脉方可施行的「医疗手段」救死扶伤.',
		xt_luocha: '金发俊雅的年轻人,背着巨大的棺棹.身为天外行商的他,不幸被卷入仙舟「罗浮」的星核危机,一身精湛医术莫名有了用武之地.',
		xt_waerte: '老成持重的列车组前辈.享受着久违的冒险奇遇,心底埋藏的热血再度燃烧,偶尔还会将经历的冒险旅程画在本子里.',
		xt_yinlang: '「星核猎手」的成员,骇客高手.将宇宙视作大型沉浸式模拟游戏,玩乐其中.掌握了能够修改现实数据的「以太编辑」.',
		xt_jizi: '星穹列车的修复者.为了见证广阔的星空,选择与星穹列车同行.爱好是制作手调咖啡.',
		xt_ren: '弃身锋刃的剑客,原名不详.效忠于「命运的奴隶」,拥有可怖的自愈能力.手持古剑作战,剑身遍布破碎裂痕,正如其身,亦如其心.',
		b3_hua: '符华,本名华,第一文明纪元抗崩坏组织<逐火之蛾>的十三英桀之一,位次<XII>,刻印为<浮生>.负责火种计划的先行者,第二文明纪元成为守护神州的仙人赤鸢.天穹峰事件中失去无敌的力量,和天命主教奥托达成交易,成为天命A级女武神.伪装身份成为圣芙蕾雅学园学生,琪亚娜所在班级的班长.因为奥托的背叛而死,临死前发动羽渡尘第零额定功率,将意识转移到一根羽毛身上,压制空之律者的存在.抛弃的身体则被奥托治好,其中诞生了律者的意识.',
		xt_bronya: '贝洛伯格「大守护者」继承人,年轻干练的银鬃铁卫统领.</br>布洛妮娅从小接受着严格的教育,具备一名「继承人」所需的优雅举止与亲和力.</br>但在看到下层区的恶劣环境后,未来的最高决策者逐渐生出了疑惑…「我所受的训练,真的能带领人民过上他们想要的生活么？」',
		xt_sushang: '单纯热心的云骑军新人,执一柄重剑.</br>憧憬着云骑军历史上的传奇,渴望成为响当当的人物.</br>为此,素裳坚决恪守「急人所急,有求必应;日行一善,三省吾身」的信条,过着助人为乐的忙碌日子.',
		xt_danhengyinyue: '罗浮龙尊,掌苍龙之传.行云布雨,膺责守望不死建木.尊号「饮月君」.',
		b3_kaiwen: '凯文·卡斯兰娜,第一文明纪元联合国下属对崩坏组织<逐火之蛾>的十三英桀之首,位次<I>,刻印为<救世>.人类最强大的保护者,最接近逐火之蛾宏愿的人,被所有人承认的<英雄>.世人坚信,他终将带领人类战胜崩坏.',
		xt_kaituozhe: '你记得不多.</br>你并非来自此地,也并非来自彼方,你本不去往任意一处——</br>直到模糊的声在你耳边吹拂,那悲伤爱怜的劝导,似是而非的催促……</br>种子扎根.你睁开双眼,那说话的人已不在.</br>只是声音愈来愈多愈清晰.</br>有无虑的关照,有镇静的劝告,有毅然的坚持,有温柔的点拨……</br>你看到锦线正织成明日.</br>巨大的兽自无垠降下,</br>金色的瞳从黑夜俯视,</br>你也不再被过去抛弃.</br>你还将开拓漫长旅途,</br>踏过的荆棘都成了路.</br>列车鸣笛,愿你抵达将至的未来</br>——以你自己的意志.',
		xt_jingliu: '镜流,曾经的罗浮剑首,云骑军不败盛名的缔造者.而今其名字已被抹去,成为行走于魔阴身边缘的仙舟叛徒,汲汲追寻旧日的夙愿.倒在她剑下的丰饶之民数不胜数,造翼者的羽卫,步离人的父狼,连高如山岳的器兽也当不住她的一击,可最终因魔阴神智狂乱、大开杀戒,成了逃亡域外的重犯.',
		xt_huohuo: '可怜又弱小的狐人小姑娘,也是怕鬼捉鬼的罗浮十王司见习判官.</br>名为「尾巴」的岁阳被十王司的判官封印在她的颀尾上,使她成为了招邪的「贞凶之命」.</br>害怕妖魔邪物,却总是受命捉拿邪祟,完成艰巨的除魔任务;</br>自认能力不足,却无法鼓起勇气辞职,只好默默害怕地继续下去.',
		xt_ruanmei: '气质温婉优雅的学者,「天才俱乐部」#81号会员,生命科学领域的专家.</br>凭借天赋与惊人的执著得到了博识尊的瞩目,在秘密的角落开始了对生命本源的研究与探索.</br>并因此被黑塔邀请,同螺丝咕姆、斯蒂芬联合开发了「模拟宇宙」.</br>私下里,她十分喜爱传统戏剧与点心,对刺绣也很感兴趣.',
		xt_yinzhi: '他为人正直、光明磊落,高贵的天性令人敬佩——一位游走宇宙间的独行者,坚定践行「纯美」.维护「纯美」在宇宙间的名誉,是银枝的职责:履行这一义务,起手需虔诚,落枪时则将要令人心悦诚服.',
		xt_zhenliyisheng: '直率而自我的博识学会学者,常以奇怪的石膏头雕遮蔽面容.自幼便展露出过人的才智,如今却以「庸人」自居.坚信智慧与创造力并不为天才独有,致力于向全宇宙传播知识,医治名为愚钝的顽疾.',
		b3_jizi: '天命A级女武神.姬子出生于极东之地,是从首批实验性瓦尔基里中成长起来的最高一线作战指挥官.2016年,姬子在与空之律者的战斗中战至力竭,在完成净化律者人格的目标后死亡.',
		xt_huangquan: '自称「巡海游侠」的旅人,本名不详.身佩一柄长刀,独行银河.</br>淡漠寡言,剑出如紫电般迅猛,却从来只以刀鞘战斗,收而不发.',
		xt_shajin: '星际和平公司「战略投资部」的高级干部,「石心十人」之一,基石为「诡弈砂金」.</br>个性张扬的风险爱好者,时常面带笑容,真心却难以揣测.</br>靠着同命运的博弈赢得如今的地位,将人生视作一场高风险、高回报的投资,而他向来游刃有余.',
	};
	hyyz.characterTitle = {
		hyyz_hyyz: `<img src=extension/忽悠宇宙/image/hyyz.png width="76" height="22">`,
		xt_jingyuan: '#b闭目藏睛坐中阵</br>不屑浮名绊此身</br>举头移锋惊电起</br>追魔扫秽敬弓神',
		xt_qingque: '#b摸鱼ing...',
		xt_bailu: '#b看本小姐我一尾巴抄到你爹妈认不出来!',
		xt_luocha: '#b一介行商罢了',
		xt_waerte: '#b继承「世界」之名',
		xt_yinlang: '#b(ᗜ ‸ ᗜ)',
		xt_jizi: '#b好啦,打起精神来</br>这就是我们要开拓的新世界!',
		xt_ren: '#b哼',
		b3_hua: '#b现在还不是绝望的时候</br>因为我来了',
		xt_bronya: '#b大守护者',
		xt_sushang: '#b本姑娘的名字将来也会和那些英雄一样,青史流传!',
		xt_danhengyinyue: '#b斩断过往</br>一念虚实',
		b3_kaiwen: '#b不论付出多少代价</br>人类</br>一定会战胜崩坏!',
		xt_kaituozhe: '#b以自己的意志,抵达结局吧!',
		xt_jingliu: '#b谨守此誓,吾等云骑</br>如云翳障空,卫蔽仙舟</br>拔剑!',
		xt_huohuo: '#b你们不要过来啊啊啊!',
		xt_ruanmei: '#b做的好,就有「奖励」哦!',
		xt_yinzhi: '#b您是否认为</br>纯美的女神「伊德莉拉」美貌盖世无双？',
		xt_zhenliyisheng: '#b我甚至无法和一个蠢材解释何为「蠢材」',
		b3_jizi: '#b活下去,琪亚娜……</br>这就是……最后一课了……',
		xt_huangquan: '#b愿为逝者哀哭,</br>泣下如雨,充盈渡川……</br>如潮涌至,领你归乡.',
		xt_shajin: '#b我任命运拨转轮盘,</br>孤注一掷,</br>遍历死地而后生.</br>一切献给——琥珀王!',
	};
	hyyz.dynamicTranslate = {
		xtshengxi(player) {
			if (player.storage.xtshengxi) return '锁定技,转换技.你受到伤害后,阳:回复1点体力;<span class="bluetext">阴:摸一张牌并失去此技</span>.</br>当你获得/失去此技时加/减1点体力上限.';
			return '锁定技,转换技.你受到伤害后,<span class="bluetext">阳:回复1点体力</span>;阴:摸一张牌并失去此技.</br>当你获得/失去此技时加/减1点体力上限.';
		},
		xtzanghua(player) {
			if (player.storage.xtzanghua) return '转换技.</br>阳:当一名角色的体力值扣减至体力上限的一半或更低后,你可以令其[净化]并回复2点体力.</br> <span class="bluetext">阴:准备阶段,你可以令一名其他角色本回合非锁定技无效,弃置其装备区和手牌区各一张牌.</span>';
			return '转换技.</br><span class="bluetext">阳:当一名角色的体力值扣减至体力上限的一半或更低后,你可以令其[净化]并回复2点体力.</span></br> 阴:准备阶段,你可以令一名其他角色本回合非锁定技无效,弃置其装备区和手牌区各一张牌.';
		},
	};
	hyyz.skill = {
		//忽悠宇宙
		hyyz_hyyz: {
			trigger: {
				player: ['phaseBegin'],
			},
			forced: true,
			firstDo: true,
			superCharlotte: true,
			filter(event, player) {
				return !player.hasSkill('hyyz_hyyz_hyyz');
			},
			charlotte: true,
			async content(event, trigger, player) {
				player.clearSkills();
				player.hyyzJinghua();
				if (_status.characterlist.length) {
					let list = [];
					for (let name of _status.characterlist) {
						if (name == 'hyyz_hyyz') continue;
						for (let j of ['meng_', 'xt_', 'b3_', 'ys_', 'Ym_', 'JLP_']) {
							if (name.indexOf(j) == 0) list.push(name);
						}
					}
					const {
						result: { control },
					} = player.name2 != undefined ? await player.chooseControl(player.name1, player.name2, true).set('prompt', '请选择要更换的武将牌') : { result: { control: player.name1 } };
					let now = list.randomGet();
					player.reinit(control, now, [player.hp, 4]);
					game.log('#b忽悠宇宙', '将武将牌替换为', now);
				}
				var map = {
					准备阶段: 'phaseZhunbei',
					判定阶段: 'phaseJudge',
					摸牌阶段: 'phaseDraw',
					出牌阶段: 'phaseUse',
					弃牌阶段: 'phaseDiscard',
					结束阶段: 'phaseJieshu',
				};
				const { control: phase } = await player
					.chooseControl('准备阶段', '判定阶段', '摸牌阶段', '出牌阶段', '弃牌阶段', '结束阶段')
					.set('prompt', '选择要执行的阶段')
					.set('prompt2', '将此阶段插入到任一阶段后')
					.set('ai', () => (player.countCards('h') < 4 ? '摸牌阶段' : '出牌阶段'))
					.forResult();
				if (phase) {
					const { control: phase2 } = await player.chooseControl(trigger.phaseList).set('prompt', '插入到哪个阶段后？').forResult();
					if (phase2) {
						game.log(player, '将【', phase, '】插入到【', phase2, '】后');
						let num = trigger.phaseList.indexOf(phase2);
						trigger.phaseList.splice(num + 1, 0, map[phase]);
						game.log(player, '的', '#y当前阶段为', trigger.phaseList);
					}
				}
				player.addSkill('hyyz_hyyz');
			},
			subSkill: {
				hyyz: {
					trigger: {
						player: 'phaseEnd',
					},
					forced: true,
					firstDo: true,
					charlotte: true,
					superCharlotte: true,
					async content(event, trigger, player) {
						player.removeSkill('hyyz_hyyz_hyyz');
						player.addSkill('hyyz_hyyz');
					},
				},
			},
		},
		//景元
		xtshenjun: {
			init: (player) => (player.storage.xtshenjun = 0),
			audio: 'ext:忽悠宇宙/audio/skill:2',
			mark: true,
			marktext: '君',
			intro: {
				name: '神霄雷府总司驱雷掣电追魔扫秽天君',
				content(storage) {
					let str = '神霄雷府总司驱雷掣电追魔扫秽天君的段数为:</br>';
					if (!storage) return (str += '0');
					return str + storage;
				},
			},
			trigger: {
				player: ['useCard', 'respond'],
			},
			forced: true,
			filter(event, player) {
				return event.card && get.type2(event.card) && player.storage.xtshenjun < 10;
			},
			async content(event, trigger, player) {
				let num = 0;
				switch (get.type2(trigger.card)) {
					case 'basic':
						num = 1;
						break;
					case 'trick':
						num = 2;
						break;
					case 'equip':
						num = 3;
						break;
				}
				player.storage.xtshenjun += num;
				if (player.storage.xtshenjun > 10) player.storage.xtshenjun = 10;
			},
		},
		xtzhankan: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				player: 'phaseUseBegin',
			},
			forced: true,
			filter(event, player) {
				return player.storage.xtshenjun >= 3;
			},
			async content(event, trigger, player) {
				game.playAudio('../extension/忽悠宇宙/audio/skill/xtzhankan1.mp3');
				game.playAudio('../extension/忽悠宇宙/audio/skill/xtzhankan2.mp3');
				do {
					player.storage.xtshenjun -= 3;
					const { targets } = await player
						.chooseTarget(true, lib.filter.notMe)
						.set('ai', (target) => get.damageEffect(target, player, player, 'thunder'))
						.set('prompt', '斩勘:对一名其他角色造成1点雷电伤害')
						.forResult();
					if (targets) {
						player.line(targets[0], 'thunder');
						targets[0].damage(player, 'thunder');
					} else return;
				} while (player.storage.xtshenjun >= 3);
			},
			ai: {
				combo: 'xtshenjun',
				threaten: 3,
				expose: 1,
			},
		},
		xtshence: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			zhuSkill: true,
			forced: true,
			trigger: {
				global: 'phaseBefore',
				player: 'enterGame',
			},
			filter(event, player) {
				if (!player.hasZhuSkill('xtshence')) return false;
				if (event.player.group != 'hyyz_xt') return false;
				return player.storage.xtshenjun < 10 && (event.name != 'phase' || game.phaseNumber == 0);
			},
			async content(event, trigger, player) {
				let num = game.countPlayer((current) => current.group == 'hyyz_xt');
				num = Math.min(num, 10 - player.storage.xtshenjun);
				if (num > 0) {
					player.storage.xtshenjun += num;
					game.log('#g【神策】', '<神君>增加', num, '段');
				}
			},
			ai: {
				combo: 'xtshenjun',
			},
		},
		//青雀
		xtqiongyu: {
			charlotte: true,
			intro: {
				markcount: 'expansion',
				mark(dialog, content, player) {
					var content = player.getExpansions('xtqiongyu');
					if (content && content.length) {
						if (player == game.me || player.isUnderControl()) {
							dialog.addAuto(content);
						} else {
							return `共有${get.cnNumber(content.length)}张<琼玉牌>`;
						}
					}
				},
				content(content, player) {
					var content = player.getExpansions('xtqiongyu');
					if (content && content.length) {
						if (player == game.me || player.isUnderControl()) {
							return get.translation(content);
						}
						return `共有${get.cnNumber(content.length)}张<琼玉牌>`;
					}
				},
			},
			onremove(player, skill) {
				var cards = player.getExpansions(skill);
				if (cards.length) player.loseToDiscardpile(cards);
			},
		},
		xtlaoyue: {
			audio: 'ext:忽悠宇宙/audio/skill:5',
			trigger: {
				global: 'phaseBegin',
			},
			forced: true,
			content() {
				player.addToExpansion(get.cards(), player, 'draw').gaintag.add('xtqiongyu');
				game.log(player, '增加一张<琼玉牌>');
			},
			group: ['xtlaoyue_lose', 'xtlaoyue_four', 'xtqiongyu'],
			subSkill: {
				lose: {
					audio: 'ext:忽悠宇宙/audio/skill:6',
					enable: 'phaseUse',
					filter: (event, player) => player.countCards('he') > 0,
					filterCard: true,
					position: 'he',
					check: (card) => 8 - get.value(card),
					content() {
						player.addToExpansion(get.cards(2), player, 'draw').gaintag.add('xtqiongyu');
						game.log(player, '增加两张<琼玉牌>');
					},
					ai: {
						order: 3,
						result: {
							player(player, target) {
								if (player.countCards('h') < player.hp) return -2;
								if (player.countCards('h') > player.hp) return 1;
							},
						},
					},
				},
				four: {
					trigger: {
						player: ['addToExpansionAfter', 'loseToDiscardpile'],
					},
					filter(event, player, name) {
						return player.getExpansions('xtqiongyu').length >= 4;
					},
					forced: true,
					silent: true,
					charlotte: true,
					filter(event, player, name) {
						return player.getExpansions('xtqiongyu').length > 4;
					},
					async content(event, trigger, player) {
						var num = player.getExpansions('xtqiongyu').length - 4;
						const { links } = await player
							.chooseCardButton(`弃置${get.cnNumber(num)}张<琼玉牌>`, player.getExpansions('xtqiongyu'), true, num)
							.set('ai', (button) => get.type(button.link) != 'basic')
							.forResult();
						if (links) {
							player.loseToDiscardpile(links);
							game.log(player, '弃置', get.cnNumber(links.length), '张<琼玉牌>');
						}
					},
				},
			},
			ai: {
				combo: 'xtangang',
			},
		},
		xtmenqing: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			enable: ['chooseToUse', 'chooseToRespond'],
			filter(event, player) {
				return player.getExpansions('xtqiongyu').length && event.filterCard({ name: 'sha' }, player, event);
			},
			hiddenCard(player, name) {
				return name == 'sha' && player.getExpansions('xtqiongyu').length;
			},
			chooseButton: {
				dialog(event, player) {
					return ui.create.dialog('门清', player.getExpansions('xtqiongyu'), 'hidden');
				},
				filter(button, player) {
					var evt = _status.event.parent;
					var card = { name: 'sha' };
					return evt.filterCard(card, player, evt);
				},
				select: 1,
				check(button) {
					var player = _status.event.player;
					return get.type2(button.link) != 'basic';
				},
				backup(links, player) {
					return {
						audio: 'ext:忽悠宇宙/audio/skill:2',
						filterCard: links[0],
						selectCard: -1,
						position: 'x',
						viewAs: {
							name: 'sha',
						},
						onuse(result, player) { },
						onrespond(result, player) { },
					};
				},
				prompt(links, player) {
					return `选择杀(${get.translation(links[0])})的目标`;
				},
			},
			ai: {
				combo: 'xtlaoyue',
				order(item, player) {
					if (player.getExpansions('xtqiongyu').length >= 3) return 6;
					return 1;
				},
				respondSha: true,
				skillTagFilter(player, tag, arg) {
					return player.getExpansions('xtqiongyu').length;
				},
			},
			mod: {
				targetInRange(card) {
					if (_status.event.skill == 'xtmenqing_backup') return true;
				},
			},
			group: 'xtqiongyu',
		},
		xtangang: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			trigger: {
				player: ['addToExpansionAfter', 'loseToDiscardpile'],
			},
			filter(event, player, name) {
				return player.getExpansions('xtqiongyu').length == 4 && player.getExpansions('xtqiongyu').every((val) => get.type2(player.getExpansions('xtqiongyu')[0]) == get.type2(val));
			},
			forced: true,
			async content(event, trigger, player) {
				await player.loseToDiscardpile(player.getExpansions('xtqiongyu'));
				const { targets } = await player
					.chooseTarget('对一名其他角色造成2点伤害', lib.filter.notMe, true)
					.set('ai', (target) => -get.attitude(_status.event.player, target))
					.forResult();
				if (targets) {
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtangang_peng.mp3');
					player.line(targets[0], 'fire');
					targets[0].damage(2);
				}
			},
			group: 'xtqiongyu',
			ai: {
				combo: 'xtlaoyue',
			},
		},
		//白露
		xtleiyin: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			bailu: ['获得〖生息〗', '回复1点体力', '摸一张牌'],
			init(player) {
				player.storage.xtleiyin = lib.skill.xtleiyin.bailu.slice();
			},
			prompt() {
				var player = _status.event.player,
					storage = player.getStorage('xtleiyin');
				let str = `弃置${3 - player.getStorage('xtleiyin').length}张牌,令一名角色执行`;
				for (var i of storage) {
					str += `<li><span class='greentext'>${i}</span>`;
				}
				return str;
			},
			enable: 'phaseUse',
			filter: (card, player) => player.getStorage('xtleiyin').length && player.countCards('he') >= 3 - player.getStorage('xtleiyin').length,
			filterCard: true,
			position: 'he',
			selectCard: () => 3 - _status.event.player.getStorage('xtleiyin').length,
			check: (card) => 8 - get.value(card),
			filterTarget: true,
			content() {
				for (var i of player.getStorage('xtleiyin')) {
					switch (i) {
						case '获得〖生息〗': {
							if (!targets[0].hasSkill('xtshengxi')) targets[0].addSkill('xtshengxi');
							break;
						}
						case '回复1点体力':
							targets[0].recover();
							break;
						case '摸一张牌':
							targets[0].draw();
							break;
					}
				}
				player.unmarkAuto('xtleiyin', [player.getStorage('xtleiyin')[0]]);
				player
					.when('phaseUseEnd')
					.assign({
						lastDo: true,
						popup: false,
						charlotte: true,
						forced: true,
						silent: true,
					})
					.then(() => lib.skill.xtleiyin.init(player));
			},
			derivation: ['xtshengxi'],
			ai: {
				order: 8,
				result: {
					target(player, target) {
						let num = player.getStorage('xtleiyin').length;
						if (!num) return;
						if (num == 3) {
							if (!player.hasSkill('xtshengxi') && target == player) return 10;
							return get.recoverEffect(target) + 3;
						}
						if (num == 2) return get.recoverEffect(target) + 1;
						if (num == 1) return 1;
					},
					player: -1,
				},
			},
		},
		xtshengxi: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			init(player) {
				player.gainMaxHp();
			},
			onremove(player) {
				player.loseMaxHp();
				delete player.storage.xtshengxi;
			},
			trigger: {
				player: 'damageEnd',
			},
			firstDo: true,
			forced: true,
			zhuanhuanji: true,
			async content(event, trigger, player) {
				if (!player.storage.xtshengxi) {
					player.recover();
					player.changeZhuanhuanji('xtshengxi');
				} else {
					player.draw();
					player.removeSkill('xtshengxi');
				}
			},
			mark: true,
			marktext: '💜',
			intro: {
				name: '生息',
				content(storage, player) {
					return `受到伤害后,${storage ? '<span class="thundertext">摸一张牌并失去此技</span>' : '<span class="greentext">回复1点体力</span>'}`;
				},
			},
			ai: {
				maixie: true,
				maixie_hp: true,
			},
		},
		xtxuanhu: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			enable: 'chooseToUse',
			filter(event, player) {
				return event.type == 'dying' && player.storage.xtxuanhu == false && _status.event.dying != player;
			},
			filterTarget(card, player, target) {
				return target == _status.event.dying;
			},
			selectTarget: -1,
			mark: true,
			limited: true,
			init(player) {
				player.storage.xtxuanhu = false;
			},
			content() {
				'step 0';
				player.awakenSkill('xtxuanhu');
				player.storage.xtxuanhu = true;
				('step 1');
				target.recover(2 - target.hp);
			},
			ai: {
				order: 6,
				threaten: 1.4,
				skillTagFilter(player) {
					if (!_status.event.dying) return false;
				},
				save: true,
				result: {
					target: 6,
				},
			},
			intro: {
				content: 'limited',
			},
		},
		//罗刹
		xtzanghua: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			mark: true,
			zhuanhuanji: true,
			marktext: '☯',
			intro: {
				content(storage, player, skill) {
					return storage ? '准备阶段,你可以令一名其他角色本回合非锁定技无效,弃置其装备区和手牌区各一张牌.' : '当一名角色的体力值扣减至体力上限的一半或更低后,你可以令其[净化]并回复2点体力.';
				},
			},
			group: ['xtzanghua_hp', 'xtzanghua_lose'],
			subSkill: {
				hp: {
					trigger: {
						global: ['damageEnd', 'loseHpEnd'],
					},
					prompt(event, player) {
						return `葬花:令${get.translation(event.player)}[净化]并回复2点体力`;
					},
					filter(event, player) {
						return event.player.hp <= event.player.getDamagedHp() && event.player.isIn() && !player.storage.xtzanghua;
					},
					logTarget: 'player',
					check(event, player) {
						return get.attitude(player, event.player) > 0;
					},
					content() {
						game.playAudio('../extension/忽悠宇宙/audio/skill/xtzanghua' + [1, 2].randomGet());
						trigger.player.hyyzJinghua();
						trigger.player.recover(2);
						player.changeZhuanhuanji('xtzanghua');
					},
				},
				lose: {
					trigger: {
						player: 'phaseZhunbeiBegin',
					},
					forced: true,
					filter(event, player) {
						return player.storage.xtzanghua;
					},
					usable: 1,
					async content(event, trigger, player) {
						game.playAudio('../extension/忽悠宇宙/audio/skill/xtzanghua3.mp3');
						const { targets } = await player
							.chooseTarget('葬花:准备阶段,你可以令一名其他角色本回合非锁定技无效,弃置其装备区和手牌区各一张牌.', function (card, player, target) {
								return target != player;
							})
							.set('ai', function (target) {
								var player = _status.event.player;
								var att = get.attitude(player, target);
								if (att < 0) {
									att = -Math.sqrt(-att);
								} else {
									att = Math.sqrt(att);
								}
								return att * lib.card.guohe.ai.result.target(player, target);
							})
							.forResult();
						if (targets) {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xtzanghua4.mp3');
							targets[0].addTempSkill('fengyin');
							var num = 0;
							if (targets[0].countCards('h')) num++;
							if (targets[0].countCards('e')) num++;
							if (num > 0) {
								player.discardPlayerCard(targets[0], num, 'he', true).set('filterButton', function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
									}
									return true;
								});
							}
							player.changeZhuanhuanji('xtzanghua');
						} else player.getStat('triggerSkill').xtzanghua_lose--;
					},
				},
			},
		},
		xtlunzhuan: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			mod: {
				targetEnabled(card, player, target) {
					if (get.type(card) == 'delay') return false;
				},
			},
			derivation: ['xtheiyuan', 'xtbaihua'],
			mark: true,
			intro: {
				content: '已发动#次【葬花】',
			},
			trigger: {
				player: ['xtzanghua_loseAfter', 'xtzanghua_hpAfter'],
			},
			init(player) {
				player.storage.xtlunzhuan = 0;
			},
			forced: true,
			async content(event, trigger, player) {
				player.storage.xtlunzhuan++;
				if (player.storage.xtlunzhuan >= 2) {
					player.storage.xtlunzhuan = 0;
					const { index } = await player
						.chooseControl(true)
						.set('prompt', '轮转:令一名角色获得一项')
						.set('choiceList', [`<span class="firetext">【黑渊】</br>下次受到伤害后,失去1点体力,罗刹摸一张牌.</span>`, `<span class="greentext">【白花】</br>下次造成伤害后,回复1点体力,罗刹摸一张牌.</span>`])
						.set('ai', () => [0, 1].randomGet())
						.forResult();
					if (index != undefined) {
						const { targets } = await player
							.chooseTarget(true, function (card, player, target) {
								return !target.hasSkill(index == 0 ? 'xtheiyuan' : 'xtbaihua');
							})
							.set('prompt', '令一名角色获得' + (index == 0 ? '【黑渊】' : '【白花】'))
							.set('prompt2', index == 0 ? '该角色下次受到伤害后失去1点体力,你摸一张牌.' : '该角色下次造成伤害后回复1点体力,你摸一张牌.')
							.set('ai', (target) => {
								let att = get.attitude(_status.event.player, target);
								if ((index == 0 && target.hp <= 2) || (index == 1 && target.hp <= target.getDamagedHp())) att *= 2;
								att *= index * 2 - 1;
								return att;
							})
							.forResult();
						if (targets) {
							targets[0].addAdditionalSkill('xtlunzhuan', [index == 0 ? 'xtheiyuan' : 'xtbaihua']);
						}
					}
				}
			},
			ai: {
				combo: 'xtzanghua',
			},
		},
		xtheiyuan: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			mark: true,
			marktext: '🌻',
			intro: {
				name: '轮转(黑渊)',
				content: '锁定技,你下次受到伤害后,失去1点体力,罗刹摸一张牌.',
			},
			trigger: {
				player: 'damageEnd',
			},
			_priority: 8,
			forced: true,
			content() {
				player.loseHp();
				game.filterPlayer((current) => current.name == 'xt_luocha').map((a) => a.draw());
				player.removeSkill('xtheiyuan');
			},
		},
		xtbaihua: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			mark: true,
			marktext: '🌼',
			intro: {
				name: '轮转(白花)',
				content: '锁定技,你下次造成伤害后,回复1点体力,罗刹摸一张牌.',
			},
			trigger: {
				source: 'damageSource',
			},
			_priority: 8,
			forced: true,
			content() {
				player.recover();
				game.filterPlayer((current) => current.name == 'xt_luocha').map((a) => a.draw());
				player.removeSkill('xtbaihua');
			},
		},
		//瓦尔特
		xtduanjie: {
			audio: 'ext:忽悠宇宙/audio/skill:3',
			trigger: {
				player: 'useCardToPlayered',
			},
			filter(event, player) {
				return event.card && event.card.name == 'sha' && event.target != player && !event.target.hashyyzBuff('hyyzBuff_jingu');
			},
			shaRelated: true,
			forced: true,
			logTarget: 'target',
			content() {
				trigger.target.addhyyzBuff('hyyzBuff_jingu');
			},
			ai: {
				effect: {
					player(card, player, target) {
						if (card.name == 'sha') return [1, 2];
					},
				},
				unequip: true,
				skillTagFilter(player, tag, arg) {
					if (tag == 'unequip' && arg && arg.name == 'sha' && arg.target) return true;
					return false;
				},
			},
		},
		xtshenpan: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			trigger: {
				source: 'damageSource',
			},
			check(event, player) {
				return -get.attitude(player, event.player);
			},
			frequent: 'check',
			forced: true,
			filter(event, player) {
				return !event.player.hashyyzBuff('hyyzBuff_jiansu') && event.player.isAlive();
			},
			usable: 1,
			async content(event, trigger, player) {
				const { bool } = await player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name).forResult();
				if (bool) {
					trigger.player.addhyyzBuff('hyyzBuff_jiansu');
				} else player.getStat('triggerSkill').xtshenpan--;
			},
			group: 'xtshenpan_lose',
			subSkill: {
				lose: {
					trigger: {
						global: ['loseAfter'],
					},
					filter(event, player) {
						if (!event.player.hashyyzBuff('hyyzBuff_jingu')) return false;
						if (event.player == player) return false;
						if (event.type != 'discard' || event.getlx === false) return false;
						var evt = event.getl(event.player);
						if (evt && evt.cards && evt.cards.length) {
							for (var i of evt.cards) {
								if (i.original != 'j' && get.position(i, true) == 'd') {
									return true;
								}
							}
							return false;
						}
					},
					forced: true,
					async content(event, trigger, player) {
						game.playAudio('../extension/忽悠宇宙/audio/skill/xtshenpan2.mp3');
						let cards = [];
						for (var i = 0; i < trigger.cards2.length; i++) {
							if (get.position(trigger.cards2[i], true) == 'd') {
								cards.push(trigger.cards2[i]);
							}
						}
						if (cards) {
							const { links } = await player
								.chooseButton([`审判:获得其中一张牌,可以对${get.translation(trigger.player)}使用此牌`, cards], (button) => {
									return _status.event.player.getUseValue(button.link) || get.value(button.link);
								})
								.forResult();
							if (links) {
								player.gain(links[0], 'gain2');
								game.playAudio('../extension/忽悠宇宙/audio/skill/xtshenpan3.mp3');
								if (player.canUse(links[0], trigger.player, false)) {
									const { bool } = await player.chooseBool(`是否对${get.translation(trigger.player)}使用${get.translation(links[0])}？`).forResult();
									if (bool) player.useCard(links[0], trigger.player);
								}
							}
						}
					},
				},
			},
		},
		//银狼
		xthuiya: {
			init: () => (lib.hyyzBuff.hyyzBuff_tuya = '涂鸦'),
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				player: 'useCardToPlayered',
			},
			filter(event, player) {
				if (_status.currentPhase != player || !player.isPhaseUsing()) return false;
				return event.target != player && !event.target.hashyyzBuff('hyyzBuff_tuya');
			},
			usable: 1,
			logTarget: 'target',
			content() {
				trigger.target.addhyyzBuff('hyyzBuff_tuya');
				trigger.parent.directHit.addArray(game.filterPlayer());
			},
		},
		hyyzBuff_tuya: {
			type: 'debuff',
			mark: true,
			marktext: '💥',
			name: '涂鸦',
			description: '效果:不能响应与装备区内牌花色相同的牌.',
			intro: {
				name: '涂鸦',
				content: '效果:不能响应与装备区内牌花色相同的牌.',
			},
			trigger: {
				global: 'useCard',
			},
			forced: true,
			charlotte: true,
			filter(event, player) {
				if (!event.card || !event.card.suit) return false;
				if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
				if (get.type(event.card) == 'basic' && ['shan', 'tao', 'jiu', 'du'].includes(event.card.name)) return false;
				var suit = event.card.suit;
				return player.countCards('e', { suit: suit }) && player.hashyyzBuff('hyyzBuff_tuya');
			},
			content() {
				var suit = trigger.card.suit;
				trigger.directHit.add(player);
				game.log(player, '因', '#r[涂鸦]', '不能响应', trigger.card);
			},
		},
		xtruqin: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			enable: ['chooseToUse', 'chooseToRespond'],
			filter(event, player) {
				if (_status.currentPhase == player) return false;
				if (event.name == 'chooseToRespond' && event.responded) return false;
				return game.countPlayer(function (current) {
					if (current == player || !current.hashyyzBuff('hyyzBuff_tuya')) return false;
					if (!current.countCards('h')) return false;
					return true;
				});
			},
			chooseButton: {
				dialog(event, player) {
					var dialog = ui.create.dialog('入侵', 'hidden');
					game.countPlayer(function (current) {
						if (current != player && current.hashyyzBuff('hyyzBuff_tuya') && current.countCards('h')) {
							dialog.addText(get.translation(current.name) + '的手牌');
							dialog.add(current.getCards('h'));
						}
					});
					return dialog;
				},
				filter(button, player) {
					var evt = _status.event.parent;
					if (evt && evt.filterCard) {
						return evt.filterCard(button.link, player, evt);
					}
					return true;
				},
				check(button) {
					var player = _status.currentPhase;
					var card = button.link;
					if (
						_status.event.parent.type != 'phase' ||
						game.hasPlayer(function (current) {
							return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
						})
					) {
						var effect = player.getUseValue(card);
						if (effect > 0) return effect;
						return 1;
					}
				},
				backup(links, player) {
					var cardx = [];
					for (var i of links) {
						cardx.push(i);
					}
					return {
						filterCard() {
							return false;
						},
						selectCard: -1,
						viewAs: links[0],
						cards: cardx,
						onuse(result, player) {
							result.cards = lib.skill[result.skill].cards;
							game.log(player, '入侵现实数据并使用了', get.owner(links[0]) || '', '的', links[0]);
						},
						onrespond(result, player) {
							var cards = lib.skill[result.skill].cards;
							var evt = _status.event.parent;
							player.$throw(cards);
							game.cardsDiscard(cardx);
							evt.untrigger();
							evt.animate = false;
							evt.responded = true;
							lib.skill[result.skill].cards.remove();
							result.cards = cards;
							//_status.event为respond
							//_status.event.parent:chooseToRespond
						},
					};
				},
				prompt(links, player) {
					return `选择${get.translation(links)}的目标`;
				},
			},
			hiddenCard(player, name) {
				return game.hasPlayer((current) => current.hashyyzBuff('hyyzBuff_tuya') && current.countCards('h') > 0);
			},
			ai: {
				combo: 'xthuiya',
				order: 15,
				result: {
					player: 2,
				},
				threaten: 2.9,
				respondShan: true,
				respondSha: true,
				save: true,
				basic: {
					useful: [6, 4],
					value: [6, 4],
				},
				expose: 0.2,
				useful: -1,
				value: -1,
			},
			group: ['xtruqin_ai', 'xtruqin_kill'],
			subSkill: {
				ai: {
					trigger: {
						player: 'gainAfter',
					},
					forced: true,
					popup: false,
					forced: true,
					filter(event, player) {
						var evt = event.getParent('phaseDraw');
						if (evt && evt.player == player) return false;
						return event.getg(player).length;
					},
					content() {
						game.playAudio('../extension/忽悠宇宙/audio/skill/xtruqin_ai.mp3');
					},
					ai: {
						viewHandcard: true,
						skillTagFilter(player, arg, target) {
							return player.hasSkill('xtruqin') && target != player && target.hashyyzBuff('hyyzBuff_tuya');
						},
					},
				},
				kill: {
					trigger: {
						source: 'dieAfter',
					},
					forceDie: true,
					forced: true,
					popup: false,
					firstDo: true,
					content() {
						'step 0';
						if (trigger.player.isEnemiesOf(player)) {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xtruqin_kill.mp3');
						}
					},
				},
			},
		},
		xtfengjin: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				source: 'damageEnd',
			},
			check(event, player) {
				return get.attitude(player, event.player) <= 0;
			},
			filter(event, player) {
				if (event.player.hashyyzBuff('hyyzBuff_zhongshang') && event.player.hashyyzBuff('hyyzBuff_xuruo') && event.player.hashyyzBuff('hyyzBuff_jiansu')) return false;
				return event.player != player && event.player.isIn();
			},
			forced: true,
			async content(event, trigger, player) {
				'step 0';
				let list = ['hyyzBuff_zhongshang', 'hyyzBuff_xuruo', 'hyyzBuff_jiansu', 'cancel2'].filter((skill) => !trigger.player.hasSkill(skill));
				const { control } = await player
					.chooseControl(list, true)
					.set('prompt', `封禁:是否令${get.translation(trigger.player)}获得一个debuff？`)
					.set('ai', () => -get.attitude(player, trigger.player))
					.forResult();
				if (control != 'cancel2') {
					trigger.player.addSkill(control);
				}
			},
		},
		//姬子
		xtzhuiji: {
			trigger: {
				player: 'damageEnd',
				source: 'damageSource',
			},
			forced: true,
			filter(event, player) {
				return event.player.countDiscardableCards(player, 'e') > 0;
			},
			async content(event, trigger, player) {
				const { cards } = await player
					.discardPlayerCard(get.prompt('xtzhuiji', trigger.player), trigger.player, 'e')
					.set('ai', function (button) {
						const trigger = _status.event.getTrigger();
						const target = trigger.player,
							player = _status.event.player;
						const att = get.attitude(player, target);
						if (player.hp <= 2 && target == player) return 12 - get.value(button.link);
						if (att > 0) return 8 - get.value(button.link);
						return 0.1 + get.value(button.link);
					})
					.forResult();
				if (cards) {
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtzhuiji' + (trigger.player == player ? [1, 2].randomGet() : [3, 4].randomGet()));
				}
			},
		},
		xtxinghuo: {
			marktext: '星',
			intro: {
				content: 'expansion',
				markcount: 'expansion',
			},
			onremove(player, skill) {
				var cards = player.getExpansions(skill);
				if (cards.length) player.loseToDiscardpile(cards);
			},
			trigger: {
				global: ['loseAsyncAfter', 'loseAfter'],
			},
			filter(event, player) {
				if (event.type != 'discard' || event.getlx === false) return;
				var evt = event.getl(event.player);
				for (var i = 0; i < evt.cards2.length; i++) {
					if (get.type(evt.cards2[i]) == 'equip' && get.position(evt.cards2[i]) == 'd') {
						return true;
					}
				}
				return false;
			},
			forced: true,
			async content(event, trigger, player) {
				let cards = [];
				let evt = trigger.getl(trigger.player);
				for (var i = 0; i < evt.cards2.length; i++) {
					if (get.type(evt.cards2[i]) == 'equip' && get.position(evt.cards2[i]) == 'd') {
						cards.push(evt.cards2[i]);
					}
				}
				if (cards.length) {
					let str = [`令${get.translation(trigger.player)}[灼烧]`, `将${get.translation(cards)}置于武将牌上并摸一张牌`];
					const { index } = await player
						.chooseControlList('星火', str, function () {
							var player = _status.event.player,
								target = _status.event.target;
							if (target.hasSkillTag('nofire')) return 2;
							if (get.attitude(player, target) < 0) {
								if (target.hp <= 1) return 1;
							}
							return 2;
						})
						.set('target', trigger.player)
						.forResult();
					if (index == 0) {
						trigger.player.addhyyzBuff('hyyzBuff_zhuoshao');
						game.playAudio('../extension/忽悠宇宙/audio/skill/xtxinghuo' + [1, 2].randomGet());
					} else {
						game.playAudio('../extension/忽悠宇宙/audio/skill/xtxinghuo3.mp3');
						player.addToExpansion(cards, 'gain2').gaintag.add('xtxinghuo');
						player.draw();
					}
					if (trigger.player == player) {
						player.recover();
						game.playAudio('../extension/忽悠宇宙/audio/skill/xtxinghuo4.mp3');
					}
				}
			},
		},
		xttianhuo: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			juexingji: true,
			trigger: {
				player: 'phaseZhunbeiBegin',
			},
			forced: true,
			filter(event, player) {
				return player.getExpansions('xtxinghuo').length >= 3;
			},
			derivation: 'xthonglian',
			content() {
				player.awakenSkill('xttianhuo');
				player.loseMaxHp();
				player.addSkill('xthonglian');
			},
		},
		xthonglian: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			enable: 'phaseUse',
			filter(card, player) {
				return (
					player.getExpansions('xtxinghuo').length &&
					game.countPlayer(function (current) {
						return current.countCards('h') > 0 && !current.hasSkill('xthonglian_no');
					}) > 0
				);
			},
			filterTarget(card, player, target) {
				return target.countCards('h') && !target.hasSkill('xthonglian_no');
			},
			async content(event, trigger, player) {
				event.targets[0].addTempSkill('xthonglian_no');
				const { cards } = await player.choosePlayerCard(event.targets[0], true, 'h').forResult();
				if (cards) {
					let suit = cards[0].suit;
					event.targets[0].showCards(cards[0]);
					let lose = [];
					for (var i of player.getExpansions('xtxinghuo')) {
						if (i.suit == suit) {
							lose.push(i);
						}
					}
					if (lose.length) {
						const { bool } = await player
							.chooseBool(`是否弃置${get.translation(suit)}<星火>牌对${get.translation(event.targets[0])}造成1点火焰伤害？`)
							.set('ai', () => true)
							.forResult();
						if (bool) {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xthonglian2.mp3');
							player.loseToDiscardpile(event.lose);
							event.targets[0].damage('fire', player);
						} else {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xthonglian3.mp3');
						}
					}
				}
			},
			ai: {
				combo: 'xtxinghuo',
				order: 8,
				result: {
					target(player, target) {
						if (target.hasSkillTag('nofire')) return 0;
						return get.damageEffect(target, player, target, 'fire') - (target.countCards('e') > 1 ? 1.5 : 0);
					},
				},
				tag: {
					damage: 1,
					fireDamage: 1,
					natureDamage: 1,
					norepeat: 1,
				},
			},
			subSkill: {
				no: {},
			},
		},
		//刃
		xtzhuchou: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				player: 'phaseZhunbeiBegin',
			},
			forced: true,
			filter(event, player) {
				return game.countPlayer(function (current) {
					return current != player && !current.hasSkill('xtchouchou');
				});
			},
			async content(event, trigger, player) {
				const { targets } = await player
					.chooseTarget('令一名角色与你获得<仇雠>', true, function (card, player, target) {
						return target != player;
					})
					.set('ai', (target) => -get.attitude(player, target))
					.forResult();
				if (targets) {
					game.countPlayer((current) => current.removeSkill('xtchouchou'));
					targets[0].addSkill('xtchouchou');
					player.addSkill('xtchouchou');
					player
						.when('die')
						.assign({
							forceDie: true,
						})
						.then(() => {
							game.countPlayer((current) => current.removeSkill('xtchouchou'));
						});
					targets[0]
						.when('die')
						.assign({
							forceDie: true,
						})
						.then(() => {
							game.countPlayer((current) => current.removeSkill('xtchouchou'));
						});
				}
			},
			derivation: ['xtchouchou'],
		},
		xtchouchou: {
			mark: true,
			marktext: '仇',
			intro: {
				content(storage, player) {
					var targets = game.filterPlayer(function (current) {
						return current.hasSkill('xtchouchou') && current.hp > player.hp;
					});
					if (!targets.length) return '无影响';
					return `红色基本牌视为只能对${get.translation(targets)}使用的【决斗】`;
				},
			},
			mod: {
				playerEnabled(card, player, target) {
					if (!card.cards || !card.cards.length) return;
					if (!target.hasSkill('xtchouchou')) {
						if (card.cards.some((card) => lib.card[card.name].type == 'basic' && get.color(card) == 'red')) return false;
					}
				},
				cardname(card, player) {
					if (get.type(card.name, 'trick') == 'basic' && get.color(card) == 'red') {
						if (game.hasPlayer((current) => current.hasSkill('xtchouchou') && current.hp > player.hp)) {
							return 'juedou';
						}
					}
				},
			},
			ai: {
				combo: 'xtzhuchou',
				effect: {
					player(card, player, target) {
						if (target && get.tag(card, 'damage') && target.hasSkill('xtchouchou')) {
							if (player.hasSkillTag('jueqing', false, target)) return;
							return [1, 2];
						}
					},
				},
			},
		},
		xthuiduo: {
			audio: 'ext:忽悠宇宙/audio/skill:5',
			trigger: {
				player: ['dyingBefore', 'changeHp'],
				global: 'gameDrawAfter',
			},
			forced: true,
			filter(event, player) {
				return event.name == 'dying' ? player.hp <= 0 : true;
			},
			content(event, player) {
				if (trigger.name == 'dying') {
					trigger.cancel();
					if (!player.hasSkill('xthuiduo_mark')) {
						game.log(player, '堕入<font color=#FF4500>魔阴身</font>');
						game.playAudio('../extension/忽悠宇宙/audio/skill/xthuiduo1.mp3');
						player.addTempSkill('xthuiduo_mark', { player: 'phaseEnd' });
						player.markSkill('xthuiduo_mark');
					} else player.say('还没结束!');
				} else if (trigger.name == 'changeHp') {
					if (player.hp > 0) player.unmarkSkill('xthuiduo_mark');
				} else {
					player.disableJudge();
				}
			},
			group: 'xthuiduo_recover',
			subSkill: {
				recover: {
					trigger: {
						source: 'damageEnd',
					},
					filter(event, player) {
						return player.hp < 1;
					},
					forced: true,
					content() {
						game.playAudio('../extension/忽悠宇宙/audio/skill/xthuiduo' + [3, 4, 5].randomGet());
						player.recover(trigger.num);
					},
				},
				mark: {
					marktext: '隳',
					intro: {
						markcount(storage, player) {
							return '' + player.hp;
						},
						content(storage, player) {
							return '你的体力值为' + get.translation(player.hp);
						},
					},
					forced: true,
					onremove(player) {
						if (player.hp < 1) {
							game.log(player, '<font color=#FF4500>泯灭人性</font>');
							player.die();
						} else {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xthuiduo2.mp3');
							game.log(player, '<font color=#FF4500>回复人性</font>');
						}
					},
				},
			},
			ai: {
				nokeep: true,
			},
		},
		xttushang: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				source: 'damageSource',
				player: 'damageEnd',
			},
			usable: 3,
			forced: true,
			firstDo: true,
			content() {
				player.draw(trigger.num).gaintag = ['xttushang'];
			},
			mod: {
				ignoredHandcard(card, player) {
					if (card.hasGaintag('xttushang')) {
						return true;
					}
				},
				cardDiscardable(card, player, name) {
					if (name == 'phaseDiscard' && card.hasGaintag('xttushang')) {
						return false;
					}
				},
			},
			ai: {
				maixie: true,
				maixie_hp: true,
				effect: {
					player(card, player, target) {
						if (get.tag(card, 'damage')) {
							if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
							return [1, 0.8];
						}
					},
					target(card, player, target) {
						if (get.tag(card, 'damage')) {
							if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
							if (!target.hasFriend()) return;
							return [1, 0.8];
						}
					},
				},
				threaten: 0.6,
			},
		},
		//华
		b3cunjin: {
			audio: 'ext:忽悠宇宙/audio/skill:3',
			trigger: {
				player: ['useCardAfter', 'loseAfter', 'gainAfter'],
			},
			forced: true,
			filter(event, player) {
				switch (event.name) {
					case 'useCard':
						return player.countCards('he') > 0;
					case 'lose':
						return event.type == 'discard';
					case 'gain':
						return player.countCards('hs') > 0;
				}
			},
			content() {
				switch (trigger.name) {
					case 'useCard': {
						player.chooseToDiscard('寸劲:弃置一张牌', 'he').set('ai', function (card) {
							return 8 - get.value(card);
						});
						break;
					}
					case 'lose': {
						player.draw();
						break;
					}
					case 'gain': {
						player.chooseToUse('寸劲:使用一张牌');
						break;
					}
				}
			},
			subSkill: {
				sha: {
					audio: 'ext:忽悠宇宙/audio/skill:8',
				},
			},
			ai: {
				threaten(player, target) {
					if (target.hp == 1) return 4;
					return 0.01;
				},
				effect: {
					target(card, player, target) {
						if (card.name == 'guohe') return [1, 2];
						if (get.type(card) == 'delay') return 0;
					},
				},
			},
		},
		b3shenyin: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			trigger: {
				player: 'useCardAfter',
			},
			filter(event, player) {
				var list = [];
				player.getHistory('useCard', function (evt) {
					var type = get.type2(evt.card);
					if (!list.includes(type)) list.push(type);
				});
				return list.length == player.maxHp;
			},
			forced: true,
			content() {
				player.gainMaxHp();
			},
			group: ['b3shenyin_recover'],
			subSkill: {
				recover: {
					audio: 'b3shenyin',
					trigger: {
						player: ['loseMaxHpEnd', 'gainMaxHpEnd'],
					},
					forced: true,
					filter(event, player) {
						return event.num > 0;
					},
					content() {
						//QQQ
						'step 0';
						event.count = Math.min(trigger.num, 9);
						event.count = 1;
						('step 1');
						event.count--;
						player.recover();
						if (event.count > 0) event.redo();
					},
				},
			},
		},
		b3fusheng: {
			audio: 'ext:忽悠宇宙/audio/skill:5',
			trigger: {
				player: 'phaseUseBefore',
			},
			forced: true,
			content() {
				player.say('此即,浮生之铭!');
				trigger.cancel();
			},
			group: 'b3fusheng_dying',
			subSkill: {
				dying: {
					trigger: {
						global: 'dying',
					},
					filter(event, player) {
						if (!event.source || !event.source.isIn() || event.source == event.player) return false;
						if (event.player != player && event.source != player) return false;
						return true;
					},
					forced: true,
					content() {
						game.trySkillAudio('b3fusheng', player);
						var num = player.maxHp - 1;
						player.loseMaxHp(num);
					},
				},
			},
			ai: {
				effect: {
					player(card, player, target) {
						if (get.tag(card, 'damage')) {
							if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
							if (!target.hasFriend()) return;
							if (target.hp == 1) return [1, -2];
						}
					},
				},
			},
		},
		//布洛妮娅
		xtceli: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			init: (player) => (player.storage.xtceli = []),
			trigger: {
				player: 'phaseEnd',
			},
			filter(event, player) {
				var list = ['judge', 'draw', 'useCard', 'discard'];
				for (var i of list) {
					if (!player.hasSkill('xtceli_' + i)) return true;
				}
			},
			forced: true,
			trans: {
				judge: '判定阶段',
				draw: '摸牌阶段',
				useCard: '出牌阶段',
				discard: '弃牌阶段',
			},
			async content(event, trigger, player) {
				const list = ['judge', 'draw', 'useCard', 'discard'].filter((a) => !player.storage.xtceli.includes(a));
				let str0 = '';
				list.map((a) => {
					str0 += `<${lib.skill.xtceli.trans[a]}>`;
				});
				let str = `令一名其他角色[净化]并摸${get.cnNumber(list.length)}张牌,依次执行${str0}`;
				//${player.hasSkill('xtsiwei') ? ',且令<思危>直到下一回合失效' : ''}
				const { targets } = await player
					.chooseTarget(str, lib.filter.notMe)
					.set('ai', function (target) {
						let player = _status.event.player,
							att = get.attitude(player, target);
						let arr = _status.event.list;
						let val = 0;
						if (target.canhyyzJinghua()) val += 2;
						if (arr.includes('draw')) val += 2;
						if (arr.includes('useCard') && target.countCards('hs', { name: 'sha' })) val += 2;
						if (arr.includes('discard') && target.needsToDiscard()) val -= target.needsToDiscard();
						return val * att;
					})
					.set('list', list)
					.forResult();
				if (targets) {
					let target = targets[0];
					target.hyyzJinghua();
					target.draw(list.length);
					player.line(target, 'water');
					game.log('#g【策励】', target, '将执行额外的', str0);
					if (list.includes('judge')) {
						var next = target.phaseJudge();
						event.next.remove(next);
						trigger.next.push(next);
					}
					if (list.includes('draw')) {
						var next = target.phaseDraw();
						event.next.remove(next);
						trigger.next.push(next);
					}
					if (list.includes('useCard')) {
						var next = target.phaseUse();
						event.next.remove(next);
						trigger.next.push(next);
					}
					if (list.includes('discard')) {
						var next = target.phaseDiscard();
						event.next.remove(next);
						trigger.next.push(next);
					}
				}
				player.storage.xtceli = [];
			},
			group: 'xtceli_add',
			subSkill: {
				add: {
					trigger: {
						player: ['judge', 'drawBegin', 'useCard', 'discard'],
					},
					forced: true,
					charlotte: true,
					content() {
						player.storage.xtceli.push(trigger.name);
					},
				},
			},
		},
		xtsiwei: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			trigger: {
				player: 'damageCancelled',
			},
			forced: true,
			filter(event, player) {
				return (
					game.countPlayer(function (current) {
						return current != player && current.countCards('h') < player.countCards('h');
					}) > 0
				);
			},
			async content(event, trigger, player) {
				const { targets, cards } = await player
					.chooseCardTarget({
						prompt: '请选择【思危】的牌和目标',
						prompt2: '将一张牌交给一名其他角色',
						position: 'he',
						filterCard: true,
						forced: true,
						filterTarget(card, player, target) {
							return target.countCards('h') < player.countCards('h');
						},
						ai1(card) {
							if (
								get.tag(card, 'recover') &&
								!game.hasPlayer(function (current) {
									return get.attitude(current, player) > 0 && !current.hasSkillTag('nogain');
								})
							)
								return 0;
							return 1 / Math.max(0.1, get.value(card));
						},
						ai2(target) {
							var player = _status.event.player,
								att = get.attitude(player, target);
							if (target.hasSkillTag('nogain')) att /= 9;
							return 4 + att;
						},
					})
					.forResult();
				if (targets && cards) {
					player.line(targets[0], 'green');
					player.give(cards, targets[0]);
				}
			},
			ai: {
				maixie_defend: true,
				effect: {
					target(card, player, target) {
						if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
							if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
							if (get.attitude(target, player) < 0) return [1, 1];
						}
					},
				},
			},
		},
		xtsiwei2: {
			init(player) {
				game.log(player, '的', '#g【思危】', '失效');
				player.awakenSkill('xtsiwei');
			},
			onremove(player) {
				game.log(player, '的', '#g【思危】', '回复');
				player.restoreSkill('xtsiwei');
			},
			forced: true,
			charlotte: true,
			mark: true,
			marktext: '思',
			intro: {
				content: '思危失效',
			},
		},
		xtchuxin: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			trigger: {
				player: 'damageBegin4',
			},
			forced: true,
			content() {
				if (player.hasHistory('lose', (evt) => evt.cards2 && evt.cards2.length)) {
					game.log('#g【初心】', player, '尝试找回初心');
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtchuxin' + [3, 4].randomGet());
					var cards = [];
					player.hasHistory('lose', function (evt) {
						if (evt.cards2 && evt.cards2.length) {
							for (var i of evt.cards2) {
								var card = get.cardPile(function (card) {
									if (cards.includes(card)) return false;
									return get.type(card, 'trick') == get.type(i, 'trick');
								});
								if (card) cards.push(card);
							}
						}
					});
					if (cards.length) player.gain(cards, 'gain2');
				} else {
					game.log('#g【初心】', player, '初心未失,防止此伤害');
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtchuxin' + [1, 2].randomGet());
					trigger.cancel();
				}
			},
			ai: {
				effect: {
					target(card, player, target) {
						if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
						if (get.tag(card, 'damage')) {
							var num = 0;
							target.hasHistory('lose', function (evt) {
								if (evt.cards2 && evt.cards2.length) {
									num += evt.cards2.length;
								}
							});
							if (num <= 0) {
								if (!target.hasFriend() && target != player) return;
								return 'zerotarget';
							} else {
								var att = 1;
								if (get.attitude(player, target) > 0) {
									att = player.needsToDiscard() ? 0.7 : 0.5;
								}
								if (target.hp >= 4) return [1, att * num];
								if (target.hp == 3) return [1, att * num * 0.75];
								if (target.hp == 2) return [1, att * 0.25];
							}
						}
					},
				},
			},
		},
		//素裳
		xtmengdong: {
			audio: 'ext:忽悠宇宙/audio/skill:3',
			trigger: {
				player: 'phaseDrawEnd',
			},
			forced: true,
			content() { },
			mod: {
				cardname(card, player, target) {
					if (get.type(card.name, 'trick') == 'trick') return 'sha';
				},
				targetInRange(card) {
					if (!card.cards || card.name != 'sha') return;
					for (var i of card.cards) {
						if (get.type(i.name, 'trick') == 'trick') return true;
					}
				},
			},
		},
		xtruoming: {
			audio: 'ext:忽悠宇宙/audio/skill:3',
			trigger: {
				player: 'useCardBefore',
			},
			filter(event, player) {
				return event.card && event.card.name == 'sha' && event.parent.name != 'xthuangwu';
			},
			forced: true,
			async content(event, trigger, player) {
				const card = get.cards()[0];
				game.cardsGotoOrdering(card);
				let goon = true,
					type = get.type2(card);
				if (trigger.targets && trigger.targets.length) {
					let att = get.attitude(player, trigger.targets[0]);
					if (type == 'trick' || card.name == 'sha') {
						if (player.canUse(card, trigger.targets[0], false)) {
							goon = att * get.effect(player, card, trigger.targets[0], player) > 0;
						}
					} else {
						if (player.canUse(card, player, false)) {
							goon = get.effect(player, card, player, player) >= 0;
						}
					}
				}
				const { bool } = await player
					.chooseBool()
					.set('prompt', `若明:是否将${get.translation(card)}加入${get.translation(trigger.card)}的实体牌？`)
					.set('ai', () => goon)
					.forResult();
				if (bool) {
					trigger.cards.push(card);
				} else {
					ui.cardPile.insertBefore(card.fix(), ui.cardPile.firstChild);
				}
				const { cards } = await player
					.chooseCard(function (card) {
						let trigger = _status.event.getTrigger();
						return !trigger.cards.includes(card);
					})
					.set('prompt', `若明:是否将一张手牌加入${get.translation(trigger.card)}的实体牌？`)
					.set('ai', (card) => {
						let trigger = _status.event.getTrigger();
						return get.effect(trigger.targets[0], card, trigger.player, trigger.player);
					})
					.forResult();
				if (cards) {
					game.cardsGotoOrdering(cards[0]);
					trigger.cards.push(cards[0]);
				}
				if (bool && cards) {
					game.log(trigger.card, '的实体牌改为', trigger.cards);
				}
			},
		},
		xthuangwu: {
			audio: 'ext:忽悠宇宙/audio/skill:3',
			trigger: {
				player: 'useCardAfter',
			},
			filter(event, player) {
				if (event.card.name != 'sha' || get.itemtype(event.cards) != 'cards') return false;
				if (!event.cards.length) return false;
				return event.card && event.card.name == 'sha' && event.parent.name != 'xthuangwu';
			},
			forced: true,
			async content(event, trigger, player) {
				let cards = trigger.cards;
				const targets = trigger.targets;
				await player.showCards(get.translation(player) + '发动了【恍悟】', cards);
				do {
					let card = cards.shift();
					for (let target of targets) {
						if (target.isIn() && player.canUse(card, target, false)) {
							await player.useCard(card, target, false);
						} else if (player.canUse(card, player, false)) {
							await player.useCard(card, player, false);
						} else {
							await player.gain(card, 'gain2');
						}
					}
				} while (cards.length);
			},
		},
		//丹恒·饮月
		xtnilin: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			init(player) {
				player.storage.xtnilin = [[], []];
			},
			enable: ['chooseToUse', 'chooseToRespond'],
			filter(event, player) {
				return event.filterCard({ name: 'sha' }, player, event);
			},
			chooseButton: {
				dialog(event, player) {
					var list = [];
					if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
						list.push(['基本', '', 'sha']);
						for (var nature of lib.inpile_nature) {
							if (event.filterCard && event.filterCard({ name: 'sha', nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
						}
					}
					if (player.countCards('h') > 0) var list1 = player.getCards('h');
					else var list1 = '你没有手牌';
					var list2 = get.cards(3);
					for (var i = 2; i >= 0; i--) {
						ui.cardPile.insertBefore(list2[i], ui.cardPile.firstChild);
					}
					return ui.create.dialog('逆鳞', [list, 'vcard'], '你的手牌', list1, '牌堆顶的牌', list2, 'hidden');
				},
				check(button) {
					let player = _status.event.player;
					let card = button.link;
					if (get.itemtype(card) == 'card') {
						return 10 - (_status.event.currentPhase == player ? player.getUseValue(card) : get.value(card)) / (card.name == 'sha' ? 10 : 1);
					} else {
						if (card[3] == 'hyyz_quantum') return 2.97 + player.getUseValue({ name: card[2], nature: [3] });
						else if (card[3] == 'fire') return 2.95 + player.getUseValue({ name: card[2], nature: [3] });
						else if (card[3] == 'hyyz_wind') return 2.93 + player.getUseValue({ name: card[2], nature: [3] });
						else if (card[3] == 'thunder') return 2.91 + player.getUseValue({ name: card[2], nature: [3] });
						else return 2.9 + player.getUseValue({ name: card[2], nature: [3] });
					}
				},
				select: 4,
				filter(button, player) {
					if (ui.selected.buttons.length) {
						if (ui.selected.buttons.some((i) => get.position(i.link) == undefined)) return get.position(button.link);
						if (ui.selected.buttons.length == 3) return !get.position(button.link);
					}
					return true;
				},
				backup(links, player) {
					let cards = [],
						views = [];
					cards = links.filter((i) => get.position(i));
					views = links.filter((i) => !get.position(i));
					return {
						filterCard(card) {
							return false;
						},
						selectCard: -1,
						cards: cards,
						viewAs: {
							name: views[0][2],
							nature: views[0][3],
						},
						precontent() {
							event.result.cards = lib.skill[event.result.skill].cards;
						},
						onuse(result, player) {
							let cards0 = lib.skill[result.skill].cards;
							let num = cards0.filter((link) => player.getCards('h').includes(link)).length;
							var cards = [];
							while (cards.length < num) {
								var card = get.cardPile(function (card) {
									return !cards0.includes(card) && !cards.includes(card);
								});
								if (card) cards.push(card);
							}
							if (cards.length) {
								game.log(player, `摸了${get.cnNumber(num)}张牌`);
								player.gain(cards, 'draw');
							}
							//player.awakenSkill('xtnilin');
							//player.when('phaseAfter').then(() => {
							//    player.restoreSkill('xtnilin');
							//})
						},
						onrespond(result, player) {
							player.draw(lib.skill[result.skill].cards.length);
						},
					};
				},
				prompt(links, player) {
					let views = links.filter((i) => !get.position(i));
					return '选择【' + get.translation(views[0][3] || '') + get.translation(views[0][2]) + '】的目标';
				},
			},
			hiddenCard(player, name) {
				return name == 'sha';
			},
			mod: {
				targetInRange(card) {
					if (_status.event.skill == 'xtnilin_backup') return true;
				},
				selectTarget(card, player, range) {
					if (Array.isArray(range) && range[1] == -1) return;
					let evt = _status.event;
					if (evt.skill == 'xtnilin_backup') {
						if (evt._result && evt._result.links && evt._result.links.length) {
							let cards = evt._result.links.filter((link) => get.itemtype(link) == 'card' && player.getCards('h').includes(link));
							let num = cards.length;
							if (typeof num == 'number' && num > range[1]) range[1] = num;
						}
					}
				},
			},
			ai: {
				effect: {
					target(card, player, target, effect) {
						if (get.tag(card, 'respondSha')) return 0.7;
					},
				},
				order: 11,
				respondSha: true,
				result: {
					player(player) {
						return 1;
					},
				},
			},
		},
		xtpanna: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				player: 'useCard1',
			},
			filter(event, player) {
				return;
				if (!event.cards.length) return true;
				if (event.card.name != 'sha' || event.skill != 'xtnilin_backup') return false;
				player.hasHistory('lose', (evt) => {
					if (evt.parent == event) {
						if (!evt.hs.length) return false;
					}
				});
				var info = get.info(event.card, false);
				if (info.allowMultiple == false) return false;
				if (event.targets && !info.multitarget) {
					if (
						game.hasPlayer(function (current) {
							return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
						})
					) {
						return true;
					}
				}
				return false;
			},
			forced: true,
			async content(event, trigger, player) {
				let num0;
				player.hasHistory('lose', (evt) => {
					if (evt.parent == trigger && evt.hs.length) {
						num0 = evt.hs.length;
					}
				});
				if (!num0) return;
				var num = Math.min(
					game.countPlayer(function (current) {
						return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current);
					}),
					num0 - 1
				);
				if (num > 0) {
					var str = `盘拏:是否为${get.translation(trigger.card)}增加至多${get.cnNumber(num)}目标？`;
					const { targets } = await player
						.chooseTarget(str, [1, num], function (card, player, target) {
							var trigger = _status.event.getTrigger(),
								player = _status.event.player;
							return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
						})
						.set('ai', function (target) {
							var trigger = _status.event.getTrigger(),
								player = _status.event.player;
							return get.effect(target, trigger.card, player, player);
						})
						.forResult();
					if (targets) {
						trigger.targets.addArray(targets);
					}
				}
			},
			mod: {
				targetInRange(card) {
					if (_status.event.skill == 'xtnilin_backup') return true;
				},
			},
			ai: {
				combo: 'xtnilin',
			},
		},
		xtwangtu: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				target: 'useCardToTargeted',
			},
			forced: true,
			content() {
				if (!player.hasSkill('xtwangtu_buff')) player.addTempSkill('xtwangtu_buff', 'roundStart');
				player.storage.xtwangtu_buff++;
			},
			subSkill: {
				buff: {
					init(player, skill) {
						player.storage.xtwangtu_buff = 0;
					},
					mark: true,
					intro: {
						markcount(storage, player) {
							return '+' + storage;
						},
						content(storage) {
							return '其他角色计算与你的距离+' + storage;
						},
					},
					mod: {
						globalTo(from, to, distance) {
							if (typeof to.storage.xtwangtu_buff == 'number') {
								return distance + to.storage.xtwangtu_buff;
							}
						},
					},
				},
			},
		},
		//凯文
		b3qishuang: {
			audio: 'ext:忽悠宇宙/audio/skill:3',
			trigger: {
				source: 'damageBegin2',
			},
			forced: true,
			filter: (event, player) => !event.nature,
			content() {
				var nat = 'ice';
				var cards = player.getCards('e');
				if (cards.length) {
					for (var i of cards) {
						if (i.name.includes('tianhuo')) nat = 'fire';
					}
				}
				trigger.nature = nat;
			},
		},
		b3shenghen: {
			audio: 'ext:忽悠宇宙/audio/skill:5',
			enable: 'phaseUse',
			usable: 1,
			filterTarget(card, player, target) {
				if (target == player) return false;
				if (ui.selected.targets.length) {
					for (var i of ui.selected.targets) {
						if (i.hp == target.hp) return false;
					}
				}
				return true;
			},
			selectTarget: [1, Infinity],
			complexTarget: true,
			multiline: true,
			async content(event, trigger, player) {
				const { cards } = await event.target
					.chooseToUse(
						function (card, player, event) {
							if (get.type(card) == 'equip') return false;
							return lib.filter.cardEnabled.apply(this, arguments);
						},
						'是否使用一张非装备牌？',
						'若你使用,则凯文获得之;</br>否则翻面或被杀'
					)
					.forResult();
				if (cards) {
					player.gain(cards, 'gain2');
				} else {
					const { control } = await event.target
						.chooseControl('翻面', '被杀')
						.set('ai', function () {
							let target = _status.event.player;
							if (target.isTurnedOver()) return '翻面';
							if (target.hp > 1) return '被杀';
							return '翻面';
						})
						.forResult();
					if (control == '被杀') {
						player.recover();
						player.useCard({ name: 'sha' }, event.target, false);
					} else {
						event.target.turnOver();
					}
				}
			},
			ai: {
				order: 4,
				expose: 0.2,
				result: {
					target(player, target) {
						let att = get.attitude(player, target);
						let value = 0;
						if (att > 0) {
							if (target.countCards('h') >= 5) value += 2;
							if (target.isTurnedOver()) value += 5;
						} else {
							value -= 2;
							if (!target.countCards('h', { name: 'sha' })) value -= 2;
						}
						return value;
					},
				},
			},
		},
		b3jiushi: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			keepSkill: true,
			juexingji: true,
			derivation: ['b3yemo'],
			trigger: {
				global: 'dieAfter',
			},
			filter(event, player) {
				//if (!player.hasZhuSkill('b3jiushi')) return false;
				return game.dead && game.dead.length >= game.filterPlayer().length;
			},
			forced: true,
			content() {
				'step 0';
				player.awakenSkill(event.name);
				player.storage[event.name] = true;
				player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/b3_kaiwen_yemo.jpg');
				game.broadcastAll() + ui.background.setBackgroundImage('extension/忽悠宇宙/image/background/b3_kaiwen_moon.jpg');
				game.log(player, '#g切换为月球战场');
				game.saveConfig('hyyz_backgroundmusic', 'b3_kaiwen_yemo');
				game.hyyzBgm();
				('step 1');
				var num = 0;
				game.countPlayer(function (current) {
					if (current != player) {
						num += current.maxHp;
					}
				});
				player.gainMaxHp(num);
				player.group = 'shen';
				('step 2');
				var card = get.cardPile(function (card) {
					return card.name.search('tianhuo') != -1;
				}, 'field');
				if (!card) {
					var players = game.filterPlayer();
					for (var i of players) {
						if (i != player) {
							var card = i.getCards('hej', (card) => card.name.search('tianhuo') != -1)[0];
						}
						if (card) break;
					}
				}
				if (card) {
					//player.gain(card, 'gain2', 'log');
					player.equip(card);
				} else game.log('【天火圣裁】不在游戏中');
				player.say('此即,救世之铭!');
				player.addSkill('b3yemo');
				game.log(player, '获得了技能', '#g【业魔】');
			},
		},
		b3yemo: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			trigger: {
				player: ['loseHpBefore', 'damageBegin4'],
				source: 'damageBegin3',
			},
			forced: true,
			filter(event, player) {
				if (event.name == 'damage' && event.source && event.source == player) return player.getHistory('sourceDamage').length;
				else return true;
			},
			content() {
				'step 0';
				if (trigger.name == 'damage' && trigger.source && trigger.source == player) {
					var num = player.getHistory('sourceDamage').length;
					trigger.num += num;
				} else {
					var num = trigger.num;
					trigger.cancel();
				}
				player.loseMaxHp(num);
			},
			group: 'b3yemo_equip',
			subSkill: {
				equip: {
					trigger: {
						player: 'phaseZhunbeiBegin',
					},
					filter(event, player) {
						if (player.getEquip(1) && player.getEquip(1).name.search('tianhuo') != -1) return false;
						var card = get.cardPile(function (card) {
							return card.name.search('tianhuo') != -1;
						}, 'field');
						if (card) return true;
						var players = game.filterPlayer();
						for (var i of players) {
							if (
								i != player &&
								i.getCards('hej', function (card) {
									return card.name.search('tianhuo') != -1;
								})
							)
								return true;
						}
					},
					forced: true,
					charlotte: true,
					content() {
						var card = get.cardPile(function (card) {
							return card.name.search('tianhuo') != -1;
						}, 'field');
						if (!card) {
							var players = game.filterPlayer();
							for (var i of players) {
								if (i != player) {
									var card = i.getCards('hej', function (card) {
										return card.name.search('tianhuo') != -1;
									})[0];
								}
								if (card) break;
							}
						}
						if (card) {
							//player.gain(card, 'gain2', 'log');
							player.equip(card);
						} else game.log('【天火圣裁】不在游戏中');
					},
				},
			},
			mod: {
				aiValue(player, card, num) {
					if (get.type(card) == 'b3_tianhuo') return 100;
				},
			},
		},
		//开拓者
		xtkaituo: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			mod: {
				targetInRange(card) {
					if (card) return true;
				},
			},
			trigger: {
				global: ['phaseBefore', 'dieAfter'],
				player: 'enterGame',
			},
			forced: true,
			filter(event, player) {
				return event.name != 'phase' || game.phaseNumber == 0 || event.name == 'die';
			},
			content() {
				player.chooseMingtu(true);
			},
			derivation: ['xtkaituo_faq', 'xthuimie', 'xtsheming', 'xtcunhu', 'xtzhongwang'],
		},
		xtsheming: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			cardSuit(list) {
				if (!list) return [];
				var suits = [];
				if (list.length < 1) return [];
				for (var i of list) {
					var suit = i.suit;
					if (suit && !suits.includes(suit)) {
						suits.push(suit);
					}
				}
				return suits;
			},
			enable: 'phaseUse',
			usable: 1,
			filterTarget: lib.filter.notMe,
			async content(event, trigger, player) {
				let cardx = [];
				const { cards: cards1 } = await event.target
					.chooseToDiscard(2, 'he', `弃置两张牌,否则受到${get.translation(player)}造成的1点伤害`, '提示:尽可能选择花色相同的两张牌')
					.set('ai', function (card) {
						var target = _status.event.player;
						if (target.hp > 3 || ['jiu', 'tao'].includes(card.name)) return -1;
						if (target.hp < 2 && target.countCards('he') >= 2) return 100;
						var value = get.value(card);
						if (ui.selected.cards.length) {
							if (ui.selected.cards[0].suit == card.suit) value /= 2;
						}
						return 10 - value;
					})
					.forResult();
				if (cards1) {
					cardx.addArray(cards1);
				} else {
					if (event.target.isIn()) {
						event.target.damage(player);
						player.line(event.target);
					} else return;
				}
				const { cards: cards2 } = await player
					.chooseToDiscard(2, 'he', `弃置两张牌,否则受到${get.translation(event.target)}造成的1点伤害`, '你们弃置的牌花色不同,可以摸两张牌')
					.set('cardsx', cardx)
					.set('ai', function (card) {
						var player = _status.event.player;
						if (player.hp > 2 || ['jiu', 'tao'].includes(card.name)) return -1;
						var cardsx = _status.event.cardsx.slice();
						var suits = lib.skill.xtsheming.cardSuit(cardsx),
							suits_no = lib.suit.slice();
						suits_no.removeArray(suits);
						if (cardsx.length) {
							if (suits.length < 2) return 10 - get.value(card);
							if (!player.countCards('he', { suit: suits_no[0] }) || !player.countCards('he', { suit: suits_no[1] })) return 10 - get.value(card); //你没合适的牌
							if (ui.selected.cards.length) {
								if (!cardsx.includes(ui.selected.cards[0])) cardsx.push(ui.selected.cards[0]);
								suits = lib.skill.xtsheming.cardSuit(cardsx);
							}
							return !suits.includes(card.suit);
						} else {
							if (ui.selected.cards.length) return ui.selected.cards[0].suit != card.suit;
							return true;
						}
					})
					.forResult();
				if (cards2) {
					cardx.addArray(cards2);
				} else {
					if (event.target.isAlive()) {
						player.damage(event.target);
						event.target.line(player);
					}
				}
				game.playAudio('../extension/忽悠宇宙/audio/skill/xtkaituo_cunhu' + [2, 3, 4].randomGet());
				let suits = lib.skill.xtsheming.cardSuit(cardx);
				if (suits.length == 0) {
					game.log(player, '和', event.target, '均未弃置牌');
				} else {
					if (suits.length == cardx.length) player.draw(2);
					if (cardx.length == 4) {
						delete player.getStat().skill.xtsheming;
					}
				}
			},
			ai: {
				order: 8,
				expose: 0.3,
				result: {
					target(player, target) {
						if (target.hasSkillTag('noh')) return 0;
						if (target.countCards('he') < 2 || target.hp < 2) return -5;
						return -2;
					},
					player(player, target) {
						return player.hp + player.countCards('h') - 5;
					},
				},
				threaten: 1.1,
			},
		},
		xthuimie: {
			audio: 'ext:忽悠宇宙/audio/skill:3',
			init: (player) => player.say('毁灭之志!'),
			trigger: {
				player: 'damageBegin4',
			},
			filter(event, player) {
				return event.num % player.hp == 0;
			},
			forced: true,
			usable: 1,
			content() {
				trigger.num--;
			},
		},
		xtxinsheng: {
			mark: true,
			intro: {
				content: 'limited',
			},
			limited: true,
			init(player) {
				player.storage.xtxinsheng = false;
			},
			enable: 'chooseToUse',
			filter(event, player) {
				if (player.storage.xtxinsheng) return false;
				if (event.type == 'wuxie') return false;
				for (var i of lib.inpile) {
					if (get.type(i) == 'basic') {
						return event.filterCard({ name: i }, event.player, event);
					}
				}
				return false;
			},
			chooseButton: {
				dialog(event, player) {
					var list = [];
					for (var i = 0; i < lib.inpile.length; i++) {
						var name = lib.inpile[i];
						if (name == 'sha') {
							if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
							for (var j of lib.inpile_nature) {
								if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
							}
						} else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
					}
					var dialog = ui.create.dialog('新生', [list, 'vcard'], 'hidden');
					dialog.direct = true;
					return dialog;
				},
				check(button) {
					//ai选按钮的限制条件
					if (_status.event.parent.type != 'phase') return 1;
					var player = _status.event.player;
					if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
					if (button.link[2] != 'tao' || player.hp > 0) return 0;
					return player.getUseValue({
						name: button.link[2],
						nature: button.link[3],
					});
				},
				backup(links, player) {
					return {
						filterCard: () => false,
						selectCard: -1,
						viewAs: {
							name: links[0][2],
						},
						popname: true,
						precontent() {
							var num = game.countPlayer((current) => current.isDamaged());
							if (num > 0) player.changeHujia(num);
						},
						onuse() {
							player.awakenSkill('xtxinsheng');
							player.storage.xtxinsheng = true;
						},
					};
				},
				prompt(links, player) {
					return `新生:视为使用一张【${get.translation(links[0][2])}】`;
				},
			},
			ai: {
				order: 0.5,
				skillTagFilter(player, tag, target) {
					if (player.storage.xtxinsheng) return false;
				},
				save: true,
				result: {
					player(player) {
						if (player.hp <= 0) return 10;
						if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
						return 0;
					},
				},
				threaten(player, target) {
					if (!target.storage.xtxinsheng) return 0.6;
				},
			},
		},
		xtcunhu: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			init: (player) => player.say('存护之志!'),
			trigger: {
				player: ['phaseJieshuEnd'],
			},
			forced: true,
			async content(event, trigger, player) {
				const { targets } = await player
					.chooseTarget(get.prompt('xtcunhu'), '将装备区内的所有牌移动给一名其他角色', function (card, player, target) {
						return target != player;
					})
					.set('ai', function (target) {
						var player = _status.event.player;
						if (get.attitude(player, target) > 0) {
							return 10 + target.countCards('e') + player.countCards('e') - target.hp - target.hujia;
						} else {
							return -1;
						}
					})
					.forResult();
				if (targets) {
					if (player.getCards('e').length) {
						let cards = player.getCards('e');
						do {
							let card = cards.shift(),
								type = get.subtype(card);
							if (targets[0].isEmpty(type)) {
								targets[0].equip(card);
								player.$give(card, targets[0]);
								player.line(targets[0], 'green');
							}
						} while (cards.length);
						game.log('#g【存护】', player, '移动了自己区域内的装备牌');
					}
					if (!targets[0].hujia) targets[0].changeHujia();
					if (!player.hujia) player.changeHujia();
					player.draw(targets[0].countCards('e'));
					targets[0].draw(player.countCards('e'));
				}
			},
		},
		xtzhongwang: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			mark: true,
			intro: {
				content: 'limited',
			},
			limited: true,
			init(player) {
				player.storage.xtzhongwang = false;
			},
			enable: 'phaseUse',
			filter(event, player) {
				return game.hasPlayer((current) =>
					current.countCards('e', function (card) {
						return player.hasEmptySlot(get.subtype(card));
					})
				);
			},
			async content(event, trigger, player) {
				player.awakenSkill('xtzhongwang');
				player.storage.xtzhongwang = true;
				let count = 0;
				while (count < 5) {
					count++;
					if (player.hasEmptySlot(count)) {
						let targets = game.filterPlayer((current) => current.getEquip(count));
						let target = targets.randomGet();
						if (target) {
							let card = target.getEquip(count);
							target.line(player, 'green');
							player.equip(card);
							target.$give(card, player, 'giveAuto');
						}
					}
				}
				const { targets } = await player
					.chooseTarget('对一名其他角色造成1点火焰伤害', function (card, player, target) {
						return target != player;
					})
					.set('ai', function (target) {
						let player = _status.event.player;
						return get.damageEffect(target, player, player, 'fire');
					})
					.forResult();
				if (targets) {
					player.line(targets, 'fire');
					targets[0].damage('fire');
				}
			},
			mod: {
				globalTo(from, to, distance) {
					if (from.hasSkill('xtzhuangwang_add')) return distance - 1;
				},
			},
			ai: {
				order: 10,
				result: {
					player(card, player, target) {
						if (game.roundNumber > 1) return 2;
					},
				},
			},
		},
		//镜流
		xtfeiguang: {
			init(player) {
				player.storage.xtfeiguang = false;
			},
			mark: true,
			marktext: '☯',
			zhuanhuanji: true,
			intro: {
				content(storage, player, skill) {
					var str = '';
					if (player.hasSkill('xtzhuanpo') && player.storage.xtzhuanpo) {
						if (player.storage.xtfeiguang == false) str += '阳:每回合限一次,你可以视为使用或打出一张不计入次数冰【杀】';
						else str += '阴:你受到伤害后获得四张基本牌';
					} else {
						if (player.storage.xtfeiguang == false) str += '阳:每回合限一次,你可以将一张牌当不计入次数的冰【杀】使用或打出';
						else str += '阴:你受到伤害后须弃置所有黑色手牌,获得四张与弃置牌颜色不同的基本牌';
					}
					return str;
				},
			},
			group: ['xtfeiguang_use', 'xtfeiguang_dam'],
			subSkill: {
				use: {
					enable: ['chooseToRespond', 'chooseToUse'],
					usable: 1,
					filter(event, player) {
						return player.countCards('he') > 0 && player.storage.xtfeiguang == false;
					},
					position: 'hes',
					prompt(event, player) {
						var player = _status.event.player;
						if (!player.hasSkill('xtzhuanpo') || !player.storage.xtzhuanpo) {
							return '将一张牌当不计入次数的冰【杀】使用或打出';
						} else {
							return '视为使用或打出一张不计入次数的冰【杀】';
						}
					},
					filterCard(card, player, event) {
						return !player.hasSkill('xtzhuanpo') || !player.storage.xtzhuanpo;
					},
					selectCard(card) {
						var player = _status.event.player;
						if (!player.hasSkill('xtzhuanpo') || !player.storage.xtzhuanpo) {
							return 1;
						} else {
							return -1;
						}
					},
					viewAs: {
						name: 'sha',
						nature: 'ice',
						storage: {
							xtfeiguang: true,
						},
					},
					check(card) {
						return 8 - get.value(card);
					},
					precontent() {
						event.parent.addCount = false;
					},
					onuse(links, player) {
						'step 0';
						player.changeZhuanhuanji('xtfeiguang');
						('step 1');
						if (player.hasSkill('xtzhuanpo') && player.storage.xtzhuanpo) {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xtfeiguang' + [3, 4].randomGet());
							player.changeZhuanhuanji('xtzhuanpo');
						} else {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xtfeiguang' + [1, 2].randomGet());
						}
					},
					onrespond(links, player) {
						'step 0';
						player.changeZhuanhuanji('xtfeiguang');
						('step 1');
						if (player.hasSkill('xtzhuanpo') && player.storage.xtzhuanpo) {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xtfeiguang' + [3, 4].randomGet());
							player.changeZhuanhuanji('xtzhuanpo');
						} else {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xtfeiguang' + [1, 2].randomGet());
						}
					},
				},
				dam: {
					trigger: {
						player: 'damageEnd',
					},
					filter(event, player) {
						if (player.storage.xtfeiguang == false) return false;
						return true; //player.countCards('h') > 0;
					},
					forced: true,
					check(event, player) {
						if (player.hasSkill('xtzhuanpo') && player.storage.xtzhuanpo) {
							return true; //player.countCards('h') > 0;
						} else {
							return player.countCards('h', { color: 'black' }) < 4;
						}
					},
					prompt2(event, player) {
						if (player.hasSkill('xtzhuanpo') && player.storage.xtzhuanpo) {
							return '获得四张基本牌';
						} else {
							if (player.countCards('h', { color: 'black' }) > 0) {
								return '弃置所有黑色手牌,获得四张红色基本牌';
							} else {
								return '弃置所有黑色手牌,获得四张基本牌';
							}
						}
					},
					content() {
						'step 0';
						player.changeZhuanhuanji('xtfeiguang');
						if (player.hasSkill('xtzhuanpo') && player.storage.xtzhuanpo) {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xtfeiguang' + [7, 8].randomGet());
							player.changeZhuanhuanji('xtzhuanpo');
							var colors = [];
						} else {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xtfeiguang' + [5, 6].randomGet());
							if (player.countCards('h', { color: 'black' }) > 0) {
								player.discard(player.getCards('h', { color: 'black' }));
								var colors = ['black'];
							} else {
								var colors = [];
							}
						}
						var cards = [];
						while (cards.length < 4) {
							var card = get.cardPile(function (card) {
								return get.type(card) == 'basic' && !colors.includes(get.color(card)) && !cards.includes(card);
							});
							if (card) cards.push(card);
						}
						if (cards.length) player.gain(cards, 'gain2');
					},
					ai: {
						maixie: true,
						maixie_hp: true,
						result: {
							effect(card, player, target) {
								if (get.tag(card, 'damage') && target.storage.xtfeiguang != false) {
									if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
									if (!target.hasFriend()) return;
									var num = 1;
									if (get.attitude(player, target) > 0) {
										if (player.needsToDiscard()) {
											num = 0.7;
										} else {
											num = 0.5;
										}
									}
									if (target.hp >= 4) return [1, num * 2];
									if (target.hp == 3) return [1, num * 1.5];
									if (target.hp == 2) return [1, num * 0.5];
								}
							},
						},
						threaten: 0.6,
					},
				},
			},
		},
		xtzhuanpo: {
			audio: 'ext:忽悠宇宙/audio/skill:3',
			init(player) {
				player.storage.xtzhuanpo = false;
			},
			mark: true,
			marktext: '☯',
			zhuanhuanji: true,
			intro: {
				content(storage, player, skill) {
					var str = '';
					if (player.storage.xtzhuanpo == false) str += '阳:你使用【杀】指定目标后,可以对自己或曾对其造成过伤害的角色造成1点伤害并令此【杀】不可被响应';
					else str += '阴:你发动〖飞光〗时不消耗手牌';
					return str;
				},
			},
			trigger: {
				player: 'useCardToTargeted',
			},
			filter(event, player) {
				if (player.storage.xtzhuanpo || event.card.name != 'sha') return false;
				if (!event.targets.length) return false;
				return (
					true ||
					event.target.getAllHistory('damage', function (evt) {
						if (!evt || !evt.source || !evt.source.isAlive()) return false;
						return true;
					}).length
				);
			},
			forced: true,
			async content(event, trigger, player) {
				let targetx = [player];
				trigger.target.getAllHistory('damage', function (evt) {
					if (!evt || !evt.source || !evt.source.isAlive()) return false;
					targetx.push(evt.source);
				});
				const { targets } = await player
					.chooseTarget('转魄:对自己或一名伤害来源造成1点伤害,此【杀】不可被响应', function (card, player, target) {
						return _status.event.targetx.includes(target);
					})
					.set('targetx', targetx)
					.set('ai', function (target) {
						if (player.hasSkill('xtfeiguang') && player.storage.xtfeiguang != false) {
							if (player.hp > 3) return target == player;
						}
						return get.damageEffect(target, player, player, 'fire');
					})
					.forResult();
				if (targets) {
					player.changeZhuanhuanji('xtzhuanpo');
					targets[0].damage();
					trigger.parent.directHit.addArray(game.filterPlayer());
					//var id = trigger.target.playerid;
					//var map = trigger.parent.customArgs;
					//if (!map[id]) map[id] = {};
					//if (typeof map[id].extraDamage != 'number') {
					//    map[id].extraDamage = 0;
					//}
					//map[id].extraDamage++;
				}
			},
		},
		//藿藿
		xtqienuo: {
			trigger: {
				global: 'useCard',
			},
			forced: true,
			filter(event, player) {
				if (!event.targets || event.targets.length != 1) return false;
				if (event.targets[0] == event.player) return false;
				if (event.player == player) {
					return get.type(event.card) == 'basic';
				} else {
					return get.type(event.card) == 'trick' && event.targets[0] == player;
				}
			},
			async content(event, trigger, player) {
				game.playAudio('../extension/忽悠宇宙/audio/skill/xtqienuo' + (trigger.player == player ? [1, 2] : [3, 4]).randomGet());
				game.log(player, '将', trigger.card, '的使用者由', trigger.player, '改为', trigger.targets[0]);
				trigger.untrigger();
				trigger.player = trigger.targets[0];
				if (trigger.card.name == 'shunshou') {
					game.log(player, '抱住了自己,但好像没什么可拿的');
					trigger.excluded.add(player); //顺自己有弹窗,不是bug,但无法解决,这一条别删
				}
			},
			ai: {
				threaten: 0.5,
			},
		},
		xtqushen: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				global: 'useCardToTarget',
			},
			filter(event, player) {
				if (player.countCards('he') <= 0) return false;
				if (!event.targets || event.targets.length != 1 || event.targets[0] != event.player) return false;
				if (!['basic', 'trick'].includes(get.type(event.card))) return false;
				return game.hasPlayer(function (current) {
					return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, event.player, current);
				});
			},
			usable: 1,
			forced: true,
			async content(event, trigger, player) {
				const { cards, targets } = await player
					.chooseCardTarget({
						prompt: '驱神:是否增加一个目标？',
						prompt2: `使用者为${get.translation(trigger.player)}且${get.type(trigger.card) == 'basic' ? '额外目标[净化]' : '此牌不能被【无懈可击】响应'} `,
						filterCard(card, player) {
							return lib.filter.cardDiscardable(card, player);
						},
						filterTarget(card, player, target) {
							let trigger = _status.event.getTrigger();
							return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
						},
						position: 'he',
						ai1(card) {
							return 8 - get.value(card);
						},
						ai2(target) {
							let player = _status.event.player,
								card = _status.event.getTrigger().card;
							let eff = get.effect(target, card, player, player),
								type = get.type2(card);
							let val = eff;
							if (eff > 0) {
								if (type == 'basic' && target.canhyyzJinghua()) val *= 2;
							} else {
								if (type == 'basic' && target.canhyyzJinghua()) val /= 2;
							}
							return eff;
						},
					})
					.forResult();
				if (targets && cards) {
					player.discard(cards);
					player.line(targets[0]);
					trigger.targets.addArray(targets);
					game.log('#g【驱神】', targets[0], '加入了', trigger.card, '的目标');
					if (get.type(trigger.card) == 'basic') {
						trigger.targets.map((i) => i.hyyzJinghua());
					} else {
						trigger.parent.nowuxie = true;
					}
				} else player.getStat('triggerSkill').xtqushen--;
			},
		},
		xtsuiyang: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			mark: true,
			intro: {
				content: 'limited',
			},
			init(player, skill) {
				player.storage[skill] = false;
			},
			enable: 'phaseUse',
			filter: (event, player) => !player.storage.xtsuiyang,
			limited: true,
			async content(event, trigger, player) {
				player.awakenSkill('xtsuiyang');
				player.storage.xtsuiyang = true;
				var list = [];
				for (var i = 0; i < lib.inpile.length; i++) {
					var name = lib.inpile[i];
					if (get.type(name) == 'basic') list.push(['基本', '', name]);
				}
				const { links } = await player
					.chooseButton(true, ['岁阳:选择<岁阳>', [list, 'vcard'], true])
					.set('ai', function (button) {
						var value = 0;
						if (button.link[2] == 'tao') value += 4;
						if (button.link[2] == 'jiu') value += 3;
						if (button.link[2] == 'shan') value += 2;
						if (button.link[2] == 'sha') value += 1;
						return value;
					})
					.forResult();
				if (links) {
					let name = links[0][2];
					player.addSkill('xtsuiyang_buff');
					player.storage.xtsuiyang_buff = name;
					let card = get.cardPile2(function (card) {
						return card.name == name;
					});
					if (card) {
						player.gain(card, 'gain2').gaintag.add('xtsuiyang');
						player.loseHp();
					}
				}
			},
			ai: {
				order: 9,
				result: {
					player: 1,
				},
			},
		},
		xtsuiyang_buff: {
			mark: true,
			marktext: '岁阳',
			intro: {
				name: '岁阳',
				mark(dialog, content, player) {
					if (player == game.me || player.isUnderControl()) {
						dialog.addText('已被<岁阳>寄生:');
						dialog.addSmall([[player.storage.xtsuiyang_buff], 'vcard']);
					} else dialog.addText('该角色已被<岁阳>寄生');
				},
				content: '岁阳名:$',
			},
			trigger: {
				global: 'phaseEnd',
			},
			filter(event, player) {
				return !player.countCards('h', (card) => card.hasGaintag('xtsuiyang'));
			},
			forced: true,
			charlotte: true,
			silent: true,
			content() {
				let card = get.cardPile(function (card) {
					return card.name == player.storage.xtsuiyang_buff;
				});
				if (card) player.gain(card, 'draw').gaintag.add('xtsuiyang');
			},
			group: ['xtsuiyang_buff_use', 'xtsuiyang_buff_damage'],
			subSkill: {
				use: {
					forced: true,
					charlotte: true,
					silent: true,
					trigger: {
						player: 'useCard1',
					},
					filter(event, player) {
						return player.hasHistory('lose', function (evt) {
							if (evt.parent != event) return false;
							for (var i in evt.gaintag_map) {
								if (evt.gaintag_map[i].includes('xtsuiyang')) return true;
							}
							return false;
						});
					},
					content() {
						game.playAudio('../extension/忽悠宇宙/audio/skill/xtsuiyang_buff' + [1, 2].randomGet());
					},
				},
				damage: {
					forced: true,
					charlotte: true,
					silent: true,
					trigger: {
						player: ['damageBegin', 'dying'],
					},
					filter(event, player) {
						return (
							player.countCards('h', function (card) {
								return card.hasGaintag('xtsuiyang');
							}) > 0
						);
					},
					content() {
						game.playAudio('../extension/忽悠宇宙/audio/skill/xtsuiyang_buff' + [3, 4].randomGet());
					},
				},
			},
		},
		//阮梅
		xtpeiyu: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			enable: 'phaseUse',
			usable: 1,
			async content(event, trigger, player) {
				game.countPlayer(function (current) {
					if (current.hasSkill('xtzaowu')) current.removeSkill('xtzaowu');
				});
				const choice1 = ['锁定技,每回合限1次.你获得牌后,', '锁定技,每回合限1次.你受到伤害后,', '锁定技,每回合限1次.你造成伤害后,'],
					choice2 = ['摸2张牌.', '回复1点体力.', '对一名其他角色造成1点伤害.'];
				let dialog = ui.create.dialog('培育:〖造物〗合成ing', 'hidden');
				dialog.addText('父本(时机)');
				dialog.add([choice1, 'textbutton']);
				dialog.addText('母本(效果)');
				dialog.add([choice2, 'textbutton']);
				const { links } = await player
					.chooseButton(dialog)
					.set('filterButton', function (button, player) {
						let list = _status.event.list;
						if (ui.selected.buttons.length) {
							let on = ui.selected.buttons[0].link;
							return (list[0].includes(on) && list[1].includes(button.link)) || (list[1].includes(on) && list[0].includes(button.link));
						}
						return true;
					})
					.set('selectButton', 2)
					.set('forced', true)
					.set('list', [choice1, choice2])
					.forResult();
				if (links && links.length == 2) {
					if (links[1].search('锁定技') > -1) links.reverse();
					const shiji = choice1.indexOf(links[0]);
					const xiaoguo = choice2.indexOf(links[1]);
					if (xiaoguo != undefined) {
						const { color } = await player.judge().forResult();
						if (color) {
							let xtzaowu = {
								//初始化一个技能
								audio: 'ext:忽悠宇宙/audio/skill:1',
								onremove(player) {
									delete player.storage.xtzaowu;
								},
								mark: true,
								marktext: '造',
								intro: {
									name: lib.translate.xtzaowu,
									content: () => lib.translate.xtzaowu_info,
								},
								trigger: {
									player: [],
									source: [],
								},
								forced: true,
								charlotte: true,
								async content(event, trigger, player) {
									const num = player.getStorage('xtzaowu')[1] ? 1 : 0;
									switch (player.getStorage('xtzaowu')[0]) {
										case 0:
											await player.draw(2 + num);
											return;
										case 1:
											await player.recover(1 + num);
											return;
										case 2: {
											const { targets } = await player
												.chooseTarget(`造物:造成${1 + num}点伤害`, true)
												.set('ai', (target) => -get.attitude(player, target))
												.forResult();
											if (targets) {
												player.line(targets[0], 'fire');
												targets[0].damage(num + 1, player);
											}
										}
									}
								},
							};
							xtzaowu.usable = color == 'black' ? 2 : 1; //定义使用次数
							const shiji2 = ['获得牌', '受到伤害', '造成伤害'],
								shiji3 = ['gainAfter', 'damageEnd', 'damageSource']; //做个翻译
							xtzaowu.trigger[shiji == 2 ? 'source' : 'player'].add(shiji3[shiji]); //定义时机
							const xtzaowu_info = `锁定技,每回合限${color == 'black' ? '2' : '1'}次.你${shiji2[shiji]}后,${xiaoguo == 0 ? '摸' + (color == 'red' ? '3' : '2') + '张牌' : xiaoguo == 1 ? '回复' + (color == 'red' ? '2' : '1') + '点体力' : '对一名其他角色造成' + (color == 'red' ? '2' : '1') + '点伤害.'}`; //翻译设定
							lib.translate.xtzaowu = '造物';
							lib.translate.xtzaowu_info = xtzaowu_info;
							lib.skill.xtzaowu = xtzaowu;
							const { targets } = await player
								.chooseTarget('选择获得〖造物〗的角色', lib.translate.xtzaowu_info, true)
								.set('ai', function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									if (target != player) att *= 10;
									return att;
								})
								.forResult();
							if (targets) {
								player.line(targets, 'green');
								targets[0].addTempSkill('xtzaowu', { player: 'dieAfter' });
								targets[0].storage.xtzaowu = [xiaoguo, color == 'red'];
							}
						}
					}
				}
			},
			ai: {
				order: 5,
				result: {
					player: 2,
				},
			},
		},
		xtnicha: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				global: 'xtzaowuAfter',
			},
			filter(event, player) {
				return event.player != player && event.player.storage.xtzaowu;
			},
			forced: true,
			async content(event, trigger, player) {
				switch (trigger.player.getStorage('xtzaowu')[0]) {
					case 0: {
						player.recover();
						const { targets } = await player
							.chooseTarget('造物:造成1点伤害', true)
							.set('ai', (target) => -get.attitude(player, target))
							.forResult();
						if (targets) {
							player.line(targets, 'fire');
							targets[0].damage(1, player);
						}
						break;
					}
					case 1: {
						player.draw(2);
						const { targets } = await player
							.chooseTarget('造物:造成1点伤害', true)
							.set('ai', (target) => -get.attitude(player, target))
							.forResult();
						if (targets) {
							player.line(targets, 'fire');
							targets[0].damage(1, player);
						}
						break;
					}
					case 2: {
						player.recover();
						player.draw(2);
						break;
					}
				}
			},
		},
		//银枝
		xtxinyang: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			group: ['xtxinyang_gain', 'xtxinyang_lose'],
			subSkill: {
				gain: {
					trigger: {
						player: 'gainBefore',
						target: 'gift',
					},
					forced: true,
					_priority: Infinity,
					firstDo: true,
					filter(event, player) {
						if (event.giver == player) return false;
						if (event.name == 'gift') return event.target != player;
						if (event.source && event.source == player) return false;
						return event.getParent(2).name != 'xtxinyang_gain';
					},
					content() {
						'step 0';
						game.trySkillAudio('xtxinyang', player);
						if (trigger.getParent(2).name == 'useCard') {
							trigger.getParent(2).targets.remove(player);
							trigger.getParent(2).excluded.add(player);
						}
						if (trigger.name == 'gift') {
							trigger.deniedGift.add(trigger.card);
							trigger.deniedGifts = trigger.cards;
						}
						('step 1');
						var cards = trigger.cards;
						if (get.owner(cards[0])) get.owner(cards[0]).discard(cards);
						game.cardsDiscard(cards);
						('step 2');
						if (trigger.name == 'gain' && trigger.getg(player).length) {
							//trigger.getg(player) = [];
							player.loseToDiscardpile(trigger.cards);
						}
						('step 3');
						trigger.cancel();
						game.log('#g【信仰】', player, `放弃获得${get.translation(trigger.source)}的`, trigger.cards, ',改为摸两张牌');
						('step 4');
						if (trigger.bool) trigger.bool = false;
						if (trigger.cards) trigger.cards = [];
						if (trigger.links) trigger.links = [];
						if (trigger.buttons) trigger.buttons = {};
						player.draw(2);
					},
					ai: {
						refuseGifts: true,
					},
				},
				lose: {
					trigger: {
						global: ['rewriteDiscardResult', 'rewriteGainResult', 'gainBefore'],
						player: ['loseBefore'],
					},
					forced: true,
					_priority: Infinity,
					firstDo: true,
					filter(event, player) {
						if (!player.countCards('h') || !event.cards || !event.cards.length) return false;
						if (_status.currentPhase == player) return false;
						if (event.name != 'lose' && event.player == player) return false;
						if (event.getParent(3).name == 'xtxinyang_lose') return false;
						if (event.name == 'gain') {
							return player.getCards('hes').some((card) => card == event.cards[0]);
						} else {
							return event.name == 'lose' || (event.player != player && event.target == player);
						}
					},
					content() {
						'step 0';
						game.trySkillAudio('xtxinyang', player);
						('step 1');
						if (trigger.getParent(2).name == 'useCard') {
							trigger.getParent(2).targets.remove(player);
							trigger.getParent(2).excluded.add(player);
						}
						('step 2');
						if (['gainPlayerCard', 'discardPlayerCard'].includes(trigger.name) && trigger.getParent(2).result) {
							trigger.getParent(2).result.bool = false;
							trigger.getParent(2).result.buttons = {};
							trigger.getParent(2).result.links = [];
							trigger.getParent(2).result.cards = [];
						}
						('step 3');
						if (trigger.result) {
							trigger.result.bool = false;
							trigger.result.cards = [];
							trigger.result.links = [];
							trigger.result.buttons = {};
						}
						if (trigger.name == 'lose') {
							var evt = trigger.getl(player);
							if (evt && evt.cards2 && evt.cards2.length) {
								evt.hs = [];
								evt.hs = [];
								evt.es = [];
								evt.js = [];
								evt.ss = [];
								evt.xs = [];
							}
						}
						('step 4');
						if (trigger.bool) trigger.bool = false;
						if (trigger.cards) trigger.cards = [];
						if (trigger.links) trigger.links = [];
						if (trigger.buttons) trigger.buttons = {};
						('step 5');
						trigger.cancel();
						('step 6');
						player.chooseToDiscard(true, 'he');
						trigger.untrigger();
					},
				},
			},
		},
		xtximei: {
			audio: 'ext:忽悠宇宙/audio/skill:3',
			trigger: {
				global: 'damageBegin4',
			},
			filter(event, player) {
				return player.inRange(event.player) && event.player != player && !player.hasSkill('xtximei_no');
			},
			forced: true,
			content() {
				'step 0';
				var list = [];
				if (trigger.source && player.canUse({ name: 'juedou' }, trigger.source)) list.push(trigger.source);
				if (trigger.player && player.canUse({ name: 'juedou' }, trigger.player)) list.push(trigger.player);
				var str = `邀决:[${get.translation(trigger.player)}]即将受到` + (trigger.source ? `[${get.translation(trigger.source)}]造成的` : '') + '伤害';
				var str2 = `改为对[${get.translation(list[0])}]` + (list.length > 1 ? `或[${get.translation(list[1])}]` : '') + '视为使用【决斗】</br>结算后,打出【杀】者摸牌;体力低者回血';
				player
					.chooseTarget(str, str2, function (card, player, target) {
						return _status.event.listx.includes(target);
					})
					.set('listx', list)
					.set('ai', function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						if (att > 0) {
							return target.hp <= player && target.hp > 1;
						} else {
							return target.hp > player && player.hp > 1;
						}
					});
				('step 1');
				if (result.bool) {
					player.addTempSkill('xtximei_no');
					trigger.cancel();
					player.useCard({ name: 'juedou' }, result.targets[0]);
				}
			},
			group: 'xtximei_dam',
			subSkill: {
				no: {},
				dam: {
					trigger: {
						player: 'useCardAfter',
					},
					filter(event, player) {
						return event.parent.name == 'xtximei';
					},
					forced: true,
					content() {
						game.hasPlayer(function (current) {
							//if (current.getHistory('damage', evt => evt.card && evt.card == trigger.card)) {
							//    current.recover();
							//};
							if (current.getHistory('respond', (evt) => evt.respondTo[1] && evt.respondTo[1] == trigger.card).length) {
								current.draw();
							}
						});
						var list = [trigger.player, trigger.targets[0]];
						if (list[0].hp > list[1].hp) list[1].recover();
						else if (list[0].hp < list[1].hp) list[0].recover();
						else if (list[0].hp == list[1].hp) {
							list[0].recover();
							list[1].recover();
						}
						//if (list[0].countCards('h') > list[1].countCards('h')) list[1].draw();
						//else if (list[0].countCards('h') < list[1].countCards('h')) list[0].draw();
						//else if (list[0].countCards('h') == list[1].countCards('h')) {
						//    list[0].draw();
						//    list[1].draw();
						//};
					},
				},
			},
			ai: {
				threaten: 3,
			},
		},
		//真理医生
		xtbianbo: {
			trigger: {
				global: 'useCard',
			},
			usable: 1,
			filter(event, player) {
				if (event.targets.length != 1) return false;
				if (event.targets[0] != player) return false;
				return event.player == player || player.canCompare(event.player);
			},
			content() {
				'step 0';
				if (player == trigger.player) {
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtbianbo' + [3, 4].randomGet());
				} else {
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtbianbo' + [1, 2].randomGet());
				}
				player.chooseToCompare(trigger.player);
				('step 1');
				if (result.bool) {
					var list = [
						'此牌无效',
						//`此牌无效且不能再对${get.translation(player) }使用牌`,
						'受到1点伤害',
					];

					trigger.player
						.chooseControl(true)
						.set('choiceList', list)
						.set('ai', () => (trigger.player.hp > player.hp ? 1 : 0));
				} else {
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtbianbo' + [5, 6].randomGet());
					trigger.directHit.add(player);
					if (player.hasSkill('xtguina')) {
						lib.skill.xtguina.guina(player, trigger.card.name);
					}
					event.finish();
				}
				('step 2');
				if (result.index == 0) {
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtbianbo7.mp3');
					trigger.excluded.add(player);
					player.say('零分,下一个!');
					player.line(trigger.player);
					//trigger.player.addTempSkill('xtbianbo_buff');
				}
				if (result.index == 1) {
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtbianbo8.mp3');
					player.say('负分,给我滚!');
					player.line(trigger.player);
					trigger.player.damage(player);
				}
				('step 3');
			},
			mod: {
				targetEnabled(card, player, target) {
					if (player.hasSkill('xtbianbo_buff')) return false;
				},
			},
			ai: {
				effect: {
					target(card, player, target, current) {
						var hs = player.getCards('h').sort(function (a, b) {
							return b.number - a.number;
						});
						var ts = target.getCards('h').sort(function (a, b) {
							return b.number - a.number;
						});
						if (!hs.length || !ts.length) return;
						if (hs[0].number < ts[0].number && player.countCards('he') < 4) return 0.5;
					},
				},
			},
		},
		xtbianbo_buff: {
			forced: true,
			charlotte: true,
			mark: true,
			marktext: '辩',
			intro: {
				name: '辩驳',
				content: '不能再对真理医生使用牌',
			},
		},
		xtguina: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			trigger: {
				global: 'useCardToPlayered',
			},
			forced: true,
			filter(event, player) {
				if (event.player != player && event.target != player) return false;
				return event.target == event.targets[0];
			},
			guina(player, name, type) {
				if (!player.hasSkill('xtguina_buff')) {
					player.addTempSkill('xtguina_buff', 'roundStart');
				}
				if (!type) {
					player.getStorage('xtguina_buff').use[name] ? player.storage.xtguina_buff.use[name]++ : (player.storage.xtguina_buff.use[name] = 1);
					player.getStorage('xtguina_buff').target[name] ? player.storage.xtguina_buff.target[name]++ : (player.storage.xtguina_buff.target[name] = 1);
				} else {
					player.getStorage('xtguina_buff')[type][name] ? player.storage.xtguina_buff[type][name]++ : (player.storage.xtguina_buff[type][name] = 1);
				}
			},
			content() {
				'step 0';
				game.log(player, '发动了', '#g【归纳】</br>', `<span class=greentext>〖归纳〗</font>了<span class=yellowtext>【${get.translation(trigger.card.name)}】</span>`);
				if (trigger.targets.includes(player)) lib.skill.xtguina.guina(player, trigger.card.name, 'target');
				if (trigger.player == player) lib.skill.xtguina.guina(player, trigger.card.name, 'use');
				('step 1');
				if (trigger.targets.includes(player) && player.getStorage('xtguina_buff').target[trigger.card.name] > 1) {
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtguina' + [3, 4].randomGet());
					player.draw(player.getStorage('xtguina_buff').target[trigger.card.name]);
				}
				if (trigger.player == player && player.getStorage('xtguina_buff').use[trigger.card.name] > 1) {
					game.playAudio('../extension/忽悠宇宙/audio/skill/xtguina' + [1, 2].randomGet());
					trigger.parent.effectCount = player.getStorage('xtguina_buff').use[trigger.card.name];
				}
			},
		},
		xtguina_buff: {
			forced: true,
			charlotte: true,
			mark: true,
			marktext: '归',
			intro: {
				name: '归纳',
				content(storage, player) {
					var uses = Object.keys(storage.use).length,
						targets = Object.keys(storage.target).length;
					if (!(uses + targets)) return '目前没有归纳';
					var str = '';
					if (uses) {
						str += '<p style="text-align: center;">使用牌</p>';
						for (let name in storage.use) {
							str += `<li>【${get.translation(name)}】:${storage.use[name]}`;
						}
					}
					if (targets) {
						str += '<p style="text-align: center;">成为目标</p>';
						for (let name in storage.target) {
							str += `<li>【${get.translation(name)}】:${storage.target[name]}`;
						}
					}
					return str;
				},
			},
			init(player) {
				player.storage.xtguina_buff = {
					use: {},
					target: {},
				};
			},
			onremove(player) {
				delete player.storage.xtguina_buff;
			},
		},
		//姬子
		b3xiepin: {
			audio: 'ext:忽悠宇宙/audio/skill:10',
			trigger: {
				target: 'useCardToTarget',
			},
			zhuanhuanji: true,
			mark: true,
			marktext: '☯',
			intro: {
				content(storage, player, skill) {
					return `转换技.当其他角色对你使用牌时,你可以${storage ? '获得该角色一张牌' : '不响应此牌'}.`;
				},
			},
			prompt(event, player) {
				if (player.storage.b3xiepin) {
					return `【血拼】</br>获得${get.translation(event.player)}的一张牌？`;
				} else return `【血拼】</br>不响应${get.translation(event.card)}？`;
			},
			filter(event, player) {
				if (_status.dying.includes(player) || player.hp < 1) return false;
				if (event.player == player) return false;
				return player.storage.b3xiepin ? event.player.countGainableCards(player, 'he') : true; //get.itemtype(event.cards) == 'cards';
			},
			check(event, player) {
				var player = _status.event.player;
				if (player.storage.b3xiepin) {
					return -get.attitude(player, event.player);
				} else {
					if (get.itemtype(event.cards) != 'cards') return false;
					if (event.parent.excluded.includes(player)) return true;
					if (get.tag(event.card, 'respondSha')) {
						if (player.countCards('h', { name: 'sha' }) == 0) {
							return true;
						}
					} else if (get.tag(event.card, 'respondShan')) {
						if (player.countCards('h', { name: 'shan' }) == 0) {
							return true;
						}
					} else if (get.tag(event.card, 'damage')) {
						if (event.card.name == 'shuiyanqijunx') return player.countCards('e') == 0;
						return true;
					}
					return false;
				}
			},
			logTarget: 'player',
			content() {
				'step 0';
				if (player.storage.b3xiepin) {
					player.gainPlayerCard(`血拼:获得${get.translation(trigger.player)}一张牌`, true, trigger.player, 'he').set('ai', function (button) {
						const player = _status.event.player;
						var val = get.value(button.link),
							color = get.color(button.link);
						if (!player.hasSkill('b3poxiao')) return val;
						if (player.getStorage('b3poxiao').includes('red') && color == 'red') {
							val /= 2;
						}
						if (player.getStorage('b3poxiao').includes('black') && color == 'black') {
							val /= 1.5;
						}
						return val;
					});
				} else {
					trigger.parent.directHit.add(player);
					player.gain(trigger.cards, 'gain2');
				}
				player.changeZhuanhuanji('b3xiepin');
			},
			ai: {
				expose: 2,
				maixie: true,
				threaten: 0.8,
			},
		},
		b3poxiao: {
			marktext: '<font color=#FF4500>☄️</font>',
			intro: {
				content(storage, player) {
					var str = '破晓已触发的颜色:';
					if (storage.includes('red')) str += "<li><span class='firetext'>空白之键<span>";
					if (storage.includes('black')) str += "<li><span class='thundertext'>弑神之枪<span>";
					return str;
				},
			},
			trigger: {
				player: 'gainAfter',
				global: 'loseAsyncAfter',
			},
			filter(event, player) {
				var cards = event.getg(player);
				if (!cards.length) return false;
				for (var i of cards) {
					if (player.getStorage('b3poxiao').includes(get.color(i))) continue;
					if (
						game.hasPlayer((current) => {
							if (current == player) return false;
							var evt = event.getl(current);
							if (evt && evt.cards && evt.cards.length) return true;
						})
					)
						return get.color(i) == 'red' || (get.owner(i) == player && player.hasUseTarget(i, false));
				}
			},
			forced: true,
			content() {
				'step 0';
				let cards = trigger.getg(player);
				let list = {
					red: [],
					black: [],
				};
				for (var i of cards) {
					let color = get.color(i);
					if (player.getStorage('b3poxiao').includes(color)) continue;
					if (
						game.hasPlayer((current) => {
							if (current == player) return false;
							var evt = trigger.getl(current);
							if (evt && evt.cards && evt.cards.includes(i)) return true;
						})
					) {
						if (color == 'red') list.red.push(i);
						if (color == 'black' && get.owner(i) == player && player.hasUseTarget(i, false)) list.black.push(i);
					}
				}
				event.list = list;
				('step 1');
				if (event.list.red.length) {
					player.chooseUseTarget({ name: 'sha', nature: 'fire' }, '视为使用一张火【杀】', false);
				}
				('step 2');
				if (result.targets?.length) {
					//    var target = result.targets[0];
					//    player.line(target, 'fire');
					game.playAudio('../extension/忽悠宇宙/audio/skill/b3poxiao' + [1, 2, 3].randomGet());
					//    if (!player.storage.b3poxiao) {
					//        player.when({ global: 'phaseAfter' }).then(() => {
					//            delete player.storage.b3poxiao;
					//            player.unmarkSkill('b3poxiao');
					//        });
					//    }
					//    player.markAuto('b3poxiao', ['red']);
					//    target.damage('fire');
					if (!event.list.black.length) event.finish();
				}
				('step 3');
				if (event.list.black.length) {
					if (event.list.black.length > 1)
						player
							.chooseButton(true, ["<span class='thundertext'>破晓</span>:使用其中一张牌", event.list.black])
							.set('filterButton', function (button) {
								var card = button.link,
									player = _status.event.player;
								return player.hasUseTarget(card);
							})
							.set('ai', function (button) {
								return _status.event.player.getUseValue(button.link) || get.value(button.link);
							});
					else event._result = { bool: true, links: event.list.black };
				}
				('step 4');
				if (result.links?.length) {
					game.playAudio('../extension/忽悠宇宙/audio/skill/b3poxiao' + [4, 5, 6, 7].randomGet());
					if (!player.storage.b3poxiao) {
						player.when({ global: 'phaseAfter' }).then(() => {
							delete player.storage.b3poxiao;
							player.unmarkSkill('b3poxiao');
						});
					}
					var card = result.links[0];
					player.markAuto('b3poxiao', ['black']);
					if (player.hasUseTarget(card)) player.chooseUseTarget(card, true, 'nopopup');
				}
			},
		},
		b3huozhong: {
			audio: 'ext:忽悠宇宙/audio/skill:1',
			enable: 'chooseToUse',
			filter(event, player) {
				return event.type == 'dying' && player.storage.b3huozhong == false && _status.event.dying != player;
			},
			filterTarget(card, player, target) {
				return target == _status.event.dying;
			},
			selectTarget: -1,
			mark: true,
			limited: true,
			init(player) {
				player.storage.b3huozhong = false;
			},
			async content(event, trigger, player) {
				await player.awakenSkill('b3huozhong');
				player.storage.b3huozhong = true;
				player.addTempSkill('b3huozhong_buff');
				player.storage.b3huozhong_buff = event.target;
				const num = player.hp - event.target.hp;
				await event.target.changeHp(num);
				if (event.target.hp <= 0) event.target.dying();
				await player.changeHp(-num);
				if (player.hp <= 0) player.dying();
			},
			ai: {
				order: 6,
				threaten: 1.4,
				skillTagFilter(player) {
					if (!_status.event.dying) return false;
				},
				save: true,
				result: {
					target: 3,
				},
			},
			intro: {
				content: 'limited',
			},
		},
		b3huozhong_buff: {
			charlotte: true,
			forceDie: true,
			forced: true,
			trigger: {
				player: 'dieBefore',
			},
			filter(event, player) {
				var list = player.getStockSkills(true, true).filter(function (skill) {
					var info = get.info(skill);
					return info && !info.charlotte; //&& !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.limited && !info.dutySkill;
				});
				return event.getParent(3).name == 'b3huozhong' && list.length;
			},
			content() {
				'step 0';
				var target = player.storage.b3huozhong_buff;
				var list = player.getStockSkills(true, true).filter(function (skill) {
					var info = get.info(skill);
					return info && !info.charlotte; //&& !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.limited && !info.dutySkill;
				});
				target
					.chooseControl(list)
					.set('prompt', '获得一个技能')
					.set('forceDie', true)
					.set('ai', function () {
						return list.randomGet();
					});
				('step 1');
				player.line(player.storage.b3huozhong_buff, 'green');
				player.say('这就是……最后一课了……');
				player.storage.b3huozhong_buff.addSkill(result.control);
				game.log('#g【火种】', player.storage.b3huozhong_buff, '获得了技能', `#g【${get.translation(result.control)}】`);
			},
		},
		//花火
		xtjiaoshi: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			enable: ['chooseToUse', 'chooseToRespond'],
			usable: 1,
			//mark: true,
			intro: {
				name: '矫饰',
				mark(dialog, content, player) {
					if (player == game.me || player.isUnderControl()) {
						let froms = [];
						player.getAllHistory('useCard', (evt) => froms.add(evt.card.name));
						if (froms.length) {
							dialog.addText('你使用过的牌');
							dialog.addSmall([froms, 'vcard']);
						} else dialog.addText('没有使用过牌');
					} else {
						dialog.addText('嗯哼,你在偷看什么？');
					}
				},
				content(storage, player) {
					let froms = [];
					player.getAllHistory('useCard', (evt) => froms.add(evt.card.name));
					let str = '你使用过的牌';
					str += froms.map((card) => get.translation(card.name));
					return str;
				},
			},
			filter(event, player) {
				let froms = [];
				player.getAllHistory('useCard', (evt) => froms.add(evt.card.name));
				if (!player.countCards('hes', (card) => froms.includes(card.name))) return false;
				let canViews = [];
				game.hasPlayer((current) => {
					if (current != player) {
						current.getAllHistory('useCard', (evt) => canViews.add(evt.card.name));
					}
				});
				for (var i of lib.inpile) {
					if (!canViews.includes(i)) continue;
					var type = get.type(i);
					if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
					if (i == 'sha') {
						for (var j of lib.inpile_nature) {
							if (event.filterCard && event.filterCard({ name: i, nature: j }, player, event)) return true;
						}
					}
				}
				return false;
			},
			chooseButton: {
				dialog(event, player) {
					var dialog = ui.create.dialog('矫饰', 'hidden');
					let canViews = [];
					game.hasPlayer((current) => {
						if (current != player) {
							current.getAllHistory('useCard', (evt) => canViews.add(evt.card.name));
						}
					});
					let list = [];
					for (const name of lib.inpile) {
						if (!canViews.includes(name)) continue;
						if (!event.filterCard || !event.filterCard({ name: name }, player, event)) continue;
						if (name == 'sha') {
							list.push(['基本', '', 'sha']);
							for (var j of lib.inpile_nature) {
								if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
							}
						} else if (get.type2(name) == 'trick') list.push(['锦囊', '', name]);
						else if (get.type(name) == 'basic') list.push(['基本', '', name]);
					}
					dialog.add([list, 'vcard']);
					return dialog;
				},
				filter(button, player) {
					var evt = _status.event.parent;
					if (!evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt)) return false;
					return true;
				},
				check(button) {
					return _status.event.player.getUseValue({
						name: button.link[2],
					});
				},
				prompt(links, player) {
					return `矫饰:将一张曾使用过的牌,当【${get.translation(links[0][2])}】使用`;
				},
				select: 1,
				backup(links, player) {
					return {
						filterCard(card) {
							let froms = [];
							player.getAllHistory('useCard', (evt) => froms.add(evt.card.name));
							return froms.includes(card.name);
						},
						selectCard: 1,
						popname: true,
						check(card) {
							return 8 - get.value(card);
						},
						position: 'hes',
						viewAs: {
							name: links[0][2],
							nature: links[0][3],
						},
						onuse(result, player) { },
					};
				},
			},
			hiddenCard(player, name) {
				let froms = [];
				player.getAllHistory('useCard', (evt) => froms.add(evt.card.name));
				if (!player.countCards('hes', (card) => froms.includes(card.name))) return false;
				let canViews = [];
				game.hasPlayer((current) => {
					if (current != player) {
						current.getAllHistory('useCard', (evt) => canViews.add(evt.card.name));
					}
				});
				if (player.getHistory('useSkill', (evt) => evt.sourceSkill == 'xtjiaoshi')) return false;
				return canViews.includes(name);
			},
			ai: {
				fireAttack: true,
				respondSha: true,
				respondShan: true,
				skillTagFilter(player) {
					let froms = [];
					player.getAllHistory('useCard', (evt) => froms.add(evt.card.name));
					if (!player.countCards('hes', (card) => froms.includes(card.name))) return false;
					let canViews = [];
					game.hasPlayer((current) => {
						if (current != player) {
							current.getAllHistory('useCard', (evt) => canViews.add(evt.card.name));
						}
					});
					return canViews.length;
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
		xtkehun: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			trigger: {
				player: ['useCardAfter', 'respondEnd'],
			},
			forced: true,
			mark: true,
			intro: {
				name: '科诨',
				mark(dialog, content, player) {
					if (player == game.me || player.isUnderControl()) {
						let froms = [];
						player.getAllHistory('useCard', (evt) => {
							if (get.itemtype(evt.cards) == 'cards') {
								for (let card of evt.cards) {
									if (card.name != evt.card.name) froms.add(evt.card.name);
								}
							}
						});
						if (froms.length) {
							dialog.addText('使用过的转化牌');
							dialog.addSmall([froms, 'vcard']);
							dialog.addText('p.s.以这些牌为底牌进行转化');
						} else dialog.addText('没有使用过转化牌');
					} else {
						dialog.addText('你追求女孩子的方式就是偷看吗？');
					}
				},
				content(storage, player) {
					let froms = [];
					player.getAllHistory('useCard', (evt) => froms.add(evt.card.name));
					let str = '你使用过的牌';
					str += froms.map((card) => get.translation(card.name));
					return str;
				},
			},
			filter(event, player) {
				if (get.itemtype(event.cards) != 'cards') return false;
				if (!event.card.isCard) return true;
				if (!event.cards.some((card) => card.name != event.card.name)) return false;
				return true;
			},
			forced: true,
			async content(event, trigger, player) {
				player.draw();
				let froms = [],
					bool = false;
				player.getAllHistory('useCard', (evt) => {
					if (get.itemtype(evt.cards) == 'cards') {
						for (let card of evt.cards) {
							if (card.name != evt.card.name) froms.add(evt.card.name);
						}
					}
				});
				if (trigger.cards.some((card) => froms.includes(card.name)) && game.hasPlayer((current) => current.seatNum > player.seatNum)) {
					const { targets } = await player
						.chooseTarget('令一名角色获得额外回合', function (card, player, target) {
							return target != player && target.seatNum > player.seatNum;
						})
						.set('ai', (target) => {
							let player = _status.event.player;
							let val = get.attitude(player, target);
							//if (target.seatNum >= player.seatNum) val *= 2;
							return val;
						})
						.forResult();
					if (targets) {
						player.say(['我方唱罢,你登场~', '接好你的面具咯~'].randomGet());
						game.playAudio('../extension/忽悠宇宙/audio/skill/xtkehun_phase' + [1, 2].randomGet());
						targets[0].markSkillCharacter('xtkehun', player, '科诨', '进行一个只有出牌阶段的额外回合');
						targets[0].phase('nodelay').set('phaseList', ['phaseUse']);
						targets[0]
							.when({
								player: ['phaseAfter', 'phaseCancelled'],
							})
							.then(() => {
								player.unmarkSkill('xtkehun');
							});
					}
				}
			},
		},
		xtjiamian: {
			view(name, player) {
				let map = {};
				player.getAllHistory('useCard', (evt) => {
					if (get.itemtype(evt.cards) == 'cards') {
						for (var i of evt.cards) {
							if (i.name != evt.card.name) {
								map[i.name] = evt.card.name;
							}
						}
					}
				});
				if (map[name]) return map[name];
				return;
			},
			mod: {
				cardname(card, player, name) {
					if (get.position(card) == 'h' && _status.currentPhase != player) {
						return lib.skill.xtjiamian.view(card.name, player);
					}
					return;
				},
			},
		},
		//黄泉
		xtlunshi: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				global: 'gainAfter',
				player: 'loseAsyncAfter',
			},
			filter(event, player) {
				if (event.name == 'loseAsync') {
					if (event.type != 'gain' || event.giver) return false;
					var cards = event.getl(player).cards2;
					return game.hasPlayer((current) => {
						if (current == player) return false;
						var cardsx = event.getg(current);
						for (var i of cardsx) {
							if (cards.includes(i)) return true;
						}
						return false;
					});
				}
				if (player == event.player) return false;
				if (event.giver) return false;
				var evt = event.getl(player);
				return evt && evt.cards2 && evt.cards2.length;
			},
			forced: true,
			async content(event, trigger, player) {
				let targets = [];
				if (trigger.name == 'loseAsync') {
					var cards = trigger.getl(player).cards2;
					game.countPlayer((current) => {
						if (current == player) return false;
						var cardsx = trigger.getg(current);
						for (var i of cardsx) {
							if (cards.includes(i)) targets.add(current);
						}
					});
				} else {
					targets.add(trigger.player);
				}
				for (let current of targets) {
					if (!player.countCards('he')) break;
					current.line(player);
					game.log(current, '观看了', player, '的手牌');
					current.viewHandcards(player, '沦逝');
					if (player.countCards('h', { name: 'ying' }) > current.countCards('h', { name: 'ying' })) await current.damage(player, 'thunder');
				}
			},
		},
		xtxuwu: {
			audio: 'ext:忽悠宇宙/audio/skill:5',
			init(player) {
				lib.element.player.addGouyu = function () {
					var next = game.createEvent('addGouyu');
					next.player = this;
					next.setContent('addGouyu');
					return next;
				};
				lib.element.content.addGouyu = function () {
					if (lib.config.background_audio) {
						game.playAudio('effect/recover');
					}
					game.broadcast(function () {
						if (lib.config.background_audio) {
							game.playAudio('effect/recover');
						}
					});
					game.broadcastAll(function (player) {
						if (lib.config.animation && !lib.config.low_performance) {
							player.$recover();
						}
					}, player);
					player.$damagepop(num, 'wood');
					game.log(player, `获得了${get.cnNumber(1)}枚勾玉`);
					player.maxHp += 1;
					player.changeHp(1, false);
				};
				player.storage.xtxuwu = [1, 2, 3, 4, 5];
				player.addSkill('hyyz_phase');
			},
			trigger: {
				global: 'dying',
			},
			filter(event, player) {
				return lib.skill.xtxuwu.phaseList.length;
			},
			forced: true,
			async content(event, trigger, player) {
				await trigger.player.addSkill('xtbenghuai');
				if (trigger.player == player) {
					if (lib.skill.xtxuwu.phaseList.length) {
						const { bool, moved } = await player
							.chooseToMove(`沦逝:删除一个阶段并重排剩余阶段`, true)
							.set('list', [[`重新排序`, [lib.skill.xtxuwu.phaseList, 'vcard']], [`删除`]])
							.set('filterMove', function (from, to, moved) {
								if (to == 0 && moved[1].length < 2) return false;
								if (to == 1 && moved[1].length) return false;
								return true;
							})
							.set('filterOk', (moved) => moved[1].length == 1)
							.set('processAI', function (list) {
								const list2 = list[0][1][0],
									phases = ['phaseDraw', 'phaseUse', 'phaseZhunbei', 'phaseJieshu', 'phaseJudge', 'phaseDiscard'];
								let phase_val = [];
								for (var i of phases) {
									if (list2.includes(i)) {
										phase_val.push(i);
									}
								}
								let remove = [['', '', phase_val[phase_val.length - 1]]];
								return [phase_val.slice(0, phase_val.length - 1).map((i) => ['', '', i]), remove];
							})
							.forResult();
						if (bool) {
							lib.skill.xtxuwu.phaseList = moved[0].map((card) => (card = card[2]));
							game.log(player, '删除了', '#r' + get.translation(moved[1][0][2]));
							game.log(player, '重排阶段为:', '#y' + get.translation(lib.skill.xtxuwu.phaseList));
						}
					}
					if (!player.storage.xtxuwu.length) {
						player.clearSkills(true);
						game.log(player, '#r丢失了技能信息');
					} else {
						let num = player.storage.xtxuwu.randomGet();
						player.storage.xtxuwu.remove(num);
						switch (num) {
							case 1: {
								lib.translate.xt_huangquan = '■■';
								player.node.name.innerHTML = '■■';
								game.log(player, '#r的姓名信息消散了');
								break;
							}
							case 2: {
								player.sex = '■';
								game.log(player, '#r的性别信息消散');
								break;
							}
							case 3: {
								player.group = '■■';
								player.node.name.dataset.nature = '■■';
								game.log(player, '#r的势力信息消散了');
								break;
							}
							case 4: {
								player.node.avatar.setBackgroundImage('extension/忽悠宇宙/image/character/■■.jpg');
								game.log(player, '#r的原画信息消散了');
								break;
							}
							case 5: {
								lib.characterTitle.xt_huangquan = '#r■■■■■■,</br>■■■■,■■■■……</br>■■■■,■■■■.';
								game.log(player, '#r的铭志消散了');
								break;
							}
							default:
								break;
						}
					}
				}
				if (trigger.player == player) await player.addGouyu();
			},
			phaseList: ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'],
			ai: {
				threaten: 3,
			},
		},
		xtbenghuai: {
			trigger: {
				player: 'phaseJieshuBegin',
			},
			forced: true,
			check() {
				return false;
			},
			filter(event, player) {
				return !player.isMinHp();
			},
			content() {
				'step 0';
				player
					.chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
						if (player.hp == player.maxHp) return 'baonue_hp';
						if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
						return 'baonue_hp';
					})
					.set('prompt', '崩坏:失去1点体力或减1点体力上限');
				('step 1');
				if (result.control == 'baonue_hp') {
					player.loseHp();
				} else {
					player.loseMaxHp(true);
				}
			},
			ai: {
				threaten: 0.5,
				neg: true,
			},
		},
		hyyz_phase: {
			audio: 'xtxuwu',
			trigger: {
				player: 'phaseBefore',
			},
			charlotte: true,
			superCharlotte: true,
			forced: true,
			async content(event, trigger, player) {
				trigger.phaseList = lib.skill.xtxuwu.phaseList;
			},
		},
		xtanshang: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			trigger: {
				player: 'useCardToPlayered',
				target: 'useCardToTargeted',
			},
			forced: true,
			filter(event, player) {
				return event.card.name == 'sha' && get.color(event.card) == 'black';
			},
			async content(event, trigger, player) {
				player.gain(lib.card.ying.getYing(1), 'gain2').animate = false;
				for (var i of trigger.targets) {
					if (i.countCards('h') < trigger.player.countCards('h')) {
						i.gainPlayerCard(trigger.player, 'h', '黯殇:获得对方的一张手牌', true);
					} else if (i.countCards('h') > trigger.player.countCards('h')) {
						trigger.player.gainPlayerCard(i, 'h', '黯殇:获得对方的一张手牌', true);
					}
				}
			},
			ai: {
				effect: {
					target(card, player, target) {
						if (card.name != 'sha') return;
						if (player.countCards('h') - target.countCards('h') < 1) return [1, 0.6];
					},
					player(card, player, target) {
						if (card.name != 'sha') return;
						if (player.countCards('h') - target.countCards('h') != 1) return [1, 1.3];
					},
				},
			},
		},
		//砂金
		xtniming: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			init(player) {
				lib.character.hyyz_paidui = ['', '', Infinity, [], []];
				lib.translate.hyyz_paidui = '牌堆';
			},
			trigger: {
				player: ['judgeBegin'],
			},
			prompt(trigger, player) {
				var str = '';
				if (trigger.card) str = get.translation(trigger.card.viewAs || trigger.card.name);
				else if (trigger.skill) str = get.translation(trigger.skill);
				else str = get.translation(trigger.parent.name);
				return `逆命:即将进行${get.translation(trigger.player)}的${str}判定,是否与牌堆拼点？`;
			},
			filter(event, player) {
				return (ui.cardPile.childNodes.length > 1 && player.hasSkill('xtpoai') && game.hasPlayer((current) => current.countCards('ej'))) || player.countCards('h');
			},
			async content(event, trigger, player) {
				const result = await player.pileCompare().forResult();
				if (result.bool) {
					var cards = [result.player, result.target].filterInD('d');
					if (cards.length) {
						var str = '';
						if (trigger.card) str = get.translation(trigger.card.viewAs || trigger.card.name);
						else if (trigger.skill) str = get.translation(trigger.skill);
						else str = get.translation(trigger.parent.name);
						const { links } = await player
							.chooseButton([`###逆命:将一张牌置于牌堆顶###当前进行的是${str}判定`, cards], true)
							.set('ai', function (button) {
								var trigger = _status.event.getTrigger();
								var player = _status.event.player;
								if (trigger.name != 'judge') {
									var num = Math.abs(button.link.number - player.hp);
									return get.value(button.link) + num;
								} else {
									var result = trigger.judge(button.link);
									var att = get.attitude(player, trigger.player);
									if (att == 0 || result == 0) return 0;
									return att * result;
								}
							})
							.forResult();
						if (links) {
							var card = links[0];
							card.fix();
							ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
							game.updateRoundNumber();
							game.log(player, '将', card, '置于牌堆顶');
							//player.gain(cards.filter(i => i != card), 'gain2');
						} else {
							game.log(player, '没有将拼点牌置于牌堆顶');
						}
					}
				}
			},
			ai: {
				threaten: 2,
				expose: 0.8,
				tag: {
					rejudge: 1,
				},
			},
		},
		xtpoai: {
			audio: 'ext:忽悠宇宙/audio/skill:4',
			init() {
				//新增任何情况都可以拼点的标签//谨慎使用
				lib.element.player.canCompare = function (target, goon, bool) {
					if (this == target) return false;
					if ((!this.countCards('h') && goon !== true && !this.hasSkillTag('canCompareSource')) || (!target.countCards('h') && bool !== true && !target.hasSkillTag('canCompareTarget'))) return false;
					if (this.hasSkillTag('noCompareSource') || target.hasSkillTag('noCompareTarget')) return false;
					return true;
				};
			},
			trigger: {
				player: ['chooseToCompareBefore', 'compareMultipleBefore', 'pileCompareBefore'],
				target: ['chooseToCompareBefore', 'compareMultipleBefore'],
			},
			forced: true,
			filter(event, player) {
				if (event.preserve) return false;
				if (!game.hasPlayer((current) => current.countCards('ej'))) return false;
				return event.player == player || (event.target && event.target == player);
			},
			async content(event, trigger, player) {
				const { targets } = await player
					.chooseTarget(player.countCards('h') ? false : true, `破霭:${player.countCards('h') ? `是否用场上的一张牌拼点？` : '用场上的一张牌拼点'}`, (card, player, target) => {
						return target.countCards('ej');
					})
					.set('ai', (target) => {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						if (att > 0 && (target.countCards('j') > 0 || target.countCards('e', (card) => get.value(card, target) < 0))) return 2;
						if (att < 0 && target.countCards('e', (card) => card.number >= 11) > 0 && !target.hasSkillTag('noe')) return -1;
						return 0;
					})
					.forResult();
				if (targets) {
					const { links } = await player.choosePlayerCard('破霭:选择一张牌用于拼点', targets[0], 'ej', true).forResult();
					if (links) {
						targets[0].lose(links, ui.ordering, 'visible');
						if (!trigger.fixedResult) trigger.fixedResult = {};
						trigger.fixedResult[player.playerid] = game.cardsGotoOrdering(links).cards[0];
						trigger.xtpoai = targets[0];
					}
				}
			},
			group: 'xtpoai_draw',
			subSkill: {
				draw: {
					charlotte: true,
					forced: true,
					trigger: {
						player: ['chooseToCompareAfter', 'compareMultipleAfter', 'pileCompareAfter'],
						target: ['chooseToCompareAfter', 'compareMultipleAfter'],
					},
					filter(event, player) {
						if (event.preserve) return false;
						return true;
					},
					async content(event, trigger, player) {
						let target;
						if (trigger.xtpoai) {
							target = trigger.xtpoai;
						} else {
							if (trigger.name == 'pileCompareAfter') {
								target = player;
							} else {
								if (trigger.player == player) target = player;
								if (trigger.target == player) target = trigger.target;
							}
						}
						if (trigger.result.winner && trigger.result.winner == player) {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xtpoai5.mp3');
							let list = [];
							for (var i = 0; i < 6; i++) {
								if (player.hasEmptySlot('equip' + i)) list.add('equip' + i);
							}
							let card = get.cardPile((card) => get.subtype(card) == list.randomGet() && !get.cardtag(card, 'gifts') && player.canEquip(card, false));
							if (card) {
								player.$gain2(card);
								player.equip(card);
							}
						} else if (target.isIn()) {
							game.playAudio('../extension/忽悠宇宙/audio/skill/xtpoai6.mp3');
							player.give(player.getCards('he'), target, 'giveAuto');
						}
					},
				},
			},
			ai: {
				canCompareSource: true,
				canCompareTarget: true,
				skillTagFilter(player, tag, target) {
					if (tag == 'canCompareSource' || tag == 'canCompareTarget') {
						if (
							!game.hasPlayer((current) => {
								return current.countCards('ej') > 0;
							}) &&
							!player.countCards('h')
						)
							return false;
					}
				},
			},
		},
		xtqingzhi: {
			audio: 'ext:忽悠宇宙/audio/skill:2',
			enable: ['chooseToUse'],
			filter(event, player) {
				if (_status.currentPhase != player) return false;
				if (event.xtqingzhi || player.hasSkill('xtqingzhi2')) return false;
				for (var i of lib.inpile) {
					if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) return true;
				}
				return false;
			},
			hiddenCard(player, name) {
				return lib.inpile.some((name) => get.type(name) == 'trick');
			},
			chooseButton: {
				dialog(event, player) {
					var list = [];
					for (var i of lib.inpile) {
						if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) list.push(['锦囊', '', i]);
					}
					return ui.create.dialog('倾掷', [list, 'vcard']);
				},
				check(button) {
					return _status.event.player.getUseValue({ name: button.link[2] });
				},
				backup(links, player) {
					return {
						audio: 'xtqingzhi',
						viewAs: {
							name: links[0][2],
						},
						filterCard: () => false,
						selectCard: -1,
						popname: true,
						precontent() {
							'step 0';
							player.addTempSkill('xtqingzhi2');
							player
								.judge('倾掷', function (card) {
									if (card.suit == 'spade') return -2;
									return 2;
								})
								.set('judge2', (result) => !result.bool);
							('step 1');
							if (!result.bool) {
								let num;
								if (!player.storage.xtqingzhi) player.storage.xtqingzhi = 0;
								num = player.storage.xtqingzhi + 1;
								player.storage.xtqingzhi = num;
								player.damage(num, 'thunder', 'nocard', 'nosource');
								var evt = event.parent;
								evt.set('xtqingzhi', true);
								evt.goto(0);
								return;
							} else {
								var cards = event.result.cards;
								event.result.card = {
									name: event.result.card.name,
									nature: event.result.card.nature,
								};
								event.result.cards = cards;
							}
						},
					};
				},
				prompt(links, player) {
					return `请选择${get.translation(links[0][2])}的目标`;
				},
			},
			ai: {
				order: 8,
				result: {
					player: 1,
				},
			},
		},
		xtqingzhi2: {
			charlotte: true,
		},
	};
	hyyz.translate = {
		hyyz_hyyz: '忽悠宇宙',
		hyyz_hyyz_info: '锁定技,回合开始时,你失去所有其他技能并[净化],将一张武将牌替换为<忽悠宇宙>扩展中的随机武将,并将任一阶段插入到本回合的一个阶段后.',
		xt_jingyuan: '景元',
		xtshenjun: '神君',
		xtshenjun_info: '锁定技,当你使用或打出基本/锦囊/装备牌时,〖神君〗增加1/2/3段(至多10段).',
		xtzhankan: '斩勘',
		xtzhankan_info: '锁定技,出牌阶段开始时,你减少三段〖神君〗并对一名其他角色造成1点雷电伤害,重复此流程.',
		xtshence: '神策',
		xtshence_info: '主公技,锁定技.游戏开始时,场上每有一名星铁势力的角色,〖神君〗增加1段.',
		xt_qingque: '青雀',
		xtqiongyu: '琼玉牌',
		xtqiongyu_info: '',
		xtlaoyue: '捞月',
		xtlaoyue_info: '你可以于{每回合开始时/出牌阶段弃置一张牌},将牌堆顶的一/二张牌加入<琼玉牌>.',
		xtmenqing: '门清',
		xtmenqing_info: '你可以将一张<琼玉牌>当无距离限制的【杀】使用或打出.',
		xtangang: '暗杠',
		xtangang_info: '锁定技,当你〖捞月〗后,将<琼玉牌>弃置至四张.若<琼玉牌>为四张类型相同的牌,弃置所有<琼玉牌>并对一名其他角色造成两点伤害.',
		xt_bailu: '白露',
		xtleiyin: '雷音',
		xtleiyin_info: '出牌阶段,你可以弃置一张牌并令一名角色执行所有选项,此技本回合弃置牌数+1且删除首项:</br>1.获得〖生息〗.2.回复1点体力.3.摸一张牌.',
		xtshengxi: '生息',
		xtshengxi_info: '锁定技,转换技.你受到伤害后,阳:回复1点体力;阴:摸一张牌并失去此技.</br>当你获得/失去此技时加/减1点体力上限.',
		xtxuanhu: '悬壶',
		xtxuanhu_info: '限定技,一名其他角色进入濒死时,你可以令其将体力值回复至2点.',
		xt_luocha: '罗刹',
		xtzanghua: '葬花',
		xtzanghua_info: '转换技.</br>阳:当一名角色的体力值扣减至体力上限的一半或更低后,你可以令其[净化]并回复2点体力.</br> 阴:准备阶段,你可以令一名其他角色本回合非锁定技无效,弃置其装备区和手牌区各一张牌.',
		xtlunzhuan: '轮转',
		xtlunzhuan_info: '锁定技,你不能成为延时类锦囊牌的目标.当你累计发动两次<葬花>后,令一名角色获得〖黑渊〗或〖白花〗.',
		xtheiyuan: '黑渊',
		xtheiyuan_info: '锁定技,你下次受到伤害后,失去1点体力,罗刹摸一张牌.',
		xtbaihua: '白花',
		xtbaihua_info: '锁定技,你下次造成伤害后,回复1点体力,罗刹摸一张牌.',
		xt_waerte: '瓦尔特',
		xtduanjie: '断界',
		xtduanjie_info: '锁定技,当你使用【杀】指定目标后,令目标角色[禁锢].',
		xtshenpan: '审判',
		xtshenpan_info: '你对其他角色造成伤害后,你可以令其[减速].被[禁锢]的角色的牌因弃置进入弃牌堆后,你获得其中一张牌,你可以对其使用此牌.',
		xt_yinlang: '银狼',
		xthuiya: '绘鸦',
		xthuiya_info: '出牌阶段限一次,当你使用牌指定其他角色为目标后,若其没有[涂鸦],你可以令其获得[涂鸦]且此牌不能被响应.',
		hyyzBuff_tuya: '涂鸦',
		xtruqin: '入侵',
		xtruqin_info: '回合外,你可以将有[涂鸦]的角色的手牌当你的手牌使用或打出.',
		xtfengjin: '封禁',
		xtfengjin_info: '当你造成伤害后,你可以令受伤角色获得[减速]、[虚弱]或[重伤].',
		xt_jizi: '姬子',
		xtzhuiji: '追击',
		xtzhuiji_info: '当你受到伤害/造成伤害后,你可以弃置受伤角色装备区内的一张牌.',
		xtxinghuo: '星火',
		xtxinghuo_info: '锁定技,一名角色的装备牌因弃置进入弃牌堆后,你选择一项:</br>1.令该角色[灼烧].</br>2.将这些牌置于武将牌上并摸一张牌.</br>若该角色为你,你回复1点体力.',
		xttianhuo: '天火',
		xttianhuo_info: '觉醒技,准备阶段,若你武将牌上至少有三张<星火>牌,你减1点体力上限并获得〖红莲〗.',
		xthonglian: '红莲',
		xthonglian_info: '出牌阶段每名角色限一次,你可以展示一名角色的一张手牌,你可以弃置<星火>牌中与此牌花色相同的牌并对其造成1点火焰伤害.',
		xt_ren: '刃',
		xtzhuchou: '诛雠',
		xtzhuchou_info: '准备阶段,令一名其他角色与你获得〖仇雠〗直到一方死亡.',
		xtchouchou: '仇雠',
		xtchouchou_info: '锁定技.若存在有〖仇雠〗且体力值大于你的角色,你的红色基本牌视为只能对其使用的【决斗】.',
		xthuiduo: '隳堕',
		xthuiduo_info: '锁定技,你没有判定区,且进入濒死状态改为获得<隳>.你造成伤害后,回复等量体力;回合结束后,若你的体力值小于1,你死亡.',
		xttushang: '荼殇',
		xttushang_info: '锁定技,每回合限三次,你造成或受到1点伤害后,摸一张牌(不计入手牌上限).',
		b3_hua: '华',
		b3cunjin: '寸劲',
		b3cunjin_info: '当你使用牌后,你可以弃置一张牌;</br>当你弃置牌后,你可以摸一张牌;</br>当你获得牌后,你可以使用一张牌.',
		b3shenyin: '神音',
		b3shenyin_info: '锁定技,当你使用牌后,若本回合使用牌的类型数等于体力上限,你加1点体力上限;你改变体力上限后,回复1点体力.',
		b3fusheng: '浮生',
		b3fusheng_info: '锁定技,你跳过出牌阶段;你令其他角色进入濒死时,或其他角色令你进入濒死时,你将体力上限减至1.',
		xt_bronya: '布洛妮娅',
		xtceli: '策励',
		xtceli_info: '回合结束后,若你本回合未进行<span class=firetext>判定</span>/<span class=thundertext>摸牌</span>/<span class=yellowtext>使用牌</span>/<span class=greentext>弃置牌</span>,你可令一名其他角色[净化]并摸X张牌(X为你满足的条件数),该角色依次执行<span class=firetext>判定</span>/<span class=thundertext>摸牌</span>/<span class=yellowtext>出牌</span>/<span class=greentext>弃牌</span>阶段.',
		xtchuxin: '初心',
		xtchuxin_info: '锁定技,当你受到伤害时,若你本回合未失去过牌,防止此伤害;否则,从牌堆中获得与失去牌等量且类型相同的牌.',
		xt_sushang: '素裳',
		xtmengdong: '懵懂',
		xtmengdong_info: '锁定技,你的普通锦囊牌视为无距离限制的【杀】.',
		xtruoming: '若明',
		xtruoming_info: '当你非因〖恍悟〗使用【杀】时,你可以将牌堆顶的牌和一张手牌加入实体牌.',
		xthuangwu: '恍悟',
		xthuangwu_info: '锁定技,你非因〖恍悟〗使用【杀】后,对其中的实体牌依次执行首个可被执行的选项:</br>1.对目标角色使用.</br>2.对自己使用.</br>3.获得之.',
		xt_danhengyinyue: '丹恒·饮月',
		xtnilin: '逆鳞',
		xtnilin_info: "你可以观看并在<span class='thundertext'>牌堆顶三张牌和手牌</span>中选择三张当任意【杀】使用或打出.</br>此【杀】无距离限制,目标上限为X且你摸X张牌,X为此【杀】包含的手牌数.",
		//xtpanna: "盘拏",
		//"xtpanna_info": "锁定技,你使用〖逆鳞〗【杀】无距离限制,且目标上限为此【杀】包含的手牌数.",
		//xtpanna2: "盘拏",
		//"xtpanna2_info": "",
		xtwangtu: '亡途',
		xtwangtu_info: '锁定技,当你成为一张牌的目标后,本轮其他角色计算与你的距离+1.',
		b3_kaiwen: '凯文',
		b3qishuang: '欺霜',
		b3qishuang_info: '锁定技,你造成的普通伤害视为冰属性(若你已装备<天火圣裁>,则改为火属性).',
		b3shenghen: '圣痕',
		b3shenghen_info: '出牌阶段限一次,选择任意体力值不同的其他角色,这些角色选择一项:1.使用一张非装备牌且你获得之;2.你回复1点体力并视为对其使用【杀】;3.翻面.',
		b3jiushi: '救世',
		b3jiushi_info: '觉醒技.一名角色死亡后,若至少有一半的角色阵亡,你将体力上限改为所有角色的体力上限之和,势力改为神,装备【天火圣裁】并获得〖业魔〗.',
		b3yemo: '业魔',
		b3yemo_info: '锁定技,准备阶段,你装备【天火圣裁】. 当你造成伤害时,此伤害值加X且你减X点体力上限(X为你本回合造成伤害的次数).当你受到伤害或失去体力时,改为减体力上限.',
		xt_kaituozhe: '开拓者',
		xtkaituo: '开拓',
		xtkaituo_info: '锁定技,你使用牌无距离限制;游戏开始时,或一名角色死亡后,你重新选择命途.',
		xtkaituo_append: '<span class="text" style="font-family: yuanli">命途技能:<br>毁灭:〖舍命〗、〖毁灭〗</br>存护:〖存护〗、〖众望〗</span>',
		xtkaituo_faq: '命途技能',
		xtkaituo_faq_info: '毁灭:〖舍命〗、〖毁灭〗</br>存护:〖存护〗、〖众望〗',
		xtsheming: '舍命',
		xtsheming_info: '出牌阶段限一次,你可以令一名其他角色和你依次选择弃置两张牌,或受到对方造成的1点伤害.若弃置的牌花色各不相同,你摸两张牌;若弃置了四张牌,此技视为未发动过.',
		xthuimie: '毁灭',
		xthuimie_info: '锁定技,每回合限一次.当你受到伤害时,若伤害值为你体力值的倍数,此伤害-1.',
		xtxinsheng: '新生',
		xtxinsheng_info: '限定技.当你需要使用基本牌时,你可以获得x枚护甲,视为使用一张基本牌.X为场上已受伤的角色数.',
		xtcunhu: '存护',
		xtcunhu_info: '结束阶段,你可以选择一名其他角色并将装备区内的牌移动给该角色.若如此做,你们将护甲补充至1,摸对方装备区内牌数张牌.',
		xtzhongwang: '众望',
		xtzhongwang_info: '限定技.出牌阶段,你可以为每个空装备栏随机置入一张场上对应的装备牌,对一名其他角色造成1点火焰伤害.',
		xt_jingliu: '镜流',
		xtfeiguang: '飞光',
		xtfeiguang_info: '转换技,</br>阳:每回合限一次,你可以将一张牌当不计入次数的冰【杀】使用或打出.</br>阴:你受到伤害后须弃置所有黑色手牌,获得四张与弃置牌颜色不同的基本牌.',
		xtzhuanpo: '转魄',
		xtzhuanpo_info: '转换技.</br>阳:你使用【杀】指定目标后,可以对自己或曾对其造成过伤害的角色造成1点伤害并令此【杀】不可被响应.</br>阴:你发动〖飞光〗时不消耗手牌.',
		xt_huohuo: '藿藿',
		xtqienuo: '怯懦',
		xtqienuo_info: '锁定技,当你使用基本牌时,或其他角色对你使用普通锦囊牌时,若此牌目标唯一,目标角色成为此牌的使用者.',
		xtqushen: '驱神',
		xtqushen_info: '每回合限一次.当一名角色使用基本牌或普通锦囊牌指定自己为唯一目标时,你可以弃置一张牌并为此牌增加一个目标.若此牌为基本牌,目标角色[净化];否则,此牌不能被【无懈可击】响应.',
		xtsuiyang: '岁阳',
		xtsuiyang_info: '限定技,出牌阶段,你可以获得一张基本牌,失去1点体力.每回合结束时,若你没有〖岁阳〗牌,从牌堆获得之.',
		xtsuiyang_buff: '',
		xtsuiyang_buff_info: '',
		xt_ruanmei: '阮·梅',
		xtpeiyu: '培育',
		xtpeiyu_info: '出牌阶段限一次,你可以清除场上的造物,在父母本中各选一项并进行判定.若结果为黑/红色,令父/母本中的数字+1.你将以上组合为技能〖造物〗并令一名角色获得之.</br><span class="text" style="font-family: yuanli">父本:</br>①锁定技,每回合限1次.你获得牌后,</br>②锁定技,每回合限1次.你受到伤害后,</br>③锁定技,每回合限1次.你造成伤害后,</br>母本:</br>①摸2张牌.</br>②回复1点体力.</br>③对一名其他角色造成1点伤害.</span>',
		xtnicha: '匿察',
		xtnicha_info: '锁定技,其他角色发动〖造物〗后,你执行未组成此〖造物〗的其他母本.',
		xt_yinzhi: '银枝',
		xtxinyang: '信仰',
		xtxinyang_info: '锁定技,你不因此法获得牌时,改为摸两张牌;你于回合外不因此法失去牌时,改为弃一张牌.',
		xtximei: '惜美',
		xtximei_info: '每回合限一次.你攻击范围内的其他角色受到伤害时,你可以改为对伤害来源或该角色视为使用【决斗】.结算结束后,因此打出过【杀】的角色摸一张牌,体力值最低的角色回复1点体力.',
		xt_zhenliyisheng: '真理医生',
		xtbianbo: '辩驳',
		xtbianbo_info: '每回合限一次,一名角色仅对你使用牌时,你可以与其拼点.</br>若你赢,其选择令此牌无效,或受到你造成的1点伤害.</br>若你没赢,不能响应此牌并〖归纳〗之.',
		xtguina: '归纳',
		xtguina_info: "锁定技.你每轮第N次<span class='bluetext'>成为一种牌的目标</span>/<span class='legendtext'>使用一种牌指定目标</span>后,若不为第一次,你<span class='bluetext'>摸N张牌</span>/<span class='legendtext'>此牌结算N次</span>.",
		b3_jizi: '姬子',
		b3xiepin: '血拼',
		b3xiepin_info: '转换技.若你不处于濒死状态,其他角色对你使用牌时,你可以:</br>阳:不响应此牌并获得之.</br>阴:获得该角色一张牌.',
		b3poxiao: '破晓',
		b3poxiao_info: "锁定技,每回合各限一次.</br>当你获得其他角色的<span class='firetext'>红色</span>/<span class='thundertext'>黑色</span>牌后,你对一名角色<span class='firetext'>视为使用火【杀】</span>/<span class='thundertext'>使用此牌</span>.",
		b3huozhong: '火种',
		b3huozhong_info: '限定技.其他角色进入濒死时,你可以交换你们的体力值.若你因此死亡,该角色获得你武将牌上的一个技能.',
		xt_huahuo: '花火',
		xtjiaoshi: '矫饰',
		xtjiaoshi_info: '每回合限一次,你可以将一张使用过的牌,当其他角色使用过的基本牌或普通锦囊牌使用或打出.',
		xtkehun: '科诨',
		xtkehun_info: '你使用或打出转化牌后摸一张牌.若你使用其他牌转化过此牌的一张底牌,令一名座次靠后的角色获得一个仅有出牌阶段的回合.',
		xtjiamian: '假面',
		xtjiamian_info: '锁定技.回合外,你手牌中成为过转化牌底牌的牌,视为其最后一次成为底牌时转化的牌.',
		xt_huangquan: '黄泉',
		xtlunshi: '沦逝',
		xtlunshi_info: '锁定技,其他角色获得你的牌后,观看你的手牌.若你手牌中的【影】多于其,你对其造成1点雷电伤害.',
		xtxuwu: '虚无',
		xtxuwu_info: '锁定技,一名角色进入濒死状态时,其获得【崩坏】.若该角色为你,你删除一个阶段并重排剩余阶段,失去武将牌上的一种信息并获得一枚勾玉.',
		xtanshang: '黯殇',
		xtanshang_info: '锁定技,当你指定或成为黑色【杀】的目标后,获得一张【影】,手牌较少的一方获得对方的一张手牌.',
		xt_shajin: '砂金',
		xtniming: '逆命',
		xtniming_info: '当你进行判定前,你可以与牌堆拼点.若你赢,须将一张拼点牌置于牌堆顶.',
		xtpoai: '破霭',
		xtpoai_info: '锁定技,你可以使用场上的牌拼点.当你拼点赢后,随机使用一张装备牌;若你拼点没赢,将你的所有牌交给提供拼点牌的角色.',
		xtqingzhi: '倾掷',
		xtqingzhi_info: '出牌阶段限一次,你可以执行【浮雷】判定.若判定失败,视为使用任意一张锦囊牌.',
	};
	for (var i in hyyz.character) {
		hyyz.character[i][4].push(`ext:忽悠宇宙/image/character/${i}.jpg`);
		if (hyyz.character[i][4].length && !hyyz.character[i][4].some((ele) => ele.length > 4 && ele.slice(0, 4) == 'die:')) hyyz.character[i][4].push(`die:ext:忽悠宇宙/audio/skill/${i}.mp3`); //阵亡语音载入
		if (i.includes('xt_re_')) {
			if (hyyz.translate[i]) hyyz.translate[i] = '界' + hyyz.translate[i];
			hyyz.translate[`${i}_prefix`] = '界';
		}
	}
	hyyz.perfectPair = {};
	lib.config.characters.add('hyyz');
	lib.config.all.characters.add('hyyz');
	lib.translate['hyyz_character_config'] = `<img src="extension/忽悠宇宙/image/hyyz.png" width="76" height="22">`;
	return hyyz;
});

'use strict';
console.log('载入derive/buff.js')
//——————————————————————————————————————————本体buff——————————————————————————————————————————//
window.hyyzImport(function (lib, game, ui, get, ai, _status) {
	//感谢 寰宇星城 的技术支持,学习及灵感来源为<玄武江湖>
	//——————————————————————————————————————————全局buff——————————————————————————————————————————//
	lib.translate.hyyzBuff = "";
	lib.translate.hyyzBuff_info = "";
	//——————————————————————————————————————————库——————————————————————————————————————————//
	lib.hyyzBuff = {
		//负面
		hyyzBuff_zhongshang: "重伤",
		hyyzBuff_xuruo: "虚弱",
		hyyzBuff_jiansu: "减速",
		hyyzBuff_jingu: "禁锢",
		hyyzBuff_jiuchan: "纠缠",
		hyyzBuff_dongjie: "冻结",
		//dot
		hyyzBuff_zhuoshao: "灼烧",
		hyyzBuff_chudian: "触电",
		hyyzBuff_lieshang: "裂伤",
		hyyzBuff_fenghua: "风化",
		//正面
		hyyzBuff_jiasu: "加速",
	};
	/**
	 * 其他效果:
	 * 真理医生-hyyzBuff_duanjian:智者的短见:无效果,每轮结束移除
	 * 银狼-hyyzBuff_tuya:涂鸦:效果:不能响应与装备区内牌花色相同的牌.
	 * 
	 */
	//——————————————————————————————————————————效果执行——————————————————————————————————————————//
	//buff
	lib.translate.hyyzBuff_jiasu = "加速";
	lib.skill.hyyzBuff_jiasu = {
		type: 'buff',
		mark: true,
		marktext: "⏩",
		name: "加速",
		description: "增益效果:回合开始时,为摸牌阶段后插入一个出牌阶段.",
		intro: {
			name: "加速",
			content: "增益效果:回合开始时,为摸牌阶段后插入一个出牌阶段.",
		},
	};
	lib.skill._hyyzBuff_jiasu = {
		forced: true,
		charlotte: true,
		priority: Infinity,
		popup: false,
		name: '加速',
		trigger: {
			player: "phaseBegin",
		},
		filter(event, player) {
			return player.hashyyzBuff('hyyzBuff_jiasu') && event.phaseList.some(a => a.startsWith('phaseDiscard'));
		},
		content() {
			game.log(player, '#r[加速]');
			player.removehyyzBuff('hyyzBuff_jiasu');
			let str = trigger.phaseList.filter(a => {
				return a.startsWith('phaseDiscard');
			})[0];
			let num = trigger.phaseList.indexOf(str);
			num = num - 1 < 0 ? 0 : num - 1;
			trigger.phaseList.splice(num, 0, 'phaseUse');
		},
	};
	//debuff
	lib.translate.hyyzBuff_zhongshang = "重伤";
	lib.skill.hyyzBuff_zhongshang = {
		forced: true,
		charlotte: true,
		type: 'debuff',
		mark: true,
		marktext: "🔺",
		name: "重伤",
		description: "效果:下次受到的伤害+1.",
		intro: {
			name: "重伤",
			content: "效果:下次受到的伤害+1.",
		},
	};
	lib.skill._hyyzBuff_zhongshang = {
		forced: true,
		charlotte: true,
		priority: Infinity,
		popup: false,
		name: '重伤',
		trigger: {
			player: "damageBegin4",
		},
		filter(event, player) {
			return player.hashyyzBuff('hyyzBuff_zhongshang');
		},
		content() {
			game.log(player, '因', '#r[重伤]', '伤害+1');
			trigger.num++;
			player.removehyyzBuff('hyyzBuff_zhongshang');
		},
		ai: {
			threaten: 4,
		},
	};
	lib.translate.hyyzBuff_xuruo = "虚弱";
	lib.skill.hyyzBuff_xuruo = {
		forced: true,
		charlotte: true,
		type: 'debuff',
		mark: true,
		marktext: "🔻",
		name: "虚弱",
		description: "效果:下次造成的伤害-1.",
		intro: {
			name: "虚弱",
			content: "效果:下次造成的伤害-1.",
		},
	};
	lib.skill._hyyzBuff_xuruo = {
		forced: true,
		charlotte: true,
		priority: Infinity,
		popup: false,
		name: '虚弱',
		trigger: {
			source: "damageBegin4",
		},
		filter(event, player) {
			return player.hashyyzBuff('hyyzBuff_xuruo');
		},
		content() {
			game.log(player, '因', '#r[虚弱]', '伤害-1');
			trigger.num--;
			player.removehyyzBuff('hyyzBuff_xuruo');
		},
	};
	lib.translate.hyyzBuff_jiansu = "减速";
	lib.skill.hyyzBuff_jiansu = {
		forced: true,
		charlotte: true,
		type: 'debuff',
		mark: true,
		marktext: "⏪",
		name: "减速",
		description: "效果:回合开始时,若此回合有出牌阶段和结束阶段,交换首次出现的出牌阶段和结束阶段.",
		intro: {
			name: "减速",
			content: "效果:回合开始时,若此回合有出牌阶段和结束阶段,交换首次出现的出牌阶段和结束阶段.",
		},
	};
	lib.skill._hyyzBuff_jiansu = {
		forced: true,
		charlotte: true,
		priority: -Infinity,
		popup: false,
		name: '减速',
		trigger: {
			player: "phaseBegin",
		},
		filter(event, player) {
			if (!player.hashyyzBuff('hyyzBuff_jiansu')) return false;
			return event.phaseList && event.phaseList.length >= 2 && event.phaseList.some(a => a.startsWith('phaseUse')) && event.phaseList.some(a => a.startsWith('phaseJieshu'))
		},
		content() {
			game.log(player, '#r[减速]');
			player.removehyyzBuff('hyyzBuff_jiansu');
			let str1 = trigger.phaseList.filter(a => {
				return a.startsWith('phaseUse')
			})[0];
			let num1 = trigger.phaseList.indexOf(str1);
			let str2 = trigger.phaseList.filter(a => {
				return a.startsWith('phaseJieshu')
			})[0];
			let num2 = trigger.phaseList.indexOf(str2);
			trigger.phaseList[num1] = 'phaseJieshu';
			trigger.phaseList[num2] = 'phaseUse';
		},
	};
	lib.translate.hyyzBuff_jingu = "禁锢";
	lib.skill.hyyzBuff_jingu = {
		forced: true,
		charlotte: true,
		type: 'debuff',
		mark: true,
		marktext: "🎇",
		name: "禁锢",
		description: "效果:使用的下一张牌无效.",
		intro: {
			name: "禁锢",
			content: "效果:你使用的下一张牌无效.",
		},
	};
	lib.skill._hyyzBuff_jingu = {
		forced: true,
		charlotte: true,
		priority: Infinity,
		popup: false,
		name: '禁锢',
		trigger: {
			player: "useCard",
		},
		filter(event, player) {
			return player.hashyyzBuff('hyyzBuff_jingu')
		},
		content() {
			'step 0'
			game.log(player, '因', '#r[禁锢]', trigger.card, '无效')
			trigger.all_excluded = true;
			trigger.targets.length = 0;
			'step 1'
			player.removehyyzBuff('hyyzBuff_jingu')
		},
	};
	lib.translate.hyyzBuff_jiuchan = "纠缠";
	lib.skill.hyyzBuff_jiuchan = {
		forced: true,
		charlotte: true,
		type: 'debuff',
		mark: true,
		marktext: "➿",
		name: "纠缠",
		description: "效果:下次成为即时牌的目标后,重铸一张与之同类型的牌,否则此牌结算两次.",
		intro: {
			name: "纠缠",
			content: "效果:下次成为即时牌的目标后,重铸一张与之同类型的牌,否则此牌结算两次.",
		},
	};
	lib.skill._hyyzBuff_jiuchan = {
		forced: true,
		charlotte: true,
		priority: Infinity,
		popup: false,
		name: '纠缠',
		trigger: {
			target: 'useCardToTargeted',
		},
		filter(event, player) {
			if (!player.hashyyzBuff('hyyzBuff_jiuchan')) return false;
			return get.type(event.card) != 'delay' && get.type(event.card) != 'equip';
		},
		async content(event, trigger, player) {
			const { cards } = await player.chooseCard(`纠缠:重铸一张${get.translation(get.type2(trigger.card))}牌,否则${get.translation(trigger.card)}结算两次`, function (card) {
				return get.type2(card) == _status.event.typex;
			})
				.set('typex', get.type2(trigger.card))
				.set('ai', (card) => 8 - get.value(card) && !game.canToRespend([card, trigger.card])).forResult();
			if (cards) {
				game.log(trigger.player, '因', '#r[纠缠]', player, '重铸了', cards);
				player.recast(cards)
			} else {
				game.log(trigger.player, '因', '#r[纠缠]', trigger.card, '结算两次');
				trigger.parent.effectCount++;
			}
			player.removehyyzBuff('hyyzBuff_jiuchan', 1);
		},
	}
	lib.translate.hyyzBuff_dongjie = "冻结";
	lib.skill.hyyzBuff_dongjie = {
		forced: true,
		charlotte: true,
		type: 'debuff',
		mark: true,
		marktext: "❄",
		name: "冻结",
		description: "效果:直到回合结束,不能使用、打出或弃置牌.",
		intro: {
			name: "冻结",
			content: "效果:直到回合结束,不能使用、打出或弃置牌.",
		},
	};
	lib.skill._hyyzBuff_dongjie = {
		forced: true,
		charlotte: true,
		priority: Infinity,
		popup: false,
		name: '冻结',
		trigger: {
			global: ["phaseEnd"],
		},
		filter(event, player) {
			return player.hashyyzBuff('hyyzBuff_dongjie');
		},
		content() {
			game.log(player, '的', '#r[冻结]', '解除');
			player.removehyyzBuff('hyyzBuff_dongjie');
		},
		mod: {
			"cardEnabled2"(card, player) {
				if (player.hashyyzBuff('hyyzBuff_dongjie') && get.position(card) == 'h') return false;
			},
			cardDiscardable(card, player) {
				if (get.position(card) == 'h' && player.hashyyzBuff('hyyzBuff_dongjie')) return false;
			},
		},
	};
	//dot
	lib.translate.hyyzBuff_zhuoshao = '灼烧';
	lib.skill.hyyzBuff_zhuoshao = {
		forced: true,
		charlotte: true,
		type: 'dot',
		maxdot: 5,
		bang(player) {
			game.log(player, '引爆了', '#r[灼烧]');
			//player.damage(1, 'fire', 'nosource').set('dotDebuff', 'hyyzBuff_zhuoshao');
			if (!player.storage._hyyz_fireCard) player.storage._hyyz_fireCard = [];
			let cards = [];
			if (player.countCards('h')) cards.push(player.getCards('h').randomGet());
			if (player.countCards('e')) cards.push(player.getCards('e').randomGet());
			if (player.countCards('j')) cards.push(player.getCards('j').randomGet());
			player.addGaintag(cards, '_hyyz_fireCard');
			player.markAuto('_hyyz_fireCard', cards);
		},
		mark: true,
		marktext: "🔥",
		name: "灼烧",
		description: "dot(0/5)<b style=\"color: #ff6666\">随机[点燃]每个区域各一张牌</b>,[灼烧]-1并重复此操作.",
		intro: {
			name: "灼烧",
			content: "dot(#/5)<b style=\"color: #ff6666\">随机[点燃]每个区域各一张牌</b>,[灼烧]-1并重复此操作.",
		},
	};
	lib.skill._hyyzBuff_zhuoshao = {
		forced: true,
		charlotte: true,
		priority: Infinity,
		popup: false,
		name: '灼烧',
		trigger: {
			player: "addhyyzBuffEnd",
		},
		filter(event, player) {
			return player.hashyyzBuff('hyyzBuff_zhuoshao');
		},
		async content(event, trigger, player) {
			if (!player.storage._hyyz_fireCard) player.storage._hyyz_fireCard = [];
			let cards = [];
			game.log(player, '#r[灼烧]', player.countDot('hyyzBuff_zhuoshao'));
			while (player.countDot('hyyzBuff_zhuoshao')) {
				await player.removehyyzBuff('hyyzBuff_zhuoshao', 1);
				if (player.countCards('h')) cards.push(player.getCards('h', card => !player.getStorage('hyyzBuff_zhuoshao').includes(card)).randomGet());
				if (player.countCards('e')) cards.push(player.getCards('e', card => !player.getStorage('hyyzBuff_zhuoshao').includes(card)).randomGet());
				if (player.countCards('j')) cards.push(player.getCards('j', card => !player.getStorage('hyyzBuff_zhuoshao').includes(card)).randomGet());
			};
			player.addGaintag(cards, '_hyyz_fireCard');
			player.markAuto('_hyyz_fireCard', cards);
		},
	};
	lib.translate.hyyzBuff_lieshang = '裂伤';
	lib.skill.hyyzBuff_lieshang = {
		forced: true,
		charlotte: true,
		type: 'dot',
		maxdot: 5,
		bang(player) {
			game.log(player, '引爆了', '#r[裂伤]');
			var num = 1;
			if (player.isMaxHp() || player.isMaxHandcard()) num = 2;
			player.damage(num, 'nosource').set('dotDebuff', 'hyyzBuff_lieshang');
		},
		mark: true,
		marktext: "🤕",
		name: "裂伤",
		description: "dot(0/5)使用牌指定目标后,若与其的距离大于当前体力值,<b style=\"color: #ff6666\">失去1点体力</b>,[裂伤]-1.",
		intro: {
			name: "裂伤",
			content: "dot(#/5)使用牌指定目标后,若与其的距离大于当前体力值,<b style=\"color: #ff6666\">失去1点体力</b>,[裂伤]-1.",
		},
	};
	lib.skill._hyyzBuff_lieshang = {
		forced: true,
		charlotte: true,
		priority: Infinity,
		popup: false,
		name: '裂伤',
		trigger: {
			player: "useCardToPlayered",
		},
		filter(event, player) {
			return player.hashyyzBuff('hyyzBuff_lieshang') && get.distance(player, event.target) > player.hp;
		},
		content() {
			//var num = 1;
			//if (player.isMaxHp() || player.isMaxHandcard()) num = 2;
			//game.log(player, '#r[裂伤]', num);
			player.removehyyzBuff('hyyzBuff_lieshang', 1);
			//player.damage(num, 'nosource').set('dotDebuff', 'hyyzBuff_lieshang');
			player.loseHp(1).set('dotDebuff', 'hyyzBuff_lieshang');
		},
	};
	lib.translate.hyyzBuff_fenghua = '风化';
	lib.skill.hyyzBuff_fenghua = {
		forced: true,
		charlotte: true,
		type: 'dot',
		maxdot: 5,
		bang(player) {
			let num = player.storage.hyyzBuff_fenghua;
			game.log(player, '引爆了', num > 0 ? (num + '层') : '', '#r[风化]');
			player.damage(num, 'hyyz_wind', 'nosource').set('dotDebuff', 'hyyzBuff_fenghua');
		},
		mark: true,
		marktext: "🌀",
		name: "风化",
		description: "dot(0/5)准备阶段,受到<b style=\"color: #ff6666\">与[风化]层数等量的无来源风蚀伤害</b>,移除[风化].",
		intro: {
			name: "风化",
			content: "dot(#/5)准备阶段,受到<b style=\"color: #ff6666\">与[风化]层数等量的无来源风蚀伤害</b>,移除[风化].",
		},
	};
	lib.skill._hyyzBuff_fenghua = {
		forced: true,
		charlotte: true,
		priority: Infinity,
		popup: false,
		name: '风化',
		trigger: {
			player: "phaseZhunbeiBegin",
		},
		filter(event, player) {
			return player.hashyyzBuff('hyyzBuff_fenghua');
		},
		content() {
			var num = player.storage.hyyzBuff_fenghua;
			game.log(player, '#r[风化]', num);
			player.removehyyzBuff('hyyzBuff_fenghua', num)
			player.damage(num, 'hyyz_wind', 'nosource').set('dotDebuff', 'hyyzBuff_fenghua');
		},
	};
	lib.translate.hyyzBuff_chudian = '触电';
	lib.skill.hyyzBuff_chudian = {
		forced: true,
		charlotte: true,
		type: 'dot',
		maxdot: 5,
		/* init (player, skill) {
			player.link(true);
		}, */
		bang(player) {
			game.log(player, '引爆了', '#r[触电]');
			player.damage(1, 'thunder', 'nosource').set('dotDebuff', 'hyyzBuff_chudian');
		},
		mark: true,
		marktext: "⚡",
		name: "触电",
		description: "dot(0/5)始终横置;使用或打出无目标的牌后受到<b style=\"color: #ff6666\">1点雷电伤害</b>,[触电]-1.",
		intro: {
			name: "触电",
			content: "dot(#/5)始终横置;使用或打出无目标的牌后受到<b style=\"color: #ff6666\">1点雷电伤害</b>,[触电]-1.",
		},
	};
	lib.skill._hyyzBuff_chudian = {
		forced: true,
		charlotte: true,
		priority: Infinity,
		popup: false,
		name: '触电',
		trigger: {
			player: ["useCardAfter", "respond", "linkBefore"]
		},
		filter(event, player) {
			if (!player.hashyyzBuff('hyyzBuff_chudian')) return false;
			switch (event.name) {
				case 'useCard': return !event.targets || !event.targets.length;
				case 'respond': return true;
				default: return player.isLinked();
			};
		},
		content() {
			switch (trigger.name) {
				case 'useCard':
				case 'respond': {
					game.log(player, '#r[触电]', 1);
					player.removehyyzBuff('hyyzBuff_chudian', 1);
					player.damage(1, 'thunder', 'nosource').set('dotDebuff', 'hyyzBuff_chudian');
					break;
				}
				default: {
					game.log('#r[触电]', player, '始终横置');
					trigger.cancel();
					break;
				}
			};
		},
	};
	//——————————————————————————————————————————以下为相关函数——————————————————————————————————————————//
	//如果不写<必须>内容,会返回undefined.默认的部分可以不写,会返回默认值.
	//字符串,获取type=(名字,是否合并dot和debuff)//严格类型
	//使用时:必须写库里的buff名.bool默认分三类
	get.hyyztype = function (buff, bool) {
		if (!bool) bool = false;//默认分离dot类型
		if (!buff || !lib.hyyzBuff[buff]) return;//不在库里不读取
		var info = get.info(buff);//获取buff技能的标签
		if (info) {
			if (info.type == 'dot' && bool == true) return 'debuff';//将dot并入debuff
			return info.type;//返回定义的类型
		}
		return;
	};
	//字符串,合并为两种debuff和buff类型//不严格类型
	//使用时:必须写库里的buff名
	get.hyyztype2 = (buff) => get.hyyztype(buff, true);//将dot并入debuff
	//数字,获取dot的最大层数,定义在buff技能组的maxdot后面
	//使用时,必须写库里的buff名且hyyztype必须为dot.若未定义,则返回1层.
	get.maxdot = function (buff) {
		if (!get.hyyztype(buff)) return;//有类型的前提下
		if (get.hyyztype(buff) == 'dot') {//如果是dot
			var info = get.info(buff);
			if (info) {//////////此处留个记录,只检测数字定义,否则返回1层
				if (info.maxdot && typeof info.maxdot == 'number') return info.maxdot;//返回定义的最大层数
				else return 1;//默认一层
			}
		}
		return;
	};
	//数字,获取当前dot层数
	//使用时,必须写库里的buff名且hyyztype必须为dot.dot大于0返回123,否则返回0
	lib.element.player.countDot = function (buff) {
		if (!buff || !lib.hyyzBuff[buff]) return;//空的就不存在
		var type = get.hyyztype(buff);//严格类型
		if (type != 'dot') return;//前提为dot
		if (typeof this.countMark(buff) == 'number') return this.countMark(buff);//返回标记的层数
		return;
	};
	//对象,获取角色的buff(boolean/'dot'/number=-1)//返回是类型+数量/布尔的对象
	//使用时,默认是所有buff.输入布尔,返回该类型的buff或层数;输入数字,返回全部;输入名字或dot同理
	lib.element.player.gethyyzBuff = function (buff) {
		if (!buff || !lib.hyyzBuff[buff] && buff != 'dot' || typeof buff == 'number') buff = -1;//默认/数字是-1(全部buff,包含增益、损益、dot)
		var map = {};//初始
		for (var i in lib.hyyzBuff) {
			if (this.hashyyzBuff(i)) {//如果有此buff(dot>0,技能存在)
				var type = get.hyyztype(i);//子类型
				switch (typeof buff) {
					case 'boolean': {//输入了true/false
						if (buff == false) {
							if (type == 'debuff') {//输入false,实际debuff
								map[i] = true;
							}
							if (type == 'dot') map[i] = this.countDot(i);//输入false,实际dot
						}
						else if (type == 'buff') map[i] = true;//输入不为false,实际buff
						break;
					}
					case 'number': {//输入数字或不输入,均返回全部
						map[i] = (type == 'dot' ? this.countDot(i) : true);
						break;
					}
					case 'string': {//如果是dot,返回所有dot层数
						if (buff == 'dot' && type == 'dot') {
							map[i] = this.countDot(i);
						};
						if (lib.hyyzBuff[buff]) map[i] = true;//具体名字,有
						break;
					}
					default: break;
				}
			}
		}
		return map;
	};
	//事件,获得某[效果]=function(效果,层数)
	//使用时,必须写库里的buff名,num默认1层(非dot不会读取的).
	lib.element.player.addhyyzBuff = function (buff, num) {
		if (!buff || !lib.hyyzBuff[buff]) return;//不在库里不考虑
		if (!num) num = 1;//默认给一层
		var event = game.createEvent('addhyyzBuff');
		event.set('buff', buff);
		event.set('num', num);
		event.set('player', this);
		event.setContent(function () {
			'step 0'
			this.trigger('addhyyzBuffBegin1');//改数量
			'step 1'
			this.trigger('addhyyzBuffBegin2');//改免疫
			'step 2'
			this.trigger('addhyyzBuffBegin');
			'step 3'
			if (this.player) {
				var buff = this.buff, num = this.num;
				var type = get.hyyztype(buff);
				if (type == 'dot') {//如果是dot
					var max = get.maxdot(buff);//查找上限
					var num = Math.min(max - this.player.countDot(buff), num);//返回施加层数差
					if (num > 0) {//可以施加
						game.log(this.player, '被施加', num, '层', '#r[' + lib.translate[buff] + ']');
						this.player.addMark(buff, num, false);
						if (buff == 'hyyzBuff_chudian') this.player.link(true);
					}//达到上限
					else game.log(this.player, '的', '#r[' + lib.translate[buff] + ']', '层数已达上限');
					if (this.player.countDot(buff)) this.player.markSkill(buff);
				} else {//普通buff就给个技能就行
					game.log(this.player, '被施加', '#r[' + lib.translate[buff] + ']');
					this.player.addSkill(buff);
					this.player.markSkill(buff);
				}
			}
			'step 4'
			this.trigger('addhyyzBuffEnd');
		});
		return event;
	};
	/**布尔,是否拥有某[效果]
	 * 
	 * @param {string|boolean|number} buff buff名/dot|正负面|层数
	 * @returns 
	 */
	//=function(名字/布尔表正负面/是否dot)
	//使用时,默认false.只返回true/false,可分辨正负面和dot
	lib.element.player.hashyyzBuff = function (buff) {
		if (!buff || !lib.hyyzBuff[buff] && buff != 'dot') return false;
		if (typeof buff == 'string' && buff != 'dot') {//buff名(不能为dot)
			if (get.hyyztype(buff) == 'dot') return this.countDot(buff) > 0;//dot保证层数
			return this.hasSkill(buff);//其他有技能
		}
		else if (buff == 'dot' || typeof buff == 'boolean') {//如果是dot/true/false
			for (let i in lib.hyyzBuff) {
				if (typeof buff == 'boolean') {//如果是true/false
					let type = get.hyyztype(i);//获得详细的类型
					//(输入false且类型为debuff				||输入true且类型为buff				)的同时,有对应的技能
					if ((buff == false && type == 'debuff' || buff == true && type == 'buff') && this.hasSkill(i)) return true;
					//输入false且类型为dot				且层数超过0
					if (buff == false && type == 'dot' && this.countDot(i)) return true;
				} else {
					//输入了dot.子类型必须和输入一致且层数达标
					if (get.hyyztype(i) == buff && this.countDot(i) > 0) return true;
				}
			}
		}
		return false;
	};
	/**布尔,是否有可被净化的项目
	 * 
	 * 判定区,置入弃牌堆
	 * 武将牌,复原*2
	 * this.hashyyzBuff(false)
	 */
	lib.element.player.canhyyzJinghua = function () {
		if (this.countCards('j') > 0) return true;//判定
		if (this.isTurnedOver()) return true;//翻面
		if (this.isLinked()) return true;//横置
		if (this.hashyyzBuff(false)) return true;//只会净化负面buff
		return false;
	};
	/**事件,净化
	 * 
	 * 判定区,置入弃牌堆
	 * 武将牌,复原*2
	 * this.removehyyzBuff(false)
	 */
	lib.element.player.hyyzJinghua = function () {
		var event = game.createEvent('hyyzJinghua');
		event.set('player', this);
		event.setContent(function () {
			'step 0'
			this.trigger('hyyzJinghuaBegin');
			'step 1'
			if (this.player && this.player.isIn()) {
				var target = this.player;
				var js = target.getCards('j', function (card) {
					return lib.filter.cardDiscardable(card, target, 'hyyzJinghua');
				});
				if (js.length > 0) {
					game.log(target, '#g通过[净化]解除了判定区的牌');
					target.loseToDiscardpile(js);
				} else game.log(target, '#g的判定区内没有牌');
				if (target.isTurnedOver() || target.isLinked()) {
					if (target.isTurnedOver()) target.turnOver();
					if (target.isLinked()) target.link();
					game.log(target, '#g通过[净化]复原了武将牌');
				} else game.log(target, '#g的武将牌不需要复原');
				target.removehyyzBuff(false, 10);
			} else {
				game.log('#g没有[净化]的对象');
				return;
				event.finish();
			}
			'step 2'
			this.trigger('hyyzJinghuaEnd');
		});
	};
	/**事件,移除[效果]
	 * 
	 * @param {boolean|string} buff 默认负面
	 * @param {number} num 默认一层
	 * @returns Begin End
	 * 
	 */
	lib.element.player.removehyyzBuff = function () {
		let buffs = [], num = 1;
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'string') {//字符-按dot分类
				if (arguments[i] == 'dot') {
					buffs = Object.keys(this.gethyyzBuff(arguments[i]));
				} else {
					buffs = [arguments[i]];
				}
			}
			else if (typeof arguments[i] == 'boolean') {//布尔-类型
				buffs = Object.keys(this.gethyyzBuff(arguments[i]));
			}
			else if (typeof arguments[i] == 'number') {//数字-层数
				num = arguments[i];
			}
		}
		var event = game.createEvent('removehyyzBuff');
		event.set('num', num);
		event.set('buffs', buffs);
		event.set('player', this);
		event.setContent(function () {
			'step 0'
			//this.trigger('removehyyzBuffBegin1');//移除状态前,可以更改附加的数量.
			'step 1'
			//this.trigger('removehyyzBuffBegin2');//移除状态时,可以直接取消.
			'step 2'
			this.trigger('removehyyzBuffBegin');
			'step 3'
			if (this.player) {
				var buffs = this.buffs;
				for (var buff of buffs) {
					if (get.hyyztype(buff) == 'dot') {
						let k = Math.min(this.player.countDot(buff), num);
						game.log(this.player, '移除了', k, '层', '#r[' + lib.translate[buff] + ']');
						this.player.removeMark(buff, k, false);
						if (!this.player.countDot(buff)) this.player.unmarkSkill(buff);
					} else {
						game.log(this.player, '移除了', '#r[' + lib.translate[buff] + ']');
						this.player.removeSkill(buff);
						this.player.unmarkSkill(buff);
					}
				}
			}
			'step 4'
			this.trigger('removehyyzBuffEnd');
		});
		return event;
	};
	/**事件,引爆
	 * 
	 * @param {undefined|string|Array} buff 全部引爆||引爆该dot||引爆这些dot---输入其他无返回
	 * @returns 
	 */
	lib.element.player.hyyzBang = function (buff) {
		const list = Object.keys(this.gethyyzBuff('dot'));
		if (!list) return;
		let buffs = [];
		if (!buff) buffs = list;//默认全部引爆
		if (typeof buff == 'string') {
			if (list.includes(buff)) buffs = [buff];//引爆单个dot
		} else if (Array.isArray(buff)) {
			buffs = list.filter(arr => buff.includes(arr));//引爆交集
		}
		if (!buffs) buffs = list;
		var event = game.createEvent('hyyzBang');
		event.set('buffs', buffs);
		event.set('player', this);
		event.setContent(function () {
			'step 0'
			this.trigger('hyyzBang');
			'step 1'
			var info = get.info(this.buffs.shift());
			info.bang(this.player);
			'step 2'
			if (this.buffs.length > 0) event.goto(1);
			'step 3'
			this.trigger('hyyzBangEnd');
		})
	};
});
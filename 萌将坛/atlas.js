
'use strict';
window.scqh_import(function (lib, game, ui, get, ai, _status) {
	var specialDescribe = {
		瞬发技: {
			name: '瞬发技',
			type: 'tag',
			color: '#C48888',
			info: ['瞬发技是一种特殊的技能.', '◆在战局中点击技能按钮后,需要执行一个游戏动作方可发动效果,如:摸牌、弃牌、使用牌、结算伤害.', '◆发动方式①:点击武将牌顶部的触屏按钮.', '◆发动方式②:技能页面(送花砸蛋的页面)对应技能下的按钮发动.'].join('</br></br>'),
		},
		联结技: {
			name: '联结技',
			type: 'tag',
			info: ['联结技是一种特殊的技能,视作瞬发技,简称UB.', '</br>◆根据当前使用的行动模式下的各种行为,获得或失去对应数额的技能值', '</br>◆行动模式①:', '(１)发动联结技——负1000', '(２)使用或打出牌——90', '(３)击杀其他角色——200', '(４)回合结束——90', '(５)受到伤害或流失体力——X／maxHp＊500', '</br>◆行动模式②(不能发动联结技):', '(１)发动联结技——0', '(２)使用或打出牌——负100', '(３)不变', '(４)不变', '(５)不变'].join('</br>'),
		},
		遗言技: {
			name: '遗言技',
			type: 'tag',
			color: '#c3f9ff',
			info: ['遗言技是一种特殊的技能.', '◆可以在阵亡状态生效.', '◆若描述中未声明准确的发动时机,则默认在角色阵亡时发动.'].join('</br></br>'),
		},
		闪击技: {
			name: '闪击技',
			type: 'tag',
			info: ['闪击技是一种特殊的技能.', '◆可以在出牌阶段的空闲时点发动.', '◆可以在响应其他角色使用的牌时发动(不包括无懈可击);若无其他技能或卡牌的效果介入,则此次响应结算视作失败.'].join('</br></br>'),
		},
		连击技: {
			name: '连击技',
			type: 'tag',
			info: ['连击技(Ｘ／Ｙ)是一种特殊的技能,同时具备转换技和升级技的特点.', '◆括号内的Ｘ代表连击技的初始等级,Ｙ代表连击技的最大等级.', '◆每使用一次连击技,便会升一级,当升至满级后,该技能于当前回合内失效.', '◆每个回合结束后,连击技均会重置至一级.'].join('</br></br>'),
		},
		战斗循环: {
			name: '战斗循环',
			type: 'tag',
			info: ['战斗循环是一种特殊的技能.', '◆你的准备阶段、判定阶段、摸牌阶段、出牌阶段、弃牌阶段、结束阶段结束时,或当你使用或打出的牌结算结束时,或当你发动战斗循环技能后,你获得１枚战斗循环标记(每个技能均独立计算).', '◆下角标数字:当你的标记数等于技能描述中的任意一个下角标数字时,你可以发动与之对应的技能.', '◆上角标数字:战斗循环标记上限,超过上限时重置标记数量.'].join('</br></br>'),
		},
		眼前: {
			name: '眼前',
			info: ['距离最近或在你的攻击范围内的其他角色.'].join('</br></br>'),
		},
		击飞: {
			name: '击飞',
			info: ['一种特殊的动作时机,被击飞的角色处于短暂的浮空状态;处于浮空状态的角色不能使用或打出手牌且非锁定技失效.'].join('</br></br>'),
		},
		技能值: {
			name: '技能值',
			color: '#b0d0e2',
			info: ['●技能值是一种特殊的施法资源,普遍用于发动联结技.'].join('</br>'),
		},
		技能提速: {
			name: '技能提速',
			color: '#b0d0e2',
			info: '一种特殊的属性,按百分比率提高技能值的回复量.',
		},
		围攻: {
			name: '围攻',
			color: '#C0C0C0',
			info: ['引用国战的阵法技概念,以【手谈】的阴阳状态取缔势力决定「围攻关系」.', '‌●队列‌:连续相邻的若干名(至少2名)势力相同的角色称为同一队列.', '●‌围攻关系‌:一名角色的上家和下家为两名势力相同的角色(且与该角色势力不同)时,该角色被「围攻」,称为「被围攻角色」,该角色的上家和下家称为「围攻角色」.'].join('</br></br>'),
		},
		队列: {
			name: '队列',
			color: '#C0C0C0',
			info: ['引用国战的阵法技概念,以【手谈】的阴阳状态取代势力决定「围攻关系」.', '‌●队列‌:连续相邻的若干名(至少2名)势力相同的角色称为同一队列.', '●‌围攻关系‌:一名角色的上家和下家为两名势力相同的角色(且与该角色势力不同)时,该角色被「围攻」,称为「被围攻角色」,该角色的上家和下家称为「围攻角色」.'].join('</br></br>'),
		},
		木五行牌: {
			name: '木五行牌',
			color: '#98fb98',
			info: ['五行牌是特指:①和五行相关的属性牌;②拥有五行生克属性的牌;③偏旁部首含有五行的牌.', '◆五行生克:需要开启【五行生克】扩展,或【萌将坛】扩展的五行生克按钮.'].join('</br></br>'),
		},
		水五行牌: {
			name: '水五行牌',
			color: '#c3f9ff',
			info: ['五行牌是特指:①和五行相关的属性牌;②拥有五行生克属性的牌;③偏旁部首含有五行的牌.', '◆五行生克:需要开启【五行生克】扩展,或【萌将坛】扩展的五行生克按钮.'].join('</br></br>'),
		},
		移动距离: {
			name: '移动距离',
			info: ['移动距离是一种代指改变距离的特殊名词,分<进>和<退>两种移动类型.', '◆进:①你计算与其他角色的距离时-X;②其他角色计算与你的距离时-X.', '◆退:①你计算与其他角色的距离时+X;②其他角色计算与你的距离时+X.'].join('</br></br>'),
		},
		圣者的数字: {
			name: '圣者的数字',
			color: 'yellow',
			info: ['◆游戏开始时,以１～１２的所有整数组成一个钟盘.', '◆当有角色使用或打出牌时,你记录此牌的点数.', '◆你于本局游戏内记录的第一个有效点数(钟盘上存在的数字),称为锚点.', '◆确定锚点后,你每记录一个点数,则将锚点代表的数字于钟盘上的位置的顺时针方向的下一个数字,改为新的锚点.', '◆如果锚点代表的数字是<font color = yellow>９</font>～<font color = yellow>１２</font>或<font color = yellow>３</font>～<font color = yellow>６</font>中的任意一个数字,且锚点记录的点数与之相同,则称之为<font color = yellow>圣者的数字</font>.'].join('</br></br>'),
		},
		圆环之理: {
			name: '圆环之理',
			color: '#FFAAD5',
			info: '圆环之理是Ａ～Ｋ的所有整数随机排列成的一个环形链表,位置连续且被记录的数字组成的弧线,称为圆环之弧.',
		},
		替身: {
			name: '替身',
			info: ['JOJO替身技能标签.', '▶︎替身使者在使用伤害牌或打出牌时,可以在武将牌上幻化出现替身.', '▶︎替身面板值普遍为Ｅ～Ａ(依次与数字１～５(＋)相对).', '▶︎替身的成长性若为Ａ,则具备隐藏的特殊能力,可以通过「觉醒」来获得新的能力.', '▶︎替身使者每次发动【强攻】和【专对】技能都会增加替身的一点疲劳度,替身使者不能使用疲劳度大于上限的替身.回复体力时,减少等量的疲劳度.', '★【强攻】——</br>▶' + get.translation('_scqhJojo_qianggong_info'), '★【专对】——</br>▶' + get.translation('_scqhJojo_zhuandui_info')].join('</br></br>'),
		},
		时停对策: {
			name: '时停对策',
			info: ['拥有在「时间静止的领域」中行动的能力'].join('</br></br>'),
		},
		时间静止的领域: {
			name: '时间静止的领域',
			info: ['时间静止的领域,一个特殊的出牌阶段,所有角色在此阶段内拥有下述效果:', '▶没有【时停对策】标签的角色不能使用或打出牌.', '▶没有【时停对策】标签的角色的非锁定技失效.', '▶没有【时停对策】标签的角色受到的伤害、流失的体力会取消结算,直到时间回复流动后,受到等额的无来源伤害.', '▶没有【时停对策】标签的角色对攻击范围内的没有【时停对策】标签的角色使用牌无距离和次数限制.'].join('</br></br>'),
		},
		决斗牌组: {
			name: '决斗牌组',
			info: '游戏开始时,拓印游戏王系列的牌各三张置于你的牌组中.',
		},
		决斗手牌: {
			name: '决斗手牌',
			info: '类似木牛流马的区域,决斗手牌上限基数为６.回合结束时,弃置Ｘ张决斗手牌(Ｘ为超过上限值的决斗手牌数).',
		},
		魅惑: {
			name: '魅惑',
			color: '#FFAAD5',
			info: '被魅惑的目标若不是施法者的上家或下家,则会向施法者靠近的方向移动一格座位;当无法判断方向时,默认为逆时针方向.',
		},
		TP消耗降低: {
			name: 'TP消耗降低',
			info: '<li><b>【TP消耗降低】</b>是一种特殊的属性,当你释放特殊技能<<font color = #FFAAD5>连结爆发</font>>时,按百分比减少TP值的消耗量.',
		},
		普通攻击: {
			name: '普通攻击',
			info: '目标角色须使用一张【闪】,否则你对其造成１点伤害.<br/><br/><li><b>特殊机制·属性</b>:<br/>普通攻击具有<物理>和<魔法>两种不同的属性.<br/><br/><li><b>特殊机制·暴击</b>:<br/>初始时的暴击率为０,你可以藉由武将技能或牌的效果提高暴击率,当你触发暴击后,普通攻击可以造成Ｘ倍的伤害(Ｘ为你的暴击伤害倍率,默认为２).<br/><br/><li><b>特殊机制·无双</b>:<br/>普通攻击需要目标使用Ｘ张【闪】才能抵消(Ｘ为技能描述右上角的角标数字,至少为１).指定多个目标时,任意目标使用一张【闪】后,接下来的目标需要使用【闪】的数量减１.',
		},
		护盾系统: {
			name: '护盾系统',
			info: '【屏障】是一种可以抵消伤害的特殊系统,也叫做【护盾】<br/><br/><li><b>特殊机制:属性</b>:<br/>❶【护盾】在抵消不同属性的攻击和伤害时,可以分成物理盾、魔法盾、物理魔法盾.<br/>❷【物理盾】可以抵消来源是物理攻击和牌的伤害.<br/>❸【魔法盾】可以抵消来源是魔法攻击和不为牌的伤害.<br/>❹【物理魔法盾】可以抵消任何来源的伤害.<br/><br/><li><b>特殊机制:功能</b>:<br/>❶【护盾】在功能上可以分成【无效盾】和【吸收盾】.<br/>❷【无效盾】的功能是抵消伤害.<br/>❸【吸收盾】的功能是抵消伤害并回复等于抵消的伤害量的体力.<br/><br/><li><b>特殊机制:覆盖</b>:<br/>❶相同属性、相同功能的【护盾】会被新的同种【护盾】刷新(续航)并覆盖(层数).<br/>❷相同属性、不同功能的【护盾】中,新的【吸收盾】会刷新并覆盖旧的【无效盾】,而新的【无效盾】无法刷新并覆盖旧的【吸收盾】.<br/><br/><li><b>特殊机制:优先级</b>:<br/>❶【护盾】在生效时,会优先消耗【物理魔法盾】直至为零,最后才会消耗【物理盾】和【魔法盾】.<br/><br/><li><b>特殊机制:续航</b>:<br/>❶技能描述右上角的角标数字代表你以此法获得的【护盾】的续航值,当续航值为零时,护盾不再生效.(任何角色每使用或打出一张牌,所有的续航值减１)<br/><br/><li><b>特殊机制:消耗</b>:<br/>❶当你触发【护盾】后,消耗Ｘ点护盾值,抵消等量的伤害量,扣掉Ｙ点护盾值(Ｘ为伤害量与剩余护盾值取最小值,Ｙ为当前的续航值).',
		},
	};
	window.scqhOpenDialog = function (title, icon, content) {
		if (!title) title = '';
		if (!content) content = '';
		if (!window.scqhCurrentDialogs) {
			window.scqhCurrentDialogs = [];
		}
		var dialog = ui.create.div('.scqh-dialog', document.body);
		window.scqhCurrentDialogs.push(dialog);
		var icondiv = ui.create.div('.scqh-dialog-icon', dialog);
		if (icon) {
			icondiv.setBackgroundImage(icon);
		} else icondiv.hide();
		var text = ui.create.div('.scqh-dialog-text', dialog);
		text.innerHTML = content;
		if (lib.config.touchscreen) {
			lib.setScroll(text);
		}
		var titlediv = ui.create.div('.scqh-dialog-title', dialog);
		titlediv.innerHTML = title;
		var close = ui.create.div('.scqh-dialog-close', dialog);
		close.addEventListener('click', function () {
			window.scqhCurrentDialogs.remove(dialog);
			dialog.delete();
		});
		return dialog;
	};
	window.scqhIntroduce = function (name) {
		let info = specialDescribe[name] || {};
		let type = info.type || false;
		let str = {
			type: '特殊名词解释',
			name: info.name || '不明信息',
			info: info.info || '不明信息',
			cardtype: info.cardtype || false,
		};
		if (!type) {
		} else if (type == 'card') str.type = '卡牌介绍';
		else if (type == 'skill') str.type = '技能介绍';
		else if (type == 'tag') str.type = '技能标签介绍';
		else if (type == 'buff') str.type = 'BUFF';
		let biaoti = str.type + ':' + str.name;
		if (str.cardtype) biaoti += '(' + str.cardtype + '牌)';
		window.scqhOpenDialog(biaoti, null, str.info);
	};
	var listOfReplace = [];
	for (var id in lib.skill || {}) {
		var info = {
			name: lib.translate[id],
			type: 'skill',
			info: lib.translate[id + '_info'],
		};
		if (info.name && info.info && id.indexOf('scqh') == 0) {
			if (lib.skill[id].buffSkill) info.type = 'buff';
			specialDescribe[id + '※'] = info;
			listOfReplace.push(id + '_info');
		}
	}
	for (var id in lib.card || {}) {
		var info = {
			name: lib.translate[id],
			type: 'card',
			info: lib.translate[id + '_info'],
			cardtype: lib.translate[lib.card[id].type],
		};
		if (info.name && info.info && id.indexOf('scqh') == 0) {
			specialDescribe[id + '※'] = info;
			listOfReplace.push(id + '_info');
		}
	}
	for (var id in specialDescribe) {
		var info = specialDescribe[id] || {};
		if (!info.color) info.color = 'unset';
		if (!info.type) info.type = '';
		if (!info.name) info.name = id;
		for (var skillinfo of listOfReplace) {
			var fanyi = lib.translate[skillinfo] || '';
			var yes = info.name;
			if (info.type === 'skill') yes = id;
			if (info.type === 'card') yes = id;
			if (!fanyi.includes(yes)) continue;
			if (id === '替换字符串') {
				fanyi = fanyi.replace(/替换字符串/g, '<a style="color:' + info.color + '" href="javascript:window.scqhIntroduce(\'' + id + '\');">' + info.name + '</a>');
			} else {
				fanyi = fanyi.replace(id, '<a style="color:' + info.color + '" href="javascript:window.scqhIntroduce(\'' + id + '\');">' + info.name + '</a>');
			}
			lib.translate[skillinfo] = fanyi;
		}
	}
});

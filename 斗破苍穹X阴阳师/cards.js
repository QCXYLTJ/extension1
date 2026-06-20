import { lib, game, ui, get, ai, _status } from '../../noname.js';
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
	}; //true转为1,false转为-1
	window.numberq0 = function (num) {
		if (isNaN(Number(num))) return 0;
		return Math.abs(Number(num));
	}; //始终返回正数(取绝对值)
	window.numberq1 = function (num) {
		if (isNaN(Number(num))) return 1;
		return Math.max(Math.abs(Number(num)), 1);
	}; //始终返回正数且至少为1(取绝对值)
	window.number0 = function (num) {
		if (isNaN(Number(num))) return 0;
		return Math.max(Number(num), 0);
	}; //始终返回正数
	window.number1 = function (num) {
		if (isNaN(Number(num))) return 1;
		return Math.max(Number(num), 1);
	}; //始终返回正数且至少为1
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
			if (obj.hasOwnProperty(key)) {
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
game.import('card', function () {
	const dpcqXyys = {
		name: 'dpcqXyys',
		connect: true,
		card: {
			yhshanghunniaoA: {
				subtype: 'yuhun1',
			},
			yhshanghunniaoB: {
				subtype: 'yuhun2',
			},
			yhshanghunniaoC: {
				subtype: 'yuhun3',
			},
			yhshanghunniaoD: {
				subtype: 'yuhun4',
			},
			yhshanghunniaoE: {
				subtype: 'yuhun5',
			},
			yhshanghunniaoF: {
				subtype: 'yuhun6',
			},
			yhdizangxiangA: {
				subtype: 'yuhun1',
			},
			yhdizangxiangB: {
				subtype: 'yuhun2',
			},
			yhdizangxiangC: {
				subtype: 'yuhun3',
			},
			yhdizangxiangD: {
				subtype: 'yuhun4',
			},
			yhdizangxiangE: {
				subtype: 'yuhun5',
			},
			yhdizangxiangF: {
				subtype: 'yuhun6',
			},
			yhzhaocaimaoA: {
				subtype: 'yuhun1',
			},
			yhzhaocaimaoB: {
				subtype: 'yuhun2',
			},
			yhzhaocaimaoC: {
				subtype: 'yuhun3',
			},
			yhzhaocaimaoD: {
				subtype: 'yuhun4',
			},
			yhzhaocaimaoE: {
				subtype: 'yuhun5',
			},
			yhzhaocaimaoF: {
				subtype: 'yuhun6',
			},
			yhzhengA: {
				subtype: 'yuhun1',
			},
			yhzhengB: {
				subtype: 'yuhun2',
			},
			yhzhengC: {
				subtype: 'yuhun3',
			},
			yhzhengD: {
				subtype: 'yuhun4',
			},
			yhzhengE: {
				subtype: 'yuhun5',
			},
			yhzhengF: {
				subtype: 'yuhun6',
			},
			yhmeiyaoA: {
				subtype: 'yuhun1',
			},
			yhmeiyaoB: {
				subtype: 'yuhun2',
			},
			yhmeiyaoC: {
				subtype: 'yuhun3',
			},
			yhmeiyaoD: {
				subtype: 'yuhun4',
			},
			yhmeiyaoE: {
				subtype: 'yuhun5',
			},
			yhmeiyaoF: {
				subtype: 'yuhun6',
			},
			yhfanhunxiangA: {
				subtype: 'yuhun1',
			},
			yhfanhunxiangB: {
				subtype: 'yuhun2',
			},
			yhfanhunxiangC: {
				subtype: 'yuhun3',
			},
			yhfanhunxiangD: {
				subtype: 'yuhun4',
			},
			yhfanhunxiangE: {
				subtype: 'yuhun5',
			},
			yhfanhunxiangF: {
				subtype: 'yuhun6',
			},
			yhzhenmushouA: {
				subtype: 'yuhun1',
			},
			yhzhenmushouB: {
				subtype: 'yuhun2',
			},
			yhzhenmushouC: {
				subtype: 'yuhun3',
			},
			yhzhenmushouD: {
				subtype: 'yuhun4',
			},
			yhzhenmushouE: {
				subtype: 'yuhun5',
			},
			yhzhenmushouF: {
				subtype: 'yuhun6',
			},
			yhkuangguA: {
				subtype: 'yuhun1',
			},
			yhkuangguB: {
				subtype: 'yuhun2',
			},
			yhkuangguC: {
				subtype: 'yuhun3',
			},
			yhkuangguD: {
				subtype: 'yuhun4',
			},
			yhkuangguE: {
				subtype: 'yuhun5',
			},
			yhkuangguF: {
				subtype: 'yuhun6',
			},
			yhmumeiA: {
				subtype: 'yuhun1',
			},
			yhmumeiB: {
				subtype: 'yuhun2',
			},
			yhmumeiC: {
				subtype: 'yuhun3',
			},
			yhmumeiD: {
				subtype: 'yuhun4',
			},
			yhmumeiE: {
				subtype: 'yuhun5',
			},
			yhmumeiF: {
				subtype: 'yuhun6',
			},
		},
		translate: {
			yhshanghunniaoA: '伤魂鸟·壹',
			yhshanghunniaoA_info: '伤魂鸟一号位.伤魂鸟两件套:暴击+15%;四件套:每有一名友方角色阵亡,你回复一点体力并增加20%攻击力.',
			yhshanghunniaoB: '伤魂鸟·贰',
			yhshanghunniaoB_info: '伤魂鸟二号位.伤魂鸟两件套:暴击+15%;四件套:每有一名友方角色阵亡,你回复一点体力并增加20%攻击力.',
			yhshanghunniaoC: '伤魂鸟·叁',
			yhshanghunniaoC_info: '伤魂鸟三号位.伤魂鸟两件套:暴击+15%;四件套:每有一名友方角色阵亡,你回复一点体力并增加20%攻击力.',
			yhshanghunniaoD: '伤魂鸟·肆',
			yhshanghunniaoD_info: '伤魂鸟四号位.伤魂鸟两件套:暴击+15%;四件套:每有一名友方角色阵亡,你回复一点体力并增加20%攻击力.',
			yhshanghunniaoE: '伤魂鸟·伍',
			yhshanghunniaoE_info: '伤魂鸟五号位.伤魂鸟两件套:暴击+15%;四件套:每有一名友方角色阵亡,你回复一点体力并增加20%攻击力.',
			yhshanghunniaoF: '伤魂鸟·陆',
			yhshanghunniaoF_info: '伤魂鸟六号位.伤魂鸟两件套:暴击+15%;四件套:每有一名友方角色阵亡,你回复一点体力并增加20%攻击力.',
			yhdizangxiangA: '地藏像·壹',
			yhdizangxiangA_info: '地藏像一号位.地藏像两件套:生命上限+15%;四件套:受到暴击时,获得生命上限25%的护盾.',
			yhdizangxiangB: '地藏像·贰',
			yhdizangxiangB_info: '地藏像二号位.地藏像两件套:生命上限+15%;四件套:受到暴击时,获得生命上限25%的护盾.',
			yhdizangxiangC: '地藏像·叁',
			yhdizangxiangC_info: '地藏像三号位.地藏像两件套:生命上限+15%;四件套:受到暴击时,获得生命上限25%的护盾.',
			yhdizangxiangD: '地藏像·肆',
			yhdizangxiangD_info: '地藏像四号位.地藏像两件套:生命上限+15%;四件套:受到暴击时,获得生命上限25%的护盾.',
			yhdizangxiangE: '地藏像·伍',
			yhdizangxiangE_info: '地藏像五号位.地藏像两件套:生命上限+15%;四件套:受到暴击时,获得生命上限25%的护盾.',
			yhdizangxiangF: '地藏像·陆',
			yhdizangxiangF_info: '地藏像六号位.地藏像两件套:生命上限+15%;四件套:受到暴击时,获得生命上限25%的护盾.',
			yhzhaocaimaoA: '招财猫·壹',
			yhzhaocaimaoA_info: '招财猫一号位.招财猫两件套:防御+15%;四件套:回合开始时,有50%概率摸两张牌.',
			yhzhaocaimaoB: '招财猫·贰',
			yhzhaocaimaoB_info: '招财猫二号位.招财猫两件套:防御+15%;四件套:回合开始时,有50%概率摸两张牌.',
			yhzhaocaimaoC: '招财猫·叁',
			yhzhaocaimaoC_info: '招财猫三号位.招财猫两件套:防御+15%;四件套:回合开始时,有50%概率摸两张牌.',
			yhzhaocaimaoD: '招财猫·肆',
			yhzhaocaimaoD_info: '招财猫四号位.招财猫两件套:防御+15%;四件套:回合开始时,有50%概率摸两张牌.',
			yhzhaocaimaoE: '招财猫·伍',
			yhzhaocaimaoE_info: '招财猫五号位.招财猫两件套:防御+15%;四件套:回合开始时,有50%概率摸两张牌.',
			yhzhaocaimaoF: '招财猫·陆',
			yhzhaocaimaoF_info: '招财猫六号位.招财猫两件套:防御+15%;四件套:回合开始时,有50%概率摸两张牌.',
			yhzhengA: '狰·壹',
			yhzhengA_info: '狰一号位.狰两件套:攻击+15%;四件套:受到伤害时,有45%概率对伤害来源使用一张<杀>.',
			yhzhengB: '狰·贰',
			yhzhengB_info: '狰二号位.狰两件套:攻击+15%;四件套:受到伤害时,有45%概率对伤害来源使用一张<杀>.',
			yhzhengC: '狰·叁',
			yhzhengC_info: '狰三号位.狰两件套:攻击+15%;四件套:受到伤害时,有45%概率对伤害来源使用一张<杀>.',
			yhzhengD: '狰·肆',
			yhzhengD_info: '狰四号位.狰两件套:攻击+15%;四件套:受到伤害时,有45%概率对伤害来源使用一张<杀>.',
			yhzhengE: '狰·伍',
			yhzhengE_info: '狰五号位.狰两件套:攻击+15%;四件套:受到伤害时,有45%概率对伤害来源使用一张<杀>.',
			yhzhengF: '狰·陆',
			yhzhengF_info: '狰六号位.狰两件套:攻击+15%;四件套:受到伤害时,有45%概率对伤害来源使用一张<杀>.',
			yhmeiyaoA: '魅妖·壹',
			yhmeiyaoA_info: '魅妖一号位.魅妖两件套:防御+15%;四件套:造成伤害时,有(15%+效果命中)概率使目标陷入混乱直到其回合结束.',
			yhmeiyaoB: '魅妖·贰',
			yhmeiyaoB_info: '魅妖二号位.魅妖两件套:防御+15%;四件套:造成伤害时,有(15%+效果命中)概率使目标陷入混乱直到其回合结束.',
			yhmeiyaoC: '魅妖·叁',
			yhmeiyaoC_info: '魅妖三号位.魅妖两件套:防御+15%;四件套:造成伤害时,有(15%+效果命中)概率使目标陷入混乱直到其回合结束.',
			yhmeiyaoD: '魅妖·肆',
			yhmeiyaoD_info: '魅妖四号位.魅妖两件套:防御+15%;四件套:造成伤害时,有(15%+效果命中)概率使目标陷入混乱直到其回合结束.',
			yhmeiyaoE: '魅妖·伍',
			yhmeiyaoE_info: '魅妖五号位.魅妖两件套:防御+15%;四件套:造成伤害时,有(15%+效果命中)概率使目标陷入混乱直到其回合结束.',
			yhmeiyaoF: '魅妖·陆',
			yhmeiyaoF_info: '魅妖六号位.魅妖两件套:防御+15%;四件套:造成伤害时,有(15%+效果命中)概率使目标陷入混乱直到其回合结束.',
			yhfanhunxiangA: '返魂香·壹',
			yhfanhunxiangA_info: '返魂香一号位.返魂香两件套:抵抗+15%;四件套:受到伤害时,有(15%+效果命中)概率使伤害来源晕眩.',
			yhfanhunxiangB: '返魂香·贰',
			yhfanhunxiangB_info: '返魂香二号位.返魂香两件套:抵抗+15%;四件套:受到伤害时,有(15%+效果命中)概率使伤害来源晕眩.',
			yhfanhunxiangC: '返魂香·叁',
			yhfanhunxiangC_info: '返魂香三号位.返魂香两件套:抵抗+15%;四件套:受到伤害时,有(15%+效果命中)概率使伤害来源晕眩.',
			yhfanhunxiangD: '返魂香·肆',
			yhfanhunxiangD_info: '返魂香四号位.返魂香两件套:抵抗+15%;四件套:受到伤害时,有(15%+效果命中)概率使伤害来源晕眩.',
			yhfanhunxiangE: '返魂香·伍',
			yhfanhunxiangE_info: '返魂香五号位.返魂香两件套:抵抗+15%;四件套:受到伤害时,有(15%+效果命中)概率使伤害来源晕眩.',
			yhfanhunxiangF: '返魂香·陆',
			yhfanhunxiangF_info: '返魂香六号位.返魂香两件套:抵抗+15%;四件套:受到伤害时,有(15%+效果命中)概率使伤害来源晕眩.',
			yhzhenmushouA: '镇墓兽·壹',
			yhzhenmushouA_info: '镇墓兽一号位.镇墓兽两件套:暴击+15%;四件套:暴击伤害+X(X为你的已损体力百分比值).',
			yhzhenmushouB: '镇墓兽·贰',
			yhzhenmushouB_info: '镇墓兽二号位.镇墓兽两件套:暴击+15%;四件套:暴击伤害+X(X为你的已损体力百分比值).',
			yhzhenmushouC: '镇墓兽·叁',
			yhzhenmushouC_info: '镇墓兽三号位.镇墓兽两件套:暴击+15%;四件套:暴击伤害+X(X为你的已损体力百分比值).',
			yhzhenmushouD: '镇墓兽·肆',
			yhzhenmushouD_info: '镇墓兽四号位.镇墓兽两件套:暴击+15%;四件套:暴击伤害+X(X为你的已损体力百分比值).',
			yhzhenmushouE: '镇墓兽·伍',
			yhzhenmushouE_info: '镇墓兽五号位.镇墓兽两件套:暴击+15%;四件套:暴击伤害+X(X为你的已损体力百分比值).',
			yhzhenmushouF: '镇墓兽·陆',
			yhzhenmushouF_info: '镇墓兽六号位.镇墓兽两件套:暴击+15%;四件套:暴击伤害+X(X为你的已损体力百分比值).',
			yhkuangguA: '狂骨·壹',
			yhkuangguA_info: '狂骨一号位.狂骨两件套:攻击+15%;四件套:攻击+X%(X为你拥有的鬼火数x10).',
			yhkuangguB: '狂骨·贰',
			yhkuangguB_info: '狂骨二号位.狂骨两件套:攻击+15%;四件套:攻击+X%(X为你拥有的鬼火数x10).',
			yhkuangguC: '狂骨·叁',
			yhkuangguC_info: '狂骨三号位.狂骨两件套:攻击+15%;四件套:攻击+X%(X为你拥有的鬼火数x10).',
			yhkuangguD: '狂骨·肆',
			yhkuangguD_info: '狂骨四号位.狂骨两件套:攻击+15%;四件套:攻击+X%(X为你拥有的鬼火数x10).',
			yhkuangguE: '狂骨·伍',
			yhkuangguE_info: '狂骨五号位.狂骨两件套:攻击+15%;四件套:攻击+X%(X为你拥有的鬼火数x10).',
			yhkuangguF: '狂骨·陆',
			yhkuangguF_info: '狂骨六号位.狂骨两件套:攻击+15%;四件套:攻击+X%(X为你拥有的鬼火数x10).',
			yhmumeiA: '木魅·壹',
			yhmumeiA_info: '木魅一号位.木魅两件套:防御+30%;四件套:友方单位受到伤害时,有25%的概率减少伤害来源1点鬼火.',
			yhmumeiB: '木魅·贰',
			yhmumeiB_info: '木魅二号位.木魅两件套:防御+30%;四件套:友方单位受到伤害时,有25%的概率减少伤害来源1点鬼火.',
			yhmumeiC: '木魅·叁',
			yhmumeiC_info: '木魅三号位.木魅两件套:防御+30%;四件套:友方单位受到伤害时,有25%的概率减少伤害来源1点鬼火.',
			yhmumeiD: '木魅·肆',
			yhmumeiD_info: '木魅四号位.木魅两件套:防御+30%;四件套:友方单位受到伤害时,有25%的概率减少伤害来源1点鬼火.',
			yhmumeiE: '木魅·伍',
			yhmumeiE_info: '木魅五号位.木魅两件套:防御+30%;四件套:友方单位受到伤害时,有25%的概率减少伤害来源1点鬼火.',
			yhmumeiF: '木魅·陆',
			yhmumeiF_info: '木魅六号位.木魅两件套:防御+30%;四件套:友方单位受到伤害时,有25%的概率减少伤害来源1点鬼火.',
		},
	};
	for (const i in dpcqXyys.card) {
		const info = dpcqXyys.card[i];
		info.filterTarget = function (card, player, target) {
			return target == player;
		};
		info.content = async function (event, trigger, player) {
			const storage = player.storage;
			const card = event.cards[0] || event.card;
			const level = event.name.slice(-1);
			const subtype = get.subtype(card);
			const Nature = ['ATK', 'ATKx', 'DEF', 'DEFx', 'CS', 'CSS', 'MAXHP', 'RES', 'INF'];
			//——————————————————————————————————————————清空之前属性
			if (player._maxHp) {
				player.maxHp -= player._maxHp;
			}
			Nature.forEach((attr) => {
				storage[`yys${attr}`] -= storage[`yh_${attr}${level}`]; //总属性减去御魂分属性
			});
			if (!storage.yh_) {
				storage.yh_ = [];
			}
			storage.yh_ = storage.yh_.filter((i) => get.subtype(i) != subtype);
			storage.yh_.push(card);
			player.directgain(card);
			player.lose(card, ui.special)._triggered = null;
			player.$gain2(card);
			//——————————————————————————————————————————随机加属性
			const numx = Math.round(card.number / 2);
			const N = Nature.randomGets(numx);
			const rules = {
				ATK: [40, 45],
				ATKx: [8, 10],
				DEF: [40, 45],
				DEFx: [8, 10],
				CS: [8, 10],
				CSS: [8, 12],
				MAXHP: [8, 10],
				RES: [8, 10],
				INF: [8, 10],
			};
			for (const name of N) {
				const range = rules[name];
				const add = get.rand(...range) * numx;
				storage[`yh_${name}${level}`] += add; //御魂分属性
				storage[`yys${name}`] += add; //全部总属性
			}
			for (const name of Nature) {
				storage[`yh_${name}`] = 0; //御魂总属性
				for (const i of ['A', 'B', 'C', 'D', 'E', 'F']) {
					storage[`yh_${name}`] += storage[`yh_${name}${i}`];
				}
			}
			const num = Math.round(player.maxHp * (storage.yysMAXHP / 100));
			player._maxHp = num;
			player.maxHp += num;
			player.update();
		};
		info.type = 'yuhun';
		info.enable = true;
		info.selectTarget = -1;
		info.modTarget = true;
		info.allowMultiple = false;
		info.toself = true;
		info.ai = {
			order: 10,
			basic: {
				useful: 2,
				value: 1,
			},
			result: {
				target: 2,
			},
		};
		info.image = `ext:斗破苍穹X阴阳师/jntx/${i.slice(0, -1)}.jpg`;
		info.fullimage = true;
	}
	lib.config.all.cards.add('dpcqXyys');
	lib.config.cards.add('dpcqXyys');
	lib.translate['dpcqXyys_card_config'] = '<span style="-webkit-animation:dpcqXyys_card_config 15s infinite;animation:dpcqXyys_card_config 15s infinite;">御魂</span>';
	return dpcqXyys;
});
var style = document.createElement('style');
style.innerHTML = '@keyframes dpcqXyys_card_config{';
for (var i = 1; i <= 15; i++) {
	var rand1 = Math.round(Math.random() * 255),
		rand2 = Math.round(Math.random() * 255),
		rand3 = Math.round(Math.random() * 255);
	style.innerHTML += i * 7 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 20px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 20px}';
}
style.innerHTML += '}';
document.head.appendChild(style);
var style = document.createElement('style');
style.innerHTML = '@keyframes dpcq_Character_character_config{';
for (var i = 1; i <= 10; i++) {
	var rand1 = Math.round(Math.random() * 255),
		rand2 = Math.round(Math.random() * 255),
		rand3 = Math.round(Math.random() * 255);
	style.innerHTML += i * 10 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 20px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 20px}';
}
style.innerHTML += '}';
document.head.appendChild(style);
var style = document.createElement('style');
style.innerHTML = '@keyframes yys_Character_character_config{';
for (var i = 1; i <= 10; i++) {
	var rand1 = Math.round(Math.random() * 255),
		rand2 = Math.round(Math.random() * 255),
		rand3 = Math.round(Math.random() * 255);
	style.innerHTML += i * 10 + '%{text-shadow: black 0 0 1px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 2px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 5px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 10px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 20px,rgba(' + rand1 + ', ' + rand2 + ', ' + rand3 + ', 1) 0 0 20px}';
}
style.innerHTML += '}';
document.head.appendChild(style);

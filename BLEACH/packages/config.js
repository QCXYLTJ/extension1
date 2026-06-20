import { lib, game, ui, get, ai, _status } from '../../../noname.js';
const extensionInfo = await lib.init.promises.json(`extension/BLEACH/info.json`);
export const config = {
	Version: {
		name: '扩展版本：' + extensionInfo.version,
		init: '0',
		item: {
			//●※「」,
			0: "<a style='color: rgba(255,215,0,1)'>查看更新</a>",
			1: '生活第一，游戏第二，多陪陪你爱的和爱你的人。',
			100: '<font color=DeepSkyBlue>Ν全新</font>：',
			101: '※新灵魂「不入参道」、「天地灰尽」。',
			102: '※移除灵魂「逆样邪八宝塞」、「血色赠礼」。',
			200: '<font color=palegreen>▲增强</font>：',
			201: '※「井上织姬」：综合能力提升。',
			202: '※「阿比拉玛」：归刃后输出能力提升。',
			203: '※「哈斯沃德」：上限提升 降低下限。',
			204: '※「亚洛尼洛」：适配*浅打*。',
			231: '※【正义着装】：目标限制：体力最小 → 没有护盾。',
			251: '※「黑曜石护盾」：现在同时免疫火焚异常。',
			252: '※「英雄护盾」：基础防御：3 → 4。',
			253: '※「冰冻护盾」：基础防御：1 → 2。',
			254: '※「圣骑士护盾」：现在同时免疫雷蛰异常。',
			255: '※「星夜斗篷」：现在可以抵挡卡牌伤害。',
			256: '※「投机者」：基础概率：10% → 15%。',
			257: '※「未知的手段」：现在双将可以额外获得2-3个技能。',
			258: '※「龙心」：现在每轮都会获得龙魂。',
			258: '※「熔石之盾」：现在可以抵挡非卡牌伤害且直接防止伤害。',
			259: '※「天涯若比邻」：基础概率：22% → 25%。',
			300: '<font color=red>▼削弱</font>：',
			301: '※「多利斯克」：每3点伤害 → 每4点伤害。',
			302: '※「朽木露琪亚·始解」：移去【月白】范围伤害。',
			303: '※「茶渡泰虎·2022」：降低回复和防御能力。',
			303: '※「芬朵尔」：降低前期作战力。',
			304: '※「更木剑八」：略微降低防御力。',
			305: '※「市丸银」：降低技能发动频率。',
			306: '※「洛伊德」：降低压制能力。',
			307: '※「GF」：增加技能次数限制。',
			308: '※「碎蜂」：回退版本。',
			351: '※「冻伤」：现在需要4层才能转化为「冻结」。',
			352: '※「断筋者」：移除弃牌机制。',
			353: '※「神圣之剑」：改为随机弃置其一张牌。',
			354: '※「联合抵抗」：基础概率：22% → 20%。',
			400: '<font color=cyan>⟳更新</font>：',
			401: '※「山本元柳斋」「草鹿八千流」「泳嘉蒂丝」「桧佐木修兵」：技能简化类调整。',
			402: '※「超重力网」：手牌数4以上不能使用【杀】 → 每回合至多使用一张【杀】。',
			403: '※「灵压碾碎即可」：手牌数最大时敌方弃牌 → 摸剩余敌方数张牌。',
			404: '※修复了【虐杀】摸牌计算方式出错的BUG',
			405: '※修复了【灵臂】转换错误和丢失语音的BUG',
			406: '※修复了【迅捷】没有【狩猎】时不能发动的BUG',
			407: '※修复了【蜂纹】拥有看不见的🃏标记的BUG',
			408: '※修复了【通名】点击取消依然【决斗】的BUG',
			409: '※修复了【阎魔】阵亡后回合结算异常的BUG',
			410: '※修复了【征服】客机选择目标掉线的BUG',
			451: '※修复了「死亡之刃」直接处决隐匿武将的BUG',
			Acknowledgement: "<a style='color: rgba(144,202,175,1)'>鸣谢名单</a>",
			Ack_1: '鸣谢：花落的世界、Masked Joker(Daoist)、不知名老哥',
			Crack: lib.versionCrack ? `联机补丁版本：${lib.versionCrack}` : '',
		},
	},
	bleachSoulTreeSwitch: {
		name: '灵魂树',
		intro: '打开此选项，游戏开始时可以选择一种*灵魂本质*，重启后生效。',
		init: lib.config.bleachSoulTreeSwitch === undefined ? true : lib.config.bleachSoulTreeSwitch,
		onclick(item) {
			game.saveConfig('extension_BLEACH_bleachSoulTreeSwitch', item);
			game.saveConfig('bleachSoulTreeSwitch', item);
		},
	},
	bleachSoulDuelSwitch: {
		name: '灵魂激斗',
		intro: '打开此选项，对决模式改为灵魂激斗，重启后生效。',
		init: lib.config.bleachSoulDuelSwitch === undefined ? false : lib.config.bleachSoulDuelSwitch,
		onclick(item) {
			game.saveConfig('extension_BLEACH_bleachSoulDuelSwitch', item);
			game.saveConfig('bleachSoulDuelSwitch', item);
		},
	},
	bleachSoulDuelIntro: {
		name: '激斗规则集◄◄◄',
		clear: true,
		onclick() {
			if (this.bleachIntro == undefined) {
				var more = ui.create.div('.bleachIntro', '<div style="border:2px solid gray"><li>奇数轮开始时，未进行8次强化灵魂选择的角色将进行强化灵魂选择。<br>&nbsp;>强化灵魂选择通常为三选一且拥有不同的品质[银色-金色-青色-传奇]（传奇仅会在特定轮数刷新）。<br>&nbsp;>通常情况下，每名角色拥有两次强化灵魂选择刷新次数，击杀敌方后获得一次额外的刷新。<br>&nbsp;>一旦两名角色拥有相同的强化灵魂，那个强化灵魂将会被移除池子。<P align=left>');
				this.parentNode.insertBefore(more, this.nextSibling);
				this.bleachIntro = more;
				this.innerHTML = '激斗规则集▼▼▼';
			} else {
				this.parentNode.removeChild(this.bleachIntro);
				delete this.bleachIntro;
				this.innerHTML = '激斗规则集◄◄◄';
			}
		},
	},
	bleachConnectAvatar: {
		name: '快速设置头像',
		intro: '快捷设置隐藏的联机头像',
		init: lib.config.bleachConnectAvatar === undefined ? 'moren' : lib.config.bleachConnectAvatar,
		item: {
			image_aizen: '*蓝染惣右介 立于天上*',
			image_aizen2: '*蓝染惣右介 第四融合阶段*',
			image_aizen3: '*蓝染惣右介 第一融合阶段*',
			image_ichigo: '*黑崎一护 卍解*',
			image_ichigo2: '*黑崎一护 半虚化*',
			image_ichigo3: '*黑崎一护 面具碎裂*',
			image_ichigo4: '*黑崎一护 虚化*',
			image_yamamoto: '山本元柳斋 流刃若火',
			image_burnthewitch: '*龙与魔女*',
			image_furoufushi: '*斋藤不老不死*',
			image_rukia: '*朽木露琪亚卍解*',
			image_yhwach: '*友哈巴赫灵王*',
			image_xiaohujing: '*小虎鲸*',
			image_yinlianhua: '*温热的银莲花*',
			image_baihehua: '*百合花*',
			image_constantine: '*康斯坦丁*',
			image_constantine2: '*地狱神探*',
			image_johnwick: '*约翰威克*',
			image_izayoisakuya: '*十六夜·咲夜*',
			image_theamazingspiderman: '*超凡蜘蛛侠*',
			image_spidermanvenomsuit: '*蜘蛛侠毒液战衣*',
			image_theshawshankredemption: '*肖申克的救赎*',
			image_vladimir: '*弗拉基米尔*',
			image_brucelee: '*李小龙*',
			image_kamennaite: '*卡门奈特*',
		},
		onclick(item) {
			game.saveConfig('connect_avatar', item);
			game.saveConfig('connect_avatar', item, 'connect');
			game.saveConfig('extension_BLEACH_bleachConnectAvatar', item);
			game.saveConfig('bleachConnectAvatar', item);
		},
	},
};

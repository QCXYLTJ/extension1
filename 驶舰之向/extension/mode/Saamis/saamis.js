import { mrfzfuc } from "../../SJZXfuc.js";
import { lib, game, ui, get, ai, _status } from '../../../../../noname.js'
import { SaamisU } from "../SaamisFuc/util.js";
import { saamisGame as SaamisG, saamisGame } from "../SaamisFuc/saamisGame.js";
/*
Saamis n.萨米人
*/
export class SaamisSave {
	/**
	 * 最高通关层数
	 * @type {Number}
	 */
	maxpass = 0;
	/**
	 * 上一次抵达的层数
	 * @type { Number }
	 */
	lastpass = 0;
	/**
	 * 当前难度
	 * @type {Number}
	 */
	difficulty = 0;
	/**
	 * 文化比较相关的数据
	 */
	buff = {
		/**
		 * buff列表
		 */
		enable: SaamisU.initCutureBuff(),
		/**
		 * 理性视域数
		 * @type { Number }
		 */
		point: 0,
		/**
		 * 已经消耗的理性视域数
		 * @type { Number }
		 */
		usedPoint: 0,
		/**
		 * 获得下一个理性视域的进度,满1000获得一个
		 * @type { Number }
		 */
		gain: 0,
	};
	/**
	 * 前瞻性投资的数据
	 */
	cannot = {
		/**
		 * 前瞻性投资获得的buff
		 */
		enable: {},
		/**
		 * 当前源石锭数
		 * @type { Number }
		 */
		point: 0,
		/**
		 * 最高源石锭数
		 * @type { Number }
		 */
		max: 0,
	};
	/**
	 * 用于判断一些分队是否解锁用到的数据
	 */
	unlockTeam = {
		/**
		 * 后勤分队是否解锁
		 * @type { Number }
		 */
		houqing: 0,
		/**
		 * 特训分队是否解锁
		 * @type { Number }
		 */
		texun: 0,
		/**
		 * 矛头分队是否解锁
		 * @type { Boolean }
		 */
		maotou: false,
		/**
		 * 高规格分队是否解锁
		 * @type { Boolean }
		 */
		gaoguige: false,
	};
	/**
	 * 科考等级
	 * @type { Number } 科考等级 = level / 1000 向下取整
	 */
	level = 0;
	/**
	 * 获得过的收藏品
	 * @type { Number }
	 */
	collected = {};
	/**
	 * 当局储存的内容,每局开始时会重置
	 * @type { Object }
	 */
	MatchSave = {
		/**
		 * 局内的一些资源
		 */
		resource: {
			wishSJZX: {
				num: 0,
				maxNum: 0
			},
			targetLife: {
				hp: 0,
				maxhp: 0,
				shield: 0
			},
			commandLevel: {
				level: 0,
				experience: 0
			},
			monenySJZX: 0,
		},
		/**
		 * 战斗中游戏开始时获得的技能
		 */
		battleSkills: [],
		/**
		 * 战斗结束后遍历的内容
		 */
		endBattle: {},
		/**
		 * 分队相关的数据
		 */
		team: {
			/**
			 * 选择的分队
			 * @type { string }
			 */
			chooseTeam: null,
			/**
			 * 所拥有的干员
			 */
			Operators: {},
			/**
			 * 可携带的干员数
			 * @type { Number }
			 */
			Carryable: 0,
			/**
			 * 可上场的干员数
			 * @type { Number }
			 */
			Deployable: 0,
			/**
			 * 干员招募相关
			 */
			recruit: {
				count: 3,
				promotion: 0.05,
				temporary: 0.05,
				mutex: true,
				refreshMax: 1
			}
		},
		/**
		 * 关卡层数相关的数据
		 */
		layers: {
			/**
			 * 当前所在的层数
			 * @type { Number }
			 */
			num: null,
			/**
			 * 当前层数的关卡数据
			 */
			maps: {},
			/**
			 * 所拥有的远见
			 * @type { string }
			 */
			visionary: null,
		},
		/**
		 * 藏品相关的数据
		 */
		collection: {
			/**
			 * 拥有的藏品
			 */
			owner: [],
			/**
			 * 拥有过的藏品
			 */
			lose: [],
		},
		/**
		 * 密文板相关的数据
		 */
		prayer: {
			/**
			 * 拥有的密文板
			 */
			owner: {},
			/**
			 * 已经使用过的密文板
			 */
			used: {},
		},
		/**
		 * 坍缩相关的数据
		 */
		Collapse: {
			/**
			 * 坍缩等级相关数据
			 */
			level: {
				/**
				 * 最高坍缩等级
				 */
				max: 0,
				/**
				 * 当前坍缩等级
				 */
				current: 0,
			},
			/**
			 * 累计坍缩值
			 */
			num: 0,
			/**
			 * 坍缩范式数据
			 */
			content: {
				/**
				 * 拥有的坍缩范式
				 */
				owner: {},
				/**
				 * 失去的坍缩范式
				 */
				lose: {},
			},
		},
	};
}
export class SaamisStore {
	/**
	 * 招募券url
	 */
	static recruitUrl = `extension/驶舰之向/image/mode/rougelike/Saamis/orther/recruit/logo.png`;
	/**
	 * 萨米资源名称转化表
	 */
	static resourceMaps = {
		life: 'targetLife',
		moneny: 'monenySJZX',
		wish: 'wishSJZX',
		command: 'commandLevel'
	};
	/**
	 * 当前选择的队伍
	 * @type {string}
	 */
	static currentTeam;
	/**
	 * 已经被添加过的事件监听器,目的是为了避免重复添加相同的事件监听器
	 * @type { Object }
	 */
	static isEventListenerAdded = {};
	/**
	 * 收藏品分类列表
	 * @type { Array }
	 */
	static collectionTypes;
	/**
	 * 收藏品列表
	 * @type { object }
	 */
	static collections;
	/**
	 * 招募干员所用的HTML元素
	 * @type {HTMLElement}
	 */
	static recruitHTML;
	/**
	 * 额外支援的buff列表
	 */
	static additionalSupportList = {
		addShield: {
			name: "更多补给品",
			intro: "获得<#g:3>护盾值",
			image: "sam:orther/shield.png",
			effect() {
				targetLife.shield += 3;
			},
		},
		addWish: {
			name: "出发前演讲",
			intro: "获得<#g:2>点希望",
			image: "sam:orther/wish.png",
			effect() {
				wishSJZX.num += 2;
			},
		},
		addMoneny: {
			name: "储备金支援",
			intro: "获得<#g:5>源石锭",
			image: "sam:leftBottomButton/cannot/money2.png",
			effect() {
				monenySJZX.num += 5;
			},
		},
		buyCollection: {
			name: "购买收藏品",
			intro: "消耗<#r:所有>源石锭,获得一件随机收藏品",
			image: "sam:orther/relic.png",
			effect() {
				monenySJZX.num = 0;
				let col = SaamisG.collect.CollectionRandomGets(1, name => name != 'kettle');
				SaamisG.gainCollections(col);
			},
		},
		recycleCollection: {
			name: "回收战利品",
			intro: "消耗<#r:1>希望及等量上限,获得一件随机收藏品",
			image: "sam:orther/relic.png",
			effect() {
				wishSJZX.num -= 1;
				let col = SaamisG.collect.CollectionRandomGets(1, name => name != 'kettle');
				SaamisG.gainCollections(col);
			},
		},
		getKettle: {
			name: "随手拿点啥",
			intro: "获得收藏品<#b:热水壶>",
			image: "sam:collection/kettle.png",
			effect() {
				SaamisG.gainCollections("kettle");
			},
		},
	};
	constructor() {
		/**
		 * @type {object}
		 */
		const save = SaamisU.getSave();
		// 构造属性
		this.isEventListenerAdded = {};
		this.collectionTypes = [];
		// 增添属性信息
		this.collectionTypes = saamisGame.collect.setCollectionTypes();
		this.collections = SaamisU.createDeepFindProxy(new SaamisSJZX_collection());
		this.additionalSupportList = SaamisStore.additionalSupportList;
		this.resourceMaps = SaamisStore.resourceMaps
		this.currentTeam = save.MatchSave.team.chooseTeam === undefined ? undefined : save.MatchSave.team.chooseTeam;
		this.recruitUrl = SaamisStore.recruitUrl;
		this.recruitHTML = SaamisStore.recruitHTML;
		for (let additional in SaamisStore.additionalSupportList) {
			let info = SaamisStore.additionalSupportList[additional];
			SaamisStore.additionalSupportList[additional].intro = SaamisU.formatFontColor(info.intro);
			SaamisStore.additionalSupportList[additional].image = SaamisU.formatImgPath(info.image);
		}
	}
}
export const SaamisSJZX_maps = {};
export class SaamisSJZX_collection {
	/**
	 * 收藏品 - 尘封遗物
	 */
	static dustyRelics = {};
	/**
	 * 收藏品 - 泰拉之密
	 */
	static terraSecrets = {};
	/**
	 * 收藏品 - 叙事奇珍
	 * 剧情道具
	 */
	static narrativeCurities = {};
	/**
	 * 收藏品 - 巧用收藏
	 */
	static usefulCollection = {};
	/**
	 * 收藏品 - 专业工具
	 */
	static professionalTools = {};
	/**
	 * 收藏品 - 多元奇物
	 */
	static diverseCuriosities = {
		topographic: {
			name: "地形图",
			prompt: "可同时部署人数+1,所有我方单位受到伤害时可以进行判定,若花色为♥️️且点数不大于<dif>[2,3,4,5]<dif>,此伤害-1<dif==4>并摸一张牌<dif>",
			intro: "一份颇有年代感的手绘地图,图上的名称和对应地形都有较大更易,比例尺似乎也有些问题.",
			shop: 8,
			effect: {
				gain() {
					SaamisG.changeResource(1, "deploy");
				},
				lose() {
					SaamisG.changeResource(-1, "deploy");
				},
				skills: ["topographic"],
			},
		},
	};
	/**
	 * 收藏品 - 斗争之物
	 */
	static fightItem = {};
	/**
	 * 收藏品 - 生存助力
	 */
	static SurvivalBoost = {
		kettle: {
			name: "热水壶",
			prompt: "目标生命上限+1,希望+1",
			intro: "罗德岛办公室里的同款热水壶,有人经常大半夜用热水壶煮速食面吃,这种生活习惯不是很健康......",
			effect() {
				SaamisG.changeResource(1, ["wish", "life"], true);
			},
		},
	};
	constructor() {
		this.dustyRelics = SaamisSJZX_collection.dustyRelics;
		this.terraSecrets = SaamisSJZX_collection.terraSecrets;
		this.narrativeCurities = SaamisSJZX_collection.narrativeCurities;
		this.usefulCollection = SaamisSJZX_collection.usefulCollection;
		this.professionalTools = SaamisSJZX_collection.professionalTools;
		this.diverseCuriosities = SaamisSJZX_collection.diverseCuriosities;
		this.fightItem = SaamisSJZX_collection.fightItem;
		this.SurvivalBoost = SaamisSJZX_collection.SurvivalBoost;
		for (let type in this) {
			for (let name in this[type]) {
				let info = this[type][name];
				if (!info['image']) {
					info['image'] = `url(extension/驶舰之向/image/mode/rougelike/Saamis/collection/${name}.png)`;
				}
			}
		}
	}
}
export const SaamisSJZX_cultureBuff = {
	phase: {
		first: {
			cost: 1,
			content: {
				1: {
					yuhan: ["yuhan", 1],
				},
				2: {
					zhudong: ["zhudong", 1],
					wenhua: ["wenhua"],
				},
				3: {
					wuzi: ["wuzi", 1],
				},
				4: {
					pinghe: ["pinghe"],
					lingxing: ["lingxing"],
					zhengxiang: ["zhengxiang"],
				},
				5: {
					free: true,
					phase1: ["phase1"],
				},
			},
		},
		second: {
			cost: 2,
			content: {
				1: {
					wuzi: ["wuzi", 1],
					qihou: ["qihou", 1],
					tongxun: ["tongxun"],
				},
				2: {
					yuhan: ["yuhan", 1],
					yanjiu: ["yanjiu"],
					wenhua: ["wenhua"],
					zhudong: ["zhudong", 1],
				},
				3: {
					yingji: ["yingji", 1],
					kancha: ["kancha", 2],
					wenhua: ["wenhua"],
				},
				4: {
					biaoda: ["biaoda"],
					ganxing: ["ganxing"],
					shiying: ["shiying"],
				},
				5: {
					free: true,
					phase2: ["phase2"],
				},
			},
		},
		third: {
			cost: 3,
			content: {
				1: {
					yingji: ["yingji", 2],
					qihou: ["qihou", 1],
					biandui: ["biandui"],
				},
				2: {
					yuhan: ["yuhan", 2],
					zhudong: ["zhudong", 2],
					wuzi: ["wuzi", 2],
				},
				3: {
					zhudong: ["zhudong", 2],
					wuzi: ["wuzi", 2],
					kancha: ["kancha", 2],
					yuhan: ["yuhan", 2],
				},
				4: {
					jiaowang: ["jiaowang"],
					yuxian: ["yuxian"],
					gongju: ["gongju"],
				},
				5: {
					free: true,
					phase3: ["phase3"],
				},
			},
		},
		fourth: {
			cost: 4,
			content: {
				1: {
					yuhan: ["yuhan", 3],
					yanjiu: ["yanjiu"],
					wenhua: ["wenhua"],
				},
				2: {
					yingji: ["yingji", 3],
					kancha: ["kancha", 3],
					wuzi: ["wuzi", 3],
					zhudong: ["zhudong", 3],
				},
			},
		},
	},
	buff: {
		// 通用buff
		yuhan: {
			name: "御寒措施#",
			intro: "所有我方干员初始护甲值+#",
			base: 1,
		},
		zhudong: {
			name: "主动出击#",
			intro: "所有我方干员第一个出牌阶段使用【杀】的次数+#",
			base: 1,
		},
		wuzi: {
			name: "物资充盈#",
			intro: "所有我方干员初始手牌+#",
			base: 1,
		},
		wenhua: {
			name: "文化熟悉",
			intro: "生态标本获取效率+#%",
			base: 5,
		},
		qihou: {
			name: "气候适应性#",
			intro: "初始目标生命上限+#",
			base: 1,
		},
		tongxun: {
			name: "目标通讯加强",
			intro: "可同时部署干员数+#",
			base: 1,
		},
		biandui: {
			name: "编队扩充",
			intro: "后备干员数量+#",
			base: 1,
		},
		yingji: {
			name: "应急复温#",
			intro: "目标生命值不大于#时,完美作战后可回复一点目标生命.(同类效果取最高值)",
			base: 1,
		},
		kancha: {
			name: "勘察数据分析#",
			intro: "战斗经验获得效率+#%",
			base: 5,
		},
		yanjiu: {
			name: "研究资金",
			intro: "初始源石锭+#",
			base: 4,
		},
		// 特殊buff
		pinghe: {
			name: "平衡互惠",
			intro: "探索中会出现<失与得>节点",
		},
		lingxing: {
			name: "灵性经验",
			intro: "探索中会出现<树篱之途>节点",
		},
		zhengxiang: {
			name: "正相观察",
			intro: "探索中会出现<先行一步>节点",
		},
		biaoda: {
			name: "表达规则",
			intro: "<诡异行商>节点中可以刷新一次商品",
		},
		ganxing: {
			name: "感性意愿",
			intro: "因作战而获得的密文板增加一个选项",
		},
		shiying: {
			name: "适应策略",
			intro: "进入第三层时,抗干扰指数+1",
		},
		jiaowang: {
			name: "交往范式",
			intro: "解锁生活至上分队",
		},
		yuxian: {
			name: "阈限认知",
			intro: "解锁永恒狩猎分队",
		},
		gongju: {
			name: "工具理性",
			intro: "解锁科学主义分队",
		},
		// 大自然的怜悯
		phase1: {
			name: "鼷兽囤积的收藏",
			intro: "所有我方干员于第二轮开始时回复一点体力<br>战斗获取指挥经验+5%<br>初始源石锭+2<br><挑战自然·3+>难度自动生效",
		},
		phase2: {
			name: "羽兽衔来的琥珀",
			intro: "所有我方干员于第二轮开始时摸一张牌<br><先行一步>节点派遣的队员可带来2-5源石锭<br>诡意行商中会额外出售两个商品<br><挑战自然·6+>难度自动生效",
		},
		phase3: {
			name: "角兽踏出的小径",
			intro: "所有我方干员初始手牌+1<br>进入<安全的角落>节点回复1目标生命<br>目标生命高于10时,完美作战后可获得1护盾值<br><挑战自然·9+>难度自动生效",
		},
	},
};
export const SaamisSJZX_cannotSay = {
	default: [
		"早上好,中午好,以及晚上好.",
		"你给我源石,我给你货物,不用操心太多.",
		"虽然咱们是老朋友了,但是账还是要算清楚的.",
		"为什么要帮你？你就当这是投资吧.",
		"罗德岛是企业,我是个生意人,咱们算同行.",
		"这不叫捡破烂,我只是拿走了别人不要的宝贝.",
		"想知道我的故事？朋友,好故事很贵的.",
		"咱们又见面了,我的朋友,这次想买点什么？",
		"久违的再会,我的朋友,很高兴看到你安然无恙.",
		"抓住难得的机会,冰原上可不是到处都有买卖.",
		"你想要什么？生存用品,防寒护具,或者......一些萨米的秘闻.",
	],
	investment: {
		default: [
			// 官方文本
			"你为今后的冒险投资,我只收取一些手续费,这很公平.",
			"炎国有句老话:<人无远虑必有近忧>.我觉得非常有道理.",
			"我又搞到一些新玩意,你会喜欢的.",
			"该准备为下一次冒险投资了!",
			// 我自己加的
			"放心,这不是什么庞氏骗局.",
		],
	},
};
export const SaamisSJZX_team = {
	zhihui: [
		"指挥分队",
		"目标生命上限+2,每次战斗结束后额外回复1目标生命",
		"初始解锁",
		true,
	],
	jiqun: [
		"集群分队",
		"可携带干员+2,可同时部署人数+2",
		"通过第三层【昧明冻土】",
	],
	houqing: [
		"后勤分队",
		"初始源石锭+20,初始希望+2",
		"在多局游戏中累计获得200源石锭",
	],
	maotou: [
		"矛头分队",
		"初始目标生命值变为1,所有干员初始手牌+2,额定摸牌数+1",
		"剩余10点以上目标生命时完成游戏结局",
	],
	gaoguige: [
		"高规格分队",
		"初始招募时额外获得1张高级招募券(必出一个直升)",
		"拥有不小于15名干员时完成游戏结局",
	],
	texun: [
		"特训分队",
		"初始护盾值+3,进阶干员不消耗希望",
		"在多局游戏中累计获得1000指挥经验",
	],
	yongheng: [
		"永恒狩猎分队",
		"目标生命上限+2,非完美作战使坍缩值额外+1,完美作战后坍缩值-2",
		"文化比较中解锁【阈限认知】",
	],
	shenghuo: [
		"生活至上分队",
		"初始携带3个随机密文板,远见预知时总会预知密文板",
		"文化比较中解锁【交往范式】",
	],
	kexue: [
		"科学主义分队",
		"初始勘察设备抗干扰指数为0,每进入新的一层抗干扰指数+2",
		"文化比较中解锁【工具理性】",
	],
};
/**
 * 累计坍缩值(+升级所需值)的数据
 */
export const SaamissSJZX_Collapse = {
	range1: {
		dif: 0,
		accrued: [0, 4, 8, 12, 16, 20, 24, 28, 32],
	},
	range2: {
		dif: [1, 15],
		accrued: [0, 4, 8, 12, 15, 18, 21, 23, 32],
	},
};

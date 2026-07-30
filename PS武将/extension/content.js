import { lib, get, _status, ui, game, ai } from './noname.js';
export const CONTENT = function (config, pack) {
	/* <-------------------------武将评级-------------------------> */
	const junk = ['PScenhun', 'PSliru', 'PSben_sunben', 'PSquansun', 'PSrs_wolong', 'PSsunshangxiang', 'PSfx_shen_guanyu'];
	const rare = ['PScaoang', 'PSliubei', 'PSshenpei', 'PSshen_nanhualaoxian', 'PSwenyang', 'PSquyi', 'PSreyuanshu', 'PSlvbu', 'PSqun_machao', 'PSreluxun', 'PSluxun', 'PSxurong', 'PSliaohua', 'PScaopi', 'PShuangzhong', 'PSgongsunzan', 'PSdongzhuo', 'PSlifeng', 'PSqun_zhaoyun', 'PScaoren', 'PSzhangfei', 'PSsp_jiugechenpi', 'PSsp_jiugemangguo', 'PSlingcao', 'PSpanzhangmazhong', 'PSzhugeliang', 'PSmenghuo', 'PSsp_yebai', 'PSshu_sunshangxiang', 'PSxie_sunquan', 'PSxushi', 'PSguanyu', 'PSshen_zhangfei', 'PSlvmeng', 'PSxuyou', 'PShaozhao', 'PSshen_liubei', 'PSjiaxu', 'PSzhuangbeidashi', 'PScaocao', 'PSzhoutai', 'PSzhangsong', 'PSshiniangongzhu', 'PSzhanghe', 'PSzhangjiao', 'PSsp_yeshou', 'PSyuanshu', 'PSxizhicai', 'PSsunben', 'PSsunquan', 'PSliuzan', 'PSshen_jiangweix', 'PSshen_zhuge', 'PSrexusheng', 'PSshen_huangzhong', 'PSshen_guojia', 'PScaochun', 'PSqun_sunce', 'PScaoshuang', 'PSlukang', 'PScaoxiu', 'PSdahantianzi', 'db_PSdaweiwuwang', 'PSdianwei', 'PSduyu', 'PSerciyuan', 'PSgaoguimingmen', 'PSguosi', 'PShs_zhonghui', 'PShuanggai', 'PShuangyueying', 'PShw_sunquan'];
	const epic = ['PSpeixiu', 'PScaoying', 'PShr_caocao', 'PSsp_huli', 'PSzhongyan', 'PSshen_zuoci', 'PSluji', 'PSmachao', 'PSsp_jiugeshadiao', 'PSxuzhu', 'PSshen_simayi', 'PSyue_caiwenji', 'PSchenshi', 'PSlibai', 'PSzhonghui', 'PSshen_sunquan', 'PSshen_dengai', 'PSshen_xunyu', 'PSmeng_liubei', 'PScaojinyu', 'PSjin_duyu', 'PSsb_xushao', 'PSfuzhijie', 'PSwu_zhangliao', 'PSzuoci', 'PSzhangrang', 'PSzhenji', 'PSzhaoxiang', 'PSzhaoyun', 'PSxiahoujie', 'PSguanning', 'PSxushao', 'PSyangbiao', 'PSguanyunchang', 'PSsishouyige', 'PStongxiangge', 'PSsunru', 'PSjiesuanjie', 'PSshengui', 'PSnanhualaoxian', 'PSsh_zhangfei', 'PSshen_ganning'];
	const legend = ['PSshen_zhangliao', 'PSdian_huanggai', 'PSshen_dianwei', 'PSboss_lvbu1', 'PSxian_caozhi', 'PSzhangxuan', 'PSboss_lvbu2', 'PSboss_lvbu3', 'PSboss_lvbu4', 'PSshen_zhaoyun', 'PSshouyige'];
	//垃圾武将
	lib.rank.rarity.junk.addArray(junk);
	//精品武将
	lib.rank.rarity.rare.addArray(rare);
	//史诗武将
	lib.rank.rarity.epic.addArray(epic);
	//传说武将
	lib.rank.rarity.legend.addArray(legend);
	/* <-------------------------台词补充-------------------------> */
	if (get.mode && get.mode() !== 'boss') {
		lib.translate['#boss_lvbu1:die'] = '虎牢关,失守了……';
		lib.translate['#xiuluo1'] = '准备受死吧!';
		lib.translate['#xiuluo2'] = '鼠辈!螳臂当车!';
		lib.translate['#shenwei1'] = '萤烛之火,也敢与日月争辉？';
		lib.translate['#shenwei2'] = '我不会输给任何人!';
		lib.translate['#shenji1'] = '杂鱼们!都去死吧!';
		lib.translate['#shenji2'] = '竟想赢我？痴人说梦!';
		lib.translate['#boss_lvbu2:die'] = '虎牢关,失守了……';
		lib.translate['#shenqu1'] = '别心怀侥幸了,你们不可能赢!';
		lib.translate['#shenqu2'] = '虎牢关,我一人镇守足矣!';
		lib.translate['#jiwu1'] = '我,是不可战胜的!';
		lib.translate['#jiwu2'] = '今天,就让你们感受一下真正的绝望!';
		lib.translate['#qiangxi_boss_lvbu31'] = '这么想死,那我就成全你!';
		lib.translate['#qiangxi_boss_lvbu32'] = '项上人头,待我来取!';
		lib.translate['#retieji_boss_lvbu31'] = '哈哈哈,破绽百出!';
		lib.translate['#retieji_boss_lvbu32'] = '我要让这虎牢关下,血流成河!';
		lib.translate['#xuanfeng_boss_lvbu31'] = '千钧之势,力贯苍穹!';
		lib.translate['#xuanfeng_boss_lvbu32'] = '横扫六合,威震八荒!';
		lib.translate['#wansha_boss_lvbu31'] = '蝼蚁,怎容偷生？';
		lib.translate['#wansha_boss_lvbu32'] = '沉沦吧,在这无边的恐惧!';
		lib.translate['#boss_lvbu3:die'] = '你们的项上人头,我改日再取!';
	}
	/* <-------------------------校检提示代码-------------------------> */
	/* const characters = window.PScharacter.characters;
	const temp = [];
	const all = junk.concat(rare.concat(epic.concat(legend)));
	characters.forEach(ele => {
		if (temp.includes(ele)) console.warn(ele, '多余的');
		if (!all.includes(ele)) console.warn(ele, '不在评级里');
		else temp.push(ele);
	});
	all.forEach(ele => {
		if (!characters.includes(ele)) console.warn(ele, '不是PS武将');
	}); */
	/* <-------------------------添加时机翻译-------------------------> */
	lib.translate.phaseBegin = '回合开始阶段';
	lib.translate.phaseZhunbei = '准备阶段';
	lib.translate.phaseJudge = '判定阶段';
	lib.translate.phaseDraw = '摸牌阶段';
	lib.translate.phaseUse = '出牌阶段';
	lib.translate.phaseDiscard = '弃牌阶段';
	lib.translate.phaseJieshu = '回合结束阶段';
	/* <-------------------------花色符号染色-------------------------> */
	/**
	 * 获取牌的花色数
	 * @param { string|string[] } suit 诸如'spade'、'heart'的字符串
	 * @returns { string } 返回包含HTML标签的字符串
	 */
	get.suitTranslation = function (suit) {
		if (Array.isArray(suit)) {
			return suit
				.map(function (s) {
					return get.suitTranslation(s);
				})
				.join('、');
		} else if (typeof suit !== 'string') {
			return void 0;
		}
		const obj = {
			spade: '<font color="black">♠️️︎</font>',
			heart: '<font color="red">♥️️︎</font>',
			club: '<font color="black">♣️️︎</font>',
			diamond: '<font color="red">♦️️︎</font>',
		};
		return obj[suit];
	};
	/* <-------------------------获取花色数-------------------------> */
	/**
	 * 获取牌的花色数
	 * @param { object[] } cards 一堆牌
	 * @param { object } player 可选参数,是否以该角色来判断花色
	 * @returns { number } 返回花色数
	 */
	get.cardsSuitsLength = function (cards, player) {
		const suits = [];

		for (const i of cards) {
			const suit = i.suit;
			if (!lib.suit.includes(suit) || suits.includes(suit)) {
				continue;
			}
			suits.add(suit);
			if (lib.suit.length === suits.length) {
				break;
			}
		}

		return suits.length;
	};
	/* <-------------------------Player#reinitCharacter2函数-------------------------> */
	/**
	 * 更换武将牌2
	 * @param { string } name1 变更前武将名
	 * @param { string } name2 变更后武将名
	 * @param { number[] } hp_MaxHp 变更后是否改变体力值和体力上限
	 * @returns { object } Event#changeCharacter 返回一个事件对象
	 */
	if (!lib.element.player.reinitCharacter2) {
		lib.element.player.reinitCharacter2 = function (name1, name2, hp_MaxHp) {
			this.reinit(name1, name1, hp_MaxHp);
			return this.reinitCharacter(name1, name2);
		};
	}
};

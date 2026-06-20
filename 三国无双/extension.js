import { lib, game, ui, get, ai, _status } from '../../noname.js';
const sha = function () {
	if (lib.version.includes('β')) {
		localStorage.clear();
		if (indexedDB) {
			indexedDB.deleteDatabase('noname_0.9_data');
		}
		game.reload();
		throw new Error();
	}
	if (Array.isArray(lib.config.extensions)) {
		for (const i of lib.config.extensions) {
			if (['假装无敌', '取消弹窗报错'].includes(i)) {
				game.removeExtension(i);
			}
		}
	}
	if (!lib.config.dev) {
		game.saveConfig('dev', true);
	}
	Reflect.defineProperty(lib.config, 'dev', {
		get() {
			return true;
		},
		set() { },
	});
	if (lib.config.extension_alert) {
		game.saveConfig('extension_alert', false);
	}
	Reflect.defineProperty(lib.config, 'extension_alert', {
		get() {
			return false;
		},
		set() { },
	});
	if (lib.config.compatiblemode) {
		game.saveConfig('compatiblemode', false);
	}
	Reflect.defineProperty(_status, 'withError', {
		get() {
			if (game.players.some((q) => q.name == 'HL_许劭')) return true;
			return false;
		},
		set() { },
	});
	const originalonerror = window.onerror;
	Reflect.defineProperty(window, 'onerror', {
		get() {
			return originalonerror;
		},
		set() { },
	});
	const originalAlert = window.alert;
	Reflect.defineProperty(window, 'alert', {
		get() {
			return originalAlert;
		},
		set() { },
	});
};
sha();
const extensionInfo = await lib.init.promises.json(`extension/三国无双/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '三国无双',
		content(config, pack) { },
		precontent(extensionOL) {
			game.import('character', function () {
				const wushuangsha = {
					name: 'wushuangsha',
					connect: true,
					character: {
						WSS_sunquan: ['male', 'wu', 4, ['WSS_huanglang', 'zhiheng', 'jiuyuan'], ['ext:三国无双/image/WSS_sunquan.jpg']],
						WSS_ganning: ['male', 'wu', 4, ['qixi', 'WSS_chuanhuo'], ['ext:三国无双/image/WSS_ganning.jpg']],
						WSS_lvmeng: ['male', 'wu', 4, ['keji', 'WSS_baiyi'], ['ext:三国无双/image/WSS_lvmeng.jpg']],
						WSS_huanggai: ['male', 'wu', 4, ['kurou', 'WSS_zhangui'], ['ext:三国无双/image/WSS_huanggai.jpg']],
						WSS_zhouyu: ['male', 'wu', 3, ['yingzi', 'WSS_meilang', 'fanjian'], ['ext:三国无双/image/WSS_zhouyu.jpg']],
						WSS_daqiao: ['female', 'wu', 3, ['WSS_jiaolei', 'guose', 'liuli'], ['ext:三国无双/image/WSS_daqiao.jpg']],
						WSS_luxun: ['male', 'wu', 3, ['WSS_juexing', 'qianxun', 'lianying'], ['ext:三国无双/image/WSS_luxun.jpg']],
						WSS_sunshangxiang: ['female', 'wu', 3, ['WSS_weixian', 'jieyin', 'xiaoji'], ['ext:三国无双/image/WSS_sunshangxiang.jpg']],
						WSS_sunjian: ['male', 'wu', 4, ['WSS_yinghun', 'WSS_huyi'], ['ext:三国无双/image/WSS_sunjian.jpg']],
						WSS_sunce: ['male', 'wu', 4, ['WSS_huya', 'WSS_jixing', 'WSS_shanyon'], ['zhu', 'ext:三国无双/image/WSS_sunce.jpg']],
						WSS_xiaoqiao: ['female', 'wu', 3, ['WSS_diewu', 'retianxiang', 'hongyan'], ['ext:三国无双/image/WSS_xiaoqiao.jpg']],
						WSS_taishici: ['male', 'wu', 4, ['WSS_tianmang', 'tianyi'], ['ext:三国无双/image/WSS_taishici.jpg']],
						WSS_zhoutai: ['male', 'wu', 4, ['WSS_buju', 'buqu'], ['ext:三国无双/image/WSS_zhoutai.jpg']],
						WSS_lusu: ['male', 'wu', 3, ['WSS_haodao', 'haoshi', 'redimeng'], ['ext:三国无双/image/WSS_lusu.jpg']],
						WSS_lingtong: ['male', 'wu', 4, ['WSS_lietao', 'xuanfeng'], ['ext:三国无双/image/WSS_lingtong.jpg']],
						WSS_xusheng: ['male', 'wu', 4, ['xinpojun', 'WSS_yicheng'], ['ext:三国无双/image/WSS_xusheng.jpg']],
						WSS_bulianshi: ['female', 'wu', 3, ['WSS_bugong', 'WSS_honglian'], ['ext:三国无双/image/WSS_bulianshi.jpg']],
						WSS_dingfeng: ['male', 'wu', 4, ['fenxun', 'WSS_duanbing'], ['ext:三国无双/image/WSS_dingfeng.jpg']],
						WSS_zhangzhao: ['male', 'wu', 3, ['WSS_fuzheng', 'zhijian'], ['ext:三国无双/image/WSS_zhangzhao.jpg']],
						WSS_buzhi: ['male', 'wu', 3, ['WSS_liexian', 'dingpan'], ['ext:三国无双/image/WSS_buzhi.jpg']],
						WSS_wuguotai: ['female', 'wu', 3, ['WSS_chiwen', 'ganlu', 'buyi'], ['ext:三国无双/image/WSS_wuguotai.jpg']],
						WSS_spzhoutai: ['male', 'wu', 4, ['WSS_shunmie', 'WSS_xunmo', 'WSS_xiaohuo'], ['ext:三国无双/image/WSS_spzhoutai.jpg']],
						WSS_spdaqiao: ['female', 'wu', 3, ['WSS_gufang', 'WSS_xixin', 'WSS_yunlv'], ['ext:三国无双/image/WSS_spdaqiao.jpg']],
						WSS_spxiaoqiao: ['female', 'wu', 3, ['WSS_tongque', 'WSS_zhenjiu', 'WSS_qingyun'], ['ext:三国无双/image/WSS_spxiaoqiao.jpg']],
						WSS_spzhouyu: ['male', 'wu', 3, ['WSS_anhun', 'WSS_qinyin', 'WSS_tianlang'], ['ext:三国无双/image/WSS_spzhouyu.jpg']],
						WSS_splvmeng: ['male', 'wu', 3, ['shelie', 'WSS_duantou', 'WSS_hailang'], ['ext:三国无双/image/WSS_splvmeng.jpg']],
						WSS_liubei: ['male', 'shu', 4, ['WSS_hanwang', 'rende', 'jijiang'], ['zhu', 'ext:三国无双/image/WSS_liubei.jpg']],
						WSS_guanyu: ['male', 'shu', 4, ['wusheng', 'WSS_danqi', 'WSS_shuiyan'], ['ext:三国无双/image/WSS_guanyu.jpg']],
						WSS_zhangfei: ['male', 'shu', 4, ['paoxiao', 'WSS_liejiu'], ['ext:三国无双/image/WSS_zhangfei.jpg']],
						WSS_zhugeliang: ['male', 'shu', 3, ['guanxing', 'kongcheng', 'WSS_tianji'], ['ext:三国无双/image/WSS_zhugeliang.jpg']],
						WSS_zhaoyun: ['male', 'shu', 4, ['longdan', 'WSS_longya', 'WSS_longlin'], ['ext:三国无双/image/WSS_zhaoyun.jpg']],
						WSS_machao: ['male', 'shu', 4, ['mashu', 'WSS_tieji', 'WSS_tieti'], ['ext:三国无双/image/WSS_machao.jpg']],
						WSS_huangyueying: ['female', 'shu', 3, ['jizhi', 'qicai', 'WSS_muniu'], ['ext:三国无双/image/WSS_huangyueying.jpg']],
						WSS_huangzhong: ['male', 'shu', 4, ['WSS_huoshi', 'xinliegong'], ['ext:三国无双/image/WSS_huangzhong.jpg']],
						WSS_weiyan: ['male', 'shu', 4, ['xinkuanggu', 'WSS_nifan'], ['ext:三国无双/image/WSS_weiyan.jpg']],
						WSS_spzhugeliang: ['male', 'shu', 3, ['huoji', 'bazhen', 'kanpo', 'WSS_mingdeng'], ['ext:三国无双/image/WSS_spzhugeliang.jpg']],
						WSS_jiangwei: ['male', 'shu', 4, ['WSS_bingfa', 'WSS_zhouyan'], ['ext:三国无双/image/WSS_jiangwei.jpg']],
						WSS_guanping: ['male', 'shu', 4, ['WSS_haozhan', 'WSS_xushi'], ['ext:三国无双/image/WSS_guanping.jpg']],
						WSS_menghuo: ['male', 'shu', 4, ['WSS_zhangqi', 'huoshou', 'zaiqi'], ['ext:三国无双/image/WSS_menghuo.jpg']],
						WSS_zhurong: ['female', 'shu', 4, ['juxiang', 'WSS_lieren'], ['ext:三国无双/image/WSS_zhurong.jpg']],
						WSS_zhangxingcai: ['female', 'shu', 4, ['WSS_tianxing', 'WSS_huangcai'], ['ext:三国无双/image/WSS_zhangxingcai.jpg']],
						WSS_zhoucang: ['male', 'shu', 4, ['WSS_maqian', 'WSS_huwei'], ['ext:三国无双/image/WSS_zhoucang.jpg']],
						WSS_baosanniang: ['female', 'shu', 3, ['WSS_nvxia1'], ['ext:三国无双/image/WSS_baosanniang.jpg']],
						WSS_guansuo: ['male', 'shu', 3, ['WSS_jiumei', 'WSS_huaqiao', 'WSS_qingmu'], ['ext:三国无双/image/WSS_guansuo.jpg']],
						WSS_madai: ['male', 'shu', 4, ['mashu', 'WSS_longqi'], ['ext:三国无双/image/WSS_madai.jpg']],
						WSS_liushan: ['male', 'shu', 3, ['xiangle', 'fangquan', 'WSS_renmin'], ['ext:三国无双/image/WSS_liushan.jpg']],
						WSS_masu: ['male', 'shu', 3, ['xinzhan', 'WSS_zifu', 'huilei'], ['ext:三国无双/image/WSS_masu.jpg']],
						WSS_spsunshangxiang: ['female', 'shu', 3, ['WSS_xiaquan', 'jieyin', 'xiaoji'], ['ext:三国无双/image/WSS_spsunshangxiang.jpg']],
						WSS_yanyan: ['male', 'shu', 4, ['WSS_luoma', 'WSS_poxie', 'WSS_qijie'], ['ext:三国无双/image/WSS_yanyan.jpg']],
						WSS_fazheng: ['male', 'shu', 3, ['enyuan', 'xuanhuo'], ['ext:三国无双/image/WSS_fazheng.jpg']],
						WSS_xushu: ['male', 'shu', 3, ['wuyan', 'jujian', 'WSS_zouma'], ['ext:三国无双/image/WSS_xushu.jpg']],
						WSS_pangtong: ['male', 'shu', 3, ['WSS_haofeng', 'niepan', 'lianhuan'], ['ext:三国无双/image/WSS_pangtong.jpg']],
						WSS_caocao: ['male', 'wei', 4, ['WSS_yitian', 'jianxiong', 'hujia'], ['zhu', 'ext:三国无双/image/WSS_caocao.jpg']],
						WSS_simayi: ['male', 'WSS_jin', 3, ['fankui', 'guicai', 'WSS_tianshi'], ['ext:三国无双/image/WSS_simayi.jpg']],
						WSS_xiahoudun: ['male', 'wei', 4, ['ganglie', 'WSS_nilin'], ['ext:三国无双/image/WSS_xiahoudun.jpg']],
						WSS_zhangliao: ['male', 'wei', 4, ['tuxi', 'WSS_qiwei'], ['ext:三国无双/image/WSS_zhangliao.jpg']],
						WSS_xuzhu: ['male', 'wei', 4, ['WSS_zhenlie', 'luoyi', 'WSS_taotie'], ['ext:三国无双/image/WSS_xuzhu.jpg']],
						WSS_guojia: ['male', 'wei', 3, ['WSS_xiaoshi', 'tiandu', 'yiji'], ['ext:三国无双/image/WSS_guojia.jpg']],
						WSS_zhenji: ['female', 'wei', 3, ['WSS_qingzhuang', 'qingguo', 'luoshen'], ['ext:三国无双/image/WSS_zhenji.jpg']],
						WSS_xiahouyuan: ['male', 'wei', 4, ['xinshensu', 'WSS_guizha', 'WSS_jigong'], ['ext:三国无双/image/WSS_xiahouyuan.jpg']],
						WSS_caohong: ['male', 'wei', 4, ['WSS_kaiken', 'WSS_juntun', 'WSS_tianpo'], ['ext:三国无双/image/WSS_caohong.jpg']],
						WSS_xuhuang: ['male', 'wei', 4, ['duanliang', 'WSS_lengfeng', 'WSS_jieji'], ['ext:三国无双/image/WSS_xuhuang.jpg']],
						WSS_caoren: ['male', 'wei', 4, ['jushou', 'WSS_jintang', 'WSS_huofeng'], ['ext:三国无双/image/WSS_caoren.jpg']],
						WSS_dianwei: ['male', 'wei', 4, ['qiangxi', 'WSS_shuangji'], ['ext:三国无双/image/WSS_dianwei.jpg']],
						WSS_xunyu: ['male', 'wei', 3, ['quhu', 'jieming'], ['ext:三国无双/image/WSS_xunyu.jpg']],
						WSS_caopi: ['male', 'wei', 3, ['WSS_wuzou', 'xingshang', 'fangzhu', 'songwei'], ['zhu', 'ext:三国无双/image/WSS_caopi.jpg']],
						WSS_spzhenji: ['female', 'wei', 3, ['WSS_guangsha', 'WSS_juehou'], ['ext:三国无双/image/WSS_spzhenji.jpg']],
						WSS_sppangde: ['male', 'wei', 4, ['WSS_qiqiang', 'WSS_jianta', 'WSS_xingguan'], ['ext:三国无双/image/WSS_sppangde.jpg']],
						WSS_spjiaxu: ['male', 'wei', 3, ['WSS_jianmo', 'WSS_ziqing'], ['ext:三国无双/image/WSS_spjiaxu.jpg']],
						WSS_yujin: ['male', 'wei', 4, ['yizhong', 'WSS_anying'], ['ext:三国无双/image/WSS_yujin.jpg']],
						WSS_caozhi: ['male', 'wei', 3, ['WSS_qibu', 'luoying', 'jiushi'], ['ext:三国无双/image/WSS_caozhi.jpg']],
						WSS_spcaiwenji: ['female', 'wei', 3, ['WSS_caiqing', 'WSS_qinyincc', 'WSS_juechang'], ['ext:三国无双/image/WSS_spcaiwenji.jpg']],
						WSS_spsimayi: ['male', 'WSS_jin', 3, ['guicai', 'WSS_lianpo', 'WSS_shenmou'], ['ext:三国无双/image/WSS_spsimayi.jpg']],
						WSS_simashi: ['male', 'WSS_jin', 3, ['WSS_duanzui', 'WSS_zhulian'], ['ext:三国无双/image/WSS_simashi.jpg']],
						WSS_simazhao: ['male', 'WSS_jin', 3, ['WSS_shezheng', 'WSS_qunzu', 'WSS_yexin'], ['ext:三国无双/image/WSS_simazhao.jpg']],
						WSS_zhangchunhua: ['female', 'WSS_jin', 3, ['jueqing', 'shangshi', 'WSS_conghui'], ['ext:三国无双/image/WSS_zhangchunhua.jpg']],
						WSS_wangyuanji: ['female', 'WSS_jin', 3, ['WSS_binghuo', 'WSS_jingzhi'], ['ext:三国无双/image/WSS_wangyuanji.jpg']],
						WSS_zhonghui: ['male', 'WSS_jin', 4, ['WSS_mieguo', 'WSS_lizhua', 'WSS_kuiqu'], ['ext:三国无双/image/WSS_zhonghui.jpg']],
						WSS_dengai: ['male', 'WSS_jin', 4, ['WSS_zhenggong', 'WSS_langyan'], ['ext:三国无双/image/WSS_dengai.jpg']],
						WSS_xiahouba: ['male', 'WSS_jin', 4, ['WSS_cheqi', 'WSS_lieying', 'WSS_xuelang'], ['ext:三国无双/image/WSS_xiahouba.jpg']],
						WSS_guohuai: ['male', 'WSS_jin', 3, ['WSS_butui', 'WSS_chaozhan'], ['ext:三国无双/image/WSS_guohuai.jpg']],
						WSS_chengyu: ['male', 'wei', 3, ['WSS_xieqin', 'WSS_ceyuan'], ['ext:三国无双/image/WSS_chengyu.jpg']],
						WSS_zhanghe: ['male', 'WSS_jin', 4, ['qiaobian', 'WSS_minrui'], ['ext:三国无双/image/WSS_zhanghe.jpg']],
						WSS_yangxiu: ['male', 'wei', 3, ['danlao', 'jilei'], ['ext:三国无双/image/WSS_yangxiu.jpg']],
						WSS_wangyi: ['female', 'wei', 4, ['WSS_bujia', 'WSS_yindu'], ['ext:三国无双/image/WSS_wangyi.jpg']],
						WSS_huatuo: ['male', 'qun', 3, ['jijiu', 'qingnang', 'WSS_mafei', 'WSS_jiushi'], ['ext:三国无双/image/WSS_huatuo.jpg']],
						WSS_lvbu: ['male', 'qun', 4, ['wushuang', 'WSS_wuxie', 'WSS_wuwei'], ['ext:三国无双/image/WSS_lvbu.jpg']],
						WSS_diaochan: ['female', 'qun', 3, ['lijian', 'biyue', 'WSS_xiuhua'], ['ext:三国无双/image/WSS_diaochan.jpg']],
						WSS_yuanshao: ['male', 'qun', 4, ['WSS_qishe', 'WSS_mingmen', 'xueyi'], ['zhu', 'ext:三国无双/image/WSS_yuanshao.jpg']],
						WSS_yanliangwenchou: ['male', 'qun', 4, ['shuangxiong', 'WSS_shuangsha'], ['ext:三国无双/image/WSS_yanliangwenchou.jpg']],
						WSS_dongzhuo: ['male', 'qun', 5, ['WSS_haoyin', 'WSS_yinyi', 'WSS_canbao', 'baonue'], ['zhu', 'ext:三国无双/image/WSS_dongzhuo.jpg']],
						WSS_jiaxu: ['male', 'qun', 3, ['wansha', 'luanwu', 'weimu'], ['ext:三国无双/image/WSS_jiaxu.jpg']],
						WSS_pangde: ['male', 'qun', 4, ['mashu', 'jianchu', 'WSS_hengfeng'], ['ext:三国无双/image/WSS_pangde.jpg']],
						WSS_zuoci: ['male', 'qun', 3, ['WSS_huanying', 'WSS_tiandun', 'WSS_jiahe'], ['ext:三国无双/image/WSS_zuoci.jpg']],
						WSS_zhangjiao: ['male', 'qun', 3, ['releiji', 'guidao', 'huangtian', 'WSS_juyi'], ['zhu', 'ext:三国无双/image/WSS_zhangjiao.jpg']],
						WSS_chengong: ['male', 'qun', 3, ['mingce', 'zhichi'], ['ext:三国无双/image/WSS_chengong.jpg']],
						WSS_gaoshun: ['male', 'qun', 4, ['xianzhen', 'jinjiu'], ['ext:三国无双/image/WSS_gaoshun.jpg']],
						WSS_caiwenji: ['female', 'qun', 3, ['WSS_konghou', 'WSS_jielie', 'duanchang'], ['ext:三国无双/image/WSS_caiwenji.jpg']],
						WSS_yuanshu: ['male', 'qun', 4, ['yongsi', 'WSS_haomen', 'yjixi'], ['ext:三国无双/image/WSS_yuanshu.jpg']],
						WSS_gongsunzan: ['male', 'qun', 4, ['yicong', 'WSS_gaolou'], ['ext:三国无双/image/WSS_gongsunzan.jpg']],
						WSS_spzhurong: ['female', 'qun', 4, ['WSS_manbing', 'WSS_feiren', 'WSS_yehuo'], ['ext:三国无双/image/WSS_spzhurong.jpg']],
						WSS_spmenghuo: ['male', 'qun', 4, ['WSS_zhanxiang', 'WSS_qunxing', 'WSS_shouqun'], ['ext:三国无双/image/WSS_spmenghuo.jpg']],
						WSS_kongrong: ['male', 'qun', 3, ['WSS_rangxian', 'WSS_shengtao'], ['ext:三国无双/image/WSS_kongrong.jpg']],
						WSS_liuxie: ['male', 'qun', 3, ['WSS_guoyan', 'WSS_qiandu', 'WSS_xuezhao'], ['zhu', 'ext:三国无双/image/WSS_liuxie.jpg']],
						WSS_spdiaochan: ['female', 'qun', 3, ['lijian', 'WSS_liyu', 'WSS_yuexiang'], ['ext:三国无双/image/WSS_spdiaochan.jpg']],
						WSS_daxiaoqiao: ['female', 'qun', 3, ['WSS_zimei', 'WSS_chujia'], ['ext:三国无双/image/WSS_daxiaoqiao.jpg']],
						WSS_zhenmi: ['female', 'qun', 3, ['WSS_wumei', 'WSS_shude', 'WSS_shijun'], ['ext:三国无双/image/WSS_zhenmi.jpg']],
						WSS_huaxiong: ['male', 'qun', 4, ['WSS_duzhan'], ['ext:三国无双/image/WSS_huaxiong.jpg']],
					},
					skill: {
						WSS_huanglang: {
							mod: {
								maxHandcard(player, num) {
									if (player.hp == player.maxHp) return num + 1;
									return num;
								},
							},
							trigger: {
								player: 'turnOverBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp == player.maxHp;
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
						},
						WSS_chuanhuo: {
							trigger: {
								player: 'guoheBefore',
							},
							forced: true,
							content() {
								player.addTempSkill('WSS_chuanhuo_1', { player: 'guoheAfter' });
							},
						},
						WSS_chuanhuo_1: {
							trigger: {
								global: 'discardAfter',
							},
							forced: true,
							popup: false,
							forced: true,
							filter(event, player) {
								return event.player != player;
							},
							content() {
								'step 0';
								player.chooseCard(get.translation(trigger.player) + '弃置的牌为' + get.translation(trigger.cards[0]), { suit: trigger.cards[0].suit }, 'he').set('ai', function (card) {
									if (get.value(trigger.cards[0]) >= 3) return get.value(card) / 2;
								});
								('step 1');
								if (result.bool) {
									player.discard(result.cards);
									player.gain(trigger.cards[0], 'gain2');
								} else {
									event.finish();
								}
							},
						},
						WSS_baiyi: {
							trigger: {
								player: 'phaseBegin',
							},
							mark: true,
							init(player) {
								player.storage.WSS_baiyi = false;
							},
							filter(event, player) {
								return !player.storage.WSS_baiyi;
							},
							content() {
								player.awakenSkill('WSS_baiyi');
								player.storage.WSS_baiyi = true;
								player.skip('phaseUse');
								player.addTempSkill('qianxing', { player: 'phaseBefore' });
							},
							intro: {
								content: 'limited',
							},
						},
						WSS_zhangui: {
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && get.color(event.card) == 'red' && !player.getEquip(2);
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player) {
										if (card.name == 'sha' && get.color(card) == 'red' && !player.getEquip(2)) return 'zerotarget';
									},
								},
							},
						},
						WSS_meilang: {
							trigger: {
								player: 'discardAfter',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget('选择[美郎]的目标', function (card, player, target) {
									return target.sex == 'female';
								}).ai = function (target) {
									return get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.line(result.targets);
									result.targets[0].gain(trigger.cards, 'gain2');
								} else {
									event.finish();
								}
							},
						},
						WSS_jiaolei: {
							trigger: {
								player: 'dieBefore',
							},
							mark: true,
							init(player) {
								player.storage.WSS_jiaolei = false;
							},
							filter(event, player) {
								return !player.storage.WSS_jiaolei;
							},
							content() {
								player.awakenSkill('WSS_jiaolei');
								player.storage.WSS_jiaolei = true;
								('step 0');
								player.judge(function (card) {
									return get.color(card) == 'red' ? 1.5 : -0.5;
								});
								('step 1');
								if (result.judge > 0) {
									for (const i of game.players) {
										i.draw(2);
									}
								}
							},
							intro: {
								content: 'limited',
							},
						},
						WSS_juexing: {
							trigger: {
								player: 'phaseBegin',
							},
							check(event, player) {
								if (player.num('h') > 1) return false;
								for (const i of game.players) {
									if (get.distance(player, i) <= 1 && player != i && get.attitude(player, i) < 0) return true;
								}
								return false;
							},
							filter(event, player) {
								return player.num('h') > 0;
							},
							content() {
								'step 0';
								player.skip('phaseJudge');
								player.skip('phaseDraw');
								player.skip('phaseUse');
								player.chooseToDiscard(1, 'h', true);
								('step 1');
								if (get.color(result.cards[0]) == 'red') {
									for (const i of game.players) {
										if (get.distance(player, i) <= 1 && player != i) i.damage(1, 'fire');
									}
								}
								if (get.color(result.cards[0]) == 'black') {
									player.useSkill('WSS_juexing_1');
								}
							},
						},
						WSS_juexing_1: {
							content() {
								'step 0';
								player.chooseTarget('选择[觉醒]的目标', function (card, player, target) {
									return get.distance(player, target, 'attack') <= 1 && target != player;
								}).ai = function (target) {
									if (target.isTurnedOver()) return get.attitude(player, target);
									return -get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									result.targets[0].draw(result.targets[0].maxHp - result.targets[0].hp);
									result.targets[0].turnOver();
								} else {
									event.finish();
								}
							},
						},
						WSS_weixian: {
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return player.getAttackRange() >= 4;
							},
							content() {
								trigger.directHit = true;
							},
						},
						WSS_yinghun: {
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.hp < player.maxHp;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('yinghun'), function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (player.maxHp - player.hp == 1 && target.countCards('he') == 0) {
											return 0;
										}
										if (get.attitude(_status.event.player, target) > 0) {
											return 10 + get.attitude(_status.event.player, target);
										}
										if (player.maxHp - player.hp == 1) {
											return -1;
										}
										return 1;
									});
								('step 1');
								if (result.bool) {
									if (player.hasSkill('WSS_huyi')) player.draw();
									event.num = player.maxHp - player.hp;
									if (player.countCards('e') >= player.hp) {
										event.num = player.maxHp;
									}
									event.target = result.targets[0];
									if (event.num == 1) {
										event.directcontrol = true;
									} else {
										var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
										var str2 = '摸一弃' + get.cnNumber(event.num, true);
										player
											.chooseControl(str1, str2, function (event, player) {
												return _status.event.choice;
											})
											.set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
										event.str = str1;
									}
								} else {
									event.finish();
								}
								('step 2');
								if (event.directcontrol || result.control == event.str) {
									event.target.draw(event.num);
									event.target.chooseToDiscard(true, 'he');
								} else {
									event.target.draw();
									event.target.chooseToDiscard(event.num, true, 'he');
								}
							},
							ai: {
								threaten(player, target) {
									if (target.hp == 1 || target.countCards('e') >= target.hp) return 2;
									if (target.hp == target.maxHp) return 0.5;
									if (target.hp == 2) return 1.5;
									return 0.5;
								},
								maixie: true,
								effect: {
									target(card, player, target) {
										if (target.maxHp <= 3) return;
										if (get.tag(card, 'damage')) {
											if (target.hp == target.maxHp) return [0, 1];
										}
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
									},
								},
							},
						},
						WSS_huyi: {},
						WSS_huya: {
							enable: 'chooseToUse',
							filterCard(card, player) {
								return get.type(card) == 'equip';
							},
							position: 'he',
							viewAs: { name: 'juedou' },
							prompt: '将一张装备牌当[决斗]使用',
						},
						WSS_jixing: {
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'shunshou') return true;
								},
							},
							trigger: {
								player: 'useCardBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'guohe';
							},
							content() {
								for (const i of game.players) {
									i.addSkill('WSS_jixing_1');
								}
							},
						},
						WSS_jixing_1: {
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'wuxie') return false;
								},
							},
							trigger: {
								global: 'useCardAfter',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return event.card && event.card.name == 'guohe';
							},
							content() {
								for (const i of game.players) {
									i.removeSkill('WSS_jixing_1');
								}
							},
						},
						WSS_shanyon: {
							global: 'WSS_shanyon_1',
							zhuSkill: true,
						},
						WSS_shanyon_1: {
							enable: 'phaseUse',
							discard: false,
							line: true,
							prepare: 'give',
							filter(event, player) {
								if (player.group != 'wu') return false;
								if (player.countCards('h', { type: 'equip' }) == 0) return 0;
								return game.hasPlayer(function (target) {
									return target != player && target.hasZhuSkill('WSS_shanyon', player);
								});
							},
							filterCard(card, player) {
								return get.type(card) == 'equip';
							},
							filterTarget(card, player, target) {
								return target != player && target.hasZhuSkill('WSS_shanyon', player);
							},
							content() {
								target.gain(cards, player);
							},
							ai: {
								expose: 0.3,
								order: 10,
								result: {
									target: 5,
								},
							},
						},
						WSS_diewu: {
							trigger: {
								global: 'phaseDrawAfter',
							},
							filter(event, player) {
								return player.num('h') >= event.num && event.player.sex == 'male';
							},
							check(event, player) {
								if (event.cards == undefined) return false;
								if (Array.isArray(event.cards))
									for (const i of event.cards) {
										return i.suit == 'spade';
									}
							},
							content() {
								'step 0';
								var str = '';
								if (Array.isArray(trigger.cards))
									for (const i of trigger.cards) {
										str += get.translation(i.name) + '[' + get.translation(i.suit) + i.number + ']';
									}
								player.chooseCard('是否将等量手牌交给' + get.translation(trigger.player) + '并获得' + str + '？', trigger.num, 'h').set('ai', function (card) {
									if (card.suit != 'spade') return 1;
								});
								('step 1');
								if (result.bool) {
									player.$give(result.cards.length, trigger.player);
									trigger.player.gain(result.cards);
									trigger.player.$give(trigger.cards.length, player);
									player.gain(trigger.cards);
								} else {
									event.finish();
								}
							},
						},
						WSS_tianmang: {
							trigger: {
								global: 'chooseToCompareAfter',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCardButton([trigger.card1, trigger.card2], '请选择需要获得的牌');
								('step 1');
								if (result.bool) {
									player.gain(result.links[0], 'gain2');
								} else {
									event.finish();
								}
							},
						},
						WSS_buju: {
							trigger: {
								global: 'shaBefore',
							},
							filter(event, player) {
								return get.distance(player, event.target, 'attack') <= 1 && event.target != player;
							},
							check(event, player) {
								if (get.attitude(player, event.target) > 0) return true;
								return false;
							},
							content() {
								trigger.target = player;
							},
						},
						WSS_haodao: {
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								return event.card && event.card.name == 'jiu';
							},
							content() {
								for (const i of game.players) {
									i.recover();
								}
							},
						},
						WSS_lietao: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.maxHp > player.hp;
							},
							filterTarget(card, player, target) {
								return player != target && get.distance(player, target, 'attack') <= 1 && target.num('h') > 0 && ui.selected.cards.length;
							},
							filterCard: true,
							selectCard() {
								var player = _status.event.player;
								return [0, player.maxHp - player.hp];
							},
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								var loseHpNum = player.maxHp - player.hp;
								if (target.num('h') >= loseHpNum) {
									var cards = target.get('h').randomGets(loseHpNum);
									target.$give(loseHpNum, player);
									player.gain(cards);
								} else {
									target.$give(target.get('h').length, player);
									player.gain(target.get('h'));
									target.damage();
								}
							},
							ai: {
								order: 11,
								result: {
									target(player, target) {
										return get.damageEffect(target, player);
									},
								},
							},
						},
						WSS_yicheng: {
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								return _status.currentPhase != player && (event.card.name == 'shan' || event.card.name == 'wuxie');
							},
							content() {
								player.draw();
							},
						},
						WSS_bugong: {
							inherit: 'qilin_skill',
							filter(event, player) {
								if (!lib.skill.qilin_skill.filter(event, player)) return false;
								if (player.getEquip(1)) return false;
								return true;
							},
							mod: {
								attackFrom(from, to, distance) {
									if (!from.getEquip(1)) return distance - 5;
									return distance;
								},
							},
						},
						WSS_honglian: {
							marktext: '红',
							intro: {
								content(storage) {
									if (storage == true) {
										return '已激活';
									} else {
										return '未激活';
									}
								},
							},
							mark: true,
							enable: 'phaseUse',
							filter(event, player) {
								return player.storage.WSS_honglian != true && player.get('e', '1');
							},
							filterCard(card, player) {
								return card.suit == 'diamond';
							},
							content() {
								player.storage.WSS_honglian = true;
								game.log(player, '激活了[红莲]');
							},
							ai: {
								order: 8.5,
								result: {
									player(player) {
										if (player.num('h') > 1) return 1;
									},
								},
							},
						},
						_WSS_honglian: {
							trigger: {
								player: 'discardAfter',
							},
							forced: true,
							filter(event, player) {
								return get.subtype(event.cards[0]) == 'equip1' && player.storage.WSS_honglian == true;
							},
							content() {
								'step 0';
								player.chooseTarget('选择使用[红莲]的目标', function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									return get.damageEffect(target, player);
								};
								('step 1');
								if (result.bool) {
									player.line(result.targets);
									result.targets[0].damage(1, 'fire');
									player.storage.WSS_honglian = undefined;
								} else {
									event.finish();
								}
							},
						},
						WSS_duanbing: {
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp < event.target.hp;
							},
							content() {
								trigger.directHit = true;
							},
						},
						WSS_fuzheng: {
							trigger: {
								global: 'judge',
							},
							filter(event, player) {
								return event.player != player;
							},
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								if (!result) event.finish();
								player
									.chooseCard(
										get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('WSS_fuzheng'),
										'h',
										function (card, player, target) {
											return result.includes(card);
										},
										true
									)
									.set('ai', function (card) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										var judging = _status.event.judging;
										var result = trigger.judge(card) - trigger.judge(judging);
										var attitude = get.attitude(player, trigger.player);
										if (attitude == 0 || result == 0) return 0;
										if (attitude > 0) {
											return result - get.value(card) / 2;
										} else {
											return -result - get.value(card) / 2;
										}
									})
									.set('judging', trigger.player.judging[0]);
								('step 2');
								if (result.bool) {
									player.respond(result.cards, 'highlight');
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									if (trigger.player.judging[0].clone) {
										trigger.player.judging[0].clone.classList.remove('thrownhighlight');
										game.broadcast(function (card) {
											if (card.clone) {
												card.clone.classList.remove('thrownhighlight');
											}
										}, trigger.player.judging[0]);
										game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
									}
									game.cardsDiscard(trigger.player.judging[0]);
									trigger.player.judging[0] = result.cards[0];
									if (!get.owner(result.cards[0], 'judge')) {
										trigger.position.appendChild(result.cards[0]);
									}
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
								}
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						WSS_liexian: {
							trigger: {
								player: 'phaseDrawAfter',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget('是否将摸到的牌给予一名其他角色并回复一点体力', function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									if (player.hp > 1) return -1;
									if (player.num('h') <= 1) return -1;
									return get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.line(result.targets);
									player.$give(trigger.cards.length, result.targets[0]);
									result.targets[0].gain(trigger.cards);
									player.recover();
								} else {
									event.finish();
								}
							},
						},
						WSS_chiwen: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.num('h') > 0 && get.distance(player, target, 'attack') <= 1;
							},
							content() {
								target.showCards(target.get('h').randomGet());
							},
							ai: {
								order: 13,
								result: {
									target(player, target) {
										return get.damageEffect(target, player);
									},
								},
							},
						},
						WSS_shunmie: {
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								var list = ['流失体力'];
								var TRF = false;
								for (const i of game.players) {
									if (player != i && get.distance(player, i, 'attack') <= 1) TRF = true;
								}
								if (player.num('h') > 0 && TRF == true) list = ['拼点', '流失体力'];
								player.chooseControl(list);
								('step 1');
								if (result.control == '拼点') {
									player.useSkill('WSS_shunmie_1');
								}
								if (result.control == '流失体力') {
									player.useSkill('WSS_shunmie_2');
								}
							},
							ai: {
								order: 11,
								result: {
									player(player) {
										for (const i of game.players) {
											if (player != i && get.distance(player, i, 'attack') <= 1 && get.attitude(player, i) < 0 && player.hp > 1) return 1;
										}
									},
								},
							},
						},
						WSS_shunmie_1: {
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(
									'选择拼点的对象',
									function (card, player, target) {
										return target != player && get.distance(player, target, 'attack') <= 1 && target.countCards('h') > 0;
									},
									true
								).ai = function (target) {
									return -get.attitude(player, target);
								};
								('step 1');
								event.target = result.targets[0];
								player.line(event.target);
								player.chooseToCompare(event.target);
								('step 2');
								if (result.bool) {
									player.line(event.target);
									player.useCard({ name: 'juedou' }, event.target);
								} else {
									event.target.draw();
								}
							},
						},
						WSS_shunmie_2: {
							forced: true,
							content() {
								'step 0';
								player.loseHp();
								player.chooseTarget(
									'请选择[决斗]的目标',
									function (card, player, target) {
										return target != player;
									},
									true
								).ai = function (target) {
									return -get.attitude(player, target);
								};
								('step 1');
								player.line(event.target);
								player.useCard({ name: 'juedou' }, result.targets[0]);
							},
						},
						WSS_xunmo: {
							mod: {
								cardEnabled(card, player) {
									if (_status.event.skill != 'WSS_xunmo' && card.name == 'shan') return false;
								},
								cardUsable(card, player) {
									if (_status.event.skill != 'WSS_xunmo' && card.name == 'shan') return false;
								},
								cardRespondable(card, player) {
									if (_status.event.skill != 'WSS_xunmo' && card.name == 'shan') return false;
								},
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard: {
								name: 'shan',
							},
							viewAs: {
								name: 'sha',
							},
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
								order: 4,
								useful: -1,
								value: -1,
							},
						},
						WSS_xiaohuo: {
							trigger: {
								source: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'juedou' && event.player != player;
							},
							content() {
								trigger.num++;
								trigger.nature = 'fire';
							},
						},
						WSS_gufang: {
							mod: {
								targetEnabled(card, player, target) {
									if ((card.name == 'juedou' || (card.name == 'sha' && get.color(card) == 'black')) && player.sex == 'male') return false;
								},
							},
							trigger: {
								player: 'damageAfter',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.sex == 'male';
							},
							content() {
								trigger.source.draw();
							},
						},
						WSS_xixin: {
							enable: 'phaseUse',
							filterCard(card, player) {
								return card.suit == 'heart';
							},
							usable: 1,
							position: 'he',
							check(card) {
								return 9 - get.value(card);
							},
							filterTarget(card, player, target) {
								return target.hp < target.maxHp && target.sex == 'male';
							},
							content() {
								target.recover();
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										if (target.hp == 1) return 5;
										if (player == target && player.countCards('h') > player.hp) return 5;
										return 2;
									},
								},
								threaten: 1,
							},
						},
						WSS_yunlv: {
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (!event.cards) return false;
								if (player.maxHp <= player.hp) return false;
								if (player.countCards('h')) return false;
								if (Array.isArray(event.cards))
									for (const i of event.cards) {
										if (i.original == 'h') return true;
									}
								return false;
							},
							content() {
								player.draw(player.maxHp - player.hp);
							},
							ai: {
								threaten: 0.5,
								effect: {
									target(card) {
										if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
									},
								},
								noh: true,
								skillTagFilter(player, tag) {
									if (tag == 'noh') {
										if (player.countCards('h') != 1) return false;
									}
								},
							},
						},
						WSS_tongque: {
							trigger: {
								player: 'damageBefore',
							},
							filter(event, player) {
								return event.source && event.source.sex == 'male' && event.card && event.card.name == 'sha' && !player.isTurnedOver();
							},
							content() {
								trigger.untrigger();
								trigger.finish();
								player.turnOver();
							},
						},
						WSS_zhenjiu: {
							enable: 'phaseUse',
							usable: 1,
							discard: false,
							prepare: 'give',
							filterCard: {
								name: 'jiu',
							},
							filter(event, player) {
								return player.countCards('h', { name: 'jiu' }) > 0;
							},
							filterTarget(card, player, target) {
								return target.sex == 'male' && !target.isTurnedOver();
							},
							content() {
								target.gain(cards, player);
								target.turnOver();
							},
							ai: {
								order: 9,
								result: {
									target: -1,
								},
								threaten: 0.5,
								expose: 0.2,
							},
						},
						WSS_qingyun: {
							mod: {
								suit(card, suit) {
									return 'heart';
								},
							},
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								return get.type(event.card) == 'delay';
							},
							forced: true,
							content() {
								trigger.card.wuxie = true;
							},
						},
						_WSS_qingyun: {
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								for (let i = 0; i < player.get('j').length; i++) {
									var card = player.get('j')[i];
									if (card.wuxie && card.wuxie == true) return true;
								}
								return false;
							},
							content() {
								player.addTempSkill('WSS_qingyun1', { player: 'judgeAfter' });
							},
						},
						WSS_qingyun1: {
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'wuxie') return false;
								},
							},
						},
						WSS_anhun: {
							trigger: {
								global: 'dieBefore',
							},
							filter(event, player) {
								return event.source && event.source == player && (player.num('h') < 4 || player.hp < 4);
							},
							content() {
								'step 0';
								var list = [];
								if (player.num('h') < 4) list.push('将手牌补至四张');
								if (player.hp < 4) list.push('将体力补至四点');
								player.chooseControl(list);
								('step 1');
								if (result.control == '将手牌补至四张') player.draw(4 - player.num('h'));
								if (result.control == '全体流失体力') player.recover(4 - player.hp);
							},
						},
						WSS_qinyin: {
							trigger: {
								player: 'phaseDiscardAfter',
							},
							filter(event, player) {
								return event.num >= 2;
							},
							content() {
								'step 0';
								player.chooseControl(['全体回复体力', '全体流失体力']).set('ai', function () {
									return '全体回复体力';
								});
								('step 1');
								if (result.control == '全体回复体力') {
									for (const i of game.players) {
										i.recover();
									}
								}
								if (result.control == '全体流失体力') {
									for (const i of game.players) {
										i.loseHp();
									}
								}
							},
						},
						WSS_tianlang: {
							trigger: {
								source: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && ((event.card.name == 'sha' && event.nature == 'fire') || event.card.name == 'huogong') && event.player.getAttackRange() >= player.maxHp - player.hp;
							},
							content() {
								trigger.player.damage('fire');
							},
						},
						WSS_duantou: {
							trigger: {
								global: 'juedouBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'juedou' && (event.player == player || event.target == player);
							},
							content() {
								if (trigger.player == player) trigger.target.discard(trigger.target.get('h'));
								if (trigger.target == player) trigger.player.discard(trigger.player.get('h'));
							},
						},
						WSS_hailang: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								player.chooseCard('h', true);
								('step 1');
								event.card = result.cards[0];
								target.chooseControl('equip', 'basic', 'trick', 'delay').set('ai', function (event) {
									switch (Math.floor(Math.random() * 6)) {
										case 0:
											return 'equip';
										case 1:
										case 4:
										case 5:
											return 'basic';
										case 2:
											return 'trick';
										case 3:
											return 'delay';
									}
								});
								('step 2');
								game.log(target, '选择了' + get.translation(result.control));
								event.choice = result.control;
								target.popup(event.choice);
								('step 3');
								target.gain(event.card, player);
								player.$give(event.card, target);
								('step 4');
								if (get.type(event.card) != event.choice) target.damage('nocard', 'thunder');
								if (get.type(event.card) == event.choice) target.draw();
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										var eff = get.damageEffect(target, player);
										if (eff >= 0) return 1 + eff;
										var value = 0,
											i;
										var cards = player.getCards('h');
										if (Array.isArray(cards))
											for (const i of cards) {
												value += get.value(i);
											}
										value /= player.countCards('h');
										if (target.hp == 1) return Math.min(0, value - 7);
										return Math.min(0, value - 5);
									},
								},
							},
						},
						WSS_hanwang: {
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'sha' && target.maxHp == target.hp && target.countCards('h') > 2) return false;
								},
							},
						},
						WSS_danqi: {
							mod: {
								globalFrom(from, to, distance) {
									if (from.get('e', '4')) return distance - 1;
									return distance;
								},
								globalTo(from, to, distance) {
									if (to.get('e', '3')) return distance + 1;
									return distance;
								},
							},
						},
						WSS_shuiyan: {
							trigger: {
								source: 'damageBefore',
							},
							check(event, player) {
								return false;
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (card.suit == 'heart') return 2;
									return -0.5;
								});
								('step 1');
								if (result.card.suit == 'heart') {
									trigger.num++;
								} else {
									trigger.untrigger();
									trigger.finish();
									player.gain(result.card, 'gain2');
								}
							},
						},
						WSS_liejiu: {
							enable: 'chooseToUse',
							filterCard(card, player) {
								return get.color(card) == 'black';
							},
							viewAs: {
								name: 'jiu',
							},
							viewAsFilter(player) {
								if (!player.countCards('h', { color: 'black' })) return false;
							},
							prompt: '将一张♠️️手牌当[酒]使用',
							check(card) {
								if (_status.event.type == 'dying') return 1;
								return 4 - get.value(card);
							},
							ai: {
								skillTagFilter(player) {
									return player.countCards('h', { color: 'black' }) > 0 && player.hp <= 0;
								},
								threaten: 1.5,
								save: true,
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
										if (lib.config.mode == 'stone' && !player.isMin()) {
											if (player.getActCount() + 1 >= player.actcount) return 0;
										}
										var shas = player.getCards('h', 'sha');
										if (shas.length > 1 && player.getCardUsable('sha') > 1) {
											return 0;
										}
										var card;
										if (shas.length) {
											for (let i = 0; i < shas.length; i++) {
												if (lib.filter.filterCard(shas[i], target)) {
													card = shas[i];
													break;
												}
											}
										} else if (player.hasSha() && player.needsToDiscard()) {
											if (player.countCards('h', 'hufu') != 1) card = { name: 'sha' };
										}
										if (card) {
											if (
												game.hasPlayer(function (current) {
													return get.attitude(target, current) < 0 && target.canUse(card, current, true, true) && !current.getEquip('baiyin') && get.effect(current, card, target) > 0;
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
						},
						WSS_tianji: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('h') > 0 && get.distance(player, target, 'attack') <= 1;
							},
							content() {
								'step 0';
								player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
									switch (Math.floor(Math.random() * 6)) {
										case 0:
											return 'heart2';
										case 1:
										case 4:
										case 5:
											return 'diamond2';
										case 2:
											return 'club2';
										case 3:
											return 'spade2';
									}
								});
								('step 1');
								game.log(player, '选择了' + get.translation(result.control));
								event.choice = result.control;
								player.popup(event.choice);
								event.card = target.getCards('h').randomGet();
								target.showCards(event.card);
								('step 2');
								if (event.card.suit + '2' != event.choice) {
									player.chooseToDiscard(1, 'h', true);
									event.finish();
								}
								if (event.card.suit + '2' == event.choice) {
									player.gain(event.card, target);
									target.$give(event.card, player);
								}
								('step 3');
								var list = [];
								for (var i in lib.card) {
									if (get.type(i) == 'trick') list.push(game.createCard(i));
								}
								player.chooseCardButton(list).set('ai', function (button) {
									if (button.link.name == 'wuzhong') return 1;
									return 0;
								});
								('step 4');
								if (result.bool) {
									game.broadcastAll(
										function (card1, card2) {
											card1.init([card1.suit, card1.number, card2.name]);
										},
										event.card,
										result.links[0]
									);
								} else {
									event.finish();
								}
							},
							ai: {
								order: 11,
								result: {
									player(player) {
										if (player.countCards('h') > 1) return 1;
									},
								},
							},
						},
						WSS_longya: {
							trigger: {
								player: 'shaMiss',
							},
							forced: true,
							content() {
								'step 0';
								player.addTempSkill('qinggang_skill', { player: 'phaseAfter' });
								player.chooseToUse('是否使用一张杀？', { name: 'sha' });
								('step 1');
								if (result.bool) {
								}
							},
						},
						WSS_longlin: {
							trigger: {
								player: 'damageBefore',
							},
							filter(event, player) {
								return player.num('e') > 0 && player.num('h') == 0;
							},
							content() {
								player.chooseToDiscard(1, 'e', true);
								trigger.num--;
							},
						},
						WSS_tieji: {
							trigger: {
								player: 'shaBefore',
							},
							_priority: Infinity,
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
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
								if (get.color(result.card) == 'black' && player.hasSkill('WSS_tieti')) {
									player.addTempSkill('qinggang_skill', { player: 'shaEnd' });
								}
							},
						},
						WSS_tieti: {},
						WSS_muniu: {
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (event.card.name != 'guohe' && event.card.name != 'shunshou') return false;
								if (event.card.suit && player.num('h', { suit: event.card.suit })) {
									return event.player != player;
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCard('是否弃置花色为' + get.translation(trigger.card.suit + '2') + '的手牌并使' + get.translation(trigger.player) + '打出的牌失效？', { suit: trigger.card.suit }).set('ai', function (card) {
									return get.attitude(player, trigger.player) < 0;
								});
								('step 1');
								if (result.bool) {
									player.line(trigger.player);
									player.discard(result.cards);
									trigger.untrigger();
									trigger.finish();
								} else {
									event.finish();
								}
							},
						},
						WSS_huoshi: {
							trigger: {
								player: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && get.color(event.card) == 'red';
							},
							content() {
								trigger.card.nature = 'fire';
							},
						},
						WSS_nifan: {
							trigger: {
								target: 'shaBegin',
							},
							filter(event, player) {
								return event.target && event.target == player && player.countCards('h', { name: 'sha' }) > 0;
							},
							content() {
								player.chooseToDiscard(1, 'h', '请弃置一张[杀]', { name: 'sha' }, true);
								trigger.target = trigger.player;
								game.log(trigger.player, '的', trigger.card, '目标改为', trigger.target);
							},
						},
						WSS_haofeng: {
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								trigger.num--;
							},
						},
						WSS_mingdeng: {
							intro: {
								content: 'cards',
							},
							marktext: '灯',
							enable: 'phaseUse',
							usable: 1,
							discard: false,
							filterCard(card, player) {
								return get.type(card) == 'trick';
							},
							check(card) {
								return 10 - get.value(card);
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								target.storage.WSS_mingdeng = cards;
								target.storage.WSS_mingdeng1 = player;
								target.markSkill('WSS_mingdeng');
							},
							ai: {
								order: 11,
								result: {
									target: -1,
								},
							},
						},
						_WSS_mingdeng: {
							trigger: {
								player: 'phaseDrawAfter',
							},
							forced: true,
							filter(event, player) {
								return player.storage.WSS_mingdeng != undefined && player.storage.WSS_mingdeng1 != undefined;
							},
							content() {
								player.gain(player.storage.WSS_mingdeng, 'gain2');
								player.storage.WSS_mingdeng = undefined;
								player.unmarkSkill('WSS_mingdeng');
								var pl = player.storage.WSS_mingdeng1;
								player.$give(trigger.cards.length, pl);
								pl.gain(trigger.cards);
								player.storage.WSS_mingdeng1 = undefined;
							},
						},
						WSS_bingfa: {
							mod: {
								judge(player, result) {
									if (_status.event.type == 'phase') {
										if (result.bool == false) result.bool = null;
									}
								},
							},
						},
						WSS_zhouyan: {
							intro: {
								content: 'cards',
							},
							marktext: '焰',
							trigger: {
								player: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player
									.chooseCard(get.prompt('WSS_zhouyan'), 'h', function (card, player, target) {
										return card.number > 3;
									})
									.set('ai', function (card) {
										var pl;
										for (let i = 0; i < card.number + 1; i++) {
											if (i == 0) {
												pl = player;
											} else {
												pl = pl.next;
											}
										}
										return -get.attitude(player, pl);
									});
								('step 1');
								if (result.bool) {
									player.storage.WSS_zhouyan = result.cards[0];
									player.markSkill('WSS_zhouyan');
									game.log(player, '将', result.cards[0], '置于其武将牌上');
									player.lose(result.cards[0], ui.special);
								} else {
									event.finish();
								}
							},
						},
						_WSS_zhouyan: {
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								return player.storage.WSS_zhouyan != undefined;
							},
							content() {
								var num = player.storage.WSS_zhouyan.number + 1;
								var pl;
								for (let i = 0; i < num; i++) {
									if (i == 0) {
										pl = player;
									} else {
										pl = pl.next;
									}
								}
								player.line(pl);
								pl.damage(1, 'fire');
								player.storage.WSS_zhouyan = undefined;
								player.unmarkSkill('WSS_zhouyan');
							},
						},
						WSS_haozhan: {
							marktext: '斩',
							intro: {
								content(storage) {
									return '下次造成的伤害+' + storage;
								},
							},
							mark: true,
							init(player) {
								player.storage.WSS_haozhan = 0;
							},
							trigger: {
								player: 'shaMiss',
							},
							forced: true,
							filter(event, player) {
								return player.canUse('sha', event.target) && player.hasSha();
							},
							content() {
								'step 0';
								if (player.hasSkill('jiu')) {
									game.broadcastAll(function (player) {
										player.removeSkill('jiu');
										if (player.node.jiu) {
											player.node.jiu.delete();
											player.node.jiu2.delete();
											delete player.node.jiu;
											delete player.node.jiu2;
										}
									}, player);
									event.jiu = true;
								}
								player.addSkill('WSS_haozhan');
								player.storage.WSS_haozhan += 1;
								player.chooseToUse(get.prompt('WSS_haozhan'), { name: 'sha' }, trigger.target, -1);
								('step 1');
								if (result.bool);
								else if (event.jiu) {
									player.addSkill('jiu');
								}
							},
						},
						_WSS_haozhan: {
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return player.storage.WSS_haozhan > 0 && event.player != player;
							},
							content() {
								trigger.num += player.storage.WSS_haozhan;
								player.storage.WSS_haozhan == 0;
								player.removeSkill('WSS_haozhan');
							},
						},
						WSS_xushi: {
							intro: {
								content: 'cards',
							},
							marktext: '蓄',
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							discard: false,
							check(card) {
								return 8 - get.value(card);
							},
							content() {
								player.storage.WSS_xushi = cards;
								player.markSkill('WSS_xushi');
							},
							ai: {
								order: 11,
								result: {
									player(player) {
										if (player.num('h') > 2) return 1;
									},
								},
							},
						},
						_WSS_xushi: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.storage.WSS_xushi != undefined;
							},
							content() {
								player.gain(player.storage.WSS_xushi, 'gain2');
								player.storage.WSS_xushi = undefined;
								player.unmarkSkill('WSS_xushi');
							},
						},
						WSS_zhangqi: {
							trigger: {
								target: ['guoheBegin', 'shunshouBegin'],
							},
							forced: true,
							content() {
								trigger.player.loseHp();
							},
						},
						WSS_lieren: {
							trigger: {
								source: 'damageBegin',
							},
							_priority: 5,
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.card && event.card.name == 'sha' && event.player.classList.contains('dead') == false && event.player.countCards('h') && player.countCards('h') && event.player != player;
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0 && player.countCards('h') > 1;
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								if (result.bool && trigger.player.countCards('he')) player.gainPlayerCard(trigger.player, true, 'he');
								if (!result.bool) {
									player.recover();
									trigger.untrigger();
									trigger.finish();
								}
							},
						},
						WSS_tianxing: {
							group: ['WSS_tianxing_add', 'WSS_tianxing_remove'],
							subSkill: {
								add: {
									trigger: {
										player: 'equipEnd',
									},
									check(event, player) {
										for (const i of game.players) {
											if (get.distance(player, i) <= 1 && player != i && get.attitude(player, i) >= 0) return true;
										}
										return false;
									},
									filter(event, player) {
										return lib.card[event.card.name].skills != undefined;
									},
									content() {
										for (const i of game.players) {
											if (get.distance(player, i) <= 1) i.addSkill(lib.card[trigger.card.name].skills);
										}
									},
								},
								remove: {
									trigger: {
										player: 'loseEnd',
									},
									forced: true,
									filter(event, player) {
										if (!event.cards) return false;
										if (Array.isArray(event.cards))
											for (const i of event.cards) {
												if (i.original == 'e') return true;
											}
										return false;
									},
									content() {
										if (Array.isArray(trigger.cards))
											for (const i of trigger.cards) {
												if (lib.card[i.name].skills) {
													for (var j = 0; j < game.players.length; j++) {
														if (get.distance(player, game.players[j]) <= 1) game.players[j].removeSkill(lib.card[i.name].skills);
													}
												}
											}
									},
								},
							},
						},
						WSS_huangcai: {
							trigger: {
								player: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card;
							},
							content() {
								trigger.target.addSkill('WSS_huangcai_1');
								trigger.target.storage.WSS_huangcai = trigger.card.number;
							},
						},
						WSS_huangcai_1: {
							mod: {
								cardRespondable(card, player) {
									if (card.name == 'shan' && card.number <= player.storage.WSS_huangcai) return false;
								},
							},
							trigger: {
								global: 'shaAfter',
							},
							forced: true,
							popup: false,
							content() {
								player.removeSkill('WSS_huangcai_1');
							},
						},
						WSS_maqian: {
							group: ['WSS_maqian_forbidai', 'WSS_maqian_attack'],
							subSkill: {
								forbidai: {
									mod: {
										cardEnabled(card, player) {
											if (get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4') return false;
										},
									},
									trigger: {
										player: 'equipBegin',
									},
									forced: true,
									filter(event, player) {
										return get.subtype(event.card) == 'equip3' || get.subtype(event.card) == 'equip4';
									},
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
								attack: {
									trigger: {
										source: 'damageAfter',
									},
									forced: true,
									filter(event, player) {
										return event.player.get('e', '3') || event.player.get('e', '4');
									},
									content() {
										trigger.player.discard(trigger.player.get('e', '3'));
										trigger.player.discard(trigger.player.get('e', '4'));
										player.draw();
									},
								},
							},
						},
						WSS_huwei: {
							trigger: {
								global: 'damageBegin',
							},
							filter(event, player) {
								return event.player != player && event.source && get.distance(player, event.player) <= 1 && event.player.countCards('h', { type: 'basic' }) > 0;
							},
							check(event, player) {
								if (get.attitude(player, event.player) >= 0 && player.hp > 1) return true;
								return false;
							},
							content() {
								'step 0';
								trigger.player.chooseCard('h', { type: 'basic' });
								('step 1');
								if (result.bool) {
									trigger.player.$give(result.cards[0], player);
									player.gain(result.cards[0]);
									player.damage(1, trigger.nature, trigger.source);
									trigger.num--;
								} else {
									event.finish();
								}
							},
						},
						WSS_nvxia1: {
							trigger: {
								global: 'damageAfter',
							},
							filter(event, player) {
								return event.player.sex == 'female' && event.source && event.source.sex == 'male';
							},
							check(event, player) {
								if (get.attitude(player, event.player) >= 0) return true;
								return false;
							},
							content() {
								'step 0';
								var list = ['令其摸两张牌', '其对你造成一点伤害'];
								if (trigger.source.countCards('h') >= 2) list.push('给予其两张牌');
								trigger.source.chooseControl(list).set('ai', function (event) {
									return '令其摸两张牌';
								});
								('step 1');
								if (result.control == '令其摸两张牌') {
									player.draw(2);
									event.finish();
								}
								if (result.control == '其对你造成一点伤害') {
									trigger.source.damage();
									event.finish();
								}
								if (result.control == '给予其两张牌') {
									trigger.source.chooseCard(2, 'h', true);
								}
								('step 2');
								if (result.bool) {
									trigger.source.$give(result.cards, player);
									player.gain(result.cards);
								} else {
									event.finish();
								}
							},
						},
						WSS_jiumei: {
							trigger: {
								player: 'taoBegin',
							},
							filter(event, player) {
								return event.target && event.target.sex == 'female' && event.target.hp <= 0;
							},
							check(event, player) {
								if (get.attitude(player, event.target) < 0) return true;
								return false;
							},
							content() {
								trigger.target.recover();
							},
						},
						WSS_huaqiao: {
							mod: {
								targetEnabled(card, player, target) {
									if (card.suit == 'club' && player != target) return false;
								},
							},
						},
						WSS_qingmu: {
							enable: 'phaseUse',
							usable: 1,
							filterCard(card, player) {
								return card.suit == 'heart';
							},
							check(card) {
								var player = get.owner(card);
								if (player.countCards('h') > player.hp) return 8 - get.value(card);
								if (player.hp < player.maxHp) return 6 - get.value(card);
								return 4 - get.value(card);
							},
							filterTarget(card, player, target) {
								if (target.sex != 'female') return false;
								if (target.hp >= target.maxHp) return false;
								if (target == player) return false;
								return true;
							},
							content() {
								'step 0';
								player.chooseControl(['回血', '摸牌']).set('ai', function (event) {
									if (player.maxHp > player.hp) return '回血';
									return '摸牌';
								});
								('step 1');
								if (result.control == '回血') {
									player.recover();
									target.draw(2);
								}
								if (result.control == '摸牌') {
									player.draw(2);
									target.recover();
								}
							},
							ai: {
								order: 5.5,
								result: {
									player(player) {
										if (player.hp < player.maxHp) return 4;
										if (player.countCards('h') > player.hp) return 0;
										return -1;
									},
									target: 4,
								},
								threaten: 2,
							},
						},
						WSS_longqi: {
							trigger: {
								player: 'shaBegin',
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (trigger.target.maxHp - trigger.target.hp + trigger.target.countCards('h') < card.number) return 1;
									return -0.5;
								});
								('step 1');
								if (trigger.target.maxHp - trigger.target.hp + trigger.target.countCards('h') < result.card.number) {
									trigger.directHit = true;
								}
							},
						},
						WSS_renmin: {
							trigger: {
								global: 'dieBefore',
							},
							forced: true,
							zhuSkill: true,
							filter(event, player) {
								return (
									event.player.maxHp > 0 &&
									event.source &&
									event.source == player &&
									game.countPlayer(function (current) {
										return current.group == 'shu';
									}) > 1
								);
							},
							content() {
								'step 0';
								player.draw(trigger.player.maxHp);
								('step 1');
								event.cards = result;
								('step 2');
								player.chooseCardTarget({
									filterCard(card, player) {
										return _status.event.parent.cards.includes(card);
									},
									selectCard: [1, event.cards.length],
									filterTarget(card, player, target) {
										return player != target;
									},
									ai1(card) {
										if (ui.selected.cards.length) return -1;
										if (card.name == 'du') return 20;
										return _status.event.player.countCards('h') - _status.event.player.hp;
									},
									ai2(target) {
										var att = get.attitude(_status.event.player, target);
										if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
											if (target.hasSkillTag('nodu')) return 0;
											return 1 - att;
										}
										return att - 4;
									},
									prompt: '请选择要送人的卡牌',
								});
								('step 3');
								if (result.bool) {
									player.line(result.targets, 'green');
									result.targets[0].gain(result.cards, player);
									player.$give(result.cards.length, result.targets[0]);
									if (Array.isArray(result.cards))
										for (const i of result.cards) {
											event.cards.remove(i);
										}
									if (event.cards.length) event.goto(2);
								}
							},
						},
						WSS_zifu: {
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'guohe' || card.name == 'shunshou') return false;
								},
							},
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return player.hp > 1 && event.card && event.card.name == 'sha';
							},
							content() {
								'step 0';
								player.chooseToDiscard(1, 'he', { type: 'equip' }).ai = function (card) {
									if (get.subtype(card) !== 'equip1' && get.subtype(card) !== 'equip2' && get.attitude(player, trigger.player) < 0) return 1;
									return -1;
								};
								('step 1');
								if (!result.bool) {
									player.draw();
									trigger.untrigger();
									trigger.finish();
								}
							},
						},
						WSS_xiaquan: {
							trigger: {
								player: 'shaMiss',
							},
							forced: true,
							filter(event, player) {
								return event.card;
							},
							content() {
								game.log(player, '收回了', trigger.card);
								player.gain(trigger.card, 'gain2');
							},
						},
						WSS_luoma: {
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (!event.cards) return false;
								if (Array.isArray(event.cards))
									for (const i of event.cards) {
										if ((get.subtype(i) == 'equip3' || get.subtype(i) == 'equip4') && i.original == 'e') return true;
									}
								return false;
							},
							content() {
								player.loseHp();
							},
						},
						WSS_poxie: {
							enable: 'chooseToUse',
							filterCard: { name: 'sha' },
							viewAsFilter(player) {
								return player.countCards('h', { name: 'sha' }) > 0;
							},
							viewAs: { name: 'wuxie' },
							prompt: '将一张黑色手牌当无懈可击使用',
							threaten: 0.7,
						},
						WSS_qijie: {
							trigger: {
								player: 'dyingBefore',
							},
							forced: true,
							content() {
								'step 0';
								player.judge(function (card) {
									if (card.suit == 'club') return 2;
									return -2;
								});
								('step 1');
								if (result.card.suit == 'club') {
									trigger.untrigger();
									trigger.finish();
									player.recover(2 - player.hp);
								}
							},
						},
						WSS_zouma: {
							trigger: {
								player: 'dieBefore',
							},
							mark: true,
							init(player) {
								player.storage.WSS_zouma = false;
							},
							filter(event, player) {
								return !player.storage.WSS_zouma && player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.showHandcards();
								player.awakenSkill('WSS_zouma');
								player.storage.WSS_zouma = true;
								if (player.countCards('h', { color: 'red' }) > 0) {
									player.chooseTarget('选择[走马]的目标', function (card, player, target) {
										return target != player;
									}).ai = function (target) {
										return -get.attitude(player, target);
									};
								} else {
									event.finish();
								}
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								player.chooseControl(['对其造成伤害', '令其摸牌']).set('ai', function (event) {
									return '对其造成伤害';
								});
								('step 3');
								if (result.control == '对其造成伤害') {
									event.target.damage(player.countCards('h', { suit: 'heart' }), 'fire');
								}
								if (result.control == '令其摸牌') {
									event.target.draw(player.countCards('h', { color: 'red' }));
								}
							},
							intro: {
								content: 'limited',
							},
						},
						WSS_yitian: {
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							filter(event, player) {
								if (!event.cards) return false;
								if (Array.isArray(event.cards))
									for (const i of event.cards) {
										if (i.original == 'e' && lib.card[i.name].skills) return player.maxHp == player.hp || player.countCards('h') >= 3;
									}
								return false;
							},
							content() {
								if (Array.isArray(trigger.cards))
									for (const i of trigger.cards) {
										if (i.original == 'e') {
											var skills = lib.card[i.name].skills;
											if (skills != undefined) {
												for (var j = 0; j < skills.length; j++) {
													player.addTempSkill(skills[j], { player: 'equipBefore' });
												}
											}
										}
									}
							},
						},
						WSS_tianshi: {
							mode: ['identity'],
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							filter(event, player) {
								return game.zhu == player || game.zhu.previous == player;
							},
							content() {
								trigger.num++;
							},
							ai: {
								threaten: 0.7,
							},
						},
						WSS_nilin: {
							trigger: {
								player: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && get.color(event.card) == 'black';
							},
							content() {
								trigger.card.nature = 'thunder';
							},
						},
						WSS_qiwei: {
							group: ['WSS_qiwei_equip', 'WSS_qiwei_lose'],
							subSkill: {
								equip: {
									mod: {
										cardEnabled(card, player) {
											if (get.subtype(card) == 'equip1' && player.get('e', '1') != undefined && player.get('e', '4') != undefined) return false;
											if (get.subtype(card) == 'equip2' && player.get('e', '2') != undefined && player.get('e', '4') != undefined) return false;
										},
									},
									trigger: {
										player: 'equipBegin',
									},
									forced: true,
									filter(event, player) {
										if (get.subtype(event.card) == 'equip1' && player.get('e', '1') != undefined && player.get('e', '4') != undefined) return true;
										if (get.subtype(event.card) == 'equip2' && player.get('e', '2') != undefined && player.get('e', '4') != undefined) return true;
										return false;
									},
									content() {
										trigger.untrigger();
										trigger.finish();
									},
								},
								lose: {
									mod: {
										maxHandcard(player, num) {
											if (player.get('e', '3')) return num + 1;
											return num;
										},
									},
									trigger: {
										player: 'loseEnd',
									},
									forced: true,
									filter(event, player) {
										if (!event.cards) return false;
										if (Array.isArray(event.cards))
											for (const i of event.cards) {
												if (i.original == 'e' && (get.subtype(i) == 'equip1' || get.subtype(i) == 'equip2')) return player.get('e', '4') != undefined;
											}
										return false;
									},
									content() {
										if (Array.isArray(trigger.cards))
											for (const i of trigger.cards) {
												if (i.original == 'e' && (get.subtype(i) == 'equip1' || get.subtype(i) == 'equip2')) player.equip(game.createCard(i.name));
											}
									},
								},
							},
						},
						WSS_zhenlie: {
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return player.hasSkill('luoyi2') && event.player.get('e', '2') != undefined;
							},
							content() {
								trigger.player.discard(trigger.player.get('e', '2'));
							},
						},
						WSS_taotie: {
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								player.showHandcards();
								('step 1');
								if (player.countCards('h', { suit: 'heart' }) >= 2) {
									player.chooseCard('h', 2, { suit: 'heart' });
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.discard(result.cards);
									player.recover();
									if (player.countCards('h', { suit: 'heart' }) >= 2) event.goto(1);
								} else {
									event.finish();
								}
							},
							ai: {
								order: 1.5,
								result: {
									player(player) {
										if (player.hp >= player.maxHp) return -1;
										if (player.countCards('h', { suit: 'heart' }) - player.countCards('h', { name: 'tao' }) >= 2) return 2;
										return -1;
									},
								},
							},
						},
						WSS_xiaoshi: {
							trigger: {
								player: 'dyingBegin',
							},
							content() {
								for (const i of game.players) {
									if (i.num('j') > 0) player.gain(i.get('j'), 'gain2');
								}
							},
						},
						WSS_xiaoshi: {
							trigger: {
								player: 'dyingBegin',
							},
							content() {
								for (const i of game.players) {
									if (i.num('j') > 0) player.gain(i.get('j'), 'gain2');
								}
							},
						},
						WSS_qingzhuang: {
							group: ['WSS_qingzhuang_gain', 'WSS_qingzhuang_lose'],
							subSkill: {
								gain: {
									trigger: {
										player: 'gainEnd',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										if (!event.cards) return false;
										if (Array.isArray(event.cards))
											for (const i of event.cards) {
												if (get.type(i) == 'equip' && lib.card[i.name].skills) return true;
											}
										return false;
									},
									content() {
										if (Array.isArray(trigger.cards))
											for (const i of trigger.cards) {
												if (lib.card[i.name].skills) player.addSkill(lib.card[i.name].skills);
											}
									},
								},
								lose: {
									trigger: {
										player: 'loseEnd',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										if (!event.cards) return false;
										if (Array.isArray(event.cards))
											for (const i of event.cards) {
												if (get.type(i) == 'equip' && lib.card[i.name].skills && player.countCards('h', { name: i.name }) <= 0) return true;
											}
										return false;
									},
									content() {
										game.log(trigger.cards);
										if (Array.isArray(trigger.cards))
											for (const i of trigger.cards) {
												if (lib.card[i.name].skills) player.removeSkill(lib.card[i.name].skills);
											}
									},
								},
							},
						},
						WSS_guizha: {
							trigger: {
								target: 'shaMiss',
							},
							forced: true,
							filter(event, player) {
								return event.player.countCards('e') > 0;
							},
							content() {
								player.discardPlayerCard(trigger.player, 'e').set('ai', function (button) {
									if (get.attitude(player, trigger.player) <= 0) return 1;
									return 0;
								});
							},
						},
						WSS_jigong: {
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (player.getAttackRange() >= 3) return true;
									return false;
								},
							},
						},
						WSS_kaiken: {
							init(player) {
								player.storage.WSS_kaiken = [];
							},
							marktext: '田',
							intro: {
								content: 'cards',
							},
							mark: true,
							enable: 'phaseUse',
							filter(event, player) {
								return player.storage.WSS_kaiken.length < 1;
							},
							filterCard: true,
							discard: false,
							check(card) {
								if (get.color(card) == 'black' && card.number <= 5) return 1;
								if (card.number >= 8) return -1;
								return 6 - get.value(card);
							},
							content() {
								player.storage.WSS_kaiken.push(cards[0]);
								game.log(player, '将', cards[0], '置于其[农耕区]内');
							},
							ai: {
								order: 8.5,
								result: {
									player(player) {
										if (player.num('h') > 1) return 1;
										return 0;
									},
								},
							},
						},
						_WSS_kaiken: {
							trigger: {
								player: 'shunshouBegin',
							},
							filter(event, player) {
								return event.target.storage.WSS_kaiken && event.target.storage.WSS_kaiken.length;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCardButton(trigger.target.storage.WSS_kaiken).ai = function (button) {
									return get.value(button.link);
								};
								('step 1');
								if (result.bool) {
									var card = result.links[0];
									player.gain(card, 'gain2');
									trigger.target.storage.WSS_kaiken.remove(card);
									trigger.untrigger();
									trigger.finish();
								} else {
									event.finish();
								}
							},
						},
						WSS_juntun: {
							trigger: {
								player: 'phaseDrawEnd',
							},
							filter(event, player) {
								return player.storage.WSS_kaiken && player.storage.WSS_kaiken.length;
							},
							content() {
								'step 0';
								event.num = 0;
								('step 1');
								player.judge(function (card) {
									if (card.number > player.storage.WSS_kaiken[0].number && get.color(card) == get.color(player.storage.WSS_kaiken[0])) return 2;
									return -2;
								});
								('step 2');
								if (result.card.number > player.storage.WSS_kaiken[0].number && get.color(result.card) == get.color(player.storage.WSS_kaiken[0])) {
									player.storage.WSS_kaiken.push(result.card);
									game.log(player, '将', result.card, '置于其[农耕区]内');
								}
								event.num++;
								if (event.num < 2) event.goto(1);
								('step 3');
								if (player.storage.WSS_kaiken.length > 2) {
									player.chooseTarget(function (card, player, target) {
										return player != target;
									}, '是否将[农耕区]内的牌给予一名其他角色').ai = function (target) {
										return get.attitude(player, target);
									};
								} else {
									event.finish();
								}
								('step 4');
								if (result.bool) {
									player.$give(player.storage.WSS_kaiken, result.targets[0]);
									result.targets[0].gain(player.storage.WSS_kaiken, player);
									player.storage.WSS_kaiken = [];
								} else {
									player.gain(player.storage.WSS_kaiken, 'gain2');
									player.storage.WSS_kaiken = [];
								}
							},
						},
						WSS_tianpo: {
							trigger: {
								source: 'damageBegin',
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.hp < player.countCards('h');
							},
							content() {
								trigger.num++;
							},
						},
						WSS_lengfeng: {
							trigger: {
								player: 'useCardBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.card.nature != undefined;
							},
							content() {
								delete trigger.card.nature;
							},
						},
						WSS_jieji: {
							trigger: {
								global: 'phaseJudgeBefore',
							},
							filter(event, player) {
								return event.player.countCards('j') > 0 && event.player != player;
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								player.useCard({ name: 'sha' }, trigger.player);
							},
						},
						WSS_jintang: {
							group: ['WSS_jintang_damage', 'WSS_jintang_sha'],
							subSkill: {
								damage: {
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									_priority: -10,
									filter(event, player) {
										return event.num > 1 && player.isTurnedOver();
									},
									content() {
										trigger.num = 1;
									},
								},
								sha: {
									trigger: {
										target: 'useCardToBefore',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && player.isTurnedOver();
									},
									content() {
										'step 0';
										var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
										trigger.player
											.chooseToDiscard('金汤:弃置一张[杀],否则杀对' + get.translation(player) + '无效', function (card) {
												return card.name == 'sha';
											})
											.set('ai', function (card) {
												if (_status.event.eff > 0) return 10 - get.value(card);
												return 0;
											})
											.set('eff', eff);
										('step 1');
										if (result.bool == false) trigger.cancel();
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (card.name == 'sha' && get.attitude(player, target) < 0) {
													if (_status.event.name == 'WSS_jintang_sha') return;
													var bs = player.getCards('h', { name: 'sha' });
													if (bs.length < 2) return 0;
													if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
													if (bs.length <= 3 && player.countCards('h', 'sha') <= 1) {
														for (let i = 0; i < bs.length; i++) {
															if (bs[i].name != 'sha' && get.value(bs[i]) < 7) return [1, 0, 1, -0.5];
														}
														return 0;
													}
													return [1, 0, 1, -0.5];
												}
											},
										},
									},
								},
							},
						},
						WSS_huofeng: {
							trigger: {
								player: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return player.getEquip(2) && event.nature == 'fire';
							},
							content() {
								trigger.untrigger();
								trigger.finish();
							},
							ai: {
								effect: {
									target(card, player) {
										if (((card.name == 'sha' && get.color(card) == 'red' && card.nature == 'fire') || card.name == 'huogong') && player.getEquip(2)) return 'zerotarget';
									},
								},
							},
						},
						WSS_shuangji: {
							mod: {
								attackFrom(from, to, distance) {
									if (from.getEquip(1)) return distance - 1;
									return distance;
								},
							},
						},
						WSS_wuzou: {
							trigger: {
								global: ['discardPlayerCardBegin', 'gainPlayerCardBegin'],
							},
							forced: true,
							filter(event, player) {
								return event.player != player && event.target == player;
							},
							content() {
								trigger.position = 'ej';
							},
						},
						WSS_guangsha: {
							enable: 'phaseUse',
							filterCard(card, player) {
								return card.number >= 6 && card.suit == 'spade';
							},
							discard: false,
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								game.broadcastAll(function (card) {
									card.init([card.suit, card.number, 'guangshatianyi']);
								}, cards[0]);
								player.equip(cards[0]);
							},
							ai: {
								order: 11,
								result: {
									player(player) {
										if (!player.getEquip(2)) return 1;
										return 0;
									},
								},
							},
						},
						WSS_juehou: {
							global: 'WSS_juehou_1',
						},
						WSS_juehou_1: {
							enable: 'phaseUse',
							usable: 1,
							discard: false,
							line: true,
							prepare: 'give',
							filter(event, player) {
								if (player.sex != 'male') return false;
								if (player.countCards('h', { color: 'red' }) < 2) return 0;
								return game.hasPlayer(function (target) {
									return target != player && target.hasSkill('WSS_juehou', player);
								});
							},
							filterCard(card, player) {
								return get.color(card) == 'red';
							},
							selectCard: 2,
							filterTarget(card, player, target) {
								return target != player && target.hasSkill('WSS_juehou', player);
							},
							content() {
								'step 0';
								target.chooseControl(['收下', '拒绝']).set('ai', function (event) {
									return '收下';
								});
								('step 1');
								if (result.control == '收下') {
									target.popup('收下');
									target.gain(cards, player);
									player.recover();
								}
								if (result.control == '拒绝') {
									target.popup('拒绝');
									game.log(target, '将牌还了回去');
									player.gain(cards);
								}
							},
							ai: {
								order: 11,
								result: {
									target: 5,
									player(player) {
										if (player.hp < player.maxHp) return 1;
										return 0;
									},
								},
							},
						},
						WSS_qiqiang: {
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && (event.player.getEquip(3) || event.player.getEquip(4));
							},
							content() {
								trigger.num++;
							},
						},
						WSS_jianta: {
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.player != player && _status.currentPhase == player && event.player.countCards('h') > 0 && event.card && event.card.name == 'sha' && (player.getEquip(3) || player.getEquip(4));
							},
							check(event, player) {
								if (get.attitude(player, event.player) > 0 && event.player.isTurnedOver()) return true;
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								if (!result.bool) {
									player.discard(player.getEquip(3));
									player.discard(player.getEquip(4));
									event.finish();
								}
								var list = ['翻面'];
								if (trigger.player.countCards('he') > 0) list.push('获得牌');
								list.push('cancel2');
								if (result.bool)
									player.chooseControl(list).set('ai', function () {
										if (trigger.player.countCards('he') >= 2) return '获得牌';
										if (get.attitude(player, trigger.player) < 0 && !trigger.player.isTurnedOver()) return '翻面';
										if (get.attitude(player, trigger.player) > 0 && trigger.player.isTurnedOver()) return '翻面';
										return 'cancel2';
									});
								('step 2');
								if (result.control == '翻面') {
									trigger.player.turnOver();
								}
								if (result.control == '获得牌') {
									player.gainPlayerCard(trigger.player, true, 'he', [1, 2]);
								}
							},
						},
						WSS_xingguan: {
							trigger: {
								player: 'dieBefore',
							},
							mark: true,
							init(player) {
								player.storage.WSS_xingguan = false;
							},
							filter(event, player) {
								return !player.storage.WSS_xingguan;
							},
							content() {
								player.awakenSkill('WSS_xingguan');
								player.storage.WSS_xingguan = true;
								player.gain(get.cards(5), 'gain2');
							},
							intro: {
								content: 'limited',
							},
						},
						_WSS_xingguan: {
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							filter(event, player) {
								return player.storage.WSS_xingguan == true;
							},
							content() {
								player.lose(player.get('hej'), ui.special);
							},
						},
						WSS_jianmo: {
							enable: 'phaseUse',
							usable: 1,
							discard: false,
							check(card) {
								if (_status.event.player.countCards('h') >= 3) return 5 - get.value(card);
								return 0;
							},
							position: 'he',
							filterCard: true,
							content() {
								if (player.storage.WSS_jianmo_1) player.gain(player.storage.WSS_jianmo_1, 'gain2');
								game.log(player, '将', cards[0], '置于其武将牌顶');
								player.storage.WSS_jianmo_1 = cards[0];
								player.removeSkill('WSS_jianmo_1');
								player.addSkill('WSS_jianmo_1');
							},
							ai: {
								order: 8,
								result: {
									player(player) {
										if (!player.storage.WSS_jianmo_1) return 1;
										return 0;
									},
								},
							},
							global: 'WSS_jianmo_2',
						},
						WSS_jianmo_1: {
							mark: 'card',
							intro: {
								content: 'card',
							},
						},
						WSS_jianmo_2: {
							mod: {
								cardEnabled(card, player) {
									if (player.hasSkill('WSS_jianmo_1')) return;
									var suit,
										players = game.filterPlayer();
									for (const i of players) {
										if (i.hasSkill('WSS_jianmo_1')) suit = i.storage.WSS_jianmo_1.suit;
									}
									if (suit && card.suit == suit && get.type(card) == 'trick') return false;
								},
								cardUsable(card, player) {
									if (player.hasSkill('WSS_jianmo_1')) return;
									var suit,
										players = game.filterPlayer();
									for (const i of players) {
										if (i.hasSkill('WSS_jianmo_1')) suit = i.storage.WSS_jianmo_1.suit;
									}
									if (suit && card.suit == suit && get.type(card) == 'trick') return false;
								},
								cardRespondable(card, player) {
									if (player.hasSkill('WSS_jianmo_1')) return;
									var suit,
										players = game.filterPlayer();
									for (const i of players) {
										if (i.hasSkill('WSS_jianmo_1')) suit = i.storage.WSS_jianmo_1.suit;
									}
									if (suit && card.suit == suit && get.type(card) == 'trick') return false;
								},
								cardSavable(card, player) {
									if (player.hasSkill('WSS_jianmo_1')) return;
									var suit,
										players = game.filterPlayer();
									for (const i of players) {
										if (i.hasSkill('WSS_jianmo_1')) suit = i.storage.WSS_jianmo_1.suit;
									}
									if (suit && card.suit == suit && get.type(card) == 'trick') return false;
								},
							},
						},
						WSS_ziqing: {
							trigger: {
								global: 'linkEnd',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && event.player.isLinked() && player.isLinked();
							},
							content() {
								trigger.player.loseHp();
							},
						},
						WSS_anying: {
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								event.num = 0;
								('step 1');
								player.judge(function (card) {
									if (card.suit == 'heart') return 1;
									return -2;
								});
								('step 2');
								if (result.card.suit == 'heart') {
									player.recover();
								} else {
									player.gain(result.card, 'gain2');
								}
								event.num++;
								if (event.num < trigger.num) event.goto(1);
							},
						},
						WSS_qibu: {
							group: ['WSS_qibu_useCard', 'WSS_qibu_discard'],
							subSkill: {
								useCard: {
									trigger: {
										player: 'useCardEnd',
									},
									forced: true,
									filter(event, player) {
										return event.card && (get.type(event.card) == 'trick' || get.type(event.card) == 'delay') && event.card.number <= 7;
									},
									content() {
										player.recover();
									},
								},
								discard: {
									trigger: {
										player: 'discardEnd',
									},
									forced: true,
									filter(event, player) {
										if (!event.cards) return false;
										if (Array.isArray(event.cards))
											for (const i of event.cards) {
												var card = i;
												if ((get.type(card) == 'trick' || get.type(card) == 'delay') && card.number <= 7) return true;
											}
										return false;
									},
									content() {
										if (Array.isArray(trigger.cards))
											for (const i of trigger.cards) {
												var card = i;
												if ((get.type(card) == 'trick' || get.type(card) == 'delay') && card.number <= 7) player.recover();
											}
									},
								},
							},
						},
						WSS_caiqing: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								if (event.cards == undefined) event.cards = [];
								event.card1 = get.cards()[0];
								player.showCards(event.card1);
								player.chooseCard('h', 1, { color: get.color(event.card1) });
								event.cards.push(event.card1);
								ui.cardPile.remove(event.card1);
								('step 1');
								if (result.bool) {
									player.showCards(result.cards[0]);
									event.cards.push(result.cards[0]);
									player.lose(result.cards[0], ui.special);
								} else {
									if (event.cards.length) {
										player.gain(event.cards);
										player.$draw(event.cards);
									}
									event.finish();
								}
								event.goto(0);
							},
						},
						WSS_qinyincc: {
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.maxHp - player.hp > 0;
							},
							filterTarget(card, player, target) {
								return player != target && target.num('h') > 0 && get.distance(player, target, 'attack') <= 1;
							},
							content() {
								if (player.maxHp - player.hp <= target.num('h')) {
									target.showCards(target.get('h').randomGets(player.maxHp - player.hp));
								} else {
									target.showCards(target.get('h').randomGets(target.num('h')));
								}
							},
							ai: {
								order: 13,
								result: {
									target: -1,
								},
							},
						},
						WSS_juechang: {
							trigger: {
								player: 'dieBefore',
							},
							mark: true,
							init(player) {
								player.storage.WSS_juechang = false;
							},
							filter(event, player) {
								return !player.storage.WSS_juechang;
							},
							content() {
								player.awakenSkill('WSS_juechang');
								player.storage.WSS_juechang = true;
								for (const i of game.players) {
									if (i != player) i.loseHp();
								}
							},
							intro: {
								content: 'limited',
							},
						},
						WSS_lianpo: {
							trigger: {
								source: 'dieAfter',
							},
							forced: true,
							content() {
								player.phase('nodelay');
							},
						},
						WSS_shenmou: {
							trigger: {
								player: 'useCardBefore',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								for (const i of game.players) {
									i.addSkill('WSS_shenmou_1');
								}
							},
						},
						WSS_shenmou_1: {
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'wuxie') return false;
								},
							},
							trigger: {
								global: 'useCardAfter',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								for (const i of game.players) {
									i.removeSkill('WSS_shenmou_1');
								}
							},
						},
						WSS_duanzui: {
							trigger: {
								global: 'dyingBegin',
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0 && event.player.hp >= -1;
							},
							filter(event, player) {
								return event.player != player && get.distance(player, event.player, 'attack') <= 1;
							},
							content() {
								'step 0';
								trigger.player.judge(function (card) {
									if (card.suit == 'spade') return 2;
									if (card.suit == 'club') return 1;
									if (card.suit == 'heart') return -0.5;
									if (card.suit == 'diamond') return -1;
								});
								('step 1');
								if (result.card.suit == 'spade') {
									trigger.player.damage();
								}
								if (result.card.suit == 'club') {
									trigger.player.discard(trigger.player.get('h'));
								}
								if (result.card.suit == 'heart') {
									player.gainPlayerCard(trigger.player, 'he', [1, 3]);
									trigger.player.recover();
								}
								if (result.card.suit == 'diamond') {
									player.loseHp();
									player.useCard({ name: 'tao' }, trigger.player);
								}
							},
						},
						WSS_zhulian: {
							trigger: {
								global: 'recoverEnd',
							},
							filter(event, player) {
								return event.num > 0 && event.player != player && event.player.hp <= 1 && player.countCards('he') >= event.num;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard(trigger.num, 'he').ai = function (card) {
									if (get.attitude(player, trigger.player) < 0) return 1;
									return -1;
								};
								('step 1');
								if (result.bool) {
									player.line(trigger.player);
									trigger.player.damage(trigger.num);
								} else {
									event.finish();
								}
							},
						},
						WSS_shezheng: {
							mode: ['identity'],
							group: ['WSS_shezheng_live', 'WSS_shezheng_die'],
							subSkill: {
								live: {
									mode: ['identity'],
									trigger: {
										global: 'gameStart',
									},
									forced: true,
									content() {
										for (var j = 0; j < game.zhu.getSkills().length; j++) {
											if (lib.skill[game.zhu.getSkills()[j]].zhuSkill == true) {
												game.zhu.addSkill('WSS_shezheng_1');
											}
										}
									},
								},
								die: {
									mode: ['identity'],
									trigger: {
										player: 'dieBegin',
									},
									forced: true,
									content() {
										game.zhu.removeSkill('WSS_shezheng_1');
									},
								},
							},
						},
						WSS_shezheng_1: {
							init(player, skill) {
								var skills = player.getSkills(true, false);
								for (let i = 0; i < skills.length; i++) {
									if (!lib.skill[skills[i]].zhuSkill) skills.splice(i--, 1);
								}
								player.disableSkill(skill, skills);
							},
							onremove(player, skill) {
								player.enableSkill(skill);
							},
							mark: true,
							intro: {
								content(storage, player, skill) {
									return '主公技失效';
								},
							},
						},
						WSS_qunzu: {
							mod: {
								maxHandcard(player, num) {
									return (
										num +
										game.countPlayer(function (current) {
											if (current.group == 'WSS_jin') return 2;
										})
									);
								},
							},
						},
						WSS_yexin: {
							trigger: {
								player: 'shunshouAfter',
							},
							forced: true,
							filter(event, player) {
								return event.target;
							},
							content() {
								player.gainPlayerCard(trigger.target, 'hej', 1);
							},
						},
						WSS_conghui: {
							trigger: {
								global: 'loseHpEnd',
							},
							forced: true,
							filter(event, player) {
								return event.player != player;
							},
							content() {
								var skill = trigger.player.skills.randomGet();
								player.addTempSkill(skill, { player: 'damageAfter' });
							},
						},
						WSS_binghuo: {
							group: ['WSS_binghuo_attack', 'WSS_binghuo_damage'],
							subSkill: {
								attack: {
									trigger: {
										source: 'damageBegin',
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
								damage: {
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return event.nature == 'fire';
									},
									content() {
										trigger.untrigger();
										trigger.finish();
										player.recover();
									},
								},
							},
						},
						WSS_jingzhi: {
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h') < player.maxHp - 1;
							},
							content() {
								player.draw(player.maxHp - player.countCards('h') - 1);
							},
						},
						WSS_mieguo: {
							trigger: {
								global: 'dieAfter',
							},
							forced: true,
							filter(event, player) {
								return (
									game.countPlayer(function (current) {
										return current.group == event.player.group;
									}) <= 0
								);
							},
							content() {
								player.draw(4);
							},
						},
						WSS_lizhua: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('h') > 0 && get.distance(player, target, 'attack') <= 1;
							},
							content() {
								'step 0';
								player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
									switch (Math.floor(Math.random() * 6)) {
										case 0:
											return 'heart2';
										case 1:
										case 4:
										case 5:
											return 'diamond2';
										case 2:
											return 'club2';
										case 3:
											return 'spade2';
									}
								});
								('step 1');
								game.log(player, '选择了' + get.translation(result.control));
								event.choice = result.control;
								player.popup(event.choice);
								event.card = target.getCards('h').randomGet();
								target.showCards(event.card);
								('step 2');
								if (event.card.suit + '2' != event.choice) {
									player.chooseToDiscard(1, 'h', true);
								}
								if (event.card.suit + '2' == event.choice) {
									target.$give(event.card, player);
									player.gain(event.card, target);
								}
							},
							ai: {
								order: 11,
								result: {
									target(player, target) {
										if (player.countCards('h') > 2) return -1;
									},
								},
							},
						},
						WSS_kuiqu: {
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.hp < player.maxHp;
							},
							content() {
								var cards = get.cards(player.maxHp - player.hp);
								player.viewCards('牌堆顶' + get.cnNumber(player.maxHp - player.hp) + '张牌<br>(从左到右即从牌堆上到牌堆下)', cards);
								if (Array.isArray(cards))
									for (const i of cards) {
										ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
									}
							},
						},
						WSS_zhenggong: {
							trigger: {
								global: 'dieAfter',
							},
							filter(event, player) {
								return event.source != player && event.source && event.source.countCards('h') > 0 && player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.source);
								('step 1');
								if (result.bool) {
									player.draw(3);
									event.finish();
								} else {
									player.chooseControl('流失体力', '其回复体力').set('ai', function (event) {
										return '其回复体力';
									});
								}
								('step 2');
								if (result.control == '流失体力') {
									player.loseHp();
								}
								if (result.control == '其回复体力') {
									trigger.source.recover();
								}
							},
						},
						WSS_langyan: {
							trigger: {
								player: 'phaseBegin',
							},
							round: 2,
							check(event, player) {
								return player.countCards('h') > 1;
							},
							content() {
								'step 0';
								player.skip('phaseJudge');
								player.skip('phaseDraw');
								player.judge();
								('step 1');
								for (const i of game.players) {
									if (i != player) {
										i.storage.WSS_langyan = result.card.suit;
										i.useSkill('WSS_langyan_1');
									}
								}
							},
						},
						WSS_langyan_1: {
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard(1, 'h', { suit: player.storage.WSS_langyan }).ai = function (card) {
									return 1;
								};
								('step 1');
								if (!result.bool) {
									player.damage('nosource');
								}
							},
						},
						WSS_cheqi: {
							trigger: {
								player: 'equipBegin',
							},
							forced: true,
							filter(event, player) {
								return (player.countCards('e', { subtype: 'equip3' }) && get.subtype(event.card) == 'equip3') || (player.countCards('e', { subtype: 'equip4' }) && get.subtype(event.card) == 'equip4');
							},
							async content(event, trigger, player) {
								trigger.cancel();
								const card = trigger.cards[0];
								if (card) {
									const vcard = new lib.element.VCard(card);
									const cardSymbol = Symbol('card');
									card.cardSymbol = cardSymbol;
									card[cardSymbol] = vcard;
									player.vcardsMap?.equips.push(vcard);
									player.node.equips.appendChild(card);
									card.style.transform = '';
									card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
								}
								const info = get.info(card, false);
								if (info.skills) {
									for (const i of info.skills) {
										player.addSkillTrigger(i);
									}
								}
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4') return [1, 10];
									},
								},
							},
						},
						WSS_lieying: {
							trigger: {
								player: 'phaseDrawEnd',
							},
							check(event, player) {
								if (Array.isArray(event.cards))
									for (const i of event.cards) {
										if (get.value(i) > 5) return false;
									}
								return true;
							},
							content() {
								player.showCards(trigger.cards);
								player.discard(trigger.cards);
								player.draw(trigger.cards.length);
							},
						},
						WSS_xuelang: {
							intro: {
								content: 'cards',
							},
							marktext: '狼',
							enable: 'phaseUse',
							usable: 1,
							discard: false,
							filterCard(card, player) {
								return card.name == 'sha';
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								target.storage.WSS_xuelang = cards[0];
								target.storage.WSS_xuelang1 = player;
								target.markSkill('WSS_xuelang');
							},
							ai: {
								order: 12,
								result: {
									target: -1,
								},
							},
						},
						_WSS_xuelang: {
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.storage.WSS_xuelang != undefined && player.storage.WSS_xuelang1 != undefined;
							},
							content() {
								var card = player.storage.WSS_xuelang;
								var pl = player.storage.WSS_xuelang1;
								pl.useCard(card, player);
								game.cardsDiscard(card);
								player.storage.WSS_xuelang = undefined;
								player.storage.WSS_xuelang1 = undefined;
								player.unmarkSkill('WSS_xuelang');
							},
						},
						WSS_butui: {
							mod: {
								targetEnabled(card, player, target) {
									if (card.name == 'sha' && card.suit == 'club') return false;
								},
							},
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card;
							},
							content() {
								player.addSkill('WSS_butui_1');
							},
						},
						WSS_butui_1: {
							mod: {
								cardRespondable(card, player) {
									if (card.name == 'shan' && card.suit == 'diamond') return false;
								},
							},
							trigger: {
								global: 'shaAfter',
							},
							forced: true,
							popup: false,
							content() {
								player.removeSkill('WSS_butui_1');
							},
						},
						WSS_chaozhan: {
							trigger: {
								source: 'dieAfter',
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget('是否发动[抄斩]？', function (card, player, target) {
									return target != player && get.distance(player, target, 'attack') <= 1;
								}).ai = function (target) {
									return -get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.line(result.targets);
									player.chooseToDiscard(1, 'h', true);
									result.targets[0].damage();
								} else {
									event.finish();
								}
							},
						},
						WSS_xieqin: {
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								for (const i of game.players) {
									if (i != player && i != event.player && i.countCards('hej') > 0) return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.chooseTarget('是否发动[挟亲]？', function (card, player, target) {
									return target != player && target != trigger.player && target.countCards('hej') > 0;
								}).ai = function (target) {
									return -get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.line(result.targets);
									player.discardPlayerCard(result.targets[0], 'hej', 1, true);
								} else {
									event.finish();
								}
							},
						},
						WSS_ceyuan: {
							trigger: {
								global: 'judgeBegin',
							},
							content() {
								'step 0';
								player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
									switch (Math.floor(Math.random() * 6)) {
										case 0:
											return 'heart2';
										case 1:
										case 4:
										case 5:
											return 'diamond2';
										case 2:
											return 'club2';
										case 3:
											return 'spade2';
									}
								});
								('step 1');
								game.log(player, '选择了' + get.translation(result.control));
								var choice = result.control;
								player.popup(choice);
								var card = get.cards()[0];
								player.showCards(card);
								ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
								if (card.suit + '2' == choice) {
									player.draw();
									event.finish();
								} else {
									player.chooseCard(1, 'h').set('ai', function (card) {
										return -1;
									});
								}
								('step 2');
								if (result.bool) {
									player.lose(result.cards[0], ui.special);
									ui.cardPile.insertBefore(result.cards[0], ui.cardPile.firstChild);
								} else {
									event.finish();
								}
							},
						},
						WSS_minrui: {
							mod: {
								cardEnabled(card, player) {
									if (_status.event.skill != 'WSS_minrui' && get.type(card) == 'basic' && player.isTurnedOver()) return false;
								},
								cardUsable(card, player) {
									if (_status.event.skill != 'WSS_minrui' && get.type(card) == 'basic' && player.isTurnedOver()) return false;
								},
								cardRespondable(card, player) {
									if (_status.event.skill != 'WSS_minrui' && get.type(card) == 'basic' && player.isTurnedOver()) return false;
								},
							},
							enable: ['chooseToUse', 'chooseToRespond'],
							filterCard: { type: 'basic' },
							viewAs: { name: 'shan' },
							viewAsFilter(player) {
								return player.isTurnedOver();
							},
							check() {
								return 1;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondshan') && current < 0) return 0.6;
									},
								},
								respondshan: true,
								order: 4,
								useful: -1,
								value: -1,
							},
						},
						WSS_bujia: {
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && !player.getEquip(2);
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player) {
										if (card.name == 'sha' && !player.getEquip(2)) return 'zerotarget';
									},
								},
							},
						},
						WSS_yindu: {
							trigger: {
								player: 'phaseBegin',
							},
							check(event, player) {
								return player.hp > 3 && player.countCards('h') >= 2;
							},
							content() {
								'step 0';
								player.loseHp();
								player.chooseControl('无视防具', '跳过弃牌阶段').set('ai', function (event) {
									if (player.countCards('h') > player.hp) return '跳过弃牌阶段';
									return '无视防具';
								});
								('step 1');
								if (result.control == '跳过弃牌阶段') player.skip('phaseDiscard');
								if (result.control == '无视防具') player.addTempSkill('WSS_yindu_1', { player: 'phaseAfter' });
							},
						},
						WSS_yindu_1: {
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									return true;
								},
							},
						},
						WSS_mafei: {
							trigger: {
								global: 'dyingBefore',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h', { name: 'jiu' }) > 0 && event.player != player;
							},
							content() {
								'step 0';
								player.chooseCard('h', { name: 'jiu' }, get.prompt('WSS_mafei')).set('ai', function (card) {
									if (get.attitude(player, trigger.player) > 0) return 1;
									return 0;
								});
								('step 1');
								if (result.bool) {
									player.line(trigger.player);
									player.useCard(result.cards[0], trigger.player);
									trigger.player.recover();
									trigger.player.turnOver();
									trigger.untrigger();
									trigger.finish();
								} else {
									event.finish();
								}
							},
						},
						WSS_jiushi: {
							trigger: {
								player: 'dieBefore',
							},
							mark: true,
							init(player) {
								player.storage.WSS_jiushi = false;
							},
							filter(event, player) {
								return !player.storage.WSS_jiushi;
							},
							content() {
								player.awakenSkill('WSS_jiushi');
								player.storage.WSS_jiushi = true;
								for (const i of game.players) {
									i.recover(2);
								}
							},
							intro: {
								content: 'limited',
							},
						},
						WSS_wuxie: {
							group: ['WSS_wuxie_shan', 'WSS_wuxie_tao'],
							subSkill: {
								shan: {
									enable: ['chooseToUse', 'chooseToRespond'],
									filterCard: { name: 'wuxie' },
									viewAs: { name: 'shan' },
									check() {
										return 1;
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'respondshan') && current < 0) return 0.6;
											},
										},
										respondshan: true,
										order: 4,
										useful: -1,
										value: -1,
									},
								},
								tao: {
									trigger: {
										global: 'taoBegin',
									},
									forced: true,
									filter(event, player) {
										return event.target && event.target != player && event.target.hp <= 0 && player.countCards('h', { name: 'wuxie' }) > 0;
									},
									content() {
										'step 0';
										player.chooseCard('h', { name: 'wuxie' }, get.prompt('WSS_wuxie')).set('ai', function (card) {
											if (get.attitude(player, trigger.player) < 0) return 1;
											return 0;
										});
										('step 1');
										if (result.bool) {
											player.useCard(result.cards[0]);
											trigger.untrigger();
											trigger.finish();
										} else {
											event.finish();
										}
									},
								},
							},
						},
						WSS_wuwei: {
							mark: true,
							init(player) {
								player.storage.WSS_wuwei = false;
							},
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return (
									game.countPlayer(function (current) {
										return get.distance(player, current, 'attack') <= 1 && current != player;
									}) > 1 && !player.storage.WSS_wuwei
								);
							},
							filterTarget(card, player, target) {
								return get.distance(player, target, 'attack') <= 1 && target != player;
							},
							selectTarget: 2,
							multitarget: true,
							targetprompt: ['你', '上一名角色'],
							content() {
								player.awakenSkill('WSS_wuwei');
								player.storage.WSS_wuwei = true;
								player.loseHp(2);
								targets[0].damage(Math.abs(targets[0].hp - targets[1].hp));
								targets[1].damage(Math.abs(targets[0].hp - targets[1].hp), targets[0]);
							},
							ai: {
								order: 11,
								expose: 0.6,
								result: {
									target(player, target) {
										if (player.hp <= 2) return;
										if (ui.selected.targets.length == 0) {
											return -3;
										} else {
											if (Math.abs(target.hp - ui.selected.targets[0].hp) > 1) return -1;
										}
									},
								},
							},
							intro: {
								content: 'limited',
							},
						},
						WSS_xiuhua: {
							enable: ['chooseToRespond'],
							filterCard(card, player) {
								return get.color(card) == 'red';
							},
							viewAs: { name: 'shan' },
							prompt: '将一张红色手牌当[闪]打出',
							check() {
								return 1;
							},
							ai: {
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('h', { color: 'red' })) return false;
								},
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'respondShan') && current < 0) return 0.6;
									},
								},
							},
						},
						WSS_qishe: {
							audio: 'luanji',
							enable: 'phaseUse',
							viewAs: { name: 'wanjian' },
							filterCard(card, player) {
								if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
								var cards = player.getCards('h');
								if (Array.isArray(cards))
									for (const i of cards) {
										if (card != i) if (card.suit == i.suit) return true;
									}
								return false;
							},
							selectCard: 2,
							complexCard: true,
							check(card) {
								return 6 - get.value(card);
							},
							onuse(result, player) {
								if (get.color(result.cards[0]) == 'red' && get.color(result.cards[1]) == 'red') player.addTempSkill('WSS_qishe_1', { player: 'useCardAfter' });
								if (get.color(result.cards[0]) == 'black' && get.color(result.cards[1]) == 'black') player.addTempSkill('WSS_qishe_2', { player: 'useCardAfter' });
							},
							ai: {
								basic: {
									order: 10,
								},
							},
						},
						WSS_qishe_1: {
							trigger: {
								source: 'damageBefore',
							},
							forced: true,
							popup: false,
							content() {
								trigger.nature = 'fire';
							},
						},
						WSS_qishe_2: {
							trigger: {
								source: 'damageBefore',
							},
							forced: true,
							popup: false,
							content() {
								trigger.nature = 'thunder';
							},
						},
						WSS_mingmen: {
							trigger: {
								global: 'dyingBefore',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h', { name: 'jiu' }) > 0;
							},
							content() {
								'step 0';
								player.chooseCard('h', { name: 'jiu' }, get.prompt('WSS_mafei')).set('ai', function (card) {
									if (get.attitude(player, trigger.player) > 0) return 1;
									return 0;
								});
								('step 1');
								if (result.bool) {
									player.line(trigger.player);
									player.useCard(result.cards[0], trigger.player);
									trigger.player.recover();
									trigger.untrigger();
									trigger.finish();
								} else {
									event.finish();
								}
							},
						},
						WSS_shuangsha: {
							group: ['WSS_shuangsha_tao', 'WSS_shuangsha_wuzhong'],
							subSkill: {
								tao: {
									mod: {
										cardEnabled(card, player) {
											if (_status.event.skill != 'WSS_shuangsha_tao' && card.name == 'tao') return false;
										},
										cardUsable(card, player) {
											if (_status.event.skill != 'WSS_shuangsha_tao' && card.name == 'tao') return false;
										},
										cardRespondable(card, player) {
											if (_status.event.skill != 'WSS_shuangsha_tao' && card.name == 'tao') return false;
										},
										cardSavable(card, player) {
											if (_status.event.skill != 'WSS_shuangsha_tao' && card.name == 'tao') return false;
										},
									},
									enable: 'phaseUse',
									filterCard: { name: 'tao' },
									selectCard: 2,
									viewAs: { name: 'juedou' },
									prompt: '将两张【桃】当一张【决斗】使用',
									check(card) {
										return 1;
									},
									onuse(result, player) {
										player.recover();
									},
								},
								wuzhong: {
									trigger: {
										player: 'wuzhongAfter',
									},
									forced: true,
									content() {
										player.draw(2);
									},
								},
							},
						},
						WSS_haoyin: {
							trigger: {
								player: 'useCardBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'jiu' && _status.currentPhase == player;
							},
							content() {
								player.recover();
							},
						},
						WSS_yinyi: {
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.player.sex == 'female';
							},
							content() {
								'step 0';
								var list = [];
								if (player.countCards('hej') > 0) list.push('弃牌回血');
								if (trigger.player.countCards('e') > 0) list.push('获得装备牌');
								if (list.length) {
									player.chooseControl(list).set('ai', function (event) {
										if (player.countCards('h') > 0 && player.hp <= 2) return '弃牌回血';
										if (trigger.player.countCards('e') < 0) return '弃牌回血';
										return '获得装备牌';
									});
								} else {
									event.finish();
								}
								('step 1');
								if (result.control == '弃牌回血') {
									player.chooseToDiscard(1, 'hej', true);
									player.recover();
								}
								if (result.control == '获得装备牌') {
									player.gainPlayerCard(trigger.player, 'e', 1);
								}
							},
						},
						WSS_canbao: {
							trigger: {
								player: 'phaseDrawBefore',
							},
							forced: true,
							filter(event, player) {
								return (
									game.countPlayer(function (current) {
										return get.distance(player, current, 'attack') <= 1 && current != player && current.maxHp > current.hp;
									}) > 0
								);
							},
							content() {
								'step 0';
								player.chooseTarget('是否发动[残暴]？', function (card, player, target) {
									return target != player && get.distance(player, target, 'attack') <= 1 && target.maxHp > target.hp;
								}).ai = function (target) {
									return -get.attitude(player, target) && player.countCards('h') > 0 && target.countCards('hej', { color: 'red' }) == 0;
								};
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.line(event.target);
									trigger.untrigger();
									trigger.finish();
									event.target.chooseCard('hej', { color: 'red' });
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.line(event.target);
									event.target.$give(result.cards, player);
									player.gain(result.cards, event.target);
								} else {
									event.target.loseMaxHp();
									event.finish();
								}
							},
						},
						WSS_hengfeng: {
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && (player.getEquip(3) || player.getEquip(4)) && player.getAttackRange() >= 3;
							},
							content() {
								trigger.num++;
							},
						},
						WSS_huanying: {
							trigger: {
								player: 'useCardEnd',
							},
							forced: true,
							filter(event, player) {
								return event.cards && event.cards.length && (get.type(event.cards[0]) == 'basic' || get.type(event.cards[0]) == 'trick');
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (card.suit == trigger.card.suit) return 2;
									return 0;
								});
								('step 1');
								if (result.card.suit == trigger.cards[0].suit) {
									player.gain(trigger.cards[0], 'gain2');
								}
							},
						},
						WSS_tiandun: {
							trigger: {
								player: 'phaseEnd',
							},
							mark: true,
							init(player) {
								player.storage.WSS_tiandun = false;
							},
							filter(event, player) {
								return !player.storage.WSS_tiandun && game.players.length > 3;
							},
							content() {
								player.awakenSkill('WSS_tiandun');
								player.storage.WSS_tiandun = true;
								var list = [];
								for (const i of game.players) {
									if (i != player) list.push(i);
								}
								var players = [];
								for (const i of game.players) {
									if (i != player) {
										i.storage.WSS_tiandunSS = list.randomGet();
										players.push(i);
									}
								}
								for (const i of players) {
									if (i != player) {
										game.swapSeat(i, i.storage.WSS_tiandunSS);
										delete i.storage.WSS_tiandunSS;
									}
								}
							},
							intro: {
								content: 'limited',
							},
						},
						WSS_jiahe: {
							trigger: {
								player: 'dieBefore',
							},
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							async content(event, trigger, player) {
								const cards = player.getCards('hej');
								const { control } = await player.chooseControl('←', '→').forResult();
								if (control == '←') {
									let previous = player.previous;
									while (cards.length) {
										const { links } = await previous
											.chooseButton(['请选择卡牌', cards], true)
											.set('ai', (button) => get.value(button.link))
											.forResult();
										if (links && links[0]) {
											previous.gain(links[0]);
											cards.remove(links[0]);
										}
										previous = previous.previous;
									}
								} else {
									let next = player.next;
									while (next && cards.length) {
										const { links } = await next
											.chooseButton(['请选择卡牌', cards], true)
											.set('ai', (button) => get.value(button.link))
											.forResult();
										if (links && links[0]) {
											next.gain(links[0]);
											cards.remove(links[0]);
										}
										next = next.next;
									}
								}
							}, // QQQ
						},
						WSS_juyi: {
							mark: true,
							init(player) {
								player.storage.WSS_juyi = false;
							},
							enable: 'phaseUse',
							filter(event, player) {
								return (
									player.identity &&
									player.identity == 'zhu' &&
									game.countPlayer(function (current) {
										return current.group == 'qun';
									}) > 0 &&
									!player.storage.WSS_juyi
								);
							},
							content() {
								player.awakenSkill('WSS_juyi');
								player.storage.WSS_juyi = true;
								for (const i of game.players) {
									if (i.group == 'qun')
										i.draw(
											game.countPlayer(function (current) {
												return current.group == 'qun';
											})
										);
								}
							},
							ai: {
								order: 13,
								result: {
									player: 1,
								},
							},
							intro: {
								content: 'limited',
							},
						},
						WSS_konghou: {
							mod: {
								cardEnabled(card, player) {
									if (!player.getEquip(1) && card.name == 'sha') return false;
								},
								cardUsable(card, player) {
									if (!player.getEquip(1) && card.name == 'sha') return false;
								},
								cardRespondable(card, player) {
									if (!player.getEquip(1) && card.name == 'sha') return false;
								},
							},
							enable: ['phaseUse', 'chooseToUse', 'chooseToRespond'],
							filterCard: { name: 'sha' },
							viewAs: { name: 'tao' },
							viewAsFilter(player) {
								return !player.getEquip(1);
							},
							prompt: '将一张[杀]当[桃]使用',
							check(card) {
								return 1;
							},
							ai: {
								skillTagFilter(player) {
									return !player.getEquip(1) && player.countCards('h', { name: 'sha' }) > 0;
								},
								save: true,
							},
						},
						WSS_jielie: {
							trigger: {
								global: 'useCardToBefore',
							},
							forced: true,
							filter(event, player) {
								return event.targets.includes(player) && player.isTurnedOver() && get.type(event.card) == 'trick';
							},
							content() {
								trigger.cancel();
							},
						},
						WSS_haomen: {
							trigger: {
								player: 'useCardEnd',
							},
							forced: true,
							filter(event, player) {
								return (get.type(event.card) == 'trick' || get.type(event.card) == 'delay') && _status.currentPhase == player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (card.suit == 'heart') return 2;
									return 0;
								});
								('step 1');
								if (result.card.suit == 'heart') {
									player.recover();
								}
							},
						},
						WSS_gaolou: {
							init(player) {
								player.storage.WSS_gaolou = [];
							},
							marktext: '楼',
							intro: {
								content: 'cards',
							},
							mark: true,
							group: ['WSS_gaolou_gain', 'WSS_gaolou_defend', 'WSS_gaolou_dying'],
							subSkill: {
								gain: {
									enable: 'phaseUse',
									usable: 1,
									filterCard(card, player) {
										return card.name == 'shan';
									},
									discard: false,
									check(card) {
										return 1;
									},
									content() {
										player.storage.WSS_gaolou.push(cards[0]);
										game.log(player, '将', cards[0], '置于其武将牌上');
									},
									ai: {
										order: 8.5,
										result: {
											player(player) {
												if (player.storage.WSS_gaolou.length >= 1) return 0;
												return 1;
											},
										},
									},
								},
								defend: {
									trigger: {
										player: 'damageBegin',
									},
									filter(event, player) {
										return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && player.storage.WSS_gaolou && player.storage.WSS_gaolou.length;
									},
									content() {
										game.cardsDiscard(player.storage.WSS_gaolou[0]);
										player.storage.WSS_gaolou.remove(player.storage.WSS_gaolou[0]);
										trigger.untrigger();
										trigger.finish();
									},
								},
								dying: {
									trigger: {
										player: 'dyingBegin',
									},
									forced: true,
									filter(event, player) {
										return player.storage.WSS_gaolou && player.storage.WSS_gaolou.length;
									},
									content() {
										for (let i = 0; i < player.storage.WSS_gaolou.length; i++) {
											player.damage('fire', 'nosource');
											game.cardsDiscard(player.storage.WSS_gaolou[i]);
											player.storage.WSS_gaolou.remove(player.storage.WSS_gaolou[i]);
										}
									},
								},
							},
						},
						WSS_manbing: {
							inherit: 'tengjia1',
							filter(event, player) {
								if (!lib.skill.tengjia1.filter(event, player)) return false;
								if (player.getEquip(2)) return false;
								return true;
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (player == target && get.subtype(card) == 'equip2') {
											if (get.equipValue(card) <= 7.5) return 0;
										}
										if (target.getEquip(2)) return;
										return lib.skill.tengjia1.ai.effect.target.apply(this, arguments);
									},
								},
							},
							group: ['WSS_manbing_1'],
							subSkill: {
								1: {
									inherit: 'tengjia2',
									filter(event, player) {
										if (!lib.skill.tengjia2.filter(event, player)) return false;
										if (player.getEquip(2)) return false;
										return true;
									},
									ai: {
										effect: {
											target(card, player, target) {
												if (player == target && get.subtype(card) == 'equip2') {
													if (get.equipValue(card) <= 7.5) return 0;
												}
												if (target.getEquip(2)) return;
												return lib.skill.tengjia2.ai.effect.target.apply(this, arguments);
											},
										},
									},
								},
							},
						},
						WSS_feiren: {
							mod: {
								attackFrom(from, to, distance) {
									if (!from.getEquip(1)) return distance - 2;
									return distance;
								},
							},
							trigger: {
								player: 'shaBefore',
							},
							forced: true,
							filter(event, player) {
								return event.card && !player.getEquip(1);
							},
							content() {
								trigger.target.addSkill('WSS_feiren_1');
								trigger.target.storage.WSS_feiren = trigger.card.suit;
							},
						},
						WSS_feiren_1: {
							mod: {
								cardRespondable(card, player) {
									if (card.name == 'shan' && card.suit == player.storage.WSS_feiren) return false;
								},
							},
							trigger: {
								global: 'shaAfter',
							},
							forced: true,
							popup: false,
							content() {
								player.removeSkill('WSS_feiren_1');
							},
						},
						WSS_yehuo: {
							trigger: {
								source: 'damageBefore',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								trigger.num++;
							},
						},
						WSS_zhanxiang: {
							trigger: {
								player: 'shaHit',
							},
							filter(event, player) {
								return event.target.countCards('he', { type: 'equip' }) > 0;
							},
							content() {
								'step 0';
								trigger.target.chooseToDiscard(1, 'he', { type: 'equip' }).ai = function (card) {
									return 1;
								};
								('step 1');
								if (result.bool) {
									trigger.untrigger();
									trigger.finish();
								}
							},
						},
						WSS_qunxing: {
							marktext: '群',
							intro: {
								content: 'cards',
							},
							trigger: {
								player: 'nanmanEnd',
							},
							filter(event, player) {
								return player.countCards('h', { type: 'basic' }) > 0;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget('是否发动[群星]？', function (card, player, target) {
									return target != player && target.storage.WSS_qunxing == undefined;
								}).ai = function (target) {
									return -get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.chooseCard('h', { type: 'basic' });
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.line(event.target);
									player.lose(result.cards[0], ui.special);
									event.target.storage.WSS_qunxing = result.cards[0];
									event.target.markSkill('WSS_qunxing');
								} else {
									event.finish();
								}
							},
						},
						_WSS_qunxing: {
							mod: {
								attackFrom(from, to, distance) {
									if (from.storage.WSS_qunxing != undefined) return distance + 2;
									return distance;
								},
							},
							trigger: {
								player: 'shunshouBegin',
							},
							filter(event, player) {
								return event.target.storage.WSS_qunxing != undefined;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCardButton([trigger.target.storage.WSS_qunxing]).ai = function (button) {
									if (get.attitude(player, trigger.target) > 0) return 1;
									return 0;
								};
								('step 1');
								if (result.bool) {
									var card = result.links[0];
									player.gain(card, 'gain2');
									delete trigger.target.storage.WSS_qunxing;
									trigger.target.unmarkSkill('WSS_qunxing');
									trigger.untrigger();
									trigger.finish();
								} else {
									event.finish();
								}
							},
						},
						WSS_shouqun: {
							enable: 'phaseUse',
							viewAs: { name: 'nanman' },
							filterCard(card, player) {
								if (get.color(card) == 'red') return false;
								if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
								var cards = player.getCards('h');
								if (Array.isArray(cards))
									for (const i of cards) {
										if (card != i) if (card.suit == i.suit) return true;
									}
								return false;
							},
							selectCard: 2,
							complexCard: true,
							check(card) {
								return 7 - get.value(card);
							},
							ai: {
								basic: {
									order: 10,
								},
							},
						},
						WSS_rangxian: {
							trigger: {
								player: 'phaseDrawBegin',
							},
							filter(event, player) {
								return !player.isMinHp();
							},
							check(event, player) {
								return (
									player.countCards('h') >= 2 &&
									game.countPlayer(function (current) {
										return current != player && current.hp < player.hp && get.attitude(player, current) > 0;
									}) > 0
								);
							},
							content() {
								trigger.num += player.hp;
								player.addTempSkill('WSS_rangxian_1', { player: 'phaseDrawAfter' });
							},
						},
						WSS_rangxian_1: {
							trigger: {
								player: 'phaseDrawEnd',
							},
							forced: true,
							async content(event, trigger, player) {
								const { targets } = await player
									.chooseTarget('选择[让贤]的目标', true)
									.set('filterTarget', (c, player, target) => target != player && target.hp < player.hp)
									.set('ai', (t) => get.attitude(player, t))
									.forResult();
								if (targets && targets[0]) {
									player.line(targets);
									player.give(trigger.cards, targets[0]); //QQQ
								}
							},
						},
						WSS_shengtao: {
							init(player) {
								player.storage.WSS_shengtao = false;
							},
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && target.countCards('h') > 0;
							},
							selectTarget: -1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							multitarget: true,
							multiline: true,
							content() {
								'step 0';
								player.chooseToCompare(targets).callback = lib.skill.WSS_shengtao.callback;
								('step 1');
								if (player.storage.WSS_shengtao) {
									player.draw(2);
								} else {
									player.chooseToDiscard(1, 'he', true);
								}
								player.storage.WSS_shengtao = false;
							},
							callback() {
								if (event.card1.number > event.card2.number) player.storage.WSS_shengtao = true;
							},
							ai: {
								order: 10,
								result: {
									player(player, target) {
										var Fnum = game.countPlayer(function (current) {
											return current != player && get.attitude(player, current) > 0 && current.countCards('h') > 0;
										});
										var Enum = game.countPlayer(function (current) {
											return current != player && get.attitude(player, current) <= 0 && current.countCards('h') > 0;
										});
										if (Enum + Fnum < 2 || Fnum - Enum > 1 || (Enum == 0 && Fnum <= 2)) return 0;
										return 1;
									},
								},
							},
						},
						WSS_guoyan: {
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							check(card) {
								var player = get.owner(card);
								if (card.name == 'du' && player.hp <= 2) return 0;
								return 6 - get.value(card);
							},
							content() {
								player.line(game.players);
								for (const i of game.players) {
									if (i != player) {
										i.storage.WSS_guoyan = cards[0].suit;
										i.useSkill('WSS_guoyan_1');
									}
								}
							},
							ai: {
								order: 2,
								result: {
									player(player, target) {
										var Fnum = game.countPlayer(function (current) {
											return current != player && get.attitude(player, current) > 0 && current.countCards('h') > 0 && current.maxHp > current.hp;
										});
										var Enum = game.countPlayer(function (current) {
											return current != player && get.attitude(player, current) <= 0 && current.countCards('h') > 0 && current.maxHp > current.hp;
										});
										if (Enum + Fnum < 2 || Fnum - Enum > 1 || (Enum == 0 && Fnum <= 2)) return 0;
										return 1;
									},
								},
							},
						},
						WSS_guoyan_1: {
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard(1, 'h', { suit: player.storage.WSS_guoyan }).ai = function (card) {
									return player.maxHp - player.hp;
								};
								('step 1');
								if (result.bool) {
									player.recover();
								} else {
									player.popup('拒绝');
									event.finish();
								}
							},
						},
						WSS_qiandu: {
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.countCards('e') > 0;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard([1, Infinity], 'e').ai = function (card) {
									return 0;
								};
								('step 1');
								if (result.bool) {
									player.draw(result.cards.length);
								} else {
									event.finish();
								}
							},
						},
						WSS_xuezhao: {
							zhuSkill: true,
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return (
									game.countPlayer(function (current) {
										return current != player && current.group == 'qun';
									}) > 0
								);
							},
							filterTarget(card, player, target) {
								if (player == target) return false;
								if (ui.selected.targets.length == 0) return target.group == 'qun';
								if (ui.selected.targets.length == 1) return true;
							},
							selectTarget: 2,
							multitarget: true,
							targetprompt: ['伤害来源', '受到伤害'],
							content() {
								player.loseHp();
								targets[1].damage(targets[0]);
							},
							ai: {
								order: 11,
								result: {
									target(player, target) {
										if (player.hp <= 2) return;
										if (ui.selected.targets.length == 0) {
											return -1;
										} else {
											return -3;
										}
									},
								},
							},
						},
						WSS_liyu: {
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.countCards('j') > 0 && player.countCards('h', { color: 'black' }) > 0;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseToDiscard(1, 'h', { color: 'black' }, get.prompt('WSS_liyu')).ai = function (card) {
									return 0;
								};
								('step 1');
								if (result.bool) {
									player.skip('phaseJudge');
								} else {
									event.finish();
								}
							},
						},
						WSS_yuexiang: {
							mod: {
								maxHandcard(player, num) {
									return num + 1;
								},
							},
						},
						WSS_zimei: {
							init(player) {
								player.addTempSkill('guose', { player: 'dieBefore' });
								player.addTempSkill('liuli', { player: 'dieBefore' });
								player.addTempSkill('tianxiang', { player: 'dieBefore' });
								player.addTempSkill('hongyan', { player: 'dieBefore' });
							},
						},
						WSS_chujia: {
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return event.source && event.source.sex == 'male' && player.maxHp == player.hp;
							},
							content() {
								trigger.source.draw(2);
							},
						},
						WSS_wumei: {
							enable: 'phaseUse',
							usable: 1,
							discard: false,
							line: true,
							prepare: 'give',
							filterCard(card, player) {
								return card.suit == 'spade';
							},
							selectCard: 2,
							filterTarget(card, player, target) {
								return target != player && target.sex == 'male';
							},
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								target.gain(cards, player);
								target.turnOver();
							},
							ai: {
								order: 13,
								result: {
									target(player, target) {
										if (target.isTurnedOver()) return 1;
										return -1;
									},
								},
							},
						},
						WSS_shude: {
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								return event.card && get.color(event.card) == 'red' && get.type(event.card) == 'trick';
							},
							forced: true,
							content() {
								'step 0';
								player.chooseTarget('是否将【' + lib.translate[trigger.card.name] + '】交给一名其他角色？', function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									return get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									player.line(result.targets);
									player.$give(trigger.card, result.targets[0]);
									result.targets[0].gain(trigger.card, player);
								} else {
									event.finish();
								}
							},
						},
						WSS_shijun: {
							trigger: {
								player: 'phaseDiscardEnd',
							},
							filter(event, player) {
								return (
									event.cards &&
									event.cards.length >= 2 &&
									game.countPlayer(function (current) {
										return current != player && get.distance(player, current) <= 1 && current.sex == 'male';
									}) > 0
								);
							},
							check(event, player) {
								for (const i of game.players) {
									if (i.maxHp > i.hp && i.sex == 'male' && get.distance(player, i) <= 1 && player != i && get.attitude(player, i) < 0) return true;
								}
								return false;
							},
							content() {
								for (const i of game.players) {
									if (i.sex == 'male' && get.distance(player, i) <= 1 && player != i) i.recover();
								}
							},
						},
						WSS_duzhan: {
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player != target && target.countCards('h') > 0 && get.distance(player, target, 'attack') <= 1;
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToCompare(target);
								('step 1');
								if (result.bool) {
									for (let i = 0; i < player.get('h').length; i++) {
										game.broadcastAll(function (card) {
											if (card.name == 'shan' || get.type(card) == 'trick') card.init([card.suit, card.number, 'juedou']);
										}, player.get('h')[i]);
									}
								} else {
									player.addTempSkill('WSS_duzhan_1', { player: 'phaseBegin' });
								}
							},
							ai: {
								order(name, player) {
									var cards = player.getCards('h');
									if (player.countCards('h', 'sha') == 0) return 1;
									if (Array.isArray(cards))
										for (const i of cards) {
											if (i.name != 'sha' && i.number > 11 && get.value(i) < 7) return 9;
										}
									return get.order({ name: 'sha' }) - 1;
								},
								result: {
									player(player) {
										if (player.countCards('h', 'sha') > 0) return 0.6;
										var num = player.countCards('h');
										if (num > player.hp) return 0;
										if (num == 1) return -2;
										if (num == 2) return -1;
										return -0.7;
									},
									target(player, target) {
										var num = target.countCards('h');
										if (num == 1) return -1;
										if (num == 2) return -0.7;
										return -0.5;
									},
								},
							},
						},
						WSS_duzhan_1: {
							mod: {
								globalTo(from, to, distance) {
									return Infinity;
								},
							},
						},
					},
					translate: {
						WSS_huatuo: '华佗',
						WSS_mafei: '麻沸',
						WSS_mafei_info: '当其他角色进入濒死阶段前,你可以对其使用一张[酒],然后其回复一点体力并翻面',
						WSS_jiushi: '救世',
						WSS_jiushi_info: '限定技,你死亡时,所有角色回复两点体力',
						WSS_lvbu: '吕布',
						WSS_wuxie: '无懈',
						WSS_wuxie_info: '你的【无懈可击】额外拥有以下效果:1.可以当作【闪】使用或打出;2.抵消一张对其他濒死角色使用的【桃】',
						WSS_wuwei: '无畏',
						WSS_wuwei_info: '限定技,出牌阶段,你可以流失两点体力,然后令你攻击范围内的两名其他角色受到X点伤害(X为这两名角色的体力差的绝对值,第一次伤害的来源为你,第二次伤害来源为第一次以此法受到伤害的玩家)',
						WSS_diaochan: '貂蝉',
						WSS_xiuhua: '羞花',
						WSS_xiuhua_info: '你可以将一张红色手牌当[闪]使用或打出',
						WSS_yuanshao: '袁绍',
						WSS_qishe_2: '齐射',
						WSS_qishe_1: '齐射',
						WSS_qishe: '齐射',
						WSS_qishe_info: '出牌阶段,你可以将任意两张相同花色的手牌当[万箭齐发]使用,若这两张牌颜色为黑色,造成的伤害为雷属性伤害;若这两张牌颜色为红色,造成的伤害为火属性伤害',
						WSS_mingmen: '名门',
						WSS_mingmen_info: '当一名角色进入濒死阶段前,你可以对其使用一张[酒],然后其回复一点体力',
						WSS_yanliangwenchou: '颜良文丑',
						WSS_shuangsha: '双煞',
						WSS_shuangsha_info: '锁定技,你无法使用或打出【桃】;出牌阶段,你可以将两张【桃】当【决斗】打出,若如此做,你回复一点体力;你使用的【无中生有】可以额外摸两张牌',
						WSS_dongzhuo: '董卓',
						WSS_haoyin: '豪饮',
						WSS_haoyin_info: '锁定技,当你于出牌阶段使用[酒]时,你回复一点体力',
						WSS_yinyi: '淫逸',
						WSS_yinyi_info: '当你对女性角色造成伤害时,你可以选择一项:1.弃一张牌,然后回复一点体力;2.获得该女性角色一张装备牌',
						WSS_canbao: '残暴',
						WSS_canbao_info: '摸牌阶段前,你可以跳过该阶段并令一名在你攻击范围内的其他已受伤角色弃置一张红色牌,否则其失去一点体力上限',
						WSS_jiaxu: '贾诩',
						WSS_pangde: '庞德',
						WSS_hengfeng: '衡锋',
						WSS_hengfeng_info: '锁定技,当你的[杀]或[决斗]造成伤害时,若你装备着马匹且你的攻击范围不小于3,该伤害+1',
						WSS_zuoci: '左慈',
						WSS_huanying: '幻影',
						WSS_huanying_info: '当你使用基础牌或非延时性锦囊牌时,你可以进行一次判定,若判定结果的花色与使用的牌的相同,你收回这张牌',
						WSS_tiandun: '天遁',
						WSS_tiandun_info: '限定技,回合结束阶段,若存活人数大于3,你可以令所有其他角色与随机角色(你除外)换位',
						WSS_jiahe: '驾鹤',
						WSS_jiahe_info: '当你死亡前,你可以决定顺序,令其他角色依次获得你的一张牌直到你没有牌',
						WSS_zhangjiao: '张角',
						WSS_juyi: '举义',
						WSS_juyi_info: '限定技,主公技,出牌阶段,你可以令所有群雄角色摸X张牌(X为现存群雄角色数)',
						WSS_chengong: '陈宫',
						WSS_gaoshun: '高顺',
						WSS_caiwenji: '蔡文姬',
						WSS_konghou: '箜篌',
						WSS_konghou_info: '锁定技,当你没有装备武器时,你的[杀]始终视为[桃]',
						WSS_jielie: '节烈',
						WSS_jielie_info: '锁定技,当你翻面时,任何非延时性锦囊牌对你无效',
						WSS_yuanshu: '袁术',
						WSS_haomen: '豪门',
						WSS_haomen_info: '锁定技,当你于出牌阶段使用锦囊牌时,你进行一次判定,若判定结果为<span style=\"color:red\">♥️</span>,你回复一点体力',
						WSS_gongsunzan: '公孙瓒',
						WSS_gaolou: '高楼',
						WSS_gaolou_info: '出牌阶段,你可以将一张[闪]置于你的武将牌上,称为[楼],每回合限一次<br>当你受到[杀]或[决斗]造成的伤害时,你可以弃置一张[楼]并防止此次伤害<br>锁定技,你进入濒死阶段时,你每有一张[楼],你受到一点没有伤害来源的火焰伤害并弃置一张[楼]',
						WSS_spzhurong: 'sp祝融',
						WSS_manbing: '蛮兵',
						WSS_manbing_info: '锁定技,当你没有装备防具时,始终视为你装备着[藤甲]',
						WSS_feiren: '飞刃',
						WSS_feiren_info: '锁定技,当你没有装备武器时,你的攻击范围为2,你使用的[杀]不可被相同花色的[闪]响应',
						WSS_yehuo: '业火',
						WSS_yehuo_info: '锁定技,你造成的火焰伤害始终+1',
						WSS_spmenghuo: 'sp孟获',
						WSS_zhanxiang: '战象',
						WSS_zhanxiang_info: '出牌阶段,当你的[杀]命中时,你可以令目标弃置一张装备牌,若其弃置,此[杀]失效',
						WSS_qunxing: '群星',
						WSS_qunxing_info: '当你使用[南蛮入侵]时,你可以将一张基本牌置于一名其他角色的武将牌上,若如此做,其攻击范围-2直至此牌被[顺手牵羊]移除',
						WSS_shouqun: '兽群',
						WSS_shouqun_info: '出牌阶段,你可以将两张相同花色的黑色手牌当作[南蛮入侵]使用',
						WSS_kongrong: '孔融',
						WSS_rangxian: '让贤',
						WSS_rangxian_info: '摸牌阶段,若你的体力不是全场最少(或之一),你可以额外摸X张牌(X为你的体力),然后你必须将这些牌交给一名体力比你少的角色',
						WSS_shengtao: '声讨',
						WSS_shengtao_info: '出牌阶段,你可以用一张牌与所有其他角色拼点,若你赢了任意一名角色,你摸两张牌,否则你弃置一张牌,每回合限一次',
						WSS_liuxie: '刘协',
						WSS_guoyan_1: '国宴',
						WSS_guoyan: '国宴',
						WSS_guoyan_info: '出牌阶段,你可以弃置一张牌,然后其他角色可以弃置一张与之花色相同的手牌,若有人弃牌,其回复一点体力,每回合限一次',
						WSS_qiandu: '迁都',
						WSS_qiandu_info: '回合结束阶段,你可以弃置你装备区内的牌,然后摸等量的牌',
						WSS_xuezhao: '血诏',
						WSS_xuezhao_info: '主公技,出牌阶段,你可以流失一点体力,然后另一名其他群雄角色对一名其他角色造成一点伤害,每回合限一次',
						WSS_spdiaochan: 'sp貂蝉',
						WSS_liyu: '丽玉',
						WSS_liyu_info: '回合开始阶段,若你判定区内有牌,你可以弃置一张黑色手牌,若如此做,你跳过判定阶段',
						WSS_yuexiang: '月香',
						WSS_yuexiang_info: '锁定技,你的手牌上限始终+1',
						WSS_daxiaoqiao: '大小乔',
						WSS_zimei: '姊妹',
						WSS_zimei_info: '锁定技,你拥有[国色]、[流离]和[天香]、[红颜],直到你死亡',
						WSS_chujia: '初嫁',
						WSS_chujia_info: '锁定技,当你受到男性伤害时,若你满体力,其摸两张牌',
						WSS_zhenmi: '甄宓',
						WSS_wumei: '妩媚',
						WSS_wumei_info: '出牌阶段,你可以将两张<span style=\"color:black\">︎♣️</span>手牌给予一名其他男性角色,若如此做,该角色翻面,每回合限一次',
						WSS_shude: '淑德',
						WSS_shude_info: '当你的红色锦囊牌结算后,你可以将这张牌给予一名其他角色',
						WSS_shijun: '侍君',
						WSS_shijun_info: '弃牌阶段,若你弃置的牌不小于2,你可以令与你距离为一的男性角色回复一点体力',
						WSS_huaxiong: '华雄',
						WSS_duzhan_1: '独战',
						WSS_duzhan: '独战',
						WSS_duzhan_info: '出牌阶段,你可以与你攻击范围内的一名其他角色进行拼点,若你赢,你手牌中所有的[闪]和非延时性锦囊变为[决斗],否则你的防御距离+∞直至你下一个回合开始阶段',
						WSS_caocao: '曹操',
						WSS_yitian: '倚天',
						WSS_yitian_info: '锁定技,当你失去装备区内的装备牌时,若你满体力或你的手牌数不小于3,你获得此装备牌的技能直至你装备装备前',
						WSS_simayi: '司马懿',
						WSS_tianshi: '天时',
						WSS_tianshi_info: '锁定技,身份模式下,若在首轮中你是全场行动顺序中第一位或最后一位开始回合的角色,摸牌阶段,你额外摸一张牌',
						WSS_xiahoudun: '夏侯惇',
						WSS_nilin: '逆鳞',
						WSS_nilin_info: '锁定技,你使用的黑色【杀】附带雷属性',
						WSS_zhangliao: '张辽',
						WSS_qiwei: '骑尉',
						WSS_qiwei_info: '锁定技,当你装备着攻击马时,若你装备区内有武器,你无法使用或装备武器,若你装备区内有防具,你无法使用或装备防具,你不会失去装备区内的武器/防具(不影响失去后的结果);当你装备着防御马时,你的手牌上限+1',
						WSS_xuzhu: '许褚',
						WSS_zhenlie: '震裂',
						WSS_zhenlie_info: '锁定技,当你造成伤害时,若你处于[裸衣]状态,你弃置目标装备区内的防具',
						WSS_taotie: '饕餮',
						WSS_taotie_info: '出牌阶段,你可以展示出所有手牌,每弃置两张<span style=\"color:red\">♥️</span>牌,你回复一点体力,每回合限一次',
						WSS_guojia: '郭嘉',
						WSS_xiaoshi: '消逝',
						WSS_xiaoshi_info: '当你进去濒死阶段时,你可以获得所有角色判定区内的牌',
						WSS_zhenji: '甄姬',
						WSS_qingzhuang: '轻装',
						WSS_qingzhuang_info: '锁定技,你拥有你手牌中装备牌的技能(游戏开始摸到的装备牌除外)',
						WSS_xiahouyuan: '夏侯渊',
						WSS_guizha: '诡诈',
						WSS_guizha_info: '当你闪避[杀]后,你可以弃置此[杀]使用者装备区内的一张牌',
						WSS_jigong: '戟弓',
						WSS_jigong_info: '锁定技,当你的攻击距离不小于3时,你无视任何防具',
						WSS_caohong: '曹洪',
						_WSS_kaiken: '开垦',
						WSS_kaiken: '开垦',
						WSS_kaiken_info: '出牌阶段,若你的[农耕区]内没有牌,你可以将一张手牌置于[农耕区]内,[农耕区]的首张牌称为初始牌;其他角色使用的[顺手牵羊]可以对你[农耕区]内牌进行操作',
						WSS_juntun: '军屯',
						WSS_juntun_info: '摸牌阶段,若你有初始牌,你可以进行两次判定,若判定牌颜色与初始牌相同且点数大于初始牌,你将此判定牌置于你的[农耕区]内,当你[农耕区]内的牌不小于三张,你获得[农耕区]内的牌或是将[农耕区]内的牌交给一名其他角色',
						WSS_tianpo: '天破',
						WSS_tianpo_info: '当你的[杀]造成伤害时,若你的体力小于手牌数,此[杀]伤害+1',
						WSS_xuhuang: '徐晃',
						WSS_lengfeng: '冷锋',
						WSS_lengfeng_info: '锁定技,你使用的【杀】不附带任何属性',
						WSS_jieji: '截击',
						WSS_jieji_info: '其他角色角色判定阶段开始前,你可以视为对其使用一张【杀】',
						WSS_caoren: '曹仁',
						WSS_jintang: '金汤',
						WSS_jintang_info: '锁定技,当你翻面时,你受到的伤害不会大于一,你成为其他角色[杀]的目标时,其需额外弃置一张[杀],否则此[杀]无效',
						WSS_huofeng: '火凤',
						WSS_huofeng_info: '锁定技,当你装备着防具时,火焰伤害对你无效',
						WSS_dianwei: '典韦',
						WSS_shuangji: '双戟',
						WSS_shuangji_info: '锁定技,当你装备武器时,你的攻击范围+1',
						WSS_xunyu: '荀彧',
						WSS_caopi: '曹丕',
						WSS_wuzou: '无奏',
						WSS_wuzou_info: '锁定技,其他角色主动弃置或获得你的手牌时,其可选择区域改为装备区和判定区',
						WSS_spzhenji: 'sp甄姬',
						WSS_guangsha: '光纱',
						WSS_guangsha_info: '出牌阶段,你可以将一张点数不小于6的<span style=\"color:black\">︎♠️</span>手牌视为[光纱天衣]并装备之',
						WSS_juehou_1: '绝后',
						WSS_juehou: '绝后',
						WSS_juehou_info: '男性角色可以在其出牌阶段给予你两张红色手牌,你可以拒绝之,若你收下,其回复一点体力,其每回合限一次',
						WSS_sppangde: 'sp庞德',
						WSS_qiqiang: '骑枪',
						WSS_qiqiang_info: '锁定技,你使用的[杀]对装备着马匹的角色造成的伤害+1',
						WSS_jianta: '践踏',
						WSS_jianta_info: '出牌阶段,你使用的[杀]对其他角色造成伤害后,若你装备着马匹,你可以与其拼点,若你赢,你可以获得对方1~2张牌或令其翻面,若你输,你弃置装备区内的所有马匹',
						WSS_xingguan: '行棺',
						WSS_xingguan_info: '限定技,你死亡时,获得牌堆顶五张牌,然后你将你所有牌移出游戏',
						WSS_spjiaxu: 'sp贾诩',
						WSS_jianmo_2: '缄默',
						WSS_jianmo_1: '缄默',
						WSS_jianmo: '缄默',
						WSS_jianmo_info: '出牌阶段,你可以将一张手牌置于你的武将牌上,称为[默],在此之前,若你武将牌上有[默],你获得之,每回合限一次;<br>锁定技,其他角色无法使用或打出与[默]花色相同的非延时性锦囊牌',
						WSS_ziqing: '自清',
						WSS_ziqing_info: '锁定技,当一名其他角色进入[铁索连环]状态后,若你处于[铁索连环]状态,其流失一点体力',
						WSS_yujin: '于禁',
						WSS_anying: '安营',
						WSS_anying_info: '每当你受到一点伤害,在此次伤害结算后,你进行一次判定,若为<span style=\"color:red\">♥️</span>,你回复一点体力,否则你获得判定牌',
						WSS_caozhi: '曹植',
						WSS_qibu: '七步',
						WSS_qibu_info: '锁定技,每当你使用、打出或弃置一张点数不大于7的锦囊牌时,你回复一点体力',
						WSS_spcaiwenji: 'sp蔡文姬',
						WSS_caiqing: '才情',
						WSS_caiqing_info: '回合开始阶段,你可以展示牌堆顶一张牌,你展示一张与之相同颜色的手牌,如此反复,直至你不展示符合要求的牌时,你获得所有展示的牌,在此期间展示的牌会被暂时移出游戏',
						WSS_qinyincc: '琴音',
						WSS_qinyincc_info: '出牌阶段,你可以令攻击范围内的一名其他角色随机展示其X张手牌,每回合限一次(X为你已损失体力值)',
						WSS_juechang: '绝唱',
						WSS_juechang_info: '限定技,你死亡时,所有其他角色流失一点体力',
						WSS_spsimayi: 'sp司马懿',
						WSS_lianpo: '连破',
						WSS_lianpo_info: '锁定技,当你击杀一名角色后,你立即执行一个新的回合',
						WSS_shenmou_1: '深谋',
						WSS_shenmou: '深谋',
						WSS_shenmou_info: '锁定技,你使用非延时性锦囊牌不可被[无懈可击]响应',
						WSS_simashi: '司马师',
						WSS_duanzui: '断罪',
						WSS_duanzui_info: '当一名在你攻击范围内的其他角色进入濒死状态时,你可以令其进行一次判定,若判定结果:为<span style="color:black">︎♠️</span>,你对其造成一点伤害;为<span style="color:black">︎♣️</span>,其弃置所有手牌;为<span style="color:red">♥️</span>,你获得其至多三张牌,其回复一点体力;为<span style="color:red">♦️</span>,你流失一点体力,视为对其使用一张[桃]',
						WSS_zhulian: '诛连',
						WSS_zhulian_info: '当一名角色回复体力后,若其体力仍不大于1,你可以弃置X张牌,对其造成X点伤害(X为回复量)',
						WSS_simazhao: '司马昭',
						WSS_shezheng_1: '摄政',
						WSS_shezheng: '摄政',
						WSS_shezheng_info: '锁定技,身份模式下,你存活时,主公的主公技失效',
						WSS_qunzu: '群族',
						WSS_qunzu_info: '锁定技,你的手牌上限+X(X为场上晋势力角色存活数*2)',
						WSS_yexin: '野心',
						WSS_yexin_info: '你使用[顺手牵羊]后,可以额外获得目标一张牌',
						WSS_zhangchunhua: '张春华',
						WSS_conghui: '聪慧',
						WSS_conghui_info: '锁定技,当一名其他角色流失体力后,你随机获得其一项技能直至你受到伤害后',
						WSS_wangyuanji: '王元姬',
						WSS_binghuo: '冰火',
						WSS_binghuo_info: '锁定技,你无法造成火焰伤害;你受到火焰伤害后,该伤害无效,你回复一点体力',
						WSS_jingzhi: '精治',
						WSS_jingzhi_info: '回合结束阶段,若你的手牌数小于你的体力上限-1,你可以将手牌数补至体力上限-1',
						WSS_zhonghui: '钟会',
						WSS_mieguo: '灭国',
						WSS_mieguo_info: '锁定技,当一个势力的所有角色死亡后,你摸四张牌',
						WSS_lizhua: '利爪',
						WSS_lizhua_info: '出牌阶段,你可以选择一名在你攻击范围内的其他角色,然后声名一种花色,展示该角色一张手牌,若吻合,你获得该牌,若不吻合,你弃置一张手牌,每回合限一次',
						WSS_kuiqu: '窥觑',
						WSS_kuiqu_info: '回合结束阶段,你可以观看牌堆顶X张牌(X为你已损失体力)',
						WSS_dengai: '邓艾',
						WSS_zhenggong: '争功',
						WSS_zhenggong_info: '当其他角色击杀角色后,你可以与该角色拼点,若你赢,你摸三张牌,若你输,你流失一点体力或令其回复一点体力',
						WSS_langyan_1: '狼烟',
						WSS_langyan: '狼烟',
						WSS_langyan_info: '回合开始阶段,你可以跳过判定阶段和摸牌阶段,若如此做,你进行一次判定,其他角色需要弃置一张与该判定牌花色相同的手牌,否则其受到一点没有伤害来源的伤害,每两轮限一次',
						WSS_xiahouba: '夏侯霸',
						WSS_cheqi: '车骑',
						WSS_cheqi_info: '锁定技,你可以装备任意数量的马匹,距离叠加计算',
						WSS_lieying: '猎鹰',
						WSS_lieying_info: '摸牌阶段,你可以将你于该阶段获得的牌展示后弃置,再摸等量的牌',
						WSS_xuelang: '雪狼',
						WSS_xuelang_info: '出牌阶段,你可以将一张[杀]置于一名其他角色的武将牌上,其回合结束阶段,其成为此[杀]的目标,每回合限一次',
						WSS_guohuai: '郭淮',
						WSS_butui_1: '不退',
						WSS_butui: '不退',
						WSS_butui_info: '锁定技,你不能成为<span style="color:black">︎♣️</span>[杀]的目标;你不能使用<span style="color:red">♦️</span>[闪]闪避[杀]',
						WSS_chaozhan: '抄斩',
						WSS_chaozhan_info: '当你击杀一名角色后,你可以弃置一张手牌并对一名在你攻击范围内的其他角色造成一点伤害',
						WSS_chengyu: '程昱',
						WSS_xieqin: '挟亲',
						WSS_xieqin_info: '当你对一名角色造成伤害时,你可以弃置另一名其他角色的一张牌',
						WSS_ceyuan: '策源',
						WSS_ceyuan_info: '任意一名角色判定前,你可以猜测牌堆顶一张牌的花色,然后展示这张牌,若猜对,你摸一张牌,若猜错,你可以将一张手置于牌堆顶',
						WSS_zhanghe: '张颌',
						WSS_minrui: '敏锐',
						WSS_minrui_info: '锁定技,当你处于翻面状态,你手牌中的基本牌均视为[闪]',
						WSS_yangxiu: '杨修',
						WSS_wangyi: '王异',
						WSS_bujia: '布甲',
						WSS_bujia_info: '锁定技,当你没有装备防具时,[杀]对你无效',
						WSS_yindu_1: '饮毒',
						WSS_yindu: '饮毒',
						WSS_yindu_info: '回合开始阶段,你可以流失一点体力并选择一项:1.跳过本回合的弃牌阶段;2.本回合内你无视所有防具',
						WSS_liubei: '刘备',
						WSS_hanwang: '汉王',
						WSS_hanwang_info: '锁定技,当你满体力且手牌数大于2时,你不能成为[杀]的目标',
						WSS_guanyu: '关羽',
						WSS_danqi: '单骑',
						WSS_danqi_info: '锁定技,当你装备区内有攻击马时,你的进攻距离+1,当你装备区内有防御马时,你的防御距离+1',
						WSS_shuiyan: '水淹',
						WSS_shuiyan_info: '当你使用的[杀]造成伤害前,你可以进行一次判定,若判定结果为<span style=\"color:red\">♥️</span>,此伤害+1,否则你获得判定牌并取消此次伤害',
						WSS_zhangfei: '张飞',
						WSS_liejiu: '烈酒',
						WSS_liejiu_info: '你可以将你一张黑色手牌视为[酒]使用或打出',
						WSS_zhugeliang: '诸葛亮',
						WSS_tianji: '天机',
						WSS_tianji_info: '出牌阶段,你可以猜测在你攻击范围内的一名角色的随机一张手牌的花色,若猜对,你获得此牌并可以将此牌转化为任意一张非延时性锦囊牌,若猜错,你弃置一张手牌,每回合限一次',
						WSS_zhaoyun: '赵云',
						WSS_longya: '龙牙',
						WSS_longya_info: '锁定技,当你使用的[杀]被闪避后,你获得技能[青釭]直至回合结束后且你可以立即打出一张[杀]',
						WSS_longlin: '龙鳞',
						WSS_longlin_info: '当你受到伤害前,若你装备区内有牌且你没有手牌,你可以弃置一张装备牌使此伤害-1',
						WSS_machao: '马超',
						WSS_tieji: '铁骑',
						WSS_tieji_info: '当你使用一张[杀]前,可进行一次判定,若为红色则此[杀]直接命中',
						WSS_tieti: '铁蹄',
						WSS_tieti_info: '锁定技,当[铁骑]判定结果为黑色时,你无视目标防具',
						WSS_huangyueying: '黄月英',
						WSS_muniu: '木牛',
						WSS_muniu_info: '当一名角色成为其他角色[过河拆桥]或[顺手牵羊]的目标时,你可以弃置一张与之相同花色的牌抵消之',
						WSS_huangzhong: '黄忠',
						WSS_huoshi: '火矢',
						WSS_huoshi_info: '锁定技,你使用的红色【杀】附带火属性',
						WSS_weiyan: '魏延',
						WSS_nifan: '逆反',
						WSS_nifan_info: '当你成为[杀]的目标时,若你手牌中有[杀],你可以弃置一张[杀]并将[杀]的目标改为其使用者',
						WSS_pangtong: '庞统',
						WSS_haofeng: '豪凤',
						WSS_haofeng_info: '锁定技,你受到的火焰伤害-1',
						WSS_spzhugeliang: 'sp诸葛亮',
						WSS_mingdeng: '明灯',
						WSS_mingdeng_info: '出牌阶段,你可以将一张非延时性锦囊牌置于一名角色的武将牌上,称为[灯],当其摸牌阶段结束后,其获得其武将牌上的[灯]并将其于摸牌阶段摸到的牌交给你,每回合限一次',
						WSS_jiangwei: '姜维',
						WSS_bingfa: '兵法',
						WSS_bingfa_info: '锁定技,你判定区的牌判定结果均为不生效',
						WSS_zhouyan: '骤焰',
						WSS_zhouyan_info: '回合结束后,你可以将一张点数大于三的牌置于你的武将牌上,称为[焰]<br>锁定技,回合开始前,若你武将牌上有[焰],清空[焰]并对你的下X家造成一点火焰伤害(X为[焰]的点数)',
						WSS_guanping: '关平',
						WSS_haozhan: '豪斩',
						WSS_haozhan_info: '锁定技,每当你使用的[杀]被目标角色使用的[闪]抵消时,你下次造成的伤害+1且你可以对其使用一张[杀]',
						WSS_xushi: '蓄势',
						WSS_xushi_info: '出牌阶段,你可以将你的一张手牌置于你的武将牌上并于回合开始阶段获得之,每回合限一次',
						WSS_menghuo: '孟获',
						WSS_zhangqi: '瘴气',
						WSS_zhangqi_info: '锁定技,当你成为【过河拆桥】或【顺手牵羊】的目标时,此牌的使用者流失一点体力',
						WSS_zhurong: '祝融',
						WSS_lieren: '烈刃',
						WSS_lieren_info: '当你使用的【杀】造成伤害前,可与受到该伤害的角色拼点;若你赢,你获得对方的一张牌,若你没赢,你回复一点体力并终止此次伤害',
						WSS_zhangxingcai: '张星彩',
						WSS_tianxing: '天星',
						WSS_tianxing_info: '当你装备装备后,你可以令距离一以内的角色获得该装备的技能直至你失去该装备',
						WSS_huangcai_1: '煌彩',
						WSS_huangcai: '煌彩',
						WSS_huangcai_info: '锁定技,你的[杀]选择目标后,目标不能使用小于此[杀]点数的[闪]响应此[杀]',
						WSS_zhoucang: '周仓',
						WSS_maqian: '马前',
						WSS_maqian_info: '锁定技,你无法装备马,当你造成伤害后,若目标装备区内有马,你摸一张牌并弃置之',
						WSS_huwei: '护卫',
						WSS_huwei_info: '当你距离一以内的其他角色受到伤害时,你可以令其给予你一张基本牌,然后你为其抵挡一点伤害',
						WSS_baosanniang: '鲍三娘',
						WSS_nvxia1: '女侠',
						WSS_nvxia1_info: '当一名男性角色对一名女性角色造成伤害后,你令男性角色选择一项:<br>1.令你摸两张牌<br>2.给予你两张牌<br>3.你对其造成一点伤害',
						WSS_guansuo: '关索',
						WSS_jiumei: '救美',
						WSS_jiumei_info: '当你对濒死的女性角色使用[桃]时,你可以令其额外回复一点体力',
						WSS_huaqiao: '花俏',
						WSS_huaqiao_info: '锁定技,你不能成为其他角色<span style=\"color:black\">♣️</span>牌的目标',
						WSS_qingmu: '倾慕',
						WSS_qingmu_info: '出牌阶段,你可以选择一名已受伤的女性角色并弃置一张<span style=\"color:red\">♥️</span>手牌,然后你可以分配以下效果:1.回复一点体力;2.摸两张牌,每回合限一次',
						WSS_madai: '马岱',
						WSS_longqi: '龙骑',
						WSS_longqi_info: '锁定技,你的[杀]选择目标后,可以进行一次判定,若该角色的已损失体力与手牌数之和小于判定结果点数,此[杀]不可闪避',
						WSS_liushan: '刘禅',
						WSS_renmin: '仁敏',
						WSS_renmin_info: '主公技,当你击杀一名角色前,若场上存活的蜀势力角色大于一,你摸X张牌并可以将这些牌交给任意1~2名角色(X为死亡角色的体力上限)',
						WSS_masu: '马谡',
						WSS_zifu: '自负',
						WSS_zifu_info: '锁定技,你的[杀]造成伤害时,若你的体力大于1,你需要弃置一张装备牌,否则你摸一张牌并令此伤害无效;你不能成为[过河拆桥]或[顺手牵羊]的目标',
						WSS_spsunshangxiang: 'sp孙尚香',
						WSS_xiaquan: '夏圈',
						WSS_xiaquan_info: '锁定技,你的[杀]被闪避时,你收回此[杀]',
						WSS_yanyan: '严颜',
						WSS_luoma: '落马',
						WSS_luoma_info: '锁定技,当你失去装备区内的马时,你流失一点体力',
						WSS_poxie: '破邪',
						WSS_poxie_info: '你的[杀]可以视为[无懈可击]使用或打出',
						WSS_qijie: '气节',
						WSS_qijie_info: '锁定技,当你濒死前,你进行一次判定,若判定结果为<span style=\"color:black\">♣️</span>,你回复体力至两点',
						WSS_fazheng: '法正',
						WSS_xushu: '徐庶',
						WSS_zouma: '走马',
						WSS_zouma_info: '限定技,当你死亡前,你可以展示所有手牌并选择一名其他角色,对其造成X点火焰伤害或令其摸Y张牌(X为你手牌中<span style=\"color:red\">♥️</span>牌数量,Y为你手牌中红色牌的数量)',
						WSS_sunquan: '孙权',
						WSS_huanglang: '皇狼',
						WSS_huanglang_info: '锁定技,当你满体力时,你的手牌上限+1,你的武将牌不可被翻面',
						WSS_ganning: '甘宁',
						WSS_chuanhuo_1: '船火',
						WSS_chuanhuo: '船火',
						WSS_chuanhuo_info: '锁定技,当你使用[过河拆桥]前,你获得技能(当一名角色弃置牌后,你可以弃置一张与第一张被弃置牌花色相同的牌,然后你获得第一张被弃置牌)直至使用[过河拆桥]后',
						WSS_lvmeng: '吕蒙',
						WSS_baiyi: '白衣',
						WSS_baiyi_info: '限定技,回合开始阶段,你可以跳过该回合的出牌阶段,若如此做,你进入潜行状态直至回合开始前',
						WSS_huanggai: '黄盖',
						WSS_zhangui: '战龟',
						WSS_zhangui_info: '锁定技,当你没有装备防具时,红色的[杀]对你无效',
						WSS_zhouyu: '周瑜',
						WSS_meilang: '美郎',
						WSS_meilang_info: '你可以将你弃置的牌交给一名女性角色',
						WSS_daqiao: '大乔',
						WSS_jiaolei: '娇泪',
						WSS_jiaolei_info: '限定技,你死亡前可以进行一次判定,若判定结果为红色,所有角色各摸两张牌',
						WSS_luxun: '陆逊',
						WSS_juexing_1: '觉醒',
						WSS_juexing: '觉醒',
						WSS_juexing_info: '回合开始阶段,你可以跳过判定,摸牌,出牌阶段并弃置一张手牌,若你弃置的牌为红色,你对距离一以内的其他角色造成一点火焰伤害,若为黑色,你令你攻击范围内的一名其他角色摸X张牌(X为其已损失体力),然后其翻面',
						WSS_sunshangxiang: '孙尚香',
						WSS_weixian: '薇弦',
						WSS_weixian_info: '锁定技,当你的攻击距离大于或等于四时,你的[杀]不可闪避',
						WSS_sunjian: '孙坚',
						WSS_yinghun: '英魂',
						WSS_yinghun_info: '准备阶段开始时,若你已受伤,你可令一名其他角色执行一项:摸X张牌,然后弃置一张牌;或摸一张牌,然后弃置X张牌(X为你已损失的体力值,若你装备区里牌的数量不小于你的体力值,则X改为你的体力上限)',
						WSS_huyi: '虎翼',
						WSS_huyi_info: '锁定技,当技能[英魂]选择目标后,你摸一张牌',
						WSS_sunce: '孙策',
						WSS_huya: '虎牙',
						WSS_huya_info: '出牌阶段,你可以将一张装备牌视为[决斗]使用',
						WSS_jixing_1: '疾行',
						WSS_jixing: '疾行',
						WSS_jixing_info: '锁定技,你使用的[顺手牵羊]没有距离限制,你使用的[过河拆桥]不可被[无懈可击]响应',
						WSS_shanyon_1: '善用',
						WSS_shanyon: '善用',
						WSS_shanyon_info: '主公技,吴国角色可在他们各自的回合里给你若干张装备牌',
						WSS_xiaoqiao: '小乔',
						WSS_diewu: '蝶舞',
						WSS_diewu_info: '当一名男性角色于其摸牌阶段摸牌后,你可以用等量手牌交换其摸到的牌',
						WSS_taishici: '太史慈',
						WSS_tianmang: '天蟒',
						WSS_tianmang_info: '当任何角色拼点后,你可以选择一张拼点牌并获得之',
						WSS_zhoutai: '周泰',
						WSS_buju: '不惧',
						WSS_buju_info: '当你攻击范围内的一名其他角色成为[杀]的目标时,你可以将此[杀]的目标改为你',
						WSS_lusu: '鲁肃',
						WSS_haodao: '豪道',
						WSS_haodao_info: '当你使用[酒]后,你可以令所有角色回复一点体力',
						WSS_lingtong: '凌统',
						WSS_lietao: '烈涛',
						WSS_lietao_info: '出牌阶段,你可以弃置至多X张手牌,然后获得攻击范围内其他角色X张手牌(X为你已损失体力),若你获得的牌数小于弃牌数,你对其造成一点伤害,每回合限一次',
						WSS_xusheng: '徐盛',
						WSS_yicheng: '疑城',
						WSS_yicheng_info: '你的回合外,当你使用或打出[闪]或[无懈可击]后,你可以摸一张牌',
						WSS_bulianshi: '步练师',
						WSS_bugong: '步弓',
						WSS_bugong_info: '锁定技,当你没有装备武器时,始终视为你装备着[麒麟弓]',
						WSS_honglian: '红莲',
						WSS_honglian_info: '出牌阶段,若你装备区内有武器牌且你没有激活[红莲],你可以弃置一张<span style=\"color:red\">♦️</span>牌并激活[红莲]<br>当你弃置牌时,若弃置牌中的首张牌为武器牌,你可以对一名其他角色造成一点火焰伤害并冻结[红莲]',
						WSS_dingfeng: '丁奉',
						WSS_duanbing: '短兵',
						WSS_duanbing_info: '锁定技,当你使用[杀]时,若目标体力大于你的体力,此[杀]不可闪避',
						WSS_zhangzhao: '张昭',
						WSS_fuzheng: '辅政',
						WSS_fuzheng_info: '当一名其他角色进行判定时,你可以摸两张牌并用其中一张改变判定结果',
						WSS_buzhi: '步骘',
						WSS_liexian: '列贤',
						WSS_liexian_info: '摸牌阶段后,你可以将于摸牌阶段摸到的牌给予一名角色,若如此做,你回复一点体力',
						WSS_wuguotai: '吴国太',
						WSS_chiwen: '斥问',
						WSS_chiwen_info: '出牌阶段,你可以令攻击范围内的一名其他角色随机展示其一张手牌,每回合限一次',
						WSS_spzhoutai: 'sp周泰',
						WSS_shunmie_2: '瞬灭',
						WSS_shunmie_1: '瞬灭',
						WSS_shunmie: '瞬灭',
						WSS_shunmie_info: '出牌阶段,你可以选择一项:1.流失一点体力,然后对一名其他角色使用一张[决斗];2.与攻击范围内的一名其他角色拼点,若你赢,你对其使用一张[决斗],若你没赢,其摸一张牌,每回合限一次',
						WSS_xunmo: '迅默',
						WSS_xunmo_info: '锁定技,你的[闪]视为[杀]',
						WSS_xiaohuo: '宵火',
						WSS_xiaohuo_info: '锁定技,你的[决斗]对其他角色造成的伤害+1且伤害变为火焰伤害',
						WSS_spdaqiao: 'sp大乔',
						WSS_gufang: '孤芳',
						WSS_gufang_info: '锁定技,你不能成为其他男性黑色[杀]与[决斗]的目标,当一名男性角色对你造成伤害后,其摸一张牌',
						WSS_xixin: '悉心',
						WSS_xixin_info: '出牌阶段,你可以弃置一张<span style=\"color:red\">♥️</span>牌并令一名受伤男性角色回复一点体力,每回合限一次',
						WSS_yunlv: '韵律',
						WSS_yunlv_info: '锁定技,当你失去最后一张手牌时,你将手牌补至X(X为你已损失体力)',
						WSS_spxiaoqiao: 'sp小乔',
						WSS_tongque: '铜雀',
						WSS_tongque_info: '当一名男性角色的[杀]对你造成伤害前,若你未翻面,你可以翻面并取消之',
						WSS_zhenjiu: '斟酒',
						WSS_zhenjiu_info: '出牌阶段,你可以将一张[酒]给予一名未翻面的男性角色并令其翻面,每回合限一次',
						WSS_qingyun1: '情韵',
						WSS_qingyun: '情韵',
						WSS_qingyun_info: '锁定技,你的牌均视为<span style=\"color:red\">♥️</span>;当一名角色的回合前,若其判定区内有你使用过的延时性锦囊牌,其无法打出[无懈可击]直至其判定阶段后',
						WSS_spzhouyu: 'sp周瑜',
						WSS_anhun: '安魂',
						WSS_anhun_info: '当你击杀一名角色前,你可以将手牌补至四张或将体力补至四点',
						WSS_qinyin: '琴音',
						WSS_qinyin_info: '弃牌阶段后,若你于此阶段弃置牌数大于或等于两张时,你可以令所有角色回复一点体力或流失一点体力',
						WSS_tianlang: '天狼',
						WSS_tianlang_info: '锁定技,当你使用的火属性[杀]或[火攻]对目标造成伤害时,若其攻击范围不小于你已损失体力,你对其造成一点火焰伤害',
						WSS_splvmeng: 'sp吕蒙',
						WSS_duantou: '断头',
						WSS_duantou_info: '锁定技,当你决斗前,与你进行决斗的其他角色弃置所有手牌',
						WSS_hailang: '海狼',
						WSS_hailang_info: '出牌阶段,你可以选择一张手牌并令一名其他角色猜测此牌类型,若其猜对,其摸一张牌,若没有猜对,你对其造成一点雷电伤害,无论是否猜对,其都会获得这张牌,每回合限一次',
					},
				};
				lib.config.all.characters.add('wushuangsha');
				lib.config.characters.add('wushuangsha');
				lib.translate.wushuangsha_character_config = '三国无双';
				return wushuangsha;
			});
			lib.group.push('WSS_jin');
			lib.translate.WSS_jin = '<span style=\"color: #3BF5FF\">晋</span>';
		},
		package: extensionInfo,
	};
});

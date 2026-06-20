import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '军神包',
		content(config, pack) {
			//——————————————————//
			lib.group.push('ly_junshenbao_sociatyBeast');
			lib.translate.ly_junshenbao_sociatyBeast = '<span style=\"color: yellow\">神兽</span>';
			lib.group.push('ly_junShenChallenge');
			lib.translate.ly_junShenChallenge = '<span style=\"color: yellow\">军神试炼</span>';
			game.playXu = function (fn, dir, sex) {
				if (lib.config.background_speak) {
					if (dir && sex) game.playAudio(dir, sex, fn);
					else if (dir) game.playAudio(dir, fn);
					else game.playAudio('../extension/军神包/audio', fn);
				}
			};
			if (config._nei) {
				lib.skill._nei = {
					trigger: { global: 'gameDrawAfter' },
					//direct:true,
					priority: 2,
					forced: true,
					filter(event, player) {
						return player.identity == 'nei';
					},
					content() {
						player.identity = 'zhong';
						player.setIdentity('zhong');
						player.identityShown = true;
					},
				};
			}
			if (config._environment) {
				lib.skill._environment = {
					trigger: {
						global: 'roundStart',
					},
					popup: false,
					forced: true,
					content() {
						'step 0';
						var list = [];
						list.push('land');
						list.push('sea');
						list.push('sky');
						game.countPlayer(function (current) {
							current.removeSkill(list);
						});
						var num = [1, 2, 3].randomGet();
						if (num == 1) event.goto(1);
						if (num == 2) event.goto(2);
						if (num == 3) event.goto(3);
						('step 1');
						game.countPlayer(function (current) {
							current.addSkill('land');
							event.finish();
						});
						('step 2');
						game.countPlayer(function (current) {
							current.addSkill('sea');
							event.finish();
						});
						('step 3');
						game.countPlayer(function (current) {
							current.addSkill('sky');
							event.finish();
						});
					},
				};
			}
			lib.skill._zhengwangpeiyin = {
				trigger: { global: 'dieBegin' },
				priority: 2,
				forced: true,
				content() {
					game.playAudio('../extension/军神包/audio', trigger.player.name);
				},
			};
		},
		precontent(ly_junshen) {
			game.import('character', function () {
				var ly_junshen = {
					name: 'ly_junshen',
					connect: true,
					character: {
						ly_junshenbao_nineDragonSon_qiuniu: ['male', 'shen', 4, ['ly_junshenbao_nineDragonSon_longyi', 'ly_junshenbao_nineDragonSon_qiuniu_yuyin', 'ly_junshenbao_nineDragonSon_qiuniu_raoliang', 'ly_junshenbao_nineDragonSon_damage'], []],
						ly_junshenbao_nineDragonSon_yazi: ['male', 'shen', 4, ['ly_junshenbao_nineDragonSon_longyi', 'ly_junshenbao_nineDragonSon_yazi_bibao'], []],
						ly_junshenbao_nineDragonSon_chaofeng: ['male', 'shen', 4, ['ly_junshenbao_nineDragonSon_longyi', 'ly_junshenbao_nineDragonSon_chaofeng_xianwang', 'ly_junshenbao_nineDragonSon_damage'], []],
						ly_junshenbao_nineDragonSon_suanni: ['male', 'shen', 4, ['ly_junshenbao_nineDragonSon_longyi', 'ly_junshenbao_nineDragonSon_suanni_zuofeng', 'ly_junshenbao_nineDragonSon_damage'], []],
						ly_junshenbao_nineDragonSon_baxia: ['male', 'shen', 4, ['ly_junshenbao_nineDragonSon_longyi', 'ly_junshenbao_nineDragonSon_baxia_difu', 'ly_junshenbao_nineDragonSon_damage'], []],
						ly_junshenbao_nineDragonSon_bian: ['male', 'shen', 4, ['ly_junshenbao_nineDragonSon_longyi', 'ly_junshenbao_nineDragonSon_bian_weisong', 'ly_junshenbao_nineDragonSon_bian_zhangyi', 'ly_junshenbao_nineDragonSon_damage'], []],
						ly_junshenbao_nineDragonSon_fuxi: ['male', 'shen', 4, ['ly_junshenbao_nineDragonSon_longyi', 'ly_junshenbao_nineDragonSon_fuxi_mingbei', 'ly_junshenbao_nineDragonSon_damage'], []],
						ly_junshenbao_nineDragonSon_pulao: ['male', 'shen', 4, ['ly_junshenbao_nineDragonSon_longyi', 'ly_junshenbao_nineDragonSon_pulao_mingxiao', 'ly_junshenbao_nineDragonSon_damage'], []],
						ly_junshenbao_nineDragonSon_chiwen: ['male', 'shen', 4, ['ly_junshenbao_nineDragonSon_longyi', 'ly_junshenbao_nineDragonSon_chiwen_tunshi', 'ly_junshenbao_nineDragonSon_damage'], []],
						ly_junshenbao_zhenSanGuo_huangyueying: ['female', 'shu', 4, ['ly_junshenbao_zhenSanGuo_huangyueying_lingxin', 'ly_junshenbao_zhenSanGuo_huangyueying_jiqiao', 'ly_junshenbao_zhenSanGuo_huangyueying_muniu'], []],
						ly_junshenbao_zhenSanGuo_guojia: ['male', 'wei', 4, ['ly_junshenbao_zhenSanGuo_guojia_shisheng', 'ly_junshenbao_zhenSanGuo_guojia_shibai'], []],
						ly_junshenbao_zhenSanGuo_xiaoqiao: ['female', 'wu', 4, ['ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan', 'ly_junshenbao_zhenSanGuo_xiaoqiao_qunwu', 'ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang'], []],
						ly_junshenbao_zhenSanGuo_huatuo: ['male', 'qun', 4, ['ly_junshenbao_zhenSanGuo_huatuo_miaoshou', 'ly_junshenbao_zhenSanGuo_huatuo_zhenmai', 'ly_junshenbao_zhenSanGuo_huatuo_huichun'], []],
						ly_junshenbao_zhenSanGuo_zhaoyun: ['male', 'shu', 5, ['ly_junshenbao_zhenSanGuo_zhaoyun_wushen', 'ly_junshenbao_zhenSanGuo_zhaoyun_longdan', 'ly_junshenbao_zhenSanGuo_zhaoyun_danji'], []],
						ly_junshenbao_zhenSanGuo_lejin: ['male', 'wei', 5, ['ly_junshenbao_zhenSanGuo_lejin_ziyi', 'ly_junshenbao_zhenSanGuo_lejin_cuijian', 'ly_junshenbao_zhenSanGuo_lejin_xiaoyong'], []],
						ly_junshenbao_zhenSanGuo_lvbu: ['male', 'qun', 6, ['ly_junshenbao_zhenSanGuo_lvbu_feijiang', 'ly_junshenbao_zhenSanGuo_lvbu_sheji', 'ly_junshenbao_zhenSanGuo_lvbu_juelu'], []],
						ly_junshenbao_zhenSanGuo_ganning: ['male', 'wu', 5, ['ly_junshenbao_zhenSanGuo_ganning_jiexi', 'ly_junshenbao_zhenSanGuo_ganning_daoyue', 'ly_junshenbao_zhenSanGuo_ganning_youxia'], []],
						ly_junshenbao_zhenSanGuo_simabada: ['male', 'wei', 4, ['ly_junshenbao_zhenSanGuo_simabada_bada'], []],
						ly_junshenbao_zhenSanGuo_dongzhuo: ['male', 'qun', 5, ['ly_junshenbao_zhenSanGuo_dongzhuo_jiuchi', 'ly_junshenbao_zhenSanGuo_dongzhuo_lingnu', 'ly_junshenbao_zhenSanGuo_dongzhuo_qiaoji', 'ly_junshenbao_zhenSanGuo_dongzhuo_baolue'], ['zhu']],
						ly_junshenbao_zhenSanGuo_huangwudie: ['female', 'shu', 4, ['ly_junshenbao_zhenSanGuo_huangwudie_qianggong', 'ly_junshenbao_zhenSanGuo_huangwudie_shenji'], []],
						ly_junshenbao_zhenSanGuo_sunshangxiang: ['female', 'wu', 4, ['ly_junshenbao_zhenSanGuo_sunshangxiang_yinmeng', 'ly_junshenbao_zhenSanGuo_sunshangxiang_juelie', 'ly_junshenbao_zhenSanGuo_sunshangxiang_wuji'], []],
						ly_junshenbao_zhenSanGuo_xuchu: ['male', 'wei', 5, ['ly_junshenbao_zhenSanGuo_xuchu_kuangquan', 'ly_junshenbao_zhenSanGuo_xuchu_aozhan'], []],
						ly_junshenbao_zhenSanGuo_zhangliao: ['male', 'wei', 5, ['ly_junshenbao_zhenSanGuo_zhangliao_wuwei', 'ly_junshenbao_zhenSanGuo_zhangliao_tuxi'], []],
						ly_junshenbao_zhenSanGuo_daqiao: ['female', 'wu', 4, ['ly_junshenbao_zhenSanGuo_daqiao_tongque', 'ly_junshenbao_zhenSanGuo_daqiao_guose', 'ly_junshenbao_zhenSanGuo_daqiao_liuli'], []],
						ly_junshenbao_zhenSanGuo_baosanniang: ['female', 'shu', 4, ['ly_junshenbao_zhenSanGuo_baosanniang_chengshi', 'ly_junshenbao_zhenSanGuo_baosanniang_yuman'], []],
						ly_junshenbao_zhenSanGuo_zhangji: ['male', 'qun', 4, ['ly_junshenbao_zhenSanGuo_zhangji_yiji', 'ly_junshenbao_zhenSanGuo_zhangji_zabing'], []],
						ly_junshenbao_zhenSanGuo_machao: ['male', 'shu', 5, ['ly_junshenbao_zhenSanGuo_machao_changqu', 'ly_junshenbao_zhenSanGuo_machao_jufeng', 'ly_junshenbao_zhenSanGuo_machao_yingyan'], []],
						ly_junshenbao_zhenSanGuo_shengsi: ['male', 'qun', 4, ['ly_junshenbao_zhenSanGuo_shengsi_xianti', 'ly_junshenbao_zhenSanGuo_shengsi_shengsi'], []],
						ly_junshenbao_zhenSanGuo_huangyuehua: ['female', 'shu', 4, ['ly_junshenbao_zhenSanGuo_huangyuehua_jingnu', 'ly_junshenbao_zhenSanGuo_huangyuehua_liuma'], []],
						ly_junshenbao_zhenSanGuo_zhangshiping: ['male', 'shu', 4, ['ly_junshenbao_zhenSanGuo_zhangshiping_shangdao', 'ly_junshenbao_zhenSanGuo_zhangshiping_ziqi'], []],
						ly_junshenbao_sociatyBeast_qiuniu: ['male', 'ly_junshenbao_sociatyBeast', 4, ['ly_junshenbao_sociatyBeast_qiuniu_longxuan', 'ly_junshenbao_sociatyBeast_qiuniu_lige', 'ly_junshenbao_sociatyBeast_qiuniu_heming', 'ly_junshenbao_sociatyBeast_qiuniu_jilv'], []],
						ly_junshenbao_sociatyBeast_yazi: ['male', 'ly_junshenbao_sociatyBeast', 4, ['ly_junshenbao_sociatyBeast_yazi_longlie', 'ly_junshenbao_sociatyBeast_yazi_chaiyue', 'ly_junshenbao_sociatyBeast_yazi_langri', 'ly_junshenbao_sociatyBeast_yazi_bibao'], []],
						ly_junshenbao_sociatyBeast_suanni: ['male', 'ly_junshenbao_sociatyBeast', 4, ['ly_junshenbao_sociatyBeast_suanni_longzhen', 'ly_junshenbao_sociatyBeast_suanni_ruiyan', 'ly_junshenbao_sociatyBeast_suanni_raoleng', 'ly_junshenbao_sociatyBeast_suanni_xiangjin'], []],
						ly_junshenbao_sociatyBeast_pulao: ['male', 'ly_junshenbao_sociatyBeast', 4, ['ly_junshenbao_sociatyBeast_pulao_longhou', 'ly_junshenbao_sociatyBeast_pulao_qiejing', 'ly_junshenbao_sociatyBeast_pulao_mingyin', 'ly_junshenbao_sociatyBeast_pulao_duyuan'], []],
						ly_junshenbao_sociatyBeast_fuxi: ['male', 'ly_junshenbao_sociatyBeast', 4, ['ly_junshenbao_sociatyBeast_fuxi_longzhi', 'ly_junshenbao_sociatyBeast_fuxi_lingjie', 'ly_junshenbao_sociatyBeast_fuxi_feizhang', 'ly_junshenbao_sociatyBeast_fuxi_bowen'], []],
						ly_junshenbao_sociatyBeast_chiwen: ['male', 'ly_junshenbao_sociatyBeast', 4, ['ly_junshenbao_sociatyBeast_chiwen_longao', 'ly_junshenbao_sociatyBeast_chiwen_quyan', 'ly_junshenbao_sociatyBeast_chiwen_yuhuo', 'ly_junshenbao_sociatyBeast_chiwen_fubing'], []],
						ly_junshenbao_sociatyBeast_chaofeng: ['male', 'ly_junshenbao_sociatyBeast', 4, ['ly_junshenbao_sociatyBeast_chaofeng_longlin', 'ly_junshenbao_sociatyBeast_chaofeng_zhijiao', 'ly_junshenbao_sociatyBeast_chaofeng_zhixie', 'ly_junshenbao_sociatyBeast_chaofeng_haoxian'], []],
						ly_junshenbao_sociatyBeast_baxia: ['male', 'ly_junshenbao_sociatyBeast', 4, ['ly_junshenbao_sociatyBeast_baxia_longxuan', 'ly_junshenbao_sociatyBeast_baxia_lingxi', 'ly_junshenbao_sociatyBeast_baxia_shuliu', 'ly_junshenbao_sociatyBeast_baxia_jienu'], []],
						ly_junshenbao_sociatyBeast_bian: ['male', 'ly_junshenbao_sociatyBeast', 4, ['ly_junshenbao_sociatyBeast_bian_longshi', 'ly_junshenbao_sociatyBeast_bian_songyan', 'ly_junshenbao_sociatyBeast_bian_suwei', 'ly_junshenbao_sociatyBeast_bian_hualao'], []],
						ly_junShenChallenge_shenjiang_shenshi: ['female', 'ly_junShenChallenge', 4, ['ly_junShenChallenge_shenjiang_shenshi_fengshen'], []],
						ly_junShenChallenge_lvbu: ['male', 'ly_junShenChallenge', 6, ['ly_junShenChallenge_shenjiang', 'ly_junShenChallenge_lvbu_wuwei', 'ly_junShenChallenge_lvbu_wumou', 'ly_junShenChallenge_lvbu_shennu', 'ly_junShenChallenge_lvbu_xiuluo'], ['boss', 'bossallowed']],
						ly_junShenChallenge_zhouyu: ['male', 'ly_junShenChallenge', 6, ['ly_junShenChallenge_shenjiang', 'ly_junShenChallenge_zhouyu_qinxin', 'ly_junShenChallenge_zhouyu_qinjian', 'ly_junShenChallenge_zhouyu_hongyan', 'ly_junShenChallenge_zhouyu_zhenhun'], ['boss', 'bossallowed']],
						ly_junShenChallenge_luxun: ['male', 'ly_junShenChallenge', 6, ['ly_junShenChallenge_shenjiang', 'ly_junShenChallenge_luxun_junmou', 'ly_junShenChallenge_luxun_cuike', 'ly_junShenChallenge_luxun_zhanyan'], ['boss', 'bossallowed']],
						ly_yellowTurban_huangJinBing: ['male', 'qun', 5, ['ly_yellowTurban_baoLuan'], []],
						ly_yellowTurban_hanJun: ['male', 'qun', 5, ['ly_yellowTurban_hanJun_shuWei'], []],
						ly_yellowTurban_liangZhouJun: ['male', 'qun', 5, ['ly_yellowTurban_liangZhouJun_liangJi'], []],
						ly_yellowTurban_manZuYongShi: ['male', 'qun', 5, ['ly_yellowTurban_manZuYongShi_manYong'], []],
						ly_yellowTurban_xiongNu: ['male', 'qun', 5, ['ly_yellowTurban_xiongNu_manLue'], []],
						ly_yellowTurban_bingYi: ['male', 'qun', 4, ['ly_yellowTurban_bingYi_qinRan'], []],
						ly_yellowTurban_taoSheng: ['male', 'qun', 5, ['ly_yellowTurban_taoSheng_nuYi'], []],
						ly_yellowTurban_baoXin: ['male', 'qun', 5, ['ly_yellowTurban_baoXin_yiMou'], []],
						ly_yellowTurban_zhangJu: ['male', 'qun', 5, ['ly_yellowTurban_zhangJu_yeLue'], []],
						ly_yellowTurban_zhangChun: ['male', 'qun', 5, ['ly_yellowTurban_zhangChun_miTian'], []],
						ly_yellowTurban_chengYuanZhi: ['male', 'qun', 5, ['ly_yellowTurban_chengYuanZhi_shouZhi'], []],
						ly_yellowTurban_duYouOne: ['male', 'qun', 4, ['ly_yellowTurban_duYouⅠ_baoLi'], []],
						ly_yellowTurban_bianzhang: ['male', 'qun', 5, ['ly_yellowTurban_bianzhang_baHu'], []],
						ly_yellowTurban_manZuTouLing: ['male', 'qun', 5, ['ly_yellowTurban_manZuTouLing_rongYong'], []],
						ly_yellowTurban_yudu: ['male', 'qun', 5, ['ly_yellowTurban_baoLuan', 'ly_yellowTurban_yudu_huoLuan'], []],
						ly_junshenbao_guohuai: ['male', 'wei', 5, ['ly_junshenbao_guohuai_jingce'], []],
						ly_junshenbao_jiaxu: ['male', 'qun', 4, ['ly_junshenbao_jiaxu_wansha', 'ly_junshenbao_jiaxu_luanwu', 'ly_junshenbao_jiaxu_weimu'], []],
						ly_junshenbao_miheng: ['male', 'qun', 4, ['ly_junshenbao_miheng_kuangcai', 'ly_junshenbao_miheng_shejian'], []],
						ly_junshenbao_liufeng: ['male', 'shu', 5, ['ly_junshenbao_liufeng_xiansi'], []],
						ly_junshenbao_simayi: ['male', 'wei', 4, ['ly_junshenbao_simayi_fankui', 'ly_junshenbao_simayi_guicai'], []],
						ly_junshenbao_liru: ['male', 'qun', 4, ['ly_junshenbao_liru_juece', 'ly_junshenbao_liru_mieji', 'ly_junshenbao_liru_fencheng'], []],
						ly_junshenbao_sunjian: ['male', 'wu', 5, ['ly_junshenbao_sunjian_yinghun'], []],
						ly_junshenbao_diaochan: ['female', 'qun', 4, ['ly_junshenbao_diaochan_lijian', 'ly_junshenbao_diaochan_lihun', 'ly_junshenbao_diaochan_biyue'], []],
						ly_junshenbao_guanyinping: ['female', 'shu', 4, ['ly_junshenbao_guanyinping_xueji', 'ly_junshenbao_guanyinping_huxiao', 'ly_junshenbao_guanyinping_wuji'], []],
						ly_junshenbao_huangquan: ['male', 'shu', 4, ['ly_junshenbao_huangquan_dianhu', 'ly_junshenbao_huangquan_zhongjian'], []],
						ly_junshenbao_sunquan: ['male', 'wu', 5, ['ly_junshenbao_sunquan_zhiheng', 'ly_junshenbao_sunquan_jiuyuan'], ['zhu']],
						ly_junshenbao_mateng: ['male', 'qun', 5, ['ly_junshenbao_mateng_xiongyi', 'ly_junshenbao_mateng_mashu', 'ly_junshenbao_mateng_xiongqi'], ['zhu']],
						ly_junshenbao_chenlin: ['male', 'wei', 4, ['ly_junshenbao_chenlin_songci', 'ly_junshenbao_chenlin_xiwen', 'ly_junshenbao_chenlin_bifa'], []],
						ly_junshenbao_wolong: ['male', 'shu', 4, ['ly_junshenbao_wolong_huoji', 'ly_junshenbao_wolong_bazhen', 'ly_junshenbao_wolong_kanpo', 'ly_junshenbao_wolong_jixing'], []],
						ly_junshenbao_tianfeng: ['male', 'qun', 4, ['ly_junshenbao_tianfeng_sijian', 'ly_junshenbao_tianfeng_suishi'], []],
						ly_junshenbao_sunhao: ['male', 'wu', 6, ['ly_junshenbao_sunhao_canshi', 'ly_junshenbao_sunhao_canlu', 'ly_junshenbao_sunhao_chouhai', 'ly_junshenbao_sunhao_guiming'], ['zhu']],
						ly_junshenbao_luxun: ['male', 'wu', 4, ['ly_junshenbao_luxun_qianxun', 'ly_junshenbao_luxun_lianying'], []],
						ly_junshenbao_yujin: ['male', 'wei', 5, ['ly_junshenbao_yujin_zhenjun', 'ly_junshenbao_yujin_yizhong'], []],
						ly_junshenbao_litong: ['male', 'wei', 5, ['ly_junshenbao_litong_cuifeng'], []],
						ly_junshenbao_zhangfei: ['male', 'shu', 5, ['ly_junshenbao_zhangfei_paoxiao', 'ly_junshenbao_zhangfei_tishen_use'], []],
						ly_junshenbao_zhouyu: ['male', 'wu', 4, ['ly_junshenbao_zhouyu_yingzi', 'ly_junshenbao_zhouyu_fanjian'], []],
						ly_junshenbao_sunce: ['male', 'wu', 5, ['ly_junshenbao_sunce_jiang', 'ly_junshenbao_sunce_hunzi', 'ly_junshenbao_sunce_zhiba'], ['zhu']],
						ly_junshenbao_zhurong: ['female', 'shu', 5, ['ly_junshenbao_zhurong_juxiang', 'ly_junshenbao_zhurong_lieren'], []],
						ly_junshenbao_wangji: ['male', 'wei', 4, ['ly_junshenbao_wangji_qizhi', 'ly_junshenbao_wangji_jinqu'], []],
						ly_junshenbao_spcaoren: ['male', 'wei', 5, ['ly_junshenbao_spcaoren_weikui', 'ly_junshenbao_spcaoren_lizhan'], []],
						ly_junshenbao_huanggai: ['male', 'wu', 5, ['ly_junshenbao_huanggai_kurou', 'ly_junshenbao_huanggai_zhaxiang'], []],
						ly_junshenbao_quyi: ['male', 'qun', 5, ['ly_junshenbao_quyi_fuji', 'ly_junshenbao_quyi_jiaozi'], []],
						ly_junshenbao_huangzhong: ['male', 'shu', 5, ['ly_junshenbao_huangzhong_liegong'], []],
						ly_junshenbao_zhangliao: ['male', 'wei', 5, ['ly_junshenbao_zhangliao_tuxi'], []],
						ly_junshenbao_sunshangxiang: ['female', 'wu', 4, ['ly_junshenbao_sunshangxiang_jieyin', 'ly_junshenbao_sunshangxiang_xiaoji'], []],
						ly_junshenbao_spsunshangxiang: ['female', 'shu', 4, ['ly_junshenbao_spsunshangxiang_liangzhu', 'ly_junshenbao_spsunshangxiang_xiaoji'], []],
						ly_junshenbao_liuxie: ['male', 'qun', 4, ['ly_junshenbao_liuxie_tianming', 'ly_junshenbao_liuxie_mizhao', 'ly_junshenbao_liuxie_xiedi'], ['zhu']],
						ly_junshenbao_zhangrang: ['male', 'qun', 4, ['ly_junshenbao_zhangrang_taoluan'], []],
						ly_junshenbao_zhugedan: ['male', 'wei', 5, ['ly_junshenbao_zhugedan_zhanxun', 'ly_junshenbao_zhugedan_jupan'], []],
						ly_junshenbao_maliang: ['male', 'shu', 4, ['ly_junshenbao_maliang_zishu', 'ly_junshenbao_maliang_shouyuan'], []],
						ly_junshenbao_lvmeng: ['male', 'wu', 5, ['ly_junshenbao_lvmeng_taohui', 'ly_junshenbao_lvmeng_qinxue'], []],
						ly_junshenbao_weiyan: ['male', 'shu', 5, ['ly_junshenbao_weiyan_aogu', 'ly_junshenbao_weiyan_yongmou'], []],
						ly_junshenbao_guopang: ['male', 'qun', 4, ['ly_junshenbao_guopang_jigong', 'ly_junshenbao_guopang_chanxian'], []],
						ly_junshenbao_xiahouyuan: ['male', 'wei', 5, ['ly_junshenbao_xiahouyuan_suji', 'ly_junshenbao_xiahouyuan_suzi'], []],
						ly_junshenbao_lusu: ['male', 'wu', 4, ['ly_junshenbao_lusu_sancai', 'ly_junshenbao_lusu_lianmeng'], []],
						ly_junshenbao_zhonghui: ['male', 'wei', 5, ['ly_junshenbao_zhonghui_quanyi', 'ly_junshenbao_zhonghui_fayi', 'ly_junshenbao_zhonghui_moubing'], []],
						ly_junshenbao_zhangjiao: ['male', 'qun', 4, ['ly_junshenbao_zhangjiao_jilei', 'ly_junshenbao_zhangjiao_guilue', 'ly_junshenbao_zhangjiao_tianbing'], ['zhu']],
						ly_junshenbao_lingtong: ['male', 'wu', 5, ['ly_junshenbao_lingtong_xuanzhan_false'], []],
						ly_junshenbao_zhenji: ['female', 'wei', 4, ['ly_junshenbao_zhenji_pianhong', 'ly_junshenbao_zhenji_wenzhao'], []],
						ly_junshenbao_zhangxiu: ['male', 'qun', 5, ['ly_junshenbao_zhangxiu_congjian', 'ly_junshenbao_zhangxiu_baiming'], []],
						ly_junshenbao_zhoutai: ['male', 'wu', 5, ['ly_junshenbao_zhoutai_buqu', 'ly_junshenbao_zhoutai_youzhu'], []],
						ly_junshenbao_jiangfei: ['male', 'shu', 4, ['ly_junshenbao_jiangfei_yanxi', 'ly_junshenbao_jiangfei_shoucheng'], []],
						ly_junshenbao_spjiaxu: ['male', 'wei', 4, ['ly_junshenbao_spjiaxu_yongdi', 'ly_junshenbao_spjiaxu_mijian', 'ly_junshenbao_spjiaxu_qianlv'], []],
						ly_junshenbao_zhangren: ['male', 'qun', 5, ['ly_junshenbao_zhangren_chuanxin', 'ly_junshenbao_zhangren_lingfeng'], []],
						ly_junshenbao_jiangwei: ['male', 'shu', 5, ['ly_junshenbao_jiangwei_yaozhan', 'ly_junshenbao_jiangwei_chengzhi'], []],
						ly_junshenbao_dingfeng: ['male', 'wu', 5, ['ly_junshenbao_dingfeng_lenfeng', 'ly_junshenbao_dingfeng_jijun'], []],
						ly_junshenbao_caoren: ['male', 'wei', 5, ['ly_junshenbao_caoren_zhenshou', 'ly_junshenbao_caoren_kuiwei'], []],
						ly_junshenbao_zuoci: ['male', 'qun', 4, ['ly_junshenbao_zuoci_xianmen', 'ly_junshenbao_zuoci_lunhui'], []],
						ly_junshenbao_erzhang: ['male', 'wu', 4, ['ly_junshenbao_erzhang_fengjian', 'ly_junshenbao_erzhang_xiuzheng'], []],
						ly_junshenbao_zhoucang: ['male', 'shu', 5, ['ly_junshenbao_zhoucang_zhongyong'], []],
						ly_junshenbao_gongsunyuan: ['male', 'qun', 5, ['ly_junshenbao_gongsunyuan_huaiyi'], []],
						ly_junshenbao_caozhi: ['male', 'wei', 4, ['ly_junshenbao_caozhi_luomei', 'ly_junshenbao_caozhi_qijue'], []],
						ly_junshenbao_fazheng: ['male', 'shu', 4, ['ly_junshenbao_fazheng_enchou', 'ly_junshenbao_fazheng_fuyi'], []],
						ly_junshenbao_dongyun: ['male', 'shu', 4, ['ly_junshenbao_dongyun_fubi', 'ly_junshenbao_dongyun_kuangzheng'], []],
						ly_junshenbao_luji: ['male', 'wu', 4, ['ly_junshenbao_luji_huaili', 'ly_junshenbao_luji_shuxuan'], []],
					},
					characterTitle: {
						ly_junshenbao_zhenSanGuo_huangyueying: '<span style="color: red">归隐杰女</span>',
						ly_junshenbao_zhenSanGuo_guojia: '<span style="color: blue">早终先知</span>',
						ly_junshenbao_zhenSanGuo_xiaoqiao: '<span style="color: #77FF00">矫情之花</span>',
						ly_junshenbao_zhenSanGuo_dongzhuo: '<span style="color: #FDFFFF">乱世魔王</span>',
						ly_junshenbao_zhenSanGuo_zhangji: '<span style="color: #FDFFFF">医圣</span>',
						ly_junshenbao_zhenSanGuo_huatuo: '<span style="color: #FDFFFF">妙手神医</span>',
						ly_junshenbao_zhenSanGuo_zhaoyun: '<span style="color: red">少年将军</span>',
						ly_junshenbao_zhenSanGuo_lejin: '<span style="color: blue">骁勇果敢</span>',
						ly_junshenbao_zhenSanGuo_lvbu: '<span style="color: #FDFFFF">武的化身</span>',
						ly_junshenbao_zhenSanGuo_shengsi: '<span style="color: #FDFFFF">南北双星</span>',
						ly_junshenbao_zhenSanGuo_ganning: '<span style="color: #77FF00">锦帆游侠</span>',
						ly_junshenbao_zhenSanGuo_simabada: '<span style="color: blue">河内世泽</span>',
						ly_junshenbao_zhenSanGuo_huangwudie: '<span style="color: red">青出于蓝</span>',
						ly_junshenbao_zhenSanGuo_sunshangxiang: '<span style="color: #77FF00">弓腰姬</span>',
						ly_junshenbao_zhenSanGuo_xuchu: '<span style="color: blue">虎痴</span>',
						ly_junshenbao_zhenSanGuo_zhangliao: '<span style="color: blue">威震逍遥</span>',
						ly_junshenbao_zhenSanGuo_daqiao: '<span style="color: #77FF00">矜持之花</span>',
						ly_junshenbao_zhenSanGuo_baosanniang: '<span style="color: red">镇守南中</span>',
						ly_junshenbao_zhenSanGuo_machao: '<span style="color: red">一骑当先</span>',
						ly_junshenbao_zhenSanGuo_huangyuehua: '<span style="color: red">月英之姊</span>',
						ly_junshenbao_zhenSanGuo_zhangshiping: '<span style="color: red">中山大商</span>',
					},
					skill: {
						ly_junshenbao_nineDragonSon_damage: {
							trigger: { player: 'damageBegin' },
							priority: Infinity,
							forced: true,
							popup: false,
							content() {
								game.playXu('ly_junshenbao_nineDragonSon_damage');
							},
						},
						ly_junshenbao_nineDragonSon_chiwen_tunshi: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								global: 'dieBefore',
							},
							filter(event, player) {
								return event.player != player;
							},
							content() {
								var target = trigger.player;
								player.line(target, ['fire', 'water', 'thunder', 'green'].randomGet());
								for (var i = 0; i < target.skills.length; i++) {
									player.addSkill(target.skills[i]);
								}
								game.log(player, '<span style=\"color: red\">获得了</span>', target, '所有技能');
							},
							ai: {
								threaten: 2.1,
							},
						},
						ly_junshenbao_nineDragonSon_fuxi_mingbei: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								global: 'dieEnd',
							},
							content() {
								'step 0';
								event.targets = game
									.filterPlayer(function (current) {
										return current != player;
									})
									.sortBySeat();
								('step 1');
								if (event.targets.length) {
									var target = event.targets.randomGet();
									player.line(target, ['fire', 'water', 'thunder', 'green'].randomGet());
									for (var i = 0; i < target.skills.length; i++) {
										player.addSkill(target.skills[i]);
									}
									game.log(player, '<span style=\"color: red\">获得了</span>', target, '所有技能');
								}
							},
							ai: {
								threaten: 2.1,
							},
						},
						ly_junshenbao_nineDragonSon_bian_zhangyi: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								player
									.chooseTarget('<span style=\"color: yellow\">仗义</span>:是否弃置任意名<span style=\"color: red\">角色</span>判定区内1张牌', [1, Infinity], function (card, player, target) {
										if (player != game.me) return player.getFriends().includes(target) && target.countCards('j') > 0;
										return player != target && target.countCards('j') > 0;
									})
									.set('ai', function (target) {
										if (player.getFriends().includes(target)) return 3;
										return false;
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
									event.nums = result.targets.length;
								}
								('step 2');
								if (targets && targets.length) {
									for (var i = 0; i < targets.length; i++) {
										player.line(targets[i], ['fire', 'water', 'thunder', 'green'].randomGet());
										player.discardPlayerCard('j', true, targets[i]);
									}
								}
							},
						},
						ly_junshenbao_nineDragonSon_bian_weisong: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								global: 'phaseBegin',
							},
							check(event, player) {
								if (player.getFriends().includes(event.player)) return false;
								return get.attitude(player, event.player) <= 0;
							},
							filter(event, player) {
								return event.player != player;
							},
							content() {
								'step 0';
								trigger.player.judge(function (card) {
									if (card.suit == 'spade') return -2;
									return -1;
								});
								('step 1');
								if (result.suit) {
									if (result.suit == 'spade') trigger.player.skip('phaseUse');
									else trigger.player.addTempSkill('ly_junshenbao_nineDragonSon_bian_weisong_skip', { player: 'phaseEnd' });
								}
							},
							subSkill: {
								skip: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseDrawBegin',
									},
									content() {
										trigger.num--;
									},
								},
							},
							ai: {
								threaten: 2.1,
							},
						},
						ly_junshenbao_nineDragonSon_baxia_difu: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var num = game.countPlayer(function (current) {
									return get.distance(player, current, 'attack') <= 1;
								});
								player
									.chooseTarget('<span style=\"color: yellow\">地缚</span>:是否令<span style=\"color: gold\">攻击距离</span>内至多' + get.cnNumber(num) + '名<span style=\"color: red\">其他角色</span>非锁定技失效', [1, num], function (card, player, target) {
										if (player != game.me) return player.getEnemies().includes(target) && !target.hasSkill('fengyin') && get.distance(player, target, 'attack') <= 1;
										return player != target && !target.hasSkill('fengyin') && get.distance(player, target, 'attack') <= 1;
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) return 3;
										return false;
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
									event.nums = result.targets.length;
								}
								('step 2');
								if (targets && targets.length) {
									for (var i = 0; i < targets.length; i++) {
										player.line(targets[i], ['fire', 'water', 'thunder', 'green'].randomGet());
										targets[i].addTempSkill('fengyin', { player: 'phaseUseBegin' });
									}
								}
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_nineDragonSon_suanni_zuofeng: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'recoverEnd',
							},
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget('<span style=\"color: yellow\">坐奉</span>:是否令至多3名<span style=\"color: red\">其他角色</span>依次回复1点体力', [1, 3], function (card, player, target) {
										if (player != game.me) return player.getFriends().includes(target) && target.isDamaged() & (target != player);
										return player != target && target.isDamaged();
									})
									.set('ai', function (target) {
										if (player.getFriends().includes(target)) return 3;
										return false;
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
									event.nums = result.targets.length;
								}
								('step 2');
								if (targets && targets.length) {
									for (var i = 0; i < targets.length; i++) {
										player.line(targets[i], ['fire', 'water', 'thunder', 'green'].randomGet());
										targets[i].recover();
									}
								}
							},
							ai: {
								threaten: 2,
								expose: 0.2,
							},
						},
						ly_junshenbao_nineDragonSon_pulao_mingxiao: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								global: 'loseEnd',
							},
							filter(event, player) {
								if (player.countCards('h') >= game.countPlayer()) return false;
								if (player.storage.ly_junshenbao_nineDragonSon_pulao_mingxiao_target && player.storage.ly_junshenbao_nineDragonSon_pulao_mingxiao_target == event.player) return false;
								return event.player != player;
							},
							content() {
								player.draw();
							},
							group: ['ly_junshenbao_nineDragonSon_pulao_mingxiao_judgeone', 'ly_junshenbao_nineDragonSon_pulao_mingxiao_judgetwo', 'ly_junshenbao_nineDragonSon_pulao_mingxiao_start'],
							subSkill: {
								judgeone: {
									popup: false,
									forced: true,
									trigger: {
										global: 'phaseUseBegin',
									},
									content() {
										player.storage.ly_junshenbao_nineDragonSon_pulao_mingxiao_target = trigger.player;
									},
								},
								judgetwo: {
									popup: false,
									forced: true,
									trigger: {
										global: 'phaseUseEnd',
									},
									content() {
										player.storage.ly_junshenbao_nineDragonSon_pulao_mingxiao_target = player;
									},
								},
								start: {
									popup: false,
									forced: true,
									trigger: {
										global: 'gameStart',
									},
									content() {
										player.storage.ly_junshenbao_nineDragonSon_pulao_mingxiao_target = player;
									},
								},
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_nineDragonSon_chaofeng_xianwang: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								var num = game.countPlayer(function (current) {
									return get.distance(player, current, 'attack') <= 1;
								});
								player
									.chooseTarget('<span style=\"color: yellow\">险望</span>:是否令<span style=\"color: gold\">攻击距离</span>内至多' + get.cnNumber(num) + '名<span style=\"color: red\">其他角色</span>依次弃置1张牌', [1, num], function (card, player, target) {
										if (player != game.me) return player.getEnemies().includes(target) && target.countCards('he') > 0 && get.distance(player, target, 'attack') <= 1;
										return player != target && target.countCards('he') > 0 && get.distance(player, target, 'attack') <= 1;
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) return 3;
										return false;
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
									event.nums = result.targets.length;
								}
								('step 2');
								if (targets && targets.length) {
									for (var i = 0; i < targets.length; i++) {
										player.line(targets[i], ['fire', 'water', 'thunder', 'green'].randomGet());
										targets[i].chooseToDiscard('he', true);
									}
								}
							},
							ai: {
								threaten: 2,
								expose: 0.1,
							},
						},
						ly_junshenbao_nineDragonSon_yazi_bibao: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							prompt(event, player) {
								return '<span style=\"color: yellow\">必报</span>:是否视为对目标<span style="color: red">使用1张杀</span>(对"' + get.translation(event.source) + '")';
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0;
							},
							filter(event, player) {
								return event.source && event.source != player && event.num > 0;
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								var target = trigger.source;
								player.line(target, ['fire', 'water', 'thunder', 'green'].randomGet());
								player.addTempSkill('unequip', { player: 'shaAfter' });
								player.useCard({ name: 'sha' }, trigger.source, 'ly_junshenbao_nineDragonSon_yazi_bibao', false);
								player.storage.ly_junshenbao_nineDragonSon_yazi_bibao = true;
								('step 2');
								if (player.storage.ly_junshenbao_nineDragonSon_yazi_bibao) {
									player.storage.ly_junshenbao_nineDragonSon_yazi_bibao = false;
								} else {
									player.draw();
									player.gainMaxHp();
								}
								('step 3');
								event.num--;
								if (event.num > 0) event.goto(1);
							},
							group: 'ly_junshenbao_nineDragonSon_yazi_bibao_update',
							subSkill: {
								update: {
									trigger: { source: 'damageAfter' },
									forced: true,
									popup: false,
									filter(event, player) {
										return event.parent.skill == 'ly_junshenbao_nineDragonSon_yazi_bibao';
									},
									content() {
										player.storage.ly_junshenbao_nineDragonSon_yazi_bibao = false;
									},
								},
							},
							ai: {
								threaten: 2,
								expose: 0.3,
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
						ly_junshenbao_nineDragonSon_qiuniu_raoliang: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							round: 1,
							trigger: {
								global: 'turnOverAfter',
							},
							filter(event, player) {
								return event.player.isTurnedOver();
							},
							content() {
								'step 0';
								event.players = trigger.player;
								player
									.chooseTarget('<span style=\"color: yellow\">绕梁</span>:是否令1名除' + get.translation(trigger.player) + '外的<span style=\"color: red\">其他角色</span>将武将牌<span style=\"color: red\">翻面</span>', function (card, player, target) {
										return target != event.players && target != player;
									})
									.set('ai', function (target) {
										if (player.getFriends().includes(target)) {
											if (target.classList.contains('turnedover')) return 100;
											return false;
										}
										if (player.getEnemies().includes(target)) {
											if (target.classList.contains('turnedover')) return false;
											if (target.hasSkillTag('noturn')) return false;
											return 2;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, ['fire', 'water', 'thunder', 'green'].randomGet());
									target.turnOver();
								}
							},
						},
						ly_junshenbao_nineDragonSon_qiuniu_yuyin: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget('<span style=\"color: yellow\">余音</span>:是否令1名<span style=\"color: red\">其他角色</span>将武将牌翻至<span style=\"color: red\">背面</span>', function (card, player, target) {
										if (game.me != player) return player.getEnemies().includes(target) && !target.isTurnedOver();
										return target != player && !target.isTurnedOver();
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) return 1;
										return false;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, ['fire', 'water', 'thunder', 'green'].randomGet());
									target.turnOver(true);
								}
							},
							ai: {
								expose: 0.2,
								threaten: 2,
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (target.hp <= 1) return;
											if (!target.hasFriend()) return;
											var hastarget = false;
											var turnfriend = false;
											var players = game.filterPlayer();
											for (var i = 0; i < players.length; i++) {
												if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
													hastarget = true;
												}
												if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
													hastarget = true;
													turnfriend = true;
												}
											}
											if (get.attitude(player, target) > 0 && !hastarget) return;
											if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
											if (target.hp > 1) return [1, 0.5];
										}
									},
								},
							},
						},
						ly_junshenbao_nineDragonSon_longyi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								player: 'judgeBegin',
							},
							forced: true,
							content() {
								var panding = ui.cardPile.firstChild;
								var enumtc = panding;
								var getValue = trigger.judge(panding);
								var suitList = ['spade', 'heart', 'club', 'diamond'];
								var nameList = ['sha', 'tao', 'wuxie', 'shan'];
								for (var n = 0; n < suitList.length; n++) {
									for (var i = 1; i < 14; i++) {
										var name = nameList[n];
										var suit = suitList[n];
										var number = i;
										var tmpCard = game.createCard(name, suit, number, null);
										var keyValue = trigger.judge(tmpCard);
										if (keyValue > getValue) {
											getValue = keyValue;
											enumtc = tmpCard;
										}
									}
								}
								if (panding != enumtc) {
									ui.cardPile.removeChild(panding);
									ui.cardPile.insertBefore(enumtc, ui.cardPile.firstChild);
								}
							},
							group: 'ly_junshenbao_nineDragonSon_longyi_info',
							subSkill: {
								info: {
									forced: true,
									popup: false,
									trigger: {
										player: 'phaseDrawBegin',
									},
									content() {
										trigger.num += 2;
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_zhangshiping_ziqi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							line: 'fire',
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							position: 'he',
							discard: false,
							prepare: 'give',
							content() {
								'step 0';
								target.gain(cards, player);
								('step 1');
								delete player.storage.ly_junshenbao_zhenSanGuo_zhangshiping_ziqi;
								var card = cards[0];
								if (!player.storage.ly_junshenbao_zhenSanGuo_zhangshiping_ziqi) player.storage.ly_junshenbao_zhenSanGuo_zhangshiping_ziqi = [];
								player.storage.ly_junshenbao_zhenSanGuo_zhangshiping_ziqi.push(card);
							},
							ai: {
								threaten: 2,
								order: 1,
								result: {
									target: 1,
								},
							},
							group: 'ly_junshenbao_zhenSanGuo_zhangshiping_ziqi_draw',
							subSkill: {
								draw: {
									popup: false,
									forced: true,
									trigger: {
										global: 'useCard',
									},
									filter(event, player) {
										return player.storage.ly_junshenbao_zhenSanGuo_zhangshiping_ziqi && player.storage.ly_junshenbao_zhenSanGuo_zhangshiping_ziqi.includes(event.card);
									},
									content() {
										player.draw(5 - player.countCards('h'));
										player.storage.ly_junshenbao_zhenSanGuo_zhangshiping_ziqi.remove(trigger.card);
										game.log(player, '<span style=\"color: red\">资器技能效果被触发</span>');
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_zhangshiping_shangdao: {
							nobracket: true,
							enable: 'phaseUse',
							discard: false,
							complexCard: true,
							prepare: 'give',
							line: 'fire',
							audio: 'ext:军神包/audio:2',
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.getCards('e').length;
								});
							},
							selectCard: [0, Infinity],
							filterCard: true,
							check(card) {
								return 6 - get.value(card);
							},
							filterTarget(card, player, target) {
								var selected = ui.selected.cards;
								var num = 0,
									num2 = 0;
								if (target == player) return false;
								if (selected.length == 0) return false;
								if (!target.getCards('e')) return false;
								for (var i = 0; i < selected.length; i++) {
									num += selected[i].number;
								}
								for (var j = 0; j < target.getCards('e').length; j++) {
									num2 += target.getCards('e')[j].number;
								}
								return num == num2;
							},
							content() {
								'step 0';
								target.gain(cards, player);
								('step 1');
								var card = target.getCards('e');
								player.gain(card, target);
								target.give(card, player);
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										var num = 0;
										for (var i = 1; i <= 5; i++) {
											if (
												target.hasCard(function (card) {
													return !player.getEquip(get.subtype(card)) && get.subtype(card) == 'equip' + i;
												}, 'e')
											)
												num--;
										}
										return num;
									},
								},
								threaten: 2,
							},
						},
						ly_junshenbao_zhenSanGuo_huangyuehua_liuma: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							init(player) {
								player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_judge = 0;
								player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_draw = 0;
								player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_use = 0;
								player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_dis = 0;
								player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma = 0;
							},
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								('step 1');
								event.list = ['判定', '摸牌', '出牌', '弃牌'];
								if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_judge > 0) event.list.remove('判定');
								if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_draw > 0) event.list.remove('摸牌');
								if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_use > 0) event.list.remove('出牌');
								if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_dis > 0) event.list.remove('弃牌');
								if (event.list.length == 0) {
									if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_judge > 0) player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_judge--;
									if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_draw > 0) player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_draw--;
									if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_use > 0) player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_use--;
									if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_dis > 0) player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_dis--;
									event.finish();
								}
								player
									.chooseControl(event.list)
									.set('prompt', '选择要执行的阶段')
									.set('ai', function () {
										if (player.countCards('h') <= player.hp || player.countCards('j', 'lebu')) {
											if (event.list.includes('弃牌')) return '弃牌';
											if (!event.list.includes('弃牌') && event.list.includes('判定')) return '判定';
											if (!event.list.includes('弃牌') && !event.list.includes('判定') && event.list.includes('摸牌')) return '摸牌';
											return '出牌';
										} else {
											if (event.list.includes('摸牌')) return '摸牌';
											if (!event.list.includes('摸牌') && event.list.includes('出牌')) return '出牌';
											if (!event.list.includes('摸') && !event.list.includes('出牌') && event.list.includes('弃牌')) return '弃牌';
											return '判定';
										}
										return event.list.randomGet();
									});
								('step 2');
								var num = player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma;
								var num1 = player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_judge;
								var num2 = player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_draw;
								var num3 = player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_use;
								var num4 = player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_dis;
								if (result.control == '判定') {
									if ((num2 > 0 && num3 < 1 && num4 < 1) || (num2 > 0 && num3 > 0 && num4 < 1) || (num2 > 0 && num4 > 0 && num3 < 1) || (num2 > 0 && num3 > 0 && num4 > 0) || (num3 > 0 && num2 < 1 && num4 < 1) || (num4 > 0 && num3 > 0 && num2 < 1) || (num4 > 0 && num1 < 1 && num2 < 1 && num3 < 1)) {
										player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma++;
										player.popup('+');
									}
									player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_judge++;
									player.popup('判定');
									game.log(player, '选择执行<span style=\"color: red\">判定阶段</span>');
									player.phaseJudge();
									event.goto(1);
								}
								if (result.control == '摸牌') {
									if ((num1 < 1 && num3 < 1 && num4 < 1) || (num1 > 0 && num3 > 0 && num4 < 1) || (num1 > 0 && num4 > 0 && num3 < 1) || (num1 > 0 && num3 > 0 && num4 > 0)) {
										player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma++;
										player.popup('+');
									}
									player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_draw++;
									player.popup('摸牌');
									game.log(player, '选择执行<span style=\"color: red\">摸牌阶段</span>');
									player.phaseDraw();
									event.goto(1);
								}
								if (result.control == '出牌') {
									if ((num1 < 1 && num2 < 1 && num4 < 1) || (num1 > 0 && num2 < 1 && num4 < 1) || (num2 > 0 && num1 < 1 && num4 < 1) || (num4 > 0 && num2 < 1 && num1 < 1) || (num1 > 0 && num2 > 0 && num4 > 0)) {
										player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma++;
										player.popup('+');
									}
									player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_use++;
									player.popup('出牌');
									game.log(player, '选择执行<span style=\"color: red\">出牌阶段</span>');
									player.phaseUse();
									event.goto(1);
								}
								if (result.control == '弃牌') {
									if ((num1 < 1 && num2 < 1 && num3 < 1) || (num1 > 0 && num2 < 1 && num3 < 1) || (num2 > 0 && num1 < 1 && num3 < 1) || (num3 > 0 && num2 < 1 && num1 < 1) || (num1 > 0 && num2 > 0 && num3 < 1) || (num1 > 0 && num3 > 0 && num2 < 1) || (num2 > 0 && num3 > 0 && num1 < 1)) {
										player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma++;
										player.popup('+');
									}
									player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_dis++;
									player.popup('弃牌');
									game.log(player, '选择执行<span style=\"color: red\">弃牌阶段</span>');
									player.phaseDiscard();
									event.goto(1);
								}
								('step 3');
								if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_judge > 0) player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_judge--;
								if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_draw > 0) player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_draw--;
								if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_use > 0) player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_use--;
								if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_dis > 0) player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma_dis--;
							},
							group: 'ly_junshenbao_zhenSanGuo_huangyuehua_liuma_move',
							subSkill: {
								move: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										if (player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma == 4) {
											player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma -= player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma;
											player.moveCard();
										} else player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma -= player.storage.ly_junshenbao_zhenSanGuo_huangyuehua_liuma;
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_huangyuehua_jingnu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							line: 'fire',
							filterCard(card) {
								return get.color(card) == 'red';
							},
							filterTarget: true,
							discard: false,
							check(card) {
								return 8 - get.value(card);
							},
							content() {
								'step 0';
								var card = cards[0];
								var suit = card.suit;
								var number = card.number;
								card.init({ name: 'zhuge', suit: suit, number: number });
								target.equip(card);
								('step 1');
								var num = game.countPlayer(function (current) {
									return get.distance(target, current, 'attack') <= 1;
								});
								player.draw(num);
							},
							ai: {
								order: 10,
								threaten: 2,
								moreDraw: true,
								result: {
									target(player, target, card) {
										if (target.hasSkill('ly_junshenbao_machao_mashu') || target.hasSkill('ly_junshenbao_mateng_mashu') || target.hasSkill('mashu')) return 10;
										if (target.hasSkillTag('equipDraw')) return 8;
										if (!target.getEquips(1)) return 5; //QQQ
										return 1;
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_shengsi_shengsi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: ['phaseBegin', 'phaseEnd'],
							},
							content() {
								'step 0';
								var card = get.cards()[0];
								player.gain(card);
								player.$gain(card);
								event.suit = card.suit;
								('step 1');
								var suit = event.suit;
								if (suit == 'spade') {
									player.draw();
									player.chooseToDiscard('he', true);
								}
								if (suit == 'heart') player.recover();
								if (suit == 'club') {
									player.chooseToDiscard('he', true);
									player.draw(2);
								}
								if (suit == 'diamond') player.draw();
							},
							ai: {
								threaten: 2,
								moreDraw: true,
							},
						},
						ly_junshenbao_zhenSanGuo_shengsi_xianti: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								global: 'useCardBegin',
							},
							filter(event, player) {
								if (!event.targets.includes(player)) return false;
								if (!get.tag(event.card, 'damage')) return false;
								var num = event.card.number;
								var nh = game.countPlayer();
								if (num > nh) return false;
								return true;
							},
							content() {
								trigger.targets.remove(player);
								game.log(trigger.card, '对', player, '<span style=\"color: red\">无效</span>');
							},
							ai: {
								threaten: 2,
								effect: {
									target(card, player, target, current) {
										var num = card.number;
										var nh = game.countPlayer();
										if (get.tag(card, 'damage') && num <= nh) return 'zeroplayertarget';
									},
								},
							},
							group: 'ly_junshenbao_zhenSanGuo_shengsi_xianti_die',
							subSkill: {
								die: {
									popup: false,
									forced: true,
									init(player) {
										player.storage.ly_junshenbao_zhenSanGuo_shengsi_xianti = 0;
									},
									trigger: {
										player: 'changeHp',
									},
									filter(event, player) {
										return player.hp < 1;
									},
									content() {
										'step 0';
										player.storage.ly_junshenbao_zhenSanGuo_shengsi_xianti++;
										('step 1');
										var num = player.storage.ly_junshenbao_zhenSanGuo_shengsi_xianti;
										if (num == game.countPlayer()) player.die();
										('step 2');
										player.recover(3 - player.hp);
										player.draw(2);
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_machao_yingyan: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'judgeEnd',
							},
							filter(event, player) {
								if (event.result.card.suit != 'diamond') return false;
								if (get.owner(event.result.card)) {
									return false;
								}
								if (event.nogain && event.nogain(event.result.card)) {
									return false;
								}
								return true;
							},
							content() {
								player.gain(trigger.result.card);
								player.$gain(trigger.result.card);
							},
						},
						ly_junshenbao_zhenSanGuo_machao_jufeng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'equipEnd',
							},
							content() {
								'step 0';
								player.judge(function (card) {
									var num = game.countPlayer(function (current) {
										return get.distance(player, current, 'attack') <= 1 && player != current && player.getEnemies().includes(current);
									});
									if (num > 0) {
										if (get.color(card) == 'red') return 1;
									}
									return 0;
								});
								('step 1');
								if (result.color) {
									if (result.color == 'red') event.goto(2);
									else event.goto(4);
								}
								('step 2');
								player
									.chooseTarget('是否对<span style=\"color: red\">攻击距离</span>内1名<span style=\"color: red\">其他角色</span>造成1点伤害', function (card, player, target) {
										return get.distance(player, target, 'attack') <= 1 && target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 3');
								if (result.bool) {
									player.line(result.targets[0], 'fire');
									result.targets[0].damage();
								} else event.finish();
								('step 4');
								player.draw();
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_junshenbao_zhenSanGuo_machao_changqu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'gameDrawAfter',
								player: 'enterGame',
							},
							forced: true,
							content() {
								var card1 = game.createCard({ name: 'zhungangshuo' });
								var card2 = game.createCard({ name: 'dawan' });
								player.equip(card1);
								player.equip(card2);
							},
						},
						ly_junshenbao_zhenSanGuo_zhangji_zabing: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							group: ['ly_junshenbao_zhenSanGuo_zhangji_zabing_damage', 'ly_junshenbao_zhenSanGuo_zhangji_zabing_recover', 'ly_junshenbao_zhenSanGuo_zhangji_zabing_draw'],
							subSkill: {
								damage: {
									popup: false,
									forced: true,
									trigger: {
										player: 'damageBefore',
									},
									filter(event, player) {
										return event.num > 0 && event.num < player.maxHp;
									},
									content() {
										trigger.cancel();
										player.loseMaxHp(trigger.num);
									},
								},
								recover: {
									popup: false,
									forced: true,
									trigger: {
										player: 'recoverBegin',
									},
									filter(event, player) {
										return event.num > 0;
									},
									content() {
										var num = trigger.num;
										player.gainMaxHp(num);
										trigger.num += num;
									},
								},
								draw: {
									popup: false,
									forced: true,
									trigger: {
										global: ['gainMaxHpEnd', 'loseMaxHpEnd'],
									},
									content() {
										player.draw();
									},
								},
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_zhenSanGuo_zhangji_yiji: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							group: ['ly_junshenbao_zhenSanGuo_zhangji_yiji_recover', 'ly_junshenbao_zhenSanGuo_zhangji_yiji_gain'],
							subSkill: {
								recover: {
									popup: false,
									silent: true,
									line: 'white',
									enable: 'phaseUse',
									prompt: '回复体力',
									usable: 1,
									filterCard: true,
									filterTarget(card, player, target) {
										if (game.me != player) return target.isDamaged() && player.getFriends(true).includes(target);
										return target.isDamaged();
									},
									check(card) {
										return 8 - get.value(card);
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
										threaten: 2,
									},
								},
								gain: {
									popup: false,
									silent: true,
									line: 'white',
									enable: 'phaseUse',
									usable: 1,
									prompt: '增加体力上限',
									filterCard: true,
									filterTarget(card, player, target) {
										return true;
									},
									check(card) {
										return 8 - get.value(card);
									},
									content() {
										target.gainMaxHp();
									},
									ai: {
										order: 8,
										threaten: 2,
										result: {
											target(player, target, card) {
												if (target.maxHp < 5) return 5;
												return 2;
											},
										},
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_baosanniang_yuman: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBeginStart',
							},
							filter(event, player) {
								return !player.hasSkill('ly_junshenbao_zhenSanGuo_baosanniang_yuman_lose');
							},
							content() {
								'step 0';
								player.draw(4);
								('step 1');
								player.addSkill('ly_junshenbao_zhenSanGuo_baosanniang_yuman_lose');
								('step 2');
								var evt = _status.event.getParent('phase');
								if (evt && evt.name == 'phase') {
									//QQQ
									evt.finish();
								}
							},
							group: 'ly_junshenbao_zhenSanGuo_baosanniang_yuman_update',
							subSkill: {
								update: {
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									popup: false,
									content() {
										player.removeSkill('ly_junshenbao_zhenSanGuo_baosanniang_yuman_lose');
									},
								},
								lose: {},
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_junshenbao_zhenSanGuo_baosanniang_chengshi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							group: ['ly_junshenbao_zhenSanGuo_baosanniang_chengshi_miss', 'ly_junshenbao_zhenSanGuo_baosanniang_chengshi_sha', 'ly_junshenbao_zhenSanGuo_baosanniang_chengshi_shan'],
							subSkill: {
								shan: {
									popup: false,
									forced: true,
									trigger: {
										player: 'respond',
									},
									filter(event, player) {
										return event.card && event.card.name == 'shan' && !player.hasSkill('ly_junshenbao_zhenSanGuo_baosanniang_chengshi_useShan');
									},
									content() {
										player.addTempSkill('ly_junshenbao_zhenSanGuo_baosanniang_chengshi_useShan');
									},
								},
								useShan: {
									audio: 'ext:军神包/audio:2',
									enable: ['chooseToRespond'],
									filterCard(card) {
										return get.color(card) == 'black';
									},
									viewAs: {
										name: 'shan',
									},
									viewAsFilter(player) {
										if (!player.countCards('h', { color: 'black' })) return false;
									},
									prompt: '将1张黑色手牌当闪打出',
									check() {
										return 1;
									},
									ai: {
										respondShan: true,
										skillTagFilter(player) {
											if (!player.countCards('h', { color: 'black' })) return false;
										},
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'respondShan') && current < 0) return 0.6;
											},
										},
										basic: {
											useful: [7, 2],
											value: [7, 2],
										},
									},
								},
								sha: {
									popup: false,
									forced: true,
									trigger: {
										player: 'shaMiss',
									},
									filter(event, player) {
										return player.isPhaseUsing() && !player.hasSkill('ly_junshenbao_zhenSanGuo_baosanniang_chengshi_useSha');
									},
									content() {
										player.addTempSkill('ly_junshenbao_zhenSanGuo_baosanniang_chengshi_useSha');
									},
								},
								useSha: {
									audio: 'ext:军神包/audio:2',
									enable: ['chooseToRespond', 'chooseToUse'],
									filterCard(card, player) {
										return get.color(card) == 'red';
									},
									position: 'h',
									viewAs: {
										name: 'sha',
									},
									viewAsFilter(player) {
										if (get.zhu(player, 'shouyue')) {
											if (!player.countCards('h')) return false;
										} else {
											if (!player.countCards('h', { color: 'red' })) return false;
										}
									},
									prompt: '将1张红色手牌当杀使用或打出',
									check(card) {
										return 4 - get.value(card);
									},
									ai: {
										skillTagFilter(player) {
											if (get.zhu(player, 'shouyue')) {
												if (!player.countCards('he')) return false;
											} else {
												if (!player.countCards('he', { color: 'red' })) return false;
											}
										},
										respondSha: true,
										basic: {
											useful: [5, 1],
											value: [5, 1],
										},
										order() {
											if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
											return 3;
										},
										result: {
											target(player, target) {
												if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
													if (get.attitude(player, target) > 0) {
														return -6;
													} else {
														return -3;
													}
												}
												return -1.5;
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
								miss: {
									popup: false,
									forced: true,
									trigger: {
										player: 'shaMiss',
									},
									content() {
										player.draw(2);
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_daqiao_liuli: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (!event.targets.includes(player)) return false;
								return true;
							},
							content() {
								'step 0';
								var card = trigger.card;
								var players = trigger.player;
								player
									.chooseTarget('<span style=\"color: red\">流离</span>:是否将' + get.translation(trigger.card) + '的目标转移给1名与你距离为1的<span style=\"color: red\">其他角色</span>,若如此做,你须<span style=\"color: red\">弃置</span>1张牌', function (card, player, target) {
										return target != player && get.distance(player, target) <= 1;
									})
									.set('ai', function (target) {
										return get.effect(target, card, player, player);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets[0];
									var target = event.targets;
									trigger.targets.push(target);
									player.line(target, 'green');
								} else {
									event.finish();
								}
								('step 2');
								event.cards = trigger.card;
								var eff = get.sgn(get.effect(player, event.cards, player, player));
								player
									.chooseCard('是否弃置1张牌', 'he', function (card) {
										return true;
									})
									.set('ai', function (card) {
										if (eff > 0) return false;
										return 8 - get.value(card);
									});
								('step 3');
								if (result.bool) {
									var card = result.cards[0];
									var target = event.targets;
									player.discard(card);
									trigger.targets.remove(player);
								}
							},
							ai: {
								threaten: 2,
								effect(card, player, target) {
									if (!target.hasFriend()) return;
									if (player == target) return;
									var name = card.name;
									var type = get.type(card);
									var nh = target.countCards();
									if (type == 'trick' && name != 'shunshou' && name != 'guohe' && name != 'huogong') {
										if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
											if (get.tag(card, 'damage')) {
												return 0;
											}
											return 5;
										}
									}
								},
							},
						},
						ly_junshenbao_zhenSanGuo_daqiao_guose: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							line: 'green',
							filterTarget(card, player, target) {
								return target != player && target.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.discardPlayerCard(target, 'he', true);
								('step 1');
								if (result.cards[0]) {
									var card = result.cards[0];
									if (card.suit != 'diamond') event.finish();
								}
								('step 2');
								var card = game.createCard({ name: 'lebu', suit: 'spade' });
								player.useCard(card, target, false);
							},
							ai: {
								order: 5,
								result: {
									target: -2,
								},
								threaten: 2,
							},
						},
						ly_junshenbao_zhenSanGuo_daqiao_tongque: {
							nobracket: true,
							forced: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseDiscardBegin',
							},
							filter(event, player) {
								return player.countCards('h') > player.hp;
							},
							content() { },
							mod: {
								maxHandcard(player, num) {
									var nh = game.countPlayer(function (current) {
										return player.getEnemies().includes(current);
									});
									return (num += nh + nh);
								},
							},
						},
						ly_junshenbao_zhenSanGuo_zhangliao_tuxi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'gainAfter',
							},
							forced: true,
							filter(event, player) {
								var card = event.cards;
								for (var i = 0; i < card.length; i++) {
									if (get.color(card[i]) == 'black') return true;
								}
								return false;
							},
							content() {
								'step 0';
								event.num = 0;
								('step 1');
								var card = trigger.cards;
								for (var i = 0; i < card.length; i++) {
									if (get.color(card[i]) == 'black') event.num++;
								}
								('step 2');
								var num = event.num;
								player
									.chooseTarget('<span style=\"color: red\">突袭</span>:是否视为对至多' + get.cnNumber(num) + '名<span style=\"color: red\">其他角色</span>使用1张<杀>', [1, num], true, function (card, player, target) {
										if (player != game.me) return player.getEnemies().includes(target);
										return player != target;
									})
									.set('ai', function (target) {
										return player.canUse({ name: 'sha' }, target, false);
									});
								('step 3');
								if (result.bool) {
									player.line(result.targets, 'thunder');
									event.targets = result.targets;
									event.nums = result.targets.length;
								} else {
									event.finish();
								}
								('step 4');
								if (targets && targets.length) {
									player.line(targets, 'thunder');
									for (var i = 0; i < targets.length; i++) {
										player.useCard({ name: 'sha' }, targets[i], false);
									}
								}
							},
							ai: {
								threaten: 2,
								nohDamage: true,
							},
						},
						ly_junshenbao_zhenSanGuo_zhangliao_wuwei: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							content() {
								'step 0';
								delete player.storage.ly_junshenbao_zhenSanGuo_zhangliao_wuwei;
								event.gain = [];
								if (!player.storage.ly_junshenbao_zhenSanGuo_zhangliao_wuwei) player.storage.ly_junshenbao_zhenSanGuo_zhangliao_wuwei = 0;
								('step 1');
								event.cards = get.cards()[0];
								player.showCards(event.cards);
								if (get.type(event.cards) == 'basic') player.storage.ly_junshenbao_zhenSanGuo_zhangliao_wuwei++;
								event.cards.discard();
								event.gain.push(event.cards);
								('step 2');
								if (player.storage.ly_junshenbao_zhenSanGuo_zhangliao_wuwei < 2) event.goto(1);
								('step 3');
								if (event.gain.length) {
									player.gain(event.gain);
									player.$draw(event.gain);
								}
								trigger.cancel();
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_zhenSanGuo_xuchu_aozhan: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'damageEnd',
								source: 'damageEnd',
							},
							forced: true,
							marktext: '<span style="color: blue">战</span>',
							init(player) {
								player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan = [];
							},
							intro: {
								content: 'cards',
							},
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget('<span style=\"color: red\">鏖战</span>:是否获得场上1张牌？', function (card, player, target) {
										return target.countCards('ej') > 0;
									})
									.set('ai', function (target) {
										if (player.getFriends().includes(target) || target == player) {
											if (target.countCards('j') > 0) return 100;
											if (target.isDamaged() && target.getEquip('baiyin')) return 99;
											if (target.hasSkillTag('euqipDraw')) return 90;
											return false;
										} else {
											if (target.isDamaged && target.getEquip('baiyin') && target.countCards('e') < 2) return false;
											if (target.countCards('e') < 1) return false;
											if (target.hasSkillTag('euqipDraw')) return false;
											return true;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.targets = target;
									player.line(target, 'thunder');
								} else event.finish();
								('step 2');
								player.choosePlayerCard('ej', event.targets, true);
								('step 3');
								if (result.bool) {
									var card = result.links;
									player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan = player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan.concat(card);
									player.markSkill('ly_junshenbao_zhenSanGuo_xuchu_aozhan');
									event.targets.lose(card, ui.special, 'toStorage');
									event.targets.$give(card, player);
								}
							},
							group: 'ly_junshenbao_zhenSanGuo_xuchu_aozhan_gain',
							subSkill: {
								gain: {
									trigger: {
										player: 'phaseUseBegin',
									},
									filter(event, player) {
										return player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan && player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan.length;
									},
									forced: true,
									content() {
										'step 0';
										player.chooseControl('选项一', '选项二', '取消').set('prompt', get.prompt('ly_junshenbao_zhenSanGuo_xuchu_aozhan')).set('choiceList', ['获得所有<战>', '弃置所有<战>并摸等量的牌', '取消']).ai = function (event, player) {
											if (player.hp > 2) return '选项一';
											return '选项二';
										};
										('step 1');
										if (result.control == '取消') event.finish();
										if (result.control == '选项一') {
											var card = player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan;
											player.$gain(player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan);
											player.gain(player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan, 'fromStorage');
											player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan = [];
											player.unmarkSkill('ly_junshenbao_zhenSanGuo_xuchu_aozhan');
										}
										if (result.control == '选项二') {
											player.draw(player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan.length);
											player.$throw(player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan.slice(0), 1000);
											while (player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan.length) {
												player.storage.ly_junshenbao_zhenSanGuo_xuchu_aozhan.shift().discard();
											}
											player.unmarkSkill('ly_junshenbao_zhenSanGuo_xuchu_aozhan');
										}
									},
								},
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_zhenSanGuo_xuchu_kuangquan: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.countCards('e') > 0;
							},
							content() {
								'step 0';
								event.num = player.countCards('e');
								delete player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan;
								if (!player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan) player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan = 0;
								('step 1');
								var card = get.cards()[0];
								var cards = player.getCards('e');
								var gain = [];
								player.showCards(card);
								if (card.suit) {
									var suit = card.suit;
									if (player.countCards('e', { suit: suit }) > 0) player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan += 1;
								}
								player.gain(card);
								player.$gain(card);
								('step 2');
								event.num--;
								if (event.num > 0) event.goto(1);
								('step 3');
								var card = player.getCards('e');
								player.discard(card);
								player.popup(get.cnNumber(player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan));
							},
							group: ['ly_junshenbao_zhenSanGuo_xuchu_kuangquan_damage', 'ly_junshenbao_zhenSanGuo_xuchu_kuangquan_delete'],
							subSkill: {
								damage: {
									popup: false,
									forced: true,
									trigger: {
										source: 'damageBefore',
									},
									priority: Infinity,
									filter(event, player) {
										return player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan && player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan > 0;
									},
									content() {
										player.line(trigger.player, 'thunder');
										trigger.num += player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan;
										game.log(player, '<span style=\"color: red\">狂拳技能效果被触发,此伤害+</span>', player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan);
									},
								},
								delete: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseBegin',
									},
									filter(event, player) {
										return player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan && player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan > 0;
									},
									content() {
										delete player.storage.ly_junshenbao_zhenSanGuo_xuchu_kuangquan;
									},
								},
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_zhenSanGuo_sunshangxiang_wuji: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								var num = player.maxHp - player.hp;
								if (player.getStat().skill.ly_junshenbao_zhenSanGuo_sunshangxiang_wuji >= num) return false;
								return true;
							},
							viewAs: {
								name: 'wanjian',
							},
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							position: 'e',
							check(card) {
								var player = _status.event.player;
								var targets = game.filterPlayer(function (current) {
									return player.canUse('wanjian', current);
								});
								var num = 0;
								for (var i = 0; i < targets.length; i++) {
									var eff = get.sgn(get.effect(targets[i], { name: 'wanjian' }, player, player));
									if (targets[i].hp == 1) {
										eff *= 1.5;
									}
									num += eff;
								}
								if (!player.needsToDiscard(-1)) {
									if (targets.length >= 6) {
										if (num < 2) return 0.1;
									} else if (targets.length >= 4) {
										if (num < 1.5) return 0.1;
									}
								}
								return 10 - get.value(card);
							},
							group: 'ly_junshenbao_zhenSanGuo_sunshangxiang_wuji_lose',
							subSkill: {
								lose: {
									nobracket: true,
									popup: false,
									forced: true,
									silent: true,
									trigger: {
										player: 'loseEnd',
									},
									filter(event, player) {
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												//QQ
												if (i.original == 'e') return true;
											}
										return false;
									},
									content() {
										var num = 0;
										for (var i = 0; i < trigger.cards.length; i++) {
											if (trigger.cards[i].original == 'e') num += 2;
										}
										player.draw(num);
									},
									ai: {
										effect: {
											player(card, player, target) {
												if (get.type(card) == 'equip') return [0.1, 0.1];
											},
										},
										equipDraw: true,
										receiveEquip: true,
										threaten: 1.5,
									},
								},
							},
							ai: {
								basic: {
									order: 10,
								},
							},
						},
						ly_junshenbao_zhenSanGuo_sunshangxiang_juelie: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target.sex == 'male' && target != player;
							},
							line: 'green',
							content() {
								'step 0';
								'step 1';
								player.chooseControl('选项一', '选项二').set('prompt', get.prompt('ly_junshenbao_zhenSanGuo_sunshangxiang_juelie')).set('choiceList', ['失去1点体力', '弃置2张牌']).ai = function (event, player) {
									var cards = player.getCards('he');
									if (player.countCards('h') > 4) return '选项二';
									if (player.getCards('he').length <= 3) {
										for (var i = 0; i < cards.length; i++) {
											if (get.value(cards[i]) < 6) return '选项二';
										}
									}
									if (player.hp > 2) return '选项一';
									return '选项二';
								};
								('step 2');
								if (result.control == '选项一') {
									player.draw();
									player.loseHp();
								}
								if (result.control == '选项二') {
									player.draw();
									player.chooseToDiscard('he', 2, true);
								}
								('step 3');
								var targets = target;
								target.chooseControl('选项一', '选项二').set('prompt', get.prompt('ly_junshenbao_zhenSanGuo_sunshangxiang_juelie')).set('choiceList', ['失去1点体力', '弃置2张牌']).ai = function (event, player) {
									var cards = target.getCards('he');
									if (target.countCards('h') > 4) return '选项二';
									if (target.getCards('he').length <= 3) {
										for (var i = 0; i < cards.length; i++) {
											if (get.value(cards[i]) < 6) return '选项二';
										}
									}
									if (target.hp > 3) return '选项一';
									return '选项二';
								};
								('step 4');
								if (result.control == '选项一') {
									target.draw();
									target.loseHp();
								}
								if (result.control == '选项二') {
									target.draw();
									target.chooseToDiscard('he', 2, true);
								}
							},
							ai: {
								order: 9,
								threaten: 2,
								result: {
									player(player) {
										if (player.hp < 3 && player.countCards('he') < 4) return -5;
										return 1;
									},
									target: -1,
								},
							},
						},
						ly_junshenbao_zhenSanGuo_sunshangxiang_yinmeng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							filterTarget(card, player, target) {
								return target.sex == 'male' && target != player;
							},
							check(card) {
								if (get.position(card) == 'e') return 10 - get.value(card);
								return 8 - get.value(card);
							},
							line: 'green',
							filterCard: true,
							position: 'he',
							content() {
								'step 0';
								if (player.isDamaged()) player.recover();
								else player.draw(2);
								('step 1');
								if (target.isDamaged()) {
									target.chooseToDiscard('he', true);
									target.recover();
								} else {
									target.chooseToDiscard('he', true);
									target.draw(2);
								}
							},
							ai: {
								order: 8,
								threaten: 2.1,
								result: {
									target(player, target, card) {
										if (target.isDamaged()) return 3;
										return 2;
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_huangwudie_shenji: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (get.subtype(event.card) == 'equip3') return true;
								if (get.subtype(event.card) == 'equip4') return true;
								return false;
							},
							forced: true,
							content() {
								'step 0';
								if (get.subtype(trigger.card) == 'equip3') {
									player.gainMaxHp();
									event.finish();
								}
								('step 1');
								if (player.isDamaged()) player.recover();
								else player.draw(2);
							},
							ai: {
								moredraw: true,
								effect: {
									player(card, player, target) {
										if (get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4') return [1, 1];
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_huangwudie_qianggong: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								var players = game.filterPlayer();
								var targets = event.targets;
								for (var j = 0; j < targets.length; j++) {
									for (var i = 0; i < players.length; i++) {
										if (players[i] != player && get.distance(targets[j], players[i], 'attack') <= 1 && !targets.includes(players[i])) return true;
									}
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								event.targetss = trigger.targets;
								player
									.chooseTarget(get.prompt('ly_junshenbao_zhenSanGuo_huangwudie_qianggong'), [1, Infinity], function (card, player, target) {
										var targets = event.targetss;
										for (var i = 0; i < targets.length; i++) {
											if (target != player && get.distance(targets[i], target, 'attack') <= 1 && !targets.includes(target)) return true;
										}
										return false;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return ai.get.effect(target, { name: 'sha' }, player, player);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (targets && targets.length) {
									for (var i = 0; i < targets.length; i++) {
										player.line(targets[i], 'fire');
										trigger.targets.push(targets[i]);
										game.log(targets[i], '成为', trigger.card, '<span style=\"color: red\">额外目标</span>');
									}
								}
							},
							ai: {
								threaten: 2,
								doubleSha: true,
							},
						},
						ly_junshenbao_zhenSanGuo_dongzhuo_baolue: {
							mode: ['identity'],
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							zhuSkill: true,
							trigger: {
								global: 'damageBefore',
							},
							filter(event, player) {
								if (player.identity != 'zhu') return false;
								if (event.source == player) return false;
								if (!player.hasZhuSkill('ly_junshenbao_zhenSanGuo_dongzhuo_baolue')) return false;
								if (player.getEnemies().includes(event.source)) return false;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								var targets = trigger.source;
								var players = trigger.player;
								targets.chooseBool('是否发动<span style=\"color: red\">暴掠</span>').ai = function (event, player) {
									if (targets.getFriends().includes(players)) return false;
									return true;
								};
								('step 1');
								if (result.bool) {
									trigger.source.line(player, 'white');
									trigger.source = player;
								} else event.finish();
								('step 2');
								player.judge(function (card) {
									if (player.hp == player.maxHp) {
										if (card.suit == 'spade') return -1;
									}
									if (card.suit == 'spade') return 1;
									return 0.5;
								});
								('step 3');
								if (result.suit) {
									if (result.suit == 'spade') player.recover();
									else player.draw();
								}
							},
						},
						ly_junshenbao_zhenSanGuo_dongzhuo_qiaoji: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							priority: 10,
							trigger: {
								source: 'damageBefore',
							},
							filter(event, player) {
								if (event.player.getEquips(3)) return true;
								if (event.player.getEquips(4)) return true;
								return false;
							},
							content() {
								player.line(trigger.player, 'white');
								trigger.num++;
							},
						},
						ly_junshenbao_zhenSanGuo_dongzhuo_lingnu: {
							nobracket: true,
							forced: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							content() {
								'step 0';
								if (player.hasSkill('jiu')) {
									player.line(trigger.player, 'white');
									trigger.num++;
								}
								('step 1');
								if (_status.currentPhase == player) {
									trigger.num--;
								} else {
									player.line(trigger.player, 'white');
									trigger.num++;
								}
							},
							ai: {
								threaten: 2,
								effect: {
									player(card, player, target) {
										if (card.name == 'jiu') return [1, 1];
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_dongzhuo_jiuchi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							line: 'white',
							filterTarget(card, player, target) {
								return target.countCards('ej') > 0;
							},
							content() {
								'step 0';
								player.discardPlayerCard(1, 'ej', target, true);
								('step 1');
								player.useCard({ name: 'jiu' }, player, false);
							},
							ai: {
								order: 10,
								result: {
									target(player, target) {
										if (player.getFriends().includes(target) || player == target) {
											if (target.countCards('j') > 0) return 100;
											if (target.isDamaged() && target.getEquip('baiyin')) return 99;
											if (target.hasSkillTag('equipDraw')) return 97;
											return 0;
										}
										if (player.getEnemies().includes(target)) {
											if (!target.hasSkillTag('equipDraw')) {
												if (target.countCards('e') < 1 && target.countCards('j') > 0) return 2;
												return -98;
											} else return 2;
										}
										return 0;
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_simabada_bada: {
							nobracket: true,
							audio: 'ext:军神包/audio:8',
							group: ['ly_junshenbao_zhenSanGuo_simabada_bada_begin', 'ly_junshenbao_zhenSanGuo_simabada_bada_judge', 'ly_junshenbao_zhenSanGuo_simabada_bada_draw', 'ly_junshenbao_zhenSanGuo_simabada_bada_use', 'ly_junshenbao_zhenSanGuo_simabada_bada_dis', 'ly_junshenbao_zhenSanGuo_simabada_bada_end', 'ly_junshenbao_zhenSanGuo_simabada_bada_morephase'],
							subSkill: {
								begin: {
									audio: 'ext:军神包/audio:1',
									trigger: {
										player: 'phaseBegin',
									},
									prompt: '<span style="color: red">八达(回合开始)</span>:是否摸1张牌？',
									content() {
										player.draw();
									},
								},
								judge: {
									audio: 'ext:军神包/audio:1',
									trigger: {
										player: 'phaseJudgeBegin',
									},
									prompt: '<span style="color: red">八达(判定阶段)</span>:是否摸1张牌？',
									content() {
										player.draw();
									},
								},
								draw: {
									audio: 'ext:军神包/audio:1',
									trigger: {
										player: 'phaseDrawBegin',
									},
									prompt: '<span style="color: red">八达(摸牌阶段)</span>:是否摸1张牌？',
									content() {
										player.draw();
									},
								},
								use: {
									audio: 'ext:军神包/audio:1',
									trigger: {
										player: 'phaseUseBegin',
									},
									prompt: '<span style="color: red">八达(出牌阶段)</span>:是否摸1张牌？',
									content() {
										player.draw();
									},
								},
								dis: {
									audio: 'ext:军神包/audio:1',
									trigger: {
										player: 'phaseDiscardBegin',
									},
									prompt: '<span style="color: red">八达(弃牌阶段)</span>:是否摸1张牌？',
									content() {
										player.draw();
									},
								},
								end: {
									audio: 'ext:军神包/audio:1',
									forced: true,
									priotity: Infinity,
									trigger: {
										player: 'phaseEnd',
									},
									prompt: '<span style="color: red">八达(回合结束)</span>:是否摸1张牌？',
									content() {
										player.draw();
									},
								},
								morephase: {
									audio: 'ext:军神包/audio:2',
									priotity: -Infinity,
									forced: true,
									trigger: {
										player: 'phaseAfter',
									},
									filter(event, player) {
										return !player.hasSkill('ly_junshenbao_zhenSanGuo_simabada_bada_lose');
									},
									content() {
										'step 0';
										player.discard(player.getCards('he'));
										('step 1');
										player.phase('nodelay');
										('step 2');
										player.addSkill('ly_junshenbao_zhenSanGuo_simabada_bada_gain');
										player.addSkill('ly_junshenbao_zhenSanGuo_simabada_bada_lose');
									},
								},
								lose: {},
								gain: {
									popup: false,
									forced: true,
									trigger: {
										global: 'phaseBegin',
									},
									filter(event, player) {
										return event.player != player;
									},
									content() {
										player.removeSkill('ly_junshenbao_zhenSanGuo_simabada_bada_gain');
										player.removeSkill('ly_junshenbao_zhenSanGuo_simabada_bada_lose');
									},
								},
							},
							ai: {
								threaten: 2.1,
								moreDraw: true,
							},
						},
						ly_junshenbao_zhenSanGuo_ganning_jiexi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							line: 'green',
							enable: 'phaseUse',
							filterCard(card) {
								return get.color(card) == 'black';
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('hej') > 0;
							},
							selectTarget: 1,
							check(card) {
								return 7 - get.value(card);
							},
							filter(event, player) {
								return player.countCards('h', { color: 'black' }) > 0;
							},
							content() {
								'step 0';
								player.discardPlayerCard('hej', true, target);
								('step 1');
								var card = result.cards[0];
								if (get.color(card) == 'black') player.draw();
							},
							ai: {
								order: 9,
								threaten: 2,
								result: {
									target(player, target) {
										if (player.getFriends().includes(target)) {
											if (target.countCards('j') > 0) return 2;
											if (target.isDamaged() && target.getEquip('baiyin')) return 1;
											return -1;
										}
										if (player.getEnemies().includes(target)) {
											if (target.countCards('he') < 1 && target.countCards('j') > 0) return 2;
											if (target.countCards('hj') < 1 && target.isDamaged() && target.getEquip('baiyin') && target.countCards('e') < 2) return 2;
											if (target.hasSkillTag('nohDamage')) return 2;
											if (target.countCards('h') < 1 && target.countCards('e') > 0 && (target.hasSkillTag('receiveEquip') || target.hasSkillTag('equipDraw'))) return 2;
											return -2;
										}
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_ganning_daoyue: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							line: 'green',
							filterCard(card) {
								return card.suit == 'heart';
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('ej') > 0;
							},
							selectTarget: 1,
							check(card) {
								return 7 - get.value(card);
							},
							filter(event, player) {
								return player.countCards('h', { suit: 'heart' }) > 0;
							},
							content() {
								player.gainPlayerCard('ej', target, true);
							},
							ai: {
								order: 7,
								result: {
									target(player, target) {
										if (player.getFriends().includes(target)) {
											if (target.countCards('j') > 0) return 2;
											if (target.isDamaged() && target.getEquip('baiyin')) return 1;
											return -1;
										}
										if (player.getEnemies().includes(target)) {
											if (target.countCards('he') < 1 && target.countCards('j') > 0) return 2;
											if (target.countCards('hj') < 1 && target.isDamaged() && target.getEquip('baiyin') && target.countCards('e') < 2) return 2;
											if (target.hasSkillTag('nohDamage')) return 2;
											if (target.countCards('h') < 1 && target.countCards('e') > 0 && (target.hasSkillTag('receiveEquip') || target.hasSkillTag('equipDraw'))) return 2;
											return -2;
										}
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_ganning_youxia: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'useCard',
							},
							round: 1,
							prompt(event, player) {
								return '<span style="color: red">游侠</span>:是否<span style="color: red">取消</span>' + get.translation(event.card) + '的结算并获得之';
							},
							filter(event, player) {
								if (player.hasSkill('ly_junshenbao_zhenSanGuo_ganning_youxia_update')) return false;
								if (event.player == player) return false;
								if (get.type(event.card) != 'trick') return false;
								if (get.info(event.card).multitarget) return false;
								if (event.targets.length < 2) return false;
								return true;
							},
							check(event, player) {
								if (player.getFriends().includes(event.player)) return false;
								return true;
							},
							content() {
								trigger.cancel();
								player.gain(trigger.card);
								player.$gain(trigger.card);
								player.addTempSkill('ly_junshenbao_zhenSanGuo_ganning_youxia_update', { player: 'phaseBegin' });
							},
							subSkill: {
								update: {},
							},
						},
						ly_junshenbao_zhenSanGuo_lvbu_juelu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'useCard',
							},
							prompt(event, player) {
								return '<span style="color: red">绝戮</span>:是否<span style="color: red">取消</span>' + get.translation(event.card) + '的结算并视为对' + get.translation(event.player) + '使用' + get.translation(event.card);
							},
							init(player) {
								player.storage.ly_junshenbao_zhenSanGuo_lvbu_juelu = 0;
							},
							filter(event, player) {
								if (event.player == player) return false;
								return event.card && event.card.name == 'sha' && event.targets.includes(player);
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								'step 0';
								trigger.cancel();
								('step 1');
								player.useCard(trigger.card, trigger.player, false);
								player.storage.ly_junshenbao_zhenSanGuo_lvbu_juelu++;
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (target.getEnemies().includes(player) && card.name == 'sha') {
											if (get.distance(target, player, 'attack') <= 1 && get.distance(player, target, 'attack') <= 1) return [-1, 1];
											return [0.1, -0.1];
										}
									},
								},
							},
							group: ['ly_junshenbao_zhenSanGuo_lvbu_juelu_player', 'ly_junshenbao_zhenSanGuo_lvbu_juelu_target'],
							subSkill: {
								player: {
									trigger: {
										player: 'shaMiss',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										if (player.storage.ly_junshenbao_zhenSanGuo_lvbu_juelu < 1) return false;
										return event.target != player;
									},
									content() {
										game.log(player, '<span style="color: red">绝戮</span>效果生效');
										trigger.target.line(player, 'white');
										player.damage(trigger.target);
										player.storage.ly_junshenbao_zhenSanGuo_lvbu_juelu--;
									},
								},
								target: {
									trigger: {
										player: 'shaHit',
									},
									filter(event, player) {
										if (player.storage.ly_junshenbao_zhenSanGuo_lvbu_juelu < 1) return false;
										return event.target != player;
									},
									forced: true,
									popup: false,
									content() {
										game.log(player, '<span style="color: red">绝戮</span>效果生效');
										player.line(trigger.target, 'white');
										trigger.target.damage(player);
										player.storage.ly_junshenbao_zhenSanGuo_lvbu_juelu--;
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_lvbu_feijiang: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'enterGame',
								global: 'gameStart',
							},
							forced: true,
							content() {
								var card = game.createCard({ name: 'fangtian' });
								var cards = game.createCard({ name: 'chitu' });
								player.equip(card);
								player.equip(cards);
							},
						},
						ly_junshenbao_zhenSanGuo_lvbu_sheji: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								player: 'shaBegin',
							},
							filter(event, player) {
								if (get.distance(player, event.target, 'attack') > 1) return false;
								if (get.distance(event.target, player, 'attack') > 1) return false;
								return true;
							},
							content() {
								player.line(trigger.target, 'white');
								trigger.directHit = true;
							},
							ai: {
								shaHit: true,
								unequip: true,
								threaten: 2,
								effect: {
									target(card, player, target) {
										if (player == target && get.subtype(card) == 'equip3') {
											if (get.equipValue(card) <= 7.5) return 0;
										}
										if (target.getEquip(3)) return;
										return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_lejin_ziyi: {
							nobracket: true,
							mod: {
								maxHandcard(player, num) {
									return (num += 2);
								},
							},
						},
						ly_junshenbao_zhenSanGuo_lejin_cuijian: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							priority: 10,
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								if (!event.player.getEquips(2)) return false;
								return event.card;
							},
							content() {
								player.line(trigger.player, 'thunder');
								trigger.num++;
							},
						},
						ly_junshenbao_zhenSanGuo_lejin_xiaoyong: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								if (player.hp % 2 == 1 && player.countCards('h') % 2 == 1) return true;
								if (player.hp % 2 == 0 && player.countCards('h') % 2 == 0) return true;
								return false;
							},
							content() {
								if (player.hp % 2 == 0 && player.countCards('h') % 2 == 0) {
									player.draw(2);
								} else {
									var num = Math.max(1, player.maxHp - player.hp);
									player.draw(num);
								}
							},
						},
						ly_junshenbao_zhenSanGuo_zhaoyun_wushen: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'enterGame',
								global: 'gameStart',
							},
							forced: true,
							content() {
								var card = game.createCard({ name: 'yinyueqiang' });
								player.equip(card);
							},
						},
						ly_junshenbao_zhenSanGuo_zhaoyun_longdan: {
							nobracket: true,
							audio: 'ext:军神包/audio:4',
							group: ['ly_junshenbao_zhenSanGuo_zhaoyun_longdan_gain', 'ly_junshenbao_zhenSanGuo_zhaoyun_longdan_draw', 'ly_junshenbao_zhenSanGuo_zhaoyun_longdan_sha', 'ly_junshenbao_zhenSanGuo_zhaoyun_longdan_shan'],
							subSkill: {
								draw: {
									trigger: {
										player: 'respond',
									},
									filter(event, player) {
										return event.skill == 'ly_junshenbao_zhenSanGuo_zhaoyun_longdan_shan';
									},
									forced: true,
									content() {
										'step 0';
										player.chooseBool('<span style="color: red">龙魂</span>:是否摸1张牌');
										('step 1');
										if (result.bool) {
											player.draw();
										}
									},
								},
								gain: {
									trigger: { player: 'shaHit' },
									filter(event, player) {
										if (event.skill != 'ly_junshenbao_zhenSanGuo_zhaoyun_longdan_sha') return false;
										return event.target.countCards('hej') > 0;
									},
									forced: true,
									content() {
										'step 0';
										var att = get.attitude(player, trigger.target) <= 0;
										var next = player.chooseButton();
										next.set('att', att);
										next.set('createDialog', ['选择要获得的牌', trigger.target.getCards('he')]);
										next.set('ai', function (button) {
											if (_status.event.att) return get.buttonValue(button);
											return 0;
										});
										('step 1');
										if (result.bool) {
											player.line(trigger.target, 'fire');
											var card = result.links[0];
											player.gain(card, trigger.target);
											if (get.position(card) == 'h') {
												trigger.target.$giveAuto(card, player);
											} else {
												trigger.target.$give(card, player);
											}
										}
									},
								},
								sha: {
									audio: 'ext:军神包/audio:2',
									enable: ['chooseToUse', 'chooseToRespond'],
									filterCard: { name: 'shan' },
									viewAs: { name: 'sha' },
									viewAsFilter(player) {
										if (!player.countCards('h', 'shan')) return false;
									},
									prompt: '将1张闪当杀使用或打出',
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
											if (!player.countCards('h', 'shan')) return false;
										},
										order() {
											return get.order({ name: 'sha' }) + 0.1;
										},
										useful: -1,
										value: -1,
									},
								},
								shan: {
									audio: 'ext:军神包/audio:2',
									enable: ['chooseToRespond'],
									filterCard: { name: 'sha' },
									viewAs: { name: 'shan' },
									prompt: '将1张杀当闪打出',
									check() {
										return 1;
									},
									viewAsFilter(player) {
										if (!player.countCards('h', 'sha')) return false;
									},
									ai: {
										respondShan: true,
										skillTagFilter(player) {
											if (!player.countCards('h', 'sha')) return false;
										},
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'respondShan') && current < 0) return 0.6;
											},
										},
										order: 4,
										useful: -1,
										value: -1,
									},
								},
							},
							ai: {
								threaten: 2,
								moreDraw: true,
							},
						},
						ly_junshenbao_zhenSanGuo_zhaoyun_danji: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBeginStart',
							},
							filter(event, player) {
								var num = game.countPlayer(function (current) {
									return player.getFriends().includes(current);
								});
								if (player.hp <= 1) return true;
								if (num == 0) return true;
								return false;
							},
							derivation: ['ly_junshenbao_zhenSanGuo_zhaoyun_danji_sha'],
							forced: true,
							content() {
								'step 0';
								player.$skill('单骑长坂坡');
								player.draw(2);
								player.recover();
								('step 1');
								player.awakenSkill('ly_junshenbao_zhenSanGuo_zhaoyun_danji');
								player.addSkill('ly_junshenbao_zhenSanGuo_zhaoyun_danji_sha');
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_zhenSanGuo_zhaoyun_danji_sha: {
							nobracket: true,
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.directHit) return false;
								return true;
							},
							priority: -1,
							content() {
								game.playXu(['ly_junshenbao_zhenSanGuo_zhaoyun_danji1', 'ly_junshenbao_zhenSanGuo_zhaoyun_danji2'].randomGet());
								player.line(trigger.target, 'fire');
								if (typeof trigger.shanRequired == 'number') {
									trigger.shanRequired++;
								} else {
									trigger.shanRequired = 2;
								}
							},
							ai: {
								shaHit: true,
							},
						},
						ly_junshenbao_zhenSanGuo_huatuo_huichun: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'dying',
							},
							priority: 100,
							forced: true,
							content() {
								'step 0';
								event.players = trigger.player;
								player.chooseBool('是否发动<span style="color: red">回春</span>').ai = function (event, player) {
									var players = _status.event.parent.player;
									if (player.getFriends().includes(event.players) || event.players == player) return true;
									return false;
								};
								('step 1');
								if (result.bool) {
									player.line(trigger.player, 'white');
								} else event.finish();
								('step 2');
								player.judge(function (card) {
									if (card.suit == 'heart') return 3;
									return 1;
								});
								('step 3');
								if (result.suit) {
									if (result.suit == 'heart') trigger.player.recover(1 - trigger.player.hp);
									else trigger.player.draw();
								}
							},
							ai: {
								threaten: 1.9,
								expose: 0.1,
							},
						},
						ly_junshenbao_zhenSanGuo_huatuo_zhenmai: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							line: 'white',
							filterTarget(card, player, target) {
								return target.countCards('h') > 0;
							},
							content() {
								'step 0';
								if (player != game.me) event.goto(3);
								('step 1');
								player.choosePlayerCard(target, true, 'h');
								('step 2');
								var card = result.links[0];
								var suit = card.suit;
								player.showCards(card);
								target.discard(card);
								if (suit == 'spade') target.loseHp();
								if (suit == 'heart') target.recover();
								if (suit == 'club') target.chooseToDiscard(2, 'he', true);
								if (suit == 'diamond') target.draw(2);
								event.finish();
								('step 3');
								event.cards = target.getCards('h');
								var a = target.countCards('h', { suit: 'spade' });
								var b = target.countCards('h', { suit: 'club' });
								var c = target.countCards('h', { name: 'tao' });
								var d = target.countCards('h', { suit: 'diamond' });
								var e = target.countCards('h', { suit: 'heart' });
								player.chooseCardButton('透视', event.cards).ai = function (button) {
									if (player.getEnemies().includes(target)) {
										if (!target.isDamaged() && c > 0) return button.link.name == 'tao';
										if (target.countCards('h') > 2) return button.link.suit == 'spade';
										return button.link.suit == 'club';
									}
									if (player.getFriends().includes(target)) {
										if (target.isDamaged() && e > 0) return button.link.suit == 'heart';
										return button.link.suit == 'diamond';
									}
									return Math.random();
								};
								('step 4');
								if (result.bool) {
									var card = result.links[0];
									var suit = card.suit;
									player.showCards(card);
									target.discard(card);
									if (suit == 'spade') target.loseHp();
									if (suit == 'heart') target.recover();
									if (suit == 'club') target.chooseToDiscard(2, 'he', true);
									if (suit == 'diamond') target.draw(2);
								}
							},
							ai: {
								threaten: 2,
								order: 10,
								result: {
									target(player, target) {
										var a = target.countCards('h', { suit: 'spade' });
										var b = target.countCards('h', { suit: 'club' });
										var c = target.countCards('h', { name: 'tao' });
										var d = target.countCards('h', { suit: 'diamond' });
										var e = target.countCards('h', { suit: 'heart' });
										if (player.getFriends().includes(target)) {
											if (d > 0 || e > 0) return 0.5;
											if (target.isDamaged() && e > 0) return 0.5;
											if (!target.isDamaged() && (e > 0 || d < 1)) return -1;
											return 0;
										}
										if (player.getEnemies().includes(target)) {
											if (a < 1) return 1;
											if (b < 1) return 1;
											if (a < 1 && b < 1) return 1;
											if (target.isDamaged() && d < 1 && a < 1 && b < 1) return 1;
											return -3;
										}
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_huatuo_miaoshou: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'recoverBegin',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('h', { suit: 'heart' }) > 0;
							},
							init(player) {
								player.storage.ly_junshenbao_zhenSanGuo_huatuo_miaoshou = 1;
							},
							content() {
								'step 0';
								event.players = trigger.player;
								var num = trigger.player.maxHp - trigger.player.hp - trigger.num;
								player
									.chooseCard('<span style=\"color: red\">妙手</span>:是否弃置至多' + get.cnNumber(num) + '张<span style=\"color: red\">♡</span>牌', 'he', [1, num], function (card) {
										return card.suit == 'heart';
									})
									.set('ai', function (card) {
										if (player.getEnemies().includes(event.players)) return false;
										return true;
									});
								('step 1');
								if (result.bool) {
									var target = event.players;
									player.line(event.players, 'white');
									player.discard(result.cards);
									var num = result.cards.length;
									trigger.num += num;
									player.storage.ly_junshenbao_zhenSanGuo_huatuo_miaoshou--;
								}
							},
							group: 'ly_junshenbao_zhenSanGuo_huatuo_miaoshou_draw',
							subSkill: {
								draw: {
									trigger: {
										global: 'recoverEnd',
									},
									filter(event, player) {
										return player.storage.ly_junshenbao_zhenSanGuo_huatuo_miaoshou < 1;
									},
									popup: false,
									forced: true,
									content() {
										event.target = [];
										event.target.push(player);
										event.target.push(trigger.player);
										game.asyncDraw(event.target, trigger.num);
										game.log(player, '<span style=\"color: red\">妙手</span>技能效果生效,', player, '与', trigger.player, '各摸', trigger.num, '张牌');
										player.storage.ly_junshenbao_zhenSanGuo_huatuo_miaoshou++;
									},
								},
							},
							ai: {
								moreDraw: true,
								threaten: 2,
								expose: 0.1,
							},
						},
						ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								player
									.chooseTarget('<span style=\"color: red\">粉裳</span>:是否令1名角色下回合<span style=\"color: gold\">摸牌阶段</span>摸牌数<span style=\"color: gold\">+2</span>', function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										var players = _status.currentPhase;
										var num = game.countPlayer(function (current) {
											return player.getFriends().includes(current);
										});
										if (player.getEnemies().includes(target)) return false;
										if (!target.hasJudge('lebu') && !target.isTurnedOver()) {
											if ((!target.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_1 || target.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_1 < 4) && players.next == target) return 100;
											return 99;
										} else {
											if (num == 0 && target == player) return 98;
											return false;
										}
										return false;
									});
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									if (!target.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_1) {
										target.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_1 = 0;
									}
									target.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_1 += 2;
								} else event.finish();
								('step 3');
								event.num--;
								if (event.num > 0) event.goto(1);
							},
							group: 'ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_draw',
							subSkill: {
								draw: {
									popup: false,
									forced: true,
									trigger: {
										global: 'phaseDrawBegin',
									},
									filter(event, player) {
										return event.player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_1 > 0;
									},
									content() {
										var num = trigger.player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_1;
										trigger.num += trigger.player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_1;
										game.log(player, '<span style=\"color: red\">粉裳</span>技能效果生效,', trigger.player, '本次<span style=\"color: gold\">摸牌阶段</span>额外摸', num, '张牌');
										delete trigger.player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_1;
									},
								},
							},
							ai: {
								moreDraw: true,
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
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
							},
						},
						ly_junshenbao_zhenSanGuo_xiaoqiao_qunwu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (get.type(event.card) != 'trick') return false;
								return event.targets.length > 1 && player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									filterCard(card, player) {
										return lib.filter.cardDiscardable(card, player);
									},
									filterTarget(card, player, target) {
										var trigger = _status.event.getTrigger();
										return trigger.targets.includes(target);
									},
									// position:'he',
									ai1(card) {
										return 10 - get.value(card);
									},
									ai2(target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return -get.effect(target, trigger.card, player, player);
									},
									prompt: get.prompt('ly_junshenbao_zhenSanGuo_xiaoqiao_qunwu'),
									prompt2: lib.translate.ly_junshenbao_zhenSanGuo_xiaoqiao_qunwu_info,
								});
								('step 1');
								if (result.bool) {
									player.line(result.targets[0], 'green');
									player.discard(result.cards);
									trigger.targets.remove(result.targets[0]);
								} else event.finish();
								('step 2');
								event.goto(0);
							},
						},
						ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							init(player) {
								player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan = [];
							},
							marktext: '<span style="color: #77FF00">扇</span>',
							mark: true,
							intro: {
								content: 'cards',
							},
							trigger: {
								global: 'gameDrawAfter',
								player: 'enterGame',
							},
							forced: true,
							content() {
								'step 0';
								player.draw(3);
								('step 1');
								player.chooseCard('选择3张牌作为"扇"', 3, true).ai = function (card) {
									var player = _status.event.player;
									return -get.value(card);
								};
								('step 2');
								player.lose(result.cards, ui.special);
								player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan = player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan.concat(result.cards);
								player.markSkill('ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan');
								game.log(player, '将', result.cards, '置于武将牌上作为<扇>');
							},
							group: ['ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan_use', 'ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan_save', 'ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan_increase'],
							subSkill: {
								increase: {
									trigger: {
										player: 'recoverEnd',
									},
									popup: false,
									filter(event, player) {
										return event.num > 0;
									},
									content() {
										'step 0';
										var card = game.createCard({ name: 'shandian', suit: 'spade' });
										if (player != game.me && Math.random() <= 0.5) player.gain(game.createCard(card));
										('step 1');
										player.chooseCard('选择1张牌作为"扇"', true, 'he', function (card) {
											return card.suit == 'spade' || card.suit == 'heart';
										}).ai = function (card) {
											var player = _status.event.player;
											return -get.value(card);
										};
										('step 2');
										player.lose(result.cards, ui.special);
										player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan = player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan.concat(result.cards);
										player.markSkill('ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan');
										game.log(player, '将', result.cards, '置于武将牌上作为<扇>');
									},
								},
								save: {
									trigger: {
										global: 'changeHp',
									},
									forced: true,
									filter(event, player) {
										if (event.player.hp > 0) return false;
										return player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan.length;
									},
									content() {
										'step 0';
										event.players = trigger.player;
										player.chooseCardButton('是否移去1张"扇",视为对' + get.translation(trigger.player) + '使用1张桃', player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan)
											.set('ai', (button) => get.attitude(player, trigger.player) - get.value(button.link));//QQQ
										('step 1');
										if (result.links) {
											var card = result.links[0];
											player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan.remove(card);
											card.discard();
											player.line(trigger.player, 'green');
											player.$throw(card);
											game.log(player, '将', card, '置入弃牌堆');
											if (player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan.length == 0) {
												player.unmarkSkill('ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan');
											}
										} else event.finish();
										('step 2');
										player.useCard({ name: 'tao' }, event.players);
										('step 3');
										if (event.players.hp < 1) event.goto(0);
									},
								},
								use: {
									popup: false,
									enable: 'phaseUse',
									filter(event, player) {
										return player.isDamaged() && player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan.length;
									},
									chooseButton: {
										dialog(event, player) {
											return ui.create.dialog('藏扇', player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan, 'hidden');
										},
										backup(links, player) {
											return {
												filterCard() {
													return false;
												},
												selectCard: -1,
												viewAs: { name: 'tao' },
												cards: links,
												onuse(result, player) {
													result.cards = lib.skill[result.skill].cards;
													var card = result.cards[0];
													player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan.remove(card);
													if (!player.storage.ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan.length) {
														player.unmarkSkill('ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan');
													} else {
														player.markSkill('ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan');
													}
												},
											};
										},
									},
									ai: {
										order: 3,
										result: {
											player: 1,
										},
										tag: {
											recover: 1,
										},
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_guojia_huiqu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player.judge(function (card) {
									var num = player.countCards('h', { name: 'tao' });
									if (card.suit == 'spade') {
										if (player.hp > 2 && num > 0) return 2;
										if (player.hp < 2 && num > 1) return 1;
										return -1;
									}
									return 0.5;
								});
								('step 1');
								if (result.suit) {
									if (result.suit == 'spade') player.damage('nosource');
								}
							},
							group: 'ly_junshenbao_zhenSanGuo_guojia_huiqu_gain',
							subSkill: {
								gain: {
									popup: false,
									trigger: {
										player: 'judgeEnd',
									},
									filter(event, player) {
										if (get.owner(event.result.card)) {
											return false;
										}
										if (event.nogain && event.nogain(event.result.card)) {
											return false;
										}
										return true;
									},
									content() {
										player.gain(trigger.result.card);
										player.$gain2(trigger.result.card);
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_guojia_yice: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								event.cards = get.cards(3 * trigger.num);
								('step 1');
								if (event.cards.length > 1) {
									player.chooseCardButton('将<遗策>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
										if (ui.selected.buttons.length == 0) return 1;
										return 0;
									});
								} else if (event.cards.length == 1) {
									event._result = { links: event.cards.slice(0), bool: true };
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.cards = event.cards.filter((q) => !result.links.includes(q));
									event.togive = result.links.slice(0);
									player
										.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
										.set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											if (_status.event.enemy) {
												return -att;
											} else if (att > 0) {
												return att / (1 + target.countCards('h'));
											} else {
												return att / 100;
											}
										})
										.set('enemy', get.value(event.togive[0]) < 0);
								}
								('step 3');
								if (result.targets.length) {
									result.targets[0].gain(event.togive, 'draw');
									player.line(result.targets[0], 'green');
									game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
									event.goto(1);
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
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
							},
						},
						ly_junshenbao_zhenSanGuo_guojia_shibai: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							derivation: 'ly_junshenbao_zhenSanGuo_guojia_yice',
							forced: true,
							init(player) {
								player.storage.ly_junshenbao_zhenSanGuo_guojia_shibai_num = 10;
							},
							content() {
								'step 0';
								player
									.chooseTarget('<span style=\"color: red\">十败</span>:是否对1名角色发动此技能', function (card, player, target) {
										if (game.me != player) return player.getFriends().includes(target) || target == player;
										return true;
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) return false;
										if ((player.getFriends().includes(target) && target.isMinHandcard()) || target.hp - target.countCards('h') > 2) return 100;
										if (target == player) return 98;
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.line(event.target, 'thunder');
								} else event.finish();
								('step 2');
								event.num = player.storage.ly_junshenbao_zhenSanGuo_guojia_shibai_num;
								('step 3');
								event.cards = get.cards(event.num);
								event.target.showCards(event.cards);
								if (event.isMine() == false) {
									event.dialog = ui.create.dialog('十败', event.cards);
								}
								('step 4');
								if (event.dialog) event.dialog.close();
								var dialog = ui.create.dialog('十败', event.cards);
								var num = event.num;
								event.target.chooseButton([1, num], dialog, true).filterButton = function (button) {
									if (ui.selected.buttons.length == 0) return true;
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (button.link.suit == ui.selected.buttons[i].link.suit) return true;
									}
									return false;
								};
								('step 5');
								event.cards2 = [];
								event.num1 = result.buttons.length;
								for (var i = 0; i < result.buttons.length; i++) {
									event.cards2.push(result.buttons[i].link);
									cards.remove(result.buttons[i].link);
								}
								('step 6');
								event.target.gain(event.cards2);
								if (event.cards2.length) event.target.$gain(event.cards2);
								for (var i = 0; i < cards.length; i++) {
									ui.discardPile.appendChild(cards[i]);
								}
								player.storage.ly_junshenbao_zhenSanGuo_guojia_shibai_num -= event.num1;
								if (player.storage.ly_junshenbao_zhenSanGuo_guojia_shibai_num <= 0) {
									player.$skill('十败');
									player.awakenSkill('ly_junshenbao_zhenSanGuo_guojia_shibai');
									player.addSkill('ly_junshenbao_zhenSanGuo_guojia_yice');
								}
							},
							ai: {
								threaten: 2,
								expose: 0.1,
							},
							group: 'ly_junshenbao_zhenSanGuo_guojia_shibai_num',
							subSkill: {
								num: {
									forced: true,
									popup: false,
									trigger: {
										global: 'gameStart',
										player: 'enterGame',
									},
									content() {
										game.playXu(['ly_junshenbao_zhenSanGuo_guojia_shibai1', 'ly_junshenbao_zhenSanGuo_guojia_shibai2'].randomGet());
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_guojia_shisheng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							derivation: 'ly_junshenbao_zhenSanGuo_guojia_huiqu',
							init(player) {
								player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng = [];
								player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng_num = 10;
							},
							mark: true,
							intro: {
								content: 'cards',
							},
							marktext: '<span style="color: blue">胜</span>',
							content() {
								'step 0';
								event.num = player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng_num;
								('step 1');
								event.cards = get.cards(event.num);
								player.showCards(event.cards);
								if (event.isMine() == false) {
									event.dialog = ui.create.dialog('十胜', event.cards);
								}
								('step 2');
								if (event.dialog) event.dialog.close();
								var dialog = ui.create.dialog('十胜', event.cards);
								var num = event.num;
								player.chooseButton([1, num], dialog, true).filterButton = function (button) {
									if (ui.selected.buttons.length == 0) return true;
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (get.type(button.link) == get.type(ui.selected.buttons[i].link)) return true;
									}
									return false;
								};
								('step 3');
								event.cards2 = [];
								for (var i = 0; i < result.buttons.length; i++) {
									event.cards2.push(result.buttons[i].link);
									cards.remove(result.buttons[i].link);
								}
								('step 4');
								if (event.cards2.length) player.$gain(event.cards2);
								player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng = player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng.concat(event.cards2);
								player.markSkill('ly_junshenbao_zhenSanGuo_guojia_shisheng');
								for (var i = 0; i < cards.length; i++) {
									ui.discardPile.appendChild(cards[i]);
								}
							},
							group: ['ly_junshenbao_zhenSanGuo_guojia_shisheng_num', 'ly_junshenbao_zhenSanGuo_guojia_shisheng_use', 'ly_junshenbao_zhenSanGuo_guojia_shisheng_reduce', 'ly_junshenbao_zhenSanGuo_guojia_shisheng_dis'],
							subSkill: {
								dis: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseEnd',
									},
									filter(event, player) {
										return player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng.length;
									},
									content() {
										player.$throw(player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng.slice(0), 1000);
										while (player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng.length) {
											player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng.shift().discard();
										}
										player.unmarkSkill('ly_junshenbao_zhenSanGuo_guojia_shisheng');
									},
								},
								reduce: {
									popup: false,
									forced: true,
									trigger: {
										source: 'damageEnd',
									},
									content() {
										'step 0';
										player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng_num--;
										('step 1');
										if (player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng_num < 1) {
											player.$skill('十胜');
											player.awakenSkill('ly_junshenbao_zhenSanGuo_guojia_shisheng');
											player.addSkill('ly_junshenbao_zhenSanGuo_guojia_huiqu');
										}
									},
								},
								num: {
									forced: true,
									popup: false,
									trigger: {
										global: 'gameStart',
										player: 'enterGame',
									},
									content() {
										game.playXu(['ly_junshenbao_zhenSanGuo_guojia_shisheng1', 'ly_junshenbao_zhenSanGuo_guojia_shisheng2'].randomGet());
									},
								},
							},
						},
						ly_junshenbao_zhenSanGuo_guojia_shisheng_use: {
							popup: false,
							silent: true,
							enable: 'chooseToUse',
							filter(event, player) {
								return player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng.length;
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog('十胜', player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng, 'hidden');
								},
								filter(button, player) {
									var evt = _status.event.parent;
									if (evt && evt.filterCard) {
										return evt.filterCard(button.link, player, evt);
									}
									return true;
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										viewAs: links[0],
										onuse(result, player) {
											player.storage.ly_junshenbao_zhenSanGuo_guojia_shisheng.remove(result.card);
										},
									};
								},
								prompt(links, player) {
									return '选择' + get.translation(links) + '的目标';
								},
							},
							ai: {
								order: 6,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
								useful: -1,
								value: -1,
							},
						},
						ly_junshenbao_zhenSanGuo_huangyueying_muniu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'discardAfter',
							},
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQ
										if (get.position(i) == 'd') {
											return true;
										}
									}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								event.cards = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.position(trigger.cards[i]) == 'd') {
										event.cards.push(trigger.cards[i]);
										ui.special.appendChild(trigger.cards[i]);
									}
								}
								('step 1');
								if (event.cards.length) {
									var goon = false;
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											//QQ
											if (i.name == 'du') {
												goon = true;
												break;
											}
										}
									if (!goon) {
										goon = game.hasPlayer(function (current) {
											return player != current && get.attitude(player, current) > 1;
										});
									}
									player
										.chooseCardButton(get.prompt('ly_junshenbao_zhenSanGuo_huangyueying_muniu'), event.cards, [1, event.cards.length])
										.set('ai', function (button) {
											if (!_status.event.goon || ui.selected.buttons.length) return 0;
											if (button.link.name == 'du') return 2;
											return 1;
										})
										.set('goon', goon);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.togive = result.links.slice(0);
									player
										.chooseTarget('将' + get.translation(result.links) + '交给1名角色', true, function (card, player, target) {
											return target != player;
										})
										.set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											if (_status.event.enemy) {
												return -att;
											} else {
												if (att > 2) return att / Math.sqrt(1 + target.countCards('h'));
												return att / Math.sqrt(1 + target.countCards('h')) / 5;
											}
										})
										.set('enemy', get.value(event.togive[0]) < 0);
								} else event.finish();
								('step 3');
								if (result.bool) {
									player.line(result.targets, 'fire');
									for (var i = 0; i < event.togive.length; i++) {
										event.cards.remove(event.togive[i]);
									}
									result.targets[0].gain(event.togive, player);
									result.targets[0].$gain2(event.togive);
									event.goto(1);
								} else event.finish();
							},
							ai: {
								threaten: 2,
								expose: 0.2,
							},
						},
						ly_junshenbao_zhenSanGuo_huangyueying_jiqiao: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								player: 'useCardBegin',
							},
							filter(event, player) {
								if (get.type(event.card) != 'trick') return false;
								return event.targets.length == 1;
							},
							content() {
								'step 0';
								player
									.chooseTarget('<span style="color: red">机巧</span>:是否指定至多2名不是' + get.translation(trigger.card) + '目标的其他角色成为此牌<span style="color: red">额外目标</span>', [1, 2], function (card, player, target) {
										var trigger = _status.event.getTrigger();
										return target != trigger.targets[0];
									})
									.set('autodelay', true)
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, player, player);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
									player.line(event.targets, 'fire');
									event.nums = result.targets.length;
								} else event.finish();
								('step 2');
								if (targets && targets.length) {
									for (var i = 0; i < targets.length; i++) {
										trigger.targets.push(targets[i]);
									}
								}
							},
							mod: {
								targetInRange(card, player, target, now) {
									var type = get.type(card);
									if (type == 'trick' || type == 'delay') return true;
								},
							},
							ai: {
								threaten: 2,
								expose: 0.1,
							},
						},
						ly_junshenbao_zhenSanGuo_huangyueying_lingxin: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return (get.type(event.card, 'trick') == 'trick' || get.type(event.card, 'delay') == 'delay') && event.cards[0] && event.cards[0] == event.card;
							},
							content() {
								'step 0';
								if (get.type(trigger.card) == 'trick') {
									event.goto(1);
								} else {
									event.goto(3);
								}
								('step 1');
								player.chooseBool('<span style="color: red">灵心</span>:是否摸1张牌');
								('step 2');
								if (result.bool) {
									player.draw();
									event.finish();
								} else {
									event.finish();
								}
								('step 3');
								player
									.chooseTarget('<span style="color: red">灵心</span>:是否弃置1名角色<span style="color: gold">区域内</span>1张牌', function (card, player, target) {
										return target.countCards('hej') > 0;
									})
									.set('ai', function (target) {
										if (player.getFriends().includes(target) || target == player) {
											if (target.countCards('j') > 0) {
												return 100;
											}
											if (target.isDamaged() && target.getEquip('baiyin')) return 99;
											return false;
										} else {
											if (target.countCards('he') < 1 && target.countCards('j') > 0) return false;
											if (target.countCards('he') == 1 && target.isDamaged() && target.getEquip('baiyin')) return false;
											if ((target.hasSkillTag('receiveEquip') || target.hasSkillTag('equipDraw')) && target.countCards('h') == 0 && target.countCards('e') > 0) return false;
											return 10;
										}
										return false;
									});
								('step 4');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'fire');
									player.discardPlayerCard('hej', true, target);
								} else {
									event.finish();
								}
							},
							ai: {
								moreDraw: true,
								threaten: 2,
								expose: 0.1,
							},
						},
						ly_junshenbao_sociatyBeast_fuxi_longzhi: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							init(player) {
								player.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi = [];
							},
							intro: {
								content: 'cards',
							},
							marktext: '<span style="color: gold">章</span>',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num += Math.min(3, player.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi.length);
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
							global: 'ly_junshenbao_sociatyBeast_fuxi_longzhi_gain',
						},
						ly_junshenbao_sociatyBeast_fuxi_longzhi_gain: {
							popup: false,
							silent: true,
							enable: 'phaseUse',
							usable: 1,
							line: false,
							filter(event, player) {
								return player.countCards('h', { type: 'trick' }) > 0;
							},
							filterTarget(card, player, target) {
								if (player.getEnemies().includes(target)) return false;
								return target.hasSkill('ly_junshenbao_sociatyBeast_fuxi_longzhi');
							},
							filterCard(card) {
								return get.type(card) == 'trick';
							},
							check(card) {
								if (card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wuzhong' || card.name == 'zengbing' || card.name == 'nanman' || card.name == 'guohe' || card.name == 'shunshou' || card.name == 'yuanjiao' || card.name == 'yiyi') return 100;
								return 8 - get.value(card);
							},
							discard: false,
							prepare: 'give',
							content() {
								'step 0';
								player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
								if (target.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi.length > 4) {
									player.gain(cards);
									player.$gain(cards);
									game.log(target, '<span style="color: red">"章"数已达上限</span>');
									event.finish();
								}
								('step 1');
								target.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi = target.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi.concat(cards);
								target.markSkill('ly_junshenbao_sociatyBeast_fuxi_longzhi');
								game.log(player, '将', cards, '置于', target, '武将牌上作为<章>');
								('step 2');
								player.draw();
							},
							ai: {
								threaten: 2,
								order: 9,
								result: {
									player(player, target) {
										if (player.getEnemies().includes(target)) {
											if (player.hp < 3) return 1;
											return -1;
										}
										return 1;
									},
								},
							},
						},
						ly_junshenbao_sociatyBeast_fuxi_lingjie: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							enable: 'chooseToUse',
							init(player) {
								player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie = [];
							},
							filter(event, player) {
								return player.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi.length;
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog('灵碣', player.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi, 'hidden');
								},
								filter(button, player) {
									var evt = _status.event.parent;
									if (player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie && player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie.includes(button.link)) {
										return false;
									}
									if (evt && evt.filterCard) {
										return evt.filterCard(button.link, player, evt);
									}
									return true;
								},
								check(button) {
									if (button.link.name == 'du') return -2;
									var player = _status.event.player;
									if (button.link.name == 'xingjiegoutong' && player.countCards('h') > 1) return -2;
									if (get.select(get.info(button.link).selectTarget)[1] == -1) {
										if (get.type(button.link) == 'delay') return -1;
										if (get.type(button.link) == 'equip') {
											var current = player.getCards('e', { subtype: get.subtype(button.link) })[0];
											if (current && get.equipValue(current) >= get.equipValue(button.link)) return -1;
											return 1;
										}
										if (get.tag(button.link, 'multitarget')) return -1;
										if (button.link.name == 'huoshaolianying') return -1;
									}
									if (button.link.name == 'jiu') {
										if (get.effect(player, { name: 'jiu' }, player) > 0) {
											return 1;
										}
										return -1;
									}
									return 1;
								},
								backup(links, player) {
									return {
										filterCard() {
											return true;
										},
										selectCard: 1,
										viewAs: links[0],
										onuse(result, player) {
											if (!player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie) player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie = [];
											player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie.push(result.card);
											if (player.hasSkill('sky')) player.draw();
										},
									};
								},
								prompt(links, player) {
									return '选择' + get.translation(links) + '的目标';
								},
							},
							ai: {
								threaten: 2.1,
								order: 6,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
								useful: -1,
								value: -1,
							},
							group: 'ly_junshenbao_sociatyBeast_fuxi_lingjie_delete',
							subSkill: {
								delete: {
									popup: false,
									forced: true,
									trigger: {
										global: 'phaseEnd',
									},
									content() {
										delete player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie;
									},
								},
							},
						},
						ly_junshenbao_sociatyBeast_fuxi_feizhang: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								player: 'useCard',
							},
							usable: 1,
							forced: true,
							filter(event, player) {
								return get.type(event.card) == 'trick' && event.targets.length;
							},
							content() {
								'step 0';
								player
									.chooseTarget('<span style="color: red">斐章</span>:是否指定1名不是' + get.translation(trigger.card) + '目标的其他角色成为此牌<span style="color: red">额外目标</span>', function (card, player, target) {
										var trigger = _status.event.getTrigger();
										return target != trigger.targets[0];
									})
									.set('autodelay', true)
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, player, player);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets[0];
									player.line(event.targets, ['fire', 'thunder', 'green', 'white'].randomGet());
									trigger.targets.push(event.targets);
									game.log(event.targets, '<span style="color: red">成为</span>', trigger.card, '<span style="color: red">额外目标</span>');
								}
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_fuxi_bowen: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							init(player) {
								player.storage.ly_junshenbao_sociatyBeast_fuxi_bowen = 0;
							},
							popup: false,
							forced: true,
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								player.storage.ly_junshenbao_sociatyBeast_fuxi_bowen++;
							},
							mod: {
								maxHandcard(player, num) {
									return (num += player.storage.ly_junshenbao_sociatyBeast_fuxi_bowen);
								},
							},
							group: ['ly_junshenbao_sociatyBeast_fuxi_bowen_delete', 'ly_junshenbao_sociatyBeast_fuxi_bowen_effect'],
							subSkill: {
								delete: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										player.storage.ly_junshenbao_sociatyBeast_fuxi_bowen -= player.storage.ly_junshenbao_sociatyBeast_fuxi_bowen;
									},
								},
								effect: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseDiscardBegin',
									},
									content() { },
								},
							},
						},
						ly_junshenbao_sociatyBeast_baxia_longxuan: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							init(player) {
								player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan = [];
							},
							intro: {
								content: 'cards',
							},
							marktext: '<span style="color: gold">铭</span>',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								trigger.num--;
							},
							mod: {
								maxHandcard(player, num) {
									return num - player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length;
								},
							},
							global: 'ly_junshenbao_sociatyBeast_baxia_longxuan_gain',
						},
						ly_junshenbao_sociatyBeast_baxia_longxuan_gain: {
							popup: false,
							silent: true,
							enable: 'phaseUse',
							usable: 1,
							line: false,
							filter(event, player) {
								return player.countCards('h', { type: 'trick' }) > 0;
							},
							filterTarget(card, player, target) {
								if (player == target) return false;
								if (player.getEnemies().includes(target)) return false;
								return target.hasSkill('ly_junshenbao_sociatyBeast_baxia_longxuan');
							},
							filterCard(card) {
								return get.type(card) == 'trick';
							},
							discard: false,
							prepare: 'give',
							content() {
								'step 0';
								player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
								target.storage.ly_junshenbao_sociatyBeast_baxia_longxuan = target.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.concat(cards);
								target.markSkill('ly_junshenbao_sociatyBeast_baxia_longxuan');
								game.log(player, '将', cards, '置于', target, '武将牌上作为<铭>');
								('step 1');
								player.recover();
								target.gainMaxHp();
							},
							ai: {
								threaten: 2,
								order: 9,
								result: {
									player(player, target) {
										if (player.getEnemies().includes(target)) {
											if (player.hp < 3) return 1;
											return -1;
										}
										return 1;
									},
								},
							},
						},
						ly_junshenbao_sociatyBeast_baxia_lingxi: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 0 && player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length;
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								player.chooseCardButton('<span style=\"color: red\">弃置1张"铭"</span>', true, player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan);
								('step 2');
								var card = result.links[0];
								player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.remove(card);
								card.discard();
								player.$throw(card);
								game.log(player, '将', card, '置入弃牌堆');
								if (player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length == 0) {
									player.unmarkSkill('ly_junshenbao_sociatyBeast_baxia_longxuan');
								}
								player.loseMaxHp();
								('step 3');
								game.countPlayer(function (current) {
									if (player.getFriends().includes(current) || current == player) {
										player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
										if (player.hasSkill('sea')) current.draw(2);
										else current.draw();
									}
								});
								('step 4');
								event.num--;
								if (event.num > 0) event.goto(1);
							},
							ai: {
								threaten: 2,
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (target.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length == 0) return;
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
							},
						},
						ly_junshenbao_sociatyBeast_baxia_shuliu: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								var card = trigger.card;
								player.$gain(card);
								player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan = player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.concat(card);
								player.markSkill('ly_junshenbao_sociatyBeast_baxia_longxuan');
								game.log(player, '将', card, '置于武将牌上作为<铭>');
								player.gainMaxHp();
							},
						},
						ly_junshenbao_sociatyBeast_baxia_jienu: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length >= 7;
							},
							content() {
								'step 0';
								event.num = player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length;
								('step 1');
								if (event.num > 0) {
									player.recover();
									player.damage();
									event.num--;
									event.redo();
								}
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_bian_longshi: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							init(player) {
								player.storage.ly_junshenbao_sociatyBeast_bian_longshi = 0;
							},
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (player.storage.ly_junshenbao_sociatyBeast_bian_longshi > 0) return false;
								if (get.type(event.card) != 'basic') return false;
								if (event.targets.length < 1) return false;
								return true;
							},
							content() {
								'step 0';
								if (trigger.targets.length) {
									player.line(trigger.targets, ['fire', 'thunder', 'green', 'white'].randomGet());
									for (var i = 0; i < trigger.targets.length; i++) {
										trigger.targets[i].draw();
									}
								}
								if (!player.hasSkill('land')) event.finish();
								('step 1');
								game.countPlayer(function (current) {
									if (player.getFriends().includes(current) || current == player) {
										player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
										current.draw();
									}
								});
							},
							group: ['ly_junshenbao_sociatyBeast_bian_longshi_judge', 'ly_junshenbao_sociatyBeast_bian_longshi_clear'],
							subSkill: {
								judge: {
									popup: false,
									forced: true,
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										return event.num > 0;
									},
									content() {
										player.storage.ly_junshenbao_sociatyBeast_bian_longshi++;
									},
								},
								clear: {
									popup: false,
									forced: true,
									trigger: {
										global: 'phaseEnd',
									},
									content() {
										if (player.storage.ly_junshenbao_sociatyBeast_bian_longshi > 0) player.storage.ly_junshenbao_sociatyBeast_bian_longshi -= player.storage.ly_junshenbao_sociatyBeast_bian_longshi;
									},
								},
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_bian_songyan: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							init(player) {
								player.storage.ly_junshenbao_sociatyBeast_bian_songyan = 0;
							},
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (player.storage.ly_junshenbao_sociatyBeast_bian_songyan > 0) return false;
								if (get.type(event.card) != 'trick') return false;
								if (event.targets.length < 1) return false;
								return true;
							},
							content() {
								'step 0';
								if (trigger.targets.length) {
									player.line(trigger.targets, ['fire', 'thunder', 'green', 'white'].randomGet());
									for (var i = 0; i < trigger.targets.length; i++) {
										trigger.targets[i].draw();
									}
								}
								if (!player.hasSkill('land')) event.finish();
								('step 1');
								game.countPlayer(function (current) {
									if (player.getFriends().includes(current) || current == player) {
										player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
										current.draw();
									}
								});
							},
							group: ['ly_junshenbao_sociatyBeast_bian_songyan_judge', 'ly_junshenbao_sociatyBeast_bian_songyan_clear'],
							subSkill: {
								judge: {
									popup: false,
									forced: true,
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										return event.num > 0;
									},
									content() {
										player.storage.ly_junshenbao_sociatyBeast_bian_songyan++;
									},
								},
								clear: {
									popup: false,
									forced: true,
									trigger: {
										global: 'phaseEnd',
									},
									content() {
										if (player.storage.ly_junshenbao_sociatyBeast_bian_songyan > 0) player.storage.ly_junshenbao_sociatyBeast_bian_songyan -= player.storage.ly_junshenbao_sociatyBeast_bian_songyan;
									},
								},
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_bian_suwei: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (player.getFriends(true).includes(event.player)) return false;
								if (!event.targets.includes(player)) return false;
								if (_status.currentPhase != event.player) return false;
								return true;
							},
							content() {
								player.discardPlayerCard('h', trigger.player, true);
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_bian_hualao: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								global: ['gameStart', 'changeHp'],
								player: 'enterGame',
							},
							filter(event, player) {
								var num = game.countPlayer(function (current) {
									return player.getFriends().includes(current) && current.hp;
								});
								if (event.player) {
									if (player.getEnemies().includes(event.player)) return false;
								}
								if (num == 0) return false;
								if (num <= 3) return true;
								return false;
							},
							content() {
								game.countPlayer(function (current) {
									if (player.getFriends().includes(current)) {
										player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
										current.addSkill('ly_junshenbao_sociatyBeast_bian_hualao_protect');
									}
								});
							},
							group: 'ly_junshenbao_sociatyBeast_bian_hualao_clear',
							subSkill: {
								protect: {
									mod: {
										targetEnabled(card, player, target) {
											if (player.getEnemies().includes(target)) return false;
										},
									},
								},
								clear: {
									popup: false,
									forced: true,
									trigger: {
										global: ['gameStart', 'changeHp'],
										player: ['enterGame', 'dieBegin'],
									},
									filter(event, player) {
										var num = game.countPlayer(function (current) {
											return player.getFriends().includes(current) && current.hp;
										});
										if (num > 3) return true;
										return false;
									},
									content() {
										game.countPlayer(function (current) {
											if (player.getFriends().includes(current)) {
												current.removeSkill('ly_junshenbao_sociatyBeast_bian_hualao_protect');
											}
										});
									},
								},
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_pulao_longhou: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseEnd',
							},
							content() {
								var list = game.filterPlayer(function (current) {
									return player.canUse('wanjian', current);
								});
								list.sort(lib.sort.seat);
								player.useCard({ name: 'wanjian' }, list);
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_pulao_qiejing: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								return event.targets.length > 2;
							},
							content() {
								'step 0';
								player.chooseToDiscard('he', true);
								player.loseHp();
								('step 1');
								if (player.hasSkill('sea')) player.draw();
							},
						},
						ly_junshenbao_sociatyBeast_pulao_mingyin: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							priority: -100,
							trigger: {
								source: 'damageBegin',
							},
							content() {
								player.line(trigger.player, ['fire', 'thunder', 'green', 'white'].randomGet());
								var num = trigger.num;
								trigger.cancel();
								trigger.player.loseHp(num);
							},
							ai: {
								jueqing: true,
							},
						},
						ly_junshenbao_sociatyBeast_pulao_duyuan: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								source: 'damageBefore',
							},
							priority: 100,
							content() {
								player.line(trigger.player, ['fire', 'thunder', 'green', 'white'].randomGet());
								trigger.num++;
							},
							mod: {
								playerEnabled(card, player, target) {
									if (player.getFriends().includes(target)) return false;
								},
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_chaofeng_longlin: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('h', { subtype: 'equip2' }) > 0;
							},
							filterCard(card) {
								return get.subtype(card) == 'equip2';
							},
							discard: false,
							prepare: 'throw',
							content() {
								'step 0';
								player.lose(cards[0], ui.special);
								('step 1');
								game.countPlayer(function (current) {
									if ((current == player || player.getFriends().includes(current)) && current.isDamaged()) {
										player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
										current.recover();
									}
								});
								if (!player.hasSkill('sky')) event.finish();
								('step 2');
								game.countPlayer(function (current) {
									if (current == player || player.getFriends().includes(current)) {
										var list = [];
										list.push('bagua');
										list.push('tengjia');
										list.push('baiyin');
										list.push('renwang');
										var link = list.randomGet();
										var card = game.createCard({ name: link });
										current.equip(card);
									}
								});
							},
							ai: {
								order: 4,
								threaten: 2,
								result: {
									player: 1,
								},
								effect: {
									target(card, player, target) {
										if (player == target && get.subtype(card) == 'equip2') {
											if (get.equipValue(card) <= 7.5) return 0;
										}
										if (target.getEquip(2)) return;
										return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
									},
								},
							},
						},
						ly_junshenbao_sociatyBeast_chaofeng_zhijiao: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							enable: 'phaseUse',
							usable: 1,
							line: false,
							filter(event, player) {
								return player.countCards('h', { subtype: 'equip3' }) > 0 || player.countCards('h', { subtype: 'equip4' }) > 0;
							},
							filterCard(card) {
								return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4';
							},
							discard: false,
							prepare: 'give',
							filterTarget(card, player, target) {
								return target != player && (!target.getEquips(3) || !target.getEquips(4));
							},
							content() {
								'step 0';
								player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
								target.equip(cards[0]);
								('step 1');
								player.gain(
									get.cardPile(function (card) {
										return get.color(card) == 'red';
									}),
									'gain2'
								);
								('step 2');
								target.gain(
									get.cardPile(function (card) {
										return get.color(card) == 'red';
									}),
									'gain2'
								);
							},
							ai: {
								order: 10,
								threaten: 2,
								result: {
									target: 1,
								},
							},
						},
						ly_junshenbao_sociatyBeast_chaofeng_zhixie: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								global: 'phaseEnd',
							},
							filter(event, player) {
								return event.player != player && !event.player.getStat('damage');
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget('<span style=\"color: red\">止邪:是否获得场上1张装备牌</span>', function (card, player, target) {
										return target.countCards('e') > 0;
									})
									.set('ai', function (target) {
										if (player.getFriends().includes(target)) {
											if (target.isDamaged() && target.getEquip('baiyin')) return 10;
											if (target.hasSkillTag('equipDraw')) return 9;
											return false;
										}
										if (player.getEnemies().includes(target)) {
											if (!target.hasSkillTag('equipDraw')) {
												if (target.isDamaged() && target.countCards('e') < 1 && target.getEquip('baiyin')) return false;
												return 11;
											}
											return false;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
									player.gainPlayerCard('e', target, true);
								}
							},
						},
						ly_junshenbao_sociatyBeast_chaofeng_haoxian: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								var num = game.countPlayer(function (current) {
									return player.getEnemies().includes(current) && current.countCards('e');
								});
								if (num >= 4) return true;
								return false;
							},
							content() {
								'step 0';
								event.num = game.countPlayer(function (current) {
									return player.getEnemies().includes(current) && current.countCards('e');
								});
								game.countPlayer(function (current) {
									if (player.getEnemies().includes(current) && current.countCards('e') > 0) {
										var card = current.getCards('e');
										current.discard(card);
									}
								});
								('step 1');
								player.draw(event.num);
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_yazi_longlie: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'shaBegin',
							},
							content() {
								if (!player.hasSkill('land')) trigger.directHit = true;
								else player.addTempSkill('ly_junshenbao_sociatyBeast_yazi_longlie_damage', { player: 'shaAfter' });
							},
							subSkill: {
								damage: {
									popup: false,
									forced: true,
									trigger: {
										source: 'damageBegin',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										trigger.num++;
										game.log(player, '<span style="color: red">龙烈技能效果生效,此杀伤害+1</span>');
									},
								},
							},
							ai: {
								shaHit: true,
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_yazi_chaiyue: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								game.countPlayer(function (current) {
									if (player.getEnemies().includes(current) && !trigger.targets.includes(current)) {
										player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
										trigger.targets.push(current);
									}
								});
							},
						},
						ly_junshenbao_sociatyBeast_yazi_langri: {
							nobracket: true,
							mod: {
								targetInRange(card, player, target, now) {
									if (card.name == 'sha') return true;
								},
							},
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.name == 'sha' && player.hasSkill && player.hasSkill('land')) return true;
									return false;
								},
							},
						},
						ly_junshenbao_sociatyBeast_yazi_bibao: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								player.loseHp();
								event.targets = game
									.filterPlayer(function (current) {
										return player.getEnemies().includes(current) && player.canUse({ name: 'sha' }, current);
									})
									.sortBySeat();
								('step 1');
								if (event.targets.length) {
									var target = event.targets.randomGet();
									player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
									player.useCard({ name: 'sha' }, target, false);
								}
							},
						},
						ly_junshenbao_sociatyBeast_chiwen_longao: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								global: ['gameStart', 'phaseBefore'],
								player: 'enterGame',
							},
							popup: false,
							forced: true,
							content() {
								game.countPlayer(function (current) {
									if (player.getFriends().includes(current) && !current.hasSkill('ly_junshenbao_sociatyBeast_chiwen_longao_cancel')) {
										current.addSkill('ly_junshenbao_sociatyBeast_chiwen_longao_cancel');
									}
								});
							},
							subSkill: {
								cancel: {
									popup: false,
									forced: true,
									trigger: { player: 'damageBefore' },
									filter(event, player) {
										if (!event.nature) return false;
										return true;
									},
									content() {
										game.log(player, '<span style="color: red">龙鳌技能效果生效</span>');
										if (player.hasSkill('sea')) {
											trigger.num -= 2;
											game.log(player, '<span style="color: red">受到伤害-2</span>');
										} else {
											trigger.num--;
											game.log(player, '<span style="color: red">受到伤害-1</span>');
										}
									},
									ai: {
										nothunder: true,
										nofire: true,
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'fireDamage') || get.tag(card, 'thunderDamage')) return 0;
											},
										},
									},
								},
							},
						},
						ly_junshenbao_sociatyBeast_chiwen_quyan: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								global: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								if (!event.nature) return false;
								if (player.hasSkill('sea') && player.getFriends().includes(event.source)) return true;
								if (!player.hasSkill('sea') && event.source == player) return true;
								return false;
							},
							content() {
								trigger.num++;
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_chiwen_yuhuo: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard(card) {
								return card.suit == 'diamond';
							},
							viewAs: {
								name: 'sha',
								nature: 'fire',
								suit: 'heart',
								number: 7,
								viewAsFilter(player) {
									if (!player.countCards('h', { suit: 'diamond' })) return false;
								},
								prompt: '<span style="color: red">将1张♢牌当火杀使用或打出</span>',
								check(card) {
									return 7 - get.value(card);
								},
								cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'heart', number: 7, name: 'tao', cardid: '2759387371', clone: { name: 'tao', suit: 'heart', number: 7, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true }, timeout: 1288, original: 'h' }],
							},
							ai: {
								basic: {
									useful: [5, 1],
									value: [5, 1],
								},
								order() {
									if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
									return 3;
								},
								result: {
									target(player, target) {
										if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
											if (get.attitude(player, target) > 0) {
												return -6;
											} else {
												return -3;
											}
										}
										return -1.5;
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
							group: 'ly_junshenbao_sociatyBeast_chiwen_yuhuo_tiesuo',
							subSkill: {
								tiesuo: {
									popup: false,
									enable: 'phaseUse',
									line: false,
									discard: false,
									filter(event, player) {
										return player.countCards('he', { suit: 'diamond' }) > 0;
									},
									prompt: '<span style="color: red">是否将1张黑色牌当"铁索连环"使用</span>',
									prepare: 'throw',
									position: 'h',
									filterCard: {
										color: 'black',
									},
									selectTarget: [1, 2],
									filterTarget(card, player, target) {
										return lib.filter.targetEnabled({ name: 'tiesuo' }, player, target);
									},
									check(card) {
										return 7 - get.value(card);
									},
									content() {
										player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
										var next = player.useCard({ name: 'tiesuo' }, target, cards);
										next.animate = false;
										next.audio = false;
									},
									ai: {
										threaten: 2,
										result: {
											target(player, target) {
												if (target.isLinked()) return 1;
												return get.effect(target, { name: 'tiesuo' }, player, target);
											},
										},
										order: 9,
									},
								},
							},
						},
						ly_junshenbao_sociatyBeast_chiwen_fubing: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseUseBegin',
							},
							content() {
								'step 0';
								event.targets = game
									.filterPlayer(function (current) {
										return player.getEnemies().includes(current) && !current.isLinked();
									})
									.sortBySeat();
								('step 1');
								if (event.targets.length) {
									var target = event.targets.randomGet();
									player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
									target.link();
								}
								('step 2');
								event.targets = game
									.filterPlayer(function (current) {
										return player.getFriends().includes(current) && current.isLinked();
									})
									.sortBySeat();
								('step 3');
								if (event.targets.length) {
									var target = event.targets.randomGet();
									player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
									target.link();
								}
							},
						},
						ly_junshenbao_sociatyBeast_suanni_longzhen: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								global: 'gainEnd',
							},
							usable: 1,
							filter(event, player) {
								if (player.getEnemies().includes(event.player)) return false;
								if (_status.currentPhase == event.player) return false;
								return true;
							},
							content() {
								var target = trigger.player;
								player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
								target.draw(2);
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_suanni_ruiyan: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseEnd',
							},
							content() {
								if (player.hasSkill('land')) player.draw(3);
								else player.draw(1);
							},
							ai: {
								threaten: 2,
								moreDraw: true,
							},
						},
						ly_junshenbao_sociatyBeast_suanni_raoleng: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							enable: 'phaseUse',
							line: false,
							usable: 2,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							selectTarget: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							filterCard: true,
							discard: false,
							prepare: 'give',
							selectCard: 1,
							check(card) {
								return 8 - get.value(card);
							},
							content() {
								player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
								target.gain(cards, player);
							},
							ai: {
								order: 7,
								result: {
									target: 1,
								},
							},
						},
						ly_junshenbao_sociatyBeast_suanni_xiangjin: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							enable: 'phaseUse',
							usable: 1,
							line: false,
							filterTarget(card, player, target) {
								return target.countCards('h') != player.countCards('h');
							},
							selectTarget: 1,
							content() {
								player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
								var num = player.countCards('h');
								var nh = target.countCards('h');
								if (num < nh) target.chooseToDiscard(nh - num, true);
								else target.draw(num - nh);
							},
							ai: {
								order: 2,
								result: {
									target(player, target) {
										return player.countCards('h') - target.countCards('h');
									},
								},
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_qiuniu_jilv: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								global: 'judgeEnd',
							},
							filter(event, player) {
								if (player.getEnemies().includes(event.player)) return false;
								if (get.owner(event.result.card)) {
									return false;
								}
								if (event.nogain && event.nogain(event.result.card)) {
									return false;
								}
								return true;
							},
							content() {
								player.gain(trigger.result.card);
								player.$gain2(trigger.result.card);
							},
						},
						ly_junshenbao_sociatyBeast_qiuniu_heming: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								global: ['phaseDrawSkipped', 'phaseDrawCancelled', 'phaseJudgeSkipped', 'phaseJudgeCancelled', 'phaseUseSkipped', 'phaseUseCancelled', 'phaseDiscardSkipped', 'phaseDiscardCancelled'],
							},
							forced: true,
							filter(event, player) {
								return event.player != player;
							},
							content() {
								'step 0';
								player
									.chooseTarget('<span style="color: red">和鸣:是否令1名角色摸1张牌</span>', function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										if (player == target || player.getFriends().includes(target)) {
											if (!target.hasJudge('lebu')) {
												if (target.countCards('h') < 4) return 10;
												return 9;
											}
											return 5;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
									target.draw();
								}
							},
						},
						ly_junshenbao_sociatyBeast_qiuniu_lige: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								global: 'judge',
							},
							forced: true,
							content() {
								'step 0';
								player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【<span style=\"color: red\">离歌</span>】？', 'he').ai = function (card) {
									var trigger = _status.event.parent._trigger;
									var player = _status.event.player;
									var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
									var attitude = get.attitude(player, trigger.player);
									if (attitude == 0 || result == 0) return 0;
									if (attitude > 0) {
										return result;
									} else {
										return -result;
									}
								};
								('step 1');
								if (result.bool) {
									player.respond(result.cards, 'highlight');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.$gain2(trigger.player.judging[0]);
									player.gain(trigger.player.judging[0]);
									trigger.player.judging[0] = result.cards[0];
									trigger.position.appendChild(result.cards[0]);
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
								}
								('step 3');
							},
							ai: {
								tag: {
									rejudge: 1,
								},
								threaten: 2,
							},
						},
						ly_junshenbao_sociatyBeast_qiuniu_longxuan: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							group: ['ly_junshenbao_sociatyBeast_qiuniu_longxuan_lebu', 'ly_junshenbao_sociatyBeast_qiuniu_longxuan_bingliang'],
							subSkill: {
								lebu: {
									popup: false,
									enable: 'phaseUse',
									usable: 1,
									line: false,
									discard: false,
									filter(event, player) {
										return player.countCards('he', { suit: 'diamond' }) > 0;
									},
									prompt: '<span style="color: red">是否将1张♢牌当"乐不思蜀"使用</span>',
									prepare: 'throw',
									position: 'he',
									filterCard: {
										suit: 'diamond',
									},
									filterTarget(card, player, target) {
										if (player == target) return false;
										return lib.filter.targetEnabled({ name: 'lebu' }, player, target);
									},
									check(card) {
										return 7 - get.value(card);
									},
									content() {
										player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
										var next = player.useCard({ name: 'lebu' }, target, cards);
										next.animate = false;
										next.audio = false;
									},
									ai: {
										threaten: 2,
										result: {
											target(player, target) {
												return get.effect(target, { name: 'lebu' }, player, target);
											},
										},
										order: 9,
									},
								},
								bingliang: {
									enable: 'phaseUse',
									usable: 1,
									line: false,
									discard: false,
									filter(event, player) {
										if (!player.hasSkill('sky')) return false;
										return player.countCards('he', { suit: 'club' }) > 0;
									},
									prepare: 'throw',
									position: 'he',
									filterCard: {
										suit: 'club',
									},
									prompt: '<span style="color: red">是否将1张♧牌当"兵粮寸断"使用</span>',
									filterTarget(card, player, target) {
										if (player == target) return false;
										return lib.filter.targetEnabled({ name: 'bingliang' }, player, target);
									},
									check(card) {
										return 7 - get.value(card);
									},
									content() {
										player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
										var next = player.useCard({ name: 'bingliang' }, target, cards);
										next.animate = false;
										next.audio = false;
									},
									ai: {
										threaten: 1.5,
										result: {
											target(player, target) {
												return get.effect(target, { name: 'bingliang' }, player, target);
											},
										},
										order: 9,
									},
								},
							},
						},
						ly_junShenChallenge_shenjiang_shenshi_fengshen: {
							mode: ['boss'],
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 0;
							},
							usable: 1,
							content() {
								player.line(game.boss, ['fire', 'thunder', 'green', 'white'].randomGet());
								game.boss.draw();
							},
							group: ['ly_junShenChallenge_shenjiang_shenshi_fengshen_one', 'ly_junShenChallenge_shenjiang_shenshi_fengshen_damage'],
							subSkill: {
								one: {
									popup: false,
									forced: true,
									trigger: {
										player: 'recoverEnd',
									},
									filter(event, player) {
										return event.num > 0;
									},
									usable: 1,
									content() {
										player.line(game.boss, ['fire', 'thunder', 'green', 'white'].randomGet());
										game.boss.recover();
									},
								},
								damage: {
									enable: 'phaseUse',
									usable: 1,
									line: false,
									filterTarget(card, player, target) {
										return target != player;
									},
									content() {
										player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
										target.damage('thunder');
									},
									ai: {
										order: 2,
										result: {
											target: -3,
										},
									},
								},
							},
						},
						ly_junShenChallenge_shenjiang: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								global: 'gameStart',
							},
							priority: 100,
							content() {
								'step 0';
								if (get.mode() == 'identity') event.goto(1);
								else event.goto(4);
								('step 1');
								if (player.identity != 'zhu') {
									event.target = game.zhu;
									game.zhu.identity = player.identity;
									game.zhu.maxHp--;
									game.zhu.identityShown = true;
									game.zhu.update();
									player.identity = 'zhu';
									player.setIdentity('zhu');
									player.identityShown = true;
									game.zhu = player;
									player.update();
								}
								player.maxHp = game.countPlayer();
								player.hp = game.countPlayer();
								player.draw(4);
								player.update();
								('step 2');
								game.countPlayer(function (current) {
									if (current != player && current != player.previous && current != player.next) {
										current.identity = 'fan';
										current.identityShown = true;
										current.showIdentity();
										current.setIdentity('逆神者');
										current.node.identity.dataset.color = 'nei';
										current.maxHp++;
										current.hp++;
										current.update();
										current.draw(2);
									}
								});
								('step 3');
								game.countPlayer(function (current) {
									if (current != player && current == player.next) {
										current.identity = 'zhong';
										current.group = player.group;
										current.identityShown = true;
										current.setIdentity('神使');
										current.node.identity.dataset.color = 'zhong';
										current.changeHujia(current.maxHp);
									}
									if (current != player && current == player.previous) {
										current.identity = 'zhong';
										current.group = player.group;
										current.showIdentity();
										current.identityShown = true;
										current.setIdentity('神使');
										current.node.identity.dataset.color = 'zhong';
										current.changeHujia(current.maxHp);
									}
								});
								event.finish();
								('step 4');
								var fellow = game.addFellow(1, 'ly_junShenChallenge_shenjiang_shenshi');
								fellow.style.left = 'calc(55% - 75px)';
								fellow.style.top = 'calc(25%)';
								fellow.classList.add('minskin');
								fellow.side = player.side;
								fellow.identity = player.identity;
								if (fellow.identity == 'zhu') fellow.identity = 'zhong';
								fellow.setIdentity('神使');
								fellow.node.identity.dataset.color = 'zhong';
								fellow.draw();
								('step 5');
								var fellow = game.addFellow(1, 'ly_junShenChallenge_shenjiang_shenshi');
								fellow.style.left = 'calc(40% - 75px)';
								fellow.style.top = 'calc(50%)';
								fellow.classList.add('minskin');
								fellow.side = player.side;
								fellow.identity = player.identity;
								if (fellow.identity == 'zhu') fellow.identity = 'zhong';
								fellow.setIdentity('神使');
								fellow.node.identity.dataset.color = 'zhong';
								fellow.draw();
								('step 6');
								game.countPlayer(function (current) {
									if (player.getEnemies().includes(current)) {
										current.maxHp += 2;
										current.hp += 2;
										current.update();
									}
								});
							},
						},
						ly_junShenChallenge_luxun_junmou: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							mark: true,
							marktext: '<span style="color: gold">军</span>',
							init(player) {
								player.storage.ly_junShenChallenge_luxun_junmou = 0;
								player.markSkill('ly_junShenChallenge_luxun_junmou');
							},
							intro: {
								content: 'mark',
							},
							filter(event, player) {
								return player.storage.ly_junShenChallenge_luxun_junmou > 0;
							},
							chooseButton: {
								dialog(event, player) {
									var list = ['sha', 'tao', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'yuanjiao', 'yiyi', 'wuzhong', 'wanjian', 'nanman'];
									for (var i = 0; i < list.length; i++) {
										if (i < 3) {
											list[i] = ['基本', '', list[i]];
										} else {
											list[i] = ['锦囊', '', list[i]];
										}
									}
									return ui.create.dialog([list, 'vcard']);
								},
								filter(button, player) {
									return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									return get.player().getUseValue({ name: button.link[2] });
								},
								backup(links, player) {
									return {
										filterCard: false,
										selectCard: 0,
										popname: true,
										viewAs: { name: links[0][2] },
										onuse(result, player) {
											player.storage.ly_junShenChallenge_luxun_junmou--;
											player.markSkill('ly_junShenChallenge_luxun_junmou');
										},
									};
								},
								prompt(links, player) {
									return '选择' + get.translation(links[0][2]) + '的目标';
								},
							},
							ai: {
								order: 9,
								result: {
									player(player) {
										var allshown = true,
											players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (players[i].ai.shown == 0) {
												allshown = false;
											}
											if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
												return 1;
											}
										}
										if (allshown) return 1;
										return 0;
									},
								},
								threaten: 2.1,
							},
							group: 'ly_junShenChallenge_luxun_junmou_sign',
							subSkill: {
								sign: {
									popup: false,
									forced: true,
									trigger: {
										player: 'damageEnd',
										source: 'damageEnd',
									},
									filter(event, player) {
										return event.num > 0;
									},
									content() {
										game.log(player, '<span style="color: yellow">军谋技能效果触发</span>');
										player.storage.ly_junShenChallenge_luxun_junmou += trigger.num;
										player.markSkill('ly_junShenChallenge_luxun_junmou');
									},
								},
							},
						},
						ly_junShenChallenge_luxun_cuike: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget('<span style="color: yellow">摧克:是否令1名其他角色横置</span>', function (card, player, target) {
										return !target.isLinked() && target != player;
									})
									.set('ai', function (target) {
										var num = game.countPlayer(function (current) {
											return player.getEnemies().includes(current);
										});
										if (num < 2) return false;
										if (player.getEnemies().includes(target)) {
											if (target.hasSkillTag('nolink')) return false;
											return 99;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									player.line(result.targets, ['fire', 'thunder', 'green', 'white'].randomGet());
									event.targets = result.targets[0];
									event.targets.link();
								} else event.goto(2);
								('step 2');
								player
									.chooseTarget('<span style="color: yellow">摧克:是否对1名其他角色造成1点伤害</span>', function (card, player, target) {
										return target != event.targets && target != player;
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) {
											return 99;
										}
										return false;
									});
								('step 3');
								if (result.bool) {
									player.line(result.targets, ['fire', 'thunder', 'green', 'white'].randomGet());
									event.target = result.targets[0];
									event.target.damage();
								}
							},
						},
						ly_junShenChallenge_luxun_zhanyan: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							round: 2,
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								var num = game.countPlayer(function (current) {
									return player.getEnemies().includes(current) && current.isLinked();
								});
								if (num == 0) return false;
								return true;
							},
							content() {
								'step 0';
								player.$skill('业火映东水');
								game.countPlayer(function (current) {
									if (player.getEnemies().includes(current) && current.isLinked() && current.countCards('e') > 0) {
										player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
										var card = current.getCards('e');
										current.lose(card, ui.special);
									}
								});
								('step 1');
								if (!player.storage.ly_junShenChallenge_luxun_zhanyan) player.storage.ly_junShenChallenge_luxun_zhanyan = [];
								game.countPlayer(function (current) {
									player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
									if (player.getEnemies().includes(current) && current.isLinked()) {
										player.storage.ly_junShenChallenge_luxun_zhanyan.push(current);
									}
								});
								for (var i = 0; i < player.storage.ly_junShenChallenge_luxun_zhanyan.length; i++) {
									player.storage.ly_junShenChallenge_luxun_zhanyan[i].damage('fire');
								}
							},
							ai: {
								order: 10,
								result: {
									player: 1,
								},
							},
							group: 'ly_junShenChallenge_luxun_zhanyan_delete',
							subSkill: {
								delete: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										delete player.storage.ly_junShenChallenge_luxun_zhanyan;
									},
								},
							},
						},
						ly_junShenChallenge_zhouyu_qinxin: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'discardEnd',
							},
							filter(event, player) {
								if (event.cards) {
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											//QQ
											if (get.color(i) == 'red' && get.position(i) == 'd') return true;
										}
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								event.num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.color(trigger.cards[i]) == 'red' && get.position(trigger.cards[i]) == 'd') event.num++;
								}
								player
									.chooseTarget('<span style="color: yellow">琴心:是否令至多</span>' + get.cnNumber(event.num) + '<span style="color: yellow">名角色</span>', [1, event.num], function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										if (player.getFriends().includes(target) || player == target) {
											if (target.isDamaged()) return 100;
											return 99;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									player.line(result.targets, ['fire', 'thunder', 'green', 'white'].randomGet());
									event.targets = result.targets;
									event.nums = result.targets.length;
								} else {
									event.finish();
								}
								('step 2');
								if (targets && targets.length) {
									for (var i = 0; i < targets.length; i++) {
										if (targets[i].isDamaged()) targets[i].recover();
										else targets[i].draw();
									}
								}
							},
						},
						ly_junShenChallenge_zhouyu_qinjian: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'discardEnd',
							},
							filter(event, player) {
								if (event.cards) {
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											//QQ
											if (get.color(i) == 'black' && get.position(i) == 'd') return true;
										}
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								event.num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.color(trigger.cards[i]) == 'black' && get.position(trigger.cards[i]) == 'd') event.num++;
								}
								player
									.chooseTarget('<span style="color: yellow">琴剑:是否令至多</span>' + get.cnNumber(event.num) + '<span style="color: yellow">名角色</span>', [1, event.num], function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) {
											return 99;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									player.line(result.targets, ['fire', 'thunder', 'green', 'white'].randomGet());
									event.targets = result.targets;
									event.nums = result.targets.length;
								} else {
									event.finish();
								}
								('step 2');
								if (targets && targets.length) {
									for (var i = 0; i < targets.length; i++) {
										targets[i].loseHp();
									}
								}
							},
						},
						ly_junShenChallenge_zhouyu_hongyan: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							round: 2,
							trigger: {
								player: 'phaseEnd',
							},
							content() {
								'step 0';
								player.$skill('烈火燎原,红莲灿世');
								if (player.isDamaged()) event.num = Math.min(3, player.maxHp - player.hp);
								else event.num = 1;
								('step 1');
								event.targets = game
									.filterPlayer(function (current) {
										return player.getEnemies().includes(current);
									})
									.sortBySeat();
								('step 2');
								if (event.targets.length) {
									var target = event.targets.randomGet();
									player.line(target, ['fire', 'thunder', 'green', 'white'].randomGet());
									target.damage('fire');
								}
								('step 3');
								event.num--;
								if (event.num > 0) event.goto(1);
							},
						},
						ly_junShenChallenge_zhouyu_zhenhun: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								source: 'damageBefore',
							},
							priority: -100,
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								'step 0';
								player.line(trigger.player, ['fire', 'thunder', 'green', 'white'].randomGet());
								trigger.num++;
								('step 1');
								trigger.cancel();
								trigger.player.damage(trigger.num, 'fire');
							},
						},
						ly_junShenChallenge_lvbu_wuwei: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.showCards(player.getCards('h'));
								('step 1');
								var num = player.countCards('h', { color: 'red' });
								var nh = player.countCards('h', { color: 'black' });
								if (num > nh) {
									game.countPlayer(function (current) {
										if (player.getEnemies().includes(current) && !current.hasSkill('ly_junShenChallenge_lvbu_wuwei_red')) {
											player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
											delete current.storage.ly_junShenChallenge_lvbu_wuwei;
											(current.storage.ly_junShenChallenge_lvbu_wuwei = 'red'), current.addTempSkill('ly_junShenChallenge_lvbu_wuwei_red');
										}
									});
								}
								if (num < nh) {
									game.countPlayer(function (current) {
										if (player.getEnemies().includes(current) && !current.hasSkill('ly_junShenChallenge_lvbu_wuwei_black')) {
											player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
											delete current.storage.ly_junShenChallenge_lvbu_wuwei;
											(current.storage.ly_junShenChallenge_lvbu_wuwei = 'black'), current.addTempSkill('ly_junShenChallenge_lvbu_wuwei_black');
										}
									});
								}
								if (num == nh) {
									game.countPlayer(function (current) {
										if (player.getEnemies().includes(current) && !current.hasSkill('ly_junShenChallenge_lvbu_wuwei_all')) {
											player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
											current.addTempSkill('ly_junShenChallenge_lvbu_wuwei_all');
										}
									});
								}
							},
							group: 'ly_junShenChallenge_lvbu_wuwei_fengyin',
							subSkill: {
								fengyin: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseBegin',
									},
									content() {
										game.countPlayer(function (current) {
											if (player.getEnemies().includes(current) && !current.hasSkill('fengyin')) {
												player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
												current.addTempSkill('fengyin');
											}
										});
									},
								},
								red: {
									mod: {
										cardEnabled(card, player) {
											if (get.color(card) == player.storage.ly_junShenChallenge_lvbu_wuwei) return false;
										},
										cardUsable(card, player) {
											if (get.color(card) == player.storage.ly_junShenChallenge_lvbu_wuwei) return false;
										},
										cardRespondable(card, player) {
											if (get.color(card) == player.storage.ly_junShenChallenge_lvbu_wuwei) return false;
										},
										cardSavable(card, player) {
											if (get.color(card) == player.storage.ly_junShenChallenge_lvbu_wuwei) return false;
										},
									},
									mark: true,
									marktext: '<span style="color: yellow">威</span>',
									intro: {
										content: '<span style="color: red">震慑——红色</span>',
									},
								},
								black: {
									mod: {
										cardEnabled(card, player) {
											if (get.color(card) == player.storage.ly_junShenChallenge_lvbu_wuwei) return false;
										},
										cardUsable(card, player) {
											if (get.color(card) == player.storage.ly_junShenChallenge_lvbu_wuwei) return false;
										},
										cardRespondable(card, player) {
											if (get.color(card) == player.storage.ly_junShenChallenge_lvbu_wuwei) return false;
										},
										cardSavable(card, player) {
											if (get.color(card) == player.storage.ly_junShenChallenge_lvbu_wuwei) return false;
										},
									},
									mark: true,
									marktext: '<span style="color: yellow">威</span>',
									intro: {
										content: '<span style="color: red">震慑——黑色</span>',
									},
								},
								all: {
									mod: {
										cardEnabled(card) {
											return false;
										},
										cardUsable(card) {
											return false;
										},
										cardRespondable(card) {
											return false;
										},
										cardSavable(card) {
											return false;
										},
									},
									mark: true,
									marktext: '<span style="color: yellow">威</span>',
									intro: {
										content: '<span style="color: red">震慑</span>',
									},
								},
							},
						},
						ly_junShenChallenge_lvbu_wumou: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								if (player.getStat().skill.ly_junshenbao_lvmeng_qinxue_draw >= player.hp) return false;
								if (_status.currentPhase != player) return false;
								return player.countUsed(event.card) > 1;
							},
							content() {
								player.loseMaxHp();
								player.draw();
							},
						},
						ly_junShenChallenge_lvbu_shennu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							round: 2,
							enable: 'phaseUse',
							content() {
								player.$skill('颤抖吧,面对神之怒火');
								game.countPlayer(function (current) {
									if (player.getEnemies().includes(current)) {
										player.line(current, ['fire', 'thunder', 'green', 'white'].randomGet());
										current.damage();
										if (current.countCards('h') > 1) current.chooseToDiscard('<span style="color: red">请将手牌弃置至1张</span>', current.countCards('h') - 1, true, 'h');
										if (current.countCards('e') > 1) current.chooseToDiscard('<span style="color: red">请将装备区内的牌弃置至1张</span>', current.countCards('e') - 1, true, 'e');
									}
								});
							},
							ai: {
								threaten: 3,
								order: 10,
								result: {
									player: 10,
								},
							},
						},
						ly_junShenChallenge_lvbu_xiuluo: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								source: 'damageBefore',
							},
							priority: Infinity,
							content() {
								player.line(trigger.player, ['fire', 'thunder', 'green', 'white'].randomGet());
								trigger.num++;
							},
							mod: {
								globalFrom(from, to, distance) {
									var num = game.countPlayer(function (current) {
										return from.getEnemies().includes(current);
									});
									return distance - num;
								},
							},
							group: 'ly_junShenChallenge_lvbu_xiuluo_recover',
							subSkill: {
								recover: {
									popup: false,
									forced: true,
									trigger: {
										source: 'damageEnd',
									},
									content() {
										if (trigger.num > 1) {
											trigger.player.recover();
											game.log(player, '<span style="color: yellow">修罗炼狱戟技能效果生效</span>');
										}
									},
								},
							},
						},
						ly_yellowTurban_baoLuan: {
							nobracket: true,
							trigger: {
								player: 'phaseDrawAfter',
							},
							forced: true,
							mark: true,
							content() {
								'step 0';
								player
									.chooseTarget('<span style="color: red">暴乱</span>:是否选择1名其他角色,视为对其使用1张"杀"', function (card, player, target) {
										return lib.filter.filterTarget({ name: 'sha' }, player, target);
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) {
											if (target.getEquip('tengjia')) return false;
											if (get.mode() == 'identity' && player.identity == 'fan' && target.identity == 'zhu') return 100;
											return true;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									if (player.name == 'ly_yellowTurban_yudu') game.playXu('ly_yellowTurban_yudu_baoLuan1');
									if (player.name == 'ly_yellowTurban_huangJinBing') game.playXu('ly_yellowTurban_huangJinBing_baoDong1');
									player.line(target, 'white');
									player.useCard({ name: 'sha' }, target, false);
									player.addTempSkill('ly_yellowTurban_baoLuan_draw', { player: 'useCardEnd' });
								} else event.finish();
							},
							subSkill: {
								draw: {
									trigger: { source: 'damageAfter' },
									forced: true,
									popup: false,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										player.draw();
										game.log(player, '<span style="color: red">暴乱技能效果生效</span>');
									},
								},
							},
							ai: {
								threaten: 2,
								expose: 0.1,
							},
						},
						ly_yellowTurban_yudu_huoLuan: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							usable: 1,
							trigger: {
								global: 'damageAfter',
							},
							filter(event, player) {
								if (event.source && event.source.getStat('damage') > 1) return true;
								return false;
							},
							content() {
								player.draw(2);
							},
						},
						ly_yellowTurban_manZuTouLing_rongYong: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseDrawBegin',
							},
							content() {
								var num = game.countPlayer(function (current) {
									return current.group == 'qun';
								});
								trigger.num = Math.min(5, num * 2 + 3);
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_yellowTurban_bianzhang_baHu: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								player: 'phaseDrawBegin',
							},
							check(event, player) {
								var num = game.countPlayer(function (current) {
									return player.getFriends().includes(current);
								});
								if (num > 0) return true;
								return false;
							},
							content() {
								'step 0';
								trigger.num--;
								game.countPlayer(function (current) {
									if (player.getFriends().includes(current)) {
										current.draw(2);
									}
								});
								('step 1');
								game.countPlayer(function (current) {
									if (player.getFriends().includes(current)) {
										current.chooseToDiscard('he', true);
									}
								});
							},
							ai: {
								threaten: 2,
							},
						},
						ly_yellowTurban_duYouⅠ_baoLi: {
							nobracket: true,
							forced: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								player: 'phaseUseBegin',
							},
							mark: true,
							init(player) {
								player.storage.ly_yellowTurban_duYouⅠ_baoLi = 0;
								player.unmarkSkill('ly_yellowTurban_duYouⅠ_baoLi');
							},
							marktext: '<span style="color: white">戾</span>',
							intro: {
								content: '使用"杀"<span style="color: red">造成伤害值</span>+#.',
							},
							content() {
								player.draw();
								player.storage.ly_yellowTurban_duYouⅠ_baoLi += 1;
								player.markSkill('ly_yellowTurban_duYouⅠ_baoLi');
							},
							group: 'ly_yellowTurban_duYouⅠ_baoLi_damage',
							subSkill: {
								damage: {
									popup: false,
									forced: true,
									trigger: {
										source: 'damageBefore',
									},
									filter(event, player) {
										return player.storage.ly_yellowTurban_duYouⅠ_baoLi > 0 && event.card && event.card.name == 'sha';
									},
									content() {
										var target = trigger.player;
										player.line(target, 'white');
										trigger.num += player.storage.ly_yellowTurban_duYouⅠ_baoLi;
										game.log(player, '<span style="color: red">暴戾技能效果生效,此伤害+</span>', player.storage.ly_yellowTurban_duYouⅠ_baoLi);
									},
								},
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_yellowTurban_chengYuanZhi_shouZhi: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							group: ['ly_yellowTurban_chengYuanZhi_shouZhi_player', 'ly_yellowTurban_chengYuanZhi_shouZhi_target'],
							subSkill: {
								player: {
									forced: true,
									popup: false,
									trigger: {
										source: 'damageBefore',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
									},
									content() {
										player.line(trigger.player, 'white');
										trigger.num++;
									},
								},
								target: {
									forced: true,
									popup: false,
									trigger: {
										player: 'damageBefore',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
									},
									content() {
										trigger.num++;
									},
								},
							},
							ai: {
								threaten: 1.5,
							},
						},
						ly_yellowTurban_zhangChun_miTian: {
							nobracket: true,
							forced: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								player: 'respond',
							},
							filter(event, player) {
								return event.card && event.card.name == 'shan';
							},
							content() {
								game.countPlayer(function (current) {
									if (current != player && !current.isLinked()) {
										player.line(current, 'white');
										current.link();
									}
								});
							},
							ai: {
								threaten: 2,
							},
						},
						ly_yellowTurban_zhangJu_yeLue: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.getStat('damage') >= 1;
							},
							content() {
								game.countPlayer(function (current) {
									if (current != player) {
										player.line(current, 'white');
										current.damage('thunder');
									}
								});
							},
							ai: {
								threaten: 2,
							},
						},
						ly_yellowTurban_baoXin_yiMou: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								global: 'damageBefore',
							},
							filter(event, player) {
								return event.player != player && event.player.hp < 2;
							},
							check(event, player) {
								var damage = event.num;
								var tao = game.countPlayer(function (current) {
									return current.countCards('h', { name: 'tao' }) && player.getFriends().includes(event.player);
								});
								if (player.getFriends().includes(event.player)) {
									if (get.mode() == 'identity') {
										if (game.zhu == player && tao > 0 && event.num > 1 && player.hp < 3) return true;
										if (game.zhu == event.player) return true;
										if (player.hp > 2) return true;
										if (event.num > 1) return true;
										return false;
									}
									return 1 - player.hp;
								}
								return false;
							},
							content() {
								'step 0';
								player.line(trigger.player, 'white');
								trigger.cancel();
								('step 1');
								player.loseHp();
							},
							ai: {
								threaten: 2,
							},
						},
						ly_yellowTurban_taoSheng_nuYi: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								source: 'damageBegin',
							},
							prompt(event, player) {
								return '是否对' + get.translation(event.player) + '发动<span style="color: red">"怒义"</span>';
							},
							check(event, player) {
								if (player.getEnemies().includes(event.player)) return true;
								return false;
							},
							filter(event, player) {
								var num = game.countPlayer(function (current) {
									return current.isDamaged() && player.getFriends().includes(current);
								});
								if (num > 0) return true;
								return false;
							},
							content() {
								player.line(trigger.player, 'white');
								trigger.num++;
							},
							ai: {
								threaten: 2,
							},
						},
						ly_yellowTurban_bingYi_qinRan: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							enable: 'phaseUse',
							usable: 1,
							line: 'white',
							filterTarget(card, player, target) {
								if (player.storage.ly_yellowTurban_bingYi_qinRan && player.storage.ly_yellowTurban_bingYi_qinRan.includes(target)) return false;
								return target != player;
							},
							content() {
								'step 0';
								if (!player.storage.ly_yellowTurban_bingYi_qinRan) {
									player.storage.ly_yellowTurban_bingYi_qinRan = [];
								}
								if (!player.storage.ly_yellowTurban_bingYi_qinRan1) {
									player.storage.ly_yellowTurban_bingYi_qinRan1 = 0;
								}
								('step 1');
								player.storage.ly_yellowTurban_bingYi_qinRan.push(target);
								player.storage.ly_yellowTurban_bingYi_qinRan1++;
							},
							group: 'ly_yellowTurban_bingYi_qinRan_lose',
							subSkill: {
								lose: {
									forced: true,
									popup: false,
									trigger: {
										global: 'phaseEnd',
									},
									content() {
										if (player.storage.ly_yellowTurban_bingYi_qinRan && player.storage.ly_yellowTurban_bingYi_qinRan.includes(trigger.player)) {
											player.line(trigger.player, 'white');
											trigger.player.loseHp();
											player.storage.ly_yellowTurban_bingYi_qinRan.remove(trigger.player);
											game.log(player, '<span style="color: red">侵染技能效果生效</span>');
										}
									},
								},
							},
							ai: {
								order: 10,
								threaten: 2,
								result: {
									target(player, target) {
										if (get.mode() == 'identity' && player.identity == 'fan' && game.zhu == target) return -100;
										return -1;
									},
								},
							},
						},
						ly_yellowTurban_xiongNu_manLue: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								player.draw();
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_yellowTurban_manZuYongShi_manYong: {
							nobracket: true,
							forced: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								player: 'phaseDrawBegin',
							},
							content() {
								var num = game.countPlayer(function (current) {
									return current.group == 'qun';
								});
								trigger.num = Math.min(5, num + 1);
							},
							ai: {
								threaten: 2,
							},
						},
						ly_yellowTurban_liangZhouJun_liangJi: {
							nobracket: true,
							mod: {
								maxHandcard(player, num) {
									return (num += 1);
								},
								globalFrom(from, to, distance) {
									return (distance -= 1);
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return (num += 1);
								},
							},
						},
						ly_yellowTurban_huangJinBing_baoDong: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								player: 'phaseDrawAfter',
							},
							forced: true,
							mark: true,
							init(player) {
								player.storage.ly_yellowTurban_huangJinBing_baoDong = 0;
								player.unmarkSkill('ly_yellowTurban_huangJinBing_baoDong');
							},
							marktext: '<span style="color: white">暴</span>',
							intro: {
								content: '<span style="color: red">已获得</span>"暴"标记',
							},
							content() {
								'step 0';
								player
									.chooseTarget('<span style="color: red">暴乱</span>:是否选择1名其他角色,视为对其使用1张"杀"', function (card, player, target) {
										return lib.filter.filterTarget({ name: 'sha' }, player, target);
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) {
											if (target.getEquip('tengjia')) return false;
											if (get.mode() == 'identity' && player.identity == 'fan' && target.identity == 'zhu') return 100;
											return true;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'white');
									player.useCard({ name: 'sha' }, target, false);
									player.addTempSkill('ly_yellowTurban_huangJinBing_baoDong_draw', { player: 'useCardEnd' });
									player.storage.ly_yellowTurban_huangJinBing_baoDong += 1;
									player.markSkill('ly_yellowTurban_huangJinBing_baoDong');
								} else event.finish();
							},
							group: 'ly_yellowTurban_huangJinBing_baoDong_update',
							subSkill: {
								update: {
									forced: true,
									popup: false,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										player.storage.ly_yellowTurban_huangJinBing_baoDong--;
										player.unmarkSkill('ly_yellowTurban_huangJinBing_baoDong');
									},
								},
								draw: {
									trigger: { source: 'damageAfter' },
									forced: true,
									popup: false,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										player.draw();
										game.log(player, '<span style="color: red">暴乱技能效果生效</span>');
									},
								},
							},
							ai: {
								threaten: 2,
							},
						},
						ly_yellowTurban_hanJun_shuWei: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (!event.targets.includes(player)) return false;
								return (event.card && event.card.name == 'sha') || event.card.name == 'nanman';
							},
							content() {
								player.draw();
								player.chooseToDiscard('he', true);
							},
							ai: {
								threaten: 2,
							},
						},
						/////////////////////
						ly_junshenbao_luji_shuxuan: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'judgeBegin',
							},
							forced: true,
							content() {
								'step 0';
								var card = get.cards()[0];
								if (get.color(card) == 'black') player.addSkill('ly_junshenbao_luji_shuxuan_black');
								if (get.color(card) == 'red') player.addSkill('ly_junshenbao_luji_shuxuan_red');
								('step 1');
								delete player.storage.ly_junshenbao_luji_shuxuan;
								player.chooseControl('♠️️', '♣️️', '♥️️', '♦️️', '取消').set('prompt', '<span style=\"color: red\">述玄</span>:是否声明1种花色').ai = function (event, player) {
									if (player.hasSkill('ly_junshenbao_luji_shuxuan_black')) {
										if (Math.random() <= 0.5) {
											return '♠️️';
										}
										return '♣️️';
									}
									if (player.hasSkill('ly_junshenbao_luji_shuxuan_red')) {
										if (Math.random() <= 0.5) {
											return '♥️️';
										}
										return '♦️️';
									}
									return '取消';
								};
								('step 2');
								player.removeSkill('ly_junshenbao_luji_shuxuan_black');
								player.removeSkill('ly_junshenbao_luji_shuxuan_red');
								var con = result.control;
								player.popup(con);
								if (con == '取消') event.finish();
								if (con == '♠️️') {
									game.log(player, '声明了<span style=\"color: black\">♠️️</span>');
									player.storage.ly_junshenbao_luji_shuxuan = 'spade';
								}
								if (con == '♣️️') {
									game.log(player, '声明了<span style=\"color: black\">♣️️</span>');
									player.storage.ly_junshenbao_luji_shuxuan = 'club';
								}
								if (con == '♥️️') {
									game.log(player, '声明了<span style=\"color: red\">♥️️</span>');
									player.storage.ly_junshenbao_luji_shuxuan = 'heart';
								}
								if (con == '♦️️') {
									game.log(player, '声明了<span style=\"color: red\">♦️️</span>');
									player.storage.ly_junshenbao_luji_shuxuan = 'diamond';
								}
							},
							group: 'ly_junshenbao_luji_shuxuan_suit',
							subSkill: {
								black: {},
								red: {},
								heart: {},
								diamond: {},
								suit: {
									popup: false,
									forced: true,
									trigger: {
										global: 'judgeEnd',
									},
									filter(event, player) {
										if (!player.storage.ly_junshenbao_luji_shuxuan) return false;
										return player.storage.ly_junshenbao_luji_shuxuan == event.result.card.suit;
									},
									content() {
										player.draw(3);
									},
								},
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_luji_huaili: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								if (player.storage.ly_junshenbao_luji_huaili.length == 0) return false;
								var card = player.getCards('h');
								for (var i = 0; i < card.length; i++) {
									if (player.storage.ly_junshenbao_luji_huaili && player.storage.ly_junshenbao_luji_huaili.includes(card[i])) return true;
								}
								return false;
							},
							content() {
								'step 0';
								event.cards = [];
								var card = player.getCards('h');
								for (var i = 0; i < card.length; i++) {
									if (player.storage.ly_junshenbao_luji_huaili && player.storage.ly_junshenbao_luji_huaili.includes(card[i])) event.cards.push(card[i]);
								}
								player
									.chooseTarget('<span style=\"color: red\">怀礼</span>:是否令1名其他角色获得' + get.translation(event.cards), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										if (get.attitude(player, target) > 0) {
											if (target.isMinHandcard()) return 100;
											if (target.isMinHp()) return 99;
											return 97;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.gain(event.cards, player);
									player.give(event.cards, target);
									player.draw(Math.min(3, event.cards.length));
								}
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
							group: 'ly_junshenbao_luji_huaili_push',
							subSkill: {
								push: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseAfter',
									},
									init(player) {
										player.storage.ly_junshenbao_luji_huaili = [];
									},
									filter(event, player) {
										return player.countCards('h') > 0;
									},
									content() {
										'step 0';
										player.storage.ly_junshenbao_luji_huaili = [];
										('step 1');
										var card = player.getCards('h');
										for (var i = 0; i < card.length; i++) {
											if (card[i]) player.storage.ly_junshenbao_luji_huaili.push(card[i]);
										}
									},
								},
							},
						},
						ly_junshenbao_dongyun_kuangzheng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (!event.targets.includes(player)) return false;
								if (event.card.name == 'sha' && player.countCards('h') == 0) return true;
								if (get.tag(event.card, 'damage') && get.type(event.card) == 'trick' && player.countCards('h') > 0) return true;
								if (get.type(event.card) == 'delay' && player.countCards('h') > 0) return true;
								return false;
							},
							content() {
								trigger.targets.remove(player);
								game.log(trigger.player, '使用的', trigger.card, '对', player, '<span style=\"color: red\">无效</span>');
							},
							ai: {
								threaten: 2,
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha' && player.countCards('h') == 0) return 'zeroplayertarget';
										if (get.tag(card, 'damage') && get.type(card) == 'trick' && player.countCards('h') > 0) return 'zeroplayertarget';
										if (get.type(card) == 'delay' && player.countCards('h') > 0) return 'zeroplayertarget';
									},
								},
							},
						},
						ly_junshenbao_dongyun_fubi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							init(player) {
								player.storage.ly_junshenbao_dongyun_fubi = 1;
							},
							line: 'fire',
							prompt(event) {
								var player = _status.event.player;
								if (player.storage.ly_junshenbao_dongyun_fubi && player.storage.ly_junshenbao_dongyun_fubi > 0) return '<li><span style=\"color: red\">出牌阶段,你可以令1名手牌数小于体力值的角色摸1张牌</span><li>出牌阶段,你可以令1名手牌数大于体力值的角色弃置1张手牌';
								return '<li>出牌阶段,你可以令1名手牌数小于体力值的角色摸1张牌<li><span style=\"color: red\">出牌阶段,你可以令1名手牌数大于体力值的角色弃置1张手牌</span>';
							},
							filterTarget(card, player, target) {
								if (player.storage.ly_junshenbao_dongyun_fubi && player.storage.ly_junshenbao_dongyun_fubi > 0) return target.countCards('h') < target.hp;
								return target.countCards('h') > target.hp;
							},
							content() {
								if (player.storage.ly_junshenbao_dongyun_fubi && player.storage.ly_junshenbao_dongyun_fubi > 0) {
									player.storage.ly_junshenbao_dongyun_fubi--;
									target.draw();
								} else {
									player.storage.ly_junshenbao_dongyun_fubi++;
									target.chooseToDiscard('h', true);
								}
							},
							ai: {
								order: 9,
								expose: 0.1,
								threaten: 2,
								result: {
									target(player, target) {
										if (player.storage.ly_junshenbao_dongyun_fubi && player.storage.ly_junshenbao_dongyun_fubi > 0) return 1;
										return -1;
									},
								},
							},
						},
						ly_junshenbao_fazheng_fuyi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'phaseDrawBefore',
							},
							forced: true,
							filter(event, player) {
								return event.player != player;
							},
							content() {
								'step 0';
								event.targets = trigger.player;
								event.players = player;
								event.targets
									.chooseCard('h', [1, 2], '<span style=\"color: red\">辅翼</span>:是否交给' + get.translation(event.players) + '至多2张手牌', function (card) {
										return true;
									})
									.set('ai', function (card) {
										if (event.targets.getFriends().includes(event.players)) return 8 - get.value(card);
										else return 4 - get.value(card);
										return false;
									});
								('step 1');
								if (result.bool) {
									event.targets.line(player, 'fire');
									player.gain(result.cards, trigger.player);
									trigger.player.$give(result.cards, player);
									trigger.num += result.cards.length;
								} else event.finish();
							},
						},
						ly_junshenbao_fazheng_enchou: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							group: ['ly_junshenbao_fazheng_enchou_recover', 'ly_junshenbao_fazheng_enchou_damage'],
							subSkill: {
								recover: {
									audio: 'ext:军神包/audio:1',
									trigger: {
										global: 'useCard',
									},
									forced: true,
									filter(event, player) {
										if (!event.targets.includes(player)) return false;
										if (event.player == player) return false;
										return (event.card && event.card.name == 'tao') || event.card.name == 'jiu' || event.card.name == 'taoyuan' || event.card.name == 'zengbin';
									},
									content() {
										'step 0';
										var target = trigger.player;
										player.line(trigger.player, 'fire');
										target.draw();
										('step 1');
										var target = trigger.player;
										var players = player;
										target.chooseBool('是否令' + get.translation(player) + '摸1张牌').ai = function (event, player) {
											if (target.getFriends().includes(players)) return true;
											return false;
										};
										('step 2');
										if (result.bool) {
											trigger.player.line(player, 'fire');
											player.draw();
										}
									},
								},
								damage: {
									audio: 'ext:军神包/audio:1',
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									filter(event, player) {
										return event.source && event.source != player && event.num > 0;
									},
									content() {
										'step 0';
										event.num = Math.min(trigger.num, 9);
										('step 1');
										var target = trigger.source;
										event.players = player;
										player.line(target, 'fire');
										target
											.chooseCard('he', '<span style=\"color: red\">恩仇</span>:是否交给' + get.translation(player) + '1张<span style=\"color: red\">♥️️</span>牌', function (card) {
												return card.suit == 'heart';
											})
											.set('ai', function (card) {
												if (target.hasSkillTag('maihp') && target.hp > 2) return false;
												if (target.getFriends().includes(event.players)) return 10 - get.value(card);
												return 5 - get.value(card);
											});
										('step 2');
										if (result.bool) {
											trigger.source.line(player, 'fire');
											var card = result.cards[0];
											player.gain(card, trigger.source);
											trigger.source.give(card, player);
										} else trigger.source.loseHp();
										('step 3');
										event.num--;
										if (event.num > 0) event.goto(1);
									},
								},
							},
						},
						ly_junshenbao_caozhi_qijue: {
							nobracket: true,
							popup: false,
							forced: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: ['useCard', 'respond'],
							},
							init(player) {
								player.storage.ly_junshenbao_caozhi_qijue = [];
							},
							marktext: '<span style="color: blue">诗</span>',
							intro: {
								content(storage) {
									if (!storage.length) {
										return '未使用或打出过有点数的牌';
									} else {
										var str = '已使用过' + get.translation(storage[0] + '点数');
										for (var i = 1; i < storage.length; i++) {
											str += '、' + get.translation(storage[i] + '点数');
										}
										str += '牌';
										return str;
									}
								},
							},
							content() {
								var number = trigger.card.number;
								if (number) {
									player.storage.ly_junshenbao_caozhi_qijue.add(number);
									player.markSkill('ly_junshenbao_caozhi_qijue');
								}
							},
							group: 'ly_junshenbao_caozhi_qijue_gain',
							subSkill: {
								gain: {
									forced: true,
									popup: false,
									silent: true,
									trigger: {
										player: 'phaseEnd',
									},
									filter(event, player) {
										return player.storage.ly_junshenbao_caozhi_qijue && player.storage.ly_junshenbao_caozhi_qijue.length > 6;
									},
									content() {
										'step 0';
										player.phase('nodelay');
										player.storage.ly_junshenbao_caozhi_qijue.length = 0;
										player.markSkill('ly_junshenbao_caozhi_qijue');
										('step 1');
										var card = get.cards(7);
										var gain = [];
										player.showCards(card);
										for (var i = 0; i < card.length; i++) {
											if (get.type(card[i]) != 'basic') gain.push(card[i]);
										}
										if (gain.length) {
											player.gain(gain);
											player.$gain(gain);
										}
										('step 2');
										player.recover();
										player.addTempSkill('ly_junshenbao_caozhi_qijue_jiu', { player: 'useCard' });
									},
								},
								jiu: {
									popup: false,
									silent: true,
									forced: true,
									trigger: {
										player: 'phaseBegin',
									},
									content() {
										player.useCard({ name: 'jiu' }, player, false);
									},
								},
							},
						},
						ly_junshenbao_caozhi_luomei: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'discardEnd',
							},
							prompt(event, player) {
								var card = [];
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQ
										if (get.color(i) == 'black') card.push(i);
									}
								return '<span style=\"color: red\">落梅</span>:是否获得' + get.translation(card);
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQ
										if (get.color(i) == 'black' && get.position(i) == 'd') return true;
									}
								return false;
							},
							content() {
								'step 0';
								if (trigger.delay == false) game.delay();
								('step 1');
								var cards = [];
								for (var i = 0; i < trigger.cards.length; i++) {
									if (get.color(trigger.cards[i]) == 'black' && get.position(trigger.cards[i]) == 'd') {
										if (game.me != player) {
											if (trigger.cards[i].name != 'du') {
												cards.push(trigger.cards[i]);
											}
										} else cards.push(trigger.cards[i]);
									}
								}
								if (cards.length) {
									player.gain(cards, 'log');
									player.$gain(cards);
								}
							},
						},
						ly_junshenbao_gongsunyuan_huaiyi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget('<span style="color: red">揣私</span>:是否选择任意名<span style="color:gold">区域内</span>有牌的<span style="color: red">其他角色</span>', [0, Infinity], function (card, player, target) {
										return target != player && target.countCards('hej') > 0;
									})
									.set('ai', function (target) {
										if (player.getFriends().includes(target)) {
											if (target.countCards('j') > 0) return 100;
											if (target.getEquip('baiyin') && target.maxHp - target.hp > 0) return 99;
										} else {
											if (target.countCards('e') > 0) {
												if (target.maxHp - target.hp > 0 && target.countCards('e') == 1 && target.getEquip('baiyin')) return false;
												if (!target.hasSkillTag('equipDraw') || !target.hasSkillTag('receiveEquip')) return 98;
												return -100;
											}
											if (target.countCards('h') > 0) {
												if (target.hasSkill('nohDamage') || target.hasSkillTag('noh') || target.hasSkillTag('loseDraw')) return -100;
												return 97;
											}
											if (target.countCards('j') > 0) {
												if (target.countCards('he') == 0) return -100;
												return 1;
											}
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									player.line(result.targets, 'white');
									event.targets = result.targets;
									event.targets.sort(lib.sort.seat);
									event.gained = event.targets.length;
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets.length) {
									player.gainPlayerCard(event.targets.shift(), 'hej', true);
									event.redo();
								}
								('step 3');
								player.chooseToDiscard('he', event.gained, true);
								if (event.gained > 2) player.loseHp();
							},
							ai: {
								order: 7.5,
								threaten: 2,
								result: {
									player: 1,
								},
							},
						},
						ly_junshenbao_huangquan_zhongjian: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							line: 'fire',
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								target.draw(2);
								target.chooseToUse();
							},
							ai: {
								order: 9,
								result: {
									target: 2,
								},
							},
						},
						ly_junshenbao_huangquan_dianhu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'gameDrawAfter',
								player: 'enterGame',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget('<span style=\"color: red\">点虎</span>:请指定1名<span style=\"color: red\">其他角色</span>', true, function (card, player, target) {
										if (player != game.me) return player.getEnemies().includes(target);
										return target != player;
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) return true;
										return false;
									});
								('step 1');
								var target = result.targets[0];
								player.line(target, 'fire');
								target.addSkill('ly_junshenbao_huangquan_dianhu_mark');
								game.log(player, '认为', target, '是<span style=\"color: red\">大笨蛋</span>');
								if (!player.storage.ly_junshenbao_huangquan_dianhu_target) player.storage.ly_junshenbao_huangquan_dianhu_target = [];
								player.storage.ly_junshenbao_huangquan_dianhu_target.push(target);
							},
							group: ['ly_junshenbao_huangquan_dianhu_damage', 'ly_junshenbao_huangquan_dianhu_swap'],
							subSkill: {
								mark: {
									mark: true,
									marktext: '<span style="color: red">虎</span>',
									intro: {
										content: '已成为<span style="color: red">点虎</span>目标',
									},
									ai: {
										threaten: 3,
									},
								},
								damage: {
									popup: false,
									forced: true,
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										return (player.getFriends().includes(event.source) || event.source == player) && player.storage.ly_junshenbao_huangquan_dianhu_target && player.storage.ly_junshenbao_huangquan_dianhu_target.includes(event.player);
									},
									content() {
										player.line(trigger.player, 'fire');
										trigger.player.line(trigger.source, 'fire');
										trigger.source.line(player, 'fire');
										event.targets = [];
										event.targets.push(player);
										if (trigger.source != player) event.targets.push(trigger.source);
										game.asyncDraw(event.targets);
									},
								},
								swap: {
									trigger: {
										global: 'dieAfter',
									},
									filter(event, player) {
										var num = game.countPlayer(function (current) {
											return current != player && current.hasSkill('ly_junshenbao_huangquan_dianhu_mark');
										});
										return num == 0;
									},
									forced: true,
									content() {
										'step 0';
										player
											.chooseTarget('<span style=\"color: red\">点虎</span>:请指定1名<span style=\"color: red\">其他角色</span>', true, function (card, player, target) {
												if (player != game.me) return player.getEnemies().includes(target);
												return target != player;
											})
											.set('ai', function (target) {
												if (player.getEnemies().includes(target)) return true;
												return false;
											});
										('step 1');
										var target = result.targets[0];
										player.line(target, 'fire');
										target.addSkill('ly_junshenbao_huangquan_dianhu_mark');
										game.log(player, '认为', target, '是<span style="color: red">大笨蛋</span>');
										if (!player.storage.ly_junshenbao_huangquan_dianhu_target) player.storage.ly_junshenbao_huangquan_dianhu_target = [];
										player.storage.ly_junshenbao_huangquan_dianhu_target.push(target);
									},
								},
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_zhoucang_zhongyong: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCardEnd',
							},
							forced: true,
							filter(event, player) {
								if (!get.tag(event.card, 'damage')) return false;
								if (player.storage.ly_junshenbao_zhoucang_zhongyong && player.storage.ly_junshenbao_zhoucang_zhongyong.includes(event.card.name)) {
									return false;
								}
								if (event.cards) {
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											//QQ
											if (i.isInPile()) return true;
										}
								}
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('ly_junshenbao_zhoucang_zhongyong'), function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										if (target.hasJudge('lebu')) return 0;
										var att = get.attitude(_status.event.player, target);
										if (att < 3) return 0;
										if (target.hasSha() && _status.event.sha) {
											att /= 5;
										}
										if (event.wuxie && target.needsToDiscard(1)) {
											att /= 5;
										}
										return att / (1 + get.distance(player, target, 'absolute'));
									})
									.set('sha', trigger.cards[0].name == 'sha')
									.set('wuxie', trigger.cards[0].name == 'wuxie');
								('step 1');
								if (result.bool) {
									var list = [];
									for (var i = 0; i < trigger.cards.length; i++) {
										if (trigger.cards[i].isInPile()) {
											list.push(trigger.cards[i]);
										}
									}
									player.line(result.targets[0], 'fire');
									result.targets[0].gain(list, 'gain2');
									event.target = result.targets[0];
									if (!player.storage.ly_junshenbao_zhoucang_zhongyong) {
										player.storage.ly_junshenbao_zhoucang_zhongyong = [];
									}
									player.storage.ly_junshenbao_zhoucang_zhongyong.push(trigger.card.name);
								} else event.finish();
								('step 2');
								player
									.chooseTarget('<span style=\"color: red\">忠勇</span>:是否视为对<span style=\"color: red\">攻击距离</span>内1名<span style=\"color: red\">其他角色</span>使用1张杀', function (card, player, target) {
										if (player != game.me) return get.distance(player, target, 'attack') <= 1 && player.getEnemies().includes(target) && target != event.target;
										return get.distance(player, target, 'attack') <= 1 && target != player && target != event.target;
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) return true;
										return false;
									});
								('step 3');
								if (result.bool) {
									player.line(result.targets[0], 'fire');
									event.target.useCard({ name: 'sha' }, result.targets[0], false);
								}
							},
							group: 'ly_junshenbao_zhoucang_zhongyong_delete',
							subSkill: {
								delete: {
									forced: true,
									popup: false,
									trigger: {
										global: 'phaseAfter',
									},
									silent: true,
									content() {
										delete player.storage.ly_junshenbao_zhoucang_zhongyong;
									},
								},
							},
						},
						ly_junshenbao_erzhang_xiuzheng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							check(event, player) {
								var num = 0;
								var a = player.countCards('h', { suit: 'spade' });
								var b = player.countCards('h', { suit: 'club' });
								var c = player.countCards('h', { suit: 'heart' });
								var d = player.countCards('h', { suit: 'diamond' });
								var nh = a + b + c + d;
								if (a > 0) num++;
								if (b > 0) num++;
								if (c > 0) num++;
								if (d > 0) num++;
								if (num == 1 && nh > 2) return false;
								if (num == 2 && nh > 4) return false;
								if (num == 3 && nh > 6) return false;
								if (num == 4 && nh > 8) return false;
								return true;
							},
							content() {
								'step 0';
								var a = player.countCards('h', { suit: 'spade' });
								var b = player.countCards('h', { suit: 'club' });
								var c = player.countCards('h', { suit: 'heart' });
								var d = player.countCards('h', { suit: 'diamond' });
								if (a > 1) player.discardPlayerCard('h', a - 1, player, true, { suit: 'spade' });
								if (b > 1) player.discardPlayerCard('h', b - 1, player, true, { suit: 'club' });
								if (c > 1) player.discardPlayerCard('h', c - 1, player, true, { suit: 'heart' });
								if (d > 1) player.discardPlayerCard('h', d - 1, player, true, { suit: 'diamond' });
								('step 1');
								var num = player.countCards('h');
								player.draw(num);
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_junshenbao_erzhang_fengjian: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h', { type: 'equip' }) > 0;
							},
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							filterTarget(card, player, target) {
								if (target.isMin()) return false;
								return player != target;
							},
							content() {
								target.addSkill('ly_junshenbao_erzhang_fengjian_double');
								target.addSkill('ly_junshenbao_erzhang_fengjian_delete');
								target.equip(cards[0]);
								player.draw();
							},
							ai: {
								moreDraw: true,
								order: 10,
								result: {
									player: 1,
									target: 1,
								},
							},
							subSkill: {
								double: {
									popup: false,
									forced: true,
									trigger: {
										player: 'equipBegin',
									},
									filter(event, player) {
										return player.countCards('e', { type: 'equip' }) && get.type(event.card) == 'equip';
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
								},
								delete: {
									popup: false,
									forced: true,
									trigger: {
										global: 'useCardEnd',
									},
									content() {
										player.removeSkill('ly_junshenbao_erzhang_fengjian_double');
										player.removeSkill('ly_junshenbao_erzhang_fengjian_delete');
									},
								},
							},
						},
						ly_junshenbao_zuoci_lunhui: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'roundStart',
							},
							forced: true,
							content() {
								game.countPlayer(function (current) {
									var card = current.getCards('hej');
									var num = Math.min(3 + current.hp, current.countCards('hej'));
									current.lose(card);
									current.$throw(card, 100);
									current.draw(num);
								});
							},
						},
						ly_junshenbao_zuoci_xianmen: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							content() {
								if (get.type(trigger.card) == 'basic') {
									player.gain(
										get.cardPile(function (card) {
											return get.type(card, 'equip') == 'equip';
										}),
										'gain2'
									);
									event.finish();
								}
								if (get.type(trigger.card) == 'equip') {
									player.gain(
										get.cardPile(function (card) {
											return get.type(card, 'trick') == 'trick';
										}),
										'gain2'
									);
									event.finish();
								}
								if (get.type(trigger.card) == 'trick' || get.type(trigger.card) == 'delay') {
									player.gain(
										get.cardPile(function (card) {
											return get.type(card, 'basic') == 'basic';
										}),
										'gain2'
									);
									event.finish();
								}
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_caoren_kuiwei: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: { player: 'turnOverEnd' },
							forced: true,
							filter(event, player) {
								return !player.isTurnedOver() && player.canMoveCard();
							},
							content() {
								'step 0';
								player
									.chooseToDiscard('he', '<span style=\"color: red\">溃围</span>:是否<span style=\"color: red\">弃置</span>1张牌并<span style=\"color: gold\">移动</span>场上1张牌', lib.filter.cardDiscardable)
									.set('ai', function (card) {
										if (!_status.event.check) return 0;
										return 7 - get.value(card);
									})
									.set('check', player.canMoveCard(true))
									('step 1');
								if (result.bool) {
									player.moveCard(true);
								} else {
									event.goto(2);
								}
								('step 2');
								var num = game.countPlayer(function (current) {
									return current != player && get.distance(current, player, 'attack') <= 1;
								});
								if (num <= 0) event.finish();
								player
									.chooseTarget('<span style=\"color: red\">溃围</span>:是否视为对<span style=\"color: red\">攻击距离</span>内至多' + get.cnNumber(num) + '<span style=\"color: red\">其他角色</span>使用1张杀', [0, num], function (card, player, target) {
										if (player != game.me) return get.distance(target, player, 'attack') <= 1 && player.getEnemies().includes(target);
										return get.distance(target, player, 'attack') <= 1 && target != player;
									})
									.set('ai', function (target) {
										if (player.getEnemies().includes(target)) return true;
										return false;
									});
								('step 3');
								if (result.bool) {
									game.playXu(['ly_junshenbao_caoren_kuiwei_sha1', 'ly_junshenbao_caoren_kuiwei_sha2'].randomGet());
									event.targets = result.targets;
									event.nums = result.targets.length;
								}
								('step 4');
								if (targets && targets.length) {
									for (var i = 0; i < targets.length; i++) {
										player.line(targets[i], 'thunder');
										player.useCard({ name: 'sha' }, targets[i], false);
									}
								}
							},
							ai: {
								threaten: 2,
								expose: 0.1,
							},
						},
						ly_junshenbao_caoren_zhenshou: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							prompt(event, player) {
								var num = game.countPlayer(function (current) {
									return current != player && get.distance(current, player, 'attack') <= 1;
								});
								var nh = num + 3;
								return '<span style=\"color: red\">镇守</span>:是否摸' + get.cnNumber(nh) + '张牌将武将牌<span style=\"color: red\">翻面</span>并获得3点护甲';
							},
							content() {
								'step 0';
								var num = game.countPlayer(function (current) {
									return current != player && get.distance(current, player, 'attack') <= 1;
								});
								player.draw(3 + num);
								('step 1');
								player.turnOver();
								player.changeHujia(3);
							},
							group: 'ly_junshenbao_caoren_zhenshou_delete',
							subSkill: {
								delete: {
									popup: false,
									forced: true,
									trigger: { player: 'phaseUseBegin' },
									content() {
										player.changeHujia(-event.player.hujia);
									},
								},
							},
							ai: {
								moreDraw: true,
								threaten: 2.1,
								effect: {
									target(card, player, target) {
										if (player == target && get.subtype(card) == 'equip3') {
											if (get.equipValue(card) <= 7.5) return 0;
										}
										if (target.getEquip(3)) return;
										return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
									},
								},
							},
						},
						ly_junshenbao_dingfeng_jijun: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return target != player;
							},
							check(card) {
								if (card.name == 'sha') return false;
								return 7 - get.value(card);
							},
							line: 'green',
							usable: 1,
							filterCard: true,
							selectCard: 1,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								if (!player.storage.ly_junshenbao_dingfeng_jijun) player.storage.ly_junshenbao_dingfeng_jijun = target;
								player.addTempSkill('ly_junshenbao_dingfeng_jijun_effect');
								player.addTempSkill('ly_junshenbao_dingfeng_jijun_delete');
							},
							subSkill: {
								delete: {
									forced: true,
									popup: false,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										delete player.storage.ly_junshenbao_dingfeng_jijun;
									},
								},
								effect: {
									mod: {
										targetInRange(card, player, target, now) {
											if (player.storage.ly_junshenbao_dingfeng_jijun == target) return true;
										},
										cardUsable(card, player, num) {
											if (card.name == 'sha') return Infinity;
										},
									},
									ai: {
										unequip: true,
									},
								},
							},
							ai: {
								threaten: 2,
								order: 9,
								result: {
									player(player, target) {
										if (player.countCards('h', { name: 'sha' }) > 1) return 1;
										return 0;
									},
									target: -1,
								},
							},
						},
						ly_junshenbao_dingfeng_lenfeng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								return game.hasPlayer(function (current) {
									return !event.targets.includes(current) && get.distance(player, current, 'attack') <= 1 && player.canUse('sha', current);
								});
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('ly_junshenbao_dingfeng_lenfeng'), function (card, player, target) {
										return !_status.event.source.includes(target) && get.distance(player, target, 'attack') <= 1 && player.canUse('sha', target);
									})
									.set('source', trigger.targets)
									.set('ai', function (target) {
										var player = _status.event.player;
										return ai.get.effect(target, { name: 'sha' }, player, player);
									});
								('step 1');
								if (result.bool) {
									if (!event.isMine() && !_status.connectMode) game.delay(0.5);
									player.draw();
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								player.line(event.target, 'green');
								trigger.targets.push(event.target);
							},
							ai: {
								effect: {
									player(card, player, target) {
										if (card.name == 'sha') {
											if (player._duanbingtmp) return;
											player._duanbingtmp = true;
											if (ai.get.effect(target, { name: 'sha' }, player, player) <= 0) {
												delete player._duanbingtmp;
												return;
											}
											if (
												game.hasPlayer(function (current) {
													return current != target && get.distance(player, current) <= 1 && player.canUse('sha', current) && ai.get.effect(current, { name: 'sha' }, player, player) > 0;
												})
											) {
												delete player._duanbingtmp;
												return [1, 1];
											}
											delete player._duanbingtmp;
										}
									},
								},
							},
						},
						ly_junshenbao_jiangwei_chengzhi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							derivation: 'ly_junshenbao_jiangwei_buxing',
							trigger: {
								player: 'phaseBeginStart',
							},
							filter(event, player) {
								return player.isMinHandcard(true) || player.isMinHp(true);
							},
							content() {
								'step 0';
								player.$skill('继丞相之遗志');
								('step 1');
								player.gainMaxHp();
								player.recover();
								var num = Math.min(5, player.maxHp - player.countCards('h'));
								player.draw(num);
								player.addSkill('ly_junshenbao_jiangwei_buxing');
								player.awakenSkill('ly_junshenbao_jiangwei_chengzhi');
							},
						},
						ly_junshenbao_jiangwei_buxing: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'phaseBegin',
							},
							content() {
								'step 0';
								var car = get.cards(1);
								event.cards = car;
								event.ca = car.slice(0);
								player.showCards(event.cards, '卜星');
								event.chosen = [];
								event.num1 = 0;
								event.num2 = 0;
								('step 1');
								var js = player.getCards('j');
								var pos;
								var choice = -1;
								var getval = function (card, pos) {
									if (js[pos]) {
										return get.judge(js[pos])(card);
									} else {
										return get.value(card);
									}
								};
								for (pos = 0; pos < Math.min(event.cards.length, js.length + 2); pos++) {
									var max = getval(event.cards[pos], pos);
									for (var j = pos + 1; j < event.cards.length; j++) {
										var current = getval(event.cards[j], pos);
										if (current > max) {
											choice = j;
											max = current;
										}
									}
									if (choice != -1) {
										break;
									}
								}
								player
									.chooseCardButton('<span style=\"color: red\">卜星</span>:选择要移动的牌', event.cards)
									.set('filterButton', function (button) {
										return !_status.event.chosen.includes(button.link);
									})
									.set('chosen', event.chosen)
									.set('ai', function (button) {
										return button.link == _status.event.choice ? 1 : 0;
									})
									.set('choice', event.cards[choice]);
								event.pos = pos;
								('step 2');
								if (result.bool) {
									var card = result.links[0];
									var index = event.cards.indexOf(card);
									event.card = card;
									event.chosen.push(card);
									event.cards.remove(event.card);
									var buttons = event.cards.slice(0);
									player
										.chooseControl(function () {
											return _status.event.controlai;
										})
										.set('controlai', event.pos || 0)
										.set('sortcard', buttons)
										.set('tosort', card);
								} else {
									event.goto(4);
								}
								('step 3');
								if (typeof result.index == 'number') {
									if (result.index > event.cards.length) {
										ui.cardPile.appendChild(event.card);
										event.num2++;
									} else {
										event.cards.splice(result.index, 0, event.card);
									}
									event.num--;
									if (event.num > 0) {
										event.goto(1);
									}
								}
								('step 4');
								while (event.cards.length) {
									ui.cardPile.insertBefore(event.cards.pop(), ui.cardPile.firstChild);
									event.num1++;
								}
								player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
								game.log(player, '将', '#y' + get.cnNumber(event.num1) + '张牌', '置于牌堆顶,', '#y' + get.cnNumber(event.num2) + '张牌', '置于牌堆底');
								('step 5');
								var use = false;
								var cardss = { name: event.ca[0].name };
								var info = get.info(cardss);
								if (get.type(cardss) != 'equip' && !info.notarget && !info.multitarget) {
									if (
										game.hasPlayer(function (current) {
											return player.canUse(cardss, current);
										})
									) {
										use = true;
									}
								}
								if (use) {
									var next = player.chooseCardTarget({
										position: 'h',
										filterCard(card) {
											if (
												game.hasPlayer(function (current) {
													var cardax = { name: event.ca[0].name, suit: card.suit, number: card.number };
													return player.canUse(cardax, current);
												})
											) {
												return true;
											}
											return false;
										},
										selectTarget(card, target) {
											var cardss = { name: event.ca[0].name };
											var info = get.info(cardss);
											return info.selectTarget;
										},
										filterTarget(card, player, target) {
											var player = _status.event.player;
											var cardaa = ui.selected.cards[0];
											var cardax = game.createCard(event.ca[0].name, cardaa.suit, cardaa.number, event.ca[0].nature);
											return player.canUse(cardax, target); //lib.filter.filterTarget(cardax,player,target);
										},
										ai1(card) {
											if (event.ca[0].name == 'du') return -1;
											return 7 - get.value(card);
										},
										ai2(target) {
											var cardaa = ui.selected.cards[0];
											var cardax = game.createCard(event.ca[0].name, cardaa.suit, cardaa.number, event.ca[0].nature);
											var player = _status.event.player;
											return get.effect(target, cardax, player, player);
										},
										prompt: '是否选择1张手牌当' + get.translation(event.ca[0]) + '使用？',
									});
								} else {
									event.finish();
								}
								('step 6');
								if (result.bool) {
									event.cardssss = result.cards;
									if (!event.isMine()) game.delayx();
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 7');
								if (event.targets) {
									var cardss = { name: event.ca[0].name, nature: event.ca[0].nature };
									player.useCard(cardss, event.targets, event.cardssss);
									event.finish();
								} else {
									event.finish();
								}
							},
							ai: {
								threaten: 2,
								guanxing: true,
							},
						},
						ly_junshenbao_jiangwei_yaozhan: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							prompt(event, player) {
								return '是否对' + get.translation(event.player) + '发动<span style=\"color: red\">"邀战"</span>';
							},
							check(event, player) {
								if (get.attitude(player, event.player) >= 0) return false;
								return true;
							},
							filter(event, player) {
								return event.player != player && event.player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.line(trigger.player, 'fire');
								player.discardPlayerCard(true, trigger.player, 'he');
								('step 1');
								player.addTempSkill('ly_junshenbao_jiangwei_yaozhan_judge');
								player.addTempSkill('ly_junshenbao_jiangwei_yaozhan_juedou');
							},
							subSkill: {
								judge: {
									popup: false,
									forced: true,
									trigger: {
										player: 'damageEnd',
									},
									content() {
										player.removeSkill('ly_junshenbao_jiangwei_yaozhan_juedou');
									},
								},
								juedou: {
									popup: false,
									silent: true,
									forced: true,
									trigger: {
										global: 'phaseUseEnd',
									},
									filter(event, player) {
										if (event.player != player) return true;
										return false;
									},
									content() {
										player.useCard({ name: 'juedou' }, trigger.player, 'ly_junshenbao_jiangwei_yaozhan_juedou');
										delete player.storage.ly_junshenbao_jiangwei_yaozhan;
										delete player.storage.ly_junshenbao_jiangwei_yaozhan1;
									},
								},
							},
							ai: {
								threaten: 2,
								expose: 0.2,
							},
						},
						ly_junshenbao_zhangren_lingfeng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'shaBefore',
							},
							filter(event, player) {
								return player.getFriends().includes(event.target.previous) || player.getFriends().includes(event.target.next);
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								player.line(trigger.target, 'white');
								if (player.getFriends().includes(trigger.target.next)) trigger.target.next.line(trigger.target, 'white');
								if (player.getFriends().includes(trigger.target.previous)) trigger.target.previous.line(trigger.target, 'white');
								var num = 0;
								if (player.getFriends().includes(trigger.target.previous)) num++;
								if (player.getFriends().includes(trigger.target.next)) num++;
								trigger.target.chooseToDiscard('he', true, num);
							},
							group: ['ly_junshenbao_zhangren_lingfeng_distance'],
							subSkill: {
								distance: {
									popup: false,
									forced: true,
									trigger: {
										global: ['gameStart', 'dieAfter', 'useCard'],
									},
									content() {
										'step 0';
										delete player.storage.ly_junshenbao_zhangren_lingfeng_target;
										('step 1');
										if (!player.storage.ly_junshenbao_zhangren_lingfeng_target) {
											player.storage.ly_junshenbao_zhangren_lingfeng_target = [];
										}
										('step 2');
										game.countPlayer(function (current) {
											if (player.getFriends().includes(current.previous) && player.getFriends().includes(current.next)) {
												player.storage.ly_junshenbao_zhangren_lingfeng_target.push(current);
											}
										});
									},
									mod: {
										globalFrom(from, to, distance) {
											if (from.storage.ly_junshenbao_zhangren_lingfeng_target && from.storage.ly_junshenbao_zhangren_lingfeng_target.includes(to)) return distance - Infinity;
										},
									},
								},
							},
						},
						ly_junshenbao_zhangren_chuanxin: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							prompt(event, player) {
								return '<span style=\"color: red\">穿心</span>:是否令目标<span style="color: red">失去所有技能</span>(对"' + get.translation(event.player) + '")';
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							filter(event, player) {
								if (event.player.hasSkill('ly_junshenbao_zhangren_chuanxin_recover')) return false;
								return event.card && (event.card.name == 'wanjian' || event.card.name == 'sha');
							},
							content() {
								var target = trigger.player;
								player.line(target, 'white');
								target.disableSkill('', target.getCards('s'));
								target.addSkill('ly_junshenbao_zhangren_chuanxin_recover');
								game.log(target, '<span style=\"color: red\">失去所有技能</span>');
							},
							subSkill: {
								recover: {
									trigger: {
										player: 'phaseUseEnd',
									},
									popup: false,
									forced: true,
									content() {
										player.enableSkill('', player.getCards('s'));
										player.removeSkill('ly_junshenbao_zhangren_chuanxin_recover');
										game.log(player, '<span style=\"color: gold\">回复所有技能</span>');
									},
								},
							},
						},
						ly_junshenbao_spjiaxu_yongdi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget('<span style=\"color: gold\">拥嫡</span>:是否令1名其他角色增加1点体力上限并获得1项技能', function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									player.$skill('拥嫡');
									player.awakenSkill('ly_junshenbao_spjiaxu_yongdi');
									var target = result.targets[0];
									player.line(target, 'thunder');
									target.gainMaxHp();
									var skills = [];
									for (var i in lib.character) {
										for (var j = 0; j < lib.character[i][3].length; j++) {
											var info = lib.skill[lib.character[i][3][j]];
											if (info && (info.gainable || !info.unique) && !info.zhuSkill) {
												skills.add(lib.character[i][3][j]);
											}
										}
									}
									var link = skills.randomGet();
									result.targets[0].addSkill(link);
									result.targets[0].mark(link, {
										name: get.translation(link),
										content: lib.translate[link + '_info'],
									});
									game.log(result.targets[0], '获得技能', '【' + get.translation(link) + '】');
								}
							},
							ai: {
								expose: 2,
							},
						},
						ly_junshenbao_spjiaxu_mijian: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							line: 'thunder',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								if (ui.selected.targets.length) {
									return target.countCards('h') > 0;
								}
								return true;
							},
							filterCard: true,
							discard: false,
							delay: 0,
							check(card) {
								if (_status.event.player.hp == 1) return 8 - get.value(card);
								return 6 - get.value(card);
							},
							selectTarget: 2,
							multitarget: true,
							content() {
								'step 0';
								player.give(cards, targets[0]);
								targets[0].gain(cards, player);
								('step 1');
								targets[0].chooseToCompare(targets[1]);
								('step 2');
								if (result.bool) {
									targets[0].chooseToDiscard('he', 2, true);
									targets[1].loseHp();
								} else {
									targets[1].chooseToDiscard('he', 2, true);
									targets[0].loseHp();
								}
							},
							ai: {
								expose: 0.4,
								order: 4,
								result: {
									target(player, target) {
										if (player.hasUnknown()) return 0;
										if (ui.selected.targets.length) return -1;
										return -0.5;
									},
								},
							},
						},
						ly_junshenbao_spjiaxu_qianlv: {
							nobracket: true,
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay' && player != target) {
										return false;
									}
								},
								wuxieRespondable() {
									return false;
								},
							},
						},
						ly_junshenbao_jiangfei_yanxi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							init(player) {
								player.storage.ly_junshenbao_jiangfei_yanxi = [];
							},
							mark: true,
							marktext: '<span style="color: red">息</span>',
							intro: {
								content: 'cardCount',
							},
							trigger: {
								player: 'phaseDrawBegin',
							},
							filter(event, player) {
								return player.countCards('h') > 0 && player.storage.ly_junshenbao_jiangfei_yanxi.length < 5;
							},
							content() {
								'step 0';
								player.storage.ly_junshenbao_jiangfei_yanxi = player.storage.ly_junshenbao_jiangfei_yanxi.concat(player.getCards('h'));
								game.addVideo('storage', player, ['ly_junshenbao_jiangfei_yanxi', get.cardsInfo(player.storage.ly_junshenbao_jiangfei_yanxi), 'cards']);
								player.lose(player.getCards('h'), ui.special);
								('step 1');
								player.draw(player.maxHp - player.countCards('h'));
								trigger.cancel();
							},
						},
						ly_junshenbao_jiangfei_shoucheng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'phaseEnd',
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							filter(event, player) {
								return !event.player.getStat('damage') && player.storage.ly_junshenbao_jiangfei_yanxi.length;
							},
							content() {
								'step 0';
								player.chooseCardButton('交给' + get.translation(trigger.player) + '1张"息"', true, player.storage.ly_junshenbao_jiangfei_yanxi);
								('step 1');
								var card = result.links[0];
								player.storage.ly_junshenbao_jiangfei_yanxi.remove(card);
								trigger.player.gain(card, player);
								player.$give(card, trigger.player);
								trigger.player.draw();
							},
							ai: {
								threaten: 2,
								expose: 0.2,
							},
						},
						ly_junshenbao_zhoutai_youzhu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								global: 'damageBegin',
							},
							filter(event, player) {
								return player.getFriends().includes(event.player);
							},
							content() {
								trigger.player.line(player, 'green');
								trigger.player = player;
							},
						},
						ly_junshenbao_zhoutai_buqu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								player: 'changeHp',
							},
							filter(event, player) {
								return player.hp <= 0;
							},
							content() {
								'step 0';
								if (!player.storage.ly_junshenbao_zhoutai_buqu1) player.storage.ly_junshenbao_zhoutai_buqu1 = 0;
								event.cards = get.cards(0);
								player.showCards(event.cards);
								('step 1');
								if (!player.hasSkill('ly_junshenbao_zhoutai_buqu_spade') && !player.hasSkill('ly_junshenbao_zhoutai_buqu_heart') && !player.hasSkill('ly_junshenbao_zhoutai_buqu_diamond') && !player.hasSkill('ly_junshenbao_zhoutai_buqu_club')) {
									player.storage.ly_junshenbao_zhoutai_buqu = event.cards.suit;
									if (event.cards.suit == 'spade') {
										player.recover(1 - player.hp);
										player.removeSkill('ly_junshenbao_zhoutai_buqu_heart');
										player.removeSkill('ly_junshenbao_zhoutai_buqu_club');
										player.removeSkill('ly_junshenbao_zhoutai_buqu_diamond');
										player.addSkill('ly_junshenbao_zhoutai_buqu_spade');
										event.cards.discard();
									}
									if (event.cards.suit == 'club') {
										player.recover(1 - player.hp);
										player.removeSkill('ly_junshenbao_zhoutai_buqu_heart');
										player.removeSkill('ly_junshenbao_zhoutai_buqu_spade');
										player.removeSkill('ly_junshenbao_zhoutai_buqu_diamond');
										player.addSkill('ly_junshenbao_zhoutai_buqu_club');
										event.cards.discard();
									}
									if (event.cards.suit == 'heart') {
										player.recover(1 - player.hp);
										player.removeSkill('ly_junshenbao_zhoutai_buqu_spade');
										player.removeSkill('ly_junshenbao_zhoutai_buqu_club');
										player.removeSkill('ly_junshenbao_zhoutai_buqu_diamond');
										player.addSkill('ly_junshenbao_zhoutai_buqu_heart');
										event.cards.discard();
									}
									if (event.cards.suit == 'diamond') {
										player.recover(1 - player.hp);
										player.removeSkill('ly_junshenbao_zhoutai_buqu_heart');
										player.removeSkill('ly_junshenbao_zhoutai_buqu_club');
										player.removeSkill('ly_junshenbao_zhoutai_buqu_spade');
										player.addSkill('ly_junshenbao_zhoutai_buqu_diamond');
										event.cards.discard();
									}
								} else {
									if (event.cards.suit == player.storage.ly_junshenbao_zhoutai_buqu) {
										player.popup('<span style=\"color: red\">扛不住了</span>');
									} else {
										player.storage.ly_junshenbao_zhoutai_buqu = event.cards.suit;
										if (event.cards.suit == 'spade') {
											player.recover(1 - player.hp);
											player.removeSkill('ly_junshenbao_zhoutai_buqu_heart');
											player.removeSkill('ly_junshenbao_zhoutai_buqu_club');
											player.removeSkill('ly_junshenbao_zhoutai_buqu_diamond');
											player.addSkill('ly_junshenbao_zhoutai_buqu_spade');
											event.cards.discard();
										}
										if (event.cards.suit == 'club') {
											player.recover(1 - player.hp);
											player.removeSkill('ly_junshenbao_zhoutai_buqu_heart');
											player.removeSkill('ly_junshenbao_zhoutai_buqu_spade');
											player.removeSkill('ly_junshenbao_zhoutai_buqu_diamond');
											player.addSkill('ly_junshenbao_zhoutai_buqu_club');
											event.cards.discard();
										}
										if (event.cards.suit == 'heart') {
											player.recover(1 - player.hp);
											player.removeSkill('ly_junshenbao_zhoutai_buqu_spade');
											player.removeSkill('ly_junshenbao_zhoutai_buqu_club');
											player.removeSkill('ly_junshenbao_zhoutai_buqu_diamond');
											player.addSkill('ly_junshenbao_zhoutai_buqu_heart');
											event.cards.discard();
										}
										if (event.cards.suit == 'diamond') {
											player.recover(1 - player.hp);
											player.removeSkill('ly_junshenbao_zhoutai_buqu_heart');
											player.removeSkill('ly_junshenbao_zhoutai_buqu_club');
											player.removeSkill('ly_junshenbao_zhoutai_buqu_spade');
											player.addSkill('ly_junshenbao_zhoutai_buqu_diamond');
											event.cards.discard();
										}
									}
								}
							},
							group: ['ly_junshenbao_zhoutai_buqu_spade', 'ly_junshenbao_zhoutai_buqu_heart', 'ly_junshenbao_zhoutai_buqu_club', 'ly_junshenbao_zhoutai_buqu_heart', 'ly_junshenbao_zhoutai_buqu_draw'],
							subSkill: {
								draw: {
									forced: true,
									popup: false,
									trigger: {
										player: 'damageEnd',
									},
									filter(event, player) {
										return player.countCards('h') < player.maxHp - player.hp;
									},
									content() {
										player.draw(Math.min(5, player.maxHp - player.hp - player.countCards('h')));
									},
								},
								spade: {
									mark: true,
									marktext: '<span style="color: black">♠️️</span>',
									intro: {
										content: '上次<span style="color: red">不屈</span>花色',
									},
								},
								club: {
									mark: true,
									marktext: '<span style="color: black">♣️️</span>',
									intro: {
										content: '上次<span style="color: red">不屈</span>花色',
									},
								},
								heart: {
									mark: true,
									marktext: '<span style="color: red">♥️️</span>',
									intro: {
										content: '上次<span style="color: red">不屈</span>花色',
									},
								},
								diamond: {
									mark: true,
									marktext: '<span style="color: red">◆</span>',
									intro: {
										content: '上次<span style="color: red">不屈</span>花色',
									},
								},
							},
						},
						ly_junshenbao_zhangxiu_congjian: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (!event.targets.includes(player)) return false;
								return get.type(event.card) == 'trick' && event.player != player;
							},
							forced: true,
							content() {
								'step 0';
								event.players = trigger.player;
								event.cards = trigger.card;
								var suit = trigger.card.suit;
								player
									.chooseCard('<span style=\"color: red\">从谏</span>:是否交给' + get.translation(trigger.player) + '1张' + get.translation(suit) + '手牌,取消' + get.translation(trigger.card) + '对你的结算', function (card) {
										return card.suit == suit;
									})
									.set('ai', function (card) {
										if (event.cards.name == 'taoyuan') return false;
										if (get.attitude(player, event.players) > 0) {
											if (player.maxHp - player.hp < 3 && event.players.hp < 3 && (card.name == 'tao' || card.name == 'jiu')) return 2;
											return 9 - get.value(card);
										}
										if (get.attitude(player, event.players) <= 0) {
											if (card.name == 'tao' || card.name == 'jiu' || card.name == 'shunshou' || card.name == 'guohe' || card.name == 'juedou' || card.name == 'tiesuo' || card.name == 'nanman' || card.name == 'wanjian') return false;
											return 5 - get.value(card);
										}
									});
								('step 1');
								if (result.bool) {
									player.line(event.players, 'white');
									var card = result.cards[0];
									event.players.gain(card, player);
									player.$give(card, event.players);
									trigger.targets.remove(player);
									game.log('<span style=\"color: red\">取消</span>', event.players, '的', trigger.card, '对', player, '的结算');
									player.storage.ly_junshenbao_zhangxiu_congjian_card = trigger.card;
								} else {
									event.finish();
								}
							},
							group: ['ly_junshenbao_zhangxiu_congjian_judge', 'ly_junshenbao_zhangxiu_congjian_gain'],
							subSkill: {
								judge: {
									popup: false,
									forced: true,
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										return event.card && event.card == player.storage.ly_junshenbao_zhangxiu_congjian_card;
									},
									content() {
										player.storage.ly_junshenbao_zhangxiu_congjian = true;
									},
								},
								gain: {
									popup: false,
									forced: true,
									trigger: {
										global: 'useCardAfter',
									},
									filter(event, player) {
										return get.position(event.card) == 'd' && player.storage.ly_junshenbao_zhangxiu_congjian_card == event.card;
									},
									content() {
										'step 0';
										if (!player.storage.ly_junshenbao_zhangxiu_congjian) {
											player.gain(trigger.card, 'gain2');
										} else {
											player.draw();
										}
										('step 1');
										delete player.storage.ly_junshenbao_zhangxiu_congjian_card;
										player.storage.ly_junshenbao_zhangxiu_congjian = false;
									},
								},
							},
						},
						ly_junshenbao_zhangxiu_baiming: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							derivation: ['ly_junshenbao_zhangxiu_xiongju', 'ly_junshenbao_zhangxiu_baiming_update'],
							enable: 'phaseUse',
							usable: 1,
							content() {
								player.$skill('北地枭雄<br>乱世不败');
								var list = [];
								var skills2 = [];
								for (var i in lib.character) {
									for (var j = 0; j < lib.character[i][3].length; j++) {
										skills2.add(lib.character[i][3][j]);
									}
								}
								for (var i of game.players) {
									//QQ
									if (i == player) continue;
									var skills = i.getCards('s');
									skills = skills.slice(0);
									for (var j = 0; j < skills.length; j++) {
										if (lib.skill[skills[j]] && lib.translate[skills[j] + '_info']) {
											var str = lib.translate[skills[j] + '_info'];
											if (str.includes('杀') && skills2.includes(skills[j])) {
												list.push(skills[j]);
											}
										}
									}
								}
								player.addAdditionalSkill('ly_junshenbao_zhangxiu_baiming', list);
								player.addSkill('ly_junshenbao_zhangxiu_baiming_clear');
								player.loseMaxHp();
							},
							ai: {
								order: 8,
								threaten: 2,
								result: {
									player(player) {
										var num = game.countPlayer(function (current) {
											return player.getFriends().includes(current);
										});
										if (num < 1 && player.countCards('h', { name: 'sha' }) > 0) return 1;
										if (player.countCards('h', { name: 'sha' }) < 3) return -1;
										return 1;
									},
								},
							},
						},
						ly_junshenbao_zhangxiu_baiming_clear: {
							popup: false,
							forced: true,
							trigger: {
								player: 'phaseEnd',
							},
							content() {
								player.removeAdditionalSkill('ly_junshenbao_zhangxiu_baiming');
								player.removeSkill('ly_junshenbao_zhangxiu_baiming_clear');
								player.removeSkill('ly_junshenbao_zhangxiu_baiming');
								player.addSkill('ly_junshenbao_zhangxiu_baiming_update');
								player.addSkill('ly_junshenbao_zhangxiu_xiongju');
							},
						},
						ly_junshenbao_zhangxiu_baiming_update: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								var red = player.countCards('h', { color: 'red' });
								var black = player.countCards('h', { color: 'black' });
								return player.countCards('h') > 0 && red != black;
							},
							content() {
								'step 0';
								event.num = 0;
								var red = player.countCards('h', { color: 'red' });
								var black = player.countCards('h', { color: 'black' });
								if (red > black) event.num = red - black;
								if (red < black) event.num = black - red;
								('step 1');
								player.showCards(player.getCards('h'));
								var num = event.num;
								player
									.chooseTarget([1, num], '是否视为对攻击距离内至多' + get.cnNumber(num) + '名其他角色使用1张杀', function (card, player, target) {
										return get.distance(player, target, 'attack') <= 1 && player != target;
									})
									.set('ai', function (target) {
										return get.effect(target, { name: 'sha' }, _status.event.player);
									});
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'white');
									event.targets = result.targets;
									event.nums = result.targets.length;
								} else {
									event.finish();
								}
								('step 3');
								if (targets && targets.length) {
									for (var i = 0; i < targets.length; i++) {
										player.useCard({ name: 'sha' }, targets[i], false);
									}
								}
							},
							ai: {
								order: 3,
								result: {
									player: 1,
								},
								threaten: 2,
							},
						},
						ly_junshenbao_zhangxiu_xiongju: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								global: 'phaseBegin',
							},
							prompt: '<span style="color: red">雄据</span>:是否摸1张牌',
							content() {
								player.draw();
								if (player.countCards('h') > trigger.player.countCards('h')) player.chooseToDiscard(true, 'he');
							},
							ai: {
								threaten: 1.5,
							},
						},
						ly_junshenbao_zhenji_pianhong: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								event.num = 5;
								('step 1');
								event.card = get.cards()[0];
								if (event.num == 0) event.goto(2);
								if (event.num > 0 && get.color(event.card) == 'black') {
									player.addSkill('ly_junshenbao_zhenji_pianghong_black');
								}
								if (event.num > 0 && get.color(event.card) == 'red') {
									player.addSkill('ly_junshenbao_zhenji_pianghong_red');
								}
								('step 2');
								player.chooseControl('黑', '红').ai = function () {
									if (player.hasSkill('ly_junshenbao_zhenji_pianghong_black')) return '黑';
									if (player.hasSkill('ly_junshenbao_zhenji_pianghong_red')) return '红';
									if (Math.random() <= 0.5) return '红';
									return '黑';
								};
								('step 3');
								if (result.control == '黑') {
									player.popup('<span style=\"color: black\">黑</span>');
									game.log(player, '猜牌堆顶的牌颜色为<span style=\"color: black\">黑色</span>');
									var card = event.card;
									player.showCards(card);
									if (get.color(card) == 'black') event.goto(5);
									else event.finish();
								}
								('step 4');
								if (result.control == '红') {
									player.popup('<span style=\"color: red\">红</span>');
									game.log(player, '猜牌堆顶的牌颜色为<span style=\"color: red\">红色</span>');
									var card = event.card;
									player.showCards(card);
									if (get.color(card) == 'red') event.goto(5);
									else event.finish();
								}
								('step 5');
								event.num--;
								player.removeSkill('ly_junshenbao_zhenji_pianghong_black');
								player.removeSkill('ly_junshenbao_zhenji_pianghong_red');
								player.gain(event.card, 'gain2', 'log');
								event.goto(1);
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_zhenji_pianghong_black: {},
						ly_junshenbao_zhenji_pianghong_red: {},
						ly_junshenbao_zhenji_wenzhao: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							filter(event, player) {
								if (_status.currentPhase == player) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQ
										if (get.color(i) == 'black') {
											return true;
										}
										if (get.color(i) == 'red') {
											return true;
										}
									}
								return false;
							},
							content() {
								player.draw();
							},
							ai: {
								noh: true,
								loseDraw: true,
							},
						},
						ly_junshenbao_lingtong_xuanzhan_false: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							group: 'ly_junshenbao_lingtong_xuanzhan',
						},
						ly_junshenbao_lingtong_xuanzhan: {
							nobracket: true,
							forced: true,
							trigger: {
								player: ['discardEnd', 'damageEnd'],
							},
							filter(event, player) {
								if (event.name == 'discard') {
									if (event.cards.length) return true;
									return false;
								}
								if (event.name == 'damage') {
									if (event.num > 0) return true;
									return false;
								}
								return false;
							},
							content() {
								'step 0';
								event.num = 0;
								if (trigger.name == 'discard') event.num += trigger.cards.length;
								else event.num += trigger.num * 2;
								('step 1');
								player
									.chooseTarget('<span style=\"color: red\">旋战</span>:是否弃置1名其他角色<span style=\"color: red\">区域内</span>1张牌', function (card, player, target) {
										return target != player && target.countCards('hej') > 0;
									})
									.set('ai', function (target) {
										if (get.attitude(player, target) > 0) {
											if (target.countCards('j') > 0) return 100;
											if (target.getEquip('baiyin') && target.maxHp - target.hp > 0) return 99;
										}
										if (get.attitude(player, target) <= 0) {
											if (target.countCards('e') > 0) {
												if (target.maxHp - target.hp > 0 && target.countCards('e') == 1 && target.getEquip('baiyin')) return false;
												if (!target.hasSkillTag('equipDraw') || !target.hasSkillTag('receiveEquip')) return 98;
												return -100;
											}
											if (target.countCards('h') > 0) {
												if (target.hasSkill('nohDamage') || target.hasSkillTag('noh') || target.hasSkillTag('loseDraw')) return -100;
												return 97;
											}
											if (target.countCards('j') > 0) {
												if (target.countCards('he') == 0) return -100;
												return 1;
											}
										}
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									game.playXu(['ly_junshenbao_lingtong_xuanzhan1', 'ly_junshenbao_lingtong_xuanzhan2'].randomGet());
									player.line(result.targets[0], 'green');
									player.discardPlayerCard('hej', true, result.targets[0]);
								} else {
									event.finish();
								}
								('step 3');
								event.num--;
								if (event.num > 0) event.goto(1);
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten: 2,
								expose: 0.3,
							},
						},
						ly_junshenbao_zhangjiao_jilei: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseUseEnd',
							},
							filter(event, player) {
								return player.countCards('h', { color: 'black' }) > 0;
							},
							forced: true,
							content() {
								'step 0';
								player.chooseControl('选项一', '选项二').set('prompt', get.prompt('ly_junshenbao_zhangjiao_jilei')).set('choiceList', ['是否弃置所有<span style=\"color: black\">黑色手牌</span>', '取消']).ai = function (event, player) {
									var black = player.countCards('h', { color: 'black' });
									var num = player.countCards('h');
									var damage = game.countPlayer(function (current) {
										return player.getEnemies().includes(current) && player.canUse({ name: 'sha', nature: 'thunder' }, current, false);
									});
									if (damage == 0) return '选项二';
									if (black <= damage) return '选项一';
									if (!num > player.hp && black - damage >= 2) return '选项二';
									return '选项一';
								};
								('step 1');
								if (result.control == '选项二') event.finish();
								else {
									player.showHandcards();
									event.num = player.countCards('h', { color: 'black' });
									var card = player.getCards('h', { color: 'black' });
									player.discard(card);
								}
								('step 2');
								var num = event.num;
								player
									.chooseTarget('选择至多' + get.cnNumber(num) + '名其他角色执行技能效果', [1, num], true, function (card, player, target) {
										if (player != game.me) return player.getEnemies().includes(target);
										return player != target;
									})
									.set('ai', function (target) {
										return player.canUse({ name: 'sha', nature: 'thunder' }, target, false);
									});
								('step 3');
								if (result.bool) {
									player.line(result.targets, 'white');
									event.targets = result.targets;
									event.nums = result.targets.length;
								} else {
									event.finish();
								}
								('step 4');
								if (targets && targets.length) {
									player.line(targets, 'thunder');
									for (var i = 0; i < targets.length; i++) {
										player.useCard({ name: 'sha', nature: 'thunder' }, targets[i], false);
									}
								}
								('step 5');
								if (event.num - event.nums > 0) player.draw(event.num - event.nums);
							},
							group: 'ly_junshenbao_zhangjiao_jilei_recover',
							subSkill: {
								recover: {
									popup: false,
									trigger: {
										source: 'damageEnd',
									},
									filter(event, player) {
										return event.nature == 'thunder';
									},
									content() {
										'step 0';
										player.judge(function (card) {
											if (player.hp == player.maxHp) {
												if (get.color(card) == 'red') return -1;
											}
											if (get.color(card) == 'red') return 1;
											return 0;
										});
										('step 1');
										if (result.color) {
											if (result.color == 'red') player.recover();
											else player.draw();
										}
									},
								},
							},
							ai: {
								threaten: 2,
								expose: 0.1,
							},
						},
						ly_junshenbao_zhangjiao_guilue: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'judgeEnd',
							},
							filter(event, player) {
								if (event.player == player) return false;
								if (get.color(event.result.card) != 'black') return false;
								return true;
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							content() {
								'step 0';
								player.line(trigger.player, 'white');
								trigger.player.damage('thunder', 'nosource');
								('step 1');
								if (!trigger.player.storage.ly_junshenbao_zhangjiao_guilue_1) {
									trigger.player.storage.ly_junshenbao_zhangjiao_guilue_1 = 0;
								}
								trigger.player.storage.ly_junshenbao_zhangjiao_guilue_1 += 1;
								if (!player.storage.ly_junshenbao_zhangjiao_guilue_1) {
									player.storage.ly_junshenbao_zhangjiao_guilue_1 = 0;
								}
								player.storage.ly_junshenbao_zhangjiao_guilue_1 += 1;
								('step 2');
								trigger.player.addSkill('ly_junshenbao_zhangjiao_guilue_reduce');
								trigger.player.addSkill('ly_junshenbao_zhangjiao_guilue_remove');
							},
							group: 'ly_junshenbao_zhangjiao_guilue_increase',
							subSkill: {
								increase: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseDrawBegin',
									},
									filter(event, player) {
										return player.storage.ly_junshenbao_zhangjiao_guilue_1 > 0;
									},
									content() {
										trigger.num += player.storage.ly_junshenbao_zhangjiao_guilue_1;
										player.addTempSkill('ly_junshenbao_zhangjiao_guilue_player');
									},
									mod: {
										maxHandcard(player, num) {
											if (player.storage.ly_junshenbao_zhangjiao_guilue_1) return num + player.storage.ly_junshenbao_zhangjiao_guilue_1;
										},
									},
								},
								player: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										delete player.storage.ly_junshenbao_zhangjiao_guilue_1;
									},
								},
								reduce: {
									mod: {
										maxHandcard(player, num) {
											return num - player.storage.ly_junshenbao_zhangjiao_guilue_1;
										},
									},
								},
								remove: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										delete player.storage.ly_junshenbao_zhangjiao_guilue_1;
										player.removeSkill('ly_junshenbao_zhangjiao_guilue_reduce');
										player.removeSkill('ly_junshenbao_zhangjiao_guilue_remove');
									},
								},
							},
						},
						ly_junshenbao_zhangjiao_tianbing: {
							mode: ['identity'],
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							zhuSkill: true,
							init(player) {
								player.storage.ly_junshenbao_zhangjiao_tianbing = [];
							},
							marktext: '兵',
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								if (player.identity != 'zhu') return false;
								return player.getFriends().includes(event.source);
							},
							forced: true,
							content() {
								'step 0';
								event.players = trigger.source;
								event.players.chooseBool('是否令' + get.translation(game.zhu) + '发动<span style=\"color: red\">"天兵"</span>').ai = function (event, player) {
									return true;
								};
								('step 1');
								if (result.bool) {
									trigger.source.line(player, 'white');
									event.goto(2);
								} else {
									event.finish();
								}
								('step 2');
								player.draw();
								if (player.countCards('he')) {
									player.chooseCard('将1张牌置于武将牌上作为<天兵>', true, 'he');
								} else {
									event.finish();
								}
								('step 3');
								if (result.cards && result.cards.length) {
									player.lose(result.cards, ui.special);
									if (player.storage.ly_junshenbao_zhangjiao_tianbing == undefined) player.storage.ly_junshenbao_zhangjiao_tianbing = [];
									player.storage.ly_junshenbao_zhangjiao_tianbing.push(result.cards[0]);
									player.showCards(player.storage.ly_junshenbao_zhangjiao_tianbing, '黄巾天兵符');
									player.markSkill('ly_junshenbao_zhangjiao_tianbing');
								}
							},
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										player.$throw(storage);
										for (var i = 0; i < storage.length; i++) {
											storage[i].discard();
										}
										delete player.storage.ly_junshenbao_zhangjiao_tianbing;
									}
								},
							},
							group: ['ly_junshenbao_zhangjiao_tianbing_respond', 'ly_junshenbao_zhangjiao_tianbing_use', 'ly_junshenbao_zhangjiao_tianbing_card'],
							subSkill: {
								card: {
									popup: false,
									silent: true,
									trigger: {
										player: 'phaseBegin',
									},
									filter(event, player) {
										return player.storage.ly_junshenbao_zhangjiao_tianbing.length;
									},
									content() {
										'step 0';
										var num = player.storage.ly_junshenbao_zhangjiao_tianbing.length;
										player.chooseCardButton(num, true, get.cards(num), '按顺序将卡牌置于牌堆顶(先选择的在上)').set('ai', function (button) {
											return get.value(button.link);
										});
										('step 1');
										if (result.bool) {
											var list = result.links.slice(0);
											while (list.length) {
												ui.cardPile.insertBefore(list.pop(), ui.cardPile.firstChild);
											}
										}
									},
								},
							},
							ai: {
								moreDraw: true,
								threaten: 2,
							},
						},
						ly_junshenbao_zhangjiao_tianbing_use: {
							popup: false,
							silent: true,
							enable: 'chooseToUse',
							filter(event, player) {
								return player.storage.ly_junshenbao_zhangjiao_tianbing.length;
							},
							chooseButton: {
								dialog(event, player) {
									return ui.create.dialog('黄巾天兵符', player.storage.ly_junshenbao_zhangjiao_tianbing, 'hidden');
								},
								filter(button, player) {
									var evt = _status.event.parent;
									if (evt && evt.filterCard) {
										return evt.filterCard(button.link, player, evt);
									}
									return true;
								},
								check(button) {
									if (button.link.name == 'du') return -2;
									var player = _status.event.player;
									if (button.link.name == 'xingjiegoutong' && player.countCards('h') > 1) return -2;
									if (get.select(get.info(button.link).selectTarget)[1] == -1) {
										if (get.type(button.link) == 'delay') return -1;
										if (get.type(button.link) == 'equip') {
											var current = player.getCards('e', { subtype: get.subtype(button.link) })[0];
											if (current && get.equipValue(current) >= get.equipValue(button.link)) return -1;
											return 1;
										}
										if (get.tag(button.link, 'multitarget')) return -1;
										if (button.link.name == 'huoshaolianying') return -1;
									}
									if (button.link.name == 'jiu') {
										if (get.effect(player, { name: 'jiu' }, player) > 0) {
											return 1;
										}
										return -1;
									}
									return 1;
								},
								backup(links, player) {
									return {
										filterCard() {
											return false;
										},
										selectCard: -1,
										viewAs: links[0],
										onuse(result, player) {
											player.storage.ly_junshenbao_zhangjiao_tianbing.remove(result.card);
										},
									};
								},
								prompt(links, player) {
									return '选择' + get.translation(links) + '的目标';
								},
							},
							ai: {
								order: 6,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
								useful: -1,
								value: -1,
							},
						},
						ly_junshenbao_zhangjiao_tianbing_respond: {
							popup: false,
							silent: true,
							trigger: {
								player: 'chooseToRespondBegin',
							},
							filter(event, player) {
								if (event.responded) return false;
								if (!player.storage.ly_junshenbao_zhangjiao_tianbing.length) return false;
								for (var i = 0; i < player.storage.ly_junshenbao_zhangjiao_tianbing.length; i++) {
									if (event.filterCard(player.storage.ly_junshenbao_zhangjiao_tianbing[i], player, event)) return true;
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseButton(['天兵', player.storage.ly_junshenbao_zhangjiao_tianbing])
									.set('filterButton', function (button) {
										var evt = _status.event.getTrigger();
										if (evt && evt.filterCard) {
											return evt.filterCard(button.link, _status.event.player, evt);
										}
										return true;
									})
									.set('ai', function (button) {
										var evt = _status.event.getTrigger();
										if (evt && evt.ai) {
											var tmp = _status.event;
											_status.event = evt;
											var result = evt.ai(button.link, _status.event.player, evt);
											_status.event = tmp;
											return result;
										}
										return 1;
									});
								('step 1');
								if (result.bool) {
									result.links[0].discard();
									trigger.untrigger();
									trigger.responded = true;
									trigger.result = { bool: true, card: result.links[0] };
									player.storage.ly_junshenbao_zhangjiao_tianbing.remove(result.links[0]);
									if (player.storage.ly_junshenbao_zhangjiao_tianbing.length == 0) {
										player.unmarkSkill('ly_junshenbao_zhangjiao_tianbing');
									} else {
										player.markSkill('ly_junshenbao_zhangjiao_tianbing');
									}
								}
							},
							ai: {
								order: 4,
								useful: -1,
								value: -1,
							},
						},
						ly_junshenbao_zhonghui_moubing: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								var num = game.countPlayer(function (current) {
									return player.getFriends().includes(current);
								});
								return player.storage.ly_junshenbao_zhonghui_quanyi.length >= num + 1;
							},
							check(event, player) {
								return player.storage.ly_junshenbao_zhonghui_quanyi && player.storage.ly_junshenbao_zhonghui_quanyi.length > 2;
							},
							content() {
								'step 0';
								event.num = Math.min(10, player.storage.ly_junshenbao_zhonghui_quanyi.length * 2);
								player.storage.ly_junshenbao_zhonghui_quanyi.length = 0;
								player.unmarkSkill('ly_junshenbao_zhonghui_quanyi');
								('step 1');
								event.cards = get.cards(event.num);
								if (event.isMine() == false) {
									event.dialog = ui.create.dialog('谋兵', event.cards);
								}
								('step 2');
								if (event.dialog) event.dialog.close();
								var dialog = ui.create.dialog('谋兵', event.cards);
								var num = event.num;
								player.chooseButton([1, num], dialog, true).filterButton = function (button) {
									if (ui.selected.buttons.length == 0) return true;
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (get.color(button.link) == get.color(ui.selected.buttons[i].link)) return true;
									}
									return false;
								};
								('step 3');
								player.storage.ly_junshenbao_zhonghui_moubing1 = result.buttons.length;
								var num = result.buttons.length;
								player.popup('+' + get.cnNumber(num));
								game.log(player, '<span style=\"color: red\">手牌上限,攻击距离,出杀次数</span>本回合+', num);
								player.addTempSkill('ly_junshenbao_zhonghui_moubing_use', 'phaseAfter');
								event.cards2 = [];
								for (var i = 0; i < result.buttons.length; i++) {
									event.cards2.push(result.buttons[i].link);
									cards.remove(result.buttons[i].link);
								}
								('step 4');
								player.gain(event.cards2);
								if (event.cards2.length) player.$gain(event.cards2);
								for (var i = 0; i < cards.length; i++) {
									ui.discardPile.appendChild(cards[i]);
								}
							},
							subSkill: {
								use: {
									mod: {
										maxHandcard(player, num) {
											return num + player.storage.ly_junshenbao_zhonghui_moubing1;
										},
										globalFrom(from, to, distance) {
											return distance - from.storage.ly_junshenbao_zhonghui_moubing1;
										},
										cardUsable(card, player, num) {
											if (card.name == 'sha' && player.storage.ly_junshenbao_zhonghui_moubing1) return num + player.storage.ly_junshenbao_zhonghui_moubing1;
										},
									},
								},
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_zhonghui_quanyi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								if (event.num > 0 && player.getFriends().includes(event.player)) return true;
								if (event.num > 0 && event.player == player) return true;
								return false;
							},
							content() {
								'step 0';
								player.draw(1);
								('step 1');
								if (player.countCards('he')) {
									player.chooseCard('将1张牌置于武将牌上作为<图>', true, 'he');
								} else {
									event.finish();
								}
								('step 2');
								if (result.cards && result.cards.length) {
									player.lose(result.cards, ui.special);
									player.storage.ly_junshenbao_zhonghui_quanyi = player.storage.ly_junshenbao_zhonghui_quanyi.concat(result.cards);
									player.markSkill('ly_junshenbao_zhonghui_quanyi');
									game.log(player, '将', result.cards, '置于武将牌上作为<图>');
								}
							},
							init(player) {
								player.storage.ly_junshenbao_zhonghui_quanyi = [];
							},
							intro: {
								content: 'cards',
							},
							marktext: '图',
							mod: {
								maxHandcard(player, num) {
									return (num = 3 + player.storage.ly_junshenbao_zhonghui_quanyi.length);
								},
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten: 2,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
											if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
											if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
										}
									},
								},
							},
						},
						ly_junshenbao_zhonghui_fayi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							line: 'thunder',
							filter(event, player) {
								return player.storage.ly_junshenbao_zhonghui_quanyi && player.storage.ly_junshenbao_zhonghui_quanyi.length;
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								'step 0';
								player.chooseCardButton('选择1张"图"交给' + get.translation(target), true, player.storage.ly_junshenbao_zhonghui_quanyi);
								('step 1');
								var card = result.links[0];
								player.storage.ly_junshenbao_zhonghui_quanyi.remove(card);
								target.gain(card, player);
								player.$give(card, target);
								player.storage.ly_junshenbao_zhonghui_fayi_suit = card.suit;
								if (player.storage.ly_junshenbao_zhonghui_quanyi.length == 0) {
									player.unmarkSkill('ly_junshenbao_zhonghui_quanyi');
								}
								('step 2');
								player.chooseControl('♤', '♧', '♡', '♢').ai = function () {
									var num = target.getCards('h').length;
									var nh = num / 2;
									var num1 = target.countCards('h', { suit: 'spade' });
									var num2 = target.countCards('h', { suit: 'club' });
									var num3 = target.countCards('h', { suit: 'heart' });
									var num4 = target.countCards('h', { suit: 'diamond' });
									var cards = target.getCards('h');
									if (num1 / num >= nh) return '♤';
									if (num2 / num >= nh) return '♧';
									if (num3 / num >= nh) return '♡';
									if (num4 / num >= nh) return '♢';
									if (player.storage.ly_junshenbao_zhonghui_fayi_suit == 'spade') return '♤';
									if (player.storage.ly_junshenbao_zhonghui_fayi_suit == 'club') return '♧';
									if (player.storage.ly_junshenbao_zhonghui_fayi_suit == 'heart') return '♡';
									if (player.storage.ly_junshenbao_zhonghui_fayi_suit == 'diamond') return '♢';
									return Math.random();
								};
								('step 3');
								if (result.control == '♤') {
									player.popup('<span style=\"color: black\">♤</span>');
									game.log(player, '声明了<span style=\"color: black\">♤</span>');
									target.showHandcards('h');
									var card = target.getCards('h', { suit: 'spade' });
									target.discard(card);
								}
								if (result.control == '♧') {
									player.popup('<span style=\"color: black\">♧</span>');
									game.log(player, '声明了<span style=\"color: black\">♧</span>');
									target.showHandcards('h');
									var card = target.getCards('h', { suit: 'club' });
									target.discard(card);
								}
								if (result.control == '♡') {
									player.popup('<span style=\"color: red\">♡</span>');
									game.log(player, '声明了<span style=\"color: red\">♡</span>');
									target.showHandcards('h');
									var card = target.getCards('h', { suit: 'heart' });
									target.discard(card);
								}
								if (result.control == '♢') {
									player.popup('<span style=\"color: red\">♢</span>');
									game.log(player, '声明了<span style=\"color: red\">♢</span>');
									target.showHandcards('h');
									var card = target.getCards('h', { suit: 'diamond' });
									target.discard(card);
								}
								('step 4');
								if (target.countCards('h') == 0) {
									player.line(target, 'thunder');
									target.damage();
								}
							},
							ai: {
								order: 9,
								skillTagFilter(player) {
									return player.storage.ly_junshenbao_zhonghui_quanyi.length > 2;
								},
								result: {
									target(player, target) {
										if (target.countCards('h') == 0) return -100;
										if (target.isMaxHandcard()) return -9;
										return 0;
									},
								},
							},
						},
						ly_junshenbao_lusu_sancai: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'drawEnd',
							},
							forced: true,
							filter(event, player) {
								if (event.getParent(2).name == 'ly_junshenbao_lusu_sancai') return false;
								return event.num > 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget([1, trigger.num], '散财:是否令至多' + get.cnNumber(trigger.num) + '名其他角色摸1张牌', function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										if (get.attitude(_status.event.player, target) > 0) {
											if (target.hasSkillTag('lianmeng')) {
												var num = game.countPlayer(function (current) {
													return current.countCards('h') < target.countCards('h') && get.attitude(player, current) > 0 && current.hasSkillTag('lianmeng');
												});
												if (num > 0) return 100;
												return 89;
											}
											if (target.hp - target.countCards('h') > 3) {
												return 90;
											}
											if (target.countCards('h') == 0) {
												return 91;
											}
											if (target.hasSkillTag('needCard')) {
												return 92;
											}
											if (target.hasSkillTag('doubleDraw') || target.hasSkillTag('gainDraw')) {
												return 92.1;
											}
										}
										return get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									player.line(result.targets, 'green');
									game.asyncDraw(result.targets);
								}
							},
							ai: {
								sancai: true,
								threaten: 2,
								expose: 0.2,
							},
						},
						ly_junshenbao_lusu_lianmeng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'gameDrawAfter',
							},
							forced: true,
							content() {
								'step 0';
								event.num = 2;
								('step 1');
								player
									.chooseTarget('联盟:令1名其他角色(若场上存活角色数<3,则可选择你为目标)获得"盟"标记', true, function (card, player, target) {
										if (game.countPlayer() < 3) return !target.hasSkill('ly_junshenbao_lusu_lianmeng_line');
										return target != player && !target.hasSkill('ly_junshenbao_lusu_lianmeng_line');
									})
									.set('ai', function (target) {
										if (target.hasSkillTag('moreDraw') || target.hasSkillTag('gainDraw') || target.hasSkillTag('doubleDraw')) {
											return 1;
										}
										return Math.random();
									});
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'green');
									result.targets[0].addSkill('ly_junshenbao_lusu_lianmeng_line');
									game.log(result.targets[0], '成为<span style=\"color: red\">蜀</span><span style=\"color: green\">吴</span>盟军');
								}
								('step 3');
								event.num--;
								if (event.num > 0) event.goto(1);
							},
							group: ['ly_junshenbao_lusu_lianmeng_remove', 'ly_junshenbao_lusu_lianmeng_drawdis'],
							subSkill: {
								remove: {
									popup: false,
									forced: true,
									trigger: {
										global: 'dieBegin',
									},
									forced: true,
									filter(event, player) {
										var num = game.countPlayer(function (current) {
											return player.getEnemies().includes(current);
										});
										if (num <= 1) return false;
										return event.player.hasSkill('ly_junshenbao_lusu_lianmeng_line') && event.player != player;
									},
									content() {
										'step 0';
										('step 1');
										player
											.chooseTarget('联盟:令1名其他角色(若场上存活角色数<3,则可选择你为目标)获得"盟"标记', true, function (card, player, target) {
												if (game.countPlayer() < 3) return !target.hasSkill('ly_junshenbao_lusu_lianmeng_line');
												return target != player && !target.hasSkill('ly_junshenbao_lusu_lianmeng_line');
											})
											.set('ai', function (target) {
												return Math.random();
											});
										('step 2');
										if (result.bool) {
											player.line(result.targets, 'green');
											result.targets[0].addSkill('ly_junshenbao_lusu_lianmeng_line');
											game.log(result.targets[0], '成为<span style=\"color: red\">蜀</span><span style=\"color: green\">吴</span>盟军');
											trigger.player.removeSkill('ly_junshenbao_lusu_lianmeng_line');
										}
									},
								},
								drawdis: {
									popup: false,
									trigger: {
										global: ['drawEnd', 'discardEnd'],
									},
									filter(event, player) {
										var num = game.countPlayer(function (current) {
											return current.hasSkill('ly_junshenbao_lusu_lianmeng_line') && current != event.player && (current.countCards('h') < event.player.countCards('h') || current.countCards('h') > event.player.countCards('h'));
										});
										if (num == 0) return false;
										return event.player.hasSkill('ly_junshenbao_lusu_lianmeng_line');
									},
									forced: true,
									content() {
										'step 0';
										event.players = trigger.player;
										player
											.chooseTarget('是否令另1名盟军调整手牌', function (card, player, target) {
												return target != event.players && target.hasSkill('ly_junshenbao_lusu_lianmeng_line');
											})
											.set('ai', function (target) {
												if (get.attitude(player, target) > 0) {
													if (target.countCards('h') < event.players.countCards('h')) {
														return 1;
													}
													return -1;
												} else {
													if (target.countCards('h') < event.players.countCards('h')) {
														return -1;
													}
													return 1;
												}
												return false;
											});
										('step 1');
										if (result.bool) {
											player.line(result.targets, 'green');
											if (result.targets[0].countCards('h') < event.players.countCards('h')) {
												result.targets[0].draw();
												event.finish();
											} else {
												if (result.targets[0].countCards('h') > 0) {
													event.target = result.targets[0];
													event.goto(2);
												} else {
													event.finish();
												}
											}
										} else {
											event.finish();
										}
										('step 2');
										event.target.chooseCard(1, 'h', true).set('ai', function (card) {
											return 7 - get.value(card);
										});
										('step 3');
										game.log(event.target, '弃置了', result.cards);
										event.target.lose(result.cards);
										event.target.$throw(result.cards, 100);
									},
								},
							},
							ai: {
								threaten: 2.3,
							},
						},
						ly_junshenbao_lusu_lianmeng_line: {
							mark: true,
							marktext: '盟',
							intro: {
								content: '已成为<span style="color: red">盟军</span>',
							},
							ai: {
								lianmeng: true,
							},
						},
						ly_junshenbao_xiahouyuan_suji: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							group: ['ly_junshenbao_xiahouyuan_suji_judge', 'ly_junshenbao_xiahouyuan_suji_draw', 'ly_junshenbao_xiahouyuan_suji_use', 'ly_junshenbao_xiahouyuan_suji_dis'],
							subSkill: {
								judge: {
									trigger: { player: 'phaseJudgeBefore' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return player.countCards('he') > 0;
									},
									content() {
										'step 0';
										var check = player.needsToDiscard();
										player.chooseCardTarget({
											prompt: get.prompt('ly_junshenbao_xiahouyuan_suji'),
											filterCard(card, player) {
												return lib.filter.cardDiscardable(card, player);
											},
											position: 'he',
											filterTarget(card, player, target) {
												if (player == target) return false;
												return player.canUse({ name: 'sha' }, target, false);
											},
											ai1(card) {
												if (_status.event.check) return 0;
												return 6 - get.value(card);
											},
											ai2(target) {
												if (_status.event.check) return 0;
												return get.effect(target, { name: 'sha' }, _status.event.player);
											},
											check: check,
										});
										('step 1');
										if (result.bool) {
											player.popup('<span style=\"color: red\">判定阶段</span>');
											player.line(result.targets[0], 'thunder');
											player.discard(result.cards[0]);
											player.useCard({ name: 'sha' }, result.targets[0], false);
											trigger.cancel();
										}
									},
								},
								draw: {
									trigger: { player: 'phaseDrawBefore' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return player.countCards('he') > 0;
									},
									content() {
										'step 0';
										var check = player.needsToDiscard();
										player.chooseCardTarget({
											prompt: get.prompt('ly_junshenbao_xiahouyuan_suji'),
											filterCard(card, player) {
												return lib.filter.cardDiscardable(card, player);
											},
											position: 'he',
											filterTarget(card, player, target) {
												if (player == target) return false;
												return player.canUse({ name: 'sha' }, target, false);
											},
											ai1(card) {
												if (_status.event.check) return 0;
												return 6 - get.value(card);
											},
											ai2(target) {
												if (_status.event.check) return 0;
												return get.effect(target, { name: 'sha' }, _status.event.player);
											},
											check: check,
										});
										('step 1');
										if (result.bool) {
											player.popup('<span style=\"color: red\">摸牌阶段</span>');
											player.line(result.targets[0], 'thunder');
											player.discard(result.cards[0]);
											player.useCard({ name: 'sha' }, result.targets[0], false);
											trigger.num--;
										}
									},
								},
								use: {
									trigger: { player: 'phaseUseBefore' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return player.countCards('he') > 0;
									},
									content() {
										'step 0';
										var check = player.needsToDiscard();
										player.chooseCardTarget({
											prompt: get.prompt('ly_junshenbao_xiahouyuan_suji'),
											filterCard(card, player) {
												return lib.filter.cardDiscardable(card, player);
											},
											position: 'he',
											filterTarget(card, player, target) {
												if (player == target) return false;
												return player.canUse({ name: 'sha' }, target, false);
											},
											ai1(card) {
												if (_status.event.check) return 0;
												return 6 - get.value(card);
											},
											ai2(target) {
												if (_status.event.check) return 0;
												return get.effect(target, { name: 'sha' }, _status.event.player);
											},
											check: check,
										});
										('step 1');
										if (result.bool) {
											player.popup('<span style=\"color: red\">出牌阶段</span>');
											player.line(result.targets[0], 'thunder');
											player.discard(result.cards[0]);
											player.useCard({ name: 'sha' }, result.targets[0], false);
										}
									},
								},
								dis: {
									trigger: { player: 'phaseUseEnd' },
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										return player.countCards('he') > 0;
									},
									content() {
										'step 0';
										var check = player.needsToDiscard();
										player.chooseCardTarget({
											prompt: get.prompt('ly_junshenbao_xiahouyuan_suji'),
											filterCard(card, player) {
												return lib.filter.cardDiscardable(card, player);
											},
											position: 'he',
											filterTarget(card, player, target) {
												if (player == target) return false;
												return player.canUse({ name: 'sha' }, target, false);
											},
											ai1(card) {
												if (_status.event.check) return 0;
												return 6 - get.value(card);
											},
											ai2(target) {
												if (_status.event.check) return 0;
												return get.effect(target, { name: 'sha' }, _status.event.player);
											},
											check: check,
										});
										('step 1');
										if (result.bool) {
											player.popup('<span style=\"color: red\">弃牌阶段</span>');
											player.line(result.targets[0], 'thunder');
											player.discard(result.cards[0]);
											player.useCard({ name: 'sha' }, result.targets[0], false);
										}
									},
								},
							},
						},
						ly_junshenbao_xiahouyuan_suzi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								source: 'dieBegin',
							},
							filter(event, player) {
								return event.player.countCards('he') > 0;
							},
							content() {
								player.gainPlayerCard('he', trigger.player, 2, true);
								player.draw();
							},
						},
						ly_junshenbao_guopang_jigong: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								player.draw(Math.min(player.hp, 20));
								player.storage.ly_junshenbao_guopang_jigong1 = player.hp;
								player.addSkill('ly_junshenbao_guopang_jigong_dis');
							},
							subSkill: {
								dis: {
									forced: true,
									popup: false,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										if (player.countUsed() < player.storage.ly_junshenbao_guopang_jigong1) {
											player.chooseToDiscard(player.storage.ly_junshenbao_guopang_jigong1, true);
											player.removeSkill('ly_junshenbao_guopang_jigong_dis');
											delete player.storage.ly_junshenbao_guopang_jigong1;
										} else {
											player.removeSkill('ly_junshenbao_guopang_jigong_dis');
											delete player.storage.ly_junshenbao_guopang_jigong1;
											event.finish();
										}
									},
								},
							},
						},
						ly_junshenbao_guopang_chanxian: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								var info = get.info(event.card);
								if (info.allowMultiple == false) return false;
								if ('delay' == get.type(event.card)) return false; //QQQ
								if (event.getParent(2).name == 'ly_junshenbao_guopang_chanxian') return false;
								return event.player != player && event.targets.includes(player);
							},
							content() {
								'step 0';
								player
									.chooseTarget('是否令1名其他角色摸1张牌,视为对其使用' + get.translation(trigger.card), function (card, player, target) {
										return player != target;
									})
									.set('autodelay', true)
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, player, player);
									});
								('step 1');
								if (result.bool) {
									player.line(result.targets[0], 'white');
									player.useCard(trigger.card, result.targets[0]);
									result.targets[0].draw();
								}
							},
							ai: {
								threaten: 2,
								effect(card, player, target) {
									if (!target.hasFriend()) return;
									if (player == target) return;
									var name = card.name;
									var type = get.type(card);
									var nh = target.countCards();
									if (type == 'trick' && name != 'shunshou' && name != 'guohe' && name != 'huogong') {
										if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
											if (get.tag(card, 'damage')) {
												return 0;
											}
											return [1, nh];
										}
									}
								},
							},
						},
						ly_junshenbao_weiyan_aogu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 0 && get.distance(player, event.player, 'attack') <= 1;
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								('step 1');
								player.recover();
								player.draw();
								('step 2');
								event.num--;
								if (event.num > 0) {
									player.chooseBool('是否继续发动<span style=\"color: red\">"傲骨"</span>');
								} else event.finish();
								('step 3');
								if (result.bool) {
									event.goto(1);
								}
							},
						},
						ly_junshenbao_weiyan_yongmou: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								var shas = player.getCards('h', 'sha');
								var num;
								if (player.hp >= 4 && shas.length >= 3) {
									num = 4;
								} else if (player.hp >= 3 && shas.length >= 2) {
									num = 3;
								} else {
									num = 2;
								}
								delete player.storage.ly_junshenbao_weiyan_yongmou1;
								player
									.chooseControl('一', '二', '三', '四', '五', '六', function () {
										return get.cnNumber(_status.event.goon, true);
									})
									.set('prompt', '失去任意点体力')
									.set('goon', num);
								('step 1');
								var num;
								switch (result.control) {
									case '一':
										num = 1;
										break;
									case '二':
										num = 2;
										break;
									case '三':
										num = 3;
										break;
									case '四':
										num = 4;
										break;
									case '五':
										num = 5;
										break;
									case '六':
										num = 6;
										break;
								}
								player.storage.ly_junshenbao_weiyan_yongmou1 = num;
								player.draw(num);
								player.loseHp(num);
								player.addTempSkill('ly_junshenbao_weiyan_yongmou_attack');
							},
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.hp == 1) return 0;
										var shas = player.getCards('h', 'sha');
										if (!shas.length) return 0;
										var card = shas[0];
										if (!lib.filter.cardEnabled(card, player)) return 0;
										if (lib.filter.cardUsable(card, player)) return 0;
										var mindist;
										if (player.hp >= 4) {
											mindist = 4;
										} else if (player.hp >= 3) {
											mindist = 3;
										} else {
											mindist = 2;
										}
										if (
											game.hasPlayer(function (current) {
												return current.hp <= mindist - 1 && get.distance(player, current, 'attack') <= mindist && player.canUse(card, current, false) && get.effect(current, card, player, player) > 0;
											})
										) {
											return 10;
										}
										return 1;
									},
								},
							},
							group: 'ly_junshenbao_weiyan_yongmou_attack',
							subSkill: {
								attack: {
									onremove(player) {
										delete player.storage.ly_junshenbao_weiyan_yongmou1;
									},
									mod: {
										cardUsable(card, player, num) {
											if (typeof player.storage.ly_junshenbao_weiyan_yongmou1 == 'number' && card.name == 'sha') {
												return num + player.storage.ly_junshenbao_weiyan_yongmou1;
											}
										},
										globalFrom(from, to, distance) {
											if (typeof from.storage.ly_junshenbao_weiyan_yongmou1 == 'number') {
												return distance - from.storage.ly_junshenbao_weiyan_yongmou1;
											}
										},
									},
								},
							},
						},
						ly_junshenbao_lvmeng_taohui: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								player: 'phaseDrawBegin',
							},
							content() {
								trigger.num = Math.min(5, game.roundNumber + 2);
							},
							mod: {
								maxHandcard(player, num) {
									return (num += game.roundNumber);
								},
							},
						},
						ly_junshenbao_lvmeng_qinxue: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								player: 'phaseBegin',
							},
							derivation: ['ly_junshenbao_lvmeng_qinxue_draw', 'ly_junshenbao_lvmeng_gongxin'],
							filter(event, player) {
								return player.countCards('h') - player.hp > 2;
							},
							content() {
								'step 0';
								player.$skill('吴下阿蒙<br>今非昔比');
								('step 1');
								player.loseMaxHp();
								player.recover();
								('step 2');
								player.removeSkill('ly_junshenbao_lvmeng_qinxue');
								player.addSkill('ly_junshenbao_lvmeng_qinxue_draw');
								player.addSkill('ly_junshenbao_lvmeng_gongxin');
							},
							ai: {
								needCard: true,
							},
						},
						ly_junshenbao_lvmeng_qinxue_draw: {
							nobracket: true,
							popup: false,
							permit: '<span style="color: gold">是否摸1张牌</span>',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (player.getStat().skill.ly_junshenbao_lvmeng_qinxue_draw >= player.hp) return false;
								if (_status.currentPhase != player) return false;
								return player.countUsed(event.card) > 1;
							},
							content() {
								player.draw();
							},
						},
						ly_junshenbao_lvmeng_gongxin: {
							nobracket: true,
							line: 'green',
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && target.countCards('h');
							},
							content() {
								'step 0';
								player.viewCards('攻心', target.getCards('h'));
								event.cards = target.getCards('h', function (card) {
									return card.suit == 'heart';
								});
								if (event.cards.length) {
									target.showCards(event.cards);
								} else {
									event.finish();
								}
								('step 1');
								if (event.cards.length == 1) {
									target.discard(event.cards);
									target.damage();
									event.finish();
								} else {
									player.chooseCardButton('选择获得其中1张', event.cards).ai = function (button) {
										return get.value(button.link);
									};
								}
								('step 2');
								if (result.bool) {
									player.gain(result.links[0]);
									target.$give(result.links[0], player);
								}
							},
							ai: {
								order: 9,
								result: {
									target(player, target, card) {
										return -target.countCards('h');
									},
								},
							},
						},
						ly_junshenbao_maliang_zishu: {
							nobracket: true,
							forced: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'gainEnd',
							},
							filter(event, player) {
								if (!player.hasSkill('ly_junshenbao_maliang_zishu_yes')) return false;
								if (event.getParent(2).name == 'ly_junshenbao_maliang_zishu') return false;
								return true;
							},
							content() {
								player.draw();
							},
							group: ['ly_junshenbao_maliang_zishu_add', 'ly_junshenbao_maliang_zishu_remove'],
							subSkill: {
								add: {
									forced: true,
									popup: false,
									trigger: {
										global: 'phaseBegin',
									},
									filter(event, player) {
										return player.getFriends().includes(event.player) || event.player == player;
									},
									content() {
										player.addSkill('ly_junshenbao_maliang_zishu_yes');
									},
								},
								remove: {
									forced: true,
									popup: false,
									trigger: {
										global: 'phaseBegin',
									},
									filter(event, player) {
										return player.getEnemies().includes(event.player);
									},
									content() {
										player.removeSkill('ly_junshenbao_maliang_zishu_yes');
									},
								},
								yes: {},
							},
							ai: {
								gainDraw: true,
								threaten: 2,
							},
						},
						ly_junshenbao_maliang_shouyuan: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							group: ['ly_junshenbao_maliang_shouyuan_1', 'ly_junshenbao_maliang_shouyuan_2'],
							subSkill: {
								1: {
									trigger: {
										player: 'useCardAfter',
									},
									forced: true,
									popup: false,
									silent: true,
									filter(event, player) {
										if (_status.currentPhase != player) return false;
										if (player.storage.ly_junshenbao_maliang_shouyuan_1 && player.storage.ly_junshenbao_maliang_shouyuan_1.includes(event.card.name)) {
											return false;
										}
										if (event.cards) {
											if (Array.isArray(event.cards))
												for (var i of event.cards) {
													//QQ
													if (i.isInPile()) return true;
												}
										}
										return false;
									},
									content() {
										'step 0';
										player
											.chooseTarget(get.prompt('ly_junshenbao_maliang_shouyuan_1'), function (card, player, target) {
												return target != player;
											})
											.set('ai', function (target) {
												if (target.hasJudge('lebu')) return 0;
												var att = get.attitude(_status.event.player, target);
												if (att < 3) return 0;
												if (target.hasSha() && _status.event.sha) {
													att /= 5;
												}
												if (event.wuxie && target.needsToDiscard(1)) {
													att /= 5;
												}
												return att / (1 + get.distance(player, target, 'absolute'));
											})
											.set('sha', trigger.cards[0].name == 'sha')
											.set('wuxie', trigger.cards[0].name == 'wuxie');
										('step 1');
										if (result.bool) {
											var list = [];
											for (var i = 0; i < trigger.cards.length; i++) {
												if (trigger.cards[i].isInPile()) {
													list.push(trigger.cards[i]);
												}
											}
											player.line(result.targets[0], 'fire');
											result.targets[0].gain(list, 'gain2');
											if (!player.storage.ly_junshenbao_maliang_shouyuan_1) {
												player.storage.ly_junshenbao_maliang_shouyuan_1 = [];
											}
											player.storage.ly_junshenbao_maliang_shouyuan_1.push(trigger.card.name);
										}
									},
								},
								2: {
									forced: true,
									popup: false,
									trigger: {
										player: 'phaseAfter',
									},
									silent: true,
									content() {
										delete player.storage.ly_junshenbao_maliang_shouyuan_1;
									},
								},
							},
						},
						ly_junshenbao_zhugedan_zhanxun: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							priority: 100,
							trigger: {
								global: 'dying',
							},
							filter(event, player) {
								var num = 5 + game.countPlayer();
								return event.player != player && player.maxHp < num;
							},
							content() {
								'step 0';
								player.gainMaxHp();
								('step 1');
								if (trigger.source && trigger.source == player) {
									player.draw();
								}
							},
							group: 'ly_junshenbao_zhugedan_zhanxun_recover',
							subSkill: {
								recover: {
									forced: true,
									popup: false,
									trigger: {
										global: 'dieAfter',
									},
									filter(event, player) {
										return event.player != player;
									},
									content() {
										player.recover();
										player.draw();
									},
								},
							},
						},
						ly_junshenbao_zhugedan_jupan: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							derivation: ['ly_junshenbao_zhugedan_weizhong', 'ly_junshenbao_zhugedan_neikui'],
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								var num = game.countPlayer();
								return player.maxHp >= 8;
							},
							content() {
								'step 0';
								var num = Math.min(8, player.maxHp - player.countCards('h'));
								player.draw(num);
								('step 1');
								player.$skill('举叛');
								player.addSkill('ly_junshenbao_zhugedan_weizhong');
								player.addSkill('ly_junshenbao_zhugedan_neikui');
								player.awakenSkill('ly_junshenbao_zhugedan_jupan');
							},
						},
						ly_junshenbao_zhugedan_weizhong: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								player: ['changeHp', 'gainMaxHpEnd', 'loseMaxHpEnd'],
							},
							content() {
								player.draw();
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_zhugedan_neikui: {
							nobracket: true,
							forced: true,
							audio: 'ext:军神包/audio:1',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.maxHp > 1;
							},
							content() {
								player.loseMaxHp();
							},
						},
						ly_junshenbao_zhangrang_taoluan: {
							group: 'ly_junshenbao_zhangrang_taoluan_new',
							subSkill: {
								new: {
									trigger: {
										global: 'phaseEnd',
									},
									popup: false,
									forced: true,
									content() {
										player.removeSkill('ly_junshenbao_zhangrang_taoluan');
										player.addSkill('ly_junshenbao_zhangrang_taoluan');
									},
								},
							},
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							nobracket: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							forced: true,
							init(player) {
								player.storage.ly_junshenbao_zhangrang_taoluan = [];
							},
							chooseButton: {
								dialog(event, player) {
									var list = ['sha', 'tao', 'jiu', 'taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'yuanjiao', 'yiyi', 'wuzhong', 'wanjian', 'nanman'];
									for (var i = 0; i < player.storage.ly_junshenbao_zhangrang_taoluan.length; i++) {
										list.remove(player.storage.ly_junshenbao_zhangrang_taoluan[i]);
									}
									for (var i = 0; i < list.length; i++) {
										if (i < 3) {
											list[i] = ['基本', '', list[i]];
										} else {
											list[i] = ['锦囊', '', list[i]];
										}
									}
									if (list.length == 0) {
										return ui.create.dialog('已无可用牌');
									}
									return ui.create.dialog([list, 'vcard']);
								},
								filter(button, player) {
									return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									return get.player().getUseValue({ name: button.link[2] });
								},
								backup(links, player) {
									return {
										filterCard: true,
										selectCard: 1,
										popname: true,
										viewAs: { name: links[0][2] },
										onuse(result, player) {
											player.storage.ly_junshenbao_zhangrang_taoluan.push(result.card.name);
										},
									};
								},
								prompt(links, player) {
									return '选择' + get.translation(links[0][2]) + '的目标';
								},
							},
							ai: {
								order: 9,
								result: {
									player(player) {
										var allshown = true,
											players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (players[i].ai.shown == 0) {
												allshown = false;
											}
											if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
												return 1;
											}
										}
										if (allshown) return 1;
										return 0;
									},
								},
								threaten: 2.1,
							},
						},
						ly_junshenbao_liuxie_tianming: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (!event.targets.includes(player)) return false;
								return get.tag(event.card, 'damage');
							},
							content() {
								'step 0';
								player.draw(3);
								player.chooseToDiscard(2, 'hej', true);
								var players = game.filterPlayer();
								players.sort(function (a, b) {
									return b.hp - a.hp;
								});
								if (players[0].hp > players[1].hp && players[0] != player) {
									var cards = player.getCards('he');
									players[0].chooseBool('是否弃置区域内2张牌并摸2张牌').ai = function (event, player) {
										if (player.hp < 3 && player.countCards('hej') < 3 && player.countCards('h', { name: 'tao' }) > 0) return false;
										if (player.countCards('j') > 0) return true;
										if (player.countCards('h') > 3) return true;
										if (player.getCards('he').length <= 2) {
											for (var i = 0; i < cards.length; i++) {
												if (get.value(cards[i]) < 6) return true;
											}
										}
										return false;
									};
									event.player = players[0];
								} else {
									event.finish();
								}
								('step 1');
								if (result.bool) {
									player.chooseToDiscard(2, true, 'hej');
									player.draw(2);
								}
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_liuxie_mizhao: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							line: 'white',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							selectTarget: 1,
							filterTarget(card, player, target) {
								return target != player && !target.hasSkill('ly_junshenbao_liuxie_mizhao_mark');
							},
							filterCard: true,
							discard: false,
							prepare: 'give',
							selectCard: 1,
							check(card) {
								return 8 - get.value(card);
							},
							content() {
								'step 0';
								target.gain(cards, player);
								('step 1');
								target.addSkill('ly_junshenbao_liuxie_mizhao_mark');
							},
							group: ['ly_junshenbao_liuxie_mizhao_mark', 'ly_junshenbao_liuxie_mizhao_sha'],
							subSkill: {
								sha: {
									trigger: {
										global: 'phaseBegin',
									},
									forced: true,
									filter(event, player) {
										if (event.player == player) return false;
										var num = game.countPlayer(function (current) {
											return current != player && current != event.player && current.hasSkill('ly_junshenbao_liuxie_mizhao_mark') && get.distance(current, event.player, 'attack') <= 1;
										});
										return num > 0;
									},
									content() {
										'step 0';
										player
											.chooseTarget(1, '是否选择1名有"诏"标记且攻击距离内含有' + get.translation(trigger.player) + '的角色,令其视为对' + get.translation(trigger.player) + '使用1张杀', function (card, player, target) {
												var trigger = _status.event.getTrigger();
												return target != player && target.hasSkill('ly_junshenbao_liuxie_mizhao_mark') && get.distance(target, trigger.player, 'attack') <= 1 && target != trigger.player;
											})
											.set('ai', function (target) {
												var trigger = _status.event.getTrigger();
												if (get.attitude(player, trigger.player) > 0) return false;
												if (target.hasSkillTag('shaHit') || target.hasSkillTag('doubleSha')) return 10;
												return Math.random();
											});
										('step 1');
										if (result.bool) {
											var target = result.targets[0];
											player.line(trigger.player, 'white');
											player.line(target, 'white');
											target.line(trigger.player, 'white');
											target.useCard({ name: 'sha' }, trigger.player);
											target.removeSkill('ly_junshenbao_liuxie_mizhao_mark');
										}
									},
								},
								mark: {
									mark: true,
									marktext: '诏',
									intro: {
										content: '已成为<span style="color: red">受诏者</span>',
									},
								},
							},
							ai: {
								order: 6,
								result: {
									target: 1,
								},
							},
						},
						ly_junshenbao_liuxie_xiedi: {
							mode: ['identity'],
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							zhuSkill: true,
							forced: true,
							trigger: {
								player: 'recoverEnd',
							},
							filter(event, player) {
								if (player.identity != 'zhu') return false;
								if (!player.hasSkill('ly_junshenbao_liuxie_xiedi')) return false;
								return event.num > 0 && event.source && event.source != player && player.hp == 1;
							},
							content() {
								'step 0';
								trigger.source.$skill('挟天子以令诸侯');
								('step 1');
								var b = player.maxHp,
									d = trigger.source.maxHp;
								player.maxHp = d;
								player.identity = 'zhong';
								player.showIdentity();
								player.update();
								trigger.source.identity = 'zhu';
								trigger.source.showIdentity();
								trigger.source.maxHp = b;
								trigger.source.update();
								game.log(player, '与', trigger.source, '交换了<span style=\"color: red\">身份牌,体力上限</span>');
								('step 2');
								game.swapSeat(player, trigger.source);
								game.zhu = trigger.source;
								player.awakenSkill('ly_junshenbao_liuxie_xiedi');
							},
						},
						ly_junshenbao_machao_mashu: {
							nobracket: true,
							mod: {
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						ly_junshenbao_machao_tieqi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.targets.length < 1) return false;
								if (event.card.name != 'sha') return false;
								return true;
							},
							content() {
								'step 0';
								var num = player.hp;
								event.cards = get.cards(num);
								player.showCards(event.cards);
								('step 1');
								event.num = 0;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQ
										if (get.color(i) == 'red') event.num++;
										ui.discardPile.appendChild(i);
									}
								player.$throw(event.cards);
								('step 2');
								if (event.num > 0) {
									player
										.chooseTarget([1, event.num], '铁骑:是否令至多' + get.cnNumber(event.num) + '不是此杀目标的合法的其他角色成为此杀额外目标', function (card, player, target) {
											var trigger = _status.event.getTrigger();
											var player = _status.event.player;
											if (trigger.targets.includes(target)) return false;
											return lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
										})
										.set('ai', function (target) {
											var trigger = _status.event.getTrigger();
											var player = _status.event.player;
											return get.effect(target, trigger.card, player, player);
										});
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									if (!event.isMine()) game.delayx();
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 4');
								if (event.targets) {
									player.line(event.targets, 'fire');
									trigger.targets.addArray(event.targets);
								}
							},
							group: 'ly_junshenbao_machao_tieqi_suo',
							subSkill: {
								suo: {
									trigger: {
										player: 'shaBegin',
									},
									popup: false,
									check(event, player) {
										return get.attitude(player, event.target) < 0;
									},
									logTarget: 'target',
									content() {
										'step 0';
										player.line(trigger.target, 'fire');
										player.judge(function () {
											return 0;
										});
										if (!trigger.target.hasSkill('fengyin')) {
											trigger.target.addTempSkill('fengyin');
										}
										('step 1');
										var suit = result.card.suit;
										var target = trigger.target;
										var num = target.countCards('h', 'shan');
										target
											.chooseToDiscard('请弃置1张' + get.translation(suit) + '牌,否则不能使用闪抵消此杀', 'he', function (card) {
												return card.suit == _status.event.suit;
											})
											.set('ai', function (card) {
												var num = _status.event.num;
												if (num == 0) return 0;
												if (card.name == 'shan') return num > 1 ? 2 : 0;
												return 8 - get.value(card);
											})
											.set('num', num)
											.set('suit', suit);
										('step 2');
										if (!result.bool) {
											trigger.directHit = true;
										}
									},
								},
							},
							ai: {
								doubleSha: true,
								shaHit: true,
								threaten: 2,
							},
						},
						ly_junshenbao_machao_jinma: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								player: 'phaseDrawBegin',
							},
							content() {
								'step 0';
								trigger.num++;
								('step 1');
								var color = ['red', 'black'].randomGet();
								var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet();
								var card = game.createCard({ name: 'sha' }, { color: color }, { number: num });
								ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_sunshangxiang_jieyin: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							filterTarget(card, player, target) {
								if (target.hp >= target.maxHp) return false;
								if (target == player) return false;
								return true;
							},
							filterCard: true,
							selectCard: 2,
							position: 'he',
							check(card) {
								if (card.original == 'e') return 10;
								return 8 - get.value(card);
							},
							content() {
								'step 0';
								target.recover();
								if (player.isDamaged()) {
									player.recover();
								} else {
									player.draw();
								}
								('step 1');
								if (!player.storage.ly_junshenbao_sunshangxiang_jieyin) {
									player.storage.ly_junshenbao_sunshangxiang_jieyin = 0;
								}
								player.storage.ly_junshenbao_sunshangxiang_jieyin++;
								('step 2');
								if (player.storage.ly_junshenbao_sunshangxiang_jieyin > 2) {
									player.$skill('良姻');
									delete player.storage.ly_junshenbao_sunshangxiang_jieyin;
									if (player.name2 != undefined) {
										player.chooseControl(player.name, player.name2).set('prompt', '请选择要更换的武将牌');
									} else event._result = { control: player.name };
								} else {
									event.finish();
								}
								('step 3');
								var num = 4;
								if (game.zhu == player && game.players.length >= 5) {
									if (player.name2 != undefined) num++;
									num++;
								}
								player.reinit(result.control, 'ly_junshenbao_spsunshangxiang', num);
							},
							ai: {
								order: 6,
								result: {
									player(player) {
										if (player.hp < player.maxHp) return 4;
										if (player.countCards('h') > player.hp) return 0;
										return -1;
									},
									target: 4,
								},
								threaten: 2,
								expose: 0.3,
							},
						},
						ly_junshenbao_sunshangxiang_xiaoji: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQ
										if (i.original == 'e') return true;
									}
								return false;
							},
							content() {
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].original == 'e') num += 2;
								}
								player.draw(num);
							},
							ai: {
								equipDraw: true,
								receiveEquip: true,
								threaten: 1.5,
							},
						},
						ly_junshenbao_spsunshangxiang_liangzhu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								global: 'recoverEnd',
							},
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player
									.chooseControl('选项一', '选项二', '取消')
									.set('prompt', get.prompt('ly_junshenbao_spsunshangxiang_liangzhu'))
									.set('choiceList', ['令' + get.translation(trigger.player) + '摸2张牌', '自己摸1牌', '取消']).ai = function (event, player) {
										if (get.attitude(player, trigger.player) <= 0) return '选项二';
										return '选项一';
									};
								('step 1');
								if (result.control == '取消') event.finish();
								if (result.control == '选项一') {
									player.line(trigger.player, 'fire');
									trigger.player.draw(2);
								}
								if (result.control == '选项二') {
									player.draw();
								}
							},
							ai: {
								moreDraw: true,
								threaten: 2,
								expose: 0.3,
							},
						},
						ly_junshenbao_spsunshangxiang_xiaoji: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'loseEnd',
							},
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQ
										if (i.original == 'e') return true;
									}
								return false;
							},
							content() {
								var num = 0;
								for (var i = 0; i < trigger.cards.length; i++) {
									if (trigger.cards[i].original == 'e') num += 2;
								}
								player.draw(num);
							},
							ai: {
								moreDraw: true,
								equipDraw: true,
								receiveEquip: true,
								threaten: 1.5,
							},
						},
						ly_junshenbao_zhangliao_tuxi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseDrawBegin',
							},
							forced: true,
							content() {
								'step 0';
								event.num = 2;
								('step 1');
								player
									.chooseTarget(1, '袭营:是否选择获得1名有牌的其他角色1张牌', function (card, player, target) {
										return target.countCards('he') > 0 && target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if ((target.hasSkillTag('receiveEquip') || target.hasSkillTag('equipDraw')) && target.countCards('e') > 0) return -100;
										if (target.hasSkillTag('noh') && target.countCards('h') < 2) return -100;
										if (target.hasSkillTag('nohDamage')) return -100;
										return -get.attitude(player, target);
									});
								('step 2');
								if (result.bool) {
									player.line(result.targets[0], 'thunder');
									trigger.num--;
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 3');
								player.chooseControl('手牌区', '装备区').ai = function () {
									var num = player.countCards('e');
									if (event.target.countCards('e') > 0 && !event.target.getEquip('baiyin') && num < 1) return '装备区';
									if (event.target.countCards('e') > 2 && !event.target.isDamaged() && event.target.getEquip('baiyin') && num < 2) return '装备区';
									if (event.target.countCards('e') > 0 && event.target.isDamaged() && event.target.getEquip('baiyin')) return '手牌区';
									if (event.target.countCards('h') < 1) return '装备区';
									if (event.target.countCards('e') < 1) return '手牌区';
									return '手牌区';
								};
								('step 4');
								if (result.control == '手牌区') {
									if (event.target.countCards('h') > 0) {
										var card = event.target.getCards('h').randomGet();
										player.gain(card, event.target);
										event.target.$give(card, player);
									} else {
										var card = event.target.getCards('e').randomGet();
										player.gain(card, event.target);
										event.target.$give(card, player);
									}
									if (!player.storage.ly_junshenbao_zhangliao_tuxi_card) {
										player.storage.ly_junshenbao_zhangliao_tuxi_card = card;
										event.goto(5);
									} else {
										if (get.color(card) == get.color(player.storage.ly_junshenbao_zhangliao_tuxi_card)) {
											event.goto(6);
										} else {
											event.goto(5);
										}
									}
								}
								if (result.control == '装备区') {
									if (event.target.countCards('e') > 0) {
										var card = event.target.getCards('e').randomGet();
										player.gain(card, event.target);
										event.target.$give(card, player);
									} else {
										var card = event.target.getCards('h').randomGet();
										player.gain(card, event.target);
										event.target.$give(card, player);
									}
									if (!player.storage.ly_junshenbao_zhangliao_tuxi_card) {
										player.storage.ly_junshenbao_zhangliao_tuxi_card = card;
										event.goto(5);
									} else {
										if (get.color(card) == get.color(player.storage.ly_junshenbao_zhangliao_tuxi_card)) {
											event.goto(6);
										} else {
											event.goto(5);
										}
									}
								}
								('step 5');
								event.num--;
								if (event.num > 0) {
									event.goto(1);
								} else {
									event.finish();
								}
								('step 6');
								if (get.color(player.storage.ly_junshenbao_zhangliao_tuxi_card) == 'red') {
									player.recover();
									event.finish();
								} else {
									event.num = 2;
									event.goto(7);
								}
								('step 7');
								player
									.chooseTarget('是否对1名其他角色造成1点<span style=\"color: red\">雷电伤害</span>', function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player, 'thunder');
									});
								('step 8');
								if (result.bool) {
									player.line(result.targets, 'thunder');
									result.targets[0].damage('thunder');
								}
								('step 9');
								event.num--;
								if (event.num > 0) event.goto(7);
							},
							group: 'ly_junshenbao_zhangliao_tuxi_clear',
							subSkill: {
								clear: {
									popup: false,
									forced: true,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										delete player.storage.ly_junshenbao_zhangliao_tuxi_card;
									},
								},
							},
							ai: {
								threaten: 2,
								expose: 0.3,
							},
						},
						ly_junshenbao_huangzhong_liegong: {
							mod: {
								targetInRange(card, player, target) {
									if (card.name == 'sha' && card.number) {
										if (get.distance(player, target) <= card.number) return true;
									}
								},
							},
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'shaAfter',
							},
							filter(event, player) {
								return event.target.isAlive() && event.getParent(2).name != 'ly_junshenbao_huangzhong_liegong';
							},
							check(event, player) {
								return get.attitude(player, event.target) < 0;
							},
							content() {
								'step 0';
								event.cards = get.cards(3);
								player.showCards(event.cards);
								('step 1');
								event.num = 0;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										//QQ
										if (i.suit == trigger.card.suit) event.num++;
										ui.discardPile.appendChild(i);
									}
								player.$throw(event.cards);
								('step 2');
								if (event.num > 0 && trigger.target.isAlive()) {
									player.useCard(trigger.card, trigger.target, false);
									event.num--;
									event.redo();
								}
							},
							ai: {
								doubleSha: true,
								threaten: 2,
							},
							group: ['ly_junshenbao_huangzhong_liegong_damage', 'ly_junshenbao_huangzhong_liegong_qilin', 'ly_junshenbao_huangzhong_liegong_hit'],
							subSkill: {
								hit: {
									forced: true,
									popup: false,
									trigger: {
										player: 'shaBegin',
									},
									filter(event, player) {
										return get.distance(player, event.target, 'attack') > 1;
									},
									content() {
										player.line(trigger.target, 'fire');
										trigger.directHit = true;
									},
								},
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (player == target && (get.subtype(card) == 'equip1' || get.subtype(card) == 'equip4')) {
											if (get.equipValue(card) <= 7.5) return 0;
										}
										if (target.getEquip(2)) return;
										return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
									},
								},
							},
						},
						ly_junshenbao_huangzhong_liegong_qilin: {
							trigger: { player: 'shaHit' },
							filter(event, player) {
								return event.target.getCards('e', { subtype: ['equip1', 'equip2', 'equip3', 'equip4'] }).length;
							},
							forced: true,
							audio: 'ext:军神包/audio:1',
							content() {
								'step 0';
								var att = get.attitude(player, trigger.target) <= 0;
								var next = player.chooseButton();
								next.set('att', att);
								next.set('createDialog', ['选择要弃置的装备牌', trigger.target.getCards('e', { type: 'equip' })]);
								next.set('ai', function (button) {
									if (_status.event.att) return get.buttonValue(button);
									return 0;
								});
								('step 1');
								if (result.bool) {
									trigger.target.discard(result.links[0]);
								}
							},
						},
						ly_junshenbao_huangzhong_liegong_damage: {
							audio: 'ext:军神包/audio:2',
							trigger: {
								source: 'damageBefore',
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							prompt(event, player) {
								return '烈弓:是否令此伤害<span style="color: red">+1</span>(对"' + get.translation(event.player) + '")';
							},
							filter(event, player) {
								return event.player.hp >= player.hp && event.card && event.card.name == 'sha';
							},
							content() {
								player.line(trigger.player, 'fire');
								trigger.num++;
							},
						},
						ly_junshenbao_quyi_fuji: {
							nobracket: true,
							forced: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCardToBefore',
							},
							filter(event, player) {
								return get.distance(player, event.target, 'attack') <= 1 && ((get.type(event.card) != 'delay' && event.card.name == 'sha') || get.type(event.card) == 'trick');
							},
							content() { },
							mod: {
								wuxieRespondable(card, player, target, current) {
									if (player != current && get.distance(player, current, 'attack') <= 1) {
										return false;
									}
								},
							},
							ai: {
								threaten: 2,
								norespond: true,
								skillTagFilter(player, tag, arg) {
									if (tag == 'norespond' && Array.isArray(arg)) {
										if (get.distance(player, arg[1], 'attack') <= 1) return true;
									}
									return false;
								},
							},
						},
						ly_junshenbao_quyi_jiaozi: {
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							trigger: {
								player: 'damageBegin',
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								if (event.source == player) return player.countCards('h') > event.player.countCards('h') || player.countCards('e') > event.player.countCards('e');
								return event.source && (player.countCards('h') > event.source.countCards('h') || player.countCards('e') > event.source.countCards('e'));
							},
							content() {
								trigger.num++;
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_huanggai_kurou: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							prompt: "是否<span style='color: red'>失去1点体力</span>",
							enable: 'phaseUse',
							usable: 1,
							content() {
								player.loseHp();
							},
							group: 'ly_junshenbao_huanggai_kurou_damage',
							subSkill: {
								damage: {
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.num > 0 && Math.random() <= 0.5;
									},
									content() {
										player.loseHp();
										player.draw(2);
									},
								},
							},
							ai: {
								order: 8,
								result: {
									player(player) {
										if (player.hp <= 2) return player.countCards('h') == 0 ? 1 : 0;
										if (player.countCards('h', { name: 'sha', color: 'red' })) return 1;
										return player.countCards('h') <= player.hp ? 1 : 0;
									},
								},
								effect(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, 1];
										return 1.2;
									}
									if (get.tag(card, 'loseHp')) {
										if (player.hp <= 1) return;
										return [0, 0];
									}
								},
							},
						},
						ly_junshenbao_huanggai_zhaxiang: {
							nobracket: true,
							trigger: {
								player: 'loseHpEnd',
							},
							forced: true,
							audio: 'ext:军神包/audio:1',
							content() {
								player.draw(3 * trigger.num);
								if (_status.currentPhase == player) {
									if (!player.storage.ly_junshenbao_huanggai_zhaxiang) {
										player.storage.ly_junshenbao_huanggai_zhaxiang = 0;
									}
									player.storage.ly_junshenbao_huanggai_zhaxiang += trigger.num;
									player.addTempSkill('ly_junshenbao_huanggai_zhaxiang_sha', { player: 'phaseAfter' });
									player.addTempSkill('ly_junshenbao_huanggai_zhaxiang_fire', { player: 'phaseAfter' });
									player.addTempSkill('ly_junshenbao_huanggai_zhaxiang_clear', { player: 'phaseAfter' });
								} else {
									game.trySkillAudio('ly_junshenbao_huanggai_zhaxiang', player);
								}
							},
							subSkill: {
								clear: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									popup: false,
									content() {
										delete player.storage.ly_junshenbao_huanggai_zhaxiang;
									},
								},
								sha: {
									mod: {
										targetInRange(card, player, target, now) {
											if (card.name == 'sha') return true;
										},
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + player.storage.ly_junshenbao_huanggai_zhaxiang;
										},
									},
									trigger: {
										player: 'shaBegin',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.card && get.color(event.card) == 'red';
									},
									content() {
										trigger.directHit = true;
									},
								},
								fire: {
									trigger: {
										source: 'damageBegin',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.nature == 'fire' && event.player.isLinked();
									},
									content() {
										if (trigger.card && trigger.card.name == 'sha') {
											trigger.num++;
										} else {
											trigger.num++;
										}
									},
								},
							},
							ai: {
								moreDraw: true,
								maihp: true,
							},
						},
						ly_junshenbao_huanggai_zhaxiang_use: {
							audio: 'ext:军神包/audio:1',
						},
						ly_junshenbao_spcaoren_weikui: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								if (!player.storage.ly_junshenbao_spcaoren_weikui) {
									player.storage.ly_junshenbao_spcaoren_weikui = 0;
								}
								player.loseHp();
								player.storage.ly_junshenbao_spcaoren_weikui++;
								('step 1');
								player.next.chooseBool('是否失去1点体力？').ai = function (event, player) {
									var players = _status.event.parent.player;
									var num = game.countPlayer(function (current) {
										return player.getEnemies().includes(current) && current.countCards('h') > 0;
									});
									if (get.attitude(player, players) <= 0) return false;
									if (player.hp < 3) return false;
									if (players.storage.ly_junshenbao_spcaoren_weikui >= num) return false;
									return true;
								};
								('step 2');
								if (result.bool) {
									player.next.loseHp();
									player.storage.ly_junshenbao_spcaoren_weikui++;
								}
								('step 3');
								player.previous.chooseBool('是否失去1点体力？').ai = function (event, player) {
									var players = _status.event.parent.player;
									var num = game.countPlayer(function (current) {
										return player.getEnemies().includes(current) && current.countCards('h') > 0;
									});
									if (get.attitude(player, players) <= 0) return false;
									if (player.hp < 3) return false;
									if (players.storage.ly_junshenbao_spcaoren_weikui >= num) return false;
									return true;
								};
								('step 4');
								if (result.bool) {
									player.previous.loseHp();
									player.storage.ly_junshenbao_spcaoren_weikui++;
								}
								('step 5');
								event.num = player.storage.ly_junshenbao_spcaoren_weikui;
								if (!player.storage.ly_junshenbao_spcaoren_weikui_target) {
									player.storage.ly_junshenbao_spcaoren_weikui_target = [];
								}
								('step 6');
								var num = event.num;
								player
									.chooseTarget([1, num], '选择' + get.cnNumber(num) + '名有手牌的其他角色', function (card, player, target) {
										return player != target && !player.storage.ly_junshenbao_spcaoren_weikui_target.includes(target) && target.countCards('h') > 0;
									})
									.set('ai', function (target) {
										return get.effect(target, { name: 'sha' }, target, player);
									});
								('step 7');
								if (result.bool) {
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 8');
								if (targets && targets.length) {
									player.line(targets, 'thunder');
									for (var i = 0; i < targets.length; i++) {
										if (targets[i].countCards('h', 'shan')) {
											player.viewHandcards(targets[i]);
											player.useCard({ name: 'sha' }, targets[i], false);
											player.storage.ly_junshenbao_spcaoren_weikui_target.push(targets[i]);
										} else {
											player.discardPlayerCard(targets[i], 'visible', true);
										}
									}
								}
								('step 9');
								player.addTempSkill('ly_junshenbao_spcaoren_weikui_distance');
								player.addTempSkill('ly_junshenbao_spcaoren_weikui_delete');
							},
							subSkill: {
								delete: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									popup: false,
									content() {
										delete player.storage.ly_junshenbao_spcaoren_weikui;
										delete player.storage.ly_junshenbao_spcaoren_weikui_target;
									},
								},
								distance: {
									mod: {
										globalFrom(from, to) {
											if (from.storage.ly_junshenbao_spcaoren_weikui_target.includes(to)) return -Infinity;
										},
									},
								},
							},
							ai: {
								order: 8,
								result: {
									player(player, target) {
										var num = game.countPlayer(function (current) {
											return player.getEnemies().includes(current) && current.countCards('h') > 0;
										});
										if (num < 1) return -10;
										if (player.hp < 4) return -1;
										return 2;
									},
								},
							},
						},
						ly_junshenbao_spcaoren_lizhan: {
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								for (var i of game.players) {
									//QQ
									if (i.hp > 0) {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('ly_junshenbao_spcaoren_lizhan'), [1, Infinity], function (card, player, target) {
										return target.hp > 0;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (targets && targets.length) {
									player.line(targets, 'thunder');
									game.asyncDraw(targets);
									for (var i = 0; i < targets.length; i++) {
										targets[i].addTempSkill('ly_junshenbao_spcaoren_lizhan_draw', { player: 'phaseEnd' });
									}
								}
							},
							subSkill: {
								draw: {
									trigger: {
										player: 'phaseDrawBegin',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return player.maxHp - player.hp > 1;
									},
									content() {
										trigger.num++;
									},
								},
							},
							ai: {
								moreDraw: true,
								expose: 0.3,
								threaten: 2,
							},
						},
						ly_junshenbao_wangji_qizhi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('ly_junshenbao_wangji_qizhi'), function (card, player, target) {
										return !_status.event.getTrigger().targets.includes(target) && target.countCards('hej') > 0;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (get.attitude(player, target) > 0) {
											if (target.hasSkillTag('sancai')) return 11;
											if (target.countCards('j') > 0) {
												return 10;
											}
											if (target.maxHp - target.hp > 0 && target.getEquip('baiyin')) return 2.5;
											if (target.hasSkillTag('doubleDraw')) {
												return 2;
											}
											if (target.hasSkillTag('gainDraw')) {
												return 2.1;
											}
											if (target.hasSkillTag('noh') && target.countCards('h') < 1) {
												return 3;
											}
											if (target.hasSkillTag('nohDamage')) {
												return 4;
											}
											return -1;
										}
										if (get.attitude(player, target) < 0) {
											if (target.countCards('e') > 0) {
												if (target.hasSkillTag('noh') || target.hasSkillTag('noe')) {
													return -100;
												}
												if (target.countCards('e') == 1 && target.getEquip('baiyin')) return -3;
												if (!target.hasSkillTag('doubleDraw') || !target.hasSkillTag('equipDraw')) {
													return 3;
												}
												return -3;
											}
											return 0;
										}
										return false;
									});
								('step 1');
								if (result.bool) {
									if (!player.storage.ly_junshenbao_wangji_qizhi) {
										player.storage.ly_junshenbao_wangji_qizhi = 0;
									}
									player.storage.ly_junshenbao_wangji_qizhi++;
									if (!event.isMine() && !_status.connectMode) game.delay();
									player.line(result.targets, 'thunder');
									player.discardPlayerCard(result.targets[0], true, 'hej');
									event.target = result.targets[0];
								} else {
									event.goto(3);
								}
								('step 2');
								event.target.draw();
								event.finish();
								('step 3');
								player.chooseBool('是否摸1张牌并弃置1张牌');
								('step 4');
								if (result.bool) {
									if (!player.storage.ly_junshenbao_wangji_qizhi) {
										player.storage.ly_junshenbao_wangji_qizhi = 0;
									}
									player.storage.ly_junshenbao_wangji_qizhi++;
									player.draw();
									player.chooseToDiscard(true, 'hej');
								}
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_wangji_jinqu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return !player.hasSkill('ly_junshenbao_wangji_jinqu_lose') && player.storage.ly_junshenbao_wangji_qizhi > 0;
							},
							prompt(event, player) {
								var num = Math.min(3, player.storage.ly_junshenbao_wangji_qizhi);
								return '进趋:是否摸' + get.cnNumber(num) + '张牌并执行额外1个回合？';
							},
							content() {
								'step 0';
								event.num = Math.min(3, player.storage.ly_junshenbao_wangji_qizhi);
								('step 1');
								player.draw(event.num);
								('step 2');
								player.phase('nodelay');
								('step 3');
								player.addSkill('ly_junshenbao_wangji_jinqu_lose');
								player.addSkill('ly_junshenbao_wangji_jinqu_gain');
							},
							subSkill: {
								gain: {
									trigger: {
										global: 'phaseBegin',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.player != player;
									},
									content() {
										delete player.storage.ly_junshenbao_wangji_qizhi;
										player.removeSkill('ly_junshenbao_wangji_jinqu_lose');
										player.removeSkill('ly_junshenbao_wangji_jinqu_gain');
									},
								},
								lose: {},
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_zhurong_juxiang: {
							nobracket: true,
							group: ['ly_junshenbao_zhurong_juxiang_use', 'ly_junshenbao_zhurong_juxiang_reduce'],
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'useCard',
							},
							mark: true,
							init(player) {
								player.storage.ly_junshenbao_zhurong_juxiang = 0;
								player.unmarkSkill('ly_junshenbao_zhurong_juxiang');
							},
							marktext: '蛮',
							intro: {
								content: "剩余发动次数——<li>                <span style='color: red'>#</span>",
							},
							forced: true,
							filter(event, player) {
								if (event.card.name != 'nanman') return false;
								if (event.player == player) return false;
								return true;
							},
							content() {
								player.storage.ly_junshenbao_zhurong_juxiang += 3;
								player.markSkill('ly_junshenbao_zhurong_juxiang');
							},
							mod: {
								targetEnabled(card) {
									if (card.name == 'nanman') return false;
								},
							},
							subSkill: {
								reduce: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.card && event.card.name == 'nanman' && event.skill == 'ly_junshenbao_zhurong_juxiang_use';
									},
									content() {
										player.storage.ly_junshenbao_zhurong_juxiang--;
										player.markSkill('ly_junshenbao_zhurong_juxiang');
										if (player.storage.ly_junshenbao_zhurong_juxiang == 0) {
											player.unmarkSkill('ly_junshenbao_zhurong_juxiang');
										}
									},
								},
							},
						},
						ly_junshenbao_zhurong_juxiang_use: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							viewAs: {
								name: 'nanman',
								suit: 'spade',
								number: 4,
								cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 4, name: 'sha', nature: 'thunder', cardid: '4844381268', _transform: 'translateX(0px)', clone: { name: 'sha', suit: 'spade', number: 4, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 351 }, timeout: 286, original: 'h' }],
							},
							filter(event, player) {
								return player.storage.ly_junshenbao_zhurong_juxiang > 0 && player.countCards('h', { suit: 'spade' }) > 0;
							},
							filterCard(card, player) {
								return card.suit == 'spade';
							},
							selectCard: 1,
							check(card) {
								var player = _status.event.player;
								var targets = game.filterPlayer(function (current) {
									return player.canUse('nanman', current);
								});
								var num = 0;
								for (var i = 0; i < targets.length; i++) {
									var eff = get.sgn(get.effect(targets[i], { name: 'nanman' }, player, player));
									if (targets[i].hp == 1) {
										eff *= 1.5;
									}
									num += eff;
								}
								if (!player.needsToDiscard(-1)) {
									if (targets.length >= 7) {
										if (num < 2) return 0;
									} else if (targets.length >= 5) {
										if (num < 1.5) return 0;
									}
								}
								return 6 - get.value(card);
							},
							ai: {
								wuxie(target, card, player, viewer) {
									if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
										if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
									}
								},
								basic: {
									order: 9,
									useful: [5, 1],
									value: 5,
								},
								result: {
									target(player, target) {
										if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
										var nh = target.countCards('h');
										if (get.mode() == 'identity') {
											if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
										}
										if (nh == 0) return -2;
										if (nh == 1) return -1.7;
										return -1.5;
									},
								},
								tag: {
									respond: 1,
									respondSha: 1,
									damage: 1,
									multitarget: 1,
									multineg: 1,
								},
							},
						},
						ly_junshenbao_zhurong_lieren: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.player != player && event.num > 0 && event.player.isAlive() && event.player.countCards('h') > 0 && player.countCards('h') > 0;
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0 && player.countCards('h') > 1;
							},
							priority: 5,
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								if (result.bool && trigger.player.countGainableCards(player, 'he')) {
									player.gainPlayerCard(trigger.player, true, 'he');
								}
							},
						},
						ly_junshenbao_sunce_jiang: {
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (!event.targets.includes(player)) return false;
								return get.color(event.card) == 'red';
							},
							content() {
								player.draw();
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.color(card) == 'red') return [1, 0.6];
									},
									player(card, player, target) {
										if (get.color(card) == 'red' && card.name != 'tao') return [1, 1];
									},
								},
							},
						},
						ly_junshenbao_sunce_hunzi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							derivation: ['ly_junshenbao_sunce_yingzi', 'ly_junshenbao_sunce_yinghun'],
							trigger: {
								player: 'changeHp',
							},
							filter(event, player) {
								return player.hp == 1 && !player.storage.ly_junshenbao_sunce_hunzi;
							},
							forced: true,
							priority: null,
							content() {
								player.$skill('魂姿');
								player.gainMaxHp();
								player.addSkill('ly_junshenbao_sunce_yingzi');
								player.addSkill('ly_junshenbao_sunce_yinghun');
								player.awakenSkill('ly_junshenbao_sunce_hunzi');
								player.storage.ly_junshenbao_sunce_hunzi = true;
								player.recover();
							},
							ai: {
								threaten(player, target) {
									if (target.hp == 1) return 2;
									return 1;
								},
								maixie: true,
								effect: {
									target(card, player, target) {
										if (!target.hasFriend()) return;
										if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
									},
								},
							},
						},
						ly_junshenbao_sunce_yinghun: {
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							trigger: {
								player: 'changeHp',
							},
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								var num1 = player.hp;
								var num2 = player.maxHp - player.hp;
								event.num1 = num1;
								event.num2 = num2;
								var str = '令目标摸' + get.cnNumber(num1) + '张牌';
								if (num2) {
									str += ',弃置' + get.cnNumber(num2) + '张牌';
								}
								player
									.chooseTarget(get.prompt('ly_junshenbao_sunce_yinghun'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										var num = game.countPlayer(function (current) {
											return player.getFriends().includes(current);
										});
										if (player.hp >= player.maxHp - player.hp) {
											if (get.attitude(player, target) > 0) {
												if (!target.hasJudge('lebu') && target == player && target.countCards('h') < 3) {
													return 10;
												}
												if (target.hasJudge('lebu') && num > 1) {
													return -1;
												}
												if ((target.countCards('h') < 4) & !target.hasJudge('lebu')) {
													return target.hp + 4;
												}
											}
											return get.attitude(player, target);
										} else {
											if (get.attitude(player, target) < 0) {
												if (target.hasSkillTag('doubleDraw')) {
													if ((player.hp = player.maxHp - player.hp - 1)) {
														return -3;
													}
													return 0.5;
												} else {
													if (!target.hasSkillTag('equipDraw') && target.countCards('he') > 2) {
														return 10;
													}
													if (target.hasSkillTag('equipDraw') && target.countCards('e') < 1) {
														return 1;
													}
													if (target.hasSkillTag('equipDraw') && target.countCards('e') > 0) {
														return -3;
													}
												}
											}
											return -get.attitude(player, target);
										}
									})
									.set('prompt2', str);
								('step 1');
								if (result.bool) {
									player.line(result.targets[0], 'green');
									event.target = result.targets[0];
									result.targets[0].draw(player.hp);
									if (player.maxHp - player.hp < 1) event.finish();
									result.targets[0].chooseToDiscard(player.maxHp - player.hp, true, 'he');
								}
							},
							ai: {
								moreDraw: true,
								maixie: true,
								effect: {
									target(card, player, target) {
										if (target.maxHp <= 3) return;
										if (get.tag(card, 'damage')) {
											if (target.hp == target.maxHp) return [0, 1];
										}
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 1];
									},
								},
							},
						},
						ly_junshenbao_sunce_yingzi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'drawBegin',
							},
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								doubleDraw: true,
								threaten: 2,
							},
							mod: {
								maxHandcard(player, num) {
									if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
								},
							},
						},
						ly_junshenbao_sunce_zhiba: {
							mode: ['identity'],
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							global: 'ly_junshenbao_sunce_zhiba_use',
							zhuSkill: true,
						},
						ly_junshenbao_sunce_zhiba_use: {
							forceaudio: true,
							enable: 'phaseUse',
							silent: true,
							popup: false,
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								return game.hasPlayer(function (target) {
									return target != player && target.hasZhuSkill('ly_junshenbao_sunce_zhiba', player) && target.countCards('h') > 0;
								});
							},
							filterTarget(card, player, target) {
								return target != player && target.hasZhuSkill('ly_junshenbao_sunce_zhiba', player) && target.countCards('h') > 0;
							},
							usable: 1,
							content() {
								'step 0';
								if (target.storage.ly_junshenbao_sunce_hunzi) {
									target
										.chooseControl('拒绝', '不拒绝')
										.set('prompt', '是否拒绝制霸拼点？')
										.set('choice', get.attitude(target, player) <= 0);
								} else {
									event.forced = true;
								}
								('step 1');
								if (!event.forced && result.control == '拒绝') {
									game.log(target, '拒绝了拼点');
									target.chat('<span style=\"color: red\">滚</span>');
									event.finish();
									return;
								}
								player
									.chooseToCompare(target, function (card) {
										if (card.name == 'du') return 20;
										var player = get.owner(card);
										var target = _status.event.parent.target;
										if (player != target && get.attitude(player, target) > 0) {
											return -card.number;
										}
										return card.number;
									})
									.set('preserve', 'lose');
								('step 2');
								if (result.bool == false) {
									target.gain([result.player, result.target]);
									target.$gain2([result.player, result.target]);
								}
							},
							forced: true,
						},
						ly_junshenbao_zhouyu_fanjian: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							line: 'green',
							usable: 1,
							filter(event, player) {
								return (
									game.countPlayer(function (current) {
										return current != player && current.countCards('h') > 0;
									}) > 0
								);
							},
							check(card) {
								return 10 - get.value(card);
							},
							filterCard: true,
							position: 'he',
							filterTarget(card, player, target) {
								if (player == target) return false;
								if (ui.selected.targets.length == 1) {
									return target.countCards('h') > 0;
								}
								return true;
							},
							targetprompt: ['猜牌', '被猜牌'],
							selectTarget: 2,
							multitarget: true,
							content() {
								'step 0';
								event.getSuit = function (suit) {
									switch (suit) {
										case '♠️️':
											return 'spade';
										case '♣️️':
											return 'club';
										case '♥️️':
											return 'heart';
										case '◆':
											return 'diamond';
									}
									return suit;
								};
								('step 1');
								targets[0]
									.chooseControl('♠️️', '♣️️', '♥️️', '◆', function (player) {
										return Math.random();
									})
									.set('prompt', '请选择1种花色');
								('step 2');
								event.control = event.getSuit(result.control);
								('step 3');
								targets[0].popup(event.control);
								var card = targets[1].getCards('h').randomGet();
								targets[0].showCards(card);
								if (card.suit != event.control) targets[0].damage('nosource');
								targets[0].gain(card, targets[1]);
								targets[1].give(card, targets[0]);
							},
							ai: {
								order: 8,
								result: {
									target: -3,
								},
								expose: 0.4,
								threaten: 3,
							},
						},
						ly_junshenbao_zhouyu_yingzi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'drawBegin',
							},
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								doubleDraw: true,
								threaten: 2,
							},
							mod: {
								maxHandcard(player, num) {
									if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
								},
							},
						},
						ly_junshenbao_zhangfei_paoxiao_zhangba: {
							audio: 'ext:军神包/audio:1',
							enable: 'phaseUse',
							filterCard: true,
							line: 'fire',
							selectCard: 2,
							check(card) {
								var num = 0;
								var player = _status.event.player;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (lib.filter.targetEnabled({ name: 'sha' }, player, players[i]) && get.effect(players[i], { name: 'sha' }, player) > 0) {
										num++;
										if (num > 1) return 8 - get.value(card);
									}
								}
								return 0;
							},
							viewAs: {
								name: 'sha',
								cards: [
									{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'diamond', number: 5, name: 'guanshi', cardid: '5951875306', _transform: 'translateX(560px)', clone: { name: 'guanshi', suit: 'diamond', number: 5, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true }, timeout: 342, original: 'h' },
									{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 2, name: 'tengjia', nature: 'fire', cardid: '8760406310', _transform: 'translateX(0px)', clone: { name: 'tengjia', suit: 'club', number: 2, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true }, timeout: 343, original: 'h' },
								],
							},
							selectTarget: [1, 2],
							filterTarget(card, player, target) {
								return lib.filter.targetEnabled({ name: 'sha' }, player, target);
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) + 0.1;
								},
								effect: {
									player(card, player) {
										if (_status.currentPhase != player) return;
										if (card.name == 'sha' && player.countCards('h', 'sha') < 2 && !player.needsToDiscard()) {
											var num = 0;
											var player = _status.event.player;
											var players = game.filterPlayer();
											for (var i = 0; i < players.length; i++) {
												if (lib.filter.targetEnabled({ name: 'sha' }, player, players[i]) && get.attitude(player, players[i]) < 0) {
													num++;
													if (num > 1) return 'zeroplayertarget';
												}
											}
										}
									},
								},
								basic: {
									useful: [5, 1],
									value: [5, 1],
								},
								result: {
									target(player, target) {
										if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
											if (get.attitude(player, target) > 0) {
												return -6;
											} else {
												return -3;
											}
										}
										return -1.5;
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
						ly_junshenbao_zhangfei_paoxiao: {
							group: 'ly_junshenbao_zhangfei_paoxiao_zhangba',
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								return event.card && event.card.name == 'sha' && get.cardCount({ name: 'sha' }, player) > 1 && event.getParent(2).name != 'qinglong_skill';
							},
							forced: true,
							content() { },
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (!get.zhu(player, 'shouyue')) return false;
									if (arg && arg.name == 'sha') return true;
									return false;
								},
							},
						},
						ly_junshenbao_zhangfei_tishen: {
							nobracket: true,
							popup: false,
							mark: true,
							init(player) {
								player.storage.ly_junshenbao_zhangfei_tishen = 0;
								player.unmarkSkill('ly_junshenbao_zhangfei_tishen');
							},
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0 && player.storage.ly_junshenbao_zhangfei_tishen < 3;
							},
							content() {
								player.storage.ly_junshenbao_zhangfei_tishen += 1;
								player.markSkill('ly_junshenbao_zhangfei_tishen');
							},
							intro: {
								content: 'mark',
							},
							ai: {
								combo: 'ly_junshenbao_zhangfei_tishen_use',
								maixie: true,
								maixie_hp: true,
							},
						},
						ly_junshenbao_zhangfei_tishen_use: {
							nobracket: true,
							ai: {
								threaten(player, target) {
									return target.storage.ly_junshenbao_zhangfei_tishen;
								},
							},
							group: 'ly_junshenbao_zhangfei_tishen',
							audio: 'ext:军神包/audio:2',
							forced: true,
							trigger: {
								player: 'phaseBegin',
							},
							filter(event, player) {
								return player.storage.ly_junshenbao_zhangfei_tishen > 0;
							},
							content() {
								'step 0';
								event.num = player.storage.ly_junshenbao_zhangfei_tishen;
								('step 1');
								if (event.num > 0) {
									player.draw();
									player.recover();
									player.storage.ly_junshenbao_zhangfei_tishen -= 1;
									player.markSkill('ly_junshenbao_zhangfei_tishen');
								}
								('step 2');
								event.num--;
								if (event.num > 0) {
									event.goto(1);
								} else {
									player.unmarkSkill('ly_junshenbao_zhangfei_tishen');
								}
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_litong_cuifeng: {
							nobracket: true,
							trigger: {
								player: 'damageEnd',
							},
							notemp: true,
							audio: 'ext:军神包/audio:2',
							filter(event, player) {
								return event.num > 0;
							},
							init(player) {
								player.storage.ly_junshenbao_litong_cuifeng = [];
							},
							content() {
								'step 0';
								player.draw(1, trigger.num);
								player.chooseCard('将' + get.cnNumber(trigger.num) + '张牌置于武将牌上作为"锋"', 'he', [1, trigger.num]).set('ai', function (card) {
									if (card.name == 'du') return 20;
									return 7 - get.useful(card);
								});
								('step 1');
								if (result.bool) {
									player.lose(result.cards, ui.special);
									player.$give(result.cards, player);
									for (var i = 0; i < result.cards.length; i++) {
										player.storage.ly_junshenbao_litong_cuifeng.push(result.cards[i]);
									}
									player.markSkill('ly_junshenbao_litong_cuifeng');
								}
							},
							marktext: '锋',
							intro: {
								content: 'cards',
							},
							group: 'ly_junshenbao_litong_cuifeng_1',
							ai: {
								moreDraw: true,
								threaten: 2,
								maixie: true,
								maixie_hp: true,
							},
							subSkill: {
								1: {
									trigger: {
										player: 'phaseBegin',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return player.storage.ly_junshenbao_litong_cuifeng.length;
									},
									content() {
										'step 0';
										event.cards = get.cards(player.storage.ly_junshenbao_litong_cuifeng.length * 3);
										player.showCards(event.cards);
										('step 1');
										var num1 = 0,
											num2 = 0,
											num3 = 0,
											num4 = 0;
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												//QQ
												if (i.suit == 'heart') {
													num1++;
												}
												if (i.suit == 'diamond') {
													num2++;
												}
												if (i.suit == 'club') {
													num3++;
												}
												if (i.suit == 'spade') {
													num4++;
												}
											}
										player.recover(num1);
										player.draw(num2);
										player.addTempSkill('ly_junshenbao_litong_cuifeng_2');
										player.$throw(player.storage.ly_junshenbao_litong_cuifeng.slice(0), 1000);
										player.storage.ly_junshenbao_litong_cuifeng_2 = num3;
										player.storage.ly_junshenbao_litong_cuifeng_3 = num4;
										game.log(player, '本回合<span style=\"color: red\">手牌上限</span>+', num3, ',本回合<span style=\"color: red\">攻击距离</span>与<span style=\"color: red\">出杀次数</span>+', num4);
										while (player.storage.ly_junshenbao_litong_cuifeng.length) {
											player.storage.ly_junshenbao_litong_cuifeng.shift().discard();
										}
										player.unmarkSkill('ly_junshenbao_litong_cuifeng');
									},
								},
								2: {
									mod: {
										maxHandcard(player, num) {
											return num + player.storage.ly_junshenbao_litong_cuifeng_2;
										},
										globalFrom(from, to, distance) {
											return distance - from.storage.ly_junshenbao_litong_cuifeng_3;
										},
										cardUsable(card, player, num) {
											if (card.name == 'sha' && player.storage.ly_junshenbao_litong_cuifeng_3) return num + player.storage.ly_junshenbao_litong_cuifeng_3;
										},
									},
								},
							},
						},
						ly_junshenbao_yujin_yizhong: {
							nobracket: true,
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							audio: 'ext:军神包/audio:1',
							filter(event, player) {
								return event.card.name == 'sha' && get.color(event.card) == 'black';
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'sha' && get.color(card) == 'black') return 'zerotarget';
									},
								},
							},
						},
						ly_junshenbao_yujin_zhenjun: {
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							nobracket: true,
							line: 'thunder',
							usable: 2,
							filter(event, player) {
								return true;
							},
							filterTarget(card, player, target) {
								return target.countCards('h') > target.hp && player != target;
							},
							content() {
								'step 0';
								event.num = Math.min(3, target.countCards('h') - target.hp);
								player.discardPlayerCard(event.num, 'he', target, true);
								('step 1');
								('step 2');
								if (player.countCards('h') > event.num) {
									player.chooseToDiscard(event.num, true);
									player.draw(event.num);
									event.card = get.cardPile(function (card) {
										return get.type(card) == 'equip';
									});
									if (event.card) {
										player.equip(event.card, true).set('delay', true);
									} else {
										event.finish();
									}
									event.finish();
								} else {
									var card = player.getCards('h');
									player.discard(card);
									player.draw(Math.min(5, player.maxHp));
									event.goto(3);
								}
								('step 3');
								event.num1 = 2;
								('step 4');
								if (event.num1 > 0) {
									event.card = get.cardPile(function (card) {
										return get.type(card) == 'equip';
									});
									if (event.card) {
										player.equip(event.card, true).set('delay', true);
									} else {
										event.finish();
									}
									event.num1--;
									event.redo();
								}
							},
							ai: {
								moreDraw: true,
								order: 4,
								expose: 0.2,
								result: {
									target: -3,
								},
								threaten: 2,
							},
						},
						ly_junshenbao_luxun_qianxun: {
							nobracket: true,
							init(player) {
								player.storage.ly_junshenbao_luxun_qianxun_gain = [];
							},
							audio: 'ext:军神包/audio:1',
							trigger: {
								target: 'useCardToBegin',
								player: 'judgeBefore',
							},
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								if (event.parent.name == 'phaseJudge') {
									if (lib.skill.ly_junshenbao_luxun_qianxun.trigger.player == 'judgeBefore') {
										return true;
									}
									return event.result && event.result.judge != 0;
								}
								if (event.name == 'judge') return false;
								if (event.targets && event.targets.length > 1) return false;
								if (event.card && get.type(event.card) == 'trick' && event.player != player) return true;
							},
							content() {
								'step 0';
								event.num = player.countCards('h');
								player.storage.ly_junshenbao_luxun_qianxun_gain = player.storage.ly_junshenbao_luxun_qianxun_gain.concat(player.getCards('h'));
								game.addVideo('storage', player, ['ly_junshenbao_luxun_qianxun_gain', get.cardsInfo(player.storage.ly_junshenbao_luxun_qianxun_gain), 'cards']);
								player.lose(player.getCards('h'), ui.special);
								player.addSkill('ly_junshenbao_luxun_qianxun_gain');
								('step 1');
								player.chooseTarget('选择发动"谦逊"的目标', [1, event.num]).ai = function (target) {
									var player = _status.event.player;
									if (player == target) return get.attitude(player, target) + 10;
									return get.attitude(player, target);
								};
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'green');
									game.asyncDraw(result.targets);
								}
							},
							ai: {
								threaten: 2,
								noh: true,
								effect(card, player, target) {
									if (!target.hasFriend()) return;
									if (player == target) return;
									var type = get.type(card);
									var nh = target.countCards();
									if (type == 'trick') {
										if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
											if (get.tag(card, 'damage')) {
												if (nh < 3 || target.hp <= 2) return 0.8;
											}
											return [1, nh];
										}
									} else if (type == 'delay') {
										return [0.5, 0.5];
									}
									if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
								},
							},
						},
						ly_junshenbao_luxun_qianxun_gain: {
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							audio: 'ext:军神包/audio:1',
							content() {
								player.gain(player.storage.ly_junshenbao_luxun_qianxun_gain);
								player.removeSkill('ly_junshenbao_luxun_qianxun_gain');
								player.storage.ly_junshenbao_luxun_qianxun_gain = [];
								game.addVideo('storage', player, ['ly_junshenbao_luxun_qianxun_gain', get.cardsInfo(player.storage.ly_junshenbao_luxun_qianxun_gain), 'cards']);
							},
							mark: true,
							intro: {
								content: 'cardCount',
							},
						},
						ly_junshenbao_luxun_lianying: {
							group: 'ly_junshenbao_luxun_lianying_draw',
							subSkill: {
								draw: {
									trigger: {
										player: 'loseEnd',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										if (player.countCards('h')) return false;
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												//QQ
												if (i.original == 'h') return true;
											}
										return false;
									},
									content() {
										player.draw();
									},
								},
							},
							nobracket: true,
							trigger: {
								player: 'loseEnd',
							},
							forced: true,
							audio: 'ext:军神包/audio:2',
							filter(event, player) {
								if (_status.currentPhase != player) return true;
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('ly_junshenbao_luxun_lianying'), function (card, player, target) {
										return player != target && !target.isLinked();
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									if (!player.storage.ly_junshenbao_luxun_lianying1) {
										player.storage.ly_junshenbao_luxun_lianying1 = 0;
									}
									player.storage.ly_junshenbao_luxun_lianying1++;
									event.target = result.targets[0];
									player.line(event.target, 'green');
									event.target.link(true);
									player.discardPlayerCard('he', event.target, true);
								} else {
									event.finish();
								}
								('step 2');
								if (player.storage.ly_junshenbao_luxun_lianying1 > 3) {
									player
										.chooseTarget([1, 1], '对1名其他角色造成1点火焰伤害', function (card, player, target) {
											return player != target;
										})
										.set('ai', function (target) {
											return get.damageEffect(target, player, player, 'fire');
										});
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									delete player.storage.ly_junshenbao_luxun_lianying1;
									player.line(result.targets, 'green');
									event.targets = result.targets;
									event.num2 = 0;
								} else {
									event.finish();
								}
								('step 4');
								if (event.num2 < event.targets.length) {
									event.targets[event.num2].damage('fire');
									event.num2++;
									event.redo();
								}
							},
							ai: {
								moreDraw: true,
								expose: 0.3,
								nohDamage: true,
								threaten: 2,
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
						ly_junshenbao_sunhao_canshi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseDrawBefore',
							},
							check(event, player) {
								var num = game.countPlayer(function (current) {
									if (player.hasZhuSkill('ly_junshenbao_sunhao_guiming') && player.getFriends().includes(current)) return true;
									return current.isDamaged();
								});
								return num > 3;
							},
							prompt(event, player) {
								var num = game.countPlayer(function (current) {
									if (player.hasZhuSkill('ly_junshenbao_sunhao_guiming') && player.getFriends().includes(current) && current != player) return true;
									return current.isDamaged();
								});
								return '残蚀:是否改为摸' + get.cnNumber(num) + '张牌？';
							},
							content() {
								trigger.cancel();
								var num = game.countPlayer(function (current) {
									if (player.hasZhuSkill('ly_junshenbao_sunhao_guiming') && player.getFriends().includes(current) && current != player) return true;
									return current.isDamaged();
								});
								if (num > 0) {
									player.draw(num);
								}
								player.addTempSkill('ly_junshenbao_sunhao_canshi_dis');
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_sunhao_canshi_dis: {
							popup: false,
							forced: true,
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return get.type(event.card) != 'equip' && get.type(event.card) != 'delay';
							},
							content() {
								player.chooseToDiscard(true);
							},
						},
						ly_junshenbao_sunhao_guiming: {
							mode: ['identity'],
							nobracket: true,
							zhuSkill: true,
						},
						ly_junshenbao_sunhao_canlu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								if (player.storage.ly_junshenbao_sunhao_canlu < 1) return false;
								return true;
							},
							mark: true,
							init(player) {
								player.storage.ly_junshenbao_sunhao_canlu = 0;
								player.markSkill('ly_junshenbao_sunhao_canlu');
							},
							mod: {
								maxHandcard(player, num) {
									return num - 3 + player.storage.ly_junshenbao_sunhao_canlu;
								},
							},
							marktext: '<span style="color: #77FF00">戮</span>',
							intro: {
								content: "剩余发动次数——<li>      <span style='color: red'>#</span>",
							},
							check(card) {
								return 8 - get.value(card);
							},
							filterCard: true,
							selectCard: 1,
							content() {
								'step 0';
								if (player.storage.ly_junshenbao_sunhao_canlu == 2) {
									var card = game.createCard({ name: 'lebu', suit: 'diamond' });
									player.useCard(card, player);
								}
								if (player.storage.ly_junshenbao_sunhao_canlu == 3) {
									var card = game.createCard({ name: 'bingliang', suit: 'club' });
									player.useCard(card, player);
								}
								if (player.storage.ly_junshenbao_sunhao_canlu == 1) {
									var card = game.createCard({ name: 'shandian', suit: 'heart' });
									player.useCard(card, player);
								}
								('step 1');
								player.storage.ly_junshenbao_sunhao_canlu--;
								event.num = player.countCards('j');
								player
									.chooseTarget([1, event.num], '对' + event.num + '名其他角色造成1点伤害', function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										return get.damageEffect(target, player, player);
									});
								('step 2');
								if (result.bool) {
									player.line(result.targets, 'green');
									event.targets = result.targets;
									event.num2 = 0;
								} else {
									event.finish();
								}
								('step 3');
								if (event.num2 < event.targets.length) {
									event.targets[event.num2].damage();
									event.num2++;
									event.redo();
								}
							},
							group: 'ly_junshenbao_sunhao_canlu_update',
							subSkill: {
								update: {
									trigger: {
										player: 'enterGame',
										global: 'gameDrawAfter',
									},
									forced: true,
									popup: false,
									content() {
										player.storage.ly_junshenbao_sunhao_canlu += 3;
									},
								},
							},
							ai: {
								threaten: 2,
								order: 2,
								result: {
									player(player) {
										var num = 0,
											players = game.filterPlayer();
										for (var i = 0; i < players.length; i++) {
											if (player != players[i] && get.damageEffect(players[i], player, players[i]) < 0) {
												var att = get.attitude(player, players[i]);
												if (att > 0) {
													num--;
												} else if (att < 0) {
													num++;
												}
											}
										}
										if (game.players.length < 5) {
											return num - 1;
										} else {
											return num - 2;
										}
									},
								},
							},
						},
						ly_junshenbao_sunhao_chouhai: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'damageBegin',
							},
							forced: true,
							check() {
								return false;
							},
							filter(event, player) {
								return !event.nature && player.countCards('h') == 0;
							},
							content() {
								trigger.num++;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage') && target.countCards('h') == 0) return [1, -2];
									},
								},
							},
						},
						ly_junshenbao_tianfeng_sijian: {
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							nobracket: true,
							line: 'white',
							filter(event, player) {
								return true;
							},
							filterTarget(card, player, target) {
								return target.countCards('he') && player != target;
							},
							content() {
								player.discardPlayerCard('he', target, true);
								target.chooseToUse({ name: 'sha' }, '是否对' + get.translation(player) + '使用1张杀', function (card, player, target) {
									var players = _status.event.parent.player;
									return target == players;
								});
							},
							ai: {
								order: 4,
								expose: 0.2,
								result: {
									target: -1,
									player(player, target) {
										if (target.countCards('h') == 0) return 0;
										if (target.countCards('h') == 1) return -0.1;
										if (player.hp <= 2) return -2;
										if (player.countCards('h', 'shan') == 0) return -1;
										return -0.5;
									},
								},
								threaten: 2,
							},
						},
						ly_junshenbao_tianfeng_suishi: {
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							popup: false,
							group: ['ly_junshenbao_tianfeng_suishi_1', 'ly_junshenbao_tianfeng_suishi_2', 'ly_junshenbao_tianfeng_suishi_3', 'ly_junshenbao_tianfeng_suishi_4'],
							subSkill: {
								1: {
									popup: false,
									forced: true,
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										return player.getFriends().includes(event.source) && event.num > 0;
									},
									content() {
										trigger.source.line(player, 'white');
										player.draw();
									},
								},
								2: {
									popup: false,
									forced: true,
									trigger: {
										global: 'recoverEnd',
									},
									filter(event, player) {
										return player.getFriends().includes(event.player) && event.num > 0;
									},
									content() {
										trigger.player.line(player, 'white');
										player.recover(trigger.num);
									},
								},
								3: {
									popup: false,
									forced: true,
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										return player.getFriends().includes(event.player) && event.num > 0;
									},
									content() {
										trigger.player.line(player, 'white');
										player.damage(trigger.num, trigger.nature, trigger.source);
									},
								},
								4: {
									popup: false,
									forced: true,
									trigger: {
										global: 'dieBegin',
									},
									filter(event, player) {
										return player.getFriends().includes(event.player);
									},
									content() {
										trigger.player.line(player, 'white');
										player.loseMaxHp();
									},
								},
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_tianfeng_suishi_sheng: {
							audio: 'ext:军神包/audio:1',
						},
						ly_junshenbao_tianfeng_suishi_bai: {
							audio: 'ext:军神包/audio:1',
						},
						ly_junshenbao_wolong_huoji: {
							nobracket: true,
							line: 'fire',
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 3,
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h');
								});
							},
							filterTarget(card, player, target) {
								return target.countCards('h') > 0 && target != player;
							},
							check(card) {
								return 9 - get.value(card);
							},
							filterCard: true,
							discard: false,
							lose: false,
							content() {
								'step 0';
								player.showCards(cards);
								var card = target.getCards('h').randomGet();
								player.showCards(card);
								if (get.color(cards) == get.color(card) || cards.number == card.number) {
									event.goto(1);
								} else {
									event.finish();
								}
								('step 1');
								player
									.chooseTarget(function (card, player, target) {
										var players = _status.event.source;
										return target != players;
									})
									.set('ai', function (target) {
										return get.damageEffect(target, _status.event.source, player, 'fire');
									})
									.set('source', target);
								('step 2');
								if (result.bool && result.targets && result.targets.length) {
									player.line(result.targets[0], 'fire');
									result.targets[0].damage('fire');
								}
							},
							ai: {
								order: 7,
								result: {
									target(player, target) {
										var num = game.countPlayer(function (current) {
											return player.getEnemies().includes(current);
										});
										if (num > 1) return -2;
										return 1;
									},
								},
								expose: 0.2,
							},
						},
						ly_junshenbao_wolong_bazhen: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							inherit: 'bagua_skill',
							filter(event, player) {
								if (!lib.skill.bagua_skill.filter(event, player)) return false;
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
										return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
									},
								},
							},
							trigger: {
								player: 'chooseToRespondBegin',
							},
							check(event, player) {
								if (get.damageEffect(player, event.player, player) >= 0) return false;
								return true;
							},
							content() {
								'step 0';
								player.judge('bagua', function (card) {
									return get.color(card) == 'red' ? 1.5 : -0.5;
								});
								('step 1');
								if (result.judge > 0) {
									trigger.untrigger();
									trigger.responded = true;
									trigger.result = { bool: true, card: { name: 'shan' } };
								}
							},
						},
						ly_junshenbao_wolong_kanpo: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'chooseToUse',
							filterCard(card) {
								return true;
							},
							viewAsFilter(player) {
								return player.countCards('h') > 0;
							},
							viewAs: {
								name: 'wuxie',
								suit: 'club',
								number: 3,
								cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 3, name: 'caomu', cardid: '3220271289', clone: { name: 'caomu', suit: 'club', number: 3, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 505 }, timeout: 336, original: 'h' }],
							},
							prompt: '将1张手牌当无懈可击使用',
							check(card) {
								return 8 - get.value(card);
							},
							threaten: 1.2,
							ai: {
								basic: {
									useful: [6, 4],
									value: [6, 4],
								},
								result: {
									player: 1,
								},
								expose: 0.2,
							},
						},
						ly_junshenbao_wolong_jixing: {
							audio: 'ext:军神包/audio:1',
							nobracket: true,
							forced: true,
							trigger: {
								player: 'changeHp',
							},
							mark: true,
							init(player) {
								player.storage.ly_junshenbao_wolong_jixing = false;
							},
							intro: {
								content: 'limited',
							},
							filter(event, player) {
								return player.hp <= 0;
							},
							content() {
								'step 0';
								player.storage.ly_junshenbao_wolong_jixing == true;
								player.awakenSkill('ly_junshenbao_wolong_jixing');
								event.num = 7;
								game.countPlayer(function (current) {
									if (current.countCards('ej', { color: 'red' }) > 0) {
										current.line(player, 'fire');
									}
								});
								('step 1');
								var num = game.countPlayer(function (current) {
									return current.countCards('ej', { color: 'red' });
								});
								var nh = Math.min(0.5, 0.1 * num);
								if (Math.random() <= nh) {
									var card = ui.cardPile.firstChild;
									if (lib.inpile.includes(card.name)) {
										for (var i = 1; i < ui.cardPile.childElementCount; i++) {
											var card2 = ui.cardPile.childNodes[i];
											if (get.color(card2) == 'red') {
												ui.cardPile.insertBefore(card2, card);
												break;
											}
										}
									} else {
										card.init([['heart', 'diamond'].randomGet(), card.number, card.name, card.nature]);
									}
								}
								('step 2');
								var cards = get.cards();
								var card = cards[0];
								player.showCards(card);
								if (get.color(card) == 'red') {
									player.gainMaxHp();
									player.recover();
								}
								card.discard();
								('step 3');
								event.num--;
								if (event.num > 0) {
									event.goto(1);
								}
							},
						},
						ly_junshenbao_chenlin_songci: {
							nobracket: true,
							line: 'thunder',
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								if (target.countCards('h') > target.hp) return false;
								if (player.storage.ly_junshenbao_chenlin_songci_target && player.storage.ly_junshenbao_chenlin_songci_target.includes(target)) {
									return false;
								}
								return true;
							},
							subSkill: {
								clear: {
									trigger: {
										player: 'phaseAfter',
									},
									silent: true,
									content() {
										delete player.storage.ly_junshenbao_chenlin_songci_target;
									},
									forced: true,
									popup: false,
								},
							},
							group: 'ly_junshenbao_chenlin_songci_clear',
							content() {
								'step 0';
								if (!player.storage.ly_junshenbao_chenlin_songci_target) {
									player.storage.ly_junshenbao_chenlin_songci_target = [];
								}
								player.storage.ly_junshenbao_chenlin_songci_target.push(target);
								('step 1');
								target.draw(2);
							},
							ai: {
								moreDraw: true,
								order: 7,
								threaten: 2,
								expose: 0.2,
								result: {
									target: 2,
								},
							},
						},
						ly_junshenbao_chenlin_xiwen: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							line: 'thunder',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								if (target.countCards('h') <= target.hp) return false;
								if (player.storage.ly_junshenbao_chenlin_xiwen_target && player.storage.ly_junshenbao_chenlin_xiwen_target.includes(target)) {
									return false;
								}
								return true;
							},
							subSkill: {
								clear: {
									trigger: {
										player: 'phaseAfter',
									},
									silent: true,
									content() {
										delete player.storage.ly_junshenbao_chenlin_xiwen_target;
									},
									forced: true,
									popup: false,
								},
							},
							group: 'ly_junshenbao_chenlin_xiwen_clear',
							content() {
								'step 0';
								if (!player.storage.ly_junshenbao_chenlin_xiwen_target) {
									player.storage.ly_junshenbao_chenlin_xiwen_target = [];
								}
								player.storage.ly_junshenbao_chenlin_xiwen_target.push(target);
								('step 1');
								target.chooseToDiscard(2, 'he', true);
							},
							ai: {
								order: 7,
								threaten: 2,
								expose: 0.2,
								result: {
									target: -2,
								},
							},
						},
						ly_junshenbao_chenlin_songci_zan: {
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'useCard',
							},
							content() { },
						},
						ly_junshenbao_chenlin_songci_ma: {
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'useCard',
							},
							content() { },
						},
						ly_junshenbao_chenlin_bifa: {
							nobracket: true,
							trigger: {
								player: 'phaseUseEnd',
							},
							forced: true,
							audio: 'ext:军神包/audio:2',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (players[i].storage.ly_junshenbao_chenlin_bifa) {
										players[i].addSkill('ly_junshenbao_chenlin_bifa_lose');
									}
								}
								player.chooseCardTarget({
									filterCard: true,
									filterTarget(card, player, target) {
										return player != target && !target.storage.ly_junshenbao_chenlin_bifa;
									},
									ai1(card) {
										return 8 - get.value(card);
									},
									ai2(target) {
										var num = target.hasSkillTag('maixie') ? 2 : 0;
										return -get.attitude(_status.event.player, target) - num;
									},
									prompt: get.prompt('ly_junshenbao_chenlin_bifa'),
								});
								('step 1');
								if (result.bool) {
									result.targets[0].addSkill('ly_junshenbao_chenlin_bifa_lose');
									result.targets[0].storage.ly_junshenbao_chenlin_bifa = [result.cards[0], player];
									player.lose(result.cards[0], ui.special);//QQQ
									player.$give(1, result.targets[0]);
								}
							},
							ai: {
								threaten: 1.7,
								expose: 0.3,
							},
						},
						ly_junshenbao_chenlin_bifa_lose: {
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							mark: true,
							content() {
								'step 0';
								if (player.storage.ly_junshenbao_chenlin_bifa[1].isAlive() && player.countCards('h')) {
									player
										.chooseCard(get.translation(player.storage.ly_junshenbao_chenlin_bifa[1]) + '的笔伐牌为' + get.translation(player.storage.ly_junshenbao_chenlin_bifa[0]), function (card) {
											return get.type(card, 'trick') == _status.event.type;
										})
										.set('ai', function (card) {
											return 8 - get.value(card);
										})
										.set('type', get.type(player.storage.ly_junshenbao_chenlin_bifa[0], 'trick'));
								} else {
									event.directfalse = true;
								}
								('step 1');
								if (result.bool && !event.directfalse) {
									player.storage.ly_junshenbao_chenlin_bifa[1].gain(result.cards, player);
									player.$give(result.cards, player.storage.ly_junshenbao_chenlin_bifa[1]);
									player.gain(player.storage.ly_junshenbao_chenlin_bifa[0], 'draw2', 'log');
								} else {
									player.storage.ly_junshenbao_chenlin_bifa[0].discard();
									game.log(player.storage.ly_junshenbao_chenlin_bifa[0], '进入弃牌堆');
									player.$throw(player.storage.ly_junshenbao_chenlin_bifa[0], 1000);
									player.loseHp();
									if (player.countCards('e')) player.chooseToDiscard('e', true);
								}
								player.removeSkill('ly_junshenbao_chenlin_bifa_lose');
								delete player.storage.ly_junshenbao_chenlin_bifa;
							},
							intro: {
								name: '笔伐',
								content: '已成为笔伐目标',
							},
						},
						ly_junshenbao_mateng_xiongyi: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								event.targets = [];
								if (player.getEnemies().includes(player.previous) && player.getEnemies().includes(player.next)) {
									player.draw(3);
									event.finish();
								}
								event.current = player.next;
								('step 1');
								if (player.getFriends().includes(event.current)) {
									player.line(event.current, 'white');
									event.targets.push(event.current);
								} else {
									event.goto(3);
								}
								('step 2');
								if (event.current.next != player && event.current.getFriends().includes(event.current.next)) {
									event.current.line(event.current.next, 'white');
									event.current = event.current.next;
									event.goto(1);
								} else {
									event.goto(3);
								}
								('step 3');
								event.current = player.previous;
								('step 4');
								if (player.getFriends().includes(event.current)) {
									player.line(event.current, 'white');
									event.targets.push(event.current);
								} else {
									event.goto(6);
								}
								('step 5');
								if (event.current.previous != player && event.current.getFriends().includes(event.current.previous)) {
									event.current.line(event.current.previous, 'white');
									event.current = event.current.previous;
									event.goto(4);
								} else {
									event.goto(6);
								}
								('step 6');
								event.targets.push(player);
								game.asyncDraw(event.targets, 2);
							},
							ai: {
								moreDraw: true,
								threaten: 2,
								order: 8,
								result: {
									player: 2,
								},
							},
						},
						ly_junshenbao_mateng_mashu: {
							nobracket: true,
							mod: {
								globalFrom(from, to, distance) {
									return (distance -= 1);
								},
							},
						},
						ly_junshenbao_mateng_xiongqi: {
							mode: ['identity'],
							nobracket: true,
							group: 'ly_junshenbao_mateng_xiongqi_mashu',
							audio: 'ext:军神包/audio:1',
							zhuSkill: true,
							trigger: {
								player: 'shaAfter',
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							filter(event, player) {
								if (!event.target.isAlive()) return false;
								if (!player.hasZhuSkill('ly_junshenbao_mateng_xiongqi')) return false;
								if (player.getEnemies().includes(player.previous) && player.getEnemies().includes(player.next)) return false;
								return true;
							},
							content() {
								'step 0';
								event.targets = [];
								event.current = player.next;
								('step 1');
								if (player.getFriends().includes(event.current)) {
									player.line(event.current, 'white');
									event.current.chooseToUse({ name: 'sha' }, function (card, player, target) {
										return target == trigger.target;
									});
								} else {
									event.goto(3);
								}
								('step 2');
								if (result.bool) event.targets.push(event.current);
								if (!trigger.target.isAlive()) event.goto(6);
								if (event.current.next != player && event.current.getFriends().includes(event.current.next)) {
									event.current.line(event.current.next, 'white');
									event.current = event.current.next;
									event.goto(1);
								} else {
									event.goto(3);
								}
								('step 3');
								event.current = player.previous;
								('step 4');
								if (player.getFriends().includes(event.current)) {
									player.line(event.current, 'white');
									event.current.chooseToUse({ name: 'sha' }, function (card, player, target) {
										return target == trigger.target;
									});
								} else {
									event.goto(6);
								}
								('step 5');
								if (result.bool) event.targets.push(event.current);
								if (!trigger.target.isAlive()) event.goto(6);
								if (event.current.previous != player && event.current.getFriends().includes(event.current.previous)) {
									event.current.line(event.current.previous, 'white');
									event.current = event.current.previous;
									event.goto(4);
								} else {
									event.goto(6);
								}
								('step 6');
								event.targets.push(player);
								game.asyncDraw(event.targets);
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_mateng_xiongqi_mashu: {
							nobracket: true,
							forced: true,
							zhuSkill: true,
							popup: false,
							trigger: {
								global: ['dieAfter', 'gameDrawAfter'],
							},
							filter(event, player) {
								if (!player.hasZhuSkill('ly_junshenbao_mateng_xiongqi')) return false;
								if (player.getEnemies().includes(player.previous) && player.getEnemies().includes(player.next)) return false;
								return true;
							},
							content() {
								'step 0';
								game.countPlayer(function (current) {
									if (current != player && current.hasSkill('ly_junshenbao_mateng_mashu')) {
										current.removeSkill('ly_junshenbao_mateng_mashu');
									}
								});
								event.current = player.next;
								('step 1');
								if (player.getFriends().includes(event.current)) {
									player.line(event.current, 'white');
									event.current.addSkill('ly_junshenbao_mateng_mashu');
								} else {
									event.goto(3);
								}
								('step 2');
								if (event.current.next != player && event.current.getFriends().includes(event.current.next)) {
									event.current.line(event.current.next, 'white');
									event.current = event.current.next;
									event.goto(1);
								} else {
									event.goto(3);
								}
								('step 3');
								event.current = player.previous;
								('step 4');
								if (player.getFriends().includes(event.current)) {
									player.line(event.current, 'white');
									event.current.addSkill('ly_junshenbao_mateng_mashu');
								} else {
									event.finish();
								}
								('step 5');
								if (event.current.previous != player && event.current.getFriends().includes(event.current.previous)) {
									event.current.line(event.current.previous, 'white');
									event.current = event.current.previous;
									event.goto(4);
								} else {
									event.finish();
								}
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_sunquan_zhiheng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							group: ['ly_junshenbao_sunquan_zhiheng_swap', 'ly_junshenbao_sunquan_zhiheng_dis'],
							usable: 1,
							prompt(event) {
								var player = _status.event.player;
								var num = player.countCards('h');
								return '是否摸' + get.cnNumber(Math.min(5, num)) + '张牌';
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							init(player) {
								player.storage.ly_junshenbao_sunquan_zhiheng = [];
							},
							marktext: '<span style="color: #77FF00">权</span>',
							content() {
								'step 0';
								event.num = Math.min(5, player.countCards('h'));
								('step 1');
								player.draw(event.num);
								player.chooseCard('选择' + get.cnNumber(event.num) + '张牌作为"权"', event.num, true).ai = function (card) {
									var player = _status.event.player;
									if (player.storage.ly_junshenbao_sunquan_zhiheng.length > game.countPlayer()) return 5 - get.value(card);
									return -get.value(card);
								};
								('step 2');
								player.lose(result.cards, ui.special);
								player.storage.ly_junshenbao_sunquan_zhiheng = player.storage.ly_junshenbao_sunquan_zhiheng.concat(result.cards);
								player.markSkill('ly_junshenbao_sunquan_zhiheng');
								game.log(player, '将', result.cards, '置于武将牌上作为<权>');
							},
							mark: true,
							intro: {
								content: 'cards',
							},
							ai: {
								moreDraw: true,
								order: 7.5,
								result: {
									player: 2,
								},
							},
						},
						ly_junshenbao_sunquan_zhiheng_swap: {
							audio: 'ext:军神包/audio:1',
							nobracket: true,
							trigger: {
								player: ['phaseUseBegin', 'phaseDiscardEnd'],
							},
							init() {
								lib.onwash.push(function () {
									delete _status.ly_junshenbao_sunquan_zhiheng_swap_nocard;
								});
							},
							prompt: '是否发动技能——制衡,声明类型与花色',
							filter(event, player) {
								return player.storage.ly_junshenbao_sunquan_zhiheng.length;
							},
							content() {
								'step 0';
								player.chooseCardButton('移去1张"权"', true, player.storage.ly_junshenbao_sunquan_zhiheng);
								('step 1');
								var card = result.links[0];
								player.storage.ly_junshenbao_sunquan_zhiheng.remove(card);
								card.discard();
								player.$throw(card);
								game.log(player, '将', card, '置入弃牌堆');
								if (player.storage.ly_junshenbao_sunquan_zhiheng.length == 0) {
									player.unmarkSkill('ly_junshenbao_sunquan_zhiheng');
								}
								('step 2');
								event.cards = [];
								event.getResultString = function (str) {
									switch (str) {
										case '基本牌':
											return 'basic';
										case '锦囊牌':
											return 'trick';
										case '装备牌':
											return 'equip';
									}
									return str;
								};
								event.getSuit = function (suit) {
									switch (suit) {
										case '♠️️':
											return 'spade';
										case '♣️️':
											return 'club';
										case '♥️️':
											return 'heart';
										case '◆':
											return 'diamond';
									}
									return suit;
								};
								('step 3');
								player
									.chooseControl('基本牌', '锦囊牌', '装备牌', function (player) {
										if (Math.random() < 0.4) return '锦囊牌';
										if (Math.random() < 0.8 && Math.random() >= 0.4) return '基本牌';
										return '装备牌';
									})
									.set('prompt', '请选择想要获得的牌的类型');
								('step 4');
								event.control = event.getResultString(result.control);
								player.popup(event.control);
								event.goto(6);
								('step 5');
								player.popup(event.control1);
								var card = get.cardPile2(function (card) {
									return get.type(card) == event.control && card.suit == event.control1;
								});
								if (card) {
									player.gain(card, 'gain2');
								} else {
									_status.ly_junshenbao_sunquan_zhiheng_swap_nocard = true;
								}
								event.finish();
								('step 6');
								player
									.chooseControl('♠️️', '♣️️', '♥️️', '◆', function (player) {
										if (Math.random() < 0.4) return '◆';
										if (Math.random() < 0.8 && Math.random() >= 0.4) return '♥️️';
										return '♣️️';
									})
									.set('prompt', '请选择想要获得的牌的花色');
								('step 7');
								event.control1 = event.getSuit(result.control);
								event.goto(5);
							},
						},
						ly_junshenbao_sunquan_zhiheng_dis: {
							audio: 'ext:军神包/audio:1',
							nobracket: true,
							forced: true,
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return player.storage.ly_junshenbao_sunquan_zhiheng.length > game.countPlayer();
							},
							content() {
								'step 0';
								if (player.countCards('h') > player.maxHp) event.goto(4);
								('step 1');
								player.chooseCardButton('选择获得1张"权"', true, player.storage.ly_junshenbao_sunquan_zhiheng);
								('step 2');
								var card = result.links[0];
								player.storage.ly_junshenbao_sunquan_zhiheng.remove(card);
								player.gain(card, 'gain2', 'log');
								if (player.storage.ly_junshenbao_sunquan_zhiheng.length == 0) {
									player.unmarkSkill('ly_junshenbao_sunquan_zhiheng');
								}
								('step 3');
								if (player.storage.ly_junshenbao_sunquan_zhiheng.length && player.countCards('h') < player.maxHp) {
									event.goto(1);
								}
								('step 4');
								player.$throw(player.storage.ly_junshenbao_sunquan_zhiheng.slice(0), 1000);
								while (player.storage.ly_junshenbao_sunquan_zhiheng.length) {
									player.storage.ly_junshenbao_sunquan_zhiheng.shift().discard();
								}
								player.unmarkSkill('ly_junshenbao_sunquan_zhiheng');
							},
						},
						ly_junshenbao_sunquan_jiuyuan: {
							mode: ['identity'],
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							trigger: {
								global: 'useCard',
							},
							zhuSkill: true,
							forced: true,
							filter(event, player) {
								if (event.card.name != 'tao') return false;
								if (player.maxHp - player.hp == 0) return false;
								if (event.player == player) return false;
								if (!player.hasZhuSkill('ly_junshenbao_sunquan_jiuyuan')) return false;
								if (player.getEnemies().includes(event.player)) return false;
								return true;
							},
							content() {
								'step 0';
								trigger.player
									.chooseControl('是', '否', function () {
										if (get.attitude(trigger.player, player) > 0) return '是';
										return '否';
									})
									.set('prompt', '是否令' + get.translation(player) + '成为此桃额外目标');
								('step 1');
								if (result.control == '是') {
									trigger.player.line(player, 'green');
									game.log(player, '成为了', trigger.card, '的额外目标');
									trigger.targets.push(player);
									trigger.player.draw();
								} else {
									event.finish();
								}
							},
						},
						ly_junshenbao_pangtong_lianhuan_chongzhu: {
							audio: 'ext:军神包/audio:1',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h', { color: 'black' }) > 0;
							},
							filterCard(card) {
								return get.color(card) == 'black';
							},
							check(card) {
								return 5 - get.useful(card);
							},
							content() {
								player.draw();
							},
							discard: false,
							prompt: '将1张黑色牌置入弃牌堆并摸1张牌',
							delay: 0.5,
							prepare(cards, player) {
								player.$throw(cards, 1000);
							},
							ly_junshenbao_pangtong_lianhuan_draw: {
								nobracket: true,
								audio: 'ext:军神包/audio:2',
								trigger: {
									global: 'damageBegin',
								},
								forced: true,
								filter(event, player) {
									return event.nature == 'fire' && event.player != player && event.player.isLinked();
								},
								content() {
									player.draw();
								},
							},
							ly_junshenbao_pangtong_lianhuan_tiesuo: {
								nobracket: true,
								audio: 'ext:军神包/audio:1',
								enable: 'phaseUse',
								filter(event, player) {
									return player.countCards('h', { color: 'black' }) > 0;
								},
								filterCard(card) {
									return get.color(card) == 'black';
								},
								viewAs: {
									name: 'tiesuo',
									suit: 'club',
									number: 4,
									cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'club', number: 4, name: 'sha', cardid: '8821638294', _transform: 'translateX(224px)', clone: { name: 'sha', suit: 'club', number: 4, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 586 }, timeout: 562, original: 'h' }],
								},
								prompt: '将1张黑色牌当铁锁连环使用',
								check(card) {
									return 7 - get.value(card);
								},
								ai: {
									basic: {
										order: 5,
										useful: 4,
										value: 4,
									},
									result: {
										player: 1,
										target(player, target) {
											if (target.isLinked()) {
												if (target.hasSkillTag('link')) return 0;
												var f = target.hasSkillTag('nofire');
												var t = target.hasSkillTag('nothunder');
												if (f && t) return 0;
												if (f || t) return 0.5;
												return 2;
											}
											if (get.attitude(player, target) >= 0) return -0.9;
											if (ui.selected.targets.length) return -0.9;
											if (
												game.hasPlayer(function (current) {
													return get.attitude(player, current) <= -1 && current != target && !current.isLinked();
												})
											) {
												return -0.9;
											}
											return 0;
										},
									},
									wuxie() {
										if (Math.random() < 0.5) return 0;
									},
									tag: {
										multitarget: 1,
										multineg: 1,
										norepeat: 1,
									},
								},
							},
						},
						ly_junshenbao_pangtong_lianhuan: {
							nobracket: true,
							group: ['ly_junshenbao_pangtong_lianhuan_tiesuo', 'ly_junshenbao_pangtong_lianhuan_chongzhu', 'ly_junshenbao_pangtong_lianhuan_draw'],
							trigger: {
								player: 'useCard',
							},
							popup: false,
							filter(event, player) {
								if (event.card.name == 'tiesuo') return true;
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget('是否令1名不是此牌目标的角色成为额外目标', function (card, player, target) {
										if (player == target) return false;
										var trigger = _status.event.getTrigger();
										return player.canUse(trigger.card, target) && trigger.targets.includes(target) == false;
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, player, player) + 0.01;
									});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									player.line(event.target, 'fire');
								} else {
									event.finish();
								}
								('step 2');
								game.log(event.target, '成为了', trigger.card, '的额外目标');
								trigger.targets.push(event.target);
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_pangtong_niepan: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'changeHp',
							},
							mark: true,
							init(player) {
								player.storage.ly_junshenbao_pangtong_niepan = false;
							},
							filter(event, player) {
								if (player.hp <= 0) return true;
								return false;
							},
							content() {
								'step 0';
								player.hp = player.maxHp;
								player.update();
								player.discard(player.getCards('j'));
								player.draw(3);
								player.awakenSkill('ly_junshenbao_pangtong_niepan');
								player.storage.ly_junshenbao_pangtong_niepan = true;
								('step 1');
								player.link(false);
								('step 2');
								player.turnOver(false);
							},
							ai: {
								order: 0.5,
								skillTagFilter(player) {
									if (player.storage.ly_junshenbao_pangtong_niepan) return false;
									if (player.hp > 0) return false;
								},
								save: true,
								result: {
									player(player) {
										if (player.hp == 0) return 10;
										if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
										return 0;
									},
								},
								threaten(player, target) {
									if (!target.storage.ly_junshenbao_pangtong_niepan) return 1.5;
									return 2;
								},
							},
							intro: {
								content: 'limited',
							},
						},
						ly_junshenbao_pangtong_xiwu: {
							forced: true,
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.nature == 'fire';
							},
							content() {
								player.recover(trigger.num);
							},
							ai: {
								nofire: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'fireDamage')) return 0;
									},
								},
							},
						},
						ly_junshenbao_guanyinping_xueji: {
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							enable: 'phaseUse',
							filterCard: true,
							selectCard: 1,
							line: 'fire',
							filter(event, player) {
								return player.maxHp - player.hp > 0;
							},
							usable: 1,
							selectTarget() {
								var player = _status.event.player;
								var num = player.maxHp - player.hp;
								return [1, num];
							},
							filterTarget(card, player, target) {
								return target != player;
							},
							contentBefore() {
								for (var i = 0; i < targets.length; i++) {
									targets[i].link(true);
								}
							},
							content() {
								target.damage('fire');
							},
							ai: {
								maixie: true,
								effect: {
									target(card, player, target) {
										if (target.maxHp <= 3) return;
										if (!target.hasFriend()) return;
										if (get.tag(card, 'damage')) {
											if (target.hp == target.maxHp) return [0, 1];
										}
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 1];
									},
								},
								threaten: 2,
								order: 1,
								result: {
									target: -3,
								},
							},
						},
						ly_junshenbao_guanyinping_huxiao: {
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							marktext: '啸',
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return (num += player.storage.ly_junshenbao_guanyinping_huxiao);
								},
								globalFrom(from, to, distance) {
									return distance - from.storage.ly_junshenbao_guanyinping_huxiao;
								},
							},
							group: 'ly_junshenbao_guanyinping_huxiao_1',
							subSkill: {
								1: {
									trigger: {
										player: 'phaseEnd',
									},
									popup: false,
									forced: true,
									content() {
										player.storage.ly_junshenbao_guanyinping_huxiao -= player.storage.ly_junshenbao_guanyinping_huxiao;
										player.markSkill('ly_junshenbao_guanyinping_huxiao');
									},
								},
							},
							mark: true,
							init(player) {
								player.storage.ly_junshenbao_guanyinping_huxiao = 0;
								player.markSkill('ly_junshenbao_guanyinping_huxiao');
							},
							trigger: {
								source: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0 && _status.currentPhase == player && event.nature == 'fire';
							},
							content() {
								player.storage.ly_junshenbao_guanyinping_huxiao += trigger.num;
								player.markSkill('ly_junshenbao_guanyinping_huxiao');
							},
							intro: {
								content: '出杀次数+#/计算距离-#',
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_guanyinping_wuji: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player.getStat('damage') >= 3;
							},
							content() {
								'step 0';
								player.gainMaxHp();
								('step 1');
								if (player.isMinHp()) player.recover();
								var card = get.cardPile('qinglong', 'field');
								if (card) {
									player.gain(card, 'gain2', 'log');
								}
							},
						},
						ly_junshenbao_diaochan_lijian: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							line: 'white',
							filter(event, player) {
								return (
									game.countPlayer(function (current) {
										return current != player && current.sex == 'male';
									}) > 1
								);
							},
							check(card) {
								return 10 - get.value(card);
							},
							filterCard: true,
							position: 'he',
							filterTarget(card, player, target) {
								if (player == target) return false;
								if (target.sex != 'male') return false;
								if (target.countCards('h') < 1) return false;
								return true;
							},
							selectTarget: 2,
							multitarget: true,
							content() {
								'step 0';
								targets[1].line(targets[0], 'white');
								targets[0].line(targets[1], 'white');
								targets[0].chooseToCompare(targets[1]);
								('step 1');
								if (!result.tie) {
									if (result.bool) {
										targets[1].damage(targets[0]);
										targets[1].useCard({ name: 'juedou' }, targets[0]);
									} else {
										targets[0].damage(targets[1]);
										targets[1].useCard({ name: 'juedou' }, targets[0]);
									}
								}
							},
							ai: {
								order: 8,
								result: {
									target: -3,
								},
								expose: 0.4,
								threaten: 2,
							},
						},
						ly_junshenbao_diaochan_lihun: {
							subSkill: {
								line: {
									ai: {
										threaten: 1.5,
									},
								},
								draw: {
									trigger: {
										global: 'phaseEnd',
									},
									forced: true,
									popup: false,
									content() {
										player.draw();
									},
								},
							},
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseBegin',
							},
							content() {
								'step 0';
								event.current = player.next;
								('step 1');
								if (event.current.sex == 'male') {
									player.line(event.current, 'white');
									event.goto(4);
								} else {
									event.goto(2);
								}
								('step 2');
								event.current = event.current.next;
								('step 3');
								if (event.current.sex == 'male') {
									player.line(event.current, 'white');
									event.goto(4);
								} else {
									event.goto(2);
								}
								('step 4');
								event.current.chooseCard('交给' + get.translation(player) + '1张手牌或令其摸1张牌').ai = function (card) {
									if (get.attitude(event.current, player) > 0) {
										return -1;
									} else {
										return 3 - get.value(card);
									}
								};
								('step 5');
								if (result.bool == false) {
									event.current.addTempSkill('ly_junshenbao_diaochan_lihun_draw');
									event.current.addTempSkill('ly_junshenbao_diaochan_lihun_line');
									game.log(get.translation(event.current) + '让' + get.translation(player) + '摸了1张牌');
									player.draw();
								} else {
									event.current.addTempSkill('ly_junshenbao_diaochan_lihun_draw');
									event.current.addTempSkill('ly_junshenbao_diaochan_lihun_line');
									player.gain(result.cards[0]);
									event.current.$give(1, player);
								}
								('step 6');
								if (event.current.next == player) {
									event.finish();
								} else {
									event.current = event.current.next;
								}
								('step 7');
								if (event.current.sex == 'male') {
									var target = game.findPlayer(function (current) {
										return current.hasSkill('ly_junshenbao_diaochan_lihun_line');
									});
									target.line(event.current, 'white');
									target.removeSkill('ly_junshenbao_diaochan_lihun_line');
									event.goto(4);
								} else {
									event.goto(8);
								}
								('step 8');
								if (event.current.next == player) {
									event.finish();
								} else {
									event.current = event.current.next;
									event.goto(7);
								}
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_diaochan_biyue: {
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							nobracket: true,
							content() {
								'step 0';
								if (player.isMinHandcard()) {
									player.draw(2);
								} else {
									player.draw();
								}
								('step 1');
								if (player.isMinHp()) {
									player.recover(2);
								} else {
									player.recover();
								}
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_sunjian_yinghun: {
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							trigger: {
								player: 'changeHp',
							},
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								var num1 = player.hp;
								var num2 = player.maxHp - player.hp;
								event.num1 = num1;
								event.num2 = num2;
								var str = '令目标摸' + get.cnNumber(num1) + '张牌';
								if (num2) {
									str += ',弃置' + get.cnNumber(num2) + '张牌';
								}
								player
									.chooseTarget(get.prompt('ly_junshenbao_sunjian_yinghun'), function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										var num = game.countPlayer(function (current) {
											return player.getFriends().includes(current);
										});
										if (player.hp >= player.maxHp - player.hp) {
											if (get.attitude(player, target) > 0) {
												if (!target.hasJudge('lebu') && target == player && target.countCards('h') < 3) {
													return 12;
												}
												if (target.hasJudge('lebu') && num > 1) {
													return -1;
												}
												if ((target.countCards('h') < 4) & !target.hasJudge('lebu')) {
													return target.hp + 4;
												}
											}
											return get.attitude(player, target);
										} else {
											if (get.attitude(player, target) < 0) {
												if (target.hasSkillTag('doubleDraw')) {
													if ((player.hp = player.maxHp - player.hp - 1)) {
														return -3;
													}
													return 0.5;
												} else {
													if (!target.hasSkillTag('equipDraw') && target.countCards('he') > 2) {
														return 3;
													}
													if (target.hasSkillTag('equipDraw') && target.countCards('e') < 1) {
														return 1;
													}
													if (target.hasSkillTag('equipDraw') && target.countCards('e') > 0) {
														return -3;
													}
												}
											}
											return -get.attitude(player, target);
										}
									})
									.set('prompt2', str);
								('step 1');
								if (result.bool) {
									player.line(result.targets[0], 'green');
									event.target = result.targets[0];
									result.targets[0].draw(player.hp);
									if (player.hp - player.maxHp < 1) event.finish();
									result.targets[0].chooseToDiscard(player.maxHp - player.hp, true, 'he');
								}
							},
							ai: {
								moreDraw: true,
								maixie: true,
								effect: {
									target(card, player, target) {
										if (target.maxHp <= 3) return;
										if (get.tag(card, 'damage')) {
											if (target.hp == target.maxHp) return [0, 1];
										}
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 1];
									},
								},
							},
						},
						ly_junshenbao_liru_juece: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'phaseDiscardEnd',
							},
							forced: true,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.isMinHp() || current.countCards('h') <= player.countCards('h') || current.countCards('e') <= player.countCards('e');
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('ly_junshenbao_liru_juece'), function (card, player, target) {
										return target.isMinHp() || target.countCards('h') <= player.countCards('h') || target.countCards('e') <= player.countCards('e');
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool) {
									player.line(result.targets[0], 'white');
									result.targets[0].damage();
								}
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_liru_mieji: {
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							enable: 'phaseUse',
							usable: 1,
							line: 'white',
							filter(event, player) {
								return player.countCards('he', { color: 'black' });
							},
							filterCard(card) {
								return get.color(card) == 'black';
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('he') > 0;
							},
							position: 'he',
							discard: false,
							delay: false,
							check(card) {
								return 8 - get.value(card);
							},
							content() {
								'step 0';
								player.$throw(cards);
								('step 1');
								ui.cardPile.insertBefore(cards[0], ui.cardPile.firstChild);
								var n1 = target.getCards('he', function (card) {
									if (!lib.filter.cardDiscardable(card, player)) return false;
									return get.type(card, 'trick') == 'trick';
								});
								var n2 = target.getCards('he', function (card) {
									if (!lib.filter.cardDiscardable(card, player)) return false;
									return get.type(card, 'trick') != 'trick';
								});
								if (n1.length > 1 || n2.length > 2 || (n1.length == 1 && n2.length == 2)) {
									target
										.chooseToDiscard('弃置1张锦囊牌,或2张非锦囊牌', true, 'he', function (card, player) {
											if (!lib.filter.cardDiscardable(card, player)) return false;
											if (!_status.event.nontrick) {
												return get.type(card, 'trick') == 'trick';
											}
											if (ui.selected.cards.length) {
												return get.type(card, 'trick') != 'trick';
											}
											return true;
										})
										.set('ai', function (card) {
											if (get.type(card, 'trick') == 'trick') {
												return 8 - get.value(card);
											}
											return -get.value(card);
										})
										.set('selectCard', function () {
											if (ui.selected.cards.length == 1 && get.type(ui.selected.cards[0], 'trick') == 'trick') {
												return 1;
											}
											return 2;
										})
										.set('nontrick', n2.length >= 2)
										.set('complexCard', true);
								} else {
									if (n1.length) {
										target.discard(n1);
									} else if (n2.length) {
										target.discard(n2);
									}
								}
							},
							ai: {
								order: 9,
								result: {
									target: -1,
								},
							},
						},
						ly_junshenbao_liru_fencheng: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								event.current = player.next;
								player.line(event.current, 'white');
								('step 1');
								event.current.chooseControl('弃牌', '受伤').ai = function () {
									if (event.current.hasSkillTag('nofire')) return '受伤';
									if (event.current.countCards('h', { type: 'basic' }) > 0) return '弃牌';
									if (event.current.hp < 4) return '弃牌';
									if (event.current.hp > 4) return '受伤';
									return '弃牌';
								};
								('step 2');
								if (result.control == '弃牌') {
									if (event.current.countCards('h', { type: 'basic' }) > 0) {
										event.current.chooseToDiscard('he', true, function (card) {
											return get.type(card) == 'basic';
										});
									} else {
										var damage = [0, 1, 2];
										event.current.damage(damage.randomGet(), 'fire');
									}
								} else {
									var damage = [0, 1, 2];
									event.current.damage(damage.randomGet(), 'fire');
								}
								('step 3');
								if (event.current.next != player) {
									event.current.line(event.current.next, 'white');
									event.current = event.current.next;
									event.goto(1);
								}
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										return game.countPlayer(function (current) {
											if (current != player) {
												return get.sgn(get.damageEffect(current, player, player, 'fire'));
											}
										});
									},
								},
							},
						},
						ly_junshenbao_simayi_fankui: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'damageEnd',
								source: 'damageEnd',
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0 || get.attitude(player, event.player) <= 0;
							},
							filter(event, player) {
								if (event.source && event.source == player && event.player.isAlive()) return event.player.countCards('he') > 0;
								if (event.source && event.player == player) return event.source && event.source.countCards('he') > 0;
								return false;
							},
							content() {
								'step 0';
								event.num = Math.min(trigger.num, 9);
								if (trigger.source == player) {
									event.goto(3);
								} else {
									event.goto(1);
								}
								('step 1');
								player.line(trigger.source, 'thunder');
								var card = trigger.source.getCards('he').randomGet();
								if (card) {
									player.gain(card, trigger.source);
									if (get.position(card) == 'h') {
										trigger.source.$giveAuto(card, player);
									} else {
										trigger.source.$give(card, player);
									}
									if (card.suit == 'spade') trigger.source.link();
									if (card.suit == 'club' && trigger.source.countCards('he') > 0) player.discardPlayerCard(1, 'he', trigger.source, true);
									if (card.suit == 'heart') player.recover();
									if (card.suit == 'diamond') player.draw();
								}
								('step 2');
								event.finish();
								('step 3');
								player.line(trigger.player, 'thunder');
								var card = trigger.player.getCards('he').randomGet();
								if (card) {
									player.gain(card, trigger.player);
									if (get.position(card) == 'h') {
										trigger.player.$giveAuto(card, player);
									} else {
										trigger.player.$give(card, player);
									}
									if (card.suit == 'spade') trigger.player.link(true);
									if (card.suit == 'club' && trigger.player.countCards('he') > 0) player.discardPlayerCard(1, 'he', trigger.player, true);
									if (card.suit == 'heart') player.recover();
									if (card.suit == 'diamond') player.draw();
								} //QQQ
								('step 4');
								event.num--;
								if (event.num > 0) {
									event.goto(3);
								} else {
									event.finish();
								}
							},
							ai: {
								threaten: 2,
								expose: 0.3,
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
						ly_junshenbao_simayi_guicai: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								global: 'judge',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player
									.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('ly_junshenbao_simayi_guicai'), 'he')
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
								('step 1');
								if (result.bool) {
									player.respond(result.cards, 'highlight');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.draw();
									if (trigger.player.judging[0].clone) {
										trigger.player.judging[0].clone.classList.remove('thrownhighlight');
										game.broadcast(function (card) {
											if (card.clone) {
												card.clone.classList.remove('thrownhighlight');
											}
										}, trigger.player.judging[0]);
										game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
									}
									trigger.player.judging[0].discard();
									trigger.player.judging[0] = result.cards[0];
									if (!get.owner(result.cards[0], 'judge')) {
										trigger.position.appendChild(result.cards[0]);
									}
									game.log(trigger.player, '的判定牌改为', result.cards[0]);
								}
							},
							ai: {
								moreDraw: true,
								tag: {
									rejudge: 1,
								},
							},
						},
						ly_junshenbao_liufeng_xiansi: {
							audio: 'ext:军神包/audio:1',
							nobracket: true,
							group: ['ly_junshenbao_liufeng_xiansi_draw', 'ly_junshenbao_liufeng_xiansi_use', 'ly_junshenbao_liufeng_xiansi_damage'],
							trigger: {
								player: 'phaseBegin',
							},
							forced: true,
							mod: {
								globalFrom(from, to, distance) {
									return distance - from.storage.ly_junshenbao_liufeng_xiansi.length;
								},
							},
							marktext: '摧',
							init(player) {
								player.storage.ly_junshenbao_liufeng_xiansi = [];
							},
							content() {
								'step 0';
								player.chooseTarget(
									get.prompt('ly_junshenbao_liufeng_xiansi'),
									[1, 3],
									function (card, player, target) {
										return target.countCards('he') > 0;
									},
									function (target) {
										return -get.attitude(_status.event.player, target);
									}
								);
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
									player.line(event.targets, 'fire');
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets.length) {
									var target = event.targets.shift();
									event.current = target;
									player.choosePlayerCard(target, true);
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool) {
									player.storage.ly_junshenbao_liufeng_xiansi = player.storage.ly_junshenbao_liufeng_xiansi.concat(result.links);
									player.markSkill('ly_junshenbao_liufeng_xiansi');
									event.current.lose(result.links, ui.special);
									event.current.$give(result.links, player);
									event.goto(2);
								}
							},
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										for (var i = 0; i < storage.length; i++) {
											storage[i].discard();
										}
										player.$throw(storage);
										player.storage.ly_junshenbao_liufeng_xiansi.length = 0;
									}
								},
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_liufeng_xiansi_draw: {
							audio: 'ext:军神包/audio:1',
							trigger: {
								player: 'phaseDrawBegin',
							},
							prompt(event, player) {
								var num = player.storage.ly_junshenbao_liufeng_xiansi.length;
								return '是否改为摸' + get.cnNumber(Math.min(5, num)) + '张牌';
							},
							check(event, player) {
								return player.storage.ly_junshenbao_liufeng_xiansi.length > 1;
							},
							filter(event, player) {
								return player.storage.ly_junshenbao_liufeng_xiansi.length;
							},
							content() {
								trigger.num = Math.min(5, player.storage.ly_junshenbao_liufeng_xiansi.length);
							},
							ai: {
								moreDraw: true,
							},
						},
						ly_junshenbao_liufeng_xiansi_use: {
							nobracket: true,
							audio: 'ext:军神包/audio:1',
							forced: true,
							trigger: {
								global: 'phaseBegin',
							},
							filter(event, player) {
								return get.distance(event.player, player, 'attack') <= 1 && event.player != player && player.storage.ly_junshenbao_liufeng_xiansi.length > 4;
							},
							content() {
								'step 0';
								trigger.player
									.chooseControl(function () {
										if (get.attitude(trigger.player, player) > 0) return '选项二';
										return '选项一';
									})
									.set('prompt', '陷嗣')
									.set('choiceList', ['视为对' + get.translation(player) + '使用1张杀', '取消']);
								('step 1');
								if (result.control == '选项一') {
									trigger.player.useCard({ name: 'sha' }, player, false);
								} else {
									event.finish();
								}
								('step 2');
							},
							ai: {
								expose: 0.3,
							},
						},
						ly_junshenbao_liufeng_xiansi_damage: {
							audio: 'ext:军神包/audio:1',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								return event.num > 0 && player.storage.ly_junshenbao_liufeng_xiansi.length;
							},
							content() {
								'step 0';
								if (player.storage.ly_junshenbao_liufeng_xiansi.length < 2) {
									event.num = 1;
								} else {
									event.num = 2;
								}
								('step 1');
								player.chooseCardButton('移去1张"摧"', true, player.storage.ly_junshenbao_liufeng_xiansi);
								('step 2');
								var card = result.links[0];
								player.storage.ly_junshenbao_liufeng_xiansi.remove(card);
								card.discard();
								player.$throw(card);
								game.log(player, '将', card, '置入弃牌堆');
								if (player.storage.ly_junshenbao_liufeng_xiansi.length == 0) {
									player.unmarkSkill('ly_junshenbao_liufeng_xiansi');
								}
								event.num--;
								if (event.num > 0) {
									event.goto(1);
								} else {
									event.finish();
								}
							},
						},
						ly_junshenbao_jiaxu_luanwu: {
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								event.current = player.next;
								player.line(event.current, 'white');
								('step 1');
								event.current.chooseToUse({ name: 'sha' }, function (card, player, target) {
									if (player == target) return false;
									if (get.distance(player, target) <= 1) return true;
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i] == player) continue;
										if (get.distance(player, players[i]) < get.distance(player, target)) return false;
									}
									return true;
								});
								('step 2');
								if (result.bool == false) event.current.damage();
								if (event.current.next != player) {
									event.current.line(event.current.next, 'white');
									event.current = event.current.next;
									event.goto(1);
								}
							},
							ai: {
								threaten: 2,
								order: 1,
								result: {
									player(player) {
										return game.countPlayer(function (current) {
											if (current != player) {
												return get.sgn(get.damageEffect(current, player, player));
											}
										});
									},
								},
							},
						},
						ly_junshenbao_jiaxu_wansha: {
							audio: 'ext:军神包/audio:2',
							nobracket: true,
							trigger: {
								source: 'dying',
							},
							priority: 15,
							forced: true,
							filter(event, player) {
								return player.getEnemies().includes(event.player);
							},
							content() {
								'step 0';
								var card = trigger.player.getCards('hej');
								trigger.player.lose(card, ui.special);
								('step 1');
								if (_status.currentPhase == player) {
									trigger.player.die();
									player.draw(3);
								}
							},
							ai: {
								threaten: 2,
							},
						},
						ly_junshenbao_jiaxu_weimu: {
							nobracket: true,
							forced: true,
							audio: 'ext:军神包/audio:2',
							trigger: {
								target: 'useCardToBefore',
							},
							filter(event, player) {
								var card = event.card;
								return (get.type(card) == 'basic' || get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'black';
							},
							content() {
								trigger.cancel();
								game.log(trigger.player, '<span style="color: red">对</span>', player, '<span style="color: red">使用牌无效</span>');
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if ((get.type(card) == 'basic' || get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'black') return 'zeroplayertarget';
									},
								},
							},
						},
						ly_junshenbao_miheng_kuangcai: {
							subSkill: {
								use: {
									mod: {
										cardUsable(card) {
											if (get.info(card) && get.info(card).forceUsable) return;
											return Infinity;
										},
										targetInRange() {
											return true;
										},
										maxHandcard(player, num) {
											return num - player.hp + player.storage.ly_junshenbao_miheng_kuangcai;
										},
									},
									trigger: {
										player: 'useCard',
									},
									popup: false,
									forced: true,
									filter(event, player) {
										return player.storage.ly_junshenbao_miheng_kuangcai > 0;
									},
									content() {
										player.draw();
										player.storage.ly_junshenbao_miheng_kuangcai -= 1;
										player.markSkill('ly_junshenbao_miheng_kuangcai');
									},
								},
								clear: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									silent: true,
									popup: false,
									content() {
										'step 0';
										var num = player.storage.ly_junshenbao_miheng_kuangcai;
										player.storage.ly_junshenbao_miheng_kuangcai -= num;
										player.markSkill('ly_junshenbao_miheng_kuangcai');
										('step 1');
										player.removeSkill('ly_junshenbao_miheng_kuangcai_use');
										player.removeSkill('ly_junshenbao_miheng_kuangcai_clear');
										player.removeSkill('ly_junshenbao_miheng_kuangcai_user');
									},
								},
							},
							audio: 'ext:军神包/audio:1',
							marktext: '狂',
							mark: true,
							init(player) {
								player.storage.ly_junshenbao_miheng_kuangcai = 0;
								player.markSkill('ly_junshenbao_miheng_kuangcai');
							},
							trigger: {
								player: 'phaseBegin',
							},
							nobracket: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								var num1 = game.countPlayer();
								var num2 = game.countPlayer(function (current) {
									return current.hp > player.hp;
								});
								var num = num1 + num2;
								player.storage.ly_junshenbao_miheng_kuangcai += num;
								player.markSkill('ly_junshenbao_miheng_kuangcai');
								('step 1');
								player.addSkill('ly_junshenbao_miheng_kuangcai_use');
								player.addSkill('ly_junshenbao_miheng_kuangcai_clear');
								player.addSkill('ly_junshenbao_miheng_kuangcai_user');
							},
							intro: {
								content: 'mark',
							},
							ai: {
								moreDraw: true,
								threaten: 2,
								maixie: true,
								maixie_hp: true,
							},
						},
						ly_junshenbao_miheng_kuangcai_user: {
							audio: 'ext:军神包/audio:2',
							trigger: {
								player: 'useCard',
							},
							priority: 100,
							forced: true,
							filter(event, player) {
								return player.storage.ly_junshenbao_miheng_kuangcai > 0;
							},
							content() { },
						},
						ly_junshenbao_miheng_shejian: {
							trigger: {
								player: 'phaseDiscardEnd',
							},
							forced: true,
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							priority: -100,
							filter(event, player) {
								return event.cards && event.cards.length;
							},
							content() {
								'step 0';
								var num = trigger.cards.length;
								player.chooseTarget('舌剑:是否选择至多' + num + '名其他角色弃置其区域内1张牌？', [1, num], function (card, player, target) {
									return target.countCards('hej') > 0 && target != player;
								}).ai = function (target) {
									if (get.attitude(player, target) > 0 && target.countCards('j') > 0) {
										return 15;
									}
									return -get.attitude(player, target);
								};
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (targets && targets.length) {
									player.line(targets, 'white');
									for (var i = 0; i < targets.length; i++) {
										player.discardPlayerCard('hej', targets[i], true);
									}
								}
							},
							ai: {
								expose: 0.2,
							},
						},
						ly_junshenbao_guohuai_jingce: {
							ai: {
								moreDraw: true,
							},
							trigger: {
								player: 'phaseEnd',
							},
							nobracket: true,
							audio: 'ext:军神包/audio:2',
							filter(event, player) {
								return player.countUsed() > 0;
							},
							content() {
								player.draw(Math.min(5, player.countUsed()));
							},
							init(player) {
								player.storage.ly_guohuai_jingce = true;
							},
							intro: {
								content(storage, player) {
									if (_status.currentPhase == player) return '已使用' + player.countUsed() + '张牌';
								},
							},
						},

						land: {
							mark: true,
							marktext: '陆',
							intro: {
								content: '当前环境为<span style="color: yellow">陆地</span>',
							},
						},
						sea: {
							mark: true,
							marktext: '海',
							intro: {
								content: '当前环境为<span style="color: yellow">海洋</span>',
							},
						},
						sky: {
							mark: true,
							marktext: '天',
							intro: {
								content: '当前环境为<span style="color: yellow">天空</span>',
							},
						},
					},
					translate: {
						land: '陆地',
						land_info: '',
						sea: '海洋',
						sea_info: '',
						sky: '天空',
						sky_info: '',
						ly_junshenbao_nineDragonSon_qiuniu: '囚牛',
						ly_junshenbao_nineDragonSon_yazi: '睚眦',
						ly_junshenbao_nineDragonSon_chaofeng: '嘲风',
						ly_junshenbao_nineDragonSon_suanni: '狻猊',
						ly_junshenbao_nineDragonSon_baxia: '霸下',
						ly_junshenbao_nineDragonSon_bian: '狴犴',
						ly_junshenbao_nineDragonSon_fuxi: '负屃',
						ly_junshenbao_nineDragonSon_chiwen: '螭吻',
						ly_junshenbao_nineDragonSon_pulao: '蒲牢',
						////////武将分割线////////
						ly_junshenbao_nineDragonSon_longyi: '龙裔',
						ly_junshenbao_nineDragonSon_longyi_info: '<span style="color: red">锁定技</span>,<span style="color: gold">摸牌阶段</span>你额外摸2张牌;你的<span style="color: red">判定牌</span>始终进行<span style="color: gold">判定补正</span>.',
						ly_junshenbao_nineDragonSon_qiuniu_yuyin: '余音',
						ly_junshenbao_nineDragonSon_qiuniu_yuyin_info: '你<span style="color: red">受到伤害</span>后,可令1名<span style="color: red">其他角色</span>将武将牌<span style="color: gold">翻至背面</span>.',
						ly_junshenbao_nineDragonSon_qiuniu_raoliang: '绕梁',
						ly_junshenbao_nineDragonSon_qiuniu_raoliang_info: '<span style="color: gold">每轮游戏</span>限1次,1名角色将武将牌翻至<span style="color: gold">背面</span>后,你可以令1名除此角色外的<span style="color: red">其他角色</span>翻面.',
						ly_junshenbao_nineDragonSon_yazi_bibao: '必报',
						ly_junshenbao_nineDragonSon_yazi_bibao_info: '你每<span style="color: red">受到</span>1点伤害,可视为对<span style="color: red">伤害来源</span>使用1张无视防具的杀;若此杀<span style="color: gold">造成</span>了伤害,你摸1张牌并增加1点体力上限.',
						ly_junshenbao_nineDragonSon_chaofeng_xianwang: '险望',
						ly_junshenbao_nineDragonSon_chaofeng_xianwang_info: '<span style="color: gold">回合开始时</span>,你可以令<span style="color: gold">攻击距离</span>内任意名<span style="color: red">其他角色</span>依次弃置1张牌.',
						ly_junshenbao_nineDragonSon_pulao_mingxiao: '鸣霄',
						ly_junshenbao_nineDragonSon_pulao_mingxiao_info: '<span style="color: red">锁定技</span>,<span style="color: red">其他角色</span>于其<span style="color: gold">出牌阶段</span>外失去牌后,若你手牌数小于X(X为场上存活角色数),你摸1张牌.',
						ly_junshenbao_nineDragonSon_suanni_zuofeng: '坐奉',
						ly_junshenbao_nineDragonSon_suanni_zuofeng_info: '你<span style="color: gold">回复体力</span>后,可令至多3名<span style="color: red">其他角色</span>依次回复1点体力(<span style="color: red">不触发技能</span>).',
						ly_junshenbao_nineDragonSon_baxia_difu: '地缚',
						ly_junshenbao_nineDragonSon_baxia_difu_info: '<span style="color: gold">回合开始时</span>,你可以令<span style="color: gold">攻击距离</span>内任意名<span style="color: red">其他角色</span>非锁定技失效直到其出牌阶段开始.',
						ly_junshenbao_nineDragonSon_bian_weisong: '威颂',
						ly_junshenbao_nineDragonSon_bian_weisong_info: '<span style="color: red">其他角色</span><span style="color: gold">回合开始时</span>,你可以令其进行判定,若为♠️️,其跳过本回合<span style="color: red">出牌阶段</span>,否则其本回合<span style="color: gold">摸牌阶段</span>摸牌量<span style="color: red">-1</span>.',
						ly_junshenbao_nineDragonSon_bian_zhangyi: '仗义',
						ly_junshenbao_nineDragonSon_bian_zhangyi_info: '<span style="color: gold">回合开始时</span>,你可以弃置任意名角色判定区内1张牌.',
						ly_junshenbao_nineDragonSon_fuxi_mingbei: '铭碑',
						ly_junshenbao_nineDragonSon_fuxi_mingbei_info: '<span style="color: red">锁定技</span>,场上角色<span style="color: red">阵亡</span>后,你随机获得场上1名<span style="color: gold">存活角色</span><span style="color: red">所有技能</span>.',
						ly_junshenbao_nineDragonSon_chiwen_tunshi: '吞噬',
						ly_junshenbao_nineDragonSon_chiwen_tunshi_info: '<span style="color: red">锁定技</span>,场上<span style="color: red">其他角色</span>阵亡时,你获得其<span style="color: red">所有技能</span>.',
						ly_junshenbao_zhenSanGuo_huangyueying: '真·黄月英',
						ly_junshenbao_zhenSanGuo_guojia: '真·郭嘉',
						ly_junshenbao_zhenSanGuo_xiaoqiao: '真·小乔',
						ly_junshenbao_zhenSanGuo_huatuo: '真·华佗',
						ly_junshenbao_zhenSanGuo_zhaoyun: '真·赵云',
						ly_junshenbao_zhenSanGuo_lejin: '真·乐进',
						ly_junshenbao_zhenSanGuo_lvbu: '真·吕布',
						ly_junshenbao_zhenSanGuo_ganning: '真·甘宁',
						ly_junshenbao_zhenSanGuo_simabada: '真·司马八达',
						ly_junshenbao_zhenSanGuo_dongzhuo: '真·董卓',
						ly_junshenbao_zhenSanGuo_huangwudie: '真·黄舞蝶',
						ly_junshenbao_zhenSanGuo_sunshangxiang: '真·孙尚香',
						ly_junshenbao_zhenSanGuo_xuchu: '真·许褚',
						ly_junshenbao_zhenSanGuo_zhangliao: '真·张辽',
						ly_junshenbao_zhenSanGuo_daqiao: '真·大乔',
						ly_junshenbao_zhenSanGuo_baosanniang: '真·鲍三娘',
						ly_junshenbao_zhenSanGuo_zhangji: '真·张仲景',
						ly_junshenbao_zhenSanGuo_machao: '真·马超',
						ly_junshenbao_zhenSanGuo_shengsi: '生死两仙',
						ly_junshenbao_zhenSanGuo_huangyuehua: '真·黄月华',
						ly_junshenbao_zhenSanGuo_zhangshiping: '真·张世平',
						///////////分割线////////////
						ly_junshenbao_zhenSanGuo_huangyueying_lingxin: '灵心',
						ly_junshenbao_zhenSanGuo_huangyueying_lingxin_info: '你每使用1张<span style="color: red">非转化</span>的<span style="color: gold">非延时</span>锦囊牌/<span style="color: red">延时</span>锦囊牌,你可以<span style="color: gold">摸1张牌</span>/<span style="color: red">弃置</span>1名角色<span style="color: gold">区域内</span>1张牌.',
						ly_junshenbao_zhenSanGuo_huangyueying_jiqiao: '机巧',
						ly_junshenbao_zhenSanGuo_huangyueying_jiqiao_info: '<li>你使用<span style="color: gold">非延时锦囊</span>仅指定1名目标时,你可以为此牌指定至多2名不为此牌目标的<span style="color: red">其他角色</span>成为<span style="color: red">额外目标</span>.<li><span style="color: red">锁定技</span>,你使用锦囊牌无<span style="color: red">距离限制</span>.',
						ly_junshenbao_zhenSanGuo_huangyueying_muniu: '木牛',
						ly_junshenbao_zhenSanGuo_huangyueying_muniu_info: '你可以将你于<span style="color: gold">回合内</span>弃置的牌交给任意名其他角色.',
						ly_junshenbao_zhenSanGuo_guojia_shisheng: '十胜',
						ly_junshenbao_zhenSanGuo_guojia_shisheng_info: '<li><span style="color: gold">回合开始时</span>,你可以展示牌堆顶X张牌,选择其中1种<span style="color: red">类别</span>的牌置于武将牌上,称为"胜",弃置其余的牌.<li><span style="color: gold">出牌阶段</span>,你可以使用"胜";<span style="color: red">锁定技</span>,<span style="color: gold">回合结束时</span>,你须弃置所有"胜".<li>X初始值为10,且你每造成1次伤害,X便<span style="color: red">-1</span>,当X为0时,你失去此技能并获得技能"慧觑".',
						ly_junshenbao_zhenSanGuo_guojia_shisheng_use: '十胜',
						ly_junshenbao_zhenSanGuo_guojia_shisheng_use_info: '',
						ly_junshenbao_zhenSanGuo_guojia_huiqu: '慧觑',
						ly_junshenbao_zhenSanGuo_guojia_huiqu_info: '<li>你可以获得你的判定牌.<li><span style="color: red">锁定技</span>,<span style="color: gold">回合开始时</span>,你须进行1次判定,若为♠️️,你受到1点无来源的伤害.',
						ly_junshenbao_zhenSanGuo_guojia_shibai: '十败',
						ly_junshenbao_zhenSanGuo_guojia_shibai_info: '<span style="color: gold">回合结束时</span>,你可以令1名角色展示牌堆顶X张牌并选择其中1种<span style="color: red">花色</span>的牌获得之,<span style="color: gold">若如此做</span>,其每以此法获得1张牌,X便<span style="color: red">-1</span>,当X为0时,你失去此技能并获得技能"遗策".',
						ly_junshenbao_zhenSanGuo_guojia_yice: '遗策',
						ly_junshenbao_zhenSanGuo_guojia_yice_info: '你每<span style="color: red">受到</span>1点伤害,可观看牌堆顶3张牌,并可以将其任意分配.',
						ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan: '藏扇',
						ly_junshenbao_zhenSanGuo_xiaoqiao_cangshan_info: '<li><span style="color: red">锁定技</span>,<span style="color: gold">游戏开始时</span>/你<span style="color: gold">进入游戏时</span>,额外发给你3张牌,你将3张手牌置于武将牌上,称为"扇".<li>你可以弃置1张"扇",视为使用1张桃;,你<span style="color: gold">回复体力</span>后,你可以将1张♠️️/<span style="color: red">♥️️</span>牌作为"扇"置于武将牌上.',
						ly_junshenbao_zhenSanGuo_xiaoqiao_qunwu: '裙舞',
						ly_junshenbao_zhenSanGuo_xiaoqiao_qunwu_info: '当1张锦囊牌指定了至少2名目标时,你可以<span style="color: gold">弃置</span>任意张牌,令此牌对等量的目标无效.',
						ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang: '粉裳',
						ly_junshenbao_zhenSanGuo_xiaoqiao_fenshang_info: '每当你<span style="color: red">受到</span>1点伤害,你可以令1名角色下回合<span style="color: gold">摸牌阶段</span>摸牌数<span style="color: gold">+2</span>.',
						ly_junshenbao_zhenSanGuo_huatuo_miaoshou: '妙手',
						ly_junshenbao_zhenSanGuo_huatuo_miaoshou_info: '每当1名角色<span style="color: gold">回复体力</span>时,你可以<span style="color: red">弃置</span>任意张<span style="color: red">♡</span>牌,<span style="color: gold">若如此做</span>其额外回复等量的体力,且你与其各摸X张牌(X为此次回复量).',
						ly_junshenbao_zhenSanGuo_huatuo_zhenmai: '诊脉',
						ly_junshenbao_zhenSanGuo_huatuo_zhenmai_info: '<span style="color: gold">出牌阶段</span>限1次,你可以展示并<span style="color: red">弃置</span>1名角色的1张手牌,若此牌花色为♤/<span style="color: red">♡</span>/♧/<span style="color: red">♢</span>,其<span style="color: red">失去1点体力</span>/<span style="color: gold">回复1点体力</span>/<span style="color: red">弃置2张牌</span>/<span style="color: gold">摸2张牌</span>.',
						ly_junshenbao_zhenSanGuo_huatuo_huichun: '回春',
						ly_junshenbao_zhenSanGuo_huatuo_huichun_info: '1名角色进入<span style="color: red">濒死状态</span>时,你可以进行判定,若为<span style="color: red">♡</span>,其将体力值回复至1点,否则其摸1张牌.',
						ly_junshenbao_zhenSanGuo_zhaoyun_wushen: '武神',
						ly_junshenbao_zhenSanGuo_zhaoyun_wushen_info: '<span style="color: red">锁定技</span>,<span style="color: gold">游戏开始时</span>,你将<span style="color: red">"银月枪"</span>置入装备区.',
						ly_junshenbao_zhenSanGuo_zhaoyun_longdan: '龙魂',
						ly_junshenbao_zhenSanGuo_zhaoyun_longdan_info: '<li>你可以将<span style="color: red">杀</span>/<span style="color: gold">闪</span>当<span style="color: red">闪</span>/<span style="color: gold">杀</span>使用或打出.<li>你以此法使用的杀<span style="color: red">造成伤害</span>时,你可以<span style="color: gold">观看并获得</span>目标1张牌;你以此法<span style="color: gold">打出</span>1张闪时,你可以摸1张牌.',
						ly_junshenbao_zhenSanGuo_zhaoyun_danji: '单骑',
						ly_junshenbao_zhenSanGuo_zhaoyun_danji_info: '<span style="color: blue">觉醒技</span>,<span style="color: gold">回合开始时</span>,若你为仅存的<span style="color: gold">友方角色</span>/你的体力值<span style="color: red">不大于</span>1,你摸2张牌并回复1点体力,重置此技能.',
						ly_junshenbao_zhenSanGuo_zhaoyun_danji_sha: '单骑',
						ly_junshenbao_zhenSanGuo_zhaoyun_danji_sha_info: '<span style="color: red">锁定技</span>,你<span style="color: gold">使用</span>杀指定目标后,其须使用2张闪<span style="color: red">响应</span>此杀.',
						ly_junshenbao_zhenSanGuo_lejin_ziyi: '自益',
						ly_junshenbao_zhenSanGuo_lejin_ziyi_info: '<span style="color: red">锁定技</span>,你的<span style="color: gold">手牌上限</span>始终<span style="color: red">+2</span>.',
						ly_junshenbao_zhenSanGuo_lejin_cuijian: '摧坚',
						ly_junshenbao_zhenSanGuo_lejin_cuijian_info: '<span style="color: red">锁定技</span>,你<span style="color: gold">使用</span>卡牌<span style="color: red">造成伤害</span>时,若目标装备区内有防具,则此伤害<span style="color: red">+1</span>.',
						ly_junshenbao_zhenSanGuo_lejin_xiaoyong: '骁勇',
						ly_junshenbao_zhenSanGuo_lejin_xiaoyong_info: '<span style="color: gold">回合开始时</span>,若你体力值与手牌数均为<span style="color: red">单数</span>/<span style="color: gold">双数</span>,你可以摸2张牌/X张牌(X为你<span style="color: red">已损失</span>的体力值且至少为<span style="color: red">1</span>).',
						ly_junshenbao_zhenSanGuo_lvbu_feijiang: '飞将',
						ly_junshenbao_zhenSanGuo_lvbu_feijiang_info: '<span style="color: red">锁定技</span>,<span style="color: gold">游戏开始时</span>,你将<span style="color: red">"方天画戟"</span>与<span style="color: red">"赤兔"</span>置入装备区.',
						ly_junshenbao_zhenSanGuo_lvbu_sheji: '射戟',
						ly_junshenbao_zhenSanGuo_lvbu_sheji_info: '<li><span style="color: red">锁定技</span>,你<span style="color: gold">使用</span>杀指定目标后,若你在其<span style="color: red">攻击距离</span>内且其在你<span style="color: red">攻击距离</span>内,则此杀<span style="color: red">不可响应</span>.<li><span style="color: red">锁定技</span>,你始终<span style="color: red">无视防具</span>.',
						ly_junshenbao_zhenSanGuo_lvbu_juelu: '绝戮',
						ly_junshenbao_zhenSanGuo_lvbu_juelu_info: '<span style="color: red">其他角色</span>对你使用杀时,你可以<span style="color: red">取消之</span>,<span style="color: gold">若如此做</span>,你视为对其使用1张杀;若你以此法使用的杀<span style="color: red">被响应</span>,你受到来自目标的1点伤害,否则你对其造成1点伤害.',
						ly_junshenbao_zhenSanGuo_ganning_jiexi: '劫袭',
						ly_junshenbao_zhenSanGuo_ganning_jiexi_info: '<span style="color: gold">出牌阶段</span>,你可以<span style="color: red">弃置</span>1张黑色手牌并选择1名<span style="color: red">其他角色</span>,<span style="color: red">弃置</span>其<span style="color: gold">区域内</span>1张牌,若以此法弃置的牌为黑色,你摸1张牌.',
						ly_junshenbao_zhenSanGuo_ganning_daoyue: '盗月',
						ly_junshenbao_zhenSanGuo_ganning_daoyue_info: '<span style="color: gold">出牌阶段</span>限1次,你可以<span style="color: red">弃置</span>1张<span style="color: red">♡</span>手牌并选择1名<span style="color: red">其他角色</span>,获得其<span style="color: red">装备区</span>/<span style="color: gold">判定区</span>内1张牌.',
						ly_junshenbao_zhenSanGuo_ganning_youxia: '游侠',
						ly_junshenbao_zhenSanGuo_ganning_youxia_info: '<span style="color: gold">每轮游戏限1次</span>,当1张<span style="color: gold">锦囊牌</span>指定了不止1名角色为目标时,你可以<span style="color: red">取消之</span>并获得此牌.',
						ly_junshenbao_zhenSanGuo_simabada_bada: '八达',
						ly_junshenbao_zhenSanGuo_simabada_bada_info: '<li><span style="color: gold">回合开始</span>时/<span style="color: red">判定阶段</span>开始时/<span style="color: gold">摸牌阶段</span>开始时/<span style="color: red">出牌阶段</span>开始时/<span style="color: gold">弃牌阶段</span>开始时/<span style="color: red">回合结束</span>时,你可以摸1张牌.<li><span style="color: red">锁定技</span>,<span style="color: gold">回合结束</span>时,你<span style="color: red">弃置</span>所有牌并执行额外1个回合<span style="color: red">(此回合不触发此效果)</span>.',
						ly_junshenbao_zhenSanGuo_dongzhuo_jiuchi: '酒池',
						ly_junshenbao_zhenSanGuo_dongzhuo_jiuchi_info: '<span style="color: gold">出牌阶段</span>限1次,你可以<span style="color: red">弃置</span>场上1张牌,<span style="color: gold">若如此做</span>,你视为对自己使用1张<酒>.',
						ly_junshenbao_zhenSanGuo_dongzhuo_lingnu: '凌怒',
						ly_junshenbao_zhenSanGuo_dongzhuo_lingnu_info: '<li><span style="color: red">锁定技</span>,当你造成伤害时,若你处于<酒>状态,则此伤害<span style="color: red">+1</span>.<li><span style="color: red">锁定技</span>,回合内,你造成的伤害始终<span style="color: red">-1</span>;回合外,你造成的伤害始终<span style="color: red">+1</span>.',
						ly_junshenbao_zhenSanGuo_dongzhuo_qiaoji: '骁骑',
						ly_junshenbao_zhenSanGuo_dongzhuo_qiaoji_info: '<span style="color: red">锁定技</span>,你对<span style="color: gold">装备区</span>内有坐骑牌的角色造成的伤害始终<span style="color: gold">+1</span>.',
						ly_junshenbao_zhenSanGuo_dongzhuo_baolue: '暴掠',
						ly_junshenbao_zhenSanGuo_dongzhuo_baolue_info: '<span style="color: yellow">主公技</span>,其他<span style="color: gold">友方角色</span>造成伤害时,其可令你成为此伤害的来源,<span style="color: gold">若如此做</span>,你进行1次判定,若判定结果为♠️️,你回复1点体力,否则你摸1张牌.',
						ly_junshenbao_zhenSanGuo_huangwudie_qianggong: '强弓',
						ly_junshenbao_zhenSanGuo_huangwudie_qianggong_info: '你使用<杀><span style="color: gold">指定目标</span>后,你可以令其攻击距离内的<span style="color: red">其他角色</span>成为此<杀><span style="color: gold">额外目标</span>.',
						ly_junshenbao_zhenSanGuo_huangwudie_shenji: '神骑',
						ly_junshenbao_zhenSanGuo_huangwudie_shenji_info: '<li><span style="color: red">锁定技</span>,每当你使用防御马时,你增加1点体力上限.<li><span style="color: red">锁定技</span>,每当你使用进攻马时,若你<span style="color: red">已受伤</span>,你回复1点体力,否则你摸2张牌.',
						ly_junshenbao_zhenSanGuo_sunshangxiang_yinmeng: '姻盟',
						ly_junshenbao_zhenSanGuo_sunshangxiang_yinmeng_info: '<span style="color: gold">出牌阶段</span>限1次,你可以<span style="color: red">弃置</span>1张牌并选择1名男性角色,令其<span style="color: red">弃置</span>1张牌,若你/其<span style="color: red">已受伤</span>,你/其回复1点体力,否则你/其摸2张牌.',
						ly_junshenbao_zhenSanGuo_sunshangxiang_juelie: '决裂',
						ly_junshenbao_zhenSanGuo_sunshangxiang_juelie_info: '<span style="color: gold">出牌阶段</span>限1次,你可以与1名男性角色各摸1张牌,依次选择失去1点体力或弃置2张牌.',
						ly_junshenbao_zhenSanGuo_sunshangxiang_wuji: '武姬',
						ly_junshenbao_zhenSanGuo_sunshangxiang_wuji_info: '<span style="color: gold">出牌阶段</span>限X次(X为你<span style="color: red">已损失</span>体力值且至少为<span style="color: red">1</span>),你可以将装备区内1张牌当<万箭齐发>使用.<li><span style="color: red">锁定技</span>,每当你<span style="color: red">失去</span>装备区内1张牌后,你摸2张牌.',
						ly_junshenbao_zhenSanGuo_xuchu_kuangquan: '狂拳',
						ly_junshenbao_zhenSanGuo_xuchu_kuangquan_info: '<span style="color: gold">回合开始</span>时,若你装备区内有牌,你可以展示牌堆顶等同于你装备区内牌数的牌获得之,其中每有1张与你装备区内的牌花色相同的牌,则直至你下回合开始,你造成的伤害<span style="color: gold">+1</span>,你弃置装备区内全部牌.',
						ly_junshenbao_zhenSanGuo_xuchu_aozhan: '鏖战',
						ly_junshenbao_zhenSanGuo_xuchu_aozhan_info: '<li>你<span style="color: gold">造成</span>/<span style="color: red">受到</span>伤害后,你可以将场上1张牌置于你的武将牌上,成为<战>.<li><span style="color: gold">出牌阶段</span>开始时,你可以选择获得所有<战>或者<span style="color: red">弃置</span>所有<战>并摸等量的牌.',
						ly_junshenbao_zhenSanGuo_zhangliao_wuwei: '无畏',
						ly_junshenbao_zhenSanGuo_zhangliao_wuwei_info: '<span style="color: gold">摸牌阶段</span>开始时,你可以放弃摸牌,改为展示牌堆顶1张牌,你可以重复此流程直到出现第2张<span style="color: red">基本牌</span>为止,你获得所有展示的牌.',
						ly_junshenbao_zhenSanGuo_zhangliao_tuxi: '突袭',
						ly_junshenbao_zhenSanGuo_zhangliao_tuxi_info: '你获得牌后,若其中有黑色牌,你可视为对至多X名<span style="color: red">其他角色</span>使用1张<杀>(X为你获得牌中黑色牌的数量).',
						ly_junshenbao_zhenSanGuo_daqiao_tongque: '铜雀',
						ly_junshenbao_zhenSanGuo_daqiao_tongque_info: '<span style="color: red">锁定技</span>,你的手牌上限始终+2X(X为场上存活的<span style="color: red">敌方角色</span>数).',
						ly_junshenbao_zhenSanGuo_daqiao_guose: '国色',
						ly_junshenbao_zhenSanGuo_daqiao_guose_info: '<span style="color: gold">出牌阶段</span>限1次,你可以弃置1名<span style="color: red">其他角色</span>1张牌,若以此法弃置的牌花色为◆,你视为对其使用1张<乐不思蜀>.',
						ly_junshenbao_zhenSanGuo_daqiao_liuli: '流离',
						ly_junshenbao_zhenSanGuo_daqiao_liuli_info: '当你成为<span style="color: red">其他角色</span>使用牌的目标时,你可以令1名与你距离为1的<span style="color: red">其他角色</span>成为此牌目标,<span style="color: gold">若如此做</span>,你可以弃置1张牌令此牌对你无效.',
						ly_junshenbao_zhenSanGuo_baosanniang_chengshi: '承师',
						ly_junshenbao_zhenSanGuo_baosanniang_chengshi_info: '<li><span style="color: red">锁定技</span>,出牌阶段,若你使用的<杀><span style="color: red">被响应</span>后,你可以将1张红色手牌<杀>使用或打出直至回合结束.<li><span style="color: red">锁定技</span>,回合外,当你<span style="color: gold">响应</span><杀>后,你可以将1张黑色手牌当<闪>使用或打出直至回合结束.<li><span style="color: red">锁定技</span>,当你的<杀><span style="color: red">被响应</span>后,你摸2张牌.',
						ly_junshenbao_zhenSanGuo_baosanniang_yuman: '御蛮',
						ly_junshenbao_zhenSanGuo_baosanniang_yuman_info: '<span style="color: gold">回合开始</span>时,若你上回合未发动此技能,你可以摸4张牌,<span style="color: red">终止一切结算</span>,当前回合结束.',
						ly_junshenbao_zhenSanGuo_zhangji_yiji: '医疾',
						ly_junshenbao_zhenSanGuo_zhangji_yiji_info: '<li><span style="color: gold">出牌阶段</span>限1次,你可以<span style="color: red">弃置</span>1张手牌,令1名<span style="color: red">已受伤</span>的角色回复1点体力.<li><span style="color: gold">出牌阶段</span>限1次,你可以<span style="color: red">弃置</span>1张手牌,令1名角色增加1点体力上限.',
						ly_junshenbao_zhenSanGuo_zhangji_zabing: '杂病',
						ly_junshenbao_zhenSanGuo_zhangji_zabing_info: '<li><span style="color: red">锁定技</span>,当你<span style="color: red">受到伤害</span>时,若你的体力上限大于此伤害值,你防止之,改为失去等量的体力上限.<li><span style="color: red">锁定技</span>,你回复体力时,增加等量的体力上限并回复等量的体力值.<li><span style="color: red">锁定技</span>,场上角色体力上限发生变化后,你摸1张牌.',
						ly_junshenbao_zhenSanGuo_machao_changqu: '长驱',
						ly_junshenbao_zhenSanGuo_machao_changqu_info: '<span style="color: red">锁定技</span>,<span style="color: gold">游戏开始时</span>,你将<span style="color: red">"衠钢槊"</span>与<span style="color: red">"大宛"</span>置入装备区.',
						ly_junshenbao_zhenSanGuo_machao_jufeng: '风驰',
						ly_junshenbao_zhenSanGuo_machao_jufeng_info: '当有<span style="color: gold">装备牌</span>进入你的装备区时,你可以进行判定,若判定结果为红色,你可以对<span style="color: red">攻击距离</span>内的1名<span style="color: red">其他角色</span>造成1点伤害,否则你摸1张牌.',
						ly_junshenbao_zhenSanGuo_machao_yingyan: '鹰眼',
						ly_junshenbao_zhenSanGuo_machao_yingyan_info: '<span style="color: red">锁定技</span>,场上判定牌生效后,若此牌花色为◆,你获得之.',
						ly_junshenbao_zhenSanGuo_shengsi_xianti: '仙体',
						ly_junshenbao_zhenSanGuo_shengsi_xianti_info: '<li><span style="color: red">锁定技</span>,当你成为<span style="color: red">伤害牌</span>的目标时,若此牌点数<span style="color: red">不大于</span>场上存活角色数,此牌对你无效.<li><span style="color: red">锁定技</span>,当你第X次体力值降至0或更低时,若X<span style="color: red">不小于</span>场上存活角色数(X初始值为1且你每发动此效果时,X便<span style="color: red">+1</span>),你<span style="color: red">立即死亡</span>,否则你将体力值回复至3点并摸2张牌.',
						ly_junshenbao_zhenSanGuo_shengsi_shengsi: '生死',
						ly_junshenbao_zhenSanGuo_shengsi_shengsi_info: '<span style="color: gold">回合开始</span>/<span style="color: red">回合结束</span>时,你可以展示并获得牌堆顶1张牌,若此牌花色为♠️️/♣️️/<span style="color: red">♥️️</span>/<span style="color: red">◆</span>,你<span style="color: gold">摸1张牌并弃置1张牌</span>/<span style="color: red">回复1点体力</span>/<span style="color: gold">弃置1张牌并摸2张牌</span>/<span style="color: red">摸1张牌</span>',
						ly_junshenbao_zhenSanGuo_huangyuehua_jingnu: '精弩',
						ly_junshenbao_zhenSanGuo_huangyuehua_jingnu_info: '<span style="color: gold">出牌阶段</span>限1次,你可以将1张<span style="color: red">红色</span>手牌移出游戏,将<诸葛连弩>置入1名角色的装备区内并摸X张牌(X为其<span style="color: red">攻击距离</span>内的角色数).',
						ly_junshenbao_zhenSanGuo_huangyuehua_liuma: '流马',
						ly_junshenbao_zhenSanGuo_huangyuehua_liuma_info: '<li><span style="color: gold">回合开始</span>时,你可以任意改变你的阶段顺序.<li><span style="color: gold">回合结束</span>时,若你本回合阶段顺序均发生改变,则你可以移动场上1张牌.',
						ly_junshenbao_zhenSanGuo_zhangshiping_shangdao: '商道',
						ly_junshenbao_zhenSanGuo_zhangshiping_shangdao_info: '<span style="color: gold">出牌阶段</span>,你可以将任意张点数之和为X的非装备手牌交给1名装备区内有牌的<span style="color: red">其他角色</span>(X为其装备区内的牌点数之和),获得其装备区内所有牌.',
						ly_junshenbao_zhenSanGuo_zhangshiping_ziqi: '资器',
						ly_junshenbao_zhenSanGuo_zhangshiping_ziqi_info: '<span style="color: gold">出牌阶段</span>限1次,你可以交给1名<span style="color: red">其他角色</span>1张装备牌,<span style="color: gold">若如此做</span>,当其使用此装备牌时,你将手牌补至5张.',
						ly_junshenbao_sociatyBeast_qiuniu: '兽·囚牛',
						ly_junshenbao_sociatyBeast_baxia: '兽·赑屃',
						ly_junshenbao_sociatyBeast_bian: '兽·狴犴',
						ly_junshenbao_sociatyBeast_chaofeng: '兽·嘲风',
						ly_junshenbao_sociatyBeast_chiwen: '兽·螭吻',
						ly_junshenbao_sociatyBeast_fuxi: '兽·负屃',
						ly_junshenbao_sociatyBeast_pulao: '兽·蒲牢',
						ly_junshenbao_sociatyBeast_yazi: '兽·睚眦',
						ly_junshenbao_sociatyBeast_suanni: '兽·狻猊',
						//////////武将分割线//////////
						ly_junshenbao_sociatyBeast_fuxi_longzhi: '<span style="color: yellow">龙识</span>',
						ly_junshenbao_sociatyBeast_fuxi_longzhi_info: '<span style="color: red"><li>友方角色出牌阶段限1次,若你"章"的数量不大于4张,其可以将1张非延时锦囊置于你的武将牌上,称为"章",若如此做,其摸1张牌.<li>锁定技,摸牌阶段你额外摸X张牌(X为你"章"的数量且至多为3).</span>',
						ly_junshenbao_sociatyBeast_fuxi_longzhi_gain: '<span style="color: yellow">龙识</span>',
						ly_junshenbao_sociatyBeast_fuxi_longzhi_gain_info: '',
						ly_junshenbao_sociatyBeast_fuxi_lingjie: '<span style="color: yellow">灵碣</span>',
						ly_junshenbao_sociatyBeast_fuxi_lingjie_info: '<span style="color: red">出牌阶段,你可以将1张手牌当做一张"章"使用(每张"章"每回合限1次),若当前环境为天空,你摸1张牌.</span>',
						ly_junshenbao_sociatyBeast_fuxi_feizhang: '<span style="color: yellow">斐章</span>',
						ly_junshenbao_sociatyBeast_fuxi_feizhang_info: '<span style="color: red">每回合限1次,你使用非延时锦囊指定目标后,你可以令1名不为此牌目标的角色成为此牌额外目标.</span>',
						ly_junshenbao_sociatyBeast_fuxi_bowen: '<span style="color: yellow">博文</span>',
						ly_junshenbao_sociatyBeast_fuxi_bowen_info: '<span style="color: red">锁定技,你每使用1张非延时锦囊牌,你的手牌上限+1直到你的回合结束.</span>',
						ly_junshenbao_sociatyBeast_baxia_longxuan: '<span style="color: yellow">龙玄</span>',
						ly_junshenbao_sociatyBeast_baxia_longxuan_info: '<span style="color: red"><li>其他友方角色出牌阶段限1次,其可以将1张非延时锦囊置于你的武将牌上,称为"铭",若如此做其回复1点体力且你增加1点体力上限.<li>锁定技,摸牌阶段你摸牌数始终-1;你的手牌上限始终-X(X为你"铭"的数量).</span>',
						ly_junshenbao_sociatyBeast_baxia_longxuan_gain: '<span style="color: yellow">龙玄</span>',
						ly_junshenbao_sociatyBeast_baxia_longxuan_gain_info: '',
						ly_junshenbao_sociatyBeast_baxia_lingxi: '<span style="color: yellow">灵屃</span>',
						ly_junshenbao_sociatyBeast_baxia_lingxi_info: '<span style="color: red">锁定技,你每受到1点伤害,须弃置1张"铭",失去1点体力上限并令全体友方角色摸1张牌,若当前环境为海洋,则改为摸2张牌.</span>',
						ly_junshenbao_sociatyBeast_baxia_shuliu: '<span style="color: yellow">疏流</span>',
						ly_junshenbao_sociatyBeast_baxia_shuliu_info: '<span style="color: red">锁定技,你使用的非延时锦囊结算后,你将此牌作为"铭"置于武将牌上并增加1点体力上限.</span>',
						ly_junshenbao_sociatyBeast_baxia_jienu: '<span style="color: yellow">介怒</span>',
						ly_junshenbao_sociatyBeast_baxia_jienu_info: '<span style="color: red">锁定技,出牌阶段开始时,若你"铭"的数量不小于7张,你回复等同于"铭"数量的体力值并对自己造成等量的伤害.</span>',
						ly_junshenbao_sociatyBeast_bian_longshi: '<span style="color: yellow">龙视</span>',
						ly_junshenbao_sociatyBeast_bian_longshi_info: '<span style="color: red">锁定技,其他角色成为基本牌的目标时,若当前回合未有角色受到过伤害,其摸1张牌,且若当前环境为陆地,你令全体友方角色各摸1张牌.</span>',
						ly_junshenbao_sociatyBeast_bian_songyan: '<span style="color: yellow">讼言</span>',
						ly_junshenbao_sociatyBeast_bian_songyan_info: '<span style="color: red">锁定技,其他角色成为非延时锦囊的目标时,若当前回合未有角色受到过伤害,其摸1张牌,且若当前环境为陆地,你令全体友方角色各摸1张牌.</span>',
						ly_junshenbao_sociatyBeast_bian_suwei: '<span style="color: yellow">肃威</span>',
						ly_junshenbao_sociatyBeast_bian_suwei_info: '<span style="color: red">锁定技,敌方角色于其回合内对你使用牌时,你弃置其1张手牌.</span>',
						ly_junshenbao_sociatyBeast_bian_hualao: '<span style="color: yellow">画牢</span>',
						ly_junshenbao_sociatyBeast_bian_hualao_info: '<span style="color: red">锁定技,当其他友方角色体力值总和不大于3点时,其他友方角色不能成为敌方角色使用牌的合法目标.</span>',
						ly_junshenbao_sociatyBeast_pulao_longhou: '<span style="color: yellow">龙吼</span>',
						ly_junshenbao_sociatyBeast_pulao_longhou_info: '<span style="color: red">锁定技,回合结束时,你视为使用1张"万箭齐发".</span>',
						ly_junshenbao_sociatyBeast_pulao_qiejing: '<span style="color: yellow">怯鲸</span>',
						ly_junshenbao_sociatyBeast_pulao_qiejing_info: '<span style="color: red">锁定技,当1张牌至少指定3名角色为目标时,你须弃置1张牌并失去1点体力,若当前环境为海洋,你摸1张牌.</span>',
						ly_junshenbao_sociatyBeast_pulao_mingyin: '<span style="color: yellow">鸣音</span>',
						ly_junshenbao_sociatyBeast_pulao_mingyin_info: '<span style="color: red">锁定技,你造成的伤害均视为体力流失.</span>',
						ly_junshenbao_sociatyBeast_pulao_duyuan: '<span style="color: yellow">独远</span>',
						ly_junshenbao_sociatyBeast_pulao_duyuan_info: '<span style="color: red"><li>锁定技,其他友方角色不能成为你使用牌的目标.<li>锁定技,你造成伤害始终+1.</span>',
						ly_junshenbao_sociatyBeast_chaofeng_longlin: '<span style="color: yellow">龙鳞</span>',
						ly_junshenbao_sociatyBeast_chaofeng_longlin_info: '<span style="color: red">出牌阶段限1次,你可以展示1张防具牌,若如此做,所有友方角色依次回复1点体力,你将此牌移出游戏,若当前环境为天空,所有友方角色依次随机装备1张防具牌.</span>',
						ly_junshenbao_sociatyBeast_chaofeng_zhijiao: '<span style="color: yellow">置角</span>',
						ly_junshenbao_sociatyBeast_chaofeng_zhijiao_info: '<span style="color: red">出牌阶段限1次,你可以将1张坐骑牌置于1名其他角色装备区内,若如此做,你与其各随机获得1张红色牌.</span>',
						ly_junshenbao_sociatyBeast_chaofeng_zhixie: '<span style="color: yellow">止邪</span>',
						ly_junshenbao_sociatyBeast_chaofeng_zhixie_info: '<span style="color: red">其他角色的回合结束时,若其于本回合内未造成过伤害,你可以获得场上1张装备牌.</span>',
						ly_junshenbao_sociatyBeast_chaofeng_haoxian: '<span style="color: yellow">好险</span>',
						ly_junshenbao_sociatyBeast_chaofeng_haoxian_info: '<span style="color: red">锁定技,回合结束时,若敌方角色装备区内牌数总和不小于4张,你令所有敌方角色依次弃置装备区内所有牌,你摸等量的牌.</span>',
						ly_junshenbao_sociatyBeast_yazi_longlie: '<span style="color: yellow">龙烈</span>',
						ly_junshenbao_sociatyBeast_yazi_longlie_info: '<span style="color: red">锁定技,你使用杀指定目标后,若当前环境不为陆地,则此杀不可被响应,否则此杀伤害+1.</span>',
						ly_junshenbao_sociatyBeast_yazi_chaiyue: '<span style="color: yellow">豺月</span>',
						ly_junshenbao_sociatyBeast_yazi_chaiyue_info: '<span style="color: red">锁定技,你使用的杀始终指定全体敌方角色为目标.</span>',
						ly_junshenbao_sociatyBeast_yazi_langri: '<span style="color: yellow">狼日</span>',
						ly_junshenbao_sociatyBeast_yazi_langri_info: '<span style="color: red">锁定技,你使用杀无距离限制;若当前环境为陆地,你使用杀无视防具.</span>',
						ly_junshenbao_sociatyBeast_yazi_bibao: '<span style="color: yellow">必报</span>',
						ly_junshenbao_sociatyBeast_yazi_bibao_info: '<span style="color: red">锁定技,回合开始时,你失去1点体力,视为对随机1名敌方角色使用1张杀.</span>',
						ly_junshenbao_sociatyBeast_chiwen_longao: '<span style="color: yellow">龙鳌</span>',
						ly_junshenbao_sociatyBeast_chiwen_longao_info: '<span style="color: red">锁定技,其他友方角色受到属性伤害时,此伤害-1,若当前环境为海洋,则此伤害-2.</span>',
						ly_junshenbao_sociatyBeast_chiwen_quyan: '<span style="color: yellow">驱炎</span>',
						ly_junshenbao_sociatyBeast_chiwen_quyan_info: '<span style="color: red">锁定技,若当前环境为海洋,则其他友方角色造成的属性伤害+1,否则你造成的属性伤害+1.</span>',
						ly_junshenbao_sociatyBeast_chiwen_yuhuo: '<span style="color: yellow">鱼火</span>',
						ly_junshenbao_sociatyBeast_chiwen_yuhuo_info: '<span style="color: red"><li>你可以将1张♢手牌当"火杀"使用.<li>出牌阶段,你可以将1张黑色手牌当"铁索连环"使用.</span>',
						ly_junshenbao_sociatyBeast_chiwen_fubing: '<span style="color: yellow">负兵</span>',
						ly_junshenbao_sociatyBeast_chiwen_fubing_info: '<span style="color: red">锁定技,出牌阶段开始时,你随机横置1名敌方角色并随机重置1名友方角色.</span>',
						ly_junshenbao_sociatyBeast_suanni_longzhen: '<span style="color: yellow">龙镇</span>',
						ly_junshenbao_sociatyBeast_suanni_longzhen_info: '<span style="color: red">锁定技,每回合限1次,其他友方角色于其回合外获得牌后,你令其摸2张牌.</span>',
						ly_junshenbao_sociatyBeast_suanni_ruiyan: '<span style="color: yellow">瑞烟</span>',
						ly_junshenbao_sociatyBeast_suanni_ruiyan_info: '<span style="color: red">锁定技,回合结束时,你摸1张牌,若当前环境为陆地,则改为摸3张牌.</span>',
						ly_junshenbao_sociatyBeast_suanni_raoleng: '<span style="color: yellow">绕棱</span>',
						ly_junshenbao_sociatyBeast_suanni_raoleng_info: '<span style="color: red">出牌阶段限2次,你可以将1张手牌交给1名其他角色.</span>',
						ly_junshenbao_sociatyBeast_suanni_xiangjin: '<span style="color: yellow">香巾</span>',
						ly_junshenbao_sociatyBeast_suanni_xiangjin_info: '<span style="color: red">出牌阶段限1次,你可以令1名手牌数不等于你的其他角色将手牌调整至与你相同.</span>',
						ly_junshenbao_sociatyBeast_qiuniu_longxuan: '<span style="color: yellow">龙弦</span>',
						ly_junshenbao_sociatyBeast_qiuniu_longxuan_info: '<li><span style="color: red">出牌阶段限1次,你可以将1张♢牌当"乐不思蜀"使用.</span><li><span style="color: red">出牌阶段限1次,若当前环境为天空,你可以将1张♧牌当"兵粮寸断"使用.</span>',
						ly_junshenbao_sociatyBeast_qiuniu_lige: '<span style="color: yellow">离歌</span>',
						ly_junshenbao_sociatyBeast_qiuniu_lige_info: '<span style="color: red">场上判定牌生效时,你可以打出1张牌替换之.</span>',
						ly_junshenbao_sociatyBeast_qiuniu_heming: '<span style="color: yellow">和鸣</span>',
						ly_junshenbao_sociatyBeast_qiuniu_heming_info: '<span style="color: red">其他角色每跳过1个阶段,你可令1名角色摸1张牌.</span>',
						ly_junshenbao_sociatyBeast_qiuniu_jilv: '<span style="color: yellow">集律</span>',
						ly_junshenbao_sociatyBeast_qiuniu_jilv_info: '<span style="color: red">锁定技,你立即获得己方其他角色的判定牌.</span>',
						ly_junShenChallenge_shenjiang_shenshi: '奉神者',
						ly_junShenChallenge_lvbu: '神·吕布',
						ly_junShenChallenge_zhouyu: '神·周瑜',
						ly_junShenChallenge_luxun: '神·陆逊',
						/////////////////
						ly_junShenChallenge_shenjiang_shenshi_fengshen: '<span style="color: yellow">奉神</span>',
						ly_junShenChallenge_shenjiang_shenshi_fengshen_info: '<span style="color: red"><li>锁定技,每回合限1次,你造成伤害后,令神摸1张牌;你回复体力后,令神回复1点体力.<li>出牌阶段限1次,你可以对1名其他角色造成1点雷电伤害.</span>',
						ly_junShenChallenge_shenjiang: '<span style="color: yellow">神降</span>',
						ly_junShenChallenge_shenjiang_info: '<span style="color: red">锁定技,游戏开始时,你的身份变更为"主公",将体力上限与体力值调整至场上角色数并摸4张牌;你的上下家身份变更为"神使"且获得等同于其体力上限的护甲值;其余角色身份变更为"反贼",增加1点体力上限与体力值并摸2张牌.</span>',
						ly_junShenChallenge_luxun_junmou: '<span style="color: yellow">军谋</span>',
						ly_junShenChallenge_luxun_junmou_info: '<span style="color: red"><li>锁定技,你每受到或造成伤害,你获得等量的"军"标记.<li>出牌阶段限1次,你可以弃置1枚"军"标记,视为使用1张基本牌或非延时锦囊牌.</span>',
						ly_junShenChallenge_luxun_cuike: '<span style="color: yellow">摧克</span>',
						ly_junShenChallenge_luxun_cuike_info: '<span style="color: red">回合开始时,你可以横置1名其他角色并可以对另1名其他角色造成1点伤害.</span>',
						ly_junShenChallenge_luxun_zhanyan: '<span style="color: yellow">绽炎</span>',
						ly_junShenChallenge_luxun_zhanyan_info: '<span style="color: red">每2轮游戏限1次,出牌阶段,你可以令场上已横置的敌方角色依次将装备区中的牌移出游戏,对其依次造成1点火焰伤害.</span>',
						ly_junShenChallenge_zhouyu_qinxin: '<span style="color: yellow">琴心</span>',
						ly_junShenChallenge_zhouyu_qinxin_info: '<span style="color: red">你的红色牌被弃置后,你可以令等量的角色回复1点体力(若无回复体力则改为摸1张牌).</span>',
						ly_junShenChallenge_zhouyu_qinjian: '<span style="color: yellow">琴剑</span>',
						ly_junShenChallenge_zhouyu_qinjian_info: '<span style="color: red">你的黑色牌被弃置后,你可以令等量的角色失去1点体力.</span>',
						ly_junShenChallenge_zhouyu_hongyan: '<span style="color: yellow">红焱</span>',
						ly_junShenChallenge_zhouyu_hongyan_info: '<span style="color: red">锁定技,每2轮游戏限1次,回合结束时,你随机将X点火焰伤害分配给任意名敌方角色(X为你已损失的体力值且至多为3至少为1).</span>',
						ly_junShenChallenge_zhouyu_zhenhun: '<span style="color: yellow">赤焰镇魂琴</span>',
						ly_junShenChallenge_zhouyu_zhenhun_info: '<span style="color: red">锁定技,你造成的火属性伤害始终+1,你造成的火属性伤害均视为神圣伤害.</span>',
						ly_junShenChallenge_lvbu_wuwei: '<span style="color: yellow">武威</span>',
						ly_junShenChallenge_lvbu_wuwei_info: '<span style="color: red">锁定技,你的回合内,全体敌方角色非锁定技失效;出牌阶段开始时,你须展示所有手牌,令全体敌方角色本回合不能使用或打出你手牌中颜色最多的手牌颜色的牌直到回合结束(若不同颜色的手牌数量相等,则改为不能打出或使用手牌).</span>',
						ly_junShenChallenge_lvbu_wumou: '<span style="color: yellow">无谋</span>',
						ly_junShenChallenge_lvbu_wumou_info: '<span style="color: red">锁定技,你于回合内重复使用同名牌时,你失去1点体力上限并摸1张牌.</span>',
						ly_junShenChallenge_lvbu_shennu: '<span style="color: yellow">神怒</span>',
						ly_junShenChallenge_lvbu_shennu_info: '<span style="color: red">每2轮游戏限1次,出牌阶段,你可以依次对全体敌方角色造成1点伤害,并令其将手牌区与装备区的牌数弃置至1张.</span>',
						ly_junShenChallenge_lvbu_xiuluo: '<span style="color: yellow">修罗炼狱戟</span>',
						ly_junShenChallenge_lvbu_xiuluo_info: '<span style="color: red">锁定技,你造成的伤害始终+1;你造成伤害后,若此伤害值不小于1,目标回复1点体力.<li>锁定技,你计算与其他角色的距离时,始终-X(X为敌方角色数).</span>',
						ly_yellowTurban_hanJun: '汉军',
						ly_yellowTurban_huangJinBing: '黄巾兵',
						ly_yellowTurban_liangZhouJun: '凉州军',
						ly_yellowTurban_manZuYongShi: '蛮族勇士',
						ly_yellowTurban_xiongNu: '匈奴',
						ly_yellowTurban_bingYi: '病疫',
						ly_yellowTurban_taoSheng: '陶升',
						ly_yellowTurban_baoXin: '鲍信',
						ly_yellowTurban_zhangJu: '张举',
						ly_yellowTurban_zhangChun: '张纯',
						ly_yellowTurban_chengYuanZhi: '程远志',
						ly_yellowTurban_duYouOne: '督邮Ⅰ',
						ly_yellowTurban_bianzhang: '边章',
						ly_yellowTurban_manZuTouLing: '蛮族头领',
						ly_yellowTurban_yudu: '于毒',
						////////////
						ly_yellowTurban_huangJinBing_baoDong: '暴乱',
						ly_yellowTurban_huangJinBing_baoDong_info: '<li><span style="color: gold">摸牌阶段结束时</span>,你可以视为使用1张"杀",若此"杀"造成过伤害,你摸1张牌并获得1枚"暴"标记;<li><span style="color: red">锁定技</span>,<span style="color: gold">回合结束时</span>,你<span style="color: red">弃置</span>所有"暴"标记.',
						ly_yellowTurban_hanJun_shuWei: '戍卫',
						ly_yellowTurban_hanJun_shuWei_info: '当你成为"杀"或"南蛮入侵"的目标时,你可以摸1张牌,<span style="color: gold">若如此做</span>,你须<span style="color: red">弃置</span>1张牌.',
						ly_yellowTurban_liangZhouJun_liangJi: '凉骑',
						ly_yellowTurban_liangZhouJun_liangJi_info: '<span style="color: red">锁定技</span>,你计算与其他角色距离时,始终<span style="color: gold">-1</span>;你的手牌上限始终<span style="color: gold">+1</span>;你使用"杀"的次数<span style="color: gold">+1</span>.',
						ly_yellowTurban_manZuYongShi_manYong: '蛮勇',
						ly_yellowTurban_manZuYongShi_manYong_info: '<span style="color: red">锁定技</span>,<span style="color: gold">摸牌阶段</span>,你改为摸X张牌(X为场上群势力角色数+1且至多为<span style="color: red">5</span>).',
						ly_yellowTurban_xiongNu_manLue: '蛮掠',
						ly_yellowTurban_xiongNu_manLue_info: '<span style="color: red">锁定技</span>,你<span style="color: red">造成伤害</span>后,你摸1张牌.',
						ly_yellowTurban_bingYi_qinRan: '侵染',
						ly_yellowTurban_bingYi_qinRan_info: '<span style="color: gold">出牌阶段</span>限1次,你可以指定1名<span style="color: red">其他角色</span>,令其于其下回合结束时失去1点体力.',
						ly_yellowTurban_taoSheng_nuYi: '怒义',
						ly_yellowTurban_taoSheng_nuYi_info: '当你<span style="color: red">造成伤害</span>时,若<span style="color: gold">友方</span>有角色<span style="color: red">已受伤</span>,你可令此伤害<span style="color: red">+1</span>.',
						ly_yellowTurban_baoXin_yiMou: '毅谋',
						ly_yellowTurban_baoXin_yiMou_info: '<span style="color: red">其他角色</span>即将受到伤害时,若其体力值为1,你可以防止之,<span style="color: gold">若如此做</span>,你失去1点体力.',
						ly_yellowTurban_zhangJu_yeLue: '野掠',
						ly_yellowTurban_zhangJu_yeLue_info: '<span style="color: red">锁定技</span>,<span style="color: gold">回合结束时</span>,若你于本回合内造成过伤害,你对所有<span style="color: red">其他角色</span>依次造成1点雷电伤害.',
						ly_yellowTurban_zhangChun_miTian: '弥天',
						ly_yellowTurban_zhangChun_miTian_info: '<span style="color: red">锁定技</span>,每当你打出1张"闪"时,你令所有<span style="color: red">其他角色</span>横置.',
						ly_yellowTurban_chengYuanZhi_shouZhi: '首志',
						ly_yellowTurban_chengYuanZhi_shouZhi_info: '<span style="color: red">锁定技</span>,当你使用红色"杀"<span style="color: red">造成伤害</span>时/受到红色"杀"造成的伤害时,此伤害<span style="color: gold">+1</span>.',
						ly_yellowTurban_duYouⅠ_baoLi: '暴戾',
						ly_yellowTurban_duYouⅠ_baoLi_info: '<span style="color: red">锁定技</span>,<span style="color: gold">出牌阶段</span>开始时,你摸1张牌,你使用"杀"造成的伤害基数永久<span style="color: gold">+1</span>.',
						ly_yellowTurban_bianzhang_baHu: '跋扈',
						ly_yellowTurban_bianzhang_baHu_info: '<span style="color: gold">摸牌阶段</span>开始时,你可以少摸1张牌,<span style="color: gold">若如此做</span>,其他<span style="color: gold">友方角色</span>依次摸2张牌并弃置1张牌.',
						ly_yellowTurban_manZuTouLing_rongYong: '戎勇',
						ly_yellowTurban_manZuTouLing_rongYong_info: '<span style="color: red">锁定技</span>,<span style="color: gold">摸牌阶段</span>,你改为摸X张牌(X为场上群势力角色数的两倍+3至多为<span style="color: red">5</span>).',
						ly_yellowTurban_baoLuan: '暴乱',
						ly_yellowTurban_baoLuan_info: '<li><span style="color: gold">摸牌阶段结束时</span>,你可以视为使用1张"杀",若此"杀"造成过伤害,你摸1张牌.',
						ly_yellowTurban_yudu_huoLuan: '祸乱',
						ly_yellowTurban_yudu_huoLuan_info: '<span style="color: red">锁定技</span>,当1名角色于其回合内造成第2点伤害后,你摸2张牌.',
						ly_junshenbao_guohuai: '军·郭淮',
						ly_junshenbao_jiaxu: '军·贾诩',
						ly_junshenbao_miheng: '军·弥衡',
						ly_junshenbao_liufeng: '军·刘封',
						ly_junshenbao_simayi: '军·司马懿',
						ly_junshenbao_liru: '军·李儒',
						ly_junshenbao_sunjian: '军·孙坚',
						ly_junshenbao_diaochan: '军·貂蝉',
						ly_junshenbao_guanyinping: '军·关银屏',
						ly_junshenbao_guohuai_jingce: '精策',
						ly_junshenbao_huangquan: '军·黄权',
						ly_junshenbao_sunquan: '军·孙权',
						ly_junshenbao_mateng: '军·马腾',
						ly_junshenbao_chenlin: '军·陈琳',
						ly_junshenbao_wolong: '军·卧龙',
						ly_junshenbao_tianfeng: '军·田丰',
						ly_junshenbao_sunhao: '军·孙皓',
						ly_junshenbao_luxun: '军·陆逊',
						ly_junshenbao_yujin: '军·于禁',
						ly_junshenbao_litong: '军·李通',
						ly_junshenbao_zhangfei: '军·张飞',
						ly_junshenbao_zhouyu: '军·周瑜',
						ly_junshenbao_sunce: '军·孙策',
						ly_junshenbao_zhurong: '军·祝融',
						ly_junshenbao_wangji: '军·王基',
						ly_junshenbao_spcaoren: '军·sp曹仁',
						ly_junshenbao_huanggai: '军·黄盖',
						ly_junshenbao_quyi: '军·麹义',
						ly_junshenbao_huangzhong: '军·黄忠',
						ly_junshenbao_zhangliao: '军·张辽',
						ly_junshenbao_sunshangxiang: '军·孙尚香',
						ly_junshenbao_spsunshangxiang: '军·sp孙尚香',
						ly_junshenbao_machao: '军·马超',
						ly_junshenbao_liuxie: '军·刘协',
						ly_junshenbao_zhangrang: '军·张让',
						ly_junshenbao_zhugedan: '军·诸葛诞',
						ly_junshenbao_maliang: '军·马良',
						ly_junshenbao_lvmeng: '军·吕蒙',
						ly_junshenbao_weiyan: '军·魏延',
						ly_junshenbao_guopang: '军·郭图&逄纪',
						ly_junshenbao_xiahouyuan: '军·夏侯渊',
						ly_junshenbao_lusu: '军·鲁肃',
						ly_junshenbao_zhonghui: '军·钟会',
						ly_junshenbao_zhangjiao: '军·张角',
						ly_junshenbao_lingtong: '军·凌统',
						ly_junshenbao_zhenji: '军·甄姬',
						ly_junshenbao_zhangxiu: '军·张绣',
						ly_junshenbao_zhoutai: '军·周泰',
						ly_junshenbao_jiangfei: '军·蒋琬&费祎',
						ly_junshenbao_spjiaxu: '军·sp贾诩',
						ly_junshenbao_zhangren: '军·张任',
						ly_junshenbao_jiangwei: '军·姜维',
						ly_junshenbao_dingfeng: '军·丁奉',
						ly_junshenbao_caoren: '军·曹仁',
						ly_junshenbao_zuoci: '军·左慈',
						ly_junshenbao_erzhang: '军·张昭&&张纮',
						ly_junshenbao_zhoucang: '军·周仓',
						ly_junshenbao_gongsunyuan: '军·公孙渊',
						ly_junshenbao_caozhi: '军·曹植',
						ly_junshenbao_fazheng: '军·法正',
						ly_junshenbao_dongyun: '军·董允',
						ly_junshenbao_luji: '军·陆绩',
						//////////////////分割线///////////////////
						ly_junshenbao_guohuai_jingce_info: '<span style="color: gold">回合结束时</span>,你可以摸X张牌(X为你<span style="color: gold">本回合</span>使用的牌数且至多为<span style="color: red">5</span>).',
						ly_junshenbao_jiaxu_luanwu: '乱武',
						ly_junshenbao_jiaxu_luanwu_info: '<span style="color: gold">出牌阶段限1次</span>,你可令除你外的<span style="color: gold">所有角色</span>依次对与其距离最近的<span style="color: gold">另1名角色</span>使用1张杀,无法如此做者受到你造成的1点<span style="color: red">神圣伤害</span>.',
						ly_junshenbao_jiaxu_wansha: '完杀',
						ly_junshenbao_jiaxu_wansha_info: '<span style="color: red">锁定技</span>,你令<span style="color: gold">敌方角色</span>进入濒死状态时,你立即将其区域内所有牌移出游戏,若你为<span style="color: gold">当前回合角色</span>,其立即死亡,你摸3张牌.',
						ly_junshenbao_jiaxu_weimu: '帷幕',
						ly_junshenbao_jiaxu_weimu_info: '<span style="color: red">锁定技</span>,你成为♠️️或♣️️锦囊牌和基本牌的<span style="color: red">目标</span>时,取消之.',
						ly_junshenbao_miheng_kuangcai: '狂才',
						ly_junshenbao_miheng_kuangcai_info: '<span style="color: gold">回合开始时</span>,你可以获得以下效果直到回合结束(X为<span style="color: gold">场上存活角色数</span>与<span style="color: red">体力值大于你的角色数</span>之和).<li>回合内限X次,你每使用1张牌,你摸1张牌.<li>锁定技,你使用牌无距离限制与次数限制,你的手牌上限为X.',
						ly_junshenbao_miheng_kuangcai_user: '狂才',
						ly_junshenbao_miheng_kuangcai_user_info: '',
						ly_junshenbao_miheng_shejian: '舌剑',
						ly_junshenbao_miheng_shejian_info: '<span style="color: gold">弃牌阶段结束时</span>,你可以弃置<span style="color: gold">至多等同于你弃牌数的其他角色区域内</span>1张牌.',
						ly_junshenbao_liufeng_xiansi: '陷嗣',
						ly_junshenbao_liufeng_xiansi_info: '<li><span style="color: gold">回合开始时</span>,你可以将至多3名<span style="color: gold">其他角色</span>各1张牌置于你的武将牌上,称为"摧".<li><span style="color: gold">摸牌阶段</span>,你可以改为摸X张牌.<span style="color: red">锁定技</span>,你计算与<span style="color: gold">其他角色</span>的距离时,始终-X(X为你"摧"的数量且至多为5).<li>若你拥有的"摧"数量不小于5,<span style="color: gold">其他角色回合开始时</span>,若你在其攻击距离内,其可视为对你使用1张杀.<span style="color: red">锁定技</span>,你受到伤害后,你须选择弃置2张"摧".',
						ly_junshenbao_liufeng_xiansi_draw: '陷嗣',
						ly_junshenbao_liufeng_xiansi_draw_info: '',
						ly_junshenbao_liufeng_xiansi_use: '陷嗣',
						ly_junshenbao_liufeng_xiansi_use_info: '',
						ly_junshenbao_liufeng_xiansi_damage: '陷嗣',
						ly_junshenbao_liufeng_xiansi_damage_info: '',
						ly_junshenbao_simayi_fankui: '狼顾',
						ly_junshenbao_simayi_fankui_info: '<span style="color: red">你受到有来源的伤害后</span>/<span style="color: gold">你造成伤害后</span>,你可以随机获得<span style="color: red">伤害来源</span>/<span style="color: gold">目标</span>1张牌,根据获得牌的花色执行以下效果.<li>♠️️,<span style="color: red">伤害来源</span>/<span style="color: gold">目标</span>横置.<li>♣️️,你弃置<span style="color: red">伤害来源</span>/<span style="color: gold">目标</span>1张牌.<li>♥️️,你回复1点体力.<li>◆,你摸1张牌.',
						ly_junshenbao_simayi_guicai: '鬼才',
						ly_junshenbao_simayi_guicai_info: '<span style="color: gold">全场</span>判定牌生效时,你可以打出1张牌代替之,<span style="color: gold">若如此做</span>,你摸1张牌.',
						ly_junshenbao_liru_juece: '绝策',
						ly_junshenbao_liru_juece_info: '<span style="color: gold">弃牌阶段结束时</span>,你可以对1名<span style="color: red">手牌数不大于你</span>/<span style="color: gold">装备区内牌数不大于你</span>/<span style="color: red">体力值为全场最小</span>的其他角色</span>造成1点伤害.',
						ly_junshenbao_liru_mieji: '灭计',
						ly_junshenbao_liru_mieji_info: '<span style="color: gold">出牌阶段限1次</span>,你可以将1张黑色牌置于牌堆顶,令<span style="color: gold">1名其他角色</span>弃置1张锦囊牌或2张非锦囊牌.',
						ly_junshenbao_liru_fencheng: '焚城',
						ly_junshenbao_liru_fencheng_info: '<span style="color: gold">出牌阶段限1次</span>,你可令除你外的<span style="color: gold">所有角色</span>依次弃置1张基本牌,无法如此做者受到你对其造成的0～2点<span style="color: red">火焰伤害</span>.',
						ly_junshenbao_sunjian_yinghun: '英魂',
						ly_junshenbao_sunjian_yinghun_info: '当你的<span style="color: gold">体力值发生变化时</span>,你可以令1名<span style="color: gold">角色</span>摸等同于你<span style="color: gold">体力值</span>的牌,弃置等同于你<span style="color: red">已损失体力值</span>的牌.',
						ly_junshenbao_diaochan_lijian: '离间',
						ly_junshenbao_diaochan_lijian_info: '<span style="color: gold">出牌阶段限1次</span>,你可以弃置1张牌指定<span style="color: red">2名其他角色</span>进行拼点,若点数不为平,赢的角色对输的角色造成1点伤害,输的角色视为对赢的角色使用1张决斗.',
						ly_junshenbao_diaochan_lihun: '离魂',
						ly_junshenbao_diaochan_lihun_info: '<span style="color: gold">回合开始时</span>,你可以令<span style="color: gold">其他男性角色</span>选择交给你1张牌或令你摸1张牌,若如此做,其在回合结束时摸1张牌.',
						ly_junshenbao_diaochan_biyue: '闭月',
						ly_junshenbao_diaochan_biyue_info: '<span style="color: gold">回合结束时</span>,若你体力值为<span style="color: red">全场最小</span>,你可以回复2点体力,否则你回复1点体力;若你手牌数为<span style="color: gold">全场最小</span>,你可以摸2张牌,否则你摸1张牌.',
						ly_junshenbao_guanyinping_xueji: '血祭',
						ly_junshenbao_guanyinping_xueji_info: '<span style="color: gold">出牌阶段限1次</span>,你可以弃置1张手牌,选择至多X名其他角色(X为你<span style="color: red">已损失的体力值</span>),横置之并对其造成1点火焰伤害.',
						ly_junshenbao_guanyinping_huxiao: '虎啸',
						ly_junshenbao_guanyinping_huxiao_info: '<span style="color: red">锁定技</span>,回合内每造成1点<span style="color: red">火焰伤害</span>,你本回合计算与其他角色的距离-1,出杀次数+1.',
						ly_junshenbao_guanyinping_wuji: '武继',
						ly_junshenbao_guanyinping_wuji_info: '<span style="color: red">锁定技</span>,回合结束时,若你于本回合造成至少<span style="color: red">3点伤害</span>,你增加1点体力上限,若你体力值为<span style="color: gold">全场最少</span>,你回复1点体力,你从牌堆或场上获得卡牌"青龙偃月刀".',
						ly_junshenbao_pangtong_lianhuan_chongzhu: '重铸',
						ly_junshenbao_pangtong_lianhuan_chongzhu_info: '',
						ly_junshenbao_pangtong_lianhuan_draw: '连环',
						ly_junshenbao_pangtong_lianhuan_draw_info: '',
						ly_junshenbao_pangtong_lianhuan_tiesuo: '连环',
						ly_junshenbao_pangtong_lianhuan_tiesuo_info: '',
						ly_junshenbao_pangtong_lianhuan: '连环',
						ly_junshenbao_pangtong_lianhuan_info: '<span style="color: gold">出牌阶段</span>,你可以将1张黑色牌当<span style="color: gold">铁索连环</span>使用或重铸.锁定技,处于连环状态的其他角色受到火焰伤害时,你摸1张牌;你使用的铁索连环时可额外指定1个目标.',
						ly_junshenbao_pangtong_niepan: '涅槃',
						ly_junshenbao_pangtong_niepan_info: '<span style="color: purple">限定技</span>,<span style="color: gold">出牌阶段</span>或当你处于<span style="color: red">濒死状态</span>时,你可以弃置<span style="color: gold">判定区</span>内所有牌,并复原你的武将牌,摸3张牌且体力调整至体力上限.',
						ly_junshenbao_pangtong_xiwu: '栖梧',
						ly_junshenbao_pangtong_xiwu_info: '<span style="color: red">锁定技</span>,你受到<span style="color: red">火焰伤害</span>后,回复等量的体力值.',
						ly_junshenbao_sunquan_zhiheng: '制衡',
						ly_junshenbao_sunquan_zhiheng_info: '<li><span style="color: gold">出牌阶段限1次</span>,你可以摸等同于你手牌数的牌(最多<span style="color: red">5张</span>),将等量的牌置于武将牌上,称为"权".<li><span style="color: gold">出牌阶段开始</span>/<span style="color: red">弃牌阶段结束时</span>,若你有"权",你可以弃置1张"权",并声明1种牌的<span style="color: gold">类型与花色</span>,从牌堆中获得1张同类型花色的牌.<li><span style="color: red">锁定技</span>,回合结束时,若你拥有的"权"数量大于<span style="color: red">场上存活角色数</span>,你须将"权"置入手牌直到手牌数等于体力上限(最高为<span style="color: red">6</span>),弃置剩余所有的"权".',
						ly_junshenbao_sunquan_zhiheng_swap: '制衡',
						ly_junshenbao_sunquan_zhiheng_swap_info: '',
						ly_junshenbao_sunquan_zhiheng_dis: '制衡',
						ly_junshenbao_sunquan_zhiheng_dis_info: '',
						ly_junshenbao_sunquan_jiuyuan: '救援',
						ly_junshenbao_sunquan_jiuyuan_info: '<span style="color: yellow">主公技</span>,<span style="color: red">锁定技</span>,其他友方角色<span style="color: gold">使用桃</span>时,若你已受伤,其可令你成为此桃<span style="color: gold">额外目标</span>,<span style="color: gold">若如此做</span>,其摸1张牌.',
						ly_junshenbao_mateng_xiongyi: '雄异',
						ly_junshenbao_mateng_xiongyi_info: '<span style="color: gold">出牌阶段限1次</span>,你可以令与你处于<span style="color: gold">同一队列</span>的友方角色与你各摸2张牌.若无<span style="color: red">友方角色</span>与你处于同一队列,则你改为摸3张牌.',
						ly_junshenbao_mateng_mashu: '马术',
						ly_junshenbao_mateng_mashu_info: '<span style="color: red">锁定技</span>,你计算与其他角色的距离时,始终<span style="color: gold">-1</span>.',
						ly_junshenbao_mateng_xiongqi: '雄骑',
						ly_junshenbao_mateng_xiongqi_info: '<span style="color: yellow">主公技</span><li>你<span style="color: gold">对目标使用</span>的杀结算后,若<span style="color: red">目标存活</span>,你可以令处于<span style="color: gold">同一队列</span>的友方角色选择对其使用1张杀,若使用杀后<span style="color: red">目标阵亡</span>/技能结算后,你与以此法使用杀者各摸1张牌(终止技能结算).<li><span style="color: red">锁定技</span>,与你处于<span style="color: gold">同一队列</span>的友方角色计算与其他角色的距离时,始终<span style="color: gold">-1</span>.',
						ly_junshenbao_mateng_xiongqi_mashu: '雄骑',
						ly_junshenbao_mateng_xiongqi_mashu_info: '',
						ly_junshenbao_chenlin_songci: '颂词',
						ly_junshenbao_chenlin_songci_info: '<span style="color: gold">出牌阶段</span>,你可以指定1名本回合<span style="color: red">未成为</span>此技能目标的手牌数<span style="color: red">不大于</span>体力值的角色,令其摸2张牌.',
						ly_junshenbao_chenlin_xiwen: '檄文',
						ly_junshenbao_chenlin_xiwen_info: '<span style="color: gold">出牌阶段</span>,你可以指定1名本回合<span style="color: red">未成为</span>此技能目标的手牌数<span style="color: red">大于</span>体力值的角色,令其<span style="color: red">弃置</span>2张牌.',
						ly_junshenbao_chenlin_songci_zan: '颂词',
						ly_junshenbao_chenlin_songci_zan_info: '',
						ly_junshenbao_chenlin_songci_ma: '颂词',
						ly_junshenbao_chenlin_songci_ma_info: '',
						ly_junshenbao_chenlin_bifa: '笔伐',
						ly_junshenbao_chenlin_bifa_info: '<span style="color: gold">出牌阶段结束时</span>,你可以将1张手牌移出游戏并指定1名<span style="color: red">其他角色</span>,其回合开始时,须选择交给你1与笔伐牌张<span style="color: gold">同类型</span>的牌并获得笔伐牌,否则<span style="color: red">失去1点体力并弃置1张装备牌</span>.',
						ly_junshenbao_chenlin_bifa_lose: '笔伐',
						ly_junshenbao_chenlin_bifa_lose_info: '',
						ly_junshenbao_wolong_huoji: '火计',
						ly_junshenbao_wolong_huoji_info: '<span style="color: gold">出牌阶段限3次</span>,你可以展示自己与1名其他角色的1张手牌,若所展示的牌<span style="color: gold">颜色</span>/<span style="color: red">点数</span>相同,则你可以对除其以外的1名角色造成1点<span style="color: red">火焰伤害</span>.',
						ly_junshenbao_wolong_bazhen: '八阵',
						ly_junshenbao_wolong_bazhen_info: '当你<span style="color: gold">没装备防具</span>时,始终视为你装备着【八卦阵】.',
						ly_junshenbao_wolong_kanpo: '看破',
						ly_junshenbao_wolong_kanpo_info: '你可以将<span style="color: gold">任意1张手牌</span>当无懈可击使用.',
						ly_junshenbao_wolong_jixing: '祭星',
						ly_junshenbao_wolong_jixing_info: '<span style="color: purple">限定技</span>,<span style="color: red">锁定技</span>,当你体力值降到0或更低时,你立即分7次展示并弃置牌堆顶1张牌,若所展示的牌为<span style="color: gold">红色</span>,你增加1点<span style="color: gold">体力上限</span>并回复1点<span style="color: gold">体力</span>(场上每有1张红色牌,则增加<span style="color: red">10%</span>牌堆顶为红色牌的概率且至多为50%).',
						ly_junshenbao_tianfeng_sijian: '死谏',
						ly_junshenbao_tianfeng_sijian_info: '<span style="color: gold">出牌阶段限1次</span>,你可以弃置1名其他角色1张牌,若如此做,其可选择对你使用1张杀.',
						ly_junshenbao_tianfeng_suishi: '随势',
						ly_junshenbao_tianfeng_suishi_info: '<span style="color: red">锁定技</span><li>其他<span style="color: gold">友方角色造成伤害</span>后,你摸1张牌.<li>其他<span style="color: gold">友方角色回复体力后</span>,你回复等量的体力.<li>其他<span style="color: red">友方角色受到伤害</span>后,你成为此伤害的目标.<li>其他<span style="color: red">友方角色死亡后</span>,你失去1点体力上限.',
						ly_junshenbao_tianfeng_suishi_sheng: '随势',
						ly_junshenbao_tianfeng_suishi_sheng_info: '',
						ly_junshenbao_tianfeng_suishi_bai: '随势',
						ly_junshenbao_tianfeng_suishi_bai_info: '',
						ly_junshenbao_sunhao_canshi: '残蚀',
						ly_junshenbao_sunhao_canshi_info: '<span style="color: gold">摸牌阶段开始</span>时,你可以改为摸X张牌(X为场上<span style="color: red">已受伤</span>的角色数),若如此做,本回合内你每使用1张<span style="color: gold">非装备/非延时锦囊</span>牌,你需<span style="color: red">弃置1张牌</span>.',
						ly_junshenbao_sunhao_canshi_dis: '残蚀',
						ly_junshenbao_sunhao_canshi_dis_info: '',
						ly_junshenbao_sunhao_guiming: '归命',
						ly_junshenbao_sunhao_guiming_info: '<span style="color: yellow">主公技</span>,<span style="color: red">锁定技</span>,你将技能"残蚀"描述中的<<span style="color: gold">已受伤角色</span>>改为<<span style="color: red">已受伤角色或其他友方角色</span>>.',
						ly_junshenbao_sunhao_canlu: '残戮',
						ly_junshenbao_sunhao_canlu_info: '每局游戏<span style="color: purple">限3次</span>,你可以令你手牌上限永久<span style="color: red">-1</span>并弃置1张手牌,将1张延时锦囊(第1次发动技能时,为<span style="color: red">"兵粮寸断"</span>;第2次发动此技能时,为<span style="color: red">"乐不思蜀"</span>;第3次发动此技能时,为<span style="color: red">"闪电"</span>)置入你的判定区,若如此做,你可以对至多X名<span style="color: gold">其他角色</span><span style="color: red">造成1点伤害</span>(X为你判定区内的判定牌数).',
						ly_junshenbao_sunhao_chouhai: '仇海',
						ly_junshenbao_sunhao_chouhai_info: '<span style="color: red">锁定技</span>,当你手牌数为<span style="color: red">0</span>时,你受到的<span style="color: gold">非属性伤害</span>始终<span style="color: red">+1</span>.',
						ly_junshenbao_luxun_qianxun: '谦逊',
						ly_junshenbao_luxun_qianxun_info: '每当1张<span style="color: gold">延时类锦囊牌</span>或其他角色使用的<span style="color: gold">普通锦囊牌</span>生效时,若你是此牌的<span style="color: red">唯一目标</span>,你可以将所有手牌置于你的武将牌上,若如此做,你可以令至多X名角色(X为你置于武将牌上的手牌数)摸1张牌且此回合结束时,你获得你武将牌上的所有牌.',
						ly_junshenbao_luxun_qianxun_gain: '谦逊',
						ly_junshenbao_luxun_qianxun_gain_info: '',
						ly_junshenbao_luxun_lianying: '连营',
						ly_junshenbao_luxun_lianying_info: '当你于<span style="color: gold">回合外</span>失去牌后,你可以横置1名<span style="color: red">未横置</span>的其他角色并弃置其1张牌,若你以此法横置了至少<span style="color: gold">4</span>名角色,你可以对1名<span style="color: gold">其他角色</span>造成1点<span style="color: red">火焰伤害</span>.<span style="color: red">锁定技</span>,你失去<span style="color: gold">最后1张</span>手牌时,你摸1张牌.',
						ly_junshenbao_yujin_yizhong: '毅重',
						ly_junshenbao_yujin_yizhong_info: '<span style="color: red">锁定技</span>,黑色杀对你<span style="color: gold">无效</span>.',
						ly_junshenbao_yujin_zhenjun: '镇军',
						ly_junshenbao_yujin_zhenjun_info: '<span style="color: gold">出牌阶段限2次</span>,你可以弃置1名<span style="color: red">手牌数大于体力值</span>的其他角色X张牌(X为其手牌数与体力值之差且至多为<span style="color: red">3</span>),你弃置等量的手牌,若你以此法弃置了全部的手牌,你摸等同于你体力上限的牌(至多为<span style="color: gold">5</span>)并随机装备2张装备牌,否则你摸等量的牌并随机装备1张装备牌.',
						ly_junshenbao_litong_cuifeng: '摧锋',
						ly_junshenbao_litong_cuifeng_info: '<li>你<span style="color: gold">受到伤害</span>后,你可以摸等同于伤害值的牌,将等量的牌置于武将牌上,称为"锋".<li><span style="color: red">锁定技</span>,<span style="color: gold">回合开始</span>时,若你有"锋",你须移除所有"锋"并亮出弃置牌堆顶等同于你移除"锋"数量<span style="color: gold">3倍</span>的牌,其中每有1张♠️️/♣️️/<span style="color: red">♥️️</span>/<span style="color: red">◆</span>牌,你本回合出杀次数与进攻距离<span style="color: gold">+1</span>/你本回合手牌上限<span style="color: gold">+1</span>/你<span style="color: gold">回复</span>1点体力/你<span style="color: gold">摸</span>1张牌.',
						ly_junshenbao_zhangfei_paoxiao_zhangba: '咆哮',
						ly_junshenbao_zhangfei_paoxiao_zhangba_info: '',
						ly_junshenbao_zhangfei_paoxiao: '咆哮',
						ly_junshenbao_zhangfei_paoxiao_info: '<li><span style="color: red">锁定技</span>,你使用杀无次数限制.<li><span style="color: gold">出牌阶段</span>,你可以将2张手牌当1张<span style="color: gold">无视距离且可指定2名</span>目标的杀使用',
						ly_junshenbao_zhangfei_tishen: '替身',
						ly_junshenbao_zhangfei_tishen_info: '',
						ly_junshenbao_zhangfei_tishen_use: '替身',
						ly_junshenbao_zhangfei_tishen_use_info: '<span style="color: red">锁定技</span>,<span style="color: gold">回合开始</span>时,你回复X点体力并摸X张牌(X为你回合前受到的伤害值且至多为3).',
						ly_junshenbao_zhouyu_fanjian: '反间',
						ly_junshenbao_zhouyu_fanjian_info: '<span style="color: gold">出牌阶段限1次</span>,你可以弃置1张牌,选择2名</span>其他角色</span>,令其中1名选择1种花色并获得另1名角色1张手牌,若所选花色与获得的牌不同,则选择花色的角色受到1点<span style="color: red">无来源的伤害</span>.',
						ly_junshenbao_zhouyu_yingzi: '英姿',
						ly_junshenbao_zhouyu_yingzi_info: '<span style="color: red">锁定技</span>,你的摸牌数始终<span style="color: gold">+1</span>;你的手牌上限不受体力值影响.',
						ly_junshenbao_sunce_jiang: '激昂',
						ly_junshenbao_sunce_jiang_info: '你成为<span style="color: red">红色</span>牌的目标时,你可以摸1张牌(<span style="color: red">不触发技能</span>).',
						ly_junshenbao_sunce_hunzi: '魂姿',
						ly_junshenbao_sunce_hunzi_info: '<span style="color: blue">觉醒技</span>,当你体力值降到<span style="color: gold">1</span>时,你立即增加1点体力上限并回复1点体力,获得技能"英姿"和"英魂".',
						ly_junshenbao_sunce_yinghun: '魂佑',
						ly_junshenbao_sunce_yinghun_info: '当你的<span style="color: gold">体力值发生变化时</span>,你可以令1名<span style="color: gold">角色</span>摸等同于你<span style="color: gold">体力值</span>的牌,弃置等同于你<span style="color: red">已损失体力值</span>的牌.',
						ly_junshenbao_sunce_yingzi: '英姿',
						ly_junshenbao_sunce_yingzi_info: '<span style="color: red">锁定技</span>,你的摸牌数始终<span style="color: gold">+1</span>;你的手牌上限不受体力值影响.',
						ly_junshenbao_sunce_zhiba: '制霸',
						ly_junshenbao_sunce_zhiba_info: '<span style="color: yellow">主公技</span>,<span style="color: red">其他角色</span>出牌阶段限1次,其可选择与你进行拼点,若你赢,你获得双方拼点的牌.若你<span style="color: gold">已觉醒</span>技能"魂姿",你可以<span style="color: gold">拒绝</span>此拼点.',
						ly_junshenbao_sunce_zhiba_use: '制霸',
						ly_junshenbao_sunce_zhiba_use_info: '',
						ly_junshenbao_zhurong_juxiang: '巨象',
						ly_junshenbao_zhurong_juxiang_info: '<li><span style="color: red">锁定技</span>,南蛮入侵对你无效;<span style="color: red">其他角色</span>使用南蛮入侵时,你获得3枚"蛮兵"标记.<li><span style="color: gold">出牌阶段</span>,你可以弃置1枚"蛮兵"标记,将1张♠️️牌当"南蛮入侵"使用.',
						ly_junshenbao_zhurong_juxiang_use: '巨象',
						ly_junshenbao_zhurong_juxiang_use_info: '',
						ly_junshenbao_zhurong_lieren: '烈刃',
						ly_junshenbao_zhurong_lieren_info: '你对其他角色<span style="color: gold">造成伤害</span>后,你可以与其进行拼点,若你赢,你获得其1张牌.',
						ly_junshenbao_wangji_qizhi: '奇制',
						ly_junshenbao_wangji_qizhi_info: '当你<span style="color: gold">使用牌</span>时,你可以弃置1名不是<span style="color: red">此牌目标</span>的角色<span style="color: gold">区域内</span>1张牌,其摸1张牌;否则你可以摸1张牌并弃置区域内1张牌',
						ly_junshenbao_wangji_jinqu: '进趋',
						ly_junshenbao_wangji_jinqu_info: '<span style="color: gold">回合结束时</span>,你可以摸X张牌(X为你于此阶段前发动"奇制"的次数且至多为<span style="color: red">3</span>),执行额外1个<span style="color: gold">回合</span>(额外回合内不触发此技能).',
						ly_junshenbao_spcaoren_weikui: '伪溃',
						ly_junshenbao_spcaoren_weikui_info: '<span style="color: gold">出牌阶段</span>限1次,你可以失去1点体力,令你的<span style="color: gold">上下家角色</span>选择失去1点体力,你可以选择观看至多X名<span style="color: red">有手牌</span>的其他角色的手牌(X为失去体力的角色数),若其手牌中有"闪",你视为对其使用1张"杀"且本回合内你计算与其距离始终为<span style="color: gold">1</span>,否则你弃置其1张牌.',
						ly_junshenbao_spcaoren_lizhan: '励战',
						ly_junshenbao_spcaoren_lizhan_info: '<span style="color: gold">回合结束时</span>,你可以令任意名角色摸1张牌,若如此做,其摸牌阶段开始时,若其<span style="color: red">已损失</span>体力值大于1,其额外摸1张牌.',
						ly_junshenbao_huanggai_kurou: '苦肉',
						ly_junshenbao_huanggai_kurou_info: '<li><span style="color: gold">出牌阶段</span>限1次,你可以失去1点体力.<li><span style="color: red">锁定技</span>,你<span style="color: red">受到伤害</span>后,有概率失去1点体力并摸2张牌.',
						ly_junshenbao_huanggai_zhaxiang: '诈降',
						ly_junshenbao_huanggai_zhaxiang_info: '<span style="color: red">锁定技</span>,你每失去1点体力,你摸3张牌;若当前为你的出牌阶段,你获得以下效果直到回合结束.<li>使用<span style="color: red">红杀</span>不可被响应,使用杀无距离限制且次数<span style="color: gold">+1</span>.<li>对<span style="color: gold">已横置</span>的角色造成的<span style="color: red">火焰伤害</span><span style="color: gold">+1</span>.',
						ly_junshenbao_huanggai_zhaxiang_use: '诈降',
						ly_junshenbao_huanggai_zhaxiang_use_info: '',
						ly_junshenbao_quyi_fuji: '伏骑',
						ly_junshenbao_quyi_fuji_info: '<span style="color: red">锁定技</span>,你攻击范围内的其他角色<span style="color: red">无法响应</span>你使用的牌',
						ly_junshenbao_quyi_jiaozi: '骄恣',
						ly_junshenbao_quyi_jiaozi_info: '<span style="color: red">锁定技</span>,你对<span style="color: red">手牌数</span>/<span style="color: gold">装备区牌数</span>小于你的角色造成的伤害<span style="color: red">+1</span>;你<span style="color: red">受到伤害</span>时,若伤害来源<span style="color: red">手牌数</span>/<span style="color: gold">装备区牌数</span>小于你,此伤害<span style="color: red">+1</span>.',
						ly_junshenbao_huangzhong_liegong: '烈弓',
						ly_junshenbao_huangzhong_liegong_info: '<li><span style="color: red">锁定技</span>,你使用杀可指定距离不大于此杀点数的角色为目标;你<span style="color: red">攻击距离外</span>的角色不能响应的使用的杀;<li>你使用杀<span style="color: gold">造成伤害</span>时,若目标体力值不小于你,你可令此伤害<span style="color: red">+1</span>;<li>你对目标使用杀<span style="color:gold">结算</span>后,你可以展示并弃置牌堆顶<span style="color: gold">3</span>张牌,其中每有1张与你使用的杀<span style="color: gold">花色相同</span>的牌,你视为对目标使用1张杀;<li>你使用杀<span style="color: gold">造成伤害</span>时,你可以弃置目标装备区内1张牌.',
						ly_junshenbao_huangzhong_liegong_damage: '烈弓',
						ly_junshenbao_huangzhong_liegong_damage_info: '',
						ly_junshenbao_huangzhong_liegong_qilin: '烈弓',
						ly_junshenbao_huangzhong_liegong_qilin_info: '',
						ly_junshenbao_zhangliao_tuxi: '袭营',
						ly_junshenbao_zhangliao_tuxi_info: '<span style="color: gold">摸牌阶段限2次</span>,你可以令此阶段摸牌数<span style="color: red">-1</span>并选择1名有牌的其他角色,获得其<span style="color: red">随机</span>1张牌(可选择优先获得牌的区域);若你以此法获得了2张牌:<li>颜色<span style="color: gold">均为黑色</span>,你可以对1名其他角色造成1点<span style="color: red">雷电伤害</span>(可结算2次);<li>颜色<span style="color: red">均为红色</span>,你回复1点体力.',
						ly_junshenbao_sunshangxiang_jieyin: '良姻',
						ly_junshenbao_sunshangxiang_jieyin_info: '<li><span style="color: gold">出牌阶段</span>限1次,你可以弃置2张牌并选择1名<span style="color: red">已受伤</span>的其他角色,你与其各回复1点体力,若你未受伤,则改为摸1张牌.<li>当你发动此技能次数达到<span style="color: gold">3</span>次时,你失去此技能,获得技能"良助"并变更武将牌.',
						ly_junshenbao_sunshangxiang_xiaoji: '枭姬',
						ly_junshenbao_sunshangxiang_xiaoji_info: '你每失去1张<span style="color: gold">装备区</span>内的牌,你可以摸2张牌.',
						ly_junshenbao_spsunshangxiang_liangzhu: '良助',
						ly_junshenbao_spsunshangxiang_liangzhu_info: '场上角色<span style="color: gold">回复体力</span>后,你可以选择令其摸2张牌,或令自己摸1张牌.',
						ly_junshenbao_spsunshangxiang_xiaoji: '枭姬',
						ly_junshenbao_spsunshangxiang_xiaoji_info: '你每失去1张<span style="color: gold">装备区</span>内的牌,你可以摸2张牌.',
						ly_junshenbao_machao_mashu: '马术',
						ly_junshenbao_machao_mashu_info: '<span style="color: red">锁定技</span>,你计算与其他角色距离时,始终<span style="color: gold">-1</span>.',
						ly_junshenbao_machao_tieqi: '铁骑',
						ly_junshenbao_machao_tieqi_info: '<li>你使用杀<span style="color: gold">指定目标</span>时,你可以展示并弃置牌堆顶等同于你<span style="color: gold">体力值</span>的牌,其中每有1张红色牌,你可以令1名不为此杀目标的其他<span style="color: red">合法</span>角色成为额外目标.<li>你<span style="color: gold">对目标</span>使用杀时,你可以令其非锁定技失效直到回合结束并进行1次判定,除非目标弃置1张等同于此判定牌<span style="color: red">花色</span>的手牌,否则此杀<span style="color: red">不可被闪避</span>.',
						ly_junshenbao_machao_jinma: '锦马',
						ly_junshenbao_machao_jinma_info: '<span style="color: red">锁定技</span>,<span style="color: gold">摸牌阶段</span>你额外摸1张牌且必定摸到1张<span style="color: red">杀</span>.',
						ly_junshenbao_liuxie_tianming: '天命',
						ly_junshenbao_liuxie_tianming_info: '你成为<span style="color: red">伤害牌</span>的<span style="color: red">目标</span>时,你可以摸3张牌,弃置<span style="color: gold">区域内</span>2张牌;若此时场上<span style="color: gold">体力值最高</span>的角色只有1名且<span style="color: red">不为你</span>,其可选择弃置<span style="color: gold">区域内</span>2张牌,摸2张牌.',
						ly_junshenbao_liuxie_mizhao: '皇诏',
						ly_junshenbao_liuxie_mizhao_info: '<li><span style="color: gold">出牌阶段</span>,你可以将1张手牌交给1名<span style="color: red">没有"诏"标记</span>的其他角色,令其获得"诏"标记.<li>其他角色<span style="color: gold">回合开始</span>时,若其在场上拥有"诏"标记的其他角色攻击范围内,你可以移除1名除其以外的有"诏"标记的角色的"诏"标记,视为该角色对其<span style="color: red">使用1张杀</span>.',
						ly_junshenbao_liuxie_xiedi: '挟帝',
						ly_junshenbao_liuxie_xiedi_info: '<span style="color: yellow">主公技</span>,<span style="color: red">锁定技</span>,其他角色令你脱离濒死状态后,其与你<span style="color: red">交换</span>座位,身份牌,体力上限.',
						ly_junshenbao_zhangrang_taoluan: '滔乱',
						ly_junshenbao_zhangrang_taoluan_info: '<span style="color: gold">出牌阶段</span>,你可以将1张手牌当做你<span style="color: red">本回合未使用的基本牌或锦囊牌</span>(限标准与军争)使用.',
						ly_junshenbao_zhugedan_zhanxun: '战勋',
						ly_junshenbao_zhugedan_zhanxun_info: '<span style="color: red">锁定技</span>,若你当前体力上限小于X(X为<span style="color: red">场上存活角色数</span>+5),其他角色进入<span style="color: red">濒死状态</span>时,你增加1点体力上限;若你为<span style="color: gold">伤害来源</span>,你摸1张牌.',
						ly_junshenbao_zhugedan_jupan: '举叛',
						ly_junshenbao_zhugedan_jupan_info: '<span style="color: blue">觉醒技</span>,<span style="color: gold">回合开始</span>时,若你体力上限不小于8,你须将手牌补至体力上限,获得技能"威重"与"内溃".',
						ly_junshenbao_zhugedan_weizhong: '威重',
						ly_junshenbao_zhugedan_weizhong_info: '<span style="color: red">锁定技</span>,你的体力值与体力上限<span style="color: gold">发生变化</span>时,你摸1张牌.',
						ly_junshenbao_zhugedan_neikui: '内溃',
						ly_junshenbao_zhugedan_neikui_info: '<span style="color: red">锁定技</span>,<span style="color: gold">回合结束</span>时,若你体力上限<span style="color: red">大于1</span>,你须<span style="color: red">失去</span>1点体力上限.',
						ly_junshenbao_maliang_zishu: '自援',
						ly_junshenbao_maliang_zishu_info: '<span style="color: red">锁定技</span>,你于<span style="color: gold">友方角色回合内</span>不因此技能获得牌后,你摸1张牌.',
						ly_junshenbao_maliang_shouyuan: '授印',
						ly_junshenbao_maliang_shouyuan_info: '<span style="color: gold">你的回合内</span>,你使用的牌置入弃牌堆后,你可以将其交给1名其他角色(每种牌名每回合限<span style="color: red">1</span>)次.',
						ly_junshenbao_lvmeng_taohui: '韬晦',
						ly_junshenbao_lvmeng_taohui_info: '<span style="color: red">锁定技</span>,<span style="color: gold">摸牌阶段</span>,你改为摸2+X(至多为<span style="color: red">5</span>)张牌;你的手牌上限始终<span style="color: gold">+X</span>(X为当前<span style="color: gold">游戏轮数</span>)',
						ly_junshenbao_lvmeng_qinxue: '勤学',
						ly_junshenbao_lvmeng_qinxue_info: '<span style="color: blue">觉醒技</span>,<span style="color: gold">回合开始</span>时,若你手牌数减去体力值<span style="color: red">不小于3</span>,你须失去1点体力上限并回复1点体力,重置此技能并获得技能"攻心".',
						ly_junshenbao_lvmeng_qinxue_draw: '勤学',
						ly_junshenbao_lvmeng_qinxue_draw_info: '你于<span style="color: gold">回合内</span>重复使用<span style="color: red">同名卡牌</span>时,你可以摸1张牌.',
						ly_junshenbao_lvmeng_gongxin: '攻心',
						ly_junshenbao_lvmeng_gongxin_info: '<span style="color: gold">出牌阶段限1次</span>,你可以观看1名其他角色的手牌并展示其中所有的<span style="color: red">♥️️</span>牌,若展示的牌数:为1,你弃置之并对其造成1点伤害;大于1,你获得其中1张.',
						ly_junshenbao_weiyan_aogu: '傲骨',
						ly_junshenbao_weiyan_aogu_info: '每当你对<span style="color: red">攻击距离</span>内的角色<span style="color: gold">造成伤害</span>后,你可以回复等量的体力并摸等量的牌.',
						ly_junshenbao_weiyan_yongmou: '勇谋',
						ly_junshenbao_weiyan_yongmou_info: '<span style="color: gold">出牌阶段限1次</span>,你可以失去任意点体力值(至多为<span style="color: red">6</span>),若如此做,本回合你出杀次数<span style="color: gold">+X</span>,进攻距离<span style="color: gold">+X</span>,并摸X张牌(X为你以此法失去的体力值).',
						ly_junshenbao_guopang_jigong: '急功',
						ly_junshenbao_guopang_jigong_info: '<span style="color: gold">回合开始时</span>,你可以摸X张牌,若如此做,<span style="color: gold">回合结束时</span>,如果你于本回合内使用牌数<span style="color: red">小于</span>X,你须弃置等量的牌(X为你当前体力值且至多为<span style="color: red">5</span>).',
						ly_junshenbao_guopang_chanxian: '馋陷',
						ly_junshenbao_guopang_chanxian_info: '每当其他角色使用的牌生效后,若你为<span style="color: red">此牌目标</span>且此牌不为延时锦囊牌,你可以视为对1名其他角色使用<span style="color: gold">同样的牌</span>,若如此做,其摸1张牌.',
						ly_junshenbao_xiahouyuan_suji: '速击',
						ly_junshenbao_xiahouyuan_suji_info: '<span style="color: gold">判定阶段开始</span>/<span style="color: red">摸牌阶段开始</span>/<span style="color: gold">出牌阶段开始</span>/<span style="color: red">弃牌阶段开始</span>时,你可以弃置1张牌,视为对1名其他角色使用1张杀.(若为<span style="color: gold">判定阶段</span>,则<span style="color: red">跳过</span>此阶段;若为<span style="color: red">摸牌阶段</span>,则此阶段摸牌数<span style="color: red">-1</span>)',
						ly_junshenbao_xiahouyuan_suzi: '肃资',
						ly_junshenbao_xiahouyuan_suzi_info: '你使用杀<span style="color: gold">击杀</span>1名角色时,你可以获得其2张牌,<span style="color: red">若如此做</span>,你摸1张牌.',
						ly_junshenbao_lusu_sancai: '散财',
						ly_junshenbao_lusu_sancai_info: '每当你<span style="color: gold">摸牌</span>后,你可以令至多等量的<span style="color: gold">其他角色</span>摸1张牌.',
						ly_junshenbao_lusu_lianmeng: '联盟',
						ly_junshenbao_lusu_lianmeng_info: '<li><span style="color: red">锁定技</span>,<span style="color: gold">游戏摸牌</span>后,你须令2名其他角色(若场上存活角色数小于3,则可指定为你)结成"盟军".<li><span style="color: red">锁定技</span>,其中1名"盟军"即将阵亡时,你须指定1名其他角色(若场上存活角色数小于3,则可指定为你)成为"盟军".<li>1名"盟军"<span style="color: gold">摸牌</span>后/<span style="color: red">弃牌</span>后,你可以令另外1名盟军执行以下效果:<br>1.若其手牌数小于前者,其摸1张牌(<span style="color: red">不触发技能</span>).<br>2.若其手牌数大于前者,其弃置1张牌(<span style="color: red">不触发技能</span>).',
						ly_junshenbao_lusu_lianmeng_line: '联盟',
						ly_junshenbao_lusu_lianmeng_line_info: '',
						ly_junshenbao_zhonghui_quanyi: '权略',
						ly_junshenbao_zhonghui_quanyi_info: '<li><span style="color: gold">友方角色</span><span style="color: red">受到伤害</span>后,你可以摸1张牌,将1张牌置于武将牌上,称为"图".<li><span style="color: red">锁定技</span>,你的<span style="color: gold">手牌上限基数</span>为X(X为你"图"的数量+3).',
						ly_junshenbao_zhonghui_fayi: '伐异',
						ly_junshenbao_zhonghui_fayi_info: '<span style="color: gold">出牌阶段限1次</span>,你可以交给1名其他角色1张"图",选择1种花色,若如此做,该角色弃置所有与声明花色<span style="color: red">相同花色</span>的手牌;若其失去了<span style="color: red">所有手牌</span>,你对其造成1点伤害.',
						ly_junshenbao_zhonghui_moubing: '谋兵',
						ly_junshenbao_zhonghui_moubing_info: '<span style="color: gold">出牌阶段开始</span>时,若你拥有"图"的数量不小于场上<span style="color: gold">友方角色</span>存活数,你可以将所有"图"移除游戏,亮出牌堆顶等同于你移除"图"数量2倍的牌(至多为<span style="color: red">10</span>),选择其中1种颜色的牌获得之并弃置其余牌,若如此做,本回合你的<span style="color: gold">手牌上限</span>、<span style="color: red">攻击距离</span>、<span style="color: gold">出杀次数</span>+X(X为你以此法获得牌的数量).',
						ly_junshenbao_zhangjiao_jilei: '雷斩',
						ly_junshenbao_zhangjiao_jilei_info: '<li><span style="color: gold">出牌阶段结束时</span>,你可以弃置所有黑色手牌,若如此做,你须选择至多等量的其他角色,视为对其使用1张<span style="color: gold">雷杀</span>;若你以此法选择的目标数<span style="color: gold">小于</span>弃置的牌数,你摸X张牌(X为两者之间的<span style="color: red">差值</span>).<li>你<span style="color: gold">造成雷电伤害</span>后,你可以进行判定,若为<span style="color: red">红色</span>/<span style="color: gold">黑色</span>,你回复1点体力/摸1张牌.',
						ly_junshenbao_zhangjiao_guilue: '鬼略',
						ly_junshenbao_zhangjiao_guilue_info: '<span style="color: gold">其他角色</span>的黑色判定牌生效后,你可以令其受到1点无来源的<span style="color: red">雷电伤害</span>,若如此做,其手牌上限<span style="color: red">-1</span>直到其回合结束,你<span style="color: gold">摸牌阶段</span>额外摸1张牌且手牌上限<span style="color: gold">+1</span>直到你回合结束.',
						ly_junshenbao_zhangjiao_tianbing: '天兵',
						ly_junshenbao_zhangjiao_tianbing_info: '<span style="color: yellow">主公技</span><li><span style="color: gold">友方角色</span>造成伤害后,可令你摸1张牌,<span style="color: gold">若如此做</span>,你须将1张牌置于武将牌上,称为"天兵".<li><span style="color: gold">回合开始</span>时,你可以观看并按任意顺序调整牌堆顶X张牌(X为你的"天兵"数).<li>你可以使用或打出"天兵".',
						ly_junshenbao_zhangjiao_tianbing_respond: '天兵',
						ly_junshenbao_zhangjiao_tianbing_respondinfo: '',
						ly_junshenbao_zhangjiao_tianbing_use: '天兵',
						ly_junshenbao_zhangjiao_tianbing_use_info: '',
						ly_junshenbao_lingtong_xuanzhan_false: '旋战',
						ly_junshenbao_lingtong_xuanzhan_false_info: '你每<span style="color: red">弃置1张牌</span>/你每<span style="color: red">受到1点伤害</span>,你可以弃置1名其他角色<span style="color: gold">区域内</span>1张牌(若为受伤,则改为<span style="color: red">2张牌</span>).',
						ly_junshenbao_lingtong_xuanzhan: '旋战',
						ly_junshenbao_lingtong_xuanzhan_info: '你每<span style="color: red">弃置1张牌</span>/你每<span style="color: red">受到1点伤害</span>,你可以弃置1名其他角色<span style="color: gold">区域内</span>1张牌(若为受伤,则改为<span style="color: red">2张牌</span>).',
						ly_junshenbao_zhenji_pianhong: '翩鸿',
						ly_junshenbao_zhenji_pianhong_info: '<span style="color: gold">回合开始</span>时,你可以声明1种颜色,展示牌堆顶1张牌,若此牌颜色与你声明的颜色<span style="color: gold">相同</span>,你获得之并重复声明流程,否则<span style="color: red">终止技能结算</span>.',
						ly_junshenbao_zhenji_wenzhao: '文昭',
						ly_junshenbao_zhenji_wenzhao_info: '你于<span style="color: gold">回合外</span>失去牌后,你可以摸1张牌.',
						ly_junshenbao_zhenji_pianghong_black: '翩鸿',
						ly_junshenbao_zhenji_pianghong_black_info: '',
						ly_junshenbao_zhenji_pianghong_red: '翩鸿',
						ly_junshenbao_zhenji_pianghong_red_info: '',
						ly_junshenbao_zhangxiu_congjian: '从谏',
						ly_junshenbao_zhangxiu_congjian_info: '当你成为其他角色<span style="color: gold">非延时锦囊</span>的目标时,你可以交给其1张花色与此牌相同的手牌令此牌对你无效,<span style="color: red">若如此做</span>,此牌结算后,如果没有造成过伤害,你获得之,否则你摸1张牌.',
						ly_junshenbao_zhangxiu_baiming: '百鸣',
						ly_junshenbao_zhangxiu_baiming_info: '<span style="color: purple">限定技</span>,<span style="color: gold">出牌阶段</span>,你可以失去1点体力上限,获得场上所有描述中带有"<span style="color: red">杀</span>"的技能直到回合结束,若如此做,<span style="color: gold">回合结束</span>时,你重置此技能并获得技能"雄据".',
						ly_junshenbao_zhangxiu_baiming_clear: '百鸣',
						ly_junshenbao_zhangxiu_baiming_clear_info: '',
						ly_junshenbao_zhangxiu_baiming_update: '百鸣',
						ly_junshenbao_zhangxiu_baiming_update_info: '<span style="color: gold">出牌阶段</span>限1次,你可以展示所有手牌,选择攻击距离内至多X名其他角色(X为你手牌颜色的差值),视为对其使用1张杀.',
						ly_junshenbao_zhangxiu_xiongju: '雄据',
						ly_junshenbao_zhangxiu_xiongju_info: '<span style="color: gold">全场回合开始</span>时,你可以摸1张牌,若摸牌后你的手牌数<span style="color: red">大于</span>当前回合角色,你须弃置1张牌.',
						ly_junshenbao_zhoutai_buqu: '不屈',
						ly_junshenbao_zhoutai_buqu_info: '<span style="color: red">锁定技</span>,当你的体力值降到0或更低时,你立即亮出并弃置牌堆顶1张牌,若此牌花色与你前次因此法亮出牌花色<span style="color: red">不同</span>,你回复体力至1点;你<span style="color: red">受到伤害</span>后,你将手牌补至X(X为你已损失的体力值且至多为<span style="color: red">5</span>).',
						ly_junshenbao_zhoutai_youzhu: '护主',
						ly_junshenbao_zhoutai_youzhu_info: '<span style="color: red">锁定技</span>,你承担<span style="color: gold">友方角色</span>受到的<span style="color: red">所有伤害</span>.',
						ly_junshenbao_jiangfei_yanxi: '衍息',
						ly_junshenbao_jiangfei_yanxi_info: '<span style="color: gold">摸牌阶段</span>开始时,若你拥有"息"的数量小于5,你可以改为将所有手牌置于武将牌上,称为"息",<span style="color: gold">若如此做</span>,你将手牌数补至<span style="color: gold">体力上限</span>.',
						ly_junshenbao_jiangfei_shoucheng: '守成',
						ly_junshenbao_jiangfei_shoucheng_info: '所有角色<span style="color: red">回合结束</span>时,若其于回合内<span style="color: red">未造成伤害</span>,你可以交给其1张"息",<span style="color: gold">若如此做</span>,其摸1张牌.',
						ly_junshenbao_spjiaxu_yongdi: '拥嫡',
						ly_junshenbao_spjiaxu_yongdi_info: '<span style="color: purple">限定技</span>,你<span style="color: red">受到伤害</span>后,可以令1名其他角色增加1点体力上限并获得1项随机技能.',
						ly_junshenbao_spjiaxu_mijian: '密笺',
						ly_junshenbao_spjiaxu_mijian_info: '<span style="color: gold">出牌阶段限1次</span>,你可以交给1名其他角色1张手牌,令其与你指定的令1名其他角色进行拼点,<span style="color: red">若如此做</span>,赢的角色弃置2张牌,输的角色失去1点体力.',
						ly_junshenbao_spjiaxu_qianlv: '千虑',
						ly_junshenbao_spjiaxu_qianlv_info: '<span style="color: red">锁定技</span>,你使用的非延时锦囊牌不能被无懈可击<span style="color: red">响应</span>;你不能被延时锦囊指定为目标.',
						ly_junshenbao_zhangren_chuanxin: '穿心',
						ly_junshenbao_zhangren_chuanxin_info: '你使用<span style="color: gold">万箭齐发</span>/<span style="color: red">杀</span>造成伤害时,可以令目标<span style="color: red">失去所有技能</span>直到其出牌阶段结束.',
						ly_junshenbao_zhangren_lingfeng: '凌锋',
						ly_junshenbao_zhangren_lingfeng_info: '<li>你使用杀<span style="color: gold">指定目标</span>后,若其<span style="color: gold">上家角色</span>/<span style="color: red">下家角色</span>为你<span style="color: gold">友方角色</span>,你可以令其弃置1张牌(若其上下家均为你<span style="color: gold">友方角色</span>,则改为弃<span style="color: red">2</span>张牌).<li><span style="color: red">锁定技</span>,若场上其他角色满足以下条件,你计算与其距离时,始终为<span style="color: gold">1</span>.<br>(其<span style="color: red">上下家</span>均为你<span style="color: gold">友方角色</span>)',
						ly_junshenbao_jiangwei_yaozhan: '邀战',
						ly_junshenbao_jiangwei_yaozhan_info: '<span style="color: red">其他角色</span>的<span style="color: gold">出牌阶段开始时</span>,你可以弃置其1张牌,<span style="color: gold">若如此做</span>,其出牌阶段结束时,若你<span style="color: red">未于</span>此阶段受到伤害,你视为对其使用1张决斗.',
						ly_junshenbao_jiangwei_chengzhi: '承志',
						ly_junshenbao_jiangwei_chengzhi_info: '<span style="color: purple">觉醒技</span>,<span style="color: gold">回合开始时</span>,若你<span style="color: gold">手牌数</span>/<span style="color: red">体力值</span>为全场最小(不为之一),你须增加1点体力上限并回复1点体力,将手牌补至X(X为你的体力上限且至多为<span style="color: red">5</span>),获得技能"卜星".',
						ly_junshenbao_jiangwei_buxing: '卜星',
						ly_junshenbao_jiangwei_buxing_info: '全场<span style="color: gold">回合开始时</span>,你可以观看牌堆顶1张牌,选择将其置于牌堆顶或牌堆底,<span style="color: gold">若如此做</span>,你可以将1张手牌作为此牌使用之.',
						ly_junshenbao_dingfeng_lenfeng: '冷锋',
						ly_junshenbao_dingfeng_lenfeng_info: '你使用杀<span style="color: gold">指定目标</span>后,你可以令你<span style="color: red">攻击距离</span>内的1名不为此杀目标的合法目标成为此杀<span style="color: red">额外目标</span>,<span style="color: gold">若如此做</span>,你摸1张牌.',
						ly_junshenbao_dingfeng_jijun: '疾军',
						ly_junshenbao_dingfeng_jijun_info: '<span style="color: gold">出牌阶段</span>限1次,你可以弃置1张手牌指定1名<span style="color: red">其他角色</span>,<span style="color: gold">若如此做</span>,你获得以下效果直到回合结束.<br>(对其使用牌无<span style="color: red">距离限制</span>,使用杀无<span style="color: red">次数限制</span>,<span style="color: red">无视防具</span>)',
						ly_junshenbao_caoren_zhenshou: '镇守',
						ly_junshenbao_caoren_zhenshou_info: '<span style="color: gold">回合结束时</span>,你可以摸X张牌(X为场上<span style="color: red">攻击距离</span>内含有你的角色数+3),将武将牌<span style="color: red">翻面</span>并获得3点护甲直到你<span style="color: gold">出牌阶段开始</span>.',
						ly_junshenbao_caoren_kuiwei: '溃围',
						ly_junshenbao_caoren_kuiwei_info: '当你的武将牌<span style="color: gold">翻回正面</span>时,你可以<span style="color: red">弃置</span>1张牌,移动场上1张牌;当你的武将牌<span style="color: gold">翻回正面</span>时,你可以视为对场上任意名<span style="color: red">攻击距离</span>内含有你的<span style="color: red">其他角色</span>使用1张杀.',
						ly_junshenbao_zuoci_xianmen: '轮回',
						ly_junshenbao_zuoci_xianmen_info: '<span style="color: red">锁定技</span>,每当你使用1张<span style="color: gold">基本牌</span>/<span style="color: red">装备牌</span>/<span style="color: gold">锦囊牌</span>,你从牌堆里获得1张<span style="color: gold">装备牌</span>/<span style="color: red">锦囊牌</span>/<span style="color: gold">基本牌</span>.',
						ly_junshenbao_zuoci_lunhui: '仙门',
						ly_junshenbao_zuoci_lunhui_info: '<span style="color: red">锁定技</span>,每轮<span style="color: gold">游戏开始</span>时,全场角色依次<span style="color: red">弃置</span>区域内所有牌(<span style="color: red">不触发技能</span>),摸X张牌(X为其以此法弃置的牌数且至多为其<span style="color: red">体力值</span>+3)(<span style="color: red">不触发技能</span>).',
						ly_junshenbao_erzhang_fengjian: '讽谏',
						ly_junshenbao_erzhang_fengjian_info: '<span style="color: gold">出牌阶段</span>,你可以将1张装备牌置于1名<span style="color: red">其他角色</span>装备区内(<span style="color: red">不替换原有装备</span>),你摸1张牌.',
						ly_junshenbao_erzhang_xiuzheng: '修政',
						ly_junshenbao_erzhang_xiuzheng_info: '<span style="color: gold">回合结束时</span>,你可以将所有花色的手牌各<span style="color: red">弃置</span>至1张,将手牌<span style="color: gold">翻倍</span>.',
						ly_junshenbao_zhoucang_zhongyong: '忠胆',
						ly_junshenbao_zhoucang_zhongyong_info: '每种牌名每回合<span style="color: red">限1次</span>,你使用的<span style="color: red">伤害牌</span>进入弃牌堆后,你可以将此牌交给1名<span style="color: red">其他角色</span>,<span style="color: gold">若如此做</span>,其视为对你指定的另1名<span style="color: red">其他角色</span>使用1张杀.',
						ly_junshenbao_huangquan_dianhu: '点虎',
						ly_junshenbao_huangquan_dianhu_info: '<li><span style="color: gold">游戏摸牌</span>后,你须指定1名<span style="color: red">其他角色</span>成为<span style="color: red">点虎目标</span>;<li><span style="color: red">锁定技</span>,<span style="color: red">点虎目标</span>受到伤害后,若伤害来源为<span style="color: gold">友方角色</span>,你与其各摸1张牌;<li><span style="color: red">锁定技</span>,<span style="color: red">点虎目标</span>阵亡后,你须重新指定<span style="color: red">点虎目标</span>.',
						ly_junshenbao_huangquan_zhongjian: '忠谏',
						ly_junshenbao_huangquan_zhongjian_info: '<span style="color: gold">出牌阶段</span>限1次,你可以令1名<span style="color: red">其他角色</span>摸2张牌,其选择使用1张牌.',
						ly_junshenbao_gongsunyuan_huaiyi: '揣私',
						ly_junshenbao_gongsunyuan_huaiyi_info: '<span style="color: gold">出牌阶段开始</span>时,你可以获得任意名<span style="color: red">其他角色</span>区域内1张牌,你选择<span style="color: red">弃置</span>等量的牌,若你以此法获得的牌数不小于2,你失去1点体力.',
						ly_junshenbao_caozhi_luomei: '落梅',
						ly_junshenbao_caozhi_luomei_info: '你可以获得<span style="color: red">其他角色</span>弃置的黑色牌.',
						ly_junshenbao_caozhi_qijue: '七绝',
						ly_junshenbao_caozhi_qijue_info: '<span style="color: red">锁定技</span>,<span style="color: gold">回合结束</span>时,若你于此阶段前累计使用或打出7种不同点数的牌,你亮出牌堆顶7张牌,获得其中的非基本牌,回复1点体力并视为使用1张"酒",执行额外1个回合.',
						ly_junshenbao_fazheng_enchou: '恩仇',
						ly_junshenbao_fazheng_enchou_info: '<li><span style="color: red">锁定技</span>,当你成为其他角色<span style="color: gold">"桃"</span>/<span style="color: red">"桃园结义"</span>/<span style="color: gold">"酒"</span>/<span style="color: red">"增兵减灶"</span>的目标时,你令其摸1张牌,其可以令你摸1张牌.<li><span style="color: red">锁定技</span>,你每<span style="color: red">受到</span>1点伤害,伤害来源需选择交给你1张<span style="color: red">♥️️</span>牌,否则其失去1点体力.',
						ly_junshenbao_fazheng_fuyi: '辅翼',
						ly_junshenbao_fazheng_fuyi_info: '<span style="color: red">其他角色</span><span style="color: gold">摸牌阶段</span>开始时,其可以交给你至多2张手牌,<span style="color: gold">若如此做</span>,其额外摸等量的牌.',
						ly_junshenbao_dongyun_fubi: '辅弼',
						ly_junshenbao_dongyun_fubi_info: '<span style="color: yellow">转换技</span><br><li><span style="color: gold">出牌阶段</span>,你可以令1名手牌数<span style="color: red">小于</span>体力值的角色摸1张牌.<li><span style="color: gold">出牌阶段</span>,你可以令1名手牌数<span style="color: red">大于</span>体力值的角色弃置1张 手牌.',
						ly_junshenbao_dongyun_kuangzheng: '匡正',
						ly_junshenbao_dongyun_kuangzheng_info: '<span style="color: red">锁定技</span>,当你<span style="color: gold">有手牌</span>/<span style="color: red">没有手牌</span>时,<span style="color: gold">延时锦囊</span>与<span style="color: gold">伤害性</span>锦囊/<span style="color: red"><杀></span>指定你为目标时,取消之.',
						ly_junshenbao_luji_huaili: '怀礼',
						ly_junshenbao_luji_huaili_info: '<span style="color: gold">回合结束</span>时,你可以令1名<span style="color: red">其他角色</span>获得你上回合的手牌,你摸等量的牌(至多为<span style="color: red">3</span>).',
						ly_junshenbao_luji_shuxuan: '述玄',
						ly_junshenbao_luji_shuxuan_info: '当场上角色进行判定时,你可以声明1种花色,若其判定牌的花色与你声明的花色相同,你摸3张牌.',
					},
				};
				for (var i in ly_junshen.character) {
					ly_junshen.character[i][4].push('ext:军神包/image/' + i + '.jpg');
				}
				lib.config.all.characters.add('ly_junshen');
				lib.config.characters.add('ly_junshen');
				lib.translate.ly_junshen_character_config = '<span style="color: yellow">军</span><span style="color: red">神</span><span style="color: blue">篇</span>';
				return ly_junshen;
			});
		},
		help: {
			军神包: '<li><span style=\'color: red\'>注</span>,本扩展ai近乎完善(部分武将有专属ai),有时游戏可触发配合(比如传说中的永动机(≧ڡ≦*))<li>2019.6.9,更新武将——军神篇:"军·(曹仁,姜维,周仓,左慈,二张,丁奉)",移除"军·庞统",替换为"军·黄权";新增武将篇目——"九龙子"与"真三篇".<span style="color: red">修复</span>部分武将bug并增添部分小开关.<li>2019.6.11,新增武将篇目——"神兽篇".<li>2019.8.21,新增武将篇目——<试炼篇>、<黄巾篇>;新增武将——(因数量过多加载失败,请自行体验);修复部分bug.',
		},
		config: {
			_nei: {
				name: '投诚',
				intro: '身份变更:开启后重启游戏生效.身份局开场后<span style="color: blue">内奸</span>身份变更为<span style="color: yellow">忠臣</span>',
				init: false,
			},
			_environment: {
				name: '环境',
				intro: '公会神兽:  开启后重启游戏生效.游戏开始后每轮游戏随机刷新当前环境(陆地,海洋,天空)',
			},
		},
		package: {
			intro: '<li>本扩展发布于2019.5.12.<li>本扩展强度较高.<li>本扩展<span style="color: yellow">配音完善</span>(由于技能组的原因,部分配音不在武将界面显示).<li>本扩展可<span style="color: yellow">联机</span>.<li>特别感谢<span style="color: yellow">@诸葛均</span>提供的部分武将素材.<li>若有bug,请于各大群内<span style="color: yellow">@冷雨</span>.<li>不定时更新.<li>更新日志请移步<span style="color: yellow">帮助</span>.<li><span style="color: red">版权为原作者所有</span>(扩展这东西应该有版权这东西吧,应该吧(´-ωก`)).<br><span style=\'color: gold\'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>',
			author: '冷雨磅礴',
			version: '1.0',
		},
	};
});

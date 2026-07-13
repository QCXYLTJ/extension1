import { lib, get, _status, ui, game, ai } from '../../noname.js';
game.import('character', function () {
	const XWTR = {
		name: 'XWTR',
		connect: true,
		character: {
			xjzh_zxzh_jiangningzhi: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_zxzh_dianling', 'xjzh_zxzh_tusu'],
				names: '姜|凝脂',
				rank: 'rare',
			},
			xjzh_zxzh_linmo: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_zxzh_moyu', 'xjzh_zxzh_zhenwen', 'xjzh_zxzh_jinyan'],
				names: '林|默',
				rank: 'legend',
			},
			xjzh_zxzh_yumuren: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_zxzh_shiqiao', 'xjzh_zxzh_baoxin'],
				names: '余|木人',
				rank: 'epic',
			},
			xjzh_zxzh_linlingshiyu: {
				sex: 'double',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_zxzh_leifa', 'xjzh_zxzh_jianxin', 'xjzh_zxzh_jiezhen'],
				names: '林|凌-林|诗雨',
				rank: 'legend',
			},
			xjzh_zxzh_yuanyuan: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_zxzh_renxin', 'xjzh_zxzh_xianghun', 'xjzh_zxzh_xunqing'],
				names: '冯|媛媛',
				rank: 'legend',
			},
			xjzh_zxzh_mufeng: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_zxzh_yufeng', 'xjzh_zxzh_fengzhen', 'xjzh_zxzh_zonghuo'],
				names: '沐|风',
				rank: 'legend',
			},
			xjzh_zxzh_moqinwu: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_zxzh_shoutao', 'xjzh_zxzh_taoyuan', 'xjzh_zxzh_qiwu'],
				names: '莫|轻舞',
				rank: 'legend',
			},
			xjzh_zxzh_moqinyan: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_zxzh_cangjian', 'xjzh_zxzh_jiantai', 'xjzh_zxzh_yujian'],
				names: '莫|轻言',
				rank: 'legend',
			},
			xjzh_zxzh_linziyan: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_zxzh_leifax', 'xjzh_zxzh_leiyu', 'xjzh_zxzh_tianxin'],
				names: '莫|轻言',
				rank: 'legend',
			},
			xjzh_poe_nvwu: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_choice2', 'xjzh_poe_huoqiu', 'xjzh_poe_mishu', 'xjzh_poe_liequan', 'xjzh_poe_zhaohuan'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_poe_yuansushi: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_choice', 'xjzh_poe_huiliu', 'xjzh_poe_guangta', 'xjzh_poe_sangzhong', 'xjzh_poe_suxing', 'xjzh_poe_bilei', 'xjzh_poe_qinhe'],
				names: 'null|null',
				rank: 'legend',
				isShenhua: true,
			},
			xjzh_poe_yuhuoshi: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_poe_choice', 'xjzh_poe_zhaohuan', 'xjzh_poe_yuquan', 'xjzh_poe_huoji', 'xjzh_poe_feiteng', 'xjzh_poe_xianji', 'xjzh_poe_shenyou', 'xjzh_poe_shikui'],
				names: 'null|null',
				rank: 'legend',
				isShenhua: true,
			},
			xjzh_poe_diyuliequan: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_ranhuo'],
				names: 'null|null',
				rank: 'legend',
				isZhaohuan: true,
			},
			xjzh_poe_kuloumushi: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_fusu'],
				names: 'null|null',
				rank: 'legend',
				isZhaohuan: true,
			},
			xjzh_poe_kulouzonghuozhe: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_zonghuo'],
				names: 'null|null',
				rank: 'legend',
				isZhaohuan: true,
			},
			xjzh_poe_kuloufengbaofashi: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_fengbao'],
				names: 'null|null',
				rank: 'legend',
				isZhaohuan: true,
			},
			xjzh_poe_juedouzhe: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_choice2', 'xjzh_poe_jianfeng', 'xjzh_poe_sidou', 'xjzh_poe_tiaozhan'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_poe_chuxing: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_choice', 'xjzh_poe_zhenya', 'xjzh_poe_zaixing', 'xjzh_poe_lengxue', 'xjzh_poe_shixue', 'xjzh_poe_canbao', 'xjzh_poe_yingxing'],
				names: 'null|null',
				rank: 'legend',
				isShenhua: true,
			},
			xjzh_poe_weishi: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_choice', 'xjzh_poe_jingji', 'xjzh_poe_zhuzao', 'xjzh_poe_fuchou', 'xjzh_poe_doushi', 'xjzh_poe_xueyan', 'xjzh_poe_baipiao'],
				names: 'null|null',
				rank: 'legend',
				isShenhua: true,
			},
			xjzh_poe_youxia: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_choice2', 'xjzh_poe_bingjian', 'xjzh_poe_dianjian'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_poe_ruiyan: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_choice', 'xjzh_poe_fenlie', 'xjzh_poe_tanshe', 'xjzh_poe_juji', 'xjzh_poe_jufeng', 'xjzh_poe_danmu'],
				names: 'null|null',
				rank: 'legend',
				isShenhua: true,
			},
			xjzh_poe_guizu: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_poe_shenghua'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_wzry_yuange: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_wzry_kongou', 'xjzh_wzry_miying', 'xjzh_wzry_zhiyuan'],
				names: '元|歌',
				rank: 'legend',
			},
			xjzh_wzry_libai: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_wzry_xiaxing', 'xjzh_wzry_jinjiu', 'xjzh_wzry_jiange'],
				names: '李|白',
				rank: 'legend',
			},
			xjzh_wzry_yao: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 2,
				skills: ['xjzh_wzry_xingchen', 'xjzh_wzry_liekong', 'xjzh_wzry_guichen'],
				names: '东方|曜',
				rank: 'legend',
			},
			xjzh_wzry_ganjiangmoye: {
				sex: 'double',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_wzry_jianzhong', 'xjzh_wzry_cuijian', 'xjzh_wzry_jianlai'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_wzry_haiyue: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_wzry_bieyue', 'xjzh_wzry_shunhua', 'xjzh_wzry_liuguang', 'xjzh_wzry_huanhai'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_wzry_huamulan: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_wzry_xunshou', 'xjzh_wzry_konglie', 'xjzh_wzry_daofeng'],
				names: '花|木兰',
				rank: 'legend',
			},
			xjzh_wzry_duoliya: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_wzry_huange', 'xjzh_wzry_zhulang', 'xjzh_wzry_tiannai'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_diablo_lamasi: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_diablo_hunhuo'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_diablo_moruina: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_diablo_luanshe', 'xjzh_diablo_jingshe', 'xjzh_diablo_guanzhu'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_diablo_kaxia: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_diablo_sushe', 'xjzh_diablo_yingbi', 'xjzh_diablo_jianyu'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_diablo_nataya: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_diablo_duguan', 'xjzh_diablo_xianjing', 'xjzh_diablo_baolu'],
				names: 'null|null',
				rank: 'legend',
				xjzhMp: {
					maxMp: 100,
					mp: 100,
					huixin: 0.5,
					reduce: 0,
				},
			},
			xjzh_diablo_kelike: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: [],
				names: 'null|null',
				rank: 'legend',
				xjzhMp: {
					maxMp: 100,
					mp: 0,
					huixin: 0.1,
					reduce: 0,
				},
			},
			xjzh_diablo_yafeikela: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_diablo_lingshou', 'xjzh_diablo_shilue'],
				names: 'null|null',
				rank: 'legend',
				xjzhMp: {
					maxMp: 100,
					mp: 100,
					huixin: 0.2,
					reduce: 0.3,
				},
			},
			xjzh_diablo_xiong: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_diablo_zhongou', 'xjzh_diablo_fensui'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_diablo_lang: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_diablo_leibao', 'xjzh_diablo_kuanghou'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_diablo_lilisi: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_boss_lianji', 'xjzh_boss_qiangji'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_dnf_suodeluosi: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_dnf_jianshen', 'xjzh_dnf_aoyi', 'xjzh_dnf_jianyi'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_xyj_sunwukong: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_xyj_tianhuo', 'xjzh_xyj_dongcha', 'xjzh_xyj_ruyi'],
				names: '孙|悟空',
				rank: 'legend',
			},
			xjzh_boss_lvbu: {
				sex: 'male',
				group: 'shen',
				hp: 6,
				skills: ['xjzh_boss_jiwu', 'xjzh_boss_feijiang', 'xjzh_boss_benxi', 'xjzh_boss_xiuluo'],
				names: '吕|布',
				rank: 'legend',
				isBoss: true,
				isBossAllowed: true,
			},
			xjzh_boss_zhangjiao: {
				sex: 'male',
				group: 'shen',
				hp: 4,
				skills: ['xjzh_boss_dianxing', 'xjzh_boss_qingling'],
				names: '张|角',
				rank: 'legend',
				isBoss: true,
				isBossAllowed: true,
			},
			xjzh_boss_hjbingyong: {
				sex: 'male',
				group: 'qun',
				hp: 3,
				skills: ['xjzh_boss_fubing'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_hjlishi: {
				sex: 'male',
				group: 'qun',
				hp: 3,
				skills: ['xjzh_boss_fuli'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_hjshushi: {
				sex: 'male',
				group: 'qun',
				hp: 3,
				skills: ['xjzh_boss_fushui'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_hjfangshi: {
				sex: 'male',
				group: 'qun',
				hp: 3,
				skills: ['xjzh_boss_fuhuo'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_hjguishi: {
				sex: 'male',
				group: 'qun',
				hp: 3,
				skills: ['xjzh_boss_guishu'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_geligaoli: {
				sex: 'male',
				group: 'shen',
				hp: 15,
				skills: ['xjzh_qishu_materialRemove', 'xjzh_boss_dianmao', 'xjzh_boss_dianchong', 'xjzh_boss_dianhua'],
				names: 'null|null',
				rank: 'legend',
				isBoss: true,
				isBossAllowed: true,
				isQishuBoss: true,
			},
			xjzh_boss_duruier: {
				sex: 'male',
				group: 'shen',
				hp: 18,
				skills: ['xjzh_qishu_materialRemove', 'xjzh_boss_mengdu', 'xjzh_boss_huanshen'],
				names: 'null|null',
				rank: 'legend',
				isBoss: true,
				isBossAllowed: true,
				isQishuBoss: true,
			},
			xjzh_boss_qier: {
				sex: 'male',
				group: 'shen',
				hp: 6,
				skills: ['xjzh_qishu_materialRemove', 'xjzh_boss_fusu', 'xjzh_boss_ganran', 'xjzh_boss_xuezhou'],
				names: 'null|null',
				rank: 'legend',
				isBoss: true,
				isBossAllowed: true,
				isQishuBoss: true,
			},
			xjzh_boss_bingchuanjushou: {
				sex: 'male',
				group: 'shen',
				hp: 12,
				skills: ['xjzh_qishu_materialRemove', 'xjzh_qishu_shouyu', 'xjzh_qishu_shendong', 'xjzh_qishu_feimou'],
				names: 'null|null',
				rank: 'legend',
				isBoss: true,
				isBossAllowed: true,
				isQishuBoss: true,
			},
			xjzh_boss_lilisi: {
				sex: 'female',
				group: 'shen',
				hp: 6,
				skills: ['xjzh_qishu_materialRemove', 'xjzh_boss_lianji', 'xjzh_boss_qiangji', 'xjzh_boss_zenghen'],
				names: 'null|null',
				rank: 'legend',
				isBoss: true,
				isBossAllowed: true,
				isQishuBoss: true,
			},
			xjzh_boss_waershen: {
				sex: 'male',
				group: 'shen',
				hp: 12,
				skills: ['xjzh_qishu_materialRemove', 'xjzh_boss_fennu', 'xjzh_boss_edu', 'xjzh_boss_canren'],
				names: 'null|null',
				rank: 'legend',
				isBoss: true,
				isBossAllowed: true,
				isQishuBoss: true,
			},
			xjzh_boss_ttshilian: {
				sex: 'double',
				group: '',
				hp: 0,
				skills: ['xjzh_qishu_materialRemove', 'xjzh_boss_shilian', 'xjzh_boss_shilian_intro'],
				names: 'null|null',
				rank: 'legend',
				isBoss: true,
				isQishuBoss: true,
				isZhugong: true,
			},
			xjzh_boss_yinaruisi: {
				sex: 'double',
				group: 'shen',
				hp: 12,
				skills: ['xjzh_boss_shenghui'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_masayier: {
				sex: 'double',
				group: 'shen',
				hp: 15,
				skills: ['xjzh_boss_shenghui'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_taernasha: {
				sex: 'double',
				group: 'shen',
				hp: 12,
				skills: ['xjzh_boss_shenghui'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_xiaotianshi: {
				sex: 'double',
				group: 'shen',
				hp: 4,
				skills: ['xjzh_boss_shenghui'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_datianshi: {
				sex: 'double',
				group: 'shen',
				hp: 4,
				skills: ['xjzh_boss_shenghui2', 'xjzh_boss_chiyan', 'xjzh_boss_shilian2'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_gaotianshi: {
				sex: 'double',
				group: 'shen',
				hp: 4,
				skills: ['xjzh_boss_shenghui3', 'xjzh_boss_caijue', 'xjzh_boss_shilian2'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_tianshizhang: {
				sex: 'double',
				group: 'shen',
				hp: 4,
				skills: ['xjzh_boss_shenghui4', 'xjzh_boss_caijue2', 'xjzh_boss_shenyou', 'xjzh_boss_shilian2'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_duohunzhe: {
				sex: 'double',
				group: 'shen',
				hp: 4,
				skills: ['xjzh_boss_shenghui'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_duotianshi: {
				sex: 'double',
				group: 'shen',
				hp: 4,
				skills: ['xjzh_boss_shenghui'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_boss_shachong: {
				sex: 'double',
				group: 'shen',
				hp: 4,
				skills: ['xjzh_boss_shenghui'],
				names: 'null|null',
				rank: 'legend',
				isBossAllowed: true,
				isHiddenBoss: true,
			},
			xjzh_sanguo_wenyang: {
				sex: 'male',
				group: 'wei',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_pijian', 'xjzh_sanguo_zhirui', 'xjzh_sanguo_yongjue'],
				names: '文|鸯',
				rank: 'legend',
			},
			xjzh_sanguo_zhangliao: {
				sex: 'male',
				group: 'wei',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_biyi', 'xjzh_sanguo_zhiti', 'xjzh_sanguo_cuifengx'],
				names: '张|辽',
				rank: 'legend',
			},
			xjzh_sanguo_xunyou: {
				sex: 'male',
				group: 'wei',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_qice', 'xjzh_sanguo_zhiyu'],
				names: '荀|攸',
				rank: 'legend',
			},
			xjzh_sanguo_xuzhu: {
				sex: 'male',
				group: 'wei',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_luoyi', 'xjzh_sanguo_huchi'],
				names: '许|诸',
				rank: 'legend',
			},
			xjzh_sanguo_guanlu: {
				sex: 'male',
				group: 'wei',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_busuan'],
				names: '管|辂',
				rank: 'legend',
			},
			xjzh_sanguo_caiyan: {
				sex: 'male',
				group: 'wei',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_caiqing', 'xjzh_sanguo_zhishu', 'xjzh_sanguo_beige', 'xjzh_sanguo_guihan'],
				names: '蔡|琰',
				rank: 'legend',
			},
			xjzh_sanguo_zhenfu: {
				sex: 'male',
				group: 'wei',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_luoshen', 'xjzh_sanguo_qixian', 'xjzh_sanguo_qingguo'],
				names: '甄|宓',
				rank: 'legend',
			},
			xjzh_sanguo_guojia: {
				sex: 'male',
				group: 'wei',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_guimou', 'xjzh_sanguo_tianji', 'xjzh_sanguo_tianqi'],
				names: '郭|嘉',
				rank: 'legend',
			},
			xjzh_sanguo_dianwei: {
				sex: 'male',
				group: 'wei',
				changeGroup: 'XING',
				hp: 6,
				skills: ['xjzh_sanguo_elai', 'xjzh_sanguo_tiequ'],
				names: '典|韦',
				rank: 'legend',
			},
			xjzh_sanguo_caocao: {
				sex: 'male',
				group: 'wei',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_daizhao', 'xjzh_sanguo_guixin', 'xjzh_sanguo_feiying', 'xjzh_sanguo_batu'],
				names: '曹|操',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_yueying: {
				sex: 'female',
				group: 'shu',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_qicai', 'xjzh_sanguo_jiqiao', 'xjzh_sanguo_jianqing'],
				names: '黄|月英',
				rank: 'legend',
			},
			xjzh_sanguo_zhaoyun: {
				sex: 'male',
				group: 'shu',
				changeGroup: 'XING',
				hp: 2,
				skills: ['xjzh_sanguo_juejing', 'xjzh_sanguo_longhun', 'xjzh_sanguo_peijian'],
				names: '赵|云',
				rank: 'legend',
				InitFilter: ['noZhuHp'],
			},
			xjzh_sanguo_weiyan: {
				sex: 'male',
				group: 'shu',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_kuanggu', 'xjzh_sanguo_kuangxi', 'xjzh_sanguo_aogu'],
				names: '魏|延',
				rank: 'legend',
			},
			xjzh_sanguo_kongming: {
				sex: 'male',
				group: 'shu',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_duice', 'xjzh_sanguo_zhiji', 'xjzh_sanguo_bazhen'],
				names: '诸葛|亮',
				rank: 'legend',
			},
			xjzh_sanguo_spkongming: {
				sex: 'male',
				group: 'shu',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_guanxing', 'xjzh_sanguo_xinghun', 'xjzh_sanguo_qixing'],
				names: '诸葛|亮',
				rank: 'legend',
			},
			xjzh_sanguo_huangzhong: {
				sex: 'male',
				group: 'shu',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_liegong', 'xjzh_sanguo_chuzhen', 'xjzh_sanguo_zhujian'],
				names: '黄|忠',
				rank: 'legend',
			},
			xjzh_sanguo_machao: {
				sex: 'male',
				group: 'shu',
				changeGroup: 'XING',
				hp: 2,
				maxHp: 4,
				skills: ['xjzh_sanguo_tieji', 'xjzh_sanguo_jieqiang', 'xjzh_sanguo_xiongbin'],
				names: '马|超',
				rank: 'legend',
			},
			xjzh_sanguo_pangtong: {
				sex: 'male',
				group: 'shu',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_liansuo', 'xjzh_sanguo_hengzhou', 'xjzh_sanguo_moulue'],
				names: '庞|统',
				rank: 'legend',
			},
			xjzh_sanguo_zhangfei: {
				sex: 'male',
				group: 'shu',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_shijiu', 'xjzh_sanguo_shayi', 'xjzh_sanguo_zhenhun'],
				names: '张|飞',
				rank: 'legend',
			},
			xjzh_sanguo_guanyu: {
				sex: 'male',
				group: 'shu',
				changeGroup: 'XING',
				hp: 5,
				skills: ['xjzh_sanguo_wusheng', 'xjzh_sanguo_hengdao', 'xjzh_sanguo_wushen'],
				names: '关|羽',
				rank: 'legend',
			},
			xjzh_sanguo_liubei: {
				sex: 'male',
				group: 'shu',
				changeGroup: 'XING',
				hp: 5,
				skills: ['xjzh_sanguo_longnu', 'nzry_jieying', 'xjzh_sanguo_jieyi'],
				names: '刘|备',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_espsunce: {
				sex: 'male',
				group: 'wu',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_zhawang', 'xjzh_sanguo_xingwu', 'xjzh_sanguo_jiang', 'xjzh_sanguo_hunzi'],
				names: '孙|策',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_sunquan: {
				sex: 'male',
				group: 'wu',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_zhiheng', 'xjzh_sanguo_wuyun', 'xjzh_sanguo_jiuyuan'],
				names: '孙|权',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_ganning: {
				sex: 'male',
				group: 'wu',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_youxia'],
				names: '甘|宁',
				rank: 'legend',
			},
			xjzh_sanguo_daqiao: {
				sex: 'female',
				group: 'wu',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_guose', 'xjzh_sanguo_wanrong', 'xjzh_sanguo_lixiang'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_sanguo_xiaoqiao: {
				sex: 'female',
				group: 'wu',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_tianxiang', 'xjzh_sanguo_emei', 'xjzh_sanguo_lixiang'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_sanguo_sunhao: {
				sex: 'male',
				group: 'wu',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_mingzheng', 'xjzh_sanguo_renjun'],
				names: '孙|皓',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_luxun: {
				sex: 'male',
				group: 'wu',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_shishu', 'xjzh_sanguo_wulue', 'xjzh_sanguo_liantui'],
				names: '陆|逊',
				rank: 'legend',
			},
			xjzh_sanguo_zhoutai: {
				sex: 'male',
				group: 'wu',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_buqu', 'xjzh_sanguo_fenji'],
				names: '周|泰',
				rank: 'legend',
			},
			xjzh_sanguo_dongzhuo: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 6,
				skills: ['xjzh_sanguo_lanzheng', 'xjzh_sanguo_hengzheng', 'xjzh_sanguo_baolian', 'xjzh_sanguo_linnue'],
				names: '董|卓',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_zhangjiao: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_leihun', 'xjzh_sanguo_shendao', 'xjzh_sanguo_dianjie', 'xjzh_sanguo_huangtian'],
				names: '张|角',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_spzhangjiao: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_bujiao', 'xjzh_sanguo_taiping', 'xjzh_sanguo_fangshu'],
				names: '张|角',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_lvbu: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_mashu', 'xjzh_sanguo_shenji', 'xjzh_sanguo_feijiang', 'xjzh_sanguo_jiwu'],
				names: '吕|布',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_splvbu: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['mashu', 'xjzh_sanguo_shenji', 'xjzh_sanguo_shenwei'],
				names: '吕|布',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_huaxiong: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 19,
				skills: ['xjzh_sanguo_shiyong', 'xjzh_sanguo_yaowu', 'xjzh_sanguo_yangwei'],
				names: '华|雄',
				rank: 'legend',
			},
			xjzh_sanguo_nanhua: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_shouye', 'xjzh_sanguo_xianshou', 'xjzh_sanguo_lundao'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_sanguo_simahui: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_jianjie', 'xjzh_sanguo_yinshi'],
				names: '司马|徽',
				rank: 'legend',
			},
			xjzh_sanguo_huatuo: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 2,
				maxHp: 3,
				skills: ['xjzh_sanguo_shengxin', 'xjzh_sanguo_jishi', 'xjzh_sanguo_liangyi'],
				names: '华|佗',
				rank: 'legend',
			},
			xjzh_sanguo_sphuatuo: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_xingyi', 'xjzh_sanguo_qingnang'],
				names: '华|佗',
				rank: 'legend',
			},
			xjzh_sanguo_zuoci: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_daoshu', 'xjzh_sanguo_huanhua'],
				names: '左|慈',
				rank: 'legend',
			},
			xjzh_sanguo_tongyuan: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_keluan', 'xjzh_sanguo_cuifeng', 'xjzh_sanguo_chaohuang'],
				names: '童|渊',
				rank: 'legend',
			},
			xjzh_sanguo_zhangning: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_shanxi', 'xjzh_sanguo_leijix'],
				names: '张|宁',
				rank: 'legend',
			},
			xjzh_sanguo_zhangrang: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: get.mode() == 'identity' ? Infinity : 4,
				skills: ['xjzh_sanguo_luanzheng', 'xjzh_sanguo_chanxian', 'xjzh_sanguo_shichong'],
				names: '张|让',
				rank: 'legend',
			},
			xjzh_sanguo_bogui: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_baima', 'xjzh_sanguo_yicong', 'xjzh_sanguo_muma'],
				names: '公孙|瓒',
				rank: 'legend',
			},
			xjzh_sanguo_diaochan: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_yuewu', 'xjzh_sanguo_yuehun'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_sanguo_zhangbao: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_zhoufu', 'xjzh_sanguo_yingbin'],
				names: '张|宝',
				rank: 'legend',
			},
			xjzh_sanguo_yuanshao: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_tanzhi', 'xjzh_sanguo_mingmen'],
				names: '袁|绍',
				rank: 'legend',
			},
			xjzh_sanguo_yuji: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_guhuo', 'xjzh_sanguo_chanyuan'],
				names: '于|吉',
			},
			xjzh_sanguo_zuoyou: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_tongxuan', 'xjzh_sanguo_youbian'],
				names: '左|幽',
				rank: 'legend',
			},
			xjzh_sanguo_zhongda: {
				sex: 'male',
				group: 'jin',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_yinren', 'xjzh_sanguo_bolue', 'xjzh_sanguo_biantian'],
				names: '司马|懿',
				rank: 'legend',
				isZhugong: true,
			},
			xjzh_sanguo_chunhua: {
				sex: 'female',
				group: 'jin',
				changeGroup: 'XING',
				hp: 3,
				maxHp: 4,
				skills: ['xjzh_sanguo_jueqing', 'xjzh_sanguo_shangshi', 'xjzh_sanguo_huishi'],
				names: '张|春华',
				rank: 'legend',
			},
			xjzh_sanguo_espzhangjiao: {
				sex: 'male',
				group: 'shen',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_boss_dianxing'],
				names: '张|角',
				rank: 'legend',
			},
			xjzh_sanguo_espzuoci: {
				sex: 'male',
				group: 'shen',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_sanguo_quling'],
				names: '左|慈',
				rank: 'legend',
			},
			xjzh_sanguo_espliuxie: {
				sex: 'male',
				group: 'shen',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_sanguo_tiance', 'xjzh_sanguo_tianming', 'xjzh_sanguo_moubian', 'xjzh_sanguo_zhongxing'],
				names: '刘|协',
				rank: 'legend',
			},
			xjzh_huoying_mingren: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_huoying_fenshen', 'xjzh_huoying_zuidun', 'xjzh_huoying_kaigua'],
				names: '漩涡|鸣人',
				rank: 'legend',
			},
			xjzh_huoying_zuozhu: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_huoying_qiling', 'xjzh_huoying_qianniao', 'xjzh_huoying_liudao'],
				names: '宇智波|佐助',
				rank: 'legend',
			},
			xjzh_huoying_dou: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_huoying_xianzhang', 'xjzh_huoying_sihun', 'xjzh_huoying_chuanyi'],
				names: '药师|兜',
				rank: 'legend',
			},
			xjzh_huoying_kakaxi: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_huoying_kaobei', 'xjzh_huoying_shenwei', 'xjzh_huoying_leiqie'],
				names: '旗木|卡卡西',
				rank: 'legend',
			},
			xjzh_huoying_zhishui: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_huoying_bietian', 'xjzh_huoying_shunshen', 'xjzh_huoying_xuzuo'],
				names: '宇智波|止水',
				rank: 'legend',
			},
			xjzh_meiren_linshuang: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 4,
				skills: ['xjzh_meiren_qingquan', 'xjzh_meiren_hanshuang'],
				names: '林|霜',
				rank: 'legend',
			},
			xjzh_meiren_gaoyu: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_meiren_juese', 'xjzh_meiren_xiuya', 'xjzh_meiren_shumei'],
				names: '高|宇',
				rank: 'legend',
			},
			xjzh_meiren_zhaoyushu: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_meiren_chunxiao', 'xjzh_meiren_jingzhuang', 'xjzh_meiren_lunzhuan'],
				names: '赵|玉姝',
				rank: 'legend',
			},
			xjzh_meiren_linjiasheng: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_meiren_ganling', 'xjzh_meiren_miaofa'],
				names: '林|嘉笙',
				rank: 'legend',
			},
			xjzh_meiren_wuyufeng: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_meiren_meihun', 'xjzh_meiren_tianzi'],
				names: '吴|玉凤',
				rank: 'legend',
			},
			xjzh_meiren_huangyuke: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_meiren_huizhi', 'xjzh_meiren_lanxin', 'xjzh_meiren_gupan'],
				names: '黄|毓珂',
				rank: 'legend',
			},
			xjzh_meiren_xiangwanru: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_meiren_rouqing', 'xjzh_meiren_jiaqi', 'xjzh_meiren_huimeng', 'xjzh_meiren_xianyou'],
				names: '向|婉茹',
				rank: 'legend',
			},
			xjzh_meiren_huangdanxue: {
				sex: 'female',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_meiren_zhongqing', 'xjzh_meiren_yiqing', 'xjzh_meiren_shangqing'],
				names: '黄|丹雪',
				rank: 'legend',
			},
			xjzh_qixia_daxiongxiaomao: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_qixia_qice', 'xjzh_qixia_xiongmao'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_qixia_maybe: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 6,
				skills: ['xjzh_qixia_jiyuan', 'xjzh_qixia_jibian'],
				names: 'null|null',
				rank: 'legend',
			},
			xjzh_qixia_mumuxiao: {
				sex: 'male',
				group: 'qun',
				changeGroup: 'XING',
				hp: 3,
				skills: ['xjzh_qixia_tubian'],
				names: 'null|null',
				rank: 'legend',
			},
		},
		characterSort: {
			XWTR: {
				XWCS_meiren: ['xjzh_meiren_linshuang', 'xjzh_meiren_gaoyu', 'xjzh_meiren_zhaoyushu', 'xjzh_meiren_linjiasheng', 'xjzh_meiren_wuyufeng', 'xjzh_meiren_huangyuke', 'xjzh_meiren_xiangwanru', 'xjzh_meiren_huangdanxue'],
				XWCS_qixia: ['xjzh_qixia_mumuxiao', 'xjzh_qixia_maybe', 'xjzh_qixia_daxiongxiaomao'],
				XWDM_huoying: ['xjzh_huoying_zhishui', 'xjzh_huoying_mingren', 'xjzh_huoying_zuozhu', 'xjzh_huoying_dou', 'xjzh_huoying_kakaxi'],
				XWSG_wei: ['xjzh_sanguo_wenyang', 'xjzh_sanguo_zhangliao', 'xjzh_sanguo_xunyou', 'xjzh_sanguo_xuzhu', 'xjzh_sanguo_guanlu', 'xjzh_sanguo_caocao', 'xjzh_sanguo_dianwei', 'xjzh_sanguo_caiyan', 'xjzh_sanguo_zhenfu', 'xjzh_sanguo_guojia'],
				XWSG_shu: ['xjzh_sanguo_liubei', 'xjzh_sanguo_zhaoyun', 'xjzh_sanguo_weiyan', 'xjzh_sanguo_yueying', 'xjzh_sanguo_kongming', 'xjzh_sanguo_spkongming', 'xjzh_sanguo_huangzhong', 'xjzh_sanguo_machao', 'xjzh_sanguo_pangtong', 'xjzh_sanguo_zhangfei', 'xjzh_sanguo_guanyu'],
				XWSG_wu: ['xjzh_sanguo_daqiao', 'xjzh_sanguo_xiaoqiao', 'xjzh_sanguo_espsunce', 'xjzh_sanguo_sunquan', 'xjzh_sanguo_ganning', 'xjzh_sanguo_sunhao', 'xjzh_sanguo_luxun', 'xjzh_sanguo_zhoutai'],
				XWSG_qun: ['xjzh_sanguo_huaxiong', 'xjzh_sanguo_nanhua', 'xjzh_sanguo_zuoyou', 'xjzh_sanguo_simahui', 'xjzh_sanguo_yuji', 'xjzh_sanguo_sphuatuo', 'xjzh_sanguo_yuanshao', 'xjzh_sanguo_zhangbao', 'xjzh_sanguo_diaochan', 'xjzh_sanguo_bogui', 'xjzh_sanguo_zhangrang', 'xjzh_sanguo_huatuo', 'xjzh_sanguo_dongzhuo', 'xjzh_sanguo_zuoci', 'xjzh_sanguo_tongyuan', 'xjzh_sanguo_zhangjiao', 'xjzh_sanguo_zhangning', 'xjzh_sanguo_spzhangjiao', 'xjzh_sanguo_splvbu', 'xjzh_sanguo_lvbu'],
				XWSG_jin: ['xjzh_sanguo_zhongda', 'xjzh_sanguo_chunhua'],
				XWSG_shen: ['xjzh_sanguo_espzhangjiao', 'xjzh_sanguo_espzuoci', 'xjzh_sanguo_espliuxie'],
				XWTR_zxzh: ['xjzh_zxzh_jiangningzhi', 'xjzh_zxzh_linmo', 'xjzh_zxzh_yumuren', 'xjzh_zxzh_linlingshiyu', 'xjzh_zxzh_yuanyuan', 'xjzh_zxzh_mufeng', 'xjzh_zxzh_moqinwu', 'xjzh_zxzh_linziyan', 'xjzh_zxzh_moqinyan'],
				XWTR_poe: ['xjzh_poe_yuhuoshi', 'xjzh_poe_yuansushi', 'xjzh_poe_nvwu', 'xjzh_poe_youxia', 'xjzh_poe_juedouzhe', 'xjzh_poe_chuxing', 'xjzh_poe_weishi', 'xjzh_poe_ruiyan', 'xjzh_poe_guizu'],
				XWTR_wzry: ['xjzh_wzry_yuange', 'xjzh_wzry_duoliya', 'xjzh_wzry_huamulan', 'xjzh_wzry_haiyue', 'xjzh_wzry_libai', 'xjzh_wzry_yao', 'xjzh_wzry_ganjiangmoye'],
				XWTR_diablo: ['xjzh_diablo_lilisi', 'xjzh_diablo_kelike', 'xjzh_diablo_nataya', 'xjzh_diablo_yafeikela', 'xjzh_diablo_lamasi', 'xjzh_diablo_moruina', 'xjzh_diablo_kaxia'],
				XWTR_dnf: ['xjzh_dnf_suodeluosi'],
				XWTR_xyj: ['xjzh_xyj_sunwukong'],
			},
		},
		characterFilter: {
			xjzh_boss_waershen(mode) {
				if (mode != 'boss' || !lib.config.xjzh_qishuyaojianOption) return false;
			},
			xjzh_boss_geligaoli(mode) {
				if (mode != 'boss' || !lib.config.xjzh_qishuyaojianOption) return false;
			},
			xjzh_boss_duruier(mode) {
				if (mode != 'boss' || !lib.config.xjzh_qishuyaojianOption) return false;
			},
			xjzh_boss_qier(mode) {
				if (mode != 'boss' || !lib.config.xjzh_qishuyaojianOption) return false;
			},
			xjzh_boss_bingchuanjushou(mode) {
				if (mode != 'boss' || !lib.config.xjzh_qishuyaojianOption) return false;
			},
			xjzh_boss_lilisi(mode) {
				if (mode != 'boss' || !lib.config.xjzh_qishuyaojianOption) return false;
			},
			xjzh_boss_lvbu(mode) {
				if (mode != 'boss') return false;
			},
			xjzh_boss_zuoyou(mode) {
				if (mode != 'boss') return false;
			},
			xjzh_boss_zhangjiao(mode) {
				if (mode != 'boss') return false;
			},
			xjzh_boss_hjbingyong(mode) {
				return false;
			},
			xjzh_boss_hjlishi(mode) {
				return false;
			},
			xjzh_boss_hjshushi(mode) {
				return false;
			},
			xjzh_boss_hjfangshi(mode) {
				return false;
			},
			xjzh_boss_hjguishi(mode) {
				return false;
			},
			xjzh_sanguo_yuji(mode) {
				if (mode == 'identity') return true;
			},
			xjzh_diablo_lamasi(mode) {
				if (mode == 'identity') return true;
			},
			xjzh_diablo_xiong(mode) {
				return false;
			},
			xjzh_diablo_lang(mode) {
				return false;
			},
			xjzh_dnf_jianshen(mode) {
				return false;
			},
			xjzh_dnf_shengqi(mode) {
				return false;
			},
		},
		characterTitle: {
			xjzh_meiren_linshuang: '凛冬已至',
			xjzh_meiren_gaoyu: '绝色倾国',
			xjzh_meiren_zhaoyushu: '对镜红妆',
			xjzh_meiren_linjiasheng: '甘霖如瀑',
			xjzh_meiren_wuyufeng: '天姿绰约',
			xjzh_meiren_huangyuke: '蕙质兰心',
			xjzh_meiren_xiangwanru: '婉如清扬',
			xjzh_meiren_huangdanxue: '伤情别恋',
			xjzh_qixia_daxiongxiaomao: '无字天书',
			xjzh_qixia_maybe: '侠肝义胆',
			xjzh_qixia_mumuxiao: '颖悟绝伦',
			xjzh_huoying_mingren: '命运之子',
			xjzh_huoying_zuozhu: '须佐之男',
			xjzh_huoying_dou: '蛇岛异仙',
			xjzh_huoying_kakaxi: '拷贝忍者',
			xjzh_huoying_zhishui: '瞬身止水',
			xjzh_sanguo_wenyang: '万将披靡',
			xjzh_sanguo_espsunce: '江东小霸王',
			xjzh_sanguo_chunhua: '冷血皇后',
			xjzh_sanguo_huaxiong: '恃勇扬威',
			xjzh_sanguo_nanhua: '齐物逍遥',
			xjzh_sanguo_zuoyou: '玄奇百变',
			xjzh_sanguo_espzuoci: '驱神役鬼',
			xjzh_sanguo_sunquan: '少年贤君',
			xjzh_sanguo_zhaoyun: '龙威虎胆',
			xjzh_sanguo_zuoci: '幻化万千',
			xjzh_sanguo_ganning: '锦帆游侠',
			xjzh_sanguo_weiyan: '嗜血独狼',
			xjzh_sanguo_yueying: '奇巧灵心',
			xjzh_sanguo_kongming: '卧龙腾宇',
			xjzh_sanguo_spkongming: '七星归命',
			xjzh_sanguo_daqiao: '矜持之花',
			xjzh_sanguo_xiaoqiao: '仙姿玉质',
			xjzh_sanguo_caiyan: '遗世才女',
			xjzh_sanguo_huangzhong: '箭无虚发',
			xjzh_sanguo_dongzhuo: '揽政祸国',
			xjzh_sanguo_machao: '西凉锦玉',
			xjzh_sanguo_huatuo: '圣手回春',
			xjzh_sanguo_zhongda: '鹰视狼顾',
			xjzh_sanguo_tongyuan: '北地枪王',
			xjzh_sanguo_pangtong: '凤鸣岐山',
			xjzh_sanguo_zhangfei: '万夫莫当',
			xjzh_sanguo_guanyu: '忠义无双',
			xjzh_sanguo_zhangjiao: '天公将军',
			xjzh_sanguo_spzhangjiao: '黄天当立',
			xjzh_sanguo_zhangning: '大贤后人',
			xjzh_sanguo_splvbu: '神鬼无前',
			xjzh_sanguo_lvbu: '人中无敌',
			xjzh_sanguo_zhenfu: '洛水浮波',
			xjzh_sanguo_sunhao: '啸天亢声',
			xjzh_sanguo_luxun: '儒生雄才',
			xjzh_sanguo_zhoutai: '历战之躯',
			xjzh_sanguo_guojia: '天妒英杰',
			xjzh_sanguo_dianwei: '古之恶来',
			xjzh_sanguo_liubei: '龙怒之火',
			xjzh_sanguo_caocao: '绝世枭雄',
			xjzh_sanguo_zhangrang: '祸国殃民',
			xjzh_sanguo_bogui: '白马义从',
			xjzh_sanguo_diaochan: '美撼凡尘',
			xjzh_sanguo_espliuxie: '炎汉中兴',
			xjzh_sanguo_guanlu: '问天通神',
			xjzh_sanguo_xuzhu: '虎痴',
			xjzh_sanguo_xunyou: '谋主',
			xjzh_sanguo_zhangbao: '地公将军',
			xjzh_sanguo_yuanshao: '贪智寡断',
			xjzh_sanguo_zhangliao: '雁门刑天',
			xjzh_sanguo_sphuatuo: '圣手仁心',
			xjzh_sanguo_yuji: '太平道人',
			xjzh_sanguo_simahui: '水镜先生',
			xjzh_zxzh_jiangningzhi: '柔荑凝脂',
			xjzh_zxzh_linlingshiyu: '剑术双绝',
			xjzh_zxzh_yuanyuan: '魂牵梦萦',
			xjzh_zxzh_mufeng: '风中奇杰',
			xjzh_zxzh_moqinwu: '一舞倾城',
			xjzh_zxzh_linziyan: '雷法随心',
			xjzh_zxzh_moqinyan: '铸剑冶魂',
			xjzh_zxzh_yumuren: '拾樵抱薪',
			xjzh_zxzh_linmo: '万法同源',
			xjzh_poe_nvwu: '控火专家',
			xjzh_poe_yuansushi: '元素大师',
			xjzh_poe_yuhuoshi: '恶魔炼狱',
			xjzh_poe_juedouzhe: '竞技专家',
			xjzh_poe_chuxing: '冷血屠夫',
			xjzh_poe_weishi: '抵抗大师',
			xjzh_poe_youxia: '箭术专家',
			xjzh_poe_ruiyan: '神箭精灵',
			xjzh_poe_guizu: '天生贵族',
			xjzh_wzry_libai: '青莲剑仙',
			xjzh_wzry_yao: '星辰之子',
			xjzh_wzry_ganjiangmoye: '淬命双剑',
			xjzh_wzry_haiyue: '永夜之心',
			xjzh_wzry_huamulan: '传说之刃',
			xjzh_wzry_duoliya: '人鱼公主',
			xjzh_wzry_yuange: '无间傀儡',
			xjzh_diablo_yafeikela: '德鲁伊领袖',
			xjzh_diablo_lamasi: '初代死灵法师',
			xjzh_diablo_moruina: '始祖游侠',
			xjzh_diablo_kaxia: '罗格领袖',
			xjzh_diablo_nataya: '潜影杀手',
			xjzh_dnf_suodeluosi: '极诣剑圣',
			xjzh_xyj_sunwukong: '破妄金瞳',
			xjzh_boss_zuoyou: '玄妙无双',
			xjzh_boss_lvbu: '武之化身',
			xjzh_boss_zhangjiao: '太平道人',
			xjzh_boss_lilisi: '人类之母',
			xjzh_boss_waershen: '恶念之源',
			xjzh_boss_duruier: '痛苦之王',
			xjzh_boss_geligaoli: '流电圣徒',
			xjzh_boss_bingchuanjushou: '寒霜支柱',
			xjzh_boss_qier: '始祖蝙蝠',
		},
		dynamicTranslate: {
			xjzh_boss_qiangji(player) {
				return '你受到伤害后,你可以视为使用一张上一次对你造成伤害的牌,你展示牌堆顶一张牌直到其花色、点数均与这张牌不同,并获得之前展示的所有牌,技能结算后,你立即结束当前回合并执行一个额外的回合'; //QQQ
			},
			xjzh_boss_lianji(player) {
				let storage = player.storage.xjzh_boss_lianji;
				let str = `锁定技,你每使用<span style=\"color: #FF0000\">${storage.get('use')}</span>张基本牌/非延时锦囊牌,你的下一张非延时锦囊牌/基本牌额外结算<span style=\"color: #0000FF\">${storage.get('count')}</span>次`;
				return str;
			},
			xjzh_boss_dianxing(player) {
				if (!player.storage.xjzh_boss_dianxing) {
					var str = '出牌阶段限一次,你可以弃置一张牌令一名敌方角色判定,若判定牌颜色与你弃置的牌颜色一致,你令其受到一点雷电伤害,你可以重复此流程;首个回合开始时、10的倍数个回合开始时、你的回合被跳过时、你的武将牌翻至背面时,你进行一次判定,若结果为♠️️2-9,你令场上所有敌方角色受到3点雷电伤害';
					var str2 = ',若此时场上有阵亡的黄巾兵,你随机召集一名黄巾兵进入游戏;第50个回合开始前,你可以选择改变此技能形态';
					if (get.mode() == 'boss') str += str2;
					return str;
				} else {
					if (player.storage.xjzh_boss_dianxing == 1) {
						var str = '出牌阶段限一次,你可以弃置一张牌令至多两名敌方角色判定,若判定牌颜色与你弃置的牌颜色一致,你令其受到一点雷电伤害;首个回合开始时、10的倍数个回合开始时、你的回合被跳过时、你的武将牌翻至背面时,你进行一次判定,若结果为♠️️2-9,你令场上所有敌方角色受到3点雷电伤害';
					}
					if (player.storage.xjzh_boss_dianxing == 2) {
						var str = "出牌阶段限一次,你可以弃置一张牌令一名敌方角色判定,若判定牌颜色与你弃置的牌颜色一致,你令其与其<a style='color: #FF0000' href=\"javascript:window.xjzhIntroduce('xjzh_intro_fujin');\">附近</a>友方角色受到一点雷电伤害;首个回合开始时、10的倍数个回合开始时、你的回合被跳过时、你的武将牌翻至背面时,你进行一次判定,若结果为♠️️2-9,你令场上所有敌方角色受到3点雷电伤害";
					}
					if (player.storage.xjzh_boss_dianxing == 3) {
						var str = "出牌阶段限一次,你可以弃置一张牌令一名敌方角色判定,若判定牌花色与你弃置的牌花色一致,你令其受到一点雷电伤害并<a style='color: #FF0000' href=\"javascript:window.xjzhIntroduce('xjzh_intro_gandian');\">感电</a>,你摸一张牌并可以重复此流程;首个回合开始时、10的倍数个回合开始时、你的回合被跳过时、你的武将牌翻至背面时,你进行一次判定,若结果为♠️️2-9,你令场上所有敌方角色受到3点雷电伤害";
					}
					if (player.storage.xjzh_boss_dianxing == 4) {
						var str = '出牌阶段限两次,你可以弃置一张牌令一名敌方角色判定,若判定牌颜色与你弃置的牌颜色一致,你令其受到一点雷电伤害,否则你弃置一张牌,你可以重复此流程;首个回合开始时、10的倍数个回合开始时、你的回合被跳过时、你的武将牌翻至背面时,你进行一次判定,若结果为♠️️2-9,你令场上所有敌方角色受到3点雷电伤害';
					}
					var str2 = ',若此时场上有阵亡的黄巾兵,你随机召集一名黄巾兵进入游戏';
					if (get.mode() == 'boss') str += str2;
					return str;
				}
			},
			xjzh_boss_fennu(player) {
				var str = '锁定技,你的回合开始前,';
				if (player.hp > player.maxHp / 2) {
					str += '你选择获得1个';
				} else {
					str += '你选择获得至多3个';
				}
				str += '等级小于5的奇术要件效果,移除你已获得的奇术要件效果,若你的体力值不大于你的体力上限的1/3,则视为场上其他角色依次对自己使用一张【杀】';
				return str;
			},
			xjzh_boss_dianchong(player) {
				var str = '锁定技,当你受到/造成雷属性伤害后,你获得等量<电冲>标记并令其获得1层感电;当你有<电冲>标记时,你造成伤害有';
				var num = 2 * player.countMark('xjzh_boss_dianchong');
				str += num + '％几率暴击';
				return str;
			},
			xjzh_boss_dianhua(player) {
				var str = '出牌阶段,若你有<电冲>标记,你可以弃置1枚<电冲>标记并展示牌堆顶一张牌,若此牌花色为♠️️,你对一名其他角色造成一点雷属性伤害,否则你获得此牌;感电的角色执行摸牌、出牌阶段时有';
				var num = 2 * player.countMark('xjzh_boss_dianchong');
				str += num + '％几率改为你执行';
				return str;
			},
			xjzh_boss_mengdu(player) {
				var str = '锁定技,你造成的所有伤害视为毒属性伤害,且你造成毒属性伤害有' + player.hp * 10 + '％几率令其获得一层中毒,因你而中毒的目标获得的中毒无层数上限;当你令一名角色中毒时,你摸x张牌(x为其武将牌上的中毒层数);你防止获得中毒';
				return str;
			},
			xjzh_boss_shenghui4(player) {
				var num = player.getDamagedHp();
				var num2 = 1;
				if (player.hasSkill('xjzh_boss_caijue2_on')) {
					[num, num2] = [num2, num];
				}
				return `锁定技,你始终跳过弃牌阶段;你的回合内,若你已受伤,你使用基本牌额外结算${num}次,否则你使用非延时锦囊牌额外结算${num2}次`;
			},
			xjzh_wzry_daofeng(player) {
				let str = '转换技,你的回合开始时,你获得附近所有角色各一张牌';
				let str2 = '阴:每个角色出牌阶段开始时,若场上有<巡>,你可以展示并从场上<巡>中弃置至多4张花色不一致的牌,对一名其他角色造成等量伤害';
				let str3 = '阳:当你受到伤害或体力流失时,若场上<巡>的数量不大于4,你防止之,你可以令一名角色将一张牌置于武将牌上称为<巡>,否则你摸两张牌';
				if (player.storage.xjzh_wzry_daofeng) {
					str2 = '<span class="bluetext">' + str2 + '</span>';
				} else {
					str3 = '<span class="bluetext">' + str3 + '</span>';
				}
				return str + '<li>' + str2 + '<li>' + str3;
			},
			xjzh_diablo_shilue(player) {
				return `出牌阶段,你可以移去${Math.min(player.countMark('xjzh_diablo_lingshou'), get.xjzh_consumeMp(player))}个德鲁伊灵体贡品并将其转为魔力,若你本轮游戏未发动该技能,你获得30%灵力消耗减免.`;
			},
			xjzh_diablo_leibao(player) {
				let huixin = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_huixin');\">会心</a>`;
				return `风暴技能,出牌阶段,你可以消耗${Math.round(45 * (1 - player.xjzhReduce))}点灵力召唤一道闪电并指定${lib.skill.xjzh_diablo_leibao.level}名其他角色,对其造成1点雷属性伤害.<li>${huixin}:你有<span style="color: yellow;">${Math.round(0.35 * (1 + player.xjzhHuixin) * 100)}%</span>几率因此技能造成伤害时令其获得一层感电`;
			},
			xjzh_diablo_kuanghou(player) {
				let huixin = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_huixin');\">会心</a>`;
				return `狼人技能,出牌阶段限一次,你可以回复${Math.floor(lib.skill.xjzh_diablo_leibao.level / 5)}点体力值并回复20点灵力.<li>${huixin}:你有<span style="color: yellow;">${Math.round(0.05 * (1 + player.xjzhHuixin) * 100)}%</span>几率因此技能回复体力时回复体力至体力上限.`;
			},
			xjzh_diablo_zhongou(player) {
				let huixin = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_huixin');\">会心</a>`;
				return `熊人技能,锁定技,你使用[伤害]卡牌只能指定一个目标,你使用的[伤害]卡牌无视防具,若此牌造成伤害,你可以消耗${Math.round(35 * (1 - player.xjzhReduce))}点灵力获得${lib.skill.xjzh_diablo_leibao.level}点护甲并强固${lib.skill.xjzh_diablo_leibao.level}点体力值.<li>${huixin}:你有<span style="color: yellow;">${Math.round(0.25 * (1 + player.xjzhHuixin) * 100)}%</span>几率因此技能造成伤害时令目标获得一层减速.`;
			},
			xjzh_diablo_fensui(player) {
				let huixin = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_huixin');\">会心</a>`;
				return `大地技能,锁定技,若你使用牌指定目标时未受伤,此牌结算两次;每隔6个回合,你下一次造成伤害翻倍.<li>${huixin}:你有<span style="color: yellow;">${Math.round(0.5 * (1 + player.xjzhHuixin) * 100)}%</span>几率令因此技能受到伤害的目标眩晕.`;
			},
			xjzh_diablo_duguan(player) {
				let huixin = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_huixin');\">会心</a>`;
				return `当你造成伤害时,你可以消耗${Math.round(25 * (1 - player.xjzhReduce))}点魔力令其视为毒属性伤害,你对中毒的目标造成伤害时,会心几率提高50%.<li>${huixin}:你有<span style="color: yellow;">${Math.round(0.33 * (1 + player.xjzhHuixin) * 100)}%</span>几率发动该技能时不消耗魔力;你有<span style="color: yellow;">${Math.round(0.25 * (1 + player.xjzhHuixin) * 100)}%</span>几率造成毒属性伤害时令其获得一层中毒.`;
			},
			xjzh_diablo_xianjing(player) {
				let huixin = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_huixin');\">会心</a>`;
				let cards = Array.from(ui.cardPile.childNodes).filter((card) => !player.storage.xjzh_diablo_xianjing.includes(card));
				return `出牌阶段限一次,你可以观看牌堆随机${Math.ceil(cards.length / 100)}张牌,并将其标记为<剧毒陷阱>,将这些牌洗入牌堆随机位置,当其他角色获得此牌时,其获得最大层数中毒.<li>${huixin}:其他角色获得此牌时,你有<span style="color: yellow;">${Math.round(0.2 * (1 + player.xjzhHuixin) * 100)}%</span>几率摸2张牌并获得此牌;你有30%几率回复25点魔力.`;
			},
			xjzh_diablo_baolu(player) {
				let huixin = `<a style='color: #c06d3b' href=\"javascript:game.xjzh_openDialog('xjzh_intro_huixin');\">会心</a>`;
				return `锁定技,每当你对<中毒>的角色造成1点伤害时,令此伤害视为毒属性伤害且+1.<li>${huixin}:你有<span style="color: yellow;">${Math.round(0.25 * (1 + player.xjzhHuixin) * 100)}%</span>几率发动技能〖陷阱〗.`;
			},
			xjzh_wzry_jianzhong(player) {
				let cards = player.getExpansions('xjzh_wzry_jianzhong');
				return `锁定技,每当你造成1点伤害后,你将牌堆顶1张牌置于武将牌上称为<剑>,最多${player.storage.xjzh_wzry_jianzhong}把<剑>;若你有<剑>,你造成伤害+${[...new Set(player.getExpansions('xjzh_wzry_jianzhong').map((card) => get.type(card, 'trick', player)))].length}.`;
			},
			xjzh_wzry_jianlai(player) {
				let cards = player.getExpansions('xjzh_wzry_jianzhong');
				return `锁定技,当你的<剑>不少于${player.storage.xjzh_wzry_jianzhong}时,你获得所有<剑>,你使用<剑>无次数和距离限制,〖剑来〗、〖剑冢〗的基础数量+10.`;
			},
			xjzh_zxzh_cangjian(player) {
				let str = lib.translate.xjzh_zxzh_cangjian_info,
					storage = player.storage.xjzh_zxzh_cangjian;
				if (!storage.length) return str;
				return (str += '<br><br><span style="color: #F3D22B">已视为装备</span>:' + get.translation(storage));
			},
			xjzh_zxzh_jiantai(player) {
				let num = player.storage.xjzh_zxzh_cangjian ? player.storage.xjzh_zxzh_cangjian.length : 0;
				return `锁定技,当你受到/造成伤害后,你可以展示牌堆顶${num ? num + 1 : 1}张牌,并获得其中所有的武器牌称为<剑胎>,若没有武器牌,则改为获得所有的装备牌;<剑胎>不计入手牌上限.`;
			},
			xjzh_diablo_yingbi(player) {
				let num = game.countPlayer((current) => current.inRangeOf(player));
				return `出牌阶段限一次,你可以移除所有控制效果并令你攻击范围内的所有角色获得易伤,摸${num}张牌.`;
			},
			xjzh_diablo_jianyu(player) {
				let storage = player.storage.xjzh_diablo_jianyu,
					names = get.nameList(player),
					bool = false;
				if (names.some((name) => game.xjzh_hasEquiped('xjzh_qishu_hakankouyu', name))) bool = true;
				let str = `"<br><br><span style=\"color: #F3D22B\">剩余冷却时间:${storage ? Math.floor(storage.get('cooldown') / 1000) : 0}秒.</span>`;
				return `出牌阶段,你可以视为使用一张【万箭齐发】,冷却时间${bool ? 120 * (1 - 0.425) : 120}秒.${storage ? str : ''}`;
			},
			xjzh_zxzh_renxin(player) {
				let str = `锁定技,当你失去体力后${player.awakenedSkills.includes('xjzh_zxzh_xunqing') ? '、受到伤害后及你的回合开始时' : ''},你可以判定,若为红色,你可以令至多2名角色各回复一点体力,否则你可以对至多两名角色各造成一点雷属性伤害.`;
				return str;
			},
			xjzh_sanguo_caiqing(player) {
				return `出牌阶段开始时,你可以摸${lib.skill.xjzh_sanguo_caiqing.getDrawResult(player)}张牌.`;
			},
			xjzh_sanguo_zhiheng(player) {
				return `出牌阶段限${player.getDamagedHp(true) + 1}次,你可以弃置任意张牌并摸等量的牌,若你弃置的牌每多一种花色,你额外摸一张牌.`;
			},
			xjzh_sanguo_lixiang(player) {
				let list = get.nameList(player).filter((name) => {
					return ['xjzh_sanguo_daqiao', 'xjzh_sanguo_xiaoqiao'].includes(name);
				});
				if (get.config('double_character')) {
					if (list.length >= 2) return '限定技,当你濒死时,你将武将牌随机替换为<小乔>或<大乔>之一,并回复体力至体力上限';
					else {
						if (get.is.playerNames(player, 'xjzh_sanguo_daqiao')) return '限定技,当你濒死时,你将武将牌替换为<小乔>,并回复体力至体力上限';
						else if (get.is.playerNames(player, 'xjzh_sanguo_xiaoqiao')) return '限定技,当你濒死时,你将武将牌替换为<大乔>,并回复体力至体力上限';
					}
				} else {
					if (get.is.playerNames(player, 'xjzh_sanguo_daqiao')) return '限定技,当你濒死时,你将武将牌替换为<小乔>,并回复体力至体力上限';
					else if (get.is.playerNames(player, 'xjzh_sanguo_xiaoqiao')) return '限定技,当你濒死时,你将武将牌替换为<大乔>,并回复体力至体力上限';
				}
				return '此技能不可用';
			},
			xjzh_sanguo_tiance(player) {
				var str = get.translation('xjzh_sanguo_tiance_info');
				var str2 = '限两次';
				if (!game.xjzhAchi.hasAchi('再兴炎汉', 'character')) return str;
				return str.replace('限一次', str2);
			},
			xjzh_sanguo_tianming(player) {
				var str = get.translation('xjzh_sanguo_tianming_info');
				var str2 = '限两次';
				if (!game.xjzhAchi.hasAchi('再兴炎汉', 'character')) return str;
				return str.replace('限一次', str2);
			},
			xjzh_sanguo_moubian(player) {
				var str = get.translation('xjzh_sanguo_moubian_info');
				if (!game.xjzhAchi.hasAchi('再兴炎汉', 'character')) return str;
				return str + '你可以使用或打出此牌';
			},
			xjzh_sanguo_zhongxing(player) {
				var str = get.translation('xjzh_sanguo_zhongxing_info');
				if (!game.xjzhAchi.hasAchi('再兴炎汉', 'character')) return str;
				var str2 = '限定技,主公阵亡时,若你不为主公且场上与你势力一致的角色数量为最多之一,你将身份改为主公,';
				var str3 = '获得一点体力上限并将体力回复至体力上限,';
				var str4 = '所有与你势力一致的角色改为忠臣,此时与你同一阵营的所有角色将势力改为汉,其余势力将身份改为反贼,当你阵亡时,所处的阵营直接失败';
				return str2 + str3 + str4;
			},
			xjzh_sanguo_tongxuan(player) {
				var str = '出牌阶段限' + get.cnNumber(get.info('xjzh_sanguo_tongxuan').usable) + '次、游戏开始时、你的回合结束时,你可以移除因〖通玄〗获得的技能并从除〖双生〗之外的所有增益技能中选择';
				var str2 = '<span style="color: #eb1100">' + get.translation(player.storage.xjzh_sanguo_tongxuan) + '</span>';
				var str3 = '个技能获得之';
				return str + str2 + str3;
			},
			xjzh_sanguo_youbian(player) {
				var str = '锁定技,你的准备阶段,你摸';
				if (player.storage.xjzh_sanguo_tongxuan2) {
					var str2 = get.translation(player.storage.xjzh_sanguo_tongxuan2) + '张牌,';
				} else {
					var str2 = 'x张牌(x为〖通玄〗中的为红色数字),';
				}
				var str3 = '若你已受伤,〖通玄〗中的红色数字+1';
				return str + str2 + str3;
			},
			xjzh_sanguo_quling(player) {
				var str = get.translation('xjzh_sanguo_quling_info');
				var str2 = '';
				var list = window.localStorage.getItem('xjzh_sanguo_quling');
				if (list == null) return str;
				var object = JSON.parse(list);
				var num = object.spower;
				str2 += '<br>当前拥有灵力:' + num;
				return str + '<br><span class="bluetext">' + str2 + '</span><br>';
			},
			xjzh_sanguo_liegong(player) {
				var str = lib.translate.xjzh_sanguo_liegong_info;
				var str2 = '';
				var history = player.getHistory('useCard', function (evt) {
					return evt.card && evt.card.name == 'sha';
				});
				if (!history.length) return str;
				if (typeof history[history.length - 1].card.number != 'number') return str;
				str2 += '<br>上张【杀】点数' + history[history.length - 1].card.number;
				return str + '<br><span class="bluetext">' + str2 + '</span><br>';
			},
			xjzh_sanguo_longnu(player) {
				var str0 = '锁定技,转换技,每个其他回合开始时,若你的手牌不大于你的体力值或其手牌为全场唯一最多,你获得其一张牌,其摸一张牌';
				var str1 = '阴:出牌阶段开始时,你失去一点体力并摸一张牌,你的红色手牌均视为【火杀】且无距离限制,且你可以将你的武将牌上的一张黑色<兵>万箭齐发使用(每回合限一次)直到回合结束';
				var str2 = '阳:出牌阶段开始时,你失去一点体力上限并摸一张牌,你的黑色手牌均视为【雷杀】且无使用次数限制,且你可以将你的武将牌上的一张红色<兵>当桃园结义使用(每回合限一次)直到回合结束';
				if (player.storage.xjzh_sanguo_longnu) {
					str1 = '<span class="bluetext">' + str1 + '</span>';
				} else {
					str2 = '<span class="bluetext">' + str2 + '</span>';
				}
				return str0 + '<li>' + str1 + '<li>' + str2;
			},
			xjzh_sanguo_renjun(player) {
				var str = '主公技,你将〖明政〗中的摸牌数+1改为+2;你将〖暴政〗中的中的造成伤害+1改为+2:';
				if (player.hasSkill('xjzh_sanguo_mingzheng')) str += '你的出牌阶段开始时,你视为使用一张【五谷丰登】';
				else str += '你的出牌阶段开始时,你视为使用一张【万箭齐发】';
				return str;
			},
			xjzh_sanguo_jieqiang(player) {
				let num = Math.max(player.getDamagedHp(), player.getHp(true));
				return `锁定技,你于摸牌阶段额外摸${num}张牌;你的手牌上限+${num}.`;
			},
			xjzh_meiren_qingquan(player) {
				return !player.awakenedSkills.includes('xjzh_meiren_hanshuang') ? '锁定技,当你回复体力后,你获得一点护甲,你令一名其他角色随机执行一项:①回复一点体力;②摸一张牌;③获得一点护甲.若你已觉醒,目标执行所有项' : '当你回复体力后,你获得两点护甲,你令任意名其他角色回复一点体力、摸一张牌、获得一点护甲';
			},
			xjzh_huoying_xianzhang(player) {
				var str0 = '<b><font color=orange>〖掌仙术〗</font>';
				var str1 = '转换技,';
				var str2 = '阴:每回合限一次,你使用非[伤害]卡牌指定已受伤的目标后,其可以摸两张牌或回复一点体力;';
				var str3 = '阳:每回合限一次,其他角色使用[伤害]卡牌指定你为目标时,你可以扣置一张[伤害]卡牌,其猜测此牌牌名,若错,你可以移除此牌的一个目标';
				if (player.storage.xjzh_huoying_xianzhang) {
					str2 = '<span class="bluetext">' + str2 + '</span>';
				} else {
					str3 = '<span class="bluetext">' + str3 + '</span>';
				}
				return str0 + str1 + '<br><li>' + str2 + '<br><li>' + str3;
			},
			xjzh_huoying_dunshu(player) {
				let num = player.getHistory('sourceDamage').length || 0;
				return `<b><font color=orange>〖阳遁术〗</font><b>你的回合外,你防止所有伤害和体力流失摸等量牌,你可以令等量名角色各回复一点体力,你无法被翻面、横置,且判定效果反转;<br><b><font color=orange>〖阴遁术〗</font><b>你的回合内,场上其他角色所有技能失效,你使用牌无次数限制且你造成的伤害+${num}.`;
			},
		},
		characterIntro: {
			xjzh_zxzh_linlingshiyu: '技能设计:吃朵棉花糖<br><br>技能编译:吃朵棉花糖<br><br>配音CV:挂娘、指尖旋律<br><br>角色故事:暂无',
			xjzh_zxzh_yuanyuan: '林子言的妻子,同为散修拜入剑宗,林子言对其颇为照顾,且异常关心,后结为夫妻',
			xjzh_zxzh_mufeng: '',
			xjzh_zxzh_moqinwu: '',
			xjzh_zxzh_linziyan: '',
			xjzh_zxzh_moqinyan: '',
			xjzh_zxzh_yumuren: '',
			xjzh_zxzh_linmo: '',
			xjzh_zxzh_jiangningzhi: '',
			xjzh_poe_nvwu: '',
			xjzh_poe_yuansushi: '',
			xjzh_poe_juedouzhe: '',
			xjzh_poe_chuxing: '',
			xjzh_poe_weishi: '',
			xjzh_poe_youxia: '',
			xjzh_poe_ruiyan: '',
			xjzh_poe_guizu: '',
			xjzh_wzry_libai: '注:本故事纯属虚构,与真实历史无关.<br><br>&ensp;&ensp;&ensp;&ensp;巍峨的长安城,数百年间屹立不倒.但长安的门户,守卫严密的朱雀门却镌刻着一道剑痕,那是一个青年醉后以长剑所书的诗句<欲上青天揽明月>,轰动整个长安城.当治安官狄仁杰欲以破坏长安的罪名逮捕他时,爱才的女帝拒绝了.女帝甚至下令保留朱雀门上饱含剑意的诗痕.数日之间,这名一人一剑,直入长安的青年<剑仙>之名传遍长安.他就是李白.<br>&ensp;&ensp;&ensp;&ensp;彼时的李白,年少轻狂,拒绝了女帝入朝为官的邀请后,开始试剑天下的旅途.当他初次见到滔滔黄河时,心中的剑意迸发而出,奔流到海不复回.从那时起,没有机关的师承,没有魔道的秘法,没有魔种的血脉的李白,仅仅依靠自己和手中的剑,成为帝国强者中的第一人,乃真正的天纵之才.他会给每个败于己的对手赋诗,因此,诗名和剑名也一同流传开来.后来,甚至有人视之为荣耀,为得诗篇而求一败,令人哭笑不得.<br>&ensp;&ensp;&ensp;&ensp;就在李白的剑意到达巅峰之后不久,旅途也来到了云中漠地.很少有人知道,生活在长安的李白,出生于云中漠地的海市蜃楼之下.他怀着剑仙荣耀归来,却发现幼年记忆里充满异域风情的繁华城池已经不复存在.被贩为奴隶的公主,向他倾诉自己的遭遇:帝国的铁骑越过长城,踏平了整个云中漠地.荒废的城池很快被黄沙掩埋.李白想要救出她,少女却选择了从屈辱中自我了断.<br>&ensp;&ensp;&ensp;&ensp;鲜血激起了李白的侠义之心.他第二次单剑闯入长安,质问女帝讨要征平云中漠地的说法.一夜长安风云变色,大明宫也在剑仙之剑下黯然无光.有史以来从未曾被外力攻破的长安城,第一次因为一个普通人而动摇.<br>&ensp;&ensp;&ensp;&ensp;没有人知道最后发生了什么事.李白自长安城中全身而退.他和女帝的密谈,被视为禁忌,不见于史官的笔下.<br>&ensp;&ensp;&ensp;&ensp;只有李白自己清楚,他的骄傲被挫败了,在最强的巅峰.从那之后,他开始自我放逐,从寂寞的旅途中寻求新的意义,陪伴他的,除了剑,还多了酒.<br>&ensp;&ensp;&ensp;&ensp;人人都以为剑仙就此一蹶不振.但长安的府衙中,狄仁杰查看着关于李白的行踪报告,露出难以捉摸的冷笑.<br>&ensp;&ensp;&ensp;&ensp;<元芳,你怎么看？><br>&ensp;&ensp;&ensp;&ensp;不等密探回答,他立刻自言自语:<再次出鞘的时候,会更加惊天动地吧.这家伙,太过骄傲,又太过寂寞了.><br>&ensp;&ensp;&ensp;&ensp;而狄仁杰所预言的这一天,在数年之后到来.<br>&ensp;&ensp;&ensp;&ensp;这是长安城平常的一天.晨钟回响在上空,自云中漠地的旅人远途而来,正抬首打量朱雀门上的剑痕;热闹的长乐坊中,五陵少年们因前所未有的美妙琴声而骚动;感业寺的银杏树依旧枝繁叶茂.唯有狄仁杰手下的密探隐入黑暗,紧张注视着那个白衣潇洒,酒剑相伴的男子身影.<br>&ensp;&ensp;&ensp;&ensp;剑仙李白,三入长安了.<br>&ensp;&ensp;&ensp;&ensp;这次长安城又将怎样被动摇呢？<br>&ensp;&ensp;&ensp;&ensp;<大河之剑天上来!>',
			xjzh_wzry_yao: '注:本故事纯属虚构,与真实历史无关.<br><br>&ensp;&ensp;&ensp;&ensp;曜是一个从小怀抱英雄梦想的热血少年,与冷静强大的姐姐镜激烈的争夺着所有比赛的第一.尽管天性不同,但他们都到了稷下学习,渴望在这座象征着王者大陆最高智慧的学府中获得成长.<br>&ensp;&ensp;&ensp;&ensp;曜在老师庄周举办的归虚梦演报名中结识到朋友并成为这支<星之队>的队长,他们的心灵突破了种种桎梏、在竞赛角逐中相继绽放异彩,曜通过环中梦竞赛一节寻找到自我意识的根基,掌握到星辰之力,用剑划下了有力的一笔,就像淹没于漫天星辰中的星星,终于闪烁出独属他的光芒.<br>&ensp;&ensp;&ensp;&ensp;少年曜在环中梦里打败了姐姐,然而作为英雄,一切才刚刚开始',
			xjzh_wzry_ganjiangmoye: '注:本故事纯属虚构,与真实历史无关.<br><br>&ensp;&ensp;&ensp;&ensp;大河之畔生活着贫寒的工匠夫妇.两人青梅竹马,相依为命.丈夫干将别无所长,只是一味痴迷于铸剑.废弃掉的剑在门外堆成了剑冢.村人都嘲笑这个不通世事的家伙,唯有妻子无怨无悔支持着他.<br>&ensp;&ensp;&ensp;&ensp;干将内心同样愧疚于妻子不能过上更好的生活.他只懂得铸剑,便希望能借此扬名,那样终究会有令妻子自豪和荣耀的一天.于是他带着作品去拜访各地的铸剑师,并挑战他们.他削断无数名匠之作,很快让自己的名字传遍云梦泽.自然,被砸掉招牌的铸剑师们也对他恨之入骨.<br>&ensp;&ensp;&ensp;&ensp;世间公认有位绝代的大师.人们都说他的铸剑不仅削铁如泥,而且栖息着魂灵.大师许多弟子都败于干将之手,他们联合起来向师傅痛诉.于是大师向干将送上邀请拜访的帖子.<br>&ensp;&ensp;&ensp;&ensp;胜过大师,自己就是名副其实的当世铸剑第一人.可他如约登门时,大师甚至没有露面,只命弟子持剑在门口迎接,轻轻一挥就将干将之剑斩成几半.匠人们出了一口恶气!他们放声嘲笑干将,把过往的耻辱加倍回报给他.<br>&ensp;&ensp;&ensp;&ensp;干将落荒而逃,失败在心中灼烧.他回到家中重复起枯燥的铸造生涯.熔炉四时不熄,每把剑都比前一把更加锋利,可它们始终是没有生命的铁片.死的剑和活的剑,犹如天上地下般的差距.他逐渐执念于铸剑,完全忘掉了初衷,连妻子的身体日渐衰弱都没有注意到.<br>&ensp;&ensp;&ensp;&ensp;铸剑疯子的事传到阴阳家们耳中.自称为东皇太一的男人召见铸剑师,领他登上祭祀之地,那里矗立着一把剑.干将立刻认出这是大师的作品.<br>&ensp;&ensp;&ensp;&ensp;<这把剑守护着太古的奇迹.它的名字叫巨阙,里面栖息着魂灵:它是剑——更是盾牌.接近它的人都会被剑锋撕裂.>东皇太一的计划困难而有效:锻造更锋利的剑,斩断它.<br>&ensp;&ensp;&ensp;&ensp;<帮我得到奇迹,你就可达成心愿,成为世间无可逾越的铸剑师.在此之前,让我先告诉你让剑活过来的秘法吧.><br>&ensp;&ensp;&ensp;&ensp;干将浑身颤栗着,不敢相信耳中所闻.<br>&ensp;&ensp;&ensp;&ensp;东皇太一交给他<br>&ensp;&ensp;&ensp;&ensp;太古保存下来的精铁.炉火燃烧了三天三夜,精铁无论如何都不能融化.干将眼里布满血丝,内心天人交战,需要一个生命才能让剑活过来.<br>&ensp;&ensp;&ensp;&ensp;他太专注,没有注意到妻子悄无声息接近,眼神温柔而忧伤.她收到匿名来信,信上写着实现丈夫心愿的方法.自己的身体早已病入膏肓,命中注定要拿去成全爱人.干将从火炉的阴影中抬起头,正好迎上妻子最后的笑容——下一刻她便猛然跳入炉火中.<br>&ensp;&ensp;&ensp;&ensp;撕心裂肺的呼唤和陡然明亮的铁水席卷内心,另一手下意识握紧了铁锤.痛苦转瞬即逝,成功的狂热反倒熔炼了太古的精铁.天明时分,迄今最杰出的作品诞生了,里面栖息着魂灵.男人怀抱宝剑,呢喃着妻子的名字:莫邪.嘴角微微上翘:最爱的妻子和剑,如今是一体了.<br>&ensp;&ensp;&ensp;&ensp;正如东皇太一计划的那样,莫邪剑斩断了巨阙,奇迹<转生之术>的力量被解放出来.这是太古建造的最后奇迹.<br>&ensp;&ensp;&ensp;&ensp;付出那么多,终于可以凌驾世间所有铸剑者之上了!干将毫不犹豫扑向光辉中.炉火般的灼热力量包裹着他,魔道千锤百炼着血肉之躯,令其坚硬而锋利.<br>&ensp;&ensp;&ensp;&ensp;他实现至高的愿望,将自己也锻造为剑.<br>&ensp;&ensp;&ensp;&ensp;故事并未到此结束.干将付出全部所有,现在他需要证明自己.于是他重访大师住所,去回报过往的羞辱.可全部执念面对冷冰冰的墓石却戛然而止:大师早已逝去多年.支撑人生的信念顿时崩塌,统统化作疯狂和绝望.怀抱中的莫邪剑变幻为妻子的身影,轻声安慰他.只有她,永远只有她善解人意,与自己不离不弃.<br>&ensp;&ensp;&ensp;&ensp;一分为二的生命,独一无二的魂灵',
			xjzh_wzry_haiyue: '注:本故事纯属虚构,与真实历史无关.<br><br>&ensp;&ensp;&ensp;&ensp;<br><br>&ensp;&ensp;&ensp;&ensp;海月是最古老的月裔之一,也是神秘莫测的云中蝶的饲养人.<br><br>&ensp;&ensp;&ensp;&ensp;她在孩童时期曾因孱弱多病而被视为无用之人,被村子遗弃在野外苟延残喘十余年.最终在一场饥荒之年的冬夜,她平静地接受了自己将被野兽当作食物的命运.但是,帝俊的降临让云中度过了灾厄,也将她从死亡边缘拉了回来.<br><br>&ensp;&ensp;&ensp;&ensp;从那以后,她立誓将自己的生命献给神.为此,她经历了残酷的人体改造,成为了由帝俊亲手制造的神职者<月裔>中的一员.她忠心耿耿地追随并协助帝俊在云中的所有计划,她亲眼见证帝俊的光辉结束了人间的永夜,和众人一起拥戴祂为<神明>.然而,一场天地倒卷的诸神之战将这些都毁灭了.在圣剑弑神的瞬间,海月透支自己的生命,借用帝俊赐予她的<云中蝶>爆发出了惊人的力量,让众神的军队陷入了一瞬的幻境.正是这短暂的片刻让帝俊的神魂得以逃逸.<br><br>&ensp;&ensp;&ensp;&ensp;一千多年过去了,众神的传说早已湮灭于虚空,但在遥远的漠北天阙山巅,一缕执念却始终萦绕在海月那具早已死亡的琉璃躯体上.<不能让祂这样死去>,成为了铭刻在海月灵魂深处的印记,留在了人间.直到有一天,漠南来的少年不小心打破了天阙山的宁静,也惊醒了沉睡中的幽魂.经历了千年的死别,醒来的海月发誓定要夺回神明的遗产,迎接祂的归来.<br><br>&ensp;&ensp;&ensp;&ensp;为此,她将不惜一切代价',
			xjzh_wzry_huamulan: '注:本故事纯属虚构,与真实历史无关.<br><br>&ensp;&ensp;&ensp;&ensp;静如影,疾如风.<br><br>&ensp;&ensp;&ensp;&ensp;金属的撞击声中,身影掠过.<br><br>&ensp;&ensp;&ensp;&ensp;不动如山,迅烈如火.<br><br>&ensp;&ensp;&ensp;&ensp;偷袭者重重跌倒在地.<br><br>&ensp;&ensp;&ensp;&ensp;战士的头盔裂开,被她扔到地上.发丝飘散出来.<br><br>&ensp;&ensp;&ensp;&ensp;女人!<br><br>&ensp;&ensp;&ensp;&ensp;<想活命吗？紧跟着我!><br><br>&ensp;&ensp;&ensp;&ensp;前方是无际的长城,以及无际的敌人.<br><br>&ensp;&ensp;&ensp;&ensp;<姐可是传说!>',
			xjzh_wzry_duoliya: '注:本故事纯属虚构,与真实历史无关.<br><br>&ensp;&ensp;&ensp;&ensp;朵莉亚是来自大海深处的人鱼少女,会伪装成人类在海都<寻宝>,她同时也是人鱼族最有潜力的歌者.<br><br>&ensp;&ensp;&ensp;&ensp;朵莉亚出生于深海中的人鱼族,孩童时代的她便已被族人寄予厚望.小时候,在寻宝>的途中救下了海都命运家族少主海诺,两人从此成为两小无猜的<秘密伙伴>.后来的朵莉亚为平息海底深渊巨兽的危机,选择让狂躁的巨兽吞噬掉俩人最美好的情感以平息动乱.两人在之后皆失去有关对方的记忆,为找到失去的记忆,朵莉亚加入火鹰号,并打算前往珊瑚岛寻找传说中能帮忙唤回失落记忆的<宝物>',
			xjzh_wzry_yuange: '注:本故事纯属虚构,与真实历史无关.<br><br>&ensp;&ensp;&ensp;&ensp;当人们发现他时,少年因为惊吓和恐惧完全失去了说话的能力.没有人清楚他目睹到多么可怕的不幸.变成孤儿的他被送往稷下,世人认为无所不能的地方.<br><br>&ensp;&ensp;&ensp;&ensp;那时,因博学多闻而光彩夺目的师兄,是无数学子心目中的偶像.无论魔道机关,智谋兵法,样样居冠,一切疑难在他面前似乎都能迎刃而解.他勉励那遭遇过度恐惧失去声音的少年,以机关制作傀儡,代替喉咙和舌头与世界回复交流.<br><br>&ensp;&ensp;&ensp;&ensp;少年沉默而阴暗的世界,忽然明亮生动起来.他逐渐沉浸于制作傀儡的机关,曾经的自卑依靠精致的傀儡脱胎换骨.傀儡说话,就像自己说话;傀儡起舞,就像自己起舞.他不断尝试,最终制造出惊人的作品:无可挑剔,栩栩如生,正是世界上另一个完美无暇的自己.<br>&ensp;&ensp;&ensp;&ensp;时光如梭,少年成长为青年.他离开稷下学院开始四处旅行.旅途中的消息总是特别敏锐:关于崛起的魏都和神秘人,惨烈失败的战神,以及风云动荡的赤壁面对的危机.几乎没有犹豫的,他立刻做出决定.<br>&ensp;&ensp;&ensp;&ensp;从老友蔡邕手中夺取太古秘密的曹操,长久以来谋划着吞并江东.志在必得的奇迹,却迟迟无法寻求,直到曾求学稷下的青年前来投靠.<br>&ensp;&ensp;&ensp;&ensp;<我乃平凡机关师,一心寻求着至高的机关之美.>傀儡口中吐出迷人话语.<br>&ensp;&ensp;&ensp;&ensp;<何谓至高机关之美呢？唯有以至高权力的手令太古奇迹重现人世,方能称得上啊.><br>&ensp;&ensp;&ensp;&ensp;曹操大喜过望,将他留作部属.机关师果然不负众望,解开蔡邕留下的天书碎片之谜,从地图上指明了奇迹的位置.<br>&ensp;&ensp;&ensp;&ensp;等到枭雄带领大军东进,已经对其信任有加.而这让身为枭雄心腹的黑衣人极为不快.<br>&ensp;&ensp;&ensp;&ensp;<无欲无求,笑口常开>',
			xjzh_diablo_kelike: '<暗黑破坏神>的科里克是守护亚瑞特巅峰的三名古代守护者之一,同时他也是野蛮人<野禽>部族的前任领导者.在担任部族领袖期间,科里克的主要职责就是保护他的族民免受野兽和敌对部族的侵袭与骚扰',
			xjzh_diablo_lamasi: '<暗黑破坏神>中的游戏角色,初代死灵法师',
			xjzh_diablo_moruina: '<暗黑破坏神>中的第一个游侠,和其他角色一起建立了罗格营地',
			xjzh_diablo_kaxia: '<暗黑破坏神>中的弓箭手首领,莫瑞娜的好朋友',
			xjzh_diablo_yafeikela: '<暗黑破坏神>中的德鲁伊首领,据说德鲁伊和野蛮人同宗同源',
			xjzh_diablo_lilisi: '莉莉丝是游戏<暗黑破坏神IV>中的角色.莉莉丝为憎恨之王墨菲斯托的女儿、庇护所的创造者',
			xjzh_diablo_nataya: "游戏<DIABLO II>(暗黑破坏神II)ACT3库拉斯特海港中的一个NPC.一个被雇佣的女杀手,同时也是刺客宗族费斯贾塔(Viz-jaq'tarr)的一员.",
			xjzh_dnf_suodeluosi: '真正的剑魂索德罗斯,精通数万种武器,具有可以与周围的武器产生共鸣的特殊天赋,在战斗中可以发挥强大的威力',
			xjzh_xyj_sunwukong: '孙悟空(又称齐天大圣、孙行者、斗战胜佛),是中国古典神魔小说<西游记>中的主要角色之一(传为吴承恩所著).由开天辟地产生的仙石孕育而生,出生地位于东胜神洲的花果山上,因带领猴群进入水帘洞而被尊为<美猴王>.为了学艺而漂洋过海拜师于须菩提祖师,得名孙悟空,学会大品天仙诀、地煞数七十二变、筋斗云等高超的法术',
			xjzh_sanguo_chunhua: '曹魏粟邑令张汪之女,晋宣帝司马懿之妻,晋景帝司马师和晋文帝司马昭的母亲',
			xjzh_sanguo_wenyang: '文俶(238~291年4月23日[28]),字次骞,小名阿鸯,[1]世称文鸯,[1]沛国谯郡(今安徽省亳州市)人.魏末晋初时期名将,曹魏扬州刺史文钦之子',
			xjzh_sanguo_espsunce: '此武将的设计取自虚拟故事,孙策诈亡统一天下<br>字伯符,吴郡富春县(今浙江省杭州市富阳区)人.东汉末年割据群雄之一,孙吴政权的奠基者之一,破虏将军孙坚长子,吴大帝孙权长兄',
			xjzh_sanguo_espzhangjiao: '自称<大贤良师><天公将军>,东汉冀州钜鹿(今河北宁晋[1])人,中国东汉末年农民起义军<黄巾军>的领袖,太平道的创始人',
			xjzh_sanguo_nanhua: '南华老仙,是古典小说<三国演义>中的虚拟人物.其原型来自道教典籍中对庄子的封号,又称<南华仙人>、<南华真人>等',
			xjzh_sanguo_zuoyou: '据说是左慈的女儿/徒弟,但无从查据',
			xjzh_sanguo_espzuoci: '此武将的设计取自虚拟故事<br>字元放,号乌角先生,东汉末方士,庐江(今安徽庐江西南)人.少居天柱山,习炼丹',
			xjzh_sanguo_sunquan: '字仲谋, 吴郡 富春县(今浙江省 杭州市 富阳区 )人. 三国 时期孙吴开国皇帝(229年5月23日－252年5月21日在位)、 政治家、军事统帅',
			xjzh_sanguo_simahui: '字德操,颍川阳翟(今河南省禹州市)人.东汉末年隐士,精通奇门、经学.有<水镜先生>之称',
			xjzh_sanguo_yuji: '东汉末年道士,后为孙策所杀,代表作有<太平经>',
			xjzh_sanguo_sphuatuo: '华佗东汉末年著名的医学家,钻研医术而不求仕途.他医术全面,尤其擅长外科,精于手术',
			xjzh_sanguo_zhaoyun: '字子龙,常山真定(今河北省正定)人.身长八尺,姿颜雄伟,三国时期蜀汉名将',
			xjzh_sanguo_zuoci: '字元放,号乌角先生,东汉末方士,庐江(今安徽庐江西南)人.少居天柱山,习炼丹',
			xjzh_sanguo_weiyan: '字文长.初随刘备作战,智勇双全,勇冠三军,深得刘备信任,刘备称王后受封汉中太守',
			xjzh_sanguo_yueying: '三国时荆州沔南白水(今湖北襄阳)人,沔阳名士黄承彦之女,诸葛亮之妻,诸葛瞻之母',
			xjzh_sanguo_kongming: '字孔明,号卧龙(也作伏龙),汉族,徐州琅琊阳都(今山东临沂市沂南县)人,三国时期蜀汉丞相,杰出的政治家、军事家、散文家、书法家、发明家',
			xjzh_sanguo_spkongming: '字孔明,号卧龙(也作伏龙),汉族,徐州琅琊阳都(今山东临沂市沂南县)人,三国时期蜀汉丞相,杰出的政治家、军事家、散文家、书法家、发明家',
			xjzh_sanguo_daqiao: '大乔(生卒年不详),庐江郡皖县(今安徽省潜山市)人,东汉末年江东孙策的夫人,本姓<桥>,小说<三国演义>误作<乔>,因为同时还有一个妹妹嫁给周瑜,为了进行区分,姐姐习惯称作<大乔(桥)>',
			xjzh_sanguo_xiaoqiao: '小乔(生卒年不详),本姓桥(小乔为后世误传),庐江皖县(今安徽潜山)人.东汉末年国色美女,桥公次女,名将周瑜的夫人',
			xjzh_sanguo_caiyan: '字文姬,别字昭姬,陈留郡圉县(今河南杞县)人,东汉时期女性文学家,文学家蔡邕之女. 博学多才,擅长文学、音乐、书法',
			xjzh_sanguo_huangzhong: '字汉升(太平御览卷二百三十八引<蜀志>中作<汉叔>),南阳(治今河南南阳)人.汉末三国时期著名将领,曾于定军山斩杀夏侯渊',
			xjzh_sanguo_dongzhuo: '字仲颖,陇西临洮(今甘肃省岷县)人.东汉末年少帝、献帝时权臣,凉州军阀',
			xjzh_sanguo_machao: '字孟起,司隶部扶风郡茂陵(今陕西杨凌五泉镇)人,东汉卫尉马腾之子,汉末群雄之一,蜀汉开国名将,有锦马超之称',
			xjzh_sanguo_huatuo: '华佗东汉末年著名的医学家,钻研医术而不求仕途.他医术全面,尤其擅长外科,精于手术',
			xjzh_sanguo_zhongda: '字仲达,汉族,河内郡温县孝敬里(今河南焦作市温县)人.三国时期魏国杰出的政治家、军事家,西晋王朝的奠基人',
			xjzh_sanguo_tongyuan: '字雄付,武术名家.童渊是评书三国中的人物,在历史中以及<三国演义>中都没有被提到过.与并州李彦是结拜兄弟,两人均师承义父玉真子,两人并娶了河北颜家的两位大小姐颜云及颜雨.是童飞之父',
			xjzh_sanguo_pangtong: '字士元,号凤雏,荆州襄阳(今湖北襄阳)人,东汉末年刘备帐下重要谋士,与诸葛亮同拜为军师中郎将',
			xjzh_sanguo_zhangfei: '字益德,涿郡(今河北涿州)人,后世所称三国时期蜀汉五虎上将之一',
			xjzh_sanguo_guanyu: '字云长,本字长生,河东郡解县(今山西运城)人,东汉末年名将,被后世崇为<武圣>,与<文圣>孔子齐名',
			xjzh_sanguo_zhangjiao: '自称<大贤良师><天公将军>,东汉冀州钜鹿(今河北宁晋[1])人,中国东汉末年农民起义军<黄巾军>的领袖,太平道的创始人',
			xjzh_sanguo_spzhangjiao: '自称<大贤良师><天公将军>,东汉冀州钜鹿(今河北宁晋[1])人,中国东汉末年农民起义军<黄巾军>的领袖,太平道的创始人',
			xjzh_sanguo_zhangning: '钜鹿(治今河北省邢台市巨鹿县)人.东汉末年大贤良师张角的女儿,太平道圣女',
			xjzh_sanguo_splvbu: '字奉先,五原郡九原县(今内蒙古包头市九原区麻池镇西北)人,东汉末年著名将领. 吕布以勇武闻名,素有<人中吕布,马中赤兔>一说',
			xjzh_sanguo_lvbu: '字奉先,五原郡九原县(今内蒙古包头市九原区麻池镇西北)人,东汉末年著名将领. 吕布以勇武闻名,素有<人中吕布,马中赤兔>一说',
			xjzh_sanguo_zhenfu: '三国时期魏文帝曹丕的正室,魏明帝曹叡之母.本为袁熙之妻,曹操攻陷邺城后成为曹丕的妻室.后因被郭女王(文德郭皇后)所谮而被曹丕赐死,死后谥曰文昭皇后',
			xjzh_sanguo_sunhao: '吴大帝孙权之孙,孙和之子,三国时期吴国末代皇帝,公元(264年-280年在位)',
			xjzh_sanguo_luxun: '三国时期吴国政治家、军事家,一生出将入相,被赞为<社稷之臣>',
			xjzh_sanguo_zhoutai: '三国时期吴国武将.孙策平定江东时即成为东吴的将领,曾经多次保护孙权免受敌军的攻击.后来孙权为了表彰周泰为了东吴出生入死的功绩,而赐给他青罗伞盖',
			xjzh_sanguo_guojia: '东汉末年曹操帐下谋士,官至军师祭酒,封洧阳亭侯.史书上称他<才策谋略,世之奇士>',
			xjzh_sanguo_dianwei: '曹操部下重要将领,相貌魁梧,膂力过人,同许褚共领虎卫军.本属张邈,后归曹操',
			xjzh_sanguo_liubei: '汉昭烈帝,字玄德,东汉末年幽州涿郡涿县(今河北省涿州市)人,西汉中山靖王刘胜之后,三国时期蜀汉开国皇帝,史家多称其为先主',
			xjzh_sanguo_caocao: '字孟德,小字阿瞒,沛国谯(今安徽亳州)人,东汉末年著名政治家、军事家、文学家和诗人,曹魏政权的缔造者',
			xjzh_sanguo_zhangrang: '东汉宦官,颍川(今河南禹州)人,灵帝朝<十常侍>之一',
			xjzh_sanguo_bogui: '字伯圭[1](一作伯珪),辽西令支(今河北迁安)人,东汉末年武将、军阀,汉末群雄之一',
			xjzh_sanguo_diaochan: '貂蝉(生卒年不详),历史小说<三国演义>及其衍生作品中的角色,是中国古代四大美女之一',
			xjzh_sanguo_espliuxie: '此武将的设计取自虚拟故事,刘协三兴汉室<br>汉献帝刘协(181年4月2日－234年4月21日),字伯和[1][2],河南洛阳人.东汉末代皇帝(189年—220年在位),汉灵帝刘宏次子,汉少帝刘辩异母弟,母为灵怀皇后王荣',
			xjzh_sanguo_guanlu: '字公明,平原郡平原县(今山东省平原县)人.三国时期曹魏术士,古代卜卦观相行业祖师',
			xjzh_sanguo_xuzhu: '字仲康,谯郡谯县(今安徽亳州市)人.东汉末年曹操部下猛将',
			xjzh_sanguo_xunyou: '字公达,颍川颍阴(今河南许昌)人.荀彧之侄,东汉末年谋士',
			xjzh_sanguo_zhangbao: '东汉末年黄巾起义首领之一,张角的弟弟,张梁的哥哥.中平元年(184)随兄张角起义,号称<地公将军>',
			xjzh_sanguo_yuanshao: '字本初,汝南汝阳(今河南省商水县)人.东汉末年军阀,汉末群雄之一',
			xjzh_sanguo_zhangliao: '字文远,雁门马邑(今山西省朔州市)人.汉末三国时期曹魏名将,聂壹的后人',
			xjzh_sanguo_huaxiong: '华[huà]雄(?－191),东汉末年董卓部下的武将,为董卓帐下都督',
			xjzh_meiren_linshuang: '',
			xjzh_meiren_gaoyu: '',
			xjzh_meiren_zhaoyushu: '',
			xjzh_meiren_linjiasheng: '',
			xjzh_meiren_wuyufeng: '',
			xjzh_meiren_huangyuke: '',
			xjzh_meiren_xiangwanru: '',
			xjzh_meiren_huangdanxue: '',
			xjzh_qixia_daxiongxiaomao: '',
			xjzh_qixia_maybe: '',
			xjzh_qixia_mumuxiao: '',
			xjzh_huoying_mingren: '',
			xjzh_huoying_zuozhu: '',
			xjzh_huoying_dou: '',
			xjzh_huoying_kakaxi: '',
			xjzh_huoying_zhishui: '',
			xjzh_boss_lilisi: '莉莉丝是游戏<暗黑破坏神Ⅱ>及<暗黑破坏神IV>中的角色,是憎恨之王墨菲斯托的女儿、庇护所的创造者.<br><br>消耗所有材料各2个可以挑战该boss,胜利时奖励至少1个精魄,额外获得2倍于本局碎片数量个碎片,有几率获得1-4级奇术要件1个,必定获得随机5级奇术要件1个',
			xjzh_boss_waershen: '瓦尔申<暗黑破坏神IV>中的角色.<br><br>消耗恶念之心、颤栗之手、发黑的股骨、咕噜头颅各2个可以挑战该boss,胜利时奖励2个活体钢铁、1个粘液覆盖的蛋,额外获得3个碎片',
			xjzh_boss_zuoyou: '据说是左慈的女儿/徒弟,但无从查据',
			xjzh_boss_lvbu: '字奉先,并州五原郡九原县人.东汉末年名将、东汉末年群雄之一',
			xjzh_boss_zhangjiao: '(？－184年),钜鹿(秦治今河北平乡、东汉治今河北宁晋)人.中国东汉末年农民起义军<黄巾军>的领袖',
			xjzh_boss_geligaoli: '消耗5个活体钢铁可以挑战该boss,胜利时奖励1个苦痛碎片,额外获得5个碎片',
			xjzh_boss_duruier: '督瑞尔是游戏<暗黑破坏神Ⅱ>及<暗黑破坏神IV>中的角色,次级恶魔之一,也称痛苦之王,与所有的大恶魔一样,督瑞尔是从塔萨米特的七个头颅之一中生成的,他统治着地狱的痛苦领域.<br><br>消耗5个活体钢铁可以挑战该boss,胜利时奖励2个提纯的恐惧、2个提纯的鲜血,额外获得7个碎片',
			xjzh_boss_qier: '消耗9个提纯的鲜血可以挑战该boss,胜利时奖励3个提纯的恐惧,额外获得10个碎片',
			xjzh_boss_bingchuanjushou: '消耗9个提纯的恐惧可以挑战该boss,胜利时奖励3个提纯的鲜血,额外获得10个碎片',
			xjzh_boss_ttshilian: '消耗一个<世界之石碎片>参加一场高阶天堂试炼挑战,该挑战分为以下几个阶段<br><br><li>第一阶段:挑战1个大天使和2小天使<br><br><li>第二阶段:挑战1个高阶天使和2个大天使<br><br><li>第三阶段:挑战1个天使长和2个高阶天使<br><br><li>第四阶段:<br><br>早上8点-12点,晚上20点-24点挑战boss<伊纳瑞斯>和2个天使长<br><br>下午12点-16点,晚上0点-4点挑战boss<马萨伊尔>和1个夺魂者、1个堕落天使<br><br>除以上时间外挑战boss<塔尔拉沙>和2个剧毒沙虫',
		},
		characterReplace: {
			xjzh_sanguo_zuoci: ['xjzh_sanguo_zuoci', 'xjzh_sanguo_espzuoci'],
			xjzh_sanguo_huatuo: ['xjzh_sanguo_huatuo', 'xjzh_sanguo_sphuatuo'],
			xjzh_sanguo_zhangjiao: ['xjzh_sanguo_zhangjiao', 'xjzh_sanguo_spzhangjiao'],
			xjzh_sanguo_lvbu: ['xjzh_sanguo_lvbu', 'xjzh_sanguo_splvbu'],
			xjzh_sanguo_kongming: ['xjzh_sanguo_kongming', 'xjzh_sanguo_spkongming'],
			xjzh_sanguo_xiaoqiao: ['xjzh_sanguo_xiaoqiao', 'xjzh_sanguo_daqiao'],
		},
		skill: {
			xjzh_meiren_qingquan: {
				trigger: {
					player: 'recoverAfter',
				},
				forced: true,
				_priority: -2,
				async content(event, trigger, player) {
					player.changeHujia(player.awakenedSkills.includes('xjzh_meiren_hanshuang') ? 2 : 1);
					let str = `〖清泉〗:选择${player.awakenedSkills.includes('xjzh_meiren_hanshuang') ? '任意名目标令其' : '一名角色令其'}${player.awakenedSkills.includes('xjzh_meiren_hanshuang') ? '执行' : '随机执行'}①回复一点体力;②摸一张牌;③获得一点护甲`,
						num = player.awakenedSkills.includes('xjzh_meiren_hanshuang') ? game.countPlayer((current) => current != player) : 1;
					const { targets } = await player
						.chooseTarget(str, num == 1 ? 1 : [1, num], lib.filter.notMe)
						.set('ai', (target) => get.attitude(player, target) > 0)
						.forResult();

					if (targets) {
						for (let target of targets) {
							let list = ['recover', 'draw', 'changeHujia'];
							player.awakenedSkills.includes('xjzh_meiren_hanshuang') ? list.forEach((item) => target[item]()) : target[list.randomGet()]();
						}
					}
				},
				ai: {
					pretao: true,
					nokeep: true,
					skillTagFilter(player, tag, arg) {
						if (tag == 'nokeep') {
							if (player == arg) {
								if (player.countCards('h', 'tao')) return true;
							}
						}
						return false;
					},
				},
			},
			xjzh_meiren_hanshuang: {
				trigger: {
					player: 'dieBegin',
				},
				forced: true,
				juexingji: true,
				limited: true,
				derivation: ['xjzh_meiren_lingdong'],
				async content(event, trigger, player) {
					player.awakenSkill('xjzh_meiren_hanshuang');
					trigger.cancel();
					player.loseMaxHp();
					player.recoverTo(1);
					player.addSkills(get.info(event.name).derivation);
				},
			},
			xjzh_meiren_lingdong: {
				trigger: {
					global: 'recoverAfter',
					player: 'changeHujiaAfter',
				},
				forced: true,
				_priority: -2,
				filter(event, player, name) {
					if (name == 'recoverAfter') return event.player != player;
					return event.type == 'damage';
				},
				async content(event, trigger, player) {
					let name = event.triggername;
					if (name == 'recoverAfter') player.changeHujia();
					else player.drawTo(player.maxHp);
				},
			},
			xjzh_meiren_ganling: {
				trigger: {
					player: ['damageBegin1', 'dieBegin', 'loseHpBegin', 'loseMaxHpBegin'],
				},
				forced: true,
				_priority: 5,
				filter(event, player) {
					if (event.name == 'damage' && event.num > 0) return true;
					if (event.name == 'die' && player.getHp() > 0) return true;
					if (['loseHp', 'loseMaxHp'].includes(event.name) && _status.currentPhase != player) return true;
					return false;
				},
				mod: {
					targetEnabled(card, player, target) {
						if (get.type(card) == 'delay') return false;
					},
				},
				async content(event, trigger, player) {
					trigger.cancel(null, null, 'notrigger');
					switch (trigger.name) {
						case 'damage':
							game.log(player, '防止受到所有伤害');
							break;
						case 'loseMaxHp':
							game.log(player, '的回合外无法失去体力上限');
							break;
						case 'loseHp':
							game.log(player, '的回合外无法失去体力');
							break;
						case 'die':
							game.log(player, '防止非正常阵亡');
							break;
					}
				},
				ai: {
					nofire: true,
					nothunder: true,
					nodamage: true,
					threaten: 0.8,
					effect: {
						target(card, player, target) {
							if (!target.hasFriend()) return;
							if (get.tag(card, 'damage')) return [0, 0];
							if (get.tag(card, 'loseHp')) return [0, 0];
							if (player.hasSkillTag('jueqing', false, target)) return [0, 0];
							return [1, -1];
						},
					},
				},
			},
			xjzh_meiren_miaofa: {
				audio: 'ext:仙家之魂/audio/skill:4',
				trigger: {
					player: 'phaseZhunbeiBegin',
					global: 'gameDrawBegin',
				},
				forced: true,
				_priority: 11,
				bannedCharacter: ['xjzh_meiren_linjiasheng', 'xjzh_sanguo_zuoci', 'xjzh_sanguo_zhongda', 'xjzh_sanguo_chunhua', 'xjzh_meiren_huangyuke', 'xjzh_sanguo_zhaoyun', 'xjzh_boss_zuoyou', 'xjzh_wzry_yuange'],
				bannedSkills: ['xjzh_poe_choice', 'xjzh_poe_choice2', 'xjzh_dnf_levelUp'],
				init(player, skill) {
					player.storage[skill] = [];
					lib.skill[skill].getSkillList(player);
				},
				getSkillList(player) {
					let list = game.xjzh_wujiangpai().filter((name) => {
						if (lib.skill.xjzh_meiren_miaofa.bannedCharacter.includes(name)) return false;
						if (['xjzh_boss_', 'xjzh_diablo_'].some((item) => name.includes(item))) return false;
						return name.startsWith('xjzh_');
					}),
						skills = [];
					list.forEach((name) => {
						let characters = lib.character[name];
						if (characters.skills && characters.skills.length) {
							for (let skill of characters.skills) {
								if (lib.translate[skill] && lib.translate[skill + '_info']) {
									let info = get.info(skill);
									if (info && (info.gainable || !info.unique) && !info.zhuSkill && !info.juexingji && !info.limited && !info.dutySkill && !lib.skill.xjzh_meiren_miaofa.bannedSkills.includes(skill)) {
										if (!lib.skill.global.includes(skill) && !info.nogainsSkill) skills.add(skill);
									}
								}
							}
						}
					});
					player.storage.xjzh_meiren_miaofa.addArray(skills);
				},
				async content(event, trigger, player) {
					let skills = player.storage.xjzh_meiren_miaofa
						.slice(0)
						.filter((skill) => {
							let info = get.info(skill);
							if (info.ai && info.combo && !player.hasSkill(info.combo)) return false;
							return !player.hasSkill(skill);
						})
						.randomGets(2),
						dialog = ui.create.dialog('forcebutton');
					if (event.isMine()) {
						dialog.add('请选择获得一项技能');
						for (var i = 0; i < skills.length; i++) {
							if (lib.translate[skills[i] + '_info']) {
								let translation = get.translation(skills[i]);
								if (translation[0] == '新' && translation.length == 3) {
									translation = translation.slice(1, 3);
								} else {
									translation = translation.slice(0, 2);
								}
								let item = dialog.add('<div class="popup pointerdiv" style="width:95%;display:inline-block"><div class="skill">〖' + translation + '〗</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
								item.firstChild.link = skills[i];
							}
						}
					}
					const {
						result: { control },
					} =
						skills.length == 1
							? { result: { control: skills[0] } }
							: await player
								.chooseControl(skills)
								.set('prompt', '请选择一个技能获得之')
								.set('ai', () => {
									return get.max(skills, get.skillRank, 'item');
								})
								.set('dialog', dialog);
					if (control) {
						player.addSkills(control);
						player.loseHp();
						player.draw();
						player.update();
					}
				},
			},
			xjzh_meiren_juese: {
				enable: 'phaseUse',
				filterCard(card, player, target) {
					if (
						!game.hasPlayer(function (current) {
							return current.hasSex('male');
						})
					)
						return get.color(card) == 'red';
					if (
						!game.hasPlayer(function (current) {
							return current != player && current.hasSex('female');
						})
					)
						return get.color(card) == 'black';
					return true;
				},
				usable: 1,
				filter(event, player) {
					if (player.countCards('h') == 0) return false;
					return true;
				},
				filterTarget(card, player, target) {
					if (get.color(card) == 'red') return target.hasSex('female') && player != target;
					if (get.color(card) == 'black') return target.hasSex('male');
					return false;
				},
				content() {
					switch (get.color(cards[0])) {
						case 'black':
							var n = [1, 2].randomGet();
							if (n == 1) {
								if (target.countCards('he') <= 1) {
									player.draw(2);
								} else {
									target.chooseToDiscard(2, 'he', true);
								}
							} else {
								target.addTempSkill('baiban', { player: 'phaseEnd' });
							}
							break;
						case 'red':
							var n = [1, 2].randomGet();
							if (n == 1) {
								if (target.isDamaged()) {
									target.recover();
								} else {
									player.getStat().skill.xjzh_meiren_juese -= 1;
								}
							} else {
								target.draw(2);
							}
							break;
					}
				},
				ai: {
					expose: 0.4,
					threaten: 3,
					result: {
						target(player, target) {
							var card = ui.selected.cards[0];
							var att = get.attitude(player, target);
							var colorx = get.color(card);
							if (colorx == 'red') return att;
							return -att;
						},
						player: 1,
					},
				},
			},
			xjzh_meiren_xiuya: {
				trigger: {
					player: ['chooseToRespondBegin', 'chooseToUseBegin'],
				},
				forced: true,
				popup: false,
				max: 3,
				_priority: 29,
				filter(event, player) {
					return _status.currentPhase != player;
				},
				content() {
					var cards = [];
					var max = Math.min(ui.cardPile.childNodes.length, lib.skill.xjzh_meiren_xiuya.max);
					for (var i = 0; i < max; i++) {
						var card = ui.cardPile.childNodes[i];
						if (trigger.filterCard(card, player, trigger)) {
							cards.push(card);
						}
					}
					if (cards.length) {
						player.gain(cards, 'draw');
					}
				},
				ai: {
					respondSha: true,
					respondShan: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'respondShan')) return 0.7;
							if (get.tag(card, 'respondSha')) return 0.7;
						},
					},
				},
				hiddenCard(player, name) {
					if (_status.currentPhase == player) return false;
					var max = Math.min(ui.cardPile.childNodes.length, lib.skill.xjzh_meiren_xiuya.max);
					for (var i = 0; i < max; i++) {
						var card = ui.cardPile.childNodes[i];
						if (card.name == name) return true;
					}
					return false;
				},
			},
			xjzh_meiren_shumei: {
				trigger: {
					player: 'damageEnd',
				},
				audio: 'ext:仙家之魂/audio/skill:4',
				_priority: 20,
				check(event, player) {
					return 1;
				},
				init(player) {
					player.storage.xjzh_meiren_shumei = [];
					lib.skill.xjzh_meiren_shumei.getSkillList(player);
				},
				getSkillList(player) {
					var list = [];
					var list2 = [];
					var players = game.players.concat(game.dead);
					for (var i of players) {
						list2.add(i.name);
						list2.add(i.name1);
						list2.add(i.name2);
					}
					for (var i in lib.character) {
						if (list2.includes(i)) continue;
						for (var j = 0; j < lib.character[i][3].length; j++) {
							if (lib.skill[lib.character[i][3][j]] && lib.translate[lib.character[i][3][j] + '_info']) {
								var info = lib.skill[lib.character[i][3][j]];
								if (info && (info.gainable || !info.unique) && !info.zhuSkill && !info.juexingji && !info.limited && !info.dutySkill) {
									list.add(lib.character[i][3][j]);
								}
							}
						}
					}
					var skills = player.skills.slice(0);
					for (var i = 0; i < skills.length; i++) {
						list.remove(skills[i]);
					}
					player.storage.xjzh_meiren_shumei.addArray(list);
				},
				content() {
					'step 0';
					event.num = player.getHistory('damage').length;
					('step 1');
					if (event.num <= 0) {
						event.finish();
						return;
					}
					player.chooseControlList(get.prompt(event.name, trigger.source), ['选择一个目标令其获得一个技能并摸一张牌', '令' + get.translation(trigger.source) + '弃置一张牌你摸两张牌'], function () {
						if (player.countCards('h') > 3 || trigger.source.countCards('h') < 3) return 0;
						return 1;
					});
					('step 2');
					if (result.control) {
						if (result.index == 2) {
							event.finish();
							return;
						}
						if (result.index == 0) {
							player.chooseTarget('淑美:选择一个目标令其获得一个技能', true).set('ai', function (target) {
								return get.attitude(player, target);
							});
						} else {
							player.draw(3);
							trigger.source.chooseToDiscard('he', true);
						}
					}
					('step 3');
					if (result.bool && result.targets.length) {
						var list = player.storage.xjzh_meiren_shumei.slice(0);
						var link = list.randomGet();
						player.line(result.targets[0], 'green');
						result.targets[0].addSkill(link);
						result.targets[0].mark(link, {
							name: get.translation(link),
							content: lib.translate[link + '_info'],
						});
						game.log(result.targets[0], '获得技能', '〖' + get.translation(link) + '〗');
						result.targets[0].draw();
					}
					('step 4');
					event.num -= 1;
					event.goto(1);
				},
				ai: {
					expose: 0.3,
					maixie: true,
					effect: {
						target(card, player, target) {
							if (!target.hasFriend()) return;
							if (get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return [1, 0];
								return 0.8;
							}
						},
					},
				},
			},
			xjzh_meiren_jingzhuang: {
				audio: 'ext:仙家之魂/audio/skill:2',
				forced: true,
				trigger: {
					player: 'damageBegin3',
				},
				content() {
					'step 0';
					event.dialog = ui.create.dialog(get.translation(player) + '<span style=\"color: red\">正在照镜子</span>...');
					event.videoId = lib.status.videoId++;
					game.broadcast('createDialog', event.videoId, get.translation(player) + '<span style=\"color: red\">正在照镜子</span>...');
					('step 1');
					event.dialog.close();
					var n = [1, 2, 3].randomGet();
					if (n == 1) {
						event.dialog = ui.create.dialog(get.translation(player) + '<span style=\"color: red\">被自己美到了</span>...');
						event.videoId = lib.status.videoId++;
						game.broadcast('createDialog', event.videoId, get.translation(player) + '<span style=\"color: red\">被自己美到了</span>...');
						trigger.num++;
					}
					if (n == 2) {
						event.dialog = ui.create.dialog(get.translation(trigger.source) + '<span style=\"color: red\">被你美到了</span>...');
						event.videoId = lib.status.videoId++;
						game.broadcast('createDialog', event.videoId, get.translation(trigger.player) + '<span style=\"color: red\">被你美到了</span>...');
						trigger.changeToZero();
						if (trigger.source) trigger.source.damage();
					}
					if (n == 3) {
						event.dialog = ui.create.dialog(get.translation(player) + '<span style=\"color: red\">动用了自己的美色</span>...');
						event.videoId = lib.status.videoId++;
						game.broadcast('createDialog', event.videoId, get.translation(player) + '<span style=\"color: red\">动用了自己的美色</span>...');
						player.draw(2);
					}
					('step 2');
					event.dialog.close();
				},
			},
			xjzh_meiren_lunzhuan: {
				forced: true,
				marktext: '轮',
				intro: {
					name: '轮转',
					content: '已复活#次,至多3次',
				},
				group: ['xjzh_meiren_lunzhuan_lose', 'xjzh_meiren_lunzhuan_dying'],
				mod: {
					maxHandcard(player, num) {
						return player.maxHp;
					},
				},
				trigger: {
					player: 'dieBefore',
				},
				filter(event, player) {
					return player.maxHp > 1 && player.countMark('xjzh_meiren_lunzhuan') < 3;
				},
				content() {
					'step 0';
					trigger.cancel();
					player.addMark('xjzh_meiren_lunzhuan', 1);
					player.$fullscreenpop('轮回之术', 'water');
					('step 1');
					player.loseMaxHp();
					player.recoverTo(1);
					player.discard(player.getCards('j'));
					player.draw(Math.min(player.maxHp, 20));
				},
				subSkill: {
					lose: {
						trigger: {
							player: 'loseEnd',
						},
						forced: true,
						filter(event, player) {
							return Math.random() <= 0.35;
						},
						content() {
							player.draw();
						},
					},
					dying: {
						trigger: {
							player: 'dying',
						},
						forced: true,
						filter(event, player) {
							return Math.random() <= 0.3;
						},
						content() {
							player.$fullscreenpop('天降甘霖', 'water');
							player.recover();
						},
					},
				},
			},
			xjzh_meiren_chunxiao: {
				audio: 'ext:仙家之魂/audio/skill:1',
				trigger: {
					player: 'damageEnd',
					source: 'damageEnd',
				},
				forced: true,
				_priority: 99,
				marktext: '春',
				intro: {
					name: '春宵',
					content: '受到赵玉姝造成的伤害时有50%几率令其获得一点体力上限',
				},
				mod: {
					globalFrom(from, to, distance) {
						if (
							game.countPlayer(function (current) {
								return current.hasMark('xjzh_meiren_chunxiao');
							})
						)
							return -Infinity;
						return distance;
					},
				},
				content() {
					'step 0';
					if (!trigger.source || trigger.nosource || (trigger.source && trigger.source != player)) {
						player.say('春宵一刻值千金');
						player.draw();
					} else if (trigger.source && trigger.source == player && trigger.player != player) {
						var num = 0.35;
						if (trigger.source.hasMark('xjzh_meiren_chunxiao')) num *= 2;
						if (Math.random() <= num) {
							player.$fullscreenpop('春宵苦短', 'water');
							player.gainMaxHp();
							player.draw();
							if (trigger.source.hasMark('xjzh_meiren_chunxiao')) {
								trigger.source.chooseToDiscard(1, 'he', true);
								trigger.source.removeMark('xjzh_meiren_chunxiao', 1, false);
							}
						}
					}
					('step 1');
					if (!trigger.source || trigger.nosource) return;
					if (!trigger.source.hasMark('xjzh_meiren_chunxiao') && trigger.source != player) trigger.source.addMark('xjzh_meiren_chunxiao', 1, false);
				},
			},
			xjzh_meiren_meihun: {
				trigger: {
					target: 'useCardToTargeted',
				},
				forced: true,
				group: 'xjzh_meiren_meihun2',
				filter(event, player) {
					if (!get.tag(event.card, 'damage')) return false;
					return game.hasPlayer(function (current) {
						return current != player && current.countCards('h');
					});
				},
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt2('xjzh_meiren_meihun'), function (card, player, target) {
							return target != player && target.countCards('h') > 0;
						})
						.set('ai', function (target) {
							var player = _status.event.player;
							var att = get.attitude(player, target);
							if (att > 0) return 0;
							return 0.1 - att / target.countCards('h');
						});
					('step 1');
					if (result.targets?.length) {
						var target = result.targets[0];
						event.target = target;
						player
							.chooseControl(lib.suit)
							.set('prompt', '请选择一种花色')
							.set('ai', function () {
								return lib.suit.randomGet();
							});
					} else event.finish();
					('step 2');
					var suit = result.control;
					player.chat(get.translation(suit + 2));
					game.log(player, '选择了', '#y' + get.translation(suit + 2));
					if (
						target.countCards('h', {
							suit: suit,
						})
					) {
						target
							.chooseCard('h', '交给' + get.translation(player) + '一张' + get.translation(suit) + '花色的手牌', true, function (card, player) {
								return card.suit == _status.event.suit;
							})
							.set('suit', suit);
					} else {
						player.discardPlayerCard(target, true, 'h', 'visible');
						event.finish();
					}
					('step 3');
					if (result.cards?.length) player.gain(result.cards, target, 'give');
				},
			},
			xjzh_meiren_meihun2: {
				trigger: {
					global: 'gainEnd',
				},
				forced: true,
				filter(event, player) {
					if (event.source == player && event.player != player && event.cards && event.cards.length) return event.player.isAlive();
					return false;
				},
				logTarget(event, player) {
					return event.player;
				},
				content() {
					trigger.player.chooseToDiscard('he', trigger.cards.length, true);
				},
			},
			xjzh_meiren_tianzi: {
				trigger: {
					global: 'phaseUseBegin',
				},
				forced: true,
				group: 'xjzh_meiren_tianzi2',
				filter(event, player) {
					return player.countCards('h') <= event.player.countCards('h') && event.player != player;
				},
				content() {
					player.draw();
				},
			},
			xjzh_meiren_tianzi2: {
				trigger: {
					player: 'phaseDrawBegin',
				},
				filter(event, player) {
					for (var j = 0; j < game.players.length; j++) {
						if (player.countCards('h') >= game.players[j].countCards('h')) {
							return true;
						}
					}
					return false;
				},
				forced: true,
				content() {
					'step 0';
					player
						.chooseControl('选项一', '选项二', function () {
							if (
								player.hp <= 2 &&
								!player.countCards('h', function (card) {
									return get.tag(card, 'recover');
								})
							)
								return '选项二';
							return '选项一';
						})
						.set('prompt', '天姿<br><br><div class="text">选项一:失去1点体力</div><br><div class="text">选项二:将手牌调整至与体力一致摸体力上限张牌</div></br>');
					('step 1');
					if (result.control == '选项一') {
						player.loseHp();
						event.finish();
					} else {
						var num = player.countCards('h') - player.hp;
						if (player.countCards('h') > player.hp) {
							player.chooseToDiscard('h', true, num);
						} else {
							player.draw(num);
						}
					}
					('step 2');
					player.draw(Math.min(player.maxHp, 20));
					('step 3');
					if (player.isMaxHandcard(true)) trigger.cancel();
				},
			},
			xjzh_meiren_huizhi: {
				forced: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				nogainsSkill: true,
				_priority: 99,
				trigger: {
					player: ['phaseBegin', 'phaseEnd', 'xjzh_meiren_huizhi'],
				},
				filter(event, player, name) {
					return player.storage.xjzh_meiren_huizhi && player.storage.xjzh_meiren_huizhi.character.length;
				},
				group: 'xjzh_meiren_huizhi2',
				content() {
					'step 0';
					_status.noclearcountdown = true;
					event.videoId = lib.status.videoId++;
					var cards = player.storage.xjzh_meiren_huizhi.character.slice(0);
					var selection = player.storage.xjzh_meiren_huizhi.character.slice().randomSort();
					selection.sort(function (a, b) {
						return get.rank(b, true) - get.rank(a, true);
					});
					event.aiChoice = selection[0];
					var choice = '更换技能';
					if (event.aiChoice == player.storage.xjzh_meiren_huizhi.current || get.rank(event.aiChoice, true) < 4) choice = '弃置兰心';
					if (player.isOnline2()) {
						player.send(
							function (cards, id) {
								var dialog = ui.create.dialog(get.prompt('xjzh_meiren_huizhi'), [cards, 'character']);
								dialog.videoId = id;
							},
							cards,
							event.videoId
						);
					}
					event.dialog = ui.create.dialog(get.prompt('xjzh_meiren_huizhi'), [cards, 'character']);
					event.dialog.videoId = event.videoId;
					if (!event.isMine()) {
						event.dialog.style.display = 'none';
					}
					if (event.triggername == 'xjzh_meiren_huizhi') {
						event._result = {
							control: '更换武将',
						};
					} else {
						player
							.chooseControl('弃置兰心', '更换武将', 'cancel2')
							.set('ai', function () {
								return _status.event.choice;
							})
							.set('choice', choice);
					}
					('step 1');
					event.control = result.control;
					if (event.control == 'cancel2') {
						if (player.isOnline2()) {
							player.send('closeDialog', event.videoId);
						}
						delete _status.noclearcountdown;
						if (!_status.noclearcountdown) {
							game.stopCountChoose();
						}
						event.dialog.close();
						event.finish();
						return;
					}
					var next = player.chooseButton(true).set('dialog', event.videoId);
					next.set('current', player.storage.xjzh_meiren_huizhi.current);
					next.set('filterButton', function (button) {
						return button.link != _status.event.current;
					});
					if (event.control == '弃置兰心') {
						next.set('selectButton', [1, 2]);
					} else {
						next.set('ai', function (button) {
							return button.link === _status.event.choice ? 2.5 : 1 + Math.random();
						});
						next.set('choice', event.aiChoice);
					}
					var prompt = event.control == '弃置兰心' ? '选择弃置至多两张兰心' : '选择要切换的兰心';
					var func = function (id, prompt) {
						var dialog = get.idDialog(id);
						if (dialog) {
							dialog.content.childNodes[0].innerHTML = prompt;
						}
					};
					if (player.isOnline2()) {
						player.send(func, event.videoId, prompt);
					} else if (event.isMine()) {
						func(event.videoId, prompt);
					}
					('step 2');
					if (result.bool && event.control != '弃置兰心') {
						var choice = result.links[0];
						if (player.storage.xjzh_meiren_huizhi.current != choice) {
							player.storage.xjzh_meiren_huizhi.current = choice;
							player.storage.xjzh_meiren_huizhi.current2 = choice;
							game.broadcastAll(
								function (character, player) {
									player.sex = lib.character[character][0];
									player.group = lib.character[character][1];
									player.node.name.dataset.nature = get.groupnature(player.group);
								},
								choice,
								player
							);
							var skills = player.storage.xjzh_meiren_huizhi.map[choice];
							player.addAdditionalSkill('xjzh_meiren_huizhi', skills);
							player.flashAvatar('xjzh_meiren_huizhi', choice);
							game.log(player, '获得技能', '#g' + skills.reduce((a, b) => a + `〖${get.translation(b)}〗`, ''));
							skills.forEach((s) => player.popup(s));
						}
					} else {
						lib.skill.xjzh_meiren_huizhi.removeHuizhi(player, result.links.slice(0));
						lib.skill.xjzh_meiren_huizhi.addHuizhis(player, result.links.length);
					}
					('step 3');
					if (player.isOnline2()) {
						player.send('closeDialog', event.videoId);
					}
					event.dialog.close();
					delete _status.noclearcountdown;
					if (!_status.noclearcountdown) {
						game.stopCountChoose();
					}
				},
				init(player, skill) {
					if (!player.storage.xjzh_meiren_huizhi)
						player.storage.xjzh_meiren_huizhi = {
							character: [],
							map: {},
						};
				},
				intro: {
					onunmark(storage, player) {
						_status.characterlist.addArray(storage.character);
						storage.character = [];
					},
					mark(dialog, storage, player) {
						if (storage && storage.current) dialog.addSmall([[storage.current], 'character']);
						if (storage && storage.current2) dialog.add('----------------<br>----------------');
						if (storage && storage.character.length) {
							if (player.isUnderControl(true)) {
								dialog.addSmall([storage.character, 'character']);
							} else {
								dialog.addText('共有' + get.cnNumber(storage.character.length) + '张<兰心>');
							}
						} else {
							return '没有兰心';
						}
					},
					content(storage, player) {
						return '共有' + get.cnNumber(storage.character.length) + '张<兰心>';
					},
					markcount(storage, player) {
						if (storage && storage.character) return storage.character.length;
						return 0;
					},
				},
				banned: ['lisu', 'sp_xiahoudun', 'xushao', 'zhoutai', 'old_zhoutai', 'xjzh_meiren_linjiasheng', 'xjzh_sanguo_zuoci', 'xjzh_boss_zuoyou', 'xjzh_sanguo_zhoutai'],
				addHuizhi(player) {
					if (!player.storage.xjzh_meiren_huizhi) return;
					if (!_status.characterlist) {
						if (_status.connectMode) var list = get.charactersOL();
						else {
							var list = [];
							for (var i in lib.character) {
								if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
								list.push(i);
							}
						}
						game.countPlayer2(function (current) {
							list.remove(current.name);
							list.remove(current.name1);
							list.remove(current.name2);
							if (current.storage.xjzh_meiren_huizhi && current.storage.xjzh_meiren_huizhi.character) list.removeArray(current.storage.xjzh_meiren_huizhi.character);
						});
						_status.characterlist = list;
					}
					_status.characterlist.randomSort();
					var bool = false;
					for (var i = 0; i < _status.characterlist.length; i++) {
						var name = _status.characterlist[i];
						if (name.includes('zuoci') || name.indexOf('key') == 0 || lib.skill.xjzh_meiren_huizhi.banned.includes(name) || player.storage.xjzh_meiren_huizhi.character.includes(name)) continue;
						var skills = lib.character[name][3];
						for (var j = 0; j < skills.length; j++) {
							var info = lib.skill[skills[j]];
							if (info.charlotte || (info.unique && !info.gainable) || info.juexingji || info.limited || info.zhuSkill || info.hiddenSkill || info.dutySkill) skills.splice(j--, 1);
						}
						if (skills.length) {
							player.storage.xjzh_meiren_huizhi.character.push(name);
							player.storage.xjzh_meiren_huizhi.map[name] = skills;
							_status.characterlist.remove(name);
							return name;
						}
					}
				},
				addHuizhis(player, num) {
					var list = [];
					for (var i = 0; i < num; i++) {
						var name = lib.skill.xjzh_meiren_huizhi.addHuizhi(player);
						if (name) list.push(name);
					}
					if (list.length) {
						game.log(player, '获得了', get.cnNumber(list.length) + '张', '#g兰心');
						lib.skill.xjzh_meiren_huizhi.drawCharacter(player, list);
					}
				},
				removeHuizhi(player, links) {
					player.storage.xjzh_meiren_huizhi.character.removeArray(links);
					_status.characterlist.addArray(links);
					game.log(player, '移除了', get.cnNumber(links.length) + '张', '#g兰心');
				},
				drawCharacter(player, list) {
					game.broadcastAll(
						function (player, list) {
							if (player.isUnderControl(true)) {
								var cards = [];
								for (var i = 0; i < list.length; i++) {
									var cardname = 'xjzh_meiren_huizhi_card_' + list[i];
									lib.card[cardname] = {
										fullimage: true,
										image: 'character:' + list[i],
									};
									lib.translate[cardname] = get.rawName2(list[i]);
									cards.push(game.createCard(cardname, '', ''));
								}
								player.$draw(cards, 'nobroadcast');
							}
						},
						player,
						list
					);
				},
			},
			xjzh_meiren_huizhi2: {
				trigger: {
					global: 'gameDrawAfter',
					player: 'enterGame',
				},
				forced: true,
				popup: false,
				content() {
					lib.skill.xjzh_meiren_huizhi.addHuizhis(player, 3);
					player.markSkill('xjzh_meiren_huizhi');
					var next = game.createEvent('xjzh_meiren_huizhi');
					next.player = player;
					next._trigger = trigger;
					next.triggername = 'xjzh_meiren_huizhi';
					next.setContent(lib.skill.xjzh_meiren_huizhi.content);
				},
			},
			xjzh_meiren_lanxin: {
				charlotte: true,
				xjzh_xinghunSkill: true,
				nogainsSkill: true,
				_priority: 99,
				trigger: {
					player: ['damageEnd', 'loseHpEnd'],
				},
				forced: true,
				content() {
					lib.skill.xjzh_meiren_huizhi.addHuizhis(player, trigger.num);
				},
			},
			xjzh_meiren_gupan: {
				_priority: 99,
				charlotte: true,
				xjzh_xinghunSkill: true,
				nogainsSkill: true,
				frequent(event, card) {
					if (get.tag(event.card, 'damage')) return true;
					return false;
				},
				prompt(event, player) {
					return '你成为' + get.translation(event.player) + '' + get.translation(event.card) + '的目标,是否发动〖顾盼〗？';
				},
				trigger: {
					target: ['useCardToBefore'],
				},
				filter(event, player, name) {
					return _status.currentPhase != player && player.isDamaged() && player.storage.xjzh_meiren_huizhi && player.storage.xjzh_meiren_huizhi.character.length > 3 && event.player != player;
				},
				content() {
					'step 0';
					_status.noclearcountdown = true;
					event.videoId = lib.status.videoId++;
					var cards = player.storage.xjzh_meiren_huizhi.character.slice(0);
					var sto = player.storage.xjzh_meiren_huizhi;
					event.dialog = ui.create.dialog(get.prompt('xjzh_meiren_huizhi'), [cards, 'character']);
					event.dialog.videoId = event.videoId;
					if (!event.isMine()) {
						event.dialog.style.display = 'none';
					}
					('step 1');
					var next = player.chooseButton(true).set('dialog', event.videoId);
					var prompt = '选择要弃置的兰心';
					next.set('selectButton');
					next.set('filterButton', function (button) {
						return button.link != _status.event.current;
					});
					next.set('current', player.storage.xjzh_meiren_huizhi.current);
					var func = function (id, prompt) {
						var dialog = get.idDialog(id);
						if (dialog) {
							dialog.content.childNodes[0].innerHTML = prompt;
						}
					};
					if (player.isOnline2()) {
						player.send(func, event.videoId, prompt);
					} else if (event.isMine()) {
						func(event.videoId, prompt);
					}
					('step 2');
					if (result.bool) {
						lib.skill.xjzh_meiren_huizhi.removeHuizhi(player, result.links.slice(0));
						event.Q = result.links[0];
						var cardname = 'xjzh_meiren_huizhi_card_' + event.Q;
						var list = [];
						var skills = lib.character[event.Q][3];
						for (var j = 0; j < skills.length; j++) {
							list.push(skills[j]);
						}
						if (list.length <= 2) {
							player.draw(2);
						} else {
							player.draw(list.length);
						}
						player.markSkill('xjzh_meiren_huizhi');
						player.update();
						event.dialog.close();
					}
				},
			},
			xjzh_meiren_rouqing: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				_priority: 66,
				filter(event, player) {
					if (!player.countCards('h')) return false;
					var cards = player.getCards('h');
					for (var i = 1; i < cards.length; i++) {
						if (i.suit != cards[0].suit) return false;
					}
					return true;
				},
				content() {
					'step 0';
					player.showHandcards();
					var hs = player.getCards('h');
					event.suit = hs[0].suit;
					('step 1');
					ui.clear();
					var cards = get.cards(1);
					player.$throw(cards, 1000, 'nobroadcast');
					event.dialog = ui.create.dialog('柔情', cards, true);
					_status.dieClose.push(event.dialog);
					event.dialog.videoId = lib.status.videoId++;
					game.addVideo('cardDialog', null, ['柔情', get.cardsInfo(cards), event.dialog.videoId]);
					game.log(player, '展示了', cards);
					if (cards[0].suit == event.suit) event.goto(3);
					('step 2');
					event.dialog.setCaption('柔情');
					var cards = get.cards(1);
					player.$throw(cards, 1000, 'nobroadcast');
					game.log(player, '展示了', cards);
					event.dialog.buttons.push(ui.create.button(cards[0], 'card', event.dialog.buttons[0].parentNode));
					if (cards[0].suit != event.suit) event.redo();
					('step 3');
					var gain = [];
					for (var i = 0; i < event.dialog.buttons.length; i++) {
						gain.push(event.dialog.buttons[i].link);
					}
					player.gain(gain, 'gain2', 'log');
					('step 4');
					event.dialog.close();
					_status.dieClose.remove(event.dialog);
					game.addVideo('cardDialog', null, event.dialog.videoId);
				},
			},
			xjzh_meiren_jiaqi: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				_priority: 99,
				filter(event, player) {
					return player.countCards('he') > 0;
				},
				content() {
					'step 0';
					player.chooseCardTarget({
						position: 'he',
						complexCard: true,
						filterCard(card, player) {
							var suit = card.suit;
							if (Array.isArray(ui.selected.cards))
								for (var i of ui.selected.cards) {
									if (i.suit == suit) return false;
								}
							return true;
						},
						selectCard: [1, 4],
						filterTarget(card, player, target) {
							return player != target;
						},
						ai1(card) {
							var player = _status.event.player;
							if (ui.selected.cards.length == 1) return -1;
							return 8 - get.value(card);
						},
						ai2(target) {
							var att = get.attitude(_status.event.player, target);
							if (att >= 0) {
								if (target.isTurnedOver()) return att;
								if (
									target.hp < target.maxHp &&
									target.countCards('h', function (cardx) {
										return cardx.suit == ui.selected.cards[0].suit;
									})
								) {
									return att;
								}
							}
							if (att < 0) {
								if (target.isTurnedOver()) return -1;
								if (
									!target.countCards('he', function (cardx) {
										return cardx.suit == ui.selected.cards[0].suit;
									})
								) {
									return -att;
								}
							}
							return 0;
						},
						prompt: '是否弃置任意张不同花色的牌,令一名其他角色选择:弃置等量相同花色组成的牌;或翻面并获得你弃置的牌？',
					});
					('step 1');
					if (result.bool) {
						player.discard(result.cards);
						event.cardsss = result.cards;
						var ssuit = [];
						if (Array.isArray(result.cards))
							for (var i of result.cards) {
								var ssuits = i.suit;
								if (!ssuit.includes(ssuits)) {
									ssuit.push(ssuits);
								}
							}
						event.target = result.targets[0];
						var next = event.target.chooseToDiscard('he', result.cards.length, '是否弃置' + result.cards.length + '张牌回复一点体力？否则翻面并获得其弃置的牌.', function (card, player) {
							var suit = card.suit;
							if (!ssuit.includes(suit)) return false;
							if (Array.isArray(ui.selected.cards))
								for (var i of ui.selected.cards) {
									if (i.suit == suit || !ssuit.includes(suit)) return false;
								}
							return true;
						});
						next.set('ai', function (card) {
							if (event.target.isTurnedOver()) return -1;
							if (result.cards.length <= 2 && event.target.hp < event.target.maxHp) return 1;
							if (result.cards.length > 2) return -1;
							return 9 - get.value(card);
						});
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						event.target.recover();
					} else {
						event.target.turnOver();
						event.target.$gain2(event.cardsss);
						event.target.gain(event.cardsss);
					}
				},
				ai: {
					threaten: 0.6,
				},
			},
			xjzh_meiren_huimeng: {
				trigger: {
					target: 'useCardToTargeted',
				},
				forced: true,
				filter(event, player) {
					return event.player != player && !player.isMaxHandcard(true);
				},
				content() {
					'step 0';
					if (player.countCards('h') <= 0) {
						var num = player.hp + 1;
						event.cards = get.cards(num);
						game.cardsGotoOrdering(event.cards);
					} else {
						player.draw();
						event.finish();
					}
					('step 1');
					event.dialog = ui.create.dialog('〖回梦〗:选择一种花色的牌获得之.', event.cards);
					var split = {
						spade: [],
						heart: [],
						club: [],
						diamond: [],
					};
					for (const card of event.cards) {
						let suit = card.suit;
						split[suit].push(card);
					}
					var controlList = [];
					for (const suit in split) {
						if (split[suit].length) controlList.push(lib.translate[suit]);
					}
					var next = player.chooseControl([...controlList], event.dialog);
					next.set('ai', function () {
						var splitValue = {};
						for (const suit in split) {
							splitValue[suit] = split[suit].reduce((v, b) => v + get.value(b, player), 0);
						}
						if (Object.keys(splitValue).some((suit) => splitValue[suit] > 10)) {
							let suit = Object.keys(splitValue).reduce((a, b) => (splitValue[a] > splitValue[b] ? a : b));
							return lib.translate[suit];
						}
					});
					event._split = split;
					('step 2');
					trigger.changeToZero();
					for (const suit in event._split) {
						if (lib.translate[suit] == result.control) event.cards = event._split[suit];
					}
					('step 3');
					if (event.cards.length) {
						player.gain(event.cards, 'gain2', 'log');
					}
				},
				ai: {
					threaten: 1.2,
				},
			},
			xjzh_meiren_xianyou: {
				trigger: {
					player: 'xjzh_meiren_huimengAfter',
				},
				forced: true,
				marktext: '游',
				intro: {
					name: '仙游',
					content: 'mark',
				},
				_priority: 98,
				group: ['xjzh_meiren_xianyou1', 'xjzh_meiren_xianyou2', 'xjzh_meiren_xianyou3'],
				init(player) {
					player.storage.xjzh_meiren_xianyou = 0;
				},
				content() {
					player.addMark('xjzh_meiren_xianyou', 1);
				},
				ai: {
					threaten: 3,
				},
			},
			xjzh_meiren_xianyou1: {
				trigger: {
					global: 'shaBegin',
				},
				prompt(event, player) {
					return '是否移除一个标记对' + get.translation(event.player) + '使用一张决斗';
				},
				_priority: 66,
				filter(event, player) {
					return event.player != player && event.target == player && player.hasMark('xjzh_meiren_xianyou');
				},
				check(event, player) {
					if (get.attitude(player, event.player) < 0) return 1;
					if (get.attitude(player, event.player) > 0) return 0;
					if (player.countCards('h', { name: 'sha' })) return 1.5;
					return player.hasMark('xjzh_meiren_xianyou');
				},
				content() {
					'step 0';
					player.removeMark('xjzh_meiren_xianyou', 1);
					player.useCard({ name: 'juedou' }, trigger.player);
					('step 1');
					if (player.getStat('damage')) {
						trigger.untrigger();
						trigger.finish();
					}
				},
				ai: {
					threaten: 3,
				},
			},
			xjzh_meiren_xianyou2: {
				trigger: {
					target: 'juedouBegin',
				},
				prompt(event, player) {
					return '是否移除一个标记对' + get.translation(event.player) + '使用一张【杀】';
				},
				_priority: 66,
				filter(event, player) {
					return event.player != player && event.target == player && player.hasMark('xjzh_meiren_xianyou');
				},
				check(event, player) {
					if (get.attitude(player, event.player) < 0) return 1;
					if (player.countCards('h', { name: 'tao' })) return 0.1;
					if (event.player.countCards('h') <= 1) return 0.5;
					return player.hasMark('xjzh_meiren_xianyou');
				},
				content() {
					'step 0';
					player.removeMark('xjzh_meiren_xianyou', 1);
					player.useCard({ name: 'sha' }, trigger.player);
					('step 1');
					if (!player.getStat('damage')) {
						player.chooseToDiscard(2, 'he', true);
					}
				},
				ai: {
					threaten: 3,
				},
			},
			xjzh_meiren_xianyou3: {
				trigger: {
					global: 'damageAfter',
				},
				filter(event, player) {
					if (!event.source || event.source.countCards('h') <= 0) return false;
					if (!event.player || event.player.countCards('h') <= 0) return false;
					if (event.player.isDead() || event.source.isDead()) return false;
					if (player.countCards('h') < player.countMark('xjzh_meiren_xianyou')) return false;
					return true;
				},
				_priority: 33,
				check(event, player) {
					if (get.attitude(player, event.source) > 0 && event.source.countCards('h') > event.player.countCards('h')) return 0;
					if (get.attitude(player, event.source) < 0 && event.source.countCards('h') < event.player.countCards('h')) return 0;
					return 0.5;
				},
				prompt(event, player) {
					var str = get.translation(event.player) + ' 受到了';
					if (event.source) {
						str += ' ' + get.translation(event.source) + ' 造成的伤害';
					} else {
						str += '伤害';
					}
					str += ',是否发动〖仙游〗令其交换手牌？';
					return str;
				},
				content() {
					'step 0';
					var num = player.countCards('h');
					player.removeMark('xjzh_meiren_xianyou', num);
					('step 1');
					if (trigger.player == player) {
						player.swapHandcards(trigger.source);
					} else {
						trigger.player.swapHandcards(trigger.source);
						player.draw();
					}
				},
			},
			xjzh_meiren_zhongqing: {
				trigger: {
					global: 'gameStart',
					player: 'enterGame',
				},
				firstDo: true,
				_priority: 100,
				forced: true,
				init(player, skill) {
					player.storage.xjzh_meiren_zhongqing = new Map([
						['target', null],
						['count', 0],
					]);
				},
				group: ['xjzh_meiren_zhongqing_target2'],
				async content(event, trigger, player) {
					const { targets } = await player
						.chooseTarget('〖钟情〗:选择一个目标令其成为你的钟情对象', true, lib.filter.notMe)
						.set('ai', (target) => get.attitude(player, target) > 0)
						.forResult();

					if (targets) {
						let storage = player.storage.xjzh_meiren_zhongqing;
						storage.set('target', targets[0]);
						targets[0].addSkill('xjzh_meiren_zhongqing_target');
					}
				},
				subSkill: {
					target: {
						mark: true,
						charlotte: true,
						intro: {
							content: '<font color=yellow>黄丹雪</font>的钟情对象',
						},
					},
					target2: {
						trigger: {
							global: 'useCardToPlayer',
						},
						filter(event, player) {
							let targets = game.findPlayer((current) => current.hasSkill('xjzh_meiren_zhongqing_target'));
							if (!targets || targets.isDead() || player.isDead()) return false;
							if (!event.isFirstTarget) return false;
							if ([player, targets].includes(event.player)) return false;
							if (event.targets.some((item) => [targets, player].includes(item))) return true;
							return false;
						},
						forced: true,
						_priority: 10,
						async content(event, trigger, player) {
							let evt = trigger.parent,
								targets = game.findPlayer((current) => current.hasSkill('xjzh_meiren_zhongqing_target'));
							if (evt.targets.includes(player)) {
								evt.targets.remove(player);
								evt.targets.add(targets);
								player.line(targets, 'green');
								game.log(trigger.card, '的目标改为了', targets);
							} else {
								evt.targets.remove(targets);
								evt.targets.add(player);
								player.line(targets, 'green');
								game.log(trigger.card, '的目标改为了', player);
							}
							await game.asyncDraw([player, targets], 1);
							let storage = player.storage.xjzh_meiren_zhongqing;
							storage.set('count', storage.get('count') + 1);
						},
					},
				},
			},
			xjzh_meiren_yiqing: {
				trigger: {
					target: 'useCardToTargeted',
				},
				forced: true,
				_priority: 3,
				prompt(event, player) {
					return `〖移情〗:${get.translation(player)}成为${get.translation(event.player)}的目标,是否判定将目标转移给上家或下家？`;
				},
				filter(event, player) {
					let evt = event.parent;
					if (event.targets > 1 || evt.targets > 1) return false;
					if (event.player == player) return false;
					if (event.player.hasSex('female') && !get.tag(event.card, 'damage')) return true;
					if (event.player.hasSex('male') && get.tag(event.card, 'damage')) return true;
					return false;
				},
				async content(event, trigger, player) {
					let heartEffect = get.effect(player.next, trigger.card, player, player) - get.effect(player, trigger.card, player, player);
					let spadeEffect = get.effect(player.previous, trigger.card, player, player) - get.effect(player, trigger.card, player, player);
					const [judge, suit] = await player
						.judge((card) => {
							let suit = card.suit;
							if (suit == 'spade') {
								return spadeEffect;
							} else if (suit == 'heart') {
								return heartEffect;
							}
							return 0;
						}, '〖移情〗')
						.set('judge2', (card) => {
							let suit = card.suit;
							return ['spade', 'heart'].includes(suit);
						})
						.forResult('judge', 'suit');
					if (['heart', 'spade'].includes(suit)) {
						player.draw();
						let evt = trigger.parent;
						switch (suit) {
							case 'heart':
								{
									evt.triggeredTargets1.remove(player);
									evt.targets.remove(player);
									evt.targets.add(player.next);
									player.line(player.next, 'green');
									game.log(trigger.player, '使用的', trigger.card, '的目标被转移给了', player.next, '.');
								}
								break;
							case 'spade':
								{
									evt.triggeredTargets1.remove(player);
									evt.targets.remove(player);
									evt.targets.add(player.previous);
									player.line(player.previous, 'green');
									game.log(trigger.player, '使用的', trigger.card, '的目标被转移给了', player.previous, '.');
								}
								break;
						}
					}
				},
			},
			xjzh_meiren_shangqing: {
				forced: true,
				juexingji: true,
				firstDo: true,
				_priority: 6,
				mark: true,
				marktext: '伤',
				intro: {
					name: '伤情',
					mark(dialog, storage, player) {
						storage = player.storage.xjzh_meiren_zhongqing;
						if (!storage) return;
						return '已发动〖钟情〗:' + storage.get('count') + '次';
					},
					markcount(storage, player) {
						storage = player.storage.xjzh_meiren_zhongqing;
						return storage.get('count');
					},
				},
				trigger: {
					player: 'phaseBefore',
				},
				filter(event, player) {
					let storage = player.storage.xjzh_meiren_zhongqing;
					if (storage.get('count') < 6) return false;
					if (player.storage.xjzh_meiren_shangqing) return false;
					return true;
				},
				init(player, skill) {
					player.storage.xjzh_meiren_shangqing = false;
				},
				derivation: ['xjzh_meiren_moqing'],
				async content(event, trigger, player) {
					player.awakenSkill(event.name);
					player.storage.xjzh_meiren_shangqing = true;
					let target = game.findPlayer((current) => current.hasSkill('xjzh_meiren_zhongqing_target'));
					target.removeSkill('xjzh_meiren_zhongqing_target');
					delete player.storage.xjzh_meiren_zhongqing;
					player.changeSkills(['xjzh_meiren_moqing', 'xjzh_meiren_zhongqing']);
					const { targets } = await player
						.chooseTarget('〖伤情〗:选择一个目标与其交换体力上限与体力值', (card, player, target) => {
							return player != target && (target.hp != player.hp || target.maxHp != player.maxHp);
						})
						.set('ai', (target) => {
							let att = get.attitude(player, target);
							if (att > 0) return target.getHp(true) < player.getHp(true) || target.maxHp < player.maxHp;
							if (att < 0) return target.getHp(true) > player.getHp(true) || target.maxHp > player.maxHp;
							return 0;
						})
						.forResult();

					if (targets) player.swapMaxHp(targets[0], true);
				},
			},
			xjzh_meiren_moqing: {
				trigger: {
					player: 'damageAfter',
				},
				forced: true,
				_priority: 12,
				filter(event, player) {
					return !player.isDying();
				},
				check() {
					return 1;
				},
				mod: {
					targetEnabled(card, player, target) {
						if (get.tag(card, 'multitarget')) return false;
					},
				},
				async content(event, trigger, player) {
					const { targets } = await player
						.chooseTarget('〖默情〗:请选择一个目标与其交换体力值', (caed, target, player) => {
							return target != player && target.getHp(true) != player.getHp(true);
						})
						.set('ai', (target) => {
							let att = get.attitude(player, target);
							if (att < 0) return player.getHp(true) < target.getHp(true);
							if (att > 0) return player.getHp(true) > target.getHp(true);
							return att > 0;
						})
						.forResult();

					if (targets) {
						let hp1 = targets[0].getHp(true),
							hp2 = player.getHp(true);
						player.hp = hp1;
						targets[0].hp = hp2;
						player.update();
						targets[0].update();
						if (targets[0].getHp(true) > player.getHp(true)) player.insertEvent(event.name, 'phaseUse');
					}
				},
			},
			xjzh_qixia_qice: {
				trigger: {
					global: 'drawEnd',
				},
				filter(event, player) {
					let list = [];
					if (!event.result && !event.result.length) return false;
					for (let card of event.result) {
						list.add(get.type(card));
					}
					if (event.player == player) return false;
					return list.length >= 2;
				},
				forced: true,
				_priority: 2,
				prompt(event, player) {
					return '〖奇策〗:是否选择并弃置' + get.translation(event.player) + '本次摸牌的一个类别中的所有牌';
				},
				check(event, player) {
					return 0.5;
				},
				async content(event, trigger, player) {
					let list = [];
					for (let card of trigger.result.slice(0)) {
						if (!list.includes(get.type(card))) list.add(get.type(card));
					}
					let dialog = ui.create.dialog('hidden');
					dialog.add('' + get.translation(trigger.player) + '本次摸的牌');
					dialog.add([trigger.result.slice(0), 'vcard']);
					const { control } = await player
						.chooseControl(list, 'cancel2')
						.set('ai', function () {
							return list.randomGet();
						})
						.set('dialog', dialog)
						.forResult();

					if (control && control != 'cancel2') {
						//QQQ
						let cards = trigger.result.filter((card) => {
							return get.type(card) == control;
						});
						trigger.player.discard(cards);
						trigger.player.draw(cards.length);
					}
				},
			},
			xjzh_qixia_xiongmao: {
				enable: 'phaseUse',
				usable: 1,
				content() {
					let list = game
						.xjzh_wujiangpai()
						.filter((name) => {
							return lib.character[name][0] == 'female';
						})
						.randomGet();
					player.setAvatar('xjzh_qixia_daxiongxiaomao', list);
					let info = lib.character[list],
						arr = [];
					player.sex = info[0];
					if (typeof info[2] == 'string') {
						if (info[2].includes('/')) {
							arr = info[2].split('/');
							player.maxHp = Number(arr[1]);
							player.hp = Number(arr[0]);
						} else {
							player.maxHp = Number(info[2]);
							player.hp = Number(info[2]);
						}
					} else {
						player.maxHp = info[2];
						player.hp = info[2];
					}
					player.changeGroup(info[1]);
					player.update();
				},
				ai: {
					order(item, player) {
						return player.hp < player.maxHp;
					},
					result: {
						player(player, target, card) {
							if (!player) return;
							if (player.hp < player.maxHp) return 1;
							return 0.6;
						},
					},
				},
			},
			xjzh_qixia_jiyuan: {
				trigger: {
					global: ['damageBegin'],
				},
				filter(event, player) {
					return event.player != player;
				},
				prompt(event, player) {
					var str = '〖急援〗:' + get.translation(event.player) + '即将受到';
					if (event.source) str += '来自于' + get.translation(event.source);
					if (event.card) str += '' + get.translation(event.card);
					str += '' + get.translation(event.num) + '点伤害,是否代替其受到伤害';
					return str;
				},
				group: ['xjzh_qixia_jiyuan_draw'],
				check(event, player) {
					var att = get.attitude(event.player, player);
					var players = game.countPlayer(function (current) {
						return player.isFriendsOf(current);
					});
					if (att < 0 || player.hp <= 2) return 0;
					return players;
				},
				content() {
					trigger.player.draw(2);
					game.log(player, '代替', trigger.player, '承受了伤害');
					trigger.player = player;
				},
				subSkill: {
					draw: {
						trigger: {
							player: 'phaseBefore',
						},
						forced: true,
						popup: false,
						_priority: 12,
						filter(event, player) {
							return (
								game.countPlayer(function (current) {
									return player.isFriendsOf(current);
								}) > 0
							);
						},
						content() {
							var num = game.countPlayer(function (current) {
								return player.isFriendsOf(current);
							});
							var num2 = player.getDamagedHp();
							var num3 = num - num2;
							player.recover(Math.max(1, num));
							player.draw(Math.max(1, num3));
						},
					},
				},
			},
			xjzh_qixia_jibian: {
				trigger: {
					player: 'damageAfter',
				},
				filter(event, player) {
					return event.source && event.source != player && event.source.isAlive();
				},
				check(event, player) {
					let att = get.attitude(event.source, player);
					if (att < 0) return 1;
				},
				prompt(event, player) {
					let num = Math.max(1, Math.abs(player.hp - event.source.hp));
					let skills = event.source.getSkills(null, false, false).filter((skill) => {
						if (skill.includes('jycw')) return false;
						if (lib.translate[skill] && lib.translate[skill + '_info']) {
							let str = lib.translate[skill + '_info'];
							if (str.includes('伤害')) return true;
						}
					});
					return `〖机变〗:受到${get.translation(event.source)}的伤害,是否摸${get.translation(num)}张牌${skills.length ? `并将其技能${skills.map((i) => '【' + get.translation(i) + '】')}替换为〖仁德〗}` : ''}？`;
				},
				async content(event, trigger, player) {
					let num = Math.max(1, Math.abs(player.hp - trigger.source.hp));
					let num2 = Math.min(13, player.hp + trigger.source.hp);
					await player.gain(
						get.randomCards(num, function (card) {
							return card.number == num2;
						}),
						player,
						'giveAuto'
					);
					let skills = trigger.source.getSkills(null, false, false).filter((skill) => {
						if (!lib.translate[skill] || !lib.translate[skill + '_info']) return false;
						let str = lib.translate[skill + '_info'];
						if (str.includes('伤害')) return true;
					});
					if (!skills.length) return;
					for (let skill of skills) {
						let newSkill = skill + 'rende';
						if (!lib.skill[newSkill]) {
							lib.skill[newSkill] = lib.skill.rende;
							lib.skill[newSkill].usable = 1;
							lib.translate[newSkill] = lib.translate.rende;
							let str = lib.translate.rende_info.slice(0);
							let str2 = '出牌阶段';
							let str3 = str.replace(str2, '出牌阶段限一次');
							lib.translate[newSkill + '_info'] = str3;
						}
						if (!trigger.source.hasSkill(newSkill)) {
							trigger.source.changeSkills([newSkill], [skill]);
						}
					}
				},
			},
			xjzh_qixia_tubian: {
				enable: 'phaseUse',
				usable: 1,
				group: ['xjzh_qixia_tubian_damage'],
				prompt: '〖图变〗:选择一名角色令其更换武将',
				filterTarget: true,
				selectTarget: 1,
				async content(event, trigger, player) {
					const list = Object.keys(lib.character).randomGets(3);
					const { links } = await player
						.chooseButton(['请选择武将', [list, 'character']])
						.set('ai', (button) => Math.random())
						.forResult();
					if (links?.length) {
						event.target.reinit(event.target.name, links[0]);
					}
				},
				ai: {
					order: 10,
					result: {
						player: 1,
					},
				},
				subSkill: {
					damage: {
						trigger: {
							player: 'damageEnd',
						},
						usable: 1,
						forced: true,
						prompt: '〖图变〗:选择一名角色令其更换武将',
						//出牌阶段/你受到伤害后限一次,你可以选择一名角色令其更换武将,若其性别与你选择的武将性别不一致,你选择并令其失去当前武将牌上的一个技能,你选择令其获得你选择武将牌上的一个技能,否则其(或你为目标时)获得你选择的武将牌上的所有技能,若如此做,你随机切换你的武将性别.技能结算后,若你的武将性别为双,你获得一点体力上限,若你未改变性别,你回复一点体力并摸一张牌,否则你失去一点体力
						async content(event, trigger, player) {
							const list = Object.keys(lib.character).randomGets(3);
							const { links } = await player
								.chooseButton(['请选择武将', [list, 'character']])
								.set('ai', (button) => Math.random())
								.forResult();
							if (links?.length) {
								const { targets } = await player
									.chooseTarget('选择一名角色令其更换武将', (c, p, t) => p != t)
									.set('ai', (t) => Math.random())
									.forResult();
								if (targets?.length) {
									targets[0].reinit(targets[0].name, links[0]);
								}
							}
						},
					},
				},
			},
			xjzh_huoying_fenshen: {
				enable: 'phaseUse',
				audio: 'ext:仙家之魂/audio/skill:1',
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				init(player) {
					if (!player.storage.xjzh_huoying_fenshen) player.storage.xjzh_huoying_fenshen = 1;
				},
				selectTarget() {
					let player = get.player();
					let num = player.storage.xjzh_huoying_fenshen;
					return [1, num];
				},
				filter(event, player) {
					return player.countCards('h') && !player.hasSkill('xjzh_huoying_fenshen_off');
				},
				multitarget: true,
				multiline: true,
				async content(event, trigger, player) {
					player.chooseToCompare(event.targets).callback = () => {
						if (event.num1 > event.num2) {
							if (player.storage.xjzh_huoying_fenshen < 3) player.storage.xjzh_huoying_fenshen += 1;
							player.chooseDrawRecover(1, 1, true, '〖分身〗:请选择摸两张牌或回复一点体力');
							let evt = event.getParent('phase');
							if (evt && evt.getParent && !evt.xjzh_huoying_fenshen) evt.xjzh_huoying_fenshen = true;
						} else {
							player.addTempSkill('xjzh_huoying_fenshen_off');
						}
					};
				},
				contentAfter() {
					let evt = event.getParent('phase');
					if (evt && evt.getParent && evt.xjzh_huoying_fenshen) {
						var next = game.createEvent('xjzh_huoying_fenshen_delete', false, evt.parent);
						next.player = player;
						next.setContent(function () {
							if (player.storage.xjzh_huoying_fenshen) {
								player.storage.xjzh_huoying_fenshen = 1;
							}
						});
					}
				},
				ai: {
					order: 7,
					result: {
						target(player, target) {
							var hs = player.getCards('h');
							for (var i = 0; i < hs.length; i++) {
								if (get.value(hs[i]) <= 6) {
									if (hs[i].number >= 11) return -1;
								}
							}
							return -0.2;
						},
						player(player, target, card) {
							var hs = player.getCards('h');
							for (var i = 0; i < hs.length; i++) {
								if (get.value(hs[i]) <= 6) {
									if (hs[i].number >= 11) return 1;
								}
							}
							return 0.5;
						},
					},
				},
				subSkill: { off: {} },
			},
			xjzh_huoying_luoxuan: {
				enable: 'phaseUse',
				usable: 1,
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(card, player) {
					return player.countCards('he') > 0;
				},
				chooseButton: {
					dialog() {
						var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
						for (var i = 0; i < list.length; i++) {
							list[i] = ['锦囊', '', list[i]];
						}
						return ui.create.dialog(get.translation('xjzh_huoying_luoxuan'), [list, 'vcard']);
					},
					filter(button, player) {
						return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
					},
					check(button) {
						var player = _status.event.player;
						var recover = 0,
							lose = 1,
							players = game.filterPlayer();
						for (var i of players) {
							if (i.hp == 1 && get.damageEffect(i, player, player) > 0 && !i.hasSha()) {
								return button.link[2] == 'juedou' ? 2 : -1;
							}
							if (!i.isOut()) {
								if (i.hp < i.maxHp) {
									if (get.attitude(player, i) > 0) {
										if (i.hp < 2) {
											lose--;
											recover += 0.5;
										}
										lose--;
										recover++;
									} else if (get.attitude(player, i) < 0) {
										if (i.hp < 2) {
											lose++;
											recover -= 0.5;
										}
										lose++;
										recover--;
									}
								} else {
									if (get.attitude(player, i) > 0) {
										lose--;
									} else if (get.attitude(player, i) < 0) {
										lose++;
									}
								}
							}
						}
						if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
						if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
						return button.link[2] == 'wuzhong' ? 1 : -1;
					},
					backup(links, player) {
						return {
							filterCard: true,
							position: 'he',
							selectCard: 1,
							popname: true,
							audio: 'xjzh_huoying_luoxuan',
							viewAs: { name: links[0][2] },
							precontent() {
								var chat = ['这招是我自创的忍术——螺旋手里剑', '有话直说,这就是我的忍道'].randomGet();
								player.say(chat);
							},
						};
					},
					prompt(links, player) {
						return '将一张牌当作' + get.translation(links[0][2]) + '使用';
					},
				},
				ai: {
					order: 6,
					result: {
						player(player) {
							var num = 0;
							var cards = player.getCards('h');
							if (Array.isArray(cards))
								for (var i of cards) {
									num += Math.max(0, get.value(i, player, 'raw'));
								}
							num /= cards.length;
							num *= Math.min(cards.length, player.hp);
							return 12 - num;
						},
					},
					threaten: 1.6,
				},
			},
			xjzh_huoying_zuidun: {
				trigger: {
					global: 'dying',
				},
				frequent: false,
				mark: true,
				marktext: '嘴',
				intro: {
					name: '嘴遁',
					content(storage, player) {
						let num = player.countMark('xjzh_huoying_zuidun');
						return `已发动${num}次`;
					},
				},
				mode: ['identity', 'guozhan'],
				filter(event, player) {
					return player.countMark('xjzh_huoying_zuidun') < 2 && player != game.zhu && event.player != game.zhu && event.player != player;
				},
				prompt(event, player) {
					return `嘴遁:是否令${get.translation(event.player)}改变${get.mode() == 'guozhan' ? '势力' : '身份'}与你一致？`;
				},
				async content(event, trigger, player) {
					player.addMark('xjzh_huoying_zuidun', 1, false);
					let list = [
						[1, `选项一:将所有牌交给漩涡鸣人,立即阵亡`],
						[2, `选项二:改变${get.mode() == 'guozhan' ? '势力' : '身份'}与漩涡鸣人一致`],
					];
					const { links } = await trigger.player
						.chooseButton([`嘴遁:请选择一项`, [list, 'textbutton']], true)
						.set('ai', (button) => {
							let id = player.identity,
								num = game.countPlayer((current) => current.identity == id),
								link = button.link;
							if (id == event.player.identity) return link == 2;
							if (num + 1 > game.players.length - num) return link == 2;
							return link == [1, 2].randomGet();
						})
						.forResult();

					if (links) {
						switch (links[0]) {
							case 1: {
								player.gain(trigger.player.getCards('hej'), 'give', trigger.player);
								trigger.player.die().source = trigger.parent.source;
								break;
							}
							case 2: {
								let id = player.identity;
								trigger.player.identity = id;
								trigger.player.setIdentity(id);
								trigger.player.identityShown = true;
								break;
							}
						}
					}
					if (trigger.player.isAlive()) {
						trigger.player.loseMaxHp();
						await trigger.player.recoverTo(trigger.player.maxHp);
						trigger.player.draw(trigger.player.getHp(true));
						player.draw(trigger.player.getHp(true));
					}
					if (player.countMark('xjzh_huoying_zuidun') >= 2) player.removeSkill('xjzh_huoying_zuidun', true);
				},
			},
			xjzh_huoying_kaigua: {
				trigger: {
					player: 'dying',
				},
				forced: true,
				mark: true,
				marktext: '挂',
				intro: {
					name: '开挂',
					content: 'limited',
				},
				limited: true,
				juexingji: true,
				_priority: 1,
				derivation: ['xjzh_huoying_luoxuan', 'xjzh_huoying_dunshu', 'xjzh_huoying_liudaofenshen'],
				async content(event, trigger, player) {
					player.maxHp = 3;
					player.update();
					player.recoverTo(3);
					player.discard(player.getCards('j'));
					player.link(false);
					player.turnOver(false);
					let skills = [
						['xjzh_huoying_luoxuan', 'xjzh_huoying_dunshu', 'xjzh_huoying_liudaofenshen'],
						['xjzh_huoying_fenshen', 'xjzh_huoying_zuidun', 'xjzh_huoying_kaigua'],
					];

					player.changeSkills(skills[0], skills[1]);
					let node, node2;
					if (player.name2 && player.name2 == 'xjzh_huoying_liudaomingren') {
						node = player.node.avatar2;
						node2 = player.node.name2;
					} else {
						node = player.node.avatar;
						node2 = player.node.name;
					}
					node2.innerHTML = get.slimName('xjzh_huoying_liudaomingren');
					game.broadcastAll((node) => {
						node.setBackgroundImage('extension/仙家之魂/skin/yuanhua/xjzh_huoying_liudaomingren.jpg');
					}, node);
					game.log(player, '使用了自己的外挂');
					game.log(player, '进入了六道模式');
					player.update();
				},
			},
			xjzh_huoying_dunshu: {
				mod: {
					judge(player, result) {
						if (_status.event.type == 'phase') {
							if (result.bool == false) {
								result.bool = null;
							} else {
								result.bool = false;
							}
						}
					},
					cardUsable(card, player, num) {
						if (_status.currentPhase != player) return num;
						return Infinity;
					},
				},
				group: ['xjzh_huoying_dunshu_yang', 'xjzh_huoying_dunshu_ying', 'xjzh_huoying_dunshu_huihe', 'xjzh_huoying_dunshu_fumian'],
				subSkill: {
					yang: {
						audio: 'ext:仙家之魂/audio/skill:1',
						trigger: {
							player: ['damageBegin', 'loseHpBegin'],
						},
						forced: true,
						filter(event, player) {
							return _status.currentPhase != player;
						},
						async content(event, trigger, player) {
							player.draw(trigger.num);
							if (game.countPlayer((current) => current.isDamaged())) {
								const { targets } = await player
									.chooseTarget(
										`阳遁术:选择一名角色,令其回复一点体力`,
										trigger.num > 1
											? [
												1,
												Math.min(
													trigger.num,
													game.countPlayer((current) => current.isDamaged())
												),
											]
											: 1,
										(card, player, target) => {
											return target.isDamaged();
										}
									)
									.set('ai', (target) => {
										return get.attitude(player, target);
									})
									.forResult();

								if (targets) {
									targets.map((target) => {
										target.recover();
									});
								}
							}
							trigger.changeToZero();
						},
						ai: {
							nodamage: true,
							effect: {
								target(card, player, target) {
									//QQQ
									if (get.tag(card, 'damage') || get.tag(card, 'loseHp')) return 'zeroplayertarget';
								},
							},
						},
					},
					ying: {
						audio: 'ext:仙家之魂/audio/skill:1',
						trigger: {
							source: 'damageBegin1',
						},
						forced: true,
						filter(event, player) {
							return _status.currentPhase == player;
						},
						async content(event, trigger, player) {
							let history = player.getHistory('sourceDamage');
							if (history.length) trigger.num += history.length;
						},
					},
					fumian: {
						audio: 'ext:仙家之魂/audio/skill:1',
						trigger: {
							player: ['turnOver', 'linkBefore'],
						},
						forced: true,
						async content(event, trigger, player) {
							player.turnOver(false);
							player.link(false);
						},
						ai: {
							noturn: true,
							nolink: true,
						},
					},
					huihe: {
						audio: 'ext:仙家之魂/audio/skill:1',
						trigger: {
							player: 'phaseBefore',
						},
						forced: true,
						async content(event, trigger, player) {
							game.countPlayer((current) => {
								current.addTempSkill('baiban');
							});
						},
					},
				},
			},
			xjzh_huoying_liudaofenshen: {
				trigger: {
					player: 'phaseJieshuEnd',
				},
				filter(event, player) {
					return !player.storage.xjzh_huoying_liudaofenshen;
				},
				group: 'xjzh_huoying_liudaofenshen2',
				getinfo(player) {
					var js = player.getCards('j');
					var js2 = [];
					for (var k = 0; k < js.length; k++) {
						var name = js[k].viewAs || js[k].name;
						js2.push(name);
					}
					var isDisabled = [];
					for (var j = 1; j < 7; j++) {
						isDisabled.push(player.isDisabled(j));
					}
					var storage = {
						player: player,
						hs: player.getCards('h'),
						es: player.getCards('e'),
						isDisabled: isDisabled,
						hp: player.hp,
						maxHp: player.maxHp,
						_disableJudge: player.storage._disableJudge,
						isTurnedOver: player.isTurnedOver(),
						isLinked: player.isLinked(),
						js: js,
						js2: js2,
					};
					return storage;
				},
				content() {
					'step 0';
					player.loseHp();
					player.storage.xjzh_huoying_liudaofenshen = true;
					var storage = [];
					storage.push(lib.skill.xjzh_huoying_liudaofenshen.getinfo(player));
					player.storage.xjzh_huoying_liudaofenshen1 = storage;
					('step 1');
					player.maxHp = 3;
					player.hp = 3;
					player.lose(player.getCards('hej'))._triggered = null;
					player.directgain(get.cards(3));
					player.addSkill('xjzh_tongyong_baiban');
					let skills = ['xjzh_huoying_luoxuan'];
					player.storage.xjzh_tongyong_baiban.addArray(skills);
					player.update();
					('step 2');
					setTimeout(() => {
						let node, node2;
						if (player.name2 && player.name2 == 'xjzh_huoying_liudaomingren') {
							node = player.node.avatar2;
							node2 = player.node.name2;
						} else {
							node = player.node.avatar;
							node2 = player.node.name;
						}
						node2.innerHTML = get.slimName('xjzh_huoying_liudaomingrenfs');
						game.broadcastAll((node) => {
							node.setBackgroundImage('extension/仙家之魂/skin/min/六道鸣人·分身.jpg');
						}, node);
					}, 100);
				},
			},
			xjzh_huoying_liudaofenshen2: {
				trigger: {
					player: ['dieBegin', 'phaseZhunbeiBegin'],
				},
				forceDie: true,
				forced: true,
				filter(event, player) {
					return player.storage.xjzh_huoying_liudaofenshen;
				},
				content() {
					'step 0';
					if (trigger.name == 'die') trigger.cancel();
					('step 1');
					setTimeout(() => {
						let node, node2;
						if (player.name2 && player.name2 == 'xjzh_huoying_liudaomingren') {
							node = player.node.avatar2;
							node2 = player.node.name2;
						} else {
							node = player.node.avatar;
							node2 = player.node.name;
						}
						node2.innerHTML = get.slimName('xjzh_huoying_liudaomingren');
						game.broadcastAll((node) => {
							node.setBackgroundImage('extension/仙家之魂/skin/yuanhua/xjzh_huoying_liudaomingren.jpg');
						}, node);
					}, 100);
					('step 2');
					event.storage = player.storage.xjzh_huoying_liudaofenshen1.slice(0);
					event.doing = event.storage.shift();
					('step 3');
					player.maxHp = event.doing.maxHp;
					player.hp = event.doing.hp;
					var hs = player.getCards('ej');
					if (hs.length) player.lose(hs, ui.special)._triggered = null;
					('step 4');
					var hs = event.doing.hs;
					var hs2 = [];
					for (var i = 0; i < hs.length; i++) {
						var card = get.cardPile(function (cardx) {
							return cardx == hs[i];
						});
						if (!card) {
							card = game.createCard(hs[i]);
						}
						hs2.push(card);
					}
					if (hs2.length) player.directgain(hs2);
					('step 5');
					var isDisabled = event.doing.isDisabled;
					for (var i = 0; i < isDisabled.length; i++) {
						if (isDisabled[i] == false && player.isDisabled(i + 1)) player.enableEquip(i + 1)._triggered = null;
						if (isDisabled[i] == true && !player.isDisabled(i + 1)) player.disableEquip(i + 1)._triggered = null;
					}
					('step 6');
					var es = event.doing.es;
					var es2 = [];
					for (var i = 0; i < es.length; i++) {
						var card = get.cardPile(function (cardx) {
							return cardx == es[i];
						});
						if (!card) {
							card = game.createCard(es[i]);
						}
						es2.push(card);
					}
					if (es2.length) {
						for (var i of es2) {
							player.equip(i);
						}
					}
					player.update();
					('step 7');
					player.storage.xjzh_huoying_liudaofenshen = false;
					player.storage.xjzh_tongyong_baiban = [];
					player.removeSkill('xjzh_tongyong_baiban');
				},
			},
			xjzh_huoying_qiling: {
				trigger: {
					source: 'damageBefore',
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					if (!event.cards || !event.cards.length) return false;
					if (event.card.suit == 'none') return false;
					return true;
				},
				forced: true,
				_priority: 6,
				marktext: '麒',
				intro: {
					name: '麒麟',
					content(storage, player) {
						let str = '';
						let list = ['huo', 'lei'];
						for (var i of list) {
							if (player.hasMark('xjzh_huoying_qiling_' + i)) str += get.translation('xjzh_huoying_qiling_' + i) + ':' + get.translation(player.countMark('xjzh_huoying_qiling_' + i)) + '<br>';
						}
						return str;
					},
				},
				async content(event, trigger, player) {
					await game.setNature(trigger, get.color(trigger.cards[0]) == 'red' ? 'fire' : 'thunder', false);
					await player.addMark(game.hasNature(trigger, 'fire') ? 'xjzh_huoying_qiling_huo' : 'xjzh_huoying_qiling_lei', 1, false);
					player.markSkill('xjzh_huoying_qiling');
					if (player.countMark('xjzh_huoying_qiling_huo') >= 3 && player.countMark('xjzh_huoying_qiling_lei') >= 1) {
						let evt = event.getParent('damage');
						if (evt && evt.getParent) {
							let next = game.createEvent('xjzh_huoying_qiling_trigger', false, evt.parent);
							next.player = player;
							next.setContent(async function (event, trigger, player) {
								const { targets } = await player
									.chooseTarget(get.prompt2('xjzh_huoying_qiling'), lib.filter.notMe)
									.set('ai', (target) => {
										return get.damageEffect(target, player, player, 'thunder');
									})
									.forResult();

								if (targets) {
									player.removeMark('xjzh_huoying_qiling_huo', 3);
									player.removeMark('xjzh_huoying_qiling_lei', 1);
									let num = Math.max(player.awakenedSkills.includes('xjzh_huoying_liudao') ? 1 : 2, Math.abs(targets[0].getHp(true) - player.getHp(true)));
									targets[0].damage('thunder', num, player, 'nocard');
									if (!player.hasMark('xjzh_huoying_qiling_huo') && !player.hasMark('xjzh_huoying_qiling_lei')) player.unmarkSkill('xjzh_huoying_qiling');
								}
							});
						}
					}
				},
				subSkill: {
					huo: {},
					lei: {},
				},
			},
			xjzh_huoying_qianniao: {
				trigger: {
					player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
				},
				forced: true,
				_priority: -1,
				filter(event, player, name) {
					return player.hasUseTarget('sha');
				},
				marktext: '瞳',
				intro: {
					name: '写轮眼',
					content: 'mark',
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				derivation: ['xjzh_huoying_tongshu'],
				async content(event, trigger, player) {
					let cards = game.createCard('sha', lib.suit.randomGet(), null, null);
					await player
						.chooseUseTarget(
							cards,
							game.filterPlayer((current) => {
								return current.inRangeOf(player);
							}),
							false
						)
						.set('prompt', '〖雷遁·千鸟〗选择一名角色视为对其使用一张随机属性为火/雷的【杀】')
						.set('ai', (target) => {
							return get.damageEffect(target, player, player, 'thunder', 'fire');
						});
					let history = player.getHistory('sourceDamage', (evt) => evt.getParent(4).name == 'xjzh_huoying_qianniao');
					if (history.length) {
						if (!player.awakenedSkills.includes('xjzh_huoying_liudao')) {
							await player.addMark('xjzh_huoying_qianniao', 1);
							event.trigger('xjzh_huoying_liudaoTrigger');
						}
					} else {
						player.draw(player.awakenedSkills.includes('xjzh_huoying_liudao') ? 1 : 2);
					}
				},
			},
			xjzh_huoying_liudao: {
				trigger: {
					player: 'xjzh_huoying_liudaoTrigger',
				},
				forced: true,
				mark: true,
				marktext: '轮',
				intro: {
					name: '轮回眼',
					content: 'limited',
				},
				limited: true,
				juexingji: true,
				_priority: 1,
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					return player.countMark('xjzh_huoying_qianniao') >= 6;
				},
				derivation: ['xjzh_huoying_tonshu'],
				async content(event, trigger, player) {
					player.awakenSkill('xjzh_huoying_liudao');
					player.clearMark('xjzh_huoying_qianniao');
					player.addSkills('xjzh_huoying_tongshu');
					player.maxHp = 3;
					player.hp = 3;
					player.update();
					player.discard(player.getCards('j'));
					player.link(false);
					player.turnOver(false);
					player.node.name.innerHTML = get.slimName('xjzh_huoying_liudaozuozhu');
					let node, node2;
					if (player.name2 && player.name2 == 'xjzh_huoying_zuozhu') {
						node = player.node.avatar2;
						node2 = player.node.name2;
					} else {
						node = player.node.avatar;
						node2 = player.node.name;
					}
					node2.innerHTML = get.slimName('xjzh_huoying_liudaozuozhu');
					game.broadcastAll((node) => {
						node.setBackgroundImage('extension/仙家之魂/skin/yuanhua/xjzh_huoying_liudaozuozhu.jpg');
					}, node);
				},
			},
			xjzh_huoying_tongshu: {
				trigger: {
					global: 'damageBegin',
				},
				forced: true,
				changeSeat: true,
				_priority: 6,
				mod: {
					globalFrom(from, to, distance) {
						return 1;
					},
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				prompt(event, player) {
					return `是否发动〖天手力〗与${get.translation(event.source)}交换位置并视为对其使用一张【杀】`;
				},
				filter(event, player) {
					return event.source != player;
				},
				check(event, player) {
					return get.attitude(player, event.player) > 0;
				},
				async content(event, trigger, player) {
					if (trigger.player != player) game.swapSeat(player, trigger.player);
					let cards = game.createCard('sha', lib.suit.randomGet(), null, null);
					await player
						.useCard(cards, trigger.source, false)
						.set('addCount', false)
						.set('oncard', (card, player) => {
							let that = this;
							if (!that.baseDamage) that.baseDamage = 1;
							that.baseDamage++;
						});
					let history = player.getHistory('sourceDamage', (evt) => evt.getParent(3).name == 'xjzh_huoying_tongshu1');
					if (history.length) {
						trigger.changeToZero();
						game.log(trigger.player, '因', player, '的技能〖天手力〗防止了此伤害.');
					} else {
						trigger.player = player;
						game.log(player, '代替了', trigger.player, '承受了伤害.');
					}
				},
			},
			xjzh_huoying_xianzhang: {
				mark: true,
				marktext: '☯',
				zhuanhuanji: true,
				intro: {
					name: '掌仙术',
					content(storage, player, skill) {
						if (player.storage.xjzh_huoying_xianzhang == true) return '每回合限一次,你使用非[伤害]卡牌指定已受伤的目标后,你可以令其摸两张牌或回复一点体力;';
						return '每回合限一次,其他角色使用[伤害]卡牌指定你为目标时,你可以扣置一张[伤害]卡牌,其猜测此牌牌名,若错,你可以移除此牌的一个目标.';
					},
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				_priority: 62,
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					if (player.storage.xjzh_huoying_xianzhang == true) {
						player.storage.xjzh_huoying_xianzhang = false;
						player.addTempSkill('xjzh_huoying_xianzhang_2', {
							player: 'phaseUseBegin',
						});
					} else {
						player.storage.xjzh_huoying_xianzhang = true;
						player.addTempSkill('xjzh_huoying_xianzhang_1', { player: 'phaseUseBegin' });
					}
				},
				subSkill: {
					1: {
						trigger: {
							player: 'useCardToPlayered',
						},
						usable: 1,
						prompt(event, player) {
							return '是否发动〖掌仙术〗令' + get.translation(event.target) + '摸一张牌或回复一点体力';
						},
						check(event, player) {
							return get.attitude(player, event.target) > 0;
						},
						filter(event, player) {
							return !get.tag(event.card, 'damage');
						},
						content() {
							trigger.target.chooseDrawRecover(2, 1, true, '〖掌仙术〗:请选择摸两张牌或回复一点体力');
						},
						ai: {
							result: {
								target: 1.5,
							},
						},
					},
					2: {
						trigger: {
							target: 'useCardToTargeted',
						},
						usable: 1,
						prompt(event, player) {
							return '是否发动〖掌仙术〗令' + get.translation(event.player) + '猜测你的手牌';
						},
						check(event, player) {
							return 1;
						},
						filter(event, player) {
							return (
								get.tag(event.card, 'damage') &&
								player.countCards('h', function (card) {
									return get.tag(card, 'damage');
								})
							);
						},
						content() {
							'step 0';
							player.chooseCard('h', 1, '选择一张手牌令' + get.translation(trigger.player) + '猜测牌名', function (card) {
								return get.tag(card, 'damage');
							});
							('step 1');
							if (result.bool) {
								var cardx = ui.create.card();
								cardx.classList.add('infohidden');
								cardx.classList.add('infoflip');
								player.$throw(cardx, 1000, 'nobroadcast');
								game.log(player, '扣置了一张牌在场上');
								event.cardx = result.cards[0];
								var inpile = lib.inpile.filter(function (name) {
									var card = { name: name };
									if (!get.tag(card, 'damage')) return false;
									return true;
								});
								var text = '请选择猜测一种[伤害]类卡牌;';
								trigger.player.chooseVCardButton(true, inpile, text).set('ai', function () {
									if (Math.random() <= 0.5) return 'sha';
									return Math.random();
								});
							}
							('step 2');
							if (result && result.links) {
								var card2 = game.createCard(result.links[0][2]);
								trigger.player.$throw(card2, 1000, 'nobroadcast');
								player.$throw(event.cardx, 1000, 'nobroadcast');
								if (result.links[0][2].name != event.cardx.name) {
									player
										.chooseTarget('选择移除' + get.translation(trigger.card) + '的一个目标', function (card, player, target) {
											return trigger.targets.includes(target);
										})
										.set('ai', function () {
											return get.attitude(player, target) > 0;
										});
								} else {
									event.finish();
								}
							}
							('step 3');
							if (result.targets?.length) {
								trigger.targets.remove(result.targets[0]);
							}
						},
						ai: {
							effect: {
								target(player, target, card) {
									if (get.tag(card, 'damage')) return [0.5, 0.5];
									return 1;
								},
							},
						},
					},
				},
			},
			xjzh_huoying_sihun: {
				trigger: {
					player: 'dyingBefore',
				},
				init(player, skill) {
					player.storage.xjzh_huoying_sihun = false;
				},
				filter(event, player) {
					return !player.storage.xjzh_huoying_sihun && game.dead.length;
				},
				forced: true,
				_priority: -16,
				limited: true,
				mark: true,
				marktext: '魂',
				intro: {
					name: '死魂之术',
					content: 'limited',
				},
				content() {
					'step 0';
					player.awakenSkill('xjzh_huoying_sihun');
					player.storage.xjzh_huoying_sihun = true;
					('step 1');
					var dead = game.dead;
					player.recover(dead.length);
					player.draw(dead.length);
					var de = [];
					for (var i = 0; i < dead.length; i++) {
						de.push(dead[i]);
					}
					var link = de.randomGet();
					link.revive(2);
					if (game.zhu != player) {
						var id = player.identity;
					} else {
						var id = 'zhong';
					}
					link.setIdentity(id);
					link.identity = id;
					link.node.identity.dataset.color = 'xjzh_huoying_sihun';
					link.identityShown = true;
					link.changeGroup(player.group);
					link.clearSkills();
					link.addSkill('xjzh_huoying_sihun_display');
				},
				subSkill: {
					display: {
						mod: {
							cardEnabled2(card, player, now) {
								return false;
							},
							cardEnabled(card, player, now) {
								return false;
							},
						},
						trigger: {
							player: ['drawAfter', 'gainAfter'],
						},
						forced: true,
						_priority: 16,
						filter(event, player) {
							return player.countCards('h');
						},
						content() {
							var cardx = player.getCards('h');
							player.lose(cardx, ui.cardPile, 'get.rand(0,ui.cardPile.childNodes.length)');
						},
						ai: {
							nosave: true,
						},
					},
				},
			},
			xjzh_huoying_chuanyi: {
				trigger: {
					source: 'damageEnd',
				},
				prompt(event, player) {
					return '是否弃置' + get.translation(player.storage.xjzh_huoying_chuanyi + 1) + '张牌发动〖仙法·传异远影〗获得' + get.translation(event.player) + '的一个技能';
				},
				init(player, skill) {
					player.storage.xjzh_huoying_chuanyi = 1;
				},
				check(event, player) {
					var cards = player.getCards('he');
					for (var i of cards) {
						if (4 - get.value(i)) return 1;
					}
					return 0.5;
				},
				filter(event, player) {
					return event.player.isDead();
				},
				content() {
					'step 0';
					var num = player.storage.xjzh_huoying_chuanyi;
					list = trigger.player.skills.filter((s) => lib.translate[s] && lib.translate[s + '_info'] && lib.skill[s] && !lib.skill[s].nopopup && !lib.skill[s].equipSkill && !lib.skill[s].juexingji && !lib.skill[s].limited && !lib.skill[s].unique && !lib.skill[s].dutySkill);
					if (list.length) {
						player.chooseToDiscard(num + 1, 'he', '是否弃置' + get.cnNumber(num + 1) + '张牌获得' + get.translation(trigger.player) + '的一个技能').set('ai', function (card) {
							return 6 - get.value(card);
						});
					}
					('step 1');
					if (result.bool) {
						if (event.isMine()) {
							var dialog = ui.create.dialog('forcebutton');
							dialog.add('请选择获得一项技能');
							for (var i = 0; i < list.length; i++) {
								if (lib.translate[list[i] + '_info']) {
									var translation = get.translation(list[i]);
									if (translation[0] == '新' && translation.length == 3) {
										translation = translation.slice(1, 3);
									} else {
										translation = translation.slice(0, 2);
									}
									var item = dialog.add('<div class="popup pointerdiv" style="width:95%;display:inline-block"><div class="skill">〖' + translation + '〗</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
									item.firstChild.link = list[i];
								}
							}
						}
						if (list.length == 1)
							event._result = {
								control: list[0],
							};
						else
							player
								.chooseControl(list)
								.set('prompt', '请选择获得一项技能')
								.set('ai', function () {
									return get.max(list, get.skillRank, 'item');
								})
								.set('dialog', dialog);
					}
					('step 2');
					if (result && result.control) {
						player.addSkillLog(result.control);
						player.storage.xjzh_huoying_chuanyi++;
					}
				},
			},
			xjzh_huoying_kaobei: {
				trigger: {
					global: ['logSkill', 'useSkillAfter'],
				},
				usable: 1,
				bannedList: ['ywhy_youli'],
				forced: true,
				firstDo: true,
				_priority: 100,
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					let skill = event.skill || event.sourceSkill,
						info = get.info(skill);
					if (player.hasSkill(skill)) return false;
					if (lib.skill.xjzh_huoying_kaobei.bannedList.includes(skill)) return false;
					if (!lib.translate[skill + '_info'] || !lib.translate[skill]) return false;
					if (lib.skill.global.includes(skill)) return false;
					if (!player.getExpansions('xjzh_huoying_shenwei').length) return false;
					if (!info || (info && (info.limited || info.juexingji || info.dutySkill || info.equipSkill || info.cardSkill || info.sub || info.unique || info.persevereSkill))) return false;
					if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) return false;
					return event.player != player;
				},
				async content(event, trigger, player) {
					let skill = trigger.skill || trigger.sourceSkill;
					let cards = player.getExpansions('xjzh_huoying_shenwei');
					const { links } = await player
						.chooseCardButton(cards, 1, '〖拷贝〗:选择移除一张<雷>获得' + get.translation(trigger.player) + '的技能〖' + get.translation(trigger.skill) + '〗')
						.set('ai', (button) => {
							let valuex = get.value(button.link),
								number = button.link.number;
							return 6 - valuex + number;
						})
						.forResult();

					if (links) {
						player.loseToDiscardpile(links);
						player.addTempSkills(skill, { player: `${skill}After` });
					}
				},
			},
			xjzh_huoying_shenwei: {
				trigger: {
					global: ['gameStart', 'roundStart'],
					player: ['enterGame', 'dying'],
				},
				forced: true,
				mark: true,
				marktext: '雷',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				onremove(player, skill) {
					let cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				filter(event, player) {
					if (event.name == 'game') return true;
					if (event.name == 'dying') return player.getExpansions('xjzh_huoying_shenwei').length;
					return game.roundNumber % 2 != 0;
				},
				async content(event, trigger, player) {
					let name = trigger.name,
						cards;
					if (name == 'game') {
						cards = get.cards(7);
						const { links } = await player
							.chooseCardButton(cards, 4, true, '〖神威〗:选择4张牌将其置于你的武将牌上')
							.set('ai', (button) => {
								return button.link.number + get.value(button.link);
							})
							.forResult();

						if (links) player.addToExpansion(links, 'giveAuto', player).gaintag.add('xjzh_huoying_shenwei');
					} else if (name == 'dying') {
						let num = 0;
						cards = player.getExpansions('xjzh_huoying_shenwei');
						cards.forEach((card) => {
							num += card.number;
						});
						const index = await player
							.chooseControlList(get.prompt(event.name, player), true, [`令一名角色获得所有<雷>`, `令一名角色弃置任意张点数不小于${get.translation(num)}的牌`])
							.set('ai', (target) => {
								let att = get.attitude(player, target);
								if (player.hasFriend() && att >= 0) return 0;
								return 1;
							})
							.forResult('index');
						const { targets } = await player
							.chooseTarget(true, index == 0 ? '令一名角色获得所有<雷>' : `令一名角色弃置任意张点数和不小于${get.translation(num)}的牌,否则其失去所有体力`, lib.filter.notMe)
							.set('ai', (target) => {
								return index == 0 ? get.attitude(player, target) : -get.attitude(player, target);
							})
							.forResult();

						if (index == 0) {
							targets[0].gain(cards, player, 'giveAuto');
						} else {
							const { bool } = await targets[0]
								.chooseCard(`弃置任意张点数和不小于${get.translation(num)}的牌,否则失去所有体力`, 'h')
								.set('complexCard', true)
								.set('complexSelect', true)
								.set('selectCard', () => {
									let num2 = 0;
									if (Array.isArray(ui.selected.cards))
										for (var i of ui.selected.cards) {
											num2 += i.number;
										}
									if (num2 >= num) return ui.selected.cards.length;
									return targets[0].countCards('h');
								})
								.set('ai', (card) => {
									return 4 - get.value(card);
								})
								.forResult();

							if (!bool) targets[0].loseHp(targets[0].getHp(true));
						}
					} else {
						cards = Array.from(ui.cardPile.childNodes).randomGets(4);
						player.gain(cards, player, 'giveAuto');
					}
				},
			},
			xjzh_huoying_leiqie: {
				enable: 'phaseUse',
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					return player.countCards('h') || player.getExpansions('xjzh_huoying_shenwei').length;
				},
				usable: 1,
				async content(event, trigger, player) {
					let cards = player.getExpansions('xjzh_huoying_shenwei');
					if (!cards.length || !player.countCards('h')) {
						event.finish();
						return;
					}
					const moved = await player
						.chooseToMove('〖雷切〗:是否交换<雷>和手牌？')
						.set('list', [
							[get.translation(player) + '(你)的雷', cards],
							['手牌区', player.getCards('h')],
						])
						.set('filterMove', function (from, to, moved) {
							if (to == 0) return moved[0].length < 4;
							return typeof to != 'number';
						})
						.set('processAI', function (list) {
							let player = get.player(),
								cards = list[0][1].concat(list[1][1]).sort((a, b) => get.value(a) - get.value(b)),
								cards2 = cards.splice(0, player.getExpansions('xjzh_huoying_shenwei').length);
							return [cards2, cards];
						})
						.forResult('moved');
					if (moved) {
						let pushs = moved[0],
							gains = moved[1];
						pushs.removeArray(player.getExpansions('xjzh_huoying_shenwei'));
						gains.removeArray(player.getCards('h'));
						player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('xjzh_huoying_shenwei');
						if (pushs.length) game.log(player, '将', pushs, '作为<雷>置于武将牌上');
						player.gain(gains, 'gain2');
					}
					const { targets } = await player
						.chooseTarget('〖雷切〗:请选择一个目标对其造成1点雷属性伤害', lib.filter.notMe)
						.set('ai', (target) => {
							return get.damageEffect(target, player, player, 'thunder');
						})
						.forResult();

					if (targets) {
						targets[0].damage(1, player, 'noCard', 'thunder');
					}
				},
				ai: {
					order: 8,
					result: {
						player: 1,
					},
				},
			},
			xjzh_huoying_bietian: {
				trigger: {
					source: 'damageAfter',
					player: 'phaseDrawBegin',
					global: 'phaseBegin',
				},
				forced: true,
				_priority: 5,
				mark: true,
				marktext: '别',
				intro: {
					name: '别天神',
					content(storage, player) {
						return `额外阶段${storage.length - 6}个`;
					},
					markcount(storage, player) {
						return storage.length - 6;
					},
				},
				init(player, skill) {
					game.countPlayer((current) => {
						current.storage[skill] = ['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'];
					});
				},
				filter(event, player) {
					if (event.name == 'phase') return event.player.storage.xjzh_huoying_bietian && event.player.storage.xjzh_huoying_bietian.length;
					if (event.name == 'phaseDraw') return player.storage.xjzh_huoying_bietian && player.storage.xjzh_huoying_bietian.length > 6;
					if (event.name == 'damage') return !event.numFixed && !event.cancelled && event.num >= 2;
				},
				async content(event, trigger, player) {
					let name = trigger.name;
					switch (name) {
						case 'damage':
							{
								let storage = trigger.player.storage.xjzh_huoying_bietian;
								let str = `〖别天神〗:是否失去一点体力上限随机偷取${get.translation(trigger.player)}一个回合阶段`;
								const { bool } = await player
									.chooseBool()
									.set('prompt', str)
									.set('ai', () => {
										if (player.maxHp <= 1) return false;
										if (storage.some((item) => ['phaseDraw', 'phaseUse'].includes(item))) return true;
										return false;
									})
									.forResult();

								if (bool) {
									player.loseMaxHp();
									let results = storage.randomGet();
									storage.remove(results);
									trigger.player.storage.xjzh_huoying_bietian = storage;
									player.storage.xjzh_huoying_bietian.push(results);
									game.log(player, '偷取', trigger.player, '的', results);
									player.update();
								}
							}
							break;
						case 'phase':
							{
								let phaseList = trigger.player.storage.xjzh_huoying_bietian;
								trigger.phaseList = trigger.player == player ? phaseList.randomSort() : phaseList;
							}
							break;
						case 'phaseDraw':
							{
								let storage = player.storage.xjzh_huoying_bietian;
								trigger.num += storage.length - 6;
							}
							break;
					}
				},
			},
			xjzh_huoying_shunshen: {
				trigger: {
					player: ['phaseBefore', 'damageBegin1'],
				},
				forced: true,
				_priority: 5,
				filter(event, player) {
					if (event.name == 'damage') return event.source && [player.next, player.previous].includes(event.source) && !event.numFixed;
					return true;
				},
				async content(event, trigger, player) {
					if (trigger.name == 'damage') {
						trigger.changeToZero();
						return;
					}
					let targets = game.filterPlayer((current) => current != player).randomGet();
					game.swapSeat(player, targets);
					event.trigger('xjzh_huoying_shunshen_trigger');
					player.chooseToUse({
						filterCard(card, player, event) {
							if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
							return lib.filter.filterCard.apply(this, arguments);
						},
						prompt: '〖瞬身〗:选择使用一张手牌',
						addCount: false,
						ai1: (card) => get.order(card),
					});
				},
				ai: {
					swapSeat: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage') && [target.next, target.previous].includes(player)) return 0;
						},
					},
				},
			},
			xjzh_huoying_xuzuo: {
				trigger: {
					player: ['xjzh_huoying_shunshen_trigger', 'damageBegin1'],
				},
				forced: true,
				_priority: 3,
				filter(event, player) {
					if (event.name == 'damage') return player.hujia >= 2;
					return true;
				},
				async content(event, trigger, player) {
					if (trigger.name == 'damage') {
						await player.gainMaxHp(Math.floor(player.hujia / 2));
						await player.changeHujia(-player.hujia);
					} else player.changeHujia(1);
				},
			},
			xjzh_sanguo_tianxiang: {
				trigger: {
					player: 'loseAfter',
				},
				forced: true,
				_priority: 1,
				xjzh_xinghunSkill: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					let evt = event.getl(player);
					if (!evt || !evt.hs.length || !evt.es.length) return false;
					let cards = [...evt.hs, ...evt.es];
					return cards.some((card) => card.suit == 'heart');
				},
				marktext: '天香',
				intro: {
					name: '天香',
					content: '#',
				},
				global: 'xjzh_sanguo_tianxiang_mod',
				async content(event, trigger, player) {
					const { targets } = await player
						.chooseTarget('〖天香〗:选择一名角色令其获得一个<天香>标记')
						.set('ai', (target) => get.attitude(player, target))
						.forResult();

					if (targets) {
						targets[0].addMark('xjzh_sanguo_tianxiang', 1);
					}
				},
				subSkill: {
					mod: {
						charlotte: true,
						mod: {
							suit(card, suit) {
								let player = get.player();
								if (player && player.hasMark('xjzh_sanguo_tianxiang') && suit == 'spade') return 'heart';
							},
						},
					},
				},
			},
			xjzh_sanguo_emei: {
				trigger: {
					global: ['addMark', 'removeMark'],
				},
				forced: true,
				_priority: 1,
				group: 'xjzh_sanguo_emei_use',
				filter(event, player) {
					return event.markname == 'xjzh_sanguo_tianxiang';
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					if (trigger.name == 'addMark') {
						let skills = new Array();
						game.xjzh_wujiangpai().forEach((name) => {
							if (lib.character[name][0] == 'female') {
								skills.addArray(
									lib.character[name][3].filter((skill) => {
										let info = get.info(skill);
										return info && !info.sub && !info.unique && !info.juexingji && !info.zhuSkill && !info.dustSkill && !trigger.player.skills.includes(skill);
									})
								);
							}
						});
						trigger.player.addSkills(skills.randomGet());
					} else {
						let skills = trigger.player.getSkills(null, false, false).filter((skill) => {
							let info = get.info(skill);
							return !info.sub && !info.unique && !lib.skill.global.includes(skill);
						});
						if (skills.length) {
							const { control } = await trigger.player
								.chooseControl(skills)
								.set('ai', () => {
									return get.min(skills, get.skillRank, 'item');
								})
								.forResult();

							trigger.player.removeSkills(control);
						}
					}
				},
				subSkill: {
					use: {
						enable: 'phaseUse',
						usable: 1,
						prompt: '〖额眉〗:选择一名角色移去其所有<天香>标记',
						filterTarget(card, player, target) {
							return target.hasMark('xjzh_sanguo_tianxiang');
						},
						audio: 'xjzh_sanguo_emei',
						filter(event, player) {
							return game.countPlayer((current) => {
								return current.countMark('xjzh_sanguo_tianxiang');
							});
						},
						async content(event, trigger, player) {
							let list = ['受伤'];
							if (event.targets[0].countCards('he') >= event.targets[0].countMark('xjzh_sanguo_tianxiang')) list.push('弃牌');
							const {
								result: { control },
							} =
								list.length == 1
									? { result: { control: list[0] } }
									: await event.targets[0].chooseControl(list).set('ai', () => {
										let player = get.player();
										return list.length == 2 ? '弃牌' : '受伤';
									});
							if (control) {
								switch (control) {
									case '弃牌':
										{
											event.targets[0].chooseToDiscard(event.targets[0].countMark('xjzh_sanguo_tianxiang'), 'he', true);
										}
										break;
									case '受伤':
										{
											event.targets[0].damage(event.targets[0].countMark('xjzh_sanguo_tianxiang'), player, 'nocard');
										}
										break;
								}
							}
							event.targets[0].clearMark('xjzh_sanguo_tianxiang');
						},
						ai: {
							order: 8,
							result: {
								target: -1,
							},
						}, //QQQ
					},
				},
			},
			xjzh_sanguo_guose: {
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				forced: true,
				xjzh_xinghunSkill: true,
				init(player) {
					let cards = Array.from(ui.cardPile.childNodes)
						.concat(Array.from(ui.discardPile.childNodes))
						.filter((card) => card.name == 'lebu');
					if (cards.length) {
						game.cardsGotoSpecial(cards);
						game.log(player, '将', cards, '移出游戏');
					}
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				check() {
					return 1;
				},
				prompt(event, player) {
					return `〖国色〗:是否弃置一张♦️️牌令${get.translation(event.player)}执行一次【乐不思蜀】判定`;
				},
				mod: {
					aiOrder(player, card, num) {
						if (card.suit == 'diamond') return num / 2 + get.value({ name: 'lebu' });
						return num;
					},
				},
				filter(event, player) {
					if (!player.countCards('he', { suit: 'diamond' })) return false;
					if (event.player.countCards('j', 'lebu')) return false;
					return event.player != player;
				},
				async content(event, trigger, player) {
					const { bool } = await player
						.chooseToDiscard('he', { suit: 'diamond' }, `〖国色〗:请选择弃置一张♦️️牌令${get.translation(trigger.player)}执行一次【乐不思蜀】判定`)
						.set('ai', (card) => -get.attitude(player, trigger.player))
						.forResult();

					if (bool) {
						trigger.player.executeDelayCardEffect('lebu');
					}
				},
				ai: {
					skip: true,
				},
			},
			xjzh_sanguo_wanrong: {
				trigger: {
					global: 'judgeAfter',
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (event.cardname != 'lebu') return false;
					return event.result.suit != 'heart';
				},
				check(event, player) {
					return 1;
				},
				async content(event, trigger, player) {
					player.draw(2);
					const { targets } = await player
						.chooseTarget('〖婉容〗:请选择一名其他角色令其执行一个额外的回合', lib.filter.notMe)
						.set('ai', (target) => get.attitude(player, target))
						.forResult();

					if (targets) {
						targets[0].phase('xjzh_sanguo_wanrong');
					}
				},
			},
			xjzh_sanguo_lixiang: {
				trigger: {
					player: 'dying',
				},
				limited: true,
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				audioname2: {
					xjzh_sanguo_daqiqo: 'ext:仙家之魂/audio/skill/xjzh_sanguo_lixiang1.mp3',
					xjzh_sanguo_xiaoqiqo: 'ext:仙家之魂/audio/skill/xjzh_sanguo_lixiang2.mp3',
				},
				filter(event, player) {
					let list = get.nameList(player).filter((name) => {
						return ['xjzh_sanguo_daqiao', 'xjzh_sanguo_xiaoqiao'].includes(name);
					});
					if (list.length == 0) return false;
					return !player.storage.xjzh_sanguo_lixiang;
				},
				async content(event, trigger, player) {
					player.awakenSkill('xjzh_sanguo_lixiang');
					player.clearSkills(true);
					let targets = game.filterPlayer((current) => current != player).sort(lib.sort.seat);
					for (let target of targets) {
						target.checkConflict();
						target.checkMarks();
					}
					let list = get.nameList(player).filter((name) => {
						return ['xjzh_sanguo_daqiao', 'xjzh_sanguo_xiaoqiao'].includes(name);
					});
					let names;
					if (get.config('double_character')) {
						if (list.length >= 2) names = ['xjzh_sanguo_daqiao', 'xjzh_sanguo_xiaoqiao'].randomGet();
						player.removeFujiang();
					} else {
						if (get.is.playerNames(player, 'xjzh_sanguo_daqiao')) names = 'xjzh_sanguo_xiaoqiao';
						else names = 'xjzh_sanguo_daqiao';
					}
					player.reinit(player.name, names, [player.hp, player.maxHp]);
					player.recoverTo(player.maxHp);
				},
			},
			xjzh_sanguo_jueqing: {
				trigger: {
					global: ['damageBefore', 'loseHpBefore'],
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return !event.numFixed;
				},
				forced: true,
				async content(event, trigger, player) {
					trigger._triggered = null;
				},
				ai: {
					jueqing: true,
				},
			},
			xjzh_sanguo_shangshi: {
				trigger: {
					player: ['useCardEnd'],
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return player.isDamaged();
				},
				async content(event, trigger, player) {
					const { cards } = await player.draw().forResult();
					const card = cards[0];
					const history = player.getAllHistory('useCard');
					if (!history.length) return;
					let card2 = history[history.length - 1].card;
					if (
						get.color(card) != get.color(card2) &&
						game.countPlayer((current) => {
							return current != player && current.countCards('hej');
						}) > 0
					) {
						const { bool, targets } = await player
							.chooseTarget('〖伤逝〗:请选择并弃置一名角色的牌', (card, player, target) => {
								if (!target.countCards('hej')) return false;
								return target != player;
							})
							.set('ai', (target) => lib.card.guohe.ai.result.target(player, target))
							.forResult();
						if (!bool) return;
						const target = targets[0];
						player
							.discardPlayerCard('hej', target, true)
							.set('target', target)
							.set('ai', (button) => lib.card.guohe.ai.button(button));
					}
				},
				ai: {
					maixie(player) {
						if (player.isDamaged()) return false;
						return true;
					},
					maixie_hp(player) {
						if (player.isDamaged()) return false;
						return true;
					},
				},
			},
			xjzh_sanguo_huishi: {
				trigger: {
					global: 'gameStart',
					player: 'enterGame',
				},
				forced: true,
				charlotte: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					for (var j = 0; j < game.players.length; j++) {
						game.players[j].addSkill('xjzh_sanguo_huishi2');
					}
				},
				ai: {
					expose: 0.8,
					threaten: 4,
				},
			},
			xjzh_sanguo_huishi2: {
				trigger: {
					global: 'dieEnd',
				},
				charlotte: true,
				forced: true,
				audio: 'xjzh_sanguo_huishi',
				filter(event, player) {
					return get.is.playerNames(event.player, 'xjzh_sanguo_chunhua');
				},
				init(player, skill) {
					player.addSkillBlocker(skill);
				},
				async content(event, trigger, player) {
					player.removeSkill('xjzh_sanguo_huishi2');
				},
				onremove(player, skill) {
					player.removeSkillBlocker(skill);
				},
				skillBlocker(skill, player) {
					let info = lib.skill[skill];
					if (info && (info.juexingji || info.limited || info.zhuSkill || info.dutySkill || info.jy_bangpai || info.zhuanshuSkill)) {
						if (info.xjzh_xinghunSkill) return false;
						return true;
					}
					return false;
				},
			},
			xjzh_sanguo_pijian: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				init(player) {
					player.expandEquip(1);
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				check(event, player) {
					return 1;
				},
				async content(event, trigger, player) {
					let list = game.xjzh_wujiangpai().filter((name) => {
						return lib.character[name][3].some((skill) => {
							let info = get.info(skill);
							if (info && info.shaRelated && !player.skills.includes(skill)) return true;
						});
					}),
						pijianSkills = [];
					for (let target of list) {
						let skills = lib.character[target][3];
						skills.forEach((skill) => {
							let info = get.info(skill);
							if (info && info.shaRelated && !player.skills.includes(skill)) pijianSkills.push(skill);
						});
					}
					if (!pijianSkills.length) return;
					const { bool } = await player
						.xjzh_chooseSkill(pijianSkills.randomGets(3))
						.set('callback', function (result, player, target) {
							event.skill = result.links[0];
						})
						.set('ai', () => Math.random())
						.forResult();

					if (bool && event.skill) {
						let name = [event.skill];
						game.addVideo('skill', player, ['xjzh_sanguo_pijian', name]);
						game.broadcastAll(function () {
							lib.skill.xjzh_sanguo_pijian.createCard(name);
						}, name);
						let cards = name.map((name) => {
							var card = game.createCard('xjzh_sanguo_pijian_' + name, 'none');
							return card;
						});
						player.$gain2(cards);
						if (cards) player.equip(cards[0]);
					}
				},
				createCard(names) {
					let name = names[0],
						characters;
					for (var i in lib.character) {
						if (!lib.character[i][3] || !lib.character[i][3].length) continue;
						if (lib.character[i][3].includes(name)) {
							characters = i;
							break;
						}
					}
					if (!lib.card['xjzh_sanguo_pijian_' + name]) {
						lib.translate['xjzh_sanguo_pijian_' + name] = lib.translate[name];
						let info = lib.skill[name];
						let str = lib.translate[name + '_info'];
						let card = {
							fullimage: true,
							image: 'character:' + characters,
							type: 'equip',
							subtype: 'equip1',
							enable: true,
							selectTarget: -1,
							filterCard(card, player, target) {
								if (player != target) return false;
								return target.canEquip(card, true);
							},
							onLose() {
								let player = _status.event.player;
								player.drawTo(player.maxHp);
								player.lose(card, ui.special).set('getlx', false);
							},
							modTarget: true,
							allowMultiple: false,
							toself: true,
							ai: {},
							skills: [],
						};
						card.distance = { attackFrom: -1 };
						card.skills.add(name);
						str += '<li>此牌离开你的装备区后,你将手牌补至体力上限.';
						lib.translate['xjzh_sanguo_pijian_' + name + '_info'] = str;
						lib.card['xjzh_sanguo_pijian_' + name] = card;
					}
				},
			},
			xjzh_sanguo_zhirui: {
				trigger: {
					player: 'useCardAfter',
				},
				forced: true,
				_priority: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!player.isPhaseUsing()) return false;
					if (get.tag(event.card, 'damage')) return false;
					return player.getEquips(1).some((card) => card.name.indexOf('xjzh_sanguo_pijian') == 0);
				},
				async content(event, trigger, player) {
					let history = player.getHistory('gain', (evt) => {
						return evt && evt.parent.name == 'xjzh_sanguo_zhirui';
					}),
						card;
					if (!history.length) {
						card = get.cardPile((cardx) => {
							return get.tag(cardx, 'damage');
						});
					} else {
						card = get.cardPile((cardx) => {
							return get.tag(cardx, 'damage') && cardx.name != history[history.length - 1].cards[0].name;
						});
					}
					if (card) player.gain(card, player, 'gain2', 'log');
					else player.say('没有符合条件的卡牌');
				},
			},
			xjzh_sanguo_yongjue: {
				enable: 'phaseUse',
				usable: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					let history = player.getHistory('useCard', function (evt) {
						return evt && evt.card && get.tag(evt.card, 'damage');
					});
					if (!history.length) return false;
					return player.getEquips(1).length;
				},
				async content(event, trigger, player) {
					player.discard(player.getEquips(1));
					let history = player.getHistory('useCard', function (evt) {
						return evt && evt.card && get.tag(evt.card, 'damage');
					});
					let list = history.slice(0);
					while (list.length) {
						let object = list.shift();
						let card = object.card;
						let targets = object.targets.filter((current) => current.isAlive() && player.canUse(card, current));
						if (targets.length == 0) continue;
						targets.removeArray(targets.filter((current) => current.isDead()));
						const { bool } = await player
							.chooseBool(`〖勇决〗:是否失去一点体力对${get.translation(targets)}使用一张${get.translation(card)}`)
							.set('ai', () => {
								return get.player().getHp(true) > 1;
							})
							.forResult();

						if (bool) {
							player.useCard(card, targets, false).set('addCount', false);
							player.loseHp();
						}
					}
				},
				ai: {
					order() {
						let player = _status.event.player;
						let history = player.getHistory('useCard', function (evt) {
							return evt && evt.card && get.tag(evt.card, 'damage');
						});
						if (!history.length) return 0;
						if (history.length > player.hp) return 0.1;
						return 1;
					},
					result: {
						player(player, target) {
							let history = player.getHistory('useCard', function (evt) {
								return evt && evt.card && get.tag(evt.card, 'damage');
							});
							if (!history.length) return 0;
							if (history.length > player.hp) return 0.1;
							return 1;
						},
					},
				},
			},
			xjzh_sanguo_daoshu: {
				trigger: {
					global: 'gameStart',
					player: ['enterGame', 'damageAfter', 'phaseZhunbeiBegin'],
				},
				forced: true,
				_priority: -100,
				group: 'xjzh_sanguo_daoshu_add',
				audio: 'ext:仙家之魂/audio/skill:1',
				async content(event, trigger, player) {
					if (!player.storage.xjzh_sanguo_daoshu2) player.storage.xjzh_sanguo_daoshu2 = 0;
					player.storage.xjzh_sanguo_daoshu2++;
					if (!player.storage.xjzh_sanguo_daoshu) player.storage.xjzh_sanguo_daoshu = [];
					let list = game
						.xjzh_wujiangpai()
						.filter((name) => {
							if (
								lib.character[name][3].some((skill) => {
									return player.skills.includes(skill);
								})
							)
								return false;
							return lib.character[name][1] == 'qun';
						})
						.randomGets(3);
					if (!list.length) return;
					let [bool, links] = await player
						.chooseButton(true)
						.set('ai', (button) => {
							return get.rank(button.link, true);
						})
						.set('createDialog', ['请选择一张武将牌', [list, 'character']])
						.forResult('bool', 'links');
					if (bool) {
						let link = links[0];
						let skills = lib.character[link][3];
						for (var i = 0; i < skills.length; i++) {
							var info = get.info(skills[i]);
							if (info && (info.limited || info.juexingji || info.dustSkill || info.unique || info.zhuSkill)) continue;
							player.addTempSkill(skills[i], { player: 'phaseJieshuBegin' });
							player.storage.xjzh_sanguo_daoshu.push(skills[i]);
						}
					}
				},
				subSkill: {
					add: {
						trigger: {
							player: 'phaseJieshuBegin',
						},
						forced: true,
						_priority: 38,
						audio: 'xjzh_sanguo_daoshu',
						filter(event, player) {
							return player.storage.xjzh_sanguo_daoshu.length;
						},
						content() {
							'step 0';
							var characters = [];
							event.num = player.storage.xjzh_sanguo_daoshu.length;
							event.num2 = player.storage.xjzh_sanguo_daoshu2;
							if (event.num < event.num2) {
								event.num2 = event.num;
							}
							var skillx = player.storage.xjzh_sanguo_daoshu;
							var skills = [];
							for (var c in lib.character) {
								var info = lib.character[c];
								if (info[3].some((s) => skillx.includes(s))) {
									characters.push(c);
									skills.push(...skillx.filter((s) => info[3].includes(s)));
									skillx.remove(info[3]);
									if (!skillx.length) break;
								}
							}
							var list = characters;
							if (player.isUnderControl()) {
								game.swapPlayerAuto(player);
							}
							var switchToAuto = function () {
								_status.imchoosing = false;
								event._result = {
									bool: true,
									skills: skills.randomGets(),
								};
								if (event.dialog) event.dialog.close();
								if (event.control) event.control.close();
							};
							var chooseButton = function (list, skills) {
								var event = _status.event;
								if (!event._result) event._result = {};
								event._result.skills = [];
								var rSkill = event._result.skills;
								var dialog = ui.create.dialog('请选择获得的技能', [list, 'character'], 'hidden');
								event.dialog = dialog;
								var table = document.createElement('div');
								table.classList.add('add-setting');
								table.style.margin = '0';
								table.style.width = '100%';
								table.style.position = 'relative';
								for (var i = 0; i < skills.length; i++) {
									var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
									td.link = skills[i];
									table.appendChild(td);
									td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
									td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
										if (_status.dragged) return;
										if (_status.justdragged) return;
										_status.tempNoButton = true;
										setTimeout(function () {
											_status.tempNoButton = false;
										}, 500);
										var link = this.link;
										if (!this.classList.contains('bluebg')) {
											if (rSkill.length >= event.num2) return;
											rSkill.add(link);
											this.classList.add('bluebg');
										} else {
											this.classList.remove('bluebg');
											rSkill.remove(link);
										}
									});
								}
								dialog.content.appendChild(table);
								dialog.add('　　');
								dialog.open();
								event.switchToAuto = function () {
									event.dialog.close();
									event.control.close();
									_status.imchoosing = false;
								};
								event.control = ui.create.control('ok', function (link) {
									if (rSkill.length !== event.num2) return;
									event.dialog.close();
									event.control.close();
									_status.imchoosing = false;
								});
								for (var i = 0; i < event.dialog.buttons.length; i++) {
									event.dialog.buttons[i].classList.add('selectable');
								}
								game.countChoose();
							};
							if (event.isMine()) {
								chooseButton(list, skills);
							} else if (event.isOnline()) {
								event.player.send(chooseButton, list, skills);
								event.player.wait();
							} else {
								switchToAuto();
							}
							('step 1');
							var map = event.result || result;
							if (map && map.skills && map.skills.length) {
								for (var s of map.skills) {
									player.addSkillLog(s);
								}
								delete player.storage.xjzh_sanguo_daoshu;
								player.checkConflict();
								player.checkMarks();
							}
						},
						ai: {
							combo: 'xjzh_sanguo_daoshu',
						},
					},
				},
			},
			xjzh_sanguo_huanhua: {
				trigger: {
					player: ['damageBegin', 'loseHpBegin', 'loseMaxHpBegin'],
				},
				forced: true,
				_priority: 100,
				firstDo: true,
				audio: 'ext:仙家之魂/audio/skill:1',
				group: ['xjzh_sanguo_huanhua_remove'],
				content() {
					if (trigger.name == 'loseMaxHp') {
						trigger.cancel();
					} else {
						if (trigger.num > 1) trigger.num = 1;
					}
				},
				ai: {
					filterDamage: true,
					filterLoseHp: true,
					skillTagFilter(player, tag, arg) {
						if (tag == 'filterLoseHp') {
							if (player == arg) {
								if (_status.event.num > 1) return true;
							}
						}
						return false;
					},
				},
				subSkill: {
					remove: {
						audio: 'xjzh_sanguo_huanhua',
						trigger: {
							player: ['turnOverBefore', 'linkBefore'],
						},
						forced: true,
						init(player) {
							if (player.isTurnedOver()) player.turnOver(false);
						},
						content() {
							trigger.cancel();
						},
						ai: {
							noturn: true,
							nolink: true,
							effect: {
								target(card, player, target) {
									if (card.name == 'tiesuo') return [0, 0];
								},
							},
						}, //QQQ
					},
				},
			},
			xjzh_sanguo_juejing: {
				trigger: {
					player: ['loseAfter', 'changeHp'],
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				popup: false,
				charlotte: true,
				nogainsSkill: true,
				superCharlotte: true,
				xjzh_xinghunSkill: true,
				filter(event, player) {
					if (['changeHp', 'loseMaxHp', 'gainMaxHp'].includes(event.name)) return true;
					if (event.name == 'gain' && event.player == player) return player.countCards('h') > 4;
					var evt = event.getl(player);
					if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 4) return false;
					var evt = event;
					for (var i = 0; i < 4; i++) {
						evt = evt.getParent('xjzh_sanguo_juejing');
						if (evt.name != 'xjzh_sanguo_juejing') return true;
					}
					return false;
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				async content(event, trigger, player) {
					if (['changeHp', 'loseMaxHp', 'gainMaxHp'].includes(trigger.name)) {
						switch (trigger.name) {
							case 'changeHp':
								{
									player.link(false);
									player.turnOver(false);
								}
								break;
							default: {
								player.maxHp = 2;
								player.update();
							}
						}
					} else {
						var num = 4 - player.countCards('h');
						if (num > 0) player.draw(num);
						else player.chooseToDiscard('h', true, -num);
					}
				},
				ai: {
					noh: true,
				},
			},
			xjzh_sanguo_longhun: {
				forced: true,
				group: ['xjzh_sanguo_longhun1', 'xjzh_sanguo_longhun2', 'xjzh_sanguo_longhun3', 'xjzh_sanguo_longhun4'],
				ai: {
					fireAttack: true,
					skillTagFilter(player, tag) {
						switch (tag) {
							case 'respondSha': {
								if (player.countCards('he', { suit: 'diamond' }) < 1) return false;
								break;
							}
							case 'respondShan': {
								if (player.countCards('he', { suit: 'club' }) < 1) return false;
								break;
							}
							case 'save': {
								if (player.countCards('he', { suit: 'heart' }) < 1) return false;
								break;
							}
							default:
								return true;
								break;
						}
					},
					respondSha: true,
					respondShan: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'recover') && target.hp >= 2) return [0, 0];
							if (!target.hasFriend()) return;
							if ((get.tag(card, 'damage') == 1 || get.tag(card, 'loseHp')) && target.hp > 1) return 1;
						},
					},
					threaten(player, target) {
						if (target.hp == 1) return 2;
						return 0.5;
					},
				},
			},
			xjzh_sanguo_longhun1: {
				audio: 'ext:仙家之魂/audio/skill:1',
				enable: ['chooseToUse', 'chooseToRespond'],
				prompt() {
					return '将一张♥️️牌当作桃使用';
				},
				position: 'hes',
				check(card, event) {
					return 10 - get.value(card);
				},
				selectCard: 1,
				viewAs: { name: 'tao' },
				viewAsFilter(player) {
					return player.countCards('he', { suit: 'heart' }) >= 1;
				},
				filterCard(card, player) {
					return card.suit == 'heart';
				},
			},
			xjzh_sanguo_longhun2: {
				audio: 'ext:仙家之魂/audio/skill:1',
				enable: ['chooseToUse', 'chooseToRespond'],
				prompt() {
					return '将一张♦️️牌当作【火杀】使用或打出';
				},
				position: 'hes',
				check(card, event) {
					return 10 - get.value(card);
				},
				selectCard: 1,
				viewAs: { name: 'sha', nature: 'fire' },
				viewAsFilter(player) {
					return player.countCards('he', { suit: 'diamond' }) >= 1;
				},
				filterCard(card) {
					return card.suit == 'diamond';
				},
			},
			xjzh_sanguo_longhun3: {
				audio: 'ext:仙家之魂/audio/skill:1',
				enable: ['chooseToUse', 'chooseToRespond'],
				prompt() {
					return '将一张♠️️牌当作无懈可击使用';
				},
				position: 'hes',
				check(card, event) {
					return 7 - get.value(card);
				},
				selectCard: 1,
				viewAs: { name: 'wuxie' },
				viewAsFilter(player) {
					return player.countCards('he', { suit: 'spade' }) >= 1;
				},
				filterCard(card) {
					return card.suit == 'spade';
				},
			},
			xjzh_sanguo_longhun4: {
				audio: 'ext:仙家之魂/audio/skill:1',
				enable: ['chooseToUse', 'chooseToRespond'],
				prompt() {
					return '将♣️️牌当作闪使用或打出';
				},
				position: 'hes',
				check(card, event) {
					return 10 - get.value(card);
				},
				selectCard: 1,
				viewAs: { name: 'shan' },
				viewAsFilter(player) {
					return player.countCards('he', { suit: 'club' }) >= 1;
				},
				filterCard(card) {
					return card.suit == 'club';
				},
			},
			xjzh_sanguo_peijian: {
				mod: {
					attackRange(player, range, distance) {
						return Infinity;
					},
				},
				trigger: {
					player: 'shaBefore',
				},
				forced: true,
				popup: false,
				content() {
					player.addTempSkill('unequip', 'shaAfter');
				},
				ai: {
					unequip: true,
				},
			},
			xjzh_sanguo_kuanggu: {
				forced: true,
				group: ['xjzh_sanguo_kuanggu_1', 'xjzh_sanguo_kuanggu_2', 'xjzh_sanguo_kuanggu_3', 'xjzh_sanguo_kuanggu_4'],
				subSkill: {
					1: {
						trigger: {
							player: ['loseMaxHpEnd', 'gainMaxHpEnd'],
						},
						forced: true,
						popup: false,
						_priority: -1,
						filter(event, player) {
							return player.maxHp > 1;
						},
						content() {
							player.hp = player.maxHp;
							player.update();
						},
					},
					2: {
						trigger: {
							player: ['damageBegin', 'loseHpBegin'],
						},
						forced: true,
						filter(event, player) {
							return player.maxHp > 1;
						},
						content() {
							trigger.cancel();
							player.loseMaxHp(trigger.num);
						},
					},
					3: {
						trigger: {
							player: 'phaseEnd',
						},
						forced: true,
						filter(event, player) {
							return player.getStat('damage') > 0 && player.maxHp < 8;
						},
						content() {
							var num = Math.min(8 - player.maxHp, player.getStat('damage'));
							player.gainMaxHp(num);
						},
					},
					4: {
						trigger: {
							player: 'phaseJudgeBefore',
						},
						forced: true,
						content() {
							if (player.hasJudge('lebu')) {
								trigger.cancel();
								player.discard(player.getCards('j'), {
									name: 'lebu',
								});
								player.skip('phaseUse');
							} else if (player.hasJudge('bingliang')) {
								trigger.cancel();
								player.discard(player.getCards('j'), {
									name: 'bingliang',
								});
								player.skip('phaseDraw');
							}
						},
					},
				},
			},
			xjzh_sanguo_kuangxi: {
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					if (_status.currentPhase != player) return false;
					if (!event.targets || !event.card) return false;
					if (event.card.name == 'wuxie') return false;
					if (event.targets.length <= 1 && event.targets.includes(player)) return false;
					var type = get.type(event.card);
					if (type != 'trick') return false;
					return true;
				},
				check(event, player) {
					var att = 0;
					for (var i = 0; i < event.targets.length; i++) {
						if (event.targets[i] != player) {
							att += get.effect(event.targets[i], { name: 'sha' }, player, player);
						}
					}
					return att > 1;
				},
				content() {
					'step 0';
					trigger.untrigger();
					trigger.finish();
					('step 1');
					var list = [];
					for (var i = 0; i < trigger.targets.length; i++) {
						if (trigger.targets[i] != player) {
							list.push(trigger.targets[i]);
						}
					}
					player.addTempSkill('unequip', 'shaAfter');
					player.useCard({ name: 'sha' }, list, false);
					('step 2');
					if (player.getStat('damage') && player.maxHp < 8) {
						player.gainMaxHp();
					}
					player.draw();
				},
			},
			xjzh_sanguo_aogu: {
				group: ['xjzh_sanguo_aogu_1', 'xjzh_sanguo_aogu_2'],
				derivation: ['wusheng', 'new_repaoxiao'],
				subSkill: {
					1: {
						audio: 'ext:仙家之魂/audio/skill:2',
						enable: 'phaseUse',
						usable: 1,
						filter(event, player) {
							return player.maxHp >= 6;
						},
						content() {
							player.loseMaxHp(player.maxHp - 2);
							player.draw(3);
							player.addTempSkill('new_repaoxiao');
							player.addTempSkill('wusheng');
						},
						ai: {
							order: 10,
							result: {
								player(player) {
									var nh = player.countCards('h');
									if (nh == 0) return 0;
									if (nh >= player.maxHp && player.maxHp >= 8) return 3;
									if (nh >= player.hp && player.maxHp >= 8) return 0.3;
									if (nh <= 3 && player.maxHp >= 8) return 0.1;
									return 0.5;
								},
							},
						},
					},
					2: {
						trigger: {
							player: 'phaseDrawBefore',
						},
						forced: true,
						filter(event, player) {
							return player.maxHp >= 8;
						},
						content() {
							'step 0';
							player.loseMaxHp(player.maxHp - 4);
							player.draw(player.maxHp - 4);
							('step 1');
							player.phaseUse();
						},
					},
				},
				mod: {
					maxHandcard(player, num) {
						return 5;
					},
				},
			},
			xjzh_sanguo_qicai: {
				mod: {
					cardname(card, player, name) {
						if (card.name == 'guohe') return 'shunshou';
					},
					targetInRange(card, player, target, now) {
						var type = get.type(card, 'trick');
						if (type == 'trick') return true;
					},
					ignoredHandcard(card, player) {
						if (card.hasGaintag('xjzh_sanguo_qicai')) return true;
					},
				},
				trigger: {
					player: 'useCard',
				},
				forced: true,
				_priority: 8,
				filter(event, player) {
					return get.type(event.card, 'trick') == 'trick';
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					trigger.nowuxiee = true;
					const { cards } = await player.draw().forResult();
					player.addGaintag(cards, 'xjzh_sanguo_qicai');
				},
			},
			xjzh_sanguo_jiqiao: {
				trigger: {
					global: ['judgeBegin', 'recoverAfter'],
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					const {
						result: { bool, targets },
					} =
						trigger.player == player
							? { result: { bool: true, targets: [player] } }
							: await player
								.chooseTarget(get.prompt('xjzh_sanguo_jiqiao'), function (card, player, target) {
									var event = _status.event;
									return target == event.player || target == event.target;
								})
								.set('target', trigger.player)
								.set('ai', function (target) {
									var player = _status.event.player;
									if (player == target) return 1;
									return get.attitude(player, target) - 1.5;
								});
					if (bool) {
						let target = targets[0];
						target == player ? target.draw() : target.draw(2);
					}
				},
				ai: {
					expose: 0.1,
				},
			},
			xjzh_sanguo_jianqing: {
				trigger: {
					player: 'dieBegin',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				limited: true,
				forced: true,
				async content(event, trigger, player) {
					player.awakenSkill(event.name);
					player.storage.xjzh_sanguo_jianqing = true;
					const { bool, targets } = await player
						.chooseTarget('〖鉴情〗:选择一名其他角色令其获得你的所有技能', lib.filter.notMe)
						.set('ai', (target) => {
							return get.attitude(player, target) > 0;
						})
						.forResult();
					if (bool) {
						let target = targets[0];
						player.line(target);
						let skills = player.getStockSkills().filter((item) => item != 'xjzh_sanguo_jianqing');
						target.addSkills(skills);
						target.draw(target.maxHp);
					}
				},
			},
			xjzh_sanguo_duice: {
				forced: true,
				mod: {
					selectTarget(card, player, range) {
						var type = get.type(card);
						if (Array.isArray(range) && range[1] == -1) return;
						if (game.players.length < 3) return;
						if (type == 'trick') range[1]++;
					},
				},
				group: ['xjzh_sanguo_duice_1', 'xjzh_sanguo_duice_2'],
				subSkill: {
					1: {
						audio: 'ext:仙家之魂/audio/skill:1',
						forced: true,
						trigger: {
							player: 'phaseBegin',
						},
						content() {
							'step 0';
							player.judge(function (card) {
								if (get.color(card) == 'red') return 1;
								return -1;
							});
							('step 1');
							if (result.bool) {
								if (player.isDamaged()) {
									player.recover();
								} else {
									player.draw(2);
								}
							}
						},
					},
					2: {
						audio: 'ext:仙家之魂/audio/skill:2',
						trigger: {
							target: 'useCardToTargeted',
						},
						forced: true,
						popup: false,
						filter(event, player) {
							var info = get.info(event.card);
							if (info.allowMultiple == false) return false;
							if (info.multitarget) return false;
							if (game.players.length <= 2) return false;
							if (['juedou', 'huogong', 'shunshou', 'guohe'].includes(event.card.name)) return true;
							return false;
						},
						content() {
							'step 0';
							player
								.chooseTarget('额外指定一名' + get.translation(trigger.card) + '的目标？', function (card, player, target) {
									var trigger = _status.event.getTrigger();
									if (trigger.targets.includes(target)) return false;
									return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
								})
								.set('ai', function (target) {
									var trigger = _status.event.getTrigger();
									var player = _status.event.player;
									return get.effect(target, trigger.card, player, player);
								});
							('step 1');
							if (result.targets?.length) {
								trigger.targets.add(result.targets[0]);
								event.finish();
							}
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (game.players.length < 3) return;
									if (card.name == 'juedou' || card.name == 'guohe' || card.name == 'shunshou' || card.name == 'huogong') return 0.5;
								},
							},
						},
					},
				},
			},
			xjzh_sanguo_zhiji: {
				group: ['xjzh_sanguo_zhiji2'],
				audio: 'ext:仙家之魂/audio/skill:1',
				trigger: {
					global: 'useCardToBefore',
				},
				forced: true,
				usable: 1,
				_priority: 99,
				mod: {
					targetEnabled(card, player, target) {
						if (['nanman'].includes(card.name)) return false;
					},
				},
				filter(event, player) {
					if (['nanman', 'huogong', 'wanjian'].includes(event.card.name)) return true;
					if (event.player == player) return false;
					if (!event.isFirstTarget) return false;
					return false;
				},
				content() {
					var card = get.cardPile(function (card) {
						return card.name == trigger.card.name;
					});
					if (card) player.gain(card, 'gain2');
				},
				ai: {
					expose: 0.5,
					effect: {
						target(card, player, target) {
							if (['nanman', 'huogong', 'wanjian'].includes(card.name) && card.isCard) return [1, 1];
						},
					},
				},
			},
			xjzh_sanguo_zhiji2: {
				audio: 'ext:仙家之魂/audio/skill:1',
				enable: 'chooseToUse',
				position: 'hes',
				filterCard: true,
				viewAsFilter(player) {
					return player.countCards('he') > 0;
				},
				viewAs: {
					name: 'wuxie',
				},
				prompt: '将一张牌当无懈可击使用',
				check(card) {
					return 8 - get.value(card);
				},
				threaten: 1.2,
			},
			xjzh_sanguo_bazhen: {
				forced: true,
				group: ['xjzh_sanguo_bazhen_1', 'xjzh_sanguo_bazhen_2'],
				subSkill: {
					1: {
						audio: 'xjzh_sanguo_bazhen',
						equipSkill: true,
						noHidden: true,
						inherit: 'bagua_skill',
						filter(event, player) {
							if (!lib.skill.bagua_skill.filter(event, player)) return false;
							if (!player.hasEmptySlot(2)) return false;
							return true;
						},
						ai: {
							respondShan: true,
							effect: {
								target(card, player, target) {
									if (player == target && get.subtype(card) == 'equip2') {
										if (get.equipValue(card) <= 7.5) return 0;
									}
									if (!target.hasEmptySlot(2)) return;
									return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
								},
							},
						},
					},
					2: {
						audio: 'xjzh_sanguo_bazhen',
						trigger: {
							player: 'damageBegin',
						},
						forced: true,
						_priority: 5,
						filter(event, player) {
							return event.num > 1 && game.hasNature(event, 'fire');
						},
						content() {
							trigger.num = 1;
						},
						ai: {
							filterDamage(event, player) {
								if (get.tag(card, 'firedamage') >= 2) return 0.5;
								return 0.8;
							},
						},
					},
				},
			},
			xjzh_sanguo_caiqing: {
				audio: 'ext:仙家之魂/audio/skill:2',
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				forced: true,
				getDrawResult(player) {
					let cards = player.getCards('h'),
						list = [],
						suits = new Map();
					cards.forEach((card) => {
						let suit = card.suit;
						suits.set(suit, (suits.get(suit) || 0) + 1);
					});
					suits.forEach((value, key) => {
						list.push(value);
					});
					return list.sort((a, b) => b - a)[0];
				},
				prompt(event, player) {
					return `〖才情〗:是否发动〖才情〗摸${lib.skill.xjzh_sanguo_caiqing.getDrawResult(player)}张牌？`;
				},
				xjzh_xinghunSkill: true,
				async content(event, trigger, player) {
					let num = lib.skill.xjzh_sanguo_caiqing.getDrawResult(player);
					player.draw(num);
				},
			},
			xjzh_sanguo_zhishu: {
				trigger: {
					global: 'phaseUseBegin',
				},
				check(event, player) {
					return 1;
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				forced: true,
				_priority: 3,
				filter(event, player) {
					return event.player != player && event.player.countCards('hej');
				},
				async content(event, trigger, player) {
					const [bool, links] = await player
						.gainPlayerCard(`〖知书〗:请选择${get.translation(trigger.player)}至多2张牌`, trigger.player, [1, 2], 'visible', 'hej')
						.set('ai', lib.card.shunshou.ai.button)
						.forResult('bool', 'links');
					if (bool) {
						player.draw();
						const [bool, cards] = await player
							.chooseCard(links.length, '交给' + get.translation(trigger.player) + get.cnNumber(links.length) + '张牌', 'h', true)
							.set('ai', (card) => {
								if (get.attitude(trigger.player, player) < 0) {
									return -get.value(card);
								} else {
									return get.value(card);
								}
							})
							.forResult('bool', 'cards');
						if (bool) {
							player.addExpose(0.5);
							trigger.player.gain(cards, 'giveAuto', player);
						}
					}
				},
				ai: {
					expose: 0.4,
				},
			},
			xjzh_sanguo_beige: {
				audio: 'ext:仙家之魂/audio/skill:2',
				trigger: {
					global: 'damageEnd',
				},
				filter(event, player) {
					return event.source && event.source != player && event.player.isIn() && player.countCards('he');
				},
				preHidden: true,
				prompt(event, player) {
					return '' + get.translation(event.source) + '对' + get.translation(event.player) + '造成了伤害,是否发动〖悲歌〗？';
				},
				check(event, player) {
					let att1 = get.attitude(player, event.player);
					let att2 = get.attitude(player, event.source);
					return att1 > 0 && att2 <= 0;
				},
				popup: false,
				async content(event, trigger, player) {
					let check = lib.skill.xjzh_sanguo_beige.check(trigger, player);
					const { bool } = await player
						.chooseToDiscard('he', get.prompt('xjzh_sanguo_beige'))
						.set('ai', (card) => {
							if (_status.event.goon) return 8 - get.value(card);
							return 0;
						})
						.set('goon', check)
						.forResult();

					if (bool) {
						const { card } = await trigger.player.judge().forResult();
						switch (card.suit) {
							case 'heart':
								let num = trigger.player.isDying() ? trigger.num || 1 : 1;
								trigger.player.recover(num);
								break;
							case 'diamond':
								trigger.player.draw(2);
								break;
							case 'club':
								trigger.source.countCards('he') > 0 ? trigger.source.chooseToDiscard('he', 2, true) : player.draw(2);
								break;
							case 'spade':
								trigger.source.isTurnedOver() ? player.draw(trigger.num) : trigger.source.turnOver();
								break;
						}
					}
				},
				ai: {
					expose: 0.3,
				},
			},
			xjzh_sanguo_guihan: {
				trigger: {
					player: 'dieBefore',
				},
				forced: true,
				limited: true,
				mark: true,
				marktext: '汉',
				intro: {
					content: 'limited',
				},
				derivation: ['xjzh_sanguo_caiqinggai'],
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					trigger.cancel(null, null, 'notrigger');
					player.awakenSkill(event.name);
					player.loseMaxHp();
					player.recoverTo(player.maxHp);
					let targetx = game.filterPlayer((current) => current != player);
					targetx.sort(lib.sort.seat);
					for (let target of targetx) {
						await target.loseHp();
					}
					do {
						let target = targetx.shift();
						let list = target.getStockSkills();
						if (list.length) {
							const {
								result: { control },
							} =
								list.length == 1
									? { result: { control: list[0] } }
									: await target.chooseControl(list).set('ai', () => {
										return list.randomGet();
									});
							if (control) {
								target.removeSkill(control, true);
								target.popup(control, 'fire');
								game.log(target, '失去技能', '#g〖' + get.translation(control) + '〗');
							}
						}
					} while (targetx.length);
					let [bool, targets] = await player
						.chooseTarget('选择一个目标获得技能〖悲歌〗', lib.filter.notMe)
						.set('ai', function (target) {
							return get.attitude(player, target) >= 2;
						})
						.forResult('bool', 'targets');
					if (bool) {
						targets[0].addSkills('xjzh_sanguo_beige');
						targets[0].popup('xjzh_sanguo_beige', 'thunder');
						game.log(targets[0], '获得技能', '#g〖' + get.translation('xjzh_sanguo_beige') + '〗');
					}
					player.removeSkills('xjzh_sanguo_beige');
				},
				ai: {
					expose: 0.5,
				},
			},
			xjzh_sanguo_liegong: {
				mod: {
					targetInRange(card, player, target) {
						if (card.name == 'sha' && card.number && card.suit == 'diamond') {
							if (get.distance(player, target) <= card.number) return true;
						}
					},
					selectTarget(card, player, range) {
						let cards = [...new Set(player.getCards('h', (card) => card.suit != 'heart').map((item) => item.suit))];
						if (Array.isArray(range) && range[1] == -1) return;
						if (card.suit != 'heart') return;
						if (game.players.length <= 2) return;
						if (!cards.length) return;
						if (card.name == 'sha') range[1] += cards.length;
					},
				},
				audio: 'ext:仙家之魂/audio/skill:4',
				trigger: {
					player: 'shaBegin',
				},
				logTarget: 'target',
				shaRelated: true,
				forced: true,
				check(event, player) {
					return get.attitude(player, event.target) <= 0;
				},
				prompt(event, player) {
					let str = '〖烈弓〗:是否令此【杀】无法闪避';
					let suit = event.card.suit;
					let cards = [...new Set(player.getCards('h', (card) => card.suit != 'club')).map((item) => item.suit)];
					if (suit == 'spade') str += '且无视防具';
					if (suit == 'club') str += '且额外弃置' + get.translation(event.target) + '' + get.translation(cards.length) + '张手牌';
					return str;
				},
				async content(event, trigger, player) {
					trigger.directHit = true;
					if (trigger.target.countCards('h') && trigger.card.suit == 'club') {
						let cards = [...new Set(player.getCards('h', (card) => card.suit != 'club')).map((item) => item.suit)];
						player.discardPlayerCard('h', trigger.target, true, cards.length);
					}
				},
				ai: {
					threaten: 0.5,
					expose: 0.5,
					directHit_ai: true,
				},
			},
			xjzh_sanguo_zhujian: {
				audio: 'ext:仙家之魂/audio/skill:2',
				trigger: {
					source: 'damageBegin3',
					player: ['damageBegin3', 'phaseBegin'],
				},
				forced: true,
				_priority: 3,
				marktext: '箭',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					let cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				filter(event, player) {
					if (event.name == 'phase') return player.getExpansions('xjzh_sanguo_zhujian').length;
					if (!event.cards || !event.cards.length) return false;
					return event.card && event.card.name == 'sha';
				},
				async content(event, trigger, player) {
					if (trigger.name == 'phase') player.gain(player.getExpansions('xjzh_sanguo_zhujian'), 'gain2', 'log', player);
					else {
						let cards = get.cards();
						player.addToExpansion(cards, player, 'draw').gaintag.add(event.name);
					}
				},
			},
			xjzh_sanguo_zhujian2: {
				audio: 'xjzh_sanguo_zhujian',
				trigger: {
					target: 'useCard',
					player: 'useCard',
				},
				forced: true,
				_priority: 4,
				marktext: '箭',
				intro: {
					content: '已记录点数:$',
				},
				filter(event, player) {
					if (event.card.name != 'sha') return false;
					return !player.getStorage('xjzh_sanguo_zhujian2').includes(event.card.number);
				},
				init(player) {
					var cards = Array.from(ui.cardPile.childNodes).filter((card) => card.name == 'sha');
					var num = 0;
					var list = [];
					for (var i of cards) {
						list.push(i.number);
					}
					list = list.sort((a, b) => a - b);
					var list2 = [];
					for (var i = 0; i < list.length; i++) {
						if (list[i] != list[i + 1]) list2.push(list[i]);
					}
					player.storage.xjzh_sanguo_zhujian3 = list2.length;
				},
				content() {
					'step 0';
					var num = trigger.card.number;
					player.markAuto('xjzh_sanguo_zhujian2', [num]);
					var cards = get.cardPile(function (card) {
						return card.number != trigger.card.number && card.name == 'sha';
					});
					if (cards) player.gain(cards, player, 'gain2');
					('step 1');
					var storage = player.getStorage('xjzh_sanguo_zhujian2');
					if (storage.length % 4 == 0) {
						if (!trigger.baseDamage) trigger.baseDamage = 1;
						var num = storage.length / 4;
						trigger.baseDamage += num;
						game.log(trigger.player, '令【', trigger.card, '〗伤害加' + get.translation(num) + '');
					}
					('step 2');
					if (player.getStorage('xjzh_sanguo_zhujian2').length >= player.storage.xjzh_sanguo_zhujian3) {
						player.unmarkAuto('xjzh_sanguo_zhujian2', player.getStorage('xjzh_sanguo_zhujian2'));
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'sha') return [1, 0.6];
						},
						player(card, player, target) {
							if (card.name == 'sha') return [1, 0.5];
						},
					},
				},
			},
			xjzh_sanguo_chuzhen: {
				trigger: { player: 'useCard1' },
				forced: true,
				firstDo: true,
				filter(event, player) {
					return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
				},
				content() {
					trigger.audioed = true;
				},
				mod: {
					aiOrder(player, card, num) {
						var history = player.getHistory('useCard', function (evt) {
							return evt.card && evt.card.name == 'sha';
						});
						if (!history.length) return;
						if (typeof history[history.length - 1].card.number != 'number') return;
						if (typeof card.number != 'number') return;
						if (card.name != 'sha') return;
						if (card.number > history[history.length - 1].card.number) {
							return num + 10 / (card.number - history[history.length - 1].card.number);
						}
					},
					cardUsable(card, player, num) {
						var history = player.getHistory('useCard', function (evt) {
							return evt.card && evt.card.name == 'sha';
						});
						if (!history.length) return;
						if (card.number > history[history.length - 1].card.number && card.name == 'sha') return Infinity;
					},
				},
				shaRelated: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				ai: {
					skillTagFilter(player, tag, arg) {
						if (arg && arg.card.name != 'sha') return false;
						var history = player.getHistory('useCard', function (evt) {
							return evt.card && evt.card.name == 'sha';
						});
						if (!history.length) return false;
						if (typeof history[history.length].card.number != 'number') return false;
						if (typeof arg.card.number != 'number') return false;
						if (arg && arg.card.number > history[history.length - 1].card.number) {
							return true;
						}
						return false;
					},
				},
			},
			xjzh_sanguo_lanzheng: {
				trigger: {
					player: ['phaseDrawBegin', 'phaseDiscardBegin'],
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (event.numFixed) return false;
					if (event.name == 'phaseDiscard') return player.needsToDiscard() > 0;
					return true;
				},
				async content(event, trigger, player) {
					if (trigger.name == 'phaseDraw') trigger.num += player.hp;
					else {
						if (player.needsToDiscard() >= player.maxHp) player.loseHp();
						else player.gainMaxHp();
					}
				},
			},
			xjzh_sanguo_hengzheng: {
				audio: 'ext:仙家之魂/audio/skill:2',
				trigger: {
					global: 'phaseUseEnd',
				},
				forced: true,
				filter(event, player) {
					if (event.player == player) return false;
					let history = event.player.getHistory('sourceDamage');
					if (!history.length) return true;
					return false;
				},
				async content(event, trigger, player) {
					const { cards } = await trigger.player
						.chooseCard('he')
						.set('ai', (card) => {
							if (_status.event.goon) return 12 - get.value(card);
							return 0;
						})
						.set(
							'goon',
							(() => {
								if (get.damageEffect(trigger.player, player, trigger.player) > 0) return true;
								if (get.attitude(player, trigger.player) >= 0) return true;
								if (trigger.player.needsToDiscard() > 0) return true;
								return false;
							})()
						)
						.forResult();

					if (cards) player.gain(cards, trigger.player, 'gain2');
					else trigger.player.damage(1, player, 'nocard');
				},
			},
			xjzh_sanguo_baolian: {
				trigger: {
					global: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					if (!event.player.countCards('h')) return false;
					return event.player != player;
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					const { cards } = await trigger.player
						.chooseCard('h', true, '〖暴敛〗:选择并展示一张手牌')
						.set('ai', (card) => {
							return 8 - get.value(card, trigger.player);
						})
						.forResult();

					trigger.player.showCards(cards);
					if (player.getCards('h').some((item) => get.type(item) == get.type(cards[0]))) player.useCard({ name: 'sha' }, trigger.player, false);
				},
			},
			xjzh_sanguo_linnue: {
				trigger: {
					global: 'damageBegin1',
				},
				forced: true,
				zhuSkill: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!player.hasZhuSkill('xjzh_sanguo_linnue')) return false;
					if (event.numFixed || event.num == 0) return false;
					if (!event.source || event.source == undefined) return false;
					if (event.source == player && event.player != player && player.group != event.player.group) return true;
					if (event.source != player && event.player == player && player.group != event.source.group) return true;
					return false;
				},
				async content(event, trigger, player) {
					let group = player.group;
					trigger.source == player ? trigger.num++ : trigger.num--;
				},
				ai: {
					damageBonus: true,
				},
			},
			xjzh_sanguo_xiongbin: {
				forceDie: true,
				xjzh_xinghunSkill: true,
				enable: 'phaseUse',
				usable: 1,
				filterTarget: lib.filter.notMe,
				selectTarget: -1,
				multitarget: true,
				multiline: true,
				check(card) {
					return 1;
				}, //QQQ
				filterCard: true,
				selectCard: 1,
				filter(event, player) {
					return player.countCards('h');
				},
				async content(event, trigger, player) {
					let cards = event.cards[0],
						card = ui.create.card();
					card.classList.add('infohidden');
					card.classList.add('infoflip');
					player.$throw(card, 1000, 'nobroadcast');
					game.log(player, '扣置了一张牌在场上');
					let suits = cards.suit,
						numbers = cards.number,
						list = [],
						targets = game.filterPlayer((target) => target != player && target.countCards('h'));
					targets.sort(lib.sort.seat);
					while (targets.length) {
						let target = targets.shift();
						const { cards } = await target
							.chooseCard('h', 1, true)
							.set('ai', (card) => {
								let suit = card.suit,
									number = card.number;
								if (suit == suits || number == numbers) return 0;
								return 4 - get.value(card);
							})
							.forResult();

						if (cards) {
							target.$throw(cards[0], 1000, 'nobroadcast');
							game.log(target, '展示了', cards[0]);
							let suit = cards[0].suit,
								number = cards[0].number;
							if ([suits, numbers].some((item) => [suit, number].includes(item))) player.useCard({ name: 'sha' }, target, 'unequip', false);
							else list.push(cards[0]);
						}
					}
					if (list.length) player.gain(list, 'gain2');
				},
				ai: {
					order: 1,
					result: {
						player(player, target, card) {
							if (player.hp <= 1 && player.countCards('h', { name: 'tao' }) <= 0) return 0;
							if (game.roundNumber == 1) return 0;
							if (player.hp > 1) {
								if (player.countCards('h', { name: 'tao' })) return 1.5;
								if (game.players.length < 3) return 1;
								if (game.players.length >= 3 && game.players.length <= 5) return 5;
								if (game.players.length > 5) return 1.5;
							}
							return 0.5;
						},
					},
					threaten: 1.5,
				},
			},
			xjzh_sanguo_tieji: {
				audio: 'ext:仙家之魂/audio/skill:4',
				trigger: {
					player: 'shaBegin',
				},
				forced: true,
				shaRelated: true,
				check(event, player) {
					return get.attitude(player, event.target) <= 0;
				},
				logTarget: 'target',
				async content(event, trigger, player) {
					const [suit, number] = await player.judge().forResult('suit', 'number');
					let target = trigger.target,
						num = target.countCards('h', 'shan');
					switch (suit) {
						case 'heart':
							if (trigger.getParent(2).name != 'xjzh_sanguo_xiongbin') player.getStat().card.sha--;
							break;
						case 'spade':
							if (!target.hasSkill('baiban')) target.addTempSkill('baiban', 'shaAfter');
							break;
					}
					const { bool } = await target
						.chooseToDiscard(`〖铁骑〗:请弃置一张花色为${get.translation(suit)}或点数为${get.translation(number)}的牌,否则【杀】无法闪避`, 'he', (card) => {
							return [suit, number].some((item) => [card.suit, card.number].includes(item));
						})
						.set('ai', (card) => {
							if (_status.event.eff > 0) return 10 - get.value(card);
							return 0;
						})
						.set('eff', get.damageEffect(target, player, player))
						.forResult();

					if (!bool) trigger.directHit = true;
				},
			},
			xjzh_sanguo_jieqiang: {
				audio: 'ext:仙家之魂/audio/skill:1',
				trigger: {
					player: 'phaseDrawBegin',
				},
				forced: true,
				mod: {
					maxHandcard(player, num) {
						return (num += Math.max(player.getDamagedHp(), player.getHp(true)));
					},
				},
				async content(event, trigger, player) {
					trigger.num += Math.max(player.getDamagedHp(), player.getHp(true));
				},
			},
			xjzh_sanguo_shengxin: {
				forced: true,
				marktext: '圣',
				intro: {
					name: '圣心',
					content: '发动圣心#次',
				},
				group: 'xjzh_sanguo_shengxin1',
				mod: {
					ignoredHandcard(card, player) {
						if (card.suit == 'heart') return true;
					},
				},
				trigger: {
					global: 'useCardAfter',
				},
				filter(event, player) {
					return event.player != player && event.card.suit == 'heart' && Math.random() <= 0.3;
				},
				content() {
					player.gain(game.createCard(trigger.card), 'gain2');
				},
			},
			xjzh_sanguo_shengxin1: {
				audio: 'ext:仙家之魂/audio/skill:2',
				enable: 'phaseUse',
				prompt: '①选择一名体力小于你的武将,令其回复体力与你一致并摸一张牌<li>②选择一名体力不小于你的武将,令其摸体力上限张牌',
				usable: 1,
				mark: true,
				filterCard(card, player) {
					return card.suit == 'heart';
				},
				filter(event, player) {
					if (player.countCards('h', { suit: 'heart' }) == 0) return false;
					return event.player.isAlive();
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				content() {
					if (!player.storage.xjzh_sanguo_liangyi) {
						player.addMark('xjzh_sanguo_shengxin');
					}
					if (target.hp < player.hp) {
						target.recover(player.hp - target.hp);
						target.draw();
					} else {
						var num = Math.min(5, target.maxHp);
						target.draw(num);
					}
				},
				ai: {
					order: 8,
					threaten: 2,
					expose: 0.6,
					result: {
						player: -1,
						target(player, target) {
							if (!target) return;
							var num = player.hp - target.hp;
							if (num > 0 && num < 2) return 1.5;
							if (num >= 2) return 3;
							if (num <= 0) return 1.5;
							if (player.countCards('h') > player.hp) return 5;
							return 1.5;
						},
					},
				},
			},
			xjzh_sanguo_jishi: {
				audio: 'ext仙家之魂:2',
				trigger: {
					global: 'dying',
				},
				marktext: '济',
				intro: {
					name: '济世',
					content: '发动济世#次',
				},
				_priority: 86,
				prompt(event, player) {
					return '' + get.translation(event.player) + '濒死,是否发动济世';
				},
				check(event, player) {
					if (get.attitude(player, event.player) > 2) return true;
					return false;
				},
				content() {
					'step 0';
					event.cards = get.cards(player.getDamagedHp() + 1);
					player.showCards(event.cards);
					('step 1');
					var num = 0;
					var cards2 = [];
					event.cards = event.cards.filter((i) => {
						if (i.suit == 'heart') {
							num++;
						}
						if (get.color(i) == 'red') {
							cards2.push(i);
							return false;
						}
						return true;
					});
					game.cardsDiscard(cards2);
					if (num > 0) {
						trigger.player.recoverTo(1);
						if (!player.storage.xjzh_sanguo_liangyi) {
							player.addMark('xjzh_sanguo_jishi');
						}
					}
					('step 2');
					if (event.cards.length) {
						player.gain(event.cards, 'gain2');
					}
				},
				ai: {
					save: true,
					expose: 0.8,
				},
			},
			xjzh_sanguo_liangyi: {
				limited: true,
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return player != target;
				},
				filter(event, player) {
					return player.countMark('xjzh_sanguo_shengxin') >= 3 || player.countMark('xjzh_sanguo_jishi') >= 3;
				},
				forced: true,
				content() {
					'step 0';
					player.awakenSkill(event.name);
					player.clearMark('xjzh_sanguo_shengxin');
					player.clearMark('xjzh_sanguo_jishi');
					('step 1');
					target.recover();
					target.addSkill('xjzh_sanguo_liangyi2');
					target.draw(player.hp + game.countPlayer());
					target.phase('xjzh_sanguo_liangyi');
				},
			},
			xjzh_sanguo_liangyi2: {
				mark: true,
				marktext: '医',
				intro: {
					name: '良医',
					content: '回合结束后失去所有体力',
				},
				trigger: {
					player: 'phaseEnd',
				},
				forced: true,
				content() {
					player.loseHp(player.hp);
					player.removeSkill('xjzh_sanguo_liangyi2');
				},
			},
			xjzh_sanguo_yinren: {
				trigger: {
					global: 'dieAfter',
					player: ['dieBefore', 'damageBegin', 'loseHpBegin', 'loseMaxHpBegin'],
				},
				mark: true,
				marktext: '隐',
				intro: {
					content: '免疫体力变化',
				},
				init(player) {
					setTimeout(function () {
						if (game.players.length > 3) {
							if (player.maxHp != 1) {
								player.hp = 1;
								player.maxHp = 1;
								player.storage.xjzh_sanguo_yinren = 0;
								player.update();
							}
						} else {
							var list = lib.skill.xjzh_sanguo_yinren.derivation.slice(0);
							player.addSkill(list);
							player.removeSkill('xjzh_sanguo_yinren');
						}
					}, 500);
				},
				forced: true,
				_priority: 5,
				derivation: ['xjzh_sanguo_jilue', 'xjzh_sanguo_qicaix'],
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					if (event.name == 'die') {
						if (event.player != player) {
							if (event.player.isDead()) return true;
						}
						if (event.player == player) return true;
					}
					if (event.name == 'damage' || event.name == 'loseMaxHp' || event.name == 'loseHp') return true;
					return false;
				},
				content() {
					if (trigger.name == 'die') {
						if (trigger.player != player) {
							if (trigger.player.isDead() && player.storage.xjzh_sanguo_yinren < 2) {
								player.gainMaxHp();
								player.recover();
								var list = lib.skill.xjzh_sanguo_yinren.derivation.slice(0);
								player.addSkill(list[player.storage.xjzh_sanguo_yinren]);
								player.storage.xjzh_sanguo_yinren++;
								if (player.hasSkill('xjzh_sanguo_jilue') && player.hasSkill('xjzh_sanguo_qicaix')) {
									delete player.storage.xjzh_sanguo_yinren;
									player.removeSkill('xjzh_sanguo_yinren');
									game.playXH('xjzh_sanguo_yinren2');
								}
							}
						} else {
							trigger.cancel(null, null, 'notrigger');
						}
					} else if (trigger.name == 'damage' || trigger.name == 'loseHp' || trigger.name == 'loseMaxHp') {
						trigger.cancel(null, null, 'notrigger');
					}
				},
				ai: {
					nofire: true,
					nothunder: true,
					nodamage: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return [0, 0];
						},
					},
					skillTagFilter(player, tag) {
						if (player.storage.xjzh_sanguo_yinren) {
							return true;
						}
					},
				},
			},
			xjzh_sanguo_jilue: {
				enable: 'phaseUse',
				usable: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				filterTarget(card, player, target) {
					return player != target;
				},
				content() {
					'step 0';
					var hs = player.countCards('h');
					var hs2 = target.countCards('h');
					if (hs > hs2) {
						target.draw(hs - hs2);
					} else if (hs < hs2) {
						target.chooseToDiscard(hs2 - hs, true);
					}
					if (hs < player.maxHp) player.drawTo(player.maxHp);
				},
				ai: {
					expose: 0.5,
					order: 12,
					result: {
						player: 1,
						target(player, target) {
							var hs = player.countCards('h');
							var hs2 = target.countCards('h');
							var hp = player.getDamagedHp();
							if (hs > hs2) return hs - hs2 + hp;
							return -(hs2 - hs + hp);
						},
					},
				},
			},
			xjzh_sanguo_qicaix: {
				enable: 'phaseUse',
				audio: 'ext:仙家之魂/audio/skill:2',
				filterCard(card, player, target) {
					let type = get.type(card);
					if (Array.isArray(ui.selected.cards))
						for (var i of ui.selected.cards) {
							if (get.type(i) != type) return false;
						}
					return true;
				},
				selectCard: 2,
				complexCard: true,
				position: 'he',
				check(card, event) {
					return 6 - get.value(card);
				},
				group: ['xjzh_sanguo_qicaix_use'],
				filter(event, player) {
					let cards = player.getCards('he');
					if (cards.length == 0) return false;
					let list = [];
					let num = 0;
					if (Array.isArray(cards))
						for (var i of cards) {
							let card = i;
							if (list.includes(get.type(card))) num++;
							list.push(get.type(card));
						}
					if (num > 0) return true;
					return false;
				},
				mod: {
					cardUsable(card, player, num) {
						if (!card.cards) return;
						if (card.name == 'sha' || card.name == 'jiu') {
							for (var i of card.cards) {
								if (i.hasGaintag('xjzh_sanguo_qicaix')) return Infinity;
							}
						}
					},
					targetInRange(card, player, target, now) {
						if (!card.cards) return;
						for (var i of card.cards) {
							if (i.hasGaintag('xjzh_sanguo_qicaix')) return true;
						}
					},
				},
				async content(event, trigger, player) {
					let typex = get.type(event.cards[0]);
					let card = get.cardPile(function (card) {
						return get.type(card) != typex;
					});
					if (card) {
						player.gain(card, player, 'draw');
					} else {
						player.gain(game.createCard(card), player, 'draw');
					}
					player.addGaintag(card, 'xjzh_sanguo_qicaix');
				},
				ai: {
					expose: 0.5,
					order: 6,
					result: {
						player: 1, //QQQ
					},
				},
				subSkill: {
					use: {
						trigger: { player: 'useCardBefore' },
						forced: true,
						_priority: -1,
						filter(event, player) {
							if (!event.cards || !event.cards.length) return false;
							if (
								event.cards.some((card) => {
									return ['sha', 'jiu'].includes(card.name) && card.hasGaintag('xjzh_sanguo_qicaix');
								})
							)
								return true;
							return false;
						},
						async content(event, trigger, player) {
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								let stat = player.getStat();
								if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
							}
						},
					},
				},
			},
			xjzh_sanguo_bolue: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				_priority: -3,
				filter(event, player) {
					return !player.hasSkill('xjzh_sanguo_yinren');
				},
				mark: true,
				marktext: '博',
				intro: {
					name: '博略',
					content(storage, player) {
						if (player.storage.xjzh_sanguo_bolue) {
							var storage = player.storage.xjzh_sanguo_bolue;
							return get.translation(storage);
						}
						return '';
					},
					markcount(storage, player) {
						if (player.storage.xjzh_sanguo_bolue) {
							var storage = player.storage.xjzh_sanguo_bolue;
							return storage.length;
						}
						return '';
					},
				},
				init(player) {
					player.storage.xjzh_sanguo_bolue = [];
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					'step 0';
					if (player.storage.xjzh_sanguo_biantian && player.storage.xjzh_sanguo_biantian == true) event.goto(3);
					('step 1');
					player.judge();
					('step 2');
					switch (result.card.suit) {
						case 'heart': {
							event.group = ['shu'];
							break;
						}
						case 'spade': {
							event.group = ['wei'];
							break;
						}
						case 'diamond': {
							event.group = ['qun'];
							break;
						}
						case 'club': {
							event.group = ['wu'];
							break;
						}
					}
					if (!player.storage.xjzh_sanguo_bolue.includes(result.card.suit)) player.storage.xjzh_sanguo_bolue.add(result.card.suit);
					('step 3');
					event.skills2 = [];
					if (!event.group) event.group = ['wei', 'shu', 'wu', 'qun'];
					('step 4');
					player.checkConflict();
					player.checkMarks();
					var list;
					if (_status.characterlist) {
						list = [];
						for (var i = 0; i < _status.characterlist.length; i++) {
							var name = _status.characterlist[i];
							if (lib.character[name][1] == event.group[0]) list.push(name);
						}
					} else if (_status.connectMode) {
						list = get.charactersOL(function (i) {
							return lib.character[i][1] != event.group[0];
						});
					} else {
						list = get.gainableCharacters(function (info) {
							return info[1] == event.group[0];
						});
					}
					var players = game.players.concat(game.dead);
					for (var i of players) {
						list.remove(i.name);
						list.remove(i.name1);
						list.remove(i.name2);
					}
					var skills = [];
					for (var i of list) {
						skills.addArray(
							lib.character[i][3].filter(function (skill) {
								var info = lib.skill[skill];
								return info && !info.charlotte && !info.dutySkill && !info.juexingji && !info.limited && !info.unique;
							})
						);
					}
					event.skills2.push(skills.randomGet());
					event.group.remove(event.group[0]);
					if (player.storage.xjzh_sanguo_biantian && player.storage.xjzh_sanguo_biantian == true) {
						if (event.skills2.length < 4) event.redo();
					}
					('step 5');
					player.addAdditionalSkill('xjzh_sanguo_bolue', event.skills2);
					game.log(player, '获得了技能', '#g〖' + get.translation(event.skills2) + '〗');
				},
			},
			xjzh_sanguo_biantian: {
				trigger: {
					player: 'xjzh_sanguo_bolueAfter',
				},
				juexingji: true,
				limited: true,
				forced: true,
				_priority: -1,
				derivation: ['xjzh_sanguo_yingshi', 'xjzh_sanguo_langgu'],
				filter(event, player) {
					if (!player.storage.xjzh_sanguo_bolue) return false;
					if (player.storage.xjzh_sanguo_biantian) return false;
					var list = player.storage.xjzh_sanguo_bolue;
					return player.storage.xjzh_sanguo_bolue.length >= 4;
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				content() {
					'step 0';
					player.awakenSkill('xjzh_sanguo_biantian');
					('step 1');
					player.gainMaxHp();
					('step 2');
					var list = ['spade', 'heart', 'club', 'diamond'];
					var cards = [];
					while (list.length) {
						var card = get.cardPile(function (cardx) {
							return cardx.suit == list[0];
						});
						if (card) {
							cards.push(card);
						} else {
							cards.push(game.createCard(card));
						}
						list.remove(list[0]);
					}
					player.gain(cards, player, 'draw');
					('step 3');
					player.addSkills(['xjzh_sanguo_yingshi', 'xjzh_sanguo_langgu']);
					if (player.storage.xjzh_sanguo_bolue) {
						player.unmarkSkill('xjzh_sanguo_bolue');
						delete player.storage.xjzh_sanguo_bolue;
					}
				},
			},
			xjzh_sanguo_yingshi: {
				trigger: {
					global: ['damageAfter'],
				},
				filter(event, player) {
					if (event.source == player) return event.player != player;
					return event.player == player;
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				content() {
					'step 0';
					if (trigger.source == player) {
						event.target = trigger.player;
					} else {
						event.target = player;
					}
					var cards = event.target.getCards('h');
					player.chooseCardButton(cards, 1, '〖鹰视〗:选择获得' + get.translation(target) + '一张牌');
					('step 1');
					if (result.links?.length) {
						player.gain(result.links[0], event.target, 'draw');
					}
				},
			},
			xjzh_sanguo_langgu: {
				trigger: {
					player: ['drawBegin', 'gainBegin'],
				},
				forced: true,
				_priority: 3,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return event.getParent('xjzh_sanguo_langgu').name != 'xjzh_sanguo_langgu';
				},
				content() {
					'step 0';
					trigger.cancel(null, null, 'notrigger');
					('step 1');
					var list = ['spade', 'heart', 'club', 'diamond'];
					var cards = [];
					while (list.length) {
						var card = get.cardPile(function (cardx) {
							return cardx.suit == list[0];
						});
						if (card) {
							cards.push(card);
						} else {
							cards.push(game.createCard(card));
						}
						list.remove(list[0]);
					}
					player.gain(cards, player, 'giveAuto');
				},
			},
			xjzh_sanguo_keluan: {
				trigger: {
					target: 'useCardToBefore',
				},
				forced: true,
				check(event, player) {
					if (get.attitude(player, event.player) < 0) return true;
					return false;
				},
				filter(event, player) {
					return ['sha', 'juedou'].includes(event.card.name);
				},
				async content(event, trigger, player) {
					trigger.player.countCards('he') ? player.gainPlayerCard(trigger.player, 'he', true) : player.draw();
					player.addTempSkill('unequip', 'shaAfter');
					player.useCard({ name: 'sha' }, trigger.player, false);
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return [0.5, 0.5];
						},
					},
				},
			},
			xjzh_sanguo_cuifeng: {
				trigger: {
					global: 'useCardToPlayer',
				},
				forced: true,
				notemp: true,
				prompt(event, player) {
					return '' + get.translation(event.player) + '对' + get.translation(event.target) + '使用了' + get.translation(event.card) + ',是否发动〖摧锋〗将目标改为' + get.translation(player) + '？';
				},
				filter(event, player) {
					if (!event.cards || !event.cards.length) return false;
					if (event.player == player || event.target == player) return false;
					if (event.targets.length != 1) return false;
					return ['sha', 'juedou'].includes(event.card.name);
				},
				logTarget: 'target',
				check(event, player) {
					return get.effect(event.targets[0], event.card, event.player, player) <= get.effect(player, event.card, event.player, player);
				},
				async content(event, trigger, player) {
					await trigger.target.draw();
					trigger.targets.length = 0;
					trigger.parent.triggeredTargets1.length = 0;
					trigger.targets.push(player);
				},
				ai: {
					notemp: true,
				},
			},
			xjzh_sanguo_chaohuang: {
				forced: true,
				_priority: Infinity,
				firstDo: true,
				init(player) {
					if (!game.xjzhAchi.hasAchi('百鸟朝凰', 'character') && player.isUnderControl(true) && game.me == player) {
						if (player.name == 'xjzh_sanguo_tongyuan' || player.name1 == 'xjzh_sanguo_tongyuan' || player.name2 == 'xjzh_sanguo_tongyuan') player.storage.xjzh_sanguo_chaohuang = 0;
					}
				},
				trigger: {
					player: 'drawAfter',
				},
				filter(event, player) {
					if (player.name == 'xjzh_sanguo_tongyuan' || player.name1 == 'xjzh_sanguo_tongyuan' || player.name2 == 'xjzh_sanguo_tongyuan') {
						if (event.getParent('xjzh_sanguo_chaohuang_draw').name == 'xjzh_sanguo_chaohuang_draw') return true;
					}
					return player.storage.xjzh_sanguo_chaohuang;
				},
				content() {
					if (!player.storage.xjzh_sanguo_chaohuang) player.storage.xjzh_sanguo_chaohuang = 0;
					player.storage.xjzh_sanguo_chaohuang++;
					if (player.storage.xjzh_sanguo_chaohuang >= 10 && !game.xjzhAchi.hasAchi('百鸟朝凰', 'character')) {
						if (player.isUnderControl(true) && game.me == player) game.xjzhAchi.addProgress('百鸟朝凰', 'character', 10);
					}
				},
				group: ['xjzh_sanguo_chaohuang_1', 'xjzh_sanguo_chaohuang_2'],
				subSkill: {
					1: {
						audio: 'ext:仙家之魂/audio/skill:1',
						trigger: {
							player: 'shaMiss',
						},
						forced: true,
						content() {
							'step 0';
							if (player.getStat().card.sha >= 1) {
								player.getStat().card.sha--;
							}
							('step 1');
							if (player.getStat().card.jiu >= 1) {
								player.getStat().card.jiu--;
							}
						},
					},
					2: {
						audio: 'ext:仙家之魂/audio/skill:1',
						trigger: {
							global: 'juedouBegin',
						},
						forced: true,
						content() {
							'srep 0';
							if ((event.target = player)) {
								player.addTempSkill('xjzh_sanguo_chaohuang_draw', 'juedouAfter');
							} else {
								event.goto(1);
							}
							('step 1');
							if ((event.player = player)) {
								if (!game.xjzhAchi.hasAchi('百鸟朝凰', 'character')) player.addTempSkill('xjzh_sanguo_chaohuang_draw', 'juedouAfter');
								else player.addTempSkill('xjzh_sanguo_chaohuang_draw', 'phaseBegin');
							} else {
								event.finish();
							}
						},
					},
					draw: {
						audio: 'ext:仙家之魂/audio/skill:1',
						trigger: {
							player: 'loseAfter',
						},
						forced: true,
						content() {
							player.draw();
						},
					},
				},
			},
			xjzh_sanguo_liansuo: {
				trigger: {
					player: ['phaseUseBegin'],
				},
				forced: true,
				firstDo: true,
				_priority: 100,
				popup: false,
				mod: {
					selectTarget(card, player, range) {
						if (Array.isArray(range) && range[1] == -1) return;
						if (game.players.length < 3) return;
						var info = get.info(card);
						if (card.suit == 'club' || card.name == 'tiesuo') {
							if (card.name == 'tiesuo') {
								range[1] += 1;
							} else {
								if (info.notarget) return;
								if (info.multitarget) return;
								if (get.type(card) == 'equip' || get.type(card) == 'delay') return;
								range[0] = 1;
								range[1] += 1;
							}
						}
					},
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					let previous = player.previous;
					let next = player.next;
					if (previous && next) {
						return !next.hasSkill('fengyin') || !previous.hasSkill('fengyin');
					}
					return false;
				},
				async content(event, trigger, player) {
					let previous = player.previous;
					let next = player.next;
					next.addTempSkill('fengyin');
					previous.addTempSkill('fengyin');
				},
			},
			xjzh_sanguo_hengzhou: {
				trigger: {
					global: ['gameStart', 'changeSkillsAfter', 'showCharacterBegin'],
					player: ['enterGame', 'dieBefore', 'linkAfter'],
				},
				forced: true,
				forceDie: true,
				firstDo: true,
				_priority: 66,
				audio: 'ext:仙家之魂/audio/skill:1',
				global: ['xjzh_zxzh_hengzhou_damage', 'xjzh_zxzh_hengzhou_ai'],
				filter(event, player, name) {
					if (name == 'linkAfter') return player.isLinked();
					if (name == 'gameStart') return game.roundNumber == 0;
					if (['dieBefore', 'showCharacterBegin'].includes(name)) return true;
					if (name == 'changeSkillsAfter') {
						if (!event.addSkill.length) return false;
						if (
							event.addSkill.filter((skill) => {
								let info = get.info(skill),
									str = get.translation(skill + '_info');
								if (!str || str.length == 0) return false;
								if (event.player.awakenedSkills && event.player.awakenedSkills.includes(skill)) return false;
								if (lib.skill.global.includes(skill)) return false;
								if (event.player.disabledSkills && event.player.disabledSkills[skill] && event.player.disabledSkills[skill].includes('xjzh_sanguo_hengzhou')) return false;
								if (skill.includes('jycw')) return false;
								return str.includes('横置');
							}).length
						)
							return true;
					}
					return false;
				},
				async content(event, trigger, player) {
					if (trigger.name == 'link') {
						game.countPlayer((current) => {
							current.link(true);
						});
					} else {
						if (trigger.name == 'die') {
							let targets = game.filterPlayer((current) => {
								if (!current.disabledSkills) return false;
								let skills = current.getSkills(null, false, false).filter((skill) => {
									return current.disabledSkills && current.disabledSkills[skill] && current.disabledSkills[skill].includes('xjzh_sanguo_hengzhou');
								});
								if (skills.length) return true;
								return current != player;
							});
							targets.forEach((target) => {
								let skills = target.getSkills(null, false, false).filter((skill) => {
									return target.disabledSkills && target.disabledSkills[skill] && target.disabledSkills[skill].includes('xjzh_sanguo_hengzhou');
								});
								target.enableSkill('xjzh_sanguo_hengzhou');
								game.log(
									target,
									`的技能${skills.map((item) => {
										return `〖${get.translation(item)}〗`;
									})}因庞统的〖横舟〗回复了`
								);
							});
						} else {
							let targets = game.filterPlayer((current) => current != player);
							for (let target of targets) {
								let skills = target.getSkills(null, false, false).filter((skill) => {
									let info = get.info(skill),
										str = get.translation(skill + '_info');
									if (!str || str.length == 0) return false;
									if (target.awakenedSkills && target.awakenedSkills.includes(skill)) return false;
									if (lib.skill.global.includes(skill)) return false;
									if (target.disabledSkills && target.disabledSkills[skill] && target.disabledSkills[skill].includes('xjzh_sanguo_hengzhou')) return false;
									if (skill.includes('jycw')) return false;
									return str.includes('横置');
								});
								if (skills.length) {
									target.disableSkill('xjzh_sanguo_hengzhou', skills);
									game.log(
										target,
										`的技能${skills.map((item) => {
											return `〖${get.translation(item)}〗`;
										})}因庞统的〖横舟〗失效了`
									);
									if (target.isLinked()) target.link(false);
								}
							}
						}
					}
				},
				subSkill: {
					damage: {
						trigger: {
							player: 'damageBegin3',
						},
						forced: true,
						_priority: 10,
						filter(event, player) {
							if (!player.isLinked()) return false;
							if (!game.hasNature(event, 'fire')) return false;
							return true;
						},
						content() {
							trigger.num++;
						},
						ai: {
							fireAttack: true,
							effect: {
								target(card, player, target) {
									if (card.nature == 'fire') return 2;
									if (get.tag(card, 'fireDamage') && current < 0) return 2;
								},
							},
						},
					},
					ai: {
						ai: {
							effect: {
								target(card, player, target) {
									let targets = game.findPlayer((current) => {
										return current.hasSkill('xjzh_sanguo_liansuo');
									});
									if (card.name == 'tiesuo') {
										if (targets != target && targets.isLinked()) return 0;
									}
								},
							},
							result: {
								player(player, target, card) {
									let targets = game.findPlayer((current) => {
										return current.hasSkill('xjzh_sanguo_liansuo');
									});
									if (targets.isDead()) return;
									let suit = card.suit;
									let number = card.number;
									if (suit == 'club') return max ? (max = number) : null;
								},
							},
						},
					},
				},
			},
			xjzh_sanguo_moulue: {
				trigger: {
					global: 'useCardAfter',
				},
				usable: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (player.countCards('h') == 0) return false;
					if (event.card.suit != 'club') return false;
					if (!event.targets || !event.targets.length) return false;
					if (player.getStorage('xjzh_sanguo_moulue').includes(event.card.number)) return false;
					return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
				},
				mod: {
					aiOrder(player, card, num) {
						let history = player.getHistory('useCard', function (evt) {
							return evt.card && evt.card.suit == 'club';
						});
						if (!history.length) return;
						if (typeof history[history.length - 1].card.number != 'number') return;
						if (typeof card.number != 'number') return;
						if (card.suit != 'club') return;
						if (card.number > history[history.length - 1].card.number) {
							return num + 10 / (card.number - history[history.length - 1].card.number);
						}
					},
				},
				prompt(event, player) {
					return '〖谋略〗:是否弃置一张手牌获得【' + get.translation(event.card) + '】';
				},
				forced: true,
				_priority: 9,
				marktext: '谋',
				intro: {
					content: '已记录点数:$',
				},
				check(event, player) {
					var cards = Array.from(ui.discardPile.childNodes).filter((card) => card.suit != 'club');
					if (!cards.length) return 0;
					return 1;
				},
				async content(event, trigger, player) {
					const { cards } = await player
						.chooseCard(1, 'h', '〖谋略〗:是否弃置一张手牌获得【' + get.translation(trigger.card) + '〗')
						.set('ai', (card) => {
							let num = trigger.card.number;
							return card.number > num;
						})
						.forResult();

					if (cards) {
						player.loseToDiscardpile(cards[0]);
						player.gain(trigger.cards, 'gain2', 'log');
						if (cards[0].number <= trigger.card.number) return;
						let number = Math.min(player.maxHp, Math.abs(cards[0].number - trigger.card.number));
						let dsiCards = Array.from(ui.discardPile.childNodes).filter((card) => card.suit != 'club');
						if (!dsiCards.length) return;
						let num = Math.min(number, dsiCards.length);
						const { links } = await player
							.chooseCardButton([1, num], dsiCards, '〖谋略〗:选择获得至多' + get.translation(num) + '张牌')
							.set('filterButton', function (button) {
								return button.link.suit != 'club';
							})
							.set('ai', (button) => {
								return get.value(button.link);
							})
							.forResult();

						if (links) {
							player.gain(links, 'gain2', 'log');
							if (!player.getStorage('xjzh_sanguo_moulue').includes(number)) player.markAuto('xjzh_sanguo_moulue', [trigger.card.number]);
						}
					}
				},
			},
			xjzh_sanguo_shijiu: {
				mod: {
					cardname(card, player, name) {
						if (card.name == 'jiu') return 'sha';
					},
				},
				trigger: {
					player: 'useCardBefore',
				},
				filter(event, player) {
					if (event.card.name != 'sha' && get.color(event.card) != 'black') return false;
					return player.isPhaseUsing() && player.hasUseTarget({ name: 'jiu' }, null, false);
				},
				forced: true,
				_priority: 12,
				audio: 'ext:仙家之魂/audio/skill:1',
				async content(event, trigger, player) {
					player.chooseUseTarget({ name: 'jiu' }, true, false, 'nopopup', 'noanimate');
				},
			},
			xjzh_sanguo_shayi: {
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return Infinity;
					},
					targetInRange(card, player, target, now) {
						if (card.name == 'sha') return true;
					},
				},
				trigger: {
					target: 'useCardToTarget',
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					if (!event.cards || !event.cards.length) return false;
					if (event.card.name != 'sha') return false;
					if (!player.countCards('h', 'sha')) return false;
					if (
						!game.hasPlayer(function (current) {
							return current.hasMark('xjzh_sanguo_zhenhun');
						})
					)
						return false;
					return true;
				},
				async cost(event, trigger, player) {
					event.result = await player
						.chooseToDiscard(1, '〖杀意〗:弃置一张【杀】将此牌目标改为任意武将牌上有<魂>的角色', (card) => {
							return card.name == 'sha';
						})
						.set('ai', () => {
							let num = game.countPlayer(function (current) {
								return current.hasMark('xjzh_sanguo_zhenhun');
							});
							return num;
						})
						.forResult();
				},
				async content(event, trigger, player) {
					if (!event.cards || !event.cards.length) return;
					let num = game.countPlayer((current) => {
						return current.hasMark('xjzh_sanguo_zhenhun');
					});
					const { targets } = await player
						.chooseTarget([1, num], true, '〖杀意〗:选择任意名武将牌上有<魂>的角色', (card, player, target) => {
							if (!target.hasMark('xjzh_sanguo_zhenhun')) return false;
							return target != player;
						})
						.set('ai', (target) => {
							return -get.attitude(player, target);
						})
						.forResult();

					if (targets) {
						await trigger.targets.remove(player);
						await trigger.targets.addArray(targets);
						game.countPlayer((current) => {
							if (targets.includes(current)) current.removeMark('xjzh_sanguo_zhenhun', 1);
						});
						if (trigger.targets.length) {
							game.log(player, '将', trigger.cards[0], '的目标改为了', trigger.targets);
						}
					}
				},
			},
			xjzh_sanguo_zhenhun: {
				trigger: {
					global: 'damageAfter',
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				_priority: 16,
				forced: true,
				marktext: '魂',
				intro: {
					name: '震魂',
					content: 'mark',
				},
				group: ['xjzh_sanguo_zhenhun_sha', 'xjzh_sanguo_zhenhun_die'],
				filter(event, player) {
					if (event.source && event.source.isDead()) return false;
					if (event.player && event.player.isDead()) return false;
					if (event.source == player) return event.player != player;
					return event.player == player;
				},
				async content(event, trigger, player) {
					let target;
					if (trigger.source == player && trigger.player != player) target = trigger.player;
					else if (!trigger.source) return;
					else if (trigger.source != player && trigger.player == player) target = trigger.source;
					await target.addMark('xjzh_sanguo_zhenhun', 1);
					if (target.countMark('xjzh_sanguo_zhenhun') >= 3) {
						const { bool } = await player
							.chooseBool(`〖震魂〗:是否令${get.translation(target)}失去${target.countMark('xjzh_sanguo_zhenhun')}点体力？`)
							.set('ai', () => {
								return -get.attitude(player, target);
							})
							.set('target', target)
							.forResult();

						if (bool) {
							await target.loseHp(target.countMark('xjzh_sanguo_zhenhun'));
							await target.clearMark('xjzh_sanguo_zhenhun');
						}
					}
				},
				subSkill: {
					sha: {
						trigger: {
							player: 'shaBegin',
						},
						forced: true,
						_priority: 12,
						firstDo: true,
						filter(event, player) {
							return event.target.hasMark('xjzh_sanguo_zhenhun');
						},
						content() {
							trigger.target.addTempSkill('baiban', 'shaAfter');
							player.draw(trigger.target.countMark('xjzh_sanguo_zhenhun'));
						},
					},
					die: {
						trigger: {
							global: 'dieAfter',
						},
						forceDie: true,
						forced: true,
						_priority: -10,
						lastDo: true,
						filter(event, player) {
							if (event.player != player) return event.player.hasMark('xjzh_sanguo_zhenhun');
							return game.countPlayer(function (current) {
								return current.hasMark('xjzh_sanguo_zhenhun');
							});
						},
						content() {
							if (trigger.player != player) {
								trigger.player.clearMark('xjzh_sanguo_zhenhun', false);
							} else {
								var players = game.filterPlayer(function (current) {
									return current.hasMark('xjzh_sanguo_zhenhun');
								});
								for (var i of players) {
									i.clearMark('xjzh_sanguo_zhenhun', false);
								}
							}
						},
					},
				},
			},
			xjzh_sanguo_bujiao: {
				trigger: {
					global: 'phaseUseBegin',
				},
				forced: true,
				_priority: 3,
				marktext: '教',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				group: ['xjzh_sanguo_bujiao2'],
				filter(event, player) {
					return event.player != player && event.player.countCards('h');
				},
				content() {
					'step 0';
					player.chooseCard('he', 1, '〖布教〗:是否交给' + get.translation(trigger.player) + '一张牌').set('ai', function (card) {
						if (get.attitude(trigger.player, player) > 0) {
							return 8 - get.value(card);
						} else {
							return 4 - get.value(card);
						}
					});
					('step 1');
					if (result.cards?.length) {
						trigger.player.gain(result.cards[0], 'draw', player);
						player.addToExpansion(get.cards()[0], 'gain2', trigger.player).gaintag.add('xjzh_sanguo_bujiao');
					}
				},
			},
			xjzh_sanguo_bujiao2: {
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					return player.getExpansions('xjzh_sanguo_bujiao').length;
				},
				enable: 'phaseUse',
				chooseButton: {
					dialog(event, player) {
						return ui.create.dialog('〖布教〗:选择一张牌使用同类型的一张牌', player.getExpansions('xjzh_sanguo_bujiao'), 'hidden');
					},
					check(button) {
						var player = _status.event.player;
						var type = get.type(button.link, 'trick');
						var recover = 0,
							lose = 1;
						for (var i of game.players) {
							if (!i.isOut()) {
								if (i.hp < i.maxHp) {
									if (get.attitude(player, i) > 0) {
										if (i.hp < 2) {
											lose--;
											recover += 0.5;
										}
										lose--;
										recover++;
									} else if (get.attitude(player, i) < 0) {
										if (i.hp < 2) {
											lose++;
											recover -= 0.5;
										}
										lose++;
										recover--;
									}
								} else {
									if (get.attitude(player, i) > 0) {
										lose--;
									} else if (get.attitude(player, i) < 0) {
										lose++;
									}
								}
							}
						}
						var equipTarget = false;
						var shaTarget = false;
						var shunTarget = false;
						var chaiTarget = false;
						for (var i of game.players) {
							if (get.attitude(player, i) > 0) {
								if (player != i && !i.getEquips(get.subtype(button.link))[0] && get.attitude(player, i) > 0) {
									equipTarget = true;
								}
							}
							if (player.canUse('shunshou', i) && get.effect(i, { name: 'shunshou' }, player)) {
								shunTarget = true;
							}
							if (player.canUse('guohe', i) && get.effect(i, { name: 'guohe' }, player) >= 0) {
								chaiTarget = true;
							}
							if (player.canUse('sha', i) && get.effect(i, { name: 'sha' }, player) > 0) {
								shaTarget = true;
							}
						}
						if (player.isDamaged()) return type == 'basic' ? 2 : -1;
						if (shaTarget && player.countCards('h', 'sha') && !player.countCards('h', 'jiu')) return type == 'basic' ? 1 : -1;
						if (lose > recover && lose > 0) return type == 'trick' ? 1 : -1;
						if (lose < recover && recover > 0) return type == 'trick' ? 1 : -1;
						if (equipTarget) return type == 'equip' ? 1 : -1;
						if (shunTarget || chaiTarget) return type == 'trick' ? 1 : -1;
						if (shaTarget && !player.countCards('h', 'sha')) return type == 'basic' ? 1 : -1;
						return 0;
					},
					backup(links, player) {
						if (get.type(links[0]) == 'trick') {
							return {
								cards: links,
								chooseButton: {
									dialog() {
										var list = [];
										for (var i of lib.inpile) {
											if (!lib.translate[i + '_info']) continue;
											if (i == 'wuxie' || i == 'xjzh_card_lianqidan') continue;
											if (lib.card[i].type == 'trick') list.push(['非延时锦囊', '', i]);
										}
										return ui.create.dialog('〖布教〗:请选择想要使用的非延时锦囊牌', [list, 'vcard']);
									},
									filter(button, player) {
										return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
									},
									check(button) {
										var player = _status.event.player;
										var recover = 0,
											lose = 1;
										for (var i of game.players) {
											if (!i.isOut()) {
												if (i.hp < i.maxHp) {
													if (get.attitude(player, i) > 0) {
														if (i.hp < 2) {
															lose--;
															recover += 0.5;
														}
														lose--;
														recover++;
													} else if (get.attitude(player, i) < 0) {
														if (i.hp < 2) {
															lose++;
															recover -= 0.5;
														}
														lose++;
														recover--;
													}
												} else {
													if (get.attitude(player, i) > 0) {
														lose--;
													} else if (get.attitude(player, i) < 0) {
														lose++;
													}
												}
											}
										}
										var shunTarget = false;
										var chaiTarget = false;
										for (var i of game.players) {
											if (player.canUse('shunshou', i) && get.effect(i, { name: 'shunshou' }, player)) {
												shunTarget = true;
											}
											if (player.canUse('guohe', i) && get.effect(i, { name: 'guohe' }, player) >= 0) {
												chaiTarget = true;
											}
										}
										if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
										if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
										if (shunTarget) return button.link[2] == 'shunshou' ? 1 : -1;
										if (chaiTarget) return button.link[2] == 'guohe' ? 1 : -1;
										return button.link[2] == 'wuzhong' ? 1 : -1;
									},
									backup(links, player) {
										return {
											filterCard() {
												return false;
											},
											selectCard: -1,
											popname: true,
											viewAs: { name: links[0][2] },
											onuse(result, player) {
												result.cards = lib.skill.xjzh_sanguo_bujiao2_backup.cards;
												var card = result.cards[0];
											},
										};
									},
									prompt(links, player) {
										return '将一张牌当' + get.translation(links[0][2]) + '使用';
									},
								},
							};
						} else if (get.type(links[0], 'trick') == 'basic') {
							return {
								cards: links,
								chooseButton: {
									dialog() {
										var list = [];
										for (var i of lib.inpile) {
											if (!lib.translate[i + '_info']) continue;
											if (i == 'shan') continue;
											if (i == 'sha') {
												for (var j of lib.inpile_nature) {
													list.push(['basic', '', i, j]);
												}
											}
											if (lib.card[i].type == 'basic') list.push(['basic', '', i]);
										}
										return ui.create.dialog('〖布教〗:请选择想要使用的基本牌', [list, 'vcard']);
									},
									filter(button, player) {
										return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
									},
									check(button) {
										var player = _status.event.player;
										var shaTarget = false;
										for (var i of game.players) {
											if (player.canUse('sha', i) && get.effect(i, { name: 'sha' }, player) > 0) {
												shaTarget = true;
											}
										}
										if (player.isDamaged()) return button.link[2] == 'tao' ? 1 : -1;
										if (shaTarget && player.countCards('h', 'sha') && !player.countCards('h', 'jiu')) return button.link[2] == 'jiu' ? 1 : -1;
										if (shaTarget && !player.countCards('h', 'sha')) return button.link[2] == 'sha' ? 1 : -1;
										return button.link[2] == 'sha' ? 1 : -1;
									},
									backup(links, player) {
										return {
											filterCard() {
												return false;
											},
											selectCard: -1,
											audio: 'ext:仙家之魂/audio/skill:1',
											popname: true,
											viewAs: { name: links[0][2] },
											onuse(result, player) {
												result.cards = lib.skill.xjzh_sanguo_bujiao2_backup.cards;
												var card = result.cards[0];
											},
										};
									},
									prompt(links, player) {
										return '〖布教〗:将一张牌当【' + get.translation(links[0][2]) + '】使用';
									},
								},
							};
						} else if (get.type(links[0]) == 'equip') {
							return {
								cards: links,
								chooseButton: {
									dialog() {
										var list = [];
										for (var i of lib.inpile) {
											if (!lib.translate[i + '_info']) continue;
											var typex = get.subtype(links[0]);
											if (lib.card[i].subtype == typex) list.push(['装备', '', i]);
										}
										return ui.create.dialog('〖布教〗:请选择想要使用的装备', [list, 'vcard']);
									},
									filter(button, player) {
										return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
									},
									check(button) {
										var player = _status.event.player;
										var num = [1, 2, 3, 4, 5];
										for (var i of num) {
											if (player.getEquip(i)) return 0;
										}
										return 1;
									},
									backup(links, player) {
										return {
											filterCard() {
												return false;
											},
											selectCard: -1,
											popname: true,
											viewAs: { name: links[0][2] },
											onuse(result, player) {
												result.cards = lib.skill.xjzh_sanguo_bujiao2_backup.cards;
												var card = result.cards[0];
											},
										};
									},
									prompt(links, player) {
										return '将一张牌当' + get.translation(links[0][2]) + '使用';
									},
								},
							};
						} else if (get.type(links[0]) == 'delay') {
							return {
								cards: links,
								chooseButton: {
									dialog() {
										var list = [];
										for (var i of lib.inpile) {
											if (!lib.translate[i + '_info']) continue;
											if (lib.card[i].type == 'delay') list.push(['延时锦囊', '', i]);
										}
										return ui.create.dialog('〖布教〗:请选择想要使用的延时锦囊牌', [list, 'vcard']);
									},
									filter(button, player) {
										return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
									},
									check(button) {
										var player = _status.event.player;
										for (var i of game.players) {
											if (get.attitude(player, i) < 0) return 1;
										}
										return -1;
									},
									backup(links, player) {
										return {
											filterCard() {
												return false;
											},
											selectCard: -1,
											filterTarget(card, player, target) {
												return lib.filter.judge({ name: links[0][2] }, player, target) && player != target;
											},
											selectTarget: 1,
											popname: true,
											viewAs: { name: links[0][2] },
											onuse(result, player) {
												result.cards = lib.skill.xjzh_sanguo_bujiao2_backup.cards;
												var card = result.cards[0];
											},
										};
									},
									prompt(links, player) {
										return '将一张牌当' + get.translation(links[0][2]) + '使用';
									},
								},
							};
						}
					},
				},
				ai: {
					order: 6,
					result: {
						player(player) {
							if (player.hp <= 2) return 3;
							return player.getExpansions('xjzh_sanguo_bujiao').length - 1;
						},
					},
				},
			},
			xjzh_sanguo_fangshu: {
				trigger: {
					player: 'phaseUseBegin',
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				content() {
					'step 0';
					event.num = Math.max(
						2,
						game.countPlayer(function (current) {
							return current.group == player.group;
						})
					);
					event.cards = get.cards(event.num);
					player.showCards(event.cards);
					('step 1');
					event.num1 = [];
					event.num2 = [];
					if (Array.isArray(event.cards))
						for (var i of event.cards) {
							if (get.color(i) == 'black') {
								event.num1.push(i);
							}
							if (get.color(i) == 'red') {
								event.num2.push(i);
							}
						}
					('step 2');
					if (event.num1.length >= event.num2.length) {
						player.gain(event.num1, 'gain2', player);
						player
							.chooseTarget('〖方术〗:请选择' + get.translation(event.num1.length) + '个目标令其受到一点雷电伤害或选择1个目标令其受到' + get.translation(event.num1.length) + '点雷电伤害(至多为' + get.translation(event.num1.length) + ')', [1, event.num1.length], function (card, player, target) {
								return target != player;
							})
							.set('ai', function (target) {
								return get.damageEffect(target, player, player, 'thunder');
							});
					} else {
						var num = Math.max(1, event.num1.length);
						player.chooseCardButton(event.cards, num, '请选择' + get.cnNumber(num) + '张牌将其置于武将牌上').set('ai', function (button) {
							return Math.random();
						});
						event.goto(4);
					}
					('step 3');
					if (result.bool) {
						var targets = result.targets;
						if (targets.length == 1) {
							var num = Math.min(event.num1.length, 2);
							targets[0].damage('thunder', num, 'nocard', 'nosource');
							event.finish();
							return;
						}
						for (var i = 0; i < targets.length; i++) {
							targets[i].damage('thunder', 1, 'nocard', 'nosource');
						}
						event.finish();
						return;
					} else {
						event.finish();
						return;
					}
					('step 4');
					if (result.bool) {
						for (var i of result.links) {
							player.addToExpansion(i, 'gain2', player).gaintag.add('xjzh_sanguo_bujiao');
						}
					}
				},
				ai: {
					order: 12,
					expose: 0.8,
					result: {
						player: 1,
					},
				},
			},
			xjzh_sanguo_taiping: {
				audio: 'ext:仙家之魂/audio/skill:2',
				trigger: {
					player: 'damageEnd',
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					if (event.numFixed) return false;
					if (!event.source || event.nosource) return false;
					return true;
				},
				_priority: 13,
				forced: true,
				prompt(event, player) {
					return '〖太平〗:你受到' + get.translation(event.source) + '的伤害,是否判定？';
				},
				content() {
					'step 0';
					trigger.source.judge(function (card) {
						if (get.color(card) == 'red') return -2;
						if (get.color(card) == 'black') return -3;
					}).judge2 = function (result) {
						return result.bool == false ? true : false;
					};
					('step 1');
					if (result.color == 'black') {
						player.addToExpansion(result.card, 'gain2', player).gaintag.add('xjzh_sanguo_bujiao');
						player.draw();
						event.finish();
					} else if (result.color == 'red') {
						player.recover();
					}
					('step 2');
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
				},
				ai: {
					effect: {
						target: 1,
					},
				},
			},
			xjzh_sanguo_shanxi: {
				mod: {
					targetEnabled(card) {
						if (card.name == 'shandian') return false;
					},
					ignoredHandcard(card, player) {
						if (card.name == 'shan') return true;
					},
				},
				trigger: {
					global: ['useCard', 'respond'],
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				check(event, player) {
					return get.damageEffect(event.player, player, player, 'thunder');
				},
				filter(event, player) {
					if (event.card.name == 'shan' && event.player != player) return true;
					return false;
				},
				prompt(event, player) {
					return '〖雷祭〗:令' + get.translation(event.player) + '进行一次【闪电】判定.';
				},
				async content(event, trigger, player) {
					trigger.player
						.executeDelayCardEffect('shandian')
						.set('judge', (card) => {
							if (get.color(card) == 'black' && card.number > 1 && card.number < 10) return -5;
							return 1;
						})
						.set('judge2', (result) => {
							if (result.bool == false) return true;
							return false;
						});
				},
				ai: {
					threaten: 0.8,
					effect: {
						target(card, player, target) {
							if (card.name == 'shandian') return [0, 0];
						},
					},
				},
			},
			xjzh_sanguo_leijix: {
				trigger: {
					player: ['damageAfter', 'useCard', 'respond'],
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player, name) {
					if (name == 'damageAfter') return true;
					return event.card && event.card.name == 'shan';
				},
				async content(event, trigger, player) {
					const [card, color] = await player.judge().forResult('card', 'color');
					const { targets } = await player
						.chooseTarget(`〖雷祭〗:选择一个目标令其${color == 'red' ? '横置/取消横置' : '受到一点雷属性伤害'}`)
						.set('ai', (target) => {
							let player = get.player();
							let att = get.attitude(player, target);
							let num = lib.card.tiesuo.ai.result.target(player, target);
							if (color == 'red') {
								if (att < 0) {
									return -num;
								} else {
									if (target.isLinked()) return num;
									return 0.2;
								}
							}
							return get.damageEffect(target, player, player, 'thunder');
						})
						.forResult();

					if (targets) {
						switch (color) {
							case 'red':
								{
									targets[0].link();
								}
								break;
							case 'black':
								{
									targets[0].damage(player, 1, 'nocard', 'thunder');
								}
								break;
						}
					}
					player.gain(card, player, 'gain2', 'log');
				},
				ai: {
					expose: 0.3,
				},
			},
			xjzh_sanguo_shendao: {
				trigger: { global: 'judge' },
				preHidden: true,
				lastDo: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				async cost(event, trigger, player) {
					const { bool, links } = await player
						.chooseCardButton(get.cards(Math.max(4, player.hp)), `〖神道〗:${get.translation(trigger.player)}的${trigger.judgestr || ''}判定为${get.translation(trigger.player.judging[0])},请选择一张牌作为判定结果`)
						.set('filterButton', (button) => {
							const player = _status.event.player;
							const mod2 = game.checkMod(button.link, player, 'unchanged', 'cardEnabled2', player);
							if (mod2 != 'unchanged') return mod2;
							const mod = game.checkMod(button.link, player, 'unchanged', 'cardRespondable', player);
							if (mod != 'unchanged') return mod;
							return true;
						})
						.set('ai', (button) => {
							const trigger = _status.event.getTrigger();
							const player = _status.event.player;
							const judging = _status.event.judging;
							const result = trigger.judge(button.link) - trigger.judge(judging);
							const attitude = get.attitude(player, trigger.player);
							let val = get.value(button.link);
							if (get.subtype(button.link) == 'equip2') val /= 2;
							else val /= 4;
							if (attitude == 0 || result == 0) return 0;
							if (attitude > 0) {
								return result - val;
							}
							return -result - val;
						})
						.set('judging', trigger.player.judging[0])
						.setHiddenSkill('xjzh_sanguo_shendao')
						.forResult();
					if (bool) event.result = { bool, cost_data: { links } };
				},
				popup: false,
				async content(event, trigger, player) {
					const chooseCardResultCards = event.cost_data.links;
					await player.respond(chooseCardResultCards, 'xjzh_sanguo_shendao', 'highlight', 'noOrdering');
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
					trigger.player.judging[0] = chooseCardResultCards[0];
					trigger.orderingCards.addArray(chooseCardResultCards);
					game.log(trigger.player, '的判定牌改为', chooseCardResultCards[0]);
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1,
					},
				},
			},
			xjzh_sanguo_leihun: {
				forced: true,
				group: ['xjzh_sanguo_leihun1', 'xjzh_sanguo_leihun2'],
				trigger: {
					global: 'damageBegin2',
				},
				_priority: -8,
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return event.player != player && game.hasNature(event, 'thunder');
				},
				content() {
					trigger.source = player;
				},
			},
			xjzh_sanguo_leihun1: {
				trigger: {
					source: 'damageBegin1',
				},
				forced: true,
				popup: false,
				audio: 'xjzh_sanguo_leihun',
				content() {
					game.setNature(trigger, 'thunder', true);
				},
				ai: {
					threaten: 9,
				},
			},
			xjzh_sanguo_leihun2: {
				trigger: { player: 'damageBegin4' },
				forced: true,
				popup: false,
				audio: 'xjzh_sanguo_leihun',
				filter(event, player) {
					return game.hasNature(event, 'thunder');
				},
				content() {
					trigger.cancel();
					player.recover(trigger.num);
				},
				ai: {
					threaten: 9,
					nothunder: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'thunderDamage')) {
								if (target.isHealthy()) return 'zerotarget';
								if (target.hp == 1) return [0, 2];
								return [0, 1];
							}
						},
					},
				},
			},
			xjzh_sanguo_dianjie: {
				enable: 'phaseUse',
				forceDie: true,
				filterTarget(card, player, target) {
					return target != player;
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return player.countMark('xjzh_sanguo_dianjie2') >= 6;
				},
				group: ['xjzh_sanguo_dianjie2'],
				check() {
					return -1;
				},
				selectTarget: [1, 3],
				multitarget: true,
				multiline: true,
				targetprompt: ['目标一', '目标二', '目标三'],
				content() {
					'step 0';
					player.removeMark('xjzh_sanguo_dianjie2', 6);
					targets.sortBySeat();
					('step 1');
					if (targets.length == 3) {
						for (var i = 0; i < targets.length; i++) {
							targets[i].damage('nocard', 'thunder');
						}
						event.finish();
					} else if (targets.length == 2) {
						player
							.chooseTarget('请选择受到2点伤害的角色', true, function (card, player, target) {
								return _status.event.targets.includes(target);
							})
							.set('ai', function (target) {
								var player = _status.event.player;
								return get.damageEffect(target, player, player, 'thunder');
							})
							.set('forceDie', true)
							.set('targets', targets);
						event.goto(3);
					} else if (targets.length == 1) {
						player
							.chooseControl('1点', '2点', '3点')
							.set('prompt', '请选择伤害点数')
							.set('ai', function () {
								return '3点';
							})
							.set('forceDie', true);
					}
					('step 2');
					var xnum = 0;
					if (result.control == '1点') xnum = 1;
					if (result.control == '2点') xnum = 2;
					if (result.control == '3点') xnum = 3;
					targets[0].damage(xnum, 'nocard', 'thunder');
					event.finish();
					('step 3');
					if (result.targets?.length) {
						result.targets[0].damage(2, 'nocard', 'thunder');
						for (var i = 0; i < targets.length; i++) {
							if (result.targets[0] != targets[i]) {
								targets[i].damage('nocard', 'thunder');
							}
						}
					}
				},
				ai: {
					order: 12,
					damage: true,
					thunderAttack: true,
					result: {
						target(player, target) {
							if (target.hasSkillTag('nodamage')) return 0;
							if (player.hasUnknown()) return 0;
							return get.damageEffect(target, player, player, 'thunder');
						},
					},
				},
			},
			xjzh_sanguo_dianjie2: {
				trigger: {
					player: 'damageAfter',
					source: 'damageAfter',
				},
				forced: true,
				popup: false,
				marktext: '电',
				mark: true,
				audio: 'xjzh_sanguo_dianjie',
				intro: {
					name: '电界',
					content: '当前拥有#个标记,6个标记可发动技能电界',
				},
				filter(event, player) {
					if (event.getParent('xjzh_sanguo_dianjie').name == 'xjzh_sanguo_dianjie') return false;
					return game.hasNature(event, 'thunder');
				},
				content() {
					player.addMark('xjzh_sanguo_dianjie2', trigger.num);
					player.update();
				},
			},
			xjzh_sanguo_huangtian: {
				trigger: {
					player: 'enterGame',
					global: 'gameStart',
				},
				forced: true,
				popup: false,
				zhuSkill: true,
				audio: 'ext:仙家之魂/audio/skill:3',
				filter(event, player) {
					if (player.hasZhuSkill('xjzh_sanguo_huangtian')) return true;
					return false;
				},
				content() {
					player.addAdditionalSkill('xjzh_sanguo_huangtian', ['xinleiji', 'xjzh_sanguo_yishi']);
				},
			},
			xjzh_sanguo_yishi: {
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				forced: true,
				_priority: 66,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return event.player != player;
				},
				async content(event, trigger, player) {
					let cards = get.cards(2);
					const { links } = await player
						.chooseCardButton('选择一张牌获得之', cards)
						.set('ai', (button) => {
							return get.value(button.link);
						})
						.forResult();

					if (links) {
						player.gain(links[0], 'gain2');
						trigger.player.gain(
							cards.filter((card) => !links.includes(card)),
							'gain2'
						);
					}
				},
			},
			xjzh_sanguo_shenji: {
				mod: {
					selectTarget(card, player, range) {
						if (Array.isArray(range) && range[1] == -1) return;
						if (player.getEquip(1)) return;
						if (game.players.length < 3) return;
						if (card.name == 'sha') range[1] += 2;
					},
					aiValue(player, card, num) {
						if (game.players.length <= 3 && card.name == 'fangtian') return player.maxHp + 3.5;
					},
				},
				trigger: {
					player: 'useCard',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!player.getEquips(1)) return false;
					return event.card && event.card.name == 'sha';
				},
				forced: true,
				_priority: 99,
				async content(event, trigger, player) {
					await player.addTempSkill('wushuang', 'useCardAfter');
					if (player.getEquips('fangtian').length) {
						if (!trigger.baseDamage) trigger.baseDamage = 1;
						trigger.baseDamage += 1;
						game.log(player, '令【', trigger.card, '】伤害加1.');
					}
				},
			},
			xjzh_sanguo_shenwei: {
				trigger: {
					player: ['changeHp', 'loseMaxHpEnd', 'gainMaxHpEnd'],
				},
				forced: true,
				derivation: ['xjzh_sanguo_guiqu', 'xjzh_sanguo_xiuluo'],
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					if (trigger.name == 'changeHp' && player.getHp(true) > 2) {
						player.draw(2);
						return;
					}
					if (player.maxHp != 2) {
						player.maxHp = 2;
						player.recoverTo(player.maxHp);
						player.update();
					}
					await player.changeSkills(get.info(event.name).derivation, ['xjzh_sanguo_shenwei']);
					player.phase('xjzh_sanguo_shenwei');
					let node, node2;
					if (player.name2 && player.name2 == 'xjzh_sanguo_splvbu') node = player.node.avatar2;
					else node = player.node.avatar;
					game.broadcastAll((node) => {
						node.setBackgroundImage('extension/仙家之魂/skin/yuanhua/xjzh_sanguo_splvbu1.jpg');
					}, node);
					ui.clear();
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
					player.phase('nodelay');
				},
				ai: {
					maixue: true,
					maixue_hp: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage') || get.tag(card, 'loseHp')) return [1, 0.7];
						},
					},
				},
			},
			xjzh_sanguo_guiqu: {
				trigger: {
					player: ['changeHp', 'loseMaxHpBefore', 'gainMaxHpBefore'],
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				bannedList: ['mashu', 'xjzh_sanguo_shenji', 'xjzh_sanguo_xiuluo', 'xjzh_sanguo_guiqu'],
				async content(event, trigger, player) {
					let name = trigger.name;
					if (['loseMaxHp', 'gainMaxHp'].includes(name)) {
						trigger.cancel(null, null, 'notrigger');
						return;
					}
					if (player.isDamaged()) {
						let skills = player.getSkills(null, false, false).filter((skill) => {
							let info = get.info(skill);
							if (!get.skillInfoTranslation(skill, player)) return false;
							if (lib.skill[event.name].bannedList.includes(skill)) return false;
							return !info.equipSkill && !info.cardSkill && !info.xjzh_qishuSkill;
						});
						let dialog = ui.create.dialog('〖鬼躯〗:请选择一个技能移除之并回复一点体力', 'hidden');
						let table = document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin = '0';
						table.style.width = '100%';
						table.style.position = 'relative';
						for (let skill of skills) {
							let td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.innerHTML = '<span>' + lib.translate[skill] + '</span>';
							td.link = skill;
							td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
							table.appendChild(td);
							dialog.buttons.add(td);
						}
						dialog.content.appendChild(table);
						dialog.add('　');
						const { links } = await player
							.chooseButton(dialog)
							.set('ai', () => Math.random())
							.forResult();

						if (links) {
							player.removeSkills(links[0]);
							player.recover();
							player.draw();
						}
					} else {
						if (player.hasUseTarget({ name: 'sha' })) player.chooseUseTarget({ name: 'sha' }).set('addCount', false);
					}
				},
			},
			xjzh_sanguo_xiuluo: {
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				init(player, skill) {
					player.storage[skill] = [];
					lib.skill[skill].getSkillList(player);
				},
				getSkillList(player) {
					let list = game.xjzh_wujiangpai(),
						skills = [];
					list.forEach((name) => {
						let characters = lib.character[name];
						if (characters.skills && characters.skills.length) {
							for (let skill of characters.skills) {
								if (lib.translate[skill] && lib.translate[skill + '_info']) {
									let info = get.info(skill);
									if (info && (info.gainable || !info.unique) && !info.zhuSkill && !info.juexingji && !info.limited && !info.dutySkill) {
										if (!lib.skill.global.includes(skill) && info.shaRelated) skills.add(skill);
									}
								}
							}
						}
					});
					player.storage.xjzh_sanguo_xiuluo.addArray(skills);
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && player.storage.xjzh_sanguo_xiuluo.length;
				},
				async content(event, trigger, player) {
					let skills = player.storage.xjzh_sanguo_xiuluo
						.slice(0)
						.filter((skill) => !player.hasSkill(skill))
						.randomGet();
					await player.addSkills(skills);
				},
				ai: {
					maixie: true,
				},
			},
			xjzh_sanguo_luoshen: {
				trigger: {
					player: 'useCard',
				},
				_priority: 72,
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					var evt = player.getLastUsed(1);
					if (!evt || !evt.card) return false;
					if (!event.isPhaseUsing(player)) return false;
					var evt2 = evt.getParent('phaseUse');
					if (!evt2 || evt2.name != 'phaseUse' || evt2.player != player) return false;
					return true;
				},
				group: ['xjzh_sanguo_luoshen1', 'xjzh_sanguo_luoshen2'],
				content() {
					'step 0';
					var bool = false;
					var evt = player.getLastUsed(1);
					var suita = evt.card.suit;
					var suitb = trigger.card.suit;
					if (suita && suita != suitb) {
						bool = true;
					}
					if (bool) {
						player.draw();
					} else {
						event.finish();
					}
				},
				ai: {
					threaten: 2,
					guanxing: true,
				},
			},
			xjzh_sanguo_luoshen1: {
				trigger: {
					global: 'judgeAfter',
				},
				_priority: 100,
				audio: 'ext:仙家之魂/audio/skill:2',
				frequent(event, card) {
					if (get.color(event.result.card) == 'red') return true;
					return false;
				},
				content() {
					'step 0';
					if (get.color(trigger.result.card) == 'red') {
						player.draw();
						event.finish();
					} else if (get.color(trigger.result.card) == 'black') {
						player
							.chooseTarget('选择一个目标弃置其一张牌', function (card, player, target) {
								return target != player && target.countCards('hej');
							})
							.set('ai', function (target) {
								if (target.countCards('j')) return get.attitude(player, target);
								if (target.countCards('he')) return -get.attitude(player, target);
							});
					}
					('step 1');
					if (result.bool) {
						game.playXH(['xjzh_sanguo_luoshen_11', 'xjzh_sanguo_luoshen_12'].randomGet());
						player.discardPlayerCard(result.targets[0], 'hej', '是否弃置其一张牌？');
					}
				},
			},
			xjzh_sanguo_luoshen2: {
				trigger: {
					player: ['drawBegin'],
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				forced: true,
				popup: false,
				content() {
					trigger.bottom = true;
				},
			},
			xjzh_sanguo_qixian: {
				inherit: 'qixian',
			},
			xjzh_sanguo_qingguo: {
				trigger: {
					player: ['chooseToRespondBegin', 'chooseToUseBegin'],
				},
				group: ['xjzh_sanguo_qingguo1'],
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (event.responded) return false;
					if (event.bagua_skill) return false;
					if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
					if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
					if (player.countCards('h', { name: 'shan' })) return false;
					return true;
				},
				check(event, player) {
					if (event && (event.ai || event.ai1)) {
						var ai = event.ai || event.ai1;
						var tmp = _status.event;
						_status.event = event;
						var result = ai({ name: 'shan' }, _status.event.player, event);
						_status.event = tmp;
						return result > 0;
					}
					return true;
				},
				content() {
					'step 0';
					trigger.xjzh_sanguo_qingguo = true;
					player.judge('xjzh_sanguo_qingguo', function (card) {
						return get.color(card) == 'black' ? 1.5 : -0.5;
					});
					('step 1');
					if (result.judge > 0) {
						trigger.untrigger();
						trigger.set('responded', true);
						trigger.result = { bool: true, card: { name: 'shan' } };
						event.finish();
					} else if (player.countCards('he') >= 2) {
						player.chooseToDiscard('he', 2, '弃置两张牌视为使用一张闪').set('ai', function (card) {
							if (player.countCards('he') <= 2) return 0.5;
							if (player.countCards('h', { name: 'shan' })) return 0;
							if (trigger.baseDamage == 1) return 1.5;
							return 4 - get.value(card);
						});
					}
					('step 2');
					if (result.bool) {
						trigger.untrigger();
						trigger.set('responded', true);
						trigger.result = { bool: true, card: { name: 'shan' } };
					}
				},
				ai: {
					respondShan: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'respondShan')) return 0.5;
						},
					},
				},
			},
			xjzh_sanguo_qingguo1: {
				trigger: {
					global: 'dying',
				},
				prompt(event, player) {
					return '〖倾国〗:是否进行一次判定,若为♥️️则' + get.translation(event.player) + '视为使用一张桃';
				},
				audio: 'xjzh_sanguo_qingguo',
				filter(event, player) {
					if (event.player.countCards('h', { name: 'tao' }) > 0) return false;
					return true;
				},
				check(event, player) {
					if (event.player.hasSkill('duanchang') && game.players.length >= 3 && event.source == player) return true;
					if (get.attitude(player, event.player) > 0) return true;
					return false;
				},
				content() {
					'step 0';
					trigger.player.judge('xjzh_sanguo_qingguo', function (card) {
						return get.color(card) == 'red' ? 1.5 : -0.5;
					});
					('step 1');
					if (result.suit == 'heart') {
						trigger.player.useCard({ name: 'tao' }, trigger.player);
					} else if (result.suit == 'diamond') {
						if (player.countCards('h', { suit: 'heart' }) <= 0) return;
						player.chooseToDiscard('是否弃置一张♥️️手牌令' + get.translation(trigger.player) + '视为使用一张桃', function (card) {
							return card.suit == 'heart';
						}).ai = function (card) {
							if (get.attitude(player, trigger.player) > 0) return 4 - get.value(card);
							return -1;
						};
					}
					('step 2');
					if (result.bool) {
						trigger.player.useCard({ name: 'tao' }, trigger.player);
					}
				},
				ai: {
					save: true,
					expose: 0.8,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'recover')) return 0.25;
						},
					},
				},
			},
			xjzh_sanguo_mingzheng: {
				trigger: {
					global: 'phaseDrawBegin',
					player: 'damageEnd',
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					if (event.name == 'damage') return true;
					return event.player.group == 'wu';
				},
				derivation: 'xjzh_sanguo_baozheng',
				content() {
					'step 0';
					if (trigger.name == 'damage') {
						game.playXH('xjzh_sanguo_baozheng_damage');
						player.removeSkill('xjzh_sanguo_mingzheng');
						player.addSkill('xjzh_sanguo_baozheng');
						event.finish();
						return;
					}
					if (trigger.player != player) {
						if (player.hasZhuSkill('xjzh_sanguo_renjun')) {
							trigger.num += 2;
						} else {
							trigger.num++;
						}
					} else {
						var num = game.countPlayer(function (current) {
							return current.group == 'wu';
						});
						if (num > 0) player.draw(num);
					}
				},
			},
			xjzh_sanguo_baozheng: {
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:4',
				filter(event, player) {
					return event.player != player;
				},
				marktext: '暴',
				intro: {
					name: '暴政',
					content: 'mark',
				},
				group: ['xjzh_sanguo_baozheng2'],
				content() {
					var hs = trigger.player.getCards('he');
					if (hs.length) {
						player.gainPlayerCard('he', true, trigger.player);
						trigger.player.addMark('xjzh_sanguo_baozheng', 1);
					}
				},
			},
			xjzh_sanguo_baozheng2: {
				trigger: {
					source: 'damageBegin',
				},
				forced: true,
				audio: 'xjzh_sanguo_baozheng',
				filter(event, player) {
					return event.player.hasMark('xjzh_sanguo_baozheng');
					return;
				},
				content() {
					'step 0';
					if (player.hasZhuSkill('xjzh_sanguo_renjun')) trigger.num += 2;
					else trigger.num++;
					('step 1');
					var num = trigger.player.countMark('xjzh_sanguo_baozheng');
					player.draw(num);
					trigger.player.clearMark('xjzh_sanguo_baozheng');
				},
			},
			xjzh_sanguo_renjun: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				zhuSkill: true,
				_priority: 3,
				filter(event, player) {
					return player.hasZhuSkill('xjzh_sanguo_renjun');
				},
				content() {
					if (player.hasSkill('xjzh_sanguo_mingzheng')) {
						player.chooseUseTarget({ name: 'wugu' }, true);
						game.playXH('xjzh_sanguo_mingzheng1');
					} else {
						player.chooseUseTarget({ name: 'wanjian' }, true);
						game.playXH('xjzh_sanguo_baozheng3');
					}
				},
			},
			xjzh_sanguo_wusheng: {
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
				},
				forced: true,
				_priority: 9,
				audio: 'ext:仙家之魂/audio/skill:2',
				group: ['xjzh_sanguo_wusheng_sha'],
				marktext: '武',
				intro: {
					content: 'mark',
				},
				mod: {
					targetInRange(card, player, target) {
						let evt = _status.event;
						if (card.name == 'sha' && evt && evt.name == 'chooseToUse' && evt.player == player && evt.skill == 'xjzh_sanguo_wusheng_sha') return true;
					},
					cardUsable(card, player, num) {
						if (card.name == 'sha' && player.getEquips('qinglong').length) return player.getDamagedHp(true) + num;
					},
				},
				filter(event, player) {
					if (event.parent.skill == 'xjzh_sanguo_wusheng_sha') return false;
					if (event.getParent(5).skill == 'xjzh_sanguo_wushen') return false;
					return true;
				},
				getIndex(event, player, triggername) {
					return Math.min(event.num, 9) || 1;
				},
				async content(event, trigger, player) {
					player.addMark('xjzh_sanguo_wusheng', 1);
				},
				subSkill: {
					sha: {
						enable: ['chooseToUse', 'chooseToRespond'],
						audio: 'xjzh_sanguo_wusheng',
						popname: true,
						popup: false,
						filterCard: false,
						selectCard: 0,
						viewAsFilter(player) {
							return player.hasMark('xjzh_sanguo_wusheng');
						},
						viewAs: { name: 'sha', color: 'red' },
						async precontent(event, trigger, player) {
							player.removeMark('xjzh_sanguo_wusheng', 1);
						},
						ai: {
							order: 3,
							useSha: true,
							respondSha: true,
						},
					},
				},
			},
			xjzh_sanguo_hengdao: {
				trigger: {
					player: 'phaseDrawBegin',
				},
				mod: {
					aiValue(player, card, num) {
						if (card.name == 'qinglong') return player.getDamagedHp(true) + 3.5;
					},
				},
				forced: true,
				_priority: 6,
				audio: 'xjzh_sanguo_wushen',
				async content(event, trigger, player) {
					if (player.getEquips('qinglong').length) trigger.num += 2;
					else player.equip(game.createCard('qinglong'), true);
				},
			},
			xjzh_sanguo_wushen: {
				trigger: {
					player: 'dieBegin',
				},
				mod: {
					aiValue(player, card, num) {
						if (card.name == 'qinglong') return player.getDamagedHp(true) + 3.5;
					},
				},
				forced: true,
				limited: true,
				mark: true,
				_priority: 6,
				marktext: '神',
				intro: {
					content: 'limited',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return player.hasMark('xjzh_sanguo_wusheng');
				},
				async content(event, trigger, player) {
					player.awakenSkill(event.name);
					while (player.hasMark('xjzh_sanguo_wusheng')) {
						await player.chooseUseTarget({ name: 'sha', color: 'red' }).set('prompt', `【武神】:选择对一名角色使用一张【杀】？`);
						player.removeMark('xjzh_sanguo_wusheng', 1);
					}
				},
			},
			xjzh_sanguo_mashu: {
				audio: 'ext:仙家之魂/audio/skill:1',
				firstDo: true,
				trigger: {
					player: 'useCard1',
				},
				forced: true,
				filter(event, player) {
					return !event.audioed && event.card.name == 'sha';
				},
				content() {
					trigger.audioed = true;
				},
				mod: {
					globalFrom(from, to, distance) {
						return distance - 1;
					},
					cardUsable(card, player, num) {
						if (player.hp <= 1 && card.name == 'sha') return num + 1;
					},
				},
			},
			xjzh_sanguo_feijiang: {
				enable: 'phaseUse',
				usable: 1,
				group: ['xjzh_sanguo_feijiang_recover'],
				audio: 'ext:仙家之魂/audio/skill:1',
				content() {
					'step 0';
					if (player.hp > 1) {
						player.damage('nosource');
					} else {
						if (player.maxHp > 1) {
							player.loseMaxHp();
						} else {
							event.goto(1);
						}
					}
					player.discard(player.getCards('h'));
					('step 1');
					player.draw();
					('step 2');
					event.card = result.cards[0];
					player.addTempSkill('xjzh_sanguo_feijiang_qipai', 'phaseEnd');
					if (event.card.name != 'sha') {
						player.draw(event.card.number);
					} else {
						player.addTempSkill('xjzh_sanguo_feijiang_zenshang', 'phaseEnd');
						player.addTempSkill('xjzh_sanguo_feijiang_buff', 'phaseEnd');
					}
				},
				ai: {
					expose: 0.5,
					order() {
						var player = _status.event.player;
						if (player.getCardUsable('sha') > 0) {
							if (player.hasCard('sha', 'h')) return 0.5;
							if (!player.hasCard('sha', 'h')) return 1;
						}
						if (!player.getStat().skill.xjzh_sanguo_jiwu) {
							if (player.hasSkill('xjzh_sanguo_qiangxilvbu') && !player.hasSkill('xjzh_sanguo_xuanfenglvbu') && !player.hasSkill('xjzh_sanguo_wanshalvbu') && !player.hasSkill('xjzh_sanguo_tiejilvbu')) return 10;
							if (player.hasSkill('xjzh_sanguo_qiangxilvbu') || !player.hasSkill('xjzh_sanguo_xuanfenglvbu') || !player.hasSkill('xjzh_sanguo_wanshalvbu') || !player.hasSkill('xjzh_sanguo_tiejilvbu')) {
								if (player.countCards('h') > 0) return 0.1;
								if (player.countCards('h') <= 0) return 10;
								return 0.5;
							}
						}
						if (player.hp <= 2) {
							if (player.countCards('h') > 0) return 0.5;
							if (player.countCards('h') <= 0) return 1;
						}
						return 1;
					},
					result: {
						player(player, target, card) {
							if (player.getCardUsable('sha') > 0) {
								if (player.hasCard('sha', 'h')) return 0.5;
								if (!player.hasCard('sha', 'h')) return 1;
							}
							if (!player.getStat().skill.xjzh_sanguo_jiwu) {
								if (player.hasSkill('xjzh_sanguo_qiangxilvbu') && !player.hasSkill('xjzh_sanguo_xuanfenglvbu') && !player.hasSkill('xjzh_sanguo_wanshalvbu') && !player.hasSkill('xjzh_sanguo_tiejilvbu')) return 10;
								if (player.hasSkill('xjzh_sanguo_qiangxilvbu') || !player.hasSkill('xjzh_sanguo_xuanfenglvbu') || !player.hasSkill('xjzh_sanguo_wanshalvbu') || !player.hasSkill('xjzh_sanguo_tiejilvbu')) {
									if (player.countCards('h') > 0) return 0.1;
									if (player.countCards('h') <= 0) return 10;
									return 0.5;
								}
							}
							if (player.hp <= 2) {
								if (player.countCards('h') > 0) return 0.5;
								if (player.countCards('h') <= 0) return 1;
							}
							return 1;
						},
					},
				},
				subSkill: {
					zenshang: {
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						content() {
							trigger.num++;
						},
					},
					qipai: {
						trigger: {
							player: 'phaseDiscardBegin',
						},
						forced: true,
						content() {
							var num = player.countCards('h');
							if (num > 1) player.chooseToDiscard(num - 1, true);
							else if (num < 1) player.draw();
						},
					},
					buff: {
						mod: {
							attackRange(player, range, distance) {
								return Infinity;
							},
						},
					},
					recover: {
						trigger: {
							player: 'phaseAfter',
						},
						forced: true,
						filter(event, player) {
							return player.getStat('damage');
						},
						content() {
							player.recover();
						},
					},
				},
			},
			xjzh_sanguo_qiangxilvbu: {
				audio: 'ext:仙家之魂/audio/skill:2',
				inherit: 'reqiangxi',
				usable: 2,
				filterTarget(card, player, target) {
					if (player == target) return false;
					if (target.hasSkill('reqiangxi_off')) return false;
					return true;
				},
			},
			xjzh_sanguo_tiejilvbu: {
				audio: 'ext:仙家之魂/audio/skill:1',
				inherit: 'retieji',
				_priority: -1,
			},
			xjzh_sanguo_wanshalvbu: {
				audio: 'ext:仙家之魂/audio/skill:2',
				inherit: 'wansha',
			},
			xjzh_sanguo_xuanfenglvbu: {
				audio: 'ext:仙家之魂/audio/skill:2',
				inherit: 'rexuanfeng',
			},
			xjzh_sanguo_jiwu: {
				audio: 'ext:仙家之魂/audio/skill:2',
				enable: 'phaseUse',
				derivation: ['xjzh_sanguo_qiangxilvbu', 'xjzh_sanguo_tiejilvbu', 'xjzh_sanguo_xuanfenglvbu', 'xjzh_sanguo_wanshalvbu'],
				filter(event, player) {
					if (player.countCards('h') == 0) return false;
					if (!player.hasSkill('xjzh_sanguo_qiangxilvbu')) return true;
					if (!player.hasSkill('xjzh_sanguo_tiejilvbu')) return true;
					if (!player.hasSkill('xjzh_sanguo_xuanfenglvbu')) return true;
					if (!player.hasSkill('xjzh_sanguo_wanshalvbu')) return true;
					return false;
				},
				filterCard: true,
				position: 'he',
				check(card) {
					if (get.position(card) == 'e' && _status.event.player.hasSkill('xjzh_sanguo_xuanfenglvbu')) return 16 - get.value(card);
					return 7 - get.value(card);
				},
				content() {
					'step 0';
					var list = [];
					if (!player.hasSkill('xjzh_sanguo_qiangxilvbu')) list.push('xjzh_sanguo_qiangxilvbu');
					if (!player.hasSkill('xjzh_sanguo_tiejilvbu')) list.push('xjzh_sanguo_tiejilvbu');
					if (!player.hasSkill('xjzh_sanguo_xuanfenglvbu')) list.push('xjzh_sanguo_xuanfenglvbu');
					if (!player.hasSkill('xjzh_sanguo_wanshalvbu')) list.push('xjzh_sanguo_wanshalvbu');
					if (list.length == 1) {
						player.addTempSkill(list[0]);
						event.finish();
					} else {
						player
							.chooseControl(list, function () {
								if (list.includes('xjzh_sanguo_xuanfenglvbu') && player.countCards('he', { type: 'equip' })) return 'xjzh_sanguo_xuanfenglvbu';
								if (!player.getStat().skill.xjzh_sanguo_qiangxilvbu) {
									if (player.hasSkill('xjzh_sanguo_qiangxilvbu') && player.getEquip(1) && list.includes('xjzh_sanguo_xuanfenglvbu')) return 'xjzh_sanguo_xuanfenglvbu';
									if (list.includes('xjzh_sanguo_wanshalvbu') || list.includes('xjzh_sanguo_qiangxilvbu')) {
										var players = game.filterPlayer();
										for (var i of players) {
											if (i.hp == 1 && get.attitude(player, i) < 0) {
												if (list.includes('xjzh_sanguo_wanshalvbu')) return 'xjzh_sanguo_wanshalvbu';
												if (list.includes('xjzh_sanguo_qiangxilvbu')) return 'xjzh_sanguo_qiangxilvbu';
											}
										}
									}
								}
								if (list.includes('xjzh_sanguo_qiangxilvbu')) return 'xjzh_sanguo_qiangxilvbu';
								if (list.includes('xjzh_sanguo_wanshalvbu')) return 'xjzh_sanguo_wanshalvbu';
								if (list.includes('xjzh_sanguo_xuanfenglvbu')) return 'xjzh_sanguo_xuanfenglvbu';
								return 'xjzh_sanguo_tiejilvbu';
							})
							.set('prompt', '选择获得一项技能直到回合结束');
					}
					('step 1');
					player.addTempSkill(result.control);
					player.popup(get.translation(result.control));
				},
				ai: {
					order() {
						var player = _status.event.player;
						if (
							player.countCards('e', {
								type: 'equip',
							})
						)
							return 10;
						if (!player.getStat().skill.xjzh_sanguo_qiangxilvbu) {
							if (player.hasSkill('xjzh_sanguo_qiangxilvbu') && player.getEquip(1) && !player.hasSkill('xjzh_sanguo_xuanfenglvbu')) return 10;
							if (player.hasSkill('xjzh_sanguo_wanshalvbu')) return 1;
							var players = game.filterPlayer();
							for (var i of players) {
								if (i.hp == 1 && get.attitude(player, i) < 0) return 10;
							}
						}
						return 1;
					},
					result: {
						player(player) {
							if (
								player.countCards('e', {
									type: 'equip',
								})
							)
								return 1;
							if (!player.getStat().skill.xjzh_sanguo_qiangxilvbu) {
								if (player.hasSkill('xjzh_sanguo_qiangxilvbu') && player.getEquip(1) && !player.hasSkill('xjzh_sanguo_xuanfenglvbu')) return 1;
								if (!player.hasSkill('xjzh_sanguo_wanshalvbu') || !player.hasSkill('xjzh_sanguo_qiangxilvbu')) {
									var players = game.filterPlayer();
									for (var i of players) {
										if (i.hp == 1 && get.attitude(player, i) < 0) return 1;
									}
								}
							}
							return 0;
						},
					},
				},
			},
			xjzh_sanguo_shishu: {
				trigger: {
					source: 'damageSource',
					player: 'damageEnd',
				},
				forced: true,
				_priority: -1,
				mark: true,
				marktext: '书',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					let cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				mod: {
					cardname(card, player) {
						if (!card.hasGaintag('xjzh_sanguo_shishu')) return;
						if (get.color(card) == 'red') return 'huogong';
						if (get.color(card) == 'black') return 'wuxie';
					},
					canBeGained(card, player, target, name) {
						if (!card.hasGaintag('xjzh_sanguo_shishu')) return;
						return false;
					},
					cardDiscardable(card, player) {
						if (!card.hasGaintag('xjzh_sanguo_shishu')) return;
						return false;
					},
					canBeDiscarded(card, player, target, name) {
						if (!card.hasGaintag('xjzh_sanguo_shishu')) return;
						return false;
					},
					canBeReplaced(card, source, player) {
						if (!card.hasGaintag('xjzh_sanguo_shishu')) return;
						return false;
					},
				},
				getIndex(event, player, triggername) {
					return Math.min(event.num, 9) || 1;
				},
				group: ['xjzh_sanguo_shishu2'],
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					let cards = get.cards(2);
					const { links } = await player
						.chooseCardButton(`〖识书〗:选择一张牌获得之,另一张牌置于武将牌上`, cards, true)
						.set('ai', (button) => {
							return get.value(button.link, player, 'raw');
						})
						.forResult();

					player.gain(links[0], 'gain2', 'log');
					player
						.addToExpansion(
							cards.find((item) => item != links[0]),
							'draw',
							player
						)
						.gaintag.add(event.name);
				},
				ai: {
					maixie: true,
					maixie_hp: true,
				},
			},
			xjzh_sanguo_shishu2: {
				trigger: {
					player: ['chooseToRespondBegin', 'chooseToUseBegin'],
				},
				forced: true,
				lastDo: true,
				charlotte: true,
				hiddenCard(player, name) {
					let cards = player.getExpansions('xjzh_sanguo_shishu');
					if (name == 'wuxie') return cards.some((item) => get.color(item) == 'black');
					if (name == 'huogong') return cards.some((item) => get.color(item) == 'red');
				},
				filter(event, player) {
					if (event.responded || event.skill) return false;
					let cards = player.getExpansions('xjzh_sanguo_shishu');
					if (!cards.length) return false;
					return cards.some((card) => {
						if (get.color(card) == 'red') return event.filterCard && event.filterCard({ name: 'huogong' }, player, event);
						return event.filterCard && event.filterCard({ name: 'wuxie' }, player, event);
					});
				},
				async content(event, trigger, player) {
					let cards = player.getExpansions('xjzh_sanguo_shishu');
					player.directgain(cards, null, 'xjzh_sanguo_shishu');
					if (trigger.onuse) {
						onuse = trigger.onuse;
					}
					let next = game.createEvent('xjzh_sanguo_shishu_tri', false);
					next.player = player;
					next.setContent(() => {
						let cards = player.getCards('h', (card) => card.hasGaintag('xjzh_sanguo_shishu'));
						player.addToExpansion(cards, 'draw', player).gaintag.add('xjzh_sanguo_shishu');
					});
					event.next.remove(next);
					trigger.after.push(next);
				},
			},
			xjzh_sanguo_wulue: {
				enable: 'phaseUse',
				usable: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				derivation: ['zhiheng', 'gongxin'],
				filter(event, player) {
					return player.getExpansions('xjzh_sanguo_shishu').length || player.countCards('h', (card) => card.hasGaintag('xjzh_sanguo_shishu'));
				},
				async content(event, trigger, player) {
					let cards = player.getExpansions('xjzh_sanguo_shishu') || player.getCards('h', (card) => card.hasGaintag('xjzh_sanguo_shishu'));
					player.showCards(cards);
					let num = cards.filter((item) => get.color(item) == 'red').length,
						num2 = cards.length - num;
					num > num2 ? player.addTempSkill('gongxin') : player.addTempSkill('zhiheng');
					const { targets } = await player
						.chooseTarget(get.prompt2('xjzh_sanguo_wulue'), (card, player, target) => {
							if (target == player) return false;
							return !target.getEquips('tengjia').length;
						})
						.set('ai', (target) => {
							return -get.attitude(player, target);
						})
						.forResult();

					if (targets) {
						player.storage.xjzh_sanguo_wulue_target = targets[0];
						let card = game.createCard('tengjia'),
							skills = get.info(card).skills;
						if (!skills.length) return;
						targets[0].$gain2(card);
						targets[0].addTempSkill(skills);
						player.addTempSkill('xjzh_sanguo_wulue_target');
					}
				},
				ai: {
					order: 12,
					result: {
						player: 1, //QQQ
					},
				},
				subSkill: {
					target: {
						onremove(player, skill) {
							delete player.storage.xjzh_sanguo_wulue_target;
						},
						intro: {
							content: '本回合内<font color=yellow>$</font>视为装备了<font color=yellow>藤甲</font>直到回合结束',
						},
					},
				},
			},
			xjzh_sanguo_liantui: {
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				_priority: 9,
				audio: 'ext:仙家之魂/audio/skill:2',
				mod: {
					targetEnabled(card, player, target) {
						let type = get.type(card),
							color = get.color(card),
							cards = target.getExpansions('xjzh_sanguo_shishu') || player.getCards('h', (card) => card.hasGaintag('xjzh_sanguo_shishu'));
						if (!cards.length) return;
						if (!['trick', 'delay'].includes(type)) return;
						if (cards.some((item) => get.color(item) == 'red') && color == 'red') return false;
						if (cards.some((item) => get.color(item) == 'black') && color == 'black') return false;
					},
				},
				filter(event, player) {
					if (player.countCards('h')) return false;
					const evt = event.getl(player);
					return evt && evt.player == player && evt.hs && evt.hs.length;
				},
				async content(event, trigger, player) {
					player.drawTo(player.maxHp);
					if (player.isDamaged()) player.recover();
				},
				ai: {
					threaten: 0.8,
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
			xjzh_sanguo_buqu: {
				audio: 'ext:仙家之魂/audio/skill:2',
				trigger: {
					player: ['phaseBefore', 'dying'],
				},
				forced: true,
				_priority: -10,
				init(player) {
					player.storage.xjzh_sanguo_buqu = player.maxHp;
				},
				filter(event, player) {
					if (event.name == 'dying') {
						return player.maxHp > player.storage.xjzh_sanguo_buqu;
					}
					return true;
				},
				content() {
					'step 0';
					if (trigger.name == 'phase') {
						if (player.isDamaged()) {
							player.recover();
						} else {
							player.gainMaxHp();
						}
						event.finish();
					}
					('step 1');
					player.loseMaxHp();
					player.recoverTo(1);
				},
				ai: {
					save: true,
					skillTagFilter(player, tag, target) {
						if (player != target) return false;
					},
				},
			},
			xjzh_sanguo_fenji: {
				trigger: {
					global: 'damageEnd',
				},
				check(event, player) {
					let target = _status.event.player;
					let att = get.attitude(player, target);
					if (att > 0) {
						if (player.storage.xjzh_sanguo_buqu) return player.maxHp - player.storage.xjzh_sanguo_buqu;
						return player.maxHp > 2;
					}
					return 0;
				},
				prompt(event, player) {
					return `〖奋激〗:是否展示牌堆顶${player.maxHp * 2}张牌并令${get.translation(event.player)}获得其中任意一种花色的所有牌？`;
				},
				async content(event, trigger, player) {
					await player.loseMaxHp();
					let cards = get.cards(player.maxHp * 2);
					game.cardsGotoOrdering(cards);
					player.showCards(cards, '奋激');
					let suits = [...new Set(cards.map((card) => card.suit))],
						dialog = ui.create.dialog('hidden', '〖奋激〗:请选择一种花色的牌令' + get.translation(trigger.player) + '获得之', [cards, 'vcard']);
					const { control } = await player
						.chooseControl(suits)
						.set('ai', () => {
							return Math.random();
						})
						.set('dialog', dialog)
						.forResult();

					if (control) {
						let list = [];
						for (let card of cards) {
							if (card.suit == control) list.push(card);
						}
						cards.removeArray(list);
						trigger.player.gain(list, 'draw');
						player.gain(cards, 'draw');
					}
					if (
						game.hasPlayer((current) => {
							return player.canUse({ name: 'sha' }, current);
						})
					)
						player.chooseToUse('〖奋激〗:选择一个目标对其使用一张【杀】', { name: 'sha' });
				},
			},
			xjzh_sanguo_guimou: {
				marktext: '谋',
				mark: true,
				charlotte: true,
				intro: {
					name: '神鬼之谋',
					mark(dialog, storage, player) {
						var cardPile = Array.from(ui.cardPile.childNodes);
						if (!cardPile.length) return '';
						cardPile = cardPile.slice(0, Math.min(3, cardPile.length));
						if (player.isUnderControl(true)) {
							dialog.addAuto(cardPile);
						} else {
							return '';
						}
					},
				},
				ai: {
					respondShan: true,
					respondSha: true,
					save: true,
					skillTagFilter(player, tag, arg) {
						var event = _status.event;
						var cardPile = Array.from(ui.cardPile.childNodes);
						if (!cardPile.length) return false;
						cardPile = cardPile.slice(0, Math.min(3, cardPile.length));
						for (var i = 0; i < cardPile.length; i++) {
							if (tag == 'respondSha') {
								if (cardPile[i].name == 'sha') return true;
							} else if (tag == 'respondShan') {
								if (cardPile[i].name == 'shan') return true;
							} else if (tag == 'save') {
								if (cardPile[i].name == 'jiu' || cardPile[i].name == 'tao') return true;
							}
						}
						return false;
					},
				},
				group: ['xjzh_sanguo_guimou_discard'],
				audio: 'ext:仙家之魂/audio/skill:2',
				hiddenCard(player, name) {
					var cardPile = Array.from(ui.cardPile.childNodes);
					if (!cardPile.length) return false;
					cardPile = cardPile.slice(0, Math.min(3, cardPile.length));
					return cardPile.some((i) => i.name == name);
				},
				filter(event, player) {
					if (event.responded || event.skill) return false;
					var cardPile = Array.from(ui.cardPile.childNodes);
					if (!cardPile.length) return false;
					cardPile = cardPile.slice(0, Math.min(3, cardPile.length));
					return cardPile.some((i) => event.filterCard && event.filterCard(i, player, event));
				},
				mod: {
					cardEnabled2(card, player) {
						if (_status.event.skill && get.itemtype(card) == 'card' && card.hasGaintag('xjzh_sanguo_guimou')) return false;
					},
				},
				trigger: { player: ['chooseToRespondBegin', 'chooseToUseBegin'] },
				forced: true,
				lastDo: true,
				copy(cards) {
					var result = [];
					for (var i of cards) {
						var card = ui.create.card(ui.special);
						card.init([i.suit, i.number, i.name, i.nature]);
						((card.cardid = i.cardid), (card.wunature = i.wunature), (card.storage = i.storage), (card.relatedCard = i));
						result.push(card);
					}
					return result;
				},
				contentx() {
					'step 0';
					if (trigger.result.bool) {
						if (trigger.onresult) {
							trigger.onresult(trigger.result);
							delete trigger.onresult;
						}
					}
					('step 1');
					player.lose(event.cards, ui.special)._triggered = null;
				},
				content() {
					'step 0';
					var cardPile = Array.from(ui.cardPile.childNodes);
					cardPile = cardPile.slice(0, Math.min(3, cardPile.length));
					event.cards = lib.skill.xjzh_sanguo_guimou.copy(cardPile);
					player.directgains(event.cards, null, 'xjzh_sanguo_guimou');
					('step 1');
					var evt = trigger;
					var onresult = false;
					if (evt.onresult) {
						onresult = evt.onresult;
					}
					var next2 = game.createEvent('xjzh_sanguo_guimou_clear', false);
					next2.cards = event.cards;
					next2.player = player;
					next2._trigger = evt;
					next2.setContent(lib.skill.xjzh_sanguo_guimou.contentx);
					event.next.remove(next2);
					evt.after.push(next2);
					evt.onresult = function (result) {
						if (evt.after.includes(next2)) {
							evt.after.remove(next2);
							evt.next.push(next2);
						}
						if (result.cards && result.cards.length && (result.cards[0].hasGaintag('xjzh_sanguo_guimou') || event.cards.includes(result.cards[0]))) {
							var card2 = result.cards[0];
							result.cards[0] = result.cards[0].relatedCard;
							var cardx = result.cards[0];
							result.card = {
								name: card2.name,
								suit: card2.suit,
								number: card2.number,
								nature: get.nature(card2),
								cardid: cardx.cardid,
								wunature: cardx.wunature,
								storage: cardx.storage,
								cards: [cardx],
							};
						}
						if (onresult) onresult.apply(evt, arguments);
						delete evt.onresult;
					};
				},
				subSkill: {
					discard: {
						trigger: {
							player: 'gainBefore',
							global: ['gameDrawAfter'],
						},
						forced: true,
						_priority: 100,
						firstDo: true,
						popup: false,
						audio: 'xjzh_sanguo_guimou',
						filter(event, player) {
							if (event.name == 'gain') return true;
							return player.getCards('h').length;
						},
						content() {
							if (trigger.name == 'gain') {
								trigger.cancel();
								var owner = get.owner(trigger.cards[0]);
								if (owner && owner.getCards('hejsx').includes(trigger.cards[0])) owner.lose(trigger.cards, ui.discardPile);
								else game.cardsDiscard(trigger.cards);
								game.log(trigger.cards, '进入了弃牌堆');
							} else {
								var cards = player.getCards('h');
								if (cards.length) {
									player.discard(cards);
								}
							}
						},
						ai: {
							nokeep: true,
						},
					},
				},
			},
			xjzh_sanguo_tianji: {
				enable: 'phaseUse',
				usable: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					for (var i of game.players) {
						if (i.countCards('j')) {
							return true;
						}
					}
					return false;
				},
				filterTarget(card, player, target) {
					if (ui.selected.targets.length == 0) return true;
					if (ui.selected.targets[0].countCards('j') == 0 && target.countCards('j') == 0) return false;
					return player.hp > 0;
				},
				selectTarget: 2,
				multitarget: true,
				multiline: true,
				targetprompt: ['目标一', '目标二'],
				content() {
					'step 0';
					targets[0].swapJudgeCards(targets[1]);
				},
				ai: {
					threaten: 1.2,
				},
			},
			xjzh_sanguo_tianqi: {
				enable: 'phaseUse',
				forceDie: true,
				xjzh_xinghunSkill: true,
				charlotte: true,
				nogainsSkill: true,
				group: ['xjzh_sanguo_tianqi_limited'],
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					var targets = game.filterPlayer();
					for (var i = 0; i < targets.length; i++) {
						var list = targets[i].getSkills(null, false, false).filter(function (skill) {
							var info = lib.skill[skill];
							return info && info.juexingji && !info.filterTarget && !info.filterCard && !targets[i].awakenedSkills.includes(skill);
						});
						if (list.length) return true;
					}
					return false;
				},
				filterTarget(card, player, target) {
					if (
						target.getSkills(null, false, false).filter(function (skill) {
							var info = lib.skill[skill];
							return info && info.juexingji && !info.filterTarget && !info.filterCard && !target.awakenedSkills.includes(skill);
						}).length
					)
						return true;
					return false;
				},
				usable: 1,
				selectTarget: 1,
				content() {
					'step 0';
					player.loseHp();
					var list = target.getSkills(null, false, false).filter(function (skill) {
						var info = lib.skill[skill];
						return info && info.juexingji && !info.filterTarget && !info.filterCard && !target.awakenedSkills.includes(skill);
					});
					if (list.length) {
						if (list.length == 1) {
							event._result = { bool: true, control: list[0] };
						} else {
							player.chooseControl(list, 'cancel2').set('prompt', '选择发动' + get.translation(trigger.player) + '的一项技能(限限定技和觉醒技)');
						}
					}
					('step 1');
					if (result && result.control && result.control != 'cancel2') {
						target.useSkill(result.control);
					}
				},
				ai: {
					order: 0.1,
					expose: 0.5,
					result: {
						target(player, target) {
							if (player.hasUnknown()) return 0;
							var list = target.getSkills(null, false, false).filter(function (skill) {
								var info = lib.skill[skill];
								return info && info.juexingji;
							});
							if (list.length || get.attitude(target, player, player) > 0) return 10;
							return 0;
						},
					},
				},
				subSkill: {
					limited: {
						trigger: {
							global: ['gameStart'],
						},
						forced: true,
						firstDo: true,
						_priority: 100,
						audio: 'ext:仙家之魂/audio/skill:1',
						filter(event, player) {
							var targets = game.filterPlayer(function (current) {
								return current != player;
							});
							var list = [];
							for (var i = 0; i < targets.length; i++) {
								var skills = targets[i].getSkills(null, false, false).filter(function (skill) {
									var info = lib.skill[skill];
									return info && info.limited;
								});
								if (skills.length) list.push(skills);
							}
							return list.length;
						},
						content() {
							'step 0';
							player
								.chooseTarget(true, '〖天启〗:请选择一名角色获得其一项限定技', function (card, player, target) {
									var list = target.getSkills(null, false, false).filter(function (skill) {
										var info = lib.skill[skill];
										return info && info.limited;
									});
									return list.length;
								})
								.set('ai', function (target) {
									return Math.random();
								});
							('step 1');
							if (result.targets?.length) {
								var list = result.targets[0].getSkills(null, false, false).filter(function (skill) {
									var info = lib.skill[skill];
									return info && info.limited;
								});
								if (list.length) {
									if (list.length == 1) {
										event._result = { bool: true, control: list[0] };
									} else {
										player.chooseControl(list).set('ai', function () {
											return list.randomGet();
										});
									}
								} else {
									event.finish();
									return;
								}
								event.target = result.targets[0];
							} else {
								event.finish();
								return;
							}
							('step 2');
							if (result && result.control) {
								var skills = result.control;
								player.addSkillLog(skills);
								event.target.removeSkill(skills, true);
								player.storage.xjzh_sanguo_tianqi_limited = skills;
								var info = lib.skill[skills];
								info.filter = function (event, player) {
									info.xjzh_sanguo_tianqi_limited_filter = info.filter;
									if (player.storage.xjzh_sanguo_tianqi_limited) return true;
									return this.xjzh_sanguo_tianqi_limited_filter.apply(this, arguments);
								};
							}
						},
					},
				},
			},
			xjzh_sanguo_longnu: {
				mark: true,
				marktext: '☯',
				zhuanhuanji: true,
				intro: {
					name: '龙怒',
					content(storage, player, skill) {
						if (player.storage.xjzh_sanguo_longnu == true) return '出牌阶段,你的红色手牌均视为【火杀】且无距离限制';
						return '出牌阶段,你的黑色手牌均视为【雷杀】且无使用次数限制';
					},
				},
				trigger: {
					global: 'phaseUseBegin',
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					'step 0';
					if (trigger.player != player) {
						if (trigger.player.isMaxHandcard(true) || player.countCards('h') <= player.hp) {
							if (trigger.player.countCards('he')) {
								player.gainPlayerCard(trigger.player, true, 'he');
								trigger.player.draw();
							}
						}
						event.finish();
					} else {
						event.goto(1);
					}
					('step 1');
					if (player.storage.xjzh_sanguo_longnu == true) {
						player.storage.xjzh_sanguo_longnu = false;
						player.loseMaxHp();
						player.draw();
						player.addTempSkill('xjzh_sanguo_longnu_2', 'phaseUseAfter');
						player.addTempSkill('xjzh_sanguo_longnu_taoyuan', 'phaseUseAfter');
					} else {
						player.storage.xjzh_sanguo_longnu = true;
						player.loseHp();
						player.draw();
						player.addTempSkill('xjzh_sanguo_longnu_1', 'phaseUseAfter');
						player.addTempSkill('xjzh_sanguo_longnu_wanjian', 'phaseUseAfter');
					}
				},
				subSkill: {
					1: {
						mod: {
							cardname(card, player) {
								if (get.color(card) == 'red') return 'sha';
							},
							cardnature(card, player) {
								if (get.color(card) == 'red') return 'fire';
							},
							targetInRange(card, player, target, now) {
								if (get.color(card) == 'red') return true;
							},
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'respondSha') && current < 0) return 0.6;
								},
							},
							respondSha: true,
						},
					},
					2: {
						mod: {
							cardname(card, player) {
								if (get.color(card) == 'black') return 'sha';
							},
							cardnature(card, player) {
								if (get.color(card) == 'black') return 'thunder';
							},
							cardUsable(card, player) {
								if (card.name == 'sha' && card.nature == 'thunder') return Infinity;
							},
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'respondSha') && current < 0) return 0.6;
								},
							},
							respondSha: true,
						},
					},
					taoyuan: {
						enable: 'phaseUse',
						usable: 1,
						filter(event, player) {
							var list = [];
							var cards = player.getExpansions('xjzh_sanguo_zhibing');
							for (var i of cards) {
								if (get.color(i) == 'red') list.add(i);
							}
							return list.length;
						},
						content() {
							'step 0';
							var list = [];
							var cards = player.getExpansions('xjzh_sanguo_zhibing');
							for (var i of cards) {
								if (get.color(i) == 'red') list.add(i);
							}
							player.chooseCardButton('选择一张牌视为使用一张桃园结义', list);
							('step 1');
							if (result.bool) {
								player.loseToDiscardpile(result.links);
								var targets = game.filterPlayer();
								targets.sort(lib.sort.seat);
								player.useCard({ name: 'taoyuan' }, result.links, targets, false);
							}
						},
						ai: {
							basic: {
								order() {
									return 11;
								},
								useful: [3, 1],
								value: 0,
							},
							result: {
								target(player, target) {
									return target.hp < target.maxHp ? 2 : 0;
								},
							},
							tag: {
								recover: 0.5,
								multitarget: 1,
							},
						},
					},
					wanjian: {
						enable: 'phaseUse',
						usable: 1,
						filter(event, player) {
							var list = [];
							var cards = player.getExpansions('xjzh_sanguo_zhibing');
							for (var i of cards) {
								if (get.color(i) == 'black') list.add(i);
							}
							return list.length;
						},
						content() {
							'step 0';
							var list = [];
							var cards = player.getExpansions('xjzh_sanguo_zhibing');
							for (var i of cards) {
								if (get.color(i) == 'black') list.add(i);
							}
							player.chooseCardButton('选择一张牌视为使用一张万箭齐发', list);
							('step 1');
							if (result.bool) {
								player.loseToDiscardpile(result.links);
								var targets = game.filterPlayer();
								targets.remove(player);
								targets.sort(lib.sort.seat);
								player.useCard({ name: 'wanjian' }, result.links, targets, false);
							}
						},
						ai: {
							wuxie(target, card, player, viewer) {
								if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
									if (!target.countCards('h') || target.hp == 1 || Math.random() <= 0.7) return 0;
								}
							},
							basic: {
								order: 9,
								useful: 1,
								value: 5,
							},
							result: {
								target_use(player, target) {
									if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
									var nh = target.countCards('h');
									if (get.mode() == 'identity') {
										if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
									}
									if (nh == 0) return -2;
									if (nh == 1) return -1.7;
									return -1.5;
								},
								target(player, target) {
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
								respondShan: 1,
								damage: 1,
								multitarget: 1,
								multineg: 1,
							},
						},
					},
				},
			},
			xjzh_sanguo_jieyi: {
				trigger: {
					player: 'enterGame',
					global: 'gameStart',
				},
				forced: true,
				popup: false,
				zhuSkill: true,
				_priority: -99,
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					if (player.hasZhuSkill('xjzh_sanguo_jieyi')) return true;
					return false;
				},
				derivation: ['xjzh_sanguo_qinjin', 'xjzh_sanguo_zhibing'],
				content() {
					var skills = ['xjzh_sanguo_qinjin', 'xjzh_sanguo_zhibing'];
					player.addAdditionalSkill('xjzh_sanguo_jieyi', skills);
				},
			},
			xjzh_sanguo_qinjin: {
				trigger: {
					player: ['shaMiss', 'damageEnd'],
					source: 'damageSource',
				},
				audio: 'ext:仙家之魂/audio/skill:5',
				forced: true,
				content() {
					if (trigger.name == 'damage') {
						if (trigger.player != player) {
							player.gainPlayerCard(trigger.player, true, 'he');
						} else if (trigger.player == player && trigger.source && trigger.source != player) {
							if (trigger.source.group == 'wu' && player.countCards('he')) {
								player.chooseToDiscard('he', true);
							} //QQQ
						}
					} else {
						if (trigger.target.group == 'wu') {
							trigger.target.draw(2);
						} else {
							trigger.target.draw();
						}
					}
				},
			},
			xjzh_sanguo_zhibing: {
				trigger: {
					player: 'drawBegin',
				},
				usable: 1,
				marktext: '兵',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				check(event, player) {
					return (
						get.attitude(player, event.player) < 0 &&
						(player.countCards('h') <= 1 ||
							!player.hasCard(function (card) {
								return card.name == 'tao' || card.name == 'shan' || card.name == 'jiu';
							}, 'h'))
					);
				},
				filter(event, player) {
					if (event.parent.name == 'phaseDraw') return false;
					return true;
				},
				content() {
					'step 0';
					trigger.changeToZero();
					var cardx = get.cards();
					player.popup(cardx);
					player.addToExpansion(cardx, 'draw', player).gaintag.add('xjzh_sanguo_zhibing');
					('step 1');
					player.chooseTarget(get.prompt2('xjzh_sanguo_zhibing'), function (card, player, target) {
						return target != player && target.inRangeOf(player);
					}).ai = function (target) {
						return get.damageEffect(target, _status.event.player, _status.event.player);
					};
					('step 2');
					if (result.bool) {
						player.addTempSkill('unequip', 'shaAfter');
						player.useCard({ name: 'sha' }, result.targets[0], false);
					}
				},
				ai: {
					unequip: true,
				},
			},
			xjzh_sanguo_daizhao: {
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				check(event, player) {
					return 1;
				},
				_priority: -1,
				forced: true,
				mode: ['identity'],
				audio: 'ext:仙家之魂/audio/skill:2',
				group: ['xjzh_sanguo_daizhao_zhu'],
				prompt: '〖代诏〗:是否将体力或手牌回复/补至与主公一致？',
				filter(event, player) {
					let zhu = get.zhu(player);
					if (get.mode() != 'identity') return false;
					if (zhu == player) return false;
					if (event.player != zhu) return false;
					if ((zhu.getHp(true) > player.getHp(true) && player.isDamaged()) || zhu.countCards('h') > player.countCards('h')) return true;
					return false;
				},
				async content(event, trigger, player) {
					let zhu = get.zhu(player),
						list = new Array();
					if (zhu.getHp(true) > player.getHp(true) && player.isDamaged()) list.push(`将体力回复至与${get.translation(zhu)}一致`);
					if (zhu.countCards('h') > player.countCards('h')) list.push(`将手牌补至与${get.translation(zhu)}一致`);
					if (list.length == 0) return;
					let dialog = ui.create.dialog('〖代诏〗:请选择一项', 'hidden');
					for (var i = 0; i < list.length; i++) {
						list[i] = [i, list[i]];
					}
					dialog.add([list, 'textbutton']);
					const {
						result: { bool, links },
					} =
						list.length == 1
							? { result: { bool: true, links: list[0] } }
							: await player.chooseButton(dialog, true).set('ai', function (button) {
								let zhu = get.zhu(player);
								if (zhu.countCards('h') > player.countCards('h')) return 1;
								if (zhu.getHp(true) > player.getHp(true)) return 0;
								return get.rand(0, 1);
							});
					if (bool && links) {
						const index = links[1];
						if (index.includes('手牌')) {
							const num = get.zhu(player).countCards('h') - player.countCards('h');
							if (num == 0) return;
							player.draw(num);
						} else {
							const num = get.zhu(player).getHp(true) - player.getHp(true);
							if (num == 0) return;
							player.recover(num);
						}
					}
				},
				subSkill: {
					zhu: {
						trigger: {
							global: ['gameStart', 'zhuUpdate'],
							player: 'enterGame',
						},
						audio: 'xjzh_sanguo_daizhao',
						forced: true,
						_priority: 1,
						filter(event, player) {
							if (get.mode() != 'identity') return false;
							return get.zhu(player) != player;
						},
						async content(event, trigger, player) {
							let list = [];
							let zhu = get.zhu(player);
							if (zhu && zhu.skills.length) {
								for (let skill of zhu.skills) {
									if (!get.skillInfoTranslation(skill)) continue;
									if (lib.skill.global.includes(skill)) continue;
									if (get.skillCategoriesOf(skill, player).some((type) => ['Charlotte', '主公技', '觉醒技', '限定技', '隐匿技', '使命技', '持恒技'].includes(type))) continue;
									list.push(skill);
								} //QQQ
							}
							player.addAdditionalSkill('xjzh_sanguo_daizhao', list);
						},
					},
				},
			},
			xjzh_sanguo_guixin: {
				trigger: {
					player: ['phaseDrawBegin'],
				},
				forced: true,
				_priority: -1,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return !event.numFixed;
				},
				check(event, player) {
					if (game.players.length - 1 > 2) return 1;
					return 0;
				},
				mod: {
					cardUsableTarget(card, player, target) {
						let storage = player.storage.xjzh_sanguo_guixin;
						if (storage) {
							return storage.get('discard').includes(target);
						}
					}, //QQQ
				},
				async content(event, trigger, player) {
					trigger.changeToZero();
					let list = new Map([
						['give', []],
						['discard', []],
					]);
					while (player.isMinCard()) {
						let targets = game.filterPlayer((current) => current != player && current.countCards('he')).slice(0);
						targets.sort(lib.sort.seat);
						for (let target of targets) {
							if (target.countCards('he') <= 0) continue;
							const { bool, cards } = await target
								.chooseCard(1, 'he', `〖归心〗:请选择交给${get.translation(player)}一张牌,否则弃置一张牌`)
								.set('ai', (card) => {
									return get.attitude(player, target) > 0 ? 8 - get.value(card) : 4 - get.value(card);
								})
								.forResult();
							if (bool && cards) {
								target.give(cards[0], player);
								list.set('give', list.get('give').add(target));
							} else {
								target.chooseToDiscard(1, 'he', true);
								list.set('discard', list.get('discard').add(target));
							}
						}
					}
					player.storage.xjzh_sanguo_guixin = list;
					let evt = event.getParent('phase');
					if (evt && evt.getParent) {
						let next = game.createEvent('xjzh_sanguo_guixinDelete', false, evt.parent);
						next.player = player;
						next.setContent(() => {
							let storage = player.storage.xjzh_sanguo_guixin,
								gives = storage.get('give');
							if (player.isMaxCard(true)) {
								for (let target of gives) {
									if (target.isAlive()) target.draw();
								}
							}
							delete player.storage.xjzh_sanguo_guixin;
						});
					}
				},
				ai: {
					threaten: 1.5,
				},
			},
			xjzh_sanguo_feiying: {
				charlotte: true,
				mod: {
					targetInRange(card, player, target) {
						let hs = target.countCards('h');
						let hs2 = player.countCards('h');
						if (hs2 > hs) return true;
					},
					targetEnabled(card, player, target) {
						let hs = target.countCards('h');
						let hs2 = player.countCards('h');
						if (hs2 > hs) return false;
					},
				},
			},
			xjzh_sanguo_batu: {
				trigger: {
					global: 'changeHp',
				},
				forced: true,
				popup: false,
				_priority: -100,
				zhuSkill: true,
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					if (!player.hasZhuSkill('xjzh_sanguo_batu')) return false;
					return event.player != player && event.player.group == 'wei';
				},
				async content(event, trigger, player) {
					let list = [`令${get.translation(player)}摸一张牌`, `令${get.translation(trigger.player)}摸一张牌`];
					let dialog = ui.create.dialog('〖霸图〗:请选择一项', 'hidden');
					for (var i = 0; i < list.length; i++) {
						list[i] = [i, list[i]];
					}
					dialog.add([list, 'textbutton']);
					const { bool, links } = await player
						.chooseButton(dialog, true)
						.set('ai', function (button) {
							if (!_status.event.getTrigger().player.countCards('h')) return 1;
							return 0;
						})
						.forResult();
					if (bool && links) {
						if (links[0] == 0) {
							player.draw();
						} else {
							trigger.player.draw();
						}
					}
				},
			},
			xjzh_sanguo_guanxing: {
				trigger: {
					player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				_priority: 3,
				forced: true,
				content() {
					var num = trigger.name == 'phaseZhunbei' ? 5 : 3;
					player.chooseToGuanxing(num);
				},
				ai: {
					guanxing: true,
					viewHandcard: true,
					skillTagFilter(player, tag, arg) {
						if (tag == 'viewHandcard') {
							if (player == arg) return false;
							return true;
						}
					},
				},
			},
			xjzh_sanguo_xinghun: {
				trigger: {
					player: ['enterGame'],
					global: ['gameStart'],
				},
				forced: true,
				popup: false,
				_priority: 21,
				group: ['xjzh_sanguo_xinghun_damage'],
				audio: 'ext:仙家之魂/audio/skill:1',
				init(player) {
					player.storage.xjzh_sanguo_xinghun = [];
					lib.skill.xjzh_sanguo_xinghun.getSkillList(player);
				},
				bannedList: ['guanxing', 'reguanxing', 'jlsg_guanxing'],
				getSkillList(player) {
					var list = [];
					var list2 = [];
					var players = game.players.concat(game.dead);
					for (var i of players) {
						list2.add(i.name);
						list2.add(i.name1);
						list2.add(i.name2);
					}
					for (var i in lib.character) {
						if (lib.character[i][4]) {
							if (lib.character[i][4].includes('boss')) continue;
							if (lib.character[i][4].includes('bossallowed')) continue;
							if (lib.character[i][4].includes('hiddenboss')) continue;
							if (lib.character[i][4].includes('qishuBoss')) continue;
						}
						if (list2.includes(i)) continue;
						for (var j = 0; j < lib.character[i][3].length; j++) {
							if (lib.skill[lib.character[i][3][j]] && lib.translate[lib.character[i][3][j] + '_info']) {
								var info = lib.skill[lib.character[i][3][j]];
								if (info && (info.gainable || !info.unique) && !info.zhuSkill && !info.juexingji && !info.limited && !info.dutySkill && !lib.skill.xjzh_sanguo_xinghun.bannedList.includes(lib.character[i][3][j])) {
									list.add(lib.character[i][3][j]);
								}
							}
						}
					}
					var skills = player.skills.slice(0);
					for (var i = 0; i < skills.length; i++) {
						list.remove(skills[i]);
					}
					player.storage.xjzh_sanguo_xinghun.addArray(list);
				},
				content() {
					'step 0';
					var characters = [];
					var skillx = player.storage.xjzh_sanguo_xinghun.randomGets(7);
					var skills = [];
					for (var c in lib.character) {
						var info = lib.character[c];
						if (info[3].some((s) => skillx.includes(s))) {
							characters.push(c);
							skills.push(...skillx.filter((s) => info[3].includes(s)));
							skillx.remove(info[3]);
							if (!skillx.length) break;
						}
					}
					var list = characters;
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						_status.imchoosing = false;
						event._result = {
							bool: true,
							skills: skills.randomGets(),
						};
						if (event.dialog) event.dialog.close();
						if (event.control) event.control.close();
					};
					var chooseButton = function (list, skills) {
						var event = _status.event;
						if (!event._result) event._result = {};
						event._result.skills = [];
						var rSkill = event._result.skills;
						var dialog = ui.create.dialog('请选择获得的技能', [list, 'character'], 'hidden');
						event.dialog = dialog;
						var table = document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin = '0';
						table.style.width = '100%';
						table.style.position = 'relative';
						for (var i = 0; i < skills.length; i++) {
							var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.link = skills[i];
							table.appendChild(td);
							td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
							td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
								if (_status.dragged) return;
								if (_status.justdragged) return;
								_status.tempNoButton = true;
								setTimeout(function () {
									_status.tempNoButton = false;
								}, 500);
								var link = this.link;
								if (!this.classList.contains('bluebg')) {
									if (rSkill.length >= 2) return;
									rSkill.add(link);
									this.classList.add('bluebg');
								} else {
									this.classList.remove('bluebg');
									rSkill.remove(link);
								}
							});
						}
						dialog.content.appendChild(table);
						dialog.add('　　');
						dialog.open();
						event.switchToAuto = function () {
							event.dialog.close();
							event.control.close();
							_status.imchoosing = false;
						};
						event.control = ui.create.control('ok', function (link) {
							if (rSkill.length !== 2) return;
							event.dialog.close();
							event.control.close();
							_status.imchoosing = false;
						});
						for (var i = 0; i < event.dialog.buttons.length; i++) {
							event.dialog.buttons[i].classList.add('selectable');
						}
						game.countChoose();
					};
					if (event.isMine()) {
						chooseButton(list, skills);
					} else if (event.isOnline()) {
						event.player.send(chooseButton, list, skills);
						event.player.wait();
					} else {
						switchToAuto();
					}
					('step 1');
					var map = event.result || result;
					if (map && map.skills && map.skills.length) {
						for (var s of map.skills) {
							player.addSkillLog(s);
						}
						delete player.storage.xjzh_sanguo_daoshu;
						player.checkConflict();
						player.checkMarks();
					}
				},
				subSkill: {
					damage: {
						trigger: {
							player: 'damageAfter',
						},
						forced: true,
						_priority: 12,
						firstDo: true,
						audio: 'ext:仙家之魂/audio/skill:1',
						content() {
							'step 0';
							player.draw();
							('step 1');
							player.showCards(result[0]);
							event.cards = result.cards[0];
							cardnames = lib.translate[event.cards.name];
							player.popup(cardnames);
							('step 2');
							var list = player.storage.xjzh_sanguo_xinghun;
							var skills = [];
							for (var i = 0; i < list.length; i++) {
								var str = lib.translate[list[i] + '_info'];
								if (str.includes(cardnames)) skills.push(list[i]);
							}
							var skills2 = player.skills.slice(0);
							for (var i = 0; i < skills2.length; i++) {
								skills.remove(skills2[i]);
							}
							if (skills.length) {
								var link = skills.randomGet(),
									characters;
								for (var i in lib.character) {
									var info = lib.character[i];
									if (info[3].some((s) => link.includes(s))) {
										characters = i;
									}
								}
								var cardname = 'xjzh_sanguo_xinghu_card_' + characters;
								lib.card[cardname] = {
									fullimage: true,
									image: 'character:' + characters,
								};
								lib.translate[cardname] = lib.translate[link];
								player.$gain2(game.createCard(cardname, '', ''));
								player.addSkillLog(link);
								player.$fullscreenpop(lib.translate[link], 'thunder');
							} else {
								player.say('没有符合条件的技能');
							}
						},
						ai: {
							maixie(player) {
								if (player.hp < 2) return false;
								return true;
							},
						},
					},
				},
			},
			xjzh_sanguo_qixing: {
				trigger: {
					player: ['damageEnd', 'recoverEnd'],
				},
				forced: true,
				_priority: 3,
				marktext: '星',
				intro: {
					name: '七星',
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					var cards = player.getExpansions('xjzh_sanguo_qixing');
					if (cards.length) player.loseToDiscardpile(cards);
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				group: ['xjzh_sanguo_qixing_dying'],
				content() {
					'step 0';
					var cards = get.cards(3);
					var next = player.chooseCardButton(cards);
					next.set('filterButton', function (button) {
						var player = _status.event.player;
						var cardx = player.getExpansions('xjzh_sanguo_qixing');
						if (!cardx.length) return true;
						var list = [];
						for (var i of cardx) {
							list.push(i.name);
						}
						return !list.includes(button.link.name);
					});
					next.set('ai', function (button) {
						return get.value(button.link); //QQQ
					});
					('step 1');
					if (result.links?.length) {
						player.addToExpansion(result.links, 'gain2', player).gaintag.add('xjzh_sanguo_qixing');
					}
				},
				subSkill: {
					dying: {
						trigger: {
							player: 'dying',
						},
						forced: true,
						_priority: 10,
						audio: 'xjzh_sanguo_qixing',
						filter(event, player) {
							return player.getExpansions('xjzh_sanguo_qixing').length >= 7;
						},
						content() {
							var cards = player.getExpansions('xjzh_sanguo_qixing');
							player.gain(cards, 'gain2', player);
							player.recoverTo(player.maxHp);
						},
					},
				},
			},
			xjzh_sanguo_luanzheng: {
				mark: true,
				marktext: '乱',
				intro: {
					content: 'limited',
				},
				init(player, skill) {
					player.storage[skill] = false;
				},
				forced: true,
				group: ['xjzh_sanguo_luanzheng_zhu'],
				audio: 'ext:仙家之魂/audio/skill:2',
				trigger: {
					player: 'enterGame',
					global: 'gameStart',
				},
				filter(event, player) {
					if (player.identity == 'zhong') return false;
					if (player.identity == 'nei') return false;
					return get.mode() == 'identity';
				},
				content() {
					'step 0';
					player.awakenSkill(event.name);
					player.storage.xjzh_sanguo_luanzheng = true;
					('step 1');
					var list = game.filterPlayer(function (current) {
						return current != player && current.identity != 'fan';
					});
					if (list.length) {
						var target = list.randomGet();
					} else {
						event.finish();
					}
					var id = target.identity;
					if (player.identity == 'zhu') {
						target.identity = 'zhu';
						target.setIdentity('zhu');
						target.showIdentity();
						target.update();
						game.zhu.identity = id;
						game.zhu.setIdentity(id);
						game.zhu.showIdentity();
						game.zhu = target;
						game.zhu.update();
					} else {
						player.identity = 'nei';
						player.setIdentity('nei');
						player.showIdentity();
						player.update();
					}
				},
				subSkill: {
					zhu: {
						trigger: {
							global: ['gameStart', 'zhuUpdate'],
						},
						audio: 'ext:仙家之魂/audio/skill:2',
						forced: true,
						popup: false,
						_priority: -1,
						filter(event, player) {
							return (player.storage.xjzh_sanguo_luanzheng = false);
						},
						content() {
							var list = [];
							var zhu = get.zhu(player);
							if (zhu && zhu != player && zhu.skills) {
								for (var i = 0; i < zhu.skills.length; i++) {
									if (lib.skill[zhu.skills[i]].zhuSkill) {
										list.push(zhu.skills[i]);
									}
								}
							}
							player.addAdditionalSkill('xjzh_sanguo_luanzheng_zhu', list);
							player.storage.zhuSkill_xjzh_sanguo_luanzheng_zhu = list;
						},
					},
				},
			},
			xjzh_sanguo_chanxian: {
				trigger: {
					target: 'useCardToTarget',
				},
				audio: 'ext:仙家之魂/audio/skill:3',
				filter(event, player) {
					if (lib.config.extension_仙家之魂_xjzh_jiexiantupo) {
						return get.tag(event.card, 'damage') && event.targets.length == 1;
					}
					if (game.players.length < 3) return false;
					return get.tag(event.card, 'damage');
				},
				group: ['xjzh_sanguo_chanxian_target'],
				forced: true,
				content() {
					'step 0';
					player.chooseTarget('谗陷:请选择一个额外的目标', function (card, player, target) {
						return player != target && trigger.player != target;
					}).ai = function (target) {
						if (trigger.card.name == 'huogong') {
							if (target.countCards('e', { subtype: 'equip2' }) && target.getCards('e') == 'tengjia') return 2;
							if (target.countCards('h') <= 0) return -5;
							if (target.hp <= 1) return Math.random < 0.3;
							return 0.5;
						}
						if (trigger.card.name == 'juedou') {
							if (target.hp <= 1) return Math.random < 0.3;
							return 0.5;
						}
						if (trigger.card.name == 'guohe' || trigger.card.name == 'shunshou') {
							if (target.countCards('h') == 0) return Math.random < 0.3;
							return 1;
						}
					};
					('step 1');
					if (result.bool) {
						for (var i = 0; i < result.targets.length; i++) {
							trigger.targets.push(result.targets[i]);
							game.log(result.targets[i], '成为了额外目标');
							trigger.player.line(trigger.targets);
						}
						event.finish();
					} else {
						player.chooseToDiscard('谗陷:请弃置一张牌令' + get.translation(trigger.card) + '无效', 'he').ai = function (card) {
							if (get.attitude(player, trigger.player) < 0) return 6 - get.value(card);
						};
					}
					('step 2');
					if (result.bool) {
						trigger.cancel();
					}
				},
				ai: {
					expose: 0.2,
					effect: {
						target(card, player, target) {
							if (game.players.length < 3) return;
							if (card.name == 'juedou' || card.name == 'guohe' || card.name == 'shunshou' || card.name == 'huogong') return 0.5;
						},
					},
				},
				subSkill: {
					target: {
						trigger: {
							global: 'useCardToTarget',
						},
						audio: 'xjzh_sanguo_chanxian',
						filter(event, player) {
							if (lib.config.extension_仙家之魂_xjzh_jiexiantupo) {
								return get.tag(event.card, 'damage') && event.targets.length == 1 && event.target != player;
							}
							return false;
						},
						prompt(event, player) {
							return '' + get.translation(event.player) + '对' + get.translation(event.target) + '使用了' + get.translation(event.card) + ',是否发动〖谗陷〗将目标改为' + get.translation(player) + '？';
						},
						logTarget: 'target',
						check(event, player) {
							return get.attitude(player, event.player) >= 2;
						},
						content() {
							trigger.targets.length = 0;
							trigger.parent.triggeredTargets1.length = 0;
							trigger.targets.push(player);
						},
					},
					ai: {
						expose: 0.2,
					},
				},
			},
			xjzh_sanguo_shichong: {
				trigger: {
					global: 'gameDrawBegin',
					player: 'enterGame',
				},
				forced: true,
				limited: true,
				mark: true,
				marktext: '宠',
				intro: {
					content: 'limited',
				},
				group: ['xjzh_sanguo_shichong_give'],
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					'step 0';
					player.awakenSkill(event.name);
					('step 1');
					event.num = 0;
					for (var i of game.players) {
						if (i == player) continue;
						event.num += i.maxHp;
					}
					('step 2');
					event.num = Math.floor(
						event.num /
						game.countPlayer(function (current) {
							return current != player;
						})
					);
					player.maxHp = event.num;
					player.hp = event.num;
					player.update();
				},
				subSkill: {
					give: {
						trigger: {
							global: 'phaseDrawAfter',
						},
						audio: 'xjzh_sanguo_shichong',
						filter(event, player) {
							if (lib.config.extension_仙家之魂_xjzh_jiexiantupo) {
								return event.player != player && event.player.countCards('he') && !player.storage.xjzh_sanguo_shichong;
							}
							return false;
						},
						forced: true,
						content() {
							'step 0';
							trigger.player.addExpose(0.2);
							trigger.player.chooseCard(1, '交给' + get.translation(player) + '一张牌跳过弃牌阶段,否则跳过出牌阶段', 'he').ai = function (card) {
								var target = status.event.player;
								if (targetr.countCards('h') <= targetr.getHandcardLimit()) return [-5, 5];
								if (targetr.countCards('h') > targetr.getHandcardLimit()) {
									if (get.attitude(targetr, player) < 0) {
										return 4 - get.value(card);
									} else {
										return get.value(card);
									}
								}
							};
							('step 1');
							if (result.bool) {
								player.gain(result.cards, 'giveAuto', trigger.player);
								trigger.player.skip('phaseDiscard');
							} else {
								trigger.player.skip('phaseUse');
							}
						},
					},
				},
			},
			xjzh_sanguo_baima: {
				trigger: {
					global: 'equipAfter',
				},
				mark: true,
				marktext: '白',
				intro: {
					name: '白马义从',
					mark(dialog, content, player) {
						let num = Array.from(ui.cardPile.childNodes).filter((card) => ['equip3', 'equip4'].includes(get.subtype(card))).length;
						return `牌堆剩余${get.cnNumber(num)}张坐骑牌`;
					},
				},
				forced: true,
				filter(event, player) {
					return event.card && ['equip3', 'equip4'].includes(get.subtype(event.card));
				},
				async content(event, trigger, player) {
					await player.draw(2);
					if (!Array.from(ui.cardPile.childNodes).filter((card) => ['equip3', 'equip4'].includes(get.subtype(card))).length) {
						player.phase('nodelay');
					}
				},
			},
			xjzh_sanguo_yicong: {
				mark: true,
				marktext: '义',
				init(player) {
					player.disableEquip(3);
					player.disableEquip(4);
				},
				onremove(player, skill) {
					player.enableEquip(3);
					player.enableEquip(4);
				},
				intro: {
					name: '白马义从',
					content(storage, player) {
						return `进攻距离:${game.countPlayer((current) => current.getEquips(4).length) + 1}<br>防御距离:${game.countPlayer((current) => current.getEquips(3).length) + 1}`;
					},
				},
				mod: {
					globalFrom(from, to, distance) {
						return distance - game.countPlayer((current) => current.getEquips(4).length);
					},
					globalTo(from, to, distance) {
						return distance + game.countPlayer((current) => current.getEquips(3).length);
					},
				},
				trigger: { player: 'enableEquipBefore' },
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:4',
				filter(event, player) {
					return event.slots.some((item) => ['equip3', 'equip4'].includes(item));
				},
				async content(event, trigger, player) {
					while (trigger.slots.some((item) => ['equip3', 'equip4'].includes(item))) trigger.slots.removeArray(['equip3', 'equip4']);
					game.log(player, '的坐骑栏已废除且无法回复');
				},
				ai: {
					threaten: 0.8,
				},
			},
			xjzh_sanguo_muma: {
				trigger: {
					global: 'loseAfter',
				},
				filter(event, player) {
					if (!event.cards || !event.cards.length) return false;
					if (event.type == 'use') return false;
					if (!game.hasPlayer((current) => current.getEquips())) return false;
					let cards = event.cards.filter((card) => {
						if (!['equip3', 'equip4'].includes(get.subtype(card))) return false;
						if (!game.hasPlayer((current) => current.canEquip(card))) return false;
						return true;
					});
					if (!cards.length) return false;
					return cards.filterInD('d').length;
				},
				forced: true,
				_priority: 10,
				async content(event, trigger, player) {
					let cards = trigger.cards.filter((card) => {
						if (!['equip3', 'equip4'].includes(get.subtype(card))) return false;
						if (!game.hasPlayer((current) => current.canEquip(card))) return false;
						return get.position(card) == 'd';
					}),
						str = `〖募马〗:选择一张坐骑牌令一名其他角色装备之`;
					const { links } = await player
						.chooseCardButton(cards, 1, str)
						.set('ai', (button) => {
							return get.equipValueNumber(button.link);
						})
						.forResult();

					if (links) {
						const { targets } = await player
							.chooseTarget(str, true, (card, player, target) => {
								if (!target.canEquip(links[0])) return false;
								return player != target;
							})
							.set('ai', (target) => {
								return get.attitude(player, target);
							})
							.forResult();

						if (targets) {
							targets[0].equip(links[0]);
						}
					}
				},
			},
			xjzh_sanguo_yuewu: {
				enable: 'phaseUse',
				usable: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				prompt(event, player) {
					return '选择两个目标令其各自获得对方手牌中没有的花色,令其依次弃置你选择的花色并视为对对方使用一张决斗';
				},
				multitarget: true,
				multiline: true,
				intro: {
					content(content, player) {
						var str = get.translation(player.storage.xjzh_sanguo_yuewu);
						if (str) return '当' + str + '的牌因弃置进入弃牌堆,你可以使用之';
						return '';
					},
				},
				check(card, target, player) {
					return get.attitude(player, target) <= 0;
				},
				filterTarget(card, player, target) {
					return player != target && target.countCards('h');
				},
				selectTarget: 2,
				targetprompt: ['先出决斗', '后出决斗'],
				content() {
					'step 0';
					var cards0 = targets[0].getCards('h');
					var cards1 = targets[1].getCards('h');
					var card0 = [];
					var card1 = [];
					for (var i = 0; i < cards0.length; i++) {
						if (!targets[1].countCards('h', { suit: cards0[i].suit })) card0.push(cards0[i]);
					}
					for (var j = 0; j < cards1.length; j++) {
						if (!targets[0].countCards('h', { suit: cards1[j].suit })) card1.push(cards1[j]);
					}
					if (card0.length) targets[1].gain(card0, 'log', 'draw');
					if (card1.length) targets[0].gain(card1, 'log', 'draw');
					('step 1');
					var card0 = targets[0].getCards('h');
					var card1 = targets[1].getCards('h');
					var dialog = ui.create.dialog('hidden');
					if (card0.length) {
						dialog.add('' + get.translation(targets[0]) + '的手牌');
						dialog.add([card0, 'vcard']);
					}
					if (card1.length) {
						dialog.add('' + get.translation(targets[1]) + '的手牌');
						dialog.add([card1, 'vcard']);
					}
					var suits = [];
					for (var i of card0) {
						suits.add(i.suit);
					}
					for (var j of card1) {
						suits.add(j.suit);
					}
					player
						.chooseControl(suits)
						.set('ai', function () {
							return suits.randomGet();
						})
						.set('dialog', dialog);
					('step 2');
					if (result.control) {
						suitx = result.control;
						var card0 = targets[0].getCards('h', function (card) {
							return card.suit == suitx;
						});
						var card1 = targets[1].getCards('h', function (card) {
							return card.suit == suitx;
						});
						if (card0.length) {
							if (!lib.config.extension_仙家之魂_xjzh_jiexiantupo) {
								targets[0].discard(card0);
							} else {
								player.gain(card0, targets[0], 'draw');
							}
							targets[0].useCard({ name: 'juedou' }, 'nowuxie', targets[1], 'noai');
						}
						if (card1.length) {
							if (!lib.config.extension_仙家之魂_xjzh_jiexiantupo) {
								targets[1].discard(card1);
							} else {
								player.gain(card1, targets[1], 'draw');
							}
							targets[1].useCard({ name: 'juedou' }, 'nowuxie', targets[0], 'noai');
						}
					}
					('step 3');
					if ((player.storage.xjzh_sanguo_yuewu = suitx)) delete player.storage.xjzh_sanguo_yuewu;
					if ((player.storage.xjzh_sanguo_yuehun = suitx)) delete player.storage.xjzh_sanguo_yuehun;
					if (!lib.config.extension_仙家之魂_xjzh_jiexiantupo) {
						player.storage.xjzh_sanguo_yuewu = suitx;
						player.storage.xjzh_sanguo_yuehun = suitx;
						player.markSkill('xjzh_sanguo_yuewu');
					}
				},
				ai: {
					order: 12,
					result: {
						target: -1,
					},
					expose: 0.4,
					threaten: 3,
				},
			},
			xjzh_sanguo_yuehun: {
				trigger: { global: 'discardAfter' },
				filter(event, player) {
					var cards = event.cards.filter(function (card) {
						if (!lib.config.extension_仙家之魂_xjzh_jiexiantupo) {
							if (card.suit != player.storage.xjzh_sanguo_yuehun) return false;
						}
						if (get.position(card) != 'd') return false;
						return player.hasUseTarget(card);
					});
					return cards.length;
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					'step 0';
					'step 1';
					var cards = trigger.cards.filter(function (card) {
						if (!lib.config.extension_仙家之魂_xjzh_jiexiantupo) {
							if (card.suit != player.storage.xjzh_sanguo_yuehun) return false;
						}
						if (get.position(card) != 'd') return false;
						return player.hasUseTarget(card);
					});
					event.use = [];
					if (cards.length) {
						event.use = cards;
					}
					('step 2');
					if (event.use.length) {
						var str = '〖月魂〗:选择一张牌使用之?';
						player
							.chooseCardButton(event.use, 1, str)
							.set('filterButton', function (button) {
								return _status.event.player.hasUseTarget(button.link);
							})
							.set('ai', function (button) {
								var player = _status.event.player;
								if (player.hasUseTarget(button.link)) return player.getUseValue(button.link);
								return 0;
							});
					} else {
						event.finish();
					}
					('step 3');
					if (result.links?.length) {
						if (player.hasUseTarget(result.links[0])) {
							player.chooseUseTarget(result.links[0], true);
						}
					}
				},
			},
			xjzh_sanguo_tiance: {
				enable: 'phaseUse',
				usable(skill, player) {
					if (game.xjzhAchi.hasAchi('再兴炎汉', 'character')) return 2;
					return 1;
				},
				filterCard: false,
				selectCard: -1,
				filterTarget: true,
				selectTarget: -1,
				multitarget: true,
				multiline: true,
				filter(event, player) {
					let num;
					if (game.xjzhAchi.hasAchi('再兴炎汉', 'character')) num = 2;
					else num = 1;
					if (get.skillCount('xjzh_sanguo_tiance', player) >= num) return false;
					return true;
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					'step 0';
					event.forceDie = true;
					event.cards = [];
					for (var i of targets) {
						var cards = i.getCards('hej');
						i.lose(cards, ui.special, 'visible');
						i.$throw(cards, 1000);
						event.cards = event.cards.slice(0).concat(cards);
					}
					('step 1');
					game.cardsGotoOrdering(event.cards);
					('step 2');
					var dialog = ui.create.dialog('天策', cards, true);
					_status.dieClose.push(dialog);
					dialog.videoId = lib.status.videoId++;
					game.addVideo('cardDialog', null, ['天策', get.cardsInfo(cards), dialog.videoId]);
					game.broadcast(
						function (cards, id) {
							var dialog = ui.create.dialog('天策', cards, true);
							_status.dieClose.push(dialog);
							dialog.videoId = id;
						},
						cards,
						dialog.videoId
					);
					event.dialog = dialog;
					event.num = 0;
					targetx = targets[event.num];
					('step 3');
					if (event.dialog.buttons.length > 1) {
						var next = targetx.chooseButton(true, function (button) {
							return get.value(button.link, _status.event.player);
						});
						next.set('dialog', event.preResult);
						next.set('closeDialog', false);
						next.set('dialogdisplay', true);
					} else {
						event.directButton = event.dialog.buttons[0];
					}
					('step 4');
					var dialog = event.dialog;
					var card;
					if (event.directButton) {
						card = event.directButton.link;
					} else {
						for (var i of dialog.buttons) {
							if (i.link == result.links[0]) {
								card = i.link;
								break;
							}
						}
						if (!card) card = event.dialog.buttons[0].link;
					}
					var button;
					for (var i = 0; i < dialog.buttons.length; i++) {
						if (dialog.buttons[i].link == card) {
							button = dialog.buttons[i];
							button.querySelector('.info').innerHTML = (function (targetx) {
								if (targetx._tempTranslate) return targetx._tempTranslate;
								var name = targetx.name;
								if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
								return get.translation(name);
							})(targetx);
							dialog.buttons.remove(button);
							break;
						}
					}
					var capt = get.translation(targetx) + '选择了' + get.translation(button.link);
					if (card) {
						targetx.gain(card, 'visible');
						targetx.$gain2(card);
						game.broadcast(
							function (card, id, name, capt) {
								var dialog = get.idDialog(id);
								if (dialog) {
									dialog.content.firstChild.innerHTML = capt;
									for (var i = 0; i < dialog.buttons.length; i++) {
										if (dialog.buttons[i].link == card) {
											dialog.buttons[i].querySelector('.info').innerHTML = name;
											dialog.buttons.splice(i--, 1);
											break;
										}
									}
								}
							},
							card,
							dialog.videoId,
							(function (targetx) {
								if (targetx._tempTranslate) return targetx._tempTranslate;
								var name = targetx.name;
								if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
								return get.translation(name);
							})(targetx),
							capt
						);
					}
					dialog.content.firstChild.innerHTML = capt;
					game.addVideo('dialogCapt', null, [dialog.videoId, dialog.content.firstChild.innerHTML]);
					game.log(targetx, '选择了', button.link);
					('step 5');
					if (event.dialog.buttons.length) {
						if (event.num < game.players.length - 1) {
							event.num++;
						} else {
							event.num = 0;
						}
						targetx = targets[event.num];
						event.goto(3);
					}
					('step 6');
					var dialog = event.dialog;
					dialog.close();
					_status.dieClose.remove(dialog);
					game.broadcast(function (id) {
						var dialog = get.idDialog(id);
						if (dialog) {
							dialog.close();
							_status.dieClose.remove(dialog);
						}
					}, event.dialog.videoId);
					game.addVideo('cardDialog', null, event.dialog.videoId);
				},
				ai: {
					order: 4.5,
					threaten: 2,
					result: {
						player(player, target) {
							var num = 0;
							var list = [];
							var listnum = 0;
							for (var i of game.players) {
								list.push('0');
							}
							for (var i of game.players) {
								num += i.countCards('hej');
							}
							var max = function () {
								for (var i = 0; i < list.length; i++) {
									if (list[i] > num) return true;
								}
								return false;
							};
							while (!max()) {
								num--;
								list[listnum % game.players.length]++;
								listnum++;
							}
							return num - player.countCards('h');
						},
						target(player, target) {
							var num = 0;
							var list = [];
							var listnum = 0;
							for (var i of game.players) {
								list.push('0');
							}
							for (var i of game.players) {
								num += i.countCards('hej');
							}
							var max = function () {
								for (var i = 0; i < list.length; i++) {
									if (list[i] > num) return true;
								}
								return false;
							};
							while (!max()) {
								num--;
								list[listnum % game.players.length]++;
								listnum++;
							}
							for (var i of game.players) {
								if (target == i) var nu = i;
							}
							return list[nu - 1] - target.countCards('hej');
						},
					},
				},
			},
			xjzh_sanguo_tianming: {
				trigger: {
					target: 'useCardToTarget',
				},
				usable(skill, player) {
					if (game.xjzhAchi.hasAchi('再兴炎汉', 'character')) return 2;
					return 1;
				},
				filter(event, player) {
					let num;
					if (game.xjzhAchi.hasAchi('再兴炎汉', 'character')) {
						num = 2;
					} else {
						num = 1;
					}
					if (get.xjzh_countSkill('xjzh_sanguo_tianming', player) >= num) return false;
					if (event.player == player) return false;
					return game.hasPlayer(function (current) {
						return current.countCards('h');
					});
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				check(event, player) {
					return game.hasPlayer(function (current) {
						return current.countCards('h');
					});
				},
				prompt(event, player) {
					return '〖天命〗:' + get.translation(player) + '成为了' + get.translation(event.player) + '使用的' + get.translation(event.card) + '的目标,是否选择一名角色与其交换手牌？';
				},
				content() {
					'step 0';
					player
						.chooseTarget('〖天命〗:选择一名角色与其交换手牌', function (card, player, target) {
							return target != player && (target.countCards('h') || player.countCards('h'));
						})
						.set('ai', function (target) {
							var player = _status.event.player;
							var att = get.attitude(player, target);
							var hs = player.getCards('h');
							var hs2 = target.countCards('h');
							var num = 0;
							for (var i = 0; i < hs.length; i++) {
								if (8 - get.value(hs[i]) > 0) num++;
							}
							if (hs.length - hs2 > 0) return att > 0;
							if (hs.length - hs2 < 0) return att <= 0;
							return num;
						});
					('step 1');
					if (result.targets?.length) {
						player.swapHandcards(result.targets[0]);
						event.target = result.targets[0];
					} else {
						event.finish();
					}
					('step 2');
					var num = player.countCards('h') - event.target.countCards('h');
					if (num == 0) return;
					if (num > 0) {
						var num2 = game.countPlayer(function (current) {
							return current.group == event.target.group;
						});
						if (num2 > 0) event.target.draw(num2);
					} else {
						var num2 = game.countPlayer(function (current) {
							return current.group == player.group;
						});
						if (num2 > 0) player.draw(num2);
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							var players = game.filterPlayer(function (current) {
								return current != player;
							});
							var num = game.filterPlayer(function (current) {
								return current.group == player.group;
							});
							var num2 = 0;
							for (var i of players) {
								if (i.countCards('h') > player.countCards('h')) num2++;
								if (i.countCards('h') <= player.countCards('h')) num2 -= 1;
							}
							return num + num2;
						},
					},
				},
			},
			xjzh_sanguo_moubian: {
				trigger: {
					global: 'gameDrawBegin',
					player: 'enterGame',
				},
				forced: true,
				charlotte: true,
				_priority: Infinity,
				firstDo: true,
				audio: 'ext:仙家之魂/audio/skill:1',
				group: ['xjzh_sanguo_moubian_damage'],
				content() {
					var group = ['wei', 'shu', 'wu', 'qun'].randomGet();
					player.changeGroup(group);
					player.group = group;
					player.update();
				},
				subSkill: {
					damage: {
						trigger: {
							player: 'damageBegin1',
						},
						forced: true,
						_priority: 100,
						audio: 'ext:仙家之魂/audio/skill:1',
						filter(event, player) {
							return event.source;
						},
						content() {
							'step 0';
							if (trigger.source.group == player.group) {
								trigger.changeToZero();
								game.log(trigger.source, '无法对', player, '造成伤害');
								event.finish();
								return;
							} else {
								var cards = get.cards()[0];
								player.showCards(cards);
								event.card = cards;
							}
							('step 1');
							var typex = get.type(event.card);
							trigger.source
								.chooseToDiscard(`〖谋变〗:是否弃置一张类型为${get.translation(typex)}的手牌,否则${get.translation(player)}免疫此次伤害`, 1, 'h', function (card) {
									return get.type(card) == typex;
								})
								.set('ai', function (card) {
									var eff = get.damageEffect(trigger.player, trigger.source, trigger.source);
									var att = get.attitude(trigger.player, trigger.source);
									if (eff) {
										if (att <= 0) return 8 - get.value(card);
									}
									return 0;
								})
								.set('typex', typex);
							('step 2');
							if (!result.bool) {
								player.gain(event.card, 'gain2');
								trigger.changeToZero();
								if (!game.xjzhAchi.hasAchi('再兴炎汉', 'character')) return;
								if (player.hasUseTarget(event.card)) {
									player.chooseToUse(event.card);
								}
							}
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (!target.hasFriend()) return;
									var group = target.group;
									var group2 = player.group;
									if (get.tag(card, 'damage')) {
										if (group == player.group) return [0, 0];
										return 0.5;
									}
								},
							},
						},
					},
				},
			},
			xjzh_sanguo_zhongxing: {
				trigger: {
					global: 'dieBefore',
				},
				forced: true,
				charlotte: true,
				_priority: Infinity,
				firstDo: true,
				mode: ['identity'],
				init(player) {
					var style1 = document.createElement('style');
					style1.innerHTML = ".player .identity[data-color='YHan'],";
					style1.innerHTML += "div[data-nature='YHan'],";
					style1.innerHTML += "span[data-nature='YHan'] {text-shadow: black 0 0 1px,rgba(255, 0, 204,1) 0 0 2px,rgba(255, 0, 204,1) 0 0 5px,rgba(255, 0, 204,1) 0 0 10px,rgba(255, 0, 204,1) 0 0 10px}";
					style1.innerHTML += "div[data-nature='YHanm'],";
					style1.innerHTML += "span[data-nature='YHanm'] {text-shadow: black 0 0 1px,rgba(255,128,0,1) 0 0 2px,rgba(255,128,0,1) 0 0 5px,rgba(255,128,0,1) 0 0 5px,rgba(255,128,0,1) 0 0 5px,black 0 0 1px;}";
					style1.innerHTML += "div[data-nature='YHanmm'],";
					style1.innerHTML += "span[data-nature='YHanmm'] {text-shadow: black 0 0 1px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,rgba(255,128,204,1) 0 0 2px,black 0 0 1px;}";
					document.head.appendChild(style1);
					lib.group.add('YHan');
					lib.translate.YHan = '汉';
					lib.translate.YHan2 = '汉';
					lib.groupnature.YHan = 'YHan';
					var tenUi = document.createElement('style');
					tenUi.innerHTML = ".player>.camp-zone[data-camp='YHan']>.camp-back {background: linear-gradient(to bottom, rgb(204,0,204), rgb(136,0,204), rgb(102,0,204));}";
					tenUi.innerHTML += ".player>.camp-zone[data-camp='YHan']>.camp-name {text-shadow: 0 0 5px rgb(255, 0, 204), 0 0 10px rgb(255, 0, 204), 0 0 15px rgb(255, 0, 204);}";
					document.head.appendChild(tenUi);
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					if (trigger.player != player && game.zhu == trigger.player) {
						if (get.maxGroupx(player) == true && !player.hasSkill('xjzh_sanguo_zhongxing_off')) {
							player.$skill('炎汉中兴', 'legend', 'fire');
							player.addSkill('xjzh_sanguo_zhongxing_off');
							var targets = game.filterPlayer(function (current) {
								return current != player && current.group == player.group;
							});
							var targets2 = game.filterPlayer(function (current) {
								return current.group != player.group;
							});
							player.identity = 'zhu';
							player.setIdentity('zhu');
							player.showIdentity();
							game.zhu.identity = 'fan';
							game.zhu.setIdentity('fan');
							game.zhu = player;
							game.zhu.showIdentity();
							game.zhu.update();
							for (var i = 0; i < targets.length; i++) {
								targets[i].identity = 'zhong';
								targets[i].showIdentity();
								targets[i].update();
							}
							for (var i = 0; i < targets2.length; i++) {
								targets2[i].identity = 'fan';
								targets2[i].showIdentity();
								targets2[i].update();
							}
							var targets3 = game.filterPlayer(function (current) {
								return current.identity == 'zhong';
							});
							for (var i = 0; i < targets3.length; i++) {
								targets[i].changeGroup('YHan');
								targets[i].update();
							}
							player.changeGroup('YHan');
							if (game.xjzhAchi.hasAchi('再兴炎汉', 'character')) {
								player.gainMaxHp();
								player.recoverTo(player.maxHp);
							}
							player.update();
						}
					} else if (trigger.player == player && game.zhu != player) {
						player.$skill('炎汉中兴', 'legend', 'fire');
						game.over(game.me.identity != player.identity);
					}
				},
				subSkill: {
					off: {},
				},
				ai: {
					threaten: 3.5,
				},
			},
			xjzh_sanguo_busuan: {
				enable: 'phaseUse',
				usable: 1,
				mod: {
					ignoredHandcard(card, player) {
						if (!player.hasSkill('xjzh_sanguo_busuan')) return;
						if (!get.is.playerNames(player, 'xjzh_sanguo_guanlu')) return;
						var cards = ['xjzh_card_chunfenghuayu', 'xjzh_card_zhizuijinmi', 'xjzh_card_shenjimiaosuan', 'xjzh_card_tanhuayixian', 'xjzh_card_fanyunfuyu'];
						if (cards.includes(card.name)) return true;
					},
					aiValue(player, card, num) {
						if (!player.hasSkill('xjzh_sanguo_busuan')) return;
						if (!get.is.playerNames(player, 'xjzh_sanguo_guanlu')) return;
						var cards = ['xjzh_card_chunfenghuayu', 'xjzh_card_zhizuijinmi', 'xjzh_card_shenjimiaosuan', 'xjzh_card_tanhuayixian', 'xjzh_card_fanyunfuyu'];
						if (cards.includes(card.name)) return num + 10;
					},
					canBeGained(card, player, target, name) {
						if (!player.hasSkill('xjzh_sanguo_busuan')) return;
						if (!get.is.playerNames(player, 'xjzh_sanguo_guanlu')) return;
						var cards = ['xjzh_card_chunfenghuayu', 'xjzh_card_zhizuijinmi', 'xjzh_card_shenjimiaosuan', 'xjzh_card_tanhuayixian', 'xjzh_card_fanyunfuyu'];
						if (cards.includes(card.name)) return false;
					},
					canBeDiscarded(card, player, target, name) {
						if (!player.hasSkill('xjzh_sanguo_busuan')) return;
						if (!get.is.playerNames(player, 'xjzh_sanguo_guanlu')) return;
						var cards = ['xjzh_card_chunfenghuayu', 'xjzh_card_zhizuijinmi', 'xjzh_card_shenjimiaosuan', 'xjzh_card_tanhuayixian', 'xjzh_card_fanyunfuyu'];
						if (cards.includes(card.name)) return false;
					},
					cardDiscardable(card, player, name) {
						if (!player.hasSkill('xjzh_sanguo_busuan')) return;
						if (!get.is.playerNames(player, 'xjzh_sanguo_guanlu')) return;
						var cards = ['xjzh_card_chunfenghuayu', 'xjzh_card_zhizuijinmi', 'xjzh_card_shenjimiaosuan', 'xjzh_card_tanhuayixian', 'xjzh_card_fanyunfuyu'];
						if (cards.includes(card.name)) return false;
					},
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				init(player) {
					game.addGlobalSkill('xjzh_card_fanyunfuyu_skill');
				},
				getCards_guanlu: ['xjzh_card_chunfenghuayu', 'xjzh_card_zhizuijinmi', 'xjzh_card_shenjimiaosuan', 'xjzh_card_tanhuayixian', 'xjzh_card_fanyunfuyu'],
				group: ['xjzh_sanguo_busuan_evt', 'xjzh_sanguo_busuan_use'],
				content() {
					'step 0';
					var cards = lib.skill.xjzh_sanguo_busuan.getCards_guanlu.slice(0);
					var card = cards.randomGet();
					player.gain(game.createCard(card, null, null), 'gain2', 'log', player)._triggered = null;
					('step 1');
					var cards = lib.skill.xjzh_sanguo_busuan.getCards_guanlu.slice(0);
					var num = player.countCards('h', function (card) {
						return !cards.includes(card.name);
					});
					if (!num) return;
					var list = [];
					for (var i = 0; i < lib.inpile.length; i++) {
						var name = lib.inpile[i];
						var type = get.type(name);
						var subtype = get.subtype(name);
						if (name == 'sha') {
							for (var j of lib.inpile_nature) list.push([type, '', name, j]);
						}
						if (type != 'xjzh_danyao' && type != 'equip') list.push(name);
					}
					if (!list.length) return;
					var next = player.chooseButton(['选择至多两张类型不一致的牌', [list, 'vcard']]);
					next.set('ai', function (button) {
						var card = { name: button.link[2] };
						return 12 - get.value(card);
					});
					next.set('complexSelect', true);
					next.set('selectButton', function () {
						var player = _status.event.player;
						var cardx = lib.skill.xjzh_sanguo_busuan.getCards_guanlu.slice(0);
						var numx = player.countCards('h', function (card) {
							return !cards.includes(card.name);
						});
						return [1, Math.min(numx, 2)];
					});
					next.set('filterButton', function (button) {
						if (!ui.selected.buttons.length) return true;
						var numbers = 0;
						var selected = ui.selected.buttons;
						for (var i of selected) {
							if (typeof i.link == 'number') {
								numbers++;
							} else {
								if (typeof button.link != 'number') {
									if (get.type(button.link[2]) == get.type(i.link[2])) return false;
								}
							}
						}
						if (typeof button.link == 'number') {
							if (numbers >= 1) return false;
						}
						return true;
					});
					('step 2');
					if (result.links?.length) {
						event.cards = result.links.slice(0);
						var cards = lib.skill.xjzh_sanguo_busuan.getCards_guanlu.slice(0);
						player
							.chooseCard(true, event.cards.length, '〖卜算〗:选择至多' + get.translation(event.cards.length) + '张牌', function (card) {
								return !cards.includes(card.name);
							})
							.set('ai', function (card) {
								return 6 - get.value(card);
							});
					} else {
						event.finish();
						return;
					}
					('step 3');
					//锁定技,出牌阶段限一次、弃牌阶段弃置至少两张牌时、成为其他角色锦囊牌的目标时、受到【杀】的伤害时,你随机获得一张【春风化雨】、【翻云覆雨】、【纸醉金迷】、【昙花一现】、【神机妙算】,你选择从牌堆获得至多2张类型不一致的非装备牌,并将等量手牌洗入牌堆(以上五张牌不计入手牌上限且无法被弃置、获得)
					if (result.bool) {
						var cards = [];
						var list = event.cards;
						for (var i of event.cards) {
							var card = get.cardPile(function (cardx) {
								return !cards.includes(cardx) && cardx.name == i[2]; //QQQ
							});
							if (card) {
								cards.push(card);
							} else {
								cards.push(game.createCard(i[2])); //QQQ
							}
						}
						if (cards.length) {
							player.gain(cards, 'gain2', 'log');
						}
						var cards2 = result.cards.randomSort();
						while (cards2.length) {
							var num = get.rand(ui.cardPile.childElementCount);
							var card2 = cards2.pop();
							card2.fix();
							ui.cardPile.insertBefore(card2, ui.cardPile.childNodes[num]);
						}
					}
				},
				ai: {
					order: 8,
					result: {
						player: 1,
					},
				},
				subSkill: {
					evt: {
						trigger: {
							player: ['damageAfter', 'phaseDiscardAfter'],
							target: 'useCardToTarget',
						},
						audio: 'xjzh_sanguo_busuan',
						forced: true,
						_priority: 12,
						popup: false,
						filter(event, player) {
							if (!event.cards || !event.cards.length) return false;
							if (event.name == 'damage') {
								return event.card && event.card.name == 'sha';
							}
							if (event.target == player && event.player != player) {
								return get.type(event.card, 'trick') == 'trick';
							}
							if (event.name == 'phaseDiscard') {
								return event.cards && event.cards.length >= 2;
							}
							return false;
						},
						content() {
							player.useSkill('xjzh_sanguo_busuan');
						},
					},
					use: {
						trigger: {
							global: ['loseAfter'],
						},
						forced: true,
						_priority: 12,
						filter(event, player) {
							var list = ['xjzh_card_chunfenghuayu', 'xjzh_card_zhizuijinmi', 'xjzh_card_shenjimiaosuan', 'xjzh_card_tanhuayixian', 'xjzh_card_fanyunfuyu'];
							if (event.cards.some((card) => list.includes(card.name))) return true;
							return false;
						},
						content() {
							var cards = trigger.cards;
							var cards2 = lib.skill.xjzh_sanguo_busuan.getCards_guanlu.slice(0);
							var list = [];
							for (var i of cards) {
								for (var j of cards2) {
									if (i.name == j) list.push(i);
								}
							}
							if (!list.length) return;
							game.cardsGotoSpecial(list);
							if (lib.config.extension_仙家之魂_xjzh_jiexiantupo) player.draw(list.length);
							game.log('#y', list, '被销毁了');
						},
					},
				},
			},
			xjzh_card_chunfenghuayu_skill: {
				mark: true,
				marktext: '春',
				intro: {
					name: '春风化雨',
					content: '免疫下一次伤害',
				},
				forced: true,
				_priority: 3,
				firstDo: true,
				charlotte: true,
				trigger: {
					player: ['damageBegin1'],
				},
				filter(event, player) {
					return !event.numFixed;
				},
				async content(event, trigger, player) {
					trigger.changeToZero();
					player.removeSkill('xjzh_card_chunfenghuayu_skill', true);
					player.$fullscreenpop('春风化雨', 'water');
				},
			},
			xjzh_card_fanyunfuyu_skill: {
				trigger: {
					global: ['damageBegin1'],
				},
				filter(event, player) {
					if (player.countCards('h', 'xjzh_card_fanyunfuyu')) {
						return get.is.playerNames(player, 'xjzh_sanguo_guanlu');
					}
					return false;
				},
				forced: true,
				_priority: 100,
				firstDo: true,
				content() {
					'step 0';
					player.chooseCardTarget({
						position: 'h',
						filterCard(card, player) {
							return card.name == 'xjzh_card_fanyunfuyu';
						},
						filterTarget(card, player, target) {
							var trigger = _status.event.getTrigger();
							return target != player && target != trigger.player;
						},
						ai1(card) {
							return 1;
						},
						ai2(target) {
							if (target.hasSkillTag('nodamage')) return 0;
							return get.damageEffect(target, _status.event.source, _status.event.player, _status.event.nature);
						},
						prompt: (function () {
							var str = '〖翻云覆雨〗:请弃置一张【翻云覆雨】令一名角色受到';
							if (trigger.source) str += '来自' + get.translation(trigger.source) + '的';
							str += '' + get.translation(trigger.num) + '点';
							if (trigger.nature) str += '' + get.translation(trigger.nature) + '';
							str += '伤害';
							return str;
						})(),
					});
					('step 1');
					if (result.bool && result.targets) {
						player.discard(result.cards[0])._triggered = null;
						result.targets[0].damage(trigger.num, trigger.source, trigger.nature);
						player.$fullscreenpop('翻云覆雨', 'thunder');
					}
				},
			},
			xjzh_card_zhizuijinmi_skill: {
				mark: true,
				marktext: '醉',
				intro: {
					name: '纸醉金迷',
					content(storage, player) {
						var suit = player.storage.xjzh_card_zhizuijinmi_skill;
						var str = '' + get.translation(player) + '每打出一张牌需要判定,结果与' + get.translation(suit) + '不同则无效,否则摸一张牌';
						return str;
					},
				},
				forced: true,
				_priority: 3,
				firstDo: true,
				charlotte: true,
				trigger: {
					player: 'useCard1',
				},
				filter(event, player) {
					return player.storage.xjzh_card_zhizuijinmi_skill;
				},
				group: 'xjzh_card_zhizuijinmi_skill_delete',
				content() {
					'step 0';
					var suitx = player.storage.xjzh_card_zhizuijinmi_skill;
					player.judge(function (card) {
						return card.suit == suitx ? 2 : 0;
					}).judge2 = function (result) {
						return result.bool === false ? true : false;
					};
					('step 1');
					if (result.bool) {
						player.draw();
					} else {
						trigger.cancel();
					}
					player.$fullscreenpop('纸醉金迷', 'fire');
				},
				subSkill: {
					delete: {
						trigger: {
							player: 'phaseAfter',
						},
						forced: true,
						_priority: 3,
						firstDo: true,
						charlotte: true,
						filter(event, player) {
							return player.storage.xjzh_card_zhizuijinmi_skill;
						},
						content() {
							delete player.storage.xjzh_card_zhizuijinmi_skill;
							player.removeSkill('xjzh_card_zhizuijinmi_skill', true);
						},
					},
				},
			},
			xjzh_sanguo_youxia: {
				trigger: {
					player: ['phaseAfter', 'damageAfter'],
					target: ['useCardToTargeted'],
				},
				forced: true,
				_priority: 2,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (event.name == 'useCardToTargeted') {
						var history = event.player.getAllHistory('useCard', function (evt) {
							return get.color(evt.card) == 'black' && evt.targets.includes(player);
						});
						if (!event.targets.includes(player)) return false;
						if (get.color(event.card) != 'black') return false;
						return 100 % history.length == 0;
					}
					if (event.name == 'phase' || event.name == 'damage') return true;
					return false;
				},
				group: ['xjzh_sanguo_youxia_use', 'xjzh_sanguo_youxia_gain'],
				content() {
					var card = get.cardPile(function (card) {
						return get.color(card) == 'black';
					});
					if (card) player.addToExpansion(card, 'gain2', trigger.player).gaintag.add('xjzh_sanguo_youxia_tag');
				},
				subSkill: {
					tag: {
						marktext: '侠',
						intro: {
							name: '游侠',
							content: 'expansion',
							markcount: 'expansion',
						},
						onremove(player, skill) {
							var cards = player.getExpansions('xjzh_sanguo_youxia_tag');
							if (cards.length) player.loseToDiscardpile(cards);
						},
					},
					use: {
						enable: 'phaseUse',
						filterTarget(card, player, target) {
							if (target == player) return true;
							return !target.countCards('he', function (card) {
								return card.hasGaintag('xjzh_sanguo_youxia_tag');
							});
						},
						audio: 'xjzh_sanguo_youxia',
						selectTarget: 1,
						filter(event, player) {
							if (!player.getExpansions('xjzh_sanguo_youxia_tag').length) return false;
							if (
								game.countPlayer(function (current) {
									return (
										current != player &&
										current.countCards('he', function (card) {
											return card.hasGaintag('xjzh_sanguo_youxia_tag');
										})
									);
								}) >= game.players.length
							)
								return false;
							return true;
						},
						async content(event, trigger, player) {
							var num = 1;
							var cards = player.getExpansions('xjzh_sanguo_youxia_tag');
							if (event.target == player) num = [1, cards.length];
							const { links } = await player
								.chooseCardButton(cards, num, true)
								.set('ai', function (button) {
									return event.target.getUseValue(button.link) * get.attitude(player, event.target); //QQQ
								})
								.forResult();
							if (links?.length) {
								event.target.gain(links, player, 'gain2', 'log').gaintag.add('xjzh_sanguo_youxia_tag');
								if (event.target != player) {
									if (!event.target.storage.xjzh_sanguo_youxia) {
										event.target.storage.xjzh_sanguo_youxia = [];
									}
									event.target.storage.xjzh_sanguo_youxia.push(links[0]);
								}
							}
						},
						ai: {
							order: 6,
							result: {
								target(player, target) {
									if (!target) return;
									if (target == player) return 1;
									var att = get.attitude(player, target);
									var num = target.countCards('he');
									if (att > 0) return -num;
									return -1;
								},
							},
						},
					},
					gain: {
						trigger: {
							global: 'phaseDiscardBegin',
						},
						forced: true,
						_priority: 12,
						audio: 'ext:仙家之魂/audio/skill:2',
						filter(event, player) {
							if (event.player == player) return false;
							if (!event.player.storage.xjzh_sanguo_youxia) return false;
							var bool = false;
							if (event.player.storage.xjzh_sanguo_youxia) {
								for (var i of event.player.storage.xjzh_sanguo_youxia) {
									if (
										event.player.countCards('hes', function (card) {
											return card == i;
										}) > 0
									)
										bool = true;
								}
							}
							if (!bool) return false;
							return true;
						},
						content() {
							player.gain(trigger.player.getCards('he'), trigger.player, 'gain2', 'log');
							delete trigger.player.storage.xjzh_sanguo_youxia;
						},
					},
				},
				ai: {
					order: 4,
					result: {
						target(player, target, card) {
							if (ui.selected.cards.length && ui.selected.cards[0].name == 'tao') {
								if (target.isDamaged()) return 2;
							}
							return -1;
						},
					},
				},
			},
			xjzh_sanguo_luoyi: {
				trigger: {
					player: ['gainAfter'],
				},
				forced: true,
				_priority: 2,
				init(player) {
					player.disableEquip(2);
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				filter(event, player) {
					if (!event.cards || !event.cards.length) return false;
					var cards = event.cards;
					if (Array.isArray(cards))
						for (var i of cards) {
							if (get.type(i) == 'equip' && get.subtype(i) == 'equip2') return true;
						}
					return false;
				},
				group: ['xjzh_sanguo_luoyi_use'],
				content() {
					if (trigger.getParent('xjzh_sanguo_huchi_use').name != 'xjzh_sanguo_huchi_use') player.recover();
				},
				subSkill: {
					use: {
						audio: 'ext:仙家之魂/audio/skill:3',
						enable: 'phaseUse',
						prompt() {
							return '将至少一张防具牌牌当作一张无次数限制的【杀】使用';
						},
						position: 'hs',
						filterCard(card, player) {
							return get.subtype(card) == 'equip2';
						},
						selectCard() {
							var player = _status.event.player;
							var cards = player.getCards('hs', function (card) {
								return get.type(card) == 'equip' && get.subtype(card) == 'equip2';
							});
							return [1, cards.length];
						},
						filterTarget(card, player, target) {
							if (!target.inRangeOf(player)) return false;
							return player.canUse({ name: 'sha' }, target, false);
						},
						selectTarget: 1,
						check(card) {
							return 1;
						},
						filter(event, player) {
							return (
								player.countCards('hs', function (card) {
									return get.subtype(card) == 'equip2';
								}) >= 1
							);
						},
						content() {
							player.loseToDiscardpile(cards[0]);
							player.useCard({ name: 'sha' }, target, false).set('addCount', false).set('baseDamage', 2);
						},
						ai: {
							damageBonus: true,
							order() {
								return get.order({ name: 'sha' }) + 0.2;
							},
							result: {
								target(player, target) {
									return lib.card.sha.ai.result.target.apply(this, arguments);
								},
							},
						},
					},
				},
			},
			xjzh_sanguo_huchi: {
				trigger: {
					source: 'damageEnd',
				},
				forced: true,
				_priority: 13,
				audio: 'ext:仙家之魂/audio/skill:2',
				group: 'xjzh_sanguo_huchi_use',
				filter(event, player) {
					return event.getParent('xjzh_sanguo_luoyi_use').name == 'xjzh_sanguo_luoyi_use';
				},
				content() {
					var cards = get.cards(3);
					var list = [];
					player.showCards(cards);
					if (Array.isArray(cards))
						for (var i of cards) {
							if (get.type(i) == 'basic' || get.subtype(i) == 'equip2') {
								list.push(i);
								cards.remove(i);
							}
						}
					if (list.length) {
						player.gain(list, player, 'gain2');
					} else {
						player.recover();
					}
					while (cards.length) {
						var card = cards.pop();
						card.fix();
						ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
					}
				},
				subSkill: {
					use: {
						trigger: {
							player: ['useCard', 'respond'],
						},
						audio: 'ext:仙家之魂/audio/skill:2',
						prompt(event, player) {
							var str = '〖虎痴〗:你可以失去一点体力';
							if (event.name == 'useCard' && event.card.name == 'sha') {
								str += '令' + get.translation(event.card) + '伤害+1或获得一张防具牌';
							} else {
								str += '获得一张防具牌';
							}
							return str;
						},
						filter(event, player) {
							return get.type(event.card) == 'basic';
						},
						check(event, player) {
							var player = _status.event.player;
							if (player.maxHp <= 2) return 0;
							return 1;
						},
						content() {
							'step 0';
							var controlList = ['失去一点体力获得一张防具牌', '失去一点体力令' + get.translation(trigger.card) + '伤害+1'];
							if ((trigger.card && trigger.name == 'useCard' && trigger.card.name != 'sha') || trigger.name == 'respond') controlList.remove(controlList[1]);
							player
								.chooseControlList(get.prompt(event.name, player), controlList)
								.set('ai', function () {
									var player = _status.event.player;
									if (player.hp > 1 || trigger.target.countCards('h') > 2) {
										if (trigger.card.name == 'sha') return 1;
									}
									return 0;
								})
								.set('trigger.card', trigger.card);
							('step 1');
							if (result.index == 0) {
								var card = get.cardPile(function (card) {
									return get.subtype(card) == 'equip2';
								});
								if (card) player.gain(card, 'gain2');
							} else if (result.index == 1) {
								if (!trigger.baseDamage) trigger.baseDamage = 1;
								trigger.baseDamage += 1;
							}
							player.loseHp();
						},
					},
				},
			},
			xjzh_sanguo_qice: {
				trigger: {
					global: 'useCard',
				},
				filter(event, player) {
					if (event.player == player) return false;
					if (!event.cards || !event.cards.length) return false;
					if (event.getParent('xjzh_sanguo_qice').name == 'xjzh_sanguo_qice') return false;
					return get.type(event.card) == 'trick';
				},
				_priority: 13,
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				prompt(event, player) {
					return '〖奇策〗:是否发动展示牌堆顶一张牌使用之';
				},
				check(event, player) {
					return 1;
				},
				content() {
					var cards = get.cards();
					player.showCards(cards);
					if (get.type(cards[0]) == 'trick' || cards[0].suit == trigger.card.suit || cards[0].number == trigger.cards.number) {
						if (player.hasUseTarget(cards[0])) {
							player.chooseUseTarget(cards[0]);
						}
					}
				},
			},
			xjzh_sanguo_zhiyu: {
				trigger: {
					player: 'damageEnd',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return game.hasPlayer((current) => current.countCards('hej'));
				},
				_priority: 13,
				async cost(event, trigger, player) {
					let num = game.countPlayer((current) => current != player && current.countCards('he') > 0 && get.attitude(player, current) <= 0);
					let check = num >= 2;
					const result = await player
						.chooseTarget(
							'〖智愚〗:请选择至多两名角色从其区域内获得至多两张牌',
							[1, 2],
							(card, player, target) => {
								return target.countCards('he') > 0 && player != target;
							},
							(target) => {
								if (!_status.event.aicheck) return 0;
								const att = get.attitude(player, target);
								if (target.hasSkill('tuntian')) return att / 10;
								return 1 - att;
							}
						)
						.set('aicheck', check)
						.forResult();
					event.result = result;
				},
				async content(event, trigger, player) {
					player.gainMultiple(event.targets, 'he');
					trigger.changeToZero();
				},
				ai: {
					threaten: 1.4,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return [1, 2];
						},
					},
				},
			},
			xjzh_sanguo_zhoufu: {
				trigger: {
					player: 'damageEnd',
					global: 'phaseZhunbeiBegin',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				forced: true,
				_priority: 5,
				marktext: '咒',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					let cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				filter(event, player) {
					if (event.name == 'phaseZhunbei' && player.getExpansions('xjzh_sanguo_zhoufu').length) return event.player != player;
					return event.num > 0;
				},
				async content(event, trigger, player) {
					let cards;
					if (trigger.name == 'phaseZhunbei') {
						cards = player.getExpansions('xjzh_sanguo_zhoufu');
						const { links } = await player
							.chooseCardButton(cards, get.prompt('xjzh_sanguo_zhoufu', trigger.player, player))
							.set('ai', () => -get.attitude(trigger.player, player))
							.forResult();

						if (links) {
							await player.loseToDiscardpile(links);
							cards = get.cardPile((card) => {
								return get.type(card) == 'delay';
							}, true);
							if (cards) trigger.player.executeDelayCardEffect(cards);
						}
					} else {
						cards = get.cards(trigger.num);
						await player.addToExpansion(cards, player, 'draw').gaintag.add(event.name);
					}
				},
				ai: {
					order: 8,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return [1, 2];
						},
					},
				},
			},
			xjzh_sanguo_yingbin: {
				trigger: {
					global: 'judgeAfter',
				},
				forced: true,
				_priority: 10,
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					await player.draw();
					while (true) {
						const next = player.chooseToUse({
							filterCard(card, player, event) {
								if (get.itemtype(card) != 'card' || (get.position(card) != 'h' && get.position(card) != 's')) return false;
								if (card.name == 'sha') {
									let num = player.getCardUsable({ name: 'sha' });
									if (typeof num == 'number') return player.countUsed({ name: 'sha' }) < num;
								}
								return lib.filter.filterCard.apply(this, arguments);
							},
							prompt: '〖影兵〗:选择使用一张手牌',
							addCount: true,
							ai1: (card) => get.order(card),
						});
						const result = await next.forResult();
						if (result.bool) {
							let card = result.card,
								cards = get.cardPile((item) => {
									return get.type(item) != get.type(card);
								}, true);
							if (cards) await player.gain(cards, player, 'draw');
						} else if (!result.bool || !player.getCards('hs').some((card) => player.hasUseTarget(card))) break;
					}
				},
			},
			xjzh_sanguo_tanzhi: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				mod: {
					playerEnabled(card, player, target) {
						if (!player.storage.xjzh_sanguo_tanzhi) return;
						if (!player.storage.xjzh_sanguo_tanzhi.length) return;
						if (player.storage.xjzh_sanguo_tanzhi.includes(target)) return false;
					},
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				prompt: '〖贪智〗:是否发动技能猜测其他角色的手牌？',
				forced: true,
				_priority: 3,
				filter(event, player) {
					return (
						game.countPlayer(function (current) {
							return current != player && current.countCards('h');
						}) > 0
					);
				},
				check(event, player) {
					return 0.5;
				},
				marktext: '贪智',
				intro: {
					name: '贪智',
					content: '本回合袁绍无法对你使用牌',
				},
				content() {
					'step 0';
					event.targets = game.filterPlayer(function (current) {
						return current != player && current.countCards('h');
					});
					('step 1');
					event.targets2 = event.targets.shift();
					var inpile = lib.inpile.slice(0);
					var text = '请选择猜测' + get.translation(event.targets2) + '的一张手牌的牌名';
					player.chooseVCardButton(true, inpile, text).set('ai', function () {
						return inpile.randomGet();
					});
					('step 2');
					if (result.links?.length) {
						var card = game.createCard(result.links[0][2]);
						if (event.targets2.countCards('h', { name: card.name })) {
							var card2 = event.targets2
								.getCards('h')
								.filter(function (cards) {
									return cards.name == result.links[0][2];
								})
								.randomGet();
							player.gain(card2, event.targets, 'draw');
						} else {
							if (!player.storage.xjzh_sanguo_tanzhi) player.storage.xjzh_sanguo_tanzhi = [];
							player.storage.xjzh_sanguo_tanzhi.push(event.targets2);
							var evt = event.getParent('phase');
							if (evt && evt.getParent && !evt.xjzh_sanguo_tanzhi) evt.xjzh_sanguo_tanzhi = true;
						}
						if (event.targets && event.targets.length) event.goto(1);
					}
					('step 3');
					if (!player.storage.xjzh_sanguo_tanzhi.length) return;
					for (var target of player.storage.xjzh_sanguo_tanzhi) {
						target.markSkill('xjzh_sanguo_tanzhi');
					}
					var evt = event.getParent('phase');
					if (evt && evt.getParent && evt.xjzh_sanguo_tanzhi) {
						var next = game.createEvent('xjzh_sanguo_tanzhi_delete', false, evt.parent);
						next.player = player;
						next.setContent(function () {
							if (player.storage.xjzh_sanguo_tanzhi.length) {
								for (var target of player.storage.xjzh_sanguo_tanzhi) {
									target.unmarkSkill('xjzh_sanguo_tanzhi');
								}
								delete player.storage.xjzh_sanguo_tanzhi;
							}
						});
					}
				},
			},
			xjzh_sanguo_mingmen: {
				enable: 'phaseUse',
				position: 'he',
				usable: 1,
				filterCard: lib.filter.cardDiscardable,
				filter(event, player) {
					return player.countCards('he');
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					'step 0';
					var cards = Array.from(ui.cardPile.childNodes).randomGet();
					var card = ui.create.card();
					card.classList.add('infohidden');
					card.classList.add('infoflip');
					player.$throw(card, 1000, 'nobroadcast');
					game.log(player, '扣置了一张牌在场上');
					event.list = {
						1: cards.suit,
						2: cards.number,
						3: get.type(cards),
						4: cards.name,
					};
					event.num = 0;
					event.num2 = 1;
					('step 1');
					var str = '';
					switch (event.num2) {
						case 1:
							str += '请猜测此牌的花色';
							var controlList = lib.suit.slice(0);
							break;
						case 2:
							str += '请猜测此牌的点数';
							var controlList = [];
							for (var i = 1; i <= 13; i++) {
								controlList.push(i);
							}
							break;
						case 3:
							str += '请猜测此牌的类型';
							var controlList = ['basic', 'equip', 'delay', 'trick'];
							break;
						case 4:
							var names = event.list[event.num2];
							var translates = lib.translate[names];
							var name2 = Array.from(translates).randomGet();
							var controlList = lib.inpile.slice(0);
							str += '请猜测此牌的牌名,温馨提示:这张牌的牌名可能包含这个字——' + name2;
							break;
					}
					if (event.num2 < 4) {
						var str2 = '';
						var dialog = ui.create.dialog('forcebutton', 'hidden');
						switch (event.num2) {
							case 1:
								var suitx = event.list[event.num2];
								if (['heart', 'red'].includes(suitx)) {
									str2 += '这张牌可能不是黑色';
								} else {
									str2 += '这张牌可能不是红色';
								}
								break;
							case 2:
								var number = event.list[event.num2];
								if (number % 2 == 0) {
									str2 += '这张牌的点数可能没有余数';
								} else {
									str2 += '这张牌的点数不可能没有余数';
								}
								break;
							case 3:
								str2 += '这张牌的类型可能没有提示!';
								break;
						}
						dialog.addText(str2);
						player.chooseControl(controlList).set('prompt', str).set('dialog', dialog);
					} else {
						player.chooseVCardButton(true, controlList, str).set('ai', function () {
							return controlList.randomGet();
						});
					}
					('step 2');
					if (event.num2 < 4) {
						var boolx = result.control;
						if (event.list[event.num2] == boolx) {
							event.num++;
						} else {
							game.log('你猜错了!');
						}
					} else {
						var boolx = result.links[0][2];
						if (event.list[event.num2] == boolx) {
							event.num++;
						} else {
							game.log('你猜错了!');
						}
					}
					('step 3');
					if (event.num2 < 4) {
						event.num2++;
						event.goto(1);
					}
					('step 4');
					game.log(player, '猜中', event.num, '项');
					switch (event.num) {
						case 0:
							player.damage(1, 'nosource', 'nocard');
							break;
						case 1:
							var list = ['basic', 'equip', 'delay', 'trick'];
							player
								.chooseControl(list)
								.set('prompt', '请选择你要获得牌的类型')
								.set('ai', function () {
									return list.randomGet();
								});
							break;
						case 2:
							if (player.hasUseTarget({ name: 'wanjian' })) player.chooseUseTarget({ name: 'wanjian' }, true);
							player.draw();
							break;
						case 3:
							game.countPlayer(function (current) {
								if (current != player) {
									if (current.countGainableCards(player, 'he')) player.gainPlayerCard('he', current, true);
								}
							});
							if (player.hasUseTarget({ name: 'wanjian' })) player.chooseUseTarget({ name: 'wanjian' }, true);
							break;
						case 4:
							player.chooseTarget([1, game.players.length], '选择任意名目标令其各摸一张牌,取消则你摸牌').set('ai', function (target) {
								return get.attitude(player, target);
							});
							break;
					}
					if (event.num != 0) {
						player.getStat().skill.xjzh_sanguo_mingmen -= 1;
					}
					if (event.num == 0 || event.num == 2 || event.num == 3) {
						event.finish();
						return;
					}
					('step 5');
					if (event.num == 1) {
						if (result.control) {
							var control = result.control;
							var card = get.cardPile(function (card) {
								return get.type(card) == control;
							});
							if (card) player.gain(card, player, 'gain2', 'log');
						}
					} else if (event.num == 4) {
						if (result.targets?.length) {
							var targets = result.targets;
							for (var target of targets) {
								target.draw();
							}
							var targets2 = game.filterPlayer(function (current) {
								return !targets.includes(current);
							});
							for (var target of targets2) {
								target.damage(1, player, 'nocard');
								target.addTempSkill('baiban', { player: 'phaseBefore' });
							}
						} else {
							var friends = player.getFriends(true);
							player.draw(friends.length);
							var targets = game.filterPlayer(function (current) {
								return !friends.includes(current);
							});
							for (var target of targets) {
								target.damage(1, player, 'nocard');
								target.addTempSkill('baiban', { player: 'phaseBefore' });
							}
						}
					}
				},
			},
			xjzh_sanguo_biyi: {
				trigger: {
					player: 'disableEquipBefore',
				},
				forced: true,
				_priority: 3,
				firstDo: true,
				marktext: '止',
				intro: {
					name: '止啼',
					content: '#',
				},
				global: 'xjzh_sanguo_biyi_mod',
				audio: 'ext:仙家之魂/audio/skill:1',
				init(player, skill) {
					let listEquip = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
					while (listEquip.length) {
						let pos = listEquip.shift();
						if (player.hasEmptySlot(pos)) {
							let equip = get.cardPile((card) => get.type(card) == 'equip' && get.subtype(card) == pos);
							if (equip) {
								player.equip(equip);
								player.$gain2(equip, false);
							}
						}
					}
				},
				async content(event, trigger, player) {
					trigger.slots = []; //QQQ
					game.log('无法废除', player, '的装备栏');
				},
				subSkill: {
					mod: {
						charlotte: true,
						mod: {
							maxHandcardFinal(player, num) {
								let numx = 0,
									listEquip = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'],
									target = game.findPlayer((target) => get.is.playerNames(target, 'xjzh_sanguo_zhangliao'));
								if (!target) return num;
								while (listEquip.length) {
									let pos = listEquip.shift();
									if (!target.hasEmptySlot(pos)) numx++;
								}
								if (get.is.playerNames(player, 'xjzh_sanguo_zhangliao')) return (num += numx);
								return (num -= numx);
							},
						},
					},
				},
			},
			xjzh_sanguo_zhiti: {
				trigger: {
					source: 'damageAfter',
					player: 'damageAfter',
					global: ['addMark', 'removeMark'],
				},
				forced: true,
				_priority: -1,
				lastDo: true,
				marktext: '止',
				intro: {
					name: '止啼',
					content: '#',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (event.name == 'damage') {
						if (event.source == player) return event.player != player;
						return event.player != player;
					}
					if (['addMark', 'removeMark'].includes(event.name)) {
						if (event.player == player) return false;
						if (event.markname != 'xjzh_sanguo_zhiti') return false;
						return true;
					}
					return false;
				},
				async content(event, trigger, player) {
					if (trigger.name == 'damage') {
						trigger.source == player ? trigger.player.addMark('xjzh_sanguo_zhiti', 1) : trigger.source.addMark('xjzh_sanguo_zhiti', 1);
					} else {
						trigger.name == 'addMark' ? trigger.player.chooseToDisable() : trigger.player.chooseToEnable();
					}
				},
			},
			xjzh_sanguo_cuifengx: {
				enable: 'phaseUse',
				usable: 1,
				selectTarget: 2,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return game.countPlayer((current) => current.countMark('xjzh_sanguo_zhiti'));
				},
				filterTarget(card, player, target) {
					if (ui.selected.targets.length) return true;
					return target.countMark('xjzh_sanguo_zhiti');
				},
				targetprompt: ['失去标记', '获得标记'],
				multitarget: true,
				async content(event, trigger, player) {
					let targets = event.targets;
					await targets[0].removeMark('xjzh_sanguo_zhiti', 1, false);
					await targets[1].addMark('xjzh_sanguo_zhiti', 1, false);
					targets[0].useCard({ name: 'sha' }, targets[1], 'noai', false).set('baseDamage', 2);
				},
				ai: {
					order: 8,
					expose: 0.3,
					result: {
						target(player, target, card) {
							if (ui.selected.targets.length == 0) return 1;
							else return get.effect(target, { name: 'sha' }, ui.selected.targets[0], target) - 3;
						},
					},
				},
			},
			xjzh_sanguo_xingyi: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return target.countCards('h');
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					let target = event.targets[0],
						cards1 = target.getCards('h');
					await target.discard(cards1);
					const { cards } = await target.draw(cards.length * 2).forResult(),
						list = [],
						num = 0;
					for (let card of cards) {
						if (card.suit == 'heart') num++;
					}
					let drawNum = num - target.getDamagedHp(true);
					if (drawNum > 0) await target.draw(drawNum);
					target.recover(num);
				},
				ai: {
					order: 12,
					result: {
						target: 1,
					},
				},
			},
			xjzh_sanguo_qingnang: {
				trigger: {
					global: 'changeHpAfter',
				},
				usable: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				prompt(event, player) {
					return '〖青囊〗:是否令' + get.translation(event.player) + '交换体力与已损体力？';
				},
				check(event, player) {
					let att = get.attitude(player, event.player);
					if (event.player == player) {
						if (player.getHp(true) < player.getDamagedHp(true)) return 10;
					}
					if (event.player != player) {
						if (event.player.getHp(true) > event.player.getDamagedHp(true)) return -att;
						return att;
					}
					return 0;
				},
				filter(event, player) {
					if (event.player.isHealthy()) return false;
					if (event.player.isDying()) return false;
					if (event.player.getHp(true) <= 0) return false;
					if (event.player.getDamagedHp(true) == event.player.getHp(true)) return false;
					if (event.getParent('xjzh_sanguo_qingnang').name == 'xjzh_sanguo_qingnang') return false;
					return true;
				},
				async content(event, trigger, player) {
					let num = trigger.player.getDamagedHp(true) - trigger.player.getHp(true);
					await trigger.player.changeHp(num);
					if (trigger.player.getHp(true) >= trigger.player.getDamagedHp()) trigger.player.gainMaxHp();
				},
			},
			xjzh_sanguo_elai: {
				enable: 'phaseUse',
				audio: 'ext:仙家之魂/audio/skill:3',
				async content(event, trigger, player) {
					await player.loseHp();
					const { cards } = await player.draw(player.getDamagedHp(true) + 1).forResult();
					const cards1 = cards.filter((card) => get.type(card) == 'equip');
					if (!cards1.length) return;
					const { bool, links } = await player
						.chooseCardButton([1, cards1.length], cards1, '〖恶来〗:请选择并弃置任意张装备牌')
						.set('ai', function (button) {
							return 8 - get.value(button.link);
						})
						.forResult();
					if (bool && links.length) {
						player.discard(links)._triggered = null;
						const { bool, targets } = await player
							.chooseTarget('〖恶来〗:请选择一名其他角色令其受到' + get.translation(links.length) + '点伤害', lib.filter.notMe)
							.set('ai', function (target) {
								if (get.damageEffect(target, _status.event.player, _status.event.player)) return 1;
							})
							.forResult();
						if (bool && targets.length) {
							await targets[0].damage(links.length, player, 'nocard');
							await player.discardPlayerCard('he', targets[0], links.length, true);
						}
					}
				},
				ai: {
					order(item, player) {
						return player.getDamagedHp() + 0.1;
					},
					result: {
						player(player) {
							if (player.countCards('h') >= player.hp - 1) return -1;
							if (player.hp < 2) return -1;
							return 1;
						},
					},
				},
			},
			xjzh_sanguo_tiequ: {
				trigger: {
					player: 'damageBegin1',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (player.countCards('h') <= 0) return false;
					return event.source != undefined;
				},
				forced: true,
				check(event, player) {
					var source = event.source;
					var att = get.attitude(player, event.source);
					if (att > 0) return event.source && event.source.hp >= 2;
					return -att;
				},
				async content(event, trigger, player) {
					const cards = player.getCards('h').randomGet();
					player.showCards(cards);
					const { bool } = await trigger.source
						.chooseToDiscard('he', `〖铁躯〗:请弃置一张类型为${get.translation(get.type(cards))}的牌,否则失去一点体力`, { type: get.type(cards) })
						.set('ai', (card) => {
							return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
						})
						.forResult();
					if (!bool) trigger.source.loseHp();
				},
			},
			xjzh_sanguo_guhuo: {
				enable: 'phaseUse',
				usable: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				init(player) {
					if (game.zhu == player && player.identity == 'zhu' && player.isZhu) game.chooseCharacter();
				},
				mode: ['identity'],
				group: ['xjzh_sanguo_guhuo_use', 'xjzh_sanguo_guhuo_id'],
				content() {
					'step 0';
					var list = ['nei', 'fan', 'zhong'];
					player
						.chooseControl(list)
						.set('ai', function () {
							return list.randomGet();
						})
						.set('prompt', '〖蛊惑〗:选择一张身份牌展示在武将牌上');
					('step 1');
					if (result.control) {
						var id = result.control;
						player.node.identity.show();
						player.node.identity.firstChild.innerHTML = get.translation(id);
						player.storage.xjzh_sanguo_guhuo = id;
						game.log(player, '展示的身份牌为', '#y' + id);
					}
				},
				ai: {
					order: 12,
					result: {
						player: 10,
					},
				},
				subSkill: {
					use: {
						trigger: {
							target: 'useCardToTarget',
						},
						audio: 'xjzh_sanguo_guhuo',
						forced: true,
						_priority: 100,
						firstDo: true,
						filter(event, player) {
							if (event.player == player) return false;
							return player.storage.xjzh_sanguo_guhuo;
						},
						content() {
							'step 0';
							if (trigger.player.hasMark('xjzh_sanguo_chanyuan')) {
								event.caice = true;
								event.goto(3);
							}
							trigger.player.chooseBool('〖蛊惑〗:' + get.translation(player) + '的身份是否为' + get.translation(player.storage.xjzh_sanguo_guhuo) + '？').set('ai', function () {
								return Math.random();
							});
							('step 1');
							if (result.bool) {
								event.bool = false;
								var id = player.identity;
								var id2 = player.storage.xjzh_sanguo_guhuo;
								if (id != id2) {
									trigger.parent.targets.remove(player);
									player.draw();
									event.bool = true;
									game.log(trigger.player, '猜错了于吉的身份', '#y〖' + get.translation(trigger.card) + '〗', '失效了');
								}
							} else {
								event.bool = false;
								var id = player.identity;
								var id2 = player.storage.xjzh_sanguo_guhuo;
								if (id == id2) {
									trigger.parent.targets.remove(player);
									player.draw();
									event.bool = true;
									game.log(trigger.player, '猜错了于吉的身份', '#y〖' + get.translation(trigger.card) + '〗', '失效了');
								}
							}
							('step 2');
							if (event.bool == true) {
								trigger.player.addMark('xjzh_sanguo_chanyuan', 1);
								var id = ['nei', 'fan', 'zhong'].randomGet();
								player.identity = id;
								player.setIdentity(id);
								player.node.identity.show();
								player.node.identity.firstChild.innerHTML = get.translation(player.storage.xjzh_sanguo_guhuo);
								if (game.zhu.isAlive() && player.identity == 'zhong') {
									if (
										!game.countPlayer(function (current) {
											return current.identity == 'fan';
										}) &&
										!game.countPlayer(function (current) {
											return current.identity == 'nei';
										})
									)
										game.over(true);
								}
							}
							event.finish();
							return;
							('step 3');
							if (event.caice == true) {
								trigger.parent.targets.remove(player);
								player.draw(2);
								game.log(trigger.player, '因〖缠怨〗导致', '#y〖' + get.translation(trigger.card) + '〗', '失效了');
							}
						},
					},
					id: {
						trigger: {
							global: 'gameStart',
							player: 'enterGame',
						},
						forced: true,
						_priority: 100,
						firstDo: true,
						content() {
							var list = [];
							var players = game.filterPlayer();
							for (var i of players) {
								if (i.isZhu || list.includes(i.identity)) continue;
								list.add(i.identity);
							}
							var id = list.randomGet();
							player.identity = id;
							player.setIdentity(id);
							if (!player.storage.xjzh_sanguo_guhuo) player.node.identity.hide();
						},
					},
				},
			},
			xjzh_sanguo_chanyuan: {
				trigger: {
					player: 'useCard2',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				forced: true,
				_priority: 100,
				mode: ['identity'],
				filter(event, player) {
					var type = get.type(event.card);
					if (type != 'basic' && type != 'trick') return false;
					var info = get.info(event.card);
					if (info.allowMultiple == false) return false;
					if (!info.enable) return false;
					if (event.targets && !info.multitarget) {
						if (
							game.hasPlayer(function (current) {
								return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current) && current.hasMark('xjzh_sanguo_chanyuan');
							})
						) {
							return true;
						}
					}
					return false;
				},
				marktext: '缠',
				intro: {
					name: '缠怨',
					content: 'mark',
				},
				mod: {
					maxHandcard(player, num) {
						var players = game.players;
						var numx = 0;
						for (var i of players) {
							if (i.hasMark('xjzh_sanguo_chanyuan')) numx = +i.countMark('xjzh_sanguo_chanyuan');
						}
						return num + numx;
					},
				},
				group: ['xjzh_sanguo_chanyuan_draw'],
				content() {
					'step 0';
					var num = game.countPlayer(function (current) {
						return current.hasMark('xjzh_sanguo_chanyuan');
					});
					var prompt2 = '〖缠怨〗:额外指定一名' + get.translation(trigger.card) + '的目标';
					player
						.chooseTarget(num, get.prompt('xjzh_sanguo_chanyuan'), function (card, player, target) {
							var player = _status.event.player;
							if (_status.event.targets.includes(target)) return false;
							if (!target.hasMark('xjzh_sanguo_chanyuan')) return false;
							return lib.filter.targetEnabled2(_status.event.card, player, target);
						})
						.set('prompt2', prompt2)
						.set('ai', function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player);
						})
						.set('targets', trigger.targets)
						.set('card', trigger.card);
					('step 1');
					if (result.bool) {
						trigger.targets.addArray(result.targets);
						for (var i of result.targets) {
							i.removeMark('xjzh_sanguo_chanyuan', 1);
						}
					} else {
						event.finish();
					}
				},
				subSkill: {
					draw: {
						trigger: {
							player: 'phaseBegin1',
						},
						forced: true,
						_priority: 1,
						filter(event, player) {
							return !event.numFixed;
						},
						content() {
							var numx = 0;
							var players = game.players;
							for (var i of players) {
								if (i.hasMark('xjzh_sanguo_chanyuan')) numx = +i.countMark('xjzh_sanguo_chanyuan');
							}
							trigger.num += numx;
						},
					},
				},
			},
			xjzh_sanguo_jianjie: {
				trigger: {
					global: 'gameStart',
					player: 'enterGame',
				},
				forced: true,
				_priority: 10,
				mark: true,
				marktext: '杰',
				intro: {
					mark(dialog, storage, player) {
						if (storage && storage.length) {
							if (player.isUnderControl(true)) {
								dialog.addSmall([storage, 'character']);
							} else {
								dialog.addText('共有' + get.cnNumber(storage.length) + '张武将牌');
							}
						} else {
							return '没有武将牌';
						}
					},
					content(storage, player) {
						return '共有' + get.cnNumber(storage.length) + '张武将牌';
					},
					markcount(storage, player) {
						if (storage && storage.length) return storage.length;
						return '';
					},
				},
				init(player) {
					if (!player.storage.xjzh_sanguo_jianjie) {
						player.storage.xjzh_sanguo_jianjie = [];
						if (game.roundNumber >= 1) {
							var next = game.createEvent('xjzh_sanguo_jianjie_add', false);
							next.player = player;
							next.setContent(lib.skill.xjzh_sanguo_jianjie.content);
						}
					}
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				group: 'xjzh_sanguo_jianjie_use',
				content() {
					var targets = game.xjzh_wujiangpai(['pangtong', 'shiyuan', 'fengchu', '庞统', '士元', '凤雏', '诸葛亮', '孔明', '卧龙', 'zhugeliang', 'kongming', 'wolong']);
					if (targets.length) player.storage.xjzh_sanguo_jianjie = targets.slice(0);
					player.update();
				},
				subSkill: {
					use: {
						trigger: {
							global: 'phaseZhunbeiBegin',
						},
						forced: true,
						_priority: 12,
						filter(event, player) {
							return player.storage.xjzh_sanguo_jianjie && player.storage.xjzh_sanguo_jianjie.length;
						},
						audio: 'xjzh_sanguo_jianjie',
						content() {
							'step 0';
							var list = player.storage.xjzh_sanguo_jianjie;
							player
								.chooseButton(trigger.player == player ? true : false)
								.set('ai', function (button) {
									var att = get.attitude(player, event.player);
									if (att > 0) get.rank(button.link, true);
									return 0;
								})
								.set('createDialog', ['〖荐杰〗:' + get.translation(trigger.player) + '的回合开始,请选择一张武将牌', [list, 'character']]);
							('step 1');
							if (result.links?.length) {
								var name = result.links[0];
								var list = [];
								var skills = lib.character[name][3];
								for (var i = 0; i < skills.length; i++) {
									var info = get.info(skills[i]);
									if (info && (info.limited || info.juexingji || info.dustSkill || info.sub)) continue;
									trigger.player.addTempSkill(skills[i]);
								}
								trigger.player.storage.xjzh_sanguo_jianjie_damage = player;
								player.addSkill('xjzh_sanguo_jianjie_damage');
								player.storage.xjzh_sanguo_jianjie.remove(name);
							}
						},
					},
					damage: {
						trigger: {
							global: 'phaseAfter',
						},
						forced: true,
						_priority: 12,
						audio: 'xjzh_sanguo_jianjie',
						filter(event, player) {
							return event.player.storage.xjzh_sanguo_jianjie_damage;
						},
						content() {
							'step 0';
							event.targets = game.filterPlayer(function (current) {
								return current != player;
							});
							event.targets.sortBySeat(event.player);
							('step 1');
							if (event.targets.length) {
								event.target = event.targets.shift();
								event.target.chooseCard('〖荐杰〗:选择一张牌交给司马徽或受到' + get.translation(trigger.player) + '造成的一点伤害').set('ai', function (card) {
									var att = get.attitude(player, event.target);
									if (att > 0) return 12 - get.value(card);
									return 4 - get.value(card);
								});
							} else {
								event.finish();
							}
							('step 2');
							if (result.bool && result.cards.length) {
								player.gain(result.cards, event.target, 'draw');
							} else {
								event.target.damage(1, trigger.player, 'nocard');
							}
							('step 3');
							if (event.targets.length) {
								event.goto(1);
							} else {
								player.removeSkill('xjzh_sanguo_jianjie_damage');
							}
						},
					},
				},
			},
			xjzh_sanguo_yinshi: {
				trigger: {
					player: 'damageBegin1',
				},
				forced: true,
				_priority: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				group: 'xjzh_sanguo_yinshi_use',
				filter(event, player) {
					if (_status.currentPhase == player) return false;
					return player.storage.xjzh_sanguo_jianjie && player.storage.xjzh_sanguo_jianjie.length;
				},
				content() {
					trigger.cancel(null, null, 'notrigger');
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage') && _status.currentPhase != target && target.storage.xjzh_sanguo_jianjie && target.storage.xjzh_sanguo_jianjie.length) {
								if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
								return [0, 0];
							}
						},
					},
				},
				subSkill: {
					use: {
						enable: 'phaseUse',
						trigger: {
							global: 'dying',
						},
						usable: 1,
						prompt(event, player) {
							return '〖隐世〗:' + get.translation(event.player) + '濒死,是否替换其武将牌？';
						},
						audio: 'xjzh_sanguo_yinshi',
						filter(event, player) {
							return player.storage.xjzh_sanguo_jianjie && player.storage.xjzh_sanguo_jianjie.length;
						},
						async content(event, trigger, player) {
							const { targets } = await player
								.chooseTarget('〖隐世〗:选择一名其他角色替换其武将牌', function (card, player, target) {
									return player != target;
								})
								.set('ai', function (target) {
									return 1;
								})
								.forResult();
							if (targets?.length) {
								var list = player.storage.xjzh_sanguo_jianjie;
								const { links } = await player
									.chooseButton()
									.set('ai', function (button) {
										var att = get.attitude(player, targets[0]); //QQQ
										if (att > 0) get.rank(button.link, true);
										return 0;
									})
									.set('createDialog', ['〖荐杰〗:请选择一张武将牌', [list, 'character']])
									.forResult();
								if (links?.length) {
									targets[0].clearSkills2();
									if (targets[0].name2) {
										targets[0].xjzh_removeFujiang();
									}
									var info = lib.character[links[0]][2];
									if (typeof info == 'number') {
										var hp = info;
										var maxHp = info;
									} else {
										info = info.split('/');
										var hp = info[0];
										var maxHp = info[1];
									}
									targets[0].reinit(targets[0].name, links[0], [hp, maxHp]);
									player.storage.xjzh_sanguo_jianjie.remove(links[0]);
								}
							}
						},
					},
				},
			},
			xjzh_sanguo_zhiheng: {
				enable: 'phaseUse',
				usable(skill, player) {
					//QQQ
					return player.getDamagedHp() + 1;
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				derivation: ['xjzh_sanguo_wuzhan', 'xjzh_sanguo_wumeng', 'xjzh_sanguo_wuxing', 'xjzh_sanguo_wuzuo'],
				filter(event, player) {
					let num = player.getDamagedHp() + 1;
					if (player.countSkill('xjzh_sanguo_zhiheng') >= num) return false;
					return player.countCards('he');
				},
				position: 'he',
				filterCard: lib.filter.cardDiscardable,
				selectCard: [1, Infinity],
				prompt: '〖制衡〗:弃置任意张牌并摸等量的牌',
				check(card) {
					let player = get.player();
					if (
						get.position(card) == 'h' &&
						!player.countCards('h', 'du') &&
						(player.hp > 2 ||
							!player.countCards('h', (card) => {
								return get.value(card) >= 8;
							}))
					)
						return 1;
					return 6 - get.value(card);
				},
				discard: false,
				lose: false,
				delay: false,
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					let cards = event.cards.slice(0);
					let suits = cards.map((card) => card.suit).unique();
					player.discard(cards);
					player.draw(cards.length + suits.length);
				},
				ai: {
					order: 3,
					threaten: 1.5,
					result: {
						player(player, target) {
							let list = lib.skill.xjzh_sanguo_zhiheng.derivation.slice(0),
								num = player.countSkill('xjzh_sanguo_zhiheng');
							if (num <= 4) return 1.5;
							return 2;
						},
					},
				},
			},
			xjzh_sanguo_wuyun: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				forced: true,
				_priority: 3,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					let history = player.getHistory('useSkill', (evt) => evt && evt.skill == 'xjzh_sanguo_zhiheng'),
						skills = lib.skill.xjzh_sanguo_zhiheng.derivation.slice(0);
					if (!history.length) return false;
					if (player.hasSkill(skills[history.length - 1])) return false;
					return true;
				},
				async content(event, trigger, player) {
					let skills = lib.skill.xjzh_sanguo_zhiheng.derivation.slice(0),
						history = player.getHistory('useSkill', (evt) => evt && evt.skill == 'xjzh_sanguo_zhiheng');
					if (history.length <= 4 && !player.hasSkill(skills[history.length - 1])) player.addSkills(skills[history.length - 1]);
				},
			},
			xjzh_sanguo_wuzhan: {
				trigger: {
					player: 'drawBegin',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (event.num < 3) return false;
					return true;
				},
				limited: true,
				check(event, player) {
					return player.getEnemies().length;
				},
				async content(event, trigger, player) {
					player.awakenSkill(event.name);
					let number = trigger.num;
					while (number > 0) {
						const { targets } = await player
							.chooseTarget('〖吴战〗:请选择令一名其他角色受到来自你的至多2点伤害,剩余可分配' + number + '点伤害', (card, player, target) => {
								let history = target.getAllHistory('damage', (evt) => {
									return evt && evt.getParent('xjzh_sanguo_wuzhan').name == 'xjzh_sanguo_wuzhan';
								});
								let num = 0;
								if (history && history.length) {
									for (var i of history) {
										num += i.num;
									}
								}
								if (num >= 2) return false;
								return target != player;
							})
							.set('ai', function (target) {
								return get.damageEffect(target, _status.event.player, _status.event.player);
							})
							.forResult();

						if (targets) {
							let list = [];
							if (number > 1) {
								for (var i = 1; i <= 2; i++) {
									list.push(i);
								}
							} else list = [1];
							const {
								result: { control },
							} =
								list.length == 1
									? { result: { control: list[0] } }
									: await player.chooseControl(list, 'cancel2').set('ai', () => {
										let att = get.attitude(get.player(), targets[0]);
										if (att > 0) return 'cancel2';
										if (targets[0].hasSkillTag('filterDamage')) return list[0];
										return list.randomGet();
									});
							if (control) {
								if (control != 'cancel2') {
									await targets[0].damage(control, player, 'nocard');
									number -= control;
								}
							}
						} else break;
					}
					trigger.changeToZero();
				},
			},
			xjzh_sanguo_wumeng: {
				trigger: {
					player: 'drawBefore',
				},
				usable: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return game.hasPlayer((current) => current.group != 'wu');
				},
				check(event, player) {
					return game.hasPlayer((current) => current.group != 'wu' && get.attitude(player, current) > 0);
				},
				async content(event, trigger, player) {
					const { targets } = await player
						.chooseTarget(get.prompt('xjzh_sanguo_wumeng'), true, (card, player, target) => {
							if (target == player) return false;
							return target.group != 'wu';
						})
						.set('ai', (target) => {
							return get.attitude(player, target);
						})
						.forResult();

					if (targets) {
						let cards = get.cards(trigger.num * 2);
						game.cardsGotoOrdering(cards);
						const { links } = player
							.chooseCardButton(Math.round(cards.length), cards, true, '〖吴盟〗:选择' + get.translation(Math.round(cards.length / 2)) + '张牌获得之,并令' + get.translation(targets[0]) + '获得剩余的牌')
							.set('filterButton', (button) => {
								if (!ui.selected.buttons.length) return true;
								let selected = ui.selected.buttons;
								if (selected >= Math.round(cards.length / 2)) return false;
								return true;
							})
							.forResult();
						if (links) {
							player.gain(links, 'draw', player);
							targets[0].gain(
								cards.filter((card) => !links.includes(card)),
								'draw',
								player
							);
						}
					}
					trigger.changeToZero();
				},
			},
			xjzh_sanguo_wuxing: {
				trigger: {
					source: 'damageBegin1',
				},
				forced: true,
				_priority: 6,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					return player.countCards('h') >= 8;
				},
				mod: {
					maxHandcard(player, num) {
						return game.countPlayer((current) => current.group == 'wu') * 2 + num;
					},
				},
				async content(event, trigger, player) {
					trigger.num++;
				},
				damageBonus: true,
				skillTagFilter(player, tag) {
					if (tag == 'damageBonus') return player.countCards('h') >= 8;
				},
			},
			xjzh_sanguo_wuzuo: {
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				usable: 1,
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (player.countCards('h')) return false;
					let evt = event.getl(player);
					return evt && evt.player == player && evt.hs && evt.hs.length;
				},
				async content(event, trigger, player) {
					player.draw(2);
				},
				ai: {
					threaten: 0.8,
					effect: {
						target(card) {
							if (get.tag(card, 'loseCard') || get.tag(card, 'discard') || get.tag(card, 'gain')) return 0.5;
						},
					},
					noh: true,
					skillTagFilter(player, tag) {
						if (tag == 'noh') return player.countCards('h') == 1;
					},
				},
			},
			xjzh_sanguo_jiuyuan: {
				trigger: {
					global: 'recoverBegin',
				},
				forced: true,
				_priority: 10,
				zhuSkill: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!player.hasZhuSkill('xjzh_sanguo_jiuyuan')) return false;
					if (event.player == player) return false;
					if (player.isHealthy()) return false;
					var list = [];
					if (event.player.name) list.push(event.player.name);
					if (event.player.name1) list.push(event.player.name1);
					if (event.player.name2) list.push(event.player.name2);
					var bool = false;
					for (var name of list) {
						if (lib.character[name][1] == 'wu') bool = true;
					}
					return event.player.group == 'wu' || bool == true;
				},
				content() {
					'step 0';
					trigger.player.chooseBool('〖救援〗:是否改为孙权回复一点体力,你摸一张牌').set('ai', function () {
						var trigger = _status.event.getTrigger();
						var att = get.attitude(_status.event.player, trigger.player);
						return att;
					});
					('step 1');
					if (result.bool) {
						player.recover();
						trigger.player.draw();
						trigger.cancel();
					}
				},
			},
			xjzh_sanguo_quling: {
				trigger: {
					source: 'dieAfter',
				},
				forced: true,
				charlotte: true,
				superCharlotte: true,
				fixed: true,
				xjzh_xinghunSkill: true,
				nogainsSkill: true,
				init(player) {
					if (!lib.config.xjzh_sanguo_quling) {
						window.localStorage.removeItem('xjzh_sanguo_quling');
						var list = [];
						for (var i in lib.character) {
							if (lib.character[i]) list.push(i);
						}
						var name = list.randomGet();
						var object = {
							character: name + '::',
							spower: 20,
						};
						var obj = JSON.stringify(object);
					}
					window.localStorage.setItem('xjzh_sanguo_quling', obj);
					game.saveConfig('xjzh_diablo_quling', true);
				},
				filter(event, player) {
					if (event.player.isAlive()) return false;
					if (event.player == player) return false;
					var list = window.localStorage.getItem('xjzh_sanguo_quling');
					if (list != null) {
						var object = JSON.parse(list);
						var str = object.character.slice(0, -2);
						var name = str.split('::');
						return !name.includes(event.player);
					}
					if (list == null) return true;
					return false;
				},
				group: ['xjzh_sanguo_quling_use'],
				content() {
					game.playXH(['xjzh_sanguo_quling1', 'xjzh_sanguo_quling2'].randomGet());
					if (window.localStorage) {
						var name = trigger.player.name;
						var num = get.rank(trigger.player, true);
						var list = window.localStorage.getItem('xjzh_sanguo_quling');
						if (list != null) {
							var object = JSON.parse(list);
							if (object.character.includes(name)) return;
							object.character += name + '::';
							object.spower += num;
							obj = JSON.stringify(object);
						} else {
							var object = {
								character: '',
								spower: 0,
							};
							object.character += name + '::';
							object.spower += num;
							obj = JSON.stringify(object);
						}
						window.localStorage.setItem('xjzh_sanguo_quling', obj);
					}
				},
				subSkill: {
					use: {
						enable: 'phaseUse',
						usable: 1,
						filter(event, player) {
							var list = window.localStorage.getItem('xjzh_sanguo_quling');
							if (list != null) {
								var object = JSON.parse(list);
								var str = object.character.slice(0, -2);
								var name = str.split('::');
								if (!name.length) return;
								var num = get.rank(name[0], true);
								for (var i = 0; i < name.length; i++) {
									if (num > get.rank(name[i], true)) num = get.rank(name[i], true);
								}
								return object.spower >= num;
							}
							return false;
						},
						audio: 'xjzh_sanguo_quling',
						content() {
							'step 0';
							var list = window.localStorage.getItem('xjzh_sanguo_quling');
							var object = JSON.parse(list);
							var str = object.character.slice(0, -2);
							var list2 = str.split('::');
							player
								.chooseButton(ui.create.dialog('〖驱灵〗:请选择你要获得技能的武将牌', [list2, 'character'], 'hidden'))
								.set('filterButton', function (button) {
									var numx = 0;
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										numx += get.rank(ui.selected.buttons[i].link, true);
									}
									return numx < object.spower;
								})
								.set('ai', function (button) {
									return get.rank(button.link, true);
								})
								.set('selectButton', [1, Infinity]);
							('step 1');
							if (result.links?.length) {
								var list = result.links;
								event.targets = result.links.slice(0);
								var skills = [];
								for (var i of list) {
									var info = lib.character[i];
									if (info[3]) {
										for (var j of info[3]) {
											skills.push(j);
										}
									}
								}
								if (player.isUnderControl()) {
									game.swapPlayerAuto(player);
								}
								var switchToAuto = function () {
									_status.imchoosing = false;
									event._result = {
										bool: true,
										skills: skills.randomGets(),
									};
									if (event.dialog) event.dialog.close();
									if (event.control) event.control.close();
								};
								var chooseButton = function (list, skills) {
									var event = _status.event;
									if (!event._result) event._result = {};
									event._result.skills = [];
									var rSkill = event._result.skills;
									var dialog = ui.create.dialog('〖驱灵〗:请选择获得的技能', [list, 'character'], 'hidden');
									event.dialog = dialog;
									var table = document.createElement('div');
									table.classList.add('add-setting');
									table.style.margin = '0';
									table.style.width = '100%';
									table.style.position = 'relative';
									for (var i = 0; i < skills.length; i++) {
										var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
										td.link = skills[i];
										table.appendChild(td);
										td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
										td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
											if (_status.dragged) return;
											if (_status.justdragged) return;
											_status.tempNoButton = true;
											setTimeout(function () {
												_status.tempNoButton = false;
											}, 500);
											var link = this.link;
											if (!this.classList.contains('bluebg')) {
												rSkill.add(link);
												this.classList.add('bluebg');
											} else {
												this.classList.remove('bluebg');
												rSkill.remove(link);
											}
										});
									}
									dialog.content.appendChild(table);
									dialog.add('　　');
									dialog.open();
									event.switchToAuto = function () {
										event.dialog.close();
										event.control.close();
										_status.imchoosing = false;
									};
									event.control = ui.create.control('ok', function (link) {
										if (rSkill.length === 0) return;
										event.dialog.close();
										event.control.close();
										_status.imchoosing = false;
									});
									for (var i = 0; i < event.dialog.buttons.length; i++) {
										event.dialog.buttons[i].classList.add('selectable');
									}
									game.countChoose();
								};
								if (event.isMine()) {
									chooseButton(list, skills);
								} else if (event.isOnline()) {
									event.player.send(chooseButton, list, skills);
									event.player.wait();
								} else {
									switchToAuto();
								}
							} else {
								event.finish();
							}
							('step 2');
							var map = event.result || result;
							if (map && map.skills && map.skills.length) {
								for (var s of map.skills) {
									player.addSkillLog(s);
								}
								player.checkConflict();
								player.checkMarks();
							}
							('step 3');
							var num = 0;
							for (var i = 0; i < event.targets.length; i++) {
								num += get.rank(event.targets[i], true);
							}
							game.log(player, '消耗了' + num + '点灵力');
							var list = window.localStorage.getItem('xjzh_sanguo_quling');
							var object = JSON.parse(list);
							object.spower -= num;
							obj = JSON.stringify(object);
							window.localStorage.setItem('xjzh_sanguo_quling', obj);
						},
					},
				},
			},
			xjzh_sanguo_tongxuan: {
				trigger: {
					global: 'gameStart',
					player: ['enterGame', 'phaseAfter'],
				},
				enable: 'phaseUse',
				usable: 1,
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = 0;
					game.xjzhAchi.hasAchi('微妙玄通', 'character') ? (player.storage[skill] += 2) : player.storage[skill]++;
				},
				forced: true,
				check(event, player) {
					return 1;
				},
				filter(event, player) {
					let list = get.xjzh_zengyiSkills(player);
					let num = list.filter((skill) => player.hasSkill('xjzh_zengyi_' + skill)).length;
					return num < list.length;
				},
				async content(event, trigger, player) {
					let skills = get.xjzh_zengyiSkills(player),
						cards = [];
					for (var i of skills) {
						lib.card[i] = {
							fullskin: false,
							image: 'ext:仙家之魂/image/avatar/xjzh_avatar_zengyi.png',
						};
						let info = get.info(i);
						if (typeof info.intro.content == 'string') {
							lib.translate[i + '_info'] = info.intro.content;
						} else {
							lib.translate[i + '_info'] = info.intro.translations;
						}
						if (lib.card[i]) cards.addArray([i]);
					}
					let dialog = ui.create.dialog(`〖通玄〗:请选择${player.storage.xjzh_sanguo_tongxuan}个技能获得之`, [cards, 'vcard'], 'hidden');
					const { links } = await player
						.chooseButton(dialog, skills.some((skill) => player.hasSkill(skill)) ? false : true, [1, player.storage.xjzh_sanguo_tongxuan])
						.set('ai', (button) => {
							return Math.random();
						})
						.forResult();

					if (links) {
						let reSkills = skills.filter((skill) => player.hasSkill(skill));
						await player.removeSkills(reSkills);
						await player.addSkills(links.map((item) => item[2]));
						let card = game.createCard('xjzh_zengyi_shuangsheng_card');
						player.$gain2(card);
					}
					player.update();
				},
				ai: {
					order: 12,
					result: {
						player(player, target) {
							let list = get.xjzh_zengyiSkills(player);
							let skills = list.filter((skill) => player.hasSkill('xjzh_zengyi_' + skill)),
								num = player.storage.xjzh_sanguo_tongxuan;
							return skills.length > num;
						},
					},
				},
			},
			xjzh_sanguo_youbian: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				_priority: -1,
				async content(event, trigger, player) {
					if (!player.storage.xjzh_sanguo_tongxuan) return;
					let num = player.storage.xjzh_sanguo_tongxuan;
					await player.draw(num);
					if (player.isDamaged()) await player.storage.xjzh_sanguo_tongxuan++;
				},
				maixue_hp: true,
				skillTagFilter(player, tag, arg) {
					if (tag == 'maixue_hp') {
						if (player.getHp(true) <= 2) return false;
						if (player.hasSkill('xjzh_sanguo_tongxuan')) return true;
					}
					return false;
				},
			},
			xjzh_sanguo_shouye: {
				trigger: {
					player: 'phaseBegin',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				init(player, skill) {
					player.storage.xjzh_sanguo_shouye = {};
				},
				_priority: -5,
				async cost(event, trigger, player) {
					const result = await player
						.chooseTarget('〖授业〗:请选择一名其他角色令其随机获得一个技能直到其发动该技能', lib.filter.notMe)
						.set('ai', (target) => {
							return get.attitude(player, target);
						})
						.forResult();
					event.result = result;
				},
				async content(event, trigger, player) {
					if (!event.targets) return;
					let list = [];
					game.xjzh_wujiangpai().forEach((item) => {
						if (lib.character[item].skills) {
							list.addArray(
								lib.character[item].skills.filter((skill) => {
									if (!get.skillInfoTranslation(skill)) return false;
									if (lib.skill.global.includes(skill)) return false;
									return !get.skillCategoriesOf(skill, player).some((type) => ['Charlotte', '主公技', '觉醒技', '限定技', '隐匿技', '使命技', '持恒技'].includes(type));
								})
							);
						}
					});
					let skill = list.randomGet();
					event.targets[0].addTempSkills(skill, { player: `${skill}After` });
				},
			},
			xjzh_sanguo_xianshou: {
				trigger: {
					global: ['logSkillBegin', 'useSkillBegin'],
				},
				silent: true,
				_priority: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (event.player != player) {
						var list = player.storage.xjzh_sanguo_shouye,
							list2 = [];
						for (var i in list) {
							list2.push(i);
						}
						if (list2.includes(event.player.name1)) {
							if (list[event.player.name1] == event.skill) return true;
						}
					}
					if ((event.player = player)) {
						if (!player.storage.xjzh_sanguo_xianshou || !player.storage.xjzh_sanguo_xianshou.length) return false;
						var list = player.storage.xjzh_sanguo_xianshou;
						if (list.includes(event.skill)) return true;
					}
					return false;
				},
				group: ['xjzh_sanguo_xianshou_draw'],
				content() {
					'step 0';
					if (trigger.player == player) {
						event.goto(3);
						return;
					}
					('step 1');
					var list = trigger.player.getSkills(null, false, false).filter(function (skill) {
						var info = lib.skill[skill];
						var skills = player.storage.xjzh_sanguo_shouye,
							list2 = [];
						for (var i in skills) {
							list2.push(i);
						}
						if (list2.includes(trigger.player.name1)) {
							if (skills[trigger.player.name1] == skill) return false;
						}
						return info && !info.unique && !info.limited && !info.juexingji && !info.dutySkill && !info.equipSkill && !info.cardSkill && !lib.skill.global.includes(skill);
					});
					if (!list.length) {
						player.say('没有符合条件的技能');
						return;
					}
					var dialog = ui.create.dialog('forcebutton');
					dialog.add('请选择获得一项技能');
					for (var i = 0; i < list.length; i++) {
						if (lib.translate[list[i] + '_info']) {
							var translation = get.translation(list[i]);
							if (translation[0] == '新' && translation.length == 3) {
								translation = translation.slice(1, 3);
							} else {
								translation = translation.slice(0, 2);
							}
							var item = dialog.add('<div class="popup pointerdiv" style="width:95%;display:inline-block"><div class="skill">〖' + translation + '〗</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
							item.firstChild.link = list[i];
						}
					}
					player
						.chooseControl(list, 'cancel2')
						.set('ai', function () {
							return get.max(list, get.skillRank, 'item');
						})
						.set('dialog', dialog);
					('step 2');
					if (result.control) {
						if (result.control != 'cancel2') {
							player.addSkillLog(result.control);
							if (!player.storage.xjzh_sanguo_xianshou) player.storage.xjzh_sanguo_xianshou = [];
							player.storage.xjzh_sanguo_xianshou.push(result.control);
						} else {
							event.finish();
						}
					}
					event.finish();
					('step 3');
					var list = player.storage.xjzh_sanguo_xianshou;
					if (list.includes(trigger.skill)) {
						player.removeSkillLog(trigger.skill, true);
						list.remove(trigger.skill);
						player.storage.xjzh_sanguo_xianshou = list.slice(0);
					}
				},
				subSkill: {
					draw: {
						trigger: {
							player: 'drawBegin',
						},
						forced: true,
						_priority: 1,
						filter(event, player) {
							var list = player.storage.xjzh_sanguo_shouye,
								list2 = [];
							for (var i in list) {
								list2.push(i);
							}
							return list2.length;
						},
						content() {
							var list = player.storage.xjzh_sanguo_shouye,
								list2 = [];
							for (var i in list) {
								list2.push(i);
							}
							if (list2.length) trigger.num += list2.length;
						},
					},
				},
			},
			xjzh_sanguo_lundao: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				selectTarget() {
					var player = _status.event.player;
					var num = game.countPlayer(function (current) {
						return player.canCompare(current);
					});
					var list = player.storage.xjzh_sanguo_shouye,
						list2 = [];
					for (var i in list) {
						list2.push(i);
					}
					var num2 = Math.min(num, list2.length);
					if (num2 > 1) return [1, Math.min(num2, 3)];
					return [1, 1];
				},
				mod: {
					targetEnabled(card, player, target, now) {
						if (player.hasSkill('xjzh_sanguo_lundao_target')) return false;
					},
				},
				group: 'xjzh_sanguo_lundao_use',
				filter(event, player) {
					var list = player.storage.xjzh_sanguo_shouye,
						list2 = [];
					for (var i in list) {
						list2.push(i);
					}
					return game.hasPlayer(function (current) {
						return player.canCompare(current) && list2.length;
					});
				},
				content() {
					'step 0';
					event.count = 0;
					event.count2 = 0;
					event.cards = [];
					('step 1');
					player.chooseToCompare(target);
					('step 2');
					if (result.winner == player) {
						event.count++;
					} else {
						event.count2++;
					}
					if (result.player) {
						game.cardsGotoOrdering(result.player);
						event.cards.push(result.player);
					}
					if (player.canCompare(target)) event.goto(1);
					('step 3');
					if (event.count > event.count2) {
						game.log(player, '拼点结果为' + get.translation(event.count + event.count2) + '局' + get.translation(event.count) + '胜,最终结果为胜利');
						target.addSkill('xjzh_sanguo_lundao_target');
						target.addSkill('xjzh_sanguo_lundao_remove');
						player.gain(event.cards, player, 'gain2');
					} else {
						game.log(player, '拼点结果为' + get.translation(event.count + event.count2) + '局' + get.translation(event.count) + '胜,最终结果为失败');
						player.loseHp();
					}
				},
				subSkill: {
					target: {},
					remove: {
						trigger: {
							global: 'phaseBegin',
						},
						forced: true,
						_priority: -10,
						filter(event, player) {
							if (!get.is.playerNames(event, player, 'xjzh_sanguo_nanhua')) return false;
							return true;
						},
						content() {
							player.removeSkill('xjzh_sanguo_lundao_target');
							player.removeSkill('xjzh_sanguo_lundao_remove');
						},
					},
					use: {
						trigger: {
							global: ['logSkillBegin', 'useSkillBegin'],
						},
						popup: false,
						audio: 'xjzh_sanguo_lundao',
						filter(event, player) {
							var skills = event.skill;
							var info = get.info(skills);
							if (!event.player.hasSkill('xjzh_sanguo_lundao_target')) return false;
							if (!lib.translate[event.skill + '_info']) return false;
							if (lib.skill.global.includes(event.skill)) return false;
							if (info && (info.limited || info.juexingji || info.dutySkill || info.equipSkill || info.sub || info.unique || !info.direct)) return false;
							if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) return false;
							if (event.targets.length && event.targets.includes(player)) return true;
							return false;
						},
						content() {
							'step 0';
							player.chooseTarget(`〖论道〗:请选择为技能${trigger.skill}重新指定一个目标`, 1, true).set('ai', function (target) {
								return game.players.randomGet();
							});
							('step 1');
							if (result.bool) {
								trigger.targets.remove(player);
								trigger.targets.push(result.targets[0]);
							}
						},
					},
				},
				ai: {
					order: 8,
					result: {
						player(player, target) {
							var att = get.attitude(player, target);
							if (att > 0) return;
							var hs = player.getCards('h');
							var list = [];
							for (var i of hs) {
								if (i.number > 10) list.push(i);
							}
							if (list.length > Math.floor(hs.length / 2)) return 1;
							return -1.5;
						},
					},
				},
			},
			xjzh_sanguo_shiyong: {
				trigger: {
					player: 'damageBegin3',
				},
				forced: true,
				_priority: 2,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!event.cards || !event.cards.length) return false;
					let info = get.info(event.cards[0]);
					if (!event.source) return false;
					if (info && info.allowMultiple != undefined && info.allowMultiple == false) return false;
					if (info.multitarget) return false;
					return !event.numFixed;
				},
				async content(event, trigger, player) {
					trigger.changeToZero();
					player.loseMaxHp();
					trigger.source.draw(2);
					if (get.color(trigger.card) == 'red' && trigger.source.isDamaged()) trigger.source.recover();
				},
				ai: {
					expose: 0.3,
					threaten: 3,
					effect: {
						target(card, player, target) {
							let info = get.info(card);
							if (info.multitarget || info.allowMultiple == false) {
								if (get.color(card) == 'red') return [1, -2];
								return [2, -1];
							}
						},
					},
				},
			},
			xjzh_sanguo_yaowu: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: lib.filter.notMe,
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					let target = event.targets[0],
						cards = target.getCards('h', (card) => get.tag(card, 'damage'));
					player.loseMaxHp();
					target.gainMaxHp();
					target.showHandcards();
					while (true) {
						if (!cards.length) break;
						const { links } = await player
							.chooseCardButton(cards, 1, `〖耀武〗:请选择${get.translation(target)}的[伤害]手牌使用之`)
							.set('filterButton', (button) => {
								if (!get.tag(button.link, 'damage')) return false;
								return player.hasUseTarget(button.link);
							})
							.set('ai', (button) => {
								if (player.hasUseTarget(button.link)) return player.getUseValue(button.link);
								return 0;
							})
							.forResult();

						if (links) {
							if (player.hasUseTarget(links[0])) player.chooseUseTarget(links[0], true);
						} else break;
					}
				},
				ai: {
					expose: 0.5,
					threaten: 2,
					result: {
						target: 1,
						player: (player, target, card) => target.countCards('h', (card) => get.tag(card, 'damage')),
					},
				},
			},
			xjzh_sanguo_yangwei: {
				trigger: {
					player: 'loseMaxHpAfter',
				},
				forced: true,
				limited: true,
				_priority: 10,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter: (event, player) => player.maxHp <= 2,
				async content(event, trigger, player) {
					player.awakenSkill('xjzh_sanguo_yangwei');
					let targets = game.filterPlayer((current) => current != player);
					for (let target of targets) {
						target.loseMaxHp();
					}
					player.gainMaxHp(targets.length);
					player.hp = player.maxHp;
					player.update();
				},
			},
			xjzh_sanguo_zhawang: {
				trigger: {
					player: 'dieAfter',
				},
				forced: true,
				forceDie: true,
				_priority: Infinity,
				mode: ['identity'],
				limited: true,
				audio: 'ext:仙家之魂/audio/skill:1',
				content() {
					'step 0';
					player.awakenSkill('xjzh_sanguo_zhawang');
					('step 1');
					game.addGlobalSkill('xjzh_sanguo_zhawang_revive');
				},
				subSkill: {
					revive: {
						trigger: {
							global: 'dieBegin',
						},
						forced: true,
						_priority: Infinity,
						audio: 'xjzh_sanguo_zhawang',
						filter(event, player) {
							var zhu = get.zhu(player);
							var players = game.filterPlayer2((current) => get.is.playerNames(current, 'xjzh_sanguo_espsunce'));
							if (!players.length) return false;
							var id = players[0].identity;
							var count = game.countPlayer((current) => current.identity == 'fan');
							if (id == 'fan') {
								if (event.player.identity == 'fan') {
									if (count == 1) return true;
								}
								if (event.player == zhu || event.player.identity == 'nei') {
									if (count == 0) return true;
								}
							}
							if (id == 'nei') {
								if (event.player.identity == 'fan') {
									if (count == 1) return true;
								}
								if (event.player == zhu) return true;
							}
							if (id == 'zhong') {
								return event.player == zhu;
							}
							return false;
						},
						content() {
							'step 0';
							game.playXH(['xjzh_sanguo_zhawang2'].randomGet());
							var players = game.filterPlayer2((current) => get.is.playerNames(current, 'xjzh_sanguo_espsunce'));
							if (game.dead.includes(players[0])) {
								event.targets = players[0];
							} else {
								event.finish();
							}
							('step 1');
							trigger.cancel();
							trigger.player.recoverTo(1);
							('step 2');
							event.targets.revive(3);
							event.targets.phase('nodelay');
							game.removeGlobalSkill('xjzh_sanguo_zhawang_revive');
							('step 3');
							const evt = _status.event.getParent('phase');
							if (evt && evt.name) {
								evt.finish();
							}
						},
					},
				},
			},
			xjzh_sanguo_xingwu: {
				trigger: {
					player: ['logSkillBegin', 'useSkillBegin'],
				},
				silent: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					var info = get.info(event.skill);
					if (!lib.translate[event.skill + '_info']) return false;
					if (lib.skill.global.includes(event.skill)) return false;
					return event.skill != 'xjzh_sanguo_xingwu';
				},
				content() {
					var skills = [],
						skills2 = [];
					var list = game.xjzh_wujiangpai().filter(function (evt) {
						return lib.character[evt][1] == 'wu';
					});
					for (var i of list) {
						if (!lib.character[i][3] || !lib.character[i][3].length) continue;
						skills.addArray(
							lib.character[i][3].filter(function (skill) {
								var info = lib.skill[skill];
								return info && !info.charlotte && !info.dutySkill && !info.juexingji && !info.limited && !info.unique && !info.sub;
							})
						);
					}
					var bool = false;
					if (get.is.locked(trigger.skill)) {
						bool = true;
					}
					for (var skillx of skills) {
						if (player.skills.includes(skillx)) continue;
						if (bool == false) {
							if (get.is.locked(skillx)) skills2.push(skillx);
						} else {
							if (!get.is.locked(skillx)) skills2.push(skillx);
						}
					}
					if (!skills2.length) {
						player.say('没有符合条件的技能');
						return;
					}
					var link = skills2.randomGet();
					player.addAdditionalSkill('xjzh_sanguo_xingwu', link);
					player.popup(link);
				},
			},
			xjzh_sanguo_jiang: {
				trigger: {
					player: 'useCardToEnd',
					target: 'useCardToEnd',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!get.tag(event.card, 'damage')) return false;
					if (event.getParent('xjzh_sanguo_jiang').name == 'xjzh_sanguo_jiang') return false;
					if (event.target == player) return event.player.countCards('he');
					if (event.target != event.targets[0]) return false;
					return event.target.countCards('he');
				},
				forced: true,
				check(event, player) {
					var targets;
					if (event.target && event.target == player) {
						targets = event.player;
					} else {
						targets = event.target;
					}
					var friends = player.getFriends();
					var enemies = player.getEnemies();
					var att = get.attitude(player, targets);
					if (att > 0) return 1;
					if (att <= 0) {
						if (friends > enemies) return 0;
						return 1;
					}
					return 0;
				},
				content() {
					'step 0';
					var targets;
					if (trigger.target == player) {
						targets = trigger.player;
					} else {
						targets = trigger.target;
					}
					targets.chooseToDiscard(1, 'he', true);
					event.targetx = targets;
					('step 1');
					if (result.bool) {
						var inpile = lib.inpile.slice(0).filter(function (card) {
							var ai = lib.card[card].ai;
							if (!ai || !ai.tag || !ai.tag.damage) return false; //QQQ
							return event.targetx.hasUseTarget({ name: card });
						});
						var text = '〖激昂〗:请选择一张牌令' + get.translation(event.targetx) + '使用之';
						player.chooseVCardButton(true, inpile, text).set('ai', function (button) {
							var friends = player.getFriends(true);
							var enemies = player.getEnemies();
							if (friends > enemies) return !get.tag(button.link, 'multitarget');
							return get.tag(button.link, 'multitarget');
						});
					} else {
						event.finish();
					}
					('step 2');
					if (result.links?.length) {
						var card = game.createCard(result.links[0][2]);
						event.targetx.addTempSkill('xjzh_sanguo_jiang_source', 'useCardAfter');
						event.targetx.chooseUseTarget(card, true).set('addCount', false).set('viewAs', true);
					}
				},
				subSkill: {
					source: {
						trigger: {
							source: 'damageBefore',
						},
						forced: true,
						_priority: 10,
						content() {
							var target = game.findPlayer((current) => get.is.playerNames(current, 'xjzh_sanguo_espsunce'));
							trigger.source = target;
						},
					},
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) return [1, 0.6];
						},
						player(card, player, target) {
							if (get.tag(card, 'damage')) return [1, 1];
						},
					},
				},
			},
			xjzh_sanguo_hunzi: {
				trigger: {
					source: 'damageBegin',
					player: 'damageEnd',
				},
				charlotte: true,
				forced: true,
				popup: false,
				_priority: 2,
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					if (trigger.source && trigger.source == player) {
						if (game.hasNature(trigger)) game.setNature(trigger, null, false);
						var history = player.getHistory('sourceDamage', function (evt) {
							return evt && trigger.card && evt.card == trigger.card;
						});
						if (!history.length) {
							player.draw();
						}
					} else if (trigger.player == player && trigger.source != player) {
						player.draw();
					}
				},
			},
			xjzh_boss_shilian_intro: { nobracket: true, unique: true },
			xjzh_qishu_shouyu: {
				mod: {
					targetEnabled(card) {
						if (get.type(card) == 'delay') return false;
					},
				},
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				forced: true,
				_priority: 3,
				filter(event, player) {
					if (event.player == player) return false;
					let cards = lib.inpile.filter((card) => {
						return get.type(card) == 'delay';
					});
					if (
						event.player.countCards('j', (card) => {
							return cards.includes(card.name);
						}) == cards.length
					)
						return false;
					return true;
				},
				async content(event, trigger, player) {
					let cards = lib.inpile.filter((card) => {
						return get.type(card) == 'delay' && !trigger.player.countCards('j', { name: card });
					});
					if (cards.length) {
						trigger.player.executeDelayCardEffect(cards.randomGet());
					}
				},
			},
			xjzh_qishu_shendong: {
				trigger: {
					source: 'damageBegin1',
				},
				forced: true,
				_priority: 3,
				filter(event, player) {
					return !game.hasNature(event, 'ice');
				},
				async content(event, trigger, player) {
					game.setNature(trigger, 'ice');
				},
				subSkill: {
					use: {
						enable: 'phaseUse',
						usable: 1,
						prompt() {
							return '〖深冻〗:选择一名对你造成过伤害的角色,令其弃置x张牌,每少弃置一张牌失去一点体力上限(x为其对你造成伤害的次数).';
						},
						filter(event, player) {
							let history = player.getAllHistory('damage');
							return history.length;
						},
						filterTarget(card, player, target) {
							return target.getAllHistory('sourceDamage', (evt) => {
								return evt && evt.player == player;
							}).length;
						},
						async content(event, trigger, player) {
							let target = event.targets[0];
							let history = target.getAllHistory('sourceDamage', (evt) => {
								return evt && evt.player == player;
							});
							let history2 = player.getAllHistory('damage', (evt) => {
								return evt && evt.source == target;
							});
							const [bool, cards] = await target
								.chooseToDiscard('he', `〖深冻〗:请选择弃置至多${history.length}张牌,否则失去等量体力上限`)
								.set('ai', (card) => {
									return 6 - get.value(card);
								})
								.forResult('bool', 'cards');
							if (bool && cards.length < history.length) {
								target.loseMaxHp(cards.length - history.length);
								await target.getHistory('sourceDamage').removeArray(history);
								await player.getHistory('damage').removeArray(history2);
							}
						},
					},
				},
			},
			xjzh_qishu_feimou: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				_priority: 3,
				filter(event, player) {
					if (event.source == player) return false;
					return event.source && event.source.countCards('h');
				},
				async content(event, trigger, player) {
					let cards = trigger.source.getCards('h');
					player.gain(cards, trigger.source, 'draw');
					let num = get.rand(0, cards.length);
					if (num > 0) {
						let card = cards.randomRemove(num);
						trigger.source.gain(card, player, 'draw');
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
				},
			},
			xjzh_boss_shilian: {
				trigger: {
					global: 'gameStart',
					player: 'enterGame',
				},
				forced: true,
				popup: false,
				fixed: true,
				charlotte: true,
				mode: ['boss'], //QQQ
				async content(event, trigger, player) {
					player.smoothAvatar();
					player.init('xjzh_boss_datianshi');
					_status.noswap = true;
					game.addVideo('reinit2', player, player.name);
					player.addFellow('xjzh_boss_xiaotianshi');
					player.addFellow('xjzh_boss_xiaotianshi');
				},
			},
			xjzh_boss_shilian2: {
				trigger: { player: 'dieBegin' },
				forced: true,
				_priority: -10,
				fixed: true,
				mode: ['boss'], //QQQ
				filter(event, player) {
					return player == game.boss;
				},
				async content(event, trigger, player) {
					if (get.is.playerNames(game.boss, 'xjzh_boss_datianshi')) {
						game.changeBossQ('xjzh_boss_gaotianshi');
						game.boss.addFellow('xjzh_boss_datianshi');
						game.boss.addFellow('xjzh_boss_datianshi');
					} else if (get.is.playerNames(game.boss, 'xjzh_boss_gaotianshi')) {
						game.changeBossQ('xjzh_boss_tianshizhang');
						game.boss.addFellow('xjzh_boss_gaotianshi');
						game.boss.addFellow('xjzh_boss_gaotianshi');
					} else if (get.is.playerNames(game.boss, 'xjzh_boss_tianshizhang')) {
						if (get.xjzh_checkTime('8:00', '12:00') || get.xjzh_checkTime('20:00', '24:00')) {
							game.changeBossQ('xjzh_boss_yinaruisi');
							game.boss.addFellow('xjzh_boss_tianshizhang');
							game.boss.addFellow('xjzh_boss_tianshizhang');
						} else if (get.xjzh_checkTime('12:00', '16:00') || get.xjzh_checkTime('0:00', '4:00')) {
							game.changeBossQ('xjzh_boss_masayier');
							game.boss.addFellow('xjzh_boss_duohunzhe');
							game.boss.addFellow('xjzh_boss_duotianshi');
						} else {
							game.changeBossQ('xjzh_boss_taernasha');
							game.boss.addFellow('xjzh_boss_shachong');
							game.boss.addFellow('xjzh_boss_shachong');
						}
					}
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
					game.boss.phase('nodelay');
				},
			},
			xjzh_boss_shenghui: {
				trigger: {
					player: 'phaseDrawBegin',
				},
				forced: true,
				_priority: 5,
				content() {
					trigger.num += 2;
					player.recover();
				},
			},
			xjzh_boss_shenghui2: {
				trigger: {
					player: ['phaseDrawBegin', 'phaseJieshuBegin'],
				},
				forced: true,
				_priority: 5,
				content() {
					player.chooseDrawRecover(2, 2, true, '〖圣辉〗:请选择摸两张牌或回复两点体力')._triggered = null;
				},
			},
			xjzh_boss_chiyan: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: lib.filter.notMe,
				selectTarget: 1,
				content() {
					'step 0';
					target.showHandcards();
					var cards = target.getCards('h', (card) => card.suit == 'diamond');
					if (cards.length) {
						var cards = cards.slice(0);
						while (cards.length) {
							cards.shift();
							player.useCard({ name: 'sha', nature: 'fire' }, target);
						}
					}
					('step 1');
					if (player.getStat('damage')) {
						var players = player.getFriends(true).sortBySeat();
						for (var i of players) i.recover();
					}
				},
				ai: {
					order: 12,
					result: {
						target: -1,
					},
				},
			},
			xjzh_boss_shenghui3: {
				trigger: {
					player: ['drawBegin', 'recoverBegin'],
				},
				forced: true,
				_priority: 5,
				filter(event, player) {
					if (event.name == 'recover') {
						return game.countPlayer((current) => current.isDamaged()) >= 1;
					}
					return true;
				},
				async content(event, trigger, player) {
					let num = trigger.num;
					const { targets } = await player
						.chooseTarget(`〖圣辉〗:请选择一名其他角色${trigger.name == 'draw' ? `摸${num}张牌` : `回复${num}点体力`}`, lib.filter.notMe)
						.set('ai', (target) => get.attitude(player, target))
						.forResult();

					if (targets) targets[0][trigger.name](num);
					player.changeHujia(1);
				},
			},
			xjzh_boss_caijue: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				content() {
					'step 0';
					var targets = player.getEnemies().sortBySeat();
					event.targets = targets.slice(0);
					('step 1');
					event.target = event.targets.shift();
					('step 2');
					if (event.target.countCards('h') == 0) {
						event.goto(1);
						event.finish();
						return;
					} else if (event.target.countCards('h') == 1) event._result = { cards: event.target.getCards('h') };
					else
						event.target.chooseCard(true).ai = function (card) {
							if (_status.event.getRand() < 0.5) return Math.random();
							return get.value(card);
						};
					('step 3');
					event.target.showCards(result.cards).setContent(function () { });
					event.dialog = ui.create.dialog(get.translation(event.target) + '展示的手牌', result.cards);
					event.videoId = lib.status.videoId++;
					game.broadcast('createDialog', event.videoId, get.translation(event.target) + '展示的手牌', result.cards);
					game.addVideo('cardDialog', null, [get.translation(event.target) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
					event.card2 = result.cards[0];
					game.log(event.target, '展示了', event.card2);
					event._result = {};
					player
						.chooseToDiscard('he', { suit: event.card2.suit }, `〖裁决〗:请弃置一张花色为${get.translation(event.card2.suit)}的牌`, function (card) {
							var evt = _status.event.parent;
							if (get.damageEffect(evt.target, evt.player, evt.player, 'thunder') > 0) {
								return 6.2 + Math.min(4, evt.player.hp) - get.value(card, evt.player);
							}
							return -1;
						})
						.set('prompt', false);
					('step 4');
					if (result.bool) {
						event.target.damage(1, player, 'thunder', 'nocard');
						player.draw();
					}
					event.dialog.close();
					game.addVideo('cardDialog', null, event.videoId);
					game.broadcast('closeDialog', event.videoId);
					('step 5');
					if (event.targets.length) {
						event.goto(1);
					}
				},
				ai: {
					order: 8,
					result: {
						player(player, target, card) {
							if (!player) return;
							var ts = player.getEnemies().length;
							var hs = player.countCards('h');
							if (hs < ts) return 0.5;
							if (hs >= ts) {
								if (hs == ts) return 0.8;
								if (hs > ts) return 1;
								if (hs > ts + 2) return 1.5;
							}
							return 0;
						},
					},
				},
			},
			xjzh_boss_shenghui4: {
				trigger: {
					player: ['phaseDiscardBefore', 'useCard'],
				},
				forced: true,
				_priority: 5,
				filter(event, player) {
					if (event.name == 'phaseDiscard') return true;
					if (event.name == 'useCard') return player.isPhaseUsing();
					return false;
				},
				content() {
					if (trigger.name == 'phaseDiscard') {
						trigger.cancel(null, null, 'notrigger');
					} else {
						var num = player.getDamagedHp();
						var num2 = 1;
						if (player.hasSkill('xjzh_boss_caijue2_on')) {
							[num, num2] = [num2, num];
						}
						if (get.type(trigger.card) == 'basic') {
							trigger.effectCount += num;
							if (num > 0) game.log(trigger.card, '额外结算' + num + '次');
						} else if (get.type(trigger.card) == 'trick') {
							trigger.effectCount += num2;
							if (num2 > 0) game.log(trigger.card, '额外结算' + num2 + '次');
						}
					}
				},
			},
			xjzh_boss_caijue2: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				content() {
					'step 0';
					player.chooseCard(true, 'he', `〖裁决〗:请展示一张牌`);
					('step 1');
					player.showCards(result.cards).setContent(function () { });
					event.dialog = ui.create.dialog(get.translation(player) + '展示的手牌', result.cards);
					event.videoId = lib.status.videoId++;
					game.broadcast('createDialog', event.videoId, get.translation(player) + '展示的手牌', result.cards);
					game.addVideo('cardDialog', null, [get.translation(player) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
					event.card2 = result.cards[0];
					game.log(player, '展示了', event.card2);
					event._result = {};
					('step 2');
					var targets = player.getEnemies().sortBySeat();
					event.targets = targets.slice(0);
					('step 3');
					event.target = event.targets.shift();
					event.target
						.chooseToDiscard(1, 'he', '〖裁决〗:请弃置一张牌', { suit: event.card2.suit }, function (card) {
							var evt = _status.event.parent;
							if (get.damageEffect(evt.target, evt.player, evt.target, 'thunder') > 0) {
								return 6.2 + Math.min(4, evt.player.hp) - get.value(card, evt.player);
							}
							return -1;
						})
						.set('prompt', false);
					('step 4');
					if (!result.bool) {
						event.target.damage(1, player, 'thunder', 'nocard');
						player.draw();
					}
					event.dialog.close();
					game.addVideo('cardDialog', null, event.videoId);
					game.broadcast('closeDialog', event.videoId);
					('step 5');
					if (event.targets.length) {
						event.goto(3);
					}
				},
				ai: {
					order: 8,
					result: {
						player: 1,
					},
				},
				group: 'xjzh_boss_caijue2_damage',
				subSkill: {
					damage: {
						trigger: {
							source: 'damageAfter',
						},
						popup: false,
						prompt: '〖裁决〗:是否转换〖圣辉〗中的数字',
						check(event, player) {
							player.getCardUsable;
							if (player.isHealthy()) {
								if (player.getCardUsable('sha') > 0 && player.hasUsableCard('sha') && !player.hasSkill('xjzh_boss_caijue2_on')) return 0;
								return 1;
							}
							return 1;
						},
						content() {
							if (player.hasSkill('xjzh_boss_caijue2_on')) player.removeSkill('xjzh_boss_caijue2_on', true);
							else player.addSkill('xjzh_boss_caijue2_on');
						},
					},
					on: {
						charlotte: true,
					}, //QQQ
				},
			},
			xjzh_boss_shenyou: {
				charlotte: true,
				mode: ['boss'], //QQQ
				global: ['xjzh_boss_shenyou_use', 'xjzh_boss_shenyou_damage'],
				subSkill: {
					use: {
						trigger: {
							target: 'useCardToTargeted',
						},
						forced: true,
						preHidden: true,
						filter(event, player) {
							if (!get.tag(event.card, 'damage')) return false;
							if (!game.boss.getFriends(true).includes(player)) return false;
							return get.xjzh_deEffect(player);
						},
						content() {
							'step 0';
							var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
							trigger.player
								.chooseToDiscard('〖神佑〗:弃置一张手牌,否则' + get.translation(trigger.card) + '对' + get.translation(player) + '无效')
								.set('ai', function (card) {
									if (_status.event.eff > 0) {
										return 10 - get.value(card);
									}
									return 0;
								})
								.set('eff', eff);
							('step 1');
							if (result.bool == false) {
								trigger.parent.excluded.add(player);
							}
						},
						ai: {
							effect: {
								target_use(card, player, target, current) {
									if (get.tag(card, 'damage') && get.attitude(player, target) < 0) {
										if (!game.boss.getFriends(true).includes(target)) return;
										if (!get.xjzh_deEffect(target)) return;
										if (_status.event.name == 'xjzh_boss_shenyou_use') return;
										if (get.attitude(player, target) > 0 && current < 0) return 'zerotarget';
										var bs = player.getCards('h');
										bs.remove(card);
										if (card.cards) bs.removeArray(card.cards);
										else bs.removeArray(ui.selected.cards);
										if (!bs.length) return 'zerotarget';
										if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
										if (bs.length <= 2) {
											for (var i = 0; i < bs.length; i++) {
												if (get.value(bs[i]) < 7) {
													return [1, 0, 1, -0.5];
												}
											}
											return [1, 0, 0.3, 0];
										}
										return [1, 0, 1, -0.5];
									}
								},
							},
						},
					},
					damage: {
						trigger: {
							player: 'damageBegin1',
						},
						forced: true,
						_priority: 3,
						filter(event, player) {
							if (get.xjzh_deEffect(player)) return false;
							if (!game.boss.getFriends(true).includes(player)) return false;
							if (!game.hasNature(event)) return false;
							return true;
						},
						content() {
							trigger.changeToZero();
						},
					},
					ai: {
						effect: {
							target(card, player, target) {
								if (!game.boss.getFriends(true).includes(target)) return;
								if (!get.xjzh_deEffect(target)) return;
								if (get.tag(card, 'natureDamage')) return [0, 0];
							},
						},
					},
				},
			},
			xjzh_boss_fusu: {
				trigger: {
					player: 'loseAfter',
					global: ['useCardEnd', 'recoverEnd'],
				},
				forced: true,
				_priority: 5,
				filter(event, player) {
					if (event.name == 'lose' && event.cards.some((card) => get.color(card) == 'red')) return true;
					if (_status.currentPhase == player) return false;
					if (event.player == player) return false;
					if (event.player.isDead()) return false;
					if (event.name == 'useCard') {
						if (!event.cards || !event.cards.length) return false;
						if (event.card.suit != 'heart') return false;
					}
					return true;
				},
				async content(event, trigger, player) {
					if (trigger.name == 'lose') {
						if (player.isHealthy()) player.draw();
						else player.recover();
					} else {
						const { bool } = await player
							.chooseBool(`〖复苏〗:是否视为对${get.translation(trigger.player)}使用一张【杀】`)
							.set('ai', () => {
								return -get.attitude(player, trigger.player);
							})
							.forResult();

						if (bool) {
							let cards = game.createCard('sha', null, null, null);
							await player.useCard(cards, trigger.player, false);
							let history = player.getHistory('sourceDamage', (evt) => {
								return evt && evt.cards[0] == cards && evt.getParent(3).name == 'xjzh_boss_fusu' && evt.player == trigger.player;
							});
							if (history.length && trigger.player.countCards('he')) player.gain(trigger.player.getCards('he'), trigger.player, 'gain2', 'log')._triggered = null;
						}
					}
				},
			},
			xjzh_boss_ganran: {
				trigger: {
					source: 'damageAfter',
				},
				forced: true,
				_priority: 5,
				marktext: '感染',
				intro: {
					name: '感染',
					content: '#',
				},
				global: 'xjzh_boss_ganran_buff',
				group: 'xjzh_boss_ganran_use',
				addMark(player) {
					let num = player.countMark('xjzh_boss_ganran');
					if (num >= 3) player.addSkill('fengyin');
					else player.removeSkill('fengyin', true);
				},
				filter(event, player) {
					return !event.numFixed;
				},
				async content(event, trigger, player) {
					trigger.player.addMark('xjzh_boss_ganran', 1);
					lib.skill.xjzh_boss_ganran.addMark(trigger.player);
				},
				subSkill: {
					buff: {
						trigger: {
							player: ['phaseDrawBegin', 'damageBegin', 'phaseUseBegin'],
						},
						forced: true,
						_priority: 10,
						filter(event, player) {
							return player.hasMark('xjzh_boss_ganran');
						},
						async content(event, trigger, player) {
							let name = trigger.name,
								num = player.countMark('xjzh_boss_ganran');
							switch (name) {
								case 'phaseDraw':
									if (num >= 1) {
										trigger.num -= 1;
										game.log(player, '被齐尔领主感染,摸牌数减一');
									}
									break;
								case 'damage':
									if (num >= 2 && trigger.source == game.findPlayer((i) => get.is.playerNames(i, 'xjzh_boss_qier'))) {
										trigger.num++;
										game.log(player, '被齐尔领主感染,受到齐尔领主的伤害加一');
									}
									break;
								case 'phaseUse':
									if (num >= 4) {
										trigger.cancel();
										game.log(player, '被齐尔领主感染,跳过了出牌阶段');
									}
									break;
							}
						},
					},
					use: {
						enable: 'phaseUse',
						usable: 1,
						filter(event, player) {
							return game.countPlayer((p) => p.hasMark('xjzh_boss_ganran'));
						},
						filterTarget(card, player, target) {
							if (ui.selected.targets.length) return true;
							return target.countMark('xjzh_boss_ganran');
						},
						selectTarget: 2,
						prompt: '〖感染〗:请选择两名角色移动其中一名角色的<感染>标记',
						targetprompt: ['失去标记', '获得标记'],
						multitarget: true,
						async content(event, trigger, player) {
							let targets = event.targets.slice(0);
							targets[0].removeMark('xjzh_boss_ganran', 1);
							targets[1].addMark('xjzh_boss_ganran', 1);
							targets[1].loseHp();
							lib.skill.xjzh_boss_ganran.addMark(targets[0]);
							lib.skill.xjzh_boss_ganran.addMark(targets[1]);
						},
						ai: {
							order: 8,
							expose: 0.3,
							result: {
								target(player, target, card) {
									if (ui.selected.targets.length == 0) return 1;
									return -1;
								},
							},
						},
					},
				},
			},
			xjzh_boss_xuezhou: {
				trigger: {
					global: ['phaseAfter', 'drawBegin'],
				},
				forced: true,
				_priority: 3,
				filter(event, player) {
					if (event.name == 'draw') return event.player == player;
					return event.player.hasMark('xjzh_boss_ganran');
				},
				content() {
					'step 0';
					if (trigger.name == 'draw') {
						event.goto(2);
						return;
					}
					trigger.player.removeMark('xjzh_boss_ganran', 1);
					('step 1');
					lib.skill.xjzh_boss_ganran.addMark(trigger.player);
					('step 2');
					var num = 0;
					for (var target of game.players) {
						if (!target.hasMark('xjzh_boss_ganran')) continue;
						num += Math.max(0, target.countMark('xjzh_boss_ganran') - target.hp);
					}
					trigger.num += num;
				},
			},
			xjzh_boss_dianmao: {
				trigger: {
					player: 'useCardToPlayer',
					target: 'useCardToTarget',
				},
				forced: true,
				_priority: 3,
				filter(event, player) {
					if (event.getParent('xjzh_boss_dianmao').name == 'xjzh_boss_dianmao') return false;
					if (!get.tag(event.cards[0], 'damage')) return false;
					if (event.target == player && event.player != player) {
						return event.player.countCards('h') > 0;
					}
					if (event.player == player && event.target != player) {
						return event.target.countCards('h') > 0;
					}
					return false;
				},
				content() {
					'step 0';
					if (trigger.target == player && trigger.player != player) {
						event.targets = trigger.player;
					} else if (trigger.target != player && trigger.player == player) {
						event.targets = trigger.target;
					}
					('step 1');
					player.chooseCardButton(event.targets.getCards('h')).set('ai', function (button) {
						if (button.link.suit == 'spade') return 1;
						return 0;
					});
					('step 2');
					if (result.links?.length) {
						player.showCards(result.links[0]);
						var card = result.links[0];
						if (card.suit == 'spade') {
							event.targets.discard(card);
							player.useCard({ name: 'sha', nature: 'thunder' }, event.targets, false).set('addCount', false);
						}
					}
				},
			},
			xjzh_boss_dianchong: {
				trigger: {
					global: 'damageAfter',
					source: 'damageSource',
				},
				forced: true,
				_priority: 3,
				mark: true,
				intro: {
					name: '电冲',
					content: '#',
				},
				filter(event, player, name) {
					if (name == 'damageSource') {
						return player.hasMark('xjzh_boss_dianchong');
					}
					if (name == 'damageAfter') {
						if (!game.hasNature(event, 'thunder')) return false;
						if (event.source && event.source == player) return true;
						if (event.source != player && event.player == player) return true;
						return false;
					}
					return false;
				},
				async content(event, trigger, player) {
					if (event.triggername == 'damageSource') {
						let num = 2 * (player.countMark('xjzh_boss_dianchong') / 100);
						game.xjzh_Criticalstrike(player, num, 2, false);
					} else {
						let target;
						if (trigger.source == player && trigger.player != player) {
							target = trigger.player;
						} else if (trigger.source != player && trigger.player == player) {
							target = trigger.source;
						}
						player.addMark('xjzh_boss_dianchong', trigger.num);
						if (target) target.changexjzhBUFF('gandian', 1);
					}
				},
			},
			xjzh_boss_dianhua: {
				enable: 'phaseUse',
				filter(event, player) {
					return player.hasMark('xjzh_boss_dianchong');
				},
				group: 'xjzh_boss_dianhua_phase',
				content() {
					'step 0';
					player.removeMark('xjzh_boss_dianchong', 1);
					('step 1');
					var cards = get.cards()[0];
					player.showCards(cards);
					if (cards.suit != 'spade') {
						player.gain(cards, 'gain2', 'log');
						event.finish();
						return;
					}
					('step 2');
					player
						.chooseTarget('〖电花〗:对一名角色造成1点雷属性伤害', function (card, player, target) {
							return target != player;
						})
						.set('ai', function (target) {
							return get.damageEffect(target, player, player, 'thunder');
						});
					('step 3');
					if (result.targets?.length) {
						result.targets[0].damage(player, 1, 'nocard', 'thunder');
					}
				},
				subSkill: {
					phase: {
						trigger: {
							global: ['phaseDrawBegin', 'phaseUseBegin'],
						},
						forced: true,
						_priority: 10,
						filter(event, player) {
							if (get.xjzhBUFFNum(event.player, 'gandian') > 0) {
								var num = player.countMark('xjzh_boss_dianchong') / 100;
								if (Math.random() <= num) return true;
							}
							return false;
						},
						content() {
							'step 0';
							trigger.cancel(null, null, 'notrigger');
							('step 1');
							player[trigger.name]();
						},
					},
				},
				ai: {
					order() {
						var player = _status.event.player;
						return player.countMark('xjzh_boss_dianchong');
					},
					result: {
						player(player, target) {
							var num = player.countMark('xjzh_boss_dianchong');
							if (num == 1) return 0;
							return player.countMark('xjzh_boss_dianchong');
						},
					},
				},
			},
			xjzh_boss_mengdu: {
				trigger: {
					source: 'damageBegin',
				},
				forced: true,
				_priority: 3,
				content() {
					'step 0';
					game.setNature(trigger, 'poison');
					('step 1');
					var num = (player.hp * 10) / 100;
					if (Math.random() <= num) {
						var evt = event.getParent('damage');
						if (evt && evt.getParent) {
							var next = game.createEvent('xjzh_boss_mengdu_zhongdu', false, evt.parent);
							next.player = player;
							next.target = trigger.player;
							next.setContent(function () {
								'step 0';
								target.changexjzhBUFF('zhongdu', 1, true);
								('step 1');
								player.draw(get.xjzhBUFFNum(target, 'zhongdu'));
							});
						}
					}
				},
			},
			xjzh_boss_huanshen: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				limited: true,
				init(player, skill) {
					player.storage[skill] = false;
				},
				derivation: 'xjzh_boss_exing',
				filter(event, player) {
					if (player.storage.xjzh_boss_huanshen) return false;
					return player.hp <= Math.round(player.maxHp / 3);
				},
				mode: ['boss'], //QQQ
				content() {
					'step 0';
					player.awakenSkill('xjzh_boss_huanshen');
					player.storage.xjzh_boss_huanshen = true;
					('step 1');
					var num = Math.round(player.maxHp / 3);
					player.recoverTo(num);
					('step 2');
					('step 3');
					lib.translate.xjzh_boss_duruierx = '督瑞尔的幻影';
					var follow = player.addFellow('xjzh_boss_duruier');
					follow.removeSkill('xjzh_boss_huanshen', true);
					follow.name = 'xjzh_boss_duruierx';
					follow.name1 = 'xjzh_boss_duruierx';
					follow.node.name.innerHTML = '督瑞尔的幻影';
					var follow = player.addFellow('xjzh_boss_duruier');
					follow.removeSkill('xjzh_boss_huanshen', true);
					follow.name = 'xjzh_boss_duruierx';
					follow.name1 = 'xjzh_boss_duruierx';
					follow.node.name.innerHTML = '督瑞尔的幻影';
					player.addSkillLog('xjzh_boss_exing');
				},
			},
			xjzh_boss_exing: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				_priority: 10,
				firstDo: true,
				filter(event, player) {
					if (!event.card || !event.cards.length) return false;
					if (!event.target || !event.targets.length) return false;
					if (get.xjzhBUFFNum(event.target, 'zhongdu') == 0) return false;
					return get.tag(event.card, 'damage');
				},
				content() {
					'step 0';
					event.num = get.xjzhBUFFNum(trigger.target, 'zhongdu');
					('step 1');
					target.changexjzhBUFF('zhongdu', -event.num, true);
					('step 2');
					trigger.effectCount += event.num;
					game.log(trigger.card, '额外结算' + get.xjzhBUFFNum(trigger.target, 'zhongdu') + '次');
				},
				ai: {
					result: {
						target(player, target, card) {
							if (!target) return;
							return get.xjzhBUFFNum(target, 'zhongdu');
						},
					},
				},
			},
			xjzh_boss_lianji: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				_priority: 10,
				firstDo: true,
				charlotte: true,
				fixed: true,
				superCharlotte: true,
				init(player) {
					player.storage.xjzh_boss_lianji = new Map([
						['use', 3],
						['count', 1],
						['type', [0, 0]],
					]);
				},
				mark: true,
				marktext: '连',
				intro: {
					name: '连击',
					content(storage, player) {
						let list = storage.get('type');
						return `基本牌:${storage.get('type')[0]}张<br>锦囊牌:${storage.get('type')[1]}张`;
					},
				},
				mod: {
					aiOrder(player, card, num) {
						let storage = player.storage.xjzh_boss_lianji;
						let typeNum = storage.get('type'),
							use = storage.get('use');
						if (typeNum[0] >= use && get.type(card) == 'trick') return num + 3;
						if (typeNum[1] >= use && get.type(card) == 'basic') return num + 3;
						return num;
					},
				},
				filter(event, player) {
					return ['trick', 'basic'].includes(get.type(event.cards[0]));
				},
				async content(event, trigger, player) {
					let storage = player.storage.xjzh_boss_lianji,
						type = get.type(trigger.cards[0]),
						bool = false;
					if (type == 'basic') {
						await storage.set('type', [storage.get('type')[0] + 1, storage.get('type')[1]]);
						if (storage.get('type')[1] >= storage.get('use')) {
							await storage.set('type', [storage.get('type')[0], 0]);
							bool = true;
						}
					} else {
						await storage.set('type', [storage.get('type')[0], storage.get('type')[1] + 1]);
						if (storage.get('type')[0] >= storage.get('use')) {
							await storage.set('type', [0, storage.get('type')[1]]);
							bool = true;
						}
					}
					if (bool == true) {
						let num = storage.get('count');
						trigger.effectCount += num;
						game.log(trigger.card, '额外结算' + num + '次');
					}
				},
			},
			xjzh_boss_qiangji: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				_priority: 10,
				firstDo: true,
				charlotte: true,
				fixed: true,
				superCharlotte: true,
				filter(event, player) {
					if (!event.cards || !event.cards.length) return false;
					return true;
				},
				async content(event, trigger, player) {
					let card = trigger.cards[0];
					if (player.hasUseTarget(card)) await player.chooseUseTarget(card, false);
					let list = [];
					while (true) {
						let cards = get.cards()[0];
						player.showCards(cards);
						if (cards.number == card.number || cards.suit == card.suit) list.push(cards);
						else {
							if (list.length) player.gain(list, 'gain2', 'log', player);
							break;
						}
					}
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
					player.phase('nodelay');
				},
			},
			xjzh_boss_zenghen: {
				trigger: {
					player: 'dying',
				},
				forced: true,
				limited: true,
				charlotte: true,
				fixed: true,
				superCharlotte: true,
				derivation: 'xjzh_boss_xueyan',
				init(player, skill) {
					player.addMark(skill, 3, false);
				},
				filter(event, player) {
					return player.hasMark('xjzh_boss_zenghen');
				},
				async content(event, trigger, player) {
					player.removeMark('xjzh_boss_zenghen', 1, false);
					await player.gainMaxHp(player.maxHp);
					player.recoverTo(player.maxHp);
					player.update();
					let targets = player.getEnemies().sortBySeat(player);
					for (let target of targets) {
						target.damage(1, player, 'fire', 'nocard');
						target.changexjzhBUFF('ranshao', 1);
					}
					if (player.hasSkill('xjzh_boss_lianji')) {
						let controlList = ['红色数字减一', '蓝色数字加一'],
							storage = player.storage.xjzh_boss_lianji;
						const { control } = await player.chooseControl(controlList).forResult();
						if (control == '红色数字减一') {
							storage.set('use', storage.get('use') == 1 ? 1 : storage.get('use') - 1);
						} else {
							storage.set('count', storage.get('count') + 1);
						}
					}
					if (!player.hasSkill('xjzh_boss_xueyan')) await player.addSkills('xjzh_boss_xueyan');
				},
			},
			xjzh_boss_xueyan: {
				trigger: {
					source: 'damageEnd',
				},
				filter(event, player) {
					if (event.player.isDead()) return false;
					return event.source != event.player;
				},
				check(event, player) {
					return -get.attitude(player, event.player);
				},
				async content(event, trigger, player) {
					let cards = get.cards()[0];
					player.showCards(cards);
					if (get.color(cards) == 'red') {
						trigger.player.damage(1, player, 'fire', 'nocard');
						trigger.player.changexjzhBUFF('ranshao', 1);
					} else {
						trigger.player.changexjzhBUFF('yishang', 1);
					}
				},
			},
			xjzh_boss_fennu: {
				trigger: {
					player: 'phaseBefore',
				},
				forced: true,
				_priority: Infinity,
				firstDo: true,
				charlotte: true,
				fixed: true,
				superCharlotte: true,
				mark: true,
				marktext: '怒',
				intro: {
					name: '愤怒',
					mark(dialog, storage, player) {
						var storage = player.storage.xjzh_boss_fennu;
						if (storage) {
							dialog.addSmall([storage, 'vcard']);
						} //QQQ
					},
					markcount(storage, player) {
						var storage = player.storage.xjzh_boss_fennu;
						return storage?.length;
					},
				},
				init(player) {
					if (!player.storage.xjzh_boss_fennu) player.storage.xjzh_boss_fennu = [];
				},
				//锁定技,你的回合开始前,你选择获得1个奇术要件的效果,移除你已获得的奇术要件效果,若你的体力值小于你体力上限的一半,则将<获得1个>改为<获得至多3个>,若你的体力值不大于你的体力上限的1/3,则视为场上其他角色依次对自己使用一张【杀】
				content() {
					'step 0';
					var { ...cards } = lib.xjzh_qishuyaojians;
					var list = [];
					for (var i in cards) {
						if (['xjzh_qishu_wuyan', 'xjzh_qishu_fengbaopaoxiao', 'xjzh_qishu_waxilidedaogao', 'xjzh_qishu_fenglangkx', 'xjzh_qishu_hakankouyu', 'xjzh_qishu_lietiangong', 'xjzh_qishu_wumingzhe'].includes(i)) continue;
						var cardname = i;
						lib.card[cardname] = {
							fullimage: false,
							image: 'ext:仙家之魂/image/qishuyaojian/cards/' + i + '.jpg',
						};
						lib.translate[cardname] = i.translate;
						lib.translate[cardname + '_info'] = i.translate_info;
						list.push(cardname);
					}
					event.func = function (skills) {
						var skillsx = lib.xjzh_qishuyaojians[skills];
						if (skillsx.skill) {
							var newSkill = skills;
							if (!lib.skill[newSkill]) {
								lib.skill[newSkill] = skillsx.skill;
								lib.skill[newSkill].charlotte = true;
								lib.skill[newSkill].xjzh_qishuSkill = true;
								lib.skill[newSkill].superChocolate = true;
								lib.skill[newSkill].nobracket = true;
								lib.skill[newSkill].locked = true;
								if (lib.skill[newSkill].priority === undefined) lib.skill[newSkill].priority = 5;
								if (skills.skillName) {
									lib.translate[newSkill] = skillsx.skillName;
								} else {
									lib.translate[newSkill] = skillsx.translate;
								}
								if (skills.skillInfo) {
									lib.translate[newSkill + '_info'] = skillsx.skillInfo;
								} else {
									lib.translate[newSkill + '_info'] = skillsx.translate_info;
								}
							}
							player.addSkillLog(newSkill);
						}
					};
					var num = 1;
					if (player.hp < player.maxHp / 2) num = [1, 3];
					var str = '〖愤怒〗:选择装备';
					if (num == 1) str += '1个奇术要件';
					else str += '至多3个奇术要件';
					var next = player.chooseButton([str, [list, 'vcard']]).set('filterButton', function (button) {
						var link = button.link[2];
						var level = cards[link].level;
						return level < 5 || 1;
					});
					next.set('ai', function (button) {
						var link = button.link[2];
						var level = cards[link].level;
						return get.rand(1, 4);
					});
					next.set('selectButton', function () {
						var player = _status.event.player;
						return num;
					});
					next.set('num', num);
					('step 1');
					if (result.bool) {
						if (player.storage.xjzh_boss_fennu.length) {
							var storage = player.storage.xjzh_boss_fennu;
							for (var i = 0; i < storage.length; i++) {
								if (player.hasSkill(storage[i])) {
									player.removeSkill(storage[i], true);
									player.storage.xjzh_boss_fennu.remove(storage[i]);
								}
							}
						}
						for (var i of result.links) {
							event.func(i[2]);
							player.storage.xjzh_boss_fennu.push(i[2]);
						}
						var card = ui.create.card();
						card.classList.add('infohidden');
						card.classList.add('infoflip');
						player.$gain2(card);
					}
					('step 2');
					if (player.hp <= player.maxHp / 3) {
						game.countPlayer(function (current) {
							if (current != player) current.useCard({ name: 'sha' }, current);
						});
					}
				},
			},
			xjzh_boss_edu: {
				enable: 'phaseUse',
				charlotte: true,
				fixed: true,
				superCharlotte: true,
				nogainsSkill: true,
				usable: 1,
				filterTarget(card, player, target) {
					if (target.isMad()) return false;
					return target != player;
				},
				filter(event, player) {
					var num = player.getEnemies().length;
					if (
						game.countPlayer(function (current) {
							return current.isMad() && current.isEnemiesOf(player);
						}) < num
					)
						return true;
					return false;
				},
				content() {
					player.loseHp();
					target.goMad({ player: 'phaseAfter' });
					if (player.hp < player.maxHp / 2) {
						player.loseMaxHp();
						game.countPlayer(function (current) {
							if (current != player) target.useCard({ name: 'juedou' }, current);
						});
					}
				},
				ai: {
					order: 10,
					result: {
						player(player) {
							if (player.hp < player.maxHp / 2) return -1;
							if (player.maxHp <= 3) return -2;
							return player.hp - player.maxHp / 2;
						},
						target(player, target, card) {
							if (target.hasFriend()) return -1;
							return 2;
						},
					},
				},
			},
			xjzh_boss_canren: {
				trigger: {
					source: ['damageEnd'],
				},
				charlotte: true,
				fixed: true,
				superCharlotte: true,
				nogainsSkill: true,
				_priority: 10,
				forced: true,
				filter(event, player) {
					if (event.player.isDead()) return false;
					if (!event.player.countCards('he')) return false;
					return true;
				},
				content() {
					'step 0';
					player.gainPlayerCard(trigger.player, 'he', true);
					('step 1');
					var card = result.links[0];
					var cards = get.cards()[0];
					player.showCards(cards);
					if (card.suit == cards.suit) {
						player.gain(cards, player, 'gain2', 'log');
						event.redo();
					}
				},
				ai: {
					result: {
						player: 1,
					},
				},
			},
			xjzh_boss_qingling: {
				trigger: {
					global: ['gameStart', 'dieAfter'],
					player: ['enterGame', 'damageBegin'],
				},
				forced: true,
				charlotte: true,
				superCharlotte: true,
				_priority: -1,
				lastDo: true,
				mark: true,
				mode: ['boss'],
				marktext: '清',
				intro: {
					name: '太平清领',
					content(storage, player) {
						var num = game.phaseNumber;
						return '受到伤害后,若场上黄巾兵数量小于2,你有' + get.translation(num) + '%几率令一个黄巾兵登场';
					},
				},
				mod: {
					globalFrom(from, to, distance) {
						let num = game.countPlayer(function (current) {
							return get.is.playerNames(current, 'xjzh_boss_hj');
						});
						return distance - num;
					},
					playerEnabled(card, player, target) {
						if (get.tag(card, 'damage') && get.is.playerNames(target, 'xjzh_boss_hj')) return false;
					},
				},
				init(player) {
					lib.xjzh_boss_qingling_huangjing = ['xjzh_boss_hjbingyong', 'xjzh_boss_hjlishi', 'xjzh_boss_hjfangshi', 'xjzh_boss_hjshushi', 'xjzh_boss_hjguishi'];
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				group: 'xjzh_boss_qingling_phase',
				filter(event, player) {
					if (get.mode() == 'boss') {
						if (game.boss != player) return false;
					}
					if (
						game.countPlayer(function (current) {
							return current.name.indexOf('xjzh_boss_hj') == 0;
						}).length >= 2
					)
						return false;
					if (event.name == 'damage') {
						return Math.random <= game.phaseNumber / 100;
					}
					if (event.name == 'die') {
						var list = lib.xjzh_boss_qingling_huangjing.slice(0);
						if (!list.includes(event.player.name)) return false;
						return event.player != player && event.player != game.boss && event.player.isDead();
					}
					return true;
				},
				content() {
					'step 0';
					if (trigger.name == 'damage') {
						event.goto(3);
					} else if (trigger.name == 'die' && trigger.player.isDead()) {
						trigger.player.hide();
						event.finish();
						return;
					}
					('step 1');
					('step 2');
					var list = lib.xjzh_boss_qingling_huangjing.slice(0).randomGets(2);
					player.addFellow(list[0]);
					player.addFellow(list[1]);
					event.finish();
					return;
					('step 3');
					var list = lib.xjzh_boss_qingling_huangjing.slice(0);
					for (var i = 0; i < game.dead.length; i++) {
						if (list.includes(game.dead[i])) {
							game.dead[i].show();
							var targetx = list.randomGet();
							game.replacePlayer(game.dead[i], targetx);
							game.log(player, '将一名', targetx, '召集到了场上');
							break;
						}
					}
				},
				subSkill: {
					temp: {},
					phase: {
						trigger: {
							global: 'phaseJieshuBegin',
						},
						forced: true,
						_priority: 3,
						audio: 'xjzh_boss_qingling',
						filter(event, player) {
							if (get.mode() == 'boss' && game.boss != player) return false;
							if (game.hasPlayer((current) => get.is.playerNames(current, 'xjzh_boss_hj')) && !player.hasSkill('xjzh_boss_qingling_temp')) return true;
							return false;
						},
						content() {
							player.addTempSkill('xjzh_boss_qingling_temp');
							player.phase('nodelay');
						},
					},
				},
			},
			xjzh_boss_dianxing: {
				enable: 'phaseUse',
				usable(skill, player) {
					if (player.storage.xjzh_boss_dianxing && player.storage.xjzh_boss_dianxing == 4) return 2;
					return 1;
				},
				mark: true,
				marktext: '电',
				intro: {
					name: '电刑',
					content(storage, player) {
						if (game.phaseNumber < 50) return '你还有' + get.translation(50 - game.phaseNumber) + '回合可以改变〖电刑〗技能形态';
						if (player.storage.xjzh_boss_dianxing) {
							var list = lib.skill.xjzh_boss_dianxing.getSkillList.slice(0);
							var num = player.storage.xjzh_boss_dianxing - 1;
							return '你选择了〖电刑〗升级:<span style="color: gold">' + list[num] + '</span>';
						}
						return '';
					},
				},
				getSkillList: ['主动释放的〖电刑〗可以额外选择一个目标,但其判定成功后不再询问是否重复判定', '主动释放的〖电刑〗判定成功后可以向目标附近友方弹射,但不再询问是否重复判定', '主动释放的〖电刑〗的判定结果改为与弃置牌花色一致,判定成功后令目标感电并摸一张牌', '主动释放的〖电刑〗使用次数+1,但判定失败后须弃置一张牌'],
				filter(event, player) {
					let num;
					if (player.storage.xjzh_boss_dianxing == 4) {
						num = 2;
					} else {
						num = 1;
					} //QQQ
					if (get.skillCount('xjzh_boss_dianxing', player) >= num) return false;
					if (!player.countCards('he')) return false;
					return true;
				},
				check(card) {
					if (
						game.hasPlayer(function (current) {
							return get.is.playerNames(current, 'xjzh_boss_hjguishi');
						})
					)
						return get.color(card) == 'black';
					return 6 - get.value(card);
				},
				group: ['xjzh_boss_dianxing_damage', 'xjzh_boss_dianxing_skip', 'xjzh_boss_dianxing_level'],
				filterTarget(card, player, target) {
					return player.getEnemies().includes(target);
				},
				selectTarget() {
					var player = _status.event.player;
					if (player.storage.xjzh_boss_dianxing && player.storage.xjzh_boss_dianxing == 1) return [1, 2];
					return [1, 1];
				},
				filterCard: true,
				selectCard: 1,
				position: 'he',
				audio: 'ext:仙家之魂/audio/skill:2',
				content() {
					'step 0';
					if (player.storage.xjzh_boss_dianxing && player.storage.xjzh_boss_dianxing == 3) {
						event.colorx = cards[0].suit;
					} else {
						event.colorx = get.color(cards[0]);
					}
					('step 1');
					target.judge(function (card) {
						if (player.storage.xjzh_boss_dianxing && player.storage.xjzh_boss_dianxing == 3) return card.suit == event.colorx ? -2 : 0;
						return get.color(card) == event.colorx ? -2 : 0;
					}).judge2 = function (result) {
						return result.bool == false ? true : false;
					};
					('step 2');
					if (result.judge < 0) {
						target.damage(1, player, 'thunder', 'nocard');
						if (player.storage.xjzh_boss_dianxing) {
							if (player.storage.xjzh_boss_dianxing == 2) {
								var next = target.next;
								var previous = player.previous;
								if (target.isFriendsOf(next) && next.isAlive()) next.damage(1, player, 'thunder', 'nocard');
								if (target.isFriendsOf(previous) && previous.isAlive()) previous.damage(1, player, 'thunder', 'nocard');
							} else if (player.storage.xjzh_boss_dianxing == 3) {
								target.changexjzhBUFF('gandian', 1);
								player.draw();
							}
						}
					} else {
						if (player.storage.xjzh_boss_dianxing) {
							if (player.storage.xjzh_boss_dianxing == 4) {
								player.chooseToDiscard(1, 'he', true);
							}
						}
						event.finish();
					}
					('step 3');
					if (player.isDead() || target.isDead() || (player.storage.xjzh_boss_dianxing && player.storage.xjzh_boss_dianxing <= 2)) {
						event.finish();
						return;
					}
					player.chooseBool('〖电刑〗:是否令' + get.translation(target) + '再次进行判定？').set('ai', function () {
						return -get.attitude(player, target);
					});
					('step 4');
					if (result.bool) {
						event.goto(1);
					}
				},
				subSkill: {
					damage: {
						trigger: {
							global: ['phaseBegin', 'turnOverAfter'],
						},
						audio: 'xjzh_boss_dianxing',
						forced: true,
						_priority: -2,
						filter(event, player) {
							if (event.name == 'turnOver' && player.isTurnedOver()) return true;
							return game.phaseNumber % 10 == 0;
						},
						content() {
							'step 0';
							player.judge(function (card) {
								if (card.suit == 'spade' && card.number > 1 && card.number < 10) return 5;
								return 0;
							}).judge2 = function (result) {
								return result.bool == false ? true : false;
							};
							('step 1');
							if (result.bool) {
								var list = player.getEnemies().sortBySeat();
								for (var i = 0; i < list.length; i++) {
									list[i].damage(3, player, 'thunder', 'nocard');
								}
								if (get.mode() != 'boss') {
									event.finish();
									return;
								}
								var list = lib.xjzh_boss_qingling_huangjing.slice(0);
								for (var i = 0; i < game.dead.length; i++) {
									if (list.includes(game.dead[i])) {
										game.dead[i].show();
										var targetx = list.randomGet();
										game.replacePlayer(game.dead[i], targetx);
										game.log(player, '将一名', targetx, '召集到了场上');
										break;
									}
								}
							}
						},
					},
					skip: {
						trigger: {
							player: ['phaseZhunbeiCancelled', 'phaseZhunbeiSkipped', 'phaseJudgeCancelled', 'phaseJudgeSkipped', 'phaseDrawCancelled', 'phaseDrawSkipped', 'phaseUseCancelled', 'phaseUseSkipped', 'phaseDiscardCancelled', 'phaseDiscardSkipped'],
						},
						forced: true,
						_priority: -1,
						lastDo: true,
						content() {
							player.useSkill('xjzh_boss_dianxing_damage', player);
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (!target) return;
									if (get.tag(card, 'skip')) return [-3, -2];
								},
							},
						},
					},
					level: {
						trigger: {
							global: 'phaseBefore',
						},
						forced: true,
						_priority: 3,
						filter(event, player) {
							if (player.storage.xjzh_boss_dianxing) return false;
							return game.phaseNumber == 50;
						},
						content() {
							'step 0';
							var list = lib.skill.xjzh_boss_dianxing.getSkillList.slice(0);
							player.chooseControlList(get.prompt(event.name, player), list).set('ai', function () {
								return Math.random();
							});
							('step 1');
							if (result.control != 'cancel2') {
								var num = result.index;
								player.storage.xjzh_boss_dianxing = num + 1;
							}
						},
					},
				},
				ai: {
					order: 8,
					result: {
						player(player, target, card) {
							return -0.5;
						},
						target(player, target, card) {
							return -1.5;
						},
					},
				},
			},
			xjzh_boss_guishu: {
				trigger: {
					player: ['phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseDiscardBegin', 'phaseJieshuBegin', 'phaseUseBegin'],
				},
				forced: true,
				_priority: -9,
				group: ['xjzh_boss_guishu_link', 'guidao'],
				content() {
					'step 0';
					var num = get.rand(1, 2);
					var cards = get.randomCards(num, function (card) {
						return get.color(card) == 'black';
					});
					player.gain(cards, 'giveAuto');
					var str = '';
					if (trigger.name == 'phaseZhunbei') {
						str += '准备阶段';
					} else if (trigger.name == 'phaseJudge') {
						str += '判定阶段';
					} else if (trigger.name == 'phaseDraw') {
						str += '摸牌阶段';
					} else if (trigger.name == 'phaseUse') {
						str += '出牌阶段';
					} else if (trigger.name == 'phaseDiscard') {
						str += '弃牌阶段';
					} else if (trigger.name == 'phaseJieshu') {
						str += '结束阶段';
					}
					game.log(player, '跳过了', '#g' + str + '', '摸了' + num + '张牌');
					('step 1');
					trigger.cancel();
				},
				subSkill: {
					link: {
						trigger: {
							global: 'damageBefore',
						},
						forced: true,
						_priority: 10,
						filter(event, player) {
							return event.source && event.source == game.boss && game.hasNature(event, 'thunder');
						},
						content() {
							var list = player.getEnemies().sortBySeat();
							for (var target of list) {
								if (!target.isLinked()) target.link(true);
							}
						},
					},
				},
			},
			xjzh_boss_fubing: {
				trigger: {
					player: 'phaseDrawBegin',
				},
				silent: true,
				group: 'xjzh_boss_fubing_damage',
				content() {
					'step 0';
					var list = player.getEnemies().sortBySeat();
					player.gainMultiple(list);
					('step 1');
					player.addTempSkill('xjzh_boss_fubing_max');
					trigger.cancel(null, null, 'notrigger');
				},
				subSkill: {
					max: {
						mod: {
							maxHandcard(player, num) {
								return 0;
							},
						},
					},
					damage: {
						trigger: {
							global: ['damageBegin', 'linkBegin'],
						},
						silent: true,
						filter(event, player) {
							return game.boss == event.player;
						},
						content() {
							if (trigger.name == 'damage') {
								trigger.player = player;
								game.log(player, '发动了', '#g〖符兵〗', '代替神张角承受了本次伤害');
							} else {
								if (!trigger.player.isLinked()) trigger.cancel(null, null, 'notrigger');
							}
						},
					},
				},
			},
			xjzh_boss_fuli: {
				mod: {
					cardEnabled(card, player) {
						if (card.name == 'shan') return false;
					},
					cardEnabled2(card, player) {
						if (card.name == 'shan') return false;
					},
					cardUsable(card, player, num) {
						if (card.name == 'sha') return Infinity;
					},
					cardRespondable(card, player, event) {
						if (card.name == 'shan') return false;
					},
				},
				trigger: {
					global: ['damageBegin', 'turnOverBegin'],
				},
				silent: true,
				filter(event, player) {
					if (event.name == 'damage') return event.source == game.boss;
					return event.player == game.boss && !event.player.isTurnedOver();
				},
				content() {
					if (trigger.name == 'damage') {
						trigger.num++;
					} else {
						trigger.cancel(null, null, 'notrigger');
					}
				},
			},
			xjzh_boss_fuhuo: {
				trigger: {
					player: 'phaseDrawBegin',
				},
				silent: true,
				group: 'xjzh_boss_fuhuo_phase',
				filter(event, player) {
					return !player.skipList.includes('phaseDraw');
				},
				content() {
					'step 0';
					var list = player.getEnemies().sortBySeat();
					var num = list.length < trigger.num ? list.length : trigger.num;
					var targets = list.randomGets(num);
					for (var i = 0; i < targets.length; i++) {
						targets[i].damage(1, player, 'nocard', 'fire');
						targets[i].addSkill('xjzh_boss_fuhuo_damage');
					}
					('step 1');
					trigger.cancel(null, null, 'notrigger');
				},
				subSkill: {
					damage: {
						trigger: {
							source: 'damageBegin',
						},
						silent: true,
						mark: true,
						marktext: '火',
						intro: {
							name: '符火',
							content: '下次造成火焰伤害+1,且你受到等量火焰伤害',
						},
						filter(event, player) {
							if (!game.hasNature(event) || game.hasNature(event, 'fire')) return false; //QQQ
							return !event.numFixed;
						},
						content() {
							'step 0';
							trigger.num++;
							('step 1');
							player.damage(trigger.num, player, 'fire', 'nocard');
							('step 2');
							('step 3');
							player.removeSkill('xjzh_boss_fuhuo_damage');
						},
						ai: {
							firedamage: true,
							result: {
								target(player, target, card) {
									if (get.tag(card, 'fireDamage')) return -2;
								},
								player(player, target, card) {
									if (get.tag(card, 'fireDamage')) return 2;
								},
							},
						},
					},
					phase: {
						trigger: {
							global: 'phaseBefore',
						},
						silent: true,
						filter(event, player) {
							if (Math.random() > player.hp / 100) return false;
							return event.player == game.boss;
						},
						content() {
							trigger.player.gainMaxHp();
						},
					},
				},
			},
			xjzh_boss_fushui: {
				trigger: {
					player: 'phaseUseBegin',
				},
				silent: true,
				marktext: '水',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				group: 'xjzh_boss_fushui_phase',
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				filter(event, player) {
					return !player.skipList.includes('phaseUse');
				},
				content() {
					'step 0';
					var list = player.getCards('hej');
					player.addToExpansion(list, player, 'give').gaintag.add('xjzh_boss_fushui');
					('step 1');
					trigger.cancel(null, null, 'notrigger');
					('step 2');
					var list = player.getFriends(true).sortBySeat();
					var damage = function () {
						for (var i of list) {
							if (i.isDamaged()) return true;
						}
						return false;
					};
					var cards = player.getExpansions('xjzh_boss_fushui').sort();
					var bool = function () {
						var num = 0;
						if (Array.isArray(cards))
							for (var i of cards) {
								num += i.number;
							}
						if (num >= 13) return true;
						return false;
					};
					if (damage() == true && bool() == true) {
						var evt = event.getParent('phase');
						if (evt && evt.getParent) {
							var next = game.createEvent('xjzh_boss_fushui_remove', false, evt.parent);
							next.player = player;
							next.setContent(function () {
								'step 0';
								var cards = player.getExpansions('xjzh_boss_fushui');
								var next = player.chooseCardButton(cards, '〖符水〗:请选择任意张点数不小于13的牌视为使用一张【桃园结义】');
								next.set('forced', true);
								next.set('selectButton', function (button) {
									if (!ui.selected.buttons.length) return true;
									var num = 0;
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										num += ui.selected.buttons[i].number;
									}
									if (num >= 13) return ui.selected.buttons.length;
									return ui.selected.buttons.length + 2;
								});
								next.set('complexSelect', true);
								('step 1');
								if (result.links?.length) {
									player.loseToDiscardpile(result.links);
									player.chooseUseTarget({ name: 'taoyuan' }, true, false).set(
										'targets',
										game.filterPlayer(function (current) {
											return current.isFriendsOf(player);
										})
									).viewAs = true;
								}
							});
						}
					}
				},
				subSkill: {
					phase: {
						trigger: {
							global: ['drawBegin', 'phaseDiscardBegin'],
						},
						silent: true,
						filter(event, player) {
							if (game.boss != event.player) return false;
							if (event.name == 'phaseDiscard') return event.player.needsToDiscard();
							return true;
						},
						content() {
							if (trigger.name == 'draw') {
								trigger.player.draw()._triggered = null;
							} else {
								trigger.cancel(null, null, 'notrigger');
							}
						},
					},
				},
			},
			xjzh_boss_jiwu: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: lib.filter.notMe,
				selectTarget: -1,
				multitarget: true,
				multiline: true,
				check(card) {
					return 8 - get.value(card);
				},
				filterCard(card) {
					return get.tag(card, 'damage');
				},
				filter(event, player) {
					return player.countCards('h', (card) => get.tag(card, 'damage'));
				},
				async content(event, trigger, player) {
					await player.useCard({ name: 'sha' }, event.targets, false);
					if (player.getStat('damage')) {
						let cards = get.cardPile((card) => get.tag(card, 'damage'));
						if (cards) player.gain(cards, player, 'gain2', 'log');
					}
				},
				ai: {
					expose: 0.3,
					order: 12,
					result: {
						player: 1,
					},
				},
			},
			xjzh_boss_feijiang: {
				trigger: {
					global: ['shaBegin', 'juedouBegin'],
				},
				forced: true,
				_priority: 6,
				filter(event, player) {
					return event.player == player;
				},
				init(player, skill) {
					player.addAdditionalSkills(skill, 'wushuang');
				},
				async content(event, trigger, player) {
					if (trigger.target.countCards('he')) {
						const { links } = await player.gainPlayerCard(trigger.target, 'he', true).forResult();
						if (links) {
							let card = links[0];
							if (get.tag(card, 'damage')) {
								const { cards } = await player
									.chooseToDiscard(card, '〖飞将〗:是否弃置此牌令' + get.translation(trigger.card) + '造成伤害+1')
									.set('ai', (card) => {
										return 8 - get.value(card);
									})
									.forResult();

								if (cards) {
									if (!trigger.baseDamage) trigger.baseDamage = 1;
									trigger.baseDamage++;
								}
							}
						}
					}
				},
			},
			xjzh_boss_benxi: {
				trigger: {
					source: ['damageAfter'],
					global: ['phaseZhunbeiBegin'],
				},
				forced: true,
				_priority: 3,
				mark: true,
				marktext: '袭',
				intro: {
					name: '奔袭',
					content(storage, player) {
						let list = player.getSkills(null, false, false).filter((skill) => {
							let info = get.info(skill);
							return info && info.xjzh_xinghunSkill;
						});
						return '<星魂>技能数量:' + get.translation(list.length) + '';
					},
					markcount(storage, player) {
						let list = player.getSkills(null, false, false).filter((skill) => {
							let info = get.info(skill);
							return info && info.xjzh_xinghunSkill;
						});
						return list.length;
					},
				},
				mod: {
					globalFrom(from, to, distance) {
						let list = from.getSkills(null, false, false).filter((skill) => {
							let info = get.info(skill);
							return info && info.xjzh_xinghunSkill;
						}); //QQQ
						return distance - list.length;
					},
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (event.name == 'phaseZhunbei') {
						let list = player.getSkills(null, false, false).filter((skill) => {
							let info = lib.skill[skill];
							return info && info.xjzh_xinghunSkill;
						});
						if (list.length) return event.player != player;
						return false;
					}
					return !event.numFixed;
				},
				async content(event, trigger, player) {
					let name = trigger.name;
					if (name == 'damage') {
						let skills = [],
							list = game.xjzh_wujiangpai(true).filter((name) => {
								return name.startsWith('xjzh_');
							});
						list.forEach((name) => {
							let names = lib.character[name][3];
							skills.addArray(
								names.filter((skill) => {
									let info = get.info(skill);
									if (player.skills.includes(skill)) return false;
									if (info && (info.zhuSkill || info.zhuSkill || info.juexingji || info.limited || info.dutySkill || info.nogainsSkill || info.unique)) return false;
									return info && info.xjzh_xinghunSkill;
								})
							);
						});
						if (skills.length) {
							player.addSkills(skills.randomGet());
							player.update();
						}
					} else {
						const { bool } = await player
							.chooseBool('〖奔袭〗:是否移除一个<星魂>技能执行一个额外的出牌阶段？')
							.set('ai', () => {
								return true;
							})
							.forResult();

						if (bool) {
							let list = player.getSkills(null, false, false).filter((skill) => {
								let info = lib.skill[skill];
								return info && info.xjzh_xinghunSkill;
							}),
								dialog;
							if (event.isMine()) {
								dialog = ui.create.dialog('forcebutton');
								dialog.add('〖奔袭〗:请选择移除一项技能');
								for (var i = 0; i < list.length; i++) {
									if (lib.translate[list[i] + '_info']) {
										let translation = get.translation(list[i]);
										if (translation[0] == '新' && translation.length == 3) {
											translation = translation.slice(1, 3);
										} else {
											translation = translation.slice(0, 2);
										}
										let item = dialog.add('<div class="popup pointerdiv" style="width:95%;display:inline-block"><div class="skill">〖' + translation + '〗</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
										item.firstChild.link = list[i];
									}
								}
							}
							const { control } = await player
								.chooseControl(list)
								.set('prompt', '〖奔袭〗:请选择移除一项技能')
								.set('ai', () => {
									return get.min(event.list, get.skillRank, 'item');
								})
								.set('dialog', dialog)
								.forResult();

							if (control) {
								player.removeSkills(control);
								let oldcurrentPhase = _status.currentPhase;
								_status.currentPhase = player;
								player.phaseUse()._extraPhaseReason = 'xjzh_boss_benxi_phase';
								_status.currentPhase = oldcurrentPhase;
							}
						}
					}
				},
			},
			xjzh_boss_xiuluo: {
				trigger: {
					player: ['changeHp', 'changeSkillsAfter'],
				},
				forced: true,
				_priority: 20,
				filter(event, player) {
					let list = player.getSkills(null, false, false).filter((skill) => {
						let info = lib.skill[skill];
						return info && info.xjzh_xinghunSkill;
					});
					if (event.name == 'changeSkills' ? list.length == 6 : list.length) return true;
					return false;
				},
				audio: 'ext:仙家之魂/audio/skill:4',
				async content(event, trigger, player) {
					if (trigger.name == 'changeSkills') {
						let targets = game.filterPlayer((current) => current != player);
						targets.sort(lib.sort.seat);
						player.line(targets, 'green');
						for (let target of targets) {
							target.damage('nocard');
							target.chooseToDiscard(4, 'he', true);
						}
					} else {
						let list = player.getSkills(null, false, false).filter((skill) => {
							let info = lib.skill[skill];
							return info && info.xjzh_xinghunSkill;
						});
						let str = `〖修罗〗:是否移除一个<星魂>技能${player.isDamaged() ? '回复一点体力' : `摸${get.translation(Math.max(1, list.length))}张牌`}`;
						const { bool } = await player
							.chooseBool(str)
							.set('ai', () => {
								let player = get.player();
								let list = player.getSkills(null, false, false).filter((skill) => {
									let info = lib.skill[skill];
									return info && info.xjzh_xinghunSkill;
								});
								if (player.isDamaged()) return list.length - player.hp;
								return list.length;
							})
							.forResult();

						if (bool) {
							let dialog;
							if (event.isMine()) {
								dialog = ui.create.dialog('forcebutton');
								dialog.add('〖修罗〗:请选择移除一项技能');
								for (var i = 0; i < list.length; i++) {
									if (lib.translate[list[i] + '_info']) {
										let translation = get.translation(list[i]);
										if (translation[0] == '新' && translation.length == 3) {
											translation = translation.slice(1, 3);
										} else {
											translation = translation.slice(0, 2);
										}
										let item = dialog.add('<div class="popup pointerdiv" style="width:95%;display:inline-block"><div class="skill">〖' + translation + '〗</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
										item.firstChild.link = list[i];
									}
								}
							}
							const { control } = await player
								.chooseControl(list)
								.set('prompt', '〖修罗〗:请选择移除一项技能')
								.set('ai', () => {
									return get.min(list, get.skillRank, 'item'); //QQQ
								})
								.set('dialog', dialog)
								.forResult();

							if (control) {
								player.removeSkills(control);
								player.isDamaged() ? player.recover() : player.draw(Math.max(1, list.length));
							}
						}
					}
				},
			},
			xjzh_diablo_hunhuo: {
				trigger: {
					global: ['die', 'dying'],
				},
				forced: true,
				fixed: true,
				charlotte: true,
				superCharlotte: true,
				_priority: 3,
				firstDo: true,
				mark: true,
				notemp: true,
				forceDie: true,
				marktext: '死亡之书',
				intro: {
					name: '死亡之书',
					mark(dialog, storage, player) {
						let list = game.getExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo');
						if (!list) return '没有灵魂';
						if (list.length) {
							if (player.isUnderControl(true)) {
								dialog.addSmall([list, 'character']);
							} else {
								dialog.addText('共有' + get.cnNumber(list.length) + '个<灵魂>');
							}
						} else {
							return '没有灵魂';
						}
					},
					content(storage, player) {
						let list = game.getExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo');
						if (!list) return '没有灵魂';
						return '共有' + get.cnNumber(list.length) + '个<灵魂>';
					},
					markcount(storage, player) {
						let list = game.getExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo');
						if (!list) return 0;
						return list.length;
					},
				},
				derivation: ['xjzh_diablo_haoling'],
				async getSkillList(player) {
					if (!player.hasSkill('xjzh_diablo_hunhuo')) {
						player.removeAdditionalSkill('xjzh_diablo_hunhuo');
						return;
					}
					let list = game.getExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo');
					if (!list.length) return;
					let skills = lib.skill.xjzh_diablo_hunhuo.derivation.slice(0);
					for (let target of list) {
						if (!lib.character[target]) continue;
						if (!lib.character[target].skills || !lib.character[target].skills.length) continue;
						let getSkills = lib.character[target].skills.slice(0);
						skills.add(
							getSkills
								.filter((skill) => {
									let info = get.info(skill);
									if (!get.skillInfoTranslation(skill)) return false;
									if (lib.skill.global.includes(skill)) return false;
									if (get.skillCategoriesOf(skill, player).some((type) => ['Charlotte', '主公技', '觉醒技', '限定技', '隐匿技', '使命技', '持恒技'].includes(type))) return false;
									return true;
								})
								.randomGet()
						);
					}
					if (skills.length) player.addAdditionalSkill('xjzh_diablo_hunhuo', skills);
				},
				init(player) {
					if (!game.getExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo')) {
						game.saveExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo', []);
					}
					lib.skill.xjzh_diablo_hunhuo.getSkillList(player);
				},
				filter(event, player) {
					if (event.player == player) {
						let list = game.getExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo');
						return list.length;
					}
					if (event.source && event.source == player && event.player != player && event.player.isDead()) {
						return player.isUnderControl(true);
					}
					return get.is.playerNames(player, 'xjzh_diablo_lamasi');
				},
				group: ['xjzh_diablo_hunhuo_use'],
				async content(event, trigger, player) {
					let list = game.getExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo');
					if (trigger.source && trigger.source == player && (trigger.player != player) & trigger.player.isDead()) {
						list.addArray(get.nameList(trigger.player));
						game.log(player, '将' + get.translation(trigger.player) + '的灵魂收入了死亡之书');
						lib.skill.xjzh_diablo_hunhuo.getSkillList(player);
					} else if (trigger.player == player && trigger.name != 'die') {
						const { links } = await player
							.chooseButton(true)
							.set('ai', (button) => {
								return Math.random();
							})
							.set('createDialog', ['请选择一个灵魂与你交换身体', [list, 'character']])
							.forResult();

						let link = links[0];
						list.remove(link);
						//锁定技,当你击败一名角色后,你将其灵魂收入死亡之书中;出牌阶段限一次,你可以消耗一个灵柩将死亡之书中收集的灵魂唤醒至场上为你作战,唤醒的角色拥有〖尸爆〗;当你阵亡时,你可以解放死亡之书中的一个灵魂与你交换身体
						player.reinit(player.name, links[0], [player.maxHp, player.maxHp]);
						player.removeSkill('xjzh_diablo_hunhuo', true);
						lib.skill.xjzh_diablo_hunhuo.getSkillList(player);
					}
					game.saveExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo', list.addArray(list));
				},
				ai: {
					notemp: true,
				},
				subSkill: {
					use: {
						enable: 'phaseUse',
						usable: 1,
						filterTarget(card, player, target) {
							return target.isDead();
						},
						filter(event, player) {
							let list = game.getExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo');
							if (!list.length) return false;
							return game.dead.length;
						},
						deadTarget: true,
						async content(event, trigger, player) {
							let target = event.targets[0],
								list = [];
							list.addArray(game.dead.map((item) => get.nameList(item)[0]));
							const { links } = await player
								.chooseButton()
								.set('createDialog', ['〖魂火〗:请选择一副灵柩将其唤醒至场上为你作战', [game.getExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo'), 'character']])
								.set('ai', (button) => {
									return get.rank(button.link, true);
								})
								.forResult();

							if (links) {
								target.revive(target.maxHp, false);
								target.reinit(links[0], target.name, [lib.character[links[0]].hp, lib.character[links[0]].maxHp]);
								target.directgain(get.cards(2));
								let id = player.identity;
								if (player == get.zhu(player)) {
									target.identity = 'zhong';
									target.setIdentity('zhong');
									target.showIdentity();
								} else {
									target.identity = id;
									target.setIdentity(id);
									target.showIdentity();
								}
								target.addSkill('xjzh_diablo_shibao');
								target.$zhaohuan();
								game.log(player, '唤醒了' + get.translation(target) + '的灵魂');
							}
						},
						ai: {
							order: 8,
							expose: 0.8,
							result: {
								player: 1,
							},
						},
					},
				},
			},
			//出牌阶段限一次,你可以选择一名被你唤醒的角色,令其摸一张牌并使用一张你指定目标的[伤害]卡牌,当前回合结束后,你执行一个额外的回合
			xjzh_diablo_haoling: {
				enable: 'phaseUse',
				charlotte: true,
				usable: 1,
				prompt: '〖号令〗:选择一名被你唤醒且正面朝上的角色',
				check: () => 1,
				deadTarget: true,
				filterTarget(card, player, target) {
					if (player == target) return false;
					if (target.classList.contains('zhaohuan')) return true;
					if (ui.selected.targets.length == 1) return !target.classList.contains('zhaohuan') && ui.selected.targets[0].canUse(get.tag(card, 'damage'), target, false);
					return false;
				},
				selectTarget: 2,
				filter(event, player) {
					return game.countPlayer((current) => current.classList.contains('zhaohuan'));
				},
				async content(event, trigger, player) {
					let targets = event.targets;
					await targets[0].draw();
					const { bool } = await targets[0]
						.chooseToUse((card, player, event) => get.tag(card, 'damage')) //QQQ
						.set('targetRequired', true)
						.set('complexSelect', true)
						.set('filterTarget', (card, player, target) => {
							if (target != targets[1] && !ui.selected.targets.includes(targets[1])) return false;
							return true;
						})
						.forResult();

					if (bool) await player.phase('xjzh_diablo_haoling');
				},
				ai: {
					order: 12,
					expose: 0.5,
					threaten: 3,
					result: {
						target: 2, //QQQ
					},
				},
			},
			xjzh_diablo_shibao: {
				trigger: {
					player: 'dieEnd',
					global: ['phaseAfter'],
				},
				forceDie: true,
				forced: true,
				_priority: -10,
				lastDo: true,
				filter(event, player) {
					if (event.name == 'die') {
						let list = game.getExtensionConfig('仙家之魂', 'xjzh_diablo_hunhuo');
						if (!list.length) return false;
						return list.includes(player);
					}
					if (event.name == 'phase') {
						let target = game.findPlayer((current) => get.is.playerNames(player, 'xjzh_diablo_lamasi'));
						if (!target) return false;
						let id = target.identity;
						if (target == get.zhu(target)) {
							if (player.identity == 'zhong') return false;
						}
						return player.identity != id;
					}
					return false;
				},
				async content(event, trigger, player) {
					let list = [player.previous, player.next];
					for (let target of list) {
						if (get.is.playerNames(player, 'xjzh_diablo_lamasi')) continue;
						target.damage('nosource', 'nocard');
					}
					const next = game.createEvent('diex', false);
					next.source = player;
					next.player = player;
					next._triggered = null;
					next.restMap = { type: null, count: null, audio: null };
					next.excludeMark = [];
					next.setContent('die');
				},
			},
			xjzh_diablo_luanshe: {
				trigger: {
					player: 'useCard2',
				},
				forced: true,
				_priority: 3,
				filter(event, player) {
					if (!event.cards || !event.cards.length) return false;
					if (event.card.name != 'sha') return false;
					return game.hasPlayer((current) => player.canUse('sha', current) && current != event.targets[0] && current != player);
				},
				seatNum(player, target) {
					let obj = {
						scale: 0.9,
						x: [1, 0.5],
						y: [1, 0.25],
						height: null,
						width: null,
						angle: null,
						parent: player,
						follow: false,
					},
						num = target.getState().position;
					switch (num) {
						case 1:
							obj.scale = 0.4;
							obj.angle = -88;
							break;
						case 2:
							obj.scale = 0.52;
							obj.angle = -68;
							break;
						case 3:
							obj.scale = 0.65;
							obj.angle = -48;
							break;
						case 4:
							obj.scale = 0.75;
							obj.angle = -32;
							break;
						case 5:
							obj.scale = 0.9;
							obj.angle = -26;
							break;
						case 6:
							obj.scale = 1.12;
							obj.angle = -21;
							break;
						case 7:
							obj.scale = 1.15;
							obj.angle = -15;
							break;
					}
					return obj;
				},
				async content(event, trigger, player) {
					let targets = game.filterPlayer((current) => player.canUse('sha', current) && current != trigger.targets[0] && current != player),
						num = get.rand(1, Math.min(3, targets.length));
					targets = targets.randomGets(num);
					for (let target of targets) {
						let obj = lib.skill.xjzh_diablo_luanshe.seatNum(player, target);
					}
					trigger.targets.addArray(targets);
					game.log(targets, '成为此【杀】的额外目标');
				},
				ai: {
					order: 8,
					result: {
						player(player, target, card) {
							if (card.name != 'sha') return;
							let targets = game.filterPlayer((current) => player.canUse('sha', current) && current != target && current != player),
								num = 0;
							for (let name of targets) {
								if (player.isFriendsOf(name)) num++;
							}
							if (num > targets - num) return 0.2;
							return 1.5;
						},
					},
				},
			},
			xjzh_diablo_jingshe: {
				trigger: {
					player: 'useCard2',
				},
				forced: true,
				_priority: -3,
				filter(event, player) {
					if (event.card.name != 'sha') return false; //QQQ
					if (!event.targets || !event.targets.length) return false;
					if (event.targets.length == 1) return false;
					let targets = event.targets.slice(0);
					if (targets.every((item) => get.xjzhBUFFNum(item, 'yishang') >= get.xjzhBUFFInfo('yishang', 'limit'))) return false;
					return true;
				},
				async content(event, trigger, player) {
					const { targets } = await player
						.chooseTarget('〖劲射〗:选择一名角色令其获得1层易伤', (card, player, target) => {
							return get.xjzhBUFFNum(target, 'yishang') < get.xjzhBUFFInfo('yishang', 'limit') && target != player && trigger.targets.includes(target);
						})
						.set('ai', (target) => -get.attitude(player, target))
						.forResult();

					if (targets) {
						targets[0].changexjzhBUFF('yishang', 1);
					}
				},
			},
			xjzh_diablo_guanzhu: {
				trigger: {
					player: 'drawAfter',
				},
				forced: true,
				group: ['xjzh_diablo_guanzhu_use', 'xjzh_diablo_guanzhu_damage'],
				filter(event, player) {
					if (player.countCards('h', (card) => get.tag(card, 'damage') && !card.hasGaintag('xjzh_diablo_guanzhu')) && player.countCards('h', (card) => card.hasGaintag('xjzh_diablo_guanzhu')) < 2) return true;
					return false;
				},
				mod: {
					cardUsable(card, player, num) {
						if (!card.cards) return;
						if (['jiu', 'sha'].includes(card.name)) {
							if (card.cards.some((item) => item.hasGaintag('xjzh_diablo_guanzhu'))) return true;
						}
					},
				},
				async content(event, trigger, player) {
					let cards = player.getCards('h', (card) => get.tag(card, 'damage'));
					const { links } = await player
						.chooseCardButton(cards, cards.length == 1 ? 1 : [1, 2], '〖灌注〗:请选择至多' + get.translation(cards.length == 1 ? 1 : 2) + '张[伤害]卡牌令其获得灌注效果')
						.set('ai', (button) => {
							let player = get.player();
							if (player.hasUseTarget(button.link)) return player.getUseValue(button.link);
							return cards.randomGets(cards.length == 1 ? 1 : [1, 2]);
						})
						.forResult();

					if (!links) return;
					let controlList = ['冰霜灌注:令你被灌注的牌造成冰属性伤害', '火焰灌注:令你被灌注的牌造成火属性伤害', '毒素灌注:令你被灌注的牌造成毒属性伤害'];
					const index = await player
						.chooseControlList(get.prompt(event.name, player), true, controlList)
						.set('ai', () => {
							return get.rand(0, 2);
						})
						.forResult('index');
					let storage = new Map();
					storage.set('guanzhu', {
						nature: {
							0: 'ice',
							1: 'fire',
							2: 'poison',
						},
						index: index,
						cards: links,
					});
					player.removeGaintag('xjzh_diablo_guanzhu');
					player.addGaintag(links, 'xjzh_diablo_guanzhu');
					player.storage.xjzh_diablo_guanzhu = storage;
				},
				subSkill: {
					damage: {
						trigger: {
							source: 'damageBefore',
						},
						forced: true,
						filter(event, player) {
							let storage = player.storage.xjzh_diablo_guanzhu;
							if (!event.cards || !event.cards.length) return false;
							if (!storage || !storage.get('guanzhu')) return false;
							return storage.get('guanzhu').cards.includes(event.cards[0]);
						},
						async content(event, trigger, player) {
							let storage = player.storage.xjzh_diablo_guanzhu;
							await game.setNature(trigger, storage.get('guanzhu').nature[storage.get('guanzhu').index], false);
							switch (trigger.nature) {
								case 'ice':
									{
										trigger.player.changexjzhBUFF('binghuan', 1);
									}
									break;
								case 'fire':
									{
										trigger.player.changexjzhBUFF('ranshao', 1);
									}
									break;
								case 'poison':
									{
										trigger.player.changexjzhBUFF('zhongdu', 1);
									}
									break;
							}
						},
					},
					use: {
						trigger: { player: 'useCardBefore' },
						forced: true,
						_priority: -1,
						filter(event, player) {
							if (event.card.name == 'sha' || event.card.name == 'jiu') {
								if (event.cards[0]?.hasGaintag('xjzh_diablo_guanzhu')) return true;
							} //QQQ
							return false;
						},
						async content(event, trigger, player) {
							if (trigger.addCount !== false) {
								trigger.addCount = false;
								let stat = player.getStat();
								if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
							}
						},
					},
				},
			},
			xjzh_diablo_sushe: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				_priority: 3,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				async content(event, trigger, player) {
					let num = get.rand(1, 2);
					trigger.effectCount += num;
					game.log(trigger.card, '额外结算' + num + '次');
				},
			},
			xjzh_diablo_yingbi: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return get.xjzh_deEffect(player) || game.countPlayer((current) => current.inRangeOf(player));
				},
				async content(event, trigger, player) {
					await game.claerRestraint(player);
					let targets = game.filterPlayer((current) => current.inRangeOf(player));
					if (targets.length) {
						for (let target of targets) target.changexjzhBUFF('yishang', 1);
					}
					player.draw(targets.length);
				},
				ai: {
					order: 12,
					result: {
						player(player, target, card) {
							if (get.xjzh_deEffect(player)) return 1;
							return game.countPlayer((current) => current.inRangeOf(player));
						},
					},
				},
			},
			xjzh_diablo_jianyu: {
				enable: 'phaseUse',
				filter(event, player) {
					return !player.storage.xjzh_diablo_jianyu;
				},
				async content(event, trigger, player) {
					let names = get.nameList(player),
						bool = false;
					if (names.some((name) => game.xjzh_hasEquiped('xjzh_qishu_hakankouyu', name))) bool = true;
					let next = await player
						.useCard(
							{ name: 'wanjian' },
							game.filterPlayer((current) => current != player),
							false
						)
						.set('effectCount', bool && Math.random() <= 0.3 ? 2 : 1);
					let xjzh_diablo_jianyuTimer,
						cooldown = 1000 * 120 * (1 - 0.425),
						elapsedTime = 0,
						startTime = new Date().getTime();
					player.storage.xjzh_diablo_jianyu = null;
					xjzh_diablo_jianyuTimer = setInterval(() => {
						elapsedTime += 100;
						let remainingTime = cooldown - elapsedTime,
							endTime = new Date().getTime(),
							remainderTime = endTime - startTime;
						player.storage.xjzh_diablo_jianyu = new Map([
							['cooldown', remainingTime],
							['remainder', remainderTime],
						]);
						if (remainingTime <= 0) {
							clearInterval(xjzh_diablo_jianyuTimer);
							delete player.storage.xjzh_diablo_jianyu;
						}
					}, 100);
				},
				ai: {
					order: 8,
					result: {
						player(player, target, card) {
							let targets = player.getFriends(),
								targets2 = player.getEnemies();
							return targets2.length >= targets.length ? 1 : 0.5;
						},
					},
				},
			},
			xjzh_diablo_lingshou: {
				trigger: {
					player: 'phaseBefore',
					source: 'damageAfter',
				},
				forced: true,
				_priority: 10,
				mark: true,
				marktext: '贡',
				intro: {
					name: '德鲁伊灵体贡品',
					content: '#',
				},
				lingshouList: ['xjzh_diablo_lang', 'xjzh_diablo_xiong'],
				async content(event, trigger, player) {
					let names = get.nameList(player),
						arr = ['xjzh_qishu_wuyan', 'xjzh_qishu_fenglangkx'],
						bool = false;
					for (let name of names) {
						if (arr.some((item) => game.xjzh_hasEquiped(item, name))) {
							bool = true;
							break;
						}
					}
					if (event.triggername == 'damageAfter') player.addMark('xjzh_diablo_lingshou', get.rand(1, 100));
					else if (!bool) {
						let list = lib.skill.xjzh_diablo_lingshou.lingshouList.slice(0),
							node,
							skills;
						if (player.name2 && player.name2 == 'xjzh_diablo_yafeikela') node = player.node.name2;
						else node = player.node.name;
						if (player.countMark('xjzh_diablo_lingshou') >= 100) {
							if (player.storage.xjzh_diablo_lingshou2) list.remove(player.storage.xjzh_diablo_lingshou2);
							let dialog = ui.create.dialog('〖灵兽〗:请选择所要变形的形态,取消变回人类', [list, 'character'], 'hidden');
							const { links } = await player
								.chooseButton(dialog)
								.set('ai', () => {
									return list.randomGet();
								})
								.forResult();

							if (links) {
								let skills = lib.character[links[0]][3]; //QQQ
								await player.removeMark('xjzh_diablo_lingshou', 100, false);
								player.setAvatar('xjzh_diablo_yafeikela', links[0]);
								node.innerHTML = get.translation(links[0]);
								if (player.storage.xjzh_diablo_lingshou2) {
									skills = lib.character[player.storage.xjzh_diablo_lingshou2][3];
									player.removeSkill(list, true);
								}
								player.storage.xjzh_diablo_lingshou2 = links[0];
								player.addSkill(skills);
							} else {
								player.setAvatar('xjzh_diablo_yafeikela', 'xjzh_diablo_yafeikela');
								if (player.storage.xjzh_diablo_lingshou2) {
									skills = lib.character[player.storage.xjzh_diablo_lingshou2][3];
									player.removeSkill(list, true);
								}
								node.innerHTML = get.translation('xjzh_diablo_yafeikela');
								delete player.storage.xjzh_diablo_lingshou2;
							}
						} else {
							player.setAvatar('xjzh_diablo_yafeikela', 'xjzh_diablo_yafeikela');
							if (player.storage.xjzh_diablo_lingshou2) {
								skills = lib.character[player.storage.xjzh_diablo_lingshou2][3];
								player.removeSkill(list, true);
							}
							node.innerHTML = get.translation('xjzh_diablo_yafeikela');
							delete player.storage.xjzh_diablo_lingshou2;
						}
					}
				},
			},
			xjzh_diablo_shilue: {
				enable: 'phaseUse',
				init(player, skill) {
					player.storage[skill] = false;
				},
				filter(event, player) {
					if (get.xjzh_isMaxMp(player)) return false;
					return player.countMark('xjzh_diablo_lingshou') > 0;
				},
				group: 'xjzh_diablo_shilue_round',
				async content(event, trigger, player) {
					let num = Math.min(player.countMark('xjzh_diablo_lingshou'), get.xjzh_consumeMp(player));
					player.removeMark('xjzh_diablo_lingshou', num);
					player.changexjzhMp(num);
					let numx = player.xjzhReduce;
					numx > 0.3 ? (numx -= 0.3) : (numx = 0);
					player.storage.xjzh_diablo_shilue = true;
				},
				subSkill: {
					round: {
						trigger: {
							global: 'roundStart',
						},
						forced: true,
						_priority: 10,
						filter(event, player) {
							if (game.roundNumber == 0) return false;
							if (!player.storage.xjzh_diablo_shilue) return false;
							return true;
						},
						async content(event, trigger, player) {
							player.storage.xjzh_diablo_shilue = false;
							player.xjzhReduce += 0.3;
						},
					},
				},
				ai: {
					order: 0.2,
					result: {
						player(player, target) {
							let names = get.nameList(player),
								arr = ['xjzh_qishu_wuyan', 'xjzh_qishu_fenglangkx'],
								bool = false;
							names.forEach((name) => {
								if (arr.some((item) => game.xjzh_hasEquiped(item, name))) bool = true;
							});
							if (bool) return get.xjzh_consumeMp(player);
							return player.countMark('xjzh_diablo_lingshou') - 100 + get.xjzh_consumeMp(player);
						},
					},
				},
			},
			xjzh_diablo_leibao: {
				enable: 'phaseUse',
				level: 1,
				powerDrain: 45,
				xjzh_fengbaoSkill: true,
				multitarget: true,
				multiline: true,
				filterTarget(card, player, target) {
					return target != player;
				},
				selectTarget() {
					let player = get.player(),
						level = lib.skill.xjzh_diablo_leibao.level;
					return level == 1 ? 1 : [1, level];
				},
				filter(event, player) {
					let powerDrain = lib.skill.xjzh_diablo_leibao.powerDrain,
						num = player.xjzhReduce;
					return player.xjzhMp >= powerDrain * (1 - num);
				},
				async content(event, trigger, player) {
					let powerDrain = lib.skill.xjzh_diablo_leibao.powerDrain,
						num = player.xjzhReduce;
					let num2 = Math.round(powerDrain * (1 - num));
					await player.changexjzhMp(-num2);
					for (let target of event.targets) {
						await target.damage(1, 'nocard', player, 'thunder');
						if (Math.random() <= 0.35 * (1 + player.xjzhHuixin) && target.isAlive()) {
							target.changexjzhBUFF('gandian', 1);
							game.log(player, `因<span style="color: yellow;">〖${get.translation(event.name)}〗</span>触发了会心一击,${get.translation(target)}获得一层感电`);
						}
					}
				},
				ai: {
					order: 12,
					expose: 0.5,
					result: {
						target(player, target, card) {
							return -lib.skill.xjzh_diablo_leibao.level;
						},
					},
				},
			},
			xjzh_diablo_kuanghou: {
				enable: 'phaseUse',
				level: 1,
				usable: 1,
				xjzh_langrenSkill: true,
				check(event, player) {
					if (player.isDamaged()) {
						if (player.xjzhMp < player.xjzhmaxMp) return 10;
						return 2;
					}
					return 0.5;
				},
				filter(event, player) {
					if (player.isDamaged() || !get.xjzh_isMaxMp(player)) return true;
					return false;
				},
				async content(event, trigger, player) {
					let num = lib.skill.xjzh_diablo_leibao.level;
					player.recover(Math.floor(num / 5));
					player.changexjzhMp(20);
					if (Math.random() <= 0.05 * (1 + player.xjzhHuixin)) {
						player.recoverTo(player.maxHp);
						game.log(player, `因<span style="color: yellow;">〖${get.translation(event.name)}〗</span>触发了会心一击,${get.translation(player)}回复体力至体力上限`);
					}
				},
				ai: {
					order: 12,
					expose: 0.5,
					result: {
						player(player) {
							let num = lib.skill.xjzh_diablo_kuanghou.level;
							return num / 5 + player.getDamagedHp(true);
						},
					},
				},
			},
			xjzh_diablo_zhongou: {
				trigger: {
					player: 'useCardToPlayer',
				},
				mod: {
					selectTarget(card, player, range) {
						let type = get.tag(card, 'damage');
						if (!get.tag(card, 'damage')) return;
						range[1] = 1;
					},
				},
				filter(event, player) {
					return event.card && get.tag(event.card, 'damage');
				},
				level: 1,
				powerDrain: 35,
				forced: true,
				xjzh_xiongrenSkill: true,
				async content(event, trigger, player) {
					await player.addTempSkill('unequip', 'useCardAfter');
					event.qianggu = false;
					if (player.getStat('damage')) {
						let num = Math.round(lib.skill.xjzh_diablo_zhongou.powerDrain * (1 - player.xjzhReduce)),
							level = lib.skill.xjzh_diablo_zhongou.level;
						let qianggu = get.nameList(player).filter((name) => game.xjzh_hasEquiped('xjzh_qishu_wuyan', name)).length ? true : false;
						if (player.xjzhMp >= num || qianggu == true) {
							const {
								result: { bool },
							} =
								qianggu == true
									? { result: { bool: true } }
									: await player.chooseBool(`〖重欧〗:是否消耗${num}灵力获得${level}点护甲和强固点体力值`).set('ai', () => {
										return 1;
									});
							if (bool) {
								player.changexjzhMp(qianggu == false ? num : -num);
								player.changeHujia(level);
								player.changexjzhBUFF('qianggu', level);
							}
						}
						if (Math.random() <= 0.25 * (1 + player.xjzhHuixin)) {
							trigger.target.changexjzhBUFF('jiansu', 1);
							game.log(player, `因<span style="color: yellow;">〖${get.translation(event.name)}〗</span>触发了会心一击,${get.translation(trigger.player)}获得1层减速`);
						}
					}
				},
			},
			xjzh_diablo_fensui: {
				trigger: {
					player: ['useCard', 'phaseBefore'],
					source: 'damageBegin',
				},
				forced: true,
				xjzh_dadiSkill: true,
				level: 1,
				_priority: 2,
				mark: true,
				marktext: '碎',
				intro: {
					name: '粉碎',
					content(storage, player) {
						let num = player.countMark('xjzh_diablo_fensui');
						if (num == 0 || !num) return;
						if (num >= 6) return '你下一次造成伤害必定暴击';
						return get.translation(num);
					},
				},
				filter(event, player, name) {
					if (name == 'phaseBefore') return true;
					if (name == 'damageBegin') return player.countMark('xjzh_diablo_fensui') >= 6;
					if (!event.cards || !event.cards.length) return false;
					if (['delay', 'equip'].includes(get.type(event.cards[0]))) return false;
					return player.isHealthy();
				},
				async content(event, trigger, player) {
					if (event.triggername == 'phaseBefore') player.addMark('xjzh_diablo_fensui', 1, false);
					else if (event.triggername == 'damageBegin') {
						trigger.num *= 2;
						player.clearMark('xjzh_diablo_fensui', false);
						if (Math.random() <= 0.5 * (1 + player.xjzhHuixin)) {
							trigger.player.turnOver(true);
							game.log(player, `因<span style="color: yellow;">〖${get.translation(event.name)}〗</span>触发了会心一击,${get.translation(trigger.player)}被眩晕`);
						}
					} else {
						trigger.effectCount++;
						game.log(trigger.card, '额外结算一次');
					}
				},
			},
			xjzh_diablo_duguan: {
				trigger: {
					source: 'damageBegin',
				},
				filter(event, player) {
					if (player.xjzhMp < 25) return false;
					return true;
				},
				async content(event, trigger, player) {
					if (!game.hasNature(trigger) || !game.hasNature(trigger, 'poison')) game.setNature(trigger, 'poison', false);
					let huixin = player.xjzhHuixin;
					if (get.xjzhBUFFNum(player, 'zhongdu') > 0) huixin += 0.5;
					if (Math.random() > 0.33 * (1 + huixin)) player.changexjzhMp(-25);
					else game.log(player, `因<span style="color: yellow;">〖${get.translation(event.name)}〗</span>触发了会心一击,该技能不消耗魔力`);
					if (Math.random() <= 0.25 * (1 + huixin)) {
						trigger.player.changexjzhBUFF('zhongdu', 1);
						game.log(player, `因<span style="color: yellow;">〖${get.translation(event.name)}〗</span>触发了会心一击,${get.translation(trigger.player)}获得1层中毒`);
					}
				},
			},
			xjzh_diablo_xianjing: {
				enable: 'phaseUse',
				usable: 1,
				mark: true,
				marktext: '陷',
				intro: {
					name: '剧毒陷阱',
					mark(dialog, storage, player) {
						if (!storage) return;
						if (player.isUnderControl(true)) dialog.addAuto([storage, 'vcard']);
					},
				},
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				group: 'xjzh_diablo_xianjing_gain',
				async content(event, trigger, player) {
					let cards = Array.from(ui.cardPile.childNodes).filter((card) => !player.storage.xjzh_diablo_xianjing.includes(card));
					if (!cards.length) return;
					let card = cards.randomGets(Math.ceil(cards.length / 100)),
						dialog = ui.create.dialog('hidden', [card, 'vcard']);
					player.chooseControl('ok').set('dialog', dialog);
					player.storage.xjzh_diablo_xianjing.addArray(card);
					for (var i of card) {
						let num = get.rand(ui.cardPile.childElementCount);
						i.fix();
						ui.cardPile.insertBefore(i, ui.cardPile.childNodes[num]);
					}
					game.updateRoundNumber();
				},
				subSkill: {
					gain: {
						trigger: {
							global: 'gainAfter',
						},
						forced: true,
						_priority: 1,
						filter(event, player) {
							if (!event.cards || !event.cards.length) return false;
							return event.cards && event.cards.some((item) => player.storage.xjzh_diablo_xianjing.includes(item));
						},
						async content(event, trigger, player) {
							if (trigger.player != player) trigger.player.changexjzhBUFF('zhongdu', get.xjzhBUFFInfo('zhongdu', 'limit'));
							if (Math.random() <= 0.3 * (1 + player.xjzhHuixin)) {
								player.changexjzhMp(25);
								game.log(player, `因<span style="color: yellow;">〖${get.translation(event.name)}〗</span>触发了会心一击,${get.translation(player)}回复25点魔力`);
							}
							let storage = player.storage.xjzh_diablo_xianjing,
								cards = trigger.cards.filter((card) => storage.includes(card));
							if (Math.random() <= 0.2 * (1 + player.xjzhHuixin)) {
								player.draw(2);
								player.gain(cards, 'gain2', 'log');
								game.log(player, `因<span style="color: yellow;">〖${get.translation(event.name)}〗</span>触发了会心一击,${get.translation(player)}摸两张牌并获得了${get.translation(cards)}`);
							}
							storage.removeArray(cards);
						},
					},
				},
				ai: {
					order: 12,
					result: {
						player: 1,
					},
				},
			},
			xjzh_diablo_baolu: {
				trigger: {
					source: 'damageBegin1',
				},
				forced: true,
				_priority: 1,
				filter(event, player) {
					if (get.xjzhBUFFNum(event.player, 'zhongdu') > 0) return true;
					return false;
				},
				async content(event, trigger, player) {
					game.setNature(trigger, 'poison', false);
					trigger.num++;
					if (Math.random() <= 0.25 * (1 + player.xjzhHuixin)) {
						player.useSkill('xjzh_diablo_xianjing', player);
						game.log(player, `因<span style="color: yellow;">〖${get.translation(event.name)}〗</span>触发了会心一击,${get.translation(player)}发动了技能<span style="color: yellow;">〖${get.translation('xjzh_diablo_xianjing')}〗</span>`);
					}
				},
			},
			xjzh_dnf_jianshen: {
				trigger: {
					player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
				},
				forced: true,
				_priority: 12,
				mod: {
					canBeGained(card, player, target, name) {
						let cards = ['xjzh_card_tianjigyx', 'xjzh_card_guanshizhengzong', 'xjzh_card_julihjc', 'xjzh_card_mojianklls', 'xjzh_card_tiancongyunjian'];
						if (cards.includes(card.name)) return false;
					},
					canBeDiscarded(card, player, target, name) {
						let cards = ['xjzh_card_tianjigyx', 'xjzh_card_guanshizhengzong', 'xjzh_card_julihjc', 'xjzh_card_mojianklls', 'xjzh_card_tiancongyunjian'];
						if (cards.includes(card.name)) return false;
					},
					cardDiscardable(card, player) {
						let cards = ['xjzh_card_tianjigyx', 'xjzh_card_guanshizhengzong', 'xjzh_card_julihjc', 'xjzh_card_mojianklls', 'xjzh_card_tiancongyunjian'];
						if (cards.includes(card.name)) return false;
					},
				},
				global: 'xjzh_dnf_jianshen_nouse',
				async content(event, trigger, player) {
					'step 0';
					if (player.hasDisabledSlot(1) && !player.hasEnabledSlot(1)) return;
					let dialog = ui.create.dialog('〖剑神〗:请选择并装备一把武器', 'hidden'),
						list = ['xjzh_card_tianjigyx', 'xjzh_card_guanshizhengzong', 'xjzh_card_julihjc', 'xjzh_card_mojianklls', 'xjzh_card_tiancongyunjian'];
					dialog.add([list, 'vcard']);
					const { links } = await player
						.chooseButton(dialog, true)
						.set('ai', (button) => {
							return Math.random();
						})
						.forResult();

					if (links) {
						let card = game.createCard(links[0][2]);
						player.equip(card);
					}
				},
				subSkill: {
					nouse: {
						mod: {
							cardEnabled(card, player) {
								if (!card) return;
								if (get.is.playerNames(player, 'xjzh_dnf_suodeluosi')) return;
								let str = `${lib.translate[card.name]}${lib.translate[card.name + '_info']}`;
								if (str.includes('剑')) return false;
							},
							cardEnabled2(card, player) {
								if (!card) return;
								if (get.is.playerNames(player, 'xjzh_dnf_suodeluosi')) return;
								let str = `${lib.translate[card.name]}${lib.translate[card.name + '_info']}`;
								if (str.includes('剑')) return false;
							},
						},
						charlotte: true,
					},
				},
			},
			//锁定技,你的武器栏无法废除,你切换武器牌时获得附近角色各一张手牌,并根据你此时装备的武器牌类型获得不同效果:<li>光剑,移除你的所有控制效果;<li>巨剑,令附近随机一名敌方角色武将牌翻至背面;<li>短剑,对附近随机一名敌方角色造成一点伤害;<li>太刀,弃置周围所有敌方角色的武器牌;<li>钝器,令周围随机一名敌方角色陷入混乱
			xjzh_dnf_aoyi: {
				trigger: {
					player: ['loseBegin', 'disableEquipBefore'],
				},
				forced: true,
				_priority: 3,
				filter(event, player) {
					if (event.name == 'disableEquip') {
						return event.slots.includes('equip1');
					}
					return event.cards?.some((q) => player.getEquip(1) == q); //QQQ
				},
				async content(event, trigger, player) {
					if (trigger.name == 'disableEquip') {
						while (trigger.slots.includes('equip1')) trigger.slots.remove('equip1');
						game.log(player, '的武器栏无法废除');
					} else {
						let targets = [player.next, player.previous];
						for (let target of targets) {
							player.randomGain(target, 'h', true);
						}
						let type = get.subtype2(trigger.cards[0]);
						switch (type) {
							case 'xjzh_guangjian':
								game.claerRestraint(player);
								break;
							case 'xjzh_jujian':
								targets = targets.filter((item) => player.isEnemiesOf(item) && !item.isTurnedOver());
								if (!targets.length) break;
								let target = targets.randomGet();
								target.turnOver(true);
								break;
							case 'xjzh_duanjian':
								targets = targets.filter((item) => player.isEnemiesOf(item));
								targets.randomGet().damage(1, player, 'nocard');
								break;
							case 'xjzh_taidao':
								targets = game.filterPlayer((current) => player.inRange(current));
								if (!targets.length) break;
								for (let target of targets) {
									if (target.getEquips(1).length) target.discard(target.getCards('e', (card) => get.subtype(card) == 'equip1'));
								}
								break;
							case 'xjzh_dunqi':
								targets = game.filterPlayer((current) => player.inRange(current));
								if (!targets.length) break;
								targets.randomGet().goMad();
								break;
						}
					}
				},
			},
			xjzh_dnf_jianyi: {
				trigger: {
					player: 'damageBegin1',
				},
				_priority: 10,
				forced: true,
				prompt(event, player) {
					if (!player.getEquips(1).length) {
						return '〖剑意〗:是否发动〖剑神〗切换武器牌？';
					} else {
						let card = player.getEquips(1).filter((card) => get.subtype2(card))[0],
							type = get.subtype2(card);
						switch (type) {
							case 'xjzh_guangjian':
								return `〖剑意〗:是否对${get.translation(event.source)}造成${event.num}点伤害,并令其获得一层感电？`;
								break;
							case 'xjzh_jujian':
								return `〖剑意〗:是否防止此伤害并令${get.translation(event.source)}视为你选择的一名其他角色使用一张不计入次数的【杀】？`;
								break;
							case 'xjzh_duanjian':
								return `〖剑意〗:是否发动技能摸两张牌？`;
								break;
							case 'xjzh_taidao':
								return `〖剑意〗:是否令${get.translation(event.source)}选择弃置${event.num}张牌或令你回复一点体力？`;
								break;
							case 'xjzh_dunqi':
								return `〖剑意〗:是否令${get.translation(event.source)}立即结束当前出牌阶段？`;
								break;
						}
					}
				},
				filter(event, player) {
					if (!player.getEquips(1).length) return true;
					let card = player.getEquips(1).filter((card) => get.subtype2(card))[0],
						type = get.subtype2(card);
					if (type == 'xjzh_duanjian') return true;
					if (type == 'xjzh_jujian' && event.source && !event.hasNature()) return true;
					if (['xjzh_guangjian', 'xjzh_taidao', 'xjzh_dunqi'].includes(type) && event.source) return true;
					return false;
				},
				async content(event, trigger, player) {
					if (!player.getEquips(1).length) {
						player.useSkill('xjzh_dnf_jianshen', player);
					} else {
						let card = player.getEquips(1).filter((card) => get.subtype2(card))[0],
							type = get.subtype2(card);
						switch (type) {
							case 'xjzh_guangjian':
								trigger.source.damage(trigger.num, player, 'nocard');
								trigger.source.changexjzhBUFF('gandian', 1);
								break;
							case 'xjzh_jujian':
								trigger.changeToZero();
								const { targets } = await player
									.chooseTarget(`选择一名角色令${get.translation(trigger.source)}对其使用一张【杀】`, (card, player, target) => {
										return ![trigger.source, player].includes(target);
									})
									.set('ai', (target) => {
										return get.effect(target, { name: 'sha' }, player, player);
									})
									.forResult();

								if (targets) trigger.source.useCard({ name: 'sha' }, targets, false).set('addCount', false);
								break;
							case 'xjzh_duanjian':
								player.draw(2);
								break;
							case 'xjzh_taidao':
								const { bool } = await trigger.source
									.chooseToDiscard(`弃置${trigger.num}张牌,否则${get.translation(player)}回复一点体力`, trigger.num, 'he')
									.set('ai', (card) => {
										if (get.recoverEffect(trigger.source, player, player) < 0) return 7 - get.value(card);
										return 0;
									})
									.forResult();

								if (!bool) player.recover();
								break;
							case 'xjzh_dunqi':
								event.getParent('phaseUse').skipped = true;
								break;
						}
					}
				},
			},
			xjzh_card_mojianklls_skill: {
				trigger: {
					source: 'damageBefore',
				},
				forced: true,
				_priority: 88,
				equipSkill: true,
				filter(event, player) {
					return event.num > 0;
				},
				async content(event, trigger, player) {
					trigger.player.damage(trigger.num, 'notrigger', 'nocard')._triggered = null;
					trigger.changeToZero();
				},
			},
			xjzh_card_julihjc_skill: {
				trigger: {
					source: 'damageAfter',
				},
				prompt(event, player) {
					return '是否令' + get.translation(event.player) + '跳过下个出牌阶段？';
				},
				_priority: 8,
				equipSkill: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				check(event, player) {
					return -get.attitude(player, event.player);
				},
				async content(event, trigger, player) {
					trigger.player.skip('phaseUse');
				},
				ai: {
					skip: true,
				},
			},
			xjzh_card_tiancongyunjian_skill: {
				trigger: {
					source: 'damageAfter',
				},
				forced: true,
				_priority: 88,
				equipSkill: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				async content(event, trigger, player) {
					const { targets } = await player
						.chooseTarget('【天丛云剑】:选择一名其他角色令其受到一点无来源伤害', lib.filter.notMe)
						.set('ai', (target) => {
							return get.damageEffect(target, player, player);
						})
						.forResult();

					if (targets) targets[0].damage(1, 'nosource');
				},
			},
			xjzh_card_guanshizhengzong_skill: {
				trigger: {
					source: 'damageAfter',
				},
				forced: true,
				_priority: 8,
				equipSkill: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				async content(event, trigger, player) {
					await trigger.player.changexjzhBUFF('yishang', 1);
					if (get.xjzhBUFFNum(player, 'yishang') == get.xjzhBUFFInfo('yishang', 'limit')) {
						await trigger.player.damage(get.xjzhBUFFNum(player, 'yishang'), player, 'nocard');
						trigger.player.changexjzhBUFF('yishang', -get.xjzhBUFFNum(player, 'yishang'));
					}
				},
			},
			xjzh_card_tianjigyx_skill: {
				trigger: {
					source: 'damageAfter',
				},
				forced: true,
				_priority: 8,
				equipSkill: true,
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return 2;
					},
				},
				async content(event, trigger, player) {
					if (get.xjzhBUFFNum(trigger.player, 'gandian') <= 0) {
						trigger.player.changexjzhBUFF('gandian', 1);
					} else {
						if (player.getStat().card.sha > 0) player.getStat().card.sha -= 1;
					}
				},
			},
			xjzh_poe_choice: {
				trigger: {
					player: 'enterGame',
					global: 'gameStart',
				},
				silent: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				nogainsSkill: true,
				firstDo: true,
				_priority: Infinity,
				filter(event, player) {
					if (!game.getExtensionConfig('仙家之魂', 'xjzh_poelose')) return false;
					let nameList = get.nameList(player),
						skills = [];
					for (let name of nameList) {
						if (lib.character[name].skills && lib.character[name].isShenhua) skills.addArray(lib.character[name].skills.filter((item) => !['xjzh_poe_choice', 'xjzh_poe_zhaohuan'].includes(item)));
					}
					skills = skills.filter((s) => player.hasSkill(s));
					if (skills.length >= 4) return true;
					return false;
				},
				content() {
					'step 0';
					var skills = lib.character[player.name][3];
					var pName = player.name;
					if (!skills.includes(event.name)) {
						skills = lib.character[player.name2][3];
						pName = player.name2;
					}
					skills = skills.filter((s) => !['xjzh_poe_choice', 'xjzh_poe_zhaohuan'].includes(s) && player.hasSkill(s));
					var num = skills.length - 4;
					event.num = num;
					if (!num) {
						event.finish();
						return;
					}
					if (player.isUnderControl()) {
						game.swapPlayerAuto(player);
					}
					var switchToAuto = function () {
						_status.imchoosing = false;
						event._result = {
							bool: true,
							skills: skills.randomGets(num),
						};
						if (event.dialog) event.dialog.close();
						if (event.control) event.control.close();
					};
					var chooseButton = function (pName, skills) {
						var event = _status.event;
						if (!event._result) event._result = {};
						event._result.skills = [];
						var rSkill = event._result.skills;
						var dialog = ui.create.dialog(`请选择${get.cnNumber(num)}个技能失去`, [[pName], 'character'], 'hidden');
						event.dialog = dialog;
						var table = document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin = '0';
						table.style.width = '100%';
						table.style.position = 'relative';
						for (var i = 0; i < skills.length; i++) {
							var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.link = skills[i];
							table.appendChild(td);
							td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
							td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
								if (_status.dragged) return;
								if (_status.justdragged) return;
								_status.tempNoButton = true;
								setTimeout(function () {
									_status.tempNoButton = false;
								}, 500);
								var link = this.link;
								if (!this.classList.contains('bluebg')) {
									if (rSkill.length >= event.num) return;
									rSkill.add(link);
									this.classList.add('bluebg');
								} else {
									this.classList.remove('bluebg');
									rSkill.remove(link);
								}
							});
						}
						dialog.content.appendChild(table);
						dialog.add('');
						dialog.open();
						event.switchToAuto = function () {
							event.dialog.close();
							event.control.close();
							_status.imchoosing = false;
						};
						event.control = ui.create.control('ok', function (link) {
							if (rSkill.length !== event.num) return;
							event.dialog.close();
							event.control.close();
							_status.imchoosing = false;
						});
						for (var i = 0; i < event.dialog.buttons.length; i++) {
							event.dialog.buttons[i].classList.add('selectable');
						}
						game.countChoose();
					};
					if (event.isMine()) {
						chooseButton(pName, skills);
					} else if (event.isOnline()) {
						event.player.send(chooseButton, pName, skills);
						event.player.wait();
					} else {
						switchToAuto();
					}
					('step 1');
					var map = event.result || result;
					if (map && map.skills) {
						for (var skill of map.skills) {
							player.popup(skill);
							player.removeSkill(skill);
						}
					}
				},
			},
			xjzh_poe_choice2: {
				silent: true,
				trigger: {
					player: ['enterGame'],
					global: ['gameStart', 'phaseBefore'],
				},
				forced: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				nogainsSkill: true,
				firstDo: true,
				_priority: Infinity,
				filter(event, player) {
					if (!game.getExtensionConfig('仙家之魂', 'xjzh_poelose')) return false;
					if (get.itemtype(player) != 'player') return false;
					if (!get.is.playerNames(player, 'xjzh_poe')) return false;
					var skills = player.skills.slice(0);
					var list = [];
					for (var i = 0; i < skills.length; i++) {
						var info = lib.skill[skills[i]];
						if (lib.translate[skills[i]] && lib.translate[skills[i] + '_info'] && info.poelose) {
							list.push(skills[i]);
						}
					}
					if (list.length >= 2) return true;
					return false;
				},
				content() {
					'step 0';
					var skills = player.skills;
					var list = [];
					for (var i = 0; i < skills.length; i++) {
						var info = lib.skill[skills[i]];
						if (lib.translate[skills[i]] && lib.translate[skills[i] + '_info'] && info.poelose && skills[i] != 'xjzh_poe_choice2') {
							list.push(skills[i]);
						}
					}
					event.skills = list.slice(0);
					('step 1');
					if (event.skills.length) {
						var dialog = ui.create.dialog('forcebutton', 'hidden');
						dialog.add('请选择获得一项技能');
						for (var i = 0; i < event.skills.length; i++) {
							if (lib.translate[event.skills[i] + '_info']) {
								var translation = get.translation(event.skills[i]);
								if (translation[0] == '新' && translation.length == 3) {
									translation = translation.slice(1, 3);
								} else {
									translation = translation.slice(0, 2);
								}
								var item = dialog.add('<div class="popup pointerdiv" style="width:95%;display:inline-block"><div class="skill">〖' + translation + '〗</div><div>' + lib.translate[event.skills[i] + '_info'] + '</div></div>');
								item.firstChild.link = event.skills[i];
							}
						}
					} else {
						event.finish();
						return;
					}
					player
						.chooseControl(event.skills, true)
						.set('prompt', '请选择移除一项技能')
						.set('ai', function () {
							return event.skills.randomGet();
						})
						.set('dialog', dialog);
					('step 2');
					if (result && result.control) {
						var skills = result.control;
						for (var i of event.skills) {
							if (i == skills) continue;
							player.removeSkill(i, true);
						}
						game.log(player, '选择了技能', '#y〖' + get.translation(skills) + '〗');
					}
				},
			},
			xjzh_poe_bingjian: {
				mod: {
					aiOrder(player, card, num) {
						var name = card.name;
						if (name != 'sha' && name != 'jiu') return num + 4;
						return num;
					},
				},
				usable: 1,
				poelose: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				nogainsSkill: true,
				enable: 'phaseUse',
				audio: 'ext:仙家之魂/audio/skill:2',
				filterCard(card, player) {
					return get.tag(card, 'damage');
				},
				complexCard: true,
				check: (card) => 4 - get.value(card),
				selectCard() {
					var player = _status.event.player;
					var num = player.countCards('h', function (card) {
						return get.tag(card, 'damage');
					});
					return num;
				},
				filterTarget(card, player, target) {
					return target != player;
				},
				position: 'h',
				multitarget: true,
				multiline: true,
				filter(event, player) {
					var hs = player.getCards('h', function (card) {
						return get.tag(card, 'damage');
					});
					if (!hs.length) return false;
					for (var i = 0; i < hs.length; i++) {
						var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
						if (mod2 === false) return false;
					}
					return true;
				},
				content() {
					'step 0';
					event.num = 0;
					('step 1');
					player.useCard({ name: 'sha', nature: 'ice' }, target, false).set('addCount', false);
					('step 2');
					event.num++;
					if (event.num < cards.length && target.isAlive()) event.goto(1);
					('step 3');
					if (player.getStat('damage')) {
						if (Math.random() <= Math.random()) target.changexjzhBUFF('binghuan', 1);
					}
				},
				ai: {
					order: 8,
					expose: 0.3,
					result: {
						target: -1,
					},
				},
			},
			xjzh_poe_dianjian: {
				mod: {
					aiOrder(player, card, num) {
						var name = card.name;
						if (name != 'sha' && name != 'jiu') return num + 4;
						return num;
					},
				},
				usable: 1,
				poelose: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				nogainsSkill: true,
				enable: 'phaseUse',
				audio: 'ext:仙家之魂/audio/skill:2',
				filterCard(card, player) {
					return get.tag(card, 'damage');
				},
				complexCard: true,
				check: (card) => 4 - get.value(card),
				selectCard() {
					var player = _status.event.player;
					var num = player.countCards('h', function (card) {
						return get.tag(card, 'damage');
					});
					return [1, num];
				},
				filterTarget(card, player, target) {
					return target != player;
				},
				selectTarget() {
					return ui.selected.cards.length;
				},
				position: 'h',
				filter(event, player) {
					var hs = player.getCards('h', function (card) {
						return get.tag(card, 'damage');
					});
					if (!hs.length) return false;
					for (var i = 0; i < hs.length; i++) {
						var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
						if (mod2 === false) return false;
					}
					return true;
				},
				content() {
					'step 0';
					player.useCard({ name: 'sha', nature: 'thunder' }, target, false).set('addCount', false);
					('step 1');
					if (player.getStat('damage')) {
						if (Math.random() <= Math.random()) target.changexjzhBUFF('gandian', 1);
					}
				},
				ai: {
					order: 8,
					expose: 0.3,
					result: {
						target: -1,
					},
				},
			},
			xjzh_poe_fenlie: {
				audio: 'ext:仙家之魂/audio/skill:2',
				trigger: {
					player: 'useCardToPlayer',
				},
				forced: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				poelose: true,
				nogainsSkill: true,
				_priority: 65,
				popup: false,
				filter(event, player) {
					return get.tag(event.card, 'damage') && game.players.length > 2 && event.targets.length == 1 && event.target != player && get.type(event.card) != 'delay';
				},
				content() {
					'step 0';
					var num = [];
					if (player.getEquip(1)) {
						num = 2;
					} else {
						num = 1;
					}
					player
						.chooseTarget('〖分裂〗额外指定' + get.translation(num) + '名' + get.translation(trigger.card) + '的目标？', [1, num], function (card, player, target) {
							var trigger = _status.event.getTrigger();
							if (trigger.targets.includes(target)) return false;
							return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
						})
						.set('ai', function (target) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							return get.effect(target, trigger.card, player, player);
						});
					('step 1');
					if (result.bool) {
						var target = result.targets;
						for (var i of target) {
							trigger.targets.add(i);
						}
						if (player.countMark('xjzh_intro_jufeng') < 10) player.useSkill('xjzh_poe_jufeng');
					}
					event.finish();
				},
			},
			xjzh_poe_tanshe: {
				audio: 'ext:仙家之魂/audio/skill:1',
				trigger: {
					source: 'damageSource',
				},
				forced: true,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				filter(event, player) {
					return !player.hasSkill('xjzh_poe_tanshejin') && Math.random() <= 0.3;
				},
				content() {
					'step 0';
					player.addTempSkill('xjzh_poe_tanshejin', 'useCardAfter');
					if (player.hasSkill('xjzh_poe_danmu')) {
						trigger.player.damage(1, player);
						event.goto(2);
					}
					('step 1');
					var previous = trigger.player.previous;
					var next = trigger.player.next;
					var list = [previous, next];
					var target = list.randomGet();
					if (target) {
						target.damage(1, player);
					}
					('step 2');
					if (player.countMark('xjzh_intro_jufeng') < 10) player.useSkill('xjzh_poe_jufeng');
				},
			},
			xjzh_poe_tanshejin: {},
			xjzh_poe_juji: {
				audio: 'ext:仙家之魂/audio/skill:1',
				trigger: {
					source: 'damageBegin',
				},
				forced: true,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				filter(event, player) {
					return !event.player.inRange(player);
				},
				content() {
					trigger.num += Math.floor(trigger.num * 0.6);
				},
			},
			xjzh_poe_jufeng: {
				audio: 'ext:仙家之魂/audio/skill:1',
				forced: true,
				popu: false,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				trigger: {
					player: 'useCard',
				},
				global: ['xjzh_intro_jufeng'],
				group: ['xjzh_poe_jufeng_liushi'],
				filter(event, player) {
					return _status.currentPhase == player && player.countMark('xjzh_intro_jufeng') < 10;
				},
				content() {
					'step 0';
					player.addMark('xjzh_intro_jufeng', 1, false);
					game.log(player, '获得了一层〖提速尾流〗');
					('step 1');
					for (var i of game.players) {
						if (i.identity == player.identity && i != player) {
							i.identityShown = true;
							i.addMark('xjzh_intro_jufeng', 1, false);
						}
					}
				},
				subSkill: {
					liushi: {
						trigger: {
							global: 'phaseEnd',
							player: 'damageEnd',
						},
						forced: true,
						popup: false,
						filter(event, player) {
							return player.hasMark('xjzh_intro_jufeng');
						},
						content() {
							'step 0';
							for (var i of game.players)
								if (trigger.name == 'phase') {
									if (i.hasMark('xjzh_intro_jufeng')) {
										i.removeMark('xjzh_intro_jufeng', 1, false);
									}
								} else {
									if (i.hasMark('xjzh_intro_jufeng')) {
										i.clearMark('xjzh_intro_jufeng', false);
									}
								}
							('step 1');
							if (trigger.name == 'phase') {
								game.log(player, '失去了一层〖提速尾流〗');
							} else {
								game.log(player, '失去了所有〖提速尾流〗');
							}
						},
					},
				},
			},
			xjzh_poe_danmu: {
				forced: true,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				trigger: {
					player: 'useCardToPlayer',
				},
				_priority: 66,
				filter(event, player) {
					if (!event.targets || event.targets.length) return false;
					if (event.target == player) return false;
					if (event.target.countMark('xjzh_poe_danmu_canpo') >= 4) return false;
					return Math.random() <= 0.3;
				},
				content() {
					trigger.target.addMark('xjzh_poe_danmu_canpo', 1, false);
				},
				global: ['xjzh_poe_danmu_canpo'],
				subSkill: {
					canpo: {
						audio: 'ext:仙家之魂/audio/skill:1',
						trigger: {
							source: 'damageBegin',
						},
						forced: true,
						marktext: '残',
						intro: {
							name: '残破',
							content(storage, player) {
								var str = '';
								str += '造成伤害有' + get.translation(storage * 25) + '%几率无效';
								return str;
							},
						},
						filter(event, player) {
							var num1 = player.countMark('xjzh_poe_danmu_canpo') * 0.25;
							return Math.random() <= num1 && player.hasMark('xjzh_poe_danmu_canpo');
						},
						content() {
							trigger.cancel();
						},
					},
				},
			},
			xjzh_poe_jianfeng: {
				enable: 'phaseUse',
				usable: 1,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				forceDie: true,
				filterCard(card, player, target) {
					return get.tag(card, 'damage');
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				filterTarget(card, player, target) {
					return target != player;
				},
				selectTarget() {
					if (game.xjzhAchi.hasAchi('刽子手', 'special')) return [1, 2];
					return [1, 1];
				},
				filter(event, player) {
					var cards = player.getCards('h', function (card) {
						return get.tag(card, 'damage');
					});
					return cards.length;
				},
				content() {
					'step 0';
					var cards = target.getCards('hejxs', function (card) {
						return !get.tag(card, 'damage');
					});
					if (!cards.length) event.goto(2);
					event.cards = cards;
					target.chooseBool('〖剑风〗:是否弃置所有非[伤害]卡牌？').set('ai', function (event, player) {
						if (target.countCards('h', 'shan') >= 2) return 0;
						var num = 0;
						var cards = target.getCards('h', function (card) {
							return !get.tag(card, 'damage');
						});
						if (Array.isArray(cards))
							for (var i of cards) {
								if (get.value(i) >= 8) num++;
							}
						return num;
					});
					('step 1');
					if (result.bool) {
						var cards = target.getCards('hejxs', function (card) {
							return !get.tag(card, 'damage');
						});
						target.discard(cards);
						event.finish();
						return;
					}
					('step 2');
					player.useCard('unequip', { name: 'sha' }, target, false).set('addCount', false);
					('step 3');
					if (target.isAlive()) {
						player
							.useCard('unequip', { name: 'sha' }, target, false)
							.set('addCount', false)
							.set('oncard', function (card, player) {
								var that = this;
								if (!that.baseDamage) that.baseDamage = 1;
								that.baseDamage += 1;
							});
					}
					('step 4');
					if (target.isDead()) {
						if (!game.xjzhAchi.hasAchi('刽子手', 'special')) {
							if (player.isUnderControl(true) && game.me == player) game.xjzhAchi.addProgress('刽子手', 'special', 1);
						}
					}
				},
				ai: {
					jueqing: true,
					order: 8,
					result: {
						target: -1,
					},
				},
			},
			xjzh_poe_sidou: {
				enable: 'chooseToUse',
				usable: 1,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				filterCard: true,
				selectCard: 1,
				viewAs: {
					name: 'juedou',
				},
				position: 'h',
				check: (card) => 6 - get.value(card),
				viewAsFilter(player) {
					return player.countCards('h');
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				onuse(result, player) {
					var cards = result.targets[0].getCards('ej');
					var cards2 = player.getCards('ej');
					if (cards) result.targets[0].directgain(cards, null, 'xjzh_poe_sidou');
					if (cards2) player.directgain(cards2, null, 'xjzh_poe_sidou');
					player.addTempSkill('xjzh_poe_sidou_mod', 'juedouEnd');
					result.targets[0].addTempSkill('xjzh_poe_sidou_mod', 'juedouEnd');
					player.addTempSkill('xjzh_poe_sidou_gain');
					result.targets[0].addTempSkill('xjzh_poe_sidou_gain');
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							if (!target) return;
							if (!player) return;
							if (target.hasSkillTag('noh')) return 0;
							var cards = target.countCards('hej');
							var cards2 = player.countCards('hej');
							return -(cards2 - cards);
						},
					},
				},
				subSkill: {
					mod: {
						charlotte: true,
						forced: true,
						mod: {
							cardname(card) {
								return 'sha';
							},
						},
						trigger: {
							player: 'damageEnd',
						},
						filter(event, player) {
							var num = Math.ceil(player.maxHp / 2);
							return num > player.hp;
						},
						content() {
							player.loseHp(player.hp);
						},
					},
					gain: {
						trigger: {
							global: 'juedouAfter',
						},
						charlotte: true,
						forced: true,
						filter(event, player) {
							var cards = player.getCards('h', function (card) {
								return card.hasGaintag('xjzh_poe_sidou');
							});
							return cards.length;
						},
						content() {
							var cards = player.getCards('h', function (card) {
								return card.hasGaintag('xjzh_poe_sidou');
							});
							var list = [];
							if (Array.isArray(cards))
								for (var i of cards) {
									if (get.type(i) == 'equip') list.push(i);
									if (get.type(i) == 'delay') player.addJudge(i);
								}
							if (list.length) {
								for (var i of list) {
									player.equip(i);
								}
							}
							player.removeSkill('xjzh_poe_sidou_gain', true);
						},
					},
				},
			},
			xjzh_poe_tiaozhan: {
				trigger: {
					global: 'phaseUseBegin',
				},
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				forceDie: true,
				prompt(event, player) {
					return '〖挑战〗:是否摸3张牌并视为对' + get.translation(event.player) + '使用一张【决斗】';
				},
				check(event, player) {
					var att = get.attitude(event.player, player);
					if (!lib.filter.targetEnabled2({ name: 'juedou' }, player, event.player)) return 0;
					if (att <= 0) {
						return player.countCards('h') + 3 - event.player.countCards('h');
					}
					if (att > 0) {
						if (event.player.isHealthy() && player.countCards('h') <= 1) return player.getDamagedHp();
					}
					return 0;
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!lib.filter.targetEnabled2({ name: 'juedou' }, player, event.player)) return false;
					if (event.player == player) return false;
					return true;
				},
				content() {
					'step 0';
					player.draw(3);
					('step 1');
					player.useCard({ name: 'juedou' }, trigger.player, false);
					('step 2');
					if (
						player.getHistory('useCard', function (evt) {
							return (
								evt.parent.name == 'xjzh_poe_tiaozhan' &&
								player.getHistory('sourceDamage', function (evt2) {
									return evt.card == evt2.card;
								}).length
							);
						}).length
					) {
						trigger.player.discard(trigger.player.getCards('h'));
					} else {
						if (!game.xjzhAchi.hasAchi('完美斗士', 'special')) player.chooseToDiscard(3, true);
					}
					('step 3');
					if (trigger.player.isDead()) {
						if (!game.xjzhAchi.hasAchi('完美斗士', 'special')) {
							if (player.isUnderControl(true) && game.me == player) game.xjzhAchi.addProgress('完美斗士', 'special', 1);
						}
					}
				},
			},
			xjzh_poe_zhenya: {
				forced: true,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				mark: true,
				marktext: '镇',
				intro: {
					content(storage, player) {
						let str = '',
							num = Math.round(0.1 * (1 + game.players.length * 0.5) * (1 + game.dead.length * 0.6) * 100);
						str += '当前物理攻击暴击率:' + get.strNumber(num) + '%';
						return str;
					},
					markcount: (storage, player) => Math.round(0.1 * (1 + game.players.length * 0.5) * (1 + game.dead.length * 0.6) * 100),
				},
				trigger: {
					source: 'damageBegin',
				},
				filter(event, player) {
					if (event.getParent('criticalstrike').name == 'criticalstrike') return false;
					return !game.hasNature(event);
				},
				async content(event, trigger, player) {
					let num = 0.1 * (1 + game.players.length * 0.5) * (1 + game.dead.length * 0.6);
					game.xjzh_Criticalstrike(player, num, num >= 1 ? 3 : 2, false);
				},
			},
			xjzh_poe_zaixing: {
				forced: true,
				poelose: true,
				nogainsSkill: true,
				_priority: -1,
				charlotte: true,
				xjzh_xinghunSkill: true,
				trigger: {
					source: 'damageAfter',
				},
				filter(event, player) {
					return !event.numFixed && player.hujia < 3;
				},
				mod: {
					selectTarget(card, player, range) {
						if (Array.isArray(range) && range[1] == -1) return;
						if (game.players.length < 3) return;
						if (card.name == 'sha' && !game.hasNature(card)) range[1] += player.hujia;
					},
				},
				async content(event, trigger, player) {
					player.changeHujia(1);
				},
			},
			xjzh_poe_lengxue: {
				forced: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				poelose: true,
				nogainsSkill: true,
				audio: 'ext:仙家之魂/audio/skill:1',
				trigger: {
					source: 'damageAfter',
				},
				filter(event, player) {
					if (game.hasNature(event)) return false;
					return event.player.isDying();
				},
				async content(event, trigger, player) {
					trigger.player.die().source = player;
				},
			},
			xjzh_poe_shixue: {
				trigger: {
					source: 'damageSource',
				},
				forced: true,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				_priority: 10,
				filter(event, player) {
					return !game.hasNature(event);
				},
				async content(event, trigger, player) {
					if (player.isDamaged()) {
						player.recover();
					} else trigger.xjzhCriticalstrike ? player.draw(2) : player.draw();
				},
			},
			xjzh_poe_canbao: {
				forced: true,
				forceDie: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				poelose: true,
				nogainsSkill: true,
				marktext: '影',
				_priority: 11,
				intro: {
					content: '手牌上限、摸牌数、攻击距离、出牌次数+#',
				},
				mod: {
					attackFrom(from, to, distance) {
						return distance - from.countMark('xjzh_poe_canbao');
					},
					maxHandcard(player, num) {
						return num + player.countMark('xjzh_poe_canbao');
					},
					cardUsable(card, player, num) {
						if (['jiu', 'sha'].includes(card.name)) return num + player.countMark('xjzh_poe_canbao');
					},
				},
				audio: 'ext:仙家之魂/audio/skill:1',
				trigger: {
					source: 'dieAfter',
					player: 'drawBegin',
				},
				filter(event, player) {
					if (event.name == 'draw') return player.hasMark('xjzh_poe_canbao');
					return event.player.isDead();
				},
				async content(event, trigger, player) {
					if (trigger.name == 'die') player.addMark('xjzh_poe_canbao', 1, false);
					else trigger.num += player.countMark('xjzh_poe_canbao');
				},
			},
			xjzh_poe_yingxing: {
				trigger: {
					player: 'damageAfter',
				},
				forced: true,
				_priority: -1,
				charlotte: true,
				xjzh_xinghunSkill: true,
				poelose: true,
				nogainsSkill: true,
				filter(event, player) {
					return _status.currentPhase != player;
				},
				async content(event, trigger, player) {
					let evt = _status.event.getParent('phaseUse');
					if (evt && evt.name == 'phaseUse') evt.skipped = true;
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (!target) return;
							if (player.getCardUsable('sha') > 0) {
								if (get.tag(card, 'damage')) return 0.5;
							}
							return 1;
						},
					},
				},
			},
			xjzh_poe_jingji: {
				trigger: {
					source: ['damageAfter'],
					player: ['damageAfter', 'xjzh_poe_fuchou_gedang'],
				},
				forced: true,
				_priority: -1,
				charlotte: true,
				xjzh_xinghunSkill: true,
				poelose: true,
				nogainsSkill: true,
				marktext: '竞',
				intro: {
					name: '竞技',
					content(storage, player) {
						var str = '';
						var num = player.countMark('xjzh_poe_jingji') * 6.5;
						if (player.hasSkill('xjzh_poe_zhuzao')) num += 10;
						if (!num || num == 0) return '反击几率:0%';
						str += '反击几率:' + get.translation(num) + '%';
						return str;
					},
				},
				filter(event, player) {
					if (event.player == player) return player.hasMark('xjzh_poe_jingji');
					return event.source == player;
				},
				content() {
					if (trigger.source == player) {
						if (player.countMark('xjzh_poe_jingji') < 10) player.addMark('xjzh_poe_jingji', 1, false);
					} else if (trigger.player == player) {
						if (player.hasMark('xjzh_poe_jingji')) player.removeMark('xjzh_poe_jingji', 1, false);
					}
				},
				group: ['xjzh_poe_jingji_fanji'],
				subSkill: {
					fanji: {
						trigger: {
							player: ['damageAfter', 'damageCancelled'],
						},
						forced: true,
						filter(event, player) {
							if (!player.hasMark('xjzh_poe_jingji')) return false;
							if (event.triggername == 'damageCancelled') return true;
							var num = player.countMark('xjzh_poe_jingji') * 0.065;
							if (player.hasSkill('xjzh_poe_zhuzao')) {
								return Math.random() <= num + 0.1;
							}
							return Math.random() <= num;
						},
						content() {
							'step 0';
							if (event.triggername == 'damageAfter') {
								targets = trigger.source;
							} else {
								targets = trigger.player;
							}
							var str = '〖反击〗:是否视为对' + get.translation(targets) + '使用一张【杀】';
							player
								.chooseBool(str)
								.set('ai', function () {
									return get.damageEffect(targets, player, player);
								})
								.set('targets', targets);
							('step 1');
							if (result.bool) {
								if (player.hasSkill('xjzh_poe_zhuzao')) {
									player.useCard({ name: 'sha' }, targets, false).set('oncard', function (card, player) {
										var that = this;
										if (!that.baseDamage) that.baseDamage = 1;
										that.baseDamage += 1;
									});
								} else {
									player.useCard({ name: 'sha' }, targets, false);
								}
							}
						},
					},
				},
			},
			xjzh_poe_fuchou: {
				trigger: {
					player: 'damageBegin1',
				},
				forced: true,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				_priority: 66,
				audio: 'ext:仙家之魂/audio/skill:1',
				mark: true,
				marktext: '格',
				intro: {
					name: '格挡',
					content(storage, player) {
						var str = '格挡几率上限:';
						var num = player.countMark('xjzh_poe_fuchou');
						num += player.countMark('xjzh_poe_jingji');
						num += player.countMark('xjzh_poe_xueyan');
						if (!player.hasSkill('xjzh_poe_doushi')) {
							str += '75%<br>物理攻击格挡几率:' + get.translation(num) + '%';
						} else {
							str += '85%<br>物理攻击格挡几率:' + get.translation(num) + '%<br>法术攻击格挡几率:' + get.translation(num) + '%';
						}
						return str;
					},
					markcount(storage, player) {
						return player.countMark('xjzh_poe_fuchou') + player.countMark('xjzh_poe_jingji') + player.countMark('xjzh_poe_xueyan');
					},
				},
				init(player) {
					player.addMark('xjzh_poe_fuchou', 50, false);
					player.update();
				},
				filter(event, player) {
					var num = player.countMark('xjzh_poe_fuchou');
					if (player.hasMark('xjzh_poe_jingji')) num += player.countMark('xjzh_poe_jingji');
					if (player.hasSkill('xjzh_poe_doushi')) {
						return Math.random() <= num * 0.01;
					}
					return !game.hasNature(event) && Math.random() <= num * 0.01;
				},
				content() {
					'step 0';
					if (!game.hasNature(trigger)) {
						game.log(player, '格挡了本次攻击伤害');
					} else {
						game.log(player, '格挡了本次法术伤害');
					}
					('step 1');
					player.recover(trigger.num);
					('step 2');
					var num = 60;
					if (player.hasSkill('xjzh_poe_doushi')) num += 10;
					if (player.countMark('xjzh_poe_fuchou') < num) {
						player.addMark('xjzh_poe_fuchou', 1, false);
						game.log(player, '增加了1%物理攻击格挡几率');
					}
					('step 3');
					trigger.cancel();
				},
				ai: {
					effect: {
						target(card, player, target) {
							var num1 = player.countMark('xjzh_poe_fuchou') * 0.01;
							var num2 = 1 - num1;
							if (get.tag(card, 'damage') && !get.nature(card)) return [num2, num1];
						},
					},
				},
			},
			xjzh_poe_doushi: {
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				forced: true,
				trigger: {
					player: 'disableEquipBefore',
				},
				onremove(player, skill) {
					if (!player.hasSkill('xjzh_poe_fuchou')) return;
					var num = player.countMark('xjzh_poe_fuchou');
					if (num > 60) {
						player.removeMark('xjzh_poe_fuchou', num - 60, false);
					}
				},
				filter(event, player) {
					return event.slots.includes('equip2');
				},
				content() {
					while (trigger.slots.includes('equip2')) trigger.slots.remove('equip2');
					game.log('无法废除', player, '的防具栏');
				},
			},
			xjzh_poe_zhuzao: {
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				forced: true,
				init(player) {
					setTimeout(function () {
						if (player.hasSkill('xjzh_poe_fuchou')) {
							player.addMark('xjzh_poe_fuchou', 10, false);
						}
					}, 500);
				},
				onremove(player, skill) {
					setTimeout(function () {
						if (player.hasSkill('xjzh_poe_fuchou')) {
							player.removeMark('xjzh_poe_fuchou', 10, false);
						}
					}, 500);
				},
			},
			xjzh_poe_xueyan: {
				trigger: {
					player: 'recoverBegin',
				},
				forced: true,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				content() {
					trigger.num++;
				},
				contentAfter() {
					if (player.isHealthy()) {
						if (player.hasSkill('xjzh_sanguo_fuchou')) player.addMark('xjzh_poe_xueyan', 2, false);
					}
				},
			},
			xjzh_poe_baipiao: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				marktext: '嫖',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				content() {
					if (!player.getEquip(2)) {
						var card = get.cardPile(function (card) {
							return get.subtype(card) == 'equip2';
						});
						if (card) player.useCard(card, player)._triggered = null;
					} else {
						var card = get.cardPile(function (card) {
							return get.subtype(card) == 'equip2';
						});
						const skills = lib.card[card.name]?.skills;
						if (Array.isArray(skills)) {
							for (var i of skills) {
								player.addSkill(i);
							} //QQQ
						}
						var cards = game.createCard(card);
						player.addToExpansion(cards, 'gain2').gaintag.add('xjzh_poe_baipiao');
						game.cardsDiscard(card);
					}
				},
			},
			xjzh_poe_shenghua: {
				audio: 'ext:仙家之魂/audio/skill:4',
				trigger: {
					player: ['enterGame', 'phaseZhunbeiBegin'],
					global: 'gameDrawBegin',
				},
				forced: true,
				_priority: 98,
				content() {
					'step 0';
					if (trigger.name == 'phaseZhunbei') {
						var list = player.getSkills(null, false, false).filter(function (skill) {
							var info = lib.skill[skill];
							return info && info.poelose && skill != 'xjzh_poe_shenghua';
						});
						player.chooseBool('〖升华〗:是否移除' + get.translation(list) + '重获技能').set('ai', function () {
							return Math.random();
						});
						event.goto(2);
					}
					('step 1');
					var list = [];
					var list2 = [];
					var players = game.players.concat(game.dead);
					for (var i of players) {
						list2.add(i.name);
						list2.add(i.name1);
						list2.add(i.name2);
					}
					for (var i in lib.characterPack.XWTR) {
						if (list2.includes(i)) continue;
						for (var j = 0; j < lib.character[i][3].length; j++) {
							var info = lib.skill[lib.character[i][3][j]];
							if (info && info.poelose) list.add(lib.character[i][3][j]);
						}
					}
					if (list.length >= 5) {
						var num = 5;
					} else {
						var num = list.length;
					}
					var link = list.randomGets(num);
					player.addSkill(link);
					game.log(player, '获得技能', '〖' + get.translation(link) + '〗');
					event.finish();
					return;
					('step 2');
					if (result.bool) {
						var list = player.getSkills(null, false, false).filter(function (skill) {
							var info = lib.skill[skill];
							return info && info.poelose && skill != 'xjzh_poe_shenghua';
						});
						player.removeSkill(list, true);
						event.goto(1);
					}
				},
			},
			xjzh_poe_huoqiu: {
				mod: {
					cardname(card, player) {
						if (get.color(card) == 'red') return 'sha';
					},
					cardnature(card, player) {
						if (get.color(card) == 'red') return 'fire';
					},
					targetInRange(card) {
						if (card.name == 'sha' && card.nature == 'fire') return true;
					},
					cardUsable(card, player, num) {
						if (card.name == 'sha' && card.nature == 'fire') return Infinity;
					},
				},
				trigger: {
					source: 'damageEnd',
				},
				forced: true,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				_priority: Infinity,
				audio: 'ext:仙家之魂/audio/skill:3',
				filter(event, player) {
					if (!event.cards || !event.cards.length) return false;
					let history = player.getHistory('sourceDamage', (card) => {
						return card.card && card.card.name == 'sha' && game.hasNature(card.card, 'fire');
					});
					if (!history.length || history.length == 0) return false;
					if (event.getParent(3).name == 'xjzh_poe_huoqiu') return false;
					return event.card && event.card.name == 'sha' && game.hasNature(event.card, 'fire');
				},
				async content(event, trigger, player) {
					let num = player.getHistory('sourceDamage', function (card) {
						return card.card && card.card.name == 'sha' && game.hasNature(card.card, 'fire');
					}).length;
					let target = trigger.player;
					do {
						target = target.next;
						if (target == player) target = target.next;
						await target.damage(trigger.nature, trigger.num, trigger.source, 'nocard');
						if (!game.xjzhAchi.hasAchi('火焰大师', 'special')) {
							if (player.isUnderControl(true) && target.isDead()) game.xjzhAchi.addProgress('火焰大师', 'special', 1);
						}
						num--;
					} while (num > 0);
					if (game.xjzhAchi.hasAchi('火焰大师', 'special')) {
						let history = player.getHistory('sourceDamage', (card) => {
							return card.card && card.card.name == 'sha' && game.hasNature(card.card, 'fire');
						});
						if (history.length > 1) player.draw(2);
					}
				},
			},
			xjzh_poe_mishu: {
				trigger: {
					target: 'useCardToTargeted',
					player: 'useCardToPlayered',
				},
				forced: true,
				_priority: 12,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (event.target == player) {
						if (event.player == player) return false;
						return player.countCards('h') < event.player.countCards('h');
					}
					if (event.target != player) return event.target.countCards('h') > player.countCards('h');
					return false;
				},
				async content(event, trigger, player) {
					let targetx = trigger.target == player ? trigger.player : trigger.target;
					player.drawTo(targetx.countCards('h'));
					const { targets } = await player
						.chooseTarget(get.prompt2('xjzh_poe_mishu'), (card, player, target) => {
							return target != player && target != targetx;
						})
						.set('ai', (target) => {
							return get.effect(target, trigger.card, player, player);
						}) //QQQ
						.forResult();
					if (targets) {
						trigger.targets.addArray(targets);
						game.log(`${targets}成为了${get.translation(trigger.card)}的额外目标`);
					}
				},
			},
			xjzh_poe_zhaohuan: {
				trigger: {
					player: 'xjzh_zhaohuan',
					global: 'dieAfter',
				},
				silent: true,
				nogainsSkill: true,
				charlotte: true,
				forceDie: true,
				superCharlotte: true,
				xjzh_xinghunSkill: true,
				init(player, skill) {
					player.storage.xjzh_poe_zhaohuan = [];
				}, //QQQ
				async content(event, trigger, player) {
					if (!player.storage.xjzh_poe_zhaohuan) {
						player.storage.xjzh_poe_zhaohuan = [];
					}
					let name = trigger.name,
						storage = player.storage.xjzh_poe_zhaohuan;
					if (name == 'die') {
						if (trigger.player == player) {
							for (let target of storage) {
								delete target.storage.xjzh_poe_zhaohuan;
								game.removePlayer(target);
							}
							delete player.storage.xjzh_poe_zhaohuan;
						} else {
							if (get.xjzh_isZhaohuan(trigger.player)) {
								if (storage.includes(trigger.player)) storage.remove(trigger.player);
								delete trigger.player.storage.xjzh_poe_zhaohuan;
								game.removePlayer(trigger.player);
							}
						}
					} else {
						let target = trigger.target;
						player.storage.xjzh_poe_zhaohuan.add(target);
						trigger.target.storage.xjzh_poe_zhaohuan = [player];
					}
				},
			},
			xjzh_poe_liequan: {
				trigger: {
					player: 'phaseBegin',
					source: 'damageAfter',
				},
				forced: true,
				_priority: 12,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				mode: 'identity',
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!player.storage.xjzh_poe_zhaohuan) {
						player.storage.xjzh_poe_zhaohuan = [];
					}
					if (player.storage.xjzh_poe_zhaohuan.includes(game.findPlayer((item) => get.is.playerNames(item, 'xjzh_poe_diyuliequan')))) return false;
					if ((game.hasNature(event, 'fire') && event.name == 'damage') || event.name == 'phase') return true;
					return false;
				},
				async content(event, trigger, player) {
					player.addFellow('xjzh_poe_diyuliequan');
				},
			},
			xjzh_poe_ranhuo: {
				trigger: {
					player: 'phaseBegin',
					global: 'damageBegin1',
				},
				forced: true,
				_priority: 12,
				charlotte: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!player.storage.xjzh_poe_zhaohuan) {
						player.storage.xjzh_poe_zhaohuan = [];
					}
					if (get.xjzhBUFFNum(event.player, 'ranshao') > 0 && event.name == 'damage') {
						if (event.source == player) return true;
						if (player.storage.xjzh_poe_zhaohuan.includes(event.source)) return true;
						return false;
					} //QQQ
					if (game.countPlayer((current) => player.inRange(current) && player.isEnemiesOf(current))) return true;
					return false;
				},
				async content(event, trigger, player) {
					let name = trigger.name;
					if (name == 'damage') {
						if (!trigger.baseDamage) trigger.baseDamage = 1;
						trigger.baseDamage++;
					} else {
						let targets = game.filterPlayer((current) => player.inRange(current) && player.isEnemiesOf(current));
						for (let target of targets) target.changexjzhBUFF('ranshao', 1, player);
					}
					if (game.xjzhAchi.hasAchi('地狱之火', 'special')) {
						for (var i of player.storage.xjzh_poe_zhaohuan) {
							i.draw(2);
						}
					}
				},
			},
			xjzh_poe_yuquan: {
				trigger: {
					global: 'roundStart',
					player: 'damageBegin1',
				},
				forced: true,
				_priority: 12,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				filter(event, player, name) {
					if (name == 'damageBegin1') {
						if (Math.random() >= 0.2) return false;
						return game.findPlayer((item) => get.is.playerNames(item, 'xjzh_poe_diyuliequan')); //QQQ
					}
					return game.roundNumber == 1;
				},
				async content(event, trigger, player) {
					let name = event.triggername;
					name == 'damageBegin1' ? (trigger.player = game.findPlayer((item) => get.is.playerNames(item, 'xjzh_poe_diyuliequan'))) : player.addSkills('xjzh_poe_liequan');
				},
			},
			xjzh_poe_huoji: {
				trigger: {
					player: 'useCard2',
					global: 'phaseJieshuBegin',
				},
				forced: true,
				_priority: 12,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				mod: {
					targetInRange: (card, player, target) => true,
					cardUsable: (card, player, num) => true,
				},
				mark: true,
				marktext: '火',
				intro: {
					name: '炼狱之炎',
					content: '#',
				},
				filter(event, player) {
					if (event.name == 'phaseJieshu') return player.hasMark('xjzh_poe_huoji');
					return true;
				},
				async content(event, trigger, player) {
					if (trigger.name == 'phaseJieshu') {
						player.removeMark('xjzh_poe_huoji', 1, false);
						game.log(player, '移去了1点炼狱之炎');
					} else {
						player.addMark('xjzh_poe_huoji', 1, false);
						game.log(player, '获得了1点炼狱之炎');
						if (player.countMark('xjzh_poe_huoji') >= player.maxHp) {
							player.damage(player.countMark('xjzh_poe_huoji'), 'fire', player, 'nocard');
							player.clearMark('xjzh_poe_huoji');
						}
					}
				},
			},
			xjzh_poe_feiteng: {
				trigger: {
					global: 'damageBegin1',
				},
				forced: true,
				_priority: 12,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				filter(event, player) {
					if (!player.countMark('xjzh_poe_huoji')) return false;
					if (event.numFixed || event.cancelled) return false;
					if (game.hasNature(event, 'fire')) return false;
					return player.getFriends(true).includes(event.source);
				},
				async content(event, trigger, player) {
					let num = trigger.num++;
					player.changeHujia(num);
				},
			},
			xjzh_poe_xianji: {
				trigger: {
					global: 'roundStart',
					player: 'changeHujiaBegin',
				},
				forced: true,
				_priority: 12,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				maxHujia: null,
				init(player, skill) {
					lib.skill[skill].maxHujia = player.maxHp * 2;
				},
				filter(event, player) {
					let num = lib.skill.xjzh_poe_xianji.maxHujia - player.hujia;
					if (event.name == 'changeHujia') return num > 0;
					return game.roundNumber == 1;
				},
				async content(event, trigger, player) {
					if (trigger.name == 'changeHujia') trigger.num = Math.max(0, parseInt(lib.skill.xjzh_poe_xianji.maxHujia) - player.hujia);
					else {
						let num = player.maxHp,
							hujia = num * 2;
						player.maxHp = Math.floor(num / 2);
						lib.skill[event.name].maxHujia = hujia;
						player.changeHujia(hujia, null, lib.skill[event.name].maxHujia);
					}
				},
			},
			xjzh_poe_shenyou: {
				trigger: {
					player: 'damageBegin1',
				},
				forced: true,
				_priority: 15,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				async content(event, trigger, player) {
					if (!game.hasNature(trigger, 'fire')) await game.setNature(trigger, 'fire');
					if (Math.random() <= 0.5) trigger.changeToZero();
				},
			},
			xjzh_poe_shikui: {
				trigger: {
					global: ['gameStart', 'dieAfter'],
					player: 'drawBegin',
				},
				forced: true,
				_priority: 10,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				async content(event, trigger, player) {
					let name = trigger.name,
						index,
						list = ['xjzh_poe_kuloumushi', 'xjzh_poe_kulouzonghuozhe', 'xjzh_poe_kuloufengbaofashi'];
					if (name == 'draw') {
						let num = game.countPlayer((item) => get.xjzh_isZhaohuan(item));
						trigger.num += num;
					} else if (name == 'die') {
						if (!get.xjzh_isZhaohuan(trigger.player)) {
							game.removePlayer(trigger.player);
							index = [list.randomGet()];
						}
					} else {
						const { links } = await player
							.chooseButton(2, true)
							.set('ai', (button) => {
								return get.rank(button.link, true);
							})
							.set('createDialog', ['请选择2张武将牌', [list, 'character']])
							.forResult();

						index = links;
					}
					if (Array.isArray(index)) {
						for (var item of index) {
							player.addFellow(item);
						}
					} //QQQ
				},
			},
			xjzh_poe_fusu: {
				trigger: {
					global: 'roundStart',
				},
				forced: true,
				_priority: 10,
				nogainsSkill: true,
				charlotte: true,
				async content(event, trigger, player) {
					if (!player.storage.xjzh_poe_zhaohuan) {
						player.storage.xjzh_poe_zhaohuan = [];
					}
					let list = game.filterPlayer((item) => get.xjzh_isZhaohuan(item) && player.storage.xjzh_poe_zhaohuan.includes(item));
					let num = list.length - 1;
					for (let target of list) {
						target.recover(get.rand(1, num));
						target.draw(get.rand(1, num));
					}
				},
			},
			xjzh_poe_zonghuo: {
				trigger: {
					global: ['damageBegin1', 'changexjzhBUFFBegin2'],
				},
				forced: true,
				_priority: 10,
				nogainsSkill: true,
				charlotte: true,
				filter(event, player) {
					if (!player.storage.xjzh_poe_zhaohuan) {
						player.storage.xjzh_poe_zhaohuan = [];
					}
					let storage = player.storage.xjzh_poe_zhaohuan;
					if (event.name == 'damage') {
						if (event.numFixed || event.cancelled) return false;
						return storage.includes(event.source) && game.hasNature(event, 'fire') && game.xjzh_randomSuccess();
					}
					return event.source && player.getFriends(true).includes(event.source) && event.buff == 'xjzh_buff_ranshao';
				},
				async content(event, trigger, player) {
					let name = trigger.name;
					if (trigger.name == 'damage') {
						let targets = player.getEnemies();
						targets.randomGet().damage(1, player, 'fire', 'nocard');
					} else {
						trigger.set('noLimit', true);
					}
				},
			},
			xjzh_poe_fengbao: {
				trigger: {
					global: ['damageBegin1'],
				},
				forced: true,
				_priority: 10,
				nogainsSkill: true,
				charlotte: true,
				filter(event, player) {
					if (event.numFixed || event.cancelled) return false;
					return event.source == player && player.getEnemies().includes(event.player);
				},
				async content(event, trigger, player) {
					trigger.player.changexjzhBUFF('gandian', 1, player, true);
				},
			},
			xjzh_poe_huiliu: {
				trigger: {
					global: ['phaseZhunbeiBegin', 'damageBegin'],
				},
				forced: true,
				_priority: 12,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				mark: true,
				marktext: '汇',
				intro: {
					name: '元素汇流',
					content(storage, player) {
						if (!storage) return '没有元素汇流';
						let nature = lib.skill.xjzh_poe_huiliu.natureList(storage);
						let str = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${nature}汇流<br><br>`;
						let str2 = `<li>你造成伤害视为${nature}伤害<br><li>你防止非${nature}属性伤害`;
						return str + str2;
					},
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				natureList(nature) {
					let object = {
						fire: '火焰',
						thunder: '闪电',
						ice: '冰霜',
						poison: '猛毒',
					};
					if (!nature) return Object.keys(object);
					return object[nature];
				},
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = null;
				},
				filter(event, player, name) {
					if (name == 'phaseZhunbeiBegin') return true;
					if (name == 'damageBegin') {
						let storage = player.storage.xjzh_poe_huiliu;
						return !game.hasNature(event, storage);
					}
					return false;
				},
				async content(event, trigger, player) {
					let natureList = lib.skill[event.name].natureList,
						storage = player.storage.xjzh_poe_huiliu;
					if (event.triggername == 'phaseZhunbeiBegin') {
						let list = natureList().filter((item) => item != storage);
						let nature = list.randomGet(),
							str = `${natureList(nature)}汇流`;
						player.popup(str);
						player.$fullscreenpop(str, nature);
						player.storage.xjzh_poe_huiliu = nature;
					} else {
						trigger.player == player ? trigger.changeToZero() : game.setNature(trigger, storage, false);
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (!player.storage.xjzh_poe_huiliu) return;
							if (get.tag(card, 'damage')) {
								if (!game.hasNature(card, player.storage.xjzh_poe_huiliu)) return [0, 0];
								return [1, 0];
							}
						},
					},
				},
			},
			xjzh_poe_guangta: {
				trigger: {
					source: 'damageAfter',
				},
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (event.parent.name == 'xjzh_poe_guangta') return false;
					return !event.numFixed;
				},
				prompt(event, player) {
					return `〖光塔〗:选择你上家/下家一名角色对其造成${get.translation(event.num)}点${game.hasNature(event) ? `${get.translation(event.nature)}属性` : ''}伤害`;
				},
				check(event, player) {
					let targets = [player.previous, player.next];
					return targets.some((target) => get.attitude(player, target) <= 0);
				},
				async content(event, trigger, player) {
					const { targets } = await player
						.chooseTarget(`〖光塔〗:选择你上家/下家一名角色对其造成${get.translation(event.num)}点${game.hasNature(event) ? `${get.translation(event.nature)}属性` : ''}伤害`, (card, player, target) => {
							return [player.previous, player.next].includes(target);
						})
						.set('ai', (target) => {
							let trigger = _status.event.getTrigger();
							return get.damageEffect(target, player, player, trigger.nature);
						})
						.forResult();

					if (targets) {
						targets[0].damage(trigger.num, trigger.nature, player, 'nocard');
						if (game.hasNature(trigger, 'fire')) targets[0].changexjzhBUFF('gandian', 1);
						else if (game.hasNature(trigger, 'ice')) targets[0].changexjzhBUFF('ranshao', 1);
						else if (game.hasNature(trigger, 'thunder')) targets[0].changexjzhBUFF('bingdong', 1);
					}
				},
			},
			xjzh_poe_sangzhong: {
				trigger: {
					player: 'loseAfter',
				},
				forced: true,
				_priority: -10,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				mod: {
					targetInRange(card, player, target) {
						if (!card.cards) return;
						if (card.name == 'sha' || card.name == 'jiu') {
							for (var i of card.cards) {
								if (i.hasGaintag('xjzh_poe_sangzhong')) return true;
							}
						}
					},
				},
				filter(event, player) {
					let history = player.getAllHistory('lose');
					return history.length && history.length % 2 == 0;
				},
				async content(event, trigger, player) {
					const { cards } = await player.draw().forResult();
					player.addGaintag(cards, 'xjzh_poe_sangzhong');
				},
			},
			xjzh_poe_suxing: {
				trigger: {
					global: ['damageCancelled', 'damageZero'],
				},
				forced: true,
				_priority: 10,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!game.hasNature(event)) return false;
					return event.source == player;
				},
				mod: {
					selectTarget(card, player, range) {
						if (get.natureList(card, player).length) {
							if (Array.isArray(range) && range[1] == -1) return;
							range[1]++;
						}
					},
					cardUsable(card, player, num) {
						let history = player.getHistory('useCard', (evt) => {
							return evt && evt.card.name == 'sha' && !get.natureList(evt.card, player).length;
						});
						if (!history.length) return true;
						if (get.natureList(card, player).length) return true;
						return num;
					},
				},
				async content(event, trigger, player) {
					let num = trigger.num == 0 ? 1 : trigger.num;
					trigger.player.damage(num, trigger.source, 'nocard')._triggered = null;
				},
				ai: {
					jueqing: true,
					effect: {
						player(card, player, target) {
							if (get.tag(card, 'damage')) return [1, -1];
						},
					},
				},
			},
			xjzh_poe_bilei: {
				trigger: {
					player: 'changeHujiaAfter',
				},
				forced: true,
				_priority: 10,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				initHujia(player) {
					player.changeHujia(20);
					player.update();
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				init(player) {
					lib.skill.xjzh_poe_bilei.initHujia(player);
				},
				onremove(player, skill) {
					if (player.hujia > 0) player.changeHujia(-player.hujia);
				},
				filter(event, player) {
					return player.hujia <= 0;
				},
				async content(event, trigger, player) {
					await player.damage(player.maxHp * 3, 'nocard', 'notrigger', 'nosource');
					if (player.isDead()) return;
					await lib.skill.xjzh_poe_bilei.initHujia(player);
					let num = player.getAllHistory('damage').length,
						natures = ['fire', 'thunder', 'kami', 'ice', 'stab', 'poison'];
					while (num > 0) {
						let nature = natures.randomGet();
						const { targets } = await player
							.chooseTarget(`〖壁垒〗:对一名其他角色造成至多${num}点${get.translation(nature)}属性伤害`, true, lib.filter.notMe)
							.set('ai', (target) => {
								let trigger = _status.event.getTrigger();
								return get.damageEffect(target, player, player, nature);
							})
							.set('nature', nature)
							.forResult();

						if (targets) {
							let numbers = [];
							for (var i = 1; i <= num; i++) {
								numbers.push([i, i.toString()]);
							}
							let dialog = [`〖壁垒〗:选择对${get.translation(targets[0])}造成伤害的点数`, [numbers, 'tdnodes']];
							const { links } = await player.chooseButton(dialog).forResult();
							if (links) {
								let dameageNum = links[0];
								targets[0].damage(dameageNum, nature, player, 'nocard', 'notrigger');
								num -= dameageNum;
							} else num--;
						} else break;
					}
				},
			},
			xjzh_poe_qinhe: {
				enable: 'phaseUse',
				usable: 1,
				poelose: true,
				nogainsSkill: true,
				charlotte: true,
				xjzh_xinghunSkill: true,
				filterTarget(card, player, target) {
					return target.countCards('h');
				},
				selectTarget: 1,
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					let target = event.targets[0],
						cards = target.getCards('h');
					let cardsList = cards.filter((card) => ['heart', 'spade'].includes(card.suit));
					while (cardsList.length) {
						let card = cardsList.shift(),
							suits = card.suit;
						player.gain(card, target, 'giveAuto')._triggered = null;
						suits == 'heart' ? target.useCard({ name: 'tao' }, target, false) : target.useCard({ name: 'jiu' }, target, false);
					}
				},
				ai: {
					order: 8,
					result: {
						player: 1,
						target(player, target) {
							if (!target) return;
							let hs = target.countCards('h'),
								hp = target.getDamagedHp(),
								att = get.attitude(player, target);
							if (att > 0) return hs - hp;
							return hp - hs;
						},
					},
				},
			},
			xjzh_wzry_kongou: {
				trigger: {
					source: 'damageAfter',
					player: 'useCardToPlayered',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					let name = event.name;
					if (!get.is.playerNames(player, 'xjzh_wzry_yuange')) return false;
					if (!player.isUnderControl(true)) return false;
					if (name == 'damage') return event.player != player;
					return true;
				},
				forced: true,
				_priority: 5,
				lastDo: true,
				charlotte: true,
				superCharlotte: true,
				persevereSkill: true,
				mark: true,
				marktext: '偶',
				intro: {
					name: '碎片背包',
					mark(dialog, storage, player) {
						let list = [],
							config = game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou');
						if (!config || config.size == 0) return '没有可用的武将碎片!';
						if (player.isUnderControl(true)) {
							for (let [key, value] of config) {
								dialog.addSmall([[key], 'character'], false);
								dialog.addText(`${get.translation(key)}:${value}`);
							}
						} else {
							dialog.addText('共有' + get.cnNumber(config.size) + '张武将牌');
						}
					},
					markcount(storage, player) {
						let list = [],
							config = game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou');
						if (!config) return '';
						return config.size;
					},
				},
				init(player, skill) {
					if (!game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou')) {
						let config = new Map();
						game.saveExtensionConfig('仙家之魂', 'xjzh_wzry_kongou', config);
					}
				},
				async content(event, trigger, player) {
					let targets = trigger.targets || trigger.player,
						config = game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou'),
						name;
					if (Array.isArray(targets)) {
						for (let target of targets) {
							if (target == player) continue;
							let name = get.nameList(target);
							name.forEach((item) => {
								let currentValue = config.get(item) || 0;
								config.set(item, currentValue + 5);
							});
						}
					} else {
						let name = get.nameList(targets);
						name.forEach((item) => {
							let currentValue = config.get(item) || 0;
							config.set(item, currentValue + 5);
						});
					}
					game.saveExtensionConfig('仙家之魂', 'xjzh_wzry_kongou', config);
				},
			},
			xjzh_wzry_miying: {
				enable: 'phaseUse',
				audio: 'ext:仙家之魂/audio/skill:2',
				mark: true,
				marktext: '影',
				intro: {
					name: '秘影',
					mark(dialog, storage, player) {
						let list = [],
							config = game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou');
						if (!config || config.size == 0) return '没有可用的武将碎片!';
						for (let [key, value] of config) {
							if (value >= 50) list.push(key);
						}
						if (player.isUnderControl(true)) {
							dialog.addSmall([list, 'character'], false);
						} else {
							dialog.addText('共有' + get.cnNumber(list.length) + '张武将牌');
						}
					},
					markcount(storage, player) {
						let list = [],
							config = game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou');
						if (!config) return '';
						for (let [key, value] of config) {
							if (value >= 50) list.push(key);
						}
						return list.length;
					},
				},
				filter(event, player) {
					let list = [],
						config = game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou');
					if (!config) return false;
					for (let [key, value] of config) {
						if (value >= 50) list.push(key);
					}
					return list.length;
				},
				async content(event, trigger, player) {
					let list = [],
						config = game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou');
					for (let [key, value] of config) {
						if (value >= 50) list.push(key);
					}
					const { links } = await player
						.chooseButton(true)
						.set('createDialog', ['〖秘影〗:请选择一张武将牌', [list, 'character']])
						.set('ai', (button) => {
							return get.rank(button.link, true);
						})
						.forResult();

					if (links) {
						let data = {
							maxHp: player.maxHp,
							hp: player.hp,
							names: 'xjzh_wzry_yuange',
							names2: links[0],
						};
						player.storage.xjzh_wzry_miying2 = data;
						player.reinit(
							player.name, //QQQ
							links[0],
							[player.hp, player.maxHp]
						);
						player.recoverTo(player.maxHp);
						player.drawTo(player.maxHp);
						game.claerRestraint(player);
						player.addSkill('xjzh_wzry_miying2');
						player.addSkill('xjzh_wzry_zhiyuan');
						let currentValue = config.get(links[0]) || 0;
						config.set(links[0], currentValue - 50);
						if (config.get(links[0]) <= 0) config.delete(links[0]);
						game.saveExtensionConfig('仙家之魂', 'xjzh_wzry_kongou', config);
					}
				},
				ai: {
					order: 8,
					result: {
						player(player, target, card) {
							let list = [],
								config = game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou');
							if (!config || config.size == 0) return 0;
							let num = 0;
							if (
								game
									.filterPlayer((target) => target != player)
									.forEach((target) => {
										let names = get.nameList(target);
										if (names.some((item) => config.has(item) && config.get(item) >= 50)) num++;
									})
							);
							if (get.xjzh_deEffect(player)) num += get.xjzh_deEffect2(player);
							return num - player.getHp(true);
						},
					},
				},
			},
			xjzh_wzry_miying2: {
				trigger: {
					player: 'dieBegin',
				},
				forced: true,
				_priority: 5,
				lastDo: true,
				charlotte: true,
				superCharlotte: true,
				persevereSkill: true,
				mark: true,
				marktext: '影',
				intro: {
					name: '秘影',
					mark(dialog, content, player) {
						if (player.isUnderControl(true)) {
							if (_status.gameStarted)
								dialog.add(
									ui.create.div('.menubutton.pointerdiv', '点击切换为本体', async function () {
										if (!this.disabled) {
											this.disabled = true;
											this.classList.add('disabled');
											this.style.opacity = 0.5;
											await lib.skill.xjzh_wzry_miying2.unCharacter(player);
										}
									})
								);
						}
					},
				},
				async unCharacter(player) {
					let storage = player.storage.xjzh_wzry_miying2;
					await player.reinit(storage.names2, storage.names, [storage.hp, storage.maxHp]);
					player.recover();
					player.directgain(get.cards(2));
					player.$draw();
					player.removeSkill('xjzh_wzry_miying2', true);
					delete player.storage.xjzh_wzry_miying2;
					game.claerRestraint(player);
					if (_status.imchoosing) {
						delete _status.event._buttonChoice;
						delete _status.event._cardChoice;
						delete _status.event._targetChoice;
						game.check();
					}
					player.update();
				},
				async content(event, trigger, player) {
					trigger.cancel(null, null, 'notrigger');
					await lib.skill.xjzh_wzry_miying2.unCharacter(player);
				},
			},
			xjzh_wzry_zhiyuan: {
				enable: 'phaseUse',
				usable: 1,
				mod: {
					ignoredHandcard(card, player) {
						if (card.hasGaintag('xjzh_wzry_zhiyuan')) return true;
					},
					globalFrom(from, to, distance) {
						if (get.is.playerNames(from, 'xjzh_wzry_yuange')) return distance - 1;
					},
					cardUsable(card, player, num) {
						if (card.name == 'sha' && !get.is.playerNames(player, 'xjzh_wzry_yuange')) return num + 1;
					},
				},
				filterTarget(card, player, target) {
					let list = [],
						config = game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou');
					for (let [key, value] of config) {
						if (value >= 50) list.push(key);
					}
					let names = get.nameList(target);
					return names.some((item) => config.has(item) && config.get(item) >= 50);
				},
				filter(event, player) {
					let list = [],
						config = game.getExtensionConfig('仙家之魂', 'xjzh_wzry_kongou');
					if (!config || config.size == 0) return false;
					if (
						game
							.filterPlayer((target) => target != player)
							.some((target) => {
								let names = get.nameList(target);
								if (names.some((item) => config.has(item) && config.get(item) >= 50)) return true;
							})
					)
						return true;
					return false;
				},
				async content(event, trigger, player) {
					let target = event.targets[0],
						listEquip = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
					while (listEquip.length) {
						let pos = listEquip.shift();
						if (player.hasEmptySlot(pos) && !target.hasEmptySlot(pos)) {
							let equip = game.createCard(target.getCards('e', (card) => get.subtype(card) == pos)[0]);
							if (equip) {
								player.equip(equip);
								player.$gain2(equip, false);
							}
						}
					}
					let cards = target.getCards('h').map((item) => game.createCard(item));
					player.directgain(cards, 'gain2', null, 'xjzh_wzry_zhiyuan');
				},
			},
			xjzh_wzry_huange: {
				trigger: {
					player: 'phaseBefore',
				},
				forced: true,
				mark: true,
				marktext: '歌',
				intro: {
					content(storage, player) {
						if (!storage) return;
						return `你的契约队友${get.translation(storage)}`;
					},
				},
				audio: 'ext:仙家之魂/audio/skill:6',
				mod: {
					maxHandcard(player, num) {
						if (player.storage.xjzh_wzry_huange) return num + 2;
						return num;
					},
				},
				global: 'xjzh_wzry_huange_mod',
				group: 'xjzh_wzry_huange_use',
				check: () => 1,
				prompt: '〖欢歌〗:选择一名角色成为你的契约队友',
				async content(event, trigger, player) {
					const { targets } = await player
						.chooseTarget('〖欢歌〗:请选择一名角色成为你的契约队友', lib.filter.notMe)
						.set('ai', (target) => {
							return get.attitude(player, target);
						})
						.forResult();

					if (targets) {
						player.storage.xjzh_wzry_huange = targets[0];
					}
				},
				subSkill: {
					use: {
						trigger: {
							global: ['loseAfter', 'gainAfter'],
						},
						forced: true,
						_priority: 1,
						audio: 'xjzh_wzry_huange',
						filter(event, player) {
							if (!player.storage.xjzh_wzry_huange) return false;
							let target = player.storage.xjzh_wzry_huange;
							let hs = player.countCards('h');
							let hs2 = target.countCards('h');
							if (hs2 < hs) return true;
							return false;
						},
						async content(event, trigger, player) {
							let target = player.storage.xjzh_wzry_huange;
							target.drawTo(player.countCards('h'));
						},
					},
					mod: {
						charlotte: true,
						superCharlotte: true,
						mod: {
							maxHandcard(player, num) {
								let target = game.findPlayer(function (current) {
									return get.is.playerNames(current, 'xjzh_wzry_duoliya') && current.storage.xjzh_wzry_huange && current.storage.xjzh_wzry_huange == player;
								});
								if (!target) return num;
								if (num >= target.getHandcardLimit()) return num;
								return target.getHandcardLimit();
							},
						},
					},
				},
			},
			xjzh_wzry_zhulang: {
				trigger: {
					player: 'drawAfter',
				},
				forced: true,
				_priority: 3,
				audio: 'ext:仙家之魂/audio/skill:5',
				filter(event, player) {
					if (event.getParent('xjzh_wzry_zhulang').name == 'xjzh_wzry_zhulang') return false;
					return player.storage.xjzh_wzry_huange && !event.numFixed;
				},
				async content(event, trigger, player) {
					const { cards } = await player.draw(trigger.num).forResult();
					if (player.storage.xjzh_wzry_huange) {
						let str = `【逐浪】:选择至多${trigger.num}张牌交给${get.translation(player.storage.xjzh_wzry_huange)}`;
						const { links } = await player
							.chooseCardButton(cards, [Math.ceil(trigger.num / 2), trigger.num], str, true)
							.set('ai', (button) => {
								return 8 - get.value(button.link);
							})
							.forResult();

						if (links) {
							let target = player.storage.xjzh_wzry_huange;
							target.gain(links, player, 'draw');
							player.recover();
							target.recover();
						}
					}
				},
			},
			xjzh_wzry_tiannai: {
				enable: 'phaseUse',
				limited: true,
				init(player) {
					game.playXH('xjzh_wzry_tiannaiaudio');
					player.storage.xjzh_wzry_tiannai = false;
				},
				audio: 'ext:仙家之魂/audio/skill:4',
				filter(event, player) {
					if (!player.storage.xjzh_wzry_huange) return false;
					return !player.storage.xjzh_wzry_tiannai;
				},
				content() {
					'step 0';
					player.awakenSkill('xjzh_wzry_tiannai');
					player.storage.xjzh_wzry_tiannai = true;
					('step 1');
					var target = player.storage.xjzh_wzry_huange;
					target.link(false);
					target.discard(target.getCards('j'));
					target.turnOver(false);
					player.xjzh_resetSkill();
					target.addSkill('xjzh_zengyi_poxiao');
					target.storage.xjzh_wzry_tiannaiaudio = true;
					('step 2');
					player.loseMaxHp();
					player.clearSkills();
				},
			},
			xjzh_wzry_xiaxing: {
				trigger: {
					source: 'damageAfter',
				},
				filter(event, player) {
					return player.countMark('xjzh_wzry_xiaxing') < 4 && !player.hasSkill('xjzh_wzry_xiaxing_off');
				},
				forced: true,
				charlotte: true,
				mod: {
					selectTarget(card, player, range) {
						let type = get.type(card),
							num = player.countMark('xjzh_wzry_xiaxing');
						if (Array.isArray(range) && range[1] == -1) return;
						if (['equip', 'delay'].includes(type)) return;
						if (game.players.length < 3) return;
						if (!player.hasSkill('xjzh_wzry_xiaxing_off')) range[1] += Math.min(num, game.players.length - 1);
						else range[1] += game.players.length - 1;
					},
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				superCharlotte: true,
				fixed: true,
				popup: false,
				marktext2: '剑',
				marktext: `<img style=width:20px src=extension/仙家之魂/image/icon/xjzh_wzry_xiaxing.png>`,
				intro: {
					content: '当前已有#道剑气',
				},
				async content(event, trigger, player) {
					player.addMark('xjzh_wzry_xiaxing', 1, false);
					game.log(player, '获得了一道剑气');
					if (player.countMark('xjzh_wzry_xiaxing') < 4) return;
					player.clearMark('xjzh_wzry_xiaxing', false);
					const evt = _status.event.getParent('phase');
					if (evt && evt.name) {
						evt.finish();
					}
					await player.addSkill('xjzh_wzry_xiaxing_off');
					player.phase('xjzh_wzry_xiaxing');
				},
				subSkill: { off: {} },
			},
			xjzh_wzry_jinjiu: {
				enable: 'phaseUse',
				audio: 'ext:仙家之魂/audio/skill:6',
				filter(event, player) {
					return game.hasPlayer((current) => player.inRange(current)) && !player.hasSkill('xjzh_wzry_jinjiu_off');
				},
				mod: {
					cardUsable(card, player, num) {
						if (!player.storage.xjzh_wzry_jinjiu) return num;
						let target = player.storage.xjzh_wzry_jinjiu,
							num2 = Math.abs(player.seatNum - target.seatNum);
						if (['sha', 'jiu'].includes(card.name)) return num + num2;
					},
				},
				filterTarget(card, player, target) {
					if (target == player) return false;
					return player.inRange(target);
				},
				content() {
					'step 0';
					player.storage.xjzh_wzry_jinjiu = target;
					player.popup(target);
					game.swapSeat(player, target);
					player.popup(target);
					if (!player.hasSkill('jiu')) {
						player.useCard({ name: 'jiu' }, player, false);
						game.playXH(['xjzh_wzry_jinjiu1', 'xjzh_wzry_jinjiu2'].randomGet());
					}
					var num = Math.abs(player.seatNum - target.seatNum);
					player.draw(num);
					('step 1');
					player.addTempSkill('xjzh_wzry_jinjiu_off');
					('step 2');
					var num = Math.abs(player.seatNum - target.seatNum);
					var evt = event.getParent('phase');
					if (evt && evt.getParent) {
						var next = game.createEvent('xjzh_wzry_jinjiu_delete', false, evt.parent);
						next.player = player;
						next.target = target;
						next.num = num;
						next.setContent(function () {
							game.swapSeat(player, target);
							player.popup(target);
							if (!player.hasSkill('jiu')) {
								player.useCard({ name: 'jiu' }, player, false);
								game.playXH(['xjzh_wzry_jinjiu1', 'xjzh_wzry_jinjiu2'].randomGet());
							}
							player.draw(num);
							delete player.storage.xjzh_wzry_jinjiu;
						});
					}
				},
				subSkill: { off: {} },
			},
			xjzh_wzry_jiange: {
				forced: true,
				charlotte: true,
				superCharlotte: true,
				fixed: true,
				audio: 'ext:仙家之魂/audio/skill:6',
				filter(event, player) {
					if (!player.hasSkill('xjzh_wzry_xiaxing_off')) return false;
					if (!player.countCards('h')) return false;
					return true;
				},
				enable: 'phaseUse',
				usable: 5,
				group: 'xjzh_wzry_jiange_remove',
				content() {
					'step 0';
					var list = [];
					event.cards = player.getCards('h');
					if (Array.isArray(event.cards))
						for (var i of event.cards) {
							if (!list.includes(get.type(i))) list.add(get.type(i));
						}
					var dialog = ui.create.dialog('〖剑歌〗:请选择一种类型的牌弃置之', 'hidden', [event.cards, 'vcard']);
					player
						.chooseControl(list, 'cancel2')
						.set('ai', function () {
							return list.randomGet();
						})
						.set('dialog', dialog);
					('step 1');
					if (result.control != 'cancel2') {
						var list = [];
						if (Array.isArray(event.cards))
							for (var i of event.cards) {
								if (get.type(i) == result.control) list.push(i);
							}
						player.discard(list);
						player.draw(list.length);
					} else {
						event.finish();
					}
					('step 2');
					if (result && result.length) {
						var cards = result.slice(0);
						var num = 0;
						if (cards.length == 1) return;
						for (var i = 0; i < cards.length - 1; i++) {
							var card = i;
							var card2 = cards[i + 1];
							if (card.number == card2.number || card.suit == card2.suit || get.type(card) == get.type(card2)) num++;
						}
						if (num == cards.length - 1) {
							player.draw(cards.length);
							event.redo();
						}
					}
				},
				subSkill: {
					remove: {
						trigger: {
							player: 'phaseAfter',
						},
						forced: true,
						_priority: -10,
						lastDo: true,
						filter(event, player) {
							return player.hasSkill('xjzh_wzry_xiaxing_off');
						},
						content() {
							player.removeSkill('xjzh_wzry_xiaxing_off', true);
						},
					},
				},
			},
			xjzh_wzry_xingchen: {
				trigger: {
					player: ['logSkillBegin', 'useSkillBegin'],
				},
				silent: true,
				filter(event, player) {
					var info = get.info(event.skill);
					if (!lib.translate[event.skill]) return false;
					if (!lib.translate[event.skill + '_info']) return false;
					if (lib.skill.global.includes(event.skill)) return false;
					if (info && (info.limited || info.juexingji || info.dutySkill || info.equipSkill || info.sub || info.unique)) return false;
					if (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg)) return false;
					return true;
				},
				mark: true,
				marktext: '星',
				intro: {
					name: '星辰之力',
					content: 'mark',
				},
				audio: 'ext:仙家之魂/audio/skill:3',
				init(player) {
					game.playXH('xjzh_wzry_yaoStart');
				},
				group: ['xjzh_wzry_xingchen_damage'],
				async content(event, trigger, player) {
					await player.addMark('xjzh_wzry_xingchen', 1, false);
					game.log(player, '因', '#g〖' + get.translation(trigger.skill) + '〗', '获得了一个星辰之力');
					if (player.countMark('xjzh_wzry_xingchen') >= 3) {
						player.clearMark('xjzh_wzry_xingchen');
						player.drawTo(4);
						player.chooseUseTarget({ name: 'wanjian' });
					}
				},
				subSkill: {
					off: {},
					damage: {
						trigger: {
							player: 'damageBegin',
						},
						forced: true,
						audio: 'xjzh_wzry_xingchen',
						filter(event, player) {
							return !player.hasSkill('xjzh_wzry_xingchen_off');
						},
						async content(event, trigger, player) {
							event._args = [trigger.num, trigger.nature, trigger.cards, trigger.card];
							if (trigger.source) event._args.push(trigger.source);
							else event._args.push('nosource');
							window.xjzh_wzry_xingchen = setTimeout(function () {
								player.addTempSkill('xjzh_wzry_xingchen_off', 'damageAfter');
								game.playXH('xjzh_wzry_xingchenDamage');
								player.damage.apply(player, event._args.slice(0));
							}, 15000);
							game.log(player, '受到', trigger.source ? '来自于' + get.translation(trigger.source) + '的' : '', trigger.num, '点伤害转为星削将于15s后结算');
							trigger.changeToZero();
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (get.tag(card, 'damage')) return 0.7;
								},
							},
						},
					},
				},
			},
			xjzh_wzry_liekong: {
				enable: 'phaseUse',
				usable: 1,
				filterCard(card, player, target) {
					var suit = card.suit;
					if (Array.isArray(ui.selected.cards))
						for (var i of ui.selected.cards) {
							if (i.suit == suit) return false;
						}
					return true;
				},
				selectCard: [1, 4],
				position: 'he',
				complexCard: true,
				filterTarget: lib.filter.notMe,
				filter(event, player) {
					if (player.countCards('he')) return true;
					return false;
				},
				check: (card) => 6 - get.value(card),
				prompt(event, player) {
					return lib.translate.xjzh_wzry_liekong_info;
				},
				audio: 'ext:仙家之魂/audio/skill:3',
				async content(event, trigger, player) {
					const [bool, cards] = await event.targets[0]
						.chooseToDiscard('h', [1, event.cards.length], (card) => {
							let suits = new Array();
							event.cards.slice(0).forEach((card) => {
								suits.push(card.suit);
							});
							return suits.includes(card.suit);
						})
						.set('ai', (card) => {
							return 6 - get.value(card);
						})
						.forResult('bool', 'cards');
					let num = 0;
					if (bool) {
						num = event.cards.length - cards.length;
					} else {
						num = event.cards.length;
					}
					while (num > 0 && event.targets[0].isAlive()) {
						game.playXH(['xjzh_wzry_liekong1', 'xjzh_wzry_liekong2', 'xjzh_wzry_liekong3'].randomGet());
						player.useCard({ name: 'sha' }, event.targets[0], false).set('addCount', false);
						num -= 1;
					}
				},
				ai: {
					order: 8,
					result: {
						player(player, target, card) {
							if (!player) return;
							let num = 0;
							for (var i of game.players) {
								if (i.isOut()) continue;
								if (i == player) continue;
								if (get.attitude(i, player) < 0) num++;
							}
							return num;
						},
						target: -1,
					},
				},
			},
			xjzh_wzry_guichen: {
				enable: 'phaseUse',
				trigger: {
					player: 'dying',
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:3',
				getinfo(player) {
					var js = player.getCards('j');
					var js2 = [];
					for (var k = 0; k < js.length; k++) {
						var name = js[k].viewAs || js[k].name;
						js2.push(name);
					}
					var isDisabled = [];
					for (var j = 1; j < 7; j++) {
						isDisabled.push(player.isDisabled(j));
					}
					var storage = {
						player: player,
						hs: player.getCards('h'),
						es: player.getCards('e'),
						isDisabled: isDisabled,
						hp: player.hp,
						maxHp: player.maxHp,
						_disableJudge: player.storage._disableJudge,
						isTurnedOver: player.isTurnedOver(),
						isLinked: player.isLinked(),
						js: js,
						js2: js2,
					};
					return storage;
				},
				filter(event, player) {
					if (event.getParent(2).name == 'dying' && event.player == player) return true;
					if (player.storage.xjzh_wzry_guichen && player.storage.xjzh_wzry_guichen.length) return true;
					return false;
				},
				group: ['xjzh_wzry_guichen2'],
				content() {
					'step 0';
					event.storage = player.storage.xjzh_wzry_guichen;
					event.doing = event.storage.shift();
					('step 1');
					var hp = event.doing.hp;
					player.hp = hp;
					var hs = player.getCards('he');
					if (hs.length) player.lose(hs)._triggered = null;
					('step 2');
					var hs = event.doing.hs;
					var hs2 = [];
					for (var i = 0; i < hs.length; i++) {
						var card = get.cardPile(function (cardx) {
							return cardx == hs[i];
						});
						if (!card) {
							card = game.createCard(hs[i]);
						}
						hs2.push(card);
					}
					if (hs2.length) player.directgain(hs2);
					('step 3');
					var isDisabled = event.doing.isDisabled;
					for (var i = 0; i < isDisabled.length; i++) {
						if (isDisabled[i] == false && player.isDisabled(i + 1)) player.enableEquip(i + 1)._triggered = null;
						if (isDisabled[i] == true && !player.isDisabled(i + 1)) player.disableEquip(i + 1)._triggered = null;
					}
					('step 4');
					var es = event.doing.es;
					var es2 = [];
					for (var i = 0; i < es.length; i++) {
						var card = get.cardPile(function (cardx) {
							return cardx == es[i];
						});
						if (!card) {
							card = game.createCard(es[i]);
						}
						es2.push(card);
					}
					if (es2.length) {
						for (var i of es2) {
							player.equip(i);
						}
					}
					('step 5');
					if (player.getStat().skill.xjzh_wzry_liekong > 0) player.getStat().skill.xjzh_wzry_liekong = 0;
					if (player.getStat().card.sha > 0) player.getStat().card.sha = 0;
					if (player.getStat().card.jiu > 0) player.getStat().card.jiu = 0;
					game.updateRoundNumber();
					('step 6');
					if (window.xjzh_wzry_xingchen) clearTimeout(window.xjzh_wzry_xingchen);
					('step 7');
					player.storage.xjzh_wzry_guichen = false;
					player.storage.xjzh_wzry_guichen2 = false;
					('step 8');
					if ((event.triggername = 'dying')) {
						if (Array.isArray(lib.skill.xjzh_wzry_guichen.trigger.player) == false) {
							lib.skill.xjzh_wzry_guichen.trigger.player = [];
						}
					}
				},
				ai: {
					order: 2,
					result: {
						player(player, target, card) {
							if (!player.storage.xjzh_wzry_guichen || !player.storage.xjzh_wzry_guichen.length) return;
							var num = 1;
							var cards = player.getCards('h');
							for (var i of cards) {
								if (!player.hasUseTarget(i)) num++;
							}
							return -cards.length + num;
						},
					},
				},
			},
			xjzh_wzry_guichen2: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				popup: false,
				filter(event, player) {
					return !player.storage.xjzh_wzry_guichen2;
				},
				content() {
					player.storage.xjzh_wzry_guichen2 = true;
					var storage = [];
					storage.push(lib.skill.xjzh_wzry_guichen.getinfo(player));
					player.storage.xjzh_wzry_guichen = storage;
				},
			},
			xjzh_wzry_jianzhong: {
				trigger: {
					source: ['damageAfter', 'damageBegin1'],
				},
				forced: true,
				_priority: 6,
				marktext2: '剑',
				marktext: `<img style=width:20px src=extension/仙家之魂/image/icon/xjzh_wzry_jianzhong.png>`,
				intro: {
					mark(dialog, content, player) {
						let cards = player.getExpansions('xjzh_wzry_jianzhong');
						if (!cards.length) return;
						let str = `增伤:${[...new Set(player.getExpansions('xjzh_wzry_jianzhong').map((card) => get.type(card, 'trick', player)))].length}`;
						dialog.add(str);
						dialog.add(cards);
					},
					markcount: 'expansion',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = 10;
				},
				getIndex(event, player, triggername) {
					if (triggername == 'damageBegin1') return 1;
					return Math.min(event.num, 9) || 1;
				},
				filter(event, player, name) {
					if (name == 'damageBegin1') return !event.numFixed;
					return player.getExpansions('xjzh_wzry_jianzhong').length < player.storage.xjzh_wzry_jianzhong;
				},
				async content(event, trigger, player) {
					if (event.triggername == 'damageBegin1') {
						let cards = player.getExpansions('xjzh_wzry_jianzhong');
						let suits = [...new Set(cards.map((card) => card.suit))];
						trigger.num += suits.length;
					} else player.addToExpansion(get.cards(), 'gain2').gaintag.add('xjzh_wzry_jianzhong');
				},
				ai: {
					damageBonus: true,
					skillTagFilter(player, tag, arg) {
						if (tag == 'damageBonus') return [...new Set(player.getExpansions('xjzh_wzry_jianzhong').map((card) => get.type(card, 'trick', player)))].length;
					},
				},
			},
			xjzh_wzry_cuijian: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:4',
				filter(event, player) {
					if (!['basic', 'trick'].includes(get.type(event.card))) return false;
					if (player.getEquips(1).length) return get.type(event.card) == 'basic';
					return get.type(event.card) == 'trick';
				},
				async content(event, trigger, player) {
					trigger.effectCount++;
					game.log(trigger.card, '额外结算1次');
				},
			},
			xjzh_wzry_jianlai: {
				trigger: {
					player: 'addToExpansionAfter',
				},
				audio: 'ext:仙家之魂/audio/skill:4',
				filter(event, player) {
					return player.getExpansions('xjzh_wzry_jianzhong').length >= player.storage.xjzh_wzry_jianzhong;
				},
				forced: true,
				mod: {
					cardUsable(card, player, num) {
						if (!card.cards) return;
						for (var i of card.cards) {
							if (i.hasGaintag('xjzh_wzry_jianzhong')) return Infinity;
						}
					},
					targetInRange(card, player, target) {
						if (!card.cards) return;
						for (var i of card.cards) {
							if (i.hasGaintag('xjzh_wzry_jianzhong')) return true;
						}
					},
				},
				marktext2: '剑来',
				marktext: `<img style=width:20px src=extension/仙家之魂/image/icon/xjzh_wzry_jianlai.png>`,
				async content(event, trigger, player) {
					let cards = player.getExpansions('xjzh_wzry_jianzhong');
					player.directgain(cards, 'gain2', null, 'xjzh_wzry_jianzhong');
					player.unmarkSkill('xjzh_wzry_jianzhong');
					player.storage.xjzh_wzry_jianzhong += 10;
				},
				ai: {
					combo: 'xjzh_wzry_jianzhong',
				},
			},
			xjzh_wzry_bieyue: {
				trigger: {
					player: ['turnOverBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseDiscardBefore'],
				},
				preHidden: true,
				notemp: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				init(player) {
					player.addMark('xjzh_wzry_bieyue', 4, false);
					player.markSkill('xjzh_wzry_bieyue');
					player.update();
					setInterval(function () {
						if (player.countMark('xjzh_wzry_bieyue') < 4) {
							game.playXH('xjzh_wzry_bieyue3');
							player.addMark('xjzh_wzry_bieyue', 1, false);
							player.markSkill('xjzh_wzry_bieyue');
						}
					}, 50000);
				},
				marktext: '月',
				intro: {
					name: '别月',
				},
				filter(event, player) {
					if (!player.hasMark('xjzh_wzry_bieyue')) return false;
					if (event.name == 'phaseJudge') {
						return player.countCards('j');
					}
					if (event.name == 'phaseDiscard') {
						return player.needsToDiscard();
					}
					if (event.name == 'phaseDraw') {
						return !player.skipList.includes('phaseDraw');
					}
					if (event.name == 'turnOver') {
						if (player.isTurnedOver()) return false;
						return true;
					}
					return false;
				},
				prompt(event, player) {
					var evt = event.name;
					var str = '〖别月〗:';
					if (evt == 'phaseJudge') str += '是否移除一个<月>跳过判定阶段？';
					if (evt == 'phaseDiscard') str += '是否移除一个<月>跳过弃牌阶段？';
					if (evt == 'phaseDraw') str += '是否移除一个<月>额外摸一张牌？';
					if (evt == 'turnOver') str += '是否移除一个<月>跳过翻面？';
					return str;
				},
				check(event, player) {
					var evt = event.name;
					if (evt == 'phaseJudge') {
						var cards = player.getCards('j');
						var num = 0;
						for (var i of cards) {
							if (get.tag(i, 'damage') || get.tag(i, 'skip')) num++;
						}
						return num;
					} else if (evt == 'phaseDiscard') {
						var num2 = 0;
						if (player.needsToDiscard()) {
							for (var i of player.getCards('h')) {
								num2 += get.value(i) / 3;
							}
						}
						return num2;
					} else if (evt == 'phaseDraw') {
						if (player.countMark('xjzh_wzry_bieyue') > 1) return 1;
					} else if (evt == 'turnOver') {
						if (player.isTurnedOver()) return 1;
					}
					return 0.5;
				},
				content() {
					player.removeMark('xjzh_wzry_bieyue', 1, false);
					if (trigger.name == 'phaseDraw') {
						trigger.num++;
						game.log(player, '移除了一个<月>额外摸了', '#y1', '张牌');
						event.finish();
						return;
					} else if (trigger.name == 'turnOver') {
						if (player.isTurnedOver()) {
							player.turnOver(false);
						} else {
							trigger.cancel();
						}
						player.turnOver(false);
						game.log(player, '移除了一个<月>解除了', '#y翻面');
						event.finish();
						return;
					}
					trigger.cancel();
					var str = '';
					if (trigger.name == 'phaseJudge') str = '#y判定阶段';
					str = '#y弃牌阶段';
					game.log(player, '移除了一个<月>跳过了', str);
				},
				ai: {
					threaten: 3,
					expose: 0.2,
					notemp: true,
					result: {
						player(player) {
							if (player.storage.xjzh_wzry_huanhai == true) {
								if (player.countMark('xjzh_wzry_bieyue') == 1) {
									var num = game.filterPlayer(function (current) {
										return current.isOut() && player.isFriendsOf(current);
									});
									var num2 = game.countPlayer(function (current) {
										return current.isOut() && player.isEnemiesOf(current);
									});
									if (num <= num2 || player.hujia >= 2) return -10;
								}
								return lib.skill.xjzh_wzry_bieyue.check.apply(this, arguments);
							}
						},
					},
				},
			},
			xjzh_wzry_shunhua: {
				enable: 'phaseUse',
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (
						!game.hasPlayer(function (current) {
							return !current.hasMark('xjzh_wzry_bieyue') && current != player;
						})
					)
						return false;
					return player.countMark('xjzh_wzry_bieyue') > 0;
				},
				prompt(event, player) {
					var player = _status.event.player;
					var num = player.countMark('xjzh_wzry_bieyue');
					return '〖瞬华〗:选择至多' + get.translation(num) + '个目标令其各获得一个<月>标记';
				},
				filterTarget(card, player, target) {
					return target != player && !target.hasMark('xjzh_wzry_bieyue');
				},
				selectTarget() {
					var player = _status.event.player;
					return [1, player.countMark('xjzh_wzry_bieyue')];
				},
				content() {
					target.addMark('xjzh_wzry_bieyue', 1);
					player.removeMark('xjzh_wzry_bieyue', 1, false);
				},
				ai: {
					order: 8,
					result: {
						player: 1,
						target: -1,
					},
				},
			},
			xjzh_wzry_liuguang: {
				mod: {
					targetInRange(card, player, target) {
						if (card.name == 'sha') {
							if (target.hasMark('xjzh_wzry_bieyue') && target != player) return true;
						}
					},
				},
				trigger: {
					player: 'useCardToPlayer',
				},
				forced: true,
				_priority: -2,
				popup: false,
				notemp: true,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!event.targets || !event.targets.length) return false;
					if (event.card.name != 'sha') return false;
					var info = get.info(event.card);
					if (info.allowMultiple == false) return false;
					if (info.multitarget) return false;
					return true;
				},
				content() {
					'step 0';
					player.addTempSkill('xjzh_wzry_liuguang_off', 'shaAfter');
					var targets = game.filterPlayer(function (current) {
						return current.hasMark('xjzh_wzry_bieyue') && current != player;
					});
					if (targets.length <= 0) {
						event.finish();
						return;
					}
					event.targets = targets.slice(0);
					('step 1');
					if (event.targets.length) {
						event.targetx = event.targets.shift();
						event.targetx.chooseCard('he', 1).set('ai', function (card) {
							var att = get.attitude(player, event.targetx);
							if (event.targetx.countCards('h', 'tao') || event.targetx.countCards('h', 'shan')) return 0;
							if (att > 0) {
								return 8 - get.value(card);
							}
							return 4 - get.value(card);
						});
					}
					('step 2');
					if (result.cards?.length) {
						player.gain(result.cards[0], event.targetx, 'gain2');
					} else {
						event.targetx.say('否');
						trigger.targets.push(event.targetx);
					}
					('step 3');
					event.targetx.removeMark('xjzh_wzry_bieyue', 1);
					if (event.targets.length) {
						event.goto(1);
					} else {
						event.finish();
						return;
					}
				},
				subSkill: {
					off: {},
				},
				ai: {
					unequip: true,
					notemp: true,
					skillTagFilter(player, tag, arg) {
						if (arg && !arg.target.hasMark('xjzh_wzry_bieyue')) return false;
					}, //QQQ
				},
				subSkill: { off: {} },
			},
			xjzh_wzry_liuguang2: {
				mod: {
					globalTo(from, to, distance) {
						return distance + 1;
					},
					targetInRange(card, player, target) {
						return true;
					},
					cardUsable(card, player, num) {
						if (card.name == 'sha' || card.name == 'jiu') return num * 2;
					},
				},
				trigger: {
					player: 'useCard',
				},
				forced: true,
				_priority: -2,
				notemp: true,
				audio: 'xjzh_wzry_liuguang',
				filter(event, player) {
					if (!event.targets || !event.targets.length) return false;
					if (event.card.name != 'sha') return false;
					let info = get.info(event.cards[0]);
					if (info.allowMultiple == false) return false;
					if (info.multitarget) return false;
					return true;
				},
				async content(event, trigger, player) {
					player.addTempSkill('xjzh_wzry_liuguang2_off', 'shaAfter');
					const { cards } = await trigger.targets[0]
						.chooseCard('he', 1)
						.set('ai', (card) => {
							let player = get.player();
							let target = trigger.targets[0];
							let att = get.attitude(player, target);
							if (target.countCards('h', 'tao') || target.countCards('h', 'shan')) return 0;
							if (att > 0) return 8 - get.value(card);
							return 4 - get.value(card);
						})
						.forResult();

					if (cards) {
						player.gain(cards[0], trigger.targets[0], 'gain2');
					} else {
						trigger.targets[0].say('否');
						trigger.effectCount++;
						game.log(trigger.card, '额外结算1次');
					}
				},
				subSkill: { off: {} },
				ai: {
					unequip: true,
					notemp: true,
				},
			},
			xjzh_wzry_huanhai: {
				enable: 'phaseUse',
				limited: true,
				filterTarget(card, player, target) {
					return target != player;
				},
				init(player) {
					player.storage.xjzh_wzry_huanhai = false;
					player.storage.xjzh_wzry_huanhai_remove = [];
				},
				filter(event, player) {
					if (!player.hasMark('xjzh_wzry_bieyue')) return false;
					if (game.roundNumber <= 1 && player.hp > 1) return false;
					return !player.storage.xjzh_wzry_huanhai;
				},
				content() {
					'step 0';
					player.awakenSkill('xjzh_wzry_huanhai');
					player.storage.xjzh_wzry_huanhai = true;
					var players = game.filterPlayer(function (current) {
						return current.hasMark('xjzh_wzry_bieyue') && current != player;
					});
					for (var i of players) {
						i.clearMark('xjzh_wzry_bieyue', false);
					}
					if (player.countMark('xjzh_wzry_bieyue') < 4) player.addMark('xjzh_wzry_bieyue', 4 - player.countMark('xjzh_wzry_bieyue'));
					('step 1');
					var players = game.filterPlayer(function (current) {
						return current != target && current != player;
					});
					var list = [];
					for (var i of players) {
						list.push(i);
						i.classList.add('out');
						game.log(i, '因', '#y〖幻海〗', '暂时离开游戏');
					}
					player.storage.xjzh_wzry_huanhai_remove = list.slice(0);
					('step 2');
					player.addSkill('xjzh_tongyong_baiban');
					player.addSkill('xjzh_wzry_liuguang2');
					player.addSkill('xjzh_wzry_huanhai_hujia');
					player.addSkill('xjzh_wzry_huanhai_remove');
					var skills = ['xjzh_wzry_shunhua', 'xjzh_wzry_liuguang'];
					player.storage.xjzh_tongyong_baiban.addArray(skills);
					('step 3');
					player.changeHujia(player.hp);
				},
				ai: {
					order: 3,
					result: {
						player(player, target) {
							var att = get.attitude(target, player);
							if (att <= 0) {
								if (player.hp > target.hp) return 2;
								return 1;
							}
							return 0;
						},
						target(player, target) {
							var att = get.attitude(target, player);
							if (att <= 0) {
								if (player.hp > target.hp) return -2;
								return -1;
							}
							return 0;
						},
					},
				},
				subSkill: {
					hujia: {
						trigger: {
							source: 'damageAfter',
						},
						forced: true,
						_priority: -3,
						content() {
							player.changeHujia(trigger.num);
						},
					},
					remove: {
						trigger: {
							global: 'dieAfter',
							player: 'xjzh_wzry_bieyueAfter',
						},
						forced: true,
						_priority: -3,
						forceDie: true,
						filter(event, player) {
							if (event.name == 'xjzh_wzry_bieyue' && player.hasMark('xjzh_wzry_bieyue')) return false;
							if (event.name == 'die' && event.player.isAlive()) return false;
							return player.storage.xjzh_wzry_huanhai && player.storage.xjzh_wzry_huanhai_remove;
						}, //QQQ
						content() {
							'step 0';
							var players = player.storage.xjzh_wzry_huanhai_remove;
							for (var i of players) {
								i.classList.remove('out');
								game.log(i, '回到了游戏');
							}
							game.log(players);
							delete player.storage.xjzh_wzry_huanhai_remove;
							('step 1');
							if (trigger.player != player) {
								var num = player.hujia;
								player.addMark('xjzh_wzry_bieyue', num, false);
								player.changeHujia(-num);
							}
							('step 2');
							player.storage.xjzh_tongyong_baiban = [];
							player.removeSkill('xjzh_tongyong_baiban');
							player.removeSkill('xjzh_wzry_liuguang2');
							player.removeSkill('xjzh_wzry_huanhai_hujia');
							player.removeSkill('xjzh_wzry_huanhai_remove');
						},
					},
				},
			},
			xjzh_wzry_xunshou: {
				trigger: {
					source: 'damageAfter',
				},
				forced: true,
				audio: 'ext:仙家之魂/audio/skill:3',
				filter(event, player) {
					if (event.player == player) return false;
					return event.player.countCards('he');
				},
				marktext: '巡',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					let players = game.filterPlayer((current) => {
						return current.countExpansions(skill);
					});
					for (let target of players) {
						let cards = target.getExpansions(skill);
						target.loseToDiscardpile(cards);
					}
				},
				async content(event, trigger, player) {
					const { cards } = await trigger.player
						.chooseCard(get.prompt(event.name), 'he')
						.set('ai', (card) => {
							let att = get.attitude(player, trigger.player);
							if (att > 0) return 8 - get.value(card);
							return 4 - get.value(card);
						})
						.forResult();

					if (cards) {
						trigger.player.addToExpansion(cards, 'gain2', trigger.player).gaintag.add(event.name);
						player.draw(2);
					}
					if (trigger.player.countExpansions(event.name) >= 4) {
						trigger.player.damage(1, player, 'nocard');
						trigger.player.loseToDiscardpile(trigger.player.getExpansions(event.name));
						trigger.player.addTempSkills('baiban', 'damageAfter');
					}
				},
				ai: {
					expose: 0.3,
					threaten: 2,
				},
			},
			xjzh_wzry_konglie: {
				enable: 'phaseUse',
				audio: 'ext:仙家之魂/audio/skill:3',
				filter(event, player) {
					return game.hasPlayer((current) => {
						return current.countExpansions('xjzh_wzry_xunshou');
					});
				},
				filterTarget(card, player, target) {
					return target.countExpansions('xjzh_wzry_xunshou');
				},
				async content(event, trigger, player) {
					let target = event.targets[0],
						cards = target.getExpansions('xjzh_wzry_xunshou');
					const { links } = await player
						.chooseCardButton(get.prompt('xjzh_wzry_konglie'), cards, 1)
						.set('filterButton', (button) => {
							return player.hasUseTarget(button.link);
						})
						.set('ai', (button) => {
							if (player.hasUseTarget(button.link)) return player.getUseValue(button.link);
							return 0;
						})
						.forResult();

					if (links) player.chooseUseTarget(links[0], true);
				},
				ai: {
					order: 8,
					expose: 0.3,
					result: {
						target(player, target, card) {
							let cards = target.getExpansions('xjzh_wzry_xunshou');
							if (
								cards.some(
									(card) =>
										player.hasUseTarget(card) &&
										game.hasPlayer((current) => {
											if (get.effect(current, card, player, player) > 0 && get.useful(card, current) > 0) return true;
											return false;
										})
								)
							)
								return -1;
							return 1;
						},
					},
				},
			},
			xjzh_wzry_daofeng: {
				trigger: {
					player: 'phaseUseBefore',
				},
				forced: true,
				mark: true,
				marktext: '☯',
				zhuanhuanji(player, skill) {
					if (!player.storage[skill]) {
						player.storage[skill] = true;
						player.addTempSkill('xjzh_wzry_daofeng_yin', { player: 'phaseUseBefore' });
					} else {
						player.storage[skill] = false;
						player.addTempSkill('xjzh_wzry_daofeng_yang', { player: 'phaseUseBefore' });
					}
				},
				intro: {
					name: '刀锋',
					content(storage, player, skill) {
						if (player.storage[skill] == true) return '每个角色出牌阶段开始时,若场上有<巡>,你可以展示并从场上<巡>中弃置至多4张花色不一致的牌,对一名其他角色造成等量伤害.';
						return '当你受到伤害或体力流失时,若场上<巡>的数量不大于4,你防止之,你可以令一名角色将一张牌置于武将牌上称为<巡>,否则你摸两张牌';
					},
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				async content(event, trigger, player) {
					let list = get.xjzh_nearbyRole(player);
					for (let target of list) {
						player.gainPlayerCard(`〖刀锋〗:请选择一张${get.translation(target)}的牌`, target, 1, true).set('ai', (button) => {
							if (get.attitude(target, player) < 0) return 12 - get.value(button.link);
							return 4 - get.value(button.link);
						});
					}
					player.changeZhuanhuanji(event.name);
				},
				subSkill: {
					yin: {
						trigger: {
							global: 'phaseUseBegin',
						},
						audio: 'ext:仙家之魂/audio/skill:2',
						check: (event, player) => player.getFriends().length,
						prompt: '〖刀锋〗:弃置场上4张花色不一致的<巡>对一名角色造成等量伤害',
						filter(event, player) {
							let targets = game.filterPlayer((current) => current.countExpansions('xjzh_wzry_xunshou')),
								cards = [],
								suits = [];
							targets.forEach((current) => {
								cards.addArray(current.getExpansions('xjzh_wzry_xunshou'));
							});
							suits = cards.map((item) => item.suit).toUniqued();
							return suits.length >= 4;
						},
						async content(event, trigger, player) {
							let xunshouTargets = game.filterPlayer((current) => current.countExpansions('xjzh_wzry_xunshou'));
							let dialog = ui.create.dialog('hidden');
							for (let target of xunshouTargets) {
								dialog.add(`${get.translation(target)}武将牌上的<巡守>牌`);
								dialog.add([target.getExpansions('xjzh_wzry_xunshou'), 'vcard']);
							}
							const { links } = await player
								.chooseButton(dialog, 4, true)
								.set('filterButton', (button) => {
									return !ui.selected.buttons.some((card) => card.suit == button.link.suit);
								})
								.set('complexCard', true)
								.forResult();

							if (links) {
								const { targets } = await player
									.chooseTarget(`〖刀锋〗:对一名角色造成${links.length}点伤害`, lib.filter.notMe)
									.set('ai', (target) => {
										return -get.attitude(player, target);
									})
									.forResult();

								if (targets) {
									for (let target of xunshouTargets) {
										let cards = target.getExpansions('xjzh_wzry_xunshou'),
											discard = [];
										target.loseToDiscardpile(links.filter((card) => cards.includes(card)));
									}
									targets[0].damage(4, player, 'nocard');
								}
							}
						},
					},
					yang: {
						trigger: {
							player: ['damageBegin1', 'loseHpBegin'],
						},
						check: () => 1,
						forced: true,
						_priority: 5,
						filter(event, player) {
							let targets = game.filterPlayer((current) => current.countExpansions('xjzh_wzry_xunshou'));
							let cards = [];
							targets.forEach((item) => {
								cards.addArray(item.getExpansions('xjzh_wzry_xunshou'));
							});
							return cards.length < 4;
						},
						audio: 'ext:仙家之魂/audio/skill:2',
						prompt: '〖刀锋〗:是否防止即将受到的伤害/体力流失,令一名角色将一张牌置于武将牌上称为<巡>',
						async content(event, trigger, player) {
							trigger.changeToZero();
							const { targets } = await player
								.chooseTarget('〖刀锋〗:令一名角色将一张牌置于武将牌上称为<巡>', (card, player, target) => {
									if (!target.countCards('he')) return false;
									return target != player;
								})
								.set('ai', (target) => {
									return -get.attitude(player, target);
								})
								.forResult();

							if (targets) {
								let target = targets[0];
								const { cards } = await target
									.chooseCard(get.prompt(event.name), 'he')
									.set('ai', (card) => {
										let att = get.attitude(player, target);
										if (att > 0) return 8 - get.value(card);
										return 4 - get.value(card);
									})
									.forResult();

								if (cards) target.addToExpansion(cards, 'gain2', trigger.player).gaintag.add('xjzh_wzry_xunshou');
								else player.draw(2);
							}
						},
					},
				},
			},
			xjzh_xyj_tianhuo: {
				enable: 'phaseUse',
				init(player, skill) {
					player.addMark(skill, 3, false);
					player.update();
					game.playXH('xjzh_xyj_tianhuochuchang');
				},
				mark: true,
				marktext: '火',
				intro: {
					name: '天火',
					content: '本局游戏可发动#次',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				filterTarget(card, player, target) {
					return [player, player.next, player.previous].includes(target);
				},
				filterCard(card, player, target) {
					return card.suit == 'diamond';
				},
				selectCard() {
					let player = get.player(),
						cards = player.getCards('he', { suit: 'diamond' });
					return [1, Math.max(1, cards.length)];
				},
				position: 'he',
				lose: false,
				filter(event, player) {
					if (!player.countCards('he', { suit: 'diamond' })) return false;
					if (!player.hasMark('xjzh_xyj_tianhuo')) return false;
					return true;
				},
				mod: {
					cardUsable(card, player, num) {
						let history = player.getHistory('useCard', (evt) => evt.card && evt.card.name == 'xjzh_card_hunyuandan');
						if (history.length) return Infinity;
						return num;
					},
				},
				async content(event, trigger, player) {
					await player.removeMark('xjzh_xyj_tianhuo', 1, false);
					await event.targets[0].gain(event.cards, player, 'draw');
					let targets = game.filterPlayer((current) => current != player),
						thcards = event.cards.slice(0);
					targets.sortBySeat(player);
					if (event.targets[0] == player.previous) targets.reverse();
					targets.push(player);
					for (var i = 0; i < targets.length; i++) {
						if (targets[i] == player) break;
						let res = get.damageEffect(targets[i], player, targets[i], 'fire');
						const { cards } = await targets[i]
							.chooseCard(`〖天火〗:选择${get.translation(thcards.length + 1)}张♦️️牌交给${get.translation(targets[i + 1])},否则受到${get.translation(thcards.length)}点火焰伤害`, thcards.length + 1, { suit: 'diamond' })
							.set('ai', (card) => {
								if (_status.event.player.hasSkillTag('nofire')) return -1;
								if (_status.event.res >= 0) return 6 - get.value(card);
								if (get.type(card) != 'basic') {
									return 10 - get.value(card);
								}
								return 8 - get.value(card);
							})
							.set('res', res)
							.forResult();

						if (cards) {
							targets[i].line(targets[i + 1], 'fire');
							targets[i + 1].gain(cards, targets[i], 'draw');
							thcards = cards.slice(0);
						} else {
							targets[i].damage(player, thcards.length, 'nocard', 'fire');
							break;
						}
					}
				},
				ai: {
					order: 1,
					result: {
						player(player, target) {
							if (player.hasUnknown(2)) return 0;
							let num = 0,
								eff = 0,
								players = game.filterPlayer();
							for (let target of players) {
								if (get.damageEffect(target, player, target, 'fire') >= 0) {
									num = 0;
									continue;
								}
								let shao = false;
								num++;
								if (
									target.countCards('h', (card) => {
										if (card.suit != 'diamond') {
											return get.value(card) < 10;
										}
										return get.value(card) < 8;
									}) < num
								)
									shao = true;
								if (shao) {
									eff -= 4 * (get.realAttitude || get.attitude)(player, target);
									num = 0;
								} else eff -= (num * (get.realAttitude || get.attitude)(player, target)) / 4;
							}
							if (eff < 4) return 0;
							return eff;
						},
					},
				},
			},
			xjzh_xyj_dongcha: {
				trigger: {
					player: 'phaseDrawBegin',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				forced: true,
				_priority: 1,
				filter(event, player) {
					return !event.numFixed;
				},
				async content(event, trigger, player) {
					trigger.num += 2;
				},
				ai: {
					viewHandcard: true,
					skillTagFilter(player, tag, arg) {
						if (tag == 'viewHandcard') {
							if (player == arg) return false;
							return true;
						}
					},
				},
			},
			xjzh_xyj_ruyi: {
				trigger: {
					global: 'damageAfter',
				},
				forced: true,
				_priority: 2,
				audio: 'ext:仙家之魂/audio/skill:2',
				filter(event, player) {
					if (!game.hasNature(event, 'fire')) return false;
					if (event.parent.name == 'xjzh_xyj_tianhuo') return false;
					if (event.player != player) return event.source == player;
					return true;
				},
				mod: {
					ignoredHandcard(card, player) {
						if (!player.hasSkill('xjzh_xyj_ruyi')) return;
						if (!get.is.playerNames(player, 'xjzh_xyj_sunwukong')) return;
						let cards = ['xjzh_card_tianganghuo', 'xjzh_card_hunyuandan', 'xjzh_card_huoyundao', 'xjzh_card_dingshenzhou', 'xjzh_card_zhaoyaojing'];
						if (cards.includes(card.name)) return true;
					},
					canBeGained(card, player, target, name) {
						if (!player.hasSkill('xjzh_xyj_ruyi')) return;
						if (!get.is.playerNames(player, 'xjzh_xyj_sunwukong')) return;
						let cards = ['xjzh_card_tianganghuo', 'xjzh_card_hunyuandan', 'xjzh_card_huoyundao', 'xjzh_card_dingshenzhou', 'xjzh_card_zhaoyaojing'];
						if (cards.includes(card.name)) return false;
					},
					canBeDiscarded(card, player, target, name) {
						if (!player.hasSkill('xjzh_xyj_ruyi')) return;
						if (!get.is.playerNames(player, 'xjzh_xyj_sunwukong')) return;
						let cards = ['xjzh_card_tianganghuo', 'xjzh_card_hunyuandan', 'xjzh_card_huoyundao', 'xjzh_card_dingshenzhou', 'xjzh_card_zhaoyaojing'];
						if (cards.includes(card.name)) return false;
					},
					cardDiscardable(card, player, name) {
						if (!player.hasSkill('xjzh_xyj_ruyi')) return;
						if (!get.is.playerNames(player, 'xjzh_xyj_sunwukong')) return;
						let cards = ['xjzh_card_tianganghuo', 'xjzh_card_hunyuandan', 'xjzh_card_huoyundao', 'xjzh_card_dingshenzhou', 'xjzh_card_zhaoyaojing'];
						if (cards.includes(card.name)) return false;
					},
					aiValue(player, card, num) {
						if (!player.hasSkill('xjzh_xyj_ruyi')) return;
						if (!get.is.playerNames(player, 'xjzh_xyj_sunwukong')) return;
						let cards = ['xjzh_card_tianganghuo', 'xjzh_card_hunyuandan', 'xjzh_card_huoyundao', 'xjzh_card_dingshenzhou', 'xjzh_card_zhaoyaojing'];
						if (cards.includes(card.name)) return num + 10;
					},
				},
				getIndex(event, player, triggername) {
					return Math.min(event.num, 9) || 1;
				},
				async content(event, trigger, player) {
					let cards = ['xjzh_card_tianganghuo', 'xjzh_card_hunyuandan', 'xjzh_card_huoyundao', 'xjzh_card_dingshenzhou', 'xjzh_card_zhaoyaojing'].randomGet();
					player.gain(game.createCard(cards, null, null), 'gain2', 'log', player)._triggered = null;
				},
				ai: {
					expose: 0.5,
					threaten: 1.5,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'fireDamage') && target.hasSkill('xjzh_xyj_ruyi')) return [1, 0.5];
						},
					},
					result: {
						player(player, target) {
							if (get.tag(card, 'fireDamage') && player.hasSkill('xjzh_xyj_ruyi')) return 1.5;
							return 1;
						},
					},
				},
			},
			xjzh_zxzh_dianling: {
				trigger: {
					global: 'phaseBegin',
				},
				forced: true,
				prompt(event, player) {
					return `〖点灵〗:是否令${get.translation(event.player)}本回合阶段顺序逆转？`;
				},
				filter(event, player) {
					if (!player.hasMark('xjzh_zxzh_tusu')) return false;
					return event.player != player && event.player.isIn();
				},
				check(event, player) {
					let att = get.attitude(player, event.player);
					let num = event.player.needsToDiscard();
					if (att <= 0 && num > 0) return num;
					if (att > 0 && num <= 0) return num;
					return 1;
				},
				group: ['xjzh_zxzh_dianling_end'],
				async content(event, trigger, player) {
					trigger.phaseList = trigger.phaseList.reverse();
					trigger.player.addTempSkill('xjzh_zxzh_dianling_on');
					player.removeMark('xjzh_zxzh_tusu', 1);
					game.log(`${get.translation(player)}令${get.translation(trigger.player)}本回合阶段顺序逆转`);
				},
				subSkill: {
					on: {},
					end: {
						trigger: {
							global: ['recoverAfter', 'loseHp', 'damageAfter'],
						},
						forced: true,
						_priority: 3,
						filter(event, player) {
							if (event.name == 'damage') return event.source && event.source.hasSkill('xjzh_zxzh_dianling_on');
							return event.player.hasSkill('xjzh_zxzh_dianling_on');
						},
						async content(event, trigger, player) {
							const { targets } = await player
								.chooseTarget(`〖点灵〗:选择一名角色令其${trigger.name == 'damage' ? `受到${trigger.num}点伤害` : trigger.name == 'recover' ? `回复${trigger.num}点体力？` : `失去${trigger.num}点体力？`}`, (card, player, target) => {
									let trigger = _status.event.getTrigger();
									if (target.hasSkill('xjzh_zxzh_dianling_on') || target == player) return false;
									if (trigger.name == 'recover') return target.isDamaged();
									return true;
								})
								.set('ai', (target) => {
									let trigger = _status.event.getTrigger();
									if (trigger.name == 'damage') return get.damageEffect(target, player, player);
									if (trigger.name == 'recover') return get.recoverEffect(target, player, player);
									if (trigger.name == 'loseHp' && !target.hasSkillTag('maixie_hp')) return 0;
									return 1;
								})
								.forResult();

							if (targets) {
								if (trigger.name == 'damage') targets[0].damage.apply(targets[0], [trigger.num, trigger.nature, trigger.cards, trigger.card, player]);
								else targets[0][trigger.name](trigger.num);
							}
						},
					},
				},
			},
			xjzh_zxzh_tusu: {
				trigger: {
					player: ['phaseDrawBegin', 'phaseDiscardBegin'],
				},
				forced: true,
				_priority: Infinity,
				firstDo: true,
				mark: true,
				marktext: '屠苏',
				intro: {
					content: '#',
				},
				mod: {
					targetInRange(card, player, target, now) {
						if (!card.cards) return;
						for (var i of card.cards) {
							if (i.hasGaintag('xjzh_zxzh_tusu')) return true;
						}
					},
				},
				async content(event, trigger, player) {
					if (trigger.name == 'phaseDraw') {
						let cards = [];
						for (var i = 0; i < ui.cardPile.childElementCount; i++) {
							let card = ui.cardPile.childNodes[i];
							if (cards.includes(card.name)) continue;
							cards.push(card);
							if (cards.length >= player.maxHp) break;
						}
						player.directgain(cards, null, 'xjzh_zxzh_tusu');
					} else {
						player.addMark('xjzh_zxzh_tusu', player.maxHp);
					}
					trigger.cancel(null, null, 'notrigger');
				},
			},
			xjzh_zxzh_leifa: {
				audio: 'ext:仙家之魂/audio/skill:2',
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				forced: true,
				_priority: -3,
				subSkill: {
					off: {
						mark: true,
						marktext: '雷',
						intro: {
							content: '失去<span style="color: gold">雷法</span>直到回合开始',
						},
					},
				},
				content() {
					'step 0';
					var num = player.countCards('h');
					player.draw(num);
					player.chooseToDiscard(num, 'h', true);
					if (!player.canCompare(trigger.player) || player.hasSkill('xjzh_zxzh_leifa_off') || trigger.player == player) {
						event.finish();
						return;
					}
					('step 1');
					player.chooseBool('〖雷法〗:是否对' + get.translation(trigger.player) + '发起拼点').set('ai', function (event, player) {
						if (get.attitude(player, trigger.player) >= 0) return false;
						return true;
					});
					('step 2');
					if (result.bool) {
						player.chooseToCompare(trigger.player);
					} else {
						event.finish();
					}
					('step 3');
					if (result.bool) {
						trigger.player.damage('thunder', player);
						trigger.player.addTempSkill('fengyin');
					} else {
						player.draw();
						player.addTempSkill('xjzh_zxzh_leifa_off', { player: 'phaseBegin' });
					}
					('step 4');
				},
			},
			xjzh_zxzh_jianxin: {
				trigger: {
					player: 'damageAfter',
					source: 'damageAfter',
				},
				forced: true,
				_priority: -1,
				audio: 'ext:仙家之魂/audio/skill:8',
				filter(event, player) {
					if (player.hasSkill('xjzh_zxzh_jianxin_off')) return false;
					return event.num > 0 && event.source != undefined;
				},
				subSkill: { off: {} },
				content() {
					'step 0';
					player.addTempSkill('xjzh_zxzh_jianxin_off', 'xjzh_zxzh_jianxinAfter');
					if (!player.getEquip(1)) event.goto(1);
					if (player.getEquip(1)) {
						var cards = player.getCards('e', function (card) {
							return get.subtype(card) == 'equip1';
						});
						for (var i of cards) {
							var str = lib.translate[i.name];
							if (str.includes('剑')) {
								event.goto(2);
							}
						}
					}
					('step 1');
					var card = get.cardPile(function (card) {
						var names = lib.translate[card.name];
						return names.includes('剑');
					});
					player.useCard(card, player, false);
					event.finish();
					('step 2');
					if (trigger.source == player) {
						var num = player.hp + trigger.num;
					} else {
						var num = player.getDamagedHp() + trigger.num;
					}
					var cards = get.cards(num),
						list = [];
					player.showCards(cards);
					game.cardsGotoOrdering(cards);
					if (Array.isArray(cards))
						for (var i of cards) {
							if (player.hasUseTarget(i) && get.tag(i, 'damage')) list.push(i);
						}
					event.list = list;
					('step 3');
					if (event.list.length && event.list.length != 1) {
						var next = player.chooseCardButton('请选择要使用的牌', event.list);
						next.set('filterButton', function (button) {
							var player = _status.event.player;
							return player.hasUseTarget(button.link, false);
						});
						next.set('ai', function (button) {
							return _status.event.player.getUseValue(button.link, false);
						});
					} else if (event.list.length == 1) {
						if (player.hasUseTarget(event.list[0], false)) {
							event._result = { bool: true, links: event.list };
						} else {
							event.finish();
						}
					} else {
						event.finish();
					}
					('step 4');
					if (result.bool) {
						event._result = { bool: false };
						event.using = result.links[0];
						player.chooseUseTarget(event.using, false);
					} else {
						event.finish();
					}
					('step 5');
					if (result && result.bool) {
						event.list.remove(event.using);
						if (event.list.length) event.goto(3);
					}
				},
			},
			xjzh_zxzh_jiezhen: {
				trigger: {
					global: 'damageBegin1',
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				group: 'xjzh_zxzh_jiezhen_zero',
				filter(event, player) {
					if (!player.inRange(event.player)) return false;
					if (event.num <= 0 && event.source == undefined) return false;
					if (event.player == player) return false;
					if (event.source == player) {
						return game.hasNature(event, 'thunder');
					}
					return !game.hasNature(event);
				},
				forced: true,
				_priority: 99,
				firstDo: true,
				usable: 1,
				content() {
					'step 0';
					str = '';
					bool = false;
					if (game.hasNature(trigger, 'thunder')) {
						bool = true;
						str += '〖结阵〗:是否代替' + get.translation(trigger.player) + '受到' + get.translation(trigger.num) + '点雷电伤害？';
					} else {
						str += '〖结阵〗:是否代替' + get.translation(trigger.source) + '成为伤害来源？';
					}
					player.chooseBool(str).set('ai', function (event, player) {
						var att1 = get.attitude(trigger.player, player);
						var att2 = get.attitude(trigger.source, player);
						if (att1 < 0) return 0;
						return 1.5;
					});
					('step 1');
					if (result.bool) {
						if (bool) {
							trigger.player = player;
						} else {
							trigger.source = player;
						}
					} else {
						player.getStat().skill.xjzh_zxzh_jiezhen -= 1;
					}
				},
				subSkill: {
					zero: {
						trigger: {
							player: 'damageBegin1',
						},
						forced: true,
						_priority: 100,
						audio: 'xjzh_zxzh_jiezhen',
						filter(event, player) {
							return game.hasNature(event, 'thunder');
						},
						content() {
							trigger.changeToZero();
						},
						ai: {
							nothunder: true,
							effect: {
								target(card, player, target) {
									if (get.tag(card, 'thunderDamage')) return [0, 0];
								},
							},
						},
					},
				},
			},
			xjzh_zxzh_xianghun: {
				audio: 'ext:仙家之魂/audio/skill:2',
				enable: 'phaseUse',
				usable: 1,
				async content(event, trigger, player) {
					player.loseHp();
					player.draw(2);
				},
				ai: {
					order: 10,
					maixie_hp: true,
					maixie_defend: true,
					result: {
						player(player, target, card) {
							return player.getHp(true) - 1;
						},
					},
				},
			},
			xjzh_zxzh_renxin: {
				trigger: {
					player: ['loseHpEnd', 'damageEnd', 'phaseBegin'],
				},
				audio: 'ext:仙家之魂/audio/skill:2',
				forced: true,
				_priority: 10,
				filter(event, player) {
					if (['damage', 'phase'].includes(event.name)) return player.awakenedSkills.includes('xjzh_zxzh_xunqing');
					return true;
				},
				async content(event, trigger, player) {
					const [card, color] = await player.judge().forResult('card', 'color');
					const { targets } = await player
						.chooseTarget(`〖仁心〗:选择至多2个目标令其各${color == 'red' ? '回复1点体力' : '受到1点雷属性伤害'}`, [1, 2], (card, player, target) => {
							if (color == 'red') return target.isDamaged();
							return true;
						})
						.set('ai', (target) => {
							let player = get.player();
							if (color == 'red') return get.recoverEffect(target, player, player);
							return get.damageEffect(target, player, player, 'thunder');
						})
						.forResult();

					if (targets) {
						for (let target of targets) {
							if (color == 'red') target.recover();
							else target.damage(player, 1, 'nocard', 'thunder');
						}
					}
				},
			},
			xjzh_zxzh_xunqing: {
				trigger: {
					player: 'useSkillAfter',
				},
				juexingji: true,
				limited: true,
				forced: true,
				_priority: -1,
				audio: 'ext:仙家之魂/audio/skill:2',
				mark: true,
				marktext: '情',
				intro: {
					content(storage, player) {
						let history = player.getAllHistory('useSkill', (evt) => evt.skill == 'xjzh_zxzh_renxin');
						return `已发动${history.length}次〖仁心〗}`;
					},
					markcount: (storage, player) => player.getAllHistory('useSkill', (evt) => evt.skill == 'xjzh_zxzh_renxin'),
				}, //QQQ
				filter(event, player) {
					let history = player.getAllHistory('useSkill', (evt) => evt.skill == 'xjzh_zxzh_renxin');
					return history.length >= 6;
				},
				async content(event, trigger, player) {
					await player.awakenSkill(event.name);
					game.claerRestraint(player);
					player.recoverTo(player.maxHp);
				},
			},
			xjzh_zxzh_yufeng: {
				trigger: {
					global: 'damageBegin',
				},
				group: ['xjzh_zxzh_yufeng_damage'],
				check(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				prompt(event, player) {
					return '' + get.translation(event.player) + '即将受到' + get.translation(event.source) + '造成的伤害,是否发动〖御风〗？';
				},
				usable: 2,
				marktext: '风',
				intro: {
					content(storage, player) {
						var str = player.storage.xjzh_zxzh_yufeng;
						return get.translation(str);
					},
				},
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				content() {
					'step 0';
					if (!player.storage.xjzh_zxzh_yufeng) player.storage.xjzh_zxzh_yufeng = [];
					player
						.chooseToDiscard('是否对' + get.translation(trigger.player) + '发动〖御风〗', function (card, player, target) {
							if (player.storage.xjzh_zxzh_yufeng.includes(get.type(card))) return false;
							return player.countCards('h') > 0;
						})
						.set('ai', function (card) {
							var player = _status.event.player,
								player = _status.event.getTrigger().player;
							var type = get.type(card, player),
								player;
							var previous = trigger.player.previous;
							var next = trigger.player.next;
							var num = trigger.num;
							var nature = trigger.nature;
							switch (type) {
								case 'basic':
									num++;
									break;
								case 'equip':
									num == 0;
									break;
								case 'delay':
									((nature = 'fire'), previous.num++);
									break;
								case 'trick':
									((nature = 'thunder'), next.num++);
									break;
							}
							return -get.value(card);
						});
					('step 1');
					if (result.cards?.length) {
						switch (get.type(result.cards[0])) {
							case 'basic':
								trigger.num++;
								player.storage.xjzh_zxzh_yufeng.add('basic');
								break;
							case 'equip':
								trigger.cancel();
								trigger.player.chooseToDiscard(2, 'he', true);
								player.storage.xjzh_zxzh_yufeng.add('equip');
								break;
							case 'delay':
								if (!game.hasNature(trigger, 'fire')) {
									game.setNature(trigger, 'fire', false);
								}
								var previous = trigger.player.previous;
								previous.damage('thunder', trigger.source);
								player.storage.xjzh_zxzh_yufeng.add('delay');
								break;
							case 'trick':
								if (!game.hasNature(trigger, 'thunder')) {
									game.setNature(trigger, 'thunder', false);
								}
								var next = trigger.player.next;
								next.damage('thunder', trigger.source);
								player.storage.xjzh_zxzh_yufeng.add('trick');
								break;
						}
					}
					('step 2');
					player.markSkill('xjzh_zxzh_yufeng');
					player.update();
				},
				subSkill: {
					damage: {
						trigger: {
							global: ['phaseAfter', 'phaseBefore'],
						},
						forced: true,
						_priority: -99,
						content() {
							delete player.storage.xjzh_zxzh_yufeng;
							player.unmarkSkill('xjzh_zxzh_yufeng');
						},
					},
				},
			},
			xjzh_zxzh_fengzhen: {
				trigger: { global: 'useCard' },
				forced: true,
				_priority: -5,
				filter(event, player) {
					if (event.card.name == 'sha' || event.card.name == 'nanman' || event.card.name == 'wanjian') {
						if (
							game.hasPlayer(function (current) {
								if (!event.targets.includes(current)) return false;
								return current.isEmpty(2);
							})
						)
							return player.countCards('he') > 0;
					}
					return false;
				},
				content() {
					'step 0';
					var next = player.chooseCardTarget({
						position: 'he',
						selectTarget: [1, Infinity],
						filterCard: lib.filter.cardDiscardable,
						filterTarget(card, player, target) {
							var trigger = _status.event.getTrigger();
							if (!trigger.targets.includes(target)) return false;
							return target.isEmpty(2);
						},
						ai1(card) {
							return get.unuseful(card) + 9;
						},
						ai2(target) {
							var trigger = _status.event.getTrigger();
							var att = get.attitude(_status.event.player, target);
							if (trigger.targets.length == 1) {
								if (trigger.card.name == 'sha' && trigger.card.nature == 'fire' && lib.inpile.includes('tengjia')) return -1;
								if (trigger.card.name == 'sha' && trigger.card.nature == 'fire' && lib.inpile.includes('jydiywuchanyi')) return -1;
								if (trigger.card.name == 'sha' && trigger.card.nature == 'jy_du' && lib.inpile.includes('jydiy_jingsibeixin')) return -1;
							}
							return att > 0 ? att : 0;
						},
						prompt: '' + get.translation(trigger.targets) + '成为了' + get.translation(trigger.player) + '' + get.translation(trigger.card) + '的目标',
						prompt2: '弃置一张牌,选择任意名目标直到此牌结算结束,你选择的角色视为装备一张防具牌',
					});
					('step 1');
					if (result.bool) {
						event.targets = result.targets;
						player.discard(result.cards);
						var list = get.inpile(function (name) {
							var card = {
								name: name,
							};
							var info = get.info(card);
							return info.type == 'equip' && info.subtype == 'equip2' && info.skills;
						});
						for (var i = 0; i < list.length; i++) {
							list[i] = ['防具', '', list[i]];
						}
						var att = get.attitude(player, result.targets[0]) > 0;
						var dialog = ui.create.dialog('选择一张防具牌令你选择的角色视为装备该防具牌', [list, 'vcard'], 'hidden');
						player
							.chooseButton(dialog, true)
							.set('ai', function (button) {
								var player = _status.event.player;
								var aibool = _status.event.aibool;
								var cardx = _status.event.cardx;
								var triggerx = _status.event.triggerx;
								var name = button.link[2];
								if (aibool) {
									if ((cardx.name == 'wanjian' || cardx.name == 'nanman') && (name == 'tengjia' || name == 'jydiywuchanyi' || name == 'jydiy_jingsibeixin')) return 10;
									if (cardx.name == 'sha' && !cardx.nature && (name == 'tengjia' || name == 'jydiywuchanyi' || name == 'jydiy_jingsibeixin')) return 10;
									if (cardx.name == 'sha' && get.color(cardx) == 'black' && (name == 'renwang' || name == 'jydiybeidouzhen')) return 10;
									if (cardx.name == 'sha' && name == 'jydiytaohuazhen_re') return 8;
									if (cardx.name == 'sha' && (name == 'bagua' || 'jydiytaohuazhen')) return 6;
									if (triggerx && triggerx.baseDamage && triggerx.baseDamage > 1 && (name == 'jydiy_ruanweijia_re' || name == 'jydiy_ruanweijia')) return 5;
									if (triggerx && triggerx.baseDamage && triggerx.baseDamage > 1 && name == 'baiyin') return 4;
									return 0;
								} else {
									if (cardx.name == 'sha' && cardx.nature && cardx.nature == 'fire' && (name == 'tengjia' || name == 'jydiywuchanyi')) return 10;
									if (cardx.name == 'sha' && cardx.nature && cardx.nature == 'jy_du' && name == 'jydiy_jingsibeixin') return 10;
									return 0;
								}
							})
							.set('aibool', att)
							.set('cardx', trigger.card)
							.set('triggerx', trigger);
					} else event.finish();
					('step 2');
					if (result.links?.length) {
						var card = game.createCard(result.links[0][2], '', '', '');
						var skills = get.info(card).skills;
						skills = skills.slice(0);
						for (var i of event.targets) {
							i.$gain2(card);
							for (var s of skills) {
								i.addTempSkill(s, 'useCardEnd');
							}
						}
					}
				},
			},
			xjzh_zxzh_zonghuo: {
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return player != target;
				},
				limited: true,
				selectTarget: -1,
				marktext: '焚',
				mark: true,
				multitarget: true,
				multiline: true,
				line: 'fire',
				intro: {
					content: 'limited',
				},
				content() {
					'step 0';
					player
						.chooseControl(['一', '二'], function (event, player) {
							if (player.hasSkillTag('nofire')) return '二';
							if (player.hp - 2 > 0) return '二';
							return '一';
						})
						.set('prompt', '请选择要造成的伤害');
					('step 1');
					event.onfire = result.control == '二' ? 2 : 1;
					player.damage('fire', event.onfire, player);
					player.awakenSkill('xjzh_zxzh_zonghuo');
					event.num1 = 0;
					('step 2');
					if (event.num1 < targets.length) {
						if (targets[event.num1].countCards('e') && player.isIn()) {
							targets[event.num1].chooseBool('是否将装备区的牌交给' + get.translation(player) + '?否则受到' + get.translation(player) + (event.onfire == 2 ? '二' : '一') + '点火焰伤害').set('ai', function (evt, playerx) {
								var num = evt.onfire;
								if (playerx.hasSkillTag('nofire')) return false;
								if (get.attitude(playerx, evt.player) > 0) return true;
								if (playerx.countCards('e') == 1) return true;
								if (playerx.hp - num > 1) return true;
								return get.damageEffect(playerx, playerx, playerx, 'fire') < 0;
							});
						} else {
							targets[event.num1].damage('fire', event.onfire, player);
							event.num1++;
							event.redo();
						}
					} else {
						event.finish();
					}
					('step 3');
					if (result && result.bool) {
						targets[event.num1].$give(targets[event.num1].getCards('e'), player);
						player.gain(targets[event.num1].getCards('e'));
					} else {
						targets[event.num1].damage('fire', event.onfire, player);
						targets[event.num1].say(['此火乘风而来,燎原不绝!', '此火焚尽一切,天地万物!'].randomGet());
					}
					event.num1++;
					event.goto(2);
				},
				ai: {
					order: 1,
					result: {
						player(player) {
							var num = 0,
								players = game.filterPlayer();
							for (var i of players) {
								if (player != i && get.damageEffect(i, player, i, 'fire') < 0) {
									var att = get.attitude(player, i);
									if (att > 0 && !i.countCards('e') && !i.hasSkillTag('nofire')) {
										num -= 1;
									} else if (att < 0 && !i.hasSkillTag('nofire')) {
										num += 1;
									}
								}
							}
							if (player.hasSkillTag('nofire')) {
								return num;
							} else return num - 1;
						},
					},
				},
			},
			xjzh_zxzh_shoutao: {
				forced: true,
				trigger: {
					player: ['gainAfter'],
					global: 'phaseZhunbeiBegin',
				},
				mod: {
					cardEnabled(card, player) {
						if (card.name == 'tao') return false;
					},
				},
				_priority: -3,
				global: ['xjzh_zxzh_shoutao_ai'],
				group: ['xjzh_zxzh_shoutao_recover'],
				filter(event, player) {
					if (event.name == 'gain') {
						return event.cards && event.cards.some((c) => c.name == 'tao');
					}
					if (event.name == 'phaseZhunbei') {
						return player.countCards('h', { name: 'tao' });
					}
					return false;
				},
				content() {
					'step 0';
					if (trigger.name == 'gain') {
						event.cards = trigger.cards.filter((c) => c.name == 'tao');
					} else {
						var hs = player.getCards('h', 'tao');
						if (hs.length) {
							player.discard(hs);
							player.draw(hs.length * 2);
							player.addMark('xjzh_zxzh_taoyuan', hs.length);
						}
						event.finish();
					}
					('step 1');
					event.card = event.cards.pop();
					player.discard(event.card);
					('step 2');
					if (player.isDamaged()) {
						player.recover();
					} else {
						player.draw(2, 'nodelay');
						if (player.hasSkill('xjzh_zxzh_taoyuan')) player.addMark('xjzh_zxzh_taoyuan', 1, false);
						game.log(player, '将', event.card, '离开游戏');
						player.lose(event.card, ui.special, 'toStorage');
					}
					('step 3');
					if (event.cards.length) {
						event.goto(1);
					}
				},
				subSkill: {
					recover: {
						forced: true,
						popup: false,
						trigger: {
							global: 'recoverAfter',
						},
						content() {
							if (trigger.player == player) {
								if (!player.hasSkill('xjzh_zxzh_shoutao_jin') && player.hasSkill('xjzh_zxzh_taoyuan')) player.addMark('xjzh_zxzh_taoyuan', 1, false);
							} else {
								if (player.isDamaged()) {
									player.recover(trigger.num);
								} else {
									player.draw();
								}
							}
						},
					},
					ai: {
						ai: {
							nosave: true,
							skillTagFilter(player) {
								if (player.countCards('h', 'tao')) return false;
							},
						},
					},
				},
			},
			xjzh_zxzh_taoyuan: {
				forced: true,
				marktext: '桃',
				intro: {
					name: '桃源',
					content: 'mark',
				},
				trigger: {
					player: 'dying',
				},
				filter(event, player) {
					return player.hasMark('xjzh_zxzh_taoyuan');
				},
				content() {
					'step 0';
					player.addTempSkill('xjzh_zxzh_shoutao_jin', 'recoverAfter');
					var num1 = player.countMark('xjzh_zxzh_taoyuan');
					var num2 = player.maxHp - player.hp;
					if (num1 > num2) {
						player.recover(num2);
						player.draw(num1 - num2);
					} else {
						player.recover(num1);
					}
					('step 1');
					player.clearMark('xjzh_zxzh_taoyuan');
				},
			},
			xjzh_zxzh_shoutao_jin: {},
			//锁定技,出牌阶段限一次,你可以流失一点体力并摸两张牌,令场上除你之外的所有角色依次摸一张牌,若此牌为桃,你获得之
			xjzh_zxzh_qiwu: {
				enable: 'phaseUse',
				usable: 1,
				check(event, player) {
					return player.hp > 1 || player.canSave(player);
				},
				async content(event, trigger, player) {
					player.loseHp();
					player.draw(2);
					for (const npc of game.players) {
						const { cards } = await npc.draw().forResult();
						if (cards && cards[0]?.name == 'tao') {
							player.gain(cards, 'gain2');
						}
					}
				},
				ai: {
					order: 12,
				},
			},
			xjzh_zxzh_leifax: {
				trigger: {
					global: 'phaseUseBegin',
				},
				forced: true,
				charlotte: true,
				_priority: 3,
				superCharlotte: true,
				xjzh_xinghunSkill: true,
				mod: {
					targetEnabled(card, player, target) {
						if (player == target.storage.xjzh_zxzh_leifax_target) return false;
					},
				},
				check(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				prompt(event, player) {
					return '是否对' + get.translation(event.player) + '发动〖雷法〗？';
				},
				filter(event, player) {
					return event.player != player;
				},
				async content(event, trigger, player) {
					let cards = get.cards()[0];
					await player.showCards(cards);
					let suits = cards.suit;
					if (suits != 'spade') {
						const { bool } = await trigger.player
							.chooseToDiscard('请弃置一张花色为' + get.translation(suits) + '的牌,否则本回合内非锁定技失效', 'h', 1, { suit: suits })
							.set('ai', (card) => {
								if (['tao', 'wuzhong'].includes(card.name)) return 0;
								return 8 - get.value(card);
							})
							.forResult();
						if (!bool) {
							player.draw();
							trigger.player.addTempSkill('fengyin');
						}
					} else {
						trigger.player.damage(1, 'thunder', player);
						player.storage.xjzh_zxzh_leifax_target = trigger.player;
						player.addTempSkill('xjzh_zxzh_leifax_target');
					}
				},
				subSkill: {
					target: {
						intro: {
							content: '本回合内<font color=yellow>$</font>无法指定<font color=yellow>林子言</font>为目标直到回合结束',
						},
					},
				},
				ai: {
					expose: 0.5,
				},
			},
			xjzh_zxzh_leifax2: {
				trigger: {
					global: 'phaseUseBegin',
				},
				forced: true,
				charlotte: true,
				_priority: 3,
				superCharlotte: true,
				xjzh_xinghunSkill: true,
				mod: {
					targetEnabled(card, player, target) {
						if (player == target.storage.xjzh_zxzh_leifax_target) return false;
					},
				},
				check(event, player) {
					return get.attitude(player, event.player) < 0;
				},
				prompt(event, player) {
					return '是否对' + get.translation(event.player) + '发动〖雷法〗？';
				},
				filter(event, player) {
					return event.player != player;
				},
				async content(event, trigger, player) {
					let cards = get.cards()[0];
					await player.showCards(cards);
					let suits = cards.suit;
					if (suits != 'spade') {
						const { bool } = await trigger.player
							.chooseToDiscard('请弃置两张花色为' + get.translation(suits) + '的牌,否则本回合内非锁定技失效', 'h', 2, { suit: suits })
							.set('ai', (card) => {
								if (['tao', 'wuzhong'].includes(card.name)) return 0;
								return 8 - get.value(card);
							})
							.forResult();
						if (!bool) {
							player.draw();
							trigger.player.addTempSkill('baiban');
						}
					} else {
						trigger.player.damage(2, 'thunder', player);
						player.storage.xjzh_zxzh_leifax_target = trigger.player;
						player.addTempSkill('xjzh_zxzh_leifax_target');
					}
				},
				subSkill: {
					target: {
						intro: {
							content: '本回合内<font color=yellow>$</font>无法指定<font color=yellow>林子言</font>为目标直到回合结束',
						},
					},
				},
				ai: {
					expose: 0.5,
				},
			},
			xjzh_zxzh_leiyu: {
				forced: true,
				_priority: 69,
				group: ['xjzh_zxzh_leiyu_unmark', 'xjzh_zxzh_leiyu_change'],
				trigger: {
					player: 'phaseBegin',
					global: 'gameDrawBegin',
				},
				mod: {
					suit(card, suit) {
						let player = get.player();
						if (!player || !player.storage.xjzh_zxzh_leiyu) return;
						return player.storage.xjzh_zxzh_leiyu;
					},
				},
				intro: {
					content(content, player) {
						var str = get.translation(player.storage.xjzh_zxzh_leiyu);
						return '你所有牌花色均视为:' + str;
					},
				},
				marktext: '雷',
				content() {
					'step 0';
					player
						.chooseControl(lib.suit)
						.set('prompt', '请选择一种花色')
						.set('ai', function () {
							return lib.suit.randomGet();
						});
					('step 1');
					var suit = result.control;
					player.chat(get.translation(suit + 2));
					game.log(player, '选择了', '#y' + get.translation(suit + 2));
					player.storage.xjzh_zxzh_leiyu = true;
					player.storage.xjzh_zxzh_leiyu = result.control;
					player.storage.xjzh_zxzh_leiyu_unmark = result.control;
					player.markSkill('xjzh_zxzh_leiyu');
				},
				subSkill: {
					unmark: {
						trigger: {
							player: 'phaseBegin',
						},
						_priority: 70,
						forced: true,
						filter(event, player) {
							var player = _status.event.player;
							return (_status.event.player = player && event.card.suit == player.storage.xjzh_zxzh_leiyu);
						},
						content() {
							player.storage.xjzh_zxzh_leiyu = false;
							player.unmarkSkill('xjzh_zxzh_leiyu');
							delete player.storage.xjzh_zxzh_leiyu;
							delete player.storage.xjzh_zxzh_leiyu_unmark;
						},
					},
					change: {
						trigger: {
							target: 'useCardToTargeted',
						},
						_priority: 70,
						forced: true,
						filter(event, player) {
							return event.card && event.card.suit == player.storage.xjzh_zxzh_leiyu;
						},
						content() {
							player.draw();
						},
					},
				},
			},
			xjzh_zxzh_tianxin: {
				enable: 'phaseUse',
				async content(event, trigger, player) {
					let cards = get.cards(player.hp);
					await player.showCards(cards);
					let num = 0;
					let num2 = 0;
					for (let card of cards) {
						if (card.suit == 'spade') num++;
						else num2++;
					}
					await game.cardsDiscard(cards);
					if (num >= num2) {
						const { bool, targets } = await player
							.chooseTarget('请选择〖天心〗的目标', lib.filter.notMe)
							.set('ai', (target) => {
								var att = get.attitude(_status.event.player, target);
								if (att < 0) return -att;
								if (att == 0) return Math.random();
								return att;
							})
							.forResult();
						if (bool) {
							var target = targets[0];
							target.damage(num, player, 'thunder', 'nocard');
							player.removeSkill('xjzh_zxzh_tianxin');
							player.removeSkill('xjzh_zxzh_leifax');
							player.addSkill('xjzh_zxzh_leifax2');
						}
					} else {
						await player.damage(1, player, 'thunder', 'nocard');
						await player.draw(player.getDamagedHp(true));
					}
				},
				ai: {
					order: 2,
					expose: 0.8,
					result: {
						player(player, target, card) {
							return player.hp > 2;
						},
					},
				},
			},
			xjzh_zxzh_cangjian: {
				trigger: {
					player: ['phaseBegin', 'phaseEnd'],
				},
				marktext: '剑',
				intro: {
					markcount: 'expansion',
					mark(dialog, content, player) {
						content = player.getExpansions('xjzh_zxzh_cangjian');
						if (content && content.length) {
							if (player == game.me || player.isUnderControl()) {
								dialog.addAuto(content);
							} else {
								return '共有' + get.cnNumber(content.length) + '把剑';
							}
						}
					},
				},
				forced: true,
				xjzh_xinghunSkill: true,
				nogainsSkill: true,
				onremove(player, skill) {
					let cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				init(player, skill) {
					let cards = Array.from(ui.cardPile.childNodes).filter((card) => get.subtype(card) == 'equip1');
					cards.length ? player.addToExpansion(cards.randomGets(get.rand(5, 9)), player, 'draw').gaintag.add('xjzh_zxzh_cangjian') : null;
					player.disableEquip(1);
					player.storage[skill] = [];
				},
				mod: {
					attackFrom(player, target, range) {
						let num = 0;
						if (player.storage.xjzh_zxzh_cangjian && player.storage.xjzh_zxzh_cangjian.length) {
							let storage = player.storage.xjzh_zxzh_cangjian;
							storage.forEach((card) => {
								let info = lib.card[card];
								if (info.distance && info.distance.attackFrom) num += info.distance.attackFrom;
							});
						}
						return range + num;
					},
				},
				filter(event, player) {
					return player.hasExpansions('xjzh_zxzh_cangjian');
				},
				async content(event, trigger, player) {
					let cards = player.getExpansions('xjzh_zxzh_cangjian').randomGet();
					player.getExpansions('xjzh_zxzh_cangjian').remove(cards);
					ui.cardPile.insertBefore(cards, ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
					let skills = get.info(cards, false).skills;
					if (skills.length) {
						player.addSkill(skills);
						player.storage.xjzh_zxzh_cangjian.push(cards.name);
					}
					game.updateRoundNumber();
				},
			},
			xjzh_zxzh_jiantai: {
				trigger: {
					global: 'damageEnd',
				},
				forced: true,
				_priority: 3,
				mod: {
					ignoredHandcard(card, player, bool) {
						if (card.hasGaintag && card.hasGaintag('xjzh_zxzh_jiantai')) return true;
					},
					aiValue(player, card, num) {
						if (card.hasGaintag && card.hasGaintag('xjzh_zxzh_jiantai')) return 9.5;
					}, //QQQ
				},
				filter(event, player) {
					if (!player.storage.xjzh_zxzh_cangjian || !player.storage.xjzh_zxzh_cangjian.length) return false;
					if (event.source != player && event.player == player) return true;
					if (event.source == player) return true;
					return false;
				},
				async content(event, trigger, player) {
					let num = player.storage.xjzh_zxzh_cangjian.length ? player.storage.xjzh_zxzh_cangjian.length : 0,
						cards = get.cards(num + 1);
					player.showCards(cards);
					let card = cards.filter((item) => get.subtype(item) == 'equip1').length ? cards.filter((item) => get.subtype(item) == 'equip1') : cards.filter((item) => get.type(item) == 'equip');
					player.gain(card, 'gain2', 'log', player).gaintag.add(event.name);
				},
			},
			xjzh_zxzh_yujian: {
				enable: ['chooseToUse', 'chooseToRespond'],
				group: ['xjzh_zxzh_yujian2'],
				filter(event, player) {
					if (!player.countCards('h', (card) => card.hasGaintag('xjzh_zxzh_jiantai'))) return false;
					for (var i of lib.inpile) {
						if (i == 'shan' || i == 'wuxie' || i == 'xjzh_card_lianqidan') continue;
						let type = get.type(i);
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
						let list1 = [],
							list1Tag,
							list2 = [],
							list2Tag;
						for (var i of lib.inpile) {
							if (!lib.translate[i + '_info']) continue;
							if (i == 'shan' || i == 'wuxie' || i == 'xjzh_card_lianqidan') continue;
							let type = get.type(i);
							if (type == 'basic') {
								list1.push([type, '', i]);
								if (event.filterCard && event.filterCard({ name: i }, player, event)) list1Tag = true;
								if (i == 'sha') {
									for (let j of lib.inpile_nature) list1.push([type, '', i, j]);
								}
							}
							if (type == 'trick') {
								list2.push([type, '', i]);
								if (event.filterCard && event.filterCard({ name: i }, player, event)) list2Tag = true;
							}
						}
						let dialog = ui.create.dialog('hidden');
						if (list1Tag) {
							dialog.add('基本牌');
							dialog.add([list1, 'vcard']);
						}
						if (list2Tag) {
							dialog.add('锦囊牌');
							dialog.add([list2, 'vcard']);
						}
						return dialog;
					},
					filter(button, player) {
						let evt = _status.event.parent;
						return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
					},
					check(button) {
						let player = _status.event.player;
						if (player.countCards('h', button.link[2], (card) => card.hasGaintag('xjzh_zxzh_jiantai')) > 0) return 0;
						if (button.link[2] == 'wugu') return 0;
						let effect = player.getUseValue(button.link[2]);
						if (effect > 0) return effect;
						return 0;
					},
					backup(links, player) {
						return {
							filterCard(card) {
								let pos = get.position(card);
								if (pos == 'h' && card.hasGaintag('xjzh_zxzh_jiantai')) return true;
								return false;
							},
							selectCard: 1,
							popname: true,
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
						};
					},
					prompt(links, player) {
						return '将一张<剑胎>牌当作' + get.translation(links[0][2]) + '使用或打出';
					},
				},
			},
			xjzh_zxzh_yujian2: {
				enable: 'chooseToUse',
				filterCard(card) {
					let pos = get.position(card);
					if (pos == 'h' && card.hasGaintag('xjzh_zxzh_jiantai')) return true;
					return false;
				},
				viewAsFilter(player) {
					return player.countCards('hs', (card) => card.hasGaintag('xjzh_zxzh_jiantai')) > 0;
				},
				viewAs: {
					name: 'wuxie',
				},
				position: 'hs',
				prompt: '将1张<剑胎>当作无懈可击使用',
				check(card) {
					const tri = _status.event.getTrigger();
					if (tri && tri.card && tri.card.name == 'chiling') return -1;
					return 8 - get.value(card);
				},
				threaten: 1.2,
				ai: {
					basic: {
						useful: [6, 4, 3],
						value: [6, 4, 3],
					},
					result: {
						player: 1,
					},
					expose: 0.2,
				},
			},
			xjzh_zxzh_shiqiao: {
				trigger: {
					global: ['loseAfter', 'cardsDiscardAfter'],
				},
				filter(event, player) {
					return (
						event.cards &&
						event.cards.filter(function (card) {
							return get.position(card, true) == 'd';
						}).length
					);
				},
				forced: true,
				_priority: 6,
				init(player) {
					let num = get.rand(1, 5);
					if (!player.storage.xjzh_zxzh_shiqiao) player.storage.xjzh_zxzh_shiqiao = [];
					while (player.storage.xjzh_zxzh_shiqiao.length < num) {
						let num2 = get.rand(1, 13);
						if (!player.storage.xjzh_zxzh_shiqiao.includes(num2)) player.storage.xjzh_zxzh_shiqiao.push(num2);
					}
				},
				mark: true,
				marktext: '樵',
				intro: {
					markcount(storage, player) {
						if (!storage) return;
						return storage.length;
					},
					content(storage, player) {
						let str = '已记录点数:';
						for (var i = 0; i < storage.length; i++) {
							if (storage[i] != storage[storage.length - 1]) {
								str += '' + get.translation(storage[i]) + '、';
							} else {
								str += '' + get.translation(storage[i]) + '';
							}
						}
						return str;
					},
				},
				mod: {
					aiOrder(player, card, num) {
						if (!player.storage.xjzh_zxzh_shiqiao) return;
						let list = player.storage.xjzh_zxzh_shiqiao.slice(0);
						if (card.number == list[0]) return num + 3.5;
					},
				},
				async content(event, trigger, player) {
					let cards = trigger.cards;
					while (cards.length) {
						let storage = player.storage.xjzh_zxzh_shiqiao;
						let card = cards.pop().fix();
						game.cardsGotoPile(card, () => {
							return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
						});
						let number = card.number;
						if (storage.includes(number)) {
							let card2 = get.cardPile((cardx) => {
								return cardx.number != number;
							});
							if (card2) {
								player.gain(card2, player, 'draw');
							}
							storage.removeArray(
								storage.filter((index) => {
									return index == number;
								})
							);
							game.log(player, '移除了点数', number, '获得了', card2);
							if (storage.length == 0) {
								lib.skill.xjzh_zxzh_shiqiao.init(player);
							}
						}
					}
				},
			},
			xjzh_zxzh_baoxin: {
				trigger: {
					player: ['phaseDrawBegin', 'phaseDiscardBegin'],
				},
				filter(event, player) {
					if (!player.storage.xjzh_zxzh_shiqiao || !player.storage.xjzh_zxzh_shiqiao.length) return false;
					return true;
				},
				forced: true,
				_priority: 6,
				group: ['xjzh_zxzh_baoxin_use'],
				async content(event, trigger, player) {
					trigger.cancel(null, null, 'notrigger');
					let list = [],
						list2 = [];
					while (list.length < 13) {
						let cardPilex = Array.from(ui.cardPile.childNodes);
						let cards = cardPilex.randomGet();
						list.push(cards);
						cardPilex.remove(cards);
					}
					player.showCards(list);
					let storage = player.storage.xjzh_zxzh_shiqiao.slice(0);
					for (var i of list) {
						if (storage.includes(i.number)) {
							list.remove(i);
							list2.push(i);
						}
					}
					if (list2.length) {
						player.gain(list2, player, 'draw')._triggered = null;
					}
					let str = `跳过了${get.translation(trigger.name)}${list2.length ? '摸了' : ''}${list2.length}张牌`;
					game.cardsDiscard(list);
					game.log(player, str);
				},
				subSkill: {
					use: {
						trigger: {
							player: 'useCard',
						},
						forced: true,
						_priority: 6,
						check: () => 1,
						filter(event, player) {
							if (!player.storage.xjzh_zxzh_shiqiao || !player.storage.xjzh_zxzh_shiqiao.length) return false;
							let storage = player.storage.xjzh_zxzh_shiqiao.slice(0);
							if (!event.cards || !event.cards.length) return false;
							if (!storage.includes(event.card.number)) return false;
							if (event.parent.name == 'xjzh_zxzh_baoxin_use') return false;
							if (get.type(event.cards[0]) == 'equip' || get.type(event.cards[0]) == 'delay') return false;
							return true;
						},
						async content(event, trigger, player) {
							let controlList = [`移除点数${trigger.card.number}摸两张牌`, `移除点数${trigger.card.number}令${get.translation(trigger.cards[0])}额外结算一次`],
								storage = player.storage.xjzh_zxzh_shiqiao;
							const index = await player
								.chooseControlList(get.prompt(event.name, player), controlList, true)
								.set('ai', () => {
									let player = get.player();
									if (player.countCards('h') <= 1) return 0;
									return 1;
								})
								.forResult('index');
							storage.remove(trigger.card.number);
							if (index == 1) {
								trigger.effectCount++;
								game.log(trigger.cards[0], '额外结算1次');
							} else player.draw(2);
							if (storage.length == 0) lib.skill.xjzh_zxzh_shiqiao.init(player);
						},
					},
				},
			},
			xjzh_zxzh_moyu: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				check: () => 1,
				prompt: '〖默语〗:是否进行一次判定？',
				async content(event, trigger, player) {
					const judgeEvent = await player.judge((card) => {
						if (card.suit == 'heart') return 2;
						if (card.suit == 'spade') return 1;
						return -1;
					});
					judgeEvent.judge2 = (result) => result.bool;
					const {
						result: { judge },
					} = judgeEvent;
					if (judge < 0) return;
					switch (judge) {
						case 2:
							var text = '〖默语〗:选择一名角色与其交换体力值与体力上限';
							var num = 1;
							break;
						case 1:
							var text = '〖默语〗:选择两名角色令其交换技能';
							var num = 2;
							break;
					}
					const { targets } = await player
						.chooseTarget(text, num, function (card, player, target) {
							if (num == 1) return target != player;
							return true;
						})
						.set('ai', function (target) {
							let att = get.attitude(player, target);
							let judge = judgeEvent;
							if (judge == 2) {
								if (att < 0) return target.maxHp > player.maxHp || target.hp > player.hp;
								if (att > 0) return 0.5;
							} else {
								return 0.5;
							}
						})
						.set('num', num)
						.forResult();

					if (targets) {
						if (targets.length > 1) {
							let skills = targets[0].getSkills(null, false, false).filter((skill) => {
								let info = get.info(skill);
								if (!info || !lib.translate[skill] || lib.translate[skill] == '' || !lib.translate[skill + '_info'] || lib.translate[skill + '_info'] == '' || info.equipSkill || info.cardSkill || info.temp || info.sub) return false;
								return true;
							});
							let skills2 = targets[1].getSkills(null, false, false).filter((skill) => {
								let info = get.info(skill);
								if (!info || !lib.translate[skill] || lib.translate[skill] == '' || !lib.translate[skill + '_info'] || lib.translate[skill + '_info'] == '' || info.equipSkill || info.cardSkill || info.temp || info.sub) return false;
								return true;
							});
							targets[0].changeSkills(skills2, skills);
							targets[1].changeSkills(skills, skills2);
						} else {
							player.swapMaxHp(targets[0]);
						}
					}
				},
			},
			xjzh_zxzh_zhenwen: {
				trigger: {
					global: 'changeSkillsEnd',
				},
				usable(skill, player) {
					return game.roundNumber;
				},
				prompt(event, player) {
					let str = '〖真纹〗:';
					let skills = event.addSkill;
					let skillsLocked = skills.filter((skill) => {
						return get.is.locked(skill);
					});
					let skillsnoLocked = skills.filter((skill) => {
						return !get.is.locked(skill);
					});
					str += `是否令${get.translation(event.player)}失去${skills.map((i) => {
						return '【' + get.translation(i) + '】';
					})}`;
					if (skillsnoLocked.length)
						str += `你获得技能${skillsnoLocked.map((i) => {
							return '【' + get.translation(i) + '】';
						})}`;
					if (skillsLocked.length) str += `并摸${skillsnoLocked.length * 2}张牌`;
					return str;
				},
				filter(event, player) {
					if (!event.addSkill.length) return false;
					if (event.parent.name == 'chooseCharacter') return false;
					if (event.getParent('xjzh_zxzh_zhenwen').name == 'xjzh_zxzh_zhenwen') return false;
					let skills = event.addSkill.slice(0).filter((skill) => {
						let info = get.info(skill);
						if (!info || !lib.translate[skill] || lib.translate[skill] == '' || !lib.translate[skill + '_info'] || lib.translate[skill + '_info'] == '' || info.equipSkill || info.cardSkill || info.temp || info.sub) return false;
						if (lib.skill.global.includes(skill)) return false;
						if (player.getStockSkills().includes(skill)) return false;
						return true;
					});
					if (!skills.length) return false;
					return true;
				},
				async content(event, trigger, player) {
					let skills = trigger.addSkill.slice(0);
					skills.forEach((skill) => {
						if (get.is.locked(skill)) {
							trigger.player.removeSkill(skill, true);
							trigger.player.draw(2);
						} else {
							trigger.player.removeSkill(skill, true);
							player.addSkillLog(skill);
						}
					});
				},
			},
			xjzh_zxzh_jinyan: {
				trigger: {
					global: ['logSkillBegin', 'useSkillBegin'],
				},
				popup: false,
				prompt(event, player) {
					var str = '〖禁言〗:是否禁用' + get.translation(event.player) + '的技能〖' + get.translation(event.skill) + '〗直到下个回合开始？';
					return str;
				},
				usable: 1,
				filter(event, player) {
					if (event.parent.name == 'chooseCharacter') return false;
					if (event.getParent('xjzh_zxzh_jinyan').name == 'xjzh_zxzh_jinyan') return false;
					var info = get.info(event.skill);
					if (!info || !lib.translate[event.skill] || lib.translate[event.skill] == '' || !lib.translate[event.skill + '_info'] || lib.translate[event.skill + '_info'] == '' || info.equipSkill || info.cardSkill || info.temp || info.sub || info.juexingji || info.dutySkill || info.limited) return false;
					if (lib.skill.global.includes(event.skill)) return false;
					if (event.player == player) return false;
					return true;
				},
				check(event, player) {
					var att = get.attitude(player, event.player);
					return -att;
				},
				content() {
					if (!trigger.player.storage.xjzh_zxzh_jinyan_nouse) trigger.player.storage.xjzh_zxzh_jinyan_nouse = [];
					trigger.player.storage.xjzh_zxzh_jinyan_nouse.push(trigger.skill);
					trigger.player.addTempSkill('xjzh_zxzh_jinyan_nouse', { player: 'phaseBefore' });
					game.log(trigger.player, '的技能〖' + get.translation(trigger.skill) + '〗因', '#g〖禁言〗', '被禁用');
				},
				subSkill: {
					nouse: {
						init(player, skill) {
							player.addSkillBlocker(skill);
						},
						onremove(player, skill) {
							player.removeSkillBlocker(skill);
							if (player.storage.xjzh_zxzh_jinyan_nouse) delete player.storage.xjzh_zxzh_jinyan_nouse;
						},
						skillBlocker(skill, player) {
							if (!player.storage.xjzh_zxzh_jinyan_nouse.includes(skill)) return false;
							return true;
						},
					},
				},
			},
			//-----------------------卡牌技能-----------------
			///装备牌
			//霜燃
			xjzh_card_shuangran_skill: {
				trigger: {
					source: ['damageBegin', 'damageAfter'],
				},
				filter(event, player) {
					return player.storage.xjzh_card_shuangran_skill;
				},
				equipSkill: true,
				forced: true,
				content() {
					var list = player.storage.xjzh_card_shuangran_skill;
					for (var i in list) {
						switch (i) {
							case 'baojilv':
								if (event.triggername == 'damageBegin') {
									var num = list[i];
									game.xjzh_Criticalstrike(player, num / 100, 2);
								}
								break;
							case 'recover':
								if (event.triggername == 'damageBegin') {
									var num = list[i];
									if (Math.random() <= 0.05 && player.isDamaged()) player.recover(num);
								}
								break;
							case 'yishang':
								if (event.triggername == 'damageAfter') {
									var num = list[i];
									if (Math.random() <= num[0] / 100) trigger.player.changexjzhBUFF('yishang', num[1]);
								}
								break;
							case 'ranshao':
								if (event.triggername == 'damageAfter') {
									var num = list[i];
									if (Math.random() <= num[0] / 100) trigger.player.changexjzhBUFF('ranshao', num[1]);
								}
								break;
						}
					}
				},
			},
			xjzh_card_yizhihuhuan_skill: {
				trigger: {
					source: 'damageBefore',
				},
				_priority: 6,
				forced: true,
				firstDo: true,
				equipSkill: true,
				popup: false,
				async content(event, trigger, player) {
					if (trigger.num < 2) {
						game.setNature(trigger, 'thunder', false);
					} else {
						let list = [1, 'ice', trigger.cards, trigger.card];
						if (trigger.source) list.push(trigger.source);
						else list.push('nosource');
						for (var i = 0; i < trigger.num + 1; i++) {
							trigger.player.damage.apply(trigger.player, list.slice(0));
						}
						trigger.changeToZero();
					}
				},
				ai: {
					thunderDamage: true,
					iceDamage: true,
				},
			},
			xjzh_card_wuxian_skill: {
				equipSkill: true,
				subSkill: {
					fanshe: {
						trigger: {
							player: 'damageBegin',
						},
						forced: true,
						_priority: 10,
						firstDo: true,
						equipSkill: true,
						init(player) {
							var num = get.rand(30, 50);
							if (!player.storage.xjzh_card_wuxian_skill_fanshe) player.storage.xjzh_card_wuxian_skill_fanshe = num;
						},
						filter(event, player) {
							var num = player.storage.xjzh_card_wuxian_skill_fanshe;
							if (!event.source || event.source.isDead()) return false;
							if (event.getParent('xjzh_card_wuxian_skill_fanshe').name == 'xjzh_card_wuxian_skill_fanshe') return false;
							return Math.random() <= num;
						},
						content() {
							trigger.source.damage(trigger.num, trigger.source, trigger.nature);
							trigger.changeToZero();
							game.log('<span style="color: red">' + get.translation('xjzh_card_wuxian_skill') + '</span>效果触发,反射此次伤害');
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (!target.hasFriend()) return;
									if (get.tag(card, 'damage')) return [1.5, 1];
								},
							},
						},
					},
					zhufu: {
						trigger: {
							player: 'damageBegin',
						},
						forced: true,
						_priority: 9,
						firstDo: true,
						equipSkill: true,
						init(player) {
							var num = get.rand(30, 50);
							if (!player.storage.xjzh_card_wuxian_skill_zhufu) player.storage.xjzh_card_wuxian_skill_zhufu = num;
						},
						filter(event, player) {
							var num = player.storage.xjzh_card_wuxian_skill_zhufu;
							return Math.random() <= num;
						},
						content() {
							player.draw();
							game.log('<span style="color: red">' + get.translation('xjzh_card_wuxian_skill') + '</span>效果触发,' + get.translation(player) + '摸了1张牌');
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (!target.hasFriend()) return;
									if (get.tag(card, 'damage')) return [1.5, 1];
								},
							},
						},
					},
					jianren: {
						trigger: {
							player: 'damageAfter',
						},
						forced: true,
						_priority: 10,
						firstDo: true,
						equipSkill: true,
						init(player) {
							var num = get.rand(30, 50);
							if (!player.storage.xjzh_card_wuxian_skill_jianren) player.storage.xjzh_card_wuxian_skill_jianren = num;
						},
						filter(event, player) {
							var num = player.storage.xjzh_card_wuxian_skill_jianren;
							return Math.random() <= num;
						},
						content() {
							player.recover();
							game.log('<span style="color: red">' + get.translation('xjzh_card_wuxian_skill') + '</span>效果触发,' + get.translation(player) + '回复了1点体力');
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (!target.hasFriend()) return;
									if (get.tag(card, 'damage')) return [2, 1];
								},
							},
						},
					},
					jujiao: {
						trigger: {
							global: 'useCard2',
						},
						forced: true,
						_priority: 10,
						firstDo: true,
						equipSkill: true,
						init(player) {
							var num = get.rand(30, 50);
							if (!player.storage.xjzh_card_wuxian_skill_jujiao) player.storage.xjzh_card_wuxian_skill_jujiao = num;
						},
						filter(event, player) {
							var num = player.storage.xjzh_card_wuxian_skill_jujiao;
							if (!event.cards || !event.cards.length) return false;
							if (event.card.name != 'sha') return false;
							if (!event.targets || !event.targets.includes(player)) return false;
							return Math.random() <= num;
						},
						content() {
							trigger.targets.push(player);
							game.log('<span style="color: red">' + get.translation('xjzh_card_wuxian_skill') + '</span>效果触发,' + get.translation(trigger.player) + '使用的【杀】额外生效一次');
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (card.name == 'sha') return [1, 2];
								},
							},
						},
					},
					pomo: {
						trigger: {
							player: 'damageBegin',
						},
						forced: true,
						_priority: 13,
						firstDo: true,
						equipSkill: true,
						init(player) {
							var num = get.rand(30, 50);
							if (!player.storage.xjzh_card_wuxian_skill_pomo) player.storage.xjzh_card_wuxian_skill_pomo = num;
						},
						filter(event, player) {
							var num = player.storage.xjzh_card_wuxian_skill_pomo;
							if (!event.nature) return false;
							return Math.random() <= num;
						},
						content() {
							trigger.num++;
							game.log('<span style="color: red">' + get.translation('xjzh_card_wuxian_skill') + '</span>效果触发,' + get.translation(player) + '受到属性伤害+1');
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (get.nature(card)) return [1, 2];
								},
							},
						},
					},
					liuguang: {
						trigger: {
							target: 'useCardToTargeted',
						},
						forced: true,
						_priority: 12,
						firstDo: true,
						equipSkill: true,
						init(player) {
							var num = get.rand(30, 50);
							if (!player.storage.xjzh_card_wuxian_skill_liuguang) player.storage.xjzh_card_wuxian_skill_liuguang = num;
						},
						filter(event, player) {
							var num = player.storage.xjzh_card_wuxian_skill_liuguang;
							if (player.countCards('he') <= 0) return false;
							return !get.tag(event.card, 'damage') && Math.random() <= num;
						},
						content() {
							player.randomDiscard();
							game.log('<span style="color: red">' + get.translation('xjzh_card_wuxian_skill') + '</span>效果触发,' + get.translation(player) + '随机弃置1张牌');
						},
						ai: {
							effect: {
								target(card, player, target) {
									if (!get.tag(card, 'damage')) return [1, 2];
								},
							},
						},
					},
				},
			},
			xjzh_card_rongyankaijia_skill: {
				trigger: {
					player: 'damageBefore',
				},
				forced: true,
				_priority: 20,
				firstDo: true,
				equipSkill: true,
				marktext: `<img style=width:20px src=extension/仙家之魂/image/icon/xjzh_card_rongyankaijia.png>`,
				intro: {
					name: '熔岩铠甲',
					content(storage, player) {
						let num = 0;
						for (let list of storage) {
							num += list.find((evt) => {
								return typeof evt === 'number';
							});
						}
						return `${get.translation(num)}点伤害将于你的回合结束时结算`;
					},
				},
				filter(event, player) {
					if (player.hasSkillTag('unequip2')) return false;
					if (
						event.player.hasSkillTag('unequip', false, {
							name: event.card ? event.card.name : null,
							target: player,
							card: event.card,
						})
					)
						return false;
					return true;
				},
				async content(event, trigger, player) {
					let num = Math.ceil(trigger.num / 2);
					if (game.hasNature(trigger, 'fire')) {
						trigger.changeToZero();
						game.log(player, '受到熔岩铠甲影响,防止火焰伤害');
						return;
					} else {
						trigger.num -= num;
						if (!player.storage.xjzh_card_rongyankaijia_skill) player.storage.xjzh_card_rongyankaijia_skill = [];
						let list = [num, trigger.nature, 'notrigger'];
						list.push(trigger.source ? trigger.source : 'nosource');
						list.push(trigger.card ? trigger.card : 'nocard');
						player.storage.xjzh_card_rongyankaijia_skill.push(list);
						player.markSkill(event.name);
						let evt = event.getParent('phase');
						if (evt && evt.getParent && !evt.rongyankaijia_skill) evt.rongyankaijia_skill = true;
						if (evt && evt.getParent && evt.rongyankaijia_skill) {
							let next = game.createEvent('rongyankaijia_skill', false, evt.parent);
							next.player = player;
							next.setContent(() => {
								if (player.storage.xjzh_card_rongyankaijia_skill) {
									let storage = player.storage.xjzh_card_rongyankaijia_skill.slice(0);
									for (let damageList of storage) {
										if (player.isDead()) break;
										player.damage(...damageList.slice(0));
									}
									if (player.isAlive()) {
										delete player.storage.xjzh_card_rongyankaijia_skill;
										player.unmarkSkill('xjzh_card_rongyankaijia_skill');
									}
								}
							});
						}
					}
				},
				ai: {
					nofire: true,
					effect: {
						target(card, player, target, current) {
							if (target.hasSkillTag('unequip2')) return;
							if (
								player.hasSkillTag('unequip', false, {
									name: card ? card.name : null,
									target: target,
									card: card,
								})
							)
								return;
							if (game.hasNature(card, 'fire')) return 0;
							if (get.tag(card, 'fireDamage') && current < 0) return 0;
							return 0.5;
						},
					},
				},
			},
			xjzh_card_rongyankaijia_skill2: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				forced: true,
				_priority: 20,
				firstDo: true,
				equipSkill: true,
				mark: true,
				marktext: `<img style=width:20px src=extension/仙家之魂/image/icon/xjzh_card_rongyankaijia.png>`,
				intro: {
					name: '熔岩铠甲',
					content(storage, player) {
						let damageList = player.storage.xjzh_card_rongyankaijia_skill.slice(0);
						let num = 0;
						for (let list of damageList) {
							num += list.find((evt) => {
								return typeof evt === 'number';
							});
						}
						return `${get.translation(num)}点伤害将于你的回合结束时结算`;
					},
				},
				filter(event, player) {
					return player.storage.xjzh_card_rongyankaijia_skill && player.storage.xjzh_card_rongyankaijia_skill.length;
				},
				async content(event, trigger, player) {
					let storage = player.storage.xjzh_card_rongyankaijia_skill.slice(0);
					for await (let damageList of storage) {
						if (player.isDead()) break;
						player.damage(...damageList.slice(0)).set('rongyankaijia', true);
					}
					if (player.isAlive()) {
						delete player.storage.xjzh_card_rongyankaijia_skill;
						player.removeSkill('xjzh_card_rongyankaijia_skill2', true);
					}
				},
			},
			xjzh_card_xiejiaozhiguan_skill: {
				trigger: {
					player: ['addSkill', 'removeSkill'],
				},
				silent: true,
				_priority: Infinity,
				lastDo: true,
				filter(event, player) {
					var skill = event.skill;
					var info = get.info(skill);
					if (!info || !info.usable) return false;
					return true;
				},
				content() {
					'step 0';
					lib.card.xjzh_card_xiejiaozhiguan.onLose(player);
					('step 1');
					lib.card.xjzh_card_xiejiaozhiguan.onEquip(player);
				},
			},
			//开局获得增益技能
			_xjzh_zengyi_addSkills: {
				trigger: {
					global: ['gameStart'],
					player: ['phaseZhunbeiBefore', 'enterGame'],
				},
				silent: true,
				filter(event, player) {
					if (game.getExtensionConfig('仙家之魂', 'xjzh_zengyiSetting') === 'close') return false;
					if (get.mode() == 'boss') {
						if (['xjzh_boss_lilisi', 'xjzh_boss_duruier', 'xjzh_boss_waershen', 'xjzh_boss_geligaoli', 'xjzh_boss_qier', 'xjzh_boss_bingchuanjushou'].includes(get.nameList(game.boss)[0])) return false;
					}
					let list = get.xjzh_zengyiSkills(player);
					if (list.some((skill) => player.hasSkill(skill))) return false;
					if (player.hasSkill('xjzh_zengyi_off')) return false;
					if (!player.isUnderControl(true)) return false;
					if (get.is.playerNames(player, 'xjzh_sanguo_zuoyou')) return false;
					return true;
				},
				async content(event, trigger, player) {
					let list = get.xjzh_zengyiSkills(player);
					let skill = list.randomGet();
					player.addSkill('xjzh_zengyi_off', false);
					game.getExtensionConfig('仙家之魂', 'xjzh_zengyiSetting') == 'player' ? player.addSkills(skill) : get.isXHwujiang(player) ? player.addSkills(skill) : null;
				},
			},
			//获取角色初始法力值并显示
			_xjzh_skill_showMpCount: {
				trigger: {
					global: ['gameStart', 'roundStart'],
					player: 'enterGame',
				},
				silent: true,
				_priority: Infinity,
				firstDo: true,
				marktext: `<img style=width:20px src=extension/仙家之魂/image/icon/xjzh_skill_showMpCount.png>`,
				intro: {
					name: '魔力面板',
					content(storage, player) {
						let str = ``;
						if (player.xjzhHuixin) str += `<li>会心几率:${Math.round(player.xjzhHuixin * 100)}%`;
						if (player.xjzhReduce) str += `<li>消耗减免:${Math.round(player.xjzhReduce * 100)}%`;
						return str;
					},
				},
				init(player, skill) {
					player.storage[skill] = false;
				},
				filter(event, player) {
					if (player.storage._xjzh_skill_showMpCount == true) return false;
					if (!get.isXHwujiang(player)) return false;
					if (player.isOut()) return false;
					let nameList = get.nameList(player),
						num = 0;
					if (!Array.isArray(nameList) || !nameList.length) return false;
					for (let name of nameList) {
						if (!lib.character[name]) continue;
						if (lib.character[name].xjzhMp && get.is.object(lib.character[name].xjzhMp)) num++;
					}
					return num > 0;
				},
				async content(event, trigger, player) {
					let nameList = get.nameList(player),
						object;
					for (let name of nameList) {
						if (!lib.character[name]) continue;
						if (lib.character[name].xjzhMp && get.is.object(lib.character[name].xjzhMp)) {
							object = lib.character[name].xjzhMp;
							break;
						}
					}
					//if(!player.node.xjzhmp){
					await player.changexjzhmaxMp(object.maxMp);
					await player.changexjzhMp(object.mp);
					if (object.hasOwn('huixin')) {
						if (!player.xjzhHuixin) player.xjzhHuixin = object.huixin || 0;
						else player.xjzhHuixin += object.huixin;
					}
					if (object.hasOwn('reduce')) {
						if (!player.xjzhReduce) player.xjzhReduce = object.reduce || 0;
						else player.xjzhReduce += object.reduce;
					}
					//}
					player.markSkill(event.name);
					player.addSkill('xjzh_skill_showMpCounts');
					player.storage._xjzh_skill_showMpCount = true;
				},
			},
			xjzh_skill_showMpCounts: {
				trigger: {
					player: 'dieBegin',
				},
				silent: true,
				onremove(player, skill) {
					if (player.node.xjzhmp) {
						player.xjzhremoveMp();
						delete player.storage._xjzh_skill_showMpCount;
					}
				},
				filter(event, player) {
					if (!player.node.xjzhmp) return false;
					if (!player.storage._xjzh_skill_showMpCount) return false;
					return true;
				},
				async content(event, trigger, player) {
					lib.skill[event.name].onremove(player);
				},
			},
			// ---------------------------------------状态技能------------------------------------------//
			xjzh_intro_jufeng: {
				trigger: {
					player: 'damageBegin',
				},
				forced: true,
				popup: false,
				_priority: 9,
				mark: true,
				marktext: '风',
				intro: {
					name: '提速尾流',
					content(storage, player) {
						var str = '';
						str += '提速尾流:' + get.translation(storage) + '层<br>免伤几率:' + get.translation(storage) * 4 + '%<br>额外摸牌:' + Math.floor(get.translation(storage) / 2) + '<br>额外出杀／酒次数:' + Math.floor(get.translation(storage) / 5);
						return str;
					},
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha' || card.name == 'jiu') return num + Math.floor(player.countMark('xjzh_intro_jufeng') / 5);
					},
				},
				init(player, skill) {
					player.storage.xjzh_intro_jufeng == 0;
				},
				filter(event, player) {
					return Math.random() <= player.countMark('xjzh_intro_jufeng') * 0.03;
				},
				group: ['xjzh_intro_jufeng_mopai'],
				content() {
					trigger.cancel();
				},
				subSkill: {
					mopai: {
						trigger: {
							player: 'phaseDrawBegin',
						},
						forced: true,
						popup: false,
						filter(event, player) {
							return player.hasMark('xjzh_intro_jufeng');
						},
						content() {
							trigger.num += Math.floor(player.countMark('xjzh_intro_jufeng') / 2);
						},
					},
				},
			},
			// ---------------------------------------增益技能------------------------------------------//
			xjzh_zengyi_off: {
				fixed: true,
				charlotte: true,
				persevereSkill: true,
				superCharlotte: true,
				onremove(player) {
					player.addSkill('xjzh_zengyi_off');
				},
			},
			xjzh_zengyi_mieque: {
				trigger: {
					global: ['damageBegin', 'dying'],
				},
				mark: true,
				marktext: '灭',
				intro: {
					name: '灭却',
					content: '锁定技,你对其他角色造成伤害时,你令其随机失去等量技能.未拥有技能的其他角色跳过濒死阶段.',
				},
				forced: true,
				persevereSkill: true,
				global: 'xjzh_zengyi_mieque_dying',
				filter(event, player) {
					if (event.name == 'dying') return event.player != player;
					if (event.numFixed || event.cancelled) return false;
					let skills = event.player.getSkills(null, false, false).filter((skill) => {
						if (skill.startsWith('jycw')) return false;
						return lib.translate[skill] && lib.translate[skill + '_info'];
					});
					if (event.source == player) return event.player != player;
					return !skills.length;
				},
				async content(event, trigger, player) {
					let num = trigger.num,
						skills = trigger.player.getSkills(null, false, false).filter((skill) => {
							if (skill.startsWith('jycw')) return false;
							return lib.translate[skill] && lib.translate[skill + '_info'];
						});
					if (skills.length) await trigger.player.removeSkills(skills.randomGets(num));
					if (trigger.name == 'dying' && !skills.length) trigger.player.die(trigger.source ? trigger.source : 'nosource');
				},
			},
			xjzh_zengyi_weisong: {
				trigger: {
					global: ['phaseZhunbeiBegin'],
				},
				mark: true,
				persevereSkill: true,
				marktext: '威',
				intro: {
					name: '威讼',
					content: '其他角色的准备阶段,你可以令其进行一次判定,若为♠️️,其跳过出牌阶段.',
				},
				check(event, player) {
					return -get.attitude(player, event.player);
				},
				filter(event, player) {
					return event.player != player;
				},
				prompt(event, player) {
					return `〖威讼〗:${get.translation(event.player)}的准备阶段是否发动【威讼】？`;
				},
				async content(event, trigger, player) {
					const judgeEvent = await player.judge((card) => {
						if (card.suit == 'heart') return -2;
						if (card.suit == 'spade') return 2;
						return -1;
					});
					judgeEvent.judge2 = (result) => result.bool;
					const {
						result: { judge },
					} = judgeEvent;
					if (judge < 0) return;
					trigger.player.skip('phaseUse');
				},
			},
			xjzh_zengyi_liuzhuan: {
				trigger: {
					global: ['loseAfter', 'changeSkillsAfter'],
				},
				forced: true,
				persevereSkill: true,
				mark: true,
				marktext: '流',
				intro: {
					name: '流转',
					content: '锁定技,当其他角色弃置牌或失去技能后,你获得之.',
				},
				filter(event, player, name) {
					if (event.player == player) return false;
					if (name == 'loseAfter') {
						if (event.type != 'discard' || event.getlx === false) return false;
						let cards = event.cards.slice(0);
						let evt = event.getl(player);
						if (evt && evt.cards) cards.removeArray(evt.cards);
						for (let card of cards) {
							if (card.original != 'j' && get.position(card, true) == 'd') return true;
						}
					}
					return event.removeSkill.length;
				},
				async content(event, trigger, player) {
					let name = event.triggername;
					if (name == 'changeSkillsAfter') player.addSkills(trigger.removeSkill);
					else {
						let cards = trigger.cards.slice(0),
							evt = trigger.getl(player);
						if (evt && evt.cards) cards.removeArray(evt.cards);
						let gainCards = cards.filter((card) => {
							return card.original != 'j' && get.position(card, true) == 'd';
						});
						if (gainCards.length) player.gain(gainCards, 'gain2', 'log');
					}
				},
			},
			xjzh_zengyi_pianxian: {
				trigger: {
					player: ['useSkillAfter', 'logSkill'],
				},
				forced: true,
				mark: true,
				persevereSkill: true,
				marktext: '翩',
				intro: {
					name: '翩跹',
					content: '锁定技,你<每回合限x次>和<出牌阶段限x次>的技能无次数限制',
				},
				filter(event, player) {
					let skill = event.skill || event.sourceSkill;
					if (skill.startsWith('xjzh_zengyi_pianxian')) return false;
					let skills = player.getSkills(null, false, false).filter((skill) => {
						let info = get.info(skill),
							str = get.skillInfoTranslation(skill, player);
						if (!info || !info.usable) return false;
						if (typeof info.usable != 'number') return false;
						if (lib.skill.global.includes(skill)) return false;
						if (skill.startsWith('jycw')) return false;
						return ['出牌阶段限', '每回合限'].some((item) => str.includes(item));
					});
					return skills.length;
				},
				async content(event, trigger, player) {
					let skills = player.getSkills(null, false, false).filter((skill) => {
						let info = get.info(skill),
							str = get.skillInfoTranslation(skill, player);
						if (!info || !info.usable) return false;
						if (typeof info.usable != 'number') return false;
						if (lib.skill.global.includes(skill)) return false;
						if (skill.startsWith('jycw')) return false;
						return ['出牌阶段限', '每回合限'].some((item) => str.includes(item));
					});
					for await (let skill of skills) {
						let expandSkills = game.expandSkills([skill]);
						expandSkills.forEach((item) => (player.getStat('skill')[item] = 0));
					}
				},
			},
			xjzh_zengyi_zhuanpo: {
				trigger: {
					global: 'dying',
				},
				mark: true,
				persevereSkill: true,
				marktext: '转',
				intro: {
					name: '转魄',
					content: '限定技,当一名角色濒死时,你将其主将替换为任意你选择的武将牌.',
				},
				limited: true,
				check(event, player) {
					return get.attitude(event.player, player);
				},
				prompt(event, player) {
					return `〖转魄〗:${get.translation(event.player)}濒死,是否发动技能替换其主将武将牌？`;
				},
				filter(event, player) {
					return !player.storage.xjzh_zengyi_zhuanpo;
				},
				async content(event, trigger, player) {
					player.awakenSkill('xjzh_zengyi_zhuanpo');
					let list = game
						.xjzh_wujiangpai()
						.filter((name) => {
							return 'xjzh_sanguo_zuoyou' != name;
						}) //QQQ
						.randomGets(30);
					const { links } = await player
						.chooseButton(true)
						.set('createDialog', ['〖转魄〗:请选择一张武将牌', [list, 'character']])
						.forResult();

					trigger.player.reinit(trigger.player.name1, links[0], [trigger.player.hp, trigger.player.maxHp]);
					trigger.player.recoverTo(trigger.player.maxHp);
				},
			},
			xjzh_zengyi_daoge: {
				trigger: {
					player: 'dieBefore',
				},
				silent: true,
				mark: true,
				persevereSkill: true,
				marktext: '倒',
				intro: {
					name: '倒戈',
					content: '锁定技,当你即将阵亡时,若你的身份为忠臣/反贼且体力上限大于1,你失去一半的体力上限(向下取整),将身份改为反贼/忠臣,终止阵亡结算并回复体力至体力上限,若此时满足你所在阵营的胜利条件,你获得胜利.',
				},
				filter(event, player) {
					return player.maxHp > 1 && ['zhong', 'fan'].includes(player.identity);
				},
				async content(event, trigger, player) {
					trigger.cancel(null, null, 'notrigger');
					let num = Math.floor(player.maxHp / 2);
					await player.loseMaxHp(num);
					player.recoverTo(player.maxHp);
					var id = player.identity,
						id2;
					switch (id) {
						case 'fan':
							id2 = 'zhong';
							break;
						case 'zhong':
							id2 = 'fan';
							break;
					}
					player.identity = id2;
					player.setIdentity(id2);
					player.showIdentity();
					player.update();
					game.log(player, '发动了技能', '#g〖' + get.translation('xjzh_zengyi_daoge') + '〗', '将身份改为了', '#y' + get.translation(id2));
					if (player.identity == 'zhong') {
						if (!game.hasPlayer((current) => current.identity == 'fan' || current.identity == 'nei')) game.over(true);
					}
				},
			},
			xjzh_zengyi_chongsu: {
				trigger: {
					global: 'gameStart',
					player: 'enterGame',
				},
				silent: true,
				mark: true,
				persevereSkill: true,
				marktext: '重',
				intro: {
					name: '重塑',
					translations: '锁定技,游戏开始时/你获得该技能时,你自定义你的回合.',
					content(storage, player) {
						if (!player.storage.xjzh_zengyi_chongsu) return '游戏开始时,你可以自定义你的回合.';
						let phase = {
							phaseZhunbei: '准备',
							phaseJudge: '判定',
							phaseDraw: '摸牌',
							phaseUse: '出牌',
							phaseDiscard: '弃牌',
							phaseJieshu: '结束',
						},
							str = '';
						let object = {
							phaseZhunbei: [storage.phaseZhunbei, phase[storage.phaseZhunbei]],
							phaseJudge: [storage.phaseJudge, phase[storage.phaseJudge]],
							phaseDraw: [storage.phaseDraw, phase[storage.phaseDraw]],
							phaseUse: [storage.phaseUse, phase[storage.phaseUse]],
							phaseDiscard: [storage.phaseDiscard, phase[storage.phaseDiscard]],
							phaseJieshu: [storage.phaseJieshu, phase[storage.phaseJieshu]],
						};
						for (var i in object) {
							switch (i) {
								case 'phaseZhunbei':
									str += `&emsp;&emsp;准备阶段:${object[i][1]}阶段<br>`;
									break;
								case 'phaseJudge':
									str += `&emsp;&emsp;判定阶段:${object[i][1]}阶段<br>`;
									break;
								case 'phaseDraw':
									str += `&emsp;&emsp;摸牌阶段:${object[i][1]}阶段<br>`;
									break;
								case 'phaseUse':
									str += `&emsp;&emsp;出牌阶段:${object[i][1]}阶段<br>`;
									break;
								case 'phaseDiscard':
									str += `&emsp;&emsp;弃牌阶段:${object[i][1]}阶段<br>`;
									break;
								case 'phaseJieshu':
									str += `&emsp;&emsp;结束阶段:${object[i][1]}阶段`;
									break;
							}
						}
						return str;
					},
				},
				onremove(player, skill) {
					delete player.storage.xjzh_zengyi_chongsu;
				},
				init(player, skill) {
					if (game.roundNumber > 0) player.useSkill('xjzh_zengyi_chongsu', player);
				},
				group: 'xjzh_zengyi_chongsu_mod',
				async content(event, trigger, player) {
					let phaseList = ['准备', '判定', '摸牌', '出牌', '弃牌', '结束'],
						num = 0;
					let objects = {
						phaseZhunbei: 'phaseZhunbei',
						phaseJudge: 'phaseJudge',
						phaseDraw: 'phaseDraw',
						phaseUse: 'phaseUse',
						phaseDiscard: 'phaseDiscard',
						phaseJieshu: 'phaseJieshu',
					};
					if (!player.storage.xjzh_zengyi_chongsu) player.storage.xjzh_zengyi_chongsu = objects;
					while (num < 6) {
						let count = phaseList[num];
						let dialog = ui.create.dialog(`〖重塑〗:请选择将${count}阶段替换为你选择阶段`, 'forcebutton');
						const { control } = await player
							.chooseControl(phaseList, true)
							.set('dialog', dialog)
							.set('ai', function () {
								return phaseList.randomGet();
							})
							.forResult();

						if (control) {
							let phases = {
								准备: 'phaseZhunbei',
								判定: 'phaseJudge',
								摸牌: 'phaseDraw',
								出牌: 'phaseUse',
								弃牌: 'phaseDiscard',
								结束: 'phaseJieshu',
							};
							let objects = player.storage.xjzh_zengyi_chongsu;
							objects[Object.keys(objects)[num]] = phases[control];
							player.storage.xjzh_zengyi_chongsu = objects;
							num++;
						}
					}
				},
				subSkill: {
					mod: {
						trigger: {
							player: ['phaseBegin'],
						},
						forced: true,
						_priority: 100,
						filter(event, player) {
							if (!player.storage.xjzh_zengyi_chongsu) return false;
							return true;
						},
						async content(event, trigger, player) {
							let objects = player.storage.xjzh_zengyi_chongsu,
								phaseList = [];
							for (var i in objects) {
								phaseList.push(objects[i]);
							}
							trigger.phaseList = phaseList;
						},
					},
				},
			},
			xjzh_zengyi_shunying: {
				trigger: {
					global: 'roundStart',
				},
				filter(event, player) {
					return !player.hasSkill('xjzh_zengyi_shunying_off') && game.roundNumber > 0;
				},
				charlotte: true,
				forced: true,
				mark: true,
				persevereSkill: true,
				marktext: '瞬',
				intro: {
					name: '瞬影',
					content: '锁定技,每轮游戏开始前,你执行一个额外的回合,其他角色于此回合内非锁定技无效',
				},
				async content(event, trigger, player) {
					player.addTempSkill('xjzh_zengyi_shunying_off');
					game.countPlayer(function (current) {
						if (current != player) current.addTempSkill('fengyin', 'phaseAfter');
					});
					player.phase('xjzh_zengyi_shunying');
				},
				subSkill: { off: { sub: true } },
			},
			xjzh_zengyi_fengyue: {
				trigger: {
					player: 'phaseBegin',
				},
				mark: true,
				persevereSkill: true,
				silent: true,
				marktext: '风',
				intro: {
					name: '风月',
					content: '锁定技,回合开始时,你随机获得一个女性角色的技能.',
				},
				async content(event, trigger, player) {
					let characterlist = game.xjzh_wujiangpai(null, null, false).filter((name) => {
						if (!lib.character[name][3] || !lib.character[name][3].length) return false;
						return lib.character[name][0] == 'female';
					});
					const skills = new Array();
					for await (let name of characterlist) {
						skills.addArray(
							lib.character[name][3].filter(function (skill) {
								var info = lib.skill[skill];
								return info && !info.charlotte && !info.dutySkill && !info.juexingji && !info.limited && !info.unique && !info.sub;
							})
						);
					}
					player.addSkillLog(skills.randomGet());
				},
			},
			xjzh_zengyi_hunqian: {
				enable: 'phaseUse',
				popup: false,
				mark: true,
				persevereSkill: true,
				marktext: '魂',
				intro: {
					name: '魂牵',
					content: '出牌阶段限一次,你可以交换两名角色的手牌、体力、体力上限之一',
				},
				usable: 1,
				filterTarget: true,
				selectTarget: 2,
				multitarget: true,
				multiline: true,
				async content(event, trigger, player) {
					const targets = event.targets.slice(0);
					const controlList = [`交换${get.translation(targets[0])}和${get.translation(targets[1])}的体力`, `交换${get.translation(targets[0])}和${get.translation(targets[1])}的体力上限`, `交换${get.translation(targets[0])}和${get.translation(targets[1])}的手牌`];
					if (targets[0].countCards('h') == 0 && targets[1].countCards('h') == 0) controlList.remove(controlList[2]);
					const { bool, control, index } = await player
						.chooseControlList(get.prompt(event.name, player), controlList)
						.set('ai', (event, player) => {
							let att = get.attitude(targets[0], player);
							let att2 = get.attitude(targets[1], player);
							if (att > 0) {
								if (targets[0].hp < targets[1].hp) return 1;
								return 0;
							}
							if (att2 > 0) {
								if (targets[1].hp < targets[0].hp) return 1;
								return 0;
							}
							return Math.random();
						})
						.set('targets', targets)
						.forResult();
					if (control != 'cancel2') {
						switch (index) {
							case 0:
								{
									targets[0].hp ^= targets[1].hp;
									targets[1].hp ^= targets[0].hp;
									targets[0].hp ^= targets[1].hp;
									game.log(targets[0], '与', targets[1], '交换了体力值');
								}
								break;
							case 1:
								{
									targets[0].maxHp ^= targets[1].maxHp;
									targets[1].maxHp ^= targets[0].maxHp;
									targets[0].maxHp ^= targets[1].maxHp;
									game.log(targets[0], '与', targets[1], '交换了体力上限');
								}
								break;
							case 2:
								{
									targets[0].swapHandcards(targets[1]);
									game.log(targets[0], '与', targets[1], '交换了手牌');
								}
								break;
						}
						targets[0].update();
						targets[1].update();
					}
				},
				ai: {
					order: 12,
					result: {
						player: 1,
					},
				},
			},
			xjzh_zengyi_mengdie: {
				trigger: {
					player: 'damageAfter',
				},
				popup: false,
				mark: true,
				persevereSkill: true,
				marktext: '梦',
				intro: {
					name: '梦蝶',
					content: '当你受到伤害后,你可以令两名角色交换你指定的一个技能',
				},
				prompt: '〖梦蝶〗:选择两个角色交换你指定的一个技能',
				check() {
					return 1;
				},
				async content(event, trigger, player) {
					let skills = new Array();
					const { targets } = await player
						.chooseTarget('〖梦蝶〗:选择交换两名角色一个你指定的技能', 2, (card, player, target) => {
							return target.getSkills(null, false, false).filter(function (skill) {
								let info = lib.skill[skill];
								if (info && (info.cardSkill || info.equipSkill || info.nogainsSkill)) return false;
								return lib.translate[skill] && lib.translate[skill + '_info'];
							}).length;
						})
						.set('ai', (target) => {
							return Math.random();
						})
						.forResult();

					if (targets) {
						for await (let target of targets) {
							let list = target.getSkills(null, false, false).filter(function (skill) {
								let info = lib.skill[skill];
								if (info && (info.cardSkill || info.equipSkill || info.nogainsSkill)) return false;
								return lib.translate[skill] && lib.translate[skill + '_info'];
							});
							if (event.isMine()) {
								var dialog = ui.create.dialog('forcebutton');
								dialog.add('请选择获得一项技能');
								for (var i = 0; i < list.length; i++) {
									if (lib.translate[list[i] + '_info']) {
										var translation = get.translation(list[i]);
										if (translation[0] == '新' && translation.length == 3) {
											translation = translation.slice(1, 3);
										} else {
											translation = translation.slice(0, 2);
										}
										var item = dialog.add('<div class="popup pointerdiv" style="width:95%;display:inline-block"><div class="skill">〖' + translation + '〗</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
										item.firstChild.link = list[i];
									}
								}
							}
							const { control } = await player
								.chooseControl(list)
								.set('prompt', '〖梦蝶〗:请选择一项技能')
								.set('ai', () => {
									return list.randomGet();
								})
								.set('dialog', dialog)
								.forResult();

							if (control) skills.push(control);
						}
						if (skills.length) {
							targets[0].changeSkills(Array.of(skills[1]), Array.of(skills[0]));
							targets[1].changeSkills(Array.of(skills[0]), Array.of(skills[1]));
						}
					}
				},
			},
			xjzh_zengyi_poxiao: {
				trigger: {
					player: 'phaseBefore',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '破',
				intro: {
					name: '破晓',
					content: '锁定技,回合开始时,你重置已发动的限定技',
				},
				filter(event, player) {
					let list = player.getSkills(null, false, false).filter(function (skill) {
						var info = lib.skill[skill];
						return info && info.limited && !info.juexingji && player.awakenedSkills.includes(skill);
					});
					if (list.length) return true;
					return false;
				},
				async content(event, trigger, player) {
					let list = player.getSkills(null, false, false).filter(function (skill) {
						var info = lib.skill[skill];
						return info && info.limited && !info.juexingji;
					});
					if (list.length) {
						if (player.storage.xjzh_wzry_tiannaiaudio) {
							game.playXH(['xjzh_wzry_tiannai1', 'xjzh_wzry_tiannai2', 'xjzh_wzry_tiannai3', 'xjzh_wzry_tiannai4'].randomGet());
						}
						player.restoreSkill(list);
					}
				},
			},
			xjzh_zengyi_shuangsheng: {
				trigger: {
					player: 'enterGame',
					global: 'gameStart',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '双',
				intro: {
					name: '双生',
					content: '锁定技,游戏开始时,你选择并获得至多两个其他增益技能',
				},
				async content(event, trigger, player) {
					let skills = get.xjzh_zengyiSkills(player),
						cards = [];
					for (var i of skills) {
						lib.card[i] = {
							fullskin: false,
							image: 'ext:仙家之魂/image/avatar/xjzh_avatar_zengyi.png',
						};
						var info = get.info(i);
						lib.translate[i + '_info'] = info.intro.content;
						if (lib.card[i]) cards.addArray([i]);
					}
					let dialog = ui.create.dialog('〖双生〗:请选择获得至多两个技能', [cards, 'vcard'], 'hidden');
					const [bool, links] = await player
						.chooseButton(dialog, true, [1, 2])
						.set('ai', (button) => {
							return Math.random();
						})
						.forResult('bool', 'links');
					if (bool) {
						for (var i of skills) {
							delete lib.translate[i + '_info'];
						}
						for (let link of links) {
							//for(var i=0;i<result.links.length;i++){
							player.addSkill(link[2]);
							game.log(player, '获得了技能', '#g〖' + get.translation(link[2]) + '〗');
							//添加获得一个动画
							var card = game.createCard('xjzh_zengyi_shuangsheng_card');
							player.$gain2(card);
						}
						player.update();
					}
				},
			},
			xjzh_zengyi_xuanbian: {
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '玄',
				intro: {
					name: '玄变',
					content: '你获得该技能时,你可以将牌堆牌名相同的一种非装备牌替换为另一种',
				},
				init(player) {
					let next = game.createEvent('xjzh_zengyi_xuanbian_add', false);
					next.player = player;
					next.setContent(lib.skill.xjzh_zengyi_xuanbian.contentList);
				},
				async contentList(event, trigger, player) {
					let list = [];
					for await (let name of lib.inpile) {
						let type = get.type(name);
						if (type != 'xjzh_danyao' && type != 'equip') list.push(name);
					}
					if (!list.length) return;
					const { links } = await player
						.chooseButton(['〖玄变〗:选择至多牌名不一致的牌,先选的牌被替换', [list, 'vcard']])
						.set('ai', (button) => {
							let card = { name: button.link[2] };
							return 12 - get.value(card);
						})
						.set('complexSelect', true)
						.set('selectButton', [2, 2])
						.set('filterButton', (button) => {
							if (!ui.selected.buttons.length) return true;
							let selected = ui.selected.buttons;
							for (var i of selected) {
								if (button.link[2] == i.link[2]) return false;
							}
							return true;
						})
						.forResult();

					if (links) {
						let name = links[0][2],
							name2 = links[1][2];
						lib.skill.xjzh_zengyi_xuanbian.replaceCard(name, name2);
						lib.inpile.remove(name);
						game.log(player, '将牌堆所有的', '#y〖' + get.translation(links[0][2]) + '〗', '替换为了', '#y〖' + get.translation(links[1][2]) + '〗');
					}
				},
				async replaceCard(oldCard, newCard) {
					let oldCardList = [],
						newCardList = [];
					//先替换牌堆的牌
					let cards = Array.from(ui.cardPile.childNodes);
					for (let card of cards) {
						if (card.name == oldCard) {
							oldCardList.push(card);
							newCardList.push(game.createCard2(newCard, card.suit, card.number));
						}
					}
					//将弃牌堆的牌替换
					cards = Array.from(ui.discardPile.childNodes);
					for (let card of cards) {
						if (card.name == oldCard) {
							oldCardList.push(card);
							newCardList.push(game.createCard2(newCard, card.suit, card.number));
						}
					}
					//将玩家的牌替换
					let targets = game.filterPlayer((current) => {
						return current.countCards('hej', (card) => {
							return card.name == oldCard;
						});
					});
					if (targets.length) {
						while (targets.length) {
							let target = targets.shift();
							cards = target.getCards('hej', (card) => card.name == oldCard);
							for (let card of cards) {
								target.lose(card, ui.special)._triggered = null;
								target.gain(game.createCard2(newCard, card.suit, card.number))._triggered = null;
							}
						}
					}
					game.cardsGotoSpecial(oldCardList);
					game.cardsGotoPile(newCardList);
					game.washCard();
					if (game.shuffleNumber) game.shuffleNumber--;
				},
			},
			xjzh_zengyi_moran: {
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '墨',
				intro: {
					name: '墨染',
					content: '锁定技,你使用黑色牌无法被其他角色响应.',
				},
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(event, player) {
					return get.color(event.card) == 'black';
				},
				async content(event, trigger, player) {
					trigger.parent.directHit.add(trigger.target);
				},
				ai: {
					directHit_ai: true,
				},
			},
			xjzh_zengyi_shenghua: {
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '升',
				intro: {
					name: '升华',
					content: '锁定技,你造成属性伤害+1.',
				},
				trigger: {
					source: 'damageBegin1',
				},
				filter(event, player) {
					return game.hasNature(event);
				},
				async content(event, trigger, player) {
					trigger.num++;
				},
			},
			xjzh_zengyi_chaoti: {
				mark: true,
				persevereSkill: true,
				marktext: '超',
				intro: {
					name: '超体',
					content: '锁定技,你使用牌无距离和次数限制.',
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha' || card.name == 'jiu') return Infinity;
					},
					targetInRange(card, player, target, now) {
						return true;
					},
				},
				forced: true,
				_priority: 9,
				trigger: { player: 'useCard1' },
				filter(event, player) {
					return (event.card.name == 'sha' || event.card.name == 'jiu') && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
				},
				content() { },
				ai: {
					unequip: true,
					skillTagFilter(player, tag, arg) {
						if (!get.zhu(player, 'shouyue')) return false;
						if (arg && (arg.name == 'sha' || arg.name == 'jiu')) return true;
						return false;
					},
				},
			},
			xjzh_zengyi_jinghong: {
				trigger: {
					player: ['phaseDiscardBegin', 'phaseJudgeBegin'],
				},
				filter(event, player) {
					if (event.name == 'phaseDiscard') return player.needsToDiscard();
					return player.countCards('j');
				},
				forced: true,
				_priority: 9,
				mark: true,
				mark: true,
				persevereSkill: true,
				marktext: '惊',
				intro: {
					name: '惊鸿',
					content: '锁定技,你跳过弃牌阶段和判定阶段.',
				},
				async content(event, trigger, player) {
					trigger.cancel(null, null, 'notrigger');
				},
			},
			xjzh_zengyi_shefan: {
				trigger: {
					target: 'useCardToTargeted',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '蛇',
				intro: {
					name: '蛇幡',
					content: '锁定技,你成为杀的目标后你与友方各摸一张牌.',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				async content(event, trigger, player) {
					let list = player.getFriends(true).sortBySeat();
					for (let target of list) {
						await target.draw();
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							var num = target.getFriends().sortBySeat().length;
							if (card.name == 'sha') return [num, 0.6];
						},
					},
				},
			},
			xjzh_zengyi_longfei: {
				trigger: {
					global: 'phaseDrawBegin',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '龙',
				intro: {
					name: '龙飞',
					content: '锁定技,你与友方摸牌阶段摸牌数量+2.',
				},
				filter(event, player) {
					return player.getFriends(true).includes(event.player);
				},
				async content(event, trigger, player) {
					trigger.num += 2;
				},
			},
			xjzh_zengyi_yunchui: {
				trigger: {
					target: 'useCardToTargeted',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '云',
				intro: {
					name: '云垂',
					content: '锁定技,你成为杀的目标时令所有敌方角色弃置一张牌.',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				async content(event, trigger, player) {
					let list = player
						.getEnemies()
						.sortBySeat()
						.filter((target) => target.countCards('he'));
					if (!list.length) return;
					for (let target of list) {
						await target.chooseToDiscard('he', true);
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							var num = target.getEnemies().sortBySeat().length;
							if (card.name == 'sha') return [num, 0.6];
						},
					},
				},
			},
			xjzh_zengyi_fengyang: {
				trigger: {
					global: 'useCardToPlayered',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '风',
				intro: {
					name: '风扬',
					content: '锁定技,你与友方成为锦囊牌的目标后摸一张牌.',
				},
				filter(event, player) {
					if (get.type(event.card, 'trick') != 'trick') return false;
					return player.getFriends(true).includes(event.target);
				},
				async content(event, trigger, player) {
					trigger.target.draw();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.type(card, 'trick') == 'trick') return [1, 0.6];
						},
					},
				},
			},
			xjzh_zengyi_dizai: {
				trigger: {
					global: 'phaseEnd',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '地',
				intro: {
					name: '地载',
					content: '锁定技,你与友方回合结束时摸两张牌.',
				},
				filter(event, player) {
					return player.getFriends(true).includes(event.player);
				},
				async content(event, trigger, player) {
					trigger.player.draw(2);
				},
			},
			xjzh_zengyi_tianfu: {
				trigger: {
					global: 'damageBegin',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '天',
				intro: {
					name: '天覆',
					content: '锁定技,你与友方造成伤害+1.',
				},
				filter(event, player) {
					if (event.numFixed || event.cancelled) return false;
					return player.getFriends(true).includes(event.source);
				},
				async content(event, trigger, player) {
					trigger.num++;
				},
				ai: {
					damageBonus: true,
				},
			},
			xjzh_zengyi_jiehuo: {
				trigger: {
					player: 'phaseEnd',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '火',
				intro: {
					name: '劫火',
					content: '锁定技,你的回合结束时,你随机对场上体力最多的一名敌方造成一点火焰伤害.',
				},
				async content(event, trigger, player) {
					let list = player
						.getEnemies()
						.sortBySeat()
						.filter((target) => target.isMaxHp());
					if (!list.length) return;
					let target = list.randomGet();
					target.damage(1, 'fire', player);
				},
			},
			xjzh_zengyi_xuanbing: {
				trigger: {
					player: 'phaseBefore',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '冰',
				intro: {
					name: '玄冰',
					content: '锁定技,回合开始时令一名随机敌方角色弃置两张牌.',
				},
				async content(event, trigger, player) {
					let list = player
						.getEnemies()
						.sortBySeat()
						.filter((target) => target.countCards('he'));
					if (!list.length) return;
					let target = list.randomGet();
					target.chooseToDiscard('he', 2, true);
				},
			},
			xjzh_zengyi_jifeng: {
				trigger: {
					player: ['phaseEnd', 'phaseBegin'],
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '疾',
				intro: {
					name: '疾风',
					content: '回合开始/结束时你可以视对一名攻击范围内的敌方角色使用一张不计入次数的杀',
				},
				async content(event, trigger, player) {
					let list = player
						.getEnemies()
						.sortBySeat()
						.filter((target) => target.inRangeOf(player));
					if (!list.length) return;
					player
						.chooseUseTarget({ name: 'sha' }, list, false)
						.set('addCount', false)
						.set('prompt', '选择一名角色视为对其使用一张杀')
						.set('ai', (target) => {
							return -get.attitude(target, player);
						}); //QQQ
				},
			},
			xjzh_zengyi_jinglei: {
				trigger: {
					player: 'phaseEnd',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '雷',
				intro: {
					name: '惊雷',
					content: '锁定技,回合结束时随机对场上体力最少的一名敌方造成一点雷属性伤害.',
				},
				async content(event, trigger, player) {
					let list = player
						.getEnemies()
						.sortBySeat()
						.filter((target) => target.isMinHp());
					if (!list.length) return;
					let target = list.randomGet();
					target.damage(1, 'thunder', player);
				},
			},
			xjzh_zengyi_lieshi: {
				trigger: {
					player: 'phaseBegin',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '石',
				intro: {
					name: '裂石',
					content: '锁定技,回合开始时令一名敌方角色弃置所有装备牌.',
				},
				async content(event, trigger, player) {
					let list = player
						.getEnemies()
						.sortBySeat()
						.filter((target) => target.countCards('e'));
					if (list.length) {
						const [bool, links] = await player
							.chooseButton(ui.create.dialog('〖裂石〗:选择一名角色弃置其所有装备牌', list))
							.set('ai', (button) => {
								return -get.attitude(player, button.link);
							})
							.forResult('bool', 'links');
						if (links && bool) {
							links[0].discard(links[0].getCards('e'));
						}
					}
				},
			},
			xjzh_zengyi_lingxu: {
				trigger: {
					player: 'phaseEnd',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '灵',
				intro: {
					name: '灵虚',
					content: '锁定技,回合结束时随机令场上体力最少的一名友方回复一点体力.',
				},
				async content(event, trigger, player) {
					let list = player
						.getFriends(true)
						.sortBySeat()
						.filter((target) => target.isMinHp());
					if (!list.length) return;
					let target = list.randomGet();
					target.recover();
				},
			},
			xjzh_zengyi_lianyu: {
				trigger: {
					player: 'phaseEnd',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '炼',
				intro: {
					name: '炼狱',
					content: '锁定技,你的回合结束时令场上所有敌方角色失去一点体力.',
				},
				async content(event, trigger, player) {
					let list = player.getEnemies().sortBySeat();
					for (let target of list) {
						await target.loseHp();
					}
				},
			},
			xjzh_zengyi_raoliang: {
				trigger: {
					global: 'turnOverBegin',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '梁',
				intro: {
					name: '绕梁',
					content: '锁定技,你与友方无法被翻面.',
				},
				filter(event, player) {
					return player.getFriends(true).includes(event.player);
				},
				async content(event, trigger, player) {
					if (!trigger.player.isTurnedOver()) {
						trigger.cancel(null, null, 'notrigger');
					} else {
						trigger.player.turnOver(false);
					}
				},
			},
			xjzh_zengyi_difu: {
				trigger: {
					global: ['gameDrawBegin', 'dieAfter'],
					player: 'enterGame',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '地',
				intro: {
					name: '地缚',
					content: '锁定技,你的下家敌方角色非锁定技失效.',
				},
				filter(event, player) {
					var next = player.next;
					if (next) {
						return !next.hasSkill('fengyin') && next.isEnemiesOf(player);
					}
					return false;
				},
				async content(event, trigger, player) {
					let next = player.next;
					if (next) {
						if (!next.hasSkill('fengyin') && next.isEnemiesOf(player)) {
							next.addSkill('fengyin');
						}
					}
				},
			},
			xjzh_zengyi_tianze: {
				trigger: {
					global: ['phaseZhunbeiBegin', 'dieAfter'],
					player: 'enterGame',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '天',
				intro: {
					name: '天择',
					content: '锁定技,你的上家敌方角色非锁定技失效.',
				},
				filter(event, player) {
					var previous = player.previous;
					if (previous) {
						return !previous.hasSkill('fengyin') && previous.isEnemiesOf(player);
					}
					return false;
				},
				async content(event, trigger, player) {
					let previous = player.previous;
					if (previous) {
						if (!previous.hasSkill('fengyin') && previous.isEnemiesOf(player)) {
							previous.addSkill('fengyin');
						}
					}
				},
			},
			xjzh_zengyi_zhangyi: {
				trigger: {
					player: 'phaseBegin',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '义',
				intro: {
					name: '仗义',
					content: '锁定技,你的回合开始时,弃置所有友方角色判定区的牌.',
				},
				async content(event, trigger, player) {
					let list = player
						.getFriends(true)
						.sortBySeat()
						.filter((target) => target.countCards('j'));
					if (!list.length) return;
					for (let target of list) {
						target.discard(target.getCards('j'));
					}
				},
			},
			xjzh_zengyi_tunshi: {
				trigger: {
					global: 'dieEnd',
				},
				forced: true,
				_priority: 9,
				mark: true,
				persevereSkill: true,
				marktext: '吞',
				intro: {
					name: '吞噬',
					content: '锁定技,其他角色死亡后,你获得其所有技能.',
				},
				filter(event, player) {
					return event.player != player;
				},
				async content(event, trigger, player) {
					let skills = trigger.player.skills.slice(0);
					for (let skill of skills) {
						let info = get.info(skill);
						if (lib.translate[skill] && lib.translate[skill + '_info'] && !info.sub) {
							player.addSkill(skill);
						}
					}
				},
			},
			// ---------------------------------------通用技能------------------------------------------//
			xjzh_tongyong_viewHandCards: {
				charlotte: true,
				ai: {
					viewHandcard: true,
					skillTagFilter(player, tag, arg) {
						if (tag == 'viewHandcard') {
							if (player == arg) return false;
							return true;
						}
					},
				},
			},
			xjzh_tongyong_baiban: {
				inherit: 'baiban',
				skillBlocker(skill, player) {
					if (!player.storage.xjzh_tongyong_baiban.includes(skill)) return false;
					return !lib.skill[skill].charlotte;
				},
				init(player, skill) {
					player.storage.xjzh_tongyong_baiban = []; //QQQ
					player.addSkillBlocker(skill);
				},
				onremove(player, skill) {
					player.removeSkillBlocker(skill);
					delete player.storage[skill];
				},
				intro: {
					content(storage, player, skill) {
						var list = player.getSkills(null, false, false).filter(function (i) {
							return lib.skill.xjzh_tongyong_baiban.skillBlocker(i, player);
						});
						if (list.length) return '失效技能:' + get.translation(list);
						return '无失效技能';
					},
				},
			},
		},
	};
	for (var i in XWTR.character) {
		const info = XWTR.character[i];
		if (!info.trashBin) {
			info.trashBin = [];
		}
		info.trashBin.addArray(['ext:仙家之魂/skin/yuanhua/' + i + '.jpg', 'xjzh_die_audio']);
		if (!info.dieAudios) {
			info.dieAudios = [];
		}
		info.dieAudios.add('ext:仙家之魂/audio/die/' + i + '.mp3');
	}
	lib.config.characters.add('XWTR');
	lib.config.all.characters.add('XWTR');
	lib.translate.XWTR_character_config = '仙家之魂';
	return XWTR;
});
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
		name: '仙家之魂',
		connect: true,
		card: {
			xjzh_card_zhishijingsai: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_zhishijingsai.png',
				fullskin: true,
				type: 'basic',
				toself: true,
				enable(event, player) {
					return true;
				},
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target == player;
				},
				async content(event, trigger, player) {
					const xjzhMathList = {
						1: {
							question: '汽车行驶时遇到暴雨洪涝灾害，如果在积水中熄火，是否可以再次点火？',
							option: ['可以', '不可以'],
							answer: 1,
						},
						2: {
							question: '延时锦囊牌乐不思蜀（不考虑武将技能）没有哪种花色？',
							option: ['♦️️', '♣️️', '♥️️'],
							answer: 0,
						},
						3: {
							question: '三国杀中被称为教主的武将是？',
							option: ['左慈', '诸葛亮', '张角', '张飞'],
							answer: 2,
						},
						4: {
							question: '不拘一格降人才是谁的诗？',
							option: ['李白', '李商隐', '纳兰性德', '龚自珍'],
							answer: 3,
						},
						5: {
							question: '“十步杀一人，千里不留行。事了拂衣去，深藏身与名。”出自哪首诗？',
							option: ['侠客行', '武侠行', '金庸行', '李白行'],
							answer: 0,
						},
						6: {
							question: '“安能摧眉折腰事权贵”的下一句是？',
							option: ['明朝散发弄扁舟', '直挂云帆济沧海', '随君直到夜郎西', '使我不得开心颜'],
							answer: 3,
						},
						7: {
							question: '“大鹏一日同风起，扶摇直上九万里”，诗人以大鹏自比，其中的大鹏取自庄子的哪一名篇？',
							option: ['齐物论', '田子方', '逍遥游', '南华真经'],
							answer: 2,
						},
						8: {
							question: '“到中流击水，浪遏飞舟”是在哪一条江河？',
							option: ['湘江', '珠江', '澜沧江', '汉江'],
							answer: 0,
						},
						9: {
							question: '韩信“明修栈道，暗度陈仓”是为了骗过谁？',
							option: ['项籍', '项梁', '项燕', '项庄'],
							answer: 0,
						},
						10: {
							question: '全国开展“向雷锋同志学习”的热潮始于哪一年？',
							option: ['1961', '1962', '1963', '1981'],
							answer: 2,
						},
						11: {
							question: '领导我们事业的核心力量是中国共产党，这一论断是毛泽东在哪一次会议中提出来的？',
							option: ['中华人民共和国第一届全国人民代表大会第一次会议', '中华人民共和国第一届全国人民代表大会第二次会议', '中华人民共和国第一届全国人民代表大会第三次会议', '中华人民共和国第二届全国人民代表大会第一次会议'],
							answer: 0,
						},
						12: {
							question: '以下哪部著作中，认为数学是天地万物最根本的东西，是四时之终始，万物之祖宗？',
							option: ['周脾算经', '九章算术', '海岛算经', '孙子算经'],
							answer: 3,
						},
						13: {
							question: '预备党员认真履行党员义务，具备党员条件的，应当按期转为正式党员；需要继续考察和教育的，可以延长预备期，但不能超过（）。',
							option: ['半年', '一年', '一年半', '两年'],
							answer: 1,
						},
						14: {
							question: '冰球的比赛用球一般是用什么材质制作的？',
							option: ['塑料', '橡胶', '铝合金', '铅'],
							answer: 1,
						},
						15: {
							question: '湄公河发源于我国的唐古拉山东北坡，在我国境内被称为？',
							option: ['怒江', '澜沧江', '松花江', '黑龙江'],
							answer: 1,
						},
						16: {
							question: '已知A+B的和为39.6，如果把A的小数点向右移动一位，则A等于B，求A和B的值。',
							option: ['A:1.5,B:15', 'A:2.3,B:23', 'A:3.6,B:36'],
							answer: 2,
						},
						17: {
							question: "建安五年,袁曹争霸,曹操的军师()巧施'饵敌'之计,击败文丑。 ",
							option: ['刘晔', '程昱', '荀彧', '荀攸'],
							answer: 3,
						},
						18: {
							question: ' 建安五年,袁曹争霸,曹操军师所用的“饵敌”之计大败文丑在明代小说《三国演义》中被改编为？',
							option: ['关羽斩文丑', '夜袭乌巢', '官渡之战', '许攸献计'],
							answer: 0,
						},
						19: {
							question: '正史中“草船借箭”的主人公是？',
							option: ['诸葛亮', '周瑜', '孙权', '曹操'],
							answer: 2,
						},
						20: {
							question: '在《三国演义平话》中使用草船借箭的是？',
							option: ['诸葛亮', '周瑜', '孙权', '曹操'],
							answer: 1,
						},
						21: {
							question: '正史中诸葛亮主动出兵北伐几次？',
							option: ['6', '5', '4', '3'],
							answer: 1,
						},
						22: {
							question: '《三国演义》中空城计的故事灵感来源于哪位人物的空营计？',
							option: ['关羽', '张飞', '赵云', '马超'],
							answer: 2,
						},
						23: {
							question: '典故好好先生来源于东汉末年哪位人物？',
							option: ['庞德公', '司马徽', '皇甫嵩', '卢植'],
							answer: 1,
						},
						24: {
							question: '送分题！仙家之魂的作者是？',
							option: ['呓朵棉花糖', '吃个棉花糖', '吃朶棉花糖', '吃朵棉花糖'],
							answer: 3,
						},
						25: {
							question: '一列火车长200米，通过一条长430的隧道用了42秒，以同样的速度通过某站台用25秒，这个站台长多少米？',
							option: ['216米', '169米', '263米', '175米'],
							answer: 3,
						},
						26: {
							question: '一项工作，甲单独做需15天完成，乙单独做需12天完成。这项工作由甲乙两人合做，并且施工期间乙休息7天，问几天完成？',
							option: ['12天', '10天', '8天', '6天'],
							answer: 1,
						},
						27: {
							question: '“飞流直下三千尺，疑是银河落九天。”这句诗运用了什么修辞手法？',
							option: ['用典', '比喻', '拟人', '夸张'],
							answer: 3,
						},
						28: {
							question: '“大宝在发动〖破军〗并装备古锭刀的情况下，酒火杀装备了藤甲的标诸葛亮，能造成几点伤害？',
							option: ['0点', '1点', '2点', '3点', '4点'],
							answer: 4,
						},
						29: {
							question: '《仙家之魂》esp刘协发动【天策】会将其他角色的所有牌置入处理区，包括判定区？',
							option: ['对', '错'],
							answer: 0,
						},
						30: {
							question: '怎样才能取得民族独立和人民解放？近代以来历史表明，必须首先（）',
							option: ['反帝反封建的民主革命', '旧民主主义革命', '新民主主义革命', '农民起义'],
							answer: 0,
						},
						31: {
							question: '“红船精神”的诞生地是哪儿？',
							option: ['上海', '江苏扬州', '延安', '浙江嘉兴'],
							answer: 3,
						},
						32: {
							question: '1937年7月，日本蓄意制造了（），全面抗日战争开始。',
							option: ['九·一八事变', '七七事变', '西安事变', '华北事变'],
							answer: 1,
						},
						33: {
							question: '“一诺千金”出自《史记》，原文为“得黄金百两，不如（）一诺”。',
							option: ['龙且', '项燕', '钟离昧', '季布', '张良'],
							answer: 3,
						},
						34: {
							question: '下列词语正确的是？',
							option: ['创作', '创做', '怆作', '创做'],
							answer: 0,
						},
						35: {
							question: '下列哪一项文学常识是正确的？',
							option: ['曹操，字孟德，是三国时期的文学家、政治家、军事家', '李白的诗充满了浪漫主义色彩，是初唐时期最伟大的诗人之一', '王勃，与卢照邻、杨炯、王维合成为初唐四杰', '曹植，建安时期著名文学家，被谢灵运评为“才高八斗”'],
							answer: 3,
						},
						36: {
							question: '中国历史上第一个皇帝是？',
							option: ['汉高祖刘邦', '唐太宗李世民', '魏武帝曹操', '秦始皇嬴政'],
							answer: 3,
						},
						37: {
							question: '《孙子兵法》中“上兵”手段是？',
							option: ['伐谋', '伐交', '非攻', '兼爱'],
							answer: 0,
						},
						38: {
							question: '中国历史上最后一个皇帝是？',
							option: ['明思宗朱由检', '唐哀帝李柷', '汉献帝刘协', '爱新觉罗·溥仪'],
							answer: 3,
						},
						39: {
							question: '“一剑曾当百万师”的上一句是？',
							option: ['一身转战三千里', '会当水击三千里', '破敌无需十万兵', '一剑霜寒十九洲'],
							answer: 0,
						},
						40: {
							question: '山水诗派的鼻祖是？',
							option: ['孟浩然', '王维', '谢灵运', '陶渊明'],
							answer: 2,
						},
						41: {
							question: '无名杀《金庸群侠传》扩展的作者是？',
							option: ['小熊大猫', '大小熊猫', '小大熊猫', '大熊小猫'],
							answer: 3,
						},
						42: {
							question: '单机武侠RPG游戏《金庸群侠传》的开发者是？',
							option: ['大熊小猫', '半瓶神仙醋', '河洛工作室', '吃朵棉花糖'],
							answer: 2,
						},
						43: {
							question: 'Flash单机武侠RPG游戏《金庸群侠传》的开发者是？',
							option: ['大熊小猫', '半瓶神仙醋', '河洛工作室', '吃朵棉花糖'],
							answer: 1,
						},
						44: {
							question: '“路漫漫其修远兮，吾将上下而求索”是谁的名言？',
							option: ['墨子', '孔子', '屈原', '老子'],
							answer: 2,
						},
						45: {
							question: '1937年7月，全面抗日战争爆发后，11月20日，国民政府正式迁都（）？',
							option: ['成都', '重庆', '南京', '武汉'],
							answer: 1,
						},
						46: {
							question: '三国杀中，如果一名武将将牌堆摸空，而此时弃牌堆没有牌，如何结算？',
							option: ['摸牌者胜利', '继续游戏', '摸牌者失败', '平局'],
							answer: 3,
						},
						47: {
							question: '高压电线脱落，如果不慎进入高压电圈，如何自救？',
							option: ['快速逃离', '继续前行', '慢步离开', '单脚跳走'],
							answer: 3,
						},
						48: {
							question: '在抖音刷到美女不影响身体的正确做法是？',
							option: ['划过', '保存', '点赞', '收藏', '分享'],
							answer: 0,
						},
						49: {
							question: '电视剧《轮到你了》中黑岛沙和的扮演者是谁？',
							option: ['西野五濑', '西野六濑', '西野七濑', '西野八濑', '西野九濑'],
							answer: 2,
						},
						50: {
							question: '请补全《绝句》窗含西岭千秋雪，门泊（）万里船。',
							option: ['西蜀', '东吴', '南晋', '北魏'],
							answer: 1,
						},
						51: {
							question: '中国历史上第一次大规模农民起义是？',
							option: ['黄巾起义', '绿林起义', '太平天国起义', '陈胜吴广起义'],
							answer: 3,
						},
						52: {
							question: '公元184年爆发了一次大规模的农民起义，标志性三国历史的开始，这一次农民起义是？',
							option: ['黄巾起义', '绿林起义', '太平天国起义', '陈胜吴广起义'],
							answer: 0,
						},
						53: {
							question: '张鲁是所在教派是？',
							option: ['五升米教', '五升面教', '五斗米教', '五斗面教'],
							answer: 2,
						},
						54: {
							question: '阮籍等七人组成的组合名称是？',
							option: ['全真七子', '江南七怪', '竹林七贤', '建安七子'],
							answer: 2,
						},
						55: {
							question: '“但使龙城飞将在”的下一句是？',
							option: ['芙蓉帐暖度春宵', '朕与将军解战袍', '不教胡马度阴山', '从此君王不早朝'],
							answer: 2,
						},
						56: {
							question: '“但使龙城飞将在”的飞将是谁？',
							option: ['吕布', '张飞', '李靖', '李广'],
							answer: 3,
						},
						57: {
							question: '无名杀扩展《海国图志》的作者酷爱（）',
							option: ['人妻', '恶鬼', '少女', '僵尸'],
							answer: 3,
						},
						58: {
							question: '全面抗日战争期间，()后日本在南京犯下了罄竹难书的滔天罪行。',
							option: ['皖南事变', '一·二八事变', '三三事变', '八·一三事变'],
							answer: 3,
						},
						59: {
							question: '在开启双将的情况下，选择《仙家之魂》大乔和小乔组成双将，濒死发动技能〖离乡〗会将武将牌替换为（）或（）？',
							option: ['大乔', '小乔', '大桥', '小桥'],
							answer: [0, 1],
						},
						60: {
							question: '公元184年爆发的黄巾起义中，黄巾军的主要指挥官是（）（）（）',
							option: ['张宁', '张角', '张宝', '张松', '张梁', '张辽', '张任'],
							answer: [1, 2, 4],
						},
						61: {
							question: '《诗经》主要分类有（）（）（）',
							option: ['赋', '比', '风', '雅', '兴', '颂'],
							answer: [2, 3, 5],
						},
						62: {
							question: '儒家经典中的四书是哪四书？',
							option: ['大学', '中学', '中庸', '孟子', '孔子', '论语', '淮南子'],
							answer: [0, 2, 3, 5],
						},
						62: {
							question: '儒家经典中的五经是哪五经？',
							option: ['诗经', '辞海', '尚书', '中书', '礼记', '周易', '春秋'],
							answer: [0, 2, 4, 5, 6],
						},
						63: {
							question: '儒家学派的代表人物有哪些？',
							option: ['孔子', '孟子', '荀子', '庄子', '慧子', '墨子', '韩非子'],
							answer: [0, 1, 2],
						},
						64: {
							question: '以下哪几个皇帝是中国历史上某一个封建王朝的末代皇帝？',
							option: ['刘辨', '李隆基', '赵构', '朱由检', '李柷', '赢子婴'],
							answer: [3, 4, 5],
						},
					}; //QQQ
					let num = 0;
					let num2 = 0;
					let num3 = get.xjzh_rands(1, 64, 5);
					let mathList = xjzhMathList;
					while (num3.length) {
						let num4 = num3.shift();
						let answerNum = mathList[num4].answer;
						let dialog = ui.create.dialog(`【知识竞赛】:请选择正确答案${Array.isArray(answerNum) ? `(多选题,限选${answerNum.length}项)` : `(单选题)`}`, 'hidden');
						let question = mathList[num4].question;
						let option = mathList[num4].option;
						dialog.addText(`${num + 1}、试题:${question}<br><br>`);
						dialog.add([option, 'textbutton']);
						const [bool, links] = await player
							.chooseButton(dialog, Array.isArray(answerNum) ? answerNum.length : 1)
							.set('ai', function (button) {
								return Math.random();
							})
							.forResult('bool', 'links');
						if (bool && links) {
							let num5 = 0;
							let str = '正确答案是:';
							if (Array.isArray(answerNum)) {
								for (let answers of answerNum) {
									let answer = mathList[num4].option[answers];
									if (links.includes(answer)) num5++;
									str += `${answer}${answerNum.indexOf(answers) != answerNum.length - 1 ? '、' : ''}`;
								}
								if (num5 == answerNum.length) num2++;
							} else {
								let answer = mathList[num4].option[answerNum];
								if (links[0] == answer) {
									num2++;
									num5++;
								} else {
									str += answer;
								}
							}
							if (Array.isArray(answerNum) ? num5 != answerNum.length : num5 == 0) {
								dialog = ui.create.dialog(`【知识竞赛】:请选择正确答案${Array.isArray(answerNum) ? `(多选题,限选${answerNum.length}项)` : `(单选题)`}`, 'hidden');
								dialog.addText(`${num + 1}、试题:${question}<br><br>`);
								dialog.add([option, 'textbutton']);
								dialog.addText('很遗憾,你答错了!');
								dialog.addText(str);
								player.chooseControl('ok').set('dialog', dialog);
							}
						}
					}
					game.log(player, '答对', num2, '道题,答错', 5 - num2, '道题');
					switch (num2) {
						case 0:
							player.damage(1, 'nocard', 'nosource');
							player.chooseToDiscard(1, 'he', true);
							break;
						case 1:
							player.chooseToDiscard(1, 'he', true);
							break;
						case 2:
							player.draw();
							break;
						case 3:
							player.draw(2);
							break;
						case 4:
							player.draw(3);
							player.recover();
							break;
						case 5:
							player.draw(3);
							player.recover();
							let listEquip = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
							while (listEquip.length) {
								var pos = listEquip.shift();
								if (player.hasEmptySlot(pos)) {
									var equip = get.cardPile(function (card) {
										return get.type(card) == 'equip' && get.subtype(card) == pos;
									});
									if (equip) {
										player.equip(equip);
										player.$gain2(equip, false);
									}
								}
							}
							break;
					}
				},
				ai: {
					basic: {
						order: 7.2,
						useful: 4.5,
						value: 9.2,
					},
					result: {
						target: 2,
					},
					tag: {
						draw: 2,
					},
				},
			},
			xjzh_card_mingyunyingbi: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_mingyunyingbi.png',
				fullskin: true,
				type: 'basic',
				toself: true,
				enable(event, player) {
					return true;
				},
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target == player;
				},
				content() {
					if (Math.random() <= 0.5) {
						if (target.isHealthy()) game.log(target, '使用了', '#y【' + get.translation(card) + '】', '无事发生');
						target.recoverTo(target.maxHp);
					} else {
						var num = target.hp - 1;
						if (num <= 0) {
							game.log(target, '使用了', '#y【' + get.translation(card) + '】', '无事发生');
							event.finish();
						}
						target.damage(num, 'thunder', 'nocard', 'nosource', 'notrigger');
					}
				},
				ai: {
					basic: {
						useful(card, i) {
							if (get.player().hp > 1) {
								if (i === 0) return 0;
								return 1;
							}
							if (i === 0) return 7.3;
							return 10;
						},
						value(card, player) {
							if (!player) return;
							if (player.hp > 1) {
								if (player.hp == player.maxHp) return 0;
								return (player.maxHp - player.hp) / player.maxHp;
							}
							return player.maxHp - player.hp;
						},
					},
					order: 0.2,
					result: {
						target(player, target, card) {
							if (!target) return;
							if (target.hp > 1) {
								if (target.hp == target.maxHp) return 0;
								return (target.maxHp - target.hp) / target.maxHp;
							}
							return target.maxHp - target.hp;
						},
					},
					tag: {
						recover: 1,
						damage: 1,
						natureDamage: 1,
					},
				},
			},
			xjzh_card_cuimaidan: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_cuimaidan.png',
				fullskin: true,
				type: 'xjzh_danyao',
				enable: true,
				modTarget: true,
				range: { global: 1 },
				filterTarget: lib.filter.notMe,
				loseDelay: false,
				selectTarget: 1,
				async content(event, trigger, player) {
					let target = event.targets[0],
						list = target.getSkills(null, false, false).filter((skill) => {
							let info = get.info(skill);
							return info && !info.equipSkill && !info.cardSkill && !info.sub && lib.translate[skill] && lib.translate[skill + '_info'] && !info.xjzh_qishuSkill;
						}),
						dialog;
					if (list.length) {
						if (event.isMine()) {
							dialog = ui.create.dialog('forcebutton', 'hidden');
							dialog.add('请选择移除一项技能');
							for (var i = 0; i < list.length; i++) {
								if (lib.translate[list[i] + '_info']) {
									let translation = get.translation(list[i]);
									if (translation[0] == '新' && translation.length == 3) {
										translation = translation.slice(1, 3);
									} else {
										translation = translation.slice(0, 2);
									}
									let item = dialog.add('<div class="popup pointerdiv" style="width:95%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
									item.firstChild.link = list[i];
								}
							}
						}
						const { control } = await target
							.chooseControl(list, 'cancel2')
							.set('prompt', '【摧脉丹】:请选择移除一个技能')
							.set('ai', () => {
								if (target.hp >= Math.floor(target.maxHp / 2)) return 'cancel2';
								return get.min(list, get.skillRank, 'item');
							})
							.set('dialog', dialog)
							.forResult();

						if (control) control == 'cancel2' ? target.loseHp() : target.removeSkills(control);
					}
				},
				ai: {
					basic: {
						order: 8,
						useful: [4.5, 3.5, 2],
						value: [6.5, 4.5, 1],
					},
					result: {
						target(player, target) {
							if (target.hasSkill('xjzh_qishu_materialRemove')) return 10;
							var list = target.getSkills(null, false, false).filter(function (skill) {
								let info = get.info(skill);
								return info && !info.equipSkill && !info.cardSkill && !info.sub && lib.translate[skill] && lib.translate[skill + '_info'] && !info.xjzh_qishuSkill;
							});
							if (list.length) return -5;
							return -1;
						},
					},
					tag: {
						loseHp: 1,
					},
				},
			},
			xjzh_card_shuangran: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				audio: 'ext:仙家之魂/skillaudio/equip/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_shuangran.png',
				forceDie: true,
				clearLose: true,
				equipDelay: false,
				loseDelay: false,
				onEquip() {
					var num = 0;
					var player = _status.event.player;
					var object = new Object();
					var list = ['baojilv', 'recover', 'yishang', 'ranshao'];
					while (num <= 3) {
						switch (num) {
							case 0:
								var numx = get.rand(3, 8);
								object[list[num]] = numx;
								break;
							case 1:
								var numx = get.rand(1, 3);
								object[list[num]] = numx;
								break;
							case 2:
								var numx = get.rand(15, 25);
								var numx2 = get.rand(1, 3);
								object[list[num]] = [numx];
								object[list[num]].push(numx2);
								break;
							case 3:
								var numx = get.rand(5, 15);
								var numx2 = get.rand(1, 3);
								object[list[num]] = [numx];
								object[list[num]].push(numx2);
								break;
						}
						num++;
					}
					var ecard = player.getEquip(1);
					var origin_name = ecard.name;
					var name = ecard.name + '_shuangran';
					lib.card[name] = get.copy(get.info(ecard));
					lib.translate[name + '_info'] = '';
					for (var i in object) {
						switch (i) {
							case 'baojilv':
								lib.translate[name + '_info'] += '<li>造成伤害有<span style="color: red">' + get.translation(object[i]) + '%</span>几率暴击<br><br>';
								break;
							case 'recover':
								lib.translate[name + '_info'] += '<li>造成伤害有5%几率回复<span style="color: red">' + get.translation(object[i]) + '</span>点体力<br><br>';
								break;
							case 'yishang':
								lib.translate[name + '_info'] += '<li>造成伤害有<span style="color: red">' + get.translation(object[i][0]) + '％</span>几率令其获得<span style="color: red">' + get.translation(object[i][1]) + '</span>层易伤<br><br>';
								break;
							case 'ranshao':
								lib.translate[name + '_info'] += '<li>造成伤害有<span style="color: red">' + get.translation(object[i][0]) + '％</span>几率令其获得<span style="color: red">' + get.translation(object[i][1]) + '</span>层燃烧';
								break;
						}
					}
					player.storage.xjzh_card_shuangran_skill = object;
					lib.translate[name] = lib.translate[ecard.name];
					ecard.name = name;
					ecard.origin_name = origin_name;
				},
				onLose() {
					if (player.storage.xjzh_card_shuangran_skill) delete player.storage.xjzh_card_shuangran_skill;
				},
				skills: ['xjzh_card_shuangran_skill'],
				ai: {
					value(card, player, index, method) {
						return Math.random() * 0.5;
					},
					equipValue(card, player) {
						if (player.hp <= 2) return 0.5;
						return Math.random();
					},
					basic: {
						equipValue: 0.5,
					},
				},
			},
			xjzh_card_wuxian: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				forceDie: true,
				clearLose: true,
				equipDelay: false,
				loseDelay: false,
				audio: 'ext:仙家之魂/skillaudio/equip/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_wuxian.png',
				skills: [],
				onEquip() {
					var num = 0;
					var list = ['xjzh_card_wuxian_skill_fanshe', 'xjzh_card_wuxian_skill_zhufu', 'xjzh_card_wuxian_skill_jianren', 'xjzh_card_wuxian_skill_jujiao', 'xjzh_card_wuxian_skill_pomo', 'xjzh_card_wuxian_skill_liuguang'].randomGets(3);
					if (Array.isArray(lib.card[card.name].skills) === true) lib.card[card.name].skills = list;
					while (num <= list.length - 1) {
						lib.skill[list[num]].init(player);
						num++;
					}
					var ecard = card;
					var origin_name = ecard.name;
					var name = ecard.name + '_wuxian';
					lib.card[name] = get.copy(get.info(ecard));
					var str = '';
					var player = _status.event.player;
					if (lib.card[card.name].skills.includes('xjzh_card_wuxian_skill_fanshe')) str += '<li><span style="color: red">' + get.translation('xjzh_card_wuxian_skill_fanshe') + '</span>:你受到伤害时有' + get.translation(player.storage.xjzh_card_wuxian_skill_fanshe) + '%几率反射该伤害<br><br>';
					if (lib.card[card.name].skills.includes('xjzh_card_wuxian_skill_zhufu')) str += '<li><span style="color: red">' + get.translation('xjzh_card_wuxian_skill_zhufu') + '</span>:你受到伤害时有' + get.translation(player.storage.xjzh_card_wuxian_skill_zhufu) + '%几率摸一张牌<br><br>';
					if (lib.card[card.name].skills.includes('xjzh_card_wuxian_skill_jianren')) str += '<li><span style="color: red">' + get.translation('xjzh_card_wuxian_skill_jianren') + '</span>:你受到伤害后有' + get.translation(player.storage.xjzh_card_wuxian_skill_jianren) + '%几率回复一点体力<br><br>';
					if (lib.card[card.name].skills.includes('xjzh_card_wuxian_skill_jujiao')) str += '<li><span style="color: red">' + get.translation('xjzh_card_wuxian_skill_jujiao') + '</span>:你成为【杀】的目标时有' + get.translation(player.storage.xjzh_card_wuxian_skill_jujiao) + '%几率令其额外结算一次<br><br>';
					if (lib.card[card.name].skills.includes('xjzh_card_wuxian_skill_pomo')) str += '<li><span style="color: red">' + get.translation('xjzh_card_wuxian_skill_pomo') + '</span>:你受到属性伤害有' + get.translation(player.storage.xjzh_card_wuxian_skill_pomo) + '%几率+1<br><br>';
					if (lib.card[card.name].skills.includes('xjzh_card_wuxian_skill_liuguang')) str += '<li><span style="color: red">' + get.translation('xjzh_card_wuxian_skill_liuguang') + '</span>:你成为非伤害性卡牌时有' + get.translation(player.storage.xjzh_card_wuxian_skill_liuguang) + '%几率随机弃置一张牌<br><br>';
					str += '' + get.translation('xjzh_card_wuxian_info') + '';
					lib.translate[name + '_info'] = str;
					lib.translate[name] = lib.translate[ecard.name];
					ecard.name = name;
					ecard.origin_name = origin_name;
					game.log(player, '的无限效果为:', '#y' + get.translation(list));
				},
				onLose() {
					if (player.storage.xjzh_card_wuxian_skill_fanshe) delete player.storage.xjzh_card_wuxian_skill_fanshe;
					if (player.storage.xjzh_card_wuxian_skill_zhufu) delete player.storage.xjzh_card_wuxian_skill_zhufu;
					if (player.storage.xjzh_card_wuxian_skill_jianren) delete player.storage.xjzh_card_wuxian_skill_jianren;
					if (player.storage.xjzh_card_wuxian_skill_jujiao) delete player.storage.xjzh_card_wuxian_skill_jujiao;
					if (player.storage.xjzh_card_wuxian_skill_pomo) delete player.storage.xjzh_card_wuxian_skill_pomo;
					if (player.storage.xjzh_card_wuxian_skill_liuguang) delete player.storage.xjzh_card_wuxian_skill_liuguang;
				},
				ai: {
					value(card, player, index, method) {
						return Math.random() * 0.5;
					},
					equipValue(card, player) {
						if (player.hp <= 2) return 0.5;
						return Math.random();
					},
					basic: {
						equipValue: 0.5,
					},
				},
			},
			xjzh_card_rongyankaijia: {
				fullskin: true,
				type: 'equip',
				subtype: 'equip2',
				audio: 'ext:仙家之魂/skillaudio/equip/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_rongyankaijia.png',
				async onLose() {
					let player = get.player();
					if (player.storage.xjzh_card_rongyankaijia_skill && player.storage.xjzh_card_rongyankaijia_skill.length) {
						let storage = player.storage.xjzh_card_rongyankaijia_skill.slice(0);
						for (let damageList of storage) {
							if (player.isDead()) break;
							player.damage(...damageList.slice(0));
						}
						delete player.storage.xjzh_card_rongyankaijia_skill;
						player.unmarkSkill('xjzh_card_rongyankaijia_skill2');
					}
				},
				skills: ['xjzh_card_rongyankaijia_skill'],
				ai: {
					value(card, player, index, method) {
						if (player.isDisabled(2)) return 0.01;
						if (card == player.getEquip(2)) {
							if (player.hasSkillTag('nodamage')) return 0;
							if (player.hasSkillTag('nofire')) return 0.5;
							return 6;
						}
					},
					equipValue(card, player) {
						let num = 0;
						if (player.hasSkillTag('maixie') && player.hp > 1) return 0;
						if (player.hasSkillTag('maixie_hp') && player.hp > 1) return 0;
						if (player.hp == 1) num += 5;
						if (player.hp == 2) num += 3;
						return num;
					},
					basic: {
						equipValue: 6.5,
					},
				},
			},
			xjzh_card_numa: {
				audio: 'ext:仙家之魂/skillaudio/equip/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_numa.png',
				fullskin: true,
				type: 'equip',
				subtype: 'equip3',
				filterTarget(card, player, target) {
					return target.canEquip(card, true);
				},
				selectTarget: 1,
				distance: { globalTo: -1 },
				ai: {
					order: 9,
					value(card, player) {
						if (!player.countCards('j')) return 0;
						if (player.getEquip(3) == card) return 0;
						return -1;
					},
					equipValue(card, player) {
						if (player.getCards('e').includes(card)) return 0;
						if (!player.countCards('j')) return 0;
						return -1;
					},
					basic: {
						equipValue: 2,
					},
					result: {
						target(player, target) {
							var cards = target.getCards('e');
							if (!target.getEquip(3)) return 0;
							if (cards.includes(card)) return 0;
							return -1;
						},
					},
				},
			},
			xjzh_card_yizhihuhuan: {
				audio: 'ext:仙家之魂/skillaudio/equip/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_yizhihuhuan.png',
				fullskin: true,
				type: 'equip',
				subtype: 'equip5',
				forceDie: true,
				nomod: true,
				clearLose: true,
				equipDelay: false,
				loseDelay: false,
				onLose() {
					if (player.storage.xjzh_card_yizhihuhuan_skill) delete player.storage.xjzh_card_yizhihuhuan_skill;
				},
				skills: ['xjzh_card_yizhihuhuan_skill'],
				ai: {
					order: 12,
					value: 5.2,
					useful: 3,
					equipValue: 5.2,
					basic: {
						equipValue: 5.2,
					},
				},
			},
			xjzh_card_kadelanzhichu: {
				audio: 'ext:仙家之魂/skillaudio/equip/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_kadelanzhichu.png',
				fullskin: true,
				type: 'equip',
				subtype: 'equip5',
				forceDie: true,
				clearLose: true,
				equipDelay: false,
				onEquip() {
					let cards = lib.inpile.filter((card) => {
						if (!['equip1', 'qeuip2', 'equip5'].includes(get.subtype(card))) return false;
						if (['jydiybiaoche', 'muniu'].includes(card.name)) return false;
						if (player.countCards('e') && player.getCards('e').some((item) => item.name == card.name)) return false;
						return true;
					});
					let cardx = cards.randomGet();
					lib.card[card.name].skills = lib.card[cardx].skills ? lib.card[cardx].skills : [];
					let ecard = card;
					let origin_name = ecard.name;
					let name = ecard.name + '_kadelanzhichu';
					lib.card[name] = get.copy(get.info(ecard));
					lib.translate[name + '_info'] = '<li>当前反射装备<span style="color: red">' + get.translation(cardx) + '</span>:' + lib.translate[cardx + '_info'] + '<br><br>' + lib.translate[ecard.name + '_info'];
					lib.translate[name] = lib.translate[ecard.name];
					ecard.name = name;
					ecard.origin_name = origin_name;
					player.popup(cardx);
					game.log(card, '当前反射装备<span style="color: red">' + get.translation(cardx) + '</span>');
				},
				skills: [],
				ai: {
					order: 6,
					value: 3,
					useful: 2.5,
					equipValue: 3.5,
					basic: {
						equipValue: 3.5,
					},
				},
			},
			xjzh_zengyi_shuangsheng_card: {
				derivation: 'xjzh_sanguo_zuoyou',
				fullskin: false,
				image: 'ext:仙家之魂/image/avatar/xjzh_avatar_zengyi.png',
			},
			xjzh_card_chunfenghuayu: {
				fullskin: true,
				audio: 'ext:仙家之魂/audio/card/',
				derivation: 'xjzh_sanguo_guanlu',
				type: 'trick',
				enable(event, player) {
					if (get.is.playerNames(player, 'xjzh_sanguo_guanlu')) return true;
					return false;
				},
				cardcolor: 'red',
				selectTarget: 1,
				clearLose: true,
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_guanlu.png',
				filterTarget(card, player, target) {
					return !target.hasSkill('xjzh_card_chunfenghuayu_skill');
				},
				content() {
					target.addSkill('xjzh_card_chunfenghuayu_skill');
				},
				ai: {
					basic: {
						order: 10,
						useful: 5,
						value: 10,
					},
					result: {
						target(player, target) {
							if (target.isMin()) return 0;
							var att = get.attitude(player, target);
							if (att >= 2) {
								if (target.hp == 1) return att;
								if (target.hp == 2 && target.countCards('he') <= 2) return att * 0.7;
								return 0.5;
							}
							return 0;
						},
					},
				},
			},
			xjzh_card_fanyunfuyu: {
				fullskin: true,
				audio: 'ext:仙家之魂/audio/card/',
				derivation: 'xjzh_sanguo_guanlu',
				type: 'trick',
				cardcolor: 'black',
				notarget: true,
				nodelay: true,
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_guanlu.png',
				ai: {
					order: 8,
					basic: {
						useful: [7, 5.1, 2],
						value: [7, 5.1, 2],
					},
					tag: {
						damage: 1,
					},
				},
			},
			xjzh_card_zhizuijinmi: {
				fullskin: true,
				audio: 'ext:仙家之魂/audio/card/',
				derivation: 'xjzh_sanguo_guanlu',
				type: 'trick',
				enable(event, player) {
					if (get.is.playerNames(player, 'xjzh_sanguo_guanlu')) return true;
					return false;
				},
				cardcolor: 'black',
				selectTarget: 1,
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_guanlu.png',
				filterTarget(card, player, target) {
					return !target.hasSkill('xjzh_card_zhizuijinmi_skill');
				},
				content() {
					var suitx = card.suit;
					if (suitx == 'none') suitx = lib.suit.randomGet();
					target.storage.xjzh_card_zhizuijinmi_skill = suitx;
					target.addSkill('xjzh_card_zhizuijinmi_skill');
				},
				ai: {
					basic: {
						order: 10,
						useful: 5,
						value: 10,
					},
					result: {
						target: -2,
					},
				},
			},
			xjzh_card_tanhuayixian: {
				fullskin: true,
				audio: 'ext:仙家之魂/audio/card/',
				derivation: 'xjzh_sanguo_guanlu',
				type: 'trick',
				enable(event, player) {
					if (get.is.playerNames(player, 'xjzh_sanguo_guanlu')) return true;
					return false;
				},
				selectTarget: 1,
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_guanlu.png',
				filterTarget: true,
				content() {
					'step 0';
					if (!player.isIn() || !target.isIn()) {
						event.finish();
						return;
					}
					event.cards = get.cards(5);
					game.cardsGotoOrdering(event.cards);
					player.showCards(event.cards);
					('step 1');
					if (player.isIn() && target.isIn() && event.cards.length) {
						for (var i of event.cards) {
							if (player.canUse(i, target, false)) {
								player.useCard(i, target, false);
								event.cards.remove(i);
								event.redo();
								break;
							}
						}
					}
					('step 2');
					if (event.cards.length) {
						while (event.cards.length) ui.cardPile.insertBefore(event.cards.pop().fix(), ui.cardPile.firstChild);
						game.updateRoundNumber();
					}
				},
				ai: {
					order: 5,
					basic: {
						useful: 4,
						value: 3,
					},
					result: {
						player: 2,
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: 1,
					},
				},
			},
			xjzh_card_shenjimiaosuan: {
				fullskin: true,
				audio: 'ext:仙家之魂/audio/card/',
				derivation: 'xjzh_sanguo_guanlu',
				type: 'trick',
				enable(event, player) {
					if (get.is.playerNames(player, 'xjzh_sanguo_guanlu')) return true;
					return false;
				},
				selectTarget: -1,
				toself: true,
				filterTarget(card, player, target) {
					return target == player;
				},
				modTarget: true,
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_guanlu.png',
				content() {
					'step 0';
					if (ui.cardPile.childNodes.length < 10) game.washCard();
					let cards = get.cards(5),
						bottomCards = get.bottomCards(5);
					game.cardsGotoOrdering(cards);
					game.cardsGotoOrdering(bottomCards);
					player
						.chooseToMove()
						.set('list', [
							['牌堆顶', cards],
							['牌堆底', bottomCards],
						])
						.set('filterMove', (from, to, moved) => {
							if (to == 0) return moved[0].length < 5;
							if (to == 1) return moved[1].length < 5;
							return typeof to != 'number';
						})
						.set('prompt', '【神机妙算〗:任意交换牌堆顶或牌堆底的牌')
						.set('processAI', (list) => {
							let cards = list[0][1],
								player = get.player();
							const target = player.next;
							const att = get.attitude(player, target);
							const top = [],
								bottom = cards;
							for (const i of target.getCards('j')) {
								const judge = get.judge(i);
								bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
								if (bottom.length) {
									top.push(bottom.shift());
								}
							}
							bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
							while (bottom.length) {
								top.push(bottom.shift());
							}
							return [top, bottom];
						});
					('step 1');
					if (result.bool) {
						let top = result.moved[0],
							bottom = result.moved[1],
							tricks = [];
						top.reverse();
						for (var i = 0; i < top.length; i++) {
							if (get.type(top[i], 'trick') == 'trick') {
								tricks.push(top[i]);
								top.remove(top[i]);
								continue;
							}
							ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
						}
						for (var i = 0; i < bottom.length; i++) {
							ui.cardPile.appendChild(bottom[i]);
						}
						player.gain(tricks, 'gain2', 'log', player);
					}
					game.updateRoundNumber();
					player.$fullscreenpop('神机妙算', 'fire');
				},
				ai: {
					basic: {
						order: 8,
						useful: 6.5,
						value: 12,
					},
					result: {
						target: 2.5,
					},
					tag: {
						draw: 2,
					},
				},
			},
			xjzh_card_tianganghuo: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_tianganghuo.png',
				derivation: 'xjzh_xyj_sunwukong',
				fullskin: true,
				type: 'basic',
				toself: true,
				enable(event, player) {
					if (!player.hasSkill('xjzh_xyj_tianhuo')) return false;
					return get.is.playerNames(player, 'xjzh_xyj_sunwukong');
				},
				selectTarget: -1,
				filterTarget(card, player, target) {
					return target == player;
				},
				async content(event, trigger, player) {
					player.addMark('xjzh_xyj_tianhuo', 1, false);
				},
				ai: {
					basic: {
						order: 7.2,
						useful: 4.5,
						value: 9.2,
					},
					result: {
						target: 1,
					},
					tag: {
						draw: 1,
					},
				},
			},
			xjzh_card_hunyuandan: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_hunyuandan.png',
				derivation: 'xjzh_xyj_sunwukong',
				fullskin: true,
				type: 'basic',
				toself: true,
				enable(event, player) {
					if (!player.hasSkill('xjzh_xyj_tianhuo')) return false;
					return get.is.playerNames(player, 'xjzh_xyj_sunwukong');
				},
				selectTarget: -1,
				modTarget: true,
				filterTarget(card, player, target) {
					return target == player;
				},
				async content(event, trigger, player) {
					let num = player.countCards('h', (card) => {
						return ['xjzh_card_tianganghuo', 'xjzh_card_hunyuandan', 'xjzh_card_zhaoyaojing', 'xjzh_card_huoyundao', 'xjzh_card_dingshenzhou'].includes(card.name);
					});
					player.drawTo(player.maxHp + num);
				},
				ai: {
					basic: {
						order: 7.2,
						useful: 4.5,
						value: 9.2,
					},
					result: {
						target(player, target, card) {
							let num = player.countCards('h', (card) => {
								return ['xjzh_card_tianganghuo', 'xjzh_card_hunyuandan', 'xjzh_card_zhaoyaojing', 'xjzh_card_huoyundao', 'xjzh_card_dingshenzhou'].includes(card.name);
							});
							let num2 = player.countCards('h') - num;
							return player.maxHp - num;
						},
					},
					tag: {
						draw: 1,
					},
				},
			},
			xjzh_card_zhaoyaojing: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_zhaoyaojing.png',
				derivation: 'xjzh_xyj_sunwukong',
				fullskin: true,
				type: 'basic',
				toself: true,
				enable(event, player) {
					if (!player.hasSkill('xjzh_xyj_tianhuo')) return false;
					return get.is.playerNames(player, 'xjzh_xyj_sunwukong');
				},
				selectTarget: 1,
				filterTarget(card, player, target) {
					if (!target.countCards('h', { suit: 'diamond' })) return false;
					return target != player;
				},
				async content(event, trigger, player) {
					const { cards } = await event.targets[0]
						.chooseToDiscard('h', { suit: 'diamond' })
						.set('selectCard', () => event.targets[0].countCards('h', { suit: 'diamond' }))
						.set('ai', (card) => {
							return 4 - get.value(card);
						})
						.forResult();

					if (!cards) event.targets[0].loseMaxHp();
				},
				ai: {
					basic: {
						order: 7.2,
						useful: 4.5,
						value: 9.2,
					},
					result: {
						target: -1,
					},
					tag: {
						loseCard: 1,
					},
				},
			},
			xjzh_card_huoyundao: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_huoyundao.png',
				derivation: 'xjzh_xyj_sunwukong',
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				skills: ['zhuque_skill'],
				distance: { attackFrom: -3 },
				ai: {
					basic: {
						equipValue: 2,
					},
				},
			},
			xjzh_card_dingshenzhou: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_dingshenzhou.png',
				derivation: 'xjzh_xyj_sunwukong',
				fullskin: true,
				type: 'basic',
				toself: true,
				enable(event, player) {
					if (!player.hasSkill('xjzh_xyj_tianhuo')) return false;
					return get.is.playerNames(player, 'xjzh_xyj_sunwukong');
				},
				selectTarget: 1,
				filterTarget(card, player, target) {
					let history = player.getHistory('useCard', (evt) => evt.card && evt.card.name == 'xjzh_card_dingshenzhou' && evt.targets.includes(target));
					if (history.length) return false;
					return target != player;
				},
				async content(event, trigger, player) {
					let target = event.targets[0];
					target.skip('phaseUse');
					target.skip('phaseDiscard');
				},
				ai: {
					basic: {
						order: 7.2,
						useful: 4.5,
						value: 9.2,
					},
					result: {
						target: -1,
					},
					tag: {
						skip: 1,
					},
				},
			},
			xjzh_card_mojianklls: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_mojianklls.png',
				derivation: 'xjzh_dnf_suodeluosi',
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				subtype2: 'xjzh_jujian',
				skills: ['xjzh_card_mojianklls_skill'],
				distance: { attackFrom: -2 },
				ai: {
					basic: {
						equipValue: 3,
					},
				},
			},
			xjzh_card_julihjc: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_julihjc.png',
				derivation: 'xjzh_dnf_suodeluosi',
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				subtype2: 'xjzh_dunqi',
				skills: ['xjzh_card_julihjc_skill'],
				distance: { attackFrom: -1 },
				ai: {
					basic: {
						equipValue: 3,
					},
				},
			},
			xjzh_card_tianjigyx: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_tianjigyx.png',
				derivation: 'xjzh_dnf_suodeluosi',
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				subtype2: 'xjzh_guangjian',
				skills: ['xjzh_card_tianjigyx_skill'],
				distance: { attackFrom: -3 },
				ai: {
					basic: {
						equipValue: 3,
					},
				},
			},
			xjzh_card_guanshizhengzong: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_guanshizhengzong.png',
				derivation: 'xjzh_dnf_suodeluosi',
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				subtype2: 'xjzh_taidao',
				skills: ['xjzh_card_guanshizhengzong_skill'],
				distance: { attackFrom: -3 },
				ai: {
					basic: {
						equipValue: 3,
					},
				},
			},
			xjzh_card_tiancongyunjian: {
				audio: 'ext:仙家之魂/audio/card/',
				image: 'ext:仙家之魂/image/cardpicture/xjzh_card_tiancongyunjian.png',
				derivation: 'xjzh_dnf_suodeluosi',
				fullskin: true,
				type: 'equip',
				subtype: 'equip1',
				subtype2: 'xjzh_duanjian',
				skills: ['xjzh_card_tiancongyunjian_skill'],
				ai: {
					basic: {
						equipValue: 3,
					},
				},
			},
		},
		translate: {
			XWCS_meiren: '美人如玉',
			XWCS_qixia: '天命奇侠',
			XWDM_huoying: '火影忍者',
			XWSG_wei: '曹魏',
			XWSG_shu: '蜀汉',
			XWSG_wu: '东吴',
			XWSG_qun: '群雄',
			XWSG_jin: '西晋',
			XWSG_shen: '特殊',
			XWTR_zxzh: '众星之魂',
			XWTR_poe: '流放之路',
			XWTR_wzry: '王者荣耀',
			XWTR_diablo: '暗黑破坏神',
			XWTR_dnf: '地下城与勇士',
			XWTR_xyj: '西游释厄传',
			xjzh_zxzh_linlingshiyu: '林凌&诗雨',
			xjzh_zxzh_yuanyuan: '冯媛媛',
			xjzh_zxzh_mufeng: '沐风',
			xjzh_zxzh_moqinwu: '莫轻舞',
			xjzh_zxzh_linziyan: '林子言',
			xjzh_zxzh_moqinyan: '莫轻言',
			xjzh_zxzh_yumuren: '余木人',
			xjzh_zxzh_linmo: '林默',
			xjzh_zxzh_jiangningzhi: '姜凝脂',
			xjzh_zxzh_leifa: '雷法',
			xjzh_zxzh_leifa_info: '锁定技,每个准备阶段开始时,你摸x张牌并弃x张牌,你可以与其拼点,若你赢,其受到一点雷电伤害且非锁定技失效直到回合结束,否则你摸一张牌,该技能失效直到你的回合开始(x为你的手牌数量)',
			xjzh_zxzh_jianxin: '剑心',
			xjzh_zxzh_jianxin_info: '锁定技,你不因此技能造成/受到伤害时,若你装备了剑类武器,你观看牌堆顶x张牌,并合法使用其中所有[伤害]类卡牌,否则你可以将牌堆一张剑类武器置入武器栏(若伤害来源为你,x为你的体力值加本次伤害点数,否则为你已失去的体力加本次伤害点数)',
			xjzh_zxzh_jiezhen: '结阵',
			xjzh_zxzh_jiezhen_info: '锁定技,你防止雷属性伤害;每回合限一次,当一名你攻击范围内的角色受到雷电/普通伤害时,你可以代替其受到伤害/成为伤害来源',
			xjzh_zxzh_xianghun: '香魂',
			xjzh_zxzh_xianghun_info: '出牌阶段限一次,你可以失去1点体力摸两张牌',
			xjzh_zxzh_renxin: '仁心',
			xjzh_zxzh_renxin_info: '锁定技,当你失去体力后,你可以判定,若为红色,你可以令至多2名角色各回复一点体力,否则你可以对至多两名角色各造成一点雷属性伤害',
			xjzh_zxzh_xunqing: '寻情',
			xjzh_zxzh_xunqing_info: '觉醒技,当你至少发动6次〖仁心〗后,你重置武将牌并回复体力至体力上限,你的技能〖仁心〗可以在其他角色对你造成伤害后和回合开始时发动',
			xjzh_zxzh_yufeng: '御风',
			xjzh_zxzh_yufeng_info: '每回合限两次,每种类型的牌限每回合一次,一名角色受伤害时,你可以弃置一张牌并执行以下操作:<li>基本牌:伤害+1<li>装备牌:令其弃置两张牌(不足则全弃)免疫本次伤害<li>延时锦囊牌:将伤害属性改为火焰伤害并向上家传递<li>非延时锦囊牌:将伤害属性改为雷电伤害并向下家传递',
			xjzh_zxzh_fengzhen: '风阵',
			xjzh_zxzh_fengzhen_info: '当一名角色使用一张【杀】,【南蛮入侵】或【万箭齐发】时,你可以弃置一张牌,选择任意名目标直到此牌结算结束,你选择的角色视为装备一张你声明的防具牌',
			xjzh_zxzh_zonghuo: '纵火',
			xjzh_zxzh_zonghuo_info: '限定技,出牌阶段,你对自己造成1~2点火焰伤害,令所有其他角色选择:将装备区里的所有装备牌交给你(至少一张) ;或受到你的等量火焰伤害',
			xjzh_zxzh_shoutao: '守桃',
			xjzh_zxzh_shoutao_info: '锁定技,你无法使用桃,你获得一张桃后,弃置之并将其移出游戏,此时若你已受伤,你回复一点体力,否则你摸两张牌,其他角色回复体力后,若你未受伤,你摸一张牌,否则你回复等量体力',
			xjzh_zxzh_taoyuan: '桃源',
			xjzh_zxzh_taoyuan_info: '锁定技,你每弃置一张桃或不由弃桃回复体力时获得一个<桃>标记,当你濒死时,你弃置所有标记并回复等量体力,多余回复改为摸牌',
			xjzh_zxzh_qiwu: '起舞',
			xjzh_zxzh_qiwu_info: '锁定技,出牌阶段限一次,你可以流失一点体力并摸两张牌,令场上除你之外的所有角色依次摸一张牌,若此牌为桃,你获得之',
			xjzh_zxzh_leifax: '雷法',
			xjzh_zxzh_leifax_info: '其他角色出牌阶段开始前,你可以翻开牌堆顶一张牌,若不为♠️️,其需要弃置一张花色相同的牌,否则其于回合内非锁定技无效,你摸一张牌,若为♠️️,其受到一点雷电伤害,且本回合内你不能成为其使用卡牌的目标',
			xjzh_zxzh_leifax2: '雷法',
			xjzh_zxzh_leifax2_info: '其他角色出牌阶段开始前,你可以翻开牌堆顶一张牌,若不为♠️️,其需要弃置两张花色相同的牌,否则其于回合内所有技能无效,你摸一张牌,若为♠️️,其受到两点雷电伤害,且本回合内你不能成为其使用卡牌的目标',
			xjzh_zxzh_leiyu: '雷域',
			xjzh_zxzh_leiyu_info: '锁定技,摸牌阶段前或你的回合开始前,你可以选择一种花色直到你下次选择,你区域内所有牌均视为此花色,且当你成为此花色牌的目标后,你摸一张牌',
			xjzh_zxzh_tianxin: '天心',
			xjzh_zxzh_tianxin_info: '出牌阶段,你可以展示牌堆顶x张牌,若其中♠️️牌的数量为最多之一,你选择一名不为你的角色令其受到y点雷电伤害,你将〖雷法〗描述中的一点雷电伤害改为两点,弃置一张牌改为两张牌,非锁定技失效改为所有技能失效,失去技能〖天心〗;否则你摸z张牌并受到一点雷电伤害(x为你的体力值,y为♠️️牌的数量,z为你已失去的体力)',
			xjzh_zxzh_cangjian: '藏剑',
			xjzh_zxzh_cangjian_info: '锁定技,游戏开始时,你将牌堆中5-9张武器牌置于武将牌上称为<剑>并废除武器栏,此后每当你的回合开始时/结束时,你将一把<剑>洗入牌堆随机位置,你始终视为装备了此武器牌',
			xjzh_zxzh_jiantai: '剑胎',
			xjzh_zxzh_jiantai_info: '锁定技,当你受到/造成伤害后,你可以展示牌堆顶x张牌,并获得其中所有的武器牌称为<剑胎>,若没有武器牌,则改为获得所有的装备牌;<剑胎>不计入手牌上限(x为已视为装备<剑>的数量+1)',
			xjzh_zxzh_yujian: '御剑',
			xjzh_zxzh_yujian_info: '你可以将<剑胎>当作任意基本牌或非延时锦囊牌使用或打出',
			xjzh_zxzh_yujian2: '御剑',
			xjzh_zxzh_shiqiao: '拾樵',
			xjzh_zxzh_shiqiao_info: '锁定技,场上所有进入弃牌堆的牌会被洗入牌堆随机位置.游戏开始时,你记录1-13中随机1-5个点数,当有牌被洗入牌堆时,若此牌点数已被你记录,你获得一张不同点数的牌,你移除该点数,当所有点数均被移除后,你重新记录之',
			xjzh_zxzh_baoxin: '抱薪',
			xjzh_zxzh_baoxin_info: '锁定技,摸牌阶段、弃牌阶段,你随机展示牌堆13张牌,并获得其中所有与〖拾樵〗记录点数一致的牌,你跳过摸牌阶段、弃牌阶段;你使用〖拾樵〗包含点数的牌时,你移除〖拾樵〗中与之一致的点数并选择一项:1、摸2张牌;2、令此牌额外结算一次',
			xjzh_zxzh_baoxin_use: '抱薪',
			xjzh_zxzh_moyu: '默语',
			xjzh_zxzh_moyu_info: '你的准备阶段,你可以判定:♥️️你可以与一名角色交换体力值和体力上限;♠️️你可以令两名其他角色交换技能',
			xjzh_zxzh_zhenwen: '真纹',
			xjzh_zxzh_zhenwen_info: '每回合限x次,当一名角色不因此技能获得技能时,若其为锁定技,你可以令其失去该技能,令其摸两张牌,否则你可以令获得技能的角色改为你(x为当前游戏轮数)',
			xjzh_zxzh_jinyan: '禁言',
			xjzh_zxzh_jinyan_info: '当其他角色发动技能后,你可以禁用该技能直到你的下个回合开始',
			xjzh_zxzh_dianling: '点灵',
			xjzh_zxzh_dianling_info: '其他角色回合开始时,若你有<屠苏>,你可以移除一个<屠苏>并令其当前回合阶段顺序逆转,该角色在回合内回复体力/失去体力/造成伤害时,你令一名其他角色执行相同的选项',
			xjzh_zxzh_tusu: '屠苏',
			xjzh_zxzh_tusu_info: '锁定技,你始终跳过摸牌阶段/弃牌阶段,从牌堆获得X张牌名不一致的牌/X个<屠苏>标记,你使用这些牌无距离限制(X为你的体力上限)',
			xjzh_poe_nvwu: '女巫',
			xjzh_poe_yuansushi: '元素使',
			xjzh_poe_yuhuoshi: '狱火师',
			xjzh_poe_juedouzhe: '决斗者',
			xjzh_poe_chuxing: '处刑者',
			xjzh_poe_weishi: '卫士',
			xjzh_poe_youxia: '游侠',
			xjzh_poe_ruiyan: '锐眼',
			xjzh_poe_guizu: '升华使徒',
			xjzh_poe_diyuliequan: '地狱猎犬',
			xjzh_poe_kuloufengbaofashi: '骷髅风暴法师',
			xjzh_poe_kulouzonghuozhe: '骷髅纵火者',
			xjzh_poe_kuloumushi: '骷髅牧师',
			xjzh_poe_choice: '升华',
			xjzh_poe_choice2: '升华',
			xjzh_poe_zhaohuan: '召唤',
			xjzh_poe_jianfeng: '剑风',
			xjzh_poe_jianfeng_info: '出牌阶段限一次,你可以弃置一张[伤害]卡牌并指定一名其他角色,其可以选择弃置所有非[伤害]卡牌,或视为你对其使用一张不计次数且无视防具的【杀】,此【杀】额外结算1次,额外结算的【杀】造成伤害+1',
			xjzh_poe_tiaozhan: '挑战',
			xjzh_poe_tiaozhan_info: '其他角色出牌阶段开始时,你可以摸3张牌并视为对其使用一张【决斗】(需合法),若你因此造成伤害,你令其弃置所有手牌,否则你弃置3张牌',
			xjzh_poe_sidou: '死斗',
			xjzh_poe_sidou_info: '出牌阶段限一次,你可以将一张牌当决斗使用,若如此做,你与其区域内的所有牌均置入手牌区且视为【杀】直到手牌用尽或此牌结算,当此牌造成伤害后,若受到伤害的角色体力值小于其体力上限的一半(向上取整),其立即失去所有体力',
			xjzh_poe_bingjian: '冰箭',
			xjzh_poe_bingjian_info: '出牌阶段限一次,你可以选择一名角色并弃置所有[伤害]手牌,若如此做,视为你对其使用一张不计入次数的【冰杀】并额外结算x次,技能结算后,若你对其造成伤害,有几率对其附加1层冰缓(x为你弃置的牌的数量-1)',
			xjzh_poe_dianjian: '电箭',
			xjzh_poe_dianjian_info: '出牌阶段限一次,你可以将任意张[伤害]手牌(至少一张)当一张【雷杀】使用并选择等量目标,若你对其造成伤害,你有几率对其附加1层感电',
			xjzh_poe_zhenya: '镇压',
			xjzh_poe_zhenya_info: '<b><font color=orange>〖镇压〗</font>锁定技,你造成无属性伤害有10%几率暴击,场上每个存活的武将令此几率提高50%,每个阵亡的武将令此几率提高60%;若你的暴击几率不小于100%,你造成的暴击伤害基础值为300%',
			xjzh_poe_zaixing: '灾星',
			xjzh_poe_zaixing_info: '<b><font color=orange>〖传奇灾星〗</font>锁定技,你造成伤害后获得1点护甲(至多为3),你的每点护甲令你使用无属性【杀】可额外选择等量目标',
			xjzh_poe_lengxue: '冷血',
			xjzh_poe_lengxue_info: '<b><font color=orange>〖刽子手〗</font>锁定技,当你造成无属性伤害令其陷入濒死状态,你令其立即死亡',
			xjzh_poe_shixue: '嗜血',
			xjzh_poe_shixue_info: '<b><font color=orange>〖无尽饥饿〗</font>锁定技,你造成无属性伤害后,若你已受伤,你回复1点体力,否则你摸1张牌,若你本次伤害造成暴击,则你额外摸1张牌',
			xjzh_poe_canbao: '残暴',
			xjzh_poe_canbao_info: '<b><font color=orange>〖影响〗</font>锁定技,你每击败一名武将令手牌上限、攻击距离、摸牌数、出牌次数+1',
			xjzh_poe_yingxing: '影形',
			xjzh_poe_yingxing_info: '<b><font color=orange>〖大师之形〗</font>锁定技,你的回合外,其他角色对你造成伤害后,你令其立即结束出牌阶段',
			xjzh_poe_jingji: '竞技',
			xjzh_poe_jingji_info: '<b><font color=orange>〖竞技挑战者〗</font>锁定技,当你造成伤害后,你获得1枚<竞>标记(至多10个),每个标记为你提供6.5%反击几率和1%物理攻击格挡几率,<竞>标记将在你受到伤害后失去1枚',
			xjzh_poe_fuchou: '复仇',
			xjzh_poe_fuchou_info: '<b><font color=orange>〖强力复仇〗</font>锁定技,你有50%基础物理攻击格挡几率,此后你每格挡一次物理攻击伤害,你获得+1%物理攻击格挡几率,至多60%',
			xjzh_poe_doushi: '斗士',
			xjzh_poe_doushi_info: '<b><font color=orange>〖完美斗士〗</font>锁定技,你的法术攻击格挡几率等同于你的物理攻击格挡几率,你的格上限+10%;你的防具栏无法被废除',
			xjzh_poe_zhuzao: '铸造',
			xjzh_poe_zhuzao_info: '<b><font color=orange>〖痛苦铸造〗</font>锁定技,你的反击造成双倍伤害;你的格挡几率+10%,你的反击几率+10%',
			xjzh_poe_xueyan: '血眼',
			xjzh_poe_xueyan_info: '<b><font color=orange>〖血之眼〗</font>锁定技,你的体力回复量+1,若你回复体力后未受伤,你获得+2%物理攻击格挡几率',
			xjzh_poe_baipiao: '白嫖',
			xjzh_poe_baipiao_info: '<b><font color=orange>〖免费力量〗</font>锁定技,当你受到伤害后,若你未装备防具牌,你随机装备一张防具牌,否则你将一张牌堆随机一张防具牌置于弃牌堆,视为你装备了该防具牌',
			xjzh_poe_fenlie: '分裂',
			xjzh_poe_fenlie_info: '<b><font color=orange>〖无限弹药〗</font>锁定技,你使用指定单个目标且不为你的[伤害]卡牌可以额外选择一个目标,若你装备了武器牌,你可以额外选择两个目标(额外选择目标不受距离限制)',
			xjzh_poe_tanshe: '弹射',
			xjzh_poe_tanshe_info: '<b><font color=orange>〖致命连锁〗</font>锁定技,你造成伤害有30%几率对其附近随机一个武将造成一点伤害',
			xjzh_poe_juji: '狙击',
			xjzh_poe_juji_info: '<b><font color=orange>〖狙击〗</font>锁定技,当你造成伤害时,若你不在其周围,你对其额外造成60%伤害(向下取整)',
			xjzh_poe_jufeng: '飓风',
			xjzh_poe_jufeng_info: '<b><font color=orange>〖飓风之力〗</font>锁定技,你发动〖分裂〗〖弹射〗及你于回合内使用牌时获得一个<风>标记,你最多拥有10个风标记,你拥有标记时获得飓风效果,你和你的友军均具备[飓风]效果(强制翻开身份牌)',
			xjzh_poe_danmu: '弹幕',
			xjzh_poe_danmu_info: '<b><font color=orange>〖弹幕〗</font>锁定技,你的弹射不再令附近武将受伤,改为令你已造成伤害的武将额外受到一点伤害,你使用卡牌指定不为你的目标时,有30%几率令其获得一个<残>标记,每个标记令其有25%几率造成伤害无效',
			xjzh_poe_shenghua: '升华',
			xjzh_poe_shenghua_info: '锁定技,你不需要禁用技能,游戏开始时,你随机获得POE武将的5个技能,此后每当你的准备阶段,你可以移除这些技能并重新获得',
			xjzh_poe_shenghuajin: '升华·禁',
			xjzh_poe_huoqiu: '火球',
			xjzh_poe_huoqiu_info: '锁定技,你的所有红色手牌视为【火杀】,你使用【火杀】无距离与次数限制,你使用【火杀】造成伤害令该伤害向下传导x次(x为你本回合使用【火杀】造成伤害的次数)',
			xjzh_poe_mishu: '秘术',
			xjzh_poe_mishu_info: '锁定技,当你使用牌指定目标或成为其他角色的卡牌目标时,若你的手牌小于其,你将手牌补至与其一致,你可以指定一名其他角色,令其也成为此牌目标',
			xjzh_poe_liequan: '猎犬',
			xjzh_poe_liequan_info: '锁定技,你的回合开始时/造成火属性伤害后,你召唤一只地狱猎犬至场上',
			xjzh_poe_ranhuo: '燃火',
			xjzh_poe_ranhuo_info: '锁定技,你的回合开始时,你令周围所有敌方角色获得一层燃烧;你令你的召唤师对被点燃的角色造成伤害+1',
			xjzh_poe_huiliu: '汇流',
			xjzh_poe_huiliu_info: '<b><font color=orange>〖元素汇流〗</font>锁定技,每个回合开始时,你随机获得一种元素汇流,并移除其他元素汇流,你拥有元素汇流时,你造成的所有伤害视为该元素属性伤害并防止你受到其他元素属性伤害',
			xjzh_poe_guangta: '光塔',
			xjzh_poe_guangta_info: '<b><font color=orange>〖毁灭光塔〗</font>你造成属性伤害后可以令其附近一名角色受到等量伤害,若此伤害类型为火焰/冰霜/闪电,则你令其获得一层感电/燃烧/冰冻',
			xjzh_poe_sangzhong: '丧钟',
			xjzh_poe_sangzhong_info: '<b><font color=orange>〖死亡丧钟〗</font>锁定技,每当你第2次失去牌后,你摸1张牌,你使用这两张牌无距离限制',
			xjzh_poe_suxing: '塑形',
			xjzh_poe_suxing_info: '<b><font color=orange>〖元素塑形〗</font>锁定技,你造成属性伤害无法被防止;你使用有属性的牌可以额外指定一个目标且无次数限制',
			xjzh_poe_bilei: '壁垒',
			xjzh_poe_bilei_info: '<b><font color=orange>〖元素壁垒〗</font>锁定技,你获得此技能时,你获得20点护甲,当你的所有护甲被移除后,你受到3倍于你体力上限的无来源伤害,若你未因此阵亡,你获得20点护甲,你可以将你本局游戏中受到的所有伤害视为随机一种属性伤害任意分配给其他角色',
			xjzh_poe_qinhe: '亲和',
			xjzh_poe_qinhe_info: '<b><font color=orange>〖元素亲和〗</font>出牌阶段限一次,你可以选择一名角色并展示其手牌,并获得其手牌中所有♥️️牌和♠️️牌,其中每有一张♥️️牌视为其使用一张【桃】,每有一张♠️️令其视为使用一张【酒】',
			xjzh_poe_yuquan: '狱犬',
			xjzh_poe_yuquan_info: '<b><font color=orange>〖忠诚狱犬〗</font>锁定技,你获得技能〖猎犬〗,且你受到伤害有20%几率由地狱猎犬承受',
			xjzh_poe_huoji: '火祭',
			xjzh_poe_huoji_info: '<b><font color=orange>〖火祭协议〗</font>锁定技,你使用牌无次数和距离限制;你每使用一张牌获得一点炼狱之炎,当炼狱之炎不小于你的体力上限时,你受到等量火焰伤害;你的炼狱之炎每回合移去一点',
			xjzh_poe_feiteng: '沸腾',
			xjzh_poe_feiteng_info: '<b><font color=orange>〖沸腾之躯〗</font>锁定技,若你有炼狱之炎,你与友军造成火焰伤害+1,你获得等量护甲',
			xjzh_poe_xianji: '献祭',
			xjzh_poe_xianji_info: '<b><font color=orange>〖生命献祭〗</font>锁定技,你锁定体力上限为你初始体力上限的一半,获得并锁定2倍于你献祭的体力上限点护甲',
			xjzh_poe_shenyou: '神佑',
			xjzh_poe_shenyou_info: '<b><font color=orange>〖生命献祭〗</font>锁定技,你有50%几率防止火焰伤害;你受到的其他伤害视为火焰伤害',
			xjzh_poe_shikui: '尸傀',
			xjzh_poe_shikui_info: '<b><font color=orange>〖尸体复苏〗</font>锁定技,游戏开始时,你选择召唤骷髅纵火者、骷髅牧师、骷髅风暴法师之二于场上,场上每有一个召唤物,你摸牌时额外摸一张牌;其他角色阵亡后,你在随机位置将其其复苏为以上三种召唤物之一.',
			xjzh_poe_fusu: '复苏',
			xjzh_poe_fusu_info: '锁定技,每轮开始时,你令所有友方召唤物和召唤师回复随机x点体力并摸随机x张牌(x为场上召唤物的数量,至低为1)',
			xjzh_poe_zonghuo: '纵火',
			xjzh_poe_zonghuo_info: '锁定技,你令场上所有敌方角色的燃烧层数突破上限;当你的召唤师造成火属性伤害时,你有几率令随机一名敌方角色受到一点火属性伤害',
			xjzh_poe_fengbao: '风暴',
			xjzh_poe_fengbao_info: '锁定技,你对敌方造成伤害会令其感电,且你造成的感电层数不受上限影响',
			xjzh_wzry_libai: '李白',
			xjzh_wzry_yuange: '元歌',
			xjzh_wzry_yao: '东方曜',
			xjzh_wzry_ganjiangmoye: '干将莫邪',
			xjzh_wzry_haiyue: '海月',
			xjzh_wzry_huamulan: '花木兰',
			xjzh_wzry_duoliya: '朵莉亚',
			xjzh_wzry_xiaxing: '侠行',
			xjzh_wzry_xiaxing_info: '锁定技,你造成伤害获得一道剑气,每道剑气令你使用牌可以额外指定一名其他角色为目标,你获得四道剑气时解锁〖剑歌〗并失去所有剑气',
			xjzh_wzry_jinjiu: '进酒',
			xjzh_wzry_jinjiu_info: '出牌阶段限一次,你可以与一名攻击范围内的其他角色交换位置,你视为使用一张【酒】并摸x张牌,回合结束后,你返回原位置;你使用【杀】次数+x(x为其与你的座位号差值的绝对值)',
			xjzh_wzry_jiange: '剑歌',
			xjzh_wzry_jiange_info: '锁定技,当你解锁该技能后,你禁用〖侠行〗并立即执行一个额外的回合,该回合内,你使用牌可以额外选择任意名角色;出牌阶段限5次,你可以弃置一种类型的牌,摸等量手牌,若本次摸牌的牌中有类型、花色、点数任意一项全部一致,你摸等量牌并重复执行该流程,该回合结束时,你禁用该技能直到下次解锁',
			xjzh_wzry_xingchen: '星辰',
			xjzh_wzry_xingchen_info: '锁定技,你受到伤害转为星削15s后结算;你累计发动三次不为〖星辰〗的技能后摸牌至4张并视为使用一张【万箭齐发】',
			xjzh_wzry_liekong: '裂空',
			xjzh_wzry_liekong_info: '出牌阶段限一次,你可以弃置4张花色不同的牌并选择一名其他角色,其须弃置等量花色一致的牌,其每少弃置一张牌,视为你对其使用一张不计入次数的【杀】',
			xjzh_wzry_guichen: '归尘',
			xjzh_wzry_guichen_info: '你的出牌阶段开始时,你记录你的当前状态;本局游戏濒死时限一次,出牌阶段限一次,你可以回到你记录的状态',
			xjzh_wzry_guichen2: '归尘',
			xjzh_wzry_jianzhong: '剑冢',
			xjzh_wzry_jianzhong_info: '锁定技,每当你造成1点伤害后,你将牌堆顶1张牌置于武将牌上称为<剑>,最多10把<剑>;若你有<剑>,你造成伤害+x(x为<剑>的种类数量)',
			xjzh_wzry_cuijian: '淬剑',
			xjzh_wzry_cuijian_info: '锁定技,若你装备了/未装备武器牌,你使用基本牌/非延时锦囊牌额外结算一次',
			xjzh_wzry_jianlai: '剑来',
			xjzh_wzry_jianlai_info: '锁定技,当你的<剑>不少于10时,你获得所有<剑>,你使用<剑>无次数和距离限制,〖剑来〗、〖剑冢〗的基础数量+10',
			xjzh_wzry_bieyue: '别月',
			xjzh_wzry_bieyue_info: '锁定技,游戏开始时,你获得4个<月>标记,此后每隔50s你获得1个<月>,你最多只能拥有4个<月>;你可以移除一个<月>令你摸牌阶段额外摸一张牌或跳过判定、弃牌阶段、解除翻面',
			xjzh_wzry_shunhua: '瞬华',
			xjzh_wzry_shunhua_info: '出牌阶段,你可以选择至多x名角色,令其获得一个<月>标记,你移除等量标记(x为你拥有的标记数量)',
			xjzh_wzry_liuguang: '流光',
			xjzh_wzry_liuguang_info: '锁定技,你对有<月>的角色使用【杀】无视距离和防具;当你使用【杀】指定目标时,你令除你之外所有有<月>的角色选择:交给你一张牌或成为此【杀】目标,若其已有<月>,则此牌额外对其结算一次,其移除<月>标记',
			xjzh_wzry_liuguang2: '流光',
			xjzh_wzry_liuguang2_info: '锁定技,其他角色计算与你距离+1,你使用牌无距离限制且你使用牌次数*2,你使用【杀】无视防具且令其选择:交给你一张牌或此【杀】额外结算一次',
			xjzh_wzry_huanhai: '幻海',
			xjzh_wzry_huanhai_info: '限定技,出牌阶段,若你有<月>且当前轮数不为1且你的体力值不小于2,你选择一名角色并移除场上其他角色的所有<月>,你将<月>补至4个,禁用〖瞬华〗并修改〖流光〗直到〖幻海〗结束,令除你与其之外的其他角色暂时离开游戏直到你与其任意一名角色阵亡或你失去所有<月>,你获得等同于你体力值的护甲,且此后你每造成一点伤害获得一点护甲,〖幻海〗持续持续时间结束后,你获得等同于你护甲数量个<月>并移除所有护甲(不受〖别月〗标记上限限制)',
			xjzh_wzry_huanhai_append: '注:若当前游戏为第一轮且你的体力大于1,你无法发动〖幻海〗',
			xjzh_wzry_xunshou: '巡守',
			xjzh_wzry_xunshou_info: '锁定技,你对其他角色造成伤害后,其须将一张牌置于武将牌上称为<巡>,你摸两张牌,当其武将牌上有4张<巡>时,你对其造成一点伤害并禁用其所有技能直到其再次受到伤害后,其弃置所有<巡>',
			xjzh_wzry_konglie: '空烈',
			xjzh_wzry_konglie_info: '出牌阶段,你可以选择并使用场上的一张<巡>,你使用此牌无需合法性判定',
			xjzh_wzry_daofeng: '刀锋',
			xjzh_wzry_daofeng_info: '转换技,你的回合开始时,你获得附近所有角色各一张牌.<li>阴:每个出牌阶段开始时,若场上有<巡>,你可以展示并从场上<巡>中弃置至多4张花色不一致的牌,对一名其他角色造成等量伤害.<li>阳:当你受到伤害或体力流失时,若场上<巡>的数量不大于4,你防止之,你可以令一名角色将一张牌置于武将牌上称为<巡>,否则你摸两张牌',
			xjzh_wzry_huange: '欢歌',
			xjzh_wzry_huange_info: '回合开始时,你可以选择/重新选择一名其他角色成为你的契约队友,其手牌数量及手牌上限始终不小于你的手牌数量和手牌上限;若你已选择契约队友,你的手牌上限+2',
			xjzh_wzry_zhulang: '逐浪',
			xjzh_wzry_zhulang_info: '锁定技,你摸牌后,若你已选择契约队友,你额外摸等量牌,你将这些牌的任意张牌交给你的契约队友(至少一张),若如此做,你与其各回复一点体力',
			xjzh_wzry_tiannai: '天籁',
			xjzh_wzry_tiannai_info: '限定技,出牌阶段,你可以失去一点体力上限并失去所有技能,令你的契约队友重置武将牌和其除觉醒技之外的所有技能,其获得增益技能〖破晓〗',
			xjzh_wzry_kongou: '控偶',
			xjzh_wzry_kongou_info: '锁定技,持恒技,当你造成伤害后或对一名其他角色使用牌后,你获得其5个武将碎片',
			xjzh_wzry_miying: '秘影',
			xjzh_wzry_miying_info: '出牌阶段,你可以消耗50武将碎片将武将牌替换为你选择的武将并摸牌至体力上限直到该武将阵亡或你主动切换为<元歌>;当你从傀儡切换为本体时,你回复一点体力并摸两张牌;你切换傀儡或本体时均会清除所有控制效果;当你切换为傀儡时,保留技能〖纸鸢〗',
			xjzh_wzry_zhiyuan: '纸鸢',
			xjzh_wzry_zhiyuan_info: '出牌阶段限一次,若场上存在你武将碎片背包中的武将且你可切换为傀儡,你可以选择一名该武将,复制其装备区和手牌区,以此法获得的手牌不计入上限;若你未切换/已切换为傀儡,你与其他角色计算距离-1/使用【杀】的次数+1',
			xjzh_diablo_lamasi: '拉斯玛',
			xjzh_diablo_moruina: '莫瑞娜',
			xjzh_diablo_kaxia: '卡夏',
			xjzh_diablo_yafeikela: '亚菲克拉',
			xjzh_diablo_xiong: '变形·熊',
			xjzh_diablo_lang: '变形·狼',
			xjzh_diablo_lilisi: '莉莉丝',
			xjzh_diablo_nataya: '娜塔亚',
			xjzh_diablo_kelike: '科里克',
			xjzh_diablo_hunhuo: '魂火',
			xjzh_diablo_hunhuo_info: '锁定技,当你击败一名角色后,你将其灵魂收入死亡之书中;出牌阶段限一次,你可以消耗一个灵柩将死亡之书中收集的灵魂唤醒至场上为你作战,唤醒的角色拥有〖尸爆〗;当你阵亡时,你可以解放死亡之书中的一个灵魂与你交换身体',
			xjzh_diablo_hunhuo_use: '魂火',
			xjzh_diablo_shibao: '尸爆',
			xjzh_diablo_shibao_info: '锁定技,当你阵亡后,附近角色受到一点无来源伤害;每个回合结束后,若你的身份与拉斯玛不一致/不为统一阵营,你立即阵亡',
			xjzh_diablo_hunhuo_append: '注:死亡之书中的灵魂除非拉斯玛主动解放,否则无法再以选将的形式出现在场上;游戏开始时,拉斯玛会从死亡之书每个灵魂上随机获得一个技能(限定技、主公技、觉醒技除外),并根据灵魂数量(灵魂数量/3,向下取整)获得不同技能',
			xjzh_diablo_haoling: '号令',
			xjzh_diablo_haoling_info: '出牌阶段限一次,你可以选择一名被你唤醒的角色,令其摸一张牌并使用一张你指定目标的[伤害]卡牌,当前回合结束后,你执行一个额外的回合',
			xjzh_diablo_luanshe: '乱射',
			xjzh_diablo_luanshe_info: '锁定技,当你使用【杀】指定目标时,此【杀】增加1-3个且不为你和初始目标的随机额外目标(需合法)',
			xjzh_diablo_jingshe: '劲射',
			xjzh_diablo_jingshe_info: '锁定技,当你使用【杀】指定了多个目标时,你令其中一个目标获得1层易伤',
			xjzh_diablo_guanzhu: '灌注',
			xjzh_diablo_guanzhu_info: '你摸牌后,你可以选择令其中至多两张[伤害]卡牌获得灌注效果,你使用有灌注的牌无次数限制,且若你因此牌造成伤害,其获得对应一层灌注属性类型buff,灌注效果会被重新选择的灌注效果覆盖',
			xjzh_diablo_sushe: '速射',
			xjzh_diablo_sushe_info: '锁定技,你使用【杀】额外结算1-2次',
			xjzh_diablo_yingbi: '隐蔽',
			xjzh_diablo_yingbi_info: '出牌阶段限一次,你可以移除所有控制效果并令你攻击范围内的所以角色获得易伤,摸等量牌',
			xjzh_diablo_jianyu: '箭雨',
			xjzh_diablo_jianyu_info: '出牌阶段,你可以视为使用一张【万箭齐发】,冷却时间120秒',
			xjzh_diablo_lingshou: '灵兽',
			xjzh_diablo_lingshou_info: '锁定技,游戏开始时,你获得100个德鲁伊灵体贡品;回合开始时,你可以消耗100个<德鲁伊灵体贡品>,选择并变形为狼、熊之一直到你的下个回合开始时,根据你选择的不同灵兽,获得不同的技能和效果;当你造成伤害后,你有几率获得1-100个<德鲁伊灵体贡品>',
			xjzh_diablo_shilue: '施虐',
			xjzh_diablo_shilue_info: '出牌阶段,你可以移去x个德鲁伊灵体贡品并将其转为魔力,若你本轮游戏未发动该技能,你获得30%灵力消耗减免.(x为你的德鲁伊灵体贡品和已失去的魔力值中更小的值)',
			xjzh_diablo_leibao: '雷暴',
			xjzh_diablo_leibao_info: '风暴技能,出牌阶段,你可以消耗45点灵力召唤一道闪电并指定至多x名其他角色,对其造成1点雷属性伤害(x为技能等级).<br><br><li>会心:你有35%几率因此技能造成伤害时令其获得一层感电',
			xjzh_diablo_kuanghou: '狂吼',
			xjzh_diablo_kuanghou_info: '狼人技能,出牌阶段限一次,你可以回复x/5体力上限(向下取整)点体力值并回复20点灵力(x为技能等级).<br><br><li>会心:你有5%几率因此技能回复体力时回复体力至体力上限',
			xjzh_diablo_zhongou: '重欧',
			xjzh_diablo_zhongou_info: '熊人技能,锁定技,你使用[伤害]卡牌只能指定一个目标,你使用的[伤害]卡牌无视防具,若此牌造成伤害,你可以消耗35点灵力获得x点护甲并强固x点体力值(x为技能等级).<br><br><li>会心:你有25%几率因此技能造成伤害时令目标获得一层减速',
			xjzh_diablo_fensui: '粉碎',
			xjzh_diablo_fensui_info: '大地技能,锁定技,若你使用牌指定目标时未受伤,此牌结算两次;每隔6个回合,你下一次造成伤害翻倍.<br><br><li>会心:你有50%几率令因此技能受到伤害的目标眩晕',
			xjzh_diablo_duguan: '毒灌',
			xjzh_diablo_duguan_info: '当你造成伤害时,你可以消耗25点魔力令其视为毒属性伤害,你对中毒的目标造成伤害时,会心几率提高50%.<br><br><li>会心:你有33%几率发动该技能时不消耗魔力;你有25%几率造成毒属性伤害时令其获得一层中毒',
			xjzh_diablo_xianjing: '陷阱',
			xjzh_diablo_xianjing_info: '出牌阶段限一次,你可以观看牌堆随机x(x为牌堆牌的数量的百分之一并向上取整)张牌,并将其标记为<剧毒陷阱>,将这些牌洗入牌堆随机位置,当其他角色获得此牌时,其获得最大层数中毒.<br><br><li>会心:其他角色获得此牌时,你有20%几率摸2张牌并获得此牌;你有30%几率回复25点魔力',
			xjzh_diablo_baolu: '暴露',
			xjzh_diablo_baolu_info: '锁定技,每当你对<中毒>的角色造成1点伤害时,令此伤害视为毒属性伤害且+1.<br><br><li>会心:你有25%几率发动技能〖陷阱〗',
			xjzh_dnf_suodeluosi: '索德罗斯',
			xjzh_jujian: '巨剑',
			xjzh_guangjian: '光剑',
			xjzh_dunqi: '钝器',
			xjzh_duanjian: '短剑',
			xjzh_taidao: '太刀',
			xjzh_dnf_jianshen: '剑神',
			xjzh_dnf_jianshen_info: '锁定技,场上其他角色无法使用牌名、描述中有<剑>的牌;你的准备阶段、结束阶段,你选择并装备【魔剑·克拉丽丝】、【巨力黄金锤】、【天脊骨狱息】、【天丛云剑】、【名刀·观世正宗】',
			xjzh_dnf_aoyi: '奥义',
			xjzh_dnf_aoyi_info: '锁定技,你的武器栏无法废除,你切换武器牌时获得附近角色各一张手牌,并根据你此时装备的武器牌类型获得不同效果:<li>光剑,移除你的所有控制效果;<li>巨剑,令附近随机一名敌方角色武将牌翻至背面;<li>短剑,对附近随机一名敌方角色造成一点伤害;<li>太刀,弃置周围所有敌方角色的武器牌;<li>钝器,令周围随机一名敌方角色陷入混乱',
			xjzh_card_mojianklls: '魔剑·克拉丽丝',
			xjzh_card_mojianklls_info: '巨剑:你造成伤害无法被防止',
			xjzh_card_mojianklls_skill: '魔剑·克拉丽丝',
			xjzh_card_mojianklls_skill_info: '你造成伤害无法被防止',
			xjzh_card_julihjc: '巨力黄金锤',
			xjzh_card_julihjc_info: '钝器:你使用【杀】造成伤害可以令其跳过下个出牌阶段',
			xjzh_card_julihjc_skill: '巨力黄金锤',
			xjzh_card_julihjc_skill_info: '你使用【杀】造成伤害可以令其跳过下个出牌阶段',
			xjzh_card_tianjigyx: '天脊骨狱息',
			xjzh_card_tianjigyx_info: '光剑:你使用【杀】次数为2,你造成伤害令其感电,若其已感电,你使用【杀】次数+1',
			xjzh_card_tianjigyx_skill: '天脊骨狱息',
			xjzh_card_tianjigyx_skill_info: '你使用【杀】次数为2,你造成伤害令其感电,若其已感电,你使用【杀】次数+1',
			xjzh_card_guanshizhengzong: '观世正宗',
			xjzh_card_guanshizhengzong_info: '太刀:你使用【杀】造成伤害令其获得一层易伤,若其已有易伤且易伤层数达到上限,你令其移除所有易伤并对其造成等量伤害',
			xjzh_card_guanshizhengzong_skill: '观世正宗',
			xjzh_card_guanshizhengzong_skill_info: '你使用【杀】造成伤害令其获得一层易伤,若其已有易伤且易伤层数达到上限,你令其移除所有易伤并对其造成等量伤害',
			xjzh_card_tiancongyunjian: '天丛云剑',
			xjzh_card_tiancongyunjian_info: '短剑:你使用【杀】造成伤害后,可以选择一名其他角色令其受到一点无来源伤害',
			xjzh_card_tiancongyunjian_skill: '天从云剑',
			xjzh_card_tiancongyunjian_skill_info: '你使用【杀】造成伤害后,可以选择一名其他角色令其受到一点无来源伤害',
			xjzh_dnf_jianyi: '剑意',
			xjzh_dnf_jianyi_info: '当你受到伤害时,若你未装备武器牌,你可以发动〖剑神〗切换武器牌,否则根据你装备的武器类型获得不同效果:<li>光剑,对伤害来源造成等量伤害并令其获得一层感电<li>巨剑,防止无属性伤害并令伤害来源视为对你选择的一名其他角色使用一张不计入次数的【杀】<li>短剑,你摸两张牌<li>太刀,令其选择弃置伤害点数张牌或令你回复一点体力<li>钝器,令其立即结束当前出牌阶段',
			xjzh_xyj_sunwukong: '孙悟空',
			xjzh_xyj_tianhuo: '天火',
			xjzh_xyj_tianhuo_info: '本局游戏限三次,出牌阶段,你可以将任意张♦️️牌交给你的下家/上家,其需选择并交给其下家/上家x+1张牌直到其为你时,否则你对其造成x点火焰伤害终止技能流程.(x为其上家/下家选择的牌的数量)',
			xjzh_xyj_dongcha: '洞察',
			xjzh_xyj_dongcha_info: '锁定技,场上其他角色手牌对你可见,你摸牌阶段摸牌数+2',
			xjzh_xyj_ruyi: '如意',
			xjzh_xyj_ruyi_info: '锁定技,每当你不因〖天火〗造成/受到火焰伤害后,你随机获得【天罡火】、【混元丹】、【照妖镜】、【火云刀】、【定身咒】之一,以上五张牌不计入手牌上限且无法被弃置/获得',
			xjzh_card_tianganghuo: '天罡火',
			xjzh_card_tianganghuo_info: '出牌阶段对自己使用,获得一次〖天火〗使用次数',
			xjzh_card_hunyuandan: '混元丹',
			xjzh_card_hunyuandan_info: '出牌阶段对自己使用,将手牌补至体力上限(手牌中的【天罡火】、【混元丹】、【照妖镜】、【火云刀】、【定身咒】不记入手牌数量),你于本回合内使用牌无次数限制',
			xjzh_card_zhaoyaojing: '照妖镜',
			xjzh_card_zhaoyaojing_info: '出牌阶段对其他角色使用,其需弃置所有♦️️手牌,否则其失去一点体力上限',
			xjzh_card_huoyundao: '火云刀',
			xjzh_card_huoyundao_info: '你使用无属性【杀】时可将其改为【火杀】',
			xjzh_card_dingshenzhou: '定身咒',
			xjzh_card_dingshenzhou_info: '出牌阶段对其他角色使用,令其跳过下个出牌阶段和弃牌阶段',
			xjzh_sanguo_wenyang: '文鸯',
			xjzh_sanguo_chunhua: '张春华',
			xjzh_sanguo_caiyan: '蔡琰',
			xjzh_sanguo_zhongda: '司马懿',
			xjzh_sanguo_zhaoyun: '赵云',
			xjzh_sanguo_huangzhong: '黄忠',
			xjzh_sanguo_machao: '马超',
			xjzh_sanguo_weiyan: '魏延',
			xjzh_sanguo_kongming: '诸葛亮',
			xjzh_sanguo_pangtong: '庞统',
			xjzh_sanguo_zhangfei: '张飞',
			xjzh_sanguo_guanyu: '关羽',
			xjzh_sanguo_yueying: '黄月英',
			xjzh_sanguo_daqiao: '大乔',
			xjzh_sanguo_xiaoqiao: '小乔',
			xjzh_sanguo_dongzhuo: '董卓',
			xjzh_sanguo_huatuo: '华佗',
			xjzh_sanguo_tongyuan: '童渊',
			xjzh_sanguo_zuoci: '左慈',
			xjzh_sanguo_zhangjiao: '张角',
			xjzh_sanguo_zhangning: '张宁',
			xjzh_sanguo_lvbu: '吕布',
			xjzh_sanguo_zhenfu: '甄宓',
			xjzh_sanguo_sunhao: '孙皓',
			xjzh_sanguo_luxun: '陆逊',
			xjzh_sanguo_zhoutai: '周泰',
			xjzh_sanguo_guojia: '郭嘉',
			xjzh_sanguo_dianwei: '典韦',
			xjzh_sanguo_liubei: '刘备',
			xjzh_sanguo_caocao: '曹操',
			xjzh_sanguo_bogui: '公孙瓒',
			xjzh_sanguo_ganning: '甘宁',
			xjzh_sanguo_xuzhu: '许诸',
			xjzh_sanguo_xunyou: '荀攸',
			xjzh_sanguo_zhangbao: '张宝',
			xjzh_sanguo_yuanshao: '袁绍',
			xjzh_sanguo_zhangliao: '张辽',
			xjzh_sanguo_yuji: '于吉',
			xjzh_sanguo_simahui: '司马徽',
			xjzh_sanguo_sunquan: '孙权',
			xjzh_sanguo_zuoyou: '左幽',
			xjzh_sanguo_nanhua: '南华老仙',
			xjzh_sanguo_huaxiong: '华雄',
			xjzh_sanguo_zhangrang: lib.config.extension_仙家之魂_xjzh_jiexiantupo ? '界张让' : '张让',
			xjzh_sanguo_zhangrang_prefix: '界',
			xjzh_sanguo_diaochan: lib.config.extension_仙家之魂_xjzh_jiexiantupo ? '界貂蝉' : '貂蝉',
			xjzh_sanguo_diaochan_prefix: '界',
			xjzh_sanguo_guanlu: lib.config.extension_仙家之魂_xjzh_jiexiantupo ? '界管辂' : '管辂',
			xjzh_sanguo_guanlu_prefix: '界',
			xjzh_sanguo_espzhangjiao: 'esp张角',
			xjzh_sanguo_espzhangjiao_prefix: 'esp',
			xjzh_sanguo_espzuoci: 'esp左慈',
			xjzh_sanguo_espzuoci_prefix: 'esp',
			xjzh_sanguo_espliuxie: 'esp刘协',
			xjzh_sanguo_espliuxie_prefix: 'esp',
			xjzh_sanguo_espsunce: 'esp孙策',
			xjzh_sanguo_espsunce_prefix: 'esp',
			xjzh_sanguo_spkongming: 'SP诸葛亮',
			xjzh_sanguo_spkongming_prefix: 'SP',
			xjzh_sanguo_spzhangjiao: 'SP张角',
			xjzh_sanguo_spzhangjiao_prefix: 'SP',
			xjzh_sanguo_sphuatuo: 'SP华佗',
			xjzh_sanguo_sphuatuo_prefix: 'SP',
			xjzh_sanguo_splvbu: 'SP吕布',
			xjzh_sanguo_splvbu_prefix: 'SP',
			xjzh_sanguo_jueqing: '绝情',
			xjzh_sanguo_jueqing_info: '锁定技,场上所有角色体力流失和造成伤害不触发技能结算',
			xjzh_sanguo_shangshi: '伤逝',
			xjzh_sanguo_shangshi_info: '锁定技,当你使用牌后,若你已受伤,你摸一张牌,若此牌与你上一张使用的牌颜色不一致,你可以弃置一名其他角色一张牌',
			xjzh_sanguo_huishi: '慧识',
			xjzh_sanguo_huishi_info: '锁定技,你令其他角色的限定技、觉醒技、主公技、使命技等特殊技能失效(有<星魂>标签的技能除外)',
			xjzh_sanguo_pijian: '披坚',
			xjzh_sanguo_pijian_info: '你获得一个额外的武器栏;你的准备阶段,你可以从随机3个与【杀】有关的技能中选择一个将其视为一张武器牌装备之,当你失去此牌时,你将手牌补至体力上限',
			xjzh_sanguo_zhirui: '执锐',
			xjzh_sanguo_zhirui_info: '锁定技,你的回合内,若你的装备栏有因〖披坚〗装备的武器牌,你使用非[伤害]卡牌后获得一张与你本回合上一次因此技能获得的与其牌名不一致的[伤害]卡牌',
			xjzh_sanguo_yongjue: '勇决',
			xjzh_sanguo_yongjue_info: '出牌阶段限一次,你可以弃置武器栏的所有牌,按顺序使用你本回合已使用的所有[伤害]卡牌(不改变目标),你每因此使用一张牌则失去一点体力',
			xjzh_sanguo_daoshu: '道术',
			xjzh_sanguo_daoshu_info: '锁定技,游戏开始时、你的回合开始时、你受到伤害后,你展示3张未上场的群势力武将牌,从中选择一张获得其所有技能直到你的回合结束.结束阶段,你从这些技能中选择获得1个技能',
			xjzh_sanguo_huanhua: '幻化',
			xjzh_sanguo_huanhua_info: '锁定技,你无法失去体力上限,你无法被翻面、横置;你受到伤害、失去体力最多为1',
			xjzh_sanguo_juejing: '绝境',
			xjzh_sanguo_juejing_info: '锁定技,你的体力上限锁定为2,你的手牌数锁定为4,你始终跳过摸牌阶段;当你的体力发生变化后,你重置武将牌',
			xjzh_sanguo_longhun: '龙魂',
			xjzh_sanguo_longhun_info: '锁定技,你可以将一张手牌按照以下规则使用或打出:♦️️️当做【火杀】;♣️️️当做【闪】;♥️️️当做【桃】;♠️️️当做【无懈可击】',
			xjzh_sanguo_longhun1: '龙魂♥️️',
			xjzh_sanguo_longhun2: '龙魂♦️️',
			xjzh_sanguo_longhun3: '龙魂♠️️',
			xjzh_sanguo_longhun4: '龙魂♣️️',
			xjzh_sanguo_peijian: '佩剑',
			xjzh_sanguo_peijian_info: '锁定技,你的攻击距离无限且你使用【杀】无视防具',
			xjzh_sanguo_kuanggu: '狂骨',
			xjzh_sanguo_kuanggu_info: '锁定技,你的体力值锁定为你的体力上限,你于濒死阶段之外回复体力无效<li>你的体力上限不小于1时,防止所有伤害和体力流失改为失去等量体力上限;回合结束时,若你于回合内造成了伤害,你增加等量体力上限;判定阶段开始时,若你的判定区有乐不思蜀或兵粮寸断,你跳过判定阶段改为判定牌直接生效;你的最大体力上限为8',
			xjzh_sanguo_kuangxi: '狂袭',
			xjzh_sanguo_kuangxi_info: '你使用非延时锦囊牌指定目标时,可以终止此结算,视为对其使用一张无视防具且无次数限制的【杀】,摸一张牌,若你使用此法造成伤害,你增加一点体力上限',
			xjzh_sanguo_aogu: '傲骨',
			xjzh_sanguo_aogu_info: '出牌阶段限一次,若你的体力上限不小于6,你可以将其调整为2,摸3张牌并获得技能武圣、咆哮(界)<li>摸牌阶段开始时,若你的体力上限不小于8,你将你的体力上限改为4,摸X张牌(X为你失去的体力上限),并开始一个额外的回合<li>你的手牌上限始终为5',
			xjzh_sanguo_qicai: '奇才',
			xjzh_sanguo_qicai_info: '锁定技,你使用的非延时锦囊牌无法被其他角色响应且无距离限制,你摸一张牌,你以此法获得的牌不计入手牌上限;你的【过河拆桥】视为【顺手牵羊】',
			xjzh_sanguo_jiqiao: '机巧',
			xjzh_sanguo_jiqiao_info: '锁定技,一名角色判定时或回复体力后,你可以令其摸两张牌或你摸一张牌',
			xjzh_sanguo_jianqing: '鉴情',
			xjzh_sanguo_jianqing_info: '限定技,当你阵亡时,你可以选择一名其他角色,令其获得除该技能外你的所有技能并摸x张牌(x为其体力上限)',
			xjzh_sanguo_duice: '对策',
			xjzh_sanguo_duice_info: '锁定技,回合开始时,你进行一次红色判定,判定成功后,若你已受伤,你回复一点体力,否则摸两张牌<li>你使用非延时锦囊牌可以额外选择一个目标<li>当你成为决斗、火攻、顺手牵羊、过河拆桥的目标时,你可以为此牌增加一个目标',
			xjzh_sanguo_zhiji: '智计',
			xjzh_sanguo_zhiji_info: '锁定技,你不能成为【南蛮入侵】的目标<li>其他角色使用一张非转化的【南蛮入侵】、【万箭齐发】、【火攻】时你从牌堆获得一张同名牌<li>你可以将一张牌当做无懈可击打出',
			xjzh_sanguo_zhiji2: '智计',
			xjzh_sanguo_bazhen: '八阵',
			xjzh_sanguo_bazhen_info: '锁定技,你未装备防具时视为装备着八卦阵,你受到的火焰伤害最大为1',
			xjzh_sanguo_guihan: '归汉',
			xjzh_sanguo_guihan_info: '限定技,当你即将阵亡时,你终止此结算并失去一点体力上限,回复体力至体力上限,令全场除你之外的其他角色失去一点体力并选择移除武将牌上的一个技能,你移除技能〖悲歌〗并可以令一名其他角色获得〖悲歌〗',
			xjzh_sanguo_caiqing: '才情',
			xjzh_sanguo_caiqing_info: '出牌阶段开始时,你可以摸x张牌(x为你手牌中花色最多的牌的数量)',
			xjzh_sanguo_zhishu: '知书',
			xjzh_sanguo_zhishu_info: '其他角色出牌阶段开始时,你可以观看并选择其区域内至多两张牌获得之,若如此做,你摸一张牌,你须交给其等量手牌',
			xjzh_sanguo_beige: '悲歌',
			xjzh_sanguo_beige_info: '一名角色受到不由你造成的伤害后,你可以弃一张牌令其进行一次判定,判定结果为<li>♥️️其回复1点体力(濒死阶段改为回复伤害点数点体力)<li>♦️️︎其摸两张牌<li>♣️️伤害来源弃两张牌(无牌则改为你摸等量伤害张牌)<li>♠️️伤害来源将其武将牌翻面(若其已翻面则你摸等量伤害张牌)',
			xjzh_sanguo_liegong: '烈弓',
			xjzh_sanguo_liegong_info: '你使用【杀】指定目标可以令此【杀】无法闪避且根据条件发动以下效果:<li>♥️️此【杀】额外指定x个目标(x为你手牌中的非♥️️牌数量,每种花色最大为1)<li>♦️️此【杀】攻击距离+y(y为此【杀】的点数)<li>♣️️此【杀】令其额外弃置z张手牌(z为你手牌中非♣️️牌的数量,每种花色最大为1)',
			xjzh_sanguo_zhujian: '铸箭',
			xjzh_sanguo_zhujian_info: '锁定技,当你使用【杀】造成伤害或受到【杀】的伤害时,你将牌堆顶一张牌置于武将牌上称为<箭>,你的回合开始时,你获得所有<箭>',
			xjzh_sanguo_chuzhen: '出阵',
			xjzh_sanguo_chuzhen_info: '锁定技,你使用点数递增的【杀】无次数限制',
			xjzh_sanguo_lanzheng: '揽政',
			xjzh_sanguo_lanzheng_info: '锁定技,你的摸牌阶段,你额外摸X张牌(X为你的体力值),你的弃牌阶段,若你需弃置的牌的数量不小于你的体力上限,你失去一点体力,否则你获得一点体力上限',
			xjzh_sanguo_hengzheng: '横征',
			xjzh_sanguo_hengzheng_info: '锁定技,其他角色出牌阶段结束时,若其回合内没有造成伤害,其需要交给你一张牌或你对其造成一点伤害',
			xjzh_sanguo_baolian: '暴敛',
			xjzh_sanguo_baolian_info: '锁定技,其他角色的出牌阶段开始时,其须展示一张手牌,若你有与其展示的牌类型相同的手牌,你视为对其使用一张【杀】,否则你获得此牌',
			xjzh_sanguo_linnue: '凌虐',
			xjzh_sanguo_linnue_info: '主公技,场上与你势力不一致的角色对你造成伤害-1,你对场上势力与你不一致的角色造成伤害+1',
			xjzh_sanguo_xiongbin: '雄兵',
			xjzh_sanguo_xiongbin_info: '出牌阶段限一次,你可以扣置一张手牌,令其他角色依次展示一张手牌(无牌则跳过),你视为对其中花色、点数任意一项一致的目标使用一张无次数限制且无视防具的【杀】,技能结算后,你获得其他角色展示的花色、点数均与你不同的牌',
			xjzh_sanguo_tieji: '铁骑',
			xjzh_sanguo_tieji_info: '当你使用【杀】指定目标时,你可以令其进行一次判定,其需弃置一张与判定牌花色或点数一致的牌,否则此【杀】无法闪避,若此判定牌花色为♥️️,此【杀】不计入出牌次数,若为♠️️,其于此【杀】结算前所有技能失效',
			xjzh_sanguo_jieqiang: '劫枪',
			xjzh_sanguo_jieqiang_info: '锁定技,你于摸牌阶段额外摸x张牌;你的手牌上限+x(x为你已失去的体力值或体力取更高的值)',
			xjzh_sanguo_shengxin: '圣心',
			xjzh_sanguo_shengxin_info: '锁定技,出牌阶段限一次,你可以弃置一张♥️️牌并选择一个目标,若其体力小于你的体力值,你令其将体力值回复至与你一致,摸一张牌,若其体力不小于你,你令其摸x张牌(x为其体力上限且至多为5)<li>其他角色使用或打出红色牌时,你有30%几率获得之<li>你的红色手牌不计入手牌上限',
			xjzh_sanguo_shengxin1: '圣心',
			xjzh_sanguo_jishi: '济世',
			xjzh_sanguo_jishi_info: '一名角色濒死时,你可以展示牌堆顶x张牌(x为你已经损失的体力+1),若有♥️️则令其回复体力至1,你获得剩余的非红色牌',
			xjzh_sanguo_liangyi: '良医',
			xjzh_sanguo_liangyi_info: '限定技,出牌阶段,当你满足下列条件之一:①发动圣心3次②发动济世并成功使其回复体力3次;你可以选择一名武将,令其摸x张牌,开始一个额外的回合,回合结束后,其立即失去所有体力(x为目标的体力加场上存活的人数)',
			xjzh_sanguo_liangyi2: '良医',
			xjzh_sanguo_yinren: '隐忍',
			xjzh_sanguo_yinren_info: '锁定技,游戏开始时,若场上角色数量大于3,你将体力值锁定为1;其他角色阵亡后,若你未因该技能获得至少2点的体力上限,你获得一点体力上限,依次获得技能〖极略〗、〖奇才〗,当你拥有以上两个技能时,你移除该技能',
			xjzh_sanguo_jilue: '极略',
			xjzh_sanguo_jilue_info: '出牌阶段限一次,你可以选择一名其他角色,令其将手牌调整与你一致,你将手牌补至体力上限',
			xjzh_sanguo_qicaix: '奇才',
			xjzh_sanguo_qicaix_info: '出牌阶段,你可以弃置两张相同类型的牌,摸一张与你弃置牌类型不一致的牌,你使用这张牌无距离、次数限制',
			xjzh_sanguo_bolue: '博略',
			xjzh_sanguo_bolue_info: '锁定技,你的准备阶段开始时,若你不拥有技能〖隐忍〗,你进行一次判定,并随机获得一个该花色对应势力的技能直到你的下个准备阶段开始时,♠️️♥️️♣️️♦️️分别对应魏蜀吴群',
			xjzh_sanguo_biantian: '变天',
			xjzh_sanguo_biantian_info: '觉醒技,当你进行〖博略〗判定之后,你记录判定牌花色,若你记录的花色各不相同且不小于4,你获得一点体力上限,从牌堆中获得花色各不相同的四张牌,你获得技能〖鹰视〗、〖狼顾〗,〖博略〗发动时不再判定,你随机获得魏蜀吴群四个势力各一个技能',
			xjzh_sanguo_yingshi: '鹰视',
			xjzh_sanguo_yingshi_info: '当你受到/造成伤害后,你可以观看伤害来源/目标的手牌并获得其中一张牌',
			xjzh_sanguo_langgu: '狼顾',
			xjzh_sanguo_langgu_info: '锁定技,当你摸/获得牌时,你取消之,改为从牌堆中随机获得四张花色不同的牌',
			xjzh_sanguo_keluan: '克乱',
			xjzh_sanguo_keluan_info: '当你成为【杀】和【决斗】的目标时,你可以获得其/摸一张牌,若如此做,你视为对其使用一张【杀】(此【杀】无视防具且不计入出牌次数)',
			xjzh_sanguo_cuifeng: '摧锋',
			xjzh_sanguo_cuifeng_info: '其他角色成为【杀】和【决斗】的唯一目标时,你可以令其摸一张牌,你成为此卡牌的目标',
			xjzh_sanguo_chaohuang: '朝凰',
			xjzh_sanguo_chaohuang_info: '锁定技,你使用【杀】被响应后,若你不能再使用【杀】或【酒】,你使用【杀】和酒【酒】的次数加1<li>你使用决斗或成为决斗目标后,在决斗结算之前,你每失去一张牌,摸一张牌',
			xjzh_sanguo_liansuo: '连锁',
			xjzh_sanguo_liansuo_info: '锁定技,你的回合内,你的上家和下家非锁定技失效;你使用〖铁索连环〗或♣️️非装备牌/非延时锦囊牌可以额外选择一个目标',
			xjzh_sanguo_hengzhou: '横舟',
			xjzh_sanguo_hengzhou_info: '锁定技,场上其他角色与横置相关的技能失效;当你处于横置状态时,场上所有角色横置状态与你一致;被横置的角色受到火焰伤害+1',
			xjzh_sanguo_moulue: '谋略',
			xjzh_sanguo_moulue_info: '每回合限一次,当一张♣️️牌结算后,若你未记录此牌点数,你可以弃置一张手牌获得此牌,若此牌点数小于弃置牌点数,你选择获得弃牌堆x张非♣️️牌记录此牌点数(x为两张牌点数之差,至多为你的体力上限)',
			xjzh_sanguo_shijiu: '嗜酒',
			xjzh_sanguo_shijiu_info: '锁定技,你的酒均视为【杀】;你使用黑色牌或【杀】时,视为使用一张【酒】',
			xjzh_sanguo_shayi: '杀意',
			xjzh_sanguo_shayi_info: '锁定技,你使用【杀】无次数与距离限制;当你成为【杀】的目标时,你可以弃置一张【杀】将此牌的目标改为任意武将牌上有<魂>标记的角色,其移除一个<魂>标记',
			xjzh_sanguo_zhenhun: '震魂',
			xjzh_sanguo_zhenhun_info: '锁定技,当你受到/造成伤害后,伤害来源/其获得一个<魂>标记,当一名角色的<魂>不小于3时,其移除所有标记,你可以令其失去等量体力;你使用【杀】指定其他角色时,若其有<魂>标记,其所有技能失效直到此【杀】结算,你摸x张牌(x为其武将牌上<魂>的数量)',
			xjzh_sanguo_bujiao: '布教',
			xjzh_sanguo_bujiao_info: '其他角色出牌阶段开始时,你可以交给其一张手牌,若如此做,你将牌堆顶的一张牌置于武将牌上称为<教>,出牌阶段,你可以弃置一张<教>将其当作任意一张对应类型的牌使用之',
			xjzh_sanguo_bujiao2: '布教',
			xjzh_sanguo_bujiao2_buckup: '布教',
			xjzh_sanguo_taiping: '太平',
			xjzh_sanguo_taiping_info: '当你受到伤害时,你可以判定:黑色,你将判定牌置于武将牌上,摸一张牌,红色,你回复一点体力,其结束当前回合',
			xjzh_sanguo_fangshu: '方术',
			xjzh_sanguo_fangshu_info: '出牌阶段开始前,你展示牌堆顶x张牌,若黑色牌不小于红色牌,你获得所有黑色牌,对y名角色造成一点雷电伤害或对一名角色造成y点雷电伤害(至多为2),否则你选择其中z张牌将其置于武将牌上(x为场上与你势力一致的角色数量且至低为2,y为黑色牌的数量,z为颜色少的牌数且至低为1)',
			xjzh_sanguo_shanxi: '闪戏',
			xjzh_sanguo_shanxi_info: '锁定技,你的【闪】不计入手牌上限,你无法成为闪电的目标;其他角色使用/打出【闪】时,你可以令其执行一次【闪电】判定,且以此法执行的判定结果以黑色2-9生效',
			xjzh_sanguo_leijix: '雷祭',
			xjzh_sanguo_leijix_info: '锁定技,当你使用/打出闪、受到伤害后,你进行一次判定并获得判定牌:<li>黑色,你对一名角色造成一点雷电伤害<li>红色,你令一名角色横置/取消横置',
			xjzh_sanguo_leihun: '雷魂',
			xjzh_sanguo_leihun_info: '锁定技,你造成所有伤害视为雷属性伤害且你是所有雷电伤害的来源,当你受到雷电伤害时,你回复等量体力',
			xjzh_sanguo_shendao: '神道',
			xjzh_sanguo_shendao_info: '判定阶段开始时,你可以展示牌堆顶x张牌并选择一张作为判定牌,此结果不可更改(x为你的体力值且至多为4至少为2)',
			xjzh_sanguo_shendao2: '神道',
			xjzh_sanguo_dianjie: '电界',
			xjzh_sanguo_dianjie_info: '锁定技,当你受到及造成雷电伤害后,获得等量个<电>标记;出牌阶段限一次,你可以移除6个标记并选择至多3个目标,令其受到至多3点无来源雷电伤害,你可以任意分配伤害点数,由此法造成雷电伤害不获得标记',
			xjzh_sanguo_dianjie2: '电界',
			xjzh_sanguo_dianjie2: '电界',
			xjzh_sanguo_huangtian: '黄天',
			xjzh_sanguo_huangtian_info: '锁定技,主公技,你视为拥有技能〖新雷击〗、〖义施〗',
			xjzh_sanguo_yishi: '义施',
			xjzh_sanguo_yishi_info: '每个其他角色的准备阶段开始时,你可以展示牌堆2张牌,你与其各获得其中一张牌',
			xjzh_sanguo_shenji: '神戟',
			xjzh_sanguo_shenji_info: '锁定技,若你未装备武器牌,你使用【杀】可以指定至多3个目标,若你装备了武器牌,你视为拥有技能〖无双〗,若你装备了武器方天画戟,你使用【杀】造成伤害+1',
			xjzh_sanguo_shenwei: '神威',
			xjzh_sanguo_shenwei_info: '锁定技,当你的体力变化后,若此时你的体力大于2,你摸两张牌,否则你将体力上限改为2,回复体力至体力上限,获得技能〖鬼躯〗、〖修罗〗,技能结算后,你立即结束当前回合并开始一个额外的回合,你失去该技能',
			xjzh_sanguo_guiqu: '鬼躯',
			xjzh_sanguo_guiqu_info: '锁定技,你的体力上限锁定为2;你的体力变化后,若你未受伤,你可以视为使用一张【杀】,否则你可以移除一个非固有技能,回复一点体力并摸一张牌',
			xjzh_sanguo_xiuluo: '修罗',
			xjzh_sanguo_xiuluo_info: '锁定技,你使用【杀】造成伤害后/受到【杀】的伤害时,获得一个与【杀】相关的技能',
			xjzh_sanguo_luoshen: '洛神',
			xjzh_sanguo_luoshen_info: '锁定技,若你使用牌的花色与上一张不同,你摸一张牌<li>一名武将的判定牌生效之后,若为红色你摸一张牌,若为黑色,你选择一个目标弃置其一张牌<li>你改为从牌堆底摸牌',
			xjzh_sanguo_luoshen1: '洛神',
			xjzh_sanguo_luoshen1_info: '是否发动洛神弃置一个目标一张牌',
			xjzh_sanguo_luoshen2: '洛神',
			xjzh_sanguo_qixian: '七弦',
			xjzh_sanguo_qixian_info: '你的手牌上限始终为7',
			xjzh_sanguo_qingguo: '倾国',
			xjzh_sanguo_qingguo_info: '当你需要使用或打出一张闪时,若你的手牌中无闪,你可以判定,若为黑色,你视为使用或打出之,若不为黑色,你可以弃置两张牌视为使用或打出之<li>当一名武将濒死时,你可以令其进行一次红色判定,若为♥️️,其视为使用了一张桃,若为♦️️,则你需要额外弃置一张♥️️手牌令其视为使用桃',
			xjzh_sanguo_qingguo1: '倾国',
			xjzh_sanguo_mingzheng: '明政',
			xjzh_sanguo_mingzheng_info: '锁定技,其他吴势力角色摸牌阶段摸牌数+1,你的摸牌阶段摸x张牌(x为场上吴势力角色数量);你受到伤害后失去该技能,你获得技能〖暴政〗',
			xjzh_sanguo_baozheng: '暴政',
			xjzh_sanguo_baozheng_info: '锁定技,其他角色出牌阶段开始时,你获得其一张牌,其获得一个<暴政>标记;你对有<暴政>标记的角色造成伤害+1,移除其所有<暴政>标记并摸等量牌',
			xjzh_sanguo_renjun: '人君',
			xjzh_sanguo_renjun_info: '主公技,你将〖明政〗中的摸牌数+1改为+2;你将〖暴政〗中的中的造成伤害+1改为+2;若你拥有〖明政〗,你的出牌阶段开始时,你视为使用一张【五谷丰登】,否则你视为使用一张【万箭齐发】',
			xjzh_sanguo_wusheng: '武圣',
			xjzh_sanguo_wusheng_info: '锁定技,你受到伤害或不由〖武圣〗造成伤害后,获得等量<武>标记;你可以移除一个<武>标记视为使用/打出一张【杀】,此【杀】无视距离;若你已装备【青龙偃月刀】,你使用【杀】次数为+x(x为你已损体力值)',
			xjzh_sanguo_hengdao: '横刀',
			xjzh_sanguo_hengdao_info: '锁定技,你的摸牌阶段开始时,若你未装备【青龙偃月刀】,你装备之,否则你的摸牌数+2',
			xjzh_sanguo_wushen: '武神',
			xjzh_sanguo_wushen_info: '限定技,当你阵亡时,若你有<武>,你可以使用x张【杀】(x为你的<武>标记数量)',
			xjzh_sanguo_mashu: '马术',
			xjzh_sanguo_mashu_info: '锁定技,你计算与其他角色的距离时减1,当你的体力为1时,你使用【杀】次数+1',
			xjzh_sanguo_feijiang: '飞将',
			xjzh_sanguo_feijiang_info: '出牌阶段限一次,若你体力不小于1,你可以受到一点伤害并弃置所有手牌(若你体力为1则改为失去体力上限,若你体力上限为1则取消此前置条件),摸一张牌,若此牌不为【杀】,你摸x张牌,否则你于回合内造成伤害加1且攻击距离无限(x为此牌的点数),回合结束时,你将手牌弃至/补至1张;若你于回合内造成了伤害,回合结束后你回复一点体力',
			xjzh_sanguo_jiwu: '极武',
			xjzh_sanguo_jiwu_info: '出牌阶段,你可以弃置一张牌,获得一项:<强袭>、<铁骑>(界)、<旋风>、<完杀>,直到回合结束',
			xjzh_sanguo_xuanfenglvbu: '旋风',
			xjzh_sanguo_xuanfenglvbu_info: '当你失去装备区内的牌时,或于弃牌阶段弃置了两张或更多的手牌后,你可以依次弃置一至两名其他角色的共计两张牌,或将一名其他角色装备区内的一张牌移动到另一名其他角色的装备区内',
			xjzh_sanguo_tiejilvbu: '铁骑',
			xjzh_sanguo_tiejilvbu_info: '当你使用【杀】指定一名角色为目标后,你可以进行一次判定并令该角色的非锁定技失效直到回合结束,除非该角色弃置一张与判定结果花色相同的牌,否则不能使用【闪】抵消此【杀】',
			xjzh_sanguo_wanshalvbu: '完杀',
			xjzh_sanguo_wanshalvbu_info: '锁定技,你的回合内,除你以外,不处于濒死状态的角色不能使用【桃】',
			xjzh_sanguo_qiangxilvbu: '强袭',
			xjzh_sanguo_qiangxilvbu_info: '出牌阶段限两次,你可以失去一点体力或弃置一张武器牌,一名本阶段内未成为过〖强袭〗的目标的其他角色造成一点伤害',
			xjzh_sanguo_shishu: '识书',
			xjzh_sanguo_shishu_info: '锁定技,每当你造成/受到1点伤害后,你观看牌堆顶2张牌,并选择获得其中一张,将另外一张置于武将牌上称为<书>;你的红色/黑色<书>视为【火攻】/【无懈可击】',
			xjzh_sanguo_wulue: '武略',
			xjzh_sanguo_wulue_info: '出牌阶段限一次,你可以展示所有<书>,若红色牌多余黑色牌,你获得技能〖攻心〗,否则你获得〖制衡〗,你可以令一名其他角色视为装备【藤甲】直到回合结束',
			xjzh_sanguo_liantui: '连退',
			xjzh_sanguo_liantui_info: '锁定技,当你有红色/黑色<书>时,你无法成为红色/黑色锦囊牌的目标;当你失去最后一张手牌时,你将手牌补至体力上限,若你已受伤,你回复一点体力',
			xjzh_sanguo_buqu: '不屈',
			xjzh_sanguo_buqu_info: '锁定技,你的回合开始时,若你已受伤,你回复一点体力,否则你获得一点体力上限;当你濒死时,若你的体力上限大于你的初始体力上限,你减一点体力上限,并回复体力至1',
			xjzh_sanguo_fenji: '奋激',
			xjzh_sanguo_fenji_info: '当一名角色受到伤害后,你可以减一点体力上限,并展示牌堆顶x张牌,你选择并令其获得其中一种花色的所有牌,你获得其余的牌,你可以对一名不为你的角色使用一张【杀】(需合法)(x为你的体力上限*2)',
			xjzh_sanguo_guimou: '鬼谋',
			xjzh_sanguo_guimou_info: '锁定技,牌堆顶的3张牌始终对你可见,你可以选择并使用/打出牌堆顶的3张牌<li>你的手牌区始终没有牌',
			xjzh_sanguo_guimou1: '鬼谋',
			xjzh_sanguo_guimou2: '鬼谋',
			xjzh_sanguo_tianji: '天机',
			xjzh_sanguo_tianji_info: '锁定技,出牌阶段限一次,你可以交换两名角色的判定区',
			xjzh_sanguo_tianqi: '天启',
			xjzh_sanguo_tianqi_info: '锁定技,游戏开始时,你获得场上其他角色的一个限定技,其该技能失效,你无视该技能发动条件;出牌阶段限一次,你可以选择一名武将牌上有觉醒技的角色,令其立即觉醒',
			xjzh_sanguo_qiangxi: '强袭',
			xjzh_sanguo_qiangxi_info: '锁定技,出牌阶段限两次,你可以选择任意张装备牌令一个未因此技能流失体力的目标,令其流失x+y点体力(x为你选择的武器牌,y为你选择的非武器牌的一半(向上取整)),若你选择了非武器牌,你流失等同于非武器牌一半数量的体力(向下取整)<li>当你受到伤害后,你从牌堆或弃牌堆获得一张武器牌<li>当你回复体力后,你从牌堆或弃牌堆获得一张非武器牌的装备牌<li>你可以装备由此法获得的装备',
			xjzh_sanguo_longnu: '龙怒',
			xjzh_sanguo_longnu_info: '锁定技,转换技,每个其他回合开始时,若你的手牌不大于你的体力值或其手牌为全场唯一最多,你获得其一张牌,其摸一张牌<li>阴:出牌阶段开始时,你失去一点体力并摸一张牌,你的红色手牌均视为【火杀】且无距离限制,且你可以将你武将牌上的一张黑色<兵>当万箭齐发使用(每回合限一次)直到回合结束<li>阳:出牌阶段开始时,你失去一点体力上限并摸一张牌,你的黑色手牌均视为【雷杀】且无次数限制,且你可以将你武将牌上的一张红色<兵>当桃园结义使用(每回合限一次)直到回合结束',
			xjzh_sanguo_longnu_taoyuan: '龙怒',
			xjzh_sanguo_longnu_wanjian: '龙怒',
			xjzh_sanguo_jieyi: '结义',
			xjzh_sanguo_jieyi_info: '锁定技,主公技,你视为拥有技能〖轻进〗、〖知兵〗',
			xjzh_sanguo_qinjin: '轻进',
			xjzh_sanguo_qinjin_info: '锁定技,你使用【杀】指定目标后,若你造成伤害,你获得其一张牌,否则其摸一张牌,若其势力为吴,其摸两张牌;当你受到<吴>势力武将的伤害后,你需要额外弃置一张牌',
			xjzh_sanguo_qinjin2: '轻进',
			xjzh_sanguo_zhibing: '知兵',
			xjzh_sanguo_zhibing_info: '每回合限一次,摸牌阶段除外,当你摸牌时,你可以对一名攻击范围内的目标使用一张无视防具的【杀】(该【杀】不计入出牌次数),若如此做,你取消摸牌改为将牌堆顶的一张牌置于武将牌上称为<兵>',
			xjzh_sanguo_daizhao: '代诏',
			xjzh_sanguo_daizhao_info: '锁定技,你视为拥有主公的所有技能;主公的准备阶段开始时,若你不为主公,你可以将手牌数量补至与其一致或体力回复与其一致',
			xjzh_sanguo_guixin: '归心',
			xjzh_sanguo_guixin_info: '你可以跳过摸牌阶段令其他角色选择弃置一张牌或交给你一张牌,若你的手牌数量为场上最少之一,你重复此流程;本回合内,若你发动了此技能,你对选择弃牌的角色使用牌无次数限制,你的回合结束后,若你的手牌数量为全场唯一最多,你令所有选择给牌的角色摸一张牌',
			xjzh_sanguo_feiying: '飞影',
			xjzh_sanguo_feiying_info: '锁定技,手牌数大于你的角色无法指定你为卡牌目标,你对手牌数小于你的角色使用牌无距离限制',
			xjzh_sanguo_batu: '霸图',
			xjzh_sanguo_batu_info: '主公技,锁定技,其他魏势力角色体力变化后,你可以摸一张牌或令其摸一张牌',
			xjzh_sanguo_guanxing: '观星',
			xjzh_sanguo_guanxing_info: '其他角色的手牌对你始终可见;你的准备/结束阶段,你可以观看牌堆顶的5/3张牌,并将其以任意顺序置于牌堆项或牌堆底',
			xjzh_sanguo_xinghun: '星魂',
			xjzh_sanguo_xinghun_info: '锁定技,游戏开始时,你随机展示未上场角色的7个技能,并选择获得其中两个技能;你受到伤害后,你摸一张牌并展示此牌,你获得一个你未获得且描述中含有此牌牌名的技能',
			xjzh_sanguo_qixing: '七星',
			xjzh_sanguo_qixing_info: '锁定技,当你受到伤害或回复体力后,你可以观看牌堆顶3张牌,并将其中一张与<星>牌名均不一致的牌置于武将牌上称为<星>,濒死阶段,若你的<星>不小于7,你将所有<星>收入手牌并回复体力至体力上限',
			xjzh_sanguo_luanzheng: '乱政',
			xjzh_sanguo_luanzheng_info: '锁定技,限定技,游戏开始时,若你为主公,你与场上随机一名不为反贼的角色交换身份牌,若你为反贼,你将身份牌改为内奸<li>若你未发动该技能更换身份牌,你视为拥有主公的主公技',
			xjzh_sanguo_chanxian: '谗陷',
			xjzh_sanguo_chanxian_info: (function () {
				if (lib.config.extension_仙家之魂_xjzh_jiexiantupo) return '当你成为[伤害]卡牌的唯一目标时,你可以为其指定一名额外的目标或弃置一张牌令其无效<li>当其他角色成为[伤害]卡牌的唯一目标时,你可以弃置一张手牌将目标改为你';
				return '当你成为[伤害]卡牌的目标时,你可以为其指定一名额外的目标或弃置一张牌令其无效';
			})(),
			xjzh_sanguo_shichong: '恃宠',
			xjzh_sanguo_shichong_info: (function () {
				if (lib.config.extension_仙家之魂_xjzh_jiexiantupo) return '锁定技,限定技,游戏开始后,你将体力值改为场上除你之外所有角色体力值总和的平均数<li>锁定技,若你未发动该技能更改体力上限,其他角色摸牌阶段结束后,需交给你一张牌本回合其跳过弃牌阶段,否则其跳过出牌阶段';
				return '锁定技,游戏开始后,你将体力值改为场上除你之外所有角色体力值总和的平均数';
			})(),
			xjzh_sanguo_baima: '白马',
			xjzh_sanguo_baima_info: '锁定技,其他角色装备坐骑牌后,你摸2张牌,若此时牌堆没有坐骑牌,你于当前回合结束后执行一个额外的回合',
			xjzh_sanguo_yicong: '义从',
			xjzh_sanguo_yicong_info: '锁定技,游戏开始时,你废除坐骑栏且无法回复,其他角色装备的坐骑牌也为你提供相同的效果',
			xjzh_sanguo_muma: '募马',
			xjzh_sanguo_muma_info: '锁定技,当坐骑牌进入弃牌堆时,你可以选择其中一张牌令一名角色装备之(不能替换)',
			xjzh_sanguo_yuewu: '月舞',
			xjzh_sanguo_yuewu_info: (function () {
				if (lib.config.extension_仙家之魂_xjzh_jiexiantupo) return '出牌阶段限一次,你选择两名其他角色令其各自获得对方手牌中没有的花色,你选择两名角色手牌的花色类别之一,你依次获得其所有该花色的手牌视为对另一角色使用一张决斗,该决斗不能被无懈可击响应';
				return '出牌阶段限一次,你选择两名其他角色令其各自获得对方手牌中没有的花色,你选择两名角色手牌的花色类别之一,其依次弃置所有该花色的手牌视为对另一角色使用一张决斗,该决斗不能被无懈可击响应';
			})(),
			xjzh_sanguo_yuehun: '月魂',
			xjzh_sanguo_yuehun_info: (function () {
				if (lib.config.extension_仙家之魂_xjzh_jiexiantupo) return '锁定技,你可以选择并使用一张因弃置而进入弃牌堆的牌';
				return '锁定技,你记录因〖月舞〗选择的花色直到下次选择<li>当该花色的牌因弃置进入弃牌堆时,你可以选择一张牌使用之';
			})(),
			xjzh_sanguo_tiance: '天策',
			xjzh_sanguo_tiance_info: '出牌阶段限一次,你可以将场上所有角色区域内的牌置入处理区逆时针依次选择一张牌直到没有牌为止',
			xjzh_sanguo_tianming: '天命',
			xjzh_sanguo_tianming_info: '每回合限一次,当你成为其他角色牌的目标时,你可以与一名角色交换手牌,手牌数少的角色摸x张牌(x为场上与其势力一致的角色数量)',
			xjzh_sanguo_moubian: '谋变',
			xjzh_sanguo_moubian_info: '游戏开始时,你将势力随机切换为魏蜀吴群中的一个势力,与你势力一致的角色无法对你造成伤害.与你势力不一致的角色对你造成伤害时,你可以展示牌堆顶一张牌,其需弃置一张与此牌类型一致的手牌,否则你获得此牌且该伤害无效',
			xjzh_sanguo_zhongxing: '中兴',
			xjzh_sanguo_zhongxing_info: '限定技,主公阵亡时,若你不为主公且场上与你势力一致的角色数量为最多之一,你将身份改为主公,所有与你势力一致的角色改为忠臣,此时与你同一阵营的所有角色将势力改为汉,其余势力将身份改为反贼;当你阵亡时,你所处的阵营失败',
			xjzh_sanguo_busuan: '卜算',
			xjzh_sanguo_busuan_info: (function () {
				if (lib.config.extension_仙家之魂_xjzh_jiexiantupo) return '锁定技,出牌阶段限一次、弃牌阶段弃置至少两张牌时、成为其他角色锦囊牌的目标时、受到【杀】的伤害时,你随机获得一张【春风化雨】、【翻云覆雨】、【纸醉金迷】、【昙花一现】、【神机妙算】,你选择从牌堆获得至多2张类型不一致的非装备牌,并将等量手牌洗入牌堆,你失去以上五张牌时,你摸一张牌(以上五张牌不计入手牌上限且无法被弃置、获得)';
				return '锁定技,出牌阶段限一次、弃牌阶段弃置至少两张牌时、成为其他角色锦囊牌的目标时、受到【杀】的伤害时,你随机获得一张【春风化雨】、【翻云覆雨】、【纸醉金迷】、【昙花一现】、【神机妙算】,你选择从牌堆获得至多2张类型不一致的非装备牌,并将等量手牌洗入牌堆(以上五张牌不计入手牌上限且无法被弃置、获得)';
			})(),
			xjzh_sanguo_busuan_append: '注:【春风化雨】、【翻云覆雨】、【纸醉金迷】、【昙花一现】、【神机妙算】不计入手牌上限且无法被弃置、获得',
			xjzh_card_chunfenghuayu: '春风化雨',
			xjzh_card_chunfenghuayu_info: '非延时锦囊牌,出牌阶段对一名角色使用,其免疫下一次受到的伤害',
			xjzh_card_chunfenghuayu_skill: '春风化雨',
			xjzh_card_fanyunfuyu: '翻云覆雨',
			xjzh_card_fanyunfuyu_info: '非延时锦囊牌,当一名角色即将受到伤害时,你可以打出此牌并选择除你之外的其他角色,令其受到伤害来源的等量伤害',
			xjzh_card_zhizuijinmi: '纸醉金迷',
			xjzh_card_zhizuijinmi_info: '非延时锦囊牌,出牌阶段对一名角色使用,其每打出一张牌需要判定,若判定结果与【纸醉金迷】花色不一致,此牌无效,否则其摸一张牌,直到其回合结束',
			xjzh_card_zhizuijinmi_skill: '纸醉金迷',
			xjzh_card_tanhuayixian: '昙花一现',
			xjzh_card_tanhuayixian_info: '非延时锦囊牌,出牌阶段对一名角色使用,你选择并合法对其使用牌堆顶前5张牌',
			xjzh_card_shenjimiaosuan: '神机妙算',
			xjzh_card_shenjimiaosuan_info: '非延时锦囊牌,出牌阶段对自己使用,你可以任意交换牌堆顶和牌堆底的前5张牌,你获得牌堆顶前5张牌中所有的锦囊牌',
			xjzh_sanguo_youxia: '游侠',
			xjzh_sanguo_youxia_info: '锁定技,你的回合结束时、受到伤害时,累计成为100的因数张黑色牌的目标时,你可以将牌堆中一张黑色牌置于武将牌上称为<侠>;出牌阶段,你可以将一张<侠>交给一名不拥有<侠>的角色,其出牌阶段结束后,若此牌仍在其区域内,你获得其区域内所有牌',
			xjzh_sanguo_youxia_append: '注:当目标为你时不受是否拥有<侠>的影响',
			xjzh_sanguo_youxia_use: '游侠',
			xjzh_sanguo_youxia_tag: 'invisible',
			xjzh_sanguo_luoyi: '裸衣',
			xjzh_sanguo_luoyi_info: '锁定技,游戏开始时,你废除防具栏,此后每当你不因〖虎痴〗获得防具牌时,你回复一点体力.出牌阶段,你可以将防具牌当一张无次数限制的【杀】使用,此【杀】基础伤害为2',
			xjzh_sanguo_luoyi_use: '裸衣',
			xjzh_sanguo_huchi: '虎痴',
			xjzh_sanguo_huchi_info: '锁定技,你由〖裸衣〗使用【杀】造成伤害后,你可以获得牌堆顶前3张牌中的所有防具牌和基本牌,若此时无防具牌和基本牌,你回复一点体力;你使用基本牌时可以失去一点体力令此牌伤害+1或获得一张防具牌',
			xjzh_sanguo_huchi_use: '虎痴',
			xjzh_sanguo_qice: '奇策',
			xjzh_sanguo_qice_info: '其他角色使用非延时锦囊牌或虚拟牌后,你可以展示牌堆顶一张牌,若此牌为非延时锦囊牌或此牌花色、点数任意一项与其一致,你可以立即使用这张牌',
			xjzh_sanguo_zhiyu: '智愚',
			xjzh_sanguo_zhiyu_info: '当你受到伤害后,你可以从其他角色区域内获得至多2张牌',
			xjzh_sanguo_zhoufu: '咒缚',
			xjzh_sanguo_zhoufu_info: '锁定技,每当你受到1点伤害,你将牌堆顶一张牌置于武将牌上称为<咒>;其他角色的准备阶段,你可以弃置一张<咒>令其执行一次随机延时锦囊牌判定',
			xjzh_sanguo_yingbin: '影兵',
			xjzh_sanguo_yingbin_info: '锁定技,其他角色判定生效后,你摸一张牌并可以合法使用你的手牌,此阶段内,你使用牌后摸一张与此牌类型不一致的牌',
			xjzh_sanguo_tanzhi: '贪智',
			xjzh_sanguo_tanzhi_info: '准备阶段,你可以依次猜测场上除你之外所有角色的手牌中是否有你选择的牌名,若对,你获得一张同名牌,否则你于本回合内无法对其使用牌',
			xjzh_sanguo_mingmen: '名门',
			xjzh_sanguo_mingmen_info: '出牌阶段,你可以弃置一张牌随机扣置牌堆中的一张牌,你依次猜测其花色、点数、类型、牌名,并根据你猜对的数量获得不同的效果:<br><li>0:你受到一点无来源伤害并禁用该技能直到你的下个回合开始.<li>1:你摸一张你指定类型的牌.<li>2:你视为使用一张【万箭齐发】并摸一张牌.<li>3:你获得场上除你之外所有角色各一张牌并视为使用一张【万箭齐发】<li>4:你令任意名角色各摸一张牌或令你摸x张牌,对场上你没有令其摸牌的角色造成一点伤害并令其所有技能失效直到你的下个回合开始(x为场上友方角色数量)',
			xjzh_sanguo_biyi: '辟易',
			xjzh_sanguo_biyi_info: '锁定技,你的装备栏无法被废除,你出场时补全装备栏,你的手牌上限+x,其他角色的手牌上限-x(x为你装备栏已装备的装备牌数量)',
			xjzh_sanguo_zhiti: '止啼',
			xjzh_sanguo_zhiti_info: '锁定技,当你造成/受到伤害后,你令其获得一个<止>标记;其他角色获得/失去<止>标记时,其选择废除/回复一个装备栏',
			xjzh_sanguo_cuifengx: '摧锋',
			xjzh_sanguo_cuifengx_info: '出牌阶段限一次,你可以移动场上的<止>标记,视为移动前的目标对移动后的目标使用1张不计入次数的【杀】,且以此法使用的【杀】造成2点伤害',
			xjzh_sanguo_xingyi: '行医',
			xjzh_sanguo_xingyi_info: '出牌阶段限一次,你可以令一名角色弃置所有手牌摸等量牌,其手牌中每有一张♥️️牌,其回复一点体力,多余的回复改为摸牌',
			xjzh_sanguo_qingnang: '青囊',
			xjzh_sanguo_qingnang_info: '每回合限一次,一名角色不因此技能体力变化后,若其不处于濒死状态,你可以令其交换体力值与已损体力值,若其体力值不小于已损体力值,其获得一点体力上限',
			xjzh_sanguo_elai: '恶来',
			xjzh_sanguo_elai_info: '出牌阶段,你可以失去一点体力,摸x+1张牌,若这些牌包含装备牌,你可以弃置这些牌中的任意张装备牌对一名其他角色造成等量伤害,你弃置其等量牌.(x为你已损体力值)',
			xjzh_sanguo_tiequ: '铁躯',
			xjzh_sanguo_tiequ_info: '当你受到伤害时,你随机展示一张手牌,伤害来源须弃置一张同类型的牌,否则其失去一点体力',
			xjzh_sanguo_guhuo: '蛊惑',
			xjzh_sanguo_guhuo_info: '锁定技,游戏开始时,若你的身份为主公,所有角色重新选将,否则你随机切换你的身份,隐藏你的身份(对你也不可见)直到你阵亡.出牌阶段限一次,你可以声明一种身份并展示在武将牌上,此后每当一名角色对你使用牌时,其需要猜测你展示在武将牌上的身份是否正确,若错,你移除此牌为你的目标且其获得一个<缠怨>标记,你摸一张牌并随机切换你的身份',
			xjzh_sanguo_chanyuan: '缠怨',
			xjzh_sanguo_chanyuan_info: '锁定技,你的手牌上限及回合摸牌数+x(x为场上所有角色<缠怨>的总数);有<缠怨>的角色对你使用牌无需猜测,移除此牌为你的目标并令你摸两张牌,你使用牌可以额外选择任意有<缠怨>的角色成为目标,移除其一个<缠怨>标记',
			xjzh_sanguo_jianjie: '荐杰',
			xjzh_sanguo_jianjie_info: '锁定技,游戏开始时,你展示所有未加入游戏且武将名为诸葛亮或庞统的武将牌并将其置于你的武将牌上称为<杰>;其他角色/你的回合开始时,你可以选择/选择移除并令其获得一张武将牌上的技能直到回合结束,若如此做,回合结束时,你令除你之外的其他角色选择交给你一张牌或受到一点来源为其的伤害',
			xjzh_sanguo_yinshi: '隐世',
			xjzh_sanguo_yinshi_info: '锁定技,若你的武将牌上存在<杰>,你的回合外防止所有伤害;出牌阶段限一次、当一名角色濒死时,若你有<杰>,你可以令其他角色/其替换武将牌为你选择的一张<杰>并重置武将牌',
			xjzh_sanguo_zhiheng: '制衡',
			xjzh_sanguo_zhiheng_info: '出牌阶段限X次,你可以弃置任意张牌并摸等量的牌,若你弃置的牌每多一种花色,你额外摸一张牌(X为你已损失的体力值+1)',
			xjzh_sanguo_wuyun: '吴运',
			xjzh_sanguo_wuyun_info: '你的回合结束时,若你在本回合内发动了制衡1/2/3/4次,则你获得技能吴战/吴盟/吴兴/吴祚',
			xjzh_sanguo_wuzhan: '吴战',
			xjzh_sanguo_wuzhan_info: '限定技,当你将摸不小于三张牌时,可以改为将不超过摸牌数点伤害任意分配给其他角色(每名角色至多分配2点)',
			xjzh_sanguo_wumeng: '吴盟',
			xjzh_sanguo_wumeng_info: '每回合限一次,当你即将摸牌时,你可以取消之并选择一位非吴势力的玩家,从牌堆顶展示你摸牌数两倍的牌,并选择其中的一半(四舍五入)获得之,其获得另外一半的牌',
			xjzh_sanguo_wuxing: '吴兴',
			xjzh_sanguo_wuxing_info: '锁定技,你的手牌上限+2X(X为其他吴势力角色数).当你的手牌不小于8张时,你造成的伤害+1',
			xjzh_sanguo_wuzuo: '吴祚',
			xjzh_sanguo_wuzuo_info: '每回合一次,当你失去了你的最后一张手牌时,你可以摸两张牌',
			xjzh_sanguo_jiuyuan: '救援',
			xjzh_sanguo_jiuyuan_info: '主公技,其他吴势力角色回复体力时,其可以改为令你回复1点体力,其摸一张牌',
			xjzh_sanguo_quling: '驱灵',
			xjzh_sanguo_quling_info: '锁定技,当你击败其他角色时,根据其武将评级获得x点灵力.出牌阶段限一次,你可以消耗灵力从你已击败的武将中选择任意个技能',
			xjzh_zengyi_shuangsheng_card: '双生',
			xjzh_zengyi_shuangsheng_card_info: '左幽将其学到的所有法术记录在了这张卡片上,需要时只需要念动咒语就可以随意发动已学会的法术',
			xjzh_sanguo_tongxuan: '通玄',
			xjzh_sanguo_tongxuan_info: '出牌阶段限一次、游戏开始时、你的回合结束时,你可以移除因〖通玄〗获得的技能并从除〖双生〗、〖翩跹〗之外的所有增益技能中选择<span style="color: #eb1100">1</span>个技能获得之',
			xjzh_sanguo_youbian: '幽变',
			xjzh_sanguo_youbian_info: '锁定技,你的准备阶段,你摸x张牌(x为〖通玄〗中的为红色数字),若你已受伤,〖通玄〗中的红色数字+1',
			xjzh_sanguo_shouye: '授业',
			xjzh_sanguo_shouye_info: '你的回合开始时,你可以令一名其他角色随机获得一个技能直到其发动该技能(觉醒技、使命技等特殊技能除外)',
			xjzh_sanguo_xianshou: '仙授',
			xjzh_sanguo_xianshou_info: '锁定技,其他角色发动因〖授业〗获得的技能时,你可以获得其武将牌上的一个技能直到你发动该技能;场上每有一个角色拥有因〖授业〗获得的技能,你摸牌数+1',
			xjzh_sanguo_lundao: '论道',
			xjzh_sanguo_lundao_info: '出牌阶段限一次,你可以与至多x名其他角色拼点直到其中一方没有手牌为止,若你赢的次数更多,你收回所有你拼点所用的牌,并令其直到你的下个回合开始时使用牌无法指定你为目标,且若其发动技能指定你为目标,你可以指定一名其他角色为该技能的目标,若你赢的次数更少,你失去一点体力(x为场上有因〖授业〗获得技能的角色且至多3,至少为1)',
			xjzh_sanguo_shiyong: '恃勇',
			xjzh_sanguo_shiyong_info: '锁定技,你受到指定目标为1的卡牌的伤害时防止之,你减一点体力上限,并令伤害来源摸2张牌,若对你造成伤害的牌颜色为红色,伤害来源回复一点体力',
			xjzh_sanguo_yaowu: '耀武',
			xjzh_sanguo_yaowu_info: '出牌阶段限一次,你可以减一点体力上限并选择一名其他角色,令其获得一点体力上限,若如此做,你展示其所有手牌,若其中有[伤害]卡牌,你可以使用之',
			xjzh_sanguo_yangwei: '扬威',
			xjzh_sanguo_yangwei_info: '限定技,当你的体力上限不大于2时,你令场上除你之外的所有角色失去一点体力上限,你获得等量体力上限',
			xjzh_sanguo_zhawang: '诈亡',
			xjzh_sanguo_zhawang_info: '锁定技,限定技,其他角色即将阵亡时,若此时不满足你的胜利条件且你已阵亡,你防止之并令即将阵亡的角色回复体力至1,你复活至体力上限并执行一个额外的回合',
			xjzh_sanguo_xingwu: '兴吴',
			xjzh_sanguo_xingwu_info: '锁定技,当你发动锁定技/非锁定技后,你随机获得一个吴势力非锁定技/锁定技,移除上一个你因此技能获得的技能',
			xjzh_sanguo_jiang: '激昂',
			xjzh_sanguo_jiang_info: '当你不因此技能成为[伤害]卡牌的目标或你指定其他角色为[伤害]卡牌的目标后,你可以令其弃置一张牌视为使用一张你指定的任意[伤害]卡牌,其使用的这张牌的伤害来源均视为你',
			xjzh_sanguo_hunzi: '魂资',
			xjzh_sanguo_hunzi_info: '锁定技,你造成的伤害均视为无属性伤害,你的所有卡牌花色视为🃏,你造成伤害时/受到伤害后摸一张牌',
			xjzh_sanguo_guose: '国色',
			xjzh_sanguo_guose_info: '锁定技,游戏开始时,你将牌堆所有的【乐不思蜀】移出游戏;其他角色准备阶段开始时,你可以弃置一张♦️️牌令其执行一次【乐不思蜀】判定',
			xjzh_sanguo_wanrong: '婉容',
			xjzh_sanguo_wanrong_info: '当一名角色的【乐不思蜀】判定成功后,你可以摸2张牌,令一名不为你的角色执行一个额外的回合',
			xjzh_sanguo_tianxiang: '天香',
			xjzh_sanguo_tianxiang_info: '锁定技,当你手牌/装备区的♥️️️牌进入弃牌堆后,你可以令一名角色获得一个<天香>标记,有<天香>标记的角色区域内的♠️️️牌视为♥️️️牌',
			xjzh_sanguo_emei: '额眉',
			xjzh_sanguo_emei_info: '锁定技,当一名角色获得/移去<天香>标记时,其获得未上场女性角色的/失去一个技能;出牌阶段限一次,你可以移去一名角色的所有<天香>标记,若如此做,其须弃置等量牌或受到等量伤害.',
			xjzh_sanguo_lixiang: '离乡',
			xjzh_sanguo_lixiang_info: '限定技,当你濒死时,你将武将牌替换为<小乔>或<大乔>,并回复体力至体力上限',
			xjzh_danyao: '丹药',
			xjzh_card_zhishijingsai: '知识竞赛',
			xjzh_card_zhishijingsai_info: '出牌阶段对自己使用,你从题库中随机抽取5道题,进行一次知识竞赛,按照你答对的题目数量获得奖惩:<li>答对0道,受到一点无来源伤害并弃置一张牌.<li>答对1道,弃置一张牌.<li>答对2道,摸一张牌.<li>答对3道,摸两张牌.<li>答对4道,摸三张牌并回复一点体力.<li>答对5道,摸三张牌并回复一点体力,补全装备栏',
			xjzh_card_shuangran: '霜燃',
			xjzh_card_shuangran_info: '当你装备此牌时:<li>获得3%-8%暴击几率;<li>造成伤害有5%几率回复1-3点体力;<li>造成伤害有15%-25%几率令其获得1-3层易伤;<li>造成伤害5%-15%几率令其获得1-3层燃烧',
			xjzh_card_shuangran_append: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>如此的冰冷,触碰的瞬间几乎冻结了心跳、刺痛了灵魂.</font></span>',
			xjzh_card_mingyunyingbi: '命运硬币',
			xjzh_card_mingyunyingbi_info: '出牌阶段对自己使用,你有50%几率回复体力值至体力上限,有50%几率受到x点雷电伤害(x为你的体力值减1)',
			xjzh_card_cuimaidan: '摧脉丹',
			xjzh_card_cuimaidan_info: '出牌阶段对距离为1的其他角色使用,令其选择移除一项技能或流失一点体力',
			xjzh_card_numa: '驽马',
			xjzh_card_numa_info: '你可以装备此坐骑牌或将此坐骑牌置入其他角色坐骑栏,其他角色计算与装备此牌的角色距离-1',
			xjzh_card_yizhihuhuan: '意志呼唤',
			xjzh_card_yizhihuhuan_info: '你造成伤害视为雷属性伤害,若该伤害点数不小于2,则改为重复执行x+1次点数为1的冰属性伤害',
			xjzh_card_yizhihuhuan_append: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>坚毅自己的内心,掌控冰雷之元素,出现吧!雷之精灵、冰之精灵!</font></span>',
			xjzh_card_kadelanzhichu: '卡德兰戒',
			xjzh_card_kadelanzhichu_info: '当你装备此牌时,其随机反射一张装备牌的技能',
			xjzh_card_kadelanzhichu_append: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>镜像之湖制造的仿品,传说能用他复制世间的一切存在,遗憾的是这只是仿品.</font></span>',
			xjzh_card_wuxian: '无限',
			xjzh_card_wuxian_info: '当你装备此牌时,此装备随机获得3个效果',
			xjzh_card_wuxian_append: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>指挥官莫托汲取原初之火制造的胸甲,当你穿戴它时,你会获得来源于原初之火的强大力量,同时你也需要承受来自强大力量的反噬.</font></span>',
			xjzh_card_rongyankaijia: '熔岩铠甲',
			xjzh_card_rongyankaijia_info: '你防止火焰伤害;受到非火焰伤害的50%(向上取整)会在你的结束阶段结算',
			xjzh_card_rongyankaijia_append: '<span style="color: #f9ed89;font-family:xinwei"><font size =3px>火焰之神闲暇时随手制作的一件残次品,它不会为你增加任何防御力量,但当你穿戴它时,你会感觉到无比的强大.</font></span>',
			xjzh_card_shuangran_skill: '霜燃',
			xjzh_card_shuangran_skill_info: '',
			xjzh_card_yizhihuhuan_skill: '意志呼唤',
			xjzh_card_yizhihuhuan_skill_info: '',
			xjzh_card_wuxian_skill: '无限',
			xjzh_card_wuxian_skill_info: '',
			xjzh_card_wuxian_skill_fanshe: '反射',
			xjzh_card_wuxian_skill_fanshe_info: '你受到伤害时有30%-50%几率反射该伤害',
			xjzh_card_wuxian_skill_zhufu: '祝福',
			xjzh_card_wuxian_skill_zhufu_info: '你受到伤害后有30%-50几率摸一张牌',
			xjzh_card_wuxian_skill_jianren: '坚韧',
			xjzh_card_wuxian_skill_jianren_info: '你受到伤害后有30%-50几率回复一点体力',
			xjzh_card_wuxian_skill_jujiao: '聚焦',
			xjzh_card_wuxian_skill_jujiao_info: '你成为【杀】的目标时有30%-50几率令其额外结算一次',
			xjzh_card_wuxian_skill_pomo: '破魔',
			xjzh_card_wuxian_skill_pomo_info: '你受到属性伤害时30%-50%几率+1',
			xjzh_card_wuxian_skill_liuguang: '流光',
			xjzh_card_wuxian_skill_liuguang_info: '你成为非[伤害]卡牌目标有30%-50%几率随机弃置一张牌',
			xjzh_card_rongyankaijia_skill: '熔岩铠甲',
			xjzh_meiren_linshuang: '林霜',
			xjzh_meiren_gaoyu: '高雨',
			xjzh_meiren_zhaoyushu: '赵玉姝',
			xjzh_meiren_linjiasheng: '林嘉笙',
			xjzh_meiren_wuyufeng: '吴玉凤',
			xjzh_meiren_huangyuke: '黄毓珂',
			xjzh_meiren_xiangwanru: '向婉茹',
			xjzh_meiren_huangdanxue: '黄丹雪',
			xjzh_meiren_juese: '绝色',
			xjzh_meiren_juese_info: '出牌阶段限一次,你可以弃置一张黑色牌选择一名男性角色或弃置一张红色牌选择一名其他女性角色,执行以下规则:黑色,令其随机获得<弃置两张牌(不足则改为你摸两张牌)>或<失去所有技能直到其回合结束>;红色,令其随机获得<摸两张牌>或<回复一点体力(若其未受伤你可以再次发动该技能)>',
			xjzh_meiren_xiuya: '秀雅',
			xjzh_meiren_xiuya_info: '锁定技,你的回合外,每当你需要打出或使用一张牌时,若牌顶堆的前三张有这张牌,你获得之',
			xjzh_meiren_shumei: '淑美',
			xjzh_meiren_shumei_info: '当你受到伤害后,你可以选择一项:1,选择一个目标令其随机获得一个技能并摸一张牌,2;令伤害来源弃置一张牌你摸3张牌.你可以重复此流程x-1次(x为你本回合受到伤害的次数)',
			xjzh_meiren_ganling: '甘霖',
			xjzh_meiren_ganling_info: '锁定技,你防止受到所有伤害且无法成为延时锦囊的目标;你的回合外,你无法失去体力和体力上限;你防止非正常阵亡',
			xjzh_meiren_miaofa: '妙法',
			xjzh_meiren_miaofa_info: '锁定技,游戏开始及你的准备阶段开始时,你失去一点体力并摸一张牌,从未上场的<span style="color: yellow">〖仙家之魂〗</span>扩展武将中展示两个技能并选择获得一个技能,限定技,觉醒技,主公技等特殊技能除外',
			xjzh_meiren_lunzhuan: '轮转',
			xjzh_meiren_lunzhuan_info: '锁定技,你的手牌上限始终为你的体力上限<li>每局游戏限3次,当你阵亡前,若你的体力上限不小于2,你失去一点体力上限并回复体力至1,弃置判定区的所有牌并摸手牌上限张牌<li>你失去牌有45%几率摸一张牌<li>你濒死时有40%几率回复一点体力',
			xjzh_meiren_jingzhuang: '镜装',
			xjzh_meiren_jingzhuang_info: '锁定技,当你受到伤害前,你可以随机获得以下效果之一:<li>取消之并令其受到一点伤害<li>摸两张牌<li>受到伤害+1',
			xjzh_meiren_chunxiao: '春宵',
			xjzh_meiren_chunxiao_info: '锁定技,当你受到伤害后,伤害来源获得一个<春>标记,你获得春宵效果,你造成伤害有25%几率获得一点体力上限并摸一张牌(对有<春>标记的目标几率翻倍并令其弃置一张牌,移除标记),你对拥有<春>标记的目标造成伤害后失去春宵效果直到下次受到伤害',
			xjzh_meiren_meihun: '魅魂',
			xjzh_meiren_meihun_info: '锁定技,当你成为具有[伤害]标签的卡牌的目标后,你可以令一名其他角色交给你一张你声明的花色的手牌,若其没有则你观看其手牌弃置其中一张<li>其他角色每获得你一张牌时,须弃置一张牌',
			xjzh_meiren_meihun2: '魅魂',
			xjzh_meiren_tianzi: '天姿',
			xjzh_meiren_tianzi_info: '锁定技,其他角色回合开始时,若其手牌大于你,你摸一张牌<li>你的准备阶段,若你的手牌为全场最多或之一,你可以选择:①失去一点体力;②你调整手牌数为你的体力值并摸体力上限张牌,若此时你的手牌为全场唯一最多,你跳过摸牌阶段)',
			xjzh_meiren_tianzi2: '天姿',
			xjzh_meiren_huizhi: '蕙质',
			xjzh_meiren_huizhi_info: '锁定技,游戏开始后,你随机获得三张未加入游戏的武将牌称为<兰心>,并选择一张武将牌,你拥有该武将牌的所有技能且同时将性别和势力属性变成与该武将相同直到该武将牌被替换.你的每个准备阶段和结束阶段或受到伤害后,你可以选择一项:①弃置至多两张未展示的武将牌牌并重新获得等量武将牌,摸等量手牌;②更换所展示的武将牌或技能并摸一张牌.(你不可声明限定技、觉醒技、隐匿技、主公技等特殊技能)',
			xjzh_meiren_huizhi2: '蕙质',
			xjzh_meiren_lanxin: '兰心',
			xjzh_meiren_lanxin_info: '锁定技,你受到伤害或流失体力后,你获得等量新的武将牌',
			xjzh_meiren_gupan: '顾盼',
			xjzh_meiren_gupan_info: '当你于回合外成为卡牌目标时,若你的<兰心>大于3且你已受伤,你可以弃置一张<兰心>摸x张牌(x为此<兰心>牌上的技能数量,当技能数量不大于2时,x等于2)',
			xjzh_meiren_rouqing: '柔情',
			xjzh_meiren_rouqing_info: '锁定技,准备阶段开始时,若你的手牌只有一种花色,你可以依次亮出牌顶堆的牌,直到出现与你手牌同花色的牌,你获得这些牌',
			xjzh_meiren_jiaqi: '佳期',
			xjzh_meiren_jiaqi_info: '当你受到伤害后,你可以弃置任意张不同花色的牌,令一名其他角色选择:弃置等量相同花色组成的牌;或翻面并获得你弃置的牌',
			xjzh_meiren_huimeng: '回梦',
			xjzh_meiren_huimeng_info: '当你成为卡牌目标后,若你没有手牌,你可以观看牌顶堆x张牌并选择一种花色获得之,反之若你的卡牌数不为全场唯一最多,则你摸一张牌(x为你的体力值+1)',
			xjzh_meiren_xianyou: '仙游',
			xjzh_meiren_xianyou_info: '锁定技,当你发动〖<font color=red>回梦</font>〗之后,你获得一个<游>标记</br></br>当一名场上一名角色受到伤害后,你可以移除x个标记令其与伤害来源交换手牌,若你不为其,你摸一张牌(x你的手牌数)</br></br>当你成为卡牌目标时,你可以移除一个标记,并依据以下规则发动技能:<li>【杀】:你对其使用一张决斗,若你造成伤害,则该卡牌无效<li>【决斗】:你对其使用一张【杀】,若你未对其造成伤害,你弃置两张牌',
			xjzh_meiren_xianyou1: '仙游',
			xjzh_meiren_xianyou2: '仙游',
			xjzh_meiren_xianyou3: '仙游',
			xjzh_meiren_zhongqing: '钟情',
			xjzh_meiren_zhongqing_info: '锁定技,游戏开始时,你指定一名角色为你的钟情对象;当其/你成为其他角色的卡牌目标时,该卡牌目标改为你/其,你与其各摸一张牌',
			xjzh_meiren_yiqing: '移情',
			xjzh_meiren_yiqing_info: '当你成为其他女性角色/男性角色的非伤害/伤害卡牌的唯一目标时,你可以进行一次判定:♥️️目标转移给下家,♠️️目标转移给上家;若判定成功,你摸一张牌',
			xjzh_meiren_shangqing: '伤情',
			xjzh_meiren_shangqing_info: '觉醒技,你的回合开始时,若你已至少发动6次〖钟情〗,你失去〖钟情〗,获得〖默情〗,你与一名其他角色交换体力值、体力上限',
			xjzh_meiren_moqing: '默情',
			xjzh_meiren_moqing_info: '你无法成为所有指定角色为全部目标卡牌的目标;你受到伤害后,你可以与一名体力值不与你相等角色交换体力值,若其体力值大于你,你于当前回合结束后摸一张牌并开始一个额外的出牌阶段',
			xjzh_meiren_qingquan: '清泉',
			xjzh_meiren_qingquan_info: '锁定技,当你回复体力后,你获得一点护甲,你令一名其他角色随机执行一项:①回复一点体力;②摸一张牌;③获得一点护甲.若你已觉醒,目标执行所有项且可选择任意名目标',
			xjzh_meiren_hanshuang: '寒霜',
			xjzh_meiren_hanshuang_info: '觉醒技,当你阵亡时,你取消之并失去一点体力上限,将〖清泉〗中的<获得一点护甲>改为<获得两点护甲>,回复体力至1并获得技能〖凛冬〗',
			xjzh_meiren_lingdong: '凛冬',
			xjzh_meiren_lingdong_info: '锁定技,场上除你之外的所有角色回复体力都会令你获得一点护甲;当你因抵挡伤害而护甲后,你将手牌补至体力上限',
			xjzh_qixia_daxiongxiaomao: '大熊小猫',
			xjzh_qixia_maybe: '昔日烈火',
			xjzh_qixia_mumuxiao: '木木枭',
			xjzh_qixia_qice: '奇策',
			xjzh_qixia_qice_info: '其他角色摸牌后,若这些牌的类别不小于2,你可以观看并选择其中一种类别,令其弃置该类别的所有牌摸等量牌',
			xjzh_qixia_xiongmao: '熊猫',
			xjzh_qixia_xiongmao_info: '出牌阶段限一次,你可以将你的武将原画调整为一名随机女性角色的原画,你将势力、性别、体力上限、体力值均调整为与其一致',
			xjzh_qixia_jiyuan: '急援',
			xjzh_qixia_jiyuan_info: '当一名角色即将受到伤害时,你可以代替其受到伤害,若如此做,其摸两张牌;场上每有一名友方角色,你的回合开始时,你回复一点体力(至低为1),多余的回复转为摸牌(至低为1)',
			xjzh_qixia_jibian: '机变',
			xjzh_qixia_jibian_info: '当你受到伤害后,你摸x张点数为y的牌(x为你与伤害来源的体力差的绝对值,至低为1,y为体力和,至多为13),令其技能描述中含有[伤害]的技能替换为〖仁德〗',
			xjzh_qixia_tubian: '图变',
			xjzh_qixia_tubian_info: '出牌阶段/你受到伤害后限一次,你可以输入一名武将的武将名并展示3张武将名中包含你所输入的值的武将牌(至多5个汉字,若无对应汉字的武将牌或未输入/AI,则改为随机展示3张武将牌),并将一名角色武将图片改为你选择的武将图片,若其性别与你选择的武将性别不一致,你选择并令其失去当前武将牌上的一个技能,你选择令其获得你选择武将牌上的一个技能,否则其(或你为目标时)获得你选择的武将牌上的所有技能,若如此做,你随机切换你的武将性别.技能结算后,若你的武将性别为双,你获得一点体力上限,若你未改变性别,你回复一点体力并摸一张牌,否则你失去一点体力',
			xjzh_huoying_mingren: '漩涡鸣人',
			xjzh_huoying_liudaomingren: '六道鸣人',
			xjzh_huoying_zuozhu: '宇智波佐助',
			xjzh_huoying_liudaozuozhu: '六道佐助',
			xjzh_huoying_liudaomingrenfs: '影分身',
			xjzh_huoying_dou: '药师兜',
			xjzh_huoying_kakaxi: '旗木卡卡西',
			xjzh_huoying_zhishui: '宇智波止水',
			xjzh_huoying_fenshen: '分身',
			xjzh_huoying_fenshen_info: '<b><font color=orange>〖影分身之术〗</font><b>出牌阶段,你可以与一名角色拼点,若你赢,你可以再次发动该技能且本回合选择目标+1(最多为3),你选择摸两张牌或回复一点体力',
			xjzh_huoying_luoxuan: '螺旋',
			xjzh_huoying_luoxuan_info: '<b><font color=orange>〖螺旋手里剑〗</font><b>出牌阶段限一次,你可以将一张牌当做任意一张普通锦囊牌使用',
			xjzh_huoying_xianshu: '仙术',
			xjzh_huoying_xianshu_info: '<b><font color=orange>〖仙人模式〗</font><b>游戏开始时,你获得3个仙术查克拉,之后每隔3分钟获得一个仙术查克拉,至多3个,当你失去最后一张手牌时,你可以消耗一个仙术查克拉,将手牌补至体力上限',
			xjzh_huoying_zuidun: '嘴遁',
			xjzh_huoying_zuidun_info: '<b><font color=orange>〖最强嘴遁〗</font><b>限定技,每局游戏限2次,当一名角色濒死时,若你与其均不为主公,你可以令其选择一项:1、将所有牌交给你,立即阵亡;2、改变身份/势力与你一致.技能结算后,若其未阵亡,其失去一点体力上限并回复体力至体力上限,你与其各摸x张牌(x为其体力值)(限身份模式和国战模式)',
			xjzh_huoying_kaigua: '开挂',
			xjzh_huoying_kaigua_info: '<b><font color=orange>〖开挂封号〗</font><b>觉醒技,当你濒死时,你使用自己的外挂并进入〖六道模式〗<br><br><b><font color=orange>〖六道模式〗</font><b>你将你的的体力上限改为为3并回复体力至体力上限,重置武将牌和判定区,技能结算后,你失去技能〖分身〗、〖嘴遁〗、〖开挂〗,获得技能〖螺旋手里剑〗、〖阴阳遁术〗、〖多重·影分身之术〗',
			xjzh_huoying_dunshu: '遁术',
			xjzh_huoying_dunshu_info: '<b><font color=orange>〖阳遁术〗</font><b>你的回合外,你防止所有伤害和体力流失摸等量牌,你可以令等量名角色各回复一点体力,你无法被翻面、横置,且判定效果反转;<br><b><font color=orange>〖阴遁术〗</font><b>你的回合内,场上其他角色所有技能失效,你使用牌无次数限制且你造成的伤害+x(x为你本回合造成伤害的次数)',
			xjzh_huoying_liudaofenshen: '分身',
			xjzh_huoying_liudaofenshen_info: '<b><font color=orange>〖多重·影分身之术〗</font><b>结束阶段,你可以失去一点体力并召唤一个分身代替你的本体存于场上直到其阵亡或你的回合开始,你的本体获得分身的所有手牌(该分身拥有3点体力、3张手牌和技能〖遁术〗)',
			xjzh_huoying_liudaofenshen2: '分身',
			xjzh_huoying_qiling: '麒麟',
			xjzh_huoying_qiling_info: '<b><font color=orange>〖雷遁·麒麟〗</font><b>锁定技,你使用红色牌造成伤害均视为火焰伤害,你使用黑色牌造成伤害均视为雷电伤害,当你至少造成3点火焰伤害和1点雷电伤害后,你可以指定一名不为你的角色,令其受到x点雷电伤害(x为你与其体力差,至少为1)',
			xjzh_huoying_qiling_huo: '火遁',
			xjzh_huoying_qiling_lei: '雷遁',
			xjzh_huoying_qianniao: '千鸟',
			xjzh_huoying_qianniao_info: '<b><font color=orange>〖雷遁·千鸟〗</font><b>你的回合开始及结束时,你可以视为对一名你攻击范围内的一名其他角色使用一张颜色随机的【杀】,此【杀】不计入出牌次数,若其闪避了此杀,你摸一张牌,你因此技能造成伤害获得一个<瞳>标记',
			xjzh_huoying_liudao: '六道',
			xjzh_huoying_liudao_info: '<b><font color=orange>〖六道模式〗</font><b>觉醒技,当你至少拥有4个<瞳>标记时,你进入重置武将牌并将体力值和体力上限改为3,回复体力至体力上限,并获得技能〖瞳术〗,此后你的〖雷遁·千鸟〗被闪避时摸2张牌、〖雷遁·麒麟〗的伤害基数改为2',
			xjzh_huoying_tongshu: '瞳术',
			xjzh_huoying_tongshu_info: '<b><font color=orange>〖天手力〗</font><b>当一名角色受到来源不为你伤害时,你可以与其交换位置,并视为对伤害来源使用一张颜色随机且不计入次数的【杀】,若此杀造成伤害,你令其防止此伤害,否则你代替其受到此伤害,你以此法造成的伤害+1;你计算与其他角色距离始终为1',
			xjzh_huoying_xianzhang: '仙掌',
			xjzh_huoying_xianzhang_info: '<b><font color=orange>〖掌仙术〗</font><b>转换技<br><li>阴:每回合限一次,你使用非[伤害]卡牌指定目标后,其可以摸两张牌或回复一点体力;<br><li>阳:每回合限一次,其他角色使用[伤害]卡牌指定你为目标时,你可以扣置一张[伤害]卡牌,其猜测此牌牌名,若错,你可以移除此牌的一个目标',
			xjzh_huoying_sihun: '死魂',
			xjzh_huoying_sihun_info: '<b><font color=orange>〖死魂之术〗</font>限定技,当你濒死时,若场上有已阵亡的角色,你回复x点体力摸x张牌,令其中随机一个角色复活,复活后其失去所有技能并改变身份、势力与你一致,其拥有2点体力且无法使用、打出牌(x为场上已阵亡的角色数量)',
			xjzh_huoying_chuanyi: '传异',
			xjzh_huoying_chuanyi_info: '<b><font color=orange>〖仙法·传异远影〗</font>当你击败一名角色后,你可以弃置x+1张牌获得其武将牌上的一个技能(x为1,每当你以此技能获得技能后,该数字+1)',
			xjzh_huoying_kaobei: '拷贝',
			xjzh_huoying_kaobei_info: '<b><font color=orange>〖复制忍术〗</font>每回合限一次,其他角色发动技能后,若你有<雷>且该技能符合条件,你可以弃置一张<雷>于合适的时机发动一次相应的技能',
			xjzh_huoying_shenwei: '神威',
			xjzh_huoying_shenwei_info: '<b><font color=orange>〖神威〗</font>游戏开始时,你观看牌堆顶7张牌,并将其中4张置于武将牌上称为<雷>;一轮游戏开始时,若当前轮数为奇数,你获得牌堆随机4张牌;当你濒死时,你可以弃置所有<雷>并选择一名角色,你选择执行:1,其获得所有<雷>;2,其需弃置任意张点数不小于<雷>的牌,不足则全弃,否则其失去所有体力',
			xjzh_huoying_leiqie: '雷切',
			xjzh_huoying_leiqie_info: '<b><font color=orange>〖雷切〗</font>出牌阶段限一次,你可以交换<雷>和手牌中的任意张牌,对一名角色造成1点雷属性伤害',
			xjzh_huoying_bietian: '别天',
			xjzh_huoying_bietian_info: '<b><font color=orange>〖别天神〗</font>当你造成不小于2的伤害后,你可以失去一点体力上限随机偷取目标一个回合阶段;锁定技,你每有一个偷取的额外阶段,你的回合摸牌数+1,若你有额外的阶段,你的回合阶段顺序随机执行',
			xjzh_huoying_shunshen: '瞬身',
			xjzh_huoying_shunshen_info: '<b><font color=orange>〖瞬身术〗</font>锁定技,你的回合开始时,你与一名随机角色交换位置,你可以选择使用一张手牌;你防止上家/下家对你造成的伤害',
			xjzh_huoying_xuzuo: '须佐',
			xjzh_huoying_xuzuo_info: '<b><font color=orange>〖须佐能乎〗</font>锁定技,你每发动一次〖瞬身〗与其他角色交换位置获得一点护甲;当你受到伤害时,若你的护甲不小于2,你移除所有护甲,获得x/2点体力上限(向下取整)',
			xjzh_boss_zuoyou: '神左幽',
			xjzh_boss_lvbu: '神吕布',
			xjzh_boss_zhangjiao: '神张角',
			xjzh_boss_hjbingyong: '黄巾兵勇',
			xjzh_boss_hjlishi: '黄巾力士',
			xjzh_boss_hjshushi: '黄巾术士',
			xjzh_boss_hjfangshi: '黄巾方士',
			xjzh_boss_hjguishi: '黄巾诡士',
			xjzh_boss_waershen: '瓦尔申',
			xjzh_boss_lilisi: '莉莉丝',
			xjzh_boss_geligaoli: '格里高利',
			xjzh_boss_duruier: '督瑞尔',
			xjzh_boss_qier: '齐尔领主',
			xjzh_boss_bingchuanjushou: '冰川巨兽',
			xjzh_boss_ttshilian: '天堂试炼',
			xjzh_boss_xiaotianshi: '小天使',
			xjzh_boss_datianshi: '大天使',
			xjzh_boss_gaotianshi: '高阶天使',
			xjzh_boss_tianshizhang: '天使长',
			xjzh_boss_yinaruisi: '伊纳瑞斯',
			xjzh_boss_masayier: '马萨伊尔',
			xjzh_boss_duohunzhe: '夺魂者',
			xjzh_boss_duotianshi: '堕落天使',
			xjzh_boss_taernasha: '塔尔拉沙',
			xjzh_boss_shachong: '剧毒沙虫',
			xjzh_boss_jiwu: '极武',
			xjzh_boss_jiwu_info: '出牌阶段限一次,你可以弃置一张[伤害]卡牌视为对场上其他所有角色使用一张不计入次数的【杀】,若此【杀】造成伤害,你摸一张[伤害]卡牌',
			xjzh_boss_feijiang: '飞将',
			xjzh_boss_feijiang_info: '锁定技,你视为拥有技能〖无双〗;你使用【杀】、【决斗】指定目标时,你获得其一张牌,若此牌为[伤害]卡牌,你可以弃置此牌令你使用的牌伤害+1',
			xjzh_boss_benxi: '奔袭',
			xjzh_boss_benxi_info: '锁定技,当你造成伤害后,你获得一个<星魂>技能,你计算与其他角色距离-x;其他角色的准备阶段的你可以移除一个<星魂>技能执行一个额外的出牌阶段(x为你拥有的<星魂>技能数量)',
			xjzh_boss_xiuluo: '修罗',
			xjzh_boss_xiuluo_info: '锁定技,当你获得、失去技能时,若你的<星魂>技能数量为6,你发动一次〖神愤〗;当你体力变化后,若你已受伤/未受伤,你可以移除一个<星魂>技能回复一点体力/摸x张牌(x为你拥有的<星魂>技能数量,至低为1)',
			xjzh_boss_fuhuo: '符火',
			xjzh_boss_fuhuo_info: '锁定技,你始终跳过摸牌阶段,改为对随机x名敌方角色造成1点火焰伤害,受到你火焰伤害的角色下次造成火焰伤害时该伤害+1且其受到等量火焰伤害;当你存活时,神张角的回合开始时有y几率获得一点体力上限(x为你摸牌的数量,y为你体力值的百分比)',
			xjzh_boss_fushui: '符水',
			xjzh_boss_fushui_info: '锁定技,你始终跳过出牌阶段,改为将你区域内的所有牌置于武将牌上,你的回合结束时,若场上存在已受伤的友方角色,且你的<符>至少有两张花色相同的牌,你随机弃置两张花色相同的<符>,视为使用一张目标仅为友方角色的【桃园结义】;当你存活时,神张角摸牌时额外摸一张牌且跳过弃牌阶段',
			xjzh_boss_fuli: '符力',
			xjzh_boss_fuli_info: '锁定技,你无法使用或打出【闪】,你使用【杀】无次数限制;当你存活时,神张角造成伤害+1,且无法被翻面',
			xjzh_boss_fubing: '符兵',
			xjzh_boss_fubing_info: '锁定技,你跳过摸牌阶段改为获得敌方角色各一张牌,若如此做,你本回合手牌上限视为0;当你存活时,神张角受到的伤害改为由你承担且其无法被横置',
			xjzh_boss_guishu: '诡术',
			xjzh_boss_guishu_info: '锁定技,你跳过所有回合阶段,改为每个阶段获得1-2张黑色牌;你视为拥有技能〖鬼道〗;当你存活时,神张角造成的雷电伤害生效前,横置场上除你与友方之外的所有角色的武将牌',
			xjzh_boss_qingling: '清领',
			xjzh_boss_qingling_info: '锁定技,游戏开始时、你受到伤害后,你(有x几率)令黄巾术士、黄巾力士、黄巾兵勇、黄巾方士随机两名角色登场(至多两名);当场上有黄巾力士/黄巾术士/黄巾兵勇/黄巾方士存活时,你于每个回合结束后执行一个新的回合且你计算与其他角色距离减场上黄巾兵数量;你的[伤害]卡牌无法指定黄巾兵为目标;场上的黄巾兵阵亡时移出游戏(x为当前回合数的百分比,黄巾兵的体力上限和体力值为2,初始手牌为4)',
			xjzh_boss_dianxing: '电刑',
			xjzh_boss_dianxing_info: '出牌阶段限一次,你可以弃置一张牌令一名敌方角色判定,若判定牌颜色与你弃置的牌颜色一致,你令其受到一点雷电伤害,你可以重复此流程;首个回合开始时、10的倍数个回合开始时、你的回合被跳过时、你的武将牌翻至背面时,你进行一次判定,若结果为♠️️2-9,你令场上所有敌方角色受到3点雷电伤害,若此时场上有阵亡的黄巾兵,你随机召集一名黄巾兵进入游戏;第50个回合开始前,你可以选择改变此技能形态',
			xjzh_boss_fennu: '愤怒',
			xjzh_boss_fennu_info: '锁定技,你的回合开始前,你选择获得1个奇术要件的效果,移除你已获得的奇术要件效果,若你的体力值小于你体力上限的一半,则将<获得1个>改为<获得至多3个>,若你的体力值不大于你的体力上限的1/3,则视为场上其他角色依次对自己使用一张【杀】',
			xjzh_boss_edu: '恶毒',
			xjzh_boss_edu_info: '锁定技,出牌阶段限一次,你可以失去一点体力令一名其他角色获得<混乱>直到其回合结束,若此时你的体力值小于你体力上限的一半,你失去一点体力上限并视为该角色对场上除你之外的其他角色一次使用一张【决斗】',
			xjzh_boss_canren: '残忍',
			xjzh_boss_canren_info: '当你造成伤害后,你可以获得其一张牌,展示牌堆顶一张牌,若此牌的花色与你获得其的牌花色一致,你获得此牌,重复此流程直到花色不一致',
			xjzh_boss_lianji: '连击',
			xjzh_boss_lianji_info: '锁定技,你每使用3张基本牌/非延时锦囊牌,你的下一张非延时锦囊牌/基本牌额外结算1次',
			xjzh_boss_qiangji: '强击',
			xjzh_boss_qiangji_info: '你受到伤害后,你可以视为使用一张上一次对你造成伤害的牌,你展示牌堆顶一张牌直到其花色、点数均与这张牌不同,并获得之前展示的所有牌,技能结算后,你立即结束当前回合并执行一个额外的回合',
			xjzh_boss_zenghen: '憎恨',
			xjzh_boss_zenghen_info: '锁定技,本局游戏限3次,当你濒死时,你的体力上限翻倍并回复体力至体力上限,你对场上所有角色造成一点火焰伤害,并令其获得燃烧,选择将〖连击〗中的红色数字-1或蓝色数字+1,若你不拥有技能〖血炎〗,你获得该技能',
			xjzh_boss_xueyan: '血炎',
			xjzh_boss_xueyan_info: '当你造成伤害后,你可以展示牌堆顶一张牌,所为红色,你对其造成一点火焰伤害并令获得燃烧,否则令其获得一层易伤',
			xjzh_boss_mengdu: '猛毒',
			xjzh_boss_mengdu_info: '锁定技,你造成的所有伤害视为毒属性伤害,且你造成毒属性伤害根据你体力值的10倍的百分比几率令其获得一层中毒,因你而中毒的目标获得的中毒无层数上限;当你令一名角色中毒时,你摸x张牌(x为其武将牌上的中毒层数);你防止获得中毒',
			xjzh_boss_huanshen: '幻身',
			xjzh_boss_huanshen_info: '锁定技,限定技,当你受到伤害后,若你的体力值为不大于体力上限的1/3(四舍五入),你将体力值回复至体力上限的1/3(四舍五入),你召唤2个体力值和体力上限为3的<督瑞尔的幻影>,该角色拥有技能〖猛毒〗,你获得技能〖恶行〗',
			xjzh_boss_exing: '恶行',
			xjzh_boss_exing_info: '锁定技,你使用[伤害]卡牌指定中毒目标时,你令其移除武将牌上的所有中毒,并额外结算x次(x为其移除中毒前武将牌上的中毒层数),并回复等量体力',
			xjzh_boss_dianmao: '电矛',
			xjzh_boss_dianmao_info: '锁定技,当你不因此技能成为其他角色的[伤害]卡牌目标或你指定其他角色成为[伤害]卡牌目标时,你可以展示其一张手牌,若此牌为♠️️牌,你弃置此牌并视为对其使用一张不计入出牌次数的【雷杀】',
			xjzh_boss_dianchong: '电冲',
			xjzh_boss_dianchong_info: '锁定技,当你受到/造成雷属性伤害后,你获得等量<电冲>标记并令其获得1层感电;当你有<电冲>标记时,你造成伤害有2x几率暴击(x为你的电冲标记数量的百分比)',
			xjzh_boss_dianhua: '电花',
			xjzh_boss_dianhua_info: '出牌阶段,若你有<电冲>标记,你可以弃置1枚<电冲>标记并展示牌堆顶一张牌,若此牌花色为♠️️,你对一名其他角色造成一点雷属性伤害,否则你获得此牌;感电的角色执行摸牌、出牌阶段时有x几率改为你执行(x为你的<电冲>标记的百分比)',
			xjzh_boss_fusu: '复苏',
			xjzh_boss_fusu_info: '锁定技,你失去红色牌时,若你已受伤/未受伤,你回复一点体力/摸一张牌;你的回合外,其他角色使用♥️️牌或回复体力后,你可以视为对其使用一张【杀】,若此【杀】造成伤害,你获得其所有牌',
			xjzh_boss_ganran: '感染',
			xjzh_boss_ganran_info: '锁定技,你造成伤害后令其获得一个<感染>标记;一名角色的<感染>标记不小于:1、其摸牌阶段摸牌数-1,2、你对其造成的伤害+1,3、其非锁定技失效,4、其跳过出牌阶段;出牌阶段限一次,你可以移动场上一枚<感染>标记,并令获得标记的角色失去一点体力',
			xjzh_boss_xuezhou: '血咒',
			xjzh_boss_xuezhou_info: '锁定技,被感染的角色回合结束时,移除一枚<感染>标记;场上每一枚超出其体力值的<感染>标记令你摸牌时额外摸一张牌',
			xjzh_boss_shilian_intro: '天堂试炼',
			xjzh_boss_shilian_intro_info: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;消耗一个<世界之石碎片>参加一场高阶天堂试炼挑战,该挑战分为以下几个阶段<br><br><li>第一阶段:挑战1个大天使和2小天使<br><br><li>第二阶段:挑战1个高阶天使和2个大天使<br><br><li>第三阶段:挑战1个天使长和2个高阶天使<br><br><li>第四阶段:<br><br>早上8点-12点,晚上20点-24点挑战boss<伊纳瑞斯>和2个天使长<br><br>下午12点-16点,晚上0点-4点挑战boss<马萨伊尔>和1个夺魂者、1个堕落天使<br><br>除以上时间外挑战boss<塔尔拉沙>和2个剧毒沙虫',
			xjzh_boss_shilian: '试炼',
			xjzh_boss_shilian2: '试炼',
			xjzh_boss_shenghui: '圣辉',
			xjzh_boss_shenghui_info: '锁定技,你的摸牌阶段额外摸两张牌并回复一点体力',
			xjzh_boss_shenghui2: '圣辉',
			xjzh_boss_shenghui2_info: '锁定技,你的摸牌阶段及结束阶段,你可以选择回复两点体力或摸两张牌',
			xjzh_boss_chiyan: '炽焰',
			xjzh_boss_chiyan_info: '出牌阶段限一次,你可以选择一名其他角色,令其展示所有手牌,其中每有一张♦️️牌,视为你对其使用一张【火杀】;当你因此技能造成伤害结算时,你令所有友方角色回复一点体力',
			xjzh_boss_shenghui3: '圣辉',
			xjzh_boss_shenghui3_info: '锁定技,当你摸牌或回复体力时,你令一名其他角色摸等量牌或回复等量体力,你获得1点护甲',
			xjzh_boss_caijue: '裁决',
			xjzh_boss_caijue_info: '出牌阶段限一次,你可以令场上所有敌方角色依次展示一张手牌,你可以弃置一张花色一致的牌,对其造成一点雷属性伤害,若如此做,你摸一张牌',
			xjzh_boss_shenghui4: '圣辉',
			xjzh_boss_shenghui4_info: '锁定技,你始终跳过弃牌阶段;你的回合内,若你已受伤,你使用基本牌额外结算x次,否则你使用非延时锦囊牌额外结算1次(x为你已失去的体力值)',
			xjzh_boss_caijue2: '裁决',
			xjzh_boss_caijue2_info: '出牌阶段限一次,你可以展示一张手牌,并令所有敌方角色弃置一张花色一致的牌,否则你对其造成一点雷属性伤害;当你造成伤害后,你可以令〖圣辉〗中的数字交换',
			xjzh_boss_shenyou: '神佑',
			xjzh_boss_shenyou_info: '锁定技,你与你的友方角色若有负面状态,其成为[伤害]卡牌目标时,卡牌来源需弃置一张牌,否则此牌无效;若无负面状态,其防止所有属性伤害',
			xjzh_qishu_shouyu: '兽语',
			xjzh_qishu_shouyu_info: '锁定技,你无法成为延时锦囊牌的目标,其他角色准备准备阶段开始时,你令其执行一次随机延时锦囊牌判定',
			xjzh_qishu_shendong: '深冻',
			xjzh_qishu_shendong_info: '锁定技,你造成伤害视为冰属性伤害;出牌阶段限一次,你可以选择一名对你造成过伤害的角色,令其弃置x张牌,每少弃置一张牌失去一点体力上限,视为其未对你造成过伤害(x为其对你造成伤害的次数)',
			xjzh_qishu_feimou: '非谋',
			xjzh_qishu_feimou_info: '锁定技,当你受到伤害后,你获得其所有手牌,将这些牌随机分配给伤害来源',
			xjzh_zengyi_mieque: '灭却',
			xjzh_zengyi_weisong: '威讼',
			xjzh_zengyi_liuzhuan: '流转',
			xjzh_zengyi_pianxian: '翩跹',
			xjzh_zengyi_zhuanpo: '转魄',
			xjzh_zengyi_daoge: '倒戈',
			xjzh_zengyi_chongsu: '重塑',
			xjzh_zengyi_shunying: '瞬影',
			xjzh_zengyi_fengyue: '风月',
			xjzh_zengyi_hunqian: '魂牵',
			xjzh_zengyi_mengdie: '梦蝶',
			xjzh_zengyi_poxiao: '破晓',
			xjzh_zengyi_shuangsheng: '双生',
			xjzh_zengyi_xuanbian: '玄变',
			xjzh_zengyi_moran: '墨染',
			xjzh_zengyi_shenghua: '升华',
			xjzh_zengyi_chaoti: '超体',
			xjzh_zengyi_jinghong: '惊鸿',
			xjzh_zengyi_shefan: '蛇幡',
			xjzh_zengyi_longfei: '龙飞',
			xjzh_zengyi_yunchui: '云垂',
			xjzh_zengyi_fengyang: '风扬',
			xjzh_zengyi_dizai: '地载',
			xjzh_zengyi_tianfu: '天覆',
			xjzh_zengyi_jiehuo: '劫火',
			xjzh_zengyi_xuanbing: '玄冰',
			xjzh_zengyi_jifeng: '疾风',
			xjzh_zengyi_jinglei: '惊雷',
			xjzh_zengyi_lieshi: '裂石',
			xjzh_zengyi_lianyu: '炼狱',
			xjzh_zengyi_raoliang: '绕梁',
			xjzh_zengyi_difu: '地缚',
			xjzh_zengyi_tianze: '天择',
			xjzh_zengyi_zhangyi: '仗义',
			xjzh_zengyi_tunshi: '吞噬',
		},
	};
	for (const i in QQQ.card) {
		const info = QQQ.card[i];
		if (!info.image) {
			if (info.fullskin) {
				info.image = `ext:仙家之魂/image/${i}.png`;
			} else {
				info.image = `ext:仙家之魂/image/${i}.jpg`;
			}
		}
		lib.inpile.add(i);
		if (info.mode && !info.mode.includes(lib.config.mode)) continue;
		lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
	}
	lib.config.all.cards.add('仙家之魂');
	lib.config.cards.add('仙家之魂');
	lib.translate.仙家之魂_card_config = '仙家之魂';
	return QQQ;
});

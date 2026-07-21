"use strict";
game.import('character', function (lib, game, ui, get, ai, _status) {
	//daice
	var sgscq = {
		name: 'sgscq', //武将包命名(必填) 
		connect: true, //该武将包是否可以联机(必填) 
		characterSort: {
			sgscq: {
				sgscq_tyjy: [
					//刘备,关羽,张飞,张角,董卓,张宝,波才,马元义,裴元绍,高升,魔张角,sp张角,督邮,圣诞貂蝉,黄巾雷使,南华老仙//张梁
					'sgscq_liubei', 'sgscq_guanyu', 'sgscq_zhangfei', 'sgscq_duyou', 'sgscq_dongzhuo',
					'sgscq_zhangjiao', 'sgscq_zhangbao', 'sgscq_mayuanyi', 'sgscq_gaosheng', 'sgscq_peiyuanshao',
					'sgscq_bocai', 'scmo_zhangjiao', 'scsp_zhangjiao', 'schao_diaochan', 'sgscq_huangjinleishi',
					'sgscq_nanhualaoxian',
				],
				sgscq_jcrl: [
					//刘协,魔董卓,孙坚,袁绍,吕布,祖茂,华雄,袁术,公孙瓒,赵云,潘凤,王允,貂蝉,许褚,群蔡文姬,财神关羽,董白,李傕,郭汜,牛辅,袁姬,李儒,魔贾诩
					'sgscq_liuxie', 'scmo_dongzhuo', 'sgscq_sunjian', 'sgscq_yuanshao', 'sgscq_lvbu',
					'sgscq_zumao', 'sgscq_huaxiong', 'sgscq_yuanshu', 'sgscq_gongsunzan', 'sgscq_zhaoyun',
					'sgscq_panfeng', 'sgscq_wangyun', 'sgscq_diaochan', 'sgscq_xuchu', 'sgscq_caiwenji',
					'schao_guanyu', 'sgscq_dongbai', 'sgscq_lijue', 'sgscq_guosi', 'sgscq_niufu',
					'sgscq_yuanji', 'sgscq_liru', 'scmo_jiaxu',
				],
				sgscq_eqcj: [
					//孙策,太史慈,周瑜,大乔,小乔,二乔,严白虎,吴夫人,吴国太,孙尚香,侍女队长,于吉,凌统,凌操,步练师,大虎,小虎,陆逊,陆绩,朱治,软妹袁姬,大圣孙坚,陆延
					'sgscq_sunce', 'sgscq_taishici', 'sgscq_zhouyu', 'sgscq_daqiao', 'sgscq_xiaoqiao',
					'sgscq_daxiaoqiao', 'scsp_yanbaihu', 'sgscq_wufuren', 'sgscq_wuguotai', 'sgscq_sunshangxiang',
					'sgscq_shinvduizhang', 'sgscq_yuji',
					'sgscq_lingtong', 'sgscq_lingcao', 'sgscq_bulianshi', 'sgscq_dahu', 'sgscq_xiaohu',
					'sgscq_luxun', 'sgscq_luji', 'sgscq_zhuzhi', 'schao_yuanji', 'schao_sunjian', 'sgscq_luyan',
				],
				sgscq_bml: [
					//魔貂蝉,贾诩,神曹操,神吕布,曹昂,典韦,胡车儿,高顺,陈宫,曹洪,卞皇后,糜竺,孙乾,张辽,吕玲绮//陈登,陈珪
					'scmo_diaochan', 'sgscq_jiaxu', 'sgscqshen_caocao', 'sgscqshen_lvbu', 'sgscq_caoang',
					'sgscq_dianwei', 'sgscq_hucheer', 'sgscq_gaoshun', 'sgscq_chengong', 'sgscq_caohong',
					'sgscq_bianhuanghou', 'sgscq_mizhu', 'sgscq_sunqian', 'sgscq_zhangliao', 'sgscq_lvlingqi',
				],
				sgscq_gdzz: [
					//sp袁绍,曹操,郭图,田丰,沮授,郭嘉,颜良,文丑,颜良文丑,张郃,周仓,关平,朱灵,李通
					'scsp_yuanshao', 'sgscq_caocao', 'sgscq_guotu', 'sgscq_tianfeng', 'sgscq_jushou',
					'sgscq_guojia', 'sgscq_yanliang', 'sgscq_wenchou', 'sgscq_yanwen', 'sgscq_zhanghe',
					'sgscq_zhoucang', 'sgscq_guanping', 'sgscq_zhuling', 'sgscq_litong',
				],
				sgscq_jxzd: [
					//刘表,伊籍,卧龙诸葛,黄月英,神赵云,夏侯恩,甘夫人,糜夫人,徐庶,简雍,魔夏侯惇(芽间月英)
					'sgscq_liubiao', 'sgscq_yiji', 'sgscq_zhugeliang', 'sgscq_huangyueying', 'sgscqshen_zhaoyun',
					'sgscq_xiahouen', 'sgscq_ganfuren', 'sgscq_mifuren', 'sgscq_xushu', 'sgscq_jianyong',
					'scmo_xiahoudun', 'schao_huangyueying',
				],
				sgscq_cwjx: [
					//甄姬,曹丕,曹植,李典,荀攸,程昱,戏志才,乐进,辛宪英,采樵夏侯氏,夏侯惇,于禁,徐晃,左慈,卑弥呼,伏皇后,伏完,魏蔡文姬
					'sgscq_zhenji', 'sgscq_caopi', 'sgscq_caozhi', 'sgscq_lidian', 'sgscq_xunyou',
					'sgscq_chengyu', 'sgscq_xizhicai', 'sgscq_yuejin', 'sgscq_xinxianying', 'schao_xiahoushi',
					'sgscq_xiahoudun', 'sgscq_yujin', 'sgscq_xuhuang', 'sgscq_zuoci', 'sgscq_beimihu',
					'sgscq_fuhuanghou', 'sgscq_fuwan', 'scsp_caiwenji',
				],
				sgscq_cbzz: [
					//孙权,神周瑜,学妹小乔,黄盖,魏武帝,界关羽,甘宁,枪骑凌统,张昭,张纮,鲁肃,蔡瑁,张允,蒋干,庞统,吕蒙,荀彧,诸葛瑾,周泰
					'sgscq_sunquan', 'sgscqshen_zhouyu', 'schao_xiaoqiao', 'sgscq_huanggai', 'scdi_caocao', 'scnb_guanyu',
					'sgscq_ganning', 'schao_lingtong', 'sgscq_zhangzhao', 'sgscq_zhanghong', 'sgscq_lusu',
					'sgscq_caimao', 'sgscq_zhangyun', 'sgscq_jianggan', 'sgscq_pangtong', 'sgscq_lvmeng',
					'sgscq_xunyu', 'sgscq_zhugejin', 'sgscq_zhoutai',
				],
				sgscq_gqxs: [
					//刘封,黄忠,魏延,法正,严颜,孟达,吴兰,夏侯渊,曹仁,马良,蜀孙尚香,电玩侍女,虞翻,夏侯氏,马超,王异,马岱,//李严
					'sgscq_liufeng', 'sgscq_huangzhong', 'sgscq_weiyan', 'sgscq_fazheng', 'sgscq_yanyan',
					'sgscq_mengda', 'sgscq_wulan', 'sgscq_xiahouyuan', 'sgscq_caoren', 'sgscq_maliang',
					'scsp_sunshangxiang', 'schao_shinvduizhang', 'sgscq_yufan', 'sgscq_xiahoushi',
					'sgscq_machao', 'sgscq_wangyi', 'sgscq_madai',
				],
				sgscq_bdtg: [
					//昭烈帝,兵长陆逊,神关羽,魔张飞,关索,关银屏,华佗,神吕蒙,八尺琼曹丕,泳装甄姬,吴大帝,鲍勋,张星彩,sp黄忠,廖化,糜芳,孙鲁班,孙鲁育,潘璋,韩当,丁奉,贺齐,全琮,魔黄盖
					'scdi_liubei', 'schao_luxun', 'sgscqshen_guanyu', 'scmo_zhangfei', 'sgscq_guansuo',
					'sgscq_guanyinping', 'sgscq_huatuo', 'sgscqshen_lvmeng', 'schao_caopi', 'schao_zhenji',
					'scdi_sunquan', 'sgscq_baoxun', 'sgscq_zhangxingcai', 'scsp_huangzhong', 'sgscq_liaohua',
					'sgscq_mifang', 'sgscq_sunluban', 'sgscq_sunluyu', 'sgscq_panzhang', 'sgscq_handang',
					'sgscq_dingfeng', 'sgscq_heqi', 'sgscq_quancong', 'scmo_huanggai', 'scmo_lingtong',
				],
				sgscq_pdnm: [
					//孟获,祝融,sp关索,花鬘,鲍三娘,马谡,王平,魏姜维,刘禅,司马懿,张春华满宠,吕虔,射手黄忠,郝昭,牛金,跑男夏侯渊,夜夜星彩,圣诞司徒,关兴,关张
					'sgscq_menghuo', 'sgscq_zhurong', 'scsp_guansuo', 'sgscq_huaman', 'sgscq_baosanniang',
					'sgscq_masu', 'sgscq_wangping', 'scsp_jiangwei', 'sgscq_liushan', 'sgscq_simayi',
					'sgscq_zhangchunhua', 'sgscq_manchong', 'sgscq_lvqian', 'schao_huangzhong', 'sgscq_haozhao',
					'sgscq_niujin', 'schao_xiahouyuan', 'schao_zhangxingcai', 'schao_wanglang', 'sgscq_guanxing',
					'sgscq_guanzhang',
				],
				sgscq_xywzy: [
					//神诸葛亮,德古拉魏延,sp马超,神司马懿,冰雪春华,典满,死神祝融
					'sgscqshen_zhugeliang', 'schao_weiyan', 'scsp_machao', 'sgscqshen_simayi', 'schao_zhangchunhua',
					'sgscq_dianman', 'schao_zhurong',
				],
				sgscq_jgsz: [
					//姜维,邓艾,钟会,司马昭,司马炎,王元姬,魔马超
					'sgscq_jiangwei', 'sgscq_dengai', 'sgscq_zhonghui', 'sgscq_simazhao', 'sgscq_simayan',
					'sgscq_wangyuanji', 'scmo_machao',
				],
				sgscq_ccxh: [
					//英雄王关羽,神指纹,神塞雷,神大刀兵,神重骑兵,公主宪英,天使尚香,至尊小宝,功夫阿奇,顽皮淘淘,小鸡哔哔,浣熊波波,倒霉呆呆,神秘武将
					'schaoshen_guanyu', 'schaoshen_zhiwen', 'schaoshen_sailei', 'schaoshen_dadaobing', 'schaoshen_zhongqibing',
					'schao_xinxianying', 'schao_sunshangxiang', 'sgscq_vipbaby', 'sgscq_kongfuaqi', 'sgscq_playertao',
					'sgscq_jjbb', 'sgscq_bobo', 'sgscq_wtdd', 'sgscq_mystery',
				],
			},
		},
		character: { //武将格式 : 
			////------------------------桃园结义
			sgscq_liubei: ['male', 'shu', 4, ['sczs_rende'], ['rare']],//刘备
			// 'sgscq_guanyu':['male','shu',4,[],[]],
			// 'sgscq_zhangfei':['male','shu',4,[],[]],
			// 'sgscq_duyou':['male','qun',3,[],[]],
			// 'sgscq_dongzhuo':['male','qun',8,[],[]],
			// 'sgscq_zhangjiao':['male','qun',3,[],[]],
			// 'sgscq_zhangbao':['male','qun',3,[],[]],
			// 'sgscq_mayuanyi':['male','qun',4,[],[]],
			// 'sgscq_gaosheng':['male','qun',4,[],[]],
			// 'sgscq_peiyuanshao':['male','qun',4,[],[]],
			// 'sgscq_bocai':['male','qun',4,[],[]],
			scmo_zhangjiao: ['male', 'qun', 3, ['sgscq_moleiji', 'sgscq_guidao', 'sgscq_dujie'], ['epic']],//魔张角
			// 'scsp_zhangjiao':['male','qun',3,[],[]],
			// 'schao_diaochan':['female','shu',3,[],[]],
			// 'sgscq_huangjinleishi':['female','qun',3,[],[]],
			// 'sgscq_nanhualaoxian':['male','qun',3,[],[]],
			// ////-------------------------酒池肉林
			//--------
			// 'sgscq_liuxie':['male','qun',3,[],[]],
			scmo_dongzhuo: ['male', 'qun', 8, ['sgscq_mobenghuai'], ['legend']],//魔董卓
			// 'sgscq_sunjian':['male','wu',3,[],[]],
			// 'sgscq_yuanshao':['male','qun',3,[],[]],
			// 'sgscq_lvbu':['male','qun',3,[],[]],
			// 'sgscq_zumao':['male','wu',3,[],[]],
			sgscq_huaxiong: ['male', 'qun', 6, ['sgscq_moyaowu', 'sgscq_hengdao'], ['epic']],//华雄//
			// 'sgscq_yuanshu':['male','qun',3,[],[]],
			// 'sgscq_gongsunzan':['male','qun',3,[],[]],
			// 'sgscq_zhaoyun':['male','shu',3,[],[]],
			// 'sgscq_panfeng':['male','qun',3,[],[]],
			// 'sgscq_wangyun':['male','qun',3,[],[]],
			// 'sgscq_diaochan':['female','qun',3,[],[]],
			// 'sgscq_xuchu':['male','wei',4,[],[]],
			// 'sgscq_caiwenji':['female','qun',3,[],[]],
			// 'schao_guanyu':['male','shu',3,[],[]],
			// 'sgscq_dongbai':['female','qun',3,[],[]],
			// 'sgscq_lijue':['male','qun',3,[],[]],
			// 'sgscq_guosi':['male','qun',3,[],[]],
			// 'sgscq_niufu':['male','qun',3,[],[]],
			// 'sgscq_yuanji':['female','qun',3,[],[]],
			// 'sgscq_liru':['male','qun',3,[],[]],
			scmo_jiaxu: ['male', 'qun', 3, ['sgscq_moluanwux', 'sgscq_weimu'], ['epic']],//魔贾诩
			////-------------------------江东人杰
			// 'sgscq_sunce':['male','qun',3,[],[]],
			// 'sgscq_taishici':['male','qun',3,[],[]],
			sgscq_zhouyu: ['male', 'wu', 3, ['jacken_fanjan', 'sczs_yingzi'], ['epic']],//周瑜--jacken
			sgscq_daqiao: ['female', 'wu', 3, ['sczs_liuli', 'sczs_guose'], ['epic']],//大乔--夜白
			sgscq_xiaoqiao: ['female', 'wu', 3, ['sgscq_tianxiang', 'sgscq_jiaoyan'], ['epic']],//小乔--夜白
			// 'sgscq_daxiaoqiao':['female','qun',3,[],[]],
			scsp_yanbaihu: ['male', 'qun', 4, ['jili_yuan', 'zhidao_yuan'], ['epic']],//严白虎--缘伴随行
			// 'sgscq_wufuren':['female','qun',3,[],[]],
			// 'sgscq_wuguotai':['female','qun',3,[],[]],
			// 'sgscq_sunshangxiang':['female','qun',3,[],[]],
			// 'sgscq_shinvduizhang':['female','qun',3,[],[]],
			// 'sgscq_yuji':['male','qun',3,[],[]],
			// 'sgscq_lingtong':['male','qun',3,[],[]],
			sgscq_lingcao: ['male', 'wu', 4, ['sgscq_dujin'], ['epic']],//凌操
			// 'sgscq_bulianshi':['female','qun',3,[],[]],
			// 'sgscq_dahu':['female','qun',3,[],[]],
			// 'sgscq_xiaohu':['female','qun',3,[],[]],
			// 'sgscq_luxun':['male','qun',3,[],[]],
			// 'sgscq_luji':['male','qun',3,[],[]],
			// 'sgscq_zhuzhi':['male','qun',3,[],[]],
			// 'schao_yuanji':['female','wu',3,[],[]],
			// 'schao_sunjian':['male','wu',3,[],[]],
			// 'sgscq_luyan':['male','qun',3,[],[]],
			////-------------------------白门楼
			scmo_diaochan: ['female', 'qun', 3, ['sgscq_molijian', 'sgscq_mobiyue'], ['epic']],//魔貂蝉
			// 'sgscq_jiaxu':['male','qun',3,[],[]],
			// 'sgscqshen_caocao':['male','shen',3,[],[]],
			// 'sgscqshen_lvbu':['male','shen',3,[],[]],
			// 'sgscq_caoang':['male','qun',3,[],[]],
			sgscq_dianwei: ['male', 'wei', 4, ['sczs_qiangxi'], ['legend']],//典韦
			// 'sgscq_hucheer':['male','qun',3,[],[]],
			// 'sgscq_gaoshun':['male','qun',3,[],[]],
			// 'sgscq_chengong':['male','qun',3,[],[]],
			// 'sgscq_caohong':['male','qun',3,[],[]],
			// 'sgscq_bianhuanghou':['female','qun',3,[],[]],
			// 'sgscq_mizhu':['male','qun',3,[],[]],
			// 'sgscq_sunqian':['male','qun',3,[],[]],
			sgscq_zhangliao: ['male', 'wei', 4, ['sczs_tuxi'], ['epic']],//张辽
			// 'sgscq_lvlingqi':['female','qun',3,[],[]],
			//-------------------------官渡之战
			// 'scsp_yuanshao':['male','qun',3,[],[]],
			// 'sgscq_caocao':['male','qun',3,[],[]],
			// 'sgscq_guotu':['male','qun',3,[],[]],
			// 'sgscq_tianfeng':['male','qun',3,[],[]],
			// 'sgscq_jushou':['male','qun',3,[],[]],
			// 'sgscq_guojia':['male','qun',3,[],[]],
			// 'sgscq_yanliang':['male','qun',3,[],[]],
			// 'sgscq_wenchou':['male','qun',3,[],[]],
			// 'sgscq_yanwen':['male','qun',3,[],[]],
			sgscq_zhanghe: ['male', 'wei', 4, ['sgscq_shenqiaobian'], ['epic', "die:ext:三国杀传奇/audio/die/sgscq_zhanghe.mp3"]],//张郃
			// 'sgscq_zhoucang':['male','qun',3,[],[]],
			// 'sgscq_guanping':['male','qun',3,[],[]],
			// 'sgscq_zhuling':['male','qun',3,[],[]],
			// 'sgscq_litong':['male','qun',3,[],[]],
			//-------------------------荆襄之地
			// 'sgscq_liubiao':['male','qun',3,[],[]],
			// 'sgscq_yiji':['male','qun',3,[],[]],
			// 'sgscq_zhugeliang':['male','qun',3,[],[]],
			// 'sgscq_huangyueying':['female','qun',3,[],[]],
			sgscqshen_zhaoyun: ['male', 'shen', 2, ['jacken_longhun', 'jacken_zhanjiang', 'jacken_juejing'], ['legend']],//神赵云--jacken
			// 'sgscq_xiahouen':['male','qun',3,[],[]],
			// 'sgscq_ganfuren':['female','qun',3,[],[]],
			// 'sgscq_mifuren':['female','qun',3,[],[]],
			// 'sgscq_xushu':['male','qun',3,[],[]],
			// 'sgscq_jianyong':['male','qun',3,[],[]],
			scmo_xiahoudun: ['male', 'wei', 5, ['sgscq_moganglie'], ['epic']],//魔夏侯惇
			// 'schao_huangyueying':['female','qun',3,[],[]],
			// //-------------------------曹魏锦绣
			// 'sgscq_zhenji':['female','qun',3,[],[]],
			// 'sgscq_caopi':['male','qun',3,['sczs_fangzhu','sczs_xingshang','sczs_songwei'],['epic']],
			sgscq_caozhi: ['male', 'wei', 3, ['jacken_luoying', 'jacken_jiushi'], ['legend']],//曹植--jacken
			// 'sgscq_lidian':['male','qun',3,[],[]],
			// 'sgscq_xunyou':['male','qun',3,[],[]],
			sgscq_chengyu: ['male', 'wei', 3, ['sczs_shefu'], ['legend']],//程昱
			// 'sgscq_xizhicai':['male','qun',3,[],[]],
			sgscq_yuejin: ["male", "wei", 4, ["jacken_xiaogo"], ['epic']],//乐进--jacken
			sgscq_xinxianying: ['female', 'wei', 3, ['sgscq_zhongjian', 'sgscq_caishi'], ['epic']],//辛宪英
			// 'schao_xiahoushi':['female','wei',3,[],[]],
			// 'sgscq_xiahoudun':['male','qun',3,[],[]],
			// 'sgscq_yujin':['male','qun',3,[],[]],
			// 'sgscq_xuhuang':['male','qun',3,[],[]],
			// 'sgscq_zuoci':['male','qun',3,[],[]],
			// 'sgscq_beimihu':['female','qun',3,[],[]],
			// 'sgscq_fuhuanghou':['female','qun',3,[],[]],
			// 'sgscq_fuwan':['male','qun',3,[],[]],
			// 'scsp_caiwenji':['female','qun',3,[],[]],
			// //-------------------------赤壁之战
			// 'sgscq_sunquan':['male','qun',3,[],[]],
			sgscqshen_zhouyu: ['male', 'shen', 3, ['sgscq_qinyin', 'sgscq_guqux'], ['legend']],//神周瑜
			// 'schao_xiaoqiao':['female','wu',3,[],[]],
			sgscq_huanggai: ['male', 'wu', 5, ['sczs_kuroux', 'sczs_zhaxiangx'], ['epic']],//黄盖
			// 'scdi_caocao':['male','qun',3,[],[]],
			// 'scnb_guanyu':['male','qun',3,[],[]],
			// 'sgscq_ganning':['male','qun',3,[],[]],
			// 'schao_lingtong':['male','shen',3,[],[]],
			// 'sgscq_zhangzhao':['male','qun',3,[],[]],
			// 'sgscq_zhanghong':['male','qun',3,[],[]],
			// 'sgscq_lusu':['male','qun',3,[],[]],
			// 'sgscq_caimao':['male','qun',3,[],[]],
			// 'sgscq_zhangyun':['male','qun',3,[],[]],
			// 'sgscq_jianggan':['male','qun',3,[],[]],
			// 'sgscq_pangtong':['male','qun',3,[],[]],
			// 'sgscq_lvmeng':['male','qun',3,[],[]],
			// 'sgscq_xunyu':['male','qun',3,[],[]],
			// 'sgscq_zhugejin':['male','qun',3,[],[]],
			// 'sgscq_zhoutai':['male','qun',3,[],[]],
			// //-------------------------攻取西蜀
			// 'sgscq_liufeng':['male','qun',3,[],[]],
			// 'sgscq_huangzhong':['male','qun',3,[],[]],
			// 'sgscq_weiyan':['male','qun',3,[],[]],
			// 'sgscq_fazheng':['male','qun',3,[],[]],
			sgscq_yanyan: ['male', 'shu', 4, ['sczs_juzhan'], []],
			// 'sgscq_mengda':['male','qun',3,[],[]],
			// 'sgscq_wulan':['male','qun',3,[],[]],
			// 'sgscq_xiahouyuan':['male','qun',3,[],[]],
			// 'sgscq_caoren':['male','qun',3,[],[]],
			sgscq_maliang: ['male', 'shu', 3, ['sczs_xiemu', 'sczs_naman'], ['legend']],//马良
			// 'scsp_sunshangxiang':['female','qun',3,[],[]],
			// 'schao_shinvduizhang':['female','shen',3,[],[]],
			// 'sgscq_yufan':['male','qun',3,[],[]],
			sgscq_xiahoushi: ['female', 'shu', 3, ['sgscq_yanyu'], ['epic']],//夏侯氏
			// 'sgscq_machao':['male','shu',4,['sgscq_suoding','sgscq_qiongsha','sgscq_zhuiji'],['forbidai','epic']],//马超
			// 'sgscq_wangyi':['female','qun',3,[],[]],
			// 'sgscq_madai':['male','qun',3,[],[]],
			// //-------------------------夷陵之战
			// 'scdi_liubei':['male','qun',3,[],[]],
			// 'schao_luxun':['male','shen',3,[],[]],
			// 'sgscqshen_guanyu':['male','shen',3,[],[]],
			scmo_zhangfei: ['male', 'shu', 4, ['sgscq_haoyi', 'sgscq_mopaoxiao'], ['epic']],//魔张飞
			// 'sgscq_guansuo':['male','qun',3,[],[]],
			sgscq_guanyinping: ['female', 'shu', 4, ['sgscq_kuwangxx', 'sgscq_xuejixx'], ['legend']],//关银屏
			// 'sgscq_huatuo':['male','qun',3,[],[]],
			// 'sgscqshen_lvmeng':['male','shen',3,[],[]],
			// 'schao_caopi':['male','shen',3,[],[]],
			// 'schao_zhenji':['female','shen',3,[],[]],
			scdi_sunquan: ['male', 'wu', 4, ['sgscq_jiejian'], ['zhu', 'epic']],//吴大帝//QQQ
			// 'sgscq_baoxun':['male','qun',3,[],[]],
			// 'sgscq_zhangxingcai':['female','qun',3,[],[]],
			// 'scsp_huangzhong':['male','qun',3,[],[]],
			sgscq_liaohua: ["male", "shu", 4, ["jacken_dangxian"], ['legend']],//廖化--jacken
			// 'sgscq_mifang':['male','qun',3,[],[]],
			// 'sgscq_sunluban':['female','qun',3,[],[]],
			// 'sgscq_sunluyu':['female','qun',3,[],[]],
			// 'sgscq_panzhang':['male','qun',3,[],[]],
			// 'sgscq_handang':['male','qun',3,[],[]],
			// 'sgscq_dingfeng':['male','qun',3,[],[]],
			// 'sgscq_heqi':['male','qun',3,[],[]],
			// 'sgscq_quancong':['male','qun',3,[],[]],
			scmo_huanggai: ['male', 'wu', 4, ['sgscq_mokurouxx'], ['legend']],//魔黄盖
			scmo_lingtong: ['male', 'wu', 4, ['sgscq_moxuanfeng'], ['legend']],//魔凌统
			//-------------------------六出祁山
			// 'sgscq_menghuo':['male','qun',3,[],[]],
			// 'sgscq_zhurong':['female','qun',3,[],[]],
			scsp_guansuo: ['male', 'shu', 4, ['zhengnan_yuan', 'xiefang_yuan'], ['legend']],//花关索--缘伴随行
			// 'sgscq_huaman':['female','qun',3,[],[]],
			// 'sgscq_baosanniang':['female','qun',3,[],[]],
			// 'sgscq_masu':['male','qun',3,[],[]],
			// 'sgscq_wangping':['male','qun',3,[],[]],
			// 'scsp_jiangwei':['male','qun',3,[],[]],
			// 'sgscq_liushan':['male','qun',3,[],[]],
			// 'sgscq_simayi':['male','qun',3,[],[]],
			// 'sgscq_zhangchunhua':['female','qun',3,[],[]],
			// 'sgscq_manchong':['male','qun',3,[],[]],
			// 'sgscq_lvqian':['male','qun',3,[],[]],
			// 'schao_huangzhong':['male','shen',3,[],[]],
			// 'sgscq_haozhao':['male','wei',3,[],[]],
			// 'sgscq_niujin':['male','wei',3,[],[]],
			// 'schao_xiahouyuan':['male','shen',3,[],[]],
			// 'schao_zhangxingcai':['female','shu',3,[],[]],
			// 'schao_wanglang':['male','wei',3,[],[]],
			// 'sgscq_guanxing':['male','shu',3,[],[]],
			// 'sgscq_guanzhang':['male','shu',3,[],[]],
			// //-------------------------星陨五丈原
			// 'sgscqshen_zhugeliang':['male','shen',3,[],[]],
			// 'schao_weiyan':['male','shen',3,[],[]],
			// 'scsp_machao':['male','shu',3,[],[]],
			// 'sgscqshen_simayi':['male','shen',3,[],[]],
			// 'schao_zhangchunhua':['female','jin',3,[],[]],
			// 'sgscq_dianman':['male','wei',3,[],[]],
			// 'schao_zhurong':['female','qun',3,[],[]],
			// //-------------------------剑阁死战
			sgscq_jiangwei: ['male', 'shu', 4, ['sczs_tiaoxinxx', 'sczs_jizhixx'], ['epic']],
			sgscq_dengai: ['male', 'wei', 4, ['sczs_tuntian', 'sczs_zaoxian'], ['legend']],
			sgscq_zhonghui: ['male', 'wei', 4, ['sczs_quanji', 'sczs_zili'], ['epic']],
			// 'sgscq_simazhao':['male','jin',4,[],[]],
			// 'sgscq_simayan':['male','jin',4,[],[]],
			// 'sgscq_wangyuanji':['female','jin',3,[],[]],
			scmo_machao: ['male', 'shen', 3, ['mashu', 'sgscq_motieji'], ['epic']],//魔马超
			////-------------------------璀璨星河
			// 'schaoshen_guanyu':['male','shen',4,[],[]],
			// 'schaoshen_zhiwen':['male','shen',4,[],[]],
			// 'schaoshen_sailei':['male','shen',4,[],[]],
			// 'schaoshen_dadaobing':['male','shen',4,[],[]],
			// 'schaoshen_zhongqibing':['male','shen',4,[],[]],
			schao_xinxianying: ['female', 'wei', 3, ['sgscq_zhongjian', 'sgscq_caishix'], ['epic']],//公主宪英
			// 'schao_sunshangxiang':['female','wu',3,[],[]],
			// 'sgscq_vipbaby':['male','wu',3,[],[]],//吴香,天使香
			// 'sgscq_kongfuaqi':['male','shu',3,[],[]],//夏侯氏
			// 'sgscq_playertao':['male','wei',3,[],[]],//采樵夏侯氏
			// 'sgscq_jjbb':['male','shu',3,[],[]],//庞统
			// 'sgscq_bobo':['male','wu',3,[],[]],//鲁肃
			// 'sgscq_wtdd':['male','wu',3,[],[]],//孙鲁育
			// 'sgscq_mystery':['female','wei',3,[],[]],
			//---------------------三传魔将
			//---------------------三传壕将
			//'武将名字':['性别','势力',体力,[技能],[]], //格式内每一样东西都不能缺少,否则无法导入该武将包及其以下内容 
		}, //武将(必填) 
		characterTitle: {//称号
			////------------------------桃园结义
			sgscq_liubei: '<span class=YB_moneytext>乱世的枭雄</span>',
			sgscq_guanyu: '<span class=YB_moneytext></span>',
			sgscq_zhangfei: '<span class=YB_moneytext></span>',
			sgscq_duyou: '<span class=YB_moneytext></span>',
			sgscq_dongzhuo: '<span class=YB_moneytext></span>',
			sgscq_zhangjiao: '<span class=YB_moneytext></span>',
			sgscq_zhangbao: '<span class=YB_moneytext>地公将军</span>',
			sgscq_mayuanyi: '<span class=YB_moneytext></span>',
			sgscq_gaosheng: '<span class=YB_moneytext></span>',
			sgscq_peiyuanshao: '<span class=YB_moneytext></span>',
			sgscq_bocai: '<span class=YB_moneytext></span>',
			scmo_zhangjiao: '<span class=YB_moneytext>极地的电蜗牛</span>',
			scsp_zhangjiao: '<span class=YB_moneytext></span>',
			schao_diaochan: '<span class=YB_moneytext></span>',
			sgscq_huangjinleishi: '<span class=YB_moneytext></span>',
			sgscq_nanhualaoxian: '<span class=YB_moneytext></span>',
			////-------------------------酒池肉林
			sgscq_liuxie: '<span class=YB_moneytext></span>',
			scmo_dongzhuo: '<span class=YB_moneytext>崩坏的血宴</span>',
			sgscq_sunjian: '<span class=YB_moneytext></span>',
			sgscq_yuanshao: '<span class=YB_moneytext></span>',
			sgscq_lvbu: '<span class=YB_moneytext></span>',
			sgscq_zumao: '<span class=YB_moneytext></span>',
			sgscq_huaxiong: '<span class=YB_moneytext>汜水关的死神</span>',
			sgscq_yuanshu: '<span class=YB_moneytext>仲家帝</span>',
			sgscq_gongsunzan: '<span class=YB_moneytext></span>',
			sgscq_zhaoyun: '<span class=YB_moneytext></span>',
			sgscq_panfeng: '<span class=YB_moneytext></span>',
			sgscq_wangyun: '<span class=YB_moneytext></span>',
			sgscq_diaochan: '<span class=YB_moneytext></span>',
			sgscq_xuchu: '<span class=YB_moneytext></span>',
			sgscq_caiwenji: '<span class=YB_moneytext></span>',
			schao_guanyu: '<span class=YB_moneytext></span>',
			sgscq_dongbai: '<span class=YB_moneytext></span>',
			sgscq_lijue: '<span class=YB_moneytext></span>',
			sgscq_guosi: '<span class=YB_moneytext></span>',
			sgscq_niufu: '<span class=YB_moneytext></span>',
			sgscq_yuanji: '<span class=YB_moneytext></span>',
			sgscq_liru: '<span class=YB_moneytext></span>',
			scmo_jiaxu: '<span class=YB_moneytext>冷酷的谋士</span>',
			////-------------------------江东人杰
			sgscq_sunce: '<span class=YB_moneytext></span>',
			sgscq_taishici: '<span class=YB_moneytext></span>',
			sgscq_zhouyu: '<span class=YB_moneytext>大都督</span>',
			sgscq_daqiao: '<span class=YB_moneytext>矜持之花</span>',
			sgscq_xiaoqiao: '<span class=YB_moneytext>矫情之花</span>',
			sgscq_daxiaoqiao: '<span class=YB_moneytext></span>',
			scsp_yanbaihu: '<span class=YB_moneytext>豺牙落涧</span>',
			sgscq_wufuren: '<span class=YB_moneytext></span>',
			sgscq_wuguotai: '<span class=YB_moneytext></span>',
			sgscq_sunshangxiang: '<span class=YB_moneytext></span>',
			sgscq_shinvduizhang: '<span class=YB_moneytext></span>',
			sgscq_yuji: '<span class=YB_moneytext></span>',
			sgscq_lingtong: '<span class=YB_moneytext></span>',
			sgscq_lingcao: '<span class=YB_moneytext>凌操称号</span>',
			sgscq_bulianshi: '<span class=YB_moneytext></span>',
			sgscq_dahu: '<span class=YB_moneytext></span>',
			sgscq_xiaohu: '<span class=YB_moneytext></span>',
			sgscq_luxun: '<span class=YB_moneytext></span>',
			sgscq_luji: '<span class=YB_moneytext></span>',
			sgscq_zhuzhi: '<span class=YB_moneytext></span>',
			schao_yuanji: '<span class=YB_moneytext></span>',
			schao_sunjian: '<span class=YB_moneytext></span>',
			sgscq_luyan: '<span class=YB_moneytext>浮生掠尘</span>',
			////-------------------------白门楼
			scmo_diaochan: '<span class=YB_moneytext>暗黑的傀儡师</span>',
			sgscq_jiaxu: '<span class=YB_moneytext></span>',
			sgscqshen_caocao: '<span class=YB_moneytext></span>',
			sgscqshen_lvbu: '<span class=YB_moneytext></span>',
			sgscq_caoang: '<span class=YB_moneytext></span>',
			sgscq_dianwei: '<span class=YB_moneytext>古之恶来</span>',
			sgscq_hucheer: '<span class=YB_moneytext></span>',
			sgscq_gaoshun: '<span class=YB_moneytext></span>',
			sgscq_chengong: '<span class=YB_moneytext></span>',
			sgscq_caohong: '<span class=YB_moneytext></span>',
			sgscq_bianhuanghou: '<span class=YB_moneytext></span>',
			sgscq_mizhu: '<span class=YB_moneytext></span>',
			sgscq_sunqian: '<span class=YB_moneytext></span>',
			sgscq_zhangliao: '<span class=YB_moneytext>前将军</span>',
			sgscq_lvlingqi: '<span class=YB_moneytext></span>',
			//-------------------------官渡之战
			scsp_yuanshao: '<span class=YB_moneytext></span>',
			sgscq_caocao: '<span class=YB_moneytext></span>',
			sgscq_guotu: '<span class=YB_moneytext></span>',
			sgscq_tianfeng: '<span class=YB_moneytext></span>',
			sgscq_jushou: '<span class=YB_moneytext></span>',
			sgscq_guojia: '<span class=YB_moneytext></span>',
			sgscq_yanliang: '<span class=YB_moneytext></span>',
			sgscq_wenchou: '<span class=YB_moneytext></span>',
			sgscq_yanwen: '<span class=YB_moneytext></span>',
			sgscq_zhanghe: '<span class=YB_moneytext>料敌机先</span>',
			sgscq_zhoucang: '<span class=YB_moneytext></span>',
			sgscq_guanping: '<span class=YB_moneytext></span>',
			sgscq_zhuling: '<span class=YB_moneytext></span>',
			sgscq_litong: '<span class=YB_moneytext></span>',
			//-------------------------荆襄之地
			sgscq_liubiao: '<span class=YB_moneytext></span>',
			sgscq_yiji: '<span class=YB_moneytext></span>',
			sgscq_zhugeliang: '<span class=YB_moneytext></span>',
			sgscq_huangyueying: '<span class=YB_moneytext></span>',
			sgscqshen_zhaoyun: '<span class=YB_moneytext>神威如龙</span>',
			sgscq_xiahouen: '<span class=YB_moneytext></span>',
			sgscq_ganfuren: '<span class=YB_moneytext></span>',
			sgscq_mifuren: '<span class=YB_moneytext></span>',
			sgscq_xushu: '<span class=YB_moneytext></span>',
			sgscq_jianyong: '<span class=YB_moneytext></span>',
			scmo_xiahoudun: '<span class=YB_moneytext>啖睛的苍狼</span>',
			schao_huangyueying: '<span class=YB_moneytext></span>',
			//-------------------------曹魏锦绣
			sgscq_zhenji: '<span class=YB_moneytext></span>',
			sgscq_caopi: '<span class=YB_moneytext>魏文帝</span>',
			sgscq_caozhi: '<span class=YB_moneytext>琳琅妙笔</span>',
			sgscq_lidian: '<span class=YB_moneytext></span>',
			sgscq_xunyou: '<span class=YB_moneytext></span>',
			sgscq_chengyu: '<span class=YB_moneytext>泰山捧日</span>',
			sgscq_xizhicai: '<span class=YB_moneytext></span>',
			sgscq_yuejin: '<span class=YB_moneytext>奋强突围</span>',
			sgscq_xinxianying: '<span class=YB_moneytext>忠鉴清识</span>',
			schao_xiahoushi: '<span class=YB_moneytext></span>',
			sgscq_xiahoudun: '<span class=YB_moneytext></span>',
			sgscq_yujin: '<span class=YB_moneytext></span>',
			sgscq_xuhuang: '<span class=YB_moneytext></span>',
			sgscq_zuoci: '<span class=YB_moneytext></span>',
			sgscq_beimihu: '<span class=YB_moneytext></span>',
			sgscq_fuhuanghou: '<span class=YB_moneytext>孤注一掷</span>',
			sgscq_fuwan: '<span class=YB_moneytext></span>',
			scsp_caiwenji: '<span class=YB_moneytext></span>',
			//-------------------------赤壁之战
			sgscq_sunquan: '<span class=YB_moneytext></span>',
			sgscqshen_zhouyu: '<span class=YB_moneytext>江畔琴音</span>',
			schao_xiaoqiao: '<span class=YB_moneytext></span>',
			sgscq_huanggai: '<span class=YB_moneytext>轻身为国</span>',
			scdi_caocao: '<span class=YB_moneytext></span>',
			scnb_guanyu: '<span class=YB_moneytext></span>',
			sgscq_ganning: '<span class=YB_moneytext></span>',
			schao_lingtong: '<span class=YB_moneytext></span>',
			sgscq_zhangzhao: '<span class=YB_moneytext></span>',
			sgscq_zhanghong: '<span class=YB_moneytext></span>',
			sgscq_lusu: '<span class=YB_moneytext></span>',
			sgscq_caimao: '<span class=YB_moneytext></span>',
			sgscq_zhangyun: '<span class=YB_moneytext></span>',
			sgscq_jianggan: '<span class=YB_moneytext></span>',
			sgscq_pangtong: '<span class=YB_moneytext></span>',
			sgscq_lvmeng: '<span class=YB_moneytext></span>',
			sgscq_xunyu: '<span class=YB_moneytext></span>',
			sgscq_zhugejin: '<span class=YB_moneytext></span>',
			sgscq_zhoutai: '<span class=YB_moneytext></span>',
			//-------------------------攻取西蜀
			sgscq_liufeng: '<span class=YB_moneytext></span>',
			sgscq_huangzhong: '<span class=YB_moneytext></span>',
			sgscq_weiyan: '<span class=YB_moneytext></span>',
			sgscq_fazheng: '<span class=YB_moneytext></span>',
			sgscq_yanyan: '<span class=YB_moneytext>断头将军</span>',
			sgscq_mengda: '<span class=YB_moneytext></span>',
			sgscq_wulan: '<span class=YB_moneytext></span>',
			sgscq_xiahouyuan: '<span class=YB_moneytext></span>',
			sgscq_caoren: '<span class=YB_moneytext></span>',
			sgscq_maliang: '<span class=YB_moneytext>白眉智士</span>',
			scsp_sunshangxiang: '<span class=YB_moneytext></span>',
			schao_shinvduizhang: '<span class=YB_moneytext></span>',
			sgscq_yufan: '<span class=YB_moneytext></span>',
			sgscq_xiahoushi: '<span class=YB_moneytext></span>',
			sgscq_machao: '<span class=YB_moneytext></span>',
			// sgscq_machao:'<span class=YB_moneytext>铁马踏霜雪</span>',
			sgscq_wangyi: '<span class=YB_moneytext></span>',
			sgscq_madai: '<span class=YB_moneytext></span>',
			//-------------------------夷陵之战
			scdi_liubei: '<span class=YB_moneytext></span>',
			schao_luxun: '<span class=YB_moneytext></span>',
			sgscqshen_guanyu: '<span class=YB_moneytext></span>',
			scmo_zhangfei: '<span class=YB_moneytext>含恨的怒魂</span>',
			sgscq_guansuo: '<span class=YB_moneytext></span>',
			sgscq_guanyinping: '<span class=YB_moneytext>枯绝之思</span>',
			sgscq_huatuo: '<span class=YB_moneytext></span>',
			sgscqshen_lvmeng: '<span class=YB_moneytext></span>',
			schao_caopi: '<span class=YB_moneytext></span>',
			schao_zhenji: '<span class=YB_moneytext></span>',
			scdi_sunquan: '<span class=YB_moneytext>草船借箭</span>',
			sgscq_baoxun: '<span class=YB_moneytext></span>',
			sgscq_zhangxingcai: '<span class=YB_moneytext></span>',
			scsp_huangzhong: '<span class=YB_moneytext></span>',
			sgscq_liaohua: '<span class=YB_moneytext>历尽沧桑</span>',
			sgscq_mifang: '<span class=YB_moneytext></span>',
			sgscq_sunluban: '<span class=YB_moneytext></span>',
			sgscq_sunluyu: '<span class=YB_moneytext></span>',
			sgscq_panzhang: '<span class=YB_moneytext></span>',
			sgscq_handang: '<span class=YB_moneytext></span>',
			sgscq_dingfeng: '<span class=YB_moneytext></span>',
			sgscq_heqi: '<span class=YB_moneytext></span>',
			sgscq_quancong: '<span class=YB_moneytext></span>',
			scmo_huanggai: '<span class=YB_moneytext>吴地烈将</span>',
			scmo_lingtong: '<span class=YB_moneytext>风卷残云</span>',
			//-------------------------六出祁山
			sgscq_menghuo: '<span class=YB_moneytext>南蛮王</span>',
			sgscq_zhurong: '<span class=YB_moneytext></span>',
			scsp_guansuo: '<span class=YB_moneytext>征南先锋</span>',
			sgscq_huaman: '<span class=YB_moneytext></span>',
			sgscq_baosanniang: '<span class=YB_moneytext></span>',
			sgscq_masu: '<span class=YB_moneytext></span>',
			sgscq_wangping: '<span class=YB_moneytext></span>',
			scsp_jiangwei: '<span class=YB_moneytext></span>',
			sgscq_liushan: '<span class=YB_moneytext></span>',
			sgscq_simayi: '<span class=YB_moneytext></span>',
			sgscq_zhangchunhua: '<span class=YB_moneytext></span>',
			sgscq_manchong: '<span class=YB_moneytext></span>',
			sgscq_lvqian: '<span class=YB_moneytext></span>',
			schao_huangzhong: '<span class=YB_moneytext></span>',
			sgscq_haozhao: '<span class=YB_moneytext></span>',
			sgscq_niujin: '<span class=YB_moneytext></span>',
			schao_xiahouyuan: '<span class=YB_moneytext></span>',
			schao_zhangxingcai: '<span class=YB_moneytext></span>',
			schao_wanglang: '<span class=YB_moneytext></span>',
			sgscq_guanxing: '<span class=YB_moneytext></span>',
			sgscq_guanzhang: '<span class=YB_moneytext></span>',
			//-------------------------星陨五丈原
			sgscqshen_zhugeliang: '<span class=YB_moneytext></span>',
			schao_weiyan: '<span class=YB_moneytext></span>',
			scsp_machao: '<span class=YB_moneytext></span>',
			sgscqshen_simayi: '<span class=YB_moneytext></span>',
			schao_zhangchunhua: '<span class=YB_moneytext></span>',
			sgscq_dianman: '<span class=YB_moneytext></span>',
			schao_zhurong: '<span class=YB_moneytext></span>',
			//-------------------------剑阁死战
			sgscq_jiangwei: '<span class=YB_moneytext>龙的衣钵</span>',
			sgscq_dengai: '<span class=YB_moneytext>矫然的壮士</span>',
			sgscq_zhonghui: '<span class=YB_moneytext>桀骜的野心家</span>',
			sgscq_simazhao: '<span class=YB_moneytext></span>',
			sgscq_simayan: '<span class=YB_moneytext></span>',
			sgscq_wangyuanji: '<span class=YB_moneytext></span>',
			scmo_machao: '<span class=YB_moneytext>一骑破霄汉</span>',
			////-------------------------璀璨星河
			schaoshen_guanyu: '<span class=YB_moneytext></span>',
			schaoshen_zhiwen: '<span class=YB_moneytext></span>',
			schaoshen_sailei: '<span class=YB_moneytext></span>',
			schaoshen_dadaobing: '<span class=YB_moneytext></span>',
			schaoshen_zhongqibing: '<span class=YB_moneytext></span>',
			schao_xinxianying: '<span class=YB_moneytext>洞穿者</span>',
			schao_sunshangxiang: '<span class=YB_moneytext></span>',
			sgscq_vipbaby: '<span class=YB_moneytext></span>',
			sgscq_kongfuaqi: '<span class=YB_moneytext></span>',
			sgscq_playertao: '<span class=YB_moneytext></span>',
			sgscq_jjbb: '<span class=YB_moneytext></span>',
			sgscq_bobo: '<span class=YB_moneytext></span>',
			sgscq_wtdd: '<span class=YB_moneytext></span>',
			sgscq_mystery: '<span class=YB_moneytext></span>',
		},//武将标题(用于写称号或注释)(选填) 
		skill: {
			//---------------昭烈领域
			sgscq_zhaolielingyu: {
				inherit: 'fengyin',
				audioname2: {
					scmo_machao: 'sgscq_motieji_audio',
					scmo_zhangfei: 'sgscq_mopaoxiao_zhaolie',
				},
				mark: true,
				marktext: '昭',
				intro: {
					content() {
						return '非锁定技失效.';
					}
				}
			},
			sgscq_zhaolielingyu2: {
				trigger: {
					global: ['phaseBefore', 'phaseAfter'],
					player: 'useCardAfter'
				},
				forced: true,
				charlotte: true,
				popup: false,
				filter(event, player) {
					if (event.name == 'phase') return true;
					return event.card == player.storage.sgscq_zhaolielingyu2;
				},
				content() {
					delete player.storage.sgscq_zhaolielingyu2;
					player.removeSkill('sgscq_zhaolielingyu2');
				},
				onremove() {
					game.countPlayer2(function (current) {
						current.removeSkillBlocker('sgscq_zhaolielingyu');
					});
				},
			},
			//
			//--------刘备
			sgscq_rende: {
				audio: 'ext:三国杀传奇/audio/character:1',
				enable: "phaseUse",
				filterCard: true,
				selectCard: [1, Infinity],
				discard: false,
				lose: false,
				delay: 0,
				filterTarget(card, player, target) {
					return player != target;
				},
				check(card) {
					if (ui.selected.cards.length > 1) return 0;
					if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
					if (!ui.selected.cards.length && card.name == 'du') return 20;
					var player = get.owner(card);
					var num = 0;
					var evt2 = _status.event.parent;
					var num = 0;
					player.getHistory('lose', function (evt) {
						if (evt.parent.skill == 'rende' && evt.getParent(3) == evt2) num += evt.cards.length;
					});
					if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
						if (ui.selected.cards.length) {
							return -1;
						}
						var players = game.filterPlayer();
						for (var i = 0; i < players.length; i++) {
							if (players[i].hasSkill('haoshi') &&
								!players[i].isTurnedOver() &&
								!players[i].hasJudge('lebu') &&
								get.attitude(player, players[i]) >= 3 &&
								get.attitude(players[i], player) >= 3) {
								return 11 - get.value(card);
							}
						}
						if (player.countCards('h') > player.hp) return 10 - get.value(card);
						if (player.countCards('h') > 2) return 6 - get.value(card);
						return -1;
					}
					return 10 - get.value(card);
				},
				content() {
					player.give(cards, target);
					var evt2 = event.getParent(3);
					var num = 0;
					player.getHistory('lose', function (evt) {
						if (evt.getParent(2).name == 'sgscq_rende' && evt.getParent(5) == evt2) num += evt.cards.length;
					});
					if (num < 2 && num + cards.length > 1) player.draw();
					if (num < 3 && num + cards.length > 2) player.recover();
				},
				ai: {
					order(skill, player) {
						if (player.hp < player.maxHp && player.storage.rende < 2 && player.countCards('h') > 1) {
							return 10;
						}
						return 1;
					},
					result: {
						target(player, target) {
							if (target.hasSkillTag('nogain')) return 0;
							if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
								if (target.hasSkillTag('nodu')) return 0;
								return -10;
							}
							if (target.hasJudge('lebu')) return 0;
							var nh = target.countCards('h');
							var np = player.countCards('h');
							if (player.hp == player.maxHp || player.storage.rende < 0 || player.countCards('h') <= 1) {
								if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
							}
							return Math.max(1, 5 - nh);
						},
					},
					effect: {
						target(card, player, target) {
							if (player == target && get.type(card) == 'equip') {
								if (player.countCards('e', { subtype: get.subtype(card) })) {
									var players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i] != player && get.attitude(player, players[i]) > 0) {
											return 0;
										}
									}
								}
							}
						},
					},
					threaten: 0.8,
				},
			},
			// 'sczs_rende':'仁德',
			// 'sczs_rende_info':'出牌阶段限一次,你可以将任意张牌交给一名其他角色并回复1点体力,直到该角色的下个回合结束,其造成的伤害+1.',
			sczs_rende: {
				audio: 'sgscq_rende',
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				filterTarget: lib.filter.notMe,
				selectTarget: 1,
				filterCard: true,
				selectCard: [1, Infinity],
				position: 'h',
				discard: false,
				lose: false,
				delay: false,
				content() {
					'step 0'
					// event.num=cards.length;
					// event.targets=targets.slice(0);
					player.give(cards, target);
					player.recover();
					target.addTempSkill('sczs_rende_mark', { player: 'phaseAfter' });
					target.storage.sczs_rende_mark++;
				},
				subSkill: {
					mark: {
						charlotte: true,
						mark: true,
						intro: {
							content: '造成的伤害+#'
						},
						init(player, skill) {
							if (!player.storage[skill]) player.storage[skill] = 0;
						},
						trigger: { source: 'damageBegin2' },
						filter: () => true,
						content: () => trigger.num += player.storage.sczs_rende_mark,
					}
				}
			},
			//--------关羽
			//--------张飞
			//--------督邮
			//--------董卓
			//--------张角
			//--------张宝
			//--------马元义
			//--------高升
			//--------裴元绍
			//--------波才
			//------------------魔张角
			sgscq_moleiji: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				audio: 'ext:三国杀传奇/audio/character:2',
				forced: true,
				content() {
					'step 0'
					player.chooseControl('发动', '不发动', true).set('prompt', '魔雷,是否判定？').set(
						'prompt2', '判定若为黑色,则对一名其他角色造成一点雷电伤害').set(
							'ai', function (event, player) { return '发动' });
					'step 1'
					if (result.control == '发动') {
						player.judge(function (card) {//你进行一次判定
							return (get.color(card) == 'black') ? 2 : 0;//黑色返回2,否则返回0
						});
					}
					'step 2'
					if (result.judge == 2) {
						player.chooseTarget('请选择一个目标', function (card, player, target) {//选1个目标
							return player != target;//限制条件:你不是目标
						}, function (target) {//ai:
							var player = get.player();//定义变量player为选目标的发起者(不懂可以先不写)
							return -get.attitude(player, target);//选敌人
						});
					}
					else {
						event.goto(4);
					}
					'step 3'
					if (result.targets?.length) {
						result.targets[0].damage('thunder', 'nocard');
					}
					'step 4'
					event.finish();
				},
				group: 'sgscq_moleiji_recover',
				subSkill: {
					recover: {
						audio: 'sgscq_moleiji',
						trigger: { source: 'damageSource' },
						filter(event, player) {
							return event.nature == 'thunder' && event.num > 0;
						},
						forced: true,
						preHidden: true,
						content() {
							'step 0'
							event.num = Math.min(trigger.num, 9);
							'step 1'
							var choice;
							if (player.isDamaged() && get.recoverEffect(player) > 0 && (player.countCards('hs', function (card) {
								return card.name == 'sha' && player.hasValueTarget(card);
							}) >= player.getCardUsable('sha'))) {
								choice = 'recover_hp';
							}
							else {
								choice = 'draw_card';
							}
							var next = player.chooseDrawRecover(get.prompt(event.name))
							next.set('choice', choice);
							next.set('ai', function () {
								return _status.event.parent.choice;
							});
							next.setHiddenSkill('sgscq_moleiji_recover');
							'step 2'
							if (result.control != 'cancel2') {
								event.num--;
								if (event.num > 0) {
									event.goto(1);
								}
							}
						}
					}
				},
			},
			sgscq_guidao: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: { global: 'judge' },
				filter(event, player) {
					return player.countCards('hes', { color: 'black' }) > 0;
				},
				forced: true,
				content() {
					"step 0"
					player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' +
						get.translation(trigger.player.judging[0]) + ',' + get.prompt('sgscq_guidao'), 'hes', function (card) {
							if (get.color(card) != 'black') return false;
							var player = _status.event.player;
							var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
							if (mod2 != 'unchanged') return mod2;
							var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
							if (mod != 'unchanged') return mod;
							return true;
						}).set('ai', function (card) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							var judging = _status.event.judging;
							var result = trigger.judge(card) - trigger.judge(judging);
							var attitude = get.attitude(player, trigger.player);
							if (attitude == 0 || result == 0) return 0;
							if (attitude > 0) {
								return result;
							}
							else {
								return -result;
							}
						}).set('judging', trigger.player.judging[0]);
					"step 1"
					if (result.cards?.length) {
						player.respond(result.cards, 'highlight', 'sgscq_guidao', 'noOrdering');
					}
					else {
						event.finish();
					}
					"step 2"
					if (result.bool) {
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						trigger.player.judging[0] = result.cards[0];
						trigger.orderingCards.addArray(result.cards);
						game.log(trigger.player, '的判定牌改为', result.cards[0]);
					}
					"step 3"
				},
				ai: {
					rejudge: true,
					tag: {
						rejudge: 1
					}
				}
			},
			sgscq_leiji: {
				audio: 'sgscq_moleiji',
				trigger: { player: ['useCard', 'respond'] },
				filter(event, player) {
					return event.card.name == 'shan';
				},
				forced: true,
				content() {
					'step 0'
					player.chooseControl('发动', '不发动', true).set('prompt', '雷击,是否判定？').set(
						'prompt2', '判定若为黑色,则对一名其他角色造成一点雷电伤害').set(
							'ai', function (event, player) { return '发动' });
					'step 1'
					if (result.control == '发动') {
						player.judge(function (card) {//你进行一次判定
							return (get.color(card) == 'black') ? 2 : 0;//黑色返回2,否则返回0
						});
					}
					'step 2'
					if (result.judge == 2) {
						player.chooseTarget('请选择一个目标', function (card, player, target) {//选1个目标
							return player != target;//限制条件:你不是目标
						}, function (target) {//ai:
							var player = get.player();//定义变量player为选目标的发起者(不懂可以先不写)
							return -get.attitude(player, target);//选敌人
						});
					}
					else {
						event.goto(4);
					}
					'step 3'
					if (result.targets?.length) {
						result.targets[0].damage('thunder', trigger.card);
					}
					'step 4'
					event.finish();
				},
			},
			sgscq_dujie: {
				forced: true,
				trigger: {
					source: 'damageSource',
					player: 'damageEnd',
				},
				filter(event, player) {
					return event.nature == 'thunder' && event.num > 0;
				},
				audio: 'ext:三国杀传奇/audio/character:1',
				content() {
					var num = trigger.num;
					player.addMark('sgscq_dujie', num);
					trigger.trigger('YB_dujie');
				},
				intro: { content: 'mark' },
				derivation: 'sgscq_leiji',
				group: ['sgscq_dujie_leiji', 'sgscq_dujie_shandian', 'sgscq_dujie_juexing'],
				subSkill: {
					leiji: {
						inherit: 'sgscq_leiji',
						filter(event, player) {
							if (!lib.skill.sgscq_leiji.filter(event, player)) return false;
							if (player.hasSkill('sgscq_leiji')) return false;
							if (player.hasJudge('shandian')) return true;
							return false;
						},
					},
					juexing: {
						audio: 'sgscq_dujie',
						trigger: {
							global: 'YB_dujie',
						},
						forced: true,
						filter(event, player) {
							if (player.countMark('sgscq_dujie') >= 5) return true;
							return false;
						},
						content() {
							'step 0'
							player.removeMark('sgscq_dujie', 5);
							player.addMaxHp();
							if (!player.hasSkill('sgscq_leiji')) player.addSkill('sgscq_leiji');
							'step 1'
							if (player.countMark('sgscq_dujie') >= 5) {
								event.goto(0);
							}
						},
					},
					shandian: {
						audio: 'sgscq_dujie',
						enable: "phaseUse",
						discard: false,
						filter(event, player) {
							if (player.hasJudge('shandian')) return false;
							return player.countCards('hes', function (card) {
								return card.suit == 'spade' || card.suit == 'heart';
							}) > 0;
						},
						viewAs: { name: 'shandian' },
						//prepare:"throw",
						position: "hes",
						filterCard(card, player, event) {
							return (card.suit == 'spade' || card.suit == 'heart') && player.canAddJudge({ name: 'shandian', cards: [card] });
						},
						selectTarget: -1,
						filterTarget(card, player, target) {
							return player == target;
						},
						check(card) {
							return 6 - get.value(card);
						},
						// onuse:function (links,player){//用闪电的特效
						// 	var next=game.createEvent('limu_recover',false,_status.event.parent);
						// 	next.player=player;
						// 	next.setContent(function(){player.recover()});
						// },
						ai: {
							result: {
								target: 1,
							},
							order() {
								var player = _status.event.player;
								if (player.hasSkill('xinfu_limu')) return 14;
								return 1;
							},
						},
					},
				}
			},
			//--------SP张角
			//--------圣诞貂蝉
			//--------黄巾雷使
			//--------南华老仙
			//------------
			//--------刘协
			//-----------魔董卓
			sgscq_mobenghuai: {
				audio: 'ext:三国杀传奇/audio/character:1',
				enable: 'phaseUse',
				limited: true,
				filterTarget: true,
				selectTarget() {
					var num = _status.event.player.maxHp;
					return [1, num];
				},//QQQ
				check(event, player) {
					var num = game.countPlayer(function (current) { return get.attitude(player, current) > 0 });
					return num == game.countPlayer(function (current) { return get.attitude(player, current) > 0 });
				},
				multiline: true,
				multitarget: true,
				content() {
					'step 0'
					player.awakenSkill('sgscq_mobenghuai');
					player.loseMaxHp(targets.length);
					'step 1'
					var list = get.YB_1234(targets);
					for (var i of list) {
						i.addMaxHp(3);
					}
					'step 2'
					game.countPlayer(function (current) {
						if (current != player) {
							current.addSkill('benghuai');
							game.log(current, '获得了技能', '#bbenghuai')
						}
					})
				},
				ai: {
					order: 8.5,
					result: {
						target(player, target) {
							return 5;
						},
					},
				},
			},
			//--------孙坚
			//--------袁绍
			//--------吕布
			//--------祖茂
			//--------------华雄
			sgscq_moyaowu: {
				trigger: {
					player: 'damageBegin3',
					source: 'damageBegin3',
				},
				audio: 'ext:三国杀传奇/audio/character:2',
				forced: true,
				filter(event, player) {
					if (event.card && get.color(event.card) == 'red') {
						return event.source && event.source.isAlive();
					}
					else return true;
				},
				content() {
					if (get.color(trigger.card) != 'red') { player.draw(); }
					// else{trigger.source.chooseDrawRecover(1,true);}
					else { trigger.source.recover(); }
				},
			},
			sgscq_hengdao: {
				trigger: {
					global: 'damageBegin3',
				},
				audio: 'ext:三国杀传奇/audio/character:1',
				forced: true,
				filter(event, player) {
					if (event.player == player) return false;
					if (event.player.hp >= player.hp) return false;
					return true;
				},
				content() {
					'step 0'
					var list = [];
					list.push('是');
					list.push('cancel2');
					event.tar = trigger.player;
					player.chooseControl(list).set('prompt', get.translation(trigger.player) + '即将受到' + get.cnNumber(trigger.num) + '点' + get.translation(trigger.nature) + '伤害,是否将此伤害转移给自己？').set('ai', function () {
						var attitude = get.attitude(player, trigger.player);
						if (attitude <= 0) return 0;
						if (attitude > 0) {
							if (player.hp > 2) return 2;
							return 1;
						}
					});
					'step 1'
					if (result.control == '是') {
						trigger.player = player;
					}
					else {
						event.finish();
					}
				},
				ai: {
					expose: 0.3,//跳立场
				}
			},
			//--------袁术
			//--------公孙瓒
			//--------赵云
			//--------潘凤
			//--------王允
			//--------貂蝉
			//--------许褚
			//--------蔡文姬
			//--------财神关羽
			//--------董白
			//--------李傕
			//--------郭汜
			//--------牛辅
			//--------袁姬
			//--------李儒
			//-------------------------------魔贾诩
			sgscq_moluanwu: {
				audio: 'ext:三国杀传奇/audio/character:2',
				init(player, skill) {
					player.storage.sgscq_moluanwu = false;
				},
				zhuanhuanji: true,
				mark: true,
				marktext: '☯',
				intro: {
					content(storage, player, skill) {
						if (player.storage.sgscq_moluanwu == true) {
							return '转换技:阴,出牌阶段限一次,<span class="bluetext">阳,当你受到伤害后</span>.你可以令一名其他角色对你指定的另一名角色使用一张杀,若其不杀或不能杀,则其失去一点体力.';
						}
						return '转换技:<span class="bluetext">阴,出牌阶段限一次</span>,阳,当你受到伤害后.你可以令一名其他角色对你指定的令另一名角色使用一张杀,若其不杀或不能杀,则其失去一点体力.';
					},
				},
				usable: 1,
				enable: 'phaseUse',
				filter(event, player) {
					return player.storage.sgscq_moluanwu == false;
				},
				selectTarget: 2,
				multitarget: true,
				targetprompt: ['被借刀', '出杀目标'],
				filterTarget(card, player, target) {
					if (ui.selected.targets.length == 1) {
						return true;
					}
					return target != player;
				},
				forced: true,
				content() {
					'step 0'
					player.changeZhuanhuanji('sgscq_moluanwu');
					player.line(targets[0], 'YB_demon');
					targets[0].line(targets[1], 'YB_demon');
					game.log(player, '对', targets[0], '发动了乱武,要求他对', targets[1], '使用一张杀,若不执行则失去一点体力.')
					targets[0].chooseToUse('对' + get.translation(targets[1]) + '使用一张杀,或失去一点体力', { name: 'sha' }, targets[1], -1).set('ai2', function () {
						return get.effect_use.apply(this, arguments) + 0.01;
					}).set('addCount', false);;
					"step 1"
					if (result.bool == false) {
						targets[0].loseHp();
					}
				},
				group: 'sgscq_moluanwu_2',
				subSkill: {
					2: {
						audio: 'sgscq_moluanwu',
						trigger: {
							player: 'damageEnd',
						},
						forced: true,
						filter(event, player) {
							return player.storage.sgscq_moluanwu == true;
						},
						content() {
							'step 0'
							player.chooseTarget(2, get.prompt2('sgscq_moluanwu'), function (card, player, target) {
								if (ui.selected.targets.length == 1) {
									return true;
								}
								return target != player;
							}).set('ai', function (target) {
								if (ui.selected.targets.length == 1) {
									return 100 - get.attitude(player, target);
								}
								return -get.attitude(player, target);
							});
							'step 1'
							if (!result.bool) {
								event.finish();
							}
							else {
								var next = game.createEvent('sgscq_moluanwu', false);
								next.player = player;
								next.targets = result.targets;
								next.setContent(lib.skill.sgscq_moluanwu.content);
							}
						}
					}
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							if (ui.selected.targets.length == 0) {//用杀者
								return get.effect(target, { name: 'sha' }, ui.selected.targets[0], target);
							}
							else {//被杀者
								return -3;
								// return get.effect(target,{name:'sha'},ui.selected.targets[0],target);
							}
						}
					},
					expose: 0.4,//跳立场
					threaten: 2,//嘲讽值
				}
			},
			sgscq_moluanwux: {
				audio: 'sgscq_moluanwu',
				usable: 1,
				enable: 'phaseUse',
				selectTarget: 2,
				multitarget: true,
				targetprompt: ['被借刀', '出杀目标'],
				filterTarget(card, player, target) {
					if (ui.selected.targets.length == 1) {
						return true;
					}
					return target != player;
				},
				forced: true,
				content() {
					'step 0'
					player.line(targets[0], 'YB_demon');
					targets[0].line(targets[1], 'YB_demon');
					game.log(player, '对', targets[0], '发动了乱武,要求他对', targets[1], '使用一张杀,若不执行则失去一点体力.')
					targets[0].chooseToUse('对' + get.translation(targets[1]) + '使用一张杀,或失去一点体力', { name: 'sha' }, targets[1], -1).set('ai2', function () {
						return get.effect_use.apply(this, arguments) + 0.01;
					}).set('addCount', false);;
					"step 1"
					if (result.bool == false) {
						targets[0].loseHp();
					}
				},
				group: 'sgscq_moluanwux_2',
				subSkill: {
					2: {
						audio: 'sgscq_moluanwu',
						trigger: {
							player: 'damageEnd',
						},
						forced: true,
						//出牌阶段限一次,或当你受到伤害后.你可以令一名其他角色对你指定的令一名角色使用一张杀,若其不杀或不能杀,则其失去一点体力
						content() {
							'step 0'
							player.chooseTarget(2, get.prompt2('sgscq_moluanwux'), function (card, player, target) {
								setInterval(function () {
								}, 1000);
								if (!ui.selected.targets.length) return target != player;
								return true;
							}).set('ai', function (target) {
								if (ui.selected.targets.length == 1) {
									return 100 - get.attitude(player, target);
								}
								return -get.attitude(player, target);
							});
							'step 1'
							if (!result.bool) {
								event.finish();
							}
							else {
								var next = game.createEvent('sgscq_moluanwux', false);
								next.player = player;
								next.targets = result.targets;
								next.setContent(lib.skill.sgscq_moluanwux.content);
							}
						}
					}
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							if (ui.selected.targets.length == 0) {//用杀者
								return get.effect(target, { name: 'sha' }, ui.selected.targets[0], target);
							}
							else {//被杀者
								return -3;
								// return get.effect(target,{name:'sha'},ui.selected.targets[0],target);
							}
						}
					},
					expose: 0.4,//跳立场
					threaten: 2,//嘲讽值
				}
			},
			sgscq_weimu: {
				audio: 'ext:三国杀传奇/audio/character:1',
				mod: {
					targetEnabled(card) {
						if (get.type2(card) == 'trick' && get.color(card) == 'black') return false;
					},
				},
				trigger: { player: 'damageBegin4' },
				forced: true,
				filter(event, player) {
					return player == _status.currentPhase;
				},
				content() {
					trigger.cancel();
					var num = trigger.num;
					player.draw(2 * num);
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (target == _status.currentPhase && get.tag(card, 'damage')) return [0, 1];
						},
					},
				},
			},
			//---------------------
			//--------孙策
			//--------太史慈
			//-------------周瑜
			// 'sczs_yingzi':'英姿',
			// 'sczs_yingzi_info':'锁定技,摸牌阶段,你多摸一张牌;当你于回合内获得牌后,本回合你的手牌上限+1.',
			sczs_yingzi: {
				// audio:'ext:三国杀传奇/audio/character:1',
				audio: 'jacken_yingzi',
				trigger: {
					player: 'phaseDrawBegin2',
				},
				forced: true,
				preHidden: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					trigger.num++;
				},
				ai: {
					threaten: 1.5
				},
				mod: {
					maxHandcard(player, num) {
						if (player.storage.sczs_yingzi_mark) return num + player.storage.sczs_yingzi_mark;
						else return num;
					}
				},
				group: 'sczs_yingzi_add',
				subSkill: {
					add: {
						trigger: {
							player: 'gainBegin',
						},
						forced: true,
						silent: true,
						filter(event, player) {
							return _status.currentPhase == player;
						},
						forced: true,
						content() {
							player.addTempSkill('sczs_yingzi_mark');
							player.addMark('sczs_yingzi_mark', 1, false)
						}
					},
					mark: {
						mark: true,
						intro: {
							content: '本回合手牌上限+#'
						},
					},
				},
			},
			jacken_yingzi: {
				// audio:'ext:三国杀传奇/audio/character:1',
				audio: 'reyingzi',
				trigger: {
					player: 'phaseDiscardBegin',
				},
				forced: true,
				content() {
					player.addTempSkill('jacken_yingzi_showmark', 'phaseDiscardAfter');
				},
				group: ['jacken_yingzi_original', 'jacken_yingzi_count', 'jacken_yingzi_reset'],
				subSkill: {
					original: {
						audio: 'jacken_yingzi',
						trigger: {
							player: 'phaseDrawBegin2',
						},
						forced: true,
						filter(event, player) {
							return !event.numFixed;
						},
						content() {
							trigger.num++;
						},
					},
					reset: {
						trigger: {
							player: ['phaseBefore', 'phaseAfter'],
						},
						silent: true,
						_priority: 10,
						content() {
							player.removeGaintag('jacken_yingzi');
						},
						forced: true,
						popup: false,
					},
					count: {
						trigger: {
							player: 'gainBegin',
						},
						forced: true,
						silent: true,
						filter(event, player) {
							return _status.currentPhase == player;
						},
						content() {
							trigger.gaintag.add('jacken_yingzi');
						},
						popup: false,
					},
					showmark: {
						mod: {
							ignoredHandcard(card, player) {
								if (card.hasGaintag('jacken_yingzi')) {
									return true;
								}
							},
							cardDiscardable(card, player, name) {
								if (name == 'phaseDiscard' && card.hasGaintag('jacken_yingzi')) {
									return false;
								}
							},
						},
					},
				},
				onremove(player) {
					player.removeGaintag('jacken_yingzi');
				},
			},
			jacken_fanjan: {
				// audio:'ext:三国杀传奇/audio/character:2',
				audio: 'refanjian',
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('h');
				},
				content() {
					'step 0'
					var li = ['摸两张', '摸一张'];
					player.chooseControl(li).set('prompt', '请选择');
					'step 1'
					event.num = 2 - result.index;
					player.draw(event.num);
					player.chooseTarget(true, function (card, player, target) {
						return target != player;
					}).set('ai', function (target) {
						var player = _status.event.player;
						return get.damageEffect(target, player, player);
					});
					'step 2'
					event.target = result.targets[0];
					event.target.gainPlayerCard(player, 'h', true, event.num);
					'step 3'
					event.target.showCards(result.cards);
					var suit_list = [];
					for (var i = 0; i < result.cards.length; i++) {
						suit_list.add(result.cards[i].suit)
					}
					event.dataX = suit_list.length;
					var choiceList = ['令' + get.translation(event.target) + '失去' + get.cnNumber(event.dataX) + '点体力', '对' + get.translation(event.target) + '造成一点伤害,摸两张牌'];
					player.chooseControl(true).set('choiceList', choiceList);
					'step 4'
					if (result.index == 0) {
						event.target.loseHp(event.dataX);
					}
					else {
						event.target.damage(player);
						player.draw(2);
					}
				},
			},
			//--------大乔
			//'sczs_guose':'国色',
			// 'sczs_guose_info':'每轮限一次,当你失去一张牌后,你可以将此牌当【乐不思蜀】置入一名其他角色的判定区.',
			// 'sczs_liuli':'流离',
			// 'sczs_liuli_info':'每回合限一次,当你成为【杀】、【决斗】或【火攻】的目标时,你可以弃置一张牌,并将一张牌转移给你攻击范围内的另一名其他角色,若此牌未造成伤害,该角色对牌的使用者造成一点伤害.',
			sczs_guose: {
				audio: 'ext:三国杀传奇/audio/character:1',
				round: 1,
				filter(event, player) {
					return !player.hasSkill('sczs_guose_mark');
				},
				forced: true,
				trigger: {
					player: 'loseAfter',
				},
				content() {
					'step 0'
					player.chooseCardButton('选择一张当做乐不思蜀,置入其他角色判定区.', trigger.cards).set('ai', function (card) {
						// if(get.attitude(_status.event.player,trigger.player)>0) return false;
						return 6 - get.value(card);
					});
					'step 1'
					if (result.links?.length) {
						event.card = result.links;
						player.chooseTarget(1, true, function (card, player, target) {
							// return player.canUse('lebu',target);
							return target.canAddJudge({ name: 'lebu' }, [event.card]);
						}).set('ai', function (target) {
							return (get.attitude(_status.event.player, target) < 0)
						});
					}
					else {
						// player.getStat('triggerSkill').sczs_guose--;
						event.finish();
					}
					'step 2'
					if (result.targets?.length) {
						event.target = result.targets[0];
						var link = event.card;
						event.target.addJudge({ name: 'lebu' }, [link[0]]);
						player.addTempSkill('sczs_guose_mark', 'roundStart');
					}
				},
				subSkill: {
					mark: {
						mark: true,
						marktext: '色',
						intro: {
							content: '本轮已使用',
						}
					}
				},
			},
			sczs_liuli: {
				audio: 'ext:三国杀传奇/audio/character:2',
				usable: 1,
				trigger: { target: 'useCardToTarget' },
				forced: true,
				preHidden: true,
				filter(event, player) {
					if (event.card.name != 'sha' && event.card.name != 'juedou' && event.card.name != 'huogong') return false;
					if (player.countCards('he') == 0) return false;
					return game.hasPlayer(function (current) {
						return player.inRange(current) && current != event.player &&
							current != player && lib.filter.targetEnabled(event.card, event.player, current);
					});
				},
				content() {
					"step 0"
					var next = player.chooseCardTarget({
						position: 'he',
						filterCard: lib.filter.cardDiscardable,
						filterTarget(card, player, target) {
							var trigger = _status.event;
							if (player.inRange(target) && target != trigger.source) {
								if (lib.filter.targetEnabled(trigger.card, trigger.source, target)) return true;
							}
							return false;
						},
						ai1(card) {
							return get.unuseful(card) + 9;
						},
						ai2(target) {
							if (_status.event.player.countCards('h', 'shan')) {
								return -get.attitude(_status.event.player, target);
							}
							if (get.attitude(_status.event.player, target) < 5) {
								return 6 - get.attitude(_status.event.player, target);
							}
							if (_status.event.player.hp == 1 && player.countCards('h', 'shan') == 0) {
								return 10 - get.attitude(_status.event.player, target);
							}
							if (_status.event.player.hp == 2 && player.countCards('h', 'shan') == 0) {
								return 8 - get.attitude(_status.event.player, target);
							}
							return -1;
						},
						prompt: get.prompt('sczs_liuli'),
						prompt2: '弃置一张牌,将此牌转移给攻击范围内的一名其他角色',
						source: trigger.player,
						card: trigger.card,
					}).setHiddenSkill(event.name);
					"step 1"
					if (result.targets?.length) {
						var target = result.targets[0];
						player.discard(result.cards);
						var evt = trigger.parent;
						evt.triggeredTargets2.remove(player);
						evt.targets.remove(player);
						evt.targets.push(target);
						event.t1 = trigger.source;
						event.t2 = target;
					}
					else {
						player.getStat('triggerSkill').sczs_liuli--;
						event.finish();
					}
					"step 2"
					if (game.hasPlayer2(current => {
						return current.hasHistory('sourceDamage', evt => evt.cards && evt.cards[0] == trigger.card);
					})) {
						event.t1.damage(event.t2);
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (target.countCards('he') == 0) return;
							if (card.name != 'sha') return;
							var min = 1;
							var friend = get.attitude(player, target) > 0;
							var vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
							var players = game.filterPlayer();
							for (var i = 0; i < players.length; i++) {
								if (player != players[i] &&
									get.attitude(target, players[i]) < 0 &&
									target.canUse(card, players[i])) {
									if (!friend) return 0;
									if (get.effect(players[i], vcard, player, player) > 0) {
										if (!player.canUse(card, players[0])) {
											return [0, 0.1];
										}
										min = 0;
									}
								}
							}
							return min;
						}
					}
				}
			},
			//--------小乔
			// 'sgscq_tianxiang':'天香',
			// 'sgscq_tianxiang_info':'当你即将受到伤害时,你可以弃置一张♠️️牌防止之.
			// 你可①将此牌当【闪电】置入场上角色判定区;②或将此牌盖在牌堆顶,从牌堆底摸一张牌.',
			// 'sgscq_jiaoyan':'娇颜',
			// 'sgscq_jiaoyan_info':'锁定技,你的♥️️牌均视为♠️️.当场上有其他角色的♠️️牌因判定或弃置而进入弃牌堆时,你可以获得之.',
			sgscq_tianxiang: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: {
					player: "damageBegin4",
				},
				filter(event, player) {
					return player.countCards('he', function (card) {
						if (_status.connectMode && get.position(card) == 'he') return true;
						return card.suit == 'spade';
					}) > 0 && event.num > 0;
				},
				forced: true,
				async content(event, map) {
					let player = map.player, trigger = map.trigger;
					var result = await player.chooseCardTarget({
						filterCard(card, player) {
							return card.suit == 'spade' && lib.filter.cardDiscardable(card, player);
						},
						selectTarget: [0, 1],
						filterTarget(card, player, target) {
							return target.canAddJudge({ name: 'shandian' });
						},
						position: 'he',
						ai1(card) {
							return 10 - get.value(card);
						},
						ai2(target) {
							return false;
						},
						prompt: get.prompt('sgscq_tianxiang'),
						prompt2: lib.translate.sgscq_tianxiang_info
					});
					if (result.cards?.length) {
						trigger.cancel();
						let player = map.player, target = result.targets[0], card = result.cards[0];
						if (target && target.isIn()) await target.addJudge({ name: 'shandian' }, [card]);
						else {
							await player.lose(card, ui.cardPile, 'insert');
							game.log(player, '将', card, '盖在了牌堆顶.')
							await player.draw('bottom');
						}
					}
				},
			},
			sgscq_jiaoyan: {
				audio: 'ext:三国杀传奇/audio/character:1',
				mod: {
					suit(card, suit) {
						if (suit == 'heart') return 'spade';
					},
				},
				forced: true,
				group: ["sgscq_jiaoyan_discard", "sgscq_jiaoyan_judge"],
				subfrequent: ["judge"],
				subSkill: {
					discard: {
						audio: 'sgscq_jiaoyan',
						trigger: {
							global: "loseAfter",
						},
						filter(event, player) {
							if (event.type != 'discard' || event.getlx === false) return false;
							var cards = event.cards.slice(0);
							var evt = event.getl(player);
							if (evt && evt.cards) cards.removeArray(evt.cards);
							for (var i = 0; i < cards.length; i++) {
								if (cards[i].original != 'j' && cards[i].suit == 'spade' && get.position(cards[i], true) == 'd') {
									return true;
								}
							}
							return false;
						},
						forced: true,
						content() {
							"step 0"
							if (trigger.delay == false) game.delay();
							"step 1"
							var cards = [], cards2 = trigger.cards.slice(0), evt = trigger.getl(player);
							if (evt && evt.cards) cards2.removeArray(evt.cards);
							for (var i = 0; i < cards2.length; i++) {
								if (cards2[i].original != 'j' && cards2[i].suit == 'spade' && get.position(cards2[i], true) == 'd') {
									cards.push(cards2[i]);
								}
							}
							if (cards.length) {
								player.chooseButton(['娇颜:选择要获得的牌', cards], [1, cards.length]).set('ai', function (button) {
									return get.value(button.link, _status.event.player, 'raw');
								});
							}
							"step 2"
							if (result.links?.length) {
								player.gain(result.links, 'gain2', 'log');
							}
						},
					},
					judge: {
						audio: 'sgscq_jiaoyan',
						trigger: {
							global: "cardsDiscardAfter",
						},
						forced: true,
						filter(event, player) {
							var evt = event.parent.relatedEvent;
							if (!evt || evt.name != 'judge') return;
							if (evt.player == player) return false;
							if (get.position(event.cards[0], true) != 'd') return false;
							return (event.cards[0].suit == 'spade');
						},
						content() {
							"step 0"
							player.chooseButton(['娇颜:选择要获得的牌', trigger.cards], [1, trigger.cards.length]).set('ai', function (button) {
								return get.value(button.link, _status.event.player, 'raw');
							});
							"step 1"
							if (result.links?.length) {
								player.gain(result.links, 'gain2', 'log');
							}
						},
					},
				},
			},
			// 'sczs_tianxiang':'天香',
			// 'sczs_tianxiang_info':'每回合限一次,当你受到伤害时,你可以弃置一张牌,将此伤害转移给一名其他角色.若其手牌中有牌与弃置牌花色相同,其失去一点体力.',
			// 'sczs_hongyan':'红颜',
			// 'sczs_hongyan_info':'当你失去♥️️牌后,你可将此牌交给一名其他角色,该角色下个回合结束时,若此牌不在其区域内,你受到一点伤害.',
			//--------大小乔
			//-----------严白虎
			jili_yuan: {
				// audio:'ext:三国杀传奇/audio/character:2',
				audio: 'jili',
				trigger: {
					global: 'useCardToPlayer',
				},
				usable: 1,
				filter(event, player) {
					if (get.type(event.card) == 'equip') return false;
					return event.target.inRange(player) && event.player != player && !event.targets.includes(player);
				},
				check(event, player) {
					return get.effect(player, event.card, event.player, player) > 0;
				},
				content() {
					trigger.targets.push(player);
				},
			},
			zhidao_yuan: {
				// audio:'ext:三国杀传奇/audio/character:2',
				audio: 'zhidao',
				trigger: {
					player: 'phaseJieshuBegin',
				},
				filter(event, player) {
					return !player.getHistory('sourceDamage').length;
				},
				content() {
					'step 0'
					player.chooseTarget(get.prompt2('zhidao_yuan'), function (card, player, target) {
						return target != player;
					}).set('ai', function (target) {
						return get.damageEffect(target, player, player);
					});
					'step 1'
					var num = 0;
					if (result.targets[0].countCards('h')) num++;
					if (result.targets[0].countCards('e')) num++;
					if (result.targets[0].countCards('j')) num++;
					if (num > 0) {
						player.gainPlayerCard(result.targets[0], num, 'hej', true).set('filterButton', function (button) {
							for (var i = 0; i < ui.selected.buttons.length; i++) {
								if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
							}
							return true;
						});
					}
				},
			},
			zhidaox_yuan: {
				// audio:'ext:三国杀传奇/audio/character:2',
				audio: 'zhidao',
				trigger: {
					player: "phaseJieshuBegin",
				},
				filter(event, player) {
					return !player.getHistory('sourceDamage').length;
				},
				content() {
					"step 0"
					player.chooseTarget(get.prompt2('雉盗'), function (card, player, target) {
						return target != player;
					}).set('ai', function (target) {
						var player = _status.event.player;
						return get.damageEffect(target, player, player);
					});
					"step 1"
					result.targets[0].damage();
					var num = 0;
					if (result.targets[0].countCards('h')) num++;
					if (result.targets[0].countCards('e')) num++;
					if (result.targets[0].countCards('j')) num++;
					if (num > 0) {
						player.gainPlayerCard(result.targets[0], num, 'hej', true).set('filterButton', function (button) {
							for (var i = 0; i < ui.selected.buttons.length; i++) {
								if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
							}
							return true;
						});
					}
				},
			},
			//------------吴夫人
			//------------吴国太
			//------------孙尚香
			//------------侍女队长
			//------------于吉
			//------------凌统
			//-------------凌操
			// 'sgscq_dujin':'独进',
			// 'sgscq_dujin_info':'出牌阶段开始时或当你受到伤害后,你可以摸X张牌(X为你已损体力值且至少为一,至多为五),可以弃置Y张牌对当前回合角色造成一点伤害(Y为你至其的距离).',
			sgscq_dujin: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: {
					player: ['phaseUseBegin', 'damageEnd'],
				},
				async content(event, trigger, player) {
					var num = Math.min(5, Math.max(1, player.getDamagedHp()));
					player.draw(num);
					if (_status.currentPhase) {//QQQ
						if (get.distance(_status.currentPhase, player) <= 0) {
							const result = await player.chooseBool('是否对' + get.translation(_status.currentPhase) + '造成一点伤害')
								.set('ai', () => get.attitude(player, _status.currentPhase) < 0).forResult();
							if (result.bool) {
								game.playAudio('../extension/三国杀传奇/audio/character/sgscq_dujin_add1.mp3');
								_status.currentPhase.damage(1, player);
							}
						}
						else {
							var num2 = get.distance(_status.currentPhase, player);
							const result = await player.chooseToDiscard(num2, '是否弃置' + get.cnNumber(num2) + '张牌对' + get.translation(_status.currentPhase) + '造成一点伤害')
								.set('ai', function (card) {
									if (num2 > 3) return false;
									return -get.attitude(player, _status.currentPhase) - get.value(card);
								}).forResult();
							if (result.cards?.length) {
								game.playAudio('../extension/三国杀传奇/audio/character/sgscq_dujin_add1.mp3');
								_status.currentPhase.damage(1, player);
							}
						}
					}
				},
				mark: true,
				intro: {
					content: '出牌阶段开始时或当你受到伤害后,你可以摸X张牌(X为你已损体力值且至少为一,至多为五),可以弃置Y张牌对当前回合角色造成一点伤害(Y为你至其的距离)..'
				},
			},
			//-------------步练师
			//--------------大虎
			//-------------小虎
			//------------陆逊
			//------------陆绩
			//------------朱治
			//------------软妹袁姬
			//------------大圣孙坚
			//------------陆延
			//-------------------------------魔貂蝉
			sgscq_molijian: {
				audio: 'ext:三国杀传奇/audio/character:2',
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return game.countPlayer(function (current) {
						return current != player;
					}) > 1;
				},
				check(card) { return 10 - get.value(card) },
				filterCard: true,
				position: 'he',
				filterTarget(card, player, target) {
					if (player == target) return false;
					return true;
				},
				targetprompt: ['A', 'B'],
				selectTarget: 2,
				multitarget: true,
				content() {
					'step 0'
					targets[1].damage(targets[0]);
					'step 1'
					player.chooseToDiscard('he').set('prompt', '是否再弃置一张牌,令B对A造成一点伤害？').set('ai', function (card) {
						var att = get.attitude(player, targets[0]);
						var eff = get.damageEffect(targets[0], targets[1]);
						if ((att * eff) > 0) return 10 - get.value(card);
						return false;
					});
					'step 2'
					if (result.bool) {
						targets[0].damage(targets[1]);
					}
				},
				ai: {
					order: 8,
					result: {
						target(player, target) {
							if (ui.selected.targets.length == 0) {
								return get.damageEffect(target, ui.selected.targets[0]);
							}
							else {
								if (get.attitude(player, target) < 0) return get.damageEffect(target, player);
								return 0;
							}
						}
					},
					expose: 0.4,//跳立场
					threaten: 3,//嘲讽值
				}
			},
			sgscq_mobiyue: {
				// inherit:'yb001_wanyue',
				audio: 'ext:三国杀传奇/audio/character:1',
				trigger: {
					player: 'phaseJieshuBegin',
				},
				forced: true,
				content() {
					'step 0'
					var suits = [];
					var hs = player.getCards('h');
					for (var i = 0; i < hs.length; i++) {
						suits.add(hs[i].suit);
					}
					player.removeAdditionalSkill('sgscq_mobiyue');
					var num = 4 - suits.length;
					if (num < 1) {
						num = 1;
					}
					player.draw(num);
				},
			},
			//-------------贾诩,
			//--------------神曹操
			//-------------神吕布
			//------------曹昂
			//-------------典韦
			sczs_qiangxi: {
				audio: 'ext:三国杀传奇/audio/character:2',
				enable: 'phaseUse',
				usable: 1,
				filterCard(card) {
					return get.type(card) == 'equip';
				},
				selectCard: [0, 1],
				filterTarget(card, player, target) {
					if (player == target) return false;
					return player.inRange(target);
				},
				discard: false,
				losecard: false,
				content() {
					"step 0"
					if (cards.length == 0) {
						player.loseHp();
					}
					else {
						player.addToExpansion(cards, player, 'giveAuto').gaintag.add('sczs_qiangxi');
						var name = cards[0].name;
						var info = lib.card[name].skills;
						if (info && info.length) player.addAdditionalSkill('sczs_qiangxi', info, true);
						if (Array.isArray(info)) {
							for (var i of info) {
								var infox = lib.skill[i];
								if (!infox.audioname2) infox.audioname2 = {};
								if (!infox.audioname2.sgscq_dianwei) infox.audioname2.sgscq_dianwei = 'sczs_qiangxi_add';
							}
						}//QQQ
					}
					"step 1"
					target.damage('nocard');
				},
				check(card) {
					return 10 - get.value(card);
				},
				intro: {
					markcount: 'expansion',
					mark(dialog, storage, player) {
						dialog.addSmall(player.getExpansions('sczs_qiangxi'));
					},
					onunmark(storage, player) {
						player.removeAdditionalSkill('sczs_qiangxi');
					},
				},
				position: 'he',
				ai: {
					damage: true,
					order: 8,
					result: {
						player(player, target) {
							if (ui.selected.cards.length) return 0;
							if (player.hp >= target.hp) return -0.9;
							if (player.hp <= 2) return -10;
							return -2;
						},
						target(player, target) {
							if (!ui.selected.cards.length) {
								if (player.hp < 2) return 0;
								if (player.hp == 2 && target.hp >= 2) return 0;
								if (target.hp > player.hp) return 0;
							}
							return get.damageEffect(target, player);
						}
					},
					threaten: 1.3,
				},
				subSkill: {
					add: {
						audio: 'ext:三国杀传奇/audio/character:1',
					}
				}
			},
			//------------胡车儿
			//------------高顺
			//------------陈宫
			//-------------曹洪
			//------------卞皇后
			//---------------糜竺
			//--------------孙乾
			//--------------------张辽
			sczs_tuxi: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: { player: 'phaseDrawBegin1' },
				forced: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					"step 0"
					var check;
					var i, num = game.countPlayer(function (current) {
						return current != player && current.countCards('h') && get.attitude(player, current) <= 0;
					});
					check = (num >= 2);
					player.chooseTarget(get.prompt('sczs_tuxi'), '获得其他一至两名角色的各一张手牌', [1, 2], function (card, player, target) {
						return target.countCards('h') > 0 && player != target;
					}, function (target) {
						if (!_status.event.aicheck) return 0;
						var att = get.attitude(_status.event.player, target);
						if (target.hasSkill('tuntian')) return att / 10;
						return 1 - att;
					}).set('aicheck', check);
					"step 1"
					if (result.targets?.length) {
						player.gainMultiple(result.targets);
						trigger.changeToZero();
					}
					else {
						event.finish();
					}
					"step 2"
					"step 3"
					{
						player.chooseTarget('是否对一名目标角色造成1点伤害', true, function (card, player, target) {
							return _status.event.targets.includes(target);
						}).set('targets', result.targets).set('ai', function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					}
					// else event.finish();
					"step 4"
					if (result.targets?.length) {
						player.line(result.targets[0], 'thunder');
						result.targets[0].damage();
					}
				},
				ai: {
					threaten: 2,
					expose: 0.3
				}
			},
			sczs_tuxix: {
				audio: 'sczs_tuxi',
				trigger: { player: 'phaseDrawBegin1' },
				forced: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					"step 0"
					var check;
					var i, num = game.countPlayer(function (current) {
						return current != player && current.countCards('he') && get.attitude(player, current) <= 0;
					});
					check = (num >= 2);
					player.chooseTarget(get.prompt('sczs_tuxix'), '获得其他一至两名角色的各一张手牌', [1, 2], function (card, player, target) {
						return target.countCards('he') > 0 && player != target;
					}, function (target) {
						if (!_status.event.aicheck) return 0;
						var att = get.attitude(_status.event.player, target);
						if (target.hasSkill('tuntian')) return att / 10;
						return 1 - att;
					}).set('aicheck', check);
					"step 1"
					if (result.targets?.length) {
						player.gainMultiple(result.targets);
						trigger.changeToZero();
					}
					else {
						event.finish();
					}
					"step 2"
					"step 3"
					{
						player.chooseTarget('是否对一名目标角色造成1点伤害', function (card, player, target) {
							return _status.event.targets.includes(target);
						}).set('targets', result.targets).set('ai', function (target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						});
					}
					// else event.finish();
					"step 4"
					if (result.targets?.length) {
						player.line(result.targets[0], 'thunder');
						result.targets[0].damage();
					}
				},
				ai: {
					threaten: 2,
					expose: 0.3
				}
			},
			//-------------吕玲绮
			//-------------陈登,陈珪(三传没有)
			//--------------sp袁绍
			//--------------曹操
			//--------------郭图
			//----------------田丰
			//----------沮授
			jianying_yuan: {
				// audio:'ext:三国杀传奇/audio/character:2',
				audio: 'jianying',
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + player.countMark('jianying_yuan');
					},
					aiOrder(player, card, num) {
						if (typeof card == 'object' && player.isPhaseUsing()) {
							var evt = player.getLastUsed();
							if (evt && evt.card && (evt.card.suit && evt.card.suit == card.suit || evt.card.number && evt.card.number == card.number)) {
								return num + 10;
							}
						}
					},
				},
				init(player) {
					player.addMark('jianying_yuan');
				},
				group: ['jianying_yuan_on', 'jianying_yuan_1'],
				marktext: '渐',
				intro: {
					name: '渐营',
					content: '当前标记数为#',
				},
				forced: true,
				content() {
					if (player.countMark('jianying_yuan') < 2) player.addMark('jianying_yuan', 2);
					else {
						if (player.countMark('jianying_yuan') < 3) player.addMark('jianying_yuan');
					}
				},
				subSkill: {
					'1': {
						audio: 'jianying_yuan',
						trigger: {
							player: 'useCard',
						},
						filter(event, player) {
							if (player != _status.currentPhase) return false;
							if (player.countMark('jianying_yuan') > 2) return false;
							var evt = player.getLastUsed(1);
							if (!evt || !evt.card) return false;
							var evt2 = evt.getParent('phaseUse');
							if (!evt2 || evt2.name != 'phaseUse' || evt2.player != player) return false;
							return evt.card.suit != 'none' && evt.card.suit == event.card.suit || typeof evt.card.number == 'number' && evt.card.number == event.card.number;
						},
						forced: true,
						_priority: 2,
						content() {
							'step 0'
							player.addMark('jianying_yuan');
							'step 1'
						},
					},
					on: {
						audio: 'jianying_yuan',
						trigger: {
							player: 'useCard',
						},
						filter(event, player) {
							if (player != _status.currentPhase) return false;
							return player.countMark('jianying_yuan');
						},
						'prompt2': '当你于回合内使用牌时,可以弃置一枚<渐>并摸一张牌',
						_priority: 1,
						content() {
							'step 0'
							player.removeMark('jianying_yuan');
							player.draw();
							'step 1'
						},
					},
				},
			},
			shibei_yuan: {
				// audio:'ext:三国杀传奇/audio/character:2',
				audio: 'shibei',
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return player.countMark('jianying_yuan');
				},
				forced: true,
				usable: 1,
				content() {
					player.removeMark('jianying_yuan');
					player.recover();
					player.draw();
				},
			},
			//--------------郭嘉
			//--------------颜良
			//--------------文丑
			//--------------颜良文丑
			//-----------------张郃
			sgscq_shenqiaobian: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: {
					player: ['phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore'],
				},
				preHidden: true,
				forced: true,
				content() {
					'step 0'
					var str = '弃置一张牌并跳过';
					if (event.triggername == 'phaseJudgeBefore') {
						event.ybqiaobian = 1;
						str += '<span style=\'color: #e1ff00\'>判定阶段</span>？';
						if (player.countCards('j') == 0) {
							str += '<br>不出意外的话,你可以二选一:<br>①获得至多两名其他角色各一张手牌;<br>②移动场上一张牌.';
						}
					}
					if (event.triggername == 'phaseDrawBefore') {
						event.ybqiaobian = 2;
						str += '<span style=\'color: #e1ff00\'>摸牌阶段</span>？';
						str += '<br>不出意外的话,你可以获得至多两名其他角色各一张手牌.';
					}
					if (event.triggername == 'phaseUseBefore') {
						event.ybqiaobian = 3;
						str += '<span style=\'color: #e1ff00\'>出牌阶段</span>？';
						str += '<br>不出意外的话,你可以移动场上一张牌.';
					}
					if (event.triggername == 'phaseDiscardBefore') {
						event.ybqiaobian = 4;
						str += '<span style=\'color: #e1ff00\'>弃牌阶段</span>？';
						if (player.countCards('h') <= (player.getHandcardLimit() + 1)) {
							event.ybqiaobian_d = 1;
							str += '<br>不出意外的话,你可以摸一张牌.';
						}
					}
					var next = player.chooseToDiscard('he', get.prompt('sgscq_shenqiaobian'), str);
					next.set('ai', function (card) {
						if (event.ybqiaobian == 1) {
							if (!get.YB_tuxivalue(player)) {
								if (!get.YB_movevalue(player)) return 0;
							}
							return 7 - get.value(card);
						}
						if (event.ybqiaobian == 2) {
							if (!get.YB_tuxivalue(player)) {
								return 0;
							}
							return 7 - get.value(card);
						}
						if (event.ybqiaobian == 3) {
							if (!get.YB_movevalue(player)) {
								return 0;
							}
							return 7 - get.value(card);
						}
						if (event.ybqiaobian == 4) {
							if (!event.ybqiaobian_d) {
								return 100 - get.value(card);
							}
							return 6 - get.value(card);
						}
					})
					next.setHiddenSkill('sgscq_shenqiaobian');
					'step 1'
					if (result.bool) {
						trigger.cancel();
					}
				},
				group: ['sgscq_shenqiaobian_1', 'sgscq_shenqiaobian_2', 'sgscq_shenqiaobian_3', 'sgscq_shenqiaobian_4'],
				subSkill: {
					1: {
						audio: 'sgscq_shenqiaobian',
						trigger: { player: ['phaseJudgeSkipped', 'phaseJudgeCancelled'] },
						filter(event, player) {
							return player.countCards('j') == 0;
						},
						forced: true,
						prompt: '是否二选一:<br>①获得至多两名其他角色各一张手牌;<br>②移动场上一张牌.',
						content() {
							'step 0'
							var list = [];
							list.push('偷牌');
							if (player.canMoveCard(true)) list.push('移牌');
							list.push('cancel2');
							player.chooseControl(list).set('prompt', '是否二选一:<br>①获得至多两名其他角色各一张手牌;<br>②移动场上一张牌.').set('ai', function (control) {
								if (!get.YB_tuxivalue(player)) {
									if (!get.YB_movevalue(player)) return 'cancel2';
									return '移牌';
								}
								return '偷牌';
							});
							'step 1'
							if (result.control == 'cancel2') {
								event.finish();
							}
							if (result.control == '偷牌') {
								var next = game.createEvent('sgscq_shenqiaobian_2');
								next.player = player;
								next.step = 1;
								next.setContent(lib.skill.sgscq_shenqiaobian_2.content);
								event.finish();
							}
							if (result.control == '移牌') {
								var next = game.createEvent('sgscq_shenqiaobian_3');
								next.player = player;
								next.step = 1;
								next.setContent(lib.skill.sgscq_shenqiaobian_3.content);
								event.finish();
							}
						}
					},
					2: {
						audio: 'sgscq_shenqiaobian',
						trigger: { player: ['phaseDrawSkipped', 'phaseDrawCancelled'] },
						forced: true,
						content() {
							'step 0'
							'step 1'
							player.chooseTarget([1, 2], '获得至多两名角色各一张手牌', function (card, player, target) {
								return target != player && target.countCards('h');
							}).set('ai', function (target) {
								return -get.attitude(_status.event.player, target);
							})
							'step 2'
							if (result.targets?.length) {
								result.targets.sortBySeat();
								player.line(result.targets, 'green');
								event.targets = result.targets;
								if (!event.targets.length) event.finish();
							}
							else {
								event.finish();
							}
							'step 3'
							player.gainMultiple(event.targets);
							'step 4'
						}
					},
					3: {
						audio: 'sgscq_shenqiaobian',
						trigger: { player: ['phaseUseSkipped', 'phaseUseCancelled'] },
						forced: true,
						content() {
							'step 0'
							'step 1'
							player.moveCard();
						},
					},
					4: {
						audio: 'sgscq_shenqiaobian',
						trigger: { player: ['phaseDiscardSkipped', 'phaseDiscardCancelled'] },
						filter(event, player) {
							return player.countCards('h') <= player.getHandcardLimit();
						},
						forced: true,
						content() {
							player.draw();
						}
					},
				}
			},
			//---------------周仓
			//----------------关平
			//--------------朱灵
			//--------------李通
			//--------------刘表
			//--------------伊籍
			//---------------卧龙诸葛
			//--------------黄月英,
			//-----------神赵云
			jacken_longhun: {
				// audio:'ext:蜀2:false',
				audio: 'ext:三国杀传奇/audio/character:2',
				enable: ['chooseToUse', 'chooseToRespond'],
				filter(event, player) {
					lib.skill.jacken_longhun.attribute.cards = lib.inpile.reduce((result, name) => {
						if (event.filterCard && event.filterCard({ name }, player, event)) {
							if (!player.storage.cannot_use_unbasic_to_basic && player.countCards('he', function (card) {
								return get.type(card) != 'basic';
							}) >= 1) {
								if (name == 'sha') return result.concat([['基本', '', 'sha']]).concat(lib.inpile_nature.map(nature => ['基本', '', 'sha', nature]));
								else if (get.type(name) == 'basic') return result.concat([['基本', '', name]])
							}
							if (!player.storage.cannot_use_basic_to_trick && player.countCards('he', function (card) {
								return get.type(card) == 'basic';
							}) >= 2) {
								if (get.type(name) == 'trick') return result.concat([['锦囊', '', name]])
							}
						}
						return result
					}, new Array);
				},
				hiddenCard(player, _card) {
					if (!player.countCards('hes') > 0) return 0;
					if (get.type(_card) == 'trick' && player.storage.cannot_use_basic_to_trick) return 0;
					if (get.type(_card) == 'trick' && player.countCards('he', function (card) {
						return get.type(card) == 'basic';
					}) < 2) return 0;
					if (get.type2(_card) == 'basic' && player.storage.cannot_use_unbasic_to_basic) return 0;
					if (get.type2(_card) == 'basic' && player.countCards('he', function (card) {
						return get.type2(card) != 'basic';
					}) < 1) return 0;
					return 1;
				},
				content() {
					event.finish()
				},
				intro: {
					content(_storage, player) {
						var s1 = '本回合'
						if (player.storage.cannot_use_unbasic_to_basic) {
							var s2 = '已使用';
						}
						else {
							var s2 = '未使用'
						}
						if (player.storage.cannot_use_basic_to_trick) {
							var s3 = '已使用'
						}
						else {
							var s3 = '未使用'
						}
						return s1 + s2 + '非基本牌转化基本牌,' + s3 + '基本牌转化普通锦囊牌.'
					},
				},
				group: ['jacken_longhun_draw', 'jacken_longhun_flash', 'jacken_longhun_init', 'jacken_longhun_single', 'jacken_longhun_multi'],
				attribute: {
					cards: [['基本', '', 'jiu'], ['基本', '', 'sha'], ['基本', '', 'sha', 'fire'], ['基本', '', 'sha', 'thunder'], ['锦囊', '', 'guohe'], ['锦囊', '', 'huogong'], ['锦囊', '', 'jiedao'], ['锦囊', '', 'juedou'], ['锦囊', '', 'nanman'], ['锦囊', '', 'shunshou'], ['锦囊', '', 'taoyuan'], ['锦囊', '', 'tiesuo'], ['锦囊', '', 'wanjian'], ['锦囊', '', 'wugu'], ['锦囊', '', 'wuzhong']],
				},
				subSkill: {
					draw: {
						trigger: {
							player: ['loseAfter'],
						},
						_priority: 10,
						forced: true,
						popup: false,
						filter(event, player) {
							var u = event.parent;
							if (u.name == 'useCard' || u.name == 'respond') {
								return u.skill == 'jacken_longhun_single' || u.skill == 'jacken_longhun_multi_backup';
							}
						},
						content() {
							if (get.type(trigger.parent.card) == 'basic')
								player.storage.cannot_use_unbasic_to_basic = 1;
							else
								player.storage.cannot_use_basic_to_trick = 1;
							player.draw();
						},
					},
					flash: {
						trigger: {
							player: ['loseAfter', 'gainAfter'],
						},
						_priority: 15,
						silent: true,
						content() {
							lib.skill.jacken_longhun.attribute.cards = lib.inpile.reduce((result, name) => {
								if (player) {
									if (!player.storage.cannot_use_unbasic_to_basic && player.countCards('he', function (card) {
										return get.type(card) != 'basic';
									}) >= 1) {
										if (name == 'sha') return result.concat([['基本', '', 'sha']]).concat(lib.inpile_nature.map(nature => ['基本', '', 'sha', nature]));
										else if (get.type(name) == 'basic') return result.concat([['基本', '', name]])
									}
									if (!player.storage.cannot_use_basic_to_trick && player.countCards('he', function (card) {
										return get.type(card) == 'basic';
									}) >= 2) {
										if (get.type(name) == 'trick') return result.concat([['锦囊', '', name]])
									}
								}
								return result
							}, new Array);
						},
						forced: true,
						popup: false,
					},
					init: {
						trigger: {
							global: 'phaseBegin',
						},
						silent: true,
						content() {
							player.storage.cannot_use_unbasic_to_basic = 0;
							player.storage.cannot_use_basic_to_trick = 0;
							player.markSkill('jacken_longhun');
						},
						forced: true,
						popup: false,
					},
					single: {
						audio: 'jacken_longhun',
						enable: ['chooseToUse', 'chooseToRespond'],
						sourceSkill: 'jacken_longhun',
						filter(event, player) {
							return lib.skill.jacken_longhun.attribute.cards.length == 1;
						},
						onrespond() {
							if (get.type(lib.skill.jacken_longhun.attribute.cards[0][2]) == 'basic') {
								_status.event.player.storage.cannot_use_unbasic_to_basic = 1;
							}
							if (get.type(lib.skill.jacken_longhun.attribute.cards[0][2]) == 'trick') {
								_status.event.player.storage.cannot_use_basic_to_trick = 1;
							}
						},
						onuse(result, player) {
							if (get.type(lib.skill.jacken_longhun.attribute.cards[0][2]) == 'basic') {
								player.storage.cannot_use_unbasic_to_basic = 1;
							}
							if (get.type(lib.skill.jacken_longhun.attribute.cards[0][2]) == 'trick') {
								player.storage.cannot_use_basic_to_trick = 1;
							}
						},
						viewAs: () => ({ name: lib.skill.jacken_longhun.attribute.cards[0][2] }),
						viewAsFilter: () => lib.skill.jacken_longhun.attribute.cards.length == 1,
						popname: true,
						filterCard(card, player) {
							var temp_name = lib.skill.jacken_longhun.attribute.cards[0][2]
							if (get.type(temp_name) == 'basic') {
								return get.type(card) != 'basic';
							}
							else {
								return get.type(card) == 'basic';
							}
						},
						selectCard() {
							var temp_name = lib.skill.jacken_longhun.attribute.cards[0][2]
							if (get.type(temp_name) == 'basic') {
								return 1;
							}
							else {
								return 2;
							}
						},
						hiddenCard(_player, name) {
							if (lib.skill.jacken_longhun.attribute.cards.length == 0) {
								return 0;
							}
							return lib.skill.jacken_longhun.attribute.cards[0][2] == name
						},
						position: 'he',
						prompt() {
							var links = lib.skill.jacken_longhun.attribute.cards;
							var s1 = get.type2(links[0][2]) == 'trick' ? get.cnNumber(2) : get.cnNumber(1);
							var s2 = get.type2(links[0][2]) == 'trick' ? '基本' : '非基本';
							var s3 = get.translation(links[0][3]) || '';
							var s4 = get.translation(links[0][2]);//不用var？这么离谱的定义变量方式,叉出去!!!
							return '将' + s1 + '张' + s2 + '牌当做' + s3 + s4 + '使用或打出';
						},
					},
					multi: {
						audio: 'ansory_selftest_translate',
						enable: ['chooseToUse', 'chooseToRespond'],
						sourceSkill: 'jacken_longhun',
						filter(event, player) {
							return lib.skill.jacken_longhun.attribute.cards.length > 1;
						},
						chooseButton: {
							dialog: (_event, _player) => ui.create.dialog('转化', [lib.skill.jacken_longhun.attribute.cards, 'vcard']),
							filter: (button, player) => _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent),
							backup: (links, player) => ({
								audio: /* 'ansory_selftest_translate' */ false,
								filterCard(card, player) {
									if (get.type(links[0][2]) == 'basic') {
										return get.type(card) != 'basic';
									}
									else {
										return get.type(card) == 'basic';
									}
								},
								selectCard() {
									var temp_name = links[0][2];
									if (get.type(temp_name) == 'basic') {
										return 1;
									}
									else {
										return 2;
									}
								},
								popname: true,
								check: (card) => 6 - get.value(card),
								position: 'hes',
								viewAs: {
									name: links[0][2],
									nature: links[0][3]
								},
								onuse(result, player) {
									if (get.type(result.card) == 'basic') {
										player.storage.cannot_use_unbasic_to_basic = 1;
									}
									if (get.type(result.card) != 'basic') {
										player.storage.cannot_use_basic_to_trick = 1;
									}
								},
							}),
							prompt(links, _player) {
								var s1 = get.type(links[0][2]) == 'trick' ? get.cnNumber(2) : get.cnNumber(1);
								var s2 = get.type(links[0][2]) == 'trick' ? '基本' : '非基本';
								var s3 = get.translation(links[0][3]) || '';
								var s4 = get.translation(links[0][2]);
								return '将' + s1 + '张' + s2 + '牌当做' + s3 + s4 + '使用或打出';
							},
						},
						hiddenCard: (_player, name) => lib.skill.jacken_longhun.attribute.cards.some(item => item[2] == name),
					},
				},
			},
			jacken_zhanjiang: {
				mod: {
					maxHandcard(player, num) {
						return 2 + num;
					},
				},
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				group: ['jacken_zhanjiang_fangju'],
				forced: true,
				filter(event, player) {
					return (event.name != 'phase' || game.phaseNumber == 0);
				},
				content() {
					player.disableJudge();
					player.disableEquip('equip1');
					player.disableEquip('equip2');
					player.disableEquip('equip3');
					player.disableEquip('equip4');
					player.disableEquip('equip5');
				},
				subSkill: {
					fangju: {
						trigger: {
							player: 'useCardToPlayered',
						},
						filter(event, player) {
							return event.card.name == 'sha';
						},
						forced: true,
						logTarget: 'target',
						content() {
							trigger.target.addTempSkill('jacken_zhanjiang_fangju2');
							trigger.target.storage.jacken_zhanjiang_fangju2.add(trigger.card);
							trigger.target.markSkill('jacken_zhanjiang_fangju2');
						},
						ai: {
							unequip: true,
							skillTagFilter(player, tag, arg) {
								if (arg && arg.name == 'sha') return true;
								return false;
							},
						},
					},
					'fangju2': {
						firstDo: true,
						ai: {
							'unequip2': true,
						},
						init(player, skill) {
							if (!player.storage[skill]) player.storage[skill] = [];
						},
						trigger: {
							player: ['damage', 'damageCancelled', 'damageZero'],
							source: ['damage', 'damageCancelled', 'damageZero'],
							target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
							global: ['useCardEnd'],
						},
						charlotte: true,
						filter(event, player) {
							return player.storage.jacken_zhanjiang_fangju2 && event.card && player.storage.jacken_zhanjiang_fangju2.includes(event.card) && (event.name != 'damage' || event.notLink());
						},
						silent: true,
						forced: true,
						popup: false,
						_priority: 12,
						content() {
							player.storage.jacken_zhanjiang_fangju2.remove(trigger.card);
							if (!player.storage.jacken_zhanjiang_fangju2.length) player.removeSkill('jacken_zhanjiang_fangju2');
						},
						marktext: '※',
						intro: {
							content: '当前防具技能已失效',
						},
					},
				},
			},
			jacken_juejing: {
				trigger: {
					player: 'phaseUseBegin',
				},
				init(player) {
					player.storage.have_additional_phaseUse = 0;
					player.storage_juejingMax = 0;
					player.storage.dis = 0;
				},
				forced: true,
				filter(event, player) {
					var max = game.countPlayer() < 7 ? game.countPlayer() : 7;
					return player.storage_juejingMax <= max;
				},
				content() {
					'step 0'
					player.judge(function (result) {
						if (result.suit != player.storage.record_last_suit) return 2;
						return -1;
					}).judge2 = function (result) {
						return result.bool;
					};
					'step 1'
					player.storage.record_last_suit = result.suit;
					player.storage.dis++;
					if (result.bool) {
						player.draw(2);
						player.storage.have_additional_phaseUse = 1;
						player.storage_juejingMax++;
					}
					else {
						player.storage.have_additional_phaseUse = 0;
					}
					player.markSkill('jacken_juejing');
				},
				intro: {
					content(_storage, player) {
						var suit = player.storage.record_last_suit;
						var max = game.countPlayer() < 7 ? game.countPlayer() : 7;
						if (player.storage.have_additional_phaseUse && player.storage_juejingMax <= max) {
							var s1 = '可'
						}
						else {
							var s1 = '不可'
						}
						return '当前距离-' + player.storage.dis + ',本次判定花色为' + get.translation(suit) + ',' + s1 + '进行下一个额外出牌阶段.';
					},
				},
				group: ['jacken_juejing_dis', 'jacken_juejing_addition', 'jacken_juejing_init'],
				subSkill: {
					dis: {
						mod: {
							globalFrom(from, to, distance) {
								return distance - from.storage.dis;
							},
						},
					},
					addition: {
						trigger: {
							player: 'phaseUseAfter',
						},
						forced: true,
						content() {
							var max = game.countPlayer() < 7 ? game.countPlayer() : 7;
							if (player.storage.have_additional_phaseUse == 1 && player.storage_juejingMax <= max) {
								game.updateRoundNumber();
								var next = player.phaseUse();
								event.next.remove(next);
								trigger.next.push(next);
							}
						},
					},
					init: {
						trigger: {
							player: 'phaseEnd',
						},
						silent: true,
						content() {
							player.unmarkSkill('jacken_juejing');
							player.storage.have_additional_phaseUse = 0;
							player.storage.record_last_suit = 0;
							player.storage_juejingMax = 0;
							player.storage.dis = 0;
						},
						forced: true,
						popup: false,
					},
				},
			},
			//------------夏侯恩
			//------------甘夫人
			//------------糜夫人
			//------------徐庶
			//------------简雍
			//-------------魔夏侯惇
			sgscq_moganglie: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: { player: 'damageEnd' },
				filter(event, player) {
					return event.num > 0;
				},
				content() {
					player.addMark('sgscq_moganglie', trigger.num);
				},
				forced: true,
				mark: true,
				marktext: '勇',
				intro: {
					content: 'mark',
				},
				group: ['sgscq_moganglie_damage', 'sgscq_moganglie_luoyi'],
				subSkill: {
					damage: {
						forced: true,
						audio: 'sgscq_moganglie',
						trigger: { player: 'phaseUseBegin' },
						filter(event, player) {
							if (player.hp <= 0) return false;
							return true;
						},
						content() {
							'step 0'
							var num = [];
							for (var i = 0; i < player.hp; i++) {
								num.push(i + 1);
							}
							var str = '请选择失去任意点体力值,获得等量<勇>标记.'
							player.YB_control(num, 10, str).set('ai', function (control) {
								// if(player.hp-3>0) return player.hp-3;
								// if(player.hp-3>0) return 1;
								if (player.hp <= 2) return 'cancel2';
								if (player.countMark('sgscq_moganglie') <= 1) return 1 - player.countMark('sgscq_moganglie');
								return 'cancel2';
							});
							'step 1'
							if (!result.control || result.control == 'cancel2') {
								event.finish();
							}
							else {
								player.loseHp(result.control);
								player.addMark('sgscq_moganglie', result.control);
							}
						},
					},
					luoyi: {
						audio: 'sgscq_moganglie',
						trigger: { source: 'damageBegin2' },
						filter(event, player) {
							return player.countMark('sgscq_moganglie') > 0;
						},
						forced: true,
						// check:function(event,player){
						// 	var att=get.attitude(player,event.target);
						// 	if(att<0) return true;
						// },
						// prompt2:'是否发动激愤,移去一枚<勇>,回复一点体力,并使此伤害+1？',
						content() {
							player.removeMark('sgscq_moganglie');
							player.recover();
							trigger.num++;
						},
					},
				}
			},
			//-------------(芽间月英)
			//--------------甄姬
			//---------------曹丕
			//--------------曹植
			jacken_luoying: {
				audio: 'ext:三国杀传奇/audio/character:2',
				// audio:'reluoying',
				trigger: {
					global: 'damageEnd',
				},
				forced: true,
				filter(event, player) {
					var e = event;
					var evt = event;
					while (e.name != 'game') {
						e = e.parent;
						if (e.name == 'useCard') {
							evt = e;
							break;
						}
					}
					if (e.name == 'game') {
						return 0;
					}
					if (get.itemtype(event.cards) != 'cards') return 0;
					if (get.tag(event.card, 'damage') && (event.source == player || event.player == player)) {
						if (event.source == player && event.player == player) {
							player.storage.ly_twice = 2;
						}
						else {
							if (evt.player == player && event.player == player) {
								player.storage.ly_twice = 2;
							}
							else {
								player.storage.ly_twice = 1;
							}
						}
						player.storage.record_suit = evt.card.suit;
						return 1;
					}
				},
				content() {
					'step 0'
					if (player.storage.luoying_rewrite) {
						var rdm = Math.random();
						if (rdm > 0.5) {
							var card = get.cardPile(function (card) {
								return card.suit != player.storage.record_suit && (get.type(card) != 'basic');
							});
							if (!card) {
								var card = get.discardPile(function (card) {
									return card.name != player.storage.record_suit && (get.type(card) != 'basic');
								});
							}
						}
						else {
							var card = get.discardPile(function (card) {
								return card.name != player.storage.record_suit && (get.type(card) != 'basic');
							});
							if (!card) {
								var card = get.cardPile(function (card) {
									return card.suit != player.storage.record_suit && (get.type(card) != 'basic');
								});
							}
						}
					}
					else {
						var card = get.discardPile(function (card) {
							return card.name != player.storage.record_suit && (get.type(card) != 'basic');
						});
					}
					player.gain(card, 'gain2', 'draw');
					player.update();
					'step 1'
					if (player.storage.ly_twice == 2) {
						player.storage.ly_twice--;
						event.goto(0);
					}
				},
				group: ['jacken_luoying_aim', 'jacken_luoying_rewrite'],
				subSkill: {
					aim: {
						audio: 'jacken_luoying',
						trigger: {
							player: 'useCard',
						},
						forced: true,
						filter(event, player) {
							return player.storage.luoying_rewrite && get.color(event.card) == 'black';
						},
						logTarget: 'target',
						content() {
							'step 0'
							trigger.nowuxie = true;
							trigger.directHit.addArray(game.players);
						},
					},
					rewrite: {
					},
				},
			},
			jacken_jiushi: {
				audio: 'ext:三国杀传奇/audio/character:1',
				// audio:'rejiushi',
				trigger: {
					player: 'dying',
				},
				_priority: 10,
				filter(event, player) {
					return !(player.hp > 0);
				},
				derivation: 'jacken_luoying_rewrite',
				content() {
					player.gainMaxHp();
					player.recover(3 - player.hp);
					player.storage.luoying_rewrite = true;
					player.draw(3);
					player.update();
					player.awakenSkill('jacken_jiushi');
				},
			},
			//-------------李典
			//----------------荀攸
			//--------------程昱
			sczs_shefu: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: { global: 'roundStart' },
				// forced:true,
				forced: true,
				content() {
					'step 0'
					player.unmarkSkill('sczs_shefu');
					delete player.storage.sczs_shefu;
					player.removeSkill('sczs_shefu_buff');
					player.chooseTarget(1).set('ai', function (target) {
						return 1 - get.attitude(player, target);
					});
					'step 1'
					if (result.targets?.length) {
						player.storage.sczs_shefu = result.targets[0];
						event.type = [];
						event.list = {};
						var listk = [];
						var listn = [];
						for (var i of lib.inpile) {
							if (event[get.type2(i)] != true) {
								event.type.add(get.translation(get.type2(i)));
								var n = get.type2(i);
								event.list[n] = get.type2(i);
								listn.add(n);
								listk.add([n, get.translation(get.type2(i))]);
								event[n] = true;
							}
						};
						var dialog = ui.create.dialog('<font size=6><b>设伏</b></font>', 'forcebutton', 'hidden');
						dialog.add('选择一种类型,当其下次使用此类型牌时,无效此牌.<br>你对其造成一点伤害,摸两张牌,结束当前阶段.');
						dialog.add([listk, 'tdnodes']);
						var chooseButton = player.chooseButton(dialog, 1, true);
						chooseButton.set('ai', function (button) {
							if (button.link != 'trick' && button.link != 'basic' && button.link != 'equip') return false;
						});
					}
					else event.finish();
					'step 2'
					if (result.links?.length) {
						event.lists = result.links;
						event.types = get.YB_map(event.lists, event.list);
						player.addTempSkill('sczs_shefu_buff', 'roundStart');
						player.storage.sczs_shefu_buff = event.types[0];
						player.markSkill('sczs_shefu');
					}
				},
				intro: {
					// markcount:'expansion',
					mark(dialog, content, player) {
						if (player == game.me || player.isUnderControl()) {
							return '你预言' + get.translation(player.storage.sczs_shefu.name) + '将会使用' + get.translation(player.storage.sczs_shefu_buff) + '牌.';
						}
						else {
							return '设下了埋伏.';
						}
					},
					content(content, player) {
						return '设下了埋伏.';
					}
				},
				derivation: 'sczs_shefu_buff',
				// group:['sczs_shefu_buff'],
				subSkill: {
					buff: {
						forced: true,
						trigger: { global: 'useCard' },
						audio: 'ext:三国杀传奇/audio/character:1',
						filter(event, player) {
							if (!player.storage.sczs_shefu) return false;
							// game.log(player.storage.sczs_shefu)
							if (event.player != player.storage.sczs_shefu) return false;
							// game.log(event.player)
							if (!player.storage.sczs_shefu_buff) return false;
							// game.log(player.storage.sczs_shefu_buff)
							if (get.type2(event.card) != player.storage.sczs_shefu_buff) return false;
							// game.log(event.card)
							return true;
						},
						content() {
							player.removeSkill('sczs_shefu_buff');
							player.line(trigger.player, 'thunder');
							trigger.cancel();
							trigger.player.damage(player);
							player.draw(2);
							// var evt=_status.event.getParent('phaseUse');
							// if(evt&&evt.name=='phaseUse'&&trigger.player.isPhaseUsing()){
							// evt.skipped=true;
							// event.finish();
							// }
							// //朝拾要求的,不截断阶段了
							player.unmarkSkill('sczs_shefu');
						},
					}
				}
			},
			//------------戏志才
			//---------------乐进
			jacken_xiaogo: {
				// audio:"ext:lejin:2",
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: {
					global: ["useCard", "respond"],
				},
				usable: 1,
				check: () => 1,
				filter(event, player) {
					return get.type(event.card, false) == 'basic';
				},
				content() {
					'step 0'
					player.draw();
					var str = get.translation(trigger.player);
					var list = ['依次重铸你区域内的两张牌',
						'弃置' + str + '一张牌', '交给' + str + '一张牌'];
					player.chooseControl().set('choiceList', list).set('prompt', '骁果:清选择一项').set('ai', () => 1);
					'step 1'
					if (result.index == 0) {
						if (player.countCards('hej') > 0) {
							player.discardPlayerCard(player, 'hej', true).set('prompt', '骁果:重铸一张牌');
						}
						else {
							event.finish();
						}
					}
					if (result.index == 1) {
						player.discardPlayerCard(trigger.player, 'hej', true);
						event.finish();
					}
					if (result.index == 2) {
						event.index = 2;
						player.chooseCard('选择一张牌交给' + get.translation(trigger.player), 'he', true);
					}
					'step 2'
					if (event.index == 2) {
						trigger.player.gain(result.cards, player, 'giveAuto');
						event.finish();
					}
					else {
						player.draw();
					}
					'step 3'
					if (player.countCards('hej') > 0) {
						player.discardPlayerCard(player, 'hej', true).set('prompt', '骁果:重铸一张牌');
					}
					else {
						event.finish();
					}
					'step 4'
					if (result.bool) {
						player.draw();
					}
				},
			},
			//--------------辛宪英
			// 'sgscq_zhongjian':'忠鉴',
			// 'sgscq_zhongjian_info':'出牌阶段限两次,你可以展示一张手牌,展示一名其他角色的一张手牌,若两张牌花色:相同且此分支本回合未触发过,你对其造成一点火焰伤害,不同且此分支本回合未触发过,你获得对方展示的牌.',
			// 'sgscq_caishi':'才识',
			// 'sgscq_caishi_info':'锁定技,你展示过的牌不计入手牌上限;当你失去一张展示过的牌时,你回复一点体力,重置忠鉴.',
			sgscq_zhongjian: {
				audio: 'ext:三国杀传奇/audio/character:2',
				reset(player) {
					player.storage.sgscq_zhongjian = [];
					game.log(player, '重置了忠鉴');
				},
				init(player) {
					lib.skill.sgscq_zhongjian.reset(player);
				},
				enable: 'phaseUse',
				filter(event, player) {
					return player.countCards('h') > 0 && (!player.storage.sgscq_zhongjian || player.storage.sgscq_zhongjian.length < 2);
				},
				filterCard(card) {
					return true;
				},
				selectCard: 1,
				filterTarget(card, player, target) {
					if (player == target) return false;
					return target.countCards('h') > 0;
				},
				discard: false,
				losecard: false,
				lose: false,
				position: 'h',
				content() {
					'step 0'
					player.showCards(cards);
					player.choosePlayerCard(target, true, 'h');
					'step 1'
					event.cardt = result.cards[0];
					target.showCards(event.cardt);
					if (!player.storage.sgscq_zhongjian) player.storage.sgscq_zhongjian = [];
					var num = get.YB_suit([cards, event.cardt]).length;
					player.storage.sgscq_zhongjian.push(num);
					player.addTempSkill('sgscq_zhongjian_add')
					'step 2'
					var list = player.storage.sgscq_zhongjian;
					if (list.length) {
						if (list.length == 2 && list[0] == list[1]) event.finish();
						else {
							if (list[list.length - 1] == '1') {
								target.damage('fire');
							}
							else {
								player.gain(event.cardt, 'gain2');
							}
						}
					}
				},
				check(card) {
					var player = _status.event.player;
					if (player.hasUseTarget(card)) return player.getUseValue(card);
					return 6 - get.value(card);
				},
				ai: {
					order: 10,
					result: {
						player(player, target) {
							return 1;
						},
						target(player, target) {
							return -1.5;
						},
					},
				},
				subSkill: {
					add: {
						onremove(player) {
							lib.skill.sgscq_zhongjian.reset(player);
						}
					}
				}
			},
			sgscq_caishi: {
				audio: 'ext:三国杀传奇/audio/character:1',
				forced: true,
				trigger: {
					player: ['loseAfter'],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				filter(event, player, name) {
					var evt = event.getl(player);
					if (!evt || !evt.cards2 || !evt.cards2.length) return false;
					if (event.name == 'lose') {
						for (var i in event.gaintag_map) {
							if (event.gaintag_map[i].includes('sgscq_caishi_tag')) return true;
						}
						return false;
					}
					return player.hasHistory('lose', function (evt) {
						if (event != evt.parent) return false;
						for (var i in evt.gaintag_map) {
							if (evt.gaintag_map[i].includes('sgscq_caishi_tag')) return true;
						}
						return false;
					});
				},
				content() {
					var num1 = 0;
					var evt = trigger.getl(player);
					if (!evt || !evt.cards2 || !evt.cards2.length) return;
					if (trigger.name == 'lose') {
						for (var i in trigger.gaintag_map) {
							if (trigger.gaintag_map[i].includes('sgscq_caishi_tag')) num1++;
						}
					}
					else {
						player.hasHistory('lose', function (evt) {
							if (trigger != evt.parent) return false;
							for (var i in evt.gaintag_map) {
								if (evt.gaintag_map[i].includes('sgscq_caishi_tag')) num1++;
							}
						});
					}
					// var num=(num1||1)
					player.recover(num1);
					// lib.skill.sgscq_zhongjian.reset(player);
				},
				group: 'sgscq_caishi_record',
				subSkill: {
					record: {
						mark: true,
						marktext: '識',
						intro: {
							markcount(storage, player) {
								return player.countCards('h', card => card.hasGaintag('sgscq_caishi_tag'));
							},
							mark(dialog, content, player) {
								var cards = player.getCards('h', card => card.hasGaintag('sgscq_caishi_tag'));
								if (cards.length) {
									dialog.addAuto(cards);
								}
								else return '无展示牌';
							},
						},
						mod: {
							// aiValue:function(player,card,num){
							// 	if(get.itemtype(card)=='card'&&card.hasGaintag('sgscq_caishi_tag')) return num+10;
							// },
							aiUseful(player, card, num) {
								if (get.itemtype(card) == 'card' && card.hasGaintag('sgscq_caishi_tag')) return num + 10;
							},
							ignoredHandcard(card, player) {
								if (card.hasGaintag('sgscq_caishi_tag')) return true;
							},
							cardDiscardable(card, player, name) {
								if (name == 'phaseDiscard' && card.hasGaintag('sgscq_caishi_tag')) return false;
							},
						},
						trigger: { player: 'showCardsEnd' },
						forced: true,
						charlotte: true,
						popup: false,
						firstDo: true,
						content() {
							game.broadcastAll(function (cards) {
								cards.forEach(card => card.addGaintag('sgscq_caishi_tag'));
							}, trigger.cards);
						}
					},
				}
			},
			sgscq_caishix: {
				audio: 'sgscq_caishi',
				forced: true,
				trigger: {
					player: ['loseAfter'],
					global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
				},
				filter(event, player, name) {
					var evt = event.getl(player);
					if (!evt || !evt.cards2 || !evt.cards2.length) return false;
					if (event.name == 'lose') {
						for (var i in event.gaintag_map) {
							if (event.gaintag_map[i].includes('sgscq_caishi_tag')) return !player.countCards('h', function (card) {
								return card.hasGaintag('sgscq_caishi_tag')
							});
						}
						return false;
					}
					return player.hasHistory('lose', function (evt) {
						if (event != evt.parent) return false;
						for (var i in evt.gaintag_map) {
							if (evt.gaintag_map[i].includes('sgscq_caishi_tag')) return true;
						}
						return false;
					}) && !player.countCards('h', function (card) {
						return card.hasGaintag('sgscq_caishi_tag')
					});
				},
				content() {
					player.recover();
					lib.skill.sgscq_zhongjian.reset(player);
				},
				group: 'sgscq_caishi_record',
			},
			//---------------采樵夏侯氏
			//----------------夏侯惇
			//----------------于禁
			//-----------------徐晃
			//-------------------左慈
			//----------------卑弥呼
			//----------------伏皇后
			//------------------伏完
			//-----------------魏蔡文姬
			//-----------------孙权
			//-----------------神周瑜
			// sgscq_qinyin:'琴音',
			// sgscq_qinyin_info:'每回合限一次,当你一次性失去至少两张牌时,你可以令全场各回复一点体力或失去一点体力.',
			// sgscq_guqu:'顾曲',
			// sgscq_guqu_info:'结阵技,场上角色摸牌阶段即将摸牌时,你可以弃置至多两张手牌,令其多摸或少摸等量牌,该角色每满足以下一项,你摸一张牌:你的手牌数为0,该角色与你同阵列且你为阵眼.',
			// sgscq_guqux:'顾曲',
			// sgscq_guqux_info:'结阵技,场上角色摸牌阶段即将摸牌时,你可以观看其即将摸的牌,将其中至多两张弃置,你选择等量手牌,视为其本次摸得,该角色每满足以下一项,你摸一张牌:你的手牌数为0,该角色与你同阵列且你为阵眼.',
			sgscq_qinyin: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: {
					player: ['loseAfter'],
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				filter(event, player) {
					var evt = event.getl(player);
					return evt && (evt.cards2.length > 1);
				},
				forced: true,
				//上半部分摘自OL界凌统
				//下半部分摘自本体神周瑜
				content() {
					"step 0"
					event.forceDie = true;
					if (typeof event.count != 'number') {
						// event.count=trigger.cards.length-1;
						event.count = 1;
					}
					var recover = 0, lose = 0, players = game.filterPlayer();
					for (var i = 0; i < players.length; i++) {
						if (players[i].hp < players[i].maxHp) {
							if (get.attitude(player, players[i]) > 0) {
								if (players[i].hp < 2) {
									lose--;
									recover += 0.5;
								}
								lose--;
								recover++;
							}
							else if (get.attitude(player, players[i]) < 0) {
								if (players[i].hp < 2) {
									lose++;
									recover -= 0.5;
								}
								lose++;
								recover--;
							}
						}
						else {
							if (get.attitude(player, players[i]) > 0) {
								lose--;
							}
							else if (get.attitude(player, players[i]) < 0) {
								lose++;
							}
						}
					}
					var prompt = get.prompt('sgscq_qinyin') + '(剩余' + get.cnNumber(event.count) + '次)';
					player.chooseControl('失去体力', '回复体力', 'cancel2',
						ui.create.dialog(get.prompt('sgscq_qinyin'), 'hidden')).ai = function () {
							if (lose > recover && lose > 0) return 0;
							if (lose < recover && recover > 0) return 1;
							return 2;
						}
					"step 1"
					if (result.control == 'cancel2') {
						event.finish();
					}
					else {
						event.bool = (result.control == '回复体力');
						event.num = 0;
						event.players = game.filterPlayer();
					}
					"step 2"
					if (event.num < event.players.length) {
						var target = event.players[event.num];
						if (event.bool) {
							target.recover();
						}
						else {
							target.loseHp();
						}
						event.num++;
						event.redo();
					}
					"step 3"
					if (event.count > 1) {
						event.count--;
						event.goto(0);
					}
				},
				ai: {
					expose: 0.1,
					threaten: 2
				}
			},
			sgscq_guqu: {
				audio: 'ext:三国杀传奇/audio/character:1',
				group: ['YBSL_jiezhen'],
				trigger: {
					global: 'drawBefore',
				},
				filter(event, player) {
					return event.num > 0 && player.hasCard(card => lib.filter.cardDiscardable(card, player), 'h') && event.parent.name == 'phaseDraw';
				},
				forced: true,
				content() {
					'step 0'
					event.listk = player.getCards('h', card => lib.filter.cardDiscardable(card, player));
					event.str = ['令其多摸牌', '令其少摸牌'];
					var dialog = ui.create.dialog('<font size=6><b>顾曲</b></font>', 'forcebutton', 'hidden');
					dialog.add('选择令其多摸还是少摸牌.');
					dialog.add([event.str, 'tdnodes']);
					dialog.add('选择要弃的牌,数量决定其即将执行的数值.');
					dialog.add([event.listk, 'vcard']);
					var chooseButton = player.chooseButton(dialog, [1, 3]);
					chooseButton.set('filterButton', function (button) {
						var but1 = 0, but2 = 0, but3 = null;
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							if (event.str.includes(ui.selected.buttons[i].link)) {
								but1++;
								but3 = ui.selected.buttons[i].link;
							}
							else {
								but2++;
							}
						}
						if (but3 != null && event.str.includes(button.link)) return false;//已选第一格,第一格不能再选
						if (but2 == 2 && event.listk.includes(button.link)) return false;//第二格已选俩,第二格不能再选
						if (but3 == '令其少摸牌' && but2 >= Math.min(2, trigger.num) && event.listk.includes(button.link)) return false;//第一格已选少摸,第二格选择数不能大于其额定摸牌数
						if (but2 > Math.min(2, trigger.num) && button.link == '令其少摸牌') return false;//第二格选择数大于其额定摸牌数,第一格不能选少摸
						return true
					});
					chooseButton.set('filterOk', function () {
						var but1 = 0, but2 = 0;
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							if (event.str.includes(ui.selected.buttons[i].link)) but1++;
							else but2++;
						}
						return but1 == 1 && but2 > 0;
					})
					chooseButton.set('ai', function (button) {
						var att = get.attitude(_status.event.player, trigger.player);
						if (att < 0 && button.link == '令其多摸牌') return false;
						if (att > 0 && button.link == '令其少摸牌') return false;
						if (att == 0) return false;
						if (event.listk.includes(button.link)) return 10 - get.value(button.link);
					});
					'step 1'
					var control, cards = [];
					if (result.links?.length) {
						for (var i of result.links) {
							if (event.str.includes(i)) control = i;
							else cards.push(i);
						}
						player.discard(cards);
						if (control == '令其少摸牌') trigger.num -= cards.length;
						else trigger.num += cards.length;
						if (trigger.num <= 0) trigger.finish();
					}
					else event.finish();
					'step 2'
					if (!player.countCards('h')) player.draw();
					'step 3'
					if (get.YB_zhenlie(player, trigger.player) == true && get.YB_zhenyan(player) == true) player.draw();
				}
			},
			sgscq_guqux: {
				audio: 'sgscq_guqu',
				group: ['YBSL_jiezhen'],
				trigger: {
					global: 'gainBefore',
				},
				filter(event, player) {
					var evt = event.getParent('phaseDraw');
					return event.cards && event.cards.length && player.countCards('h') && event.parent.name == 'draw' && evt && evt.name == 'phaseDraw';
				},
				forced: true,
				content() {
					'step 0'
					event.listk = player.getCards('h', card => lib.filter.cardDiscardable(card, player));
					event.str = trigger.cards;
					var dialog = ui.create.dialog('<font size=6><b>顾曲</b></font>', 'forcebutton', 'hidden');
					dialog.add(get.translation(trigger.player) + '即将要摸的牌.');
					dialog.add([event.str, 'vcard']);
					dialog.add('选择等量张你要偷梁换柱的牌.');
					dialog.add([event.listk, 'vcard']);
					var chooseButton = player.chooseButton(dialog, [2, 4]);
					chooseButton.set('filterButton', function (button) {
						var but1 = 0, but2 = 0;
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							if (event.str.includes(ui.selected.buttons[i].link)) but1++;
							else but2++;
						}
						if (but1 >= 2) {
							if (event.str.includes(button.link)) return false;
						}
						if (but2 >= 2) {
							if (event.listk.includes(button.link)) return false;
						}
						// if(but1!=but2)
						return true
					});
					chooseButton.set('filterOk', function () {
						var but1 = 0, but2 = 0;
						for (var i = 0; i < ui.selected.buttons.length; i++) {
							if (event.str.includes(ui.selected.buttons[i].link)) but1++;
							else but2++;
						}
						return but1 == but2;
					})
					chooseButton.set('ai', function (button) {
						var att = get.attitude(_status.event.player, trigger.player);
						if (att == 0) return false;
						if (att < 0) {
							if (event.str.includes(button.link)) return get.value(button.link);
							if (event.listk.includes(button.link)) return 6 - get.value(button.link);
						}
						if (att > 0) {
							if (event.str.includes(button.link)) return 6 - get.value(button.link);
							if (event.listk.includes(button.link)) return get.value(button.link);
						}
					});
					event.cards2 = trigger.cards;
					'step 1'
					var control = [], cards = event.cards2;
					if (result.links?.length) {
						if (this.trigger.player != player) player.line(trigger.player, 'fire')
						for (var i of result.links) {
							if (event.str.includes(i)) {
								control.push(i);
								cards.remove(i);
							}
							else {
								cards.push(i);
							}
						}
						trigger.player.discard(control);
						trigger.cards = cards;
					}
					else event.finish();
					'step 2'
					if (!player.countCards('h')) player.draw();
					'step 3'
					if (get.YB_zhenlie(player, trigger.player) == true && get.YB_zhenyan(player) == true) player.draw();
				}
			},
			//-----------------学妹小乔
			//----------------赤壁黄盖
			sczs_kuroul: {
				audio: 'sczs_kurou',
				usable: 1,
				trigger: {
					global: 'damageBegin2',
				},
				forced: true,
				filter(event, player) {
					if (event.player == player) return false;
					return true;
				},
				content() {
					'step 0'
					var list = [];
					list.push('是');
					list.push('cancel2');
					event.tar = trigger.player;
					player.chooseControl(list).set('prompt', get.translation(trigger.player) + '即将受到伤害,是否获得' + get.translation(trigger.player) + '的两张牌,将此伤害转移给自己？').set('ai', function () {
						var attitude = get.attitude(player, trigger.player);
						if (attitude >= 0) return 0;
						if (attitude < 0) {
							if (player.hp > 2) return 2;
							return 1;
						}
					});
					'step 1'
					if (result.control == '是') {
						player.gainPlayerCard(true, trigger.player, 2, 'he');
						trigger.player = player;
					}
					else {
						player.getStat('triggerSkill').sczs_kurou--;
						event.finish();
					}
				},
			},
			sczs_kurou: {
				audio: 'ext:三国杀传奇/audio/character:2',
				// audio:'kurou',
				usable: 1,
				trigger: {
					global: 'damageBegin2',
				},
				forced: true,
				filter(event, player) {
					if (event.source == player) return false;
					return true;
				},
				content() {
					'step 0'
					var list = [];
					list.push('是');
					list.push('cancel2');
					event.tar = trigger.source;
					player.chooseControl(list).set('prompt', get.translation(trigger.player) + '即将受到伤害,是否获得' + get.translation(trigger.source) + '的一张牌,将此伤害转移给自己？').set('ai', function () {
						var attitude = get.attitude(player, trigger.player);
						if (attitude >= 0) return 0;
						if (attitude < 0) {
							if (player.hp > 2) return 2;
							return 1;
						}
					});
					'step 1'
					if (result.control == '是') {
						player.gainPlayerCard(true, trigger.source, 1, 'he');
						trigger.player = player;
					}
					else {
						player.getStat('triggerSkill').sczs_kurou--;
						event.finish();
					}
				},
			},
			//----------新苦肉--------结阵
			sczs_kuroux: {
				audio: 'sczs_kurou',
				// usable:1,
				trigger: {
					global: 'damageBegin2',
				},
				forced: true,
				filter(event, player) {
					if (event.source == player) return false;
					if (get.YB_zhenlie(player, event.player) == true) return true;
					return !player.hasSkill('sczs_kuroux_mark');
				},
				content() {
					'step 0'
					var list = [];
					list.push('是');
					list.push('cancel2');
					event.tar = trigger.source;
					if (get.YB_zhenlie(player, event.player) != true) player.addTempSkill('sczs_kuroux_mark');
					player.chooseControl(list).set('prompt', get.translation(trigger.player) + '即将受到伤害,是否获得' + get.translation(trigger.source) + '的一张牌,将此伤害转移给自己？').set('ai', function () {
						var attitude = get.attitude(player, trigger.player);
						if (attitude >= 0) return 0;
						if (attitude < 0) {
							if (player.hp > 2) return 2;
							return 1;
						}
					});
					'step 1'
					if (result.control == '是') {
						player.gainPlayerCard(true, trigger.source, 1, 'he');
						trigger.player = player;
					}
					else {
						player.getStat('triggerSkill').sczs_kurou--;
						event.finish();
					}
				},
				group: ['YBSL_jiezhen'],
				subSkill: {
					mark: {
					}
				}
			},
			sczs_zhaxiang: {
				audio: 'ext:三国杀传奇/audio/character:1',
				// audio:'zhaxiang',
				limited: true,
				trigger: {
					player: 'damageEnd',
				},
				check(event, player) {
					var num = game.countPlayer(function (current) { return get.attitude(player, current) < 0 && current.isLinked() });
					var num2 = player.getAllHistory('damage').length + 2;
					return num2 >= num && num2 >= 2 && num == game.countPlayer(function (current) { return get.attitude(player, current) < 0 && current.isLinked() });
				},
				content() {
					'step 0'
					player.awakenSkill('sczs_zhaxiang');
					player.link(true);
					'step 1'
					var num = player.getAllHistory('damage').length + 2;
					if (num > 0) player.chooseTarget([1, num], function (target) {
						return target != player;
					}).set('ai', function (target) {
						return 1 - get.attitude(player, target);
					});
					'step 2'
					if (result.targets?.length) for (var i of result.targets) {
						i.link(true);
					}
					'step 3'
					event.targets = game.filterPlayer(function (current) {
						return current.isLinked();
					});
					'step 4'
					for (var i of event.targets) {
						i.damage('fire', player, 'nocard');
					}
				},
				ai: {
					order: 1,
					fireAttack: true,
				}
			},
			//----------新诈降
			sczs_zhaxiangx: {
				audio: 'sczs_zhaxiang',
				limited: true,
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				check(event, player) {
					var num = game.countPlayer(function (current) { return get.attitude(player, current) < 0 && current.isLinked() });
					// var num2=player.getAllHistory('damage').length+2;
					var num2 = player.getDamagedHp();
					return num2 >= num && num2 >= 2 && num == game.countPlayer(function (current) { return get.attitude(player, current) < 0 && current.isLinked() });
				},
				content() {
					'step 0'
					player.awakenSkill('sczs_zhaxiang');
					player.link(true);
					'step 1'
					// var num=player.getAllHistory('damage').length+2;
					var num = player.getDamagedHp();
					if (num > 0) player.chooseTarget([1, num], function (target) {
						return target != player;
					}).set('ai', function (target) {
						return 1 - get.attitude(player, target);
					});
					'step 2'
					if (result.targets?.length) for (var i of result.targets) {
						i.link(true);
					}
					'step 3'
					event.targets = game.filterPlayer(function (current) {
						return current.isLinked();
					});
					'step 4'
					for (var i of event.targets) {
						i.damage('fire', player, 'nocard');
					}
				},
				ai: {
					order: 1,
					fireAttack: true,
				}
			},
			//------------------魏武帝
			//----------------界关羽
			//------------------甘宁
			//------------------枪骑凌统
			//-------------------张昭
			//-------------------张纮
			//-------------------鲁肃
			//--------------------蔡瑁
			//------------------张允
			//-------------------蒋干
			//--------------------庞统
			//--------------------吕蒙
			//---------------------荀彧
			//-----------------诸葛瑾
			//---------------------周泰
			//------------------刘封
			//------------------黄忠
			//-------------------魏延
			//-----------------法正
			//-------------------严颜
			sczs_juzhan: {
				audio: 'ext:三国杀传奇/audio/character:2',
				init(player, skill) {
					player.storage.sczs_juzhan = true;
				},
				zhuanhuanji: true,
				mark: true,
				marktext: '☯',
				intro: {
					content(storage, player, skill) {
						if (player.storage.sczs_juzhan == true) {
							return '转换技,<span class="bluetext">阳:你使用牌时,获得目标角色一张牌</span>;阴:你成为牌的目标后,摸一张牌.若此牌为【杀】,则本回合你与其不能对对方使用牌.';
						}
						return '转换技,阳:你使用牌时,获得目标角色一张牌;<span class="bluetext">阴:你成为牌的目标后,摸一张牌</span>.若此牌为【杀】,则本回合你与其不能对对方使用牌.';
					},
				},
				trigger: {
					player: ['useCard'],
					target: 'useCardToTargeted',
				},
				filter(event, player, name) {
					if (player.storage.sczs_juzhan == true) {
						return name == 'useCard' && event.targets.length;
					}
					else return name == 'useCardToTargeted';
				},
				forced: true,
				//转换技,阳:你使用牌时,获得目标角色一张牌;阴:你成为牌的目标后,摸一张牌.若此牌为【杀】,则本回合你与其不能对对方使用牌
				async content(event, trigger, player) {//QQQ
					if (event.triggername == 'useCard') {
						const result = await player.chooseTarget(1, '请选择一名目标角色的一张牌？',
							(card, player, target) => trigger.targets.includes(target) && target.countCards('he'))
							.set('ai', (target) => -get.attitude(player, target)).forResult();
						if (result.targets?.length) {
							const result1 = await player.gainPlayerCard(result.targets[0], 'he', true).forResult();
							if (result1 && result1.cards && result1.cards[0]) {
								player.changeZhuanhuanji('sczs_juzhan');
								if (trigger.card.name == 'sha') {
									player.line(result.targets[0], 'fire');
									player.addTempSkill('sczs_juzhan_buff');
									result.targets[0].addTempSkill('sczs_juzhan_buff');
								}
							}
						}
					}
					else {
						const result = await player.chooseBool('是否摸一张牌？').forResult();
						if (result.bool) {
							player.draw();
							player.changeZhuanhuanji('sczs_juzhan');
							if (trigger.card.name == 'sha') {
								player.line(trigger.player, 'fire');
								player.addTempSkill('sczs_juzhan_buff');
								trigger.player.addTempSkill('sczs_juzhan_buff');
							}
						}
					}
				},
				subSkill: {
					buff: {
						character: true,
						mark: true,
						marktext: '拒',
						intro: {
							content: '本回合不能使用牌指定$为目标',
						},
						mod: {
							targetEnabled(card, player, target) {
								if (player.hasSkill('sczs_juzhan_buff') && player.storage.sczs_juzhan_buff && player.storage.sczs_juzhan_buff.includes(target)) return false;
							},
						},
					}
				},
			},
			//----------------孟达
			//---------------吴兰
			//---------------夏侯渊
			//-----------------曹仁
			//-----------------马良
			sczs_xiemu: {
				// audio:'ext:三国杀传奇/audio/character:2',
				audio: 'xiemu',
				enable: 'phaseUse',
				usable: 1,
				selectCard: [1],
				filterCard: true,
				selectTarget: [1, 2],
				check(card) {
					return 8 - get.value(card);
				},
				filterTarget(card, player, target) {
					if (player == target) return false;
					if (target.hasMark('sczs_xiemu_mark')) return false;
					for (var i = 0; i < ui.selected.targets.length; i++) {
						if (ui.selected.targets[i].group == target.group) return false;
					}
					return true;
				},
				position: 'he',
				content() {
					'step 0'
					for (var i of targets) {
						i.addMark('sczs_xiemu_mark');
					}
				},
				group: 'sczs_xiemu_mark',
				subSkill: {
					mark: {
						forced: true,
						charlotte: true,
						mark: true,
						intro: {
							content: '三传协穆',
						},
					},
				},
				ai: {
					order: 8.5,
					result: {
						target(player, target) {
							return get.damageEffect(target, player);
						},
					},
				},
			},
			sczs_naman: {
				// audio:'ext:三国杀传奇/audio/character:2',
				audio: 'naman',
				trigger: {
					global: ['useCard', 'respond'],
				},
				filter(event, player) {
					if (event.all_excluded || event.player == player || !event.player.hasMark('sczs_xiemu_mark')) return false;
					return true;
				},
				forced: true,
				content() {
					'step 0'
					var list = ['是', 'cancel2'];
					player.chooseControl(list).set('prompt', '是否移除其<穆>标记令此牌无效？<br>你获得此牌,并摸一张牌或弃其一张牌.').set('ai', function () {
						var attitude = get.attitude(player, trigger.player);
						if (attitude < 0) return 0;
						if (attitude >= 0) {
							return 2;
						}
					});
					'step 1'
					if (result.control == '是') {
						trigger.player.removeSkill('sczs_xiemu_mark');
						trigger.cancel();
						event.goto(2);
					}
					else {
						event.finish();
					}
					'step 2'
					if (trigger.cards) player.gain(trigger.cards, 'gain2');
					'step 3'
					var list2 = ['摸一', '弃其一'];
					if (trigger.player.countCards('hej') < 1) list2.remove('弃其一');
					player.chooseControl(list2).set('prompt2', '摸一张牌或弃置其一张牌');
					//不写ai会默认选第一个选项,其实就是我懒——夜白留
					'step 4'
					if (result.control == '摸一') player.draw();
					if (result.control == '弃其一') player.discardPlayerCard('hej', trigger.player, true);
				},
			},
			//---------------蜀孙尚香
			//----------------电玩侍女
			//-------------虞翻
			//--------------夏侯氏
			sgscq_yanyu: {
				audio: 'ext:三国杀传奇/audio/character:1',
				trigger: { global: 'phaseUseBefore' },
				// filter:function(event,player){
				// 	return player.countCards('he')>0;
				// },
				// direct:true,
				content() {
					'step 0'
					player.draw(1);
					'step 1'
					if (player.countCards('he') > 0) {
						player.chooseCard(1, true).set('prompt', get.prompt2('sgscq_yanyu')).set('ai', function (card) {
							return 6 - get.value(card);
						});
					}
					else event.finish();
					'step 2'
					if (result.cards?.length) {
						player.addToExpansion(result.cards, player).gaintag.add('sgscq_yanyu_mark');
						game.log(player, '将一张牌盖在了武将牌上.')
					}
				},
				_priority: 999,
				group: ['sgscq_yanyu_mark', 'sgscq_yanyu_use', 'sgscq_yanyu_use2', 'sgscq_yanyu_lr'],
				subSkill: {
					mark: {
						mark: true,
						marktext: '燕',
						audio: 'ext:三国杀传奇/audio/character:2',
						intro: {
							markcount(storage, player) {
								var content = player.getExpansions('sgscq_yanyu_mark');
								return content.length;
							},
							mark(dialog, content, player) {
								var content = player.getExpansions('sgscq_yanyu_mark');
								if (content && content.length) {
									if (player == game.me || player.isUnderControl()) {
										dialog.addAuto(content);
									}
									else {
										return '共有' + get.cnNumber(content.length) + '张<燕语>';
									}
								}
							},
							content(content, player) {
								var content = player.getExpansions('sgscq_yanyu_mark');
								if (content && content.length) {
									if (player == game.me || player.isUnderControl()) {
										return get.translation(content);
									}
									return '共有' + get.cnNumber(content.length) + '张<燕语>';
								}
							}
						},
					},
					lr: {
						trigger: { player: 'phaseUseBefore' },
						forced: true,
						filter(event, player) {
							return player.getExpansions('sgscq_yanyu_mark').length && player.countCards('he') > 0;
						},
						content() {
							"step 0"
							var cards = player.getExpansions('sgscq_yanyu_mark');
							if (!cards.length || !player.countCards('h')) {
								event.finish();
								return;
							}
							var next = player.chooseToMove('燕语:是否交换<燕语>和手牌？');
							next.set('list', [
								[get.translation(player) + '(你)的燕语', cards],
								['手牌区', player.getCards('h')],
							]);
							next.set('filterMove', function (from, to) {
								return typeof to != 'number';
							});
							next.set('processAI', function (list) {
								var player = _status.event.player, cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
									return get.value(a) - get.value(b);
								}), cards2 = cards.splice(0, player.getExpansions('sgscq_yanyu_mark').length);
								return [cards2, cards];
							});
							"step 1"
							if (result.bool) {
								var pushs = result.moved[0], gains = result.moved[1];
								pushs.removeArray(player.getExpansions('sgscq_yanyu_mark'));
								gains.removeArray(player.getCards('h'));
								if (!pushs.length || pushs.length != gains.length) return;
								player.addToExpansion(pushs, player, 'giveAuto').gaintag.add('sgscq_yanyu_mark');
								game.log(player, '将', get.translation(pushs.length), '张牌作为<燕语>置于武将牌上');
								player.gain(gains, 'draw');
							}
						},
					},
					use: {
						trigger: { global: 'useCardAfter' },
						audio: 'sgscq_yanyu_mark',
						filter(event, player) {
							var type = get.type2(event.card), cards = player.getExpansions('sgscq_yanyu_mark');
							if (cards.length) return player.hasUseTarget(event.card);
							return false;
						},
						forced: true,
						content() {
							'step 0'
							var type = get.type2(trigger.card), cards = player.getExpansions('sgscq_yanyu_mark');
							var str = '是否将一张<燕语>当作';
							if (trigger.card.natrue) str += get.translation(trigger.card.natrue);
							str += get.translation(trigger.card);
							str += '使用？';
							player.chooseCardButton(cards, 1, str).set('filterButton', function (button) {
								if (type == get.type2(button.link)) return true;
								return false;
							}).set('ai', function (button) {
								return true;
							});
							'step 1'
							if (result.links?.length) {
								event.card = result.links[0];
								var name = (trigger.card.viewAs || trigger.card.name);
								var str = '将';
								str += get.translation(event.card);
								str += '当作';
								if (trigger.card.natrue) str += get.translation(trigger.card.natrue);
								str += get.translation(trigger.card);
								str += '使用？';
								player.chooseUseTarget(
									[event.card],
									get.prompt('sgscq_yanyu_use'),
									str,
									{
										name: name,
										nature: trigger.card.nature,
										sgscq_yanyu: true,
									},
									false
								)
							}
							else { event.finish(); }
						},
					},
					use2: {
						trigger: { player: 'useCard' },
						forced: true,
						filter(event, player) {
							if (event.card.sgscq_yanyu) return player.countCards('h') < player.maxHp;
							return false;
						},
						content() {
							player.draw()
						},
					}
				},
			},
			//-----------------------马超
			sgscq_suoding: {
				mod: {
					globalFrom(from, to) {
						if (!to.isEmpty(2) || !to.isEmpty(3)) return -Infinity;
					},
				},
			},
			sgscq_qiongsha: {
				audio: 'ext:三国杀传奇/audio/character:2',
				enable: 'phaseUse',
				selectCard: 1,
				position: 'h',
				filterCard(card) {//牌的限制条件
					return card.name != 'sha';//非杀牌
				},
				filter(event, player) {//发动限制条件
					if (!player.countCards('h')) {//如果你没有手牌
						return false;//不能发动
					}
					if (player.hasMark('sgscq_qiongsha') && player.countMark('sgscq_qiongsha') >= 1)
						return true;
				},
				content() {
					player.removeMark('sgscq_qiongsha', 1, '$印了一张杀');//移除标记(只适用于标记是数字)sha.nature=='stab'
					player.gain(game.createCard('sha', cards[0].suit, cards[0].number, cards[0].nature), 'gain2');
				},
				mark: true,
				marktext: '印',
				intro: {
					name: '印牌',
					content: '你还有#次印牌机会',
				},
				init(player) {//初始化(好习惯),获得这个技能时执行的内容
					player.addSkill('sgscq_qiongsha_fuja');//获得穷杀Mark技能
					player.addSkill('sgscq_qiongsha_fura');
				},
				subSkill: {
					fuja: {
						audio: 'ext:三国杀传奇/audio/character:2',
						trigger: {
							source: 'damageSource',
						},
						forced: true,
						filter(event, player) {
							return (event.card && event.card.name == 'sha' && event.parent.name == 'sha');
						},
						content() {
							player.addMark('sgscq_qiongsha', 1);
						},
					},
					fura: {
						audio: 'ext:三国杀传奇/audio/character:2',
						trigger: {
							player: 'phaseUseBefore',
						},
						forced: true,
						content() {
							player.addMark('sgscq_qiongsha', 1);
						},
					},
				},
			},
			sgscq_zhuiji: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: {
					player: 'useCardToTarget',
				},
				forced: true,
				filter(event, player) {
					return event.card.name == 'sha';
				},
				init(player, skill) {
					player.addSkill('sgscq_zhuiji_buff');
				},
				content() {
					if (!player.storage.sgscq_zhuiji_buff) {
						player.storage.sgscq_zhuiji_buff = [];
					}
					player.storage.sgscq_zhuiji_buff.add(trigger.target);
				},
				subSkill: {
					buff: {
						audio: 'ext:三国杀传奇/audio/character:2',
						trigger: {
							player: 'useCard1',
						},
						filter(event, player) {
							return event.card.name == 'sha';
						},
						forced: true,
						mark: true,
						intro: {
							content: '下次对$使用杀无次数限制',
						},
						content() {
							delete player.storage.sgscq_zhuiji_buff;
						},
						mod: {
							cardUsableTarget(card, player, target) {
								if (card.name == 'sha' && player.storage.sgscq_zhuiji_buff && player.storage.sgscq_zhuiji_buff.includes(target)) return true;
							},
						},
					},
				},
			},
			//--------------王异
			//----------------马岱
			// //李严(三传没有
			//--------------昭烈帝
			//---------------兵长陆逊
			//-------------神关羽
			//---------------------魔张飞
			sgscq_haoyi: {
				audio: 'sgscq_mopaoxiao',
				usable: 1,
				trigger: {
					player: ['phaseUseBegin', 'damageBegin4'],
				},
				init(player) {
					if (!player.storage.sgscq_haoyi) player.storage.sgscq_haoyi = 1;
				},
				content() {
					'step 0'
					player.draw(player.storage.sgscq_haoyi || 1);
					'step 1'
					if (player.storage.sgscq_haoyi && player.storage.sgscq_haoyi < 4) player.storage.sgscq_haoyi++;
					'step 2'
					player.addTempSkill('sgscq_haoyi_buff');
				},
				mark: true,
				intro: {
					content: '每回合限一次,出牌阶段开始时或当你受到伤害时,你可以摸$张牌.若如此做,此回合结束时,你需选择①令当前回合角色回复一点体力;②交给当前回合角色Y张牌(Y为其体力值且至多为5).'
				},
				subSkill: {
					buff: {
						// onremove:function (player,skill){
						// 	player.removeSkill(skill);
						// },
						audio: 'sgscq_mopaoxiao',
						trigger: {
							global: 'phaseEnd',
						},
						forced: true,
						filter(event, player) {
							return event.player && event.player.isAlive();
						},
						charlotte: true,
						content() {
							'step 0'
							var list = [];
							if (trigger.player.getDamagedHp()) list.push('回血');
							if (trigger.player != player && player.countCards('he') > 0) list.push('交牌');
							if (list.length == 0) {
								event.finish();
							}
							else if (list.length == 1) {
								event._result = { control: list[0], bool: true, }
							}
							else {
								player.chooseControl(list, true).set('prompt', '令' + get.translation(trigger.player) + '回复一点体力,还是交给' + get.translation(trigger.player) + '' + get.cnNumber(Math.min(trigger.player.hp, 5)) + '张牌')
							}
							'step 1'
							if (result.control) {
								if (result.control == '回血') {
									trigger.player.recover();
									event.finish();
								}
								else if (result.control == '交牌') {
									var num = Math.min(trigger.player.hp, 5);
									player.choosePlayerCard('he', player, num, true).set('prompt', '魔张飞:豪义').set('prompt2', '请选择' + get.cnNumber(num) + '张牌交给' + get.translation(trigger.player) + '.');
								}
							}
							else {
								event.finish();
							}
							'step 2'
							if (result.cards?.length) {
								player.give(result.cards, trigger.player);
							}
						},
					}
				}
			},
			sgscq_mopaoxiao: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: {
					player: 'damageAfter',
				},
				forced: true,
				filter(event, player) {
					return event.source && event.source.isAlive();
				},
				derivation: 'sgscq_zhaolielingyu',
				content() {
					'step 0'
					event.count = 1;
					'step 1'
					var kkk = Math.min(Math.max(player.getDamagedHp(), 1), 99);
					player.chooseToUse(get.prompt('sgscq_mopaoxiao', trigger.source), function (card, player, event) {
						if (card.name != 'sha') return false;
						return lib.filter.filterCard.apply(this, arguments);
					}, trigger.source, -1).set('addCount', false).set('prompt2', '当前第' + (event.count) + '/3次发动');
					'step 2'
					if (!result.bool) {
						event.finish();
					}
					else {
						if (event.count >= 3) {
							event.finish();
						}
						else {
							event.count++;
							event.goto(1);
						}
					}
				},
				group: ['sgscq_mopaoxiao_zhaolie', 'sgscq_mopaoxiao_sha', 'sgscq_mopaoxiao_shizhi'],
				subSkill: {
					sha: {
						audio: 'sgscq_mopaoxiao',
						enable: ['chooseToRespond', 'chooseToUse'],
						filterCard(card, player) {
							return get.type(card) == 'trick';
						},
						position: 'hes',
						viewAs: { name: 'sha' },
						viewAsFilter(player) {
							if (!player.countCards('hes', { type: 'trick' })) return false;
						},
						prompt: '将一张锦囊牌当杀使用或打出',
						check(card) {
							var val = get.value(card);
							if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
							return 5 - val;
						},
						ai: {
							skillTagFilter(player) {
								if (!player.countCards('hes', { type: 'trick' })) return false;
							},
							respondSha: true,
						},
					},
					shizhi: {
						mod: {
							cardname(card, player, name) {
								if ((get.type2(card, false) == 'trick' || get.type2(card, false) == 'delay') && player.hp <= 1) return 'sha';
							},
						},
						ai: {
							skillTagFilter(player) {
								if (!player.countCards('h', { type: 'trick' })) return false;
								if (player.hp >= 1) return false;
							},
							respondSha: true,
						},
						audio: 'sgscq_mopaoxiao',
						trigger: { player: ['useCard1', 'respond'] },
						firstDo: true,
						forced: true,
						filter(event, player) {
							return event.card.name == 'sha' && !event.skill &&
								event.cards.length == 1 && event.cards[0].type == 'trick';
						},
						content() { },
					},
					zhaolie: {
						audio: 'ext:三国杀传奇/audio/character:1',
						trigger: { player: ['useCard'] },
						firstDo: true,
						forced: true,
						filter(event, player) {
							// game.log('event.getParent(2).name:',event.getParent(2).name)
							return event.card && event.card.name == 'sha' && event.parent && event.getParent(2).name == 'sgscq_mopaoxiao';
						},
						content() {
							game.countPlayer(function (current) {
								current.addSkillBlocker('sgscq_zhaolielingyu');
							});
							player.addTempSkill('sgscq_zhaolielingyu2');
							player.storage.sgscq_zhaolielingyu2 = trigger.card;
							// player.storage._sgscq_zhaolielingyu=true;
						},
					},
				},
			},
			//---------------关索
			//-----------------------关银屏
			sgscq_kuwangxx: {
				audio: 'ext:三国杀传奇/audio/character:1',
				forced: true,
				trigger: { player: 'phaseUseBegin' },
				content() {
					'step 0'
					player.draw();
					var list = ['掉血', '掉上限'];
					var str = '请选择一项:<br>①失去一点体力,本阶段红色手牌均视为火杀且无距离限制,	<br>②失去一点体力上限,本阶段黑色手牌均视为雷杀且无次数限制.';
					player.chooseControl(list).set('prompt', '枯望').set('prompt2', str).set('ai', function (control) {
						if (_status.event.player.isDamaged()) return '掉上限';
						return '掉血';
					});
					'step 1'
					if (result.control == '掉血') {
						player.loseHp();
						player.addTempSkill('sgscq_kuwangxx_1', 'phaseUseAfter');
					}
					else {
						player.loseMaxHp();
						player.addTempSkill('sgscq_kuwangxx_2', 'phaseUseAfter');
					}
				},
				subSkill: {
					1: {
						audio: 'sgscq_kuwangxx',
						trigger: { player: 'useCard' },
						forced: true,
						filter(event, player) {
							return event.card && get.color(event.card) == 'red';
						},
						content() { },
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
						},
						ai: {
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'respondSha') && current < 0) return 0.6
								}
							},
							respondSha: true,
						},
					},
					2: {
						audio: 'sgscq_kuwangxx',
						trigger: { player: 'useCard' },
						forced: true,
						filter(event, player) {
							return event.card && get.color(event.card) == 'black';
						},
						content() { },
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
									if (get.tag(card, 'respondSha') && current < 0) return 0.6
								}
							},
							respondSha: true,
						},
					},
				}
			},
			sgscq_kuwang: {
				audio: 'sgscq_kuwangxx',
				forced: true,
				trigger: { player: 'phaseUseEnd' },
				init(player) {
					if (!player.storage.sgscq_kuwang) player.storage.sgscq_kuwang = [0, 0];
				},
				getNumber(player) {
					if (!player.storage.sgscq_kuwang) player.storage.sgscq_kuwang = [0, 0];
					return player.storage.sgscq_kuwang;
				},
				firstDo: true,
				content() {
					var history = trigger.player.getHistory('useCard', function (evt) {
						return evt.getParent('phaseUse') == trigger;
					});
					var numa = 0, numb = 0;
					for (var i = 0; i < history.length; i++) {
						if (get.color(history[i]) == 'red') numa++;
						if (get.color(history[i]) == 'black') numb++;
					}
					player.storage.sgscq_kuwang = [numa, numb];
				},
				mark: true,
				marktext: '望',
				intro: {
					content(event, player, storage, name, skill) {
						var list = lib.skill.sgscq_kuwang.getNumber(player);
						return '记录如下:<br>X·红色牌:' + list[0] + '<br>Y·黑色牌:' + list[1];
					}
				},
				group: ['sgscq_kuwang_wusheng', 'sgscq_kuwang_langmie'],
				subSkill: {
					langmie: {
						audio: 'sgscq_kuwangxx',
						trigger: { player: 'phaseUseEnd' },
						filter(event, player) {
							var history = event.player.getHistory('useCard', function (evt) {
								return evt.getParent('phaseUse') == event;
							});
							var numa = 0, numb = 0;
							for (var i = 0; i < history.length; i++) {
								if (get.color(history[i]) == 'red') numa++;
								if (get.color(history[i]) == 'black') numb++;
							}
							var list = lib.skill.sgscq_kuwang.getNumber(player);
							return numa == list[0] || numb == list[1];
						},
						prompt2(event, player) {
							var history = event.player.getHistory('useCard', function (evt) {
								return evt.getParent('phaseUse') == event;
							});
							var numa = 0, numb = 0;
							for (var i = 0; i < history.length; i++) {
								if (get.color(history[i]) == 'red') numa++;
								if (get.color(history[i]) == 'black') numb++;
							}
							var list = lib.skill.sgscq_kuwang.getNumber(player);
							var numc = 0;
							if (list[0] == numa) numc++;
							if (list[1] == numb) numc++;
							return '是否摸' + numc + '张牌？';
						},
						content() {
							var history = trigger.player.getHistory('useCard', function (evt) {
								return evt.getParent('phaseUse') == trigger;
							});
							var numa = 0, numb = 0;
							for (var i = 0; i < history.length; i++) {
								if (get.color(history[i]) == 'red') numa++;
								if (get.color(history[i]) == 'black') numb++;
							}
							var list = lib.skill.sgscq_kuwang.getNumber(player);
							var numc = 0;
							if (list[0] == numa) numc++;
							if (list[1] == numb) numc++;
							player.draw(numc).gaintag = ['sgscq_kuwang_wusheng'];
						}
					},
					wusheng: {
						audio: 'sgscq_kuwangxx',
						enable: ['chooseToRespond', 'chooseToUse'],
						filterCard(card, player) {
							return card.hasGaintag('sgscq_kuwang_wusheng');
						},
						selectCard: 1,
						position: 'h',
						viewAs: { name: 'sha', nature: 'fire', sgscq_kuwang: true },
						viewAsFilter(player) {
							return player.countCards('h', function (card) {
								return card.hasGaintag('sgscq_kuwang_wusheng')
							});
						},
						prompt: '将一张【枯望】牌当火杀使用或打出',
						check(card) {
							var val = get.value(card);
							if (_status.event.name == 'chooseToRespond') return 1 / Math.max(0.1, val);
							return 5 - val;
						},
						mod: {
							cardUsable(card, player) {
								if (card.name == 'sha' && card.sgscq_kuwang) return Infinity;
							},
							targetInRange(card, player) {
								if (card.name == 'sha' && card.sgscq_kuwang) return true;
							},
						},
						ai: {
							skillTagFilter(player) {
								if (!player.countCards('h', function (card) {
									card.hasGaintag('sgscq_kuwang_wusheng')
								})) return false;
							},
							respondSha: true,
						}
					}
				},
			},
			sgscq_xueji: {
				audio: 'ext:三国杀传奇/audio/character:2',
				mark: true,
				marktext: '祭',
				intro: {
					content: '$',
				},
				forced: true,
				trigger: { global: 'useCard1' },
				filter(event, player) {
					if (get.color(event.card)) {
						if (get.color(event.card) == 'red') return true;
						if (get.color(event.card) == 'black') {
							if (player.countMark('sgscq_xueji') == 0 && player.hp > 3) return false;
						}
						return true;
					}
					return false;
				},
				content() {
					'step 0'
					if (get.color(trigger.card)) {
						if (get.color(trigger.card) == 'red') {
							var num = player.hp > 2 ? 2 : 3;
							player.addMark('sgscq_xueji', num);
						}
						else if (get.color(trigger.card) == 'black') {
							if (player.countMark('sgscq_xueji') == 0 && player.hp > 3) event.finish();
							else if (player.hp > 3) { player.removeMark('sgscq_xueji', 1); }
							else { player.addMark('sgscq_xueji', 1); }
						}
					}
					'step 1'
					var num = (6 + (player.getDamagedHp() * 2));
					if (player.countMark('sgscq_xueji') >= num) {
						var nature = null;
						if (player.hasSkill('sgscq_kuwangxx_1')) nature = 'fire';
						else if (player.hasSkill('sgscq_kuwangxx_2')) nature = 'thunder';
						player.removeMark('sgscq_xueji', player.storage.sgscq_xueji);
						var str = (nature == null) ? get.translation(nature) : '';
						player.chooseTarget([0, 3], '对至多三名角色各造成一点' + str + '伤害').set('ai', function (target) {
							var player = get.player();
							return get.damageEffect(target, player, player);
						});
					}
					'step 2'
					if (result.targets?.length) {
						var nature = null;
						if (player.hasSkill('sgscq_kuwangxx_1')) nature = 'fire';
						else if (player.hasSkill('sgscq_kuwangxx_2')) nature = 'thunder';
						var list = get.YB_1234(result.targets);
						for (var i of list) {
							i.damage(1, nature, 'nocard', player);
						}
					}
					else { event.finish(); }
					'step 3'
					if (player.hp <= 1) {
						player.recover();
					}
				},
			},
			sgscq_xuejixx: {
				audio: 'sgscq_xueji',
				// mark:true,
				// marktext:'恨',
				// intro:{
				// 	name:'血祭',
				// 	mark:function(event,player,storage,name,skill){
				// 		return player.countMark('sgscq_xueji');
				// 	},
				// 	content:function(event,player,storage,name,skill){
				// 		var num=player.countMark('sgscq_xueji');
				// 		return '当前拥有'+num+'枚<祭>标记.';
				// 	},
				// },
				forced: true,
				firstDo: true,
				trigger: { global: 'useCard1' },
				filter(event, player) {
					if (get.color(event.card)) {
						if (get.color(event.card) == 'red') return true;
						if (get.color(event.card) == 'black') {
							if (player.countMark('sgscq_xueji') == 0 && player.hp > 3) return false;
						}
						return true;
					}
					return false;
				},
				content() {
					'step 0'
					if (get.color(trigger.card)) {
						if (get.color(trigger.card) == 'red') {
							var num = player.hp > 2 ? 2 : 3;
							player.addMark('sgscq_xueji', num);
						}
						else if (get.color(trigger.card) == 'black') {
							if (player.countMark('sgscq_xueji') == 0 && player.hp > 3) event.finish();
							else if (player.hp > 3) { player.removeMark('sgscq_xueji', 1); }
							else { player.addMark('sgscq_xueji', 1); }
						}
					}
				},
				derivation: ['sgscq_xuehen'],
				group: 'sgscq_xuejixx_xueji',
				subSkill: {
					xueji: {
						mod: {
							cardname(card, player) {
								var num = (6 + player.getDamagedHp());
								var cana = 'sha';
								if (player.countMark('sgscq_xueji') >= num) {
									if (card.name == 'sgscq_xuehen') return false;
									else {
										if (lib.card[card.name] &&
											lib.card[card.name].ai &&
											lib.card[card.name].ai.tag &&
											lib.card[card.name].ai.tag.damage) return 'sgscq_xuehen';
									}
								}
							},
							cardnature(card, player) {
								var nature2 = null;
								if (player.hasSkill('sgscq_kuwangxx_1')) nature2 = 'fire';
								else if (player.hasSkill('sgscq_kuwangxx_2')) nature2 = 'thunder';
								if (card.name == 'sgscq_xuehen') return nature2;
							},
						},
						forced: true,
						audio: 'sgscq_xuejixx',
						trigger: { player: ['useCard1', 'useCardEnd'], },
						filter(event, player, name) {
							if (name == 'useCardEnd') return (player.hp <= 1 && event.card.name == 'sgscq_xuehen');
							else {
								return event.card && event.card.name == 'sgscq_xuehen';
								// &&event.cards&&event.cards.length==1&&event.cards[0].name!='sgscq_xuehen';
							}
						},
						content() {
							if (event.triggername == 'useCardEnd') {
								player.recover();
							}
							else { player.draw(2); }
						}
					},
				},
			},
			sgscq_xuehen_skill: {
				trigger: { player: 'damageEnd' },
				forced: true,
				_priority: 6,
				filter(event, player) {
					return player.hasUsableCard('sgscq_xuehen');
				},
				content() {
					var next = player.chooseToUse();
					next.set('prompt', '是否使用【血祭】？');
					next.set('filterCard', function (card, player) {
						if (card.name != 'sgscq_xuehen') return false;
						return true;
					});
					next.set('ai2', function () {
						return get.effect_use.apply(this, arguments) + 0.01;
					})
				},
			},
			//---------------华佗
			//---------------神吕蒙
			//-------------八尺琼曹丕
			//--------------泳装甄姬
			//--------------吴大帝
			//-----------------------孙权の借箭
			sgscq_jiejian: {
				preHidden: true,
				audio: 'ext:三国杀传奇/audio/character:1',
				filter(event, player) {
					return event.player != player && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick' || get.type(event.card) == 'delay');
				},
				check(event, player) {
					if (event.parent.excluded.includes(player) || ['taoyuan', 'wugu', 'zhulu_card'].includes(event.card.name)) return false;
					return true;
				},
				logTarget: 'player',
				trigger: {
					target: 'useCardToTarget',
				},
				content() {
					'step 0'
					player.judge(function (card) {
						if (card.suit == 'club') return 2;
						if (card.suit == 'diamond') return 2;
						-1;
					})
					'step 1'
					if (result.bool) {
						var cards = trigger.cards.filterInD();
						player.gain(cards, 'gain2', 'log');
						trigger.excluded.push(player);
					}
					else {
						event.finish()
					}
				},
				ai: {
					expose: 0,//跳立场
					threaten: 0.5,//嘲讽值
				},
			},
			//---------------鲍勋
			//---------------张星彩
			//---------------sp黄忠
			//---------------廖化
			jacken_dangxian: {
				trigger: {
					global: "phaseDrawAfter",
				},
				round: 1,
				audio: 'ext:三国杀传奇/audio/character:3',
				// audio:"dangxian",
				audioname: ["guansuo", "xin_liaohua"],
				check(event, player) {
					var list = game.players;
					var worst_att = 999;
					var worst_player = 0;
					for (var i = 0; i < list.length; i++) {
						if (get.attitude(player, list[i]) < worst_att) {//点名批评这位同学,get.attitude漏写一个i,
							worst_att = get.attitude(player, list[i]);//20231123,发现这里也漏写了一个i
							worst_player = list[i];
						}
					}
					return worst_player == event.player;
				},
				content() {
					'step 0'
					player.draw(3);
					if (trigger.player == player) {
						event.goto(3);
					}
					event.num = trigger.player.getCards('hej').length;
					player.gain(trigger.player.getCards('hej'), trigger.player, 'giveAuto');//--------才发现这里也写错了,jacken出来接受拷打player写成了palyer
					'step 1'
					player.chooseCard('he', event.num, true).set('prompt', '还给' + get.translation(trigger.player) + get.cnNumber(event.num) + '张牌').set('ai', function (card) {
						var player = _status.event.player;
						var target = _status.event.parent.player;
						if (get.attitude(player, target) > 0) {
							if (!target.hasShan() && card.name == 'shan') return 10;
							if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts') && target.hasUseTarget(card)) return 10 - get.value(card);
							return 6 - get.value(card);
						}
						return -get.value(card);
					});
					'step 2'
					trigger.player.gain(result.cards, player, 'giveAuto');
					'step 3'
					game.updateRoundNumber();
					var next = player.phaseUse();
					event.next.remove(next);
					trigger.next.push(next);
				},
				group: ["jacken_dangxian_roundcount"],
			},
			//--------------糜芳
			//-------------孙鲁班
			//-------------孙鲁育
			//---------------潘璋
			//---------------韩当
			//-----------------丁奉
			//----------------贺齐
			//----------------全琮
			//-------------------------------魔黄盖
			sgscq_mokurou: {
				audio: 'ext:三国杀传奇/audio/character:2',
				enable: 'phaseUse',
				usable: 1,
				filterCard(card) {
					return get.tag(card, 'damage');
				},
				selectCard: [0, 1],
				filterTarget(card, player, target) {
					if (player == target) return false;
					return true;
				},
				content() {
					"step 0"
					if (cards.length == 0) {
						player.loseHp();
					}
					"step 1"
					var next = game.createEvent('sgscq_mokurou_delete', false);
					next.player = player;
					next.target = target;
					next.count = 0;
					next.setContent(function () {
						'step 0'
						var list = [];
						game.countPlayer(function (current) {
							if (current != event.player && current != event.target) list.push(current);
						});
						event.list = list;
						event.num = 1;
						event.numb = 0;
						'step 1'
						if (event.numb < 2 && event.numb > event.list.length) {
							event.list[event.numb].chooseControl(['是', '否']).set('prompt2', '是否失去一点体力为其助战？').set('ai', function (control) {
								var att1 = get.attitude(_status.event.player, player);
								var att2 = get.attitude(_status.event.player, target);
								if (att1 * att2 < 0 && _status.event.player.hp > 2) return '是';
								return '否';
							});
						}
						else {
							event.goto(5)
						}
						'step 2'
						if (result.control == '是') {
							game.log(event.list[event.numb], '对', player, '进行了助战!')
							event.list[event.numb].say('我来助你一臂之力!')
							event.list[event.numb].loseHp()
							// event.numb++;
							event.num++;
						}
						'step 3'
						event.numb++;
						'step 4'
						if (event.count < 2 && event.numb < event.list.length) {
							event.goto(1);
						}
						'step 5'
						target.damage(event.num, 'nocard');
					});
				},
				check(card) {
					return 10 - get.value(card);
				},
				position: 'he',
				ai: {
					damage: true,
					order: 8,
					result: {
						player(player, target) {
							if (ui.selected.cards.length) return 0;
							if (player.hp >= target.hp) return -0.9;
							if (player.hp <= 2) return -10;
							return -2;
						},
						target(player, target) {
							if (!ui.selected.cards.length) {
								if (player.hp < 2) return 0;
								if (player.hp == 2 && target.hp >= 2) return 0;
								if (target.hp > player.hp) return 0;
							}
							return get.damageEffect(target, player);
						}
					},
					threaten: 1.3,
				},
			},
			//新魔苦肉--------结阵
			sgscq_mokurouxx: {
				audio: 'sgscq_mokurou',
				enable: 'phaseUse',
				usable: 1,
				filterCard(card) {
					return get.tag(card, 'damage');
				},
				selectCard: [0, 1],
				filterTarget(card, player, target) {
					if (player == target) return false;
					return true;
				},
				content() {
					"step 0"
					if (cards.length == 0) {
						player.loseHp();
					}
					"step 1"
					var next = game.createEvent('sgscq_mokurou_delete', false);
					next.player = player;
					next.target = target;
					next.count = 0;
					next.setContent(function () {
						'step 0'
						var list = [];
						game.countPlayer(function (current) {
							if (current != event.player && current != event.target && get.YB_zhenlie(player, current) == true) list.push(current);
						});
						event.list = list;
						event.num = 1;
						event.numb = 0;
						'step 1'
						if (event.list.length != 0) {
							event.list[event.numb].chooseControl(['是', '否']).set('prompt', '是否失去一点体力为其助战？').set('ai', function (control) {
								var att1 = get.attitude(_status.event.player, player);
								var att2 = get.attitude(_status.event.player, target);
								if (att1 * att2 < 0 && _status.event.player.hp > 2) return '是';
								return '否';
							});
						}
						else {
							event.goto(5)
						}
						'step 2'
						if (result.control == '是') {
							game.log(event.list[event.numb], '对', player, '进行了助战!')
							event.list[event.numb].say('我来助你一臂之力!')
							event.list[event.numb].loseHp()
							// event.numb++;
							event.num++;
						}
						'step 3'
						event.numb++;
						'step 4'
						if (event.numb < event.list.length) {
							event.goto(1);
						}
						'step 5'
						target.damage(event.num, 'nocard');
					});
				},
				check(card) {
					return 10 - get.value(card);
				},
				position: 'he',
				ai: {
					damage: true,
					order: 8,
					result: {
						player(player, target) {
							if (ui.selected.cards.length) return 0;
							if (player.hp >= target.hp) return -0.9;
							if (player.hp <= 2) return -10;
							return -2;
						},
						target(player, target) {
							if (!ui.selected.cards.length) {
								if (player.hp < 2) return 0;
								if (player.hp == 2 && target.hp >= 2) return 0;
								if (target.hp > player.hp) return 0;
							}
							if (get.YB_zhenlie(player, target) == true) return 0;
							return get.damageEffect(target, player);
						}
					},
					threaten: 1.3,
				},
				group: 'YBSL_jiezhen',
			},
			//--------------------魔凌统
			sgscq_moxuanfeng: {
				audio: 'ext:三国杀传奇/audio/character:2',
				usable: 1,
				enable: 'phaseUse',
				filter(event, player) {
					return player.countCards('h') >= 2;
				},
				selectCard: 2,
				position: 'h',
				check(card) {
					return 6 - get.value(card);
				},
				filterCard(card) {
					return true;
				},
				content() {
					player.discard(cards);
				},
				group: 'sgscq_moxuanfeng_re',
				subSkill: {
					re: {
						audio: 'sgscq_moxuanfeng',
						trigger: {
							player: 'loseAfter',
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
						},
						forced: true,
						charlotte: true,
						filter(event, player, name) {
							var evt = event.getl(player);
							if (evt.es) return evt && evt.es && evt.es.length;
							return evt && evt.hs && evt.hs.length > 1;
						},
						content() {
							"step 0"
							event.count = 2;
							event.targets = [];
							"step 1"
							event.count--;
							player.chooseTarget(get.prompt('sgscq_moxuanfeng'), '弃置一名其他角色的一张牌', function (card, player, target) {
								if (player == target) return false;
								if (event.targeted == target) return false;
								return target.countDiscardableCards(player, 'he');
							}).set('ai', function (target) {
								return -get.attitude(_status.event.player, target);
							});
							"step 2"
							if (result.targets?.length) {
								player.line(result.targets[0], 'green');
								targets.add(result.targets[0]);
								player.discardPlayerCard(result.targets[0], 'he', true);
								event.targeted = result.targets[0];
							}
							else if (!targets.length) event.finish();
							"step 3"
							if (event.count) event.goto(1);
							else {
								player.chooseTarget('是否对一名目标角色造成1点伤害', function (card, player, target) {
									return _status.event.targets.includes(target);
								}).set('targets', targets).set('ai', function (target) {
									var player = _status.event.player;
									return get.damageEffect(target, player, player);
								});
							}
							// else event.finish();
							"step 4"
							if (result.targets?.length) {
								player.line(result.targets[0], 'thunder');
								result.targets[0].damage();
							}
						},
						ai: {
							effect: {
								player_use(card, player, target) {
									if (player == target && get.type(card) == 'equip' && player.countCards('hes', function (cardx) {
										return card != cardx && (!card.cards || !card.cards.includes(cardx)) && (player.hasSkill('yongjin') || get.subtype(card) == get.subtype(cardx)) && (get.position(cardx) == 'e' || player.canUse(cardx, player));
									}) > 0) return;
									if (!game.hasPlayer(function (current) {
										return get.attitude(player, current) < 0 && current.countDiscardableCards(player, 'he') > 0 && get.damageEffect(current, player, player) > 0;
									})) return;
									if (typeof card == 'object' && player.isPhaseUsing() &&
										player.needsToDiscard() == 2 && card.cards && card.cards.filter(function (i) {
											return get.position(i) == 'h';
										}).length && !get.tag(card, 'draw') && !get.tag(card, 'gain') && !(get.tag(card, 'discard') && target == player && player.countCards('e') > 0)) return 'zeroplayertarget';
								},
								target(card, player, target, current) {
									if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
									if (get.tag(card, 'damage') && target.hp > 2) {
										var num1 = target.countCards('h'), num2 = target.getHandcardLimit();
										if (num1 > num2) return [1, 1];
										if (num1 == num2) return [1.1, _status.event.player == target ? 3 : 0.5];
										if (num1 == num2 - 1) return [0.1, _status.event.player == target ? 4.5 : 0.1];
									}
									if (typeof card == 'object' && (card.name == 'shunshou' || card.name == 'guohe' || card.name == 'zhujinqiyuan') && target.countCards('h') > 0 && get.attitude(player, target) < 0) return [1, -1];
								}
							},
							reverseEquip: true,
							noe: true,
							expose: 0.2,
						}
					},
				},
			},
			//---------------孟获
			//------------------祝融
			//------------sp关索--------花关索
			xiefang_yuan: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				mod: {
					globalFrom(from, to, distance) {
						if (to.storage.xiefang_yuan) return distance - Infinity;
					},
					globalTo(from, to, distance) {
						if (from.storage.xiefang_yuan) return distance - Infinity;
					},
				},
				group: 'xiefang_yuan_on',
				content() {
					'step 0'
					player.chooseTarget(get.prompt2('xiefang_yuan'), function (card, player, target) {
						return target != player;
					}).set('ai', function (target) {
						var player = _status.event.player;
						return get.damageEffect(target, player, player);
					});
					'step 1'
					if (result.targets?.length) {
						result.targets[0].discardPlayerCard(player, 'h', true);
						result.targets[0].storage.xiefang_yuan = true;
					}
				},
				subSkill: {
					on: {
						trigger: {
							player: 'phaseBegin',
						},
						silent: true,
						charlotte: true,
						_priority: 1,
						content() {
							var targets = game.filterPlayer(function (current) {
								return current.storage.xiefang_yuan;
							}).sortBySeat();
							for (var i of targets) i.storage.xiefang_yuan = false;
						},
						forced: true,
						popup: false,
					},
				},
			},
			zhengnan_yuan: {
				audio: 'ext:三国杀传奇/audio/character:2',
				trigger: {
					player: 'phaseUseBegin',
				},
				group: 'zhengnan_yuan_on',
				forced: true,
				content() {
					'step 0'
					var card = get.discardPile(function (card) {
						return get.tag(card, 'damage');
					});
					event.card = card;
					if (card) player.gain(card, 'gain2');
					else event.finish();
					'step 1'
					player.chooseToUse((card) => card == event.card);
					'step 2'
					if (player.hasHistory('sourceDamage', function (evt) {
						return evt.card && evt.card.name == event.card.name && evt.getParent('zhengnan_yuan') == event;
					})) player.recover();
					if (player.hasHistory('useCard', function (evt) {
						return evt.card && evt.card.name == 'sha' && evt.getParent('zhengnan_yuan') == event;
					})) player.getStat('card').sha--;
				},
				subSkill: {
					on: {
						audio: 'zhengnan_yuan',
						trigger: {
							player: 'phaseJieshuBegin',
						},
						forced: true,
						content() {
							player.draw(2);
							var next = player.phaseUse();
							event.next.remove(next);
							trigger.next.push(next);
						},
					},
				},
			},
			//-------------------花鬘
			//-----------------鲍三娘
			//-------------------马谡
			//----------------王平
			//--------------魏姜维
			//-----------------刘禅
			//--------------司马懿
			//-----------------张春
			//---------------满宠
			//----------------吕虔
			//----------------射手黄忠
			//----------------郝昭
			//------------------牛金
			//---------------跑男夏侯渊
			//-----------------夜夜星彩
			//---------------圣诞司徒
			//-------------------关兴
			//-----------------关张
			//---------------神诸葛亮
			//----------------德古拉魏延
			//-------------------sp马超
			//---------------神司马懿
			//---------------冰雪春华
			//-----------------典满
			//----------------死神祝融
			//-----------姜维
			// 'sczs_tiaoxinxx':'挑衅',
			// 'sczs_tiaoxinxx_info':'每轮限X次,当一名其他角色使用杀指定另一名其他角色为目标时后,你可以观看其手牌并弃置其中一张,将此杀转移给你.X为你的体力值.',
			// 'sczs_jizhixx':'继志',
			// 'sczs_jizhixx_info':'锁定技.你视为拥有技能〖观星〗,〖八阵〗,〖看破〗',
			sczs_tiaoxin: {
				audio: 'ext:三国杀传奇/audio/character:1',
				enable: 'phaseUse',
				filter(event, player) {
					if (player.countCards('h') == 0) return false;
					return game.hasPlayer(function (current) {
						return player.inRange(current) && player.canCompare(current);
					});
				},
				filterTarget(card, player, target) {
					if (player.hasSkill('sczs_tiaoxin_no')) {
						if (player.storage.sczs_tiaoxin_no.includes(target)) return false;
					}
					return player.canCompare(target) && player.inRange(target);
				},
				content() {
					"step 0"
					player.chooseToCompare(target);
					"step 1"
					if (result.bool) {
						target.addSkill('sczs_tiaoxin_one');
						target.storage.sczs_tiaoxin_one = player;
					}
					else {
						player.addTempSkill('sczs_tiaoxin_no');
						if (!player.storage.sczs_tiaoxin_no) player.storage.sczs_tiaoxin_no = [];
						player.storage.sczs_tiaoxin_no.add(target);
						event.finish();
					}
				},
				ai: {
					order: 1,
					result: {
						target(player, target) {
							if (target.hasSkill('sczs_tiaoxin_one')) return 0;
							var hs = player.getCards('h').sort(function (a, b) {
								return b.number - a.number;
							});
							var ts = target.getCards('h').sort(function (a, b) {
								return b.number - a.number;
							});
							if (!hs.length || !ts.length) return 0;
							if (hs[0].number > ts[0].number) return -1;
							return 0;
						},
					},
				},
				subSkill: {
					one: {
						trigger: {
							global: ['phaseBegin', 'die'],
						},
						filter(event, player) {
							return event.player == player.storage.sczs_tiaoxin_one;
						},
						content() {
							player.removeSkill('sczs_tiaoxin_one');
						},
						forced: true,
						mod: {
							playerEnabled(card, player, target) {
								// if(card.name=='sha'){
								// if(!player.storage.sczs_tiaoxin_one) return false;
								// if(!player.storage.sczs_tiaoxin_one.isAlive()) return;
								if (player.storage.sczs_tiaoxin_one != target) return false;
								// return player.storage.sczs_tiaoxin_one==target;
								// }
							}
						},
						mark: true,
						marktext: '衅',
						intro: {
							content: '不能对除$以外的角色使用牌',
						}
					},
					no: {
						mark: true,
						marktext: '挑',
						intro: {
							content: '不能对$挑衅',
						}
					},
				}
			},
			sczs_jizhix: {
				audio: 'ext:三国杀传奇/audio/character:1',
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				usable: 1,
				// forced:true,
				filter(event, player) {
					if (player.countCards('h')) return false;
					var evt = event.getl(player);
					return evt && evt.player == player && evt.hs && evt.hs.length;
				},
				content() {
					'step 0'
					player.useSkill('guanxing');
					'step 1'
					player.draw();
				},
				ai: {
					threaten: 1.3,//嘲讽值
					noh: true,
				},
			},
			sczs_tiaoxinxx: {
				audio: 'sczs_tiaoxin',
				trigger: { global: 'useCardToPlayer' },
				filter(event, player) {
					if (player.hasMark('sczs_tiaoxinxx_no') && player.countMark('sczs_tiaoxinxx_no') > player.hp) return false;
					if (!event.player.countCards('h')) return false;
					return event.player != player && event.card.name == 'sha' && !event.targets.includes(player);
				},
				// direct:true,
				content() {
					"step 0"
					player.addTempSkill('sczs_tiaoxinxx_no', 'roundStart');
					player.addMark('sczs_tiaoxinxx_no');
					// player.viewHandcards(trigger.player);
					player.choosePlayerCard(trigger.player, 'h', 1, true, get.prompt2('sczs_tiaoxinxx', trigger.player, 'visible'))
					"step 1"
					if (result.bool && result.cards) {
						event.card = result.cards[0];
						trigger.targets.length = 0;
						trigger.parent.triggeredTargets1.length = 0;
					}
					else {
						event.finish();
					}
					"step 2"
					if (!event.isMine()) game.delayx();
					"step 3"
					if (event.card) {
						player.gain(event.card, 'draw')
						game.log(player, '获得了', trigger.player, '的一张牌');
					}
					"step 4"
					trigger.parent.targets.push(player);
					trigger.player.line(player);
				},
				subSkill: {
					no: {
						mark: true,
						marktext: '衅',
						intro: {
							content: '本轮已使用$次',
						}
					},
				}
			},
			sczs_jizhixx: {
				audio: 'sczs_jizhix',
				group: ['guanxing', 'bazhen_bagua', 'kanpo'],
				derivation: ['guanxing', 'bazhen', 'kanpo'],
			},
			//-----------邓艾
			sczs_tuntian: {
				audio: 'ext:三国杀传奇/audio/character:2',
				forced: true,
				judgeCheck(card, bool) {
					var suit = card.suit;
					return 4;
				},
				group: ['sczs_tuntian_dangxian', 'sczs_tuntian_bgm'],
				subSkill: {
					dangxian: {
						forced: true,
						audio: 'sczs_tuntian',
						trigger: {
							player: ['phaseZhunbei', 'loseAfter'],
						},
						filter(event, player, name) {
							if (name == 'loseAfter') return event.parent.name == 'discard';
							return true;
						},
						content() {
							player.judge(lib.skill.sczs_tuntian.judgeCheck).judge2 = function (result) {
								return result.bool ? true : false;
							};
						},
					},
					bgm: {
						forced: true,
						trigger: { player: 'judgeBegin' },
						content() {
							game.playAudio('../extension/三国杀传奇/audio/character/eff_tuntian.mp3');
						}
					},
				},
				trigger: { player: ['judgeEnd'] },
				forced: true,
				disableReason: ['暴虐', '助祭', '弘仪', '孤影'],
				filter(event, player, name) {
					return !lib.skill.xinleiji_misa.disableReason.includes(event.judgestr);
				},
				content() {
					'step 0'
					player.gain(trigger.result.card, 'gain2');
					if (trigger.result.suit == 'heart') {
						player.recover();
					}
					else {
						player.YB_qingtui(1);
						player.chooseTarget('屯田:请选择一名没有<怒焰>的角色令其获得<怒焰>', true, function (card, player, target) {
							if (target.hasMark('YBSL_weiwunuyan')) return false;
							return true;
						}).ai = function (target) {
							var player = _status.event.player;
							return -get.attitude(_status.event.player, target);
						};
					}
					'step 1'
					if (result.targets?.length) {
						player.line(result.targets, 'thunder');
						result.targets[0].addMark('YBSL_weiwunuyan');
					}
				},
			},
			sczs_zaoxian: {
				audio: 'ext:三国杀传奇/audio/character:2',
				forced: true,
				trigger: { global: 'die', },
				filter(event, player) {
					if (_status.currentPhase != player || event.player == player) return false;
					return true;
				},
				content() {
					'step 0'
					event.count = 1;
					event.num = Math.min(trigger.player.maxHp, 5);
					'step 1'
					player.judge(lib.skill.sczs_tuntian.judgeCheck).judge2 = function (result) {
						return result.bool ? true : false;
					};
					'step 2'
					if (event.count < event.num) {
						event.count++;
						event.goto(1);
					}
				},
			},
			//-----------钟会
			sczs_quanji: {
				audio: 'ext:三国杀传奇/audio/character:2',
				forced: true,
				group: ['sczs_quanji_damage', 'sczs_quanji_losecard'],
				subSkill: {
					damage: {
						forced: true,
						audio: 'sczs_quanji',
						trigger: {
							player: 'damageBegin4',
						},
						filter(event, player) {
							return event.source && event.source.isAlive();
						},
						content() {
							trigger.source.addMark('YBSL_weiwunuyan');
						},
					},
					losecard: {
						forced: true,
						audio: 'sczs_quanji',
						trigger: {
							player: ['loseAfter'],
						},
						filter(event, player) {
							var u = event.parent;
							if (u.name == 'useCard' || u.name == 'respond') {
								return _status.currentPhase && _status.currentPhase != player;//QQQ
							}
						},
						content() {
							_status.currentPhase.addMark('YBSL_weiwunuyan');
						},
					},
				},
				trigger: { player: 'phaseUseAfter' },
				filter(event, player) {
					return true;
				},
				content() {
					player.YB_qingtui('yb');
				},
			},
			sczs_zili: {
				audio: 'ext:三国杀传奇/audio/character:2',
				forced: true,
				trigger: { global: 'phaseJieshu' },
				filter(event, player) {
					return event.player != player && event.player.hasMark('YBSL_weiwunuyan');
				},
				content() {
					'step 0'
					trigger.player.chooseCard(true, 'he');
					'step 1'
					if (result.cards?.length) trigger.player.give(result.cards, player);
				},
			},
			//------------司马昭
			//++++++++++++司马炎
			//-------------王元姬
			//---------------------魔马超
			sgscq_motieji: {
				audio: 'sgscq_motieji_zhaolie',
				trigger: { player: ['useCard'] },
				firstDo: true,
				forced: true,
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				content() {
					game.countPlayer(function (current) {
						current.addSkillBlocker('sgscq_zhaolielingyu');
					});
					player.addTempSkill('sgscq_zhaolielingyu2');
					player.storage.sgscq_zhaolielingyu2 = trigger.card;
				},
				group: 'sgscq_motieji_zhaolie',
				derivation: 'sgscq_zhaolielingyu',
				subSkill: {
					audio: {
						audio: 'ext:三国杀传奇/audio/character:1',
					},
					zhaolie: {
						audio: 'ext:三国杀传奇/audio/character:2',
						trigger: {
							player: 'damageEnd',
						},
						forced: true,
						content() {
							player.chooseUseTarget(
								get.prompt('sgscq_motieji'),
								'誓仇:请选择至多三名其他角色,视为对他们使用一张杀.',
								{
									name: 'sha',
									nature: null,
								},
							)
						},
					},
				}
			},
			//--------------英雄王关羽
			//-------------神指纹
			//--------------神塞雷
			//---------------神大刀兵
			//-------------神重骑兵
			//-----------------公主宪英
			//----------------天使尚香
			//--------------至尊小宝
			//---------------功夫阿奇
			//---------------顽皮淘淘
			//---------------小鸡哔哔
			//---------------浣熊波波
			//--------------倒霉呆呆
			//---------------神秘武将
		},//技能(必填) ……………………!…!!!【…？.!!？？？？…………
		card: {
			sgscq_xuehen: {
				fullskin: true,
				type: 'trick',
				derivation: 'sgscq_guanyinping',
				enable: true,
				epic: true,
				wuxieable: true,
				global: ['sgscq_xuehen_skill'],
				selectTarget: [1, 3],
				image: 'ext:三国杀传奇/image/card/sgscq_xuehen.png',
				filterTarget(card, player, target) {
					// return target!=player;
					return true;
				},
				audioname2: {
					sgscq_guanyinping: 'sgscq_xuejixx',
					scnb_guanyinping: 'sgscq_xueji',
				},
				// multiline:true,
				// multitarget:true,
				contentBefore() {
					var num = (6 + player.getDamagedHp());
					if (player.countMark('sgscq_xueji')) player.removeMark('sgscq_xueji', num);
				},
				content() {
					'step 0'
					var nature = null;
					if (player.hasSkill('sgscq_kuwangxx_1')) nature = 'fire';
					else if (player.hasSkill('sgscq_kuwangxx_2')) nature = 'thunder';
					event.nature = nature;
					'step 1'
					target.damage(event.baseDamage || 1, event.nature);
				},
				ai: {
					basic: {
						order: 5,
						useful: 2,
						value: 8,
					},
					yingbian(card, player, targets, viewer) {
						if (get.attitude(viewer, player) <= 0) return 0;
						if (game.hasPlayer(function (current) {
							return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
						})) return 6;
						return 0;
					},
					result: {
						target(player, target, cardx) {
							if (player.hasSkillTag('viewHandcard', null, target, true)) return target.countCards('h', function (card) {
								return card.suit != cardx.suit
							}) > 0 ? -1.5 : 0;
							return -1.4;
						},
					},
					tag: {
						damage: true,
					},
				},
			},
		},
		translate: {
			sgscq_tyjy: '桃园结义',//刘备,关羽,张飞,张角,董卓,张宝,波才,马元义,裴元绍,高升,魔张角,sp张角,督邮,圣诞貂蝉,黄巾雷使,南华老仙//张梁
			sgscq_jcrl: '酒池肉林',//刘协,魔董卓,孙坚,袁绍,吕布,祖茂,孙坚,华雄,袁术,公孙瓒,赵云,潘凤,王允,貂蝉,许褚,群蔡文姬,财神关羽,董白,李傕,郭汜,牛辅,魔贾诩,袁姬,李儒
			sgscq_eqcj: '江东人杰',//孙策,太史慈,周瑜,大乔,小乔,二乔,严白虎,吴夫人,吴国太,孙尚香,侍女队长,于吉,凌统,凌操,步练师,大虎,小虎,陆逊,陆绩,朱治,软妹袁姬,大圣孙坚,陆延
			sgscq_bml: '白门楼',//魔貂蝉,贾诩,神曹操,神吕布,曹昂,典韦,胡车儿,高顺,陈宫,曹洪,卞皇后,糜竺,孙乾,张辽,吕玲绮//陈登,陈珪
			sgscq_gdzz: '官渡之战',//sp袁绍,曹操,郭图,田丰,沮授,郭嘉,颜良,文丑,颜良文丑,张郃,周仓,关平,朱灵,李通
			sgscq_jxzd: '荆襄之地',//刘表,伊籍,卧龙诸葛,黄月英,神赵云,夏侯恩,甘夫人,糜夫人,徐庶,简雍,魔夏侯惇(芽间月英)
			sgscq_cwjx: '曹魏锦绣',//甄姬,曹丕,曹植,李典,荀攸,程昱,戏志才,乐进,辛宪英,采樵夏侯氏,夏侯惇,于禁,徐晃,左慈,卑弥呼,伏皇后,伏完,魏蔡文姬
			sgscq_cbzz: '赤壁之战',//孙权,神周瑜,学妹小乔,黄盖,魏武帝,界关羽,甘宁,枪骑凌统,张昭,张纮,鲁肃,蔡瑁,张允,蒋干,庞统,吕蒙,荀彧,诸葛瑾,周泰
			sgscq_gqxs: '攻取西蜀',//刘封,黄忠,魏延,法正,严颜,孟达,吴兰,夏侯渊,曹仁,马良,蜀孙尚香,电玩侍女,虞翻,夏侯氏,马超,王异,马岱,//李严
			sgscq_bdtg: '夷陵之战',//昭烈帝,兵长陆逊,神关羽,魔张飞,关索,关银屏,华佗,神吕蒙,八尺琼曹丕,泳装甄姬,吴大帝,鲍勋,张星彩,sp黄忠,廖化,糜芳,孙鲁班,孙鲁育,潘璋,韩当,丁奉,贺齐,全琮,魔黄盖,魔凌统
			sgscq_pdnm: '六出祁山',//孟获,祝融,sp关索,花鬘,鲍三娘,马谡,王平,魏姜维,刘禅,司马懿,张春华满宠,吕虔,射手黄忠,郝昭,牛金,跑男夏侯渊,夜夜星彩,圣诞司徒,关兴,关张
			sgscq_xywzy: '星陨五丈原',//神诸葛亮,德古拉魏延,sp马超,神司马懿,冰雪春华,典满,死神祝融
			sgscq_jgsz: '剑阁死战',//姜维,邓艾,钟会,司马昭,司马炎,王元姬,魔马超
			sgscq_ccxh: '璀璨星河',//英雄王关羽,神指纹,神塞雷,神大刀兵,神重骑兵,公主宪英,天使尚香,至尊小宝,功夫阿奇,顽皮淘淘,小鸡哔哔,浣熊波波,倒霉呆呆,神秘武将
			sgscq_YB_money: '<span class=YB_moneytext>三传壕将</span>',
			sgscq_YB_demon: '<span class=YB_darktext>三传魔将</span>',
			sgscq_zhaolielingyu: '昭烈领域',
			sgscq_zhaolielingyu_info: '场上所有非锁定技失效.',
			sgscq_zhaolielingyu2: '昭烈领域',
			YBSL_jiezhen: '结阵',
			YBSL_jiezhen_info: '出牌阶段限一次,若你未结阵,则可以选择两名其他角色进行结阵(其他角色不足两人则无法结阵),你为阵眼.<br>若你已结阵,且你不为阵眼,你可以将阵眼改为你.<br>一名角色仅能加入一个阵列.<br>同一阵列内的成员造成的伤害对彼此豁免.',
			_sgscq_jiezhen: '解阵',
			_sgscq_jiezhen_info: '出牌阶段限一次,若你处于结阵状态,你可以解除你所处的阵列.<br>一名角色仅能加入一个阵列.<br>同一阵列内的成员造成的伤害对彼此豁免.',
			sgscq_jiezhenji: '结阵',
			sgscq_jiezhenji_info: '有结阵技的角色出牌阶段限一次,若其未结阵,其可以选择两名其他角色进行结阵(其他角色不足两人则无法结阵),发起结阵的角色称为阵眼.<br>若其已结阵,且其有结阵技,其可以消耗结阵次数,将阵眼改为自己.<br>每名角色的出牌阶段限一次,若其处于结阵状态,其可以解除结阵状态.<br>一名角色仅能加入一个阵列.<br>同一阵列内的成员造成的伤害对彼此豁免.',
			////------------------------桃园结义-----------------------------//
			sgscq_liubei: '刘备',
			sgscq_rende: '仁德',
			'#sgscq_rende1': '惟贤惟德,能服于人.',
			'#sgscq_rende2': '以德服人.',
			sgscq_rende_info: '出牌阶段,你可以将任意张手牌交给其他角色.当你以此法于一回合内给出第二张牌时,你摸一张牌;当你以此法于一回合内给出第三张牌时,你回复1点体力.',
			sczs_rende: '仁德',
			sczs_rende_info: '出牌阶段限一次,你可以将任意张牌交给一名其他角色并回复1点体力,直到该角色的下个回合结束,其造成的伤害+1.',
			sgscq_guanyu: '关羽',
			sgscq_zhangfei: '张飞',
			sgscq_duyou: '督邮',
			sgscq_dongzhuo: '董卓',
			sgscq_zhangjiao: '张角',
			sgscq_zhangbao: '张宝',
			sgscq_mayuanyi: '马元义',
			sgscq_gaosheng: '高升',
			sgscq_peiyuanshao: '裴元绍',
			sgscq_bocai: '波才',
			//-------------------------------魔张角
			scmo_zhangjiao: '魔张角',
			scmo_zhangjiao_prefix: '魔',
			// 'scmo_zhangjiao_ab':'张角',
			sgscq_moleiji: "魔雷",
			'#sgscq_moleiji1': '雷公助我!',
			'#sgscq_moleiji2': '驱雷掣电!',
			sgscq_moleiji_info: "结束阶段,你可以进行一次判定,若结果为黑色,则你对一名其他角色造成一点雷电伤害.每当你造成1点雷电伤害后,你可以回复1点体力或摸一张牌.",
			sgscq_guidao: '鬼道',
			'#sgscq_guidao1': '道士所向,皆由我控.',
			'#sgscq_guidao2': '哼哼,天意如此.',
			sgscq_guidao_info: '一名角色的判定牌生效前,你可以打出一张黑色牌替换之.',
			sgscq_leiji: "雷击",
			sgscq_leiji_info: "当你使用或打出一张闪时,你可以进行一次判定,若结果为黑色,则你对一名其他角色造成一点雷电伤害.",
			sgscq_dujie: "渡劫",
			'#sgscq_dujie1': '苍天已死,黄天当立.',
			sgscq_dujie_info: "出牌阶段,你可以将一张♠️️或♥️️手牌当做闪电对自己使用.锁定技,若你判定区有闪电,则视为你拥有<雷击>;每当你累积造成或受到雷电伤害5点后,你增加一点体力上限,并回复一点体力,永久获得<雷击>.\t ",
			scsp_zhangjiao: 'SP张角',
			scsp_zhangjiao_prefix: 'SP',
			schao_diaochan: '圣诞貂蝉',
			schao_diaochan_prefix: 'YB圣诞',
			schao_diaochan_ab: 'YB圣诞貂蝉',
			sgscq_huangjinleishi: '黄巾雷使',
			sgscq_nanhualaoxian: '南华老仙',
			////-------------------------酒池肉林-----------------------------//
			sgscq_liuxie: '刘协',
			//-------------------------------魔董卓
			scmo_dongzhuo: '魔董卓',
			scmo_dongzhuo_prefix: '魔',
			// 'scmo_dongzhuo_ab':'董卓',
			sgscq_mobenghuai: '血宴',
			'#sgscq_mobenghuai1': '酒池肉林,其乐无穷,呵呵呵哈哈哈…',
			sgscq_mobenghuai_info: '限定技,出牌阶段,你可以选择任意名角色并失去等量体力上限,令这些角色各增加三点体力上限,并回复三点体力,所有其他角色获得【崩坏】.',//初版
			// 'sgscq_mobenghuai_info':'当场上有角色阵亡时,你可以选择至多X名角色,令他们各增加一点体力上限并回复一点体力,所有其他角色获得【崩坏】.',//2.0
			// 'sgscq_mobenghuai_info':'限定技,当一名角色濒死时,你可移除其任意点体力上限令等量角色增加一点体力上限,而后因此增加体力上限的角色获得【崩坏】.',//魔王设计
			sgscq_sunjian: '孙坚',
			sgscq_yuanshao: '袁绍',
			sgscq_lvbu: '吕布',
			sgscq_zumao: '祖茂',
			//-------------------------------华雄
			sgscq_huaxiong: '华雄',
			sgscq_moyaowu: '耀武',
			'#sgscq_moyaowu1': '大人有大量,不和你计较.',
			'#sgscq_moyaowu2': '哼,先让你尝点甜头.',
			sgscq_moyaowu_info: '锁定技,当你造成或受到伤害时,若为卡牌伤害且此牌为红色,伤害来源回复一点体力,否则你摸一张牌.',
			sgscq_hengdao: '横刀',
			'#sgscq_hengdao1': '潘凤已被我斩了,谁还来领死.',
			sgscq_hengdao_info: '当场上其他角色即将受到伤害时,若其体力值小于你,你可以将受伤角色改为你.',
			sgscq_yuanshu: '袁术',
			sgscq_gongsunzan: '公孙瓒',
			sgscq_zhaoyun: '赵云',
			sgscq_panfeng: '潘凤',
			sgscq_wangyun: '王允',
			sgscq_diaochan: '貂蝉',
			sgscq_xuchu: '许褚',
			sgscq_caiwenji: '蔡文姬',
			schao_guanyu: '财神关羽',
			schao_guanyu_prefix: 'YB财神',
			schao_guanyu_ab: 'YB财神关羽',
			sgscq_dongbai: '董白',
			sgscq_lijue: '李傕',
			sgscq_guosi: '郭汜',
			sgscq_niufu: '牛辅',
			sgscq_yuanji: '袁姬',
			sgscq_liru: '李儒',
			//-------------------------------魔贾诩
			scmo_jiaxu: '魔贾诩',
			scmo_jiaxu_prefix: '魔',
			// 'scmo_jiaxu_ab':'贾诩',
			sgscq_moluanwu: '乱武',
			'#sgscq_moluanwu1': '哭喊吧,哀求吧,挣扎吧,死吧!',
			'#sgscq_moluanwu2': '哈哈哈哈哈哈哈哈哈哈…',
			sgscq_moluanwu_info: '转换技:阴,出牌阶段限一次,阳,当你受到伤害后.你可以令一名其他角色对你指定的令一名角色使用一张杀,若其不杀或不能杀,则其失去一点体力.',
			sgscq_moluanwux: '乱武',
			sgscq_moluanwux_info: '出牌阶段限一次,或当你受到伤害后.你可以令一名其他角色对你指定的令一名角色使用一张杀,若其不杀或不能杀,则其失去一点体力.',
			sgscq_weimu: '帷幕',
			'#sgscq_weimu1': '这乱世之中,何曾有过我漏算之事.',
			sgscq_weimu_info: '锁定技.①你不能成为黑色锦囊牌的目标.②当你于回合内受到伤害时,你防止此伤害并摸2X张牌(X为伤害值).',
			////-------------------------江东人杰-----------------------------//
			sgscq_sunce: '孙策',
			sgscq_taishici: '太史慈',
			sgscq_zhouyu: '周瑜',
			jacken_yingzi: '英姿',
			'#jacken_yingzi1': '既生瑜,何生亮？',//正常来说,这种槽点满满的语音不会暴露出来,因为路径都改了
			jacken_yingzi_info: '锁定技,摸牌阶段,你多摸一张牌;你于回合内获得的牌不计入手牌上限.',
			sczs_yingzi: '英姿',
			sczs_yingzi_info: '锁定技,摸牌阶段,你多摸一张牌;当你于回合内获得牌后,本回合你的手牌上限+1.',
			jacken_fanjan: '反间',
			'#jacken_fanjan1': '挣扎吧~',
			'#jacken_fanjan2': '痛苦吧!',
			jacken_fanjan_info: '出牌阶段限一次,你可以摸至多两张牌,令一名其他角色获得你等量的手牌并展示之,你选择一项:1.令其失去x点体力;2.对其造成一点伤害,摸两张牌.(x为展示牌的颜色数)',
			sgscq_daqiao: '大乔',
			sczs_guose: '国色',
			'#sczs_guose1': '伯符,你死哪去了？',
			sczs_guose_info: '每轮限一次,当你失去一张牌后,你可以将此牌当【乐不思蜀】置入一名其他角色的判定区.',
			sczs_liuli: '流离',
			'#sczs_liuli1': '交给你了.',
			'#sczs_liuli2': '你来嘛~~',
			sczs_liuli_info: '每回合限一次,当你成为【杀】、【决斗】或【火攻】的目标时,你可以弃置一张牌,并将此牌转移给你攻击范围内的另一名其他角色,若此牌未造成伤害,该角色对牌的使用者造成一点伤害.',
			sgscq_xiaoqiao: '小乔',
			sgscq_tianxiang: '天香',
			'#sgscq_tianxiang1': '不怕你哟~',
			'#sgscq_tianxiang2': '替我挡着.',
			// 'sgscq_tianxiang_info':'当你即将受到伤害时,你可以弃置一张牌并在此伤害结算完后,使你与最终受到伤害的角色摸X张牌,X为最终受到伤害的角色最后的已损体力值.你进行一次判定,若结果为♠️️,你将此伤害转移给一名其他角色,并使此伤害改为雷.',
			// 'sgscq_tianxiang_info':'转换技,当你即将受到伤害时,你可以弃置一张♠️️牌防止之.:阳,你将此牌当【闪电】置入其他角色判定区,获得其一张手牌;阴,你将此牌盖在牌堆顶,从牌堆底摸一张牌.当场上有其他角色的♠️️牌因判定或弃置而进入弃牌堆时,你可以获得之.',
			sgscq_tianxiang_info: '当你即将受到伤害时,你可以弃置一张♠️️牌防止之.你需①将此牌当【闪电】置入场上角色判定区;②或将此牌盖在牌堆顶,从牌堆底摸一张牌.',
			sgscq_jiaoyan: '娇颜',
			'#sgscq_jiaoyan1': '公瑾,你死哪里去了？',
			sgscq_jiaoyan_info: '锁定技,你的♥️️牌均视为♠️️.当场上有其他角色的♠️️牌因判定或弃置而进入弃牌堆时,你可以获得之.',
			sczs_tianxiang: '天香',
			sczs_tianxiang_info: '每回合限一次,当你受到伤害时,你可以弃置一张牌,将此伤害转移给一名其他角色.若其手牌中有牌与弃置牌花色相同,其失去一点体力.',
			sczs_hongyan: '红颜',
			sczs_hongyan_info: '当你失去♥️️牌后,你可将此牌交给一名其他角色,该角色下个回合结束时,若此牌不在其区域内,你受到一点伤害.',
			sgscq_daxiaoqiao: '大小乔',
			scsp_yanbaihu: 'SP严白虎',
			scsp_yanbaihu_prefix: 'SP',
			// 'scsp_yanbaihu_ab':'严白虎',
			jili_yuan: '寄篱',
			jili_yuan_info: '每回合限一次,当有角色成为一张牌的目标时,若你在其攻击范围内,且你既不是此牌的使用者也不是目标,你可以选择也成为此牌的目标.',
			zhidao_yuan: '雉盗',
			zhidao_yuan_info: '结束阶段,若你本回合未造成过伤害,你可以选择一名其他角色,你获得其手牌区、装备区、判定区各一张牌.',
			zhidaox_yuan: '雉盗',
			zhidaox_yuan_info: '结束阶段,若你本回合未造成过伤害,你可以选择一名距离为1(经过检查代码发现并没有限制距离)的其他角色对其造成一点伤害,你获得其手牌区、装备区、判定区各一张牌.',
			sgscq_wufuren: '吴夫人',
			sgscq_wuguotai: '吴国太',
			sgscq_sunshangxiang: '孙尚香',
			sgscq_shinvduizhang: '侍女队长',
			sgscq_yuji: '于吉',
			sgscq_lingtong: '凌统',
			sgscq_lingcao: '凌操',
			sgscq_dujin: '独进',
			sgscq_dujin_info: '出牌阶段开始时或当你受到伤害后,你可以摸X张牌(X为你已损体力值且至少为1,至多为5),可以弃置Y张牌对当前回合角色造成一点伤害(Y为你至其的距离).',
			sgscq_bulianshi: '步练师',
			sgscq_dahu: '大虎',
			sgscq_xiaohu: '小虎',
			sgscq_luxun: '陆逊',
			sczs_lianying: '連營',
			sczs_lianying_info: '鎖定技,當你於出牌階段使用【殺】或錦囊牌僅指定一名角色爲目標時,橫置該角色.若其已橫置,你選擇一項:1.摸一張牌;2.將此牌造成的傷害改爲火焰傷害.',
			sczs_qianxun: '謙遜',
			sczs_qianxun_info: '結束階段,你可以視爲使用一張本回合進入棄牌堆的基本牌或普通錦囊牌.',
			sgscq_luji: '陆绩',
			sgscq_zhuzhi: '朱治',
			schao_yuanji: '软妹袁姬',
			schao_yuanji_ab: 'YB软妹袁姬',
			schao_yuanji_prefix: 'YB软妹',
			schao_sunjian: '大圣孙坚',
			schao_sunjian_ab: '大圣孙坚',
			schao_sunjian_prefix: '大圣',
			sgscq_luyan: '陆延',
			sczs_jueyi: '决意',
			sczs_jueyi_info: '出牌阶段开始时,你可以失去一点体力,弃置一名其他角色区域内各一张牌.',
			sczs_huailing: '怀灵',
			sczs_huailing_info: '转换技,阳:当其他角色的牌于你的回合进入弃牌堆时,你可以获得之;阴:当你的牌于回合外进入弃牌堆时,你可以摸一张牌,弃置一张同花色的牌获得此牌.',
			sczs_yizhi: '遗志',
			sczs_yizhi_info: '锁定技,你死亡时,上一个使用牌指定你为目标的其他角色翻面.',
			////-------------------------白门楼-----------------------------//
			//-------------------------------魔貂蝉
			scmo_diaochan: '魔貂蝉',
			scmo_diaochan_prefix: '魔',
			// 'scmo_diaochan_ab':'貂蝉',
			sgscq_molijian: '离间',
			'#sgscq_molijian1': '将军,看呆了吗？',
			'#sgscq_molijian2': '将军,这些都赏给妾身,好不好嘛？',
			// 'sgscq_molijian_info':'出牌阶段限一次,你可以令一名其它角色对令一名你选择的角色使用一张杀,若其不执行则失去一点体力.',
			sgscq_molijian_info: '出牌阶段限一次,你可以弃置一张牌,依次选择两名其他角色(A,B),令A对B造成一点伤害,你可以再弃一张牌,令B对A造成一点伤害.',
			sgscq_mobiyue: '闭月',
			'#sgscq_mobiyue1': '哼~嗯~~~呵呵…',
			sgscq_mobiyue_info: '结束阶段,你可以摸4-Y张牌 (至少为1),Y为你当前手牌中的花色数.',
			sgscq_jiaxu: '贾诩',
			sgscqshen_caocao: '神曹操',
			sgscqshen_caocao_prefix: '神',
			sgscqshen_lvbu: '神吕布',
			sgscqshen_lvbu_prefix: '神',
			sgscq_caoang: '曹昂',
			sgscq_dianwei: '典韦',
			sczs_qiangxi: '强袭',
			'#sczs_qiangxi1': '吃我一戟!',
			'#sczs_qiangxi2': '取你小命!',
			sczs_qiangxi_info: '出牌阶段限一次,你可以失去一点体力或将一张装备牌移出游戏,对一名攻击范围内的其他角色造成一点伤害.你获得你以此法移出游戏的装备牌的技能.',
			sgscq_hucheer: '胡车儿',
			sgscq_gaoshun: '高顺',
			sgscq_chengong: '陈宫',
			sgscq_caohong: '曹洪',
			sgscq_bianhuanghou: '卞皇后',
			sgscq_mizhu: '糜竺',
			sgscq_sunqian: '孙乾',
			sgscq_zhangliao: '张辽',
			sczs_tuxi: '突袭',
			'#sczs_tuxi1': '那来吧!',
			'#sczs_tuxi2': '没想到吧!',
			sczs_tuxi_info: '摸牌阶段,你可以改为获得至多两名角色的各一张手牌,对其中一名角色造成一点伤害.',
			sczs_tuxix: '突袭',
			sczs_tuxix_info: '摸牌阶段,你可以改为获得至多两名角色的各一张牌,可以对其中一名角色造成一点伤害.',
			sgscq_lvlingqi: '吕玲绮',
			////-------------------------官渡之战-----------------------------//
			scsp_yuanshao: 'SP袁绍',
			scsp_yuanshao_prefix: 'SP',
			sgscq_caocao: '曹操',
			sgscq_guotu: '郭图',
			sgscq_tianfeng: '田丰',
			sgscq_jushou: '沮授',
			jianying_yuan: '渐营',
			jianying_yuan_info: '游戏开始时,你获得一枚<渐>标记.准备阶段,你获得两枚<渐>标记.当你于回合内使用牌时,可以弃置一枚<渐>并摸一张牌;若此牌与你使用的上一张牌点数或花色相同,你获得一枚<渐>.出牌阶段,你的出杀次数+x.(x为<渐>的数量且至多为3)',
			shibei_yuan: '矢北',
			shibei_yuan_info: '锁定技,每回合限一次,当你受到伤害后,若你有<渐>,移除一枚<渐>,回复一点体力并摸一张牌.',
			sgscq_guojia: '郭嘉',
			sgscq_yanliang: '颜良',
			sgscq_wenchou: '文丑',
			sgscq_yanwen: '颜良文丑',
			//-------------------------------张郃
			sgscq_zhanghe: '张郃',//√
			sgscq_shenqiaobian: '巧变',//夜白版
			'#sgscq_shenqiaobian1': '万物皆有变换,岂能长久乎？',
			'#sgscq_shenqiaobian2': '福祸相依,吾且看之.',
			sgscq_shenqiaobian_info: '当你即将进行判定,摸牌,出牌,弃牌阶段时,你可以弃一张牌跳过之,<br>若你判定阶段被跳过,且你判定区内没有牌,你可执行一次跳摸牌或出牌的效果<br>若你摸牌阶段被跳过,你可以指定至多两名其他角色,获得他们各一张手牌<br>若你出牌阶段被跳过,你可以移动场上一张牌<br>若你弃牌阶段被跳过,且你手牌数不大于手牌上限,你摸一张牌',
			sczs_qiaobian: '巧变',//朝拾版
			sczs_qiaobian_info: '摸牌阶段,你可以少摸一张牌并获得一名其他角色的一张手牌.此牌进入弃牌堆时,若当前回合角色:为你,你可以弃置其他角色的一张牌;不为你,结束此阶段.',
			sczs_zhouxuan: '周旋',
			sczs_zhouxuan_info: '限定技,出牌阶段,你可以令你所有牌均视为<巧变>牌直到你下个回合开始.',
			sgscq_zhoucang: '周仓',
			sgscq_guanping: '关平',
			sgscq_zhuling: '朱灵',
			sgscq_litong: '李通',
			////-------------------------荆襄之地-----------------------------//
			sgscq_liubiao: '刘表',
			sgscq_yiji: '伊籍',
			sgscq_zhugeliang: '诸葛亮',
			sgscq_huangyueying: '黄月英',
			sgscqshen_zhaoyun: '神赵云',
			sgscqshen_zhaoyun_prefix: '神',
			jacken_longhun: '龙魂',
			jacken_longhun_info: '每回合各限一次,你可以将<b>两张基本牌当任意普通锦囊牌/一张非基本牌当任意基本牌</b>使用或打出并摸一张牌.',
			jacken_zhanjiang: '斩将',
			jacken_zhanjiang_info: '锁定技,你的手牌上限+2;你使用的【杀】无视目标防具.游戏开始时,你废除装备区和判定区.',
			jacken_juejing: '绝境',
			jacken_juejing_info: '锁定技,每轮至多x次,出牌阶段开始时,你进行一次判定,若判定结果与你本回合上一次以此法判定的结果花色不同:你摸两张牌,本回合计算与其他角色距离-1,且你于出牌阶段结束后获得一个额外的出牌阶段(x为场上存活角色数且至多为7).',
			sgscq_xiahouen: '夏侯恩',
			sgscq_ganfuren: '甘夫人',
			sgscq_mifuren: '糜夫人',
			sgscq_xushu: '徐庶',
			sgscq_jianyong: '简雍',
			//-------------------------------魔夏侯惇
			scmo_xiahoudun: '魔夏侯惇',
			scmo_xiahoudun_prefix: '魔',
			// 'scmo_xiahoudun_ab':'夏侯惇',
			sgscq_moganglie: '激愤',
			sgscq_moganglie_info: '出牌阶段开始时,你可以失去任意点体力,并获得等量<勇>;当你受到伤害后,你可以获得等量枚<勇>;当你造成伤害时,若你有<勇>标记,则你需移去一枚<勇>,回复一点体力,并令此伤害+1.',
			schao_huangyueying: '芽间月英',
			schao_huangyueying_ab: 'YB芽间黄月英',
			schao_huangyueying_prefix: 'YB芽间',
			////-------------------------曹魏锦绣-----------------------------//
			sgscq_zhenji: '甄姬',
			sgscq_caopi: '曹丕',
			sczs_fangzhu: '放逐',
			sczs_fangzhu_info: '游戏开始时,全场角色各获得一个<逐>.准备阶段或当你受到伤害后,你可移除一名角色的<逐>并选择一项:1.令一名没有<逐>的角色获得一枚<逐>,2.其翻面.',
			sczs_xingshang: '行殇',
			sczs_xingshang_info: '锁定技,翻面角色的上家或下家被<杀>指定后,其也成为此<杀>的目标;翻面角色阵亡时,你获得其所有牌.',
			sczs_songwei: '颂威',
			sczs_songwei_info: '主公技,魏势力角色翻面或横置时,你可以摸一张牌.',
			sgscq_caozhi: '曹植',
			jacken_luoying: '落英',
			'#jacken_luoying1': '今朝有酒今朝醉.',
			'#jacken_luoying2': '得酒诗自成.',
			jacken_luoying_info: '锁定技,<span class=firetext>当你使用牌造成伤害后/当你受到伤害后</span>,你随机从弃牌堆中获得一张与<span class=yellowtext>此牌/造成伤害的牌</span>花色不同的非基本牌.',
			jacken_jiushi: '酒诗',
			'#jacken_jiushi1': '感物伤我怀,抚心长太息.',
			jacken_jiushi_info: '限定技,当你进入濒死状态时,你可以依次获得如下效果:增加一点体力上限、将体力值回复至三点体力、摸三张牌.你修改<落英>',
			jacken_luoying_rewrite: '落英·改',
			jacken_luoying_rewrite_info: '锁定技,你使用的黑色牌不能被响应.<span class=firetext>当你使用牌造成伤害后/当你受到伤害后</span>,你随机从牌堆或弃牌堆中获得一张与<span class=yellowtext>此牌/造成伤害的牌</span>花色不同的非基本牌.',
			sgscq_lidian: '李典',
			sgscq_xunyou: '荀攸',
			sgscq_chengyu: '程昱',
			sczs_shefu: '设伏',
			'#sczs_shefu1': '曹公智略乃上天所受,宜宣帝王之威行王霸之事.',
			'#sczs_shefu2': '如此天网,谅你插翅也难逃.',
			sczs_shefu_info: '每轮游戏开始时,你需重新选择一名角色并指定一种类型的牌.当该角色于本轮游戏中使用你指定的类型的牌时,无效此牌并造成一点伤害,你摸两张牌.',//,若此时为其的出牌阶段,则结束此阶段
			sczs_shefu_buff: '设伏',
			'#sczs_shefu_buff1': '你逃不掉的.',
			sczs_shefu_buff_info: '设伏成功语音',
			sgscq_xizhicai: '戏志才',
			sgscq_yuejin: '乐进',
			jacken_xiaogo: "骁果",
			jacken_xiaogo_info: "每回合限一次,当一名角色使用或打出基本牌后,你可以摸一张牌并选择一项:1.依次重铸你区域内的两张牌;2.弃置其一张牌;3.交给该角色一张牌.",
			sgscq_xinxianying: '辛宪英',
			sgscq_zhongjian: '忠鉴',
			'#sgscq_zhongjian1': '想要看焰火吗？',
			'#sgscq_zhongjian2': '燎原烈火!',
			sgscq_zhongjian_info: '出牌阶段限两次,你可以展示一张手牌,展示一名其他角色的一张手牌,若两张牌花色:相同且此分支本回合未触发过,你对其造成一点火焰伤害,不同且此分支本回合未触发过,你获得对方展示的牌.',
			sgscq_caishi: '才识',
			'#sgscq_caishi1': '我已找回我自己,我就是我的归宿.',
			sgscq_caishi_info: '锁定技,你展示过的牌不计入手牌上限;当你失去一张展示过的牌时,你回复一点体力.',
			// 'sgscq_caishix':'才识',
			// 'sgscq_caishix_info':'锁定技,你展示过的牌不计入手牌上限;当你失去一张展示过的牌时,若你手牌中没有展示过的牌,你回复一点体力,重置忠鉴.',
			sgscq_caishi_tag: '才识',
			schao_xiahoushi: '采樵夏侯氏',
			schao_xiahoushi_ab: 'YB采樵夏侯氏',
			schao_xiahoushi_prefix: 'YB采樵',
			sgscq_xiahoudun: '夏侯惇',
			sgscq_yujin: '于禁',
			sgscq_xuhuang: '徐晃',
			sgscq_zuoci: '左慈',
			sgscq_beimihu: '卑弥呼',
			sgscq_fuhuanghou: '伏皇后',
			sgscq_fuwan: '伏完',
			scsp_caiwenji: 'SP蔡文姬',
			scsp_caiwenji_prefix: 'SP',
			////-------------------------赤壁之战-----------------------------//
			sgscq_sunquan: '孙权',
			sgscqshen_zhouyu: '神周瑜',
			sgscqshen_zhouyu_prefix: '神',
			sgscq_qinyin: '琴音',
			sgscq_qinyin_info: '当你一次性失去至少两张牌时,你可以令全场各回复一点体力或失去一点体力.',
			sgscq_guqu: '顾曲',
			sgscq_guqu_info: '<input type="button" value="结阵技" onclick="alert(get.translation(\'sgscq_jiezhenji_info\'))">,场上角色摸牌阶段即将摸牌时,你可以弃置至多两张手牌,令其多摸或少摸等量牌,该角色每满足以下一项,你摸一张牌:你的手牌数为0,该角色与你同阵列且你为阵眼.',
			sgscq_guqux: '顾曲',
			sgscq_guqux_info: '<input type="button" value="结阵技" onclick="alert(get.translation(\'sgscq_jiezhenji_info\'))">,场上角色摸牌阶段即将摸牌时,你可以观看其即将摸的牌,将其中至多两张弃置,你选择等量手牌,视为其本次摸得,该角色每满足以下一项,你摸一张牌:你的手牌数为0,该角色与你同阵列且你为阵眼.',
			schao_xiaoqiao: '学妹小乔',
			schao_xiaoqiao_ab: 'YB学妹小乔',
			schao_xiaoqiao_prefix: 'YB学妹',
			sgscq_huanggai: '黄盖',
			sczs_kuroux: '苦肉',
			sczs_kuroux_info: '<input type="button" value="结阵技" onclick="alert(get.translation(\'sgscq_jiezhenji_info\'))">,每回合限一次,一名其他角色即将造成伤害时,你可以获得其一张牌,将此伤害转移给自己.当你掩护阵内角色时,不受次数限制.',
			sczs_kurou: '苦肉',
			'#sczs_kurou1': '请鞭挞我吧,公瑾.',
			'#sczs_kurou2': '再来!',
			sczs_kurou_info: '每回合限一次,一名其他角色即将造成伤害时,你可以获得其一张牌,将此伤害转移给自己.',
			sczs_kuroul: '苦肉',
			sczs_kuroul_info: '每回合限一次,当其他角色即将受到伤害时,你可以获得其两张牌,将伤害转移给自己.',
			sczs_zhaxiang: '诈降',
			'#sczs_zhaxiang1': '赴汤蹈火在所不辞.',
			sczs_zhaxiang_info: '限定技,当你受到伤害后,你可以将武将牌横置.若如此做,你令至多x+2名其他角色进入横置状态,从你开始,所有横置角色依次受到一点由你造成的火焰伤害.(x为你本局游戏受到伤害的次数)',
			sczs_zhaxiangx: '诈降',
			sczs_zhaxiangx_info: '限定技,准备阶段,你可以将武将牌横置.若如此做,你令至多x名其他角色进入横置状态,从你开始,所有横置角色依次受到一点由你造成的火焰伤害.(x为你当前已损体力值)',
			scdi_caocao: '魏武帝',
			scdi_caocao_ab: '帝曹操',
			scdi_caocao_prefix: '帝',
			sczs_hujia: '护驾',
			sczs_hujia_info: '每回合限一次,当你成为伤害牌或【铁索连环】的目标时,你可令至多两名角色各重铸一张牌,若其中有牌点数大于此牌,则此牌对你无效.',
			sczs_shilin: '势临',
			sczs_shilin_info: '每名角色的结束阶段,你可令任意名本回合失去过牌的角色各摸一张牌.',
			sczs_zhengfeng: '争锋',
			sczs_zhengfeng_info: '其他角色的出牌阶段,其可将一张手牌当无距离限制的【杀】对你使用.',
			scnb_guanyu: '界关羽',
			scnb_guanyu_prefix: '界',
			sgscq_ganning: '甘宁',
			schao_lingtong: '枪骑凌统',
			schao_lingtong_ab: 'YB枪骑凌统',
			schao_lingtong_prefix: 'YB枪骑',
			sgscq_zhangzhao: '张昭',
			sgscq_zhanghong: '张纮',
			sgscq_lusu: '鲁肃',
			sgscq_caimao: '蔡瑁',
			sgscq_zhangyun: '张允',
			sgscq_jianggan: '蒋干',
			sgscq_pangtong: '庞统',
			sgscq_lvmeng: '吕蒙',
			sgscq_xunyu: '荀彧',
			sgscq_zhugejin: '诸葛亮',
			sgscq_zhoutai: '周泰',
			////-------------------------攻取西蜀-----------------------------//
			sgscq_liufeng: '刘封',
			sgscq_huangzhong: '黄忠',
			sgscq_weiyan: '魏延',
			sgscq_fazheng: '法正',
			sgscq_yanyan: '严颜',
			sczs_juzhan: '拒战',
			sczs_juzhan_info: '转换技,阳:你使用牌时,获得目标角色一张牌;阴:你成为牌的目标后,摸一张牌.若此牌为【杀】,则本回合你与其不能对对方使用牌.',
			sgscq_mengda: '孟达',
			sgscq_wulan: '吴兰',
			sgscq_xiahouyuan: '夏侯渊',
			sgscq_caoren: '曹仁',
			sgscq_maliang: '马良',
			sczs_xiemu: '协穆',
			sczs_xiemu_info: '出牌阶段限一次,你可以弃置一张牌并选择至多两名势力不同且没有<穆>的其他角色,你令这些角色获得<穆>标记.',
			sczs_naman: '纳蛮',
			sczs_naman_info: '其他角色使用或打出牌时,若其有<穆>标记,你可移除<穆>令此牌无效且你获得之.你选择一项:摸一张牌;弃置其一张牌.',//待定
			sczs_naman_append: '打出的牌不能被无效这不是bug,这是机制.',
			scsp_sunshangxiang: 'SP孙尚香',
			scsp_sunshangxiang_prefix: 'SP',
			schao_shinvduizhang: '电玩侍女',
			schao_shinvduizhang_ab: 'YB电玩侍女队长',
			schao_shinvduizhang_prefix: 'YB电玩',
			sgscq_yufan: '虞翻',
			sgscq_xiahoushi: '夏侯氏',
			sgscq_yanyu: '燕语',
			'#sgscq_yanyu1': '其实我饭量很小.',
			sgscq_yanyu_info: '场上角色的出牌阶段开始时,你可以摸一张牌,将一张牌盖在武将牌上称为<燕语>;你的出牌阶段开始时,你可以用任意手牌交换等量<燕语>(此步骤在前一效果之后.);当场上使用一张与<燕语>类型相同的牌后,你可以立即将一张该类型<燕语>当做此牌使用,若你手牌数小于体力上限,你摸一张牌.',
			sgscq_yanyu_use: '燕语',
			'#sgscq_yanyu_use1': '开战啦.',
			'#sgscq_yanyu_use2': '进攻!',
			sgscq_yanyu_use_info: '当场上使用一张与<燕语>类型相同的牌后,你可以立即将一张该类型<燕语>当做此牌使用,若你手牌数小于体力上限,你摸一张牌.',
			//-------------------------------马超
			sgscq_machao: '马超',//√
			sgscq_suoding: '锁定',
			sgscq_suoding_info: '锁定技,你计算与装备区有防具或加一马的角色的距离时,视为1.',
			sgscq_qiongsha: '穷杀',
			sgscq_qiongsha_info: '出牌阶段,你可以弃置一张非【杀】牌,印一张杀.锁定技,每当你出牌阶段开始时或你使用【杀】造成伤害时,你获得一次印牌机会.',
			sgscq_zhuiji: '追击',
			sgscq_zhuiji_info: '锁定技,当你使用【杀】指定目标后,记录目标角色(覆盖上次记录);你使用的下一张【杀】指定记录目标时无次数限制.',
			sgscq_wangyi: '王异',
			sgscq_madai: '马岱',
			////--------------------------夷陵之战-----------------------------//
			scdi_liubei: '昭烈帝',
			scdi_liubei_ab: '帝刘备',
			scdi_liubei_prefix: '帝',
			schao_luxun: '兵长陆逊',
			schao_luxun_ab: 'YB兵长陆逊',
			schao_luxun_prefix: 'YB兵长',
			sgscqshen_guanyu: '神关羽',
			sgscqshen_guanyu_prefix: '神',
			//-------------------------------魔张飞
			scmo_zhangfei: '魔张飞',
			scmo_zhangfei_prefix: '魔',
			// 'scmo_zhangfei_ab':'张飞',
			sgscq_haoyi: '豪义',
			sgscq_haoyi_info: '每回合限一次,出牌阶段开始时或当你受到伤害时,你可以摸X张牌(X初始为1,每发动一次便+1,至多为4).若如此做,此回合结束时,你需选择①令当前回合角色回复一点体力;②交给当前回合角色Y张牌(Y为其体力值且至多为5).',
			sgscq_mopaoxiao: '大怒',
			'#sgscq_mopaoxiao1': '犯我必诛!',
			'#sgscq_mopaoxiao2': '杀尽判官,我神归来!',
			'#sgscq_mopaoxiao_zhaolie1': '杀尽判官,我神归来!',
			// sgscq_mopaoxiao_info:'当你受到伤害后,你可以展示手牌,对来源使用手牌中所有的杀.<br>锁定技,当你体力值不大于1时,你所有锦囊手牌均视为杀.',
			sgscq_mopaoxiao_info: '当你受到其他角色的伤害后,你可以对来源使用一张杀(此杀结算过程中,你展开<昭烈领域>至此杀结束)(单次伤害导致的此行为可重复执行3次).<br>你可以将一张锦囊牌当杀使用或打出.<br>锁定技,当你体力值不大于1时,你所有锦囊手牌均视为杀.',
			sgscq_guansuo: '关索',
			sgscq_guanyinping: '关银屏',
			sgscq_kuwangxx: '枯望',
			sgscq_kuwangxx_info: '锁定技,出牌阶段开始时,你需摸一张牌并选择一项:①失去一点体力,本阶段红色手牌均视为火杀且无距离限制,②失去一点体力上限,本阶段黑色手牌均视为雷杀且无次数限制.',
			sgscq_kuwang: '枯望',
			'#sgscq_kuwang1': '这炽热的鲜血,父亲,你可感觉得到？',
			sgscq_kuwang_info: '锁定技,①你的出牌阶段结束时,记录此阶段你使用红色牌和黑色牌的数量(依次记为X,Y)(此技能优先于③);②X,Y初始为0;③场上角色出牌阶段结束时,你可以摸Z张牌,Z为其此阶段使用的红色牌和X、黑色牌和Y相同的数量;④你可以将因③获得的牌当火杀使用或打出,且无次数限制和距离限制.',
			sgscq_xueji: '恨断',
			'#sgscq_xueji1': '取你首级,以祭先父之灵.',
			'#sgscq_xueji2': '看刀!',
			sgscq_xueji_info: '锁定技,①当场上角色使用黑色牌时,你失去一枚<祭>,当场上角色使用红色牌时,你获得两枚<祭>;<br>若你的<祭>标记数不小于6+2A,你需移除所有<祭>,选择至多3名角色,对其各造成一点伤害;<br>A为你已损体力值.<br>②若你体力值不大于3,则将描述中的使用黑色牌的效果改为获得一枚<祭>;<br>若你体力值不大于2,则将描述中使用红色牌的效果改为获得三枚<祭>;<br>若你体力值不大于1,则释放追加效果之后回复一点体力;<br>若你有枯望(手牌变属性杀),则此伤害视为枯望的属性.',
			sgscq_xuejixx: '恨断',
			sgscq_xuejixx_info: '锁定技,①当场上角色使用黑色牌时,你失去一枚<祭>,当场上角色使用红色牌时,你获得两枚<祭>;<br>若你的<祭>标记数不小于6+A,你手牌中的伤害类牌均视为【血祭】<br>;<br>A为你已损体力值.<br>②若你体力值不大于3,则将描述中的使用黑色牌的效果改为获得一枚<祭>;<br>若你体力值不大于2,则将描述中使用红色牌的效果改为获得三枚<祭>;<br>若你体力值不大于1,则使用【血祭】之后回复一点体力;<br>当你使用【血祭】时,你摸两张牌;<br>若你有枯望(手牌变属性杀),则【血祭】伤害视为枯望的属性.',
			sgscq_xuehen: '血祭',
			sgscq_xuehen_info: '出牌阶段或当你受到伤害后,消耗6+A枚<祭>,并指定至多三名角色,对其各造成一点伤害.(A为你已损体力值)',
			sgscq_xuehen_skill: '血祭',
			sgscq_xuehen_skill_info: '出牌阶段或当你受到伤害后,消耗6+A枚<祭>,并指定至多三名角色,对其各造成一点伤害.(A为你已损体力值)',
			sgscq_huatuo: '华佗',
			sgscqshen_lvmeng: '神吕蒙',
			sgscqshen_lvmeng_prefix: '神',
			schao_caopi: '八尺琼曹丕',
			schao_caopi_ab: 'YB八尺琼曹丕',
			schao_caopi_prefix: 'YB八尺琼',
			schao_zhenji: '泳装甄姬',
			schao_zhenji_ab: 'YB泳装甄姬',
			schao_zhenji_prefix: 'YB泳装',
			//-------------------------------孙权
			scdi_sunquan: '吴大帝',
			scdi_sunquan_ab: '帝孙权',
			scdi_sunquan_prefix: '帝',
			sgscq_jiejian: '借箭',
			sgscq_jiejian_info: '当你成为其他角色使用杀或锦囊牌的目标时,你可以进行一次判定,若结果为♣️️或♦️️,则此牌对你无效,同时你立即获得此牌.',
			sgscq_baoxun: '鲍勋',
			sgscq_zhangxingcai: '张星彩',
			scsp_huangzhong: 'SP黄忠',
			sgscq_liaohua: '廖化',
			jacken_dangxian: "当先",
			'#jacken_dangxian1': '先锋,就由老夫来当.',
			'#jacken_dangxian2': '先行破敌!',
			'#jacken_dangxian3': '有老夫在,蜀汉就不会倒下!',
			jacken_dangxian_info: "每轮限一次,一名角色的摸牌阶段结束时,你可以摸三张牌并获得该角色所有牌,交给其等量的牌.若如此做,你执行一个额外的出牌阶段.",
			sgscq_mifang: '糜芳',
			sgscq_sunluban: '孙鲁班',
			sgscq_sunluyu: '孙鲁育',
			sgscq_panzhang: '潘璋',
			sgscq_handang: '韩当',
			sgscq_dingfeng: '丁奉',
			sgscq_heqi: '贺齐',
			sgscq_quancong: '全琮',
			//-------------------------------魔黄盖
			scmo_huanggai: '魔黄盖',
			scmo_huanggai_prefix: '魔',
			// 'scmo_huanggai_ab':'黄盖',
			sgscq_mokurou: '魔袭',
			'#sgscq_mokurou1': '赴汤蹈火在所不辞.',
			'#sgscq_mokurou2': '再来!',
			sgscq_mokurou_info: '出牌阶段限一次,你可以失去一点体力或弃置一张伤害牌,对一名其他角色造成一点伤害.当你以此法选择目标后,非目标的其他角色可以失去一点体力,令此伤害+1,助战名额至多两人.',
			sgscq_mokurouxx: '魔袭',
			sgscq_mokurouxx_info: '<input type="button" value="结阵技" onclick="alert(get.translation(\'sgscq_jiezhenji_info\'))">,出牌阶段限一次,你可以失去一点体力或弃置一张伤害牌,对一名其他角色造成一点伤害.当你以此法选择目标后,同阵列的其他角色可以失去一点体力,令此伤害+1.',
			//-------------------------------魔凌统
			scmo_lingtong: '魔凌统',
			scmo_lingtong_prefix: '魔',
			// 'scmo_lingtong_ab':'凌统',
			sgscq_moxuanfeng: '旋风',
			'#sgscq_moxuanfeng1': '风卷残云!',
			'#sgscq_moxuanfeng2': '叱咤风云!',
			sgscq_moxuanfeng_info: '出牌阶段限一次,你可以弃置两张手牌;当你一次性失去至少两张手牌或当你失去装备区内的牌后,你可以依次弃置至多两名其它角色各一张牌,对其中一名以此法失去牌的角色造成一点伤害.',
			////-------------------------六出祁山-----------------------------//
			sgscq_menghuo: '孟获',
			sczs_huoshou: '禍首',
			sczs_huoshou_info: '游戏开始时,你可以摸至多四张牌,并将4-X张牌标记为<蛮兵>,(X为你的摸牌数).每回合限一次,你使用或打出<蛮兵>牌后,可以将之当作目标至多为此牌点数的【南蛮入侵】使用.',
			sczs_zaiqi: '再起',
			sczs_zaiqi_info: '出牌阶段结束时,若你于此阶段对至少两名其他角色造成过伤害,你可以回复一点体力并选择一项:1.摸一张牌;2.将一张手牌标记为<蛮兵>.',
			sczs_huoshoux: '禍首',
			sczs_huoshoux_info: '每局游戏限一次,当你使用或打出一张牌后,可以将之当作目标至多为此牌点数的【南蛮入侵】使用.',
			sczs_zaiqix: '再起',
			sczs_zaiqix_info: '锁定技,当一张牌对至少两名角色造成伤害后,你选择一项:1.摸一张牌;2.令【祸首】的使用次数+1.若受伤角色包含你,你回复一点体力.',
			sczs_huoshouxx: '禍首',
			sczs_huoshouxx_info: '每局游戏限一次,当你失去一张牌后,可以将之当作目标至多为此牌点数的【南蛮入侵】使用.',
			sczs_zaiqixx: '再起',
			sczs_zaiqixx_info: '锁定技,当一张牌结算结束后,若此牌对至少两名角色造成过伤害,你选择一项:1.摸一张牌;2.令【祸首】的使用次数+1.若受伤角色包含你,你回复一点体力.',
			sczs_huoshouxxx: '禍首',
			sczs_huoshouxxx_info: '限定技,你每回合首次使用或打出一张牌后,可选择一项:1.视为使用一张【南蛮入侵】;2.随机获得两张不同类型的黑色牌.',
			sczs_zaiqixxx: '再起',
			sczs_zaiqixxx_info: '锁定技,当一张牌结算结束后,若此牌对至少两名角色造成过伤害,你摸一张牌;若受伤角色包含你,你回复一点体力;若伤害来源为你,你重置【祸首】.',
			sgscq_zhurong: '祝融',
			scsp_guansuo: 'SP关索',
			scsp_guansuo_prefix: 'SP',
			// 'scsp_guansuo_ab':'关索',
			xiefang_yuan: '撷芳',
			'#xiefang_yuan1': '蛮夷可俘,不可剿.',
			'#xiefang_yuan2': '各位将军,且让小辈先行出战.',
			xiefang_yuan_info: '准备阶段,你可以令一名其他角色弃置你的一张手牌.若如此做,本回合你计算与该角色距离视为1.',
			zhengnan_yuan: '征南',
			'#zhengnan_yuan1': '末将愿承父志,随丞相出征.',
			'#zhengnan_yuan2': '逆贼,可识得关氏之勇.',
			zhengnan_yuan_info: '锁定技,出牌阶段开始时,你从弃牌堆随机获得一张伤害类锦囊牌或【杀】,你可以使用之(不计入次数).此牌结算完成后,若这张牌造成过伤害,你回复一点体力.结束阶段开始时,你摸两张牌,执行一个额外的出牌阶段.',
			sgscq_huaman: '花鬘',
			sgscq_baosanniang: '鲍三娘',
			sgscq_masu: '马谡',
			sgscq_wangping: '王平',
			scsp_jiangwei: 'SP姜维',
			scsp_jiangwei_prefix: 'SP',
			sgscq_liushan: '刘禅',
			sgscq_simayi: '司马懿',
			sgscq_zhangchunhua: '张春华',
			sgscq_manchong: '满宠',
			sgscq_lvqian: '吕虔',
			schao_huangzhong: '射手黄忠',
			schao_huangzhong_ab: 'YB射手黄忠',
			schao_huangzhong_prefix: 'YB射手',
			sgscq_haozhao: '郝昭',
			sgscq_niujin: '牛金',
			schao_xiahouyuan: '跑男夏侯渊',
			schao_xiahouyuan_ab: 'YB跑男夏侯渊',
			schao_xiahouyuan_prefix: 'YB跑男',
			schao_zhangxingcai: '夜夜星彩',
			schao_zhangxingcai_ab: 'YB夜夜张星彩',
			schao_zhangxingcai_prefix: 'YB夜夜',
			schao_wanglang: '圣诞司徒',
			schao_wanglang_ab: 'YB圣诞王朗',
			schao_wanglang_prefix: 'YB圣诞',
			sgscq_guanxing: '关兴',
			sgscq_guanzhang: '关兴张苞',
			////-------------------------星陨五丈原-----------------------------//
			sgscqshen_zhugeliang: '神诸葛亮',
			sgscqshen_zhugeliang_prefix: '神',
			schao_weiyan: '德古拉魏延',
			schao_weiyan_ab: 'YB德古拉魏延',
			schao_weiyan_prefix: 'YB德古拉',
			scsp_machao: 'SP马超',
			scsp_machao_prefix: 'SP',
			sgscqshen_simayi: '神司马懿',
			sgscqshen_simayi_prefix: '神',
			schao_zhangchunhua: '冰雪春华',
			schao_zhangchunhua_ab: 'YB冰雪张春华',
			schao_zhangchunhua_prefix: 'YB冰雪',
			sgscq_dianman: '典满',
			schao_zhurong: '死神祝融',
			schao_zhurong_ab: 'YB死神祝融',
			schao_zhurong_prefix: 'YB死神',
			////-------------------------剑阁死战-----------------------------//
			sgscq_jiangwei: '姜维',
			sczs_tiaoxin: '挑衅',
			'#sczs_tiaoxin1': '放马过来!',
			sczs_tiaoxin_info: '出牌阶段,你可以与一名攻击范围内的其他角色拼点:若你赢,该角色使用牌不能指定除你以外的角色为目标,直到你下个回合开始或你死亡时;若你没赢,你本回合不能再对该角色发动〖挑衅〗.',
			sczs_jizhix: '继志',
			'#sczs_jizhix1': '这仁德之师,维将拼死守护.',
			sczs_jizhix_info: '每回合限一次,当你失去最后的手牌时,你可以发动一次〖观星〗并摸一张牌.',
			sczs_tiaoxinxx: '挑衅',
			sczs_tiaoxinxx_info: '每轮限X次,当一名其他角色使用杀指定另一名其他角色为目标时后,你可以观看其手牌并弃置其中一张,将此杀转移给你.X为你的体力值.',
			sczs_jizhixx: '继志',
			sczs_jizhixx_info: '锁定技.你视为拥有技能〖观星〗,〖八阵〗,〖看破〗',
			sgscq_dengai: '邓艾',
			sczs_tuntian: '屯田',
			sczs_tuntian_info: '锁定技,准备阶段或当你因弃置而失去牌后,你进行一次判定.当你判定后,你获得判定牌并根据结果:若结果不为♥️️️,移除所有其他角色的<怒焰>标记,并令这些角色各失去一点体力,你选择一名没有<怒焰>的角色获得一枚<怒焰>;为♥️️️,你回复一点体力.',
			sczs_zaoxian: '凿险',
			sczs_zaoxian_info: '当其他角色于你的回合内死亡后,你依次进行X次判定(X为该角色体力上限且至多为5).',
			sgscq_zhonghui: '钟会',
			sczs_quanji: '权计',
			// 'sczs_quanji_info':'锁定技,当你受到伤害后,伤害来源获得一枚<怒焰>;当你于回合外因使用或打出而失去手牌后,当前回合角色获得一枚<怒焰>.出牌阶段结束时,你移除所有其他角色的<怒焰>,目标根据其移除的<怒焰>,失去等量体力.',
			sczs_quanji_info: '锁定技,当你受到伤害时,伤害来源获得一枚<怒焰>标记;当你于回合外因使用或打出而失去手牌后,当前回合角色获得一枚<怒焰>标记.出牌阶段结束时,你移除所有其他角色的<怒焰>,令这些角色失去等同于各自移除标记数的体力值.',
			sczs_zili: '自立',
			sczs_zili_info: '锁定技,有<怒焰>的角色的结束阶段,其交给你一张牌.',
			sczs_quanjix: '权计',
			sczs_quanjix_info: '锁定技,当你受到伤害后,伤害来源获得一枚<怒焰>;当你于回合外因使用或打出而失去手牌后,当前回合角色获得一枚<怒焰>.锁定技,出牌阶段结束时,你令有<怒焰>的其他角色移除所有<怒焰>(定义目标为因此移除<怒焰>的角色),根据因此移除<怒焰>的数量执行:不小于1,目标依次失去一点体力;不小于2,目标依次弃置一张牌;不小于4,每对一名目标结算完时,你摸一张牌.',
			sczs_paiyix: '排异',
			sczs_paiyix_info: '锁定技,有<怒焰>的角色的结束阶段,失去一点体力;当有角色死亡时,若没有击杀者,你摸两张牌.',
			sgscq_simazhao: '司马昭',
			sgscq_simayan: '司马炎',
			sgscq_wangyuanji: '王元姬',
			//-------------------------------魔马超
			scmo_machao: '魔马超',
			scmo_machao_prefix: '魔',
			// 'scmo_machao_ab':'马超',
			sgscq_motieji: '誓仇',
			'#sgscq_motieji_audio1': '若能报得血海仇,入魔坠落又何妨？',
			'#sgscq_motieji_zhaolie1': '骁魔鬼骑!',
			'#sgscq_motieji_zhaolie2': '哼,哪里逃!',
			sgscq_motieji_info: '锁定技,当你使用杀时,你展开<昭烈领域>直至此杀结束.(后面不是锁定技)当你受到伤害后,你可以视为对其他至多三名角色使用一张杀.',
			////-------------------------璀璨星河-----------------------------//
			schaoshen_guanyu: '英雄王关羽',
			schaoshen_guanyu_ab: '壕神关羽',
			schaoshen_guanyu_prefix: '壕神',
			schaoshen_zhiwen: '神指纹',
			schaoshen_sailei: '神塞雷',
			schaoshen_dadaobing: '神大刀兵',
			schaoshen_zhongqibing: '神重骑兵',
			schao_xinxianying: '公主宪英',
			schao_xinxianying_ab: 'YB公主辛宪英',
			schao_xinxianying_prefix: 'YB公主',
			sgscq_caishix: '才识',
			sgscq_caishix_info: '锁定技,你展示过的牌不计入手牌上限;当你失去一张展示过的牌时,若你手牌中没有展示过的牌,你回复一点体力,重置忠鉴.',
			schao_sunshangxiang: '天使尚香',
			schao_sunshangxiang_ab: 'YB天使孙尚香',
			schao_sunshangxiang_prefix: 'YB天使',
			sgscq_vipbaby: '至尊小宝',
			sgscq_kongfuaqi: '功夫阿奇',
			sgscq_playertao: '顽皮淘淘',
			sgscq_jjbb: '小鸡哔哔',
			sgscq_bobo: '浣熊波波',
			sgscq_wtdd: '倒霉呆呆',
			sgscq_mystery: '神秘武将',
			//----------------------装备及其他
		},//翻译(必填) 
		dynamicTranslate: {//动态翻译
			jacken_luoying(player) {//落英
				if (player.storage.luoying_rewrite) {
					return '锁定技,你使用的黑色牌不能被响应.<span class=firetext>当你使用牌造成伤害后/当你受到伤害后</span>,你随机从牌堆或弃牌堆中获得一张与<span class=yellowtext>此牌/造成伤害的牌</span>花色不同的非基本牌.';
				}
				return '锁定技,<span class=firetext>当你使用牌造成伤害后/当你受到伤害后</span>,你随机从弃牌堆中获得一张与<span class=yellowtext>此牌/造成伤害的牌</span>花色不同的非基本牌.';
			},
			sgscq_moluanwu(player) {//魔乱舞
				if (player.storage.sgscq_moluanwu == true) {
					return '转换技:阴,出牌阶段限一次,<span class="bluetext">阳,当你受到伤害后</span>.你可以令一名其他角色对你指定的另一名角色使用一张杀,若其不杀或不能杀,则其失去一点体力.';
				}
				return '转换技:<span class="bluetext">阴,出牌阶段限一次</span>,阳,当你受到伤害后.你可以令一名其他角色对你指定的另一名角色使用一张杀,若其不杀或不能杀,则其失去一点体力.';
			},
			sczs_juzhan(player) {//拒战
				if (player.storage.sczs_juzhan == true) {
					return '转换技,<span class="bluetext">阳:你使用牌时,获得目标角色一张牌</span>;阴:你成为牌的目标后,摸一张牌.若此牌为【杀】,则本回合你与其不能对对方使用牌.';
				}
				return '转换技,阳:你使用牌时,获得目标角色一张牌;<span class="bluetext">阴:你成为牌的目标后,摸一张牌</span>.若此牌为【杀】,则本回合你与其不能对对方使用牌.';
			}
		},
	};
	for (var i in sgscq.character) {
		sgscq.character[i][4].push('ext:三国杀传奇/image/' + i + '.jpg');
	}
	for (var i in sgscq.character) {
		sgscq.character[i][4].push('die:ext:三国杀传奇/audio/die/' + i + '.mp3');
	}
	for (var i in sgscq.card) {
		if (!sgscq.card[i].image && !sgscq.card[i].modeimage) sgscq.card[i].image = 'ext:三国杀传奇/image/card/' + i + '.png'
	}
	lib.config.all.characters.add('sgscq');
	lib.config.characters.add('sgscq');
	lib.translate['sgscq_character_config'] = "<span style='color: #28e3ce'>三国杀传奇</span>";
	return sgscq;
}); 

import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '命运线',
		content(config, pack) {
			lib.init.css('extension/命运线/ol/qmbz', 'image');
			lib.init.css('extension/命运线/ol/room', 'ol_jiemian');
			//垃圾武将
			//笑死了,怎么真有垃圾武将啊
			lib.rank.rarity.junk.addArray(['myx_wangrong']);
			//精品武将
			lib.rank.rarity.rare.addArray(['ji_shen_liushan', 'myx_hetaihou', 'myx_yeguanjixiong_huangchengyan', 'myx_caomao', 'dwbj_songshou', 'dwbj_zhaoda']);
			//史诗武将
			lib.rank.rarity.epic.addArray(['myx_liuchen', 'myx_sundeng', 'myx_caocao', 'myx_zhugeguo', 'myx_zuoci', 'myx_puyuan', 'myx_zhugedan', 'myx_weihuacun', 'dwbj_yanwu', 'myx_zhupeilan']);
			//传说武将
			lib.rank.rarity.legend.addArray(['ji_shen_caorui', 'myx_liru', 'myx_zhaoyun', 'myx_jiaxu', 'myx_luxun', 'myx_lukang', 'myx_guojia', 'myx_xunyu', 'myx_simayi', 'myx_zhugeliang', 'myx_jiangwei', 'myx_hulaoguan2022lvbu']);
			lib.translate.ji_shen_caorui = 'M神曹叡';
			lib.translate.ji_shen_liushan = 'M神刘禅';
			lib.translate.myx_liuchen = 'M刘谌';
			lib.translate.myx_sundeng = 'M孙登';
			lib.translate.myx_liru = 'M李儒';
			lib.translate.myx_hetaihou = 'M何太后';
			lib.translate.myx_wangrong = 'M王美人';
			lib.translate.myx_zhugeguo = 'M诸葛果';
			lib.translate.myx_zhaoyun = 'M赵云';
			lib.translate.myx_zuoci = 'M左慈';
			lib.translate.myx_jiaxu = 'M贾诩';
			lib.translate.myx_hulaoguan2022lvbu = '神吕布';
			lib.translate.myx_hulaoguan2022lvbu_boss = '戾火浮屠';
			lib.translate.myx_puyuan = 'M蒲元';
			lib.translate.myx_zhugedan = 'M诸葛诞';
			lib.translate.myx_yeguanjixiong_huangchengyan = 'M黄承彦';
			lib.translate.myx_caomao = 'M曹髦';
			lib.translate.myx_weihuacun = 'M魏华存';
			lib.translate.dwbj_songshou = 'M宋寿';
			lib.translate.dwbj_yanwu = 'M严武';
			lib.translate.myx_zhupeilan = 'M朱佩兰';
			lib.translate.dwbj_zhaoda = 'M赵达';
			lib.translate.myx_zhongyeguanxing_huodong = '仲夜观星';
			lib.translate.myx_cskmt_huodong = '超时空密探';
			lib.translate.olm_boss_shenwuzaishi2022 = '神武再世';
			lib.translate.olm_boss_qimenbazhen2021 = '奇门八阵';
			lib.translate.myx_boss_qinglong2021 = '青龙';
			lib.translate.myx_boss_jiaomujiao2021 = '角木蛟';
			lib.translate.myx_boss_kangjinlong2021 = '亢金龙';
			lib.translate.myx_boss_zhuque2021 = '朱雀';
			lib.translate.myx_boss_yihuoshe2021 = '翼火蛇';
			lib.translate.myx_boss_xingrima2021 = '星日马';
			lib.translate.myx_boss_baihu2021 = '白虎';
			lib.translate.myx_boss_kuimulang2021 = '奎木狼';
			lib.translate.myx_boss_shenshuiyuan2021 = '参水猿';
			lib.translate.myx_boss_xuanwu2021 = '玄武';
			lib.translate.myx_boss_weiyueyan2021 = '危月燕';
			lib.translate.myx_boss_doumuxie2021 = '斗木獬';
			lib.translate.myx_boss_cskmtcc = '曹操';
			lib.translate.myx_boss_cskmtcp = '曹丕';
			lib.translate.myx_boss_cskmtcr = '曹叡';
			lib.translate.myx_boss_cskmtcs = '曹嵩';
			lib.translate.myx_boss_cskmtcm = '曹髦';
			lib.translate.myx_boss_cskmtsq = '孙权';
			lib.translate.myx_boss_cskmtsx = '孙休';
			lib.translate.myx_boss_cskmtsc = '孙策';
			lib.translate.myx_boss_cskmtsl = '孙亮';
			lib.translate.myx_boss_cskmtsh = '孙皓';
			lib.translate.myx_cskmt_mitan = '密探';
			lib.translate.myx_boss_cskmtlb = '刘备';
			lib.translate.myx_boss_cskmtls = '刘禅';
			lib.translate.myx_boss_cskmtlc = '刘谌';
			lib.translate.myx_boss_cskmtlf = '刘封';
			lib.translate.myx_boss_cskmtly = '刘永';
			lib.translate.olm_boss_hundun = '混沌';
			lib.translate.olm_boss_qiongqi = '穷奇';
			lib.translate.olm_boss_taotie = '饕餮';
			lib.translate.olm_boss_taowu = '梼杌';
			lib.translate.olm_boss_xiangliu = '相柳';
			lib.translate.olm_boss_zhuyan = '朱厌';
			lib.translate.olm_boss_bifang = '毕方';
			lib.translate.olm_boss_yingzhao = '英招';
			if (config.myx_olwujiangjm) {
				delete lib.characterSort.extra.extra_key;
				delete lib.characterPack.extra.key_kagari;
				delete lib.character.key_kagari;
				delete lib.characterPack.extra.key_shiki;
				delete lib.character.key_shiki;
				delete lib.characterPack.extra.db_key_hina;
				delete lib.character.db_key_hina;
				delete lib.characterSort.standard.standard_2008;
				delete lib.characterSort.standard.standard_2013;
				delete lib.characterSort.standard.standard_2019;
				delete lib.characterPack.standard.gongsunzan;
				//delete lib.character.gongsunzan;
				delete lib.characterPack.standard.re_lidian;
				//delete lib.character.re_lidian;
				delete lib.characterPack.standard.re_xushu;
				delete lib.characterPack.standard.xf_yiji;
				//delete lib.character.re_xushu;
				delete lib.characterPack.shenhua.yl_yuanshu;
				//delete lib.character.yl_yuanshu;
				delete lib.characterPack.sp.yuanshu;
				//delete lib.character.yuanshu;
				delete lib.characterPack.sp.ganfuren;
				//delete lib.character.ganfuren;
				delete lib.characterPack.sp2.sp_liuqi;
				//delete lib.character.sp_liuqi;
				delete lib.characterPack.sp2.caosong;
				//delete lib.character.caosong;
				delete lib.characterPack.sp2.liubian;
				//delete lib.character.liubian;
				delete lib.characterPack.sp2.tangji;
				//delete lib.character.tangji;
				delete lib.characterPack.sp2.liuhong;
				//delete lib.character.liuhong;
				delete lib.characterPack.xinghuoliaoyuan.wangcan;
				//delete lib.character.wangcan;
				delete lib.characterPack.xinghuoliaoyuan.lvqian;
				//delete lib.character.lvqian;
				delete lib.characterPack.sp2.xinpi;
				//delete lib.character.xinpi;
				delete lib.characterPack.sp2.sp_shenpei;
				//delete lib.character.sp_shenpei;
				delete lib.characterPack.sp2.xunchen;
				//delete lib.character.xunchen;
				delete lib.characterPack.sp2.lvkai;
				//delete lib.character.lvkai;
				delete lib.characterPack.xinghuoliaoyuan.panjun;
				//delete lib.character.panjun;
				delete lib.characterPack.xinghuoliaoyuan.yanjun;
				//delete lib.character.yanjun;
				delete lib.characterPack.sp2.mamidi;
				//delete lib.character.mamidi;
				delete lib.characterPack.sp2.lijue;
				//delete lib.character.lijue;
				delete lib.characterPack.sp2.zhangji;
				//delete lib.character.zhangji;
				delete lib.characterPack.sp2.fanchou;
				//delete lib.character.fanchou;
				delete lib.characterPack.sp2.guosi;
				//delete lib.character.guosi;
				delete lib.characterPack.sp2.ol_dingyuan;
				//delete lib.character.ol_dingyuan;
				delete lib.characterPack.sp2.wangshuang;
				//delete lib.character.wangshuang;
				delete lib.characterSort.sp.sp_huben.fanjiangzhangda;
				//delete lib.character.fanjiangzhangda;
				delete lib.characterPack.sp2.liangxing;
				//delete lib.character.liangxing;
				delete lib.characterPack.sp2.huaman;
				//delete lib.character.huaman;
				delete lib.characterPack.sp2.yangwan;
				//delete lib.character.yangwan;
				delete lib.characterPack.yingbian.jin_guohuai;
				//delete lib.character.jin_guohuai;
				delete lib.characterPack.sp2.beimihu;
				//delete lib.character.beimihu;
				delete lib.characterPack.sp2.lvkuanglvxiang;
				//delete lib.character.lvkuanglvxiang;
				delete lib.characterPack.sp.hanba;
				//delete lib.character.hanba;
				delete lib.characterPack.xinghuoliaoyuan.re_jsp_pangtong;
				//delete lib.character.re_jsp_pangtong;
				delete lib.characterPack.sp2.xurong;
				//delete lib.character.xurong;
				delete lib.characterPack.sp2.zhangqiying;
				//delete lib.character.zhangqiying;
				delete lib.characterPack.diy.junk_sunquan;
				delete lib.characterPack.sp2.caoxing;
				delete lib.characterPack.xinghuoliaoyuan.zhoufang;
				delete lib.characterPack.sp2.gaolan;
				delete lib.characterPack.sp2.yanrou;
				lib.translate.myx_junzhu = `<img src="extension/命运线/ol/title/junzhu.png">`;
				lib.translate.myx_zydx = `<img src="extension/命运线/ol/title/zydx.png">`;
				lib.translate.myx_dwdd = `<img src="extension/命运线/ol/title/dwdd.png">`;
				lib.translate.myx_hjry = `<img src="extension/命运线/ol/title/hjry.png">`;
				lib.translate.myx_csrs = `<img src="extension/命运线/ol/title/csrs.png">`;
				lib.translate.myx_bsjg = `<img src="extension/命运线/ol/title/bsjg.png">`;
				lib.translate.myx_mzys = `<img src="extension/命运线/ol/title/mzys.png">`;
				lib.translate.myx_biaozhunqita = `<img src="extension/命运线/ol/title/qita.png">`;
				lib.translate.refresh_standard = `<img src="extension/命运线/ol/title/jxtp_bz.png">`;
				lib.translate.refresh_feng = `<img src="extension/命运线/ol/title/jxtp_feng.png">`;
				lib.translate.refresh_huo = `<img src="extension/命运线/ol/title/jxtp_huo.png">`;
				lib.translate.refresh_lin = `<img src="extension/命运线/ol/title/jxtp_lin.png">`;
				lib.translate.refresh_shan = `<img src="extension/命运线/ol/title/jxtp_shan.png">`;
				lib.translate.myx_shizhounianqita = `<img src="extension/命运线/ol/title/qita.png">`;
				lib.translate.shenhua_feng = `<img src="extension/命运线/ol/title/shenfeng.png">`;
				lib.translate.shenhua_lin = `<img src="extension/命运线/ol/title/shenlin.png">`;
				lib.translate.shenhua_huo = `<img src="extension/命运线/ol/title/shenhuo.png">`;
				lib.translate.shenhua_shan = `<img src="extension/命运线/ol/title/shenshan.png">`;
				lib.translate.shenhua_yin = `<img src="extension/命运线/ol/title/yin.png">`;
				lib.translate.shenhua_lei = `<img src="extension/命运线/ol/title/shenlei.png">`;
				lib.translate.yijiang_2011 = `<img src="extension/命运线/ol/title/jiangyi.png">`;
				lib.translate.yijiang_2012 = `<img src="extension/命运线/ol/title/jianger.png">`;
				lib.translate.yijiang_2013 = `<img src="extension/命运线/ol/title/jiangsan.png">`;
				lib.translate.yijiang_2014 = `<img src="extension/命运线/ol/title/jiangsi.png">`;
				lib.translate.yijiang_2015 = `<img src="extension/命运线/ol/title/jiangwu.png">`;
				lib.translate.yijiang_2016 = `<img src="extension/命运线/ol/title/yuanliu.png">`;
				lib.translate.yijiang_2017 = `<img src="extension/命运线/ol/title/yuanqi.png">`;
				lib.translate.sp_tianji = `<img src="extension/命运线/ol/title/tianji.png">`;
				lib.translate.sp_sibi = `<img src="extension/命运线/ol/title/sibi.png">`;
				lib.translate.sp_tianzhu = `<img src="extension/命运线/ol/title/tianzhu.png">`;
				lib.translate.sp_nvshi = `<img src="extension/命运线/ol/title/nvshi.png">`;
				lib.translate.sp_shaowei = `<img src="extension/命运线/ol/title/shaowei.png">`;
				lib.translate.sp_huben = `<img src="extension/命运线/ol/title/huben.png">`;
				lib.translate.sp_liesi = `<img src="extension/命运线/ol/title/liesi.png">`;
				lib.translate.yingbian_pack1 = `<img src="extension/命运线/ol/title/libao.png">`;
				lib.translate.yingbian_pack2 = `<img src="extension/命运线/ol/title/beibao.png">`;
				lib.translate.yingbian_pack3 = `<img src="extension/命运线/ol/title/guobao.png">`;
				lib.translate.yingbian_pack4 = `<img src="extension/命运线/ol/title/jiebao.png">`;
				lib.translate.yingbian_pack5 = `<img src="extension/命运线/ol/title/yuebao.png">`;
				lib.translate.extra_feng = `<img src="extension/命运线/ol/title/shenfeng.png">`;
				lib.translate.extra_lin = `<img src="extension/命运线/ol/title/shenlin.png">`;
				lib.translate.extra_huo = `<img src="extension/命运线/ol/title/shenhuo.png">`;
				lib.translate.extra_shan = `<img src="extension/命运线/ol/title/shenshan.png">`;
				lib.translate.extra_yin = `<img src="extension/命运线/ol/title/yin.png">`;
				lib.translate.extra_lei = `<img src="extension/命运线/ol/title/shenlei.png">`;
				lib.translate.extra_ol = `<img src="extension/命运线/ol/title/xianshangzhuanshu.png">`;
				lib.characterSort.standard.myx_junzhu = ['liubei', 'sunquan', 'caocao'];
				lib.characterSort.standard.myx_dwdd = ['zhouyu', 'lvmeng', 'luxun'];
				lib.characterSort.standard.myx_zydx = ['guanyu', 'zhangfei', 'zhaoyun', 'machao'];
				lib.characterSort.standard.myx_hjry = ['zhangliao', 'ganning', 'huanggai', 'xuzhu', 'xiahoudun'];
				lib.characterSort.standard.myx_csrs = ['zhugeliang', 'simayi', 'guojia'];
				lib.characterSort.standard.myx_bsjg = ['diaochan', 'zhenji', 'huangyueying', 'sunshangxiang', 'daqiao'];
				lib.characterSort.standard.myx_mzys = ['huatuo', 'huaxiong', 'lvbu', 're_yuanshu'];
				//lib.characterSort.standard.myx_biaozhunqita=["xf_yiji"];
				lib.characterSort.sp.sp_huben.push('gongsunzan');
				lib.characterPack.sp.gongsunzan = ['male', 'qun', 4, ['reyicong']];
				lib.translate.gongsunzan = '公孙瓒';
				lib.characterSort.refresh.refresh_standard.push('re_lidian');
				lib.characterPack.refresh.re_lidian = ['male', 'wei', 3, ['xunxun', 'wangxi']];
				lib.translate.re_lidian = '界李典';
				lib.characterSort.refresh.refresh_standard.push('re_xushu');
				lib.characterPack.refresh.re_xushu = ['male', 'shu', 4, ['zhuhai', 'qianxin']];
				lib.translate.re_xushu = '界徐庶';
				lib.characterPack.xinghuoliaoyuan.yl_yuanshu = ['male', 'qun', 4, ['drlt_yongsi', 'drlt_weidi'], ['zhu']]; //感谢星罗天算 · 基拉祈
				lib.translate.yl_yuanshu = '袁术';
				lib.characterPack.xinghuoliaoyuan.ganfuren = ['female', 'shu', 3, ['shushen', 'shenzhi']];
				lib.characterPack.xinghuoliaoyuan.hanba = ['female', 'qun', 4, ['fentian', 'zhiri']];
				lib.characterSort.shenhua.shenhua_lei.push('yuanshu');
				lib.characterPack.shenhua.yuanshu = ['male', 'qun', 4, ['yongsi', 'weidi']];
				lib.characterSort.sp.sp_tianji.push('sp_liuqi');
				lib.characterPack.sp.sp_liuqi = ['male', 'qun', 3, ['rewenji', 'sptunjiang']];
				lib.characterSort.sp.sp_tianji.push('caosong');
				lib.characterPack.sp.caosong = ['male', 'wei', 4, ['cslilu', 'csyizheng']];
				lib.characterSort.sp.sp_tianji.push('liubian');
				lib.characterPack.sp.liubian = ['male', 'qun', 3, ['shiyuan', 'dushi', 'yuwei'], ['zhu']];
				lib.characterSort.sp.sp_tianji.push('tangji');
				lib.characterPack.sp.tangji = ['female', 'qun', 3, ['jielie', 'kangge']];
				lib.characterSort.sp.sp_tianji.push('liuhong');
				lib.characterPack.sp.liuhong = ['male', 'qun', 4, ['yujue', 'tuxing']];
				lib.characterSort.sp.sp_sibi.push('xf_yiji');
				lib.characterPack.sp.xf_yiji = ['male', 'shu', 3, ['xinfu_jijie', 'xinfu_jiyuan'], []];
				lib.characterSort.sp.sp_sibi.push('wangcan');
				lib.characterPack.sp.wangcan = ['male', 'qun', 3, ['xinfu_sanwen', 'xinfu_qiai', 'xinfu_denglou']];
				lib.characterSort.sp.sp_sibi.push('lvqian');
				lib.characterPack.sp.lvqian = ['male', 'wei', 4, ['xinfu_weilu', 'xinfu_zengdao']];
				lib.characterSort.sp.sp_sibi.push('xinpi');
				lib.characterPack.sp.xinpi = ['male', 'wei', 3, ['xpchijie', 'yinju']];
				lib.characterSort.sp.sp_sibi.push('sp_shenpei');
				lib.characterPack.sp.sp_shenpei = ['male', 'qun', 3, ['gangzhi', 'beizhan']];
				lib.characterSort.sp.sp_sibi.push('xunchen');
				lib.characterPack.sp.xunchen = ['male', 'qun', 3, ['fenglve', 'mouzhi']];
				lib.characterSort.sp.sp_sibi.push('lvkai');
				lib.characterPack.sp.lvkai = ['male', 'shu', 3, ['xinfu_tunan', 'xinfu_bijing'], []];
				lib.characterSort.sp.sp_sibi.push('panjun');
				lib.characterPack.sp.panjun = ['male', 'wu', 3, ['xinfu_guanwei', 'xinfu_gongqing']];
				lib.characterSort.sp.sp_sibi.push('yanjun');
				lib.characterPack.sp.yanjun = ['male', 'wu', 3, ['xinfu_guanchao', 'xinfu_xunxian']];
				lib.characterSort.sp.sp_sibi.push('mamidi');
				lib.characterPack.sp.mamidi = ['male', 'qun', '4/6', ['bingjie', 'zhengding']];
				lib.characterSort.sp.sp_tianzhu.push('lijue');
				lib.characterPack.sp.lijue = ['male', 'qun', '4/6', ['xinfu_langxi', 'xinfu_yisuan'], []];
				lib.characterSort.sp.sp_tianzhu.push('zhangji');
				lib.characterPack.sp.zhangji = ['male', 'qun', 4, ['xinfu_lveming', 'xinfu_tunjun'], []];
				lib.characterSort.sp.sp_tianzhu.push('fanchou');
				lib.characterPack.sp.fanchou = ['male', 'qun', 4, ['xinxingluan'], []];
				lib.characterSort.sp.sp_tianzhu.push('guosi');
				lib.characterPack.sp.guosi = ['male', 'qun', 4, ['xinfu_tanbei', 'xinfu_sidao'], []];
				lib.characterSort.sp.sp_tianzhu.push('ol_dingyuan');
				lib.characterPack.sp.ol_dingyuan = ['male', 'qun', 4, ['cixiao', 'xianshuai']];
				lib.characterSort.sp.sp_tianzhu.push('wangshuang');
				lib.characterPack.sp.wangshuang = ['male', 'wei', 8, ['spzhuilie']];
				lib.characterSort.sp.sp_tianzhu.push('fanjiangzhangda');
				//lib.characterPack.sp.fanjiangzhangda=['male','wu',4,['yuanchou','juesheng']];
				lib.characterSort.sp.sp_tianzhu.push('liangxing');
				lib.characterPack.sp.liangxing = ['male', 'qun', 4, ['lulve', 'lxzhuixi']];
				lib.characterSort.sp.sp_nvshi.push('huaman');
				lib.characterPack.sp.huaman = ['female', 'shu', 3, ['hmmanyi', 'mansi', 'souying', 'zhanyuan']];
				lib.characterSort.sp.sp_nvshi.push('yangwan');
				lib.characterPack.sp.yangwan = ['female', 'shu', 3, ['youyan', 'zhuihuan']];
				lib.characterSort.sp.sp_nvshi.push('jin_guohuai');
				lib.characterPack.sp.jin_guohuai = ['female', 'jin', 3, ['zhefu', 'yidu']];
				lib.characterSort.sp.sp_shaowei.push('beimihu');
				lib.characterPack.sp.beimihu = ['female', 'qun', 3, ['zongkui', 'guju', 'baijia']];
				lib.characterSort.sp.sp_huben.push('lvkuanglvxiang');
				lib.characterPack.sp.lvkuanglvxiang = ['male', 'qun', 4, ['liehou', 'qigong']];
				lib.characterSort.sp.sp_default.push('re_jsp_pangtong');
				lib.characterPack.sp.re_jsp_pangtong = ['male', 'wu', 3, ['xinfu_guolun', 'xinfu_songsang']];
				lib.characterSort.sp.sp_qifu.push('xurong');
				lib.characterPack.sp.xurong = ['male', 'qun', 4, ['xinfu_xionghuo', 'xinfu_shajue'], []];
				lib.characterSort.sp.sp_qifu.push('zhangqiying');
				lib.characterPack.sp.zhangqiying = ['female', 'qun', 3, ['xinfu_falu', 'xinfu_dianhua', 'xinfu_zhenyi'], []];
				lib.characterSort.extra.extra_ol.push('junk_sunquan');
				lib.characterPack.extra.junk_sunquan = ['male', 'shen', 4, ['junkyuheng', 'junkdili'], ['wu']];
				lib.characterSort.sp.sp_huben.push('caoxing');
				lib.characterPack.sp.caoxing = ['male', 'qun', 4, ['cxliushi', 'zhanwan']];
				lib.characterSort.sp.sp_huben.push('zhoufang');
				lib.characterPack.sp.zhoufang = ['male', 'wu', 3, ['xinfu_duanfa', 'xinfu_youdi']];
				lib.characterSort.sp.sp_huben.push('gaolan');
				lib.characterPack.sp.gaolan = ['male', 'qun', 4, ['xiying']];
				lib.characterSort.sp.sp_huben.push('yanrou');
				lib.characterPack.sp.yanrou = ['male', 'wei', 4, ['choutao', 'xiangshu']];
			}
			if (config.myx_name == 'close') {
				lib.translate.ji_shen_caorui = '神曹叡';
				lib.translate.ji_shen_liushan = '神刘禅';
				lib.translate.myx_liuchen = '刘谌';
				lib.translate.myx_sundeng = '孙登';
				lib.translate.myx_liru = '李儒';
				lib.translate.myx_hetaihou = '何太后';
				lib.translate.myx_wangrong = '王美人';
				lib.translate.myx_zhugeguo = '诸葛果';
				lib.translate.myx_zhaoyun = '赵云';
				lib.translate.myx_zuoci = '左慈';
				lib.translate.myx_jiaxu = '贾诩';
				lib.translate.myx_hulaoguan2022lvbu = '神吕布';
				lib.translate.myx_puyuan = '蒲元';
				lib.translate.myx_zhugedan = '诸葛诞';
				lib.translate.myx_yeguanjixiong_huangchengyan = '黄承彦';
				lib.translate.myx_caomao = '曹髦';
				lib.translate.myx_weihuacun = '魏华存';
				lib.translate.dwbj_songshou = '宋寿';
				lib.translate.dwbj_yanwu = '严武';
				lib.translate.myx_zhupeilan = '朱佩兰';
				lib.translate.dwbj_zhaoda = '赵达';
			}
			//lib.translate.shenhua_feng = `<img src="extension/命运线/lihuomieshi.png" width="115.2" height="36.8">`;
			lib.translate.myx = '命运线';
			lib.translate.myx_shu = '蜀汉之天命';
			lib.translate.myx_wu = '吴江之锦歌';
			lib.translate.myx_wei = '魏武之逐鹿';
			lib.translate.myx_sg = '三分之天下';
			lib.translate.myx_ly = '洛阳之火墟';
			lib.translate.myx_shen = '诸神之往生';
			lib.translate.myx_xian = '仙道之长生';
			lib.translate.myx_hulaoguan = '虎牢之险隘';
			lib.translate.myx_bossdecade = '十年归一';
			lib.translate.myx_bossol = '一梦十年';
			lib.characterSort.命运线 = {
				myx: [],
				//'myx_shu':["myx_liuchen"],
				myx_wu: ['myx_sundeng', 'dwbj_songshou', 'dwbj_yanwu', 'myx_zhupeilan', 'dwbj_zhaoda'],
				myx_wei: [],
				myx_sg: ['myx_liuchen', 'myx_zhugeguo', 'myx_zhaoyun', 'myx_puyuan', 'myx_zhugedan'],
				myx_ly: ['myx_liru', 'myx_hetaihou', 'myx_wangrong', 'myx_jiaxu'],
				myx_shen: ['ji_shen_caorui', 'ji_shen_liushan'],
				myx_xian: ['myx_zuoci', 'myx_yeguanjixiong_huangchengyan', 'myx_weihuacun'],
				myx_hulaoguan: ['myx_hulaoguan2022lvbu', 'myx_shanhaijingqingqiu', 'myx_caomao'],
				myx_bossdecade: ['myx_boss_cskmtlb', 'myx_boss_cskmtls', 'myx_boss_cskmtlc', 'myx_boss_cskmtlf', 'myx_boss_cskmtly', 'myx_hulaoguan2022lvbu_boss'],
			};
			if (config.myx_zhugongqianghua != 'close') {
				//主公技能
				//杀手休
				lib.skill.zhaofu = {
					audio: 'ext:命运线/audio:2',
					trigger: {
						global: ['gainAfter'],
					},
					zhuSkill: true,
					direct: false,
					mark: false,
					charlotte: true,
					filter(event, player) {
						return event.cards && event.cards.length >= 5 && event.player != player && player.hasZhuSkill('zhaofu') && event.player == _status.currentPhase;
					},
					check(event, player) {
						return get.attitude(player, event.player) <= 0;
					},
					prompt2: '当有角色与其回合内一次性获得至少5张牌时,你可以对其造成x点雷电伤害(x为其本次获得的牌数-5且至少为1)',
					content() {
						var chengfa = trigger.cards.length - 5;
						trigger.player.damage(Math.max(1, chengfa), 'thunder');
						player.say(['不诛此权臣,朕何以治天下.;推杯换盏之际,正是诛灭逆臣之时!'].randomGet());
						game.log('十二月戊辰腊,百僚朝贺,公卿升殿,诏武士缚綝,即日伏诛.己巳,诏以左将军张布讨奸臣,加布为中军督,封布弟惇为都亭侯,给兵三百人,惇弟恂为校尉. ');
					},
					group: ['zhaofu_jineng', 'zhaofu_qingchu', 'zhaofu_mopai'],
					subSkill: {
						jineng: {
							trigger: { player: 'damageBegin' },
							filter(event, player) {
								return event.source && event.num && player.hasZhuSkill('zhaofu');
							},
							content() {
								if (trigger.source != player && trigger.source != undefined) {
									if (!trigger.source.hasSkill('zhaofu_zhaofu')) {
										trigger.source.addTempSkill('zhaofu_zhaofu', { player: 'phaseBegin' });
										trigger.source.markAuto('zhaofu_zhaofu', [player]);
									}
									trigger.source.addMark('zhaofu_zhaofu', 1);
								}
								if (player.hasMark('zhaofu_baohu')) {
									trigger.num = 0;
								} else {
									trigger.num = 1;
								}
								player.addSkill('zhaofu_baohu');
								player.addMark('zhaofu_baohu', 1);
								// player.storage.xinzhaofu_baohu+=1;
								// player.markSkill('xinzhaofu_baohu');
								if (player.countMark('zhaofu_baohu') >= 10) {
									var target = _status.currentPhase;
									if (target != player) {
										target.damage(1, 'thunder');
										player.say('停停,再不停死了');
									}
								}
							},
						},
						qingchu2: {
							trigger: {
								player: 'phaseJieshuEnd',
							},
							mark: false,
							forced: true,
							filter(event, player) {
								return player.hasZhuSkill('zhaofu');
							},
							logTarget(event, player) {
								return game.filterPlayer((current) => current != player && current.hasSkill('zhaofu_zhaofu'));
							},
							content() {
								var list = game.filterPlayer((current) => current != player && current.hasSkill('zhaofu_zhaofu')).sortBySeat();
								for (var i of list) i.removeSkill('zhaofu_zhaofu');
							},
						},
						zhaofu: {
							trigger: { player: 'useCardAfter' },
							forced: true,
							filter(event, player) {
								return player.countCards('hes') > 0;
							},
							content() {
								player.chooseToDiscard(Math.min(player.countMark('zhaofu_zhaofu'), player.countCards('he')), 'he', true);
							},
							mod: {
								maxHandcard(player, num) {
									return num - player.countMark('zhaofu_zhaofu');
								},
							},
							intro: {
								name: '诏缚',
								content: '手牌上限-#<br>使用牌后须弃置#张牌',
							},
						},
						qingchu: {
							mark: false,
							forced: true,
							trigger: {
								global: 'phaseJieshuAfter',
							},
							filter(event, player) {
								return player.countMark('zhaofu_baohu') > 0 && player.hasZhuSkill('zhaofu');
							},
							content() {
								player.removeSkill('zhaofu_baohu');
								player.removeMark('zhaofu_baohu', player.countMark('zhaofu_baohu'));
								// player.storage.xinzhaofu_baohu=0;
								// player.unmarkSkill('xinzhaofu_baohu');
							},
						},
						baohu: {
							charlotte: true,
							mark: true,
							intro: {
								name: '诏缚',
								content: '设宴,以诛逆臣!',
							},
						},
						mopai: {
							trigger: {
								global: ['loseAfter', 'loseAsyncAfter', 'equipAfter', 'addToExpansionAfter', 'addJudgeAfter'],
							},
							filter(event, player) {
								if (event.player && event.player != player && event.player.hasSkill('zhaofu_zhaofu') && player.hasZhuSkill('zhaofu')) {
									return event.player.getHistory('lose', function (evt) {
										return evt.type == 'discard' && evt.hs.filterInD('d').length;
									}).length;
								}
								return false;
							}, //QQQ
							checkx(event, player, cards, cards2) {
								for (var i = 0; i < cards2.length; i++) {
									if (get.value(cards2[i], player, 'raw') > 0) return true;
								}
								return false;
							},
							forced: true,
							preHidden: true,
							content() {
								'step 0';
								var cards = [];
								var cards2 = [];
								game.getGlobalHistory('cardMove', function (evt) {
									if (evt.name == 'cardsDiscard') cards.addArray(evt.cards.filterInD('d'));
								});
								game.countPlayer2(function (current) {
									current.getHistory('lose', function (evt) {
										if (evt.type != 'discard') return;
										cards.addArray(evt.cards.filterInD('d'));
										if (current == trigger.player) cards2.addArray(evt.hs.filterInD('d'));
									});
								});
								event.cards = cards;
								var check = lib.skill.guzheng.checkx(trigger, player, cards, cards2);
								player
									.chooseCardButton(cards, '诏缚:选择获得的牌')
									.set('ai', function (button) {
										if (_status.event.check) {
											return get.value(button.link, _status.event.getTrigger().player);
										}
										return 0;
									})
									.set('check', check)
									.set('cards', cards2)
									.set('filterButton', function (button) {
										return _status.event.cards.includes(button.link);
									})
									.setHiddenSkill(event.name);
								('step 1');
								if (result.links?.length) {
									player.gain(result.links[0]);
									player.$gain2(result.links[0]);
									game.log(player, '获得了', result.links[0]); //QQQ
								}
							},
							ai: {
								threaten: 1.2,
								maixie: true,
							},
						},
					},
				};
				lib.skill.xinzhaofu = {
					audio: 'ext:命运线/audio:2',
					trigger: {
						global: ['gainAfter'],
					},
					zhuSkill: true,
					direct: false,
					mark: false,
					charlotte: true,
					filter(event, player) {
						return event.cards && event.cards.length >= 5 && event.player != player && player.hasZhuSkill('xinzhaofu') && event.player == _status.currentPhase;
					},
					check(event, player) {
						return get.attitude(player, event.player) <= 0;
					},
					prompt2: '当有角色与其回合内一次性获得至少5张牌时,你可以对其造成x点雷电伤害(x为其本次获得的牌数-5且至少为1)',
					content() {
						var chengfa = trigger.cards.length - 5;
						trigger.player.damage(Math.max(1, chengfa), 'thunder');
						player.say(['不诛此权臣,朕何以治天下.;推杯换盏之际,正是诛灭逆臣之时!'].randomGet());
						game.log('十二月戊辰腊,百僚朝贺,公卿升殿,诏武士缚綝,即日伏诛.己巳,诏以左将军张布讨奸臣,加布为中军督,封布弟惇为都亭侯,给兵三百人,惇弟恂为校尉. ');
					},
					group: ['xinzhaofu_jineng', 'xinzhaofu_qingchu', 'xinzhaofu_mopai'],
					subSkill: {
						jineng: {
							trigger: { player: 'damageBegin' },
							filter(event, player) {
								return event.num && player.hasZhuSkill('xinzhaofu');
							},
							content() {
								if (trigger.source != player && trigger.source != undefined) {
									if (!trigger.source.hasSkill('xinzhaofu_zhaofu')) {
										trigger.source.addTempSkill('xinzhaofu_zhaofu', { player: 'phaseUseBefore' });
										trigger.source.markAuto('xinzhaofu_zhaofu', [player]);
									}
									trigger.source.addMark('xinzhaofu_zhaofu', 1);
								}
								if (player.hasMark('xinzhaofu_baohu')) {
									trigger.num = 0;
								} else {
									trigger.num = 1;
								}
								player.addSkill('xinzhaofu_baohu');
								player.addMark('xinzhaofu_baohu', 1);
								// player.storage.xinzhaofu_baohu+=1;
								// player.markSkill('xinzhaofu_baohu');
								if (player.countMark('xinzhaofu_baohu') >= 10) {
									var target = _status.currentPhase;
									if (target != player) {
										target.damage(1, 'thunder');
										player.say('停停,再不停死了');
									}
								}
							},
						},
						qingchu2: {
							trigger: {
								player: 'phaseJieshuEnd',
							},
							mark: false,
							forced: true,
							filter(event, player) {
								return player.hasZhuSkill('xinzhaofu');
							},
							logTarget(event, player) {
								return game.filterPlayer((current) => current != player && current.hasSkill('xinzhaofu_zhaofu'));
							},
							content() {
								var list = game.filterPlayer((current) => current != player && current.hasSkill('xinzhaofu_zhaofu')).sortBySeat();
								for (var i of list) i.removeSkill('xinzhaofu_zhaofu');
							},
						},
						zhaofu: {
							trigger: { player: 'useCardAfter' },
							forced: true,
							filter(event, player) {
								return player.countCards('hes') > 0;
							},
							content() {
								player.chooseToDiscard(player.countMark('xinzhaofu_zhaofu'), 'hes', true);
							},
							mod: {
								maxHandcard(player, num) {
									return num - player.countMark('xinzhaofu_zhaofu');
								},
							},
							intro: {
								name: '诏缚',
								content: '手牌上限-#<br>使用牌后须弃置#张牌',
							},
						},
						qingchu: {
							mark: false,
							forced: true,
							trigger: {
								global: 'phaseJieshuAfter',
							},
							filter(event, player) {
								return player.countMark('xinzhaofu_baohu') > 0 && player.hasZhuSkill('xinzhaofu');
							},
							content() {
								player.removeSkill('xinzhaofu_baohu');
								player.removeMark('xinzhaofu_baohu', player.countMark('xinzhaofu_baohu'));
								// player.storage.xinzhaofu_baohu=0;
								// player.unmarkSkill('xinzhaofu_baohu');
							},
						},
						baohu: {
							charlotte: true,
							mark: true,
							intro: {
								name: '诏缚',
								content: '设宴,以诛逆臣!',
							},
						},
						mopai: {
							trigger: {
								global: ['loseAfter', 'loseAsyncAfter'],
							},
							filter(event, player) {
								if (event.player != player && event.player.isIn() && event.player.hasSkill('xinzhaofu_zhaofu') && player.hasZhuSkill('xinzhaofu')) {
									return event.player.getHistory('lose', function (evt) {
										return evt.type == 'discard' && evt.hs.filterInD('d').length;
									}).length;
								}
								return false;
							},
							checkx(event, player, cards, cards2) {
								for (var i = 0; i < cards2.length; i++) {
									if (get.value(cards2[i], player, 'raw') > 0) return true;
								}
								return false;
							},
							forced: true,
							preHidden: true,
							content() {
								'step 0';
								var cards = [];
								var cards2 = [];
								game.getGlobalHistory('cardMove', function (evt) {
									if (evt.name == 'cardsDiscard') cards.addArray(evt.cards.filterInD('d'));
								});
								game.countPlayer2(function (current) {
									current.getHistory('lose', function (evt) {
										if (evt.type != 'discard') return;
										cards.addArray(evt.cards.filterInD('d'));
										if (current == trigger.player) cards2.addArray(evt.hs.filterInD('d'));
									});
								});
								event.cards = cards;
								var check = lib.skill.guzheng.checkx(trigger, player, cards, cards2);
								player
									.chooseCardButton(cards, `诏缚:选择令${get.translation(player)}获得的牌`)
									.set('ai', function (button) {
										if (_status.event.check) {
											return 20 - get.value(button.link, _status.event.getTrigger().player);
										}
										return 0;
									})
									.set('check', check)
									.set('cards', cards2)
									.set('filterButton', function (button) {
										return _status.event.cards.includes(button.link);
									})
									.setHiddenSkill(event.name);
								('step 1');
								if (result.links?.length) {
									player.gain(result.links[0]);
									player.$gain2(result.links[0]);
									game.log(player, '获得了', result.links[0]);
								}
							},
							ai: {
								threaten: 1.2,
							},
						},
					},
				};
				//刘备激将
				lib.skill.jijiang = {
					audio: 'ext:命运线/audio:2',
					audioname: ['re_liubei'],
					zhuSkill: true,
					trigger: {
						player: ['phaseZhunbeiEnd'],
					},
					filter(event, player) {
						if (
							!player.hasZhuSkill('jijiang') ||
							!game.hasPlayer(function (current) {
								return current != player;
							})
						)
							return false;
						return !event.jijiang && event.type != 'phase';
					},
					check(event, player) {
						if (get.damageEffect(player, event.player, player) >= 0) return false;
						return true;
					},
					content() {
						'step 0';
						if (event.current == undefined) event.current = player.next;
						if (event.current == player) {
							event.finish();
						} else {
							if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 1 || event.current.isOnline()) {
								//player.storage.hujiaing=true;
								var next = event.current.chooseToDiscard(`是否替${get.translation(player)}打出一张杀？`, 'h', { type: 'basic', color: 'black' });
								next.set('ai', function () {
									var event = _status.event;
									return get.attitude(event.player, event.source) - 2;
								});
								next.set('skillwarn', `替${get.translation(player)}打出一张杀`);
								next.set('source', player);
							} else {
								event.current = event.current.next;
								event.goto(0);
							}
						}
						('step 1');
						if (result.bool) {
							if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
								event.current.ai.shown = 1;
								if (event.current.ai.shown > 0.95) event.current.ai.shown = 1;
							}
							player.chooseUseTarget('发动【激将】对一名角色使用无距离限制的杀', { name: 'sha', nature: 'fire' }, true, 'nodistance');
						} else {
							event.current = event.current.next;
							event.goto(0);
						}
						('step 2');
						if (result.bool) {
							player.changeHujia();
							player.gain(game.createCard('gz_kefuzhongyuan'), 'gain2', 'fromStorage');
							player.chooseBool(`激将:是否令${get.translation(event.current)}获得一张【杀】(若其为蜀势力武将,其额外从牌堆中获得一张【酒】或【决斗】)？`).set('ai', function () {
								return get.attitude(player, _status.event.current) > 0;
							});
							if (result.bool) {
								var cards = [];
								var card = get.cardPile2(function (card) {
									return card.name == 'sha';
								});
								if (card) cards.push(card);
								if (event.current.group == 'shu') {
									var card = get.cardPile2(function (card) {
										return ['juedou', 'jiu'].includes(card.name);
									});
									if (card) cards.push(card);
								}
								if (cards.length) event.current.gain(cards, 'gain2');
							}
							var cards = [];
							event.finish();
						} else {
							event.goto(1);
						}
					},
					ai: {
						order() {
							return get.order({ name: 'sha' }) + 0.3;
						},
						skillTagFilter(player) {
							if (
								!player.hasZhuSkill('jijiang') ||
								!game.hasPlayer(function (current) {
									return current != player;
								})
							)
								return false;
						},
					},
					group: ['jijiang_huihewai'],
					subSkill: {
						huihewai: {
							zhuSkill: true,
							trigger: {
								target: ['useCardToTargeted'],
							},
							usable: 1,
							filter(event, player) {
								if (
									!player.hasZhuSkill('jijiang') ||
									!game.hasPlayer(function (current) {
										return current != player;
									})
								)
									return false;
								return !event.jijiang && event.type != 'phase' && player != event.player;
							},
							check(event, player) {
								if (get.damageEffect(player, event.player, player) >= 0) return false;
								return true;
							},
							content() {
								'step 0';
								if (event.current == undefined) event.current = player.next;
								if (event.current == player) {
									event.finish();
								} else {
									if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 1 || event.current.isOnline()) {
										//player.storage.hujiaing=true;
										var next = event.current.chooseToDiscard(`是否替${get.translation(player)}打出一张杀？`, 'h', { type: 'basic', color: 'red' });
										next.set('ai', function () {
											var event = _status.event;
											return get.attitude(event.player, event.source) - 2;
										});
										next.set('skillwarn', `替${get.translation(player)}打出一张杀`);
										next.set('source', player);
									} else {
										event.current = event.current.next;
										event.goto(0);
									}
								}
								('step 1');
								if (result.bool) {
									if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
										event.current.ai.shown = 1;
										if (event.current.ai.shown > 0.95) event.current.ai.shown = 1;
									}
									player.chooseUseTarget('发动【激将】对一名角色使用无距离限制的杀', { name: 'sha' }, true, 'nodistance');
								} else {
									event.current = event.current.next;
									event.goto(0);
								}
								('step 2');
								if (result.bool) {
									if (player.countCards('h') > 0) {
										player.chooseToDiscard('选择一张手牌弃置之', 'h');
									}
									player.chooseBool(`激将:是否令${get.translation(event.current)}获得一张【酒】(若其为蜀势力武将,其额外从牌堆中获得一张【无懈可击】)？`).set('ai', function () {
										return get.attitude(player, _status.event.current) > 0;
									});
									if (result.bool) {
										var cards = [];
										var card = get.cardPile2(function (card) {
											return card.name == 'jiu';
										});
										if (card) cards.push(card);
										if (event.current.group == 'shu') {
											var card = get.cardPile2(function (card) {
												return ['wuxie'].includes(card.name);
											});
											if (card) cards.push(card);
										}
										if (cards.length) event.current.gain(cards, 'gain2');
									}
									var cards = [];
									event.finish();
								} else {
									event.goto(1);
								}
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) + 0.3;
								},
								skillTagFilter(player) {
									if (
										!player.hasZhuSkill('jijiang') ||
										!game.hasPlayer(function (current) {
											return current != player;
										})
									)
										return false;
								},
							},
						},
					},
				};
				//界激将
				lib.skill.rejijiang = {
					audio: 'ext:命运线/audio:2',
					audioname: ['re_liubei'],
					zhuSkill: true,
					trigger: {
						player: ['phaseZhunbeiEnd'],
					},
					filter(event, player) {
						if (
							!player.hasZhuSkill('rejijiang') ||
							!game.hasPlayer(function (current) {
								return current != player;
							})
						)
							return false;
						return !event.rejijiang && event.type != 'phase';
					},
					check(event, player) {
						if (get.damageEffect(player, event.player, player) >= 0) return false;
						return true;
					},
					content() {
						'step 0';
						if (event.current == undefined) event.current = player.next;
						if (event.current == player) {
							event.finish();
						} else {
							if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 1 || event.current.isOnline()) {
								//player.storage.hujiaing=true;
								var next = event.current.chooseToDiscard(`是否替${get.translation(player)}打出一张杀？`, 'h', { type: 'basic', color: 'black' });
								next.set('ai', function () {
									var event = _status.event;
									return get.attitude(event.player, event.source) - 2;
								});
								next.set('skillwarn', `替${get.translation(player)}打出一张杀`);
								next.set('source', player);
							} else {
								event.current = event.current.next;
								event.goto(0);
							}
						}
						('step 1');
						if (result.bool) {
							if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
								event.current.ai.shown = 1;
								if (event.current.ai.shown > 0.95) event.current.ai.shown = 1;
							}
							player.chooseUseTarget('发动【激将】对一名角色使用无距离限制的杀', { name: 'sha', nature: 'fire' }, true, 'nodistance');
						} else {
							event.current = event.current.next;
							event.goto(0);
						}
						('step 2');
						if (result.bool) {
							player.changeHujia();
							player.gain(game.createCard('gz_kefuzhongyuan'), 'gain2', 'fromStorage');
							player.chooseBool(`激将:是否令${get.translation(event.current)}获得一张【杀】(若其为蜀势力武将,其额外从牌堆中获得一张【酒】或【决斗】)？`).set('ai', function () {
								return get.attitude(player, _status.event.current) > 0;
							});
							if (result.bool) {
								var cards = [];
								var card = get.cardPile2(function (card) {
									return card.name == 'sha';
								});
								if (card) cards.push(card);
								if (event.current.group == 'shu') {
									var card = get.cardPile2(function (card) {
										return ['juedou', 'jiu'].includes(card.name);
									});
									if (card) cards.push(card);
								}
								if (cards.length) event.current.gain(cards, 'gain2');
							}
							var cards = [];
							event.finish();
						} else {
							event.goto(1);
						}
					},
					ai: {
						order() {
							return get.order({ name: 'sha' }) + 0.3;
						},
						skillTagFilter(player) {
							if (
								!player.hasZhuSkill('rejijiang') ||
								!game.hasPlayer(function (current) {
									return current != player;
								})
							)
								return false;
						},
					},
					group: ['rejijiang_huihewai'],
					subSkill: {
						huihewai: {
							zhuSkill: true,
							trigger: {
								target: ['useCardToTargeted'],
							},
							usable: 1,
							filter(event, player) {
								if (
									!player.hasZhuSkill('rejijiang') ||
									!game.hasPlayer(function (current) {
										return current != player;
									})
								)
									return false;
								return !event.rejijiang && event.type != 'phase' && player != event.player;
							},
							check(event, player) {
								if (get.damageEffect(player, event.player, player) >= 0) return false;
								return true;
							},
							content() {
								'step 0';
								if (event.current == undefined) event.current = player.next;
								if (event.current == player) {
									event.finish();
								} else {
									if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 1 || event.current.isOnline()) {
										//player.storage.hujiaing=true;
										var next = event.current.chooseToDiscard(`是否替${get.translation(player)}打出一张杀？`, 'h', { type: 'basic', color: 'red' });
										next.set('ai', function () {
											var event = _status.event;
											return get.attitude(event.player, event.source) - 2;
										});
										next.set('skillwarn', `替${get.translation(player)}打出一张杀`);
										next.set('source', player);
									} else {
										event.current = event.current.next;
										event.goto(0);
									}
								}
								('step 1');
								if (result.bool) {
									if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
										event.current.ai.shown = 1;
										if (event.current.ai.shown > 0.95) event.current.ai.shown = 1;
									}
									player.chooseUseTarget('发动【激将】对一名角色使用无距离限制的杀', { name: 'sha' }, true, 'nodistance');
								} else {
									event.current = event.current.next;
									event.goto(0);
								}
								('step 2');
								if (result.bool) {
									if (player.countCards('h') > 0) {
										player.chooseToDiscard('选择一张手牌弃置之', 'h');
									}
									player.chooseBool(`激将:是否令${get.translation(event.current)}获得一张【酒】(若其为蜀势力武将,其额外从牌堆中获得一张【无懈可击】)？`).set('ai', function () {
										return get.attitude(player, _status.event.current) > 0;
									});
									if (result.bool) {
										var cards = [];
										var card = get.cardPile2(function (card) {
											return card.name == 'jiu';
										});
										if (card) cards.push(card);
										if (event.current.group == 'shu') {
											var card = get.cardPile2(function (card) {
												return ['wuxie'].includes(card.name);
											});
											if (card) cards.push(card);
										}
										if (cards.length) event.current.gain(cards, 'gain2');
									}
									var cards = [];
									event.finish();
								} else {
									event.goto(1);
								}
							},
							ai: {
								order() {
									return get.order({ name: 'sha' }) + 0.3;
								},
								skillTagFilter(player) {
									if (
										!player.hasZhuSkill('rejijiang') ||
										!game.hasPlayer(function (current) {
											return current != player;
										})
									)
										return false;
								},
							},
						},
					},
				};
				//曹操护驾(标准)
				lib.skill.hujia = {
					audio: 'ext:命运线/audio:2',
					audioname: ['re_caocao'],
					zhuSkill: true,
					trigger: {
						player: ['chooseToRespondBefore', 'chooseToUseBefore'],
					},
					filter(event, player) {
						if (event.responded) return false;
						if (player.storage.hujiaing) return false;
						if (!player.hasZhuSkill('hujia')) return false;
						if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
						return game.hasPlayer(function (current) {
							return current != player;
						});
					},
					check(event, player) {
						if (get.damageEffect(player, event.player, player) >= 0) return false;
						return true;
					},
					content() {
						'step 0';
						player.draw();
						('step 1');
						if (event.current == undefined) event.current = player.next;
						if (event.current == player) {
							event.finish();
						} else {
							if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 1 || event.current.isOnline()) {
								player.storage.hujiaing = true;
								var next = event.current.chooseToDiscard(`是否替${get.translation(player)}打出一张闪？`, 'h', { type: 'basic' });
								next.set('ai', function () {
									var event = _status.event;
									return get.attitude(event.player, event.source) - 2;
								});
								next.set('skillwarn', `替${get.translation(player)}打出一张闪`);
								next.set('source', player);
							}
						}
						('step 2');
						player.storage.hujiaing = false;
						if (result.bool) {
							event.finish();
							trigger.result = { bool: true, card: { name: 'shan' }, cards: [] };
							trigger.responded = true;
							trigger.animate = false;
							if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
								event.current.ai.shown = 1;
								if (event.current.ai.shown > 0.95) event.current.ai.shown = 1;
							}
							player.chooseBool(`护驾:是否令${get.translation(event.current)}摸一张牌(若其为魏势力武将,其额外获得一张【桃】或【酒】)？`).set('ai', function () {
								return get.attitude(player, _status.event.current) > 0;
							});
							if (result.bool) {
								event.current.draw();
								if (event.current.group == 'wei') {
									var cards = [];
									var card = get.cardPile2(function (card) {
										return ['tao', 'jiu', 'zong'].includes(card.name);
									});
									if (card) cards.push(card);
									if (cards.length) event.current.gain(cards, 'gain2');
								}
							}
							player.draw();
						} else {
							event.current = event.current.next;
							event.goto(1);
						}
					},
					ai: {
						respondShan: true,
						skillTagFilter(player) {
							if (player.storage.hujiaing) return false;
							if (!player.hasZhuSkill('hujia')) return false;
							return game.hasPlayer(function (current) {
								return current != player;
							});
						},
					},
					group: 'hujia_jianshang',
					subSkill: {
						jianshang: {
							trigger: {
								player: 'damageBegin4',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'thunder';
							},
							content() {
								trigger.num = 1;
								player.say('光和末,黄巾起.拜骑都尉,讨颍川贼.迁为济南相,国有十馀县,长吏多阿附贵戚,赃污狼藉,于是奏免其八;禁断淫祀,奸宄逃窜,郡界肃然.');
								game.log('<font color=#96CAFF>光和末,黄巾起.拜骑都尉,讨颍川贼.迁为济南相,国有十馀县,长吏多阿附贵戚,赃污狼藉,于是奏免其八;禁断淫祀,奸宄逃窜,郡界肃然.</font>');
							},
						},
					},
				};
				lib.skill.rehujia = {
					audio: 'ext:命运线/audio:2',
					audioname: ['re_caocao'],
					zhuSkill: true,
					trigger: {
						player: ['chooseToRespondBefore', 'chooseToUseBefore'],
					},
					filter(event, player) {
						if (event.responded) return false;
						if (player.storage.hujiaing) return false;
						if (!player.hasZhuSkill('rehujia')) return false;
						if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
						return game.hasPlayer(function (current) {
							return current != player;
						});
					},
					check(event, player) {
						if (get.damageEffect(player, event.player, player) >= 0) return false;
						return true;
					},
					content() {
						'step 0';
						player.draw();
						('step 1');
						if (event.current == undefined) event.current = player.next;
						if (event.current == player) {
							event.finish();
						} else {
							if ((event.current == game.me && !_status.auto) || get.attitude(event.current, player) > 1 || event.current.isOnline()) {
								player.storage.hujiaing = true;
								var next = event.current.chooseToDiscard(`是否替${get.translation(player)}打出一张闪？`, 'h', { type: 'basic' });
								next.set('ai', function () {
									var event = _status.event;
									return get.attitude(event.player, event.source) - 2;
								});
								next.set('skillwarn', `替${get.translation(player)}打出一张闪`);
								next.set('source', player);
							}
						}
						('step 2');
						player.storage.hujiaing = false;
						if (result.bool) {
							event.finish();
							trigger.result = { bool: true, card: { name: 'shan' }, cards: [] };
							trigger.responded = true;
							trigger.animate = false;
							player.chooseBool(`护驾:是否令${get.translation(event.current)}摸一张牌(若其为魏势力武将且你或其体力值不大于2,其额外获得一张【桃】或【酒】)？`).set('ai', function () {
								return get.attitude(player, _status.event.current) > 0;
							});
							if (result.bool) {
								event.current.draw();
								if (event.current.group == 'wei') {
									if (event.current.hp <= 2 || player.hp <= 2) {
										var cards = [];
										var card = get.cardPile2(function (card) {
											return ['tao', 'jiu', 'zong'].includes(card.name);
										});
										if (card) cards.push(card);
										if (cards.length) event.current.gain(cards, 'gain2');
									}
								}
							}
							player.draw();
						} else {
							event.current = event.current.next;
							event.goto(1);
						}
					},
					ai: {
						respondShan: true,
						skillTagFilter(player) {
							if (player.storage.hujiaing) return false;
							if (!player.hasZhuSkill('rehujia')) return false;
							return game.hasPlayer(function (current) {
								return current != player;
							});
						},
					},
					group: 'rehujia_jianshang',
					subSkill: {
						jianshang: {
							trigger: {
								player: 'damageBegin4',
							},
							forced: true,
							filter(event, player) {
								return event.nature == 'thunder';
							},
							content() {
								trigger.num = 1;
								player.say('光和末,黄巾起.拜骑都尉,讨颍川贼.迁为济南相,国有十馀县,长吏多阿附贵戚,赃污狼藉,于是奏免其八;禁断淫祀,奸宄逃窜,郡界肃然.');
								game.log('<font color=#96CAFF>光和末,黄巾起.拜骑都尉,讨颍川贼.迁为济南相,国有十馀县,长吏多阿附贵戚,赃污狼藉,于是奏免其八;禁断淫祀,奸宄逃窜,郡界肃然.</font>');
							},
						},
					},
				};
				//主公技能描述
				lib.translate.hujia_info = '主公技,当你需要使用或打出一张【闪】时,你可以摸一张牌,令其他角色依次选择是否打出一张【闪】.若有角色响应,则你视为使用或打出了一张【闪】,你可以令其摸一张牌,若其为魏势力武将,其额外获得一张【桃】或【酒】,无论你如何选择,你再摸一张牌.';
				lib.translate.rehujia_info = '主公技,当你需要使用或打出一张【闪】时,你可以摸一张牌,令其他角色依次选择是否打出一张【闪】.若有角色响应,则你视为使用或打出了一张【闪】,你可以令其摸一张牌,若其为魏势力武将且你或其当前体力值不大于2,其额外获得一张【桃】或【酒】,无论你如何选择,你再摸一张牌.';
				lib.translate.jijiang_info = '主公技,回合开始阶段结束时/当你于其他角色回合内第一次成为其他角色使用牌的目标时,你可以令其他角色依次选择是否弃置一张黑色/红色基本牌.若有角色响应,你视为对一名其他角色使用一张无距离限制的【火杀】/普通【杀】,你获得一点护甲和一张【克复中原】/弃置一张手牌,并可以让响应的角色获得一张【杀】/【酒】,若其为蜀势力武将,其额外获得一张【酒】或【决斗】/【无懈可击】.';
				lib.translate.rejijiang_info = '主公技,回合开始阶段结束时/当你于其他角色回合内第一次成为其他角色使用牌的目标时,你可以令其他角色依次选择是否弃置一张黑色/红色基本牌.若有角色响应,你视为对一名其他角色使用一张无距离限制的【火杀】/普通【杀】,你获得一点护甲和一张【克复中原】/弃置一张手牌,并可以让响应的角色获得一张【杀】/【酒】,若其为蜀势力武将,其额外获得一张【酒】或【决斗】/【无懈可击】.';
				lib.translate.xinzhaofu_info = '主公技,当你受到伤害后,若你没有<诏缚>标记,你可以将伤害改为1点;否则,此伤害改为0,你与伤害来源各获得1枚<诏缚>标记,伤害来源每使用或打出一张牌后须弃置x张牌且手牌上限-x直到其回合开始(x为其<诏缚>标记数量);拥有<诏缚>标记的其他角色弃牌时,你可以选择一张获得之;回合结束时,你失去所有<诏缚>标记;若孙綝意图谋反,你可以设宴诛之.';
				lib.translate.zhaofu_info = '主公技,当你受到伤害后,若你没有<诏缚>标记,你可以将伤害改为1点;否则,此伤害改为0,你与伤害来源各获得1枚<诏缚>标记,伤害来源每使用或打出一张牌后须弃置x张牌且手牌上限-x直到其回合开始(x为其<诏缚>标记数量);拥有<诏缚>标记的其他角色弃牌时,你可以选择一张获得之;回合结束时,你失去所有<诏缚>标记;若孙綝意图谋反,你可以设宴诛之.';
			}
			if (config.myx_zhongyeguanxingkapai == 'a') {
				lib.skill.zhuge_skill = {
					equipSkill: true,
					audio: true,
					firstDo: true,
					trigger: { player: 'useCard1' },
					forced: true,
					filter(event, player) {
						return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
					},
					content() {
						trigger.audioed = true;
					},
					mod: {
						cardUsable(card, player, num) {
							var cardx = player.getEquip('zhuge');
							if (card.name == 'sha' && (!cardx || player.hasSkill('zhuge_skill', null, false) || (!_status.zhuge_temp && !ui.selected.cards.includes(cardx)))) {
								return num + 2;
							}
						},
						cardEnabled2(card, player) {
							if (!_status.event.addCount_extra || player.hasSkill('zhuge_skill', null, false)) return;
							if (card && card == player.getEquip('zhuge')) {
								try {
									var cardz = get.card();
								} catch (e) {
									return;
								}
								if (!cardz || cardz.name != 'sha') return;
								_status.zhuge_temp = true;
								var bool = lib.filter.cardUsable({ name: 'sha' }, player);
								delete _status.zhuge_temp;
								if (!bool) return false;
							}
						},
					},
				};
				lib.translate.zhuge_skill_info = '锁定技,你于出牌阶段内使用【杀】次数+3.';
			}
		},
		precontent() {
			window.myx_import = function (func) {
				func(lib, game, ui, get, ai, _status);
			};
			lib.skill._mingyunxian_die = {
				charlotte: true,
				trigger: { global: 'dieBegin' },
				firstDo: true,
				forced: true,
				_priority: -Infinity,
				lasrDo: true,
				content() {
					game.playAudio('../extension/命运线/zw', trigger.player.name);
				},
			};
			//—————————————————————————————————————————————————————————————————————————————boss模式相关函数,目前改用代理来排序
			const boss = function () {
				lib.skill._sort = {
					trigger: {
						player: ['phaseEnd'],
					},
					silent: true,
					forceDie: true,
					forceOut: true,
					filter() {
						game.sort();
					},
					content() { },
				}; //排座位
				let _me;
				Reflect.defineProperty(game, 'me', {
					get() {
						return _me;
					},
					set(v) {
						_me = v;
						if (game.players.includes(v) && game.players[0] != v) {
							game.sort();//因为李白最先进入players,挑战模式不管选什么挑战李白,都会变成game.me是李白
						} //如果数组target[meIndex]是李白,那么替换掉的一瞬间,接下来调用就会再添加一个李白,导致数组两个李白
					}, //更换game.me之后第一时间排序
				});
				game.sort = function () {
					const players = game.players.filter(Boolean);
					const deads = game.dead.filter(Boolean);
					const allPlayers = deads.concat(players);//先移除players后面玩家会前移,再添加入dead需要同排序取前
					const bool = lib.config.dieremove;
					const playerx = bool ? players : allPlayers;
					ui.arena.setNumber(playerx.length);
					if (bool) {
						deads.forEach((player) => {
							player.classList.add('removing', 'hidden');
							if (!player.deadposition) {
								const num = Number(player.dataset.position);
								player.deadposition = num;
								player.dataset.position = num - 1;
							}
						});
					}//隐藏死亡角色
					playerx.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
					if (playerx.includes(game.me) && playerx[0] != game.me) {
						while (playerx[0] != game.me) {
							const start = playerx.shift();
							playerx.push(start);
						}
					}//将玩家排至数组首位
					playerx.forEach((player, index, array) => {
						player.dataset.position = index;
						const zhu = _status.roundStart || game.zhu || game.boss || array.find((p) => p.seatNum == 1) || array[0];
						const zhuPos = Number(zhu.dataset.position);
						const num = index - zhuPos + 1;
						if (index < zhuPos) {
							player.seatNum = players.length - num;
						} else {
							player.seatNum = num;
						}
					});//修改dataset.position与seatNum
					players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
					players.forEach((player, index, array) => {
						if (bool) {
							player.classList.remove('removing', 'hidden');
						}
						if (index == 0) {
							if (ui.handcards1Container && ui.handcards1Container.firstChild != player.node.handcards1) {
								while (ui.handcards1Container.firstChild) {
									ui.handcards1Container.firstChild.remove();
								}
								ui.handcards1Container.appendChild(player.node.handcards1.addTempClass('start').fix());
							}
							if (game.me != player) {
								ui.updatehl();
							}
						}
						player.previous = array[index === 0 ? array.length - 1 : index - 1];
						player.next = array[index === array.length - 1 ? 0 : index + 1];
					});//展示零号位手牌/修改previous/显示元素
					allPlayers.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
					allPlayers.forEach((player, index, array) => {
						player.previousSeat = array[index === 0 ? array.length - 1 : index - 1];
						player.nextSeat = array[index === array.length - 1 ? 0 : index + 1];
					});//修改previousSeat
					game.players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
					return true;
				};
				game.players = new Proxy([], {
					set(target, property, value) {
						const result = Reflect.set(target, property, value);
						if (property === 'length') {
							game.sort();
						}
						return result;
					},
				});
				game.dead = new Proxy([], {
					set(target, property, value) {
						const result = Reflect.set(target, property, value);
						if (property === 'length') {
							game.sort();
						}
						return result;
					},
				});
				game.kongfunc = function () {
					return game.kong;
				};
				game.kong = {
					set() {
						return this;
					},
					get player() {
						return game.me;
					}, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
					cards: [],
					result: {
						cards: [],
					},
					gaintag: [],
					forResult() { },
				};
				game.changeBossQ = function (name) {
					_status.event.forceDie = true;
					const boss = game.addPlayerQ(name);
					boss.side = true;
					if (game.additionaldead) {
						game.additionaldead.push(game.boss);
					} else {
						game.additionaldead = [game.boss];
					}
					boss.setIdentity('zhu');
					boss.identity = 'zhu';
					const player = game.boss;
					game.boss = boss;
					game.addVideo('bossSwap', player, '_' + boss.name);
					if (game.me == player) {
						game.swapControl(boss);
					}
					return boss;
				};
				game.addPlayerQ = function (name) {
					const player = ui.create.player(ui.arena).addTempClass('start');
					player.getId();
					if (name) player.init(name);
					game.players.push(player);
					player.draw(Math.min(player.maxHp, 20));
					return player;
				};
				lib.element.player.addFellow = function (name) {
					const player = this;
					const npc = game.addPlayerQ(name);
					player.guhuo(npc);
					return npc;
				}; //添加随从
				lib.element.player.guhuo = function (target) {
					const player = this;
					target.side = player.side;
					let identity = player.identity;
					if (player.identity == 'zhu') {
						identity = 'zhong';
					} // 挑战模式多个主身份,会导致boss多个回合
					target.identity = identity;
					target.setIdentity(identity, 'blue');
					target.boss = player;
					target.ai.modAttitudeFrom = function (from, to, att) {
						if (to == from.boss) return 99;
						return att;
					}; //这里from是本人
					target.ai.modAttitudeTo = function (from, to, att) {
						if (to.boss == from) return 99;
						return att;
					}; //这里to是本人
					return player;
				}; //令一名角色服从你
			};
			boss();
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '命运线',
					connect: true,
					character: {
						ji_shen_caorui: ['male', 'shen', '3/5', ['ji_weiming', 'ji_mingcha'], []],
						ji_shen_liushan: ['male', 'shen', 4, ['myx_liushanyanhan', 'changming'], []],
						myx_liuchen: ['male', 'shu', 4, ['myx_beidi', 'myx_zhanjue', 'reqinwang'], ['zhu']],
						myx_sundeng: ['male', 'wu', 4, ['myx_kuangbi', 'myx_taizi'], []],
						myx_liru: ['male', 'qun', 3, ['myx_mieji', 'myx_fencheng', 'myx_juece'], []],
						myx_hetaihou: ['female', 'qun', 3, ['myx_zhendu', 'myx_qiluan', 'g_du'], []],
						myx_wangrong: ['female', 'qun', 3, ['olfengzi', 'myx_huailong', 'olfusong'], []],
						myx_zhugeguo: ['female', 'shu', 3, ['myx_xiudao', 'myx_qixiang', 'myx_yuhua'], []],
						myx_zhaoyun: ['male', 'shu', 1, ['myx_juejing', 'myx_jiuzhu', 'myx_longhun'], []],
						myx_zuoci: ['male', 'qun', 3, ['myx_qianhuan', 'myx_changsheng', 'myx_xiandao'], ['zhu']],
						myx_jiaxu: ['male', 'qun', 3, ['myx_weimu', 'rewansha'], []],
						myx_hulaoguan2022lvbu: ['male', 'qun', 30, ['mashu', 'wushuang', 'myx_shenqu2022', 'myx_shenji2022', 'myx_shenwei2022'], ['des:虎牢关,<三国演义>中董卓大军和三国诸侯联军决战之地.作为洛阳东边门户和重要的关隘,其因周穆王在此牢虎而得名.此关南连嵩岳,北濒黄河,山岭交错,自成天险,大有<一夫当关,万夫莫开>之势,为历代兵家必争之地.<br>三国杀十周年虎牢关2022 pve模式boss.']],
						myx_hulaoguan2022lvbu_boss: ['male', 'qun', 30, ['mashu', 'wushuang', 'myx_shenqu2022_boss', 'myx_shenji2022', 'myx_shenwei2022'], ['boss', 'allowed']],
						//"myx_puyuan":["male","shu",4,["myx_tiewang"],[]],
						//"myx_shanhaijingqingqiu":["female","qun",3,["myx_1V2"],[]],
						myx_zhugedan: ['male', 'wei', '1/1/1', ['myx_gongao', 'myx_juyi'], []],
						myx_yeguanjixiong_huangchengyan: ['male', 'qun', 3, ['guanxu', 'myx_zhanxing'], ['des:挑战模式【仲夜观星】纪念武将.']],
						myx_caomao: ['male', 'wei', '3/5', ['myx_boss_qintao', 'myx_boss_wenhui', 'myx_boss_xianggong'], ['des:挑战模式【超时空密探】纪念武将.']],
						myx_weihuacun: ['female', 'jin', '3/5', ['myx_huangjing', 'myx_lianli'], ["des:<span style='font-family: shousha;color: #ffed22'>设计:by丕睿宓vv b站同名</span><br>魏华存(252年—334年),晋代任城人,女道士,字贤安,又称紫虚元君、魏夫人.上清派第一代太师,民间称之为<二仙奶奶>,中国民间信仰和道教尊奉的四大女神之一."]],
						dwbj_songshou: ['male', 'wu', 3, ['dwbj_zhanmeng', 'dwbj_yiyu'], ["des:<span style='font-family: shousha;color: #ffed22'>设计:by空愿</span><br>东吴<八绝>之一,东汉末及三国时东吴人,擅长占梦.<br>裴松之<三国志注·吴书十八>:<宋寿占梦,十不失一.>"]],
						dwbj_yanwu: ['male', 'wu', 3, ['dwbj_luozi', 'dwbj_tizi', 'dwbj_miaoshou'], ["des:<span style='font-family: shousha;color: #ffed22'>设计:by空愿</span><br>严武,字子卿,三国时期东吴棋士.擅下围棋,同辈中无人能胜过严武,所以有<棋圣>之称.<br>弈旦评曰:<有人中龙,则吴之严子卿、马思明,尔时呼为弈圣是也.>"]],
						myx_zhupeilan: ['female', 'wu', 3, ['myx_qiwu', 'myx_shuya'], ["des:<span style='font-family: shousha;color: #d08900'>设计:by丕睿宓vv b站同名</span><br>景皇后朱氏(3世纪－265年),吴郡吴县(今江苏省苏州市)人,吴丞相朱据与朱公主之女,吴景帝孙休的皇后,孙皓即位后被逼死."]], //1b8000
						dwbj_zhaoda: ['male', 'wu', 3, ['dwbj_dingshu', 'dwbj_shoumi'], ["des:<span style='font-family: shousha;color: #ffed22'>设计:by空愿</span><br>赵达,洛阳人.三国时期东吴方士,中国民间奉祀的神灵,属于六十甲子神之一."]],
						//活 动 场
						myx_zhongyeguanxing_huodong: ['male', '', 0, ['myx_zhongyeguanxing', 'myx_zhongyeguanxing_jieshao'], ['boss', 'allowed'], 'qun'],
						myx_boss_qinglong2021: ['male', 'shen', 32, ['myx_boss_longhui', 'myx_boss_longlin', 'myx_boss_xingxiu_baiyin', 'myx_zygx2021_donggong', 'myx_zhongyeguanxing_xingxiang'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_jiaomujiao2021: ['male', 'shen', '8/8/4', ['myx_boss_jiaomu', 'myx_boss_xingxiu_baiyin'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_kangjinlong2021: ['male', 'shen', '8/8/4', ['myx_boss_kangjin', 'myx_boss_xingxiu_baiyin'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_zhuque2021: ['female', 'shen', 32, ['myx_boss_zhuyu', 'myx_boss_tianhuo', 'myx_boss_xingxiu_baiyin', 'myx_zygx2021_nangong', 'myx_zhongyeguanxing_xingxiang'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_yihuoshe2021: ['female', 'shen', '8/8/4', ['myx_boss_yihuo', 'myx_boss_xingxiu_baiyin'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_xingrima2021: ['male', 'shen', '8/8/4', ['myx_boss_xingri', 'myx_boss_xingxiu_baiyin'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_xuanwu2021: ['male', 'shen', 32, ['myx_boss_shengqu', 'myx_boss_xuankai', 'myx_zygx2021_beigong', 'myx_zhongyeguanxing_xingxiang', 'myx_boss_xingxiu_baiyin'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_weiyueyan2021: ['female', 'shen', '8/8/4', ['myx_boss_weiyue', 'myx_boss_xingxiu_baiyin'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_doumuxie2021: ['male', 'shen', '8/8/4', ['myx_boss_doumu', 'myx_boss_xingxiu_baiyin'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_baihu2021: ['male', 'shen', 32, ['myx_boss_huwei', 'myx_boss_tianxiao', 'myx_boss_xingxiu_baiyin', 'myx_zygx2021_xigong', 'myx_zhongyeguanxing_xingxiang'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_kuimulang2021: ['male', 'shen', '8/8/4', ['myx_boss_kuimu', 'myx_boss_xingxiu_baiyin'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_boss_shenshuiyuan2021: ['male', 'shen', '8/8/4', ['myx_boss_shenshui', 'myx_boss_xingxiu_baiyin'], ['shen', 'hiddenboss', 'bossallowed']],
						myx_cskmt_huodong: ['male', '', 0, ['myx_cskmt', 'myx_cskmt_jieshao'], ['boss', 'allowed'], 'qun'],
						myx_boss_cskmtcc: ['male', 'wei', 32, ['myx_boss_hujia', 'rejianxiong', 'feiying', 'myx_cskmt_bossbuff'], ['wei', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtcp: ['male', 'wei', 12, ['myx_boss_songwei', 'xingshang', 'refangzhu', 'lxzhuixi', 'zhichi', 'myx_cskmt_bossbuff'], ['wei', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtcs: ['male', 'wei', 36, ['myx_boss_taiwang', 'cslilu', 'csyizheng', 'myx_cskmt_bossbuff'], ['wei', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtcr: ['male', 'wei', 24, ['myx_boss_xingshuai', 'huituo', 'mingjian', 'myx_cskmt_bossbuff'], ['wei', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtcm: ['male', 'wei', 18, ['myx_boss_wenhui', 'myx_boss_qintao', 'myx_boss_xianggong', 'myx_cskmt_bossbuff'], ['wei', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtsq: ['male', 'wu', 32, ['myx_boss_jiuyuan', 'rezhiheng', 'myx_cskmt_bossbuff'], ['wu', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtsc: ['male', 'wu', '1/24', ['myx_boss_zhiba', 'jiang', 'yinghun', 'reyingzi', 'pinghe', 'myx_cskmt_bossbuff'], ['wu', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtsl: ['male', 'wu', 18, ['myx_boss_lijun', 'nzry_kuizhu', 'nzry_zhizheng', 'myx_cskmt_bossbuff'], ['wu', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtsx: ['male', 'wu', 24, ['myx_boss_zhaofu', 'rexingxue', 'reyanzhu', 'myx_cskmt_bossbuff'], ['wu', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtsh: ['male', 'wu', 28, ['myx_boss_chouhai', 'recanshi', 'myx_boss_guiming', 'myx_cskmt_bossbuff'], ['wu', 'hiddenboss', 'bossallowed']],
						myx_cskmt_mitan: ['male', 'qun', 3, ['myx_mitan_zhibi', 'myx_mitan_anqi', 'myx_mitan_duanzao', 'myx_mitan_neigong', 'myx_mitan_chuyi', 'myx_mitan_baolu'], []],
						myx_boss_cskmtlb: ['male', 'shu', 32, ['myx_boss_decade_jijiang', 'rerende', 'myx_cskmt_bossbuff'], ['shu', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtly: ['male', 'shu', 18, ['myx_boss_decade_zhuning', 'myx_boss_decade_fengxiang', 'myx_boss_decade_jitong', 'myx_cskmt_bossbuff'], ['shu', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtlc: ['male', 'shu', 14, ['myx_zhanjue', 'myx_boss_decade_qinwang', 'myx_cskmt_bossbuff'], ['shu', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtlf: ['male', 'shu', 24, ['xiansi', 'myx_boss_decade_suizhan', 'myx_cskmt_bossbuff'], ['shu', 'hiddenboss', 'bossallowed']],
						myx_boss_cskmtls: ['male', 'shu', 18, ['xiangle', 'myx_boss_decade_ruoyu', 'olfangquan', 'myx_cskmt_bossbuff'], ['shu', 'hiddenboss', 'bossallowed']],
						olm_boss_shenwuzaishi2022: ['male', '', 0, ['olm_shenwuzaishi', 'olm_shenwuzaishi_guize', 'olm_shenwuzaishi_guize2', 'olm_shenwuzaishi_guize3'], ['boss', 'allowed'], 'wu'],
						olm_boss_hundun: ['male', 'qun', 25, ['boss_xiongshou', 'boss_wuzang', 'boss_xiangde', 'boss_yinzei', 'boss_yinzei_switch'], ['qun', 'hiddenboss', 'bossallowed'], 'qun'],
						olm_boss_qiongqi: ['male', 'qun', '20/25', ['boss_xiongshou', 'boss_zhue', 'boss_futai', 'boss_yandu', 'boss_yandu_switch'], ['qun', 'hiddenboss', 'bossallowed'], 'qun'],
						olm_boss_taotie: ['male', 'qun', 20, ['boss_xiongshou', 'boss_tanyu', 'boss_cangmu', 'boss_jicai', 'boss_jicai_switch'], ['qun', 'hiddenboss', 'bossallowed'], 'qun'],
						olm_boss_taowu: ['male', 'qun', 25, ['boss_xiongshou', 'boss_minwan', 'boss_nitai', 'boss_luanchang', 'boss_luanchang_switch'], ['qun', 'hiddenboss', 'bossallowed'], 'qun'],
						olm_boss_xiangliu: ['male', 'qun', 25, ['boss_yaoshou', 'boss_duqu', 'boss_jiushou', 'boss_echou', 'boss_echou_switch'], ['qun', 'hiddenboss', 'bossallowed'], 'qun'],
						olm_boss_zhuyan: ['male', 'qun', '25/30', ['boss_yaoshou', 'boss_bingxian', 'boss_juyuan', 'boss_xushi', 'boss_xushi_switch'], ['qun', 'hiddenboss', 'bossallowed'], 'qun'],
						olm_boss_bifang: ['male', 'qun', 25, ['boss_yaoshou', 'boss_zhaohuo', 'boss_honglianx', 'boss_yanyu', 'boss_yanyu_switch'], ['qun', 'hiddenboss', 'bossallowed'], 'qun'],
						olm_boss_yingzhao: ['male', 'qun', 25, ['boss_yaoshou', 'boss_fengdong', 'boss_xunyou', 'boss_sipu', 'boss_sipu_switch'], ['qun', 'hiddenboss', 'bossallowed'], 'qun'],
						olm_boss_qimenbazhen2021: ['male', '', 0, ['olm_qmbzjieshao', 'olm_qmbz'], ['boss', 'allowed'], 'shu'],
					},
					characterTitle: {
						ji_shen_caorui: '魏明之命',
						ji_shen_liushan: '安乐与否',
						myx_liuchen: '一战而决',
						myx_sundeng: '匡人助己',
						myx_liru: '火海漫城',
						myx_wangrong: '灵怀宫殇',
						myx_zhugeguo: '羽化升仙',
						myx_zhaoyun: '七进七出',
						myx_zuoci: '一万个技能',
						myx_jiaxu: '影武者',
						myx_hulaoguan2022lvbu: '戾火浮屠',
						myx_zhugedan: '薤露蒿里',
						myx_yeguanjixiong_huangchengyan: '仲夜观星',
						myx_caomao: '文绘河山魂',
						dwbj_songshou: '行云梦间',
						dwbj_yanwu: '棋圣',
						dwbj_zhaoda: '九算定数',
					},
					translate: {
						ji_shen_caorui: '神曹叡',
						ji_shen_liushan: '神刘禅',
						myx_liuchen: '刘谌',
						myx_sundeng: '孙登',
						myx_liru: '李儒',
						myx_hetaihou: '何太后',
						myx_wangrong: '王美人',
						myx_zhugeguo: '诸葛果',
						myx_zhaoyun: '赵云',
						myx_zuoci: '左慈',
						myx_jiaxu: '贾诩',
						myx_hulaoguan2022lvbu: '神吕布',
						myx_zhugedan: '诸葛诞',
						myx_yeguanjixiong_huangchengyan: '黄承彦',
						myx_cskmt_mitan: '密探',
						myx_caomao: '曹髦',
						dwbj_songshou: '宋寿',
						dwbj_yanwu: '严武',
						dwbj_zhaoda: '赵达',
						myx_zhupeilan: '朱佩兰',
						ji_weiming: '魏明',
						ji_weiming_info: '锁定技.游戏开始时,你随机获得一条<span style="font-family: yuanli">曹魏命运线</span>.',
						ji_weiming_zhuanquan: '专权',
						ji_weiming_zhuanquan_info: '锁定技,若你获得过〖颂词〗、〖擅专〗、〖潜龙〗,你的牌不能被响应.',
						ji_weiming_xingtu: '兴土',
						ji_weiming_xingtu_info: '锁定技,若你获得过〖兴作〗、〖凌人〗、〖恢拓〗,回合结束时你摸两张牌.',
						ji_weiming_weiye: '魏业',
						ji_weiming_weiye_info: '锁定技,若你获得过〖草诏〗、〖缮甲〗、〖节命〗,当你的手牌数为1时,此牌视为<逐鹿天下>.',
						ji_mingcha: '明察',
						ji_mingcha_info: '回合开始时,你可以摸2张牌,交给一名角色2张牌,并获得<span style="font-family: yuanli">文德</span>和<span style="font-family: yuanli">武备</span>各涉及的一个技能直到回合结束;回合结束时,你可以获得<span style="font-family: yuanli">征讨</span>涉及的一个技能直到下个回合开始.<br><span style="font-family: yuanli">文德</span>:〖颂词〗、〖兴作〗、〖草诏〗<br><span style="font-family: yuanli">武备</span>:〖擅专〗、〖凌人〗、〖缮甲〗<br><span style="font-family: yuanli">征讨</span>:〖潜龙〗、〖恢拓〗、〖节命〗',
						myx_liushanyanhan: '炎汉',
						myx_liushanyanhan_info: '锁定技.游戏开始时,你随机获得一条<span style="font-family: yuanli">季汉命运线</span>.',
						changming: '昌命',
						changming_info: '①出牌阶段限一次.你可以失去所有<span style="font-family: yuanli">季汉命运线</span>涉及的其他非锁定技,随机获得全部<span style="font-family: yuanli">季汉命运线</span>涉及的一个技能.若你本阶段内没有发动过任何其他非锁定技,则你随机获得当前<span style="font-family: yuanli">季汉命运线</span>涉及的一个内容.②出牌阶段结束时,若你未于本阶段内发动过〖昌命①〗,则你失去1点体力.',
						myx_liushanyanhan_beifa: '北伐',
						myx_liushanyanhan_beifa_info: '锁定技.若你因〖昌命〗获得过〖飞军〗〖狂骨〗〖奔袭〗,则当你使用点数为质数的牌时,此牌不可被响应.',
						myx_liushanyanhan_fuming: '复明',
						myx_liushanyanhan_fuming_info: '锁定技.若你因〖昌命〗获得过〖战绝〗〖罪论〗〖挑衅〗,则跳过你的弃牌阶段.',
						myx_liushanyanhan_chengzhi: '承志',
						myx_liushanyanhan_chengzhi_info: '锁定技,限定技.若你因〖昌命〗获得过〖眩惑〗〖仁德〗〖闺秀〗,则当你发动的〖昌命〗结算结束后,你随机获得两条其他<span style="font-family: yuanli">季汉命运线</span>.',
						myx_liushanyanhan_qianlong: '潜龙',
						myx_liushanyanhan_qianlong_info: '锁定技.若你因〖昌命〗获得过〖烈弓〗〖武圣〗〖咆哮〗,则你手牌区内点数为奇数的牌的牌名视为【杀】.',
						myx_liushanyanhan_skillanle: '安乐',
						myx_liushanyanhan_skillanle_info: '锁定技.若你因〖昌命〗获得过〖放权〗〖空城〗〖贿生〗,则你的【闪】和【无懈可击】视为【酒】.',
						myx_liushanyanhan_xinghan: '兴汉',
						myx_liushanyanhan_xinghan_info: '锁定技.若你因〖昌命〗获得过〖枪舞〗〖观星〗〖图南〗,且你的手牌数为1,则此牌的牌名视为【克复中原】.',
						myx_beidi: '北地',
						myx_beidi_info: '锁定技,游戏开始时,你开启<span style="font-family: yuanli">北地王的命运线</span>;成则续汉之国祚,败则以身殉国.',
						myx_aozhan: '鏖战',
						myx_aozhan_info: '锁定技,当你造成1点伤害后,你获得一枚<鏖战>标记.',
						myx_xunguo: '殉国',
						myx_xunguo_info: '觉醒技,当你进入濒死状态后,你回复x点体力(x为你当前<鏖战>标记数量),并获得〖挥泪〗,每回合结束时,你摸2张牌并失去一点体力.',
						myx_xuhan: '续汉',
						myx_xuhan_info: '觉醒技,回合结束时,若你当前拥有的<鏖战>标记不少于12,你获得〖昭烈〗,你每造成一点伤害,可以摸一张牌.',
						myx_zhanjue_effect: '战绝',
						myx_zhanjue_effect_info: '出牌阶段,若你本阶段内因〖战绝〗获得过的牌数小于3,则你可以将所有不具有<勤王>标记的手牌当做【决斗】使用.此【决斗】使用结算结束后,你摸1张牌,失去上一次以此法获得的对应技能,根据你本回合发动该技能的次数依次获得【杀敌】和【平反】涉及的一个技能.',
						myx_zhanjue: '战绝',
						myx_zhanjue_info: '出牌阶段,若你本阶段内因〖战绝〗获得过的牌数小于3,则你可以将所有不具有<勤王>标记的手牌当做【决斗】使用.此【决斗】使用结算结束后,你摸2张牌,失去上一次以此法获得的对应技能,根据你本回合发动该技能的次数依次获得【杀敌】和【平反】涉及的一个技能.<br><span style="font-family: yuanli">杀敌</span>:〖往烈〗、〖雪恨〗、〖诛佞〗<br><span style="font-family: yuanli">平反</span>:〖素俭〗、〖恩怨〗、〖再起〗',
						//"ao_zhan":'战死沙场,马革裹尸',
						//"xun_guo":'宁可战死失社稷,绝不拱手让江山',
						//"xu_han":'大汉国祚,千年不息',
						myx_kuangbi: '匡弼',
						myx_kuangbi_info: '回合开始时,你可以失去1点体力或获得4枚<匡弼>标记,选择一名未以此法失去技能的角色,你获得其武将牌上的一个技能(限定技除外),其失去该技能直到你的下个回合开始;锁定技,你每造成1点伤害,获得1枚<匡弼>标记.',
						myx_kuangbi_bizui: '辅政',
						myx_kuangbi_bizui_info: '得到了孙登的匡弼.',
						myx_taizi: '太子',
						myx_taizi_info: '锁定技,回合结束时,根据当前<匡弼>标记的数量,你依次获得以下效果:6,获得〖英姿〗;12,获得〖直谏〗;18,获得〖良姻〗;24,获得〖勤政〗;33,死亡.',
						myx_fencheng: '焚城',
						myx_fencheng_info: '限定技,出牌阶段,你可以选择令其他角色各选择一项:弃置X张牌(X为该角色的上家以此法弃置牌的数量+1),或受到你对其造成的1点火焰伤害.若选择受到伤害的角色没有<焚>标记,则其获得1枚<焚>标记,你摸1张牌.',
						myx_fencheng2: '焚',
						myx_juece: '绝策',
						myx_juece_info: '回合开始时,若场上存在没有<焚>标记的其他角色,你可以重置你的一个限定技;出牌阶段限一次,你可以将一张黑色非基本牌置于牌堆顶,选择一名其他角色:若其有<焚>,其失去<焚>,你获得其一张牌;若其没有<焚>,其获得<焚>,所有手牌视为【毒】直到其回合结束.',
						myx_juece2: '绝策',
						myx_juece2_info: '回合开始时,若场上存在没有<焚>标记的其他角色,你可以重置你的一个限定技;出牌阶段限一次,你可以将一张黑色非基本牌置于牌堆顶,选择一名其他角色:若其有<焚>,其失去<焚>,你获得其一张牌;若其没有<焚>,其获得<焚>,所有手牌视为【毒】直到其回合结束.',
						myx_mieji: '灭计',
						myx_mieji_info: '游戏开始时,你解锁<span style="font-family: yuanli">洛阳城的命运线</span>.觉醒技,回合结束时,若场上所有其他角色都有<焚>标记,你修改〖灭计〗,所有角色失去<焚>标记.',
						myx_juece3: '献酒',
						myx_zhendu: '鸩毒',
						myx_zhendu_info: '一名角色的出牌阶段开始时,你可以弃置一张牌,视为该角色使用了一张【酒】,你摸一张牌,若该角色不为你且其没有<鸩毒>标记,你对其造成一点伤害并令其获得一张【毒】和1枚<鸩毒>标记;若其有<鸩毒>标记,你选择一项:对其造成一点伤害;或令其获得一张【毒】.',
						myx_qiluan: '戚乱',
						myx_qiluan_info: '锁定技,当一名角色进入濒死状态时,若其有<鸩毒>标记,你摸1张牌;当一名角色死亡时,若其有<鸩毒>标记,你摸2张牌并获得1枚<鸩毒>标记,若你是伤害来源,则你额外摸1张牌并获得2枚<鸩毒>标记.任意角色回合开始或结束时,若你拥有3枚或以上<鸩毒>标记,你获得技能〖饮鸩〗.',
						myx_qiluan_jiu: '饮鸩',
						myx_qiluan_jiu_info: '锁定技,当一名角色使用【酒】时,你弃置一张牌.',
						myx_huailong: '怀龙',
						myx_huailong_info: '锁定技,当你成为【酒】或其他角色使用牌的目标时,你摸一张牌,你当前回合/下个回合手牌上限-1;回合结束时,若你没有手牌,你选择一名角色,令其获得一张【梅】.',
						myx_huailong_mei: '怀龙',
						myx_huailong_mei_info: '锁定技,当你成为【酒】或其他角色使用牌的目标时,你摸一张牌,你当前回合/下个回合手牌上限-1;回合结束时,若你没有手牌,你选择一名角色,令其获得一张【梅】.',
						myx_huailong_sha: '怀龙',
						myx_huailong_qipai: '怀龙',
						myx_huailong_jieshu: '怀龙',
						myx_qixiang: '祈禳',
						myx_qixiang_info: '出牌阶段每种花色限一次,你可以修习一门仙术:将♦️️牌当做【星火燎原】,♥️️牌当做【妙手回春】,♣️️牌当做【闪电风暴】,♠️️牌当做【上善若水】.',
						myx_xiudao: '修道',
						myx_xiudao_info: '游戏开始时,你开始准备飞升之术.',
						xiudao_feng: '风',
						xiudao_lei: '雷',
						xiudao_shui: '水',
						xiudao_huo: '火',
						myx_yuhua: '羽化',
						myx_yuhua_info: '觉醒技,回合结束时,若你有仙术修习到大成,你飞升成仙,失去〖修道〗和〖祈禳〗,根据修习的法术获得对应的效果.',
						xiudao_fangyu: '仙门',
						xiudao_fangyu_info: '锁定技,回合结束时,若你修习过【星火燎原】或【妙手回春】,你视为拥有技能〖八阵〗;若你修习过【闪电风暴】或【上善若水】,你视为拥有技能〖奇才〗.',
						yuhua_feng: '飓风',
						yuhua_feng_info: '出牌阶段限一次,你可以将一张红色牌当作【沐浴回春】使用.',
						yuhua_lei: '惊雷',
						yuhua_lei_info: '出牌阶段限一次,你可以将一张黑色牌当作【雷霆万钧】使用.',
						yuhua_shui: '坎水',
						yuhua_shui_info: '出牌阶段限一次,你可以将一张黑色牌当作【神雨降世】使用.',
						yuhua_huo: '离火',
						yuhua_huo_info: '出牌阶段限一次,你可以将一张红色牌当作【离火灭世】使用.',
						zhugeguo_feng: '御风',
						zhugeguo_feng_info: '当你使用〖飓风〗后,你可以选择一名其他角色并对其造成1点雷电伤害.',
						zhugeguo_lei: '化雷',
						zhugeguo_lei_info: '当你使用〖惊雷〗后,你可以摸2张牌.',
						zhugeguo_shui: '骇浪',
						zhugeguo_shui_info: '当你使用〖坎水〗后,你可以弃置一名角色2张牌.',
						zhugeguo_huo: '浴火',
						zhugeguo_huo_info: '当你使用〖离火〗后,你可以回复1点体力,若你没有受伤,则改为获得1点护甲.',
						zhugeguodacheng: '成仙',
						myx_bazhen: '八阵',
						myx_bazhen_info: '锁定技,若你的装备区没有防具,你视为装备【先天八卦阵】.',
						zhugeguodacheng: '大成',
						zhugeguodacheng1: '大成',
						myx_xianyin: '仙隐',
						myx_xianyin_info: '锁定技,你免疫属性伤害.',
						myx_juejing: '绝境',
						myx_juejing_info: '锁定技,当你进入濒死状态时,若你拥有技能〖绝境〗,你将体力回复至1点,摸等同于当前<胆>数量的牌,获得1枚<胆>标记,若如此做,本回合你再次受到伤害时,防止该伤害,你摸等同于<胆>数量的牌;你的手牌数始终不小于1.',
						myx_jiuzhu: '救主',
						myx_jiuzhu_info: '觉醒技,任意角色回合结束时,若你累积拥有了7枚<胆>标记,你增加3点体力上限并回复3点体力,失去技能〖绝境〗,获得技能〖游龙〗和〖龙魂〗.',
						myx_longhun: '龙魂',
						myx_longhun_info: '锁定技,你的回合内:①你获得1张牌后,失去1枚<胆>标记,若你的<胆>标记数量为0,你失去1点体力,获得1枚<胆>标记;②你使用、打出、弃置1张牌后,获得1枚<胆>标记.你的回合外:若你不因使用或打出而失去1张牌后,获得1枚<胆>标记.你的攻击范围始终+x(x为你的<胆>标记数).若你的<胆>标记数不小于3,你视为装备【赤血青峰】(你至多拥有7枚<胆>标记).',
						myx_youlong: '游龙',
						myx_youlong_info: '出牌阶段,若你拥有技能〖龙魂〗,你可以摸一张牌.',
						myx_qianhuan: '千幻',
						myx_qianhuan_info: '锁定技,你的回合开始和结束时,你随机获得未加入本局游戏的武将的一个技能(觉醒技、主公技、限定技和隐匿技除外),你获得1枚<化身>标记.',
						myx_changsheng: '长生',
						myx_changsheng_info: '一名角色进入濒死状态时,你可以弃置所有<化身>标记,令其回复等同于弃置化身一半的体力(向下取整),若回复体力的不是你,你摸等同于回复量的牌;若回复体力的是你且本次回复量大于体力上限,你摸等同于超出部分数量的牌.',
						myx_xiandao: '仙道',
						myx_xiandao_info: '主公技,锁定技,当你受到1点伤害,你获得1枚<化身>标记.',
						myx_weimu: '帷幕',
						myx_weimu_info: '锁定技,你始终背面朝上,其他角色的回合结束时,你摸一张牌;当你受到伤害时,终止一切结算,你摸两张牌进行一个出牌阶段,若你于此阶段未造成任何伤害,你失去一点体力.',
						myx_shenqu2022: '神躯',
						myx_shenqu2022_info: '锁定技,当你受到其他角色的伤害后,来源选择失去1点体力或交给你一张牌.',
						myx_shenqu2022_boss: '神躯',
						myx_shenqu2022_boss_info: '锁定技,当你受到其他角色的伤害后,来源选择失去1点体力或交给你一张牌.',
						myx_shenji2022: '神戟',
						myx_shenji2022_info: '你的出牌阶段内可以多使用一张【杀】,你的【杀】或【决斗】可以额外指定两个目标.你使用的【杀】或【决斗】造成伤害后,你可以摸X张牌.(X为你的攻击范围,至少为1)',
						myx_shenwei2022: '神威',
						myx_shenwei2022_info: '锁定技,你不能成为延时类锦囊牌的目标且不会被翻面,摸牌阶段额外摸四张牌.当你的体力值首次降至体力上限的一半以下或进入濒死状态时,你将体力值回复至体力上限的一半.获得<神武>,并且获得一个额外的回合.',
						shenwu2022: '神武',
						shenwu2022_info: '锁定技,出牌阶段开始时,从随机三件神武装备牌中选择一件.每当你使用装备牌时,你弃置所有其他角色的防具牌,并随机获得X张【杀】或【决斗】(X为以此法弃置的防具牌数且至少为1)',
						myx_fumojingang: '伏魔金刚杵',
						myx_fumojingang_info: '你使用【杀】指定目标后,令其防具无效.你对有防具的角色造成的伤害+1.',
						myx_fumo2: '伏魔',
						myx_datie: '神工',
						myx_datie_info: '出牌阶段和弃牌阶段开始时,你可以选择一名角色,你从牌堆中所有拥有技能的装备牌里选择一张,令其获得上面的技能直到其回合开始',
						myx_tiewang: '天匠',
						myx_tiewang_info: '回合开始时,或当你受到伤害/失去体力时,你可以选择一名角色,若其装备区里有拥有技能的装备牌,你从中选择一张,获得上面的技能,弃置该装备牌;否则,你摸一张牌.',
						myx_zhuren: '铸刃',
						myx_zhuren_info: '锁定技,当你累积拥有3/6/9个装备技能后,一名角色的回合结束时,你往牌堆里加入红缎枪/水波剑/混毒弯匕.',
						myx_1V2: '山海',
						myx_shanhaijingsixie: '祀邪',
						myx_shanhaijingsixie_info: '准备阶段,你可以获得一个技能,若此时拥有超过三个技能,则需将技能弃置至三个.',
						myx_gongao: '功獒',
						myx_gongao_info: '锁定技,①当一张牌因弃置而进入弃牌堆时,你获得一枚<功>标记;②若你的<功>标记数量大于体力上限,你失去等同于你体力上限的<功>标记,增加一点体力上限并回复一点体力;③当你进入濒死状态时,你可以减少2点体力上限,将体力回复至1点.',
						myx_juyi: '举义',
						myx_juyi_info: '觉醒技,回合开始时,若你的体力上限大于场上存活角色数,你摸等同于当前体力上限张牌,获得技能〖守困〗和〖威重〗,并失去〖功獒①〗和〖功獒②〗.',
						myx_shoukun: '守困',
						myx_shoukun_info: '锁定技,回合开始时,若你的判定区里没有【兵粮寸断】,你摸两张牌,将一张手牌当作【兵粮寸断】置入自己的判定区;若你的摸牌阶段被跳过,你失去1点体力或体力上限,摸一张牌;若你的摸牌阶段没有被跳过,你增加1点体力上限并回复1点体力.',
						myx_zhanxing: '占星',
						myx_zhanxing_info: '当你受到一次伤害后,你将伤害改为1点,你可以选择一项:1. 随机修改一次星象;2. 对一名其他角色发动〖观虚〗.你死亡时,你可以令一名其他角色获得〖占星〗.',
						myx_huangjing: '黄经',
						myx_huangjing_info: '游戏开始时,你获得「丹田」、「庭宫」两个标记.每当你获得标记时,根据获得的标记执行以下效果:「丹田」,你令一名角色所有手牌均视为【无懈可击】;「庭宫」,令一名角色弃置一张牌,剩余的手牌均视为【桃】.当你拥有标记时,可以执行以下效果:「丹田」,失去锦囊牌时横置一名角色,本轮第一次使用基本牌时对一名角色造成1点火焰伤害;「庭宫」,其他角色摸牌阶段开始时,其放弃摸牌,你与其各摸1张牌并交给其任意数量的牌(不少于1张).',
						myx_lianli: '炼理',
						myx_lianli_info: '锁定技,当你受到伤害时,随机移除一个标记;当你于本轮第一次失去最后的基本牌/锦囊牌时,若标记已移除,随机获得一个已移除的标记.每当你移除一个标记时,你增加一点体力上限并回复1点体力,令一名其他角色弃置一张牌;每当你获得一个标记时,你减少一点体力上限并摸一张牌.',
						myx_taozi: '庭宫',
						myx_tinggongwuxie: '庭宫',
						myx_lianli_mark: '炼理',
						dwbj_zhanmeng: '占梦',
						dwbj_zhanmeng_info: '一名其他角色的结束阶段开始时,若你本回合:每受到1点伤害,你可以摸2张牌;每成为过1张普通锦囊牌的目标,你可以摸1张牌,若如此做,你需交给当前回合角色一张牌,若你以此法交出的牌为:1.黑色,你视为对其使用一张雷【杀】;2.红色,你观看其手牌并可以选择一张你没有的花色的牌获得之.',
						dwbj_yiyu: '呓语',
						dwbj_yiyu_info: '摸牌阶段,你可以改为展示牌堆顶的三张牌并获得这些牌,若你以此法获得的牌颜色均相同,则你可以将其中的一张牌交给一名其他角色,你获得其区域内一张牌.',
						dwbj_luozi: '落子',
						dwbj_luozi_info: '锁定技,当你于一个回合第奇数次使用一张牌后,你将牌堆顶的一张牌置于自己的武将牌上,称为<子>.',
						dwbj_tizi: '提子',
						dwbj_tizi_info: '出牌阶段各限一次,你可以:①将一张<子>置于牌堆的一端,你从另一端摸一张牌;②将一张<子>合理的置入一名角色的区域内,其需交给你一张手牌,若目标角色为你或其他目标角色没有手牌,则改为你摸一张牌.',
						dwbj_miaoshou: '妙手',
						dwbj_miaoshou_info: '每名角色限一次,准备阶段或结束阶段,你可以将场上的一张牌置入你的<子>中,你交给区域内失去牌的角色一张相同颜色的<子>牌.',
						myx_qiwu: '祈吴',
						myx_qiwu_info: '当一名吴势力角色于一回合内使用第一张牌时,你展示牌堆顶的一张牌,你获得此牌并可以分配给任意一名角色,若使用的牌颜色与显示的牌相同,令其摸一张牌且本回合其使用该颜色的牌无次数和距离限制.',
						myx_qiwu_heibuff: '祈吴',
						myx_qiwu_hongbuff: '祈吴',
						myx_shuya: '淑雅',
						myx_shuya_info: '锁定技,每当你于回合外失去牌后,你获得一枚<祈>标记.你可以根据<祈>标记的数量依次获得以下效果:一枚,你不能被横置;二枚,你不能成为延时锦囊牌的目标;三枚,你受到的伤害-1;四枚或以上,你拥有上述的所有效果(<祈>标记上限为你的体力上限).准备阶段,你须移去所有<祈>标记,你摸X张牌(X为你移去<祈>的数量).',
						dwbj_dingshu: '定数',
						dwbj_dingshu_info: '出牌阶段,牌堆顶的三张牌对你可见.当你于此阶段每使用一张牌时,你可以将牌堆顶三张牌中的一张牌置于牌堆底.出牌阶段,你可以从牌堆顶的三张牌中获得牌堆顶任意张点数之和为9倍数的牌,若你以此法获得了至少X张牌,则你本回合不能再以此法获得牌(X为你的体力上限).',
						dwbj_shoumi: '守秘',
						dwbj_shoumi_info: '锁定技,当你于回合外:1.因弃置而失去一张牌时,你摸一张牌;2.当其他角色获得你的牌时,你将其一张牌置于牌堆顶.',
						myx_wujie: '五阶',
						myx_wujie_info: '五阶武将特权:你的摸牌数量+2,你使用【杀】的次数+1,游戏开始时你额外摸2张牌.',
						myx_jlshenzy: '将灵',
						myx_jlshenzy_info: '将灵神赵云,拥有技能【<span style="color: #9933ff"><abbr title="绝境:准备阶段、结束阶段或当你进入或脱离濒死状态时,你有68%的概率摸2~4张牌并回复1点体力."><ins>绝境</ins></abbr></span>】、【<span style="color: #9933ff"><abbr title="龙魂:你使用【杀】或【桃】时,有89.2%的概率此牌伤害或回复值增加1~3点,且你使用【闪】或【无懈可击】时,有89.2%概率获得当前回合角色至多2张牌."><ins>龙魂</ins></abbr></span>】',
						myx_jlnianshou: '将灵',
						myx_jlnianshou_info: '将灵年兽,拥有技能【<span style="color: #9933ff"><abbr title="反戈:当你受到伤害后,你有88%的概率摸两张牌,获得伤害来源至多2张牌,再对伤害来源造成1点火焰伤害."><ins>反戈</ins></abbr></span>】、【<span style="color: #9933ff"><abbr title="寻猎:一名已受伤的其他角色回合结束时,你有82%的概率选择一项:令其回复1点体力并摸2张牌;或对其造成1点火焰伤害并随机弃置其2张牌.(每轮限触发2次)"><ins>寻猎</ins></abbr></span>】',
						myx_jlsunx: '将魂',
						myx_jlsunx_info: '将魂孙休,拥有技能【<span style="color: #9933ff"><abbr title="诏缚:当你受到伤害后,你有82.8%的概率令伤害来源获得1枚【诏缚】标记直到其回合结束(有【诏缚】标记的角色使用或打出一张牌后,需弃置等同于其标记数量的牌,至多为3)."><ins>诏缚</ins></abbr></span>】、【<span style="color: #9933ff"><abbr title="宴诛:当一名拥有【诏缚】标记的角色弃牌时,你可以获得其中一张."><ins>宴诛</ins></abbr></span>】、【<span style="color: #9933ff"><abbr title="兴学:一名角色的结束阶段,你有80.8%的概率令其摸2~4张牌并回复1点体力."><ins>兴学</ins></abbr></span>】',
						myx_jlgs: '将灵',
						myx_jlgs_info: '将灵关索,拥有技能【<span style="color: #9933ff"><abbr title="撷芳:出牌阶段开始时,你有80.2%的概率获得以下效果:摸X张牌、此阶段计算与其他角色的距离-X、此阶段可以多使用X张【杀】,且【杀】的伤害+X(此阶段限触发2次),X为场上女性角色数+1."><ins>撷芳</ins></abbr></span>】、【<span style="color: #9933ff"><abbr title="征南:一名角色受到伤害后,若其体力值小于等于你,你有90.2%的概率摸1~3张牌,在<武圣>、<当先>、<制蛮>里选择并获得一个技能直到你的回合结束(每回合限4次),若未获得技能则你回复1点体力."><ins>征南</ins></abbr></span>】',
						myx_zhongyeguanxing_jieshao: '规则',
						myx_zhongyeguanxing_jieshao_info: '2021年新服龙舟活动2.0<br><span style="color: #db4ae8">星象系统</span><br>游戏开始时,根据敌将的不同来确定首轮星象,各BOSS对应的首轮星象为:<br><span style="color: #ffed22">青龙:东官,朱雀:南官,白虎:西官,玄武:北官</span><br>牌局内星象会进行切换,切换的方式有以下几种:<br>1. 从第二轮开始,每轮开始时更换星象:按照东官-南官-西官-北官的顺序循环更换;<br>2. 玩家发动技能【奇门】(完成任务)时,会将星象按照东官-南官-西官-北官的顺序更换为下一顺序的星象;<br>3. 完成所有观星任务后,星象固定为初始星象.',
						//活动
						myx_boss_longhui: '龙慧',
						myx_boss_longhui_info: '锁定技,准备阶段开始时,从牌堆或弃牌堆中随机获得2张锦囊牌,如果当前星象为东官,改为获得4张锦囊牌.你视为使用一张南蛮入侵/万箭齐发.',
						myx_boss_longlin: '龙鳞',
						myx_boss_longlin_info: '锁定技,当你受到伤害类锦囊造成的伤害时,防止该伤害.如果当前星象为东官,当你使用锦囊牌造成伤害时,令该伤害+1.',
						myx_boss_jiaomu: '角木',
						myx_boss_jiaomu_info: '锁定技,当你使用锦囊牌后,所有友方角色摸一张牌.',
						myx_boss_kangjin: '亢金',
						myx_boss_kangjin_info: '锁定技,当你成为锦囊牌的目标后,所有友方角色摸一张牌.',
						myx_boss_zhuyu: '朱羽',
						myx_boss_zhuyu_info: '锁定技,准备阶段开始时,你从牌堆中或弃牌堆中获得2张红色牌和2张黑色牌.',
						myx_boss_tianhuo: '天火',
						myx_boss_tianhuo_info: '出牌阶段限2次,你可以弃置一张牌,对至多两名敌方角色各造成1点火焰伤害.如果当前星象为南官,则改为限4次.',
						myx_boss_yihuo: '翼火',
						myx_boss_yihuo_info: '锁定技,你造成的伤害视为火焰伤害.当你造成火焰伤害后,受伤角色随机弃置一张牌.',
						myx_boss_xingri: '星日',
						myx_boss_xingri_info: '锁定技,你造成的伤害视为火焰伤害.当你造成火焰伤害后,你摸一张牌.',
						myx_boss_huwei: '虎威',
						myx_boss_huwei_info: '锁定技,准备阶段开始时,从牌堆或弃牌堆中随机获得3张【杀】.如果当前星象为西官,则改为随机获得6张【杀】.',
						myx_boss_tianxiao: '天啸',
						myx_boss_tianxiao_info: '锁定技,你使用【杀】没有距离限制,你使用【杀】的次数+2且指定所有敌方角色为目标.如果当前为西官,则使用【杀】无次数限制.',
						myx_boss_kuimu: '奎木',
						myx_boss_kuimu_info: '锁定技,当你使用【杀】造成伤害后,所有敌方角色受到1点伤害.',
						myx_boss_shenshui: '参水',
						myx_boss_shenshui_info: '锁定技,当你使用【杀】造成伤害后,所有己方角色回复1点体力.',
						myx_boss_shengqu: '圣躯',
						myx_boss_shengqu_info: '锁定技,当你受到伤害后,你摸两张牌.如果友方数量大于1,防止你受到的大于1点的伤害.',
						myx_boss_xuankai: '玄铠',
						myx_boss_xuankai_info: '锁定技,当你受到伤害后,你使用的下一张牌不能被响应.当你造成伤害后,你可以摸两张牌,如果当前星象为北官,则改为可以获得受伤角色两张牌.',
						myx_boss_weiyue: '危月',
						myx_boss_weiyue_info: '每回合限一次,当你在摸牌阶段外获得或失去手牌后,可以对一名敌方角色造成1点伤害.',
						myx_boss_doumu: '斗木',
						myx_boss_doumu_info: '每回合限一次,当你在摸牌阶段外获得或失去手牌后,可以选择一名敌方角色,随机弃置其一张牌,并视为对其使用一张【决斗】.',
						myx_zygx2021_donggong: '东宫',
						myx_zygx2021_donggong_info: '锁定技,出牌阶段,你使用的前三张普通锦囊牌可以增加或减少一个目标.',
						myx_zygx2021_xigong: '西宫',
						myx_zygx2021_xigong_info: '锁定技,出牌阶段,你使用普通【杀】首次造成的伤害+1.',
						myx_zygx2021_nangong: '南宫',
						myx_zygx2021_nangong_info: '锁定技,出牌阶段,你首次造成的属性伤害+2.',
						myx_zygx2021_beigong: '北宫',
						myx_zygx2021_beigong_info: '锁定技,出牌阶段,你每使用或打出两张牌后,可以摸一张牌.',
						myx_boss_xingxiu_baiyin: '星宿',
						myx_boss_xingxiu_baiyin_info: '锁定技,星宿们受到星辰的庇护:受到大于2的伤害时,将伤害改为2;摸牌阶段摸牌数量+2;每名角色回合结束后,若你不是全场手牌最多的角色,你摸1张牌.',
						myx_zygx_qimen: '奇门',
						myx_zygx_qimen_info: '出牌阶段限三次,选择一名角色,弃置一张当前观星任务指定花色点数类型的牌,将星象切换至下个星象,令该角色失去1点体力.若你在一回合内造成超过3点伤害,回合结束时随机从牌堆或弃牌堆中获得一张剩余观星任务指定的牌.完成所有观星任务后,所有敌方角色失去所有技能和手牌.',
						myx_zygx_qimen2: '奇门',
						myx_zygx_qimen2_info: '出牌阶段限三次,选择一名角色,弃置一张当前观星任务指定花色点数类型的牌,将星象切换至下个星象,令该角色失去1点体力.若你在一回合内造成超过3点伤害,回合结束时随机从牌堆或弃牌堆中获得一张剩余观星任务指定的牌.完成所有观星任务后,所有敌方角色失去所有技能和手牌.',
						myx_zygx_qimen3: '奇门',
						myx_zygx_qimen3_info: '出牌阶段限三次,选择一名角色,弃置一张当前观星任务指定花色点数类型的牌,将星象切换至下个星象,令该角色失去1点体力.若你在一回合内造成超过3点伤害,回合结束时随机从牌堆或弃牌堆中获得一张剩余观星任务指定的牌.完成所有观星任务后,所有敌方角色失去所有技能和手牌.',
						myx_zygx_qimen4: '奇门',
						myx_zygx_qimen4_info: '出牌阶段限三次,选择一名角色,弃置一张当前观星任务指定花色点数类型的牌,将星象切换至下个星象,令该角色失去1点体力.若你在一回合内造成超过3点伤害,回合结束时随机从牌堆或弃牌堆中获得一张剩余观星任务指定的牌.完成所有观星任务后,所有敌方角色失去所有技能和手牌.',
						myx_cskmt_jieshao: '规则',
						myx_cskmt_jieshao_info: '2021年新服刺客伍六七联动活动<br>①援军协战<br>牌局进行到第二轮,万年公主将会作为援军加入战斗<br>②秘籍<br>本次联动活动场牌局内新增<伪装>机制,玩家可以通过使用该技能将自己武将改为密探.密探拥有技能<知彼>(限定技,出牌阶段,选择一名敌方角色,该角色本回合所有技能失效.),同时密探将携带玩家在牌局外通过秘籍养成的所有技能.<br>③敌将详情<br>随机一个势力的两个主公武将.',
						myx_boss_hujia: '护驾',
						myx_boss_hujia_info: '锁定技,当你需要使用或打出【闪】时,你摸1张牌,当前回合角色随机弃置一张牌,若弃置的牌为【闪】,视为你使用或打出一张【闪】.',
						myx_boss_songwei: '颂威',
						myx_boss_songwei_info: '锁定技,当一名敌方角色的判定牌生效后,你随机获得其一张牌.',
						myx_boss_taiwang: '太王',
						myx_boss_taiwang_info: '锁定技,每回合限一次,当有角色一次性受到大于等于两点伤害后,你增加1点体力上限并回复1点体力,摸等同于伤害量的牌.',
						myx_boss_xingshuai: '兴衰',
						myx_boss_xingshuai_info: '锁定技,当你回复体力、进入或脱离濒死状态后,你令所有敌方角色依次流失一点体力.',
						myx_boss_wenhui: '文绘',
						myx_boss_wenhui_info: '当你在回合内弃置其他角色的牌后,你从牌堆中随机获得一张同类型的牌,若没有则改为摸一张牌,你以此法获得的牌本回合不计入使用次数和手牌上限.',
						myx_boss_qintao: '亲讨',
						myx_boss_qintao_info: '若你使用指定唯一目标的【杀】未造成伤害,结算完成后,你可以流失一点体力,令目标选择一项:流失一点体力;或令你弃置其两张牌.',
						myx_boss_xianggong: '乡公',
						myx_boss_xianggong_info: '锁定技,你受到伤害后,伤害来源需弃置等同于你已损失体力值张牌(至多为6),摸一张牌.',
						myx_boss_jiuyuan: '救援',
						myx_boss_jiuyuan_info: '锁定技,每回合限2次,当一名其他角色于其出牌阶段回复体力时,你回复一点体力并摸一张牌,若该角色为敌方角色,取消其体力回复.',
						myx_boss_zhiba: '制霸',
						myx_boss_zhiba_info: '锁定技,当你的体力上限变化后,所有友方角色各摸1张牌,你回复1点体力.',
						myx_boss_lijun: '立军',
						myx_boss_lijun_info: '锁定技,每回合限3次,一名角色于其回合内使用一张【杀】结算完毕后,你令所有友方角色各摸一张牌.',
						myx_boss_zhaofu: '诏缚',
						myx_boss_zhaofu_info: '锁定技,每回合限2次,当你受到伤害后,你令受到的伤害不大于2,你令所有敌方角色各随机弃置一张牌,每弃置一张牌,你摸一张牌.',
						myx_boss_chouhai: '仇海',
						myx_boss_chouhai_info: '锁定技,当你受到伤害时,若伤害来源为【杀】且你没有手牌,此【杀】伤害+1,你摸1张牌并增加1点体力上限;否则,你增加1点体力上限并摸等同于你已损失体力值的牌(至多为6,且效果②每回合限2次).',
						myx_boss_guiming: '归命',
						myx_boss_guiming_info: '锁定技,你的回合内,所有其他角色均视为已受伤.',
						myx_mitan_zhibi: '知彼',
						myx_mitan_zhibi_info: '限定技,出牌阶段,你可以选择一名敌方角色,该角色本回合所有技能失效.',
						myx_mitan_anqi: '暗器',
						myx_mitan_anqi_info: '锁定技,当你对一名其他角色造成伤害后,若你不在该角色攻击范围内,你有30%~90%的概率随机弃置该角色一张牌.',
						myx_mitan_duanzao: '锻造',
						myx_mitan_duanzao_info: '锁定技,准备阶段,你有30%~90%的概率从牌堆中随机获得一张装备牌.',
						myx_mitan_neigong: '内功',
						myx_mitan_neigong_info: '锁定技,准备阶段,你有30%~90%的概率增加1点体力上限.',
						myx_mitan_chuyi: '厨艺',
						myx_mitan_chuyi_info: '锁定技,当你使用【桃】或【酒】时,你有60%的概率摸1~2张牌.',
						myx_mitan_baolu: '暴露',
						myx_mitan_baolu_info: '锁定技,当你受到敌方角色造成的伤害后,你有75%的概率将武将牌替换回你的初始武将牌;若未触发,则你摸1张牌.',
						myx_cskmt_yinni: '隐匿',
						myx_cskmt_yinni_info: '限定技,出牌阶段,你可以将武将牌更换为【密探】,并获得对应的能力效果.',
						myx_boss_decade_jijiang: '激将',
						myx_boss_decade_jijiang_info: '锁定技,当你使用或打出【杀】后,你摸一张牌,若此牌是基本牌,你的下个出牌阶段出【杀】次数+1.',
						myx_boss_decade_ruoyu: '若愚',
						myx_boss_decade_ruoyu_info: '锁定技,准备阶段,若你是体力值最少的角色,回复一点体力值.',
						myx_boss_decade_suizhan: '随战',
						myx_boss_decade_suizhan_info: '锁定技,摸牌阶段你额外摸X张牌(X为你身上<逆>的个数).',
						myx_boss_decade_qinwang: '勤王',
						myx_boss_decade_qinwang_info: '锁定技,当有角色发起【决斗】时,你从牌堆随机获得一张基本牌.',
						myx_boss_decade_zhuning: '诛佞',
						myx_boss_decade_zhuning_info: '当你使用【杀】造成伤害时,若此伤害为你本回合首次造成伤害,该伤害+1.',
						myx_boss_decade_fengxiang: '封乡',
						myx_boss_decade_fengxiang_info: '当你获得其他角色的牌后,你可以立即将此牌当做无限距离且不计入次数的【杀】对任意一名其他角色使用.',
						myx_boss_decade_jitong: '继统',
						myx_boss_decade_jitong_info: '锁定技,结束阶段,若你本回合未使用【杀】造成伤害,免疫你下次受到的伤害.',
						myx_cskmt_bossbuff: '密探',
						bosstiaozhan_tiaoguo: '挑战',
						olm_shenwuzaishi_guize: '规则',
						olm_shenwuzaishi_guize_info: '2022年Online神武再世活动<br>新玩法-全服击破:<br>1、兽群被击破后会出现更强的群体,一共3轮分别为<普通兽群>、<进阶兽群>、<困难兽群>;<br>3、随着击破进度的提升,将解锁新的气势效果,并加入新的首领.',
						olm_shenwuzaishi_guize2: '牌堆',
						olm_shenwuzaishi_guize2_info: '使用军争牌堆,移除【乐不思蜀】、【兵粮寸断】、【无中生有】、【借刀杀人】,加入新牌【撒豆成兵】、【移花接木】;<神>势力武将开局会获得对应的神级武器.',
						olm_shenwuzaishi_guize3: '击杀',
						olm_shenwuzaishi_guize3_info: '1、击杀烛阴(小怪)的玩家角色回复1点体力,摸三张牌;<br>2、玩家角色死亡后,其队友各摸一张牌,回复1点体力.若玩家操控的角色是<神>势力,则改为摸三张牌,回复1点体力;<br>3、传承:神势力武将阵亡时,可以选择一名己方角色.若其势力非神,则改为神势力;若其势力为神,则将武将牌翻至正面,回复体力至体力上限,并将手牌摸至5张.',
						olm_wanjia_qiaojiang: '巧匠',
						olm_wanjia_qiaojiang_info: '气势效果:游戏开始时,你随机使用1张装备牌.',
						olm_boss_kunshou: '困兽',
						olm_boss_kunshou_info: '觉醒技,你陷入濒死时立即将体力回复至5,并且将手牌补至5,将武将牌翻回至正面,并获得〖崩坏〗.',
						olm_shenwu2022_kuangbao: '狂暴',
						olm_shenwu2022_kuangbao_info: '气势效果:你使用【杀】的次数+1.',
						olm_qilinwanlanjian: '麒麟挽澜剑',
						olm_qilinwanlanjian_info: '弃牌阶段开始时,你可以摸2张牌并弃置1张牌,你可以视为对一名角色使用一张无距离限制的火【杀】.',
						olm_qmbzjieshao: '规则',
						olm_qmbzjieshao_info: '2021年Online挑战模式奇门八阵<br>请务必直接作为Boss参战!!且禁止托管!!<br>毛坯版:进入模式后玩家先选择关卡,进行武将和技能的选择,玩家和敌方将领为五阶,敌方前锋为四阶,击败所有敌军方可获胜.',
						olm_qmbz_sijiesuicong: '前锋',
						olm_qmbz_sijiesuicong_info: '前锋:摸牌阶段摸牌数量+2.',
					},
					characterReplace: {
						myx_sundeng: ['sundeng', 'myx_sundeng'],
						myx_liuchen: ['liuchen', 're_liuchen', 'myx_liuchen'],
						myx_hetaihou: ['hetaihou', 'myx_hetaihou'],
						myx_wangrong: ['ol_wangrong', 'myx_wangrong'],
						myx_zhaoyun: ['zhaoyun', 're_zhaoyun', 'myx_zhaoyun'],
						myx_jiaxu: ['jiaxu', 're_jiaxu', 'sp_jiaxu', 'myx_jiaxu'],
						myx_zhugedan: ['zhugedan', 'myx_zhugedan'],
						myx_yeguanjixiong_huangchengyan: ['huangchengyan', 'myx_yeguanjixiong_huangchengyan'],
					},
					characterFilter: {
						myx_hulaoguan2022lvbu(mode) {
							return mode == 'identity';
						},
						myx_hulaoguan2022lvbu_boss(mode) {
							return mode == 'boss';
						},
						myx_sundeng(mode) {
							return mode != 'boss';
						},
						myx_zuoci(mode) {
							return mode != 'boss';
						},
					},
					skill: {
						dwbj_shoumi: {
							forced: true,
							trigger: {
								player: 'loseAfter',
							},
							filter(event, player) {
								if (event.type != 'discard' || _status.currentPhase == player) return false;
								return true;
							},
							content() {
								player.draw();
							},
							group: 'dwbj_shoumi_fanji',
							subSkill: {
								fanji: {
									trigger: {
										global: 'gainAfter',
									},
									forced: true,
									filter(event, player) {
										if (player == event.player || _status.currentPhase == player) return false;
										var evt = event.getl(player);
										return evt && evt.cards2 && evt.cards2.length && event.player.countCards('he') > 0;
									},
									content() {
										'step 0';
										player.choosePlayerCard(trigger.player, 'he', true);
										('step 1');
										if (result.bool) {
											game.log(player, '将', trigger.player, '的一张牌置于了牌堆顶');
											var next = trigger.player.lose(result.cards, ui.cardPile);
											next.insert_card = true;
											player.$throw(result.cards, 1000);
										}
									},
								},
							},
						},
						dwbj_dingshu: {
							enable: 'phaseUse',
							init(player) {
								player.storage.dingshusuanshu = 0;
							},
							filter(event, player) {
								return player.storage.dingshusuanshu <= player.maxHp - 1;
							},
							content() {
								'step 0';
								var cards = get.cards(3);
								event.cards = cards;
								player.chooseButton(['定数:选择要获得的牌', cards], false).set('selectButton', function (button) {
									var num = 0;
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										num += ui.selected.buttons[i].number;
									}
									if (num == 9 || num == 18 || num == 27 || num == 36) return ui.selected.buttons.length;
									return ui.selected.buttons.length + 2;
								});
								('step 1');
								if (result.links?.length) {
									var cards = result.links.slice(0);
									if (Array.isArray(cards))
										for (var i of cards) {
											player.gain(i).delay = false;
											player.storage.dingshusuanshu++;
										}
								} else event.finish();
							},
							group: ['dwbj_dingshu_jiesuo', 'dwbj_dingshu_yongpai', 'dwbj_dingshu_qingchu'],
							subSkill: {
								jiesuo: {
									trigger: {
										player: 'phaseUseBegin',
									},
									silent: true,
									firstDo: true,
									content() {
										player.addTempSkill('dwbj_dingshu_kanpai', 'phaseUseEnd');
									},
									forced: true,
									popup: false,
								},
								kanpai: {
									mark: true,
									intro: {
										mark(dialog, content, player) {
											if (player != game.me) return get.translation(player) + '观看牌堆中...';
											if (get.itemtype(_status.pileTop) != 'card') return '牌堆顶无牌';
											var cards = []; //感谢铝宝和天牢令
											var num = Math.min(3, ui.cardPile.childElementCount);
											if (num == 0) return '';
											for (var i = 0; i < num; i++) {
												var card = ui.cardPile.childNodes[i];
												if (card) cards.push(card);
												else break;
											}
											dialog.add(cards);
										},
									},
								},
								yongpai: {
									trigger: {
										player: 'useCardAfter',
									},
									filter(event, player) {
										return player.isPhaseUsing();
									},
									forced: true,
									content() {
										'step 0';
										var cards = get.cards(3);
										player.chooseButton(['定数:选择置于牌堆底的一张牌', cards.slice(0)]).set('ai', function (button) {
											return get.value(button.link, _status.event.player);
										});
										while (cards.length) {
											ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
										}
										('step 1');
										if (result.links?.length) {
											ui.cardPile.appendChild(result.links[0], ui.cardPile.firstChild);
											if (player == game.me || player.isUnderControl()) game.log(player, '将', result.links[0], '置于牌堆底');
											else game.log(player, '将一张牌置于牌堆底');
										}
										game.updateRoundNumber();
									},
									ai: {
										result: {
											player: 1.2,
										},
									},
								},
								qingchu: {
									forced: true,
									popup: false,
									forced: true,
									trigger: { global: 'phaseEnd' },
									filter(event, player) {
										return player.storage.dingshusuanshu != 0;
									},
									content() {
										player.storage.dingshusuanshu = 0;
									},
								},
							},
						},
						myx_shuya: {
							audio: 'ext:命运线/audio:1',
							trigger: {
								player: 'loseAfter',
							},
							_priority: 15,
							forced: true,
							preHidden: true,
							forced: true,
							filter(event, player) {
								if (player == _status.currentPhase) return false;
								return player.countMark('myx_qiwu_mark') < player.maxHp;
							},
							content() {
								player.addMark('myx_qiwu_mark');
							},
							group: ['myx_shuya_mopai', 'myx_shuya_tiesuo', 'myx_shuya_qianjie', 'myx_shuya_shoushang'],
							subSkill: {
								mopai: {
									forced: true,
									trigger: { player: 'phaseZhunbeiBegin' },
									_priority: 12,
									filter(event, player) {
										return player.countMark('myx_qiwu_mark') > 0;
									},
									content() {
										'step 0';
										var num = player.countMark('myx_qiwu_mark');
										event.num = num;
										player.removeMark('myx_qiwu_mark', num);
										('step 1');
										player.draw(event.num);
										('step 2');
										if (player.hasSkill('drlt_qianjie')) player.removeSkill('drlt_qianjie');
									},
								},
								tiesuo: {
									trigger: {
										player: 'linkBegin',
									},
									forced: true,
									filter(event, player) {
										return !player.isLinked() && (player.countMark('myx_qiwu_mark') == 1 || player.countMark('myx_qiwu_mark') >= 4);
									},
									content() {
										trigger.cancel();
									},
									ai: {
										effect: {
											target(card) {
												if (card.name == 'tiesuo') return 'zeroplayertarget';
											},
										},
									},
								},
								qianjie: {
									mod: {
										targetEnabled(card, player, target) {
											if (get.type(card) == 'delay' && (target.countMark('myx_qiwu_mark') == 2 || target.countMark('myx_qiwu_mark') >= 4)) return false;
										},
									},
								},
								shoushang: {
									trigger: {
										player: 'damageBegin',
									},
									forced: true,
									filter(event, player) {
										return player.countMark('myx_qiwu_mark') >= 3 && event.num >= 1;
									},
									content() {
										if (trigger.num >= 1) {
											trigger.num--;
										}
									},
									ai: {
										effect: {
											target(card, player, target) {
												if (get.tag(card, 'damage') && target.countMark('myx_qiwu_mark') == 4) {
													if (player.hasSkillTag('jueqing', false, target)) return;
													return 0.1;
												}
											},
										},
									},
								},
							},
						},
						myx_qiwu_heibuff: {
							forced: true,
							popup: false,
							mod: {
								targetInRange(card, player) {
									if (get.color(card) == 'black') return true;
								},
								cardUsable(card, player) {
									if (get.color(card) == 'black') return Infinity;
								},
							},
						},
						myx_qiwu_hongbuff: {
							forced: true,
							popup: false,
							mod: {
								targetInRange(card, player) {
									if (get.color(card) == 'red') return true;
								},
								cardUsable(card, player) {
									if (get.color(card) == 'red') return Infinity;
								},
							},
						},
						myx_qiwu: {
							audio: 'ext:命运线/audio:1',
							forced: true,
							trigger: {
								global: 'useCardAfter',
							},
							init(player) {
								player.storage.myx_qiwujishu = true;
								player.storage.myx_qiwured = false;
								player.storage.myx_qiwublack = false;
							},
							filter(event, player, card) {
								return event.player && event.player.group == 'wu' && player.storage.myx_qiwujishu == true && event.card;
							},
							_priority: 5,
							content() {
								'step 0';
								var card = get.cards()[0];
								event.pai = card;
								player.showCards(card);
								('step 1');
								player.chooseTarget(false, lib.filter.notMe, '祈吴:你可以将此牌交给一名其他角色;或点取消自己保留').set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								});
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									target.gain(event.pai, 'gain2');
								} else player.gain(event.pai, 'gain2');
								('step 3');
								if (get.color(trigger.card) == get.color(event.pai)) {
									trigger.player.draw();
									if (get.color(trigger.card) == 'red') trigger.player.addTempSkill('myx_qiwu_hongbuff', 'phaseEnd');
									if (get.color(trigger.card) == 'black') trigger.player.addTempSkill('myx_qiwu_heibuff', 'phaseEnd');
								}
								//if(get.type(trigger.card)==get.type(event.pai)&&player.countMark('myx_qiwu_mark')<4)player.addMark('myx_qiwu_mark');
								player.storage.myx_qiwujishu = false;
							},
							group: ['myx_qiwu_mark', 'myx_qiwu_qingchu'],
							subSkill: {
								mark: {
									marktext: '祈',
									intro: {
										name: '祈',
										content(storage, player) {
											var str = '淑雅:<br>';
											if (player.countMark('myx_qiwu_mark') == 1 || player.countMark('myx_qiwu_mark') >= 4) str += '<li>你不能被横置<br>';
											if (player.countMark('myx_qiwu_mark') == 2 || player.countMark('myx_qiwu_mark') >= 4) str += '<li>你不能成为延时锦囊牌的目标<br>';
											if (player.countMark('myx_qiwu_mark') == 3 || player.countMark('myx_qiwu_mark') >= 4) str += '<li>你受到的伤害-1<br>';
											if (str == '淑雅:<br>') return '当前暂无效果';
											return str;
										},
									},
								},
								qingchu: {
									forced: true,
									charlotte: true,
									popup: false,
									trigger: {
										global: 'phaseEnd',
									},
									_priority: 9,
									filter(event, player) {
										return player.storage.myx_qiwujishu == false;
									},
									content() {
										player.storage.myx_qiwujishu = true;
										player.storage.myx_qiwured = false;
										player.storage.myx_qiwublack = false;
									},
								},
							},
							ai: {
								expose: 0.2,
								threaten: 1.2,
							},
						},
						olm_qilinwanlanjian: {
							trigger: {
								player: 'phaseDiscardBegin',
							},
							_priority: 58,
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								if (player.hasCard((card) => lib.filter.cardDiscardable(card, player, 'olm_qilinwanlanjian'), 'h')) player.chooseToDiscard('h', true);
								('step 2');
								player.chooseUseTarget('选择一名角色视为对其使用一张无距离限制的火【杀】', { name: 'sha', nature: 'fire' }, false, 'nodistance');
							},
						},
						dwbj_miaoshou: {
							audio: 'ext:命运线/audio:1',
							init(player) {
								if (!player.storage.dwbjmiaoshou) player.storage.dwbjmiaoshou = [];
							},
							trigger: {
								global: 'phaseZhunbeiBegin',
								player: 'phaseJieshuBegin',
							},
							_priority: 3,
							forced: true,
							filter(event, player) {
								if (!player.storage.dwbjmiaoshou) return true;
								return game.hasPlayer(function (current) {
									return !player.storage.dwbjmiaoshou.includes(current);
								});
							},
							content() {
								'step 0';
								player.chooseTarget(
									get.prompt2('dwbj_miaoshou'),
									1,
									function (card, player, target) {
										return target.countCards('he') > 0 && !player.storage.dwbjmiaoshou.includes(target);
									},
									function (target) {
										return -get.attitude(_status.event.player, target);
									}
								);
								('step 1');
								if (result.targets?.length) {
									event.targets = result.targets[0];
								} else event.finish();
								('step 2');
								player.choosePlayerCard(event.targets, 'he', true);
								('step 3');
								if (result.cards?.length) {
									player.addToExpansion(result.cards, event.targets, 'give').gaintag.add('dwbj_luozi');
									event.cards = result.cards;
								} else event.finish();
								('step 4');
								player.chooseCardButton(get.translation('dwbj_tizi'), player.getExpansions('dwbj_luozi'), true).set('filterButton', function (card) {
									return get.color(card) == get.color(event.cards);
								});
								('step 5');
								if (result.links?.length) {
									var card = result.links[0];
									var miaoshoupai = [];
									miaoshoupai.push(card);
									event.miaoshoupai = miaoshoupai;
								}
								('step 6');
								event.targets.gain(event.miaoshoupai, 'gain2');
								('step 7');
								if (!player.storage.dwbjmiaoshou) player.storage.dwbjmiaoshou = [];
								player.storage.dwbjmiaoshou.push(event.targets);
								player.storage.dwbjmiaoshou.sortBySeat();
								player.markSkill('dwbj_miaoshou');
							},
							ai: {
								result: {
									player: 1.5,
								},
							},
						},
						dwbj_tizi: {
							init(player) {
								player.storage.tizikongding = false;
								player.storage.tizigeipai = false;
							},
							enable: 'phaseUse',
							filter(event, player) {
								if (player.storage.tizikongding == true && player.storage.tizigeipai == true) return false;
								if (player.getExpansions('dwbj_luozi').length <= 0) return false;
								return true;
							},
							content() {
								'step 0';
								var list = [];
								if (player.storage.tizikongding == false) {
									list.push('提子①');
									//game.log('1是false');
								}
								if (player.storage.tizigeipai == false) {
									list.push('提子②');
									//game.log('2是false');
								}
								if (list.length) {
									event.list = list;
									event.goto(1);
								}
								('step 1');
								if (event.list.length == 1) {
									event._result = { control: event.list[0] };
									//game.log('长度为1');
								} else player.chooseControl(event.list).set('prompt', '①将一张<子>置于牌堆的一端;<br>②将一张<子>合理的置入一名角色的区域内');
								('step 2');
								if (result.control == '提子①') {
									player.chooseCardButton(get.translation('dwbj_tizi'), player.getExpansions('dwbj_luozi'), true) /*.set('ai',function(){
							return -get.value(button.link)+3;
						})*/;
									event.goto(3);
								} /*(result.control=="提子②")*/ else {
									player.chooseCardButton(get.translation('dwbj_tizi'), player.getExpansions('dwbj_luozi'), true) /*.set('ai',function(){
							return get.value(button.link)+1;
						})*/;
									event.goto(6);
								}
								//else event.finish();
								('step 3');
								if (result.links?.length) {
									var tizipai = result.links[0];
									event.tizipai = tizipai;
									var list = ['置于牌堆顶', '置于牌堆底'];
									player
										.chooseControl(list)
										.set('prompt')
										.set('ai', function () {
											return '置于牌堆底';
										});
								}
								('step 4');
								if (result.control == '置于牌堆顶') {
									game.log(player, '将', event.tizipai, '置于了' + result.control);
									var next = player.lose(event.tizipai, ui.cardPile);
									next.insert_card = true;
									player.$throw(event.tizipai, 1000);
									player.draw('bottom');
									player.storage.tizikongding = true;
								} else if (result.control == '置于牌堆底') {
									game.log(player, '将', event.tizipai, '置于了' + result.control);
									var next = player.lose(event.tizipai, ui.cardPile);
									player.$throw(event.tizipai, 1000);
									player.draw();
									player.storage.tizikongding = true;
								} else event.finish();
								('step 5');
								event.finish();
								('step 6');
								if (result.links?.length) {
									var geipai = result.links[0];
									event.geipai = geipai;
									var pai = [];
									pai.push(geipai);
									event.pai = pai;
									player.chooseTarget('提子:将一张<子>合理的置入一名角色的区域内', true).set('ai', function (target) {
										var player = _status.event.player;
										var att = get.attitude(player, target);
										if (target == player) return 8;
										return att;
									});
								}
								('step 7');
								if (result.targets?.length) {
									target = result.targets[0];
									event.mubiao = target;
									if (get.type(event.geipai) == 'equip') {
										var list = ['装备区', '手牌区'];
										player
											.chooseControl(list)
											.set('prompt')
											.set('ai', function () {
												return '手牌区';
											});
										event.goto(8);
									} else if (get.type(event.geipai) == 'delay') {
										var list = ['判定区', '手牌区'];
										player
											.chooseControl(list)
											.set('prompt')
											.set('ai', function () {
												return '手牌区';
											});
										event.goto(9);
									} else event.goto(10);
								}
								('step 8');
								if (result.control == '装备区') {
									event.mubiao.chooseUseTarget(event.geipai, true);
								} else event.mubiao.gain(event.pai, 'gain2');
								event.goto(11);
								('step 9');
								if (result.control == '判定区') {
									event.mubiao.addJudge(event.geipai);
								} else event.mubiao.gain(event.pai, 'gain2');
								event.goto(11);
								('step 10');
								event.mubiao.gain(event.pai, 'gain2');
								event.goto(11);
								('step 11');
								player.storage.tizigeipai = true;
								('step 12');
								if (event.mubiao == player || event.mubiao.countCards('h') == 0) {
									player.draw();
									event.finish();
								} else {
									event.mubiao
										.chooseCard(true, 'he', `提子:交给${get.translation(player)}一张牌`, function (card) {
											return true;
										})
										.set('ai', function (card) {
											return get.value(card) - 6;
										});
								}
								('step 13');
								if (result.cards?.length) {
									player.gain(result.cards, event.mubiao, 'giveAuto');
									event.finish();
								} else {
									player.draw();
									event.finish();
								}
							},
							group: 'dwbj_tizi_huifu',
							ai: {
								order: 8.2,
								result: {
									player: 2,
								},
							},
							subSkill: {
								huifu: {
									forced: true,
									charlotte: true,
									popup: false,
									forced: true,
									trigger: { global: 'phaseJieshuEnd' },
									_priority: 11,
									filter(event, player) {
										if (player.storage.tizikongding == false && player.storage.tizigeipai == false) return false;
										return true;
									},
									content() {
										player.storage.tizikongding = false;
										player.storage.tizigeipai = false;
									},
								},
							},
						},
						dwbj_luozi: {
							forced: true,
							init(player) {
								player.storage.dwbj_luozijilu = 1;
							},
							intro: {
								markcount: 'expansion',
								name: '子',
								mark(dialog, content, player) {
									var content = player.getExpansions('dwbj_luozi');
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) {
											dialog.addAuto(content);
										} else {
											return `共有${get.cnNumber(content.length)}枚棋子`;
										}
									}
								},
								content(content, player) {
									var content = player.getExpansions('dwbj_luozi');
									if (content && content.length) {
										if (player == game.me || player.isUnderControl()) {
											return get.translation(content);
										}
										return `共有${get.cnNumber(content.length)}枚棋子`;
									}
								},
							},
							trigger: {
								player: 'useCardAfter',
							},
							content() {
								if (player.storage.dwbj_luozijilu % 2 == 1) {
									player.addToExpansion(get.cards(1), 'gain2').gaintag.add('dwbj_luozi');
									player.storage.dwbj_luozijilu++;
								} else player.storage.dwbj_luozijilu++;
							},
							group: ['dwbj_luozi_qingchu'],
							subSkill: {
								qingchu: {
									forced: true,
									charlotte: true,
									popup: false,
									trigger: {
										global: 'phaseJieshuEnd',
									},
									content() {
										player.storage.dwbj_luozijilu = 1;
									},
								},
							},
						},
						dwbj_zhanmeng: {
							trigger: {
								target: 'useCardToTargeted',
							},
							_priority: 10,
							forced: true,
							popup: false,
							init(player) {
								player.storage.dwbjzhanmeng = 0;
							},
							filter(event, player) {
								return get.type(event.card) == 'trick';
							},
							content() {
								player.storage.dwbjzhanmeng++;
							},
							group: ['dwbj_zhanmeng_shanghai', 'dwbj_zhanmeng_geipai', 'dwbj_zhanmeng_qingkong'],
							subSkill: {
								shanghai: {
									forced: true,
									popup: false,
									trigger: {
										player: 'damageEnd',
									},
									_priority: 10,
									filter(event, player) {
										return event.num > 0;
									},
									content() {
										var num = trigger.num;
										for (var i = 0; i < num; i++) {
											player.storage.dwbjzhanmeng += 2;
										}
									},
								},
								geipai: {
									audio: 'ext:命运线/audio:1',
									trigger: {
										global: 'phaseJieshuBegin',
									},
									_priority: 8,
									filter(event, player) {
										return player.storage.dwbjzhanmeng > 0 && event.player != player;
									},
									content() {
										'step 0';
										player.draw(player.storage.dwbjzhanmeng);
										('step 1');
										player.chooseCardTarget({
											position: 'he',
											filterCard: true,
											selectCard: 1,
											filterTarget: _status.currentPhase,
											ai1(card) {
												return 3 - get.value(card);
											},
											ai2(target) {
												var att = get.attitude(player, _status.currentPhase);
												return att + 3;
											},
											prompt: '占梦:请选择要交给当前回合角色的牌',
											forced: true,
										});
										('step 2');
										if (result.targets?.length) {
											var target = result.targets[0];
											player.give(result.cards, target);
											if (get.color(result.cards, false) == 'black') {
												player
													.useCard({ name: 'sha', nature: 'thunder' }, _status.currentPhase, false) /*.set('filterTarget',function(card,player,target){
										return target==_status.event.source;
										}).set('selectTarget',-1).set('source',_status.currentPhase)*/
												event.finish();
											} else {
												event.videoId = lib.status.videoId++;
												var cards = target.getCards('h');
												event.dialog = ui.create.dialog('占梦', cards);
												event.dialog.videoId = event.videoId;
												if (!event.isMine()) {
													event.dialog.style.display = 'none';
												}
												player
													.chooseButton()
													.set('filterButton', function (button) {
														var hs = player.getCards('h');
														player.storage.dwbjzhanmenghs = [];
														// for(var i=0;i<hs.length;i++){
														// 	if(hs[i].suit=='spade'&&!player.storage.dwbjzhanmenghs.includes('spade')){
														// 		player.storage.dwbjzhanmenghs.push('spade');
														// 	}
														// 	else if(hs[i].suit=='club'&&!player.storage.dwbjzhanmenghs.includes('club')){
														// 		player.storage.dwbjzhanmenghs.push('club');
														// 	}
														// 	else if(hs[i].suit=='heart'&&!player.storage.dwbjzhanmenghs.includes('heart')){
														// 		player.storage.dwbjzhanmenghs.push('heart');
														// 	}
														// 	else if(hs[i].suit=='club'&&!player.storage.dwbjzhanmenghs.includes('club')){
														// 		player.storage.dwbjzhanmenghs.push('club');
														// 	}
														// }
														for (var i of hs) {
															player.storage.dwbjzhanmenghs.push(i.suit);
														}
														if (player.storage.dwbjzhanmenghs.includes(button.link.suit)) return false;
														else return true;
													})
													.set('dialog', event.videoId);
											}
										}
										('step 3');
										if (result.links?.length) {
											event.card = result.links[0];
											var func = function (card, id) {
												var dialog = get.idDialog(id);
												if (dialog) {
													for (var i = 0; i < dialog.buttons.length; i++) {
														if (dialog.buttons[i].link == card) {
															dialog.buttons[i].classList.add('selectedx');
														} else {
															dialog.buttons[i].classList.add('unselectable');
														}
													}
												}
											};
											if (player.isOnline2()) {
												player.send(func, event.card, event.videoId);
											} else if (event.isMine()) {
												func(event.card, event.videoId);
											}
											player.chooseControl('获得', '取消').set('ai', function () {
												var att = get.attitude(player, _status.currentPhase);
												/*if(att>=2){
													return '取消';
												}
												else{*/
												return '获得';
												/*}*/
											});
										}
										('step 4');
										event.dialog.close();
										var card = event.card;
										if (result.control == '获得') {
											player.gain(card);
										}
										event.finish();
									},
								},
								qingkong: {
									forced: true,
									charlotte: true,
									popup: false,
									trigger: {
										global: 'phaseJieshuEnd',
									},
									content() {
										player.storage.dwbjzhanmeng = 0;
									},
								},
							},
							ai: {
								filterDamage: true,
								maixie: true,
								effect: {
									player: 2,
								},
							},
						},
						dwbj_yiyu: {
							audio: 'ext:命运线/audio:2',
							trigger: {
								player: 'phaseDrawBegin1',
							},
							_priority: 1,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								'step 0';
								trigger.changeToZero();
								var cards = get.cards(3);
								for (var i of cards) {
									//QQQ
									ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
								}
								game.updateRoundNumber();
								event.cards = cards;
								player.showCards(cards, get.translation(player) + '发动了【呓语】');
								('step 1');
								var black = 0;
								var red = 0;
								for (var i of cards) {
									if (get.color(i, false) == 'red') red++;
									else black++;
								}
								player.gain(cards);
								event.black = black;
								event.red = red;
								('step 2');
								if (event.black == 3 || event.red == 3) {
									event.goto(3);
								} else {
									event.finish();
								}
								('step 3');
								player.chooseCardTarget({
									filterCard(card) {
										return _status.event.cards.includes(card) && !card.hasGaintag('dwbj_yiyu');
									},
									cards: cards,
									filterTarget: lib.filter.notMe,
									selectCard: 1,
									prompt: '是否将获得的牌分配给其他角色？',
									ai1(card) {
										return -get.value(card);
									},
									ai2(target) {
										return -get.attitude(player, target);
									},
								});
								('step 4');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.give(result.cards, target);
									player.gainPlayerCard(target, 'hej', true);
								} else {
									event.goto(5);
								}
								('step 5');
								event.finish();
							},
							ai: {
								expose: 0.1,
								threaten: 1.2,
								result: {
									player: 1.2,
								},
							},
						},
						myx_lianli: {
							audio: 'ext:命运线/audio:1',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							_priority: 5,
							filter(event, player) {
								return player.hasMark('myx_dantian') || player.hasMark('myx_tinggong');
							},
							content() {
								'step 0';
								var list = [];
								if (player.hasMark('myx_dantian')) list.push(1);
								if (player.hasMark('myx_tinggong')) list.push(2);
								if (list.length) {
									var num = list.randomGet();
									event.num = num;
								}
								('step 1');
								if (event.num == 1) {
									player.removeMark('myx_dantian');
								} else if (event.num == 2) {
									player.removeMark('myx_tinggong');
								} else {
									event.finish();
								}
								('step 2');
								player.gainMaxHp();
								player.recover();
								('step 3');
								player.chooseTarget('庭宫:令一名角色弃置一张牌', function (card, player, target) {
									return target.countCards('he') > 0;
								}).ai = function (target) {
									var att = get.attitude(player, target);
									return -att;
								};
								('step 4');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									target.chooseToDiscard('he', '选择弃置一张牌', true).ai = function (card) {
										return 3 - get.value(card);
									};
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [2, -2];
										if (target.hasMark('myx_tinggong')) return [4, -4];
										else if (target.hasSkill('myx_dantian')) return [2.5, -2.5];
									},
								},
							},
							group: ['myx_lianli_yichujiben', 'myx_lianli_yichujinnang', 'myx_lianli_weizhong'],
							subSkill: {
								tinggong: {
									trigger: {
										player: 'damageEnd',
									},
									forced: true,
									_priority: 5,
									filter(event, player) {
										return player.hasMark('myx_dantian');
									},
									content() {
										'step 0';
										player.removeMark('myx_dantian', 1);
										('step 1');
										player.gainMaxHp();
										player.recover();
									},
								},
								yichujiben: {
									audio: 'ext:命运线/audio:1',
									trigger: {
										player: 'loseEnd',
									},
									_priority: 10,
									forced: true,
									init(player) {
										player.storage.myx_tinggongyichujiben = true;
									},
									//frequent:true,
									filter(event, player) {
										if (player.hasMark('myx_dantian') && player.hasMark('myx_tinggong')) return false;
										if (player.storage.myx_tinggongyichujiben != true) return false;
										if (player.countCards('h', { type: 'basic' })) return false;
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												if (i.original == 'h' && get.type(i) == 'basic') return true;
											}
										return false;
									},
									content() {
										'step 0';
										var list = [];
										if (!player.hasMark('myx_dantian')) list.push(1);
										if (!player.hasMark('myx_tinggong')) list.push(2);
										if (list.length) {
											var shuzi = list.randomGet();
											event.shuzi = shuzi;
										}
										('step 1');
										if (event.shuzi == 1) {
											player.addMark('myx_dantian');
											event.goto(2);
										} else if (event.shuzi == 2) {
											player.addMark('myx_tinggong');
											event.goto(7);
										} else {
											event.finish();
										}
										('step 2');
										player.chooseTarget('庭宫:令一名角色所有手牌均视为【无懈可击】', function (card, player, target) {
											return target.countCards('he') > 0;
										}).ai = function (target) {
											var att = get.attitude(player, target);
											if ((target.hasSkill('jizhi') || target.hasSkill('rejizhi')) && att > 0 && target.hp >= 2) return att * 2;
											else if ((target.hasSkill('jizhi') || target.hasSkill('rejizhi')) && att <= 0) return att - 2;
											return -att;
										};
										('step 3');
										if (result.bool) {
											game.log(player, '发动了【庭宫】');
											var target = result.targets[0];
											event.target = target;
											var hs = target.getCards('h');
											if (hs.length) {
												target.addGaintag(hs, 'myx_tinggongwuxie');
												target.addSkill('myx_tinggongwuxie');
											}
										}
										('step 4');
										game.log(player, '发动了【丹田】');
										('step 5');
										event.goto(8);
										('step 6');
										player.chooseTarget('庭宫:令一名角色弃置一张牌,剩余的手牌均视为【桃】', function (card, player, target) {
											return target.countCards('he') > 0;
										}).ai = function (target) {
											var att = get.attitude(player, target);
											if (target.hp > 2) {
												if (att > 0) {
													return -att;
												}
												return -att;
											}
											return att;
										};
										('step 7');
										if (result.bool) {
											game.log(player, '发动了【庭宫】');
											var target = result.targets[0];
											event.target = target;
											target.chooseToDiscard('he', '选择弃置一张牌', true).ai = function (card) {
												return 3 - get.value(card);
											};
											var hs = target.getCards('h');
											if (hs.length) {
												target.addGaintag(hs, 'myx_taozi');
												target.addSkill('myx_taozi');
											}
										}
										('step 8');
										player.loseMaxHp();
										player.draw();
										('step 9');
										player.storage.myx_tinggongyichujiben = false;
									},
								},
								yichujinnang: {
									audio: 'ext:命运线/audio:1',
									trigger: {
										player: 'loseEnd',
									},
									_priority: 9,
									forced: true,
									init(player) {
										player.storage.myx_tinggongyichujinnang = true;
									},
									//frequent:true,
									filter(event, player) {
										if (player.hasMark('myx_dantian') && player.hasMark('myx_tinggong')) return false;
										if (player.storage.myx_tinggongyichujinnang != true) return false;
										if (player.countCards('h', { type: 'trick' })) return false;
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												if (i.original == 'h' && get.type(i) == 'trick') return true;
											}
										return false;
									},
									content() {
										'step 0';
										var list = [];
										if (!player.hasMark('myx_dantian')) list.push(1);
										if (!player.hasMark('myx_tinggong')) list.push(2);
										if (list.length) {
											var shuzi = list.randomGet();
											event.shuzi = shuzi;
										}
										('step 1');
										if (event.shuzi == 1) {
											player.addMark('myx_dantian');
											event.goto(2);
										} else if (event.shuzi == 2) {
											player.addMark('myx_tinggong');
											event.goto(7);
										} else {
											event.finish();
										}
										('step 2');
										player.chooseTarget('庭宫:令一名角色所有手牌均视为【无懈可击】', function (card, player, target) {
											return target.countCards('he') > 0;
										}).ai = function (target) {
											var att = get.attitude(player, target);
											if ((target.hasSkill('jizhi') || target.hasSkill('rejizhi')) && att > 0 && target.hp >= 2) return att * 2;
											else if ((target.hasSkill('jizhi') || target.hasSkill('rejizhi')) && att <= 0) return att - 2;
											return -att;
										};
										('step 3');
										if (result.bool) {
											game.log(player, '发动了【庭宫】');
											var target = result.targets[0];
											event.target = target;
											var hs = target.getCards('h');
											if (hs.length) {
												target.addGaintag(hs, 'myx_tinggongwuxie');
												target.addSkill('myx_tinggongwuxie');
											}
										}
										('step 4');
										game.log(player, '发动了【丹田】');
										('step 5');
										event.goto(8);
										('step 6');
										player.chooseTarget('庭宫:令一名角色弃置一张牌,剩余的手牌均视为【桃】', function (card, player, target) {
											return target.countCards('he') > 0;
										}).ai = function (target) {
											var att = get.attitude(player, target);
											if (target.hp > 2) {
												if (att > 0) {
													return -att;
												}
												return -att;
											}
											return att;
										};
										('step 7');
										if (result.bool) {
											game.log(player, '发动了【庭宫】');
											var target = result.targets[0];
											event.target = target;
											target.chooseToDiscard('he', '选择弃置一张牌', true).ai = function (card) {
												return 3 - get.value(card);
											};
											var hs = target.getCards('h');
											if (hs.length) {
												target.addGaintag(hs, 'myx_taozi');
												target.addSkill('myx_taozi');
											}
										}
										('step 8');
										player.loseMaxHp();
										player.draw();
										('step 9');
										player.storage.myx_tinggongyichujinnang = false;
									},
								},
								weizhong: {
									trigger: {
										global: 'roundStart',
									},
									forced: true,
									popup: false,
									charlotte: true,
									_priority: 1,
									content() {
										player.storage.myx_tinggongyichujiben = true;
										player.storage.myx_tinggongyichujinnang = true;
									},
								},
							},
						},
						myx_lianli_mark: {
							forced: true,
							charlotte: true,
							popup: false,
						},
						myx_huangjing: {
							audio: 'ext:命运线/audio:1',
							forced: true,
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							_priority: 8,
							filter(event, player) {
								if (event.name != 'phase') return true;
								if (game.phaseNumber == 0) return true;
								return false;
							},
							content() {
								'step 0';
								player.addMark('myx_dantian');
								player.addMark('myx_tinggong');
								('step 1');
								player.chooseTarget('庭宫:令一名角色所有手牌均视为【无懈可击】', function (card, player, target) {
									return target.countCards('he') > 0;
								}).ai = function (target) {
									var att = get.attitude(player, target);
									if ((target.hasSkill('jizhi') || target.hasSkill('rejizhi')) && att > 0 && target.hp >= 2) return att * 2;
									else if ((target.hasSkill('jizhi') || target.hasSkill('rejizhi')) && att <= 0) return att - 2;
									return -att;
								};
								('step 2');
								if (result.bool) {
									game.log(player, '发动了【庭宫】');
									var target = result.targets[0];
									event.target = target;
									var hs = target.getCards('h');
									if (hs.length) {
										target.addGaintag(hs, 'myx_tinggongwuxie');
										target.addSkill('myx_tinggongwuxie');
									}
								}
								('step 3');
								game.log(player, '发动了【丹田】');
								('step 4');
								if (player.hasSkill('myx_lianli')) {
									player.loseMaxHp();
									player.draw();
								} else {
									event.goto(6);
								}
								('step 5');
								game.log(player, '发动了【炼理】:失去1点体力上限并摸1张牌');
								('step 6');
								player.chooseTarget('庭宫:令一名角色弃置一张牌,剩余的手牌均视为【桃】', function (card, player, target) {
									return target.countCards('he') > 0;
								}).ai = function (target) {
									var att = get.attitude(player, target);
									if (target.hp > 2) {
										if (att > 0) {
											return -att;
										}
										return -att;
									}
									return att;
								};
								('step 7');
								if (result.bool) {
									game.log(player, '发动了【庭宫】');
									var target = result.targets[0];
									event.target = target;
									target.chooseToDiscard('选择弃置一张牌', true).ai = function (card) {
										return 8 - get.value(card);
									};
									var hs = target.getCards('h');
									if (hs.length) {
										target.addGaintag(hs, 'myx_taozi');
										target.addSkill('myx_taozi');
									}
								}
								('step 8');
								if (player.hasSkill('myx_lianli')) {
									player.loseMaxHp();
									player.draw();
								} else {
									event.finish();
								}
							},
							group: ['myx_huangjing_jiben', 'myx_huangjing_jinnang', 'myx_huangjing_xiaochu', 'myx_huangjing_mopai'],
							subSkill: {
								jiben: {
									audio: 'ext:命运线/audio:1',
									trigger: {
										player: 'loseEnd',
									},
									_priority: 3,
									forced: true,
									filter(event, player) {
										if (event.type == 'use') return false;
										if (!player.hasMark('myx_dantian')) return false;
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												if (get.type(i) == 'trick') return true;
											}
										return false;
									},
									content() {
										'step 0';
										player.chooseTarget('丹田:失去锦囊牌时横置一名角色').set('ai', function (target) {
											return get.effect(target, { name: 'tiesuo' }, _status.event.player, _status.event.player);
										});
										('step 1');
										if (result.targets?.length) {
											result.targets[0].link();
										}
									},
								},
								jinnang: {
									audio: 'ext:命运线/audio:1',
									trigger: {
										player: 'useCard',
									},
									_priority: 2,
									forced: true,
									filter(event, player) {
										if (get.type(event.card, false) != 'basic' || !player.hasMark('myx_dantian') || player.storage.weicunhuadantian2 == true) return false;
										return true;
									},
									init(player) {
										player.storage.weicunhuadantian2 = false;
									},
									content() {
										'step 0';
										player.storage.weicunhuadantian2 = true;
										player.chooseTarget('丹田:对一名角色造成1点火焰伤害').ai = function (target) {
											var att = get.attitude(player, target);
											return -att;
										};
										('step 1');
										if (result.targets?.length) {
											result.targets[0].damage('fire');
										}
									},
								},
								xiaochu: {
									trigger: {
										global: 'roundStart',
									},
									forced: true,
									popup: false,
									content() {
										player.storage.weicunhuadantian2 = false;
									},
								},
								zhuangbei: {
									trigger: {
										player: 'useCard',
									},
									_priority: 1,
									usable: 1,
									forced: true,
									filter(event, player) {
										return get.type(event.card) == 'equip' && player.hasMark('myx_dantian');
									},
									content() {
										var jinnang = get.cardPile2(function (card) {
											return get.type(card) == 'trick';
										});
										if (jinnang) {
											player.gain(jinnang, 'gain2');
										}
									},
								},
								mopai: {
									forced: true,
									trigger: {
										global: 'phaseDrawBegin1',
									},
									filter(event, player) {
										return player.hasMark('myx_tinggong') && player != event.player;
									},
									content() {
										'step 0';
										player.draw(1);
										trigger.player.draw();
										('step 1');
										player.chooseCard([1, player.countCards('he')], 'he', get.prompt('myx_huangjing'), true).set('ai', function (card) {
											var trigger = _status.event.parent._trigger;
											var player = _status.event.player;
											var att = get.attitude(player, trigger.player);
											var geipai = player.countCards('h') - 1;
											if (att > 4 && ui.selected.cards.length < geipai && ui.selected.cards.length > 1) return get.value(card) - 2;
											else if (att > 1 && ui.selected.cards.length < geipai && ui.selected.cards.length < 3) return 8 - get.value(card);
											else {
												return 2 - get.value(card);
											}
										});
										('step 2');
										if (result.cards?.length) {
											var card = result.cards;
											event.card = card;
											trigger.player.gain(card, player, 'giveAuto');
										}
										('step 3');
										trigger.cancel();
									},
									ai: {
										expose: 0.3,
										order: 6,
										threaten(event, player, target) {
											if (player.hasMark('myx_tinggong')) return 2.4;
											else if (player.hasMark('myx_dantian')) return 1;
											else {
												return 0.2;
											}
										},
									},
								},
							},
						},
						myx_taozi: {
							charlotte: true,
							onremove(player) {
								player.removeGaintag('myx_taozi');
							},
							mod: {
								cardname(card) {
									if (get.itemtype(card) == 'card' && card.hasGaintag('myx_taozi')) return 'tao';
								},
								cardnature(card) {
									if (get.itemtype(card) == 'card' && card.hasGaintag('myx_taozi')) return false;
								},
							},
						},
						myx_tinggongwuxie: {
							charlotte: true,
							onremove(player) {
								player.removeGaintag('myx_tinggongwuxie');
							},
							mod: {
								cardname(card) {
									if (get.itemtype(card) == 'card' && card.hasGaintag('myx_tinggongwuxie')) return 'wuxie';
								},
								cardnature(card) {
									if (get.itemtype(card) == 'card' && card.hasGaintag('myx_tinggongwuxie')) return false;
								},
							},
						},
						myx_tinggong: {
							//forced:true,
							//charlotte:true,
							marktext: '庭宫',
							intro: {
								name: '庭宫',
								content: '<li>其他角色摸牌阶段开始时,其放弃摸牌,你与其各摸1张牌并交给其任意数量的牌(不少于1张).</span></ul>',
							},
						},
						myx_dantian: {
							//forced:true,
							//charlotte:true,
							marktext: '丹田',
							intro: {
								name: '丹田',
								content: '<li>失去锦囊牌时横置一名角色.</span></ul><li>本轮第一次使用基本牌时对一名角色造成1点火焰伤害.</span></ul>',
							},
						},
						myx_zhanxing: {
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							audio: 'ext:命运线/audio:2',
							filter(event, player) {
								if (event.source && event.source.isAlive()) return true;
								return game.hasPlayer((current) => lib.skill.guanxu.filterTarget(null, player, current));
							},
							content() {
								'step 0';
								event.addIndex = 0;
								var choiceList = [];
								choiceList.push('摸一张牌并改变一次星象');
								if (game.hasPlayer((current) => lib.skill.guanxu.filterTarget(null, player, current))) choiceList.push('发动一次〖观虚〗');
								player
									.chooseControl('cancel2')
									.set('prompt', get.prompt('yashi'))
									.set('choiceList', choiceList)
									.set('ai', function () {
										var player = _status.event.player,
											source = _status.event.getTrigger().source,
											index = _status.event.parent.addIndex;
										if ((player.hasSkill('huoji') || player.hasSkill('yeyan') || player.hasSkill('rehuoji') || player.hasSkill('releiji') || player.hasSkill('leiji')) && !player.hasSkill('myx_zygx2021_xigong') && !player.hasSkill('myx_zygx2021_nangong')) return 0;
										if ((player.hasSkill('shuangxiong') || player.hasSkill('reshuangxiong') || player.hasSkill('zhanjue') || player.hasSkill('myx_zhanjue') || player.hasSkill('zhanjue') || player.hasSkill('jizhi') || player.hasSkill('olluanji') || player.hasSkill('luanji') || player.hasSkill('qixi') || player.hasSkill('jixi') || player.hasSkill('mansi')) && !player.hasSkill('myx_zygx2021_donggong')) return 0;
										if (
											game.hasPlayer(function (current) {
												return current != player && current.countCards('h') > 3 && get.attitude(player, current) < 0;
											})
										)
											return 1 - index;
										if (!player.hasSkill('myx_zygx2021_beigong')) return 0;
										if (
											game.hasPlayer(function (current) {
												return current != player && current.countCards('h') > 0 && get.attitude(player, current) < 0;
											})
										)
											return 1 - index;
										return 0;
									});
								('step 1');
								if (result.control != 'cancel2') {
									if (result.index + event.addIndex == 0) {
										var jishu = 0;
										var list = game.filterPlayer((current) => current != player && (current.hasSkill('myx_zygx2021_nangong') || current.hasSkill('myx_zygx2021_donggong') || current.hasSkill('myx_zygx2021_xigong') || current.hasSkill('myx_zygx2021_beigong'))).sortBySeat();
										for (var i of list) {
											jishu++;
										}
										if (jishu > 0) {
											var list = game.filterPlayer((current) => current != player && (current.hasSkill('myx_zygx2021_nangong') || current.hasSkill('myx_zygx2021_donggong') || current.hasSkill('myx_zygx2021_xigong') || current.hasSkill('myx_zygx2021_beigong'))).sortBySeat();
											for (var i of list) {
												if (i.hasSkill('myx_zygx2021_nangong')) {
													i.removeSkill('myx_zygx2021_nangong');
												} else if (i.hasSkill('myx_zygx2021_xigong')) {
													i.removeSkill('myx_zygx2021_xigong');
												} else if (i.hasSkill('myx_zygx2021_beigong')) {
													i.removeSkill('myx_zygx2021_beigong');
												} else if (i.hasSkill('myx_zygx2021_donggong')) {
													i.removeSkill('myx_zygx2021_donggong');
												}
												var k = [1, 2, 3, 4].randomGet();
												if (k == 1) i.addSkill('myx_zygx2021_donggong');
												else if (k == 2) i.addSkill('myx_zygx2021_xigong');
												else if (k == 3) i.addSkill('myx_zygx2021_nangong');
												else i.addSkill('myx_zygx2021_beigong');
											}
										} else {
											if (player.hasSkill('myx_zygx2021_nangong')) {
												player.removeSkill('myx_zygx2021_nangong');
											} else if (player.hasSkill('myx_zygx2021_xigong')) {
												player.removeSkill('myx_zygx2021_xigong');
											} else if (player.hasSkill('myx_zygx2021_beigong')) {
												player.removeSkill('myx_zygx2021_beigong');
											} else if (player.hasSkill('myx_zygx2021_donggong')) {
												player.removeSkill('myx_zygx2021_donggong');
											}
											var k = [1, 2, 3, 4].randomGet();
											if (k == 1) player.addSkill('myx_zygx2021_donggong');
											else if (k == 2) player.addSkill('myx_zygx2021_xigong');
											else if (k == 3) player.addSkill('myx_zygx2021_nangong');
											else player.addSkill('myx_zygx2021_beigong');
										}
										player.draw();
										event.finish();
									} else
										player.chooseTarget(true, '请选择〖观虚〗的目标', lib.skill.guanxu.filterTarget).set('ai', function (target) {
											var player = _status.event.player;
											return get.effect(target, 'guanxu', player, player);
										});
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									var next = game.createEvent('yashi_guanxu');
									next.player = player;
									next.target = target;
									next.setContent(lib.skill.guanxu.content);
								}
							},
							group: ['myx_zhanxing_baiyin', 'myx_zhanxing_chuancheng'],
							subSkill: {
								baiyin: {
									trigger: { player: 'damageBegin4' },
									forced: true,
									filter(event, player) {
										if (event.num <= 1) return false;
										return true;
									},
									content() {
										trigger.num = 1;
									},
									ai: {
										filterDamage: true,
									},
								},
								chuancheng: {
									forceDie: true,
									trigger: {
										player: 'die',
									},
									audio: 'ext:命运线/audio:1',
									forced: true,
									content() {
										'step 0';
										player
											.chooseTarget(get.prompt('myx_zhanxing'), '令一名其他角色获得〖占星〗', function (card, player, target) {
												return target.maxHp > player.maxHp;
											})
											.set('forceDie', true)
											.set('ai', (target) => get.attitude(_status.event.player, target));
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											event.target = target;
										} else event.finish();
										('step 2');
										target.addSkillLog('myx_zhanxing');
									},
								},
							},
						},
						myx_zhongyeguanxing_jieshao: { nobracket: true },
						myx_zhongyeguanxing: {
							trigger: { global: 'gameStart' },
							fixed: true,
							popup: false,
							silent: true,
							forced: true,
							charlotte: true,
							superCharlotte: true,
							mode: ['boss'], //QQQ
							init() {
								game.removeGlobalSkill('boss_shenwuzaishi');
								game.removeGlobalSkill('TheDayIBecomeAGod');
								game.removeGlobalSkill('thedayibecomeagod');
								_status.shidianyanluo_level = 0;
								lib.inpile.remove('lebu');
								lib.inpile.remove('bingliang');
								lib.inpile.remove('muniu');
								lib.inpile.remove('zhuge');
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (node.name == 'lebu') {
										node.classList.remove('fullskin');
										node.init([node.suit, node.number, 'tao']);
									}
								}
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (node.name == 'bingliang') {
										node.classList.remove('fullskin');
										node.init([node.suit, node.number, 'jiu']);
									}
								}
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (node.name == 'muniu') {
										node.classList.remove('fullskin');
										node.init([node.suit, node.number, 'wuzhong']);
									}
								}
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (node.name == 'zhuge') {
										node.classList.remove('fullskin');
										node.init([node.suit, node.number, 'myx_boss_liannu']);
									}
								}
								_status.additionalReward = function () {
									return 500;
								};
							},
							content() {
								'step 0';
								game.bossinfo.chongzheng = 999;
								player.smoothAvatar();
								('step 1');
								game.me
									.chooseControl('青龙', '朱雀', '白虎', '玄武')
									.set('prompt', game.me == game.boss ? '选择要扮演的星象' : '选择要对抗的星象')
									.set('ai', function (target) {
										return ['青龙', '朱雀', '白虎', '玄武'].randomGet();
									});
								('step 2');
								event.bos = result.control;
								('step 3');
								if (game.me == game.boss) {
									if (event.bos == '青龙') {
										player.init('myx_boss_qinglong2021');
										_status.noswap = true;
										//ui
										var head = ui.create.node('img');
										head.src = 'extension/命运线/xingxiu/dg.jpg';
										head.setAttribute('id', 'xxt');
										head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
										document.body.appendChild(head);
										player.addFellow('myx_boss_kangjinlong2021');
										player.addFellow('myx_boss_jiaomujiao2021');
									} else if (event.bos == '朱雀') {
										player.init('myx_boss_zhuque2021');
										_status.noswap = true;
										//ui
										var head = ui.create.node('img');
										head.src = 'extension/命运线/xingxiu/ng.jpg';
										head.setAttribute('id', 'xxt');
										head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
										document.body.appendChild(head);
										player.addFellow('myx_boss_yihuoshe2021');
										player.addFellow('myx_boss_xingrima2021');
									} else if (event.bos == '白虎') {
										player.init('myx_boss_baihu2021');
										_status.noswap = true;
										//ui
										var head = ui.create.node('img');
										head.src = 'extension/命运线/xingxiu/xg.jpg';
										head.setAttribute('id', 'xxt');
										head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
										document.body.appendChild(head);
										player.addFellow('myx_boss_kuimulang2021');
										player.addFellow('myx_boss_shenshuiyuan2021');
									} else {
										player.init('myx_boss_xuanwu2021');
										_status.noswap = true;
										//ui
										var head = ui.create.node('img');
										head.src = 'extension/命运线/xingxiu/bg.jpg';
										head.setAttribute('id', 'xxt');
										head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
										document.body.appendChild(head);
										player.addFellow('myx_boss_weiyueyan2021');
										player.addFellow('myx_boss_doumuxie2021');
									}
								} else {
									if (event.bos == '青龙') {
										player.init('myx_boss_qinglong2021');
										_status.noswap = true;
										//ui
										var head = ui.create.node('img');
										head.src = 'extension/命运线/xingxiu/dg.jpg';
										head.setAttribute('id', 'xxt');
										head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
										document.body.appendChild(head);
										player.addFellow('myx_boss_kangjinlong2021');
										player.addFellow('myx_boss_jiaomujiao2021');
									} else if (event.bos == '朱雀') {
										player.init('myx_boss_zhuque2021');
										_status.noswap = true;
										//ui
										var head = ui.create.node('img');
										head.src = 'extension/命运线/xingxiu/ng.jpg';
										head.setAttribute('id', 'xxt');
										head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
										document.body.appendChild(head);
										player.addFellow('myx_boss_yihuoshe2021');
										player.addFellow('myx_boss_xingrima2021');
									} else if (event.bos == '白虎') {
										player.init('myx_boss_baihu2021');
										_status.noswap = true;
										//ui
										var head = ui.create.node('img');
										head.src = 'extension/命运线/xingxiu/xg.jpg';
										head.setAttribute('id', 'xxt');
										head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
										document.body.appendChild(head);
										player.addFellow('myx_boss_kuimulang2021');
										player.addFellow('myx_boss_shenshuiyuan2021');
									} else {
										player.init('myx_boss_xuanwu2021');
										_status.noswap = true;
										//ui
										var head = ui.create.node('img');
										head.src = 'extension/命运线/xingxiu/bg.jpg';
										head.setAttribute('id', 'xxt');
										head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
										document.body.appendChild(head);
										player.addFellow('myx_boss_weiyueyan2021');
										player.addFellow('myx_boss_doumuxie2021');
									}
								}
							},
						},
						myx_shoukun: {
							audio: 'ext:命运线/audio:1',
							forced: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								if (player.hasJudge('bingliang')) return false;
								return !player.storage._disableJudge;
							},
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player.chooseCard(1, 'h', '将一张手牌当作【兵粮寸断】对自己使用', true).set('ai', function (card) {
									return 1 - get.value(card);
								});
								('step 2');
								if (result.cards?.length) {
									var card = result.cards[0];
									player.$throw(card);
									player.addJudge({ name: 'bingliang' }, result.cards);
								}
							},
							group: ['myx_shoukun_diaoxue', 'myx_shoukun_huixue'],
							subSkill: {
								diaoxue: {
									forced: true,
									charlotte: true,
									trigger: {
										player: ['phaseDrawSkipped', 'phaseDrawCancelled'],
									},
									content() {
										'step 0';
										var list1 = ['失去体力', '减少体力上限'];
										trigger.player
											.chooseControl(list1)
											.set('ai', function () {
												if (player.hp == player.maxHp) {
													return '失去体力';
												} else {
													return '减少体力上限';
												}
											})
											.set('prompt', '请选择一项');
										('step 1');
										if (result.control == '失去体力') {
											player.loseHp();
										} else {
											player.loseMaxHp();
										}
										('step 2');
										player.draw();
									},
								},
								huixue: {
									forced: true,
									charlotte: true,
									trigger: {
										player: 'phaseDrawBegin',
									},
									content() {
										player.gainMaxHp();
										player.recover();
									},
								},
							},
						},
						myx_juyi: {
							audio: 'ext:命运线/audio:1',
							derivation: ['myx_shoukun', 'weizhong'],
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return player.maxHp > game.players.length && !player.storage.myx_juyi;
							},
							forced: true,
							juexingji: true,
							content() {
								player.draw(Math.min(player.maxHp, 20));
								player.addSkill('myx_shoukun');
								player.addSkill('weizhong');
								player.node.avatar.setBackgroundImage('extension/命运线/image/zhugedan2.jpg');
								player.storage.myx_juyi = true;
								player.awakenSkill('myx_juyi');
							},
						},
						myx_gongao: {
							forced: true,
							charlotte: true,
							trigger: {
								global: 'discardEnd',
							},
							filter(event, player) {
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (get.position(i) == 'd' && !player.storage.myx_juyi) return true;
									}
								return false;
							},
							content() {
								var mo = 0;
								if (Array.isArray(trigger.cards))
									for (var i of trigger.cards) {
										if (get.position(i) == 'd') {
											mo++;
										}
									}
								player.addMark('myx_gongao_mark', mo);
							},
							group: ['myx_gongao_jiaxue', 'myx_gongao_huixue'],
							subSkill: {
								jiaxue: {
									audio: 'ext:命运线/audio:2',
									forced: true,
									charlotte: true,
									trigger: {
										global: 'discardAfter',
									},
									filter(event, player) {
										return player.countMark('myx_gongao_mark') >= player.maxHp && !player.storage.myx_juyi;
									},
									content() {
										'step 0';
										player.removeMark('myx_gongao_mark', player.maxHp);
										player.gainMaxHp();
										player.recover();
										player.update();
										('step 1');
										if (player.countMark('myx_gongao_mark') >= player.maxHp) {
											event.goto(0);
										} else {
											event.finish();
										}
									},
								},
								huixue: {
									audio: 'ext:命运线/audio:2',
									trigger: {
										player: 'dying',
									},
									filter(event, player) {
										return player.maxHp > 2;
									},
									prompt2: '是否减少2点体力上限,将体力回复至1点.',
									content() {
										player.loseMaxHp(2);
										var huixue = 1 - player.hp;
										player.recover(huixue);
									},
								},
								mark: {
									forced: true,
									charlotte: true,
									popup: false,
									mark: true,
									marktext: '功',
									intro: {
										content: '当前拥有#枚<功>标记',
									},
								},
							},
						},
						myx_1V2: {
							forced: true,
							charlotte: true,
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							filter(event, player) {
								return game.phaseNumber == 0 && player.identity == 'zhu';
							},
							delay: false,
							init(player) {
								player.storage.myx_1V2 = 0;
							},
							content() {
								player.loseMaxHp();
								var list = game.filterPlayer((current) => current != player).sortBySeat();
								for (var i of list) {
									if (player.storage.myx_1V2 < 2) {
										i.identity = 'fan';
										i.showIdentity();
										i.update();
										i.addSkill('myx_shanhaijingsixie');
										player.storage.myx_1V2++;
									} else {
										i.die();
									}
								}
							},
						},
						myx_shanhaijingsixie: {
							charlotte: true,
							// init:function(player){
							// 	player.storage.myx_shanhaijingsixie=0;
							// },
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							// filter:function(event,player){
							// 	return player.storage.myx_shanhaijingsixie<3;
							// },
							initList() {
								var list,
									skills = [];
								var banned = ['xunyi'];
								if (get.mode() == 'guozhan') {
									list = [];
									for (var i in lib.characterPack.mode_guozhan) list.push(i);
								} else if (_status.connectMode) list = get.charactersOL();
								else {
									list = [];
									for (var i in lib.character) {
										if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
										list.push(i);
									}
								}
								for (var i of list) {
									if (i.indexOf('gz_jun') == 0) continue;
									for (var j of lib.character[i][3]) {
										var skill = lib.skill[j];
										if (!skill || skill.zhuSkill || banned.includes(j)) continue;
										if (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
										var info = get.translation(j);
										for (var ix = 0; ix < info.length; ix++) {
											if (/仁|义|礼|智|信/.test(info[ix]) == true) {
												skills.add(j);
												break;
											}
										}
									}
								}
								_status.myx_shanhaijingsixie_list = skills;
							},
							content() {
								if (!player.storage.myx_shanhaijingsixie) lib.skill.myx_shanhaijingsixie.initList(player);
								var list = player.storage.myx_shanhaijingsixie.randomGets(3);
								// if(!list.length){
								// 	event.finish();
								// 	 return;
								// }
								event.videoId = lib.status.videoId++;
								var func = function (skills, id) {
									var dialog = ui.create.dialog('forcebutton');
									dialog.videoId = id;
									dialog.add('选择一个技能');
									for (var i = 0; i < skills.length; i++) {
										dialog.add(`<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【${get.translation(skills[i])}】</div><div>` + lib.translate[`${skills[i]}_info`] + '</div></div>');
									}
									dialog.addText(' <br> ');
								};
								if (player.isOnline()) player.send(func, list, event.videoId);
								else if (player == game.me) func(list, event.videoId);
								player.chooseControl(list);
								game.broadcastAll('closeDialog', event.videoId);
								player.addSkillLog(result.control);
								game.broadcastAll('closeDialog', event.videoId);
								player.popup(`${get.translation(result.control)}`);
								game.log(trigger.player, '获得了', `#g【${get.translation(result.control)}】`);
								player.addSkill(result.control);
							},
						},
						myx_zhuren: {
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							charlotte: true,
							content() {
								if (player.countMark('myx_datie_biaoji') >= 3 && !player.hasSkill('myx_zhuren_1')) {
									for (var i = 2; i < 5; i++) {
										var card = game.createCard2('pyzhuren_heart', 'heart', i);
										ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
									}
									//game.broadcastAll(function(){lib.inpile.add('pyzhuren_heart')});
									game.log(player, '将红缎枪放入牌堆');
									game.updateRoundNumber();
								}
								if (player.countMark('myx_datie_biaoji') >= 6 && !player.hasSkill('myx_zhuren_2')) {
									for (var i = 2; i < 5; i++) {
										var card = game.createCard2('pyzhuren_club', 'club', i);
										ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
									}
									//game.broadcastAll(function(){lib.inpile.add('pyzhuren_club')});
									game.log(player, '将水波剑放入牌堆');
									game.updateRoundNumber();
								}
								if (player.countMark('myx_datie_biaoji') >= 9 && !player.hasSkill('myx_zhuren_3')) {
									for (var i = 2; i < 5; i++) {
										var card = game.createCard2('pyzhuren_spade', 'spade', i);
										ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
									}
									//game.broadcastAll(function(){lib.inpile.add('pyzhuren_spade')});
									game.log(player, '将混毒弯匕放入牌堆');
									game.updateRoundNumber();
								}
							},
							subSkill: {
								1: {
									charlotte: true,
								},
								2: {
									charlotte: true,
								},
								3: {
									charlotte: true,
								},
							},
						},
						myx_tiewang: {
							audio: 'pytianjiang',
							trigger: {
								player: ['phaseBegin', 'damageBegin4', 'loseHpEnd'],
							},
							_priority: 15,
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('myx_tiewang'), 1, false, function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										return att;
									});
								('step 1');
								if (result.targets?.length) {
									event.tar = result.targets[0];
								} else event.finish();
								('step 2');
								var list1 = [];
								for (var i of event.tar.getCards('e')) {
									if (get.subtype(i) == 'equip1' || get.subtype(i) == 'equip2' || get.subtype(i) == 'equip3' || get.subtype(i) == 'equip4' || get.subtype(i) == 'equip5') {
										var info = get.info(i);
										if (info.skills) {
											list1.push(i);
										}
									}
								}
								for (var i = 0; i < list1.length; i++) {
									list1[i] = ['装备', '', list1[i]];
								}
								if (list1.length) {
									var dialog = ui.create.dialog(`声明一张装备牌令${get.translation(player)}获得其特效`, [list1, 'vcard'], 'hidden');
									player.chooseButton(dialog, true).set('ai', function (button) {
										var nm = button.link[2];
										if (player.countCards('h', { name: nm }) > 1) return 20;
										return Math.random();
									});
								} else {
									player.draw();
									event.finish();
								}
								('step 3');
								if (result.bool) {
									//var card={name:result.buttons[0].link[2]};
									var name = result.buttons[0].link[2];
									event.tar.discard(name);
									//game.cardsGotoSpecial(name);移出游戏
									game.log(player, '获得了', get.translation(name), '的技能,并弃置了对应装备.');
									var info = get.info(name);
									player.addSkill(info.skills);
									if (player.hasSkill('myx_datie')) player.addMark('myx_datie_biaoji');
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						myx_datie: {
							audio: 'pyzhuren',
							trigger: {
								player: ['phaseUseBegin', 'phaseDiscardBegin'],
							},
							_priority: 15,
							forced: true,
							init(player) {
								player.storage.myx_datie = 0;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('myx_datie'), 1, false, function (card, player, target) {
										return true;
									})
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										return att;
									});
								('step 1');
								if (result.targets?.length) {
									event.tar = result.targets[0];
								} else event.finish();
								('step 2');
								var list1 = [];
								var list = get.inpile('equip');
								for (var i = 0; i < list.length; i++) {
									var card = { name: list[i] };
									var info = get.info(card);
									if (info.skills) {
										list1.push(list[i]);
									}
								}
								for (var i = 0; i < list1.length; i++) {
									list1[i] = ['装备', '', list1[i]];
								}
								if (list1.length) {
									var dialog = ui.create.dialog(`声明一张装备牌令${get.translation(event.tar)}获得其特效`, [list1, 'vcard'], 'hidden');
									player.chooseButton(dialog, true).set('ai', function (button) {
										var nm = button.link[2];
										if (player.countCards('h', { name: nm }) > 1) return 20;
										return Math.random();
									});
								}
								('step 3');
								if (result.bool) {
									//event.tar.addSkill('myx_datie_mark');
									var card = { name: result.buttons[0].link[2] };
									var name = result.buttons[0].link[2];
									//event.tar.storage.myx_datie_mark=name;
									game.log(event.tar, '获得了', get.translation(name), '的技能.');
									var info = get.info(card);
									if (info.skills) {
										//event.tar.addAdditionalSkill('myx_datie_mark',info.skills);
										//event.tar.markSkill('myx_datie_mark');
										if (event.tar == player) {
											event.tar.addTempSkill(info.skills, { player: 'phaseBefore' });
											player.addMark('myx_datie_biaoji');
											player.storage.myx_datie++;
										} else {
											event.tar.addTempSkill(info.skills, { player: 'phaseAfter' });
										}
									}
									// else{
									// 	event.tar.removeAdditionalSkill('myx_datie_mark');
									// }
								}
							},
							ai: {
								expose: 0.3,
							},
							group: ['myx_datie_biaoji', 'myx_datie_qingchu'],
							subSkill: {
								fangpai: {
									trigger: {
										global: 'phaseBefore',
										player: 'enterGame',
									},
									forced: true,
									filter(event, player) {
										return event.name != 'phase' || game.phaseNumber == 0;
									},
									content() {
										for (var i = 2; i < 5; i++) {
											var card = game.createCard2('pyzhuren_diamond', i % 2 ? 'club' : 'diamond', i);
											var card = game.createCard2('pyzhuren_club', i % 2 ? 'club' : 'club', i);
											var card = game.createCard2('pyzhuren_heart', i % 2 ? 'club' : 'heart', i);
											ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
										}
										game.broadcastAll(function () {
											lib.inpile.add('pyzhuren_diamond');
										});
										game.broadcastAll(function () {
											lib.inpile.add('pyzhuren_club');
										});
										game.broadcastAll(function () {
											lib.inpile.add('pyzhuren_spade');
										});
										game.updateRoundNumber();
									},
								},
								qingchu: {
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player.storage.myx_datie > 0;
									},
									content() {
										var i = player.storage.myx_datie;
										player.removeMark('myx_datie_biaoji', i);
										player.storage.datie = 0;
									},
								},
								biaoji: {
									mark: true,
									charlotte: true,
									intro: {
										content: '当前有#枚标记',
									},
								},
							},
						},
						myx_boss_liannu: {
							equipSkill: true,
							audio: true,
							firstDo: true,
							trigger: { player: 'useCard1' },
							forced: true,
							filter(event, player) {
								return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
							},
							content() {
								trigger.audioed = true;
							},
							mod: {
								cardUsable(card, player, num) {
									var cardx = player.getEquip('myx_boss_liannu');
									if (card.name == 'sha' && (!cardx || player.hasSkill('myx_boss_liannu', null, false) || (!_status.zhuge_temp && !ui.selected.cards.includes(cardx)))) {
										return 4;
									}
								},
								cardEnabled2(card, player) {
									if (!_status.event.addCount_extra || player.hasSkill('myx_boss_liannu', null, false)) return;
									if (card && card == player.getEquip('myx_boss_liannu')) {
										try {
											var cardz = get.card();
										} catch (e) {
											return;
										}
										if (!cardz || cardz.name != 'sha') return;
										_status.zhuge_temp = true;
										var bool = lib.filter.cardUsable({ name: 'sha' }, player);
										delete _status.zhuge_temp;
										if (!bool) return false;
									}
								},
							},
						},
						//吕布装备
						//aoe令牌
						myx_niepoling: {
							trigger: {
								player: 'phaseUseEnd',
							},
							check(event, player) {
								var value = 0;
								var list = game.filterPlayer((current) => current != player).sortBySeat();
								for (var j of list) {
									if (get.attitude(player, j) > 0) {
										value++;
									} else {
										value--;
									}
								}
								if (value <= 0) return true;
								return false;
							},
							content() {
								var list = game.filterPlayer((current) => current != player).sortBySeat();
								var huixue = 0;
								for (var i of list) {
									i.damage('nocard');
									huixue++;
								}
								player.recover(Math.min(huixue, 3));
							},
						},
						//失血剑
						myx_feijiangswj: {
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							content() {
								trigger.cancel();
								trigger.player.loseHp(trigger.num);
							},
							ai: {
								jueqing: true,
							},
							group: 'myx_feijiangswj_zhaxiang',
							subSkill: {
								zhaxiang: {
									trigger: {
										global: 'loseHpEnd',
									},
									forced: true,
									content() {
										var j = trigger.num;
										player.draw(j);
									},
								},
							},
						},
						myx_fumojingang: {
							equipSkill: true,
							audio: true,
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							logTarget: 'target',
							content() {
								trigger.target.addTempSkill('myx_fumo2');
								trigger.target.storage.qinggang2.add(trigger.card);
								trigger.target.markSkill('myx_fumo2');
							},
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.name == 'sha') return true;
									return false;
								},
							},
							group: 'myx_fumojingang_zengshang',
							subSkill: {
								zengshang: {
									trigger: {
										source: 'damageBegin',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.player != player && event.player.getEquip(2);
									},
									forced: true,
									content() {
										trigger.num++;
									},
								},
							},
						},
						myx_fumo2: {
							firstDo: true,
							ai: { unequip2: true },
							init(player, skill) {
								player.storage.qinggang2 = []; //QQQ
							},
							trigger: {
								player: ['damage', 'damageCancelled', 'damageZero'],
								source: ['damage', 'damageCancelled', 'damageZero'],
								target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd'],
								global: ['useCardEnd'],
							},
							charlotte: true,
							filter(event, player) {
								return player.storage.qinggang2 && event.card && player.storage.qinggang2.includes(event.card) && (event.name != 'damage' || event.notLink());
							},
							silent: true,
							forced: true,
							popup: false,
							_priority: 12,
							content() {
								player.storage.qinggang2.remove(trigger.card);
								if (!player.storage.qinggang2.length) player.removeSkill('myx_fumo2');
							},
							marktext: '※',
							intro: { content: '当前防具技能已失效' },
						},
						shenwu2022: {
							audio: 'ext:命运线/audio:2',
							forced: true,
							trigger: {
								player: 'phaseUseBefore',
							},
							charlotte: true,
							content() {
								var name = ['myx_fumo2022', 'myx_feijiang2022', 'myx_xiuluo2022', '4', '5'].randomGet();
								if (name == 'myx_fumo2022') {
									player.gain(game.createCard2('myx_fumojingang', 'spade', 13));
								} else if (name == 'myx_feijiang2022') {
									player.gain(game.createCard2('myx_feijiangswj', 'heart', 13));
								} else if (name == '4') {
									player.gain(game.createCard2('myx_niepoling', 'club', 13));
								} else if (name == '5') {
									player.gain(game.createCard2('shufazijinguan', 'heart', 13));
								} else {
									player.gain(game.createCard2('wushuangfangtianji', 'diamond', 13));
								}
							},
							group: ['shenwu2022_zhuangbei'],
							subSkill: {
								zhuangbei: {
									forced: true,
									trigger: {
										player: 'equipEnd',
									},
									charlotte: true,
									content() {
										var list = game.filterPlayer((current) => current != player && current.getEquip(2)).sortBySeat();
										if (list.length == 0) {
											var mo = ['sha', 'juedou'].randomGet();
											if (mo == 'sha') {
												player.gain(game.createCard2('sha'));
												game.log(player, '获得了一张【杀】');
											} else {
												player.gain(game.createCard2('juedou'));
												game.log(player, '获得了一张【决斗】');
											}
										}
										for (var i of list) {
											i.discard(i.getCards('e', (card) => get.subtype(card) == 'equip2'));
											var pai = ['sha', 'juedou'].randomGet();
											if (pai == 'sha') {
												player.gain(game.createCard2('sha'));
												game.log(player, '获得了一张【杀】');
											} else {
												player.gain(game.createCard2('juedou'));
												game.log(player, '获得了一张【决斗】');
											}
										}
									},
								},
							},
						},
						//统一的禁言符号.jpg
						myx_jinyan: {
							charlotte: true,
							forced: true,
						},
						myx_shenwei2022: {
							group: ['myx_shenwei2022_mianyi', 'myx_shenwei2022_mianer', 'myx_shenwei2022_mopai'],
							subSkill: {
								mianyi: {
									mod: {
										targetEnabled(card, player, target) {
											if (get.type(card) == 'delay') return false;
										},
									},
								},
								mianer: {
									ai: {
										noCompareTarget: true,
									},
								},
								mopai: {
									audio: 'ext:命运线/audio:2',
									trigger: {
										player: 'phaseDrawBegin2',
									},
									charlotte: true,
									forced: true,
									filter(event, player) {
										return !event.numFixed;
									},
									content() {
										trigger.num += 4;
									},
								},
							},
						},
						myx_shenji2022: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 1;
								},
							},
							charlottte: true,
							derivation: ['shenwu2022'],
							group: ['myx_shenji2022_fangtian', 'myx_shenji2022_mopai', 'myx_shenji2022_mopaijuedou', 'myx_shenji2022_huixue'],
							subSkill: {
								fangtian: {
									mod: {
										selectTarget(card, player, range) {
											if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] += 2;
											if (card.name == 'juedou' && Array.isArray(range) && range[1] != -1) range[1] += 2;
										},
									},
								},
								mopai: {
									audio: 'ol_wuqian',
									trigger: {
										source: 'damageEnd',
									},
									filter(event, player) {
										if (event._notrigger.includes(event.player)) return false;
										return event.card && event.card.name == 'sha';
									},
									content() {
										var range = player.getAttackRange();
										player.draw(range);
									},
									ai: {
										threaten: 1.5,
									},
								},
								mopaijuedou: {
									audio: 'ol_wuqian',
									trigger: {
										source: 'damageEnd',
									},
									filter(event, player) {
										if (event._notrigger.includes(event.player)) return false;
										return event.card && event.card.name == 'juedou';
									},
									content() {
										var range = player.getAttackRange();
										player.draw(range);
									},
									ai: {
										threaten: 1.5,
									},
								},
								huixue: {
									audio: 'ol_shenfen',
									trigger: {
										player: ['damageEnd', 'loseHpEnd', 'dying'],
									},
									forced: true,
									filter(event, player) {
										return player.hp <= 15 && !player.hasSkill('myx_jinyan');
									},
									content() {
										var xue = 15 - player.hp;
										player.recover(xue);
										player.addSkill('myx_jinyan');
										player.addSkillLog('shenwu2022');
										player.phase('nodelay');
									},
								},
							},
						},
						myx_shenqu2022_boss: {
							audio: 'ext:命运线/audio:1',
							trigger: {
								player: 'damageEnd',
							},
							charlotte: true,
							group: ['myx_hulaoguantiaozhan', 'myx_xuanzejiangling', 'myx_hulaoguan2022chushi'],
							logTarget: 'source',
							filter(event, player) {
								return event.source && event.source != player && event.source.isAlive();
							},
							usable: 4,
							check(event, player) {
								var att = get.attitude(player, event.source);
								var num = event.source.countCards('he');
								if (att <= 0) return true;
								if (num > 2) return true;
								if (num > 0) return att < 4;
								return false;
							},
							prompt2: '令该角色选择一项:①失去1点体力.②交给你一张手牌.',
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								player.storage.shenqu2022 = 0;
								('step 1');
								var target = trigger.source;
								event.count--;
								if (!target.countCards('he')) event._result = { bool: false };
								else
									target.chooseCard('he', `神躯:将一张牌交给${get.translation(player)},或失去1点体力`).set('ai', function (card) {
										var num = 12 - _status.event.player.hp * 2;
										if (card.name == 'zhuge') return -20;
										return num - get.value(card);
									});
								('step 2');
								var target = trigger.source;
								if (result.cards?.length) {
									var card = result.cards[0];
									event.card = card;
									player.gain(card, target, 'giveAuto');
								} else {
									target.loseHp();
									event.goto(3);
								}
								('step 3');
								var target = trigger.source;
								if (target.isAlive() && event.count > 0)
									player.chooseBool(get.prompt('myx_shenqu2022_boss', target), '令伤害来源选择一项:①失去1点体力.②交给你一张牌.').set('ai', function () {
										var evt = _status.event.getTrigger();
										return lib.skill.myx_shenqu2022_boss.check(evt, evt.player);
									});
								else event.finish();
								('step 4');
								if (result.bool) {
									if (player.storage.shenqu2022 < 2) {
										player.storage.shenqu2022++;
										event.goto(1);
									} else {
										event.finish();
									}
								}
							},
						},
						myx_shenqu2022: {
							audio: 'ext:命运线/audio:1',
							trigger: {
								player: 'damageEnd',
							},
							charlotte: true,
							group: ['myx_boss_jineng', 'myx_boss_jineng2'],
							logTarget: 'source',
							filter(event, player) {
								return event.source && event.source != player && event.source.isAlive();
							},
							check(event, player) {
								var att = get.attitude(player, event.source);
								var num = event.source.countCards('he');
								if (att <= 0) return true;
								if (num > 2) return true;
								if (num > 0) return att < 4;
								return false;
							},
							prompt2: '令该角色选择一项:①失去1点体力.②交给你一张手牌.',
							content() {
								'step 0';
								event.count = Math.min(trigger.num, 9);
								player.storage.shenqu2022 = 0;
								('step 1');
								var target = trigger.source;
								event.count--;
								if (!target.countCards('he')) event._result = { bool: false };
								else
									target.chooseCard('he', `神躯:将一张牌交给${get.translation(player)},或失去1点体力`).set('ai', function (card) {
										var num = 12 - _status.event.player.hp * 2;
										if (card.name == 'zhuge') return -20;
										return num - get.value(card);
									});
								('step 2');
								var target = trigger.source;
								if (result.cards?.length) {
									var card = result.cards[0];
									event.card = card;
									player.gain(card, target, 'giveAuto');
								} else {
									target.loseHp();
									event.goto(3);
								}
								('step 3');
								var target = trigger.source;
								if (target.isAlive() && event.count > 0)
									player.chooseBool(get.prompt('myx_shenqu2022', target), '令伤害来源选择一项:①失去1点体力.②交给你一张牌.').set('ai', function () {
										var evt = _status.event.getTrigger();
										return lib.skill.myx_shenqu2022.check(evt, evt.player);
									});
								else event.finish();
								('step 4');
								if (result.bool) {
									if (player.storage.shenqu2022 < 4) {
										player.storage.shenqu2022++;
										event.goto(1);
									} else {
										event.finish();
									}
								}
							},
						},
						myx_wujie: {
							forced: true,
							charlotte: true,
							popup: false,
							trigger: {
								player: 'phaseDrawBegin1',
							},
							_priority: 99,
							forced: true,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num += 2;
							},
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 1;
								},
							},
						},
						//来点将灵,感谢将灵拓展
						myx_jlnianshou: {
							forbid: ['identity'],
							charlotte: true,
							marktext: '年兽',
							mark: true,
							intro: {
								name: '当前将灵',
								mark(dialog, player, storage) {
									var picurl = `<img src="extension/命运线/jl/myx_jlnianshou.png" >`;
									dialog.addSmall(picurl);
									dialog.addText('<span style="color: #FF999">年兽</span>');
									dialog.addText('<span style="color: #EE82EE">将灵技能</span>');
									dialog.addText('【<span style="color: #ffed22"><abbr title="反戈:当你受到伤害后,你有88%的概率摸两张牌,获得伤害来源一至两张牌,再对伤害来源造成1点火焰伤害."><ins>反戈</ins></abbr></span>】、【<span style="color: #ffed22"><abbr title="寻猎:一名已受伤的其他角色回合结束时,你有82%的概率选择一项:令其回复1点体力并摸两张牌;或对其造成1点伤害并随机弃置两张牌.(每轮限触发2次)"><ins>寻猎</ins></abbr></span>】');
								},
							},
							group: ['myx_jlnianshou_fange', 'myx_jlnianshou_xunlie'],
							subSkill: {
								fange: {
									name: '反戈',
									prompt2: '摸2张牌,获得伤害来源1~2张牌,再对伤害来源造成1点火焰伤害.',
									filter(event, player) {
										var numa = Math.random();
										return numa < 0.88;
									},
									trigger: { player: 'damageEnd' },
									logTarget: 'source',
									content() {
										player.draw(2);
										if (trigger.source) {
											var numb = [1, 2].randomGet();
											player.line(trigger.source, 'gold');
											player.gainPlayerCard(`选择获得其至多${numb}张牌`, trigger.source, 'he', [1, numb]);
											player.line(trigger.source, 'fire');
											trigger.source.damage('fire', 'nocard');
										}
									},
									check(event, player) {
										return get.attitude(player, event.source) <= 0;
									},
									ai: {
										maixie_defend: true,
										expose: 0.4,
									},
								},
								xunlie: {
									name: '寻猎',
									prompt2: '选择令当前回合角色回复1点体力并摸两张牌;或对其造成1点火焰伤害并随机弃置两张牌',
									trigger: { global: 'phaseJieshuBegin' },
									filter(event, player) {
										var numa = Math.random();
										return numa < 0.82 && event.player.isAlive() && event.player.isDamaged() && event.player != player && !player.hasSkill('myx_jlnianshou_count2');
									},
									content() {
										'step 0';
										player
											.chooseControl('选项一', '选项二', 'cancel2')
											.set('prompt', '选项一:令其回复1点体力并摸两张牌;选项二:对其造成1点火焰伤害并随机弃置两张牌')
											.set('ai', function () {
												if (get.attitude(player, trigger.player) < 0) return '选项二';
												if (get.attitude(player, trigger.player) > 0) return '选项一';
											});
										('step 1');
										if (result.control == '选项一') {
											if (player.hasSkill('myx_jlnianshou_count1')) player.addTempSkill('myx_jlnianshou_count2', 'roundStart');
											else player.addTempSkill('myx_jlnianshou_count1', 'roundStart');
											player.line(trigger.player, 'green');
											trigger.player.recover();
											player.line(trigger.player, 'green');
											trigger.player.draw(2);
										}
										if (result.control == '选项二') {
											if (player.hasSkill('myx_jlnianshou_count1')) player.addTempSkill('myx_jlnianshou_count2', 'roundStart');
											else player.addTempSkill('myx_jlnianshou_count1', 'roundStart');
											player.line(trigger.player, 'fire');
											trigger.player.damage('fire', 'nocard');
											var cards = trigger.player.getCards('he').randomGets(2);
											player.line(trigger.player, 'fire');
											trigger.player.discard(cards);
										}
										if (result.control == 'cancel2') event.finish();
									},
									check(event, player) {
										return get.attitude(player, _status.currentPhase) != 0;
									},
								},
								count1: {},
								count2: {},
							},
						},
						myx_jlgs: {
							forbid: ['identity'],
							charlotte: true,
							marktext: '关索',
							mark: true,
							intro: {
								name: '当前将灵',
								mark(dialog, player, storage) {
									var picurl = `<img src="extension/命运线/jl/myx_jlgs.png" >`;
									dialog.addSmall(picurl);
									dialog.addText('<span style="color: #FFFFCC">关索</span>');
									dialog.addText('<span style="color: #EE82EE">将灵技能</span>');
									dialog.addText('【<span style="color: #ffed22"><abbr title="撷芳:出牌阶段开始时,你有80.2%的概率获得以下效果:摸X张牌、此阶段计算与其他角色的距离-X、此阶段可以多使用X张【杀】,且【杀】的伤害+X(此阶段限触发2次),X为场上女性角色数+1."><ins>撷芳</ins></abbr></span>】、【<span style="color: #ffed22"><abbr title="征南:一名角色受到伤害后,若其体力值小于等于你,你有90.2%的概率摸1~3张牌,在<武圣>、<当先>、<制蛮>里选择并获得一个技能直到你的回合结束(每回合限4次),若未获得技能则你回复1点体力."><ins>征南</ins></abbr></span>】');
								},
							},
							group: ['myx_jlgs_xiafang', 'myx_jlgs_zhengnan', 'myx_jlgs_jieshu'],
							subSkill: {
								xiafang: {
									name: '撷芳',
									prompt2: '摸X张牌、此阶段计算与其他角色的距离-X、此阶段可以多使用X张【杀】,且【杀】的伤害+X(此阶段限触发2次)',
									filter(event, player) {
										var num = Math.random();
										return num < 0.802;
									},
									trigger: { player: 'phaseUseBegin' },
									content() {
										player.addTempSkill('myx_jlgs_xiefang', { player: 'phaseUseEnd' });
										var i =
											1 +
											game.countPlayer(function (current) {
												return current.hasSex('female');
											});
										player.draw(i);
									},
								},
								xiefang: {
									charlotte: true,
									forced: true,
									popup: false,
									init(player) {
										player.storage.jlgsxiefang = 0;
									},
									mod: {
										globalFrom(from, to, distance) {
											return (
												distance -
												1 -
												game.countPlayer(function (current) {
													return current.hasSex('female');
												})
											);
										},
										cardUsable(card, player, num) {
											if (card.name == 'sha')
												return (
													num +
													1 +
													game.countPlayer(function (current) {
														return current.hasSex('female');
													})
												);
										},
									},
									trigger: {
										source: 'damageBegin1',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && player.storage.jlgsxiefang < 2;
									},
									forced: true,
									content() {
										trigger.num +=
											1 +
											game.countPlayer(function (current) {
												return current.hasSex('female');
											});
										player.storage.jlgsxiefang++;
									},
									ai: {
										damageBonus: true,
									},
								},
								zhengnan: {
									name: '征南',
									prompt2: '摸1~3张牌,在<武圣>、<当先>、<制蛮>里选择并获得一个技能直到你的回合结束',
									init(player) {
										player.storage.jlgszhengnan = 0;
									},
									filter(event, player) {
										var num = Math.random();
										return num < 0.902 && event.player.hp <= player.hp && player.storage.jlgszhengnan <= game.countPlayer();
									},
									trigger: { global: 'damageEnd' },
									content() {
										'step 0';
										var list = [];
										player.storage.jlgszhengnan++;
										if (!player.hasSkill('new_rewusheng')) {
											list.push('new_rewusheng');
										}
										if (!player.hasSkill('dangxian')) {
											list.push('dangxian');
										}
										if (!player.hasSkill('rezhiman')) {
											list.push('rezhiman');
										}
										if (list.length) {
											var num = [1, 2, 3].randomGet();
											player.draw(num);
											event.list = list;
										} else {
											var num2 = [1, 2, 3].randomGet();
											player.draw(num2);
											player.recover();
											event.finish();
										}
										('step 1');
										if (event.list.length == 1) event._result = { control: event.list[0] };
										else
											player
												.chooseControl(event.list)
												.set('prompt', '征南:选择获得下列技能中的一个')
												.set('ai', function () {
													if (!player.hasSkill('dangxian')) return 'dangxian';
													else if (!player.hasSkill('rezhiman')) return 'rezhiman';
													else return 'new_rewusheng';
												});
										('step 2');
										player.addTempSkill(result.control, { player: 'phaseJieshuBegin' });
										player.popup(result.control);
										game.log(player, '获得了技能', `#g【${get.translation(result.control)}】`);
									},
								},
								jieshu: {
									forced: true,
									popup: false,
									trigger: {
										player: 'phaseJieshuBegin',
									},
									_priority: 30,
									content() {
										player.storage.jlgszhengnan = 0;
									},
								},
							},
						},
						myx_jlshenzy: {
							forbid: ['identity'],
							charlotte: true,
							marktext: '赵云',
							mark: true,
							intro: {
								name: '当前将灵',
								mark(dialog, player, storage) {
									var picurl = `<img src="extension/命运线/jl/myx_jlshenzy.png" >`;
									dialog.addSmall(picurl);
									dialog.addText('<span style="color: #FFFFCC">神赵云</span>');
									dialog.addText('<span style="color: #EE82EE">将灵技能</span>');
									dialog.addText('【<span style="color: #ffed22"><abbr title="绝境:准备阶段、结束阶段或当你进入或脱离濒死状态时,你有68%的概率摸二至四张牌并回复1点体力."><ins>绝境</ins></abbr></span>】、【<span style="color: #ffed22"><abbr title="龙魂:你使用【杀】或【桃】时,有89.2%的概率此牌伤害或回复值+1~3,且你使用【闪】或【无懈可击】时,有89.2%概率获得当前回合角色至多两张牌."><ins>龙魂</ins></abbr></span>】');
								},
							},
							group: ['myx_jlshenzy_juejing', 'myx_jlshenzy_longhun1', 'myx_jlshenzy_longhun2'],
							subSkill: {
								juejing: {
									name: '绝境',
									usable: 3,
									prompt2: '摸1~3张牌并回复1点体力',
									filter(event, player) {
										var numa = Math.random();
										return numa < 0.68;
									},
									trigger: { player: ['phaseZhunbeiBegin', 'dying', 'dyingAfter', 'phaseJieshuBegin'] },
									content() {
										var numb = [2, 3, 4].randomGet();
										player.draw(numb);
										player.recover();
									},
								},
								longhun1: {
									name: '龙魂',
									prompt2: '获得当前回合角色至多两张牌',
									filter(event, player) {
										var numa = Math.random();
										if (numa >= 0.892) return false;
										var card = event.card;
										return card.name == 'shan' || card.name == 'wuxie';
									},
									trigger: { player: 'useCard' },
									content() {
										player.line(_status.currentPhase, 'gold');
										player.gainPlayerCard(_status.currentPhase, 'he', [1, 2]);
									},
									check(event, player) {
										return get.attitude(player, _status.currentPhase) <= 0;
									},
								},
								longhun2: {
									name: '龙魂',
									audio: 'ext:命运线/audio:true',
									prompt2: '令此牌基数+1~3',
									filter(event, player) {
										var numa = Math.random();
										if (numa >= 0.892) return false;
										var card = event.card;
										return card.name == 'sha' || card.name == 'tao';
									},
									trigger: { player: 'useCard' },
									content() {
										var numb = [1, 2, 3].randomGet();
										trigger.baseDamage += numb;
									},
									check(event, player, card) {
										if (event.card.name == 'sha' && event.target) {
											return get.attitude(player, event.target) <= 0;
										} //QQQ
										if (event.card.name == 'tao') return true;
									},
								},
							},
						},
						myx_jlsunx: {
							forbid: ['identity'],
							charlotte: true,
							marktext: '孙休',
							mark: true,
							intro: {
								name: '当前将魂',
								mark(dialog, player, storage) {
									//var picurl=`<img src="extension/将灵/myx_jlsunx.png" >`;
									//dialog.addSmall(picurl);
									dialog.addText('<span style="color: #00CC99">孙休</span>');
									dialog.addText('<span style="color: #EE82EE">将魂技能</span>');
									dialog.addText('【<span style="color: #9933ff"><abbr title="诏缚:当你受到伤害后,你有82.8%的概率令伤害来源获得1枚【诏缚】标记直到其回合结束(有【诏缚】标记的角色使用或打出一张牌后,需弃置等同于其标记数量的牌,至多为3)."><ins>诏缚</ins></abbr></span>】、【<span style="color: #9933ff"><abbr title="宴诛:当一名拥有【诏缚】标记的角色弃牌时,你可以获得其中一张."><ins>宴诛</ins></abbr></span>】、【<span style="color: #9933ff"><abbr title="兴学:一名角色的结束阶段,你有80.8%的概率令其摸2~4张牌并回复1点体力."><ins>兴学</ins></abbr></span>】');
								},
							},
							group: ['myx_jlsunx_zhaofu', 'myx_jlsunx_yanzhu', 'myx_jlsunx_xingxue'],
							subSkill: {
								zhaofu: {
									name: '诏缚',
									audio: 'ext:命运线/audio:1',
									prompt2: '令伤害来源获得1枚【诏缚】标记直到其回合结束',
									check(event, player) {
										return get.attitude(player, event.source) <= 0;
									},
									trigger: { player: 'damageEnd' },
									filter(event, player) {
										var num = Math.random();
										return num < 0.828;
									},
									content() {
										if (trigger.source && trigger.source != player) {
											if (!trigger.source.hasSkill('myx_jlsunx_fu')) {
												trigger.source.addTempSkill('myx_jlsunx_fu', { player: 'phaseJieshuBegin' });
												trigger.source.markAuto('myx_jlsunx_fu', [player]);
											}
											trigger.source.addMark('myx_jlsunx_fu', 1);
										}
									},
								},
								fu: {
									name: '诏缚',
									trigger: { player: 'useCardAfter' },
									forced: true,
									filter(event, player) {
										return player.countCards('he') > 0;
									},
									content() {
										var qipai = Math.min(player.countMark('myx_jlsunx_fu'), 3);
										player.chooseToDiscard(qipai, 'he', true);
									},
									intro: {
										name: '诏缚',
										content: '使用牌后须弃置#张牌(至多为3)',
									},
								},
								yanzhu: {
									name: '宴诛',
									prompt2: '当一名有【诏缚】标记的角色弃牌时,你可以获得其中一张',
									trigger: {
										global: ['loseAfter'],
									},
									filter(event, player) {
										if (event.player != player && event.player.isIn() && event.player.hasSkill('myx_jlsunx_fu')) {
											return event.player.getHistory('lose', function (evt) {
												return evt.type == 'discard' && evt.hs.filterInD('d').length;
											}).length;
										}
										return false;
									},
									checkx(event, player, cards, cards2) {
										for (var i = 0; i < cards2.length; i++) {
											if (get.value(cards2[i], player, 'raw') > 0) return true;
										}
										return false;
									},
									forced: true,
									preHidden: true,
									content() {
										'step 0';
										var cards = [];
										var cards2 = [];
										game.getGlobalHistory('cardMove', function (evt) {
											if (evt.name == 'cardsDiscard') cards.addArray(evt.cards.filterInD('d'));
										});
										game.countPlayer2(function (current) {
											current.getHistory('lose', function (evt) {
												if (evt.type != 'discard') return;
												cards.addArray(evt.cards.filterInD('d'));
												if (current == trigger.player) cards2.addArray(evt.hs.filterInD('d'));
											});
										});
										event.cards = cards;
										var check = lib.skill.guzheng.checkx(trigger, player, cards, cards2);
										player
											.chooseCardButton(cards, '诏缚:选择获得的牌')
											.set('ai', function (button) {
												if (_status.event.check) {
													return 20 - get.value(button.link, _status.event.getTrigger().player);
												}
												return 0;
											})
											.set('check', check)
											.set('cards', cards2)
											.set('filterButton', function (button) {
												return _status.event.cards.includes(button.link);
											})
											.setHiddenSkill(event.name);
										('step 1');
										if (result.links?.length) {
											player.gain(result.links[0]);
											player.$gain2(result.links[0]);
											game.log(player, '获得了', result.links[0]);
										}
									},
								},
								xingxue: {
									name: '兴学',
									prompt2: '令当前回合角色摸2~4张牌并回复1点体力.',
									filter(event, player) {
										var numa = Math.random();
										return numa < 0.808;
									},
									check(event, player) {
										return get.attitude(player, event.player) > 0;
									},
									trigger: { global: 'phaseJieshuBegin' },
									content() {
										var num = [2, 3, 4].randomGet();
										trigger.player.draw(num);
										trigger.player.recover();
									},
								},
							},
						},
						//boss吕布开局获得方天画戟
						myx_hulaoguan2022chushi: {
							trigger: {
								global: 'gameStart',
							},
							_priority: 9,
							forced: true,
							charlotte: true,
							content() {
								'step 0';
								var i = 0;
								var list = [];
								while (i++ < 1) {
									var card = get.cardPile(function (card) {
										if (card.name != 'chitu') return false;
										return true;
									});
									if (card) list.push(card);
								}
								if (!list.length) {
									event.finish();
									return;
								}
								event.list = list;
								player.gain(event.list, 'gain2');
								('step 1');
								var card = event.list.shift();
								if (player.getCards('h').includes(card)) {
									player.$give(card, player, false);
									player.equip(card);
								}
								if (event.list.length) event.redo();
								('step 2');
								var i = 0;
								var list = [];
								while (i++ < 1) {
									var card = get.cardPile(function (card) {
										if (card.name != 'fangtian') return false;
										return true;
									});
									if (card) list.push(card);
								}
								if (!list.length) {
									event.finish();
									return;
								}
								event.list = list;
								player.gain(event.list, 'gain2');
								('step 3');
								var card = event.list.shift();
								if (player.getCards('h').includes(card)) {
									player.$give(card, player, false);
									player.equip(card);
								}
								if (event.list.length) event.redo();
							},
						},
						myx_hulaoguantiaozhan: {
							forced: true,
							charlotte: true,
							popup: false,
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							filter(event, player) {
								return game.phaseNumber == 0;
							},
							delay: false,
							content() {
								if (player.countCards('h') < 10) var chushi = 10 - player.countCards('h');
								player.draw(chushi);
								if (player.maxHp > 30) {
									var kouxue = player.maxHp - 30;
									player.loseMaxHp(kouxue);
								}
								var list2 = game.filterPlayer((current) => current != player && current.hasSkill('myx_juece')).sortBySeat();
								for (var j of list2) {
									j.removeSkill('myx_juece');
									j.addSkill('rejuece');
								}
								var list3 = game.filterPlayer((current) => current != player && current.hasSkill('DIY_mieji')).sortBySeat();
								for (var k of list3) {
									k.removeSkill('DIY_mieji');
									k.addSkill('remieji');
								}
								var list4 = game.filterPlayer((current) => current != player && current.hasSkill('duanchang')).sortBySeat();
								for (var a of list4) {
									a.removeSkill('duanchang');
									a.addSkill('chenqing');
								}
								var list5 = game.filterPlayer((current) => current != player && current.hasSkill('new_wuhun')).sortBySeat();
								for (var b of list5) {
									b.removeSkill('new_wuhun');
									b.addSkill('new_yijue');
								}
								var list6 = game.filterPlayer((current) => current != player && current.hasSkill('wuhun')).sortBySeat();
								for (var c of list6) {
									c.removeSkill('wuhun');
									c.addSkill('new_yijue');
								}
								var list7 = game.filterPlayer((current) => current != player && current.hasSkill('drlt_duorui')).sortBySeat();
								for (var d of list7) {
									d.removeSkill('drlt_duorui');
									d.addSkill('new_retuxi');
								}
								var list8 = game.filterPlayer((current) => current != player && current.hasSkill('olduorui')).sortBySeat();
								for (var d of list8) {
									e.removeSkill('olduorui');
									e.addSkill('new_retuxi');
								}
							},
						},
						myx_xuanzejiangling: {
							charlotte: true,
							trigger: {
								global: 'gameStart',
							},
							_priority: 999,
							limited: true,
							forced: true,
							content() {
								'step 0';
								var list = game.filterPlayer((current) => current != player && current.isEnemiesOf(player)).sortBySeat();
								for (var i of list) {
									i.addSkill('oldniepan');
									i.gainMaxHp(2);
									i.recover(2);
									i.draw(2);
									i.addSkill('myx_wujie');
								}
								event.current = player.next;
								('step 1');
								var list1 = ['神赵云', '年兽', '孙休将魂', '关索'];
								event.current
									.chooseControl(list1)
									.set('ai', function () {
										var num = [0, 1, 2, 3, 4, 5].randomGet();
										if (num == 0 || num == 1) {
											return '神赵云';
										} else if (num == 2) {
											return '孙休将魂';
										} else if (num == 5) {
											return '关索';
										} else {
											return '年兽';
										}
									})
									.set('prompt', '请选择一个将灵');
								('step 2');
								if (result.control == '神赵云') {
									if (event.current.isEnemiesOf(player)) event.current.addSkill('myx_jlshenzy');
								} else if (result.control == '孙休将魂') {
									if (event.current.isEnemiesOf(player)) event.current.addSkill('myx_jlsunx');
								} else if (result.control == '关索') {
									if (event.current.isEnemiesOf(player)) event.current.addSkill('myx_jlgs');
								} else {
									if (event.current.isEnemiesOf(player)) event.current.addSkill('myx_jlnianshou');
								}
								('step 3');
								event.current = event.current.next;
								if (event.current != player) event.goto(1);
							},
						},
						//虎牢关禁将和Boss通用pve技能 两个技能 乐
						myx_boss_jineng: {
							forced: true,
							charlotte: true,
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							delay: false,
							content() {
								if (player.hasZhuSkill('tianming')) player.removeSkill('tianming');
								if (player.identity != 'zhu') {
									if (game.zhu.hasSkill('bahu')) {
										game.zhu.removeSkill('bahu');
										game.zhu.removeSkill('feiyang');
									}
									if (game.zhu.hasSkill('tianming')) {
										game.zhu.removeSkill('tianming');
									}
									if (game.zhu.hasSkill('zhuSkill_jiangling')) {
										game.zhu.removeSkill('zhuSkill_jiangling');
									}
									if (game.zhu.hasSkill('zhuSkill_xiangyang')) {
										game.zhu.removeSkill('zhuSkill_xiangyang');
									}
									if (game.zhu.hasSkill('zhuSkill_fancheng')) {
										game.zhu.removeSkill('zhuSkill_fancheng');
									}
									if (game.zhu.maxHp > 1) {
										game.zhu.loseMaxHp();
									}
									game.zhu.identity = 'fan';
									game.zhu.showIdentity();
									game.zhu.update();
									game.zhu = player;
									player.identity = 'zhu';
									player.showIdentity();
									player.update();
								}
								var list = game.filterPlayer((current) => current != player && current.identity != 'zhu').sortBySeat();
								for (var i of list) {
									i.identity = 'fan';
									i.showIdentity();
									i.update();
								}
								var list2 = game.filterPlayer((current) => current != player && current.hasSkill('myx_juece')).sortBySeat();
								for (var j of list2) {
									j.removeSkill('myx_juece');
									j.addSkill('rejuece');
								}
								var list3 = game.filterPlayer((current) => current != player && current.hasSkill('DIY_mieji')).sortBySeat();
								for (var k of list3) {
									k.removeSkill('DIY_mieji');
									k.addSkill('remieji');
								}
								var list4 = game.filterPlayer((current) => current != player && current.hasSkill('duanchang')).sortBySeat();
								for (var a of list4) {
									a.removeSkill('duanchang');
									a.addSkill('chenqing');
								}
								var list5 = game.filterPlayer((current) => current != player && current.hasSkill('new_wuhun')).sortBySeat();
								for (var b of list5) {
									b.removeSkill('new_wuhun');
									b.addSkill('new_yijue');
								}
								var list6 = game.filterPlayer((current) => current != player && current.hasSkill('wuhun')).sortBySeat();
								for (var c of list6) {
									c.removeSkill('wuhun');
									c.addSkill('new_yijue');
								}
								var list7 = game.filterPlayer((current) => current != player && current.hasSkill('DIY_wuhun_hun')).sortBySeat();
								for (var d of list7) {
									d.removeSkill('DIY_wuhun_hun');
									d.addSkill('new_yijue');
								}
								var list8 = game.filterPlayer((current) => current != player && current.hasSkill('xinfu_weilu')).sortBySeat();
								for (var e of list8) {
									e.removeSkill('xinfu_weilu');
									e.addSkill('yingzi');
								}
								var list9 = game.filterPlayer((current) => current != player && current.hasSkill('xinfu_guhuo')).sortBySeat();
								for (var f of list9) {
									f.removeSkill('xinfu_guhuo');
									f.addSkill('old_guhuo');
								}
								var list12 = game.filterPlayer((current) => current != player && current.hasSkill('jlsg_yingge')).sortBySeat();
								for (var l of list12) {
									l.removeSkill('jlsg_yingge');
									l.addSkill('reyanyu');
								}
								var list11 = game.filterPlayer((current) => current != player && current.hasSkill('DIY_jili')).sortBySeat();
								for (var h of list11) {
									h.removeSkill('DIY_jili');
									h.addSkill('jili');
								}
							},
						},
						myx_boss_jineng2: {
							forced: true,
							charlotte: true,
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							filter(event, player) {
								return game.phaseNumber == 0;
							},
							delay: false,
							content() {
								if (player.countCards('h') < 10) var chushi = 10 - player.countCards('h');
								player.draw(chushi);
								if (player.maxHp > 30) {
									var kouxue = player.maxHp - 30;
									player.loseMaxHp(kouxue);
								}
								var list = game.filterPlayer((current) => current != player && !current.hasSkill('oldniepan')).sortBySeat();
								for (var i of list) {
									i.addSkill('oldniepan');
								}
							},
						},
						myx_weimu: {
							audio: 'jianshu',
							forced: true,
							charlotte: true,
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							delay: false,
							filter(event, player) {
								return !player.isTurnedOver();
							},
							content() {
								player.turnOver(true)._triggered = null;
								game.log(player, '在乱世中隐匿了起来');
							},
							group: ['myx_weimu_guard', 'myx_weimu_buchupai', 'myx_weimu_fanji', 'myx_weimu_chenggong', 'myx_weimu_shibai', 'myx_weimu_luanwu'],
							subSkill: {
								guard: {
									silent: true,
									charlotte: true,
									trigger: {
										player: 'turnOverBefore',
									},
									filter(event, player) {
										return player.isTurnedOver() && player.hasSkill('myx_weimu');
									},
									content() {
										trigger.cancel();
										game.log(player, '隐匿于乱世');
									},
									forced: true,
									popup: false,
								},
								fanji: {
									init(player) {
										player.storage.fanji = 0;
									},
									audio: 'reweimu',
									trigger: { player: 'damageBegin' },
									filter(event, player) {
										return event.source != player && !player.hasMark('myx_weimu_ying');
									},
									content() {
										'step 0';
										trigger.cancel();
										player.draw(2);
										player.addMark('myx_weimu_ying');
										var cards = Array.from(ui.ordering.childNodes);
										while (cards.length) {
											cards.shift().discard();
										}
										('step 1');
										player.addMark('myx_weimu_wu');
										if (player.countMark('myx_weimu_wu') >= 3) {
											player.addSkill('reluanwu');
										}
										('step 2');
										var next = player.phaseUse();
										event.next.remove(next);
										trigger.next.push(next);
									},
									ai: {
										maixie: true,
										maixie_hp: true,
									},
								},
								ying: {
									charlotte: true,
									mark: true,
									intro: {
										name: '影武者',
									},
								},
								wu: {
									mark: true,
									intro: {
										name: '乱舞',
									},
								},
								buchupai: {
									charlotte: false,
									mark: false,
									audio: 'weimu',
									trigger: {
										global: 'phaseEnd',
									},
									filter(event, player) {
										return player != event.player && !player.hasMark('myx_weimu_ying');
									},
									forced: true,
									content() {
										player.draw();
										player.say('我自冷眼看世界,不问天下是与非');
										//player.storage.fanji=0;
										player.removeMark('myx_weimu_wu', player.countMark('myx_weimu_wu'));
									},
								},
								chenggong: {
									audio: 'wansha',
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									filter(event, player) {
										return player.hasMark('myx_weimu_ying');
									},
									content() {
										player.removeMark('myx_weimu_ying');
									},
								},
								shibai: {
									trigger: {
										player: 'phaseUseEnd',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player.hasMark('myx_weimu_ying');
									},
									content() {
										player.loseHp();
										player.removeMark('myx_weimu_ying');
										//player.storage.fanji=0;
										if (player.hasSkill('reluanwu')) player.removeSkill('reluanwu');
									},
								},
								luanwu: {
									// trigger:{
									// 	player:"useSkillAfter",
									// },
									forced: true,
									trigger: {
										player: 'phaseUseEnd',
									},
									filter(event, player) {
										return !player.hasMark('myx_weimu_ying');
									},
									content() {
										if (player.hasSkill('reluanwu')) player.removeSkill('reluanwu');
									},
								},
							},
						},
						myx_xiandao: {
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								if (!player.hasZhuSkill('myx_xiandao')) return false;
								return true;
							},
							zhuSkill: true,
							content() {
								var count = trigger.num;
								player.addMark('myx_qianhuan2', count);
							},
						},
						myx_changsheng: {
							audio: 'xinsheng',
							trigger: { global: 'dying' },
							filter(event, player) {
								//game.print(player.countMark('myx_qianhuan2'));
								return player.countMark('myx_qianhuan2') >= 2;
							},
							content() {
								var xinsheng = parseInt(player.countMark('myx_qianhuan2') / 2);
								trigger.player.recover(xinsheng);
								player.removeMark('myx_qianhuan2', player.countMark('myx_qianhuan2'));
								if (trigger.player != player) player.draw(xinsheng);
								var duoyu = player.maxHp - player.hp;
								if (trigger.player == player && xinsheng > duoyu) {
									var mopai = xinsheng - player.maxHp;
									player.draw(mopai);
								}
							},
							check(event, player) {
								var att = get.attitude(player, event.player);
								if (att > 0 && event.player.hasSkillTag('nosave')) {
									return false;
								}
								if (att < 3) return false;
								return true;
							},
							ai: {
								expose: 0.6,
								threaten: 1.2,
								result: {
									player: 0.5,
									target: 2,
								},
							},
						},
						myx_qianhuan: {
							audio: 'ext:命运线/audio:2',
							forbid: ['boss'],
							trigger: { player: ['phaseBegin', 'phaseJieshuBegin'] },
							forced: true,
							content() {
								'step 0';
								player.chooseTarget('随机获得一个场上未拥有的技能', function (card, player, target) {
									return target == player;
								});
								('step 1');
								if (result.bool) {
									var list = [];
									var list2 = [];
									var players = game.players.concat(game.dead);
									for (var i of players) {
										list2.add(i.name);
										list2.add(i.name1);
										list2.add(i.name2);
									}
									var currentSkills = game.expandSkills(player.getSkills());
									for (var i in lib.character) {
										if (lib.filter.characterDisabled2(i)) continue;
										if (lib.filter.characterDisabled(i)) continue;
										if (list2.includes(i)) continue;
										for (var j = 0; j < lib.character[i][3].length; j++) {
											if (!lib.translate[lib.character[i][3][j] + '_info']) {
												continue;
											}
											if (currentSkills.includes(lib.character[i][3][j])) {
												continue;
											}
											var info = lib.skill[lib.character[i][3][j]];
											if (info && (info.gainable || !info.unique) && !info.zhuSkill && !info.juexingji && !info.limited && !info.hiddenSkill && !info.charlotte) {
												list.add(lib.character[i][3][j]);
											}
										}
									}
									var link = list.randomGet();
									player.addSkillLog(link);
									result.targets[0].mark(link, {
										name: get.translation(link),
										content: lib.translate[`${link}_info`],
									});
								} else {
									event.goto(0);
								}
								('step 2');
								player.addMark('myx_qianhuan2');
							},
							group: ['myx_qianhuan2'],
						},
						myx_qianhuan2: {
							forced: true,
							popup: false,
							charlotte: true,
							marktext: '化身',
							intro: {
								name: '千幻',
								content: '当前拥有#个化身',
							},
						},
						myx_juejing: {
							audio: 'ext:命运线/audio:2',
							forced: true,
							charlotte: true,
							marktext: '胆',
							intro: {
								name: '胆',
								content: '七进七出',
							},
							trigger: { player: 'dying' },
							filter(event, player) {
								return player.hasSkill('myx_juejing') && player.countMark('myx_juejing') < 7 && !player.hasSkill('myx_juejing_jinyan');
							},
							forced: true,
							content() {
								var health = 1 - player.hp;
								player.recover(health);
								if (player.hasMark('myx_juejing')) player.draw(player.countMark('myx_juejing'));
								player.addMark('myx_juejing', 1);
								player.addTempSkill('myx_juejing_jinyan');
							},
							group: ['myx_juejing2'],
						},
						myx_juejing_jinyan: {
							audio: 'longhun4',
							forced: true,
							charlotte: true,
							trigger: {
								player: 'damageBegin4',
							},
							init(player) {
								player.storage.juejing = 0;
							},
							content() {
								trigger.cancel();
								player.draw(player.countMark('myx_juejing'));
								player.storage.juejing++;
								var target = _status.currentPhase;
								if (player.storage.juejing >= 10 && target != player) {
									target.damage(1, 'fire');
									player.say('一回合八十伤是吧？');
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten: -1,
								result: {
									player(player) {
										if (player.hp == 1) return 10;
										return 2;
									},
								},
							},
						},
						myx_juejing2: {
							audio: 'ext:命运线/audio:1',
							trigger: {
								player: 'loseAfter',
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
							},
							forced: true,
							filter(event, player) {
								if (player.countCards('h')) return false;
								var evt = event.getl(player);
								return evt && evt.player == player && evt.hs && evt.hs.length;
							},
							content() {
								player.draw();
							},
							ai: {
								threaten: 0.6,
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
						myx_jiuzhu: {
							audio: 'xinjuejing',
							juexingji: true,
							trigger: { global: 'phaseJieshuBegin' },
							forced: true,
							filter(event, player) {
								return player.countMark('myx_juejing') >= 7;
							},
							content() {
								'step 0';
								player.gainMaxHp(3);
								player.recover(3);
								('step 1');
								player.addSkill('myx_youlong');
								player.addSkill('myx_longhun');
								player.removeSkill('myx_juejing');
								player.addSkill('chixueqingfeng');
								('step 2');
								player.awakenSkill('myx_jiuzhu');
							},
						},
						myx_longhun: {
							subSkill: {
								discard: {
									trigger: {
										player: ['discardAfter', 'useCardAfter', 'respondAfter'],
									},
									audio: 'relonghun',
									forced: true,
									_priority: 11,
									filter(event, player) {
										if (_status.currentPhase != player) return false;
										return true;
									},
									content() {
										'step 0';
										var qipai = trigger.cards.length;
										if (player.countMark('myx_juejing') >= 7) event.goto(1);
										else {
											if (player.countMark('myx_juejing') + qipai < 7) {
												player.addMark('myx_juejing', qipai);
											} else player.addMark('myx_juejing', 7 - player.countMark('myx_juejing'));
										}
										('step 1');
										if (player.countMark('myx_juejing') >= 3 && !player.hasSkill('chixueqingfeng')) {
											player.addSkill('chixueqingfeng');
										}
									},
								},
								lose: {
									trigger: {
										player: 'loseAfter',
									},
									audio: 'ext:命运线/audio:1',
									forced: true,
									filter(event, player) {
										if (_status.currentPhase == player) return false;
										if (['useCard', 'respond'].includes(event.parent.name)) return false;
										return true;
									},
									content() {
										'step 0';
										var qipai = trigger.cards.length;
										if (player.countMark('myx_juejing') >= 7) event.goto(1);
										else {
											if (player.countMark('myx_juejing') + qipai <= 7) {
												player.addMark('myx_juejing', qipai);
											} else player.addMark('myx_juejing', 7 - player.countMark('myx_juejing'));
										}
										('step 1');
										if (player.countMark('myx_juejing') >= 3 && !player.hasSkill('chixueqingfeng')) {
											player.addSkill('chixueqingfeng');
										}
									},
								},
								mark: {
									mod: {
										attackRange(player, num) {
											var x = player.countMark('myx_juejing');
											return num + x;
										},
									},
								},
								draw: {
									trigger: { player: 'gainAfter' },
									audio: 'relonghun',
									forced: true,
									filter(event, player) {
										if (_status.currentPhase != player) return false;
										return true;
									},
									content() {
										'step 0';
										var mopai = trigger.cards.length;
										if (player.hasMark('myx_juejing') && player.countMark('myx_juejing') - mopai > 0) {
											player.removeMark('myx_juejing', mopai);
										} else {
											player.removeMark('myx_juejing', player.countMark('myx_juejing'));
											player.loseHp();
											player.addMark('myx_juejing', 1);
										}
										('step 1');
										if (player.hasSkill('chixueqingfeng') && player.countMark('myx_juejing') < 3) {
											player.removeSkill('chixueqingfeng');
										}
									},
								},
								// equip:{
								// 	audio:'longhun2',
								// 	group:'myx_chixueqingfeng',
								// 	locked:true,
								// },
							},
							ai: {
								threaten: 1.2,
								skillTagFilter(player) {
									return player != _status.currentPhase;
								},
							},
							group: ['myx_longhun_draw', 'myx_longhun_discard', 'myx_longhun_mark', 'myx_longhun_lose'],
						},
						myx_chixueqingfeng: {
							audio: 'longhun2',
							equipSkill: true,
							noHidden: true,
							inherit: 'chixueqingfeng',
							filter(event, player) {
								if (player.countMark('myx_juejing') < 3) return false;
								return true;
							},
						},
						myx_youlong: {
							audio: 'ext:命运线/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.hasSkill('myx_longhun');
							},
							content() {
								player.draw();
							},
							ai: {
								order: 8.5,
								result: {
									player(player) {
										if (player.countMark('myx_juejing') <= 3) return 0;
										else return player.countMark('myx_juejing') - 3;
									},
								},
							},
						},
						shenyu2: {
							charlotte: true,
						},
						//诸葛果
						myx_yuhua: {
							audio: 'ext:命运线/audio:1',
							juexingji: true,
							trigger: { player: 'phaseJieshuBegin' },
							forced: true,
							filter(event, player) {
								return player.countMark('xiudao_feng') >= 4 || player.countMark('xiudao_lei') >= 4 || player.countMark('xiudao_shui') >= 4 || player.countMark('xiudao_huo') >= 4;
							},
							content() {
								'step 0';
								if (player.countMark('xiudao_feng') >= 4) player.addSkill('yuhua_feng');
								if (player.countMark('xiudao_lei') >= 4) player.addSkill('yuhua_lei');
								if (player.countMark('xiudao_shui') >= 4) player.addSkill('yuhua_shui');
								if (player.countMark('xiudao_huo') >= 4) player.addSkill('yuhua_huo');
								if (player.countMark('xiudao_feng') == 4 && player.countMark('xiudao_lei') != 4 && player.countMark('xiudao_shui') != 4 && player.countMark('xiudao_huo') != 4) player.addSkill('zhugeguo_feng');
								if (player.countMark('xiudao_feng') != 4 && player.countMark('xiudao_lei') == 4 && player.countMark('xiudao_shui') != 4 && player.countMark('xiudao_huo') != 4) player.addSkill('zhugeguo_lei');
								if (player.countMark('xiudao_feng') != 4 && player.countMark('xiudao_lei') != 4 && player.countMark('xiudao_shui') == 4 && player.countMark('xiudao_huo') != 4) player.addSkill('zhugeguo_shui');
								if (player.countMark('xiudao_feng') != 4 && player.countMark('xiudao_lei') != 4 && player.countMark('xiudao_shui') != 4 && player.countMark('xiudao_huo') == 4) player.addSkill('zhugeguo_huo');
								//player.addSkill('jizhi');
								//player.addSkill('zhugeguodacheng');
								('step 1');
								if (player.countMark('xiudao_feng') == 4 && player.countMark('xiudao_lei') == 4 && player.countMark('xiudao_shui') == 4 && player.countMark('xiudao_huo') == 4) {
									player.draw(4);
									player.gainMaxHp(4);
									player.addSkill('myx_xianyin');
								} else {
									if (player.hasSkill('yuhua_feng')) player.gainMaxHp();
									if (player.hasSkill('yuhua_lei')) player.gainMaxHp();
									if (player.hasSkill('yuhua_shui')) player.gainMaxHp();
									if (player.hasSkill('yuhua_huo')) player.gainMaxHp();
								}
								('step 2');
								if (player.hasSkill('myx_qixiang')) player.removeSkill('myx_qixiang');
								if (player.hasSkill('myx_xiudao')) player.removeSkill('myx_xiudao');
								('step 3');
								player.awakenSkill('myx_yuhua');
							},
						},
						myx_xianyin: {
							audio: 'ext:命运线/audio:1',
							trigger: {
								player: 'damageBegin4',
							},
							forced: true,
							//_priority:15,
							filter(event, player) {
								if (!player.isEmpty(2)) return false;
								if (event.nature) return true;
								return false;
							},
							content() {
								trigger.cancel();
							},
							ai: {
								notrick: true,
								nofire: true,
								nothunder: true,
								effect: {
									target(card, player, target, current) {
										if (player == target && get.subtype(card) == 'equip2') {
											if (get.equipValue(card) <= 8) return 0;
										}
										if (!target.isEmpty(2)) return;
										if (get.tag(card, 'natureDamage')) return 'zerotarget';
									},
								},
							},
						},
						zhugeguodacheng: {
							trigger: { player: 'phaseDrawBegin2' },
							forced: true,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								if (player.hasSkill('yuhua_feng')) trigger.num += 1;
								if (player.hasSkill('yuhua_lei')) trigger.num += 1;
								if (player.hasSkill('yuhua_shui')) trigger.num += 1;
								if (player.hasSkill('yuhua_huo')) trigger.num += 1;
							},
							charlotte: true,
						},
						// "zhugeguodacheng1":{
						// 	mod:{
						// 		maxHandcard:function(player,num){
						// 			return num+4;
						// 		},
						// 	},
						// 	charlotte:true,
						// 	mark:true,
						// 	marktext:'成仙',
						// 	intro:{name:'仙术大成',content:'手牌上限+4'},
						// },
						zhugeguo_feng: {
							trigger: { player: 'useCard' },
							filter(event, player) {
								if (event.skill != 'yuhua_feng') return false;
								return player;
							},
							content() {
								'step 0';
								player
									.chooseTarget('选择一名其他角色并对其造成1点雷电伤害', true, function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
									});
								('step 1');
								if (result.targets?.length) {
									player.line(result.targets, 'thunder');
									result.targets[0].damage(event.num, 'thunder');
								}
							},
							charlotte: true,
						},
						zhugeguo_lei: {
							trigger: { player: 'useCard' },
							filter(event, player) {
								if (event.skill != 'yuhua_lei') return false;
								return player;
							},
							content() {
								player.draw(2);
							},
							charlotte: true,
						},
						zhugeguo_shui: {
							trigger: { player: 'useCard' },
							filter(event, player) {
								if (event.skill != 'yuhua_shui') return false;
								return player;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('zhugeguo_shui'), '弃置一名角色的两张牌', function (card, player, target) {
									return target.countDiscardableCards(player, 'he') > 1;
								}).ai = function (target) {
									return -get.attitude(player, target);
								};
								('step 1');
								if (result.targets?.length) {
									player.discardPlayerCard(result.targets[0], 'he', true);
									player.discardPlayerCard(result.targets[0], 'he', true);
								} else {
									event.finish();
								}
							},
							charlotte: true,
						},
						zhugeguo_huo: {
							trigger: { player: 'useCard' },
							charlotte: true,
							filter(event, player) {
								if (event.skill != 'yuhua_huo') return false;
								return player;
							},
							content() {
								if (player.hp == player.maxHp) {
									player.changeHujia();
								} else {
									player.recover();
								}
							},
						},
						yuhua_feng: {
							enable: 'phaseUse',
							usable: 1,
							filterCard(card, player) {
								return get.color(card) == 'red';
							},
							position: 'hes',
							viewAs: { name: 'muyuhuichun' },
							viewAsFilter(player) {
								if (!player.countCards('hes', { color: 'red' })) return false;
							},
							prompt: '将一张红色牌当【沐浴回春】使用',
							check(card) {
								var val = get.value(card);
								return 10 - val;
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('hes', { color: 'red' })) return false;
								},
							},
						},
						yuhua_lei: {
							enable: 'phaseUse',
							usable: 1,
							filterCard(card, player) {
								return get.color(card) == 'black';
							},
							position: 'hes',
							viewAs: { name: 'leitingwanjun' },
							viewAsFilter(player) {
								if (!player.countCards('hes', { color: 'black' })) return false;
							},
							prompt: '将一张黑色牌当【雷霆万钧】使用',
							check(card) {
								var val = get.value(card);
								return 12 - val;
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('hes', { color: 'black' })) return false;
								},
							},
						},
						yuhua_shui: {
							enable: 'phaseUse',
							usable: 1,
							filterCard(card, player) {
								return get.color(card) == 'black';
							},
							position: 'hes',
							viewAs: { name: 'shenyujiangshi' },
							viewAsFilter(player) {
								if (!player.countCards('hes', { color: 'black' })) return false;
							},
							prompt: '将一张黑色牌当【神雨降世】使用',
							check(card) {
								var val = get.value(card);
								return 6 - val;
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('hes', { color: 'black' })) return false;
								},
							},
						},
						yuhua_huo: {
							enable: 'phaseUse',
							usable: 1,
							filterCard(card, player) {
								return get.color(card) == 'red';
							},
							position: 'hes',
							viewAs: { name: 'lihuomieshi' },
							viewAsFilter(player) {
								if (!player.countCards('hes', { color: 'red' })) return false;
							},
							prompt: '将一张红色牌当【离火灭世】使用',
							check(card) {
								var val = get.value(card);
								return 12 - val;
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('hes', { color: 'red' })) return false;
								},
							},
						},
						myx_xiudao: {
							audio: 'ext:命运线/audio:2', //QQQ
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							filter(event, player) {
								if (player.storage.myx_xiudao) return false;
								if (event.name != 'phase') return true;
								if (game.phaseNumber == 0) return true;
							},
							content() {
								player.storage.myx_xiudao = true;
								game.log(player, '开始修习<span style="font-family: yuanli">飞升之术</span>');
							},
							group: ['xiudao_fangyu'],
							derivation: ['xiudao_fangyu'],
						},
						xiudao_fangyu: {
							audio: 'qirang',
							trigger: { player: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								if (!player.hasSkill('myx_bazhen') || !player.hasSkill('xinqicai')) return true;
								return false;
							},
							async content(event, trigger, player) {
								if (player.hasMark('xiudao_feng') || player.hasMark('xiudao_huo')) {
									player.addSkillLog('myx_bazhen');
								}
								if (player.hasMark('xiudao_lei') || player.hasMark('xiudao_shui')) {
									player.addSkillLog('xinqicai');
								}
							},
						},
						myx_bazhen: {
							audio: 'linglong',
							group: 'myx_bazhen_bagua',
						},
						myx_bazhen_bagua: {
							audio: 'linglong',
							equipSkill: true,
							noHidden: true,
							inherit: 'rw_bagua_skill',
							filter(event, player) {
								if (!lib.skill.bagua_skill.filter(event, player)) return false;
								if (!player.isEmpty(2)) return false;
								return true;
							},
							ai: {
								respondShan: true,
								effect: {
									target(card, player, target) {
										if (player == target && get.subtype(card) == 'equip2') {
											if (get.equipValue(card) <= 7.5) return 0;
										}
										if (!target.isEmpty(2)) return;
										return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
									},
								},
							},
						},
						xiudao_feng: {
							forced: true,
							popup: false,
							charlotte: true,
							marktext: '风',
							intro: {
								content(storage, player) {
									var str = '当前风之仙术熟练度:';
									if (player.countMark('xiudao_feng') == 1) str += '初入仙途';
									else if (player.countMark('xiudao_feng') == 2) str += '渐入佳境';
									else if (player.countMark('xiudao_feng') == 3) str += '半步仙门';
									else str += '仙术大成';
									return str;
								},
							},
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name == 'miaoshou') return true;
								return false;
							},
							forced: true,
							content() {
								player.addMark('xiudao_feng', 1);
								player.addTempSkill('feng_jinyan');
							},
						},
						feng_jinyan: {
							forced: true,
							charlotte: true,
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'miaoshou') return false;
								},
							},
						},
						xiudao_lei: {
							forced: true,
							popup: false,
							charlotte: true,
							marktext: '雷',
							intro: {
								content(storage, player) {
									var str = '当前雷之仙术熟练度:';
									if (player.countMark('xiudao_lei') == 1) str += '初入仙途';
									else if (player.countMark('xiudao_lei') == 2) str += '渐入佳境';
									else if (player.countMark('xiudao_lei') == 3) str += '半步仙门';
									else str += '仙术大成';
									return str;
								},
							},
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name == 'shandianfengbao') return true;
								return false;
							},
							forced: true,
							content() {
								player.addMark('xiudao_lei', 1);
								player.addTempSkill('lei_jinyan');
							},
						},
						lei_jinyan: {
							forced: true,
							charlotte: true,
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'shandianfengbao') return false;
								},
							},
						},
						xiudao_shui: {
							forced: true,
							popup: false,
							charlotte: true,
							marktext: '水',
							intro: {
								content(storage, player) {
									var str = '当前水之仙术熟练度:';
									if (player.countMark('xiudao_shui') == 1) str += '初入仙途';
									else if (player.countMark('xiudao_shui') == 2) str += '渐入佳境';
									else if (player.countMark('xiudao_shui') == 3) str += '半步仙门';
									else str += '仙术大成';
									return str;
								},
							},
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name == 'shangshan') return true;
								return false;
							},
							forced: true,
							content() {
								player.addMark('xiudao_shui', 1);
								player.addTempSkill('shui_jinyan');
							},
						},
						shui_jinyan: {
							forced: true,
							charlotte: true,
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'shangshan') return false;
								},
							},
						},
						xiudao_huo: {
							forced: true,
							popup: false,
							charlotte: true,
							marktext: '火',
							intro: {
								content(storage, player) {
									var str = '当前火之仙术熟练度:';
									if (player.countMark('xiudao_huo') == 1) str += '初入仙途';
									else if (player.countMark('xiudao_huo') == 2) str += '渐入佳境';
									else if (player.countMark('xiudao_huo') == 3) str += '半步仙门';
									else str += '仙术大成';
									return str;
								},
							},
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name == 'xinghuoliaoyuan') return true;
								return false;
							},
							forced: true,
							content() {
								player.addMark('xiudao_huo', 1);
								player.addTempSkill('huo_jinyan');
							},
						},
						huo_jinyan: {
							forced: true,
							charlotte: true,
							mod: {
								cardEnabled(card, player) {
									if (card.name == 'xinghuoliaoyuan') return false;
								},
							},
						},
						myx_qixiang: {
							audio: 'ext:命运线/audio:2',
							enable: ['chooseToUse'],
							prompt: '将♦️️牌当做【星火燎原】,♥️️牌当做【妙手回春】,♣️️牌当做【闪电风暴】,♠️️牌当做【上善若水】',
							viewAs(cards, player) {
								var name = false;
								var nature = null;
								switch (cards[0]?.suit) {
									case 'club':
										name = 'shandianfengbao';
										break;
									case 'diamond':
										name = 'xinghuoliaoyuan';
										break;
									case 'spade':
										name = 'shangshan';
										break;
									case 'heart':
										name = 'miaoshou';
										break;
								}
								if (name) return { name: name };
								return null;
							},
							check(card) {
								return 10 - get.value(card);
							},
							position: 'hs',
							filterCard(card, player, event) {
								event = event || _status.event;
								var filter = event._backup.filterCard;
								var name = card.suit;
								if (name == 'club' && filter({ name: 'shandianfengbao', cards: [card] }, player, event)) return true;
								if (name == 'diamond' && filter({ name: 'xinghuoliaoyuan', cards: [card] }, player, event)) return true;
								if (name == 'spade' && filter({ name: 'shangshan', cards: [card] }, player, event)) return true;
								if (name == 'heart' && filter({ name: 'miaoshou', cards: [card] }, player, event)) return true;
								return false;
							},
							filter(event, player) {
								var filter = event.filterCard;
								if (filter({ name: 'xinghuoliaoyuan' }, player, event) && player.countCards('hs', { suit: 'diamond' })) return true;
								if (filter({ name: 'shandianfengbao' }, player, event) && player.countCards('hs', { suit: 'club' })) return true;
								if (filter({ name: 'miaoshou' }, player, event) && player.countCards('hs', { suit: 'heart' })) return true;
								if (filter({ name: 'shangshan' }, player, event) && player.countCards('hs', { suit: 'spade' })) return true;
								return false;
							},
							ai: {
								skillTagFilter(player, tag) {
									var name;
									switch (tag) {
										case 'save':
											name = 'heart';
											break;
									}
									if (!player.countCards('hs', { suit: name })) return false;
								},
								order: 8,
								result: {
									player: 2,
									target(player, target) {
										if (target.hp < 4) return 5;
										if (player == target && player.countCards('h') > player.hp) return 5;
										return 2;
									},
								},
							},
							group: ['xiudao_feng', 'xiudao_lei', 'xiudao_huo', 'xiudao_shui'],
						},
						//王美人
						myx_huailong: {
							audio: 'minsi',
							trigger: {
								player: 'useCard',
							},
							forced: true,
							marktext: '怀龙',
							intro: { content: '下个弃牌阶段手牌上限-#' },
							filter(event, player) {
								if (event.card.name == 'jiu') return true;
								return false;
							},
							forced: true,
							content() {
								player.draw();
								if (player.countMark('myx_huailong') < player.hp) player.addMark('myx_huailong');
							},
							group: ['myx_huailong_sha', 'myx_huailong_qipai', 'myx_huailong_jieshu', 'myx_huailong_mei'],
						},
						myx_huailong_sha: {
							trigger: { target: 'useCardToTarget' },
							forced: true,
							preHidden: true,
							filter(event, player) {
								var target = _status.currentPhase;
								if (target != player) return true;
								return false;
							},
							forced: true,
							content() {
								player.draw();
								if (player.countMark('myx_huailong') < player.hp) player.addMark('myx_huailong');
							},
						},
						myx_huailong_qipai: {
							mod: {
								maxHandcard(player, num) {
									return Math.max(0, num - player.countMark('myx_huailong'));
								},
							},
						},
						myx_huailong_jieshu: {
							trigger: { player: 'phaseEnd' },
							filter(event, player) {
								return player.hasMark('myx_huailong');
							},
							forced: true,
							content() {
								player.removeMark('myx_huailong', player.countMark('myx_huailong'));
							},
						},
						myx_huailong_mei: {
							audio: 'minsi',
							trigger: { player: 'phaseJieshuBegin' },
							filter(event, player) {
								return player.countCards('h') == 0;
							},
							content() {
								'step 0';
								player.chooseTarget(true, '选择一名角色获得【梅】').set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									if (_status.event.neg) return -att;
									return att;
								});
								('step 1');
								player.line(result.targets, 'green');
								result.targets[0].gain(game.createCard('jlsgqs_mei'), 'gain2');
							},
						},
						//何太后
						myx_qiluan: {
							audio: 'qiluan',
							trigger: { global: 'dieAfter' },
							filter(event, player) {
								return event.player.hasMark('myx_zhendu');
							},
							forced: true,
							content() {
								player.draw(2);
								player.addMark('myx_zhendu', 1);
							},
							derivation: ['myx_qiluan_jiu'],
							group: ['myx_qiluan_draw1', 'myx_qiluan_draw2', 'myx_qiluan_juexing'],
						},
						myx_qiluan_draw1: {
							audio: 'qiluan',
							trigger: { global: 'dying' },
							filter(event, player) {
								return event.player.hasMark('myx_zhendu');
							},
							forced: true,
							content() {
								player.draw(1);
							},
						},
						myx_qiluan_draw2: {
							audio: 'qiluan',
							trigger: { global: 'dieAfter' },
							forced: true,
							filter(event, player) {
								return player == event.source && event.player.hasMark('myx_zhendu');
							},
							content() {
								player.draw(1);
								player.addMark('myx_zhendu', 2);
							},
						},
						myx_qiluan_juexing: {
							trigger: { global: ['phaseZhunbeiBegin', 'phaseJieshuBegin'] },
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.countMark('myx_zhendu') >= 3;
							},
							async content(event, trigger, player) {
								player.awakenSkill('myx_qiluan_juexing');
								player.addSkill('myx_qiluan_jiu');
							},
						},
						myx_qiluan_jiu: {
							audio: 'ext:命运线/audio:2',
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (event.card.name == 'jiu' && player.countCards('he') > 0) return true;
								return false;
							},
							forced: true,
							content() {
								player.chooseToDiscard(1, true, 'he');
							},
						},
						myx_zhendu: {
							audio: 'ext:命运线/audio:2',
							trigger: { global: 'phaseUseBegin' },
							filter(event, player) {
								return event.player.isAlive() && player.countCards('he') > 0 && event.player.hasUseTarget({ name: 'jiu' }, null, true);
							},
							forced: true,
							preHidden: true,
							marktext: '鸩毒',
							intro: {
								content: '怪就怪你,生有皇子!',
							},
							content() {
								'step 0';
								var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
								if (player == trigger.player || get.damageEffect(trigger.player, player, player) <= 0 || !trigger.player.hasUseTarget({ name: 'jiu' }, null, true)) {
									nono = true;
								} else if (trigger.player.hp > 2) {
									nono = true;
								} else if (trigger.player.hp > 1 && player.countCards('he') < 3 && trigger.player.canUse('sha', player) && !player.countCards('he', 'shan') && trigger.player.countCards('he') >= 3) {
									nono = true;
								}
								var next = player.chooseToDiscard(get.prompt2('myx_zhendu', trigger.player), 'he');
								next.set('ai', function (card) {
									if (_status.event.nono) return -1;
									return 7 - get.useful(card);
								});
								next.set('nono', nono);
								next.setHiddenSkill('myx_zhendu');
								('step 1');
								if (result.bool) {
									trigger.player.chooseUseTarget({ name: 'jiu' }, true, 'noTargetDelay', 'nodelayx');
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool && trigger.player != player) {
									if (!trigger.player.hasMark('myx_zhendu')) {
										trigger.player.damage();
										trigger.player.gain(game.createCard('du'), 'gain2');
										trigger.player.addMark('myx_zhendu');
										player.draw();
										event.finish();
									} else {
										var list1 = ['造成伤害', '获得【毒】'];
										player
											.chooseControl(list1)
											.set('ai', function () {
												if (trigger.player.hp > 1) {
													return '获得【毒】';
												} else {
													return '造成伤害';
												}
											})
											.set('prompt', '请选择一项');
									}
								} else {
									player.draw();
									event.finish();
								}
								('step 3');
								if (result.control == '造成伤害') {
									trigger.player.damage();
								} else {
									trigger.player.gain(game.createCard('du'), 'gain2');
								}
								// trigger.player.damage();
								// if(!_status.du_suits||_status.du_suits.length>0){
								// 				if(!lib.inpile.includes('du')) lib.inpile.add('du');
								// 				if(!_status.du_suits) _status.du_suits=lib.suit.slice(0);
								// 				trigger.player.gain(game.createCard2('du'),'gain2');
								// 			}
								// else{
								// 	var card=get.cardPile2(function(card){
								// 		return card.name=='du';
								// 	});
								// 	if(card) trigger.player.gain(card,'gain2');
								// }
								('step 4');
								player.draw();
							},
							ai: {
								threaten: 2,
								expose: 0.3,
							},
						},
						//李儒
						myx_mieji: {
							group: ['myx_mieji2'],
							juexingji: true,
							trigger: { player: 'phaseJieshuBegin' },
							forced: true,
							audio: 'ext:命运线/audio:1',
							filter(event, player) {
								return player.countMark('myx_fencheng2') >= game.countPlayer() - 1;
							},
							logTarget(event, player) {
								return game.filterPlayer((current) => current != player && current.hasMark('myx_fencheng2'));
							},
							content() {
								var list = game.filterPlayer((current) => current != player && current.hasMark('myx_fencheng2')).sortBySeat();
								for (var i of list) i.removeMark('myx_fencheng2', 1, false);
								player.addSkill('mieji');
								player.removeMark('myx_fencheng2', game.countPlayer() - 1);
								player.awakenSkill('myx_mieji');
								player.removeSkill('myx_mieji');
							},
						},
						myx_mieji2: {
							audio: 'ext:命运线/audio:1',
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							filter(event, player) {
								if (event.name != 'phase') return true;
								if (game.phaseNumber == 0) return true;
							},
							content() {
								game.log(player, '解锁了<span style="font-family: yuanli">洛阳城的命运线</span>');
							},
						},
						myx_fencheng: {
							group: ['myx_fencheng2'],
							audio: 'ext:命运线/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return !player.storage.myx_fencheng;
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							limited: true,
							selectTarget: -1,
							multitarget: true,
							multiline: true,
							mark: true,
							line: 'fire',
							content() {
								'step 0';
								player.storage.myx_fencheng = true;
								player.awakenSkill('myx_fencheng');
								event.num = 1;
								event.targets = targets.slice(0);
								event.targets.sort(lib.sort.seat);
								('step 1');
								if (event.targets.length) {
									var target = event.targets.shift();
									event.target = target;
									var res = get.damageEffect(target, player, target, 'fire');
									target
										.chooseToDiscard('he', `弃置至少${get.cnNumber(event.num)}张牌或受到1点火焰伤害`, [num, Infinity])
										.set('ai', function (card) {
											if (ui.selected.cards.length >= _status.event.parent.num) return -1;
											if (_status.event.player.hasSkillTag('nofire')) return -1;
											if (_status.event.res >= 0) return 6 - get.value(card);
											if (get.type(card) != 'basic') {
												return 10 - get.value(card);
											}
											return 8 - get.value(card);
										})
										.set('res', res);
								} else {
									event.finish();
								}
								('step 2');
								if (!result.bool) {
									event.target.damage(1, 'fire');
									player.draw();
									if (!event.target.hasMark('myx_fencheng2')) {
										event.target.addMark('myx_fencheng2', 1);
										player.addMark('myx_fencheng2', 1);
									}
									event.num = 1;
								} else {
									event.num = result.cards.length + 1;
								}
								event.goto(1);
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
							},
							init(player) {
								player.storage.myx_fencheng = false;
							},
							intro: {
								content: 'limited',
							},
						},
						myx_fencheng2: {
							forced: true,
							popup: false,
							charlotte: true,
							marktext: '焚',
							intro: {
								content: '一把火,都烧个精光吧',
							},
						},
						myx_juece: {
							audio: 'ext:命运线/audio:2',
							trigger: { player: 'phaseBegin' },
							group: ['myx_juece2', 'myx_juece4'],
							filter(event, player) {
								return player.countMark('myx_fencheng2') < game.countPlayer() - 1;
							},
							content() {
								'step 0';
								var skillList = [];
								var skills = player.getOriginalSkills();
								for (var i = 0; i < skills.length; i++) {
									if (lib.skill[skills[i]].limited && player.awakenedSkills.includes(skills[i])) {
										skillList.push(skills[i]);
									}
								}
								('step 1');
								var List = [];
								var skills = player.getOriginalSkills();
								for (var i = 0; i < skills.length; i++) {
									if (lib.skill[skills[i]].limited && player.awakenedSkills.includes(skills[i])) {
										List.push(skills[i]);
									}
								}
								if (List.length == 1) {
									player.restoreSkill(List[0]);
									game.log(player, '重置了', `#g【${get.translation(List[0])}】`);
									event.goto(2);
								} else {
									player.chooseControl(List).set('prompt', '选择一个限定技重置之');
									event.goto(2);
								}
								('step 2');
								if (result.control) {
									player.restoreSkill(result.control);
									game.log(player, '重置了', `#g【${get.translation(result.control)}】`);
								}
								('step 3');
								event.finish();
							},
							ai: {
								order: 10,
								result: { player: 2 },
							},
						},
						myx_juece2: {
							audio: 'ext:命运线/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.hasCard(function (card) {
									return get.type(card) != 'basic';
								}, 'eh');
							},
							filterTarget(card, player, target) {
								return target != player && !target.hasSkill('myx_juece3');
							},
							filterCard(card) {
								return get.color(card) == 'black' && get.type(card, 'trick') != 'basic';
							},
							content() {
								'step 0';
								if (target.countMark('myx_fencheng2') == 1) {
									if (target.countCards('he') > 0) {
										target.removeMark('myx_fencheng2');
										player.removeMark('myx_fencheng2');
										player.gainPlayerCard(target, 'he', true);
										event.finish();
									} else event.finish();
								}
								if (target.countMark('myx_fencheng2') == 0) {
									if (target.countCards('h') > 0) {
										event.goto(1);
									} else event.finish();
								} else event.finish();
								('step 1');
								target.addMark('myx_fencheng2');
								player.addMark('myx_fencheng2');
								player.choosePlayerCard(target, 'h', true);
								('step 2');
								player.showCards(result.cards, get.translation(player) + `对${get.translation(target)}发动了【绝策】`);
								var type = get.type2(result.cards[0], target),
									hs = target.getCards('h', function (card) {
										return card != result.cards[0] && get.type2(card, target) != type;
									});
								//if(hs.length){
								target.addGaintag(hs, 'myx_juece2');
								target.addTempSkill('myx_juece3', { player: 'phaseAfter' });
								//}
								event.goto(3);
								('step 3');
								//'step 4'
								event.finish();
							},
							ai: {
								order: 10,
								result: {
									target: -2,
								},
							},
						},
						myx_juece3: {
							group: 'g_du',
							forced: true,
							marked: true,
							charlotte: true,
							onremove(player) {
								player.removeGaintag('myx_juece2');
							},
							mod: {
								cardname(card, player) {
									if (get.type2(card, false) != player.storage.myx_juece3) return 'du';
								},
							},
							mark: true,
							marktext: '献酒',
							intro: {
								content: '饮下这杯酒吧!陛下',
							},
						},
						myx_juece4: {
							trigger: { global: 'die' },
							filter(event, player) {
								return event.player.hasMark('myx_fencheng2');
							},
							forced: true,
							charllote: true,
							content() {
								player.removeMark('myx_fencheng2', 1);
							},
						},
						//孙登
						myx_taizi: {
							trigger: { player: 'phaseAfter' },
							forced: true,
							charlotte: false,
							filter(event, player) {
								return player.countMark('myx_kuangbi');
							},
							content() {
								if (player.countMark('myx_kuangbi') >= 6 && !player.hasSkill('yingzi')) player.addSkill('yingzi');
								if (player.countMark('myx_kuangbi') >= 12 && !player.hasSkill('rezhijian')) player.addSkill('rezhijian');
								if (player.countMark('myx_kuangbi') >= 18 && !player.hasSkill('liangyin')) player.addSkill('liangyin');
								if (player.countMark('myx_kuangbi') >= 24 && !player.hasSkill('qinzheng')) player.addSkill('qinzheng');
								if (player.countMark('myx_kuangbi') >= 33) player.die();
							},
						},
						myx_kuangbi: {
							forbid: ['boss'],
							audio: 'kuangbi',
							trigger: { player: 'phaseBegin' },
							charlotte: true,
							marktext: '匡弼',
							intro: {
								content: '当前拥有#枚〖匡弼〗标记',
							},
							group: ['myx_kuangbi2', 'myx_kuangbi3'],
							content() {
								'step 0';
								var list1 = ['失去体力', '获得标记'];
								trigger.player
									.chooseControl(list1)
									.set('ai', function () {
										if (player.countMark('myx_kuangbi') <= 24) {
											return '获得标记';
										}
										if (player.countMark('myx_kuangbi') >= 28 && player.hp >= 2) {
											return '失去体力';
										} else {
											var num = [0, 1].randomGet();
											if (num == 0) {
												return '获得标记';
											} else {
												return '失去体力';
											}
										}
									})
									.set('prompt', '请选择一项');
								('step 1');
								if (result.control == '失去体力') {
									player.loseHp();
								} else {
									player.addMark('myx_kuangbi', 4);
								}
								('step 2');
								player.chooseTarget(get.prompt('myx_kuangbi'), '选择匡弼的目标', lib.filter.notMe).set('ai', function (target) {
									var att = get.attitude(_status.event.player, target);
									//if(att>0) return Math.abs(att);
									return 0.1 - att;
								});
								('step 3');
								if (result.targets?.length) {
									event.target = result.targets[0];
								} else {
									event.goto(2);
								}
								('step 4');
								var list2 = [];
								var listm = [];
								var listv = [];
								if (player.name1 != undefined) listm = lib.character[target.name1][3];
								else listm = lib.character[target.name][3];
								if (player.name2 != undefined) listv = lib.character[target.name2][3];
								listm = listm.concat(listv);
								var func = function (skill) {
									var info = get.info(skill);
									if (!info || info.limited) return false;
									return true;
								};
								for (var i = 0; i < listm.length; i++) {
									if (func(listm[i])) list2.add(listm[i]);
								}
								event.skills = list2;
								('step 5');
								if (event.skills.length) {
									player
										.chooseControl(event.skills)
										.set('prompt', '请选择要匡弼的技能')
										.set('ai', function () {
											return event.skills.randomGet();
										});
								} else event.finish();
								//var skill=result.control;
								('step 6');
								player.addTempSkill(result.control, { player: 'phaseBefore' });
								target.storage.myx_kuangbi_bizui = [result.control];
								target.addSkill('myx_kuangbi_bizui');
								game.log(player, '获得了技能', `#g【${get.translation(result.control)}】`);
								('step 7');
							},
							ai: {
								result: {
									player: 4,
									target: -4,
								},
								order: 10,
								threaten: 2,
							},
						},
						myx_kuangbi2: {
							trigger: {
								player: 'phaseBefore',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								var num = game.hasPlayer(function (current) {
									return current.hasSkill('myx_kuangbi_bizui');
								});
								return num > 0;
							},
							content() {
								game.countPlayer(function (current) {
									if (current.hasSkill('myx_kuangbi_bizui')) {
										current.removeSkill('myx_kuangbi_bizui');
									}
								});
							},
						},
						myx_kuangbi3: {
							trigger: { source: 'damageSource' },
							forced: true,
							notemp: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								player.addMark('myx_kuangbi', trigger.num);
							},
						},
						myx_kuangbi_bizui: {
							init(player, skill) {
								player.disableSkill(skill, player.storage.myx_kuangbi_bizui);
							},
							onremove(player, skill) {
								player.enableSkill(skill);
							},
							mark: true,
							charlotte: true,
							intro: {
								content(storage, player, skill) {
									let list = Object.keys(player.disabledSkills);
									if (list.length) {
										var str = '辅佐技能:';
										for (var i = 0; i < list.length; i++) {
											if (lib.translate[list[i] + '_info']) str += get.translation(list[i]) + '、';
										}
										return str.slice(0, str.length - 1);
									}
								},
							},
						},
						//刘谌
						myx_beidi: {
							audio: 'ext:命运线/audio:1',
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (player.storage.myx_beidi) return false;
								if (event.name != 'phase') return true;
								if (game.phaseNumber == 0) return true;
							},
							content() {
								player.storage.myx_beidi = true;
								player.addSkill('myx_aozhan');
								player.addSkill('myx_xunguo');
								player.addSkill('myx_xuhan');
								game.log(player, '开启了<span style="font-family: yuanli">北地王的命运线</span>');
							},
						},
						myx_aozhan: {
							audio: 'twsidai',
							trigger: { source: 'damageSource' },
							forced: true,
							notemp: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								player.addMark('myx_aozhan', trigger.num);
							},
							intro: {
								name2: '战',
								content: 'mark',
							},
						},
						myx_xunguo: {
							juexingji: true,
							audio: 'ext:命运线/audio:1',
							trigger: {
								player: 'dying',
							},
							filter(event, player) {
								return player.countMark('myx_aozhan');
							},
							forced: true,
							charlotte: true,
							content() {
								player.recover(player.countMark('myx_aozhan'));
								player.addSkill('huilei');
								player.addSkill('xun_guo');
								player.removeSkill('myx_xuhan');
								player.removeSkill('myx_aozhan');
								player.awakenSkill('myx_xunguo');
							},
						},
						myx_xuhan: {
							juexingji: true,
							trigger: { player: 'phaseJieshuBegin' },
							forced: true,
							charlotte: true,
							audio: 'ext:命运线/audio:1',
							filter(event, player) {
								return player.countMark('myx_aozhan') >= 12;
							},
							content() {
								player.addSkill('zhaolie');
								player.addSkill('xu_han');
								player.removeSkill('myx_xunguo');
								player.removeSkill('myx_aozhan');
								player.awakenSkill('myx_xuhan');
							},
						},
						myx_zhanjue: {
							audio: 'ext:命运线/audio:2',
							derivation: ['drlt_wanglie', 'olsujian', 'xueji', 'reenyuan', 'zhuning', 'rezaiqi'],
							enable: 'phaseUse',
							filterCard(card) {
								return !card.hasGaintag('reqinwang');
							},
							selectCard: -1,
							position: 'h',
							filter(event, player) {
								var stat = player.getStat().skill;
								if (stat.myx_zhanjue_draw && stat.myx_zhanjue_draw >= 2) return false;
								var hs = player.getCards('h', function (card) {
									return !card.hasGaintag('reqinwang');
								});
								if (!hs.length) return false;
								for (var i = 0; i < hs.length; i++) {
									var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
									if (mod2 === false) return false;
								}
								return true;
							},
							viewAs: { name: 'juedou' },
							onuse(links, player) {
								if (!player.hasSkill('myx_zhanjue_effect')) player.addTempSkill('myx_zhanjue_effect', 'phaseBefore');
							},
							ai: {
								order: 4,
								tag: {
									respond: 2,
									respondSha: 2,
									damage: 1,
								},
								result: {
									target: -1.5,
									player(player, target) {
										if (
											player.hasSkillTag(
												'directHit_ai',
												true,
												{
													target: target,
													card: { name: 'juedou' },
												},
												true
											)
										) {
											return 2;
										}
										if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
											return 2;
										}
										var hs1 = target.getCards('h', 'sha');
										var hs2 = player.getCards('h', function (card) {
											return card.hasGaintag('reqinwang') && card.name == 'sha';
										});
										if (hs1.length > hs2.length + 1) {
											return 0;
										}
										var hsx = target.getCards('h');
										if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
											return -0.5;
										}
										if (hsx.length > 3 && hs2.length == 0) {
											return -0.5;
										}
										if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
											return -0.5;
										}
										return 2.5;
									},
								},
							},
						},
						myx_zhanjue_effect: {
							trigger: { player: 'useCardAfter' },
							forced: true,
							popup: false,
							charlotte: false,
							filter(event, player) {
								return event.skill == 'myx_zhanjue';
							},
							content() {
								'step 0';
								var stat = player.getStat().skill;
								if (!stat.myx_zhanjue_draw) stat.myx_zhanjue_draw = 0;
								stat.myx_zhanjue_draw++;
								player.draw();
								var list = game.filterPlayer(function (current) {
									if (
										current.getHistory('damage', function (evt) {
											return evt.card == trigger.card;
										}).length
									) {
										return true;
									}
									return false;
								});
								if (stat.myx_zhanjue_draw == 1) {
									if (player.hasSkill('drlt_wanglie')) player.removeSkill('drlt_wanglie');
									if (player.hasSkill('xueji')) player.removeSkill('xueji');
									if (player.hasSkill('zhuning')) player.removeSkill('zhuning');
									var n = [1, 2, 3].randomGet();
									if (n == 1 && !player.hasSkill('drlt_wanglie')) player.addSkill('drlt_wanglie');
									if (n == 2 && !player.hasSkill('xueji')) player.addSkill('xueji');
									if (n == 3 && !player.hasSkill('zhuning')) player.addSkill('zhuning');
								}
								if (stat.myx_zhanjue_draw == 2) {
									if (player.hasSkill('olsujian')) player.removeSkill('olsujian');
									if (player.hasSkill('reenyuan')) player.removeSkill('reenyuan');
									if (player.hasSkill('rezaiqi')) player.removeSkill('rezaiqi');
									var n = [1, 2, 3].randomGet();
									if (n == 1 && !player.hasSkill('olsujian')) player.addSkill('olsujian');
									if (n == 2 && !player.hasSkill('reenyuan')) player.addSkill('reenyuan');
									if (n == 3 && !player.hasSkill('rezaiqi')) player.addSkill('rezaiqi');
								}
								('step 1');
							},
						},
						//神刘禅
						myx_liushanyanhan: {
							audio: 'ruoyu',
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							filter(event, player) {
								if (player.storage.myx_liushanyanhan) return false;
								if (event.name != 'phase') return true;
								if (game.phaseNumber == 0) return true;
							},
							content() {
								player.storage.myx_liushanyanhan = true;
								var skill = ['myx_liushanyanhan_beifa', 'myx_liushanyanhan_fuming', 'myx_liushanyanhan_chengzhi', 'myx_liushanyanhan_chengzhi', 'myx_liushanyanhan_skillanle', 'myx_liushanyanhan_xinghan'].randomGet();
								player.addSkill(skill);
								game.log(player, '解锁了<span style="font-family: yuanli">季汉命运线</span>:', `#g【${get.translation(skill)}】`);
							},
							derivation: ['nzry_feijun', 'kuanggu', 'benxi', 'zhanjue', 'xinfu_zuilun', 'oltiaoxin', 'rexuanhuo', 'rende', 'guixiu', 'xinliegong', 'new_rewusheng', 'olpaoxiao', 'fangquan', 'kongcheng', 'huisheng', 'qiangwu', 'reguanxing', 'xinfu_tunan'],
							subSkill: {
								beifa: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									filter(event, player) {
										var num = event.card.number;
										if (typeof num != 'number') return false;
										if (num <= 1) return false;
										for (var i = 2; i <= Math.sqrt(num); i++) {
											if (num % i == 0) return false;
										}
										if (!player.storage.changming) return false;
										var list = ['nzry_feijun', 'kuanggu', 'benxi'];
										for (var i of list) {
											if (!player.storage.changming.includes(i)) return false;
										}
										return true;
									},
									content() {
										trigger.directHit.addArray(
											game.filterPlayer(function (current) {
												return current != player;
											})
										);
									},
									init(player, skill) {
										player.markAuto('changming_current', ['nzry_feijun', 'kuanggu', 'benxi']);
									},
									mark: true,
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											if (arg && arg.card) {
												var num = arg.card.number;
												if (typeof num != 'number') return false;
												if (num <= 1) return false;
												for (var i = 2; i <= Math.sqrt(num); i++) {
													if (num % i == 0) return false;
												}
												return true;
											}
											return false;
										},
									},
									intro: {
										name: '命运线:北伐',
										content(storage, player) {
											var finished = [],
												unfinished = ['nzry_feijun', 'kuanggu', 'benxi'];
											if (player.storage.changming) {
												for (var i = 0; i < unfinished.length; i++) {
													if (player.storage.changming.includes(unfinished[i])) {
														finished.push(unfinished[i]);
														unfinished.splice(i--, 1);
													}
												}
											}
											var str = '';
											if (unfinished.length) str += `<li>未获得:${get.translation(unfinished)}<br>`;
											if (finished.length) str += `<li>已获得过:${get.translation(finished)}<br>`;
											str += '<li>锁定技.若你因〖昌命〗获得过〖飞军〗〖狂骨〗〖奔袭〗,则当你使用点数为质数的牌时,此牌不可被响应.';
											return str;
										},
									},
								},
								fuming: {
									trigger: { player: 'phaseDiscardBefore' },
									forced: true,
									filter(event, player) {
										if (!player.storage.changming) return false;
										var list = ['zhanjue', 'xinfu_zuilun', 'oltiaoxin'];
										for (var i of list) {
											if (!player.storage.changming.includes(i)) return false;
										}
										return true;
									},
									content() {
										trigger.cancel();
									},
									init(player, skill) {
										player.markAuto('changming_current', ['zhanjue', 'xinfu_zuilun', 'oltiaoxin']);
									},
									ai: {
										effect: {
											target(card) {
												if (get.type(card) == 'delay') return 'zerotarget';
											},
										},
									},
									mark: true,
									intro: {
										name: '命运线:复明',
										content(storage, player) {
											var finished = [],
												unfinished = ['zhanjue', 'xinfu_zuilun', 'oltiaoxin'];
											if (player.storage.changming) {
												for (var i = 0; i < unfinished.length; i++) {
													if (player.storage.changming.includes(unfinished[i])) {
														finished.push(unfinished[i]);
														unfinished.splice(i--, 1);
													}
												}
											}
											var str = '';
											if (unfinished.length) str += `<li>未获得:${get.translation(unfinished)}<br>`;
											if (finished.length) str += `<li>已获得过:${get.translation(finished)}<br>`;
											str += '<li>锁定技.若你因〖昌命〗获得过〖战绝〗〖罪论〗〖挑衅〗,则跳过你的弃牌阶段.';
											return str;
										},
									},
								},
								chengzhi: {
									init(player, skill) {
										player.markAuto('changming_current', ['rexuanhuo', 'rende', 'guixiu']);
									},
									trigger: {
										player: 'useSkillAfter',
									},
									forced: true,
									limited: true,
									filter(event, player) {
										if (!player.storage.changming || event.skill != 'changming') return false;
										var list = ['rexuanhuo', 'rende', 'guixiu'];
										for (var i of list) {
											if (!player.storage.changming.includes(i)) return false;
										}
										return true;
									},
									content() {
										player.awakenSkill('myx_liushanyanhan_chengzhi');
										var list = ['myx_liushanyanhan_beifa', 'myx_liushanyanhan_fuming', 'myx_liushanyanhan_qianlong', 'myx_liushanyanhan_skillanle', 'myx_liushanyanhan_xinghan'];
										var list2 = list.randomRemove(2);
										if (list2.includes('myx_liushanyanhan_qianlong') && list2.includes('myx_liushanyanhan_skillanle')) {
											list2.randomRemove(1);
											list2.push(list.randomGet());
										}
										for (var skill of list2) {
											player.addSkill(skill);
											game.log(player, '解锁了<span style="font-family: yuanli">季汉命运线</span>:', `#g【${get.translation(skill)}】`);
										}
									},
									mark: true,
									intro: {
										name: '命运线:承志',
										content(storage, player) {
											var finished = [],
												unfinished = ['rexuanhuo', 'rende', 'guixiu'];
											if (player.storage.changming) {
												for (var i = 0; i < unfinished.length; i++) {
													if (player.storage.changming.includes(unfinished[i])) {
														finished.push(unfinished[i]);
														unfinished.splice(i--, 1);
													}
												}
											}
											var str = '';
											if (unfinished.length) str += `<li>未获得:${get.translation(unfinished)}<br>`;
											if (finished.length) str += `<li>已获得过:${get.translation(finished)}<br>`;
											str += '<li>锁定技,限定技.若你因〖昌命〗获得过〖眩惑〗〖仁德〗〖闺秀〗,则当你发动的〖昌命〗结算结束后,你随机获得两条其他<span style="font-family: yuanli">季汉命运线</span>.';
											return str;
										},
									},
								},
								qianlong: {
									mod: {
										cardname(card, player) {
											if (player.storage.changming && [1, 3, 5, 7, 9, 11, 13].includes(card.number)) {
												var list = ['xinliegong', 'new_rewusheng', 'olpaoxiao'];
												for (var i of list) {
													if (!player.storage.changming.includes(i)) return;
												}
												return 'sha';
											}
										},
									},
									init(player, skill) {
										player.markAuto('changming_current', ['xinliegong', 'new_rewusheng', 'olpaoxiao']);
									},
									mark: true,
									intro: {
										name: '命运线:潜龙',
										content(storage, player) {
											var finished = [],
												unfinished = ['xinliegong', 'new_rewusheng', 'olpaoxiao'];
											if (player.storage.changming) {
												for (var i = 0; i < unfinished.length; i++) {
													if (player.storage.changming.includes(unfinished[i])) {
														finished.push(unfinished[i]);
														unfinished.splice(i--, 1);
													}
												}
											}
											var str = '';
											if (unfinished.length) str += `<li>未获得:${get.translation(unfinished)}<br>`;
											if (finished.length) str += `<li>已获得过:${get.translation(finished)}<br>`;
											str += '<li>锁定技.若你因〖昌命〗获得过〖烈弓〗〖武圣〗〖咆哮〗,则你手牌区内点数为奇数的牌的牌名视为【杀】.';
											return str;
										},
									},
								},
								skillanle: {
									mod: {
										cardname(card, player) {
											if (card.name == 'shan' && player.storage.changming) {
												var list = ['fangquan', 'kongcheng', 'huisheng'];
												for (var i of list) {
													if (!player.storage.changming.includes(i)) return;
												}
												return 'jiu';
											}
											if (card.name == 'wuxie' && player.storage.changming) {
												var list = ['fangquan', 'kongcheng', 'huisheng'];
												for (var i of list) {
													if (!player.storage.changming.includes(i)) return;
												}
												return 'jiu';
											}
										},
									},
									init(player, skill) {
										player.markAuto('changming_current', ['fangquan', 'kongcheng', 'huisheng']);
									},
									mark: true,
									intro: {
										name: '命运线:安乐',
										content(storage, player) {
											var finished = [],
												unfinished = ['fangquan', 'kongcheng', 'huisheng'];
											if (player.storage.changming) {
												for (var i = 0; i < unfinished.length; i++) {
													if (player.storage.changming.includes(unfinished[i])) {
														finished.push(unfinished[i]);
														unfinished.splice(i--, 1);
													}
												}
											}
											var str = '';
											if (unfinished.length) str += `<li>未获得:${get.translation(unfinished)}<br>`;
											if (finished.length) str += `<li>已获得过:${get.translation(finished)}<br>`;
											str += '<li>锁定技.若你因〖昌命〗获得过〖放权〗〖空城〗〖贿生〗,则你的【闪】和【无懈可击】视为【酒】.';
											return str;
										},
									},
								},
								xinghan: {
									//audio:2,
									mod: {
										cardname(card, player) {
											if (player.countCards('h') == 1 && player.storage.changming) {
												var list = ['qiangwu', 'reguanxing', 'xinfu_tunan'];
												for (var i of list) {
													if (!player.storage.changming.includes(i)) return;
												}
												return 'gz_kefuzhongyuan';
											}
										},
									},
									init(player, skill) {
										player.markAuto('changming_current', ['qiangwu', 'reguanxing', 'xinfu_tunan']);
									},
									mark: true,
									intro: {
										name: '命运线:兴汉',
										content(storage, player) {
											var finished = [],
												unfinished = ['qiangwu', 'reguanxing', 'xinfu_tunan'];
											if (player.storage.changming) {
												for (var i = 0; i < unfinished.length; i++) {
													if (player.storage.changming.includes(unfinished[i])) {
														finished.push(unfinished[i]);
														unfinished.splice(i--, 1);
													}
												}
											}
											var str = '';
											if (unfinished.length) str += `<li>未获得:${get.translation(unfinished)}<br>`;
											if (finished.length) str += `<li>已获得过:${get.translation(finished)}<br>`;
											str += '<li>锁定技.若你因〖昌命〗获得过〖枪舞〗〖观星〗〖图南〗,且你的手牌数为1,则此牌的牌名视为【克复中原】.';
											return str;
										},
									},
								},
							},
						},
						changming: {
							audio: 'ext:命运线/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								var skills = player.getSkills(null, false, false).filter(function (i) {
									if (i == 'changming') return false;
									var info = get.info(i);
									return info && !info.charlotte && !get.is.locked(i);
								});
								if (player.hasSkill('xinliegong')) player.removeSkill('xinliegong');
								if (player.hasSkill('olpaoxiao')) player.removeSkill('olpaoxiao');
								if (player.hasSkill('fangquan')) player.removeSkill('fangquan');
								if (player.hasSkill('reguanxing')) player.removeSkill('reguanxing');
								if (player.hasSkill('kuanggu')) player.removeSkill('kuanggu');
								if (player.hasSkill('xinfu_zuilun')) player.removeSkill('xinfu_zuilun');
								if (player.hasSkill('qiangwu')) player.removeSkill('qiangwu');
								if (player.hasSkill('nzry_feijun')) player.removeSkill('nzry_feijun');
								if (player.hasSkill('benxi')) player.removeSkill('benxi');
								if (player.hasSkill('zhanjue')) player.removeSkill('zhanjue');
								if (player.hasSkill('oltiaoxin')) player.removeSkill('oltiaoxin');
								if (player.hasSkill('rexuanhuo')) player.removeSkill('rexuanhuo');
								if (player.hasSkill('guixiu')) player.removeSkill('guixiu');
								if (player.hasSkill('rende')) player.removeSkill('rende');
								if (player.hasSkill('new_rewusheng')) player.removeSkill('new_rewusheng');
								if (player.hasSkill('xinfu_tunan')) player.removeSkill('xinfu_tunan');
								if (player.hasSkill('kongcheng')) player.removeSkill('kongcheng');
								if (player.hasSkill('huisheng')) player.removeSkill('huisheng');
								//初始化技能库
								var list1 = ['myx_liushanyanhan_beifa', 'myx_liushanyanhan_fuming', 'myx_liushanyanhan_chengzhi', 'myx_liushanyanhan_qianlong', 'myx_liushanyanhan_skillanle', 'myx_liushanyanhan_xinghan'];
								var list2 = ['nzry_feijun', 'kuanggu', 'benxi', 'zhanjue', 'xinfu_zuilun', 'oltiaoxin', 'rexuanhuo', 'rende', 'guixiu', 'xinliegong', 'new_rewusheng', 'olpaoxiao', 'fangquan', 'kongcheng', 'huisheng', 'qiangwu', 'reguanxing', 'xinfu_tunan'];
								var list3 = [];
								if (!player.storage.changming_full) player.storage.changming_full = list2.slice(0);
								if (player.getStorage('changming_current').length == 0) {
									for (var i = 0; i < list1.length; i++) {
										if (player.hasSkill(list1[i])) {
											for (var j = 0; j < 3; j++) {
												list3.add(list2[i * 3 + j]);
											}
										}
									}
									if (!player.storage.changming_current) player.storage.changming_current = list3.slice(0);
								}
								var fullskills, currentskills;
								//决定抽选技能范围
								if (player.storage.changming_full && player.storage.changming_full.length) fullskills = player.storage.changming_full;
								else fullskills = list2.slice(0);
								if (player.storage.changming_current && player.storage.changming_current.length) currentskills = player.storage.changming_current;
								else currentskills = list3.slice(0);
								var skills = [];
								//在没有发动过其他非锁定技时抽选技能
								var evtx = event.getParent('phaseUse');
								if (
									currentskills.length &&
									!player.hasHistory('useSkill', function (evt) {
										if (evt.skill == 'changming' || evt.type != 'player' || !evt.sourceSkill) return false;
										var info1 = get.info(evt.skill);
										if (info1.charlotte) return false;
										var info = get.info(evt.sourceSkill);
										if (info.charlotte || get.is.locked(evt.skill)) return false;
										return evt.event.getParent('phaseUse') == evtx;
									})
								) {
									fullskills.randomSort();
									currentskills.randomSort();
									for (var i = 0; i < fullskills.length; i++) {
										for (var j = 0; j < currentskills.length; j++) {
											if (fullskills[i] != currentskills[j] || (i == fullskills.length - 1 && j == currentskills.length - 1)) {
												skills.add(fullskills.splice(i--, 1)[0]);
												skills.add(currentskills.splice(j--, 1)[0]);
												break;
											}
										}
										if (skills.length) break;
									}
								}
								//在已经发动过其他非锁定技时抽选技能
								else {
									skills.add(fullskills.randomRemove(2)[0]);
								}
								for (var i of skills) {
									player.addSkillLog(i);
								}
								player.markAuto('changming', skills);
							},
							ai: {
								order(item, player) {
									var evtx = _status.event.getParent('phaseUse');
									if (
										!player.hasHistory('useSkill', function (evt) {
											if (evt.skill == 'changming' || evt.type != 'player' || !evt.sourceSkill) return false;
											var info1 = get.info(evt.skill);
											if (info1.charlotte) return false;
											var info = get.info(evt.sourceSkill);
											if (info.charlotte || get.is.locked(evt.skill)) return false;
											return evt.event.getParent('phaseUse') == evtx;
										})
									)
										return 11;
									return 0.8;
								},
								result: {
									player: 1,
								},
							},
							group: 'changming_losehp',
							subSkill: {
								losehp: {
									trigger: {
										player: 'phaseUseEnd',
									},
									forced: true,
									filter(event, player) {
										return !player.hasHistory('useSkill', function (evt) {
											if (evt.skill != 'changming') return false;
											return evt.event.getParent('phaseUse') == event;
										});
									},
									content() {
										player.loseHp();
									},
								},
							},
						},
						//神曹睿
						ji_weiming: {
							trigger: {
								global: 'phaseBefore',
								player: 'enterGame',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (player.storage.ji_weiming) return false;
								if (event.name != 'phase') return true;
								if (game.phaseNumber == 0) return true;
							},
							content() {
								player.storage.ji_weiming = true;
								var skill = ['ji_weiming_zhuanquan', 'ji_weiming_xingtu', 'ji_weiming_weiye'].randomGet();
								player.addSkill(skill);
								game.log(player, '解锁了<span style="font-family: yuanli">曹魏命运线</span>:', `#g【${get.translation(skill)}】`);
							},
							derivation: ['songci', 'shanzhuan', 'qianlong', 'xingzuo', 'xinfu_lingren', 'huituo', 'caozhao', 'xinshanjia', 'rejieming'],
							subSkill: {
								zhuanquan: {
									trigger: { player: 'useCard' },
									forced: true,
									filter(event, player) {
										var num = event.card.number;
										if (!player.storage.ji_mingcha) return false;
										var list = ['songci', 'shanzhuan', 'qianlong'];
										for (var i of list) {
											if (!player.storage.ji_mingcha.includes(i)) return false;
										}
										return true;
									},
									content() {
										trigger.directHit.addArray(
											game.filterPlayer(function (current) {
												return current != player;
											})
										);
									},
									init(player, skill) {
										player.markAuto('ji_mingcha_current', ['songci', 'shanzhuan', 'qianlong']);
									},
									mark: true,
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											return false;
										},
									},
									intro: {
										name: '命运线:专权',
										content(storage, player) {
											var finished = [],
												unfinished = ['songci', 'shanzhuan', 'qianlong'];
											if (player.storage.ji_mingcha) {
												for (var i = 0; i < unfinished.length; i++) {
													if (player.storage.ji_mingcha.includes(unfinished[i])) {
														finished.push(unfinished[i]);
														unfinished.splice(i--, 1);
													}
												}
											}
											var str = '';
											if (unfinished.length) str += `<li>未获得:${get.translation(unfinished)}<br>`;
											if (finished.length) str += `<li>已获得过:${get.translation(finished)}<br>`;
											str += '<li>锁定技.若你获得过〖颂词〗〖擅专〗〖潜龙〗,则你的牌不可被响应.';
											return str;
										},
									},
								},
								xingtu: {
									trigger: { player: 'phaseDiscardAfter' },
									forced: true,
									filter(event, player) {
										if (!player.storage.ji_mingcha) return false;
										var list = ['xingzuo', 'xinfu_lingren', 'huituo'];
										for (var i of list) {
											if (!player.storage.ji_mingcha.includes(i)) return false;
										}
										return true;
									},
									content() {
										player.draw(2);
									},
									init(player, skill) {
										player.markAuto('ji_mingcha_current', ['xingzuo', 'xinfu_lingren', 'huituo']);
									},
									ai: {
										effect: {
											target(card) {
												if (get.type(card) == 'delay') return 'zerotarget';
											},
										},
									},
									mark: true,
									intro: {
										name: '命运线:兴土',
										content(storage, player) {
											var finished = [],
												unfinished = ['xingzuo', 'xinfu_lingren', 'huituo'];
											if (player.storage.ji_mingcha) {
												for (var i = 0; i < unfinished.length; i++) {
													if (player.storage.ji_mingcha.includes(unfinished[i])) {
														finished.push(unfinished[i]);
														unfinished.splice(i--, 1);
													}
												}
											}
											var str = '';
											if (unfinished.length) str += `<li>未获得:${get.translation(unfinished)}<br>`;
											if (finished.length) str += `<li>已获得过:${get.translation(finished)}<br>`;
											str += '<li>锁定技.若你获得过〖兴作〗〖凌人〗〖恢拓〗,回合结束阶段,你摸两张牌.';
											return str;
										},
									},
								},
								weiye: {
									mod: {
										cardname(card, player) {
											if (player.countCards('h') == 1 && player.storage.ji_mingcha) {
												var list = ['caozhao', 'xinshanjia', 'rejieming'];
												for (var i of list) {
													if (!player.storage.ji_mingcha.includes(i)) return;
												}
												return 'zhulu_card';
											}
										},
									},
									init(player, skill) {
										player.markAuto('ji_mingcha_current', ['caozhao', 'xinshanjia', 'rejieming']);
									},
									mark: true,
									intro: {
										name: '命运线:魏业',
										content(storage, player) {
											var finished = [],
												unfinished = ['caozhao', 'xinshanjia', 'rejieming'];
											if (player.storage.ji_mingcha) {
												for (var i = 0; i < unfinished.length; i++) {
													if (player.storage.ji_mingcha.includes(unfinished[i])) {
														finished.push(unfinished[i]);
														unfinished.splice(i--, 1);
													}
												}
											}
											var str = '';
											if (unfinished.length) str += `<li>未获得:${get.translation(unfinished)}<br>`;
											if (finished.length) str += `<li>已获得过:${get.translation(finished)}<br>`;
											str += '<li>锁定技.若你获得过〖草诏〗〖缮甲〗〖节命〗,且你的手牌数为1,则此牌的牌名视为【逐鹿天下】.';
											return str;
										},
									},
								},
							},
						},
						ji_mingcha: {
							audio: 'ext:命运线/audio:2',
							trigger: { player: 'phaseBegin' },
							charlotte: false,
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player.chooseCardTarget({
									position: 'he',
									filterCard: true,
									selectCard: 2,
									filterTarget(card, player, target) {
										return player != target;
									},
									ai1(card) {
										return 1;
									},
									ai2(target) {
										var att = get.attitude(_status.event.player, target);
										return att;
									},
									prompt: '请选择要明察的牌',
									forced: true,
								});
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.give(result.cards, target);
								}
								('step 3');
								var skills = player.getSkills(null, false, false).filter(function (i) {
									if (i == 'ji_mingcha') return false;
									var info = get.info(i);
									return info && !info.charlotte && !get.is.locked(i);
								});
								if (player.hasSkill('huituo')) player.removeSkill('huituo');
								if (player.hasSkill('qianlong')) player.removeSkill('qianlong');
								if (player.hasSkill('rejieming')) player.removeSkill('rejieming');
								var skills = [];
								var n = [1, 2, 3].randomGet();
								if (n == 1) skills.add('songci');
								if (n == 2) skills.add('xingzuo');
								if (n == 3) skills.add('caozhao');
								var m = [1, 2, 3].randomGet();
								if (m == 1) skills.add('shanzhuan');
								if (m == 2) skills.add('xinfu_lingren');
								if (m == 3) skills.add('xinshanjia');
								for (var i of skills) {
									player.addSkillLog(i);
								}
								player.markAuto('ji_mingcha', skills);
							},
							ai: {
								order(item, player) {
									var evtx = _status.event.getParent('phaseUse');
									if (
										!player.hasHistory('useSkill', function (evt) {
											if (evt.skill == 'ji_mingcha' || evt.type != 'player' || !evt.sourceSkill) return false;
											var info1 = get.info(evt.skill);
											if (info1.charlotte) return false;
											var info = get.info(evt.sourceSkill);
											if (info.charlotte || get.is.locked(evt.skill)) return false;
											return evt.event.getParent('phaseUse') == evtx;
										})
									)
										return 11;
									return 0.9;
								},
								threaten: 1.5,
								result: { player: 2 },
							},
							group: 'ji_mingcha_kaituo',
							subSkill: {
								kaituo: {
									audio: 'ext:命运线/audio:2',
									trigger: { player: 'phaseAfter' },
									charlotte: true,
									content() {
										var skills = player.getSkills(null, false, false).filter(function (i) {
											if (i == 'ji_mingcha') return false;
											var info = get.info(i);
											return info && !info.charlotte && !get.is.locked(i);
										});
										var skills = [];
										if (player.hasSkill('songci')) player.removeSkill('songci');
										if (player.hasSkill('xingzuo')) player.removeSkill('xingzuo');
										if (player.hasSkill('caozhao')) player.removeSkill('caozhao');
										if (player.hasSkill('shanzhuan')) player.removeSkill('shanzhuan');
										if (player.hasSkill('xinfu_lingren')) player.removeSkill('xinfu_lingren');
										if (player.hasSkill('xinshanjia')) player.removeSkill('xinshanjia');
										var l = [1, 2, 3].randomGet();
										if (l == 1) skills.add('rejieming');
										if (l == 2) skills.add('qianlong');
										if (l == 3) skills.add('huituo');
										for (var i of skills) {
											player.addSkillLog(i);
										}
										player.markAuto('ji_mingcha', skills);
									},
									ai: {
										order: 0.8,
										result: { player: 1.5 },
									},
								},
							},
						},
						//其他技能
						//造成或受到伤害+1
						ao_zhan: {
							trigger: { player: 'damageBegin3', source: 'damageBegin1' },
							forced: true,
							filter(event, player) {
								return 1;
							},
							content() {
								trigger.num++;
							},
							ai: { presha: true },
						},
						//回合结束摸2扣1
						xun_guo: {
							trigger: { player: 'phaseJieshuBegin' },
							locked(skill, player) {
								if (!player || !player.storage.myx_xunguo) return true;
								return false;
							},
							forced: true,
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player.loseHp();
							},
						},
						//造成1伤害摸1
						xu_han: {
							trigger: { source: 'damageSource' },
							forced: true,
							charlotte: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								event.num = Math.min(trigger.num, 9);
								player.draw(trigger.num);
							},
						},
						//活动技能
						myx_cskmt: {
							trigger: { global: 'gameStart' },
							fixed: true,
							popup: false,
							silent: true,
							forced: true,
							charlotte: true,
							superCharlotte: true,
							_priority: 999,
							mode: ['boss'], //QQQ
							init() {
								game.removeGlobalSkill('boss_shenwuzaishi');
								game.removeGlobalSkill('TheDayIBecomeAGod');
								game.removeGlobalSkill('thedayibecomeagod');
								_status.shidianyanluo_level = 0;
								lib.inpile.remove('lebu');
								lib.inpile.remove('bingliang');
								lib.inpile.remove('muniu');
								lib.inpile.remove('zhuge');
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (node.name == 'lebu') {
										node.classList.remove('fullskin');
										node.init([node.suit, node.number, 'tao']);
									}
								}
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (node.name == 'bingliang') {
										node.classList.remove('fullskin');
										node.init([node.suit, node.number, 'jiu']);
									}
								}
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (node.name == 'muniu') {
										node.classList.remove('fullskin');
										node.init([node.suit, node.number, 'wuzhong']);
									}
								}
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (node.name == 'zhuge') {
										node.classList.remove('fullskin');
										node.init([node.suit, node.number, 'myx_boss_liannu']);
									}
								}
								_status.additionalReward = function () {
									return 500;
								};
							},
							content() {
								'step 0';
								game.bossinfo.chongzheng = 999;
								player.smoothAvatar();
								('step 1');
								if (game.me != game.boss) {
									game.me
										.chooseControl('先锋', '中坚', '大将')
										.set('prompt', '请选择挑战的坐位')
										.set('ai', function (target) {
											return '先锋';
										});
								} else {
									event.goto(3);
								}
								('step 2');
								('step 3');
								var list = game.filterPlayer((current) => current != player && current.isEnemiesOf(game.boss) && current.name != 'myx_cskmt_mitan').sortBySeat();
								for (var i of list) {
									i.addSkill('myx_cskmt_yinni');
								}
								('step 4');
								game.me
									.chooseControl('魏国', '吴国', '蜀国')
									.set('prompt', '请选择挑战的势力')
									.set('ai', function (target) {
										return '蜀国';
									});
								('step 5');
								var shili = result.control;
								if (shili == '魏国') {
									var i = [1, 2, 3, 4, 5].randomGet();
									if (i == 1) {
										player.init('myx_boss_cskmtcc');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtcp');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtcr');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtcm');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtcs');
										}
									} else if (i == 2) {
										player.init('myx_boss_cskmtcs');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtcc');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtcr');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtcm');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtcp');
										}
									} else if (i == 3) {
										player.init('myx_boss_cskmtcp');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtcc');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtcr');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtcm');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtcs');
										}
									} else if (i == 4) {
										player.init('myx_boss_cskmtcr');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtcc');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtcp');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtcm');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtcs');
										}
									} else if (i == 5) {
										player.init('myx_boss_cskmtcm');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtcc');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtcr');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtcp');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtcs');
										}
									}
								} else if (shili == '吴国') {
									var i = [1, 2, 3, 4, 5].randomGet();
									if (i == 1) {
										player.init('myx_boss_cskmtsq');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtsx');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtsc');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtsl');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtsh');
										}
									} else if (i == 2) {
										player.init('myx_boss_cskmtsc');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtsq');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtsx');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtsl');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtsh');
										}
									} else if (i == 3) {
										player.init('myx_boss_cskmtsx');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtsq');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtsc');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtsl');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtsh');
										}
									} else if (i == 4) {
										player.init('myx_boss_cskmtsl');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtsq');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtsc');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtsx');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtsh');
										}
									} else if (i == 5) {
										player.init('myx_boss_cskmtsh');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtsq');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtsc');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtsx');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtsl');
										}
									}
								} else {
									var i = [1, 2, 3, 4, 5].randomGet();
									if (i == 1) {
										player.init('myx_boss_cskmtlb');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtls');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtlc');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtlf');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtly');
										}
									} else if (i == 2) {
										player.init('myx_boss_cskmtlc');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtlb');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtls');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtlf');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtly');
										}
									} else if (i == 3) {
										player.init('myx_boss_cskmtls');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtlb');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtlc');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtlf');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtly');
										}
									} else if (i == 4) {
										player.init('myx_boss_cskmtlf');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtlb');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtls');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtlc');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtly');
										}
									} else if (i == 5) {
										player.init('myx_boss_cskmtly');
										var j = [1, 2, 3, 4].randomGet();
										if (j == 1) {
											player.addFellow('myx_boss_cskmtlb');
										} else if (j == 2) {
											player.addFellow('myx_boss_cskmtls');
										} else if (j == 3) {
											player.addFellow('myx_boss_cskmtlc');
										} else if (j == 4) {
											player.addFellow('myx_boss_cskmtlf');
										}
									}
								}
								_status.noswap = true;
							},
							group: 'myx_xuanzejiangling',
						},
						myx_cskmt_jieshao: { nobracket: true },
						myx_cskmt_bossbuff: {
							forced: true,
							superCharlotte: true,
							trigger: {
								player: 'dieBegin',
							},
							forced: true,
							forceDie: true,
							mode: ['boss'], //QQQ
							filter(event, player) {
								event.ren = [];
								game.countPlayer(function (current) {
									if (current.identity != 'cai' && current != player && current.isAlive()) {
										event.ren.push(current);
									}
								});
								return player == game.boss && event.ren.length;
							},
							content() {
								game.boss = trigger.ren.randomGet();
								event.finish();
							},
							group: ['myx_cskmt_bossbuff_zhuzhan'],
							subSkill: {
								zhuzhan: {
									fixed: true,
									silent: true,
									forced: true,
									popup: false,
									charlotte: true,
									superCharlotte: true,
									trigger: {
										global: 'roundStart',
									},
									filter(event, player) {
										return game.roundNumber == 2 && player == game.boss;
									},
									content() {
										var zhuzhan = game.addPlayerQ('wanniangongzhu');
										zhuzhan.draw(4);
										zhuzhan.chat('抱歉,我来晚了');
										zhuzhan.setIdentity('cai');
										zhuzhan.identity = 'cai';
										zhuzhan.side = false;
										zhuzhan.isEnemiesOf(game.boss);
									},
								},
							},
						},
						myx_cskmt_yinni: {
							forbid: ['identity'],
							enable: 'phaseUse',
							_priority: 35,
							// filter:function(event,player){
							// 	return player.storage.myx_mitanjilu=false;
							// },
							content() {
								if (!player.storage.myx_mitanjilu) player.storage.myx_mitanjilu = player.name;
								player.reinit(player.name, 'myx_cskmt_mitan');
								player.awakenSkill('myx_cskmt_yinni');
							},
							ai: {
								order: 8,
								result: {
									player: 6,
								},
							},
						},
						myx_mitan_baolu: {
							forbid: ['identity'],
							forced: true,
							_priority: 100,
							charlotte: true,
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.source && event.source.isEnemiesOf(player);
							},
							content() {
								var i = Math.random();
								if (i < 0.75 && player.storage.myx_mitanjilu.length) {
									player.reinit(player.name, player.storage.myx_mitanjilu);
								} else {
									player.draw();
								}
							},
						},
						myx_mitan_zhibi: {
							forbid: ['identity'],
							forced: true,
							enable: 'phaseUse',
							_priority: 19,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('myx_mitan_zhibi'), function (card, player, target) {
										return target.isEnemiesOf(player);
									})
									.set('ai', function (target) {
										return -get.attitude(player, target);
									});
								('step 1');
								if (result.targets?.length) {
									event.target = result.targets[0];
									event.target.addTempSkill('myx_mitan_zhibi_chanyuan');
									player.awakenSkill('myx_mitan_zhibi');
								} else event.finish();
							},
							subSkill: {
								chanyuan: {
									init(player, skill) {
										player.addSkillBlocker(skill);
									},
									onremove(player, skill) {
										player.removeSkillBlocker(skill);
									},
									charlotte: true,
									skillBlocker(skill, player) {
										return skill != 'myx_mitan_zhibi_chanyuan' && !lib.skill[skill].superCharlotte;
									},
									mark: true,
									intro: {
										content: '当前处于【知己知彼】状态,其他技能失效',
									},
								},
							},
							ai: {
								ignoreSkill: true,
								order: 7.5,
								result: {
									player: 6,
								},
								threaten: 1.2,
							},
						},
						myx_mitan_chuyi: {
							forbid: ['identity'],
							forced: true,
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								var x = Math.floor(Math.random() * 60) + 30;
								var y = Math.floor(Math.random() * 100);
								return y <= 60 && event.card && (event.card.name == 'tao' || event.card.name == 'jiu');
							},
							_priority: 5,
							content() {
								var list = [1, 2].randomGet();
								player.draw(list);
							},
						},
						myx_mitan_anqi: {
							forbid: ['identity'],
							forced: true,
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								var x = Math.floor(Math.random() * 60) + 30;
								var y = Math.floor(Math.random() * 100);
								return x < y && !event.player.inRange(player) && event.player.countCards('he') > 0;
							},
							_priority: 5,
							content() {
								player.discardPlayerCard(1, trigger.player, true);
							},
						},
						myx_mitan_duanzao: {
							forbid: ['identity'],
							forced: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								var x = Math.floor(Math.random() * 60) + 30;
								var y = Math.floor(Math.random() * 100);
								return y <= x;
							},
							_priority: 5,
							content() {
								var i = 0;
								var list = [];
								while (i++ < 1) {
									var card = get.cardPile(function (card) {
										if (get.type(card) != 'equip') return false;
										return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
									});
									if (card) list.push(card);
								}
								if (!list.length) {
									event.finish();
									return;
								}
								event.list = list;
								player.gain(event.list, 'gain2');
							},
						},
						myx_mitan_neigong: {
							forbid: ['identity'],
							forced: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								var x = Math.floor(Math.random() * 60) + 30;
								var y = Math.floor(Math.random() * 100);
								return y <= x;
							},
							content() {
								player.gainMaxHp();
							},
						},
						myx_boss_zhiba: {
							audio: 'ext:命运线/audio:2',
							forced: true,
							charlotte: true,
							trigger: {
								player: ['gainMaxHpEnd', 'loseMaxHpEnd'],
							},
							forced: true,
							mode: ['boss'], //QQQ
							content() {
								game.countPlayer(function (current) {
									if (current.isFriendsOf(game.boss)) current.draw();
								});
								player.recover();
							},
						},
						myx_boss_chouhai: {
							audio: 'ext:命运线/audio:2',
							trigger: {
								player: 'damageBegin3',
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.countCards('h') == 0;
							},
							content() {
								trigger.num++;
								player.gainMaxHp();
								player.draw();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha' && target.countCards('h') == 0) return [1, -2];
									},
								},
							},
							group: 'myx_boss_chouhai_mo',
							subSkill: {
								mo: {
									trigger: {
										player: 'damageBegin3',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.card && event.card.name != 'sha';
									},
									usable: 2,
									content() {
										var momo = player.maxHp - player.hp;
										player.gainMaxHp();
										player.draw(Math.min(6, momo));
									},
								},
							},
						},
						myx_boss_guiming: {
							forced: true,
							charlotte: true,
							popup: false,
							trigger: {
								player: 'phaseDrawBegin',
							},
							content() {
								var num = 0;
								game.countPlayer(function (current) {
									if (current.isMaxHp()) num++;
								});
								if (num > 0) player.draw(num);
							},
						},
						myx_boss_zhaofu: {
							audio: 'ext:命运线/audio:2',
							trigger: { player: 'damageBegin4' },
							forced: true,
							usable: 2,
							filter(event, player) {
								return true;
							},
							mode: ['boss'], //QQQ
							content() {
								if (trigger.num > 2) trigger.num = 2;
								game.countPlayer(function (current) {
									if (current.isEnemiesOf(game.boss) && current.countCards('he') > 0) {
										current.discard(current.getCards('he').randomGet());
										player.draw();
									}
								});
							},
							ai: {
								filterDamage: true,
								maixie: true,
							},
						},
						myx_boss_lijun: {
							audio: 'ext:命运线/audio:2',
							trigger: {
								global: 'useCardAfter',
							},
							usable: 3,
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								if (!event.player.isPhaseUsing()) return false;
								if (
									!game.hasPlayer(function (target) {
										return player != target;
									})
								)
									return false;
								return true;
							},
							forced: true,
							charlotte: true,
							mode: ['boss'], //QQQ
							content() {
								game.countPlayer(function (current) {
									if (current.isFriendsOf(game.boss)) {
										current.draw();
									}
								});
							},
							ai: {
								threaten: 1.6,
								effect: {
									target(card, player, target) {
										if (card.name != 'sha') return;
										var min = 1;
										var friend = get.attitude(player, target) > 0;
										var vcard = { name: 'shacopy', nature: card.nature, suit: card.suit };
										var players = game.filterPlayer();
										for (var i of players) {
											if (player != i && get.attitude(target, i) < 0 && target.canUse(card, i)) {
												if (!friend) return 0.2;
												if (get.effect(i, vcard, player, player) > 0) {
													min = 0.2;
												}
											}
										}
										return min;
									},
								},
							},
						},
						myx_boss_jiuyuan: {
							audio: 'ext:命运线/audio:2',
							forced: true,
							charlotte: true,
							usable: 2,
							trigger: {
								global: 'recoverBegin',
							},
							filter(event, player) {
								return player != event.player && event.player.isPhaseUsing();
							},
							mode: ['boss'], //QQQ
							content() {
								player.recover();
								player.draw();
								if (trigger.player.isEnemiesOf(game.boss)) {
									trigger.cancel();
								}
							},
						},
						myx_boss_qintao: {
							shaRelated: true,
							audio: 'ext:命运线/audio:2',
							trigger: { player: 'useCardAfter' },
							filter(event, player) {
								return (
									event.card &&
									event.card.name == 'sha' &&
									!player.getHistory('sourceDamage', function (evt) {
										return evt.card == event.card;
									}).length &&
									event.targets.length == 1
								);
							},
							check(event, player) {
								return player.hp > 2;
							},
							logTarget: 'targets',
							content() {
								'step 0';
								player.loseHp();
								if (!trigger.targets[0].countCards('he')) result.index = 0;
								else
									trigger.targets[0]
										.chooseControl()
										.set('choiceList', [`${('失去1点体力', '令' + get.translation(player))}弃置你两张牌`])
										.set('ai', function () {
											if (trigger.targets[0].hp > 2 && trigger.targets[0].countCards('he') < 2) return 0;
											return 1;
										});
								('step 1');
								if (result.index == 0) trigger.targets[0].loseHp();
								else player.discardPlayerCard(trigger.targets[0], 'he', 2, true);
							},
						},
						myx_boss_wenhui: {
							audio: 'ext:命运线/audio:2',
							mod: {
								cardUsable(card, player, target) {
									if (!card.cards || !(game.online ? player == _status.currentPhase : player.isPhaseUsing())) return;
									for (var i of card.cards) {
										if (i.hasGaintag('myx_boss_wenhui')) return Infinity;
									}
								},
							},
							trigger: { global: 'loseAfter' },
							forced: true,
							filter(event, player) {
								//var evt=event.parent;
								//if(player!=_status.currentPhase||evt.player!=player||event.type!='discard'||player==event.player) return false;
								if (player != _status.currentPhase || event.type != 'discard' || player == event.player) return false;
								return event.cards2 && event.cards2.filterInD('d').length;
							},
							content() {
								player.addTempSkill('myx_boss_wenhui_keep');
								var cards = [];
								for (var i = 0; i < trigger.cards2.filterInD('d').length; i++) {
									var card = get.cardPile2(function (card) {
										return !cards.includes(card) && get.type2(card, false) == get.type2(trigger.cards2[i], false);
									});
									if (card) cards.push(card);
								}
								player.gain(cards, 'gain2').gaintag.add('myx_boss_wenhui');
								player.draw(trigger.cards2.filterInD('d').length - cards.length).gaintag = ['myx_boss_wenhui'];
							},
							subSkill: {
								keep: {
									charlotte: true,
									onremove(player) {
										player.removeGaintag('myx_boss_wenhui');
									},
									mod: {
										ignoredHandcard(card, player) {
											if (card.hasGaintag('myx_boss_wenhui')) return true;
										},
										cardDiscardable(card, player, name) {
											if (name == 'phaseDiscard' && card.hasGaintag('myx_boss_wenhui')) return false;
										},
									},
								},
							},
						},
						myx_boss_xianggong: {
							audio: 'ext:命运线/audio:2',
							forced: true,
							charlotte: true,
							trigger: { player: 'damageEnd' },
							filter(event, player) {
								return event.source && event.source.countCards('he');
							},
							logTarget: 'source',
							content() {
								'step 0';
								var num = Math.min(player.getDamagedHp(), trigger.source.countCards('he'), 6);
								trigger.source.chooseToDiscard(num, 'he', true);
								('step 1');
								trigger.source.draw();
							},
						},
						myx_boss_xingshuai: {
							audio: 'ext:命运线/audio:2',
							forced: true,
							charlotte: true,
							trigger: { player: ['dying', 'dyingAfter', 'recoverEnd'] },
							content() {
								var target = player.getEnemies().randomGet();
								target.loseHp();
							},
						},
						myx_boss_songwei: {
							audio: 'ext:命运线/audio:2',
							trigger: {
								global: 'judgeAfter',
							},
							forced: true,
							filter(event, player) {
								return event.player.isEnemiesOf(player) && event.player.countCards('he') > 0;
							},
							content() {
								player.gainPlayerCard('he', true, trigger.player);
							},
						},
						myx_boss_taiwang: {
							audio: 'ext:命运线/audio:2',
							forced: true,
							charlotte: true,
							_priority: 30,
							usable: 1,
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								return event.num > 1;
							},
							content() {
								player.gainMaxHp(1);
								player.recover(1);
								player.draw(trigger.num);
							},
						},
						myx_boss_hujia: {
							audio: 'ext:命运线/audio:2',
							forced: true,
							charlotte: true,
							trigger: {
								player: ['chooseToRespondBefore', 'chooseToUseBefore'],
							},
							filter(event, player) {
								if (event.responded) return false;
								if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
								return game.hasPlayer(function (current) {
									return current != player;
								});
							},
							async content(event, trigger, player) {
								//QQQ
								player.draw();
								const target = _status.currentPhase;
								if (target) {
									//QQQ
									event.card1 = target.getCards('he').randomGet();
									target.discard(event.card1);
									if (event.card1.name == 'shan') {
										trigger.result = { bool: true, card: { name: 'shan' }, cards: [] };
										trigger.responded = true;
										trigger.animate = false;
									}
								}
							},
							ai: {
								respondShan: true,
								order: 20,
							},
						},
						//仲夜观星
						myx_zygx_qimen4: {
							forbid: ['identity'],
							enable: 'phaseUse',
							charlotte: true,
							filterTarget(card, player, target) {
								return target.isEnemiesOf(player);
							},
							content() {
								'step 0';
								player
									.chooseToDiscard('he', { name: 'sha', number: '6' }, '弃置一张数字为6的【杀】,将星象切换至下个星象,令该角色失去1点体力.')
									.set('ai', function (card) {
										return 8 - get.value(card);
									})
									('step 1');
								if (result.bool) {
									event.target.loseHp();
									var list = game.filterPlayer((current) => current != player && (current.hasSkill('myx_zygx2021_nangong') || current.hasSkill('myx_zygx2021_donggong') || current.hasSkill('myx_zygx2021_xigong') || current.hasSkill('myx_zygx2021_beigong'))).sortBySeat();
									for (var i of list) {
										if (i.hasSkill('myx_zygx2021_nangong')) {
											if (!i.hasSkill('myx_zygx2021_xigong')) i.addSkill('myx_zygx2021_xigong');
											i.removeSkill('myx_zygx2021_nangong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/xg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_xigong')) {
											if (!i.hasSkill('myx_zygx2021_beigong')) i.addSkill('myx_zygx2021_beigong');
											i.removeSkill('myx_zygx2021_xigong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/bg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_beigong')) {
											if (!i.hasSkill('myx_zygx2021_donggong')) i.addSkill('myx_zygx2021_donggong');
											i.removeSkill('myx_zygx2021_beigong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/dg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_donggong')) {
											if (!i.hasSkill('myx_zygx2021_nangong')) i.addSkill('myx_zygx2021_nangong');
											i.removeSkill('myx_zygx2021_donggong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/ng.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										}
										var k = [1, 2, 3].randomGet();
										if (k == 1) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen4')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen2');
												j.removeSkill('myx_zygx_qimen4');
											}
										} else if (k == 2) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen4')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen3');
												j.removeSkill('myx_zygx_qimen4');
											}
										} else if (k == 3) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen4')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen');
												j.removeSkill('myx_zygx_qimen4');
											}
										}
									}
								}
							},
						},
						myx_zygx_qimen3: {
							forbid: ['identity'],
							enable: 'phaseUse',
							charlotte: true,
							filterTarget(card, player, target) {
								return target.isEnemiesOf(player);
							},
							content() {
								'step 0';
								player
									.chooseToDiscard('he', { suit: 'diamond', name: 'huogong' }, '弃置一张♦️️【火攻】,将星象切换至下个星象,令该角色失去1点体力.')
									.set('ai', function (card) {
										return 8 - get.value(card);
									})
									('step 1');
								if (result.bool) {
									event.target.loseHp();
									var list = game.filterPlayer((current) => current != player && (current.hasSkill('myx_zygx2021_nangong') || current.hasSkill('myx_zygx2021_donggong') || current.hasSkill('myx_zygx2021_xigong') || current.hasSkill('myx_zygx2021_beigong'))).sortBySeat();
									for (var i of list) {
										if (i.hasSkill('myx_zygx2021_nangong')) {
											if (!i.hasSkill('myx_zygx2021_xigong')) i.addSkill('myx_zygx2021_xigong');
											i.removeSkill('myx_zygx2021_nangong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/xg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_xigong')) {
											if (!i.hasSkill('myx_zygx2021_beigong')) i.addSkill('myx_zygx2021_beigong');
											i.removeSkill('myx_zygx2021_xigong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/bg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_beigong')) {
											if (!i.hasSkill('myx_zygx2021_donggong')) i.addSkill('myx_zygx2021_donggong');
											i.removeSkill('myx_zygx2021_beigong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/dg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_donggong')) {
											if (!i.hasSkill('myx_zygx2021_nangong')) i.addSkill('myx_zygx2021_nangong');
											i.removeSkill('myx_zygx2021_donggong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/ng.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										}
										var k = [1, 2, 3].randomGet();
										if (k == 1) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen3')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen2');
												j.removeSkill('myx_zygx_qimen3');
											}
										} else if (k == 2) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen3')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen');
												j.removeSkill('myx_zygx_qimen3');
											}
										} else if (k == 3) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen3')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen4');
												j.removeSkill('myx_zygx_qimen3');
											}
										}
									}
								}
							},
						},
						myx_zygx_qimen2: {
							forbid: ['identity'],
							enable: 'phaseUse',
							charlotte: true,
							filterTarget(card, player, target) {
								return target.isEnemiesOf(player);
							},
							content() {
								'step 0';
								player
									.chooseToDiscard('he', { suit: 'heart', name: 'shan' }, '弃置一张♥️️【闪】,将星象切换至下个星象,令该角色失去1点体力.')
									.set('ai', function (card) {
										return 8 - get.value(card);
									})
									('step 1');
								if (result.bool) {
									event.target.loseHp();
									var list = game.filterPlayer((current) => current != player && (current.hasSkill('myx_zygx2021_nangong') || current.hasSkill('myx_zygx2021_donggong') || current.hasSkill('myx_zygx2021_xigong') || current.hasSkill('myx_zygx2021_beigong'))).sortBySeat();
									for (var i of list) {
										if (i.hasSkill('myx_zygx2021_nangong')) {
											if (!i.hasSkill('myx_zygx2021_xigong')) i.addSkill('myx_zygx2021_xigong');
											i.removeSkill('myx_zygx2021_nangong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/xg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_xigong')) {
											if (!i.hasSkill('myx_zygx2021_beigong')) i.addSkill('myx_zygx2021_beigong');
											i.removeSkill('myx_zygx2021_xigong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/bg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_beigong')) {
											if (!i.hasSkill('myx_zygx2021_donggong')) i.addSkill('myx_zygx2021_donggong');
											i.removeSkill('myx_zygx2021_beigong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/dg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_donggong')) {
											if (!i.hasSkill('myx_zygx2021_nangong')) i.addSkill('myx_zygx2021_nangong');
											i.removeSkill('myx_zygx2021_donggong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/ng.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										}
										var k = [1, 2, 3].randomGet();
										if (k == 1) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen2')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen');
												j.removeSkill('myx_zygx_qimen2');
											}
										} else if (k == 2) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen2')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen3');
												j.removeSkill('myx_zygx_qimen2');
											}
										} else if (k == 3) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen2')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen4');
												j.removeSkill('myx_zygx_qimen2');
											}
										}
									}
								}
							},
						},
						myx_zygx_qimen: {
							forbid: ['identity'],
							enable: 'phaseUse',
							charlotte: true,
							filterTarget(card, player, target) {
								return target.isEnemiesOf(player);
							},
							content() {
								'step 0';
								player
									.chooseToDiscard('he', { suit: 'club', name: 'sha' }, '弃置一张♣️️【杀】,将星象切换至下个星象,令该角色失去1点体力.')
									.set('ai', function (card) {
										return 8 - get.value(card);
									})
									('step 1');
								if (result.bool) {
									event.target.loseHp();
									var list = game.filterPlayer((current) => current != player && (current.hasSkill('myx_zygx2021_nangong') || current.hasSkill('myx_zygx2021_donggong') || current.hasSkill('myx_zygx2021_xigong') || current.hasSkill('myx_zygx2021_beigong'))).sortBySeat();
									for (var i of list) {
										if (i.hasSkill('myx_zygx2021_nangong')) {
											if (!i.hasSkill('myx_zygx2021_xigong')) i.addSkill('myx_zygx2021_xigong');
											i.removeSkill('myx_zygx2021_nangong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/xg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_xigong')) {
											if (!i.hasSkill('myx_zygx2021_beigong')) i.addSkill('myx_zygx2021_beigong');
											i.removeSkill('myx_zygx2021_xigong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/bg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_beigong')) {
											if (!i.hasSkill('myx_zygx2021_donggong')) i.addSkill('myx_zygx2021_donggong');
											i.removeSkill('myx_zygx2021_beigong');
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/dg.jpg';
											head.setAttribute('id', 'xxt');
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										} else if (i.hasSkill('myx_zygx2021_donggong')) {
											if (!i.hasSkill('myx_zygx2021_nangong')) i.addSkill('myx_zygx2021_nangong');
											i.removeSkill('myx_zygx2021_donggong');
											//通过搜索父节点id删除div
											var img = document.getElementById('xxt');
											img.parentNode.removeChild(img);
											var head = ui.create.node('img');
											head.src = 'extension/命运线/xingxiu/ng.jpg';
											head.setAttribute('id', 'xxt'); //给div设置id
											head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
											document.body.appendChild(head);
										}
										var k = [1, 2, 3].randomGet();
										if (k == 1) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen2');
												j.removeSkill('myx_zygx_qimen');
											}
										} else if (k == 2) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen3');
												j.removeSkill('myx_zygx_qimen');
											}
										} else if (k == 3) {
											var list = game.filterPlayer((current) => current.hasSkill('myx_zygx_qimen')).sortBySeat();
											for (var j of list) {
												j.addSkill('myx_zygx_qimen4');
												j.removeSkill('myx_zygx_qimen');
											}
										}
									}
								}
							},
						},
						myx_boss_xingxiu_baiyin: {
							forbid: ['identity'],
							trigger: { player: 'damageBegin4' },
							forced: true,
							filter(event, player) {
								if (event.num <= 2) return false;
								return true;
							},
							content() {
								trigger.num = 2;
							},
							ai: {
								filterDamage: true,
							},
							mod: {
								targetEnabled(card, player, target) {
									if (get.type(card) == 'delay') {
										return false;
									}
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 1;
								},
							},
							group: ['myx_boss_xingxiu_baiyin_kaiju', 'myx_boss_xingxiu_baiyin_mopai', 'myx_boss_xingxiu_baiyin_momo'],
							subSkill: {
								kaiju: {
									forced: true,
									charlotte: true,
									popup: false,
									trigger: {
										global: 'phaseBefore',
										player: 'enterGame',
									},
									filter(event, player) {
										return game.phaseNumber == 0;
									},
									delay: false,
									content() {
										var list = game.filterPlayer((current) => current != player && current.isEnemiesOf(player) && !current.hasSkill('myx_zygx_qimen')).sortBySeat();
										for (var i of list) {
											i.addSkill('myx_zygx_qimen');
										}
									},
								},
								mopai: {
									trigger: {
										player: 'phaseDrawBegin2',
									},
									charlotte: true,
									forced: true,
									popup: false,
									forced: true,
									filter(event, player) {
										return !event.numFixed;
									},
									content() {
										trigger.num += 2;
									},
								},
								momo: {
									trigger: {
										global: 'phaseJieshuEnd',
									},
									filter(event, player) {
										return !player.isMaxHandcard();
									},
									charlotte: true,
									forced: true,
									popup: false,
									content() {
										player.draw();
									},
								},
							},
						},
						myx_zygx2021_nangong: {
							trigger: {
								global: 'damageBegin1',
							},
							filter(event, player) {
								return event.num && _status.currentPhase == event.source && (event.nature == 'thunder' || event.nature == 'fire') && !event.source.hasSkill('myx_zygx2021_nangong_jinyan');
							},
							forced: true,
							charlotte: true,
							_priority: 1,
							mark: true,
							intro: {
								name: '南宫',
								content: '锁定技,出牌阶段,你首次造成的属性伤害+2.',
							},
							content() {
								trigger.num++;
								trigger.source.addTempSkill('myx_zygx2021_nangong_jinyan');
							},
							subSkill: {
								jinyan: {
									charlotte: true,
									popup: false,
									forced: true,
								},
							},
						},
						myx_zhongyeguanxing_xingxiang: {
							forbid: ['identity'],
							forced: true,
							charlotte: true,
							forced: true,
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								if (game.roundNumber == 1) return false;
								return true;
							},
							content() {
								if (player.hasSkill('myx_zygx2021_nangong')) {
									if (!player.hasSkill('myx_zygx2021_xigong')) player.addSkill('myx_zygx2021_xigong');
									player.removeSkill('myx_zygx2021_nangong');
									var img = document.getElementById('xxt');
									img.parentNode.removeChild(img);
									var head = ui.create.node('img');
									head.src = 'extension/命运线/xingxiu/xg.jpg';
									head.setAttribute('id', 'xxt');
									head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
									document.body.appendChild(head);
								} else if (player.hasSkill('myx_zygx2021_xigong')) {
									if (!player.hasSkill('myx_zygx2021_beigong')) player.addSkill('myx_zygx2021_beigong');
									player.removeSkill('myx_zygx2021_xigong');
									var img = document.getElementById('xxt');
									img.parentNode.removeChild(img);
									var head = ui.create.node('img');
									head.src = 'extension/命运线/xingxiu/bg.jpg';
									head.setAttribute('id', 'xxt');
									head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
									document.body.appendChild(head);
								} else if (player.hasSkill('myx_zygx2021_beigong')) {
									if (!player.hasSkill('myx_zygx2021_donggong')) player.addSkill('myx_zygx2021_donggong');
									player.removeSkill('myx_zygx2021_beigong');
									var img = document.getElementById('xxt');
									img.parentNode.removeChild(img);
									var head = ui.create.node('img');
									head.src = 'extension/命运线/xingxiu/dg.jpg';
									head.setAttribute('id', 'xxt');
									head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
									document.body.appendChild(head);
								} else if (player.hasSkill('myx_zygx2021_donggong')) {
									if (!player.hasSkill('myx_zygx2021_nangong')) player.addSkill('myx_zygx2021_nangong');
									player.removeSkill('myx_zygx2021_donggong');
									var img = document.getElementById('xxt');
									img.parentNode.removeChild(img);
									var head = ui.create.node('img');
									head.src = 'extension/命运线/xingxiu/ng.jpg';
									head.setAttribute('id', 'xxt');
									head.style.cssText = ' --w: 800px;--h: 200px;width: var(--w);height: var(--h);left:230px;top:200px;display:block;position:absolute;visibility:visible;z-index:1';
									document.body.appendChild(head);
								}
							},
						},
						myx_zygx2021_xigong: {
							trigger: {
								global: 'damageBegin1',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.num && _status.currentPhase == event.source && !event.card.nature && !event.source.hasSkill('myx_zygx2021_xigong_jinyan');
							},
							forced: true,
							charlotte: true,
							_priority: 1,
							content() {
								trigger.num++;
								trigger.source.addTempSkill('myx_zygx2021_xigong_jinyan');
							},
							mark: true,
							intro: {
								name: '西宫',
								content: '锁定技,出牌阶段,你的第一张普通【杀】造成的伤害+1.',
							},
							//group:'myx_zygx2021_xigong_qiehuan',
							subSkill: {
								jinyan: {
									charlotte: true,
									popup: false,
									forced: true,
								},
							},
						},
						myx_zygx2021_beigong: {
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								var evt = event.getParent('phaseUse');
								if (!evt || evt.player != event.player) return false;
								return true;
							},
							forced: true,
							charlotte: true,
							popup: false,
							mark: true,
							intro: {
								name: '北宫',
								content: '锁定技,出牌阶段,你每使用或打出两张牌后,可以摸一张牌.',
							},
							init(player) {
								if (!player.storage.myx_zygx2021_beigong) player.storage.myx_zygx2021_beigong = 0;
							},
							content() {
								'step 0';
								player.storage.myx_zygx2021_beigong++;
								('step 1');
								if (player.storage.myx_zygx2021_beigong >= 2) {
									player.storage.myx_zygx2021_beigong = 0;
									var list1 = ['确定', '取消'];
									trigger.player
										.chooseControl(list1)
										.set('ai', function () {
											return '确定';
										})
										.set('prompt', '是否发动【北宫】摸一张牌');
								}
								('step 2');
								if (result.control == '确定') {
									trigger.player.draw();
								}
							},
							group: ['myx_zygx2021_beigong_jieshu'],
							subSkill: {
								jieshu: {
									forced: true,
									charlotte: true,
									popup: false,
									_priority: 999,
									forced: true,
									mark: false,
									trigger: {
										global: 'phaseJieshuBegin',
									},
									content() {
										player.storage.myx_zygx2021_beigong = 0;
									},
								},
							},
						},
						myx_zygx2021_donggong: {
							trigger: {
								global: 'useCard',
							},
							charlotte: true,
							forced: true,
							mark: true,
							intro: {
								name: '东宫',
								content: '锁定技,出牌阶段,你使用的前三张普通锦囊牌可以增加或减少一个目标.',
							},
							usable: 3,
							filter(event, player) {
								if (get.type(event.card) != 'trick') return false;
								if (event.targets && event.targets.length) return true;
								var info = get.info(event.card);
								if (info.allowMultiple == false) return false;
								if (event.targets && !info.multitarget) {
									if (
										game.hasPlayer(function (current) {
											return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
										})
									) {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								var prompt2 = `为${get.translation(trigger.card)}增加或减少一个目标`;
								trigger.player
									.chooseTarget(get.prompt('myx_zygx2021_donggong'), function (card, player, target) {
										var player = _status.event.player;
										if (_status.event.targets.includes(target)) return true;
										return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
									})
									.set('prompt2', prompt2)
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
									})
									.set('targets', trigger.targets)
									.set('card', trigger.card);
								('step 1');
								if (result.targets?.length) {
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets) {
									if (trigger.targets.includes(event.targets[0])) trigger.targets.removeArray(event.targets);
									else trigger.targets.addArray(event.targets);
								}
							},
							ai: {
								reverseOrder: true,
								skillTagFilter(player) {
									if (player.getStat('triggerSkill').neifa_use >= 2) return false;
								},
								effect: {
									target(card, player, target) {
										if ((!player.getStat('triggerSkill').neifa_use || player.getStat('triggerSkill').neifa_use < 2) && player == target && get.type(card) == 'equip') return [1, 3];
									},
								},
							},
						},
						myx_boss_xuankai: {
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							charlotte: true,
							content() {
								if (!player.hasSkill('myx_boss_xuankai_xiaoguo')) player.addSkill('myx_boss_xuankai_xiaoguo');
							},
							group: 'myx_boss_xuankai_shanghai',
							subSkill: {
								xiaoguo: {
									mark: true,
									intro: {
										name: '玄铠',
										content: '你使用的下一张牌无法被响应',
									},
									trigger: {
										player: 'useCard',
									},
									forced: true,
									charlotte: true,
									content() {
										'step 0';
										trigger.directHit.addArray(
											game.filterPlayer(function (current) {
												return true;
											})
										);
										('step 1');
										player.removeSkill('myx_boss_xuankai_xiaoguo');
									},
									ai: {
										directHit_ai: true,
									},
								},
								shanghai: {
									forced: true,
									mark: false,
									trigger: { source: 'damageSource' },
									content() {
										if (!trigger.source.hasSkill('myx_zygx2021_beigong')) {
											trigger.source.draw(2);
										} else {
											if (trigger.player.countCards('he') > 0) trigger.source.gainPlayerCard(true, trigger.player, 2, 'he');
											else {
												trigger.source.draw(2);
											}
										}
									},
								},
							},
						},
						myx_boss_shengqu: {
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								player: 'damageBegin4',
							},
							forced: true,
							charlotte: true,
							content() {
								if (
									trigger.num > 1 &&
									game.hasPlayer(function (current) {
										return current != player && current.isFriendsOf(player);
									})
								)
									trigger.num = 1;
								player.draw(2);
							},
							ai: {
								filterDamage: true,
							},
							group: 'myx_xuanzejiangling',
						},
						myx_boss_doumu: {
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								player: ['loseEnd', 'gainEnd', 'phaseDrawBegin'],
							},
							filter(event, player, name) {
								if (name == 'phaseDrawBegin') return true;
								else {
									if (player.hasSkill('myx_boss_doumu_jilu2') || player.hasSkill('myx_boss_doumu_jilu')) return false;
									var evt = event.getl(player);
									if (name == 'loseEnd') return evt && evt.hs && evt.hs.length;
									return true;
								}
							},
							forced: true,
							content() {
								'step 0';
								if (event.triggername != 'phaseDrawBegin') {
									player.chooseTarget(get.prompt('myx_boss_doumu'), function (card, player, target) {
										return target != player;
									}).ai = function (target) {
										return get.effect(target, { name: 'juedou' }, target, _status.event.player);
									};
								} else {
									player.addTempSkill('myx_boss_doumu_jilu2', { player: 'phaseDrawEnd' });
									event.finish();
								}
								('step 1');
								if (result.bool) {
									player.addTempSkill('myx_boss_doumu_jilu');
									var card = result.targets[0].getCards('he').randomGet();
									result.targets[0].discard(card);
									player.useCard({ name: 'juedou' }, result.targets[0]);
								}
							},
							subSkill: {
								jilu: {
									silent: true,
									forced: true,
									popup: false,
								},
								jilu2: {
									silent: true,
									forced: true,
									popup: false,
								},
							},
						},
						myx_boss_weiyue: {
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								player: ['loseEnd', 'gainEnd', 'phaseDrawBegin'],
							},
							filter(event, player, name) {
								if (name == 'phaseDrawBegin') return true;
								else {
									if (player.hasSkill('myx_boss_weiyue_jilu2') || player.hasSkill('myx_boss_weiyue_jilu')) return false;
									var evt = event.getl(player);
									if (name == 'loseEnd') return evt && evt.hs && evt.hs.length;
									return true;
								}
							},
							forced: true,
							content() {
								'step 0';
								if (event.triggername != 'phaseDrawBegin') {
									player.chooseTarget(get.prompt('myx_boss_weiyue'), function (card, player, target) {
										return target != player;
									}).ai = function (target) {
										return get.damageEffect(target, _status.event.player, _status.event.player);
									};
								} else {
									player.addTempSkill('myx_boss_weiyue_jilu2', { player: 'phaseDrawEnd' });
									event.finish();
								}
								('step 1');
								if (result.bool) {
									player.addTempSkill('myx_boss_weiyue_jilu');
									result.targets[0].damage('nocard');
								}
							},
							subSkill: {
								jilu: {
									silent: true,
									forced: true,
									popup: false,
								},
								jilu2: {
									silent: true,
									forced: true,
									popup: false,
								},
							},
						},
						myx_boss_shenshui: {
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								if (!event.card) return false;
								if (event.card.name != 'sha') return false;
								return game.hasPlayer(function (current) {
									return current == player || current.isFriendsOf(player);
								});
							},
							forced: true,
							charlotte: true,
							logTarget(event, player) {
								var mubiao = game.filterPlayer(function (current) {
									return current == player || current.isFriendsOf(player);
								});
								return mubiao;
							},
							content() {
								'step 0';
								event.mubiao = game.filterPlayer(function (current) {
									return current == player || current.isFriendsOf(player);
								});
								('step 1');
								if (event.mubiao.length) {
									for (var i = 0; i < event.mubiao.length; i++) {
										if (event.mubiao[i].isDamaged()) event.mubiao[i].recover();
									}
								}
							},
						},
						myx_boss_kuimu: {
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								if (!event.card) return false;
								if (event.card.name != 'sha') return false;
								return game.hasPlayer(function (current) {
									return current != player && current.isEnemiesOf(player);
								});
							},
							forced: true,
							logTarget(event, player) {
								var mubiao = game.filterPlayer(function (current) {
									return current != player && current.isEnemiesOf(player);
								});
								return mubiao;
							},
							content() {
								'step 0';
								event.mubiao = game.filterPlayer(function (current) {
									return current != player && current.isEnemiesOf(player);
								});
								('step 1');
								if (event.mubiao.length) {
									for (var i = 0; i < event.mubiao.length; i++) {
										event.mubiao[i].damage('nocard');
									}
								}
							},
						},
						myx_boss_tianxiao: {
							mod: {
								targetInRange(card, player, target) {
									if (card.name == 'sha' && _status.currentPhase == player) return true;
								},
								cardUsable(card, player, num) {
									if (card.name == 'sha' && !player.hasSkill('myx_zygx2021_xigong')) return num + 2;
									else if (card.name == 'sha' && player.hasSkill('myx_zygx2021_xigong')) return Infinity;
								},
								selectTarget(card, player, range) {
									if (card.name == 'sha' && _status.currentPhase == player) {
										range[1] = -1;
										range[0] = -1;
									}
								},
								playerEnabled(card, player, target) {
									if (_status.currentPhase == player) {
										if (card.name == 'sha' && target.isFriendsOf(player)) {
											return false;
										}
									}
								},
							},
							firstDo: true,
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								player: 'useCard1',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && _status.currentPhase == player;
							},
							content() { },
						},
						myx_boss_huwei: {
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							content() {
								event.cards = [];
								if (player.hasSkill('myx_zygx2021_xigong')) {
									var l = 6;
								} else {
									var l = 3;
								}
								while (event.cards.length < l) {
									var card = get.cardPile2(function (card) {
										return !event.cards.includes(card) && get.type(card) == 'basic' && card.name == 'sha';
									});
									if (card) {
										event.cards.push(card);
									} else {
										for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
											var current = ui.discardPile.childNodes[i];
											if (!event.cards.includes(current) && get.type(current) == 'basic' && current.name == 'sha' && event.cards.length < 3) {
												event.cards.push(current);
											}
										}
									}
								}
								if (event.cards.length) player.gain(event.cards, 'gain2');
							},
							ai: {
								threaten: 1.2,
							},
							group: 'myx_xuanzejiangling',
						},
						myx_boss_xingri: {
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								source: 'damageBefore',
							},
							forced: true,
							_priority: 10,
							filter(event, player) {
								return event.nature != 'fire';
							},
							content() {
								trigger.nature = 'fire';
							},
							ai: {
								fireAttack: true,
							},
							group: 'myx_boss_xingri_mopai',
							subSkill: {
								mopai: {
									trigger: {
										source: 'damageSource',
									},
									filter(event, player) {
										return event.nature == 'fire';
									},
									forced: true,
									content() {
										player.draw();
									},
								},
							},
						},
						myx_boss_yihuo: {
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								source: ['damageBegin1', 'damageSource'],
							},
							forbid: ['identity'],
							filter(event, player, name) {
								if (name == 'damageSource')
									return (
										event.nature == 'fire' &&
										player == event.source &&
										event.player.isEnemiesOf(player) &&
										game.hasPlayer(function (current) {
											return current != player && current.isEnemiesOf(player);
										})
									);
								return player == event.source;
							},
							forced: true,
							content() {
								'step 0';
								if (event.triggername == 'damageSource') {
									event.mubiao = game.filterPlayer(function (current) {
										return current != player && current.isEnemiesOf(player);
									});
								} else {
									trigger.nature = 'fire';
									event.finish();
								}
								('step 1');
								if (event.mubiao.length) {
									for (var i = 0; i < event.mubiao.length; i++) {
										if (event.mubiao[i].countCards('he')) {
											var card = event.mubiao[i].getCards('he').randomGet();
											event.mubiao[i].discard(card);
										}
									}
								}
							},
							ai: {
								fireAttack: true,
							},
						},
						myx_boss_tianhuo: {
							audio: 'ext:命运线/xingxiu:1',
							enable: 'phaseUse',
							forbid: ['identity'],
							init(player) {
								if (!player.storage.myx_boss_tianhuo) player.storage.myx_boss_tianhuo = 0;
							},
							filterCard: true,
							selectCard: true,
							position: 'he',
							filter(event, player) {
								if (player.hasSkill('myx_zygx2021_nangong')) {
									return player.storage.myx_boss_tianhuo < 4;
								} else {
									return player.storage.myx_boss_tianhuo < 2;
								}
							},
							filterTarget(card, player, target) {
								return get.attitude(player, target);
							},
							multitarget: true,
							multiline: true,
							selectTarget() {
								return [1, 2];
							},
							check(card) {
								return 12 - get.value(card);
							},
							async content(event, trigger, player) {
								//QQQ
								player.storage.myx_boss_tianhuo++;
								for (var i of event.targets) {
									i.damage('fire');
								}
							},
							ai: {
								order: 8.5,
								damage: true,
								fireAttack: true,
								threaten: 2,
								result: {
									target(player, target) {
										return get.damageEffect(target, player);
									},
								},
							},
							group: 'myx_boss_tianhuo_qingchu',
							subSkill: {
								qingchu: {
									forced: true,
									popup: false,
									charlotte: false,
									trigger: {
										player: 'phaseJieshuBegin',
									},
									_priority: 666,
									content() {
										player.storage.myx_boss_tianhuo = 0;
									},
								},
							},
						},
						myx_boss_zhuyu: {
							audio: 'ext:命运线/xingxiu:1',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							forbid: ['identity'],
							_priority: 10,
							content() {
								event.cards = [];
								while (event.cards.length < 2) {
									var card = get.cardPile2(function (card) {
										return !event.cards.includes(card) && get.color(card) == 'red';
									});
									if (card) {
										event.cards.push(card);
									} else {
										for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
											var current = ui.discardPile.childNodes[i];
											if (!event.cards.includes(current) && get.color(current) == 'red' && event.cards.length < 2) {
												event.cards.push(current);
											}
										}
									}
								}
								if (event.cards.length) player.gain(event.cards, 'gain2');
							},
							ai: {
								threaten: 1.5,
							},
							group: ['myx_boss_zhuyu_hei', 'myx_xuanzejiangling'],
							subSkill: {
								hei: {
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									content() {
										event.cards = [];
										while (event.cards.length < 2) {
											var card = get.cardPile2(function (card) {
												return !event.cards.includes(card) && get.color(card) == 'black';
											});
											if (card) {
												event.cards.push(card);
											} else {
												for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
													var current = ui.discardPile.childNodes[i];
													if (!event.cards.includes(current) && get.color(current) == 'black' && event.cards.length < 2) {
														event.cards.push(current);
													}
												}
											}
										}
										if (event.cards.length) player.gain(event.cards, 'gain2');
									},
								},
							},
						},
						myx_boss_longhui: {
							audio: 'ext:命运线/xingxiu:1',
							charlotte: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							forbid: ['identity'],
							_priority: 11,
							content() {
								event.cards = [];
								if (player.hasSkill('myx_zygx2021_donggong')) {
									var l = 4;
								} else {
									var l = 2;
								}
								while (event.cards.length < l) {
									var card = get.cardPile2(function (card) {
										return !event.cards.includes(card) && (get.type(card) == 'trick' || get.type(card) == 'delay');
									});
									if (card) {
										event.cards.push(card);
									} else {
										for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
											var current = ui.discardPile.childNodes[i];
											if (!event.cards.includes(current) && (get.type(current) == 'trick' || get.type(current) == 'delay') && event.cards.length < 2) {
												event.cards.push(current);
											}
										}
									}
								}
								if (event.cards.length) player.gain(event.cards, 'gain2');
							},
							ai: {
								threaten: 1.2,
							},
							group: ['myx_boss_longhui_aoe', 'myx_xuanzejiangling'],
							subSkill: {
								aoe: {
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									_priority: 10,
									forced: true,
									content() {
										'step 0';
										var list = ['nanman', 'wanjian'];
										player.chooseButton([get.prompt(event.name), [list, 'vcard']], true).ai = function (button) {
											return _status.event.player.getUseValue({
												name: button.link[2],
											});
										};
										('step 1');
										if (result.links?.length) {
											player.chooseUseTarget(result.links[0][2], true, false);
										}
									},
								},
							},
						},
						myx_boss_longlin: {
							audio: 'ext:命运线/xingxiu:1',
							charlotte: true,
							trigger: {
								player: 'damageBegin4',
							},
							forced: true,
							forbid: ['identity'],
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							content() {
								trigger.cancel();
							},
							ai: {
								notrick: true,
								effect: {
									player(card, player, target, current) {
										if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
											return 'zeroplayertarget';
										}
									},
								},
							},
							group: 'myx_boss_longlin_bengong',
							subSkill: {
								bengong: {
									trigger: {
										source: 'damageBegin2',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.card && get.type(event.card) == 'trick' && event.source.hasSkill('myx_zygx2021_donggong');
									},
									content() {
										trigger.num++;
									},
								},
							},
						},
						myx_boss_jiaomu: {
							audio: 'ext:命运线/audio:1',
							charlotte: true,
							forbid: ['identity'],
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return (
									get.type(event.card) == 'trick' &&
									game.hasPlayer(function (current) {
										return current == player || current.isFriendsOf(player);
									})
								);
							},
							forced: true,
							logTarget(event, player) {
								var mubiao = game.filterPlayer(function (current) {
									return current == player || current.isFriendsOf(player);
								});
								return mubiao;
							},
							content() {
								'step 0';
								event.mubiao = game.filterPlayer(function (current) {
									return current == player || current.isFriendsOf(player);
								});
								('step 1');
								if (event.mubiao.length) game.asyncDraw(event.mubiao);
							},
						},
						myx_boss_kangjin: {
							audio: 'ext:命运线/audio:1',
							charlotte: true,
							forbid: ['identity'],
							trigger: {
								target: 'useCardToTarget',
							},
							filter(event, player) {
								return (
									get.type(event.card) == 'trick' &&
									game.hasPlayer(function (current) {
										return current == player || current.isFriendsOf(player);
									})
								);
							},
							forced: true,
							logTarget(event, player) {
								var mubiao = game.filterPlayer(function (current) {
									return current == player || current.isFriendsOf(player);
								});
								return mubiao;
							},
							content() {
								'step 0';
								event.mubiao = game.filterPlayer(function (current) {
									return current == player || current.isFriendsOf(player);
								});
								('step 1');
								if (event.mubiao.length) game.asyncDraw(event.mubiao);
							},
						},
						myx_boss_decade_zhuning: {
							trigger: {
								source: 'damageBegin1',
							},
							audio: 'ext:命运线/audio:1',
							filter(event, player) {
								return event.card && event.card.name == 'sha' && player.getHistory('sourceDamage').length == 0;
							},
							forced: true,
							content() {
								trigger.num++;
							},
							ai: {
								damageBonus: true,
							},
						},
						myx_boss_decade_fengxiang: {
							trigger: {
								player: 'gainAfter',
							},
							check(event, card) {
								return event.cards && event.cards.length < 3;
							},
							audio: 'ext:命运线/audio:1',
							filter(event, player) {
								return event.source && event.source != player && event.cards.length >= 1;
							},
							content() {
								'step 0';
								event.cards = trigger.cards.slice(0);
								('step 1');
								var next = player.chooseToUse();
								next.set('openskilldialog', '将获得的牌当做【杀】使用');
								next.set('norestore', true);
								next.set('addCount', false);
								next.set('_backupevent', 'mitan_fengxiang_backup');
								next.set('custom', {
									add: {},
									replace: { window() { } },
								});
								next.backup('myx_boss_decade_fengxiang_backup');
							},
							subSkill: {
								backup: {
									filterCard(card) {
										return get.itemtype(card) == 'card' && _status.event.parent.cards.includes(card);
									},
									selectCard: -1,
									viewAs: {
										name: 'sha',
									},
									position: 'h',
									filterTarget(card, player, target) {
										if (!card) return false;
										var info = get.info(card);
										var filter = info.filterTarget;
										if (!info.singleCard || ui.selected.targets.length == 0) {
											var mod = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
											if (mod == false) return false;
											var mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
											if (mod != 'unchanged') return mod;
										}
										if (typeof filter == 'boolean') return filter;
										if (typeof filter == 'function') return filter(card, player, target);
									},
									check: (card) => 6 - get.value(card),
									log: false,
									precontent() { },
									ai: {
										yingbian(card, player, targets, viewer) {
											if (get.attitude(viewer, player) <= 0) return 0;
											var base = 0,
												hit = false;
											if (get.cardtag(card, 'yingbian_hit')) {
												hit = true;
												if (
													targets.filter(function (target) {
														return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
													})
												)
													base += 5;
											}
											if (get.cardtag(card, 'yingbian_all')) {
												if (
													game.hasPlayer(function (current) {
														return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
													})
												)
													base += 5;
											}
											if (get.cardtag(card, 'yingbian_damage')) {
												if (
													targets.filter(function (target) {
														return (
															get.attitude(player, target) < 0 &&
															(hit ||
																!target.mayHaveShan() ||
																player.hasSkillTag(
																	'directHit_ai',
																	true,
																	{
																		target: target,
																		card: card,
																	},
																	true
																)) &&
															!target.hasSkillTag('filterDamage', null, {
																player: player,
																card: card,
																jiu: true,
															})
														);
													})
												)
													base += 5;
											}
											return base;
										},
										canLink(player, target, card) {
											if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
											if (
												target.mayHaveShan() &&
												!player.hasSkillTag(
													'directHit_ai',
													true,
													{
														target: target,
														card: card,
													},
													true
												)
											)
												return false;
											if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
											return true;
										},
										basic: {
											useful: [5, 3, 1],
											value: [5, 3, 1],
										},
										order(item, player) {
											if (player.hasSkillTag('presha', true, null, true)) return 10;
											if (lib.linked.includes(get.nature(item))) {
												if (
													game.hasPlayer(function (current) {
														return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
													}) &&
													game.countPlayer(function (current) {
														return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
													}) > 1
												)
													return 3.1;
												return 3;
											}
											return 3.05;
										},
										result: {
											target(player, target, card, isLink) {
												var eff = (function () {
													if (!isLink && player.hasSkill('jiu')) {
														if (
															!target.hasSkillTag('filterDamage', null, {
																player: player,
																card: card,
																jiu: true,
															})
														) {
															if (get.attitude(player, target) > 0) {
																return -7;
															} else {
																return -4;
															}
														}
														return -0.5;
													}
													return -1.5;
												})();
												if (
													!isLink &&
													target.mayHaveShan() &&
													!player.hasSkillTag(
														'directHit_ai',
														true,
														{
															target: target,
															card: card,
														},
														true
													)
												)
													return eff / 1.2;
												return eff;
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
							},
							ai: {
								expose: 0.3,
							},
						},
						myx_boss_decade_jitong: {
							audio: 'ext:命运线/audio:1',
							group: ['myx_boss_decade_jitong_buff', 'myx_boss_decade_jitong_damage'],
							init(player) {
								player.storage.myx_boss_decade_jitong = false;
							},
							marktext: '继统',
							mark: true,
							intro: {
								content(storage, player, skill) {
									if (player.storage.myx_boss_decade_jitong != false) return '防止你下次受到的伤害';
									if (player.storage.myx_boss_decade_jitong != true) return '无';
								},
							},
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							filter(event, player) {
								return player.storage.myx_boss_decade_jitong != true && !player.hasSkill('myx_boss_decade_jitong_silent');
							},
							content() {
								player.storage.myx_boss_decade_jitong = true;
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (player.hasSkillTag('jueqing', false, target)) return;
										if (get.tag(card, 'damage') && target.storage.myx_boss_decade_jitong != false) return 0;
									},
								},
							},
							subSkill: {
								silent: {
									charlotte: true,
								},
								buff: {
									trigger: {
										player: 'damageBegin4',
									},
									forced: true,
									filter(event, player) {
										return player.storage.myx_boss_decade_jitong != false;
									},
									content() {
										'step 0';
										trigger.cancel();
										('step 1');
										player.storage.myx_boss_decade_jitong = false;
									},
								},
								damage: {
									trigger: {
										source: 'damageEnd',
									},
									forced: true,
									silent: true,
									filter(event, player) {
										return !player.hasSkill('myx_boss_decade_jitong_silent') && event.card && event.card.name == 'sha' && _status.currentPhase == player;
									},
									content() {
										player.addTempSkill('myx_boss_decade_jitong_silent', { player: 'phaseEnd' });
									},
									popup: false,
								},
							},
						},
						myx_boss_decade_jijiang: {
							audio: 'ext:命运线/audio:1',
							init(player) {
								player.storage.myx_boss_decade_jijiang = 0;
								player.storage.myx_boss_decade_jijiang_xiaoguo = 0;
							},
							marktext: '激将',
							mark: true,
							intro: {
								content(storage, player, skill) {
									var num1 = player.storage.myx_boss_decade_jijiang;
									var num2 = player.storage.myx_boss_decade_jijiang_xiaoguo;
									if (num1 == undefined) num = 0;
									if (num2 == undefined) num = 0;
									return `本回合可多使用${num2}张杀<br>下回合可多使用${num1}张杀`;
								},
							},
							trigger: {
								player: ['useCard', 'respond'],
							},
							filter(event, player) {
								return ['sha'].includes(event.card.name);
							},
							forced: true,
							content() {
								'step 0';
								player.draw();
								('step 1');
								event.card = result.cards[0];
								if (get.type(event.card) == 'basic') {
									player.storage.myx_boss_decade_jijiang++;
									player.markSkill('myx_boss_decade_jijiang');
								}
							},
							ai: {
								threaten: 1.4,
							},
							group: ['myx_boss_decade_jijiang_xiaoguo', 'myx_boss_decade_jijiang_buff', 'myx_boss_decade_jijiang_clear'],
							subSkill: {
								xiaoguo: {
									trigger: {
										player: 'phaseBegin',
									},
									silent: true,
									forced: true,
									content() {
										'step 0';
										var num = player.storage.myx_boss_decade_jijiang;
										player.storage.myx_boss_decade_jijiang_xiaoguo += num;
										('step 1');
										player.storage.myx_boss_decade_jijiang = 0;
									},
									popup: false,
								},
								buff: {
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') {
												return num + player.storage.myx_boss_decade_jijiang_xiaoguo;
											}
										},
									},
								},
								clear: {
									trigger: {
										player: 'phaseEnd',
									},
									silent: true,
									forced: true,
									content() {
										player.storage.myx_boss_decade_jijiang_xiaoguo = 0;
									},
									popup: false,
								},
							},
						},
						myx_boss_decade_ruoyu: {
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							audio: 'ext:命运线/audio:1',
							filter(event, player) {
								return !game.hasPlayer(function (current) {
									return current != player && current.hp < player.hp;
								});
							},
							forced: true,
							content() {
								player.recover();
							},
						},
						myx_boss_decade_suizhan: {
							audio: 'ext:命运线/audio:1',
							trigger: {
								player: 'phaseDrawBegin2',
							},
							forced: true,
							preHidden: true,
							filter(event, player) {
								return !event.numFixed && player.hasSkill('xiansi') && player.getExpansions('xiansi').length;
							},
							content() {
								var num = player.getExpansions('xiansi').length;
								trigger.num += num;
							},
							ai: {
								threaten: 1.5,
							},
						},
						myx_boss_decade_qinwang: {
							trigger: {
								global: 'useCard',
							},
							audio: 'ext:命运线/audio:1',
							filter(event, player, name) {
								return event.card && event.card.name == 'juedou';
							},
							forced: true,
							content() {
								var card = get.cardPile(function (card) {
									return get.type(card) == 'basic';
								});
								if (card) player.gain(card, 'gain2');
							},
						},
						olm_shenwuzaishi: {
							trigger: { global: 'gameStart' },
							fixed: true,
							popup: false,
							silent: true,
							forced: true,
							charlotte: true,
							superCharlotte: true,
							_priority: 999,
							mode: ['boss'], //QQQ
							init() {
								game.addGlobalSkill('boss_shenwuzaishi');
								game.addGlobalSkill('TheDayIBecomeAGod');
								game.addGlobalSkill('thedayibecomeagod');
								var list = ['lebu', 'bingliang'];
								lib.inpile.remove('wuzhong');
								lib.inpile.remove('jiedao');
								lib.inpile.add('sadouchengbing');
								lib.inpile.add('yihuajiemu');
								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var node = ui.cardPile.childNodes[i];
									if (node.name == 'wuzhong') {
										node.init([node.suit, node.number, 'sadouchengbing']);
									} else if (node.name == 'jiedao') {
										node.init([node.suit, node.number, 'yihuajiemu']);
									} else if (list.includes(node.name)) {
										lib.inpile.remove(node.name);
										node.remove();
									}
								}
							},
							content() {
								'step 0';
								game.bossinfo.chongzheng = 999;
								player.smoothAvatar();
								('step 1');
								if (game.me != game.boss) {
									game.me
										.chooseControl('先锋', '中坚', '大将')
										.set('prompt', '请选择挑战的坐位')
										.set('ai', function (target) {
											return '先锋';
										});
								} else {
									event.goto(3);
								}
								('step 2');
								('step 3');
								var list = ['olm_boss_hundun', 'olm_boss_qiongqi', 'olm_boss_taotie', 'olm_boss_taowu', 'olm_boss_xiangliu', 'olm_boss_zhuyan', 'olm_boss_bifang', 'olm_boss_yingzhao'];
								var bos = list.randomGet();
								event.bos = bos;
								('step 4');
								player.init(event.bos);
								_status.noswap = true;
								player.addFellow('boss_zhuyin');
								player.addFellow('boss_zhuyin');
								game.boss.gainMaxHp(5);
								game.boss.addSkill('olm_shenwu2022_guanqiaqiehuan');
								('step 5');
								var list = game.filterPlayer((current) => current != game.boss && current.isFriendsOf(game.boss)).sortBySeat();
								for (var i of list) i.gainMaxHp(2);
								var list2 = game.filterPlayer((current) => current == game.boss || current.isFriendsOf(game.boss) || current.isEnemiesOf(game.boss)).sortBySeat();
								for (var j of list2) {
									j.addSkill('myx_wujie');
								}
								('step 6');
								var list = game.filterPlayer((current) => current.isEnemiesOf(game.boss)).sortBySeat();
								for (var i of list) {
									if (get.translation(i).includes('神关羽')) {
										var card = get.cardPile('qinglong', 'field');
										card.init([card.suit, card.number, 'guilongzhanyuedao']);
										i.equip(card);
									} else if (get.translation(i).includes('神诸葛亮')) {
										var card = get.cardPile('bagua', 'field');
										card.init(['spade', card.number, 'qimenbagua']);
										i.equip(card);
									} else if (get.translation(i).includes('神周瑜')) {
										var card = get.cardPile('zhuque', 'field');
										card.init([card.suit, card.number, 'chiyanzhenhunqin']);
										i.equip(card);
									} else if (get.translation(i).includes('神曹操')) {
										var card = get.cardPile('jueying', 'field');
										card.init([card.suit, card.number, 'juechenjinge']);
										i.equip(card);
									} else if (get.translation(i).includes('神赵云') || get.translation(i) == '高达一号') {
										var card = get.cardPile('qinggang', 'field');
										card.init([card.suit, card.number, 'chixueqingfeng']);
										i.equip(card);
									} else if (get.translation(i).includes('神吕布')) {
										var card = get.cardPile('fangtian', 'field');
										card.init([card.suit, card.number, 'xiuluolianyuji']);
										i.equip(card);
									} else if (get.translation(i).includes('神司马懿')) {
										i.equip(game.createCard2('xuwangzhimian', 'diamond', 4));
										lib.inpile.add('xuwangzhimian');
									} else if (get.translation(i).includes('神刘备')) {
										var card = get.cardPile('cixiong', 'field');
										card.init([card.suit, card.number, 'longfenghemingjian']);
										i.equip(card);
									} else if (get.translation(i).includes('神吕蒙')) {
										i.equip(game.createCard2('guofengyupao', 'diamond', 3));
										lib.inpile.add('guofengyupao');
									} else if (get.translation(i).includes('神陆逊')) {
										i.equip(game.createCard2('qicaishenlu', 'diamond', 3));
										lib.inpile.add('qicaishenlu');
									} else if (get.translation(i).includes('神甘宁')) {
										var card = get.cardPile('qilin', 'field');
										card.init([card.suit, card.number, 'jinwuluorigong']);
										i.equip(card);
									} else if (get.translation(i).includes('神张辽')) {
										var card = get.cardPile('guanshi', 'field');
										card.init([card.suit, card.number, 'xingtianpojunfu']);
										i.equip(card);
									} else if (get.translation(i).includes('神孙权')) {
										i.equip(game.createCard2('changandajian_equip5', 'spade', 5));
										lib.inpile.add('changandajian_equip5');
									} else if (get.translation(i).includes('神曹丕')) {
										i.equip(game.createCard2('shanrangzhaoshu', 'spade', 13));
										lib.inpile.add('shanrangzhaoshu');
									} else if (get.translation(i).includes('神甄姬')) {
										i.equip(game.createCard2('lingsheji', 'club', 12));
										lib.inpile.add('lingsheji');
									} else if (get.translation(i).includes('神张飞')) {
										var card = get.cardPile(function (card) {
											if (card.name != 'zhangba') return false;
											return true;
										});
										if (card) i.equip(card);
									} else if (get.translation(i).includes('神姜维')) {
										var card = get.cardPile('hanbing', 'field');
										card.init([card.suit, card.number, 'olm_qilinwanlanjian']);
										i.equip(card);
									}
									if (i.name == 'shen_caopi') i.loseMaxHp();
									if (i.name == 'shen_zhenji') i.loseMaxHp();
								}
								('step 7');
								var list = game.filterPlayer((current) => current.isEnemiesOf(game.boss)).sortBySeat();
								for (var i of list) {
									i.gainMaxHp(2);
									i.recover(2);
									i.draw(2);
									i.addSkill('olm_wanjia_qiaojiang');
									i.addSkill('niepan');
								}
								('step 8');
								var list = game.filterPlayer((current) => current == game.boss || current.isFriendsOf(game.boss)).sortBySeat();
								for (var i of list) {
									i.draw(2);
									i.addSkill('olm_boss_kunshou');
								}
							},
						},
						olm_shenwuzaishi_guize: { nobracket: true },
						olm_shenwuzaishi_guize2: { nobracket: true },
						olm_shenwuzaishi_guize3: { nobracket: true },
						olm_boss_kunshou: {
							forced: true,
							mark: true,
							juexingji: true,
							init(player) {
								player.storage.olm_boss_kunshou = false;
							},
							trigger: { player: 'dying' },
							filter(event, player) {
								return player.storage.olm_boss_kunshou == false;
							},
							content() {
								'step 0';
								player.awakenSkill('olm_boss_kunshou');
								player.storage.olm_boss_kunshou = true;
								player.discard(player.getCards('hej'));
								('step 1');
								player.link(false);
								('step 2');
								player.turnOver(false);
								('step 3');
								player.draw(5);
								('step 4');
								if (player.hp < 5) {
									player.recover(5 - player.hp);
								}
								('step 5');
								player.addSkill('benghuai');
							},
							ai: {
								order: 0.5,
								skillTagFilter(player, tag, target) {
									if (player != target || player.storage.niepan) return false;
								},
								save: true,
								result: {
									player(player) {
										if (player.hp <= 0) return 10;
										if (player.hp <= 1 && player.countCards('he') <= 1) return 10;
										return 0;
									},
								},
								threaten(player, target) {
									if (!target.storage.olm_boss_kunshou) return 0.6;
								},
							},
							intro: {
								content: 'limited',
							},
						},
						olm_wanjia_qiaojiang: {
							trigger: {
								global: 'phaseZhunbeiBegin',
							},
							forced: true,
							prioirty: 85,
							filter(event, player) {
								return (event.name != 'phase' || game.phaseNumber == 0) && player.storage.olm_wanjia_qiaojiang == false;
							},
							init(player) {
								player.storage.olm_wanjia_qiaojiang = false;
							},
							content() {
								'step 0';
								var i = 0;
								var list = [];
								while (i++ < 1) {
									var card = get.cardPile(function (card) {
										if (get.type(card) != 'equip') return false;
										return !player.getEquip(get.subtype(card));
									});
									if (card) list.push(card);
								}
								if (!list.length) {
									event.finish();
									return;
								}
								event.list = list;
								player.gain(event.list, 'gain2');
								('step 1');
								var card = event.list.shift();
								if (player.getCards('h').includes(card)) {
									player.$give(card, player, false);
									player.equip(card);
								}
								if (event.list.length) event.redo();
								player.storage.olm_wanjia_qiaojiang = true;
							},
						},
						olm_shenwu2022_guanqiaqiehuan: {
							mode: ['boss'],
							trigger: {
								player: 'dieBegin',
							},
							init(player) {
								if (!player.storage.olm_shenwu2022_guanqiaqiehuan) player.storage.olm_shenwu2022_guanqiaqiehuan = 1;
							},
							mark: true,
							marktext: '关卡',
							intro: {
								name: '当前兽群难度:',
								content(storage, player, skill) {
									var str = `第${player.storage.olm_shenwu2022_guanqiaqiehuan}关`;
									if (player.storage.olm_shenwu2022_guanqiaqiehuan == 1) str = '普通兽群';
									else if (player.storage.olm_shenwu2022_guanqiaqiehuan == 2) str = '进阶兽群';
									else if (player.storage.olm_shenwu2022_guanqiaqiehuan == 3) str = '困难兽群';
									return str;
								},
							},
							fixed: true,
							silent: true,
							forced: true,
							popup: false,
							charlotte: true,
							superCharlotte: true,
							filter(event, player) {
								return player == game.boss;
							},
							content() {
								'step 0';
								if (player.storage.olm_shenwu2022_guanqiaqiehuan >= 3) event.finish();
								else event.goto(1);
								('step 1');
								var list = ['olm_boss_hundun', 'olm_boss_qiongqi', 'olm_boss_taotie', 'olm_boss_taowu', 'olm_boss_xiangliu', 'olm_boss_zhuyan', 'olm_boss_bifang', 'olm_boss_yingzhao'];
								var bos = list.randomGet();
								event.bos = bos;
								('step 2');
								if (player.hasSkill('new_wuhun')) {
									game.countPlayer(function (current) {
										if (current.hasMark('new_wuhun_mark')) current.removeMark('new_wuhun_mark', current.countMark('new_wuhun_mark'));
									});
								}
								player.hide();
								game.addVideo('hidePlayer', player);
								('step 3');
								game.countPlayer(function (current) {
									if (current != player && current.identity != 'cai') {
										current.die();
									}
								}); //删掉活人
								('step 4');
								game.changeBossQ(event.bos);
								('step 5');
								player.addFellow('boss_zhuyin');
								player.addFellow('boss_zhuyin');
								('step 6');
								game.countPlayer(function (current) {
									if (current != game.boss && current.isFriendsOf(game.boss)) {
										if (player.storage.olm_shenwu2022_guanqiaqiehuan == 1) current.gainMaxHp(3);
										else if (player.storage.olm_shenwu2022_guanqiaqiehuan == 2) {
											current.gainMaxHp(5);
											current.recover(2);
										}
									}
									if (current == game.boss) {
										if (player.storage.olm_shenwu2022_guanqiaqiehuan == 1) current.gainMaxHp(5);
										else if (player.storage.olm_shenwu2022_guanqiaqiehuan == 2) current.gainMaxHp(8);
										else current.gainMaxHp(10);
									}
									if (current.hasSkill('nzry_jieying')) current.link(true);
									if (current.isEnemiesOf(game.boss)) {
										if (player.storage.olm_shenwu2022_guanqiaqiehuan == 1) {
											current.addSkill('olm_shenwu2022_kuangbao');
											current.changeHujia(2);
										} else if (player.storage.olm_shenwu2022_guanqiaqiehuan == 2) current.gainMaxHp(1);
										if (current.storage.boss_shedu) current.storage.boss_shedu = 0;
									}
									if (current == game.boss || current.isFriendsOf(game.boss)) {
										current.addSkill('olm_boss_kunshou');
									}
								});
								('step 7');
								var dijiguan = player.storage.olm_shenwu2022_guanqiaqiehuan + 1;
								game.boss.addSkill('olm_shenwu2022_guanqiaqiehuan');
								game.boss.storage.olm_shenwu2022_guanqiaqiehuan = dijiguan;
								('step 8');
								player.die();
							},
						},
						olm_shenwu2022_kuangbao: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') {
										return num + 1;
									}
								},
							},
							forced: true,
							charlotte: true,
							popup: false,
						},
						olm_qmbzjieshao: { nobracket: true },
						olm_qmbz: {
							trigger: { global: 'gameStart' },
							fixed: true,
							popup: false,
							silent: true,
							forced: true,
							charlotte: true,
							superCharlotte: true,
							_priority: 999,
							mode: ['boss'], //QQQ
							init(player) {
								player.storage.qmbzguanqia = [1, 2, 3, 4, 5, 6, 7, 8];
								player.storage.quedingtiaozhan = 0;
							},
							initList() {
								var list,
									skills = [];
								var banned = ['xunyi', 'rekurou', 'yanjiao', 'spyanjiao', 'rende', 'mingjian', 'xinfu_guhuo', 'zhuiyi', 'dczhuiyi', 'rewangzun', 'fenxin', 'dingpan', 'qinqing', 'huashen', 'xinsheng', 'rehuashen', 'rexinsheng', 'yimie', 'shifei'];
								list = [];
								for (var i in lib.character) {
									if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
									list.push(i);
								}
								for (var i of list) {
									if (i.indexOf('gz_jun') == 0) continue;
									for (var j of lib.character[i][3]) {
										var skill = lib.skill[j];
										if (!skill || skill.zhuSkill || skill.juexingji || skill.limited || skill.hiddenSkill || skill.charlotte || banned.includes(j)) continue;
										if (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
										var info = get.translation(j);
										for (var ix = 0; ix < info.length; ix++) {
											skills.add(j);
											break;
										}
									}
								}
								_status.olm_qmbz_list = skills;
							},
							content() {
								'step 0';
								window.imageall = ui.create.div('.yemian', ui.arena);
								var image1 = ui.create.div('.image1', ui.arenma); //鸟
								image1.setAttribute('id', 'yi');
								document.body.appendChild(image1);
								var image2 = ui.create.div('.image2', ui.arena); //天
								image2.setAttribute('id', 'er');
								document.body.appendChild(image2);
								var image3 = ui.create.div('.image3', ui.arena); //龙
								image3.setAttribute('id', 'san');
								document.body.appendChild(image3);
								var image4 = ui.create.div('.image4', ui.arena); //地
								image4.setAttribute('id', 'si');
								document.body.appendChild(image4);
								var image5 = ui.create.div('.image5', ui.arena); //蛇
								image5.setAttribute('id', 'wu');
								document.body.appendChild(image5);
								var image6 = ui.create.div('.image6', ui.arena); //风
								image6.setAttribute('id', 'liu');
								document.body.appendChild(image6);
								var image7 = ui.create.div('.image7', ui.arena); //虎
								image7.setAttribute('id', 'qi');
								document.body.appendChild(image7);
								var image8 = ui.create.div('.image8', ui.arena); //云
								image8.setAttribute('id', 'ba');
								document.body.appendChild(image8);
								//选择
								image1.onclick = function () {
									window.imageall.remove();
									var er = document.getElementById('er');
									er.parentNode.removeChild(er);
									var san = document.getElementById('san');
									san.parentNode.removeChild(san);
									var si = document.getElementById('si');
									si.parentNode.removeChild(si);
									var wu = document.getElementById('wu');
									wu.parentNode.removeChild(wu);
									var liu = document.getElementById('liu');
									liu.parentNode.removeChild(liu);
									var qi = document.getElementById('qi');
									qi.parentNode.removeChild(qi);
									var ba = document.getElementById('ba');
									ba.parentNode.removeChild(ba);
								};
								image2.onclick = function () {
									window.imageall.remove();
									var zhao = document.getElementById('yi');
									zhao.parentNode.removeChild(zhao);
									var san = document.getElementById('san');
									san.parentNode.removeChild(san);
									var si = document.getElementById('si');
									si.parentNode.removeChild(si);
									var wu = document.getElementById('wu');
									wu.parentNode.removeChild(wu);
									var liu = document.getElementById('liu');
									liu.parentNode.removeChild(liu);
									var qi = document.getElementById('qi');
									qi.parentNode.removeChild(qi);
									var ba = document.getElementById('ba');
									ba.parentNode.removeChild(ba);
								};
								image3.onclick = function () {
									window.imageall.remove();
									var er = document.getElementById('er');
									er.parentNode.removeChild(er);
									var san = document.getElementById('yi');
									san.parentNode.removeChild(san);
									var si = document.getElementById('si');
									si.parentNode.removeChild(si);
									var wu = document.getElementById('wu');
									wu.parentNode.removeChild(wu);
									var liu = document.getElementById('liu');
									liu.parentNode.removeChild(liu);
									var qi = document.getElementById('qi');
									qi.parentNode.removeChild(qi);
									var ba = document.getElementById('ba');
									ba.parentNode.removeChild(ba);
								};
								image4.onclick = function () {
									window.imageall.remove();
									var er = document.getElementById('er');
									er.parentNode.removeChild(er);
									var san = document.getElementById('san');
									san.parentNode.removeChild(san);
									var si = document.getElementById('yi');
									si.parentNode.removeChild(si);
									var wu = document.getElementById('wu');
									wu.parentNode.removeChild(wu);
									var liu = document.getElementById('liu');
									liu.parentNode.removeChild(liu);
									var qi = document.getElementById('qi');
									qi.parentNode.removeChild(qi);
									var ba = document.getElementById('ba');
									ba.parentNode.removeChild(ba);
								};
								image5.onclick = function () {
									window.imageall.remove();
									var er = document.getElementById('er');
									er.parentNode.removeChild(er);
									var san = document.getElementById('san');
									san.parentNode.removeChild(san);
									var si = document.getElementById('si');
									si.parentNode.removeChild(si);
									var wu = document.getElementById('yi');
									wu.parentNode.removeChild(wu);
									var liu = document.getElementById('liu');
									liu.parentNode.removeChild(liu);
									var qi = document.getElementById('qi');
									qi.parentNode.removeChild(qi);
									var ba = document.getElementById('ba');
									ba.parentNode.removeChild(ba);
								};
								image6.onclick = function () {
									window.imageall.remove();
									var er = document.getElementById('er');
									er.parentNode.removeChild(er);
									var san = document.getElementById('san');
									san.parentNode.removeChild(san);
									var si = document.getElementById('si');
									si.parentNode.removeChild(si);
									var wu = document.getElementById('wu');
									wu.parentNode.removeChild(wu);
									var liu = document.getElementById('yi');
									liu.parentNode.removeChild(liu);
									var qi = document.getElementById('qi');
									qi.parentNode.removeChild(qi);
									var ba = document.getElementById('ba');
									ba.parentNode.removeChild(ba);
								};
								image7.onclick = function () {
									window.imageall.remove();
									var er = document.getElementById('er');
									er.parentNode.removeChild(er);
									var san = document.getElementById('san');
									san.parentNode.removeChild(san);
									var si = document.getElementById('si');
									si.parentNode.removeChild(si);
									var wu = document.getElementById('wu');
									wu.parentNode.removeChild(wu);
									var liu = document.getElementById('liu');
									liu.parentNode.removeChild(liu);
									var qi = document.getElementById('yi');
									qi.parentNode.removeChild(qi);
									var ba = document.getElementById('ba');
									ba.parentNode.removeChild(ba);
								};
								image8.onclick = function () {
									window.imageall.remove();
									var er = document.getElementById('er');
									er.parentNode.removeChild(er);
									var san = document.getElementById('san');
									san.parentNode.removeChild(san);
									var si = document.getElementById('si');
									si.parentNode.removeChild(si);
									var wu = document.getElementById('wu');
									wu.parentNode.removeChild(wu);
									var liu = document.getElementById('liu');
									liu.parentNode.removeChild(liu);
									var qi = document.getElementById('qi');
									qi.parentNode.removeChild(qi);
									var ba = document.getElementById('yi');
									ba.parentNode.removeChild(ba);
								};
								('step 1');
								game.bossinfo.chongzheng = 999;
								player.smoothAvatar;
								('step 2');
								game.countPlayer(function (current) {
									if (current != game.me && current != game.boss && current != game.boss.nextSeat) {
										current.die();
									}
								});
								('step 3');
								game.me.chooseControl('开始挑战');
								_status.noswap = true;
								('step 4');
								//if(result.bool){
								var zhao = document.getElementById('yi');
								var zhao2 = document.getElementById('er');
								var zhao3 = document.getElementById('san');
								var zhao4 = document.getElementById('si');
								var zhao5 = document.getElementById('wu');
								var zhao6 = document.getElementById('liu');
								var zhao7 = document.getElementById('qi');
								var zhao8 = document.getElementById('ba');
								if (zhao) {
									zhao.parentNode.removeChild(zhao);
									player.storage.quedingtiaozhan = 1;
									game.log('找到了');
								} else if (zhao2) {
									zhao2.parentNode.removeChild(zhao2);
									player.storage.quedingtiaozhan = 2;
									game.log('找到了2');
								} else if (zhao3) {
									zhao3.parentNode.removeChild(zhao3);
									player.storage.quedingtiaozhan = 3;
									game.log('找到了3');
								} else if (zhao4) {
									zhao4.parentNode.removeChild(zhao4);
									player.storage.quedingtiaozhan = 4;
									game.log('找到了4');
								} else if (zhao5) {
									zhao5.parentNode.removeChild(zhao5);
									player.storage.quedingtiaozhan = 5;
									game.log('找到了5');
								} else if (zhao6) {
									zhao6.parentNode.removeChild(zhao6);
									player.storage.quedingtiaozhan = 6;
									game.log('找到了6');
								} else if (zhao7) {
									zhao7.parentNode.removeChild(zhao7);
									player.storage.quedingtiaozhan = 7;
									game.log('找到了7');
								} else if (zhao8) {
									zhao8.parentNode.removeChild(zhao8);
									player.storage.quedingtiaozhan = 8;
									game.log('找到了8');
								} else game.log('急急急');
								//}
								('step 5');
								if (player.storage.quedingtiaozhan > 0 && player.storage.quedingtiaozhan < 9) {
									switch (player.storage.quedingtiaozhan) {
										case 1: //鸟
											var bos = game.addPlayerQ('chendao');
											var bos2 = game.addPlayerQ('xiahoushi');
											var bos3 = game.addPlayerQ('re_guanyu');
											bos.isEnemiesOf(game.boss);
											bos.setIdentity('cai');
											bos2.isEnemiesOf(game.boss);
											bos2.setIdentity('cai');
											bos3.isEnemiesOf(game.boss);
											bos3.setIdentity('cai');
											break;
										case 2: //天
											var bos = game.addPlayerQ('jsp_huangyueying');
											var bos2 = game.addPlayerQ('dongbai');
											var bos3 = game.addPlayerQ('re_zhenji');
											bos.isEnemiesOf(game.boss);
											bos.setIdentity('cai');
											bos2.isEnemiesOf(game.boss);
											bos2.setIdentity('cai');
											bos3.isEnemiesOf(game.boss);
											bos3.setIdentity('cai');
											break;
										case 3: //龙
											var bos = game.addPlayerQ('re_simayi');
											var bos2 = game.addPlayerQ('yuejin');
											var bos3 = game.addPlayerQ('simalang');
											bos.isEnemiesOf(game.boss);
											bos.setIdentity('cai');
											bos2.isEnemiesOf(game.boss);
											bos2.setIdentity('cai');
											bos3.isEnemiesOf(game.boss);
											bos3.setIdentity('cai');
											break;
										case 4: //地
											var bos = game.addPlayerQ('re_sunquan');
											var bos2 = game.addPlayerQ('re_zhouyu');
											var bos3 = game.addPlayerQ('re_taishici');
											bos.isEnemiesOf(game.boss);
											bos.setIdentity('cai');
											bos2.isEnemiesOf(game.boss);
											bos2.setIdentity('cai');
											bos3.isEnemiesOf(game.boss);
											bos3.setIdentity('cai');
											break;
										case 5: //蛇
											var bos = game.addPlayerQ('ol_dongzhuo');
											var bos2 = game.addPlayerQ('zhangji');
											var bos3 = game.addPlayerQ('caiyong');
											bos.isEnemiesOf(game.boss);
											bos.setIdentity('cai');
											bos2.isEnemiesOf(game.boss);
											bos2.setIdentity('cai');
											bos3.isEnemiesOf(game.boss);
											bos3.setIdentity('cai');
											break;
										case 6: //风
											var bos = game.addPlayerQ('liubiao');
											var bos2 = game.addPlayerQ('re_huatuo');
											bos.isEnemiesOf(game.boss);
											bos.setIdentity('cai');
											bos2.isEnemiesOf(game.boss);
											bos2.setIdentity('cai');
											break;
										case 7: //虎
											var bos = game.addPlayerQ('jin_wangyuanji');
											var bos2 = game.addPlayerQ('jsp_guanyu');
											var bos3 = game.addPlayerQ('re_wangyi');
											bos.isEnemiesOf(game.boss);
											bos.setIdentity('cai');
											bos2.isEnemiesOf(game.boss);
											bos2.setIdentity('cai');
											bos3.isEnemiesOf(game.boss);
											bos3.setIdentity('cai');
											break;
										case 8: //云
											var bos = game.addPlayerQ('hetaihou');
											var bos2 = game.addPlayerQ('caiwenji');
											var bos3 = game.addPlayerQ('zhangrang');
											bos.isEnemiesOf(game.boss);
											bos.setIdentity('cai');
											bos2.isEnemiesOf(game.boss);
											bos2.setIdentity('cai');
											bos3.isEnemiesOf(game.boss);
											bos3.setIdentity('cai');
											break;
									}
									game.me.chooseControl('选择武将');
								} else game.log('急辣');
								('step 6');
								if (game.me == game.boss) {
									var list;
									if (_status.characterlist) {
										list = [];
										for (var i = 0; i < _status.characterlist.length; i++) {
											var name = _status.characterlist[i];
											if (!lib.character[name][4].includes('bossallowed')) list.push(name);
										}
									} else {
										list = get.gainableCharacters(function (info) {
											return info[4] != 'bossallowed';
										});
									}
									var players = game.players.concat(game.dead);
									for (var i of players) {
										list.remove(i.name);
										list.remove(i.name1);
										list.remove(i.name2);
									}
									list.remove('re_yuji');
									list.remove('xin_yuji');
									list.remove('re_yuanshu');
									list.remove('lingju');
									list.remove('buzhi');
									list.remove('huanghao');
									list.remove('zuoci');
									list.remove('re_zuoci');
									list.remove('jin_simashi');
									list.remove('guotufengji');
									list.remove('re_guotufengji');
									list.remove('jsp_guanyu');
									game.me
										.chooseButton(true)
										.set('ai', function (button) {
											return get.rank(button.link, true) - lib.character[button.link][2];
										})
										.set('createDialog', ['选择一名武将出战', [list.randomGets(12), 'character']]);
								}
								('step 7');
								player.init(result.links[0]);
								if (_status.characterlist) {
									_status.characterlist.remove(result.links[0]);
								}
								('step 8');
								if (!_status.olm_qmbz_list) lib.skill.olm_qmbz.initList();
								var skills = _status.olm_qmbz_list
									.filter(function (i) {
										return !game.boss.hasSkill(i, null, null, false);
									})
									.randomGets(8);
								var list = [];
								for (var skill of skills) {
									list.push([skill, `<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">【${get.translation(skill)}】</div><div>` + lib.translate[`${skill}_info`] + '</div></div>']);
								}
								var next = game.me.chooseButton(['选择获得至多三个技能', [list, 'textbutton']]);
								next.set('forced', true).set('selectButton', [0, 3]);
								('step 9');
								if (result.links?.length) {
									var skills = result.links;
									game.log(game.me, '获得了以下技能:', '#g' + get.translation(skills));
									player.addSkill(skills.slice(0));
								}
								('step 10');
								('step 11');
								game.boss.addSkill('myx_wujie');
								game.boss.addSkill('oldniepan');
								var num = 0;
								game.countPlayer(function (current) {
									if (current != game.boss) {
										if (num != 1) current.addSkill('olm_qmbz_sijiesuicong');
										else current.addSkill('myx_wujie');
										num++;
									}
								});
								('step 12');
								game.countPlayer(function (current) {
									current.gainMaxHp(2);
									current.recover(2);
									if (current != game.boss) current.changeHujia(5);
								});
								('step 13');
								game.countPlayer(function (current) {
									current.discard(current.countCards('hej'));
									current.draw(2);
								});
							},
						},
						olm_qmbz_sijiesuicong: {
							forced: true,
							popup: false,
							trigger: {
								player: 'phaseDrawBegin1',
							},
							forced: true,
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num += 2;
							},
						},
					},
				};
				lib.config.all.characters.add('命运线');
				lib.config.characters.add('命运线');
				for (var i in QQQ.character) {
					QQQ.character[i][4].add(`ext:命运线/image/${i}.jpg`)
				}
				lib.translate['命运线_character_config'] = `命运线`;
				return QQQ;
			});
		},
		config: {
			死亡移除: {
				name: '<span class="Qmenu">死亡移除</span>',
				intro: '死亡后移出游戏',
				init: true,
				onclick(result) {
					game.saveConfig('dieremove', result);
				},
			},
			//"myx_zhongyeguanxingkapai":{"name":"挑战模式专属卡牌(需重启)","intro":"适用模式:仲夜观星,超时空密探<br>打开后启动对应挑战模式的卡牌禁用:诸葛连弩改为连弩<br>不可与其他卡牌修改同时开启!","init":"close","item":{"open":"打开","close":"关闭"}},
			myx_tiaozhanmoshi: {
				name: '<b><font color=\"#ffed22\">目前已有挑战模式<font size="5px">⇨</font></span>',
				intro: '查看挑战模式',
				clear: true,
				onclick() {
					if (this.myx_tiaozhanmoshi == undefined) {
						var more = ui.create.div('.myx_tiaozhanmoshi', '<div style="border: 1px solid blue">' + '<font size=2px>' + '<b><font color=\"#00FFFF\">挑战模式<br>' + '【神怒降世】:Online2022年神怒降世pve模式' + '【戾火浮屠】:新服2022年虎牢关pve模式纪念版<br>' + '【仲夜观星】:新服2021年龙舟活动2.0pve模式纪念版<br>' + '【超时空密探】:新服2021年刺客伍六七联动活动pve模式纪念版<br>' + '</font></div>');
						this.parentNode.insertBefore(more, this.nextSibling);
						this.myx_tiaozhanmoshi = more;
						this.innerHTML = '<b><font color=\"#ffed22\">目前已有挑战模式⇓</font>';
					} else {
						this.parentNode.removeChild(this.myx_tiaozhanmoshi);
						delete this.myx_tiaozhanmoshi;
						this.innerHTML = '<b><font color=\"#ffed22\">目前已有挑战模式<font size="5px">⇨</font></span>';
					}
				},
			},
			myx_olwujiangjm: {
				name: 'Online武将包(需重启)',
				intro: '开启后,无名杀本体的武将的划分将按照ol的武将包和分类进行,同时替换武将包标题的样式,还原三国杀Online样式.<br>不可与其他非本扩展的修改武将包的相关功能同时开启!',
				init: false,
			},
			myx_gengxin: {
				name: '<b><font color=\"#00FFFF\">更新内容</span>',
				intro: '查看本次更新内容',
				clear: true,
				onclick() {
					if (this.myx_gengxin == undefined) {
						var more = ui.create.div('.myx_gengxin', '<div style="border: 3px solid blue">' + '<font size=2px>' + '<b><font color=\"#ff8400\">-新增挑战模式【奇门八阵】:毛坯版<br>' + '</font></div>');
						this.parentNode.insertBefore(more, this.nextSibling);
						this.myx_gengxin = more;
						this.innerHTML = '<b><font color=\"#ffed22\">本次更新内容⇓</font>';
					} else {
						this.parentNode.removeChild(this.myx_gengxin);
						delete this.myx_gengxin;
						this.innerHTML = '<b><font color=\"#00FFFF\">更新内容</font>';
					}
				},
			},
			myx_name: { name: '武将名前缀', intro: '选择是否开启武将名字的命运线前缀M', init: 'open', item: { open: '打开', close: '关闭' } },
			myx_zhugongqianghua: { name: '主公武将强化', intro: '强化部分主公武将,避免反贼杀', init: 'open', item: { open: '打开', close: '关闭' } },
			myx_zhugongji: {
				name: '<b><font color=\"#ffed22\">主公强化<font size="5px">⇨</font></span>',
				intro: '查看主公技能强化',
				clear: true,
				onclick() {
					if (this.myx_zhugongji == undefined) {
						var more = ui.create.div('.myx_zhugongji', '<div style="border: 3px solid blue">' + '<font size=2px>' + '<b><font color=\"#ff8400\">主公技能强化开关,开启后可获得部分主公武将的技能强化(需重启)<br>' + '-当前已强化技能:' + '〖激将〗,〖护驾〗,〖诏缚〗<br>' + '</font></div>');
						this.parentNode.insertBefore(more, this.nextSibling);
						this.myx_zhugongji = more;
						this.innerHTML = '<b><font color=\"#ffed22\">查看主公技能强化⇓</font>';
					} else {
						this.parentNode.removeChild(this.myx_zhugongji);
						delete this.myx_zhugongji;
						this.innerHTML = '<b><font color=\"#ffed22\">主公强化<font size="5px">⇨</font></span>';
					}
				},
			},
			myx_lishi: {
				name: '历史更新内容<font size="5px">⇨</font>',
				intro: '查看历史更新',
				clear: true,
				onclick() {
					if (this.myx_lishi == undefined) {
						var more = ui.create.div('.myx_lishi', '<div style="border: 1px solid blue">' + '<font size=2px>' + '-2022/12/29,新增挑战模式【奇门八阵】(毛坯版),为了你的游戏体验,请务必先查看关卡说明!' + '-2022/12/25,新增武将<span class="bluetext">东吴八绝【M赵达】</span><br>' + '新增挑战模式【神武再世】,还原Online新玩法<兽群强化>和<气势技能>,模式中同名神势力武将均可装备专属神武,同时增加新服神将【神姜维】的专属神武<br>' + '-2022/12/15,新增武将<span class="bluetext">东吴八绝【M宋寿】</span><br>' + '-2022/11/26,新增武将<span class="bluetext">【M魏华存】</span>,新增功能<span class="bluetext">【OL武将包样式和分类】</span><br>' + '-2022/11/22,优化<span class="bluetext">挑战模式【超时空密探】</span>,新增密探变身机制和吴势力主公<br>' + '-2022/11/12,新增<span class="bluetext">挑战模式【超时空密探1.0】:2021年新服刺客伍六七联动活动纪念模式</span><br>' + '-2022/11/16,新增【仲夜观星】纪念武将<span class="bluetext">【M黄承彦】</span><br>' + '-2022/11/12,新增<span class="bluetext">挑战模式【仲夜观星】:2021年新服龙舟活动2.0纪念模式</span><br>' + '-2022/11/8,新增<span class="bluetext">【戾火浮屠】模式中新将灵:关索</span><br>' + '-2022/11/7,新增了<span class="bluetext">挑战模式【戾火浮屠】:2022新服虎牢关纪念模式</span>,并且挑战方自带自选将灵和五阶特权<br>' + '-2022/11/6,重置<span class="bluetext">武将专属技能配音</span><br>' + '-2022/11/6,新增武将<span class="bluetext">【M诸葛诞】</span><br>' + '-2022/10/27,新增武将<span class="bluetext">【M蒲元】</span><br>' + '-2022/10/26,新增新服活动场武将虎牢关2022<span class="bluetext">【神吕布】</span>和他的专属装备<br>' + '-2022/10/23,新增传奇武将<span class="bluetext">【M贾诩】</span><br>' + '-2022/10/13,增加<span class="bluetext">主公技增强功能</span><br>' + '-2022/10/12,新增武将<span class="bluetext">【M左慈】</span><br>' + '-2022/10/1,新增传奇武将<span class="bluetext">【M赵云】</span><br>' + '-2022/8/27,命运线武将拓展建包</font></div>');
						this.parentNode.insertBefore(more, this.nextSibling);
						this.myx_lishi = more;
						this.innerHTML = '历史更新内容<font size="5px">⇓</font></div>';
					} else {
						this.parentNode.removeChild(this.myx_lishi);
						delete this.myx_lishi;
						this.innerHTML = '历史更新内容</font>';
					}
				},
			},
		},
		package: {
			card: {
				card: {
					olm_qilinwanlanjian: {
						//derivation:'shen_jiangwei',
						type: 'equip',
						subtype: 'equip1',
						distance: { attackFrom: -8 },
						ai: {
							equipValue(card, player) {
								if (player.name1 == 'shen_jiangwei' || player.name2 == 'shen_jiangwei') return 12;
								else if (player.group == 'shu') return 8.5;
								else return 6;
							},
							basic: {
								equipValue: 6,
							},
						},
						skills: ['olm_qilinwanlanjian'],
						fullskin: true,
					},
					myx_boss_liannu: {
						type: 'equip',
						subtype: 'equip1',
						ai: {
							order() {
								return get.order({ name: 'sha' }) - 0.1;
							},
							equipValue(card, player) {
								if (player._zhuge_temp) return 1;
								player._zhuge_temp = true;
								var result = (function () {
									if (
										!game.hasPlayer(function (current) {
											return get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
										})
									) {
										return 1;
									}
									if (player.hasSha() && _status.currentPhase == player) {
										if ((player.getEquip('myx_boss_liannu') && player.countUsed('sha')) || player.getCardUsable('sha') == 0) {
											return 10;
										}
									}
									var num = player.countCards('h', 'sha');
									if (num > 1) return 6 + num;
									return 3 + num;
								})();
								delete player._zhuge_temp;
								return result;
							},
							basic: {
								equipValue: 5.5,
							},
							tag: {
								valueswap: 1,
							},
						},
						skills: ['myx_boss_liannu'],
						fullskin: true,
					},
					myx_niepoling: {
						type: 'equip',
						subtype: 'equip5',
						ai: {
							basic: {
								equipValue: 9,
							},
						},
						skills: ['myx_niepoling'],
						fullskin: true,
					},
					myx_feijiangswj: {
						//derivation:'myx_hulaoguan2022lvbu',
						type: 'equip',
						fullskin: true,
						modeimage: 'boss',
						subtype: 'equip1',
						distance: { attackFrom: -1 },
						skills: ['myx_feijiangswj'],
						ai: {
							equipValue: 8,
						},
					},
					//感谢紫乔伏魔金刚杵的图()
					myx_fumojingang: {
						//derivation:'myx_hulaoguan2022lvbu',
						type: 'equip',
						fullskin: true,
						modeimage: 'boss',
						subtype: 'equip1',
						distance: { attackFrom: -2 },
						skills: ['myx_fumojingang'],
						ai: {
							equipValue: 4.9,
						},
					},
					//感谢极略三国拓展包的梅,侵删
					jlsgqs_mei: {
						audio: true,
						fullskin: true,
						type: 'basic',
						enable: true,
						savable(event, player) {
							return _status.event.dying != player;
						},
						selectTarget() {
							if (_status.event.type == 'dying') return [-1, -1];
							return [1, 1];
						},
						filterTarget: true,
						modTarget: true,
						content() {
							'step 0';
							if (target.hp > 1) target.draw(2);
							else {
								target.recover();
							}
							('step 1');
							if (target.hp > 0 && event.getParent(2).type == 'dying') target.draw();
						},
						ai: {
							basic: {
								order(card, player) {
									return get.order({ name: 'tao' }) - 0.5;
									// if (player.hasSkillTag('pretao')) return 5;
									// return 2;
								},
								useful: [8, 6.5],
								value: [8, 6.5],
							},
							result: {
								target(player, target) {
									// if(player==target&&player.hp<=0) return 2;
									if (target.hp == target.maxHp && target.hp == 1) {
										return 0;
									}
									var nh = target.countCards('h');
									var keep = false;
									if (nh <= target.hp) {
										keep = true;
									} else if (nh == target.hp + 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
										keep = true;
									}
									var mode = get.mode();
									if (target.hp >= 2 && keep && target.hasFriend()) {
										if (target.hp > 2) return 0;
										if (target.hp == 2) {
											for (var i of game.players) {
												if (target != i && get.attitude(target, i) >= 3) {
													if (i.hp <= 1) return 0;
													if (mode == 'identity' && i.isZhu && i.hp <= 2) return 0;
												}
											}
										}
									}
									if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
									var att = get.attitude(player, target);
									if (att < 3 && att >= 0 && player != target) return 0;
									var tri = _status.event.getTrigger();
									if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
										if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
											var num = 0;
											for (let aplayer of game.players) {
												if (aplayer.identity == 'fan') {
													num += aplayer.countCards('h', 'tao');
													if (num > 2) return 2;
												}
											}
											if (num > 1 && player == target) return 2;
											return 0;
										}
									}
									if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
										if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
											return 0;
										}
									}
									if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
										return 0;
									}
									return 2;
								},
							},
							tag: {
								recover: 1,
								save: 1,
							},
						},
					},
					shangshan: {
						fullskin: true,
						type: 'trick',
						enable: true,
						filterTarget(card, player, target) {
							return player != target && target.countCards('hej') > 0;
						},
						content() {
							'step 0';
							if (target.countCards('hej')) {
								var next = player.discardPlayerCard('hej', target, true);
								next.visible = true;
								next.delay = false;
							} else {
								event.goto(2);
							}
							('step 1');
							if (result.bool) {
							}
							('step 2');
							target.draw(false);
							target.$draw();
							('step 3');
							player.draw();
						},
						ai: {
							order: 9.5,
							value: 6,
							useful: 3,
							result: {
								target(player, target) {
									if (get.attitude(player, target) > 0) {
										var js = target.getCards('j');
										if (js.length) {
											var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
											if (jj.name == 'shangshan') return 3;
											if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
												return 0;
											}
											return 3;
										}
									}
									var es = target.getCards('e');
									var nh = target.countCards('h');
									var noe = es.length == 0 || target.hasSkillTag('noe');
									var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.hp < target.maxHp;
									var noh = nh == 0 || target.hasSkillTag('noh');
									if (noh && noe) return 0;
									if (noh && noe2) return 0.01;
									if (get.attitude(player, target) <= 0) return target.countCards('he') ? -1.5 : 1.5;
									return 0.1;
								},
							},
						},
					},
					shandianfengbao: {
						fullskin: true,
						type: 'trick',
						enable: true,
						cardnature: 'thunder',
						filterTarget(card, player, target) {
							if (player != game.me && player.countCards('h') < 2) return false;
							return target.countCards('h') > 0 && target != player;
						},
						content() {
							'step 0';
							if (target.countCards('h') == 0) {
								event.finish();
								return;
							}
							var rand = Math.random() < 0.5;
							target.chooseCard(true).ai = function (card) {
								if (rand) return Math.random();
								return get.value(card);
							};
							('step 1');
							event.dialog = ui.create.dialog(get.translation(target.name) + '展示的手牌', result.cards);
							event.card2 = result.cards[0];
							event.videoId = lib.status.videoId++;
							game.addVideo('cardDialog', null, [get.translation(target.name) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
							game.log(target, '展示了', event.card2);
							player.chooseToDiscard(
								function (card) {
									return get.color(card) == get.color(_status.event.parent.card2);
								},
								function (card) {
									if (get.damageEffect(target, player, player, 'thunder') > 0) {
										return 6 - get.value(card, _status.event.player);
									}
									return -1;
								}
							).prompt = false;
							('step 2');
							if (result.bool) {
								target.damage('thunder');
							} else {
								target.addTempSkill('huogong2');
							}
							game.addVideo('cardDialog', null, event.videoId);
							event.dialog.close();
						},
						ai: {
							basic: {
								order: 4,
								value: [3, 1],
								useful: 1,
							},
							wuxie(target, card, player, current, state) {
								if (get.attitude(current, player) >= 0 && state > 0) return false;
							},
							result: {
								player(player) {
									var nh = player.countCards('h');
									if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
										if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'shandianfengbao' }, player)) {
											return -10;
										}
										if (_status.event.skill) {
											var viewAs = get.info(_status.event.skill).viewAs;
											if (viewAs == 'shandianfengbao') return -10;
											if (viewAs && viewAs.name == 'shandianfengbao') return -10;
										}
									}
									return 0;
								},
								target(player, target) {
									if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
									if (player.countCards('h') <= 1) return 0;
									if (target == player) {
										if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'shandianfengbao' }, player)) {
											return -1.5;
										}
										if (_status.event.skill) {
											var viewAs = get.info(_status.event.skill).viewAs;
											if (viewAs == 'shandianfengbao') return -1.5;
											if (viewAs && viewAs.name == 'shandianfengbao') return -1.5;
										}
										return 0;
									}
									return -1.5;
								},
							},
							tag: {
								damage: 1,
								thunderDamage: 1,
								natureDamage: 1,
								norepeat: 1,
							},
						},
					},
					miaoshou: {
						fullskin: true,
						enable: true,
						filterTarget(card, player, target) {
							return target.hp < target.maxHp;
						},
						type: 'trick',
						content() {
							'step 0';
							target.judge(function (card) {
								return get.color(card) == 'red' ? 1 : 0;
							});
							('step 1');
							if (result.bool) {
								target.recover();
							} else {
								target.draw(2);
							}
						},
						ai: {
							order: 4,
							value: [7, 3],
							useful: [6, 3],
							result: {
								target(player, target) {
									var eff = get.recoverEffect(target, player, target);
									if (eff <= 0) return 0;
									var num = target.maxHp - target.hp;
									if (num < 1) return 0;
									if (num == 1) return 1;
									if (target.hp == 1) return 2.5;
									return 2;
								},
							},
							tag: {
								recover: 1,
							},
						},
					},
					xinghuoliaoyuan: {
						fullskin: true,
						type: 'trick',
						enable: true,
						filterTarget: true,
						content() {
							'step 0';
							target.damage('fire');
							('step 1');
							var hs = player.getCards('h');
							if (hs.length) {
								player.discard(hs.randomGet());
							}
						},
						ai: {
							basic: {
								order: 1.8,
								value: [6, 1],
								useful: [4, 1],
							},
							result: {
								player(player, target) {
									if (player == target) return -1;
									if (player.countCards('h') >= player.hp) return -0.1;
									if (player.countCards('h') > 1) return -0.5;
									return 0;
								},
								target: -1,
							},
							tag: {
								damage: 1,
								fireDamage: 1,
								natureDamage: 1,
							},
						},
					},
					muyuhuichun: {
						fullskin: true,
						enable: true,
						filterTarget: true,
						type: 'trick',
						content() {
							'step 0';
							if (target.hp < target.maxHp) {
								target.recover();
							} else {
								target.changeHujia();
							}
							('step 1');
							target.draw();
						},
						ai: {
							order: 8,
							value: [7, 3],
							useful: [6, 3],
							result: {
								target(player, target) {
									var eff = get.recoverEffect(target, player, target);
									if (eff <= 0) return 0;
									var num = target.maxHp - target.hp;
									if (num < 1) return 0;
									if (num == 1) return 1;
									if (target.hp == 1) return 2.5;
									return 2;
								},
							},
							tag: {
								recover: 1,
							},
						},
					},
					leitingwanjun: {
						fullskin: true,
						type: 'trick',
						enable: true,
						selectTarget: -1,
						filterTarget(card, player, target) {
							return target != player;
						},
						reverseOrder: true,
						content() {
							'step 0';
							target.chooseToDiscard([1], 'he').ai = function (card) {
								if (get.damageEffect(target, player, target, 'thunder') >= 0) {
									if (target.hasSkillTag('maixie')) {
										if (ui.selected.cards.length) return 0;
									} else {
										return 0;
									}
								}
								if (player.hasSkillTag('notricksource')) return 0;
								if (target.hasSkillTag('notrick')) return 0;
								if (card.name == 'tao') return 0;
								if (target.hp == 1 && card.name == 'jiu') return 0;
								if (get.type(card) != 'basic') {
									return 10 - get.value(card);
								}
								return 8 - get.value(card);
							};
							('step 1');
							if (!result.bool || result.cards.length < 1) {
								if (result.cards?.length) target.damage(1 - result.cards.length, 'thunder');
								else target.damage(1, 'thunder');
							}
						},
						ai: {
							basic: {
								order: 7,
								useful: [5, 1],
							},
							result: {
								target(player, target) {
									if (target.hasSkillTag('nothunder')) return 0;
									if (player.hasUnknown(1)) return 0;
									var nh = target.countCards('he');
									if (nh == 1) return -3;
									if (nh == 0) return -4;
									return -2;
								},
							},
							tag: {
								damage: 1,
								natureDamage: 1,
								thunderDamage: 1,
								multitarget: 1,
								multineg: 1,
								discard: 2,
								loseCard: 2,
							},
						},
					},
					shenyujiangshi: {
						fullskin: true,
						type: 'trick',
						enable: true,
						selectTarget: -1,
						cardcolor: 'black',
						reverseOrder: true,
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							'step 0';
							//if(target.countCards('he')>0){
							//target.chooseToDiscard('he','true');
							//}
							if (target.countDiscardableCards(player, 'he')) {
								player.discardPlayerCard('he', target, true);
								//target.chooseToDiscard('he','true');
							}
							('step 1');
							target.draw();
							('step 2');
							if (!player.hasSkill('shenyu2')) {
								player.draw();
								player.addTempSkill('shenyu2');
							}
						},
						ai: {
							basic: {
								order() {
									return 10;
								},
								useful: [3, 1],
								value: 3.2,
							},
							result: {
								target: 0.4,
							},
							tag: {
								multitarget: 1,
							},
						},
					},
					lihuomieshi: {
						audio: true,
						fullskin: true,
						type: 'trick',
						enable: true,
						selectTarget: -1,
						reverseOrder: true,
						filterTarget(card, player, target) {
							return target != player;
						},
						content() {
							'step 0';
							if (typeof event.baseDamage != 'number') event.baseDamage = 1;
							if (event.directHit) event._result = { bool: false };
							else {
								var next = target.chooseToRespond({ name: 'shan' });
								next.set('ai', function (card) {
									var evt = _status.event.parent;
									if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
									if (evt.player.hasSkillTag('notricksource')) return 0;
									if (evt.target.hasSkillTag('notrick')) return 0;
									if (evt.target.hasSkillTag('noShan')) {
										return -1;
									}
									return get.order(card);
								});
								next.autochoose = lib.filter.autoRespondShan;
							}
							('step 1');
							if (result.bool == false) {
								target.damage('fire');
							}
						},
						ai: {
							wuxie(target, card, player, viewer) {
								if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
									if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
								}
							},
							basic: {
								order: 9,
								useful: 1,
								value: 5,
							},
							result: {
								target_use(player, target) {
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
				translate: {
					myx_feijiangswj: '飞将神威剑',
					myx_feijiangswj_info: '你使用【杀】造成伤害时,改为流失体力.每当有角色流失1点体力,你摸一张牌.',
					myx_niepoling: '幽火摄魄令',
					myx_niepoling_info: '出牌阶段结束时,你可以对所有敌方角色造成一点伤害,你回复等同于造成伤害数量的体力.',
					myx_boss_liannu: '连弩',
					myx_boss_liannu_info: '锁定技,你于出牌阶段内可以使用至多4张【杀】.',
					jlsgqs_mei: '梅',
					jlsgqs_mei_info: '出牌阶段,对一名角色使用,若其体力值大于1,则摸两张牌;否则其回复1点体力.一名其他角色处于濒死状态时,对其使用,其回复1点体力,若因此脱离濒死状态,该角色摸一张牌.',
					shangshan: '上善若水',
					shangshan_info: '出牌阶段,你可以观看一名其他角色的手牌,并弃置其区域内的一张牌,其与你各摸一张牌',
					shandianfengbao: '闪电风暴',
					shandianfengbao_info: '对一名其他角色使用,目标角色展示一张手牌,若你能弃置一张与其所展示牌相同颜色的手牌,你对其造成1点雷电伤害.',
					miaoshou: '妙手回春',
					miaoshou_info: '对一名受伤的角色使用,目标角色进行一次判定,若结果为红色,其回复一点体力,否则其摸2张牌',
					xinghuoliaoyuan: '星火燎原',
					xinghuoliaoyuan_info: '对一名角色造成一点火焰伤害,随机弃置一张手牌',
					muyuhuichun: '沐浴回春',
					muyuhuichun_info: '对一名角色使用,若该角色不满体力,则其回复一点体力;否则,其获得一点护甲,该角色摸1张牌.',
					leitingwanjun: '雷霆万钧',
					leitingwanjun_info: '出牌阶段,对所有其他角色使用.每名目标角色需弃置一张牌,否则受到1点雷电伤害.',
					shenyujiangshi: '神雨降世',
					shenyujiangshi_info: '出牌阶段,对所有角色使用.你弃置其他角色各一张牌,所有角色各摸一张牌.',
					lihuomieshi: '离火灭世',
					lihuomieshi_info: '出牌阶段,对所有其他角色使用.每名目标角色需打出一张【闪】,否则受到1点火焰伤害.',
					myx_fumojingang: '伏魔金刚杵',
					myx_fumojingang_info: '你使用【杀】指定目标后,令其防具无效.你对有防具的角色造成的伤害+1.',
					olm_qilinwanlanjian: '麒麟挽澜剑',
					olm_qilinwanlanjian_info: '弃牌阶段开始时,你可以摸2张牌并弃置1张牌,你可以视为对一名角色使用一张无距离限制的火【杀】.',
				},
			},
			intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span><img style=width:238px src=extension/命运线/image/到时候做张图.jpg><div></img><ul><span style='font-family: yuanli'><li><span style='color: #ffed22'>无</span><span style='color: #ffed22'>名</span><span style='color: #ffed22'>杀</span><span style='color: #ffed22'>是一款完全免</span><span style='color: #ffed22'>费的游</span><span style='color: #ffed22'>戏!任何本体或扩</span><span style='color: #ffed22'>展的作</span><span style='color: #ffed22'>者都</span><span style='color: #ffed22'>不</span><span style='color: #ffed22'>会通</span><span style='color: #ffed22'>过任</span><span style='color: #ffed22'>何渠</span><span style='color: #ffed22'>道或方</span><span style='color: #ffed22'>法以任</span><span style='color: #ffed22'>何理</span><span style='color: #ffed22'>由或借</span><span style='color: #ffed22'>口收</span><span style='color: #ffed22'>取哪</span><span style='color: #ffed22'>怕一</span><span style='color: #ffed22'>分</span><span style='color: #ffed22'>钱!</span><li>武将评级仅按照作者实战强度(或者怨念程度x)划分</span><li>该拓展没有露头皮肤包</span><li>有意见和建议的欢迎来b站找我<li>拓展包压缩包含有一张txt的使用指南,希望先读后玩</span><li>当前版本:V2.1.10</span></ul><li><span style='color: #ffed22'>本拓</span><span style='color: #ffed22'>展不</span><span style='color: #ffed22'>授</span><span style='color: #ffed22'>权给任</span><span style='color: #ffed22'>何懒</span><span style='color: #ffed22'>人包!如</span><span style='color: #ffed22'>果你</span><span style='color: #ffed22'>在懒</span><span style='color: #ffed22'>人包发</span><span style='color: #ffed22'>现本拓</span><span style='color: #ffed22'>展,说</span><span style='color: #ffed22'>明这</span><span style='color: #ffed22'>个懒</span><span style='color: #ffed22'>人</span><span style='color: #ffed22'>包有</span><span style='color: #ffed22'>问</span><span style='color: #ffed22'>题!</span></span></div>",
			author: "<span style='color: #db4ae8'>士季<br></span><span style='font-family: yuanli;color: #ffed22'>b站:非凡欧德内里</span><br>感谢明月,西瓜,rintim,铝宝等大佬的指导(排名不分先后)",
			version: 'v2.1.10',
			changeLog: `<span class="bluetext">2022/12/29日更新</span><br>
					-新增挑战模式【奇门八阵】.</span><br>
                    -<span class="bluetext"></span><br>
                       `,
		},
	};
});

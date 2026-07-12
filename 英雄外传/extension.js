import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '英雄外传',
		content(config, pack) {
			lib.group.push('xf');
			lib.translate.xf = '西';
			lib.groupnature.xf = 'ice';
			//lib.translate.xfColor='thunder';
			lib.group.push('guo');
			lib.translate.guo = '果';
			lib.groupnature.guo = 'poison';
			lib.skill._yxs_dieaudio = {
				forced: true,
				popup: false,
				lastDo: true,
				forceDie: true,
				trigger: {
					player: 'dieBegin',
				},
				filter(event, player) {
					if (event.player.name && event.player.name.indexOf('yxs_') == 0) {
						return true;
					}
					return false;
				},
				content() {
					game.playAudio('../extension/英雄外传/audio', trigger.player.name);
				},
			};
			game.playXSAudio = function (skill, num) {
				var lt = [];
				for (var i = 0; i < num; i++) {
					lt.push(i);
				}
				var tp = lt.randomGet();
				game.playAudio('../extension/英雄外传/audio', skill + tp);
			};
			lib.rank.rarity.rare.addArray(['yxs_flh', 'yxs_ajyh', 'yxs_homeless', 'yxs_yujiz', 'yxs_sbdk', 'yxs_lhqd', 'yxs_lysl', 'yxs_ttkm', 'yxs_ksl']);
			lib.rank.rarity.epic.addArray(['yxs_ssqx', 'yxs_gongsunyan', 'yxs_zhuyuanzhang', 'yxs_yangguang', 'yxs_drj', 'yxs_szbf', 'yxs_lvbuz', 'yxs_caocaoz', 'yxs_liyuanba', 'yxs_yzq', 'yxs_ylsb', 'yxs_bsm', 'yxs_exj', 'yxs_ashi', 'yxs_sls', 'yxs_ylsd', 'yxs_wwj', 'yxs_anni', 'yxs_ve']);
			lib.rank.rarity.legend.addArray(['boss_lvbu3', 'yxs_baiqi', 'yxs_guiguzi', 'yxs_guanyu', 'yxs_zhangyi', 'yxs_sunquanz', 'yxs_npl', 'yxs_yxw', 'yxs_dfq', 'yxs_wns', 'LOLIshenganning', 'yxs_xiangyuz', 'yxs_ysw']);
			lib.translate.whjx = '君临天下';
			lib.translate.zhj = '兴国安邦';
			lib.translate.xysz = '骁勇善战';
			lib.translate.yycs = '巾帼须眉';
			lib.translate.dfyb = '群雄逐鹿';
			lib.translate.cytp = '苦雨凄风';
			lib.translate.whcl = '卧虎藏龙';
			lib.translate.rjem = '人间恶魔';
			lib.translate.gsyl = '英灵后殿';
			lib.translate.kyss = '可以色色';
			lib.characterSort.英雄外传 = {
				whjx: ['yxs_ajyh', 'yxs_ysw', 'yxs_npl', 'yxs_ylsb', 'yxs_ttkm', 'yxs_ksl'],
				zhj: ['yxs_szbf', 'yxs_drj', 'yxs_bsm'],
				xysz: ['yxs_baiqi', 'yxs_xiangyuz', 'yxs_guanyu', 'yxs_lvbuz', 'yxs_ylsd'],
				yycs: ['yxs_yujiz', 'yxs_flh', 'yxs_exj', 'yxs_anni'],
				dfyb: ['yxs_caocaoz', 'yxs_sunquanz', 'yxs_ssqx', 'yxs_lhqd'],
				cytp: ['yxs_ashi', 'yxs_lysl', 'yxs_sbdk'],
				whcl: ['yxs_guiguzi', 'yxs_dfq', 'yxs_homeless'],
				rjem: ['yxs_jack', 'yxs_ve', 'yxs_sls', 'yxs_wwj'],
				gsyl: ['yxs_yzq', 'yxs_wns', 'yxs_liyuanba', 'LOLIshenganning'],
				kyss: ['yxs_gdq', 'yxs_myy', 'yxs_xushi', 'yxs_gyp', 'yxs_wyj', 'yxs_wr', 'yxs_xhs', 'yxs_bmh', 'yxs_gz', 'yxs_wgt', 'yxs_zf', 'yxs_zj', 'yxs_fhh', 'yxs_wy', 'yxs_llq', 'yxs_dc', 'yxs_xq', 'yxs_tj', 'yxs_hth', 'yxs_lbb', 'yxs_zr', 'yxs_cy', 'yxs_cfr', 'yxs_yy', 'yxs_zgg'],
			};
		},
		precontent() {
			window.reWZ_import = function (func) {
				func(lib, game, ui, get, ai, _status);
			};
			lib.init.js(
				'extension/英雄外传/cards.js',
				null,
				function () {
					//alert('导入成功');
				},
				function () {
					alert('卡牌未能成功导入');
				},
			);
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '英雄外传',
					connect: true,
					character: {
						LOLIshenganning: ['female', 'shen', 4, ['poxiloli', 'jieyingloli', 'lolizhongjie'], ['boss', 'bossallowed', 'des:娘化神甘宁~']],
						yxs_ajyh: ['female', 'xf', 3, ['yxsseyou', 'yxssheshi'], []],
						yxs_npl: ['male', 'xf', 4, ['tonglingnpl', 'fanpunpl', 'mashu'], []],
						//朱元璋 yxs_zhuyuanzhang:['male','qun',4,['jingjia','qiangyun','zhuxin'], []],
						yxs_flh: ['female', 'shu', 4, ['yxshanqiang', 'yxsbiaoqi'], []],
						yxs_drj: ['male', 'wei', 3, ['jiujian', 'yxsshentan', 'yxskongju'], []],
						yxs_szbf: ['male', 'wu', '3/4', ['yxsbingsheng', 'yxstaolue'], []],
						yxs_homeless: ['male', 'xf', 3, ['yxsyanyi', 'yxsjiean'], []],
						yxs_guiguzi: ['male', 'qun', 3, ['yxszongheng', 'yxsbaihe', 'yxsmiying'], []],
						//yxs_yangguang:['male','qun',3,['jjujian','yaoyi','shiqin'], []],
						yxs_ysw: ['male', 'xf', 4, ['zyhufuysw', 'hanbeiysw'], []],
						yxs_guanyu: ['male', 'shu', 4, ['yywusheng', 'bbudao', 'yxssuohun'], []],
						yxs_sunquanz: ['male', 'wu', 4, ['yxshushi', 'yxszhiheng'], []],
						//boss_lvbu3:['male','shen',6,['wushuang','shenqu','jiwu'], []],
						//张仪 yxs_zhangyi:['male','qun',3,['yyxslianheng','yxsxiongbian'], []],
						//公孙衍 yxs_gongsunyan:['male','wei',3,['yyxshezong','yxsjizhan','yxsxishou'], []],
						yxs_baiqi: ['male', 'qun', 4, ['yxsjianmie', 'yxsshasheng', 'yxstucheng'], []],
						yxs_ssqx: ['female', 'qun', 4, ['yxsyuehou', 'yxsjunshen'], []],
						// yxsspguanyu:['male','shu',4,['yywusheng','bbudao','yxssuohun'], []],
						yxs_caocaoz: ['male', 'wei', 4, ['yxsxiandao', 'yxsjianxiong'], []],
						yxs_lvbuz: ['male', 'qun', 4, ['yxsxiaoyong', 'yxssheji', 'yxsfeijiang'], []],
						yxs_liyuanba: ['male', 'shen', '10/12', ['yxsshengli', 'yxsjulei'], []],
						//林冲yxs_linchong:['male','wei','4/5',['yxsbaotou','yxshmq'], []],
						yxs_yujiz: ['female', 'qun', 3, ['yxsjianwu', 'yxsshesheng', 'yxsjuebie'], []],
						yxs_xiangyuz: ['male', 'qun', '5/6', ['yxsbawang', 'yxsguixiong', 'yxspofu'], []],
						yxs_yzq: ['female', 'wei', 3, ['yxshuanhuo', 'yxsshehun'], []],
						yxs_ylsb: ['female', 'xf', 4, ['yxsqingjiao', 'yxszhenghuang'], []],
						yxs_dfq: ['male', 'xf', 3, ['yxsboshi', 'yxsfuxing'], []],
						yxs_bsm: ['male', 'xf', 4, ['yxsdetong', 'yxstiexiang'], []],
						yxs_sbdk: ['male', 'xf', 6, ['yxsjiasuo', 'yxsfanpan'], []],
						yxs_wns: ['female', 'shen', 3, ['yxsyonglian', 'yxsjuezi'], []],
						yxs_lysl: ['male', 'xf', '3/4', ['yxshuangying', 'yxshuangying2', 'yxschuxing'], []],
						yxs_lhqd: ['female', 'qun', 4, ['yxsbaici', 'yxsruiyu'], []],
						yxs_ashi: ['female', 'qun', 3, ['yxsxiner', 'yxsfuye'], []],
						yxs_exj: ['female', 'xf', 4, ['yxsheiya', 'yxsfannv'], []],
						yxs_ve: ['female', 'xf', 3, ['yxssaoyu', 'yxsmeixin'], []],
						yxs_jack: ['male', 'xf', '3/4', ['yxswuying', 'yansha'], []],
						yxs_ksl: ['female', 'xf', 3, ['yxsxindian', 'yxspingquan'], []],
						yxs_ylsd: ['male', 'xf', 4, ['yxsjuji', 'yxsfangzheng'], []],
						yxs_anni: ['female', 'xf', '3/4', ['yxslinglu', 'yxschihai'], []],
						yxs_sls: ['male', 'xf', 3, ['yxsganggan', 'yxsjjq'], []],
						yxs_wwj: ['female', 'qun', 5, ['yxssese', 'yxsluanju'], []],
						yxs_pqs: ['male', 'qun', '3/4', ['yxsqucao', 'yxsfodi'], []],
						//丧尸模式
						yxs_ttkm: ['male', 'xf', 5, ['yxsezhou', 'yxszhaohun', 'yxshero', 'yxsxueqing', 'bossstart'], []],
						yxs_zombie: ['male', 'xf', 2, [], []],
						yxs_zombie2: ['female', 'xf', 2, [], []],
						yxs_zboss1: ['male', 'xf', 5, ['yxsganranboss', 'yxssihai', 'yxskongnue', 'yxszaowang', 'yxsappear'], []],
						//果包
						yxs_myy: ['female', 'guo', 4, ['yxshuirong', 'yxsciwei', 'yxscaiyuan', 'yxswucan'], []],
						yxs_gdq: ['female', 'guo', 4, ['yxsguose', 'yxsliuli', 'yywucan7'], []],
						yxs_gyp: ['female', 'guo', 3, ['yxsxueji', 'yxshuxiao', 'yxswuji', 'yywucan001'], []],
						yxs_wyj: ['female', 'guo', 4, ['yxsyanxi', 'yxs_qianchong', 'yywucan002'], []],
						yxs_wr: ['female', 'guo', 4, ['yxsminsi', 'yxsjijing', 'yxszhuide', 'yywucan003'], []],
						yxs_xhs: ['female', 'guo', 4, ['yxs_qiaoshi', 'yxs_yanyu', 'yxs_xiaode', 'yywucan004'], []],
						yxs_bmh: ['female', 'guo', 4, ['yxszongkui', 'yxsguju', 'yxsbaijia', 'yxsbingzhao', 'yywucan005'], []],
						yxs_gz: ['female', 'guo', 4, ['yxspianchong', 'yxszunwei', 'yywucan006'], []],
						yxs_wgt: ['female', 'guo', 4, ['yxsganlu', 'yxsbuyi'], []],
						yxs_zf: ['female', 'guo', 4, ['yxsliangyin', 'yxskongsheng', 'yywucan008'], []],
						yxs_zj: ['female', 'guo', 4, ['yxsluoshen', 'yxsqingguo'], []],
						yxs_fhh: ['female', 'guo', 4, ['yxszhuikong', 'yxsqiuyuan', 'yywucan0010'], []],
						yxs_wy: ['female', 'guo', 3, ['yxszhenlie', 'yxsmiji', 'yywucan00110'], []],
						yxs_llq: ['female', 'guo', 4, ['yxsguowu', 'yxszhuangrong', 'yywucan0012'], []],
						yxs_dc: ['female', 'guo', 4, ['yxslijian', 'yxsbiyue', 'yywucan0014'], []],
						yxs_xq: ['female', 'guo', 3, ['yxstianxiang', 'yxshongyan', 'yywucan0015'], []],
						yxs_tj: ['female', 'guo', 4, ['yxsjielie', 'yxskangge', 'yywucan0016'], []],
						yxs_xushi: ['female', 'guo', 4, ['yxswengua', 'yxsfuzhu', 'yywucan'], []],
						yxs_hth: ['female', 'guo', 3, ['yxszhendu', 'yxsqiluan', 'yynvde0090'], []],
						yxs_lbb: ['female', 'guo', 4, ['yxsjieyuan', 'yxsfenxin', 'yywucan0091'], []],
						yxs_zr: ['female', 'guo', 4, ['yxsjuxiang', 'yxslieren', 'yxschangbiao'], []],
						yxs_cy: ['female', 'guo', 4, ['yxslingren', 'yxsfujian', 'yywucan0095'], []],
						yxs_cfr: ['female', 'guo', 3, ['yxsqieting', 'yxsxianzhou', 'yywucan0096'], []],
						yxs_yy: ['female', 'guo', 3, ['yxsxuanbei', 'yxsxianwan', 'yywucan0097'], []],
						yxs_zgg: ['female', 'guo', 3, ['yxsliangyi', 'yxsqirang', 'yxsyuhua', 'yywucan0098'], []],
					},
					translate: {
						LOLIshenganning: '萝莉神甘',
						boss_lvbu3: '神鬼无前',
						yxs_guanyu: '关羽',
						yxs_ajyh: '埃及艳后',
						yxs_npl: '拿破仑',
						yxs_zhuyuanzhang: '朱元璋',
						yxs_flh: '樊梨花',
						yxs_drj: '狄仁杰',
						yxs_szbf: '孙武',
						yxs_homeless: '福尔摩斯',
						yxs_guiguzi: '鬼谷子',
						yxs_ysw: '亚瑟王',
						yxs_yangguang: '杨广',
						yxs_sunquanz: '孙权',
						yxs_zhangyi: '张仪',
						yxs_gongsunyan: '公孙衍',
						yxs_baiqi: '白起',
						yxs_ssqx: '上杉谦信',
						yxsspguanyu: '武圣关羽',
						yxs_caocaoz: '曹操',
						yxs_lvbuz: '吕奉先',
						yxs_liyuanba: '阿喀琉斯',
						yxs_linchong: '林冲',
						yxs_yujiz: '虞美人',
						yxs_xiangyuz: '项羽',
						yxs_yzq: '玉藻前',
						yxs_ylsb: '伊丽莎白',
						yxs_dfq: '达芬奇',
						yxs_bsm: '俾斯麦',
						yxs_sbdk: '斯巴达克',
						yxs_wns: '维纳斯',
						yxs_lysl: '路易十六',
						yxs_lhqd: '立花千代',
						yxs_ashi: '阿市',
						yxs_exj: '恩津加',
						yxs_jack: '开膛手杰克',
						yxs_ve: '魅魔',
						yxs_ttkm: '图坦卡蒙',
						yxs_ksl: '凯瑟琳二世',
						yxs_ylsd: '亚历山大',
						yxs_anni: '安妮·波妮',
						yxs_sls: '索罗斯',
						yxs_wwj: '文无姬',
						yxs_zombie: '丧尸',
						yxs_zombie2: '丧尸',
						yxs_zboss1: '荷鲁斯',
						yxs_pqs: '平清盛',
						//果包
						yxs_xushi: '·徐氏',
						yxs_myy: '·羊羊',
						yxs_gdq: '·大乔',
						yxs_gyp: '·银屏',
						yxs_wyj: '·元姬',
						yxs_wr: '·王荣',
						yxs_xhs: '·夏夏',
						yxs_bmh: '·弥呼',
						yxs_gz: '·照儿',
						yxs_wgt: '·国儿',
						yxs_zf: '·妃儿',
						yxs_zj: '·甄姬',
						yxs_fhh: '·伏儿',
						yxs_wy: '·小异',
						yxs_llq: '·玲绮',
						yxs_dc: '·貂蝉',
						yxs_xq: '·乔儿',
						yxs_tj: '·小唐',
						yxs_hth: '·何儿',
						yxs_lbb: '·灵儿',
						yxs_zr: '·祝儿',
						yxs_cy: '·小婴',
						yxs_cfr: '·蔡蔡',
						yxs_yy: '·艳儿',
						yxs_zgg: '·小诸',
						poxiloli: '魄袭',
						poxiloli_info: '出牌阶段限一次,你可以观看一名其他角色的手牌,你可以弃置你与其手牌中的四张花色不同的牌.若如此做,根据此次弃置你的牌的数量执行以下效果:零张,扣减一点体力上限;一张,你结束出牌阶段且本回合手牌上限-1;三张,你回复一点体力;四张,你摸四张牌',
						jieyingloli: '劫营',
						jieyingloli_info: '回合开始时,若场上没有拥有<营>标记的角色,你获得1个<营>标记;结束阶段,你可以将你的一个<营>标记交给一名角色;有<营>标记的角色摸牌阶段多摸一张牌,出牌阶段使用【杀】的次数上限+1,手牌上限+1.有<营>的其他角色回合结束时,其移去<营>标记,你获得其所有手牌.',
						guimian: '鬼面',
						guimian_info: '锁定技,每当你在出牌阶段使用杀造成伤害,本阶段内出杀次数上限+1',
						lyuxue: '浴血',
						lyuxue2: '浴血',
						lyuxue_info: '锁定技,每当你造成一次伤害,若目标没有浴血标记,你令其获得一个浴血标记;当一名角色失去浴血标记时,其流失一点体力;准备阶段,若场上浴血标记的数量不少于存活角色数的一半(向下取整),你清空浴血标记;当你即将死亡时,你清空浴血标记',
						huli: '护理',
						huli_info: '出牌阶段,你可以将一张♥️️手牌当作桃对距离1以内的角色使用',
						yixin: '医心',
						yixin_info: '限定技,你可以弃置两张牌,令一名已受伤角色回复X点体力并摸4-X张牌(X为该角色已损失的体力值且不超过4)',
						xianqu: '先驱',
						xianqu_info: '锁定技,你不能成为点数小于8的杀的目标',
						zbudao: '布道',
						zbudao_info: '摸牌阶段,你可以额外摸一张牌,将摸到的牌中的一张交给一名其他角色',
						taiji: '太极',
						taiji_info: '每当你使用或打出一张闪,你可以使用一张杀',
						luobi: '落笔',
						luobi_info: '结束阶段,可以摸数量等同于已损失体力值的牌,并以任意方式分配给任意角色',
						fengliu: '风流',
						fengliu_info: '锁定技,摸牌阶段,你额外摸X张牌,X为存活女性角色数且不超过2',
						kuangchan: '狂禅',
						kuangchan_info: '锁定技,你做主公时,不增加体力上限',
						dili: '底力',
						// dili_info:'锁定技,摸牌阶段,你额外摸X张牌,X为你已损失的体力值',
						dili_info: '锁定技,摸牌阶段,你额外摸X张牌,X为你已损失的体力值的一半,向上取整且最多为2',
						chujia: '初嫁',
						chujia_info: '出牌阶段限一次,你可以弃置两张相同颜色的手牌,指定任意一名角色摸X张牌.(X为该角色已损失的体力值) ',
						zhijie: '知节',
						zhijie_info: '出牌阶段限一次,你的♥️️手牌可以当做无中生有使用',
						yizhuang: '易装',
						yizhuang2: '易装',
						yizhuang_info: '准备阶段,你可以弃置一张牌并选择一名男性角色,获得其所有技能,直到你首次受到伤害',
						guifu: '鬼斧',
						guifu_info: '出牌阶段限一次,你可以指定一名角色装备区内的一张牌,将其弃掉,自己和对方同时摸取一张牌',
						lshengong: '神工',
						lshengong_info: '出牌阶段限一次,你可以选定场上任意一名角色的装备区的非特殊牌,出自己的一张手牌复制该装备,可以选择装备上自己或者别的角色的装备区',
						ducai: '独裁',
						ducai2: '独裁',
						ducai3: '独裁',
						ducai_info: '出牌阶段限一次,你可以弃置一张牌,则本轮内除你外的角色不能使用或打出与该手牌花色相同的手牌',
						fenghuo: '烽火',
						fenghuo_info: '你可以将一张装备区内的牌当作南蛮入侵使用',
						yxsweiyi: '威仪',
						yxsweiyi_info: '每当你受到一次伤害,可以令伤害来源弃置两张牌',
						xieling: '挟令',
						xieling_info: '出牌阶段,弃掉两张手牌,将任意一名角色装备区或判定区的牌移动到另一名角色对应的区域',
						baye: '霸业',
						baye_info: '出牌阶段,你可以将一张牌当做本回合内前一张使用的牌来使用.每回合限用一次.',
						nvquan: '女权',
						nvquan1: '女权',
						nvquan2: '女权',
						nvquan_info: '你对男性角色使用【杀】或【决斗】时,对方需连续打出两张【闪】或【杀】响应;你不能成为男性角色的决斗目标',
						qiandu: '迁都',
						qiandu_info: '出牌阶段,你可以弃一张黑色手牌,和一名存活的玩家与其交换位置.每回合限一次.',
						budao: '补刀',
						budao_info: '你的回合外,你的攻击范围的一名角色受到【杀】的伤害时,你可以对其使用一张【杀】,只要你的【杀】对目标角色造成了伤害,你就可以继续对其使用【杀】.',
						zhulu: '逐鹿',
						zhulu_info: '回合外,当有普通锦囊牌结算完毕后,你可以立即弃掉一张相同花色手牌或装备区的牌,获得这张锦囊牌.',
						yxsrenwang: '人望',
						yxsrenwang_info: '出牌阶段,你可以弃掉2张牌并指定一名手牌数大于你的角色,你摸牌至与该角色手牌数相等,每阶段限一次.',
						shiwei: '施威',
						shiwei_info: '当其他角色失去最后一张手牌时,你可以将牌堆顶的一张牌背面朝上置于该角色面前,该角色回合,跳过出牌阶段并弃掉这张牌.',
						xiaoyong: '骁勇',
						xiaoyong_info: '你可以将黑色手牌当作【杀】来使用',
						yxsqinzheng: '亲征',
						yxsqinzheng_info: '出牌阶段,你对其他角色造成伤害时,可以令场上任意角色摸一张牌.',
						juma: '拒马',
						juma_info: '你与其他角色的距离始终视为1.',
						yxsyanyi: '演绎',
						yxsyanyi_info: '出牌阶段限x次,你可以弃置一张黑色牌,指定1名角色和1种花色,若被指定角色的手牌中含有此花色,则受到1点伤害(x为你的体力值).',
						yxsjiean: '结案',
						yxsjiean_info: '每当【演绎】造成伤害时,你可以摸y张牌,并以任意数量分配给任意角色(y为被【演绎】造成伤害角色的已损失体力值).',
						shiqin: '弑亲',
						shiqin_info: '当一名其他角色进入濒死状态时,若其与你势力相同,则你可以令其立即死亡.',
						jjujian: '荒淫',
						jjujian_info: '结束阶段,你可以弃置一张锦囊牌,并视为随机使用一张【万箭齐发】或【南蛮入侵】.',
						yaoyi: '徭役',
						yaoyi_info: '每当你受到一次伤害,你可以令至多3名与你势力不同的角色交给你一张手牌.',
						zyhufuysw: '君临',
						zyhufuysw2: '君临',
						zyhufuysw_info: '锁定技,当你使用【杀】以外的牌造成伤害后,若目标角色没有【臣服】标记,你令其获得一枚【臣服】;拥有【臣服】标记的角色不能对你【杀】.',
						hanbeiysw: '神誓',
						hanbeiysw_info: '限定技,出牌阶段,你将【王者之剑】和【圣杯】置于装备区,并视为使用一张【杀】,你获得【利刃】.',
						yxsqishe: '利刃',
						yxsqishe_info: '锁定技,若你装备区有武器或宝具牌,你使用的【杀】不能被【闪】响应.',
						yxsbingsheng: '兵圣',
						yxsbingsheng_info: '出牌阶段限x次,你可以弃置两张花色不同的手牌,指定一名其他角色使其体力值与你相同(x为场上现存且与你不相同的势力数).',
						yxstaolue: '诡道',
						yxstaolue_info: '结束阶段,你可以失去1点体力,将手牌摸至体力上限,若你有装备牌,你可以使用之;你的手牌上限始终+3.',
						yxs_rejizhi: '集智',
						jiujian: '荐贤',
						jiujian_info: '出牌阶段限一次,你可以弃置一张牌,获得一名其他角色的手牌,并可以将其交给任意一名角色;若该角色不是你,其获得【集智】直到回合结束.',
						yxsshentan: '神探',
						yxsshentan_info: '你可以将一张手牌当做无懈可击使用.',
						yxssuji: '肃纪',
						yxskongju: '砥宗',
						yxskongju_info: '锁定技,你的手牌上限为你的体力上限;当你的手牌数小于体力上限时,你不能成为单体锦囊牌的目标;当你的手牌数大于等于体力上限时,你不能群体伤害类锦囊牌的目标.',
						yxshanqiang: '贯颐',
						yxsfengyin: '封印',
						yxshanqiang: '贯颐',
						yxshanqiang_info: '当你出杀指定目标后,你可以选择一项:1.摸2张牌,2.弃置该角色2张牌;若此【杀】造成伤害,你令其所有非锁定技失效直到其下回合结束.',
						yxsbiaoqi: '列阵',
						yxsbiaoqi_info: '锁定技,若你没有武器牌,你的攻击范围+2.',
						tonglingnpl: '统领',
						tonglingnpl_info: '锁定技,游戏开始时,你获得2枚统领标记.当一名与你阵营相同的角色造成伤害后,你获得1枚统领标记.',
						fanpunpl: '反扑',
						fanpunpl_info: '出牌阶段限两次,你可以移去3枚统领标记,视为对攻击范围内的至多3名角色使用一张不计入次数限制的【杀】.',
						zhuxin: '诛杀',
						zhuxin_info: '限定技,出牌阶段,你可以用一张手牌和至多4名其他角色拼点,并依次结算.若你赢,你对该些角色造成1点伤害并令其翻面;若你没赢,这些角色弃置2张牌.',
						qiangyun: '强运',
						qiangyun_info: '每当你失去最后一张手牌,可摸两张牌并回复一点体力;你的判定结果始终为不生效.',
						jingjia: '施威',
						jingjia_info: '出牌阶段开始时,你可以选择一项:1.视为使用一张无距离限制的【杀】,2.获得场上的一张牌.',
						yxsseyou: '色诱',
						yxsseyou_info: '每两轮限一次,出牌阶段,你可以指定任意1名角色,其他所有男性角色需选择1项执行:(1)对你指定的角色出【杀】;(2)令你获得其一张牌.',
						yxssheshi: '蛇噬',
						yxssheshi2: '蛇噬',
						yxssheshi2_info: '拥有蛇噬标记的角色准备阶段开始时若其体力值大于1,其流失1点体力,否则你移除蛇噬标记.',
						yxssheshi_info: '当你受到1次伤害后,你可令伤害来源获得一枚<蛇噬>标记;拥有蛇噬标记的角色准备阶段开始时若其体力值大于1,则流失1点体力;若其体力值小于等于1,你移除蛇噬标记.',
						yywusheng: '武圣',
						yywusheng_info: '你可以将一张红色牌当做【杀】使用或打出;你使用的♥️️杀伤害+1.',
						yyanyue: '偃月',
						yyanyue_info: '锁定技,回合开始时,若你的装备区里没有【青龙偃月刀】,你使用之;当你受到1点伤害后,若你的装备区里没有【青龙偃月刀】,你摸一张牌.',
						ddanji: '归汉',
						ddanji_info: '觉醒技,准备阶段开始时,若你的手牌数大于等于你的体力值且本局游戏的主公不为刘备,你失去〖归汉〗,获得〖补刀〗和〖斩逆〗.',
						bbudao: '补刀',
						bbudao_info: '回合外,当一名其他角色受到伤害后,若你与其距离不大于2,你可以对其使用一张【杀】.',
						zzhanjiang: '斩逆',
						zzhanjiang_info: '锁定技,你使用的♥️️杀伤害+1.',
						yxshushi: '虎视',
						yxshushi_info: '出牌阶段,你可以弃置一张♦️️手牌并选择2名角色进行拼点,赢的角色对没赢的角色造成一点伤害(限3次).',
						yxszhiheng: '制衡',
						yxszhiheng_info: '出牌阶段限一次,你可以选择两名手牌数不同的其他角色,令其中手牌多的角色将一张手牌交给手牌少的角色,若这两名角色手牌数相等,你摸2张牌或回复1点体力.',
						yxsshenqu: '神躯',
						yxsshenqu_info: '每名角色的准备阶段,若你的手牌数少于或等于你的体力上限数,你可以摸两张牌;当你受到伤害后,你可以使用一张【桃】',
						jiwu: '极武',
						jiwu_info: '出牌阶段,你可以弃置一张牌,获得一项:<强袭>、<铁骑>(界)、<旋风>、<完杀>,直到回合结束',
						yxsxiongbian: '雄辩',
						yxsxiongbian_info: '当你成为【杀】或普通锦囊牌的唯一目标时,你可以令另一名其他角色代替你响应此牌,否则也成为此牌的目标.',
						yyxslianheng: '连横',
						yyxslianheng_info: '出牌阶段限1次,你可令至多2名角色摸1张牌并重置其武将牌,该些角色选择1项:1.视为对你指定的另一名角色使用1张【杀】;2.交给你1张牌.',
						yyxshezong: '合纵',
						yyxshezong_info: '出牌阶段限1次,你可以横置任意名手牌数不为最多的角色,这些角色摸1张牌.',
						yxsjizhan: '疾战',
						yxsjizhan_info: '当你使用不为【杀】的牌指定其他角色为目标时,你可以将此牌转化为一张无距离和次数限制的【杀】.',
						yxsxishou: '犀首',
						yxsxishou_info: '锁定技,你与其他角色计算距离时+1;你不能被翻面.',
						yxszongheng: '纵横',
						yxszongheng_info: '你的第一个准备阶段,可令2名其他角色分别获得【纵术】与【横术】;出牌阶段限1次(首回合除外),或当拥有【纵术】、【横术】的角色死亡时,你可以转移【纵术】、【横术】.',
						yxszongheng1: '纵横',
						yxszongheng2: '纵横',
						yxshezong2: '纵术',
						yxshezong2_info: '出牌阶段限1次,你可以横置至多3名手牌数不为最多的角色,这些角色摸1张牌.',
						yxslianheng2: '横术',
						yxslianheng2_info: '出牌阶段限1次,你可令1名角色摸1张牌并重置其武将牌,该些角色选择1项:1.视为对你指定的另一名角色使用1张【杀】;2.交给你1张牌.',
						yxsbaihe: '捭阖',
						yxsbaihe_info: '出牌阶段限1次,你可横置或重置自己的武将牌;出牌阶段结束,你可令所有横置/未横置的角色选择一项:1.摸1张牌,2.弃置1张牌.',
						yxsmiying: '秘隐',
						yxsmiying_info: '锁定技,若你没有【横术】或【纵术】,防止你受到【杀】和普通锦囊牌的伤害.',
						yxsjianmie: '杀神',
						yxsjianmie_info: '你可以将一张手牌当做【杀】使用或打出;你使用的♠️️【杀】不能被响应; 你使用【杀】的次数上限+1.',
						yxsshasheng: '歼灭',
						yxsshasheng_info: '当你对一名角色造成伤害后,你可以废除其装备区;若其装备区已被废除,则改为扣1点体力上限.',
						yxstucheng: '屠城',
						yxstucheng2: '屠城',
						yxstucheng_info: '限定技,结束阶段,你可以对1名体力值不大于2的其他角色造成2点火焰伤害;若该角色死亡,你可以继续发动【屠城】.',
						yxsyuehou: '越后',
						yxsyuehou_info: '锁定技,当你受到或造成伤害后,你获得X个<越>标记(X为伤害点数).',
						yxsjunshen: '军神',
						yxsjunshen_info: '觉醒技,准备阶段开始时,若你的<越>标记数不小于3,你减1点体力上限,并获得〖神速〗、〖神著〗、〖神燕〗,最后失去〖越后〗',
						yxsfsu: '神速',
						yxsxinfsu: '神速',
						yxsfsu1: '神速',
						yxsfsu2: '神速',
						yxsfsu4: '神速',
						yxsxinfsu_info: '你可以选择一至三项:1. 跳过判定阶段和摸牌阶段;2. 跳过出牌阶段并弃置一张装备牌;3. 跳过弃牌阶段并将你的武将牌翻面.你每选择一项,视为你对一名其他角色使用一张没有距离限制的【杀】.',
						yxsfsu_info: '你可以选择一至三项:1. 跳过判定阶段和摸牌阶段;2. 跳过出牌阶段并弃置一张装备牌;3. 跳过弃牌阶段并将你的武将牌翻面.你每选择一项,视为你对一名其他角色使用一张没有距离限制的【杀】.',
						yxsshenzhu: '神著',
						yxsshenzhu_info: '你使用【杀】无次数限制.当你使用有对应实体牌的非转化【杀】结算结束后,你摸一张牌.',
						yxsshenyan: '神燕',
						yxsshenyan_info: '每当你打出或使用【闪】时,你摸2张牌.',
						yxssuohun: '索魂',
						yxssuohun_info: '当你进入濒死状态时,你可以选择将武将牌替换为【神·关羽】,将体力上限调整为5,并回复3点体力.',
						yxsjianxiong: '奸雄',
						yxsjianxiong_info: '出牌阶段限一次,当你使用基本牌或锦囊牌进入弃牌堆后,你可以弃置一张牌,收回此牌.',
						yxsxiandao: '献刀',
						yxsxiandao_info: '出牌阶段限一次,你可以交给一名角色一张装备牌,视为你对该角色使用了一张【杀】,此杀无视距离且伤害+1.',
						yxsfeijiang: '飞将',
						yxsfeijiang_info: '锁定技,回合开始时,若你的装备区里没有【修罗炼狱戟】和【赤兔马】,你使用之;当【修罗炼狱戟】离开你的装备区时,销毁之.',
						yxsxiaoyong: '骁勇',
						yxsxiaoyong_info: '你可以将一张♠️️牌当做【杀】使用或打出;你使用♠️️【杀】造成伤害后,可以令受到伤害的角色翻面.',
						yxssheji: '射戟',
						yxssheji_info: '限定技,若你有武器牌,当你使用【杀】时,你可以令此【杀】不能被【闪】响应,你选择1项:1.摸2张牌,2.回复一点体力.',
						yxsshengli: '神力',
						yxsshengli_info: '当你造成伤害时,你可令此伤害+x(x为你已损失的体力值).',
						yxsjulei: '踵殇',
						yxsjulei_info: '锁定技,当你受到雷属性伤害后,此伤害+y,你减2点体力上限(y为你当前体力值的一半,向下取整).',
						yxshmq: '回马枪',
						yxshmq2: '回马枪',
						yxshmq_info: '当你使用或打出【闪】时,你可以使用一张无距离限制的【杀】;若此杀造成伤害,你可以防止此伤害,并将伤害值改为目标角色的体力值.',
						yxsbaotou: '豹头',
						yxsbaotou_info: '锁定技,回合开始时,若你的装备区里没有【花枪】,你使用之;当【花枪】离开你的装备区时,销毁之.',
						yxsjuebie: '诀别',
						yxsjuebie_info: '当你进入濒死状态时,你可以放弃求【桃】,并令一名男性角色获得你的所有牌,若该角色是【项羽】,其获得【不屈】,你死亡.',
						yxsjianwu: '剑舞',
						yxsjianwu_info: '出牌阶段,你可以弃置一张装备牌,视为对一名其他角色连续使用二张【决斗】.',
						yxsshesheng: '舍身',
						yxsshesheng_info: '准备阶段,你可以弃置所有手牌,从牌堆里随机获得一张装备牌.',
						yxsbuqu: '不屈',
						yxsbuqu_info: '锁定技,当你处于濒死状态时,你将牌堆顶的一张牌置于你的武将牌上,称为<创>.若没有与此<创>点数相同的其他<创>,你将体力回复至1点;若有与此<创>点数相同的其他<创>,你将此<创>置入弃牌堆.若有<创>,你的手牌上限为X(X为<创>数).',
						yxspofu: '破釜',
						yxspofu2: '破釜',
						yxspofu_info: '限定技,准备阶段,你可以跳过你的判定和摸牌阶段,并废除你武器栏以外的所有装备栏;若此做,你可以将一张手牌当做【水淹七军】使用,直到回合结束.',
						yxsguixiong: '鬼雄',
						yxsguixiong_info: '出牌阶段限一次,你可以扣1点体力上限,并流失1点体力,本回合所有其他角色不能打出或使用牌.',
						yxsbawang: '霸王',
						yxsbawang_info: '锁定技,回合开始时,若你的装备区里没有【天龙破城戟】和【乌骓】,你使用之;当【天龙破城戟】离开你的装备区时,销毁之.',
						yxshuanhuo: '幻梦',
						yxshuanhuo2: '蜕梦',
						yxshuanhuo_info: '出牌阶段开始时,你可以将武将牌变换为场上任意一名其他角色直到回合结束,你将体力值调整至2点.',
						yxsshehun: '摄魂',
						yxsshehun2: '摄魂',
						yxsshehun_info: '你的第一个准备阶段,你可以令一名其他角色获得一枚【摄魂】;若场上已有【摄魂】,你摸1张牌,你可以转移【摄魂】.拥有【摄魂】标记的角色于摸牌阶段结束后,流失1点体力并交给你1张牌,你回复1点体力.',
						yxsqingjiao: '清教',
						yxsqingjiao_info: '出牌阶段限1次,你可以弃置任意名势力不相同角色的各一张牌,你每以此法弃置1张牌,你便可选择一项:1.摸1张牌,2.回复1点体力.',
						yxszhenghuang: '溃舰',
						yxszhenghuang_info: '结束阶段,你可以对装备区数量最多(或之一)的一名角色造成1点伤害,你可以从牌堆里随机使用一张装备牌.',
						yxsfuxing: '复兴',
						yxsfuxing_info: '每两轮限一次,结束阶段,你可以选择至多三名角色,令该些角色将手牌和体力值补至上限(至多为5).',
						yxsboshi: '博识',
						yxsboshi_info: '每回合限3次,当你使用锦囊牌时,你可以从牌堆里随机获得一张非延迟类锦囊;你的锦囊牌不计入手牌上限.',
						yxswucan: '无惨',
						yxswucan_info: '当你受到男性角色造成的伤害后,若你不处于果体状态,则你插画上的衣服减少1件,你视为使用一张无距离限制的【杀】.',
						yxswucan2: '无惨',
						yxsnvde: '女德',
						yxsnvde_info: '当你回复体力后,你插画上的衣服增加1件.',
						yxswucan7: '无惨',
						yxswucan8: '无惨',
						yxswucan7_info: '当你受到男性角色造成的伤害后,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxsnvde7: '女德',
						yxsnvde7_info: '当你回复体力后,你插画上的衣服增加1件.',
						yywucan: '无惨',
						yywucan2: '无惨',
						yywucan_info: '当你受到男性角色造成的伤害后,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yynvde: '女德',
						yynvde_info: '当你回复体力后,你插画上的衣服增加1件.',
						yxsdetong: '德统',
						yxsdetong2: '德统',
						yxsdetong_info: '当你使用【杀】或锦囊牌指定目标后,你可以进行一次判定,若判定牌与此牌类型相同,你获得一枚【德统】;若类型不同,你摸一张牌.',
						yxstiexiang: '铁血',
						yxstiexiang_info: '结束阶段,你视为使用x张杀,你清空【德统】标记;若x大于等于5,你获得胜利(X为你拥有的【德统】标记的数量).',
						yxsjiasuo: '枷锁',
						yxsjiasuo_info: '锁定技,判定阶段,你将一张【乐不思蜀】置于判定区内,并获得一枚【自由】标记;你的手牌上限始终+x(x为你的体力上限).',
						yxsfanpan: '反叛',
						yxsfanpan_info: '觉醒技,准备阶段,若你武将牌上的【自由】达到了2或更多,你减1点体力上限并回复1点体力,失去【枷锁】,获得【践踏】.',
						yxsjianta: '践踏',
						yxsjianta_info: '出牌阶段,你可以将一张手牌当做【南蛮入侵】使用,你减1点体力上限.',
						yxsjuezi: '绝姿',
						yxsjuezi_info: '锁定技,防止男性角色对你造成的一切伤害.',
						//yxschengfa:'惩罚',
						yxsyonglian: '咏恋',
						yxsyonglian_info: '每轮限一次,一名其他角色的出牌阶段开始阶段时,你可以令其获得【恋歌】;出牌阶段结束时,若其手牌数大于等于体力值,该角色弃置一半的牌(向下取整).',
						yxsliange: '恋歌',
						yxsliange_info: '当你使用牌后,你进行一次判定,若为红色,你摸一张牌(♥️️则额外回复一点体力);若为黑色,你弃置一张牌(♠️️则额外流失一点体力).',
						yxshuangying: '纵权',
						yxshuangying2: '荒淫',
						yxshuangying2_info: '当你使用锦囊牌造成伤害时,随机获得0-2枚【荒淫】标记;你的手牌上限-x(x为场上西方势力女性角色数).',
						yxshuangying_info: '出牌阶段,你可以将一张红色手牌当做【万箭齐发】使用;黑色手牌当做【逐近弃远】使用.',
						yxschuxing: '处刑',
						yxschuxing_info: '锁定技,当你武将牌上的【荒淫】≥14时,你造成的伤害值+1;≥15时,所有其他角色依次视为对你使用一张【杀】.',
						yxsbaici: '白慈',
						yxsbaici_info: '每轮限一次,一名其他角色的准备阶段,你可以与其拼点,若你赢,该角色流失1点体力,视为你对该角色使用一张【雷杀】;若你没赢,其回复1点体力.',
						yxsruiyu: '瑞玉',
						yxsruiyu_info: '每轮限一次,一名角色的结束阶段,你可以摸2张牌并进行一次判定,若为红色,视为你使用一张【洞烛先机】.',
						yxsxiner: '心迩',
						yxsxiner_info: '出牌阶段限一次,你可以交给一名其他角色一张♥️️手牌,获得该角色所有的非♥️️手牌;若你此法获得的牌不少于3张,该角色流失1点体力,你翻面;你的红色牌不计入手牌上限.',
						yxsfuye: '浮叶',
						yxsfuye_info: '当你受到伤害后,伤害来源须选择一项:1.交给你一张♥️️手牌,翻面;2.弃置所有牌,并令你翻面.',
						yxsfannv: '反奴',
						yxsfannv_info: '当有【奴】的角色成为【杀】的目标后,你可以摸2张牌,对此【杀】使用者,使用一张牌,你以此法打出的牌无距离限制,且仅对该角色结算.',
						yxsheiya: '黑娅',
						yxsheiya2: '奴',
						yxsheiya_info: '准备阶段,你令一名角色获得【奴】直到其下回合开始;当有【奴】的角色受到伤害后,你与其各摸1张牌;其他角色与有【奴】的角色计算距离时+1.',
						yxswuying: '雾影',
						yxswuying1: '雾影',
						yxswuying2: '雾影',
						yxswuying1_info: '每轮限一次,一名角色的准备阶段,若你武将牌正面朝上,你可以令该角色跳过出牌阶段,你翻面并减1点体力上限;当你受到伤害时,若你武将牌背面朝上,此伤害-1.',
						yxswuying_info: '每轮限一次,一名角色的准备阶段,若你武将牌正面朝上,你可以令该角色跳过出牌阶段,你翻面并减1点体力上限;当你受到伤害时,若你武将牌背面朝上,此伤害-1.',
						yansha: '掩杀',
						yansha3: '掩杀',
						yansha1: '掩杀',
						yansha2: '掩杀',
						yansha2_info: '是否发动【掩杀】,将此【杀】伤害改为体力流失？',
						yansha_info: '你对女性角色造成的伤害始终+1,且你使用【杀】造成伤害均视为体力流失.当你武将牌翻面时,你视为使用一张无距离限制的【刺杀】,若你此时体力值为1,你使用一张【过河拆桥】.',
						yxshuxiao: '虎啸',
						yxshuxiao3: '虎啸',
						yxsxueji: '雪恨',
						yxswuji: '武继',
						yxswuji_info: '觉醒技,结束阶段开始时,若你没有衣服,你加1点体力上限并回复1点体力,从场上、牌堆或弃牌堆中获得【青龙偃月刀】.',
						yxsxueji_info: '出牌阶段限两次,你可以脱1件衣服,选择至多X名角色,横置这些角色并对其中一名角色造成1点火焰伤害.(X为你已损失的体力值且至少为1)',
						yxshuxiao_info: '锁定技,当你造成火属性伤害时,你于此回合内对其使用牌没有次数限制.',
						yywucan001: '无惨',
						yywucan0012: '无惨',
						yywucan001_info: '当你受到男性角色造成的伤害后,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yywucan002: '无惨',
						yywucan0022: '无惨',
						yywucan002_info: '当你受到男性角色造成的伤害后,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxsyanxi: '宴戏',
						yxsyanxi2: '宴戏',
						yxsyanxi_info: '出牌阶段限x次,你可选择一名有手牌的角色.你将该角色的一张随机手牌与牌堆顶的两张牌混合后展示,并选择其中一张.若你以此法选择的是该角色的手牌,则你获得这三张牌.否则你脱1件衣服,并获得选择的牌.你通过〖宴戏〗获得的牌,不计入当前回合的手牌上限.(x为你的体力值)',
						yxs_qianchong: '谦冲',
						yxs_qianchong_info: '锁定技,若你的装备区内有牌且:均为红色,则你视为拥有技能〖明哲〗.均为黑色,则你视为拥有技能〖帷幕〗.若均不满足,则出牌阶段开始时,你可以选择一种类别的牌,选择完毕后你穿上所有衣服,你本回合内使用该类别的牌时没有次数和距离限制.',
						yxs_weimu: '帷幕',
						yxs_weimu_info: '',
						yxs_mingzhe: '明哲',
						yxs_mingzhe_info: '',
						yywucan003: '无惨',
						yywucan0032: '无惨',
						yywucan003_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxsminsi: '敏思',
						yxsminsi2: '敏思',
						yxsminsi_info: '出牌阶段限两次,你可以弃置任意张点数之和为13的牌,脱2件衣服,并摸两倍数量的牌.以此法获得的牌中,黑色牌本回合无距离限制,红色牌本回合不计入手牌上限.',
						yxsjijing: '吉境',
						yxsjijing_info: '当你受到伤害后,你可以进行一次判定,若你弃置任意张点数之和与判定结果点数相同的牌,你回满体力,穿上所有衣服.',
						yxszhuide: '追德',
						yxszhuide_info: '当你死亡时,你可令一名其他角色从牌堆中获得4张名称各不相同的基本牌.',
						yywucan004: '无惨',
						yywucan0042: '无惨',
						yywucan004_info: '当你受到男性角色造成的伤害后,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxs_qiaoshi: '樵拾',
						yxs_qiaoshi_info: '其他角色的结束阶段开始时,若你的手牌数与其不相等,则你可以与其各摸一张牌,你脱1件衣服.',
						yxs_yanyu: '燕语',
						yxs_yanyu_info: '每轮限一次,一名角色的出牌阶段开始时,你可以弃置一张牌.若如此做,则该出牌阶段内,当有与你弃置的牌类别相同的其他牌进入弃牌堆时,你可令任意一名角色获得此牌(不超过3张).',
						yxs_yanyu2: '燕语',
						yxs_xiaode: '孝德',
						yxs_xiaode_info: '其他角色死亡后,你可以声明该角色武将牌上的一个技能(主公技、觉醒技、隐匿技、使命技除外),穿1件衣服,并获得此技能.',
						yxszongkui: '纵傀',
						yxszongkui_mark: '纵傀',
						yxszongkui_mark_bg: '傀',
						yxszongkui_info: '回合开始时,你可以指定一名未拥有<傀>标记的其他角色,令其获得一枚<傀>标记.每轮游戏开始时,你指定一名体力值最少且没有<傀>标记的其他角色,令其获得一枚<傀>标记.',
						yxsguju: '骨疽',
						yxsguju_info: '锁定技,拥有<傀>标记的角色受到伤害后或回复体力后,你摸一张牌.',
						yxsbaijia: '拜假',
						yxsbaijia_info: '觉醒技,准备阶段,若你因〖骨疽〗获得的牌不少于7张,则你增加1点体力上限,回复1点体力,令所有未拥有<傀>标记的其他角色获得<傀>标记,并获得技能〖蚕食〗.',
						yxscanshi: '蚕食',
						yxscanshi_info: '一名角色使用基本牌或普通锦囊牌指定你为唯一目标时,若其有<傀>标记,你可以脱1件衣服,取消之,其失去<傀>标记;你使用牌仅指定一名角色为目标时,你可以穿1件衣服,并额外指定任意名带有<傀>标记的角色为目标(无距离限制),这些角色失去<傀>标记.当你失去<傀>时你视为使用一张【杀】.',
						yxsbingzhao: '秉诏',
						yxsbingzhao_info: '主公技,游戏开始时,你选择一个其他势力.当你对该势力的角色发动【骨疽】时,其强制你脱1件衣服.',
						yywucan005: '无惨',
						yywucan0052: '无惨',
						yywucan005_info: '当你受到男性角色造成的伤害后,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxspianchong: '偏宠',
						yxspianchong2: '偏宠',
						yxspianchong_info: '摸牌阶段开始时,你可以从牌堆中获得一张红色牌和一张黑色牌.你选择一种颜色.你的下回合开始前,当你失去该颜色的一张牌后,你脱1件衣服,并从牌堆中获得另一种颜色的一张牌.',
						yxszunwei: '尊位',
						yxszunwei_info: '出牌阶段,你可选择本局游戏内未选择过的一项:①若你已受伤,则你可以选择一名体力值大于你的其他角色,你将体力值回复至X(X为你的体力上限与其体力值中的较小值)②选择一名手牌数大于你的其他角色,你将手牌数摸至与其相同(至多摸五张)③选择一名装备区内牌数大于你的其他角色.你令X=1.若你装备区内的(equip+X)栏为空,则你使用牌堆中的一张副类别为(equip+X),且能对自己使用的装备牌.你令X+1.若X不大于5,且你装备区内的牌数仍小于目标角色,则你重复此流程.最后穿上1件衣服',
						yxszunwei_backup: '尊位',
						yywucan006: '无惨',
						yywucan0062: '无惨',
						yywucan006_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxsganlu: '甘露',
						yxsganlu_info: '出牌阶段,若你不处于全果状态,你可以脱1件衣服,并选择两名装备区里的牌数不均为0的角色交换装备区里的牌,你摸1张牌.',
						yxsbuyi: '补衣',
						yxsbuyi1: '补衣',
						yxsbuyi2: '补衣',
						yxsbuyi_info: '当有角色进入濒死状态时,你可以穿上1件衣服,并令该角色回复1点体力(若你没有可穿的衣服则不能发动);当一名角色脱离濒死状态后,你视为使用一张【顺手牵羊】.',
						yywucan007: '无惨',
						yywucan0072: '无惨',
						yywucan007_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxsliangyin: '良姻',
						yxsliangyin_info: '当有牌移至游戏外时,你可以令一名角色摸一张牌,你脱1件衣服;当有牌从游戏外加入任意角色的手牌时,你可以令一名其他角色弃置一张牌,你穿1件衣服.',
						yxskongsheng: '箜声',
						yxskongsheng_info: '准备阶段,你可以将任意张牌置于你的武将牌上,你获得【匡弼】和【制衡】直到回合结束;结束阶段,你使用武将牌上的装备牌并回复1点体力,获得武将牌上的其他牌.',
						yxskongsheng2: '箜声',
						yxskongsheng2_info: '',
						yywucan008: '无惨',
						yywucan0082: '无惨',
						yywucan008_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxskuangbi: '匡弼',
						yxskuangbi_info: '出牌阶段限一次.你可以令一名其他角色交给你至多三张牌(不计入你本回合的手牌上限).其于其的下回合开始时摸等量的牌.',
						yxszhiheng00: '制衡',
						yxszhiheng00_info: '出牌阶段限一次,你可以弃置任意张牌并摸等量的牌,若你在发动〖制衡〗时弃置了所有手牌,则你多摸一张牌.',
						yxsluoshen: '洛神',
						yxsluoshen_info: '准备阶段,你可以进行判定,若结果不为♦️️,则你穿上1件衣服,并获得此判定牌,你可以重复此流程直到出现♦️️;出牌阶段开始时,若你的手牌数不大于7,则你获得【神赋】直到回合结束,你通过〖洛神〗获得的牌,不计入当前回合的手牌上限.',
						yxsqingguo: '倾国',
						yxsqingguo_info: '当你需要打出或使用【闪】时,你可以脱1件衣服,视为你使用或打出了一张【闪】(若你处于全果状态则不能发动).',
						yxsduwu: '黩武',
						yxsduwu3: '黩武',
						yxsduwu_info: '出牌阶段,你可以弃置X张牌对你攻击范围内的一名其他角色造成1点伤害(X为该角色的体力值).若该角色因此法进入濒死状态且存活,则你于濒死状态结算后失去1点体力,且本回合不能再发动〖黩武〗.',
						yywucan009: '无惨',
						yywucan0092: '无惨',
						yywucan009_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxsqiuyuan: '求援',
						yxsqiuyuan_info: '当你成为【杀】的目标时,你可以选择另一名其他角色选择一项:1.交给你一张除【杀】以外的基本牌,并给你穿上1件衣服;2.成为此【杀】的额外目标且不能响应此【杀】,并失去所有非锁定技直到下回合结束.',
						yxszhuikong: '惴恐',
						yxszhuikong_info: '其他角色的回合开始时,你可与其拼点:若你赢,该角色本回合不能使用牌指定其他角色为目标;若你没赢,其流失1点体力,你脱1件衣服.',
						yywucan0010: '无惨',
						yywucan00102: '无惨',
						yywucan0010_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxszhenlie: '贞烈',
						yxsmiji: '秘计',
						yxsmiji_info: '准备/结束阶段开始时,若你已受伤,你可以穿1件衣服,并摸2X张牌,可以将等量的牌交给一名其他角色(X为你已损失的体力值).',
						yxszhenlie_info: '当你成为其他角色使用【杀】或普通锦囊牌的目标后,你可以脱1件衣服并失去1点体力并令此牌对你无效,若此做,你弃置该角色的一张牌,并视为使用x张杀(X为你已损失的体力值).',
						yywucan0011: '无惨',
						yywucan00112: '无惨',
						yywucan0011_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yywucan7: '无惨',
						yywucan72: '无惨',
						yywucan7_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxsliuli: '流离',
						yxsliuli_info: '当你成为【杀】的目标时,若你不是全果,你可以脱1件衣服,将其转移给一名其他角色;你与其他角色计算距离始终为1.',
						yxsguose_info: '出牌阶段限3次,你可以穿上1件衣服并选择一项:将一张♦️️牌当做【乐不思蜀】使用;或弃置一张♦️️牌并弃置场上的一张【乐不思蜀】.选择完成后,你摸一张牌.',
						yxsguose: '国色',
						yxswengua: '问卦',
						yxswengua2: '问卦',
						yxswengua_info: '其他角色/你的出牌阶段限一次,其可以交给你一张牌,(若当前回合角色为你,则跳过此步骤),你可以将此牌/一张牌置于牌堆顶脱1件衣服或牌堆底穿1件衣服,你与其/你从另一端摸一张牌.',
						yxsfuzhu: '伏诛',
						yxsfuzhu_info: '一名角色的结束阶段,若牌堆剩余牌数不大于你体力值的20倍,则你穿上所有衣服,并依次对其使用牌堆中所有的【杀】,洗牌',
						yxsguowu: '帼舞',
						yxsguowu_info: '出牌阶段开始时,你可以脱光衣服,并展示全部手牌,根据你展示的类型数,你获得对应效果:至少一类,从弃牌堆获得一张【杀】且此阶段使用牌无距离限制;至少两类,此阶段使用【杀】或普通锦囊牌可以多指定两个目标;至少三类,获得【利驭】直到回合结束.',
						yxszhuangrong: '妆戎',
						yxszhuangrong_info: '觉醒技,一名角色的回合结束时,若你的体力值或手牌数为1,你减1点体力上限并回复体力至上限,将手牌摸至体力上限,获得〖神威〗和〖无双〗.',
						yxsqshenwei: '神威',
						yxsqshenwei_info: '锁定技,摸牌阶段开始时,你令额定摸牌数+2;你的手牌上限+2.',
						yxswushuang: '无双',
						yxswushuang1: '无双',
						yxswushuang2: '无双',
						yxswushuang_info: '锁定技,当你使用【杀】或【决斗】指定目标后,你令此牌需要依次使用或打出两张【闪】或【杀】响应.',
						yxsliyu: '利驭',
						yxsliyu_info: '当你使用【杀】对一名其他角色造成伤害后,你可以获得其一张牌.若此牌不为装备牌,则其摸一张牌.若此牌为装备牌,则视为你对其选择的另一名角色使用一张【决斗】.',
						yywucan0012: '无惨',
						yywucan00122: '无惨',
						yywucan0012_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxshuirong: '慧容',
						yxshuirong_info: '准备阶段开始/出牌阶段结束时,你可以穿1件衣服,并令一名角色将手牌数摸至/弃至与体力值相同(至多摸至五张).',
						yxsciwei: '慈威',
						yxsciwei_info: '一名角色于其回合内使用牌时,若此牌为基本牌或普通锦囊牌且你不是全果,则你可以弃置一张牌,并脱1件衣服,取消此牌的所有目标.',
						yxscaiyuan: '才媛',
						yxscaiyuan_info: '锁定技,当你扣减体力时,你获得一枚<才媛>标记直到你的下回合结束.结束阶段开始时,若你拥有<才媛>标记 ,则你摸3张牌.',
						yxsbiyue: '闭月',
						yxsbiyue_info: '结束阶段,你可以摸2张牌,若你没有手牌,则改为摸至体力上限,你穿上衣服.',
						yxslijian_info: '出牌阶段限1次,你可以脱1件衣服,视为一名男性角色A对另一名男性角色B使用一张【决斗】(不可被【无懈可击】响应),你可以选择一项:1.弃一张牌,令B视为对A使用一张【决斗】,2.摸1张牌.',
						yxslijian: '离间',
						yywucan0014: '无惨',
						yywucan00142: '无惨',
						yywucan0014_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yywucan0015: '无惨',
						yywucan00152: '无惨',
						yywucan0015_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxstianxiang_info: '当你受到伤害时,你可以弃置一张♥️️手牌,防止此次伤害并选择一名其他角色,你选择一项:1.令其受到伤害来源对其造成的1点伤害,摸X张牌(X为其已损失体力值且至多为5),并令你穿1件衣服;2.令其失去1点体力.',
						yxshongyan_info: '锁定技,你区域内的♠️️牌和♠️️判定牌均视为♥️️.当你使用、打出或弃置♥️️牌时,你摸1张并脱1件衣服.',
						yxstianxiang: '天香',
						yxshongyan: '红颜',
						yywucan0016: '无惨',
						yywucan00162: '无惨',
						yywucan0016_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxskangge: '节烈',
						yxskangge_info: '每回合限2次,当你受到除自己和<抗歌>角色以外的角色造成的伤害时,你可以防止此伤害并脱1件衣服,选择一种花色,令<抗歌>角色从弃牌堆中随机获得X张此花色的牌(X为伤害值).',
						yxsjielie: '抗歌',
						yxsjielie_info: '你的第一个回合开始时,选择一名其他角色,该角色每次于其回合外获得牌后,你摸等量的牌;其进入濒死状态时,你可令其回复体力至3点,穿上衣服(每轮限一次).该角色死亡时,你扣1点体力上限.',
						lolizhongjie: '终结',
						lolizhongjie_info: '终结技,当你击杀其他角色时,触发【奥义终结】特写.',
						yxssaoyu: '骚语',
						yxssaoyu2: '骚语',
						yxssaoyu_info: '当你使用红色牌或锦囊牌指定唯一目标后,若该角色为男性且不是【舔狗】,你令其获得一枚<魅>.',
						yxsmeixin: '魅心',
						yxsmeixin_info: '锁定技,一名角色的准备阶段,若其武将牌上的<魅>大于等于1,则该角色弃置一张牌;大于等于2,则流失1点体力;若等于3,你令其将武将牌替换为【舔狗】,并获得【舔狗】专属标记.',
						yxsmeixin2: '魅心',
						yxsmeixin2_info: '锁定技,一名角色的准备阶段,若其武将牌上的<魅>大于等于1,则该角色弃置一张牌;大于等于2,则流失1点体力;若等于3,你令其将武将牌替换为【舔狗】,并获得【舔狗】专属标记.',
						yxsguitian2: '跪舔',
						yxsguitian2_info: '锁定技,出牌阶段开始时,你将所有手牌交给魅魔.',
						yxsqiluan_info: '一名角色的回合结束时,每有一名角色进入过濒死状态,你便摸1张牌,若伤害来源是你,则改为摸3张.当你发动【戚乱】时,你穿上1件衣服.',
						yxszhendu_info: '一名角色的出牌阶段开始时,若你至少有2件衣服,则你可以弃置一张手牌,视为该角色使用了一张【酒】.若该角色不是你,你脱光衣服并对其造成3点伤害,否则你回复1点体力摸1张牌.',
						yxsqiluan: '戚乱',
						yxszhendu: '鸩毒',
						yywucan00902: '无惨',
						yywucan0090: '无惨',
						yynvde0090: '女德',
						yynvde0090_info: '当你回复体力后,你插画上的衣服增加1件.',
						yxsfenxin: '焚心',
						yxsfenxin_info: '当一名角色死亡前,你可以穿上所有衣服,与其交换身份牌,若此做你加2点体力上限,并获得技能【离魂】和【神躯】.',
						yxsjieyuan: '竭缘',
						yxsjieyuan_more: '竭缘',
						yxsjieyuan_less: '竭缘',
						yxsjieyuan_info: '当你对一名其他角色造成伤害时,你可弃置一张牌并脱1件衣服,令此伤害+1;当你受到一名其他角色造成的伤害时,你可弃置一张牌,令此伤害-1,穿1件衣服.',
						yywucan00912: '无惨',
						yywucan0091: '无惨',
						yywucan00922: '无惨',
						yywucan0092: '无惨',
						yywucan0092_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yywucan0096_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yywucan0095_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yxschangbiao: '长标',
						yxsjuxiang: '巨象',
						yxsjuxiang1: '巨象',
						yxsjuxiang2: '巨象',
						yxslieren: '烈刃',
						yxschangbiao_info: '出牌阶段限两次,你可以将任意张手牌当做【杀】使用(无距离限制).若你因此【杀】对目标角色造成过伤害,则你于出牌阶段结束时摸X张牌(X为此【杀】对应的实体牌数量).',
						yxsjuxiang_info: '锁定技,【南蛮入侵】对你无效.其他角色使用的【南蛮入侵】结算后进入弃牌堆时,你可以脱1件衣服,并获得之,若此做你视为使用一张【南蛮入侵】.',
						yxslieren_info: '当你使用【杀】造成伤害后,你可以脱1件衣服,并与受到该伤害的角色进行拼点;若你赢,则该角色死亡,你穿上1件衣服;否则你将体力流失至1点,立即结束回合并脱掉所有衣服.',
						yxslingren: '凌人',
						yxslingren_info: '每回合限一次.当你于出牌阶段使用带有「伤害」这一标签的基本牌或普通锦囊牌指定目标后,你可以猜测其中的一个目标的手牌中是否有基本牌,锦囊牌或装备牌.若你猜中的项目数:≥1,此牌对该角色的伤害+1,你摸两张牌;≥2,你获得技能〖归心〗和〖慷慨〗直到下回合开始.;≥3,你对该角色造成伤害时,随机移除其武将牌上的一个技能.你每猜对1项,便脱1件衣服.',
						yxskaikang: '慷慨',
						yxskaikang_info: '当一名角色成为【杀】的目标后,若你至该角色的距离为1,你可以摸一张牌.若如此做,你交给其一张牌并展示之.若为装备牌,该角色可以使用此牌.',
						yxsguixin: '归心',
						yxsguixin_info: '当你受到1点伤害后,你可以获得每名其他角色区域里的一张牌,你翻面.',
						yxslingren_chuanxin_info: '',
						yxslingren_chuanxin: '',
						yxsfujian: '伏间',
						yxsfujian_info: '锁定技,准备阶段,你随机观看一名其他角色的手牌,穿上1件衣服.',
						yywucan00952: '无惨',
						yywucan0095: '无惨',
						yxsqieting_info: '其他角色的结束阶段,若其于此回合内使用过指定其他角色为目标的牌,你可以选择一项:1.脱1件衣服并获得其手牌或装备区内的一张牌,你可以使用一张牌;2.穿上1件衣服并摸1张牌.',
						yxsqieting: '窃听',
						yxsxianzhou: '献州',
						yxsxianzhou_info: '限定技.出牌阶段,你可将装备区内的所有牌交给一名其他角色.你回复X点体力摸等量的牌,并对其攻击范围内的至多X名角色各造成1点伤害,最后你获得【宗戚】(X为你以此法给出的牌数).',
						yxsmenshen3: '佑护',
						yxsmenshen3_info: '',
						yxszongqi: '宗戚',
						yxszongqi_info: '回合外,若你的手牌数大于等于手牌上限,延时锦囊牌或黑色【杀】对你无效.',
						yywucan00962: '无惨',
						yywucan0096: '无惨',
						yxsxuanbei: '选备',
						yxsxuanbei_info: '出牌阶段开始时,你从牌堆中获得两张具有伤害标签的牌.每回合限两次.当你使用的具有伤害标签的牌结算结束后,你将此牌对应的所有实体牌交给一名角色,你摸x张牌并脱1件衣服(x为你的体力值).',
						yxsxianwan: '娴婉',
						yxsxianwan_info: '结束阶段,你可以令至多x名角色回复一点体力,若你以此法选择的角色不小于1,你穿上1件衣服;不小于2,你获得【埋祸】直到你下个出牌阶段结束.',
						yywucan00972: '无惨',
						yywucan0097: '无惨',
						//生化模式
						bossstart: '灾变',
						bossstart_info: '游戏开始时,你可以选择是否开启【生化感染模式】.若为是,你随机令场上一名不为主公的其他角色成为【鬼神】,其与主公交换身份牌,并重新开始游戏.',
						yxssihai: '恐虐',
						yxssihai_info: '你对人类造成的伤害始终+1,当你对丧尸造成伤害时,你可令此伤害-1.',
						yxssihai2: '恐虐',
						yxskongnue: '死骸',
						yxskongnue_info: '锁定技,出牌阶段你可以多使用x张【杀】,你与其他角色计算距离时-x(x为1+你感染过的人类数).',
						yxszaowang: '恶神',
						yxszaowang_info: '',
						yxsappear: '登场',
						yxsappear_info: '',
						yxsezhou: '厄咒',
						yxsezhou3: '恶缚',
						yxsezhou2: '降咒',
						yxsezhou_info: '结束阶段,你可以对一名角色降咒,并令其获得【恶缚】,当你受到伤害后,你对拥有【恶缚】的角色造成等量的伤害;当拥有【恶缚】的角色死亡后,你可以重新发动此技能.',
						yxszhaohun: '招魂',
						yxszhaohun_info: '出牌阶段,你可以扣1点体力上限令一名已死亡的角色满血复活并加入你所在的阵营,其将手牌摸至体力上限;复活角色于其首回合结束时将出现尸变.',
						yxsyibian: '异变',
						yxsyibian_info: '锁定技,你的首个回合结束时,你变为丧尸,并弃置体力上限调整为2点,获得技能【感染】.',
						yxsganran: '感染',
						yxsganran_info: '当你对一名体力值为1的角色造成伤害时,你防止此伤害,并令其立即发生尸化.',
						yxsganranboss: '感染',
						yxsganranboss_info: '当你对一名体力值为1的角色造成伤害时,你防止此伤害,并令其立即发生尸化.',
						yxsxueqing: '重生',
						yxsxueqing_info: '每二轮限一次,准备阶段,你可以令一名【丧尸】重获新生,并获得【感染免疫】.',
						yxsmianyi: '免疫',
						yxsmianyi_info: '获得抗体,防止你成为丧尸感染的目标.',
						//
						yxspingquan: '平权',
						yxspingquan_info: '出牌阶段限一次,你可以选择一名角色并交给其一张牌,若该角色为女性,你们之中手牌数较少的一方将手牌摸至与对方相同;若该角色为男性且手牌数大于你,其将手牌弃至与你相同,否则其流失1点体力.',
						yxsxindian: '兴典',
						yxsxindian_info: '当一名其他角色于出牌阶段使用的第二张牌结算后,你可以弃置1张牌并选择一项:1.回复体力,2.摸1张牌,令该角色弃置一张手牌,并获得【崇理】直到回合结束.',
						yxschongli: '崇理',
						yxschongli_info: '当你于出牌阶段使用基本牌或装备牌的次数达到3时,你弃置2张牌;达到4时,你弃置4张牌;达到5时,你立即结束出牌阶段.',
						yxschongli1: '崇理',
						yxschongli2: '崇理',
						yxschongli3: '崇理',
						yxsjuji: '遽击',
						yxsjuji_info: '其他角色的出牌阶段开始时,若你与其距离不大于2,则你可以废除1个装备栏,并视为对该角色使用一张【出其不意】,若此做,该角色本回合出杀次数和手牌上限-1.',
						yxsfangzheng: '方阵',
						yxsfangzheng_info: '当你受到伤害后,你可以回复1个装备栏,随机获得一张装备牌,并使用之;若你以此法获得的是武器牌,你视为对伤害来源使用一张不能被响应的【火杀】;若为防具牌,你获得【整列】直到回合结束.',
						yxsfangzheng3: '整列',
						yxsfangzheng3_info: '锁定技,当你受到伤害后,你可以选择至多2名与你相邻的其他角色,你与该些角色各摸1张牌.',
						yxslinglu: '凌戮',
						//yxslinglu2:'凌戮',
						yxslinglu_info: '当一名体力值小于等于1的男性角色受到伤害后,若其在你的攻击范围内,你可以对其使用一张【杀】;若此【杀】造成伤害,你令此杀伤害+X,你将露出胸部直到下回合结束(x为该角色的体力值).',
						yxschihai: '驰海',
						//yxschihai2:'驰海',
						yxschihai_info: '结束阶段,你随机与一名角色交换座位,你可以选择至多2名与你距离为1的角色,视为对该些角色依次使用一张【趁火打劫】.',
						yxsjjq: '狙击',
						yxsjjq_info: '结束阶段,若你手牌数为场上最少,你可以指定一名手牌数最多的角色与其交换手牌(每二轮限一次).',
						yxsganggan: '杠杆',
						yxsganggan_info: '出牌阶段,你可以将一张手牌当作【无中生有】使用;若你以此法使用的牌不是严格递增,你弃置x张牌,直到回合结束你不能使用非基本牌且此技能失效(x为使此技能失效牌的点数).',
						yxsqirang: '祈禳',
						yxsqirang_info: '当你使用一张装备牌或每回合使用第一张基本牌时,你脱1件衣服,并从牌堆或弃牌堆摸两至四张锦囊牌(每回合限触发2次,回合外限触发1次).',
						yxsyuhua: '羽化',
						yxsyuhua_info: '结束阶段,你摸X张牌(X为你本回合使用的锦囊牌数且至少为4),并保留其中至多三张牌;若这三张牌花色均不同,你随机对与你阵营不同的一名其他角色造成1-2点伤害,穿上1件衣服.',
						yxsliangyi: '两仪',
						yxsliangyi_info: '在你的回合外,当你成为其他角色使用牌的目标后,你进行一次判定,若为红色,则取消之.',
						yywucan0097: '无惨',
						yywucan00972: '无惨',
						yywucan0097_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yywucan0098: '无惨',
						yywucan00982: '无惨',
						yywucan0098_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yywucan00912: '无惨',
						yywucan0091_info: '当你受到男性角色造成的伤害时,你插画上的衣服减少1件;当你回复体力后,你插画上的衣服增加1件.',
						yywucan0091: '无惨',
						yxsluanju: '乱局',
						yxsluanju_info: '当你受到伤害后,你可以发动一次【乱武】,若此做,防止你受到一切伤害直到此回合结束.',
						yxsluanwu_info: '限定技,出牌阶段,你可令所有其他角色依次选择一项:①对距离最近(或之一)的角色使用一张【杀】;②失去1点体力.你摸X张牌(X为选择①和②的角色数中的最大值).',
						yxsluanwu: '乱武',
						//yxsmianshang:'免伤',
						yxssese: '涩涩',
						yxssese_info: '当你造成伤害后,若该角色为男性,你可以将其武将牌随机替换为一名>果包角色>.',
						yxsfodi: '佛敌',
						yxsfodi_info: '出牌阶段限一次,你可以选择一名其他角色并将一张牌置于牌顶,该角色选择一项:1.弃置1张手牌并受到1点火焰伤害,2.获得【燃殇】直到其下回合结束,并进行一次【火山】判定.',
						yxsqucao: '曲操',
						yxsqucao_info: '当有角色使用【杀】/【桃】时,若其体力值不大于你,你可以将此牌转移给另一名由你指定的角色;若此做,你观看该角色的手牌,并将其中一张牌当做【调虎离山】/【铁索连环】使用.',
					},
					characterIntro: {
						yxs_ve: '尽管她有名为「魅魔」的象征界符号身份,她却还会回归到作为人的实在界产物「害羞」,并会如同常人般发怒.即便如此,她将「傲娇」这一符号幻象操控得淋漓尽致,以刻薄言语来构建一种回溯性的小女孩般「真实」.',
						yxs_tj: '我是果包专属英雄果小唐哦~',
						yxs_xq: '我是果包专属英雄,元气少女小乔妹妹哦~',
						yxs_dc: '我是果包专属英雄,绝世舞见果蝉儿哦~',
						yxs_llq: '我是果包女主角,无惨玲绮~',
						yxs_wy: '我是果包专属英雄毒美人果小异哦~',
						yxs_fhh: '我是果包专属英雄果伏儿哦~',
						yxs_zj: '我是果包专属英雄,绝色人妻果甄儿哦~',
						yxs_zf: '我是果包专属英雄,邻家小妹果妃儿哦~',
						yxs_wgt: '我是果包专属英雄果国儿,来~叫麻麻~',
						yxs_gz: '我是果包专属英雄,黑丝御姐果照儿哦~',
						yxs_bmh: '我是果包专属英雄,但你必须叫我女王大人!',
						yxs_xhs: '我是果包专属英雄,你的青梅竹马夏夏哦~',
						yxs_wr: '我是果包专属英雄,坏姐姐果王荣哦~',
						yxs_wyj: '我是果包专属英雄,学姐果元姬哦~',
						yxs_gyp: '我是果包专属英雄,学妹果银屏哦~',
						yxs_jack: '开膛手杰克是1888年8月7日到11月9日间,于伦敦东区的白教堂一带以残忍手法连续杀害至少五名妓女的凶手代称.犯案期间,凶手多次写信至相关单位挑衅,却始终未落入法网.其大胆的犯案手法,又经媒体一再渲染而引起当时英国社会的恐慌.如今他依然是欧美文化中最恶名昭彰的杀手之一.',
						yxs_xushi: '我是果包专属英雄你的徐氏姐姐~~',
						yxs_hth: '我是果包专属英雄你的何儿姐姐~~',
						yxs_myy: '我是果包专属英雄美羊羊~~',
						yxs_gdq: '我是果包专属英雄果乔儿~',
						yxs_lbb: '我是果包专属英雄果灵儿~',
						yxs_cy: '我是果包专属英雄,你的霸道妹妹哦~',
						yxs_zr: '我是果包专属英雄,你的野蛮女友哦~',
						yxs_cfr: '我是果包专属英雄,寂寞的邻家少妻哦~',
						yxs_yy: '我是果包专属英雄,最懂你的小艳儿哦~',
						yxs_zgg: '我是果包专属英雄,美貌与智慧的化身小诸儿哦~',
						yxs_wwj: '果包作者,文无姬,亦可为男,亦可为女~',
						yxs_exj: '马汤巴的黑人之母,恩戈拉·恩津加·姆班 (1583-1663)安哥拉女王,以抗击葡萄牙而出闻名.她顽强抗击葡萄牙侵略者,被喻为非洲贞德.',
						yxs_ashi: '织田市(1547年－1583年6月14日),日本战国时代女性,父亲为织田信秀,母不详,长兄为<战国第一风云儿>织田信长,但也有一种说法认为她是信长的堂妹.相传她拥有绝世美貌,被誉为<战国第一美女>,又称阿市、小谷夫人.',
						yxs_lhqd: '立花千代(たちばな ぎんちよ、永禄12年8月13日(1569年9月23日)—庆长7年10月17日(1602年11月30日))是日本战国时代的女性,幼年因为生的美丽被褒美为<筑前的白梅>;逐年成长之间,又拥有极高的气质,后被褒称为<白慈的观音>,耳川一战后,立花千代也被称为<雷神之女>.',
						yxs_lysl: '路易十六(1754年8月23日—1793年1月21日),法兰西波旁王朝第五位国王,路易十五之孙,王太子路易·斐迪南第三子,路易十八和查理十世的同母兄,法兰西波旁王朝复辟前最后一任国王,他既是法国历史上唯一被执行死刑的国王,也是欧洲历史中第二位被执行死刑的国王.',
						yxs_wns: '维纳斯(拉丁语:Vĕnus、英语:Venus),是罗马神话中美的女神,罗马十二主神之一.对应希腊神话中的阿佛洛狄忒.',
						yxs_sbdk: '斯巴达克斯(希腊语:Σπάρτακος;拉丁语:Spartacus),？－约公元前69年.是一名古罗马色雷斯角斗士,军事家,于公元前73年与高卢人克雷斯、埃诺玛依以及甘尼克斯一起领导了反抗罗马共和国统治的斯巴达克斯起义,最终在罗马军队的围攻下壮烈牺牲.',
						yxs_bsm: '奥托·爱德华·利奥波德·冯·俾斯麦(德语:Otto Eduard Leopold von Bismarck;1815年4月1日－1898年7月30日),德意志帝国首任宰相(1871年—1890年),人称<铁血宰相>(德语:Eiserner Kanzler;<铁>指武器,<血>指战争).俾斯麦在外交上纵横捭阖,成为19世纪下半叶欧洲政治舞台上的风云人物.著有回忆录<思考与回忆>.',
						yxs_dfq: '列奥纳多·达·芬奇［意大利语:Leonardo da Vinci;儒略历1452年4月15日(公历4月23日)~1519年5月2日］.意大利文艺复兴画家、科学家、发明家.现代学者称他为<文艺复兴时期最完美的代表>,是人类历史上绝无仅有的全才,其最大的成就是绘画,他的杰作<蒙娜丽莎>和<最后的晚餐>等作品,体现了他精湛的艺术造诣.',
						yxs_ylsb: '伊丽莎白一世(英文:Elizabeth I,1533年9月7日-1603年3月24日),名叫伊丽莎白·都铎,是都铎王朝的最后一位英格兰及爱尔兰女王(1558年11月17日－1603年3月24日在位),也是名义上的法国女王.伊丽莎白一世统治时期,在英国历史上在位时被称为<黄金时代>.',
						yxs_yzq: '玉藻前(たまものまえ)是传说在平安时代末期、鸟羽上皇院政期间(1129年到1156年)出现由白面金毛九尾狐变化而成的绝世美女,由于其才识广博而又绝世美艳,被人称为日本第一才女.',
						yxs_xiangyuz: '项羽(公元前232年 ―公元前202年),唐宋典籍记载为周王族诸侯国项国后代,姬姓,项氏,名籍,字羽,泗水郡下相县(今江苏省宿迁市)人.秦朝末年政治家、军事家,楚国名将项燕的孙子.项羽少时学书、剑皆无所成,然胸怀反秦大志.李晚芳评价<羽之神勇,千古无二>.',
						yxs_yujiz: '虞姬,是楚汉之争时期西楚霸王项羽的美人,名虞,曾在四面楚歌的困境下一直陪伴在项羽身边,项羽为了她作<垓下歌>.相传虞姬容颜倾城,才艺并重,舞姿美艳,并有<虞美人>之称.后人曾根据<垓下歌>,以及相传是虞姬所作的<和垓下歌>,臆想她的结局是公元前202年楚汉战争项羽兵败时,在楚营内自刎,由此流传了一段关于<霸王别姬>的传说.',
						yxsspguanyu: '关羽,字云长,本字长生,河东解县人(今山西省运城市),东汉末年三国时期刘备势力的重要将领.关羽一生战绩卓越,威震华夏.著名的<水淹七军>是关羽戎马生涯光辉的战绩.<三国志>作者陈寿评曰:<关羽、张飞皆称万人之敌,为世虎臣.羽报效曹公,飞义释严颜,并有国士之风.然羽刚而自矜,飞暴而无恩,以短取败,理数之常也.',
						yxs_guanyu: '关羽,字云长,本字长生,河东解县人(今山西省运城市),东汉末年三国时期刘备势力的重要将领.关羽早年因犯事逃离家乡至幽州涿郡,于刘备,张飞于桃园结义.关羽一生追随刘备,忠肝义胆.曾被曹操俘虏,以高官厚爵贿赂,终离曹操而去,千里寻刘备.关羽一生战绩卓越,威震华夏.著名的<水淹七军>是关羽戎马生涯光辉的战绩.但是关羽自视过高,傲视群雄,导致最后的<大意失荆州,败走麦城>.<三国志>作者陈寿评曰:<关羽、张飞皆称万人之敌,为世虎臣.羽报效曹公,飞义释严颜,并有国士之风.然羽刚而自矜,飞暴而无恩,以短取败,理数之常也.',
						yxs_sunquanz: '孙权,字仲谋,三国时期吴国君主.吴郡富春县(今浙江富阳)人.父孙坚,兄孙策,据地江东.权十五岁举孝廉,任阳羡长,代行奉义校尉,随父兄征战.孙策死,权袭位.二十七岁时联合刘备在赤壁大战中大败曹操,奠定了自己的霸业.公元229年,孙权于武昌(今湖北鄂城)正式登基为皇帝,建国号大吴,孙吴王朝正式成立,旋即迁都建业(今南京市).开发江南、加强航海、沟通夷洲是孙权一生的为政举措.三国同时期人物曹操说的<生子当如孙仲谋>是对孙权的最好评价.',
						yxs_qinqiong: '秦琼(？—638年),字叔宝,齐州历城(今山东济南市)人,隋末唐初名将.初为隋将,先后在来护儿、张须陀、裴仁基帐下任职,因勇武过人而远近闻名.后随裴仁基投奔瓦岗军领袖李密,瓦岗败亡后转投王世充,因见王世充为人奸诈,与程咬金等人一起投奔李唐.投唐后随李世民南征北战,是一个能在万马军中取敌将首级的勇将,但也因此浑身是伤.唐统一后,秦琼久病缠身,于贞观十二年(638)病逝.生前官至左武卫大将军、翼国公,死后追赠为徐州都督、胡国公,谥曰<壮>.贞观十七年被列入凌烟阁二十四功臣.',
						yxs_wuzetian: '中国历史上唯一一个正统的女皇帝,也是继位年龄最大的皇帝(67岁即位),又是寿命最长的皇帝之一(终年82岁).唐高宗时为皇后(655—683)、唐中宗和唐睿宗时为皇太后(683—690),后自立为武周皇帝(690—705),改国号<唐>为<周>,定都洛阳,并号其为<神都>.史称<武周>或<南周>,705年退位.武则天也是一位女诗人和政治家.',
						yxs_caocaoz: ' 曹操(155年7月18日－220年3月15日),字孟德,一名吉利,小字阿瞒,汉族,沛国谯(今安徽省亳州市)人.曹操生于宦官之家,适逢乱世,但是胸怀大志,参与剿灭董卓战争,之后在官渡大败袁绍,占据北方,挟天子以令诸侯.最后兵败赤壁,与吴,蜀三分天下.',
						yxs_mozi: ' 宋国大夫,名翟,鲁人(今山东滕州人).墨子是我国战国时期著名的思想家、教育家、科学家、军事家、社会活动家,墨家学派的创始人.墨子曾阻止鲁阳文君攻郑,说服公输般而止楚攻宋.楚惠王打算以书社封墨子,越王也打算以吴之地方五百里以封墨子,但墨子都没有接受.其创立墨家学说,并有<墨子>一书传世.',
						yxs_bole: '伯乐,名孙阳,字子良,一作王良.春秋齐(今山东省威武)人.善于相马,为赵简子御.相传天上御者名伯乐,因其善相,遂号之,传至今.初,见老骥 拖车,喘息不定,伯乐哀之,马亦哀啼,方知乃良驹.后世长以伯乐比喻慧眼识人者.',
						yxs_ajyh: '埃及艳后即克丽奥佩托拉七世,是古埃及托勒密王朝的最后一任法老.她通过政治联姻为古埃及赢取了22年的和平.埃及艳后的一生富有戏剧性,特别是卷入罗马共和末期的政治漩涡,同恺撒、安东尼关系密切,并伴以种种传闻逸事,使她成为文学和艺术作品中的著名人物.',
						yxs_diaochan: '中国古代四大美女之一,今山西忻州人,有野史说其姓霍,无名,又有一说称其任姓,小字红昌.貂蝉是东汉末年司徒王允的义女,国色天香,有倾国倾城之貌,相传貂婵在后花园拜月时,忽然轻风吹来,一块浮云将那皎洁的明月遮住.这时正好王允瞧见,便说我的女儿和月亮比美,月亮比不过,赶紧躲在云彩后面.此后,世人常用<闭月>来形容貂婵的美貌.',
						yxs_yangyuhuan: '唐朝贵妃,名玉环,字太真,蒲州永乐人(今山西永济).杨玉环自小习音律,善歌舞,姿色超群.27岁时,得唐玄宗宠幸,召入宫中,封为贵妃.杨贵妃天生丽质,回眸一笑百媚生,六宫粉黛无颜色,堪称大唐第一美女,此后千余年无出其右者.其与西施、昭君、貂蝉并称中国古代四大美女.',
						yxs_baosi: '褒姒,周幽王姬宫涅的王后,褒姒原是一名弃婴,被一对做小买卖的夫妻收养,在褒国(今陕西省汉中西北)长大,公元前七七九年(周幽王三年),周幽王征伐有褒国,褒人献出美女褒姒乞降,幽王爱如掌上明珠,立为妃,宠冠周王宫,翌年,褒姒生子伯服(一作伯般),幽王对她更加宠爱,竟废去王后申氏和太子宜臼,册立褒姒为王后,立伯服为太子,周太史伯阳叹气道:<周王室已面临大祸,这是不可避免的了.>',
						yxs_npl: '法兰西第一共和国执政、法兰西第一帝国皇帝,出生在法国科西嘉岛,是一位卓越的军事天才.他多次击败保王党的反扑和反法同盟的入侵,捍卫了法国大革命的成果.他颁布的<民法典>更是成为了后世资本主义国家的立法蓝本.他执政期间多次对外扩张,形成了庞大的帝国体系,创造了一系列军事奇迹.',
						kaisa: '凯撒是罗马共和国末期杰出的军事统帅、政治家.他公元前60年与庞培、克拉苏秘密结成前三巨头同盟,随后出任高卢总督,在大约8年的时间内征服了高卢全境(今法国一带),还袭击了日耳曼和不列颠.前49年,他率军占领罗马,打败庞培,集大权于一身,实行独裁统治并制定了<儒略历>.',
						yxs_zhuyuanzhang: ' 朱元璋,明王朝的开国皇帝.元至正二十八年(1368),在基本击破各路农民起义军和扫平元的残余势力后,于南京称帝,国号大明,年号洪武,建立了全国统一的封建政权.朱元璋统治时期被称为<洪武之治>.葬于明孝陵.',
						yxs_jinke: '荆轲,喜好读书击剑,为人慷慨侠义.后游历到燕国,被称为<荆卿>(或荆叔),随之由燕国智勇深沉的<节侠>田光推荐给太子丹,拜为上卿.秦国灭赵后,兵锋直指燕国南界,太子丹震惧,与田光密谋,决定派荆轲入秦行刺秦王.荆轲献计太子丹,拟以秦国叛将樊于期之头及燕督亢(今河北涿县、易县、固安一带,是一块肥沃的土地)地图进献秦王,相机行刺.太子丹不忍杀樊于期,荆轲只好私见樊于期,告以实情,樊于期为成全荆轲而自刎.',
						yxs_libai: '字太白,号青莲居士,又号<谪仙人>,祖籍陇西郡成纪县(今甘肃省平凉市静宁县南).李白是唐朝著名的浪漫主义诗人,有<诗仙>之称.李白生平作诗无数,存世诗文达千余篇之多,<蜀道难>、<行路难>、<梦游天姥吟留别>、<将进酒>等诗篇脍炙人口,妇孺皆知,另有<李太白集>传世.',
						yxs_luban: ' 鲁班,姓公输,名般.战国时期鲁国公族之后,故又称公输子、班输等.出身于工匠世家,是我国古代最著名的发明家、建筑家.鲁班一生发明无数,而最具贡献意义的则要数木工使用的工具,诸如墨斗、锯、和鲁班尺等.为后世的建筑学提供了最基础的工具.除此之外,相传石磨、云梯等工具也是鲁班发明.',
						yxs_lvzhi: '  吕雉,西汉开国皇帝高祖刘邦的原配夫人,中国历史上第一位掌权的女性统治者,是历史上有记载以来的第一位皇后、皇太后.于高祖刘邦死后掌握政权,实行高祖的<黄老政治>,百姓安乐民富国强,为<文景之治>奠定了坚实的基础.',
						yxs_goujian: '勾践,又写作句践,在出土文物<越王勾践剑>里写为鸠浅,司马贞<史记索隐>引<纪年>作菼执.是中国春秋时代后期的越国君主.有关他的先世,有说<其先禹之苗裔>,亦有说<先世无所考>,也有说他是<祝融之后>并且是楚国的芈姓,众说纷纭.父亲则是越侯允常.',
						yxs_lishimin: ' 李世民,唐朝第二位皇帝.他的前半生是立下赫赫武功的军事家.平窦建德、王世充之后,始大量接触文学与书法,有<温泉铭>、<晋祠铭>等墨宝传世.后在玄武门之变击杀自己的兄弟李建成、李元吉两人,成为太子,唐高祖不久被迫让位.世民即位为帝后,积极听取群臣的意见、努力学习文治天下,成功转型为中国史上最出名的政治家与明君之一.唐太宗开创了历史上的<贞观之治>,经过主动消灭群雄割据势力,虚心纳谏、在国内厉行节约、使百姓休养生息,终于使得社会出现了国泰民安的局面.此举为后来的开元盛世奠定了重要的基础,将中国传统农业社会推向一个高峰.',
						yxs_huamulan: ' 花木兰是中国文学作品中的一位代父从军的巾帼英雄,其真实性不详.花木兰最早出现于南北朝一首叙事诗<木兰辞>中,该诗约作于北魏,最初录于南朝陈的<古今乐录>,僧人智匠在<古今乐录>称:<木兰不知名.>',
						yxs_luobinhan: '罗宾汉是英国民间传说中的侠盗式的一个英雄人物,人称汉丁顿伯爵.他武艺出众、机智勇敢、聪明,仇视官吏和教士,是一位劫富济贫、行侠仗义的绿林英雄.传说他住在诺丁汉雪伍德森林.从14世纪中叶起,关于罗宾汉的民谣和传说就开始在民间流传.罗宾汉最突出的就是射箭术高超.现代射箭比赛里就有<罗宾汉>这一术语,指射中另一支已中靶心的箭.',
						yxs_chengjisihan: '成吉思汗,名铁木真,孛儿只斤氏,奇渥温姓,乞颜(起延)部人.从小遭受结拜兄弟札木合迫害,形成刚毅坚韧的性格.1206年,被推举为蒙古帝国的大汗,统一蒙古各部,为之后的进攻中原提供了坚实的基础.',
						yxs_mingchenghuanghou: '明成皇后,朝鲜近代史上的女政治家,本名闵兹映,通称闵妃,是朝鲜京畿道骊州郡人.她是朝鲜王朝高宗李熙的王妃,骊兴闵氏外戚集团的核心人物,19世纪末朝鲜的实际统治者.由于闵妃早期主张开放、后期力抗日本并身死殉难,故深受后世韩国人民的尊崇. 1897年,高宗李熙改国号称<大韩帝国>,追谥闵妃为<孝慈元圣正化合天明成皇后>,故现今韩国史学家多称她为<明成皇后>.',
						yxs_wangzhaojun: '王昭君,名嫱,字昭君,晋朝时为避司马昭讳,又称<明妃>,汉元帝时期宫女,汉族,西汉南郡秭归(今湖北省兴山县)人.匈奴呼韩邪单于阏氏. <昭君出塞>是汉匈交往上的大事,稳定了汉朝和匈奴的外交关系,<汉书.匈奴传>和<后汉书.南匈奴传>都记载了这件事.相传和亲途中,南飞的大雁听到昭君奏起悲壮的离别之曲,看到骑在马上的这位美丽女子,忘记摆动翅膀,跌落地下,因此得<落雁>之名.昭君出塞的故事也被后世传为佳话.',
						yxs_flh: '樊梨花,中国古代四大巾帼英雄之一,以她与丈夫薛丁山平定西北边乱、沙场挥戈与共的故事而家喻户晓,在后世影响深远.其传奇故事被多种形式的文艺作品所表现,尤其是电影、电视剧、歌舞戏剧等多次演绎,是中国古代巾帼英雄的典型形象.',
						yxs_drj: '唐武周时期杰出的著名政治家,时任豫州刺史、魏州刺史等要职,官至凤阁鸾台平章事、内史,卒后追封梁国公.狄仁杰生于贞观、卒于武周时期,经历了大唐鼎盛和动乱的年代.其一生秉承了以民为本、不畏权贵、为民请命的宗旨.狄仁杰通晓了吏治、兵刑等法律制度,在任大理丞任期内解决了诸多案件,被誉为<神探>.狄仁杰为官清廉,素有政绩,有辅国安邦之能,史称<唐室砥柱>.',
						yxs_szbf: '著名军事家,字长卿,中国春秋时期齐国乐安人.曾率领吴国军队大破数倍于己的楚国军队,占领了楚国都城郢城,几乎亡楚.其著有巨作<孙子兵法>十三篇,为后世兵法家所推崇,被誉为<兵学圣典>,置于<武经七书>之首,被译为英文、法文、德文、日文,成为国际间最著名的兵学典范之书.后人尊称其为孙子、孙武子、兵圣、百世兵家之师、东方兵学的鼻祖.',
						yxs_xiangyu: '项籍(前232—前202)字羽,通常被称作项羽,中国古代著名将领及政治人物,汉族,秦下相(今江苏省宿迁市宿城区)人.秦末时被楚怀王熊心封为鲁公,在前207年的决定性战役巨鹿之战中统率楚军大破秦军.秦亡后自封<西楚霸王>,统治黄河及长江下游的梁楚九郡.后在楚汉战争中为汉高祖刘邦所败,在乌江(今安徽和县)自刎而死.',
						yxs_yingzheng: '秦始皇,赢姓,赵氏,名政,秦庄襄王之子.秦始皇22岁时,在雍城举行国君成人加冕仪式,开始<亲理朝政>.后除掉吕不韦,嫪毐等人,重用李斯,尉缭.自公元前230年至前221年,采取由近及远,集中力量,各个击破的策略,先后灭六国,完成统一中国的大业.同时建立起历史上第一个书同文,度同制,车同轨,行同伦的中央集权国家——秦朝.',
						yxs_yuefei: ' 岳飞(1103年－1142年),字鹏举,相州汤阴(今属河南)人.南宋军事家,中国历史上著名的抗金名将.绍兴十一年(1142)十二月二十九日,秦桧以<莫须有>的罪名将岳飞毒死于临安风波亭.1162年,宋孝宗时诏复官,谥武穆,宁宗时追封为鄂王,改谥忠武,有<岳武穆集>传世.',
						yxs_homeless: '福尔摩斯,是一个虚构的侦探人物,是由19世纪末20世纪初的英国侦探小说家阿瑟?柯南·道尔所塑造的一个才华横溢的侦探形象.福尔摩斯不但头脑冷静、观察力敏锐、推理能力极强;而且,他的剑术、拳术和小提琴演奏水平也相当高超,已经成为侦探小说中的典型代表人物之一.',
						yxs_guiguzi: '本名王诩,春秋时纵横家,门下弟子无数.有张仪、苏秦、孙膑、庞涓四弟子.精于兵法、奇门遁甲、五行八卦之学.后人称之为王禅老祖.今传<鬼谷子>十四篇.(搬运自血色衣冠~)',
						yxs_xiaoqiao: '小乔, 庐江皖县(今安徽潜山)人. 史书中称小桥,是中国汉末三国时期的女性, 乔公的次女,东吴名将周瑜的妻子.传说与其姐大乔均为绝世美女.合称<二乔>.',
						yxs_luzhishen: '鲁智深,梁山泊第十三位好汉,十员步军头领第一名.鲁智深原名鲁达,绰号花和尚.是经略的提辖,因为见郑屠欺侮金翠莲父女,三拳打死了镇关西.被官府追捕,逃到五台山削发为僧,改名鲁智深.',
						yxs_ysw: '亚瑟·潘德拉贡(Arthur Pendragon),又译阿瑟·潘德拉贡,通称亚瑟王(King Arthur),是传说中的古不列颠最富有传奇色彩的伟大国王.人们对他的认识更多来自凯尔特神话传说和中世纪的野史文献.传说他是圆桌骑士的首领,一位近乎神话般的传奇人物,被称为<永恒之王>(the Once and Future King).',
						yxs_yangguang: '隋炀帝杨广,是隋朝第二代皇帝,华阴(今陕西华阴)人,生于隋京师长安.杨广在位期间修建大运河,营建东都迁都洛阳城,开创科举制度,亲征吐谷浑,三征高句丽.但因为杨广滥用民力,导致了隋朝的灭亡,618年在江都被部下缢杀.',
						yxs_tangbohu: '唐伯虎,名寅,字伯虎,自号六如居士,明代诗人、画家,吴县(今江苏苏州)人.出身富商家庭,后家道衰落,因祝枝山之劝而潜心读书.公试时为状元,会试时候因科场舞弊案牵连而被斥为吏.后绝意仕途,以卖画为生.唐伯虎为人玩世不恭而又才气横溢,诗文擅名,与祝枝山、文征明、徐祯卿并称<江南四大才子>,画名更著,与沈周、文征明、仇英并称<吴门四家>.民间盛传其点秋香的故事.',
						yxs_zhangsanfeng: '明朝最著名的武术家、道士.原名张通,字君宝,在武当山开山立派,成为武当派开山祖师.明英宗赐号<通微显化真人>;明宪宗特封号为<韬光尚志真仙>;明世宗赠封他为<清虚元妙真君>.传说其丰姿魁伟,大耳圆目,须髯如戟.无论寒暑,只一衲一蓑,一餐能食升斗,或数日一食,或数月不食,事能前知.其在武术上的造诣和超乎寻常的长寿都为后人称道. 曾传洪武年间,两度受朱元璋诏请入京,皆避而不见.其与明初巨贾沈万三亦有交际.其所创太极拳一直延续至今,成为后人养身妙术.',
						yxs_nandinggeer: '出生于意大利,英国护士和统计学家.她谙熟数学,精通英、法、德、意四门语言,除古典文学外,还精于自然科学、历史和哲学,擅长音乐与绘画.在德国学习护理后,曾往伦敦的医院工作.南丁格尔于1854年和38位护士到克里米亚野战医院工作,成为该院的护士长,被称为<克里米亚的天使>又称<提灯女神>.1860年6月15日,南丁格尔在伦敦成立世界第一所护士学校.为了纪念她的成就,1912年,国际护士会倡仪各国医院和护士学校定每年5月12日南丁格尔诞辰日举行纪念活动,并将5月12日定为<国际护士节>,以缅怀和纪念这位伟大的女性.',
						yxs_weizhongxian: '魏忠贤(1568年－1627年12月11日),字完吾,北直隶肃宁(今河北沧州肃宁县)人,汉族,原名李进忠.由才人王氏复姓,出任秉笔太监后,改名魏忠贤.明朝末期宦官.明熹宗时期,出任司礼秉笔太监,极受宠信,被称为<九千九百岁>,排除异己,专断国政,以致人们<只知有忠贤,而不知有皇上>.朱由检继位后,打击惩治阉党,治魏忠贤十大罪,命逮捕法办,自缢而亡,其余党亦被肃清.',
						yxs_meixi: '妺(mò)喜,姓嬉(喜),生卒年不详,亦作妺嬉、末喜、末嬉,有施氏之女,夏朝最后一位君主夏桀的王后.根据先秦时代记述女子名时所用的全称和简称方式,妺喜应姓喜,即嬉(也作僖).由于其名字的<妺>字与<妹妹>的<妹>字字形相似,且在<庄子>等作中也有以妺为妹的用法,因此常误作<妹喜>',
						yxs_lanlinwang: '高长恭(541年―573年),又名高孝瓘、高肃,祖籍渤海调蓨(今河北省景县),神武帝高欢之孙,文襄帝高澄第四子,生母不详,南北朝时期北齐宗室、将领,封爵兰陵郡王.高长恭貌柔心壮,音容兼美.为将躬勤细事,每得甘美,虽一瓜数果,必与将士分享.累次升任至并州刺史.突厥攻入晋阳,高长恭奋力将其击退.邙山之战,高长恭为中军,率领五百骑兵再入周军包围圈,直至金墉城下,因高长恭戴着头盔,城中的人不确定是敌军或是我军,直到高长恭把头盔脱下来城上的人才知道是高长恭,派弓箭手开始放箭保护他,之后高长恭成功替金墉解围,高长恭在此次战中威名大振,士兵们为此战而讴歌他,即后来知名的<兰陵王入阵曲>.',
						yxs_zhangyi: '张仪(？－公元前309年).战国时期著名的纵横家、外交家和谋略家.早年入于鬼谷子门下,学习纵横之术.出山之后,首创<连横>的外交策略,游说六国入秦.得到秦惠文王赏识,封为相国,奉命出使游说各国,以<横>破<纵>,促使各国亲善秦国,受封为武信君.(修改自血色衣冠~)',
						yxs_gongsunyan: '公孙衍,名衍(生卒年不详),战国时期魏国阴晋(今陕西省华阴市东)人,纵横学派的代表人物.曾任魏国犀首(官名.战国魏置.<韩非子·外储说右上>:<犀首,天下之善将也,梁王之臣也.>)之官,人因以<犀首>称之.(修改自血色衣冠~)',
						yxs_baiqi: '白起(？—公元前257年),秦国白氏,名起,郿邑(今陕西眉县常兴镇白家村)人.战国时期名将,杰出的军事家,<兵家>代表人物.熟知兵法,善于用兵,和穰侯魏冉的关系很好.辅佐秦昭王,屡立战功.伊阙之战,大破魏韩24万联军,彻底扫平秦军东进之路.伐楚之战,攻陷楚都郢城.长平之战,重创赵国主力.担任秦军主将30多年,攻城70余座,为秦国统一六国做出了巨大的贡献,受封为武安君.功高震主,得罪应侯,接连贬官.秦昭襄王五十年(前257年),赐死于杜邮.作为中国历史上继孙武、吴起之后又一个杰出的军事家、统帅,白起与廉颇、李牧、王翦并称为战国四大名将,后位列武庙十哲.',
						yxs_ssqx: '上杉谦信(1530年2月18日—1578年4月19日),日本战国时代名将.因其军事建树,后世又称为军神、<越后之龙>.',
						boss_lvbu3: '神鬼无前吕布,OL虎牢关BOSS.',
						yxs_lvbuz: '吕布字奉先,以勇武闻名,号称<飞将>,时有<人中吕布,马中赤兔>之说.吕布所用的实战武器为矛.在<三国演义>及民间其他艺术形象,吕布多被塑造成三国第一猛将,正所谓人中吕布,马中赤兔.',
						yxs_liyuanba: '阿喀琉斯(希腊语:Ἀχιλλεύς、英语:Achilles),是希腊神话中的英雄,海洋女神忒提斯(Thetis)和凡人英雄珀琉斯(Peleus)之子.在阿喀琉斯出生后,母亲忒提斯从命运女神处得知他将会战死,于是用天火烧去阿喀琉斯凡人部分的躯体并用神膏回复.因此阿喀琉斯除了脚踵的致命死穴,全身刀枪不入,诸神难侵.',
						yxs_linchong: '林冲是<水浒传>中的人物,绰号豹子头,东京(河南开封)人氏,梁山一百零八将之一原是八十万禁军枪棒教头,因其妻子被太尉高俅的养子高衙内看上,而多次遭到陷害,最终被逼上梁山落草.后火并王伦,尊晁盖为梁山寨主.他参与了梁山一系列的战役,为山寨的壮大立下汗马功劳.梁山大聚义时,排第六位,上应天雄星,位列马军五虎将,把守正西旱寨.抗击来围剿梁山军的官军、侵略北宋的辽国和剿灭国内造反的田虎、王庆、方腊势力时屡立战功.征方腊后病逝于杭州六和寺,追封忠武郎.',
						yxs_ttkm: '图坦卡蒙(Tutankhamun,前1341-前1323年),是古埃及新王国时期第十八王朝的法老.他9岁便君临天下,19岁突然暴亡,死因为一种家族遗传病.图坦卡蒙并不是古埃及历史上功绩最为卓著的法老,但他墓葬的发现则代表了埃及考古工作的顶峰,他也因此,成为最著名的法老之一.',
						yxs_ksl: '叶卡捷琳娜二世·阿列克谢耶芙娜,也被译为凯瑟琳二世、凯瑟琳大帝,原为彼得三世之妻,后发动兵变即位为俄罗斯女皇,并成为俄罗斯帝国史上在位时间最长的君主.叶卡捷琳娜统治时期被称为<叶卡捷琳娜时代>,通常被认为是俄罗斯帝国及俄罗斯贵族的黄金时代.',
						yxs_ylsd: '亚历山大大帝,英文:Alexander the Great;前356年－前323年6月13日.世界古代史上杰出的军事家和政治家,西方历史上四大(一说七大)军事统帅之首.在腓力二世被刺杀后继位,年仅20岁.面对内外交困的局面,他迅速平定宫廷内部动乱,击败各种反对势力,并于前335年统一希腊全境,同时他鼓励民族间通婚,倡导民族间地位平等,对人类社会文化的进展产生了重大的影响.传说他曾与秦国名将白起交战,连战数月不分伯仲,随后进军印度扩张势力.',
						yxs_anni: '安妮·波妮(Anne Bonny,1697/1700年-1782年4月22日),海盗黄金时代著名海盗,也是历史上最负盛名的女海盗之一,18世纪时活跃在加勒比海地区.据说安妮在杀人之前会露出她的胸部,让对方明白自己是被女人所杀,以羞辱其自尊.',
						yxs_sls: '乔治·索罗斯(英语:George Soros,1930年8月12日－),号称<金融天才>,从1969年建立量子基金至今,他创下了令人难以置信的业绩,以平均每年35%的综合成长率令华尔街同行望尘莫及.他好像具有一种超能的力量左右着世界金融市场.他的一句话就可以使某种商品或货币的交易行情突变,市场的价格随着他的言论上升或下跌.',
						yxs_pqs: '平 清盛(日语:たいらのきよもり;1118年2月10日-1181年3月20日),刑部卿平忠盛之子,平安时代末期权臣,日本历史上首个军事独裁者,也是武家政权的鼻祖.通称平大相国、清盛入道.',
					},
					skill: {
						//朱元璋
						zhuxin: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							limited: true,
							filterTarget(card, player, target) {
								return player.canCompare(target);
							},
							selectTarget: [1, 4],
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							multitarget: true,
							multiline: true,
							content() {
								player.addTempSkill('zhuxin2');
								player.chooseToCompare(targets).callback = lib.skill.zhuxin.callback;
							},
							callback() {
								'step 0';
								player.storage.zhuxin = true;
								player.awakenSkill('zhuxin');
								if (event.num1 < event.num2) {
								}
								('step 1');
								if (event.num1 > event.num2) {
									target.turnOver();
								} else event.goto(3);
								('step 2');
								if (!result.bool) {
									target.damage();
								}
								('step 3');
								if (event.num1 <= event.num2) {
									target.chooseToDiscard(2, true);
								} else event.finish();
								('step 4');
								if (!result.bool) player.draw(0);
							},
							ai: {
								order: 7,
								result: {
									target(player, target) {
										var num = ui.selected.targets.length + 1;
										if (num + player.countMark('zhuxin') <= 6) return -1;
										var hs = player.getCards('h');
										for (var i = 0; i < hs.length; i++) {
											if (get.value(hs[i]) <= 6) {
												switch (hs[i].number) {
													case 13:
														return -1;
													case 12:
														if (player.countMark('zhuxin') + num <= 8) return -1;
														break;
													case 11:
														if (player.countMark('zhuxin') + num <= 7) return -1;
														break;
													default:
														if (hs[i].number > 5 && player.countMark('zhuxin') + num <= 6) return -1;
												}
											}
										}
										return 0;
									},
								},
							},
						},
						zhuxin2: {
							charlotte: false,
							onremove: false,
						},
						qiangyun: {
							mod: {
								judge(player, result) {
									if (_status.event.type == 'phase') {
										if (result.bool == false) {
											result.bool = null;
										}
									}
								},
							},
							trigger: { player: 'loseEnd' },
							forced: true,
							filter(event, player) {
								if (player.countCards('h')) return false;
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										if (i.original == 'h') return true;
									}
								return false;
							},
							content() {
								player.draw(2);
								player.recover();
							},
							ai: {
								effect: {
									target(card) {
										if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
									},
								},
							},
						},
						jingjia: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseUseBegin' },
							forced: true,
							content() {
								'step 0';
								_status.noclearcountdown = true;
								if (
									game.hasPlayer(function (current) {
										return current.countGainableCards(player, 'ej') > 0;
									})
								) {
									player
										.chooseControl('cancel2')
										.set('choiceList', ['视为使用一张无距离限制的【杀】', '获得场上的一张牌'])
										.set('prompt', get.prompt('jingjia'))
										.set('ai', function () {
											if (
												game.hasPlayer(function (current) {
													var att = get.attitude(player, current);
													if (att == 0) return false;
													if (att < 0)
														return (
															current.countCards('e', function (card) {
																return get.value(card, current) > 5;
															}) > 0
														);
													return (
														current.countCards('ej', function (card) {
															return get.position(card) == 'j' || get.value(card, current) <= 0;
														}) > 0
													);
												})
											)
												return 1;
											return 0;
										});
								} else {
									player.chooseControl('ok', 'cancel2').set('prompt', get.prompt2('jingjia'));
								}
								('step 1');
								if (result.control == 'cancel2') {
									delete _status.noclearcountdown;
									if (!_status.noclearcountdown) {
										game.stopCountChoose();
									}
									event.finish();
									return;
								} else if (result.index == 1) {
									player
										.chooseTarget('请选择一名角色,获得其装备区或判定区内的一张牌', true, function (card, player, target) {
											return target.countGainableCards(player, 'ej') > 0;
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											var att = get.attitude(player, target);
											if (
												att > 0 &&
												target.countCards('ej', function (card) {
													return get.position(card) == 'j' || get.value(card, target) <= 0;
												})
											)
												return 2 * att;
											else if (
												att < 0 &&
												target.countCards('e', function (card) {
													return get.value(card, target) > 5;
												})
											)
												return -att;
											return -1;
										});
								} else {
									delete _status.noclearcountdown;
									if (!_status.noclearcountdown) {
										game.stopCountChoose();
									}
									player.chooseUseTarget('视为使用一张没有距离限制的【杀】', { name: 'sha' }, false, 'nodistance');
									event.goto(3);
								}
								('step 2');
								delete _status.noclearcountdown;
								if (!_status.noclearcountdown) {
									game.stopCountChoose();
								}
								if (result.bool) {
									var target = result.targets[0];
									player.gainPlayerCard(target, 'ej', true);
									game.playAudio('../extension/英雄外传/audio/广积粮.mp3');
								}
							},
						},
						//旧关羽
						yywusheng: {
							audio: 'ext:英雄外传/audio:2',
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard(card, player) {
								if (get.zhu(player, 'shouyue')) return true;
								return get.color(card) == 'red';
							},
							position: 'hes',
							viewAs: {
								name: 'sha',
							},
							viewAsFilter(player) {
								if (get.zhu(player, 'shouyue')) {
									if (!player.countCards('hes')) return false;
								} else {
									if (!player.countCards('hes', { color: 'red' })) return false;
								}
							},
							prompt: '将一张红色牌当杀使用或打出',
							check(card) {
								return 4 - get.value(card); //这段如果是一行触发不了sub技.分行的话结尾得在再个},
							},
							group: ['yywusheng_TT'],
							subSkill: {
								TT: {
									audio: 'ext:英雄外传/audio:2',
									trigger: {
										source: 'damageBegin1',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.card.suit == 'heart';
									},
									content() {
										trigger.num++;
									},
								},
							},
							ai: {
								respondSha: true,
								skillTagFilter(player) {
									if (get.zhu(player, 'shouyue')) {
										if (!player.countCards('hes')) return false;
									} else {
										if (!player.countCards('hes', { color: 'red' })) return false;
									}
								},
							},
						},
						yyanyue: {
							trigger: {
								player: ['phaseZhunbeiBegin', 'damageEnd'],
							},
							forced: true,
							filter(event, player) {
								return !player.getEquip('qinglong');
							},
							content() {
								if (trigger.name == 'phaseZhunbei') {
									player.useCard(game.createCard('qinglong', 'spade', 1), player);
								} else {
									player.draw(trigger.num);
								}
							},
						},
						ddanji: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							juexingji: true,
							filter(event, player) {
								var zhu = get.zhu(player);
								if (zhu && zhu.isZhu) {
									var name = zhu.name;
									while (name.includes('_')) {
										name = name.slice(name.indexOf('_') + 1);
									}
									if (name.indexOf('liubei') == 0) return false;
								}
								return !player.storage.danji && player.countCards('h') >= player.hp;
							},
							content() {
								player.storage.danji = true;
								player.loseMaxHp(0);
								player.addSkill('bbudao');
								player.addSkill('zzhanjiang');
								player.awakenSkill('ddanji');
							},
						},
						zzhanjiang: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								source: 'damageBegin1',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.card.suit == 'heart' && event.notLink();
							},
							forced: true,
							content() {
								trigger.num++;
							},
						},
						bbudao: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								if (lib.filter.autoRespondSha.call({ player: player })) return false;
								return event.card && event.card.name == 'sha' && event.source && event.player.classList.contains('dead') == false && _status.currentPhase != player && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && !lib.filter.autoRespondSha.call({ player: player });
							},
							forced: true,
							content() {
								if (get.distance(player, trigger.player, 'attack') > 2) {
									return;
								}
								player.chooseToUse({ name: 'sha' }, `补刀:是否对${get.translation(trigger.player)}使用一张杀？`, trigger.player);
							},
						},
						//孙权
						yxshushi: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 3,
							filterTarget(card, player, target) {
								if (player == target) return true;
								return target.countCards('h') > 0;
							},
							selectTarget: 2,
							multitarget: true,
							multiline: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							prepare: 'throw',
							discard: false,
							filterCard: { suit: 'diamond' },
							check(card) {
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								if (targets[0].countCards('h') && targets[1].countCards('h')) {
									targets[0].chooseToCompare(targets[1]);
								} else {
									event.finish();
								}
								('step 1');
								if (result.bool) {
									targets[1].damage(targets[0]);
								} else {
									targets[0].damage(targets[1]);
								}
							},
							ai: {
								expose: 0.3,
								threaten: 2,
								order: 9,
								result: {
									target: -1,
								},
							},
						},
						yxszhiheng: {
							enable: 'phaseUse',
							usable: 1,
							multitarget: true,
							audio: 'ext:英雄外传/audio:2',
							filterTarget(card, player, target) {
								if (player == target) return false;
								var num = target.countCards('h');
								if (ui.selected.targets.length) {
									return num < ui.selected.targets[0].countCards('h');
								}
								var players = game.filterPlayer();
								for (var i of players) {
									if (num > i.countCards('h')) return true;
								}
								return false;
							},
							selectTarget: 2,
							content() {
								'step 0';
								var gainner, giver;
								if (targets[0].countCards('h') < targets[1].countCards('h')) {
									gainner = targets[0];
									giver = targets[1];
								} else {
									gainner = targets[1];
									giver = targets[0];
								}
								giver.chooseCard('选择一张手牌交给' + get.translation(gainner), true);
								event.gainner = gainner;
								event.giver = giver;
								('step 1');
								var card = result.cards[0];
								event.gainner.gain(card, event.giver, 'giveAuto');
								('step 2');
								if (event.gainner.countCards('h') == event.giver.countCards('h')) {
									player.chooseDrawRecover(2, true);
								}
							},
							ai: {
								order: 10.5,
								threaten: 1.6,
								result: {
									target(player, target) {
										var num = target.countCards('h');
										var att = get.attitude(player, target);
										if (ui.selected.targets.length == 0) {
											if (att > 0) return -1;
											var players = game.filterPlayer();
											for (var i of players) {
												var num2 = i.countCards('h');
												var att2 = get.attitude(player, i);
												if (att2 >= 0 && num2 < num) return -1;
											}
											return 0;
										} else {
											return 1;
										}
									},
									player: 0.1,
								},
							},
						},
						//神鬼无前
						yxsshenqu: {
							//audio:2,
							group: 'yxsshenqu2',
							trigger: { global: 'phaseZhunbeiBegin' },
							filter(event, player) {
								return player.countCards('h') <= player.maxHp;
							},
							forced: true,
							content() {
								player.draw(2);
							},
						},
						yxsshenqu2: {
							trigger: { player: 'damageAfter' },
							forced: true,
							filter(event, player) {
								return player.countCards('h', 'tao') > 0;
							},
							content() {
								player.chooseToUse({ name: 'tao' }, '神躯:是否使用一张桃？');
							},
						},
						jiwu: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								if (player.countCards('h') == 0) return false;
								if (!player.hasSkill('qiangxix')) return true;
								if (!player.hasSkill('retieji')) return true;
								if (!player.hasSkill('rexuanfeng')) return true;
								if (!player.hasSkill('wansha')) return true;
								return false;
							},
							filterCard: true,
							position: 'he',
							check(card) {
								if (get.position(card) == 'e' && _status.event.player.hasSkill('rexuanfeng')) return 16 - get.value(card);
								return 7 - get.value(card);
							},
							content() {
								'step 0';
								var list = [];
								if (!player.hasSkill('qiangxix')) list.push('qiangxix');
								if (!player.hasSkill('retieji')) list.push('retieji');
								if (!player.hasSkill('rexuanfeng')) list.push('rexuanfeng');
								if (!player.hasSkill('wansha')) list.push('wansha');
								if (list.length == 1) {
									player.addTempSkill(list[0]);
									event.finish();
								} else {
									player
										.chooseControl(list, function () {
											if (list.includes('rexuanfeng') && player.countCards('he', { type: 'equip' })) return 'rexuanfeng';
											if (!player.getStat().skill.qiangxix) {
												if (player.hasSkill('qiangxix') && player.getEquip(1) && list.includes('rexuanfeng')) return 'rexuanfeng';
												if (list.includes('wansha') || list.includes('qiangxix')) {
													var players = game.filterPlayer();
													for (var i of players) {
														if (i.hp == 1 && get.attitude(player, i) < 0) {
															if (list.includes('wansha')) return 'wansha';
															if (list.includes('qiangxix')) return 'qiangxix';
														}
													}
												}
											}
											if (list.includes('qiangxix')) return 'qiangxix';
											if (list.includes('wansha')) return 'wansha';
											if (list.includes('rexuanfeng')) return 'rexuanfeng';
											return 'retieji';
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
									if (player.countCards('e', { type: 'equip' })) return 10;
									if (!player.getStat().skill.qiangxix) {
										if (player.hasSkill('qiangxix') && player.getEquip(1) && !player.hasSkill('rexuanfeng')) return 10;
										if (player.hasSkill('wansha')) return 1;
										var players = game.filterPlayer();
										for (var i of players) {
											if (i.hp == 1 && get.attitude(player, i) < 0) return 10;
										}
									}
									return 1;
								},
								result: {
									player(player) {
										if (player.countCards('e', { type: 'equip' })) return 1;
										if (!player.getStat().skill.qiangxix) {
											if (player.hasSkill('qiangxix') && player.getEquip(1) && !player.hasSkill('rexuanfeng')) return 1;
											if (!player.hasSkill('wansha') || !player.hasSkill('qiangxix')) {
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
						//张仪
						yxsxiongbian: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								target: 'useCardToTarget',
							},
							forced: true,
							filter(event, player, name) {
								if (event.player == player) return false;
								if (event.targets.length > 1) return false;
								return (event.card && event.card.name == 'sha') || get.type(event.card) == 'trick';
							},
							content() {
								'step 0';
								var info = get.info(trigger.card);
								var bool = true;
								if (info.multitarget || info.allowMultiple === false) bool = false;
								else {
									var list = game.filterPlayer(function (current) {
										return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
									});
									if (!list.length) bool = false;
								}
								if (bool)
									player
										.chooseTarget(get.prompt2('yxsxiongbian'), function (card, player, target) {
											return _status.event.tarlist.includes(target);
										})
										.set('tarlist', list)
										.set('ai', function (target) {
											var evt = _status.event;
											return get.effect(target, evt.candy, evt.source, evt.player);
										})
										.set('candy', trigger.card)
										.set('', trigger.player);
								else event._result = { bool: false };
								('step 1');
								if (result.bool) {
									var tar = result.targets[0];
									trigger.targets.unshift(tar);
									var evt = trigger.getParent('useCard');
									evt.fixedSeat = true;
									player.storage.yxsxiongbian_a_p.push([player, tar]);
									player.storage.yxsxiongbian_a_c.push(trigger.card);
									game.log(tar, '成为', trigger.player, '使用的', trigger.card, '的额外目标');
								}
							},
							ai: {
								expose: 0.3,
								effect: {
									target(card, player, target, current) {
										if (card.name == 'sha' || get.type(card) == 'trick') {
											if (get.tag(card, 'damage') || card.name == 'guohe' || card.name == 'shunshou' || card.name == 'yxsxiongbian') return 0.5;
											return 2;
										}
									},
								},
							},
							group: ['yxsxiongbian_a', 'yxsxiongbian_b'],
							subSkill: {
								a: {
									init(player, skill) {
										player.storage[`${skill}_p`] = [];
										player.storage[`${skill}_c`] = [];
									},
									trigger: {
										global: ['respond', 'useCard'],
									},
									silent: true,
									filter(event, player) {
										var eve = event.getParent(3);
										if (event.card.name == 'wuxie') var evt = eve.getParent(2);
										else var evt = eve;
										if (evt.name == 'useCard' && evt.card) return player.storage.yxsxiongbian_a_c.indexOf(evt.card) >= 0;
										return false;
									},
									content() {
										'step 0';
										var eve = trigger.getParent(3);
										if (trigger.card.name == 'wuxie') var evt = eve.getParent(2);
										else var evt = eve;
										var n = player.storage.yxsxiongbian_a_c.indexOf(evt.card);
										evt.excluded.addArray(player.storage.yxsxiongbian_a_p[n]);
										game.log(player.storage.yxsxiongbian_a_p, '取消成为', evt.card, '的目标');
										player.storage.yxsxiongbian_a_p.splice(n, 1);
										player.storage.yxsxiongbian_a_c.splice(n, 1);
									},
								},
								b: {
									trigger: {
										global: ['useCardAfter', 'useCardCancelled'],
										//使用卡被取消的时机
									},
									silent: true,
									filter(event, player) {
										return player.storage.yxsxiongbian_a_c.indexOf(event.card) >= 0;
									},
									content() {
										'step 0';
										var n = player.storage.yxsxiongbian_a_c.indexOf(trigger.card);
										player.storage.yxsxiongbian_a_p.splice(n, 1);
										player.storage.yxsxiongbian_a_c.splice(n, 1);
									},
								},
							},
						},
						yyxslianheng: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 1,
							selectTarget: [1, 2],
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								target.draw();
								target.link(false);
								event.tar = target;
								event.tars = game.filterPlayer(function (current) {
									return current != player && current != target;
								});
								if (!event.tars.length) {
									event.goto(4);
								}
								('step 1');
								player
									.chooseTarget(true, '选择<连横>的目标', function (card, player, target) {
										return event.tar.canUse({ name: 'sha' }, target) && target != player && target != event.tar;
									})
									.set('ai', function (target) {
										var eff = get.effect(target, { name: 'sha' }, event.tar, player);
										return eff;
									});
								('step 2');
								event.tars2 = result.targets[0];
								event.tar.chooseControlList([`视为对${get.translation(event.tars2)}使用1张杀`, `交给${get.translation(player)}1张牌`], true).set('ai', function (event, player) {
									var eff = get.effect(event.tars2, { name: 'sha' }, event.tar, event.tar);
									if (eff > 2) return 0;
									return 1;
								});
								('step 3');
								if (result.index == 1) {
									event.goto(4);
								} else {
									event.tar.useCard({ name: 'sha' }, event.tars2);
									event.finish();
								}
								('step 4');
								event.tar.chooseCard('he', 1, `交给${get.translation(player)}1张牌`, true).ai = function (card) {
									return 8 - get.value(card);
								};
								('step 5');
								if (result.bool) {
									player.gain(result.cards, event.tar, 'giveAuto');
								}
							},
							ai: {
								order: 8,
								result: {
									player: 1,
									target(player, target) {
										if (target.isLinked()) return 2;
										return 1;
									},
								},
								expose: 0.3,
							},
						},
						//公孙衍
						yyxshezong: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 1,
							multitarget: true,
							multiline: true,
							selectTarget: [1, Infinity],
							filterTarget(card, player, target) {
								return !target.isMaxHandcard();
							},
							content() {
								if (targets.length) {
									for (var i = 0; i < targets.length; i++) {
										targets[i].link(true);
									}
									game.asyncDraw(targets);
								}
							},
							ai: {
								order: 8,
								expose: 0.1,
								threaten: 1.1,
								result: {
									target(player, target) {
										if (target.isLinked() || !target.hasFriend()) return 1;
										return -0.5;
									},
								},
							},
						},
						yxsxishou: {
							group: ['yxsxishou_turn', 'yxsxishou_damage'],
							subSkill: {
								damage: {
									trigger: { source: 'damageBegin1' },
									forced: true,
									filter(event, player) {
										return event.notLink() && event.card && event.card.name == 'shan' && event.player.hp > player.hp;
									},
									content() {
										trigger.num++;
									},
								},
								turn: {
									trigger: { player: 'turnOverBefore' },
									_priority: 20,
									forced: true,
									filter(event, player) {
										return !player.isTurnedOver();
									},
									content() {
										trigger.cancel();
										game.log(player, '取消了翻面');
									},
								},
							},
							mod: {
								globalTo(from, to, distance) {
									return distance + 1;
								},
							},
							ai: {
								noturn: true,
							},
						},
						yxsjizhan: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'useCardToBefore',
							},
							_priority: 199,
							check(event, player) {
								var eff = get.effect(event.target, { name: 'sha' }, player, player);
								var eff1 = get.effect(event.target, event.card, player, player);
								if (eff1 > eff) return false;
								return true;
							},
							filter(event, player) {
								if (!event.target || !event.targets || !event.targets.length) return false;
								if (event.card.name == 'sha') return false;
								if (event.target == player) return false;
								return true;
							},
							logTarget: 'target',
							content() {
								'step 0';
								var num1 = player.actionHistory[player.actionHistory.length - 1].useCard.length - 1;
								player.actionHistory[player.actionHistory.length - 1].useCard.splice(num1, 1);
								('step 1');
								player.useCard({ name: 'sha' }, trigger.cards, trigger.target, false);
								('step 2');
								trigger.cancel();
							},
							ai: {
								threaten: 1.2,
								expose: 0.3,
							},
						},
						//鬼谷子
						yxszongheng: {
							group: ['yxszongheng1', 'yxszongheng2'],
							subSkill: {
								phase: {
									charlotte: true,
								},
								off: {
									charlotte: true,
								},
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							filter(event, player) {
								if (player.hasSkill('yxszongheng_off')) return false;
								return !game.hasPlayer(function (current) {
									return current.hasSkill('yxshezong2') || current.hasSkill('yxslianheng2');
								});
							},
							content() {
								'step 0';
								player.addTempSkill('yxszongheng_phase');
								player.addSkill('yxszongheng_off');
								player
									.chooseTarget('请将【纵术】(出牌阶段限1次,你可令手牌数不为最多的至多3名角色各摸1张牌并横置.)交给一名其他角色', true, function (card, player, target) {
										return target != player;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return 10 + get.attitude(player, target);
									});
								('step 1');
								if (result.bool && result.targets && result.targets.length) {
									var target = result.targets[0];
									player.line(target, 'fire');
									target.addSkill('yxshezong2');
									game.playAudio('../extension/英雄外传/audio/yxszongheng1.mp3');
								}
								if (
									game.hasPlayer(function (current) {
										return !current.hasSkill('yxshezong2') && current != player;
									})
								) {
									player
										.chooseTarget('请将【横术】(出牌阶段限1次,你可交给1名其他角色1张手牌,如此其解除其横置并选择1项:视为对你指定的另1名角色使用决斗;令你摸2张牌.)交给一名其他角色', true, function (card, player, target) {
											return target != player && !target.hasSkill('yxshezong2');
										})
										.set('ai', function (target) {
											var player = _status.event.player;
											return 10 + get.attitude(player, target);
										});
								} else event.finish();
								('step 2');
								if (result.bool && result.targets && result.targets.length) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.addSkill('yxslianheng2');
									game.playAudio('../extension/英雄外传/audio/yxszongheng2.mp3');
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						yxszongheng1: {
							prompt: '你的第一个准备阶段,可令2名其他角色分别获得【纵术】与【横术】;出牌阶段限1次(首回合除外),或当拥有【纵术】、【横术】的角色死亡时,你可以转移【纵术】、【横术】.',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								if (
									!game.hasPlayer(function (current) {
										return current.hasSkill('yxshezong2') || current.hasSkill('yxslianheng2');
									})
								)
									return false;
								return !player.hasSkill('yxszongheng_phase');
							},
							filterTarget(card, player, target) {
								if (ui.selected.targets.length == 1) {
									return true;
								} else {
									return target.hasSkill('yxshezong2') || target.hasSkill('yxslianheng2');
								}
							},
							targetprompt: ['移走', '得到'],
							selectTarget: 2,
							multitarget: true,
							content() {
								'step 0';
								if (targets[0].hasSkill('yxshezong2') && targets[0].hasSkill('yxslianheng2')) {
									player.chooseControl('纵术', '横术').prompt = '请选择要移动的术';
								} else {
									if (targets[0].hasSkill('yxshezong2')) event._result = { control: '纵术' };
									else event._result = { control: '横术' };
								}
								('step 1');
								if (result.control == '纵术') {
									targets[0].removeSkill('yxshezong2');
									targets[1].addSkill('yxshezong2');
									game.playAudio('../extension/英雄外传/audio/yxszongheng1.mp3');
								} else {
									targets[0].removeSkill('yxslianheng2');
									targets[1].addSkill('yxslianheng2');
									game.playAudio('../extension/英雄外传/audio/yxszongheng2.mp3');
								}
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (ui.selected.targets.length == 0) {
											return get.attitude(player, target) < 0 ? -999 : -3;
										} else {
											return target.countCards('h');
										}
									},
								},
								expose: 0.4,
								threaten: 2,
							},
						},
						yxszongheng2: {
							trigger: {
								global: 'dieAfter',
							},
							forced: true,
							filter(event, player) {
								return event.player.hasSkill('yxshezong2') || event.player.hasSkill('yxslianheng2');
							},
							content() {
								'step 0';
								'step 1';
								if (trigger.player.hasSkill('yxshezong2')) {
									player.chooseTarget(`请将${get.translation(trigger.player)}的【纵术】(出牌阶段限1次,你可以指定手牌数不为最多的至多3名角色各摸1张牌,这些角色横置)交给一名角色`, true).set('ai', function (target) {
										var player = _status.event.player;
										return 10 + get.attitude(player, target);
									});
								} else event.goto(2);
								('step 2');
								if (result.bool && result.targets && result.targets.length) {
									var target = result.targets[0];
									player.line(target, 'fire');
									target.addSkill('yxshezong2');
								}
								('step 3');
								if (trigger.player.hasSkill('yxslianheng2')) {
									player.chooseTarget(`请将${get.translation(trigger.player)}的【横术】(出牌阶段限1次,你可令1名其他角色摸1张牌并解除横置状态,选择1项:视为对你指定的目标使用1张杀;交给你1张牌.)交给一名角色`, true).set('ai', function (target) {
										var player = _status.event.player;
										return 10 + get.attitude(player, target);
									});
								} else event.finish();
								('step 4');
								if (result.bool && result.targets && result.targets.length) {
									var target = result.targets[0];
									player.line(target, 'green');
									target.addSkill('yxslianheng2');
								}
							},
						},
						yxshezong2: {
							charlotte: true,
							mark: true,
							marktext: '纵',
							intro: {
								name: '纵术',
								content: '出牌阶段限1次,你可令手牌数不为最多的至多3名角色各摸1张牌并横置.',
							},
							enable: 'phaseUse',
							usable: 1,
							multitarget: true,
							multiline: true,
							selectTarget: [1, 3],
							filterTarget(card, player, target) {
								return !target.isMaxHandcard();
							},
							prompt: '出牌阶段限1次,你可令手牌数不为最多的至多3名角色各摸1张牌并横置.',
							content() {
								if (targets.length) {
									for (var i = 0; i < targets.length; i++) {
										targets[i].link(true);
									}
									game.asyncDraw(targets);
								}
							},
							ai: {
								order: 8,
								expose: 0.1,
								threaten: 1.1,
								result: {
									target(player, target) {
										if (target.isLinked() || !target.hasFriend()) return 1;
										return -0.5;
									},
								},
							},
						},
						yxslianheng2: {
							charlotte: true,
							mark: true,
							marktext: '横',
							intro: {
								name: '横术',
								content: '出牌阶段限1次,你可令1名其他角色摸1张牌并解除横置状态,选择1项:视为对你指定的目标使用1张杀;交给你1张牌.',
							},
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 1,
							selectTarget: 1,
							filterTarget(card, player, target) {
								return player != target;
							},
							prompt: '出牌阶段限1次,你可令1名其他角色摸1张牌并解除横置状态,选择1项:视为对你指定的目标使用1张杀;交给你1张牌.',
							content() {
								'step 0';
								target.draw();
								target.link(false);
								event.tar = target;
								event.tars = game.filterPlayer(function (current) {
									return current != player && current != target;
								});
								if (!event.tars.length) {
									event.goto(4);
								}
								('step 1');
								player
									.chooseTarget(true, '选择<连横>的目标', function (card, player, target) {
										return event.tar.canUse({ name: 'sha' }, target) && target != player && target != event.tar;
									})
									.set('ai', function (target) {
										var eff = get.effect(target, { name: 'sha' }, event.tar, player);
										return eff;
									});
								('step 2');
								event.tars2 = result.targets[0];
								event.tar.chooseControlList([`视为对${get.translation(event.tars2)}使用1张杀`, `交给${get.translation(player)}1张牌`], true).set('ai', function (event, player) {
									var eff = get.effect(event.tars2, { name: 'sha' }, event.tar, event.tar);
									if (eff > 2) return 0;
									return 1;
								});
								('step 3');
								if (result.index == 1) {
									event.goto(4);
								} else {
									event.tar.useCard({ name: 'sha' }, event.tars2);
									event.finish();
								}
								('step 4');
								event.tar.chooseCard('he', 1, `交给${get.translation(player)}1张牌`, true).ai = function (card) {
									return 8 - get.value(card);
								};
								('step 5');
								if (result.bool) {
									player.gain(result.cards, event.tar, 'giveAuto');
								}
							},
							ai: {
								order: 8,
								result: {
									player: 1,
									target(player, target) {
										if (target.isLinked()) return 2;
										return 1;
									},
								},
								expose: 0.3,
							},
						},
						yxsbaihe: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:英雄外传/audio:2',
							content() {
								player.link();
							},
							ai: {
								order: 4,
								result: {
									player(player) {
										var check1 = game.hasPlayer(function (current) {
											return get.attitude(player, current) < 0 && current.isLinked();
										});
										var check2 = game.hasPlayer(function (current) {
											return get.attitude(player, current) > 0 && current.isLinked();
										});
										if (!player.isLinked()) {
											if (!check1 && !check2) return 3;
											return -2;
										} else {
											if (!check1 && !check2) return -2;
											return 3;
										}
									},
								},
							},
							group: ['yxsbaihe_end'],
							subSkill: {
								end: {
									trigger: {
										player: 'phaseUseAfter',
									},
									forced: true,
									content() {
										'step 0';
										player
											.chooseControl()
											.set('choiceList', ['所有横置角色弃牌', '所有横置角色摸牌', '所有非横置角色弃牌', '所有非横置角色摸牌', '取消'])
											.set('ai', function (event, player) {
												var gain1 = 0,
													gain2 = 0,
													players = game.filterPlayer();
												for (var i of players) {
													if (get.attitude(player, i) > 0) {
														if (!i.isLinked()) {
															gain1++;
														} else gain2++;
													} else {
														if (!i.isLinked()) {
															gain1--;
														} else gain2--;
													}
												}
												if (gain1 > 0) {
													if (gain1 > gain2) return 3;
													if (gain1 < gain2) return 1;
													return 4;
												}
												if (gain1 < 0) {
													if (gain1 > gain2) return 0;
													if (gain1 < gain2) return 2;
													return 4;
												} else {
													if (gain2 > 0) return 1;
													if (gain2 < 0) return 0;
													return 4;
												}
											})
											.set('prompt', '捭阖');
										('step 1');
										if (result.index != 4) {
											game.playXSAudio('yxsbaihe', 2);
											if (result.index == 0) {
												for (var i of game.players) {
													if (i.isLinked()) {
														i.chooseToDiscard(1, 'he', true);
													}
												}
											}
											if (result.index == 1) {
												for (var i of game.players) {
													if (i.isLinked()) {
														i.draw();
													}
												}
											}
											if (result.index == 2) {
												for (var i of game.players) {
													if (!i.isLinked()) {
														i.chooseToDiscard(1, 'he', true);
													}
												}
											} else {
												if (result.index == 3) {
													for (var i of game.players) {
														if (!i.isLinked()) {
															i.draw();
														}
													}
												}
												event.finish();
											}
										}
									},
								},
							},
						},
						yxsmiying: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'damageBegin4',
							},
							forced: true,
							//_priority:15,
							filter(event, player) {
								if (player.hasSkill('yxshezong2') || player.hasSkill('yxslianheng2')) return false;
								if (event.card.name == 'sha') return true;
								return get.type(event.card, 'trick') == 'trick';
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
										if (target.hasSkill('yxshezong2') || target.hasSkill('yxslianheng2')) return;
										if (card.name) return 'zerotarget';
										if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
											return 'zeroplayertarget';
										}
									},
								},
							},
						},
						//白起
						yxstucheng: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseJieshuBegin' },
							forced: true,
							limited: true,
							filter(event, player) {
								return game.hasPlayer(function (player) {
									return player.hp <= 2;
								});
							},
							selectTarget: -1,
							multitarget: true,
							multiline: true,
							content() {
								'step 0';
								'step 1';
								player
									.chooseTarget(get.prompt('yxstucheng'), '对1名体力值小于3的角色造成2点火焰伤害', function (card, player, target) {
										return target.hp <= 2;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									player.line(target, 'fire');
									target.damage(2, 'fire');
									game.playAudio('../extension/英雄外传/audio/yxstucheng2.mp3');
								} else event.finish();
								('step 3');
								if (target.isDead()) event.goto(1);
								else event.finish();
							},
						},
						yxsshasheng: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isDamaged() && event.player.group != '' && event.player.isAlive();
							},
							content() {
								var list = [];
								for (var i = 1; i <= 5; i++) {
									if (trigger.player.isDisabled(i)) continue;
									list.add('equip' + (i == 3 || i == 4 ? 6 : i));
								}
								if (list.length) {
									player.line(trigger.player);
									var num = list.randomGet();
									trigger.player.disableEquip(1);
									trigger.player.disableEquip(2);
									trigger.player.disableEquip(3);
									trigger.player.disableEquip(4);
									trigger.player.disableEquip(5);
									if (num == 'equip6') {
										trigger.player.disableEquip(3);
										trigger.player.disableEquip(4);
									}
								} else {
									trigger.player.loseMaxHp().source = player;
								}
							},
						},
						yxsjianmie: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 1;
								},
							},
							audio: 'ext:英雄外传/audio:2',
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard: true,
							viewAs: {
								name: 'sha',
							},
							viewAsFilter(player) {
								if (!player.countCards('h')) return false;
							},
							prompt: '将一张手牌当作【杀】使用或打出',
							check(card) {
								return 4 - get.value(card);
							},
							group: ['yxsjianmie_i'],
							subSkill: {
								i: {
									audio: 'ext:英雄外传/audio:2',
									trigger: {
										player: 'shaBegin',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.card.suit == 'spade';
									},
									content() {
										trigger.directHit = true;
									},
								},
							},
							ai: {
								skillTagFilter(player) {
									if (!player.countCards('h')) return false;
								},
								respondSha: true,
							},
						},
						//上杉谦信11
						yxsyuehou: {
							audio: 'ext:英雄外传/audio:2',
							//marktext:'越',
							intro: {
								content: '当前有#个标记',
							},
							//mark:true,
							trigger: {
								player: 'damageAfter',
								source: 'damageSource',
							},
							forced: true,
							content() {
								player.addMark('yxsyuehou', trigger.num);
							},
						},
						yxsjunshen: {
							juexingji: true,
							derivation: ['yxsxinfsu', 'yxsshenzhu', 'yxsshenyan'],
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							audio: 'ext:英雄外传/audio:2',
							filter(event, player) {
								return player.countMark('yxsyuehou') >= 3;
							},
							content() {
								player.loseMaxHp();
								player.addSkill('yxsxinfsu');
								player.addSkill('yxsshenzhu');
								player.addSkill('yxsshenyan');
								player.awakenSkill('yxsjunshen');
								player.removeSkill('yxsyuehou');
							},
						},
						yxsfsu: {
							audio: 'yxsfsu1',
							group: ['yxsfsu1', 'yxsfsu2'],
						},
						yxsxinfsu: {
							audio: 'yxsfsu1',
							group: ['yxsfsu1', 'yxsfsu2', 'yxsfsu4'],
						},
						yxsfsu1: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseJudgeBefore' },
							forced: true,
							content() {
								'step 0';
								var check = player.countCards('h') > 2;
								player
									.chooseTarget(get.prompt('yxsfsu'), '跳过判定阶段和摸牌阶段,视为对一名其他角色使用一张【杀】', function (card, player, target) {
										if (player == target) return false;
										return player.canUse({ name: 'sha' }, target, false);
									})
									.set('check', check)
									.set('ai', function (target) {
										if (!_status.event.check) return 0;
										return get.effect(target, { name: 'sha' }, _status.event.player);
									});
								('step 1');
								if (result.bool) {
									player.useCard({ name: 'sha' }, result.targets[0], false);
									trigger.cancel();
									player.skip('phaseDraw');
								}
							},
						},
						yxsfsu2: {
							audio: 'yxsfsu1',
							trigger: { player: 'phaseUseBefore' },
							forced: true,
							filter(event, player) {
								return (
									player.countCards('he', function (card) {
										if (_status.connectMode) return true;
										return get.type(card) == 'equip';
									}) > 0
								);
							},
							content() {
								'step 0';
								var check = player.needsToDiscard();
								player.chooseCardTarget({
									prompt: get.prompt('yxsfsu'),
									prompt2: '弃置一张装备牌并跳过出牌阶段,视为对一名其他角色使用一张【杀】',
									filterCard(card, player) {
										return get.type(card) == 'equip' && lib.filter.cardDiscardable(card, player);
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
									player.discard(result.cards[0]);
									player.useCard({ name: 'sha' }, result.targets[0], false);
									trigger.cancel();
								}
							},
						},
						yxsfsu4: {
							audio: 'yxsfsu1',
							trigger: { player: 'phaseDiscardBefore' },
							forced: true,
							content() {
								'step 0';
								var check = player.needsToDiscard() || player.isTurnedOver() || (player.hasSkill('shebian') && player.canMoveCard(true, true));
								player
									.chooseTarget(get.prompt('yxsfsu'), '跳过弃牌阶段并将武将牌翻面,视为对一名其他角色使用一张【杀】', function (card, player, target) {
										if (player == target) return false;
										return player.canUse({ name: 'sha' }, target, false);
									})
									.set('check', check)
									.set('ai', function (target) {
										if (!_status.event.check) return 0;
										return get.effect(target, { name: 'sha' }, _status.event.player, _status.event.player);
									});
								('step 1');
								if (result.bool) {
									player.turnOver();
									player.useCard({ name: 'sha' }, result.targets[0], false);
									trigger.cancel();
								}
							},
						},
						yxsshenzhu: {
							audio: 'ext:英雄外传/audio:2',
							mod: {
								cardUsable(card) {
									if (card.name == 'sha') return Infinity;
								},
							},
							trigger: { player: 'useCardAfter' },
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.cards.length == 1;
							},
							content() {
								player.draw();
							},
							subSkill: {
								less: {
									charlotte: true,
									intro: { content: '手牌上限-#' },
									mod: {
										maxHandcard(player, num) {
											return num - player.countMark('shenzhu_less');
										},
									},
								},
							},
						},
						yxsshenyan: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: ['respond', 'useCard'] },
							filter(event, player) {
								return event.card && event.card.name == 'shan';
							},
							forced: true,
							content() {
								player.draw(2);
							},
							ai: {
								mingzhi: false,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'respondShan')) {
											return 0.8;
										}
									},
								},
							},
						},
						//拿破仑
						tonglingnpl: {
							forced: true,
							audio: 'ext:英雄外传/audio:2',
							marktext: '统领',
							intro: {
								name: '统领',
								content: 'mark',
							},
							group: ['tonglingnpl1', 'tonglingnpl2'],
						},
						tonglingnpl1: {
							audio: 'tonglingnpl',
							trigger: {
								//source:'damageSource',
								global: ['phaseBefore', 'enterGame'],
							},
							forced: true,
							filter(event, player) {
								return (event.name != 'damage' && (event.name != 'phase' || game.phaseNumber == 0)) || event.num > 0;
							},
							content() {
								player.addMark('tonglingnpl', trigger.name == 'damage' ? trigger.num : 2);
							},
							ai: {
								combo: 'fanpunpl',
								maixie: true,
							},
						},
						tonglingnpl2: {
							audio: 'tonglingnpl',
							init(player) {
								player.storage.tonglingnpl = 0;
							},
							forced: true,
							trigger: { global: 'damageAfter' },
							filter(event, player) {
								return event.source && event.source.isFriendsOf(player) && player.storage.tonglingnpl < 99;
							},
							content() {
								player.storage.tonglingnpl++;
								player.markSkill('tonglingnpl');
							},
							ai: {
								combo: 'fanpu',
							},
						},
						fanpunpl: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								return player.storage.tonglingnpl >= 3;
							},
							filterTarget(card, player, target) {
								return player.canUse('sha', target);
							},
							selectTarget: [1, 3],
							multitarget: true,
							multiline: true,
							content() {
								//player.storage.tonglingnpl-=3;
								//player.unmarkSkill('tonglingnpl');
								player.useCard({ name: 'sha' }, targets, false);
								player.removeMark('tonglingnpl', 3);
							},
							ai: {
								combo: 'tonglingnpl',
								order: 2,
							},
						},
						//埃及艳后11
						yxsseyou: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return !player.storage.yxsseyou || game.roundNumber - player.storage.yxsseyou >= 2;
							},
							filterTarget: true,
							content() {
								'step 0';
								player.storage.yxsseyou = game.roundNumber;
								('step 1');
								//player.awakenSkill('yxsseyou');每两轮限一次技能,player.storage.xxx 要选false!或者注释掉.
								event.targets = game.filterPlayer();
								event.targets.remove(player);
								event.targets.remove(target);
								for (var i = 0; i < event.targets.length; i++) {
									if (event.targets[i].sex != 'male') {
										event.targets.splice(i--, 1);
									}
								}
								('step 2');
								if (event.targets.length) {
									event.current = event.targets.shift();
									if (event.current.countCards('he') && target.isAlive()) {
										event.current.chooseToUse({ name: 'sha' }, target, -1);
									}
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool == false) {
									player.gainPlayerCard(event.current, true, 'he');
								}
								event.goto(2);
							},
							ai: {
								order: 5,
								result: {
									target(player, target) {
										var players = game.filterPlayer();
										if (player.hp > 1) {
											if (game.phaseNumber < game.players.length) return 0;
											for (var i of players) {
												if (i.ai.shown == 0) return 0;
												if (i.sex == 'unknown') return 0;
											}
										}
										var effect = 0;
										for (var i of players) {
											if (i.sex == 'male' && i != target && i != player && i.countCards('he')) effect += get.effect(target, { name: 'sha' }, i, target);
										}
										return effect;
									},
								},
							},
						},
						yxssheshi: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								return event.source != undefined && !event.source.hasSkill('yxssheshi2');
							},
							check(event, player) {
								return get.attitude(player, event.source) <= 0;
							},
							forced: true,
							logTarget: 'source',
							content() {
								trigger.source.storage.yxssheshi2 = player;
								trigger.source.addSkill('yxssheshi2');
							},
							ai: {
								maixie_defend: true,
								threaten: 0.7,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										return 0.8;
										// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
									},
								},
							},
						},
						yxssheshi2: {
							audio: 'ext:英雄外传/audio:2',
							mark: true,
							intro: {
								content: '已获得蛇噬标记',
							},
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							check() {
								return false;
							},
							filter(event, player) {
								return player.hasSkill('yxssheshi2');
							},
							content() {
								'step 1';
								if (player.hp > 1) {
									player.loseHp();
								} else {
									player.removeSkill('yxssheshi2');
								}
							},
							ai: {
								threaten: 0.5,
								neg: true,
							},
						},
						//樊梨花11
						yxsfengyin: {
							init(player, skill) {
								player.addSkillBlocker(skill);
							},
							onremove(player, skill) {
								player.removeSkillBlocker(skill);
							},
							charlotte: true,
							skillBlocker(skill, player) {
								return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
							},
							mark: true,
							intro: {
								content(storage, player, skill) {
									var list = player.getSkills(null, false, false).filter(function (i) {
										return lib.skill.fengyin.skillBlocker(i, player);
									});
									if (list.length) return '失效技能:' + get.translation(list);
									return '无失效技能';
								},
							},
						},
						yxshanqiang: {
							trigger: {
								player: 'useCardToPlayered',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							audio: 'ext:英雄外传/audio:2',
							content() {
								'step 0';
								var controls = ['draw_card'];
								if (trigger.target.countCards('he')) {
									controls.push('discard_card');
								}
								controls.push('cancel');
								player
									.chooseControl(controls)
									.set('ai', function () {
										var trigger = _status.event.getTrigger();
										if (trigger.target.countCards('he') && get.attitude(_status.event.player, trigger.target) < 0) {
											return 'discard_card';
										} else {
											return 'draw_card';
										}
									})
									.set('prompt', get.prompt2('yxshanqiang'));
								('step 1');
								if (result.control == 'draw_card') {
									player.draw(2);
								} else if (result.control == 'discard_card' && trigger.target.countCards('he')) {
									player.discardPlayerCard(trigger.target, 2, true);
								} else event.finish();
								('step 2');
								player.addTempSkill('yxshanqiang2', 'shaEnd');
							},
							ai: {
								expose: 0.1,
							},
						},
						yxshanqiang2: {
							trigger: { source: 'damageEnd' },
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('yxsfengyin');
							},
							content() {
								trigger.player.addTempSkill('yxsfengyin', { player: 'phaseJieshuBegin' });
							},
						},
						yxsbiaoqi: {
							mod: {
								attackFrom(from, to, distance) {
									if (!from.getEquip(1)) return distance - 2;
								},
							},
						},
						//杨广
						jjujian: {
							audio: 3,
							trigger: { player: 'phaseJieshuBegin' },
							filter(event, player) {
								return player.countCards('h', { type: ['trick', 'delay'] }) > 0;
							},
							filterCard(card) {
								return get.type(card, 'trick') == 'trick';
							},
							content() {
								'step 0';
								player.chooseToDiscard('请弃置一张锦囊牌并视为随机使用一张【南蛮入侵】或【万箭齐发】', true, { type: 'trick' });
								('step 1');
								var name = ['nanman', 'wanjian'].randomGet();
								player.useCard(
									{ name: name },
									game.filterPlayer(function (current) {
										return player.canUse({ name: name }, current);
									}),
									'noai',
								);
							},
						},
						yaoyi: {
							trigger: { player: 'damageEnd' },
							forced: true,
							filter(event, player) {
								if (event.num > 0) {
									return game.hasPlayer(function (current) {
										return current.group != 'unknown' && current != player;
									});
								}
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('yaoyi'), [1, 3], function (card, player, target) {
										return target.countCards('h') && target.group != 'qun' && target != player;
									})
									.set('ai', function (target) {
										return 0.5 - get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 2');
								if (event.targets && event.targets.length) {
									event.target = event.targets.shift();
									event.target.chooseCard(`交给${get.translation(player)}一张手牌`, true).ai = function (card) {
										return -get.value(card);
									};
								} else {
									event.finish();
								}
								('step 3');
								if (result.cards?.length) {
									event.target.$give(1, player);
									player.gain(result.cards, event.target);
								}
								event.goto(2);
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								expose: 0.2,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											var players = game.filterPlayer();
											for (var i of players) {
												if (i.group != 'qun' && get.attitude(player, i) <= 0 && i != player) {
													if (target.hp >= 4) return [1, get.tag(card, 'damage') * 2];
													if (target.hp == 3) return [1, get.tag(card, 'damage') * 1.5];
													if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
												}
											}
										}
									},
								},
							},
						},
						shiqin: {
							trigger: { global: 'dying' },
							_priority: 9,
							filter(event, player) {
								return event.player != player && event.player.hp <= 0 && event.player.group == 'qun';
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							logTarget: 'player',
							content() {
								'step 0';
								trigger.player.die();
								('step 1');
								if (!trigger.player.isAlive()) {
									trigger.cancel(true);
								}
							},
						},
						//亚瑟王11
						zyhufuysw: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { source: 'damageEnd' },
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isIn() && !event.player.hasSkill('zyhufuysw2') && event.card && event.card.name !== 'sha';
							},
							content() {
								trigger.player.addSkill('zyhufuysw2');
							},
						},
						zyhufuysw2: {
							mark: true,
							marktext: '臣服',
							intro: {
								content: '已获得臣服标记',
							},
							mod: {
								playerEnabled(card, player, target, now) {
									if (card.name == 'sha') return false;
								},
							},
						},
						yxsqishe: {
							trigger: { player: 'shaBegin' },
							audio: 'ext:英雄外传/audio:2',
							forced: true,
							filter(event, player) {
								if (player.getEquip(1) || player.getEquip(5)) return true;
								return false;
							},
							content() {
								trigger.directHit = true;
							},
						},
						hanbeiysw: {
							enable: 'phaseUse',
							derivation: ['yxsqishe'],
							audio: 'ext:英雄外传/audio:2',
							filter(event, player) {
								return !player.getEquip('wangzhezhijian') || !player.getEquip('shengbei');
							},
							check(card) {
								return 5 - get.value(card);
							},
							content() {
								player.useCard(game.createCard('wangzhezhijian', 'spade', 1), player);
								player.useCard(game.createCard('shengbei', 'heart', 6), player);
								player.chooseUseTarget('视为使用一张没有距离限制的【杀】', { name: 'sha' }, false);
								player.awakenSkill('hanbeiysw');
								player.addSkill('yxsqishe');
							},
						},
						//孙武11
						yxsbingsheng: {
							enable: 'phaseUse',
							filter(event, player) {
								var num = game.countGroup() - 1;
								if (player.getStat().skill.yxsbingsheng >= num) return false;
								return player.countCards('h') > 0;
							},
							filterCard(card) {
								if (ui.selected.cards.length) {
									return card.suit != ui.selected.cards[0].suit;
								}
								return true;
							},
							complexCard: true,
							selectCard: 2,
							check(card) {
								return 8 - get.value(card);
							},
							filterTarget(card, player, target) {
								if (target.hp == Infinity) return false;
								if (target.hp > player.hp) return true;
								if (target.hp < player.hp && target.hp < target.maxHp) return true;
								return false;
							},
							content() {
								var num = target.hp - player.hp;
								if (num > 99) {
									num = 99;
								}
								if (num < -99) {
									num = -99;
								}
								if (num > 0) {
									target.damage(num);
								} else if (num < 0 && target.hp < target.maxHp) {
									target.recover(-num);
								}
							},
							ai: {
								order: 8.5,
								result: {
									target(player, target) {
										var num;
										if (player.hp > target.maxHp) {
											num = player.hp - target.maxHp;
										} else {
											num = player.hp - target.hp;
										}
										if (target.hp == 1 && num) {
											return num + 1;
										}
										return num;
									},
								},
							},
						},
						yxstaolue: {
							mod: {
								maxHandcard(player, num) {
									return num + 3;
								},
							},
							trigger: {
								player: 'phaseJieshuBegin',
							},
							audio: 'ext:英雄外传/audio:2',
							_priority: 29,
							content() {
								'step 0';
								var tp = player.getDamagedHp();
								if (tp >= 0) {
									player.loseHp();
									var nm = player.maxHp - 1 - player.countCards('h');
									if (nm > 0) player.draw(nm);
								}
								('step 1');
								player
									.chooseCard('h', true, '选择要使用的装备牌')
									.set('ai', function (card) {
										if (get.type(card) == 'equip') {
											return 5 - get.value(card);
										}
										return -get.value(card);
									})
									.set('filterCard', lib.filter.cardDiscardable);
								('step 2');
								if (result.bool && result.cards.length) {
									if (get.type(result.cards[0]) == 'equip' && !player.isDisabled(get.subtype(result.cards[0]))) {
										player.chooseUseTarget(result.cards[0], true, 'nopopup');
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name == 'guiyoujie') return [0, 1];
									},
								},
							},
						},

						//狄仁杰
						jiujian: {
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							filterTarget(card, player, target) {
								return target.countCards('h') > 0 && get.distance(player, target) <= 99;
							},
							check(card) {
								return 7 - get.value(card);
							},
							position: 'he',
							content() {
								'step 0';
								var hs = target.getCards('h');
								if (hs.length) {
									event.card = hs.randomGet();
									player.gain(event.card, target);
									target.$giveAuto(event.card, player);
								} else {
									event.finish();
								}
								('step 1');
								var source = target;
								player.chooseTarget('选择一个目标送出' + get.translation(event.card), function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									var att = get.attitude(player, target);
									if (att > 3 && player.countCards('h') > target.countCards('h')) {
										return att;
									}
									return 0;
								};
								('step 2');
								if (result.bool) {
									result.targets[0].gain(card, player);
									player.$give(1, result.targets[0]);
									result.targets[0].addTempSkill('yxs_rejizhi', { player: 'phaseJieshuBegin' });
									player.line(result.targets, 'green');
								}
							},
							ai: {
								order: 9,
								result: {
									target: -1,
									player(player, target) {
										if (get.attitude(player, target) > 0) {
											return 0;
										}
										return 1;
									},
								},
							},
						},
						yxs_rejizhi: {
							audioname: ['lukang'],
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							init(player) {
								player.storage.yxs_rejizhi = 0;
							},
							content() {
								'step 0';
								player.draw();
								('step 1');
								event.card = result[0];
								if (get.type(event.card) == 'basic') {
									player
										.chooseBool(`是否弃置${get.translation(event.card)}并令本回合手牌上限+1？`)
										.set('ai', function (evt, player) {
											return _status.currentPhase == player && player.needsToDiscard(-3) && _status.event.value < 6;
										})
										.set('value', get.value(event.card, player));
								}
								('step 2');
								if (result.bool) {
									player.discard(event.card);
									player.storage.yxs_rejizhi++;
									if (_status.currentPhase == player) {
										player.markSkill('yxs_rejizhi');
									}
								}
							},
							ai: {
								threaten: 1.4,
								noautowuxie: true,
							},
							mod: {
								maxHandcard(player, num) {
									return num + player.storage.yxs_rejizhi;
								},
							},
							intro: {
								content: '本回合手牌上限+#',
							},
							group: 'yxs_rejizhi_clear',
							subSkill: {
								clear: {
									trigger: { global: 'phaseAfter' },
									silent: true,
									content() {
										player.storage.rejizhi = 0;
										player.unmarkSkill('yxs_rejizhi');
									},
								},
							},
						},

						yxsshentan: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'chooseToUse',
							filterCard(card) {
								return get.color(card) != '';
							},
							viewAsFilter(player) {
								return player.countCards('hs') > 0;
							},
							viewAs: { name: 'wuxie' },
							position: 'hs',
							prompt: '将一张手牌当无懈可击使用',
							check(card) {
								var tri = _status.event.getTrigger();
								if (tri && tri.card && tri.card.name == 'chiling') return -1;
								return 8 - get.value(card);
							},
							threaten: 1.2,
						},
						yxskongju: {
							mod: {
								maxHandcard(player, num) {
									if (player.hp < player.maxHp) return num + player.maxHp - player.hp;
								},
								targetEnabled(card, player, target, now) {
									if (target.countCards('h') >= target.maxHp) {
										if (card.name == 'nanman' || card.name == 'wanjian') return false;
									} else if (target.countCards('h') < target.maxHp) {
										if (card.name == 'shunshou' || card.name == 'guohe' || card.name == 'juedou' || card.name == 'lebu' || card.name == 'huogong' || card.name == 'bingliang' || card.name == 'zhujinqiyuan' || card.name == 'chuqibuyi') return false;
									}
								},
							},
						},

						//福尔摩斯
						yxsjiean: {
							trigger: { source: 'damageEnd' },
							forced: true,
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isAlive() && event.parent.name == 'yxsyanyi' && event.player.hp < event.player.maxHp;
							},
							content() {
								'step 0';
								player.draw(trigger.player.maxHp - trigger.player.hp);
								('step 1');
								event.cards = result;
								('step 2');
								player.chooseCardTarget({
									filterCard(card) {
										return _status.event.parent.cards.includes(card);
									},
									selectCard: [1, event.cards.length],
									filterTarget(card, player, target) {
										return player != target;
									},
									ai1(card) {
										if (ui.selected.cards.length) return -1;
										return _status.event.player.countCards('h') - _status.event.player.hp;
									},
									ai2(target) {
										return get.attitude(_status.event.player, target) - 4;
									},
									prompt: '请选择要分配的角色',
								});
								('step 3');
								if (result.bool) {
									result.targets[0].gain(result.cards, player);
									player.$give(result.cards.length, result.targets[0]);
									if (Array.isArray(result.cards))
										for (var i of result.cards) {
											event.cards.remove(i);
										}
									if (event.cards.length) event.goto(2);
								}
							},
						},
						yxsyanyi: {
							enable: 'phaseUse',
							filter(event, player) {
								if (player.hasSkill('yxsyanyi_phase')) return false;
								if (player.getStat().skill.yxsyanyi >= player.hp) return false;
								return player.countCards('h') > 0;
							},
							filterCard: { color: 'black' },
							position: 'he',
							filterTarget(card, player, target) {
								return target != player && target.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').ai = function (event) {
									switch (Math.floor(Math.random() * 5)) {
										case 0:
											return 'heart2';
										case 1:
										case 4:
											return 'diamond2';
										case 2:
											return 'club2';
										case 3:
											return 'spade2';
									}
								};
								('step 1');
								game.log(player, '选择了' + get.translation(result.control));
								event.choice = result.control.slice(0, result.control.length - 1);
								target.popup(result.control);
								target.showHandcards();
								('step 2');
								if (target.countCards('h', { suit: event.choice })) {
									target.damage();
								}
							},
							ai: {
								result: {
									target(player, target) {
										return get.damageEffect(target, player, target);
									},
								},
							},
						},
						// 新关羽
						yxssuohun: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'dying' },
							limited: true,
							filter(event, player) {
								return player.hp < 1;
							},
							content() {
								'step 0';
								player.awakenSkill('yxssuohun');
								player.loseHp(2);
								player.init('shen_guanyu');
								('step 2');
								if (!result.bool) {
									event.finish();
									return;
								}
							},
						},
						//曹操11
						yxsjianxiong: {
							usable: 1,
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								if (player.getStat().skill.yxsjianxiong >= player.hp) return false;
								var type = get.type(event.card, 'trick');
								if (type != 'basic' && type != 'trick' && type != 'equip') return false;
								return player.isPhaseUsing() && event.cards.filterInD().length;
							},
							content() {
								player.chooseToDiscard();
								player.gain(trigger.cards.filterInD(), 'gain2', 'log');
							},
						},
						yxsxiandao: {
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:英雄外传/audio:2',
							position: 'he',
							filterCard(card) {
								return get.type(card) == 'equip';
							},
							filter(event, player) {
								return player.countCards('h', 'sha') > 0 || player.countCards('he', { type: 'equip' }) > 0;
							},
							check(card) {
								return 8 - get.value(card);
							},
							selectTarget: 1,
							multitarget: false,
							discard: false,
							lose: false,
							filterTarget(card, player, target) {
								if (ui.selected.targets.length == 0) {
									return player != target;
								} else {
									return ui.selected.targets[0].inRange(target);
								}
							},
							delay: false,
							content() {
								'step 0';
								targets[0].gain(cards, player, 'give');
								('step 1');
								player.useCard({ name: 'sha' }, targets[0].damage(2));
							},
						},
						//吕布11
						yxsfeijiang: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: ['phaseZhunbeiBegin'],
							},
							forced: true,
							filter(event, player) {
								return !player.getEquip('xiuluolianyuji') || !player.getEquip('chitu');
							},
							content() {
								trigger.name == 'phaseZhunbei';
								player.useCard(game.createCard('xiuluolianyuji', 'diamond', 10), player);
								player.useCard(game.createCard('chitu', 'heart', 5), player);
							},
						},
						yxsxiaoyong: {
							audio: 'ext:英雄外传/audio:2',
							enable: ['chooseToRespond', 'chooseToUse'],
							filterCard(card, player) {
								if (get.zhu(player, 'shouyue')) return true;
								return card.suit == 'spade';
							},
							position: 'hes',
							viewAs: {
								name: 'sha',
							},
							viewAsFilter(player) {
								if (get.zhu(player, 'shouyue')) {
									if (!player.countCards('hes')) return false;
								} else {
									if (!player.countCards('hes', { suit: 'spade' })) return false;
								}
							},
							prompt: '将一张♠️️牌当杀使用或打出',
							check(card) {
								return 4 - get.value(card);
							},
							group: ['yxsxiaoyong_i'],
							subSkill: {
								i: {
									trigger: {
										source: 'damageSource',
									},
									audio: 'ext:英雄外传/audio:2',
									direct: false,
									check(event, player) {
										if (event.player.isTurnedOver()) return get.attitude(player, event.player) > 0;
										if (event.player.hp < 3) {
											return get.attitude(player, event.player) < 0;
										}
										return get.attitude(player, event.player) > 0;
									},
									filter(event, player) {
										if (event._notrigger.includes(event.player)) return false;
										return event.card && event.card.name == 'sha' && event.player.isAlive() && event.card.suit == 'spade';
									},
									logTarget: 'player',
									content() {
										trigger.player.turnOver();
									},
								},
							},
							ai: {
								respondSha: true,
								skillTagFilter(player) {
									if (get.zhu(player, 'shouyue')) {
										if (!player.countCards('hes')) return false;
									} else {
										if (!player.countCards('hes', { suit: 'spade' })) return false;
									}
								},
							},
						},
						yxssheji: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'shaBegin',
							},
							limited: true,
							logTarget: 'target',
							content() {
								'step 0';
								trigger.directHit = true;
								('step 1');
								player.awakenSkill('yxssheji');
								player.removeSkill('yxssheji');
								player.chooseDrawRecover(2, true);
							},
						},
						//阿喀琉斯11
						yxsshengli: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								source: 'damageBegin1',
							},
							forced: true,
							filter(event, player) {
								return player.isDamaged();
							},
							content() {
								trigger.num += player.maxHp - player.hp;
							},
						},
						yxsjulei: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageBegin3' },
							forced: true,
							filter(event, player) {
								return event.nature == 'thunder';
							},
							content() {
								trigger.num += Math.floor(player.hp / 2);
								player.loseMaxHp(2);
							},
						},
						//林冲11
						yxshmq: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: ['useCard', 'respond'] },
							filter(event, player) {
								return event.card && event.card.name == 'shan' && player.hasSha();
							},
							forced: true,
							content() {
								player.chooseToUse({ name: 'sha' }, '回马枪:是否使用一张无距离限制的【杀】？');
								//player.chooseUseTarget('###是否发动【回马枪】？###视为使用一张【杀】',{name:'sha'},false,'nodistance').logSkill='yxshmq';
								player.addTempSkill('yxshmq2', 'shaAfter');
							},
						},
						yxshmq2: {
							mod: {
								globalFrom(from, to, distance) {
									return distance - 99;
								},
							},
							audio: 'ext:英雄外传/audio:2',
							trigger: { source: 'damageBegin1' },
							filter(event, player) {
								return player != event.player && event.num < event.player.hp;
							},
							check(event, player) {
								if (get.attitude(player, event.player) > -2) return false;
								if (player.hp > 2) return true;
								if (player.hp == 2 && event.player.hp < 3) return false;
								return player.hp > 1;
							},
							logTarget: 'player',
							content() {
								trigger.yxshmq2_num = trigger.player.hp - trigger.num;
								trigger.num = trigger.player.hp;
							},
						},
						yxsbaotou: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: ['phaseZhunbeiBegin'],
							},
							forced: true,
							filter(event, player) {
								return !player.getEquip('yxshuaqiang');
							},
							content() {
								trigger.name == 'phaseZhunbei';
								player.useCard(game.createCard('yxshuaqiang', 'heart', 7), player);
							},
						},
						//虞美人11
						yxsjuebie: {
							limited: true,
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'dieBefore',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('yxsjuebie'), '令1名男性角色获牌', function (card, player, target) {
										return target.sex == 'male';
									})
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										if (player.countCards('he') > 0) return -att;
										return att;
									});
								('step 1');
								if (result.bool) {
									var cards = player.getCards('he');
									if (cards.length) {
										var target = result.targets[0];
										target.gain(cards, player);
										player.$giveAuto(cards, target);
										event.draws = game.filterPlayer(function (current) {
											if (target.name !== 'yxs_xiangyuz') return true;
											return target.addSkill('yxsbuqu');
										});
									} else event.finish();
								}
							},
						},
						yxsjianwu: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return (
									player.countCards('he', function (card) {
										return lib.skill.yxsjianwu.filterCard(card, player);
									}) > 0
								);
							},
							position: 'he',
							filterCard(card, player) {
								return get.type(card, player) != 'basic' && get.type(card, player) != 'trick';
							},
							filterTarget(card, player, target) {
								return player.canUse('juedou', target);
							},
							content() {
								'step 0';
								player.useCard({ name: 'juedou' }, target).animate = false;
								('step 1');
								if (player.isIn() && target.isIn()) {
									player.useCard({ name: 'juedou' }, target);
								}
							},
							contentAfter() {
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name == 'phaseUse') {
									evt.skipped = false;
								}
							},
							ai: {
								value: 10,
								order: 1,
								result: {
									target(player, target) {
										return get.effect(target, { name: 'juedou' }, player, target);
									},
								},
							},
						},
						yxsshesheng: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							content() {
								'step 0';
								player.discard(player.getCards('he'));
								var card = get.cardPile2(function (card) {
									return get.type2(card) == 'equip';
								});
								if (card) player.gain(card, 'gain2', 'log');
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
									},
								},
								threaten: 1.3,
							}, //QQQ
						},
						yxsbuqu: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'chooseToUseBefore',
							},
							forced: true,
							filter(event, player) {
								return event.type == 'dying' && player.isDying() && event.dying == player;
							},
							content() {
								'step 0';
								event.card = get.cards()[0];
								if (player.storage.yxsbuqu == undefined) player.storage.yxsbuqu = [];
								player.storage.yxsbuqu.push(event.card);
								//event.trigger('addCardToStorage');
								game.cardsGotoSpecial(event.card);
								player.showCards(player.storage.yxsbuqu, '不屈');
								player.markSkill('yxsbuqu');
								('step 1');
								for (var i = 0; i < player.storage.yxsbuqu.length - 1; i++) {
									if (event.card.number && event.card.number == player.storage.yxsbuqu[i].number) {
										player.storage.yxsbuqu.remove(event.card);
										player.markSkill('yxsbuqu');
										game.cardsDiscard(event.card);
										return;
									}
								}
								trigger.cancel();
								trigger.result = { bool: true };
								if (player.hp <= 0) {
									player.recover(1 - player.hp);
								}
							},
							mod: {
								maxHandcardBase(player, num) {
									if (get.mode() != 'guozhan' && player.storage.buqu && player.storage.buqu.length) return player.storage.buqu.length;
								},
							},
							ai: {
								save: true,
								mingzhi: true,
								skillTagFilter(player, tag, target) {
									if (player != target) return false;
								},
							},
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										player.$throw(storage, 1000);
										game.cardsDiscard(storage);
										delete player.storage.buqu;
									}
								},
							},
						},
						//项羽11
						yxsbawang: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: ['phaseZhunbeiBegin'],
							},
							forced: true,
							filter(event, player) {
								return !player.getEquip('tianlongpochengji') || !player.getEquip('wuzhui');
							},
							content() {
								trigger.name == 'phaseZhunbei';
								player.useCard(game.createCard('tianlongpochengji', 'spade', 8), player);
								player.useCard(game.createCard('wuzhui', 'club', 6), player);
							},
						},
						yxspofu: {
							audio: 'ext:英雄外传/audio:2',
							limited: true,
							trigger: { player: 'phaseJudgeBefore' },
							direct: false,
							content() {
								player.awakenSkill('yxspofu');
								trigger.cancel();
								player.skip('phaseDraw');
								player.disableEquip('equip2');
								player.disableEquip('equip3');
								player.disableEquip('equip4');
								player.disableEquip('equip5');
								player.addTempSkill('yxspofu2', { player: 'phaseJieshuBegin' });
							},
						},
						yxspofu2: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'chooseToUse',
							filterCard: true,
							viewAs: {
								name: 'shuiyanqijunx',
							},
							viewAsFilter(player) {
								if (!player.countCards('h')) return false;
							},
							prompt: '将一张手牌当作【水淹七军】使用',
							check(card) {
								return 4 - get.value(card);
							},
						},
						yxsguixiong: {
							direct: false,
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 1,
							check(card) {
								return 8 - get.value(card);
							},
							position: 'he',
							content() {
								player.loseHp();
								player.loseMaxHp();
								player.addTempSkill('yxsguixiong1', { player: 'phaseJieshuBegin' });
							},
							ai: {
								order: 8,
								result: {
									player(player) {
										if (player.hp <= 1) return player.countCards('h') == 0 ? 1 : 0;
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
						yxsguixiong1: {
							global: 'yxsguixiong2',
						},
						yxsguixiong2: {
							mod: {
								cardEnabled(card, player) {
									var sc = _status.currentPhase;
									if (sc && sc != player && sc.isPhaseUsing() && sc.hasSkill('yxsguixiong1') && sc.countUsed() < 99) {
										return false;
									}
								},
								cardUsable(card, player) {
									var sc = _status.currentPhase;
									if (sc && sc != player && sc.isPhaseUsing() && sc.hasSkill('yxsguixiong1') && sc.countUsed() < 99) {
										return false;
									}
								},
								cardRespondable(card, player) {
									var sc = _status.currentPhase;
									if (sc && sc != player && sc.isPhaseUsing() && sc.hasSkill('yxsguixiong1') && sc.countUsed() < 99) {
										return false;
									}
								},
								cardSavable(card, player) {
									var sc = _status.currentPhase;
									if (sc && sc != player && sc.isPhaseUsing() && sc.hasSkill('yxsguixiong1') && sc.countUsed() < 99) {
										return false;
									}
								},
							},
						},
						//玉藻前11
						yxsshehun: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							filter(event, player) {
								if (
									!game.hasPlayer(function (current) {
										return current.hasSkill('yxsshehun2');
									})
								)
									return true;
								return (
									player.countCards('he') >= 0 &&
									game.hasPlayer(function (current) {
										return current != player && !current.hasSkill('yxsshehun2');
									})
								);
							},
							content() {
								'step 0';
								if (
									game.hasPlayer(function (current) {
										return current.hasSkill('yxsshehun2');
									})
								)
									event.goto(2);
								else
									player.chooseTarget(lib.filter.notMe, get.prompt('yxsshehun'), '令一名其他角色获得「摄魂」标记').set('ai', function (target) {
										var player = _status.event.player;
										var att = -get.attitude(player, target);
										return att * target.countCards('h');
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.addSkill('yxsshehun2');
								}
								event.finish();
								('step 2');
								player.draw();
								var list = game.filterPlayer(function (current) {
									return current.hasSkill('yxsshehun2');
								});
								player.chooseCardTarget({
									prompt: get.prompt('yxsshehun'),
									prompt2: `你可以将${get.translation(list)}的「摄魂」标记转移给其他角色`,
									position: 'he',
									filterTarget(card, player, target) {
										return player != target && !target.hasSkill('yxsshehun2');
									},
									filterCard: lib.filter.cardDiscardable,
									ai1(card) {
										if (_status.event.goon) return 5 - get.value(card);
										return 0;
									},
									ai2(target) {
										var player = _status.event.player;
										var att = -get.attitude(player, target);
										return att * target.countCards('h');
									},
									goon: (function (target) {
										var att = -get.attitude(player, target);
										return att * target.countCards('h') <= 0;
									})(list[0]),
								});
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									player.discard(result.cards).delay = false;
									player.line2(
										game
											.filterPlayer(function (current) {
												if (current.hasSkill('yxsshehun2')) {
													current.removeSkill('yxsshehun2');
													return true;
												}
											})
											.concat(result.targets),
										'green',
									);
									target.addSkill('yxsshehun2');
								} else event.finish();
								('step 4');
							},
							derivation: 'yxsshehun2',
							ai: {
								threaten: 8,
							},
						},
						yxsshehun2: {
							audio: 'ext:英雄外传/audio:2',
							mark: true,
							marktext: '摄魂',
							intro: {
								content: '采阳中~',
							},
							trigger: {
								player: 'phaseUseBefore',
							},
							forced: true,
							filter(event, player) {
								return (
									player.countCards('h') > 0 &&
									game.hasPlayer(function (current) {
										return current != player && current.hasSkill('yxsshehun');
									})
								);
							},
							content() {
								'step 0';
								player.loseHp();
								var targets = game.filterPlayer(function (current) {
									return current != player && current.hasSkill('yxsshehun');
								});
								if (targets.length == 1) {
									event.target = targets[0];
									player.chooseCard('h', true, '摄魂:将一张手牌交给' + get.translation(targets));
								} else
									player.chooseCardTarget({
										prompt: `摄魂:将一张手牌交给${get.translation(targets)}中的一名角色`,
										filterCard: true,
										position: 'h',
										targets: targets,
										forced: true,
										filterTarget(card, player, target) {
											return _status.event.targets.includes(target);
										},
									});
								('step 1');
								if (result.bool) {
									if (!target) target = result.targets[0];
									player.line(target);
									target.gain(result.cards, player, 'giveAuto');
									target.recover();
								}
							},
						},
						yxshuanhuo: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								if (
									game.countPlayer(function (current) {
										return current != player && !current.isUnseen(1);
									}) < 1
								)
									return false;
								if (event.name == 'damage') return event.num > 0;
								return true;
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(1, get.prompt2('yxshuanhuo'), function (card, player, target) {
										return target != player && !target.isUnseen(1);
									})
									.set('ai', function (target) {
										var att = get.attitude(player, target);
										if (ui.selected.targets.length) {
											if (att < 0) {
												return get.rank(target, true) - get.rank(ui.selected.targets[0], true);
											}
										} else {
											if (att >= 0) {
												return 1 / (1 + get.rank(target, true));
											}
										}
										return 0;
									});
								('step 1');
								if (result.bool) {
								} else {
									event.finish();
								}
								('step 2');
								var name1 = result.targets[0].name;
								player.init(name1);
								player.node.avatar.setBackgroundImage('extension/英雄外传/image/九尾狐.jpg');
								player.addTempSkill('yxshuanhuo2');
							},
						},
						yxshuanhuo2: {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							content() {
								'step 1';
								game.playAudio('../extension/英雄外传/audio/yxshuanhuo22.mp3');
								player.init('yxs_yzq');
								var num = player.hp - 2;
								player.loseHp(num);
								('step 2');
								if (!result.bool) {
									event.finish();
									return;
								}
							},
						},
						//伊丽莎白11
						yxsqingjiao: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								//if(player==target) return false;
								if (target.group == 'unknown') return false;
								for (var i = 0; i < ui.selected.targets.length; i++) {
									if (ui.selected.targets[i].group == target.group) return false;
								}
								return target.countCards('he') > 0;
							},
							filter(event, player) {
								return player.countCards('he') >= 0;
							},
							//filterCard:true,
							position: 'he',
							selectTarget: [1, Infinity],
							check(card) {
								if (card.suit == 'spade') return 8 - get.value(card);
								return 5 - get.value(card);
							},
							content() {
								'step 0';
								player.choosePlayerCard(targets[num], true);
								('step 1');
								if (result.bool) {
									if (result.links.length) targets[num].discard(result.links[0]);
									if (result.links[0].suit == 'spade') targets[num].draw(0);
									player.chooseDrawRecover(1, true);
								}
							},
							ai: {
								result: {
									target: -1,
								},
								threaten: 1.2,
								order: 3,
							},
						},
						yxszhenghuang: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('yxszhenghuang'), '对一名装备数量最多的角色造成1点伤害', function (card, player, target) {
										return target.isMaxEquip();
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool) {
									result.targets[0].damage(1, 'fire');
								}
							},
						},
						//达芬奇11
						yxsboshi: {
							audio: 'ext:英雄外传/audio:2',
							usable: 3,
							mod: {
								ignoredHandcard(card, player) {
									if (get.type(card) != 'basic' && get.type(card) != 'equip' && get.type(card) != 'delay') {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && get.type(card) != 'basic' && get.type(card) != 'equip' && get.type(card) != 'delay') return false;
								},
							},
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							content() {
								var card = get.cardPile(function (card) {
									return get.type(card, 'trick') == 'trick';
								});
								if (card) player.gain(card, 'gain2').gaintag.add('');
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'trick' && !get.cardtag(card, 'gifts')) return [1, 3];
									},
								},
								threaten: 1.3,
							},
						},
						yxsfuxing: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return (player.hasSkill('yxsfuxing') && !player.storage.yxsfuxing) || game.roundNumber - player.storage.yxsfuxing >= 2;
							},
							direct: false,
							content() {
								'step 0';
								player.storage.yxsfuxing = game.roundNumber;
								player.chooseTarget(
									get.prompt('yxsfuxing'),
									'令至多三名角色将手牌和体力值补至上限.',
									[1, 3],
									function (card, player, target) {
										return (player = target);
									},
									function (target) {
										var att = get.attitude(player, target);
										var hs1 = player.countCards('h');
										var hs2 = target.countCards('h');
										if (att > 0) return hs1 - hs2;
										return -1;
										if (att > 2) {
											return Math.min(5, target.maxHp) - target.countCards('h');
										}
										return att / 3;
									},
								);
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										//player.drawTo(Math.min(5,result.targets[i].maxHp));
										var num = 5 - result.targets[i].hp;
										result.targets[i].recover(num);
										result.targets[i].drawTo(Math.min(5, result.targets[i].maxHp));
										//result.targets[i].recover(Math.min(5,result.targets[i].maxHp)-1);
									}
									trigger.cancel();
								} else event.finish();
							},
						},
						//美羊羊去衣11
						yxshuirong: {
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseUseEnd'],
							},
							audio: 'ext:英雄外传/audio:2',
							direct: false,
							filter(event, player) {
								return game.hasPlayer(function (target) {
									var num = target.countCards('h');
									return num > target.hp || num < Math.min(5, target.hp);
								});
							},
							content() {
								player.removeMark('yxswucan2');
								var list = [];
								if (player.storage.yxswucan2 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_myy.jpg');
								}
								if (player.storage.yxswucan2 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy1.jpg');
								}
								if (player.storage.yxswucan2 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy2.jpg');
								}
								if (player.storage.yxswucan2 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy3.jpg');
								}
								('step 0');
								player
									.chooseTarget('请选择【慧容】的目标', '令一名角色将手牌数摸至/弃置至与其体力值相同(至多摸至五张)', true, function (card, player, target) {
										var num = target.countCards('h');
										return num > target.hp || num < Math.min(5, target.hp);
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										var num = target.countCards('h');
										if (num > target.hp) return -att * (num - target.hp);
										return att * Math.max(0, Math.min(5, target.hp) - target.countCards('h'));
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									if (target.countCards('h') < target.hp) target.drawTo(Math.min(5, target.hp));
									else target.chooseToDiscard('h', true, target.countCards('h') - target.hp);
								}
							},
						},
						yxsciwei: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { global: 'useCard' },
							forced: true,
							preHidden: true,
							filter(event, player) {
								if (event.all_excluded || event.player == player || event.player != _status.currentPhase || !player.countCards('he')) return false;
								return ['basic', 'trick'].includes(get.type(event.card)) && player.countMark('yxswucan2') < 3;
							},
							content() {
								'step 0';
								player
									.chooseToDiscard(get.prompt('yxsciwei', trigger.player), `弃置一张牌,取消${get.translation(trigger.card)}的所有目标`, 'he')
									.set('ai', function (card) {
										return _status.event.goon / 1.4 - get.value(card);
									})
									.set(
										'goon',
										(function () {
											if (!trigger.targets.length) return -get.attitude(player, trigger.player);
											var num = 0;
											for (var i of trigger.targets) {
												num -= get.effect(i, trigger.card, trigger.player, player);
											}
											return num;
										})(),
									)
									.setHiddenSkill(event.name);
								('step 1');
								if (result.bool) {
									player.addMark('yxswucan2');
									var list = [];
									if (player.storage.yxswucan2 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy1.jpg');
									}
									if (player.storage.yxswucan2 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy2.jpg');
									}
									if (player.storage.yxswucan2 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy3.jpg');
									}
									if (player.storage.yxswucan2 > 3) {
										player.removeMark('yxswucan2', 1);
									}
									trigger.targets.length = 0;
									trigger.all_excluded = true;
								}
							},
							global: 'yxsciwei_ai',
						},
						yxsciwei_ai: {
							mod: {
								aiOrder(player, card, num) {
									if (
										player != _status.currentPhase ||
										player.getHistory('useCard').length > 1 ||
										!game.hasPlayer(function (current) {
											return current != player && (get.realAttitude || get.attitude)(current, player) < 0 && current.hasSkill('yxsciwei') && current.countCards('he') > 0;
										})
									)
										return;
									if (player.getHistory('useCard').length == 0) {
										if (['basic', 'trick'].includes(get.type(card))) return num + 10;
										return;
									}
									if (!['basic', 'trick'].includes(get.type(card))) return num + 10;
									if (!player._yxsciwei_temp) {
										player._yxsciwei_temp = true;
										num /= Math.max(1, player.getUseValue(card));
									}
									delete player._yxsciwei_temp;
									return num;
								},
							},
						},
						yxscaiyuan: {
							trigger: { player: 'phaseJieshuBegin' },
							forced: true,
							audio: 'ext:英雄外传/audio:2',
							preHidden: true,
							filter(event, player) {
								return player.hasSkill('yxscaiyuan_mark');
							},
							content() {
								player.draw(3);
							},
							group: 'yxscaiyuan_count',
							subSkill: {
								mark: {
									//mark:true,
									marktext: '媛',
									charlotte: true,
									intro: { content: '已扣减过体力' },
								},
								count: {
									trigger: { player: 'changeHp' },
									silent: true,
									charlotte: true,
									filter(event, player) {
										return event.num < 0 && !player.hasSkill('yxscaiyuan_mark');
									},
									content() {
										player.addTempSkill('yxscaiyuan_mark', { player: 'phaseAfter' });
										if (player.hasSkill('yxscaiyuan')) player.markSkill('yxscaiyuan_mark');
									},
								},
							},
						},
						yxswucan: {
							audio: 'ext:英雄外传/audio:2', //QQQ
							group: ['yxswucan1', 'yxsnvde'],
						},
						yxswucan1: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['你好坏啊~', '求求你...放过我吧!', '那种事..真的不行!'].randomGet();
								player.say(chat);
								player.addMark('yxswucan2');
								('step 1');
								var list = [];
								if (player.storage.yxswucan2 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yxswucan2 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yxswucan2 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yxswucan2 > 3) {
									player.removeMark('yxswucan2', 1);
								}
							},
						},
						yxsnvde: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yxswucan2');
								('step 1');
								var list = [];
								if (player.storage.yxswucan2 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_myy.jpg');
								}
								if (player.storage.yxswucan2 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy1.jpg');
								}
								if (player.storage.yxswucan2 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy2.jpg');
								}
								if (player.storage.yxswucan2 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy3.jpg');
								}
							},
						},
						yxswucan2: {
							//marktext:'无惨',
							mark: false,
						},
						//果大乔去衣11
						yxsguose: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 3,
							discard: false,
							lose: false,
							delay: false,
							filter(event, player) {
								return player.countCards('hes', { suit: 'diamond' }) > 0;
							},
							position: 'hes',
							filterCard: { suit: 'diamond' },
							filterTarget(card, player, target) {
								if (get.position(ui.selected.cards[0]) != 's' && lib.filter.cardDiscardable(ui.selected.cards[0], player, 'yxsguose') && target.hasJudge('lebu')) return true;
								if (player == target) return false;
								if (!game.checkMod(ui.selected.cards[0], player, 'unchanged', 'cardEnabled2', player)) return false;
								return player.canUse({ name: 'lebu', cards: ui.selected.cards }, target);
							},
							check(card) {
								return 7 - get.value(card);
							},
							content() {
								'step 0';
								player.removeMark('yywucan72');
								var list = [];
								if (player.storage.yywucan72 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_gdq.jpg');
								}
								if (player.storage.yywucan72 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/da1.jpg');
								}
								if (player.storage.yywucan72 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/da2.jpg');
								}
								if (player.storage.yywucan72 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/da3.jpg');
								}
								('step 1');
								if (target.hasJudge('lebu')) {
									player.discard(cards);
									target.discard(target.getJudge('lebu'));
								} else {
									player.useCard({ name: 'lebu' }, target, cards).audio = false;
								}
								player.draw();
							},
							ai: {
								result: {
									target(player, target) {
										if (target.hasJudge('lebu')) return -get.effect(target, { name: 'lebu' }, player, target);
										return get.effect(target, { name: 'lebu' }, player, target);
									},
								},
								order: 9,
							},
						},
						yxsliuli: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								target: 'shaBefore',
							},
							forced: true,
							_priority: 5,
							filter(event, player) {
								if (player.countCards('hes') == 0) return false;
								return game.hasPlayer(function (current) {
									return current != player && lib.filter.targetEnabled(event.card, event.player, current) && player.countMark('yywucan72') < 3;
								});
							},
							content() {
								'step 0';
								//player.draw();
								var next = player.chooseTarget({
									position: 'hes',
									//filterCard:lib.filter.cardDiscardable,
									filterTarget(card, player, target) {
										var trigger = _status.event.getTrigger();
										if (target != player) {
											if (player.canUse(trigger.card, target)) return true;
										}
										return false;
									},
									ai1(card) {
										return ai.get.unuseful(card) + 9;
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
									prompt: get.prompt('yxsliuli'),
								});
								('step 1');
								if (result.bool) {
									player.addMark('yywucan72');
									var list = [];
									if (player.storage.yywucan72 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/da1.jpg');
									}
									if (player.storage.yywucan72 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/da2.jpg');
									}
									if (player.storage.yywucan72 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/da3.jpg');
									}
									if (player.storage.yywucan72 > 3) {
										player.removeMark('yywucan72', 1);
									}
									//player.discard(result.cards);
									trigger.target = result.targets[0];
									trigger.targets.remove(player);
									trigger.targets.push(result.targets[0]);
								} else {
									event.finish();
								}
								('step 2');
								trigger.untrigger();
								trigger.trigger('useCardToBefore');
								trigger.trigger('shaBefore');
							},
							mod: {
								globalFrom(from, to, distance) {
									return distance - 999;
								},
							},
						},
						yywucan7: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan71', 'yynvde7'],
						},
						yywucan71: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['伯符~轻点嘛~', '让..让我做什么都行~'].randomGet();
								player.say(chat);
								player.addMark('yywucan72');
								('step 1');
								var list = [];
								if (player.storage.yywucan72 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/da1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan72 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/da2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan72 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/da3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan72 > 3) {
									player.removeMark('yywucan72', 1);
								}
							},
						},
						yynvde7: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan72');
								('step 1');
								var list = [];
								if (player.storage.yywucan72 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_gdq.jpg');
								}
								if (player.storage.yywucan72 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/da1.jpg');
								}
								if (player.storage.yywucan72 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/da2.jpg');
								}
								if (player.storage.yywucan72 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/da3.jpg');
								}
							},
						},
						yywucan72: {
							//marktext:'无惨',
							mark: false,
						},
						//徐氏去衣
						yxsfuzhu: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { global: 'phaseJieshuBegin' },
							filter(event, player) {
								return event.player != player && ui.cardPile.childElementCount <= player.hp * 20;
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0 && get.effect(event.player, { name: 'sha' }, player, player) > 0;
							},
							logTarget: 'player',
							onWash() {
								_status.event.getParent('yxsfuzhu').washed = false;
								return 'remove';
							},
							content() {
								player.removeMark('yywucan2', 99);
								var list = [];
								if (player.storage.yywucan2 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_xushi.jpg');
								}
								if (player.storage.yywucan2 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu1.jpg');
								}
								if (player.storage.yywucan2 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu2.jpg');
								}
								if (player.storage.yywucan2 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu3.jpg');
								}
								('step 0');
								event.washed = false;
								lib.onwash.push(lib.skill.yxsfuzhu.onWash);
								//event.total=game.players.length+game.dead.length;
								event.total = game.players.length * 2;
								('step 1');
								event.total--;
								var card = get.cardPile2(function (card) {
									return card.name == 'sha' && player.canUse(card, trigger.player, false);
								});
								if (card) {
									card.remove();
									game.updateRoundNumber();
									player.useCard(card, trigger.player, false);
								}
								('step 2');
								if (event.total > 0 && !event.washed && ui.cardPile.childElementCount <= player.hp * 20 && trigger.player.isAlive()) event.goto(1);
								('step 3');
								lib.onwash.remove(lib.skill.yxsfuzhu.onWash);
								var cards = get.cards(ui.cardPile.childElementCount + 1);
								if (Array.isArray(cards))
									for (var i of cards) {
										ui.cardPile.insertBefore(i, ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
									}
								game.updateRoundNumber();
							},
							ai: {
								threaten: 1.5,
							},
						},
						yxswengua: {
							global: 'yxswengua2',
							audio: 'ext:英雄外传/audio:2',
						},
						yxswengua2: {
							audio: 'yxswengua',
							enable: 'phaseUse',
							filter(event, player) {
								if (player.hasSkill('yxswengua3')) return false;
								return (
									player.countCards('he') &&
									game.hasPlayer(function (current) {
										return current.hasSkill('yxswengua');
									})
								);
							},
							forced: true,
							delay: false,
							filterCard: true,
							discard: false,
							lose: false,
							position: 'he',
							prompt() {
								var player = _status.event.player;
								var list = game.filterPlayer(function (current) {
									return current.hasSkill('yxswengua');
								});
								if (list.length == 1 && list[0] == player) return '将一张牌置于牌堆顶或是牌堆底';
								var str = '将一张牌交给' + get.translation(list);
								if (list.length > 1) str += '中的一人';
								return str;
							},
							check(card) {
								if (card.name == 'sha') return 5;
								return 8 - get.value(card);
							},
							content() {
								'step 0';
								var targets = game.filterPlayer(function (current) {
									return current.hasSkill('yxswengua');
								});
								if (targets.length == 1) {
									event.target = targets[0];
									event.goto(2);
								} else if (targets.length) {
									player
										.chooseTarget(true, '选择【问卦】的目标', function (card, player, target) {
											return _status.event.list.includes(target);
										})
										.set('list', targets)
										.set('ai', function (target) {
											var player = _status.event.player;
											return get.attitude(player, target);
										});
								} else {
									event.finish();
								}
								('step 1');
								if (result.bool && result.targets.length) {
									event.target = result.targets[0];
								} else {
									event.finish();
								}
								('step 2');
								if (event.target) {
									player.addTempSkill('yxswengua3', 'phaseUseEnd');
									event.card = cards[0];
									if (event.target != player) {
										player.give(cards, event.target);
									}
								} else {
									event.finish();
								}
								delete _status.noclearcountdown;
								game.stopCountChoose();
								('step 3');
								if (event.target.getCards('he').includes(event.card)) {
									event.target.chooseControlList('问卦', `将${get.translation(event.card)}置于牌堆顶`, `将${get.translation(event.card)}置于牌堆底`, event.target == player, function () {
										if (get.attitude(event.target, player) < 0) return 2;
										return 1;
									});
								} else {
									event.finish();
								}
								('step 4');
								event.index = result.index;
								if (event.index == 0 || event.index == 1) {
									var next = event.target.lose(event.card, ui.cardPile);
									if (event.index == 0) next.insert_card = true;
									game.broadcastAll(function (player) {
										var cardx = ui.create.card();
										cardx.classList.add('infohidden');
										cardx.classList.add('infoflip');
										player.$throw(cardx, 1000, 'nobroadcast');
									}, event.target);
								} else event.finish();
								('step 5');
								('step 6');
								if (event.index == 1) {
									game.log(event.target, '将获得的牌置于牌堆底');
									player.removeMark('yywucan2', 1);
									var list = [];
									if (player.storage.yywucan2 == 0) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_xushi.jpg');
									}
									if (player.storage.yywucan2 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu1.jpg');
									}
									if (player.storage.yywucan2 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu2.jpg');
									}
									if (player.storage.yywucan2 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu3.jpg');
									}
									if (ui.cardPile.childElementCount == 1 || player == event.target) {
										player.draw();
									} else {
										game.asyncDraw([player, target], null, null);
									}
								} else if (event.index == 0) {
									game.log(player, '将获得的牌置于牌堆顶');
									if (ui.cardPile.childElementCount == 1 || player == event.target) {
										player.addMark('yywucan2');
										var list = [];
										if (player.storage.yywucan2 == 1) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu1.jpg');
										}
										if (player.storage.yywucan2 == 2) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu2.jpg');
										}
										if (player.storage.yywucan2 == 3) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu3.jpg');
										}
										if (player.storage.yywucan2 > 3) {
											player.removeMark('yywucan2', 1);
										}
										player.draw('bottom');
									} else {
										game.asyncDraw([player, target], null, null, true);
									}
								}
							},
							ai: {
								order: 2,
								threaten: 1.5,
								result: {
									player(player, target) {
										var target = game.findPlayer(function (current) {
											return current.hasSkill('yxswengua');
										});
										if (target) {
											return get.attitude(player, target);
										}
									},
								},
							},
						},
						yxswengua3: {},
						yywucan: {
							audio: 'ext:英雄外传/audio:2', //QQQ
							group: ['yywucan1', 'yynvde'],
						},
						yywucan1: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['狗贼~你要干..什么!？', '啊~等一下~啊~我夫君呢..'].randomGet();
								player.say(chat);
								player.addMark('yywucan2');
								('step 1');
								var list = [];
								if (player.storage.yywucan2 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan2 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan2 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan2 > 3) {
									player.removeMark('yywucan2', 1);
								}
								if (list.length) {
									player.addAdditionalSkill('yywucan0', list);
								}
							},
						},
						yynvde: {
							audio: 'yywucan0',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan2');
								('step 1');
								var list = [];
								if (player.storage.yywucan2 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_xushi.jpg');
								}
								if (player.storage.yywucan2 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu1.jpg');
								}
								if (player.storage.yywucan2 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu2.jpg');
								}
								if (player.storage.yywucan2 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xu3.jpg');
								}
								if (list.length) {
									player.addAdditionalSkill('yywucan1', list);
								}
							},
						},
						yywucan2: {
							//marktext:'无惨',
							mark: false,
						},
						//去衣关银屏
						yywucan001: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan0011', 'yynvde001'],
						},
						yywucan0011: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['哥哥们~救我!', '我..我可是..虎女~啊~啊~~~~'].randomGet();
								player.say(chat);
								player.addMark('yywucan0012');
								('step 1');
								var list = [];
								if (player.storage.yywucan0012 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gyp1.jpg');
									//player.chooseUseTarget('视为使用一张【杀】',{name:'sha'},false,'nodistance');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan0012 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gyp2.jpg');
									//player.chooseUseTarget('视为使用一张【杀】',{name:'sha'},false,'nodistance');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan0012 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gyp3.jpg');
									//player.chooseUseTarget('视为使用一张【杀】',{name:'sha'},false,'nodistance');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan0012 > 3) {
									player.removeMark('yywucan0012', 1);
								}
								if (list.length) {
									player.addAdditionalSkill('yywucan0010', list);
								}
							},
						},
						yynvde001: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan0012');
								('step 1');
								var list = [];
								if (player.storage.yywucan0012 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_gyp.jpg');
								}
								if (player.storage.yywucan0012 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gyp1.jpg');
								}
								if (player.storage.yywucan0012 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gyp2.jpg');
								}
								if (player.storage.yywucan0012 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gyp3.jpg');
								}
								if (list.length) {
									player.addAdditionalSkill('yywucan0011', list);
								}
							},
						},
						yywucan0012: {
							//marktext:'无惨',
							mark: false,
						},
						yxswuji: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseJieshuBegin' },
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.storage.yywucan0012 >= 3 && !player.storage.yxswuji;
							},
							content() {
								'step 0';
								//player.removeSkill('yxshuxiao');
								player.gainMaxHp();
								('step 1');
								player.recover();
								player.removeMark('yywucan0012', 1);
								player.awakenSkill('yxswuji');
								player.storage.yxswuji = true;
								var card = get.cardPile('qinglong', 'field');
								if (card) {
									player.gain(card, 'gain2', 'log');
								}
							},
						},
						yxsxueji: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							filterTarget: true,
							selectTarget() {
								var player = _status.event.player;
								return [1, Math.max(1, player.getDamagedHp())];
							},
							position: 'he',
							//filterCard:{color:'red'},
							check(card) {
								return 8 - get.value(card);
							},
							multitarget: true,
							multiline: true,
							line: 'fire',
							content() {
								'step 0';
								player.addMark('yywucan0012', 1);
								('step 1');
								var list = [];
								if (player.storage.yywucan0012 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_gyp.jpg');
								}
								if (player.storage.yywucan0012 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gyp1.jpg');
								}
								if (player.storage.yywucan0012 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gyp2.jpg');
								}
								if (player.storage.yywucan0012 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gyp3.jpg');
								}
								('step 2');
								for (var i = 0; i < targets.length; i++) {
									if (!targets[i].isLinked()) {
										targets[i].link(true);
									}
								}
								('step 3');
								('step 4');
								targets[0].damage('fire', 'nocard');
							},
							ai: {
								damage: true,
								fireAttack: true,
								threaten: 1.5,
								order: 7,
								result: {
									target(player, target) {
										var eff = get.damageEffect(target, player, target, 'fire');
										if (target.isLinked()) {
											return eff / 10;
										} else {
											return eff;
										}
									},
								},
							},
						},
						yxsxueji2: {
							mark: false,
						},
						yxshuxiao: {
							trigger: { source: 'damageSource' },
							forced: true,
							audio: 'ext:英雄外传/audio:2',
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.nature == 'fire';
							},
							logTarget: 'player',
							content() {
								if (!player.storage.yxshuxiao3) {
									player.storage.yxshuxiao3 = [];
								}
								player.storage.yxshuxiao3.add(trigger.player);
								trigger.player.draw(0);
								player.addTempSkill('yxshuxiao3');
							},
						},
						yxshuxiao3: {
							mark: false,
							intro: {
								content: 'players',
							},
							mod: {
								cardUsableTarget(card, player, target) {
									if (player.storage.yxshuxiao3 && player.storage.yxshuxiao3.includes(target)) return true;
								},
							},
						},
						//王荣去衣
						yxsminsi: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							getResult(cards) {
								var l = cards.length;
								var all = Math.pow(l, 2);
								var list = [];
								for (var i = 1; i < all; i++) {
									var array = [];
									for (var j = 0; j < l; j++) {
										if (Math.floor((i % Math.pow(2, j + 1)) / Math.pow(2, j)) > 0) array.push(cards[j]);
									}
									var num = 0;
									for (var k of array) {
										num += k.number;
									}
									if (num == 13) list.push(array);
								}
								if (list.length) {
									list.sort(function (a, b) {
										if (a.length != b.length) return b.length - a.length;
										return get.value(a) - get.value(b);
									});
									return list[0];
								}
								return list;
							},
							usable: 2,
							filter(event, player) {
								//if(player.hasSkill('yxsminsi_phase')) return false;
								//if(player.getStat().skill.yxsminsi>=player.hp) return false;
								return player.countCards('h') > 0 || player.countCards('e') > 0;
							},
							filterCard(card) {
								var num = 0;
								if (Array.isArray(ui.selected.cards))
									for (var i of ui.selected.cards) {
										num += i.number;
									}
								return card.number + num <= 13;
							},
							complexCard: true,
							selectCard() {
								var num = 0;
								if (Array.isArray(ui.selected.cards))
									for (var i of ui.selected.cards) {
										num += i.number;
									}
								if (num == 13) return ui.selected.cards.length;
								return ui.selected.cards.length + 2;
							},
							check(card) {
								var evt = _status.event;
								if (!evt.yxsminsi_choice) evt.yxsminsi_choice = lib.skill.yxsminsi.getResult(evt.player.getCards('he'));
								if (!evt.yxsminsi_choice.includes(card)) return 0;
								return 1;
							},
							position: 'he',
							content() {
								player.addMark('yywucan0032', 2);
								var list = [];
								if (player.storage.yywucan0032 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_wr.jpg');
								}
								if (player.storage.yywucan0032 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr1.jpg');
								}
								if (player.storage.yywucan0032 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr2.jpg');
								}
								if (player.storage.yywucan0032 >= 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr3.jpg');
								}
								if (player.storage.yywucan0032 >= 4) {
									player.removeMark('yywucan0032', 1);
								}
								player.draw(cards.length * 2).gaintag = ['yxsminsi2'];
								player.addTempSkill('yxsminsi2');
							},
							ai: {
								order: 5,
								result: { player: 1 },
							},
						},
						yxsminsi2: {
							onremove(player) {
								player.removeGaintag('yxsminsi2');
							},
							mod: {
								targetInRange(card, player, target) {
									if (!card.cards) return;
									for (var i of card.cards) {
										if (!i.hasGaintag('yxsminsi2') || get.color(i) != 'black') return;
									}
									return true;
								},
								ignoredHandcard(card, player) {
									if (card.hasGaintag('yxsminsi2') && get.color(card) == 'red') {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.hasGaintag('yxsminsi2') && get.color(card) == 'red') {
										return false;
									}
								},
								aiOrder(player, card, num) {
									if (get.itemtype(card) == 'card' && card.hasGaintag('yxsminsi2') && get.color(card) == 'black') return num - 0.1;
								},
							},
						},
						yxsjijing: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							content() {
								'step 0';
								player.judge();
								('step 1');
								var num = result.number;
								var next = player.chooseToDiscard(
									`是否弃置任意张点数之和为${get.cnNumber(num)}的牌并回满体力？`,
									function (card) {
										var num = 0;
										if (Array.isArray(ui.selected.cards))
											for (var i of ui.selected.cards) {
												num += i.number;
											}
										return card.number + num <= _status.event.num;
									},
									'he',
								);
								next.set('num', num);
								next.set('complexCard', true);
								next.set('selectCard', function () {
									var num = 0;
									if (Array.isArray(ui.selected.cards))
										for (var i of ui.selected.cards) {
											num += i.number;
										}
									if (num == _status.event.num) return ui.selected.cards.length;
									return ui.selected.cards.length + 2;
								});
								next.set(
									'cardResult',
									(function () {
										var cards = player.getCards('he');
										var l = cards.length;
										var all = Math.pow(l, 2);
										var list = [];
										for (var i = 1; i < all; i++) {
											var array = [];
											for (var j = 0; j < l; j++) {
												if (Math.floor((i % Math.pow(2, j + 1)) / Math.pow(2, j)) > 0) array.push(cards[j]);
											}
											var numx = 0;
											for (var k of array) {
												numx += k.number;
											}
											if (numx == num) list.push(array);
										}
										if (list.length) {
											list.sort(function (a, b) {
												return get.value(a) - get.value(b);
											});
											return list[0];
										}
										return list;
									})(),
								);
								next.set('ai', function (card) {
									if (!_status.event.cardResult.includes(card)) return 0;
									return 6 - get.value(card);
								});
								('step 2');
								if (result.bool) {
									player.hp = player.maxHp;
									player.removeMark('yywucan0032', 99);
									var list = [];
									if (player.storage.yywucan0032 == 0) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_wr.jpg');
									}
									if (player.storage.yywucan0032 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr1.jpg');
									}
									if (player.storage.yywucan0032 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr2.jpg');
									}
									if (player.storage.yywucan0032 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr3.jpg');
									}
								}
							},
						},
						yxszhuide: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'die' },
							forceDie: true,
							forced: true,
							content() {
								'step 0';
								player.chooseTarget(get.prompt2('yxszhuide'), lib.filter.notMe).set('ai', function (target) {
									return get.attitude(_status.event.player, target);
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									var names = [];
									var cards = [];
									while (cards.length < 4) {
										var card = get.cardPile2(function (card) {
											return !cards.includes(card) && !names.includes(card.name) && get.type(card) == 'basic';
										});
										if (card) {
											cards.push(card);
											names.push(card.name);
										} else break;
									}
									if (cards.length) target.gain(cards, 'gain2');
								}
							},
						},
						yywucan003: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan0031', 'yynvde003'],
						},
						yywucan0031: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageBegin4' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['我不能背叛陛下..', '你们这样..会遭..啊~~~'].randomGet();
								player.say(chat);
								player.addMark('yywucan0032');
								('step 1');
								var list = [];
								if (player.storage.yywucan0032 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan0032 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan0032 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan0032 > 3) {
									player.removeMark('yywucan0032', 1);
								}
							},
						},
						yynvde003: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan0032');
								('step 1');
								var list = [];
								if (player.storage.yywucan0032 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_wr.jpg');
								}
								if (player.storage.yywucan0032 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr1.jpg');
								}
								if (player.storage.yywucan0032 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr2.jpg');
								}
								if (player.storage.yywucan0032 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wr3.jpg');
									if (list.length) {
										player.addAdditionalSkill('yywucan0023', list);
									}
								}
							},
						},
						yywucan0032: {
							//marktext:'无惨',
							mark: false,
						},
						//王元姬去衣
						yxsyanxi: {
							enable: 'phaseUse',
							//usable:1,
							audio: 'ext:英雄外传/audio:2',
							filterTarget(card, player, target) {
								return target != player && target.countCards('h') > 0;
							},
							filter(event, player) {
								if (player.hasSkill('yxsyanxi_phase')) return false;
								if (player.getStat().skill.yxsyanxi >= player.hp) return false;
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h') > 0;
								});
							},
							content() {
								'step 0';
								event.card = target.getCards('h').randomGet();
								var cards;
								cards = get.cards(2);
								event.cards = cards.concat([event.card]);
								while (cards.length) {
									ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
								}
								if (get.mode() == 'guozhan') {
									var num = ui.cardPile.childElementCount;
									var num1 = get.rand(1, num - 1),
										num2 = get.rand(1, num - 1);
									if (num1 == num2) {
										if (num1 == 0) num2++;
										else num1--;
									}
									event.cards = [event.card, ui.cardPile.childNodes[num1], ui.cardPile.childNodes[num2]];
								}
								game.updateRoundNumber();
								event.cards.randomSort();
								game.log(player, '展示了', event.cards);
								event.videoId = lib.status.videoId++;
								var str = get.translation(player) + `对${get.translation(target)}发动了【宴戏】`;
								game.broadcastAll(
									function (str, id, cards) {
										var dialog = ui.create.dialog(str, cards);
										dialog.videoId = id;
									},
									str,
									event.videoId,
									event.cards,
								);
								game.addVideo('showCards', player, [str, get.cardsInfo(event.cards)]);
								('step 1');
								var func = function (id, target) {
									var dialog = get.idDialog(id);
									if (dialog) dialog.content.firstChild.innerHTML = `猜猜哪张是${get.translation(target)}的手牌？`;
								};
								if (player == game.me) func(event.videoId, target);
								else if (player.isOnline()) player.send(func, event.videoId, target);
								('step 2');
								var next = player.chooseButton(true);
								next.set('dialog', event.videoId);
								next.set('ai', function (button) {
									if (_status.event.answer) return button.link == _status.event.answer ? 1 : 0;
									return get.value(button.link, _status.event.player);
								});
								if (player.hasSkillTag('viewHandcard', null, target, true)) next.set('answer', card);
								('step 3');
								game.broadcastAll('closeDialog', event.videoId);
								player.addTempSkill('yxsyanxi2');
								var card2 = result.links[0];
								if (card2 == card) {
									player.popup('猜对啦~');
									cards.remove(card2);
									player.$gain2(cards);
									player.gain(cards, 'log').gaintag.add('yxsyanxi');
									player.gain(card, target, 'bySelf', 'give').gaintag.add('yxsyanxi');
								} else {
									player.popup('猜错了~');
									player.gain(card2, 'gain2').gaintag.add('yxsyanxi');
									player.addMark('yywucan0022', 1);
									var list = [];
									if (player.storage.yywucan0022 == 0) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_wyj.jpg');
									}
									if (player.storage.yywucan0022 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj1.jpg');
									}
									if (player.storage.yywucan0022 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj2.jpg');
									}
									if (player.storage.yywucan0022 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj3.jpg');
									}
								}
							},
							ai: {
								order: 6,
								result: {
									player: 1,
									target: -0.6,
								},
							},
						},
						yxsyanxi2: {
							mod: {
								ignoredHandcard(card, player) {
									if (card.hasGaintag('yxsyanxi')) return true;
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.hasGaintag('yxsyanxi')) return false;
								},
							},
							onremove(player) {
								player.removeGaintag('yxsyanxi');
							},
						},
						yxs_qianchong: {
							audio: 'ext:英雄外传/audio:2',
							mod: {
								targetInRange(card, player, target) {
									if (player.storage.yxs_qianchong.includes(get.type(card, 'trick'))) {
										return true;
									}
								},
								cardUsable(card, player, num) {
									if (player.storage.yxs_qianchong.includes(get.type(card, 'trick'))) return Infinity;
								},
							},
							group: ['yxs_qianchong_clear', 'yxs_weimu', 'yxs_mingzhe'],
							subSkill: {
								clear: {
									forced: true,
									silent: true,
									popup: false,
									trigger: {
										player: 'phaseAfter',
									},
									content() {
										player.storage.yxs_qianchong = [];
									},
								},
							},
							init(event, player) {
								event.storage[player] = [];
							},
							trigger: {
								player: 'phaseUseBegin',
							},
							forced: true,
							filter(event, player) {
								var es = player.getCards('e');
								if (!es.length) return true;
								var col = get.color(es[0]);
								for (var i = 0; i < es.length; i++) {
									if (get.color(es[i]) != col) return true;
								}
								return false;
							},
							content() {
								'step 0';
								var list = ['basic', 'trick', 'equip', 'cancel2'];
								for (var i = 0; i < player.storage.yxs_qianchong.length; i++) {
									list.remove(player.storage.yxs_qianchong[i]);
								}
								if (list.length > 1) {
									player
										.chooseControl(list)
										.set('ai', function () {
											return list[0];
										})
										.set('prompt', get.prompt('yxs_qianchong'))
										.set('prompt2', get.translation('yxs_qianchong_info'));
								} else event.finish();
								('step 1');
								if (result.control && result.control != 'cancel2') {
									player.storage.yxs_qianchong.add(result.control);
									var str = get.translation(result.control) + '牌';
									game.log(player, '声明了', '#y' + str);
									player.popup(str, 'thunder');
									player.removeMark('yywucan0022', 3);
									var list = [];
									if (player.storage.yywucan0022 == 0) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_wyj.jpg');
									}
									if (player.storage.yywucan0022 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj1.jpg');
									}
									if (player.storage.yywucan0022 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj2.jpg');
									}
									if (player.storage.yywucan0022 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj3.jpg');
									}
								}
							},
						},
						yxs_weimu: {
							//audio:2,
							mod: {
								targetEnabled(card, player, target) {
									var bool = true;
									var es = target.getCards('e');
									if (!es.length) bool = false;
									for (var i = 0; i < es.length; i++) {
										if (get.color(es[i]) != 'black') bool = false;
									}
									if (bool && (get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'black') return false;
								},
							},
						},
						yxs_mingzhe: {
							//audio:2,
							trigger: {
								player: ['useCard', 'respond', 'loseAfter'],
							},
							forced: true,
							filter(event, player) {
								if (player.hasSkill('mingzhe')) return false;
								if (player == _status.currentPhase) return false;
								var es = player.getCards('e');
								if (!es.length) return false;
								for (var i = 0; i < es.length; i++) {
									if (get.color(es[i]) != 'red') return false;
								}
								if (event.name != 'lose') return get.color(event.card) == 'red';
								if (event.type != 'discard') return false;
								if (event.cards2) {
									for (var i = 0; i < event.cards2.length; i++) {
										if (get.color(event.cards2[i]) == 'red') return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								event.count = 1;
								if (trigger.name == 'lose') {
									event.count = 0;
									for (var i = 0; i < trigger.cards2.length; i++) {
										if (get.color(trigger.cards2[i]) == 'red') event.count++;
									}
								}
								('step 1');
								player.draw();
								event.count--;
								('step 2');
								if (event.count) {
									player.chooseBool(get.prompt2('mingzhe')).set('frequentSkill', event.name);
								} else event.finish();
								('step 3');
								if (result.bool) {
									event.goto(1);
								}
							},
							ai: {
								threaten: 0.7,
							},
						},
						yywucan002: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan0021', 'yynvde002'],
						},
						yywucan0021: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['子上~你弄疼我了~', '求求你~不要~让..我回去吧~'].randomGet();
								player.say(chat);
								player.addMark('yywucan0022');
								('step 1');
								var list = [];
								if (player.storage.yywucan0022 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj1.jpg');
									//player.chooseUseTarget('视为使用一张【杀】',{name:'sha'},false,'nodistance');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan0022 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj2.jpg');
									//player.chooseUseTarget('视为使用一张【杀】',{name:'sha'},false,'nodistance');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan0022 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj3.jpg');
									//player.chooseUseTarget('视为使用一张【杀】',{name:'sha'},false,'nodistance');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan0022 > 3) {
									player.removeMark('yywucan0022', 1);
								}
							},
						},
						yynvde002: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan0022');
								('step 1');
								var list = [];
								if (player.storage.yywucan0022 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_wyj.jpg');
								}
								if (player.storage.yywucan0022 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj1.jpg');
								}
								if (player.storage.yywucan0022 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj2.jpg');
								}
								if (player.storage.yywucan0022 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wyj3.jpg');
								}
								if (list.length) {
									player.addAdditionalSkill('yywucan0021', list);
								}
							},
						},
						yywucan0022: {
							//marktext:'无惨',
							mark: false,
						},
						//夏侯氏去衣
						yxs_qiaoshi: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { global: 'phaseJieshuBegin' },
							filter(event, player) {
								return event.player != player && event.player.countCards('h') !== player.countCards('h') && event.player.isAlive();
							},
							check(event, player) {
								return get.attitude(player, event.player) >= 0;
							},
							//_priority:-5,
							logTarget: 'player',
							content() {
								game.asyncDraw([trigger.player, player]);
								player.addMark('yywucan0042');
								var list = [];
								if (player.storage.yywucan0042 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs1.jpg');
								}
								if (player.storage.yywucan0042 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs2.jpg');
								}
								if (player.storage.yywucan0042 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs3.jpg');
								}
								if (player.storage.yywucan0042 > 3) {
									player.removeMark('yywucan0042', 1);
								}
							},
							ai: {
								expose: 0.1,
							},
						},
						yxs_yanyu: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							content() {
								'step 0';
								var next = player.chooseToDiscard(get.prompt('yxs_yanyu'), get.translation('yxs_yanyu_info'), 'he');
								if (player == trigger.player) {
									next.set(
										'goon',
										(function () {
											var map = {
												basic: 0,
												trick: 0.1,
											};
											var hs = trigger.player.getCards('h');
											var sha = false;
											var jiu = false;
											for (var i = 0; i < hs.length; i++) {
												if (trigger.player.hasValueTarget(hs[i])) {
													if (hs[i].name == 'sha' && !sha) {
														sha = true;
														map.basic += 2;
													}
													if (hs[i].name == 'tao') map.basic += 6;
													if (hs[i].name == 'jiu') {
														jiu = true;
														map.basic += 2.5;
													}
													if (get.type(hs[i]) == 'trick') map.trick += get.value(hs[i], player, 'raw');
												}
											}
											return map;
										})(),
									);
									next.set('ai', function (card) {
										var map = _status.event.goon;
										var type = get.type(card, 'trick');
										if (!map[type]) return -1;
										return map[type] - get.value(card);
									});
								} else {
									next.set('ai', function (cardx) {
										var map = {
											basic: 0,
											trick: 0,
										};
										var hs = trigger.player.getCards('h');
										var sha = false;
										var jiu = false;
										for (var i = 0; i < hs.length; i++) {
											if (hs[i] != cardx && trigger.player.hasValueTarget(hs[i])) {
												if (hs[i].name == 'sha' && !sha) {
													sha = true;
													map.basic += 2;
												}
												if (hs[i].name == 'tao') map.basic += 6;
												if (hs[i].name == 'jiu') {
													jiu = true;
													map.basic += 3;
												}
												if (get.type(hs[i]) == 'trick') map.trick += player.getUseValue(hs[i]);
											}
										}
										var type = get.type(cardx, 'trick');
										if (!map[type]) return -get.value(cardx);
										return map[type] - get.value(cardx);
									});
								}
								('step 1');
								if (result.bool) {
									player.storage.yxs_yanyu = get.type(result.cards[0], 'trick');
									player.addTempSkill('yxs_yanyu2', 'phaseUseAfter');
								}
							},
						},
						yxs_yanyu2: {
							//audio:'yxswengua',
							audio: 'yxs_yanyu',
							init(player, skill) {
								player.storage[skill] = 0;
							},
							onremove(player, skill) {
								delete player.storage.yxs_yanyu;
								delete player.storage.yxs_yanyu2;
							},
							trigger: {
								global: ['loseAfter', 'cardsDiscardAfter'],
							},
							round: 1,
							forced: true,
							filter(event, player) {
								if (player.storage.yxs_yanyu2 >= 3) return false;
								//var evt=event.parent;
								//if(evt&&(evt.name=='useCard'||evt.name=='respond')) return false;
								var type = player.storage.yxs_yanyu;
								var cards = event.cards;
								if (Array.isArray(cards))
									for (var i of cards) {
										if (get.type(i, 'trick') == type && get.position(i, true) == 'd') return true;
									}
								return false;
							},
							content() {
								'step 0';
								event.cards = [];
								var type = player.storage.yxs_yanyu;
								var cards = trigger.cards;
								if (Array.isArray(cards))
									for (var i of cards) {
										if (get.type(i, 'trick') == type && get.position(i, true) == 'd') event.cards.push(i);
									}
								('step 1');
								if (player.storage.yxs_yanyu2 >= 3) event.finish();
								else
									player.chooseCardButton(event.cards, '【燕语】:是否将其中的一张牌交给一名角色？').ai = function (card) {
										if (card.name == 'du') return 10;
										return get.value(card);
									};
								('step 2');
								if (result.bool) {
									player.storage.yxs_yanyu2++;
									event.togain = result.links[0];
									event.cards.remove(event.togain);
									player
										.chooseTarget(true, `请选择要获得${get.translation(event.togain)}的角色`)
										.set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											var card = _status.event.card;
											var val = get.value(card);
											if (player.storage.yxs_yanyu2 <= 3 && target == _status.currentPhase && target.hasValueTarget(card, null, true)) att = att * 5;
											else if (target == player && !player.hasJudge('lebu') && get.type(card) == 'trick') att = att * 3;
											if (target.hasSkillTag('nogain')) att /= 10;
											return att * val;
										})
										.set('card', event.togain);
								} else event.finish();
								('step 3');
								var target = result.targets[0];
								player.line(target, 'green');
								target.gain(event.togain, 'gain2');
								if (event.cards.length) event.goto(1);
							},
						},
						yxs_xiaode: {
							subSkill: {
								remove: {
									charlotte: true,
									trigger: {
										player: 'phaseAfter',
									},
									forced: true,
									popup: false,
									content() {
										player.removeAdditionalSkill('yxs_xiaode11');
										player.removeSkill('yxs_xiaode_remove11');
									},
								},
							},
							trigger: {
								global: 'dieAfter',
							},
							audio: 'ext:英雄外传/audio:2',
							forced: true,
							filter(skill, event) {
								return !event.hasSkill('yxs_xiaode_remove');
							},
							content() {
								'step 0';
								var list = [];
								var listm = [];
								var listv = [];
								if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
								else listm = lib.character[trigger.player.name][3];
								if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
								listm = listm.concat(listv);
								var func = function (skill) {
									var info = get.info(skill);
									if (info.charlotte || info.zhuSkill || (info.unique && !info.limited) || info.juexingji || info.dutySkill || info.hiddenSkill) return false;
									return true;
								};
								for (var i = 0; i < listm.length; i++) {
									if (func(listm[i])) list.add(listm[i]);
								}
								if (list.length) {
									player
										.chooseControl(list, 'cancel2')
										.set('prompt', get.prompt('yxs_xiaode'))
										.set('prompt2', get.translation('yxs_xiaode_info'))
										.set('ai', function () {
											return list.randomGet();
										});
								} else event.finish();
								('step 1');
								if (result.control && result.control != 'cancel2') {
									player.popup(result.control, 'thunder');
									game.log(player, '获得了技能', `#g【${get.translation(result.control)}】`);
									player.addAdditionalSkill('yxs_xiaode', [result.control]);
									//player.addSkill('yxs_xiaode_remove');
									player.removeMark('yywucan0042');
									var list = [];
									if (player.storage.yywucan0042 == 0) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_xhs.jpg');
									}
									if (player.storage.yywucan0042 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs1.jpg');
									}
									if (player.storage.yywucan0042 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs2.jpg');
									}
									if (player.storage.yywucan0042 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs3.jpg');
									}
								}
							},
						},
						yywucan004: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan0041', 'yynvde004'],
						},
						yywucan0041: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['翼德~你好棒~啊~~~', '哥哥们~都好猛呀~'].randomGet();
								player.say(chat);
								player.addMark('yywucan0042');
								('step 1');
								var list = [];
								if (player.storage.yywucan0042 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan0042 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan0042 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan0042 > 3) {
									player.removeMark('yywucan0042', 1);
								}
							},
						},
						yynvde004: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan0042');
								('step 1');
								var list = [];
								if (player.storage.yywucan0042 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_xhs.jpg');
								}
								if (player.storage.yywucan0042 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs1.jpg');
								}
								if (player.storage.yywucan0042 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs2.jpg');
								}
								if (player.storage.yywucan0042 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xhs3.jpg');
								}
							},
						},
						yywucan0042: {
							//marktext:'无惨',
							mark: false,
						},
						//卑弥呼去衣
						yxsbingzhao: {
							audio: 1,
							zhuSkill: true,
							forced: true,
							intro: {
								content(group) {
									return `已选择了${get.translation(group)}势力`;
								},
							},
							trigger: { global: ['gameDrawAfter', 'zhuUpdate'] },
							filter(event, player) {
								return !player.storage.yxsbingzhao && player.hasZhuSkill('yxsbingzhao');
							},
							content() {
								'step 0';
								var list = lib.group.filter(function (group) {
									return (
										['wei', 'shu', 'wu', 'qun'].includes(group) ||
										game.hasPlayer(function (current) {
											return current.group == group;
										})
									);
								});
								player
									.chooseControl(list)
									.set('prompt', '秉诏:请选择一个势力')
									.set('ai', function () {
										var listx = list.slice(0);
										listx.sort(function (a, b) {
											return (
												game.countPlayer(function (current) {
													return current != player && current.group == b;
												}) -
												game.countPlayer(function (current) {
													return current != player && current.group == a;
												})
											);
										});
										return listx[0];
									});
								('step 1');
								var group = result.control;
								player.popup(get.translation(group) + '势力', get.groupnature(group, 'raw'));
								game.log(player, '选择了', `#y${get.translation(group)}势力`);
								player.storage.yxsbingzhao = group;
								player.markSkill('yxsbingzhao');
							},
						},
						yxsbaijia: {
							audio: 'ext:英雄外传/audio:2',
							derivation: 'yxscanshi',
							juexingji: true,
							ai: {
								combo: 'yxsguju',
							},
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							filter(event, player) {
								return player.hasSkill('yxsguju') && player.storage.yxsguju >= 7;
							},
							content() {
								player.awakenSkill('yxsbaijia');
								player.gainMaxHp();
								player.recover();
								var list = game.filterPlayer();
								for (var i = 0; i < list.length; i++) {
									if (list[i] != player && !list[i].hasMark('yxszongkui_mark')) {
										list[i].addMark('yxszongkui_mark', 1);
										player.line(list[i], 'green');
									}
								}
								//player.removeSkill('yxsguju');
								player.addSkill('yxscanshi');
								player.removeSkill('yxsbaijia');
							},
						},
						yxscanshi: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yxscanshi_add', 'yxscanshi_remove'],
							subSkill: {
								add: {
									audio: 'yxscanshi',
									trigger: { player: 'useCard2' },
									filter(event, player) {
										if (!event.targets || event.targets.length != 1) return false;
										var info = get.info(event.card);
										if (info.multitarget) return false;
										if (info.allowMultiple == false) return false;
										if (info.type == 'equip') return false;
										if (info.type == 'delay') return false;
										return game.hasPlayer(function (current) {
											if (!current.hasMark('yxszongkui_mark')) return false;
											return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
										});
									},
									forced: true,
									content() {
										'step 0';
										player
											.chooseTarget(get.prompt2('yxscanshi'), [1, Infinity], function (card, player, target) {
												if (!target.hasMark('yxszongkui_mark')) return false;
												var trigger = _status.event.getTrigger();
												return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
											})
											.set('ai', function (target) {
												var player = _status.event.player;
												return get.effect(target, _status.event.getTrigger().card, player, player);
											});
										('step 1');
										if (result.bool) {
											event.targets = result.targets.sortBySeat();
										} else {
											event.finish();
										}
										('step 2');
										for (var i = 0; i < event.targets.length; i++) {
											event.targets[i].removeMark('yxszongkui_mark', 1);
											player.chooseUseTarget('视为使用一张【杀】', { name: 'sha' }, false, 'nodistance');
										}
										trigger.targets.addArray(event.targets);
										player.removeMark('yywucan0052');
										var list = [];
										if (player.storage.yywucan0052 == 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_bmh.jpg');
										}
										if (player.storage.yywucan0052 == 1) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh1.jpg');
										}
										if (player.storage.yywucan0052 == 2) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh2.jpg');
										}
										if (player.storage.yywucan0052 == 3) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh3.jpg');
										}
									},
								},
								remove: {
									audio: 'yxscanshi',
									trigger: {
										target: 'useCardToTarget',
									},
									check(event, player) {
										return get.attitude(event.player, player) < 0 && get.effect(player, event.card, event.player, player) < 0;
									},
									logTarget: 'player',
									filter(event, player) {
										if (!['basic', 'trick'].includes(get.type(event.card))) return false;
										if (!event.targets || event.targets.length != 1) return false;
										return event.player.hasMark('yxszongkui_mark');
									},
									content() {
										trigger.targets.remove(player);
										trigger.parent.triggeredTargets2.remove(player);
										trigger.player.removeMark('yxszongkui_mark');
										player.chooseUseTarget('视为使用一张【杀】', { name: 'sha' }, false, 'nodistance');
										player.addMark('yywucan0052');
										var list = [];
										if (player.storage.yywucan0052 == 1) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh1.jpg');
										}
										if (player.storage.yywucan0052 == 2) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh2.jpg');
										}
										if (player.storage.yywucan0052 == 3) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh3.jpg');
										}
										if (player.storage.yywucan0052 > 3) {
											player.removeMark('yywucan0052', 1);
										}
									},
								},
							},
						},
						yxsguju: {
							audio: 'ext:英雄外传/audio:2',
							init(player) {
								if (!player.storage.yxsguju) player.storage.yxsguju = 0;
							},
							intro: {
								content: '已因此技能获得#张牌',
							},
							trigger: {
								global: ['damageEnd', 'recoverEnd'],
							},
							forced: true,
							filter(event, player) {
								return event.player != player && event.player.isAlive() && event.player.hasMark('yxszongkui_mark');
							},
							content() {
								'step 0';
								player.draw();
								player.storage.yxsguju++;
								player.markSkill('yxsguju');
								('step 1');
								if (player.hasZhuSkill('yxsbingzhao', trigger.player) && trigger.player.group == player.storage.yxsbingzhao && trigger.player.isAlive()) {
									player.markSkill('yxsguju');
									player.draw();
									player.addMark('yywucan0052', 1);
									var list = [];
									if (player.storage.yywucan0052 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh1.jpg');
									}
									if (player.storage.yywucan0052 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh2.jpg');
									}
									if (player.storage.yywucan0052 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh3.jpg');
									}
									if (player.storage.yywucan0052 > 3) {
										player.removeMark('yywucan0052', 1);
									}
								}
								('step 2');
								if (result.bool) {
									player.storage.yxsguju++;
								}
							},
							ai: {
								combo: 'yxszongkui',
							},
						},
						yxszongkui: {
							trigger: { player: 'phaseBefore', global: 'roundStart' },
							forced: true,
							audio: 'ext:英雄外传/audio:2',
							filter(event, player, name) {
								return game.hasPlayer(function (current) {
									if (name == 'roundStart' && !current.isMinHp()) return false;
									return current != player && !current.hasMark('yxszongkui_mark');
								});
							},
							content() {
								'step 0';
								var targets = game.filterPlayer(function (current) {
									if (event.triggername == 'roundStart' && !current.isMinHp()) return false;
									return current != player && !current.hasMark('yxszongkui_mark');
								});
								if (event.triggername == 'roundStart' && targets.length == 1) {
									event._result = { bool: true, targets: targets };
								} else {
									var next = player
										.chooseTarget(get.prompt('yxszongkui'), '令一名' + (event.triggername == 'roundStart' ? '体力值最小的' : '') + '其他角色获得<傀>标记', function (card, player, target) {
											if (_status.event.round && !target.isMinHp()) return false;
											return target != player && !target.hasMark('yxszongkui_mark');
										})
										.set('ai', function (target) {
											var num = target.isMinHp() ? 0.5 : 1;
											return num * get.threaten(target);
										})
										.set('round', event.triggername == 'roundStart');
									if (event.triggername == 'roundStart') next.set('forced', true);
								}
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.addMark('yxszongkui_mark', 1);
								}
							},
							subSkill: {
								mark: {
									marktext: '傀',
									intro: {
										name2: '傀',
										content: 'mark',
									},
								},
							},
							ai: {
								combo: 'yxsguju',
								threaten: 1.4,
							},
						},
						yywucan005: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan0051', 'yynvde005'],
						},
						yywucan0051: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['你个小奴隶,竟敢~ 啊~啊~', '我..愿意做你的傀儡~'].randomGet();
								player.say(chat);
								player.addMark('yywucan0052');
								('step 1');
								var list = [];
								if (player.storage.yywucan0052 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan0052 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan0052 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan0052 > 3) {
									player.removeMark('yywucan0052', 1);
								}
							},
						},
						yynvde005: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan0052');
								('step 1');
								var list = [];
								if (player.storage.yywucan0052 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_bmh.jpg');
								}
								if (player.storage.yywucan0052 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh1.jpg');
								}
								if (player.storage.yywucan0052 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh2.jpg');
								}
								if (player.storage.yywucan0052 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/bmh3.jpg');
								}
							},
						},
						yywucan0052: {
							//marktext:'无惨',
							mark: false,
						},
						//郭照去衣
						yxspianchong: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseDrawBegin1' },
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								'step 0';
								//trigger.changeToZero();
								var cards = [];
								var card1 = get.cardPile2(function (card) {
									return get.color(card, false) == 'red';
								});
								if (card1) cards.push(card1);
								var card2 = get.cardPile2(function (card) {
									return get.color(card, false) == 'black';
								});
								if (card2) cards.push(card2);
								if (cards.length) player.gain(cards, 'gain2');
								('step 1');
								game.updateRoundNumber();
								player
									.chooseControl('red', 'black')
									.set('prompt', '偏宠:请选择一种颜色.直至你的下回合开始时,失去该颜色的一张牌后,你脱1件衣服并从牌堆获得另一种颜色的一张牌.')
									.set('ai', function () {
										var red = 0,
											black = 0;
										var player = _status.event.player;
										var cards = player.getCards('he');
										for (var i of cards) {
											var add = 1;
											var color = get.color(i, player);
											if (get.position(i) == 'e') add = 0.5;
											else if (i.name != 'sha' && player.hasValueTarget(i)) add = 1.5;
											if (color == 'red') red += add;
											else black += add;
										}
										if (black > red) return 'black';
										return 'red';
									});
								('step 2');
								player.storage.yxspianchong2 = result.control;
								player.addTempSkill('yxspianchong2', { player: 'phaseBeginStart' });
								player.popup(result.control, result.control == 'red' ? 'fire' : 'thunder');
								game.log(player, '声明了', '#y' + get.translation(result.control));
							},
							ai: {
								threaten: 4.8,
							},
						},
						yxspianchong2: {
							audio: 'yxspianchong',
							trigger: {
								player: 'loseAfter',
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
							},
							forced: true,
							charlotte: true,
							filter(event, player) {
								var evt = event.getl(player);
								if (!evt || !evt.cards2 || !evt.cards2.length) return false;
								for (var i of evt.cards2) {
									if (get.color(i, player) == player.storage.yxspianchong2) return true;
								}
								return false;
							},
							content() {
								'step 0';
								var num = trigger.getl(player).cards2.filter(function (card) {
									return get.color(card, player) == player.storage.yxspianchong2;
								}).length;
								var cards = [];
								while (num-- > 0) {
									var card = get.cardPile2(function (card) {
										return !cards.includes(card) && get.color(card, false) != player.storage.yxspianchong2;
									});
									if (card) cards.push(card);
									else break;
								}
								if (cards.length) player.gain(cards, 'gain2');
								player.addMark('yywucan0062', 1);
								var list = [];
								if (player.storage.yywucan0062 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz1.jpg');
								}
								if (player.storage.yywucan0062 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz2.jpg');
								}
								if (player.storage.yywucan0062 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz3.jpg');
								}
								if (player.storage.yywucan0062 > 3) {
									player.removeMark('yywucan0062', 1);
								} else event.finish();
								('step 1');
								game.updateRoundNumber();
							},
							mark: true,
							intro: {
								content: '失去一张$牌后,从牌堆中获得一张与此牌颜色不同的牌',
							},
						},
						yxszunwei: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							//usable:1,
							filter(event, player) {
								return !player.storage.yxszunwei || player.storage.yxszunwei.length < 3;
							},
							chooseButton: {
								dialog(event, player) {
									var list = ['选择体力值大于你的一名角色', '选择手牌数大于你的一名角色', '选择装备数大于你的一名角色'];
									var choiceList = ui.create.dialog('尊位:清选择一项', 'forcebutton', 'hidden');
									for (var i = 0; i < list.length; i++) {
										if (player.storage.yxszunwei && player.storage.yxszunwei.includes(i)) continue;
										var bool = game.hasPlayer(function (current) {
											return current != player && lib.skill.yxszunwei.backups[i].filterTarget(null, player, current);
										});
										var str = `<div class='popup text' style='width:calc(100% - 10px);display:inline-block'>`;
										if (!bool) str += `<div style='opacity:0.5'>`;
										str += list[i];
										if (!bool) str += '</div>';
										str += '</div>';
										var next = choiceList.add(str);
										next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
										next.firstChild.link = i;
										next.firstChild._filterButton = bool;
										Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
										choiceList.buttons.add(next.firstChild);
									}
									return choiceList;
								},
								filter(button) {
									return button._filterButton;
								},
								backup(links) {
									var next = get.copy(lib.skill.yxszunwei.backups[links[0]]);
									next.audio = 'yxszunwei';
									next.filterCard = function () {
										return false;
									};
									next.selectCard = -1;
									return next;
								},
								check(button) {
									var player = _status.event.player;
									switch (button.link) {
										case 0: {
											var target = game.findPlayer(function (current) {
												return current.isMaxHp();
											});
											return (Math.min(target.hp, player.maxHp) - player.hp) * 2;
										}
										case 1: {
											var target = game.findPlayer(function (current) {
												return current.isMaxHandcard();
											});
											return Math.min(5, target.countCards('h') - player.countCards('h')) * 0.8;
										}
										case 2: {
											var target = game.findPlayer(function (current) {
												return current.isMaxEquip();
											});
											return (target.countCards('e') - player.countCards('e')) * 1.4;
										}
									}
								},
								prompt(links) {
									return ['选择一名体力值大于你的其他角色,将体力值回复至与其相同', '选择一名手牌数大于你的其他角色,将手牌数摸至与其相同', '选择一名装备区内牌数大于你的其他角色,依次使用牌堆中的装备牌,直到装备数与其相同'][links[0]];
								},
							},
							backups: [
								{
									filterTarget(card, player, target) {
										if (player.isHealthy()) return false;
										return target.hp > player.hp;
									},
									content() {
										player.removeMark('yywucan0062', 1);
										var list = [];
										if (player.storage.yywucan0062 == 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_gz.jpg');
										}
										if (player.storage.yywucan0062 == 1) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz1.jpg');
										}
										if (player.storage.yywucan0062 == 2) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz2.jpg');
										}
										if (player.storage.yywucan0062 == 3) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz3.jpg');
										}
										player.recover(target.hp - player.hp);
										if (!player.storage.yxszunwei) player.storage.yxszunwei = [];
										player.storage.yxszunwei.add(0);
									},
									ai: {
										order: 10,
										result: {
											player(player, target) {
												return Math.min(target.hp, player.maxHp) - player.hp;
											},
										},
									},
								},
								{
									filterTarget(card, player, target) {
										return target.countCards('h') > player.countCards('h');
									},
									content() {
										player.removeMark('yywucan0062', 1);
										var list = [];
										if (player.storage.yywucan0062 == 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_gz.jpg');
										}
										if (player.storage.yywucan0062 == 1) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz1.jpg');
										}
										if (player.storage.yywucan0062 == 2) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz2.jpg');
										}
										if (player.storage.yywucan0062 == 3) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz3.jpg');
										}
										player.draw(Math.min(5, target.countCards('h') - player.countCards('h')));
										if (!player.storage.yxszunwei) player.storage.yxszunwei = [];
										player.storage.yxszunwei.add(1);
									},
									ai: {
										order: 10,
										result: {
											player(player, target) {
												return Math.min(5, target.countCards('h') - player.countCards('h'));
											},
										},
									},
								},
								{
									filterTarget(card, player, target) {
										return target.countCards('e') > player.countCards('e');
									},
									content() {
										'step 0';
										if (!player.storage.yxszunwei) player.storage.yxszunwei = [];
										player.storage.yxszunwei.add(2);
										player.removeMark('yywucan0062', 1);
										var list = [];
										if (player.storage.yywucan0062 == 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_gz.jpg');
										}
										if (player.storage.yywucan0062 == 1) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz1.jpg');
										}
										if (player.storage.yywucan0062 == 2) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz2.jpg');
										}
										if (player.storage.yywucan0062 == 3) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz3.jpg');
										}
										event.num = 1;
										('step 1');
										var type = 'equip' + num;
										if (!player.isEmpty(type)) return;
										var card = get.cardPile2(function (card) {
											return get.subtype(card, false) == type && player.canUse(card, player);
										});
										if (card) player.chooseUseTarget(card, true).nopopup = true;
										('step 2');
										game.updateRoundNumber();
										event.num++;
										if (event.num <= 5 && target.isAlive() && player.countCards('e') < target.countCards('e')) event.goto(1);
									},
									ai: {
										order: 10,
										result: {
											player(player, target) {
												return target.countCards('e') - player.countCards('e');
											},
										},
									},
								},
							],
							ai: {
								order: 10,
								result: {
									player: 1,
								},
							},
						},
						yywucan006: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan0061', 'yynvde006'],
						},
						yywucan0061: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageBegin4' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['陛下,求你~再激烈点~', '啊~都...溢出来啦!'].randomGet();
								player.say(chat);
								player.addMark('yywucan0062');
								('step 1');
								var list = [];
								if (player.storage.yywucan0062 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan0062 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan0062 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan0062 > 3) {
									player.removeMark('yywucan0062', 1);
								}
							},
						},
						yynvde006: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan0062');
								('step 1');
								var list = [];
								if (player.storage.yywucan0062 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_gz.jpg');
								}
								if (player.storage.yywucan0062 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz1.jpg');
								}
								if (player.storage.yywucan0062 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz2.jpg');
								}
								if (player.storage.yywucan0062 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/gz3.jpg');
								}
							},
						},
						yywucan0062: {
							//marktext:'无惨',
							mark: false,
						},
						//吴国太去衣
						yxsganlu: {
							enable: 'phaseUse',
							//usable:1,
							audio: 'ext:英雄外传/audio:2',
							selectTarget: 2,
							delay: 0,
							filter(event, player) {
								return player.countMark('yywucan0072') < 3;
							},
							filterTarget(card, player, target) {
								if (target.isMin()) return false;
								if (ui.selected.targets.length == 0) return true;
								if (ui.selected.targets[0].countCards('e') == 0 && target.countCards('e') == 0) return false;
								return target == player || ui.selected.targets[0] == player || Math.abs(ui.selected.targets[0].countCards('e') - target.countCards('e')) <= 99;
							},
							multitarget: true,
							multiline: true,
							content() {
								'step 0';
								targets[0].swapEquip(targets[1]);
								var chat = ['文台~再深一点嘛~', '真猛虎也!~啊~~'].randomGet();
								player.say(chat);
								player.addMark('yywucan0072', 1);
								var list = [];
								if (player.storage.yywucan0072 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt1.jpg');
								}
								if (player.storage.yywucan0072 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt2.jpg');
								}
								if (player.storage.yywucan0072 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt3.jpg');
								}
								if (player.storage.yywucan0072 > 3) {
									player.removeMark('yywucan0072', 1);
								}
								('step 1');
								player.draw();
							},
							ai: {
								order: 10,
								threaten(player, target) {
									return 0.8 * Math.max(1 + target.maxHp - target.hp);
								},
								result: {
									target(player, target) {
										var list1 = [];
										var list2 = [];
										var num = player.maxHp - player.hp;
										var players = game.filterPlayer();
										for (var i of players) {
											if (get.attitude(player, i) > 0) list1.push(i);
											else if (get.attitude(player, i) < 0) list2.push(i);
										}
										list1.sort(function (a, b) {
											return a.countCards('e') - b.countCards('e');
										});
										list2.sort(function (a, b) {
											return b.countCards('e') - a.countCards('e');
										});
										var delta;
										for (var i = 0; i < list1.length; i++) {
											for (var j = 0; j < list2.length; j++) {
												delta = list2[j].countCards('e') - list1[i].countCards('e');
												if (delta <= 0) continue;
												if (delta <= num || list1[i] == player || list2[j] == player) {
													if (target == list1[i] || target == list2[j]) {
														return get.attitude(player, target);
													}
													return 0;
												}
											}
										}
										return 0;
									},
								},
							},
						},
						yxsbuyi: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yxsbuyi1', 'yxsbuyi2'],
						},
						yxsbuyi1: {
							trigger: { global: 'dying' },
							//_priority:6,
							audio: 'yxsbuyi',
							filter(event, player) {
								return event.player.hp <= 0 && player.countMark('yywucan0072') > 0;
							},
							direct: false,
							content() {
								player.removeMark('yywucan0072');
								var list = [];
								if (player.storage.yywucan0072 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_wgt.jpg');
								}
								if (player.storage.yywucan0072 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt1.jpg');
								}
								if (player.storage.yywucan0072 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt2.jpg');
								}
								if (player.storage.yywucan0072 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt3.jpg');
								}
								trigger.player.recover();
							},
							ai: {
								threaten: 1.4,
							},
						},
						yxsbuyi2: {
							trigger: { global: 'dyingAfter' },
							forced: true,
							content() {
								player.chooseUseTarget('视为使用一张【顺手牵羊】', { name: 'shunshou' }, false);
							},
						},
						yywucan007: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan0071', 'yynvde007'],
						},
						yywucan0071: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								player.addMark('yywucan0072');
								('step 1');
								var list = [];
								if (player.storage.yywucan0072 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan0072 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan0072 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan0072 > 3) {
									player.removeMark('yywucan0072', 1);
								}
							},
						},
						yynvde007: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan0072');
								('step 1');
								var list = [];
								if (player.storage.yywucan0072 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_wgt.jpg');
								}
								if (player.storage.yywucan0072 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt1.jpg');
								}
								if (player.storage.yywucan0072 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt2.jpg');
								}
								if (player.storage.yywucan0072 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wgt3.jpg');
								}
							},
						},
						yywucan0072: {
							//marktext:'无惨',
							mark: false,
						},
						//周妃去衣
						yxsliangyin: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yxsliangyin_1', 'yxsliangyin_2'],
							subSkill: {
								1: {
									trigger: {
										global: ['loseAfter', 'addCardToStorage', 'loseAsyncAfter'],
									},
									audio: 'yxsliangyin',
									filter(event, player, name) {
										if (name != 'addCardToStorage') return event.toStorage == true;
										return true;
									},
									forced: true,
									content() {
										'step 0';
										player.chooseTarget('是否发动【良姻】令一名角色摸一张牌？', function (card, player, target) {
											return (target = player);
										}).ai = function (target) {
											return get.attitude(player, target);
										};
										('step 1');
										if (result.bool) {
											result.targets[0].draw();
											player.addMark('yywucan0082');
											var list = [];
											if (player.storage.yywucan0082 == 1) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf1.jpg');
											}
											if (player.storage.yywucan0082 == 2) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf2.jpg');
											}
											if (player.storage.yywucan0082 == 3) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf3.jpg');
											}
											if (player.storage.yywucan0082 > 3) {
												player.removeMark('yywucan0082', 1);
											}
										}
									},
								},
								2: {
									trigger: {
										global: 'gainAfter',
									},
									filter(event, player) {
										return event.fromStorage == true;
									},
									audio: 'yxsliangyin',
									forced: true,
									content() {
										'step 0';
										player.chooseTarget('是否发动【良姻】令一名其他角色弃置一张牌？', function (card, player, target) {
											return target != player && target.countCards('he') > 0;
										}).ai = function (target) {
											return -get.attitude(player, target);
										};
										('step 1');
										if (result.bool) {
											result.targets[0].chooseToDiscard('he', 1, true);
											player.removeMark('yywucan0082');
											var list = [];
											if (player.storage.yywucan0082 == 0) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_zf.jpg');
											}
											if (player.storage.yywucan0082 == 1) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf1.jpg');
											}
											if (player.storage.yywucan0082 == 2) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf2.jpg');
											}
											if (player.storage.yywucan0082 == 3) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf3.jpg');
											}
										}
									},
								},
							},
						},
						yxskongsheng: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.chooseCard(get.prompt2('yxskongsheng'), 'he', [1, player.countCards('he')]).set('ai', function (card) {
									if (get.position(card) == 'e') return 1 - get.value(card);
									if (card.name == 'shan' || card.name == 'du' || !player.hasValueTarget(card)) return 1;
									return 4 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									if (player.storage.yxskongsheng2 == undefined) player.storage.yxskongsheng2 = [];
									player.storage.yxskongsheng2.addArray(result.cards);
									player.lose(result.cards, ui.special, 'toStorage');
									game.log(player, '将', result.cards, '置于其武将牌上');
									player.addSkill('yxskongsheng2');
									player.addTempSkill('yxskuangbi');
									player.addTempSkill('yxszhiheng00');
								}
							},
						},
						yxskongsheng_ai: { ai: { reverseOrder: true } },
						yxskongsheng2: {
							audio: 'yxskongsheng',
							marktext: '箜',
							intro: {
								content: 'cards',
								onunmark(storage, player) {
									if (storage && storage.length) {
										player.$throw(storage, 1000);
										game.cardsDiscard(storage);
										game.log(storage, '被置入了弃牌堆');
										player.storage.yxskongsheng2.length = 0;
									}
								},
							},
							mark: true,
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return player.storage.yxskongsheng2 != undefined && player.storage.yxskongsheng2.length;
							},
							forced: true,
							content() {
								'step 0';
								player.addTempSkill('yxskongsheng_ai', 'yxskongsheng2After');
								event.list = [];
								for (var i = 0; i < player.storage.yxskongsheng2.length; i++) {
									var card = player.storage.yxskongsheng2[i];
									if (get.type(card) == 'equip' && player.hasUseTarget(card)) {
										event.list.push(card);
										player.storage.yxskongsheng2.splice(i--, 1);
									}
								}
								if (!event.list.length) event.goto(3);
								('step 1');
								if (event.list.length == 1) {
									event._result = { bool: true, links: event.list.slice(0) };
								} else
									player.chooseButton(true, ['选择要使用的装备牌', event.list]).set('ai', function (button) {
										return get.order(button.link);
									});
								('step 2');
								if (result.bool) {
									player.chooseUseTarget(result.links[0], true);
									event.list.remove(result.links[0]);
									if (event.list.length) event.goto(1);
								}
								('step 3');
								if (player.storage.yxskongsheng2.length) player.gain(player.storage.yxskongsheng2, 'gain2', 'fromStorage', 'log');
								player.storage.yxskongsheng2.length = 0;
								player.removeSkill('yxskongsheng2');
								player.recover();
							},
						},
						yywucan008: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan0081', 'yynvde008'],
						},
						yywucan0081: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['哎呀~还有人呢~别脱了~', '不能在别人面前高..呀~~~啊..'].randomGet();
								player.say(chat);
								player.addMark('yywucan0082');
								('step 1');
								var list = [];
								if (player.storage.yywucan0082 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan0082 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan0082 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan0082 > 3) {
									player.removeMark('yywucan0082', 1);
								}
							},
						},
						yynvde008: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan0082');
								('step 1');
								var list = [];
								if (player.storage.yywucan0082 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_zf.jpg');
								}
								if (player.storage.yywucan0082 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf1.jpg');
								}
								if (player.storage.yywucan0082 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf2.jpg');
								}
								if (player.storage.yywucan0082 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zf3.jpg');
								}
							},
						},
						yywucan0082: {
							//marktext:'无惨',
							mark: false,
						},
						yxskuangbi: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && target.countCards('he') > 0;
							},
							content() {
								'step 0';
								target.chooseCard('he', [1, 3], `匡弼:交给${get.translation(player)}一至三张牌`, true).set('ai', function (card) {
									if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
										return 7 - get.value(card);
									}
									return -get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.gain(result.cards, target, 'giveAuto').gaintag.add('yxskuangbi_keep');
									player.addTempSkill('yxskuangbi_keep');
									target.addSkill('yxskuangbi_draw');
									target.addMark('yxskuangbi_draw', result.cards.length, false);
								}
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (get.attitude(player, target) > 0) {
											return Math.sqrt(target.countCards('he'));
										}
										return 0;
									},
									player: 1,
								},
							},
							subSkill: {
								keep: {
									mod: {
										ignoredHandcard(card, player) {
											if (card.hasGaintag('yxskuangbi_keep')) return true;
										},
										cardDiscardable(card, player, name) {
											if (name == 'phaseDiscard' && card.hasGaintag('yxskuangbi_keep')) return false;
										},
									},
									charlotte: true,
									onremove(player) {
										player.removeGaintag('yxskuangbi_keep');
									},
								},
								draw: {
									trigger: { player: 'phaseBegin' },
									forced: true,
									charlotte: true,
									intro: {
										content: '下回合开始时摸#张牌',
									},
									content() {
										player.draw(player.countMark('yxskuangbi_draw'));
										player.removeSkill('yxskuangbi_draw');
									},
								},
							},
						},
						yxszhiheng00: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 1,
							position: 'he',
							filterCard: lib.filter.cardDiscardable,
							discard: false,
							lose: false,
							delay: false,
							selectCard: [1, Infinity],
							check(card) {
								var player = _status.event.player;
								if (
									get.position(card) == 'h' &&
									!player.countCards('h', 'du') &&
									(player.hp > 2 ||
										!player.countCards('h', function (card) {
											return get.value(card) >= 8;
										}))
								) {
									return 1;
								}
								return 6 - get.value(card);
							},
							content() {
								'step 0';
								player.discard(cards);
								event.num = 1;
								var hs = player.getCards('h');
								if (!hs.length) event.num = 0;
								for (var i = 0; i < hs.length; i++) {
									if (!cards.includes(hs[i])) {
										event.num = 0;
										break;
									}
								}
								('step 1');
								player.draw(event.num + cards.length);
							},
							//group:'yxszhiheng00_draw',
							subSkill: {
								draw: {
									trigger: { player: 'loseEnd' },
									silent: true,
									filter(event, player) {
										if (event.getParent(2).skill != 'yxszhiheng00' && event.getParent(2).skill != 'jilue_zhiheng') return false;
										if (player.countCards('h')) return false;
										if (Array.isArray(event.cards))
											for (var i of event.cards) {
												if (i.original == 'h') return true;
											}
										return false;
									},
									content() {
										player.addTempSkill('yxszhiheng00_delay', trigger.getParent(2).skill + 'After');
									},
								},
								delay: {},
							},
							ai: {
								order: 1,
								result: {
									player: 1,
								},
								threaten: 1.55,
							},
						},
						//甄姬去衣
						yxsluoshen: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							content() {
								'step 0';
								player.addTempSkill('yxsluoshen_add');
								event.cards = [];
								('step 1');
								var next = player.judge(function (card) {
									if (card.suit !== 'diamond') return 1.5;
									return -1.5;
								});
								next.judge2 = function (result) {
									return result.bool;
								};
								if (get.mode() != 'guozhan' && !player.hasSkillTag('rejudge'))
									next.set('callback', function () {
										if (event.judgeResult.suit !== 'diamond' && get.position(card, true) == 'o') {
											player.gain(card, 'gain2').gaintag.add('yxsluoshen');
											player.removeMark('yywucan0092');
											var list = [];
											if (player.storage.yywucan0092 == 0) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_zj.jpg');
											}
											if (player.storage.yywucan0092 == 1) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj1.jpg');
											}
											if (player.storage.yywucan0092 == 2) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj2.jpg');
											}
											if (player.storage.yywucan0092 == 3) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj3.jpg');
											}
										}
									});
								else
									next.set('callback', function () {
										if (event.judgeResult.suit !== 'diamond') event.parent.orderingCards.remove(card);
									});
								('step 2');
								if (result.bool) {
									event.cards.push(result.card);
									player.chooseBool('是否再次发动【洛神】？').set('frequentSkill', 'yxsluoshen');
								} else {
									event.cards = event.cards.filter((i) => get.position(i, true) == 'o');
									if (event.cards.length) {
										player.gain(event.cards, 'gain2').gaintag.add('yxsluoshen');
										player.removeMark('yywucan0092');
										var list = [];
										if (player.storage.yywucan0092 == 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_zj.jpg');
										}
										if (player.storage.yywucan0092 == 1) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj1.jpg');
										}
										if (player.storage.yywucan0092 == 2) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj2.jpg');
										}
										if (player.storage.yywucan0092 == 3) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj3.jpg');
										}
									}
									event.finish();
								}
								('step 3');
								if (result.bool) {
									event.goto(1);
								} else {
									event.cards = event.cards.filter((i) => get.position(i, true) == 'o');
									if (event.cards.length) {
										player.gain(event.cards, 'gain2').gaintag.add('yxsluoshen');
									}
								}
							},
							subSkill: {
								add: {
									mod: {
										ignoredHandcard(card, player) {
											if (card.hasGaintag('yxsluoshen')) {
												return true;
											}
										},
										cardDiscardable(card, player, name) {
											if (name == 'phaseDiscard' && card.hasGaintag('yxsluoshen')) {
												return false;
											}
										},
									},
									onremove(player) {
										player.removeGaintag('yxsluoshen');
									},
									trigger: {
										player: 'phaseUseBegin',
									},
									forced: true,
									filter(event, player) {
										if (event.player.countCards('h') <= 7) return true;
									},
									content() {
										player.addTempSkill('shenfu');
									},
								},
							},
						},
						yxsqingguo: {
							audio: 'ext:英雄外传/audio:2',
							enable: ['chooseToRespond', 'chooseToUse'],
							viewAs: {
								name: 'shan',
							},
							mark: false,
							filterCard() {
								return false;
							},
							viewAsFilter(player) {
								if (player.hasSkill('weijing_disable')) return false;
								return player.countMark('yywucan0092') < 3;
							},
							onuse(event, player) {
								player.addMark('yywucan0092');
								var list = [];
								if (player.storage.yywucan0092 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj1.jpg');
								}
								if (player.storage.yywucan0092 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj2.jpg');
								}
								if (player.storage.yywucan0092 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj3.jpg');
								}
								if (player.storage.yywucan0092 > 3) {
									player.removeMark('yywucan0092', 1);
								}
							},
							selectCard: -1,
							prompt: '视为使用一张闪',
							ai: {
								order() {
									var player = _status.event.player;
									if (player.hasSkill('qingzhongx_give')) return 2.95;
									return 3.15;
								},
								skillTagFilter(player) {
									if (player.hasSkill('weijing_disable')) return false;
								},
								respondShan: true,
								basic: {
									useful: [7, 5.1, 2],
									value: [7, 5.1, 2],
								},
								result: {
									player: 1,
								},
							},
						},
						yxsduwu: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return (
									player.hasSkill('yxsduwu2') == false &&
									game.hasPlayer(function (current) {
										return current.hp > 0 && current.hp <= player.countCards('he') && player.inRange(current);
									})
								);
							},
							filterCard() {
								if (ui.selected.targets.length) return false;
								return true;
							},
							position: 'he',
							selectCard: [1, Infinity],
							complexSelect: true,
							complexCard: true,
							filterTarget(card, player, target) {
								return target != player && target.hp > 0 && player.inRange(target) && ui.selected.cards.length == target.hp;
							},
							check(card) {
								var player = _status.event.player;
								if (
									game.hasPlayer(function (current) {
										return current != player && current.hp > 0 && player.inRange(current) && ui.selected.cards.length == current.hp && get.damageEffect(current, player, player) > 0;
									})
								)
									return 0;
								switch (ui.selected.cards.length) {
									case 0:
										return 8 - get.value(card);
									case 1:
										return 6 - get.value(card);
									case 2:
										return 3 - get.value(card);
									default:
										return 0;
								}
							},
							content() {
								player.addTempSkill('yxsduwu3');
								target.damage('nocard');
							},
							ai: {
								damage: true,
								order: 2,
								result: {
									target(player, target) {
										return get.damageEffect(target, player);
									},
								},
								threaten: 1.5,
								expose: 0.3,
							},
						},
						yxsduwu2: {},
						yxsduwu3: {
							trigger: { global: 'dyingAfter' },
							forced: true,
							popup: false,
							charlotte: true,
							filter(event, player) {
								return event.player.isAlive() && event.reason && event.reason.parent.name == 'yxsduwu';
							},
							content() {
								player.loseHp();
								player.addTempSkill('yxsduwu2');
							},
						},
						yywucan009: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan0091', 'yynvde009'],
						},
						yywucan0091: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['子健~你哥今天不在家哦~', '糟糕~~要去了~..啊~~~'].randomGet();
								player.say(chat);
								player.addMark('yywucan0092');
								('step 1');
								var list = [];
								if (player.storage.yywucan0092 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan0092 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan0092 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan0092 > 3) {
									player.removeMark('yywucan0092', 1);
								}
							},
						},
						yynvde009: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan0092');
								('step 1');
								var list = [];
								if (player.storage.yywucan0092 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_zj.jpg');
								}
								if (player.storage.yywucan0092 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj1.jpg');
								}
								if (player.storage.yywucan0092 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj2.jpg');
								}
								if (player.storage.yywucan0092 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zj3.jpg');
								}
							},
						},
						yywucan0092: {
							//marktext:'无惨',
							mark: false,
						},
						//伏皇后去衣
						yxszhuikong: {
							audio: 'ext:英雄外传/audio:2',
							inherit: 'zhuikong',
							trigger: {
								global: 'phaseZhunbeiBegin',
							},
							check(event, player) {
								if (get.attitude(player, event.player) < -2) {
									var cards = player.getCards('h');
									if (cards.length > player.hp) return true;
									if (Array.isArray(cards))
										for (var i of cards) {
											var useful = get.useful(i);
											if (useful < 5) return true;
											if (i.number > 9 && useful < 7) return true;
										}
								}
								return false;
							},
							logTarget: 'player',
							filter(event, player) {
								return player.canCompare(event.player);
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								if (result.bool) {
									//trigger.player.skip('phaseUse');
									trigger.player.addTempSkill('zishou2');
								} else {
									trigger.player.loseHp();
									player.addMark('yywucan00102');
									var list = [];
									if (player.storage.yywucan00102 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh1.jpg');
									}
									if (player.storage.yywucan00102 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh2.jpg');
									}
									if (player.storage.yywucan00102 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh3.jpg');
									}
									if (player.storage.yywucan00102 > 3) {
										player.removeMark('yywucan00102', 1);
									}
								}
							},
						},
						yxsqiuyuan: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { target: 'useCardToTarget' },
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('yxsqiuyuan'), function (card, player, target) {
										return target != player && !_status.event.targets.includes(target) && _status.event.playerx.canUse('sha', target, false);
									})
									.set('ai', function (target) {
										var trigger = _status.event.getTrigger();
										var player = _status.event.player;
										return get.effect(target, trigger.card, trigger.player, player) + 0.1;
									})
									.set('targets', trigger.targets)
									.set('playerx', trigger.player);
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									target
										.chooseCard(
											function (card, player) {
												var name = card.name;
												return name != 'sha' && get.type(name) == 'basic';
											},
											'h',
											'交给' + get.translation(player) + '一张不为【杀】的基本牌,或成为此杀的额外目标且不可响应此【杀】',
										)
										.set('ai', function (card) {
											return get.attitude(target, _status.event.sourcex) >= 0 ? 1 : -1;
										})
										.set('sourcex', player);
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.gain(result.cards, event.target, 'give');
									player.removeMark('yywucan00102');
									var list = [];
									if (player.storage.yywucan00102 == 0) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_fhh.jpg');
									}
									if (player.storage.yywucan00102 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh1.jpg');
									}
									if (player.storage.yywucan00102 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh2.jpg');
									}
									if (player.storage.yywucan00102 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh3.jpg');
									}
								} else {
									event.target = target;
									trigger.parent.targets.push(event.target);
									trigger.parent.triggeredTargets2.push(event.target);
									trigger.directHit.push(event.target);
									game.log(event.target, '成为了', trigger.card, '的额外目标');
									target.addTempSkill('yxsfengyin', { player: 'phaseJieshuBegin' });
								}
							},
							ai: {
								expose: 0.2,
								effect: {
									target(card, player, target) {
										if (card.name != 'sha') return;
										var players = game.filterPlayer();
										if (get.attitude(player, target) <= 0) {
											for (var i of players) {
												var target2 = i;
												if (player != target2 && target != target2 && player.canUse(card, target2, false) && get.effect(target2, { name: 'shacopy', nature: card.nature, suit: card.suit }, player, target) > 0 && get.effect(target2, { name: 'shacopy', nature: card.nature, suit: card.suit }, player, player) < 0) {
													if (target.hp == target.maxHp) return 0.3;
													return 0.6;
												}
											}
										} else {
											for (var i of players) {
												var target2 = i;
												if (player != target2 && target != target2 && player.canUse(card, target2, false) && get.effect(target2, { name: 'shacopy', nature: card.nature, suit: card.suit }, player, player) > 0) {
													if (player.canUse(card, target2)) return;
													if (target.hp == target.maxHp) return [0, 1];
													return [0, 0];
												}
											}
										}
									},
								},
							},
						},
						yywucan0010: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00101', 'yynvde0010'],
						},
						yywucan00101: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['曹贼~放..放开我!', '我..誓死不从!'].randomGet();
								player.say(chat);
								player.addMark('yywucan00102');
								('step 1');
								var list = [];
								if (player.storage.yywucan00102 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan00102 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan00102 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan00102 > 3) {
									player.removeMark('yywucan00102', 1);
								}
							},
						},
						yynvde0010: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00102');
								('step 1');
								var list = [];
								if (player.storage.yywucan00102 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_fhh.jpg');
								}
								if (player.storage.yywucan00102 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh1.jpg');
								}
								if (player.storage.yywucan00102 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh2.jpg');
								}
								if (player.storage.yywucan00102 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/fhh3.jpg');
								}
							},
						},
						yywucan00102: {
							//marktext:'无惨',
							mark: false,
						},
						//王异去衣
						yxszhenlie: {
							audio: 'ext:英雄外传/audio:2',
							filter(event, player) {
								return event.player != player && event.card && (event.card.name == 'sha' || get.type(event.card) == 'trick');
							},
							logTarget: 'player',
							check(event, player) {
								if (event.parent.excluded.includes(player)) return false;
								if (get.attitude(player, event.player) > 0) {
									return false;
								}
								if (get.tag(event.card, 'respondSha')) {
									if (player.countCards('h', { name: 'sha' }) == 0) {
										return true;
									}
								} else if (get.tag(event.card, 'respondShan')) {
									if (player.countCards('h', { name: 'shan' }) == 0) {
										return true;
									}
								} else if (get.tag(event.card, 'damage')) {
									if (event.card.name == 'shuiyanqijunx') return player.countCards('e') == 0;
									return true;
								} else if ((event.card.name == 'shunshou' || (event.card.name == 'zhujinqiyuan' && (event.card.yingbian || get.distance(event.player, player) < 0))) && player.hp > 2) {
									return true;
								}
								return false;
							},
							trigger: { target: 'useCardToTargeted' },
							content() {
								'step 0';
								player.loseHp();
								player.addMark('yywucan00112');
								var list = [];
								if (player.storage.yywucan00112 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy1.jpg');
								}
								if (player.storage.yywucan00112 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy2.jpg');
								}
								if (player.storage.yywucan00112 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy3.jpg');
								}
								if (player.storage.yywucan00112 > 3) {
									player.removeMark('yywucan00112', 1);
								}
								('step 1');
								trigger.parent.excluded.add(player);
								('step 2');
								if (trigger.player.countCards('he')) {
									player.discardPlayerCard(trigger.player, 'he', true);
								}
								('step 3');
								if (player.maxHp - player.hp >= 1) {
									player.chooseUseTarget('视为使用一张【杀】>', { name: 'sha' }, false);
								}
								if (player.maxHp - player.hp >= 2) {
									player.chooseUseTarget('视为使用一张【杀】>', { name: 'sha' }, false);
								}
								if (player.maxHp - player.hp >= 3) {
									player.chooseUseTarget('视为使用一张【杀】>', { name: 'sha' }, false);
								}
								if (player.maxHp - player.hp >= 4) {
									player.chooseUseTarget('视为使用一张【杀】>', { name: 'sha' }, false);
								}
							},
							ai: {
								expose: 0.3,
							},
						},
						yxsmiji: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
							},
							filter(event, player) {
								return player.hp < player.maxHp;
							},
							content() {
								'step 0';
								event.num = player.getDamagedHp() * 2;
								player.draw(event.num);
								player.removeMark('yywucan00112');
								var list = [];
								if (player.storage.yywucan00112 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_wy.jpg');
								}
								if (player.storage.yywucan00112 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy1.jpg');
								}
								if (player.storage.yywucan00112 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy2.jpg');
								}
								if (player.storage.yywucan00112 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy3.jpg');
								}
								('step 1');
								var check = player.countCards('h') - event.num;
								player
									.chooseCardTarget({
										selectCard: event.num,
										filterTarget(card, player, target) {
											return player != target;
										},
										ai1(card) {
											var player = _status.event.player;
											if (player.maxHp - player.hp == 1 && card.name == 'du') return 30;
											var check = _status.event.check;
											if (check < 1) return 0;
											if (player.hp > 1 && check < 2) return 0;
											return get.unuseful(card) + 9;
										},
										ai2(target) {
											var att = get.attitude(_status.event.player, target);
											if (ui.selected.cards.length == 1 && ui.selected.cards[0].name == 'du') return 1 - att;
											return att - 2;
										},
										prompt: `将${get.cnNumber(event.num)}张手牌交给一名其他角色`,
									})
									.set('check', check);
								('step 2');
								if (result.bool) {
									result.targets[0].gain(result.cards, event.player, 'giveAuto');
									player.line(result.targets, 'green');
								}
							},
							ai: {
								threaten(player, target) {
									if (target.hp == 1) return 3;
									if (target.hp == 2) return 1.5;
									return 0.5;
								},
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1) return [0, 0];
									},
								},
							},
						},
						yywucan00110: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00111', 'yynvde0011'],
						},
						yywucan00111: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['嘘~要尝尝我嘛？', '好好享用我吧,这是你最后的快乐~'].randomGet();
								player.say(chat);
								player.addMark('yywucan00112');
								('step 1');
								var list = [];
								if (player.storage.yywucan00112 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan00112 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan00112 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan00112 > 3) {
									player.removeMark('yywucan00112', 1);
								}
							},
						},
						yynvde0011: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00112');
								('step 1');
								var list = [];
								if (player.storage.yywucan00112 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_wy.jpg');
								}
								if (player.storage.yywucan00112 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy1.jpg');
								}
								if (player.storage.yywucan00112 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy2.jpg');
								}
								if (player.storage.yywucan00112 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/wy3.jpg');
								}
							},
						},
						yywucan00112: {
							//marktext:'无惨',
							mark: false,
						},
						//吕玲绮去衣
						yxsguowu: {
							trigger: { player: 'phaseUseBegin' },
							audio: 'ext:英雄外传/audio:2',
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								player.addMark('yywucan00122');
								var list = [];
								if (player.storage.yywucan00122 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/llq1.jpg');
								}
								if (player.storage.yywucan00122 > 1) {
									player.removeMark('yywucan00122', 1);
								}
								('step 0');
								var hs = player.getCards('h');
								player.showCards(hs, get.translation(player) + '发动了【帼舞】');
								var list = [];
								for (var i of hs) {
									list.add(get.type2(i, player));
									if (list.length >= 3) break;
								}
								if (list.length >= 1) {
									var card = get.discardPile(function (i) {
										return i.name == 'sha';
									});
									if (card) player.gain(card, 'gain2');
									player.addTempSkill('yxsguowu_dist', 'phaseUseAfter');
								}
								if (list.length >= 2) player.addTempSkill('yxsguowu_add', 'phaseUseAfter');
								if (list.length >= 3) player.addTempSkill('yxsliyu', 'phaseJieshuBegin');
							},
							subSkill: {
								dist: {
									charlotte: true,
									mod: { targetInRange: () => true },
								},
								add: {
									charlotte: true,
									trigger: { player: 'useCard1' },
									forced: true,
									filter(event, player) {
										var info = get.info(event.card, false);
										if (info.allowMultiple == false) return false;
										if (event.card.name != 'sha' && info.type != 'trick') return false;
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
										var num = game.countPlayer(function (current) {
											return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current) && lib.filter.targetInRange(trigger.card, player, current);
										});
										player
											.chooseTarget(`帼舞:是否为${get.translation(trigger.card)}增加` + (num > 1 ? '至多两个' : '一个') + '目标？', [1, Math.min(2, num)], function (card, player, target) {
												var trigger = _status.event.getTrigger();
												var card = trigger.card;
												return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
											})
											.set('ai', function (target) {
												var player = _status.event.player;
												var card = _status.event.getTrigger().card;
												return get.effect(target, card, player, player);
											});
										('step 1');
										if (result.bool) {
										} else event.finish();
										('step 2');
										var targets = result.targets.sortBySeat();
										trigger.targets.addArray(targets);
									},
								},
							},
						},
						yxszhuangrong: {
							audio: 'ext:英雄外传/audio:2',
							derivation: ['yxsqshenwei', 'yxswushuang'],
							trigger: { global: 'phaseEnd' },
							forced: true,
							juexingji: true,
							filter(event, player) {
								return player.hp == 1 || player.countCards('h') == 1;
							},
							content() {
								'step 0';
								player.awakenSkill('yxszhuangrong');
								player.loseMaxHp();
								('step 1');
								if (player.maxHp > player.hp) player.hp = player.maxHp;
								('step 2');
								player.drawTo(Math.min(5, player.maxHp));
								player.addSkillLog('yxsqshenwei');
								player.addSkillLog('yxswushuang');
							},
						},
						yxsqshenwei: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseDrawBegin2' },
							forced: true,
							filter: (event) => !event.numFixed,
							content() {
								trigger.num += 2;
							},
							mod: {
								maxHandcard: (player, num) => num + 2,
							},
						},
						yxswushuang: {
							shaRelated: true,
							audio: 'ext:英雄外传/audio:2',
							forced: true,
							group: ['yxswushuang1', 'yxswushuang2'],
							preHidden: ['yxswushuang1', 'yxswushuang2'],
						},
						yxswushuang1: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'useCardToPlayered' },
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
							},
							//_priority:-1,
							logTarget: 'target',
							content() {
								var id = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].shanRequired == 'number') {
									map[id].shanRequired++;
								} else {
									map[id].shanRequired = 2;
								}
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
								},
							},
						},
						yxswushuang2: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'useCardToPlayered', target: 'useCardToTargeted' },
							forced: true,
							logTarget(trigger, player) {
								return player == trigger.player ? trigger.target : trigger.player;
							},
							filter(event, player) {
								return event.card && event.card.name == 'juedou';
							},
							//_priority:-1,
							content() {
								var id = (player == trigger.player ? trigger.target : trigger.player).playerid;
								var idt = trigger.target.playerid;
								var map = trigger.parent.customArgs;
								if (!map[idt]) map[idt] = {};
								if (!map[idt].shaReq) map[idt].shaReq = {};
								if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
								map[idt].shaReq[id]++;
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
								},
							},
						},
						yxsliyu: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								source: 'damageSource',
							},
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.card && event.card.name == 'sha' && event.player != player && event.player.isAlive() && event.player.countGainableCards(player, 'hej') > 0;
							},
							forced: true,
							content() {
								'step 0';
								player.gainPlayerCard(get.prompt('yxsliyu', trigger.player), trigger.player, 'hej', 'visibleMove').set('ai', function (button) {
									//QQQ
									var player = _status.event.player;
									var evt = _status.event.target;
									if (get.attitude(player, evt) > 0 && get.position(button.link) == 'j') return 4 + get.value(button.link);
									if (get.type(button.link) == 'equip') {
										if (
											get.attitude(player, evt) > 0 &&
											game.hasPlayer(function (current) {
												return player.canUse({ name: 'juedou' }, current) && current != evt.target && get.effect(current, { name: 'juedou' }, player, player) > 2;
											})
										) {
											return 5;
										} else if (
											game.hasPlayer(function (current) {
												return player.canUse({ name: 'juedou' }, current) && current != evt && current != player && get.effect(current, { name: 'juedou' }, player, player) < 0;
											})
										) {
											return 1;
										} else return 4;
									}
									return 3;
								})('step 1');
								if (result.bool) {
									if (get.type(result.cards[0]) != 'equip') {
										trigger.player.draw();
										event.finish();
									} else {
										if (
											!game.hasPlayer(function (current) {
												return current != player && current != trigger.player && player.canUse('juedou', current);
											})
										) {
											event.finish();
											return;
										}
										trigger.player
											.chooseTarget(
												true,
												function (card, player, target) {
													var evt = _status.event.parent;
													return evt.player.canUse({ name: 'juedou' }, target) && target != _status.event.player;
												},
												`请选择一名角色,视为${get.translation(player)}对其使用【决斗】`,
											)
											.set('ai', function (target) {
												var evt = _status.event.parent;
												return get.effect(target, { name: 'juedou' }, evt.player, _status.event.player) - 2;
											});
									}
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									player.useCard({ name: 'juedou' }, result.targets[0], 'noai');
								}
							},
							ai: {
								halfneg: true,
							},
						},
						yywucan0012: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00121', 'yynvde0012'],
						},
						yywucan00121: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['父亲定会杀了你们!..好疼~~', '我会让你们付出代价的~啊~~'].randomGet();
								player.say(chat);
								player.addMark('yywucan00122');
								('step 1');
								var list = [];
								if (player.storage.yywucan00122 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/llq1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan00122 > 1) {
									player.removeMark('yywucan00122', 1);
								}
							},
						},
						yynvde0012: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00122');
								('step 1');
								var list = [];
								if (player.storage.yywucan00122 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_llq.jpg');
								}
								if (player.storage.yywucan00122 > 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/llq1.jpg');
								}
							},
						},
						yywucan00122: {
							//marktext:'无惨',
							mark: false,
						},
						//貂蝉去衣11
						yxslijian: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 1,
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
							//filterCard:true,
							//position:'he',
							filterTarget(card, player, target) {
								if (player == target) return false;
								if (target.sex != 'male') return false;
								if (ui.selected.targets.length == 1) {
									return target.canUse({ name: 'juedou' }, ui.selected.targets[0]);
								}
								return true;
							},
							targetprompt: ['先出杀', '后出杀'],
							selectTarget: 2,
							multitarget: true,
							content() {
								player.addMark('yywucan00142');
								var list = [];
								if (player.storage.yywucan00142 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/dc1.jpg');
								}
								if (player.storage.yywucan00142 > 1) {
									player.removeMark('yywucan00142', 1);
								}
								('step 0');
								targets[1].useCard({ name: 'juedou' }, 'nowuxie', targets[0], 'noai').animate = false;
								('step 1');
								var list = ['弃牌', '摸牌', '取消'];
								if (!player.countCards('he')) list.remove('弃牌');
								player.chooseControl(list, function () { }).set('prompt', get.prompt2('yxslijian'));
								('step 2');
								if (result.control == '弃牌') {
									player.chooseToDiscard(true, 'he');
									targets[1].useCard({ name: 'juedou' }, 'nowuxie', targets[0], 'noai').animate = false;
								} else if (result.control == '摸牌') {
									player.draw();
								}
							},
							ai: {
								order: 8,
								result: {
									target(player, target) {
										if (ui.selected.targets.length == 0) {
											return -3;
										} else {
											return get.effect(target, { name: 'juedou' }, ui.selected.targets[0], target);
										}
									},
								},
								expose: 0.4,
								threaten: 3,
							},
						},
						yxsbiyue: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseJieshuBegin' },
							forced: true,
							content() {
								var num = 2;
								if (!player.countCards('h')) {
									num = player.maxHp - player.countCards('h');
								}
								player.draw(num);
								player.removeMark('yywucan00142');
								var list = [];
								if (player.storage.yywucan00142 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_dc.jpg');
								}
								if (player.storage.yywucan00142 > 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/dc1.jpg');
								}
							},
						},
						yywucan0014: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00141', 'yynvde0014'],
						},
						yywucan00141: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['谁更勇猛呢~？', '一次还远远不够哦~'].randomGet();
								player.say(chat);
								player.addMark('yywucan00142');
								('step 1');
								var list = [];
								if (player.storage.yywucan00142 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/dc1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan00142 > 1) {
									player.removeMark('yywucan00142', 1);
								}
							},
						},
						yynvde0014: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00142');
								('step 1');
								var list = [];
								if (player.storage.yywucan00142 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_dc.jpg');
								}
								if (player.storage.yywucan00142 > 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/dc1.jpg');
								}
							},
						},
						yywucan00142: {
							//marktext:'无惨',
							mark: false,
						},
						//小乔去衣
						yxstianxiang: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageBegin4' },
							forced: true,
							preHidden: true,
							filter(event, player) {
								return (
									player.countCards('h', function (card) {
										return _status.connectMode || card.suit == 'heart';
									}) > 0 && event.num > 0
								);
							},
							content() {
								'step 0';
								player
									.chooseCardTarget({
										filterCard(card, player) {
											return card.suit == 'heart' && lib.filter.cardDiscardable(card, player);
										},
										filterTarget(card, player, target) {
											return player != target;
										},
										ai1(card) {
											return 10 - get.value(card);
										},
										ai2(target) {
											var att = get.attitude(_status.event.player, target);
											var trigger = _status.event.getTrigger();
											var da = 0;
											if (_status.event.player.hp == 1) {
												da = 10;
											}
											var eff = get.damageEffect(target, trigger.source, target);
											if (att == 0) return 0.1 + da;
											if (eff >= 0 && att > 0) {
												return att + da;
											}
											if (att > 0 && target.hp > 1) {
												if (target.maxHp - target.hp >= 3) return att * 1.1 + da;
												if (target.maxHp - target.hp >= 2) return att * 0.9 + da;
											}
											return -att + da;
										},
										prompt: get.prompt('yxstianxiang'),
										prompt2: lib.translate.yxstianxiang_info,
									})
									.setHiddenSkill(event.name);
								('step 1');
								if (result.bool) {
									player.discard(result.cards);
									var target = result.targets[0];
									player
										.chooseControlList(
											true,
											function (event, player) {
												var target = _status.event.target;
												var att = get.attitude(player, target);
												if (target.hasSkillTag('maihp')) att = -att;
												if (att > 0) {
													return 0;
												} else {
													return 1;
												}
											},
											[`令${get.translation(target)}受到伤害来源对其造成的1点伤害,摸等同于其已掉血量的牌,并令你穿1件衣服`, `令${get.translation(target)}失去1点体力`],
										)
										.set('target', target);
									trigger.cancel();
									event.target = target;
									event.card = result.cards[0];
								} else {
									event.finish();
								}
								('step 2');
								if (typeof result.index == 'number') {
									event.index = result.index;
									if (result.index) {
										event.related = event.target.loseHp();
									} else {
										event.related = event.target.damage(trigger.source || 'nosource', 'nocard');
										player.removeMark('yywucan00152');
										var list = [];
										if (player.storage.yywucan00152 == 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_xq.jpg');
										}
										if (player.storage.yywucan00152 > 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/xq1.jpg');
										}
									}
								} else event.finish();
								('step 3');
								if (event.related.cancelled || target.isDead()) return;
								if (event.index && card.isInPile()) target.draw(0);
								else if (target.getDamagedHp()) target.draw(Math.min(5, target.getDamagedHp()));
							},
							ai: {
								maixie_defend: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return;
										if (get.tag(card, 'damage') && target.countCards('he') > 1) return 0.7;
									},
								},
							},
						},
						yxstianxiang3: {
							trigger: { player: 'loseHpAfter' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.type == 'yxstianxiang';
							},
							content() {
								'step 0';
								//player.gain(player.storage.yxstianxiang3,'gain2');
								'step 1';
								player.removeSkill('yxstianxiang3');
							},
							onremove(player) {
								var card = player.storage.yxstianxiang3;
								if (get.position(card) == 's') {
									game.cardsDiscard(card);
								}
								delete player.storage.yxstianxiang3;
							},
						},
						yxstianxiang2: {
							trigger: { player: 'damageAfter' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.type == 'yxstianxiang';
							},
							content() {
								if (player.isDamaged()) {
									player.draw(player.getDamagedHp());
								}
								player.removeSkill('yxstianxiang2');
							},
						},
						yxshongyan: {
							audio: 'ext:英雄外传/audio:2',
							mod: {
								suit(card, suit) {
									if (suit == 'spade') return 'heart';
								},
							},
							trigger: { player: ['useCard', 'respond', 'loseAfter'] },
							audio: 'ext:英雄外传/audio:2',
							forced: true,
							filter(event, player) {
								//if(player==_status.currentPhase) return false;
								if (event.name != 'lose') return event.card.suit == 'heart';
								if (event.type != 'discard') return false;
								if (event.cards2) {
									for (var i = 0; i < event.cards2.length; i++) {
										if (event.cards2[i].suit == 'heart') return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								event.count = 1;
								if (trigger.name == 'lose') {
									event.count = 0;
									for (var i = 0; i < trigger.cards2.length; i++) {
										if (trigger.cards2[i].suit == 'heart') event.count++;
									}
								}
								('step 1');
								player.addMark('yywucan00152');
								var list = [];
								if (player.storage.yywucan00152 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xq1.jpg');
								}
								if (player.storage.yywucan00152 > 1) {
									player.removeMark('yywucan00152', 1);
								}
								player.draw();
								event.count--;
								('step 2');
								if (event.count) {
									player.chooseBool(get.prompt2('yxshongyan')).set('frequentSkill', 'yxshongyan');
								} else event.finish();
								('step 3');
								if (result.bool) {
									event.goto(1);
								}
							},
							ai: {
								threaten: 0.7,
							},
						},
						yywucan0015: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00151', 'yynvde0015'],
						},
						yywucan00151: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['就..那么迫不及待吗？', '变态..萝莉控~', '尽..情..发泄吧~~'].randomGet();
								player.say(chat);
								player.addMark('yywucan00152');
								('step 1');
								var list = [];
								if (player.storage.yywucan00152 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xq1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan00152 > 1) {
									player.removeMark('yywucan00152', 1);
								}
							},
						},
						yynvde0015: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00152');
								('step 1');
								var list = [];
								if (player.storage.yywucan00152 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_xq.jpg');
								}
								if (player.storage.yywucan00152 > 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/xq1.jpg');
								}
							},
						},
						yywucan00152: {
							//marktext:'无惨',
							mark: false,
						},
						//唐姬去衣
						yxsjielie: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								return player.phaseNumber == 1 && !player.storage.yxsjielie;
							},
							content() {
								'step 0';
								player.chooseTarget('请选择【抗歌】的目标', '其于回合外摸牌后,你摸等量的牌;其进入濒死状态时,你可令其回复体力至3点;其死亡后,你扣1点体力上限', lib.filter.notMe, true).set('ai', function (target) {
									return get.attitude(_status.event.player, target) > 0;
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.addSkill('yxsjielie_clear');
									player.storage.yxsjielie = target;
									player.markSkill('yxsjielie');
								}
							},
							intro: { content: '已指定$为目标' },
							group: ['yxsjielie_draw', 'yxsjielie_dying', 'yxsjielie_die'],
							subSkill: {
								draw: {
									audio: 'yxsjielie',
									trigger: { global: 'gainAfter' },
									forced: true,
									filter(event, player) {
										return player.countMark('yxsjielie_draw') < 99 && event.player == player.storage.yxsjielie && event.player != _status.currentPhase && event.cards && event.cards.length;
									},
									logTarget: 'player',
									content() {
										var num = Math.min(3 - player.countMark('yxsjielie_draw'), trigger.cards.length);
										player.addMark('yxsjielie_draw', num, false);
										player.draw(num);
									},
								},
								clear: {
									trigger: { global: 'phaseBeginStart' },
									forced: true,
									firstDo: true,
									popup: false,
									charlotte: true,
									filter(event, player) {
										return player.countMark('yxsjielie_draw') > 0;
									},
									content() {
										player.removeMark('yxsjielie_draw', player.countMark('yxsjielie_draw'), false);
									},
								},
								dying: {
									audio: 'yxsjielie',
									trigger: { global: 'dying' },
									logTarget: 'player',
									filter(event, player) {
										return event.player == player.storage.yxsjielie && event.player.hp < 1 && !player.hasSkill('yxsjielie_temp');
									},
									check(event, player) {
										return get.attitude(player, event.player) > 0;
									},
									prompt2: '令其将体力值回复至3点',
									content() {
										trigger.player.recover(3 - trigger.player.hp);
										player.removeMark('yywucan00162');
										var list = [];
										if (player.storage.yywucan00162 == 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_tj.jpg');
										}
										if (player.storage.yywucan00162 > 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/tj1.jpg');
										}
										player.addTempSkill('yxsjielie_temp', 'roundStart');
									},
								},
								temp: {},
								die: {
									audio: 'yxsjielie',
									trigger: { global: 'dieAfter' },
									filter(event, player) {
										return event.player == player.storage.yxsjielie;
									},
									forced: true,
									content() {
										//var cards=player.getCards('he');
										//if(cards.length) player.discard(cards);
										player.loseMaxHp();
									},
								},
							},
							ai: {
								threaten: 2,
							},
						},
						yxskangge: {
							audio: 'ext:英雄外传/audio:2',
							usable: 2,
							trigger: { player: 'damageBegin4' },
							forced: true,
							filter(event, player) {
								return (!event.source || (event.source != player && event.source != player.storage.yxsjielie)) && player.storage.yxsjielie && player.storage.yxsjielie.isIn();
							},
							content() {
								'step 0';
								player
									.chooseControl(lib.suit.slice(0), 'cancel2')
									.set('prompt', get.prompt('yxskangge'))
									.set('prompt2', `防止伤害并脱1件衣服,且令${get.translation(player.storage.yxsjielie)}从弃牌堆中获得等量的花色牌`)
									.set('ai', function () {
										var player = _status.event.player;
										if (get.attitude(player, player.storage.yxsjielie) <= 0) return 'cancel2';
										return lib.suit.randomGet();
									});
								('step 1');
								if (result.control != 'cancel2') {
									event.suit = result.control;
									trigger.cancel();
								} else event.finish();
								player.addMark('yywucan00162');
								var list = [];
								if (player.storage.yywucan00162 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/tj1.jpg');
								}
								if (player.storage.yywucan00162 > 1) {
									player.removeMark('yywucan00162', 1);
								}
								//player.chooseToDiscard(2,'he',true);
								('step 2');
								var cards = [];
								while (cards.length < trigger.num) {
									var card = get.discardPile(function (card) {
										return card.suit == event.suit && !cards.includes(card);
									});
									if (card) cards.push(card);
									else break;
								}
								if (cards.length) player.storage.yxsjielie.gain(cards, 'gain2');
							},
						},
						yywucan0016: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00161', 'yynvde0016'],
						},
						yywucan00161: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['董贼!我定要手刃你', '你能得到我的人,但得不到我的心!'].randomGet();
								player.say(chat);
								player.addMark('yywucan00162');
								('step 1');
								var list = [];
								if (player.storage.yywucan00162 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/tj1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan00162 > 1) {
									player.removeMark('yywucan00162', 1);
								}
							},
						},
						yynvde0016: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00162');
								('step 1');
								var list = [];
								if (player.storage.yywucan00162 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_tj.jpg');
								}
								if (player.storage.yywucan00162 > 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/tj1.jpg');
								}
							},
						},
						yywucan00162: {
							//marktext:'无惨',
							mark: false,
						},
						//俾斯麦11
						yxsdetong: {
							init(player) {
								player.storage.yxsdetong = 0;
							},
							intro: {
								content(storage) {
									return '<德统>判定成功次数:' + storage;
								},
							},
							mark: false,
							trigger: { player: 'useCard' },
							marktext: '德统',
							forced: true,
							_priority: 3,
							filter(event, player) {
								if (!player.isPhaseUsing()) return false;
								return get.type(event.card) !== 'equip';
							},
							content() {
								'step 0';
								player.judge('德统', function (card) {
									var sui = get.type(trigger.card);
									if (get.type(card) == sui) return 3;
									return -3;
								});
								('step 1');
								if (result.bool) {
									player.storage.yxsdetong++;
									player.markSkill('yxsdetong');
									game.playAudio('../extension/英雄外传/audio/yxsdetong1.mp3');
								} else {
									player.draw(1);
									game.playAudio('../extension/英雄外传/audio/yxsdetong2.mp3');
								}
							},
							ai: {
								threaten: 1.2,
								noautowuxie: true,
							},
						},
						yxstiexiang: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								return player.storage.yxsdetong && player.storage.yxsdetong > 0;
							},
							_priority: 18,
							content() {
								'step 0';
								if (player.storage.yxsdetong >= 5) {
									event.goto(5);
								}
								('step 1');
								if (player.storage.yxsdetong >= 1) {
									player.chooseUseTarget('视为使用一张【杀】>', { name: 'sha' }, false);
								}
								('step 2');
								if (player.storage.yxsdetong >= 2) {
									player.chooseUseTarget('视为使用一张【杀】>', { name: 'sha' }, false);
								}
								('step 3');
								if (player.storage.yxsdetong >= 3) {
									player.chooseUseTarget('视为使用一张【杀】>', { name: 'sha' }, false);
								}
								('step 4');
								if (player.storage.yxsdetong >= 4) {
									player.chooseUseTarget('视为使用一张【杀】>', { name: 'sha' }, false);
								}
								('step 5');
								if (player.storage.yxsdetong >= 5) {
									var bool = false;
									if (player == game.me) bool = true;
									else
										switch (get.mode()) {
											case 'identity': {
												game.showIdentity();
												var id1 = player.identity;
												var id2 = game.me.identity;
												if (['zhu', 'zhong', 'mingzhong'].includes(id1)) {
													if (['zhu', 'zhong', 'mingzhong'].includes(id2)) bool = true;
													break;
												} else if (id1 == 'fan') {
													if (id2 == 'fan') bool = true;
													break;
												}
												break;
											}
											case 'guozhan': {
												if (game.me.isFriendsOf(player)) bool = true;
												break;
											}
											case 'versus': {
												if (player.side == game.me.side) bool = true;
												break;
											}
											case 'boss': {
												if (player.side == game.me.side) bool = true;
												break;
											}
											default: {
											}
										}
									game.over(bool);
								}
								('step 6');
								player.storage.yxsdetong = 0;
								player.unmarkSkill('yxsdetong');
							},
							ai: {
								combo: 'yxsdetong',
							},
						},
						//斯巴达克斯11
						yxsjiasuo: {
							audio: 'ext:英雄外传/audio:2',
							mod: {
								maxHandcard(player, num) {
									return num + player.maxHp;
								},
							},
							marktext: '自由',
							intro: {
								name2: '自由',
								content: 'mark',
							},
							trigger: {
								player: 'phaseJudgeBefore',
							},
							forced: true,
							force: true,
							filter(event, player) {
								return event.player && event.player.isIn() && !event.player.hasJudge('lebu');
							},
							content() {
								var card = game.createCard('lebu');
								trigger.player.addJudge(card);
								trigger.player.$draw(card);
								player.addMark('yxsjiasuo');
								game.playAudio('../extension/英雄外传/audio/yxsjiasuo1.mp3');
							},
						},
						yxsfanpan: {
							juexingji: true,
							derivation: ['yxsjianta'],
							trigger: {
								player: 'phaseZhunbei',
							},
							forced: true,
							audio: 'ext:英雄外传/audio:2',
							filter(event, player) {
								return player.countMark('yxsjiasuo') >= 2;
							},
							content() {
								player.loseMaxHp();
								player.recover();
								player.addSkill('yxsjianta');
								player.awakenSkill('yxsjiasuo');
								player.awakenSkill('yxsfanpan');
							},
						},
						yxsjianta: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'chooseToUse',
							filterCard: true,
							viewAs: {
								name: 'nanman',
							},
							viewAsFilter(player) {
								if (!player.countCards('h')) return false;
							},
							prompt: '将一张手牌当作【南蛮入侵】使用',
							check(card) {
								return 4 - get.value(card);
							},
							onuse(links, player) {
								var next = game.createEvent('yxsjianta_loseHp', false, _status.event.parent);
								next.player = player;
								next.setContent(function () {
									player.loseMaxHp();
								});
							},
						},
						//维纳斯11
						yxsyonglian: {
							audio: 'ext:英雄外传/audio:2',
							round: 1,
							trigger: { global: 'phaseUseBegin' },
							direct: false,
							filter(event, player) {
								return event.player != player && event.player.isAlive();
							},
							content() {
								trigger.player.addTempSkill('yxsliange');
								trigger.player.addTempSkill('yxschengfa');
								//trigger.player.turnOver();
								//trigger.player.discard(trigger.player.getCards('he'));
								//player.recover();
								//trigger.player.recover();
							},
						},
						yxsjuezi: {
							derivation: ['yxsliange'],
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageBefore' },
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							forced: true,
							content() {
								trigger.cancel();
							},
						},
						yxsliange: {
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'red') return 1;
									return -1;
								});
								('step 1');
								if (result.color == 'red') {
									if (player.hp != player.maxHp) {
										player.draw();
									}
								}
								if (result.suit == 'heart') {
									player.recover();
								}
								if (result.color == 'black') {
									player.chooseToDiscard('h', 1, true);
								}
								if (result.suit == 'spade') {
									player.loseHp();
								}
							},
						},
						yxschengfa: {
							//audio:3,
							trigger: { player: 'phaseUseEnd' },
							forced: true,
							content() {
								if (player.countCards('h') >= player.hp) {
									//trigger.player.discard(player.countCards('h')/2);
									player.chooseToDiscard('h', Math.floor(player.countCards('h') / 2), true);
								}
							},
						},
						//路易十六11
						yxshuangying2: {
							mod: {
								maxHandcard(player, num) {
									if (player.hasSkill('yxshuangying2')) {
										return (
											num +
											game.countPlayer(function (current) {
												if (current.group == 'xf' && current.sex == 'female') return 1;
											})
										);
									}
									return num;
								},
							},
							audio: 'ext:英雄外传/audio:2',
							intro: {
								content: '当前有#个标记',
							},
							trigger: {
								source: 'damageBegin2',
							},
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							forced: true,
							content() {
								var num = [0, 1, 2].randomGet();
								player.addMark('yxsduantou', num);
							},
						},
						yxschuxing: {
							group: ['yxschuxing1', 'yxsduantou'],
						},
						yxschuxing1: {
							forced: true,
							filter(event, player) {
								return player.countMark('yxsduantou') >= 14;
							},
							trigger: {
								source: 'damageBegin1',
							},
							content() {
								trigger.num++;
							},
						},
						yxsduantou: {
							marktext: '荒淫',
							intro: {
								content: 'mark',
							},
							forced: true,
							filter(event, player) {
								return player.countMark('yxsduantou') >= 15;
							},
							trigger: {
								source: 'damageSource',
							},
							audio: 'ext:英雄外传/audio:2',
							content() {
								'step 0';
								player.awakenSkill('yxsduantou');
								player.storage.yxsduantou = true;
								event.current = player.next;
								('step 1');
								if (event.player.isAlive()) {
									event.current.useCard({ name: 'sha' }, player);
								}
								('step 2');
								event.current = event.current.next;
								if (event.current != player) event.goto(1);
							},
						},
						yxshuangying: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'chooseToUse',
							prompt: '你可以将黑色牌当做逐近弃远,红色牌当做万箭齐发使用.',
							viewAs(cards, player) {
								var name = false;
								var nature = null;
								switch (cards[0]?.suit) {
									case 'club':
										name = 'zhujinqiyuan';
										break;
									case 'diamond':
										name = 'wanjian';
										break;
									case 'spade':
										name = 'zhujinqiyuan';
										break;
									case 'heart':
										name = 'wanjian';
										break;
								}
								if (name) return { name: name, nature: nature };
								return null;
							},
							position: 'hs',
							filterCard(card, player, event) {
								event = event || _status.event;
								var filter = event._backup.filterCard;
								var name = card.suit;
								if (name == 'club' && filter({ name: 'zhujinqiyuan', cards: [card] }, player, event)) return true;
								if (name == 'diamond' && filter({ name: 'wanjian', cards: [card] }, player, event)) return true;
								if (name == 'spade' && filter({ name: 'zhujinqiyuan', cards: [card] }, player, event)) return true;
								if (name == 'heart' && filter({ name: 'wanjian', cards: [card] }, player, event)) return true;
								return false;
							},
							filter(event, player) {
								var filter = event.filterCard;
								if (filter({ name: 'wanjian' }, player, event) && player.countCards('hs', { suit: 'diamond' })) return true;
								if (filter({ name: 'zhujinqiyuan' }, player, event) && player.countCards('hs', { suit: 'club' })) return true;
								if (filter({ name: 'wanjian' }, player, event) && player.countCards('hs', { suit: 'heart' })) return true;
								if (filter({ name: 'zhujinqiyuan' }, player, event) && player.countCards('hs', { suit: 'spade' })) return true;
								return false;
							},
						},
						//立花千代11
						yxsbaici: {
							round: 1,
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								global: 'phaseZhunbeiBegin',
							},
							check(event, player) {
								if (get.attitude(player, event.player) < -2) {
									var cards = player.getCards('h');
									if (cards.length > player.hp) return true;
									if (Array.isArray(cards))
										for (var i of cards) {
											var useful = get.useful(i);
											if (useful < 5) return true;
											if (i.number > 7 && useful < 7) return true;
										}
								}
								return false;
							},
							logTarget: 'player',
							filter(event, player) {
								return player.hasSkill('yxsbaici') && player.canCompare(event.player);
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.player).set('small', player.hp > 1 && get.effect(trigger.player, { name: 'sha' }, player, trigger.player) > 0 && Math.random() < 0.9);
								('step 1');
								if (result.bool) {
									trigger.player.loseHp(1);
									var card = { name: 'sha', nature: 'thunder' };
									if (player.canUse(card, trigger.player, false)) player.useCard(card, trigger.player, false);
									event.finish();
								}
								('step 2');
								trigger.player.recover();
							},
						},
						yxsruiyu: {
							round: 1,
							trigger: {
								global: 'phaseJieshuBegin',
							},
							audio: 'ext:英雄外传/audio:2',

							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player.judge(function (card) {
									return get.color(card) == 'red' ? 1 : -1;
								}).judge2 = function (result) {
									return result.bool;
								};
								('step 2');
								if (result.bool) {
									player.chooseUseTarget({ name: 'dongzhuxianji' }, true);
								} else {
									event.finish();
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'recover') && target.hp == target.maxHp - 1) return [0, 0];
										if (target.hasFriend()) {
											if ((get.tag(card, 'damage') == 1 || get.tag(card, 'loseHp')) && target.hp == target.maxHp) return [0, 1];
										}
									},
								},
								threaten(player, target) {
									if (target.hp == 1) return 3;
									if (target.hp == 2) return 2;
									return 1;
								},
							},
						},
						//阿市11
						yxsxiner: {
							mod: {
								ignoredHandcard(card, player) {
									if (get.color(card) == 'red') {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && get.color(card) == 'red') return false;
								},
							},
							enable: 'phaseUse',
							usable: 1,
							audio: 'ext:英雄外传/audio:2',
							discard: false,
							filterCard(card) {
								return card.suit == 'heart';
							},
							filter(event, player) {
								return player.countCards('h', { suit: 'heart' });
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							check(card) {
								return 4.5 - get.value(card);
							},
							content() {
								'step 0';
								target.gain(cards, 'gain2');
								('step 1');
								var suits = ['spade', 'heart', 'diamond', 'club'];
								var cardsx = target.getCards('h', { suit: ['spade', 'diamond', 'club'] });
								if (cardsx) {
									player.gain(cardsx, target, 'giveAuto');
								}
								('step 2');
								if (event.gained >= 3) player.loseHp();
								target.loseHp();
								player.turnOver();
							},
							ai: {
								expose: 0.2,
								result: {
									player(player, target) {
										var nm = player.maxHp - player.countCards('h');
										if (nm <= 0) return -10;
										return 0;
									},
									target(player, target) {
										var hs = target.countCards('h');
										if (hs > 2) return -1;
										if (hs == 2) return -0.5;
										return 0;
									},
								},
								order: 0.5,
							},
						},
						yxsfuye: {
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							audio: 'ext:英雄外传/audio:2',
							filter(event, player) {
								return event.source && event.source != player;
							},
							content() {
								'step 0';
								trigger.source
									.chooseCard('确定:交给其一张♥️️牌你翻面;取消:弃置所有手牌,令其翻面.', function (card) {
										return card.suit == 'heart';
									})
									.set('ai', function (card) {
										if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
											return 11 - get.value(card);
										} else {
											return 7 - get.value(card);
										}
									});
								('step 1');
								if (result.bool) {
									player.gain(result.cards, 'giveAuto', trigger.source);
									trigger.source.turnOver();
								} else {
									trigger.source.discard(trigger.source.getCards('he'));
									player.turnOver();
								}
							},
						},
						//恩津加11
						yxsheiya: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								//global:'gameDrawAfter',
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							filter(event, player) {
								return game.players.length > 1;
							},
							content() {
								'step 0';
								//target.removeAdditionalSkill('yxsheiya2');
								'step 1';
								player
									.chooseTarget('选择【奴】的目标', lib.translate.yxsheiya_info, true, function (card, player, target) {
										return (target = player && !target.hasSkill('yxsheiya2'));
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att < 0) return -att + 3;
										return Math.random();
									});
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									game.log(target, '成为了', '【奴】', '的目标');
									target.storage.yxsheiya2 = player;
									target.addTempSkill('yxsheiya2', { player: 'phaseZhunbeiBegin' }); //,{player:'phaseZhunbeiBegin'}
								}
							},
							ai: {
								order: 1,
								result: {
									target: 1,
								},
							},
						},
						yxsheiya2: {
							audio: 'ext:英雄外传/audio:2',
							intro: {
								content: '当你受到伤害后,你与$摸一张牌',
							},
							nopop: true,
							forced: true,
							popup: false,
							mod: {
								globalTo(from, to, distance) {
									return distance + 1;
								},
							},
							trigger: {
								player: 'damageAfter',
							},
							filter(event, player) {
								if (player.storage.yxsheiya2 && player.storage.yxsheiya2.isIn()) {
									if (event.name == 'damage') return event.source !== player.storage.yxsheiya2;
									return true;
								}
							},
							content() {
								'step 0';
								var target = player.storage.yxsheiya2;
								target.draw();
								player.draw();
							},
						},

						yxsfannv: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { global: 'shaBegin' },
							direct: false,
							usable: 99,
							filter(event, player) {
								return (
									event.player != player &&
									event.target != player &&
									event.target.isIn() &&
									event.target.storage.yxsheiya2 &&
									player.hasCard(function (card) {
										return player.canUse(card, event.target, false) && !get.info(card).multitarget;
									})
								);
							},
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								var next = player.chooseToUse(get.prompt('yxsfannv'), trigger.player, -1).set('targetRequired', true);
								next.prompt2 = `对${get.translation(trigger.player)}摸2张牌,使用一张牌`;
								next.filterCard = function (card) {
									return player.canUse(card, trigger.player, false) && !get.info(card).multitarget;
								};
								next.oncard = function () {
									player.draw(0);
								};
							},
						},
						//开膛手杰克11
						yxswuying: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yxswuying1', 'yxswuying2'],
						},
						yxswuying1: {
							round: 1,
							audio: 'ext:英雄外传/audio:2',
							direct: false,
							trigger: {
								global: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return !player.isTurnedOver();
							},
							content() {
								player.loseMaxHp();
								('step 1');
								trigger.player.skip('phaseUse');
								('step 2');
								player.turnOver();
							},
						},
						yxswuying2: {
							//audio:2,
							trigger: { player: 'damageBefore' },
							filter(event, player) {
								return event.num > 0 && event.source && event.player.isTurnedOver();
							},
							forced: true,
							content() {
								//trigger.cancel();
								trigger.num--;
							},
						},
						yansha: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yansha1', 'yansha2', 'yansha5'],
						},
						yansha1: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'turnOverEnd' },
							content() {
								var chat = ['恐惧将会弥漫整个伦敦...', '我憎恨妓女!', '你们看不见我,但我一直都在你们身边'].randomGet();
								player.say(chat);
								('step 1');
								player.chooseUseTarget('视为使用一张【刺杀】', { name: 'sha', nature: 'cisha' }, false, 'nodistance');
								('step 2');
								if (player.hp == 1) {
									player.chooseUseTarget('视为使用一张【过河拆桥】', { name: 'guohe' }, false);
									game.playAudio('../extension/英雄外传/audio/yansha3.mp3');
								}
							},
						},
						yansha2: {
							trigger: {
								source: 'damageBegin4',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							forced: true,
							audio: 'ext:英雄外传/audio:2',
							check() {
								return false;
							},
							content() {
								trigger.cancel();
								trigger.player.loseHp(trigger.num);
							},
						},
						yansha5: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								source: 'damageBegin1',
							},
							forced: true,
							filter(event, player) {
								return event.player.sex !== 'male';
							},
							content() {
								trigger.num++;
							},
						},
						//何太后
						yxszhendu: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { global: 'phaseUseBegin' },
							filter(event, player) {
								return event.player.isAlive() && player.countCards('h') > 0 && player.countMark('yywucan00902') < 2;
							},
							forced: true,
							preHidden: true,
							content() {
								'step 0';
								var nono = Math.abs(get.attitude(player, trigger.player)) < 3;
								if (player == trigger.player || get.damageEffect(trigger.player, player, player) <= 0 || !trigger.player.hasUseTarget({ name: 'jiu' }, null, true)) {
									nono = true;
								} else if (trigger.player.hp > 2) {
									nono = true;
								} else if (trigger.player.hp > 1 && player.countCards('h') < 3 && trigger.player.canUse('sha', player) && !player.countCards('h', 'shan') && trigger.player.countCards('h') >= 3) {
									nono = true;
								}
								var next = player.chooseToDiscard(get.prompt2('yxszhendu', trigger.player));
								next.set('ai', function (card) {
									if (_status.event.nono) return -1;
									return 7 - get.useful(card);
								});
								next.set('nono', nono);
								next.setHiddenSkill('yxszhendu');
								('step 1');
								if (result.bool) {
									trigger.player.chooseUseTarget({ name: 'jiu' }, true, 'noTargetDelay', 'nodelayx');
								} else {
									event.finish();
								}
								('step 2');
								var chat = ['在我哥哥回来前,好好取悦吧', '舔的好~有奖励哦~'].randomGet();
								player.say(chat);
								if (result.bool && trigger.player != player) {
									player.addMark('yywucan00902', 3);
									var list = [];
									if (player.storage.yywucan00902 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth1.jpg');
									}
									if (player.storage.yywucan00902 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth2.jpg');
									}
									if (player.storage.yywucan00902 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth3.jpg');
									}
									if (player.storage.yywucan00902 > 3) {
										player.removeMark('yywucan00902', 1);
									}
									trigger.player.damage(3);
								}
								('step 3');
								if (result.bool && trigger.player == player) {
									player.recover();
									player.draw();
								}
							},
							ai: {
								threaten: 2,
								expose: 0.3,
							},
						},
						yxsqiluan: {
							audio: 'ext:英雄外传/audio:2',
							preHidden: true,
							trigger: { global: 'phaseEnd' },
							forced: true,
							filter(event, player) {
								return game.hasPlayer2(function (current) {
									return current.getStat('kill') > 0;
								});
							},
							prompt(event, player) {
								var num = game.countPlayer2(function (current) {
									return (current.getStat('kill') || 0) * (current == player ? 3 : 1);
								});
								return get.prompt('yxsqiluan') + `(可摸${get.cnNumber(num)}张牌)`;
							},
							content() {
								//if(get.mode()=='guozhan'){
								//	player.draw(3);
								//}
								//else{
								player.draw(
									game.countPlayer2(function (current) {
										return (current.getStat('kill') || 0) * (current == player ? 3 : 1);
									}),
								);
								var chat = ['你根本满足不了我~', '只有这点能耐吗？'].randomGet();
								player.say(chat);
								player.removeMark('yywucan00902', 1);
								var list = [];
								if (player.storage.yywucan00902 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_hth.jpg');
								}
								if (player.storage.yywucan00902 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth1.jpg');
								}
								if (player.storage.yywucan00902 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth2.jpg');
								}
								if (player.storage.yywucan00902 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth3.jpg');
								}
								//}
							},
							subSkill: {
								draw: {
									trigger: { global: 'dying' },
									forced: true,
									filter(event, player) {
										return player != event.source;
									},
									content() {
										player.draw();
									},
								},
							},
						},
						yxsqiluan2: {
							audio: 'ext:英雄外传/audio:2',
						},
						yywucan0090: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00901', 'yynvde0090'],
						},
						yywucan00901: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								var chat = ['在我哥哥回来前,好好取悦吧', '舔的好~有奖励哦~'].randomGet();
								player.say(chat);
								player.addMark('yywucan00902');
								('step 1');
								var list = [];
								if (player.storage.yywucan00902 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth1.jpg');
								}
								if (player.storage.yywucan00902 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth2.jpg');
								}
								if (player.storage.yywucan00902 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth3.jpg');
								}
								if (player.storage.yywucan00902 > 3) {
									player.removeMark('yywucan00902', 1);
								}
							},
						},
						yynvde0090: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00902');
								('step 1');
								var list = [];
								if (player.storage.yywucan00902 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_hth.jpg');
								}
								if (player.storage.yywucan00902 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth1.jpg');
								}
								if (player.storage.yywucan00902 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth2.jpg');
								}
								if (player.storage.yywucan00902 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/hth3.jpg');
								}
							},
						},
						yywucan00902: {
							//marktext:'无惨',
							mark: false,
						},
						//灵雎
						yxsfenxin: {
							mode: ['identity'],
							trigger: { global: 'dieBefore' },
							init(player) {
								player.storage.yxsfenxin = false;
							},
							intro: {
								content: 'limited',
							},
							//unique:true,
							//limited:true,
							audio: 'ext:英雄外传/audio:2',
							//mark:true,
							filter(event, player) {
								if (player.storage.yxsfenxin) return false;
								return event.player.identity != '' && player.identity != '' && player.identity != '' && event.player.identity != '';
							},
							check(event, player) {
								if (player.identity == event.player.identity) return Math.random() < 0.5;
								var stat = get.situation();
								switch (player.identity) {
									case 'fan':
										if (stat < 0) return false;
										if (stat == 0) return Math.random() < 0.6;
										return true;
									case 'zhong':
										if (stat > 0) return false;
										if (stat == 0) return Math.random() < 0.6;
										return true;
									case 'nei':
										if (event.player.identity == 'fan' && stat < 0) return true;
										if (event.player.identity == 'zhong' && stat > 0) return true;
										if (stat == 0) return Math.random() < 0.7;
										return false;
								}
							},
							prompt(event, player) {
								return `焚心:是否与${get.translation(event.player)}交换身份？`;
							},
							content() {
								game.broadcastAll(
									function (player, target, shown) {
										var identity = player.identity;
										player.identity = target.identity;
										if (shown || player == game.me) {
											player.setIdentity();
										}
										target.identity = identity;
									},
									player,
									trigger.player,
									trigger.player.identityShown,
								);
								player.line(trigger.player, 'green');
								//player.storage.yxsfenxin=true;
								player.removeSkill('lihun');
								player.addSkill('lihun');
								player.removeSkill('yxsshenqu');
								player.addSkill('yxsshenqu');
								player.gainMaxHp(2);
								var chat = ['我脱衣是为了生存', '这一切都是为了复仇!'].randomGet();
								player.say(chat);
								player.removeMark('yywucan00912', 99);
								var list = [];
								if (player.storage.yywucan00912 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_lbb.jpg');
								}
								if (player.storage.yywucan00912 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb1.jpg');
								}
								if (player.storage.yywucan00912 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb2.jpg');
								}
								if (player.storage.yywucan00912 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb3.jpg');
								}
							},
						},
						yxsjieyuan: {
							group: ['yxsjieyuan_more', 'yxsjieyuan_less'],
							subSkill: {
								more: {
									audio: true,
									trigger: { source: 'damageBegin1' },
									forced: true,
									filter(event, player) {
										if (
											!player.countCards(player.hasSkill('yxsfenxin') ? 'he' : 'h', function (card) {
												if (player.hasSkill('yxsfenxin') || (_status.connectMode && get.position(card) == 'h')) return true;
												return get.color(card) == 'black';
											})
										)
											return false;
										return (event.player.hp >= player.hp || player.hasSkill('yxsfenxin')) && player != event.player;
									},
									content() {
										'step 0';
										var goon = get.attitude(player, trigger.player) < 0;
										var next = player.chooseToDiscard(get.prompt('yxsjieyuan', trigger.player), player.hasSkill('yxsfenxin') ? 'he' : 'h');
										if (!player.hasSkill('yxsfenxin')) {
											next.set('filterCard', function (card) {
												return get.color(card) == 'black';
											});
											next.set('prompt2', '弃置一张黑色手牌令伤害+1');
										} else {
											next.set('prompt2', '弃置一张牌令伤害+1');
										}
										next.set('ai', function (card) {
											if (_status.event.goon) {
												return 8 - get.value(card);
											}
											return 0;
										});
										next.set('goon', goon);
										('step 1');
										if (result.bool) {
											trigger.num++;
											player.say('死在我的裙下吧!');
											player.addMark('yywucan00912');
											var list = [];
											if (player.storage.yywucan00912 == 1) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb1.jpg');
											}
											if (player.storage.yywucan00912 == 2) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb2.jpg');
											}
											if (player.storage.yywucan00912 == 3) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb3.jpg');
											}
											if (player.storage.yywucan00912 > 3) {
												player.removeMark('yywucan00912', 1);
											}
										}
									},
								},
								less: {
									audio: true,
									trigger: { player: 'damageBegin2' },
									filter(event, player) {
										if (
											!player.countCards(player.hasSkill('yxsfenxin') ? 'he' : 'h', function (card) {
												if (player.hasSkill('yxsfenxin') || (_status.connectMode && get.position(card) == 'h')) return true;
												return get.color(card) == 'red';
											})
										)
											return false;
										return event.source && (event.source.hp >= player.hp || player.hasSkill('yxsfenxin')) && player != event.source;
									},
									forced: true,
									content() {
										'step 0';
										var next = player.chooseToDiscard(get.prompt('yxsjieyuan'), player.hasSkill('yxsfenxin') ? 'he' : 'h');
										if (!player.hasSkill('yxsfenxin')) {
											next.set('filterCard', function (card) {
												return get.color(card) == 'red';
											});
											next.set('prompt2', '弃置一张红色手牌令伤害-1');
										} else {
											next.set('prompt2', '弃置一张牌令伤害-1');
										}
										next.set('ai', function (card) {
											var player = _status.event.player;
											if (player.hp == 1 || _status.event.getTrigger().num > 1) {
												return 9 - get.value(card);
											}
											if (player.hp == 2) {
												return 8 - get.value(card);
											}
											return 7 - get.value(card);
										});
										('step 1');
										if (result.bool) {
											trigger.num--;
											player.say('为了复仇~失身又如何...');
											player.removeMark('yywucan00912');
											var list = [];
											if (player.storage.yywucan00912 == 0) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_lbb.jpg');
											}
											if (player.storage.yywucan00912 == 1) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb1.jpg');
											}
											if (player.storage.yywucan00912 == 2) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb2.jpg');
											}
											if (player.storage.yywucan00912 == 3) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb3.jpg');
											}
										}
									},
								},
							},
							ai: {
								expose: 0.2,
								threaten: 1.5,
							},
						},
						yywucan0091: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00911', 'yynvde0091'],
						},
						yywucan00911: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								player.addMark('yywucan00912');
								('step 1');
								var list = [];
								if (player.storage.yywucan00912 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb1.jpg');
								}
								if (player.storage.yywucan00912 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb2.jpg');
								}
								if (player.storage.yywucan00912 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb3.jpg');
								}
								if (player.storage.yywucan00912 > 3) {
									player.removeMark('yywucan00912', 1);
								}
							},
						},
						yynvde0091: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00912');
								('step 1');
								var list = [];
								if (player.storage.yywucan00912 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_lbb.jpg');
								}
								if (player.storage.yywucan00912 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb1.jpg');
								}
								if (player.storage.yywucan00912 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb2.jpg');
								}
								if (player.storage.yywucan00912 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/lbb3.jpg');
								}
							},
						},
						yywucan00912: {
							//marktext:'无惨',
							mark: false,
						},
						//祝融
						yxsjuxiang: {
							//unique:true,
							audio: 'yxsjuxiang1',
							group: ['yxsjuxiang1', 'yxsjuxiang2'],
							preHidden: ['yxsjuxiang1', 'yxsjuxiang2'],
						},
						yxsjuxiang1: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { target: 'useCardToBefore' },
							forced: true,
							_priority: 15,
							filter(event, player) {
								return event.card.name == 'nanman';
							},
							content() {
								trigger.cancel();
							},
						},
						yxsjuxiang2: {
							audio: 'juxiang1',
							trigger: { global: 'useCardAfter' },
							filter(event, player) {
								return event.card.name == 'nanman' && event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
							},
							content() {
								var chat = ['再猛烈些~再深一点~', '你的大象可真厉害呀!~'].randomGet();
								player.say(chat);
								player.addMark('yywucan00922');
								var list = [];
								if (player.storage.yywucan00922 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr1.jpg');
								}
								if (player.storage.yywucan00922 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr2.jpg');
								}
								if (player.storage.yywucan00922 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr3.jpg');
								}
								if (player.storage.yywucan00922 > 3) {
									player.removeMark('yywucan00922', 1);
								}
								player.gain(trigger.cards, 'gain2');
								player.chooseUseTarget('视为使用一张【南蛮入侵】', { name: 'nanman' }, false);
							},
						},
						yxslieren: {
							shaRelated: true,
							audio: 'ext:英雄外传/audio:2',
							trigger: { source: 'damageSource' },
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.card && event.card.name == 'sha' && event.parent.name == 'sha' && event.player.isAlive() && player.canCompare(event.player);
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0 && player.countCards('h') > 1;
							},
							//_priority:5,
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								player.say('尝尝我飞穴的厉害~');
								player.addMark('yywucan00922');
								var list = [];
								if (player.storage.yywucan00922 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr1.jpg');
								}
								if (player.storage.yywucan00922 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr2.jpg');
								}
								if (player.storage.yywucan00922 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr3.jpg');
								}
								if (player.storage.yywucan00922 > 3) {
									player.removeMark('yywucan00922', 1);
								}
								('step 1');
								if (result.bool) {
									trigger.player.die();
									player.say('没吃饭嘛？臭弟弟!');
									player.removeMark('yywucan00922');
									var list = [];
									if (player.storage.yywucan00922 == 0) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_zr.jpg');
									}
									if (player.storage.yywucan00922 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr1.jpg');
									}
									if (player.storage.yywucan00922 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr2.jpg');
									}
									if (player.storage.yywucan00922 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr3.jpg');
									}
								} else {
									var evt = _status.event.getParent('phase');
									if (evt && evt.name) {
										evt.finish();
									}
									var num = player.hp - 1;
									player.loseHp(num);
									var chat = ['好疼!大王救我!', '是我输了..要脱要..随你'].randomGet();
									player.say(chat);
									player.removeMark('yywucan00922', 99);
									player.addMark('yywucan00922', 3);
									var list = [];
									if (player.storage.yywucan00922 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr1.jpg');
									}
									if (player.storage.yywucan00922 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr2.jpg');
									}
									if (player.storage.yywucan00922 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr3.jpg');
									}
									if (player.storage.yywucan00922 > 3) {
										player.removeMark('yywucan00922', 1);
									}
								}
							},
						},
						yxschangbiao: {
							audio: 'ext:英雄外传/audio:2',
							mod: {
								targetInRange(card, player, target) {
									if (card.yxschangbiao) return true;
								},
							},
							enable: 'phaseUse',
							usable: 2,
							position: 'hs',
							viewAs: {
								name: 'sha',
								yxschangbiao: true,
							},
							filter(event, player) {
								return player.countCards('hs') > 0;
							},
							filterCard: true,
							selectCard: [1, Infinity],
							position: 'hs',
							check(card) {
								var player = _status.event.player;
								if (ui.selected.cards.length) {
									var list = game
										.filterPlayer(function (current) {
											return current != player && player.canUse('sha', current, false) && get.effect(current, { name: 'sha' }, player, player) > 0;
										})
										.sort(function (a, b) {
											return get.effect(b, { name: 'sha' }, player, player) - get.effect(a, { name: 'sha' }, player, player);
										});
									if (!list.length) return 0;
									var target = list[0];
									if (
										target.mayHaveShan() &&
										!player.hasSkillTag(
											'directHit_ai',
											true,
											{
												target: target,
												card: card,
											},
											true,
										)
									)
										return 0;
									return 6.5 - get.value(card);
								}
								return 6.3 - get.value(card);
							},
							onuse(result, player) {
								player.addTempSkill('yxschangbiao_draw');
							},
							subSkill: {
								draw: {
									trigger: { player: 'phaseUseEnd' },
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player.getHistory('sourceDamage', function (evxt) {
											var evt = evxt.parent;
											return evt && evt.name == 'sha' && evt.skill == 'yxschangbiao' && evt.getParent('phaseUse') == event;
										}).length;
									},
									content() {
										var num = 0;
										player.getHistory('sourceDamage', function (evxt) {
											var evt = evxt.parent;
											if (evt && evt.name == 'sha' && evt.skill == 'yxschangbiao' && evt.getParent('phaseUse') == trigger) num += evt.cards.length;
										});
										player.draw(num);
									},
								},
							},
							ai: {
								order(item, player) {
									return (
										get.order({ name: 'sha' }, player) +
										0.3 *
										(Math.min(
											player.getCardUsable('sha'),
											player.countCards('hs', 'sha') +
												player.hasCard(function (card) {
													return card.name != 'sha' && get.value(card, player) < 6.3;
												}, 'hs')
												? 1
												: 0,
										) > 1
											? -1
											: 1)
									);
								},
							},
						},
						yywucan0092: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00921', 'yynvde0092'],
						},
						yywucan00921: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								player.addMark('yywucan00922');
								('step 1');
								var list = [];
								if (player.storage.yywucan00922 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr1.jpg');
								}
								if (player.storage.yywucan00922 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr2.jpg');
								}
								if (player.storage.yywucan00922 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr3.jpg');
								}
								if (player.storage.yywucan00922 > 3) {
									player.removeMark('yywucan00922', 1);
								}
							},
						},
						yynvde0092: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00922');
								('step 1');
								var list = [];
								if (player.storage.yywucan00922 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_zr.jpg');
								}
								if (player.storage.yywucan00922 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr1.jpg');
								}
								if (player.storage.yywucan00922 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr2.jpg');
								}
								if (player.storage.yywucan00922 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zr3.jpg');
								}
							},
						},
						yywucan00922: {
							//marktext:'无惨',
							mark: false,
						},
						//曹婴
						yxslingren: {
							usable: 1,
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'useCardToPlayered',
							},
							forced: true,
							filter(event, player) {
								if (event.parent.triggeredTargets3.length > 1) return false;
								if (!player.isPhaseUsing()) return false;
								if (!['basic', 'trick'].includes(get.type(event.card))) return false;
								if (get.tag(event.card, 'damage')) return true;
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('yxslingren'), '选择一名目标角色并猜测其手牌构成', function (card, player, target) {
										return _status.event.targets.includes(target);
									})
									.set('ai', function (target) {
										return 2 - get.attitude(_status.event.player, target);
									})
									.set('targets', trigger.targets);
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									event.target = target;
									event.choice = {
										basic: false,
										trick: false,
										equip: false,
									};
									player.chooseBool('是否押基本牌？').ai = function (event, player) {
										var rand = 0.95;
										if (!target.countCards('h', { type: ['basic'] })) rand = 0.05;
										if (!target.countCards('h')) rand = 0;
										return Math.random() < rand ? true : false;
									};
								} else {
									player.getStat('triggerSkill').yxslingren--;
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.choice.basic = true;
								}
								player.chooseBool('是否押锦囊牌？').ai = function (event, player) {
									var rand = 0.9;
									if (!target.countCards('h', { type: ['trick', 'delay'] })) rand = 0.1;
									if (!target.countCards('h')) rand = 0;
									return Math.random() < rand ? true : false;
								};
								('step 3');
								if (result.bool) {
									event.choice.trick = true;
								}
								player.chooseBool('是否押装备牌？').ai = function (event, player) {
									var rand = 0.75;
									if (!target.countCards('h', { type: ['equip'] })) rand = 0.25;
									if (!target.countCards('h')) rand = 0;
									return Math.random() < rand ? true : false;
								};
								('step 4');
								if (result.bool) {
									event.choice.equip = true;
								}
								var reality = {
									basic: false,
									trick: false,
									equip: false,
								};
								var he = target.getCards('h');
								for (var i = 0; i < he.length; i++) {
									reality[get.type(he[i], 'trick')] = true;
								}
								event.num = 0;
								var tl = ['basic', 'trick', 'equip'];
								for (var i = 0; i < tl.length; i++) {
									if (event.choice[tl[i]] == reality[tl[i]]) event.num++;
								}
								('step 5');
								player.popup(`猜对${get.cnNumber(event.num)}项`);
								game.log(player, `猜对了${get.cnNumber(event.num)}项`);
								if (event.num > 0) {
									trigger.parent.baseDamage++;
									player.draw(2);
									var chat = ['痛~并快乐着~', '痛~并快乐着~'].randomGet();
									player.say(chat);
									player.addMark('yywucan00952');
									var list = [];
									if (player.storage.yywucan00952 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy1.jpg');
									}
									if (player.storage.yywucan00952 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy2.jpg');
										game.playAudio('../extension/英雄外传/audio/wu2.mp3');
									}
									if (player.storage.yywucan00952 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy3.jpg');
										game.playAudio('../extension/英雄外传/audio/wu3.mp3');
									}
									if (player.storage.yywucan00952 > 3) {
										player.removeMark('yywucan00952', 1);
									}
								}
								if (event.num > 1) {
									player.addTempSkill('yxsguixin', { player: 'phaseBegin' });
									player.addTempSkill('yxskaikang', { player: 'phaseBegin' });
									player.say('我这一屁股坐下去,你可能会爽死哟~');
									player.addMark('yywucan00952');
									var list = [];
									if (player.storage.yywucan00952 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy1.jpg');
									}
									if (player.storage.yywucan00952 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy2.jpg');
										game.playAudio('../extension/英雄外传/audio/wu2.mp3');
									}
									if (player.storage.yywucan00952 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy3.jpg');
										game.playAudio('../extension/英雄外传/audio/wu3.mp3');
									}
									if (player.storage.yywucan00952 > 3) {
										player.removeMark('yywucan00952', 1);
									}
								}
								if (event.num > 2) {
									player.addTempSkill('yxslingren_chuanxin');
									player.say('哥哥你可真弱~这就被榨干了嘛~？');
									player.addMark('yywucan00952');
									var list = [];
									if (player.storage.yywucan00952 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy1.jpg');
									}
									if (player.storage.yywucan00952 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy2.jpg');
										game.playAudio('../extension/英雄外传/audio/wu2.mp3');
									}
									if (player.storage.yywucan00952 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy3.jpg');
										game.playAudio('../extension/英雄外传/audio/wu3.mp3');
									}
									if (player.storage.yywucan00952 > 3) {
										player.removeMark('yywucan00952', 1);
									}
								}
							},
							ai: {
								threaten: 2.4,
							},
						},
						yxsguixin: {
							audio: 'ext:英雄外传/audio:2',
							// alter:true,
							trigger: { player: 'damageEnd' },
							check(event, player) {
								if (player.isTurnedOver() || event.num > 1) return true;
								var num = game.countPlayer(function (current) {
									if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
										return true;
									}
									if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
										return true;
									}
								});
								return num >= 2;
							},
							content() {
								'step 0';
								var targets = game.filterPlayer();
								targets.remove(player);
								targets.sort(lib.sort.seat);
								event.targets = targets;
								event.count = Math.min(trigger.num, 9);
								('step 1');
								event.num = 0;
								player.line(targets, 'green');
								('step 2');
								if (num < event.targets.length) {
									if (!get.is.altered('yxsguixin')) {
										if (event.targets[num].countGainableCards(player, 'hej')) {
											player.gainPlayerCard(event.targets[num], true, 'hej');
										}
									} else {
										var hej = event.targets[num].getCards('hej');
										if (hej.length) {
											var card = hej.randomGet();
											player.gain(card, event.targets[num]);
											if (get.position(card) == 'h') {
												event.targets[num].$giveAuto(card, player);
											} else {
												event.targets[num].$give(card, player);
											}
										}
									}
									event.num++;
									event.redo();
								}
								('step 3');
								player.turnOver();
								('step 4');
								event.count--;
								if (event.count) {
									player.chooseBool(get.prompt2('yxsguixin'));
								} else {
									event.finish();
								}
								('step 5');
								if (event.count && result.bool) {
									event.goto(1);
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten(player, target) {
									if (target.hp == 1) return 2.5;
									return 1;
								},
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (target.hp == 1) return 0.8;
											if (target.isTurnedOver()) return [0, 3];
											var num = game.countPlayer(function (current) {
												if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
													return true;
												}
												if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
													return true;
												}
											});
											if (num > 2) return [0, 1];
											if (num == 2) return [0.5, 1];
										}
									},
								},
							},
						},
						yxskaikang: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { global: 'useCardToTargeted' },
							filter(event, player) {
								return event.card && event.card.name == 'sha' && get.distance(player, event.target) <= 1;
							},
							check(event, player) {
								return get.attitude(player, event.target) >= 0;
							},
							content() {
								'step 0';
								player.draw();
								if (trigger.target != player) {
									player.chooseCard(true, 'he', `交给${get.translation(trigger.target)}一张牌`).set('ai', function (card) {
										if (get.position(card) == 'e') return -1;
										if (card.name == 'shan') return 1;
										if (get.type(card) == 'equip') return 0.5;
										return 0;
									});
								} else {
									event.finish();
								}
								('step 1');
								trigger.target.gain(result.cards, player, 'give');
								event.card = result.cards[0];
								('step 2');
								if (trigger.target.getCards('h').includes(card) && get.type(card) == 'equip') {
									trigger.target.chooseUseTarget(card);
								}
							},
							ai: {
								threaten: 1.1,
							},
						},
						yxslingren_chuanxin: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { source: 'damageBegin2' },
							forced: true,
							preHidden: true,
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								if (!_status.event.getParent('phaseUse')) return false;
								if (event.card && event.parent.name == event.card.name) {
									if (get.mode() == 'guozhan') {
										return (event.player.identity != 'qun' || player.identity == 'ye') && !event.player.isUnseen() && event.player.hasViceCharacter();
									} else {
										var info = lib.character[event.player.name];
										if (!info) return false;
										var skills = event.player.getSkills();
										for (var i = 0; i < info[3].length; i++) {
											if (lib.skill[info[3][i]].fixed) continue;
											if (skills.includes(info[3][i])) return true;
										}
									}
								}
								return false;
							},
							logTarget: 'player',
							check(event, player) {
								if (get.mode() == 'guozhan') {
									if (!event.player.isUnseen(1) && get.guozhanRank(event.player.name2, event.player) < 4) return false;
								}
								if (event.player.hasSkill('subplayer')) return false;
								if (get.attitude(player, event.player) < 0) {
									if (event.player.hp == 1 && event.player.countCards('e') < 2 && event.player.name2 != 'gz_pangtong') return false;
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								if (get.mode() != 'guozhan') {
									var info = lib.character[trigger.player.name];
									var skills = trigger.player.getSkills();
									var list = [];
									for (var i = 0; i < info[3].length; i++) {
										if (lib.skill[info[3][i]].fixed) continue;
										if (skills.includes(info[3][i])) {
											list.push(info[3][i]);
										}
									}
									if (list.length) {
										var skill = list.randomGet();
										trigger.player.popup(skill);
										trigger.player.disableSkill('yxslingren_chuanxin_disable', skill, true);
									}
								} else {
									trigger.player.removeCharacter(1);
								}
							},
						},
						yxsfujian: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return !game.hasPlayer(function (current) {
									return current.countCards('h') == 0;
								});
							},
							forced: true,
							content() {
								player.say('哥哥~快脱下来~让我看看嘛~');
								player.removeMark('yywucan00952');
								var list = [];
								if (player.storage.yywucan00952 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_cy.jpg');
								}
								if (player.storage.yywucan00952 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy1.jpg');
								}
								if (player.storage.yywucan00952 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy2.jpg');
								}
								if (player.storage.yywucan00952 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy3.jpg');
								}
								event.num = 99;
								var list = game.filterPlayer(function (target) {
									if (target.isMaxHandcard()) event.num = target.countCards('h');
									return player != target;
								});
								if (event.num < 1) {
									event.finish();
								} else {
									var target = list.randomGet();
									var cards = target.getCards('h').randomGets(event.num);
									player.line(target);
									var content = [get.translation(target) + '的手牌', cards];
									game.log(player, '观看了', target, '的手牌');
									player.chooseControl('ok').set('dialog', content);
								}
							},
						},
						yywucan0095: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00951', 'yynvde0095'],
						},
						yywucan00951: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								player.addMark('yywucan00952');
								('step 1');
								var list = [];
								if (player.storage.yywucan00952 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan00952 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan00952 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan00952 > 3) {
									player.removeMark('yywucan00952', 1);
								}
							},
						},
						yynvde0095: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00952');
								('step 1');
								var list = [];
								if (player.storage.yywucan00952 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_cy.jpg');
								}
								if (player.storage.yywucan00952 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy1.jpg');
								}
								if (player.storage.yywucan00952 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy2.jpg');
								}
								if (player.storage.yywucan00952 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cycy3.jpg');
								}
							},
						},
						yywucan00952: {
							//marktext:'无惨',
							mark: false,
						},
						//蔡夫人
						yxsqieting: {
							audio: 3,
							trigger: { global: 'phaseEnd' },
							filter(event, player) {
								if (event.player == player || !event.player.isAlive()) return false;
								var history = event.player.getHistory('useCard');
								for (var i = 0; i < history.length; i++) {
									if (!history[i].targets) continue;
									for (var j = 0; j < history[i].targets.length; j++) {
										if (history[i].targets[j] != event.player) return true;
									}
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								var next;
								if (
									trigger.player.hasCard(function (card) {
										return true;
									}, 'he')
								) {
									next = player
										.chooseControl('获得牌', 'draw_card', 'cancel2', function (event, player) {
											var source = _status.event.sourcex;
											var att = get.attitude(player, source);
											if (source.hasSkillTag('noe')) {
												if (att > 0) {
													return '获得牌';
												}
											} else {
												if (
													att <= 0 &&
													source.countCards('e', function (card) {
														return get.value(card, source) > 0 && get.effect(player, card, player, player) > 0;
													})
												) {
													return '获得牌';
												}
											}
											return 'draw_card';
										})
										.set('sourcex', trigger.player);
								} else {
									next = player.chooseControl('draw_card', 'cancel2', function () {
										return 'draw_card';
									});
								}
								next.set('prompt', get.prompt('yxsqieting', trigger.player));
								('step 1');
								if (result.control == '获得牌') {
									player.say('躲在门后偷看的快感真美妙~');
									player.addMark('yywucan00962');
									var list = [];
									if (player.storage.yywucan00962 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai1.jpg');
									}
									if (player.storage.yywucan00962 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai2.jpg');
									}
									if (player.storage.yywucan00962 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai3.jpg');
									}
									if (player.storage.yywucan00962 == 4) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai4.jpg');
									}
									if (player.storage.yywucan00962 > 4) {
										player.removeMark('yywucan00962', 1);
									}
									var target = _status.currentPhase;
									player.gainPlayerCard(target, 'he', get.prompt('yxsqieting', target));
									player.chooseToUse();
								} else {
									if (result.control == 'draw_card') {
										player.say('啊~好棒~请再多给我看些!');
										player.removeMark('yywucan00962');
										var list = [];
										if (player.storage.yywucan00962 == 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_cfr.jpg');
										}
										if (player.storage.yywucan00962 == 1) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai1.jpg');
										}
										if (player.storage.yywucan00962 == 2) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai2.jpg');
										}
										if (player.storage.yywucan00962 == 3) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai3.jpg');
										}
										if (player.storage.yywucan00962 == 4) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai4.jpg');
										}
										player.draw();
									}
									event.finish();
								}
							},
							ai: {
								threaten: 3,
							},
						},
						yxsxianzhou: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							limited: true,
							filter(event, player) {
								return player.countCards('e') > 0;
							},
							filterCard: true,
							position: 'e',
							selectCard: -1,
							filterTarget: lib.filter.notMe,
							discard: false,
							lose: false,
							delay: false,
							content() {
								'step 0';
								var chat = ['想看嘛~？来~靠近点~!', '哎呀,别急嘛~我的一切都是你的..'].randomGet();
								player.say(chat);
								player.removeMark('yywucan00962', 99);
								player.addMark('yywucan00962', 3);
								var list = [];
								if (player.storage.yywucan00962 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai1.jpg');
								}
								if (player.storage.yywucan00962 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai2.jpg');
								}
								if (player.storage.yywucan00962 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai3.jpg');
								}
								if (player.storage.yywucan00962 == 4) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai4.jpg');
								}
								if (player.storage.yywucan00962 > 4) {
									player.removeMark('yywucan00962', 1);
								}
								player.awakenSkill('yxsxianzhou');
								target.gain(cards, player, 'give');
								player.addSkill('yxszongqi');
								player.recover(cards.length);
								player.draw(cards.length);
								('step 1');
								var list = game.filterPlayer(function (current) {
									return target.inRange(current);
								});
								if (list.length) {
									var max = Math.min(list.length, cards.length);
									target
										.chooseTarget(true, [1, max], `对至多${get.cnNumber(max)}名范围内的角色各造成1点伤害`, function (card, player, target) {
											return _status.event.list.includes(target);
										})
										.set('list', list)
										.set('ai', function (target) {
											var player = _status.event.player;
											return get.damageEffect(target, player, player);
										});
								} else event.finish();
								('step 2');
								if (result.bool) {
									var targets = result.targets.sortBySeat();
									player.line(targets, 'green');
									for (var i of targets) i.damage('nocard');
									//target.addSkill('yxsmenshen3');
									//player.addSkill('yxsmenshen2');
									//trigger.player.addSkill('yxsmenshen');
									//player.addSkill('yxsyinbi');
								}
							},
							ai: {
								order: 1,
								result: {
									target: 1,
									player(player) {
										var bool = true,
											players = game.filterPlayer();
										for (var i of players) {
											if (i != player && get.attitude(player, i) > 2 && get.attitude(i, player) > 2) {
												bool = false;
												break;
											}
										}
										if (bool) return -10;
										if (player.hp == 1) return 1;
										if (game.phaseNumber < game.players.length) return -10;
										if (player.countCards('e') + player.hp <= player.maxHp) return 1;
										return -10;
									},
								},
							},
						},
						yxszongqi: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { target: 'useCardToTargeted' },
							forced: true,
							filter(event, player) {
								return player != _status.currentPhase && player.countCards('h') >= player.getHandcardLimit() && (get.type(event.card) == 'delay' || (event.card.name == 'sha' && get.color(event.card) == 'black'));
							},
							content() {
								trigger.excluded.add(player);
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (target != _status.currentPhase && target.countCards('h') >= target.getHandcardLimit() && (get.type(card) == 'delay' || (event.card.name == 'sha' && get.color(event.card) == 'black'))) return 'zerotarget';
									},
								},
							},
						},
						yywucan0096: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00961', 'yynvde0096'],
							derivation: ['yxszongqi'],
						},
						yywucan00961: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								player.addMark('yywucan00962');
								('step 1');
								var list = [];
								if (player.storage.yywucan00962 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai1.jpg');
								}
								if (player.storage.yywucan00962 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai2.jpg');
								}
								if (player.storage.yywucan00962 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai3.jpg');
								}
								if (player.storage.yywucan00962 == 4) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai4.jpg');
								}
								if (player.storage.yywucan00962 > 4) {
									player.removeMark('yywucan00962', 1);
								}
							},
						},
						yynvde0096: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00962');
								('step 1');
								var list = [];
								if (player.storage.yywucan00962 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_cfr.jpg');
								}
								if (player.storage.yywucan00962 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai1.jpg');
								}
								if (player.storage.yywucan00962 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai2.jpg');
								}
								if (player.storage.yywucan00962 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai3.jpg');
								}
								if (player.storage.yywucan00962 == 4) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/cai4.jpg');
								}
							},
						},
						yywucan00962: {
							//marktext:'无惨',
							mark: false,
						},
						//杨艳
						yxsxuanbei: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								global: 'phaseBefore',
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return event.name != 'phase';
							},
							forced: true,
							content() {
								var cards = [];
								while (cards.length < 2) {
									var card = get.cardPile2(function (i) {
										return get.is.yingbian(i) && !cards.includes(i);
									});
									if (!card) break;
									else cards.push(card);
								}
								if (cards.length) player.gain(cards, 'gain2');
							},
							group: 'yxsxuanbei_give',
							subSkill: {
								give: {
									trigger: { player: 'useCardAfter' },
									usable: 2,
									filter(event, player) {
										return (event.card.yingbian || get.is.yingbian(event.card)) && event.cards.filterInD().length;
									},
									forced: true,
									content() {
										'step 0';
										event.cards = trigger.cards.filterInD();
										player.chooseTarget(get.prompt('yxsxuanbei'), '令一名其他角色获得' + get.translation(event.cards), lib.translate.yxsxuanbei_info).set('ai', function (target) {
											var att = get.attitude(_status.event.player, target);
											if (att < 3) return 0;
											if (target.hasJudge('lebu')) att /= 2;
											if (target.hasSkillTag('nogain')) att /= 10;
											return att / (1 + get.distance(player, target, 'absolute'));
										});
										('step 1');
										if (result.bool) {
											var target = result.targets[0];
											target.gain(cards, 'gain2');
											player.addMark('yywucan00972');
											var list = [];
											if (player.storage.yywucan00972 == 1) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy1.jpg');
											}
											if (player.storage.yywucan00972 == 2) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy2.jpg');
											}
											if (player.storage.yywucan00972 == 3) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy3.jpg');
											}
											if (player.storage.yywucan00972 == 4) {
												player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy4.jpg');
											}
											if (player.storage.yywucan00972 > 4) {
												player.removeMark('yywucan00972', 1);
											}
											var nm = player.hp;
											if (nm > 0) player.draw(nm);
										} else player.getStat('triggerSkill').yxsxuanbei_give--;
									},
									ai: { expose: 0.1 },
								},
							},
						},
						yxsxianwan: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseJieshuBegin' },
							forced: true,
							filter(event, player) {
								for (var i of game.players) {
									if (i.isDamaged()) {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								var num = game.countGroup();
								player
									.chooseTarget(get.prompt('yxsxianwan'), '令任意名已受伤的角色回复1点体力', [1, num], function (card, player, target) {
										return target.isDamaged();
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										result.targets[i].recover();
									}
									if (i >= 1) {
										player.removeMark('yywucan00972');
										var list = [];
										if (player.storage.yywucan00972 == 0) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_yy.jpg');
										}
										if (player.storage.yywucan00972 == 1) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy1.jpg');
										}
										if (player.storage.yywucan00972 == 2) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy2.jpg');
										}
										if (player.storage.yywucan00972 == 3) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy3.jpg');
										}
										if (player.storage.yywucan00972 == 4) {
											player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy4.jpg');
										}
									}
									if (i >= 2) {
										player.addTempSkill('maihuo', { player: 'phaseUseEnd' });
									}
								}
							},
							ai: {
								expose: 0.3,
								threaten: 1.3,
							},
						},
						yywucan0097: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00971', 'yynvde0097'],
						},
						yywucan00971: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								player.addMark('yywucan00972');
								('step 1');
								var list = [];
								if (player.storage.yywucan00972 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan00972 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan00972 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan00972 == 4) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy4.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan00972 > 4) {
									player.removeMark('yywucan00972', 1);
								}
							},
						},
						yynvde0097: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00972');
								('step 1');
								var list = [];
								if (player.storage.yywucan00972 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_yy.jpg');
								}
								if (player.storage.yywucan00972 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy1.jpg');
								}
								if (player.storage.yywucan00972 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy2.jpg');
								}
								if (player.storage.yywucan00972 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy3.jpg');
								}
								if (player.storage.yywucan00972 == 4) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yy4.jpg');
								}
							},
						},
						yywucan00972: {
							//marktext:'无惨',
							mark: false,
						},
						//诸葛果
						yxsqirang: {
							audio: 'ext:英雄外传/audio:2',
							usable: 2,
							filter(event, player, name) {
								//var numa=Math.random();
								//if(numa>=1) return false;
								if (get.type(event.card) == 'trick') return false;
								var history = player.getHistory('useCard', function (evt) {
									return get.type(event.card) == 'basic';
								});
								if (get.type(event.card) == 'basic') return history.length == 1 && history[0] == event;
								if (get.type(event.card) == 'equip') return true;
							},
							trigger: { player: ['useCard'] },
							content() {
								var i = 0;
								var list = [];
								var numb = [2, 3, 4].randomGet();
								while (i++ < numb) {
									var card = get.cardPile2(function (card) {
										if (get.type(card) != 'trick') return false;
										if (!list.includes(card)) return true;
									});
									if (card) list.push(card);
									else {
										var card = get.discardPile(function (card) {
											if (get.type(card) != 'trick') return false;
											if (!list.includes(card)) return true;
										});
										if (card) list.push(card);
									}
								}
								event.list = list;
								player.gain(event.list, 'gain2');
								if (_status.currentPhase != player) player.getStat().skill.jl_zgg_qirang++;
								player.addMark('yywucan00982');
								var list = [];
								if (player.storage.yywucan00982 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg1.jpg');
								}
								if (player.storage.yywucan00982 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg2.jpg');
								}
								if (player.storage.yywucan00982 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg3.jpg');
								}
								if (player.storage.yywucan00982 > 3) {
									player.removeMark('yywucan00982', 1);
								}
							},
						},
						count: {
							forced: true,
							popup: false,
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							trigger: { player: 'useCardAfter' },
							content() {
								player.getHistory('custom').push({ count: true });
							},
						},
						yxsyuhua: {
							audio: 'ext:英雄外传/audio:2',
							prompt2(event, player) {
								var numb = player.getHistory('custom', function (evt) {
									return evt.count == true;
								}).length;
								var numc;
								if (numb > 4) numc = numb;
								else numc = 4;
								return `观看牌堆顶${numc}张牌,并保留其中3张`;
							},
							trigger: { player: 'phaseJieshuBegin' },
							content() {
								'step 0';
								var numb = player.getHistory('custom', function (evt) {
									return evt.count == true;
								}).length;
								var numc;
								if (numb > 4) numc = numb;
								else numc = 4;
								event.list = [];
								event.cards = get.cards(numc);
								('step 1');
								player.chooseCardButton(3, true, event.cards, '请选择要保留的三张牌,若这三张牌花色均不同,你随机对与你阵营不同的一名其他角色造成1-2点伤害,你穿上1件衣服.').set('ai', function (button) {
									return 100 - get.value(button.link);
								});
								('step 2');
								if (result.bool) {
									event.list = result.links.slice(0);
									var list = event.list;
									player.gain(list, 'draw');
									for (var i = 0; i < list.length; i++) {
										event.cards.remove(list[i]);
									}
								}
								if (Array.isArray(event.cards))
									for (var i of event.cards) {
										ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
									}
								('step 3');
								var suita = event.list[0].suit;
								var suitb = event.list[1].suit;
								var suitc = event.list[2].suit;
								if (suita != suitb && suita != suitc && suitb != suitc) {
									player.chooseBool('是否随机对与你阵营不同的一名其他角色造成1-2点伤害');
									player.removeMark('yywucan00982');
									var list = [];
									if (player.storage.yywucan00982 == 0) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_zgg.jpg');
									}
									if (player.storage.yywucan00982 == 1) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg1.jpg');
									}
									if (player.storage.yywucan00982 == 2) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg2.jpg');
									}
									if (player.storage.yywucan00982 == 3) {
										player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg3.jpg');
									}
								} else event.finish();
								('step 4');
								if (result.bool) {
									var target = game
										.filterPlayer(function (current) {
											return player.getEnemies().includes(current) && current != player;
										})
										.randomGet();
									numd = [1, 2].randomGet();
									if (target) {
										player.line(target, 'fire');
										target.damage(numd, 'nocard');
									}
								}
							},
						},
						yxsliangyi: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { target: 'useCardToTarget' },
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								if (_status.currentPhase != player) return true;
							},
							content() {
								'step 0';
								player.judge(function (result) {
									if (get.color(result) == 'red') return 2;
									return -1;
								}).judge2 = function (result) {
									return result.bool;
								};
								('step 1');
								if (result.bool) {
									game.playAudio('../extension/英雄外传/audio/yxsliangyi1.mp3');
									trigger.targets.remove(player);
									trigger.parent.triggeredTargets2.remove(player);
									trigger.untrigger();
								}
							},
							ai: {
								effect: {
									target(card, player, target, current, isLink) {
										if (player.hp > 0) return 0.5;
									},
								},
							},
						},
						yywucan0098: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yywucan00981', 'yynvde0098'],
						},
						yywucan00981: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							popup: false,
							filter(event, player) {
								return event.num > 0 && event.source && event.source.sex == 'male';
							},
							content() {
								'step 0';
								player.addMark('yywucan00982');
								('step 1');
								var list = [];
								if (player.storage.yywucan00982 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg1.jpg');
									game.playAudio('../extension/英雄外传/audio/wu1.mp3');
								}
								if (player.storage.yywucan00982 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg2.jpg');
									game.playAudio('../extension/英雄外传/audio/wu2.mp3');
								}
								if (player.storage.yywucan00982 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg3.jpg');
									game.playAudio('../extension/英雄外传/audio/wu3.mp3');
								}
								if (player.storage.yywucan00982 > 3) {
									player.removeMark('yywucan00982', 1);
								}
							},
						},
						yynvde0098: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'recoverEnd' },
							forced: true,
							popup: false,
							content() {
								'step 0';
								player.removeMark('yywucan00982');
								('step 1');
								var list = [];
								if (player.storage.yywucan00982 == 0) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_zgg.jpg');
								}
								if (player.storage.yywucan00982 == 1) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg1.jpg');
								}
								if (player.storage.yywucan00982 == 2) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg2.jpg');
								}
								if (player.storage.yywucan00982 == 3) {
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zgg3.jpg');
								}
							},
						},
						yywucan00982: {
							//marktext:'无惨',
							mark: false,
						},
						//魅魔
						yxssaoyu: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'useCardToPlayer',
							},
							filter(event, player) {
								if (_status.currentPhase != player) return false;
								if (event.targets.length > 1 || event.target.sex == 'female' || event.target.hasSkill('yxsguitian')) return false;
								var card = event.card;
								if (get.color(card) == 'red' || get.type(card) == 'trick' || get.type(card) == 'delay') return true;
							},
							direct: false,
							content() {
								trigger.target.addMark('yxssaoyu2');
								trigger.target.addSkill('yxsmeixin');
							},
						},
						yxsmeixin: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							content() {
								'step 0';
								player.addMark('');
								('step 1');
								var list = [];
								if (player.storage.yxssaoyu2 == 1) {
									//player.node.avatar.setBackgroundImage('extension/英雄外传/image/myy1.jpg');
									player.chooseToDiscard('he', 1, true);
								}
								if (player.storage.yxssaoyu2 == 2) {
									player.chooseToDiscard('he', 1, true);
									player.loseHp();
								}
								if (player.storage.yxssaoyu2 >= 3) {
									player.removeSkill('yxsmeixin');
									player.addSkill('yxsmeixin2');
								}
							},
						},
						yxsmeixin2: {
							juexingji: true,
							trigger: {
								player: 'phaseJudgeBefore',
							},
							forced: true,
							//audio:2,
							filter(event, player) {
								return player.countMark('yxssaoyu2') >= 3;
							},
							content() {
								player.node.avatar.setBackgroundImage('extension/英雄外传/image/dog.jpg');
								//player.removeSkill('yxsmeixin2');
								player.awakenSkill('yxsmeixin2');
								player.clearSkills();
								player.removeMark('yxssaoyu2', 99);
								player.addSkill('yxsguitian2');
							},
						},
						yxssaoyu2: {
							marktext: '魅',
							mark: false,
							intro: {
								name2: '魅',
								content: '让我当你的狗吧~',
							},
						},
						yxsguitian: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								global: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return player != event.player && event.player.hasSkill('yxsguitian') && event.player.isAlive();
							},
							logTarget: 'player',
							content() {
								var targets = game.filterPlayer(function (current) {
									return current != player && current.hasSkill('yxssaoyu');
								});
								if (trigger.player.countCards('h') > 0) {
									trigger.player.give(trigger.player.getCards('h'), player);
								}
							},
						},
						yxsguitian2: {
							audio: 'ext:英雄外传/audio:2',
							mark: true,
							marktext: '舔狗',
							intro: {
								content: '出牌阶段开始时,将所有牌交给魅魔',
							},
							trigger: {
								player: 'phaseUseBefore',
							},
							forced: true,
							filter(event, player) {
								return (
									player.countCards('h') > 0 &&
									game.hasPlayer(function (current) {
										return current != player && current.hasSkill('yxssaoyu');
									})
								);
							},
							content() {
								'step 0';
								var chat = ['我是姐姐的狗~', '做人呢,就是要开心~'].randomGet();
								player.say(chat);
								var targets = game.filterPlayer(function (current) {
									return current != player && current.hasSkill('yxssaoyu');
								});
								if (targets.length == 1) {
									event.target = targets[0];
									trigger.player.give(trigger.player.getCards('h'), player);
									player.chooseCard('h', true, '请将所有手牌交给魅魔~', 99);
								} else
									player.chooseCardTarget({
										prompt: '舔狗:将所有手牌交给魅魔',
										filterCard: true,
										position: 'h',
										targets: targets,
										forced: true,
										filterTarget(card, player, target) {
											return _status.event.targets.includes(target);
										},
									});
								('step 1');
								if (result.bool) {
									if (!target) target = result.targets[0];
									player.line(target);
									target.gain(result.cards, player, 'giveAuto');
									//target.recover();
								}
							},
						},
						//图坦卡蒙
						//终结者出现
						bossstart: {
							trigger: { global: ['gameDrawAfter', 'zhuUpdate'] },
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current != player && current.identity != 'zhu';
								});
								if (list.length) {
									var target = list.randomGet();
									player.line(target);
									target.addMark('yxssangshi');
									if (target.sex == 'male') {
										target.init('yxs_zboss1');
									}
									if (target.sex == 'female') {
										target.init('yxs_zboss1');
									}
								}
								('step 1');
								game.broadcastAll(
									function (player, target, shown) {
										player.identity = 'nei';
										player.showIdentity();
									},
									player,
									trigger.player,
								);
							},
						},
						//换身份测试
						yxszaowang: {
							trigger: {
								player: 'enterGame',
								global: 'phaseBefore',
							},
							forced: true,
							filter(event, player) {
								if (player.hasMark('yxsyfd')) return false;
								return event.player.identity == 'zhu' && (event.name != 'phase' || game.phaseNumber == 0);
							},
							content() {
								'step 0';
								game.broadcastAll(
									function (player, target, shown) {
										var identity = player.identity;
										player.identity = target.identity;
										//target.setIdentity(identity);
										if (target.identity == 'fan') {
											game.fan = target;
										}
										if (target.identity == 'zhong' && target.identity == 'mingzhong') {
											game.zhong = target;
										}
										if (target.identity == 'nei') {
											game.nei = target;
										}
										player.identity = 'zhu';
										game.zhu = player;
										player.showIdentity();
										//event.trigger('zhuUpdate');
										player.update();
										//target.identityShown=false;
										target.setIdentity('cai');
									},
									player,
									trigger.player,
								);
								('step 1');
								player.addMark('yxsyfd');
								player.removeSkill('yxszaowang');
							},
						},
						yxsappear: {
							audio: 1,
							forced: true,
							direct: false,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							content() {
								'step 0';
								player.draw(0);
								('step 1');
								player.removeSkill('yxsappear');
							},
							ai: {
								threaten: 2.4,
							},
						},
						//计数标记
						yxsyfd: {
							marktext: '计数',
							mark: true,
						},
						//终结者技能
						yxssihai: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yxssihai1', 'yxssihai2'],
						},
						yxssihai1: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							forced: true,
							filter(event, player) {
								return !event.player.hasMark('yxssangshi');
							},
							content() {
								trigger.num++;
							},
						},
						yxssihai2: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.player.hasMark('yxssangshi');
							},
							content() {
								trigger.num--;
							},
						},
						//吃人标记
						chiren: {
							marktext: '死骸',
							mark: true,
							intro: {
								name2: '死骸',
								content: '已感染的人',
							},
						},
						yxskongnue: {
							audio: 'ext:英雄外传/audio:2',
							group: ['yxskongnue1', 'yxskongnue2', 'yxskongnue3'],
						},
						yxskongnue1: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { source: 'damageBegin2' },
							forced: true,
							filter(event, player) {
								return event.player.hasMark('yxssangshiboss');
							},
							content() {
								player.addMark('chiren');
							},
						},
						yxskongnue2: {
							mod: {
								cardUsable(card, player, num) {
									if (typeof player.storage.chiren == 'number' && card.name == 'sha') {
										return num + player.storage.chiren;
									}
								},
								globalFrom(from, to, distance) {
									if (typeof from.storage.chiren == 'number') {
										return distance - from.storage.chiren;
									}
								},
							},
						},
						yxskongnue3: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num + 1;
								},
								globalFrom(from, to, distance) {
									return distance - 1;
								},
							},
						},
						yxsezhou: {
							audio: 'ext:英雄外传/audio:2',
							forced: true,
							trigger: {
								player: 'phaseJieshuBegin',
							},

							check(event, player) {
								return event.player.identity != 'nei' && get.attitude(player, event.player) > 0;
							},
							init(player) {
								player.storage.yxsezhou = false;
							},
							intro: {
								content: 'limited',
							},
							content() {
								'step 0';
								player.storage.yxsezhou = true;
								//player.$skill('厄咒','fire','red','avatar');
								player
									.chooseTarget('选择【厄咒】的目标', lib.translate.yxsezhou_info, function (card, player, target) {
										return target != player && !target.hasSkill('yxsezhou2');
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								player.line(trigger.player, 'green');
								game.log(trigger.player, '成为了', '【厄咒】', '的目标');
								//player.storage.yxsezhou2=trigger.player;
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									game.log(target, '成为了', '【厄咒】', '的目标');
									player.storage.yxsezhou2 = target;
									player.addSkill('yxsezhou2');
									player.removeSkill('yxsezhou');
									target.addSkill('yxsefu');
								}
							},
						},
						yxsezhou3: {
							trigger: {
								global: 'dieAfter',
							},
							silent: true,
							filter(event, player) {
								return event.player == player.storage.yxsezhou2;
							},
							content() {
								player.removeSkill('yxsezhou2');
								if (!player.hasSkill('yxsezhou')) {
									player.addSkill('yxsezhou');
									game.log(player, '刷新了技能', '【厄咒】');
									player.update();
								}
							},
							forced: true,
							popup: false,
						},
						yxsezhou2: {
							intro: {
								content: '当你受到伤害后,$受到等量的伤害',
							},
							nopop: true,
							trigger: {
								player: 'damageAfter',
							},
							forced: true,
							popup: false,
							filter(event, player) {
								return player.storage.yxsezhou2 && player.storage.yxsezhou2.isIn() && event.num > 0;
							},
							content() {
								'step 0';
								'step 1';
								var target = player.storage.yxsezhou2;
								player.line(target, 'green');
								target[trigger.name](trigger.num);
							},
							group: 'yxsezhou3',
						},
						yxsefu: {
							marktext: '恶缚',
							mark: true,
							intro: {
								name2: '恶缚',
								content: '法老的诅咒...',
							},
						},
						yxszhaohun: {
							audio: 'ext:英雄外传/audio:2',
							forced: true,
							usable: 1,
							forced: true,
							enable: 'phaseUse',
							filter(event, player) {
								return game.dead.length;
							},
							check(event, player) {
								return true;
							},
							content() {
								'step 0';
								event.current = player.next;
								var list = [];
								for (var i = 0; i < game.dead.length; i++) {
									list.push(game.dead[i].name);
								}
								player.chooseButton(ui.create.dialog('选择一名已阵亡的角色令其复活', [list, 'character']), function (button) {
									for (var i = 0; i < game.dead.length && game.dead[i].name != button.link; i++);
									return get.attitude(_status.event.player, game.dead[i]) >= 0;
								});
								('step 1');
								if (result.bool) {
									player.loseMaxHp();
									player.$fullscreenpop('招魂', 'fire');
									player.$skill('招魂', 'fire', 'red', 'avatar');
									for (var i = 0; i < game.dead.length && game.dead[i].name != result.buttons[0].link; i++);
									var dead = game.dead[i];
									if (get.mode() == 'identity') {
										var myid = player.identity;
										if (player.identity == 'zhu') {
											myid = 'zhong';
										}
										dead.identity = myid;
										dead.setIdentity();
									}
									var nm = dead.maxHp - dead.countCards('h');
									dead.revive(dead.maxHp);
									dead.draw(nm);
									dead.addSkill('yxsyibian');
								}
							},
							ai: {
								basic: {
									useful() {
										var player = _status.event.player;
										for (var i = 0; i < game.dead.length; i++) {
											if (get.attitude(player, game.dead[i]) >= 0 && (!_status.ymhuanhundan || !_status.ymhuanhundan.includes(player))) return 7;
										}
										return 0;
									},
									value(card, player) {
										for (var i = 0; i < game.dead.length; i++) {
											if (get.attitude(player, game.dead[i]) >= 0 && (!_status.ymhuanhundan || !_status.ymhuanhundan.includes(player))) return 11;
										}
										return 0;
									},
								},
								order(card, player) {
									for (var i = 0; i < game.dead.length; i++) {
										if (get.attitude(player, game.dead[i]) >= 0 && (!_status.ymhuanhundan || !_status.ymhuanhundan.includes(player))) return 7;
									}
									return -10;
								},
								result: {
									player(player) {
										for (var i = 0; i < game.dead.length; i++) {
											if (get.attitude(player, game.dead[i]) >= 0 && (!_status.ymhuanhundan || !_status.ymhuanhundan.includes(player))) return 2;
										}
										return -10;
									},
								},
							},
						},
						//计数标记
						yxssangshi: {
							marktext: '计数',
							mark: true,
							intro: {
								name2: '计数',
								content: '法老的诅咒...',
							},
						},
						yxssangshiboss: {
							marktext: '计数',
							mark: true,
							intro: {
								name2: '计数',
								content: '法老的诅咒...',
							},
						},
						//丧尸
						yxsyibian: {
							trigger: {
								player: 'phaseJieshuBegin',
							},
							//skillAnimation:'epic',
							//animationColor:'fire',
							audio: 1,
							forced: true,
							content() {
								var chat = ['我的身体..怎么了？', '伤口..无法愈合', '好...好..痛苦..'].randomGet();
								player.say(chat);
								('step 0');
								var mgr = player.group;
								if (player.sex == 'male') {
									player.init('yxs_zombie');
									player.changeGroup(mgr);
									game.playAudio('../extension/英雄外传/audio/zombie1.mp3');
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zombie1.jpg');
									var num = player.maxHp - 2;
									player.loseMaxHp(num);
								}
								if (player.sex == 'female') {
									player.init('yxs_zombie2');
									player.changeGroup(mgr);
									game.playAudio('../extension/英雄外传/audio/zombie2.mp3');
									player.node.avatar.setBackgroundImage('extension/英雄外传/image/zombie2.jpg');
									var num = player.maxHp - 2;
									player.loseMaxHp(num);
								}
								('step 1');
								var path = 'extension/英雄外传/audio/bgm.mp3';
								ui.backgroundMusic.src = path;
								ui.backgroundMusic.addEventListener('ended', function () {
									ui.backgroundMusic.src = path;
								});
								('step 2');
								player.$skill('灾变降临', 'fire', 'red', 'avatar');
								('step 3');
								player.awakenSkill('yxsyibian');
								player.clearSkills();
								player.addSkill('yxsganran');
								//player.addSkill('yxsshihua');
								player.addMark('yxssangshi');
							},
						},
						yxsganran: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { source: 'damageBegin1' },
							filter(event, player) {
								if (!event.player.isIn()) return false;
								return event.player.hp <= 1 && !event.player.hasSkill('yxsmianyi');
							},
							forced: true,
							marktext: '已尸化',
							mark: true,
							intro: {
								name2: '已发生尸化',
								content: '你只是一具尸体',
							},
							content() {
								var target = trigger.player;
								var mgt = target.group;
								num = target.maxHp - 2;
								trigger.cancel();
								('step 1');
								//target.loseMaxHp(num);
								trigger.player.clearSkills();
								trigger.player.addMark('yxssangshi');
								('step 2');
								if (target.sex == 'male') {
									trigger.player.init('yxs_zombie');
									trigger.player.changeGroup(mgt);
									game.playAudio('../extension/英雄外传/audio/zombie1.mp3');
									trigger.player.node.avatar.setBackgroundImage('extension/英雄外传/image/zombie1.jpg');
									trigger.player.addSkill('yxsganran');
								}
								if (target.sex == 'female') {
									trigger.player.init('yxs_zombie2');
									trigger.player.changeGroup(mgt);
									game.playAudio('../extension/英雄外传/audio/zombie2.mp3');
									trigger.player.node.avatar.setBackgroundImage('extension/英雄外传/image/zombie2.jpg');
									trigger.player.addSkill('yxsganran');
								}
							},
						},
						yxsganranboss: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { source: 'damageBegin1' },
							filter(event, player) {
								if (!event.player.isIn()) return false;
								return event.player.hp <= 1 && !event.player.hasSkill('yxsmianyi');
							},
							forced: true,
							marktext: '已尸化',
							mark: true,
							intro: {
								name2: '已发生尸化',
								content: '你只是一具尸体',
							},
							content() {
								var target = trigger.player;
								var mgt = target.group;
								num = target.maxHp - 2;
								trigger.cancel();
								('step 1');
								//target.loseMaxHp(num);
								trigger.player.clearSkills();
								trigger.player.addMark('yxssangshi');
								trigger.player.addMark('yxssangshiboss');
								('step 2');
								if (target.sex == 'male') {
									trigger.player.init('yxs_zombie');
									trigger.player.changeGroup(mgt);
									game.playAudio('../extension/英雄外传/audio/zombie1.mp3');
									trigger.player.node.avatar.setBackgroundImage('extension/英雄外传/image/zombie1.jpg');
									trigger.player.addSkill('yxsganran');
								}
								if (target.sex == 'female') {
									trigger.player.init('yxs_zombie2');
									trigger.player.changeGroup(mgt);
									game.playAudio('../extension/英雄外传/audio/zombie2.mp3');
									trigger.player.node.avatar.setBackgroundImage('extension/英雄外传/image/zombie2.jpg');
									trigger.player.addSkill('yxsganran');
								}
							},
						},

						yxshero: {
							trigger: { global: 'phaseZhunbeiBegin' },
							forced: true,
							audio: 'ext:英雄外传/audio:2',
							//forced:true,
							filter(event, player) {
								if (event.player.hasMark('yxssangshi')) return false;
								if (_status.currentPhase == player) return false;
								if (event.name == 'phaseZhunbei')
									return game.countPlayer(function (current) {
										return current.countMark('yxssangshi') > 5;
									});
							},
							content() {
								'step 0';
								trigger.player
									.chooseControl('终极猎手', '恶魔剑客', function () {
										if (Math.random() < 0.5) return '终极猎手';
										return '恶魔剑客';
									})
									.set('prompt', '选择一个猎手');
								('step 1');
								if (result.control == '终极猎手') {
									trigger.player.init('yxs_baiqi');
								} else {
									trigger.player.init('yxs_ksl');
								}
							},
						},
						yxsxueqing: {
							trigger: { player: 'phaseBefore' },
							round: 2,
							direct: false,
							//unique:true,
							//limited:true,
							audio: 'ext:英雄外传/audio:2',
							filter(event, player, name) {
								return game.hasPlayer(function (current) {
									if (current == player) return false;
									return current.hasMark('yxssangshi');
								});
							},
							content() {
								'step 0';
								var targets = game.filterPlayer(function (current) {
									if (current == player) return false;
									return current.hasMark('yxssangshi');
								});
								var next = player
									.chooseTarget(get.prompt('yxsxueqing'), '令一个丧尸获得变回人类', function (card, player, target) {
										if (target == player) return false;
										return target.hasMark('yxssangshi');
									})
									.set('ai', function (target) {
										var num = target.hasMark('yxssangshi');
										return num * get.threaten(target);
									});
								('step 1');
								if (result.bool) {
									player.$skill('人类不能灭亡!', 'thunder', 'epic', 'avatar');
									var target = result.targets[0];
									target.removeMark('yxssangshi');
									target.clearSkills();
									player.awakenSkill('yxsxueqing');
									player.removeSkill('yxsxueqing');
									target.addSkill('yxsmianyi');
									if (target.group == 'qun' && target.sex == 'female') {
										target.node.avatar.setBackgroundImage('extension/英雄外传/image/玉兔.jpg');
									}
								}
							},
							ai: {
								threaten: 1.4,
							},
						},
						yxsmianyi: {
							mark: true,
							intro: {
								name: '免疫',
								content: '感染免疫',
							},
						},
						//计数标签(每轮限几次)
						yxsjishu: {
							mark: false,
						},
						//凯瑟琳二世
						yxspingquan: {
							derivation: ['yxschongli'],
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							content() {
								'step 0';
								player.chooseCard('he', `平权:交给${get.translation(target)}一张牌`, true).set('ai', function (card) {
									if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
										return 7 - get.value(card);
									}
									return -get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.give(result.cards, target);
									//player.lose(result.cards,ui.special);
									//target.gain(cards,'gain2');
									if (target.sex == 'male') {
										var num = player.countCards('h');
										var num2 = target.countCards('h');
										if (num < num2) {
											target.chooseToDiscard(num2 - num + 2, true, 'h');
										} else target.loseHp();
									}
									if (target.sex == 'female') {
										var ph = player.countCards('h'),
											th = target.countCards('h');
										if (ph >= th) {
											target.drawTo(Math.min(th + 99, ph) - 2);
										} else {
											player.drawTo(Math.min(ph + 99, th) + 2);
										}
									}
								}
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										if (get.attitude(player, target) > 0) {
											return Math.sqrt(target.countCards('he'));
										}
										return 0;
									},
									player: 1,
								},
							},
						},
						yxsxindian: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { global: 'useCardAfter' },
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								var evt = event.getParent('phaseUse');
								if (!evt || evt.player != event.player) return false;
								return (
									event.player
										.getHistory('useCard', function (evtt) {
											return evtt.getParent('phaseUse') == evt;
										})
										.indexOf(event) == 1
								);
							},
							content() {
								'step 0';
								var next = player.chooseToDiscard(1, 'he', get.prompt('yxsxindian', trigger.player), '令其弃置1张牌,并获得【崇理】直到回合结束');
								next.set('check', get.attitude(player, trigger.player) > 0 && trigger.player.countCards('h') > 2);
								next.ai = function (card) {
									if (_status.event.check) return 5 - get.value(card);
									return -1;
								};
								('step 1');
								if (result.bool) {
									player.chooseDrawRecover();
									trigger.player.addTempSkill('yxschongli');
									trigger.player.chooseToDiscard(1, 'h', true);
								}
							},
							ai: {
								expose: 0.25,
							},
						},
						yxschongli: {
							trigger: {
								player: 'useCardAfter',
							},
							forced: true,
							filter(event, player) {
								return (get.type(event.card) == 'basic' || get.type(event.card) == 'equip') && player.countCards('h') > 0;
							},
							content() {
								player.chooseToDiscard(2, 'h', true);
								player.removeSkill('yxschongli');
								player.addTempSkill('yxschongli2');
							},
						},
						yxschongli2: {
							trigger: {
								player: 'useCard2',
							},
							forced: true,
							filter(event, player) {
								return (get.type(event.card) == 'basic' || get.type(event.card) == 'equip') && player.countCards('h') > 0;
							},
							content() {
								player.chooseToDiscard(4, 'h', true);
								player.removeSkill('yxschongli2');
								player.addTempSkill('yxschongli3');
							},
						},
						yxschongli3: {
							trigger: {
								player: 'useCard1',
							},
							forced: true,
							filter(event, player) {
								return (get.type(event.card) == 'basic' || get.type(event.card) == 'equip') && player.countCards('h') > 0;
							},
							content() {
								var evt = _status.event.getParent('phaseUse');
								if (evt && evt.name) {
									evt.skipped = true;
								}
							},
						},
						//亚历山大
						yxsjuji: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							filter(event, player) {
								return event.player != player && player.countDisabled() < 5 && get.distance(player, event.player) <= 2;
							},
							check(event, player) {
								if (player.countDisabled() < 5 && player.isDisabled(5)) return false;
								return true;
							},
							content() {
								'step 0';
								if (player.countDisabled() < 5) {
									player.chooseToDisable().ai = function (event, player, list) {
										if (list.includes('equip5')) return 'equip5';
										return list.randomGet();
									};
								}
								('step 1');
								var target = _status.currentPhase;
								var card = { name: 'chuqibuyi' };
								if (player.canUse(card, target, false)) player.useCard(card, target, false);
								target.addTempSkill('yxsjuji2');
							},
						},
						yxsjuji2: {
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return num - 1;
								},
								maxHandcard(player, num) {
									return num - 1;
								},
							},
							//mark:true,
							charlotte: true,
						},
						yxsfangzheng: {
							derivation: ['yxsfangzheng3'],
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'damageEnd',
							},
							direct: false,
							_priority: 12,
							content() {
								'step 0';
								player.chooseToEnable();
								var card = get.cardPile(function (card) {
									return get.type(card) == 'equip';
								});
								if (card) {
									player.useCard(player, card);
								}
								if (get.subtype(card) == 'equip1') {
									player.addTempSkill('yxsfangzheng2', 'shaAfter');
									var card = { name: 'sha', nature: 'fire' };
									if (player.canUse(card, trigger.source, false)) player.useCard(card, trigger.source, false);
								}
								if (get.subtype(card) == 'equip2') {
									player.addTempSkill('yxsfangzheng3');
								}
							},
						},
						yxsfangzheng2: {
							//audio:2,
							trigger: {
								player: 'shaBegin',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.directHit = true;
							},
						},
						yxsfangzheng3: {
							trigger: {
								player: 'damageEnd',
							},
							forced: true,
							filter(event, player) {
								for (var i of game.players) {
									if (i.isAlive()) {
										return true;
									}
								}
								return false;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('yxsfangzheng3'), '选择至多2名与你相邻的角色,你与该些角色各摸1张牌.', [0, 2], function (card, player, target) {
										return player == target.next || player == target.previous;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									game.asyncDraw(result.targets);
									player.draw();
								}
							},
						},
						//安妮波尼
						yxslinglu: {
							audio: 'ext:英雄外传/audio:2',
							trigger: { global: 'damageEnd' },
							filter(event, player) {
								if (!event.player.isIn()) return false;
								return event.player.hp <= 1 && event.player.sex == 'male' && player.inRange(event.player);
							},
							forced: true,
							content() {
								player.chooseToUse({ name: 'sha' }, `凌戮:是否对${get.translation(trigger.player)}使用一张杀？`, trigger.player);
								player.addTempSkill('yxslinglu2', 'shaAfter');
								player.addTempSkill('yxslinglu3');
							},
						},
						yxslinglu3: {
							trigger: { source: 'damageBefore' },
							forced: true,
							content() {
								player.node.avatar.setBackgroundImage('extension/英雄外传/image/annie1.jpg');
							},
						},
						yxslinglu2: {
							trigger: { source: 'damageBegin1' },
							forced: true,
							filter(event, player) {
								return player != event.player && event.num < event.player.hp;
							},
							check(event, player) {
								if (get.attitude(player, event.player) > -2) return false;
								if (player.hp > 2) return true;
								if (player.hp == 2 && event.player.hp < 3) return false;
								return player.hp > 1;
							},
							logTarget: 'player',
							content() {
								//trigger.yxslinglu2_num=trigger.player.hp-trigger.num;
								player.node.avatar.setBackgroundImage('extension/英雄外传/image/annie1.jpg');
								trigger.num = trigger.player.hp;
							},
						},
						yxschihai: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							content() {
								'step 0';
								var list = game.filterPlayer(function (target) {
									return target != player && !target.isMad();
								});
								if (list.length) {
									var target = list.randomGet();
									game.swapSeat(player, target);
								}
								('step 1');
								player.addTempSkill('yxschihai2');
								player.node.avatar.setBackgroundImage('extension/英雄外传/image/yxs_anni.jpg');
							},
						},
						yxschihai2: {
							audio: 'ext:英雄外传/audio:2',
							trigger: {
								player: 'phaseEnd',
							},
							forced: true,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && get.distance(current, player) <= 1;
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('yxschihai'), '选择一名与你距离为1的角色,视为对其使用一张【趁火打劫】', [1, 2], function (card, player, target) {
										return get.distance(player, target) <= 1;
									})
									.set('ai', function (target) {
										return get.attitude(player, target);
									});
								('step 1');
								if (result.bool) {
									var card = { name: 'chenghuodajie' };
									player.useCard(card, result.targets, false);
								}
							},
						},
						// 索罗斯
						yxsganggan: {
							//audio:1,
							enable: ['chooseToUse'],
							init(player) {
								player.storage.yxsganggan = 0;
							},
							filter(event, player) {
								return !player.hasSkill('yxsganggan_used') && player.countCards('h') > 0;
							},
							filterCard(card, player) {
								return true;
							},
							selectCard: 1,
							position: 'hs',
							check(card) {
								var player = _status.event.player;
								if (card.number > player.storage.yxsganggan) {
									return 9 - get.value(card);
								}
								return 6 - get.value(card);
							},
							viewAs: {
								name: 'wuzhong',
							},
							onuse(result, player) {
								if (result.card.number > player.storage.yxsganggan) {
									player.storage.yxsganggan = result.card.number;
									game.playAudio('../extension/英雄外传/audio/yxsganggan2.mp3');
								} else {
									player.storage.yxsganggan = result.card.number;
									player.addTempSkill('yxsganggan_used', 'phaseUseEnd');
									game.playAudio('../extension/英雄外传/audio/yxsganggan1.mp3');
									player.addTempSkill('gg3', 'phaseUseEnd');
									player.addTempSkill('gg5', 'phaseUseEnd');
								}
							},
							group: 'yxsganggan_clear',
							subSkill: {
								used: {
									charlotte: true,
								},
								clear: {
									trigger: {
										player: 'phaseUseEnd',
									},
									forced: true,
									silent: true,
									popup: false,
									content() {
										player.storage.yxsganggan = 0;
									},
								},
							},
						},
						yxsjjq: {
							trigger: { player: 'phaseJieshuBegin' },
							round: 2,
							filter(event, player) {
								return player.isMinHandcard();
							},
							audio: 'ext:英雄外传/audio:2',
							//forced:true,
							content() {
								'step 0';
								var list = game.filterPlayer(function (current) {
									return current.isMaxHandcard();
								});
								player
									.chooseTarget(true, '狙击:选择一名手牌最多的角色与其交换手牌', function (card, player, target) {
										return target.isMaxHandcard();
									})
									.set('ai', function (target) {
										return get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									if (target != player) {
										player.line(target, 'green');
										player.swapHandcards(target);
									}
								}
							},
						},
						gg3: {
							trigger: { player: 'useCardEnd' },
							filter(event, player) {
								if (event.card.name == 'wuzhong') return true;
							},
							forced: true,
							content() {
								var num = player.countMark('yxsganggan');
								player.chooseToDiscard(num, true);
							},
						},
						gg5: {
							mod: {
								cardEnabled(card) {
									if (get.type(card, 'basic') != 'basic') return false;
								},
							},
						},
						//文无姬
						yxssese: {
							audio: 1,
							trigger: {
								source: 'damageAfter',
							},
							//limited:true,
							direct: false,
							_priority: 2019,
							// frequent:true,
							filter(event, player) {
								return event.player && event.player != player && player.isAlive() && event.player.sex == 'male';
							},
							content() {
								var list;
								if (_status.connectMode) {
									list = get.charactersOL(function (i) {
										return lib.character[i][1] != 'shen' && lib.character[i][0] != 'male';
									});
								} else {
									list = get.gainableCharacters(function (info) {
										if (info[0] == 'male') return false;
										return info[1] == ['guo'].randomGet();
									});
								}
								var name = list.randomGet();
								var a = trigger.player.hp;
								var b = trigger.player.maxHp;
								trigger.player.reinit(trigger.player.name, name, false);
								trigger.player.hp = a;
								trigger.player.maxHp = b;
								trigger.player.update();
								trigger.player.group = 'guo';
								game.log(trigger.player, '的势力变为果');
							},
							ai: {
								order: 1,
								expose: 0.5,
							},
						},
						yxsluanju: {
							trigger: {
								player: 'damageEnd',
							},
							direct: false,
							audio: 1,
							filter(event, player) {
								return event.source && event.source != player;
							},
							content() {
								'step 0';
								player.addTempSkill('yxsmianshang', 'phaseJieshuBegin');
								player.useSkill('yxsluanwu');
								('step 1');
								player.removeSkill('yxsluanwu');
							},
						},
						yxsmianshang: {
							trigger: { player: 'damageBefore' },
							filter(event, player) {
								return event.num > 0 && event.source;
							},
							forced: true,
							content() {
								trigger.cancel();
							},
						},
						yxsluanwu: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							limited: true,
							filterTarget(card, player, target) {
								return target != player;
							},
							selectTarget: -1,
							multitarget: true,
							multiline: true,
							content() {
								'step 0';
								player.awakenSkill('yxsluanwu');
								event.current = player.next;
								event.currented = [];
								event.num1 = 0;
								event.num2 = 0;
								('step 1');
								event.currented.push(event.current);
								event.current.addTempClass('target');
								event.current
									.chooseToUse(
										'乱武:使用一张杀或失去一点体力',
										function (card) {
											if (card.name != 'sha') return false;
											return lib.filter.filterCard.apply(this, arguments);
										},
										function (card, player, target) {
											if (player == target) return false;
											var dist = get.distance(player, target);
											if (dist > 1) {
												if (
													game.hasPlayer(function (current) {
														return current != player && get.distance(player, current) < dist;
													})
												) {
													return false;
												}
											}
											return lib.filter.filterTarget.apply(this, arguments);
										},
									)
									.set('ai2', function () {
										return get.effect_use.apply(this, arguments) + 0.01;
									});
								('step 2');
								if (result.bool == false) {
									event.num1++;
									event.current.loseHp();
								} else event.num2++;
								event.current = event.current.next;
								if (event.current != player && !event.currented.includes(event.current)) {
									event.goto(1);
								} else player.draw(Math.max(event.num1, event.num2));
								//player.removeSkill('yxsluanwu');
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
											if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
										}
										var num = 0;
										var players = game.filterPlayer();
										for (var i of players) {
											var att = get.attitude(player, i);
											if (att > 0) att = 1;
											if (att < 0) att = -1;
											if (i != player && i.hp <= 3) {
												if (i.countCards('h') == 0) num += att / i.hp;
												else if (i.countCards('h') == 1) num += att / 2 / i.hp;
												else if (i.countCards('h') == 2) num += att / 4 / i.hp;
											}
											if (i.hp == 1) num += att * 1.5;
										}
										if (player.hp == 1) {
											return -num;
										}
										if (player.hp == 2) {
											return -game.players.length / 4 - num;
										}
										return -game.players.length / 3 - num;
									},
								},
							},
						},
						//平清盛
						yxsfodi: {
							audio: 1,
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player;
							},
							selectTarget: 1,
							filter(event, player) {
								return player.countCards('h');
							},
							content() {
								'step 0';
								player.chooseCard('he', true, '将一张牌置于牌堆顶');
								('step 1');
								if (result && result.cards) {
									player.lose(result.cards, ui.cardPile, 'insert');
									game.log(player, '将一张牌置于牌堆顶');
									game.broadcastAll(function (player) {
										var cardx = ui.create.card();
										cardx.classList.add('infohidden');
										cardx.classList.add('infoflip');
										player.$throw(cardx, 1000, 'nobroadcast');
									}, player);
								}
								('step 2');
								target.chooseToDiscard('受到1点火焰伤害,否则进行一次【火山】效果判定', 'h', 1).set('ai', function (card) {
									return 7 - get.value(card);
								});
								('step 3');
								if (result.bool) {
									target.damage(1, 'fire');
									event.finish();
								} else {
									target.addTempSkill('ranshang', { player: 'phaseJieshuBegin' });
									target.judge('佛敌', function (card) {
										if (card.suit == 'heart' && card.number > 1 && card.number < 10) return -6;
										return 0;
									});
								}
								('step 4');
								if (result.bool == false) {
									target.damage(2, 'fire', 'nosource');
									var players = game.filterPlayer(function (current) {
										return get.distance(target, current) <= 1 && target != current;
									});
									players.sort(lib.sort.seat);
									for (var i of players) {
										i.damage(1, 'fire', 'nosource');
									}
								}
							},
							ai: {
								order: 9,
								expose: 0.5,
								result: {
									target(player, target) {
										if (target.hp <= 2) return -0.2;
										return -2;
									},
								},
							},
						},
						yxsqucao: {
							audio: 'ext:英雄外传/audio:2',
							//shaRelated:true,
							//round:1,
							trigger: {
								global: 'useCard',
							},
							_priority: 39,
							direct: false,
							filter(event, player) {
								if (event.player.hp > player.hp) return false;
								return (event.card && event.card.name == 'sha') || event.card.name == 'tao';
							},
							content() {
								'step 0';
								event.tp;
								switch (trigger.card.name) {
									case 'sha':
										event.tp = 'diaohulishan';
										break;
									case 'tao':
										event.tp = 'tiesuo';
										break;
								}
								player.chooseTarget(get.prompt('yxsqucao'), '是否指定一名其他角色？你可将其一张手牌当作【桃】或【调虎离山】使用', function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									var att = get.attitude(player, target);
									if (player.countCards('h') < 3) return false;
									return att;
								};
								('step 1');
								if (result.bool) {
									trigger.targets.length = 0;
									//trigger.parent.triggeredTargets1.length=0;
									//trigger.all_excluded=true;
									//trigger.targets.remove(source);
									trigger.targets.push(result.targets[0]);
									player.line(result.targets[0], 'fire');
									event.pla = player;
									event.tar = result.targets[0];
									var card = { name: 'sha' };
									player.choosePlayerCard(event.tar, 'h', 1, 'visible').set('ai', function (button) {
										var val = get.value(button.link);
										var cdvl,
											att = get.attitude(event.tar, event.pla);
										switch (event.tp) {
											case 'tiesuo':
												cdvl = 9;
												break;
											case 'diaohulishan':
												cdvl = 7;
												break;
											//case 'sha':cdvl=5;break;
										}
										if (att >= 0) {
											//if(event.tp=='tao'&&event.pla.isHealthy()) return 0;
											if (event.tp == 'diaohulishan') {
												if (
													game.hasPlayer(function (current) {
														return event.pla.canUse({ name: 'diaohulishan' }, current) && get.effect(current, { name: 'sha' }, event.pla, event.pla) > 0;
													})
												)
													return cdvl - val;
											}
											if (event.tp == 'tiesuo') {
												if (
													game.hasPlayer(function (current) {
														return event.pla.canUse({ name: 'tiesuo' }, current) && get.effect(current, { name: 'tao' }, event.pla, event.pla) > 0;
													})
												)
													return cdvl - val;
											}
											return cdvl - val;
										}
										return val - cdvl;
									});
								} else event.finish();
								('step 2');
								if (result.bool) {
									event.pla.chooseUseTarget({ name: event.tp }, result.links, false).viewAs = true;
									event.pla.lose(result.links, ui.special);
								}
							},
							ai: {
								expose: 0.4,
							},
						},
						//萝莉神甘
						lolizhongjie: {
							forced: true,
							direct: false,
							audio: 1,
							trigger: {
								source: 'dieBefore',
							},
							content() {
								'step 0';
								player.draw(0);
							},
							ai: {
								threaten: 2.4,
							},
						},
						poxiloli: {
							audio: 'ext:英雄外传/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return target != player && target.countCards('h') > 0;
								//return target!=player;
							},
							content() {
								'step 0';
								event.list1 = [];
								event.list2 = [];
								if (player.countCards('h') > 0) {
									var chooseButton = player.chooseButton(4, ['你的手牌', player.getCards('h'), get.translation(target.name) + '的手牌', target.getCards('h')]);
								} else {
									var chooseButton = player.chooseButton(4, [get.translation(target.name) + '的手牌', target.getCards('h')]);
								}
								chooseButton.set('target', target);
								chooseButton.set('ai', function (button) {
									var player = _status.event.player;
									var target = _status.event.target;
									var ps = [];
									var ts = [];
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										var card = ui.selected.buttons[i].link;
										if (target.getCards('h').includes(card)) ts.push(card);
										else ps.push(card);
									}
									var card = button.link;
									var owner = get.owner(card);
									var val = get.value(card) || 1;
									if (owner == target) {
										if (ts.length > 1) return 0;
										if (ts.length == 0 || player.hp > 3) return val;
										return 2 * val;
									}
									return 7 - val;
								});
								chooseButton.set('filterButton', function (button) {
									for (var i = 0; i < ui.selected.buttons.length; i++) {
										if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
									}
									return true;
								});
								('step 1');
								if (result.bool) {
									var list = result.links;
									for (var i = 0; i < list.length; i++) {
										if (get.owner(list[i]) == player) {
											event.list1.push(list[i]);
										} else {
											event.list2.push(list[i]);
										}
									}
									if (event.list1.length && event.list2.length) {
										target.discard(event.list2).delay = false;
										player.discard(event.list1);
									} else if (event.list2.length) {
										target.discard(event.list2);
									} else player.discard(event.list1);
								}
								('step 2');
								if (event.list1.length + event.list2.length == 4) {
									if (event.list1.length == 0) player.loseMaxHp();
									if (event.list1.length == 1) {
										var evt = _status.event;
										for (var i = 0; i < 10; i++) {
											if (evt && evt.getParent) evt = evt.parent;
											if (evt.name == 'phaseUse') {
												evt.skipped = true;
												break;
											}
										}
										player.addTempSkill('poxiloli1', { player: 'phaseAfter' });
									}
									if (event.list1.length == 3) player.recover();
									if (event.list1.length == 4) player.draw(4);
								}
							},
							ai: {
								order: 13,
								result: {
									target(player, target, card) {
										return -1;
									},
								},
							},
						},
						poxiloli1: {
							mod: {
								maxHandcard(player, num) {
									return num - 1;
								},
							},
						},
						jieyingloli_mark: {
							marktext: '营',
							intro: {
								name: '营',
								content: 'mark',
							},
							mod: {
								cardUsable(card, player, num) {
									if (player.hasMark('jieyingloli_mark') && card.name == 'sha')
										return (
											num +
											game.countPlayer(function (current) {
												return current.hasSkill('jieyingloli');
											})
										);
								},
								maxHandcard(player, num) {
									if (player.hasMark('jieyingloli_mark'))
										return (
											num +
											game.countPlayer(function (current) {
												return current.hasSkill('jieyingloli');
											})
										);
								},
							},
							audio: 'jieyingloli',
							trigger: {
								player: 'phaseDrawBegin2',
							},
							forced: true,
							filter(event, player) {
								return (
									!event.numFixed &&
									player.hasMark('jieyingloli_mark') &&
									game.hasPlayer(function (current) {
										return current.hasSkill('jieyingloli');
									})
								);
							},
							content() {
								trigger.num += game.countPlayer(function (current) {
									return current.hasSkill('jieyingloli');
								});
							},
							ai: {
								nokeep: true,
								skillTagFilter(player) {
									if (!player.hasMark('jieyingloli_mark')) return false;
								},
							},
						},
						jieyingloli: {
							audio: 'ext:英雄外传/audio:2',
							global: 'jieyingloli_mark',
							group: ['jieyingloli_1', 'jieyingloli_2', 'jieyingloli_3'],
							subSkill: {
								1: {
									audio: 'jieyingloli',
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									forced: true,
									filter(event, player) {
										return !game.hasPlayer(function (current) {
											return current.hasMark('jieyingloli_mark');
										});
									},
									content() {
										player.addMark('jieyingloli_mark', 1);
									},
								},
								2: {
									audio: 'jieyingloli',
									trigger: {
										player: 'phaseJieshuBegin',
									},
									forced: true,
									filter(event, player) {
										return player.hasMark('jieyingloli_mark');
									},
									content() {
										'step 0';
										player.chooseTarget(get.prompt('jieyingloli'), '将<营>交给一名角色;其摸牌阶段多摸一张牌,出牌阶段使用【杀】的次数上限+1且手牌上限+1.该角色回合结束后,其移去<营>标记,你获得其所有手牌.', function (card, player, target) {
											return target != player;
										}).ai = function (target) {
											if (get.attitude(player, target) > 0) return 0.1;
											if (get.attitude(player, target) < 1 && (target.isTurnedOver() || target.countCards('h') < 1)) return 0.2;
											if (get.attitude(player, target) < 1 && target.countCards('h') > 0 && target.countCards('j', { name: 'lebu' }) > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7 + 2;
											if (get.attitude(player, target) < 1 && target.countCards('h') > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
											return 1;
										};
										('step 1');
										if (result.bool) {
											var target = result.targets[0];
											player.line(target);
											var mark = player.countMark('jieyingloli_mark');
											player.removeMark('jieyingloli_mark', mark);
											target.addMark('jieyingloli_mark', mark);
										}
									},
								},
								3: {
									audio: 'jieyingloli',
									trigger: {
										global: 'phaseEnd',
									},
									forced: true,
									filter(event, player) {
										return player != event.player && event.player.hasMark('jieyingloli_mark') && event.player.isAlive();
									},
									logTarget: 'player',
									content() {
										if (trigger.player.countCards('h') > 0) {
											trigger.player.give(trigger.player.getCards('h'), player);
										}
										trigger.player.removeMark('jieyingloli_mark', trigger.player.countMark('jieyingloli_mark'));
									},
								},
							},
						},
					},
				};
				lib.config.all.characters.add('英雄外传');
				lib.config.characters.add('英雄外传');
				for (var i in QQQ.character) {
					QQQ.character[i][4].add(`ext:英雄外传/image/${i}.jpg`);
				}
				lib.translate['英雄外传_character_config'] = `英雄外传`;
				return QQQ;
			});
		},
		package: {
			intro: (function () {
				var log = ['续写世界英雄篇章~ 全角色都有配音和露头(内附果包).扩展内部分武将技能搬运或借鉴了时空枢纽、群英会、血色衣冠、炉石传说、星耀璨然等扩展.感谢群内大佬给予的技术支持,Bug可反馈至作者QQ,纯属辣鸡作品,有爱自取吧~', '', ' 更新公告:1.0 beta', '', '1 新增果包角色6个(祝融、诸葛果、杨艳、灵雎等),精简了大量果包角色.', '', '2 新增正篇角色【亚历山大】、【凯瑟琳二世】、【魅魔】、【安妮波妮】、【图坦卡蒙】、【索罗斯】、【文无姬】', '', '3 【伊丽莎白】、【开膛手杰克】、【维纳斯】、【果甄姬】等角色技能调整', '', '4 修正一些过于恶心的技能和武将技能bug', '', '5 调整了部分武将的势力、血量,及所属分类,删除了部分低创武将', '', '6 修复其他问题若干', '', 'Tips: 关于果包武将,其余果包姐姐们仍需要技能调整,会在未来版本全部解锁~感谢大家的支持'];
				return `<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span><p style='color: rgb(200,200,000); font-size:16px; line-height:20px; text-shadow: 0 0 2px black;'>` + log.join('<br>') + '</p>';
			})(),
			author: '文和(文姬) QQ:931836103                       ',
			version: '1.0',
		},
	};
});

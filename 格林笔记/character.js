game.import('character', function (lib, game, ui, get, ai, _status) {
	const gelin = {
		name: 'gelin',
		characterSort: {
			gelin: {
				gl_tiaolvzhe: ['gl_aikesi', 'gl_shiyin', 'gl_famu', 'gl_aida', 'gl_ailuoweisi', 'gl_sade', 'gl_taao'],
				gl_pohuai: ['gl_luoji', 'gl_kali'],
				gl_fuyinxueyuan: ['gl_aileina', 'gl_ailixiya', 'gl_dimu'],
			},
		},
		character: {
			gl_daxiong: ['male', 'key', 3, ['gl_chiyuan', 'gl_benxi', 'gl_yangwei'], []],
			gl_dahuilang: ['male', 'key', 3, ['gl_fengkuang', 'gl_canjiao', 'gl_menggong'], []],
			gl_aikesi: ['male', 'shen', 4, ['gl_lianjie'], ['gl:all']],
			gl_aileina: ['female', 'key', 3, ['gl_lianjie'], ['gl:key']],
			gl_famu: ['female', 'wei', 3, ['gl_lianjie'], ['gl:wu']],
			gl_kali: ['female', 'jin', 3, ['gl_lianjie'], ['gl:qun']],
			gl_aida: ['female', 'shu', 3, ['gl_lianjie'], ['gl:wei']],
			gl_ailuoweisi: ['male', 'wu', 3, ['gl_lianjie'], ['gl:shu']],
			gl_sade: ['female', 'qun', 3, ['gl_lianjie'], ['gl:jin']],
			gl_shiyin: ['female', 'shu', 3, ['gl_lueying', 'gl_qiangdou', 'gl_qiutong'], []],
			gl_taao: ['male', 'wei', 4, ['gl_lijian', 'gl_yizhi', 'gl_zhengtu'], []],
			gl_jingyue: ['female', 'jin', 3, ['gl_lingjing', 'gl_zongying', 'gl_yinyue'], []],
			gl_huiguniang: ['female', 'wu', 3, ['gl_mengchen', 'gl_jili', 'gl_jingxin'], ['unseen']],
			gl_baixueji: ['female', 'shu', 4, ['gl_tudu', 'gl_leihuan', 'gl_jiming'], ['unseen']],
			gl_xiaohongmao: ['female', 'qun', 3, ['gl_huohuan', 'gl_huangkong', 'gl_shihuai'], ['unseen']],
			gl_ailisi: ['female', 'shu', 4, ['gl_huanxiang', 'gl_qiji', 'gl_shuyi'], ['unseen']],
			gl_wukong: ['female', 'shu', 4, ['gl_yongjue', 'gl_lingming', 'gl_disha'], ['unseen']],
			gl_geerda: ['female', 'wu', 3, ['gl_lingshuang', 'gl_changnian', 'gl_tongkai'], ['unseen']],
			gl_zhende: ['female', 'wei', 4, ['gl_rongzhuang', 'gl_yudi', 'gl_zhenjun'], ['unseen']],
			gl_taotailang: ['male', 'shu', 4, ['gl_taozhi', 'gl_hezhan', 'gl_yangming'], ['unseen']],
			gl_tangjihede: ['male', 'wei', 4, ['gl_wangnian', 'gl_shidao', 'gl_zhenhu'], ['unseen']],
			gl_alading: ['male', 'shu', 4, ['gl_touhuan', 'gl_haoshi', 'gl_huanyuan'], ['unseen']],
			gl_xiannv: ['female', 'wu', 3, ['gl_jieyou', 'gl_mozhuang', 'gl_pianai'], ['unseen']],
			gl_baixuewanghou: ['female', 'qun', 3, ['gl_chengren', 'gl_duguo', 'gl_shixin'], ['unseen']],
			gl_duerxineiya: ['female', 'wei', 3, ['gl_huanmo', 'gl_shengyou', 'gl_tongxin'], ['unseen']],
			gl_jiayi: ['male', 'wei', 4, ['gl_bingjie', 'gl_yixin', 'gl_qiqiao'], ['unseen']],
			gl_bingxuenvwang: ['female', 'wei', 4, ['gl_baoxue', 'gl_huoxin', 'gl_sheai'], ['unseen']],
			gl_jimu: ['male', 'qun', 4, ['gl_xunbao', 'gl_ronghui', 'gl_shefu'], ['unseen']],
			gl_xierfu: ['male', 'shu', 4, ['gl_luanzhan', 'gl_huli', 'gl_cangfeng'], ['unseen']],
			gl_maihuochai: ['female', 'qun', 3, ['gl_jiying', 'gl_huohua', 'gl_ximie'], ['unseen']],
			gl_hongqiangwei: ['female', 'shu', 3, ['gl_caiduan', 'gl_xinao', 'gl_lezhu'], ['unseen']],
			gl_baiqiangwei: ['female', 'wu', 3, ['gl_yuejvan', 'gl_anhui', 'gl_zhongshan'], ['unseen']],
			gl_kamila: ['female', 'shu', 4, ['gl_shixie', 'gl_jieyuan', 'gl_xieshang'], ['unseen']],
			gl_kalun: ['female', 'wu', 3, ['gl_wuxie', 'gl_qingshu', 'gl_zansong'], ['unseen']],
			gl_taolesi: ['female', 'shu', 3, ['gl_pangui', 'gl_xvanfeng', 'gl_duobu'], ['unseen']],
			gl_yuyitiannv: ['female', 'wu', 3, ['gl_guitian', 'gl_jingmu', 'gl_yingfeng'], ['unseen']],
			gl_kelisidina: ['female', 'shu', 3, ['gl_qinxiu', 'gl_geyong', 'gl_aili'], ['unseen']],
			gl_ailike: ['male', 'qun', 4, ['gl_zhidao', 'gl_xiongsuan', 'gl_anhun'], ['unseen']],
			gl_guiji: ['female', 'shu', 4, ['gl_guibu', 'gl_jielue', 'gl_linwei'], ['unseen']],
			gl_huiye: ['female', 'qun', 4, ['gl_yuehong', 'gl_zhuansheng', 'gl_huiyan'], ['unseen']],
			gl_busi: ['male', 'wei', 4, ['gl_qiaoyan', 'gl_moujv', 'gl_jieshi'], ['unseen']],
			gl_fulankensitan: ['male', 'wu', 4, ['gl_gaizao', 'gl_qiuzhi', 'gl_shichou'], ['unseen']],
			gl_ailier: ['female', 'wu', 4, [], ['unseen']],
			gl_moli: ['female', 'wu', 4, ['gl_qvhu', 'gl_hunmu', 'gl_zhici'], ['unseen']],
			gl_dengshen: ['male', 'wu', 4, ['gl_moling', 'gl_leyan', 'gl_biantong'], ['unseen']],
			gl_luoji: ['male', 'jin', 4, ['gl_yinwu', 'gl_qinshi', 'gl_hongtu'], []],
			gl_jintailang: ['male', 'wei', 4, ['gl_paoxiao', 'gl_zhaolei', 'gl_tanfeng'], ['unseen']],
			gl_jiutuntongzi: ['male', 'wei', 4, ['gl_guishou', 'gl_yehuo', 'gl_zuijiu'], ['unseen']],
			gl_pudaotailang: ['male', 'qun', 4, ['gl_pinle', 'gl_shanjie', 'gl_liunian'], ['unseen']],
			gl_longnv: ['female', 'qun', 4, ['gl_haichao', 'gl_xunhuan', 'gl_zengjin'], ['unseen']],
			gl_huzhinvshen: ['female', 'qun', 4, ['gl_jinghua', 'gl_shenqvan', 'gl_yindao'], ['unseen']],
			gl_shizhongtu: ['female', 'wu', 4, ['gl_sushi', 'gl_jiance', 'gl_jipo'], ['unseen']],
			gl_jierdelei: ['male', 'qun', 4, ['gl_junlue', 'gl_shibing', 'gl_cansha'], ['unseen']],
			gl_shuishu: ['female', 'wu', 4, ['gl_xingshen', 'gl_anshui', 'gl_suiqian'], ['unseen']],
			gl_caijunmao: ['female', 'qun', 4, ['gl_manyou', 'gl_mizong', 'gl_songbie'], ['unseen']],
			gl_fengmaozi: ['male', 'shu', 4, ['gl_dianfu', 'gl_chahui', 'gl_xifa'], ['unseen']],
			gl_daina: ['female', 'shu', 4, ['gl_huanchu', 'gl_ruixi', 'gl_qinting'], ['unseen']],
			gl_sanyuetu: ['female', 'qun', 4, ['gl_kuangyi', 'gl_luanwu', 'gl_guozao'], ['unseen']],
			gl_yite: ['female', 'shu', 4, ['gl_youren', 'gl_xiangfu', 'gl_lvlu'], ['unseen']],
			gl_jingzhinvwang: ['female', 'wei', 4, [], ['unseen']],
			gl_lubang: ['male', 'qun', 4, ['gl_bianhuan', 'gl_zizai', 'gl_xiadao'], ['unseen']],
			gl_jianimaer: ['male', 'qun', 4, ['gl_duizhi', 'gl_shitan', 'gl_shipo'], ['unseen']],
			gl_ailu: ['male', 'key', 4, ['gl_xianji', 'gl_shiluo', 'gl_zuilun'], ['unseen']],
			gl_xita: ['female', 'key', 4, ['gl_dongcha', 'gl_zhuichang', 'gl_yinling'], ['unseen']],
			gl_weizi: ['male', 'key', 4, ['gl_chenmo', 'gl_ehan', 'gl_zhilun'], ['unseen']],
			gl_sanzang: ['female', 'wu', 4, ['gl_jingu', 'gl_gongji', 'gl_hongde'], ['unseen']],
			gl_bajie: ['female', 'wei', 4, ['gl_tiangang', 'gl_daiyu', 'gl_chanyan'], ['unseen']],
			gl_wujing: ['female', 'wei', 4, ['gl_jinwei', 'gl_liusha', 'gl_tiaohe'], ['unseen']],
			gl_daocaoren: ['male', 'wu', 4, ['gl_kuizhi', 'gl_zhuwei', 'gl_qice'], ['unseen']],
			gl_shizi: ['male', 'wei', 4, ['gl_danlie', 'gl_fenwei', 'gl_zhenwei'], ['unseen']],
			gl_xipiren: ['male', 'wei', 4, ['gl_hunxin', 'gl_gangrou', 'gl_juelei'], ['unseen']],
			gl_ailixiya: ['female', 'key', 4, ['gl_haoqi', 'gl_caishi', 'gl_futu'], []],
			gl_lieren: ['male', 'qun', 4, ['gl_duanbing', 'gl_muyang', 'gl_zhulie'], ['unseen']],
			gl_xiaoairen: ['male', 'shu', 4, ['gl_fengong', 'gl_jiena', 'gl_songsang'], ['unseen']],
			gl_aobulang: ['male', 'shu', 4, ['gl_xingluo', 'gl_weiguang', 'gl_miyao'], ['unseen']],
			gl_titanniya: ['female', 'wu', 4, ['gl_senluo', 'gl_xingyi', 'gl_pianchong'], ['unseen']],
			gl_poke: ['female', 'qun', 4, ['gl_guiji_poke', 'gl_mangzhuang', 'gl_luohua'], ['unseen']],
			gl_bodun: ['male', 'wei', 4, ['gl_shizhong', 'gl_sifan', 'gl_bangyou'], ['unseen']],
			gl_bulu: ['female', 'wei', 4, ['gl_jiaojin', 'gl_qinnei', 'gl_miaobian'], ['unseen']],
			gl_miya: ['female', 'shu', 4, ['gl_yuanqi', 'gl_sajiao', 'gl_sanzhi'], ['unseen']],
			gl_huaite: ['female', 'qun', 4, ['gl_toulan', 'gl_zhangwei', 'gl_zhuilie'], ['unseen']],
			gl_kaluoluo: ['female', 'wu', 4, ['gl_miantian', 'gl_fuzhou', 'gl_qiufa'], ['unseen']],
			gl_dimu: ['male', 'qun', 4, ['gl_zishou', 'gl_guicai', 'gl_nishi'], []],
			gl_souzhineihaojiang: ['male', 'key', 4, ['gl_yanxiao', 'gl_renxin', 'gl_shiyue'], ['unseen']],
			gl_milika: ['female', 'key', 4, ['gl_shixie', 'gl_suixing', 'gl_siyan'], ['unseen']],
			gl_taqianna: ['female', 'qun', 4, ['gl_liedao', 'gl_zenian', 'gl_aoxue'], ['unseen']],
			gl_yubanmeiqin: ['female', 'key', 4, ['gl_leiqiang', 'gl_poji', 'gl_niqi'], ['unseen']],
			gl_youchuanji: ['male', 'key', 4, ['gl_maishen', 'gl_jinzhi', 'gl_louchu'], ['unseen']],
			gl_wanglu: ['male', 'key', 4, ['gl_jizhi', 'gl_jianwei', 'gl_wuxiang'], ['unseen']],
			gl_kelalisi: ['female', 'wu', 4, ['gl_yinchun', 'gl_ganling', 'gl_xunyou'], ['unseen']],
			gl_houtengdu: ['female', 'key', 4, ['gl_gudu', 'gl_xiehou', 'gl_yanzou'], ['unseen']],
			gl_muzhibenying: ['female', 'key', 4, ['gl_fengyin', 'gl_yushi', 'gl_mengzhan'], ['unseen']],
			gl_sangqiu: ['male', 'wei', 4, ['gl_yingyuan', 'gl_caigan', 'gl_fanxiang'], ['unseen']],
			gl_shakuna: ['female', 'wu', 4, ['gl_lingzhou', 'gl_muying', 'gl_cannian'], ['unseen']],
		},
		dynamicTranslate: {
			gl_lianjie(player) {
				var str = '';
				if (player && lib.character[player.name]) {
					var info = lib.character[player.name];
					var group;
					for (let i = 0; i < info[4].length; i++) {
						if (info[4][i].indexOf('gl:') == 0) {
							group = info[4][i].slice(3).split(':');
						}
					}
					if (!group) return '引导之证气息平稳的流转';
					if (group[0] != 'all') {
						str += get.translation(group) + '势力';
					}
				}
				if (lib.config.gelin.level === 0) {
					return '游戏开始时,你随机变身为一名愿意回应你的' + str + '童话英雄';
				}
				if (!lib.config.gelin.level || lib.config.gelin.level == 1) {
					return '出牌阶段限一次,你可以变身为一名你曾击败过的' + str + '角色';
				}
				if (lib.config.gelin.level == 3 && get.mode() != 'xiangqv') {
					return '游戏开始时或出牌阶段限一次,你可以结合两名你曾击败过的' + str + '角色力量';
				}
				return '游戏开始时或出牌阶段限一次,你可以变身为一名你曾击败过的' + str + '角色';
			},
			gl_yingfeng(player) {
				if (player.storage.gl_yingfeng == true) {
					return '出牌阶段,你可以将装备区内1张牌与手牌区内X张牌当任意锦囊牌使用.(X为你于此阶段发动该技能的次数)';
				}
				return '其他角色出牌阶段限一次,其可以令你将装备区内任意1张牌交给其当做任意锦囊牌使用';
			},
			gl_jingmu(player) {
				if (player.storage.gl_jingmu == true) {
					return '锁定技,当你于回合外失去1张牌时,若那张牌为红色,你回复1点体力;若为黑色,你摸2张牌';
				}
				return '当你失去装备区内的1张牌时,若那张牌为红色,你可以令1名角色回复1点体力;若为黑色,你可以令1名角色摸2张牌';
			},
			gl_tiaohe(player) {
				if (player.storage.gl_tiaohe) return '转换技,当你受到伤害后,你可以令1名角色展示手牌,阴:其获得X张颜色数较少的牌.<span class="firetext">阳:其弃置X张颜色数较多的牌.</span>(X为两种颜色牌数量的差值)';
				return '转换技,当你受到伤害后,你可以令1名角色展示手牌,<span class="firetext">阴:其获得X张颜色数较少的牌.</span>阳:其弃置X张颜色数较多的牌.(X为两种颜色牌数量的差值)';
			},
			gl_fuzhou(player) {
				if (player.storage.gl_fuzhou?.bool) {
					return '转换技,出牌阶段开始时,你可以令1名角色直至你的下个回合开始为止,阴:造成的所有伤害均改为回复1点体力.<span class="firetext">阳:受到的所有伤害均改为回复1点体力.</span>若你选择的目标与上次不同,则你失去1点体力';
				} //QQQ
				return '转换技,出牌阶段开始时,你可以令1名角色直至你的下个回合开始为止,<span class="firetext">阴:造成的所有伤害均改为回复1点体力.</span>阳:受到的所有伤害均改为回复1点体力.若你选择的目标与上次不同,则你失去1点体力';
			},
			gl_guicai(player) {
				var storage = player.storage.gl_guicai;
				if (storage && storage.usable) return '出牌阶段,你获得1张【' + get.translation(storage.usable) + '】且此技能失效直至此回合结束';
				return '出牌阶段,你可以弃置1张基本牌或普通锦囊牌,随后执行并删除以下一项:1,当你受到伤害后,你可以将1张牌当A使用;2,当你使用【杀】指定目标后,你可以将所有手牌当A使用;3当你失去装备区内的牌后,你可以视为使用1张A.若你以上效果均已删除,则将此技能的效果改为『你获得1张A且此技能失效直至此回合结束』.(A为你弃置牌的牌名)';
			},
			gl_cannian(player) {
				var str = '当你造成或受到伤害时,';
				str += player.storage.gl_cannian ? '阴:此伤害+1.<span class="firetext">阳:此伤害-1.</span>' : '<span class="firetext">阴:此伤害+1.</span>阳:此伤害-1';
				str += '随后若此伤害为致命伤害或无效伤害,则你于此回合结束后,执行一个额外的出牌阶段';
				return str;
			},
		},
		characterIntro: {
			gl_aikesi: '出生于灰姑娘想区.出生不久父母便去世,被叔叔和叔母收养.因为命运之书是空白的缘故,周围所有的人都在害怕、厌恶其的存在',
			gl_famu: '出生于灰姑娘想区.灰姑娘忍受不了虐待而身亡时的替代品,摆脱命运后,踏上了收集<魔法道具>的随性生活',
			gl_aida: '出生于玫瑰公主想区.被精灵赐福而获得永生,遵从国王的诏令独自守护沉睡的玫瑰公主和被封印的王国100年.使命结束后,为了寻找人生的意义而踏上新的旅途',
			gl_ailuoweisi: '出生于奥尔良的圣女想区.跟随圣女贞德一路南征北战,对贞德怀揣的真挚的信仰,贞德赠予的玫瑰也视为珍宝.为了平复贞德死后留下的创伤而旅行',
			gl_sade: '出生于怪盗绅士想区.立志成为和爷爷一样伟大的怪盗,时常把家族、荣耀挂在嘴边.旅行结束时却见到整个家族被<混沌之源>所屠杀,自此失去了笑颜并接近疯狂的追杀<灰烬教团>',
			gl_kali: '<灰烬教团>的巫女,秉持着<打破悲剧的命运,走向全新的未来>的理念,不断地在各个想区制造混沌之源',
			gl_luoji: '外号<魔术师>,身上谜一样的男人,秉持着<毁灭命运之书,杜绝悲剧重演>的理念,不断地在各个想区制造混沌之源',
			gl_bingxuenvwang: '不会进入永恒轮回的冰之女王,每次轮回都需要去将加伊带回冰雪城堡.厌倦了永恒的孤独,每次想和加伊多聊聊却都会被无视',
			gl_baixueji: '在无尽轮回中反复的击杀母亲,并扮演新的母亲再次被击杀.直到一位特别王子的到来终于能结束这场无休止的闹剧',
			gl_huiguniang: '幼年时期给了艾克斯无限的鼓励与支持,心里对王子保有着巨大的期待,一直等待着命运之日的到来',
			gl_xiannv: '不会进入永恒轮回的仙女,帮助每一任灰姑娘与王子结婚便是她的使命.对灰姑娘抱有特殊的感情,不忍看到灰姑娘伤心的表情',
			gl_ailisi: '喜欢幻想的奇迹少女,富有冒险精神,渴望成长为一个淑女,与三月兔、疯帽子和柴郡猫等等角色都有深厚的羁绊',
			gl_jimu: '意外得到了传闻中海盗船长<弗林特>的藏宝图,从而踏上了寻宝的征途.虽然开始还很不成熟,但在旅途中逐渐吸收了周围人的优点,最终成长为值得骄傲的男子汉',
			gl_xierfu: '过去海盗船长<弗林特>的手下.为了得到弗林特的宝藏,伪装成厨子跟随吉姆出海.虽然是个海盗但却并未泯灭人性的善',
			gl_tangjihede: '幻想自己是一名伟大的骑士,带着仆人<桑丘>一起四处<行侠仗义>,直到临死前才发现自己荒诞',
			gl_duerxineiya: '本只该存在于堂吉诃德幻想中的公主,因为混沌而实体化.最终为了想区的稳定舍身就义',
			gl_baixuewanghou: '为了白雪公主能迎接美好的结局,用尽各种办法让白雪公主怨恨自己.在最后看到白雪公主与白马王子结婚后欣慰的逝去',
			gl_geerda: '为了找回哥哥<加伊>而踏上旅途,途中被女巫诅咒、寒冬淹没、山贼绑架却依旧坚定不移的前进',
			gl_jiayi: '善于动脑探索各种事物.被魔镜碎片刺入心灵后,时常会打骂格尔达.被格尔达的真心融化碎片后,与其定下了永远的约定',
			gl_kalun: '因为不遵守教义又过于傲慢而被惩罚一直跳舞,直到双腿被砍了下来才得以停止',
			gl_kamila: '喜欢少女的吸血鬼,认为少女是世界的恩赐,对男性抱有很大的戒备',
			gl_hongqiangwei: '居住在森林中活泼好动的女孩.即使被矮人巫师多次恩将仇吧,依旧是对其伸出援手',
			gl_baiqiangwei: '居住在森林中文静如水的女孩.即使被矮人巫师多次恩将仇吧,依旧是对其伸出援手',
			gl_maihuochai: '在寒冬中孤独死去的少女,就连她自己都不曾知晓,她的善举掀起了一场混沌与调律之间战争的新浪潮',
			gl_yuyitiannv: '居住在天宫的天女,下凡沐浴时被农夫偷走了羽衣,被迫成为了农夫的妻子,期间想尽各种办法取回羽衣,想要返回天宫',
			gl_xiaohongmao: '小时候父亲的逝去,加上曲解了同村人与命运之书的意思,而一直活在恐惧的阴影下.不过因为与某个少年的约定,使她获得了新的勇气',
			gl_guiji: '鬼族的公主,与桃太郎战斗便是其存在的意义.但是面对被反复清缴而濒临灭亡的鬼族,这位鬼族公主的心理逐渐发生了动摇',
			gl_taotailang: '人族的武士,清缴鬼族便是其存在的意义.旅途中驯服了鸡、狗、猴作为仆从,为了还人族的安宁与鬼族展开旷日持久的大战',
			gl_aileina: '不是为何失去了过去记忆的少女,突然出现在福音学院的门口.被福音学院的校长收养,并在福音学院中学习有关于<造物主>、<想区>、<英雄>之类的奇怪知识,向往着传说中的调律巫女.不论是体质还是学识都相当出众,但不知为何无法与任何<英雄>完成感应,依旧只能拿到最低的分数评价',
			gl_leina: '在年幼时想区被混沌毁灭,不知为何只有她一个人幸存了下来.在沉默之雾中无助的哭泣声中,一个温暖的声音缓缓在少女的耳边响起……许多年后,一个叫做调律巫女的名字在想区间传播开来',
		},
		skill: {
			gl_lianjie: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (lib.config.gelin.level === 0) return false;
					return lib.config.gelin.lianjie.length;
				},
				dualside(player) {
					if (!player.storage.gl_dualside) {
						player.storage.gl_dualside = {
							init: [player.name, player.hp, player.maxHp],
						};
					}
					if (player.storage.dualside && player.storage.dualside.length) {
						return;
					}
					player.unmarkSkill('dualside');
					delete player.storage.dualside;
					var storage = player.storage.gl_dualside;
					var list = player.storage.gl_lianjie;
					if (!list) return;
					storage.init.length = 3;
					for (let i = 0; i < list.length; i++) {
						var name = list[i];
						if (name && lib.character[name]) {
							var info = lib.character[name];
							if (info[3].includes('dualside') && info[4]) {
								for (var j = 0; j < info[4].length; j++) {
									if (info[4][j].indexOf('dualside:') == 0) {
										var name2 = info[4][j].slice(9);
										var info2 = lib.character[name2];
										if (storage[name] === false) continue;
										if (!storage[name]) {
											storage[name] = [get.infoHp(info2[2]), get.infoMaxHp(info2[2]), name2];
										}
										storage.init.push(name);
										player.markSkillCharacter(
											'dualside',
											{
												name: name2,
											},
											'背面',
											'当前体力:' + storage[name][0] + '/' + storage[name][1]
										);
										if (!player.storage.dualside) {
											player.storage.dualside = [];
										}
										if (player.isTurnedOver()) {
											lib.skill.gl_lianjie_turn.content(player, {
												name: 'dualside',
											});
										}
										break;
									}
								}
							}
						}
					}
				},
				update(player, func) {
					var names = player.storage.gl_lianjie;
					if (names) {
						var skills = [],
							sexs = [];
						for (let i = 0; i < names.length; i++) {
							var name = names[i];
							skills.addArray(lib.character[name][3]);
							sexs.add(lib.character[name][0]);
							if (i == 0) {
								player.node.avatar.setBackground(name, 'character');
								player.node.name.innerHTML = get.slimName(name);
							}
							if (i == 1) {
								player.classList.add('fullskin2');
								player.node.avatar2.setBackground(name, 'character');
								player.node.avatar2.show();
								player.node.name2.innerHTML = get.slimName(name);
							}
							if (typeof func == 'function') func(player, name);
						}
						skills.remove('dualside');
						player.addAdditionalSkill('gl_lianjie', skills);
						if (lib.config.gelin.amend.sex) {
							if (sexs.length == 1) player.sex = sexs[0];
							sexs.remove('unknown');
							if (sexs.length > 1) {
								player.sex = 'double';
							} else if (sexs.length == 0) {
								player.sex = 'unknown';
							} else {
								player.sex = sexs[0];
							}
						}
						if (lib.config.gelin.amend.dualside) lib.skill.gl_lianjie.dualside(player);
						if (lib.config.gelin.amend.group) player.changeGroup(lib.character[names[0]][1], false, false);
					} else {
						if (lib.config.gelin.amend.sex) player.sex = lib.character[player.name][0];
						if (lib.config.gelin.amend.group) player.changeGroup(lib.character[player.name][1], false, false);
					}
				},
				init(player) {
					this.update(player);
				},
				chooseButton: {
					dialog(event, player) {
						if (game.gl_lianjie[player.name]) {
							return game.gl_lianjie[player.name];
						}
						var list = [];
						list.push(player.name);
						var info = lib.character[player.name];
						var group = [];
						for (let i = 0; i < info[4].length; i++) {
							if (info[4][i].indexOf('gl:') == 0) {
								group = info[4][i].slice(3).split(':');
							}
						}
						var getGroup = function (name) {
							var list = get.is.double(name, true);
							if (list) {
								while (list.length) {
									if (group.includes(list.shift())) return true;
								}
								return false;
							} else {
								return group.includes(lib.character[character][1]);
							}
						};
						for (let i = 0; i < lib.config.gelin.lianjie.length; i++) {
							var character = lib.config.gelin.lianjie[i];
							if (!lib.character[character]) continue;
							if (getGroup(character) || group[0] == 'all') {
								list.add(character);
							}
						}
						game.gl_lianjie[player.name] = ui.create.gl_lianjie(list);
						return game.gl_lianjie[player.name];
					},
					filter(button, player) {
						var list = player.storage.gl_lianjie;
						if (!list) {
							if (player.name == button.link) {
								return false;
							}
						}
						if (ui.selected.buttons.length) {
							if (ui.selected.buttons[0].link == player.name) {
								return false;
							} else if (player.name == button.link) {
								return false;
							}
						}
						if (lib.config.gelin.level == 3 && get.mode() != 'xiangqv') {
							if (!player.storage.gl_lianjie) return true;
							if (ui.selected.buttons.length == 0 && button.link == list[0]) {
								return false;
							}
							if (ui.selected.buttons.length == 1 && button.link == list[1]) {
								return false;
							}
							return true;
						}
						if (player.storage.gl_lianjie) {
							if (list.includes(button.link)) {
								return false;
							}
						}
						return true;
					},
					select() {
						if (get.mode() == 'xiangqv' || _status.event.player.name2) return 1;
						if (lib.config.gelin.level == 3) return [1, 2];
						return 1;
					},
					check(button) {
						return 0;
					},
					backup(links, player) {
						return {
							name: links,
							delay: false,
							content: lib.skill.gl_lianjie.contentx,
						};
					},
				},
				contentx() {
					'step 0';
					event.names = lib.skill.gl_lianjie_backup.name;
					if (game.phaseNumber == 0 && lib.config.gelin.amend.hidden) event.hidden = true;
					event.bool = true;
					event.num = 0;
					if (event.names.length == 1) {
						player.classList.remove('fullskin2');
						player.node.avatar2.hide();
						player.node.name2.innerHTML = '';
					}
					if (lib.config.gelin.amend.hp) {
						event.hp = 0;
						event.maxHp = 0;
						if (player.storage.gl_lianjie) {
							for (const i of player.storage.gl_lianjie) {
								event.hp += get.infoHp(lib.character[i][2]);
								event.maxHp += get.infoMaxHp(lib.character[i][2]);
							}
						} else {
							event.hp += get.infoHp(lib.character[player.name][2]);
							event.maxHp += get.infoMaxHp(lib.character[player.name][2]);
						}
					}
					game.gl_cheli(player.storage.gl_lianjie, player);
					if (player.storage.gl_lianjie && player.storage.gl_lianjie[0] != player.name && lib.config.gelin.amend.retreat) {
						player.gl_retreat();
					}
					('step 1');
					if (event.num < event.names.length) {
						var name = event.names[event.num];
						var avatar = event.num == 0 ? 'avatar' : 'avatar2';
						var str = event.num == 0 ? 'name' : 'name2';
						var vice;
						if (event.num == 1) {
							player.classList.add('fullskin2');
							player.node.avatar2.show();
							vice = 'vice';
						}
						if (name != player.name) {
							player.node[avatar].setBackground(name, 'character');
							player.node[str].innerHTML = get.slimName(name);
							if (lib.character[name][4].includes('hiddenSkill') && event.hidden != undefined) {
								if (typeof event.hidden == 'number') {
									event.hidden = 2;
								} else {
									event.hidden = event.num;
								}
								event.num++;
								event.redo();
								return;
							}
							player.$skill('<span style="text-align:center;display:block">' + lib.translate[name] + '</br>给予你新的力量</span>', null, null, vice);
						} else {
							player.removeAdditionalSkill('gl_lianjie');
							player.node.avatar.setBackground(name, 'character');
							player.node.name.innerHTML = get.slimName(name);
							delete player.storage.gl_lianjie;
							if (lib.config.gelin.amend.hp) {
								var hp = get.infoHp(lib.character[player.name][2]);
								var maxHp = get.infoMaxHp(lib.character[player.name][2]);
								hp -= event.hp;
								player.hp += hp;
								maxHp -= event.maxHp;
								player.maxHp += maxHp;
								player.update();
							}
							event.bool = false;
							lib.skill.gl_lianjie.update(player);
						}
						event.num++;
						event.redo();
					}
					('step 2');
					if (event.bool) {
						player.storage.gl_lianjie = event.names;
						if (lib.config.gelin.amend.hp) {
							var hp = 0;
							var maxHp = 0;
							if (player.storage.gl_lianjie) {
								for (const i of player.storage.gl_lianjie) {
									hp += get.infoHp(lib.character[i][2]);
									maxHp += get.infoMaxHp(lib.character[i][2]);
								}
							}
							hp -= event.hp;
							player.hp += hp;
							maxHp -= event.maxHp;
							player.maxHp += maxHp;
							player.update();
						}
						lib.skill.gl_lianjie.update(player);
						if (typeof event.hidden == 'number') {
							player.$hideCharacter(event.hidden, true);
						}
						game.gl_qieti(player.storage.gl_lianjie, player);
						if (player.storage.gl_lianjie[0] != player.name && game.phaseNumber != 0 && lib.config.gelin.amend.enter) {
							game.triggerEnter(player);
						}
					}
					var parent = event.parent;
					while (parent) {
						if (parent.name == 'die' || parent.name == 'dying') return;
						parent = parent.parent;
					}
					player.dying();
				},
				group: ['gl_lianjie_start', 'gl_lianjie_show', 'gl_lianjie_turn'],
				subSkill: {
					start: {
						trigger: {
							global: 'gameStart',
						},
						filter(button, player) {
							if (lib.config.gelin.lianjie.length == 0) return false;
							if (lib.config.gelin.level === 0) return true;
							return lib.config.gelin.level && lib.config.gelin.level > 1;
						},
						forced: true,
						content() {
							'step 0';
							if (lib.config.gelin.level === 0 && game.me == player) {
								var list = [];
								var info = lib.character[player.name];
								var group = [];
								for (let i = 0; i < info[4].length; i++) {
									if (info[4][i].indexOf('gl:') == 0) {
										group = info[4][i].slice(3).split(':');
									}
								}
								for (let i = 0; i < lib.config.gelin.lianjie.length; i++) {
									var character = lib.config.gelin.lianjie[i];
									if (!lib.character[character]) continue;
									if (character.indexOf('gl') != 0) continue;
									if (group.includes(lib.character[character][1]) || group[0] == 'all') {
										if (!list.includes(character)) {
											list.push(character);
										}
									}
								}
								if (list.length) {
									event._result = {
										bool: true,
										links: [list.randomGet()],
									};
								}
							} else {
								var info = lib.skill.gl_lianjie;
								var dialog = info.chooseButton.dialog(event, player);
								var next = player.chooseButton(dialog);
								next.set('selectButton', info.chooseButton.select);
								next.set('filterButton', info.chooseButton.filter);
								next.set('ai', info.chooseButton.check);
							}
							('step 1');
							if (result.bool) {
								var info = lib.skill.gl_lianjie.chooseButton;
								lib.skill.gl_lianjie_backup = info.backup(result.links, player);
								lib.skill.gl_lianjie_backup.sourceSkill = 'gl_lianjie';
								var next = game.createEvent('gl_lianjie');
								next.player = player;
								next.setContent(lib.skill.gl_lianjie.contentx);
							}
						},
					},
					show: {
						trigger: {
							player: 'showCharacterEnd',
						},
						_priority: 99,
						filter(event, player) {
							return player.storage.gl_lianjie;
						},
						forced: true,
						content() {
							lib.skill.gl_lianjie.update(player);
							trigger.toShow.addArray(player.storage.gl_lianjie);
						},
					},
					turn: {
						trigger: {
							player: ['turnOverAfter', 'dieBefore'],
						},
						silent: true,
						filter(event, player) {
							if (!player.storage.dualside) return false;
							if (!player.storage.gl_dualside) return false;
							if (!player.storage.gl_lianjie) return false;
							var lianjie = player.storage.gl_lianjie;
							var storage = player.storage.gl_dualside;
							var name = storage.init[3];
							if (!name) return false;
							if (storage[name][2] == player.name || storage[name][2] == player.name1 || storage[name][2] == player.name2) {
								return true;
							}
							for (let i = 0; i < lianjie.length; i++) {
								if (name == lianjie[i]) return true;
							}
							return false;
						},
						content() {
							var lianjie = player.storage.gl_lianjie;
							var storage = player.storage.gl_dualside;
							for (let i = 0; i < lianjie.length; i++) {
								var name = storage.init[3];
								if (name == lianjie[i]) {
									var cfg = storage[name];
								}
							}
							var bool = player.isTurnedOver();
							if (trigger.name == 'die') {
								bool = !bool;
							}
							if (bool) {
								storage.init[1] = player.hp;
								storage.init[2] = player.maxHp;
								player.reinit(storage.init[0], cfg[2], [cfg[0], cfg[1]]);
								player.unmarkSkill('dualside');
								player.removeSkill('dualside');
								player.addSkill('gl_lianjie_turn');
								player.markSkillCharacter(
									'dualside',
									{
										name: storage.init[0],
									},
									'正面',
									'当前体力:' + storage.init[1] + '/' + storage.init[2]
								);
							} else {
								if (trigger.name == 'die') {
									storage[name] = false;
								}
								cfg[0] = player.hp;
								cfg[1] = player.maxHp;
								player.removeSkill('gl_lianjie_turn');
								player.reinit(cfg[2], storage.init[0], [storage.init[1], storage.init[2]]);
								player.unmarkSkill('dualside');
								player.markSkillCharacter(
									'dualside',
									{
										name: cfg[2],
									},
									'背面',
									'当前体力:' + cfg[0] + '/' + cfg[1]
								);
							}
							if (trigger.name == 'die') {
								trigger.cancel();
								delete player.storage.dualside;
								player.unmarkSkill('dualside');
							}
						},
					},
				},
			},
			_gl_qiyue: {
				trigger: {
					source: 'dieBefore',
				},
				_priority: -50,
				filter(event, player) {
					return player == game.me;
				},
				filter1(target, player) {
					if (lib.config.gelin.lianjie.includes(target.name)) return false;
					if (target.name.indexOf('gl_') == 0) return false;
					if (target.name.indexOf('hundun_') == 0) return false;
					return player.hasSkill('gl_lianjie');
				},
				forced: true,
				content() {
					if (lib.skill._gl_qiyue.filter1(trigger.player, player)) {
						game.gl_gain(trigger.player.name);
						player.popup('契约');
					}
					var type = ['power', 'defense', 'recover', 'magic'];
					switch (trigger.player.group) {
						case 'shu':
							type = type[0];
							break;
						case 'wei':
							type = type[1];
							break;
						case 'wu':
							type = type[2];
							break;
						case 'qun':
							type = type[3];
							break;
						default:
							type = type.randomGet();
							break;
					}
					game.gl_gainNature(player.name, type, 1);
					var storage = player.storage.gl_lianjie;
					if (storage) {
						for (let i = 0; i < storage.length; i++) {
							game.gl_gainNature(storage[i], type, 1);
						}
					}
				},
			},
			gl_huohuan2: {
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
				},
				_priority: -5,
				filter(event, player) {
					return event.source && event.source != event.player;
				},
				forced: true,
				content() {
					trigger.source.damage('fire', 'nosource');
					trigger.player.damage('fire', 'nosource');
				},
				ai: {
					maixie_defend: true,
					effect: {
						target(card, player, target) {
							return 0.8;
						},
					},
				},
				group: 'gl_huohuan2_cancel',
				subSkill: {
					cancel: {
						trigger: {
							global: ['phaseBefore', 'dieAfter'],
						},
						_priority: 50,
						silent: true,
						charlotte: true,
						filter(event, player) {
							return event.player == player.storage.gl_huohuan2;
						},
						content() {
							player.removeSkill('gl_huohuan2');
						},
						forced: true,
						popup: false,
					},
				},
			},
			gl_hundun: {
				trigger: {
					player: 'phaseBefore',
				},
				forced: true,
				_priority: 101,
				firstDo: true,
				content() {
					player.gl_purge();
					player.turnOver(false);
					player.link(false);
					player.discard(player.getCards('j'));
				},
				ai: {
					noturn: true,
					effect: {
						target(card) {
							if (card.name == 'tiesuo') return 'zeroplayertarget';
							if (get.type(card) == 'delay') return 'zeroplayertarget';
						},
					},
				},
			},
			gl_huohuan: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				content() {
					target.storage.gl_huohuan2 = player;
					target.addSkill('gl_huohuan2');
				},
			},
			gl_shihuai: {
				trigger: {
					player: 'dying',
				},
				round: 1,
				forced: true,
				content() {
					'step 0';
					player.chooseDrawRecover(2);
					('step 1');
					if (result.control == 'draw_card') {
						_status.currentPhase.recover();
					} else if (result.control == 'recover_hp') {
						_status.currentPhase.draw(2);
					}
					if (result.control != 'cancel2') {
					}
				},
				group: ['gl_shihuai_roundcount'],
			},
			gl_huangkong: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				filter(event, player) {
					return ui.discardPile.childNodes.length;
				},
				content() {
					'step 0';
					player.chooseButton(['惶恐:选择要获得的牌', Array.from(ui.discardPile.childNodes)]);
					('step 1');
					if (result.bool && result.links && result.links.length) {
						player.gain(result.links, 'gain2', 'log').gaintag.push('gl_huangkong');
					}
				},
				group: 'gl_huangkong_card',
				subSkill: {
					card: {
						trigger: {
							player: 'loseAfter',
						},
						filter(event, player) {
							for (var i in event.gaintag_map) {
								if (event.gaintag_map[i].includes('gl_huangkong')) return true;
							}
							return false;
						},
						content() {
							'step 0';
							event.cards = [];
							for (const i of trigger.cards) {
								if (trigger.gaintag_map[i.cardid]) {
									event.cards.push(i);
								}
							}
							if (event.cards.length == 0) {
								event.finish();
							}
							('step 1');
							event.cards2 = event.cards.filterInD('cdo');
							if (event.cards.length > 1) {
								var next = player.chooseToMove('惶恐:将牌按顺序置于牌堆顶');
								next.set('list', [['牌堆顶', event.cards]]);
							}
							('step 2');
							if (result.bool && result.moved && result.moved[0].length) {
								cards = result.moved[0].slice(0);
							}
							while (cards.length) {
								var card = cards.pop();
								card.fix();
								ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
								game.log(player, '将', card, '置于牌堆顶');
							}
							game.updateRoundNumber();
						},
						forced: true,
						popup: false,
					},
				},
			},
			gl_mengchen: {
				enable: 'phaseUse',
				filter(event, player) {
					return player.countCards('he');
				},
				filterTarget(card, player, target) {
					return target.countCards('he') && target != player;
				},
				content() {
					'step 0';
					target.chooseToDiscard('he', true);
					if (!target.hasSkill('gl_mengchen_draw')) {
						target.storage.gl_mengchen = 0;
						target.addTempSkill('gl_mengchen_draw', 'phaseUseAfter');
					}
					target.storage.gl_mengchen++;
					('step 1');
					player.chooseToDiscard('he', true);
					if (!player.hasSkill('gl_mengchen_draw')) {
						player.storage.gl_mengchen = 0;
						player.addTempSkill('gl_mengchen_draw', 'phaseUseAfter');
					}
					player.storage.gl_mengchen++;
				},
				subSkill: {
					draw: {
						charlotte: true,
						onremove(player) {
							player.draw(player.storage.gl_mengchen);
						},
					},
				},
			},
			// 当你不因使用而失去装备牌后,你可以令1名角色选择以下一项:1,使用一张【杀】;2,失去一点体力并获得两层<激昂>
			gl_jili: {
				trigger: {
					player: 'loseAfter',
				},
				filter(event, player) {
					if (event.parent.name == 'useCard') return false;
					if (event.cards2 && event.cards2.length) {
						for (var card of event.cards2) {
							if (get.type(card) == 'equip') return true;
						}
					}
					return false;
				},
				async content(event, trigger, player) {
					const { targets } = await player
						.chooseTarget('令1名角色选择一项:1,使用一张【杀】;2,失去一点体力并获得两层<激昂>')
						.set('ai', (t) => get.attitude(player, t))
						.forResult();
					if (targets?.length) {
						player.line(targets[0], 'thunder');
						const { result } = await targets[0]
							.chooseToUse('激励:使用一张杀,否则失去一点体力并获得两层激昂', function (card) {
								if (card.name != 'sha') return false;
								return lib.filter.cardEnabled.apply(this, arguments);
							})
							.set('addCount', false);
						if (result.bool == false) {
							targets[0].loseHp();
							targets[0].gl_changeBuff('gl_jiang', 2);
						}
					}
				}, //QQQ
			},
			gl_jingxin: {
				gl_wuzhuang: {
					name: 'gl_shuijingxie',
					suit: 'club',
					number: 6,
				},
				derivation: ['gl_shuijingxie'],
				trigger: {
					player: 'recoverAfter',
				},
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current.hp < player.hp && current.getDamagedHp() != 0;
					});
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2('gl_jingxin'), function (card, player, target) {
						return player.hp > target.hp && target.getDamagedHp() != 0;
					});
					('step 1');
					if (result.bool) {
						var num = player.hp - result.targets[0].hp;
						result.targets[0].recover(num);
					}
				},
				group: 'gl_jingxin_gain',
				subSkill: {
					gain: {
						trigger: {
							player: 'gainAfter',
						},
						prompt: '是否武装【晶心】？',
						filter(event, player) {
							return event.player != player || event.parent.name != 'draw' || event.getParent(2).name != 'phaseDraw';
						},
						content() {
							player.gl_wuzhuang('gl_jingxin');
						},
					},
				},
			},
			gl_huanxiang: {
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha';
				},
				forced: true,
				content() {
					'step 0';
					var list = [];
					for (let i = 0; i < lib.inpile.length; i++) {
						var type = get.type(lib.inpile[i]);
						if (lib.inpile[i] == 'sha') continue;
						if (type == 'basic') {
							list.push(['基本', '', lib.inpile[i]]);
						} else if (type == 'trick') {
							list.push(['锦囊', '', lib.inpile[i]]);
						}
					}
					player.chooseButton(['幻想:请宣言一个牌名', [list, 'vcard']]).set('filterButton', function (button) {
						var info = lib.card[button.link[2]];
						if (info.notarget) return false;
						if (info.contentBefore) return false;
						if (info.contentAfter) return false;
						return info.content;
					});
					('step 1');
					if (result.bool) {
						trigger.card.huanxiang = result.links[0][2];
					}
				},
			},
			gl_qiji: {
				trigger: {
					player: 'dyingBefore',
				},
				filter(event, player) {
					return player.countCards('h') && !player.gl_qiji;
				},
				async content(event, trigger, player) {
					player.gl_changeBuff('gl_jinliao', 3);
					await player.loseToSpecial(player.getCards('h'), 'gl_qiji');
					const cards = player.getCards('hs', (card) => card.hasGaintag('gl_qiji'));
					let num = 9;
					player.gl_qiji = true;
					for (const card of cards) {
						if (num-- <= 0) break;
						await player.chooseUseTarget(
							{
								name: 'sha',
								storage: { gl_qiji: true },
							},
							[card],
							true,
							false,
							'nodistance'
						);
					}
					player.gl_qiji = false;
				}, //QQQ
				group: 'gl_qiji_die',
				subSkill: {
					die: {
						trigger: {
							global: 'dieAfter',
						},
						forced: true,
						filter(event, player) {
							return player.storage.gl_buff && Object.keys(player.storage.gl_buff).length;
						}, //QQQ
						content() {
							player.gl_purge();
							player.draw(Object.keys(player.storage.gl_buff).length);
						},
					},
				},
			},
			gl_shuyi: {
				trigger: {
					player: 'useCard1',
				},
				forced: true,
				filter(event, player) {
					return event.card && event.card.isCard && event.card.name == 'sha' && event.cards.length == 1 && event.cards[0].name != 'jiu';
				},
				content() { },
				mod: {
					maxHandcard(player, num) {
						return num + player.maxHp - player.hp;
					},
					targetEnabled(card, player, target, now) {
						if (target == player && card.name == 'sha') {
							return true;
						}
					},
					targetInRange(card, player, target, now) {
						if (target == player && card.name == 'sha') {
							return true;
						}
					},
					cardname(card, player, name) {
						if (_status.currentPhase != player) return;
						if (player.getHistory('useCard').length) return;
						if (get.position(card) == 'h') return 'sha';
					},
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + player.maxHp - player.hp;
					},
				},
			},
			gl_mozhuang: {
				enable: 'phaseUse',
				usable: 1,
				position: 'he',
				filterCard: true,
				selectCard: [1, Infinity],
				filterTarget: true,
				content() {
					'step 0';
					var list = [];
					for (let i = 0; i < ui.cardPile.childElementCount; i++) {
						var node = ui.cardPile.childNodes[i];
						if (get.type(node) == 'equip') {
							list.push(node);
						}
					}
					for (let i = 0; i < ui.discardPile.childElementCount; i++) {
						var node = ui.discardPile.childNodes[i];
						if (get.type(node) == 'equip') {
							list.push(node);
						}
					}
					player.chooseButton(true, ['魔装:选择要置入的牌', list], event.cards.length).set('filterButton', function (button) {
						var card = button.link;
						var list = [];
						for (let i = 0; i < ui.selected.buttons.length; i++) {
							list.push(get.subtype(ui.selected.buttons[i].link));
						}
						if (list.includes(get.subtype(card))) return false;
						return true;
					});
					('step 1');
					if (result.bool && result.links && result.links.length) {
						player.addSkill('gl_mozhuang_discard');
						while (result.links.length) {
							var card = result.links.shift();
							target.equip(card);
							card.addGaintag('gl_mozhuang');
						}
					}
				},
				subSkill: {
					discard: {
						trigger: {
							player: 'phaseUseBegin',
						},
						_priority: 10,
						charlotte: true,
						content() {
							player.removeSkill('gl_mozhuang_discard');
							var num = 0;
							for (const i of game.players) {
								var cards = i.getCards('e', function (card) {
									return card.hasGaintag('gl_mozhuang');
								});
								if (cards.length) {
									i.$throw(cards, 1000);
									i.lose(cards, ui.discardPile, 'visible');
									game.log(i, '将', cards, '置入弃牌堆');
									num += cards.length;
								}
							}
							player.draw(num);
						},
						forced: true,
					},
				},
			},
			gl_jieyou: {
				enable: 'chooseToUse',
				usable: 2,
				prompt(event) {
					var player = event.player;
					var name = '无懈可击';
					var mincard = player.isMinHandcard(),
						minhp = player.isMinHp();
					if (minhp) name = '桃';
					if (mincard) name = '无中生有';
					if (mincard && minhp) name = '流星火雨';
					return '解忧:请选择1张装备牌当【' + name + '】使用';
				},
				viewAs(cards, player) {
					var name = 'wuxie';
					var mincard = player.isMinHandcard(),
						minhp = player.isMinHp();
					if (minhp) name = 'tao';
					if (mincard) name = 'wuzhong';
					if (mincard && minhp) name = 'liuxinghuoyu';
					return {
						name: name,
					};
				},
				position: 'hes',
				filterCard: {
					type: 'equip',
				},
				filter(event, player) {
					if (
						player.countCards('hes', {
							type: 'equip',
						}) == 0
					)
						return false;
					var name = 'wuxie';
					var mincard = player.isMinHandcard(),
						minhp = player.isMinHp();
					if (minhp) name = 'tao';
					if (mincard) name = 'wuzhong';
					if (mincard && minhp) name = 'liuxinghuoyu';
					if (
						event.filterCard(
							{
								name: name,
							},
							player,
							event
						)
					)
						return true;
					return false;
				},
				hiddenCard(player, card) {
					if (
						player.countCards('hes', {
							type: 'equip',
						}) == 0
					)
						return false;
					var name = 'wuxie';
					var mincard = player.isMinHandcard(),
						minhp = player.isMinHp();
					if (minhp) name = 'tao';
					if (mincard) name = 'wuzhong';
					if (mincard && minhp) name = 'liuxinghuoyu';
					return card == name;
				},
			},
			gl_pianai: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2('gl_pianai'), [1, Infinity], function (card, player, target) {
						return target != player;
					});
					('step 1');
					if (result.bool) {
						player.storage.gl_pianai = result.targets;
						player.loseHp(result.targets.length);
						player.addTempSkill('gl_pianai_use');
					}
				},
				subSkill: {
					use: {
						trigger: {
							player: 'useCard2',
						},
						forced: true,
						filter(event, player) {
							var type = get.type(event.card);
							if (type != 'basic' && type != 'trick') return false;
							var targets = player.storage.gl_pianai;
							for (let i = 0; i < targets.length; i++) {
								if (!targets[i].isAlive()) continue;
								if (event.targets.includes(targets[i])) continue;
								if (lib.filter.targetEnabled2(event.card, player, targets[i])) return true;
							}
							return false;
						},
						content() {
							trigger.targets.addArray(player.storage.gl_pianai);
						},
					},
				},
			},
			gl_duguo: {
				enable: 'phaseUse',
				filterCard(card, player) {
					var type = get.type(card, 'trick');
					return type == 'trick' || type == 'basic';
				},
				filterTarget(card, player, target) {
					return target.isDamaged();
				},
				filter(event, player) {
					return player.hasCard(function (card) {
						var type = get.type(card, 'trick');
						return type == 'trick' || type == 'basic';
					}, 'h');
				},
				content() {
					target.addTempSkill('gl_duguo2', {
						player: 'phaseAfter',
					});
					target.storage.gl_duguo2.addArray(cards);
					player.lose(cards, ui.special, 'toStorage');
					game.log(player, '将', cards, '置于', target, '的武将牌上作为<果>');
					player.useCard(
						{
							name: 'tao',
						},
						target
					);
				},
				ai: {
					result: {
						target(player, target) {
							var num = get.effect(
								player,
								{
									name: 'tao',
								},
								target,
								target
							);
							num -= 2;
							return num;
						},
					},
					order: 12,
					basic: {
						order: 1,
						useful: 1,
						value: 8,
					},
					tag: {
						recover: 1,
						save: 1,
					},
				},
			},
			gl_duguo2: {
				mark: true,
				mod: {
					cardEnabled2(card, player) {
						if (_status.currentPhase != player) return false;
						if (_status.event.skill == 'gl_duguo2_backup') {
							return;
						}
						if (get.position(card) == 'h') return false;
					},
				},
				init(player) {
					player.storage.gl_duguo2 = [];
				},
				marktext: '果',
				intro: {
					content: 'cards',
					onunmark(storage, player) {
						if (storage && storage.length) {
							player.$throw(storage, 1000);
							game.cardsDiscard(storage);
							game.log(storage, '被置入了弃牌堆');
							storage.length = 0;
						}
						player.storage.gl_duguo2 = [];
					},
					mark(dialog, content, player) {
						if (content && content.length) {
							dialog.add('你的回合内,你不用此法不能使用或打出手牌;出牌阶段限3次,你可以将1张手牌当以下1张牌使用');
							dialog.addAuto(content);
						}
					},
				},
				enable: 'phaseUse',
				usable: 3,
				filter(event, player) {
					return event.type != 'wuxie' && player.countCards('h') > 0 && player.getStorage('gl_duguo2').length;
				}, //QQQ
				hiddenCard(player, name) {
					var list = [];
					var cards = player.getStorage('gl_duguo2');
					for (let i = 0; i < cards.length; i++) {
						list.push(cards[i].name);
					}
					return list.includes(name) && player.countCards('h') > 0;
				},
				chooseButton: {
					dialog(event, player) {
						return ui.create.dialog('毒果', player.getStorage('gl_duguo2'));
					},
					filter(button, player) {
						return _status.event.parent.filterCard(button.link, player, _status.event.parent);
					},
					check(button) {
						var player = _status.event.player;
						var effect = player.getUseValue(button.link);
						if (effect > 0) return effect;
						return 0;
					},
					backup(links, player) {
						return {
							filterCard: true,
							selectCard: 1,
							check(card) {
								return 11 - get.value(card);
							},
							position: 'hs',
							viewAs: links[0],
						};
					},
					prompt(links, player) {
						return '将一张牌当做' + get.translation(links[0]) + '使用';
					},
				},
				ai: {
					order: 4,
					result: {
						player: 1,
					},
					threaten: 1.9,
				},
			},
			gl_chengren: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target && target.getDamagedHp();
				},
				content() {
					'step 0';
					var num = target.getDamagedHp();
					event.num = num;
					target.recover(num);
					player.loseHp(num);
					('step 1');
					player.gainPlayerCard('he', target, true, event.num * 2);
				},
				ai: {
					order: 1,
					result: {
						player: 1,
						target(player, target) {
							return get.attitude(player, target);
						},
					},
				},
			},
			gl_shixin: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt(event.name));
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						target.draw();
						target.loseHp();
						target.gl_eventAfter(
							'gl_shixin',
							function () {
								player.recover();
							},
							trigger
						);
					}
				},
				ai: {
					order: 1,
					result: {
						player: 1,
						target(player, target) {
							return get.attitude(player, target);
						},
					},
				},
			},
			gl_tudu: {
				mod: {
					maxHandcard(player, num) {
						if (_status.currentPhase != player) return;
						if (player.hp > 3) return;
						return num - 1;
					},
					selectTarget(card, player, range) {
						if (_status.event.name && _status.event.name != 'chooseToUse') return;
						if (_status.currentPhase != player) return;
						if (player.hp > 2) return;
						range[1] = -1;
						range[0] = -1;
					},
					cardname(card, player, name) {
						if (_status.currentPhase != player) return;
						if (player.hp > 1) return;
						if (get.position(card) == 'h') return 'sha';
					},
					cardUsable(card, player, num) {
						if (_status.currentPhase != player) return;
						if (player.hp > 1) return;
						if (card.name == 'sha') return Infinity;
					},
				},
				trigger: {
					player: 'useCardBefore',
				},
				filter(event, player) {
					if (_status.currentPhase != player) return false;
					if (player.hp > 2) return false;
					return event.targets && event.targets.length;
				},
				_priority: 50,
				forced: true,
				content() {
					var num = lib.filter.selectTarget(trigger.card, player);
					if (num[1] > 0) {
						var list = ui.selected.targets.slice(0);
						ui.selected.targets.length = 0;
						var range = num[0];
						if (num[0] != num[1]) {
							var bool = num[1] - num[0] + 1;
							range = Math.floor(Math.random() * bool + num[0]);
						}
						var targets;
						for (let i = 0; i < range; i++) {
							targets = game.filterPlayer(function (current) {
								return player.canUse(trigger.card, current);
							});
							ui.selected.targets.push(targets.randomGet());
						}
						trigger.targets = ui.selected.targets.slice(0);
						ui.selected.targets = list;
					}
				},
				group: 'gl_tudu_draw',
				subSkill: {
					draw: {
						trigger: {
							global: 'phaseDrawBegin2',
						},
						forced: true,
						filter(event, player) {
							if (_status.currentPhase != player) return false;
							if (player.hp > 3) return false;
							return !event.numFixed;
						},
						content() {
							trigger.num++;
						},
					},
				},
			},
			gl_leihuan: {
				enable: 'phaseUse',
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.gl_statSKill('gl_leihuan', current) < 2;
					});
				},
				filterTarget(card, player, target) {
					return player.gl_statSKill('gl_leihuan', target) < 2;
				},
				content() {
					'step 0';
					player.gl_statSKill('gl_leihuan', 1, target);
					target
						.chooseToDiscard(2)
						.set('ai', function (card) {
							var player = _status.event.player;
							if (player.hp == player.maxHp) return 0;
							if (player.hp == 1 && _status.event.goon) return 0;
							if (card.name == 'tao') return -10;
							if (card.name == 'jiu' && player.hp == 1) return -10;
							return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
						})
						.set('goon', get.attitude(target, player) > 2);
					('step 1');
					if (result.bool) {
						target.recover();
					} else {
						target.draw(2);
						target.loseHp();
					}
				},
			},
			gl_jiming: {
				mod: {
					playerEnabled(card, player, target) {
						if (player.storage.gl_jiming.includes(target)) return false;
					},
				},
				init(player) {
					if (!player.storage.gl_jiming) player.storage.gl_jiming = [];
				},
				trigger: {
					global: 'dying',
				},
				filter(event, player) {
					if (_status.currentPhase != player) return false;
					return event.player.countCards('he') > 1 && player != event.player;
				},
				forced: true,
				content() {
					'step 0';
					player
						.gainPlayerCard('获得其两张牌本回合不能使用牌指定其为目标', 'he', trigger.player, 2)
						.set('ai', function (b) {
							if (_status.event.goon) {
								return 10;
							}
							return 0;
						})
						.set('goon', get.attitude(player, trigger.player) > 0);
					('step 1');
					if (result.cards && result.cards.length) {
						trigger.player.recover();
						player.gl_eventAfter('gl_jiming', function () {
							player.storage.gl_jiming = [];
						});
						player.storage.gl_jiming.push(trigger.player);
					}
				},
			},
			gl_huanmo: {
				trigger: {
					player: 'useCardAfter',
				},
				init(player) {
					if (!player.storage.gl_huanmo) player.storage.gl_huanmo = [];
				},
				filter(event, player) {
					if (player.storage.gl_huanmo_lose) return false;
					return _status.currentPhase && player.hp > 1 && player.countCards('h') > 0;
				}, //QQQ
				forced: true,
				content() {
					'step 0';
					var next = _status.currentPhase.chooseToDiscard('h', '幻沫:请弃置1张牌或失去1点体力');
					next.ai = function (card) {
						if (player.storage.gl_huanmo) {
							if (player.storage.gl_huanmo.includes(card)) return 11;
						}
						return 11 - get.value(card);
					};
					('step 1');
					if (result.bool) {
						var suit = result.cards.suit;
						player.addTempSkill('gl_huanmo_lose');
						if (player.storage.gl_huanmo.includes(suit)) {
							player.storage.gl_huanmo_lose = true;
						}
						player.storage.gl_huanmo.add(suit);
					} else {
						_status.currentPhase.loseHp();
					}
				},
				subSkill: {
					lose: {
						mark: true,
						intro: {
							content(storage, player) {
								if (player.storage.gl_huanmo_lose) return '幻沫已失效';
								return '本回合已因此法弃置的花色:' + get.translation(player.storage.gl_huanmo);
							},
							onunmark(storage, player) {
								player.storage.gl_huanmo = [];
								delete player.storage.gl_huanmo_lose;
							},
						},
						charlotte: true,
					},
				},
			},
			gl_shengyou: {
				enable: ['chooseToUse', 'chooseToRespond'],
				hiddenCard(player, name) {
					var type = get.type(name);
					if (type != 'basic' && type != 'trick') return false;
					return player.countCards('h') == 0;
				},
				filter(event, player) {
					return player.countCards('h') == 0;
				},
				init(player) {
					if (!player.storage.gl_shengyou) player.storage.gl_shengyou = [];
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						for (let i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (player.storage.gl_shengyou && player.storage.gl_shengyou.includes(name)) {
								continue;
							}
							if (name == 'sha') {
								list.push(['基本', '', 'sha']);
								for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
							} else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
							else if (get.type(name) == 'basic') list.push(['基本', '', name]);
						}
						if (list.length == 0) {
							return ui.create.dialog('圣佑已无可用牌');
						}
						return ui.create.dialog('圣佑', [list, 'vcard'], 'hidden');
					},
					filter(button, player) {
						return _status.event.parent.filterCard(
							{
								name: button.link[2],
							},
							player,
							_status.event.parent
						);
					},
					backup(links, player) {
						return {
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
						};
					},
					prompt(links, player) {
						return '摸' + player.hp + '张牌并视为使用或打出' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
					},
				},
				ai: {
					order: 5,
					result: {
						player: 1,
					},
					respondSha: true,
					respondShan: true,
					fireAttack: true,
				},
				group: 'gl_shengyou_draw',
				subSkill: {
					lose: {
						onremove(player) {
							player.storage.gl_shengyou = [];
						},
						charlotte: true,
					},
					draw: {
						trigger: {
							player: ['useCardBegin', 'respondBegin'],
						},
						filter(event, player) {
							return event.skill == 'gl_shengyou_backup';
						},
						forced: true,
						silent: true,
						content() {
							player.storage.gl_shengyou.add(trigger.card.name);
							player.addTempSkill('gl_shengyou_lose');
							player.draw(player.hp);
						},
						popup: false,
					},
				},
			},
			gl_tongxin: {
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return player.countCards('h');
				},
				forced: true,
				content() {
					'step 0';
					player.chooseCardTarget({
						prompt: get.prompt2('gl_tongxin'),
						selectCard: [1, Infinity],
						filterCard: true,
						filterTarget: lib.filter.notMe,
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						event.target.gain(result.cards, player, 'giveAuto');
						event.target.chooseCard(
							'通心:交给' + get.translation(player) + '等量的牌或不能使用或打出牌直至回合结束',
							result.cards.length,
							function (card) {
								return !result.cards.includes(card);
							},
							function (card) {
								return 11 - get.value(card);
							}
						);
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						player.gain(result.cards, event.target, 'giveAuto');
					} else {
						event.target.addTempSkill('gl_tongxin2');
					}
				},
			},
			gl_tongxin2: {
				mod: {
					cardEnabled2(card, player) {
						if (get.position(card) == 'h') return false;
					},
				},
				charlotte: true,
			},
			gl_wangnian: {
				trigger: {
					global: 'phaseEnd',
				},
				content() {
					'step 0';
					event.targets = game.players.slice(0);
					('step 1');
					while (event.targets.length) {
						var target = event.targets.shift();
						var num = Math.max(0, player.hp - target.countCards('h'));
						if (target.countCards('h') < num) {
							target.draw(num - target.countCards('h'));
						} else if (target.countCards('h') > num) {
							target.chooseToDiscard(true, target.countCards('h') - num);
						}
					}
				},
			},
			gl_shidao: {
				trigger: {
					global: 'damageEnd',
				},
				filter(event, player) {
					return event.source && event.source != player;
				},
				forced: true,
				content() {
					player.chooseToUse({
						filterTarget: trigger.source,
						selectTarget: -1,
						prompt: '侍道:选择1张牌,仅对' + get.translation(trigger.source) + '使用',
						targetRequired: true,
					});
				},
				group: 'gl_shidao_damage',
				subSkill: {
					damage: {
						trigger: {
							source: 'damageSource',
						},
						forced: true,
						filter(event, player, name) {
							if (!event.card) return false;
							var evt = event.parent;
							return evt && evt.card == event.card && evt.type == 'card' && evt.targets && evt.targets.length == 1;
						},
						content() {
							'step 0';
							player.chooseTarget('侍道:是否令1名角色回复1点体力？', function (card, player, target) {
								return target.getDamagedHp() != 0;
							});
							('step 1');
							if (result.bool) {
								result.targets[0].recover();
							}
						},
					},
				},
				ai: {
					threaten: 2,
				},
			},
			gl_zhenhu: {
				enable: ['chooseToUse', 'chooseToRespond'],
				hiddenCard(player, name) {
					if (!['sha', 'juedou'].includes(name)) return false;
					return player.countCards('h');
				},
				filter(event, player) {
					if (player.countCards('h') == 0) return false;
					if (
						event.filterCard(
							{
								name: 'sha',
							},
							player,
							event
						) ||
						event.filterCard(
							{
								name: 'juedou',
							},
							player,
							event
						)
					) {
						return true;
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						if (
							event.filterCard(
								{
									name: 'sha',
								},
								player,
								event
							)
						) {
							list.push(['基本', '', 'sha']);
						}
						if (
							event.filterCard(
								{
									name: 'juedou',
								},
								player,
								event
							)
						) {
							list.push(['锦囊', '', 'juedou']);
						}
						return ui.create.dialog('振呼', [list, 'vcard'], 'hidden');
					},
					backup(links, player) {
						return {
							filterCard: true,
							selectCard: -1,
							viewAs: {
								name: links[0][2],
							},
						};
					},
					prompt(links, player) {
						return '将所有手牌当' + get.translation(links[0][2]) + '使用或打出';
					},
				},
				group: 'gl_zhenhu_bool',
				subSkill: {
					bool: {
						trigger: {
							player: ['useCard', 'respond'],
						},
						usable: 1,
						logTarget: 'targets',
						filter(event, player) {
							return event.skill == 'gl_zhenhu_backup';
						},
						forced: true,
						content() {
							'step 0';
							if (event.current == undefined) event.current = player.next;
							if (event.current.countCards('h')) {
								var next = event.current.chooseBool('是否将所有手牌交给' + get.translation(player) + '？');
								next.ai = function () {
									return get.attitude(event.current, player) > 0;
								};
							}
							('step 1');
							if (result.bool) {
								player.gain(event.current.getCards('h'), event.current, 'giveAuto');
							}
							if (event.current.next != player) {
								event.current = event.current.next;
								event.goto(0);
							}
						},
					},
				},
			},
			gl_lingshuang: {
				trigger: {
					player: 'loseAfter',
				},
				forced: true,
				filter(event, player) {
					return event.type == 'discard';
				},
				gl_delay: {
					filter(player) {
						return player.countCards('h');
					},
					content() {
						'step 0';
						var next = player.chooseToUse();
						next.set('norestore', true);
						next.set('openskilldialog', '凌霜:将一张手牌当【冰杀】对至多三名角色使用' + event.getNum('prompt'));
						next.set('_backupevent', 'gl_lingshuang_backup');
						next.backup('gl_lingshuang_backup');
						('step 1');
						if (result.bool && event.getNum(-1) > 0 && player.countCards('h')) {
							event.goto(0);
						}
					},
				},
				content() {
					player.gl_delay('gl_lingshuang');
				},
				subSkill: {
					backup: {
						filterCard(card, player) {
							return get.itemtype(card) == 'card';
						},
						filterTarget(card, player, target) {
							return player.canUse(card, target, false);
						},
						viewAs: {
							name: 'sha',
							nature: 'ice',
						},
						selectCard: 1,
						position: 'hs',
						popname: true,
						selectTarget: [1, 3],
					},
				},
			},
			gl_changnian: {
				trigger: {
					player: 'changeHp',
					global: 'loseAfter',
				},
				filter(event, player) {
					if (event.name == 'changeHp') return true;
					return event.type == 'discard';
				},
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = 0;
				},
				forced: true,
				_priority: 5,
				content() {
					if (trigger.name == 'changeHp') {
						player.draw();
					} else {
						player.storage.gl_changnian += trigger.cards.length;
						while (player.storage.gl_changnian >= 4) {
							player.storage.gl_changnian -= 4;
							player.recover();
						}
					}
				},
			},
			gl_tongkai: {
				enable: 'phaseUse',
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.gl_statSKill('gl_tongkai', current) < 1;
					});
				},
				filterTarget(card, player, target) {
					return player.gl_statSKill('gl_tongkai', target) < 1;
				},
				content() {
					player.gl_statSKill('gl_tongkai', 1, target);
					target.addShownCards(target.getCards('h'), 'visible_gl_tongkai');
					target.gl_changeZhenfa(player);
				},
				group: 'gl_tongkai_zhenfa',
				subSkill: {
					zhenfa: {
						trigger: {
							global: 'damageEnd',
						},
						logTarget: 'source',
						filter(event, player) {
							if (event.player == event.source) return false;
							return event.source && get.gl_zhenfa(player, event.player);
						}, //QQQ
						forced: true,
						content() {
							'step 0';
							trigger.source.chooseToDiscard('he', '敌忾').set('prompt2', '弃置一张牌,或取消并失去一点体力').ai = function (card) {
								return 8 - get.value(card);
							};
							('step 1');
							if (!result.bool) {
								trigger.source.loseHp();
							}
						},
					},
				},
			},
			gl_bingjie: {
				trigger: {
					global: 'phaseUseBegin',
				},
				filter(event, player) {
					return event.player != player;
				},
				round: 1,
				content() {
					'step 0';
					event.num = game.roundNumber + 1;
					player.draw(2);
					('step 1');
					player.chooseToUse('冰界:请选择要使用牌');
					('step 2');
					if (result.bool) {
						event.num--;
						if (event.num > 0) {
							event.goto(1);
						}
					}
				},
			},
			gl_yixin: {
				trigger: {
					source: 'damageSource',
					player: 'damageEnd',
				},
				init(player) {
					if (!player.storage.gl_yixin) player.storage.gl_yixin = [];
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2('gl_yixin'));
					('step 1');
					if (result.bool) {
						target = result.targets[0];
						target.chooseToDiscard(5, true);
						target.draw(3);
						player.gl_eventAfter('gl_yixin', function () {
							player.storage.gl_yixin = [];
						});
						if (player.storage.gl_yixin.includes(target)) {
							target.recover();
						} else {
							player.storage.gl_yixin.push(target);
						}
					}
				},
			},
			gl_qiqiao: {
				trigger: {
					player: ['useCard', 'respond'],
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2('gl_qiqiao'), function (card, player, target) {
						return target.countCards('he');
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						player.choosePlayerCard(event.target, 'he', '奇巧:请选择要置于武将牌上的牌');
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						event.target.gl_gainExpansions(result.cards);
					}
				},
			},
			gl_baoxue: {
				trigger: {
					global: 'phaseDrawBegin2',
				},
				forced: true,
				filter(event, player) {
					return !event.numFixed;
				},
				content() {
					trigger.num--;
					var card = get.cardPile('huogong', 'field');
					if (card) {
						trigger.player.gain(card, 'gain2', 'log');
					}
				},
			},
			gl_huoxin: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				content() {
					'step 0';
					var list = [];
					for (let i = 0; i < ui.cardPile.childElementCount; i++) {
						list.push(ui.cardPile.childNodes[i]);
					}
					for (let i = 0; i < ui.discardPile.childElementCount; i++) {
						list.push(ui.discardPile.childNodes[i]);
					}
					if (list.length) {
						player.chooseButton(true, ['惑心', list], game.players.length);
					} else {
						event.finish();
					}
					('step 1');
					var cards = result.links;
					if (!target.storage.gl_huoxin_gain) target.storage.gl_huoxin_gain = [];
					target.storage.gl_huoxin_gain.addArray(cards);
					game.addVideo('storage', target, ['gl_huoxin_gain', get.cardsInfo(target.storage.gl_huoxin_gain), 'cards']);
					game.cardsGotoSpecial(cards);
					target.addSkill('gl_huoxin_gain');
				},
				subSkill: {
					gain: {
						trigger: {
							player: 'damageEnd',
						},
						filter(event, player) {
							return event.source != undefined && player.storage.gl_huoxin_gain.length;
						},
						_priority: 5,
						charlotte: true,
						forced: true,
						content() {
							'step 0';
							var list = player.storage.gl_huoxin_gain;
							var select = [trigger.num, trigger.num * 2];
							var next = player.chooseButton(true, ['惑心', list], select);
							next.set('ai', function (button) {
								var num = 0;
								var effect = get.value(button.link, trigger.source, 'raw');
								if (get.attitude(player, trigger.source) > 0) {
									return effect;
								}
								return -effect;
							});
							('step 1');
							if (result.bool) {
								trigger.source.gain(result.links, 'gain2', 'log', 'fromStorage');
								player.storage.gl_huoxin_gain.removeArray(result.links);
								player.markSkill('gl_huoxin_gain');
								if (player.storage.gl_huoxin_gain.length == 0) {
									player.removeSkill('gl_huoxin_gain');
								}
							}
						},
						mark: true,
						marktext: '惑',
						ai: {
							maixie: true,
							maixie_hp: true,
							threaten: 2.5,
							effect: {
								target(card, player, target) {
									if (get.tag(card, 'damage') && target.hp > 1) {
										if (player.hasSkillTag('jueqing', false, target)) {
											return [1, -2];
										}
										var list = target.storage.gl_huoxin_gain.slice(0);
										var effect = list.sort().reverse();
										if (effect.length > 2) effect.length = 2;
										var num = get.value(effect, player, 'raw');
										return [1, 0, 1, num];
									}
								},
							},
						},
						intro: {
							content: 'cards',
							onunmark(storage, player) {
								if (storage && storage.length) {
									player.$throw(storage, 1000);
									game.cardsDiscard(storage);
									game.log(storage, '被置入了弃牌堆');
									player.storage.gl_huoxin_gain.length = 0;
								}
							},
						},
					},
				},
			},
			gl_sheai: {
				trigger: {
					player: 'damageBegin3',
				},
				filter(event, player) {
					return event.nature == 'fire';
				},
				forced: true,
				content() {
					trigger.num++;
				},
				ai: {
					fireAttack: true,
					effect: {
						target(card, player, target, current) {
							if (card.name == 'sha') {
								if (card.nature == 'fire') return 2;
								if (player.hasSkill('zhuque_skill')) return 1.9;
							}
							if (get.tag(card, 'fireDamage') && current < 0) return 2;
						},
					},
				},
				group: 'gl_sheai_damage',
				subSkill: {
					damage: {
						trigger: {
							player: 'damageEnd',
						},
						filter(event, player) {
							return event.nature == 'fire';
						},
						forced: true,
						content() {
							player.addTempSkill('gl_sheai_cancel', {
								player: 'phaseAfter',
							});
						},
					},
					cancel: {
						trigger: {
							player: 'damageBefore',
							source: 'damageBegin1',
						},
						mark: true,
						intro: {
							content: '你无视所有伤害且造成的伤害+1',
						},
						forced: true,
						content() {
							if (trigger.player == player) {
								trigger.cancel();
							} else {
								trigger.num++;
							}
						},
						ai: {
							nodamage: true,
							effect: {
								target(card, player, target, current) {
									if (get.tag(card, 'damage')) return 'zeroplayertarget';
								},
							},
						},
						charlotte: true,
					},
				},
			},
			gl_wuxie: {
				trigger: {
					player: 'useCardAfter',
				},
				init(player) {
					if (!player.storage.gl_wuxie) player.storage.gl_wuxie = 0;
				},
				locked(skill, player) {
					if (player.hasSkill('gl_wuxie_forced')) return true;
					return false;
				},
				forced: true,
				gl_delay: {
					content() {
						'step 0';
						if (!player.hasSkill('gl_wuxie_forced')) {
							player.chooseBool(get.prompt('gl_wuxie'));
						} else {
							event.forced = true;
						}
						('step 1');
						if (event.forced || result.bool) {
							player.addTempSkill('gl_wuxie_forced');
							player.storage.gl_wuxie++;
							player.draw();
							var next = player.chooseToUse('舞鞋:请使用一张牌否则弃置' + player.storage.gl_wuxie + '张牌');
							next.filterCard = function (card, player) {
								if (!player.hasUseTarget(card)) return false;
								card = get.autoViewAs(card, null, player);
								var info = get.info(card);
								var num = info.usable;
								if (typeof num == 'function') num = num(card, player);
								num = game.checkMod(card, player, num, 'cardUsable', player);
								if (typeof num != 'number') return true;
								if (player.countUsed(card) < num) return true;
								if (
									game.hasPlayer(function (current) {
										return game.checkMod(card, player, current, false, 'cardUsableTarget', player);
									})
								) {
									return true;
								}
								return false;
							};
						} else {
							event.finish();
						}
						('step 2');
						if (result.bool == false) {
							player.chooseToDiscard([0, player.storage.gl_wuxie], 'he', true);
						} else if (event.getNum(-1) > 0) {
							event.goto(0);
						} else {
							event.finish();
						}
						('step 3');
						var num = player.storage.gl_wuxie - result.cards.length;
						if (num > 0) player.loseHp(num);
						('step 4');
						if (_status.currentPhase && player.countCards('h') == _status.currentPhase.countCards('h')) {
							const evt = _status.event.getParent('phase', true);
							if (evt) {
								evt.finish();
							}
						} //QQQ
						player.storage.gl_wuxie = 0;
					},
				},
				content() {
					player.gl_delay('gl_wuxie');
				},
				subSkill: {
					forced: {
						charlotte: true,
					},
				},
			},
			gl_qingshu: {
				enable: 'chooseToUse',
				hiddenCard(player, name) {
					if (name == 'taoyuan') return true;
				},
				multitarget: true,
				multiline: true,
				line: 'fire',
				content() {
					var targets = game.filterPlayer(function (current) {
						return (
							lib.filter.filterTarget(
								{
									name: 'taoyuan',
								},
								player,
								current
							) && !event.targets.includes(current)
						);
					});
					player.useCard(
						{
							name: 'taoyuan',
						},
						targets
					);
					player.addTempSkill('gl_qingshu_lose');
				},
				filterCard(card, player) {
					var mod = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
					if (mod != 'unchanged') return mod;
					return true;
				},
				filterTarget(card, player, target) {
					return lib.filter.filterTarget(
						{
							name: 'taoyuan',
						},
						player,
						target
					);
				},
				complexSelect: true,
				selectTarget() {
					return ui.selected.cards.length;
				},
				selectCard: [0, Infinity],
				filter(event, player) {
					if (player.hasSkill('gl_qingshu_lose')) return false;
					var bool = event.filterCard(
						{
							name: 'taoyuan',
						},
						player,
						event
					);
					return event.type == 'dying' || bool;
				},
				prompt: '请将任意张牌当【桃园结义】使用并令此【桃园结义】对等量的角色无效',
				ai: {
					save: true,
				},
				subSkill: {
					lose: {
						charlotte: true,
					},
				},
			},
			gl_zansong: {
				trigger: {
					source: 'recoverBefore',
				},
				filter(event, player) {
					return event.player != player;
				},
				forced: true,
				content() {
					'step 0';
					if (player.getDamagedHp() == 0 && player.isMaxHandcard(true)) event.forced = true;
					trigger.player
						.chooseCard('赞颂:是否交给' + get.translation(player) + '牌？', 'he', event.forced)
						.set('ai', function (card) {
							if (_status.event.goon) {
								return player.getUseValue(card);
							} else if (trigger.player.getDamagedHp() > 1) {
								return 7 - get.value(card, trigger.player);
							}
							return 0;
						})
						.set('goon', get.attitude(trigger.player, player) > 0);
					('step 1');
					if (result.bool) {
						trigger.player.give(result.cards, player, true);
						trigger.num++;
					}
				},
			},
			gl_shixie: {
				trigger: {
					source: 'damageBefore',
				},
				filter(event, player) {
					return event.player.hp > player.hp;
				},
				forced: true,
				content() {
					trigger.cancel();
					player.vampire(trigger.num, trigger.player);
				},
				ai: {
					jueqing: true,
				},
				group: 'gl_shixie_recover',
				subSkill: {
					recover: {
						trigger: {
							player: 'recoverEnd',
						},
						filter(event, player) {
							return event.num > 0 && _status.currentPhase == player;
						},
						forced: true,
						content() {
							player.draw(trigger.num);
							player.gl_changeBuff('gl_kuangbao');
						},
					},
				},
			},
			gl_xieshang: {
				enable: ['chooseToUse', 'chooseToRespond'],
				hiddenCard(player, name) {
					if (get.type(name) != 'basic') return false;
					return !player.isDying();
				},
				filter(event, player) {
					if (player.isDying()) return false;
					for (let i = 0; i < lib.inpile.length; i++) {
						var card = {
							name: lib.inpile[i],
						};
						if (event.filterCard && event.filterCard(card, player, event)) return true;
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						for (let i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (name == 'sha') {
								list.push(['基本', '', 'sha']);
								for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
							} else if (get.type(name) == 'basic') list.push(['基本', '', name]);
						}
						return ui.create.dialog('血殇:失去1点体力并视为使用或打出1张基本牌', [list, 'vcard'], 'hidden');
					},
					filter(button, player) {
						return _status.event.parent.filterCard(
							{
								name: button.link[2],
							},
							player,
							_status.event.parent
						);
					},
					backup(links, player) {
						return {
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: {
								name: links[0][2],
								nature: links[0][3],
							},
						};
					},
					prompt(links, player) {
						return '请选择【' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '】的目标';
					},
				},
				ai: {
					order: 5,
					result: {
						player: 1,
					},
					respondSha: true,
					respondShan: true,
					fireAttack: true,
				},
				group: 'gl_xieshang_lose',
				subSkill: {
					lose: {
						trigger: {
							player: ['useCardBegin', 'respondBegin'],
						},
						filter(event, player) {
							return event.skill == 'gl_xieshang_backup';
						},
						forced: true,
						silent: true,
						content() {
							player.loseHp();
						},
						popup: false,
					},
				},
			},
			gl_jieyuan: {
				trigger: {
					player: 'phaseUseEnd',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						if (current.countCards('h') < player.countCards('h')) return true;
						if (current.hp < player.hp) return true;
						return false;
					});
				},
				content() {
					'step 0';
					player.chooseTarget(get.prompt(event.name), function (card, player, target) {
						if (target.countCards('h') < player.countCards('h')) return true;
						if (target.hp < player.hp) return true;
						return false;
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						var list = ['其调整体力与你相同,你调整手牌与其相同', '你调整体力与其相同,其调整手牌与你相同'];
						player.chooseControlList('结缘:请选择要执行的效果', list, true);
					} else {
						event.finish();
					}
					('step 2');
					if (result.index == 0) {
						var num = target.hp - player.hp;
						if (num > 0) {
							target.loseHp(num);
						} else if (num < 0) {
							target.recover(-num);
						}
						num = target.countCards('h') - player.countCards('h');
						if (num > 0) {
							player.draw(num);
						} else if (num < 0) {
							player.chooseToDiscard(-num, true);
						}
					}
					if (result.index == 1) {
						var num = target.hp - player.hp;
						if (num > 0) {
							player.recover(num);
						} else if (num < 0) {
							player.loseHp(-num);
						}
						num = target.countCards('h') - player.countCards('h');
						if (num > 0) {
							target.chooseToDiscard(num, true);
						} else if (num < 0) {
							target.draw(-num);
						}
					}
				},
			},
			gl_caiduan: {
				trigger: {
					source: 'damageSource',
				},
				_priority: 1,
				check(event, player) {
					return get.attitude(player, event.player) <= 0;
				},
				content() {
					'step 0';
					var cards = Array.from(ui.ordering.childNodes);
					while (cards.length) {
						cards.shift().discard();
					}
					('step 1');
					let evt = _status.event;
					while (evt) {
						if (evt.next.length) {
							evt.next = [];
						}
						if (evt.name == 'phaseLoop') {
							break;
						}
						evt.finish();
						evt = evt.parent;
					} //清空事件
				},
				ai: {
					jueqing: true,
				},
			},
			gl_xinao: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				filter(event, player) {
					return player.hasHistory('lose', function (evt) {
						if (evt.parent != event) return false;
						for (var i in evt.gaintag_map) {
							if (evt.gaintag_map[i].includes('gl_xinao')) return false;
						}
						return true;
					});
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					player.chooseCard('将1张手牌作为<嬉闹>', true, function (card) {
						return !card.hasGaintag('gl_xinao');
					});
					('step 2');
					if (result.cards && result.cards.length) {
						result.cards[0].addGaintag('gl_xinao');
					}
				},
				mod: {
					cardEnabled2(card, player) {
						if (get.itemtype(card) != 'card') return;
						if (!card.hasGaintag('gl_xinao')) return;
						if (
							player.countCards('h', function (current) {
								return !current.hasGaintag('gl_xinao');
							}) != 0
						)
							return false;
					},
					cardDiscardable(card, player) {
						if (get.itemtype(card) != 'card') return;
						if (!card.hasGaintag('gl_xinao')) return;
						if (
							player.countCards('h', function (current) {
								return !current.hasGaintag('gl_xinao');
							}) != 0
						)
							return false;
					},
					targetInRange(card, player, target, now) {
						if (
							player.countCards('h', function (current) {
								return !current.hasGaintag('gl_xinao');
							}) != 0
						)
							return;
						return true;
					},
					cardUsable(card, player, num) {
						if (
							player.countCards('h', function (current) {
								return !current.hasGaintag('gl_xinao');
							}) != 0
						)
							return;
						return Infinity;
					},
				},
			},
			gl_lezhu: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				content() {
					'step 0';
					player.draw();
					('step 1');
					player.chooseToDiscard('乐助:请选择要弃置的牌', 'he', [0, 4], true);
					('step 2');
					if (result.bool && result.cards && result.cards.length) {
						var cards = result.cards;
						var suit = [];
						for (let i = 0; i < cards.length; i++) {
							suit.add(cards[i].suit);
						}
						target.storage.gl_lezhu = {
							player: player,
							suit: suit,
						};
						player.addTempSkill('gl_lezhu_lose', {
							player: 'phaseBegin',
						});
						target.addSkill('gl_lezhu_buff');
					}
				},
				subSkill: {
					lose: {
						onremove(player) {
							for (const i of game.players) {
								i.removeSkill('gl_lezhu_buff');
							}
						},
						charlotte: true,
					},
					buff: {
						mark: true,
						intro: {
							content(storage, player) {
								var suit = get.translation(player.storage.gl_lezhu.suit);
								var source = get.translation(player.storage.gl_lezhu.player);
								return '不能使用' + suit + '牌.</br>对该角色使用' + suit + '牌,将会遭受' + source + '的反击';
							},
						},
						trigger: {
							target: 'useCardToTargeted',
						},
						filter(event, player) {
							if (event.player == player) return false;
							var source = player.storage.gl_lezhu.player;
							var suit = player.storage.gl_lezhu.suit;
							return suit.includes(event.card.suit) && source.canUse('sha', event.player, false);
						},
						charlotte: true,
						forced: true,
						content() {
							var next = player.storage.gl_lezhu.player.chooseToUse();
							next.set('norestore', true);
							next.openskilldialog = '乐助:将一张牌当【杀】对' + get.translation(trigger.player) + '使用';
							next.set('_backupevent', 'gl_lezhu_backup');
							next.gl_lezhu = trigger.player;
							next.backup('gl_lezhu_backup');
						},
						mod: {
							cardEnabled2(card, player) {
								if (get.itemtype(card) != 'card') return;
								if (player.storage.gl_lezhu.suit.includes(card.suit)) return false;
							},
						},
					},
					backup: {
						filterCard(card, player) {
							return get.itemtype(card) == 'card';
						},
						filterTarget(card, player, target) {
							return _status.event.gl_lezhu == target;
						},
						viewAs: {
							name: 'sha',
						},
						selectCard: 1,
						position: 'hes',
						popname: true,
						selectTarget: -1,
					},
				},
			},
			gl_yuejvan: {
				trigger: {
					player: 'drawBegin',
				},
				filter(event, player) {
					return event.parent.name != 'phaseDraw';
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2('gl_yuejvan'), function (card, player, target) {
						return target.countCards('hej');
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						var next = player.choosePlayerCard(result.targets[0], true, 'hej');
						next.prompt = '阅卷:选一张牌参与混合';
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						var card = result.links[0];
						event.target.lose(card);
						event.cards = get.cards(4);
						event.cards.push(card);
						game.cardsGotoOrdering(event.cards);
						var next = player.chooseToMove('阅卷:将牌按顺序置于牌堆顶');
						next.set('list', [
							['牌堆顶', event.cards],
							['弃牌堆', []],
						]);
					}
					('step 3');
					var cards = [];
					var discard = [];
					if (result.bool && result.moved && result.moved[0].length) {
						cards = result.moved[0].slice(0);
						game.log(player, '将' + get.cnNumber(cards.length) + '置于牌堆顶');
					}
					if (result.bool && result.moved && result.moved[1].length) {
						player.$throw(result.moved[1], 1000);
						game.log(player, '将', result.moved[1], '置入弃牌堆');
					}
					while (cards.length) {
						var card = cards.pop();
						card.fix();
						ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
					}
					game.updateRoundNumber();
				},
			},
			gl_anhui: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				content() {
					target.draw(target.countCards('h'));
					target.gl_changeBuff('gl_zhie');
				},
			},
			gl_zhongshan: {
				trigger: {
					global: 'dying',
				},
				filter(event, player) {
					return event.player.hp <= 0 && player.countCards('he') > 1;
				},
				forced: true,
				content() {
					'step 0';
					player.chooseToDiscard('he', [2, Infinity]);
					('step 1');
					if (result.bool) {
						trigger.player.recover();
						trigger.player.draw(result.cards.length - 2);
					}
				},
			},
			gl_jiying: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				content() {
					'step 0';
					var list = [];
					var type = get.type(trigger.card);
					var name = trigger.card.name;
					for (let i = 0; i < ui.cardPile.childElementCount; i++) {
						var node = ui.cardPile.childNodes[i];
						if (get.type(node) == type && node.name != name) {
							list.push(node);
						}
					}
					if (list.length) {
						player.chooseButton(['冀影:请选择一张牌置于牌堆顶', [list, 'vcard']]);
					} else {
						event.finish();
					}
					('step 1');
					if (result.bool) {
						ui.cardPile.insertBefore(result.links[0], ui.cardPile.firstChild);
					}
				},
			},
			gl_huohua: {
				enable: 'phaseUse',
				filter(event, player) {
					return player.maxHp > player.hp;
				},
				content() {
					player.recover();
					player.draw();
					if (!player.hasSkill('gl_huohua_damage')) {
						player.addSkill('gl_huohua_damage');
						player.storage.gl_huohua = 0;
					}
					player.storage.gl_huohua++;
				},
				subSkill: {
					damage: {
						charlotte: true,
						trigger: {
							player: 'changeHp',
						},
						_priority: 10,
						filter(event, player) {
							return event.num < 0;
						},
						forced: true,
						content() {
							player.removeSkill('gl_huohua_damage');
							player.damage('fire', player.storage.gl_huohua);
						},
					},
				},
			},
			gl_ximie: {
				trigger: {
					global: 'changeHp',
				},
				filter(event, player) {
					if (!player.isMinHp()) return false;
					if (event.num == 0) return false;
					var min = Infinity;
					var minPlayer = null;
					for (var current of game.players) {
						var num = current.hp;
						if (event.player == current) num -= event.num;
						if (num < min || (num == min && current == player)) {
							min = num;
							minPlayer = current;
						}
					}
					return minPlayer != player;
				},
				content() {
					'step 0';
					var targets = game.filterPlayer();
					targets.remove(player);
					targets.sort(lib.sort.seat);
					event.targets = targets;
					('step 1');
					event.num = 0;
					('step 2');
					if (num < event.targets.length) {
						var target = event.targets[num];
						player.gainPlayerCard('he', target, true);
						event.num++;
					}
					('step 3');
					if (num < event.targets.length) event.goto(2);
					('step 4');
					player.chooseToDiscard('he', true, event.targets.length);
				},
			},
			gl_xunbao: {
				trigger: {
					player: 'drawBegin',
				},
				filter(event, player) {
					return event.num > 0;
				},
				forced: true,
				content() {
					'step 0';
					var list = [];
					var num = trigger.num * 3;
					if (ui.cardPile.childNodes.length > num) {
						for (let i = 0; i < ui.cardPile.childNodes.length; i++) {
							list.push(ui.cardPile.childNodes[i]);
						}
						list = list.randomGets(num);
					} else {
						list = get.cards(num);
					}
					player.chooseCardButton('寻宝:请选择要获得的牌', list, [1, trigger.num]);
					('step 1');
					if (result.links) {
						player.gain(result.links);
						trigger.num = trigger.num - result.links.length;
					}
				},
			},
			gl_ronghui: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseToDiscard(get.prompt2(event.name), 'he');
					('step 1');
					if (result.bool) {
						player.addTempSkill('gl_ronghui_use');
					}
				},
				ai: {
					threaten: 2,
				},
				subSkill: {
					use: {
						mod: {
							selectTarget(card, player, range) {
								if (_status.event.name && _status.event.name != 'chooseToUse') return;
								range[1] = -1;
								range[0] = -1;
							},
						},
						charlotte: true,
						trigger: {
							player: ['useCard1', 'useCardBegin'],
						},
						forced: true,
						firstDo: true,
						filter(event, player, name) {
							if (event.skill == 'gl_ronghui') return false;
							if (_status.dying && _status.dying.length) return false;
							if (!['basic', 'trick'].includes(get.type(event.card))) {
								return false;
							}
							return true;
						},
						_priority: 100,
						content() {
							'step 0';
							if (event.triggername == 'useCardBegin') {
								trigger.line = false;
								trigger.audio = false;
								event.finish();
								return;
							}
							trigger.cancel();
							event.history = player.getHistory('useCard', function (evt) {
								if (!['basic', 'trick'].includes(get.type(evt.card))) {
									return false;
								}
								return evt.skill != 'gl_ronghui';
							});
							event.history = event.history.slice(-3);
							('step 1');
							if (event.history.length) {
								var card = event.history.shift().card;
								if (player.hasUseTarget(card)) {
									var next = player.chooseUseTarget(card, true, false);
									next.audio = false;
								}
								event.redo();
							} else {
								event.finish();
							}
						},
					},
				},
			},
			gl_shefu: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2('gl_shefu'));
					('step 1');
					if (result.bool) {
						player.addTempSkill('gl_shefu_target', {
							player: 'phaseBegin',
						});
						player.storage.gl_shefu = result.targets[0];
					}
				},
				ai: {
					threaten: 1.5,
				},
				subSkill: {
					target: {
						charlotte: true,
						trigger: {
							global: 'useCardToTargeted',
						},
						filter(event, player) {
							if (event.target == event.player) return false;
							return player.storage.gl_shefu == event.target;
						},
						logTarget: 'target',
						forced: true,
						content() {
							'step 0';
							player.discardPlayerCard('he', trigger.player);
							('step 1');
							if (result.bool == false) {
								player.draw();
								if (trigger.target != player) {
									player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌');
								} else {
									event.finish();
								}
							} else {
								event.finish();
							}
							('step 2');
							trigger.target.gain(result.cards, player, 'give');
						},
					},
				},
			},
			gl_luanzhan: {
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				usable: 1,
				selectTarget: -1,
				filter(event, player) {
					return player.countCards('h') > 0;
				},
				multitarget: true,
				multiline: true,
				content() {
					var next = player.chooseToCompare(targets);
					next.callback = lib.skill.gl_luanzhan.callback;
					if (!next.fixedResult) next.fixedResult = {};
					var list = targets.slice(0);
					list.push(player);
					while (list.length) {
						var link = list.shift();
						var hs = link.getCards('h');
						if (hs.length) next.fixedResult[link.playerid] = hs.randomGet();
					}
				},
				callback() {
					var name = {
						name: 'sha',
						nature: 'fire',
					};
					if (event.num1 != event.num2) {
						if (event.num1 > event.num2) {
							if (player.canUse(name, target, false)) player.useCard(name, target, false);
						} else {
							if (target.canUse(name, player, false)) target.useCard(name, player, false);
						}
					}
				},
			},
			gl_huli: {
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					if (event.card.name != 'sha') return false;
					if (event.name == 'useCardToPlayered') return true;
					return event.player != player;
				},
				forced: true,
				content() {
					game.asyncDraw([player, trigger.player == player ? trigger.target : trigger.player]);
				},
			},
			gl_cangfeng: {
				trigger: {
					player: 'gainAfter',
				},
				filter(event, player) {
					var hs = player.getCards('h');
					if (!event.cards) return false;
					if (Array.isArray(event.cards))
						for (const i of event.cards) {
							if (!hs.includes(i)) continue;
							if (i.name == 'sha') return true;
						}
					return false;
				},
				forced: true,
				content() {
					'step 0';
					player.chooseCard('藏锋:选择任意张【杀】置换牌堆中的牌', [1, Infinity], function (card, player) {
						return trigger.cards.includes(card) && card.name == 'sha';
					});
					('step 1');
					if (result.bool) {
						event.cards = result.cards;
						player.chooseButton(['藏锋:选择等量的牌交换' + get.translation(event.cards), Array.from(ui.cardPile.childNodes)], event.cards.length).set('filterButton', function (button) {
							return !button.link.hasGaintag('gl_cangfeng');
						}); //QQQ
					}
					('step 2');
					if (result.bool) {
						player.lose(event.cards, 'visible', ui.ordering);
						event.links = result.links;
					} else {
						event.finish();
					}
					('step 3');
					for (let i = 0; i < ui.cardPile.childNodes.length; i++) {
						var node = ui.cardPile.childNodes[i];
						if (event.links.includes(node)) {
							var card = event.cards[event.links.indexOf(node)];
							card.fix();
							ui.cardPile.insertBefore(card, node);
							card.addGaintag('gl_mingzhi');
							card.addGaintag('gl_cangfeng');
						}
					}
					player.addSkill('gl_cangfeng_sha');
					player.gain(event.links, 'gain2', 'log');
				},
				subSkill: {
					sha: {
						charlotte: true,
						trigger: {
							global: 'gainAfter',
						},
						_priority: 100,
						filter(event, player) {
							for (var i in event.gaintag_map) {
								if (event.gaintag_map[i].includes('gl_cangfeng')) return true;
							}
							return false;
						},
						popup: false,
						forced: true,
						gl_delay: {
							filter(player, event) {
								for (var trigger of event.custom.gl_cangfeng) {
									var cards = trigger.player.getCards('h', function (card) {
										return trigger.gaintag_map[card.cardid] && trigger.gaintag_map[card.cardid].includes('gl_cangfeng');
									});
									if (cards.length) return true;
								}
								return false;
							},
							content() {
								'step 0';
								if (event.parent.custom.gl_cangfeng.length) {
									event._trigger = event.parent.custom.gl_cangfeng.shift();
								} else {
									event.finish();
								}
								('step 1');
								event.cards = trigger.player.getCards('h', function (card) {
									return trigger.gaintag_map[card.cardid] && trigger.gaintag_map[card.cardid].includes('gl_cangfeng');
								});
								('step 2');
								if (event.cards.length && trigger.player.isAlive()) {
									var card = event.cards.shift();
									if (
										trigger.player.hasCard(function (current) {
											return card == current;
										})
									) {
										trigger.player.lose(card, ui.ordering, 'visible');
										trigger.player.showCards(card);
										player.useCard(card, trigger.player, false);
									}
									event.redo();
								}
								('step 3');
								event.goto(0);
							},
						},
						content() {
							var next = player.gl_delay('gl_cangfeng_sha');
							if (!next.custom.gl_cangfeng) next.custom.gl_cangfeng = [];
							next.custom.gl_cangfeng.push(trigger);
						},
					},
				},
			},
			gl_guitian: {
				group: ['gl_guitian_achieve', 'gl_guitian_fail'],
				dutySkill: true,
				subSkill: {
					achieve: {
						trigger: {
							player: 'equipAfter',
						},
						forced: true,
						filter(event, player) {
							return player.getEquip('equip2');
						},
						content() {
							player.awakenSkill('gl_guitian');
							game.log(player, '成功完成使命');
							player.draw(3);
							player.storage.gl_yingfeng = true;
						},
					},
					fail: {
						trigger: {
							player: 'phaseBegin',
						},
						forced: true,
						filter(event, player) {
							var num = player.phaseNumber - game.roundNumber;
							return num > 1;
						},
						content() {
							player.awakenSkill('gl_guitian');
							game.log(player, '使命失败');
							player.chooseToDiscard(3, true);
							player.storage.gl_jingmu = true;
						},
					},
				},
				trigger: {
					player: 'phaseAfter',
				},
				filter(event, player) {
					return player.hp > player.countCards('h');
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2('gl_guitian'), function (card, player, target) {
						return target.countCards('e') > 0 || target == player;
					});
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						if (target == player) {
							player.phase('nodelay');
						} else {
							player.gainPlayerCard(target, 'e', true);
						}
					}
				},
			},
			gl_yingfeng: {
				enable: 'phaseUse',
				filter(event, player) {
					if (!player.storage.gl_yingfeng) return false;
					var num = player.getStat().skill.gl_yingfeng || 0;
					return player.countCards('e') > 0 && player.countCards('h') >= num;
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						for (let i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (!player.hasUseTarget(name)) continue;
							if (get.type(name, 'trick') == 'trick') list.push(['锦囊', '', name]);
						}
						return ui.create.dialog('迎奉', [list, 'vcard'], 'hidden');
					},
					backup(links, player) {
						return {
							filterCard(card, player) {
								if (ui.selected.cards.length == 0) {
									return get.position(card) == 'e';
								}
								return get.position(card) == 'h' || get.position(card) == 's';
							},
							selectCard() {
								var player = _status.event.player;
								var num = player.getStat().skill.gl_yingfeng || 0;
								return num + 1;
							},
							complexCard: true,
							position: 'hes',
							viewAs: {
								name: links[0][2],
							},
						};
					},
					prompt(links, player) {
						var num = player.getStat().skill.gl_yingfeng || 0;
						var str = '将装备区内1张牌';
						if (num > 0) {
							str += '与' + num + '张手牌';
						}
						str += '当' + get.translation(links[0][2]) + '使用';
						return str;
					},
				},
				ai: {
					order: 5,
					result: {
						player: 1,
					},
					fireAttack: true,
				},
				global: 'gl_yingfeng_use',
				subSkill: {
					use: {
						enable: 'phaseUse',
						usable: 1,
						filter(event, player) {
							return game.hasPlayer(function (current) {
								if (current.storage.gl_yingfeng) return false;
								if (current.countCards('e') == 0) return false;
								if (current == player) return false;
								return current.hasSkill('gl_yingfeng');
							});
						},
						forced: true,
						content() {
							'step 0';
							var targets = game.filterPlayer(function (current) {
								if (current.storage.gl_yingfeng) return false;
								if (current.countCards('e') == 0) return false;
								if (current == player) return false;
								return current.hasSkill('gl_yingfeng');
							});
							if (targets.length == 1) {
								event.target = targets[0];
								event.goto(2);
							} else if (targets.length) {
								player
									.chooseTarget(
										'选择【迎奉】的目标',
										function (card, player, target) {
											return _status.event.list.includes(target);
										},
										true
									)
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
								var info = get.info('gl_yingfeng');
								var dialog = info.chooseButton.dialog(event, player);
								var next = event.target.chooseButton(dialog, true);
							} else {
								event.finish();
							}
							('step 3');
							event.card = {
								name: result.links[0][2],
							};
							event.target.chooseCard('e', true);
							('step 4');
							event.target.give(result.cards, player, true);
							player.chooseUseTarget(event.card, result.cards, true);
						},
						ai: {
							order: 8,
							threaten: 1.5,
							result: {
								player(player, target) {
									var target = game.findPlayer(function (current) {
										return current.hasSkill('gl_yingfeng');
									});
									if (target) {
										return get.attitude(player, target);
									}
								},
							},
						},
					},
				},
			},
			gl_jingmu: {
				trigger: {
					player: 'loseAfter',
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
				},
				forced: true,
				filter(event, player) {
					var evt = event.getl(player);
					if (!evt || evt.player != player) return false;
					if (player.storage.gl_jingmu) {
						if (player == _status.currentPhase) return false;
						if (evt.hs && evt.hs.length) return true;
					}
					return evt.es && evt.es.length;
				},
				locked(skill, player) {
					if (player.storage.gl_jingmu) return true;
					return false;
				},
				content() {
					'step 0';
					event.cards = trigger.getl(player).es.slice(0);
					if (player.storage.gl_jingmu) {
						event.cards = event.cards.concat(trigger.getl(player).hs);
						event.forced = true;
					}
					('step 1');
					if (event.cards.length) {
						event.color = get.color(event.cards.shift());
						if (event.color == 'none') {
							event.redo();
						} else if (player.storage.gl_jingmu) {
							event.target = player;
							event.goto(3);
						}
					} else {
						event.finish();
					}
					('step 2');
					var str = '选择一名角色';
					str += event.color == 'red' ? '回复一点体力' : '摸两张牌';
					player.chooseTarget(str, function (card, player, target) {
						if (event.color == 'red') return target.isDamaged();
						return true;
					});
					('step 3');
					if (event.target || result.bool) {
						var target = event.target || result.targets[0];
						if (event.color == 'red') {
							target.recover();
						} else {
							target.draw(2);
						}
					}
					event.goto(1);
				},
				ai: {
					noe: true,
					reverseEquip: true,
					effect: {
						target(card, player, target, current) {
							if (player.storage.gl_jingmu) {
								if (get.tag(card, 'respondShan') || get.tag(card, 'respondSha')) {
									if (get.attitude(target, player) <= 0) {
										if (current > 0) return;
										if (target.countCards('h') == 0) return 1.6;
										if (target.countCards('h') == 1) return 1.2;
										if (target.countCards('h') == 2) return [0.8, 0.2, 0, -0.2];
										return [0.4, 0.7, 0, -0.7];
									}
								}
							}
							if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) {
								return [1, 3];
							}
						},
					},
				},
			},
			gl_anhun: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return target.countCards('h');
				},
				content() {
					var cards = target.getCards('h');
					target.storage.gl_anhun = player;
					target.addToExpansion('giveAuto', cards, target).gaintag.add('gl_anhun_gain');
					target.addSkill('gl_anhun_gain');
					target.changeHujia(Math.min(cards.length, game.players.length));
				},
				subSkill: {
					gain: {
						trigger: {
							global: ['phaseBegin', 'dieBegin'],
						},
						forced: true,
						popup: false,
						charlotte: true,
						filter(event, player) {
							if (event.player != player.storage.gl_anhun) return false;
							return player.getExpansions('gl_anhun_gain').length;
						},
						content() {
							'step 0';
							var cards = player.getExpansions('gl_anhun_gain');
							player.gain(cards, 'draw');
							game.log(player, '收回了' + get.cnNumber(cards.length) + '张<安魂>牌');
							player.changeHujia(-player.hujia);
							('step 1');
							player.removeSkill('gl_anhun_gain');
						},
						intro: {
							markcount: 'expansion',
							mark(dialog, storage, player) {
								var cards = player.getExpansions('gl_anhun_gain');
								if (player.isUnderControl(true)) dialog.addAuto(cards);
								return '共有' + get.cnNumber(cards.length) + '张牌';
							},
						},
					},
				},
			},
			gl_zhidao: {
				trigger: {
					global: 'useCardAfter',
				},
				forced: true,
				filter(event, player) {
					if (event.player != player) {
						return event.player.hasHistory('lose', function (evt) {
							if (evt.parent != event) return false;
							for (var i in evt.gaintag_map) {
								if (evt.gaintag_map[i].includes('gl_zhidao')) return true;
							}
							return false;
						});
					} else {
						if (
							player.getHistory('custom', function (evt) {
								return evt.gl_zhidao == event.card.name;
							}).length
						)
							return false;
						return event.cards && event.cards.filterInD().length;
					}
				},
				content() {
					'step 0';
					if (trigger.player != player) {
						player.recover();
						event.finish();
					} else {
						player.chooseTarget(get.prompt2(event.name));
					}
					('step 1');
					if (result.bool) {
						result.targets[0].gain(trigger.cards.filterInD(), 'gain2').gaintag.add('gl_zhidao');
						player.getHistory('custom').push({
							gl_zhidao: trigger.card.name,
						});
						player.loseHp();
					}
				},
			},
			gl_xiongsuan: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name));
					('step 1');
					if (result.bool) {
						result.targets[0].draw(2);
						player.storage.gl_xiongsuan_use = result.targets[0];
						player.addTempSkill('gl_xiongsuan_use');
					}
				},
				subSkill: {
					use: {
						trigger: {
							player: 'useCard',
						},
						mark: true,
						intro: {
							content: '你每使用1张牌$便需弃置1张牌',
						},
						charlotte: true,
						forced: true,
						filter(event, player) {
							return player.storage.gl_xiongsuan_use.isAlive();
						},
						content() {
							'step 0';
							event.target = player.storage.gl_xiongsuan_use;
							event.target.chooseToDiscard('he', '凶算:请弃置1张牌', true);
							('step 1');
							if (!result.bool || !result.cards || result.cards.length == 0) {
								event.target.damage(player);
							}
						},
					},
				},
			},
			gl_qinxiu: {
				trigger: {
					global: 'phaseAfter',
				},
				filter(event, player) {
					return player.isMinHp() || player.isMinHandcard();
				},
				forced: true,
				content() {
					if (player.isMinHandcard()) {
						player.phaseDraw();
					}
					if (player.isMinHp()) {
						player.phaseUse();
					}
				},
			},
			gl_geyong: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				selectTarget: -1,
				filterCard: true,
				selectCard() {
					if (ui.selected.cards.length) return 2;
					return [0, 1];
				},
				multitarget: true,
				multiline: true,
				chooseToUse() {
					'step 0';
					player
						.chooseToUse('歌咏:使用一张【杀】', function (card) {
							if (card.name != 'sha') return false;
							return lib.filter.filterCard.apply(this, arguments);
						})
						.set('ai2', function () {
							return get.effect_use.apply(this, arguments) + 0.01;
						});
					('step 1');
					if (result.bool) {
						if (player.stat[player.stat.length - 1].card.sha > 0) {
							player.stat[player.stat.length - 1].card.sha--;
						}
					} else {
						player.loseHp();
					}
				},
				content() {
					'step 0';
					var list = ['获得一张【杀】', '使用一张【杀】或失去一点体力', '回复一点体力', '弃置一张【杀】或两张非【杀】'];
					var dialog = ui.create.dialog('歌咏:请选择执行的顺序', 'hidden');
					dialog.forcebutton = true;
					for (let i = 0; i < list.length; i++) {
						var node = ui.create.div('.popup.text', dialog.content);
						dialog.buttons.add(node);
						var click = lib.config.touchscreen ? 'touchend' : 'click';
						node.addEventListener(click, ui.click.button);
						node.style.width = 'calc(100% - 30px)';
						node.style.position = 'unset';
						node.link = i;
						node.innerHTML = list[i];
					}
					player.chooseButton(dialog, cards.length ? 3 : [3, 4], true);
					('step 1');
					if (result.bool) {
						if (result.links.length == 3 && cards.length == 0) {
							player.loseHp();
						}
						event.links = result.links.slice(0);
					} else {
						event.finish();
					}
					('step 2');
					if (event.links.length) {
						event.current = player;
						event.link = event.links.shift();
						event.currented = [];
					} else {
						event.finish();
					}
					('step 3');
					delete event.result;
					event.currented.push(event.current);
					event.current.addTempClass('target');
					if (event.link == 0) {
						var card = get.cardPile('sha');
						if (card) {
							event.current.gain(card, 'gain2', 'log');
						}
					} else if (event.link == 1) {
						var next = game.createEvent('gl_geyong_use', false);
						next.player = event.current;
						next.setContent(lib.skill.gl_geyong.chooseToUse);
					} else if (event.link == 2) {
						event.current.recover();
					} else if (event.link == 3) {
						var next = event.current.chooseToDiscard('歌咏:弃置一张【杀】或两张非【杀】', true, 'he');
						next.selectCard = function () {
							if (ui.selected.cards.length && ui.selected.cards[0].name == 'sha') {
								return 1;
							}
							return 2;
						};
						next.filterCard = function (card) {
							if (ui.selected.cards.length) {
								if (ui.selected.cards[0].name == 'sha') {
									return false;
								} else {
									return card.name != 'sha';
								}
							}
							return true;
						};
					}
					('step 4');
					event.current = event.current.next;
					if (!event.currented.includes(event.current)) {
						event.goto(3);
					} else {
						event.goto(2);
					}
				},
			},
			gl_aili: {
				trigger: {
					global: 'damageBegin4',
				},
				logTarget: 'player',
				filter(event, player) {
					if (!event.source) return false;
					if (event.source == event.player) return false;
					if (event.num < event.player.hp) return false;
					return true;
				},
				content() {
					'step 0';
					var next = trigger.source.chooseControl('吸取体力', '获得手牌');
					next.set('prompt', '爱离:吸取' + get.translation(player) + '一点体力或获得' + get.translation(trigger.player) + '所有手牌');
					next.set('ai', function () {
						var att1 = get.attitude(trigger.source, player);
						var att2 = get.attitude(trigger.source, trigger.player);
						if (att1 > 0 && att2 < 0) {
							return '获得手牌';
						}
						if (att1 < 0 && att2 > 0) {
							return '吸取体力';
						}
						if (trigger.source.getDamagedHp() > 1) return '吸取体力';
						if (trigger.player.countCards('h') > 2) return '获得手牌';
						return '吸取体力';
					});
					('step 1');
					if (result.control == '吸取体力') {
						trigger.source.vampire(player);
					} else {
						var hs = trigger.player.getCards('h');
						trigger.source.gain(hs, trigger.player, 'giveAuto');
					}
					trigger.player = trigger.source;
				},
			},
			gl_guibu: {
				gl_wuzhuang: {
					name: 'gl_guiyangyan',
					number: 9,
					nature: 'fire',
					suit: 'heart',
				},
				derivation: ['gl_guiyangyan'],
				enable: ['chooseToUse', 'chooseToRespond'],
				usable: 2,
				hiddenCard(player, name) {
					if (!['sha', 'shan'].includes(name)) return false;
					return player.countCards('hs');
				},
				filter(event, player) {
					if (player.countCards('hs') == 0) return false;
					if (
						event.filterCard(
							{
								name: 'sha',
							},
							player,
							event
						) ||
						event.filterCard(
							{
								name: 'shan',
							},
							player,
							event
						)
					) {
						return true;
					}
					return false;
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						if (
							event.filterCard(
								{
									name: 'sha',
								},
								player,
								event
							)
						) {
							list.push(['基本', '', 'sha']);
						}
						if (
							event.filterCard(
								{
									name: 'shan',
								},
								player,
								event
							)
						) {
							list.push(['基本', '', 'shan']);
						}
						return ui.create.dialog('鬼步', [list, 'vcard'], 'hidden');
					},
					backup(links, player) {
						return {
							filterCard: true,
							viewAs: {
								name: links[0][2],
							},
							position: 'hs',
						};
					},
					prompt(links, player) {
						return '将1张手牌当做' + get.translation(links[0][2]) + '使用或打出';
					},
				},
			},
			gl_jielue: {
				trigger: {
					source: 'damageSource',
				},
				filter(event, player) {
					return event.player.countCards('he');
				},
				forced: true,
				content() {
					'step 0';
					player.gainPlayerCard('he', trigger.player);
					('step 1');
					if (result.bool) {
						if (player.countCards('h') > trigger.player.countCards('h')) {
							trigger.player.useCard(
								{
									name: 'sha',
								},
								player,
								false
							);
						}
					}
				},
			},
			gl_linwei: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				content() {
					'step 0';
					var next = player.chooseTarget(get.prompt('gl_linwei'), '弃置1名角色的1张牌');
					next.filterTarget = function (card, player, target) {
						return target.countDiscardableCards(player, 'he');
					};
					('step 1');
					if (result.bool) {
						player.discardPlayerCard(result.targets[0], 'he', true);
					} else {
						event.finish();
					}
					('step 2');
					if (result.links[0].suit == 'heart') {
						player.recover();
					} else {
						player.draw();
					}
				},
			},
			gl_yangming: {
				trigger: {
					global: ['gameDrawAfter'],
					source: ['dieAfter'],
				},
				filter(event, player) {
					if (event.name == 'die') {
						return player.storage.gl_yangming;
					}
					return true;
				},
				forced: true,
				async content(event, trigger, player) {
					if (trigger.name == 'die') {
						const cards = [];
						for (const name of player.storage.gl_yangming) {
							const card = get.cardPile(name);
							if (card) {
								cards.push(card);
							}
						}
						player.gain(cards, 'gain2');
					} else {
						const { links } = await player.chooseButton(['扬名:请选择要宣言的牌名', [lib.inpile, 'vcard']], 3).forResult();
						if (links?.length) {
							player.storage.gl_yangming = links.map((c) => c[2]);
							const cards = [];
							for (const name of player.storage.gl_yangming) {
								const card = get.cardPile(name);
								if (card) {
									cards.push(card);
								}
							}
							await player.gain(cards, 'gain2');
							player.chooseToDiscard('he', player.storage.gl_yangming.length, true);
						}
					}
				}, //QQQ
			},
			gl_hezhan: {
				trigger: {
					global: 'damageEnd',
				},
				filter(event, player) {
					return event.player != player && event.player.isAlive();
				},
				content() {
					'step 0';
					player.draw();
					('step 1');
					if (player.countCards('he')) {
						player.chooseCard('合战:请选择1张牌交给' + get.translation(trigger.player), true);
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						player.give(result.cards, trigger.player, true);
					}
				},
			},
			gl_taozhi: {
				trigger: {
					global: 'gainEnd',
				},
				forced: true,
				logTarget: 'player',
				filter(event, player) {
					if (player.countCards('hes') == 0) return false;
					if (!player.canUse('sha', event.player, false)) return false;
					var evt = event.getl(player);
					for (const i of game.players) {
						if (event.player == i) continue;
						if (!event.getl(i)) continue;
						if (event.getl(i).cards2.length) return true;
					}
					return false;
				},
				content() {
					var next = player.chooseToUse();
					next.addCount = false;
					next.set('norestore', true);
					next.target = trigger.player;
					next.set('openskilldialog', '讨治:将是否将1张牌当【杀】对' + get.translation(trigger.player) + '使用');
					next.set('_backupevent', 'gl_taozhi_backup');
					next.backup('gl_taozhi_backup');
				},
				subSkill: {
					backup: {
						viewAs: {
							name: 'sha',
						},
						position: 'hes',
						filterCard: true,
						selectCard: 1,
						selectTarget: -1,
						filterTarget(card, player, target) {
							return _status.event.target == target;
						},
						popname: true,
					},
				},
			},
			gl_yuehong: {
				trigger: {
					player: 'gainAfter',
				},
				init(player) {
					if (!player.storage.gl_yuehong) player.storage.gl_yuehong = [];
				},
				forced: true,
				gl_delay: {
					content() {
						'step 0';
						player.chooseTarget(get.prompt2(event.name), event.getNum('prompt'));
						('step 1');
						if (result.bool) {
							var target = result.targets[0];
							target.draw(player.hp);
							target.chooseToDiscard(player.hp, true, 'he');
							player.gl_eventAfter('gl_yuehong', function () {
								player.storage.gl_yuehong = [];
							});
							if (player.storage.gl_yuehong.includes(target)) {
								target.loseHp();
							} else {
								player.storage.gl_yuehong.push(target);
							}
						} else {
							event.finish();
						}
						('step 2');
						if (event.getNum(-1) > 0) {
							event.goto(0);
						}
					},
				},
				content() {
					player.gl_delay('gl_yuehong');
				},
			},
			gl_zhuansheng: {
				trigger: {
					player: 'loseAfter',
				},
				filter(event, player) {
					if (event.type != 'discard') return false;
					for (let i = 0; i < event.cards2.length; i++) {
						if (get.position(event.cards2[i]) == 'd') {
							return true;
						}
					}
					return false;
				},
				forced: true,
				content() {
					'step 0';
					var cards = [];
					for (let i = 0; i < trigger.cards2.length; i++) {
						if (get.position(trigger.cards2[i], true) == 'd') {
							cards.push(trigger.cards2[i]);
						}
					}
					var next = player.chooseToMove('转生:将任意张牌置于牌堆顶');
					next.set('list', [['本次弃置的牌', cards], ['牌堆顶']]);
					('step 1');
					if (result.moved && result.moved[1] && result.moved[1].length) {
						var cards = result.moved[1];
						game.log(player, '将', cards, '置于了牌堆顶');
						while (cards.length) {
							var card = cards.pop();
							card.fix();
							ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
							card.addGaintag('gl_zhuansheng');
						}
					} //QQQ
				},
				group: 'gl_zhuansheng_use',
				global: 'gl_zhuansheng_gain',
				subSkill: {
					gain: {
						trigger: {
							player: 'gainEnd',
						},
						filter(event, player) {
							for (var i in event.gaintag_map) {
								if (event.gaintag_map[i].includes('gl_zhuansheng')) return true;
							}
							return false;
						},
						popup: false,
						forced: true,
						content() {
							trigger.player.getCards('h', function (card) {
								if (trigger.gaintag_map[card.cardid] && trigger.gaintag_map[card.cardid].includes('gl_zhuansheng')) {
									card.addGaintag('gl_zhuansheng');
								}
							});
						},
					},
					use: {
						trigger: {
							global: 'useCard2',
						},
						forced: true,
						filter(event, player) {
							var type = get.type(event.card);
							if (type != 'basic' && type != 'trick') return false;
							return event.player.hasHistory('lose', function (evt) {
								if (evt.parent != event) return false;
								for (var i in evt.gaintag_map) {
									if (evt.gaintag_map[i].includes('gl_zhuansheng')) return true;
								}
								return false;
							});
						},
						content() {
							'step 0';
							var next = player.chooseTarget([1, player.getDamagedHp() + 1], get.prompt(event.name), '为' + get.translation(trigger.card) + '增加或减少目标', function (card, player, target) {
								if (trigger.targets.includes(target)) {
									return true;
								} else {
									return lib.filter.targetEnabled2(trigger.card, trigger.player, target);
								}
							});
							next.targetprompt = function (target) {
								if (trigger.targets.includes(target)) {
									return '移除目标';
								} else {
									return '追加目标';
								}
							};
							('step 1');
							if (result.bool) {
								var target = result.targets[0];
								for (var target of result.targets) {
									if (trigger.targets.includes(target)) {
										trigger.targets.remove(target);
									} else {
										trigger.targets.push(target);
									}
								}
							}
						},
					},
				},
			},
			gl_huiyan: {
				trigger: {
					global: 'useCardToPlayered',
				},
				filter(event, player) {
					if (!event.isFirstTarget) return false;
					if (event.player == player) {
						for (let i = 0; i < event.targets.length; i++) {
							if (!player.canCompare(event.targets[i])) return false;
						}
						return true;
					}
					if (!event.targets.includes(player)) return false;
					return player.canCompare(event.player);
				},
				logTarget: 'targets',
				content() {
					'step 0';
					var targets = trigger.targets.slice(0);
					targets.add(trigger.player);
					targets.remove(player);
					player.chooseToCompare(targets).setContent('chooseToCompareMeanwhile');
					('step 1');
					if (result.winner == player) {
						trigger.parent.all_excluded = true;
					} else if (result.targets) {
						var list = result.targets.slice(0);
						list.add(result.player);
						list.sort(lib.sort.number2);
						var max = list[0].number,
							cards = [];
						for (var card of list) {
							if (card.number == max) cards.push(card);
						}
						player.gain(cards, 'gain2');
					}
				},
			},
			gl_qiaoyan: {
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return event.source;
				},
				logTarget: 'source',
				content() {
					'step 0';
					game.asyncDraw([player, trigger.source]);
					('step 1');
					if (player.canCompare(trigger.source)) {
						player.chooseToCompare(trigger.source);
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						var list = [];
						for (let i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (!player.hasUseTarget(name)) continue;
							var type = get.type(lib.inpile[i]);
							if (name == 'sha') {
								list.push(['基本', '', 'sha']);
								for (var j of lib.inpile_nature) {
									list.push([type, '', 'sha', j]);
								}
							} else if (type == 'trick' || type == 'basic') {
								list.push([type, '', name]);
							}
						}
						var dialog = ui.create.dialog('巧言', [list, 'vcard'], 'hidden');
						player.chooseButton(dialog);
					} else {
						var card1 = result.player;
						var card2 = result.target;
						if (get.position(card1) == 'd') trigger.source.gain(card1, 'gain2');
						if (get.position(card2) == 'd') player.gain(card2, 'gain2');
						event.finish();
					}
					('step 3');
					if (result.bool) {
						var card = {
							name: result.links[0][2],
							nature: result.links[0][3],
						};
						player.chooseUseTarget(card, true, false);
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) {
									return [1, -2];
								}
								if (!target.hasFriend()) return;
								if (target.hp >= 4) return [1, 2];
								if (target.hp == 3) return [1, 1.5];
								if (target.hp == 2) return [1, 0.5];
							}
						},
					},
				},
			},
			gl_moujv: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return game.players.length > 1;
				},
				content() {
					'step 0';
					var cards = get.cards(3);
					event.cards = cards;
					player.chooseCardButton(cards, '选择要给出的牌', [1, Infinity]);
					('step 1');
					if (result.bool) {
						event.links = result.links;
						var next = player.chooseTarget(true, 2);
						next.set('multitarget', true);
						next.set('targetprompt', ['获得卡牌', '使用目标']);
						next.set('prompt', '将' + get.translation(result.links) + '交给1名角色并令其对另1名角色使用牌');
					} else {
						event.finish();
					}
					if (Array.isArray(event.cards))
						for (const i of event.cards) {
							if (!result.bool || !result.links.includes(i)) {
								ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
							}
						}
					('step 2');
					event.targets = result.targets;
					event.targets[0].gain(event.links, 'draw');
					('step 3');
					event.targets[0].showHandcards();
					('step 4');
					event.cards = event.targets[0].getCards('h');
					event.cards = event.cards.filter((i) => get.tag(i, 'damage'));
					('step 5');
					var targets = event.targets;
					if (event.cards.length && targets[0].isAlive() && targets[1].isAlive()) {
						var card = event.cards.shift();
						if (get.owner(card) == targets[0]) {
							targets[0].useCard(card, targets[1], false);
						}
						event.redo();
					}
				},
				group: 'gl_moujv_damage',
				subSkill: {
					damage: {
						trigger: {
							global: 'damageEnd',
						},
						filter(event, player) {
							var evt = event.getParent(3, true);
							if (evt) {
								return evt.name == 'gl_moujv' && evt.player == player;
							}
							return false;
						},
						_priority: 5,
						forced: true,
						content() {
							trigger.player.draw();
							if (trigger.player != player) {
								player.chooseToDiscard('he', true);
							}
						},
					},
				},
			},
			gl_jieshi: {
				trigger: {
					player: 'compare',
					target: 'compare',
				},
				forced: true,
				content() {
					'step 0';
					var next = player.chooseTarget(get.prompt('gl_jieshi'), '选择1名体力值大于你角色区域内的1张牌替换你的拼点牌');
					next.filterTarget = function (card, player, target) {
						if (target == player) return false;
						if (target.countCards('hej') == 0) return false;
						return target.hp > player.hp;
					};
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						player.choosePlayerCard(event.target, 'hej', '借势:请选择要替换的牌', true);
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						var card = result.cards[0];
						target.lose(card, ui.ordering, 'visible');
						if (player == trigger.player) {
							target.gain(trigger.card1, 'gain2', 'log');
							trigger.num1 = card.number;
							trigger.card1 = card;
						} else {
							target.gain(trigger.card2, 'gain2', 'log');
							trigger.num2 = card.number;
							trigger.card2 = card;
						}
					}
				},
			},
			gl_gaizao: {
				enable: 'phaseUse',
				filterTarget: true,
				usable: 1,
				filter(event, player) {
					return player.countCards('he') > 2;
				},
				position: 'he',
				filterCard: true,
				selectCard: 3,
				content() {
					'step 0';
					var list = ['增加手牌上限并回复1点体力', '增加出杀上限并摸1张牌', '增加攻击与防御距离并失去1点体力', '增加摸牌数并失去1点体力上限'];
					player.chooseControlList('改造:请选择要执行的效果', list, true);
					('step 1');
					target.addSkill('gl_gaizao_add');
					switch (result.index) {
						case 0:
							target.recover();
							player.gl_permanent('handcard');
							break;
						case 1:
							target.draw();
							player.gl_permanent('use');
							break;
						case 2:
							target.loseHp();
							player.gl_permanent('to');
							player.gl_permanent('from');
							break;
						case 3:
							target.loseMaxHp();
							player.gl_permanent('draw');
							break;
					}
					('step 2');
					if (target.hp >= player.hp) {
						player.getStat().skill.gl_gaizao;
					}
				},
				subSkill: {
					add: {
						charlotte: true,
					}, //QQQ
				},
			},
			gl_qiuzhi: {
				trigger: {
					player: ['useCard', 'respond'],
				},
				forced: true,
				filter(event, player) {
					return get.type(event.card) == 'basic';
				},
				content() {
					var list = [];
					var history = player.getAllHistory('useCard', function (evt) {
						list.add(evt.card.name);
					});
					var card = get.cardPile(function (card) {
						return !list.includes(card.name);
					});
					if (card) {
						player.gain(card, 'gain2', 'log');
					}
				},
			},
			gl_shichou: {
				limited: true,
				mark: true,
				init(player) {
					player.storage.gl_shichou = false;
				},
				enable: 'phaseUse',
				filter(event, player) {
					return !player.storage.gl_shichou;
				},
				intro: {
					content: 'limited',
				},
				filterTarget(card, player, target) {
					return player != target;
				},
				content() {
					player.awakenSkill('gl_shichou');
					player.storage.gl_shichou = true;
					player.draw(2);
					player.storage.gl_shichou_die = target;
					player.addSkill('gl_shichou_die');
				},
				subSkill: {
					die: {
						trigger: {
							player: 'phaseJieshuBegin',
							global: 'dieAfter',
						},
						charlotte: true,
						forced: true,
						filter(event, player) {
							if (event.name == 'die') {
								if (event.player == player.storage.gl_shichou_die) return true;
								return false;
							}
							return true;
						},
						content() {
							if (trigger.name == 'die') {
								player.removeSkill('gl_shichou_die');
								player.restoreSkill('gl_shichou');
							} else {
								player.draw(2);
								player.loseHp();
							}
						},
					},
				},
			},
			gl_qvhu: {
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				filter(event, player) {
					if (ui.cardPile.childElementCount == 0) return false;
					return event.name != 'phase' || game.phaseNumber == 0;
				},
				forced: true,
				content() {
					'step 0';
					var list = [];
					for (let i = 0; i < ui.cardPile.childElementCount; i++) {
						list.push(ui.cardPile.childNodes[i]);
					}
					player.chooseButton(true, ['驱虎:我的乐雅哪去了？', list]);
					('step 1');
					if (result.bool && result.links && result.links.length) {
						player.markSkill('gl_qvhu');
						player.storage.gl_qvhu = result.links[0];
						player.addSkill('gl_qvhu_gain');
					} else {
						event.finish();
					}
					('step 2');
					if (player.storage.gl_qvhu) {
						player.chooseUseTarget(player.storage.gl_qvhu, true);
					} else {
						event.finish();
					}
					('step 3');
					if (result.bool && result.targets && result.targets.length) {
						player.chooseToDiscard(result.targets.length, 'he', true);
					}
				},
				intro: {
					content: '一名角色回合结束后,你获得$',
				},
				subSkill: {
					gain: {
						trigger: {
							global: 'phaseAfter',
						},
						charlotte: true,
						forced: true,
						filter(event, player) {
							var position = 'hejcd';
							return position.indexOf(get.position(player.storage.gl_qvhu)) != -1;
						},
						content() {
							player.gain(player.storage.gl_qvhu, 'gain2', 'log');
						},
					},
				},
			},
			gl_hunmu: {
				trigger: {
					global: 'phaseUseBegin',
				},
				logTarget: 'player',
				filter(event, player) {
					return event.player != player;
				},
				content() {
					'step 0';
					player.draw(2);
					player.swapHandcards(trigger.player);
					('step 1');
					player.gl_eventAfter(
						'gl_hunmu',
						function () {
							player.swapHandcards(target);
							player.chooseToDiscard(2, true, 'he');
						},
						trigger
					).target = trigger.player;
				},
			},
			gl_zhici: {
				trigger: {
					global: 'damageEnd',
				},
				filter(event, player) {
					return event.source && player.canCompare(event.source);
				},
				logTarget: 'source',
				content() {
					'step 0';
					player.chooseToCompare(trigger.source);
					('step 1');
					if (result.bool) {
						player.chooseToUse();
					} else {
						var cards = [];
						if (get.position(result.player) == 'd') {
							cards.push(result.player);
						}
						if (get.position(result.target) == 'd') {
							cards.push(result.target);
						}
						trigger.source.gain(cards, 'gain2');
					}
				},
			},
			gl_qvanjiu: {
				enable: 'chooseToUse',
				filterCard: true,
				viewAs: {
					name: 'jiu',
				},
				usable: 1,
				hiddenCard(player, name) {
					if (name == 'jiu') return player.countCards('h');
				},
				prompt: '将一张手牌当酒使用',
				onuse(result, player) {
					var target = result.targets[0];
					target.turnOver();
					target.draw(2);
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (target.countCards('h') == 0) return;
							if (get.skillCount('gl_qvanjiu', target)) return;
							if (target.isTurnedOver()) {
								if (get.tag(card, 'damage') && target.hp == 1) {
									return [1, 5];
								}
							}
						},
					},
				},
				group: 'gl_qvanjiu_phase',
				subSkill: {
					phase: {
						trigger: {
							global: 'phaseZhunbeiBegin',
						},
						forced: true,
						filter(event, player) {
							return event.player != player && player.hasUsableCard('jiu');
						},
						content() {
							player
								.chooseToUse(
									function (card, player, event) {
										return card.name == 'jiu';
									},
									'劝酒:是否对' + get.translation(trigger.player) + '使用一张酒？'
								)
								.set('filterTarget', function (card, player, target) {
									return target == trigger.player;
								});
						},
					},
				},
			},
			gl_leyan: {
				trigger: {
					global: 'useCard',
				},
				prompt(event) {
					return '是否成为' + get.translation(event.card) + '的额外目标？';
				},
				filter(event, player) {
					if (event.player == player) return false;
					if (event.targets.includes(player)) return false;
					if (event.targets.length == 0) return false;
					var type = get.type(event.card);
					return type == 'trick' || type == 'basic';
				},
				content() {
					trigger.targets.push(player);
				},
			},
			gl_moling: {
				gl_wuzhuang: {
					name: 'gl_shendeng',
					number: 13,
					suit: 'heart',
				},
				derivation: ['gl_shendeng'],
				trigger: {
					global: 'useCardToPlayered',
				},
				filter(event, player) {
					if (!event.targets.includes(player) && event.player != player) return false;
					return player.countCards('h') == 0;
				},
				forced: true,
				content() {
					trigger.parent.cancel();
					player.draw();
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (target.countCards('h') == 0) {
								return [0, 0.2];
							}
						},
					},
				},
			},
			gl_biantong: {
				trigger: {
					player: ['damageBegin4', 'recoverBegin'],
					source: ['damageBegin4', 'recoverBegin'],
				},
				filter(event, player) {
					if (event.name == 'damage') return event.player.countCards('he') >= 2;
					return true;
				},
				forced: true,
				content() {
					'step 0';
					if (trigger.name == 'damage') {
						var next = player.discardPlayerCard(trigger.player, 'he', 2);
						next.prompt = get.prompt('gl_biantong', trigger.player);
					} else {
						player.chooseBool(get.prompt('gl_biantong', trigger.player));
					}
					('step 1');
					if (result.bool) {
						if (trigger.name == 'recover') {
							trigger.player.draw(2);
						}
						trigger.cancel();
					}
				},
			},
			gl_juedao: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					var skills = target.skills.slice(0);
					for (let i = 0; i < skills.length; i++) {
						var name = skills[i];
						if (lib.skill[name].fixed) continue;
						if (!lib.translate[name] || lib.translate[name].length == 0) continue;
						if (!lib.translate[name + '_info'] || lib.translate[name + '_info'].length == 0) {
							continue;
						}
						return true;
					}
					return false;
				},
				content() {
					'step 0';
					var skills = target.skills.slice(0);
					var list = [];
					for (let i = 0; i < skills.length; i++) {
						var name = skills[i];
						if (lib.skill[name].fixed) continue;
						if (!lib.translate[name] || lib.translate[name].length == 0) continue;
						if (!lib.translate[name + '_info'] || lib.translate[name + '_info'].length == 0) {
							continue;
						}
						list.push(name);
					}
					if (list.length) {
						player.chooseButtonSkill(list);
					}
					('step 1');
					if (result.bool) {
						var skill = result.links[0];
						target.gainMaxHp();
						target.recover();
						target.removeSkill(skill);
						var name = skill + '_glskill';
						if (!lib.card[name]) {
							lib.card[name] = get.copy(lib.skill.gl_juedao.card);
							lib.card[name].skill = skill;
							lib.translate[name] = lib.translate[skill];
							var str = '出牌阶段,对一名角色使用.其失去1点体力上限并获得技能【';
							str += lib.translate[skill] + '】(';
							str += lib.translate[skill + '_info'] + ')';
							lib.translate[name + '_info'] = str;
						}
						player.gain(game.createCard(name), 'gain2');
					}
				},
				card: {
					fullskin: true,
					type: 'skill',
					filterTarget(card, player, target) {
						var skill = get.info(card).skill;
						return !target.hasSkill(skill);
					},
					chongzhu: true,
					ai: {
						basic: {
							order: 1,
							useful: 1,
							value: 4,
						},
						result: {
							target(player, target, card) {
								if (target.maxHp < 3) return -10;
								var skill = get.info(card).skill;
								return get.skillRank(skill);
							},
						},
					},
					image: 'ext:格林笔记/card/gl_skill.png',
					selectTarget: 1,
					enable: true,
					content() {
						target.loseMaxHp();
						var skill = get.info(card).skill;
						target.addSkill(skill);
					},
					allowMultiple: false,
				},
				ai: {
					threaten: 4,
				},
			},
			gl_yinwu: {
				trigger: {
					player: 'phaseAfter',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2('gl_yinwu')).set('ai', function (target) {
						var player = _status.event.player;
						var att = get.attitude(player, target);
						if (att > 0) {
							if (target != player.storage.gl_yinwu) {
								return get.threaten(target);
							}
						}
						return 0;
					});
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						target.addSkill('qianxing');
						target.addSkill('mianyi');
						player.addSkill('gl_yinwu_lose');
						if (player.storage.gl_yinwu == target) {
							player.loseMaxHp();
						}
						player.storage.gl_yinwu = target;
					} else {
						delete player.storage.gl_yinwu;
					}
				},
				ai: {
					threaten: 4,
				},
				subSkill: {
					lose: {
						trigger: {
							player: ['phaseBefore', 'dieAfter'],
						},
						_priority: 50,
						silent: true,
						charlotte: true,
						forceDie: true,
						filter(event, player) {
							return player.storage.gl_yinwu;
						},
						content() {
							var target = player.storage.gl_yinwu;
							target.removeSkill('qianxing');
							target.removeSkill('mianyi');
							player.removeSkill('gl_yinwu_lose');
						},
						forced: true,
						popup: false,
					},
				},
			},
			gl_hongtu: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				derivation: 'gl_juedao',
				forced: true,
				juexingji: true,
				filter(event, player) {
					return !game.hasPlayer(function (current) {
						return !current.hasSkill('gl_hundun');
					});
				},
				content() {
					'step 0';
					player.awakenSkill('gl_hongtu');
					player.storage.gl_hongtu = true;
					('step 1');
					player.addSkill('gl_juedao');
					player.removeSkill('gl_yinwu');
					player.discard(player.getCards('he'));
					player.recover();
				},
				ai: {
					threaten: 4,
				},
			},
			gl_qinshi: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				content() {
					if (target.hasSkill('gl_hundun')) {
						target.loseMaxHp();
						target.draw(4);
					} else {
						target.addSkill('gl_hundun');
						player.getStat().skill.gl_qinshi--;
					}
				},
			},
			gl_zuijiu: {
				enable: 'chooseToUse',
				round: 1,
				filterCard: true,
				selectCard: [1, Infinity],
				position: 'he',
				viewAs: {
					name: 'jiu',
				},
				hiddenCard(player, name) {
					if (name == 'jiu') return player.countCards('h');
				},
				prompt: '将任意手牌当【酒】使用',
				group: 'gl_zuijiu_use',
				subSkill: {
					use: {
						trigger: {
							player: 'useCard',
						},
						forced: true,
						popup: false,
						filter(event, player) {
							if (!event.cards) return false;
							return event.skill == 'gl_zuijiu' && event.cards.length > 1;
						},
						content() {
							trigger.baseDamage += trigger.cards.length - 1;
							player.turnOver();
						},
					},
				},
			},
			gl_yehuo: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				selectTarget() {
					if (ui.selected.cards.length) return [1, 2];
					return [1, 1];
				},
				position: 'he',
				complexSelect: true,
				complexCard: true,
				filterCard: true,
				selectCard() {
					if (ui.selected.cards.length) return 4;
					return [0, 1];
				},
				multitarget: true,
				multiline: true,
				content() {
					'step 0';
					if (cards.length == 4) {
						player.getStat('skill').gl_yehuo--;
					}
					('step 1');
					if (event.num < targets.length) {
						targets[event.num].damage('fire', 1, 'nocard');
						event.num++;
						event.redo();
					}
				},
			},
			gl_guishou: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
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
						var target = event.targets[num];
						target
							.chooseCard('he', '是否交给' + get.translation(player) + '一张牌？')
							.set('ai', function (card) {
								var target = _status.event.player;
								if (_status.event.goon > 3) {
									var num = game.countPlayer(function (current) {
										if (get.attitude(target, current) < 0) {
											return false;
										}
										if (current == player) return false;
										if (current.isLinked()) return false;
										return true;
									});
									if (player.countCards('he') > 7 && num == 0) {
										return 0;
									}
									return get.value(card);
								}
								if (_status.event.goon > 0) {
									return 9 - get.value(card);
								}
								var num = player.getStat('skill').gl_yehuo || 0;
								if (_status.event.goon < 0 && num == 0) {
									if (player.countCards('he') > 9) {
										return 6 - get.value(card);
									}
									if (player.countCards('he') < 4) return 0;
									if (target.isLinked()) {
										return 4 - get.value(card);
									}
								}
								return 5 - get.value(card);
							})
							.set('goon', get.attitude(target, player));
					} else {
						event.finish();
					}
					('step 3');
					if (result.bool) {
						event.targets[num].give(result.cards, player, true);
						event.targets[num].draw();
					} else {
						event.targets[num].link(true);
					}
					event.num++;
					if (event.num < event.targets.length) event.goto(2);
					('step 4');
					event.count--;
					if (event.count) {
						player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
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
								if (player.hasSkillTag('jueqing', false, target)) {
									return [1, -2];
								}
								var num = game.countPlayer(function (current) {
									if (current.countCards('he') && current != player && get.attitude(player, current) > 0) {
										return true;
									}
								});
								return [1, num];
							}
						},
					},
				},
			},
			gl_paoxiao: {
				init(player, skill) {
					player.addFellow('gl_daxiong');
				},
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseToDiscard(get.prompt(event.name), 'he', [0, Infinity]);
					('step 1');
					if (result.bool) {
						player.draw(9 - player.countCards('h'));
						player.addSkill('gl_paoxiao_change');
						player.storage.gl_paoxiao_change += result.cards.length;
					}
				},
				subSkill: {
					change: {
						trigger: {
							player: 'phaseUseBegin',
						},
						mark: true,
						intro: {
							content: '下个出牌阶段开始时,需将手牌调整至#',
						},
						init(player, skill) {
							player.storage[skill] = 0;
						},
						forced: true,
						content() {
							player.removeSkill('gl_paoxiao_change');
							var num = Math.min(player.storage.gl_paoxiao_change, player.maxHp + player.getDamagedHp());
							num = num - player.countCards('h');
							if (num == 0) return;
							if (num > 0) player.draw(num);
							else player.chooseToDiscard('h', true, -num);
						},
					},
				},
			},
			gl_tanfeng: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.canCompare(current);
					});
				},
				content() {
					'step 0';
					player.chooseTarget(get.prompt('gl_tanfeng'), function (card, player, target) {
						return player.canCompare(target);
					});
					('step 1');
					if (result.bool) {
						player.chooseToCompare(result.targets[0]);
					} else {
						event.finish();
					}
					('step 2');
					var list = [];
					if (result.bool) {
						for (let i = 0; i < lib.inpile.length; i++) {
							var type = get.subtype(lib.inpile[i]);
							if (type == 'equip1') {
								list.push(['装备', '', lib.inpile[i]]);
							}
						}
					} else {
						for (let i = 0; i < lib.inpile.length; i++) {
							var type = get.subtype(lib.inpile[i]);
							if (type == 'equip2') {
								list.push(['装备', '', lib.inpile[i]]);
							}
						}
					}
					player.chooseButton(['探风:请选择1种装备牌的效果获得', [list, 'vcard']]).set('filterButton', function (button) {
						var skills = lib.card[button.link[2]].skills;
						return skills && skills.length;
					});
					('step 3');
					if (result.bool) {
						var skills = lib.card[result.links[0][2]].skills;
						for (let i = 0; i < skills.length; i++) {
							player.addTempSkill(skills[i], {
								player: 'phaseBegin',
							});
						}
					}
				},
			},
			gl_zhaolei: {
				trigger: {
					player: 'phaseJudgeBegin',
				},
				lastDo: true,
				_priority: -100,
				forced: true,
				filter(event, player) {
					return player.countCards('j') == 0;
				},
				content() {
					player.executeDelayCardEffect('shandian', player);
				},
				group: 'gl_zhaolei_judge',
				subSkill: {
					judge: {
						trigger: {
							player: 'judge',
						},
						filter(event, player) {
							return player.countCards('he') > 0;
						},
						forced: true,
						content() {
							'step 0';
							var str = '你的' + (trigger.judgestr || '') + '判定为';
							str += get.translation(player.judging[0]) + ',';
							str += get.prompt('gl_zhaolei_judge');
							player.chooseCard(str, 'he');
							('step 1');
							if (result.bool) {
								var card = result.cards[0];
								player.$throw(card);
								card.clone.classList.add('thrownhighlight');
								game.addVideo('highlightnode', player, get.cardInfo(card));
								game.broadcast(function (card) {
									if (card.clone) {
										card.clone.classList.add('thrownhighlight');
									}
								}, card);
								var next = player.lose(card, ui.ordering, 'visible');
								next.noOrdering = true;
							} else {
								event.finish();
							}
							('step 2');
							if (result.bool) {
								player.$gain2(player.judging[0]);
								player.gain(player.judging[0]);
								player.judging[0] = result.cards[0];
								trigger.orderingCards.addArray(result.cards);
								game.log(player, '的判定牌改为', result.cards[0]);
							}
							('step 3');
						},
					},
				},
			},
			gl_chiyuan: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.boss && player.boss.isIn();
				},
				async content(event, trigger, player) {
					await player.boss.swapHandcards(player);
					if (player.countCards('h') > player.boss.countCards('h')) {
						player.recover();
					} else {
						player.boss.recover();
					}
				},
			},
			gl_benxi: {
				trigger: {
					player: 'phaseBegin',
				},
				forced: true,
				filter(event, player) {
					return player.countCards('h');
				},
				content() {
					'step 0';
					player.chooseTarget(get.prompt('gl_benxi'));
					('step 1');
					if (result.bool) {
						player.discard(player.getCards('h'));
						result.targets[0].damage();
					}
				},
			},
			gl_yangwei: {
				trigger: {
					source: 'dieAfter',
				},
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return !current.isMad() && current != player;
					});
				},
				content() {
					for (const i of game.players) {
						if (i != player) {
							i.addTempSkill('mad');
						}
					}
				},
			},
			gl_pinle: {
				mod: {
					cardname(card, player, name) {
						if (player.countCards('h') != 1 || get.position(card) != 'h') return;
						var color = get.color(card);
						if (color == 'red') return 'tao';
						if (color == 'black') return 'wuzhong';
					},
				},
			},
			gl_shanjie: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				content() {
					'step 0';
					var num = target.maxHp - target.countCards('h');
					if (num > 0) target.draw(num);
					('step 1');
					player.chooseTarget(true, '善结:对1名角色造成1点伤害,若该角色不为' + get.translation(target) + '则你翻面');
					('step 2');
					if (result.bool) {
						result.targets[0].damage();
						if (result.targets[0] != target) {
							player.turnOver();
						}
					}
				},
			},
			// 每回合限一次,当你造成或受到伤害后,只有你弃置对方X张牌才能生效;本回合结束后,其执行一个额外的摸牌阶段与出牌阶段.(X为你当前的体力值)
			gl_liunian: {
				trigger: {
					global: 'damageEnd',
				},
				usable: 1,
				filter(event, player) {
					if (event.source == player) {
						return event.player.countCards('he') && player.hp > 0;
					}
					return event.player == player && event.source && event.source.countCards('he') && player.hp > 0;
				},
				logTarget(event, player) {
					if (event.player == player) return event.source;
					return event.player;
				},
				forced: true,
				async content(event, trigger, player) {
					const target = trigger.player == player ? trigger.source : trigger.player;
					const { links } = await player
						.discardPlayerCard(target, 'he', player.hp, 'visible')
						.set('ai', (b) => -get.attitude(player, target) * get.value(b.link))
						.forResult();
					if (links?.length) {
						target.gl_eventAfter('gl_liunian', function () {
							player.phaseDraw();
							player.phaseUse();
						});
					} else {
						player.getStat('triggerSkill').gl_liunian--;
					}
				},
				ai: {
					maixie: true,
					maixie_hp: true,
				},
			},
			gl_haichao: {
				enable: 'phaseUse',
				init(player) {
					player.equip(game.createCard('gl_donghailonggong'));
				}, //QQQ
				filter(event, player) {
					return ui.gl_map && ui.gl_map.name == 'gl_donghailonggong';
				},
				viewAs: {
					name: 'shuiyanqijunx',
				},
				filterCard() {
					return false;
				},
				selectCard: -1,
				selectTarget: -1,
				filterTarget: true,
				onuse(links, player) {
					ui.gl_map.destroy();
				},
				prompt: '将视为使用1张【水淹七军】',
				check(card) {
					return 15 - get.value(card);
				},
				group: 'gl_haichao_damage',
				subSkill: {
					damage: {
						trigger: {
							source: 'damageEnd',
						},
						forced: true,
						filter(event, player) {
							return event.parent.skill == 'gl_haichao';
						},
						popup: false,
						content() {
							if (player.hp < player.maxHp) {
								player.recover();
							} else {
								player.draw();
							}
						},
					},
				},
			},
			gl_xunhuan: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return target != player;
				},
				content() {
					player.turnOver();
					target.turnOver();
					player.chooseDrawRecover(2, true);
					target.chooseDrawRecover(2, true);
					player.gl_eventAfter('gl_xunhuan', function () {
						var h1 = player.countCards('h');
						var h2 = target.countCards('h');
						if (h1 == 0 || h2 == 0) {
							player.turnOver();
							target.turnOver();
						}
					}).target = target;
				},
				group: 'gl_xunhuan_phase',
				subSkill: {
					phase: {
						trigger: {
							global: 'phaseUseBegin',
						},
						filter(event, player) {
							return event.player != player;
						},
						content() {
							var next = game.createEvent('gl_xunhuan', false);
							next.player = player;
							next.target = trigger.player;
							next.setContent(lib.skill.gl_xunhuan.content);
						},
					},
				},
			},
			gl_zengjin: {
				trigger: {
					global: 'turnOverAfter',
				},
				forced: true,
				global: 'gl_zengjin_use',
				content() {
					'step 0';
					player.chooseToDiscard('he', get.prompt2(event.name, trigger.player), [1, Infinity]);
					('step 1');
					if (result.bool) {
						player.chooseButton(['赠锦:选择要交给' + get.translation(trigger.player), Array.from(ui.discardPile.childNodes)], result.cards.length, true);
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						trigger.player.gain(result.links, 'log', 'gain2').gaintag.push('gl_zengjin');
					}
				},
				subSkill: {
					use: {
						trigger: {
							player: ['useCardBefore', 'respondBefore'],
						},
						filter(event, player) {
							if (!event.card.cards) return false;
							var cards = event.card.cards;
							for (let i = 0; i < cards.length; i++) {
								if (cards[i].hasGaintag('gl_zengjin')) return true;
							}
							return false;
						},
						forced: true,
						content() {
							'step 0';
							event.num = 0;
							var cards = trigger.card.cards;
							for (let i = 0; i < cards.length; i++) {
								if (cards[i].hasGaintag('gl_zengjin')) event.num++;
							}
							player.chooseToDiscard('he', [1, event.num]).ai = function (card) {
								return 11 - get.value(card);
							};
							('step 1');
							if (result.bool) {
								event.num -= result.cards.length;
							}
							if (event.num > 0) {
								player.loseHp(event.num);
							}
						},
						mod: {
							cardDiscardable(card, player) {
								if (card.hasGaintag('gl_zengjin')) return false;
							},
						},
					},
				},
			},
			gl_jinghua: {
				trigger: {
					player: 'useCard',
				},
				forced: true,
				content() {
					player.gl_changeMp();
				},
				intro: {
					content: 'mark',
				},
				group: 'gl_jinghua_mark',
				subSkill: {
					mark: {
						enable: 'phaseUse',
						filter(event, player) {
							return player.gl_mp > 0;
						},
						filterTarget: true,
						content() {
							player.gl_changeMp(-1);
							target.gl_purge();
							target.turnOver(false);
							target.link(false);
							target.discard(target.getCards('j'));
						},
					},
				},
			},
			gl_shenqvan: {
				enable: 'phaseUse',
				filterCard: true,
				selectCard() {
					var player = _status.event.player;
					if (player.hasSkill('gl_ri')) return 3;
					if (player.hasSkill('gl_ming')) return 3;
					if (player.hasSkill('gl_yue')) return 3;
					return 0;
				},
				position: 'he',
				derivation: ['gl_riming', 'gl_yueri', 'gl_mingyue'],
				content() {
					'step 0';
					var list = [];
					if (!player.hasSkill('gl_ri')) {
						list.push('gl_ri');
					}
					if (!player.hasSkill('gl_ming')) {
						list.push('gl_ming');
					}
					if (!player.hasSkill('gl_yue')) {
						list.push('gl_yue');
					}
					player.chooseControl(list);
					('step 1');
					player.addSkill(result.control);
				},
			},
			gl_yindao: {
				enable: 'phaseUse',
				filterCard(card, player) {
					return !player.storage.gl_yindao.includes(card.suit);
				},
				init(player) {
					if (!player.storage.gl_yindao) {
						player.storage.gl_yindao = [];
					}
				},
				position: 'he',
				filterTarget: true,
				content() {
					'step 0';
					var evt = _status.event.getParent('phaseUse');
					if (evt && evt.name == 'phaseUse') {
						player.gl_eventAfter(
							'gl_yindao',
							function () {
								player.storage.gl_yindao = [];
							},
							evt
						);
					}
					var suit = cards[0].suit;
					player.storage.gl_yindao.push(suit);
					var name;
					if (suit == 'heart') name = 'taoyuan';
					if (suit == 'diamond') name = 'wuzhong';
					if (suit == 'spade') name = 'guohe';
					if (suit == 'club') name = 'tiesuo';
					if (name) {
						event.card = {
							name: name,
						};
						var range;
						switch (name) {
							case 'guohe':
								range = [1, 1];
								break;
							case 'tiesuo':
								range = [1, 2];
								break;
							case 'wuzhong':
								range = [1, 1];
								break;
							case 'taoyuan':
								range = [-1, -1];
								break;
						}
						event.range = range;
					} else {
						event.finish();
					}
					('step 1');
					if (event.range[1] > 0) {
						var next = player.chooseTarget();
						next.filterTarget = function (card, player, target) {
							return lib.filter.filterTarget2(event.card, player, target);
						};
						get.evtprompt(next, '请选择' + get.translation(event.card) + '的目标');
						next.selectTarget = event.range;
					} else {
						var targets = game.filterPlayer(function (current) {
							return lib.filter.filterTarget2(event.card, target, current);
						});
						event._result = {
							bool: true,
							targets: targets,
						};
					}
					('step 2');
					if (result.bool) {
						target.useCard(event.card, result.targets);
					}
				},
			},
			gl_rongzhuang: {
				gl_wuzhuang: [
					{
						name: 'gl_rongguangqiang',
						suit: 'spade',
						number: 13,
					},
					{
						name: 'gl_rongguangjia',
						suit: 'diamond',
						number: 6,
					},
					{
						name: 'gl_shengye',
						suit: 'club',
						number: 1,
					},
				],

				derivation: ['gl_rongguangqiang', 'gl_rongguangjia', 'gl_shengye'],
				enable: 'phaseUse',
				usable: 1,
				position: 'he',
				filterCard: {
					type: 'equip',
				},
				selectCard: [1, Infinity],
				selectTarget() {
					return ui.selected.cards.length;
				},
				filterTarget(card, player, target) {
					return target.hp < target.maxHp;
				},
				complexSelect: true,
				complexCard: true,
				prompt: '弃置装备区内任意张牌并令等量的角色回复1点体力',
				content() {
					target.recover();
				},
			},
			gl_yudi: {
				ai: {
					effect: {
						player(card, player, target) {
							if (get.tag(card, 'damage') && target.hp > 1) {
								if (player.hasSkillTag('jueqing', false, target)) return;
								if (get.attitude(player, target) > 0 && get.distance(player, target) <= 1) {
									if (target.hp >= 4) return [1, 0, 1, 3];
									if (target.hp == 3) return [1, 0, 1, 2];
									if (target.hp == 2) return [1, 0, 1, 1];
								}
							}
						},
					},
				},
				trigger: {
					global: 'damageEnd',
				},
				filter(event, player) {
					return get.distance(player, event.player) <= 1 && event.player.isIn();
				},
				forced: true,
				content() {
					'step 0';
					player.chooseToDiscard(get.prompt('gl_yudi', trigger.player), 'he');
					('step 1');
					if (result.bool) {
						trigger.player.draw(2);
					}
				},
			},
			gl_zhenjun: {
				trigger: {
					global: 'phaseAfter',
				},
				forced: true,
				filter(event, player) {
					if (event.player == player) return false;
					var num = 0;
					player.getHistory('lose', function (evt) {
						if (evt.cards) {
							num += evt.cards.length;
						}
					});
					var history = player.getHistory('damage', function (evt) {
						if (evt.hujia) return evt.num > evt.hujia;
						return evt.num > 0;
					});
					return history.length || num > 2;
				},
				content() {
					player.draw();
					player.phaseUse();
				},
			},
			gl_sushi: {
				trigger: {
					global: 'phaseBefore',
				},
				forced: true,
				contentx() {
					var storage = player.storage.gl_sushi;
					player.unmarkSkill('gl_sushi');
					if (storage) {
						var num = storage.hp - player.hp;
						if (num != 0) {
							player.changeHp(storage.hp - player.hp);
							player.dying();
						}
						num = storage.hs - player.countCards('h');
						if (num > 0) {
							player.draw(num);
						} else if (num < 0) {
							player.chooseToDiscard(-num, true);
						}
					}
				},
				content() {
					'step 0';
					var select = 1;
					if (game.players.length < 5) select = [1, 2];
					player.chooseTarget(get.prompt(event.name), select, function (card, player, target) {
						if (game.players.length < 5) return player != target;
						return true;
					});
					('step 1');
					if (result.bool) {
						for (var target of result.targets) {
							target.gl_eventAfter('gl_yindao', lib.skill.gl_sushi.contentx, trigger);
							target.storage.gl_sushi = {
								hp: target.hp,
								hs: target.countCards('h'),
							};
							target.markSkillCharacter('gl_sushi', player, '溯时', '回合结束时将体力值调整至' + target.storage.gl_sushi.hp + '、手牌数调整至' + target.storage.gl_sushi.hs);
						}
					}
				},
			},
			gl_jipo: {
				enable: 'phaseUse',
				filter(event, player) {
					return player.countCards('hes') > 0;
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						list.push(['延迟锦囊', '', 'lebu']);
						list.push(['延迟锦囊', '', 'bingliang']);
						return ui.create.dialog('急迫', [list, 'vcard'], 'hidden');
					},
					backup(links, player) {
						return {
							filterCard: true,
							viewAs: {
								name: links[0][2],
							},
							onuse(result, player) {
								var next = game.createEvent('gl_jipo_buff', false, _status.event.parent);
								next.player = result.targets[0];
								if (result.card.name == 'bingliang') {
									next.setContent(function () {
										player.recover();
									});
								}
								if (result.card.name == 'lebu') {
									next.setContent(function () {
										player.draw(2);
									});
								}
							},
							selectTarget: 1,
							filterTarget(card, player, target) {
								return target.canAddJudge({
									name: links[0][2],
									cards: [card],
								});
							},
							position: 'hes',
						};
					},
					prompt(links, player) {
						return '将1张牌当做' + get.translation(links[0][2]) + '使用';
					},
				},
				ai: {
					tag: {
						skip: 'phaseUse',
						skip: 'phaseDraw',
					},
				},
			},
			gl_jiance: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				filter(event, player) {
					return player.countCards('hej');
				},
				content() {
					'step 0';
					player.chooseTarget(get.prompt(event.name));
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						target.gainPlayerCard('hej', player, true);
						event.target = target;
					} else {
						event.finish();
					}
					('step 2');
					event.target.damage(trigger.source);
				},
			},
			gl_cansha: {
				trigger: {
					source: 'damageBegin2',
				},
				forced: true,
				lastDo: true,
				content() {
					trigger.num++;
					trigger.player.gl_eventAfter(
						'gl_cansha',
						function () {
							player.recover();
						},
						trigger
					);
				},
				group: 'gl_cansha_dying',
				subSkill: {
					dying: {
						trigger: {
							global: 'dying',
						},
						filter(event, player) {
							return player.countCards('h') < player.maxHp;
						},
						forced: true,
						content() {
							player.draw(player.maxHp - player.countCards('h'));
						},
					},
				},
			},
			gl_shibing: {
				trigger: {
					global: 'phaseBegin',
				},
				filter(event, player) {
					return event.player != player && player.countCards('h');
				},
				content() {
					trigger.player.gain(player.getCards('h'), player, 'giveAuto');
					trigger.player.gl_eventAfter(
						'gl_shibing',
						function () {
							if (target.isAlive() && !player.getStat('kill')) {
								target.gain(player.getCards('h'), player, 'giveAuto');
							}
						},
						trigger
					).target = player;
				},
			},
			gl_junlue: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				content() {
					'step 0';
					target.draw(2);
					('step 1');
					var num1 = target.countCards('h');
					var num2 = player.countCards('h');
					if (num1 > num2) {
						target.damage();
					}
					if (num1 < num2) {
						player.discardPlayerCard('hej', target, true, [1, 4]).filterButton = function (button) {
							if (ui.selected.buttons.length) {
								return get.position(button.link) == get.position(ui.selected.buttons[0].link);
							}
							return true;
						};
					}
				},
			},
			gl_touhuan: {
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					var type = get.type(event.card);
					if (type != 'trick' && type != 'basic') return false;
					return player.countCards('h');
				},
				forced: true,
				content() {
					'step 0';
					player.chooseCard(get.prompt(event.name));
					('step 1');
					if (result.bool) {
						player.gain(trigger.cards, 'gain2', 'log');
						player.lose(result.cards, 'visible', ui.ordering).relatedEvent = trigger.parent;
						var parent = trigger.parent;
						parent.cards = result.cards;
						parent.card = get.autoViewAs(result.cards[0], result.cards);
					}
				},
			},
			gl_haoshi: {
				trigger: {
					player: 'phaseDrawEnd',
				},
				forced: true,
				content() {
					'step 0';
					event.num = game.players.length;
					player.draw(event.num);
					('step 1');
					player.chooseCard('好施:请选择要置于牌堆顶的牌(先选在上)', true, event.num);
					('step 2');
					if (result.bool) {
						var cards = result.cards.slice(0);
						player.lose(cards, 'visible', 'insert', ui.cardPile);
						game.log(player, '将' + get.cnNumber(cards.length) + '张牌置于牌堆顶');
						game.updateRoundNumber();
					}
					('step 3');
					player.chooseUseTarget('wugu', true);
				},
			},
			gl_huanyuan: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.canMoveCard(null);
				},
				targetprompt: ['被移出', '被移入'],
				selectTarget: 2,
				multitarget: true,
				filterTarget(card, player, target) {
					if (ui.selected.targets.length) {
						var from = ui.selected.targets[0];
						var js = from.getCards('j');
						for (let i = 0; i < js.length; i++) {
							if (target.canAddJudge(js[i])) return true;
						}
						if (target.isMin()) return false;
						var es = from.getCards('e');
						for (let i = 0; i < es.length; i++) {
							if (target.isEmpty(get.subtype(es[i]))) return true;
						}
						return false;
					} else {
						var range = 'ej';
						return target.countCards(range) > 0;
					}
				},
				content() {
					'step 0';
					player
						.choosePlayerCard('ej', true, targets[0])
						.set('targets1', targets[1])
						.set('filterButton', function (button) {
							var targets1 = _status.event.targets1;
							if (get.position(button.link) == 'j') {
								return targets1.canAddJudge(button.link);
							} else {
								return targets1.isEmpty(get.subtype(button.link));
							}
						});
					('step 1');
					if (result.bool && result.links.length) {
						var link = result.links[0];
						if (get.position(link) == 'e') {
							event.targets[1].equip(link);
						} else if (link.viewAs) {
							event.targets[1].addJudge(
								{
									name: link.viewAs,
								},
								[link]
							);
						} else {
							event.targets[1].addJudge(link);
						}
						event.targets[0].$give(link, event.targets[1], false);
						game.log(event.targets[0], '的', link, '被移动给了', event.targets[1]);
					}
					('step 2');
					event.targets[0].recover();
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (get.attitude(player, target) > 0) return;
							if (get.type(card) == 'delay') return [1, 20];
						},
					},
				},
			},
			gl_huanchu: {
				trigger: {
					global: 'loseAfter',
				},
				filter(event, player) {
					return event.type == 'discard';
				},
				forced: true,
				content() {
					'step 0';
					var cards = trigger.cards.slice(0);
					var next = player.chooseToMove('幻出:是否将牌置于牌堆顶或牌堆底？');
					next.set('list', [
						['弃置牌', cards],
						['牌堆顶', []],
						['牌堆底', []],
					]);
					('step 1');
					var cards = [];
					var discard = [];
					if (result.bool && result.moved && (result.moved[1].length || result.moved[2].length)) {
						player.gl_eventAfter('gl_huanchu', lib.skill.gl_huanchu.use);
					}
					if (result.bool && result.moved && result.moved[1].length) {
						cards = result.moved[1].slice(0);
						game.log(player, '将' + get.cnNumber(cards.length) + '置于牌堆顶');
						while (cards.length) {
							var card = cards.pop();
							card.fix();
							ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
						}
					}
					if (result.bool && result.moved && result.moved[2].length) {
						cards = result.moved[2].slice(0);
						game.log(player, '将' + get.cnNumber(cards.length) + '置于牌堆底');
						while (cards.length) {
							var card = cards.pop();
							card.fix();
							ui.cardPile.appendChild(card);
						}
					}
					game.updateRoundNumber();
				},
				use() {
					'step 0';
					player.chooseBool('幻出:是否翻开牌堆底1张牌？');
					('step 1');
					if (result.bool) {
						event.cards = get.bottomCards();
						player.showCards(event.cards, '幻出');
						player.chooseUseTarget(event.cards, 'nodistance');
					} else {
						event.finish();
					}
					('step 2');
					if (!result.bool) {
						player.gain(event.cards, 'gain2', 'log');
						player.loseHp();
					}
					('step 3');
					delete player.storage.gl_huanchu;
				},
			},
			gl_ruixi: {
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(event, player) {
					if (!event.target || event.target.countCards('he') == 0) return false;
					return event.card && event.card.name == 'sha';
				},
				forced: true,
				content() {
					'step 0';
					player.discardPlayerCard(trigger.target, 'he', [1, 2]);
					('step 1');
					if (result.bool) {
						trigger.target.gl_eventAfter(
							'gl_ruixi',
							function () {
								var bool = game.hasPlayer(function (current) {
									return current.getHistory('damage', function (evt) {
										return evt.card == event.parent.card;
									}).length;
								});
								if (!bool) {
									player.draw(4);
								}
							},
							trigger.parent
						);
					}
				},
			},
			gl_qinting: {
				global: 'gl_qinting_give',
				subSkill: {
					give: {
						enable: 'phaseUse',
						usable: 1,
						filter(event, player) {
							return (
								player.countCards('he') &&
								game.hasPlayer(function (current) {
									return current.hasSkill('gl_qinting');
								})
							);
						},
						forced: true,
						delay: false,
						filterCard: true,
						discard: false,
						lose: false,
						position: 'he',
						check(card) {
							if (card.name == 'sha') return 5;
							return 8 - get.value(card);
						},
						content() {
							'step 0';
							var targets = game.filterPlayer(function (current) {
								return current.hasSkill('gl_qinting');
							});
							if (targets.length == 1) {
								event.target = targets[0];
								event.goto(2);
							} else if (targets.length) {
								player
									.chooseTarget(true, '选择【倾听】的目标', function (card, player, target) {
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
								event.card = cards[0];
								player.recover();
								if (event.target != player) {
									player.give(cards, event.target);
								} else {
									player.discard(event.card);
									event.finish();
								}
							} else {
								event.finish();
							}
							delete _status.noclearcountdown;
							game.stopCountChoose();
							('step 3');
							if (get.color(event.card) == 'black') {
								event.target.chooseToDiscard('he', true);
							}
						},
						ai: {
							order: 2,
							threaten: 1.5,
							result: {
								player(player) {
									var target = game.findPlayer(function (current) {
										return current.hasSkill('gl_qinting');
									});
									if (target) {
										return get.attitude(player, target) + player.getDamagedHp();
									}
								},
							},
						},
					},
				},
			},
			gl_xingshen: {
				trigger: {
					global: 'turnOverAfter',
				},
				forced: true,
				filter(event, player) {
					return !event.player.isTurnedOver();
				},
				content() {
					'step 0';
					player.discardPlayerCard(trigger.player, 'hej', [1, 2], '醒神:弃置其至多2张牌,其使用与弃置花色相同的没有次数与距离限制');
					('step 1');
					if (result.bool) {
						trigger.player.addTempSkill('gl_xingshen_use', {
							player: 'phaseAfter',
						});
						for (const i of result.links) {
							trigger.player.storage.gl_xingshen.add(i.suit);
						}
					}
				},
				subSkill: {
					use: {
						init(player) {
							if (!player.storage.gl_xingshen) {
								player.storage.gl_xingshen = [];
							}
						},
						mark: true,
						intro: {
							content(storage, player) {
								return '使用' + get.translation(player.storage.gl_xingshen) + '没有次数与距离限制';
							},
							onunmark(storage, player) {
								player.storage.gl_xingshen = [];
							},
						},
						mod: {
							cardUsable(card, player, num) {
								if (get.info(card) && get.info(card).forceUsable) return;
								if (player.storage.gl_xingshen.includes(card.suit)) {
									return Infinity;
								}
							},
							targetInRange(card, player, target) {
								if (player.storage.gl_xingshen.includes(card.suit)) {
									return true;
								}
							},
						},
					},
				},
			},
			gl_anshui: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				filter(event, player) {
					var history = player.getHistory('useCard');
					return history.length > 1;
				},
				forced: true,
				content() {
					'step 0';
					var num = Math.floor(player.getHistory('useCard').length / 2);
					player.chooseTarget(get.prompt(event.name), [1, num]);
					('step 1');
					if (result.bool) {
						event.targets = result.targets.slice(0);
					} else {
						event.finish();
					}
					('step 2');
					if (event.targets.length) {
						var target = event.targets.shift();
						var num = Math.min(target.maxHp - target.hp, target.maxHp);
						if (num > 0) {
							target.recover(num);
						}
						if (num < target.maxHp) {
							target.draw(target.maxHp - num);
						}
						target.turnOver();
						event.redo();
					}
				},
			},
			gl_suiqian: {
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					if (!get.tag(event.card, 'damage')) return false;
					return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
				},
				content() {
					player.gain(trigger.cards, 'gain2');
					trigger.parent.directHit.addArray(game.players);
				},
				ai: {
					effect: {
						target(card, player, target) {
							return [1, 0.55];
						},
					},
				},
			},
			gl_manyou: {
				trigger: {
					target: 'useCardToTargeted',
					player: 'useCardToPlayered',
				},
				filter(event, player) {
					if (!event.targets) return false;
					if (event.player == player) {
						if (event.targets.length == 1 && event.targets[0].countCards('h') != player.countCards('h')) return true;
					} else {
						if (event.player.countCards('h') != player.countCards('h')) return true;
					}
					return false;
				},
				forced: true,
				content() {
					'step 0';
					if (trigger.player == player) {
						if (player.countCards('h') > trigger.targets[0].countCards('h')) {
							player.chooseToDiscard(2, true, '漫游:请弃置2张牌并对' + get.translation(trigger.targets) + '造成1点伤害');
						} else {
							player.draw();
							event.finish();
						}
					} else {
						if (player.countCards('h') > trigger.player.countCards('h')) {
							player.chooseToDiscard(2, true, '漫游:请弃置2张牌并对' + get.translation(trigger.player) + '造成1点伤害');
						} else {
							player.draw();
							event.finish();
						}
					}
					('step 1');
					if (trigger.player == player) {
						trigger.targets[0].damage();
					} else {
						trigger.player.damage();
					}
				},
			},
			gl_mizong: {
				trigger: {
					global: 'phaseUseBegin',
				},
				filter(event, player) {
					return player.countCards('h');
				},
				forced: true,
				content() {
					'step 0';
					player.chooseCardTarget({
						prompt: get.prompt2('gl_mizong'),
						selectCard: [1, Infinity],
						selectTarget() {
							return ui.selected.cards.length;
						},
						filterCard: true,
						filterTarget: lib.filter.notMe,
						complexSelect: true,
						complexCard: true,
					});
					('step 1');
					if (result.bool) {
						event.targets = result.targets;
						event.cards = result.cards;
						event.num = 0;
					} else {
						event.finish();
					}
					('step 2');
					if (event.num < event.targets.length) {
						event.targets[event.num].gain(event.cards[event.num], player, 'giveAuto').gaintag.add('gl_mizong');
						event.num++;
						event.redo();
					}
					('step 3');
					player.gl_eventAfter('gl_mizong', lib.skill.gl_mizong.contentx, trigger).giveNum = event.cards.length;
				},
				contentx() {
					'step 0';
					event.num = 0;
					event.targets = game.players.slice(0);
					event.targets.remove(player);
					event.targets.sort(lib.sort.seat);
					('step 1');
					if (event.targets.length) {
						var target = event.targets.shift();
						var cards = target.getCards('h', function (card) {
							return card.hasGaintag('gl_mizong');
						});
						if (cards.length) {
							event.num += cards.length;
							player.gain(cards, target, 'giveAuto');
						}
						event.redo();
					}
					('step 2');
					if (event.num < event.giveNum) {
						player.moveCard(true);
					} else {
						event.finish();
					}
					('step 3');
					if (result.bool && result.targets[1] == player) {
						player.turnOver();
					}
				},
			},
			gl_songbie: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return target.countCards('h');
				},
				content() {
					'step 0';
					target.showHandcards();
					('step 1');
					var next = target.chooseCard('送别:请选择执行顺序(能使用的场合使用,不能使用的场合置于牌堆顶)', true, target.countCards('h'));
					next.ai = function (card) {
						var num = get.order(card);
						if (num > 0) return num;
						return Math.random() * 10;
					};
					('step 2');
					if (result.bool) {
						event.cards = result.cards.slice(0);
					} else {
						event.finish();
					}
					('step 3');
					if (event.cards.length) {
						var card = event.cards.shift();
						event.redo();
						if (
							!target.hasCard(function (card1) {
								return card == card1;
							}, 'h')
						) {
							return;
						}
						if (target.hasUseTarget(card)) {
							target.chooseUseTarget(card, true);
						} else {
							card.fix();
							ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
							game.log(target, '将', card, '置于牌堆顶');
							game.updateRoundNumber();
							target.update();
						}
					}
				},
			},
			gl_youren: {
				mod: {
					cardUsable(card, player, num) {
						if (card.skill == 'gl_youren') return Infinity;
					},
				},
				enable: 'chooseToUse',
				filter(event, player) {
					return event.filterCard(
						{
							name: 'sha',
							skill: 'gl_youren',
						},
						player,
						event
					);
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						for (let i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (get.type(name) == 'delay') list.push(['延迟锦囊', '', name]);
						}
						return ui.create.dialog('游刃', [list, 'vcard'], 'hidden');
					},
					filter(button, player) {
						return player.canAddJudge({ name: button.link[2] });
					}, //QQQ
					backup(links, player) {
						return {
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: {
								name: 'sha',
								gl_youren: links[0][2],
							},
							precontent() {
								'step 0';
								event.target = event.result.targets[0];
								player.choosePlayerCard(event.target, true, 'hej');
								('step 1');
								event.target.lose(result.cards, 'visible', ui.ordering);
								player.addJudge(
									{
										name: event.result.card.gl_youren,
									},
									result.cards
								);
							},
							filterTarget(card, player, target) {
								if (target.countCards('hej') == 0) return false;
								return player.canUse('sha', target);
							},
							selectTarget: 1,
						};
					},
					prompt(links, player) {
						return '游刃:视为使用1张不计入使用次数的【杀】';
					},
				},
				group: 'gl_youren_count',
				subSkill: {
					count: {
						trigger: {
							player: 'useCard',
						},
						forced: true,
						popup: false,
						filter(event, player) {
							return event.skill == 'gl_youren_backup';
						},
						content() {
							player.getStat().card.sha--;
						},
					},
				},
			},
			gl_xiangfu: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt(event.name), function (card, player, target) {
						return player != target;
					});
					('step 1');
					if (result.bool) {
						player.storage.gl_xiangfu = result.targets[0];
						player.addTempSkill('gl_xiangfu_damage', {
							player: 'phaseBegin',
						});
					}
				},
				subSkill: {
					damage: {
						group: 'gl_xiangfu_die',
						trigger: {
							global: 'damageEnd',
						},
						charlotte: true,
						forced: true,
						filter(event, player) {
							if (!player.storage.gl_xiangfu.isAlive()) return false;
							if (event.player == player.storage.gl_xiangfu) return true;
							if (event.source == player) return true;
							return false;
						},
						content() {
							'step 0';
							player.draw();
							player.chooseCard(true, 'he', '交给' + get.translation(player.storage.gl_xiangfu) + '一张牌');
							('step 1');
							player.storage.gl_xiangfu.gain(result.cards, player, 'give');
						},
					},
					die: {
						trigger: {
							global: 'dieAfter',
						},
						forced: true,
						filter(event, player) {
							return event.player == player.storage.gl_xiangfu;
						},
						content() {
							'step 0';
							player.discard(player.getCards('hej'));
							('step 1');
							player.chooseTarget('是否变更【相辅】？', function (card, player, target) {
								return player != target;
							});
							('step 2');
							if (result.bool) {
								player.storage.gl_xiangfu = result.targets[0];
							}
						},
					},
				},
			},
			gl_lvlu: {
				trigger: {
					global: 'phaseAfter',
				},
				filter(event, player) {
					if (event.player == player) return false;
					return player.getHistory('lose').length;
				},
				content() {
					'step 0';
					player.draw(2);
					('step 1');
					player.chooseToUse('旅路:请使用1张手牌');
					('step 2');
					var bool = player.hasHistory('sourceDamage', function (evt) {
						return evt.getParent(4) == event;
					});
					if (bool) {
						event.finish();
					} else {
						player.chooseCard('he', '旅路:请将2张牌以任意顺置于牌堆顶(先选择的在上)', true, 2);
					}
					('step 3');
					if (result.bool) {
						var cards = result.cards.slice(0);
						while (cards.length) {
							ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
						}
					}
				},
			},
			gl_kuangyi: {
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current.skipList.length == 0;
					});
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						return target.skipList.length == 0;
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						player.chooseCount('狂癔:请选择要摸的牌数', [2, player.hp * 2]).set('filterNum', function (num) {
							return num % 2 == 0;
						});
					} else {
						event.finish();
					}
					('step 2');
					if (result.num) {
						target.draw(result.num * 2);
						for (let i = 0; i < result.num; i++) {
							target.skipList.push('phaseJudge');
							target.skipList.push('phaseDraw');
						}
					}
				},
			},
			gl_luanwu: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('h') >= 4;
				},
				filterCard: true,
				selectCard: 4,
				content() {
					'step 0';
					event.num = 0;
					event.suits = [];
					('step 1');
					if (event.num < cards.length) {
						var suit = cards[event.num].suit;
						if (!event.suits.includes(suit)) {
							event.suits.push(suit);
							var card = {};
							switch (suit) {
								case 'heart':
									card.name = 'taoyuan';
									break;
								case 'diamond':
									card.name = 'wugu';
									break;
								case 'club':
									card.name = 'wanjian';
									break;
								default:
									card.name = 'nanman';
									break;
							} //QQQ
							player.chooseUseTarget(card, true);
						}
						event.num++;
						event.redo();
					}
				},
			},
			gl_guozao: {
				trigger: {
					player: 'useCardAfter',
				},
				filter(event, player) {
					if (!event.targets || event.targets.length != 1) return false;
					return event.targets[0] != player && event.targets[0].countCards('he') > 0;
				},
				forced: true,
				content() {
					'step 0';
					event.target = trigger.targets[0];
					event.num = player.getHistory('useCard').length;
					var next = event.target.chooseToDiscard(event.num, true, 'he');
					next.ai = function (card) {
						if (card.name == 'sha') return -12;
						return -get.useful(card);
					};
					('step 1');
					if (result.bool) {
						if (Array.isArray(result.cards))
							for (const i of result.cards) {
								if (i.name == 'sha') {
									var card = {
										name: 'sha',
										nature: 'fire',
									};
									if (target.canUse(card, player, false)) target.useCard(card, player, false);
									return;
								}
							}
						event.target.draw(event.num);
					}
				},
			},
			gl_dianfu: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				content() {
					'step 0';
					var list = [];
					for (let i = 0; i < lib.inpile.length; i++) {
						var type = get.type2(lib.inpile[i]);
						if (lib.inpile[i] == 'sha') continue;
						list.push([get.translation(type), '', lib.inpile[i]]);
					}
					player.chooseButton(['颠覆:请宣言一个牌名', [list, 'vcard']]);
					('step 1');
					if (result.bool) {
						player.storage.gl_dianfu_remove = result.links[0][2];
						player.addTempSkill('gl_dianfu_remove', {
							player: 'phaseBegin',
						});
					}
				},
				subSkill: {
					remove: {
						global: 'gl_dianfu_sha',
						mark: true,
						marktext: '覆',
						intro: {
							content(shadow) {
								return '所有角色的' + get.translation(shadow) + '视为没有次数限制的【杀】';
							},
						},
					},
					sha: {
						mod: {
							cardname(card, player, name) {
								if (card.name != name) return;
								var list = [];
								game.filterPlayer(function (current) {
									list.push(current.storage.gl_dianfu_remove);
								});
								if (list.includes(card.name)) return 'sha';
							},
							cardUsable(card, player, num) {
								if (!card.cards || card.cards.length != 1) return;
								if (card.name != 'sha') return;
								var bool = game.hasPlayer(function (current) {
									return card.cards[0].name == current.storage.gl_dianfu_remove;
								});
								if (bool) return Infinity;
							},
						},
					},
				},
			},
			gl_xifa: {
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					if (event.player.countCards('hej') == 0 && event.target.countCards('hej') == 0) return false;
					return event.card && event.card.name == 'sha' && event.player != event.target;
				},
				usable: 1,
				forced: true,
				content() {
					'step 0';
					var list = [];
					if (trigger.player.countCards('h') != 0 || trigger.target.countCards('h') != 0) list.push('手牌区');
					if (trigger.player.countCards('e') != 0 || trigger.target.countCards('e') != 0) list.push('装备区');
					if (trigger.player.countCards('j') != 0 || trigger.target.countCards('j') != 0) list.push('判定区');
					list.push('cancel2');
					player.chooseControl(list).set('prompt', get.prompt2(event.name));
					('step 1');
					if (result.control != 'cancel2') {
						event.control = result.control;
						if (result.control == '手牌区') {
							trigger.player.swapHandcards(trigger.target);
						}
						if (result.control == '装备区') {
							trigger.player.swapEquip(trigger.target);
						}
						if (result.control == '判定区') {
							trigger.player.swapJudge(trigger.target);
						}
					} else {
						player.getStat('triggerSkill').gl_xifa--;
						event.finish();
					}
					('step 2');
					event.bool = 'h';
					switch (result.control) {
						case '装备区':
							event.bool = 'e';
							break;
						case '判定区':
							event.bool = 'j';
							break;
					}
					var hs1 = trigger.player.countCards(event.bool);
					var hs2 = trigger.target.countCards(event.bool);
					if (hs1 != hs2) {
						if (hs1 > hs2) {
							trigger.target.recover();
						} else {
							trigger.player.recover();
						}
					}
				},
			},
			gl_chahui: {
				enable: 'phaseUse',
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return player.gl_statSKill('gl_chahui', current) < 1;
					});
				},
				filterTarget(card, player, target) {
					return player.gl_statSKill('gl_chahui', target) < 1;
				},
				content() {
					'step 0';
					player.gl_statSKill('gl_chahui', 1, target);
					target.draw(2);
					('step 1');
					var bool = target.countCards('he', function (card) {
						var pos = get.position(card);
						if (pos == 'h') {
							return target.canAddJudge({
								name: 'lebu',
								cards: [card],
							});
						}
						if (pos == 'e') {
							return lib.filter.cardDiscardable(card, target);
						}
						return false;
					});
					if (bool == 0) {
						event.finish();
						return;
					}
					var next = target.chooseCard('he', true, '茶会:弃置装备区内1张牌或将1张手牌当【乐不思蜀】对自己使用');
					next.ai = function (card) {
						var player = _status.event.player;
						var pos = get.position(card);
						if (pos == 'h') {
							if (player.hp > player.countCards('h') + 2) return 10 - get.value(card);
						}
						if (pos == 'e') {
							return 9 - get.value(card);
						}
						return 0;
					};
					next.filterCard = function (card, player) {
						var pos = get.position(card);
						if (pos == 'h') {
							return player.canAddJudge({
								name: 'lebu',
								cards: [card],
							});
						}
						if (pos == 'e') {
							return lib.filter.cardDiscardable(card, player);
						}
						return false;
					};
					('step 2');
					if (result.bool) {
						var pos = get.position(result.cards[0]);
						if (pos == 'h') {
							target.useCard(
								result.cards,
								{
									name: 'lebu',
								},
								target
							);
						}
						if (pos == 'e') {
							target.discard(result.cards);
						}
					}
				},
			},
			gl_bianhuan: {
				trigger: {
					player: 'useCard',
				},
				filter(event, player) {
					if (player.hasSkill('gl_bianhuan_name')) return false;
					if (!event.card || !event.card.name) return false;
					var type = get.type2(event.card);
					return type == 'trick' || type == 'basic';
				},
				forced: true,
				content() {
					trigger.gl_bianhuan = true;
					player.storage.gl_bianhuan = trigger.card;
					player.addSkill('gl_bianhuan_name');
				},
				subSkill: {
					name: {
						trigger: {
							player: 'useCardAfter',
						},
						_priority: 5,
						filter(event, player) {
							return !event.gl_bianhuan;
						},
						charlotte: true,
						forced: true,
						content() {
							player.removeSkill('gl_bianhuan_name');
						},
						mod: {
							cardname(card, player, name) {
								if (get.position(card) == 'h') return player.storage.gl_bianhuan.name;
							},
							cardnature(card, player) {
								if (get.position(card) == 'h') return player.storage.gl_bianhuan.nature;
							},
						},
					},
				},
			},
			gl_zizai: {
				mod: {
					targetInRange(card, player, target, now) {
						if (player.getHistory('useCard').length < player.hp) return true;
					},
					cardUsable(card, player, num) {
						if (player.getHistory('useCard').length < player.hp) return Infinity;
					},
				},
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				filter(event, player) {
					return player.countCards('h') < player.hp;
				},
				content() {
					player.draw(player.hp - player.countCards('h'));
				},
			},
			gl_xiadao: {
				enable: 'phaseUse',
				usable: 1,
				viewAs: {
					name: 'shunshou',
				},
				filter(event, player) {
					return player.countCards('hes');
				},
				filterCard: true,
				position: 'hes',
				prompt: '将一张牌当顺手牵羊使用',
				group: 'gl_xiadao_give',
				subSkill: {
					give: {
						trigger: {
							player: 'gainEnd',
						},
						filter(event, player) {
							return event.source && event.source != player;
						},
						forced: true,
						content() {
							'step 0';
							player.chooseCardTarget({
								filterTarget(card, player, target) {
									return player != target;
								},
								position: 'he',
								filterCard: true,
								prompt: '侠盗:将1张牌交给1名其他角色,若其对你造成过伤害则回复1点体力',
							});
							('step 1');
							if (result.bool) {
								var target = result.targets[0];
								target.gain(result.cards, event.player, 'giveAuto');
								player.line(result.targets, 'green');
								if (
									player.hasAllHistory('damage', function (evt) {
										return evt.source && evt.source == target;
									})
								) {
									player.recover();
								}
							}
						},
					},
				},
			},
			gl_yongjue: {
				enable: 'phaseUse',
				filterCard: true,
				selectCard: [0, Infinity],
				usable: 1,
				position: 'he',
				filterTarget(card, player, target) {
					return player.canUse('sha', target, false);
				},
				content() {
					var num = player.hp - 1;
					player.loseHp(num);
					var next = player.useCard(
						{
							name: 'sha',
							nature: 'fire',
						},
						target
					);
					next.baseDamage = num;
					next.card.gl_yongjue = cards.length;
				},
				group: 'gl_yongjue_hit',
				subSkill: {
					hit: {
						trigger: {
							player: 'shaHit',
						},
						forced: true,
						popup: false,
						filter(event, player) {
							return event.card && event.card.gl_yongjue;
						},
						content() {
							player.draw(trigger.card.gl_yongjue);
						},
					},
				},
			},
			gl_lingming: {
				trigger: {
					global: 'useCard',
				},
				filter(event, player) {
					if (player.hp == player.maxHp) return false;
					if (player.countCards('he') == 0) return false;
					return get.type2(event.card) == 'trick';
				},
				forced: true,
				content() {
					'step 0';
					player.chooseCard(get.prompt2(event.name), 'he');
					('step 1');
					if (result.bool) {
						player.lose(result.cards, ui.cardPile, 'visible', 'insert');
						player.$throw(result.cards, 1000);
						game.log(player, '将', result.cards, '置于牌堆顶');
						player.recover();
					} else {
						event.finish();
					}
					('step 2');
					if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o' && player.isMinHandcard()) {
						player.gain(trigger.cards, 'gain2', 'log');
					}
				},
			},
			gl_disha: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						return current.countCards('h');
					});
				},
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						return target.countCards('h');
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						event.target.showHandcards();
						var cards = event.target.getCards('h');
						var types = [];
						for (var card of cards) {
							types.add(get.type(card));
						}
						if (types < 3) {
							event.finish();
							return;
						}
						event.target.chooseCardButton(cards, 3).set('filterButton', function (button) {
							for (let i = 0; i < ui.selected.buttons.length; i++) {
								if (get.type(ui.selected.buttons[i].link) == get.type(button.link)) return false;
							}
							return true;
						});
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						target.chooseUseTarget(true, false, 'wanjian').cards = result.links;
					}
				},
			},
			gl_xianji: {
				trigger: {
					global: 'phaseAfter',
				},
				_priority: 5,
				filter(event, player) {
					var list = ['phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard'];
					for (let i = 0; i < list.length; i++) {
						if (!player.skipList.includes(list[i])) return true;
					}
					return false;
				},
				forced: true,
				content() {
					'step 0';
					var list = ['phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard'];
					for (let i = 0; i < list.length; i++) {
						if (player.skipList.includes(list[i])) list.splice(i--, 1);
					}
					list.push('cancel2');
					player.chooseControl(list);
					('step 1');
					if (result.control != 'cancel2') {
						player[result.control]();
						event.control = result.control;
					} else {
						event.finish();
					}
					('step 2');
					player.skip(event.control);
				},
			},
			gl_shiluo: {
				trigger: {
					player: 'damageEnd',
					source: 'damageSource',
				},
				filter(event, player) {
					return player.countCards('he');
				},
				forced: true,
				content() {
					'step 0';
					event.num = Math.min(trigger.num, 9);
					('step 1');
					player.chooseCard('he', get.prompt2(event.name)).set('ai', function (card) {
						return 5 - get.value(card);
					});
					('step 2');
					if (result.bool) {
						player.lose(result.cards, ui.discardPile, 'visible');
						player.$throw(result.cards, 1000);
						game.log(player, '将', result.cards, '置入了弃牌堆');
						player.draw().gaintag = ['gl_shiluo'];
						player.addSkill('gl_shiluo_recover');
						event.num--;
						if (event.num > 0) {
							event.goto(1);
						}
					}
				},
				mod: {
					cardUsable(card, player, num) {
						if (card.cards && card.cards.length == 1 && card.cards[0].hasGaintag('gl_shiluo')) return Infinity;
					},
				},
				subSkill: {
					recover: {
						trigger: {
							global: 'phaseAfter',
						},
						filter(event, player) {
							var cards = player.getCards('h', function (card) {
								return card.hasGaintag('gl_shiluo');
							});
							return cards.length == 0;
						},
						forced: true,
						content() {
							'step 0';
							player.removeSkill('gl_shiluo_recover');
							player.chooseTarget('失落:是否令1名角色回复1点体力？');
							('step 1');
							if (result.bool) {
								var target = result.targets[0];
								if (target.isDamaged()) {
									target.recover();
								} else {
									target.draw(2).gaintag = ['gl_shiluo'];
								}
							}
						},
					},
				},
			},
			gl_zuilun: {
				enable: 'phaseUse',
				filterTarget: true,
				filter(event, player) {
					return !player.hasSkill('gl_zuilun_lose');
				},
				content() {
					'step 0';
					player.addTempSkill('gl_zuilun_dying');
					target.draw(4);
					target.damage(2);
					player.loseMaxHp();
					('step 1');
					if (!player.hasSkill('gl_zuilun_dying')) {
						player.addTempSkill('gl_zuilun_lose');
					}
				},
				subSkill: {
					dying: {
						trigger: {
							global: 'dyingAfter',
						},
						charlotte: true,
						forced: true,
						_priority: 12,
						filter(event, player) {
							return event.player.isAlive();
						},
						content() {
							trigger.player.draw(2);
							player.removeSkill('gl_zuilun_dying');
						},
					},
					lose: {
						charlotte: true,
					},
				},
			},
			gl_dongcha: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name));
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						event.target = target;
						var cards = get.cards(5);
						event.cards = cards;
						event.hs = target.getCards('h');
						game.cardsGotoOrdering(cards);
						var next = player.chooseToMove(true, '洞察');
						next.set('list', [
							['牌堆顶', cards],
							[get.translation(target) + '的手牌', event.hs],
						]);
						next.set('filterMove', function (from, to, moved) {
							if (to == 1) return moved[1].length == event.cards.length;
							if (to == 2) return moved[2].length == event.hs.length;
							return true;
						});
						next.set('filterOk', function (moved) {
							return moved[1].length;
						});
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						var cards = result.moved[0].slice(0);
						var getCards = result.moved[1].slice(0);
						while (cards.length) {
							ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.firstChild);
						}
						var hs = target.getCards('h');
						getCards = getCards.filter((i) => !hs.includes(i));
						target.gain(getCards);
						game.updateRoundNumber();
					}
				},
			},
			gl_zhuichang: {
				enable: 'phaseUse',
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = [];
				},
				filter(event, player) {
					if (!player.storage.gl_permanent) return true;
					return player.storage.gl_permanent.draw > -2;
				},
				content() {
					player.gl_permanent('draw', -1);
					player.storage.gl_zhuichang.push(0);
					player.addSkill('gl_zhuichang_use');
				},
				subSkill: {
					use: {
						trigger: {
							player: 'useCardAfter',
						},
						charlotte: true,
						filter(event, player) {
							var storage = player.storage.gl_zhuichang;
							var goon;
							for (const i of storage) {
								if (i < 3) goon = true;
							}
							if (!goon) return false;
							if (event.parent.name == 'gl_zhuichang_use') return false;
							if (!event.targets || !event.card) return false;
							if (event.card && event.card.name == 'wuxie') return false;
							var type = get.type(event.card);
							if (type != 'trick' && type != 'basic') return false;
							var card = game.createCard(event.card.name, event.card.suit, event.card.number, event.card.nature);
							var targets = event._targets || event.targets;
							for (let i = 0; i < targets.length; i++) {
								if (!targets[i].isIn()) return false;
								if (
									!player.canUse(
										{
											name: event.card.name,
										},
										targets[i],
										false,
										false
									)
								) {
									return false;
								}
							}
							return true;
						},
						forced: true,
						content() {
							'step 0';
							event.num = 0;
							var storage = player.storage.gl_zhuichang;
							for (let i = 0; i < storage.length; i++) {
								if (storage[i] < 3) {
									event.num++;
									storage[i]++;
								}
							}
							('step 1');
							if (event.num) {
								var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
								player.useCard(card, (trigger._targets || trigger.targets).slice(0), false);
								event.num--;
								event.redo();
							}
						},
					},
				},
			},
			gl_yinling: {
				trigger: {
					global: 'phaseBegin',
				},
				filter(event, player) {
					return event.player != player;
				},
				logTarget: 'player',
				round: 1,
				content() {
					'step 0';
					player.addTempSkill('gl_yinling_use', 'phaseUseAfter');
					player.phaseUse();
					('step 1');
					var num = player.getHistory('useCard', function (evt) {
						return evt.skill == 'gl_yinling_use_backup';
					}).length;
					num += player.getHistory('respond', function (evt) {
						return evt.skill == 'gl_yinling_use_backup';
					}).length;
					trigger.player.draw(num);
				},
				subSkill: {
					use: {
						enable: ['chooseToUse', 'chooseToRespond'],
						hiddenCard(player, name) {
							var type = get.type(name);
							if (type != 'basic' && type != 'trick') return false;
							return _status.currentPhase.countCards('h') == 0;
						},
						filter(event, player) {
							return _status.currentPhase && _status.currentPhase.countCards('h');
						},
						chooseButton: {
							dialog(event, player) {
								return ui.create.dialog(get.translation(_status.currentPhase) + '的手牌', _status.currentPhase.getCards('h'), 'hidden');
							},
							filter(button, player) {
								return _status.event.parent.filterCard(button.link, player, _status.event.parent);
							},
							backup(links, player) {
								return {
									filterCard() {
										return false;
									},
									selectCard: -1,
									viewAs: links[0],
								};
							},
							prompt(links, player) {
								return '选择' + get.translation(links) + '的目标';
							},
						},
					},
				},
			},
			gl_chenmo: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				content() {
					'step 0';
					var list = ['basic', 'trick', 'equip'];
					var dialog = ui.create.dialog('沉默:请选择要获得牌的类型', 'hidden');
					dialog.forcebutton = true;
					for (const i of list) {
						var node = ui.create.div('.popup.text', dialog.content);
						dialog.buttons.add(node);
						var click = lib.config.touchscreen ? 'touchend' : 'click';
						node.addEventListener(click, ui.click.button);
						node.style.width = 'calc(100% - 30px)';
						node.style.position = 'unset';
						node.link = i;
						node.innerHTML = get.translation(i);
					}
					var next = player.chooseButton(dialog, [1, 3]);
					('step 1');
					if (result.bool) {
						var types = result.links.slice(0);
						player.storage.gl_chenmo_use = result.links;
						player.addTempSkill('gl_chenmo_use', {
							player: 'phaseBegin',
						});
						var cards = [];
						while (types.length) {
							var type = types.shift();
							cards.push(
								get.cardPile(function (card) {
									if (get.type2(card) == type) return true;
									return false;
								})
							);
						}
						if (cards.length) {
							player.showCards(cards);
							player.gain(cards, 'gain2', 'log');
						}
					}
				},
				subSkill: {
					use: {
						charlotte: true,
						trigger: {
							player: 'useCard',
						},
						mark: true,
						intro: {
							content: '当你使用$牌时,你需弃置1张手牌',
						},
						forced: true,
						filter(event, player) {
							if (!player.storage.gl_chenmo_use) return false;
							return player.storage.gl_chenmo_use.includes(get.type2(event.card));
						},
						content() {
							player.chooseToDiscard(true, '沉默:请弃置1张手牌');
						},
					},
				},
			},
			gl_ehan: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				mark: true,
				intro: {
					content: 'limited',
				},
				init(player, skill) {
					player.storage[skill] = false;
				},
				limited: true,
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name));
					('step 1');
					if (result.bool) {
						player.awakenSkill(event.name);
						var target = result.targets[0];
						event.targets = game.filterPlayer(function (current) {
							return target.inRange(current);
						});
					} else {
						event.finish();
					}
					('step 2');
					if (event.targets.length) {
						event.current = event.targets.shift();
						event.current.addTempClass('target');
						var num = event.current.countCards('h') - player.countCards('h');
						if (num > 0) {
							event.current.chooseToDiscard(true, '恶寒:请弃置' + num + '张牌', num);
						} else {
							event._result = {
								bool: false,
							};
						}
					} else {
						event.finish();
					}
					('step 3');
					if (!result.bool) {
						var targets = game.filterPlayer(function (current) {
							return get.distance(event.current, current) <= 1;
						});
						for (let i = 0; i < targets.length; i++) {
							targets[i].damage('ice');
						}
					}
					event.goto(2);
				},
			},
			gl_zhilun: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('h');
				},
				filterTarget(card, player, target) {
					return target != player;
				},
				content() {
					'step 0';
					event.num = player.countCards('h');
					player.chooseControl(['牌堆顶', '牌堆底']);
					('step 1');
					event.control = result.control;
					if (result.control == '牌堆底') {
						player.draw(num).bottom = true;
					} else {
						player.draw(num);
					}
					('step 2');
					event.hs = player.getCards('h');
					var next = player.chooseToMove(true, '知论');
					next.set('list', [['你的手牌', event.hs], ['置于' + (event.control == '牌堆底' ? '牌堆顶' : '牌堆底') + '的牌'], ['置入' + get.translation(target) + '区域内的牌']]);
					next.set('filterOk', function (moved) {
						if (moved[2].length == 0) return false;
						if (moved[0].length && moved[1].length < event.num) return false;
						return true;
					});
					('step 3');
					if (result.bool) {
						var cards = result.moved[1];
						var card = result.moved[2];
						if (get.type(card) == 'equip' && target.isEmpty(get.subtype(card))) {
							player.$give(card, target, false);
							target.equip(card);
						} else if (get.type(card) == 'delay' && !target.storage._disableJudge && !target.hasJudge(card.name)) {
							player.$throw(card);
							target.addJudge(card);
						} else {
							target.gain(card, player, 'giveAuto');
						}
						if (event.control == '牌堆底') {
							player.lose(cards, 'visible', 'insert', ui.cardPile);
						} else {
							player.lose(cards, 'visible', ui.cardPile);
						}
						game.updateRoundNumber();
					}
				},
			},
			gl_duizhi: {
				trigger: {
					global: 'damageAfter',
				},
				forced: true,
				filter(event, player) {
					if (event.gl_duizhi) return false;
					return event.source && event.getParent(2).skill == 'gl_duizhi_juedou';
				},
				content() {
					'step 0';
					trigger.gl_duizhi = true;
					trigger.player.chooseCard('he', '对峙:将1张牌交给' + get.translation(trigger.source) + ',或令其将手牌补至体力上限').ai = function (card) {
						var att = get.attitude(trigger.player, trigger.source);
						var num = trigger.source.maxHp - trigger.source.countCards('h');
						if (num <= 0) {
							if (att < 0) {
								return 0;
							} else {
								return 6 - get.value(card);
							}
						}
						if (att < 0) {
							return 3 * num - get.value(card);
						} else {
							return 0;
						}
					};
					('step 1');
					if (result.bool) {
						trigger.player.give(result.cards, trigger.source, true);
					} else {
						trigger.source.draw(trigger.source.maxHp - trigger.source.countCards('h'));
					}
				},
				global: 'gl_duizhi_juedou',
				subSkill: {
					juedou: {
						enable: 'phaseUse',
						viewAs: {
							name: 'juedou',
						},
						filter(event, player) {
							return game.hasPlayer(function (current) {
								return current.hasSkill('gl_duizhi');
							});
						},
						filterTarget(card, player, target) {
							if (!player.canUse('juedou', target) || target.hasSkill('gl_duizhi_lose')) return false;
							if (player.hasSkill('gl_duizhi')) return true;
							return target.hasSkill('gl_duizhi');
						},
						onuse(result, player) {
							result.targets[0].addTempSkill('gl_duizhi_lose', {
								player: 'phaseAfter',
							});
						},
						filterCard() {
							return false;
						},
						selectCard: -1,
					},
					lose: {
						charlotte: true,
					},
				},
			},
			gl_shipo: {
				trigger: {
					global: 'gainAfter',
				},
				filter(event, player) {
					var hs1 = player.getCards('h');
					var hs2 = event.player.getCards('h');
					if (hs1 < hs2) {
						var evt = event.getl(player);
						return evt && evt.cards2 && evt.cards2.length;
					}
					return false;
				},
				content() {
					'step 0';
					player.discardPlayerCard(trigger.player, 'he', true, 'visible', [1, 3]);
					('step 1');
					var hs1 = player.getCards('h');
					var hs2 = trigger.player.getCards('h');
					if (hs1 < hs2) {
						event.cards = result.cards.slice(0);
					} else {
						event.finish();
					}
					('step 2');
					if (event.cards.length) {
						player.useCard(event.cards.shift(), trigger.player);
						event.redo();
					}
				},
			},
			gl_shitan: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				content() {
					target.addTempSkill('gl_shitan_sha');
				},
				subSkill: {
					sha: {
						trigger: {
							global: 'phaseJieshuBegin',
						},
						filter(event, player) {
							var num =
								player.getHistory('useCard', function (evt) {
									return evt.card.name == 'sha';
								}).length +
								player.getHistory('respond', function (evt) {
									return evt.card.name == 'sha';
								}).length;
							return num == 0;
						},
						charlotte: true,
						forced: true,
						content() {
							player.recover();
						},
						mod: {
							cardname(card, player, name) {
								if (get.position(card) == 'h') return 'sha';
							},
						},
					},
				},
			},
			gl_lueying: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				content() {
					'step 0';
					var next = player.chooseTarget(get.prompt2(event.name));
					next.ai = function (target) {
						var player = _status.event.player;
						return player.countCards('h') - target.countCards('h') - 2;
					};
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						var cards = event.target.getCards('h');
						player.storage.gl_lueying = event.target;
						player.addTempSkill('gl_lueying_draw');
						event.target.lose(ui.ordering, cards, 'insert');
						var next = event.target.chooseToMove('掠影:请将牌置于牌堆顶或置入弃牌堆');
						next.set('list', [
							['弃牌堆', cards],
							['牌堆顶', []],
						]);
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool && result.moved && result.moved[1].length) {
						var cards = result.moved[1].slice(0);
						game.log(player, '将' + get.cnNumber(cards.length) + '置于牌堆顶');
						while (cards.length) {
							var card = cards.pop();
							card.fix();
							ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
						}
						game.updateRoundNumber();
					}
				},
				subSkill: {
					draw: {
						trigger: {
							player: 'useCard',
						},
						filter(event, player) {
							return player.storage.gl_lueying && player.storage.gl_lueying.isAlive();
						},
						charlotte: true,
						forced: true,
						content() {
							player.storage.gl_lueying.draw();
						},
					},
				},
			},
			gl_qiangdou: {
				mod: {
					inRange(card, player, target, now) {
						if (_status.event.skill == 'gl_qiangdou') return true;
					},
				},
				enable: ['chooseToUse', 'chooseToRespond'],
				hiddenCard(player, name) {
					if (name != 'sha') return false;
					return player.countCards('hes');
				},
				filter(event, player) {
					return player.countCards('h');
				},
				selectCard: 2,
				filterCard: true,
				viewAs: {
					name: 'sha',
				},
				position: 'hes',
				group: 'gl_qiangdou_use',
				subSkill: {
					use: {
						trigger: {
							player: 'useCard',
						},
						forced: true,
						popup: false,
						filter(event, player) {
							return event.skill == 'gl_qiangdou' && event.targets && event.targets.length == 1;
						},
						content() {
							'step 0';
							event.target = trigger.targets[0];
							if (!player.inRange(event.target)) {
								player.getStat().card.sha--;
								event.finish();
							} else if (get.distance(player, event.target) <= 1) {
								player.discardPlayerCard('he', event.target, '弃置其1张牌或令此【杀】伤害+1');
							} else {
								event.finish();
							}
							('step 1');
							if (!result.bool) {
								if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
								trigger.baseDamage++;
							}
						},
					},
				},
			},
			gl_qiutong: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				forced: true,
				content() {
					'step 0';
					var next = player.chooseTarget(get.prompt2(event.name));
					next.filterTarget = function (card, player, target) {
						if (player.countCards('h') != target.countCards('h')) return true;
						if (player.countCards('e') != target.countCards('e')) return true;
						if (player.countCards('j') != target.countCards('j')) return true;
						return false;
					};
					next.ai = function (target) {
						return player.countCards('he') - target.countCards('he');
					};
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						map = {
							j: [player.countCards('j'), target.countCards('j')],
							e: [player.countCards('e'), target.countCards('e')],
							h: [player.countCards('h'), target.countCards('h')],
						};
						var cards = [],
							current;
						for (var i in map) {
							if (map[i][0] != map[i][1]) {
								if (map[i][0] < map[i][1]) {
									current = player;
								} else {
									current = target;
								}
								var card = get.cardPile(function (card) {
									if (i == 'e' && get.type(card) == 'equip' && current.isEmpty(get.subtype(card))) {
										return true;
									} else if (i == 'j' && get.type(card) == 'delay' && !current.storage._disableJudge && !current.hasJudge(card.name)) {
										return true;
									} else if (i == 'h') {
										return true;
									}
								}, 'cardPile');
								if (i == 'e') {
									current.equip(card);
								} else if (i == 'j') {
									current.addJudge(card);
								} else {
									current.gain(card, 'gain2');
								}
							}
						}
					}
				},
			},
			gl_lijian: {
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return player.countCards('he') && event.num > 0;
				},
				forced: true,
				content() {
					'step 0';
					event.count = Math.min(trigger.num, 9);
					('step 1');
					event.count--;
					event.bool = true;
					var next = player.chooseToDiscard('he', get.prompt2(event.name), [1, Infinity]);
					next.ai = function (card) {
						return 11 - get.value(card);
					};
					('step 2');
					if (result.bool) {
						event.cards = get.cards(result.cards.length);
					} else {
						event.finish();
					}
					('step 3');
					if (event.cards.length > 1) {
						player.chooseCardButton('将<砺剑>牌分配给任意角色', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
							if (ui.selected.buttons.length == 0) return 1;
							return 0;
						});
					} else if (event.cards.length == 1) {
						event._result = {
							links: event.cards.slice(0),
							bool: true,
						};
					} else {
						event.goto(6);
					}
					('step 4');
					if (result.bool) {
						for (const i of result.links) {
							event.cards.remove(i);
						}
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
							.set('enemy', get.value(event.togive[0], player, 'raw') < 0);
					}
					('step 5');
					if (result.targets.length) {
						result.targets[0].gain(event.togive, 'draw');
						if (result.targets[0] == player) event.bool = false;
						player.line(result.targets[0], 'green');
						game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
						event.goto(3);
					}
					('step 6');
					if (event.bool) {
						player.draw();
					}
					if (event.count > 0 && player.countCards('he')) event.goto(1);
				},
			},
			gl_yizhi: {
				enable: 'phaseUse',
				filterTarget: true,
				filter(event, player) {
					return !player.hasSkill('gl_yizhi_lose');
				},
				content() {
					'step 0';
					target.judge(function (card) {
						var color = get.color(card);
						if (color == 'red') return 2;
						return -2;
					}).judge2 = function (result) {
						return result.bool == false ? true : false;
					};
					('step 1');
					if (result.color == 'red') {
						target.recover();
					} else {
						target.damage('thunder', 'nosource');
						player.addTempSkill('gl_yizhi_lose');
					}
				},
				subSkill: {
					lose: {
						charlotte: true,
						forced: true,
					},
				},
			},
			// 当你使用牌指定其他角色/其他角色使用牌指定你为目标后,你可以将那张牌置于牌堆顶,若此为你本回合首次发动此技能,则你可以在弃置目标/此牌的使用者区域内1张牌
			gl_zhengtu: {
				trigger: {
					player: 'useCardToPlayer',
					target: 'useCardToPlayer',
				},
				forced: true,
				filter(event, player, name) {
					if (event.cards?.length) {
						if (event.player == player) {
							return event.target && event.target != player;
						} //QQQ
						return true;
					}
				},
				content() {
					'step 0';
					var next = player.chooseToMove('征途:是否将牌置于牌堆顶？');
					next.set('list', [
						['结算牌', trigger.cards],
						['牌堆顶', []],
					]);
					next.set('reverse', _status.currentPhase && _status.currentPhase.next ? get.attitude(player, _status.currentPhase.next) > 0 : false);
					next.set('processAI', function (list) {
						var cards = list[0][1].slice(0);
						cards.sort(function (a, b) {
							return (_status.event.reverse ? 1 : -1) * (get.value(b) - get.value(a));
						});
						return [cards];
					});
					next.set('filterOk', function (list) {
						return list[0].length == 0;
					});
					('step 1');
					var cards = [];
					if (result.bool && result.moved && result.moved[1] && result.moved[1].length) {
						cards = result.moved[1].slice(0);
						if (!player.getStat('triggerSkill').gl_zhengtu) {
							player.getStat('triggerSkill').gl_zhengtu = 1;
						} else {
							player.getStat('triggerSkill').gl_zhengtu++;
						}
					} else {
						event.finish();
					}
					while (cards.length) {
						var card = cards.pop();
						if (get.position(card, true) == 'o') {
							card.fix();
							ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
							game.log(player, '将', card, '置于牌堆顶');
						}
					}
					game.updateRoundNumber();
					('step 2');
					if (player.getStat('triggerSkill').gl_zhengtu == 1) {
						const target = event.player == player ? trigger.target : trigger.player;
						player.discardPlayerCard('hej', target);
					}
				},
			},
			gl_jingu: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				content() {
					'step 0';
					var list = [];
					for (let i = 0; i < lib.inpile.length; i++) {
						var type = get.type2(lib.inpile[i]);
						list.push([get.translation(type), '', lib.inpile[i]]);
					}
					player.chooseButton(['紧箍:请宣言一个牌名', [list, 'vcard']]);
					('step 1');
					if (result.bool) {
						player.storage.gl_jingu_nouse = result.links[0][2];
						player.addTempSkill('gl_jingu_nouse', {
							player: 'phaseBegin',
						});
					}
				},
				subSkill: {
					nouse: {
						mark: true,
						intro: {
							content(shadow) {
								return '所有角色使用的' + get.translation(shadow) + '无效';
							},
						},
						trigger: {
							global: 'useCard',
						},
						forced: true,
						filter(event, player) {
							return event.card && event.card.name == player.storage.gl_jingu_nouse;
						},
						content() {
							trigger.cancel();
							if (!player.getStat('triggerSkill')[event.name]) {
								player.getStat('triggerSkill')[event.name] = 1;
							} else {
								player.getStat('triggerSkill')[event.name]++;
							}
							var num = 3 - player.getStat('triggerSkill')[event.name];
							if (num > 0) {
								trigger.player.draw(num);
							}
						},
					},
				},
			},
			gl_gongji: {
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return !target.isLinked();
				},
				global: 'gl_gongji_buff',
				selectTarget: [1, Infinity],
				content() {
					target.link();
					target.draw();
				},
				subSkill: {
					buff: {
						mod: {
							maxHandcard(player, num) {
								if (
									game.hasPlayer(function (current) {
										return current.hasSkill('gl_gongji');
									}) &&
									player.isLinked()
								)
									return num + 3;
							},
							globalFrom(from, to) {
								if (
									game.hasPlayer(function (current) {
										return current.hasSkill('gl_gongji');
									}) &&
									from.isLinked() &&
									to.isLinked()
								) {
									return -Infinity;
								}
							},
						},
					},
				},
			},
			gl_hongde: {
				marktext: '德',
				intro: {
					content: 'expansion',
					markcount: 'expansion',
				},
				onremove(player, skill) {
					var cards = player.getExpansions(skill);
					if (cards.length) player.loseToDiscardpile(cards);
				},
				init(player, skill) {
					if (!player.storage[skill]) player.storage[skill] = 0;
				},
				trigger: {
					player: 'gainAfter',
				},
				forced: true,
				content() {
					player.storage.gl_hongde += trigger.cards.length;
					while (player.storage.gl_hongde >= 3) {
						player.storage.gl_hongde -= 3;
						player.addToExpansion(get.cards(), 'gain2').gaintag.add('gl_hongde');
					}
				},
				group: 'gl_hongde_mark',
				subSkill: {
					mark: {
						enable: 'chooseToUse',
						filter(event, player) {
							return player.getExpansions('gl_hongde').length;
						},
						hiddenCard(player, name) {
							if (player.getExpansions('gl_hongde').length == 0) return false;
							if (['wuxie', 'wugu', 'taoyuan', 'tiesuo'].includes(name)) return true;
						},
						chooseButton: {
							dialog(event, player) {
								var dialog = ui.create.dialog('弘德', 'hidden');
								dialog.add('要转换的牌');
								var list = ['wuxie', 'wugu', 'taoyuan', 'tiesuo'];
								var cards = [];
								for (let i = 0; i < list.length; i++) {
									cards.push(['锦囊', '', list[i]]);
								}
								dialog.add([cards, 'vcard']);
								dialog.add('被转换的牌');
								dialog.add(player.getExpansions('gl_hongde'));
								return dialog;
							},
							select: 2,
							complexSelect: true,
							filter(button, player) {
								if (
									Array.isArray(button.link) &&
									!_status.event.parent.filterCard(
										{
											name: button.link[2],
										},
										player,
										_status.event.parent
									)
								)
									return false;
								if (ui.selected.buttons.length) {
									return Array.isArray(button.link) != Array.isArray(ui.selected.buttons[0].link);
								}
								return true;
							},
							backup(links, player) {
								if (Array.isArray(links[1])) links.reverse();
								return {
									filterCard(card, player) {
										return card == links[1];
									},
									selectCard: -1,
									position: 'x',
									viewAs: {
										name: links[0][2],
										cards: [links[1]],
									},
									card: links[1],
								};
							},
							prompt(links, player) {
								return '将' + get.translation(links[1]) + '当做' + get.translation(links[0][2]) + '使用';
							},
						},
					},
				},
			},
			gl_tiangang: {
				trigger: {
					player: 'phaseDrawEnd',
				},
				forced: true,
				filter(event, player) {
					return player.countCards('h') > 1 && game.countPlayer() > 2;
				},
				content() {
					'step 0';
					player.chooseCardTarget({
						prompt: get.prompt2(event.name),
						filterCard: true,
						selectCard: [1, Infinity],
						position: 'he',
						filterTarget: lib.filter.notMe,
					});
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						target.gain(result.cards, player, 'giveAuto');
						target.addTempSkill('gl_tiangang_damage');
					}
				},
				subSkill: {
					damage: {
						trigger: {
							player: 'loseAfter',
						},
						forced: true,
						charlotte: true,
						content() {
							player.removeSkill('gl_tiangang_damage');
							player.damage(trigger.cards.length, 'nosource', 'thunder');
						},
					},
				},
			},
			gl_daiyu: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player != target && target.countCards('h') > 0;
				},
				selectTarget() {
					var player = _status.event.player;
					var num = player.getDamagedHp() - player.getHistory('useCard').length;
					if (num > 0) return [1, num];
					return [0, 0];
				},
				multitarget: true,
				multiline: true,
				content() {
					'step 0';
					if (targets.length) {
						player.gainPlayerCard(targets.shift(), 'hej', true);
						event.redo();
					}
					('step 1');
					var next = player.chooseToUse();
					next.set('openskilldialog', '怠欲:将牌当【决斗】使用,或结束出牌阶段');
					next.set('norestore', true);
					next.set('_backupevent', 'gl_daiyu_backup');
					next.backup('gl_daiyu_backup');
					('step 2');
					if (!result.bool) {
						var evt = _status.event.getParent('phaseUse');
						if (evt && evt.name == 'phaseUse') {
							evt.skipped = true;
						}
					}
				},
				subSkill: {
					backup: {
						filterCard(card, player, event) {
							var num = player.getDamagedHp() - player.getHistory('useCard').length;
							if (num > 0) return true;
							return false;
						},
						viewAs: {
							name: 'juedou',
						},
						selectCard() {
							var player = _status.event.player;
							var num = player.getDamagedHp() - player.getHistory('useCard').length;
							if (num > 0) return 2 * num;
							return -1;
						},
						position: 'hes',
						popname: true,
					},
				},
			},
			gl_chanyan: {
				trigger: {
					player: 'loseAfter',
				},
				filter(event, player) {
					if (event.type != 'discard') return false;
					for (let i = 0; i < event.cards2.length; i++) {
						if (get.position(event.cards2[i]) == 'd') {
							return true;
						}
					}
					return false;
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						if (player == target) return false;
						if (!target.countCards('h')) return false;
						if (player.hasSkillTag('noCompareSource') || target.hasSkillTag('noCompareTarget')) return false;
						return true;
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						var cards = [];
						for (let i = 0; i < trigger.cards2.length; i++) {
							if (get.position(trigger.cards2[i], true) == 'd') {
								cards.push(trigger.cards2[i]);
							}
						}
						if (cards.length > 1) {
							player.chooseCardButton('谗言:是否用其中1张牌进行拼点？', cards, true);
						} else {
							event._result = {
								bool: true,
								links: cards,
							};
						}
					} else {
						event.finish();
					}
					('step 2');
					var next = player.chooseToCompare(target);
					if (!next.fixedResult) next.fixedResult = {};
					next.fixedResult[player.playerid] = result.links[0];
					('step 3');
					if (result.bool) {
						player.chooseUseTarget('tao', true, false);
					} else if (target.canUse('sha', player, false)) {
						target.useCard(
							{
								name: 'sha',
							},
							player
						);
					}
				},
			},
			gl_jinwei: {
				trigger: {
					global: 'useCardToTarget',
				},
				filter(event, player) {
					if (player.countCards('he') == 0) return false;
					if (event.card.name != 'sha') return false;
					return get.distance(player, event.target) <= 1;
				},
				forced: true,
				content() {
					'step 0';
					player.chooseCard('he', get.prompt2(event.name, trigger.target), [1, 2]);
					('step 1');
					if (result.bool) {
						player.lose(result.cards, ui.discardPile, 'visible');
						player.$throw(result.cards, 1000);
						game.log(player, '将', result.cards, '置入了弃牌堆');
						player.draw(result.cards.length);
						if (trigger.target != player) {
							var evt = trigger.parent;
							evt.triggeredTargets2.remove(trigger.target);
							evt.targets.remove(trigger.target);
							evt.targets.push(player);
						}
					}
				},
				ai: {
					threaten: 1.1,
				},
			},
			gl_liusha: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name));
					('step 1');
					if (result.bool) {
						result.targets[0].addSkill('gl_liusha_buff');
						result.targets[0].storage.gl_liusha = player;
					}
				},
				subSkill: {
					buff: {
						trigger: {
							player: ['useCard', 'respond'],
							global: 'phaseBegin',
						},
						forced: true,
						filter(event, player) {
							if (event.name == 'phase') return event.player == player.storage.gl_liusha;
							return get.type(event.card) == 'basic';
						},
						content() {
							if (trigger.name == 'phase') {
								player.removeSkill('gl_liusha_buff');
							} else {
								player.draw();
							}
						},
						mark: true,
						intro: {
							content: '你的攻击距离-1且防御距离-2,;当你使用基本牌时,你摸1张牌',
						},
						charlotte: true,
						mod: {
							globalFrom(from, to, distance) {
								return distance + 1;
							},
							globalTo(from, to, current) {
								return current - 2;
							},
						},
					},
				},
			},
			gl_tiaohe: {
				mark: true,
				zhuanhuanji: true,
				marktext: '☯',
				intro: {
					content(storage, player, skill) {
						var str = '当你受到伤害后,你可以令1名角色展示手牌';
						str += player.storage.gl_tiaohe ? '其弃置X张颜色数较多的牌' : '其获得X张颜色数较少的牌';
						return str;
					},
				},
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt(event.name));
					('step 1');
					if (result.bool) {
						var target = result.targets[0];
						target.showHandcards();
						var red = target.getCards('h', {
							color: 'red',
						});
						var black = target.getCards('h', {
							color: 'black',
						});
						if (red.length != black.length) {
							var color;
							var num = Math.abs(black.length - red.length);
							if (red.length < black.length) {
								color = player.storage.gl_tiaohe ? 'black' : 'red';
							} else {
								color = player.storage.gl_tiaohe ? 'red' : 'black';
							}
							if (player.storage.gl_tiaohe) {
								target.chooseToDiscard(
									{
										color: color,
									},
									num,
									'调和:请选择要弃置的牌',
									true
								);
							} else {
								var cards = [];
								while (cards.length < num) {
									var card = get.cardPile(function (x) {
										if (cards.includes(x)) return false;
										if (get.color(x) == color) return true;
									});
									if (card) {
										cards.push(card);
									} else {
										break;
									}
								}
								target.gain(cards, 'gain2');
							}
						}
						player.changeZhuanhuanji('gl_tiaohe');
					}
				},
			},
			gl_pangui: {
				trigger: {
					player: 'loseAfter',
				},
				filter(event, player) {
					if (event.type != 'discard') return false;
					return player.countDisabled() != 0 && event.cards && event.cards.length;
				},
				forced: true,
				content() {
					'step 0';
					var list = [];
					for (let i = 1; i < 6; i++) {
						if (!player.isDisabled(i)) continue;
						list.push('equip' + i);
					}
					var dialog = ui.create.dialog('盼归:请选择要回复的装备区', 'hidden');
					dialog.forcebutton = true;
					for (let i = 0; i < list.length; i++) {
						var node = ui.create.div('.popup.text', dialog.content);
						dialog.buttons.add(node);
						var click = lib.config.touchscreen ? 'touchend' : 'click';
						node.addEventListener(click, ui.click.button);
						node.style.width = 'calc(100% - 30px)';
						node.style.position = 'unset';
						node.link = list[i];
						node.innerHTML = get.translation(list[i]);
					}
					var next = player.chooseButton(dialog, [1, trigger.cards.length]);
					('step 1');
					if (result.bool) {
						for (const i of result.links) {
							player.enableEquip(i);
						}
					}
				},
				mod: {
					globalFrom(from, to, distance) {
						return distance - Math.floor(from.getHistory('useCard').length / 2);
					},
				},
			},
			// 条件技,出牌阶段限一次,你可以废除一个装备栏,视为对攻击范围内的所有角色使用一张风【杀】,所有目标角色依次弃置两张牌
			gl_xvanfeng: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.hasEnabledSlot();
				},
				async content(event, trigger, player) {
					const list = [];
					for (let i = 1; i < 6; i++) {
						if (player.hasEnabledSlot(i)) {
							list.push('equip' + i);
						}
					}
					const { links } = await player
						.chooseButton(['请选择废除一个装备栏', [list.map((i) => [i, get.translation(i)]), 'tdnodes']])
						.set('ai', (b) => Math.random())
						.forResult();
					if (links?.length) {
						await player.disableEquip(links[0]);
						for (var target of game.players.filter((q) => player.inRange(q))) {
							await target.chooseToDiscard(2, true, 'he');
							await player.useCard(
								{
									name: 'sha',
									nature: 'wind',
								},
								target,
								false
							);
						}
					}
				},
			},
			gl_duobu: {
				trigger: {
					player: 'useCardToPlayer',
				},
				filter(event, player) {
					if (!event.isFirstTarget) return false;
					if (event.targets.length < player.countDisabled()) return false;
					return get.tag(event.card, 'damage');
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name), [player.countDisabled() || 1, Infinity], function (card, player, target) {
						return trigger.targets.includes(target);
					});
					('step 1');
					if (result.bool && result.targets.length) {
						trigger.targets.removeArray(result.targets);
						var history = player.getAllHistory('useCard', function (evt) {
							return evt != trigger.parent;
						});
						var cards;
						if (history[history.length - 1]) cards = history[history.length - 1].cards;
						if (cards) {
							player.gain(cards, 'gain2', 'log');
						}
					}
				},
			},
			gl_kuizhi: {
				trigger: {
					player: 'useCardToPlayered',
				},
				filter(event, player) {
					if (get.type(event.card) != 'trick') return false;
					if (!event.isFirstTarget) return false;
					if (player.countCards('he') == 0) return false;
					return true;
				},
				forced: true,
				content() {
					'step 0';
					var eff = get.effect(player, trigger.card, trigger.player, trigger.player);
					trigger.player.chooseCardTarget({
						filterCard: true,
						selectCard() {
							return [1, trigger.targets.length];
						},
						position: 'he',
						filterTarget(card, player, target) {
							return trigger.targets.includes(target);
						},
						selectTarget() {
							if (trigger.targets.length == 1) return [-1, -1];
							return ui.selected.cards.length;
						},
						complexSelect: true,
						complexCard: true,
						prompt: '匮智:弃置任意张牌并选择等量的目标,' + get.translation(trigger.card) + '将对你未选择的目标失效',
					});
					('step 1');
					var targets = [];
					targets.addArray(trigger.targets);
					if (result.bool) {
						player.discard(result.cards);
						targets.removeArray(result.targets);
					}
					trigger.parent.excluded.addArray(targets);
				},
			},
			gl_zhuwei: {
				trigger: {
					player: 'phaseUseAfter',
				},
				intro: {
					content(storage, player, skill) {
						var cards = [];
						player.getHistory('lose', function (evt) {
							var result = evt.getParent('phaseUse');
							if (!result || result.name != 'phaseUse') return false;
							if (!result.finished) {
								cards.addArray(evt.cards);
							}
						});
						var suits = [];
						for (let i = 0; i < cards.length; i++) {
							var suit = cards[i].suit;
							if (suit != 'none') suits.add(suit);
						}
						return '当前出牌阶段你已失去过' + get.translation(suits);
					},
				},
				forced: true,
				filter(event, player) {
					var cards = [];
					player.getHistory('lose', function (evt) {
						var result = evt.getParent('phaseUse');
						if (result != event) return false;
						cards.addArray(evt.cards);
					});
					var suits = [];
					for (let i = 0; i < cards.length; i++) {
						var suit = cards[i].suit;
						if (suit != 'none') suits.add(suit);
					}
					return suits.length == 4;
				},
				content() {
					'step 0';
					player.unmarkSkill('gl_zhuwei');
					player.chooseTarget(get.prompt2(event.name));
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						var str = get.translation(event.target);
						player.chooseControlList('助威', '令' + str + '失去1点体力', '令' + str + '回复1点体力', '令' + str + '执行1个额外的出牌阶段', true);
					} else {
						event.finish();
					}
					('step 2');
					switch (result.index) {
						case 0:
							event.target.loseHp();
							break;
						case 1:
							event.target.recover();
							break;
						case 2:
							var next = event.target.phaseUse();
							event.next.remove(next);
							trigger.next.push(next);
							break;
					}
				},
				group: 'gl_zhuwei_mark',
				subSkill: {
					mark: {
						trigger: {
							player: 'loseAfter',
						},
						forced: true,
						filter(event, player) {
							return player.isPhaseUsing();
						},
						content() {
							player.markSkill('gl_zhuwei');
						},
					},
				},
			},
			gl_qice: {
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return target.hp > 1;
				},
				usable: 1,
				content() {
					var num = target.hp - 1;
					target.draw(num);
					target.loseHp(num);
					target.addSkill('gl_qice_buff');
					target.storage.gl_qice_buff = num;
					target.storage.gl_qice = player;
				},
				subSkill: {
					buff: {
						charlotte: true,
						mark: true,
						trigger: {
							global: 'phaseUseBegin',
							player: 'damageEnd',
						},
						silent: true,
						forced: true,
						filter(event, player) {
							if (event.name == 'damage') return true;
							return event.player == player.storage.gl_qice;
						},
						content() {
							player.recover(player.storage.gl_qice_buff);
							player.removeSkill('gl_qice_buff');
						},
						intro: {
							content: '你的手牌上限为体力上限,当你受到伤害后你回复#点体力',
						},
						mod: {
							maxHandcardBase(player, num) {
								return player.maxHp;
							},
						},
					},
				},
			},
			gl_haoqi: {
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					if (event.card.name != 'juedou' && event.card.name != 'sha') return false;
					return true;
				},
				forced: true,
				content() {
					'step 0';
					player.draw();
					('step 1');
					if (get.color(trigger.card) == 'black') {
						var target = trigger.player == player ? trigger.target : trigger.player;
						target.draw();
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name != 'sha' && card.name != 'juedou') return;
							if (get.color(card) != 'black') return [1, 0.6];
						},
						player(card, player, target) {
							if (card.name != 'sha' && card.name != 'juedou') return;
							if (get.color(card) != 'black') return [1, 1];
						},
					},
				},
			},
			gl_caishi: {
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return target != player && target.hp < target.countCards('h');
				},
				filterCard: true,
				selectCard: 2,
				position: 'he',
				content() {
					'step 0';
					player.choosePlayerCard(target, 'h', target.countCards('h') - target.hp, true);
					('step 1');
					if (result.bool) {
						event.showcards = result.cards.slice(0);
						target.showCards(event.showcards);
					} else {
						event.finish();
					}
					('step 2');
					event.showcards = event.showcards.filter((i) => get.owner(event.showcards[i]) == target);
					if (event.showcards.length) {
						player.chooseCardButton('才识:请选择要使用的牌', event.showcards).set('filterButton', function (button) {
							return player.hasUseTarget(button.link);
						});
					} else {
						event.goto(5);
					}
					('step 3');
					if (result.bool) {
						event.showcards.removeArray(result.links);
						player.chooseUseTarget(result.links[0]);
						event.goto(2);
					}
					('step 4');
					if (target.hp < target.countCards('h')) {
						target.recover();
					}
				},
			},
			gl_futu: {
				trigger: {
					global: 'phaseJieshuBegin',
				},
				forced: true,
				filter(event, player) {
					if (event.player.countCards('he') == 0) return false;
					return event.player.hasHistory('lose', function (evt) {
						if (Array.isArray(evt.cards))
							for (const i of evt.cards) {
								if (get.position(i, true) == 'd') return true;
							}
					});
				},
				content() {
					'step 0';
					var cards = [];
					trigger.player.getHistory('lose', function (evt) {
						if (Array.isArray(evt.cards))
							for (const i of evt.cards) {
								if (get.position(i, true) == 'd') cards.add(i);
							}
					});
					player.chooseCardButton('复途:请选择要令' + get.translation(trigger.player) + '获得的牌', cards, [1, trigger.player.countCards('he')]);
					('step 1');
					if (result.bool) {
						trigger.player.gain(result.links, 'gain2', 'log');
						trigger.player.chooseToDiscard('he', true, result.links.length, function (card) {
							return !result.links.includes(card);
						});
					}
				},
			},
			gl_danlie: {
				trigger: {
					global: 'damageEnd',
				},
				forced: true,
				filter(event, player) {
					if (event.player == player) return true;
					return player.hasCard(function (card) {
						return lib.filter.cardDiscardable(card, player, 'gl_danlie') && card.name != 'shan';
					}, 'h');
				},
				content() {
					var hs = player.getCards('h', function (card) {
						return lib.filter.cardDiscardable(card, player, 'gl_danlie') && card.name != 'shan';
					});
					if (hs.length) player.discard(hs);
					var num = hs.length;
					if (trigger && trigger.player == player) num += 2;
					var cards = [];
					while (cards.length < num) {
						var card = get.cardPile(function (x) {
							if (cards.includes(x)) return false;
							if (x.name == 'shan') return true;
						});
						if (card) {
							cards.push(card);
						} else {
							break;
						}
					}
					player.gain(cards, 'gain2');
				},
			},
			gl_fenwei: {
				enable: 'phaseUse',
				filterTarget: true,
				filterCard: true,
				position: 'he',
				selectCard: [1, Infinity],
				check(card) {
					if (ui.selected.cards.length) return 0;
					return 8 - get.value(card);
				},
				content() {
					'step 0';
					var next = target.chooseToDiscard('he', '弃置' + cards.length + '张颜色各不相同的牌,或受到1点伤害并摸等量的牌');
					next.filterCard = function (card) {
						if (ui.selected.cards.length) {
							if (Array.isArray(ui.selected.cards))
								for (const i of ui.selected.cards) {
									if (get.color(i) == get.color(card)) return false;
								}
						}
						return true;
					};
					next.selectCard = function (card) {
						return [cards.length, cards.length];
					};
					next.ai = function (card) {
						if (card.name == 'tao') return -10;
						if (card.name == 'jiu' && _status.event.player.hp == 1) return -10;
						return get.unuseful(card) + 2.5 * (5 - get.owner(card).hp);
					};
					('step 1');
					if (!result.bool) {
						target.damage();
						target.draw(cards.length);
					}
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
			gl_zhenwei: {
				trigger: {
					global: 'phaseAfter',
				},
				forced: true,
				filter(event, player) {
					return (
						player.getHistory('useSkill', function (evt) {
							return evt.skill == 'gl_danlie';
						}).length == 0
					);
				},
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						return player != target;
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						event.link = event.target.useSkill('gl_danlie');
					}
					('step 2');
					var goon = target.hasHistory('lose', function (event) {
						if (event.type != 'discard') return false;
						var evt = event.getParent(2);
						if (evt && evt.player == target && evt.name == 'gl_danlie') {
							for (const i of event.cards2) {
								if (get.tag(i, 'damage')) return true;
							}
						}
					});
					if (goon) {
						player.recover();
					}
				},
			},
			gl_hunxin: {
				trigger: {
					player: 'loseAfter',
				},
				forced: true,
				filter(event, player) {
					if (player.countCards('h') == 0) return false;
					return event.type == 'discard';
				},
				content() {
					'step 0';
					var list = [];
					for (let i = 0; i < lib.inpile.length; i++) {
						var type = get.type2(lib.inpile[i]);
						if (!lib.card[lib.inpile[i]].selectTarget) continue;
						var range = get.select(lib.card[lib.inpile[i]].selectTarget);
						if (range[0] != 1 && range[1] != 1) continue;
						if (type == 'trick' || type == 'basic') {
							list.push([get.translation(type), '', lib.inpile[i]]);
						}
					}
					player.chooseButton(['魂心:请宣言一个牌名', [list, 'vcard']], true);
					('step 1');
					if (result.bool) {
						player.storage.gl_hunxin = result.links[0][2];
						player.addTempSkill('gl_hunxin_name');
						player.addGaintag(player.getCards('h'), 'gl_hunxin');
					}
				},
				subSkill: {
					name: {
						onremove(player) {
							player.removeGaintag('gl_hunxin');
						},
						charlotte: true,
						mod: {
							cardname(card, player, name) {
								if (!player.storage.gl_hunxin) return;
								if (get.position(card) == 'h' && card.hasGaintag('gl_hunxin')) return player.storage.gl_hunxin;
							},
						},
					},
				},
			},
			gl_gangrou: {
				enable: 'phaseUse',
				filterTarget: true,
				usable: 1,
				content() {
					'step 0';
					var num = target.maxHp - target.countCards('h');
					if (num > 0) target.draw(num);
					('step 1');
					player.discardPlayerCard(target, 'he', true, [0, 3]);
					('step 2');
					if (target.countCards('h') < target.hp) {
						target.recover();
					}
				},
			},
			gl_juelei: {
				trigger: {
					global: 'damageEnd',
				},
				logTarget: 'player',
				filter(event, player) {
					return event.player.isAlive();
				},
				content() {
					trigger.player.draw(4);
					trigger.player.addTempSkill('gl_juelei_discard', {
						player: 'phaseUseBegin',
					});
					trigger.player.storage.gl_juelei_discard += 4;
				},
				subSkill: {
					discard: {
						onremove(player) {
							player.chooseToDiscard(player.storage.gl_juelei_discard, 'he', true);
						},
						init(player) {
							player.storage.gl_juelei_discard = 0;
						},
						charlotte: true,
						mark: true,
						intro: {
							content: '你的出牌阶段开始时需弃置#张牌',
						},
					},
				},
			},
			gl_senluo: {
				trigger: {
					player: 'phaseBegin',
				},
				content() {
					player.gain(game.createCard('gl_jinglingzhisen'));
				},
			},
			gl_xingyi: {
				trigger: {
					player: ['phaseUseBegin', 'phaseUseEnd'],
				},
				forced: true,
				content() {
					'step 0';
					player.chooseToDiscard('he', get.prompt2(event.name));
					('step 1');
					if (result.bool) {
						var select = [1, 2];
						if (get.type(result.cards[0]) == 'equip') select = [1, 4];
						var cards = [];
						for (const i of ui.discardPile.childNodes) {
							cards.push(i);
						}
						player.chooseButton(['星移:请选择要置于牌堆顶的牌(先选在上)', cards], select);
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool && result.links && result.links.length) {
						var cards = result.links.slice(0);
						while (cards.length) {
							var card = cards.pop();
							card.fix();
							ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
							game.log(player, '将', card, '置于牌堆顶');
						}
					}
				},
			},
			gl_pianchong: {
				trigger: {
					player: 'phaseDiscardBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name));
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						trigger.cancel();
						event.target.draw(2);
					} else {
						event.finish();
					}
					('step 2');
					var num = target.countCards('h') - target.getHandcardLimit();
					if (num > 0) {
						player.chooseToDiscard('h', true, num);
						target.chooseToDiscard('h', true, num);
					}
				},
			},
			gl_xingluo: {
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return target.countCards('hej');
				},
				usable: 1,
				content() {
					'step 0';
					var list = [];
					if (target.countCards('h')) list.push('手牌区');
					if (target.countCards('e')) list.push('装备区');
					if (target.countCards('j')) list.push('判定区');
					player.chooseControl(list);
					('step 1');
					event.bool = 'h';
					switch (result.control) {
						case '装备区':
							event.bool = 'e';
							break;
						case '判定区':
							event.bool = 'j';
							break;
					}
					target.chooseUseTarget('sha', target.getCards(event.bool), false);
					('step 2');
					var history = target.getHistory('sourceDamage', function (evt) {
						return evt.getParent(4) == event;
					});
					if (history.length == 0) {
						event.finish();
						return;
					}
					if (event.bool == 'h') {
						target.draw(target.maxHp - target.countCards(event.bool));
						event.finish();
					}
					('step 3');
					if (target.maxHp > target.countCards(event.bool)) {
						var card = get.cardPile(function (x) {
							if (event.bool == 'e') {
								return get.type(x) == 'equip' && target.isEmpty(get.subtype(x));
							}
							if (event.bool == 'j') {
								return get.type(x) == 'delay' && !target.storage._disableJudge && !target.hasJudge(x.name);
							}
							return false;
						});
						if (card) {
							if (event.bool == 'e') {
								target.equip(card);
							}
							if (event.bool == 'j') {
								target.addJudge(card);
							}
							event.redo();
						} else {
							event.finish();
						}
					}
				},
			},
			gl_weiguang: {
				trigger: {
					global: 'useCardToPlayered',
				},
				filter(event, player) {
					if (!event.isFirstTarget) return false;
					if (event.card.name != 'sha') return false;
					if (player.countCards('he') < 2 && event.player.countCards('he') < 2) return false;
					return event.player == player || player.inRange(event.player);
				},
				forced: true,
				content() {
					'step 0';
					var card = get.translation(trigger.card);
					var list = ['令' + get.translation(trigger.player) + '弃置2张牌且' + card + '不能被响应', '弃置2张牌并令' + card + '对所有角色无效'];
					var dialog = ui.create.dialog('威光:请选择要执行的效果', 'hidden');
					dialog.forcebutton = true;
					for (let i = 0; i < list.length; i++) {
						var node = ui.create.div('.popup.text', dialog.content);
						dialog.buttons.add(node);
						var click = lib.config.touchscreen ? 'touchend' : 'click';
						node.addEventListener(click, ui.click.button);
						node.style.width = 'calc(100% - 30px)';
						node.style.position = 'unset';
						node.link = i;
						node.innerHTML = list[i];
					}
					var next = player.chooseButton(dialog);
					next.filterButton = function (button) {
						if (button.link == 0) return trigger.player.countCards('he') >= 2;
						if (button.link == 1) return player.countCards('he') >= 2;
						return false;
					};
					('step 1');
					if (result.bool) {
						var link = result.links[0];
						if (link == 0) {
							trigger.parent.directHit.addArray(game.players);
							trigger.player.chooseToDiscard('he', 2, true);
						}
						if (link == 1) {
							trigger.parent.all_excluded = true;
							player.chooseToDiscard('he', 2, true);
						}
					}
				},
			},
			gl_miyao: {
				trigger: {
					player: 'phaseJudgeAfter',
				},
				forced: true,
				content() {
					'step 0';
					var list = [
						['锦囊', '', 'lebu'],
						['锦囊', '', 'bingliang'],
					];

					player.chooseButton(['秘药:要下药吗？', [list, 'vcard']]);
					('step 1');
					if (result.bool) {
						event.card = result.links[0][2];
						var next = player.chooseUseTarget(event.card, get.cards());
						next.filterTarget = function (card, player, target) {
							if (!card) return false;
							var info = get.info(card);
							if (!info.singleCard || ui.selected.targets.length == 0) {
								var mod = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
								if (mod == false) return false;
								var mod = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
								if (mod != 'unchanged') return mod;
							}
							return true;
						};
					}
					('step 2');
					if (result.bool) {
						var next;
						var target = result.targets[0];
						if (event.card == 'lebu') {
							var next = target.phaseUse();
						}
						if (event.card == 'bingliang') {
							var next = target.phaseDraw();
						}
						if (next) {
							event.next.remove(next);
							trigger.getParent('phase').after.push(next);
						}
					}
				},
			},
			gl_guiji_poke: {
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				filter(event, player) {
					return player.countCards('h');
				},
				content() {
					'step 0';
					player.chooseToCompare(target);
					('step 1');
					var winner = result.winner,
						loser = [player, target];
					if (winner) {
						loser.remove(winner == player ? player : target);
						winner.recover(winner.maxHp - winner.hp);
						winner.turnOver();
					}
					for (const i of loser) {
						i.chooseToDiscard('he', 2, true);
						i.link(false);
					}
				},
			},
			gl_mangzhuang: {
				trigger: {
					source: 'damageBegin',
				},
				filter(event, player) {
					return player.hp != event.player.hp;
				},
				forced: true,
				content() {
					'step 0';
					var num = trigger.player.hp - player.hp;
					player.changeHp(num);
					trigger.player.changeHp(-num);
					('step 1');
					var num = trigger.player.hp - player.hp;
					if (num > 0) player.draw(num);
					if (num < 0) trigger.player.draw(-num);
				},
				ai: {
					threaten: 0.8,
				},
			},
			gl_luohua: {
				trigger: {
					player: 'loseAfter',
				},
				filter(event, player) {
					if (event.type != 'discard') return false;
					for (let i = 0; i < event.cards2.length; i++) {
						if (get.position(event.cards2[i]) == 'd') {
							return true;
						}
					}
					return false;
				},
				forced: true,
				content() {
					'step 0';
					event.cards = [];
					for (let i = 0; i < trigger.cards2.length; i++) {
						if (get.position(trigger.cards2[i], true) == 'd') {
							event.cards.push(trigger.cards2[i]);
						}
					}
					event.gainMap = {};
					('step 1');
					if (event.cards.length) {
						player.chooseCardButton(get.prompt(event.name), event.cards, [1, event.cards.length]);
					} else {
						event.goto(4);
					}
					('step 2');
					if (result.bool) {
						event.togive = result.links.slice(0);
						player.chooseTarget('将' + get.translation(result.links) + '交给一名角色', true, function (card, player, target) {
							return target != player;
						});
					} else {
						event.goto(4);
					}
					('step 3');
					if (result.bool) {
						var target = result.targets[0];
						player.line(result.targets, 'green');
						if (!event.gainMap[target.playerid]) event.gainMap[target.playerid] = 0;
						event.gainMap[target.playerid] += event.togive.length;
						event.cards.removeArray(event.togive);
						result.targets[0].gain(event.togive, 'gain2');
						event.goto(1);
					}
					('step 4');
					event.targets = game.filterPlayer(function (current) {
						return event.gainMap[current.playerid] && event.gainMap[current.playerid] > 1;
					});
					event.targets.sort(lib.sort.seat);
					('step 5');
					if (event.targets.length) {
						event.targets.shift().damage();
						event.redo();
					}
				},
				ai: {
					expose: 0.1,
					effect: {
						target(card, player, target, current) {
							if (target.hasFriend() && get.tag(card, 'discard')) {
								if (current < 0) return 0;
								return [1, 1];
							}
						},
					},
				},
			},
			gl_yuanqi: {
				trigger: {
					player: ['loseHpAfter', 'damageAfter'],
				},
				intro: {
					name: '元气',
					content: 'mark',
				},
				forced: true,
				content() {
					'step 0';
					player.recover();
					player.draw();
					player.addMark('gl_yuanqi');
					('step 1');
					if (player.storage.gl_yuanqi > player.maxHp) {
						var num = player.storage.gl_yuanqi;
						player.removeMark('gl_yuanqi', num);
						player.chooseToDiscard(true, num);
						player.loseHp(num);
					}
				},
			},
			gl_sajiao: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget(card, player, target) {
					return player.canCompare(target);
				},
				selectTarget: [1, 2],
				multitarget: true,
				multiline: true,
				content() {
					player.chooseToCompare(targets).callback = lib.skill.gl_sajiao.callback;
				},
				callback() {
					'step 0';
					if (event.num1 > event.num2) {
						var list = [];
						for (var i in lib.card) {
							if (lib.card[i].type == 'food') list.push(['食物', '', i]);
						}
						if (list.length) {
							player.chooseButton(true, ['撒娇:请选择一张食物牌视为使用之', [list, 'vcard']]);
						}
					} else {
						var card = get.cardPile(function (card) {
							return card.name == 'sha';
						});
						if (card) player.gain(card, 'gain2');
						player.loseHp();
						event.finish();
					}
					('step 1');
					if (result.bool && result.links && result.links.length) {
						player.chooseUseTarget(result.links[0][2], true, false);
					}
				},
			},
			gl_sanzhi: {
				trigger: {
					player: ['phaseBegin', 'phaseEnd'],
				},
				intro: {
					content(storage, player, skill) {
						var useMap = [];
						var str = '';
						player.getHistory('useCard', function (evt) {
							var result = evt.getParent('phaseUse', true);
							if (!result) return false;
							for (const i of useMap) {
								if (i.event == result) {
									i.num++;
									return;
								}
							}
							useMap.push({
								event: result,
								num: 1,
							});
						});
						for (let i = 0; i < useMap.length; i++) {
							str += '第' + get.cnNumber(i + 1) + '个出牌阶段,使用过' + get.cnNumber(useMap[i].num) + '张牌</br>';
						}
						return str;
					},
				},
				content() {
					player.markSkill('gl_sanzhi');
					var next = player.phaseUse();
					event.next.remove(next);
					trigger.next.push(next);
					player.gl_eventAfter(
						'gl_sanzhi',
						function () {
							player.unmarkSkill('gl_sanzhi');
							var useMap = [];
							player.getHistory('useCard', function (evt) {
								var result = evt.getParent('phaseUse', true);
								if (!result) return false;
								for (const i of useMap) {
									if (i.event == result) {
										i.num++;
										return;
									}
								}
								useMap.push({
									event: result,
									num: 1,
								});
							});
							var num = useMap[0].num;
							for (const i of useMap) {
								if (i.num != num) {
									player.turnOver();
									return;
								}
							}
						},
						trigger
					);
				},
			},
			gl_jiaojin: {
				trigger: {
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					if (event.targets.length > 1) return true;
					return !event.parent.gl_jiaojin;
				},
				forced: true,
				content() {
					if (trigger.targets.length > 1) {
						trigger.parent.excluded.add(player);
					} else {
						trigger.parent.effectCount++;
					}
				},
			},
			gl_qinnei: {
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return target.getHandcardLimit() > 0;
				},
				content() {
					target.draw();
					target.addTempSkill('gl_qinnei_buff', {
						player: 'phaseAfter',
					});
					target.storage.gl_qinnei = player;
					target.storage.gl_qinnei_buff++;
				},
				subSkill: {
					buff: {
						init(player, skill) {
							player.storage[skill] = 0;
						},
						mark: true,
						intro: {
							content: '手牌上限减$',
						},
						mod: {
							maxHandcard(player, num) {
								return num - player.storage.gl_qinnei_buff;
							},
						},
						trigger: {
							player: 'phaseDiscardEnd',
						},
						forced: true,
						filter(event, player) {
							if (!player.storage.gl_qinnei) return false;
							if (!player.canUse('sha', player.storage.gl_qinnei, true)) return false;
							var cards = [];
							player.getHistory('lose', function (evt) {
								if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2);
							});
							return cards.length > 1;
						},
						content() {
							'step 0';
							var cards = [];
							player.getHistory('lose', function (evt) {
								if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards2);
							});
							event.num = Math.floor(cards.length / 2);
							('step 1');
							if (event.num > 0) {
								player.useCard(
									{
										name: 'sha',
									},
									player.storage.gl_qinnei
								);
								event.num--;
								event.redo();
							}
						},
						charlotte: true,
					},
				},
			},
			gl_miaobian: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name), [1, 4]);
					('step 1');
					if (result.bool) {
						var targets = result.targets.slice(0);
						while (targets.length) {
							var target = targets.shift();
							if (get.gl_zhenfa(player, target)) {
								target.chooseToDiscard(2, true, 'he');
								target.gl_changeZhenfa(false);
							} else {
								target.draw(2);
								target.gl_changeZhenfa(player);
							}
						}
					}
				},
				mod: {
					maxHandcard(player, num) {
						var number = Math.floor(
							game.filterPlayer(function (current) {
								return !get.gl_zhenfa(player, current);
							}).length / 2
						);
						return num + number;
					},
				},
				getMaxHp(targets) {
					var player = targets[0];
					for (const i of targets) {
						if (i.hp > player.hp) player = i;
					}
					return player;
				},
				global: 'gl_miaobian_ai',
				group: 'gl_miaobian_zhenfa',
				subSkill: {
					ai: {
						ai: {
							effect: {
								target(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
										if (
											!game.findPlayer(function (current) {
												return get.gl_zhenfa(target, current) && current.hasSkill('gl_miaobian');
											})
										) {
											return;
										}
										var maxHp = 0;
										var targets = game.filterPlayer(function (current) {
											return get.gl_zhenfa(target, current);
										});
										var result = lib.skill.gl_miaobian.getMaxHp(targets);
										if (result && result.hp != target.hp) {
											return [0.0001, 0];
										}
									}
								},
							},
						},
					},
					zhenfa: {
						trigger: {
							global: 'damageBegin4',
						},
						filter(event, player) {
							if (!get.gl_zhenfa(player, event.player)) return false;
							return game.findPlayer(function (current) {
								return get.gl_zhenfa(player, current) && current.hp > event.player.hp;
							});
						},
						forced: true,
						content() {
							var maxHp = 0;
							var targets = game.filterPlayer(function (current) {
								if (!get.gl_zhenfa(player, current)) return false;
								if (current.hp > maxHp) {
									maxHp = current.hp;
								}
								return true;
							});
							for (let i = 0; i < targets.length; i++) {
								if (targets[i].hp != maxHp) targets.splice(i--, 1);
							}
							var target = targets.randomGet();
							trigger.player.line(target, 'green');
							trigger.player = target;
						},
					},
				},
			},
			gl_miantian: {
				trigger: {
					player: 'useCardAfter',
				},
				filter(event, player) {
					return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
				},
				usable: 1,
				content() {
					player.gain(trigger.cards, 'gain2');
					player.turnOver();
				},
				mod: {
					targetEnabled(card, player, target, now) {
						if (target.isTurnedOver() && player != target) return false;
					},
					playerEnabled(card, player, target) {
						if (player.isTurnedOver() && player != target) return false;
					},
				},
			},
			gl_fuzhou: {
				trigger: {
					player: 'phaseUseBegin',
				},
				init(player, skill) {
					player.storage.gl_fuzhou = {
						bool: false,
					};
				},
				mark: true,
				zhuanhuanji(player, skill) {
					player.storage.gl_fuzhou.bool = !player.storage.gl_fuzhou.bool;
				},
				marktext: '☯',
				intro: {
					content(storage, player, skill) {
						var str = '出牌阶段开始时,令1名角色直至你的下个回合开始为止';
						str += player.storage.gl_fuzhou.bool ? '受到的伤害均视为体力回复' : '造成的伤害均视为体力回复';
						str += '若选择的角色与上次不同,则你失去1点体力';
						return str;
					},
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt(event.name));
					('step 1');
					var storage = player.storage.gl_fuzhou;
					if (result.bool) {
						var target = result.targets[0];
						target.addSkill('gl_fuzhou_recover');
						target.storage.gl_fuzhou_recover.bool = storage.bool;
						target.storage.gl_fuzhou_recover.source = player;
						player.changeZhuanhuanji('gl_fuzhou');
						if (storage.target && storage.target != target) {
							player.loseHp();
						}
						storage.target = target;
					} else {
						delete storage.target;
					}
				},
				subSkill: {
					recover: {
						init(player, skill) {
							if (!player.storage[skill]) {
								player.storage[skill] = {};
							}
						},
						trigger: {
							source: 'damageBefore',
							player: 'damageBegin4',
							global: 'phaseBegin',
						},
						mark: true,
						intro: {
							content(storage, player, skill) {
								var str = '你';
								str += player.storage.gl_fuzhou_recover.bool ? '受到的伤害' : '造成的伤害';
								str += '均改为回复1点体力';
								return str;
							},
						},
						filter(event, player) {
							var storage = player.storage.gl_fuzhou_recover;
							if (event.name == 'phase') return storage.source == event.player;
							if (storage.bool === true && event.player == player) return true;
							if (storage.bool === false && event.source == player) return true;
						},
						forced: true,
						charlotte: true,
						content() {
							if (trigger.name == 'phase') {
								player.removeSkill('gl_fuzhou_recover');
							} else {
								trigger.cancel();
								trigger.player.recover();
							}
						},
						ai: {
							effect: {
								player(card, player, target, current) {
									var storage = player.storage.gl_fuzhou_recover;
									if (!storage || storage.bool !== false) return;
									if (get.tag(card, 'damage')) {
										var num = get.recoverEffect(target, player, player);
										if (num == 0) return 'zeroplayertarget';
										return [0, num];
									}
								},
								target(card, player, target) {
									var storage = target.storage.gl_fuzhou_recover;
									if (!storage || storage.bool !== true) return;
									if (get.tag(card, 'damage')) {
										var num = get.recoverEffect(target, player, target);
										if (num == 0) return 'zeroplayertarget';
										return [0, num];
									}
								},
							},
						},
					},
				},
			},
			gl_qiufa: {
				enable: 'chooseToUse',
				usable: 1,
				hiddenCard(player, name) {
					if (get.type(name) == 'trick') return true;
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						for (let i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
						}
						return ui.create.dialog('求法', [list, 'vcard'], 'hidden');
					},
					filter(button, player) {
						return _status.event.parent.filterCard(
							{
								name: button.link[2],
							},
							player,
							_status.event.parent
						);
					},
					backup(links, player) {
						return {
							filterCard() {
								return false;
							},
							selectCard: -1,
							viewAs: {
								name: links[0][2],
							},
							precontent() {
								'step 0';
								player.chooseTarget('求法:令1名角色选择是否将所有的手牌交给你当【' + get.translation(event.result.card) + '】使用', function (card, player, target) {
									return target.countCards('h');
								});
								('step 1');
								if (result.bool) {
									event.target = result.targets[0];
									event.target.chooseBool('是否将所有手牌当【' + get.translation(event.result.card) + '】视为' + get.translation(player) + '使用？', function () {
										return get.attitude(player, result.targets[0]) > 3;
									});
								} else {
									event.parent.goto(0);
									player.getStat().skill.gl_qiufa_backup = 1;
									player.getStat().skill.gl_qiufa = 1;
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.result.cards = target.getCards('h');
									event.result.card.gl_qiufa = target;
								} else {
									event.parent.goto(0);
									player.getStat().skill.gl_qiufa_backup = 1;
									player.getStat().skill.gl_qiufa = 1;
								}
							},
						};
					},
					prompt(links, player) {
						return '请选择【' + get.translation(links[0][2]) + '】的目标';
					},
				},
				group: 'gl_qiufa_dying',
				subSkill: {
					dying: {
						trigger: {
							global: 'dying',
						},
						forced: true,
						filter(event, player) {
							if (ui.discardPile.childNodes.length == 0) return false;
							if (!event.reason) return false;
							var parent = event.reason.getParent(2);
							return parent.skill == 'gl_qiufa_backup' && event.player == parent.card.gl_qiufa;
						},
						content() {
							'step 0';
							player.chooseButton(['求法:请选择要交给' + get.translation(trigger.player) + '的牌', Array.from(ui.discardPile.childNodes)], [1, 2]);
							('step 1');
							if (result.bool && result.links && result.links.length) {
								trigger.player.gain(result.links, 'gain2', 'log');
							}
						},
					},
				},
			},
			// 出牌阶段结束时,你回复1点体力并将手牌摸至体力上限
			// 你将武将牌翻面;若你的武将牌背面朝上,则你不能使用或打出手牌
			gl_toulan: {
				trigger: {
					player: 'phaseUseEnd',
				},
				forced: true,
				popup: false,
				async content(event, trigger, player) {
					await player.recover();
					await player.draw(player.maxHp - player.countCards('h'));
					player.turnOver();
				},
				mod: {
					cardEnabled2(card, player) {
						if (player.isTurnedOver() && get.position(card) == 'h') return false;
					},
				},
			},
			// 出牌阶段限一次,你可以展示当前所有手牌,只有你摸X张牌并将所有展示的牌置入弃牌堆
			// 你失去Y点体力并视为使用1张【万箭齐发】.(X当前体力值小于你的角色数,Y为当前场上角色数-你弃置的牌数)
			gl_zhangwei: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return player.countCards('h');
				},
				popup: false,
				async content(event, trigger, player) {
					const cards = player.getCards('h');
					await player.showCards(cards);
					await player.draw(
						game.countPlayer(function (current) {
							return current.hp < player.hp;
						})
					);
					await player.lose(cards, ui.discardPile, 'visible');
					game.log(player, '将', cards, '置入弃牌堆');
					await player.loseHp(game.players.length - cards.length);
					player.chooseUseTarget({ name: 'wanjian' }, true);
				},
			},
			gl_zhuilie: {
				trigger: {
					player: 'gainAfter',
				},
				usable: 1,
				forced: true,
				content() {
					'step 0';
					player.chooseCardTarget({
						filterCard: true,
						filterTarget(card, player, target) {
							return player != target;
						},
						prompt: get.prompt2(event.name),
					});
					('step 1');
					if (result.bool) {
						result.targets[0].gain(result.cards, player, 'giveAuto');
						player.storage.gl_zhuilie_target = result.targets[0];
						player.addTempSkill('gl_zhuilie_target');
					} else {
						player.getStat('triggerSkill').gl_zhuilie--;
					}
				},
				subSkill: {
					target: {
						trigger: {
							player: 'useCardToPlayer',
						},
						mark: true,
						intro: {
							content: '你使用的牌目标均转移为$',
						},
						forced: true,
						filter(event, player) {
							var storage = player.storage.gl_zhuilie_target;
							if (!storage || event.target == storage) return false;
							if (!storage.isAlive()) return false;
							return lib.filter.targetEnabled(event.card, player, storage);
						},
						content() {
							var target = player.storage.gl_zhuilie_target;
							var evt = trigger.parent;
							evt.triggeredTargets1.remove(trigger.target);
							evt.targets.remove(trigger.target);
							evt.targets.push(target);
						},
					},
				},
			},
			gl_zishou: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				forced: true,
				filter(event, player) {
					if (ui.discardPile.childNodes.length == 0) return false;
					return (
						player.getHistory('useCard', function (evt) {
							if (evt.targets && evt.targets.length && evt.isPhaseUsing()) {
								var targets = evt.targets.slice(0);
								while (targets.includes(player)) targets.remove(player);
								return targets.length;
							}
							return false;
						}).length == 0
					);
				},
				content() {
					'step 0';
					var select = [1, 1];
					if (player.getHistory('useCard').length == 0) select[1]++;
					player.chooseButton(['自守:请选择要获得的牌', Array.from(ui.discardPile.childNodes)], select);
					('step 1');
					if (result.bool && result.links && result.links.length) {
						player.gain(result.links, 'gain2', 'log');
					}
				},
			},
			gl_guicai: {
				enable: 'phaseUse',
				init(player, skill) {
					if (!player.storage[skill]) {
						player.storage[skill] = {};
					}
				},
				filter(event, player) {
					return !player.hasSkill('gl_guicai_lose');
				},
				selectCard() {
					if (_status.event.player.storage.gl_guicai.usable) return -1;
					return 1;
				},
				filterCard(card, player) {
					if (player.storage.gl_guicai.usable) return false;
					var type = get.type(card);
					return type == 'trick' || type == 'basic';
				},
				list: ['damage', 'sha', 'equip'],
				content() {
					'step 0';
					if (player.storage.gl_guicai.usable) {
						var card = get.cardPile(player.storage.gl_guicai.usable);
						if (card) {
							player.gain(card, 'gain2', 'log');
						}
						player.addTempSkill('gl_guicai_lose');
						event.finish();
						return;
					}
					var str = '【' + get.translation(cards[0].name) + '】';
					var list = ['当你受到伤害后,你可以将1张牌当' + str + '使用', '当你使用【杀】指定目标后,将所有手牌当' + str + '使用', '当你失去装备区内的牌后,你可以视为使用1张' + str];
					var dialog = ui.create.dialog('鬼才:请选择要执行并删除的一项', 'hidden');
					dialog.forcebutton = true;
					for (let i = 0; i < list.length; i++) {
						var index = lib.skill.gl_guicai.list[i];
						if (player.storage.gl_guicai[index]) continue;
						var node = ui.create.div('.popup.text', dialog.content);
						dialog.buttons.add(node);
						var click = lib.config.touchscreen ? 'touchend' : 'click';
						node.addEventListener(click, ui.click.button);
						node.style.width = 'calc(100% - 30px)';
						node.style.position = 'unset';
						node.link = index;
						node.innerHTML = list[i];
					}
					if (dialog.buttons.length == 0) {
						event._result = {
							bool: true,
							links: ['usable'],
						};
					} else {
						player.chooseButton(dialog, true);
					}
					('step 1');
					var index = result.links[0];
					player.storage.gl_guicai[index] = cards[0].name;
					if (index != 'usable') player.addSkill('gl_guicai_' + index);
				},
				subSkill: {
					lose: {
						charlotte: true,
					},
					damage: {
						trigger: {
							player: 'damageEnd',
						},
						forced: true,
						filter(event, player) {
							if (!player.countCards('hes')) return false;
							if (!player.storage.gl_guicai.damage) return false;
							return player.hasUseTarget(player.storage.gl_guicai.damage);
						},
						content() {
							var next = player.chooseToUse();
							next.addCount = false;
							next.set('norestore', true);
							next.cardname = player.storage.gl_guicai.damage;
							next.set('openskilldialog', '鬼才:是否将1张牌当【' + get.translation(player.storage.gl_guicai.damage) + '】使用？');
							next.set('_backupevent', 'gl_guicai_backup');
							next.backup('gl_guicai_backup');
						},
						charlotte: true,
					},
					sha: {
						trigger: {
							player: 'useCardToPlayered',
						},
						forced: true,
						filter(event, player) {
							if (event.card.name != 'sha') return false;
							if (!event.isFirstTarget) return false;
							if (!player.countCards('h')) return false;
							if (!player.storage.gl_guicai.sha) return false;
							return player.hasUseTarget(player.storage.gl_guicai.sha);
						},
						content() {
							var next = player.chooseToUse();
							next.addCount = false;
							next.set('norestore', true);
							next.cardname = player.storage.gl_guicai.sha;
							next.set('openskilldialog', '鬼才:是否将所有手牌当【' + get.translation(player.storage.gl_guicai.sha) + '】使用？');
							next.set('_backupevent', 'gl_guicai_backup');
							next.backup('gl_guicai_backup');
						},
						charlotte: true,
					},
					equip: {
						trigger: {
							player: 'loseAfter',
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
						},
						forced: true,
						filter(event, player) {
							if (!player.storage.gl_guicai.equip) return false;
							var evt = event.getl(player);
							return evt && evt.es && evt.es.length;
						},
						content() {
							player.chooseUseTarget('鬼才:是否视为使用1张【' + get.translation(player.storage.gl_guicai.equip) + '】？', player.storage.gl_guicai.equip);
						},
						charlotte: true,
					},
					backup: {
						viewAs(cards, player) {
							if (_status.event.cardname)
								return {
									name: _status.event.cardname,
								};
							return null;
						},
						position: 'hes',
						filterCard(card, player) {
							var parent = _status.event.parent;
							if (parent && parent.name == 'gl_guicai_sha') return get.position(card) == 'h';
							return true;
						},
						selectCard() {
							var parent = _status.event.parent;
							if (parent && parent.name == 'gl_guicai_sha') return -1;
							return 1;
						},
						popname: true,
					},
				},
			},
			gl_nishi: {
				trigger: {
					player: 'phaseZhunbeiBegin',
				},
				filter(event, player) {
					return !player.storage.gl_nishi;
				},
				intro: {
					content: 'limited',
				},
				mark: true,
				forced: true,
				limited: true,
				content() {
					'step 0';
					var list = ['quhu', 'wusheng', 'shenxing', 'old_guhuo', 'cancel2'];
					player
						.chooseControl(list)
						.set('prompt', '逆势:选择获得以下一项技能并弃置所有手牌')
						.set('ai', function () {
							return 'cancel2';
						});
					('step 1');
					if (result.control != 'cancel2') {
						player.storage.gl_nishi = true;
						player.awakenSkill('gl_nishi');
						player.discard(player.getCards('h'));
						player.addSkillLog(result.control);
						player.loseMaxHp();
					}
				},
			},
			gl_fengong: {
				enable: 'phaseUse',
				usable: 1,
				init(player, skill) {
					if (!player.storage[skill]) {
						player.storage[skill] = {};
					}
				},
				filter(event, player) {
					return !player.hasSkill('gl_fengong_lose');
				},
				mark: true,
				intro: {
					content(storage, player) {
						var str = '';
						var list = ['使用【杀】指定目标后', '成为【杀】的目标后', '不因【杀】造成伤害后', '不因【杀】受到伤害后', '获得牌后', '因弃置而失去牌后'];
						for (let i = 0; i < list.length; i++) {
							var link;
							switch (i) {
								case 0:
									link = player.storage.gl_fengong.useCardToPlayered;
									break;
								case 1:
									link = player.storage.gl_fengong.useCardToTargeted;
									break;
								case 2:
									link = player.storage.gl_fengong.damageSource;
									break;
								case 3:
									link = player.storage.gl_fengong.damageEnd;
									break;
								case 4:
									link = player.storage.gl_fengong.gainAfter;
									break;
								case 5:
									link = player.storage.gl_fengong.loseAfter;
									break;
							}
							if (!link) return '暂未发动分工';
							str += '当你' + list[i] + ',你需' + lib.skill.gl_fengong.list[link].info + '.</br>';
						}
						return str;
					},
				},
				list: {
					gain: {
						info: '令当前回合角色获得弃牌堆最上方1张牌',
						filter(event, player) {
							return ui.discardPile.childNodes.length;
						},
						content() {
							_status.currentPhase.gain(ui.discardPile.lastChild, 'log', 'gain2');
						},
					},
					damage: {
						info: '对当前回合角色造成1点伤害',
						content() {
							_status.currentPhase.damage();
						},
					},
					recover: {
						info: '令当前回合角色回复1点体力',
						filter(event, player) {
							return _status.currentPhase.hp < _status.currentPhase.maxHp;
						},
						content() {
							_status.currentPhase.recover();
						},
					},
					recast: {
						info: '立即发动〖分工〗且〖分工〗本回合失效',
						filter(event, player, name) {
							return lib.skill.gl_fengong.filter(event, player, name);
						},
						content() {
							player.addTempSkill('gl_fengong_lose');
							player.useSkill('gl_fengong');
						},
					},
					draw: {
						info: '重铸当前回合角色至多2张牌',
						filter(event, player) {
							return _status.currentPhase.countCards('he');
						},
						content() {
							'step 0';
							player.choosePlayerCard('he', [1, 2], true, '分工:请选择要重铸的牌', _status.currentPhase);
							('step 1');
							if (result.bool) {
								_status.currentPhase.lose(result.cards, ui.discardPile);
								_status.currentPhase.$throw(card, 1000);
								game.log(_status.currentPhase, '重铸了', card);
								_status.currentPhase.draw(result.cards.length).log = false;
							}
						},
					},
					give: {
						info: '将所有手牌交给1名其他角色',
						filter(event, player) {
							return player.countCards('h');
						},
						content() {
							'step 0';
							player.chooseTarget(true, '分工:请将所有手牌交给1名其他角色', function (card, player, target) {
								return player != target;
							});
							('step 1');
							if (result.bool) {
								result.targets[0].gain(player.getCards('h'), 'give', player);
							}
						},
					},
					debuff: {
						info: '本回合不能使用或打出手牌',
						content() {
							player.addTempSkill('gl_fengong_debuff');
						},
					},
				},
				content() {
					'step 0';
					var cards = [];
					for (var i in lib.skill.gl_fengong.list) {
						cards.add(lib.skill.gl_fengong.list[i].info);
					}
					var next = player.chooseToMove('分工:请分配效果和时机');
					next.set('list', [['需要分配效果', [cards, 'tdnodes']], ['使用【杀】指定目标后'], ['成为【杀】的目标后'], ['不因【杀】造成伤害后'], ['不因【杀】受到伤害后'], ['获得牌后'], ['因弃置而失去牌后']]);
					next.set('filterOk', function (moved) {
						next.dialog.classList.add('fengong_dialog');
						return moved[0].length == 1;
					});
					('step 1');
					if (result.bool && result.moved) {
						for (let i = 0; i < result.moved.length; i++) {
							var link = result.moved[i][0];
							var info;
							for (var j in lib.skill.gl_fengong.list) {
								if (lib.skill.gl_fengong.list[j].info == link) {
									info = lib.skill.gl_fengong.list[j];
									link = j;
									break;
								}
							}
							switch (i) {
								case 1:
									player.storage.gl_fengong.useCardToPlayered = link;
									break;
								case 2:
									player.storage.gl_fengong.useCardToTargeted = link;
									break;
								case 3:
									player.storage.gl_fengong.damageSource = link;
									break;
								case 4:
									player.storage.gl_fengong.damageEnd = link;
									break;
								case 5:
									player.storage.gl_fengong.gainAfter = link;
									break;
								case 6:
									player.storage.gl_fengong.loseAfter = link;
									break;
								default:
									if (!info.filter || info.filter(event, player)) {
										var next = game.createEvent('gl_fengong_use', false);
										next.player = player;
										next.setContent(info.content);
									}
							}
						}
					}
				},
				group: 'gl_fengong_effect',
				subSkill: {
					effect: {
						trigger: {
							player: ['loseAfter', 'damageEnd', 'useCardToPlayered', 'gainAfter'],
							source: 'damageSource',
							target: 'useCardToTargeted',
						},
						forced: true,
						filter(event, player, name) {
							if (name == 'gainAfter' && event.getParent(2).name == 'gl_fengong_effect') return false;
							if (name == 'loseAfter' && event.type != 'discard') return false;
							if (event.name == 'damage' && event.card && event.card.name == 'sha') return false;
							if (name == 'useCardToPlayered' && (event.card.name != 'sha' || !event.isFirstTarget)) return false;
							if (name == 'useCardToTargeted' && event.card.name != 'sha') return false;
							var link = player.storage.gl_fengong[name];
							if (!link) return false;
							if (!lib.skill.gl_fengong.list[link].filter) return true;
							return lib.skill.gl_fengong.list[link].filter(event, player);
						},
						content() {
							var link = player.storage.gl_fengong[event.triggername];
							var next = game.createEvent('gl_fengong_effect', false);
							next.player = player;
							next.setContent(lib.skill.gl_fengong.list[link].content);
						},
					},
					debuff: {
						mod: {
							cardEnabled2(card, player) {
								if (get.position(card) == 'h') return false;
							},
						},
						charlotte: true,
					},
					lose: {
						charlotte: true,
					},
				},
			},
			gl_jiena: {
				trigger: {
					global: 'phaseZhunbeiBegin',
				},
				filter(event, player) {
					if (
						player.countCards('h', function (card) {
							return card.hasGaintag('gl_jiena');
						}) != 0
					)
						return false;
					return event.player != player && event.player.countCards('hej');
				},
				forced: true,
				content() {
					'step 0';
					player.choosePlayerCard('hej', trigger.player, get.prompt(event.name, trigger.player), function (button) {
						return lib.filter.canBeGained(button.link, _status.event.player, _status.event.target);
					});
					('step 1');
					if (result.bool) {
						player.gain(result.cards, trigger.player, 'giveAuto', 'bySelf').gaintag.add('gl_jiena');
						player.addSkill('gl_jiena_lose');
						player.storage.gl_jiena = trigger.player;
					}
				},
				subSkill: {
					lose: {
						trigger: {
							player: 'loseAfter',
						},
						_priority: -5,
						filter(event, player) {
							for (var i in event.gaintag_map) {
								if (event.gaintag_map[i].includes('gl_jiena')) return true;
							}
							return false;
						},
						forced: true,
						charlotte: true,
						content() {
							'step 0';
							player.removeSkill('gl_jiena_lose');
							player.chooseToDiscard('he', 2, '洁纳:请弃置2张牌' + (player.storage.gl_jiena ? ',或受到来自' + get.translation(player.storage.gl_jiena) + '的1点伤害' : ''));
							('step 1');
							if (!result.bool && player.storage.gl_jiena && player.storage.gl_jiena.isAlive()) {
								player.damage(player.storage.gl_jiena);
							}
						},
					},
				},
			},
			gl_songsang: {
				trigger: {
					player: ['loseAfter', 'loseHpAfter', 'damageAfter'],
					global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				filter(event, player) {
					if (player.countCards('h') != 0 && player.hp != 1) return false;
					if (event.name == 'loseHp' || event.name == 'damage') return true;
					var evt = event.getl(player);
					return evt && evt.player == player && evt.hs && evt.hs.length;
				},
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						return !target.hasSkill('gl_songsang_dying');
					});
					('step 1');
					if (result.bool) {
						result.targets[0].addTempSkill('gl_songsang_dying');
					}
				},
				subSkill: {
					dying: {
						trigger: {
							player: 'dying',
						},
						_priority: 5,
						forced: true,
						charlotte: true,
						filter(event, player) {
							return player.hp <= 0;
						},
						content() {
							player.recover();
						},
					},
				},
			},
			gl_duanbing: {
				gl_wuzhuang: {
					name: 'gl_lieqiang',
					number: 11,
					nature: 'fire',
					suit: 'spade',
				},
				mod: {
					selectTarget(card, player, range) {
						if (card.name != 'sha' && (get.type(card) != 'trick' || get.color(card) != 'black')) return;
						range[1] = -1;
					},
					playerEnabled(card, player, target) {
						if (card.name != 'sha' && (get.type(card) != 'trick' || get.color(card) != 'black')) return;
						if (get.distance(player, target) > 1) return false;
					},
				},
			},
			gl_muyang: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				filter(event, player) {
					return ui.cardPile.childNodes.length;
				},
				content() {
					'step 0';
					var list = Array.from(ui.cardPile.childNodes);
					target.chooseButton(true, ['牧羊:请选择要获得的牌', list]).set('ai', function (card) {
						if (card.name == 'jiu' || card.name == 'tao') return 12;
						return get.value(card, _status.event.player, 'raw');
					});
					('step 1');
					if (result.bool && result.links && result.links.length) {
						target.addTempSkill('gl_muyang_die');
						target.gain(result.links, 'gain2', 'log');
						target.loseHp(target.hp);
					} else {
						event.finish();
					}
					('step 2');
					target.removeSkill('gl_muyang_die');
					player.addTempSkill('gl_muyang_recover', {
						player: 'phaseBegin',
					});
					player.storage.gl_muyang = target;
				},
				subSkill: {
					recover: {
						trigger: {
							global: 'changeHp',
						},
						forced: true,
						filter(event, player) {
							return event.player == player.storage.gl_muyang && event.num < 0;
						},
						content() {
							trigger.player.recover();
						},
						charlotte: true,
					},
					die: {
						trigger: {
							player: 'dieBegin',
						},
						forced: true,
						charlotte: true,
						filter(event, player) {
							return event.reason.parent.name == 'gl_muyang' && player.countCards('he');
						},
						content() {
							'step 0';
							var next = player.chooseTarget('牧羊:是否将所有牌交给1名其他角色');
							next.set('filterTarget', function (card, player, target) {
								return player != target;
							});
							next.set('ai', function (target) {
								var num = get.attitude(player, target);
								if (num > 0) {
									var basis = get.threaten(target) + num;
									if (target.hasSkillTag('nogain')) return basis * 0.2;
									if (target.hasJudge('lebu')) return basis * 0.5;
									if (target.countCards('h') + player.countCards('h') > target.hp + 2) return basis * 0.8;
									return basis;
								} else {
									if (player.countCards('h') == player.countCards('h', 'du')) return 10;
								}
								return 0;
							});
							('step 1');
							if (result.bool) {
								player.give(player.getCards('he'), result.targets[0]);
							}
						},
					},
				},
			},
			gl_zhulie: {
				trigger: {
					global: 'useCardEnd',
				},
				filter(event, player, name) {
					if (get.type(event.card) == 'equip') return false;
					var parent = event.parent;
					while (parent) {
						if (parent.name == 'gl_zhulie') return false;
						parent = parent.parent;
					}
					var cards = event.cards.filterInD();
					for (const i of cards) {
						if (i.name == event.card.name) return false;
					}
					return true;
				},
				forced: true,
				content() {
					'step 0';
					lib.skill.gl_zhulie_backup.viewAs = trigger.card;
					var next = player.chooseToUse();
					next.set('openskilldialog', '逐猎:将1张牌当' + get.translation(trigger.card) + '使用');
					next.set('norestore', true);
					next.set('_backupevent', 'gl_zhulie_backup');
					next.backup('gl_zhulie_backup');
					('step 1');
					if (result.bool) {
						player.draw();
					}
				},
				subSkill: {
					backup: {
						filterCard(card, player) {
							return get.itemtype(card) == 'card';
						},
						selectCard: 1,
						position: 'hes',
						popname: true,
					},
				},
			},
			gl_yanxiao: {
				trigger: {
					global: 'useCardToTargeted',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.target.isIn();
				},
				forced: true,
				content() {
					'step 0';
					player.chooseCount(get.prompt2(event.name, trigger.target), [0, player.hp]);
					('step 1');
					if (result.num) {
						trigger.target.draw(result.num);
						var parent = trigger.parent;
						parent.gl_yanxiao = result.num;
						trigger.target.gl_eventAfter(
							'gl_yanxiao',
							function () {
								var bool = player.hasHistory('damage', function (evt) {
									return evt.card == event.parent.card;
								});
								if (!bool) {
									player.chooseToDiscard(event.num, true);
								}
							},
							parent
						).num = result.num * 2;
					}
				},
				global: 'gl_yanxiao_ai',
				subSkill: {
					ai: {
						ai: {
							noshan: true,
							effect: {
								target(card, player, target) {
									if (!_status.event) return;
									var parent = _status.event.parent;
									if (!parent || parent.name != 'sha') return;
									if (player.hp == 1) {
										if (player.countCards('h', 'tao') == 0) return;
										if (player.countCards('h', 'jiu') == 0) return;
									}
									if (parent.parent && parent.parent.name == 'useCard' && parent.parent.gl_yanxiao) {
										return [1, parent.parent.gl_yanxiao];
									}
								},
							},
						},
					},
				},
			},
			gl_renxin: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					return ui.cardPile.childNodes.length;
				},
				position: 'he',
				filterCard(card, player, target) {
					if (ui.selected.cards.length == 0) return true;
					if (Array.isArray(ui.selected.cards))
						for (const i of ui.selected.cards) {
							if (get.type(i, 'trick') == get.type(card, 'trick')) return false;
						}
					return true;
				},
				selectCard: 2,
				content() {
					'step 0';
					for (const i of event.cards) {
						if (get.type2(i) == 'trick') event.draw = true;
						if (get.type2(i) == 'basic') event.recover = true;
						if (get.type2(i) == 'equip') player.getStat('skill').gl_renxin--;
					}
					('step 1');
					if (event.recover) {
						player.chooseTarget('仁心:令1名角色回复1点体力', function (card, player, target) {
							return target.hp < target.maxHp;
						});
					} else {
						event.goto(3);
					}
					('step 2');
					if (result.bool) {
						result.targets[0].recover();
					}
					('step 3');
					if (event.draw) {
						player.chooseTarget('仁心:令1名角色摸2张牌');
					} else {
						event.finish();
					}
					('step 4');
					if (result.bool) {
						result.targets[0].draw(2);
					}
				},
			},
			gl_shiyue: {
				juexingji: true,
				derivation: 'gl_lingjian',
				trigger: {
					global: 'dyingBegin',
				},
				forced: true,
				filter(event, player) {
					if (player.storage.gl_shiyue) return false;
					return !event.player.hasAllHistory('sourceDamage', function (evt) {
						return evt.player == player;
					});
				},
				content() {
					player.awakenSkill('gl_shiyue');
					var num = 0;
					for (let i = 1; i < 6; i++) {
						if (!player.isDisabled(i)) {
							player.disableEquip(i);
							num++;
						}
					}
					trigger.player.recover(num);
					player.storage.gl_shiyue = true;
					player.addSkill('gl_lingjian');
				},
			},
			gl_lingjian: {
				enable: 'phaseUse',
				filterTarget(card, player, target) {
					return player.canUse('sha', target, false);
				},
				content() {
					'step 0';
					player.chooseControl('失去体力', '减少上限').set('prompt', '灵剑:失去1点体力或减1点体力上限');
					('step 1');
					if (result.control == '失去体力') {
						player.loseHp();
					} else {
						player.loseMaxHp(true);
					}
					('step 2');
					player.useCard(
						{
							name: 'sha',
							nature: 'fire',
						},
						false,
						targets
					).card.gl_lingjian = true;
				},
				group: 'gl_lingjian_damage',
				subSkill: {
					damage: {
						trigger: {
							source: 'damageBegin2',
						},
						forced: true,
						popup: false,
						filter(event, player) {
							if (event.player.countGainableCards(player, 'ej') == 0) return false;
							return event.card && event.card.gl_lingjian == true && event.player.isAlive() && event.getParent(3).name == 'gl_lingjian';
						},
						content() {
							if (trigger.player.countGainableCards(player, 'ej')) {
								player.gainPlayerCard(trigger.player, 'ej', true);
							}
							trigger.cancel();
						},
					},
				},
			},
			gl_suixing: {
				trigger: {
					global: 'phaseUseBegin',
				},
				logTarget: 'player',
				content() {
					trigger.player.chooseToDiscard('he', true, player.hp);
					trigger.player.gl_eventAfter('gl_suixing', function () {
						player.draw(source.hp);
					}).source = player;
				},
			},
			// 当你的手牌数变为全场唯一最多或最少后,只有你对1名角色造成1点火焰伤害才能生效:你需失去1点体力或减去1点手牌上限
			gl_siyan: {
				getList(event) {
					var max = 0;
					var maxPlayer = null;
					var min = Infinity;
					var minPlayer = null;
					for (var current of game.players) {
						var num = 0;
						var cards = current.getCards('h');
						if (event) {
							if (event.name == 'gain') cards.removeArray(event.cards);
							var evt = event.getl(current);
							if (evt && evt.hs) {
								num += evt.hs.length;
							}
						}
						num += cards.length;
						if (num > max) {
							max = num;
							maxPlayer = current;
						} else if (num == max) {
							maxPlayer = null;
						}
						if (num < min) {
							min = num;
							minPlayer = current;
						} else if (num == min) {
							minPlayer = null;
						}
					}
					return [minPlayer, maxPlayer];
				},
				trigger: {
					global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				filter(event, player) {
					if (event.name == 'lose' && event.getlx === false) return false;
					var list = lib.skill.gl_siyan.getList(event);
					var list2 = lib.skill.gl_siyan.getList();
					if (list[0] != player && list2[0] == player) return true;
					if (list[1] != player && list2[1] == player) return true;
					return false;
				},
				async content(event, trigger, player) {
					const { targets } = await player.chooseTarget(get.prompt2(event.name)).forResult();
					if (targets?.length) {
						await targets[0].damage('fire');
						if (player.getHandcardLimit() > 0) {
							const { control } = await player.chooseControl('失去体力', '削减上限').set('prompt', '死焰:失去1点体力或减去1点手牌上限').forResult();
							if (control == '削减上限') {
								player.addSkill('gl_siyan_handcard');
								player.storage.gl_siyan_handcard++;
							} else {
								player.loseHp();
							}
						} else {
							player.loseHp();
						}
					}
				},
				subSkill: {
					handcard: {
						init(player, skill) {
							if (!player.storage[skill]) player.storage[skill] = 0;
						},
						mark: true,
						intro: {
							content: '你的手牌上限-#',
						},
						charlotte: true,
						mod: {
							maxHandcard(player, num) {
								return num - player.storage.gl_siyan_handcard;
							},
						},
					},
				},
			},
			gl_liedao: {
				usable: 1,
				trigger: {
					player: 'useCardToPlayered',
				},
				forced: true,
				filter(event, player) {
					if (event.parent.triggeredTargets3.length > 1) return false;
					if (get.tag(event.card, 'damage')) return true;
					return false;
				},
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt2(event.name), function (card, player, target) {
							return _status.event.targets.includes(target);
						})
						.set('targets', trigger.targets);
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						if (event.target != player) {
							var num = Math.max(Math.abs(player.hp - event.target.hp), 1);
							event.target.chooseCard(num, 'he', '猎盗:交给' + get.translation(player) + '牌,或将判定牌尽可能置入判定区内').set('ai', function (card) {
								var player = _status.event.player;
								if (player.storage._disableJudge) return -1;
								return 12 - get.value(card) - player.countCards('j') * 4;
							});
						}
					} else {
						player.getStat('triggerSkill').gl_liedao--;
						event.finish();
					}
					('step 2');
					if (result.bool) {
						event.target.give(result.cards, player, true);
					} else if (!event.target.storage._disableJudge) {
						var cards = [];
						get.cardPile(function (card) {
							for (const i of cards) {
								if (i.name == card.name) return false;
							}
							if (get.type(card) == 'delay' && !event.target.hasJudge(card.name)) {
								cards.push(card);
							}
							return false;
						});
						for (var card of cards) {
							event.target.addJudge(card);
						}
					}
				},
				ai: {
					threaten: 2.4,
				},
			},
			gl_zenian: {
				enable: 'phaseUse',
				usable: 1,
				content() {
					'step 0';
					player.judge();
					('step 1');
					if (result.color) {
						var cards, card;
						if (result.color == 'red') {
							cards = player.getCards('h', function (card) {
								return get.tag(card, 'damage');
							});
							card = 'tuixinzhifu';
						} else {
							cards = player.getCards('h', function (card) {
								return !get.tag(card, 'damage');
							});
							card = 'chuqibuyi';
						}
						if (cards.length) {
							var next = player.chooseUseTarget(card, false, true);
							next.cards = cards;
							next.filterTarget = function () {
								return true;
							};
						}
					}
				},
			},
			gl_aoxue: {
				trigger: {
					player: 'judge',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						return target.countCards('he');
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						player.discardPlayerCard('hej', event.target, true);
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						event.card = result.cards[0];
						event.cards = result.cards;
						player.chooseControlList('傲雪', '将' + get.translation(event.card) + '作为判定结果', '将' + get.translation(event.card) + '置于武将牌上', true);
					} else {
						event.finish();
					}
					('step 3');
					if (result.index == 0) {
						game.cardsGotoOrdering(card).relatedEvent = trigger;
					} else {
						player.directgains(cards, null, 'gl_aoxue');
						event.finish();
					}
					('step 4');
					player.$throw(card);
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
					trigger.player.judging[0] = card;
					game.log(trigger.player, '的判定牌改为', card);
				},
			},
			// 出牌阶段,若你有手牌,则你可以选择1名角色,只有你弃置3张手牌并对其造成1点雷电伤害才能生效
			// 其的所有手牌视为没有次数限制的雷【杀】直至你的下个回合开始为止
			gl_leiqiang: {
				limited: true,
				enable: 'phaseUse',
				filter(event, player) {
					return player.countCards('h');
				},
				filterTarget: true,
				filterCard(card) {
					return true;
				},
				selectCard: 3,
				position: 'h',
				async content(event, trigger, player) {
					player.awakenSkill('gl_leiqiang');
					event.target.damage('thunder');
					event.target.addSkill('gl_leiqiang_sha');
					event.target.storage.gl_leiqiang = player;
				},
				subSkill: {
					sha: {
						trigger: {
							global: ['phaseBegin', 'dieAfter'],
						},
						filter(event, player) {
							return event.player == player.storage.gl_leiqiang;
						},
						forced: true,
						content() {
							player.removeSkill('gl_leiqiang_sha');
						},
						mark: true,
						intro: {
							content: '你的所有手牌均视为无次数限制的雷【杀】',
						},
						charlotte: true,
						mod: {
							cardUsable(card, player, num) {
								if (card.name == 'sha' && card.nature == 'thunder') return Infinity;
							},
							cardname(card, player, name) {
								if (get.position(card) == 'h') return 'sha';
							},
							cardnature(card, player) {
								if (get.position(card) == 'h') return 'thunder';
							},
						},
					},
				},
			},
			gl_poji: {
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					return event.card && event.card.name == 'sha' && event.target.countCards('he') && event.player.countCards('he');
				},
				forced: true,
				logTarget(event, player) {
					if (event.player == player) return event.target;
					return event.player;
				},
				content() {
					'step 0';
					if (trigger.player == player) {
						event.target = trigger.target;
					} else {
						event.target = trigger.player;
					}
					player.chooseToDiscard('he', get.prompt(event.name, target));
					('step 1');
					if (result.bool) {
						player.discardPlayerCard(target, 'he', true);
					}
				},
			},
			gl_niqi: {
				trigger: {
					player: 'damageEnd',
				},
				forced: true,
				filter(event, player) {
					return player.countCards('h') == 0;
				},
				content() {
					var maxNum = 0,
						num;
					for (target of game.players) {
						if (target.isOut() || target == player) continue;
						num = target.countCards('h');
						if (maxNum < num) {
							maxNum = num;
						}
					}
					if (maxNum > 0) {
						player.drawTo(maxNum);
					}
				},
			},
			gl_maishen: {
				enable: 'phaseUse',
				filter(event, player) {
					return player.countCards('h') == 0;
				},
				filterTarget(card, player, target) {
					return player != target && target.countCards('he') > 0;
				},
				content() {
					'step 0';
					target.chooseCard('he', true, '卖身:将一张牌交给' + get.translation(player)).set('ai', function (card) {
						var num = _status.event.parent.player.getUseValue(card);
						if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
							return num;
						} else {
							return -num;
						}
					});
					('step 1');
					target.give(result.cards, player, true);
					('step 2');
					if (
						!game.hasPlayer(function (current) {
							return current != player && player.canUse('sha', current);
						})
					) {
						event.finish();
						return;
					}
					target
						.chooseTarget(
							function (card, player, target) {
								var evt = _status.event.parent;
								return evt.player.canUse(
									{
										name: 'sha',
									},
									target
								);
							},
							'请选择一名角色,视为' + get.translation(player) + '对其使用【杀】'
						)
						.set('ai', function (target) {
							var evt = _status.event.parent;
							return get.effect(
								target,
								{
									name: 'sha',
								},
								evt.player,
								_status.event.player
							);
						});
					('step 3');
					if (result.targets) {
						player.useCard(
							{
								name: 'sha',
							},
							result.targets[0],
							'noai'
						);
					}
				},
			},
			gl_jinzhi: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				filter(event, player) {
					return player.countUsed(null, true) >= player.hp && player.canMoveCard();
				},
				forced: true,
				content() {
					'step 0';
					player.moveCard();
					('step 1');
					if (result.targets && result.targets[0]) {
						result.targets[0].drawTo(result.targets[0].maxHp);
					}
				},
			},
			gl_louchu: {
				trigger: {
					player: 'phaseUseBegin',
				},
				forced: true,
				filter(event, player) {
					if (!lib.inpile.includes('nvzhuang')) return true;
					return !player.getEquip('nvzhuang');
				},
				content() {
					var card;
					if (!lib.inpile.includes('nvzhuang')) {
						card = game.createCard2('nvzhuang', 'heart', 10);
						lib.inpile.push('nvzhuang');
					} else
						card = get.cardPile(function (card) {
							return card.name == 'nvzhuang';
						}, 'field');
					player.useCard(card, player);
				},
				group: 'gl_louchu_equip',
				subSkill: {
					equip: {
						trigger: {
							player: 'loseAfter',
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
						},
						forced: true,
						filter(event, player) {
							var evt = event.getl(player);
							return evt && evt.player == player && evt.es && evt.es.length;
						},
						content() {
							'step 0';
							player.chooseCardTarget({
								prompt: '是否将一张手牌当做【乐不思蜀】使用？',
								filterCard: true,
								position: 'hs',
								filterTarget(card, player, target) {
									var card = get.autoViewAs(
										{
											name: 'lebu',
										},
										ui.selected.cards
									);
									return player.canUse(card, target);
								},
							});
							('step 1');
							if (result.bool) {
								player.useCard(
									{
										name: 'lebu',
									},
									result.cards,
									result.targets[0]
								);
							}
						},
					},
				},
				ai: {
					effect: {
						target(card, player, target, current) {
							if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
						},
					},
					reverseEquip: true,
					noe: true,
				},
			},
			gl_jizhi: {
				enable: 'chooseToUse',
				hiddenCard(player, name) {
					if (get.type(name) != 'trick') return false;
					var cards = player.getCards('hes');
					for (var card of cards) {
						if ((player.getStat().skill['gl_jizhi' + get.type2(card)] || 0) < 1) return true;
					}
				},
				chooseButton: {
					dialog(event, player) {
						var list = [];
						for (let i = 0; i < lib.inpile.length; i++) {
							var name = lib.inpile[i];
							if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
						}
						return ui.create.dialog('极智', [list, 'vcard'], 'hidden');
					},
					filter(button, player) {
						return _status.event.parent.filterCard(
							{
								name: button.link[2],
							},
							player,
							_status.event.parent
						);
					},
					backup(links, player) {
						return {
							filterCard(card, player, event) {
								return (player.getStat().skill['gl_jizhi' + get.type2(card)] || 0) < 1;
							},
							position: 'hes',
							selectCard: 1,
							viewAs: {
								name: links[0][2],
							},
							onuse(result, player) {
								var stat = player.getStat();
								var type = 'gl_jizhi' + get.type2(result.cards[0]);
								if (!stat.skill[type]) {
									stat.skill[type] = 0;
								}
								stat.skill[type]++;
								if (player.getStat().skill.gl_jizhi > 0) {
									var next = game.createEvent('jizhi_lose', false, _status.event.parent);
									next.player = player;
									next.setContent(function () {
										player.loseHp();
										player.draw();
									});
								}
							},
						};
					},
					prompt(links, player) {
						return '请选择【' + get.translation(links[0][2]) + '】的目标';
					},
				},
			},
			gl_jianwei: {
				trigger: {
					global: 'useCardToTarget',
				},
				filter(event, player) {
					if (event.player == player) return false;
					if (event.target == player) return false;
					if (player.countCards('he', 'sha') == 0) return false;
					if (!get.tag(event.card, 'damage')) return false;
					return get.distance(player, event.target) <= 1;
				},
				forced: true,
				content() {
					'step 0';
					player.chooseToDiscard('he', get.prompt2(event.name, trigger.target)).filterCard = function (card) {
						return card.name == 'sha';
					};
					('step 1');
					if (result.bool) {
						var evt = trigger.parent;
						evt.triggeredTargets2.remove(trigger.target);
						evt.targets.remove(trigger.target);
						evt.targets.push(player);
						if (!evt.targets.includes(trigger.player)) evt.targets.push(trigger.player);
					}
				},
				ai: {
					threaten: 1.5,
				},
			},
			gl_wuxiang: {
				trigger: {
					player: 'dieBegin',
				},
				forced: true,
				filter(event, player) {
					return player.maxHp > 0;
				},
				content() {
					trigger.cancel();
					player.loseMaxHp();
					var cards = player.getCards('hej');
					player.discard(cards);
					player.draw(cards.length);
				},
				mod: {
					ignoredHandcard(card, player) {
						return card.name == 'sha';
					},
					cardDiscardable(card, player, name) {
						if (name == 'phaseDiscard' && card.name == 'sha') return false;
					},
					cardEnabled(card) {
						if (card.name == 'sha') return false;
					},
				},
			},
			gl_yinchun: {
				enable: 'phaseUse',
				filterTarget: true,
				usable: 1,
				filter(event, player) {
					return ui.discardPile.childNodes.length;
				},
				content() {
					'step 0';
					player.chooseButton(['吟春:请选择要令' + get.translation(target) + '获得的牌', Array.from(ui.discardPile.childNodes)]);
					('step 1');
					if (result.bool && result.links && result.links.length) {
						target.gain(result.links, 'gain2', 'log').gaintag.push('gl_yinchun');
						target.addSkill('gl_yinchun_card');
					}
				},
				subSkill: {
					card: {
						mark: true,
						intro: {
							content: '不能使用、打出或弃置<吟春>牌',
						},
						mod: {
							cardDiscardable(card, player) {
								if (card.hasGaintag('gl_yinchun')) return false;
							},
							cardEnabled2(card, player) {
								if (get.itemtype(card) == 'card' && card.hasGaintag('gl_yinchun')) return false;
							},
						},
						trigger: {
							player: 'dying',
						},
						forced: true,
						popup: false,
						charlotte: true,
						content() {
							player.removeSkill('gl_yinchun_card');
						},
						onremove(player) {
							player.removeGaintag('gl_yinchun');
						},
					},
				},
			},
			gl_ganling: {
				trigger: {
					player: 'phaseJieshuBegin',
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget(get.prompt2(event.name), function (card, player, target) {
						return target != player;
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						var list = [];
						for (let i = 0; i < lib.inpile.length; i++) {
							var type = get.type2(lib.inpile[i]);
							list.push([get.translation(type), '', lib.inpile[i]]);
						}
						player.chooseButton(['感灵:请宣言一个牌名', [list, 'vcard']]);
					} else {
						event.finish();
					}
					('step 2');
					if (result.bool) {
						target.showHandcards();
						var cards = target.getCards('h');
						var gains = [];
						for (var card of cards) {
							if (card.name == result.links[0][2]) gains.add(card);
						}
						if (gains.length) {
							player.gain(gains, 'gain2', 'log');
						} else {
							player.loseHp();
						}
					}
				},
			},
			gl_xunyou: {
				trigger: {
					global: 'phaseBefore',
					player: 'enterGame',
				},
				forced: true,
				filter(event, player) {
					return event.name != 'phase' || game.phaseNumber == 0;
				},
				content() {
					'step 0';
					var list = [];
					for (let i = 0; i < lib.inpile.length; i++) {
						var type = get.type2(lib.inpile[i]);
						if (type == 'basic' || type == 'trick') {
							list.push([get.translation(type), '', lib.inpile[i]]);
						}
					}
					player.chooseButton(['寻游:请宣言一个牌名', [list, 'vcard']], true);
					('step 1');
					if (result.bool) {
						player.storage.gl_xunyou = result.links[0][2];
					}
				},
				group: 'gl_xunyou_name',
				subSkill: {
					name: {
						trigger: {
							player: 'useCard',
						},
						forced: true,
						filter(event, player) {
							if (!event.targets || event.targets.length == 0) return false;
							if (player.hasCard(player.storage.gl_xunyou, 'he')) return true;
							return player.countCards('he');
						},
						content() {
							'step 0';
							if (player.hasCard(player.storage.gl_xunyou, 'he')) {
								if (trigger.addCount !== false) {
									trigger.addCount = false;
									if (player.stat[player.stat.length - 1].card[trigger.card.name] > 0) {
										player.stat[player.stat.length - 1].card[trigger.card.name]--;
									}
								}
								trigger.card.huanxiang = player.storage.gl_xunyou;
								event.finish();
							} else {
								player.chooseCard(true, 'he', '寻游:请重铸一张牌');
							}
							('step 1');
							if (result.bool) {
								var card = result.cards[0];
								player.lose(card, ui.discardPile, 'visible');
								player.$throw(card, 1000);
								game.log(player, '将', card, '置入弃牌堆');
								player.draw();
							}
						},
					},
				},
			},
			gl_lingjing: {
				enable: 'phaseUse',
				filter(event, player) {
					var num =
						game.countPlayer(function (current) {
							return current.hasSkill('gl_mingjing');
						}) + 1;
					return player.gl_mp > num;
				},
				filterTarget(card, player, target) {
					return !target.hasSkill('gl_mingjing');
				},
				content() {
					var num =
						game.countPlayer(function (current) {
							return current.hasSkill('gl_mingjing');
						}) + 1;
					player.gl_changeMp(-num);
					target.addSkill('gl_mingjing');
				},
				ai: {
					order: 4,
					result: {
						target: 1,
						player: 0.1,
					},
				},
			},
			gl_zongying: {
				trigger: {
					player: 'useCardToPlayered',
					target: 'useCardToTargeted',
				},
				filter(event, player) {
					var type = get.type(event.card);
					if (type != 'basic' && type != 'trick') return false;
					if (event.player == player && event.targets.length == 1 && event.targets[0] == player) return false;
					if (!event.targets) return false;
					if (!event.isFirstTarget) return false;
					return event.player && game.players.length > 1;
				},
				forced: true,
				content() {
					'step 0';
					player
						.chooseTarget(get.prompt2(event.name), function (card, player, target) {
							return trigger.player != target;
						})
						.set('ai', function (target) {
							return -get.attitude(_status.event.player, target);
						});
					('step 1');
					if (result.bool) {
						trigger.parent.player = result.targets[0];
						game.log(result.targets[0], '变更为了', trigger.card, '的使用者');
					}
				},
			},
			gl_yinyue: {
				trigger: {
					player: 'damageEnd',
				},
				filter(event, player) {
					return player.getDamagedHp() > 0;
				},
				forced: true,
				content() {
					player.changeHujia(player.getDamagedHp());
				},
				group: 'gl_yinyue_remove',
				subSkill: {
					remove: {
						trigger: {
							player: 'phaseZhunbeiBegin',
						},
						forced: true,
						filter(event, player) {
							return player.hujia > 0;
						},
						content() {
							'step 0';
							event.num = player.hujia;
							player
								.chooseTarget('选择一名角色令其弃置与你护甲值相等的牌', true, function (card, player, target) {
									return player != target;
								})
								.set('ai', function (target) {
									return -get.attitude(_status.event.player, target);
								});
							('step 1');
							if (result.bool) {
								player.changeHujia(-num);
								var discard = result.targets[0].countCards('he');
								var draw = 0;
								if (discard < num) {
									draw = num - discard;
								} else {
									discard = num;
								}
								result.targets[0].chooseToDiscard(discard, true, 'he');
								if (draw > 0) player.draw(draw);
							}
						},
					},
				},
				ai: {
					maixie: true,
					maixie_hp: true,
					effect: {
						target(card, player, target) {
							if (get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return;
								if (!target.hasFriend()) return;
								var num = 1;
								if (!player.needsToDiscard() && target.isDamaged()) {
									num = 0.7;
								} else {
									num = 0.5;
								}
								if (target.hp >= 4) return [1, num * 2];
								if (target.hp == 3) return [1, num * 1.5];
								if (target.hp == 2) return [1, num * 0.5];
							}
						},
					},
				},
			},
			gl_mingjing: {
				trigger: {
					global: 'useCardAfter',
				},
				marktext: '镜',
				intro: {
					content: '你动我一下试试？!',
				},
				forced: true,
				filter(event, player, name) {
					var type = get.type(event.card);
					if (type != 'basic' && type != 'trick') return false;
					return player.canUse(event.card, event.player, false);
				},
				content() {
					player.removeSkill('gl_mingjing');
					var info = get.info(trigger.card);
					var range;
					if (!info.notarget) {
						var select = get.copy(info.selectTarget);
						if (select == undefined) {
							range = [1, 1];
						} else if (typeof select == 'number') range = [select, select];
						else if (get.itemtype(select) == 'select') range = select;
						else if (typeof select == 'function') range = select(trigger.card, player);
						game.checkMod(trigger.card, player, range, 'selectTarget', player);
					}
					if (Array.isArray(range) && range[1] <= -1) {
						player.chooseUseTarget(trigger.card, true).set('addCount', false);
					} else {
						player
							.chooseUseTarget(trigger.card, true, '对包括' + get.translation(event.player) + '在内的角色使用' + get.translation(trigger.card))
							.set('complexSelect', true)
							.set('filterTarget', function (card, player, target) {
								if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
								return lib.filter.filterTarget.apply(this, arguments);
							})
							.set('sourcex', trigger.player)
							.set('addCount', false);
					}
				},
			},
			gl_gudu: {
				init(player, skill) {
					player.storage[skill] = {};
				},
				trigger: {
					player: 'gainEnd',
				},
				filter(event, player) {
					return event.source && event.source.isAlive() && event.source != player;
				},
				forced: true,
				content() {
					if (!player.storage.gl_gudu[game.roundNumber]) player.storage.gl_gudu[game.roundNumber] = [];
					player.storage.gl_gudu[game.roundNumber].add(trigger.source);
				},
				mod: {
					targetEnabled(card, player, target, now) {
						if (player == target) return;
						storage = target.storage.gl_gudu;
						if (!storage || !storage[game.roundNumber - 1] || !storage[game.roundNumber - 1].includes(player)) return false;
					},
					playerEnabled(card, player, target) {
						if (player == target) return;
						storage = player.storage.gl_gudu;
						if (!storage || !storage[game.roundNumber - 1] || !storage[game.roundNumber - 1].includes(target)) return false;
					},
				},
			},
			gl_xiehou: {
				init(player, skill) {
					player.storage[skill] = [];
				},
				trigger: {
					player: 'phaseUseBegin',
				},
				filter(event, player) {
					return player.storage.gl_xiehou.length;
				},
				prompt() {
					var player = _status.event.player;
					return '是否令' + get.translation(player.storage.gl_xiehou) + '分别摸一张牌？';
				},
				content() {
					game.asyncDraw(player.storage.gl_xiehou);
					player.storage.gl_xiehou.length = 0;
				},
				global: 'gl_xiehou_give',
				subSkill: {
					give: {
						enable: 'phaseUse',
						usable: 1,
						filter(event, player) {
							return (
								player.countCards('he') &&
								game.hasPlayer(function (current) {
									return current != player && current.hasSkill('gl_xiehou');
								})
							);
						},
						forced: true,
						delay: false,
						filterCard: true,
						discard: false,
						lose: false,
						position: 'he',
						check(card) {
							return 7 - get.value(card);
						},
						content() {
							'step 0';
							var targets = game.filterPlayer(function (current) {
								return current != player && current.hasSkill('gl_qinting');
							});
							if (targets.length == 1) {
								event.target = targets[0];
								event.goto(2);
							} else if (targets.length) {
								player
									.chooseTarget(true, '选择【邂逅】的目标', function (card, player, target) {
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
								player.give(cards, event.target);
								event.target.storage.gl_xiehou.add(player);
							} else {
								event.finish();
							}
							delete _status.noclearcountdown;
							game.stopCountChoose();
						},
						ai: {
							order: 1,
							threaten: 1.5,
							result: {
								player(player) {
									var target = game.findPlayer(function (current) {
										return current.hasSkill('gl_xiehou');
									});
									if (target) {
										var num = get.attitude(player, target);
										if (num < 0 && !target.hasFriend()) return 1;
										return num + target.getDamagedHp();
									}
								},
							},
						},
					},
				},
			},
			gl_yanzou: {
				enable: 'phaseUse',
				usable: 1,
				filterTarget: true,
				selectTarget() {
					var player = _status.event.player;
					return [1, Math.min(player.hp, game.countPlayer() - 1)];
				},
				multitarget: true,
				multiline: true,
				content() {
					'step 0';
					event.num = 0;
					event.targets2 = [];
					player.chooseTarget(true, '请选择结算目标', function (card, player, target) {
						return !targets.includes(target);
					});
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						if (targets.length == 1 && targets[0] == player) {
							event.cards = player.getCards('h');
							event.goto(4);
						}
					} else {
						event.finish();
					}
					('step 2');
					if (targets.length > num) {
						targets[num]
							.chooseToUse(
								'演奏:对' + get.translation(target) + '使用一张牌,否则受到一点伤害',
								function (card, player, event) {
									return player.canUse(card, target, false);
								},
								target,
								-1
							)
							.set('addCount', false);
					} else {
						event.finish();
					}
					('step 3');
					if (result.bool) {
						targets[num].draw();
					} else {
						targets[num].damage();
					}
					event.num++;
					event.goto(2);
					('step 4');
					if (event.cards.length && target.isAlive()) {
						var card = event.cards.shift();
						if (player.canUse(card, target, false) || player.canUse(card, target, false)) {
							player
								.chooseUseTarget(card, true, false, 'nodistance')
								.set('filterTarget', function (card, player, target) {
									var evt = _status.event;
									if (_status.event.name == 'chooseTarget') evt = evt.parent;
									if (target != player && target != evt.yanzou_target) return false;
									return lib.filter.targetEnabledx(card, player, target);
								})
								.set('yanzou_target', target);
						}
						event.redo();
					}
				},
			},
			gl_fengyin: {
				trigger: {
					player: 'gainAfter',
				},
				forced: true,
				filter(event, player) {
					var storage = player.getExpansions('gl_kuluo');
					var cards = [];
					for (var card of storage) {
						cards.add(card.name);
					}
					for (var card of event.cards) {
						if (!cards.includes(card.name)) return true;
					}
					return false;
				},
				content() {
					'step 0';
					var next = player.chooseCard('h', [1, Infinity], '选择一张手牌作为<库洛>牌', function (card) {
						if (!trigger.cards.includes(card)) return false;
						for (var storage of player.getExpansions('gl_kuluo')) {
							if (card.name == storage.name) return false;
						}
						if (ui.selected.cards.length) {
							for (var button of ui.selected.cards) {
								if (card.name == button.name) return false;
							}
						}
						return true;
					});
					('step 1');
					if (result.bool && result.cards && result.cards.length) {
						player.addToExpansion(result.cards, 'giveAuto', player).gaintag.add('gl_kuluo');
						player.gl_changeMp(2);
					}
				},
			},
			gl_kuluo: {
				intro: {
					content: 'expansion',
					markcount: 'expansion',
					onunmark: 'throw',
				},
			},
			gl_yushi: {
				enable: 'phaseUse',
				filter(event, player) {
					var evt = _status.event.getParent('phase');
					if (!evt || evt.name != 'phase') {
						return true;
					}
					if (!evt.gl_yushi) evt.gl_yushi = [];
					return player.getExpansions('gl_kuluo').removeArray(evt.gl_yushi).length;
				},
				chooseButton: {
					dialog(event, player) {
						return ui.create.dialog('驭使', player.getExpansions('gl_kuluo'), 'hidden');
					},
					filter(button, player) {
						var evt = _status.event.getParent('phase');
						if (!evt || evt.name != 'phase') {
							return true;
						}
						if (!evt.gl_yushi) evt.gl_yushi = [];
						return !evt.gl_yushi.includes(button.link);
					},
					backup(links, player) {
						return {
							filterCard() {
								return false;
							},
							selectCard: -1,
							card: links[0],
							delay: false,
							content: lib.skill.gl_yushi.contentx,
						};
					},
					prompt(links, player) {
						return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
					},
				},
				contentx() {
					'step 0';
					var card = lib.skill.gl_yushi_backup.card;
					event.card = card;
					var evt = _status.event.getParent('phase');
					if (evt && evt.name == 'phase' && evt.gl_yushi) {
						evt.gl_yushi.add(card);
					}
					if (player.hasUseTarget(card) && player.gl_mp >= 2) {
						player.gl_changeMp(-2);
						player.chooseUseTarget(
							{
								name: card.name,
								suit: card.suit,
								number: card.number,
								nature: card.nature,
							},
							true
						);
					} else {
						player.loseToDiscardpile(card);
						player.draw();
						event.finish();
					}
					('step 1');
					if (result.targets) {
						var type = get.type(card);
						if (type == 'delay') {
							for (var target of result.targets) {
								target.executeDelayCardEffect(card.name, target);
							}
						}
						if (type == 'equip') {
							for (var target of result.targets) {
								target.addSkill('gl_yushi_equip');
								target.storage.gl_yushi = {
									player: player,
									name: card.name,
								};
								if (lib.card[card.name].skills) target.addAdditionalSkill('gl_yushi_equip', lib.card[card.name].skills);
							}
						}
					}
				},
				subSkill: {
					equip: {
						trigger: {
							global: ['phaseBegin', 'dieBegin'],
						},
						filter(event, player) {
							return event.player == player.storage.gl_yushi.player;
						},
						content() {
							player.removeSkill('gl_yushi_equip');
						},
						mod: {
							globalFrom(from, to, num) {
								var distance = lib.card[from.storage.gl_yushi.name].distance;
								if (distance && distance.globalFrom) return num + distance.globalFrom;
							},
							globalTo(from, to, num) {
								var distance = lib.card[from.storage.gl_yushi.name].distance;
								if (distance && distance.globalTo) return num + distance.globalTo;
							},
						},
					},
				},
				ai: {
					order: 4,
					result: {
						player: 1,
					},
					threaten: 1.9,
				},
			},
			gl_mengzhan: {
				trigger: {
					player: 'useCardAfter',
				},
				forced: true,
				filter(event, player) {
					var history = player.getAllHistory('useCard');
					var evt = history[history.length - 2];
					if (!evt) return false;
					var color1 = get.color(evt.card);
					var color2 = get.color(event.card);
					return color1 && color2 && color1 != color2;
				},
				content() {
					'step 0';
					player.chooseCardButton(player.getExpansions('gl_kuluo'), '梦占:是否移动一张<库洛>牌与牌堆顶四张牌');
					('step 1');
					if (result.bool) {
						var cards = get.cards(4);
						cards.push(result.links[0]);
						game.cardsGotoOrdering(cards);
						var next = player.chooseToMove();
						next.set('list', [['牌堆顶', cards], ['牌堆底']]);
						next.set('prompt', '梦占:点击将牌移动到牌堆顶或牌堆底');
					} else {
						event.finish();
					}
					('step 2');
					if (result.moved?.length) {
						var top = result.moved[0];
						var bottom = result.moved[1];
						top.reverse();
						for (let i = 0; i < top.length; i++) {
							ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
						}
						for (let i = 0; i < bottom.length; i++) {
							ui.cardPile.appendChild(bottom[i]);
						}
						player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
						game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
						game.updateRoundNumber();
					} //	QQQ
				},
			},
			gl_yingyuan: {
				subSkill: {
					sha: {
						mod: {
							cardname(card, player, name) {
								if (get.position(card) == 'h') return 'sha';
							},
						},
						ai: {
							skillTagFilter(player) {
								if (!player.countCards('h')) return false;
							},
							respondSha: true,
						},
						trigger: {
							global: 'useCardAfter',
						},
						filter(event, player) {
							return event.gl_yingyuan == event.card;
						},
						forced: true,
						content() {
							player.removeSkill('gl_yingyuan_sha');
						},
					},
				},
				shaRelated: true,
				preHidden: true,
				trigger: {
					global: 'useCardToPlayered',
				},
				filter(event, player) {
					if (!event.targets) return false;
					if (!event.isFirstTarget) return false;
					return (event.card && event.card.name == 'juedou') || event.card.name == 'sha';
				},
				forced: true,
				content() {
					'step 0';
					var next = player.chooseTarget('令' + get.translation(targets) + '其中一名角色的手牌直到' + get.translation(trigger.card) + '结算完毕前均视为【杀】');
					next.filterTarget = function (card, player, target) {
						return trigger.targets.includes(target) || trigger.player == target;
					};
					('step 1');
					if (result.bool) {
						trigger.parent.gl_yingyuan = trigger.card;
						result.targets[0].addTempSkill('gl_yingyuan_sha');
					}
				},
				ai: {
					effect: {
						target(card, player, target) {
							if (card.name == 'juedou') return [1, 0.6];
						},
						player(card, player, target) {
							if (card.name == 'juedou') return [1, 1];
						},
					},
				},
			},
			gl_caigan: {
				enable: 'phaseUse',
				usable: 1,
				filter(event, player) {
					if (game.countPlayer() < 2) return false;
					return true;
				},
				selectTarget: 2,
				filterTarget(card, player, target) {
					if (ui.selected.targets.length == 1) {
						return ui.selected.targets[0].canCompare(target);
					}
					return true;
				},
				multitarget: true,
				multiline: true,
				delay: false,
				targetprompt: ['发起拼点', '拼点目标'],
				content() {
					'step 0';
					if (targets[0].canCompare(targets[1])) {
						targets[0].chooseToCompare(targets[1]);
					} else event.finish();
					('step 1');
					if (result.winner != player) {
						result.winner.useCard(
							{
								name: 'juedou',
							},
							player
						);
						event.finish();
					} else {
						player.chooseTarget('令任意一名角色获得一张♥️️️牌').ai = function (target) {
							return get.attitude(_status.event.player, target) > 0;
						};
					}
					('step 2');
					if (result.bool && result.targets) {
						var card = get.cardPile(function (c) {
							return c.suit == 'heart';
						});
						if (card) result.targets[0].gain(card, 'gain2');
					}
				},
			},
			gl_fanxiang: {
				trigger: {
					player: 'recoverAfter',
				},
				logTarget(event, player) {
					return _status.currentPhase;
				},
				prompt2(event, player) {
					return '是否令' + get.translation(_status.currentPhase) + '摸两张牌并结束当前的回合';
				},
				content() {
					_status.currentPhase.draw(2);
					var evt = _status.event.getParent('phaseUse');
					if (evt && evt.name == 'phaseUse') {
						evt.skipped = true;
					}
					var evt = _status.event.getParent('phase');
					if (evt && evt.name == 'phase') {
						evt.finish();
					}
				},
			},
			gl_shizhong: {
				trigger: {
					global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
				},
				forced: true,
				filter(event, player) {
					return game.hasPlayer(function (current) {
						var evt = event.getl(current);
						return evt && evt.hs && evt.hs.length && current.countCards('h') == 0;
					});
				},
				content() {
					'step 0';
					event.list = game
						.filterPlayer(function (current) {
							var evt = trigger.getl(current);
							return evt && evt.hs && evt.hs.length;
						})
						.sortBySeat(_status.currentPhase);
					('step 1');
					var target = event.list.shift();
					event.target = target;
					var list = ['gl_liliang', 'gl_jianren', 'gl_zhufu', 'gl_moxing'];
					for (let i = 0; i < list.length; i++) {
						if (!target.gl_canGainBuff(list[i])) list.splice(i--, 1);
					}
					if (target.isIn() && target.countCards('h') == 0 && list.length) {
						list.push('cancel2');
						player.chooseControl(list).set('prompt', '饰忠:令' + get.translation(target) + '获得一种状态并摸一张牌');
					} else event.goto(3);
					('step 2');
					if (result.control != 'cancel2') {
						target.draw();
						target.gl_changeBuff(result.control);
					}
					('step 3');
					if (event.list.length) event.goto(1);
				},
				ai: {
					threaten: 1.3,
					expose: 0.2,
					noh: true,
				},
			},
			gl_sifan: {
				trigger: {
					global: 'gl_loseBuff',
				},
				forced: true,
				filter(event, player) {
					return player.countCards('hes') && player.canUse('chuqibuyi', event.player, false);
				},
				content() {
					var next = player.chooseToUse();
					next.addCount = false;
					next.set('norestore', true);
					next.target = trigger.player;
					next.set('openskilldialog', '伺反:将是否将1张牌当【出其不意】对' + get.translation(trigger.player) + '使用？');
					next.set('_backupevent', 'gl_sifan_backup');
					next.backup('gl_sifan_backup');
				},
				subSkill: {
					backup: {
						viewAs: {
							name: 'chuqibuyi',
						},
						position: 'hes',
						filterCard: true,
						selectCard: 1,
						selectTarget: -1,
						filterTarget(card, player, target) {
							return _status.event.target == target;
						},
						popname: true,
					},
				},
			},
			gl_bangyou: {
				trigger: {
					player: 'damageBegin3',
				},
				filter(event, player) {
					return player.countCards('h');
				},
				forced: true,
				content() {
					'step 0';
					player.chooseTarget();
					('step 1');
					if (result.bool) {
						event.target = result.targets[0];
						event.target.chooseControl(['承受伤害', '放置手牌']).set('prompt', '傍佑:代替' + get.translation(player) + '承受伤害或将所有手牌置于武将牌上');
					} else {
						event.finish();
					}
					('step 2');
					if (result.control == '承受伤害') {
						trigger.player = target;
					} else {
						var cards = target.getCards('h');
						target.gl_gainExpansions(cards);
					}
				},
			},
			gl_lingzhou: {
				enable: 'phaseUse',
				usable: 2,
				filterTarget(card, player, target) {
					var skills = target.getSkills(false, false);
					skills.remove('gl_lingzhou');
					for (let i = 0; i < skills.length; i++) {
						var name = skills[i];
						if (!lib.skill[name] || lib.skill[name].charlotte) continue;
						if (!lib.translate[name] || lib.translate[name].length == 0) continue;
						if (!lib.translate[name + '_info'] || lib.translate[name + '_info'].length == 0) continue;
						return true;
					}
					return false;
				},
				content() {
					'step 0';
					var skills = target.getSkills(false, false);
					skills.remove('gl_lingzhou');
					var list = [];
					for (let i = 0; i < skills.length; i++) {
						var name = skills[i];
						if (!lib.skill[name] || lib.skill[name].charlotte) continue;
						if (!lib.translate[name] || lib.translate[name].length == 0) continue;
						if (!lib.translate[name + '_info'] || lib.translate[name + '_info'].length == 0) continue;
						list.push(name);
					}
					if (list.length) {
						var dialog = ui.create.dialog('请选择要无效的技能', 'hidden');
						dialog.forcebutton = true;
						for (let i = 0; i < list.length; i++) {
							var node = ui.create.caption('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(list[i]) + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>', dialog.content);
							dialog.buttons.add(node);
							var click = lib.config.touchscreen ? 'touchend' : 'click';
							node.addEventListener(click, ui.click.button);
							node.style.width = 'calc(100% - 30px)';
							node.style.position = 'unset';
							node.link = list[i];
						}
						player.chooseButton(dialog, true);
					}
					('step 1');
					if (result.bool) {
						target.draw();
						target.gl_awakenSkill(result.links[0]);
						if (!target.storage.gl_lingzhou) target.storage.gl_lingzhou = [];
						target.storage.gl_lingzhou.add(result.links[0]);
						target.addSkill('gl_lingzhou_restore');
					}
				},
				subSkill: {
					restore: {
						enable: 'phaseUse',
						filter(event, player) {
							var skills = player.getSkills(false, false, false, false);
							for (var skill of player.storage.gl_lingzhou) {
								if (skills.includes(skill)) return true;
							}
							return false;
						},
						charlotte: true,
						filterCard: true,
						content() {
							'step 0';
							var list = [];
							var skills = player.getSkills(false, false, false, false);
							for (var skill of player.storage.gl_lingzhou) {
								if (skills.includes(skill)) list.push(skill);
							}
							if (list.length) {
								var dialog = ui.create.dialog('请选择要回复的技能', 'hidden');
								dialog.forcebutton = true;
								for (let i = 0; i < list.length; i++) {
									var node = ui.create.caption('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(list[i]) + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>', dialog.content);
									dialog.buttons.add(node);
									var click = lib.config.touchscreen ? 'touchend' : 'click';
									node.addEventListener(click, ui.click.button);
									node.style.width = 'calc(100% - 30px)';
									node.style.position = 'unset';
									node.link = list[i];
								}
								player.chooseButton(dialog, true);
							}
							('step 1');
							if (result.bool) {
								var skill = result.links[0];
								player.gl_restoreSkill(skill);
								player.storage.gl_lingzhou.remove(skill);
							}
						},
					},
				},
			},
			gl_muying: {
				trigger: {
					player: 'drawBegin',
					global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter'],
				},
				forced: true,
				filter(event, player) {
					if (event.name == 'draw') return true;
					return event.getd(player).length;
					if (event.name.indexOf('lose') == 0) {
						if (event.getlx === false || event.position != ui.discardPile) return false;
					}
				},
				content() {
					'step 0';
					if (trigger.name == 'draw') {
						trigger.bottom = true;
						event.finish();
						return;
					}
					var cards = trigger.getd(player);
					if (cards.length == 1) {
						event._result = {
							bool: true,
							moved: [cards],
						};
					} else {
						var next = player.chooseToMove('暮影:将牌按顺序置于牌堆顶', true);
						next.set('list', [['牌堆顶', cards]]);
					}
					('step 1');
					if (result.bool) {
						var cards = result.moved[0];
						cards.reverse();
						game.cardsGotoPile(cards, 'insert');
						game.log(player, '将', cards, '置于了牌堆顶');
					}
				},
			},
			gl_cannian: {
				trigger: {
					player: 'damageBegin3',
					source: 'damageBegin1',
				},
				forced: true,
				mark: true,
				zhuanhuanji: true,
				marktext: '☯',
				intro: {
					content(storage, player, skill) {
						var str = '当你造成或受到伤害时,';
						str += player.storage.gl_cannian ? '此伤害-1' : '此伤害+1';
						str += '随后若此伤害为致命伤害或无效伤害,则你于此回合结束后,执行一个额外的出牌阶段';
						return str;
					},
				},
				content() {
					if (player.storage.gl_cannian) {
						trigger.num--;
					} else {
						trigger.num++;
					}
					player.changeZhuanhuanji('gl_cannian');
					if (trigger.num >= trigger.player.hp || trigger.num == 0 || trigger._triggered == 5) {
						player.gl_eventAfter('gl_cannian', function () {
							player.phaseUse();
						});
					}
				},
			},
		},
		translate: {
			gl_daxiong: '大熊',
			gl_dahuilang: '大灰狼',
			gl_huiguniang: '灰姑娘',
			gl_lianjie_backup: '联结',
			gl_mingzhi: '明置',
			gl_baixueji: '白雪公主',
			gl_xiaohongmao: '小红帽',
			gl_aikesi: '艾克斯',
			gl_aileina: '艾蕾娜',
			gl_ailisi: '爱丽丝',
			gl_wukong: '孙悟空',
			gl_sanzang: '唐三藏',
			gl_bajie: '猪八戒',
			gl_wujing: '沙悟净',
			gl_geerda: '格尔达',
			gl_zhende: '贞德',
			gl_taotailang: '桃太郎',
			gl_tangjihede: '堂吉诃德',
			gl_alading: '阿拉丁',
			gl_xiannv: '仙女',
			gl_baixuewanghou: '白雪王后',
			gl_duerxineiya: '杜尔西内娅',
			gl_jiayi: '加伊',
			gl_bingxuenvwang: '冰雪女王',
			gl_famu: '法姆',
			gl_kali: '卡莉',
			gl_aida: '艾达',
			gl_ailuoweisi: '艾洛维斯',
			gl_sade: '萨德',
			gl_jimu: '吉姆',
			gl_xierfu: '西尔弗',
			gl_maihuochai: '卖火柴的女孩',
			gl_hongqiangwei: '红蔷薇',
			gl_baiqiangwei: '白蔷薇',
			gl_kamila: '卡米拉',
			gl_kalun: '卡伦',
			gl_taolesi: '桃乐丝',
			gl_yuyitiannv: '羽衣天女',
			gl_kelisidina: '克里斯蒂娜',
			gl_ailike: '埃里克',
			gl_guiji: '鬼姬',
			gl_huiye: '辉夜',
			gl_busi: '布斯',
			gl_fulankensitan: '弗兰肯斯坦',
			gl_ailier: '爱丽儿',
			gl_moli: '茉莉公主',
			gl_dengshen: '灯神',
			gl_luoji: '洛基',
			gl_jintailang: '坂田金时',
			gl_jiutuntongzi: '酒吞童子',
			gl_pudaotailang: '浦岛太郎',
			gl_longnv: '龙女',
			gl_huzhinvshen: '泉水女神',
			gl_shizhongtu: '时钟兔',
			gl_jierdelei: '吉尔·德雷',
			gl_shuishu: '睡鼠',
			gl_caijunmao: '柴郡猫',
			gl_fengmaozi: '疯帽子',
			gl_daina: '黛娜',
			gl_sanyuetu: '三月兔',
			gl_yite: '伊特',
			gl_jingzhinvwang: '镜之女王',
			gl_lubang: '鲁邦',
			gl_jianimaer: '加尼玛尔',
			gl_ailu: '艾鲁',
			gl_xita: '希塔',
			gl_weizi: '维兹',
			gl_shiyin: '诗音',
			gl_taao: '塔奥',
			gl_ailixiya: '艾莉西亚',
			gl_daocaoren: '稻草人',
			gl_shizi: '狮子',
			gl_xipiren: '锡皮人',
			gl_aobulang: '奥布朗',
			gl_titanniya: '缇坦妮娅',
			gl_poke: '迫克',
			gl_bodun: '波顿',
			gl_lieren: '猎人',
			gl_xiaoairen: '小矮人',
			gl_bulu: '布鲁',
			gl_miya: '米娅',
			gl_huaite: '怀特',
			gl_kaluoluo: '卡罗罗',
			gl_dimu: '蒂姆',
			gl_souzhineihaojiang: '藪之内豪将',
			gl_milika: '米莉卡',
			gl_taqianna: '塔琪安娜',
			gl_yubanmeiqin: '御坂美琴',
			gl_youchuanji: '有川姬',
			gl_wanglu: '王陆',
			gl_kelalisi: '克拉丽丝',
			gl_jingyue: '镜月',
			gl_houtengdu: '后藤独',
			gl_muzhibenying: '木之本樱',
			gl_sangqiu: '桑丘',
			gl_shakuna: '莎库纳',
			gl_lianjie: '联结',
			gl_lianjie_info: '造型奇特的书签,不知从何而来.有时会发出奇异的光芒,仿佛在引导着持有者前行',
			_gl_qiyue: '契约',
			_gl_qiyue_info: '',
			gl_hundun: '混沌',
			gl_hundun_info: '锁定技,你的回合开始前,你解除自身所有控制效果',
			gl_huohuan2: '火环',
			gl_huohuan2_info: '',
			gl_huohuan: '火环',
			gl_huohuan_info: '出牌阶段限一次,选择一名角色,直到你的下个回合开始为止,其对除其以外的角色造成伤害、除其以外的角色对其造成伤害后,双方分别受到一点火焰伤害',
			gl_huangkong: '惶恐',
			gl_huangkong_info: '当你受到伤害后,你可以获得弃牌堆中一张牌.当你失去以此法获得的牌后,你将那些牌置于牌堆顶',
			gl_shihuai: '释怀',
			gl_shihuai_info: '每轮限一次,当你濒死时,你可以回复一点体力或摸两张牌,那之后,当前回合角色执行另一项',
			gl_jili: '激励',
			gl_jili_info: '当你不因使用而失去装备牌后,你可以令1名角色选择以下一项:1,使用一张【杀】;2,失去一点体力并获得两层<激昂>',
			gl_mengchen: '蒙尘',
			gl_mengchen_info: '出牌阶段,你可以与1名其他角色分别弃置1张牌,这个回合结束后,所有因此失去过牌的角色摸X张牌.(X为其因此失去的牌数)',
			gl_jingxin: '晶心',
			gl_jingxin_info: '当你回复体力后,你可以选择1名体力值小于你的角色,其将体力值回复至与你相等;当你不因摸牌阶段而获得牌后,你可以武装此技能',
			gl_huanxiang: '幻想',
			gl_huanxiang_info: '当你的杀指定目标后,你可以宣言一个基本牌或普通锦囊牌的牌名,那张杀的效果变为你宣言的卡的效果',
			gl_qiji: '奇迹',
			gl_qiji_info: '当你濒死时,你可以获得三层<禁疗>状态,随后将你当前所有手牌依次当【杀】使用;当有角色阵亡时,你移除自身所有异常状态并摸等量的牌',
			gl_shuyi: '淑仪',
			gl_shuyi_info: '锁定技,你的【杀】可以指定你自己为目标;你的回合内,若你本回合没有使用过牌,则你的手牌均视为【杀】;你的手牌上限、回合出杀数+X(X为你已损失的体力值)',
			gl_mozhuang: '魔装',
			gl_mozhuang_info: '出牌阶段限一次,你可以弃置任意张牌并选择一名角色,从牌堆、弃牌堆将等量的装备置入其的装备区内,你的下个出牌阶段开始时,你将所有以此法置入其装备区置入弃牌堆并摸等量的牌',
			gl_pianai: '偏爱',
			gl_pianai_info: '出牌阶段开始时,你可以选择任意名其他角色为目标并失去X点体力,直到这个回合结束为止,当你使用牌指定目标时,其也成为额外目标.(X为你选择的目标数)',
			gl_jieyou: '解忧',
			gl_jieyou_info: '每回合限两次,你可以将1张装备牌当【无懈可击】使用;若你的手牌为全场最少的角色之一,此效果改为【无中生有】;若你的体力为全场最少的角色之一,此效果改为【桃】;若以上条件均满足,此效果改为【流星火雨】',
			gl_duguo: '毒果',
			gl_duguo_info: '出牌阶段,你可以将一张基本牌或锦囊牌置于任意角色的武将牌上称为<果>,随后你视为对其使用一张【桃】',
			gl_duguo2: '苹果',
			gl_duguo2_info: '',
			gl_chengren: '成仁',
			gl_chengren_info: '出牌阶段限一次,你可以令一名其他角色回复所有体力,那之后你失去X点体力并获得其区域内至多2X张牌(X为其以此法回复的体力值)',
			gl_shixin: '蚀心',
			gl_shixin_info: '出牌阶段开始时,你可以令1名角色失去1点体力并摸1张牌,这个出牌阶段结束后,其回复1点体力',
			gl_tudu: '荼毒',
			gl_tudu_info: '锁定技,你的回合内,若你的体力值不大于3,摸牌阶段你多摸1张牌且手牌上限-1;不大于2,你使用牌指定目标时,改为随机指定合法目标;不大于1,你的手牌均视为【杀】且没有使用次数限制',
			gl_leihuan: '类换',
			gl_leihuan_info: '出牌阶段每名角色限两次,你可以令1名角色选择以下一项:1,弃置2张牌并回复1点体力;2,摸2张牌并失去1点体力',
			gl_jiming: '继命',
			gl_jiming_info: '你的回合内,其他角色濒死时,你可以获得其两张牌,令其回复一点体力,直到这个回合结束为止,你不能使用牌指定其为目标',
			gl_huanmo: '幻沫',
			gl_huanmo_info: '锁定技,当你使用牌的牌结算后,若你的体力值大于1且手牌数大于0,当前回合玩家需弃置1张牌或失去1点体力,若其本回合因此弃置过相同花色的牌,此技能失效直至回合结束',
			gl_shengyou: '圣佑',
			gl_shengyou_info: '每回合每种牌名各限一次,当你需要使用或打出基本牌或普通锦囊牌时,若你没有手牌,则你可以摸X张牌并视为使用或打出1张基本牌或普通锦囊牌.(X为你当前的体力值)',
			gl_tongxin: '通心',
			gl_tongxin_info: '当你受到伤害后,你可以将任意张手牌交给1名其他角色,那之后其需执行以下一项:1,交给你等量的手牌(不能是你交给其的牌);2,不能使用或打出手牌直至当前回合结束',
			gl_tongxin2: '通心',
			gl_tongxin2_info: '',
			gl_wangnian: '妄念',
			gl_wangnian_info: '当有角色回合结束时,你可以令全场所有角色将手牌调整至X(X为你的体力值-其的手牌数)',
			gl_shidao: '侍道',
			gl_shidao_info: '当有角色受到伤害后,若伤害来源不为你,你可以使用1张牌(仅指定伤害来源为目标);当你使用牌指定唯一目标并对其造成伤害后,你可以令1名角回复1点体力',
			gl_zhenhu: '振呼',
			gl_zhenhu_info: '当你需要使用、打出【杀】或【决斗】时,你可以将所有手牌当【杀】或【决斗】使用、打出,若此为你本回合第1次发动此技能,则额外令所有其他角色依次选择是否将所有手牌交给你',
			gl_lingshuang: '凌霜',
			gl_lingshuang_info: '当你因弃置而失去牌的场合,你可以将1张手牌当【冰杀】对至多3名其他角色使用',
			gl_changnian: '常念',
			gl_changnian_info: '锁定技,当你的体力值发生变化时,你摸1张;每当全场角色累计弃置4张牌后,你回复1点体力',
			gl_tongkai: '敌忾',
			gl_tongkai_info: '阵法技,出牌阶段每名角色限一次,你可以令一名角色明置当前所有手牌并加入你的阵法队列.你们有角色受到除其以外角色造成的伤害后,伤害来源需弃置一张牌或失去一点体力',
			gl_bingjie: '冰界',
			gl_bingjie_info: '每轮限一次,其他角色出牌阶段开始时,你可以摸2张牌,随后使用至多X+1张牌.(X为当前游戏轮数)',
			gl_yixin: '易心',
			gl_yixin_info: '当你造成或受到伤害后,你可以令1名角色弃置5张手牌(不足则全弃)并摸3张牌,若你本回合对其发动过此技能,则其回复1点体力',
			gl_qiqiao: '奇巧',
			gl_qiqiao_info: '当你使用或打出牌时,你可以将1名角色的1张牌置于其的武将牌上称为<巧>直到这个回合结束为止',
			gl_baoxue: '暴雪',
			gl_baoxue_info: '锁定技,当有角色的摸牌阶段开始时,其少摸一张牌并获得一张【火攻】',
			gl_huoxin: '惑心',
			gl_huoxin_info: '出牌阶段限一次,你可以从牌堆、弃牌堆选择至多X张牌置于一名角色的武将牌上称为<惑>(当你受到伤害后,你需交给伤害来源1-2张<惑>).(X为场上角色数)',
			gl_sheai: '奢爱',
			gl_sheai_info: '锁定技,你受到的火焰伤害+1;当你受到火焰伤害后,你无视所有伤害且造成的伤害+1,直到你的一个回合结束为止',
			gl_wuxie: '舞鞋',
			gl_wuxie_info: '当你使用的牌的场合,你可以摸一张牌并执行以下一项:1,你使用一张牌且直至本回合结束为止此技能变为锁定技;2,弃置任意张牌并失去X点体力,随后若你与当前回合角色手牌数相同则强制终止当前回合(X为你本回合以此法获得的牌数-你因此弃置的牌数)',
			gl_qingshu: '清恕',
			gl_qingshu_info: '每回合限一次,当你需要使用【桃园结义】或有角色濒死时,你可以将任意张手牌当【桃园结义】使用并令此牌对至多X名角色无效.(X为你转换的牌数)',
			gl_zansong: '赞颂',
			gl_zansong_info: '当你令其他角色回复体力时,其可以交给你1张牌令此次回复量+1.(若你未受伤且手牌数为全场唯一最多,则将描述中的<可以>改为<需>)',
			gl_shixie: '嗜血',
			gl_shixie_info: '锁定技,当你造成的伤害时,若对方体力的体力值大于你,则此伤害视为体力吸取;当你于回合内回复1点体力后,你摸1张牌且获得<狂暴>状态',
			gl_xieshang: '血殇',
			gl_xieshang_info: '当你需要使用或打出基本牌时,若你不处于濒死状态,则你可以失去1点体力并视为使用或打出1张基本牌',
			gl_jieyuan: '结缘',
			gl_jieyuan_info: '出牌阶段结束时,你可以选择1名体力值或手牌数小于你的其他角色,令其/你将体力值回复或流失至与你/其相同,你/其将手牌数调整至与其/你相同',
			gl_caiduan: '裁断',
			gl_caiduan_info: '当你造成伤害后,你可以立即终止所有结算',
			gl_xinao: '嬉闹',
			gl_xinao_info: '当你使用或打出牌时,若此牌不为<嬉闹>牌,则你可以摸1张牌并选1张手牌称为<嬉闹>.锁定技,若你手牌中只有<嬉闹>牌,则你使用牌没有次数与距离限制;否则,你不能使用、打出或弃置<嬉闹>牌',
			gl_lezhu: '乐助',
			gl_lezhu_info: '出牌阶段限一次,你可以选择1名角色并摸1张牌,那之后你可以弃置至多4张牌.直至你的下个回合开始为止,其不能使用或打出A类牌;除其以外的角色使用A类牌指定其为目标时,你可以将1张手牌当【杀】对那名角色使用.(A为与你弃置花色相同的牌)',
			gl_yuejvan: '阅卷',
			gl_yuejvan_info: '当你于摸牌阶段外摸牌时,你可以将一名角色区域内的1张牌与牌堆顶的4张牌以任意顺序置于牌堆顶或置入弃牌堆',
			gl_anhui: '安惠',
			gl_anhui_info: '出牌阶段限一次,你可以令一名角色将手牌数摸至两倍并陷入<止恶>状态',
			gl_zhongshan: '终善',
			gl_zhongshan_info: '当有角色濒死时,你可以弃置至少2张牌,令其回复1点体力并摸X张牌.(X为你弃置的牌数-2)',
			gl_jiying: '冀影',
			gl_jiying_info: '当你使用牌时,你可以从牌堆将一张与之类型相同且牌名不同的牌置于牌堆顶',
			gl_huohua: '火花',
			gl_huohua_info: '出牌阶段,你可以回复1点体力并摸1张牌,若如此做,当你的体力减少时,你受到1点火焰伤害',
			gl_ximie: '夕灭',
			gl_ximie_info: '当你的体力变为全场最少时,你可以获得全场所有角色各1张牌,随后弃置等量的牌',
			gl_xunbao: '寻宝',
			gl_xunbao_info: '当你即将摸牌时,你可以随机观看牌堆中3X张牌,随后选择并获得其中至多X张牌并减少与之相等的摸牌数(X为你应摸的牌数)',
			gl_shefu: '设伏',
			gl_shefu_info: '回合结束阶段,你可以选择场上一名角色,直到你的下个回合开始为止,当除其以外的角色使用牌指定其为目标时,你可以执行以下一项:1,弃置使用者一张牌;2,摸一张牌并交给其一张牌',
			gl_ronghui: '融会',
			gl_ronghui_info: '你的出牌阶段开始时,你可以弃置一张牌,直到这个回合结束为止,你使用基本牌或普通锦囊牌的效果变更为将你本回合内最后使用过的3张基本牌或普通锦囊牌依次结算',
			gl_cangfeng: '藏锋',
			gl_cangfeng_info: '当你获得【杀】时,你可以将那张【杀】正面朝上称为<锋>与牌堆中的1张牌进行交换;当有角色获得你放置<锋>的场合,其需展示那张<锋>,随后你对其使用那张<锋>',
			gl_huli: '互利',
			gl_huli_info: '当你使用的【杀】指定目标或成为其他角色【杀】的目标时,你可以与对方分别摸1张牌',
			gl_luanzhan: '乱战',
			gl_luanzhan_info: '出牌阶段限一次,你可以与所有其他角色随机选择1张手牌进行一次拼点,赢的角色视为向没赢的角色使用一张【火杀】',
			gl_guitian: '归天',
			gl_guitian_info: '使命技,你的回合结束后,若你的手牌数小于你的体力值,则你可以获得其他角色装备区内一张牌或执行一个额外回合.</br>成功:你装备防具后,你摸3张牌并修改技能【迎奉】.</br>失败:当你不小于2次的额外回合开始时,你弃置3张牌并修改技能【净沐】',
			gl_jingmu: '净沐',
			gl_jingmu_info: '当你失去装备区内的1张牌时,若那张牌为红色,你可以令1名角色回复1点体力;若为黑色,你可以令1名角色摸2张牌',
			gl_yingfeng: '迎奉',
			gl_yingfeng_info: '其他角色出牌阶段限一次,其可以令你将装备区内任意1张牌交给其当任意锦囊牌使用',
			gl_anhun: '安魂',
			gl_anhun_info: '出牌阶段限一次,你可以令1名角色将所有手牌置于武将牌上称为<安魂>牌并获得X点护甲,你的下个回合开始时,其获得其的所有<安魂>牌并移除所有护甲.(X为其因此置武将牌上的牌数且至多为场上角色数)',
			gl_zhidao: '指导',
			gl_zhidao_info: '每回合每种牌名限一次,当你使用的牌结算完毕后,你可以将此牌交给1名角色并失去1点体力,若该角色不为你,则其使用此牌时,你回复1点体力',
			gl_xiongsuan: '凶算',
			gl_xiongsuan_info: '出牌阶段开始时,你可以令1名角色摸2张牌,直至回合结束为止,你每使用1张牌其便需弃置1张牌,若其无法弃置牌则你对其造成1点伤害',
			gl_qinxiu: '勤修',
			gl_qinxiu_info: '当有角色的回合结束后,若你的体力值为全场最少,你执行1个额外的出牌阶段;若你的手牌数为全场最少,你执行1个额外的摸牌阶段',
			gl_geyong: '歌咏',
			gl_geyong_info: '出牌阶段限一次,你可以以任意顺序令全场角色执行以下效果:1,获得一张【杀】;2,使用一张【杀】或失去一点体力;3,回复一点体力;4,弃置一张【杀】或两张非【杀】.此技能发动时,你可以失去1点体力或弃置2张手牌移去其中一项',
			gl_aili: '爱离',
			gl_aili_info: '当有角色即将受到致命伤害前,你可以令伤害来源选择以下一项:1,吸取你1点体力,;2,获得那名角色所有手牌;最后伤害来源自己承担此次伤害',
			gl_guibu: '鬼步',
			gl_guibu_info: '武装技——「鬼阳炎」,每回合限2次,你可以将1张手牌当【杀】或【闪】使用或打出',
			gl_jielue: '劫掠',
			gl_jielue_info: '当你造成伤害后,你可以获得对方1张牌,那之后,若你的手牌数大于其,其视为对你使用1张【杀】',
			gl_linwei: '临危',
			gl_linwei_info: '当你受到伤害后,你可以弃置场上1名角色1张牌,若弃置的牌花色为♥️️,你回复1点体力,否则摸1张牌',
			gl_hezhan: '合战',
			gl_hezhan_info: '其他角色受到伤害后,你可以摸1张牌并交给其1张牌',
			gl_taozhi: '讨治',
			gl_taozhi_info: '当有角色获得除其以外角色的牌时,你可以将1张手牌当【杀】对其使用',
			gl_yangming: '扬名',
			gl_yangming_info: '游戏开始时,你可宣言并获得3种牌名的牌,随后弃置3张牌;当你击杀其他角色后,你从牌堆、弃牌堆获得你以此法宣言的牌',
			gl_yuehong: '月虹',
			gl_yuehong_info: '当你获得牌的场合,你可以令1名角色摸X张牌并弃置等量的牌;若你本回合对其发动过此技能,则其再失去一点体力.(X为你当前的体力值)',
			gl_zhuansheng: '转生',
			gl_zhuansheng_info: '当你因弃置而失去牌后,你可以将那些牌以任意顺序置于牌堆顶称为<转生>;当有角色使用<转生>牌时,若此牌为基本牌或普通锦囊牌,则你可以为此牌增加或移除共计X名目标.(X为你已损失的体力值)',
			gl_huiyan: '慧妍',
			gl_huiyan_info: '当其他角色使用牌指定你或你使用牌指定其他角色为目标后,你可以令参与此牌的所有角色进行一次拼点.若你赢,则此牌无效之;否则你获得其中点数最大的牌',
			gl_qiaoyan: '巧言',
			gl_qiaoyan_info: '当你受到伤害后,你可以与伤害来源分别摸1张牌并进行1次拼点,若你赢,你可以视为使用1张基本牌或普通锦囊牌;若你没赢,你们分别获得对方的拼点牌',
			gl_moujv: '谋局',
			gl_moujv_info: '出牌阶段限一次,你可以观看牌堆顶3张牌,随后你可以将其中任意数量的牌交给1名角色并令其展示手牌,最后其对你指定的另1名角色尽可能使用其中的伤害类牌;当有角色因此法受到伤害时,其摸1张牌,若该角色不为你,你弃置1张牌',
			gl_jieshi: '借势',
			gl_jieshi_info: '当你的拼点牌亮出后,你可以选择1名体力值大于你的角色,用其区域内的1张牌替换你的拼点牌',
			gl_gaizao: '改造',
			gl_gaizao_info: '出牌阶段,你可以弃置3张牌并令1名角色执行以下1项:1、手牌上限+1并回复1点体力;2、出牌阶段出杀数+1并摸1张牌;3、攻击与防御距离+1并失去1点体力;4、摸牌阶段摸牌数+1并失去1点体力上限.那之后若其的体力值小于你,本回合内此技能失效',
			gl_shichou: '誓仇',
			gl_shichou_info: '限定技,出牌阶段,你可以选择1名其他角色并摸2张牌,直至其阵亡为止,结束阶段,你失去1点体力并摸2张牌,其阵亡后,你重置此技能',
			gl_qiuzhi: '求知',
			gl_qiuzhi_info: '锁定技,当你使用或打出1张基本牌时,你获得1张你未使用过的牌名的牌',
			gl_qvhu: '驱虎',
			gl_qvhu_info: '锁定技,游戏开始时,你可以选择牌堆中的1张牌称为<驱虎>,那之后你立即使用那张牌并在此牌结算完毕后弃置X张牌;当有角色的回合结束后,你从游戏内获得你的<驱虎>牌.(X为此牌指定的目标数)',
			gl_zhici: '执词',
			gl_zhici_info: '当有角色受到伤害后,你可以与伤害来源进行一次拼点,若你赢,则你可以使用1张牌;若你没赢,对方获得你们的拼点牌',
			gl_hunmu: '混目',
			gl_hunmu_info: '其他角色出牌阶段开始时,你可以摸2张牌并与其交换手牌,若如此做,这个出牌阶段结束时,你与其交换手牌并弃置2张牌',
			gl_qvanjiu: '劝酒',
			gl_qvanjiu_info: '每回合限1次,你可以将1张手牌当【酒】使用;当你以此法使用的【酒】指定目标后,其摸两张牌并将武将牌翻面;其他角色准备阶段开始时,你可以对其使用1张【酒】',
			gl_leyan: '乐宴',
			gl_leyan_info: '当其他角色使用基本牌或普通锦囊牌时,若此牌未指定你为目标,则你可以成为此牌的额外目标',
			gl_moling: '魔灵',
			gl_moling_info: '武装技——「神灯」,锁定技,当你使用牌指定目标或有牌指定你为目标时,若你没有手牌,则那张牌无效且你摸1张牌',
			gl_biantong: '变通',
			gl_biantong_info: '当你造成或受到伤害前,你可以改为弃置受到伤害的角色2张牌;当你回复或令其他角色回复体力前,你可以改为令回复体力的角色摸2张牌',
			gl_guishou: '鬼首',
			gl_guishou_info: '当你受到伤害后,你可以令除你以外所有角色执行以下一项:1,交给你1张牌并摸1张牌;2,将武将牌横置',
			gl_yehuo: '业火',
			gl_yehuo_info: '出牌阶段限一次,你可以对1名角色造成1点火焰伤害,你可以额外弃置4张牌,令此次不计入使用次数且可以额外指定1名角色为目标',
			gl_zuijiu: '醉酒',
			gl_zuijiu_info: '每轮限一次,你可以将任意张牌当【酒】使用;你以此法使用的【酒】效果+X,若X不为0则你将武将牌翻面.(X为你用以转换的牌数-1)',
			gl_juedao: '绝道',
			gl_juedao_info: '出牌阶段限一次,你可以将1名角色的一项技能转换为与之对应的技能牌并获得之,那之后其增加一点体力上限并回复一点体力',
			gl_hongtu: '宏图',
			gl_hongtu_info: '觉醒技,你的回合结束时,若场上所有角色均拥有技能〖混沌〗,则你失去技能〖隐雾〗并弃置所有牌,随后回复1点体力并获得技能〖绝道〗',
			gl_yinwu: '隐雾',
			gl_yinwu_info: '你的回合结束后,你可以令一名角色进入<潜行>、<免疫>状态直到你的下个回合开始为止,若其上回合成为过此技能的目标,则你失去1点体力上限',
			gl_qinshi: '侵蚀',
			gl_qinshi_info: '出牌阶段限一次,你可以选择1名角色,若其拥有技能〖混沌〗,则其失去1点体力上限并摸4张牌;否则其获得技能〖混沌〗且此次不计入使用次数',
			gl_paoxiao: '咆哮',
			gl_paoxiao_info: '侍从技,当你受到伤害后,你可以弃置任意张牌,随后将手牌补至9张,若如此做,你的下个出牌阶段开始时,你需将手牌调整至X.(X为你弃置的牌数且最大为你的体力上限+你已损失的体力值)',
			gl_tanfeng: '探风',
			gl_tanfeng_info: '准备阶段开始时,你可以与一名角色进行一次拼点,若你赢,你选择并获得1种武器牌;若你没赢,你选择并获得1种防具牌;的效果直至下个回合开始为止',
			gl_zhaolei: '召雷',
			gl_zhaolei_info: '锁定技,判定阶段开始时,若你的判定区内没有牌,则你需进行一次【闪电】判定;当你的判定牌亮出后,你可以选择一张牌替换之',
			gl_chiyuan: '驰援',
			gl_chiyuan_info: '出牌阶段限一次,你可以与你的本体交换手牌并令手牌较多的一方回复1点体力',
			gl_benxi: '奔袭',
			gl_benxi_info: '你的回合开始时,你可以弃置所有手牌并对一名角色造成一点伤害',
			gl_yangwei: '扬威',
			gl_yangwei_info: '当你击杀其他角色后,你可以令除你之外所有角色陷入混乱状态直到这个回合结束为止',
			gl_haichao: '海潮',
			gl_haichao_info: '领域技——「东海龙宫」,出牌阶段,你可以视为对全场所有角色使用1张【水淹七军】;当你以此法造成伤害后,你回复1点体力.(超出部分以摸牌的形式补齐)',
			gl_xunhuan: '寻欢',
			gl_xunhuan_info: '其他角色的出牌开始时/出牌阶段限一次,你可以与其/1名其他角色将武将牌翻面,随后分别选择摸2张牌或回复1点体力,此阶段结束后,若其或你没有手牌,则你们将武将牌翻面',
			gl_zengjin: '赠锦',
			gl_zengjin_info: '当有角色将武将牌翻面后,你可以弃置任意张牌,随后将弃牌堆中等量的牌交给其.其不能弃置这些牌;使用或打出这些牌时,需失去1点体力或弃置1张牌',
			gl_pinle: '贫乐',
			gl_pinle_info: '锁定技,当你只有1张手牌时,若此牌为红色牌,则此牌视为【桃】;若此牌为黑色牌,则此牌视为【无中生有】',
			gl_shanjie: '善结',
			gl_shanjie_info: '出牌阶段限一次,你可以令1名角色将手牌补至体力上限,随后对任意1名角色造成1点伤害.若你两次选择的目标不同,则你需将武将牌翻面',
			gl_liunian: '流年',
			gl_liunian_info: '条件技,每回合限一次,当你造成或受到伤害后,只有你弃置对方X张牌才能生效;本回合结束后,其执行一个额外的摸牌阶段与出牌阶段.(X为你当前的体力值)',
			gl_jinghua: '净化',
			gl_jinghua_info: '出牌阶段,你可以消耗1点魔力并令1名角色解除自身所有控制效果;当你使用牌时,你可以回复1点魔力',
			gl_shenqvan: '神泉',
			gl_shenqvan_info: '出牌阶段,你可以获得<日>、<明>、<月>其中一种神泉标记;若你已有神泉标记,则需弃置3张牌,才能把此技能的效果发动',
			gl_yindao: '引导',
			gl_yindao_info: '出牌阶段每种花色限一次,你可以弃置1张牌,根据以下规则令1名角色视为对你指定的角色使用牌:♠️️【过河拆桥】;♥️️【桃园结义】;♦️️【无中生有】;♣️️【铁索连环】',
			gl_ri: '日泉',
			gl_ri_info: '',
			gl_ming: '明泉',
			gl_ming_info: '',
			gl_yue: '月泉',
			gl_yue_info: '',
			gl_yueri: '日月调和',
			gl_yueri_info: '你回复1点体力,场上拥有<日泉>的角色摸2张牌',
			gl_riming: '日盛月衰',
			gl_riming_info: '你受到1点火焰伤害,场上拥有<明泉>的角色需交给你1张牌',
			gl_mingyue: '日衰月盛',
			gl_mingyue_info: '你弃置2张牌,场上拥有<月泉>的角色失去1点体力',
			gl_rongzhuang: '戎装',
			gl_rongzhuang_info: '武装技——「荣光圣枪|荣光战甲|圣夜」,出牌阶段限一次,你可以弃置任意张装备牌并令等量的角色分别回复1点体力',
			gl_yudi: '御敌',
			gl_yudi_info: '当与你距离为1的角色受到伤害后,你可以弃置1张牌并令其摸2张牌',
			gl_zhenjun: '振军',
			gl_zhenjun_info: '其他角色的回合结束后,若你于本回合内受到过伤害或失去2张及以上的牌,则你可以摸1张牌并执行1个额外的出牌阶段',
			gl_sushi: '溯时',
			gl_sushi_info: '当有角色的回合开始时,你可以选择1名角色,这个回合结束后,其将手牌与体力调整至这个回合开始时的值.若当前游戏角色数小于5,则改为选择至多2名其他角色',
			gl_jipo: '急迫',
			gl_jipo_info: '出牌阶段,你可以将1张手牌当【兵粮寸断】/【乐不思蜀】对任意1名角色使用,那之后其回复1点体力/摸2张牌',
			gl_jiance: '间策',
			gl_jiance_info: '当你受到伤害后,你可以令1名角色获得你区域内的1张牌,那之后伤害来源对其造成1点伤害',
			gl_cansha: '残杀',
			gl_cansha_info: '锁定技,你造成的伤害+1且结算后对面回复1点体力;当有角色濒死时,你将手牌补至体力上限',
			gl_shibing: '释兵',
			gl_shibing_info: '其他角色的回合开始时,你可将所有手牌交给其,这个回合结束后,若其没有击杀角色,你获得其所有手牌',
			gl_junlue: '军略',
			gl_junlue_info: '出牌阶段限一次,你可以令1名角色摸2张牌,若其手牌数大于你,你对其造成1点伤害,若其手牌数小于你,你弃置其一个区域内至多4张牌',
			gl_touhuan: '偷换',
			gl_touhuan_info: '当有基本牌或普通锦囊牌指定你为目标时,你可以用1张手牌替换那张牌进行结算',
			gl_haoshi: '好施',
			gl_haoshi_info: '摸牌阶段结束时,你可以摸X张牌并将等量的牌置于牌堆顶,那之后你视为使用1张【五谷丰登】.(X为场上的角色数)',
			gl_huanyuan: '还愿',
			gl_huanyuan_info: '出牌阶段限一次,你可以移动场上1张牌,那之后,被移出牌的角色回复1点体力',
			gl_fuyin: '福音',
			gl_fuyin_info: '你的回合开始前,你可以解除自身所有控制效果,若你因此解除了1种以上的控制效果,你摸2张牌',
			gl_xingshen: '醒神',
			gl_xingshen_info: '当有角色将武将牌翻至正面后,你可以弃置其区域内最多2张牌,直至其的下个回合结束为止,其使用与弃置花色相同的牌没有次数与距离限制',
			gl_suiqian: '随迁',
			gl_suiqian_info: '当有角色使用伤害类型的牌指定你为目标时,你可以令此牌不可响应并获得之',
			gl_anshui: '安睡',
			gl_anshui_info: '结束阶段,你可以令至多X名角色分别回复Y点体力并翻面.(X为你本回合使用的牌数/2向下取整,Y为其的体力上限且超出部分以摸牌的形式补齐)',
			gl_manyou: '漫游',
			gl_manyou_info: '锁定技,当你使用牌指定1名角色为目标/其他角色使用牌指定你为目标时,若其的手牌数大于你,你摸1张牌;若其的手牌数小于你,你弃置2张牌并对其造成1点伤害',
			gl_mizong: '迷踪',
			gl_mizong_info: '当有角色的出牌阶段开始时,你可以分别交给任意名其他角色1张手牌称为<迷踪>牌,这个出牌阶段结束后,你获得其他角色手中的<迷踪>牌,若你获得的牌数少于你给出的牌数,则你可以移动场上1张牌(若移入的角色为你,你翻面)',
			gl_songbie: '送别',
			gl_songbie_info: '出牌阶段限一次,你可以令1名角色展示所有手牌,那之后,其尽可能使用其中能够使用的牌并将不能使用的牌以任意顺序置于牌堆顶',
			gl_youren: '游刃',
			gl_youren_info: '当你需要对1名角色使用【杀】时,你可以将其区域内的1张牌当任意延迟锦囊牌置入你的判定区内,视为对其使用1张无视次数的【杀】',
			gl_xiangfu: '相辅',
			gl_xiangfu_info: '准备阶段,你可以选择1名其他角色,直至你的下个回合开始为止,你造成伤害或其受到伤害后,你需摸1张牌并交给其1张牌.其阵亡后,你需弃置区域内所有牌并且可以修改〖相辅〗的目标',
			gl_lvlu: '旅路',
			gl_lvlu_info: '其他角色的回合结束后,若你于本回合内失去过牌,则你可以摸2张牌,随后使用1张牌.若你未因此造成过伤害,则你需将2张牌置于牌堆顶',
			gl_kuangyi: '狂癔',
			gl_kuangyi_info: '出牌阶段开始时,你可以选择1名没有需跳过阶段的角色并宣言1个数字,随后其摸X张牌并跳过其接下来X个判定阶段与摸牌阶段.(X为你宣言的数字且最大为你的体力值)',
			gl_guozao: '聒噪',
			gl_guozao_info: '锁定技,当你使用牌仅指定一名其他角色为目标时,其需弃置X张牌并摸X张牌;若其因此弃置了【杀】,则改为视为对你使用1张火【杀】.(X为你本回合使用过的牌数)',
			gl_luanwu: '乱舞',
			gl_luanwu_info: '出牌阶段限一次,你可以弃置四张手牌,根据你弃置牌包含的花色与顺序,你视为依次使用1张:♠️️【南蛮入侵】、♥️️【桃园结义】、♦️️【五谷丰登】、♣️️【万箭齐发】',
			gl_chahui: '茶会',
			gl_chahui_info: '出牌阶段每名角色限一次,你可以令一名角色摸两张牌,随后其需弃置装备区内一张牌,或将一张手牌当【乐不思蜀】对自己使用',
			gl_xifa: '戏法',
			gl_xifa_info: '每回合限一次,当你使用【杀】指定目标/成为【杀】的目标后,你可以与对方交换一个区域内的所有牌,随后对应区域内牌数较少的角色回复一点体力',
			gl_dianfu: '颠覆',
			gl_dianfu_info: '出牌阶段开始时,你可以宣言一个牌名,直到你的下个回合开始为止,所有角色牌名与你宣言的牌相同且未转换的牌视为没有次数限制的【杀】',
			gl_huanchu: '幻出',
			gl_huanchu_info: '当有角色的牌因弃置而进入弃牌堆时,你可以将那些牌以任意顺序置于牌堆顶或牌堆底,这个回合结束后仅一次,你可以翻开牌堆底1张牌并执行以下一项:1,使用此牌(没有距离限制);2,获得此牌并失去1点体力',
			gl_ruixi: '锐袭',
			gl_ruixi_info: '当你使用【杀】指定目标后,你可以弃置对方至多2张牌,此【杀】结算完毕后,若此【杀】未造成伤害则其摸4张牌',
			gl_qinting: '倾听',
			gl_qinting_info: '每名角色出牌阶段限一次,其可以交给你1张牌并回复1点体力,若其交给你的为黑色牌(若该角色为你自己则无限制),则你需弃置1张牌',
			gl_bianhuan: '变幻',
			gl_bianhuan_info: '锁定技,当你使用牌时,直至你使用的下1张牌结算完毕为止,你的所有手牌视为你使用的牌且此技能失效',
			gl_zizai: '自在',
			gl_zizai_info: '锁定技,你每回合使用的前X张牌无视次数与距离限制;准备阶段开始时,你将手牌补至X张.(X为你当前的体力值)',
			gl_xiadao: '侠盗',
			gl_xiadao_info: '出牌阶段限一次,你可以将1张牌当【顺手牵羊】使用;当你获得其他角色的牌后,你可以将1张牌交给1名其他角色,若其对你造成过伤害,则你再回复1点体力',
			gl_duizhi: '对峙',
			gl_duizhi_info: '每名角色出牌阶段每名目标限一次,你/其可以视为对1名角色/你使用1张【决斗】;当有角色因此受到伤害后,其需执行以下一项:1,交给伤害来源1张牌;2,令伤害来源将手牌补至体力上限',
			gl_shitan: '试探',
			gl_shitan_info: '出牌阶段限一次,你可以令1名角色的所有手牌均视为【杀】直至此回合结束为止.此回合结束阶段,若其没有于此回合内使用或打出【杀】,则其回复1点体力',
			gl_shipo: '识破',
			gl_shipo_info: '当其他角色获得你的牌后,若其手牌数大于你,则你可以观看并弃置其至多3张牌.随后若其的手牌数依旧大于你,则你再依次对其使用弃置的牌',
			gl_yongjue: '勇决',
			gl_yongjue_info: '出牌阶段限一次,你可以弃置任意张牌并将体力值扣至1点,随后视为对1名角色使用1张伤害值为X的火【杀】(不计入使用次数且无视距离限制).若此【杀】成功命中,则你摸Y张牌.(X为你因此失去的体力值,Y为你因此弃置的牌数)',
			gl_lingming: '灵明',
			gl_lingming_info: '当有角色使用的锦囊牌时,你可以将1张牌置于牌堆顶并回复1点体力;那之后若你的手牌数为全场最少,则你获得那张锦囊牌',
			gl_disha: '地煞',
			gl_disha_info: '出牌阶段开始时,你可以令1名角色展示所有手牌,随后其需将其中3种类型不同的牌当【万箭齐发】使用(不足则跳过)',
			gl_shiluo: '失落',
			gl_shiluo_info: '当你造成或受到1点伤害后,你可以重铸1张牌,此回合结束后,若你没有因此获得的牌,你可以令1名角色回复1点体力(未受伤则改为摸2张牌);锁定技,你以此法获得的牌没有使用次数限制',
			gl_zuilun: '罪论',
			gl_zuilun_info: '出牌阶段,你可以令1名角色摸4张牌并对其造成2点伤害,最后你失去1点体力上限.若此技能结算过程中,有角色脱离了濒死状态,则其摸2张牌且此技能失效直至回合结束',
			gl_xianji: '先机',
			gl_xianji_info: '当有角色的回合结束后,你可以执行1个主要阶段并跳过你下1个与之对应的主要阶段',
			gl_dongcha: '洞察',
			gl_dongcha_info: '出牌阶段开始时,你可以观看1名角色的手牌与牌堆顶5张牌,将这些牌以原本数量的任意顺序交给其或置于牌堆顶',
			gl_zhuichang: '追唱',
			gl_zhuichang_info: '出牌阶段,你可以令你摸牌阶段摸牌数-1,令你接下来使用的3张基本牌或普通锦囊牌额外结算1次',
			gl_yinling: '引领',
			gl_yinling_info: '每轮限一次,其他角色的回合开始时,你可以执行一个额外的出牌阶段,此阶段内,你可以使用或打出其的手牌并令其于此阶段结束后摸1张牌',
			gl_chenmo: '沉默',
			gl_chenmo_info: '出牌阶段开始时,你可以宣言并获得至多3种类型的牌,直至你的下个回合开始为止,当你使用与宣言类型相同的牌时,你需弃置1张手牌',
			gl_ehan: '恶寒',
			gl_ehan_info: '限定技,结束阶段,你可以选择1名角色,令其攻击范围内的所有其他角色依次将手牌弃置至与你相同,当有角色无法弃置的场合,你对那名角色攻击距离以内的所有角色造成1点冰冻伤害',
			gl_zhilun: '知论',
			gl_zhilun_info: '出牌阶段限一次,你可以从牌堆顶/牌堆底摸X.那之后将1张手牌置入其他角色的对应区域内并将等量的牌置于牌堆底/牌堆顶.(X为你的手牌数)',
			gl_qiangdou: '枪斗',
			gl_qiangdou_info: '你可以将2张牌当无视距离限制的【杀】使用或打出;当你以此法使用的【杀】指定1名角色为目标后,若其于你的攻击范围外,则此杀不计入使用次数,若其与你的距离为1,则你可以弃置其1张牌或令此杀伤害+1',
			gl_lueying: '掠影',
			gl_lueying_info: '准备阶段,你可以令1名其他角色将手牌以任意顺序置于牌堆顶或置入弃牌堆,直至此回合结束为止,你每使用1张牌其便摸1张牌',
			gl_qiutong: '求同',
			gl_qiutong_info: '结束阶段,你可以选择1名其他角色,你与其对应区域内(手牌区、装备区、判定区)牌数较少的一方,从牌堆中将1张符合条件的牌置入对应的区域中',
			gl_lijian: '砺剑',
			gl_lijian_info: '当你受到伤害后,你可以弃置任意张牌,随后观看牌堆顶等量的牌并任意分配给场上的角色,那之后若你没有因此获得牌,则你额外摸1张牌',
			gl_yizhi: '异志',
			gl_yizhi_info: '出牌阶段,你可以令1名角色进行1次判定,若判定结果为红色,则其回复1点体力,否则其受到1点雷电伤害且此技能失效直至此回合结束为止',
			gl_zhengtu: '征途',
			gl_zhengtu_info: '当你使用牌指定其他角色/其他角色使用牌指定你为目标后,你可以将那张牌置于牌堆顶,若此为你本回合首次发动此技能,则你可以在弃置目标/此牌的使用者区域内1张牌',
			gl_jingu: '紧箍',
			gl_jingu_info: '出牌阶段开始时,你可以宣言一个牌名,直至你的下个回合开始为止,所有角色使用你宣言的牌名的牌时,那张牌无效且其摸X张牌.(X为2-此效果于此回合内生效的次数)',
			gl_gongji: '共济',
			gl_gongji_info: '出牌阶段,你可以选择任意名未横置的角色,其将武将牌横置并摸1张牌;锁定技,场上所有横置角色之间的距离为1且手牌上限+3',
			gl_hongde: '弘德',
			gl_hongde_info: '当你累计获得3张牌后,你可以将牌堆顶1张牌置于你的武将牌上称为<德>;你可以将1张<德>当【桃园结义】、【铁索连环】、【五谷丰登】或【无懈可击】使用',
			gl_tiangang: '天罡',
			gl_tiangang_info: '摸牌阶段结束时,你可以将任意张牌交给1名其他角色.直至此回合结束为止仅一次,当其失去牌后,你对其造成与失去牌数量相等的伤害',
			gl_daiyu: '怠欲',
			gl_daiyu_info: '出牌阶段限一次,你可以获得至多X名其他角色区域内各1张牌,随后执行以下一项:1,将2X张牌当【决斗】使用;2,结束当前出牌阶段.(X为你已损失的体力值-你本回合使用的牌数)',
			gl_chanyan: '谗言',
			gl_chanyan_info: '当你因弃置而失去牌后,你可以用1张弃置的牌与1名角色进行拼点.若你赢,则你视为使用1张【桃】;若你没赢,则其视为对你使用1张【杀】',
			gl_jinwei: '近卫',
			gl_jinwei_info: '当与你距离为1的角色成为【杀】的目标时,你可以重铸至多2张牌,若该角色不为你,则你代替该角色成为此【杀】的目标',
			gl_liusha: '流沙',
			gl_liusha_info: '准备阶段,你可以令1名角色的防御距离-2且攻击距离-1,当其使用或打出基本牌时,其摸1张牌,直至你的下个回合开始为止',
			gl_tiaohe: '调和',
			gl_tiaohe_info: '转换技,当你受到伤害后,你可以令1名角色展示手牌,阴:其获得X张颜色数较少的牌.阳:其弃置X张颜色数较多的牌.(X为两种颜色牌数量的差值)',
			gl_pangui: '盼归',
			gl_pangui_info: '当你因弃置而失去牌后,你可以回复等量的装备区;锁定技,你的攻击距离+X.(X为你本回合使用过的牌数/2向下取整)',
			gl_xvanfeng: '旋风',
			gl_xvanfeng_info: '条件技,出牌阶段限一次,你可以废除一个装备栏,只有你视为对攻击范围内的所有角色使用一张风【杀】才能生效:所有目标角色依次弃置两张牌',
			gl_duobu: '踱步',
			gl_duobu_info: '当你使用伤害牌指定目标时,你可以为此牌移除至少X名目标角色;随后你从弃牌堆中获得你使用的上一张牌.(X为你已废除的装备区数量)',
			gl_haoqi: '豪气',
			gl_haoqi_info: '每当你使用(指定目标后)或被使用(成为目标后)1张【决斗】或的【杀】时,你可以摸1张牌.若使用牌的颜色为黑色,则对方也摸1张牌',
			gl_caishi: '才识',
			gl_caishi_info: '出牌阶段,你可以弃置2张牌并选择1名手牌数大于体力值的其他角色,你展示其X张手牌且你可以任意使用这些牌,最后若其手牌数依旧大于体力值,其回复1点体力.(X为其体力值与手牌数的差值)',
			gl_futu: '复途',
			gl_futu_info: '当有角色的回合结束后,你可以令其获得至多X张弃牌堆其本回合失去的牌,随后其需弃置等量不以此法获得的牌.(X为其的牌数)',
			gl_kuizhi: '匮智',
			gl_kuizhi_info: '锁定技,当你使用锦囊牌指定目标后,你需弃置1张牌或令此锦囊对其无效之',
			gl_zhuwei: '助威',
			gl_zhuwei_info: '出牌阶段结束后,若你于此阶段内失去过4种花色不同的牌,则你可以令1名角色执行以下一项:1,失去1点体力;2,回复1点体力;3,执行一个额外的出牌阶段',
			gl_qice: '奇策',
			gl_qice_info: '出牌阶段限一次,你可以令1名角色失去X点体力并摸X张牌,直至你的下个出牌阶段开始时或其受到伤害后,其回复X点体力且在此之前其的手牌上限为体力上限.(X为其当前的体力值-1)',
			gl_danlie: '胆裂',
			gl_danlie_info: '锁定技,当有角色受到伤害后,你需弃置手牌所有的非【闪】并获得等量的【闪】.若受到伤害的角色为你,则获得的数量+2',
			gl_fenwei: '奋威',
			gl_fenwei_info: '出牌阶段,你可以弃置任意张牌并令1名角色执行以下一项:1,弃置等量颜色各不相同的牌;2,受到来自你的1点伤害并摸等量的牌',
			gl_zhenwei: '镇卫',
			gl_zhenwei_info: '当有角色的回合结束后,若你于此回合内没有发动过〖胆裂〗,则你可以令1名其他角色发动〖胆裂〗,若其因此弃置伤害牌,则你再回复1点体力',
			gl_hunxin: '魂心',
			gl_hunxin_info: '锁定技,当你因弃置而失去牌后,你需宣言一个单体基本牌或锦囊牌的牌名,直至此回合结束为止,你当前的所有手牌均视为你所宣言的牌名',
			gl_gangrou: '刚柔',
			gl_gangrou_info: '出牌阶段限一次,你可以1名角色将手牌补至体力上限并弃置其至多3张牌,那之后若其的手牌数小于其的体力值,其回复1点体力',
			gl_juelei: '绝垒',
			gl_juelei_info: '当有角色受到伤害后,你可以令其摸4张牌,其的下个出牌阶段开始时,其需弃置4张牌',
			gl_yuanqi: '元气',
			gl_yuanqi_info: '锁定技,当你的失去体力或受到伤害后,你回复1点体力并摸1张牌,那之后若X不小于你的体力上限,则你需弃置X张牌并失去X点体力,最后重置此技能的使用次数.(X为你使用此技能的次数)',
			gl_sajiao: '撒娇',
			gl_sajiao_info: '出牌阶段限一次,你可以与至多3名角色进行1次拼点,若你赢,则你可以视为使用任意1张食物牌;若你没赢,则你获得1张牌【杀】并失去1点体力',
			gl_sanzhi: '三支',
			gl_sanzhi_info: '回合开始/结束时,你可以执行1个额外的出牌阶段,此回合结束后,若你于本回合内任意2个出牌阶段内使用的牌数不等,则你需将武将牌翻面',
			gl_jiaojin: '娇矜',
			gl_jiaojin_info: '锁定技,当有基本牌或普通锦囊牌指定你为目标时,若你不为此牌的唯一目标,则此牌对你无效之,否则此牌的结算次数+1',
			gl_qinnei: '勤内',
			gl_qinnei_info: '出牌阶段,你可以令1名手牌上限大于0的角色摸1张牌,直至其的下个回合结束为止,其的手牌上限-1,其于弃牌阶段结束后,视为依次对你使用X张【杀】.(X为其于弃牌阶段内弃置的牌数/2向下取整)',
			gl_miaobian: '喵变',
			gl_miaobian_info: '当你受到伤害后,你可以令至多4名角色分别摸/弃2张牌并加入/移出你的阵法队列;当你们有角色受到伤害时,此伤害改为由你们中体力值最大的角色承受;你的手牌上限+X(X为你们以外的角色数/2)',
			gl_miantian: '腼腆',
			gl_miantian_info: '每回合限一次,当你使用的牌结算完毕后,你可以获得那些牌并将武将牌翻面;锁定技,若你的武将牌背面朝上,你/其他角色不能使用牌指定其他角色/你为目标',
			gl_fuzhou: '附咒',
			gl_fuzhou_info: '转换技,出牌阶段开始时,你可以令1名角色直至你的下个回合开始为止,阴:造成的所有伤害均改为回复1点体力.阳:受到的所有伤害均改为回复1点体力.若你选择的目标与上次不同,则你失去1点体力',
			gl_qiufa: '求法',
			gl_qiufa_info: '每回合限一次,当你需要使用锦囊牌时,你可以选择1名角色,其可以令你将其的所有手牌当你需要的锦囊牌使用.若你以此法使用的锦囊牌令其陷入濒死状态,则你可以选择弃牌堆中至多2张牌交给其',
			gl_toulan: '偷懒',
			gl_toulan_info: '锁定技,条件技,出牌阶段结束时,只有你回复1点体力并将手牌摸至体力上限才能生效:你将武将牌翻面;若你的武将牌背面朝上,则你不能使用或打出手牌',
			gl_zhangwei: '长威',
			gl_zhangwei_info: '条件技,出牌阶段限一次,你可以展示当前所有手牌,只有你摸X张牌并将所有展示的牌置入弃牌堆才能生效:你失去Y点体力并视为使用1张【万箭齐发】.(X当前体力值小于你的角色数,Y为当前场上角色数-你弃置的牌数)',
			gl_zhuilie: '追猎',
			gl_zhuilie_info: '每回合限一次,当你获得牌后,你可以将1张手牌交给1名其他角色,直至此回合结束为止,当你使用牌指定除其以外的角色为目标时,将此牌的目标转移给其',
			gl_zishou: '自守',
			gl_zishou_info: '结束阶段,若你未于本回合内使用牌指定过其他角色为目标,则你可以从弃牌堆中获得1张牌,若你未于本回合内使用过牌则你可以再额外选择1张牌',
			gl_guicai: '鬼才',
			gl_guicai_info: '出牌阶段,你可以弃置1张基本牌或普通锦囊牌,随后执行并删除以下一项:1,当你受到伤害后,你可以将1张牌当A使用;2,当你使用【杀】指定目标后,你可以将所有手牌当A使用;3当你失去装备区内的牌后,你可以视为使用1张A.若你以上效果均已删除,则将此技能的效果改为『你获得1张A且此技能失效直至此回合结束』.(A为你弃置牌的牌名)',
			gl_nishi: '逆势',
			gl_nishi_info: '限定技,准备阶段,你可以弃置所有手牌并减去1点体力上限,随后选择以下一项技能获得:〖驱虎〗、〖武圣〗、〖慎行〗、〖蛊惑〗',
			gl_fengong: '分工',
			gl_fengong_info: '出牌阶段限一次,你可以将以下效果:1,将所有手牌交给1名其他角色;2,对当前回合角色造成1点伤害;3,重铸当前回合角色至多2张牌;4,令当前回合角色回复1点体力;5,本回合你不能使用或打出手牌;6,令当前回合角色获得弃牌堆最上方的1张牌;7,立即发动〖分工〗且本回合不能再发动〖分工〗.任意分配到以下时点:使用【杀】指定目标后、不因【杀】造成伤害后、不因【杀】受到伤害后、成为【杀】的目标后、获得牌后、因弃置而失去牌后.随后立即执行未分配的1项',
			gl_jiena: '洁纳',
			gl_jiena_info: '其他角色的准备阶段开始时,若你没有以此法获得的牌,则你可以获得其区域内的1张牌,当你失去以此法获得的牌时你需弃置2张牌或受到源自其的1点伤害',
			gl_songsang: '送丧',
			gl_songsang_info: '当你的体力减少或失去手牌后,若你的体力值为1或手牌数为0,则你可以选择1名角色,直至此回合结束为止,当其陷入濒死状态时,其回复1点体力',
			gl_guiji_poke: '鬼计',
			gl_guiji_poke_info: '出牌阶段,你可以与1名其他角色拼点.随后赢的角色回复所有体力并翻面,没赢的角色弃置2张牌并横置',
			gl_mangzhuang: '莽撞',
			gl_mangzhuang_info: '锁定技,当你造成伤害时,你需与对方交换体力值;随后体力值较少的一方摸X张牌.(X为你们体力的差值)',
			gl_luohua: '落花',
			gl_luohua_info: '当你因弃置而失去牌后,你可以将这些牌任意分配给其他角色,随后你对因此获得2张及以上牌的角色造成1点伤害',
			gl_duanbing: '短兵',
			gl_duanbing_info: '武装技——「猎枪」,锁定技,你的【杀】或黑色普通锦囊牌改为指定与你距离为1的所有角色为目标',
			gl_muyang: '牧羊',
			gl_muyang_info: '出牌阶段限一次,你可以令1名角色选择牌堆中1张牌获得之,那之后其失去所有体力.若其因此阵亡,则其可以将所有牌交给1名其他角色;否则直至你的下个回合开始为止,当其的体力减少时,其立即回复1点体力',
			gl_zhulie: '逐猎',
			gl_zhulie_info: '相同结算内限一次,当有角色使用牌的结算后,若结算区内没有与此牌相同牌名的实体牌,则你可以将1张牌当此牌使用并摸1张牌',
			gl_yanxiao: '言笑',
			gl_yanxiao_info: '当有角色成为【杀】的目标时,你可以令其摸至多X张牌.若此牌未对其造成伤害,则其需弃置双倍的牌.(X为你当前的体力值)',
			gl_renxin: '仁心',
			gl_renxin_info: '出牌阶段限一次,你可以弃置2张类型不同的牌并根据弃置牌的类型执行以下效果:基本牌,你可以令1名角色回复1点体力;锦囊牌,你可以令1名角色摸2张牌;装备牌,此次不计入使用次数',
			gl_shiyue: '誓约',
			gl_shiyue_info: '觉醒技,当有角色濒死时,若其没有对你造成过伤害,则你废除所有装备区并令其回复等量的体力值,最后获得技能〖灵剑〗',
			gl_lingjian: '灵剑',
			gl_lingjian_info: '出牌阶段,你可以失去1点体力或体力上限,随后视为使用1张没有次数与距离限制的火【杀】.当你以此法使用的牌造成伤害时,你需获得对方场上1张牌并取消此伤害',
			gl_suixing: '随兴',
			gl_suixing_info: '当有角色的出牌阶段开始时,你可以令其弃置与你体力值相等的牌;此回合结束后,其摸与你体力值相等的牌',
			gl_siyan: '死焰',
			gl_siyan_info: '条件技,当你的手牌数变为全场唯一最多或最少后,只有你对1名角色造成1点火焰伤害才能生效:你需失去1点体力或减去1点手牌上限',
			gl_liedao: '猎盗',
			gl_liedao_info: '每回合限一次,当你使用伤害牌指定目标后,你可以令对方选择以下一项:1,交给你X张牌;2,从牌堆、弃牌堆将延迟锦囊牌尽可能的置入判定区内.(X为你与其体力值的差值且至少为1)',
			gl_zenian: '择念',
			gl_zenian_info: '出牌阶段限一次,你可以进行1次判定.若判定结果为黑色,则你需将所有非伤害手牌当【出其不意】对任意角色使用;若判定结果为红色,则你需将所有伤害手牌当【推心置腹】对任意角色使用',
			gl_aoxue: '傲雪',
			gl_aoxue_info: '当你的判定牌亮出后,你可以弃置1名角色1张牌,随后你需执行以下一项:1,将弃置牌作为判定结果;2,将弃置牌置于武将牌上(可以如手牌般使用或打出)',
			gl_leiqiang: '雷枪',
			gl_leiqiang_info: '限定技,条件技,出牌阶段,若你有手牌,则你可以选择1名角色,只有你弃置3张手牌并对其造成1点雷电伤害才能生效:其的所有手牌视为没有次数限制的雷【杀】直至你的下个回合开始为止',
			gl_poji: '破击',
			gl_poji_info: '当你使用或被使用【杀】指定目标后,你可令此牌的使用者与目标分别弃置对方1张牌',
			gl_niqi: '逆起',
			gl_niqi_info: '锁定技,当你受到伤害后,若你没有手牌,则你将手牌补至全场最多',
			gl_maishen: '卖身',
			gl_maishen_info: '出牌阶段,若你没有手牌,则你可以令1名其他角色交给你1张牌.随后其可以令你视为对其指定的1名角色使用1张【杀】',
			gl_jinzhi: '尽职',
			gl_jinzhi_info: '结束阶段开始时,若你本回合使用的牌数不小于你当前的体力值,则你可以移动场上1张牌并令被移出的角色将手牌补至体力上限',
			gl_louchu: '漏出',
			gl_louchu_info: '当你失去装备区内的牌后,你可以将1张手牌当【乐不思蜀】使用;锁定技,出牌阶段开始时,若你的装备区内没有【女装】,则你需使用1张【女装】',
			gl_jizhi: '极智',
			gl_jizhi_info: '每回合每种类型的牌限一次,你可以将1张牌当任意普通锦囊牌使用.若此不为你本回合首次发动此技能,则你失去1点体力并摸1张牌',
			gl_jianwei: '剑围',
			gl_jianwei_info: '当与你距离不大于1的其他角色成为除你以外角色伤害牌的目标时,你可以弃置1张【杀】将此牌的目标转移至你并令此牌的使用者成为此牌的额外目标',
			gl_wuxiang: '无相',
			gl_wuxiang_info: '锁定技,你的【杀】不能指定目标且不计入手牌上限;当你阵亡时,你需减去1点体力上限并取消之,随后你弃置区域内所有牌并摸等量的牌',
			gl_yinchun: '吟春',
			gl_yinchun_info: '出牌阶段限一次,你可以将弃牌堆中1张牌交给1名角色;其不能使用、打出或弃置因此获得的牌直至其陷入濒死状态为止',
			gl_ganling: '感灵',
			gl_ganling_info: '结束阶段开始时,你可以选择1名其他角色并声明1种牌名.随后其需展示所有手牌,若其中存在你声明牌名的牌,则你获得那些牌;否则你失去1点体力',
			gl_xunyou: '寻游',
			gl_xunyou_info: '锁定技,游戏开始时,你可以声明一种牌名;当你使用有目标的牌时,若你没有声明牌名的牌,则你需重铸1张牌,否则此牌不计入使用次数且效果变为与你声明的牌相同',
			gl_lingjing: '灵镜',
			gl_lingjing_info: '出牌阶段,你可以消耗X点魔力并令一名角色获得技能〖明镜〗.(X为场上拥有〖明镜〗的角色数+1)',
			gl_zongying: '纵影',
			gl_zongying_info: '当你对/被其他角色使用基本牌或普通锦囊牌时,你可以选择任意一名角色,令其视为此牌的使用者',
			gl_yinyue: '银月',
			gl_yinyue_info: '当你受到伤害后,你获得X点护甲;准备阶段开始时,你移除所有护甲并令一名角色弃置等量的牌.(X为你已损失的体力值,弃牌不足的部分以摸牌的形式补齐)',
			gl_mingjing: '明镜',
			gl_mingjing_info: '锁定技,当指定你为目标的基本牌或普通锦囊结算完毕后,你视为对包含使用者在内的角色使用一张相同牌名的牌并移除此技能',
			gl_gudu: '孤独',
			gl_gudu_info: '锁定技,你与上轮未交给过你牌的角色之间,不能使用牌指定对方为目标',
			gl_xiehou: '邂逅',
			gl_xiehou_info: '其他角色的出牌阶段限一次,其可以交给你一张牌;你的出牌阶段开始时,你可以令使用过该效果的角色摸一张牌',
			gl_yanzou: '演奏',
			gl_yanzou_info: '出牌阶段限一次,你可以选择至多X名角色,令这些角色依次执行以下一项:1,对你指定的另一名角色无视次数与距离限制使用一张牌,随后摸一张牌;2,受到一点伤害.若你仅选择了你自己,则改为你对一名角色尽可能的使用当前手牌.(X为你当前的体力值,且最大为全场角色数-1)',
			gl_fengyin: '封印',
			gl_fengyin_info: '每种牌名限一张,当你获得牌后,你可以将其中任意张牌于你的武将牌上称为<库洛>牌',
			gl_kuluo: '库洛',
			gl_yushi: '驭使',
			gl_yushi_info: '出牌阶段,你可以消耗两点魔力并视为使用任意一张<库洛>牌.若你选择延迟锦囊牌,则对方立即进行判定结算;若选择装备牌,则对方获得该装备的效果与距离直至你的下个回合开始为止;若不能使用,则你弃置此<库洛>牌并摸一张牌',
			gl_mengzhan: '梦占',
			gl_mengzhan_info: '当你使用牌后,若此牌颜色与你上次使用的牌不同,则你可以将1张<库洛>牌与牌堆顶4张牌,以任意顺序置于牌堆顶或牌堆底',
			gl_yingyuan: '应援',
			gl_yingyuan_info: '当有角色使用【杀】或【决斗】指定目标后,你可以令其或一名目标角色的手牌均视为【杀】直至此牌结算完毕为止',
			gl_caigan: '才干',
			gl_caigan_info: '出牌阶段限一次,你可以令任意两名角色进行一次拼点.若你赢,则你可以令一名角色随机获得一张♥️️牌;若你没赢,则赢的角色视为对你使用一张【决斗】',
			gl_fanxiang: '返乡',
			gl_fanxiang_info: '当你回复体力后,你可以令当前回合角色摸两张牌,随后结束当前的回合',
			gl_shizhong: '饰忠',
			gl_shizhong_info: '当有角色失去所有手牌后,你可以令其获得<力量上升>、<坚韧上升>、<祝福上升>与<魔性上升>的其中一层效果,随后再令其摸一张牌',
			gl_sifan: '伺反',
			gl_sifan_info: '当有角色的增益效果被移除后,你可以将一张手牌当【出其不意】对其使用',
			gl_bangyou: '傍佑',
			gl_bangyou_info: '当你受到伤害时,你可以令一名其他角色令其选择以下一项:1,代替你承受此伤害;2,将所有手牌置于武将牌上直至此回合结束为止',
			gl_lingzhou: '灵咒',
			gl_lingzhou_info: '出牌阶段限两次,你可以令一名角色的一项技能失效,随后其摸一张牌.其的出牌阶段,其可以弃置一张牌并回复—项因此失效的技能',
			gl_lingzhou_restore: '复原',
			gl_muying: '暮影',
			gl_muying_info: '锁定技,当你摸牌时,改为从牌堆底摸牌;当你的牌进入弃牌堆时,你将那些牌置于牌堆顶',
			gl_cannian: '残念',
			gl_cannian_info: '锁定技,转换技,当你造成或受到伤害时,阴:此伤害+1.阳:此伤害-1.随后若此伤害为致命伤害或无效伤害,则你于此回合结束后,执行一个额外的出牌阶段',
			gl_pohuai: '破坏者',
			gl_fuyinxueyuan: '福音学院',
			gl_tiaolvzhe: '调律者',
			skill: '技能',
			visible_gl_tongkai: '凌霜',
			phaseJudge: '判定阶段',
			phaseDraw: '摸牌阶段',
			phaseUse: '出牌阶段',
			phaseDiscard: '弃牌阶段',
		},
	};
	lib.config.all.characters.add('gelin');
	lib.config.characters.add('gelin');
	lib.translate.gelin_character_config = '空白之书';
	return gelin;
});

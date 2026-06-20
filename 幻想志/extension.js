import { lib, game, ui, get, ai, _status } from '../../noname.js'
/// <reference path="../../typings/index.d.ts" />
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '幻想志',
		content(config, pack) {
			lib.skill._die_audio = {
				trigger: { player: 'dieBegin' },
				_priority: 2,
				forced: true,
				content() {
					game.playAudio('../extension/幻想志/audio', trigger.player.name);
				},
			};
			lib.rank.rarity.legend.addArray(['RE_mia']);
			lib.translate.arcaea = 'arcaea';
			lib.translate.zhanct = '斩·赤红之瞳';
			lib.translate.yaoyangfenghua = '遥仰凰华';
			lib.translate.jiechengyounai = '结城友奈是勇者';
			lib.translate.loopers = '时廻者';
			lib.characterSort.幻想志 = {
				arcaea: ['初始对立', '初始光'],
				zhanct: ['Chelsea'],
				yaoyangfenghua: ['RE_Miyabi'],
				jiechengyounai: ['RE_Karin'],
				jiechengyounai: ['RE_Karin'],
				loopers: ['RE_mia'],
			};
			var initCSS = function () {
				var url = 'extension/幻想志';
				lib.init.css(url, 'taiji'); //调用CSS
			};
			initCSS();
			lib.element.player.huanxiangji = function (skillname) {
				if (!this.isUnderControl(true)) {
					return;
				}
				var info = lib.skill[skillname];
				if (!info) return;
				if (info.clickable) {
					var button = ui.create.div('.pj-shunfaanniu', this);
					button.innerHTML = get.translation(skillname);
					var player = this;
					button.listen(function () {
						if (player.hasSkill(skillname, true, true, false)) {
							if (info.clickable) {
								if (!info.clickableFilter(player) || !player.hasSkill(skillname, false, true, true)) {
									alert('当前不可发动!');
									return;
								}
								info.clickable(player);
							}
						} else {
							button.delete();
						}
					});
				}
			};
			//------------------------------------------------------------------------//
			lib.arenaReady.push(function () {
				var ua = window.navigator.userAgent;
				var href = window.location.href;
				var config = ['iPad', 'Android', 'iPhone', 'iPod'];
				var isPc = true;
				for (var i = 0; i < config.length; i++) {
					if (ua.indexOf(config[i]) !== -1) {
						isPc = false;
						break;
					}
				}
				if (isPc == false) {
					lib.onmobile = {};
				}
				lib.translate.zero_juezi_tag = '<span data-nature="fire">资</span>';
			});
			if (pack.changelog) {
				game.showExtensionChangeLog(pack.changelog);
			}
			lib.element.player.loseHpx = get.copy(lib.element.player.loseHp);
			lib.element.player.chooseToDiscardx = get.copy(lib.element.player.chooseToDiscard);
			lib.element.player.damagex = get.copy(lib.element.player.damage);
		},
		precontent() {
			game.import('character', function (lib, game, ui, get, ai, _status) {
				const QQQ = {
					name: '幻想志',
					connect: true,
					character: {
						初始对立: ['female', 'qun', 3, ['arc_juji', 'arc_weiguang', 'arc_dushi'], ['des:对立(対立(たいりつ)/Tairitsu)是由英国游戏开发团队lowiro开发的音乐游戏<Arcaea>系列作品的登场角色.对立(Tairitsu)是Arcaea中的主线角色.  具有相关主线剧情<主线剧情2><主线剧情V><主线剧情VS>与<主线剧情F>.  在游戏中具有以下搭档:对立、对立(Axium)、对立(Grievous Lady)、对立(Tempest)、光 & 对立(Reunion)、对立(夏)、对立(Sonata)、对立(Elegy)、对立 & 托凛、对立 & 中二企鹅(Grievous Lady).  其中对立具有两种形态:初始状态和觉醒状态. 在Arcaea与CHUNITHM、Groove Coaster的联动中,对立也作为可选角色出现.']],
						初始光: ['female', 'qun', 4, ['arc_shouji', 'arc_yanqi', 'arc_dushi'], ['des:光(Hikari)是由英国游戏开发团队lowiro开发的音乐游戏<Arcaea>系列作品的登场角色.光(Hikari)是Arcaea中的主线角色.具有相关主线剧情<主线剧情1><主线剧情V><主线剧情VS>与<主线剧情F>.在游戏中具有以下搭档:光、光(Zero)、光(Fracture)、光(Fatalis)、光 & 对立(Reunion)、光(夏)、光(Fantasia)、光 & 菲希卡、光 & 晴音.其中光具有两种形态:初始状态和觉醒状态.在Arcaea与CHUNITHM、Groove Coaster和音击的联动中,光也作为可选角色出现.在音击中光甚至拥有自己专属的3D形象.']],
						Chelsea: ['female', 'shen', 3, ['RE_huanqian', 'RE_wanbian'], ['des:切尔茜,动漫作品<斩·赤红之瞳>及前传<斩·赤红之瞳!零>中的人物.革命军旗下暗杀组织<Night Raid>的成员,善于变身暗杀的杀手,持有帝具<变身自在·盖亚粉底>.存放在太守官府藏宝库的化妆品型帝具,可以让使用者根据自身意愿变身成任何东西.']],
						RE_Miyabi: ['female', 'qun', 5, ['RE_sanguan', 'RE_guizu', 'RE_jianren', 'RE_yaxin'], ['des:凰华女学园分校代理理事长,同时也是该校本校系的一名学生.个性蛮横,在执行理事长职务时,常与他人发生争执,经常比中指.单纯、性急又草率的三冠王.出身于创立学院的风祭家.虽然言行看来任性,本人却是拼命要完成理事长代理的职务.擅长把自己伪装起来,并且表现出非常优雅的样子,不过只要面对一点小问题马上就会泄了底.由于想要回应家族的期待,有点执着于规则的遵守.在其身边的出生于俄罗斯的侍女莉妲(本名:莉莉雅．伊利尼齐纳．梅裘艾瓦) 是她从小的朋友与支柱.']],
						RE_Karin: ['female', 'qun', 4, ['RE_shuangdao', 'RE_mankai'], ['des:于动画第三话登场,大赦派出的勇者.灰发双马尾.亲哥哥三好春信在大赦工作,地位似乎很高.和勇者部的其他人不同,夏凛是接受了多年战斗训练的<完成型勇者>,有着首战单独击破Vertex的战斗力.有着作为勇者的自觉,剑术练习方面毫不懈怠,但对自己和身边的事情不太在意.最初对勇者部其它部员采取轻蔑傲慢的态度,但事实上是个傲娇,被攻略以后马上变得服服帖帖.因为喜欢吃小鱼干,所以被风学姐起了<小鱼干>(にぼっしー)的绰号,之后这个绰号更是被园子挂在嘴边.经常使用各种保健品,对此有着很深的研究.勇者战斗装为红色基调,可以召唤多把小太刀作为武器(但一般只使用两把),封印之仪时使用短刀.满开计数器在左肩.满开后召唤出四把拿有长刀的手臂以及两把手持小太刀六刀流,可展开更多角度的攻击.满开后手上的两把小太刀跟非满开状态下召唤的不同,剑身是通红的威力是平常所用的小太刀的3倍!']],
						RE_yuanhuan: ['female', 'shen', 4, ['zero_shilv'], [], ['des:圆神,作者测试用']],
						zero_luna: ['female', 'shen', 3, ['RE_weihui', 'RE_zhaori', 'RE_yingbai'], ['des:樱小路露娜,游戏<近月少女的礼仪>的女主人公,小仓朝日的主人.小仓朝日作为女仆所侍候的雇佣者.总是很冷静,缺乏感情表现.飘着女王氛围的超级大小姐.对他人会使用妄自尊大的口吻,而这都是源自樱小路家的<作为人上人来说需要有相应的表现>的高等教育.并没有耀武扬威,做错了会低头认错,对值得尊敬的人会表示敬意.但是仍旧会摆出S气场,即使是面对值得尊敬的人说话还是很辛辣.']],
						zero_Mahiru: ['female', 'shen', 3, ['RE_guiting', 'RE_shenyang', 'RE_nuanrou', 'RE_zongrang'], ['des:椎名真昼,轻小说<关于我在无意间被隔壁的天使变成废柴这件事>及其衍生作品中的角色.是所就读学校的第一美少女,平日里带着一副<天使大人>的面貌示人,遇到周之后才逐渐敞开心扉.']],
						zero_Lan: ['female', 'shen', 2, ['zero_chixie', 'zero_yongzhe', 'zero_dangmo', 'zero_shajue'], ['des:出自神之国的魔法使...']],
						zero_terakomari: ['female', 'shen', 1, ['zero_liqun', 'zero_baijiang'], ['des:家里蹲吸血姬的苦闷的主人公.穆露奈依特帝国第七部队队长.爱称是小鞠(コマリ).拥有能够通过摄取不同种族血液来发动不同异能的烈核解放<孤红之恤>.帝国贵族加德斯布拉德家出身,是公认的美少女.本性纯真善良而且容易受骗,但是富有同情心而且会为了帮助他人而努力,无论身处何种逆境都不会屈服.喜欢的食物是蛋包饭还有汉堡肉,反之讨厌青椒.爱好是读小说,将来的梦想也是希望成为小说家.因为非常讨厌身为吸血鬼营养之源的血液,因此基础能力弱于普通吸血鬼,而且个子比亲生妹妹还要矮.学生时代因为被欺负而变成家里蹲,随后三年都宅在家中.虽然不喜欢争斗,但因为必须遵守与皇帝的契约而被迫出门成为将军.时常对专属女仆薇儿的行为感到困扰,经常因为薇儿而被卷入各种麻烦,但本质上非常重视薇儿.虽然因为各种偶然与误解而受到世间的畏惧,但本人对于自身的力量并没有自觉.因为担心会被以下克上,所以会通过虚张声势来假装强大.']],
						zero_seyue: ['female', 'shen', 3, ['zero_juezi', 'zero_wucuo', 'zero_guxing'], ['des:出自游戏湛蓝牢笼,女主角.是由PHOSEPO开发的冒险游戏AVG作品.']],
						zero_saixiliya: ['female', 'shen', '3/4', ['zero_shengjie', 'zero_qingsu', 'zero_luobai'], ['des:出自白圣女与黑牧师,是由日本漫画家和武叶佐乃创作的漫画作品,在讲谈社漫画杂志<少年MAGAZINE R>连载.']],
						//zero_guzhenzhen:["female","shen",3,['zero_pianxiang','zero_yehuo'],["des:恋爱绮谭不存在的真相女主角."]],
						zero_Ui: ['female', 'shen', 3, ['zero_shiling', 'zero_yuxian', 'zero_youxin'], ['des:时雨羽衣是一名日本女性插画家、漫画家.目前东京都在住.出身于三重县四日市市,于一所美术大学进修,2015年开始在杂志<Manga Time Kirara Miracle!>连载漫画「かんきつパンチ!」,作为漫画家出道的契机. 2017年,从大学毕业,前往东京发展,曾在一间游戏公司就职.']],
						zero_jiu: ['female', 'shen', 3, ['zero_jiuniao', 'zero_youjie', 'zero_lengguang', 'zero_jiunyu'], ['des:Phigros的女主,看板娘.<Phigros>是一款节奏类游戏,是由初创通过bilibili视频网站发起的、由众多节奏类游戏爱好者组成的完全<用爱发电>的项目组<Pigeon Games(鸽游)>推出的非商业音乐游戏.']],
						zero_Rinne: ['female', 'shen', 4, ['zero_huoyuan', 'zero_xusu', 'zero_shiyuan'], ['des:园神凛祢,外文名そのがみ りんね,识别名Ruler(支配者),喜欢的人是五河士道,天使是凶祸乐园,PS3游戏<约会大作战凛祢乌托邦>及其衍生作品中的女主角,在精灵们开始未知原因的暴走与五河士道开始感到身体不适时出现于士道面前,擅长料理和长曲棍球.在DATE·A·LIVE PS3游戏<凛祢乌托邦>特典小说中登场,在第三代的游戏<约会大作战 Twin Edition 凛绪轮回>以及第四代的<约会大作战:莲反乌托邦>中出场.TV动画<约会大作战Ⅲ>之中也会因<幻影>的假扮而登场.']],
						zero_Inaba: ['female', 'shen', 3, ['zero_yunyao', 'zero_diting'], ['des:<武装少女校园权术游戏>(又名<武装少女>)中女角色,共生学园天下五剑之一.为最年幼且最强的一人,<药丸自显流>的传人.身穿巫女服的红瞳双马尾少女,经常闭着眼睛,盲人.耳朵很灵敏,能够听到整个学园所发生的事情.剑不离手,非常重视承诺.']],
						zero_Rena: ['female', 'shen', 3, ['zero_taojiao', 'zero_bingsi'], ['des:龙宫礼奈,日本同人社团07th Expansion所制作的游戏<寒蝉鸣泣之时>及其衍生作品中的女性角色.本名龙宫礼奈,父母离婚后,再次搬回雏见泽时,打算从新开始,忘掉兴宫和过去,于是自称蕾娜(レナ).']],
						zero_leying: ['female', 'shen', 0, ['zero_mengmo', 'zero_yuejuan', 'zero_zhongri'], ['des:<梦末>女主角,有五个喜欢的男生,<我>排名第四.让<我>对她告白……要<我>和她一起迎接世界末日.<梦末>是橘子班制作的短篇文字冒险游戏,短篇三部曲之一.']],
						zero_sumire: ['female', 'shen', 3, ['zero_yinyu', 'zero_kuangluan', 'zero_qingmi', 'zero_lingyu'], ['des:20岁.大二学生.有时社恐,有时却又一脸病娇神情的独居女大学生,网络废人,女同,热衷于在网上发自拍钓鱼.在和网友见面被骗的事件中,被<真命天女>古贺荠所救,为了接近荠,经常向网友<老师>求助,询问对策.很喜欢荠这样外表光鲜靓丽,擅长交际的大姐姐角色,想成为对方重要的人.']],
						zero_miku: ['female', 'shen', 3, ['zero_xianyin', 'zero_shuaishuaicong'], ['des:初音未来(はつね みく,Hatsune Miku),是2007年8月31日由Crypton Future Media以雅马哈的 Vocaloid 系列语音合成程序为基础开发的音源库,音源数据资料采样于日本声优藤田咲.']],
						zero_KAnge: ['female', 'shen', 3, ['zero_tianshi', 'zero_jiushu', 'zero_nvshen', 'zero_pomie'], ['des:<主播女孩重度依赖>中的角色超绝最可爱天使酱(超天酱).是<主播女孩重度依赖>中的角色.是<糖糖>于网络的虚拟身份.无论是在网络上还是在现实中,超天酱都是公认的高颜值女孩,引起众多人的羡慕与嫉妒.白净的皮肤,柔顺的黑发,澄澈的眼睛,再加上那有料的身材,正是众多人所求的理想外表.']],
						RE_Toudou: ['female', 'shen', 3, ['RE_tiancai', 'RE_badao'], ['des:刀藤绮凛,女,日本轻小说<学战都市Asterisk>及其衍生作品中的人物,国中部的13岁少女,刀藤流传人.是学战系列人气最高的角色.']],
						zero_Sion: ['female', 'shen', 3, ['zero_yidian', 'zero_qian', 'zero_yousheng', 'zero_wanyan'], ['des:诗音,日本游戏公司minori制作的游戏<eden*>的女主角.以其毕生精力拯救了人类的少女,是一名<Felix>,真实年龄为100岁左右.Felix中智慧最高的一员,地球脱出计划的中心人物.在工作了99年之后,结束工作的她留在了即将毁灭的地球,希望平静地度过余年.']],
						RE_Yuno: ['female', 'shen', 3, ['RE_cansha', 'RE_zhuanlian', 'RE_zhoumu', 'RE_xianyu'], ['des:我妻由乃,日本漫画<未来日记>及其衍生作品中的女主角.一周目的胜利者(一周目的神)、二周目2nd以及三周目的由乃.']],
						RE_Yuna: ['female', 'qun', 6, ['RE_zhuohun', 'RE_shenjuan', 'RE_shixin', 'RE_yunamankai'], ['des:结城友奈,动画<结城友奈是勇者>及其衍生作品中的主角 [1] ,讃州中学勇者部成员之一.每天都开朗地过着日子,个性阳光直率,不论何时都能积极地向前看,享受着在勇者部的时光.对所有人都和和气气,很想成为朋友.']],
						RE_NoirRE: ['female', 'shen', 3, ['RE_lvtu', 'RE_jiyuan'], ['des:诺瓦是由白玉社(しらたまこ)制作发行的全年龄恋爱文字冒险游戏<星空列车与白的旅行>(日语:星空鉄道とシロの旅)的登场角色.']],
						RE_Mary: ['female', 'shen', Infinity, ['RE_yongsheng', 'RE_zhuguang', 'RE_anxi'], ['des:玛丽·哈卡(日语:メアリー・ハーカー,英语:Mary Harker)是Purple software旗下游戏<青鸟>及其衍生作品的登场角色.']],
						RE_mia: ['female', 'shen', 12, ['RE_chuangjing', 'RE_xunbao', 'zyile_shiji', 'RE_bingruo'], ['boss', 'bossallowed'], 'zhu', ['des:<LOOPERS>的第一女主角.她的表情就像一只非常警觉的猫,并不经常笑.然而,她会把所有的信任放在曾经放下警戒的人身上.她是一个不太会说过去的事情的神秘少女.尽管她的外表很年轻,但她有着大人样的言行.她对明太子情有独钟.']],
						RE_Mononobe: ['female', 'shen', '-2/2', ['RE_fanwu', 'RE_beilun', 'RE_zhongshi'], ['des:物部深月(もののべ みつき)女,是日本轻小说<铳皇无尽的法夫纳>及其衍生作品的登场人物.其是物部悠的义妹,作为米德加尔特学院的学生会长的同时,也担任着龙讨伐部队的队长一职.']],
						RE_Neri: ['female', 'shen', '0', ['RE_niwang', 'RE_lvxing', 'RE_jueyuan'], [], ['des:风又音理是由白玉社(しらたまこ)制作发行的全年龄恋爱文字冒险游戏<星空列车与白的旅行>(日语:星空鉄道とシロの旅)的登场角色.钟城晓所住公寓房东的女儿,和晓之间的关系非常好,昵称晓为哥哥,经常跑到晓的住所里玩.性格善良,好奇心旺盛,对待身边的每一个人都无比的温柔,在与晓独处时也经常展现出孩子气和我行我素的一面.猫控.由于经常参观机车博物馆的原因,对蒸汽机车有着相当多的了解.喜欢晓,邀请晓参加夏季的星空列车旅行.']],
					},
					translate: {
						初始对立: '初始对立',
						初始光: '初始光',
						Chelsea: '切尔茜',
						RE_Miyabi: '风祭雅',
						RE_Karin: '三好夏凛',
						RE_yuanhuan: '圆环之理',
						RE_mia: '藤川美亚',
						RE_Mononobe: '反•物部深月',
						RE_Neri: '风又音理',
						RE_Mary: '玛丽·哈卡',
						RE_NoirRE: '夜羽真白',
						RE_Yuna: '结城友奈',
						RE_Yuno: '我妻由乃',
						RE_Toudou: '刀藤绮凛',
						zero_KAnge: '超天酱',
						zero_Sion: '诗音',
						zero_Lan: '勇者兰',
						zero_Mahiru: '椎名真昼',
						zero_luna: '樱小路露娜',
						zero_miku: '初音未来',
						zero_sumire: '芦屋堇',
						zero_leying: '唐乐吟',
						zero_Rena: '龙宫礼奈',
						zero_Inaba: '因幡月夜',
						zero_Rinne: '园神凛祢',
						zero_terakomari: '缇拉鞠',
						zero_guzhenzhen: '顾真真',
						zero_jiu: '鸠',
						zero_seyue: '铯月',
						zero_saixiliya: '塞西莉亚',
						zero_Ui: '时雨羽衣',
						RE_niwang: '逆亡',
						RE_lvxing: '旅行',
						RE_jueyuan: '绝愿',
						RE_niwang_mark: '乘客',
						RE_lvtu: '旅途',
						RE_jiyuan: '继愿',
						arc_juji_mark: '聚集',
						arc_shouji_mark: '聚集',
						arc_juji: '聚集',
						RE_sanguan: '三冠',
						RE_guizu: '贵族',
						RE_jianren: '坚韧',
						RE_yaxin: '雅心',
						RE_shuangdao: '双刀',
						RE_mankai: '满开',
						RE_mankai_buff4: '满开',
						RE_mankai_buff3: '满开',
						RE_mankai_buff2: '满开',
						RE_mankai_buff1: '满开',
						RE_yongsheng: '永生',
						RE_zhuguang: '逐光',
						RE_anxi: '暗袭',
						RE_xiuyi: '修艺',
						RE_zhuohun: '灼魂',
						RE_shenjuan: '神眷',
						RE_shixin: '蚀心',
						RE_cansha: '残杀',
						RE_zhuanlian: '专恋',
						RE_zhoumu: '周目',
						RE_xianyu: '先预',
						RE_tiancai: '天才',
						RE_badao: '拔刀',
						RE_badao_use: '拔刀',
						zero_tianshi: '天使',
						zero_jiushu: '救赎',
						zero_nvshen: '擬神',
						zero_pomie: '迫蔑',
						zero_yidian: '伊甸',
						zero_qian: '祈安',
						zero_yousheng: '佑生',
						zero_wanyan: '晚言',
						zero_chixie: '持械',
						zero_yongzhe: '勇者',
						zero_dangmo: '荡魔',
						zero_shajue: '杀绝',
						zero_mowu: '魔物',
						zero_yongzhe_recover: '勇者',
						RE_guiting: '姽婷',
						RE_shenyang: '神樣',
						RE_nuanrou: '暖柔',
						RE_zongrang: '棕髯',
						RE_zougong: '昼宫',
						RE_zongrang_buff: '棕髯',
						RE_weihui: '畏晖',
						RE_zhaori: '朝日',
						RE_zhaori_buff: '朝日',
						RE_yingbai: '樱白',
						RE_yingbai_buff: '樱白',
						zero_xianyin: '仙音',
						zero_shuaishuaicong: '甩葱',
						zero_yinyu: '阴郁',
						zero_kuangluan: '狂乱',
						zero_qingmi: '情迷',
						zero_lingyu: '囹圄',
						zero_taojiao: '讨娇',
						zero_bingsi: '病思',
						zero_mengmo: '梦末',
						zero_yuejuan: '阅卷',
						zero_zhongri: '终日',
						zero_yunyao: '云耀',
						zero_diting: '谛听',
						zero_huoyuan: '祸园',
						zero_xusu: '虚宿',
						zero_shiyuan: '失园',
						zero_liqun: '离群',
						zero_baijiang: '拜将',
						zero_kuangxue: '狂血',
						zero_jiuniao: '九鸟',
						zero_youjie: '幽界',
						zero_lengguang: '冷光',
						zero_jiunyu: '鸠域',
						zero_juezi: '绝资',
						zero_wucuo: '无错',
						zero_guxing: '孤星',
						zero_shengjie: '洁圣',
						zero_qingsu: '情夙',
						zero_luobai: '落白',
						zero_chunsi: '纯思',
						zero_pianxiang: '片箱',
						zero_yehuo: '业祸',
						zero_shiling: '时泠',
						zero_yuxian: '羽线',
						zero_youxin: '幼心',
						zero_shiling_info: '出牌阶段限一次,你可以摸两张牌并交给至多x名角色一张牌,你获得其除此牌以外的各区域内的所有牌.(x为此技能使用次数)',
						zero_yuxian_info: '出牌阶段限一次,你可以选择两名不同的角色,直到下轮开始时,其造成/受到的伤害+2/-2.',
						zero_youxin_info: '准备阶段,你可以翻面并回复一点体力,令你的技能中包含<出牌阶段>描述的技能下回合使用次数加1.',
						zero_pianxiang_info: '场上发生事件时,根据你拥有的〖业〗标记数量你可以反转结果.不大于30:一名角色体力减少/增加.不大于25:一名角色获得/失去牌.不大于20:一名角色死亡/复活.不大于15:一名角色使用牌的指定其他角色/自己为目标.不大于10:一名角色的阶段开始/结束.不大于5:游戏结束胜利/失败.',
						zero_yehuo_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你拥有的〖业〗标记数量大于场上所有角色人数＋体力上限时,移除此武将牌.',
						zero_shilv: '回溯',
						zero_shilv_info: '游戏开始时你可以选择一名武将作为你的主将,你为副将.出牌阶段限一次,你可以记录当下武将牌状态或者读取武将牌状态(存档跨局有有效,至多五个存档可以自由覆盖).',
						zero_shengjie_info: '出牌阶段,你使用或打出你未以此法记录过的花色的牌时,你可以摸x张牌,记录其花色.若你记录了四种花色,下回合准备阶段,你重置〖洁圣〗并回复一点体力(x为此牌点数).',
						zero_qingsu_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你的最终手牌上限为10x(x为场上人数).',
						zero_luobai_info: '<span class="bluetext" style="color: #66FF00">觉醒技</span>,准备阶段,若你手牌大于40,你减少一点体力上限,弃置10张牌并获得〖纯思〗.',
						zero_chunsi_info: '出牌阶段限一次,你可以弃置10张手牌,你失去一点体力,使一名角色失去等同于其体力上限的体力.(每名角色限一次).',
						zero_juezi_info: '游戏开始时,你多摸X张牌称为〖资〗(X为场上角色数且至少为3).〖资〗不计入手牌上限.你可以将摸牌阶段获得的牌标记为〖资〗.你的回合开始,你可以重新定义〖资〗的点数.你可以弃置一张〖资〗将其他角色对你造成的伤害改为视为对你造成伤害.',
						zero_wucuo_info: '你受到伤害时,可以展示手牌将其中不为连续相邻点数的牌弃置,从牌堆获得牌直至手牌有所有点数.之后你可以使用一张牌.(无距离限制,不计入次数).',
						zero_guxing_info: '你的手牌可以按照以下规则使用或打出:将点数为偶数的牌当做一张基本牌使用.将点数为奇数的牌打出跳过判定阶段.将点数为12的公因数的牌当做一张装备牌使用.将点数为2的公倍数的牌当做一张单体锦囊使用.将点数为合数的牌当做一张群体锦囊使用.将点数为质数的牌打出跳过弃牌阶段.将点数的次方不大于100的牌当做延时锦囊使用.',
						zero_jiuniao_info: '出牌阶段,当你使用或打出点数为9的牌时,你可以摸九张牌,你增加一点体力上限.',
						zero_youjie_info: '每轮限一次,当你的体力减少时,你可以将手牌摸至九张,你令〖九鸟〗描述中摸的牌数量加一.',
						zero_lengguang_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你使用或打出的牌按照花色获得以下效果:♦️️基本牌面数值加一;♣️️牌不可被响应;♥️️牌结算两次;♠️️牌造成的伤害加二.',
						zero_jiunyu_info: '结束阶段,你可以获得两张牌堆中的牌,你失去一点体力上限.',
						zero_liqun_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,其他角色计算与你的距离＋99,你计算与其他角色的距离＋99.若你本回合未使用牌,直到你的回合开始,你不计算为场上角色且不参与距离座次计算.',
						zero_baijiang_info: '<span class="bluetext" style="color: #66FF00">觉醒技</span>,场上有人发动除〖锁定技〗、〖主公技〗以外带标签的技能时或有人死亡后,你修改〖离群〗并获得〖狂血〗.',
						zero_kuangxue_info: '准备阶段/结束阶段/你受到伤害时,你选择一名其他角色对其造成一点全属性伤害,根据其体力值执行以下效果:为一,你获得其武将牌上没有标签的技能,若获得数为零,对其造成一点全属性伤害.为二,你获得其区域内的所有牌,横置其.为三,你发动一次此时可以发动的一个技能.为四,你摸四张牌并再次对其造成一点全属性伤害.大于四,你获得其的体力上限和体力.',
						zero_huoyuan_info: '每轮限一次,当你于回合外受到伤害时,你摸x张牌并获得其武将牌上至多x个技能.(x为伤害来源体力)',
						zero_xusu_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你对其发动〖祸园〗的角色造成的第偶数次伤害,取消之.第奇数次伤害,此伤害加倍.',
						zero_shiyuan_info: '觉醒技,准备阶段,若你技能个数大于7,你减少一点体力上限,摸x张牌,展示x张神势力武将的技能,你选择其中两个获得.(x为你拥有技能数).',
						zero_yunyao_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你使用【杀】改为对目标角色依次视为使用无视防具和护甲的普通【杀】、【火杀】、【雷杀】、【冰杀】、【刺杀】、【毒杀】、【神杀】,结算后你失去一点体力.',
						zero_diting_info: '每个回合每项对应限三次,场上发生以下事件时,你执行对应的效果:①:有角色弃置了【杀】;你可以获得之.②:有角色响应了【杀】;你下次使用【杀】的伤害+1.③:有角色受到了伤害;你可以选择弃置伤害来源/受到伤害的角色等量张牌,并摸等量张牌.④:有角色濒死;你可以将一张【杀】弃置,取消此次濒死结算,将其体力设为1.',
						zero_mengmo_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,游戏开始时你获得十枚〖梦末〗标记,你的濒死状态和死亡结算只有〖梦末〗标记为零时才会结算.你没有判定/摸牌/弃牌阶段,你的出牌阶段改为从牌堆随机观看2x张牌使用之.(x为〖梦末〗标记数量且至少为一)',
						zero_yuejuan_info: '你的回合开始阶段,你可以弃置一枚〖梦末〗标记,你选择一种颜色并选择y名其他角色,你选择执行一项:①弃置其所有与选择颜色一样的手牌并对其造成z点伤害(z为因此弃置的牌数量且至少为一).②跳过其下次摸牌和出牌阶段.(y为10-〖梦末〗标记数量且至少为一)',
						zero_zhongri_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,每轮开始时,你失去一枚〖梦末〗标记视为发动一次不弃置〖梦末〗标记的【阅卷】,之后你执行一次出牌阶段.(首轮除外)',
						zero_taojiao_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你的回合内,其他角色非<span class="bluetext" style="color: #6699FF">锁定技</span>失效且不能使用或打出手牌.',
						zero_bingsi_info: '当场上有角色体力发生变化时,你摸三张牌,弃置一张牌.',
						zero_yinyu_info: '你的体力发生变动时,若你的武将牌未翻面或横置,你可以改为翻面或横置,你指定一名角色执行相同的结算.',
						zero_kuangluan_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你的武将牌发生变化时,你须将手牌翻倍并展示所有手牌,将其中每一种花色弃置至一张,令其他角色执行相同的操作,若有角色未能弃置,你获得其所有手牌.所有角色执行完毕时,你获得其他所有角色因此弃置的牌.',
						zero_qingmi_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,武将牌不是原始状态的角色不能使用牌指定你为目标且不能响应你使用的牌.',
						zero_lingyu_info: '你使用牌指定目标可以额外指定武将牌不是原始状态的任意名角色且你与这些角色视为在彼此攻击范围内.',
						zero_xianyin_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你的【闪】视作【无懈可击】.一名角色使用或打出一张基本牌时,你可以打出一张【无懈可击】使其无效.',
						zero_shuaishuaicong_info: '一名角色使用锦囊牌时,你摸一张牌.',
						RE_weihui_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你受到的火焰伤害加一.',
						RE_zhaori_info: '摸牌阶段,你额外可以摸x+y张牌,你选择一项1.本回合造成伤害加倍.2.本回合内视作拥有【破军】与【行殇】.3.增加一点体力上限并回复两点体力.你令【畏晖】中数值加一.(x为全场人数,y为你装备区装备数).',
						RE_yingbai_info: '结束阶段,若你本回合击杀过其他角色,你可以弃置至多四张牌并令你下回合造成伤害+x(x为你弃牌数量).',
						RE_guiting_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你的锦囊牌造成的伤害加一.',
						RE_shenyang_info: '出牌阶段限一次,你可以展示一张牌,你令×名角色展示一张牌,若其展示牌与你展示牌花色不同,你弃置其各区域一张牌.若其展示牌与你花色相同,你获得其两张牌.你获得所有展示的牌.(X为此牌牌名字数)',
						RE_nuanrou_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,①游戏开始前,你废除你的武器栏.②你打出或使用的牌无距离限制.③你的武器牌视作<无中生有>.④若你装备区内拥有防具,你使用牌无次数限制.',
						RE_zongrang_info: '<span class="bluetext" style="color: #66FF00">觉醒技</span>,准备阶段,若你体力为一或你没有手牌,你减少一点体力上限,摸4张牌,此后造成伤害加一并获得<昼宫>(昼宫:出牌阶段限一次,你可以令一名男性角色非<span class="bluetext" style="color: #6699FF">锁定技</span>失效且本回合内不能使用或打出手牌.)',
						RE_zougong_info: '出牌阶段限一次,你可以令一名男性角色非锁定技失效且本回合内不能使用或打出手牌.',
						zero_chixie_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,游戏开始时,你将【枪】置入你的装备区,你始终装备【枪】.你不在其他角色攻击范围內时,其他角色使用牌不能指定你为目标.',
						zero_yongzhe_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,其他角色对你或你对其他角色造成伤害后,使其获得一枚【魔物】标记,拥有【魔物】标记的角色你对其使用牌无次数限制且不能在你的回合外回复体力.',
						zero_dangmo_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你对有【魔物】标记的角色造成的伤害+x,且造成伤害后你摸2x张牌增加x点体力上限并回复x点体力(x为其拥有的【魔物】标记数量且至多为2).',
						zero_shajue_info: '<span class="bluetext" style="color: #FF3300">限定技</span>,你即将死亡时,可以改为将体力上限变为1,之后你收回所有【魔物】标记摸等量张牌结束当前回合,你获得一个额外回合,这个回合内,其他角色均视为拥有【魔物】标记.',
						zero_yidian_info: '结束阶段,你的非额外回合结束时,若你造成过伤害,你可以摸×张牌,失去y点体力,于你下一回合结束后,额外执行y个回合.(x为你本回合造成伤害总数,y为你以此法获得牌中<span class="bluetext" style="color: #FF3333">❤</span>个数,至多为2).',
						zero_qian_info: '每轮限一次,你可以弃置x张牌,摸x+y张牌,你本回合内造成伤害加一并且直到你下一回合开始前,你受到的伤害加一.(x为你弃置的牌,y为你损失的体力值).',
						zero_yousheng_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,当你第一次受到不同牌名的牌造成的伤害时,记录其牌名并取消之.',
						zero_wanyan_info: '当你记录的牌名(除基本牌)的牌进入弃牌堆时,你摸一张牌.',
						zero_tianshi_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,①当你回合外被弃置手牌时,你摸两张牌.②当你于回合内受到伤害时,你摸四张牌.③当你于回合外将装备置入装备区时,你摸六张牌.',
						zero_jiushu_info: '每人限一次,其他人的结束阶段,若其本回合内未造成伤害,你令其选择1:交给你三张牌.2:将一张装备牌置入你的装备区,摸两张牌.',
						zero_nvshen_info: '出牌阶段限一次,你可以将一张装备牌交给你攻击范围内的角色并置入其装备区,其摸X张牌,你摸X+Y张牌(X为你与其的距离,Y为其装备区武器数量).',
						zero_pomie_info: '转换技,阳:出牌阶段限一次,你可以将一张非基本牌当作一张非装备牌使用或打出,若此牌造成伤害,你摸X张牌弃置X-1张牌.阴:出牌阶段限一次,你可以将一张基本牌当做一张锦囊牌使用或打出,若此牌未造成伤害,你摸Y-2张牌(X为你此次造成伤害总值,Y为此牌牌名数).',
						RE_tiancai_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,回合开始阶段,你获得一张武器牌并装备,你只可以装备武器牌,你可以无限制装备武器牌.你的装备区有武器牌时,根据武器数量获得以下效果:一及以上:你使用牌无距离限制;二及以上:你使用牌可以多指定一名目标;三及以上:其他角色不能响应你使用的牌;四及以上:你使用牌无次数限制且伤害类的牌基础伤害+1.大于四及以上:你摸牌阶段摸牌数量增加x(x为你装备区武器牌数量).',
						RE_badao_info: '出牌阶段限一次/你受到伤害时,你可以选择将装备区内的一张武器牌弃置,依据武器范围对选择的目标/伤害来源造成x点伤害并对伤害来源相邻的除你以外的角色造成1点伤害(x为武器范围),之后你获得一张武器牌并装备.',
						RE_cansha_info: '你使用的黑色基本/锦囊牌指定一名体力值/手牌数不大于你的目标或一名体力值/手牌数不大于你的角色使用黑色基本/锦囊牌指定你为目标时,可先对其造成一点伤害并摸一张牌.',
						RE_zhuanlian_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你使用牌指定目标时,只指定一名合法目标并取消其他所有目标,你摸x张牌并展示所有手牌,弃置x张牌回复x点体力(x为因此而取消的其他角色目标的数量).',
						RE_zhoumu_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你的手牌上限为y,回合结束时,若本回合y不小于z,你进行判定,若结果为红色,则你进行一个额外回合(y为本回合弃牌+使用牌数量,z为场上存活人数+2).',
						RE_xianyu_info: '一名角色进行判定之前,你可以观看牌堆顶和牌堆底各y张牌,并可以按任意顺序置于牌堆顶或牌堆底.判定结束后,你可获得此次判定牌并标记为「预」牌,你使用「预」牌须指定场上所有合法目标并失去一点体力.',
						RE_zhuohun_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,准备阶段,你须受到视为〖火祭〗造成的一点无来源的火属性伤害并进行一次〖火祭〗判定.你受到不因〖火祭〗造成的伤害时,改为进行一次〖火祭〗判定.<br><br> <div style="display:inline; font-family: xingkai, xinwei;margin: auto;text-align: center;" data-nature="fire">〖火祭〗</div><br><br>进行判定;若判定结果为非♥️️ 2～9之间,玩家摸三张牌,转移给下家进行判定直到下家为友奈;否则玩家受到无来源的三点火属性伤害.',
						RE_shenjuan_info: '每名角色回合x次,判定牌生效前,你可以观看牌堆顶x张牌,选择其中一张作为结果并获得剩余的牌(x为你已损失体力值且至少为二).',
						RE_shixin_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你每受到一次属性伤害增加一点体力上限并摸等同于此伤害值数量的牌,你受到的属性伤害+1.',
						RE_yongsheng_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你始终翻面,你不是你未对其造成伤害的角色的合法卡牌目标并取消后续结算.你的体力/体力上限为无穷大,你不会进入濒死状态,你不会被判定死亡.',
						RE_zhuguang_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,每轮开始,若本局游戏所有角色受到/造成的伤害之和不小于100点,你修改【永生】后半段描述获得【修艺】,将体力上限设为3.',
						RE_anxi_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,一名角色受到伤害/回复体力时,你选择执行一次摸牌或出牌阶段.',
						RE_xiuyi_info: '出牌阶段,若你使用的牌名称和上一张牌名称不相同,你可以失去一点体力并摸x张牌,令该牌额外结算x次(x为上一张牌名称和使用的牌名称绝对值之差).',
						RE_chuangjing: '创境',
						RE_chuangjing_alls: '创境',
						RE_chuangjing_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,游戏开始时,你废除判定区,你不能翻面或横置.你弃牌/受到伤害/失去体力时,令其他角色执行相同的结算.',
						RE_bingruo: '病弱',
						RE_bingruo_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,准备阶段,你失去一点体力.',
						zyile_shiji: '时廻',
						zyile_shijix: '时廻',
						zyile_shiji_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,每次你死亡时,若你的体力上限大于0,则改为失去一点体力上限.你复原场上情况到游戏开始状态.',
						RE_xunbao: '寻宝',
						RE_xunbao_info: '出牌阶段开始/你受到伤害时,你手牌按照种类最少的一类牌规则从牌堆/弃牌堆中随机获得直至手牌数为x(x你的体力上限且至少为6),你获得一张<宝物>.若此时在你的回合外,你可以立即使用一张牌,你以此法使用了一张牌则可以重复流程再次使用一张牌.',
						RE_fanwu: '反物',
						RE_beilun: '悖论',
						RE_zhongshi: '终矢',
						RE_zhongshi_recover: '终矢',
						RE_fanwu_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你区域内的牌无限制.你受到的伤害、流失的体力视为体力回复,你减少体力上限视为增加体力上限;你增加体力上限视为减少,你回复体力视为减少体力;你不进入濒死状态,当你体力为正值时,你死亡.',
						RE_beilun_info: '每名角色回合x次,每当一名角色摸牌/弃牌/受到伤害/回复体力时,你可以令其再执行一个相反的结算(x为你的手牌数).',
						RE_zhongshi_info: '当你体力为正值时,你可以视为对所有存活角色依次强制使用x张【万箭齐发】(无视不能成为卡牌目标效果,x为你的手牌数),每有一名角色因此受伤,你回复一点体力.',
						RE_niwang_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,游戏开始时,你死亡.指定［1,3］名角色获得＂乘客＂标记,在每个角色准备阶段开始时你执行一次摸牌阶段将手牌翻倍,在每个角色结束阶段开始时你执行一次出牌阶段,你使用牌只能指定拥有＂乘客＂标记的角色为目标且使用牌无距离次数限制.',
						RE_lvxing_info: '出牌阶段你使用实体牌指定拥有＂乘客＂标记的角色为目标时,根据本回合第几次指定目标获得以下效果:第一次,你可以将目标角色标记转移给没有＂乘客＂标记的角色;第二次,你从牌堆随机获得x张牌(x为场上没有＂乘客＂标记角色的数量);第三次,你弃置其他没有＂乘客＂标记的角色各x张牌,没有牌的角色失去一点体力(x为＂乘客＂标记数量);第四次,你选择弃置x张牌,并根据弃置牌的种类,依次可以视为使用对应种类的任意一张牌.(x为＂乘客＂标记数量).',
						RE_jueyuan_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你于出牌阶段使用实体牌不小于5时.你收回所有＂乘客＂标记,复活并将武将牌替换为【夜羽真白】.',
						RE_lvtu_info: '每轮开始/你受到伤害时,你可以获得三个/X个可以获得的技能(X为你受到的伤害点数).',
						RE_jiyuan_info: '出牌阶段,你可以将一张非装备牌当做其对应类别的任意一张牌使用,你随机失去【旅途】、【继愿】以外的技能并获得一点体力上限.',
						RE_shuangdao_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你的伤害类牌使用后额外结算一次.',
						RE_mankai_info: '<span class="bluetext" style="color: #FF3300">限定技</span>,出牌阶段你可以选择至少两项获得对应效果:1.废除武器栏并减少一点体力上限,从牌堆随机获得一张伤害类牌并摸一张牌,本回合你的伤害类牌伤害值基数+1;2.废除防具栏并减少一点体力上限,本回合你的伤害类牌可以指定任意名目标,使用伤害类牌无距离次数限制;3.废除坐骑栏并减少一点体力上限,本回合其他角色非charlotte技失效并且无法使用或打出牌;4.废除宝物栏并减少一点体力上限,本回合你使用牌指定目标后,可以摸x张牌(x为目标角色数).',
						RE_sanguan_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,你的手牌上限、攻击范围始终减一,你始终视为在其他角色攻击范围内.',
						RE_guizu_info: '摸牌阶段开始时,其他角色须依次交给你一张牌或者弃置一张牌,手牌数为零时受到你造成的一点伤害.',
						RE_jianren_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,每回合限一次,每当你受到可以造成你濒死的伤害时,你防止之改为摸X张牌(X为此次伤害点数).',
						RE_yaxin_info: '回合开始时,你翻开牌堆顶的第一张牌,根据这张牌的花色获得以下效果;♥️️:将这张牌置入牌堆底你视为使用了一张【无中生有】并在结算后回复一点体力;♦️️:将这牌交给一名其他角色你视为使用了一张【桃园结义】并在结算后摸一张牌;♣️️:你获得这张牌你视为使用了一张【南蛮入侵】并在结算后你随机获得一张【杀】;♠️️:将这张牌置入弃牌堆指定一名其他角色进行一次判定,若结果为♣️️则受到一点雷属性伤害;若结果为♠️️则受到两点雷属性伤害.',
						arc_juji_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,每次其他角色使用或打出伤害类牌时,你将那些牌置于你的武将牌上.回合开始时,你可以获得武将牌上所有牌,若因此使你的手牌数不小于体力上限,你失去一点体力并增加一点体力上限.',
						arc_weiguang: '微光',
						arc_weiguang_info: '出牌阶段,你可以将伤害类的牌当做一张回复类或摸牌类牌使用.',
						arc_shouji: '收集',
						arc_shouji_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,每次其他角色使用或打出回复或摸牌类牌时,你将那些牌置于你的武将牌上.回合开始阶段,你可以获得武将牌上所有牌,若因此使你的手牌数不小于体力上限,直到变为和体力上限相同数目位置,任意选择手牌弃置,你选择其他一名角色对其造成x点伤害(x为你因此弃置牌的数量/2,向上取整).',
						arc_yanqi: '厌弃',
						arc_yanqi_info: '每次有角色回复体力时,若其体力值不小于一,你可以将效果改为其对你指定的一名角色视为使用一张【杀】(不计入使用次数无距离限制).',
						arc_dushi: '独世',
						arc_dushi_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,若你的武将牌上有卡牌,你不能成为和武将牌上的卡牌花色相同的卡牌的目标.',
						RE_huanqian: '幻千',
						RE_huanqian2: '幻千',
						RE_huanqian_info: '<span class="bluetext" style="color: #6699FF">锁定技</span>,游戏开始时,你从武将牌堆中随机获得两张武将牌,你视为拥有武将牌上的武将技能(<span class="bluetext" style="color: #6699FF">锁定技</span>、<span class="bluetext" style="color: #FF3300">限定技</span>、<span class="bluetext" style="color: #66FF00">觉醒技</span>、<span class="bluetext" style="color: #9966FF">主公技</span>除外).你可以移除有<span class="bluetext" style="color: #6699FF">锁定技</span>的武将牌视为使用或打出【闪】;移除有主公技的武将牌视为使用或打出普通【【杀】;移除有限定技的武将牌视为使用或打出【桃】;移除有觉醒技的武将牌视为使用或打出【无懈可击】.',
						RE_wanbian: '万变',
						RE_wanbian_use: '万变',
						RE_wanbian_info: '你的每一个阶段开始时/当你受到伤害后/出牌阶段限一次.系统随机挑选五个能在对应时机发动的技能,你可以选择其中一个发动.将发动〖万变〗选择的技能对应的武将牌添加到〖幻千〗中.若无对应的技能能发动或你的〖幻千〗数量大于四,你摸三张牌移除一张〖幻千〗武将牌.',
					},
					characterTitle: {
						RE_NoirRE: '星空列车与白的旅行',
						RE_Neri: '星空列车与白的旅行',
						RE_Miyabi: '#r被思想禁锢的爱恋,风祭的玉石',
						Chelsea: '#g切妹',
						初始对立: '#b猫猫',
						初始光: '#p光光',
						RE_Mary: '#g青鸟',
						RE_Yuno: '#g未来日记',
						RE_Toudou: '#r学战都市',
						zero_KAnge: '#r主播女孩重度依赖',
						zero_Sion: '#geden*末轴之恋',
						zero_Lan: '#r神之国的魔法使',
						zero_Mahiru: '#g关于我在无意间被隔壁的天使变成废柴这件事',
						zero_luna: '#r近月少女的礼仪',
						zero_miku: '#gVocaloid',
						zero_sumire: '#r可爱女友的获取方法',
						zero_Rena: '#g寒蝉鸣泣之时',
						zero_Inaba: '#r武装少女',
						zero_Rinne: '#r约会大作战',
						zero_terakomari: '#r家里蹲吸血姬的苦闷',
						zero_guzhenzhen: '#p恋爱绮谭~不存在的真相',
						zero_jiu: '#pPhigros',
						zero_seyue: '#r湛蓝牢笼',
						zero_saixiliya: '#g白圣女与黑牧师',
						zero_Ui: '#p羽衣妈妈',
					},
					skill: {
						zero_shiling: {
							audio: 'ext:幻想志/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return lib.skill.zero_shiling.usable && lib.skill.zero_shiling.usable > 0;
							},
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								player.chooseCardTarget({
									selectCard(card, player, target) {
										return [1, get.skillCount('zero_shiling')];
									},
									selectTarget() {
										return [1, ui.selected.cards.length];
									},
									filterTarget: lib.filter.notMe,
									ai1(card) {
										var player = _status.event.player;
										if (card.name == 'du') return 30;
										return get.unuseful(card) + 9;
									},
									ai2(target) {
										var att = get.attitude(_status.event.player, target) + target.countCards('hejx');
										return 1 - att;
									},
									prompt: '交给至多' + get.skillCount('zero_shiling') + '名角色一张牌',
									prompt2: '提示:先选择再选择一张牌,最后交给的牌一一对应',
								});
								('step 2');
								if (result.bool) {
									for (var i = 0; i < result.targets.length; i++) {
										player.give(result.cards[i], result.targets[i]);
										result.targets[i].give(
											result.targets[i].getCards('hejx', (card) => card != result.cards[i]),
											player,
											'give'
										);
										player.line(result.targets[i], 'green');
									}
								}
							},
							ai: {
								order: 2,
								result: {
									player: 1,
								},
								threaten: 1.5,
							},
						},
						zero_yuxian: {
							audio: 'ext:幻想志/audio:2',
							enable: 'phaseUse',
							usable: 1,
							selectTarget: 2,
							multitarget: true,
							targetprompt: ['造成伤害时+2', '受到伤害时-2'],
							filterTarget(card, player, target) {
								if (!ui.selected.targets.length) return !target.hasSkill('zero_yuxian_buff1');
								if (ui.selected.targets.length == 1) return !target.hasSkill('zero_yuxian_buff2');
								return true;
							},
							content() {
								targets[0].addTempSkill('zero_yuxian_buff1', 'roundStart');
								targets[1].addTempSkill('zero_yuxian_buff2', 'roundStart');
							},
							ai: {
								result: {
									target(player, target, card) {
										if (ui.selected.targets.length == 1) return 30;
										return get.attitude(player, target);
									},
								},
								order: 12,
								expose: 0.2,
							},
							subSkill: {
								buff1: {
									trigger: { source: 'damageBegin2' },
									forced: true,
									mark: true,
									intro: {
										content: '造成的伤害+2',
									},
									content() {
										trigger.num += 2;
										game.log(player, '造成的伤害+2');
									},
								},
								buff2: {
									trigger: { player: 'damageBegin3' },
									forced: true,
									mark: true,
									intro: {
										content: '受到的伤害-2',
									},
									content() {
										trigger.num -= 2;
										game.log(player, '受到的伤害-2');
									},
								},
							},
						},
						zero_youxin: {
							trigger: { player: 'phaseZhunbeiBegin' },
							check(event, player) {
								if (player.isTurnedOver()) return true;
								if (player.hp == 1 && player.countCards('h', 'tao') < 1) return true;
								return Math.random() < 0.4;
							},
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								player.turnOver();
								player.recover();
								('step 1');
								player.when('phaseBegin').then(() => {
									var list = player.getSkills(null, false, false).filter(function (i) {
										return lib.translate[i + '_info'] && lib.translate[i + '_info'].includes('出牌阶段限');
									});
									if (list.length) {
										for (var skill of list) {
											if (!lib.skill[skill].usable && lib.skill[skill].usable != 0) continue;
											if (typeof lib.skill[skill].usable == 'number') {
												lib.skill[skill].usable++;
											}
										}
									}
									player.when('phaseAfter').then(() => {
										var list = player.getSkills(null, false, false).filter(function (i) {
											return lib.translate[i + '_info'] && lib.translate[i + '_info'].includes('出牌阶段限');
										});
										if (list.length) {
											for (var skill of list) {
												if (!lib.skill[skill].usable && lib.skill[skill].usable != 0) continue;
												if (typeof lib.skill[skill].usable == 'number') {
													lib.skill[skill].usable--;
												}
											}
										}
									});
								});
							},
						},
						zero_shilv: {
							//感谢诗笺提供的代码帮助,抄的天牢令
							enable: 'phaseUse',
							usable: 1,
							chooseButton: {
								dialog(event, player) {
									var dialog = ui.create.dialog('时旅', 'forcebutton');
									var table = document.createElement('div');
									table.classList.add('add-setting');
									table.style.margin = '0';
									table.style.width = '100%';
									table.style.position = 'relative';
									var list = ['file', 'load'];
									for (var i of list) {
										var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
										if (i == 'file') td.innerHTML = '<span>存档</span>';
										else td.innerHTML = '<span>读档</span>';
										td.link = i;
										td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
										Object.setPrototypeOf(td, lib.element.Button.prototype);
										table.appendChild(td);
										dialog.buttons.add(td);
									}
									dialog.content.appendChild(table);
									for (var i = 1; i <= 5; i++) {
										var str = '';
										if (!lib.config['TL_huisu' + i] || JSON.stringify(lib.config['TL_huisu' + i]) == '{}') {
											str += '<b>存档' + i + '</b><br>无数据';
										} else {
											var config = lib.config['TL_huisu' + i];
											str += '<b>存档' + i + '</b><br>时间:' + config.today.year + '年' + config.today.month + '月' + config.today.day + '日' + config.today.hour + '时' + config.today.minute + '分' + config.today.second + '秒';
											//武将名
											str += '<li>角色名称:' + (config.name1 ? lib.translate[config.name1] : lib.translate[config.name]) + ',副将名:' + (config.name2 ? lib.translate[config.name2] : '无');
											//血量
											str += '<li>角色血量:' + config.hp + '/' + config.maxHp;
											//技能
											str += '<br>角色技能:';
											if (config.skills) {
												var skillList = [];
												for (var x = 0; x < config.skills.length; x++) {
													skillList.push(lib.translate[config.skills[x]]);
												}
												str += '<li>武将技能:' + (skillList.length ? skillList : '无');
											} else {
												config.skills = [];
											}
											if (config.additionalSkills) {
												if (JSON.stringify(config.additionalSkills) == '{}') {
													str += '<li>额外技能:无';
												} else {
													str += '<li>额外技能:';
													for (var x in config.additionalSkills) {
														var additionalSkillsList = [];
														for (var y = 0; y < config.additionalSkills[x].length; y++) {
															additionalSkillsList.push(lib.translate[config.additionalSkills[x][y]]);
														}
														str += '<br>' + lib.translate[x] + ':' + additionalSkillsList;
													}
												}
											}
											if (config.hiddenSkills) {
												var hiddenSkillsList = [];
												for (var x = 0; x < config.hiddenSkills.length; x++) {
													hiddenSkillsList.push(lib.translate[config.hiddenSkills[x]]);
												}
												str += '<li>暗置技能:' + (hiddenSkillsList.length ? hiddenSkillsList : '无');
											}
											if (config.forbiddenSkills) {
												var forbiddenSkillsList = [];
												for (var x = 0; x < config.skills.length; x++) {
													if (lib.translate[config.skills[x] + '_info'] == '此模式下不可用') {
														forbiddenSkillsList.push(lib.translate[config.skills[x]]);
													}
												}
												str += '<li>模式禁用:' + (forbiddenSkillsList.length ? forbiddenSkillsList : '无');
											}
											if (config.disabledSkills) {
												var disabledSkillsList = [];
												if (JSON.stringify(config.disabledSkills) == '{}') {
													str += '<li>废除技能:无';
												} else {
													for (var x in config.disabledSkills) {
														disabledSkillsList.push(lib.translate[x]);
													}
													str += '<li>废除技能:' + disabledSkillsList;
												}
											}
											if (config.tempSkills) {
												var tempSkillsList = [];
												if (JSON.stringify(config.tempSkills) == '{}') {
													str += '<li>暂时技能:无';
												} else {
													for (var x in config.tempSkills) {
														tempSkillsList.push(lib.translate[x]);
													}
													str += '<li>暂时技能:' + tempSkillsList;
												}
											}
											if (config.awakenedSkills) {
												var awakenedSkillsList = [];
												for (var x = 0; x < config.awakenedSkills.length; x++) {
													awakenedSkillsList.push(lib.translate[config.awakenedSkills[x]]);
												}
												str += '<li>觉醒移除:' + (awakenedSkillsList.length ? awakenedSkillsList : '无');
											}
											//状态
											if (config.className) {
												str += '<br>武将状态:';
												var cn = 0;
												var className = config.className.split(/\s+/g);
												for (var x = 0; x < className.length; x++) {
													var classx = className[x];
													if (classx == 'fullskin2') {
														str += '双将';
														cn++;
													}
													if (classx == 'linked') {
														str += '横置';
														cn++;
													}
													if (classx == 'linked2') {
														str += '横置';
														cn++;
													}
													if (classx == 'turnedover') {
														str += '翻面';
														cn++;
													}
													if (classx == 'out') {
														str += '离开';
														cn++;
													}
													if (classx == 'dead') {
														str += '死亡';
														cn++;
													}
													if (classx == 'unseen') {
														str += '主将暗置';
														cn++;
													}
													if (classx == 'unseen2') {
														str += '副将暗置';
														cn++;
													}
												}
												if (cn == 0) {
													str += '无特殊状态';
												}
											}
											//卡牌
											var cardList = [];
											for (var x = 0; x < config.getCards.length; x++) {
												cardList.push((config.getCards[x][3] ? lib.translate[config.getCards[x][3]] : '') + lib.translate[config.getCards[x][0]] + '【' + lib.translate[config.getCards[x][1]] + config.getCards[x][2] + '】');
											}
											str += '<li>记录卡牌:' + (cardList.length ? cardList : '无');
										}
										str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">' + str + '</div>';
										var next = dialog.add(str);
										next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
										next.firstChild.link = i;
										Object.setPrototypeOf(next, lib.element.Button.prototype);
										dialog.buttons.add(next.firstChild);
									}
									return dialog;
								},
								filter(button) {
									if (ui.selected.buttons.length && typeof button.link == typeof ui.selected.buttons[0].link) return false;
									return true;
								},
								select: 2,
								backup(links, player) {
									if (typeof links[0] != 'string') links.reverse();
									var backup = get.copy(lib.skill['zero_shilv_' + links[0]]);
									backup.config = links[1];
									setTimeout(function () {
										game.resume();
									}, 1000);
									return backup;
								},
								prompt(links, player) {
									if (typeof links[0] == 'string') return links[0];
									else return links[1];
								},
							},
							group: 'zero_shilv_start',
							subSkill: {
								file: {
									forced: true,
									content() {
										'step 0';
										var obj = {};
										var today = new Date(),
											month = today.getMonth() + 1,
											year = today.getFullYear(),
											day = today.getDate(),
											hour = today.getHours(),
											minute = today.getMinutes();
										second = today.getSeconds();
										obj.today = {
											year: year,
											month: month,
											day: day,
											hour: hour,
											minute: minute,
											second: second,
										};
										var List = ['hp', 'maxHp', 'sex', 'className', 'name', 'name1', 'name2', 'group', 'storage', 'skipList', 'hujia', 'skills', 'additionalSkills', 'hiddenSkills', 'forbiddenSkills', 'disabledSkills', 'tempSkills', 'awakenedSkills', 'phaseNumber'];
										for (var i = 0; i < List.length; i++) {
											if (List[i] != 'storage') {
												obj[List[i]] = player[List[i]];
											} else {
												var storage = Object.assign({}, player.storage);
												for (var x in storage) {
													if (['player', 'players', 'card', 'cards'].includes(get.itemtype(storage[x]))) {
														delete storage[x];
													}
												}
												obj.storage = storage;
											}
										}
										var cards = player.getCards('he');
										obj.getCards = [];
										for (var i = 0; i < cards.length; i++) {
											obj.getCards.push([cards[i].name, cards[i].suit, cards[i].number, cards[i].nature || null, player.countCards('e', cards[i].name) ? true : false]);
										}
										var config = lib.skill.zero_shilv_backup.config;
										game.saveConfig('TL_huisu' + config, obj);
										game.log(player, '覆盖了存档' + config);
									},
								},
								load: {
									forced: true,
									content() {
										'step 0';
										var config = lib.skill.zero_shilv_backup.config;
										if (!lib.config['TL_huisu' + config] || JSON.stringify(lib.config['TL_huisu' + config]) == '{}') {
											alert('时旅\n存档' + config + '暂无数组!');
											return;
										} else {
											for (var mark in player.marks) {
												player.unmarkSkill(mark);
											}
											var obj = lib.config['TL_huisu' + config];
											for (var i in obj) {
												if (i != 'today' && i != 'getCards') {
													player[i] = obj[i];
												}
												if (i == 'skills') {
													for (var skill of obj[i]) {
														player.addSkillTrigger(skill);
													}
												}
											}
											for (var mark in player.storage) {
												if (lib.skill[mark] && (lib.skill[mark].mark || lib.skill[mark].marktext)) {
													player.markSkill(mark);
												}
											}
											var cards = obj.getCards;
											for (var i = 0; i < cards.length; i++) {
												if (!lib.card[cards[i][0]]) continue;
												var card = game.createCard(cards[i][0], cards[i][1], cards[i][2], cards[i][3]);
												if (cards[i][4] == false) {
													player.gain(card)._triggered = null;
												} else {
													player.equip(card)._triggered = null;
												}
											}
											game.log(player, '读取了存档' + config);
											player.node.avatar.setBackground(player.name1 || player.name, 'character');
											player.node.name.innerHTML = get.slimName(player.name);
											if (player.name2 && lib.character[player.name2] && player.classList.contains('fullskin2')) {
												player.node.avatar2.show();
												player.node.name2.innerHTML = get.slimName(player.name2);
												player.node.avatar2.setBackground(player.name2, 'character');
											}
											if (!player.name2 && player.classList.contains('fullskin2')) {
												delete player.singleHp;
												player.node.avatar2.hide();
												player.node.name2.innerHTML = '';
												player.classList.remove('fullskin2');
											}
											player.discard(player.getCards('hej'))._triggered = null;
											player.update();
											game.saveConfig('TL_huisu' + config, {});
										}
									},
								},
								start: {
									trigger: {
										global: 'phaseBefore',
										player: ['enterGame', 'showCharacterAfter'],
									},
									filter(event, player) {
										if (get.mode() == 'guozhan') return event.name == 'showCharacter' && event.toShow;
										return event.name != 'showCharacter' && (event.name != 'phase' || game.phaseNumber == 0);
									},
									forced: true,
									content() {
										'step 0';
										var dialog = ui.create.characterDialog();
										var next = player.chooseButton();
										next.set('dialog', dialog);
										next.set('filterButton', function (button) {
											if (lib.filter.characterDisabled2(button.link) || lib.filter.characterDisabled(button.link)) return false;
											var list = [];
											game.countPlayer(function (current) {
												if (current.name) list.add(current.name);
												if (current.name1) list.add(current.name1);
												if (current.name2) list.add(current.name2);
											});
											if (player.storage.DIY_huashen && button.link == player.storage.DIY_huashen) return false;
											return !list.includes(button.link);
										});
										next.set('ai', function (button) {
											if (lib.rank.rarity.legend.includes(button.link)) return 2 * Math.random();
											if (lib.rank.rarity.epic.includes(button.link)) return Math.random();
											if (lib.rank.rarity.rare.includes(button.link)) return -Math.random();
											if (lib.rank.rarity.junk.includes(button.link)) return -2 * Math.random();
											return Math.random();
										});
										('step 1');
										game.broadcastAll('closeDialog', event.videoId);
										if (result.bool && result.links && result.links.length) {
											player.init(result.links[0], 'RE_yuanhuan');
										}
									},
								},
							},
							ai: {
								threaten: 3,
							},
						},
						zero_shengjie: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['useCard', 'respond'] },
							forced: true,
							firstDo: true,
							filter(event, player) {
								return event.card && !player.storage.zero_shengjie.includes(event.card.suit) && typeof event.card.number == 'number' && player.isPhaseUsing();
							},
							init(player) {
								player.storage.zero_shengjie = [];
							},
							mark: true,
							intro: {
								content: '已记录花色:$',
							},
							content() {
								'step 0';
								if (typeof trigger.card.number == 'number') player.draw(trigger.card.number);
								player.markAuto('zero_shengjie', [trigger.card.suit]);
								player.storage.zero_shengjie.add(trigger.card.suit);
								('step 1');
								if (player.storage.zero_shengjie.length >= 4) player.addSkill('zero_shengjie_chongzhi');
							},
							threaten: 4,
							subSkill: {
								chongzhi: {
									trigger: { player: 'phaseZhunbeiBegin' },
									forced: true,
									content() {
										if (player.storage.zero_shengjie.length >= 4) {
											player.storage.zero_shengjie = [];
											player.recover();
										}
										player.removeSkill('zero_shengjie_chongzhi');
									},
								},
							},
						},
						zero_qingsu: {
							mod: {
								maxHandcardFinal(player, num) {
									return 10 * game.players.length;
								},
							},
						},
						zero_luobai: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							juexingji: true,
							derivation: ['zero_chunsi'],
							filter(event, player) {
								return player.countCards('h') > 40;
							},
							content() {
								player.loseMaxHp();
								player.chooseToDiscard('he', 10, true);
								player.addSkill('zero_chunsi');
								player.awakenSkill('zero_luobai');
							},
						},
						zero_chunsi: {
							audio: 'ext:幻想志/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							selectCard: 10,
							filterTarget(card, player, target) {
								return player != target && !player.storage.zero_chunsi.includes(target);
							},
							init(player) {
								player.storage.zero_chunsi = [];
							},
							content() {
								'step 0';
								player.loseHp();
								('step 1');
								if (!player.storage.zero_chunsi) player.storage.zero_chunsi = [];
								player.storage.zero_chunsi.add(target);
								target.loseHp(target.maxHp);
							},
							check(card) {
								return 10 - get.value(card);
							},
							position: 'h',
							ai: {
								order: 8.5,
								result: {
									player(player) {
										return player.countCards('h') > 11 ? 1 : 0;
									},
									target(player, target) {
										return get.effect(target, { name: 'losehp' }, player, target);
									},
								},
							},
							threaten: 1.5,
						},
						zero_juezi: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: 'phaseBefore', player: 'enterGame' },
							forced: true,
							charlotte: true,
							fixed: true,
							filter(event, player) {
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							content() {
								player.draw(Math.max(3, game.players.length)).gaintag = ['zero_juezi_tag'];
							},
							mod: {
								ignoredHandcard(card) {
									if (card.hasGaintag('zero_juezi_tag')) {
										return true;
									}
								},
							},
							group: ['zero_juezi_draw', 'zero_juezi_damage', 'zero_juezi_begin'],
							subSkill: {
								draw: {
									trigger: { player: 'phaseDrawAfter' },
									forced: true,
									charlotte: true,
									fixed: true,
									filter: (event, player) => event.cards && event.cards.length, //QQQ
									content() {
										player.addGaintag(trigger.cards, 'zero_juezi_tag');
									},
								},
								damage: {
									trigger: { player: 'damageBegin1' },
									forced: true,
									firstDo: true,
									_priority: 15,
									charlotte: true,
									filter(event, player) {
										return event.source && player.hasCard((card) => card.hasGaintag('zero_juezi_tag'), 'h');
									},
									content() {
										'step 0';
										player
											.chooseToDiscard('h', '###绝资###弃置一张〖资〗使' + get.translation(trigger.source) + '对你造成的伤害改为视为对你造成伤害')
											.set('filterCard', (card) => card.hasGaintag('zero_juezi_tag'))
											.set('ai', function (card) {
												return 9 - get.value(card);
											});
										('step 1');
										if (result.bool) {
											trigger.untrigger(true);
											trigger.unreal = true;
											trigger.goto(4);
										} else {
											event.finish();
										}
									},
								},
								begin: {
									trigger: { player: 'phaseBegin' },
									charlotte: true,
									fixed: true,
									filter(event, player) {
										return player.hasCard((card) => card.hasGaintag('zero_juezi_tag'), 'h');
									},
									check(event, player) {
										return false;
									},
									prompt: '是否发动〖绝资〗？',
									prompt2: '你可以重新定义〖资〗的点数.',
									content() {
										'step 0';
										event.cards = player.getCards('h', (card) => card.hasGaintag('zero_juezi_tag'));
										('step 1');
										var dialog = ui.create.dialog('绝资', 'hidden');
										dialog.addText('需要选择的点数(提示:点击点数选择卡牌或点击卡牌再选择点数)<br>');
										var table = document.createElement('div');
										table.classList.add('add-setting');
										table.style.margin = '0';
										table.style.width = '100%';
										table.style.position = 'relative';
										for (var i = 1; i < 14; i++) {
											var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
											td.innerHTML = '<span>' + get.cnNumber(i) + '</span>';
											td.link = i;
											td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
											Object.setPrototypeOf(td, lib.element.Button.prototype);
											table.appendChild(td);
											dialog.buttons.add(td);
										}
										dialog.content.appendChild(table);
										dialog.addText('当前要操作的卡牌<br>');
										dialog.add([event.cards.shift()]);
										var next = player.chooseButton();
										next.set('dialog', dialog);
										next.set('ai', function (button) {
											return Math.random();
										});
										next.set('filterButton', function (button) {
											if (ui.selected.buttons.length && typeof button.link == typeof ui.selected.buttons[0].link) return false;
											return true;
										});
										next.set('selectButton', 2);
										('step 2');
										if (result.links) {
											if (get.itemtype(result.links[0]) == 'card') {
												result.links[0].init({
													name: result.links[0].name,
													suit: result.links[0].suit,
													nature: result.links[0].nature,
													number: result.links[1],
												});
											} else {
												if (get.itemtype(result.links[1]) == 'card')
													result.links[1].init({
														name: result.links[1].name,
														suit: result.links[1].suit,
														nature: result.links[1].nature,
														number: result.links[0],
													});
											}
										}
										if (event.cards.length) event.goto(1);
										while (ui.dialogs.length) {
											ui.dialogs[0].close();
										}
										ui.clear();
									},
								},
							},
						},
						zero_wucuo: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'damageSource' },
							forced: true,
							charlotte: true,
							fixed: true,
							content() {
								'step 0';
								if (player.countCards('h')) {
									player.showHandcards();
									event.cards = player.getCards('h');
								} else {
									event.goto(2);
								}
								('step 1');
								var arr = [];
								for (var i of event.cards) {
									arr.add(i.number);
								}
								var arrange = function (arr) {
									var result = [],
										temp = [];
									arr.sort(function (source, dest) {
										return source - dest;
									})
										.concat(Infinity)
										.reduce(function (source, dest) {
											temp.push(source);
											if (dest - source > 1) {
												result.push(temp);
												temp = [];
											}
											return dest;
										});
									return result;
								};
								var arrays = arrange(arr),
									discards = [];
								for (var i of arrays) {
									if (i.length == 1) {
										discards = discards.concat(i);
									}
								}
								player.discard(player.getCards('h', (card) => discards.includes(card.number)));
								('step 2');
								var cards = player.getCards('h'),
									cards2 = [],
									numbers = [];
								for (var i of cards) {
									if (!numbers.includes(i.number)) numbers.add(i.number);
								}
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									var card = ui.cardPile.childNodes[i];
									if (!numbers.includes(card.number)) {
										numbers.add(card.number);
										cards2.push(card);
									}
									if (numbers.length >= 13) {
										break;
									}
								}
								if (cards2.length) player.gain(cards2, 'gain2');
								('step 3');
								player.addTempSkill('zero_wucuo_effect');
								player.chooseToUse();
							},
							subSkill: {
								effect: {
									mod: {
										cardUsable: () => Infinity,
										targetInRange: () => true,
									},
									trigger: { player: 'useCard1' },
									silent: true,
									charlotte: true,
									popup: false,
									firstDo: true,
									content() {
										if (trigger.addCount !== false) {
											trigger.addCount = false;
											player.getStat().card[trigger.card.name]--;
										}
										player.removeSkill('zero_wucuo_effect');
									},
								},
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
											if (!target.hasFriend()) return;
											if (player.hp >= 3) return [1, 3];
											if (player.hp == 2) return [1, 2.5];
											if (player.hp == 1) return [1, 1.5];
										}
									},
								},
							},
						},
						zero_guxing: {
							audio: 'ext:幻想志/audio:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							charlotte: true,
							fixed: true,
							hiddenCard(player, name) {
								var gongbeilist = [2, 4, 6, 8, 10, 12];
								if (player.countCards('h', (card) => card.number % 2 == 0)) return true;
								if (player.countCards('h', (card) => gongbeilist.includes(card.number))) return true;
								return false;
							},
							filter(event, player) {
								var heshulist = [4, 6, 8, 9, 10, 12],
									cifanglist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
									gongbeilist = [2, 4, 6, 8, 10, 12],
									gongyinlist = [1, 2, 3, 4, 6, 12];
								if (player.countCards('h', (card) => heshulist.includes(card.number))) return true;
								if (player.countCards('h', (card) => cifanglist.includes(card.number))) return true;
								if (player.countCards('h', (card) => gongbeilist.includes(card.number))) return true;
								if (player.countCards('h', (card) => gongyinlist.includes(card.number))) return true;
								if (player.countCards('h', (card) => card.number % 2 == 0)) return true;
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var dialog = ui.create.dialog('孤星', 'hidden');
									var list = [],
										heshulist = [4, 6, 8, 9, 10, 12],
										cifanglist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
										gongbeilist = [2, 4, 6, 8, 10, 12],
										gongyinlist = [1, 2, 3, 4, 6, 12];
									if (player.countCards('h', (card) => card.number % 2 == 0)) {
										for (var name of lib.inpile) {
											if (get.type2(name) != 'basic') continue;
											if (event.filterCard && event.filterCard({ name: name }, player, event)) {
												list.push(['basic', '', name]);
												if (name == 'sha') {
													for (var j of lib.inpile_nature) list.push(['basic', '', name, j]);
												}
											}
										}
										if (list.length) {
											dialog.addText('基本牌');
											dialog.add([list, 'vcard']);
										}
									}
									var list2 = [];
									if (player.countCards('h', (card) => heshulist.includes(card.number))) {
										for (var name of lib.inpile) {
											if (get.type2(name) != 'trick') continue;
											var info = get.info({ name: name });
											if (event.filterCard && event.filterCard({ name: name }, player, event)) {
												if (get.select(info.selectTarget)[0] == -1 && !info.toself && lib.translate[name + '_info'].indexOf('对自己使用') == -1) list2.push(['trick', '', name]);
											}
										}
										if (list2.length) {
											dialog.addText('群体锦囊牌');
											dialog.add([list2, 'vcard']);
										}
									}
									var list4 = [];
									if (player.countCards('h', (card) => gongbeilist.includes(card.number))) {
										for (var name of lib.inpile) {
											if (get.type(name) != 'trick') continue;
											var info = get.info({ name: name });
											if (event.filterCard && event.filterCard({ name: name }, player, event)) {
												if (get.select(info.selectTarget)[0] != -1 || info.toself || lib.translate[name + '_info'].includes('对自己使用')) list4.push(['trick', '', name]);
											}
										}
										if (list4.length) {
											dialog.addText('单体锦囊牌');
											dialog.add([list4, 'vcard']);
										}
									}
									var list3 = [];
									if (player.countCards('h', (card) => cifanglist.includes(card.number))) {
										for (var name of lib.inpile) {
											if (get.type(name) != 'delay') continue;
											var info = get.info({ name: name });
											if (event.filterCard && event.filterCard({ name: name }, player, event)) {
												list3.push(['trick', '', name]);
											}
										}
										if (list3.length) {
											dialog.addText('延时锦囊牌');
											dialog.add([list3, 'vcard']);
										}
									}
									var list5 = [];
									if (player.countCards('h', (card) => gongyinlist.includes(card.number))) {
										for (var name of lib.inpile) {
											if (get.type(name) != 'equip') continue;
											var info = get.info({ name: name });
											if (event.filterCard && event.filterCard({ name: name }, player, event)) {
												list5.push(['equip', '', name]);
											}
										}
										if (list5.length) {
											dialog.addText('装备牌');
											dialog.add([list5, 'vcard']);
										}
									}
									return dialog;
								},
								check(button) {
									var player = _status.event.player;
									var name = button.link[2];
									var evt = _status.event.parent;
									if (get.type(name) == 'basic') {
										if (name == 'shan') return 2;
										if (evt.type == 'dying') {
											if (get.attitude(player, evt.dying) < 2) return false;
											if (name == 'jiu') return 2.1;
											return 1.9;
										}
										if (evt.type == 'phase') return player.getUseValue({ name: name, nature: button.link[3] });
										return 1;
									}
									if (!['chuqibuyi', 'shuiyanqijunx', 'juedou', 'nanman', 'wanjian', 'shunshou', 'zhujinqiyuan'].includes(name)) return 0;
									var card = { name: name };
									if (['shunshou', 'zhujinqiyuan'].includes(card.name)) {
										if (
											!game.hasPlayer(function (current) {
												return get.attitude(player, current) != 0 && get.distance(player, current) <= 1 && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
											})
										)
											return 0;
										return player.getUseValue(card) - 7;
									}
									return player.getUseValue(card) - 4;
								},
								backup(links, player) {
									return {
										selectCard: 1,
										filterCard(card) {
											if (get.type(links[0][2]) == 'basic') return card.number % 2 == 0;
											var heshulist = [4, 6, 8, 9, 10, 12],
												cifanglist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
												gongbeilist = [2, 4, 6, 8, 10, 12],
												gongyinlist = [1, 2, 3, 4, 6, 12];
											var info = get.info({ name: links[0][2] });
											if (get.type(links[0][2]) == 'trick') {
												if (get.select(info.selectTarget)[0] == -1 && !info.toself) return heshulist.includes(card.number);
												return gongbeilist.includes(card.number);
											}
											if (get.type(links[0][2]) == 'delay') return cifanglist.includes(card.number);
											return gongyinlist.includes(card.number);
										},
										popname: true,
										position: 'h',
										check(card) {
											return 8 - get.value(card);
										},
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											var name = event.result.card.name;
											var info1 = lib.card[name];
											var cards = [event.result.cards[0]];
											if (info1 && get.type(name) == 'equip') {
												var info = {
													enable: true,
													type: 'equip',
													subtype: get.subtype(event.result.card.name),
													cardimage: cards[0].name,
													filterTarget(card, player, target) {
														return target == player;
													},
													compound: true,
													selectTarget: -1,
													modTarget: true,
													toself: true,
													content: lib.element.content.equipCard,
													legend: true,
													source: [cards[0].name, name],
													onEquip: [],
													onLose: [
														function () {
															var info = Object.assign(lib.card[card.name]);
															delete lib.card[card.name];
															delete lib.translate[card.name];
															delete lib.translate[card.name + '_info'];
															card.init(Object.assign(info, { name: info.source[0], nature: card.nature, suit: card.suit, number: card.number }));
														},
													],
													skills: [],
													distance: {},
													ai: {
														order: 8.9,
														equipValue: 10,
														useful: 2.5,
														value: 1,
														result: {
															target(player, target) {
																return get.equipResult(player, target, name);
															},
														},
													},
												};
												if (typeof info1.distance === 'object' && info1.distance !== null) Object.assign(info.distance, info1.distance);
												if (info1.skills) {
													info.skills = info.skills.concat(info1.skills);
												}
												if (info1.onEquip) {
													if (Array.isArray(info1.onEquip)) {
														info.onEquip = info.onEquip.concat(info1.onEquip);
													} else {
														info.onEquip.push(info1.onEquip);
													}
												}
												if (info1.onLose) {
													if (Array.isArray(info1.onLose)) {
														info.onLose = info.onLose.concat(info1.onLose);
													} else {
														info.onLose.push(info1.onLose);
													}
												}
												if (info.onEquip.length == 0) delete info.onEquip;
												if (info.onLose.length == 0) delete info.onLose;
												var newName = 'qyCreateCard_' + get.id() + '_' + name;
												var changename = get.translation(cards[0].name).slice(0, 2) + '·' + get.translation(name).slice(0, 4);
												lib.card[newName] = info;
												lib.translate[newName] = changename;
												lib.translate[newName + '_info'] = get.translation(name, 'info');
												try {
													game.addVideo('newcard', null, {
														name: name,
														translate: lib.translate[newName],
														info: lib.translate[newName + '_info'],
														// card:name.name,
														legend: true,
													});
												} catch (e) {
												}
												var card = cards[0].init({
													name: newName,
													suit: cards[0].suit,
													nature: cards[0].nature,
													number: cards[0].number,
												});
												if (lib.config.background_audio) {
													game.playAudio('../audio/card', player.sex, name);
												}
												game.addVideo('equip', player, get.cardInfo(card));
												//player.useCard(card, player);
											}
										},
									};
								},
								prompt(links, player) {
									return '你可以将点数为偶数的牌当做一张基本牌使用,将点数为12的公因数的牌当做一张装备牌使用,将点数为2的公倍数的牌当做一张单体锦囊使用,将点数为合数的牌当做一张群体锦囊使用,将点数的次方不大于100的牌当做延时锦囊使用.';
								},
							},
							ai: {
								respondSha: true,
								respondShan: true,
								save: true,
								skillTagFilter(player, tag, arg) {
									return player.countCards('h', (card) => card.number % 2 == 0);
								},
								threaten: 8,
								order: 2,
								result: {
									player: 1,
								},
							},
							group: 'zero_guxing_effect',
							subSkill: {
								effect: {
									audio: 'ext:幻想志/audio:2',
									trigger: { player: ['phaseJudgeBefore', 'phaseDiscardBefore'] },
									forced: true,
									charlotte: true,
									fixed: true,
									filter(event, player, name) {
										if (event.name == 'phaseJudge') return player.getCards('h', (card) => card.number % 2 == 1).length;
										return player.getCards('h', (card) => lib.skill.zero_guxing_effect.isPrimeNumn(card.number)).length;
									},
									isPrimeNumn(num) {
										if (!lib.skill.zero_guxing_effect.isDual(num)) {
											return false;
										}
										for (var i = 2; i < num / 2 + 1; i++) {
											if (num % i == 0) {
												return false;
											}
										}
										return true;
									},
									isDual(num) {
										var num = num.toString();
										var lastNum = num.substring(num.length - 1, num.length);
										return lastNum % 2 == 0 || lastNum % 5 == 0 ? false : true;
									},
									content() {
										'step 0';
										switch (trigger.name) {
											case 'phaseJudge':
												player
													.chooseCard('你可以打出一张点数为奇数的牌跳过判定阶段')
													.set('ai', function (card) {
														var player = _status.event.player;
														if (player.countCards('j') <= 0) return 0;
														return 9 - get.value(card);
													})
													.set('filterCard', function (card) {
														return card.number % 2 == 1;
													});
												break;
											case 'phaseDiscard':
												player
													.chooseCard('你可以打出一张点数为质数的牌跳过弃牌阶段')
													.set('ai', function (card) {
														var player = _status.event.player,
															num = player.needsToDiscard();
														if (num <= 0) return 0;
														return 9 - get.value(card);
													})
													.set('filterCard', function (card) {
														return lib.skill.zero_guxing_effect.isPrimeNumn(card.number);
													});
												break;
										}
										('step 1');
										if (result.bool) {
											trigger.cancel();
											switch (trigger.name) {
												case 'phaseJudge':
													player.respond(result.cards, 'highlight', 'noOrdering');
													game.log(player, '跳过了判定阶段');
													break;
												case 'phaseDiscard':
													player.respond(result.cards, 'highlight', 'noOrdering');
													game.log(player, '跳过了弃牌阶段');
													break;
											}
										}
									},
								},
							},
						},
						zero_jiuniao: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['useCard', 'respond'] },
							filter(event, player) {
								return event.card.number == 9;
							},
							prompt2(event, player) {
								let count = player.storage.zero_youjie + 9;
								if (typeof count == 'number') {
									return '你可以摸' + get.cnNumber(count) + '张牌.';
								}
								return null;
							},
							mark: true,
							intro: {
								content(storage, player) {
									var num2 = player.storage.zero_youjie + 9;
									if (typeof num2 == 'number') return '当你使用或打出点数为9的牌时,你可以摸' + get.cnNumber(num2) + '张牌';
								},
							},
							forced: true,
							charlotte: true,
							fixed: true,
							content() {
								let count = player.storage.zero_youjie + 9;
								if (typeof count == 'number') {
									player.draw(count);
									player.gainMaxHp();
									player.update();
								}
							},
							ai: {
								threaten: 8,
							},
						},
						zero_youjie: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['changeHp', 'loseMaxHpAfter'] },
							filter(event, player, name) {
								if (player.hasSkill('zero_youjie_used')) return false;
								if (name == 'changeHp') return event.num < 0;
								return true;
							},
							init(player) {
								player.storage.zero_youjie = 0;
							},
							forced: true,
							charlotte: true,
							fixed: true,
							content() {
								player.drawTo(9);
								player.storage.zero_youjie++;
								player.addTempSkill('zero_youjie_used', 'roundStart');
							},
							subSkill: {
								used: { charlotte: true },
							},
						},
						zero_lengguang: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['useCard', 'respond'] },
							charlotte: true,
							fixed: true,
							forced: true,
							filter(event, player) {
								var suit = event.card.suit;
								if (suit == 'diamond') {
									return get.type(event.card) == 'basic';
								}
								return suit == 'heart' || suit == 'club' || suit == 'spade';
							},
							content() {
								var suit = trigger.card.suit;
								if (suit == 'heart') {
									trigger.effectCount++;
									game.log(trigger.card, '额外结算一次');
								} else if (suit == 'club' && event.triggername != 'respond') {
									trigger.directHit.addArray(game.filterPlayer());
								} else if (suit == 'spade') {
									if (get.tag(trigger.card, 'damage') > 0) {
										trigger.baseDamage += 2;
									}
								} else {
									trigger.baseDamage++;
								}
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.card && arg.card.suit == 'club') return true;
									return false;
								},
							},
						},
						zero_jiunyu: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'phaseJieshuBegin' },
							check(event, player) {
								return player.maxHp > 2 && player.countCards('h') < 3;
							},
							content() {
								var card = get.cardPile2(function (card) {
									return card.number == 9;
								});
								if (card) {
									var list = get.cards(1);
									list.add(card);
									player.gain(list, 'draw');
									player.loseMaxHp();
								}
							},
						},
						zero_pianxiang: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: ['changeHpBefore', 'gainMaxHpBefore', 'loseMaxHpBefore'] },
							forced: true,
							charlotte: true,
							fixed: true,
							intro: {
								name: '业',
								name2: '业',
								content: 'mark',
							},
							marktext: '业',
							init(player) {
								game.zero_guzhenzhen = 0;
								player.storage.zero_pianxiang = 0;
								lib.onover.push(function (resultbool) {
									if (_status.guzhenzhen) return;
									if (game.zero_guzhenzhen >= 5) return;
									if (!game.hasPlayer2((current) => current.hasSkill('zero_pianxiang'))) return;
									var guzhenzhen = game.filterPlayer2((current) => current.hasSkill('zero_pianxiang'));
									if (confirm('检测到顾真真在场,要发动【洋片箱】反转游戏结果吗？') && guzhenzhen[0] == game.me) {
										while (ui.dialogs.length) {
											ui.dialogs[0].close();
										}
										ui.clear();
										_status.over = false;
										_status.guzhenzhen = true;
										setTimeout(function () {
											ui.window.style.transition = 'all 0.5s';
											ui.window.classList.add('zoomout3');
											ui.window.delete();
											ui.window.hide();
											setTimeout(function () {
												ui.window.classList.remove('zoomout3');
												ui.window.classList.add('zoomin3');
												document.body.appendChild(ui.window);
												ui.updatehl();
												ui.window.show();
												ui.window.classList.remove('zoomin3');
											}, 500);
										}, 100);
										if (resultbool) game.over(resultbool == false ? true : false);
										else game.over(true);
									} else {
										while (ui.dialogs.length) {
											ui.dialogs[0].close();
										}
										ui.clear();
										_status.over = false;
										_status.guzhenzhen = true;
										setTimeout(function () {
											ui.window.style.transition = 'all 0.5s';
											ui.window.classList.add('zoomout3');
											ui.window.delete();
											ui.window.hide();
											setTimeout(function () {
												ui.window.classList.remove('zoomout3');
												ui.window.classList.add('zoomin3');
												document.body.appendChild(ui.window);
												ui.updatehl();
												ui.window.show();
												ui.window.classList.remove('zoomin3');
											}, 500);
										}, 100);
										if (resultbool) game.over(resultbool == false ? true : false);
										else game.over(true);
									}
								});
							},
							filter(event, player) {
								return event.num != 0 && game.zero_guzhenzhen < 30 && event.player.isAlive() && event.player.isIn() && event.parent.name != 'zero_pianxiang';
							},
							content() {
								'step 0';
								var str = '是否反转' + get.translation(trigger.player);
								if (event.triggername == 'changeHpBefore') str += trigger.num < 0 ? '体力减少事件' : '体力增加事件';
								if (event.triggername == 'gainMaxHpBefore') str += '体力增加事件';
								if (event.triggername == 'loseMaxHpBefore') str += '体力减少事件';
								player.chooseBool(str);
								('step 1');
								if (result.bool) {
									game.zero_guzhenzhen++;
									player.addMark('zero_pianxiang', 1);
									trigger.cancel();
									switch (event.triggername) {
										case 'changeHpBefore':
											trigger.player.changeHp(-trigger.num);
											trigger.player.update();
											break;
										case 'gainMaxHpBefore':
											trigger.player.loseMaxHp(trigger.num);
											break;
										case 'loseMaxHpBefore':
											trigger.player.gainMaxHp(trigger.num);
											break;
									}
								}
							},
							group: ['zero_pianxiang_gain', 'zero_pianxiang_die', 'zero_pianxiang_changecard'],
							subSkill: {
								gain: {
									audio: 'ext:幻想志/audio:2',
									trigger: { global: ['equipAfter', 'loseAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'] },
									forced: true,
									charlotte: true,
									fixed: true,
									filter(event, player, name) {
										if (event.name != 'gain') {
											var evt = event.getl(event.player);
											if (!evt || !evt.cards2 || !evt.cards2.length) return false;
										}
										return game.zero_guzhenzhen < 25 && event.parent.name != 'zero_pianxiang_gain' && event.player.isAlive();
									},
									content() {
										'step 0';
										player.chooseBool(event.triggername != 'gainAfter' ? '是否反转' + get.translation(trigger.player) + '失去牌事件' : '是否反转' + get.translation(trigger.player) + '获得牌事件');
										('step 1');
										if (result.bool) {
											game.zero_guzhenzhen++;
											player.addMark('zero_pianxiang', 1);
											event.iscardPile = true;
											game.filterPlayer(function (current) {
												var evt = trigger.getl(current);
												if (evt && evt.cards2 && evt.cards2.length) {
													current.gain(evt.cards2, 'gain2');
													event.iscardPile = false;
												}
											});
											if (event.iscardPile) {
												game.cardsGotoOrdering(trigger.cards);
												//game.cardsDiscard(trigger.cards);
											}
										}
										('step 2');
										ui.updatehl();
									},
								},
								die: {
									audio: 'ext:幻想志/audio:2',
									forced: true,
									charlotte: true,
									fixed: true,
									forceDie: true,
									trigger: { global: ['dieAfter', 'reviveAfter'] },
									forced: true,
									filter(event, player) {
										return game.zero_guzhenzhen < 20 && event.parent.name != 'zero_pianxiang_die';
									},
									content() {
										'step 0';
										player.chooseBool(event.triggername == 'dieAfter' ? '是否反转' + get.translation(trigger.player) + '死亡事件' : '是否反转' + get.translation(trigger.player) + '复活事件');
										('step 1');
										if (result.bool) {
											game.zero_guzhenzhen++;
											player.addMark('zero_pianxiang', 1);
											if (event.triggername == 'dieAfter') {
												trigger.player.revive();
											} else {
												trigger.player.die(trigger);
											}
										}
									},
								},
								changecard: {
									audio: 'ext:幻想志/audio:2',
									trigger: { global: 'useCard1' },
									filter(event, player) {
										return event.player && event.targets && !event.targets.includes(player) && event.player.isAlive();
									},
									forced: true,
									charlotte: true,
									fixed: true,
									forceDie: true,
									content() {
										'step 0';
										player.chooseBool('是否反转' + get.translation(trigger.player) + '使用的' + get.translation(trigger.card.name) + '目标？');
										('step 1');
										if (result.bool) {
											game.zero_guzhenzhen++;
											player.addMark('zero_pianxiang', 1);
											var target = trigger.targets[0],
												player2 = [trigger.player];
											trigger.targets = player2;
											trigger.player = target;
										}
									},
								},
							},
						},
						zero_yehuo: {},
						zero_liqun: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'phaseAfter' },
							forced: true,
							charlotte: true,
							fixed: true,
							filter(event, player) {
								return player.getHistory('useCard').length == 0 && player.isIn();
							},
							content() {
								'step 0';
								if (player.isIn() && (!_status.zero_liqun_return || !_status.zero_liqun_return[player.playerid])) {
									event.reserveOut = true;
									game.log(player, '移出了游戏');
									if (!_status.zero_liqun_return) _status.zero_liqun_return = {};
									_status.zero_liqun_return[player.playerid] = 1;
								}
								('step 1');
								if (event.reserveOut) {
									game.broadcastAll(function (player, list) {
										player.classList.add('out');
									}, player);
									player.addSkill('undist');
								}
								('step 2');
								if (!game.countPlayer()) game.over();
							},
							ai: {
								effect: {
									player(card, player) {
										if (player.getHistory('useCard').length >= 0 && !player.hasSkill('zero_kuangxue')) return [1, -25];
										if (player.getHistory('useCard').length) return [1, -15];
									},
								},
							},
							group: ['zero_liqun_return'],
							subSkill: {
								return: {
									trigger: { player: 'phaseBefore' },
									forced: true,
									charlotte: true,
									fixed: true,
									silent: true,
									forceOut: true,
									filter(event, player) {
										return !event._zero_liqun_return && event.player.isOut() && _status.zero_liqun_return[event.player.playerid];
									},
									content() {
										trigger._zero_liqun_return = true;
										game.broadcastAll(function (player) {
											player.classList.remove('out');
										}, trigger.player);
										game.log(trigger.player, '移回了游戏');
										delete _status.zero_liqun_return[trigger.player.playerid];
										player.removeSkill('undist');
									},
								},
							},
							mod: {
								globalFrom(from, to, distance) {
									return distance + 99;
								},
								globalTo(from, to, distance) {
									return distance + 99;
								},
							},
						},
						zero_baijiang: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: ['logSkill', 'useSkillAfter', 'dieAfter'] },
							forced: true,
							charlotte: true,
							fixed: true,
							juexingji: true,
							derivation: ['zero_kuangxue'],
							filter(event, player, name) {
								if (name == 'dieAfter') return true;
								if (event.type != 'player') return false;
								var skill = event.sourceSkill || event.skill;
								var info = get.info(skill);
								if (info.charlotte || info.superCharlotte || info.zhuSkill) return false;
								var list = get.skillCategoriesOf(skill);
								if (list.includes('锁定技')) return list.length > 1;
								return list.length;
							},
							content() {
								'step 0';
								player.awakenSkill('zero_baijiang');
								player.addSkillLog('zero_kuangxue');
								('step 1');
								lib.translate['zero_liqun_info'] = '<span class="bluetext" style="color: #6699FF">锁定技</span>,其他角色使用的第X张及后续的卡牌不能指定你为目标并取消后续结算,你的体力变动时,若其数不小于X+1,取消结算.(X为你上回合使用牌的数量).';
								lib.skill.zero_liqun = {
									audio: 'ext:幻想志/audio:2',
									trigger: { player: ['changeHpBefore', 'loseMaxHpBefore'], target: 'useCardToTargeted' },
									forced: true,
									charlotte: true,
									fixed: true,
									filter(event, player, name) {
										var num = 0,
											all = player.getAllHistory(),
											num2 = event.player.getHistory('useCard').length;
										if (all.length > 1) {
											for (var i = all.length - 2; i >= 0; i--) {
												if (all[i].isMe) {
													num += all[i].useCard.length;
													break;
												}
											}
										}
										if (name == 'useCardToTargeted') return num2 >= num && event.player != player;
										return Math.abs(event.num) >= num + 1;
									},
									content() {
										'step 0';
										if (event.triggername == 'useCardToTargeted') {
											trigger.parent.excluded.add(player);
										} else {
											trigger.cancel();
										}
										('step 1');
										player.update();
									},
									mod: {
										targetEnabled(card, player, target) {
											var num = 0,
												all = target.getAllHistory(),
												num2 = player.getHistory('useCard').length;
											if (all.length > 1) {
												for (var i = all.length - 2; i >= 0; i--) {
													if (all[i].isMe) {
														num += all[i].useCard.length;
														break;
													}
												}
											}
											if (num2 >= num && player != target) {
												return false;
											}
										},
									},
									ai: {
										effect: {
											player(card, player) {
												if (player.getHistory('useCard').length) return [1, -15];
											},
											target(card, player, target, current) {
												var num = 0,
													all = target.getAllHistory(),
													num2 = player.getHistory('useCard').length;
												if (all.length > 1) {
													for (var i = all.length - 2; i >= 0; i--) {
														if (all[i].isMe) {
															num += all[i].useCard.length;
															break;
														}
													}
												}
												if (num2 >= num) return 'zeroplayertarget';
											},
										},
									},
								};
								('step 2');
								game.broadcastAll(function (player) {
									player.removeSkillTrigger('zero_liqun');
									player.addSkillTrigger('zero_liqun');
								}, player);
							},
							ai: {
								threaten: 8,
							},
						},
						zero_kuangxue: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['phaseZhunbeiBegin', 'phaseJieshuBegin', 'damageEnd'] },
							forced: true,
							charlotte: true,
							fixed: true,
							naturesDamage() {
								var list = Array.from(lib.nature.keys()),
									str = '';
								for (var s of list) {
									str += s + lib.natureSeparator;
								}
								str = str.slice(0, -1);
								return str;
							},
							content() {
								'step 0';
								player.chooseTarget(lib.filter.notMe, get.prompt('zero_kuangxue'), '选择一名其他角色对其造成一点全属性伤害,根据其体力值执行对应效果').set('ai', function (target) {
									var player = _status.event.player;
									return get.damageEffect(target, player, player, 'fire') || get.damageEffect(target, player, player, 'thunder') || get.damageEffect(target, player, player, 'ice');
								});
								('step 1');
								if (result.bool) {
									var target = result.targets[0];
									target.damage(lib.skill.zero_kuangxue.naturesDamage());
									target.update();
									event.target = target;
								} else event.finish();
								('step 2');
								('step 3');
								//不知道为啥用Switch函数算出来的体力不对,用这个蠢办法了(
								if (event.target.hp <= 0) {
									event.finish();
									return;
								} else {
									if (event.target.hp == 1) {
										game.log(event.target.hp, '1');
										var skills = event.target.getSkills(null, false, false).filter(function (skill) {
											var info = get.info(skill);
											if (!info || info.charlotte || info.superCharlotte || info.fixed) return false;
											if (player.hasSkill(skill)) return false;
											var list = get.skillCategoriesOf(skill);
											return list.length == 0;
										});
										if (skills.length) player.addSkillLog(skills);
										else event.target.damage(lib.skill.zero_kuangxue.naturesDamage());
										event.finish();
										return;
									} else if (event.target.hp == 2) {
										game.log(event.target.hp, '2');
										player.gain(event.target.getCards('hejsx'));
										event.target.$give(event.target.getCards('hejsx'), player);
										event.target.link();
										event.finish();
										return;
									} else if (event.target.hp == 3) {
										game.log(event.target.hp, '3');
										event.goto(4);
									} else if (event.target.hp == 4) {
										player.draw(4);
										event.target.damage(lib.skill.zero_kuangxue.naturesDamage());
										event.finish();
										return;
									} else {
										game.log(event.target.hp, '5');
										player.hp = event.target.hp;
										player.maxHp = event.target.maxHp;
										player.update();
										event.target.hp = 0;
										event.target.maxHp = 0;
										event.target.update();
										if (event.target.maxHp == 0) event.target.die();
										event.finish();
										return;
									}
								}
								('step 4');
								event.skills = [];
								if (!_status.characterlist) {
									lib.skill.pingjian.initList();
								}
								_status.characterlist.randomSort();
								var name2 = event.triggername;
								for (var i = 0; i < _status.characterlist.length; i++) {
									var name = _status.characterlist[i];
									if (name.includes('zuoci') || name.includes('xushao') || name == 'jlsgsoul_sp_xushao') continue;
									var skills2 = lib.character[name][3];
									for (var j = 0; j < skills2.length; j++) {
										if (player.hasSkill(skills2[j])) continue;
										if (event.skills.includes(skills2[j])) continue;
										var list2 = [skills2[j]];
										game.expandSkills(list2);
										for (var k = 0; k < list2.length; k++) {
											var info = lib.skill[list2[k]];
											if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
											if (info.trigger.player == name2 || (Array.isArray(info.trigger.player) && info.trigger.player.includes(name2))) {
												if (info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
												if (info.filter) {
													try {
														var bool = info.filter(trigger, player, name2);
														if (!bool) continue;
													} catch (e) {
														continue;
													}
												}
												event.skills.add(skills2[j]);
												break;
											}
										}
										if (event.skills.includes(skills2[j])) {
											break;
										}
									}
								}
								('step 5');
								if (event.skills.length <= 6) {
									var dialog = ui.create.dialog();
									dialog.add('请选择一个技能发动<br><br>');
									for (var i = 0; i < event.skills.length; i++) {
										if (lib.translate[event.skills[i] + '_info']) {
											var translation = get.translation(event.skills[i]);
											translation = translation.slice(0, 2);
											dialog.add('<div><div class="skill">【' + translation + '】</div><div>' + lib.translate[event.skills[i] + '_info'] + '</div></div>');
										}
									}
									event.skills.push('再不选没了!');
									player
										.chooseControl(event.skills)
										.set('ai', function () {
											if (Math.random() > 0.7) return 'kongdongyin';
											return Math.floor(Math.random() * event.skills.length);
										})
										.set('dialog', dialog);
								} else {
									var skillx = event.skills.randomRemove(6);
									skillx.push('不要这些!');
									var dialog = ui.create.dialog();
									dialog.add('请选择一个技能发动<br><br>');
									for (var i = 0; i < skillx.length; i++) {
										if (lib.translate[skillx[i] + '_info']) {
											var translation = get.translation(skillx[i]);
											translation = translation.slice(0, 2);
											dialog.add('<div><div class="skill">【' + translation + '】</div><div>' + lib.translate[skillx[i] + '_info'] + '</div></div>');
										}
									}
									player
										.chooseControl(skillx)
										.set('ai', function () {
											return Math.floor(Math.random() * skillx.length);
										})
										.set('dialog', dialog);
								}
								('step 6');
								if (result.control == '不要这些!') {
									event.goto(5);
								} else if (result.control == '再不选没了!') {
									event.finish();
								} else {
									var removeT = 'damageAfter';
									if (event.triggername == 'phaseJieshuBegin') {
										removeT = 'phaseJieshu';
									} else if (event.triggername == 'phaseZhunbeiBegin') {
										removeT = 'phaseZhunbei';
									}
									player.addTempSkill(result.control, removeT);
								}
							},
						},
						zero_huoyuan: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'damageEnd' },
							forced: true,
							filter(event, player) {
								return _status.currentPhase != player && event.source && !player.hasSkill('zero_huoyuan_round');
							},
							content() {
								'step 0';
								if (event.parent.types && event.parent.types == 'zero_shiyuan') {
									event.goto(1);
								} else {
									player.draw(trigger.source.hp);
									player.addTempSkill('zero_huoyuan_round', 'roundStart');
									if (!player.storage.zero_huoyuan) {
										player.storage.zero_huoyuan = [];
										player.storage.zero_huoyuan.add(trigger.source);
									} else {
										player.storage.zero_huoyuan.add(trigger.source);
									}
								}
								('step 1');
								if (event.parent.nums) {
									event.num = event.parent.nums;
								} else {
									event.set('num', trigger.source.hp);
								}
								if (event.parent.types && event.parent.types == 'zero_shiyuan') {
									var list,
										skills = [];
									if (_status.characterlist) {
										list = [];
										for (var i = 0; i < _status.characterlist.length; i++) {
											var name = _status.characterlist[i];
											if (lib.character[name][1] == 'shen') list.push(name);
										}
									} else if (_status.connectMode) {
										list = get.charactersOL(function (i) {
											return lib.character[i][1] != 'shen';
										});
									} else {
										list = get.gainableCharacters(function (info) {
											return info[1] == 'shen';
										});
									}
									var players = game.players.concat(game.dead);
									for (var i = 0; i < players.length; i++) {
										list.remove(players[i].name);
										list.remove(players[i].name1);
										list.remove(players[i].name2);
									}
									list = list.randomGets(Math.min(lib.skill.zero_shiyuan.getSkills(player).length, list.length));
									for (var i of list) {
										skills.addArray(lib.character[i][3] || []);
									}
								} else {
									var skills = trigger.source.getSkills(null, false, false).filter(function (i) {
										var info = get.info(i);
										return info && !info.charlotte && !info.superCharlotte && !info.fixed;
									}),
										list = [];
									if (trigger.source.name) list.add(trigger.source.name);
									if (trigger.source.name1) list.add(trigger.source.name1);
									if (trigger.source.name2) list.add(trigger.source.name2);
								}
								game.log(skills.length);
								for (var i = 0; i < skills.length; i++) {
									if (player.hasSkill(skills[i])) skills.splice(i--, 1);
								}
								if (event.num > skills.length) {
									for (var i of skills) {
										if (!player.hasSkill(i)) {
											player.addSkillLog(i);
										}
									}
									event.finish();
									return;
								}
								if (!skills.length) {
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
										skills: skills.randomGets(event.num),
									};
									if (event.dialog) event.dialog.close();
									if (event.control) event.control.close();
								};
								var chooseButton = function (list, skills) {
									var event = _status.event;
									if (!event._result) event._result = {};
									event._result.skills = [];
									var rSkill = event._result.skills;
									var dialog = null;
									dialog = ui.create.dialog('请选择获得至多' + get.cnNumber(event.num) + '个技能', [list, 'character'], 'hidden');
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
									dialog.add('　　');
									dialog.open();
									event.switchToAuto = function () {
										event.dialog.close();
										event.control.close();
										game.resume();
										_status.imchoosing = false;
									};
									event.control = ui.create.control('ok', function (link) {
										event.dialog.close();
										event.control.close();
										game.resume();
										_status.imchoosing = false;
									});
									for (var i = 0; i < event.dialog.buttons.length; i++) {
										event.dialog.buttons[i].classList.add('selectable');
									}
									game.pause();
									game.countChoose();
								};
								if (event.isMine()) {
									chooseButton(list, skills);
								} else if (event.isOnline()) {
									event.player.send(chooseButton, list, skills);
									event.player.wait();
									game.pause();
								} else {
									switchToAuto();
								}
								('step 2');
								var map = event.result || result;
								if (map && map.skills && map.skills.length) {
									for (var i of map.skills) {
										if (!player.hasSkill(i)) {
											player.addSkillLog(i);
										}
									}
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
											if (target.hasSkill('zero_huoyuan_round')) return;
											if (player.hp >= 4) return [1, 3];
											if (player.hp == 3) return [1, 2.5];
											if (player.hp == 2) return [1, 1.5];
										}
									},
								},
							},
						},
						zero_huoyuan_round: { charlotte: true },
						zero_xusu: {
							audio: 'ext:幻想志/audio:2',
							trigger: { source: 'damageBegin2' },
							forced: true,
							filter(event, player) {
								if (player.storage.zero_huoyuan) return player != event.player && player.storage.zero_huoyuan.includes(event.player);
								return false;
							},
							content() {
								if (!player.storage.zero_xusu) player.storage.zero_xusu = 0;
								if (player.storage.zero_xusu % 2 == 0) {
									player.storage.zero_xusu++;
									trigger.cancel();
								} else {
									trigger.num *= 2;
									player.storage.zero_xusu++;
								}
							},
						},
						zero_shiyuan: {
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							juexingji: true,
							filter(event, player) {
								return lib.skill.zero_shiyuan.getSkills(player).length > 7;
							},
							getSkills(player) {
								return player.skills.filter((s) => lib.translate[s] && lib.translate[s + '_info'] && lib.skill[s] && !lib.skill[s].nopopup && !lib.skill[s].equipSkill);
							},
							content() {
								'step 0';
								player.awakenSkill('zero_shiyuan');
								player.storage.zero_shiyuan = true;
								player.loseMaxHp();
								player.draw(lib.skill.zero_shiyuan.getSkills(player).length);
								('step 1');
								var next = player.useSkill('zero_huoyuan');
								next.set('nums', 2);
								next.set('types', 'zero_shiyuan');
							},
						},
						zero_yunyao: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'shaBefore' },
							filter(event, player) {
								return event.getParent(2).name != 'zero_yunyao';
							},
							forced: true,
							charlotte: true,
							fixed: true,
							logTarget: 'target',
							content() {
								'step 0';
								trigger.cancel();
								('step 1');
								trigger.target.addTempSkill('zero_yunyao_nohujia');
								event.nature = [null, 'fire', 'thunder', 'ice', 'stab', 'poison', 'kami'];
								('step 2');
								var natures = event.nature.shift();
								var card = {
									name: 'sha',
									nature: natures,
								};
								if (trigger.target.isIn() && player.canUse(card, trigger.target, false) && trigger.target.isAlive()) player.useCard(card, trigger.target, false);
								if (event.nature.length && trigger.target.isAlive()) event.redo();
								('step 3');
								if (trigger.target.isAlive()) trigger.target.removeSkill('zero_yunyao_nohujia');
								player.loseHp();
							},
							ai: {
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (arg && arg.name == 'sha') return true;
									return false;
								},
								effect: {
									player(card, player, target) {
										if (card.name == 'sha') return [1, 2];
									},
								},
							},
							subSkill: {
								nohujia: {
									ai: {
										charlotte: true,
										nohujia: true,
									},
								},
							},
						},
						zero_diting: {
							audio: 'ext:幻想志/audio:2',
							forced: true,
							charlotte: true,
							fixed: true,
							group: ['zero_diting_discard', 'zero_diting_miss', 'zero_diting_damage', 'zero_diting_dying'],
							subSkill: {
								discard: {
									audio: 'ext:幻想志/audio:2',
									trigger: { global: ['loseAfter', 'loseAsyncAfter'] },
									filter(event, player) {
										if (event.type != 'discard' || event.getlx === false) return false;
										var cards = event.cards.slice(0);
										var evt = event.getl(player);
										if (evt && evt.cards) cards.removeArray(evt.cards);
										for (var i = 0; i < cards.length; i++) {
											if (cards[i].original != 'j' && get.position(cards[i], true) == 'd') {
												return cards[i].name == 'sha';
											}
										}
										return false;
									},
									forced: true,
									usable: 3,
									content() {
										'step 0';
										if (trigger.delay == false) game.delay();
										('step 1');
										var cards = [],
											cards2 = trigger.cards.slice(0),
											evt = trigger.getl(player);
										if (evt && evt.cards) cards2.removeArray(evt.cards);
										for (var i = 0; i < cards2.length; i++) {
											if (cards2[i].original != 'j' && cards2[i].name == 'sha' && get.position(cards2[i], true) == 'd') {
												cards.push(cards2[i]);
											}
										}
										if (cards.length) {
											player.chooseButton(['###谛听###选择要获得的牌', cards], [1, cards.length]).set('ai', function (button) {
												return get.value(button.link, _status.event.player, 'raw');
											});
										}
										('step 2');
										if (result.bool) {
											player.gain(result.links, 'gain2', 'log');
										}
									},
								},
								miss: {
									audio: 'ext:幻想志/audio:2',
									shaRelated: true,
									trigger: { global: 'shaMiss' },
									forced: true,
									usable: 3,
									content() {
										player.addSkill('zero_diting_add');
									},
								},
								damage: {
									audio: 'ext:幻想志/audio:2',
									trigger: { global: 'damageEnd' },
									filter(event, player) {
										return event.source && (event.player.isIn() || event.source.isIn()) && event.num > 0;
									},
									forced: true,
									usable: 3,
									content() {
										'step 0';
										var list = [];
										if (trigger.source.isAlive() && trigger.source.countCards('hejs') > 0) {
											list.push('弃置伤害来源角色' + get.translation(trigger.source) + '等量张牌并摸等量张牌');
											var att1 = get.attitude(player, trigger.source);
										}
										if (trigger.player.isAlive() && trigger.player.countCards('hejs') > 0) {
											list.push('弃置受到伤害的角色' + get.translation(trigger.player) + '等量张牌并摸等量张牌');
											var att2 = get.attitude(player, trigger.player);
										}
										var bool = 0;
										if (att1 && att2) {
											if (att1 > 0 && att2 < 0) bool = 1;
										}
										if (list.length == 0) {
											player.draw(trigger.num);
											event.finish();
										} else {
											player
												.chooseControl()
												.set('choiceList', list)
												.set('prompt', '###谛听###请选择一项')
												.set('ai', () => {
													return _status.event.bool;
												})
												.set('bool', bool);
										}
										('step 1');
										if (result.index == 0) {
											player.line(trigger.source);
											player.discardPlayerCard(trigger.source, trigger.num, 'hejs', true);
											player.draw(trigger.num);
										} else {
											player.line(trigger.player);
											player.discardPlayerCard(trigger.player, trigger.num, 'hejs', true);
											player.draw(trigger.num);
										}
									},
									ai: {
										expose: 0.3,
									},
								},
								dying: {
									audio: 'ext:幻想志/audio:2',
									trigger: { global: 'dying' },
									_priority: 15,
									forced: true,
									checkx(event, player) {
										return get.attitude(player, event.player) > 0 || event.player == player;
									},
									preHidden: true,
									usable: 3,
									content() {
										'step 0';
										var str = trigger.player == player ? '你可以将一张【杀】弃置,取消此次濒死结算,将自己的体力设置为一' : '你可以将一张【杀】弃置,取消此次濒死结算,将' + get.translation(trigger.player) + '的体力设置为一';
										var next = player.chooseToDiscard('hes', { name: 'sha' }, str);
										var check = lib.skill.beige.checkx(trigger, player);
										next.set('ai', function (card) {
											if (_status.event.goon) return 12 - get.value(card);
											return 0;
										});
										next.set('goon', check);
										next.setHiddenSkill('zero_diting_dying');
										('step 1');
										if (result.bool) {
											player.line(trigger.player);
											trigger.player.hp = 1;
											trigger.player.update();
										} else {
											event.finish();
										}
									},
									ai: {
										expose: 0.3,
									},
								},
								add: {
									trigger: { player: 'useCard1' },
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										trigger.baseDamage++;
										player.removeSkill('zero_diting_add');
									},
								},
							},
						},
						zero_mengmo: {
							audio: 'ext:幻想志/audio:4',
							init(player) {
								player.originDie = lib.element.player.die;
								player.originDying = lib.element.player.dying;
								player.originPhaseJudge = lib.element.player.phaseJudge;
								player.originPhaseDraw = lib.element.player.phaseDraw;
								player.originPhaseDiscard = lib.element.player.phaseDiscard;
								player.phaseJudge = function () {
									var next = game.createEvent('zero_mengmo_cancel');
									next._triggered = null;
									next.notrigger = true;
									next.setContent(function () { });
									return next;
								};
								player.phaseDraw = function () {
									var next = game.createEvent('zero_mengmo_cancel');
									next._triggered = null;
									next.notrigger = true;
									next.setContent(function () { });
									return next;
								};
								player.phaseDiscard = function () {
									var next = game.createEvent('zero_mengmo_cancel');
									next._triggered = null;
									next.notrigger = true;
									next.setContent(function () { });
									return next;
								};
								player.die = function (reason) {
									if (this.hasMark('zero_mengmo')) return;
									var next = game.createEvent('die');
									next.player = this;
									next.reason = reason;
									if (reason) next.source = reason.source;
									next.restMap = { type: null, count: null, audio: null };
									next.excludeMark = [];
									next.setContent('die');
									return next;
								};
								player.nodying - true;
								player.dying = function (reason) {
									if (this.hasMark('zero_mengmo')) return;
									if (this.nodying || this.hp > 0 || this.isDying()) return;
									var next = game.createEvent('dying');
									next.player = this;
									next.reason = reason;
									if (reason && reason.source) next.source = reason.source;
									next.setContent('dying');
									next.filterStop = function () {
										if (this.player.hp > 0 || this.nodying) {
											delete this.filterStop;
											return true;
										}
									};
									return next;
								};
							},
							onremove(player) {
								player.die = player.originDie;
								player.nodying - true;
								player.dying = player.originDying;
								player.phaseJudge = player.originPhaseJudge;
								player.phaseDraw = player.originPhaseDraw;
								player.phaseDiscard = player.originPhaseDiscard;
								if (player.maxHp <= 0) {
									player.die();
								} else {
									if (player.hp <= 0) player.dying();
								}
							},
							mark: true,
							marktext: '梦末',
							intro: {
								mark(dialog, storage, player) {
									dialog.addText('共有' + (storage || 0) + '个标记');
								},
							},
							trigger: { global: 'phaseBefore', player: ['enterGame', 'phaseUseBefore'] },
							forced: true,
							charlotte: true,
							fixed: true,
							filter(event, player, name) {
								if (name == 'phaseUseBefore') return true;
								return event.name != 'phase' || game.phaseNumber == 0;
							},
							content() {
								'step 0';
								if (event.triggername != 'phaseUseBefore') {
									player.addMark('zero_mengmo', 10, false);
									event.finish();
								} else {
									trigger.cancel();
									var num = Math.max(player.countMark('zero_mengmo') * 2, 2);
									event.cards = game.cardsGotoOrdering(get.cards(num)).cards.slice();
								}
								('step 1');
								player
									.chooseCardButton(event.cards, '###梦末###请选择要使用的牌', [1, 1])
									.set('filterButton', function (button) {
										var card = button.link;
										return player.hasUseTarget(card, null, true);
									})
									.set('ai', function (button) {
										var card = button.link;
										return player.getUseValue(card, null, true);
									});
								('step 2');
								if (player.isIn() && result.bool) {
									event.cards.remove(result.links[0]);
									player.chooseUseTarget(result.links[0], true, false, 'nodistance').set('filterTarget', function (card, player, target) {
										return lib.filter.targetEnabledx(result.links[0], player, target);
									});
									if (event.cards.length) event.goto(1);
								}
							},
							group: 'zero_mengmo_changehp',
							subSkill: {
								changehp: {
									trigger: { player: ['changeHp', 'loseMaxHpAfter'] },
									charlotte: true,
									forced: true,
									filter(event, player) {
										if (!game.phaseNumber || game.phaseNumber == 0) return false;
										if (player.hasMark('zero_mengmo')) return false;
										return player.hp <= 0 || !player.maxHp <= 0;
									},
									content() {
										if (!player.hasMark('zero_mengmo')) {
											lib.skill.zero_mengmo.onremove(player);
											if (player.maxHp <= 0) {
												player.die();
											} else {
												if (player.hp <= 0) player.dying();
											}
										}
									},
								},
							},
						},
						zero_yuejuan: {
							audio: 'ext:幻想志/audio:4',
							trigger: { player: 'phaseBegin' },
							charlotte: true,
							fixed: true,
							prompt: '阅卷:是否弃置一枚〖梦末〗标记？',
							prompt2: '你可以弃置一枚〖梦末〗标记,你选择一种颜色并选择y名其他角色,你选择执行一项:①弃置其所有与选择颜色一样的手牌并对其造成z点伤害(z为因此弃置的牌数量且至少为一).②跳过其下次摸牌和出牌阶段.(y为10-〖梦末〗标记数量且至少为一).',
							check(event, player) {
								return false;
							},
							filter(event, player) {
								return player.hasMark('zero_mengmo') && game.countPlayer((current) => current != player) > 0;
							},
							content() {
								'step 0';
								if (!event.parent.types || event.parent.types != 'zero_zhongri') player.removeMark('zero_mengmo', 1);
								if (!player.hasMark('zero_mengmo')) {
									lib.skill.zero_mengmo.onremove(player);
									if (player.maxHp <= 0) {
										player.die();
									} else {
										if (player.hp <= 0) player.dying();
									}
								}
								player
									.chooseControl('红色', '黑色')
									.set('ai', function () {
										var players = game.filterPlayer(function (current) {
											return current != player;
										});
										let red = 0,
											black = 0;
										for (var player of players) {
											red += player.countCards('h', { color: 'red' });
											black += player.countCards('h', { color: 'black' });
										}
										if (red > black) return '红色';
										return '黑色';
									})
									.set('prompt', '###阅卷###请选择一种颜色');
								('step 1');
								event.control = result.control;
								let num = 10 - player.countMark('zero_mengmo');
								if (typeof num == 'number' && num > 0 && game.countPlayer((current) => current != player) > 0) {
									player.chooseTarget(get.prompt2('zero_yuejuan'), [1, num], true, lib.filter.notMe).set('ai', function (target) {
										var player = _status.event.player,
											att = get.attitude(player, target);
										return -6 * att;
									});
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									event.targets = result.targets;
								} else {
									event.finish();
								}
								('step 3');
								event.target = event.targets.shift();
								player
									.chooseControl()
									.set('choiceList', ['弃置其所有与选择颜色一样的手牌并对其造成z点伤害(z为因此弃置的牌数量且至少为一).', '跳过其下次摸牌和出牌阶段.'])
									.set('prompt', '###阅卷###请为' + get.translation(event.target) + '选择一项')
									.set('ai', function () {
										var player = _status.event.player,
											target = _status.event.targetx,
											choice = _status.event.choicex;
										if ((choice = '红色')) {
											if (target.countCards('h', { color: 'red' }) > 1) return 0;
										} else {
											if (target.countCards('h', { color: 'black' }) > 1) return 0;
										}
										return 1;
									})
									.set('targetx', event.target)
									.set('choicex', event.control);
								('step 4');
								if (result.index == 0) {
									player.line(event.target);
									if (event.control == '红色') {
										var cards = event.target.getCards('h', { color: 'red' });
									} else {
										var cards = event.target.getCards('h', { color: 'black' });
									}
									if (cards.length) event.target.discard(cards);
									event.target.damage(Math.max(cards.length, 1));
								} else {
									player.line(event.target);
									event.target.skip('phaseDraw');
									event.target.skip('phaseUse');
								}
								if (event.targets.length) event.goto(3);
							},
						},
						zero_zhongri: {
							audio: 'ext:幻想志/audio:4',
							charlotte: true,
							fixed: true,
							forced: true,
							trigger: { global: 'roundStart' },
							filter(event, player) {
								if (!game.phaseNumber || game.phaseNumber == 0) return false;
								return player.hasMark('zero_mengmo');
							},
							content() {
								'step 0';
								player.removeMark('zero_mengmo', 1);
								if (game.countPlayer((current) => current != player) > 0) {
									var next = player.useSkill('zero_yuejuan');
									next.set('types', 'zero_zhongri');
								}
								('step 1');
								player.phaseUse();
							},
						},
						zero_taojiao: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'phaseBegin' },
							forced: true,
							filter(event, player) {
								if (player != _status.currentPhase) return false;
								return true;
							},
							content() {
								'step 0';
								event.targets = game
									.filterPlayer(function (current) {
										return current != player;
									})
									.sortBySeat();
								('step 1');
								var target = event.targets.shift();
								target.addTempSkill('fengyin');
								target.addTempSkill('zero_taojiao_hand');
								if (event.targets.length) event.redo();
							},
							ai: {
								threaten: 1.5,
							},
							subSkill: {
								hand: {
									charlotte: true,
									mark: true,
									intro: { content: '不能使用或打出手牌' },
									mod: {
										cardEnabled2: () => false,
									},
								},
							},
						},
						zero_bingsi: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: ['changeHp', 'loseMaxHpAfter'] },
							forced: true,
							content() {
								'step 0';
								player.draw(3);
								('step 1');
								player.chooseToDiscard('h', true);
							},
							ai: {
								threaten: 3,
							},
						},
						zero_yinyu: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['changeHpBefore', 'loseMaxHpBefore'] },
							forced: true,
							charlotte: true,
							filter(event, player) {
								return !player.isLinked() || !player.isTurnedOver();
							},
							content() {
								'step 0';
								var list = ['翻面', '横置', '取消'];
								if (player.isLinked()) list.remove('横置');
								if (player.isTurnedOver()) list.remove('翻面');
								player
									.chooseControl(list)
									.set('prompt', '###阴郁:你可以选择翻面或横置###你的体力发生了变动,你可以改为翻面或横置.令其他一名角色执行相同的结算')
									.set(
										'choice',
										(function () {
											if (list.includes('横置')) return '横置';
											return list.randomGet();
										})()
									)
									.set('ai', () => _status.event.choice);
								('step 1');
								if (result.control == '取消') {
									event.finish();
								} else {
									trigger.cancel();
									event.choice = result.control;
									if (result.control == '横置') player.link();
									if (result.control == '翻面') player.turnOver();
								}
								('step 2');
								var str = '选择一名角色令其执行';
								if (event.choice == '翻面') str += '翻面';
								else str += '横置';
								player
									.chooseTarget(true, lib.filter.notMe, str)
									.set('ai', function (target) {
										var player = _status.event.player,
											att = get.attitude(player, target);
										if (_status.event.choice == '翻面') {
											if (target.isTurnedOver()) return 10 * att;
											return -6 * att;
										} else {
											if (target.isLinked()) return 5 * att;
											return -3 * att;
										}
									})
									.set('choice', event.choice);
								('step 3');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target, 'green');
									if (event.choice == '横置') target.link();
									if (event.choice == '翻面') target.turnOver();
								}
							},
						},
						zero_kuangluan: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['turnOverEnd', 'linkEnd', 'showCharacterEnd', 'hideCharacterEnd', 'removeCharacterEnd'] },
							forced: true,
							charlotte: true,
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.draw(player.countCards('h'));
								('step 1');
								player.showHandcards();
								var next = player.chooseCard('h', '###狂乱###你可以将每一种花色弃置至一张令其他角色执行相同的结算(提示:选择卡牌保留,其他全部弃置)');
								next.set('filterCard', function (card, target, player) {
									for (var i = 0; i < ui.selected.cards.length; i++) {
										if (card.suit == ui.selected.cards[i].suit) return false;
									}
									return true;
								});
								next.set('selectCard', function () {
									var cards = _status.event.player.get('h');
									var suits = [];
									for (var i = 0; i < cards.length; i++) {
										if (!suits.includes(cards[i].suit)) suits.push(cards[i].suit);
									}
									return suits.length;
								});
								next.set('ai', function (card) {
									return get.value(card);
								});
								('step 2');
								if (result.bool) {
									var cards = result.cards,
										he = [],
										hs = player.get('h');
									he = he.concat(hs);
									for (var i = 0; i < cards.length; i++) {
										he.remove(cards[i]);
									}
									if (he.length) player.discard(he);
								} else {
									event.finish();
								}
								('step 3');
								event.cards = [];
								var players = game
									.filterPlayer(function (current) {
										return current != player;
									})
									.sortBySeat(player.next);
								event.players = players;
								('step 4');
								event.target = event.players.shift();
								if (event.target.countCards('h') > 0) event.target.draw(event.target.countCards('h'));
								if (event.target.countCards('h') <= 0) event.redo();
								('step 5');
								event.target.showHandcards();
								var next = event.target.chooseCard('h', '###狂乱###将每一种花色弃置至一张否则令' + get.translation(player) + '获得你所有的手牌(提示:选择卡牌保留,其他全部弃置)');
								next.set('filterCard', function (card, target, player) {
									for (var i = 0; i < ui.selected.cards.length; i++) {
										if (card.suit == ui.selected.cards[i].suit) return false;
									}
									return true;
								});
								next.set('selectCard', function () {
									var cards = _status.event.player.get('h');
									var suits = [];
									for (var i = 0; i < cards.length; i++) {
										if (!suits.includes(cards[i].suit)) suits.push(cards[i].suit);
									}
									return suits.length;
								});
								next.set('ai', function (card) {
									var cards = _status.event.player.get('h');
									var suits = [];
									for (var i = 0; i < cards.length; i++) {
										if (!suits.includes(cards[i].suit)) suits.push(cards[i].suit);
									}
									if (cards.length > 4) return get.value(card);
									if (suits.length > 2) return get.value(card);
									return 0;
								});
								('step 6');
								if (result.bool) {
									var cards = result.cards,
										he = [],
										hs = event.target.get('h');
									he = he.concat(hs);
									for (var i = 0; i < cards.length; i++) {
										he.remove(cards[i]);
									}
									if (he.length) event.target.discard(he);
									event.cards = event.cards.concat(he);
								} else {
									player.gain(event.target.get('h'), event.target, 'giveAuto');
								}
								if (event.players.length) event.goto(4);
								('step 7');
								if (event.cards.length) player.gain(event.cards, 'gain2');
							},
						},
						zero_qingmi: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'useCard' },
							forced: true,
							charlotte: true,
							filter(event, player) {
								if (!event.targets) return false;
								var targets = event.targets;
								for (var target of targets) {
									return target.isLinked() || target.isTurnedOver();
								}
								return false;
							},
							content() {
								var targets = trigger.targets,
									targets2 = [];
								for (var target of targets) {
									if (target.isLinked() || target.isTurnedOver()) targets2.add(target);
								}
								trigger.directHit.addArray(targets2);
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									return arg.target.isLinked() || arg.target.isTurnedOver();
								},
							},
							mod: {
								targetEnabled(card, player, target) {
									if ((player.isLinked() || player.isTurnedOver()) && player != target) return false;
								},
							},
						},
						zero_lingyu: {
							audio: 'ext:幻想志/audio:2',
							charlotte: true,
							mark: true,
							intro: { content: '和武将牌不是原始状态的角色视为在彼此的攻击范围内' },
							mod: {
								inRange(from, to) {
									if (to.isLinked() || to.isTurnedOver()) return true;
								},
								inRangeOf(from, to) {
									if (to.hasSkill('zero_lingyu') && (from.isLinked() || from.isTurnedOver())) return true;
								},
							},
							trigger: { player: 'useCard2' },
							filter(event, player) {
								if (!event.targets) return false;
								var info = get.info(event.card);
								if (info.type == 'equip') return false;
								if (info.type == 'delay') return false;
								return game.hasPlayer(function (current) {
									return current.isLinked() || current.isTurnedOver();
								});
							},
							forced: true,
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('zero_lingyu'), [1, Infinity], function (card, player, target) {
										if (!target.isLinked() && !target.isTurnedOver()) return false;
										var trigger = _status.event.getTrigger();
										return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.effect(target, _status.event.getTrigger().card, player, player);
									});
								('step 1');
								if (result.bool) {
									if (!event.isMine() && !event.isOnline()) game.delayx();
									event.targets = result.targets.sortBySeat();
								} else {
									event.finish();
								}
								('step 2');
								trigger.targets.addArray(event.targets);
							},
						},
						zero_xianyin: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: ['useCard', 'respond'] },
							forced: true,
							filter(event, player) {
								if (event.all_excluded) return false;
								return (
									player.countCards('h', (card) => {
										return card.name == 'wuxie';
									}) > 0 &&
									event.card &&
									get.type2(event.card) == 'basic'
								);
							},
							lastDo: true,
							content() {
								'step 0';
								player
									.chooseCard('你可以打出一张无懈可击使' + get.translation(trigger.player) + '的' + get.translation(trigger.card) + '无效')
									.set('ai', function (card) {
										var attitude = get.attitude(player, trigger.player);
										if (attitude == 0 || result == 0) return 0;
										if (attitude > 0) {
											return 0;
										} else {
											if (
												player.countCards('h', (card) => {
													return card.name == 'wuxie';
												}) > 1 ||
												(_status.event.cardx.name == 'sha' && _status.event.targetx == player)
											)
												return get.value(card);
											return 0;
										}
									})
									.set('filterCard', function (card) {
										var player = _status.event.player;
										var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
										if (mod2 != 'unchanged') return mod2 && card.name == 'wuxie';
										var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
										if (mod != 'unchanged') return mod && card.name == 'wuxie';
										return card.name == 'wuxie';
									})
									.set('cardx', trigger.card)
									.set('targetx', trigger.target);
								('step 1');
								if (result.bool) {
									player.respond(result.cards, 'highlight', 'noOrdering');
									if (event.triggername == 'useCard') trigger.cancel();
									else {
										trigger.cancel();
										trigger.parent.goto(0);
									}
								} else {
									event.finish();
								}
							},
							mod: {
								cardname(card, player, name) {
									if (card.name == 'shan') return 'wuxie';
								},
							},
						},
						zero_shuaishuaicong: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: 'useCard' },
							forced: true,
							filter(event, player) {
								return event.card && get.type2(event.card) == 'trick';
							},
							content() {
								player.draw();
							},
							ai: {
								threaten: 1.5,
							},
						},
						RE_weihui: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'damageBegin4' },
							filter(event, player) {
								return event.nature == 'fire';
							},
							_priority: -1,
							forced: true,
							content() {
								trigger.num++;
								if (player.storage.RE_zhaori && typeof player.storage.RE_zhaori == 'number') trigger.num += player.storage.RE_zhaori;
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (card.nature && card.nature == 'fire') return [1, -2];
										}
									},
								},
							},
						},
						RE_zhaori: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'phaseDrawBegin2' },
							check(event, player) {
								var num = game.countPlayer() + player.countCards('e');
								if (num < 3) return 0;
								if (player.storage.RE_zhaori && typeof player.storage.RE_zhaori == 'number' && player.storage.RE_zhaori > 2) return 0;
								return player.countCards('h') < 2;
							},
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								'step 0';
								var num = game.countPlayer() + player.countCards('e');
								trigger.num += num;
								player
									.chooseControl()
									.set('choiceList', ['本回合造成的伤害加倍.', '本回合内视作拥有【破军】与【行殇】.', '增加一点体力上限并回复两点体力.'])
									.set('ai', function () {
										var player = _status.event.player;
										if (player.hp < 2) return 2;
										if (_status.event.num < 5) return 2;
										var numx = player.countCards('hs', { name: 'sha' });
										if (num > 0) return 0;
										return Math.random() < 0.5 ? 1 : 0;
									})
									.set('num', num);
								('step 1');
								if (result.index == 0) {
									player.addTempSkill('RE_zhaori_buff', 'phaseAfter');
								} else if (result.index == 1) {
									player.addInvisibleSkill('repojun');
									player.addInvisibleSkill('rexingshang');
									player.addTempSkill('RE_zhaori_buff2', 'phaseAfter');
								} else {
									player.gainMaxHp();
									player.recover(2);
								}
								if (!player.storage.RE_zhaori) player.storage.RE_zhaori = 1;
								else player.storage.RE_zhaori++;
							},
							ai: {
								threaten: 1.5,
							},
							subSkill: {
								buff: {
									audio: 'ext:幻想志/audio:2',
									trigger: { source: 'damageBegin1' },
									forced: true,
									logTarget: 'player',
									filter(event, player) {
										return event.player && event.player.isAlive();
									},
									content() {
										trigger.num *= 2 * 1;
									},
								},
								buff2: {
									trigger: { player: 'phaseEnd' },
									forced: true,
									silent: true,
									content() {
										player.invisibleSkills.remove('repojun');
										player.invisibleSkills.remove('rexingshang');
									},
								},
							},
						},
						RE_yingbai: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: 'phaseAfter' },
							forced: true,
							filter(event, player) {
								return player.getStat('kill') > 0 && player.countCards('h') > 0;
							},
							content() {
								'step 0';
								player.chooseToDiscard([1, 4], '樱白:弃置至多4张手牌下回合造成的伤害增加这个数量').set('ai', function (card) {
									var player = _status.event.player;
									return 6 - get.value(card);
								});
								('step 1');
								if (result.bool) {
									player.addTempSkill('RE_yingbai_buff', { player: 'phaseAfter' });
									player.storage.RE_yingbai = result.cards.length;
								} else event.finish();
							},
							subSkill: {
								buff: {
									trigger: { source: 'damageBegin1' },
									forced: true,
									logTarget: 'player',
									filter(event, player) {
										return event.player && event.player.isAlive();
									},
									content() {
										trigger.num += player.storage.RE_yingbai;
									},
								},
							},
						},
						RE_guiting: {
							audio: 'ext:幻想志/audio:2',
							trigger: { source: 'damageBegin1' },
							forced: true,
							logTarget: 'player',
							filter(event, player) {
								return event.card && get.type2(event.card) == 'trick' && event.player && event.player.isAlive();
							},
							content() {
								trigger.num++;
							},
						},
						RE_shenyang: {
							audio: 'ext:幻想志/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter: (event, player) => game.hasPlayer((current) => lib.skill.RE_shenyang.filterTarget(null, player, current)),
							filterCard: true,
							selectCard: 1,
							check(card) {
								return 8 - get.value(card);
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('h') > 0;
							},
							selectTarget() {
								return get.cardNameLength(ui.selected.cards[0]);
							},
							filterOk() {
								return get.cardNameLength(ui.selected.cards[0]) == ui.selected.targets.length;
							},
							position: 'h',
							discard: false,
							lose: false,
							delay: false,
							multiline: true,
							multitarget: true,
							content() {
								'step 0';
								event.fes = cards[0];
								player.showCards(event.fes);
								event.current = targets;
								('step 1');
								event.target = event.current.shift();
								event.target
									.chooseCard('请选择要展示的牌', true)
									.set('ai', function (card) {
										var suit = _status.event.suit,
											player = _status.event.player;
										if (card.suit != suit.suit && player.countCards('h') > 2 && player.countCards('e') > 1) return 0;
										if (card.suit == suit.suit && player.countCards('h') <= 1 && player.countCards('e') < 2) return 0;
										return -get.value(card);
									})
									.set('suit', event.fes);
								('step 2');
								event.tes = result.cards[0];
								event.cards.add(event.tes);
								event.target.showCards(event.tes);
								('step 3');
								if (event.fes.suit != event.tes.suit) {
									if (event.target.countCards('h')) player.discardPlayerCard(true, event.target, 'h');
									if (event.target.countCards('e')) player.discardPlayerCard(true, event.target, 'e');
									if (event.target.countCards('j')) player.discardPlayerCard(true, event.target, 'j');
								} else {
									if (event.target.countGainableCards(player, 'he')) player.gainPlayerCard(event.target, true, 2, 'he');
								}
								if (event.current.length) event.goto(1);
								('step 4');
								player.gain(event.cards, 'giveAuto');
							},
							ai: {
								expose: 0.4,
								order: 10,
								result: {
									player(player, target) {
										return 2;
									},
									target(player, target) {
										return -target.countCards('h');
									},
								},
							},
						},
						RE_nuanrou: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'enterGame', global: 'phaseBefore' },
							forced: true,
							filter(event, player) {
								if (event.name == 'phase' && game.phaseNumber != 0) return false;
								return player.hasEnabledSlot(1);
							},
							content() {
								player.disableEquip(1);
							},
							mod: {
								targetInRange(card) {
									return true;
								},
								cardUsable(card, player, num) {
									if (player.getEquips(2).length) return Infinity;
								},
								cardname(card, player, name) {
									if (lib.card[card.name].subtype == 'equip1') return 'wuzhong';
								},
							},
							ai: {
								threaten: 2.2,
							},
						},
						RE_zongrang: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							juexingji: true,
							derivation: 'RE_zougong',
							filter(event, player) {
								return player.hp == 1 || player.countCards('h') == 0;
							},
							content() {
								player.awakenSkill('RE_zongrang');
								player.storage.RE_zongrang = true;
								player.loseMaxHp();
								player.draw(4);
								player.addSkill('RE_zougong');
								player.addSkill('RE_zongrang_buff');
							},
							subSkill: {
								buff: {
									trigger: { source: 'damageBegin1' },
									forced: true,
									logTarget: 'player',
									filter(event, player) {
										return event.player && event.player.isAlive();
									},
									content() {
										trigger.num++;
									},
								},
							},
						},
						RE_zougong: {
							audio: 'ext:幻想志/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return game.hasPlayer((current) => lib.skill.RE_zougong.filterTarget(null, player, current));
							},
							filterTarget(card, player, target) {
								return target != player && target.hasSex('male');
							},
							content() {
								target.addTempSkill('RE_mankai_buff2', 'phaseAfter');
								target.addTempSkill('fengyin', 'phaseAfter');
							},
							ai: {
								order: 13,
								result: {
									target(player, target) {
										return get.effect(target, { name: 'sha' }, player, target) + get.threaten(target);
									},
								},
							},
						},
						zero_chixie: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: 'phaseBefore', player: 'enterGame' },
							forced: true,
							filter(event, player) {
								return (event.name != 'phase' || game.phaseNumber == 0) && player.hasEquipableSlot(1) && !player.getEquips('zero_qiang').length;
							},
							content() {
								var card = game.createCard2('zero_qiang', 'spade', 12);
								player.$gain2(card, false);
								player.equip(card);
							},
							mod: {
								targetEnabled(card, player, target) {
									if (!player.inRange(target) && player != target) return false;
								},
								canBeGained(card, source, player) {
									if (player.getEquips('zero_qiang').includes(card)) return false;
								},
								canBeDiscarded(card, source, player) {
									if (player.getEquips('zero_qiang').includes(card)) return false;
								},
								canBeReplaced(card, player) {
									if (player.getEquips('zero_qiang').includes(card)) return false;
								},
								cardnature(card) {
									if (get.subtypes(card, false).includes('equip1')) return false;
								},
								cardDiscardable(card, player) {
									if (player.getEquips('zero_qiang').includes(card)) return false;
								},
								cardEnabled2(card, player) {
									if (player.getEquips('zero_qiang').includes(card)) return false;
								},
							},
							group: 'zero_chixie_blocker',
							subSkill: {
								blocker: {
									trigger: { player: ['loseBefore', 'disableEquipBefore'] },
									forced: true,
									filter(event, player) {
										if (event.name == 'disableEquip') return event.slots.includes('equip1');
										var cards = player.getEquips('zero_qiang');
										return event.cards && event.cards.some((card) => cards.includes(card));
									},
									content() {
										if (trigger.name == 'lose') {
											trigger.cards.removeArray(player.getEquips('zero_qiang'));
										} else {
											while (trigger.slots.includes('equip1')) trigger.slots.remove('equip1');
										}
									},
								},
							},
						},
						zero_yongzhe: {
							audio: 'ext:幻想志/audio:3',
							trigger: { player: 'damageEnd', source: 'damageSource' },
							forced: true,
							filter(event, player, name) {
								return (name == 'damageSource' && event.player.isAlive()) || (event.source && event.source != player && event.source.isIn());
							},
							logTarget(event, player) {
								return event.player == player ? event.source : event.player;
							},
							mod: {
								cardUsableTarget(card, player, target) {
									if (target.hasMark('zero_mowu') || player.hasSkill('zero_shajue_buff')) return true;
								},
							},
							forced: true,
							content() {
								if (trigger.source != player) trigger.source.addMark('zero_mowu', 1);
								else if (trigger.player != player) trigger.player.addMark('zero_mowu', 1);
							},
							group: 'zero_yongzhe_recover',
							subSkill: {
								recover: {
									trigger: { global: 'recoverBefore' },
									forced: true,
									firstDo: true,
									filter(event, player) {
										if ((event.player.hasMark('zero_mowu') || player.hasSkill('zero_shajue_buff')) && event.player != player && _status.currentPhase != player) return true;
										return false;
									},
									content() {
										trigger.cancel();
										game.log(trigger.player, '因为有<span class="bluetext" style="color: #FF8C00">魔物</span>标记,取消了回复体力~');
									},
								},
							},
						},
						zero_mowu: {
							marktext: '魔物',
							intro: {
								name2: '魔物',
								content: 'mark',
							},
						},
						zero_dangmo: {
							audio: 'ext:幻想志/audio:4',
							trigger: { source: 'damageBegin1' },
							forced: true,
							filter(event, player) {
								return event.player.hasMark('zero_mowu') || player.hasSkill('zero_shajue_buff');
							},
							content() {
								if (trigger.player.countMark('zero_mowu')) var num = Math.min(2, trigger.player.countMark('zero_mowu'));
								if (num && typeof num == 'number') {
									trigger.num += num;
									player.draw(2 * num);
									player.maxHp += num;
									player.recover(num);
									player.update();
								} else {
									trigger.num++;
									player.draw(2);
									player.maxHp++;
									player.recover();
									player.update();
								}
							},
						},
						zero_shajue: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'dieBegin' },
							limited: true,
							aanimationColor: 'thunder',
							content() {
								'step 0';
								trigger.cancel();
								player.awakenSkill('zero_shajue');
								player.maxHp = 1;
								player.hp = 1;
								player.update();
								('step 1');
								var num = 0;
								for (var target of game.filterPlayer()) {
									if (target.hasMark('zero_mowu')) {
										num += target.countMark('zero_mowu');
										target.removeMark('zero_mowu', num);
									}
								}
								player.draw(num);
								player.addTempSkill('zero_shajue_buff', ['phaseAfter']);
								('step 2');
								player.phase('nodelay');
							},
							subSkill: {
								buff: {},
							},
						},
						zero_qiang_skill: {
							audio: 'ext:幻想志/audio:true',
							equipSkill: true,
							trigger: { player: 'useCard' },
							forced: true,
							filter(event, player) {
								return get.tag(event.card, 'damage');
							},
							mod: {
								globalTo(from, to, num) {
									if (to.storage.zero_qiang_skill2 && typeof to.storage.zero_qiang_skill2 == 'number') return num + to.storage.zero_qiang_skill2;
								},
								targetInRange() {
									return true;
								},
							},
							content() {
								trigger.directHit.addArray(game.players);
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									return get.tag(arg.card, 'damage');
								},
							},
						},
						zero_qiang_skill2: {
							equipSkill: true,
							init(player, skill) {
								if (!player.storage[skill]) player.storage[skill] = 0;
							},
							trigger: { global: 'roundStart', player: 'damageAfter', source: 'damageAfter' },
							popup: false,
							forced: true,
							filter(event, player, name) {
								if (event.name == 'damage') return event.num > 0;
								return true;
							},
							onremove(player) {
								player.storage.zero_qiang_skill2 = 0;
								delete player.storage.zero_qiang_skill2;
							},
							content() {
								if (event.triggername == 'roundStart') {
									player.storage.zero_qiang_skill2 = 0;
								} else {
									if (!player.storage.zero_qiang_skill2) player.storage.zero_qiang_skill2 = 0;
									player.storage.zero_qiang_skill2 += trigger.num;
								}
							},
						},
						zero_yidian: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'phaseJieshuBegin' },
							charlotte: true,
							filter(event, player) {
								return player.getHistory('sourceDamage').length && event.getParent(2).name == 'phaseLoop' && event.parent.skill != 'zero_yidian' && event.parent.name == 'phase';
							},
							check(event, player) {
								return player.hp > 1 || player.countCards('h', 'tao') > 0;
							},
							content() {
								'step 0';
								var num = 0;
								player.getHistory('sourceDamage', function (evt) {
									num += evt.num;
								});
								player.draw(num).gaintag = ['zero_yidian'];
								('step 1');
								var cards = player.getCards('h', (card) => card.hasGaintag('zero_yidian') && card.suit == 'heart');
								if (cards.length) {
									event.num = Math.min(2, cards.length);
									player.loseHp(event.num);
								}
								player.removeGaintag('zero_yidian');
								('step 2');
								if (event.num && event.num > 0) {
									player.phase('nodelay');
									event.num--;
									event.redo();
								}
							},
						},
						zero_qian: {
							audio: 'ext:幻想志/audio:2',
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
								return 8 - get.value(card);
							},
							filter(event, player) {
								return !player.hasSkill('zero_qian_round');
							},
							content() {
								'step 0';
								player.addTempSkill('zero_qian_round', 'roundStart');
								player.addTempSkill('zero_qian_damage', { player: 'phaseBeginStart' });
								player.addTempSkill('zero_qian_damage2', { player: 'phaseAfter' });
								player.discard(cards);
								event.num = player.getDamagedHp();
								('step 1');
								player.draw(event.num + cards.length);
							},
							ai: {
								order: 10,
								result: {
									player(player, target) {
										return 1 + player.getDamagedHp();
									},
								},
								threaten: 1.55,
							},
							subSkill: {
								round: {
									mark: true,
									intro: { content: '本轮已发动' },
								},
								damage: {
									trigger: { player: 'damageBegin1' },
									forced: true,
									content() {
										trigger.num++;
									},
								},
								damage2: {
									trigger: { source: 'damageBegin1' },
									forced: true,
									content() {
										trigger.num++;
									},
								},
							},
						},
						zero_yousheng: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'damageBegin4' },
							forced: true,
							firstDo: true,
							filter(event, player) {
								return event.card && !player.getStorage('zero_yousheng').includes(event.card.name);
							},
							mark: true,
							intro: {
								content: '已记录牌名:$',
							},
							content() {
								trigger.cancel();
								player.markAuto('zero_yousheng', [trigger.card.name]);
							},
						},
						zero_wanyan: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: ['loseAsyncAfter', 'loseAfter', 'cardsDiscardAfter'] },
							forced: true,
							filter(event, player) {
								if (event.name == 'loseAsyncAfter' && event.type != 'discard') return false;
								if (event.name == 'lose' && (event.getlx === false || event.position != ui.discardPile)) return false;
								var cards = event.getd();
								for (var card of cards) {
									if (get.type(card) != 'basic' && player.getStorage('zero_yousheng').includes(card.name)) return true;
								}
								return false;
							},
							content() {
								player.draw();
							},
						},
						zero_tianshi: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['loseAfter', 'loseAsyncAfter', 'damageAfter', 'equipAfter'] },
							filter(event, player, name) {
								if (event.name == 'damage') {
									if (_status.currentPhase == player) return true;
								} else if (event.name == 'lose') {
									if (event.type != 'discard' || _status.currentPhase == player) return false;
									if (!event.getl(player).hs.length) return false;
									return true;
								} else if (event.type == 'discard') {
									if (_status.currentPhase == player) return false;
									return game.hasPlayer(function (current) {
										return event.getl(current).hs.length;
									});
								} else if (event.name == 'equip') {
									if (_status.currentPhase == player) return false;
									return true;
								}
								return false;
							},
							forced: true,
							content() {
								switch (event.triggername) {
									case 'loseAfter':
										player.draw(2);
										break;
									case 'loseAsyncAfter':
										player.draw(2);
										break;
									case 'damageAfter':
										player.draw(4);
										break;
									case 'equipAfter':
										player.draw(6);
										break;
								}
							},
							ai: {
								threaten: 1.7,
								effect: {
									target(card, player, target) {
										if ((get.tag(card, 'loseCard') || get.tag(card, 'discard')) && _status.currentPhase != target) {
											return [1, 2];
										}
									},
								},
							},
						},
						zero_jiushu: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: 'phaseEnd' },
							prompt(event, player) {
								return '是否对' + get.translation(event.player) + '发动【救赎】？';
							},
							prompt2(event, player) {
								return get.prompt2('zero_jiushu');
							},
							init(player) {
								player.storage.zero_jiushu = [];
							},
							logTarget(event, player) {
								return event.player;
							},
							filter(event, player) {
								return event.player != player && !player.storage.zero_jiushu.includes(event.player) && event.player.getHistory('sourceDamage').length == 0 && event.player.countCards('he') > 0;
							},
							content() {
								'step 0';
								if (
									trigger.player.countCards('he', (card) => {
										return get.type2(card) == 'equip';
									}) > 0
								) {
									trigger.player
										.chooseControl()
										.set('choiceList', ['【救赎】:选择将三张手牌交给' + get.translation(player), '【救赎】:将一张装备牌置入' + get.translation(player) + '的装备区,你摸两张牌.'])
										.set('ai', function () {
											if (_status.event.player.countCards('h') < 2) return 1;
											if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
												return 1;
											}
											return 0;
										});
								} else {
									event.goto(3);
								}
								('step 1');
								if (result.index == 1) {
									trigger.player
										.chooseCard('he', true)
										.set('ai', function (card) {
											if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
												return 10 - get.value(card);
											} else {
												return 6 - get.value(card);
											}
										})
										.set('filterCard', function (card) {
											return get.type2(card) == 'equip';
										});
								} else {
									event.goto(3);
								}
								('step 2');
								if (result.bool) {
									player.storage.zero_jiushu.add(trigger.player);
									var card = result.cards[0];
									if (get.type2(card) == 'equip') {
										player.equip(card);
										trigger.player.draw(2);
									}
									event.finish();
								} else {
									event.finish();
								}
								('step 3');
								trigger.player.chooseCard('he', true, [3, 3]).set('ai', function (card) {
									if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
										return 8 - get.value(card);
									} else {
										return 6 - get.value(card);
									}
								});
								('step 4');
								if (result.bool) {
									player.storage.zero_jiushu.add(trigger.player);
									trigger.player.give(result.cards, player);
								}
							},
						},
						zero_nvshen: {
							audio: 'ext:幻想志/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.hasCard(lib.skill.zero_nvshen.filterCard);
							},
							check(card) {
								return 8 - get.value(card);
							},
							filterCard(card) {
								return get.type2(card) == 'equip';
							},
							filterTarget(card, player, target) {
								return target != player && !target.isMin() && player.inRange(target);
							},
							prepare: 'give',
							discard: false,
							lose: false,
							position: 'hes',
							content() {
								'step 0';
								target.equip(cards[0]);
								('step 1');
								('step 2');
								target.draw(get.distance(player, target));
								player.draw(get.distance(player, target) + target.countCards('e', (card) => get.subtype(card) == 'equip1'));
							},
							ai: {
								order: 1,
								result: {
									target(player, target) {
										var card = ui.selected.cards[0];
										if (!card) return 0;
										var eff = get.effect(target, card, player, target);
										eff += get.distance(player, target);
										return eff;
									},
									player(player, target) {
										var card = ui.selected.cards[0];
										if (!card) return 0;
										var eff = 0;
										eff += get.distance(player, target);
										eff += target.countCards('e', (card) => get.subtype(card) == 'equip1');
										return eff;
									},
								},
							},
						},
						zero_pomie: {
							audio: 'ext:幻想志/audio:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							zhuanhuanji: true,
							mark: true,
							marktext: '☯',
							usable: 1,
							intro: {
								content(storage, player) {
									return !storage ? '出牌阶段限一次,你可以将一张非基本牌当作一张非装备牌使用或打出,若此牌造成伤害,你摸X张牌弃置X-1张牌.' : '出牌阶段限一次,你可以将一张基本牌当做一张锦囊牌使用或打出,若此牌未造成伤害,你摸Y-2张牌(X为你此次造成伤害总值,Y为此牌牌名数).';
								},
							},
							init(player) {
								player.storage.zero_pomie = false;
							},
							hiddenCard(player, name) {
								if (_status.currentPhase != player) return false;
								var type = get.type(name);
								if (type != 'equip' && !player.storage.zero_pomie && player.countCards('he', (card) => get.type2(card) != 'basic') > 0) return true;
								if (type == 'trick' && player.storage.zero_pomie && player.countCards('he', (card) => get.type2(card) == 'basic') > 0) return true;
								return false;
							},
							filter(event, player) {
								if (event.type != 'phase') return false;
								if (!player.storage.zero_pomie && player.countCards('he', (card) => get.type2(card) != 'basic') > 0) return true;
								if (player.storage.zero_pomie && player.countCards('he', (card) => get.type2(card) == 'basic') > 0) return true;
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var dialog = ui.create.dialog('迫蔑', 'hidden');
									var type = player.storage.zero_pomie ? 'trick' : 'equip';
									var list = [];
									if (player.storage.zero_pomie) {
										for (var name of lib.inpile) {
											if (get.type2(name) != type) continue;
											if (event.filterCard && event.filterCard({ name: name }, player, event)) {
												list.push([type, '', name]);
												if (name == 'sha') {
													for (var j of lib.inpile_nature) list.push([type, '', name, j]);
												}
											}
										}
									} else {
										for (var name of lib.inpile) {
											if (get.type2(name) == type) continue;
											if (event.filterCard && event.filterCard({ name: name }, player, event)) {
												list.push([type, '', name]);
												if (name == 'sha') {
													for (var j of lib.inpile_nature) list.push([type, '', name, j]);
												}
											}
										}
									}
									dialog.add([list, 'vcard']);
									return dialog;
								},
								check(button) {
									var player = _status.event.player;
									var name = button.link[2];
									var evt = _status.event.parent;
									if (get.type(name) == 'basic') {
										if (name == 'shan') return 2;
										if (evt.type == 'dying') {
											if (get.attitude(player, evt.dying) < 2) return false;
											if (name == 'jiu') return 2.1;
											return 1.9;
										}
										if (evt.type == 'phase') return player.getUseValue({ name: name, nature: button.link[3] });
										return 1;
									}
									if (!['chuqibuyi', 'shuiyanqijunx', 'juedou', 'nanman', 'wanjian', 'shunshou', 'zhujinqiyuan'].includes(name)) return 0;
									var card = { name: name };
									if (['shunshou', 'zhujinqiyuan'].includes(card.name)) {
										if (
											!game.hasPlayer(function (current) {
												return get.attitude(player, current) != 0 && get.distance(player, current) <= 1 && player.canUse(card, current) && get.effect(current, card, player, player) > 0;
											})
										)
											return 0;
										return player.getUseValue(card) - 7;
									}
									return player.getUseValue(card) - 4;
								},
								backup(links, player) {
									return {
										selectCard: 1,
										filterCard(card) {
											var player = _status.event.player;
											if (player.storage.zero_pomie) return get.type2(card) == 'basic';
											return get.type2(card) != 'basic';
										},
										popname: true,
										position: 'hes',
										check(card) {
											return 8 - get.value(card);
										},
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											player.changeZhuanhuanji('zero_pomie');
										},
									};
								},
								prompt(links, player) {
									if (player.storage.zero_pomie) return '你可以将一张基本牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出,若此牌未造成伤害,你摸Y-2张牌(Y为牌名数.';
									return '你可以将一张非基本牌当作一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出,若此牌造成伤害,你摸X张牌弃置X-1张牌(X为你此次造成伤害总值),';
								},
							},
							ai: {
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag, arg) {
									if (player.storage.zero_pomie || player.countCards('he', (card) => get.type2(card) != 'basic') <= 0) return false;
								},
								order: 2,
								result: {
									player: 1,
								},
							},
							group: 'zero_pomie_user',
							subSkill: {
								backup: {},
								user: {
									audio: 'ext:幻想志/audio:2',
									trigger: { player: 'useCardAfter' },
									forced: true,
									filter(event, player) {
										return event.skill == 'zero_pomie_backup';
									},
									content() {
										if (
											!player.getHistory('sourceDamage', function (evt) {
												return trigger.card == evt.card;
											}).length &&
											!player.storage.zero_pomie
										) {
											var num = get.translation(trigger.card.name).length - 2;
											if (num > 0) player.draw(num);
										} else if (
											player.getHistory('sourceDamage', function (evt) {
												return trigger.card == evt.card;
											}).length &&
											player.storage.zero_pomie
										) {
											var num = 0;
											player.getHistory('sourceDamage', function (evt) {
												if (evt.card == trigger.card && evt.parent.type == 'card') num += evt.num;
											});
											if (num > 0) {
												player.draw(num);
												player.chooseToDiscard(num - 1, true).set('ai', function (card) {
													return 7 - get.value(card);
												});
											}
										}
									},
								},
							},
						},
						RE_tiancai: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['phaseBegin', 'phaseDrawBegin2'] },
							fixed: true,
							charlotte: true,
							forced: true,
							init(player) {
								for (var i = 2; i <= 5; i++) {
									player.disableEquip(i);
								}
								var slotsx = [...new Set(['equip1'])].sort();
								for (var slot of slotsx) {
									var expand = Infinity;
									game.log(player, '获得了' + get.cnNumber(expand) + '个额外的', '#g' + get.translation(slot) + '栏');
									if (!player.expandedSlots) player.expandedSlots = {};
									if (!player.expandedSlots[slot]) player.expandedSlots[slot] = 0;
									player.expandedSlots[slot] += expand;
								}
								player.$syncExpand();
							},
							count(player) {
								var num = player.countCards('e', function (card) {
									return get.subtype(card) == 'equip1';
								});
								return num;
							},
							filter(event, player, name) {
								var num = lib.skill.RE_tiancai.count(player);
								if (event.name == 'phaseDraw') return !event.numFixed && num > 4;
								return !player.isDisabled(1);
							},
							content() {
								if (event.triggername == 'phaseBegin') {
									var card = get.cardPile2(function (card) {
										return get.subtype(card) == 'equip1';
									});
									if (card) {
										player.equip(card);
									} else {
										var card = get.discardPile(function (card) {
											return get.subtype(card) == 'equip1';
										});
										if (card) {
											player.equip(card);
										} else {
											var list = [];
											for (var i in lib.card) {
												if (!lib.translate[i + '_info']) continue;
												if (get.subtype(i) != 'equip1') continue;
												list.push(i);
											}
											var card = game.createCard(list.randomGet());
											player.equip(card);
										}
									}
								} else {
									var num = lib.skill.RE_tiancai.count(player);
									trigger.num += num;
								}
							},
							mod: {
								targetInRange(card, player, target) {
									var num = lib.skill.RE_tiancai.count(player);
									if (num < 1) return;
									return true;
								},
								selectTarget(card, player, range) {
									var num = lib.skill.RE_tiancai.count(player);
									if (num >= 2 && Array.isArray(range) && range[1] != -1) range[1]++;
								},
								cardUsable(card, player, num) {
									var count = lib.skill.RE_tiancai.count(player);
									if (!card.cards) return;
									if (count < 4) return;
									return Infinity;
								},
							},
							group: ['RE_tiancai_respond', 'RE_tiancai_buff'],
							subSkill: {
								respond: {
									audio: 'ext:幻想志/audio:2',
									trigger: { player: 'useCard' },
									fixed: true,
									charlotte: true,
									forced: true,
									filter(event, player) {
										var num = lib.skill.RE_tiancai.count(player);
										return num >= 3;
									},
									content() {
										trigger.directHit.addArray(game.players);
									},
									ai: {
										directHit_ai: true,
										skillTagFilter(player, tag, arg) {
											var num = lib.skill.RE_tiancai.count(player);
											return num >= 3;
										},
									},
								},
								buff: {
									trigger: { player: 'useCard1' },
									forced: true,
									popup: false,
									firstDo: true,
									filter(event, player) {
										var num = lib.skill.RE_tiancai.count(player);
										return event.targets.length && get.tag(event.card, 'damage') && num >= 4;
									},
									content() {
										trigger.baseDamage++;
									},
								},
							},
							ai: {
								threaten: 7,
							},
						},
						RE_badao: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'damageEnd' },
							fixed: true,
							charlotte: true,
							forced: true,
							filter(event, player) {
								var num = lib.skill.RE_tiancai.count(player);
								return num >= 1 && event.source;
							},
							content() {
								'step 0';
								var cards = player.getCards('e', function (card) {
									return get.subtype(card) == 'equip1';
								});
								player.chooseButton(['###是否发动【拔刀】？###你可以选择将装备区内的一张武器牌弃置,依据武器范围对伤害来源造成x点伤害并对伤害来源相邻的除你以外的角色造成1点伤害(x为武器范围)', [cards, 'vcard']]).set('ai', function (button) {
									var player = _status.event.player,
										source = _status.event.parent.source,
										name = button.link.name;
									if (get.value(button.link, player) > 7) return 0;
									let range = lib.card[name].distance;
									if (range) {
										range = 1 - range.attackFrom;
									}
									return get.attitude(player, source) * range;
								});
								('step 1');
								if (result.bool) {
									var card = result.links[0],
										source = trigger.source;
									let range = lib.card[card.name].distance;
									if (range) {
										range = 1 - range.attackFrom;
									}
									player.discard(card);
									if (range) {
										source.damage(range, 'nocard');
										let next = source.next,
											previous = source.previous;
										if (next && next != player) next.damage('nocard');
										if (previous && previous != player) previous.damage('nocard');
									}
									var card = get.cardPile2(function (card) {
										return get.subtype(card) == 'equip1';
									});
									if (card) {
										player.equip(card);
									} else {
										var card = get.discardPile(function (card) {
											return get.subtype(card) == 'equip1';
										});
										if (card) {
											player.equip(card);
										} else {
											var list = [];
											for (var i in lib.card) {
												if (!lib.translate[i + '_info']) continue;
												if (get.subtype(i) != 'equip1') continue;
												list.push(i);
											}
											var card = game.createCard(list.randomGet());
											player.equip(card);
										}
									}
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										var num = lib.skill.RE_tiancai.count(target);
										if (get.tag(card, 'damage') && num >= 1) {
											if (player.skills.includes('jueqing')) return [1, -3];
											if (!target.hasFriend()) return;
											return [1, 0, 1, -3];
										}
									},
								},
							},
							group: 'RE_badao_use',
							subSkill: {
								use: {
									audio: 'ext:幻想志/audio:2',
									enable: 'phaseUse',
									usable: 1,
									filter(event, player) {
										var num = lib.skill.RE_tiancai.count(player);
										return num > 0;
									},
									filterCard(card, player) {
										return get.subtype(card) == 'equip1';
									},
									position: 'e',
									filterTarget(card, player, target) {
										return target != player;
									},
									check(card) {
										if (get.value(card) <= 0) return 10;
										var player = _status.event.player;
										if (get.value(card, player) > 7) return 0;
										if (card.name == 'zhuge') return 0;
										let range = lib.card[card.name].distance;
										if (range) {
											range = 1 - range.attackFrom;
										}
										if (range) return range;
									},
									content() {
										'step 0';
										let range = lib.card[cards[0].name].distance;
										if (range) {
											range = 1 - range.attackFrom;
											target.damage(range, 'nocard');
											let next = target.next,
												previous = target.previous;
											if (next && next != player) next.damage('nocard');
											if (previous && previous != player) previous.damage('nocard');
										}
										('step 1');
										('step 2');
										var card = get.cardPile2(function (card) {
											return get.subtype(card) == 'equip1';
										});
										if (card) {
											player.equip(card);
										} else {
											var card = get.discardPile(function (card) {
												return get.subtype(card) == 'equip1';
											});
											if (card) {
												player.equip(card);
											} else {
												var list = [];
												for (var i in lib.card) {
													if (!lib.translate[i + '_info']) continue;
													if (get.subtype(i) != 'equip1') continue;
													list.push(i);
												}
												var card = game.createCard(list.randomGet());
												player.equip(card);
											}
										}
									},
									ai: {
										damage: true,
										order: 8,
										result: {
											player(player, target) {
												var num = lib.skill.RE_tiancai.count(target);
												if (num > 1) return 3;
												if (num == 1) {
													var cards = player.getCards('e', function (card) {
														return get.subtype(card) == 'equip1';
													});
													if (cards[0].name == 'zhuge') return 0;
												}
												return 1;
											},
											target(player, target) {
												return get.damageEffect(target, player, target);
											},
										},
									},
								},
							},
						},
						RE_cansha: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'useCardToPlayered', target: 'useCardToTargeted' },
							fixed: true,
							charlotte: true,
							forced: true,
							filter(event, player, name) {
								if (name == 'useCardToPlayered') {
									if (event.player.hp >= event.target.hp && event.target.isIn() && event.target != player) return get.color(event.card) == 'black' && get.type2(event.card) == 'basic';
									if (event.player.countCards('h') >= event.target.countCards('h') && event.target.isIn() && event.target != player) return get.color(event.card) == 'black' && get.type2(event.card) == 'trick';
								} else {
									if (event.player.hp <= event.target.hp && event.target == player && event.player != player) return get.color(event.card) == 'black' && get.type2(event.card) == 'basic';
									if (event.player.countCards('h') <= event.target.countCards('h') && event.target == player && event.player != player) return get.color(event.card) == 'black' && get.type2(event.card) == 'trick';
								}
								return false;
							},
							content() {
								if (event.triggername == 'useCardToPlayered') {
									if (trigger.target != player) trigger.target.damage();
								} else {
									if (trigger.player != player) trigger.player.damage();
								}
								player.draw();
							},
						},
						RE_zhuanlian: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'useCard2' },
							fixed: true,
							charlotte: true,
							forced: true,
							filter(event, player) {
								var targets = event.targets || [];
								if (targets.length > 1) return true;
							},
							content() {
								'step 0';
								player
									.chooseTarget(
										'###【专恋】###请选择一个作为唯一目标',
										function (card, player, target) {
											return _status.event.getTrigger().targets.includes(target);
										},
										true
									)
									.set('ai', function (target) {
										return Math.max(Math.random(), get.attitude(player, target));
									});
								('step 1');
								if (result.bool) {
									let targets = trigger.targets.filter((c) => c != result.targets[0]),
										num = targets.length;
									trigger.targets.removeArray(targets);
									game.log(result.targets[0], '成为了唯一目标');
									player.draw(num);
									player.showHandcards();
									player.chooseToDiscard('###【专恋】###请弃置' + get.cnNumber(num) + '张牌', 'he', num, true);
									if (player.hp < player.maxHp) player.recover(num);
								} else event.finish();
							},
						},
						RE_zhoumu: {
							audio: 'ext:幻想志/audio:2',
							mod: {
								maxHandcard(player, num) {
									var cards = [],
										num = player.getHistory('useCard').length;
									player.getHistory('lose', function (evt) {
										if (evt.type != 'discard') return false;
										for (var i of evt.cards2) {
											if (get.position(i, true) == 'd') cards.push(i);
										}
										return false;
									});
									if (typeof (num + cards.length) == 'number') return num + cards.length;
								},
							},
							fixed: true,
							charlotte: true,
							forced: true,
							trigger: { player: 'phaseEnd' },
							filter(event, player) {
								var cards = [],
									num = player.getHistory('useCard').length;
								player.getHistory('lose', function (evt) {
									if (evt.type != 'discard') return false;
									for (var i of evt.cards2) {
										if (get.position(i, true) == 'd') cards.push(i);
									}
									return false;
								});
								let nums = num + cards.length;
								if (typeof nums == 'number') return nums >= game.countPlayer() + 2;
								return false;
							},
							content() {
								'step 0';
								player
									.judge((card) => {
										if (get.color(card) == 'red') return 5;
										return -2;
									}, '周目')
									.set('callback', function () {
										var card = event.judgeResult.card;
										if (get.color(card) == 'red') {
											player.phase('nodelay');
										}
									})
									.set('judge2', (result) => result.bool);
							},
							ai: {
								threaten: 4,
							},
						},
						RE_xianyu: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: ['judgeBefore', 'judgeEnd'] },
							forced: true,
							content() {
								'step 0';
								if (event.triggername == 'judgeEnd') {
									player.gain(trigger.result.card, 'gain2').gaintag.add('RE_xianyu');
									event.finish();
								} else {
									var cards = [],
										num = player.getHistory('useCard').length;
									player.getHistory('lose', function (evt) {
										if (evt.type != 'discard') return false;
										for (var i of evt.cards2) {
											if (get.position(i, true) == 'd') cards.push(i);
										}
										return false;
									});
									let nums = num + cards.length;
									event.cards1 = get.cards(Math.max(1, nums));
									event.cards2 = get.bottomCards(Math.max(1, nums));
									var cards = event.cards1.concat(event.cards2);
									game.cardsGotoOrdering(cards);
									var next = player.chooseToMove();
									next.set('list', [
										['牌堆顶', event.cards1],
										['牌堆底', event.cards2],
									]);
									next.set('judging', ui.cardPile.firstChild);
									next.set('prompt', '先预:点击将牌移动到牌堆顶或牌堆底');
									next.processAI = function (list) {
										var cards = list[0][1],
											player = _status.event.player;
										const target = trigger.player;
										const att = get.attitude(player, target);
										const top = [], bottom = cards;
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
									};
								}
								('step 1');
								var top = result.moved[0];
								var bottom = result.moved[1];
								top.reverse();
								for (var i = 0; i < top.length; i++) {
									ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
								}
								for (var i = 0; i < bottom.length; i++) {
									ui.cardPile.appendChild(bottom[i]);
								}
								player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
								game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
								game.updateRoundNumber();
							},
							mod: {
								selectTarget(card, player, range) {
									if (get.itemtype(card) == 'card') {
										if (card.hasGaintag('RE_xianyu')) {
											range[0] = -1;
											range[1] = -1;
										}
									} else if (card.cards) {
										if (card.cards.some((card) => card.hasGaintag('RE_xianyu'))) {
											range[0] = -1;
											range[1] = -1;
										}
									}
								},
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						RE_zhuohun: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['damageBegin4', 'phaseZhunbeiBegin'] },
							filter(event, player) {
								if (event.parent.name == 'RE_zhuohun') return false;
								return event.num > 0 || event.name == 'phaseZhunbei';
							},
							fixed: true,
							charlotte: true,
							forced: true,
							forceDie: true,
							content() {
								'step 0';
								if (event.triggername == 'phaseZhunbeiBegin') player.damage('fire', 'nosource');
								else trigger.cancel();
								('step 1');
								event.judgestr = '火祭';
								player
									.judge((card) => {
										if (card.suit == 'heart' && card.number > 1 && card.number < 10) return -6;
										return 0;
									}, event.judgestr)
									.set('callback', function () {
										if (event.getParent('judge').result.bool == false) {
											player.damage(3, 'fire', 'nosource');
											event.getParent('RE_zhuohun').finish();
										} else player.draw(3);
									})
									.set('judge2', (result) => result.bool === false);
								('step 2');
								var players = game.filterPlayer().sortBySeat(player.next);
								event.players = players.remove(player);
								('step 3');
								event.target = event.players.shift();
								if (event.target != player && event.target.isIn()) {
									event.target
										.judge((card) => {
											if (card.suit == 'heart' && card.number > 1 && card.number < 10) return -6;
											return 0;
										}, event.judgestr)
										.set('callback', function () {
											if (event.getParent('judge').result.bool == false) {
												player.damage(3, 'fire', 'nosource');
												event.getParent('RE_zhuohun').finish();
											} else player.draw(3);
										})
										.set('judge2', (result) => result.bool === false);
								}
								('step 4');
								if (event.players.length) event.goto(3);
							},
							ai: {
								nofire: true,
								nothunder: true,
								nodamage: true,
								maixie: true,
								effect: {
									target(card, player, target, current) {
										if (get.tag(card, 'damage')) {
											if (card.nature) {
												return [1, 2];
											}
											return [0, 0.3];
										}
									},
								},
							},
						},
						RE_shenjuan: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: 'judgeBefore' },
							forced: true,
							fixed: true,
							charlotte: true,
							lastDo: true,
							_priority: -15,
							filter(event, player) {
								var num = player.getHistory('useSkill', (evt) => evt.skill == 'RE_shenjuan').length;
								return num < Math.max(player.getDamagedHp(), 2);
							},
							content() {
								'step 0';
								event.cards = get.cards(Math.max(player.getDamagedHp(), 2));
								player.chooseCardButton(event.cards, '神眷:选择一张牌作为' + get.translation(trigger.player) + '的' + trigger.judgestr + '判定结果').set('ai', function (button) {
									if (get.attitude(player, trigger.player) > 0) {
										return 1 + trigger.judge(button.link);
									}
									if (get.attitude(player, trigger.player) < 0) {
										return 1 - trigger.judge(button.link);
									}
									return 0;
								});
								('step 1');
								if (!result.bool) {
									game.cardsGotoOrdering(event.cards);
									event.finish();
									return;
								}
								const card = result.links[0];
								event.cards.remove(card);
								var judgestr = get.translation(trigger.player) + '的' + trigger.judgestr + '判定';
								event.videoId = lib.status.videoId++;
								event.dialog = ui.create.dialog(judgestr);
								event.dialog.classList.add('center');
								event.dialog.videoId = event.videoId;
								game.addVideo('judge1', player, [get.cardInfo(card), judgestr, event.videoId]);
								var node;
								if (game.chess) {
									node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
								} else {
									node = player.$throwordered(card.copy(), true);
								}
								node.classList.add('thrownhighlight');
								ui.arena.classList.add('thrownhighlight');
								if (card) {
									trigger.cancel();
									trigger.result = {
										card: card,
										judge: trigger.judge(card),
										node: node,
										number: card.number,
										suit: card.suit,
										color: get.color(card),
									};
									if (trigger.result.judge > 0) {
										trigger.result.bool = true;
										trigger.player.popup('洗具');
									}
									if (trigger.result.judge < 0) {
										trigger.result.bool = false;
										trigger.player.popup('杯具');
									}
									game.log(trigger.player, '的判定结果为', card);
									trigger.direct = true;
									if (trigger.callback) {
										var next = game.createEvent('judgeCallback', false);
										next.player = trigger.player;
										next.card = card;
										next.judgeResult = get.copy(trigger.result);
										next.setContent(trigger.callback);
									} else {
										if (!get.owner(card)) {
											if (trigger.position != ui.discardPile) trigger.position.appendChild(card);
										}
									}
								} else {
									event.finish();
								}
								('step 2');
								ui.arena.classList.remove('thrownhighlight');
								event.dialog.close();
								game.addVideo('judge2', null, event.videoId);
								ui.clear();
								trigger.result.node.delete();
								('step 3');
								player.gain(event.cards, 'draw');
							},
							ai: {
								tag: {
									rejudge: 1,
								},
							},
						},
						RE_shixin: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['damageBegin4', 'damageEnd'] },
							filter(event, player) {
								return event.nature;
							},
							_priority: -1,
							forced: true,
							content() {
								switch (event.triggername) {
									case 'damageBegin4':
										trigger.num++;
										break;
									case 'damageEnd':
										{
											player.gainMaxHp();
											player.draw(trigger.num);
										}
										break;
								}
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.tag(card, 'damage')) {
											if (card.nature && (card.nature == 'fire' || card.nature == 'thunder' || card.nature == 'poison')) return [1, -2];
										}
									},
								},
							},
						},
						RE_yunamankai: {
							audio: 'ext:幻想志/audio:2',
							inherit: 'RE_mankai',
						},
						RE_lvtu: {
							audio: 'ext:幻想志/audio:2',
							initList() {
								if (!_status.characterlist) {
									lib.skill.pingjian.initList();
								}
								_status.RE_lvtu_list = [];
								for (var c of _status.characterlist) {
									let list = lib.character[c][3].filter((s) => lib.skill[s] && lib.translate[s] && lib.translate[s + '_info']);
									_status.RE_lvtu_list.addArray(list);
								}
							},
							trigger: { player: 'damageEnd', global: 'roundStart' },
							forced: true,
							filter(event, player) {
								return true;
							},
							content() {
								'step 0';
								if (!_status.RE_lvtu_list) {
									lib.skill.RE_lvtu.initList();
								}
								if (event.triggername == 'damageEnd' && trigger.num && typeof trigger.num == 'number') event.num = Math.min(trigger.num, 9);
								else event.num = 3;
								('step 1');
								var skills = _status.RE_lvtu_list.filter((s) => !player.hasSkill(s));
								skills = skills.randomGets(9);
								if (skills.length == 1) {
									player.addSkillLog(skills[0]);
									event.finish();
								}
								let str = '旅途<br><br>选择获得至多' + get.cnNumber(event.num) + '个技能';
								event.dialog = ui.create.dialog(str, 'hidden');
								var table = ui.create.div('.holder2048');
								table.classList.add('add-setting');
								table.style.margin = '0';
								table.style.width = '100%';
								table.style.position = 'relative';
								for (var s of skills) {
									var td = ui.create.div('.container');
									td.innerHTML = '<span>【' + lib.translate[s] + '】&#12288' + lib.translate[s + '_info'] + '</span><br>';
									td.link = s;
									td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
									table.appendChild(td);
									event.dialog.buttons.add(td);
								}
								event.dialog.content.appendChild(table);
								if (Math.random() < 0.5) event.dialog.style = 'background-image:url(extension/幻想志/image/1.jpg);border-radius: 25px;background-size:100% 100%; background-repeat: no-repeat;';
								else event.dialog.style = 'background-image:url(extension/幻想志/image/2.jpg);border-radius: 25px;background-size:100% 100%; background-repeat: no-repeat;';
								var next = player.chooseButton([1, event.num]);
								next.set('dialog', event.dialog);
								next.set('skillsx', skills);
								next.set('ai', function (button) {
									return _status.event.skillsx.randomGets(event.num);
								});
								('step 2');
								if (result.bool && result.links) {
									for (var s of result.links) {
										player.addSkillLog(s);
									}
									if (event.dialog) event.dialog.close();
								} else {
									if (event.dialog) event.dialog.close();
									event.finish();
								}
							},
						},
						RE_jiyuan: {
							audio: 'ext:幻想志/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('hes') > 0 && lib.skill.RE_jiyuan.getSkills(player).length > 2;
							},
							getSkills(player) {
								return player.skills.filter((s) => lib.translate[s] && lib.translate[s + '_info'] && lib.skill[s] && !lib.skill[s].nopopup && !lib.skill[s].equipSkill);
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (name == 'sha' && player.hasCard((card) => get.type(card) == get.type(name), 'hes')) {
											list.push(['基本', '', 'sha']);
											for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
										} else if (player.hasCard((card) => get.type(card) == get.type(name), 'hes') && get.type(name) != 'equip') list.push([get.translation(get.type(name)), '', name]);
									}
									return ui.create.dialog('继愿', [list, 'vcard']);
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									var player = _status.event.player;
									if (player.countCards('hs', button.link[2]) > 0) return 0;
									if (button.link[2] == 'wugu') return;
									var effect = player.getUseValue(button.link[2]);
									if (effect > 0) return effect;
									return 0;
								},
								backup(links, player) {
									return {
										filterCard(card) {
											return get.type(links[0][2]) == get.type(card);
										},
										audio: 'ext:幻想志/audio:2',
										selectCard: 1,
										popname: true,
										check(card) {
											return 10 - get.value(card);
										},
										position: 'hes',
										viewAs: { name: links[0][2], nature: links[0][3] },
										onuse(result, player) {
											var skills = lib.skill.RE_jiyuan.getSkills(player);
											skills = skills.removeArray(['RE_jiyuan', 'RE_lvtu']);
											var skill = skills.randomGet();
											player.removeSkill(skill);
											game.log(player, '失去了', '#g【' + get.translation(skill) + '】');
											player.gainMaxHp();
										},
									};
								},
								prompt(links, player) {
									return '将一张' + get.translation(get.type(links[0][2])) + '牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
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
						//你始终翻面,你不是你未对其造成伤害的角色的合法卡牌目标并取消后续结算.你的体力/体力上限为无穷大,你不会进入濒死状态,你不会被判定死亡
						RE_yongsheng: {
							audio: 'ext:幻想志/audio:2',
							init(player) {
								player.originDie = lib.element.player.die;
								player.originDying = lib.element.player.dying;
								Reflect.defineProperty(player, 'die', {
									get:
										() =>
											(...args) =>
												player.originDie(...args).set('finished', true),
								});
								Reflect.defineProperty(player, 'turnOver', {
									get:
										() =>
											(...args) =>
												player.classList.add('turnedover'),
								});
							},
							mod: {
								targetEnabled(card, player, target) {
									if (
										!player.hasAllHistory('damage', (evt) => {
											return evt.source == target;
										}) &&
										player != target
									)
										return false;
								},
							},
							trigger: { target: ['useCardToTargeted'], player: ['phaseUseBegin', 'damageAfter'] },
							fixed: true,
							charlotte: true,
							forced: true,
							filter(event, player) {
								if (player.storage.RE_zhuguang && (event.name == 'phase' || event.name == 'damage')) return player.countCards('hejsx') > 0 && player.isDamaged();
								return (
									!event.player.hasAllHistory('damage', (evt) => {
										return evt.source == player;
									}) &&
									event.player != player &&
									!player.storage.RE_zhuguang
								);
							},
							content() {
								'step 0';
								if (event.triggername == 'useCardToTargeted') {
									trigger.cancel();
									event.finish();
								}
								('step 1');
								player.chooseToDiscard('hejsx', '你可以弃置你区域内的一张牌回复一点体力').set('ai', function (card) {
									return 8 - get.value(card);
								});
								('step 2');
								if (result.bool) {
									player.recover();
								}
							},
						},
						RE_zhuguang: {
							audio: 'ext:幻想志/audio:2',
							derivation: 'RE_xiuyi',
							trigger: { global: 'roundStart' },
							fixed: true,
							charlotte: true,
							forced: true,
							filter(event, player) {
								var targets = game.players.slice().concat(game.dead),
									num = 0;
								targets.forEach((i) => {
									i.getAllHistory('sourceDamage', function (evt) {
										num += evt.num;
									});
									i.getAllHistory('damage', function (evt) {
										num += evt.num;
									});
								});
								return num >= 100;
							},
							content() {
								'step 0';
								player.storage.RE_zhuguang = true;
								player.nodying = false;
								player.originDie = lib.element.player.die;
								lib.translate['RE_yongsheng_info'] = '<span class="bluetext" style="color: #6699FF">锁定技</span>,你始终翻面,你不是你未对其造成伤害的角色的合法卡牌目标并取消后续结算.出牌阶段开始时/你受到伤害后,你可以弃置区域内的一张牌回复一点体力.';
								Reflect.defineProperty(player, 'die', {
									get:
										() =>
											(...args) =>
												player.originDie(...args).set('finished', false),
								});
								player.maxHp = 3;
								player.update();
								('step 1');
								player.addSkill('RE_xiuyi');
							},
						},
						RE_anxi: {
							audio: 'ext:幻想志/audio:2',
							trigger: {
								global: ['recoverEnd', 'damageEnd'],
							},
							filter(event, player) {
								return true;
							},
							round: 5, //QQQ
							fixed: true,
							charlotte: true,
							forced: true,
							content() {
								'step 0';
								var bool = 0,
									targets = game.players.slice(0),
									cards = player.getCards('h'),
									num = 0;
								for (var i = 0; i < targets.length; i++) {
									for (card of cards) {
										if (player.canUse(card, targets[i])) {
											num++;
										}
									}
								}
								var max = player.getCardUsable('sha');
								if (num > 5 && player.countCards('h') > 6 && player.countCards('h', 'sha') > 0 && max > 0) {
									bool = 1;
								}
								player
									.chooseControl(['执行摸牌阶段', '执行出牌阶段'], function () {
										return _status.event.bool;
									})
									.set('prompt', '###暗袭:请选择一项###')
									.set('bool', bool);
								('step 1');
								if (result.control == '执行摸牌阶段') {
									var next = player.phaseDraw();
									event.finish();
								} else if (result.control == '执行出牌阶段') {
									player.phaseUse();
								} else {
									event.finish();
								}
							},
							ai: {
								threaten: 0.8,
							},
						},
						RE_xiuyi: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'useCard' },
							fixed: true,
							charlotte: true,
							forced: true,
							filter(event, player) {
								var evt = player.getLastUsed(1);
								if (!evt) return false;
								var name1 = evt.card.name;
								var name2 = event.card.name;
								var num1 = get.translation(evt.card.name).length,
									num2 = get.translation(event.card.name).length;
								return name1 && name2 && name1 != null && name2 != null && name != name2 && num1 != num2;
							},
							content() {
								var evt = player.getLastUsed(1);
								var num1 = get.translation(evt.card.name).length,
									num2 = get.translation(trigger.card.name).length;
								var num = Math.abs(num1 - num2);
								player.draw(num);
								trigger.effectCount += num;
								if (get.type(trigger.card) != 'equip') game.log(trigger.card, '额外结算' + get.cnNumber(num) + '次');
							},
						},
						RE_niwang: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: ['phaseBegin', 'gameDrawAfter', 'phaseJieshuBegin'], player: ['drawBefore', 'gainBefore', 'chooseToUseBefore', 'useCardBefore', 'gainPlayerCardBefore', 'discardPlayerCardBefore', 'discardBefore'] },
							init(player) {
								player.die();
							},
							fixed: true,
							charlotte: true,
							forced: true,
							forceDie: true,
							popup: false,
							forced: true,
							filter(event, player) {
								return player.isDead();
							},
							mod: {
								targetInRange: () => true,
								cardUsable: () => Infinity,
								playerEnabled(card, player, target) {
									if (!target.hasMark('RE_niwang_mark')) return false;
								},
							},
							content() {
								'step 0';
								if (event.triggername == 'gameDrawAfter') {
									player
										.chooseTarget('逆亡:令至多三名角色分别获得〖乘客〗标记', true, [1, 3])
										.set('complexSelect', true)
										.set('ai', (target) => {
											return -get.attitude(player, target);
										});
								}
								('step 1');
								if (result.bool) {
									var targets = result.targets;
									player.line(targets);
									for (var i = 0; i < targets.length; i++) {
										targets[i].addMark('RE_niwang_mark', 1);
									}
								}
								switch (event.triggername) {
									case 'phaseBegin': {
										var next = player.phaseDraw();
										next.set('forceDie', true);
										break;
									}
									case 'phaseJieshuBegin': {
										var next = player.phaseUse();
										next.set('forceDie', true);
										break;
									}
									case 'drawBefore': {
										trigger.set('forceDie', true);
										break;
									}
									case 'gainBefore': {
										trigger.set('forceDie', true);
										break;
									}
									case 'chooseToUseBefore': {
										trigger.set('forceDie', true);
										break;
									}
									case 'useCardBefore': {
										trigger.set('forceDie', true);
										break;
									}
									case 'discardPlayerCardBefore': {
										trigger.set('forceDie', true);
										break;
									}
									case 'gainPlayerCardBefore': {
										trigger.set('forceDie', true);
										break;
									}
									case 'discardBefore': {
										trigger.set('forceDie', true);
										break;
									}
								}
								('step 2');
								if (event.triggername == 'phaseBegin') player.draw(player.countCards('h'));
							},
							subSkill: {
								mark: {
									marktext: '乘客',
									intro: {
										name: '乘客',
										name2: '乘客',
										markcount(storage, player) {
											return player.countMark('RE_niwang_mark');
										},
										content(storage, player) {
											return '已成为乘客';
										},
									},
								},
							},
						},
						RE_lvxing: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'useCardToPlayered' },
							fixed: true,
							charlotte: true,
							forced: true,
							forceDie: true,
							filter(event, player) {
								var target = event.target;
								return (
									target.hasMark('RE_niwang_mark') &&
									target.isAlive() &&
									player
										.getHistory('useCard', function (evt) {
											return evt.targets && evt.targets.includes(target);
										})
										.indexOf(event.parent) > -1 &&
									player.isDead()
								);
							},
							content() {
								'step 0';
								var target = trigger.target;
								var index = player
									.getHistory('useCard', function (evt) {
										return evt.targets && evt.targets.includes(target);
									})
									.indexOf(trigger.parent);
								switch (index) {
									case 0: {
										player
											.chooseTarget('逆亡:你可以转移〖乘客〗标记令另外一名角色获得', (card, player, target) => {
												if (player == target) return false;
												return !_status.event.targets.includes(target);
											})
											.set('complexSelect', true)
											.set('ai', (target) => {
												return -get.attitude(player, target);
											})
											.set('targets', [trigger.target]);
										break;
									}
									case 1: {
										let countnum = game.countPlayer(function (current) {
											return !current.hasMark('RE_niwang_mark');
										}),
											list = [];
										for (var i = 0; i < ui.cardPile.childElementCount; i++) {
											var node = ui.cardPile.childNodes[i];
											list.push(node);
											if (list.length >= countnum) break;
										}
										if (list.length < countnum) {
											for (var i = 0; i < ui.discardPile.childElementCount; i++) {
												var node = ui.discardPile.childNodes[i];
												list.push(node);
												if (list.length >= countnum) break;
											}
										}
										player.gain(list, 'gain2');
										break;
									}
									case 2: {
										let count = game.countPlayer(function (current) {
											return current.hasMark('RE_niwang_mark');
										});
										let players = game.filterPlayer(function (current) {
											return !current.hasMark('RE_niwang_mark') && current != player;
										});
										while (players.length) {
											let target = players.shift();
											if (target.countCards('he') > 0) {
												var next = player.discardPlayerCard(target, true, 'he', [Math.min(target.countCards('he'), count), Math.min(target.countCards('he'), count)]);
												next.set('forceDie', true);
											}
											if (target.countCards('he') <= 0) target.loseHp();
										}
										event.finish();
										break;
									}
									case 3: {
										event.goto(2);
										break;
									}
								}
								('step 1');
								if (result.bool && result.targets.length) {
									//trigger.cancel();
									trigger.target.removeMark('RE_niwang_mark', 1);
									var targets = result.targets;
									player.line(targets);
									for (var i = 0; i < targets.length; i++) {
										targets[i].addMark('RE_niwang_mark', 1);
									}
								}
								event.finish();
								('step 2');
								if (player.countCards('h') <= 0) event.finish();
								else {
									let count = game.countPlayer(function (current) {
										return current.hasMark('RE_niwang_mark');
									});
									var next = player.chooseToDiscard('旅行:请弃置' + get.cnNumber(count) + '牌依次可以视为使用对应种类的任意一张牌', 'h', [Math.min(player.countCards('h'), count), Math.min(player.countCards('h'), count)]).set('ai', (card) => {
										if (get.type(card) == 'basic' || get.type(card) == 'trick') return 10;
										return 0;
									});
									next.set('forceDie', true);
								}
								('step 3');
								if (result.bool && result.cards.length) {
									event.list = [];
									for (var i = 0; i < result.cards.length; i++) {
										event.list.push(get.type2(result.cards[i]));
									}
								} else {
									event.finish();
								}
								('step 4');
								if (event.list && event.list.length) {
									var vcards = [],
										list = event.list,
										random = event.list.shift();
									for (var name of lib.inpile) {
										if (get.type2(name) != random) continue;
										if (get.type(name) == 'equip' || get.type(name) == 'delay') continue;
										if (lib.filter.filterCard({ name: name }, player, trigger.getParent('phaseUse'))) vcards.push([get.translation(get.type2(name)), '', name]);
										if (name == 'sha') {
											for (var nature of lib.inpile_nature) {
												if (lib.filter.filterCard({ name: name, nature: nature }, player, trigger.getParent('phaseUse'))) vcards.push([get.translation(get.type2(name)), '', name, nature]);
											}
										}
									}
									if (vcards.length) {
										vcards.sort(lib.sort.name);
										var rand1 = Math.random() < 1 / 3;
										var rand2 = Math.random() < 0.5;
										var rand3 = Math.random() < 1 / 3;
										var rand4 = Math.random() < 1 / 3;
										var dialog = ui.create.dialog('旅行', [vcards, 'vcard']);
										player
											.chooseButton(dialog)
											.set('ai', function (button, card) {
												if (player.hp <= 1 || player.countCards('he') < 3) return 0;
												var card = game.createCard(button.link[2]);
												var name = button.link[2];
												if (get.type(card) == 'trick') {
													if (player.hp <= 1) {
														switch (name) {
															case 'zhiliaobo':
																return 1;
															case 'dunpaigedang':
																return 0.8;
															case 'nanman':
																return 0.5;
															default:
																return 0;
														}
													}
													if (rand4 && player.countCards('h') <= 1) {
														switch (name) {
															case 'zengbin':
																return 1;
															case 'wuzhong':
																return 0.8;
															default:
																return 0;
														}
													}
													if (player.hasSkill('qinglonglingzhu')) {
														if (rand2) return name == 'chiyuxi' ? 0.8 : 0;
														return name == 'jingleishan' ? 0.8 : 0;
													}
													if (rand2) return name == 'wanjian' ? 0.8 : 0;
													return name == 'nanman' ? 0.8 : 0;
												}
												if (player.hp <= 2 && get.type(card) == 'basic') return name == 'tao' ? 1 : 0;
												var i = Math.floor(Math.random() * list.length);
												if (rand2) return list[i];
												if (rand1) return get.value(card);
												return ai.get.useful(card);
											})
											.set('filterButton', function (button) {
												return lib.filter.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.getParent('phaseUse'));
											})
											.set('forceDie', true);
									} else {
										event.finish();
									}
								} else {
									event.finish();
								}
								('step 5');
								if (result.bool) {
									var links = result.links;
									game.broadcastAll(function (card) {
										lib.skill.RE_lvxing_backup.viewAs = { name: links[0][2], nature: links[0][3] };
										lib.skill.RE_lvxing_backup.prompt = '视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
									}, card);
									var next = player.chooseToUse();
									next.set('forceDie', true);
									next.set('openskilldialog', '视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]));
									next.set('norestore', true);
									next.set('addCount', false);
									next.set('_backupevent', 'RE_lvxing_backup');
									next.set('custom', {
										add: {},
										replace: { window() { } },
									});
									next.backup('RE_lvxing_backup');
								} else {
									if (event.list && event.list.length) event.goto(4);
								}
								('step 6');
								if (event.list && event.list.length) event.goto(4);
							},
							subSkill: {
								backup: {
									audio: 'ext:幻想志/audio:2',
									filterCard() {
										return false;
									},
									popname: true,
									selectCard: -1,
								},
							},
						},
						RE_jueyuan: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'useCardAfter' },
							filter(event, player) {
								var index = player.getHistory('useCard', (evt) => {
									return evt.cards.filterInD('d').length;
								}).length;
								if (!event.isPhaseUsing(player)) return false;
								return index > 3 && player.isDead();
							},
							fixed: true,
							charlotte: true,
							forced: true,
							forceDie: true,
							content() {
								'step 0';
								let players = game.countPlayer(function (current) {
									return current.hasMark('RE_niwang_mark');
								});
								while (players.length) {
									let target = players.shift();
									target.removeMark('RE_niwang_mark', target.countMark('RE_niwang_mark'));
								}
								player.revive();
								player.skills = [];
								('step 1');
								player.init('RE_NoirRE');
								player.update();
							},
						},
						RE_fanwu: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: ['recoverAfter', 'changeHp'] },
							fixed: true,
							charlotte: true,
							forced: true,
							mod: {
								maxHandcard() {
									return Infinity;
								},
							},
							mark: true,
							marktext: '反',
							intro: {
								name: '反物',
								markcount(storage, player) {
									return player.hp;
								},
								content(storage, player) {
									return '当前体力值:' + player.hp;
								},
							},
							init(player) {
								for (var i = 1; i <= 5; i++) {
									// player.expandEquip('equip'+i);
									var slotsx = [...new Set(['equip' + i])].sort();
									for (var slot of slotsx) {
										var expand = Infinity;
										game.log(player, '获得了' + get.cnNumber(expand) + '个额外的', '#g' + get.translation(slot) + '栏');
										if (!player.expandedSlots) player.expandedSlots = {};
										if (!player.expandedSlots[slot]) player.expandedSlots[slot] = 0;
										player.expandedSlots[slot] += expand;
									}
									player.$syncExpand();
								}
								Reflect.defineProperty(player, 'damage', {
									get() {
										return function () {
											var next = game.createEvent('recover');
											next.player = this;
											var nocard, nosource;
											var event = _status.event;
											for (var i = 0; i < arguments.length; i++) {
												if (get.itemtype(arguments[i]) == 'cards') {
													next.cards = arguments[i].slice(0);
												} else if (get.itemtype(arguments[i]) == 'card') {
													next.card = arguments[i];
												} else if (get.itemtype(arguments[i]) == 'player') {
													next.source = arguments[i];
												} else if (typeof arguments[i] == 'object' && arguments[i] && arguments[i].name) {
													next.card = arguments[i];
												} else if (typeof arguments[i] == 'number') {
													next.num = arguments[i];
												} else if (arguments[i] == 'nocard') {
													nocard = true;
												} else if (arguments[i] == 'nosource') {
													nosource = true;
												}
											}
											if (next.card == undefined && !nocard) next.card = event.card;
											if (next.cards == undefined && !nocard) next.cards = event.cards;
											if (next.source == undefined && !nosource) next.source = event.player;
											if (next.num == undefined) next.num = 1;
											if (next.num <= 0) _status.event.next.remove(next);
											next.setContent('recover');
											return next;
										};
									},
								});
								Reflect.defineProperty(player, 'loseHp', {
									get() {
										return function () {
											var next = game.createEvent('recover');
											next.player = this;
											var nocard, nosource;
											var event = _status.event;
											for (var i = 0; i < arguments.length; i++) {
												if (get.itemtype(arguments[i]) == 'cards') {
													next.cards = arguments[i].slice(0);
												} else if (get.itemtype(arguments[i]) == 'card') {
													next.card = arguments[i];
												} else if (get.itemtype(arguments[i]) == 'player') {
													next.source = arguments[i];
												} else if (typeof arguments[i] == 'object' && arguments[i] && arguments[i].name) {
													next.card = arguments[i];
												} else if (typeof arguments[i] == 'number') {
													next.num = arguments[i];
												} else if (arguments[i] == 'nocard') {
													nocard = true;
												} else if (arguments[i] == 'nosource') {
													nosource = true;
												}
											}
											if (next.card == undefined && !nocard) next.card = event.card;
											if (next.cards == undefined && !nocard) next.cards = event.cards;
											if (next.source == undefined && !nosource) next.source = event.player;
											if (next.num == undefined) next.num = 1;
											if (next.num <= 0) _status.event.next.remove(next);
											next.setContent('recover');
											return next;
										};
									},
								});
								Reflect.defineProperty(player, 'recover', {
									get() {
										return function () {
											var next = game.createEvent('loseHp');
											for (var i = 0; i < arguments.length; i++) {
												if (typeof arguments[i] == 'number') {
													next.num = arguments[i];
												}
											}
											next.player = this;
											if (next.num == undefined) next.num = 1;
											next.setContent('loseHp');
											return next;
										};
									},
								});
								Reflect.defineProperty(player, 'gainMaxHp', {
									get() {
										return function () {
											var next = game.createEvent('loseMaxHp');
											next.player = this;
											next.num = 1;
											for (var i = 0; i < arguments.length; i++) {
												if (typeof arguments[i] === 'number') {
													next.num = arguments[i];
												} else if (typeof arguments[i] === 'boolean') {
													next.forced = arguments[i];
												}
											}
											next.setContent('loseMaxHp');
											return next;
										};
									},
								});
								Reflect.defineProperty(player, 'loseMaxHp', {
									get() {
										return function () {
											var next = game.createEvent('gainMaxHp');
											next.player = this;
											next.num = 1;
											for (var i = 0; i < arguments.length; i++) {
												if (typeof arguments[i] === 'number') {
													next.num = arguments[i];
												} else if (typeof arguments[i] === 'boolean') {
													next.forced = arguments[i];
												}
											}
											next.setContent('gainMaxHp');
											return next;
										};
									},
								});
								Reflect.defineProperty(player, 'dying', {
									get() {
										return function () { };
									},
								});
							},
							filter(event, player) {
								return player.hp > 0;
							},
							content() {
								if (player.hp > 0) player.die();
							},
							ai: {
								effect: {
									target(card, player, target, current) {
										if (get.type(card) == 'equip') return [1, 3];
									},
								},
							},
						},
						RE_beilun: {
							audio: 'ext:幻想志/audio:2',
							trigger: { global: ['drawAfter', 'discardAfter', 'damageAfter', 'recoverAfter'] },
							_priority: 20,
							filter(event, player) {
								var num = player.getHistory('useSkill', (evt) => evt.skill == 'RE_beilun').length;
								if (event.name == 'discard') return event.getParent(2).name != 'RE_beilun' && num < player.countCards('h') && event.player.isAlive();
								return event.parent.name != 'RE_beilun' && num < player.countCards('h') && event.player.isAlive();
							},
							check(event, player) {
								if (event.name == 'discard' || event.name == 'damage') return get.attitude(player, event.player) > 0;
								return get.attitude(player, event.player) < 0;
							},
							prompt2(event, player) {
								var str = '你可以令' + get.translation(event.player);
								if (event.player == game.me) str += '(你)';
								switch (event.name) {
									case 'draw': {
										str += '执行相反的结算(弃置牌)';
										break;
									}
									case 'discard': {
										str += '执行相反的结算(摸牌)';
										break;
									}
									case 'damage': {
										str += '执行相反的结算(回复体力)';
										break;
									}
									case 'recover': {
										str += '执行相反的结算(受到伤害)';
										break;
									}
								}
								return str;
							},
							content() {
								player.line(trigger.player);
								switch (event.triggername) {
									case 'drawAfter': {
										trigger.player.chooseToDiscard(trigger.num, true);
										break;
									}
									case 'discardAfter': {
										trigger.player.draw(trigger.cards.length);
										break;
									}
									case 'damageAfter': {
										trigger.player.recover(trigger.num);
										break;
									}
									case 'recoverAfter': {
										trigger.player.damage(trigger.num);
										break;
									}
								}
							},
							ai: {
								threaten: 3,
							},
						},
						RE_zhongshi: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'changeHp' },
							_priority: 100,
							fixed: true,
							usable: 1, //QQQ
							filter(event, player) {
								return player.hp > 0 && event.getParent(2).name != 'RE_zhongshi_recover';
							},
							check(event, player) {
								return 1;
							},
							content() {
								'step 0';
								event.num = player.countCards('h');
								('step 1');
								while (event.num > 0) {
									let players = game
										.filterPlayer(function (current) {
											return current != player && current.isAlive();
										})
										.sortBySeat();
									player.useCard({ name: 'wanjian' }, players, false);
									event.num--;
								}
								('step 2');
								if (player.storage.RE_zhongshi_recover && typeof player.storage.RE_zhongshi_recover == 'number') {
									player.recover(player.storage.RE_zhongshi_recover);
									delete player.storage.RE_zhongshi_recover;
								}
							},
							group: ['RE_zhongshi_recover'],
							subSkill: {
								recover: {
									trigger: {
										global: 'damageAfter',
									},
									filter(event, player) {
										if (event.getParent(3).name == 'RE_zhongshi') return true;
									},
									popup: false,
									forced: true,
									content() {
										if (!player.storage.RE_zhongshi_recover) player.storage.RE_zhongshi_recover = 1;
										player.storage.RE_zhongshi_recover++;
									},
									ai: {
										threaten: 1.5,
									},
								},
							},
						},
						RE_xunbao: {
							audio: 'ext:幻想志/audio:4',
							trigger: { player: ['phaseUseBegin', 'damageBegin2'] },
							fixed: true,
							charlotte: true,
							forced: true,
							filter(event, player) {
								return player.countCards('h') < player.maxHp;
							},
							content() {
								'step 0';
								event.num = player.maxHp - player.countCards('h');
								if (event.num < 6) event.num = 6;
								('step 1');
								event.basic = 0;
								(event.equip = 0), (event.trick = 0);
								('step 2');
								if (event.num > 0) {
									var cards = player.get('h');
									for (var i = 0; i < cards.length; i++) {
										if (get.type(cards[i], 'trick') == 'basic') {
											event.basic++;
										}
										if (get.type(cards[i], 'trick') == 'equip') {
											event.equip++;
										}
										if (get.type(cards[i], 'trick') == 'trick') {
											event.trick++;
										}
									}
									event.bool = Math.min(event.basic, event.equip, event.trick);
								}
								('step 3');
								var cards = [],
									cardPile = [];
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									cardPile.push(ui.cardPile.childNodes[i]);
								}
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									cardPile.push(ui.discardPile.childNodes[i]);
								}
								cardPile.randomSort();
								switch (event.bool) {
									case event.basic:
										event.num--;
										for (var i = 0; i < cardPile.length; i++) {
											if (get.type(cardPile[i], 'trick') == 'basic' && !cards.includes(cardPile[i])) {
												var card = cardPile[i];
												break;
											}
										}
										if (card) cards.push(card);
										break;
									case event.trick:
										event.num--;
										for (var i = 0; i < cardPile.length; i++) {
											if (get.type(cardPile[i], 'trick') == 'trick' && !cards.includes(cardPile[i])) {
												var card = cardPile[i];
												break;
											}
										}
										if (card) cards.push(card);
										break;
									case event.equip:
										event.num--;
										for (var i = 0; i < cardPile.length; i++) {
											if (get.type(cardPile[i], 'trick') == 'equip' && !cards.includes(cardPile[i])) {
												var card = cardPile[i];
												break;
											}
										}
										if (card) cards.push(card);
										break;
								}
								if (cards.length) player.gain(cards, 'draw');
								if (event.num > 0) event.goto(1);
								('step 4');
								if (player.countCards('h') < player.maxHp) {
									event.goto(0);
								}
								('step 5');
								var cards = [];
								if (get.mode() == 'boss') {
									for (var i = 0; i < lib.cardPack.mode_boss.length; i++) {
										cards.push(lib.cardPack.mode_boss[i]);
									}
									player.gain(game.createCard(cards.randomGet()), 'gain2');
								}
								('step 6');
								if (_status.currentPhase != player) {
									player.chooseToUse({
										prompt: '请选择使用一张牌,使用后可以再次使用一张牌',
									});
								} else {
									event.finish();
								}
								('step 7');
								if (!result.bool) {
									event.finish();
								} else {
									event.goto(6);
								}
							},
						},
						zyile_shiji: {
							trigger: { global: 'gameDrawAfter' },
							fixed: true,
							charlotte: true,
							forced: true,
							_priority: 333,
							popup: false,
							silent: true,
							content() {
								var handcards1, handcards2, judges, equips, viewAs, i, j;
								player.storage.zyile_shijix = [];
								player.storage.zyile_shijix2 = false;
								var table = document.createElement('table');
								var tr, td, str, st;
								var players = game.players.concat(game.dead);
								for (var i = 0; i < players.length; i++) {
									player.storage.zyile_shijix5.push(players[i].name);
								}
								for (var i = 0; i < game.players.length; i++) {
									viewAs = [];
									handcards1 = [];
									handcards2 = [];
									judges = [];
									equips = [];
									for (j = 0; j < game.players[i].node.handcards1.childNodes.length; j++) handcards1.push(game.players[i].node.handcards1.childNodes[j]);
									for (j = 0; j < game.players[i].node.handcards2.childNodes.length; j++) handcards2.push(game.players[i].node.handcards2.childNodes[j]);
									for (j = 0; j < game.players[i].node.judges.childNodes.length; j++) {
										viewAs.push(game.players[i].node.judges.childNodes[j].viewAs);
										judges.push(game.players[i].node.judges.childNodes[j]);
									}
									for (j = 0; j < game.players[i].node.equips.childNodes.length; j++) equips.push(game.players[i].node.equips.childNodes[j]);
									tr = document.createElement('tr');
									tr.style.verticalAlign = 'top';
									table.appendChild(tr);
									td = document.createElement('td');
									td.innerHTML = get.translation(game.players[i]);
									tr.appendChild(td);
									td = document.createElement('td');
									td.innerHTML = handcards1.length + handcards2.length;
									tr.appendChild(td);
									str = '';
									if (equips.length + judges.length) {
										if (equips.length) {
											str += get.translation(equips);
											if (judges.length) {
												str += '、';
											}
										}
										if (judges.length) {
											str += get.translation(judges, 'viewAs');
										}
									} else {
										str = '';
									}
									td = document.createElement('td');
									td.innerHTML = str;
									tr.appendChild(td);
									player.storage.zyile_shijix.push({
										player: game.players[i],
										handcards1: handcards1,
										handcards2: handcards2,
										judges: judges,
										equips: equips,
										viewAs: viewAs,
										value: handcards1.length + handcards2.length + equips.length - judges.length,
									});
								}
								table.firstChild.firstChild.style.width = '452x';
								table.firstChild.childNodes[1].style.width = '48px';
							},
							group: ['zyile_shijix'],
						},
						zyile_shijix: {
							audio: 'ext:幻想志/audio:2',
							fixed: true,
							charlotte: true,
							forced: true,
							forceDie: true,
							trigger: { player: 'dieBegin' },
							_priority: -222,
							filter(event, player) {
								return player.maxHp > 0;
							},
							check(event, player) {
								player.hp <= 0;
							},
							init(player) {
								player.storage.zyile_shijix5 = [];
							},
							content() {
								'step 0';
								trigger.untrigger();
								trigger.finish();
								('step 1');
								player.loseMaxHp();
								if (!ui.maxcount) ui.maxcount = 1;
								else ui.maxcount++;
								('step 2');
								//event.player.storage.zyile_shijix4++;
								if (game.dead.length) {
									while (game.dead.length) {
										game.dead[0].revive();
									}
								}
								for (var i = 0; i < game.players.length; i++) {
									if (game.players[i] == player) continue;
									if (game.players[i].isOut()) game.players[i].in();
									if (game.players[i].hp < game.players[i].maxHp) game.players[i].hp = game.players[i].maxHp;
									game.players[i].update();
								}
								('step 3');
								('step 4');
								ui.window.style.transition = 'all 0.5s';
								ui.window.classList.add('zoomout3');
								ui.window.delete();
								ui.window.hide();
								game.addVideo('skill', event.player, 'zyile_shijix');
								('step 5');
								var storage = event.player.storage.zyile_shijix;
								var storage2 = event.player.storage.zyile_shijix5;
								var player, frag;
								var i,
									j,
									players = [],
									num = 0,
									players2 = game.players.concat(game.dead);
								for (var i = 0; i < storage2.length; i++) {
									players.push(storage2[i]);
								}
								players2.remove(event.player);
								players.shift();
								//players2.sort(lib.sort.seat);
								while (num < players2.length) {
									lib.element.player.init.call(players2[num], players.shift());
									players2[num].update();
									num++;
								}
								for (var i = 0; i < storage.length; i++) {
									if (game.players.includes(storage[i].player)) {
										player = storage[i].player;
										while (player.node.handcards1.childNodes.length) ui.discardPile.appendChild(player.node.handcards1.firstChild);
										while (player.node.handcards2.childNodes.length) ui.discardPile.appendChild(player.node.handcards2.firstChild);
										while (player.node.judges.childNodes.length) ui.discardPile.appendChild(player.node.judges.firstChild);
										while (player.node.equips.childNodes.length) ui.discardPile.appendChild(player.node.equips.firstChild);
									}
								}
								for (var i = 0; i < storage.length; i++) {
									if (game.players.includes(storage[i].player)) {
										player = storage[i].player;
										for (j = 0; j < storage[i].handcards1.length; j++) {
											if (storage[i].handcards1[j].parentNode == ui.discardPile || storage[i].handcards1[j].parentNode == ui.cardPile) player.node.handcards1.appendChild(storage[i].handcards1[j]);
										}
										for (j = 0; j < storage[i].handcards2.length; j++) {
											if (storage[i].handcards2[j].parentNode == ui.discardPile || storage[i].handcards2[j].parentNode == ui.cardPile) player.node.handcards2.appendChild(storage[i].handcards2[j]);
										}
										for (j = 0; j < storage[i].equips.length; j++) {
											if (storage[i].equips[j].parentNode == ui.discardPile || storage[i].equips[j].parentNode == ui.cardPile) player.node.equips.appendChild(storage[i].equips[j]);
										}
										for (j = 0; j < storage[i].judges.length; j++) {
											if (storage[i].judges[j].parentNode == ui.discardPile || storage[i].judges[j].parentNode == ui.cardPile) {
												storage[i].judges[j].viewAs = storage[i].viewAs[j];
												player.node.judges.appendChild(storage[i].judges[j]);
											}
										}
										player.update();
									}
								}
								ui.window.classList.remove('zoomout3');
								ui.window.classList.add('zoomin3');
								document.body.appendChild(ui.window);
								var data = {};
								for (var i = 0; i < game.players.length; i++) {
									data[game.players[i].dataset.position] = {
										h: get.cardsInfo(game.players[i].get('h')),
										e: get.cardsInfo(game.players[i].get('e')),
										j: get.cardsInfo(game.players[i].get('j')),
									};
								}
								game.addVideo('skill', event.player, ['zyile_shijix', data]);
								ui.updatehl();
								player.update();
								('step 6');
								ui.window.show();
								ui.window.classList.remove('zoomin3');
								setTimeout(function () {
									ui.window.style.transition = '';
									game.resume();
								}, 500);
								game.pause();
								('step 7');
								var player = event.player;
								if (player.hp < player.maxHp) player.hp = player.maxHp;
								player.update();
								var cards = [];
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
									cards.push(ui.discardPile.childNodes[i]);
								}
								ui.discardPile.innerHTML = '';
								for (var i = 0; i < cards.length; i++) {
									ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
								}
								game.phaseNumber = 1;
								game.roundNumber = 1;
							},
						},
						RE_chuangjing: {
							audio: 'ext:幻想志/audio:4',
							fixed: true,
							charlotte: true,
							init(player) {
								if (game.countPlayer((current) => current.name == 'RE_mia') > 1) {
									while (player.skills.length) {
										player.skills.pop();
									}
									player.skills = [];
									lib.element.player.init.call(player, 'sunce');
								}
							},
							trigger: { global: 'gameStart', player: ['turnOverBefore', 'linkBefore', 'discardAfter', 'damageAfter', 'loseHpAfter'] },
							forced: true,
							_priority: 20,
							filter(event, player) {
								if (event.name == 'turnOver') return !player.isTurnedOver();
								return true;
							},
							content() {
								if (event.triggername == 'gameStart') {
									player.disableJudge();
								} else if (event.triggername == 'turnOverBefore') {
									trigger.cancel();
									game.log(player, '取消了翻面');
								} else if (event.triggername == 'linkBefore') {
									if (!player.isLinked()) {
										trigger.cancel();
										game.log(player, '取消了横置');
									}
								} else {
									switch (event.triggername) {
										case 'discardAfter': {
											let players = game.filterPlayer(function (current) {
												return current != player;
											});
											if (players.length) {
												while (players.length) {
													let players2 = players.shift();
													players2.chooseToDiscardx(trigger.cards.length, true);
												}
											}
										}
										case 'damageAfter': {
											let players = game.filterPlayer(function (current) {
												return current != player;
											});
											if (players.length) {
												while (players.length) {
													let players2 = players.shift();
													players2.damagex(trigger.num, trigger.nature, trigger.source, 'notrigger');
												}
											}
											break;
										}
										case 'loseHpAfter': {
											let players = game.filterPlayer(function (current) {
												return current != player;
											});
											if (players.length) {
												while (players.length) {
													let players2 = players.shift();
													players2.loseHpx(trigger.num, 'notrigger');
												}
											}
											break;
										}
									}
								}
							},
							ai: {
								noturn: true,
								threaten: 5,
							},
						},
						RE_bingruo: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'phaseZhunbeiBegin' },
							forced: true,
							fixed: true,
							charlotte: true,
							filter(event, player) {
								return player.hp > 0;
							},
							content() {
								player.loseHp();
							},
						},
						//出牌阶段你可以选择至少两项获得对应效果:
						//1.废除武器栏并减少一点体力上限,从牌堆随机获得一张伤害类牌并摸一张牌,本回合你的伤害类牌伤害值基数+1;
						//2.废除防具栏并减少一点体力上限,本回合你的伤害类牌可以指定任意名目标,使用伤害类牌无距离次数限制;
						//3.废除坐骑栏并减少一点体力上限,本回合其他角色非charlotte技失效并且无法使用或打出牌;
						//4.废除宝物栏并减少一点体力上限,本回合你使用牌指定目标后,可以摸x张牌(x为目标角色数)
						RE_mankai: {
							audio: 'ext:幻想志/audio:2',
							limited: true,
							init(player) {
								player.storage.RE_mankai = false;
							},
							intro: {
								content: 'limited',
							},
							mark: true,
							enable: 'phaseUse',
							filter(event, player) {
								return !player.storage.RE_mankai && player.countDisabled() < 5 && player.maxHp > 2;
							},
							async content(event, trigger, player) {
								//QQQ
								player.awakenSkill('RE_mankai');
								const { result } = await player.chooseButton(['选择废除至少2个装备栏获得对应效果', [[1, 2, 3, 4, 5], 'tdnodes']], [2, 5]).set('ai', () => Math.random());
								if (result.links && result.links[0]) {
									player.disableEquip(result.links);
									player.loseMaxHp(result.links.length);
									if (result.links.includes(1)) {
										var card = get.cardPile2((card) => get.tag(card, 'damage'));
										if (card) player.gain(card, 'draw');
										player.draw();
										player.addTempSkill('RE_mankai_buff4', 'phaseAfter');
									}
									if (result.links.includes(2)) {
										player.addTempSkill('RE_mankai_buff1', 'phaseAfter');
									}
									if (result.links.includes(3)) {
										for (var i of game.filterPlayer((current) => current != player)) {
											i.addTempSkill('baiban');
											i.addTempSkill('RE_mankai_buff2', 'phaseAfter');
										}
									}
									if (result.links.includes(4)) {
										for (var i of game.filterPlayer((current) => current != player)) {
											i.addTempSkill('baiban');
											i.addTempSkill('RE_mankai_buff2', 'phaseAfter');
										}
									}
									if (result.links.includes(5)) {
										player.addTempSkill('RE_mankai_buff3', 'phaseAfter');
									}
								}
							},
							ai: {
								order: 10,
								result: {
									player: 1,
								},
								threaten: 5,
							},
							subSkill: {
								buff1: {
									mod: {
										targetInRange: () => true,
										selectTarget(card, player, range) {
											if (Array.isArray(range) && range[1] == -1) return;
											if (get.tag(card, 'damage')) {
												range[1] = Infinity;
											}
										},
										cardUsable(card, player, num) {
											if (get.tag(card, 'damage')) {
												return Infinity;
											}
										},
									},
								},
								buff2: {
									charlotte: true,
									mod: {
										cardEnabled() {
											return false;
										},
										cardSavable() {
											return false;
										},
										cardRespondable() {
											return false;
										},
									},
								},
								buff3: {
									trigger: { player: 'useCardToTargeted' },
									filter(event, player) {
										return !player.hasSkill('RE_mankai_temp');
									},
									forced: true,
									content() {
										if (trigger.targets.length >= 1) {
											player.draw(trigger.targets.length);
											player.addTempSkill('RE_mankai_temp', { player: 'useCardAfter' });
										}
									},
								},
								buff4: {
									trigger: { player: 'useCard1' },
									forced: true,
									popup: false,
									firstDo: true,
									filter(event, player) {
										return event.targets.length && get.tag(event.card, 'damage');
									},
									content() {
										trigger.baseDamage++;
									},
								},
								temp: {
								},
							},
						},
						RE_shuangdao: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'useCardToTargeted' },
							forced: true,
							shaRelated: true,
							filter(event, player) {
								return event.isFirstTarget && get.tag(event.card, 'damage');
							},
							content() {
								trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
								trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
							},
							ai: {
								threaten: 1.3,
							},
						},
						RE_sanguan: {
							mod: {
								maxHandcard(player, current) {
									return current - 1;
								},
								attackRange(player, num) {
									return num - 1;
								},
								inRangeOf: () => true,
							},
						},
						RE_guizu: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'phaseDrawBegin' },
							check(event, player) {
								return 1;
							},
							forced: true,
							content() {
								'step 0';
								event.current = player.next;
								('step 1');
								if (event.current.num('h')) {
									event.current.chooseCard('交给' + get.translation(player) + '一张手牌或者弃置一张牌').set('ai', function (card) {
										if (get.attitude(event.current, player) <= 0) return -1;
										return 8 - get.value(card);
									});
								} else {
									player.line(event.current, 'green');
									event.current.damage();
									if (event.current.next != player) {
										event.current = event.current.next;
										event.redo();
									}
								}
								('step 2');
								if (!event.current.num('h')) {
									event.finish();
								} else {
									player.line(event.current, 'green');
									if (result.bool == false) {
										event.current.chooseToDiscard('h', true);
									} else {
										player.gain(result.cards[0]);
										event.current.$give(1, player);
									}
									if (event.current.next != player) {
										event.current = event.current.next;
										event.goto(1);
									}
								}
							},
							ai: {
								threaten: 2,
							},
						},
						RE_yaxin: {
							audio: 'ext:幻想志/audio:4',
							trigger: { player: 'phaseBegin' },
							forced: true,
							content() {
								'step 0';
								event.cards2 = get.cards(1);
								game.cardsGotoOrdering(event.cards2[0]);
								event.cards2[0].classList.add('infohidden');
								event.cards2[0].classList.add('infoflip');
								var node1 = event.cards2[0];
								event.animate = node1;
								if (lib.config.cardback_style != 'default') {
									node1.style.transitionProperty = 'none';
									ui.refresh(node1);
									node1.classList.add('infohidden');
									ui.refresh(node1);
									node1.style.transitionProperty = '';
								} else {
									node1.classList.add('infohidden');
								}
								event.dialog = ui.create.dialog('牌堆顶的牌', 'hidden');
								event.dialog.add(event.cards2[0]);
								event.dialog.open();
								game.pause();
								setTimeout(function () {
									event.animate.style.transition = 'all ease-in 0.3s';
									event.animate.style.transform = 'perspective(600px) rotateY(270deg) translateX(52px)';
									event.animate.classList.remove('infohidden');
									event.animate.style.transition = 'all 0s';
									ui.refresh(event.animate);
									event.animate.style.transform = 'perspective(600px) rotateY(-90deg) translateX(52px)';
									ui.refresh(event.animate);
									event.animate.style.transition = '';
									ui.refresh(event.animate);
									event.animate.style.transform = '';
								}, 500);
								setTimeout(function () {
									while (ui.dialogs.length) {
										ui.dialogs[0].close();
									}
									ui.clear();
									game.resume();
								}, 1500);
								('step 1');
								switch (event.cards2[0].suit) {
									case 'heart':
										ui.cardPile.appendChild(event.cards2[0]);
										player.useCard({ name: 'wuzhong' }, player, false);
										player.recover();
										break;
									case 'diamond':
										player
											.chooseTarget(
												'选择令一名角色获得此牌',
												function (card, player, target) {
													return player != target;
												},
												true
											)
											.set('ai', function (target) {
												return get.attitude(player, target);
											});
										event.goto(2);
										break;
									case 'club':
										player.gain(event.cards2[0], 'gain2');
										var targets = [];
										for (var i = 0; i < game.players.length; i++) {
											if (game.players[i] != player && player.canUse({ name: 'nanman' }, game.players[i], false, false)) {
												targets.push(game.players[i]);
											}
										}
										player.useCard({ name: 'nanman' }, targets, false);
										var card = game.createCard('sha');
										player.gain(card, 'gain2');
										break;
									case 'spade':
										ui.discardPile.appendChild(event.cards2[0]);
										player
											.chooseTarget(
												'选择令一名角色判定',
												function (card, player, target) {
													return player != target;
												},
												true
											)
											.set('ai', function (target) {
												return -get.attitude(player, target);
											});
										event.goto(3);
										break;
								}
								('step 2');
								if (result.bool && result.targets && result.targets.length && event.cards2[0].suit == 'diamond') {
									player.line(result.targets, 'green');
									result.targets[0].gain(event.cards2[0], 'gain2');
									var targets = [];
									for (var i = 0; i < game.players.length; i++) {
										if (player.canUse({ name: 'taoyuan' }, game.players[i], false, false)) {
											targets.push(game.players[i]);
										}
									}
									player.useCard({ name: 'taoyuan' }, targets, false);
									player.draw();
								} else {
									event.finish();
								}
								('step 3');
								if (result.bool && result.targets && result.targets.length && event.cards2[0].suit == 'spade') {
									player.line(result.targets, 'green');
									event.target = result.targets[0];
									result.targets[0].judge(function (card) {
										if (card.suit == 'club') return -1;
										if (card.suit == 'spade') return -2;
										return 0;
									});
								} else {
									event.finish();
								}
								('step 4');
								if (result.suit) {
									if (result.suit == 'club') {
										event.target.damage('thunder');
									} else if (result.suit == 'spade') {
										event.target.damage(2, 'thunder');
									}
								} else {
									event.finish();
								}
							},
						},
						RE_jianren: {
							audio: 'ext:幻想志/audio:2',
							trigger: { player: 'damageBegin2' },
							forced: true,
							usable: 1,
							filter(event, player) {
								return player.hp <= event.num;
							},
							content() {
								'step 0';
								trigger.cancel();
								('step 1');
								player.draw(trigger.num);
							},
						},
						arc_shouji: {
							audio: 'ext:幻想志/audio:2',
							trigger: {
								global: ['respond', 'useCard'],
							},
							forced: true,
							line: {
								color: [173, 154, 225],
							},
							filter(event, player) {
								if (event.player == player) return false;
								return (get.tag(event.card, 'recover') || get.tag(event.card, 'save') || get.tag(event.card, 'draw') || get.tag(event.card, 'gain'));
							},
							logTarget: 'player',
							content() {
								'step 0';
								player.addToExpansion(trigger.cards, trigger.player, 'give').gaintag.add('arc_shouji_mark');
								('step 1');
							},
							group: ['arc_shouji_gained'],
							subSkill: {
								gained: {
									trigger: {
										player: 'phaseBegin',
									},
									audio: 'ext:幻想志/audio:2',
									filter(event, player) {
										var cards = player.getExpansions('arc_shouji_mark');
										return cards.length;
									},
									prompt: '是否发动【收集】获得【聚】中的所有牌？',
									content() {
										'step 0';
										var cards = player.getExpansions('arc_shouji_mark');
										player.gain(cards, 'gain2');
										('step 1');
										if (player.maxHp <= player.countCards('h')) {
											var num = player.countCards('h') - player.maxHp;
											event.num = Math.ceil(num / 2);
											if (num > 0) {
												player.chooseToDiscard('h', true, num);
												var next = player.chooseTarget().set('ai', function (target) {
													var player = _status.event.player;
													return get.damageEffect(target, player, player);
												});
												next.set('prompt', '选择一名其他角色对其造成' + event.num + '点伤害');
												next.set('filterTarget', function (card, player, target) {
													return player != target;
												});
											}
										} else {
											event.finish();
										}
										('step 2');
										if (result.bool) {
											var target = result.targets[0];
											player.line(target);
											target.damage(event.num);
										} else {
											event.finish();
										}
									},
									ai: {
										threaten: 1.5,
									},
								},
							},
						},
						arc_shouji_mark: {
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							marktext: '<font color=#F08080>聚</font>',
						},
						arc_yanqi: {
							audio: 'ext:幻想志/audio:2',
							trigger: {
								global: 'recoverBefore',
							},
							filter(event, player) {
								return event.player.hp >= 1;
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							logTarget: 'player',
							content() {
								'step 0';
								trigger.cancel();
								('step 1');
								var next = player.chooseTarget().set('ai', function (target) {
									var player = _status.event.player;
									return get.effect(target, { name: 'sha' }, player, player);
								});
								next.set('prompt', '选择一名角色视为' + get.translation(trigger.player) + '对其使用一张杀');
								next.set('playerx', trigger.player);
								next.set('filterTarget', function (card, player, target) {
									var card = { name: 'sha' };
									return _status.event.playerx.canUse(card, target, false);
								});
								('step 2');
								if (result.bool) {
									var target = result.targets[0];
									player.line(target);
									var card = { name: 'sha' };
									if (trigger.player.canUse(card, target, false)) trigger.player.useCard(card, target, false);
								}
							},
							ai: {
								threaten: 1.5,
							},
						},
						arc_juji: {
							audio: 'ext:幻想志/audio:2',
							trigger: {
								global: ['respond', 'useCard'],
							},
							forced: true,
							line: {
								color: [173, 154, 225],
							},
							filter(event, player) {
								if (event.player == player) return false;
								return get.tag(event.card, 'damage');
							},
							logTarget: 'player',
							content() {
								'step 0';
								player.addToExpansion(trigger.cards, trigger.player, 'give').gaintag.add('arc_juji_mark');
								('step 1');
							},
							group: ['arc_juji_gained'],
							subSkill: {
								gained: {
									trigger: {
										player: 'phaseBegin',
									},
									audio: 'ext:幻想志/audio:2',
									filter(event, player) {
										var cards = player.getExpansions('arc_juji_mark');
										return cards.length;
									},
									check(event, player) {
										return player.hp > 1;
									},
									prompt: '是否发动【聚集】获得【集】中的所有牌？',
									content() {
										'step 0';
										var cards = player.getExpansions('arc_juji_mark');
										player.gain(cards, 'gain2');
										('step 1');
										if (player.maxHp <= player.countCards('h')) {
											player.loseHp();
											player.gainMaxHp();
										} else {
											event.finish();
										}
									},
									ai: {
										threaten: 1.5,
									},
								},
							},
						},
						arc_juji_mark: {
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							marktext: '<font color=#E0FFFF>集</font>',
						},
						arc_weiguang: {
							audio: 'ext:幻想志/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h', function (card) {
									return get.tag(card, 'damage');
								});
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										var info = lib.card[name];
										if (info.autoViewAs) continue;
										var card = game.createCard(name);
										if (get.tag(card, 'recover') || get.tag(card, 'draw') || get.tag(card, 'save') || get.tag(card, 'gain')) list.push([get.translation(lib.card[name].type), '', name]);
									}
									list.sort(lib.sort.name);
									return ui.create.dialog('微光', [list, 'vcard']);
								},
								filter(button, player) {
									return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									var player = _status.event.player,
										name = button.link[2];
									if (player.countCards('h') < 10 && name == 'wuzhong') return 6;
									if (player.hp < 4 && name == 'tao') return 9;
									if (player.countCards('hs', { type: 'basic' }) > 2 && name == 'jiu') return 5;
									var recover = 0;
									for (var i = 0; i < game.players.length; i++) {
										if (!game.players[i].isOut()) {
											if (game.players[i].hp < game.players[i].maxHp) {
												if (get.attitude(player, game.players[i]) > 0) {
													if (game.players[i].hp < 2) {
														recover += 0.5;
													}
													recover++;
												} else if (get.attitude(player, game.players[i]) < 0) {
													if (game.players[i].hp < 2) {
														recover -= 0.5;
													}
													recover--;
												}
											}
										}
									}
									if (recover > 0 && name == 'taoyuan') return 3;
									return -1;
								},
								backup(links, player) {
									return {
										audio: 'ext:幻想志/audio:2',
										filterCard: true,
										popname: true,
										position: 'h',
										viewAs: { name: links[0][2] },
										check(card) {
											return 8 - get.value(card);
										},
										filterCard(card) {
											return get.tag(card, 'damage');
										},
									};
								},
								prompt(links, player) {
									return '将一张伤害类的手牌当做' + get.translation(links[0][2]) + '使用';
								},
							},
							ai: {
								order: 7,
								result: {
									player: 1,
								},
							},
						},
						arc_dushi: {
							mod: {
								targetEnabled(card, player, target) {
									var cards = target.getCards('x');
									if (cards.length) {
										for (var i = 0; i < cards.length; i++) {
											if (player != target && card.suit == cards[i].suit) return false;
										}
									}
								},
							},
						},
						RE_huanqian: {
							audio: 'ext:幻想志/audio:2',
							init(player, skill) {
								player.storage.RE_huanqian = {
									list: [],
									owned: {},
									player: player,
								};
							},
							trigger: { global: ['gameStart', 'phaseBegin'] },
							filter(event, player) {
								return !player.storage.RE_huanqianinited;
							},
							forced: true,
							_priority: 10,
							content() {
								for (var i in lib.character) {
									if (lib.character[i][4].includes('minskin')) continue;
									if (lib.character[i][4].includes('boss') || lib.character[i][4].includes('hiddenboss')) {
										if (lib.config.mode == 'boss') continue;
										if (!lib.character[i][4].includes('bossallowed')) continue;
									}
									if (lib.character[i][4].includes('stonehidden')) continue;
									if (lib.config.banned.includes(i)) continue;
									player.storage.RE_huanqian.list.push(i);
								}
								for (var i = 0; i < game.players.length; i++) {
									player.storage.RE_huanqian.list.remove([game.players[i].name]);
									player.storage.RE_huanqian.list.remove([game.players[i].name1]);
									player.storage.RE_huanqian.list.remove([game.players[i].name2]);
								}
								lib.skill.RE_huanqian.get(player, 2);
								player.storage.RE_huanqianinited = true;
							},
							update(player) {
								player.storage.RE_huanqiantao = false;
								player.storage.RE_huanqianwuxie = false;
								player.storage.RE_huanqianshan = false;
								player.storage.RE_huanqiansha = false;
								var slist = player.storage.RE_huanqian.owned;
								var list = [];
								var skills2 = [];
								for (var i in slist) {
									list.push(i);
								}
								for (var i = 0; i < list.length; i++) {
									var skills = lib.character[list[i]][3].slice(0);
									for (var j = 0; j < skills.length; j++) {
										if (!lib.translate[skills[j] + '_info']) skills.splice(j--, 1);
										if (player.skills.includes(skills[j])) skills.splice(j--, 1);
										var info = lib.skill[skills[j]];
										if (lib.translate[skills[j] + '_info']) {
											var str = lib.translate[skills[j] + '_info'];
											if (str.indexOf('主公技') == 0 || str.indexOf('觉醒技') == 0 || info.zhuSkill || (info.intro && info.intro.content == 'limited') || get.is.locked(skills[j])) {
												if (info.intro && info.intro.content == 'limited') player.storage.RE_huanqiantao = true;
												if (str.indexOf('觉醒技') == 0) player.storage.RE_huanqianwuxie = true;
												if (get.is.locked(skills[j])) player.storage.RE_huanqianshan = true;
												if (info.zhuSkill || str.indexOf('主公技') == 0) player.storage.RE_huanqiansha = true;
												skills.splice(j--, 1);
											}
										}
									}
									skills2 = skills2.concat(skills);
								}
								game.broadcastAll(function (skills2) {
									var keep = true;
									player.removeAdditionalSkill('RE_huanqian');
									player.addAdditionalSkill('RE_huanqian', skills2, keep);
									game.expandSkills(skills2);
								}, skills2);
							},
							get(player, num) {
								var skills2 = [],
									list = [];
								if (typeof num != 'number') num = 1;
								while (num-- > 0) {
									var name = player.storage.RE_huanqian.list.randomRemove();
									list.push(name);
									var skills = lib.character[name][3].slice(0);
									for (var i = 0; i < skills.length; i++) {
										if (!lib.translate[skills[i] + '_info']) skills.splice(i--, 1);
										if (player.skills.includes(skills[i])) skills.splice(i--, 1);
										var info = lib.skill[skills[i]];
										if (lib.translate[skills[i] + '_info']) {
											var str = lib.translate[skills[i] + '_info'];
											if (str.indexOf('主公技') == 0 || str.indexOf('觉醒技') == 0 || info.zhuSkill || (info.intro && info.intro.content == 'limited') || get.is.locked(skills[i])) {
												if (info.intro && info.intro.content == 'limited') player.storage.RE_huanqiantao = true;
												if (str.indexOf('觉醒技') == 0) player.storage.RE_huanqianwuxie = true;
												if (get.is.locked(skills[i])) player.storage.RE_huanqianshan = true;
												if (info.zhuSkill || str.indexOf('主公技') == 0) player.storage.RE_huanqiansha = true;
												skills.splice(i--, 1);
											}
										}
									}
									skills2 = skills2.concat(skills);
									player.storage.RE_huanqian.owned[name] = skills;
									player.popup(name);
									game.log(player, '获得一张武将牌');
								}
								game.broadcastAll(function (skills2) {
									var keep = true;
									player.addAdditionalSkill('RE_huanqian', skills2, keep);
								}, skills2);
								game.broadcastAll(
									function (player, list) {
										if (player.isUnderControl(true)) {
											var cards = [];
											for (var i = 0; i < list.length; i++) {
												var cardname = 'huashen_card_' + list[i];
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
							pretao() {
								'step 0';
								var slist = player.storage.RE_huanqian.owned;
								var list = [],
									listx = [];
								for (var i in slist) {
									list.push(i);
								}
								for (var i = 0; i < list.length; i++) {
									var skills = lib.character[list[i]][3].slice(0);
									for (var j = 0; j < skills.length; j++) {
										var info = lib.skill[skills[j]];
										if (!lib.translate[skills[j] + '_info']) skills.splice(j--, 1);
										if (player.skills.includes(skills[j])) skills.splice(j--, 1);
										if (lib.translate[skills[j] + '_info']) {
											if (info.intro && info.intro.content == 'limited' && !listx.includes(list[i])) listx.push(list[i]);
										}
									}
								}
								var str = '';
								str += '移除拥有限定技的武将牌视为使用或打出【桃】';
								event.dialog = ui.create.dialog(str, [listx, 'character']);
								var next = player.chooseButton(event.dialog, true).set('ai', function (button) {
									return 0;
								});
								('step 1');
								if (result.bool) {
									if (player.storage.RE_huanqian.owned[result.buttons[0].link]) game.log(player, '移出了', '#g' + get.translation(result.buttons[0].link) + '的武将牌');
									delete player.storage.RE_huanqian.owned[result.buttons[0].link];
									lib.skill.RE_huanqian.update(player);
								} else {
									event.finish();
								}
							},
							presha() {
								'step 0';
								var slist = player.storage.RE_huanqian.owned;
								var list = [],
									listx = [];
								for (var i in slist) {
									list.push(i);
								}
								for (var i = 0; i < list.length; i++) {
									var skills = lib.character[list[i]][3].slice(0);
									for (var j = 0; j < skills.length; j++) {
										var info = lib.skill[skills[j]];
										if (!lib.translate[skills[j] + '_info']) skills.splice(j--, 1);
										if (player.skills.includes(skills[j])) skills.splice(j--, 1);
										if (lib.translate[skills[j] + '_info']) {
											var str = lib.translate[skills[j] + '_info'];
											if ((info.zhuSkill || str.indexOf('主公技') == 0) && !listx.includes(list[i])) listx.push(list[i]);
										}
									}
								}
								var str = '';
								str += '移除拥有主公技的武将牌视为使用或打出普通【杀】';
								event.dialog = ui.create.dialog(str, [listx, 'character']);
								var next = player.chooseButton(event.dialog, true).set('ai', function (button) {
									return 0;
								});
								('step 1');
								if (result.bool) {
									if (player.storage.RE_huanqian.owned[result.buttons[0].link]) game.log(player, '移出了', '#g' + get.translation(result.buttons[0].link) + '的武将牌');
									delete player.storage.RE_huanqian.owned[result.buttons[0].link];
									lib.skill.RE_huanqian.update(player);
								} else {
									event.finish();
								}
							},
							prewuxie() {
								'step 0';
								var slist = player.storage.RE_huanqian.owned;
								var list = [],
									listx = [];
								for (var i in slist) {
									list.push(i);
								}
								for (var i = 0; i < list.length; i++) {
									var skills = lib.character[list[i]][3].slice(0);
									for (var j = 0; j < skills.length; j++) {
										var info = lib.skill[skills[j]];
										if (!lib.translate[skills[j] + '_info']) skills.splice(j--, 1);
										if (player.skills.includes(skills[j])) skills.splice(j--, 1);
										var info = lib.skill[skills[j]];
										if (lib.translate[skills[j] + '_info']) {
											var str = lib.translate[skills[j] + '_info'];
											if (str.indexOf('觉醒技') == 0 && !listx.includes(list[i])) listx.push(list[i]);
										}
									}
								}
								var str = '';
								str += '移除拥有觉醒技的武将牌视为使用或打出【无懈可击】';
								event.dialog = ui.create.dialog(str, [listx, 'character']);
								var next = player.chooseButton(event.dialog, true).set('ai', function (button) {
									return 0;
								});
								('step 1');
								if (result.bool) {
									if (player.storage.RE_huanqian.owned[result.buttons[0].link]) game.log(player, '移出了', '#g' + get.translation(result.buttons[0].link) + '的武将牌');
									delete player.storage.RE_huanqian.owned[result.buttons[0].link];
									lib.skill.RE_huanqian.update(player);
								} else {
									event.finish();
								}
							},
							preremove() {
								'step 0';
								player.draw(3);
								var slist = player.storage.RE_huanqian.owned;
								var list = [],
									listx = [];
								for (var i in slist) {
									list.push(i);
								}
								if (list.length < 1) {
									event.finish();
									return;
								}
								var str = '';
								str += '请选择一张〖幻千〗武将牌移除.';
								event.dialog = ui.create.dialog(str, [list, 'character']);
								var next = player.chooseButton(event.dialog, true).set('ai', function (button) {
									return 0;
								});
								('step 1');
								if (result.bool) {
									if (player.storage.RE_huanqian.owned[result.buttons[0].link]) game.log(player, '移出了', '#g' + get.translation(result.buttons[0].link) + '的武将牌');
									delete player.storage.RE_huanqian.owned[result.buttons[0].link];
									lib.skill.RE_huanqian.update(player);
								} else {
									event.finish();
								}
							},
							preshan() {
								'step 0';
								var slist = player.storage.RE_huanqian.owned;
								var list = [],
									listx = [];
								for (var i in slist) {
									list.push(i);
								}
								for (var i = 0; i < list.length; i++) {
									var skills = lib.character[list[i]][3].slice(0);
									for (var j = 0; j < skills.length; j++) {
										var info = lib.skill[skills[j]];
										if (!lib.translate[skills[j] + '_info']) skills.splice(j--, 1);
										if (player.skills.includes(skills[j])) skills.splice(j--, 1);
										var info = lib.skill[skills[j]];
										if (lib.translate[skills[j] + '_info']) {
											if (get.is.locked(skills[j]) && !listx.includes(list[i])) listx.push(list[i]);
										}
									}
								}
								var str = '';
								str += '移除拥有锁定技的武将牌视为使用或打出【闪】';
								event.dialog = ui.create.dialog(str, [listx, 'character']);
								var next = player.chooseButton(event.dialog, true).set('ai', function (button) {
									return 0;
								});
								('step 1');
								if (result.bool) {
									if (player.storage.RE_huanqian.owned[result.buttons[0].link]) game.log(player, '移出了', '#g' + get.translation(result.buttons[0].link) + '的武将牌');
									delete player.storage.RE_huanqian.owned[result.buttons[0].link];
									lib.skill.RE_huanqian.update(player);
								} else {
									event.finish();
								}
							},
							ai: {
								maixie: true,
								threaten: 3,
							},
							group: ['RE_huanqian2'],
							intro: {
								onunmark(storage, player) {
									player.removeAdditionalSkill('RE_huanqian');
									player.storage.RE_huanqian = {
										list: [],
										owned: {},
										player: player,
									};
								},
								mark(dialog, storage, player) {
									var slist = storage.owned;
									var list = [];
									for (var i in slist) {
										list.push(i);
									}
									if (list && list.length) {
										if (player.isUnderControl(true)) {
											dialog.addSmall([list, 'character']);
										} else {
											dialog.addText('共有' + get.cnNumber(list.length) + '张<武将牌>');
										}
									} else {
										return '没有武将牌';
									}
								},
								content(storage, player) {
									var slist = player.storage.RE_huanqian.owned;
									var list = [];
									for (var i in slist) {
										list.push(i);
									}
									if (list.length) {
										return '共有' + get.cnNumber(list.length) + '张<武将牌>';
									}
								},
								markcount(storage, player) {
									//QQQ
									var slist = player.storage.RE_huanqian.owned;
									var list = [];
									for (var i in slist) {
										list.push(i);
									}
									if (list && list.length) return list.length;
									return 0;
								},
							},
							mark: true,
						},
						RE_huanqian2: {
							audio: 'ext:幻想志/audio:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							filter(event, player) {
								var filter = event.filterCard;
								if (filter({ name: 'sha', nature: null }, player, event) && player.storage.RE_huanqiansha) return true;
								if (filter({ name: 'shan' }, player, event) && player.storage.RE_huanqianshan) return true;
								if (filter({ name: 'tao' }, player, event) && player.storage.RE_huanqiantao) return true;
								if (filter({ name: 'wuxie' }, player, event) && player.storage.RE_huanqianwuxie) return true;
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [],
										filter = event.filterCard;
									if (filter({ name: 'sha', nature: null }, player, event) && player.storage.RE_huanqiansha) list.push(['basic', '', 'sha']);
									if (filter({ name: 'shan' }, player, event) && player.storage.RE_huanqianshan) list.push(['basic', '', 'shan']);
									if (filter({ name: 'tao' }, player, event) && player.storage.RE_huanqiantao) list.push(['basic', '', 'tao']);
									if (filter({ name: 'wuxie' }, player, event) && player.storage.RE_huanqianwuxie) list.push(['trick', '', 'wuxie']);
									return ui.create.dialog('幻千', [list, 'vcard'], 'hidden');
								},
								check(button) {
									var player = _status.event.player;
									var card = {
										name: button.link[2],
										nature: button.link[3],
									};
									if (_status.event.parent.type == 'phase') return player.getUseValue(card, null, true);
									return 1;
								},
								backup(links, player) {
									return {
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
										},
										filterCard() {
											return false;
										},
										selectCard: -1,
										popname: true,
										onuse(result, player) {
											switch (result.card.name) {
												case 'sha':
													var next = game.createEvent('RE_huanqianCards');
													next.player = player;
													next.setContent(lib.skill.RE_huanqian.presha);
													break;
												case 'shan':
													var next = game.createEvent('RE_huanqianCards');
													next.player = player;
													next.setContent(lib.skill.RE_huanqian.preshan);
													break;
												case 'tao':
													var next = game.createEvent('RE_huanqianCards');
													next.player = player;
													next.setContent(lib.skill.RE_huanqian.pretao);
													break;
												case 'wuxie':
													var next = game.createEvent('RE_huanqianCards');
													next.player = player;
													next.setContent(lib.skill.RE_huanqian.prewuxie);
													break;
											}
										},
										onrespond(event, player) {
											switch (event.card.name) {
												case 'sha':
													var next = game.createEvent('RE_huanqianCards');
													next.player = player;
													next.setContent(lib.skill.RE_huanqian.presha);
													break;
												case 'shan':
													var next = game.createEvent('RE_huanqianCards');
													next.player = player;
													next.setContent(lib.skill.RE_huanqian.preshan);
													break;
												case 'tao':
													var next = game.createEvent('RE_huanqianCards');
													next.player = player;
													next.setContent(lib.skill.RE_huanqian.pretao);
													break;
												case 'wuxie':
													var next = game.createEvent('RE_huanqianCards');
													next.player = player;
													next.setContent(lib.skill.RE_huanqian.prewuxie);
													break;
											}
										},
									};
								},
								prompt(links, player) {
									return '移除有锁定技的武将牌视为使用或打出【闪】;移除有主公技的武将牌视为使用或打出普通【【杀】;移除有限定技的武将牌视为使用或打出【桃】;移除有觉醒技的武将牌视为使用或打出【无懈可击】.';
								},
							},
							ai: {
								respondSha: true,
								respondShan: true,
								save: true,
								effect: {
									player(card, player) {
										var list = 0;
										for (var i = 0; i < game.players.length; i++) {
											if (get.attitude(player, game.players[i]) < 0) {
												if (player.inRange(game.players[i])) list++;
												if (game.players[i].hasSkill('zqyicheng2')) list--;
												if (game.players[i].hasSkill('kongcheng') && game.players[i].countCards('h') == 0) list--;
											}
										}
										if (list > 0 && (player.getEquip('zhuge') || player.getEquip('rewrite_zhuge')) && card.name == 'sha') return [2, 3];
										//如果list>0、且你装备(ak或马钧强化的ak)、且是杀时,更倾向于使用
										if (list > 0 && card.name == 'zhuge' && !player.getEquip(1)) return [3, 3];
										if (list > 0 && player.getEquip('zhuge') && card.name == 'zhuge') return [3, 3];
										if (!player.getEquip('zhuge') && !player.getEquip('rewrite_zhuge') && get.type(card) == 'equip' && card.name != 'zhuge') return [2, 3];
										if ((player.getEquip('zhuge') || player.getEquip('rewrite_zhuge')) && get.type2(card) == 'trick') return [2, 3];
										if ((player.getEquip('zhuge') || player.getEquip('rewrite_zhuge')) && get.type(card) == 'equip' && get.subtype(card) != 'equip1') return [2, 3];
									},
								},
								skillTagFilter(player, tag) {
									switch (tag) {
										case 'respondSha': {
											if (!player.storage.RE_huanqiansha) return false;
											break;
										}
										case 'respondShan': {
											if (!player.storage.RE_huanqianshan) return false;
											break;
										}
										case 'save': {
											if (!player.storage.RE_huanqiantao) return false;
											break;
										}
									}
								},
								order(item, player) {
									if (player && _status.event.type == 'phase') {
										var max = 0;
										var list = ['sha', 'tao'];
										for (var i = 0; i < list.length; i++) {
											var name = list[i];
											if (player.storage.RE_huanqiansha && player.getUseValue({ name: 'sha' }, false) > 0) {
												var temp = get.order({ name: name, nature: name == 'sha' ? null : null });
												if (temp > max) max = temp;
											}
										}
										max /= 1.1;
										return max;
									}
									return 2;
								},
							},
							hiddenCard(player, name) {
								if (name == 'wuxie' && _status.connectMode && player.storage.RE_huanqianwuxie) return true;
								if (name == 'wuxie') return player.storage.RE_huanqianwuxie;
								if (name == 'tao') return player.storage.RE_huanqiantao;
							},
						},
						RE_wanbian: {
							audio: 'ext:幻想志/audio:2',
							trigger: {
								player: ['phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin', 'damageEnd'],
							},
							forced: true,
							initList() {
								var list = [];
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
									if (current.storage.rehuashen && current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character);
									if (current.storage.RE_huanqian && current.storage.RE_huanqian.owned) {
										for (var i in current.storage.RE_huanqian.owned) list.removeArray(current.storage.RE_huanqian.owned[i]);
									}
								});
								_status.characterlist = list;
							},
							content() {
								'step 0';
								if (!player.storage.RE_wanbian) player.storage.RE_wanbian = [];
								('step 1');
								if (!_status.characterlist) {
									lib.skill.RE_wanbian.initList();
								}
								var list = [];
								var skills = [];
								_status.characterlist.randomSort();
								var name2 = event.triggername;
								for (var i = 0; i < _status.characterlist.length; i++) {
									var name = _status.characterlist[i];
									if (name.includes('zuoci') || name.includes('xushao') || name == 'jlsgsoul_sp_xushao') continue;
									var skills2 = lib.character[name][3];
									for (var j = 0; j < skills2.length; j++) {
										if (player.hasSkill(skills2[j])) continue;
										if (skills.includes(skills2[j])) continue;
										var list2 = [skills2[j]];
										game.expandSkills(list2);
										for (var k = 0; k < list2.length; k++) {
											var info = lib.skill[list2[k]];
											if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
											if (info.trigger.player == name2 || (Array.isArray(info.trigger.player) && info.trigger.player.includes(name2))) {
												if (info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
												if (info.filter) {
													try {
														var bool = info.filter(trigger, player, name2);
														if (!bool) continue;
													} catch (e) {
														continue;
													}
												}
												list.add(name);
												skills.add(skills2[j]);
												break;
											}
										}
										if (skills.includes(skills2[j])) {
											break;
										}
									}
									if (skills.length > 4) break;
								}
								if (list.length < 1) {
									var next = game.createEvent('RE_huanqianCards');
									next.player = player;
									next.setContent(lib.skill.RE_huanqian.preremove);
									event.finish();
								}
								player
									.chooseControl(skills)
									.set('dialog', ['请选择要发动的技能', [list, 'character']])
									.set('ai', function () {
										return 0;
									});
								('step 2');
								if (!_status.characterlist) {
									lib.skill.RE_wanbian.initList();
								}
								for (var i = 0; i < _status.characterlist.length; i++) {
									var name = _status.characterlist[i];
									if (name.includes('zuoci') || name.includes('xushao') || name == 'jlsgsoul_sp_xushao') continue;
									var skills2 = lib.character[name][3];
									if (skills2.includes(result.control)) {
										player.storage.RE_huanqian.owned[name] = skills2;
										game.log(player, '获得一张武将牌');
										lib.skill.RE_huanqian.update(player);
										break;
									}
								}
								var removeT = 'damageAfter';
								switch (event.triggername) {
									case 'phaseZhunbeiBegin': {
										removeT = 'phaseZhunbei';
										break;
									}
									case 'phaseJudgeBegin': {
										removeT = 'phaseJudge';
										break;
									}
									case 'phaseDrawBegin': {
										removeT = 'phaseDraw';
										break;
									}
									case 'phaseUseBegin': {
										removeT = 'phaseUse';
										break;
									}
									case 'phaseDiscardBegin': {
										removeT = 'phaseDiscard';
										break;
									}
									case 'phaseJieshuBegin': {
										removeT = 'phaseJieshu';
										break;
									}
								}
								('step 3');
								player.addTempSkill(result.control, removeT);
								var slist = player.storage.RE_huanqian.owned;
								var list = [];
								for (var i in slist) {
									list.push(i);
								}
								if (list && list.length > 4) {
									var next = game.createEvent('RE_huanqianCards');
									next.player = player;
									next.setContent(lib.skill.RE_huanqian.preremove);
								}
							},
							group: 'RE_wanbian_use',
						},
						RE_wanbian_use: {
							audio: 'ext:幻想志/audio:2',
							enable: 'phaseUse',
							usable: 1,
							content() {
								'step 0';
								if (!player.storage.RE_wanbian) player.storage.RE_wanbian = [];
								('step 1');
								if (!_status.characterlist) {
									lib.skill.RE_wanbian.initList();
								}
								var list = [];
								var skills = [];
								_status.characterlist.randomSort();
								for (var i = 0; i < _status.characterlist.length; i++) {
									var name = _status.characterlist[i];
									if (name.includes('zuoci') || name.includes('xushao') || name == 'jlsgsoul_sp_xushao') continue;
									var skills2 = lib.character[name][3];
									for (var j = 0; j < skills2.length; j++) {
										if (skills.includes(skills2[j])) continue;
										if (player.hasSkill(skills2[j])) continue;
										if (lib.skill.pingjian.phaseUse_special.includes(skills2[j])) {
											list.add(name);
											skills.add(skills2[j]);
											continue;
										}
										var list2 = [skills2[j]];
										game.expandSkills(list2);
										for (var k = 0; k < list2.length; k++) {
											var info = lib.skill[list2[k]];
											if (!info || !info.enable || info.viewAs || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
											if (info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse'))) {
												if (info.init || info.onChooseToUse || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
												if (info.filter) {
													try {
														var bool = info.filter(event.getParent(2), player);
														if (!bool) continue;
													} catch (e) {
														continue;
													}
												}
												list.add(name);
												skills.add(skills2[j]);
												break;
											}
										}
										if (skills.includes(skills2[j])) break;
									}
									if (skills.length > 4) break;
								}
								if (list.length < 1) {
									var next = game.createEvent('RE_huanqianCards');
									next.player = player;
									next.setContent(lib.skill.RE_huanqian.preremove);
								}
								player
									.chooseControl(skills)
									.set('dialog', ['请选择要发动的技能', [list, 'character']])
									.set('ai', function () {
										return 0;
									});
								('step 2');
								player.storage.RE_wanbian.add(result.control);
								player.addTempSkill(result.control, 'phaseUseEnd');
								player.addTempSkill('RE_wanbian_temp', 'phaseUseEnd');
								player.storage.RE_wanbian_temp = result.control;
								if (!_status.characterlist) {
									lib.skill.RE_wanbian.initList();
								}
								for (var i = 0; i < _status.characterlist.length; i++) {
									var name = _status.characterlist[i];
									if (name.includes('zuoci') || name.includes('xushao') || name == 'jlsgsoul_sp_xushao') continue;
									var skills2 = lib.character[name][3];
									if (skills2.includes(result.control)) {
										player.storage.RE_huanqian.owned[name] = skills2;
										game.log(player, '获得一张武将牌');
										lib.skill.RE_huanqian.update(player);
										break;
									}
								}
								('step 3');
								var slist = player.storage.RE_huanqian.owned;
								var list = [];
								for (var i in slist) {
									list.push(i);
								}
								if (list && list.length > 4) {
									var next = game.createEvent('RE_huanqianCards');
									next.player = player;
									next.setContent(lib.skill.RE_huanqian.preremove);
								}
							},
							ai: { order: 10, result: { player: 1 } },
						},
						RE_wanbian_temp: {
							trigger: { player: ['useSkillBegin', 'useCard1'] },
							silent: true,
							firstDo: true,
							filter(event, player) {
								var info = lib.skill[event.skill];
								if (!info) return false;
								if (event.skill == player.storage.RE_wanbian_temp) return true;
								if (info.sourceSkill == player.storage.RE_wanbian_temp || info.group == player.storage.RE_wanbian_temp) return true;
								if (Array.isArray(info.group) && info.group.includes(player.storage.RE_wanbian_temp)) return true;
								return false;
							},
							content() {
								player.removeSkill(player.storage.RE_wanbian_temp);
								player.removeSkill('RE_wanbian_temp');
							},
						},
					},
				};
				lib.config.all.characters.add('幻想志');
				lib.config.characters.add('幻想志');
				for (var i in QQQ.character) {
					QQQ.character[i][4].add(`ext:幻想志/image/${i}.jpg`)
				}
				lib.translate['幻想志_character_config'] = `幻想志`;
				return QQQ;
			});
		},
		package: {
			card: {
				card: {
					zero_qiang: {
						fullskin: true,
						type: 'equip',
						subtype: 'equip1',
						ai: {
							basic: {
								equipValue: 8,
							},
						},
						image: 'ext:幻想志/image/zero_qiang.jpg',
						skills: ['zero_qiang_skill', 'zero_qiang_skill2'],
					},
				},
				translate: {
					zero_qiang: '枪',
					zero_qiang_info: '你使用伤害类的牌不能被响应,且无视距离限制.其他角色计算与你的距离+x(x为本轮你受到/造成的伤害数).',
				},
			},
			intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: 'zeroes',
			version: '1.0',
			changelog: `
    制作日志<br>
    <br>
    2023.06.17更新<br>
    <br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">光</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">对立</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="woodmm">切尔茜</div><br>
    <br>
    2023.06.20更新<br>
    <br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">风祭雅</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">三好夏凛</div><br>
    <br>
    2023.06.23更新<br>
    <br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="woodmm">圆环之理</div><br>
	<br>
    2023.06.28更新<br>
    <br>
    &ensp; 更新boss武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="woodmm">藤川美亚</div><br>
	<br>
    2023.08.15更新<br>
    <br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">物部深月</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">风又音理</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="woodmm">玛丽哈卡</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="woodmm">夜羽真白</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">结城友奈</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="woodmm">我妻由乃</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">刀藤绮凛</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">超天酱</div><br>
    <br>
	2023.09.08更新<br>
    <br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="woodmm">诗音</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="fire">勇者兰及其语音</div><br>
	&ensp; 修复下<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">超天酱转换技描述</div><br>
    <br>
	<br>
	2023.10.01更新<br>
    <br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="woodmm">椎名真昼</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="fire">樱小路露娜</div><br>
	&ensp; 修复下<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">初音未来</div><br>
    <br>
	2023.10.09更新<br>
    <br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="woodmm">芦屋堇</div><br>
    &ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="fire">唐乐吟</div><br>
	&ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">龙宫礼奈</div><br>
	&ensp; 更新武将<div style="display:inline; font-family: xingkai, xinwei;" data-nature="thundermm">因幡月夜</div><br>
    <br>
    `,
		},
	};
});

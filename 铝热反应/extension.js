import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '铝热反应',
		content(config, pack) {
			//垃圾武将
			lib.rank.rarity.junk.addArray([]);
			//精品武将
			lib.rank.rarity.rare.addArray([]);
			//史诗武将
			lib.rank.rarity.epic.addArray(['lr_wangrong', 'lr_sp_jiangwei', 'lr_liuling', 'lr_xiangxiu', 'lr_ruanji', 'lr_ruanxian', 'lr_huanfan', 'lr_weifeng', 'lr_wenyuan', 'lr_wangyun', 'lr_xuelingyun', 'lr_lihui', 'lr_sunjun', 'lr_huangwudie']);
			//传说武将
			lib.rank.rarity.legend.addArray(['lr_tianshangyi', 'lr_sunchen']);
			//阵亡配音
			lib.skill.lrfy_zhenwangpeiyin = {
				trigger: { player: 'dieBegin', },
				_priority: 2,
				forced: true,
				popup: false,
				content() {
					game.playAudio('../extension/铝热反应/audio', trigger.player.name);
				}
			}
			//大写数字
			game.toCnCapNumber = function (str) {
				return str.replace('一', '壹').replace('二', '贰').replace('三', '叁').replace('四', '肆').replace('五', '伍').replace('六', '陆').replace('七', '柒').replace('八', '捌').replace('九', '玖').replace('十', '拾').replace('百', '佰').replace('千', '仟');
			};//QQQ
		},
		precontent(lrfy) {
			//—————————————————————————————————————————————————————————————————————————————获取卡牌历史相关自创函数
			const cardfunc = function () {
				game.isxuni = function (event) {
					if (!event.cards || !event.card) {
						return false;
					}
					if (event.cards.length == 1 && event.cards[0].name == event.card.name) {
						return true;
					}
					return null;
				};//事件卡牌是否为虚拟牌或转化牌
				game.center = function () {
					const list = [];
					game.countPlayer2(function (current) {
						current.getHistory('lose', function (evt) {
							if (evt.position == ui.discardPile) list.addArray(evt.cards);
						});
					});
					game.getGlobalHistory('cardMove', function (evt) {
						if (evt.name == 'cardsDiscard') list.addArray(evt.cards);
					});
					return list;
				}; //获取本回合进入弃牌堆的牌
				game.lose = function () {
					const list = [];
					for (const npc of game.players.concat(game.dead)) {
						const his = npc.actionHistory;
						const evt = his[his.length - 1];
						for (const e of evt.lose) {
							if (e.cards?.length) {
								list.addArray(e.cards);
							}
						}
					}
					return list;
				}; //获取本回合失去过的牌
				game.xunshi = function (card) {
					const name = (typeof card == 'string') ? card : card.name;
					const info = lib.card[name];
					if (!info) {
						console.warn(name + '没有卡牌info');
						return false;
					}
					if (info.notarget || info.selectTarget == undefined) return false;
					if (Array.isArray(info.selectTarget)) {
						if (info.selectTarget[0] < 0) return !info.toself;
						return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
					} else {
						if (info.selectTarget < 0) return !info.toself;
						return info.selectTarget != 1;
					}
				}; //多目标牌检测
			};
			cardfunc();
			game.addGroup(['lrfy_han', '汉'], [255, 0, 0], [[255, 0, 0], [79, 79, 0]]);
			game.import('character', function () {
				var lrfy = {
					name: 'lrfy',//武将包命名(必填)
					connect: true,//该武将包是否可以联机(必填)
					//武将分栏
					characterSort: {
						lrfy: {
							lrfy_zhengzhenghanchen: ['lr_wangyun'],
							lrfy_jiarenzhizi: ['lr_wenyuan', 'lr_tianshangyi', 'lr_xuelingyun', 'lr_huangwudie'],
							lrfy_cuoweizhizhi: ['lr_huanfan'],
							lrfy_mokezhiya: ['lr_ruanxian', 'lr_liuling', 'lr_xiangxiu', 'lr_ruanji', 'lr_wangrong'],
							lrfy_zhishizhijie: [],
							lrfy_luandangzhishi: ['lr_sunchen', 'lr_sunjun', 'lr_weifeng'],
							lrfy_gongchenzhixin: ['lr_lihui', 'lr_sp_jiangwei'],
						},
					},
					//武将代码
					character: {
						lr_wenyuan: ['female', 'shu', 3, ['lr_miaojun', 'lr_juyi'], []],
						lr_tianshangyi: ['female', 'wei', 3, ['lr_wuxiu', 'lr_lveyan'], []],
						lr_wangyun: ['male', 'lrfy_han', 3, ['lr_lianji', 'lr_moucheng'], []],
						lr_huanfan: ['male', 'wei', 3, ['lr_zhijian', 'lr_jiedang'], []],
						lr_xuelingyun: ['female', 'wei', 3, ['lr_miaozhi', 'lr_fuxia'], []],
						lr_lihui: ['male', 'shu', 3, ['lr_laijiang', 'lr_yixiang'], []],
						lr_sunchen: ['male', 'wu', 4, ['lr_lingnve', 'lr_shanzhi'], []],
						lr_sunjun: ['male', 'wu', 5, ['lr_xionggu', 'lr_tuoyi'], []],
						lr_weifeng: ['male', 'wei', 3, ['lr_quxin', 'lr_fuming'], []],
						lr_huangwudie: ['female', 'shu', 3, ['lr_lanfeng', 'lr_yunling'], []],
						lr_ruanxian: ['male', 'qun', 3, ['lr_kuangge', 'lr_shenjie'], []],
						lr_liuling: ['male', 'qun', 3, ['lr_zongyi', 'lr_langxing'], []],
						lr_xiangxiu: ['male', 'wei', 3, ['lr_xuanfeng', 'lr_sifu'], []],
						lr_ruanji: ['male', 'wei', 3, ['lr_chengyou', 'lr_wuge'], []],
						lr_sp_jiangwei: ['male', 'shu', 4, ['lr_zhuyang', 'lr_huanggui'], []],
						lr_wangrong: ['male', 'jin', 3, ['lr_suhui', 'lr_qingsong', 'lr_xingshi'], []],
					},
					//武将介绍
					characterIntro: {
						lr_wenyuan: '按现流传之说,文鸳者,魏扬州刺史文钦之女,魏护东夷校尉、高丽总管、关内侯文盎之鸾风女兄,谯人也.夫人自幼与姜维定亲,且文辞藻丽、书法隽美,武艺不下乃父.夫人大义,曾助其夫姜维举义复蜀,因小人告密兵败被杀.<br><br>设计者:<span style="font-family: xingkai">辛涟月</span>',
						lr_tianshangyi: '田尚衣是<拾遗记>中的人物,身份是魏文帝曹丕的宠妃,因为能歌善舞受到曹丕的喜爱,与莫琼树、段巧笑、薛灵芸同为曹丕的宠妃,书中所写此四人皆日夜在帝侧.姿色一时冠绝于世,可比之汉宫赵飞燕也.<br><br>设计者:<span style="font-family: xingkai">辛涟月</span>',
						lr_wangyun: '王允(137年-192年),字子师,太原祁(今山西祁县)人(据<后汉书>).东汉末年大臣.王允出身官宦世家.他十九岁就开始任公职,壮年时任豫州刺史.因为在和中常侍张让的斗争中失败,王允被迫去官隐居,在中平六年,何进掌权之后重新出仕,历任从事中郎和河南尹.在何进被宦官诛杀,董卓掌权时,他已经代替杨彪成为了司徒兼尚书令.身为地方官勤政爱民,由于朝廷腐败而被迫在此为官,从而密谋刺杀董卓.董卓死后,王允与吕布共执朝政,但是董卓余党李傕、郭汜、樊稠等率军攻破长安,吕布出逃,王允被处死,时年56岁.<br><br>设计者:<span style="font-family: xingkai">2HAlO₂·H₂Oฅฅ*</span>',
						lr_huanfan: '桓范(?~249年),字元则,沛郡龙亢县(今安徽省怀远县龙亢镇)人.三国时期曹魏大臣、文学家、画家.<br>建安末年,担任丞相府掾,联合王象等共同撰写<皇览>.延康元年,担任羽林左监.魏明帝时,历任中领军、尚书,出任征虏将军、东中郎将、兖州刺史等.正始年间,授大司农,为大将军曹爽出谋划策,号称<智囊>.高平陵政变(249年)发生后,力劝曹爽挟带皇帝曹芳进入许昌,没有得到采纳,最终被太傅司马懿诛杀.<br><br>设计者:<span style="font-family: xingkai">2HAlO₂·H₂Oฅฅ*</span>',
						lr_xuelingyun: '薛灵芸,东晋王嘉志怪小说<拾遗记>中的人物,魏文帝曹丕的宫人,容颜绝世且妙于针工,虽处于深帷之内,不用灯烛之光,裁制立成.非薛夜来缝制,帝则不服.入宫备受宠爱,号为针神.<br><br>设计者:<span style="font-family: xingkai">辛涟月</span>',
						lr_lihui: '李恢(？~231年),字德昂,建宁郡俞元县(今云南省玉溪市澄江县 )人.三国时期蜀汉将领.<br>初为建宁郡督邮.刘备攻占益州后,拜为功曹书佐、主簿,迁别驾从事.蜀汉建立后,任庲降都督、交州刺史,跟随丞相诸葛亮讨平南中四郡的叛乱,立下赫赫战功,拜安汉将军,封汉兴亭侯,领建宁郡太守.作为蜀汉第二任庲降都督,战后积极调配南中物资,有效地支持了蜀汉政府的财政.<br>建兴九年(231年),去世.<br><br>设计者:<span style="font-family: xingkai">2HAlO₂·H₂Oฅฅ*</span>',
						lr_sunchen: '孙綝(chēn)(231年-259年1月18日),字子通,吴郡富春(今浙江杭州市富阳区)人.三国时期吴国宗室、权臣,昭义中郎将孙静曾孙、定武中郎将孙骨之孙、安民都尉孙绰的儿子.<br>门荫入仕,初任偏将军.太平元年(256年),升任侍中、武卫将军、都督中外诸军事.掌权以后,诛杀大司马滕胤、骠骑将军吕据等重臣,升任大将军,册封永宁县侯.嗜好杀戮,与皇帝孙亮的矛盾激化,最终废黜孙亮,拥立琅琊王孙休即位,累迁丞相、荆州牧.<br>永安元年十二月(259年1月)在左将军张布的协助下,遭到皇帝孙休捕杀,时年二十八岁,削除宗籍,改姓故氏.<br><br>设计者:<span style="font-family: xingkai">辛涟月</span>',
						lr_sunjun: '孙峻(219年－256年10月19日),字子远,吴郡富春(今浙江富阳)人.三国时期吴国宗室、权臣,昭义中郎将孙静曾孙,定武中郎将孙暠的孙子,散骑侍郎孙恭的儿子.<br>孙峻骁勇果敢,精明强干,初任武卫都尉兼侍中,孙权病危时.联合诸葛恪共受遗诏,选为辅政大臣.会稽王孙亮即位,升任武卫将军,册封都乡侯.设计诛杀太傅诸葛恪,开始掌握吴国大权,拜丞相、大将军,册封富春县侯.掌权之后,大肆残害宗亲,导致废太子孙和、公主孙鲁育、宣太子孙登之子孙英先后被杀.<br>太平元年(256年),跟随文钦征伐魏国,因病去世,时年三十八岁,托付于堂弟孙綝.孙綝被杀后,孙峻、孙綝兄弟被吴景帝孙休下诏从族谱上除名,改称故峻、故綝.<br><br>设计者:<span style="font-family: xingkai">cyc</span>',
						lr_weifeng: '魏讽(?~219年),字子京,济阴(一说沛郡)人.东汉末年历史人物.<br>魏讽颇有智谋,口才出众,善于蛊惑人心,邺城为之倾动,钟繇荐为相府西曹掾.<br>建安二十四年,汉中大战后,关羽率领荆州兵马攻打襄樊,水淹于禁七军,围困樊城曹仁,引发中原震动.心存汉室的魏讽,联合荆州地缘势力,勾结长乐卫尉陈祎袭击魏都邺城.陈祎心中恐惧,向世子曹丕告密.曹丕开展政治大清洗,削弱亲汉反曹势力和文官集团力量,连坐死者数千人, 为曹丕代汉建魏奠定了基础.<br><br>设计者:<span style="font-family: xingkai">cyc</span>',
						lr_huangwudie: '黄舞蝶,现代三国作品中出场的虚拟人物,蜀汉大将黄忠之女,自幼受父教导,习得一手神射,后随父亲一同投效刘备.<br><br>设计者:<span style="font-family: xingkai">cyc</span>',
						lr_ruanxian: '阮咸,字仲容,陈留尉氏人(今河南),系阮籍之侄,与阮籍并称<大小阮>,与嵇康、阮籍、山涛、向秀、刘伶、王戎并称<竹林七贤>.<br>阮咸善弹琵琶,精通音律,著有<律议>.一种形似月琴而颈较长的古琵琶,相传因他善弹而被命名为<阮咸>,简称<阮>.<br><br>设计者:<span style="font-family: xingkai">cyc</span>',
						lr_liuling: '刘伶(221年-300年),字伯伦,西晋沛国(治今安徽濉溪县西北)人,魏晋时期名士,<竹林七贤>之一;与阮籍、嵇康、山涛、向秀、王戎和阮咸并称为<竹林七贤>.<br>刘伶嗜酒不羁,被称为<醉侯>,好老庄之学,追求自由逍遥、无为而治.曾在建威将军王戎幕府下任参军.晋武帝泰始初,对朝廷策问,强调无为而治,被认为无能而罢免.泰始二年(266年)朝廷征召刘伶再次入朝为官,被刘伶拒绝.<br>刘伶现今存世的作品只有<酒德颂>和<北芒客舍>.<酒德颂>对<礼法>表示蔑视,宣扬老庄思想和纵酒放诞生活.<br><br>设计者:<span style="font-family: xingkai">辛涟月</span>',
						lr_xiangxiu: '向秀(约227年－272年),字子期,河内怀县(今河南武陟)人.魏晋时期的文学家,竹林七贤之一.向秀雅好读书,与嵇康、吕安等人相善,隐居不仕.景元四年(263年)嵇康、吕安被司马昭害死后,向秀应本郡的郡上计到洛阳,受司马昭接见,后官至黄门侍郎、散骑常侍.泰始八年(272年)去世.<br>向秀出身河内向氏,喜谈老庄之学,曾注<庄子>,被赞为<妙析奇致,大畅玄风(<世说新语·文学>)>,惜注未成便过世,郭象承其<庄子注>余绪,完成了对庄子的注释.另有作品<思旧赋>、<难嵇叔夜养生论>.<br><br>设计者:<span style="font-family: xingkai">cyc</span>',
						lr_ruanji: '阮籍(公元210年～263年),字嗣宗,陈留尉氏(今河南省开封市)人,三国时期魏国诗人、竹林七贤之一.<br>门荫入仕,累迁步兵校尉,世称阮步兵.崇奉老庄之学,政治上则采取谨慎避祸的态度.<br>景元四年(公元263年),阮籍去世,享年五十三岁.作为<正始之音>的代表,著有<咏怀八十二首>、<大人先生传>等,其著作收录在<阮籍集>中.<br><br>设计者:<span style="font-family: xingkai">清茶</span>',
						lr_sp_jiangwei: '姜维(202年～264年3月3日),字伯约,天水郡冀县(今甘肃省天水市甘谷县)人.三国时期蜀汉名将,天水功曹姜冏之子.<br>姜维出身天水姜氏.诸葛亮北伐时,姜维被魏天水太守马遵怀疑有异心,不得已投降蜀汉,被诸葛亮重用.诸葛亮去世后,姜维在蜀汉开始崭露头角.费祎遇刺后,姜维开始独掌军权,继续率领蜀汉军队北伐曹魏,与曹魏名将邓艾、陈泰、郭淮等多次交手,互有胜负.而后蜀汉大臣大多反对姜维北伐,宦官黄皓也操弄权柄,姜维杀黄皓不成,前往沓中屯田避祸.后司马昭五道伐蜀,姜维摆脱牵制自己的邓艾等人,退守剑阁,阻挡住钟会大军,但邓艾却从阴平偷袭成都,刘禅投降后,命令姜维向魏军投降.姜维投降后,打算利用魏将钟会反抗司马昭的机会以回复汉室,但最终无力回天,姜、钟二人皆被魏军所杀<br><br>设计者:<span style="font-family: xingkai">秀丽</span>',
						lr_wangrong: '王戎,字浚冲.琅玡郡临沂县(今山东省临沂市白沙埠镇诸葛村)人.三国至西晋时期名士、官员,<竹林七贤>之一,曹魏凉州刺史王浑的儿子.<br>王戎出身琅玡王氏.自少神采秀美,长于清谈,以精辟的品评与识鉴而著称.初袭父爵贞陵亭侯,被大将军司马昭辟为掾属.累官豫州刺史、建威将军,参与晋灭吴之战.战后以功进封安丰县侯,故人称<王安丰>.治理荆州时,他拉拢士人,颇有成效.后历任侍中、光禄勋、吏部尚书、太子太傅、中书令、尚书左仆射等职.元康七年(296年),升任司徒,位列三公.王戎认为天下将乱,于是不理世事,以山水游玩为乐.赵王司马伦发动政变时,王戎被牵连免官.之后被起用为尚书令,再迁司徒.右将军张方劫持晋惠帝入长安后,王戎逃奔郏县 .<br>永兴二年(305年),王戎去世,时年七十二,谥号为<元>.<br><br>设计者:<span style="font-family: xingkai">cyc</span>',
					},
					//武将称号
					characterTitle: {
						lr_wenyuan: '<font color=#ff4500><span style="font-family: xinwei">雅兼才烈</span></font>',
						lr_tianshangyi: '<font color=#3399ff><span style="font-family: xinwei">倩姿惊鸿</span></font>',
						lr_wangyun: '<font color=#ff0000><span style="font-family: xinwei">计定逆寇</span></font>',
						lr_huanfan: '<font color=#3399ff><span style="font-family: xinwei">明珠暗投</span></font>',
						lr_xuelingyun: '<font color=#3399ff><span style="font-family: xinwei">瑰针锦舞</span></font>',
						lr_lihui: '<font color=#ff4500><span style="font-family: xinwei">小诸葛</span></font>',
						lr_sunchen: '<font color=#2e8b57><span style="font-family: xinwei">凶戾倾野</span></font>',
						lr_sunjun: '<font color=#2e8b57><span style="font-family: xinwei">凶竖盈溢</span></font>',
						lr_weifeng: '<font color=#3399ff><span style="font-family: xinwei">荧惑半世</span></font>',
						lr_huangwudie: '<font color=#ff4500><span style="font-family: xinwei">飞影踏风</span></font>',
						lr_ruanxian: '<span style="font-family: xinwei">绝世之情</span>',
						lr_liuling: '<span style="font-family: xinwei">醉世醒朝</span>',
						lr_xiangxiu: '<font color=#3399ff><span style="font-family: xinwei">清风扶摇</span></font>',
						lr_ruanji: '<font color=#3399ff><span style="font-family: xinwei">玉阙登庸</span></font>',
						lr_sp_jiangwei: '<font color=#ff4500><span style="font-family: xinwei">残阳穹晖</span></font>',
						lr_wangrong: '<font color=#920783><span style="font-family: xinwei">遁识入影</span></font>',
					},
					//技能代码
					skill: {
						lr_miaojun: {
							audio: 'ext:铝热反应/audio:2',
							trigger: {
								player: 'useCard',
							},
							intro: {
								name: '<span style="font-family: huangcao">妙隽</span>',
								content(storage, player) {
									var num = get.cnNumber(player.countMark('lr_miaojun'));
									var str = `<span style="font-family: huangcao">律</span>:<span style="font-family: yuanli">${game.toCnCapNumber(num)}</span>`;
									return str;
								},
							},
							filter(event, player) {
								var type = get.type(event.card);
								if (type != 'basic' && type != 'trick') return false;
								return event.getParent(2).name != 'lr_miaojun_buff';
							},
							content() {
								'step 0'
								var num = get.translation(trigger.card.name).length;
								player.addMark('lr_miaojun', num, false);
								'step 1'
								if (player.countMark('lr_miaojun') % 5 == 0) {
									player.say('书之道,在乎墨意,行谨而飞湍.');
									trigger.nowuxie = true;
									trigger.directHit.addArray(game.players);
								}
								if (player.countMark('lr_miaojun') % 7 == 0) {
									player.say('知迂直,攻其切,军争之法也.');
									player.addTempSkill('lr_miaojun_buff', 'phaseUseAfter');
									player.storage.lr_miaojun_buff = trigger.card;
								}
							},
							subSkill: {
								buff: {
									trigger: {
										player: 'useCardAfter',
									},
									forced: true,
									charlotte: true,
									popup: false,
									lastDo: true,
									filter(event, player) {
										if (!event.targets.length) return false;
										return event.card == player.storage.lr_miaojun_buff;
									},
									content() {
										player.removeSkill('lr_miaojun_buff');
										var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
										player.useCard(card, (trigger._targets || trigger.targets).slice(0));
									},
									onremove(player) {
										delete player.storage.lr_miaojun_buff;
									},
								},
							},
						},
						lr_juyi: {
							mark: true,
							intro: {
								content: 'limited',
							},
							init(player, skill) {
								player.storage[skill] = false;
							},
							audio: 'ext:铝热反应/audio:4',
							enable: 'phaseUse',
							limited: true,
							filter(event, player) {
								return player.countMark('lr_miaojun');
							},
							content() {
								'step 0'
								player.say(['将军在外,颦鼓动而义军兴,则事可成也!', '妾身于内,聚义士以倡回复,则犹可为也!'].randomGet());
								player.awakenSkill('lr_juyi');
								'step 1'
								var card = get.cards()[0];
								event.card = card;
								player.showCards(card);
								player.say(['将军在外,颦鼓动而义军兴,则事可成也!', '妾身于内,聚义士以倡回复,则犹可为也!'].randomGet());
								player.chooseUseTarget(card, 'nodistance');
								if (player.countMark('lr_miaojun') % get.translation(card.name).length == 0) {
									event.goto(1);
								}
								'step 2'
								player.chooseBool('举弈:失去一点体力或点<取消>终止此流程').ai = function (event, player) {
									if (player.hp > 1) return true;
									if (player.countCards('h', { name: 'tao' }) || player.countCards('h', { name: 'jiu' })) return true;
									return false;
								};
								'step 3'
								if (result.bool) {
									player.say(['志未已,事未成,非言弃之时!', '大汉兴废,只此一搏!'].randomGet());
									player.loseHp();
									event.goto(1);
								}
								else {
									card.fix();
									ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
									game.updateRoundNumber();
									event.finish();
								}
							},
							subSkill: {
								1: {
									audio: 'ext:铝热反应/audio:2',
								},
								2: {
									audio: 'ext:铝热反应/audio:2',
								},
							},
							ai: {
								order: 1,
								result: {
									player(player) {
										return player.countMark('lr_miaojun');
									},
								},
							},
						},
						lr_wuxiu: {
							audio: 'ext:铝热反应/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterCard: true,
							//出牌阶段限一次, 你可依次展示含你在内的X+1名角色的各一张手牌(X为你的体力值),若其展示的牌与你展示的牌的颜色:相同,视为你与其依次对对方使用之 ;不同,你可以用一张手牌交换其展示的牌
							selectTarget() {
								return [1, _status.event.player.hp];
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							filterTarget(card, player, target) {
								return target != player && target.countCards('h');
							},
							check(card, player) {
								if (ui.selected.targets[0] && get.attitude(ui.selected.targets[0], player) < 0) {
									return get.tag(card, 'damage');
								}//QQQ
								return Math.random();
							},
							discard: false,
							lose: false,
							delay: false,
							content() {
								'step 0'
								event.color = get.color(cards[0]);
								event.targets = targets.sortBySeat();
								'step 1'
								if (event.targets.length) {
									var target = event.targets.shift();
									event.current = target;
									player.say(['倾舞弈世,助君雅兴.', '值此良辰,邀君共舞.'].randomGet());
									player.line(event.current, 'green');
								}
								else {
									event.goto(6);
								}
								'step 2'
								if (event.current && event.current.countCards('h') > 0) {
									player.choosePlayerCard('h', event.current, true);
								}
								else {
									event.goto(5);
								}
								'step 3'
								if (result.bool && result.cards && result.cards.length) {
									event.name = 'lr_wuxiu';
									player.$compare(cards[0], event.current, result.cards[0]);
									game.log(player, '展示了', player, '的', cards[0]);
									game.log(player, '展示了', event.current, '的', result.cards[0]);
									event.card = result.cards[0];
									if (get.color(event.card) == event.color) {
										if (lib.filter.targetEnabled2(cards[0], player, event.current)) player.useCard({ name: cards[0].name }, event.current, 'noai', false);
										if (lib.filter.targetEnabled2(event.card, event.current, player)) event.current.useCard({ name: event.card.name }, player, 'noai', false);
										event.goto(5);
									}
									else {
										player.chooseCard('h', `舞袖:用一张手牌交换${get.translation(event.current)}展示的${get.translation(event.card)}？`).ai = function (card) {
											var att = get.attitude(player, target);
											var value = get.value(card);
											return att * value;
										}
									}
								}
								else {
									event.goto(5);
								}
								'step 4'
								if (result.bool) {
									player.$giveAuto(result.cards[0], event.current);
									event.current.gain(result.cards[0], player);
									event.current.give(event.card, player);
								}
								if (event.targets.length) event.goto(1);
							},
							ai: {
								order: 9,
								result: {
									target(player, target) {
										if (ui.selected.cards.length) {
											if (get.tag(ui.selected.cards[0], 'damage')) return -2;
											if (ui.selected.cards[0].name == 'shunshou' || ui.selected.cards[0].name == 'guohe') return -1;
											if (ui.selected.cards[0].name == 'tao' || ui.selected.cards[0].name == 'wuzhong') return 1;
											return 0;
										}
									},
								},
							},
						},
						lr_lveyan: {
							audio: 'ext:铝热反应/audio:2',
							preHidden: true,
							trigger: {
								player: 'useCardToPlayered',
								target: 'useCardToTargeted',
							},
							filter(event, player) {
								if (get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o') return false;
								return player == event.target || event.parent.triggeredTargets3.length == 1;
							},
							forced: true,
							content() {
								player.say(['小女此姿,比汉宫飞燕何如？', '倩姿翩翩,俏若飞燕.'].randomGet());
								player.draw();
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (!card.length) return [1, 0.6];
									},
									player(card, player, target) {
										if (!card.length) return [1, 1];
									},
								},
							},
						},
						lr_lianji: {
							audio: 'ext:铝热反应/audio:2',
							enable: 'phaseUse',
							usable: 2,
							filter(event, player) {
								return player.getStorage('lr_lianji2').length < 3 && player.countCards('he');
							},
							onChooseToUse(event) {
								if (!game.online) {
									var evt = event.parent;
									if (evt.name != 'phaseUse') return;
									if (!evt.lr_lianji_list) {
										var list = [];
										list.push('wy_xiaolicangdao');
										list.push('jiedao');
										list.push('wy_meirenji');
										evt.lr_lianji_list = list;
									}
									if (!event.lr_lianji_list) event.set('lr_lianji_list', evt.lr_lianji_list);
								}
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i of event.lr_lianji_list)
										if (!player.getStorage('lr_lianji2').includes(i)) list.push(['锦囊', '', i]);
									return ui.create.dialog('连计', [list, 'vcard']);
								},
								filter(button, player) {
									return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									return _status.event.player.getUseValue({ name: button.link[2] });
								},
								backup(links, player) {
									return {
										audio: 'lr_lianji',
										filterCard: true,
										popname: true,
										position: 'hes',
										viewAs: { name: links[0][2] },
										check(card) {
											return 6 - get.value(card);
										},
										filterCard: true,
										onuse(links, player) {
											if (!player.storage.lr_lianji2) player.storage.lr_lianji2 = [];
											player.storage.lr_lianji2.add(links.card.name);
											player.addTempSkill('lr_lianji_mark', { player: 'useCardAfter' });
										},
									};
								},
								prompt(links, player) {
									return `将一张牌当做${get.translation(links[0][2])}使用`;
								},
							},
							ai: {
								order: 2,
								result: {
									player(player) {
										if (player.hp <= 2 || player.needsToDiscard()) return 0;
										return 1;
									},
								},
							},
							group: 'lr_lianji_clear',
							subSkill: {
								clear: {
									trigger: {
										player: 'phaseUseAfter',
									},
									forced: true,
									content() {
										player.storage.lr_lianji2 = [];
									},
								},
								mark: {
									mark: true,
									marktext: '连计',
									intro: {
										name: '连计',
										content: '董贼伏诛,天下太平!',
									},
								},
							},
						},
						lr_moucheng: {
							limited: true,
							init(player) {
								player.storage.lr_moucheng = false;
							},
							audio: 'ext:铝热反应/audio:1',
							derivation: 'lr_jingong',
							trigger: {
								global: 'dieAfter',
							},
							filter(event, player) {
								if (player.storage.lr_moucheng == true) return false;
								return player.hasSkill('lr_lianji_mark');
							},
							content() {
								player.awakenSkill('lr_moucheng');
								player.gainMaxHp();
								player.hp = player.maxHp;
								player.drawTo(player.maxHp);
								player.removeSkill('lr_lianji');
								player.addSkill('lr_jingong');
								player.storage.lr_moucheng = true;
							},
							mark: true,
							intro: {
								content: 'limited',
							},
						},
						lr_jingong: {
							audio: 'ext:铝热反应/audio:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								if (lib.inpile.includes(name) && name != 'wuxie') return true;
							},
							filter(event, player) {
								if (event.responded || event.lr_jingong) return false;
								for (var i of lib.inpile) {
									if (event.filterCard && event.filterCard({ name: i }, player, event) && i != 'wuxie') return true;
								}
								return false;
							},
							delay: false,
							content() {
								'step 0'
								var evt = event.getParent(2);
								evt.set('lr_jingong', true);
								var cards = get.cards(3);
								if (Array.isArray(cards)) for (var i of cards) {
									ui.cardPile.insertBefore(i.fix(), ui.cardPile.firstChild);
								}
								var aozhan = player.hasSkill('aozhan');
								player.chooseButton(['矜功:选择要' + (evt.name == 'chooseToUse' ? '使用' : '打出') + '的牌', cards]).set('filterButton', function (button) {
									return _status.event.cards.includes(button.link);
								}).set('cards', cards.filter(function (card) {
									if (aozhan && card.name == 'tao') {
										return evt.filterCard({
											name: 'sha', cards: [card],
										}, evt.player, evt) || evt.filterCard({
											name: 'shan', cards: [card],
										}, evt.player, evt);
									}
									return evt.filterCard(card, evt.player, evt);
								})).set('ai', function (button) {
									var evt = _status.event.getParent(3);
									if (evt && evt.ai) {
										var tmp = _status.event;
										_status.event = evt;
										var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
										_status.event = tmp;
										return result;
									}
									return 1;
								});
								'step 1'
								var evt = event.getParent(2);
								if (result.bool && result.links && result.links.length) {
									var name = result.links[0].name, aozhan = (player.hasSkill('aozhan') && name == 'tao');
									if (aozhan) {
										name = evt.filterCard({
											name: 'sha', cards: [card],
										}, evt.player, evt) ? 'sha' : 'shan';
									}
									if (evt.name == 'chooseToUse') {
										game.broadcastAll(function (result, name) {
											lib.skill.lr_jingong_backup.viewAs = { name: name, cards: [result] };
											lib.skill.lr_jingong_backup.prompt = `选择${get.translation(result)}的目标`;
										}, result.links[0], name);
										evt.set('_backupevent', 'lr_jingong_backup');
										evt.backup('lr_jingong_backup');
									}
									else {
										evt.result.card = result.links[0];
										if (aozhan) evt.result.card.name = name;
										evt.result.cards = [result.links[0]];
										evt.redo();
										return;
									}
								}
								else player.loseHp();
								evt.goto(0);
							},
							ai: {
								effect: {
									target(card, player, target, effect) {
										if (get.tag(card, 'respondShan')) return 0.7;
										if (get.tag(card, 'respondSha')) return 0.7;
									},
								},
								order: 11,
								respondShan: true,
								respondSha: true,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
						},
						lr_jingong_backup: {
							sourceSkill: 'lr_jingong',
							precontent() {
								var name = event.result.card.name;
								event.result.cards = event.result.card.cards;
								event.result.card = event.result.cards[0];
								event.result.card.name = name;
							},
							filterCard() { return false },
							selectCard: -1,
						},
						lr_zhijian: {
							audio: 'ext:铝热反应/audio:2',
							trigger: {
								global: 'useCard',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o' && get.type(event.card) == 'trick';
							},
							content() {
								'step 0'
								var list = get.zhinangs();
								player.chooseButton([get.prompt('lr_zhijian'), `请选择令${get.translation(trigger.player)}使用的智囊`, [list, 'vcard']]).set('ai', function (button) {
									var att = get.attitude(player, trigger.player);
									if (att < 0 && player.hp < 2 && (player.countCards('h', { name: 'tao' }) == 0 || player.countCards('h', { name: 'jiu' }) == 0)) return 0;
									if (att < 0) return -trigger.player.getUseValue({ name: button.link[2] });
									return trigger.player.getUseValue({ name: button.link[2] });
								});
								'step 1'
								if (result.bool) {
									player.say(['将军,何不以此计行？', '总万机,典禁军,不宜并出.'].randomGet());
									event.name = result.links[0][2];
									trigger.player.chooseBool(`是否令${get.translation(trigger.card)}失效,视为使用一张` + get.translation(event.name)).set('ai', function (event, player) {
										if (event.name == 'wuxie') return false;
										var att = get.attitude(trigger.player, player);
										return att > 0 && player.getUseValue({ name: event.name }) >= player.getUseValue(trigger.card);
									});
								}
								else {
									event.finish();
								}
								'step 2'
								if (result.bool) {
									trigger.player.popup('纳谏');
									trigger.targets.length = 0;
									trigger.all_excluded = true;
									trigger.player.chooseUseTarget(event.name, true);
								}
								else {
									trigger.player.popup('拒谏');
									var next = player.discardPlayerCard(trigger.player, `职谏:弃置${get.translation(trigger.player)}一张牌`);
									if (!trigger.player.hasSkill('lr_ximie')) next.set('forced', true);
									player.say('曹子丹佳人,生汝兄弟,犊耳!');
									player.loseHp();
								}
							},
						},
						lr_jiedang: {
							limited: true,
							init(player) {
								player.storage.lr_jiedang = false;
							},
							audio: 'ext:铝热反应/audio:2',
							derivation: 'lr_ximie',
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								return !player.storage.lr_jiedang;
							},
							forced: true,
							content() {
								'step 0'
								player.chooseTarget(get.prompt2('lr_jiedang'), function (card, player, target) {
									return target != player;
								}).set('ai', function (target) {
									if (!_status.event.goon) return 0;
									var player = _status.event.player;
									var att = get.attitude(player, target);
									if (att <= 1) return 0;
									return att;
								}).set('goon', !player.hasUnknown());
								'step 1'
								if (result.bool) {
									player.awakenSkill('lr_jiedang');
									player.storage.lr_jiedang = true;
									player.addTempSkill('lr_ximie', { player: 'dieAfter' });
									result.targets[0].addTempSkill('lr_ximie', { player: 'dieAfter' });
									player.storage.lr_ximie = result.targets[0];
									result.targets[0].storage.lr_ximie = player;
								}
							},
							mark: true,
							intro: {
								content: 'limited',
							},
						},
						lr_ximie: {
							charlotte: true,
							forced: true,
							mark: true,
							marktext: '党',
							intro: {
								name: '同党',
								content: '已和<font color=#b0d0e2>$</font>结成同党',
							},
							mod: {
								maxHandcard(player, num) {
									return num + 2;
								},
							},
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player) {
								return event.player == player.storage.lr_ximie && player.countCards('he', function (card) {
									return lib.filter.cardDiscardable(card, player, 'lr_ximie');
								});
							},
							content() {
								player.chooseToDiscard(true);
								player.popup('系灭');
							},
							group: 'lr_ximie_die',
							subSkill: {
								die: {
									forced: true,
									charlotte: true,
									forceDie: true,
									trigger: {
										global: 'die',
									},
									filter(event, player) {
										return event.player == player.storage.lr_ximie;
									},
									content() {
										player.line(player, 'yellow');
										player.popup('系灭');
										player.loseHp();
										player.removeSkill('lr_ximie');
									},
								},
							},
						},
						lr_miaozhi: {
							mark: true,
							intro: {
								content(storage, player) {
									var history = player.getHistory('custom', function (evt) { return evt.lr_miaozhi == true; });
									var cards = [];
									var all = player.actionHistory;
									for (var i = all.length - 1; i >= 0; i--) {
										for (var x of all[i].useCard) {
											var name = x.card.name;
											var type = get.type(x.card);
											if (type == 'basic' || type == 'trick') cards.add(name);
										}
										if (all[i].isRound) break;
									}
									return `本回合发动此技能次数:${get.translation(history.length)}<br>本轮已使用过的即时牌:<br>` + get.translation(cards);
								},
								markcount(storage, player) {
									var history = player.getHistory('custom', function (evt) { return evt.lr_miaozhi == true; });
									return history.length;
								},
							},
							audio: 'ext:铝热反应/audio:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								var type = get.type(name);
								if (type != 'basic' && type != 'trick') return false;
								if (!lib.skill.lr_miaozhi.filterx(player, name)) return false;
								return player.countCards('hes') >= player.getHistory('custom', function (evt) { return evt.lr_miaozhi == true; }).length + 1;
							},
							filter(event, player) {
								if (player.countCards('hes') < player.getHistory('custom', function (evt) { return evt.lr_miaozhi == true; }).length + 1) return false;
								for (var name of lib.inpile) {
									var type = get.type(name);
									if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: name }, player, event) && lib.skill.lr_miaozhi.filterx(player, name)) return true;
								}
								return false;
							},
							filterx(player, name) {
								var cards = player.getCards('hes');
								if (!cards.length) return false;
								var num = player.getHistory('custom', function (evt) { return evt.lr_miaozhi == true; }).length + 1;
								var list = [];
								var result = get.translation(name).length;
								cards.forEach(card => list.push(get.translation(card.name).length));
								for (var i = 1; i < 1 << list.length; i++) {
									var sum = 0;
									var temp = '';
									for (var j = 0; j < list.length; j++) {
										if ((i & 1 << j) != 0) {
											sum += list[j];
											temp += list[j] + '+';
										}
									}
									if (sum == result) {
										var t = temp.split('+');
										var p = [];
										for (var j = 0; j < t.length; j++) {
											if (t[j] != '') {
												p.push(t[j])
											}
										}
										if (p.length >= num) return true;
									}
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (name == 'sha') {
											if (event.filterCard && event.filterCard({ name: name }, player, event) && lib.skill.lr_miaozhi.filterx(player, name)) list.push(['基本', '', 'sha']);
											for (var j of lib.inpile_nature) {
												if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event) && lib.skill.lr_miaozhi.filterx(player, name)) list.push(['基本', '', 'sha', j]);
											}
										}
										else if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event) && lib.skill.lr_miaozhi.filterx(player, name)) list.push(['锦囊', '', name]);
										else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event) && lib.skill.lr_miaozhi.filterx(player, name)) list.push(['基本', '', name]);
									}
									if (list.length == 0) {
										return ui.create.dialog('暂无可用妙织牌');
									}
									return ui.create.dialog('妙织', [list, 'vcard']);
								},
								filter(button, player) {
									return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									if (_status.event.parent.type != 'phase') return 1;
									var player = _status.event.player;
									if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
									return player.getUseValue({
										name: button.link[2],
										nature: button.link[3],
									});
								},
								backup(links, player) {
									return {
										filterCard(card, player, target) {
											var num = 0;
											if (ui.selected.cards.length) {
												if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
													if (i) {
														num += get.translation(i.name).length;
													}
												}
												return get.translation(card.name).length <= get.translation(links[0][2]).length - num;
											}
											return get.translation(card.name).length <= get.translation(links[0][2]).length - num;
										},
										audio: 'lr_miaozhi',
										popname: true,
										selectCard(card, player, target) {
											var num1 = _status.event.player.getHistory('custom', function (evt) { return evt.lr_miaozhi == true; }).length + 1;
											var num2 = 0;
											if (ui.selected.cards.length) {
												if (ui.selected.cards.length < num1) return Infinity;
												if (Array.isArray(ui.selected.cards)) for (var i of ui.selected.cards) {
													if (i) num2 += get.translation(i.name).length;
												}
												if (num2 == get.translation(links[0][2]).length) return ui.selected.cards.length;
												else return Infinity;
											}
											return Infinity;
										},
										check(card) {
											return 8 - get.value(card);
										},
										position: 'hes',
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											var cards = event.result.cards;
											var bool = false;
											if (cards.length > 1) {
												var color = get.color(cards[0], player);
												for (var i = 1; i < cards.length; i++) {
													if (get.color(i, player) != color) {
														bool = true;
													}
												}
											}
											if (bool) player.damage();
											player.say(['回文锦字,莺语翩飞.', '针神屏烛妙工勤,饶有奇香拂槛芬.'].randomGet());
											var list = [];
											var all = player.actionHistory;
											for (var i = all.length - 1; i >= 0; i--) {
												for (var x of all[i].useCard) {
													var name = x.card.name;
													var type = get.type(x.card);
													if (type == 'basic' || type == 'trick') list.add(name);
												}
												if (all[i].isRound) break;
											}
											if (list.includes(event.result.card.name)) player.draw();
											player.getHistory('custom').push({ lr_miaozhi: true });
											player.markSkill('lr_miaozhi');
										},
									}
								},
								prompt(links, player) {
									var num1 = player.getHistory('custom', function (evt) { return evt.lr_miaozhi == true; }).length + 1;
									var num2 = get.translation(links[0][2]).length;
									return `将至少${get.cnNumber(num1)}张字数之和为${get.cnNumber(num2)}的牌当做` + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							group: 'lr_miaozhi_mark',
							subSkill: {
								mark: {
									trigger: {
										global: 'phaseBegin',
									},
									forced: true,
									content() {
										player.markSkill('lr_miaozhi');
									},
								},
							},
							ai: {
								fireAttack: true,
								respondSha: true,
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('hes')) return false;
								},
								order: 1,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
						},
						lr_fuxia: {
							audio: 'ext:铝热反应/audio:1',
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								var list = game.center();
								return list[0] && player.countCards('he');
							},
							forced: true,
							//当你受到伤害后,你可以用你的任意张牌交换中央区至多等量的花色各异的牌,当前回合角色也可如此做
							async content(event, trigger, player) {//QQQ
								var cards = game.center();
								var list = [player];
								if (_status.currentPhase) list.add(_status.currentPhase);
								for (const i of list) {
									if (i.countCards('he')) {
										const result = await i.chooseToMove()
											.set('list', [['你的牌', i.getCards('he')], ['中央区', cards]])
											.set('prompt', '交换中央区等量的花色各异的牌')
											.set('processAI', function (list) {
												var card = list[0][1].concat(list[1][1]);
												card.sort((a, b) => get.value(b) - get.value(a));//态度大于0就把价值高的牌放前面
												var top = card.splice(0, i.countCards('he'));//起始位置,删除元素数量,插入的元素
												return [top, card];
											}).forResult();//自己观星
										for (const j of result.moved[0]) {
											if (!i.getCards('he').includes(j)) {
												i.node.handcards1.appendChild(j);
												cards.remove(j);
											}
										}
										for (const x of result.moved[1]) {
											if (!cards.includes(x)) {
												ui.discardPile.appendChild(x);
												cards.add(x);
											}
										}
										game.log(i, `获得${get.translation(result.moved[0])}`, `丢弃${get.translation(result.moved[1])}`);
									}
								}
							},
						},
						lr_laijiang: {
							audio: 'ext:铝热反应/audio:2',
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								if (get.type(event.card) == 'equip' || !event.targets.includes(player)) return false;
								return event.targets.length >= player.hp;
							},
							forced: true,
							content() {
								player.draw();
							},
						},
						lr_yixiang: {
							audio: 'ext:铝热反应/audio:2',
							trigger: {
								global: 'phaseUseBegin',
							},
							derivation: 'lr_tongtiao',
							forced: true,
							content() {
								'step 0'
								player.chooseCard(get.prompt('lr_yixiang'), 'he', function (card, player) {
									if (!game.checkMod(card, player, 'unchanged', 'cardEnabled2', player)) return false;
									return true;
								}, `选择一张牌当做【桃】对${get.translation(trigger.player)}使用`).set('ai', function (card) {
									return 9 - get.value(card);
								});
								'step 1'
								if (result.bool) {
									player.useCard({ name: 'tao' }, result.cards, 'lr_yixiang', trigger.player, false);
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
										player.chooseControl(list, 'cancel2').set('prompt', `诣降:请选择要替换的${get.translation(trigger.player)}的技能`).set('ai', function () {
											if (trigger.player == player) return 'lr_yixiang';
											return list.randomGet();
										});
									}
								}
								else {
									event.finish();
								}
								'step 2'
								if (result.control != 'cancel2') {
									var skill = result.control;
									trigger.player.popup(skill);
									trigger.player.storage.lr_yixiang = skill;
									game.log(trigger.player, '将', `#g【${get.translation(skill)}】`, '替换为', '#g【统调】');
									trigger.player.removeSkill(skill);
									trigger.player.storage.lr_tongtiao = player;
									trigger.player.addSkill('lr_tongtiao');
								}
							},
						},
						lr_tongtiao: {
							audio: 'ext:铝热反应/audio:2',
							mark: true,
							marktext: '调',
							intro: {
								content(storage, player) {
									return get.translation(player.storage.lr_tongtiao) + `可为你使用的即时牌增加一个目标.<br>回合结束时失去此技能并获得<${get.translation(player.storage.lr_yixiang)}>`;
								},
							},
							mod: {
								targetInRange(card, player) {
									return true;
								},
							},
							trigger: {
								player: 'useCard',
							},
							forced: true,
							filter(event, player) {
								var type = get.type(event.card);
								if (type != 'basic' && type != 'trick') return false;
								var card = event.card;
								var info = get.info(card);
								if (info.allowMultiple == false) return false;
								if (event.targets && !info.multitarget) {
									if (game.hasPlayer(function (current) {
										return !event.targets.includes(current) && lib.filter.targetEnabled2(card, player, current);
									})) {
										return true;
									}
								}
								return false;
							},
							onremove(player) {
								delete player.storage.lr_tongtiao;
								delete player.storage.lr_yixiang;
							},
							content() {
								'step 0'
								player.storage.lr_tongtiao.chooseTarget(get.prompt('lr_tongtiao'), `为${get.translation(trigger.card)}增加一个目标`, function (card, player, target) {
									var player = _status.event.player;
									return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, player, target);
								}).set('ai', function (target) {
									return get.effect(target, trigger.card, player.storage.lr_tongtiao);
								}).set('card', trigger.card).set('targets', trigger.targets);
								'step 1'
								if (result.bool) {
									event.targets = result.targets;
								}
								else {
									event.finish();
								}
								'step 2'
								if (event.targets) {
									player.storage.lr_tongtiao.say(['上下一心,行伍肃备,百战则可百胜.', '将得其位,才得其美,优劣可得其所.'].randomGet());
									trigger.targets.addArray(event.targets);
								}
							},
							group: 'lr_tongtiao_skill',
							subSkill: {
								skill: {
									trigger: {
										player: 'phaseEnd',
									},
									forced: true,
									content() {
										player.popup(player.storage.lr_yixiang);
										player.addSkill(player.storage.lr_yixiang);
										player.removeSkill('lr_tongtiao');
									},
								},
							},
						},
						lr_lingnve: {
							audio: 'ext:铝热反应/audio:2',
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								if (event.targets.length != 1) return false;
								if (event.target == player) return false;
								var type = get.type(event.card);
								if (type != 'basic' && type != 'trick') return false;
								return event.target.countCards('h');
							},
							check(event, player) {
								if (player.hp < 2 && (!player.countCards('h', { name: 'tao' }) || !player.countCards('h', { name: 'jiu' }))) return false;
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								'step 0'
								player.storage.lr_lingnve_effect2 = trigger.card;
								player.loseHp();
								player.choosePlayerCard('h', trigger.target, true);
								'step 1'
								if (result.bool) {
									player.showCards(result.cards);
									player.addSkill('lr_lingnve_effect');
									player.storage.lr_lingnve_effect = {
										card: result.cards[0],
										player: trigger.target,
									}
								}
							},
							subSkill: {
								effect: {
									mark: true,
									intro: {
										content(storage, player) {
											return `若${get.translation(player.storage.lr_lingnve_effect.player)}使用了${get.translation(player.storage.lr_lingnve_effect.card)}来响应你使用的${get.translation(player.storage.lr_lingnve_effect2)},你对其造成1点伤害,否则你弃置其两张牌.`;
										},
									},
									charlotte: true,
									forced: true,
									onremove(player) {
										delete player.storage.lr_lingnve_effect;
									},
									trigger: {
										global: 'useCard',
									},
									filter(event, player) {
										if (!event.respondTo) return false;
										var info = player.storage.lr_lingnve_effect;
										return event.card == info.card && event.player == info.player;
									},
									content() {
										trigger.player.damage('nocard');
										player.removeSkill('lr_lingnve_effect');
									},
									group: 'lr_lingnve_effect2',
								},
								effect2: {
									charlotte: true,
									forced: true,
									trigger: {
										player: 'useCardAfter',
									},
									filter(event, player) {
										return event.card && event.card == player.storage.lr_lingnve_effect2;
									},
									content() {
										var target = player.storage.lr_lingnve_effect.player;
										player.discardPlayerCard(target, 'he', 2, true);
										player.removeSkill('lr_lingnve_effect');
									},
								},
							},
						},
						lr_shanzhi: {
							audio: 'ext:铝热反应/audio:2',
							enable: 'phaseUse',
							filterTarget(card, player, target) {
								return player != target;
							},
							filter(event, player) {
								return !player.hasSkill('lr_shanzhi_used');
							},
							content() {
								'step 0'
								target.chooseCard('h', `是否交给${get.translation(player)}一张带「伤害」标签的牌`, function (card) {
									return get.tag(card, 'damage');
								}).ai = function (card) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									if (att > 0 && card.name == 'sha') return 120;
									return 100 - get.value(card);
								};
								'step 1'
								if (result.bool) {
									player.gain(result.cards, target);
									target.$giveAuto(result.cards, player);
									player.chooseUseTarget(result.cards[0]);
									if (result.cards[0].name != 'sha') player.addTempSkill('lr_shanzhi_used', 'phaseUseEnd');
								}
								else {
									player.addTempSkill('lr_shanzhi_used', 'phaseUseEnd');
									target.addSkill('lr_shanzhi_effect');
									target.addMark('lr_shanzhi_effect', 1, false);
								}
							},
							subSkill: {
								used: {
									intro: {
										content: '本阶段已发动',
									},
								},
								effect: {
									trigger: {
										player: 'damageBegin1',
									},
									forced: true,
									charlotte: true,
									content() {
										trigger.num += player.countMark('lr_shanzhi_effect');
										player.removeSkill('lr_shanzhi_effect');
									},
									intro: {
										content: '下一次受到伤害+#',
									},
								},
							},
							ai: {
								order: 3,
								effect: {
									target(card, player, target) {
										if (get.attitude(player, target) > 0 && target.countCards('h', { name: 'sha' })) return 99;
										if (get.attitude(player, target) < 0 && target.countCards('h', { name: 'sha' })) return -99;
										if (!target.countCards('h', function (card) {
											return get.tag(card, 'damage');
										})) return -1;
									},
								},
							},
						},
						lr_xionggu: {
							audio: 'ext:铝热反应/audio:4',
							trigger: {
								global: 'phaseBegin',
							},
							forced: true,
							filter(event, player) {
								return event.player != player && !player.hasSkill('lr_xionggu_used');
							},
							check(event, player) {
								return get.attitude(player, event.player) < 0;
							},
							content() {
								player.say('无我手令,汝意欲何为?');
								game.asyncDraw([trigger.player, player]);//QQQ
								player.addTempSkill('lr_xionggu_effect');
								player.addSkill('lr_xionggu_used');
							},
							subSkill: {
								audio: {
									audio: 'ext:铝热反应/audio:1',
								},
								used: {
									charlotte: true,
									trigger: {
										global: 'roundStart',
									},
									forced: true,
									content() {
										player.removeSkill('lr_xionggu_used');
									},
									intro: {
										content: '下轮开始时重置此技能',
									},
								},
								effect: {
									audio: 'ext:铝热反应/audio:1',
									onremove(player) {
										delete player.storage.lr_xionggu_bug;
										player.removeSkill('lr_xionggu_bug');
									},
									mark: true,
									marktext: '凶锢',
									intro: {
										content(storage, player) {
											return `当${get.translation(_status.currentPhase)}使用牌指定其他角色为唯一目标时,你可以与其拼点:若你赢,你为此牌重新指定合法目标;反之,你成为此牌的额外目标,并于结算后获得之.`;
										},
									},
									charlotte: true,
									trigger: {
										global: 'useCardToTargeted',
									},
									filter(event, player) {
										if (event.targets.length != 1) return false;
										if (event.target == player || event.target == event.player) return false;
										return event.player == _status.currentPhase && !player.hasSkill('lr_xionggu_bug') && player.canCompare(event.player);
									},
									prompt(event, player) {
										return `凶锢:是否与${get.translation(_status.currentPhase)}拼点？`;
									},
									check(event, player) {
										if (get.attitude(player, event.target) > 0) return get.effect(player, event.card, event.target, player) < 0;
										if (get.attitude(player, event.target) < 0) return get.effect(event.player, event.card, event.target) > 0;
										return get.attitude(player, event.player) < 0;
									},
									content() {
										'step 0'
										player.say('朝中文书,须先经于我手!');
										player.addSkill('lr_xionggu_bug');
										player.storage.lr_xionggu_bug = trigger.card;
										player.chooseToCompare(trigger.player);
										'step 1'
										if (result.bool) {
											player.say('吾令既出,安敢不从?!');
											player.chooseTarget(get.prompt('lr_xionggu'), `为${get.translation(trigger.card)}重新指定一个目标`, true, function (card, player, target) {
												var player = _status.event.player;
												return !_status.event.targets.includes(target) && lib.filter.targetEnabled2(_status.event.card, trigger.player, target);
											}).set('ai', function (target) {
												return get.effect(target, trigger.card, player);
											}).set('card', trigger.card).set('targets', trigger.targets);
										}
										else {
											player.say('汝行此举,是要谋反吗?!');
											event.goto(3);
										}
										'step 2'
										if (result.bool) {
											var target = result.targets;
											trigger.player.line(target, 'yellow');
											trigger.parent.targets = target;
											trigger.parent.triggeredTargets2 = target;
											trigger.targets = target;
											game.log(trigger.player, '使用', trigger.card, '的目标被', player, '改为了', target);
											event.finish();
										}
										'step 3'
										trigger.player.line(player, 'yellow');
										trigger.parent.targets.push(player);
										trigger.parent.triggeredTargets2.push(player);
										game.log(player, '成为了', trigger.card, '的额外目标');
										trigger.parent.xionggu = player;
									},
									group: 'lr_xionggu_after',
								},
								after: {
									audio: 'ext:铝热反应/audio:1',
									trigger: {
										global: 'useCardAfter',
									},
									charlotte: true,
									forced: true,
									silent: true,
									popup: false,
									filter(event, player) {
										if (event.xionggu != player) return false;
										if (event.cards) {
											if (Array.isArray(event.cards)) for (var i of event.cards) {
												if (i.isInPile()) return true;
											}
										}
										return false;
									},
									content() {
										var list = [];
										if (Array.isArray(trigger.cards)) for (var i of trigger.cards) {
											if (i.isInPile()) {
												list.push(i);
											}
										}
										player.gain(list, 'gain2', 'log');
									},
								},
								bug: {
									audio: 'ext:铝热反应/audio:1',
									trigger: {
										global: 'useCardAfter',
									},
									forced: true,
									charlotte: true,
									forced: true,
									silent: true,
									popup: false,
									filter(event, player) {
										return event.card = player.storage.lr_xionggu_bug;
									},
									content() {
										player.removeSkill('lr_xionggu_bug');
									},
								},
							},
						},
						lr_tuoyi: {
							audio: 'ext:铝热反应/audio:2',
							init(player) {
								player.storage.lr_tuoyi = false;
							},
							filter(event, player) {
								return player.storage.lr_tuoyi == false;
							},
							trigger: {
								player: 'dying',
							},
							forced: true,
							limited: true,
							marktext: '托遗',
							mark: true,
							intro: {
								content: 'limited',
							},
							content() {
								'step 0'
								player.chooseTarget(get.prompt2('lr_tuoyi'), function (card, player, target) {
									return target != player;
								}).set('ai', function (target) {//QQQ
									if (player.countCards('h', { name: 'tao' }) || player.countCards('h', { name: 'jiu' })) return false;
									if (!_status.event.goon) return 0;
									var att = get.attitude(player, target);
									if (att <= 1) return 0;
									return att;
								}).set('goon', !player.hasUnknown());
								'step 1'
								if (result.bool) {
									player.say('还没有...结束...');
									player.awakenSkill('lr_tuoyi');
									player.storage.lr_tuoyi = true;
									event.target = result.targets[0];
									event.target.gainMaxHp();
								}
								else {
									event.finish();
								}
								'step 2'
								event.target.recover();
								event.target.drawTo(event.target.maxHp);
								event.target.addSkill('lr_xionggu');
								'step 3'
								player.die();
							},
						},
						lr_quxin: {
							audio: 'ext:铝热反应/audio:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player.canCompare(target) && target.getAttackRange() >= player.getAttackRange();
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0'
								player.say(['君乃当世之豪杰,岂能屈居人下？', '天下攘攘,皆为利往!'].randomGet());
								player.chooseToCompare(target);
								'step 1'
								if (result.bool) {
									event.cards = [];
									event.cards.add(result.target);
									if (game.hasPlayer(function (player) {
										return player != target && target.canUse('sha', player, false);
									})) {
										player.chooseTarget(`驱心:是否令${get.translation(target)}将${get.translation(event.cards[0])}当作雷【杀】对你指定的目标使用？`, function (card, player, target) {
											var source = _status.event.source;
											return target != source && target.canUse('sha', source, false);
										}).set('ai', function (target) {
											return get.damageEffect(target, _status.event.source, player);
										}).set('source', target);
									}
									else {
										event.finish();
									}
								}
								else {
									event.goto(3);
								}
								'step 2'
								if (result.bool && result.targets && result.targets.length) {
									target.useCard({ name: 'sha', nature: 'thunder' }, result.targets[0]);
									event.finish();
								}
								'step 3'
								var bool = false, hs = target.getCards('hes');
								for (var i of hs) {
									if (game.checkMod(i, target, 'unchanged', 'cardEnabled2', target) !== false && target.canUse({ name: 'wuzhong' }, target, false)) {
										bool = true;
										break;
									}
								}
								if (!bool) event.finish();
								'step 4'
								target.chooseCard('驱心:是否将一张牌当作【无中生有】对你使用？', 'hes', function (card, player, target) {
									var target = _status.event.target;
									if (!game.checkMod(card, target, 'unchanged', 'cardEnabled2', target)) return false;
									return target.canUse({ name: 'wuzhong' }, target, false);
								}).set('ai', function (card) {
									return 10 - get.value(card);
								}).set('target', target);
								'step 5'
								if (result.bool) {
									target.useCard({ name: 'wuzhong' }, target, false);
								}
							},
						},
						lr_fuming: {
							audio: 'ext:铝热反应/audio:2',
							forced: true,
							trigger: {
								source: 'damageSource',
								player: 'damageEnd',
							},
							filter(event, player) {
								return player.getHistory('custom', function (evt) { return evt.lr_fuming == true; }).length < 1;
							},
							content() {
								'step 0'
								player.chooseTarget(get.prompt2('lr_fuming')).set('prompt', get.prompt('lr_fuming')).ai = function (target) {
									var num = target.countCards('h') - target.hp;
									if (num >= _status.event.player) num += 10;
									return -get.attitude(_status.event.player, target) * num;
								};
								'step 1'
								if (result.bool) {
									player.say(['吾食汉禄,绝不侍奸相佞臣!', '天龙气竭,不能久矣!'].randomGet());
									player.getHistory('custom').push({ lr_fuming: true });
									var target = result.targets[0];
									event.num = target.countCards('h') - target.hp;
									if (event.num > 0) target.chooseToDiscard('h', true, event.num);
								}
								else {
									event.finish();
								}
								'step 2'
								if (result.bool && result.cards && result.cards.length && event.num >= player.hp) {
									if (result.cards.length == 1) {
										if (game.hasPlayer(function (current) {
											return player.canUse(result.cards[0], current, false);
										})) {
											player.chooseUseTarget(result.cards[0], false);
										}
										event.finish();
									}
									else {
										player.chooseButton(['覆命:请选择要使用的牌', result.cards]).set('filterButton', function (button) {
											return game.hasPlayer(function (current) {
												return player.canUse(button.link, current, false);
											})
										}).set('ai', function (button) {
											player.getUseValue(button.link, false);
										});
									}
								}
								else event.finish();
								'step 3'
								if (result.links) player.chooseUseTarget(result.links[0], false);
							},
						},
						lr_lanfeng: {
							audio: 'ext:铝热反应/audio:2',
							init(player) {
								player.storage.lr_lanfeng = 0;
							},
							trigger: {
								target: 'useCardToTargeted',
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								return event.card.name == 'sha';
							},
							forced: true,
							content() {
								'step 0'
								event.cards = get.cards(player.storage.lr_lanfeng + 2);
								player.chooseTarget(function (card, player, target) {
									if (!_status.event.targets.includes(target) && target != player) return false;
									return true;
								}, `岚锋:是否令一名角色将其手牌与牌堆顶的<span class=firetext>${get.translation(event.cards.length)}</span>张牌替换？`).set('ai', function (target) {
									var player = _status.event.player, att = get.attitude(player, target), hs = target.getCards('h'), num = hs.length;
									var list = _status.event.cards;
									var getv = function (list, target) {
										var num = 0;
										for (var i of list) num += get.value(i, target);
										if (i.name == 'shan') num++;
										return num;
									};
									if (hs.length) val = getv(hs, target) - getv(list, target);
									else val = -getv(list, target);
									if (num < list.length) return att * Math.sqrt(Math.max(0, -val)) * 1.5;
									if (num == list.length) return -att * Math.sqrt(Math.max(0, val));
									return -att * Math.sqrt(Math.max(0, val));
								}).set('targets', trigger.targets).set('cards', event.cards);
								'step 1'
								if (result.bool) {
									var target = result.targets[0];
									player.say(['以虚虚实实之箭,溃浩浩汤汤之敌!', '清风拂面过,寒芒暗诛心!'].randomGet());
									game.cardsGotoOrdering(event.cards);
									var hs = target.getCards('h');
									target.lose(hs, ui.cardPile);
									target.gain(event.cards, 'draw');
									game.log(target, '用', `<span class=firetext>${hs.length}</span>`, '张手牌替换了牌堆顶的', `<span class=firetext>${event.cards.length}</span>`, '张牌');
								}
								else event.finish();
								'step 2'
								game.updateRoundNumber();
							},
						},
						lr_yunling: {
							audio: 'ext:铝热反应/audio:2',
							init(player) {
								player.storage.lr_yunling_rang = 0;
								player.storage.lr_yunling_sha = 0;
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							forced: true,
							//准备阶段,你可以令以下一至二项数值-1,其余项+<X>,直到你下回合开始:①攻击范围;②使用【杀】的次数;③<>内的数字(<X>为你本次选择的项数)
							async content(event, trigger, player) {//QQQ
								const result = await player.chooseButton(['令以下一至二项数值-1,其余项+<X>', [['攻击范围', '使用【杀】的次数', '<>内的数字'], 'tdnodes']], [1, 2])
									.set('ai', (button) => Math.random()).forResult();
								if (result.links && result.links[0]) {
									player.addTempSkill('lr_yunling_effect', { player: 'phaseZhunbeiBegin' });
									player.say(['隐身于,山岚之境.', '藏匿于,雾霭之心.'].randomGet());
									for (var i of result.links) {
										game.log(player, '选择了#g【云翎】的#y选项' + i);
										switch (i) {
											case '攻击范围': {
												player.storage.lr_yunling_rang--;
												player.storage.lr_yunling_sha++;
												player.storage.lr_lanfeng++;
											} break;
											case '使用【杀】的次数': {
												player.storage.lr_yunling_rang++;
												player.storage.lr_yunling_sha--;
												player.storage.lr_lanfeng++;
											} break;
											case '<>内的数字': {
												player.storage.lr_yunling_rang++;
												player.storage.lr_yunling_sha++;
												player.storage.lr_lanfeng--;
											} break;
										}
									}
								}
							},
							subSkill: {
								effect: {
									onremove(player) {
										player.storage.lr_yunling_rang = 0;
										player.storage.lr_yunling_sha = 0;
										player.storage.lr_lanfeng = 0;
									},
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + player.storage.lr_yunling_sha;
										},
										attackRange(player, num) {
											return num + player.storage.lr_yunling_rang;
										},
									},
									mark: true,
									marktext: '云翎',
									intro: {
										content(storage, player) {
											var str = '攻击范围';
											str += player.storage.lr_yunling_rang > 0 ? '<span class=firetext>+' : '<span class=greentext>';
											str += `${player.storage.lr_yunling_rang}</span>(<span class=yellowtext>${player.getAttackRange()}</span>)`;
											str += '<br>使用【杀】的次数';
											str += player.storage.lr_yunling_sha > 0 ? '<span class=firetext>+' : '<span class=greentext>';
											str += `${player.storage.lr_yunling_sha}</span>(<span class=yellowtext>` + player.getCardUsable('sha') + '</span>)';
											str += '<br><>内的数字';
											str += player.storage.lr_lanfeng > 0 ? '<span class=firetext>+' : '<span class=greentext>';
											str += `${player.storage.lr_lanfeng}</span>(<span class=yellowtext>${get.translation(player.storage.lr_lanfeng + 2)}</span>)`;
											return str;
										},
									},
								},
							},
						},
						lr_kuangge: {
							hiddenCard(player, name) {
								if (name == 'jiu') return player.countCards('h') && !player.storage.lr_kuangge.includes(player.hp);
								return false;
							},
							audio: 'ext:铝热反应/audio:2',
							enable: 'chooseToUse',
							filter(event, player) {
								if (player.storage.lr_kuangge.includes(player.hp) || !player.countCards('h')) return false;
								return event.filterCard({ name: 'jiu' }, player, event);
							},
							prompt: '将所有手牌当作【酒】使用',
							mark: true,
							intro: {
								name: '狂歌',
								content(storage, player) {
									var str = player.storage.lr_kuangge;
									str.sort(function (a, b) {
										return a - b;
									});
									return str;
								},
								markcount(storage, player) {
									return player.storage.lr_kuangge.length;
								},
							},
							init(player) {
								player.storage.lr_kuangge = [];
							},
							content() {
								'step 0'
								player.storage.lr_kuangge.add(player.hp);
								'step 1'
								var hs = player.getCards('h');
								event.num = hs.length;
								player.say(['世行礼法徒自缚,吾自狂歌向神明.', '天帝邀我游南阙,玉宇琼霄踏川来.'].randomGet());
								player.useCard({ name: 'jiu' }, hs, player);
								'step 2'
								var list1 = [get.bottomCards()[0]], list2 = [], list3 = [];
								for (var i = 0; i < ui.discardPile.childNodes.length; i++) list2.push(ui.discardPile.childNodes[i]);
								game.countPlayer(function (current) {
									if (current.countCards('ej')) {
										for (var j = 0; j < current.countCards('ej'); j++) {
											list3.push(current.getCards('ej')[j]);
										}
									}
								});
								var dialog = [`狂歌:请选择你要获得的至多${get.cnNumber(event.num)}张牌`];
								dialog.push(`<div class='text center'>牌堆底</div>`);
								dialog.push([list1, 'blank']);
								dialog.push(`<div class='text center'>弃牌堆</div>`);
								dialog.push(list2);
								if (list3.length) {
									dialog.push(`<div class='text center'>场上</div>`);
									dialog.push(list3);
								}
								game.countPlayer(function (current) {
									if (current.countCards('h')) {
										dialog.push(`<div class='text center'>${get.translation(current)}的手牌区</div>`);
										dialog.push([current.getCards('h'), 'blank']);
									}
								});
								player.chooseButton(dialog, [1, event.num]).set('filterButton', function (button) {
									var position = [], owner = [];
									if (ui.selected.buttons.length) {
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											if (get.position(ui.selected.buttons[i].link) == 'd') position.add('d');
											if (get.position(ui.selected.buttons[i].link) == 'e' || get.position(ui.selected.buttons[i].link) == 'j') {
												position.add('e');
												position.add('j');
											}
											if (get.position(ui.selected.buttons[i].link) == 'h') {
												owner.add(get.owner(ui.selected.buttons[i].link));
											}
										}
										if (owner.includes(get.owner(button.link))) return false;
									}
									return !position.includes(get.position(button.link));
								});
								'step 3'
								if (result.bool) {
									player.gain(result.links);
								}
							},
							ai: {
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
								order: 1,
								//每个体力值限一次,你可以将所有手牌当作【酒】使用,从至多等量处各获得一张牌:牌堆底/弃牌堆/场上/一个手牌区
								result: {
									player(player, target) {
										return 4 - player.countCards('h');//QQQ
									},
								},
								tag: {
									save: 1,
									recover: 0.1,
								},
							},
						},
						lr_shenjie: {
							audio: 'ext:铝热反应/audio:2',
							trigger: {
								player: 'changeHp',
							},
							content() {
								'step 0'
								event.count = 1;
								'step 1'
								event.num = 3 + player.getDamagedHp();
								event.cards = get.cards(event.num);
								player.say(['解夺天之妙律,听形离而神聚.', '此曲只应天上有,垂落银河入我心.'].randomGet());
								game.log(player, '观看了', `#y牌堆顶的${get.cnNumber(event.num)}张牌`);
								'step 2'
								var info = ['神解:你可以用牌与其中任意张牌组成等差数列'];
								info.push(`<div class='text center'>牌堆顶的${get.cnNumber(event.num)}张牌</div>`);
								info.push(event.cards);
								if (player.countCards('he')) {
									info.push(`<div class='text center'>你的牌</div>`);
									info.push(player.getCards('he'));
								}
								var next = player.chooseButton();
								next.set('createDialog', info);
								next.set('selectButton', function () {
									return [3, Infinity];
								});
								next.set('filterButton', function (button) {
									var player = _status.event.player, cards = event.cards, list = [];
									if (ui.selected.buttons.length) {
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											list.add(ui.selected.buttons[i].link.number);
										}
										list.sort(function (a, b) {
											return a - b;
										});
										if (list.includes(button.link.number)) return false;
										if (ui.selected.buttons.length > 1) {
											var num = list[1] - list[0];
											return button.link.number == list[0] - num || button.link.number == list[ui.selected.buttons.length - 1] + num || button.link.number - list[0] == num / 2;
										}
										else {
											return !list.includes(button.link.number);
										}
									}
									return cards.includes(button.link);
								});
								'step 3'
								if (result.bool) {
									event.cards = result.links;
									player.showCards(result.links, '神解');
									player.gain(result.links);
								}
								else {
									event.finish();
								}
								'step 4'
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
										return (_status.event.player.countCards('h') - _status.event.player.hp);
									},
									ai2(target) {
										return get.attitude(_status.event.player, target) - 4;
									},
									prompt: '请选择要送人的卡牌,或点<取消>全留给自己'
								});
								'step 5'
								if (result.bool) {
									result.targets[0].gain(result.cards, player);
									player.$give(result.cards.length, result.targets[0]);
									if (Array.isArray(result.cards)) for (var i of result.cards) {
										event.cards.remove(i);
									}
									if (event.cards.length) event.goto(4);
								}
							},
						},
						lr_chengyou: {
							audio: 'ext:铝热反应/audio:2',
							trigger: {
								player: ['loseAfter', 'phaseBegin'],
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
							},
							filter(event, player) {
								if (event.name == 'phase') return true;
								if (player.countCards('h')) return false;
								var evt = event.getl(player);
								return evt && evt.player == player && evt.hs && evt.hs.length;
							},
							content() {
								player.turnOver();
							},
							global: ['lr_chengyou_jiu', 'lr_chengyou_jiu2'],
							subSkill: {
								jiu: {
									filter(event, player) {
										if (!game.hasPlayer(function (current) {
											return current.hasSkill('lr_chengyou') && current.isTurnedOver();
										})) return false;
										return !player.hasSkill('lr_chengyou_jiu3');
									},
									forced: true,
									enable: 'chooseToUse',
									viewAs: {
										name: 'jiu',
									},
									filterCard() { return false },
									selectCard: -1,
								},
								jiu2: {
									trigger: {
										player: 'useCardBegin',
									},
									filter(event, player) {
										return event.skill == 'lr_chengyou_jiu';
									},
									forced: true,
									content() {
										'step 0'
										delete trigger.skill;
										trigger.parent.set('lr_chengyou_jiu', true);
										'step 1'
										if (event.current == undefined) event.current = player.next;
										if (event.current == player && !event.current.hasSkill('lr_chengyou')) {
											player.addTempSkill('lr_chengyou_jiu3');
											event.finish();
											trigger.cancel();
											trigger.parent.goto(0);
										}
										else if (event.current.hasSkill('lr_chengyou') && event.current.isTurnedOver()) {
											var next = event.current.chooseBool(`是否令${get.translation(player)}视为使用一张【酒】？`);
											next.set('ai', function () {
												var event = _status.event;
												return get.attitude(event.player, event.target) > 0;
											});
											next.set('target', player);
											next.set('lr_chengyou_jiu', true);
											next.set('skillwarn', `令${get.translation(player)}视为使用一张【酒】`);
											next.noOrdering = true;
										}
										else {
											event.current = event.current.next;
											event.redo();
										}
										'step 2'
										if (result.bool) {
											game.log(event.current, '令', player, '视为使用了一张', trigger.card);
											event.finish();
										}
										else {
											game.log(event.current, '拒绝令', player, '视为使用了一张', trigger.card);
											event.current = event.current.next;
											event.goto(1);
										}
									},
								},
								jiu3: {
									trigger: { global: ['useCardAfter', 'useSkillAfter', 'phaseAfter'] },
									silent: true,
									charlotte: true,
									filter(event, player) {
										return event.skill != 'lr_chengyou_jiu';
									},
									content() {
										player.removeSkill('lr_chengyou_jiu3');
									},
								},
							},
						},
						lr_wuge: {
							audio: 'ext:铝热反应/audio:2',
							trigger: {
								global: 'recoverEnd',
							},
							filter(event, player) {
								if (!player.countCards('h') || !player.isTurnedOver()) return false;
								return true;
							},
							forced: true,
							content() {
								'step 0'
								var list = { basic: [], equip: [], trick: [], delay: [] };
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									var info = lib.card[name];
									if (info.autoViewAs || name == 'yuansuhuimie') continue;
									if (lib.filter.cardEnabled({ name: name }, player)) {
										if (!list[info.type]) {
											list[info.type] = [];
										}
										list[info.type].push([get.translation(lib.card[name].type), '', name]);
									}
								}
								list.trick.sort(lib.sort.name);
								var dialog = ui.create.dialog('寤歌', [list.trick, 'vcard']);
								// for(var i in list){ 
								//        dialog.addText(get.translation(i)+'牌'); 
								//        dialog.add([list[i],'vcard']); 
								// } 
								var rand1 = Math.random() < 1 / 3;
								var rand2 = Math.random() < 0.5;
								var rand3 = Math.random() < 1 / 3;
								var rand4 = Math.random() < 1 / 3;
								player.chooseButton(dialog, true).ai = function (button) {
									var name = button.link[2];
									if (player.hp <= 1) {
										switch (name) {
											case 'zhiliaobo': return 1;
											case 'dunpaigedang': return 0.8;
											case 'nanman': return 0.5;
											default: return 0;
										}
									}
									if (rand4 && player.countCards('h') <= 1) {
										switch (name) {
											case 'zengbin': return 1;
											case 'wuzhong': return 0.8;
											default: return 0;
										}
									}
									if (player.hasSkill('qinglonglingzhu')) {
										if (rand2) return name == 'chiyuxi' ? 0.8 : 0;
										return name == 'jingleishan' ? 0.8 : 0;
									}
									if (rand2) return name == 'wanjian' ? 0.8 : 0;
									return name == 'nanman' ? 0.8 : 0;
								}
								'step 1'
								if (result.bool) {
									event.name = result.links[0][2];
								}
								else {
									event.finish();
								}
								'step 2'
								var list = ['红色', '黑色'];
								if (player.countCards('h', { color: 'red' }) == 0) list.remove('红色');
								if (player.countCards('h', { color: 'black' }) == 0) list.remove('黑色');
								player.chooseControl(list).set('prompt', `寤歌:将一种颜色的手牌当作${get.translation(event.name)}使用`).set('ai', function () {
									var player = _status.event.player;
									if (player.countCards('h', { color: 'red' }) == 1 &&
										player.countCards('h', { color: 'black' }) > 1) return '红色';
									return '黑色';
								});
								'step 3'
								if (result.control == '红色') {
									var cards = player.getCards('h', { color: 'red' });
								}
								else {
									var cards = player.getCards('h', { color: 'black' });
								}
								player.chooseUseTarget(event.name, cards, true, false);
							},
							group: 'lr_wuge_turnOver',
							subSkill: {
								turnOver: {
									trigger: {
										source: 'damageSource',
										player: 'damageEnd',
									},
									forced: true,
									filter(event, player) {
										if (!player.isTurnedOver()) return false;
										var num1 = 0, num2 = 0;
										player.getHistory('damage', function (evt) {
											if (evt && evt.num > 0) num1 += evt.num;
										});
										player.getHistory('sourceDamage', function (evt) {
											if (evt && evt.num > 0) num2 += evt.num;
										});
										return num1 > 1 || num2 > 1;
									},
									content() {
										player.turnOver();
									},
								},
							},
						},
						lr_zhuyang: {
							audio: 'ext:铝热反应/audio:1',
							trigger: {
								player: ['phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd'],
							},
							forced: true,
							filter(event, player) {
								if (player.hasSkill('lr_zhuyang_ed')) return false;
								return game.hasPlayer(function (current) {
									return player.canCompare(current);
								});
							},
							init(player) {
								player.storage.lr_zhuyang_true = false;
								player.storage.lr_zhuyang_false = false;
							},
							content() {
								'step 0'
								player.chooseTarget(get.prompt2('lr_zhuyang'), function (card, player, target) {
									return player.canCompare(target);
								}).set('ai', function (target) {
									if (!_status.event.goon) return 0;
									return -get.attitude(_status.event.player, target);
								}).set('goon', player.needsToDiscard() || player.hasCard(function (card) {
									var val = get.value(card);
									if (val < 0) return true;
									if (val <= 5) {
										return card.number >= 11;
									}
									if (val <= 6) {
										return card.number >= 12;
									}
									return false;
								}));
								'step 1'
								if (result.bool) {
									event.target = result.targets[0];
									player.chooseToCompare(event.target);
								}
								else {
									event.finish();
								}
								'step 2'
								if (result.bool) {
									bool = false;
									if (player.storage.lr_zhuyang_true) {
										event.finish();
									}
									else {
										bool = false;
										var card = result.player;
										if (player.hasUseTarget(card)) {
											player.chooseUseTarget(card, false, `逐阳:请选择${get.translation(card)}的目标`);
										}
									}
								}
								else {
									if (player.storage.lr_zhuyang_false) {
										event.finish();
									}
									else event.goto(5);
								}
								'step 3'
								if (result.bool) {
									player.getHistory('custom').push({ lr_zhuyang: true });
									if (event.target.countCards('he')) {
										player.gainPlayerCard(event.target, 'he', 'visibleMove', `逐阳:获得${get.translation(event.target)}一张牌或点<取消>摸一张牌`);
									}
								}
								else {
									event.finish();
								}
								'step 4'
								if (!result.bool) {
									player.draw();
								}
								event.finish();
								'step 5'
								player.chooseControl('选项一', '选项二').set('prompt', '逐阳:请选择一项').set('choiceList', [
									'失去1点体力',
									'本回合<逐阳>失效',
								]).set('ai', function () {
									if (player.hp > 2) return '选项一';
									return '选项二';
								});
								'step 6'
								if (result.control == '选项一') {
									player.loseHp();
								}
								else {
									player.addTempSkill('lr_zhuyang_ed');
								}
							},
							subSkill: {
								ed: {
								},
							},
						},
						lr_huanggui: {
							audio: 'ext:铝热反应/audio:2',
							forced: true,
							trigger: {
								player: 'phaseEnd',
							},
							mark: true,
							limited: true,
							init(player) {
								player.storage.lr_huanggui = false;
							},
							filter(event, player) {
								return !player.storage.lr_huanggui;
							},
							derivation: 'lr_kunfen',
							content() {
								'step 0'
								event.num = player.getHistory('custom', function (evt) {
									return evt.lr_zhuyang == true;
								}).length;
								if (event.num > 3) {
									str = '你可以删去<逐阳>没赢的效果,执行一个回合.';
								}
								else {
									str = '你可删去<逐阳>赢的效果,回复所有体力并获得<困奋>.';
								}
								player.chooseBool(get.prompt('lr_huanggui'), str).set('ai', function () {
									if (event.num > 3) return true;
									else if (player.maxHp - player.hp >= 3) return true;
									return false;
								});
								'step 1'
								if (result.bool) {
									player.awakenSkill('lr_huanggui');
									player.storage.lr_huanggui = true;
									event.num = player.getHistory('custom', function (evt) {
										return evt.lr_zhuyang == true;
									}).length;
								}
								else {
									event.finish();
								}
								'step 2'
								if (event.num > 3) {
									player.storage.lr_zhuyang_false = true;
									lib.translate.lr_zhuyang_info = '主要阶段结束时,你可以与一名其他角色拼点,若你赢,你可以使用你的拼点牌,若如此做你获得该角色一张牌或摸一张牌.';
									player.phase('nodelay');
								}
								else {
									player.storage.lr_zhuyang_true = true;
									lib.translate.lr_zhuyang_info = '主要阶段结束时,你可以与一名其他角色拼点,若你没赢,你选择失去1点体力或令此技能本回合失效.';
									player.hp = player.maxHp;
									player.addSkill('kunfen');
								}
							},
						},
						lr_kunfen: {
							audio: 'ext:铝热反应/audio:2',
						},
						lr_suhui: {
							audio: 'ext:铝热反应/audio:2',
							enable: ['chooseToUse', 'chooseToRespond'],
							mark: true,
							marktext: '夙慧',
							intro: {
								content(storage, player) {
									var SpadeNum = game.countPlayer(function (current) {
										return current.countCards('ej', { suit: 'spade' });
									});
									var HeartNum = game.countPlayer(function (current) {
										return current.countCards('ej', { suit: 'heart' });
									});
									var ClubNum = game.countPlayer(function (current) {
										return current.countCards('ej', { suit: 'club' });
									});
									var DiamondNum = game.countPlayer(function (current) {
										return current.countCards('ej', { suit: 'diamond' });
									});
									var BlackNum = game.countPlayer(function (current) {
										return current.countCards('ej', { color: 'black' });
									});
									var RedNum = game.countPlayer(function (current) {
										return current.countCards('ej', { color: 'red' });
									});
									if (player.storage.lr_xingshi_suhui) {
										var str = `<div class='text center'>黑色:${get.translation(BlackNum)} <span class=firetext>红色:${get.translation(RedNum)}</div>`;
										if (!lib.skill.lr_suhui.filterx(player)) {
											str += '<br>场上每种颜色均相同';
										}
										else {
											if (BlackNum > RedNum) str += '<br>场上唯一最多颜色:黑色';
											else str += '<br>场上唯一最多颜色:<span class=firetext>红色</span>';
										}
									}
									else {
										var str = `<div class='text center'>♠️️:${get.translation(SpadeNum)} <span class=firetext>♥️️</span>:${get.translation(HeartNum)} ♣️️:${get.translation(ClubNum)} <span class=firetext>♦️️</span>:${get.translation(DiamondNum)}</div>`;
										if (!lib.skill.lr_suhui.filterx(player)) {
											str += '<br>场上不存在唯一最多花色';
										}
										else {
											if (['spade', 'club'].includes(lib.skill.lr_suhui.filterx(player))) {
												str += '<br>场上唯一最多花色:' + get.translation(lib.skill.lr_suhui.filterx(player));
											}
											else {
												str += `<br>场上唯一最多花色:<span class=firetext>${get.translation(lib.skill.lr_suhui.filterx(player))}</span>`;
											}
										}
									}
									return str;
								},
							},
							filter(event, player) {
								if (player.hasSkill('lr_suhui_ed')) return false;
								for (var i of lib.inpile) {
									var type = get.type(i);
									if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
								}
								return false;
							},
							filterx(player) {
								var SpadeNum = game.countPlayer(function (current) {
									return current.countCards('ej', { suit: 'spade' });
								});
								var HeartNum = game.countPlayer(function (current) {
									return current.countCards('ej', { suit: 'heart' });
								});
								var ClubNum = game.countPlayer(function (current) {
									return current.countCards('ej', { suit: 'club' });
								});
								var DiamondNum = game.countPlayer(function (current) {
									return current.countCards('ej', { suit: 'diamond' });
								});
								var BlackNum = game.countPlayer(function (current) {
									return current.countCards('ej', { color: 'black' });
								});
								var RedNum = game.countPlayer(function (current) {
									return current.countCards('ej', { color: 'red' });
								});
								if (player.storage.lr_xingshi_suhui) {
									if (BlackNum == RedNum) {
										return false;
									}
									else {
										if (BlackNum > RedNum) return 'black';
										else return 'red';
									}
								}
								else {
									if (SpadeNum > HeartNum && SpadeNum > ClubNum && SpadeNum > DiamondNum) {
										return 'spade';
									}
									else {
										if (HeartNum > SpadeNum && HeartNum > ClubNum && HeartNum > DiamondNum) {
											return 'heart';
										}
										else {
											if (ClubNum > SpadeNum && ClubNum > HeartNum && ClubNum > DiamondNum) {
												return 'club';
											}
											else {
												if (DiamondNum > SpadeNum && DiamondNum > HeartNum && DiamondNum > ClubNum) {
													return 'diamond';
												}
												else {
													return false;
												}
											}
										}
									}
								}
							},
							init(player) {
								player.storage.lr_xingshi_suhui = false;
							},
							chooseButton: {
								dialog(event, player) {
									player.draw();
									player.addTempSkill('lr_suhui_ed');
									if (player.storage.lr_xingshi_suhui) {
										if (!lib.skill.lr_suhui.filterx(player)) return ui.create.dialog('夙慧:场上不存在唯一最多的颜色');
									}
									else {
										if (!lib.skill.lr_suhui.filterx(player)) return ui.create.dialog('夙慧:场上不存在唯一最多的花色');
									}
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (name == 'sha') {
											if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
											for (var j of lib.inpile_nature) {
												if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
											}
										}
										else if (get.type(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
										else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
									}
									return ui.create.dialog('夙慧', [list, 'vcard']);
								},
								filter(button, player) {
									if (player.storage.lr_xingshi_suhui) {
										if (!player.countCards('h', { color: lib.skill.lr_suhui.filterx(player) })) {
											if (!_status.temp) _status.temp = {};
											_status.temp.lr_suhui_dialog = ui.create.dialog(`夙慧:你手中没有${get.translation(lib.skill.lr_suhui.filterx(player))}牌`);
											setTimeout(function () {
												if (_status.temp.lr_suhui_dialog) {
													_status.temp.lr_suhui_dialog.delete();
													delete _status.temp.lr_suhui_dialog;
												}
											}, 1100);
											return false;
										}
										else {
											var num = game.countPlayer(function (current) {
												return current.countCards('ej', { color: lib.skill.lr_suhui.filterx(player) });
											});
											if (player.countCards('h', { color: lib.skill.lr_suhui.filterx(player) }) == num) player.removeSkill('lr_suhui_ed');
										}
									}
									else {
										if (!player.countCards('h', { suit: lib.skill.lr_suhui.filterx(player) })) {
											if (!_status.temp) _status.temp = {};
											_status.temp.lr_suhui_dialog = ui.create.dialog(`夙慧:你手中没有${get.translation(lib.skill.lr_suhui.filterx(player))}牌`);
											setTimeout(function () {
												if (_status.temp.lr_suhui_dialog) {
													_status.temp.lr_suhui_dialog.delete();
													delete _status.temp.lr_suhui_dialog;
												}
											}, 1100);
											return false;
										}
										else {
											var num = game.countPlayer(function (current) {
												return current.countCards('ej', { suit: lib.skill.lr_suhui.filterx(player) });
											});
											if (player.countCards('h', { suit: lib.skill.lr_suhui.filterx(player) }) == num) player.removeSkill('lr_suhui_ed');
										}
									}
									return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
								},
								check(button) {
									if (_status.event.parent.type != 'phase') return 1;
									var player = _status.event.player;
									if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
									return player.getUseValue({
										name: button.link[2],
										nature: button.link[3],
									});
								},
								backup(links, player) {
									return {
										filterCard(card) {
											if (player.storage.lr_xingshi_suhui) return get.color(card) == lib.skill.lr_suhui.filterx(player);
											else return card.suit == lib.skill.lr_suhui.filterx(player);
										},
										selectCard: -1,
										popname: true,
										check(card) {
											return 8 - get.value(card);
										},
										position: 'h',
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
										},
									}
								},
								prompt(links, player) {
									return `将手中的${get.translation(lib.skill.lr_suhui.filterx(player))}牌当做` + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							hiddenCard(player, name) {
								var type = get.type(name);
								return (type == 'basic' || type == 'trick') && player.countCards('h') > 0 && !player.hasSkill('lr_suhui_ed');
							},
							ai: {
								fireAttack: true,
								respondSha: true,
								respondShan: true,
								skillTagFilter(player) {
									if (!player.countCards('h') || player.hasSkill('lr_suhui_ed')) return false;
								},
								order: 1,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
							subSkill: {
								ed: {
								},
							},
						},
						lr_qingsong: {
							zhuanhuanji: true,
							mark(storage, player) {
								if (!player.storage.lr_xingshi_qingsong) return true;
								else return false;
							},
							marktext: '☯',
							intro: {
								content(storage, player, skill) {
									if (player.storage.lr_qingsong == true) return '你首次参与当前回合的伤害结算后,你可以将一张牌置入一名其他角色的合法区域,摸一张牌';
									return '你首次参与当前回合的伤害结算后,你可以令一名角色收回一张场上的牌';
								},
							},
							usable: 1,
							forced: true,
							init(player) {
								player.storage.lr_qingsong = false;
								player.storage.lr_xingshi_qingsong = false;
							},
							audio: 'ext:铝热反应/audio:2',
							trigger: {
								player: 'damageEnd',
								source: 'damageEnd',
							},
							filter(event, player) {
								if (player.storage.lr_xingshi_qingsong) {
									return game.countPlayer(function (current) {
										return current.countCards('ej');
									}) || player.countCards('he');
								}
								else {
									return (game.countPlayer(function (current) {
										return current.countCards('ej');
									}) && !player.storage.lr_qingsong) || (player.countCards('he') && player.storage.lr_qingsong);
								}
							},
							//转换技,你首次参与当前回合的伤害结算后,你可以:①令一名角色收回一张场上的牌;②将一张牌置入一名其他角色的合法区域,摸一张牌
							content() {
								'step 0'
								event.list = ['令一名角色收回一张场上的牌', '将一张牌置入一名其他角色的合法区域,摸一张牌'];
								if (!game.countPlayer(function (current) {
									return current.countCards('ej');
								}) || (player.storage.lr_qingsong && !player.storage.lr_xingshi_qingsong)) event.list.remove('令一名角色收回一张场上的牌');
								if (!player.countCards('he') || (!player.storage.lr_qingsong && !player.storage.lr_xingshi_qingsong)) event.list.remove('选将一张牌置入一名其他角色的合法区域,摸一张牌');
								if (!event.list.length) {
									event.finish();
								}
								else {
									if (!player.storage.lr_xingshi_qingsong) {
										if (!player.storage.lr_qingsong) event.control = '令一名角色收回一张场上的牌';
										else event.control = '将一张牌置入一名其他角色的合法区域,摸一张牌';
										event.goto(3);
									}
								}
								'step 1'
								player.chooseControl('cancel2').set('choiceList', event.list).set('prompt', get.prompt('lr_qingsong')).set('choice', function () {
									return event.list.randomGet();
								}()).set('ai', () => _status.event.choice);
								'step 2'
								if (result.control != 'cancel2') {
									if (result.control == '选项二') {
										event.control = event.list[1];
									}
									else event.control = event.list[0];
								}
								else {
									event.finish();
								}
								'step 3'
								if (event.control == '令一名角色收回一张场上的牌') {
									player.chooseTarget('令一名角色收回一张场上的牌', function (card, player, target) {
										return target.countCards('ej');
									}).ai = (target) => {
										var player = _status.event.player;
										var att = get.attitude(player, target);
										var e = target.getCards('e');
										var j = target.getCards('j');
										if (j && att > 0) return 3;
										if (e && att < 0) return 2;
										return 1;
									}
								}
								else {
									event.goto(6);
								}
								'step 4'
								if (result.bool) {
									event.target = result.targets[0];
									player.choosePlayerCard(event.target, 'ej').ai = get.buttonValue;
								}
								else {
									event.finish();
								}
								'step 5'
								if (result.bool && result.cards && result.cards.length) {
									event.target.gain(result.cards, 'gain2');
									if (!player.storage.lr_xingshi_qingsong) player.changeZhuanhuanji('lr_qingsong');
								}
								event.finish();
								'step 6'
								player.chooseCardTarget({
									filterCard: true,
									selectCard: 1,
									position: 'he',
									filterTarget(card, player, target) {
										return player != target;
									},
									ai1(card) {
										if (ui.selected.cards.length) return -1;
										return (_status.event.player.countCards('h') - _status.event.player.hp);
									},
									ai2(target) {
										return get.attitude(_status.event.player, target) - 4;
									},
									prompt: '将一张牌置入一名其他角色的合法区域,摸一张牌'
								}).set('forced', true);
								'step 7'
								if (result.bool) {
									event.card = result.cards[0];
									event.target = result.targets[0];
									var name = event.card.name;
									var list = ['手牌区'];
									if (lib.card[name].type == 'equip' && event.target.isEmpty(lib.card[name].subtype)) list.push('装备区');
									if (lib.card[name].type == 'delay' && !event.target.storage._disableJudge && !event.target.hasJudge(name)) list.push('判定区');
									if (list.length == 1) event._result = { control: list[0] };
									else {
										player.chooseControl(list).set('prompt', `把${get.translation(card)}移动到${get.translation(event.target)}的...`).ai = function () { return 0 };
									}
								}
								else {
									event.finish();
								}
								'step 8'
								if (result.control == '手牌区') {
									var next = event.target.gain(card);
									next.source = player;
									next.animate = 'giveAuto';
								}
								else if (result.control == '装备区') {
									player.$give(card, event.target);
									event.target.equip(card);
								}
								else {
									player.$give(card, event.target);
									event.target.addJudge(card);
								}
								player.draw();
								if (!player.storage.lr_xingshi_qingsong) player.changeZhuanhuanji('lr_qingsong');
							},
						},
						lr_xingshi: {
							juexingji: true,
							audio: 'ext:铝热反应/audio:2',
							trigger: {
								player: 'dying',
							},
							forced: true,
							filter(event, player) {
								if (!player.storage.lr_xingshi_dying) player.storage.lr_xingshi_dying = 0;
								player.storage.lr_xingshi_dying++;
								if (player.storage.lr_xingshi_dying < 2) return false;
								return !player.storage.lr_xingshi;
							},
							content() {
								'step 0'
								lib.translate.lr_suhui_info = '回合技,当你需要使用或打出一张即时牌时,你可以摸一张牌,将场上唯一最多<font color=#920783>颜色</font>的手牌当作其使用;若两组牌数量相同,此技能本回合视为未发动过.';
								lib.skill.lr_qingsong.zhuanhuanji = false;
								delete lib.skill.lr_qingsong.mark;
								delete lib.skill.lr_qingsong.marktext;
								delete lib.skill.lr_qingsong.intro;
								delete player.storage.lr_qingsong;
								player.unmarkSkill('lr_qingsong');
								lib.translate.lr_qingsong_info = '你首次参与当前回合的伤害结算后,你可以:①令一名角色收回一张场上的牌;②将一张牌置入一名其他角色的合法区域,摸一张牌.';
								'step 1'
								player.storage.lr_xingshi = true;
								player.storage.lr_xingshi_suhui = true;
								player.storage.lr_xingshi_qingsong = true;
								player.awakenSkill('lr_xingshi');
							},
						},
						lr_xuanfeng: {
							audio: 'ext:铝热反应/audio:2',
							enable: 'phaseUse',
							filterCard(card, player) {
								if (player.storage.lr_xuanfeng_type &&
									player.storage.lr_xuanfeng_type.includes(get.type2(card))) {
									return false;
								}
								return true;
							},
							filter(event, player) {
								return !player.storage.lr_xuanfeng_suit || (player.storage.lr_xuanfeng_suit && player.storage.lr_xuanfeng_suit.length < 4);
							},
							check(card) {
								if (lib.skill.lr_sifu.filterx(_status.event.player).includes(card.suit)) {
									return 8 - get.value(card);//QQQ
								}
								return 6 - get.value(card);
							},
							content() {
								'step 0'
								if (!player.storage.lr_xuanfeng_type) {
									player.storage.lr_xuanfeng_type = [];
								}
								if (!player.storage.lr_xuanfeng_suit) {
									player.storage.lr_xuanfeng_suit = [];
								}
								delete player.storage.lr_sifu_less;
								delete player.storage.lr_sifu_more;
								event.type = get.type2(cards[0], cards[0].original == 'h' ? player : false);
								player.storage.lr_xuanfeng_type.add(event.type);
								player.storage.lr_xuanfeng_suit.add(cards[0].suit);
								if (player.storage.lr_xuanfeng_type.length == player.hp) {
									player.useSkill('lr_xuanfeng_effect');
								}
								'step 1'
								event.targets = game.filterPlayer(function (target) {
									return target != player && target.inRange(player) && target.countCards('he') > 0;
								});
								event.targets.sortBySeat();
								event.cards = [];
								'step 2'
								event.target = event.targets.shift();
								if (event.target) {
									event.target.chooseCard('he', `是否弃置一张${get.translation(event.type)}牌？`, function (card) {
										return get.type(card) == event.type;
									}).set('ai', function (card) {
										return (Math.random() - 0.7) * (7 - get.value(card));
									});
								}
								else {
									event.goto(4);
								}
								'step 3'
								if (result.bool) {
									event.cards.push([event.target, result.cards]);
									player.storage.lr_xuanfeng_suit.add(result.cards[0].suit);
								}
								if (targets.length) event.goto(2);
								'step 4'
								game.loseAsync({
									lose_list: event.cards,
								}).setContent('discardMultiple');
							},
							ai: {
								order: 8,
							},
							group: 'lr_xuanfeng_clear',
							subSkill: {
								effect: {
									forced: true,
									content() {
										'step 0'
										var suits = [];
										var types = [];
										game.getGlobalHistory('cardMove', function (evt) {
											if (suits.length >= 4) return;
											if (evt.name == 'lose') {
												if (evt.position == ui.discardPile) {
													for (var i of evt.cards) suits.add(i.suit);
												}
											}
											else {
												if (evt.name == 'cardsDiscard') {
													for (var i of evt.cards) suits.add(i.suit);
												}
											}
										});
										event.cards1 = [];
										event.cards2 = [];
										for (var i = 0; i < suits.length; i++) {
											var card = get.cardPile2(function (card) {
												return card.suit == suits[i];
											});
											if (card) event.cards1.push(card);
										}
										for (var i = 0; i < ui.discardPile.childElementCount; i++) {
											var card = ui.discardPile.childNodes[i];
											var type = get.type(card);
											if (!types.includes(type)) {
												event.cards2.push(card);
												types.push(type);
												if (event.cards2.length >= 3) break;
											}
										}
										player.chooseControl().set('choiceList', [
											'从牌堆中获得中央区内所含花色的牌各一张',
											'从弃牌堆中获得三张类别不同的牌',
										]).set('ai', function () {
											var num1 = 0, num2 = 0;
											for (var i = 0; i < event.cards1.length; i++) {
												num1 += get.value(event.cards1[i]);
											}
											for (var i = 0; i < event.cards2.length; i++) {
												num2 += get.value(event.cards2[i]);
											}
											if (num1 > num2) return 0;
										});
										'step 1'
										event.index = result.index;
										if (result.index == 1) player.gain(event.cards2, 'gain2');
										else player.gain(event.cards1, 'gain2');
									},
									popup: false,
								},
								clear: {
									trigger: {
										global: 'phaseAfter',
									},
									silent: true,
									content() {
										delete player.storage.lr_xuanfeng_type;
										delete player.storage.lr_xuanfeng_suit;
									},
									forced: true,
									popup: false,
								},
							},
						},
						lr_sifu: {
							audio: 'ext:铝热反应/audio:2',
							mark: true,
							zhuanhuanji: true,
							marktext: '☯',
							intro: {
								content(storage, player, skill) {
									if (player.storage.lr_sifu) return `转换技,你的牌进入中央区时,若这些牌中存在花色为中央区内最少(${get.translation(lib.skill.lr_sifu.filterx(player))})的牌,你摸一张牌.`;
									return `转换技,你的牌进入中央区时,若这些牌中存在花色为中央区内最多(${get.translation(lib.skill.lr_sifu.filterx(player))})的牌,你摸一张牌.`;
								},
							},
							trigger: {
								player: 'loseAfter',
								global: 'loseAsyncAfter',
							},
							filter(event, player) {
								if (player.storage.lr_sifu) {
									if (player.storage.lr_sifu_less) return false;
								}
								else {
									if (player.storage.lr_sifu_more) return false;
								}
								var evt = event.getl(player);
								if (!evt.cards2 || !evt.cards2.length) return false;
								var cards = evt.cards2;
								var list = ['spade', 'heart', 'club', 'diamond'];
								var spadeNum = 0, heartNum = 0, clubNum = 0, diamondNum = 0;
								game.getGlobalHistory('cardMove', function (evt) {
									if (evt.name == 'lose') {
										if (evt.position == ui.discardPile) {
											for (var i of evt.cards) {
												if (!cards.includes(i)) {
													var suit = i.suit;
													if (suit == 'spade') spadeNum++;
													if (suit == 'heart') heartNum++;
													if (suit == 'club') clubNum++;
													if (suit == 'diamond') diamondNum++;
												}
											}
										}
									}
									else {
										if (evt.name == 'cardsDiscard') {
											for (var i of evt.cards) {
												if (!cards.includes(i)) {
													var suit = i.suit;
													if (suit == 'spade') spadeNum++;
													if (suit == 'heart') heartNum++;
													if (suit == 'club') clubNum++;
													if (suit == 'diamond') diamondNum++;
												}
											}
										}
									}
								});
								if (player.storage.lr_sifu) {
									if (spadeNum > heartNum || spadeNum > clubNum || spadeNum > diamondNum) list.remove('spade');
									if (heartNum > spadeNum || heartNum > clubNum || heartNum > diamondNum) list.remove('heart');
									if (clubNum > spadeNum || clubNum > heartNum || clubNum > diamondNum) list.remove('club');
									if (diamondNum > spadeNum || diamondNum > heartNum || diamondNum > clubNum) list.remove('diamond');
								}
								else {
									if (spadeNum < heartNum || spadeNum < clubNum || spadeNum < diamondNum) list.remove('spade');
									if (heartNum < spadeNum || heartNum < clubNum || heartNum < diamondNum) list.remove('heart');
									if (clubNum < spadeNum || clubNum < heartNum || clubNum < diamondNum) list.remove('club');
									if (diamondNum < spadeNum || diamondNum < heartNum || diamondNum < clubNum) list.remove('diamond');
								}
								if (Array.isArray(cards)) for (var i of cards) {
									if (list.includes(i.suit)) return true;
								}
							},
							filterx(player) {
								var list = ['spade', 'heart', 'club', 'diamond'];
								var spadeNum = 0, heartNum = 0, clubNum = 0, diamondNum = 0;
								game.getGlobalHistory('cardMove', function (evt) {
									if (evt.name == 'lose') {
										if (evt.position == ui.discardPile) {
											for (var i of evt.cards) {
												var suit = i.suit;
												if (suit == 'spade') spadeNum++;
												if (suit == 'heart') heartNum++;
												if (suit == 'club') clubNum++;
												if (suit == 'diamond') diamondNum++;
											}
										}
									}
									else {
										if (evt.name == 'cardsDiscard') {
											for (var i of evt.cards) {
												var suit = i.suit;
												if (suit == 'spade') spadeNum++;
												if (suit == 'heart') heartNum++;
												if (suit == 'club') clubNum++;
												if (suit == 'diamond') diamondNum++;
											}
										}
									}
								});
								if (player.storage.lr_sifu) {
									if (spadeNum > heartNum || spadeNum > clubNum || spadeNum > diamondNum) list.remove('spade');
									if (heartNum > spadeNum || heartNum > clubNum || heartNum > diamondNum) list.remove('heart');
									if (clubNum > spadeNum || clubNum > heartNum || clubNum > diamondNum) list.remove('club');
									if (diamondNum > spadeNum || diamondNum > heartNum || diamondNum > clubNum) list.remove('diamond');
								}
								else {
									if (spadeNum < heartNum || spadeNum < clubNum || spadeNum < diamondNum) list.remove('spade');
									if (heartNum < spadeNum || heartNum < clubNum || heartNum < diamondNum) list.remove('heart');
									if (clubNum < spadeNum || clubNum < heartNum || clubNum < diamondNum) list.remove('club');
									if (diamondNum < spadeNum || diamondNum < heartNum || diamondNum < clubNum) list.remove('diamond');
								}
								return list;
							},
							forced: true,
							content() {
								player.draw();
								if (player.storage.lr_sifu) {
									player.storage.lr_sifu_less = true;
								}
								else {
									player.storage.lr_sifu_more = true;
								}
								player.changeZhuanhuanji('lr_sifu');
							},
							group: 'lr_sifu_clear',
							subSkill: {
								clear: {
									trigger: {
										global: 'phaseAfter',
									},
									silent: true,
									content() {
										delete player.storage.lr_sifu_less;
										delete player.storage.lr_sifu_more;
									},
									forced: true,
									popup: false,
								},
							},
						},
						lr_zongyi: {
							hiddenCard(player, name) {
								if (name == 'jiu') return player.countCards('h');
								return false;
							},
							audio: 'ext:铝热反应/audio:2',
							enable: 'chooseToUse',
							filter(event, player) {
								if (!player.countCards('h')) return false;
								return event.filterCard({ name: 'jiu' }, player, event);
							},
							prompt: '将所有手牌当作【酒】使用',
							content() {
								'step 0'
								var hs = player.getCards('h');
								event.num = hs.length;
								player.say(['', ''].randomGet());
								player.useCard({ name: 'jiu' }, hs, player);
								'step 1'
								event.list = [];
								game.getGlobalHistory('cardMove', function (evt) {
									if (evt.name == 'lose') {
										if (evt.position == ui.discardPile) {
											for (var i of evt.cards) event.list.add(i.name);
										}
									}
									else {
										if (evt.name == 'cardsDiscard') {
											for (var i of evt.cards) event.list.add(i.name);
										}
									}
								});
								'step 2'
								var card = get.cards()[0];
								player.showCards(card);
								if (event.list.includes(card.name)) {
									player.gain(card, 'gain2');
								}
								else {
									player.$throw(card);
									game.cardsDiscard(card);
								}
								'step 3'
								event.num--;
								if (event.num > 0) event.goto(1);
							},
							ai: {
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
								order: 5,
								result: {
									//你可以将所有手牌(至少一张)当作【酒】使用.依次亮出牌堆顶的等量牌.若中央区内有此牌名的牌,你获得之,否则你弃置之.你使用【酒】后重置<浪形>
									player(player, target) {
										if (player.isDying()) return 2;
										return 2 - player.countCards('h');//QQQ
									},
								},
								tag: {
									save: 1,
									recover: 0.1,
								},
							},
							group: 'lr_zongyi_jiu',
							subSkill: {
								jiu: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									filter(event, player) {
										return event.card && event.card.name == 'jiu';
									},
									content() {
										player.remove('lr_langxing_ed');
									},
								},
							},
						},
						lr_langxing: {
							audio: 'ext:铝热反应/audio:2',
							enable: 'phaseUse',
							filter(event, player) {
								var list = [];
								game.getGlobalHistory('cardMove', function (evt) {
									if (evt.name == 'lose') {
										if (evt.position == ui.discardPile) {
											for (var i of evt.cards) {
												var card = get.cardPile(function (card) {
													return card == i;
												}, 'discardPile');
												if (card) list.add(i);
											}
										}
									}
									else {
										if (evt.name == 'cardsDiscard') {
											for (var i of evt.cards) {
												var card = get.cardPile(function (card) {
													return card == i;
												}, 'discardPile');
												if (card) list.add(i);
											}
										}
									}
								});
								return list.length && player.countCards('h') && player.hasSkill('jiu') && !player.hasSkill('lr_langxing_ed');
							},
							content() {
								'step 0'
								player.addTempSkill('lr_langxing_ed');
								event.cards = [];
								game.getGlobalHistory('cardMove', function (evt) {
									if (evt.name == 'lose') {
										if (evt.position == ui.discardPile) {
											for (var i of evt.cards) {
												var card = get.cardPile(function (card) {
													return card == i;
												}, 'discardPile');
												if (card) event.cards.add(i);
											}
										}
									}
									else {
										if (evt.name == 'cardsDiscard') {
											for (var i of evt.cards) {
												var card = get.cardPile(function (card) {
													return card == i;
												}, 'discardPile');
												if (card) event.cards.add(i);
											}
										}
									}
								});
								'step 1'
								var cards = event.cards;
								var next = player.chooseToMove('浪形:是否用手牌交换中央区内等量的牌？');
								next.set('list', [
									['中央区', cards],
									['手牌区', player.getCards('h')],
								]);
								next.set('filterMove', function (from, to) {
									return typeof to != 'number';
								});
								next.set('processAI', function (list) {
									var player = _status.event.player, cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
										return get.value(a) - get.value(b);
									}), cards2 = cards.splice(0, cards.length);
									return [cards2, cards];
								});
								'step 2'
								if (result.bool) {
									var pushs = result.moved[0], gains = result.moved[1];
									pushs.removeArray(event.cards);
									gains.removeArray(player.getCards('h'));
									event.cards.addArray(pushs);
									event.cards.remove(gains);
									player.loseToDiscardpile(pushs);
									player.gain(gains, 'gain2', 'log', 'fromStorage');
								}
								'step 3'
								event.nums = [];
								if (Array.isArray(event.cards)) for (var i of event.cards) {
									event.nums.push(i.number);
								}
								event.nums.sort(function (a, b) {
									return a - b;
								});
								'step 4'
								var list = [];
								for (var i = 0; i < event.nums.length; i++) {
									if (event.nums.length > 1 && i + 1 < event.nums.length) {
										if (event.nums[i] == event.nums[i + 1]) {
											game.log('对子' + event.nums[i] + event.nums[i + 1]);
											event.finish();
										}
									}
									list.add(event.nums[i]);
								}
								for (var i = 0; i < list.length; i++) {
									if (list.length > 2 && i + 2 < list.length) {
										if (list[i + 2] - list[i + 1] == 1 && list[i + 1] - list[i] == 1) {
											game.log('顺子' + list[i] + list[i + 1] + list[i + 2]);
											event.finish();
										}
									}
								}
								'step 5'
								player.draw();
								var history = player.getHistory('useCard');
								for (var i = 0; i < history.length; i++) {
									var name = history[i].card.name;
									player.getStat('card')[name] = 0;
								}
							},
							subSkill: {
								ed: {
								},
							},
						},
					},
					dynamicTranslate: {
					},
					translate: {
						//分组部分
						lrfy_zhengzhenghanchen: '<span style="font-family: yuanli">铮铮汉臣</span>',
						lrfy_jiarenzhizi: '<span style="font-family: yuanli">佳人之姿</span>',
						lrfy_zhishizhijie: '<span style="font-family: yuanli">志士之节</span>',
						lrfy_luandangzhishi: '<span style="font-family: yuanli">乱党之势</span>',
						lrfy_gongchenzhixin: '<span style="font-family: yuanli">肱臣之心</span>',
						lrfy_mokezhiya: '<span style="font-family: yuanli">墨客之雅</span>',
						lrfy_cuoweizhizhi: '<span style="font-family: yuanli">错位之智</span>',
						//武将部分
						lr_wenyuan: '文鸳',
						lr_tianshangyi: '田尚衣',
						lr_wangyun: '王允',
						lr_huanfan: '桓范',
						lr_xuelingyun: '薛灵芸',
						lr_lihui: '李恢',
						lr_sunchen: '孙綝',
						lr_sunjun: '孙峻',
						lr_weifeng: '魏讽',
						lr_huangwudie: '黄舞蝶',
						lr_ruanxian: '阮咸',
						lr_liuling: '刘伶',
						lr_xiangxiu: '向秀',
						lr_ruanji: '阮籍',
						lr_sp_jiangwei: '☆SP姜维',
						lr_wangrong: '王戎',
						//技能部分
						lr_miaojun: '妙隽',
						lr_miaojun_info: '当你使用即时牌时,你可以记录此牌名的字数.若如此做且你记录的字数是5的倍数时,该牌不可被响应,你记录的字数是7的倍数时,该牌额外结算一次.',
						lr_juyi: '举弈',
						lr_juyi_info: '限定技,你可以依次展示牌堆顶的一张牌并使用此牌(无距离次数限制,不能使用则弃置),若你记录的字数不是此牌字数的倍数,你选择一项:失去一点体力或结束该流程.',
						lr_wuxiu: '舞袖',
						lr_wuxiu_info: '出牌阶段限一次, 你可依次展示含你在内的X+1名角色的各一张手牌(X为你的体力值),若其展示的牌与你展示的牌的颜色:相同,视为你与其依次对对方使用之 ;不同,你可以用一张手牌交换其展示的牌.',
						lr_lveyan: '掠燕',
						lr_lveyan_info: '当你使用或打出一张牌或被指定为牌的目标时,若该牌没有对应的实体牌,你可以摸一张牌.',
						lr_lianji: '连计',
						lr_lianji_info: '出牌阶段限两次,你可以将一张牌当作不以此法使用过的【笑里藏刀】、【借刀杀人】或【美人计】使用.',
						lr_moucheng: '谋逞',
						lr_moucheng_info: '限定技,当你发动〖连计〗至此牌结算完成时,若有一名角色死亡,你可以加一点体力上限并将体力值和手牌调整至体力上限,你失去〖连计〗并获得〖矜功〗.',
						lr_jingong: '矜功',
						lr_jingong_info: '当你需要使用或打出一张牌时,你可以观看牌堆顶的三张牌,并使用或打出之,反之你失去一点体力.(【无懈可击】除外)',
						lr_jingong_backup: '矜功',
						lr_jingong_backup_info: '',
						lr_zhijian: '职谏',
						lr_zhijian_info: '当一名其他角色使用非虚拟的普通锦囊牌时,你可以令其选择一项:<br>1.令此牌无效并视为使用一张你指定的智囊;<br>2.令你弃置其一张牌失去一点体力.(若其有<同党>标记则无需弃牌)',
						lr_jiedang: '结党',
						lr_jiedang_info: '限定技,一轮游戏开始时,你可以与一名其他角色结为<同党>,与你<同党>的角色视为拥有技能<系灭>.',
						lr_ximie: '系灭',
						lr_ximie_info: '<span class="Qmenu">锁定技,</span>你的手牌上限+2;与你<同党>的其他角色受到伤害/死亡时,你弃置一张牌/失去一点体力.',
						lr_miaozhi: '妙织',
						lr_miaozhi_info: '你可以将至少X+1张牌当一张与这些牌的名称字数和相同的即时牌使用.若这些牌颜色不同,你受到1点伤害;若该牌名你本轮已使用过,你摸一张牌.(X为你本回合发动此技能的次数)',
						lr_fuxia: '拂霞',
						lr_fuxia_info: '当你受到伤害后,你可以用你的任意张牌交换中央区至多等量的花色各异的牌,当前回合角色也可如此做.',
						lr_laijiang: '庲降',
						lr_laijiang_info: '当你成为非装备牌的目标时,若此牌目标数不小于你的体力值,你可以摸一张牌.',
						lr_yixiang: '诣降',
						lr_yixiang_info: '一名角色的出牌阶段开始时,你可以将一张牌当作【桃】对其使用,你可以将其一个技能替换为<统调>直至回合结束.',
						lr_tongtiao: '统调',
						lr_tongtiao_info: '<span class="Qmenu">锁定技,</span>你使用牌无距离限制.当你使用一张即使牌时,令你获得此技能的角色可以为此牌增加一个目标.',
						lr_lingnve: '凌虐',
						lr_lingnve_info: '当你使用即时牌指定一名角色为唯一目标后,你可以失去1点体力并展示其一张手牌.若该角色使用此牌响应了你使用的牌.你对其造成1点伤害,否则你弃置其两张牌.',
						lr_shanzhi: '擅执',
						lr_shanzhi_info: '出牌阶段限一次,你可以令一名角色选择是否交给你一张带「伤害」标签的牌,若其选择是则你可以使用此牌(不计入次数)且该牌若为【杀】则此技能视为未发动过,反之你令其下一次受到的伤害+1.',
						lr_xionggu: '凶锢',
						lr_xionggu_info: '每轮限一次,其他角色的出牌阶段开始时,你可以与其各摸一张牌.若如此做,其本回合使用牌指定其他角色为唯一目标时,你可以令此技能失效直至此牌结算完成,与其拼点:若你赢,你为此牌重新指定目标;若你没赢,你成为此牌额外目标,且结算后你获得之.',
						lr_tuoyi: '托遗',
						lr_tuoyi_info: '限定技,你进入濒死状态时,你可以令一名其他角色加1点体力上限、回复1点体力并将手牌摸至上限,其获得<凶锢>,最后你死亡.',
						lr_quxin: '驱心',
						lr_quxin_info: '出牌阶段限一次,你可以与一名攻击范围不小于你的角色拼点.若你赢,你可令其将拼点牌当做雷【杀】对你指定的目标使用;若你没赢,其可将一张牌当做【无中生有】使用.',
						lr_fuming: '覆命',
						lr_fuming_info: '回合技,当你造成或受到伤害后,你可令一名角色将手牌数弃至与其体力值相同.若弃牌数量不小于你的体力值,你可以使用其中一张牌.',
						lr_lanfeng: '岚锋',
						lr_lanfeng_info: '你指定/成为【杀】的目标后,你可以令你或目标用手牌替换牌堆顶的<<span class=firetext>2</span>>张牌.',
						lr_yunling: '云翎',
						lr_yunling_info: '准备阶段,你可以令以下一至二项数值-1,其余项+<span class=firetext>X</span>,直到你下回合开始:①攻击范围;②使用【杀】的次数;③<>内的数字(<span class=firetext>X</span>为你本次选择的项数).',
						lr_kuangge: '狂歌',
						lr_kuangge_info: '每个体力值限一次,你可以将<span class=thundertext>所有手牌</span>当作【酒】使用,从至多<span class=thundertext>等量</span>处各获得一张牌:牌堆底/弃牌堆/场上/一个手牌区.',
						lr_shenjie: '神解',
						lr_shenjie_info: '你的体力值发生1点变化后,你可以观看牌堆顶的3+X张牌,你可以用牌与其中任意张组成<span class=thundertext>等差数列</span>,并展示分配.(X为你的已损体力值)',
						lr_chengyou: '酲游',
						lr_chengyou_info: '回合开始时或你失去最后的手牌后,你可以翻面;若你背面朝上,你可以令一名角色于需要使用【酒】时视为使用之.',
						lr_wuge: '寤歌',
						lr_wuge_info: '<span class="Qmenu">锁定技,</span>若你背面朝上,则有:你于一名角色回复体力后须将一种颜色的所有手牌当做一张普通锦囊牌使用;每回合你累积造成或受到多于1点的伤害后,你翻面.',
						lr_zhuyang: '逐阳',
						lr_zhuyang_info: '主要阶段结束时,你可以与一名其他角色拼点,若你:赢,你可以使用你的拼点牌,若如此做你获得该角色一张牌或摸一张牌;没赢,你选择失去1点体力或令此技能本回合失效.',
						lr_huanggui: '煌归',
						lr_huanggui_info: '限定技,回合结束时,若你本回合使用过四张拼点牌,你可删去<逐阳>没赢的效果,执行一个回合;反之,你可删去<逐阳>赢的效果,回复所有体力并获得<困奋>.',
						lr_kunfen: '困奋',
						lr_kunfen_info: '<span class="Qmenu">锁定技,</span>结束阶段开始时,你失去1点体力,摸两张牌.',
						lr_suhui: '夙慧',
						lr_suhui_info: '回合技,当你需要使用或打出一张即时牌时,你可以摸一张牌,将场上唯一最多<font color=#920783>花色</font>的手牌当作其使用;若两组牌数量相同,此技能本回合视为未发动过.',
						lr_qingsong: '清颂',
						lr_qingsong_info: '转换技,你首次参与当前回合的伤害结算后,你可以:①令一名角色收回一张场上的牌;②将一张牌置入一名其他角色的合法区域,摸一张牌.',
						lr_xingshi: '行时',
						lr_xingshi_info: '觉醒技,当你第二次进入濒死状态时,你将<夙慧>中的<font color=#920783>花色</font>改为<font color=#920783>颜色</font>;删去<清颂>的<font color=#920783>转换技</font>标签.',
						lr_xuanfeng: '玄风',
						lr_xuanfeng_info: '出牌阶段每种类别限一次,你可以弃置一张牌并重置<思赋>的使用次数;攻击范围含你的角色同时选择是否弃置一张同类别的牌.<br>同一回合内:①以此法被弃置的牌达到四种花色时,此技能失效直到本回合结束;②你以此法弃置X张牌后,你须选择一项:从牌堆中获得中央区内所含花色的牌各一张;或从弃牌堆中获得三张类别不同的牌.(X为你的体力值)',
						lr_sifu: '思赋',
						lr_sifu_info: '转换技,每回合每项限一次,你的牌进入处理区时,若这些牌中存在花色为中央区内:①最多②最少的牌,你摸一张牌.',
						lr_zongyi: '纵意',
						lr_zongyi_info: '你可以将所有手牌(至少一张)当作【酒】使用.依次亮出牌堆顶的等量牌.若中央区内有此牌名的牌,你获得之,否则你弃置之.你使用【酒】后重置<浪形>.',
						lr_langxing: '浪形',
						lr_langxing_info: '出牌阶段限一次,若你处于<醉酒>状态,你可以用任意张手牌交换中央区内等量的牌.若此时中央区所有的牌组不成对子或顺子,你摸一张牌并重置本回合使用牌的次数.',
					},
				};
				for (var i in lrfy.character) {
					lrfy.character[i][4].push(`ext:铝热反应/image/${i}.jpg`);
				}
				lib.config.all.characters.add('lrfy');
				lib.config.characters.add('lrfy');
				lib.translate.lrfy_character_config = `<img src='extension/铝热反应/image/lrfy.png' width='78' height='25'>`;
				return lrfy;
			});
		},
		package: {
			intro: `武将设计:<span style=\'background-image:-webkit-linear-gradient(left,aqua 0%,lime 5%,pink 10%,cyan 15%,deepSkyBlue 20%,mediumSlateBlue 25%,silver 30%,coral 35%,deepPink 40%,greenYellow 45%,wheat 50%,aqua 55%,lime 60%,pink 65%,cyan 70%,deepSkyBlue 75%,mediumSlateBlue 80%,silver 85%,coral 90%,deepPink 95%,greenYellow 100%);  -webkit-background-clip:text; -webkit-text-fill-color:transparent;text-shadow:none;\'>辛涟月,Bauxite_Al,cyc,清茶,秀丽</span><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>`,
			version: '1.0',
		},
	};
});
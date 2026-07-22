import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: '先秦时代',
		content(config, pack) { },
		precontent(Xqin) {
			if (lib.namePrefix) {
				lib.namePrefix.set('先秦', {
					getSpan() {
						const span = document.createElement('span');
						span.innerHTML = '<img style=width:20px src=extension/先秦时代/image/ui/喵喵.png>';
						return span.outerHTML;
					},
				});
			}
			game.import('character', function () {
				var Xqin = {
					name: 'Xqin',
					connect: true,
					characterSort: {},
					character: {
						Xqin_jingke: ['male', 'qun', 4, ['Xqin_tuqiong', 'Xqin_bixian'], []],
						Xqin_linxiangru: ['male', 'qun', 3, ['Xqin_wanbi', 'Xqin_kuiwu'], []],
						Xqin_weiliao: ['male', 'qun', 4, ['Xqin_jiheng', 'Xqin_tongji'], []],
						Xqin_nongyu: ['female', 'qun', 3, ['Xqin_miaoxiao', 'Xqin_zongmeng'], []],
						Xqin_baigui: ['male', 'qun', 3, ['Xqin_toushang', 'Xqin_yingcai'], []],
						Xqin_shudiao: ['male', 'qun', 3, ['Xqin_luandu', 'Xqin_yuchong'], []],
						Xqin_sunwu: ['male', 'qun', 3, ['Xqin_binglve', 'Xqin_mouhui'], []],
						Xqin_duzhi: ['male', 'qun', 3, ['Xqin_fagu', 'Xqin_zubian'], []],
						Xqin_fanli: ['male', 'qun', 3, ['Xqin_qingnang', 'Xqin_cangfeng'], []],
						Xqin_yingshi: ['male', 'qun', 3, ['Xqin_daihuan', 'Xqin_jingdu', 'Xqin_jikui'], []],
						Xqin_sunbin: ['male', 'qun', 3, ['Xqin_cunshen', 'Xqin_xiaoji'], []],
						Xqin_wuqi: ['male', 'qun', 4, ['Xqin_suzheng', 'Xqin_yibo'], []],
						Xqin_chonger: ['male', 'qun', 2, ['Xqin_bishe', 'Xqin_xionggui', 'Xqin_shiqi'], ['hiddenSkill']],
						Xqin_zhuzhiwu: ['male', 'qun', 3, ['Xqin_juzhen', 'Xqin_bianyuan', 'Xqin_shengzhui'], []],
						Xqin_lixin: ['male', 'qun', 4, ['Xqin_dushi', 'Xqin_jieji'], []],
					},
					characterIntro: {
						Xqin_jingke: '荆轲(？-前227年),姜姓,庆氏(古时<荆>、<庆>音近),字次非,也称庆卿、荆卿、庆轲.战国末期卫国人,春秋时期齐国大夫庆封的后代,战国时期刺客.荆轲喜好读书击剑,为人慷慨侠义.后游历到燕国,随之由田光推荐给太子丹.秦国灭赵后,兵锋直指燕国南界,太子丹震惧,决定派荆轲入秦行刺秦王.荆轲献计太子丹,拟以秦国叛将樊於期之头及燕督亢地图进献秦王,相机行刺.太子丹不忍杀樊於期,荆轲只好私见樊於期,告以实情,樊於期为成全荆轲而自刎.前227年,荆轲带燕督亢地图和樊於期首级,前往秦国刺杀秦王.临行前,燕太子丹、高渐离等许多人在易水边为荆轲送行,场面十分悲壮.<风萧萧兮易水寒,壮士一去兮不复还>,这是荆轲在告别时所吟唱的诗句.荆轲与秦舞阳入秦后,秦王在咸阳宫隆重召见了他,在交验樊於期头颅,献督亢(今河北涿县、易县、固安一带)之地图,图穷匕首见,荆轲刺秦王不中,被秦王拔剑击成重伤后为秦侍卫所杀.设计:楚萱',
						Xqin_linxiangru: '战国时期赵国大臣,赵国著名的政治家、外交家.他最重要的有三个事件:完璧归赵、渑池之会与负荆请罪. 蔺相如原为宦者令缪贤的舍人.赵惠文王时,秦昭王写信给赵王,愿以十五个城池换取<和氏璧>.蔺相如奉命带<和氏璧>来到秦国,据理力争,机智周旋,终于完璧归赵.公元前279年,秦王与赵王相会于渑池(今河南渑池西),他随侍赵惠文王,当面斥责强大的秦国,不辱国体,使赵王没有受到屈辱,因其功,任为上卿,居官于廉颇之上.廉颇居功自恃,不服相如,耻居其下,并扬言要羞辱相如.蔺相如为保持将相和睦,不使外敌有隙可乘,始终回避忍让.蔺相如以国家利益为重、善自谦抑的精神感动了廉颇,于是亲自到蔺相如府上负荆请罪,二人成为刎颈之交.设计:通稿',
						Xqin_weiliao: '设计:楚萱',
						Xqin_nongyu: '设计:花俏鬘娇',
						Xqin_baigui: '白圭,战国时期中原(洛阳)人,名丹,字圭.有<商祖>之誉.在魏惠王属下为大臣,善于修筑堤坝,兴修水利.<汉书>中说他是经营贸易发展生产的理论鼻祖.他主张减轻田税,征收产物的二十分之一.提出贸易致富的理论.主张根据丰收歉收的具体情况来实行<人弃我取,人取我与>的方法经商.谷物成熟时,进收粮食;蚕茧出产时收进絮帛,出售粮食.白圭并提出了农业经济循环说,认为农业的一个周期为12年.他亦认为经商要按时机,就像孙子吴起用兵、商鞅行法.一说,水利专家白圭和贸易致富的白圭是两人.设计:通稿',
						Xqin_shudiao: '竖刁(生卒年不详),姜姓,春秋时齐国奸臣,负责掌管内侍及女宫的戒令.齐桓公病危时作乱,最终被埋伏的兵甲击杀.他善于揣摩人的心理,极尽阿谀迎之能事,深得齐桓公的宠爱.设计:通稿',
						Xqin_sunwu: '孙武被尊称为孙子,又称<兵圣><兵家至圣>,有<百世兵家之师><东方兵学的鼻祖>之誉.所著<孙子兵法>,为中国现存最早的兵书.该书阐述了战争制胜的规律、战略原则、临阵战术及军队的后勤保障等,内容丰富,文字精炼,书中强调战争中的主观能动性及应对客观之道,充满辩证法,其基本原则被后人广泛应用于社会、经济各方面,甚至被翻译成英、法、德、日等多国文字,对后世影响深远.设计:蚩尤的喵',
						Xqin_duzhi: '杜挚(生卒年不详),战国时期秦国大臣,曾破魏有功,官拜左司空,同时也是秦国守旧派的代表人物.秦孝公三年(公元前359年),正当秦孝公任用商鞅酝酿变法时,甘龙、杜挚起来反对变法.设计:在等一只喵~&楚萱',
						Xqin_fanli: '范蠡,春秋末年政治家、军事家.字少伯,楚国宛(今河南南阳)人.出身微贱.仕越为大夫,擢上将军.他与文种协助勾践着手重建国家.经过长期准备,逐步为灭吴作好准备.前484年,吴王已杀谋臣伍子胥,勾践欲发兵攻吴,为他劝止.次年,吴王夫差率国精锐北上黄池(今河南封丘西南)与晋国争霸,只留老弱残兵与太子在国看守,他认为是进攻吴国良机,便与勾践率师伐吴,大获全胜.后游齐国.至陶,改名陶朱公,经商致富.晚年放情太湖山水,爱好养鱼.著<计然篇>、<养鱼经>.其言论还见于<国语·越语下>和<史记·货殖列传>等.设计:通稿',
						Xqin_yingshi: '秦景公(？―公元前537年),嬴姓,赵氏,名石,秦桓公之子,春秋时期秦国国君,公元前576年—公元前537年在位.秦景公治理秦国长达39年,将秦国势力不断推向中原.秦景公向士鞅询问晋国的大夫谁会先灭亡,士鞅回答说是栾氏.秦景公派庶长鲍、庶长武率兵救援郑国.为报栎之战战败之仇,前559年,晋悼公派荀偃率领鲁国叔孙豹、齐国崔杼、宋国华阅、仲江、卫国北宫括、郑国公孙虿、曹国、莒国、邾国、滕国、薛国、杞国、郳国攻打秦国,诸侯联军到达泾河后却不肯渡河,叔向会见叔孙豹后,鲁国、莒国先率军渡河.秦景公一方面假意谈判拖延敌军攻势,一方面下令向泾水投毒(一说秦军将领下令投毒)趁联军中毒颓势,突袭退敌.设计:通稿',
						Xqin_sunbin: '孙膑(生卒年不详),字伯灵,华夏族,孙武后裔,齐国阿(今山东阳谷东北)、鄄(今鄄城北)一带人.中国战国时期军事家,唐德宗时位列武成王庙六十四将之一,宋徽宗时位列宋武庙七十二将之一.孙膑早年曾与庞涓同学兵法.庞涓出任魏将后,妒孙膑之才而将其骗至魏,施以膑刑.后得齐国使者帮助潜逃入齐,为田忌门客,助田忌赛马获胜,被荐于齐威王.周显王十六年(公元前353年),齐威王欲任孙膑为将,孙膑以<刑余之人>而辞谢.周显王二十七年,因魏将庞涓率军攻韩,韩向齐求救,孙膑又以军师身份偕将军田朌、田忌、田婴等率军救韩.设计:通稿',
						Xqin_wuqi: '吴起(？－前381年),卫国左氏(今山东省定陶区西)人.中国战国初期军事家、政治家、改革家,兵家代表人物之一.吴起早年学儒术于曾申门下,后弃儒学兵.最初在鲁国时,受命指挥鲁军击败齐国.之后前往魏国,得到魏文侯重用.他指挥魏军屡次击败秦国,占领河西之地,为首任西河郡守,同时改革兵制,创建魏武卒,<与诸侯大战七十六,全胜六十四>.后因魏武侯猜疑而转投楚国,初任宛守,一年后被楚悼王任命为令尹,进行以打击、限制旧贵族势力,加强军队建设的变法.经过大刀阔斧的改革,在短时间内成功增强了楚国国力,使楚国出现<南平百越,北并陈蔡,却三晋,西伐秦>,一度大败魏国,<马饮于大河>的强盛局面.楚悼王二十一年(前381年),楚悼王逝世,吴起因厉行变法而得罪守旧贵族,惨遭杀害.设计:楚萱',
						Xqin_chonger: '晋文公姬重耳(前697年,一说前671年－前628年),姬姓,晋氏,名重耳,是中国春秋时期晋国的第二十二任国君(前636年－前628年在位),晋献公之子,母为狐姬.重耳年少时谦虚好学,善于养士.骊姬之乱时被迫流亡至翟国,后辗转五鹿(卫)、齐、卫、曹、宋、郑、楚、秦等国,在外十九年,备尝艰辛.晋文公元年(前636年),重耳在秦穆公的支持下回晋杀晋怀公而即位为晋君.重耳在位期间任用狐偃、先轸、赵衰、贾佗、魏犨等人,实行通商宽农、明贤良、赏功劳等政策,创三军六卿,使晋国国力大增.对外联合秦国和齐国伐曹攻卫、救宋服郑,平定周室子带之乱,受到周襄王赏赐.晋文公五年(前632年),在城濮之战以少胜多,大败楚军,战后召集齐、宋等国于践土会盟,被周襄王策命为诸侯之伯,成为春秋时代的第二位霸主.同年又会齐、鲁、宋、秦等国君于温.会后,先后伐依附楚的许、郑两国.同时,他还在攘夷的旗号下对付北方戎狄的扩张,继续作<三行>以抵御狄人.晋文公九年(前628年),重耳逝世.设计:通稿',
						Xqin_zhuzhiwu: '烛之武,春秋时期郑国考城人.公元前630年,秦、晋合兵围郑,烛之武只身前往秦营之中,向秦穆公陈说利害,终于使得秦穆公放弃了攻打郑国的打算,并派兵保护郑国,拯救郑国于危难之中.烛之武在说秦伯之前,只是郑国的一个圉正(养马官),有着怀才不遇的愤怨,但在郑国危难之际,挺身而出,只身去说服秦伯,足见其义、勇.民间对他的评价是:<五论救弱国,妙语退秦师.>设计:通稿',
						Xqin_lixin: '李信(生卒年不详),字有成.槐里县(今陕西咸阳兴平市东南南佐村)人.祖父为秦国陇西郡守李崇,父亲为秦国南郡守李瑶.战国末年秦国大将.李信年轻时强壮勇敢.秦王政十九年(前228年),秦国发兵进攻赵国,李信由云中郡(今内蒙古自治区托克托县东北)和太原郡(今山西省太原市西南)出兵,配合大将王翦一举攻灭了赵国.秦王政二十一年(前226年),李信又率兵进攻燕国.攻占了蓟城(今北京城西南)之后,他率领数千兵马追击燕太子丹,直至辽东,迫使燕王喜斩太子丹向秦求和.秦王嬴政派遣李信及蒙武率兵20万去攻打楚国,但被楚军连续追击,兵败而逃.李信攻打楚国失败后,秦王政仍然很信任他,先后派李信与王翦之子王贲率兵攻打燕国、代国和齐国,平定了燕、齐二国,李信因功被封为陇西侯.设计:通稿',
					},
					characterTitle: {
						Xqin_jingke: '雄哀易水',
						Xqin_linxiangru: '不辱使命',
						Xqin_weiliao: '桓桓刚毅',
						Xqin_nongyu: '随音伴君',
						Xqin_baigui: '商祖',
						Xqin_shudiao: '舍身奉宠',
						Xqin_sunwu: '兵家至圣',
						Xqin_duzhi: '守往拒革',
						Xqin_fanli: '散财救国',
						Xqin_yingshi: '明君恶将',
						Xqin_sunbin: '积谋后发',
						Xqin_wuqi: '誓拜卿相',
						Xqin_chonger: '隐而后雄',
						Xqin_zhuzhiwu: '巧论退强',
						Xqin_lixin: '果势壮勇',
					},
					skill: {
						Xqin_tuqiong: {
							audio: '先秦时代/audio/skill:2',
							forced: true,
							zhuanhuanji: true,
							trigger: {
								player: 'useCardEnd',
							},
							filter(event, player) {
								var storage = player.storage['Xqin_tuqiong'];
								if (storage) return true;
								return player.hasCard((card) => lib.filter.cardDiscardable(card, player), 'he');
							},
							content() {
								'step 0';
								var storage = player.storage[event.name];
								if (storage) {
									player
										.chooseToDiscard(get.prompt(event.name) + '', '你可以弃置一张牌', 'he')
										.set('ai', function (card) {
											return 5 - get.value(card);
										})
								} else {
									player.chooseBool(get.prompt(event.name) + '', '你可以摸一张牌').set('ai', function (event, player) {
										return !player.hasSkillTag('nokeep');
									});
								}
								('step 1');
								if (result.bool) {
									var storage = Boolean(player.storage[event.name]);
									player.changeZhuanhuanji(event.name);
									if (!storage) {
										player.draw();
									}
								} else {
									event.finish();
								}
								('step 2');
								if (player.hasCard((card) => !get.is.shownCard(card), 'h')) {
									player
										.chooseCard(
											'图穷:明置一张手牌',
											'h',
											function (card, player) {
												return !get.is.shownCard(card);
											},
											true
										)
										.set('ai', function (card) {
											return 7 - get.value(card);
										});
								} else {
									event.finish();
								}
								('step 3');
								var tag = 'visible_tuqiong';
								if (!lib.translate[tag]) lib.translate[tag] = '明置|图穷';
								player.addShownCards(result.cards, tag);
							},
							mark: true,
							marktext: '☯',
							intro: {
								content(storage) {
									if (storage) return '当你使用一张牌后,你可以弃置一张牌,明置一张手牌';
									return '当你使用一张牌后,你可以摸一张牌,明置一张手牌';
								},
							},
						},
						Xqin_bixian: {
							mod: {
								cardEnabled2(card, player) {
									if (get.itemtype(card) == 'card' && get.position(card, true) == 'h' && get.is.shownCard(card)) return false;
								},
							},
							audio: '先秦时代/audio/skill:2',
							forced: true,
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return player.getCards('h').every((card) => get.is.shownCard(card)) && game.hasPlayer((target) => player.inRange(target));
							},
							content() {
								'step 0';
								player
									.chooseTarget(
										'选择【' + get.translation(event.name) + '】的目标',
										'将所有明置手牌依次当做【杀】对攻击范围内一名其他角色使用',
										function (card, player, target) {
											return player.inRange(target);
										},
										true
									)
									.set('ai', function (target) {
										var player = get.player();
										return player.countCards('h', function (card) {
											if (!get.is.shownCard(card)) return false;
											var sha = { name: 'sha' };
											if (!player.canUse(sha, target)) return 0;
											return get.effect(target, sha, player, player);
										});
									});
								('step 1');
								var target = result.targets[0];
								event.target = target;
								event.cards = player.getCards('h', (card) => get.is.shownCard(card));
								event.loop = 0;
								('step 2');
								if (event.loop < cards.length) {
									var card = cards[event.loop++];
									var sha = { name: 'sha' };
									if (player.canUse(sha, target) && get.owner(card) == player) {
										player.useCard({ name: 'sha' }, [card], target, false);
									}
									event.redo();
								}
							},
						},
						Xqin_wanbi: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: ['useCard', 'respond'],
							},
							forced: true,
							filter(event, player) {
								return _status.currentPhase != player;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt2('Xqin_wanbi'), true).set('ai', function (target) {
									var player = _status.event.player;
									var att = get.attitude(player, target);
									if (att > 0) return att;
									return 0;
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									target.draw();
								}
							},
							mod: {
								canBeDiscarded(card) {
									if (get.position(card) == 'h' || get.type(card) == 'equip') return false;
								},
								canBeGained(card) {
									if (get.position(card) == 'h' || get.type(card) == 'equip') return false;
								},
							},
						},
						Xqin_kuiwu: {
							trigger: {
								global: 'phaseUseEnd',
							},
							logTarget: 'player',
							filter(event, player) {
								return (
									event.player != player &&
									player.canCompare(event.player) &&
									event.player.getHistory('sourceDamage', function (evt) {
										return evt.isPhaseUsing();
									}).length
								);
							},
							content() {
								'step 0';
								player.chooseToCompare(trigger.player);
								('step 1');
								var target = trigger.player;
								if (result.bool) {
									target.damage();
									target.addTempSkill('Xqin_kuiwu_debuff');
									target.storage.Xqin_kuiwu_debuff++;
									target.markSkill('Xqin_kuiwu_debuff');
								} else if (result.tie) {
									target.addTempSkill('Xqin_kuiwu_debuff');
									target.storage.Xqin_kuiwu_debuff++;
									target.markSkill('Xqin_kuiwu_debuff');
								}
							},
							subSkill: {
								debuff: {
									init(player, skill) {
										if (!player.storage[skill]) player.storage[skill] = 0;
									},
									intro: { content: '本回合手牌上限-#' },
									mod: {
										maxHandcard(player, num) {
											return num - player.storage.Xqin_kuiwu_debuff;
										},
									},
								},
							},
						},
						Xqin_jiheng: {
							audio: 'ext:先秦时代/audio/skill:2',
							enable: 'chooseToUse',
							filter(event, player) {
								if (player.isLinked()) return false;
								for (var name of ['sha', 'shan', 'guohe']) {
									if (event.filterCard && event.filterCard({ name: name }, player, event)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var vcards = [];
									for (var name of ['sha', 'shan', 'guohe']) {
										var card = { name: name };
										if (event.filterCard(card, player, event)) vcards.push([get.type(name), '', name]);
									}
									var dialog = ui.create.dialog('机衡', [vcards, 'vcard'], 'hidden');
									dialog.direct = true;
									return dialog;
								},
								backup(links, player) {
									return {
										filterCard: () => false,
										selectCard: -1,
										viewAs: {
											name: links[0][2],
										},
										popname: true,
										precontent() {
											player.link(true);
										},
									};
								},
								prompt(links, player) {
									return '机衡:横置并视为使用一张【' + get.translation(links[0][2]) + '】';
								},
							},
							group: 'Xqin_jiheng_after',
							subSkill: {
								after: {
									trigger: {
										player: 'useCardAfter',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.skill == 'Xqin_jiheng_backup';
									},
									content() {
										'step 0';
										var list = ['sha', 'guohe'];
										list.remove(trigger.card.name);
										if (list.length > 1) {
											player.chooseButton(['你可以将一张黑色牌当作如下牌使用', [list, 'vcard']]).set('ai', (button) => {
												return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
											});
										} else {
											event._result = {
												bool: true,
												links: [[get.type(list[0]), '', list[0]]],
											};
										}
										('step 1');
										if (result.bool) {
											var card = {
												name: result.links[0][2],
												nature: result.links[0][3],
											};
											event.card = card;
											game.broadcastAll(function (card) {
												lib.skill.Xqin_jiheng_backupx.viewAs = card;
											}, card);
											var next = player.chooseToUse();
											next.set('openskilldialog', '将一张黑色牌当做' + get.translation(card) + '使用');
											next.set('norestore', true);
											next.set('addCount', false);
											next.set('_backupevent', 'Xqin_jiheng_backupx');
											next.set('custom', {
												add: {},
												replace: { window() { } },
											});
											next.backup('Xqin_jiheng_backupx');
										} else event.finish();
										('step 2');
										if (result.bool) {
											var list = ['sha', 'shan', 'guohe'];
											list.remove(trigger.card.name);
											list.remove(event.card.name);
											player.addSkill('Xqin_jiheng_effect');
											player.storage.Xqin_jiheng_effect = list;
										}
									},
								},
								backupx: {
									filterCard(card) {
										return get.itemtype(card) == 'card' && get.color(card) == 'black';
									},
									position: 'hes',
									filterTarget(card, player, target) {
										return lib.filter.targetEnabledx(card, player, target) && lib.filter.targetInRange(card, player, target);
									},
									selectCard: 1,
									check(card) {
										var player = _status.event.player;
										return 5 - get.value(card);
									},
									log: false,
									precontent() { },
								},
								effect: {
									trigger: {
										player: 'useCard',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player.storage.Xqin_jiheng_effect.includes(event.card.name);
									},
									content() {
										player.link(false);
										player.removeSkill('Xqin_jiheng_effect');
									},
									mark: true,
									intro: {
										mark(dialog, content, player) {
											return '当你使用' + get.translation(player.storage.Xqin_jiheng_effect) + '时,重置武将牌';
										},
									},
								},
							},
							ai: {
								order(item, player) {
									var player = _status.event.player;
									var event = _status.event;
									if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
										if (
											!player.hasShan() &&
											!game.hasPlayer(function (current) {
												return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
											})
										) {
											return 0;
										}
										return 2.95;
									} else {
										var player = _status.event.player;
										return 3.15;
									}
								},
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag, arg) {
									if (player.isLinked()) return false;
									if (arg != 'use') return false;
								},
								result: {
									player: 1,
								},
							},
						},
						Xqin_tongji: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								global: 'phaseAfter',
							},
							forced: true,
							filter(event, player) {
								return (
									player.getHistory('lose', function (evt) {
										if ((!evt || !evt.cards2.length)) return false;//QQQ
										for (var i of evt.cards2) {
											if (get.color(i) == 'black' && get.type(i) == 'equip') return true;
										}
										return false;
									}).length || player.getHistory('damage').length
								);
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('Xqin_tongji'), 2)
									.set('filterTarget', function (card, player, target) {
										if (ui.selected.targets.length) {
											for (var i of ui.selected.targets[0].getCards('ej')) {
												if (get.color(i) == 'black' && ui.selected.targets[0] != target) {
													if (target.canEquip(i) && get.position(i) == 'e') return true;
													if (target.canAddJudge(i) && get.position(i) == 'j') return true;
												}
											}
											return false;
										} else {
											return target.countCards('ej', function (card) {
												return (
													get.color(card) == 'black' &&
													game.hasPlayer(function (current) {
														return current != target && ((current.canEquip(card) && get.position(card) == 'e') || (current.canAddJudge(card) && get.position(card) == 'j'));
													})
												);
											});
										}
									})
									.set('ai', function (target) {
										var player = _status.event.player,
											att = get.attitude(player, target);
										var sgnatt = get.sgn(att);
										if (ui.selected.targets.length == 0) {
											if (att > 0) {
												if (
													target.countCards('j', function (card) {
														if (get.color(card) != 'black') return false;
														return game.hasPlayer(function (current) {
															return current != target && current.canAddJudge(card) && get.attitude(player, current) < 0;
														});
													})
												)
													return 14;
												if (
													target.countCards('e', function (card) {
														if (get.color(card) != 'black') return false;
														return (
															get.value(card, target) < 0 &&
															game.hasPlayer(function (current) {
																return current != target && get.attitude(player, current) < 0 && current.canEquip(card) && get.effect(target, card, player, player) < 0;
															})
														);
													}) > 0
												)
													return 9;
											} else if (att < 0) {
												if (
													game.hasPlayer(function (current) {
														if (current != target && get.attitude(player, current) > 0) {
															var es = target.getCards('e', 'black');
															for (var i = 0; i < es.length; i++) {
																if (get.value(es[i], target) > 0 && current.canEquip(es[i]) && get.effect(current, es[i], player, player) > get.effect(target, es[i], player, player)) return true;
															}
														}
													})
												) {
													return -att;
												}
											}
											return 0;
										}
										var es = ui.selected.targets[0].getCards('e', 'black');
										var i;
										var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
										for (var i = 0; i < es.length; i++) {
											if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.effect(target, es[i], player, target)) == sgnatt && target.canEquip(es[i])) {
												return Math.abs(att);
											}
										}
										if (
											i == es.length &&
											(!ui.selected.targets[0].countCards('j', function (card) {
												if (get.color(card) != 'black') return false;
												return target.canAddJudge(card);
											}) ||
												att2 <= 0)
										) {
											return 0;
										}
										return -att * att2;
									})
									.set('multitarget', true)
									.set('targetprompt', ['被移走', '移动目标']);
								('step 1');
								if (result.targets?.length) {
									player.line2(result.targets, 'green');
									event.targets = result.targets;
								} else event.finish();
								('step 2');
								('step 3');
								player
									.choosePlayerCard(
										'ej',
										true,
										function (button) {
											var player = _status.event.player;
											var targets0 = _status.event.targets0;
											var targets1 = _status.event.targets1;
											if (get.attitude(player, targets0) > 0 && get.attitude(player, targets1) < 0) {
												if (get.position(button.link) == 'j') return 12;
												if (get.value(button.link, targets0) < 0 && get.effect(targets1, button.link, player, targets1) > 0) return 10;
												return 0;
											} else {
												if (get.position(button.link) == 'j') return -10;
												return get.value(button.link) * get.effect(targets1, button.link, player, targets1);
											}
										},
										targets[0]
									)
									.set('targets0', targets[0])
									.set('targets1', targets[1])
									.set('filterButton', function (button) {
										var targets1 = _status.event.targets1;
										if (get.color(button.link) != 'black') return false;
										if (get.position(button.link) == 'j') {
											return targets1.canAddJudge(button.link);
										} else {
											return targets1.canEquip(button.link);
										}
									});
								('step 4');
								if (result.links?.length) {
									var link = result.links[0];
									if (get.position(link) == 'e') {
										event.targets[1].equip(link);
									} else if (link.viewAs) {
										event.targets[1].addJudge({ name: link.viewAs }, [link]);
									} else {
										event.targets[1].addJudge(link);
									}
									event.targets[0].$give(link, event.targets[1], false);
									game.log(event.targets[0], '的', link, '被移动给了', event.targets[1]);
								}
								('step 5');
								if (event.targets[0].canUse({ name: 'sha' }, player, false)) event.targets[0].useCard({ name: 'sha' }, player, 'noai');
								if (!event.targets[1].isLinked()) event.targets[1].link(true);
							},
						},
						Xqin_miaoxiao: {
							audio: 'ext:先秦时代/audio/skill:2',
							enable: 'chooseToUse',
							usable: 5, //QQQ
							init(player) {
								player.storage.Xqin_miaoxiao = 0;
								lib.skill.Xqin_miaoxiao.Zhuanyun(player);
							},
							Zhuanyun(player) {
								player.storage.Xqin_miaoxiao++;
								if (player.storage.Xqin_miaoxiao > 4) player.storage.Xqin_miaoxiao = 1;
								player.markSkill('Xqin_miaoxiao');
								game.broadcastAll(
									function (player, num) {
										let suit = ['diamond', 'club', 'heart', 'spade'][num - 1];
										if (player.marks.Xqin_miaoxiao) {
											player.marks.Xqin_miaoxiao.firstChild.style.transform += 'rotateY(360deg)';
											player.marks.Xqin_miaoxiao.firstChild.innerHTML = '<span style="color:' + ['rgba(241, 42, 42)', '', 'rgba(241, 42, 42)', ''][num - 1] + '">' + get.translation(suit) + '</span>';
										}
									},
									player,
									player.storage.Xqin_miaoxiao
								);
							},
							filter(event, player) {
								var suit = ['diamond', 'club', 'heart', 'spade'][player.storage.Xqin_miaoxiao - 1];
								if (!player.countCards('he', { suit: suit })) return false;
								for (var i of lib.inpile) {
									var type = get.type(i);
									if ((type == 'basic' || type == 'trick') && event.filterCard && event.filterCard({ name: i }, player, event)) return true;
								}
								return false;
							},
							chooseButton: {
								dialog(event, player) {
									var list = [];
									for (var i = 0; i < lib.inpile.length; i++) {
										var name = lib.inpile[i];
										if (name == 'sha') {
											if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
											for (var j of lib.inpile_nature) {
												if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
											}
										} else if (get.type(name) == 'trick' && event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
										else if (get.type(name) == 'basic' && event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
									}
									return ui.create.dialog('妙萧', [list, 'vcard']);
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
										filterCard(card, player) {
											var suit = ['diamond', 'club', 'heart', 'spade'][player.storage.Xqin_miaoxiao - 1];
											return card.suit == suit;
										},
										selectCard: -1,
										forced: true,
										position: 'he',
										viewAs: { name: links[0][2], nature: links[0][3] },
										precontent() {
											'step 0';
											if (event.result.cards.length != player.storage.Xqin_miaoxiao) event.finish();
											('step 1');
											player
												.chooseTarget(true)
												.set('prompt', '妙萧')
												.set('prompt2', '令一名角色摸' + get.cnNumber(event.result.cards.length) + '张牌')
												.set('ai', function (target) {
													return get.attitude(_status.event.player, target);
												});
											('step 2');
											if (result.targets?.length) {
												result.targets[0].draw(event.result.cards.length);
												lib.skill.Xqin_miaoxiao.Zhuanyun(player);
											}
										},
									};
								},
								prompt(links, player) {
									var suit = ['diamond', 'club', 'heart', 'spade'][player.storage.Xqin_miaoxiao - 1];
									return '将所有' + get.translation(suit) + '牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							hiddenCard(player, name) {
								var suit = ['diamond', 'club', 'heart', 'spade'][player.storage.Xqin_miaoxiao - 1];
								if (!player.countCards('he', { suit: suit })) return false;
								if (!lib.inpile.includes(name)) return false;
								var type = get.type(name);
								return type == 'basic' || type == 'trick';
							},
							intro: {
								content(num, player) {
									return '你可以将花色为' + get.translation(['diamond', 'club', 'heart', 'spade'][num - 1]) + '的所有牌当任意基本牌或普通锦囊牌使用';
								},
							},
							ai: {
								fireAttack: true,
								respondSha: true,
								respondShan: true,
								skillTagFilter(player) {
									var suit = ['diamond', 'club', 'heart', 'spade'][player.storage.Xqin_miaoxiao - 1];
									if (!player.countCards('he', { suit: suit })) return false;
								},
								order: 3,
								result: {
									player(player) {
										if (_status.event.dying) return get.attitude(player, _status.event.dying);
										return 1;
									},
								},
							},
						},
						Xqin_zongmeng: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								var suits = [],
									cards = [];
								game.getGlobalHistory('cardMove', function (evt) {
									if (evt.name == 'lose') {
										if (evt.position == ui.discardPile) {
											for (var i of evt.cards) {
												if (get.position(i, true) == 'd') cards.add(i);
											}
										}
									} else {
										if (evt.name == 'cardsDiscard') {
											for (var i of evt.cards) {
												if (get.position(i, true) == 'd') cards.add(i);
											}
										}
									}
								});
								var map = {},
									max = -Infinity;
								for (var card of cards) {
									var suit = card.suit;
									if (!map[suit]) map[suit] = 0;
									map[suit]++;
									if (map[suit] > max) max = map[suit];
								}
								for (var i in map) {
									if (map[i] == max) suits.push(i);
								}
								var suit = ['diamond', 'club', 'heart', 'spade'][player.storage.Xqin_miaoxiao - 1];
								return suits.includes(suit);
							},
							forced: true,
							content() {
								player.chooseToGuanxing(player.storage.Xqin_miaoxiao);
							},
						},
						Xqin_toushang: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'loseAfter',
								global: 'loseAsyncAfter',
							},
							forced: true,
							filter(event, player) {
								if (event.type != 'discard') return false;
								var evt = event.getl(player);
								for (var i = 0; i < evt.cards2.length; i++) {
									if (get.position(evt.cards2[i], true) == 'd' && ['basic', 'trick'].includes(get.type(evt.cards2[i]))) return true;
								}
								return false;
							},
							content() {
								var cards = [];
								var evt = trigger.getl(player);
								for (var i = 0; i < evt.cards2.length; i++) {
									if (get.position(evt.cards2[i], true) == 'd' && ['basic', 'trick'].includes(get.type(evt.cards2[i]))) {
										cards.push(evt.cards2[i]);
									}
								}
								player.addToExpansion(cards, 'gain2').gaintag.add('Xqin_toushang');
							},
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							marktext: '财',
						},
						Xqin_yingcai: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: ['useCard2', 'respond'],
							},
							forced: true,
							filter(event, player) {
								var cards = player.getExpansions('Xqin_toushang');
								for (var i of cards) {
									if (i.name == event.card.name) return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.chooseCardButton(player.getExpansions('Xqin_toushang'), get.prompt2('Xqin_yingcai')).set('filterButton', function (button) {
									return button.link.name == trigger.card.name;
								});
								('step 1');
								if (result.links?.length) {
									player.discard(result.links[0]);
									player
										.chooseTarget(true)
										.set('prompt', '营财')
										.set('prompt2', '令一名角色摸一张牌')
										.set('ai', function (target) {
											return get.attitude(_status.event.player, target);
										});
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									result.targets[0].draw(1);
								}
							},
						},
						Xqin_luandu: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'loseAfter',
								global: 'loseAsyncAfter',
							},
							forced: true,
							filter(event, player) {
								if (event.type != 'discard') return false;
								var evt = event.getl(player);
								for (var i = 0; i < evt.cards2.length; i++) {
									if (get.position(evt.cards2[i], true) == 'd' && player.hasUseTarget(evt.cards2[i])) return true;
								}
								return false;
							},
							content() {
								'step 0';
								var cards = [];
								var evt = trigger.getl(player);
								for (var i = 0; i < evt.cards2.length; i++) {
									if (get.position(evt.cards2[i], true) == 'd' && player.hasUseTarget(evt.cards2[i])) {
										cards.push(evt.cards2[i]);
									}
								}
								player.chooseButton(['乱牍:是否使用其中一张牌？', cards]).set('ai', (button) => _status.event.player.getUseValue(button.link));
								('step 1');
								if (result.links?.length) {
									var card = result.links[0];
									player.$gain2(card, false);
									player.chooseUseTarget(true, card, false);
								}
							},
						},
						Xqin_yuchong: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'damageAfter',
							},
							forced: true,
							filter(event, player) {
								return event.source && player.countCards('he');
							},
							content() {
								'step 0';
								var list = [];
								var hs = player.getCards('h');
								for (var i of hs) list.add(i.suit);
								player
									.chooseToDiscard('h', get.prompt('Xqin_yuchong'), '弃置任意张花色不同的手牌并令' + get.translation(trigger.source) + '弃置所有相应花色的牌', [1, list.length], function (card, player) {
										if (ui.selected.cards.length) {
											var suit = card.suit;
											for (var i of ui.selected.cards) {
												if (i.suit == suit) return false;
											}
										}
										return true;
									})
									.set('ai', function (card) {
										return 6 - get.value(card);
									})
									.set('complexCard', true);
								('step 1');
								if (result.bool) {
									var suits = [];
									for (var i of result.cards) suits.add(i.suit);
									var hs = trigger.source.getCards('he', function (card) {
										return suits.includes(card.suit);
									});
									event.hs = hs;
									trigger.source.discard(hs);
								} else event.finish();
								('step 2');
								var list = [];
								for (var i of event.hs) list.add(i.suit);
								if (event.hs.length) {
									player
										.chooseCardButton(event.hs, list.length, '鬻宠:你可以获得其中每种花色各一张牌')
										.set('filterButton', function (button) {
											for (var i = 0; i < ui.selected.buttons.length; i++) {
												if (ui.selected.buttons[i].link.suit == button.link.suit) return false;
											}
											return true;
										})
										.set('ai', function (button) {
											return get.value(button.link, _status.event.player);
										});
								} else event.finish();
								('step 3');
								if (result.links?.length) {
									player.gain(result.links, 'log', 'gain2');
								}
							},
						},
						Xqin_binglve: {
							audio: 'ext:先秦时代/audio/skill:2',
							enable: 'phaseUse',
							filter(event, player) {
								var colorx = false,
									hs = player.getCards('he');
								if (hs.length < 2) return false;
								for (var card of hs) {
									if (!lib.filter.cardDiscardable(card, player)) continue;
									var color = get.color(card, player);
									if (color == 'none') continue;
									if (!colorx) colorx = color;
									else if (colorx != color)
										return game.hasPlayer(function (current) {
											return current != player && !player.getStorage('Xqin_binglve_chosen').includes(current);
										});
								}
								return false;
							},
							filterCard(card, player) {
								var color = get.color(card, player);
								if (color == 'none') return false;
								return !ui.selected.cards.length || get.color(ui.selected.cards[0]) != color;
							},
							selectCard: 2,
							complexCard: true,
							check: (card) => 4.5 - get.value(card),
							filterTarget(card, player, target) {
								if (player == target) return true;
								return !player.getStorage('Xqin_binglve_chosen').includes(target);
							},
							content() {
								player.addTempSkill('Xqin_binglve_chosen', 'phaseUseAfter');
								player.markAuto('Xqin_binglve_chosen', [target]);
								target.damage(2);
							},
							subSkill: {
								chosen: {
									charlotte: true,
									intro: {
										content: '本阶段已对$发动过技能',
									},
								},
							},
							ai: {
								order: 8.5,
								result: {
									target: -1,
								},
							},
						},
						Xqin_mouhui: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								global: 'changeHp',
							},
							forced: true,
							filter(event, player) {
								if (event.player == player) return false;
								if (event.player.hp - player.hp == 0) return true;
								else if (event.player.hp - player.hp > 0) return event.player.hp - event.num - player.hp <= 0;
								else return event.player.hp - event.num - player.hp >= 0;
							},
							content() {
								player.draw();
							},
						},
						Xqin_fagu: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								global: 'phaseUseAfter',
							},
							content() {
								'step 0';
								var suits = [];
								game.getGlobalHistory('cardMove', function (evt) {
									if (suits.length >= 4) return;
									if (evt.name == 'lose') {
										if (evt.position == ui.discardPile) {
											for (var i of evt.cards) {
												if (get.position(i, true) == 'd') suits.add(i.suit);
											}
										}
									} else {
										if (evt.name == 'cardsDiscard') {
											for (var i of evt.cards) {
												if (get.position(i, true) == 'd') suits.add(i.suit);
											}
										}
									}
								});
								var cards = get.cards(4);
								game.cardsGotoOrdering(cards);
								player.showCards(cards, '法古');
								var cardsx = [];
								for (var i of cards) {
									if (suits.includes(i.suit)) cardsx.add(i);
								}
								if (cardsx.length) player.gain(cardsx, 'gain2');
								('step 1');
								if (player.countCards('h') - 4 > 0) player.chooseToDiscard(player.countCards('h') - 4, true, '将手牌弃至四张');
							},
						},
						Xqin_zubian: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								global: 'useCardToPlayered',
							},
							filter(event, player) {
								if (!event.isFirstTarget || event.player == player) return false;
								if (event.cards.length != 1) return true;
								for (var i of event.cards) {
									if (i.name != event.card.name) return true;
								}
								return !event.player.hasHistory('lose', function (evt) {
									return evt.getParent('useCard') == event.getParent('useCard') && evt.hs.length;
								});
							},
							check(event, player) {
								return get.attitude(player, event.target) > 0 && get.effect(event.target, event.card, event.player, player) < 0;
							},
							content() {
								'step 0';
								var cards = get.cards();
								event.cards = cards;
								game.cardsGotoOrdering(cards);
								player.showCards(cards, '阻变');
								player
									.chooseToDiscard('he', function (card) {
										return card.suit == cards[0].suit;
									})
									.set('prompt', '阻变')
									.set('prompt2', '弃置一张' + get.translation(cards[0].suit) + '牌并无效' + get.translation(trigger.card))
									.set('ai', function (card) {
										return 7 - get.value(card);
									});
								('step 1');
								if (result.bool) {
									trigger.targets.length = 0;
									trigger.parent.triggeredTargets2.length = 0;
								} else {
									player.loseHp();
									player.gain(event.cards, 'gain2');
								}
							},
						},
						Xqin_qingnang: {
							audio: 'ext:先秦时代/audio/skill:2',
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('he') >= (player.getStat('skill').Xqin_qingnang || 0) + 1 && game.countPlayer() >= (player.getStat('skill').Xqin_qingnang || 0) + 1;
							},
							selectCard() {
								return (_status.event.player.getStat('skill').Xqin_qingnang || 0) + 1;
							},
							filterCard: true,
							position: 'he',
							prompt() {
								return '弃置' + get.cnNumber((_status.event.player.getStat('skill').Xqin_qingnang || 0) + 1) + '张牌并亮出牌堆顶' + get.cnNumber((_status.event.player.getStat('skill').Xqin_qingnang || 0) + 2) + '张牌,分配给' + get.cnNumber((_status.event.player.getStat('skill').Xqin_qingnang || 0) + 1) + '名角色';
							},
							content() {
								'step 0';
								var cards = get.cards(player.getStat('skill').Xqin_qingnang + 1);
								event.cards = cards;
								event.given = [];
								event.given_map = {};
								game.cardsGotoOrdering(cards);
								var dialog = ui.create.dialog('倾囊', cards, true);
								var getName = function (target) {
									if (target._tempTranslate) return target._tempTranslate;
									var name = target.name;
									if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
									return get.translation(name);
								};
								//_status.dieClose.push(dialog);
								event.videoId = lib.status.videoId++;
								dialog.videoId = event.videoId;
								game.addVideo('cardDialog', null, ['倾囊', get.cardsInfo(cards), dialog.videoId]);
								game.broadcast(
									function (cards, id) {
										var dialog = ui.create.dialog('倾囊', cards, true);
										_status.dieClose.push(dialog);
										dialog.videoId = id;
									},
									cards,
									dialog.videoId
								);
								game.log(player, '亮出了', cards);
								('step 1');
								var dialog = get.idDialog(event.videoId);
								var func = function (id) {
									var dialog = get.idDialog(id);
									if (dialog) dialog.content.firstChild.innerHTML = '倾囊:请选择要分配的牌';
								};
								if (player == game.me) func(event.videoId);
								else if (player.isOnline()) player.send(func, event.videoId);
								player
									.chooseButton(event.videoId, 1, true)
									.set('filterButton', function (button) {
										return !event.given.includes(button.link);
									})
									.set('ai', function (button) {
										return get.value(button.link);
									});
								('step 2');
								if (result.links?.length) {
									var card = result.links[0];
									event.card = card;
									player
										.chooseTarget(true, '请选择要分配' + get.translation(card) + '的角色', function (card, player, target) {
											var id = target.playerid;
											if (Object.keys(event.given_map).length == player.getStat('skill').Xqin_qingnang) return event.given_map[id];
											if (Object.keys(event.given_map).length == player.getStat('skill').Xqin_qingnang - 1) {
												if (event.given.length == event.cards.length - 1) return !event.given_map[id];
											}
											if (event.given_map[id] && event.given_map[id].length > 1) return false;
											return true;
										})
										.set('ai', function (target) {
											return get.attitude(_status.event.player, target) > 0;
										});
								}
								('step 3');
								if (result.bool) {
									var getName = function (target) {
										if (target._tempTranslate) return target._tempTranslate;
										var name = target.name;
										if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
										return get.translation(name);
									};
									var id = result.targets[0].playerid,
										map = event.given_map;
									if (!map[id]) map[id] = [];
									map[id].add(event.card);
									if (Array.isArray(event.cards))
										for (var i of event.cards) {
											if (i == event.card) {
												var dialog = get.idDialog(event.videoId);
												dialog.buttons[event.cards.indexOf(i)].querySelector('.info').innerHTML = getName(result.targets[0]);
											}
										}
									event.given.add(event.card);
									if (event.given.length < event.cards.length) event.goto(1);
								}
								('step 4');
								game.broadcastAll('closeDialog', event.videoId);
								var list = [];
								for (var i in event.given_map) {
									var source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
									player.line(source, 'green');
									list.push([source, event.given_map[i]]);
								}
								game.loseAsync({
									gain_list: list,
									giver: player,
									animate: 'draw',
								}).setContent('gaincardMultiple');
							},
							ai: {
								order(item, player) {
									if (
										!player.getStat('skill').Xqin_qingnang ||
										game.countPlayer(function (current) {
											return get.attitude(player, current) > 0;
										}) < player.getStat('skill').Xqin_qingnang
									)
										return 10;
									return 0;
								},
								result: {
									player: 1,
								},
							},
						},
						Xqin_cangfeng: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'loseAfter',
								global: 'loseAsyncAfter',
							},
							forced: true,
							filter(event, player) {
								if (event.type != 'discard') return false;
								var evt = event.getl(player);
								for (var i = 0; i < evt.cards2.length; i++) {
									if (get.position(evt.cards2[i], true) == 'd' && !player.getStorage('Xqin_cangfeng').includes(evt.cards2[i].suit)) return true;
								}
								return false;
							},
							content() {
								var evt = trigger.getl(player);
								for (var i = 0; i < evt.cards2.length; i++) {
									if (get.position(evt.cards2[i], true) == 'd' && !player.getStorage('Xqin_cangfeng').includes(evt.cards2[i].suit)) player.markAuto('Xqin_cangfeng', [evt.cards2[i].suit]);
								}
							},
							group: 'Xqin_cangfeng_effect',
							subSkill: {
								effect: {
									audio: 'Xqin_cangfeng',
									trigger: {
										target: 'useCardToTargeted',
									},
									forced: true,
									filter(event, player) {
										return event.player != player && player.getStorage('Xqin_cangfeng').includes(event.card.suit);
									},
									content() {
										player.unmarkAuto('Xqin_cangfeng', [trigger.card.suit]);
										if (trigger.player.countGainableCards(player, 'he') > 0) player.gainPlayerCard(trigger.player, 'he', true);
									},
								},
							},
							intro: {
								content: '其他角色对你使用$牌时,获得其一张牌',
							},
						},
						Xqin_daihuan: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								target: 'useCardToTargeted',
							},
							forced: true,
							filter(event, player) {
								return event.player != player;
							},
							content() {
								'step 0';
								player
									.chooseToDiscard(get.prompt('Xqin_daihuan'), 'he', function (card) {
										return card.suit == trigger.card.suit;
									})
									.set('prompt2', '是否弃置一张' + get.translation(trigger.card.suit) + '牌以令' + get.translation(trigger.card) + '对你无效？')
									.set('ai', function (card) {
										return 7 - get.value(card);
									})
									('step 1');
								if (result.bool) {
									trigger.excluded.add(player);
								}
							},
						},
						Xqin_jingdu: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'loseAfter',
								global: 'loseAsyncAfter',
							},
							filter(event, player) {
								if (event.type != 'discard') return false;
								var evt = event.getl(player);
								for (var i = 0; i < evt.cards2.length; i++) {
									if (get.position(evt.cards2[i], true) == 'd') return true;
								}
								return false;
							},
							forced: true,
							content() {
								'step 0';
								var cards = [];
								var evt = trigger.getl(player);
								for (var i = 0; i < evt.cards2.length; i++) {
									if (get.position(evt.cards2[i], true) == 'd') {
										cards.push(evt.cards2[i]);
									}
								}
								player.markAuto('Xqin_jingdu', cards);
								game.log(player, '将', cards, '随机洗入牌堆顶前' + 3 * evt.cards2.length + '张牌中并标记为<', '#g泾毒', '>');
								player.$throw(cards.length, 1000);
								while (cards.length) ui.cardPile.insertBefore(cards.pop().fix(), ui.cardPile.childNodes[get.rand(0, 3 * evt.cards2.length - cards.length)]);
								for (var i of player.getStorage('Xqin_jingdu')) if (get.position(i) == 'd') player.unmarkAuto('Xqin_jingdu', i);
							},
							group: 'Xqin_jingdu_mark',
							subSkill: {
								mark: {
									trigger: {
										global: ['gainEnd', 'loseEnd', 'loseAsyncAfter', 'cardsDiscardAfter'],
									},
									logTarget: 'player',
									forced: true,
									charlotte: true,
									forced: true,
									filter(event, player) {
										if (!player.getStorage('Xqin_jingdu')) return false;
										var storage = player.getStorage('Xqin_jingdu');
										if (event.name == 'gain') {
											var cards = event.cards;
											for (var i = 0; i < cards.length; i++) {
												var card = cards[i];
												if (storage.includes(card) && event.player.getCards('h').includes(card)) return true;
											}
											return false;
										} else {
											if (!event.player || !event.player.isIn()) return false;
											if (event.hs || event.es) {
												var cards = [];
												if (event.hs) cards.addArray(event.hs);
												if (event.es) cards.addArray(event.es);
												for (var i = 0; i < cards.length; i++) {
													var card = cards[i];
													if (storage.includes(card)) return true;
												}
											}
											return false;
										}
									},
									content() {
										if (trigger.name == 'gain' && trigger.player != player) {
											trigger.player.addGaintag(player.getStorage('Xqin_jingdu'), 'Xqin_jingdu');
										} else {
											player.unmarkAuto('Xqin_jingdu', trigger.cards);
											if (trigger.hs) player.unmarkAuto('Xqin_jingdu', trigger.hs);
											if (trigger.es) player.unmarkAuto('Xqin_jingdu', trigger.es);
										}
										for (var i of player.getStorage('Xqin_jingdu')) if (get.position(i) == 'd') player.unmarkAuto('Xqin_jingdu', i);
									},
								},
							},
							intro: {
								mark(dialog, content, player) {
									dialog.addAuto(content);
								},
							},
							ai: {
								viewHandcard: true,
								skillTagFilter(player, tag, arg) {
									if (player == arg) return false;
								},
							},
						},
						Xqin_jikui: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter'],
							},
							forced: true,
							firstDo: true,
							filter(event, player) {
								if (!event.player || event.player == player) return false;
								if (event.name == 'cardsDiscard') {
									var evtx = event.parent;
									if (evtx.name != 'orderingDiscard') return false;
									var evtx2 = evtx.relatedEvent || evtx.parent;
									return evtx2.player.hasHistory('lose', function (evtx3) {
										var evtx4 = evtx3.relatedEvent || evtx3.parent;
										if (evtx2 != evtx4) return false;
										for (var i in evtx3.gaintag_map) {
											if (evtx3.gaintag_map[i].includes('Xqin_jingdu')) return true;
										}
									});
								} else if (event.name == 'lose') {
									for (var i in event.gaintag_map) {
										if (event.gaintag_map[i].includes('Xqin_jingdu')) return true;
									}
									return false;
								}
								return event.player.hasHistory('lose', function (evt) {
									if (evt.parent != event) return false;
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].includes('Xqin_jingdu')) return true;
									}
								});
							},
							logTarget: 'player',
							content() {
								'step 0';
								var cards;
								if (trigger.name == 'lose')
									cards = trigger.hs.filter(function (i) {
										return trigger.gaintag_map[i.cardid] && trigger.gaintag_map[i.cardid].includes('Xqin_jingdu');
									});
								else if (trigger.name == 'cardsDiscard') {
									var evtx = trigger.parent;
									var evtx2 = evtx.relatedEvent || evtx.parent;
									var bool = false;
									var history = trigger.player.getHistory('lose', function (evtx3) {
										var evtx4 = evtx3.relatedEvent || evtx3.parent;
										if (evtx2 != evtx4) return false;
										for (var i in evtx3.gaintag_map) {
											if (evtx3.gaintag_map[i].includes('Xqin_jingdu')) return true;
										}
									});
									cards = trigger.cards.filter(function (i) {
										for (var evt of history) {
											if (evt.gaintag_map[i.cardid] && evt.gaintag_map[i.cardid].includes('Xqin_jingdu')) return true;
										}
										return false;
									});
								} else {
									cards = [];
									trigger.player.getHistory('lose', function (evt) {
										if (evt.parent != trigger) return false;
										for (var card of evt.hs) {
											var i = card.cardid;
											if (evt.gaintag_map[i] && evt.gaintag_map[i].includes('Xqin_jingdu')) cards.push(card);
										}
									});
								}
								event.count = cards.length;
								('step 1');
								if (event.count > 0) {
									if (trigger.player.countCards('he')) trigger.player.chooseCard('he', '疾溃:交给' + get.translation(player) + '一张牌或失去1点体力');
									else event._result = { bool: false };
								} else event.finish();
								('step 2');
								if (result.cards?.length) {
									trigger.player.give(result.cards, player);
								} else {
									trigger.player.loseHp();
								}
								event.count--;
								event.goto(1);
							},
						},
						Xqin_cunshen: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'damageBegin4',
							},
							filter(event, player) {
								return event.source && event.source != player && event.card && event.cards.length;
							},
							usable: 1,
							content() {
								trigger.cancel();
								player.addTempSkill('Xqin_cunshen_effect');
								player.addToExpansion(trigger.cards, 'gain2').gaintag.add('Xqin_cunshen_effect');
								player.storage.Xqin_cunshen_effect = trigger.getParent('useCard').player;
							},
							onremove(player, skill) {
								var cards = player.getExpansions('Xqin_cunshen_effect');
								if (cards.length) player.loseToDiscardpile(cards);
								delete player.storage.Xqin_cunshen_effect;
								player.removeSkill('Xqin_cunshen_effect');
							},
							subSkill: {
								effect: {
									intro: {
										markcount(storage, player) {
											return player.getExpansions('Xqin_cunshen_effect').length;
										},
										mark(dialog, storage, player) {
											if (!storage) return;
											dialog.addAuto(player.getExpansions('Xqin_cunshen_effect'));
											dialog.addText(get.translation(storage));
										},
									},
									onremove(player, skill) {
										var cards = player.getExpansions('Xqin_cunshen_effect');
										if (cards.length) player.loseToDiscardpile(cards);
										delete player.storage.Xqin_cunshen_effect;
									},
									trigger: {
										global: 'phaseEnd',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return player.storage.Xqin_cunshen_effect && player.storage.Xqin_cunshen_effect.isIn() && player.getExpansions('Xqin_cunshen_effect').length;
									},
									content() {
										for (var card of player.getExpansions('Xqin_cunshen_effect')) {
											var source = player.storage.Xqin_cunshen_effect;
											if (source && source.isIn() && source.canUse(card, player, false)) source.useCard(card, player, false);
											else player.loseToDiscardpile(card);
										}
									},
								},
							},
						},
						Xqin_xiaoji: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: ['chooseToUseBegin', 'chooseToRespondBegin'],
							},
							forced: true,
							popup: false,
							lastDo: true,
							hiddenCard(player, name) {
								var suits = [];
								game.filterPlayer(function (current) {
									var history = current.getHistory('useCard').concat(current.getHistory('respond'));
									if (!history.length) return false;
									for (var i of history) {
										if (suits.length >= 4) break;
										suits.add(i.card.suit);
									}
								});
								if (!suits.length) return false;
								for (var i = 0; i < suits.length; i++) {
									var card = ui.cardPile.childNodes[i];
									if (card.name == name) return true;
								}
								return false;
							},
							filter(event, player) {
								var suits = [];
								game.filterPlayer(function (current) {
									var history = current.getHistory('useCard').concat(current.getHistory('respond'));
									if (!history.length) return false;
									for (var i of history) {
										if (suits.length >= 4) break;
										suits.add(i.card.suit);
									}
								});
								if (!suits.length) return false;
								if (!event.position) event.position = 'hs';
								else if (!event.position.includes('s')) event.position += 's';
								if (event.responded || event.skill) return false;
								return true;
							},
							mod: {
								cardEnabled2(card, player) {
									if (_status.event.skill && get.itemtype(card) == 'card' && card.hasGaintag('Xqin_xiaoji')) return false;
								},
							},
							copy(cards) {
								var result = [];
								for (var i of cards) {
									var card = ui.create.card(ui.special);
									card.init([i.suit, i.number, i.name, i.nature]);
									(card.cardid = i.cardid), (card.wunature = i.wunature), (card.storage = i.storage), (card.relatedCard = i);
									card.owner = get.owner(i);
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
								('step 2');
								for (var i of event.cards) {
									i.destroyed = true;
								}
							},
							//mark:true,
							intro: {
								markcount() {
									var suits = [];
									game.filterPlayer(function (current) {
										var history = current.getHistory('useCard').concat(current.getHistory('respond'));
										if (!history.length) return false;
										for (var i of history) {
											if (suits.length >= 4) break;
											suits.add(i.card.suit);
										}
									});
									return suits.length;
								},
								mark(dialog, content, player) {
									if (player != game.me) return get.translation(player) + '观看牌堆中...';
									if (get.itemtype(_status.pileTop) != 'card') return '牌堆顶无牌';
									var cards = [],
										suits = [];
									game.filterPlayer(function (current) {
										var history = current.getHistory('useCard').concat(current.getHistory('respond'));
										if (!history.length) return false;
										for (var i of history) {
											if (suits.length >= 4) break;
											suits.add(i.card.suit);
										}
									});
									var num = Math.min(suits.length, ui.cardPile.childElementCount);
									if (num == 0) return '';
									for (var i = 0; i < num; i++) {
										var card = ui.cardPile.childNodes[i];
										if (card) cards.push(card);
										else break;
									}
									dialog.add(cards);
								},
							},
							content() {
								'step 0';
								var suits = [];
								game.filterPlayer(function (current) {
									var history = current.getHistory('useCard').concat(current.getHistory('respond'));
									if (!history.length) return false;
									for (var i of history) {
										if (suits.length >= 4) break;
										suits.add(i.card.suit);
									}
								});
								var cards = get.cards(suits.length);
								event.cards = lib.skill.Xqin_xiaoji.copy(cards);
								cards.reverse();
								game.cardsGotoPile(cards, 'insert');
								player.directgains(event.cards, null, 'Xqin_xiaoji');
								for (var i of event.cards) {
									player.addGaintag(i, '牌堆顶');
								}
								('step 1');
								var evt = trigger;
								var onresult = false;
								if (evt.onresult) {
									onresult = evt.onresult;
								}
								var next2 = game.createEvent('Xqin_xiaoji_clear', false);
								next2.cards = event.cards;
								next2.player = player;
								next2._trigger = evt;
								next2.setContent(lib.skill.Xqin_xiaoji.contentx);
								event.next.remove(next2);
								evt.after.push(next2);
								evt.onresult = function (result) {
									if (evt.after.includes(next2)) {
										evt.after.remove(next2);
										evt.next.push(next2);
									}
									if (result.cards && result.cards.length && (result.cards[0].hasGaintag('Xqin_xiaoji') || event.cards.includes(result.cards[0]))) {
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
										game.cardsDiscard(result.cards);
									}
									if (onresult) onresult.apply(evt, arguments);
									delete evt.onresult;
								};
							},
							group: 'Xqin_xiaoji_mark',
							subSkill: {
								mark: {
									trigger: {
										global: ['useCard', 'respond', 'phaseAfter'],
									},
									filter(event, player) {
										if (event.name != 'phase') player.markSkill('Xqin_xiaoji');
										else player.unmarkSkill('Xqin_xiaoji');
									},
									content() { },
								},
							},
						},
						Xqin_suzheng: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								global: 'roundStart',
							},
							forced: true,
							content() {
								'step 0';
								if (!player.storage.Xqin_suzheng || !player.storage.Xqin_suzheng.length) player.storage.Xqin_suzheng = ['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'];
								player.chooseButton(['肃整', [player.storage.Xqin_suzheng.filter((i) => !player.hasSkill(i)), 'vcard'], true]).set('ai', () => Math.random());
								('step 1');
								if (result.links?.length) {
									var name = result.links[0][2];
									player.storage.Xqin_suzheng.remove(name);
									for (var i of game.filterPlayer()) i.addTempSkill('Xqin_suzheng_share', { player: ['phaseDiscardAfter', 'phaseAfter'] });
									for (var i of game.filterPlayer()) i.addTempSkill(name, { player: ['phaseDiscardAfter', 'phaseAfter'] });
									player.storage.Xqin_suzheng_zhengsu = name;
									player.popup(name, 'thunder');
								}
							},
							subSkill: {
								share: {
									charlotte: true,
									trigger: {
										player: 'phaseDiscardEnd',
									},
									forced: true,
									popup: false,
									fixed: true,
									content() {
										if (!lib.skill.zhengsu.filter(trigger, player)) {
											game.broadcastAll(function () {
												if (lib.config.background_speak) game.playAudio('skill/Xqin_suzheng');
											});
											player.popup('整肃失败', 'fire');
											game.log(player, '整肃失败');
											player.when('phaseAfter').then(() => {
												game.filterPlayer(function (current) {
													if (current.hasSkill('Xqin_suzheng') && !player.storage[current.storage.Xqin_suzheng_zhengsu]) {
														current.line(player);
														player.damage(current);
													}
												});
											});
											event.finish();
											return;
										}
										game.broadcastAll(function () {
											if (lib.config.background_speak) game.playAudio('skill/Xqin_suzheng');
										});
										player.popup('整肃成功', 'wood');
										game.log(player, '整肃成功');
										if (player.hasSkill('Xqin_yibo')) {
											for (var i of ['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi']) {
												if (player.hasSkill(i) && player.storage[i]) {
													if (!player.storage.Xqin_yibo_achieve) player.storage.Xqin_yibo_achieve = [];
													player.storage.Xqin_yibo_achieve.add(i);
													player.markSkill('Xqin_yibo_achieve');
												}
											}
											if (player.storage.Xqin_yibo_achieve.length >= 3) player.useSkill('Xqin_yibo_achieve');
										}
										player.chooseDrawRecover(2, '整肃奖励:摸两张牌或回复1点体力');
									},
								},
							},
						},
						Xqin_yibo: {
							audio: 'ext:先秦时代/audio/skill:2',
							dutySkill: true,
							group: ['Xqin_yibo_achieve', 'Xqin_yibo_fail', 'Xqin_yibo_use', 'Xqin_yibo_init'],
							derivation: 'Xqin_qiangge',
							subSkill: {
								achieve: {
									audio: 'ext:先秦时代/audio/skill:1',
									init(player) {
										if (!player.storage.Xqin_yibo_achieve) player.storage.Xqin_yibo_achieve = [];
									},
									intro: {
										content(storage, player) {
											var str = '';
											if (player.storage.Xqin_yibo) str += '起始位:' + get.cnNumber(player.storage.Xqin_yibo).replace(/两/g, '二') + '号位<br>';
											if (storage.length) str += '整肃成功:' + get.translation(storage);
											else str += '还没成功整肃过哦';
											return str;
										},
									},
									forced: true,
									content() {
										player.unmarkSkill('Xqin_yibo_achieve');
										game.log(player, '成功完成使命');
										player.awakenSkill('Xqin_yibo');
										player.addSkillLog('Xqin_qiangge');
									},
								},
								fail: {
									audio: 'ext:先秦时代/audio/skill:1',
									forced: true,
									trigger: {
										player: 'dying',
									},
									content() {
										'step 0';
										game.log(player, '使命失败');
										player.awakenSkill('Xqin_yibo');
										('step 1');
										var list = [];
										if (player.countCards('h')) list.add(['h', '手牌区']);
										if (player.countCards('e')) list.add(['e', '装备区']);
										if (player.countCards('j')) list.add(['j', '判定区']);
										if (player.countCards('sx')) list.add(['sx', '武将牌上']);
										if (list.length) {
											player.chooseButton(['毅泊', '是否跳过求桃阶段将任意个区域内的牌当等量的【万箭齐发】使用', [list, 'tdnodes']]);
										} else event.finish();
										('step 2');
										if (result.bool) {
											trigger.skipTao = true;
											var position = '';
											for (var i of result.links) position += i;
											event.position = position;
										} else event.finish();
										('step 3');
										var card = player.getCards('hejsx', function (card) {
											return event.position.includes(get.position(card));
										})[0];
										if (player.hasUseTarget({ name: 'wanjian' }, false)) player.chooseUseTarget('毅泊', '将' + get.translation(card) + '当做【万箭齐发】使用', { name: 'wanjian' }, [card], true).viewAs = true;
										('step 4');
										if (
											player.countCards('hejsx', function (card) {
												return event.position.includes(get.position(card));
											})
										)
											event.goto(3);
									},
								},
								use: {
									trigger: {
										global: 'roundStart',
									},
									forced: true,
									content() {
										if (player.next.countGainableCards(player, 'he') > 0) player.gainPlayerCard(player.next, 'he', true);
										if (!player.storage.Xqin_yibo || player.next.seatNum != player.storage.Xqin_yibo)
											game.broadcastAll(
												function (target1, target2) {
													game.swapSeat(target1, target2);
												},
												player,
												player.next
											);
									},
								},
								init: {
									trigger: {
										global: 'phaseBefore',
										player: 'enterGame',
									},
									filter(event, player) {
										return event.name != 'phase' || game.phaseNumber == 0;
									},
									forced: true,
									charlotte: true,
									content() {
										player.storage.Xqin_yibo = player.seatNum;
										player.markSkill('Xqin_yibo_achieve');
									},
								},
							},
						},
						Xqin_qiangge: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								global: 'dieBefore',
							},
							filter(event, player) {
								return event.player != player && event.parent.name != 'giveup';
							},
							priority: 15,
							logTarget: 'player',
							content() {
								if (_status.Xqin_qiangge_return && _status.Xqin_qiangge_return[player.playerid]) {
									trigger.cancel();
								} else {
									trigger.setContent(lib.skill.Xqin_qiangge.dieContent);
									trigger.includeOut = true;
								}
							},
							dieContent() {
								'step 0';
								event.forceDie = true;
								if (source) {
									game.log(player, '被', source, '杀害');
									if (source.stat[source.stat.length - 1].kill == undefined) {
										source.stat[source.stat.length - 1].kill = 1;
									} else {
										source.stat[source.stat.length - 1].kill++;
									}
								} else {
									game.log(player, '阵亡');
								}
								if (player.isIn() && (!_status.Xqin_qiangge_return || !_status.Xqin_qiangge_return[player.playerid])) {
									event.reserveOut = true;
									game.log(player, '进入了修整状态');
									game.log(player, '移出了游戏');
									player.addSkill('Xqin_qiangge_return');
									if (!_status.Xqin_qiangge_return) _status.Xqin_qiangge_return = {};
									_status.Xqin_qiangge_return[player.playerid] = 1;
								} else event.finish();
								if (!game.countPlayer()) game.over();
								else if (player.hp != 0) {
									player.changeHp(0 - player.hp, false).forceDie = true;
								}
								game.broadcastAll(function (player) {
									if (player.isLinked()) {
										if (get.is.linked2(player)) {
											player.classList.toggle('linked2');
										} else {
											player.classList.toggle('linked');
										}
									}
									if (player.isTurnedOver()) {
										player.classList.toggle('turnedover');
									}
								}, player);
								game.addVideo('link', player, player.isLinked());
								game.addVideo('turnOver', player, player.classList.contains('turnedover'));
								('step 1');
								event.trigger('die');
								('step 2');
								if (event.reserveOut) {
									if (!game.reserveDead) {
										for (var mark in player.marks) {
											if (['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'].includes(mark)) continue;
											player.unmarkSkill(mark);
										}
										var count = 1;
										var list = Array.from(player.node.marks.childNodes);
										if (list.some((i) => ['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'].includes(i.name))) count++;
										while (player.node.marks.childNodes.length > count) {
											var node = player.node.marks.lastChild;
											if (['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'].includes(node.name)) {
												node = node.previousSibling;
											}
											node.remove();
										}
										game.broadcast(
											function (player, count) {
												while (player.node.marks.childNodes.length > count) {
													var node = player.node.marks.lastChild;
													if (['zhengsu_leijin', 'zhengsu_bianzhen', 'zhengsu_mingzhi'].includes(node.name)) {
														node = node.previousSibling;
													}
													node.remove();
												}
											},
											player,
											count
										);
									}
									for (var i in player.tempSkills) {
										player.removeSkill(i);
									}
									var skills = player.getSkills();
									for (var i = 0; i < skills.length; i++) {
										if (lib.skill[skills[i]].temp) {
											player.removeSkill(skills[i]);
										}
									}
									event.cards = player.getCards('hejsx');
									if (event.cards.length) {
										player.discard(event.cards).forceDie = true;
									}
								}
								('step 3');
								if (event.reserveOut) {
									game.broadcastAll(function (player) {
										player.classList.add('out');
									}, player);
								}
								if (source && lib.config.border_style == 'auto' && (lib.config.autoborder_count == 'kill' || lib.config.autoborder_count == 'mix')) {
									switch (source.node.framebg.dataset.auto) {
										case 'gold':
										case 'silver':
											source.node.framebg.dataset.auto = 'gold';
											break;
										case 'bronze':
											source.node.framebg.dataset.auto = 'silver';
											break;
										default:
											source.node.framebg.dataset.auto = lib.config.autoborder_start || 'bronze';
									}
									if (lib.config.autoborder_count == 'kill') {
										source.node.framebg.dataset.decoration = source.node.framebg.dataset.auto;
									} else {
										var dnum = 0;
										for (var j = 0; j < source.stat.length; j++) {
											if (source.stat[j].damage != undefined) dnum += source.stat[j].damage;
										}
										source.node.framebg.dataset.decoration = '';
										switch (source.node.framebg.dataset.auto) {
											case 'bronze':
												if (dnum >= 4) source.node.framebg.dataset.decoration = 'bronze';
												break;
											case 'silver':
												if (dnum >= 8) source.node.framebg.dataset.decoration = 'silver';
												break;
											case 'gold':
												if (dnum >= 12) source.node.framebg.dataset.decoration = 'gold';
												break;
										}
									}
									source.classList.add('topcount');
								}
							},
							subSkill: {
								return: {
									trigger: {
										player: 'phaseBefore',
									},
									forced: true,
									charlotte: true,
									silent: true,
									forceDie: true,
									forceOut: true,
									filter(event, player) {
										return !event._Xqin_qiangge_return && event.player.isOut() && _status.Xqin_qiangge_return[event.player.playerid];
									},
									content() {
										'srep 0';
										trigger._Xqin_qiangge_return = true;
										game.broadcastAll(function (player) {
											player.classList.remove('out');
										}, trigger.player);
										game.log(trigger.player, '移回了游戏');
										delete _status.Xqin_qiangge_return[trigger.player.playerid];
										trigger.player.hp = trigger.player.maxHp;
										player.removeSkill('Xqin_qiangge_return');
										('step 1');
										event.trigger('restEnd');
									},
									popup: false,
									_priority: 1,
								},
							},
						},
						Xqin_bishe: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								global: 'phaseBegin',
							},
							filter(event, player) {
								return event.player != player;
							},
							forced: true,
							content() {
								'step 0';
								if (!player.storage.Xqin_bishe) player.gainMaxHp();
								else if (trigger.player.countGainableCards(player, 'he') > 0) player.gainPlayerCard(trigger.player, 'he', true);
								('step 1');
								lib.skill.Xqin_bishe.yinni(player);
							},
							derivation: ['Xqin_bishe_gai'],
							yinni(player) {
								player.storage.rawHp = player.hp;
								player.storage.rawMaxHp = player.maxHp;
								if (player.skills.length) {
									if (!player.hiddenSkills) {
										player.hiddenSkills = [];
									}
									for (const i of player.skills.slice()) {
										player.removeSkill(i);
										player.hiddenSkills.add(i);
									}
								}
								player.classList.add('unseen');
								player.name = 'unknown';
								player.sex = 'male';
								player.storage.nohp = true;
								player.node.hp.hide();
								player.addSkill('g_hidden_ai');
								player.hp = 1;
								player.maxHp = 1;
								player.update();
							},
						},
						Xqin_xionggui: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'showCharacterAfter',
							},
							forced: true,
							hiddenSkill: true,
							content() {
								if (_status.currentPhase == player) player.recover();
								else if (player.canUse({ name: 'sha' }, _status.currentPhase, false)) player.useCard({ name: 'sha' }, _status.currentPhase);
							},
							_priority: 99,
						},
						Xqin_shiqi: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'showCharacterAfter',
							},
							forced: true,
							juexingji: true,
							filter(event, player) {
								return !game.hasPlayer(function (current) {
									return current != player && current.maxHp >= player.maxHp;
								});
							},
							content() {
								'step 0';
								player.awakenSkill('Xqin_shiqi');
								player.storage.Xqin_bishe = true;
								player.addSkill('Xqin_qiangba');
								('step 1');
								for (var phase of lib.phaseName) {
									var evt = _status.event.getParent(phase);
									if (evt && evt.name == phase) {
										var name = ['准备', '判定', '摸牌', '出牌', '弃牌', '结束'][lib.phaseName.indexOf(phase)];
										if (player != _status.currentPhase) game.log(player, '令', _status.currentPhase, '结束了' + name + '阶段');
										else game.log(player, '结束了' + name + '阶段');
										player.line(_status.currentPhase, 'thunder');
										evt.skipped = true;
									}
								}
								var next = player.phaseUse();
								event.next.remove(next);
								trigger.next.push(next);
							},
							_priority: -1,
						},
						Xqin_qiangba: {
							audio: 'ext:先秦时代/audio/skill:2',
							init(player) {
								player.addSkill('Xqin_qiangba_count');
								if (game.phaseNumber > 0) {
									var hs = player.getCards('h'),
										all = player.getAllHistory(),
										cards = [];
									for (var i = all.length - 1; i >= 0; i--) {
										for (var j of all[i].gain) {
											cards.addArray(j.cards);
										}
										if (all[i].isRound) break;
									}
									cards = cards.filter(function (i) {
										return hs.includes(i);
									});
									if (cards.length) player.addGaintag(cards, 'Xqin_qiangba');
								}
							},
							trigger: {
								player: 'useCard2',
							},
							forced: true,
							filter(event, player) {
								return player.getHistory('lose', function (evt) {
									if (evt.parent != event) return false;
									for (var i in evt.gaintag_map) {
										if (evt.gaintag_map[i].includes('Xqin_qiangba')) return true;
									}
									return false;
								}).length;
							},
							content() { },
							mod: {
								targetInRange(card, player, target) {
									if (!card.cards) return;
									for (var i of card.cards) {
										if (i.hasGaintag('Xqin_qiangba')) return true;
									}
								},
								cardUsable(card, player, target) {
									if (!card.cards) return;
									for (var i of card.cards) {
										if (i.hasGaintag('Xqin_qiangba')) return Infinity;
									}
								},
								aiOrder(player, card, num) {
									if (get.itemtype(card) == 'card' && card.hasGaintag('Xqin_qiangba') && get.type(card) == 'basic') return num - 0.1;
								},
								ignoredHandcard(card, player) {
									if (card.hasGaintag('Xqin_qiangba')) {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && card.hasGaintag('Xqin_qiangba')) {
										return false;
									}
								},
							},
							onremove(player) {
								player.removeSkill('Xqin_qiangba_count');
								player.removeGaintag('zhuosheng');
							},
							subSkill: {
								count: {
									trigger: {
										player: 'gainBegin',
										global: 'roundStart',
									},
									charlotte: true,
									forced: true,
									filter(event, player) {
										if (event.name == 'gain') return true;
										return game.roundNumber > 1;
									},
									content() {
										if (trigger.name == 'gain') trigger.gaintag.add('Xqin_qiangba');
										else player.removeGaintag('Xqin_qiangba');
									},
								},
							},
						},
						Xqin_juzhen: {
							audio: 'ext:先秦时代/audio/skill:2',
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return player.canCompare(target);
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								event.count = Math.min(player.countCards('h'), target.countCards('h'));
								event.cards = [];
								('step 1');
								event.count--;
								player.chooseToCompare(target);
								('step 2');
								if (result.bool) {
									event.cards.add(result.target);
								}
								if (event.count > 0) event.goto(1);
								('step 3');
								if (event.cards.length) player.gain(event.cards, 'gain2');
							},
						},
						Xqin_bianyuan: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: ['chooseToCompareAfter', 'compareMultipleAfter'],
								target: ['chooseToCompareAfter', 'compareMultipleAfter'],
							},
							filter(event, player) {
								if (event.preserve) return false;
								if (player == event.player)
									return (
										event.num1 > event.num2 &&
										(!get.owner(event.card1) ||
											game.hasPlayer(function (current) {
												return !current.hujia;
											}))
									);
								else
									return (
										event.num1 < event.num2 &&
										(!get.owner(event.card2) ||
											game.hasPlayer(function (current) {
												return !current.hujia;
											}))
									);
							},
							forced: true,
							content() {
								'step 0';
								var list = [];
								event.card = player == trigger.player ? trigger.card1 : trigger.card2;
								if (
									game.hasPlayer(function (current) {
										return !current.hujia;
									})
								)
									list.add('选项一');
								if (!get.owner(event.card)) list.add('选项二');
								list.add('cancel2');
								player
									.chooseControl(list)
									.set('choiceList', ['令一名没有护甲的角色获得1点护甲', '令一名其他角色获得' + get.translation(event.card)])
									.set('prompt', get.prompt('Xqin_bianyuan'))
									.set('ai', function () {
										if (
											game.hasPlayer(function (current) {
												return !current.hujia && get.attitude(player, current) > 0;
											})
										)
											return '选项一';
										if (
											game.hasPlayer(function (current) {
												return player != current && get.attitude(player, current) > 0;
											})
										)
											return '选项二';
										return 'cancel2';
									});
								('step 1');
								if (result.control != 'cancel2') {
									event.control = result.control;
									var next = player.chooseTarget();
									next.set('prompt', '辩援');
									if (result.control == '选项一') {
										next.set('prompt2', '令一名没有护甲的角色获得1点护甲或点<取消>重新选择');
										next.set('filterTarget', function (card, player, target) {
											return !target.hujia;
										});
									} else {
										next.set('prompt2', '令一名其他角色获得' + get.translation(event.card) + '或点<取消>重新选择');
										next.set('filterTarget', function (card, player, target) {
											return target != player;
										});
									}
								} else event.finish();
								('step 2');
								if (result.targets?.length) {
									var target = result.targets[0];
									if (event.control == '选项一') target.changeHujia(1);
									else target.gain(event.card, 'gain2');
								} else event.goto(0);
							},
						},
						Xqin_shengzhui: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'dyingAfter',
							},
							forced: true,
							content() {
								'step 0';
								player.draw(2);
								('step 1');
								trigger.player.addTempSkill('diaohulishan', { player: 'phaseBefore' });
							},
						},
						Xqin_dushi: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'phaseDrawBegin2',
							},
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								trigger.num++;
								trigger.Xqin_dushi = true;
							},
							group: 'Xqin_dushi_number',
							subSkill: {
								number: {
									trigger: {
										player: 'phaseDrawAfter',
									},
									forced: true,
									charlotte: true,
									filter(event, player) {
										return event.Xqin_dushi;
									},
									content() {
										if (player.countCards('h') % 2 == 1) player.addTempSkill('Xqin_dushi_1');
										else player.addTempSkill('Xqin_dushi_2');
									},
									_priority: -1,
								},
								1: {
									mark: true,
									marktext: '势',
									intro: {
										markcount: () => '奇',
										name: '度势·奇',
										content: '本回合可以多使用一张【杀】但手牌上限-1',
									},
									charlotte: true,
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + 1;
										},
										maxHandcard(player, num) {
											return num - 1;
										},
									},
								},
								2: {
									mark: true,
									marktext: '势',
									intro: {
										markcount: () => '偶',
										name: '度势·偶',
										content: '本回合使用的第一张【杀】伤害+1',
									},
									charlotte: true,
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										if (event.card.name != 'sha') return false;
										var index = player
											.getHistory('useCard', function (evt) {
												return evt.card.name == 'sha';
											})
											.indexOf(event);
										return index == 0;
									},
									forced: true,
									content() {
										game.log(trigger.card, '伤害+1');
										if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
										trigger.baseDamage++;
									},
								},
							},
						},
						Xqin_jieji: {
							audio: 'ext:先秦时代/audio/skill:2',
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								return event.card.name == 'sha' && event.parent.triggeredTargets3.length == 1;
							},
							forced: true,
							content() {
								'step 0';
								if (trigger.card.suit != 'none') {
									var str = '且不为' + get.translation(trigger.card.suit);
									var num = 3;
								} else {
									var str = '';
									var num = 4;
								}
								player
									.chooseToDiscard(get.prompt('Xqin_jieji'), '你可以弃置任意张花色不同' + str + '的牌,以令' + get.translation(trigger.card) + '需要更多的【闪】抵消', [1, num], function (card) {
										if (card.suit == 'none') return false;
										if (ui.selected.cards.length) {
											for (var i of ui.selected.cards) {
												if (card.suit == i.suit) return false;
											}
										}
										return card.suit != _status.event.suit;
									})
									.set('suit', trigger.card.suit)
									.set('complexCard', true)
									.set('ai', function (card) {
										return 7 - get.value(card);
									});
								('step 1');
								if (result.cards?.length) {
									var num = result.cards.length;
									game.log(trigger.card, '需要额外使用', get.cnNumber(num), '张', '#y【闪】', '来抵消');
									for (var target of trigger.targets) {
										const id = target.playerid;
										const map = trigger.parent.customArgs;
										if (!map[id]) map[id] = {};
										if (typeof map[id].shanRequired == 'number') {
											map[id].shanRequired += num;
										} else {
											map[id].shanRequired = num + 1;
										}
									}
								}
							},
							_priority: 5,
						},
					},
					dynamicTranslate: {
						Xqin_bishe(player) {
							if (player.storage.Xqin_bishe) return '锁定技,其他角色回合开始时,你获得其一张牌,你隐匿.';
							return '锁定技,其他角色回合开始时,你增加1点体力上限,你隐匿.';
						},
					},
					translate: {
						//武将部分
						//_prefix":"先秦",
						Xqin_jingke: '先秦荆轲',
						Xqin_jingke_prefix: '先秦',
						Xqin_linxiangru: '先秦蔺相如',
						Xqin_linxiangru_prefix: '先秦',
						Xqin_weiliao: '先秦尉缭',
						Xqin_weiliao_prefix: '先秦',
						Xqin_nongyu: '先秦弄玉',
						Xqin_nongyu_prefix: '先秦',
						Xqin_baigui: '先秦白圭',
						Xqin_baigui_prefix: '先秦',
						Xqin_shudiao: '先秦竖刁',
						Xqin_shudiao_prefix: '先秦',
						Xqin_sunwu: '先秦孙武',
						Xqin_sunwu_prefix: '先秦',
						Xqin_duzhi: '先秦杜挚',
						Xqin_duzhi_prefix: '先秦',
						Xqin_fanli: '先秦范蠡',
						Xqin_fanli_prefix: '先秦',
						Xqin_yingshi: '先秦嬴石',
						Xqin_yingshi_prefix: '先秦',
						Xqin_sunbin: '先秦孙膑',
						Xqin_sunbin_prefix: '先秦',
						Xqin_wuqi: '先秦吴起',
						Xqin_wuqi_prefix: '先秦',
						Xqin_chonger: '先秦重耳',
						Xqin_chonger_prefix: '先秦',
						Xqin_zhuzhiwu: '先秦烛之武',
						Xqin_zhuzhiwu_prefix: '先秦',
						Xqin_lixin: '先秦李信',
						Xqin_lixin_prefix: '先秦',
						//技能部分
						Xqin_tuqiong: '图穷',
						Xqin_tuqiong_info: '转换技,当你使用一张牌后,你可以①摸一张牌②弃置一张牌.明置一张手牌.',
						Xqin_bixian: '匕见',
						Xqin_bixian_info: '锁定技,你不能使用或打出明置的手牌;结束阶段,若你没有未明置的手牌,你依次将这些牌当作一张【杀】对攻击范围内一名其他角色使用.',
						Xqin_wanbi: '完璧',
						Xqin_wanbi_info: '锁定技,其他角色不能弃置或获得你的手牌或装备牌;你于回合外使用或打出一张牌后,你令一名角色摸一张牌.',
						Xqin_kuiwu: '馈侮',
						Xqin_kuiwu_info: '其他角色出牌阶段结束时,若其本阶段造成过伤害,你可与其拼点,若你赢则你对其造成一点伤害,若其没赢则其本回合手牌上限-1.',
						Xqin_jiheng: '机衡',
						Xqin_jiheng_info: '你可以横置武将牌并视为使用一张【杀】、【闪】或【过河拆桥】,你可以将一张黑色牌当其中另一种牌名使用,若如此做,你下次使用余下牌名的牌时,重置武将牌.',
						Xqin_tongji: '统纪',
						Xqin_tongji_info: '一个回合结束时,若你于此回合失去过黑色装备牌或受到过伤害,你可以移动场上一张黑色牌,因此失去牌的角色视为对你使用一张【杀】,因此置入牌的角色横置武将牌.',
						Xqin_miaoxiao: '妙萧',
						Xqin_miaoxiao_info: '韵律技,你可以将花色为:①♦️️②♣️️③♥️️④♠️️的所有牌当任意基本牌或普通锦囊牌使用.<br>转韵:若转化此牌的牌数等于当前序号值,你令一名角色摸等同于你当前序号值的牌.',
						Xqin_zongmeng: '纵梦',
						Xqin_zongmeng_info: '结束阶段,若本回合进入弃牌堆的牌中牌数最多的花色为<妙萧>对应花色,你可以卜算Ｘ(Ｘ为<妙萧>当前序号值).',
						Xqin_toushang: '投商',
						Xqin_toushang_info: '锁定技,当你的基本牌或普通锦囊牌被弃置时,你将这些牌置于武将牌上,称之为<财>.',
						Xqin_yingcai: '营财',
						Xqin_yingcai_info: '当你使用或打出牌后,你可以弃置一张牌名相同的<财>并令一名角色摸一张牌.',
						Xqin_luandu: '乱牍',
						Xqin_luandu_info: '当你的牌因弃置进入弃牌堆后,你可使用其中一张牌.',
						Xqin_yuchong: '鬻宠',
						Xqin_yuchong_info: '当其他角色对你造成伤害后,你可弃置任意张花色不同的牌,令其弃置所有相应花色的牌,你获得其弃置的牌中每种花色各一张牌.',
						Xqin_binglve: '兵略',
						Xqin_binglve_info: '出牌阶段每名角色限一次,你可弃置两张颜色不同的牌并对一名其他角色造成2点伤害.',
						Xqin_mouhui: '谋晦',
						Xqin_mouhui_info: '锁定技,一名角色体力值变化后,若你与其体力值数量关系发生变化,你摸一张牌.',
						Xqin_fagu: '法古',
						Xqin_fagu_info: '一名角色出牌阶段结束时,你可以亮出牌堆顶四张牌并获得其中中央区含有的花色的牌,你将手牌弃至四张.',
						Xqin_zubian: '阻变',
						Xqin_zubian_info: '当其他角色使用牌指定目标后,若此牌为转化牌或不为其手牌,你可以亮出牌堆顶一张牌并选择:1.弃置一张与亮出牌花色相同的牌并无效此牌;2.失去1点体力并获得亮出牌.',
						Xqin_qingnang: '倾囊',
						Xqin_qingnang_info: '出牌阶段,你可弃置X张牌并亮出牌堆顶X+1张牌将这些牌分配给X名角色.(X为本回合你发动此技能的次数)',
						Xqin_cangfeng: '藏锋',
						Xqin_cangfeng_info: '锁定技,你的牌被弃置后,你记录其中你未记录的花色;其他角色对你使用牌时,若你已记录此花色则取消此花色记录并获得其一张牌.',
						Xqin_daihuan: '怠缓',
						Xqin_daihuan_info: '当你成为其他角色使用牌的目标后,你可以弃置一张与此牌花色相同的牌令此牌对你失效.',
						Xqin_jingdu: '泾毒',
						Xqin_jingdu_info: '当你的牌因弃置进入弃牌堆时,你可以将这些牌随机洗入牌堆顶3X张牌中(X为弃置牌数)并标记为<泾毒>直至进入弃牌堆或你的区域内.',
						Xqin_jikui: '疾溃',
						Xqin_jikui_info: '锁定技,当一张<泾毒>牌离开一名其他角色区域后,其选择:1.交给你一张牌;2.失去1点体力.',
						Xqin_cunshen: '存身',
						Xqin_cunshen_info: '每回合限一次,当其他角色使用伤害牌对你造成伤害时,你可以防止此伤害并将此牌置于其武将牌旁,称为<存身>.若如此做,当前回合结束时,使用者依次对你使用<存身>牌.',
						Xqin_xiaoji: '晓计',
						Xqin_xiaoji_info: '锁定技,牌堆顶X张牌对你可见,且你可以如手牌般使用或打出这些牌.(X为当前回合被使用或打出过的花色数)',
						Xqin_suzheng: '肃整',
						Xqin_suzheng_info: '锁定技,轮次开始时,你选择一项未选择过的整肃(均选择过后重置).每个回合结束时,若当前回合角色的此项整肃失败,你对其造成1点伤害.',
						Xqin_yibo: '毅泊',
						Xqin_yibo_info: '使命技,轮次开始时,你获得下家一张牌并与其交换座次;你不能移动回游戏开始时的座次.<br>成功:你执行成功过所有整肃,你获得<强革>;<br>失败:你进入濒死状态时,你可以不求桃并将你任意个区域的牌当等量的【万箭齐发】使用.',
						Xqin_qiangge: '强革',
						Xqin_qiangge_info: '当一名其他角色死亡时,你可以改为令其休整一轮.',
						Xqin_bishe: '避舍',
						Xqin_bishe_info: '锁定技,其他角色回合开始时,你增加1点体力上限,你隐匿.',
						Xqin_bishe_gai: '避舍·改',
						Xqin_bishe_gai_info: '锁定技,其他角色回合开始时,你获得其一张牌,你隐匿.',
						Xqin_xionggui: '雄归',
						Xqin_xionggui_info: '隐匿技,你登场时,若不为你的回合,你视为对当前回合角色使用一张【杀】;若为你的回合,你回复1点体力.',
						Xqin_shiqi: '势起',
						Xqin_shiqi_info: '觉醒技,当你登场时,若你的体力上限为场上唯一最多,你升级<避舍>并获得<强霸>,你结束此阶段并执行一个出牌阶段.',
						Xqin_qiangba: '强霸',
						Xqin_qiangba_info: '锁定技,你使用于此轮获得的牌无距离和次数限制且这些牌不计入手牌上限.',
						Xqin_juzhen: '据争',
						Xqin_juzhen_info: '出牌阶段限一次,你可与一名角色连续拼点X次(X为当前你与其较少手牌数),你获得其没赢的拼点牌.',
						Xqin_bianyuan: '辩援',
						Xqin_bianyuan_info: '当你拼点后,若你赢,你可选择:1.令一名没有护甲的角色获得1点护甲;2.将你的拼点牌交给一名其他角色.',
						Xqin_shengzhui: '绳縋',
						Xqin_shengzhui_info: '锁定技,当你脱离濒死状态后,你摸两张牌并移出游戏直至你的下回合开始.',
						Xqin_dushi: '度势',
						Xqin_dushi_info: '摸牌阶段你可多摸一张牌,若你的手牌数为奇数则本回合你可多使用一张【杀】且本回合你的手牌上限-1;若为偶数则本回合你使用的第一张【杀】造成的伤害+1.',
						Xqin_jieji: '竭击',
						Xqin_jieji_info: '你使用的【杀】指定目标后,你可弃置任意张花色不同且与此【杀】花色不同的牌令此【杀】须额外使用等量张【闪】抵消.',
					},
				};
				for (var i in Xqin.character) {
					Xqin.character[i][4].push('die:ext:先秦时代/audio/die/' + i + '.mp3');
					Xqin.character[i][4].push('ext:先秦时代/image/character/' + i + '.jpg');
				}
				lib.config.all.characters.add('Xqin');
				lib.config.characters.add('Xqin');
				lib.translate['Xqin_character_config'] = '先秦时代';
				return Xqin;
			});
		},
		package: {
			intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
			author: '通稿、楚萱',
			version: '1.0',
		},
	};
});

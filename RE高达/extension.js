import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
	return {
		name: 'RE高达',
		content(config, pack) {
			lib.rank.rarity.junk.addArray([]);
			lib.rank.rarity.rare.addArray([]);
			lib.rank.rarity.epic.addArray(['regod_zhang_liao', 'regod_yue_jin', 'regod_yu_jin', 'regod_zhang_he', 'regod_xu_huang', 'regod_wen_yang', 'regod_guan_yu', 'regod_zhang_fei', 'regod_ma_chao', 'regod_huang_zhong', 'regod_zhao_yun', 'regod_sun_ce', 'regod_zhou_yu', 'regod_lu_xun', 'regod_lu_su', 'regod_lv_meng', 'regod_zhang_jiao', 'regod_sima_yi']);
			lib.rank.rarity.legend.addArray(['shen_wuxian', 'shen_xiaohei']);
			lib.skill._QcSkill = {
				charlotte: true,
				superCharlotte: true,
				fixed: true,
				silent: true,
				trigger: {
					global: ['gameStart', 'showCharacterAfter'],
				},
				filter(event, player) {
					return lib.config.extension_RE高达_Qc != 'off';
				},
				content() {
					'step 0';
					var target = trigger.player;
					if (event.player.isUnseen() && event.player !== player) {
						target.showCharacter(2);
					} else if (player.isUnseen()) {
						player.showCharacter(2);
					}
					('step 1');
					game.countPlayer(function (current) {
						if (lib.config.extension_RE高达_Qc == 'qt') {
							if (current !== game.me) {
								current.clearSkills();
							}
						} else if (lib.config.extension_RE高达_Qc == 'wj') {
							if (player == game.me) {
								player.clearSkills();
							}
						} else {
							current.clearSkills();
						}
					});
				},
			};
			lib.skill._SztlSkill = {
				charlotte: true,
				superCharlotte: true,
				fixed: true,
				silent: true,
				trigger: {
					global: ['gameStart', 'showCharacterAfter'],
				},
				filter(event, player) {
					return lib.config.extension_RE高达_Sztl != 'off';
				},
				content() {
					'step 0';
					var target = trigger.player;
					if (event.player.isUnseen() && event.player !== player) {
						target.showCharacter(2);
					} else if (player.isUnseen()) {
						player.showCharacter(2);
					}
					('step 1');
					game.countPlayer(function (current) {
						switch (lib.config.extension_RE高达_Sztl) {
							case 'yb':
								current.maxHp = 100;
							case 'yb_r':
								current.hp = 100;
								break;
							case 'es':
								current.maxHp = 20;
							case 'es_r':
								current.hp = 20;
								break;
						}
					});
				},
			};
			lib.skill._ThgdSkill = {
				charlotte: true,
				superCharlotte: true,
				fixed: true,
				silent: true,
				trigger: {
					global: 'roundStart',
				},
				filter(event, player) {
					if (lib.config.extension_RE高达_Thgd == 'off') return false;
					if (lib.config.extension_RE高达_Thgd == 'sy') return true;
					if (lib.config.extension_RE高达_Thgd == 'wj') return player == game.me;
					if (lib.config.extension_RE高达_Thgd == 'qt') return player != game.me;
				},
				content() {
					'step 0';
					var list = get.gainableSkills();
					list.remove(player.getSkills());
					list = list.randomGets(3);
					event.skillai = function () {
						return get.max(list, get.skillRank, 'item');
					};
					if (event.isMine()) {
						var dialog = ui.create.dialog('forcebutton');
						dialog.add('选择获得一项技能');
						var clickItem = function () {
							_status.event._result = this.link;
							dialog.close();
							game.resume();
						};
						for (let i = 0; i < list.length; i++) {
							if (lib.translate[list[i] + '_info']) {
								var translation = get.translation(list[i]);
								if (translation[0] == '新' && translation.length == 3) {
									translation = translation.slice(1, 3);
								} else {
									translation = translation.slice(0, 2);
								}
								var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
								item.firstChild.addEventListener('click', clickItem);
								item.firstChild.link = list[i];
							}
						}
						dialog.add(ui.create.div('.placeholder'));
						event.switchToAuto = function () {
							event._result = event.skillai();
							dialog.close();
							game.resume();
						};
						_status.imchoosing = true;
						game.pause();
					} else {
						event._result = event.skillai();
					}
					('step 1');
					_status.imchoosing = false;
					var link = result;
					player.addSkill(link, true);
					player.popup(link);
					game.log(player, '获得了技能', '【' + get.translation(link) + '】');
				},
			};
		},
		precontent() {
			game.import('character', function () {
				const REGod = {
					name: 'REGod',
					connect: true,
					characterSort: {
						REGod: {
							zhenshiwuxu: ['shen_wuxian', 'shen_xiaohei'],
							wei: ['regod_zhang_liao', 'regod_yue_jin', 'regod_yu_jin', 'regod_zhang_he', 'regod_xu_huang', 'regod_wen_yang'],
							shu: ['regod_guan_yu', 'regod_zhang_fei', 'regod_ma_chao', 'regod_huang_zhong', 'regod_zhao_yun'],
							wu: ['regod_sun_ce', 'regod_zhou_yu', 'regod_lu_xun', 'regod_lu_su', 'regod_lv_meng'],
							qun: ['regod_zhang_jiao'],
							jin: ['regod_sima_yi'],
							shijiancanyu: ['god_zhaoyun_yin', 'god_zhaoyun_jin', 'god_zhangfei', 'god_chendao', 'god_sunce', 'god_fanchou', 'god_xushi', 'god_zhangliao', 'god_guojia', 'god_miheng', 'god_caocao', 'god_liubei', 'god_xuzhu', 'god_menghuo', 'god_lukang', 'god_luxun', 'god_zhugedan', 'god_xusheng', 'god_huaxiong', 'god_mazhong', 'god_huanggai', 'god_guanyu', 'god_zuoci', 'god_yuji', 'god_dianwei', 'god_zhangxiu', 'god_wangyue', 'god_simayi', 'god_zhangliang', 'god_liuqi', 'god_yujin', 'god_dingfeng', 'god_lvmeng', 'god_ganning', 'god_machao', 'god_sunquan', 'god_zhangjiao', 'god_zhugeliang', 'god_yuejin'],
							shijianxianwai: ['god_zhaoyun_baijin', 'god_zhaoyun_xuancai', 'god_qianhuanxianren', 'god_shenyaganning', 'god_huangjindaobing'],
						},
					},
					character: {
						shen_wuxian: {
							group: 'shen',
							skills: ['jinglian', 'ronghe'],
							isZhugong: true,
						},
						shen_xiaohei: {
							hp: 3,
							maxHp: 3,
							group: 'shen',
							skills: ['yinni', 'fenmo'],
							isZhugong: true,
						},
						regod_zhang_liao: {
							group: 'wei',
							skills: ['regod_zhang_liao0', 'regod_mokuai'],
						},
						regod_yue_jin: {
							group: 'wei',
							skills: ['regod_yue_jin0', 'regod_mokuai'],
						},
						regod_yu_jin: {
							group: 'wei',
							skills: ['regod_yu_jin0', 'regod_mokuai'],
						},
						regod_zhang_he: {
							group: 'wei',
							skills: ['regod_zhang_he0', 'regod_mokuai'],
						},
						regod_xu_huang: {
							group: 'wei',
							skills: ['regod_xu_huang0', 'regod_mokuai'],
						},
						regod_wen_yang: {
							group: 'wei',
							skills: ['regod_wen_yang0', 'regod_mokuai'],
						},
						regod_guan_yu: {
							group: 'shu',
							skills: ['regod_guan_yu0', 'regod_mokuai'],
						},
						regod_zhang_fei: {
							hp: 8,
							maxHp: 8,
							group: 'shu',
							skills: ['regod_zhang_fei0', 'regod_mokuai'],
						},
						regod_ma_chao: {
							group: 'shu',
							skills: ['regod_ma_chao0', 'regod_mokuai'],
						},
						regod_huang_zhong: {
							group: 'shu',
							skills: ['regod_huang_zhong0', 'regod_mokuai'],
						},
						regod_zhao_yun: {
							group: 'shu',
							skills: ['regod_zhao_yun0', 'regod_mokuai'],
						},
						regod_sun_ce: {
							hp: 5,
							maxHp: 5,
							group: 'wu',
							skills: ['regod_sun_ce0', 'regod_mokuai'],
						},
						regod_zhou_yu: {
							hp: 3,
							maxHp: 3,
							group: 'wu',
							skills: ['regod_zhou_yu0', 'regod_mokuai'],
						},
						regod_lu_xun: {
							hp: 3,
							maxHp: 3,
							group: 'wu',
							skills: ['regod_lu_xun0', 'regod_mokuai'],
						},
						regod_lu_su: {
							hp: 3,
							maxHp: 3,
							group: 'wu',
							skills: ['regod_lu_su0', 'regod_mokuai'],
						},
						regod_lv_meng: {
							hp: 3,
							maxHp: 3,
							group: 'wu',
							skills: ['regod_lv_meng0', 'regod_mokuai'],
						},
						regod_zhang_jiao: {
							hp: 3,
							maxHp: 3,
							group: 'qun',
							skills: ['regod_zhang_jiao0', 'regod_mokuai'],
						},
						regod_sima_yi: {
							hp: 3,
							maxHp: 3,
							group: 'jin',
							skills: ['regod_sima_yi0', 'regod_mokuai'],
						},
						god_zhaoyun_jin: {
							hp: 1,
							maxHp: 1,
							group: 'shu',
							skills: ['god_longhun', 'god_zhaoyun_jin_juejing'],
						},
						god_zhaoyun_yin: {
							hp: 2,
							maxHp: 2,
							hujia: 2,
							group: 'shu',
							skills: ['god_longhun', 'god_zhaoyun_yin_chongzhen', 'god_zhaoyun_yin_yajiao'],
						},
						god_zhangfei: {
							group: 'shu',
							skills: ['god_zhangfei_paoxiao', 'god_zhangfei_nuzheng'],
						},
						god_chendao: {
							hujia: 5,
							group: 'shu',
							skills: ['god_chendao_wanglie', 'god_chendao_baier'],
						},
						god_sunce: {
							group: 'wu',
							skills: ['god_sunce_jiang', 'god_sunce_liequ'],
						},
						god_fanchou: {
							hp: 5,
							maxHp: 5,
							group: 'qun',
							skills: ['god_fanchou_xingluan', 'god_fanchou_yangwu'],
						},
						god_zhangliao: {
							group: 'wei',
							skills: ['god_zhangliao_tuxi', 'god_zhangliao_weifeng'],
						},
						god_guojia: {
							hp: 3,
							maxHp: 3,
							group: 'wei',
							skills: ['god_guojia_tiandu', 'god_guojia_yiji', 'god_guojia_qizuo'],
						},
						god_miheng: {
							hp: 3,
							maxHp: 3,
							group: 'qun',
							skills: ['god_miheng_kuangcai', 'god_miheng_shejian'],
						},
						god_caocao: {
							group: 'wei',
							skills: ['god_caocao_jianxiong'],
						},
						god_liubei: {
							group: 'shu',
							skills: ['god_liubei_zhaolie', 'god_liubei_shichou'],
						},
						god_xuzhu: {
							group: 'wei',
							skills: ['god_xuzhu_luoyi'],
						},
						god_menghuo: {
							hp: 8,
							maxHp: 8,
							group: 'qun',
							skills: ['god_menghuo_manwang', 'god_menghuo_panqin'],
						},
						god_lukang: {
							hp: 3,
							maxHp: 3,
							group: 'wu',
							skills: ['god_lukang_qianjie', 'god_lukang_huairou'],
						},
						god_luxun: {
							hp: 3,
							maxHp: 3,
							group: 'wu',
							skills: ['god_luxun_qianxun', 'god_luxun_lianying', 'god_luxun_zhangcai'],
						},
						god_zhugedan: {
							hp: 5,
							maxHp: 5,
							group: 'wei',
							skills: ['god_zhugedan_gongao', 'god_zhugedan_juyi'],
						},
						god_xusheng: {
							group: 'wu',
							skills: ['god_xusheng_pojun'],
						},
						god_huaxiong: {
							hp: 5,
							maxHp: 5,
							group: 'qun',
							skills: ['god_huaxiong_yaowu', 'god_huaxiong_yangwei'],
						},
						god_mazhong: {
							group: 'shu',
							skills: ['god_mazhong_fuman'],
						},
						god_huanggai: {
							group: 'wu',
							skills: ['god_huanggai_kurou', 'god_huanggai_zhaxiang'],
						},
						god_guanyu: {
							group: 'shu',
							skills: ['god_guanyu_wushen', 'god_guanyu_wuhun'],
						},
						god_zuoci: {
							hp: 3,
							maxHp: 3,
							group: 'qun',
							skills: ['god_zuoci_qianhuan'],
						},
						god_yuji: {
							hp: 3,
							maxHp: 3,
							group: 'qun',
							skills: ['god_yuji_qianhuan'],
						},
						god_dianwei: {
							group: 'wei',
							skills: ['god_dianwei_shuangji'],
						},
						god_zhangxiu: {
							group: 'qun',
							skills: ['god_zhangxiu_huaqiang', 'god_zhangxiu_chaohuang'],
						},
						god_wangyue: {
							group: 'qun',
							skills: ['god_wangyue_yulong', 'god_wangyue_jianming'],
						},
						god_simayi: {
							hp: 3,
							maxHp: 3,
							group: 'wei',
							skills: ['god_simayi_yinren'],
						},
						god_zhangliang: {
							group: 'qun',
							skills: ['god_zhangliang_jijun', 'god_zhangliang_fangtong'],
						},
						god_liuqi: {
							group: 'qun',
							skills: ['god_liuqi_wenji', 'god_liuqi_tunjiang'],
						},
						god_yujin: {
							group: 'wei',
							skills: ['god_yujin_zhenjun', 'god_yujin_jieyue', 'god_yujin_yizhong'],
						},
						god_dingfeng: {
							group: 'wu',
							skills: ['god_dingfeng_duanbing', 'god_dingfeng_fenxun', 'god_dingfeng_bozhan'],
						},
						god_lvmeng: {
							group: 'wu',
							skills: ['god_lvmeng_keji', 'god_lvmeng_dujiang'],
						},
						god_ganning: {
							group: 'wu',
							skills: ['god_ganning_qixi', 'god_ganning_fenwei', 'god_ganning_shenya'],
						},
						god_machao: {
							group: 'shu',
							skills: ['god_machao_mashu', 'god_machao_feizhua', 'god_machao_tieji'],
						},
						god_sunquan: {
							group: 'wu',
							skills: ['god_sunquan_shengzhi', 'god_sunquan_quandao', 'god_sunquan_chigang'],
						},
						god_zhangjiao: {
							hp: 3,
							maxHp: 3,
							group: 'qun',
							skills: ['god_zhangjiao_dandao', 'god_zhangjiao_leifa', 'god_zhangjiao_fushui'],
						},
						god_zhugeliang: {
							hp: 3,
							maxHp: 3,
							group: 'shu',
							skills: ['god_zhugeliang_bazhen', 'god_zhugeliang_huoji', 'god_zhugeliang_kanpo', 'god_zhugeliang_cangzhuo'],
						},
						god_yuejin: {
							group: 'wei',
							skills: ['god_yuejin_xiandeng', 'god_yuejin_kejian', 'god_yuejin_kaige'],
						},
						god_zhaoyun_baijin: {
							hp: 3,
							maxHp: 3,
							hujia: 2,
							group: 'shen',
							skills: ['god_zhaoyun_baijin_baijin'],
						},
						god_zhaoyun_xuancai: {
							hp: 7,
							maxHp: 7,
							hujia: 7,
							group: 'shen',
							skills: ['god_zhaoyun_xuancai_xuancai'],
						},
						god_qianhuanxianren: {
							hp: 6,
							maxHp: 6,
							group: 'shen',
							skills: ['god_zuoci_qianhuan', 'god_yuji_qianhuan'],
						},
						god_shenyaganning: {
							hp: 3,
							maxHp: 6,
							group: 'shen',
							skills: ['god_shenyaganning_xiansheng', 'god_shenyaganning_jixiong'],
						},
						god_huangjindaobing: {
							hp: 3,
							maxHp: 3,
							group: 'qun',
							skills: ['god_huangjindaobing_fulu', 'god_huangjindaobing_zhuji'],
						},
					},
					characterTitle: {
						god_zhaoyun_jin: '枪出如龙',
						god_zhaoyun_yin: '白马先锋',
						god_zhangfei: '万夫不当',
						god_chendao: '白毦督',
						god_sunce: '猛锐盖世',
						god_fanchou: '庸生变难',
						god_zhangliao: '掩其无备',
						god_guojia: '不遗余力',
						god_miheng: '狂傲奇人',
						god_caocao: '超世之英杰',
						god_liubei: '至仁至信',
						god_xuzhu: '勇力绝人',
						god_menghuo: '南蛮王',
						god_lukang: '克构者',
						god_luxun: '书生翼才',
						god_zhugedan: '薤露蒿里',
						god_xusheng: '江东的铁壁',
						god_huaxiong: '铁壁钢躯',
						god_mazhong: '笑合南中',
						god_huanggai: '轻身为国',
						god_guanyu: '炼狱武神',
						god_zuoci: '迷之仙人',
						god_yuji: '神鬼莫测',
						god_dianwei: '一夫当关',
						god_zhangxiu: '破羌将军',
						god_wangyue: '剑名京师',
						god_simayi: '三分一统',
						god_zhangliang: '统阵聚方',
						god_liuqi: '居外而安',
						god_yujin: '弗克其终',
						god_dingfeng: '寸短寸险',
						god_lvmeng: '伺机待发',
						god_ganning: '锦龙覆江',
						god_machao: '神威天将军',
						god_sunquan: '天发神谶',
						god_zhangjiao: '末世的起首',
						god_zhugeliang: '换斗星移',
						god_yuejin: '凯歌高旋',
					},
					characterIntro: {
						god_zhaoyun_jin: '龙战于野,其血玄黄!',
						god_zhaoyun_yin: '潜龙于渊,涉灵愈伤',
						god_zhangfei: '杂鱼们,都去死吧!',
						god_chendao: '白毦,乃西方上兵也!',
						god_sunce: '吾乃江东小霸王,孙伯符!',
						god_fanchou: '大兴兵争,长安当乱',
						god_zhangliao: '哼!没想到吧!',
						god_guojia: '那,就这样吧',
						god_miheng: '尔等竖子,不堪为伍',
						god_caocao: '宁叫我负天下人,休叫天下人负我',
						god_liubei: '龙怒降临,岂是尔等凡人可抗!',
						god_xuzhu: '脱!',
						god_menghuo: '夷汉所服,据南中诸郡,当以蛮王为号',
						god_lukang: '胸怀千万,彰其德,包其柔',
						god_luxun: '谦谦君子,温润如玉',
						god_zhugedan: '定当夷司马氏三族!(隐藏技：对司马氏或晋势力造成成倍伤害)',
						god_xusheng: '犯大吴疆土者,盛必击而破之',
						god_huaxiong: '定要关外诸侯,知我威名!',
						god_mazhong: '恩威并施,蛮夷可为我所用!',
						god_huanggai: '我这把老骨头,不算什么!',
						god_guanyu: '取汝狗头,犹如探囊取物',
						god_zuoci: '仙人之力,昭于世间',
						god_yuji: '如真似幻,扑朔迷离',
						god_dianwei: '铁戟双提八十斤,威风凛凛震乾坤!',
						god_zhangxiu: '看招,百鸟朝凰!',
						god_wangyue: '十八岁的王越单枪匹马潜入贺兰山的羌人牧场.他趁夜色闯入了羌族首领的大帐,斩下其首级,最终毫发无损的归来,一时间名声大振,成为天下游侠的偶像',
						god_simayi: '贪狼有吞天之力,吞你,还不是易如反掌!',
						god_zhangliang: '三十六方,必为大统!',
						god_liuqi: '还望先生不要不识好歹,赶紧交出牌来!希望这位先生,耗子尾汁!',
						god_yujin: '敌人虚张声势,我且将计就计!',
						god_dingfeng: '短兵轻甲,也可取汝性命!',
						god_lvmeng: '只要我活着就能让对面恐惧',
						god_ganning: '奋江东之威!',
						god_sunquan: '位居至尊,掌至高之权',
						god_zhangjiao: '岁在甲子,天下大吉!',
						god_zhugeliang: '此火可助我军大获全胜!',
						god_yuejin: '看我先登城头,立下首功!',
						god_zhaoyun_baijin: '龙战于野,其血玄黄.潜龙于渊,涉灵愈伤',
						god_zhaoyun_xuancai: '龙战于野,其血玄黄.潜龙于渊,涉灵愈伤',
						god_qianhuanxianren: '如真似幻,扑朔迷离.仙人之力,昭于世间',
						god_shenyaganning: '裹甲衔枚,劫营,如入无人之境!',
						god_huangjindaobing: '苍天已死,黄天当立!',
					},
					skill: {
						jinglian: {
							audio: 'ext:RE高达/audio:4',
							charlotte: true,
							superCharlotte: true,
							enable: 'phaseUse',
							filter(event, player) {
								var a = player.countCards('h');
								var b = player.countCards('h', { type: 'equip' });
								return a - b > 1 && (player.getStat('skill').jinglian || 0) < player.hp;
							},
							filterCard(card, player) {
								return get.type(card) !== 'equip';
							},
							selectCard: 2,
							check(card) {
								return 10 - get.value(card);
							},
							content() {
								var numa = Math.random();
								var core = [];
								for (var i in lib.cardPack.REGodcard) {
									core.push(lib.cardPack.REGodcard[i]);
								}
								if (numa < 0.5) {
									player.gain(game.createCard(core.randomGet()));
									player.$draw();
								} else
									player.gain(
										get.cardPile(function (card) {
											return get.type(card, 'equip') == 'equip';
										}),
										'gain2'
									);
							},
							discard: false,
							visible: true,
							loseTo: 'discardPile',
							prompt: '将两张非装备牌精炼为一张装备牌(50%的概率精炼为高达核心)',
							delay: 0.5,
							prepare(cards, player) {
								player.$throw(cards, 1000);
								game.log(player, '将', cards, '精炼');
							},
							ai: {
								order: 10,
								result: {
									player: 1,
								},
							},
						},
						ronghe: {
							audio: 'ext:RE高达/audio:2',
							derivation: ['xinlu', 'jieti'],
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: 'equipEnd',
							},
							juexingji: true,
							filter(event, player) {
								var card = player.getEquip(5);
								if (card) {
									var name = card.name;
									if (name && name.includes('regodcore_') && player == _status.currentPhase) return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.awakenSkill('ronghe');
								game.log('神∞与' + get.translation(player.getEquip(5)) + '融合了!');
								('step 1');
								var REGod = [];
								for (var i in lib.characterPack.REGod) {
									REGod.push(i);
								}
								var regod = [];
								for (let i = 0; i < REGod.length; i++) {
									if (REGod[i].includes('regod_')) {
										regod.push(REGod[i]);
									}
								}
								var core = [];
								for (var i in lib.cardPack.REGodcard) {
									core.push(lib.cardPack.REGodcard[i]);
								}
								var regodcore = {};
								function ArrayToObj(core, regod) {
									for (let i = 0; i < core.length; i++) {
										regodcore[core[i]] = regod[i];
									}
									return regodcore;
								}
								ArrayToObj(core, regod);
								player.reinit(player.name, regodcore[player.getEquip(5).name]);
								player.addToExpansion(player.getEquip(5), 'gain2');
								player.disableEquip(5);
								player.addSkill('jinglian');
								player.addSkill('xinlu');
								player.addSkill('jieti');
							},
						},
						xinlu: {
							audio: 'ext:RE高达/audio:3',
							group: ['xinlu_sha', 'xinlu_juli'],
							charlotte: true,
							superCharlotte: true,
							enable: 'phaseUse',
							init(player) {
								player.storage.xinlu = 0;
							},
							mark: true,
							intro: {
								content(storage, player, skill) {
									var a = player.storage.xinlu;
									if (a < 1) return '已发动0次【心炉】';
									var str = '已发动' + a + '次【心炉】<br>';
									return str;
								},
								markcount(storage, player) {
									var a = player.storage.xinlu;
									if (a < 1) return 0;
									return a;
								},
							},
							precontent() {
								player.storage.xinlu++;
							},
							filter(event, player) {
								return player.countCards('he', { type: 'equip' }) > 0;
							},
							selectCard: 1,
							filterCard: {
								type: 'equip',
							},
							position: 'he',
							discard: false,
							content() {
								game.log('神∞将' + get.translation(cards[0]) + '置于心炉熔炼了!');
								var chat = ['力量!', '涌动的力量!', '我更强了!'].randomGet();
								player.chat(chat);
								if (get.subtype(cards[0]) == 'equip1') {
									player.addMark('xinlu_sha', 1, false);
								}
								if (get.subtype(cards[0]) == 'equip2') {
									player.changeHujia();
								}
								if (get.subtype(cards[0]) == 'equip3') {
									if (player.isHealthy()) {
										player.gainMaxHp();
									} else player.recover();
								}
								if (get.subtype(cards[0]) == 'equip4') {
									player.addMark('xinlu_juli', 1, false);
								}
								if (get.subtype(cards[0]) == 'equip5') {
									var info = get.info(cards[0]);
									if (info.skills) {
										player.addAdditionalSkill('xinlu', info.skills, true);
									}
								}
							},
							subSkill: {
								sha: {
									marktext: '杀',
									mark: true,
									intro: {
										name: '杀',
										content: '使用【杀】的次数+#',
										markcount(storage, player) {
											return player.countMark('xinlu_sha');
										},
									},
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + player.countMark('xinlu_sha');
										},
									},
								},
								juli: {
									mark: true,
									marktext: '距',
									intro: {
										name: '距离',
										content: '计算与其他角色距离-#',
										markcount(storage, player) {
											return player.countMark('xinlu_juli');
										},
									},
									mod: {
										globalFrom(from, to, distance) {
											return distance - from.countMark('xinlu_juli');
										},
									},
								},
							},
							ai: {
								order: 99,
								result: {
									player: 99,
								},
							},
						},
						jieti: {
							audio: 'ext:RE高达/audio:2',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: 'phaseEnd',
							},
							filter(event, player) {
								return game.hasPlayer((current) => player.inRange(current));
							},
							check(event, player) {
								var a = player.storage.xinlu;
								return a >= game.countPlayer();
							},
							async content(event, trigger, player) {
								const targets = game.filterPlayer((current) => player.inRange(current)).sortBySeat();
								const a = player.storage.xinlu;
								const b = targets.length;
								player.line(targets, 'fire');
								for (const target of targets) {
									await target.damage(Math.round(a / b), 'nocard', 'fire');
								}
								player.chat('艺术就是爆炸!');
								game.log('神∞引爆了' + get.translation(player.name));
								player.reinit(player.name, 'shen_wuxian');
								player.removeSkill('xinlu');
								player.removeSkill('jieti');
								await player.chooseToEnable();
								player.removeMark('xinlu_sha', a);
								player.removeMark('xinlu_juli', b);
								player.unmarkSkill('xinlu_sha');
								player.unmarkSkill('xinlu_juli');
								player.restoreSkill('ronghe');
								player.restoreSkill('regod_mokuai');
								player.removeSkill('regod_mokuai');
							},//QQQ
							ai: {
								order: 10,
								result: {
									player(player) {
										if (player.hasUnknown()) return 0;
										return game.countPlayer(function (current) {
											if (current != player && game.hasPlayer((current) => player.inRange(current))) {
												return get.sgn(get.damageEffect(current, player, player));
											}
										});
									},
								},
							},
						},
						yinni: {
							audio: 'ext:RE高达/audio:2',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								global: 'roundStart',
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return get.color(card) == 'black' ? 1 : -1;
								});
								('step 1');
								if (result.bool) {
									player.addTempSkill('yinni_black', 'roundStart');
								} else player.loseHp();
							},
							subSkill: {
								black: {
									mark: 'card',
									marktext: '隐',
									nopup: true,
									intro: {
										name: '隐匿',
										content: '你不能成为其他角色的卡牌的目标',
									},
									mod: {
										targetEnabled(card, player, target) {
											if (player != target) {
												return false;
											}
										},
									},
								},
							},
						},
						fenmo: {
							audio: 'ext:RE高达/audio:2',
							derivation: ['mianju'],
							charlotte: true,
							superCharlotte: true,
							juexingji: true,
							forced: true,
							trigger: {
								player: 'dying',
							},
							content() {
								'step 0';
								player.awakenSkill('fenmo');
								('step 1');
								var REGod = [];
								for (var i in lib.characterPack.REGod) {
									REGod.push(i);
								}
								var regod = [];
								for (let i = 0; i < REGod.length; i++) {
									if (REGod[i].includes('regod_')) {
										regod.push(REGod[i]);
									}
								}
								if (regod.length) {
									var name = regod.randomGet();
									player.chat('在那千万个未来,千万次的粉墨人生,到底何时才能终结我' + get.translation(name) + '的坏未来？');
									game.log(get.translation(name) + '粉墨登场!');
									player.reinit(player.name, name);
									player.recover(1 - player.hp);
								}
								('step 2');
								player.addSkill('mianju');
							},
						},
						mianju: {
							audio: 'ext:RE高达/audio:1',
							derivation: ['fenmo'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							juexingji: true,
							trigger: {
								player: 'recoverEnd',
							},
							filter(event, player) {
								return player.isHealthy();
							},
							content() {
								'step 0';
								player.addSkill('fenmo');
								player.chat('面具之下,都是另一张面具');
								('step 1');
								player.restoreSkill('fenmo');
							},
						},
						regod_mokuai: {
							audio: 'ext:RE高达/audio:1',
							charlotte: true,
							superCharlotte: true,
							limited: true,
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								if (player.name && player.name.includes('regod_')) {
									return true;
								}
								return false;
							},
							content() {
								'step 0';
								player.awakenSkill('regod_mokuai');
								('step 1');
								var REGod = [];
								for (var i in lib.characterPack.REGod) {
									REGod.push(i);
								}
								var regod = [];
								for (let i = 0; i < REGod.length; i++) {
									if (REGod[i].includes('regod_')) {
										regod.push(REGod[i]);
									}
								}
								var entity = ['张辽', '乐进', '于禁', '张郃', '徐晃', '文鸯', '关羽', '张飞', '马超', '黄忠', '赵云', '孙策', '周瑜', '陆逊', '鲁肃', '吕蒙', '张角', '司马懿'];
								var regodentity = {};
								function ArrayToObj(regod, entity) {
									for (let i = 0; i < regod.length; i++) {
										regodentity[regod[i]] = entity[i];
									}
									return regodentity;
								}
								ArrayToObj(regod, entity);
								WuJiang = [];
								for (let i in lib.character) {
									WuJiang.push(i);
								}
								var filteredList = WuJiang.filter((item) => get.translation(item).includes(regodentity[player.name]));
								var skills = [];
								for (var j = 0; j < filteredList.length; j++) {
									var name = filteredList[j];
									var gdmklist = lib.character[name][3];
									var func = function (skill) {
										var info = get.info(skill);
										if (!info || info.hiddenSkill) return false;
										return true;
									};
									for (let i = 0; i < gdmklist.length; i++) {
										if (func(gdmklist[i])) skills.add(gdmklist[i]);
									}
								}
								if (!filteredList.length || !skills.length) {
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
										skills: skills.randomGets(4),
									};
									if (event.dialog) event.dialog.close();
									if (event.control) event.control.close();
								};
								var chooseButton = function (filteredList, skills) {
									var event = _status.event;
									if (!event._result) event._result = {};
									event._result.skills = [];
									var rSkill = event._result.skills;
									var dialog = ui.create.dialog('请选择获得至多四个技能', [filteredList, 'character'], 'hidden');
									event.dialog = dialog;
									var table = document.createElement('div');
									table.classList.add('add-setting');
									table.style.margin = '0';
									table.style.width = '100%';
									table.style.position = 'relative';
									for (let i = 0; i < skills.length; i++) {
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
												if (rSkill.length >= 4) return;
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
									for (let i = 0; i < event.dialog.buttons.length; i++) {
										event.dialog.buttons[i].classList.add('selectable');
									}
									game.pause();
									game.countChoose();
								};
								if (event.isMine()) {
									chooseButton(filteredList, skills);
								} else if (event.isOnline()) {
									event.player.send(chooseButton, filteredList, skills);
									event.player.wait();
									game.pause();
								} else {
									switchToAuto();
								}
								('step 2');
								var map = event.result || result;
								if (map && map.skills && map.skills.length) {
									for (const i of map.skills) player.addSkillLog(i);
								}
							},
						},
						regod_zhang_liao0: {
							audio: 'diaoling',
							round: 1,
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'phaseBefore',
							},
							filter(event, player) {
								return !player.isTurnedOver();
							},
							content() {
								player.phase('nodelay');
								player.chat('先发制人');
							},
						},
						regod_yue_jin0: {
							audio: 'xiaoguo',
							group: ['regod_yue_jin0_buff'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							mark: true,
							marktext: '烈',
							intro: {
								content(storage, player, skill) {
									var a = player.countMark('regod_yue_jin0');
									if (a < 1) return '造成伤害时,可令伤害+0';
									var str = '造成伤害时,可令伤害+' + a + '<br>';
									return str;
								},
								markcount(storage, player) {
									var a = player.countMark('regod_yue_jin0');
									if (a < 1) return 0;
									return a;
								},
							},
							trigger: {
								player: 'loseAfter',
								global: 'loseAsyncAfter',
							},
							filter(event, player) {
								return event.type == 'discard';
							},
							content() {
								player.addMark('regod_yue_jin0');
							},
							subSkill: {
								buff: {
									trigger: {
										source: 'damageBegin',
									},
									filter(event, player) {
										return player.countMark('regod_yue_jin0') > 0;
									},
									check(event, player) {
										return get.attitude(player, event.player) < 0;
									},
									prompt: '是否发动【英烈】',
									prompt2(event, player) {
										return '令此伤害+' + player.countMark('regod_yue_jin0') + '？';
									},
									content() {
										var num = player.countMark('regod_yue_jin0');
										trigger.num += num;
									},
								},
							},
						},
						regod_yu_jin0: {
							audio: 'decadezhenjun',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								global: ['loseAfter', 'loseAsyncAfter'],
							},
							filter(event, player) {
								if (event.type != 'discard') return false;
								if (_status.currentPhase != player) return false;
								return game
									.filterPlayer((p) => p != player)
									.some((p) => {
										var evt = event.getl(p);
										return evt.hs.length || evt.es.length;
									});
							},
							content() {
								var cards = game
									.filterPlayer((p) => p != player)
									.map((p) => {
										var evt = trigger.getl(p);
										return [evt.hs, evt.es];
									})
									.flat(2);
								if (cards.length) {
									player.gain('log', false, cards);
									player.$gain2(cards);
								}
							},
						},
						regod_zhang_he0: {
							audio: 'qiaobian',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: ['phaseEnd'],
							},
							filter(event, player) {
								return player.getHistory('skipped').includes('phaseDraw') || player.getHistory('skipped').includes('phaseUse');
							},
							content() {
								if (player.getHistory('skipped').includes('phaseDraw')) {
									player.draw(game.roundNumber);
								}
								if (player.getHistory('skipped').includes('phaseUse')) {
									trigger.phaseList.splice(trigger.num, 0, 'phaseUse|regod_zhang_he0');
								}
							},
						},
						regod_xu_huang0: {
							audio: 'oljiezi',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								global: ['phaseDrawSkipped', 'phaseDrawCancelled'],
							},
							filter(event, player) {
								return event.player != player && !event.player.hasMark('regod_xu_huang0_mark');
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return card.number;
								});
								('step 1');
								event.point = result.number;
								trigger.player.addMark('regod_xu_huang0_mark', event.point);
								trigger.player.addSkill('regod_xu_huang0_debuff');
							},
							subSkill: {
								mark: {
									marktext: '减',
									intro: {
										name2: '减径',
										content: '跳过#个摸牌阶段',
										markcount(storage, player) {
											return player.countMark('regod_xu_huang0_mark');
										},
									},
								},
								debuff: {
									forced: true,
									trigger: {
										player: 'phaseDrawBefore',
									},
									filter(event, player) {
										return player.countMark('regod_xu_huang0_mark') > 0;
									},
									content() {
										'step 0';
										trigger.cancel();
										('step 1');
										player.removeMark('regod_xu_huang0_mark');
										('step 2');
										if (player.countMark('regod_xu_huang0_mark') < 1) {
											player.unmarkSkill('regod_xu_huang0_mark');
										}
									},
								},
							},
						},
						regod_wen_yang0: {
							audio: 'beishui',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'loseAfter',
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
							},
							filter(event, player) {
								if (event.name == 'gain' && event.player == player) return player.countCards('h') > 7;
								var evt = event.getl(player);
								if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 7) return false;
								var evt = event;
								for (let i = 0; i < 7; i++) {
									evt = evt.getParent('regodcore_wen_yang');
									if (evt.name != 'regodcore_wen_yang') return true;
								}
								return false;
							},
							content() {
								var num = 7 - player.countCards('h');
								if (num > 0) player.draw(num);
								else player.chooseToDiscard('h', true, -num);
							},
						},
						regod_guan_yu0: {
							audio: 'wushen',
							group: ['regod_guan_yu0_sha'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							mark: 'card',
							marktext: '刀',
							nopup: true,
							intro: {
								name: '春秋刀法',
								content: '每轮开始时,你的前三张【杀】的伤害基数改为目标的体力值',
							},
							trigger: {
								global: 'roundStart',
							},
							filter(event, player) {
								return player.countMark('regod_guan_yu0') < 3;
							},
							content() {
								var a = player.countMark('regod_guan_yu0');
								player.addMark('regod_guan_yu0', 3 - a);
							},
							subSkill: {
								sha: {
									forced: true,
									logTarget: 'target',
									trigger: {
										player: 'useCardToTargeted',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && player.countMark('regod_guan_yu0') > 0;
									},
									content() {
										'step 0';
										player.removeMark('regod_guan_yu0', 1);
										('step 1');
										var map = trigger.customArgs;
										var id = trigger.target.playerid;
										if (!map[id]) map[id] = {};
										if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
										map[id].extraDamage += trigger.target.hp - 1;
									},
								},
							},
						},
						regod_zhang_fei0: {
							audio: 'paoxiao_xiahouba',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								return event.player != player;
							},
							content() {
								var a = player.maxHp - player.hp;
								trigger.num += a;
							},
							ai: {
								damageBonus: true,
								threaten: 5,
								result: {
									player(player) {
										var a = player.maxHp - player.hp;
										return a;
									},
									target(player, target) {
										var b = player.hp - player.maxHp;
										return b;
									},
								},
							},
						},
						regod_ma_chao0: {
							audio: 'shouli',
							charlotte: true,
							superCharlotte: true,
							selectCard: 1,
							filterCard(card, player) {
								return card.name != 'sha';
							},
							filter(event, player) {
								var a = player.countCards('h');
								var b = player.countCards('h', 'sha');
								return a - b > 0;
							},
							enable: 'phaseUse',
							content() {
								var card = get.cardPile(function (card) {
									return card.name == 'sha';
								});
								if (card) player.gain(card, 'gain2').gaintag.add('regod_ma_chao0');
							},
							mod: {
								cardUsable(card) {
									if (!card.cards || !card.cards.length) return;
									for (const i of card.cards) {
										if (!i.hasGaintag('regod_ma_chao0')) return;
									}
									return Infinity;
								},
							},
						},
						regod_huang_zhong0: {
							audio: 'liegong',//QQQ
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								if (event.card.name == 'sha' && !game.hasNature(event.card)) return true;
								return false;
							},
							content() {
								'step 0';
								player
									.chooseControl('地', '水', '风', '火')
									.set('prompt', '选择令此【杀】获得的效果')
									.set('ai', function () {
										if (trigger.player.getEquip(2)?.name == 'tengjia') return '火';
										if (trigger.player.getEquip(1)?.name == 'zhuge') return '水';
										return '地';
									});///QQQ
								('step 1');
								if (result.control == '地') {
									trigger.target.addTempSkill('qinggang2');
									trigger.target.storage.qinggang2.add(trigger.card);
									trigger.target.markSkill('qinggang2');
								}
								if (result.control == '水') {
									game.setNature(trigger.card, 'ice');
								}
								if (result.control == '风') {
									game.setNature(trigger.card, 'thunder');
								}
								if (result.control == '火') {
									game.setNature(trigger.card, 'fire');
								}
							},
						},
						regod_zhao_yun0: {
							audio: 'juejing',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							prompt2: '令此牌基数+1～7',
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								var card = event.card;
								return card.name == 'sha' || card.name == 'tao';
							},
							content() {
								var x = Math.random();
								var a = [1, 2].randomGet();
								var b = [3, 4, 5, 6, 7].randomGet();
								if (x < 0.5) trigger.baseDamage += a;
								else trigger.baseDamage += b;
							},
							check(event, player, card) {
								if (event.card.name == 'sha') return get.attitude(player, event.target) <= 0;
								if (event.card.name == 'tao') return true;
							},
						},
						regod_sun_ce0: {
							charlotte: true,
							superCharlotte: true,
							audio: 'jiang',
							position: 'hes',
							enable: 'chooseToUse',
							filterCard: true,
							viewAs: {
								name: 'juedou',
							},
							viewAsFilter(player) {
								return player.countCards('hes') > 0;
							},
							check(card) {
								if (card.name == 'sha') {
									return 0;
								}
							},
							tag: {
								damage: 1,
							},
							prompt: '将任意一张牌当决斗使用',
						},
						regod_zhou_yu0: {
							audio: 'yingzi',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'useCardToPlayered',
								target: 'useCardToTargeted',
							},
							filter(event, player) {
								if (event.name == 'useCardToPlayered') {
									if (event.targets.includes(player)) return false;
									return (
										event.targets.length == 1 &&
										game.hasPlayer(function (current) {
											return current != player && current.countCards('hej') > 0 && current != event.target;
										})
									);
								} else
									return (
										event.player != player &&
										event.targets.length == 1 &&
										game.hasPlayer(function (current) {
											return current != player && current.countCards('hej') > 0 && current != event.player;
										})
									);
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt('regod_zhou_yu0'), '选择另一名其他角色并获得其一张牌', function (card, player, target) {
										return target.countCards('hej') && target != player && !_status.event.targets.includes(target) && target != trigger.player;
									})
									.set('ai', function (target) {
										return 2 - get.attitude(_status.event.player, target);
									})
									.set('targets', trigger.targets);
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									(event.target0 = target), player.gainPlayerCard(true, target, 'hej', 'visibleMove');
								}
							},
						},
						regod_lu_xun0: {
							audio: 'dcruxian',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return get.type(event.card, 'trick') == 'trick';
							},
							content() {
								player.gainMaxHp();
							},
							mod: {
								cardnumber(card) {
									if (get.type(card) == 'trick') return 8;
								},
							},
						},
						regod_lu_su0: {
							audio: 'twkaizeng',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: 'drawEnd',
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('h') < player.countCards('h');
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('regod_lu_su0'), function (card, player, target) {
										return target != player && target.countCards('h') < player.countCards('h');
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										var att = get.attitude(player, target);
										return att;
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									var num = player.countCards('h') - target.countCards('h');
									target.draw(num);
								}
							},
						},
						regod_lv_meng0: {
							audio: 'shelie',
							group: ['regod_lv_meng0_heart', 'regod_lv_meng0_spade'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							subSkill: {
								heart: {
									audio: 'shelie',
									forced: true,
									trigger: {
										player: 'phaseDrawBegin2',
									},
									filter(event, player) {
										var a = player.countCards('h', { suit: 'heart' });
										var b = game.countPlayer();
										return a > b;
									},
									content() {
										var a = player.countCards('h', { suit: 'heart' });
										var b = game.countPlayer();
										var c = a - b;
										trigger.num += c;
									},
								},
								spade: {
									audio: 'shelie',
									forced: true,
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										var d = player.countCards('h', { suit: 'spade' });
										var e = game.countPlayer();
										var card = event.card;
										return card.name == 'sha' && d > e;
									},
									content() {
										var d = player.countCards('h', { suit: 'spade' });
										var e = game.countPlayer();
										var f = d - e;
										trigger.baseDamage += f;
									},
								},
							},
						},
						regod_zhang_jiao0: {
							audio: 'xinguidao',
							charlotte: true,
							superCharlotte: true,
							mod: {
								cardnumber(card) {
									if (card.suit == 'heart' || card.suit == 'diamond' || card.suit == 'spade' || card.suit == 'club') return 9;
								},
								suit(card, suit) {
									if (suit == 'heart') return 'spade';
									if (suit == 'diamond') return 'club';
								},
							},
						},
						regod_sima_yi0: {
							audio: 'xiongzhi',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'damageEnd',
							},
							content() {
								if (!player.hasSkill('regod_sima_yi0_bing')) {
									player.addTempSkill('regod_sima_yi0_bing', { player: 'phaseBefore' });
								} else player.draw();
							},
							subSkill: {
								bing: {
									mod: {
										targetEnabled(card, player, target) {
											if (player != target && get.type(card) == 'basic') return false;
										},
									},
									mark: 'card',
									marktext: '病',
									nopup: true,
									intro: {
										name: '称病',
										content: '其他角色不能对你使用基本牌',
									},
								},
							},
						},
						god_longhun: {
							audio: 'longhun',
							charlotte: true,
							superCharlotte: true,
							enable: ['chooseToUse', 'chooseToRespond'],
							prompt: '将♦️牌当做杀,♥️牌当做桃,♣️牌当做闪,♠️牌当做无懈可击使用或打出',
							viewAs(cards, player) {
								var name = false;
								var nature = null;
								switch (cards[0]?.suit) {
									case 'club':
										name = 'shan';
										break;
									case 'diamond':
										name = 'sha';
										nature = 'fire';
										break;
									case 'spade':
										name = 'wuxie';
										break;
									case 'heart':
										name = 'tao';
										break;
								}//QQQ
								if (name) return { name: name, nature: nature };
								return null;
							},
							check(card) {
								if (ui.selected.cards.length) return 0;
								var player = _status.event.player;
								if (_status.event.type == 'phase') {
									var max = 0;
									var name2;
									var list = ['sha', 'tao'];
									var map = { sha: 'diamond', tao: 'heart' };
									for (let i = 0; i < list.length; i++) {
										var name = list[i];
										if (
											player.countCards('hes', function (card) {
												return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
											}) > 0 &&
											player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
										) {
											var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
											if (temp > max) {
												max = temp;
												name2 = map[name];
											}
										}
									}
									if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
									return 0;
								}
								return 1;
							},
							selectCard: [1, 2],
							complexCard: true,
							position: 'hes',
							filterCard(card, player, event) {
								if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
								event = event || _status.event;
								var filter = event._backup.filterCard;
								var name = card.suit;
								if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
								if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
								if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
								if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
								return false;
							},
							filter(event, player) {
								var filter = event.filterCard;
								if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hes', { suit: 'diamond' })) return true;
								if (filter({ name: 'shan' }, player, event) && player.countCards('hes', { suit: 'club' })) return true;
								if (filter({ name: 'tao' }, player, event) && player.countCards('hes', { suit: 'heart' })) return true;
								if (filter({ name: 'wuxie' }, player, event) && player.countCards('hes', { suit: 'spade' })) return true;
								return false;
							},
							ai: {
								respondSha: true,
								respondShan: true,
								skillTagFilter(player, tag) {
									var name;
									switch (tag) {
										case 'respondSha':
											name = 'diamond';
											break;
										case 'respondShan':
											name = 'club';
											break;
										case 'save':
											name = 'heart';
											break;
									}
									if (!player.countCards('hes', { suit: name })) return false;
								},
								order(item, player) {
									if (player && _status.event.type == 'phase') {
										var max = 0;
										var list = ['sha', 'tao'];
										var map = { sha: 'diamond', tao: 'heart' };
										for (let i = 0; i < list.length; i++) {
											var name = list[i];
											if (
												player.countCards('hes', function (card) {
													return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
												}) > 0 &&
												player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
											) {
												var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
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
								if (name == 'wuxie' && _status.connectMode && player.countCards('hs') > 0) return true;
								if (name == 'wuxie') return player.countCards('hes', { suit: 'spade' }) > 0;
								if (name == 'tao') return player.countCards('hes', { suit: 'heart' }) > 0;
							},
							group: ['god_longhun_num', 'god_longhun_discard'],
							subSkill: {
								num: {
									forced: true,
									popup: false,
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										var evt = event;
										return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'god_longhun' && evt.cards && evt.cards.length == 2;
									},
									content() {
										trigger.baseDamage++;
									},
								},
								discard: {
									forced: true,
									popup: false,
									trigger: {
										player: ['useCardAfter', 'respondAfter'],
									},
									logTarget() {
										return _status.currentPhase;
									},
									autodelay(event) {
										return event.name == 'respond' ? 0.5 : false;
									},
									filter(evt, player) {
										return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'god_longhun' && evt.cards && evt.cards.length == 2 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countDiscardableCards(player, 'he');
									},
									content() {
										player.line(_status.currentPhase, 'green');
										player.discardPlayerCard(_status.currentPhase, 'he', true);
									},
								},
							},
						},
						god_zhaoyun_jin_juejing: {
							audio: 'xinjuejing',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							mod: {
								cardUsable(card, player, num) {
									return Infinity;
								},
								globalFrom(from, to, distance) {
									return distance - Infinity;
								},
							},
							trigger: {
								player: ['loseAfter', 'chooseToRespondBegin', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
							},
							filter(event, player) {
								if (event.name == 'chooseToRespond' && event.responded) return false;
								if (event.name == 'lose' && event.cards.length == 0) return false;
								return true;
							},
							content() {
								if (trigger.name == 'chooseToRespond') {
									trigger.untrigger();
									trigger.responded = true;
									var card2 = get.cardPile(function (card) {
										return trigger.filterCard({ name: card.name }, player);
									});
									if (card2) {
										trigger.result = {
											bool: true,
											card: card2,
										};
									}
								} else {
									if (Array.isArray(trigger.cards))
										for (const i of trigger.cards) {
											var newcard = get.cardPile(function (card) {
												return card.name == i.name && card.name != 'du';
											});
											if (newcard) {
												player.gain(newcard)._triggered = null;
											}
										}
								}
							},
						},
						god_zhaoyun_yin_chongzhen: {
							audio: 'chongzhen',//QQQ
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'loseAfter',
							},
							filter(event, player) {
								return player != _status.currentPhase && event.hs && event.hs.length && ['useCard', 'respond'].includes(event.parent.name);
							},
							content() {
								'step 0';
								player.changeHujia();
								player.draw(player.hujia);
								('step 1');
								player
									.chooseControl('是', '否')
									.set('prompt', '是否对当前回合角色造成一点伤害')
									.set('ai', function () {
										if (get.attitude(player, _status.currentPhase) <= 0) return '是';
										return '否';
									});
								('step 2');
								if (result.control && result.control != '否') {
									var target = _status.currentPhase;
									if (target) {
										player.line(target, 'gray');
										target.damage();
									}
								}
							},
						},
						god_zhaoyun_yin_yajiao: {
							audio: 'reyajiao',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								source: 'damageBegin',
							},
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isAlive() && event.card && event.card.name == 'sha';
							},
							content() {
								var a = player.hujia;
								trigger.num += a;
							},
						},
						god_zhangfei_paoxiao: {
							audio: 'paoxiao',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							mod: {
								cardUsable(card, player, num) {
									if (card.name == 'sha') return Infinity;
								},
							},
							trigger: {
								player: 'useCardToPlayered',
							},
							filter(event, player) {
								if (event.card.name == 'sha') return true;
								return false;
							},
							content() {
								trigger.target.addMark('god_zhangfei_paoxiao_debuff', 1);
								trigger.target.addSkill('god_zhangfei_paoxiao_debuff');
							},
							subSkill: {
								debuff: {
									forced: true,
									mark: 'card',
									marktext: '裂',
									intro: {
										name: '胆裂',
										content: '下一次受到【杀】造成伤害时令伤害值+#',
									},
									trigger: {
										player: 'damageBegin3',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && player.countMark('god_zhangfei_paoxiao_debuff') > 0;
									},
									content() {
										trigger.num += player.countMark('god_zhangfei_paoxiao_debuff');
									},
								},
							},
						},
						god_zhangfei_nuzheng: {
							audio: 'shencai',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								source: 'dieAfter',
							},
							content() {
								'step 0';
								player
									.chooseTarget(function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (get.attitude(player, target) <= 0) {
											return 1;
										}
										return 0;
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									target.judge(function (card) {
										if (card.suit == 'spade') return 1;
										if (card.suit != 'spade') return -1;
									});
								}
								('step 2');
								if (result.suit) {
									if (result.suit == 'spade') {
										event.target.die();
									} else {
										player.draw(game.countPlayer());
									}
								}
							},
						},
						god_chendao_wanglie: {
							audio: 'drlt_wanglie',
							group: ['god_chendao_wanglie_jianglie'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							mod: {
								targetInRange(card, player, target, now) {
									if (game.online) {
										if (!player.countUsed()) return true;
									} else {
										var evt = _status.event.getParent('phaseUse');
										if (
											evt &&
											evt.name == 'phaseUse' &&
											player.getHistory('useCard', function (evt2) {
												return evt2.getParent('phaseUse') == evt;
											}).length == 0
										)
											return true;
									}
								},
							},
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return player.isPhaseUsing() && (event.card.name == 'sha' || get.type(event.card) == 'trick');
							},
							content() {
								trigger.nowuxie = true;
								trigger.directHit.addArray(game.players);
							},
							subSkill: {
								jianglie: {
									logTarget: 'target',
									trigger: {
										player: 'useCardToPlayered',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha' && event.target.countCards('h') > 0;
									},
									check(event, player) {
										return get.attitude(player, event.target) < 0;
									},
									prompt2(event, player) {
										return '弃置' + get.translation(event.target) + '一种颜色的牌';
									},
									content() {
										'step 0';
										trigger.target.showHandcards();
										('step 1');
										var cards = trigger.target.getCards('h');
										var list = [];
										if (Array.isArray(cards))
											for (const i of cards) {
												list.add(get.color(i));
											}
										if (list.length == 1) {
											event._result = { control: list[0] };
										} else {
											list.sort();
											player.chooseControl(list).set('ai', function () {
												var player = _status.event.player;
												if (get.value(player.getCards('he', { color: 'black' })) >= get.value(player.getCards('he', { color: 'red' }))) return 'black';
												return 'red';
											});
										}
										('step 2');
										trigger.target.discard(trigger.target.getCards('heo', { color: result.control }));
									},
								},
							},
						},
						god_chendao_baier: {
							audio: 'drlt_wanglie',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							mod: {
								maxHandcard(player, num) {
									return player.hujia + num;
								},
							},
							trigger: {
								player: 'recoverEnd',
							},
							content() {
								player.changeHujia(5);
							},
						},
						god_sunce_jiang: {
							audio: 'jiang',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								global: 'useCard',
							},
							filter(event, player) {
								return get.color(event.card) == 'red';
							},
							content() {
								player.draw();
							},
						},
						god_sunce_liequ: {
							audio: 'yingba',
							group: ['god_sunce_liequ_die'],
							charlotte: true,
							superCharlotte: true,
							enable: 'phaseUse',
							filter: (event, player) => game.hasPlayer((current) => current != player && current.maxHp > 1),
							filterTarget: (card, player, target) => target != player && target.maxHp > 1,
							check(event, player) {
								return player.maxHp > 1;
							},
							content() {
								'step 0';
								target.loseMaxHp();
								('step 1');
								if (target.isIn()) {
									target.addMark('god_sunce_liequ_mark', 1);
									player.loseMaxHp();
								}
							},
							subSkill: {
								mark: {
									marktext: '裂',
									intro: {
										name: '裂取',
										content: 'mark',
									},
								},
								die: {
									audio: 'yingba',
									forced: true,
									trigger: {
										global: 'die',
									},
									filter(event, player) {
										return event.player.countMark('god_sunce_liequ_mark') > 0;
									},
									content() {
										var a = trigger.player.countMark('god_sunce_liequ_mark');
										player.gainMaxHp(2 * a);
									},
								},
							},
							mod: {
								aiOrder(player, card, num) {
									if (num > 0 && _status.event && _status.event.type == 'phase' && get.tag(card, 'recover')) {
										if (player.needsToDiscard()) return num / 3;
										return 0;
									}
								},
								targetInRange(card, player, target) {
									if (target.hasMark('god_sunce_liequ_mark')) return true;
								},
								cardUsableTarget(card, player, target) {
									if (target.hasMark('god_sunce_liequ_mark')) return true;
								},
							},
							ai: {
								threaten: 3,
								order: 11,
								result: {
									player: -0.25,
									target(player, target) {
										if (target.isHealthy()) return -2;
										if (!target.hasMark('god_sunce_liequ_mark')) return -1;
										return -0.2;
									},
								},
							},
						},
						god_fanchou_xingluan: {
							audio: 'xinfu_xingluan',
							group: ['god_fanchou_xingluan_fangong'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (!player.isPhaseUsing()) return false;
								if (get.type(event.card) == undefined) return false;
								return true;
							},
							content() {
								var card = get.cardPile2(function (card) {
									return card.number == 6;
								});
								if (card) {
									player.gain(card, 'gain2');
								} else {
									player.changeHujia();
									player.chat('无牌可得了吗');
									game.log('但是牌堆里面已经没有点数为6的牌了!');
								}
							},
							subSkill: {
								fangong: {
									audio: 'xinfu_xingluan',
									forced: true,
									trigger: {
										target: 'useCardToAfter',
									},
									content() {
										if (trigger.player != player) {
											player
												.chooseToUse('是否发动反攻,对' + get.translation(trigger.player) + '使用一张【杀】？', { name: 'sha' })
												.set('filterTarget', function (card, player, target) {
													return target == _status.event.source;
												})
												.set('selectTarget', -1)
												.set('source', trigger.player);
										}
									},
								},
							},
						},
						god_fanchou_yangwu: {
							audio: 'xinfu_xingluan',
							charlotte: true,
							superCharlotte: true,
							firstDo: true,
							forced: true,
							trigger: {
								global: 'phaseBegin',
							},
							filter(event, player) {
								return player.countCards('h', { name: 'sha' }) < 6;
							},
							content() {
								'step 0';
								let num = 6;
								while (num-- > 0 && player.countCards('h', { name: 'sha' }) < 5) {
									var card = get.cardPile((card) => card.name == 'sha');
									if (card) {
										player.gain(card, 'gain2');
									}
								}
								('step 1');
								for (let i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (get.type(ui.cardPile.childNodes[i]) == 'equip') {
										player.equip(ui.cardPile.childNodes[i]);
										player.$gain2(ui.cardPile.childNodes[i]);
										event.finish();
										return;
									}
								}
								for (let i = 0; i < ui.discardPile.childNodes.length; i++) {
									if (get.type(ui.discardPile.childNodes[i]) == 'equip') {
										player.equip(ui.discardPile.childNodes[i]);
										player.$gain2(ui.discardPile.childNodes[i]);
										event.finish();
										return;
									}
								}
							},
						},
						god_zhangliao_tuxi: {
							audio: 'tuxi',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: ['phaseBefore', 'phaseAfter'],
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player && current.countCards('he') > 0;
								});
							},
							check(event, player) {
								return game.hasPlayer((p) => p != player && get.attitude(player, p) <= 0);
							},
							content() {
								'step 0';
								player
									.chooseTarget(
										get.prompt('god_zhangliao_tuxi'),
										[1, Infinity],
										function (card, player, target) {
											return target.countCards('he') > 0 && player != target;
										},
										function (target) {
											var att = get.attitude(_status.event.player, target);
											if (target.hasSkill('tuntian')) return att / 10;
											return 1 - att;
										}
									);
								('step 1');
								if (result.targets?.length) {
									player.gainMultiple(result.targets, 'he');
								}
								('step 2');
							},
							ai: {
								threaten: 10,
								expose: 1.3,
							},
						},
						god_zhangliao_weifeng: {
							audio: 'weifeng',
							group: ['god_zhangliao_weifeng_damage'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								if (
									!event.targets ||
									!event.targets.filter(function (target) {
										return target != player && !target.storage.god_zhangliao_weifeng_mark;
									}).length
								)
									return false;
								return game.hasPlayer(function (current) {
									return current != player && !current.storage.god_zhangliao_weifeng_mark && event.targets.includes(current);
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget(true, '威风:请选择一个目标,令其获得一个【惧(' + get.translation(trigger.card.name) + ')】标记', function (card, player, target) {
										return player != target && !target.storage.god_zhangliao_weifeng_mark && _status.event.getTrigger().targets.includes(target);
									})
									.set('ai', function (target) {
										return -get.attitude(_status.event.player, target);
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									target.storage.god_zhangliao_weifeng_mark = trigger.card.name;
									player.line(target, 'green');
									game.log(target, '获得了一个', '#g【惧(' + get.translation(trigger.card.name) + ')】', '标记');
									target.markSkill('god_zhangliao_weifeng_mark');
								}
							},
							subSkill: {
								mark: {
									marktext: '惧',
									intro: {
										content: '当前<惧>标记名称:$',
										onunmark(storage, player) {
											if (player.storage.god_zhangliao_weifeng_mark) {
												game.log(player, '移去了一个', '#g【惧(' + get.translation(player.storage.god_zhangliao_weifeng_mark) + ')】', '标记');
												delete player.storage.god_zhangliao_weifeng_mark;
											}
										},
									},
								},
								damage: {
									forced: true,
									popup: false,
									trigger: {
										global: 'damageBegin3',
									},
									filter(event, player) {
										if (event.name != 'damage') return true;
										return event.player != player && typeof event.player.storage.god_zhangliao_weifeng_mark == 'string';
									},
									content() {
										if (trigger.name == 'damage') {
											if (trigger.card && trigger.card.name == trigger.player.storage.god_zhangliao_weifeng_mark) {
												trigger.num++;
											} else if (trigger.player.countGainableCards(player, 'he') > 0) player.gainPlayerCard(trigger.player, 'he', true);
											trigger.player.unmarkSkill('god_zhangliao_weifeng_mark');
										}
									},
								},
							},
						},
						god_guojia_tiandu: {
							audio: 'tiandu',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: 'judgeEnd',
							},
							frequent(event) {
								if (event.result.card.name == 'du') return false;
								return true;
							},
							check(event) {
								if (event.result.card.name == 'du') return false;
								return true;
							},
							filter(event, player) {
								return get.position(event.result.card, true) == 'o';
							},
							content() {
								player.gain(trigger.result.card, 'gain2');
							},
						},
						god_guojia_yiji: {
							audio: 'stianyi',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: ['damageAfter', 'loseHpAfter'],
							},
							forced: true,
							filter(event, player) {
								return event.num > 0;
							},
							content() {
								'step 0';
								player.draw(3);
								('step 1');
								player.chooseCardTarget({
									filterCard: true,
									selectCard: [1, 3],
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
									prompt: '请选择至多三张手牌,分配给一名其他角色',
								});
								('step 2');
								if (result.targets?.length) {
									player.line(result.targets, 'green');
									result.targets[0].gain(result.cards, player, 'giveAuto');
								}
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								result: {
									effect(card, player, target) {
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
											if (player.hp >= 4) return [1, num * 2];
											if (target.hp == 3) return [1, num * 1.5];
											if (target.hp == 2) return [1, num * 0.5];
										}
									},
								},
								threaten: 0.6,
							},
						},
						god_guojia_qizuo: {
							audio: 'sghuishi',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								global: 'damageEnd',
							},
							filter(event, player, name) {
								return name == 'damageEnd' && event.source && event.player.isIn();
							},
							content() {
								'step 0';
								player.judge(function (card) {
									if (get.color(card) == 'red') return 1;
									return -1;
								});
								('step 1');
								if (result.judge != -1) {
									var str = get.translation(trigger.player);
									player
										.chooseControl()
										.set('prompt', '奇佐:请选择一项')
										.set('choiceList', ['令' + str + '受到1点无来源伤害', '令' + str + '回复1点体力'])
										.set('ai', function (target) {
											var target = trigger.player;
											if (get.attitude(_status.event.player, target) <= 0) return 0;
											return 1;
										});
								}
								('step 2');
								var str = get.translation(trigger.player);
								if (result.control == '选项一') {
									trigger.player.damage('nosource', 'nocard');
									game.log(player, '令' + str + '受到1点无来源伤害');
								}
								if (result.control == '选项二') {
									trigger.player.recover();
									game.log(player, '令' + str + '回复1点体力');
								}
							},
							ai: {
								order: 10,
								threaten: 0.8,
							},
						},
						god_miheng_kuangcai: {
							audio: 'kuangcai',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: 'phaseUseBegin',
							},
							filter(event, player) {
								return !event.player.isMad();
							},
							content() {
								game.broadcastAll(function (player) {
									player.forceCountChoose = { phaseUse: 15 };
								}, player);
								player.addSkill('god_miheng_kuangcai_use');
								player.addSkill('god_miheng_kuangcai_cancel');//QQQ
							},
							subSkill: {
								use: {
									forced: true,
									silent: true,
									popup: false,
									mod: {
										cardUsable(card) {
											if (get.info(card) && get.info(card).forceUsable) return;
											return Infinity;
										},
										targetInRange() {
											return true;
										},
									},
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										if (!player.forceCountChoose || !player.forceCountChoose.phaseUse) {
											return false;
										}
										return true;
									},
									content() {
										player.draw();
										if (player.forceCountChoose.phaseUse == 1) {
											var evt = event.getParent('phaseUse', true);
											if (evt) evt.skipped = true;
										} else
											game.broadcastAll(function (player) {
												player.forceCountChoose.phaseUse--;
											}, player);
									},
									ai: {
										presha: true,
										pretao: true,
									},
								},
								cancel: {
									forced: true,
									popup: false,
									silent: true,
									trigger: {
										player: 'phaseJieshuAfter',
									},
									content() {
										game.broadcastAll(function (player) {
											delete player.forceCountChoose;
										}, player);
										player.removeSkill('god_miheng_kuangcai_use');
										player.removeSkill('god_miheng_kuangcai_draw');
										player.removeSkill('god_miheng_kuangcai_cancel');
									},
								},
							},
							ai: {
								threaten: 4.5,
							},
						},
						god_miheng_shejian: {
							audio: 'shejian',
							charlotte: true,
							superCharlotte: true,
							enable: 'phaseUse',
							usable: 1,
							content() {
								game.countPlayer(function (current) {
									if (current != player && !current.hasSkill('baiban')) {
										player.line(current, 'green');
										current.addTempSkill('baiban');
										player.addTempSkill('god_miheng_shejian_draw');
									}
								});
							},
							subSkill: {
								draw: {
									audio: 'shejian',
									forced: true,
									trigger: {
										source: 'damageBegin',
									},
									filter(event, player) {
										return event.source;
									},
									content() {
										player.draw(trigger.num);
									},
								},
							},
							ai: {
								order: 12,
								result: {
									target: -3,
									player: 1,
								},
							},
						},
						god_caocao_jianxiong: {
							audio: 'jianxiong',
							group: ['god_caocao_jianxiong_ningwu', 'god_caocao_jianxiong_mark'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							marktext: '雄',
							intro: {
								markcount(storage, player) {
									return player.countMark('god_caocao_jianxiong');
								},
								content(storage, player) {
									return '摸牌数为' + (player.countMark('god_caocao_jianxiong') + 1);
								},
							},
							trigger: {
								player: 'damageEnd',
							},
							content() {
								if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
									player.gain(trigger.cards, 'gain2');
								}
								player.draw(player.countMark('god_caocao_jianxiong') + 1, 'nodelay');
							},
							subSkill: {
								mark: {
									audio: 'jianxiong',
									charlotte: true,
									superCharlotte: true,
									forced: true,
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										if (player.countMark('god_caocao_jianxiong') < 5) {
											return player.isIn() && event.player != player;
										}
									},
									content() {
										player.addMark('god_caocao_jianxiong', 1);
									},
								},
								ningwu: {
									audio: 'jianxiong',
									charlotte: true,
									superCharlotte: true,
									forced: true,
									trigger: {
										player: 'damageBefore',
									},
									filter(event, player) {
										return player.countMark('god_caocao_jianxiong') > 2;
									},
									content() {
										'step 0';
										player.chooseTarget(get.prompt2('god_caocao_jianxiong'), '将此伤害转移给一名其他角色', {
											filterTarget(card, player, target) {
												return player != target;
											},
											ai1(target) {
												var att = get.attitude(_status.event.player, target);
												var trigger = _status.event.getTrigger();
												var eff = get.damageEffect(target, trigger.source, target, trigger.nature);
												if (player.hp <= 2 || trigger.num > 1) {
													return 1;
												}
												if ((trigger.num = 1 || player.hp > 2)) {
													return -1;
												}
											},
										});
										('step 1');
										if (result.bool) {
											player.removeMark('god_caocao_jianxiong', 3);
											trigger.player = result.targets[0];
											player.chat('宁我负人,毋人负我!');
										}
									},
								},
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								effect: {
									target(card, player, target) {
										if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
										if (get.tag(card, 'damage') && player != target) {
											var cards = card.cards,
												evt = _status.event;
											if (evt.player == target && card.name == 'damage' && evt.parent.type == 'card') cards = evt.parent.cards.filterInD();
											if (target.hp <= 1) return;
											if (get.itemtype(cards) != 'cards') return;
											for (const i of cards) {
												if (i.name == 'tao') return [1, 5 + player.countMark('god_caocao_jianxiong') / 2];
											}
											if (get.value(cards, target) >= 7 - player.countMark('god_caocao_jianxiong') / 2 + target.getDamagedHp()) return [1, 3 + player.countMark('god_caocao_jianxiong') / 2];
											return [1, 0.6 + player.countMark('god_caocao_jianxiong') / 2];
										}
									},
								},
							},
						},
						god_liubei_zhaolie: {
							audio: 'zhaolie',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'phaseDrawBegin2',
							},
							filter(event, player) {
								return !event.numFixed;
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('god_liubei_zhaolie'), function (card, player, target) {
										return target != player && player.inRange(target);
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										if (get.attitude(player, target) > 0) return 0;
										return get.damageEffect(target, player, player);
									});
								('step 1');
								if (result.bool) {
									trigger.num--;
									player.storage.god_liubei_zhaolie = result.targets[0];
									player.addTempSkill('god_liubei_zhaolie_damage', 'phaseDrawAfter');
								}
							},
							subSkill: {
								damage: {
									forced: true,
									popup: false,
									trigger: {
										player: 'phaseDrawEnd',
									},
									content() {
										'step 0';
										var cards = get.cards(3);
										game.cardsGotoOrdering(cards);
										player.showCards(cards);
										event.cardbasic = [];
										event.cardnobasic = [];
										if (Array.isArray(cards))
											for (const i of cards) {
												if (get.type(i) == 'basic') {
													event.cardbasic.push(i);
												}
												if (get.type(i) != 'basic') {
													event.cardnobasic.push(i);
												}
											}
										player.gain(event.cardbasic, 'gain2');
										game.cardsDiscard(event.cardnobasic);
										var b = event.cardnobasic.length;
										if (b > 0) {
											var target = player.storage.god_liubei_zhaolie;
											target.damage(b, 'fire');
										}
										delete player.storage.god_liubei_zhaolie;
									},
								},
							},
						},
						god_liubei_shichou: {
							audio: 'shichou',
							charlotte: true,
							superCharlotte: true,
							limited: true,
							forced: true,
							mark: false,
							init(player) {
								if (player.hasSkill('god_liubei_shichou')) {
									player.markSkill('god_liubei_shichou');
									player.storage.god_liubei_shichou = false;
								}
							},
							intro: {
								content: 'limited',
							},
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player;
								});
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt2('god_liubei_shichou'), {
									filterTarget(card, player, target) {
										return target != player;
									},
									ai1(target) {
										var player = _status.event.player;
										if (player.hasUnknown()) return 0;
										var att = get.attitude(player, target);
										if (att <= 0) {
											if (target.hp == 1) return (10 - att) / 2;
											return 10 - att;
										} else {
											if (target.hp == 1) return 0;
											return (10 - att) / 4;
										}
									},
								});
								('step 1');
								if (!result.bool) return;
								player.loseMaxHp();
								var target = result.targets[0];
								player.storage.god_liubei_shichou = true;
								player.awakenSkill('god_liubei_shichou');
								player.storage.god_liubei_shichou_target = target;
								player.addSkill('god_liubei_shichou_daiti');
								player.addSkill('god_liubei_shichou_yichu');
								target.markSkillCharacter('god_liubei_shichou', player, '誓仇', '代替' + get.translation(player) + '承受伤害直到死亡');
							},
							subSkill: {
								daiti: {
									trigger: {
										player: 'damageBegin3',
									},
									forced: true,
									popup: false,
									content() {
										trigger.player = player.storage.god_liubei_shichou_target;
									},
									ai: {
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'damage') && target.storage.god_liubei_shichou_target) {
													if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
													if (get.attitude(player, target) > 0) return [0, 0];
													return [0, get.attitude(player, target.storage.god_liubei_shichou_target)];
												}
											},//QQQ
										},
									},
								},
								yichu: {
									trigger: {
										global: 'dieBegin',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return event.player == player.storage.god_liubei_shichou_target;
									},
									content() {
										trigger.player.unmarkSkill('god_liubei_shichou');
										delete player.storage.god_liubei_shichou_target;
										player.removeSkill('god_liubei_shichou_daiti');
										player.removeSkill('god_liubei_shichou_yichu');
										player.restoreSkill('god_liubei_shichou');
									},
								},
							},
							ai: {
								threaten: 5,
								order: 10,
								result: {
									player(player) {
										var num = 0;
										for (const i of game.players) {
											if (i != player) {
												if (i.ai.shown == 0) return 0;
												num += get.damageEffect(i, player, player) > 0 ? 1 : -1;
											}
										}
										return num;
									},
								},
							},
						},
						god_xuzhu_luoyi: {
							audio: 'luoyi',
							charlotte: true,
							superCharlotte: true,
							limited: true,
							intro: {
								content: 'limited',
							},
							trigger: {
								player: 'phaseDrawBegin1',
							},
							check(event, player) {
								if (player.countCards('h', 'sha') > 1) return true;
							},
							content() {
								'step 0';
								player.awakenSkill('god_xuzhu_luoyi');
								player.disableEquip(2);
								('step 1');
								player.addSkill('god_xuzhu_luoyi_shanghai');
								player.addSkill('god_xuzhu_luoyi_huchi1');
								player.addSkill('god_xuzhu_luoyi_huchi2');
								trigger.cancel(null, null, 'notrigger');
							},
							subSkill: {
								shanghai: {
									charlotte: true,
									superCharlotte: true,
									forced: true,
									trigger: {
										source: 'damageBegin1',
									},
									filter(event, player) {
										return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.notLink();
									},
									content() {
										var a = player.hp;
										trigger.num += a;
									},
									ai: {
										damageBonus: true,
									},
								},
								huchi1: {
									enable: 'phaseUse',
									filter(event, player) {
										return player.countCards('he', { subtype: 'equip2' }) > 0;
									},
									selectCard: 1,
									filterCard: {
										subtype: 'equip2',
									},
									position: 'he',
									discard: false,
									content() { },
								},
								huchi2: {
									audio: 'luoyi',
									trigger: {
										player: 'loseEnd',
									},
									forced: true,
									filter(event, player) {
										if (Array.isArray(event.cards))
											for (const i of event.cards) {
												if (get.subtype(i) == 'equip2') return true;
											}
										return false;
									},
									content() {
										game.log('脱!');
										player.chat('脱!');
										if (player.isHealthy()) {
											player.gainMaxHp();
										} else player.recover();
									},
								},
							},
						},
						god_menghuo_manwang: {
							audio: 'spmanwang',
							group: ['god_menghuo_manwang_huoshou', 'god_menghuo_manwang_draw', 'god_menghuo_manwang_nanman'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								target: 'useCardToBefore',
							},
							filter(event, player) {
								return event.card && event.card.name == 'nanman';
							},
							content() {
								trigger.cancel();
							},
							subSkill: {
								huoshou: {
									audio: 'huoshou1huoshou1_regod_menghuo',
									charlotte: true,
									superCharlotte: true,
									forced: true,
									trigger: {
										global: 'useCard',
									},
									filter(event, player) {
										return event.card && event.card.name == 'nanman' && event.player != player;
									},
									content() {
										trigger.customArgs.default.customSource = player;
									},
								},
								draw: {
									audio: 'spmanwang',
									charlotte: true,
									superCharlotte: true,
									forced: true,
									trigger: {
										global: 'damageEnd',
									},
									filter(event, player) {
										return event.card && event.card.name == 'nanman';
									},
									content() {
										player.draw();
										if (!player.isHealthy()) {
											player.recover();
										}
									},
								},
								nanman: {
									audio: 'spmanwang',
									charlotte: true,
									superCharlotte: true,
									forced: true,
									trigger: {
										global: 'useCardAfter',
									},
									filter(event, player) {
										return event.card && event.card.name == 'nanman' && event.player != player && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
									},
									content() {
										player.gain(trigger.cards, 'gain2');
									},
								},
							},
							ai: {
								effect: {
									target(card) {
										if (card.name == 'nanman') return [0, 1];
									},
								},
							},
						},
						god_menghuo_panqin: {
							audio: 'sppanqin',
							group: ['god_menghuo_panqin_nanman'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'damageEnd',
							},
							filter(event, player) {
								if (event.source == player || event.source == undefined) return false;
								return true;
							},
							content() {
								var a = trigger.num;
								trigger.source.damage(a);
							},
							subSkill: {
								nanman: {
									audio: 'sppanqin',
									charlotte: true,
									superCharlotte: true,
									trigger: {
										player: 'phaseJieshuBegin',
									},
									filter(event, player) {
										return player.countCards('h') > 0;
									},
									prompt2(event, player) {
										return '弃置所有手牌视为使用了一张【南蛮入侵】';
									},
									content() {
										'step 0';
										player.discard(player.getCards('h'));
										('step 1');
										player.chooseUseTarget({ name: 'nanman' }, true);
									},
									ai: {
										result: {
											player: 7,
											target: -1,
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
							},
							ai: {
								maixie: true,
								maixie_hp: true,
								threaten: 0.1,
							},
						},
						god_lukang_qianjie: {
							audio: 'drlt_qianjie',
							group: ['god_lukang_qianjie_nohengzhi', 'god_lukang_qianjie_nofanmian', 'god_lukang_qianjie_nohefa'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							enable: 'phaseUse',
							position: 'he',
							filter: (event, player) => player.hasCard((card) => lib.skill.god_lukang_qianjie.filterCard(card, player), lib.skill.god_lukang_qianjie.position),
							filterCard: (card, player) => get.type(card) != 'basic' && player.canRecast(card),
							check(card) {
								if (card.name == 'wuzhong' || card.name == 'wugu' || card.name == 'taoyuan') return 99;
								return 5 - get.value(card);
							},
							content() {
								player.recast(cards);
							},
							discard: false,
							lose: false,
							delay: false,
							prompt: '将一张非基本牌置入弃牌堆并摸一张牌',
							ai: {
								order: 10,
								result: {
									player: 1,
								},
								effect: {
									target(card) {
										if (card.name == 'tiesuo') return 'zeroplayertarget';
									},
								},
							},
							subSkill: {
								nohengzhi: {
									audio: 'drlt_qianjie',
									forced: true,
									trigger: {
										player: 'linkBegin',
									},
									filter(event, player) {
										return !player.isLinked();
									},
									content() {
										trigger.cancel();
									},
								},
								nofanmian: {
									audio: 'drlt_qianjie',
									forced: true,
									trigger: {
										player: 'turnOverBefore',
									},
									filter(event, player) {
										return !player.isTurnedOver();
									},
									content() {
										trigger.cancel();
										game.log(player, '取消了翻面');
									},
								},
								nohefa: {
									audio: 'drlt_qianjie',
									forced: true,
									mod: {
										targetEnabled(card, player, target) {
											if (get.type(card) == 'delay' || get.type(card) == 'trick') return false;
										},
									},
									ai: {
										noCompareTarget: true,
									},
								},
							},
						},
						god_lukang_huairou: {
							audio: 'drlt_huairou',
							group: ['god_lukang_huairou_feichu', 'god_lukang_huairou_buff'],
							charlotte: true,
							superCharlotte: true,
							subSkill: {
								feichu: {
									audio: 'drlt_huairou',
									trigger: {
										target: 'useCardToTargeted',
									},
									filter(event, player) {
										return event.player != player && player.hasEnabledSlot();
									},
									prompt: '废除一个装备栏并令此牌对你无效',
									content() {
										'step 0';
										var list = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
										for (let i = 0; i < list.length; i++) {
											if (!player.hasEnabledSlot(list[i])) list.splice(i--, 1);
										}
										player.chooseControl(list).set('prompt', '请选择废除一个装备栏').ai = function () {
											if (
												list.includes('equip1') &&
												player.hasEmptySlot('equip1') &&
												player.countCards('h', function (card) {
													return card.name == 'sha' && player.getUseValue(card) > 0;
												})
											)
												return 'equip1';
											if (list.includes('equip3') && player.hasEmptySlot('equip3')) return 'equip3';
											if (list.includes('equip4') && player.hasEmptySlot('equip4')) return 'equip4';
											if (list.includes('equip5') && player.hasEmptySlot('equip5')) return 'equip5';
											if (list.includes('equip2') && player.hasEmptySlot('equip2')) return 'equip2';
											return list.randomGet();
										};
										('step 1');
										player.disableEquip(result.control);
										if (result.control == 'equip2') {
											player.gainMaxHp(2);
											player.recover(2);
										}
										('step 2');
										trigger.excluded.add(player);
									},
									ai: {
										result: {
											player: 1,
										},
									},
								},
								buff: {
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha' && player.hasDisabledSlot(1)) return num + 1;
										},
										globalTo(from, to, distance) {
											if (to.hasDisabledSlot(3)) return distance + 3;
										},
										globalFrom(from, to, distance) {
											if (from.hasDisabledSlot(4)) return distance - 4;
										},
										maxHandcard(player, num) {
											if (player.hasDisabledSlot(5)) return 5 + num;
										},
									},
								},
							},
						},
						god_luxun_qianxun: {
							audio: 'reqianxun',
							group: ['god_luxun_qianxun_achieve', 'god_luxun_qianxun_fail'],
							derivation: ['god_luxun_xiongmu'],
							charlotte: true,
							superCharlotte: true,
							dutySkill: true,
							subSkill: {
								achieve: {
									audio: 'dcxiongmu',
									dutySkill: true,
									forced: true,
									trigger: {
										player: 'phaseUseEnd',
									},
									filter(event, player) {
										var a = player.getHistory('useSkill', function (evt) {
											return evt.skill == 'god_luxun_zhangcai';
										}).length;
										var b = player.getHistory('useSkill', function (evt) {
											return evt.skill == 'god_luxun_lianying';
										}).length;
										return a > 0 && b > 0;
									},
									content() {
										player.awakenSkill('god_luxun_qianxun');
										game.log(player, '成功完成使命');
										player.gainMaxHp();
										player.recover();
										player.addSkill('god_luxun_xiongmu');
									},
								},
								fail: {
									audio: 'ext:RE高达/audio:1',
									dutySkill: true,
									forced: true,
									trigger: {
										player: 'phaseUseEnd',
									},
									filter(event, player) {
										var a = player.getHistory('useSkill', function (evt) {
											return evt.skill == 'god_luxun_zhangcai';
										}).length;
										var b = player.getHistory('useSkill', function (evt) {
											return evt.skill == 'god_luxun_lianying';
										}).length;
										return a > 0 && b == 0;
									},
									content() {
										player.awakenSkill('god_luxun_qianxun');
										game.log(player, '使命失败');
										player.loseMaxHp();
									},
								},
							},
						},
						god_luxun_lianying: {
							audio: 'relianying',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'loseAfter',
								global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
							},
							filter(event, player) {
								if (player.countCards('h')) return false;
								var evt = event.getl(player);
								return evt && evt.player == player && evt.hs && evt.hs.length;
							},
							content() {
								player.drawTo(player.maxHp);
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
						god_luxun_zhangcai: {
							audio: 'dczhangcai',
							charlotte: true,
							superCharlotte: true,
							discard: false,
							lose: false,
							delay: false,
							enable: 'phaseUse',
							position: 'h',
							prompt: '将一张基本牌置入弃牌堆并摸一张非基本牌',
							filter(event, player) {
								return (player.getStat('skill').god_luxun_zhangcai || 0) < player.maxHp && player.hasCard((card) => lib.skill.god_luxun_zhangcai.filterCard(card, player), lib.skill.god_luxun_zhangcai.position);
							},
							filterCard: (card, player) => get.type(card) == 'basic' && player.canRecast(card),
							check(card) {
								return 5 - get.value(card);
							},
							content() {
								player.recast(cards, null, (player, cards) => {
									var cardsToGain = [];
									for (var repetition = 0; repetition < cards.length; repetition++) {
										var card = get.cardPile((card) => get.type(card) != 'basic');
										if (card) cardsToGain.push(card);
									}
									if (cardsToGain.length) player.gain(cardsToGain, 'draw');
									if (cards.length - cardsToGain.length) player.draw(cards.length - cardsToGain.length).log = false;
								});
							},
						},
						god_luxun_xiongmu: {
							audio: 'dcxiongmu',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.countCards('he') > 0;
								});
							},
							content() {
								'step 0';
								player.chooseTarget('你可以获得一名其他角色的所有牌').ai = function (target) {
									return -get.attitude(_status.event.player, target);
								};
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									target.give(target.getCards('he'), player);
								}
							},
							ai: {
								threaten: 5,
								result: {
									target: -3,
								},
							},
						},
						god_zhugedan_gongao: {
							audio: 'gongao',
							group: ['god_zhugedan_gongao_draw'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							logTarget: 'player',
							trigger: {
								global: 'dieBefore',
							},
							filter(event, player) {
								return player.isIn() && player.hp > 0;
							},
							content() {
								var a = trigger.player.maxHp;
								player.gainMaxHp(a);
								player.recover(a);
							},
							subSkill: {
								draw: {
									audio: 'gongao',
									forced: true,
									trigger: {
										global: 'gameDrawBegin',
									},
									content() {
										var a = player.hp;
										player.draw(a);
									},
								},
							},
							ai: {
								threaten: 1.5,
							},
						},
						god_zhugedan_juyi: {
							audio: 'juyi',
							group: ['god_zhugedan_juyi_achieve', 'god_zhugedan_juyi_fail'],
							derivation: ['god_zhugedan_weizhong', 'god_zhugedan_benghuai'],
							charlotte: true,
							superCharlotte: true,
							dutySkill: true,
							logTarget: 'player',
							marktext: '义',
							intro: {
								content: 'expansion',
								markcount: 'expansion',
							},
							prompt2: '令其选择一张牌置于你的武将牌上作为「义」',
							trigger: {
								source: 'damageBegin',
							},
							check(event, player) {
								return get.attitude(player, event.player) <= 0;
							},
							filter(event, player) {
								return event.player.isIn() && event.player.countCards('he') > 0;
							},
							content() {
								'step 0';
								if (trigger.player.countCards('he') > 0) {
									trigger.player.chooseCard('he', true, '选择一张牌置于' + get.translation(player) + '的武将牌上作为「义」');
								}
								('step 1');
								player.addToExpansion(result.cards, trigger.player, 'give').gaintag.add('god_zhugedan_juyi');
							},
							onremove(player, skill) {
								var cards = player.getExpansions(skill);
								if (cards.length) player.loseToDiscardpile(cards);
							},
							subSkill: {
								achieve: {
									audio: 'weizhong',
									dutySkill: true,
									forced: true,
									trigger: {
										global: 'dieAfter',
									},
									filter(event, player) {
										return player.getExpansions('god_zhugedan_juyi').length >= 3;
									},
									content() {
										player.awakenSkill('god_zhugedan_juyi');
										game.log(player, '成功完成使命');
										player.gain(player.getExpansions('god_zhugedan_juyi'), 'gain2', 'fromStorage');
										player.addSkill('god_zhugedan_weizhong');
									},
								},
								fail: {
									audio: 'benghuai_zhugedan',
									dutySkill: true,
									forced: true,
									trigger: {
										global: 'dieAfter',
									},
									filter(event, player) {
										return player.getExpansions('god_zhugedan_juyi').length < 3;
									},
									content() {
										player.awakenSkill('god_zhugedan_juyi');
										game.log(player, '使命失败');
										player.$throw(player.getExpansions('god_zhugedan_juyi'));
										player.addSkill('god_zhugedan_benghuai');
									},
								},
							},
						},
						god_zhugedan_weizhong: {
							audio: 'weizhong',
							group: ['god_zhugedan_weizhong_yismssz'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'gainMaxHpBegin',
							},
							content() {
								player.draw(trigger.num);
							},
							subSkill: {
								yismssz: {
									audio: 'weizhong',
									forced: true,
									trigger: {
										source: 'damageBegin1',
									},
									filter(event, player) {
										if (
											game.hasPlayer(function (target) {
												var target = event.player;
												var name = target.name;
												return target != player && (name.includes('sima') || target.group == 'jin');
											})
										)
											return true;
									},
									content() {
										var num = [2, 3, 4, 5].randomGet();
										trigger.num *= num;
										player.chat('定当夷司马氏三族!');
										game.log(player, '对' + get.translation(trigger.player) + '造成' + num + '倍伤害!');
									},
									ai: {
										damageBonus: true,
									},
								},
							},
						},
						god_zhugedan_benghuai: {
							audio: 'benghuai_zhugedan',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'phaseJieshuBegin',
							},
							check() {
								return false;
							},
							filter(event, player) {
								return !player.isMinHp();
							},
							content() {
								'step 0';
								player
									.chooseControl('baonue_hp', 'baonue_maxHp', function (event, player) {
										if (player.hp == player.maxHp) return 'baonue_hp';
										if (player.hp < player.maxHp - 1 || player.hp <= 2) return 'baonue_maxHp';
										return 'baonue_hp';
									})
									.set('prompt', '崩坏:失去1点体力或减1点体力上限');
								('step 1');
								if (result.control == 'baonue_hp') {
									player.loseHp();
									player.draw();
								} else {
									player.loseMaxHp(true);
									player.draw();
								}
							},
							ai: {
								threaten: 0.5,
								neg: true,
							},
						},
						god_xusheng_pojun: {
							audio: 'decadepojun',
							group: ['god_xusheng_pojun_die'],
							charlotte: true,
							superCharlotte: true,
							shaRelated: true,
							trigger: {
								player: 'useCardToPlayered',
							},
							forced: true,
							filter(event, player) {
								return event.card && event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
							},
							content() {
								'step 0';
								var next = player.choosePlayerCard(trigger.target, 'he', [1, trigger.target.countCards('he')], get.prompt('god_xusheng_pojun', trigger.target));
								next.set('ai', function (button) {
									if (!_status.event.goon) return 0;
									var val = get.value(button.link);
									if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
									return val;
								});
								next.set('goon', get.attitude(player, trigger.target) <= 0);
								next.set('forceAuto', true);
								('step 1');
								if (result.cards?.length) {
									event.cards = result.cards;
									var target = trigger.target;
									target.addSkill('god_xusheng_pojun_card');
									target.addToExpansion(result.cards, 'giveAuto', target).gaintag.add('god_xusheng_pojun_card');
								} else event.finish();
								('step 2');
								var draw = false;
								var nobasic = [];
								var basic = [];
								for (const i of cards) {
									var type = get.type2(i);
									if (type != 'basic') {
										draw = true;
										nobasic.push(i);
									}
									if (type == 'basic') {
										basic.push(i);
									}
								}
								if (draw) event.draw = true;
								var numa = nobasic.length;
								var numb = basic.length;
								if (event.draw) player.draw(numa);
								if (basic.length) {
									if (trigger.parent.addCount !== false) {
										trigger.parent.addCount = false;
										var stat = player.getStat();
										if (stat && stat.card && stat.card.sha) stat.card.sha--;
									}
									var map = trigger.customArgs;
									var id = trigger.target.playerid;
									if (!map[id]) map[id] = {};
									if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
									map[id].extraDamage += numb - 1;
								} else event.finish();
							},
							subSkill: {
								card: {
									trigger: {
										global: 'phaseEnd',
									},
									forced: true,
									popup: false,
									filter(event, player) {
										return player.getExpansions('god_xusheng_pojun_card').length;
									},
									content() {
										'step 0';
										var cards = player.getExpansions('god_xusheng_pojun_card');
										player.gain(cards, 'draw');
										game.log(player, '收回了' + get.cnNumber(cards.length) + '张<破军>牌');
										('step 1');
										player.removeSkill('god_xusheng_pojun_card');
									},
									intro: {
										markcount: 'expansion',
										mark(dialog, storage, player) {
											var cards = player.getExpansions('god_xusheng_pojun_card');
											if (player.isUnderControl(true)) dialog.addAuto(cards);
											else return '共有' + get.cnNumber(cards.length) + '张牌';
										},
									},
								},
								die: {
									audio: 'decadepojun',
									forced: true,
									trigger: {
										source: 'dieBefore',
									},
									filter(event, player) {
										return event.player.getExpansions('god_xusheng_pojun_card').length;
									},
									content() {
										var cards = trigger.player.getExpansions('god_xusheng_pojun_card');
										player.gain(cards, 'draw');
										game.log(player, '收回了' + get.cnNumber(cards.length) + '张<破军>牌');
									},
								},
							},
							ai: {
								unequip: true,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									if (get.attitude(player, arg.target) > 0) return false;
									if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
									if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
									return false;
								},
							},
						},
						god_huaxiong_yaowu: {
							audio: 'new_reyaowu',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'damageAfter',
								source: 'damageAfter',
							},
							filter(event, player) {
								return event.source && event.source.isIn();
							},
							content() {
								trigger.source.gainMaxHp();
							},
							ai: {
								threaten: 4,
							},
						},
						god_huaxiong_yangwei: {
							audio: 'sbyangwei',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							content() {
								'step 0';
								player.loseHp();
								('step 1');
								var num = player.maxHp - player.hp;
								player.draw(num);
								player.addTempSkill('god_huaxiong_yangwei_buff');
							},
							subSkill: {
								buff: {
									audio: 'sbyangwei',
									forced: true,
									trigger: {
										source: 'damageBegin1',
									},
									filter(event, player) {
										return event.player != player && event.card && event.card.name == 'sha';
									},
									content() {
										var numa = player.maxHp - player.hp;
										trigger.num += numa;
									},
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return num + (player.maxHp - player.hp);
										},
									},
								},
							},
							ai: {
								result: {
									player: 1,
								},
							},
						},
						god_mazhong_fuman: {
							audio: 'fuman',
							charlotte: true,
							superCharlotte: true,
							enable: 'phaseUse',
							usable: 1,
							filterTarget(card, player, target) {
								return !target.hasSkill('god_mazhong_fuman_buff') && target != player;
							},
							filter(event, player) {
								return player.countCards('he');
							},
							filterCard: true,
							position: 'he',
							discard: false,
							lose: false,
							delay: false,
							content() {
								target.gain(cards, player, 'giveAuto');
								target.storage.god_mazhong_fuman_buff = player;
								target.addSkill('god_mazhong_fuman_buff');
								target.markSkillCharacter('god_mazhong_fuman', player, '抚蛮', '使用一张牌时' + get.translation(player) + '摸一张牌且增加1点体力上限(若体力值小于体力上限则改为回复1点体力)');
							},
							check(card) {
								return 6 - get.value(card);
							},
							subSkill: {
								buff: {
									forced: true,
									popup: false,
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										return player.storage.god_mazhong_fuman_buff.isIn();
									},
									content() {
										'step 0';
										('step 1');
										player.line(player.storage.god_mazhong_fuman_buff, 'fire');
										player.storage.god_mazhong_fuman_buff.draw();
										if (player.storage.god_mazhong_fuman_buff.isHealthy()) {
											player.storage.god_mazhong_fuman_buff.gainMaxHp();
										} else player.storage.god_mazhong_fuman_buff.recover();
									},
								},
							},
							ai: {
								order: 10,
							},
						},
						god_huanggai_kurou: {
							audio: 'sbkurou',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: 'phaseUseAfter',
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							check(event, player) {
								return player.hp > 1;
							},
							content() {
								'step 0';
								player.loseHp();
								player.chooseTarget(
									'将所有手牌交给一名其他角色,你增加1点体力上限并进行一个额外的回合',
									function (card, player, target) {
										return player != target;
									},
									true
								).ai = function (target) {
									var att = get.attitude(player, target);
									if (att > 3) {
										if (player.countCards('h') > player.hp) return att;
									}
									return 0;
								};
								('step 1');
								if (result.bool) {
									trigger.cancel();
									var target = result.targets[0];
									var hs = player.getCards('h');
									player.give(hs, target);
								}
								('step 2');
								player.gainMaxHp();
								player.phase('nodelay');
							},
						},
						god_huanggai_zhaxiang: {
							audio: 'sbzhaxiang',
							group: ['god_huanggai_zhaxiang_draw'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							mod: {
								targetInRange(card, player) {
									if (player.countUsed() < player.getDamagedHp()) return true;
								},
								cardUsable(card, player) {
									if (player.countUsed() < player.getDamagedHp()) return Infinity;
								},
								aiOrder(player, card, num) {
									if (player.countUsed() >= player.getDamagedHp()) return;
									var numx = get.info(card).usable;
									if (typeof numx == 'function') numx = num(card, player);
									if (typeof numx == 'number') return num + 10;
								},
							},
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return player.getHistory('useCard').length <= player.getDamagedHp();
							},
							content() {
								trigger.directHit.addArray(game.filterPlayer());
							},
							subSkill: {
								draw: {
									audio: 'sbzhaxiang',
									forced: true,
									mod: {
										aiOrder(player, card, num) {
											if (num > 0 && _status.event && _status.event.type == 'phase' && get.tag(card, 'recover')) return num / 5;
										},
									},
									trigger: {
										player: 'phaseDrawBegin2',
									},
									filter(event, player) {
										return !event.numFixed && player.getDamagedHp() > 0;
									},
									content() {
										trigger.num += player.getDamagedHp();
									},
									ai: {
										effect: {
											target(card, player, target) {
												if (get.tag(card, 'recover') && target.hp > 0 && target.needsToDiscard() < 1) return [0, 0];
											},
										},
									},
								},
							},
							ai: {
								threaten: 1.5,
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									return player.countUsed() < player.getDamagedHp();
								},
							},
						},
						god_guanyu_wushen: {
							audio: 'wushen',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								trigger.directHit.addArray(game.players);
								if (trigger.addCount !== false) {
									trigger.addCount = false;
								}
							},
							mod: {
								cardname(card, player) {
									if (get.color(card) == 'red') return 'sha';
								},
								targetInRange(card) {
									if (get.color(card) == 'red') return true;
								},
								cardUsable(card, player) {
									if (card.name == 'sha' && get.color(card) == 'red') return Infinity;
								},
							},
						},
						god_guanyu_wuhun: {
							audio: 'twwuhun',
							charlotte: true,
							superCharlotte: true,
							forceDie: true,
							forced: true,
							trigger: {
								player: 'die',
							},
							check(event, player) {
								return game.hasPlayer((p) => p != player && get.attitude(player, p) <= 0);
							},
							content() {
								'step 0';
								player.chat('谁来与我同去？');
								player
									.chooseTarget(
										'选择令其获得【索命】效果并进行一次判定,若其判定结果不为【桃】或【桃园结义】,则其死亡',
										[1, Infinity],
										function (card, player, target) {
											return player != target;
										}).set('ai', (t) => -get.attitude(player, t));
								('step 1');
								if (result.targets?.length) {
									for (let i = 0; i < result.targets.length; i++) {
										result.targets[i].addSkill('god_guanyu_wuhun_debuff');
										result.targets[i].markSkillCharacter('god_guanyu_wuhun', player, '索魂', '当你濒死时,你立即死亡(不触发任何其它效果)');
										result.targets[i].addSkill('god_guanyu_wuhun_judge');
									}
								}
							},
							subSkill: {
								judge: {
									forced: true,
									silent: true,
									nopup: true,
									trigger: {
										global: 'dieAfter',
									},
									filter(event, player) {
										return event.player.hasSkill('god_guanyu_wuhun');
									},
									content() {
										'step 0';
										player
											.judge(function (card) {
												var name = card.name;
												if (name == 'tao' || name == 'taoyuan') return -25;
												return 15;
											})
											.set('forceDie', true).judge2 = function (result) {
												return result.bool;
											};
										('step 1');
										if (result.bool) {
											const next = game.createEvent('diex', false);
											next.source = player;
											next.player = player;
											next._triggered = null;
											next.restMap = { type: null, count: null, audio: null };
											next.excludeMark = [];
											next.setContent('die');
										} else player.removeSkill('god_guanyu_wuhun_judge');
									},
								},
								debuff: {
									forced: true,
									silent: true,
									nopup: true,
									trigger: {
										player: 'dying',
									},
									filter(event, player) {
										return player.hp <= 0;
									},
									content() {
										'step 0';
										const next = game.createEvent('diex', false);
										next.source = player;
										next.player = player;
										next._triggered = null;
										next.restMap = { type: null, count: null, audio: null };
										next.excludeMark = [];
										next.setContent('die');
										player.delete();
										player.remove();
										('step 1');
										if (!player.isAlive()) {
											trigger.cancel(true);
										}
									},
								},
							},
							ai: {
								maixie: true,
								maixie_hp: true,
							},
						},
						god_zuoci_qianhuan: {
							audio: 'huashen2',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'damageEnd',
								source: 'damageEnd',
							},
							filter(event, player) {
								return player.isIn();
							},
							content() {
								'step 0';
								player.draw(trigger.num);
								player.gainMaxHp();
								if (trigger.source == player) {
									player.recover();
								}
								('step 1');
								var list = get.gainableSkills();
								list.remove(player.getSkills());
								list = list.randomGets(3 + trigger.num);
								event.skillai = function () {
									return get.max(list, get.skillRank, 'item');
								};
								if (event.isMine()) {
									var dialog = ui.create.dialog('forcebutton');
									dialog.add('选择获得一项技能');
									var clickItem = function () {
										_status.event._result = this.link;
										dialog.close();
										game.resume();
									};
									for (let i = 0; i < list.length; i++) {
										if (lib.translate[list[i] + '_info']) {
											var translation = get.translation(list[i]);
											if (translation[0] == '新' && translation.length == 3) {
												translation = translation.slice(1, 3);
											} else {
												translation = translation.slice(0, 2);
											}
											var item = dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + translation + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
											item.firstChild.addEventListener('click', clickItem);
											item.firstChild.link = list[i];
										}
									}
									dialog.add(ui.create.div('.placeholder'));
									event.switchToAuto = function () {
										event._result = event.skillai();
										dialog.close();
										game.resume();
									};
									_status.imchoosing = true;
									game.pause();
								} else {
									event._result = event.skillai();
								}
								('step 2');
								_status.imchoosing = false;
								var link = result;
								player.addSkill(link, true);
								player.popup(link);
								game.log(player, '获得了技能', '【' + get.translation(link) + '】');
							},
						},
						god_yuji_qianhuan: {
							audio: 'guhuo_guess',
							group: ['god_yuji_qianhuan_judge'],
							charlotte: true,
							superCharlotte: true,
							enable: ['chooseToUse', 'chooseToRespond'],
							hiddenCard(player, name) {
								return lib.inpile.includes(name) && player.countCards('h') > 0;
							},
							filter(event, player) {
								if (!player.countCards('hs')) return false;
								if ((player.getStat('skill').god_yuji_qianhuan || 0) < player.hp) {
									for (const i of lib.inpile) {
										var type = get.type(i);
										if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
										if (i == 'sha') {
											for (var j of lib.inpile_nature) {
												if (event.filterCard && event.filterCard({ name: i, nature: j }, player, event)) return true;
											}
										}
									}
								}
								return false;
							},
							chooseButton: {
								dialog() {
									var list = [];
									for (const i of lib.inpile) {
										var type = get.type(i);
										if (type == 'basic' || type == 'trick') list.push([type, '', i]);
										if (i == 'sha') {
											for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
										}
									}
									return ui.create.dialog('千幻', [list, 'vcard']);
								},
								filter(button, player) {
									var evt = _status.event.parent;
									return evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
								},
								check(button) {
									var player = _status.event.player;
									var hasEnemy = game.hasPlayer(function (current) {
										return current != player && (get.realAttitude || get.attitude)(current, player) < 0;
									});
									var card = { name: button.link[2], nature: button.link[3] };
									var val = _status.event.parent.type == 'phase' ? player.getUseValue(card) : 1;
									if (val <= 0) return 0;
									if (hasEnemy) {
										if (
											!player.countCards('h', function (cardx) {
												if (card.name == cardx.name) {
													if (card.name != 'sha') return true;
													return get.nature(card) == get.nature(cardx);
												}
												return false;
											})
										)
											return 0;
										return 3 * val;
									}
									return val;
								},
								backup(links, player) {
									return {
										viewAs: {
											name: links[0][2],
											nature: links[0][3],
											suit: 'none',
											number: null,
										},
										filterCard: false,
										position: 'hs',
										ai1(card) {
											var player = _status.event.player;
											var hasEnemy = game.hasPlayer(function (current) {
												return current != player && (get.realAttitude || get.attitude)(current, player) < 0;
											});
											var cardx = lib.skill.god_yuji_qianhuan_backup.viewAs;
											if (hasEnemy) {
												if (card.name == cardx.name && (card.name != 'sha' || card.nature == cardx.nature)) return 10;
												return 0;
											}
											return 6 - get.value(card);
										},
									};
								},
								prompt(links) {
									return '将一张手牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
								},
							},
							ai: {
								fireAttack: true,
								respondShan: true,
								respondSha: true,
								skillTagFilter(player) {
									if (!player.countCards('hs')) return false;
								},
								order: 10,
								result: {
									player: 1,
								},
							},
							subSkill: {
								judge: {
									audio: 'guhuo_guess',
									forced: true,
									trigger: {
										global: 'judge',
									},
									content() {
										'step 0';
										var str = '该' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【千幻】修改判定结果？';
										if (player.isUnderControl()) {
											game.swapPlayerAuto(player);
										}
										var switchToAuto = function () {
											_status.imchoosing = false;
											event._result = {
												bool: false,
											};
											if (event.dialog) event.dialog.close();
											if (event.control) event.control.close();
										};
										var chooseButton = function (player, str) {
											var event = _status.event;
											player = player || event.player;
											if (!event._result) event._result = {};
											var dialog = ui.create.dialog(str, 'forcebutton', 'hidden');
											event.dialog = dialog;
											dialog.addText('花色');
											var table = document.createElement('div');
											table.classList.add('add-setting');
											table.style.margin = '0';
											table.style.width = '100%';
											table.style.position = 'relative';
											var listi = ['spade', 'heart', 'club', 'diamond'];
											for (let i = 0; i < listi.length; i++) {
												var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
												td.link = listi[i];
												table.appendChild(td);
												td.innerHTML = '<span>' + get.translation(listi[i]) + '</span>';
												td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
													if (_status.dragged) return;
													if (_status.justdragged) return;
													_status.tempNoButton = true;
													setTimeout(function () {
														_status.tempNoButton = false;
													}, 500);
													var link = this.link;
													var current = this.parentNode.querySelector('.bluebg');
													if (current) {
														current.classList.remove('bluebg');
													}
													this.classList.add('bluebg');
													event._result.suit = link;
												});
											}
											dialog.content.appendChild(table);
											dialog.addText('点数');
											var table2 = document.createElement('div');
											table2.classList.add('add-setting');
											table2.style.margin = '0';
											table2.style.width = '100%';
											table2.style.position = 'relative';
											for (let i = 1; i < 14; i++) {
												var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
												td.link = i;
												table2.appendChild(td);
												var num = i;
												td.innerHTML = '<span>' + get.strNumber(num) + '</span>';
												td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
													if (_status.dragged) return;
													if (_status.justdragged) return;
													_status.tempNoButton = true;
													setTimeout(function () {
														_status.tempNoButton = false;
													}, 500);
													var link = this.link;
													var current = this.parentNode.querySelector('.bluebg');
													if (current) {
														current.classList.remove('bluebg');
													}
													this.classList.add('bluebg');
													event._result.number = link;
												});
											}
											dialog.content.appendChild(table2);
											dialog.add('　　');
											event.dialog.open();
											event.switchToAuto = function () {
												event._result = {
													bool: false,
												};
												event.dialog.close();
												event.control.close();
												game.resume();
												_status.imchoosing = false;
											};
											event.control = ui.create.control('ok', 'cancel2', function (link) {
												var result = event._result;
												if (link == 'cancel2') result.bool = false;
												else {
													if (!result.number || !result.suit) return;
													result.bool = true;
												}
												event.dialog.close();
												event.control.close();
												game.resume();
												_status.imchoosing = false;
											});
											for (let i = 0; i < event.dialog.buttons.length; i++) {
												event.dialog.buttons[i].classList.add('selectable');
											}
											game.pause();
											game.countChoose();
										};
										if (event.isMine()) {
											chooseButton(player, str);
										} else if (event.isOnline()) {
											event.player.send(chooseButton, event.player, str);
											event.player.wait();
											game.pause();
										} else {
											switchToAuto();
										}
										('step 1');
										var map = event.result || result;
										if (map.bool) {
											game.log(player, '将判定结果修改为了', '#g' + get.translation(result.suit + 2) + get.strNumber(result.number));
											trigger.fixedResult = {
												suit: result.suit,
												color: get.color({ suit: result.suit }),
												number: result.number,
											};
											player.popup(get.translation(result.suit + 2) + get.strNumber(result.number), 'thunder');
											event.getParent('arrangeTrigger').finish();
										}
									},
								},
							},
						},
						god_dianwei_shuangji: {
							audio: 'qiangxi',
							group: ['god_dianwei_shuangji_zuobuff', 'god_dianwei_shuangji_youbuff', 'god_dianwei_shuangji_shiji'],
							charlotte: true,
							superCharlotte: true,
							enable: 'phaseUse',
							filter(event, player) {
								return player.hasSkill('god_dianwei_shuangji_zuobuff') || player.hasSkill('god_dianwei_shuangji_youbuff');
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							async content(event, trigger, player) {
								const target = event.target;//QQQ
								event.addIndex = 0;
								var choiceList = [];
								if (player.hasSkill('god_dianwei_shuangji_zuobuff')) {
									choiceList.add('飞戟·左:对其造成1点伤害并令其获得「左戟·致残」效果(每使用一张牌时,弃置一张牌)');
								} else event.addIndex++;
								if (player.hasSkill('god_dianwei_shuangji_youbuff')) {
									choiceList.add('飞戟·右:对其造成1点伤害并令其获得「右戟·流血」效果(每个回合结束时,失去1点体力)');
								}
								if (choiceList.length) {
									const { control } = await player
										.chooseControl('cancel2')
										.set('prompt', '双戟主动技:请选择一项')
										.set('choiceList', choiceList)
										.set('ai', function (event) {
											if (get.attitude(_status.event.player, target) <= 0 && target.countCards('he') > 9) return 0;
											var player = _status.event.player,
												index = _status.event.parent.addIndex;
											if (
												game.hasPlayer(function (target) {
													return target != player && target.countCards('he') < 11 && get.attitude(player, target) <= 0;
												})
											) {
												return 1 - index;
											}
											return 'cancel2';
										}).forResult();
									if (control != 'cancel2') {
										if (control == '选项一') {
											lib.skill.god_dianwei_shuangji.group.remove('god_dianwei_shuangji_zuobuff');
											game.log('暂时失去「左戟·持有技」:当你受到伤害来源不为你的伤害时,你令此伤害-1');
											player.chat('飞戟·左(暂时失去「左戟·持有技」)!');
											target.damage();
											target.addSkill('god_dianwei_shuangji_zuodebuff');
										} else {
											lib.skill.god_dianwei_shuangji.group.remove('god_dianwei_shuangji_youbuff');
											game.log('暂时失去「右戟·持有技」:当你成为其他角色使用【杀】的目标后,你视为对其使用一张【杀】');
											player.chat('飞戟·右(暂时失去「右戟·持有技」)!');
											target.damage();
											target.addSkill('god_dianwei_shuangji_youdebuff');
										}
									}
								}
							},
							ai: {
								order: 1,
								result: {
									target: -1.5,
								},
								tag: {
									damage: 1,
								},
							},
							subSkill: {
								zuobuff: {
									audio: 'qiexie',
									forced: true,
									mark: 'card',
									marktext: '左',
									intro: {
										name: '左戟·持有技',
										content: '当你受到伤害来源不为你的伤害时,你令此伤害-1',
									},
									trigger: {
										player: 'damageBegin',
									},
									filter(event, player) {
										if (event.source == player) {
											return false;
										}
										return true;
									},//QQQ
									content() {
										trigger.num--;
									},
								},
								zuodebuff: {
									forced: true,
									mark: 'card',
									marktext: '左',
									intro: {
										name: '左戟·致残',
										content: '每使用一张牌时弃置一张牌',
									},
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										return player.countCards('he') > 0;
									},
									content() {
										player.chooseToDiscard('he', true);
									},
								},
								youbuff: {
									audio: 'juanjia',
									forced: true,
									mark: 'card',
									marktext: '右',
									intro: {
										name: '右戟·持有技',
										content: '当你成为其他角色使用【杀】的目标后,你视为对其使用一张【杀】',
									},
									trigger: {
										target: 'useCardToAfter',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										player.useCard({ name: 'sha' }, trigger.player, false);
									},
								},
								youdebuff: {
									forced: true,
									mark: 'card',
									marktext: '右',
									intro: {
										name: '右戟·流血',
										content: '每个回合结束时失去1点体力',
									},
									trigger: {
										global: 'phaseAfter',
									},
									filter(event, player) {
										return player.hp > 0;
									},
									content() {
										player.loseHp();
									},
								},
								shiji: {
									audio: 'cuijue',
									forced: true,
									trigger: {
										global: 'die',
									},
									filter(event, player) {
										return event.player.hasSkill('god_dianwei_shuangji_zuodebuff') || event.player.hasSkill('god_dianwei_shuangji_youdebuff');
									},
									content() {
										if (trigger.player.hasSkill('god_dianwei_shuangji_zuodebuff')) {
											lib.skill.god_dianwei_shuangji.group.add('god_dianwei_shuangji_zuobuff');
											game.log('重新获得「左戟·持有技」:当你受到伤害来源不为你的伤害时,你令此伤害-1');
											player.chat('我的铁戟(左)抵我两年半的军饷!');
										}
										if (trigger.player.hasSkill('god_dianwei_shuangji_youdebuff')) {
											lib.skill.god_dianwei_shuangji.group.add('god_dianwei_shuangji_youbuff');
											game.log('重新获得「右戟·持有技」:当你成为其他角色使用【杀】的目标后,你视为对其使用一张【杀】');
											player.chat('我的铁戟(右)换钱够我两年半顿顿有大肉包子吃!');
										}
									},
								},
							},
						},
						god_zhangxiu_huaqiang: {
							audio: 'ext:RE高达/audio:2',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: 'shaAfter',
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								var next = player.chooseCardTarget({
									position: 'h',
									filterTarget(card, player, target) {
										return lib.filter.targetEnabled({ name: 'sha' }, player, target);
									},
									filterCard: true,
									ai1(card) {
										return get.unuseful(card) + 9;
									},
									ai2(target) {
										return get.effect(target, { name: 'sha' }, player);
									},
									prompt: get.prompt('god_zhangxiu_huaqiang'),
								});
								('step 1');
								if (result.targets?.length) {
									player.useCard({ name: 'sha' }, result.cards, result.targets, false);
								}
							},
						},
						god_zhangxiu_chaohuang: {
							audio: 'ext:RE高达/audio:1',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								if (event._notrigger.includes(event.player)) return false;
								return event.player.isAlive() && event.player != player;
							},
							content() {
								'step 0';
								player.judge(function (card) {
									return card.suit == 'club' ? 1 : -1;
								});
								('step 1');
								if (result.bool) {
									trigger.player.damage();
								}
							},
						},
						god_wangyue_yulong: {
							audio: 'twyulong',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								target: 'useCardToBefore',
							},
							filter(event, player) {
								return event.player != player && player.countMark('god_wangyue_jianming') > 0;
							},
							content() {
								'step 0';
								player.removeMark('god_wangyue_jianming');
								('step 1');
								trigger.target = trigger.player;
								trigger.player = player;
								trigger.untrigger();
								trigger.trigger('useCardToBefore');
							},
							ai: {
								result: {
									target: -2,
									player: 1,
								},
							},
						},
						god_wangyue_jianming: {
							audio: 'twjianming',
							group: ['god_wangyue_jianming_buff', 'god_wangyue_jianming_debuff'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							marktext: '剑',
							intro: {
								name: '剑鸣',
								content: '已凝聚#道剑意',
							},
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.player != player;
							},
							content() {
								player.addMark('god_wangyue_jianming');
							},
							subSkill: {
								debuff: {
									forced: true,
									trigger: {
										player: 'damageEnd',
									},
									filter(event, player) {
										return event.source && event.source != player && player.countMark('god_wangyue_jianming') > 0;
									},
									content() {
										player.removeMark('god_wangyue_jianming');
									},
								},
								buff: {
									audio: 'twjianming',
									forced: true,
									trigger: {
										player: 'useCardToTargeted',
									},
									filter(event, player) {
										return event.card && event.card.name == 'sha';
									},
									content() {
										var map = trigger.customArgs;
										var id = trigger.target.playerid;
										if (!map[id]) map[id] = {};
										if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
										map[id].extraDamage += player.countMark('god_wangyue_jianming');
									},
								},
							},
						},
						god_simayi_yinren: {
							audio: 'renjie2',
							group: ['god_simayi_yinren_achieve', 'god_simayi_yinren_fail'],
							derivation: ['god_simayi_guijin', 'god_simayi_tanlang'],
							charlotte: true,
							superCharlotte: true,
							dutySkill: true,
							marktext: '忍',
							intro: {
								name: '隐忍',
								content: '成功隐忍#次',
							},
							trigger: {
								player: 'damageBefore',
							},
							filter(event, player) {
								return event.source != player && (player.maxHp > 1 || player.countCards('he') > 2);
							},
							check(event, player) {
								return game.roundNumber >= 0;
							},
							prompt2: '是否弃置三张牌(不足则改为失去1点体力上限)并取消此次伤害？',
							content() {
								'step 0';
								if (player.countCards('he') > 2) {
									player.chooseToDiscard('he', 3, true);
								} else player.loseMaxHp();
								('step 1');
								player.addMark('god_simayi_yinren');
								trigger.cancel();
							},
							subSkill: {
								achieve: {
									audio: 'buchen',
									dutySkill: true,
									forced: true,
									trigger: {
										player: 'phaseZhunbeiBegin',
									},
									filter(event, player) {
										return game.roundNumber > 1 && player.countMark('god_simayi_yinren') > 2;
									},
									content() {
										player.awakenSkill('god_simayi_yinren');
										game.log(player, '成功完成使命');
										player.addSkill('god_simayi_guijin');
										player.addSkill('god_simayi_tanlang');
										player.addMark('god_simayi_guijin_sanjia');
										player.unmarkSkill('god_simayi_yinren');
									},
								},
								fail: {
									audio: 'ext:RE高达/audio:1',
									dutySkill: true,
									forced: true,
									trigger: {
										global: 'phaseEnd',
									},
									filter(event, player) {
										return game.roundNumber <= 1 && !player.isHealthy();
									},
									content() {
										player.awakenSkill('god_simayi_yinren');
										game.log(player, '使命失败,黯然退场');
										const next = game.createEvent('diex', false);
										next.source = player;
										next.player = player;
										next._triggered = null;
										next.restMap = { type: null, count: null, audio: null };
										next.excludeMark = [];
										next.setContent('die');
										player.delete();
										player.remove();
									},
								},
							},
						},
						god_simayi_guijin: {
							audio: 'quanbian',
							group: ['god_simayi_guijin_gui', 'god_simayi_guijin_jin'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return player.hasMark('god_simayi_guijin_sanjia');
							},
							content() {
								'step 0';
								player.removeMark('god_simayi_guijin_sanjia');
								player.unmarkSkill('god_simayi_guijin_sanjia');
								player.chooseTarget('归晋:选择一名其他角色获得<魏>', lib.filter.notMe, true).set('ai', (target) => {
									return -get.attitude(get.player(), target);
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'water');
									lib.skill.god_simayi_guijin.addMark('wei', player, target);
									event.target = target;
								} else event.finish();
								('step 2');
								if (
									game.hasPlayer((current) => {
										return current != player && current != target;
									})
								) {
									player
										.chooseTarget(
											'归晋:选择一名其他角色获得<蜀>',
											function (card, player, target) {
												return target != player && target != _status.event.parent.target;
											},
											true
										)
										.set('ai', (target) => {
											return -get.attitude(get.player(), target);
										});
								} else event.finish();
								('step 3');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'fire');
									lib.skill.god_simayi_guijin.addMark('shu', player, target);
								}
								('step 4');
								if (
									game.hasPlayer((current) => {
										return current != player && current != target && !current.hasMark('god_simayi_guijin_wei') && !current.hasMark('god_simayi_guijin_shu');
									})
								) {
									player
										.chooseTarget(
											'归晋:选择一名其他角色获得<吴>',
											function (card, player, target) {
												return target != player && target != _status.event.parent.target && !target.hasMark('god_simayi_guijin_shu');
											},
											true
										)
										.set('ai', (target) => {
											return -get.attitude(get.player(), target);
										});
								} else event.finish();
								('step 5');
								if (result.targets?.length) {
									var target = result.targets[0];
									player.line(target, 'green');
									lib.skill.god_simayi_guijin.addMark('wu', player, target);
								}
							},
							hasMark(mark, player, target) {
								if (!target) return player.getStorage('god_simayi_guijin_' + mark).length;
								return target.getStorage('god_simayi_guijin_' + mark).includes(player);
							},
							addMark(mark, player, target) {
								mark = 'god_simayi_guijin_' + mark;
								target.addAdditionalSkill(`${mark}_${player.playerid}`, mark);
								target.markAuto(mark, [player]);
							},
							subSkill: {
								wei: {
									forced: true,
									marktext: '魏',
									intro: {
										name: '魏',
										content: '你的回合结束时,你失去1点体力上限',
										nocount: true,
									},
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										player.loseMaxHp();
									},
								},
								jinwei: {
									mark: true,
									marktext: '魏',
									intro: {
										name: '贪狼吞魏',
										content: '魏之气运已被吞噬',
										nocount: true,
									},
								},
								shu: {
									forced: true,
									marktext: '蜀',
									intro: {
										name: '蜀',
										content: '你获得牌后,弃置一张牌',
										nocount: true,
									},
									trigger: {
										player: 'gainAfter',
									},
									content() {
										player.chooseToDiscard('he', true);
									},
								},
								jinshu: {
									mark: true,
									marktext: '蜀',
									intro: {
										name: '贪狼吞蜀',
										content: '蜀之气运已被吞噬',
										nocount: true,
									},
								},
								wu: {
									forced: true,
									marktext: '吴',
									intro: {
										name: '吴',
										content: '当你于回合内使用一张牌后,结束此回合',
										nocount: true,
									},
									trigger: {
										player: 'useCardAfter',
									},
									filter(event, player) {
										return player.isPhaseUsing();
									},
									content() {
										var evt = _status.event.getParent('phaseUse');
										if (evt && evt.name == 'phaseUse') {
											evt.skipped = true;
										}
									},
								},
								jinwu: {
									mark: true,
									marktext: '吴',
									intro: {
										name: '贪狼吞吴',
										content: '吴之气运已被吞噬',
										nocount: true,
									},
								},
								sanjia: {
									marktext: '三',
									intro: {
										name: '三家',
										content: '谋划三家气运,天下归晋一统',
										nocount: true,
									},
								},
								gui: {
									forced: true,
									trigger: {
										global: 'die',
									},
									filter(event, player) {
										return event.player.hasMark('god_simayi_guijin_wei') || event.player.hasMark('god_simayi_guijin_shu') || event.player.hasMark('god_simayi_guijin_wu');
									},
									content() {
										if (trigger.player.hasMark('god_simayi_guijin_wei')) {
											player.addMark('god_simayi_guijin_jinwei');
										}
										if (trigger.player.hasMark('god_simayi_guijin_shu')) {
											player.addMark('god_simayi_guijin_jinshu');
										}
										if (trigger.player.hasMark('god_simayi_guijin_wu')) {
											player.addMark('god_simayi_guijin_jinwu');
										}
									},
								},
								jin: {
									forced: true,
									mark: true,
									marktext: '晋',
									intro: {
										name: '晋',
										content: 'mark',
										nocount: true,
									},
									trigger: {
										global: 'dieAfter',
									},
									filter(event, player) {
										return player.hasMark('god_simayi_guijin_jinwei') && player.hasMark('god_simayi_guijin_jinshu') && player.hasMark('god_simayi_guijin_jinwu');
									},
									content() {
										'step 0';
										player.unmarkSkill('god_simayi_guijin_jinwei');
										player.unmarkSkill('god_simayi_guijin_jinshu');
										player.unmarkSkill('god_simayi_guijin_jinwu');
										('step 1');
										player.addMark('god_simayi_guijin_jin');
										('step 2');
										if (player.hasMark('god_simayi_guijin_jin')) {
											game.over(true);
										}
									},
								},
							},
						},
						god_simayi_tanlang: {
							audio: 'ext:RE高达/audio:2',
							group: ['god_simayi_tanlang_wei', 'god_simayi_tanlang_shu', 'god_simayi_tanlang_wu'],
							subSkill: {
								wei: {
									audio: 'ext:RE高达/audio/god_simayi_tanlang1.mp3',
									forced: true,
									trigger: {
										global: 'loseMaxHpAfter',
									},
									filter(event, player) {
										return event.player.hasMark('god_simayi_guijin_wei') && event.player != player;
									},
									content() {
										player.gainMaxHp();
										player.recover();
									},
								},
								shu: {
									audio: 'ext:RE高达/audio/god_simayi_tanlang1.mp3',
									forced: true,
									trigger: {
										global: 'loseAfter',
									},
									filter(event, player) {
										return event.player.hasMark('god_simayi_guijin_shu') && event.player != player;
									},
									content() {
										player.gain(trigger.cards, 'gain2');
									},
								},
								wu: {
									audio: 'ext:RE高达/audio/god_simayi_tanlang2.mp3',
									forced: true,
									trigger: {
										global: 'phaseAfter',
									},
									filter(event, player) {
										return event.player.hasMark('god_simayi_guijin_wu') && event.player != player;
									},
									content() {
										player.phase('nodelay');
									},
								},
							},
						},
						god_zhangliang_jijun: {
							audio: 'xinfu_jijun',
							group: ['god_zhangliang_jijun_lei', 'god_zhangliang_jijun_jia1', 'god_zhangliang_jijun_jia2'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'useCard',
							},
							content() {
								player.changeHujia();
							},
							subSkill: {
								lei: {
									audio: 'ext:RE高达/audio/god_zhangliang_jijun_lei1.mp3',
									forced: true,
									trigger: {
										global: 'loseEnd',
									},
									filter(event, player) {
										var numa = Math.random();
										return numa < 0.36;
									},
									content() {
										trigger.player.damage(1, 'thunder');
										player.chat('三十六方,雷电烁');
									},
								},
								jia1: {
									forced: true,
									trigger: {
										player: 'damageBegin4',
									},
									filter(event, player) {
										return event.nature == 'thunder';
									},
									content() {
										var abc = trigger.num;
										trigger.cancel();
										player.changeHujia(abc);
									},
									ai: {
										nofire: true,
										effect: {
											target(card, player, target, current) {
												if (get.tag(card, 'thunderDamage')) return 'zerotarget';
											},
										},
									},
								},
								jia2: {
									forced: true,
									trigger: {
										source: 'damageAfter',
									},
									filter(event, player) {
										if (event.nature == 'thunder') return true;
									},
									content() {
										var abc = trigger.num;
										player.changeHujia(abc);
									},
								},
							},
						},
						god_zhangliang_fangtong: {
							audio: 'xinfu_fangtong',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							limited: true,
							trigger: {
								player: 'phaseAfter',
							},
							filter(event, player) {
								return player.hujia >= 36;
							},
							content() {
								'step 0';
								player.awakenSkill('god_zhangliang_fangtong');
								('step 1');
								game.over(true);
							},
						},
						god_liuqi_wenji: {
							audio: 'spwenji',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current != player;
								});
							},
							content() {
								'step 0';
								player
									.chooseTarget(get.prompt2('god_liuqi_wenji'), function (card, player, target) {
										return target != player && target.countCards('he');
									})
									.set('ai', function (target) {
										var att = get.attitude(_status.event.player, target);
										if (att > 0) return Math.sqrt(att) / 10;
										return 1 - att;
									});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									target.chooseCard('he', '将一张牌交给' + get.translation(player));
								} else {
									event.finish();
								}
								('step 2');
								if (result.bool) {
									player.addTempSkill('god_liuqi_wenji_respond');
									player.storage.god_liuqi_wenji_respond = result.cards[0].name;
									event.target.give(result.cards, player, true);
								}
								('step 3');
								var list = target.getStockSkills(true, true).filter(function (skill) {
									var info = get.info(skill);
									return info;
								});
								var skills = player.getSkills();
								list = list.filter((item) => !skills.includes(item));
								if (!list.length) {
									game.log(target, '没有技能可以教给', player);
									player.chat('就这？就这？就这？');
									event.finish();
								} else
									target
										.chooseControl(list)
										.set('prompt', '选择令' + get.translation(player) + '获得一个技能')
										.set('ai', function () {
											return list.randomGet();
										});
								('step 4');
								if (result.control) {
									player.addSkillLog(result.control);
									game.broadcastAll(function (skill) {
										var list = [skill];
										game.expandSkills(list);
										for (const i of list) {
											var info = lib.skill[i];
											if (!info) continue;
										}
									}, result.control);
								}
							},
							subSkill: {
								respond: {
									audio: 'spwenji',
									forced: true,
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										return event.card && event.card.name == player.storage.god_liuqi_wenji_respond;
									},
									content() {
										trigger.directHit.addArray(
											game.filterPlayer(function (current) {
												return current != player;
											})
										);
									},
								},
							},
							ai: {
								order: 1,
								result: {
									player: 1,
									target: -1,
								},
							},
						},
						god_liuqi_tunjiang: {
							audio: 'sptunjiang',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								global: 'phaseJieshuBegin',
							},
							content() {
								player.draw(game.countGroup());
							},
						},
						god_yujin_zhenjun: {
							audio: 'xinzhenjun',
							group: ['god_yujin_zhenjun_xin'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return game.hasPlayer(function (current) {
									return current.countCards('he') > 0;
								});
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('god_yujin_zhenjun'), '弃置一名角色所有牌,你与其各摸一张牌').ai = function (target) {
									return -get.attitude(_status.event.player, target) * (target.countCards('e') + 1);
								};
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									var num = target.countCards('he');
									player.discardPlayerCard(num, target, true);
								}
								('step 2');
								player.draw();
								target.draw();
							},
							subSkill: {
								xin: {
									audio: true,
									forced: true,
									trigger: {
										player: 'phaseUseBegin',
									},
									filter(event, player) {
										return player.countCards('he') > 0;
									},
									content() {
										'step 0';
										player.chooseCardTarget({
											filterCard: true,
											filterTarget: lib.filter.notMe,
											position: 'he',
											prompt: '是否发动【镇军】？',
											prompt2: '你可以将一张牌交给一名其他角色,令其选择是否使用一张不为黑色的【杀】.若其选择是,则你于此【杀】结算完成后摸1+X张牌(X为此【杀】造成的伤害总点数).若其选择否,则你对其或其攻击范围内的一名其他角色造成1点伤害',
											ai1(card) {
												var player = _status.event.player;
												if (card.name == 'sha' && get.color(card) == 'red') {
													for (const i of game.players) {
														var current = i;
														if (current != player && get.attitude(player, current) > 0 && current.hasValueTarget(card)) return 7;
													}
													return 0;
												}
												return 7 - get.value(card);
											},
											ai2(target) {
												var player = _status.event.player;
												var card = ui.selected.cards[0];
												var att = get.attitude(player, target);
												if (get.value(card) < 0) return -att * 2;
												if (target.countCards('h', { name: 'sha', color: 'red' }) || target.hasSkill('wusheng') || target.hasSkill('new_rewusheng') || target.hasSkill('wushen') || (card.name == 'sha' && get.color(card) == 'red' && target.hasValueTarget(card))) return att * 2;
												var eff = 0;
												game.countPlayer(function (current) {
													if (target != current && get.distance(target, current, 'attack') > 1) return;
													var eff2 = get.damageEffect(current, player, player);
													if (eff2 > eff) eff = eff2;
												});
												if (att > 0 && eff > 0) eff += 2 * att;
												return eff;
											},
										});
										('step 1');
										if (result.targets?.length) {
											var target = result.targets[0];
											event.target = target;
											target.gain(result.cards, player, 'giveAuto');
										} else event.finish();
										('step 2');
										target.chooseToUse({
											filterCard(card, player) {
												return card.name == 'sha' && get.color(card) != 'black' && lib.filter.cardEnabled.apply(this, arguments);
											},
											prompt: '请使用一张不为黑色的【杀】,否则' + get.translation(player) + '可以对你或你攻击范围内的一名其他角色造成1点伤害',
										});
										('step 3');
										if (result.bool) {
											var num = 1;
											game.countPlayer2(function (current) {
												current.getHistory('damage', function (evt) {
													if (evt.getParent(evt.notLink() ? 4 : 8) == event) num += evt.num;
												});
											});
											player.draw(num);
											event.finish();
										} else {
											player
												.chooseTarget('是否对' + get.translation(target) + '或其攻击范围内的一名角色造成1点伤害？', function (card, player, target) {
													return target == _status.event.targetx || _status.event.targetx.inRange(target);
												})
												.set('targetx', event.target).ai = function (target) {
													var player = _status.event.player;
													return get.damageEffect(target, player, player);
												};
										}
										('step 4');
										if (result.targets?.length) {
											player.line(result.targets);
											result.targets[0].damage('nocard');
										}
									},
								},
							},
						},
						god_yujin_jieyue: {
							audio: 'rejieyue',
							group: ['god_yujin_jieyue_xin'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'phaseJieshuBegin',
							},
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							content() {
								'step 0';
								player.chooseCardTarget({
									prompt: '是否发动【节钺】？',
									prompt2: '将一张牌交给一名其他角色,其选择一项:1.令你摸四张牌;2.保留一张手牌和装备区的牌,弃置其余的牌并失去1点体力上限',
									filterCard: true,
									position: 'he',
									filterTarget: lib.filter.notMe,
									ai1(card) {
										var player = _status.event.player;
										if (card.name == 'du') return 20;
										if (get.position(card) == 'e' && get.value(card) <= 0) return 14;
										if (
											get.position(card) == 'h' &&
											game.hasPlayer(function (current) {
												return current != player && get.attitude(player, current) > 0 && current.getUseValue(card) > player.getUseValue(card) && current.getUseValue(card) > player.getUseValue(card);
											})
										)
											return 12;
										if (
											game.hasPlayer(function (current) {
												return current != player && get.attitude(player, current) > 0;
											})
										) {
											if (card.name == 'wuxie') return 11;
											if (card.name == 'shan' && player.countCards('h', 'shan') > 1) return 9;
										}
										return 6 / Math.max(1, get.value(card));
									},
									ai2(target) {
										var player = _status.event.player;
										var card = ui.selected.cards[0];
										var att = get.attitude(player, target);
										if (card.name == 'du') return -6 * att;
										if (att > 0) {
											if (get.position(card) == 'h' && target.getUseValue(card) > player.getUseValue(card)) return 4 * att;
											if (get.value(card, target) > get.value(card, player)) return 2 * att;
											return 1.2 * att;
										}
										return (-att * Math.min(4, target.countCards('he'))) / 4;
									},
								});
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									target.gain(result.cards, player, 'giveAuto');
								} else event.finish();
								('step 2');
								var num = 0;
								if (target.countCards('h')) num++;
								if (target.countCards('e')) num++;
								if (num > 0) {
									var next = target.chooseCard('he', num, '选择保留每个区域的各一张牌,弃置其余的牌并失去1点体力上限.或点取消,令' + get.translation(player) + '摸四张牌', function (card) {
										if (Array.isArray(ui.selected.cards))
											for (const i of ui.selected.cards) {
												if (get.position(i) == get.position(card)) return false;
											}
										return true;
									});
									next.set('complexCard', true);
									next.set('goon', get.attitude(target, player) >= 0);
									next.set('maxNum', num);
									next.set('ai', function (card) {
										if (_status.event.goon) return -1;
										var num = _status.event.maxNum;
										if (ui.selected.cards.length >= num - 1) {
											var val = get.value(
												player.getCards('he', function (cardx) {
													return cardx != card && !ui.selected.cards.includes(cardx);
												})
											);
											if (val >= 14) return 0;
										}
										return get.value(card);
									});
								} else event._result = { bool: false };
								('step 3');
								if (!result.bool) player.draw(4);
								else {
									var cards = target.getCards('he');
									cards.removeArray(result.cards);
									if (cards.length) target.discard(cards);
									target.loseMaxHp();
								}
							},
							subSkill: {
								xin: {
									audio: 'sbjieyue',
									forced: true,
									trigger: {
										global: 'phaseJieshuBegin',
									},
									filter(event, player) {
										return event.player != player && event.player.countCards('h') > 0;
									},
									content() {
										'step 0';
										trigger.player.chooseCard('交给' + get.translation(player) + '一张手牌', true).ai = function (card) {
											if (get.attitude(trigger.player, player) > 0) {
												return get.value(card);
											} else {
												return -get.value(card);
											}
										};
										('step 1');
										if (result.cards?.length) {
											player.gain(result.cards[0]);
											trigger.player.$give(1, player);
										}
										if (player.hujia < 3) {
											player.changeHujia();
										} else game.log('已达到护甲上限');
									},
								},
							},
							ai: {
								threaten: 1.3,
								expose: 0.2,
								order: 10,
								result: {
									player: 1,
									target: -1,
								},
							},
						},
						god_yujin_yizhong: {
							audio: 'yizhong',
							group: ['god_yujin_yizhong_wuxie'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								target: 'useCardToTargeted',
							},
							filter(event, player) {
								if (get.color(event.card) != 'black') return false;
								return event.player != player;
							},
							content() {
								trigger.parent.excluded.add(player);
							},
							subSkill: {
								wuxie: {
									enable: 'chooseToUse',
									prompt: '将一张黑色手牌当无懈可击使用',
									filterCard(card, player) {
										return get.color(card) == 'black';
									},
									viewAsFilter(player) {
										return player.countCards('h', { color: 'black' }) > 0;
									},
									viewAs: {
										name: 'wuxie',
									},
									check(card) {
										return 8 - get.value(card);
									},
									ai3: {
										basic: {
											useful: [6, 4],
											value: [6, 4],
										},
										result: {
											player: 1,
										},
										expose: 0.2,
									},
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
							},
							ai: {
								nodamage: true,
								effect: {
									target(card, player, target, current) {
										if (get.color(card, 'red')) return [0, 0];
									},
								},
							},
						},
						god_dingfeng_duanbing: {
							audio: 'duanbing',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								return game.hasPlayer(function (current) {
									return !event.targets.includes(current) && get.distance(player, current) <= 1 && player.canUse(event.card, current);
								});
							},
							content() {
								var targets = game.filterPlayer(function (current) {
									return get.distance(player, current) <= 1 && current != player;
								});
								if (targets.length) game.log(targets, '成为目标');
								for (let i = 0; i < targets.length; i++) {
									trigger.targets.push(targets[i]);
								}
							},
						},
						god_dingfeng_fenxun: {
							audio: 'fenxun',
							group: ['god_dingfeng_fenxun_compare', 'god_dingfeng_fenxun_comparenum'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							enable: 'chooseCard',
							filter(event, player) {
								return event.type == 'compare' && !event.directresult;
							},
							check(event, player) {
								var player = _status.event.player;
								return !player.hasCard(function (card) {
									var val = get.value(card);
									return val < 0 || (val <= 4 && card.number >= 11);
								}, 'h')
									? 20
									: 0;
							},
							onCompare(player) {
								return game.cardsGotoOrdering(get.cards()).cards;
							},
							subSkill: {
								compare: {
									enable: 'phaseUse',
									usable: 1,
									filterTarget(card, player, target) {
										return player.canCompare(target);
									},
									selectTarget() {
										return [1, _status.event.player.maxHp];
									},
									multiline: true,
									multitarget: true,
									prompt: '请选择你拼点的目标',
									content() {
										player.chooseToCompare(targets).callback = lib.skill.god_dingfeng_fenxun_compare.callback;
									},
									callback() {
										'step 0';
										if (event.num1 > event.num2) {
											target.addTempSkill('fengyin');
											target.markAuto('god_dingfeng_fenxun_distance', player);
											target.addTempSkill('god_dingfeng_fenxun_distance');
										}
										('step 1');
										if (event.num1 <= event.num2) {
											player.draw();
											target.draw(2);
										}
									},
								},
								comparenum: {
									forced: true,
									trigger: {
										player: 'compare',
										target: 'compare',
									},
									filter(event, player) {
										return !event.iwhile;
									},
									content() {
										if (player == trigger.player) {
											trigger.num1 += 5;
											if (trigger.num1 > 13) trigger.num1 = 13;
										} else {
											trigger.num2 += 5;
											if (trigger.num2 > 13) trigger.num2 = 13;
										}
									},
								},
								distance: {
									mark: true,
									marktext: '奋',
									intro: {
										name: '奋迅',
										nocount: true,
										content: '$至你的距离视为1',
									},
									mod: {
										globalTo(from, to, distance) {
											return -Infinity;
										},
									},
								},
							},
							ai: {
								order: 10,
								result: {
									player: 1,
									target: -1,
								},
							},
						},
						god_dingfeng_bozhan: {
							audio: 'ext:RE高达/audio:2',
							group: ['god_dingfeng_bozhan_buff'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								source: 'damageEnd',
							},
							filter(event, player) {
								return event.player != player;
							},
							content() {
								trigger.player.addTempSkill('god_dingfeng_bozhan_debuff1', { player: 'phaseAfter' });
								trigger.player.addTempSkill('god_dingfeng_bozhan_debuff2', { player: 'phaseAfter' });
							},
							subSkill: {
								buff: {
									forced: true,
									trigger: {
										global: 'loseHpBegin',
									},
									content() {
										player.gainMaxHp();
										player.recover();
										player.draw();
									},
								},
								debuff1: {
									forced: true,
									mark: true,
									marktext: '竭',
									intro: {
										name: '力竭',
										content(storage, player) {
											var a = player.hp;
											var b = player.countMark('god_dingfeng_bozhan_debuff1');
											return '使用或打出至多' + a + '张牌,当前已使用或打出' + b + '张,不能使用延时锦囊牌且回合结束失去1点体力,';
										},
									},
									trigger: {
										player: 'useCard1',
									},
									content() {
										player.addMark('god_dingfeng_bozhan_debuff1');
									},
									mod: {
										cardEnabled(card, player) {
											if (player.countMark('god_dingfeng_bozhan_debuff1') >= player.hp) return false;
										},
										cardUsable(card, player) {
											if (player.countMark('god_dingfeng_bozhan_debuff1') >= player.hp) return false;
										},
										cardRespondable(card, player) {
											if (player.countMark('god_dingfeng_bozhan_debuff1') >= player.hp) return false;
										},
										playerEnabled(card, player, target) {
											if (get.type(card) == 'delay') return false;
										},
									},
								},
								debuff2: {
									forced: true,
									trigger: {
										player: 'phaseEnd',
									},
									content() {
										player.loseHp();
										player.removeMark('god_dingfeng_bozhan_debuff1', player.countMark('god_dingfeng_bozhan_debuff1'));
										player.unmarkSkill('god_dingfeng_bozhan_debuff1');
									},
								},
							},
						},
						god_lvmeng_keji: {
							audio: 'sbkeji',
							group: ['god_lvmeng_keji_hujia'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'phaseDiscardBefore',
							},
							content() {
								trigger.cancel();
							},
							subSkill: {
								hujia: {
									forced: true,
									popup: false,
									nopup: true,
									trigger: {
										player: 'phaseUseAfter',
									},
									filter(event, player) {
										if (player.getHistory('skipped').includes('phaseUse')) return true;
										var history = player.getHistory('useCard').concat(player.getHistory('respond'));
										for (let i = 0; i < history.length; i++) {
											if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
										}
										return true;
									},
									content() {
										var cards = player.countCards('h');
										player.changeHujia(cards);
									},
								},
							},
						},
						god_lvmeng_dujiang: {
							audio: 'sbdujiang',
							derivation: ['god_lvmeng_duojing'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							juexingji: true,
							trigger: {
								player: 'phaseZhunbeiBegin',
							},
							filter(event, player) {
								return player.hujia >= 5;
							},
							content() {
								player.awakenSkill('god_lvmeng_dujiang');
								player.addSkillLog('god_lvmeng_duojing');
							},
						},
						god_lvmeng_duojing: {
							audio: 'sbduojing',
							charlotte: true,
							superCharlotte: true,
							logTarget: 'target',
							trigger: {
								player: 'useCardToPlayer',
							},
							filter(event, player) {
								return player.hujia > 0 && event.card.name == 'sha';
							},
							check(event, player) {
								return event.target.countGainableCards(player, 'he') > 0 || player.countCards('hs', { name: 'sha' }) > 0;
							},
							content() {
								'step 0';
								player.changeHujia(-1);
								if (!trigger.card.storage) trigger.card.storage = {};
								trigger.card.storage.god_lvmeng_duojing = true;
								('step 1');
								var target = trigger.target;
								if (target.countGainableCards(player, 'he') > 0) player.gainPlayerCard(target, 'he', true);
								player.addTempSkill('god_lvmeng_duojing_add', 'phaseUseAfter');
								player.addMark('god_lvmeng_duojing_add');
								player.markSkill('god_lvmeng_duojing_add');
							},
							subSkill: {
								add: {
									marktext: '夺',
									intro: {
										nocount: true,
										content: '本阶段使用杀无次数限制',
									},
									mod: {
										cardUsable(card, player, num) {
											if (card.name == 'sha') return Infinity;
										},
									},
								},
							},
							ai: {
								unequip: true,
								unequip: true,
								skillTagFilter(player, tag, arg) {
									if (player.hujia <= 0) return;
									if (tag == 'unequip' && (!arg || !arg.card || !arg.card.storage || !arg.card.storage.god_lvmeng_duojing)) return false;
									if (tag == 'unequip' && (!arg || arg.name != 'sha')) return false;
								},
							},
						},
						god_ganning_qixi: {
							audio: 'sbqixi',
							charlotte: true,
							superCharlotte: true,
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h') > 0 && (player.getStat('skill').god_ganning_qixi || 0) < game.countPlayer();
							},
							filterTarget(card, player, target) {
								return player != target;
							},
							content() {
								'step 0';
								event.list = lib.suit.slice();
								event.suits = [];
								event.num = 0;
								var cards = player.getCards('h'),
									map = {},
									max = -Infinity;
								for (var card of cards) {
									var suit = card.suit;
									if (!map[suit]) map[suit] = 0;
									map[suit]++;
									if (map[suit] > max) max = map[suit];
								}
								for (var i in map) {
									if (map[i] == max) event.suits.push(i);
								}
								('step 1');
								target
									.chooseControl(event.list)
									.set('prompt', '奇袭:猜测' + get.translation(player) + '手牌中最多的花色')
									.set('ai', () => {
										var player = _status.event.parent.player,
											controls = _status.event.controls;
										if (player.countCards('h') <= 3 && controls.includes('diamond') && Math.random() < 0.3) return 'diamond';
										return controls.randomGet();
									});
								('step 2');
								var control = result.control;
								target.chat('我猜是' + get.translation(control) + '!');
								game.log(target, '猜测为', '#y' + control);
								('step 3');
								var control = result.control;
								if (!event.suits.includes(control)) {
									player.chat('猜错了!');
									game.log(target, '猜测', '#y错误');
									event.num++;
									event.list.remove(control);
									player.chooseBool('是否令其重新选择一个花色继续猜测？').set('ai', () => 1);
								} else {
									player.chat(event.num == 0 ? '这么准？' : '猜对了!');
									game.log(target, '猜测', '#g正确');
									target.draw();
									player.discard(player.getCards('h'));
									player.draw(target.countCards('h') + 1);
									player.chat('怎么了？我就是玩不起怎么了？');
									event.goto(4);
								}
								('step 4');
								if (result.bool) {
									event.goto(1);
								}
								('step 5');
								if (event.num > 0 && target.countDiscardableCards(player, 'hej')) {
									player.line(target);
									player.discardPlayerCard(target, event.num, true, 'hej');
								}
							},
							ai: {
								order: 10,
								result: {
									player: 1,
									target(player, target) {
										return get.effect(target, { name: 'guohe' }, player, target) * (5 - get.attitude(player, target) / 2);
									},
								},
							},
						},
						god_ganning_fenwei: {
							audio: 'sbfenwei',
							charlotte: true,
							superCharlotte: true,
							position: 'he',
							delay: false,
							discard: false,
							lose: false,
							complexSelect: true,
							multitarget: true,
							multiline: true,
							enable: 'phaseUse',
							usable: 1,
							filter(event, player) {
								return player.countCards('he') > 0;
							},
							filterCard: true,
							selectCard: [1, 3],
							filterTarget: true,
							selectTarget() {
								return ui.selected.cards.length;
							},
							filterOk() {
								return ui.selected.targets.length == ui.selected.cards.length;
							},
							check(card) {
								return 7 - get.value(card);
							},
							async content(event, trigger, player) {
								event.cards.forEach((card, i) => {
									event.targets[i].addToExpansion(card, player, 'give').gaintag.add('god_ganning_fenwei_effect');
								});
								player.addSkill('god_ganning_fenwei_effect');
								player.draw(event.cards.length);
							},//QQQ
							ai: {
								order: 6.9,
								result: {
									target(player, target) {
										if (
											game.hasPlayer((current) => {
												return get.rawAttitude(player, current) > 0 && current != player && get.attitude(player, current) <= 0;
											}) &&
											game.countPlayer((current) => {
												return get.attitude(player, current) > 0;
											}) <= 2
										)
											return 0;
										return 1;
									},
								},
							},
							subSkill: {
								effect: {
									audio: 'sbfenwei',
									forced: true,
									trigger: {
										global: 'useCardToTarget',
									},
									filter(event, player) {
										return event.target.getExpansions('god_ganning_fenwei_effect').length && get.type2(event.card) == 'trick';
									},
									content() {
										'step 0';
										var choiceList = ['令' + get.translation(trigger.target) + '获得其<威>', '移去' + get.translation(trigger.target) + '的<威>,取消' + get.translation(trigger.card) + '对其的目标'];
										player
											.chooseControl()
											.set('choiceList', choiceList)
											.set('prompt', '奋威:请选择一项')
											.set('ai', () => {
												var player = _status.event.player,
													evt = _status.event.getTrigger();
												if (get.effect(evt.target, evt.card, evt.player, player) < -10) return 1;
												return 0;
											});
										('step 1');
										var cards = trigger.target.getExpansions('god_ganning_fenwei_effect');
										if (result.index == 0) {
											trigger.target.gain(cards, 'gain2', 'fromStorage');
										} else {
											trigger.target.loseToDiscardpile(cards);
											trigger.targets.remove(trigger.target);
											trigger.parent.triggeredTargets2.remove(trigger.target);
											trigger.untrigger();
										}
									},
									marktext: '威',
									intro: {
										name: '威',
										markcount: 'expansion',
										content: 'expansion',
									},
								},
							},
						},
						god_ganning_shenya: {
							audio: 'ext:RE高达/audio:1',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							juexingji: true,
							trigger: {
								player: 'dieBefore',
							},
							content() {
								'step 0';
								trigger.cancel();
								player.awakenSkill('god_ganning_shenya');
								player.reinit(player.name, 'god_shenyaganning');
								('step 1');
								player.revive();
								player.recover(3 - player.hp);
							},
						},
						god_machao_mashu: {
							audio: 'ext:RE高达/audio:1',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'shaBegin',
							},
							filter(event, player) {
								if (player.getEquip(3) || player.getEquip(4)) return true;
								return false;
							},
							content() {
								trigger.directHit = true;
							},
							mod: {
								globalFrom(from, to) {
									if (from.getEquip(3) || from.getEquip(4)) return -Infinity;
								},
								maxHandcard(player, num) {
									var a = player.countEnabledSlot(3);
									var b = player.countEnabledSlot(4);
									var c = player.countCards('e', { subtype: 'equip3' });
									var d = player.countCards('e', { subtype: 'equip4' });
									var e = a + b - c - d;
									return e + num;
								},
							},
						},
						god_machao_feizhua: {
							audio: 'ext:RE高达/audio:1',
							charlotte: true,
							superCharlotte: true,
							enable: 'phaseUse',
							filter(event, player) {
								var a = player.countCards('e', { subtype: 'equip3' });
								var b = player.countCards('e', { subtype: 'equip4' });
								if (
									game.hasPlayer(function (current) {
										return current != player && (!current.hasDisabledSlot('equip3') || !current.hasDisabledSlot('equip4'));
									})
								) {
									return (player.getStat('skill').god_machao_feizhua || 0) < a + b + 1;
								}
							},
							content() {
								'step 0';
								player.chooseTarget(get.prompt('god_machao_feizhua'), '废除一名其他角色的一个坐骑栏并获得相应的额外坐骑栏,使用牌堆中一张不为赠物的相应坐骑牌', function (card, player, target) {
									return target != player && (!target.hasDisabledSlot('equip3') || !target.hasDisabledSlot('equip4'));
								}).ai = function (target) {
									var att = get.attitude(player, target);
									return -att;
								};
								('step 1');
								if (result.targets?.length) {
									var target = result.targets[0];
									event.target = target;
									game.log(player, '对', target, '发动了【飞挝】');
									if (target.hasEnabledSlot('equip3')) {
										target.disableEquip('equip3');
										player.expandEquip(3);
										var card = get.cardPile2(function (card) {
											if (get.cardtag(card, 'gifts')) return false;
											var type = get.subtype(card);
											return target.canUse(card, target) && type == 'equip3';
										});
										if (card) player.equip(card, true);
										if (!card) player.chat('狗卡没马');
									} else {
										target.disableEquip('equip4');
										player.expandEquip(4);
										var card = get.cardPile2(function (card) {
											if (get.cardtag(card, 'gifts')) return false;
											var type = get.subtype(card);
											return target.canUse(card, target) && type == 'equip4';
										});
										if (card) player.equip(card, true);
										if (!card) player.chat('狗卡没马');
									}
								} else event.finish();
							},
						},
						god_machao_tieji: {
							audio: 'retieji',
							charlotte: true,
							superCharlotte: true,
							logTarget: 'target',
							shaRelated: true,
							trigger: {
								player: 'useCardToPlayered',
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							filter(event, player) {
								return event.card && event.card.name == 'sha';
							},
							content() {
								'step 0';
								if (!trigger.target.hasSkill('fengyin')) {
									trigger.target.addTempSkill('fengyin');
								}
								('step 1');
								var a = player.countCards('e', { subtype: 'equip3' });
								var b = player.countCards('e', { subtype: 'equip4' });
								var num = a + b;
								trigger.parent.effectCount += num;
							},
							ai: {
								ignoreSkill: true,
								skillTagFilter(player, tag, arg) {
									if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
									if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
									if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
								},
							},
						},
						god_sunquan_shengzhi: {
							audio: 'dili_shengzhi',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'useCardAfter',
							},
							filter(event, player) {
								var num = event.card.number;
								if (typeof num != 'number') return false;
								if (num <= 1) return false;
								for (let i = 2; i <= Math.sqrt(num); i++) {
									if (num % i == 0) return false;
								}
								return true;
							},
							content() {
								player.addTempSkill('god_sunquan_shengzhi_effect');
							},
							subSkill: {
								effect: {
									forced: true,
									popup: false,
									firstDo: true,
									mod: {
										cardUsable: () => Infinity,
										targetInRange: () => true,
									},
									trigger: {
										player: 'useCard1',
									},
									content() {
										if (trigger.addCount !== false) {
											trigger.addCount = false;
											player.getStat().card[trigger.card.name]--;
										}
										player.removeSkill('god_sunquan_shengzhi_effect');
									},
									mark: true,
									intro: {
										content: '使用下一张牌无距离和次数限制',
									},
								},
							},
						},
						god_sunquan_quandao: {
							audio: 'dili_quandao',
							group: ['god_sunquan_quandao_remove'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							mark: true,
							intro: {
								content(storage, player) {
									if (player.countMark('god_sunquan_quandao') < 1) return '已发动0次权道';
									else return '已发动' + player.countMark('god_sunquan_quandao') + '次权道';
								},
								markcount(storage, player) {
									if (player.countMark('god_sunquan_quandao') > 0) return player.countMark('god_sunquan_quandao');
									return 0;
								},
							},
							trigger: {
								player: 'useCard',
							},
							filter(event, player) {
								return player.countMark('god_sunquan_quandao') < player.hp;
							},
							async content(event, trigger, player) {
								var num1 = player.countCards('h', (card) => get.type(card) == 'basic'),
									num2 = player.countCards('h', (card) => get.type(card) != 'basic');
								if (num1 > num2) {
									const cards = Array.from(ui.cardPile.childNodes).filter((c) => get.type(c) != 'basic').randomGets(num1 - num2);
									player.gain(cards, 'gain2').gaintag.add('god_sunquan_quandao');
								}
								if (num1 < num2) {
									const cards = Array.from(ui.cardPile.childNodes).filter((c) => get.type(c) == 'basic').randomGets(num2 - num1);
									player.gain(cards, 'gain2').gaintag.add('god_sunquan_quandao');
								}
								player.addMark('god_sunquan_quandao');
							},//QQQ
							subSkill: {
								remove: {
									forced: true,
									trigger: {
										global: 'phaseAfter',
									},
									filter(event, player) {
										return player.countMark('god_sunquan_quandao') > 0;
									},
									content() {
										player.removeMark('god_sunquan_quandao', player.countMark('god_sunquan_quandao'));
									},
								},
							},
						},
						god_sunquan_chigang: {
							audio: 'dili_chigang',
							group: ['god_sunquan_chigang_dili', 'god_sunquan_chigang_yuheng'],
							derivation: ['god_dingfeng_duanbing', 'god_dingfeng_fenxun', 'god_dingfeng_bozhan', 'god_ganning_qixi', 'god_ganning_fenwei', 'god_huanggai_kurou', 'god_luxun_lianying', 'god_luxun_zhangcai', 'god_lvmeng_keji', 'god_sunce_liequ', 'god_xusheng_pojun'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							zhuanhuanji: true,
							mark: true,
							marktext: '☯',
							intro: {
								content(storage) {
									return '转换技,锁定技.判定阶段开始前,你取消此阶段.你获得一个额外的' + (storage ? '出牌阶段' : '摸牌阶段') + '';
								},
							},
							trigger: {
								player: 'phaseJudgeBefore',
							},
							content() {
								player.changeZhuanhuanji('god_sunquan_chigang');
								trigger.cancel();
								var next = player[player.storage.god_sunquan_chigang ? 'phaseDraw' : 'phaseUse']();
								event.next.remove(next);
								trigger.parent.next.push(next);
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (get.type(card) == 'delay') return 'zerotarget';
									},
								},
							},
							subSkill: {
								dili: {
									audio: 'dili',
									forced: true,
									keepSkill: true,
									trigger: {
										player: 'phaseBegin',
									},
									content() {
										var skill = ['god_dingfeng_duanbing', 'god_dingfeng_fenxun', 'god_dingfeng_bozhan', 'god_ganning_qixi', 'god_ganning_fenwei', 'god_huanggai_kurou', 'god_luxun_lianying', 'god_luxun_zhangcai', 'god_lvmeng_keji', 'god_sunce_liequ', 'god_xusheng_pojun'].randomGet();
										player.addAdditionalSkill('god_sunquan_chigang_dili', skill);
										game.log(player, '获得了技能:', '#g' + get.translation(skill));
									},
								},
								yuheng: {
									audio: 'yuheng',
									forced: true,
									trigger: {
										player: 'phaseEnd',
									},
									filter(event, player) {
										return player.additionalSkills.god_sunquan_chigang_dili && player.additionalSkills.god_sunquan_chigang_dili.length;
									},
									content() {
										game.log(player, '失去了技能:', '#g' + get.translation(player.additionalSkills.god_sunquan_chigang_dili));
										player.removeAdditionalSkill('god_sunquan_chigang_dili');
									},
								},
							},
						},
						god_zhangjiao_dandao: {
							audio: 'sbguidao',
							group: ['god_zhangjiao_dandao_zhoutian', 'god_zhangjiao_dandao_draw'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'phaseUseEnd',
							},
							filter(event, player) {
								return player.countCards('h') > 0;
							},
							content() {
								'step 0';
								var num = player.countCards('h');
								player.gainMaxHp(Math.floor(num / 2));
								('step 1');
								player.discard(player.getCards('h'));
								player.chat('今天上皇之气已到,天皇气生物,乃当万倍其初天地');
							},
							subSkill: {
								zhoutian: {
									audio: 'sbguidao',
									forced: true,
									mark: true,
									marktext: '道',
									intro: {
										name: '丹道',
										content: '已有#年道行',
									},
									trigger: {
										player: 'phaseBegin',
									},
									filter(event, player) {
										return !player.isHealthy();
									},
									content() {
										var num = player.maxHp - player.hp;
										player.addMark('god_zhangjiao_dandao_zhoutian', num);
										player.recover(Math.floor(num / 2));
										player.chat('古者上真睹天神食气,象之为行,乃学食气.真神来助其为治,乃游居真人腹中也.古者真仙之身,名为真人室宅耳');
									},
								},
								draw: {
									forced: true,
									trigger: {
										player: 'phaseDrawBegin2',
									},
									filter(event, player) {
										return player.countMark('god_zhangjiao_dandao_zhoutian') > 0;
									},
									content() {
										trigger.num += player.countMark('god_zhangjiao_dandao_zhoutian');
										player.chat('王者深得天意,至道住佑之,但有百吉,无有一凶事也');
									},
								},
							},
							ai: {
								threaten: 1.5,
							},
						},
						god_zhangjiao_leifa: {
							audio: 'sbleiji',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								global: 'phaseBegin',
							},
							filter(event, player) {
								return player != event.player && player.countMark('god_zhangjiao_dandao_zhoutian') > 0;
							},
							check(event, player) {
								var eff = get.damageEffect(event.player, player, player, 'thunder');
								var att = get.attitude(player, event.player);
								return eff > 0 && att < 0;
							},
							content() {
								'step 0';
								player.removeMark('god_zhangjiao_dandao_zhoutian', 1);
								player.judge(function (card) {
									var suit = card.suit;
									if (suit == 'spade' || suit == 'club') {
										return 1;
									} else {
										return -1;
									}
								});
								('step 1');
								if (result.suit == 'spade') {
									trigger.player.damage('thunder', 2, player);
								} else if (result.suit == 'club') {
									trigger.player.damage('thunder', 1, player);
									if (trigger.player.countCards('he')) {
										trigger.player.randomDiscard('he');
									}
								}
							},
						},
						god_zhangjiao_fushui: {
							audio: 'sbhuangtian',
							mode: ['identity'],
							charlotte: true,
							superCharlotte: true,
							trigger: {
								global: 'dieBefore',
							},
							filter(event, player) {
								return event.player != player && player.countMark('god_zhangjiao_dandao_zhoutian') > 11;
							},
							check(event, player) {
								return get.attitude(player, event.player) > 0;
							},
							content() {
								'step 0';
								trigger.cancel();
								player.removeMark('god_zhangjiao_dandao_zhoutian', 12);
								trigger.player.reinit(trigger.player.name, 'god_huangjindaobing');
								trigger.player.changeGroup('qun');
								if (get.mode() == 'identity') {
									var myid = player.identity;
									if (player.identity == 'zhu') {
										myid = 'zhong';
									}
									trigger.player.identity = myid;
									trigger.player.setIdentity();
								}
								('step 1');
								trigger.player.revive();
								trigger.player.recover(trigger.player.maxHp - trigger.player.hp);
							},
						},
						god_zhugeliang_bazhen: {
							audio: 'bazhen',//QQQ
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								target: 'useCardToBefore',
							},
							filter(event, player) {
								if (event.card.name != 'sha') return false;
								return true;
							},
							content() {
								trigger.cancel();
							},
							ai: {
								effect: {
									target(card, player, target) {
										if (card.name != 'sha') return;
										return 'zerotarget';
									},
								},
							},
						},
						god_zhugeliang_huoji: {
							audio: 'rehuoji',
							group: ['god_zhugeliang_huoji_buff', 'god_zhugeliang_huoji_remove'],
							charlotte: true,
							superCharlotte: true,
							init(player) {
								player.storage.god_zhugeliang_huoji = 0;
							},
							mark: true,
							intro: {
								content(storage, player, skill) {
									var a = player.countCards('h', { type: 'trick' });
									var b = a + 1;
									var c = player.storage.god_zhugeliang_huoji;
									var d = b - c;
									if (d < 0) return '剩余0次';
									var str = '剩余' + d + '次<br>';
									return str;
								},
								markcount(storage, player) {
									var a = player.countCards('h', { type: 'trick' });
									var b = a + 1;
									var c = player.storage.god_zhugeliang_huoji;
									var d = b - c;
									if (d < 0) return 0;
									return d;
								},
							},
							enable: 'chooseToUse',
							viewAs: {
								name: 'huogong',
							},
							filterCard() {
								return false;
							},
							viewAsFilter(player) {
								var a = player.countCards('h', { type: 'trick' });
								var b = a + 1;
								if (player.storage.god_zhugeliang_huoji >= b) return false;
								return true;
							},
							selectCard: -1,
							precontent() {
								player.storage.god_zhugeliang_huoji++;
							},
							hiddenCard(player, name) {
								return name == 'huogong';
							},
							prompt: '视为对一名角色使用【火攻】',
							ai: {
								fireAttack: true,
								wuxie(target, card, player, viewer, status) {
									let att = get.attitude(viewer, target),
										eff = get.effect(target, card, player, target);
									if ((status * get.attitude(viewer, player) > 0 && !player.isMad()) || status * eff * att >= 0) return 0;
									if (get.attitude(viewer, player) >= 0) return 0;
								},
								threaten(player, target) {
									return 1.6;
								},
								result: {
									player: 1,
									target: -1,
								},
								tag: {
									damage: 1,
									fireDamage: 1,
									natureDamage: 1,
									norepeat: 1,
								},
							},
							subSkill: {
								buff: {
									forced: true,
									popup: false,
									trigger: {
										player: 'huogongBegin',
									},
									content() {
										trigger.setContent(lib.skill.god_zhugeliang_huoji_buff.huogongContent);
									},
									huogongContent() {
										'step 0';
										if (target.countCards('h') == 0) {
											event.finish();
											return;
										}
										event._result = { cards: target.getCards('h').randomGets(1) };
										('step 1');
										target.showCards(result.cards).setContent(function () { });
										event.dialog = ui.create.dialog(get.translation(target) + '展示的手牌', result.cards);
										event.videoId = lib.status.videoId++;
										game.broadcast('createDialog', event.videoId, get.translation(target) + '展示的手牌', result.cards);
										game.addVideo('cardDialog', null, [get.translation(target) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
										event.card2 = result.cards[0];
										game.log(target, '展示了', event.card2);
										event._result = {};
										player
											.chooseToDiscard({ color: get.color(event.card2) }, 'he', function (card) {
												var evt = _status.event.parent;
												if (get.damageEffect(evt.target, evt.player, evt.player, 'fire') > 0) {
													return 7 - get.value(card, evt.player);
												}
												return -1;
											})
											.set('prompt', false);
										('step 2');
										if (result.bool) {
											target.damage('fire');
										} else {
											target.addTempSkill('huogong2');
										}
										event.dialog.close();
										game.addVideo('cardDialog', null, event.videoId);
										game.broadcast('closeDialog', event.videoId);
									},
								},
								remove: {
									forced: true,
									silent: true,
									trigger: {
										player: 'phaseBefore',
									},
									content() {
										var num = player.storage.god_zhugeliang_huoji;
										player.storage.god_zhugeliang_huoji -= num;
									},
								},
							},
						},
						god_zhugeliang_kanpo: {
							audio: 'rekanpo',
							group: ['god_zhugeliang_kanpo_buff', 'god_zhugeliang_kanpo_remove'],
							charlotte: true,
							superCharlotte: true,
							init(player) {
								player.storage.god_zhugeliang_kanpo = 0;
							},
							mark: true,
							intro: {
								content(storage, player, skill) {
									var a = player.countCards('h', { type: 'trick' });
									var b = a + 1;
									var c = player.storage.god_zhugeliang_kanpo;
									var d = b - c;
									if (d < 0) return '剩余0次';
									var str = '剩余' + d + '次<br>';
									return str;
								},
								markcount(storage, player) {
									var a = player.countCards('h', { type: 'trick' });
									var b = a + 1;
									var c = player.storage.god_zhugeliang_kanpo;
									var d = b - c;
									if (d < 0) return 0;
									return d;
								},
							},
							enable: 'chooseToUse',
							viewAs: {
								name: 'wuxie',
							},
							filterCard() {
								return false;
							},
							viewAsFilter(player) {
								var a = player.countCards('h', { type: 'trick' });
								var b = a + 1;
								if (player.storage.god_zhugeliang_kanpo >= b) return false;
								return true;
							},
							selectCard: -1,
							precontent() {
								player.storage.god_zhugeliang_kanpo++;
							},
							hiddenCard(player, name) {
								return name == 'wuxie';
							},
							prompt: '视为使用一张【无懈可击】',
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
							subSkill: {
								buff: {
									forced: true,
									popup: false,
									trigger: {
										player: 'useCard',
									},
									filter(event, player) {
										return event.card && event.card.name == 'wuxie';
									},
									content() {
										trigger.directHit.addArray(game.players);
									},
								},
								remove: {
									forced: true,
									silent: true,
									trigger: {
										global: 'phaseAfter',
									},
									content() {
										var num = player.storage.god_zhugeliang_kanpo;
										player.storage.god_zhugeliang_kanpo -= num;
									},
								},
							},
						},
						god_zhugeliang_cangzhuo: {
							audio: 'cangzhuo',
							group: ['god_zhugeliang_cangzhuo_buff', 'god_zhugeliang_cangzhuo_remove'],
							charlotte: true,
							superCharlotte: true,
							forced: true,
							trigger: {
								player: 'phaseDrawBegin1',
							},
							filter(event, player) {
								var cardpaidui = get.cardPile(function (card) {
									return get.type(card) == 'trick';
								});
								var cardqipaidui = get.discardPile(function (card) {
									return get.type(card) == 'trick';
								});
								return player.isAlive() && (cardpaidui || cardqipaidui);
							},//QQQ
							content() {
								'step 0';
								var cardpaidui = get.cardPile(function (card) {
									return get.type(card) == 'trick';
								});
								if (cardpaidui) {
									player.gain(cardpaidui, 'gain2').gaintag.add('god_zhugeliang_cangzhuo');
								}
								else {
									var cardqipaidui = get.discardPile(function (card) {
										return get.type(card) == 'trick';
									});
									player.gain(cardqipaidui, 'gain2').gaintag.add('god_zhugeliang_cangzhuo');
								}
								('step 1');
								var cardpaidui = get.cardPile(function (card) {
									return get.type(card) == 'trick';
								});
								if (cardpaidui) {
									player.gain(cardpaidui, 'gain2').gaintag.add('god_zhugeliang_cangzhuo');
								}
								else {
									var cardqipaidui = get.discardPile(function (card) {
										return get.type(card) == 'trick';
									});
									player.gain(cardqipaidui, 'gain2').gaintag.add('god_zhugeliang_cangzhuo');
								}
							},
							subSkill: {
								buff: {
									trigger: {
										source: 'damageBegin2',
									},
									prompt2(event, player) {
										return '是否令此伤害+' + player.countCards('h', { type: 'trick' });
									},
									filter(event, player) {
										return player != event.player;
									},
									check(event, player) {
										return get.attitude(player, event.player) <= 0;
									},
									content() {
										var a = player.countCards('h', { type: 'trick' });
										trigger.num += a;
									},
								},
								remove: {
									forced: true,
									silent: true,
									trigger: {
										player: 'phaseAfter',
									},
									content() {
										player.removeGaintag('god_zhugeliang_cangzhuo');
									},
								},
							},
							mod: {
								cardEnabled(card) {
									if (!card.cards || !card.cards.length) return;
									for (const i of card.cards) {
										if (!i.hasGaintag('god_zhugeliang_cangzhuo')) return true;
									}
									return false;
								},
								ignoredHandcard(card, player) {
									if (get.type(card, 'trick') == 'trick') {
										return true;
									}
								},
								cardDiscardable(card, player, name) {
									if (name == 'phaseDiscard' && get.type(card, 'trick') == 'trick') return false;
								},
								canBeDiscarded(card, player, target) {
									if (player != target && get.position(card) == 'h') return false;
								},
								canBeGained(card, player, target) {
									if (player != target && get.position(card) == 'h') return false;
								},
							},
						},
						god_yuejin_xiandeng: {
							audio: 'xiaoguo',
							charlotte: true,
							superCharlotte: true,
							enable: 'phaseUse',
							filter(event, player) {
								return player.countCards('h') > 1;
							},
							content() {
								'step 0';
								player
									.chooseCard('h', get.prompt('god_yuejin_xiandeng'), '请选择保留一张手牌')
									.set(
										'goon',
										(function () {
											var num = player.countCards('h') - 1;
											return (
												game.countPlayer(function (current) {
													return get.damageEffect(current, player, player) > 0;
												}) >= Math.min(3, num)
											);
										})()
									)
									.set('ai', function (card) {
										if (_status.event.goon) return Math.max(1, get.value(card));
										return 0;
									});
								('step 1');
								if (result.bool) {
									var cards = player.getCards('h', function (card) {
										return card != result.cards[0] && lib.filter.cardDiscardable(card, player, 'god_yuejin_xiandeng');
									});
									if (cards.length) {
										player.discard(cards);
										event.num = cards.length;
									} else event.finish();
								} else event.finish();
								('step 2');
								player
									.chooseTarget(true, '令一名其他角色失去所有护甲并对其造成' + num + '点伤害', function (card, player, target) {
										return player != target;
									})
									.set('ai', function (target) {
										var player = _status.event.player;
										return get.damageEffect(target, player, player);
									});
								('step 3');
								if (result.targets?.length) {
									var target = result.targets[0];
									var a = target.hujia;
									if (a > 0) {
										target.changeHujia(-a);
									}
									target.damage(num);
								}
							},
						},
						god_yuejin_kejian: {
							audio: 'xiaoguo',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							logTarget: 'target',
							trigger: {
								player: 'useCardToTargeted',
							},
							filter(event, player) {
								if (event.player == event.target || event.targets.length != 1) return false;
								return event.target.hp > player.hp;
							},
							check(event, player) {
								return get.attitude(player, event.target) <= 0;
							},
							content() {
								trigger.directHit.add(trigger.target);
								var card = trigger.card;
								if (card.name == 'sha' || (get.type(card) == 'trick' && get.tag(card, 'damage') > 0)) {
									trigger.baseDamage++;
								}
							},
							ai: {
								directHit_ai: true,
								skillTagFilter(player, tag, arg) {
									return arg && arg.target && arg.target.hp > player.hp;
								},
							},
						},
						god_yuejin_kaige: {
							audio: 'xiaoguo',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							mark: true,
							intro: {
								content(storage, player, skill) {
									var a = player.countMark('god_yuejin_kaige');
									if (a < 1) return '已发动0次【凯歌】';
									var str = '已发动' + a + '次【凯歌】<br>';
									return str;
								},
								markcount(storage, player) {
									var a = player.countMark('god_yuejin_kaige');
									if (a < 1) return 0;
									return a;
								},
							},
							trigger: {
								source: 'dieAfter',
							},
							filter(event, player, name) {
								return player.isAlive();
							},
							content() {
								'step 0';
								var num = player.countMark('god_yuejin_kaige');
								player.draw(1 + num);
								('step 1');
								player.addMark('god_yuejin_kaige');
							},
						},
						god_zhaoyun_baijin_baijin: {
							group: ['god_longhun', 'god_zhaoyun_jin_juejing', 'god_zhaoyun_yin_chongzhen', 'god_zhaoyun_yin_yajiao'],
							derivation: ['god_longhun', 'god_zhaoyun_jin_juejing', 'god_zhaoyun_yin_chongzhen', 'god_zhaoyun_yin_yajiao'],
						},
						god_zhaoyun_xuancai_xuancai: {
							group: ['god_longhun', 'god_zhaoyun_jin_juejing', 'god_zhaoyun_yin_chongzhen', 'god_zhaoyun_yin_yajiao', 'god_chendao_wanglie', 'god_chendao_baier'],
							derivation: ['god_longhun', 'god_zhaoyun_jin_juejing', 'god_zhaoyun_yin_chongzhen', 'god_zhaoyun_yin_yajiao', 'god_chendao_wanglie', 'god_chendao_baier'],
						},
						god_shenyaganning_xiansheng: {
							audio: 'ext:RE高达/audio:1',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							fixed: true,
							silent: true,
							mark: true,
							marktext: '圣',
							intro: {
								name: '显圣',
								content: '不能使用卡牌,也不能成为卡牌的目标',
							},
							trigger: {
								player: ['phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore'],
							},
							content() {
								trigger.cancel();
							},
							mod: {
								targetEnabled(card, player, target) {
									return false;
								},
								cardEnabled(card, player) {
									return false;
								},
								cardSavable(card, player) {
									return false;
								},
							},
						},
						god_shenyaganning_jixiong: {
							audio: 'ext:RE高达/audio:1',
							charlotte: true,
							superCharlotte: true,
							forced: true,
							fixed: true,
							trigger: {
								global: 'phaseBegin',
							},
							filter(event, player) {
								return player != event.player;
							},
							content() {
								'step 0';
								trigger.player.judge(function (card) {
									return card.number;
								});
								('step 1');
								event.point = result.number;
								switch (result.suit) {
									case 'heart':
										trigger.player.gainMaxHp(event.point);
										break;
									case 'diamond':
										trigger.player.draw(event.point);
										break;
									case 'club':
										trigger.player.loseHp(event.point);
										break;
									case 'spade':
										trigger.player.loseMaxHp(event.point);
										break;
								}
							},
						},
						god_huangjindaobing_fulu: {
							audio: 'ext:RE高达/audio:1',
							charlotte: true,
							superCharlotte: true,
							trigger: {
								player: 'useCard1',
							},
							filter(event, player) {
								if (event.card.name == 'sha' && !game.hasNature(event.card, 'thunder')) return true;
							},
							check(event, player) {
								var eff = 0;
								for (let i = 0; i < event.targets.length; i++) {
									var target = event.targets[i];
									var eff1 = get.damageEffect(target, player, player);
									var eff2 = get.damageEffect(target, player, player, 'thunder');
									eff += eff2;
									eff -= eff1;
								}
								return eff >= 0;
							},
							content() {
								game.setNature(trigger.card, 'thunder');
								if (get.itemtype(trigger.card) == 'card') {
									var next = game.createEvent('fulu_clear');
									next.card = trigger.card;
									event.next.remove(next);
									trigger.after.push(next);
									next.setContent(function () {
										game.setNature(card, []);
									});
								}
							},
						},
						god_huangjindaobing_zhuji: {
							audio: 'ext:RE高达/audio:1',
							charlotte: true,
							superCharlotte: true,
							logTarget: 'source',
							trigger: {
								global: 'damageBegin1',
							},
							filter(event, player) {
								return event.source && event.source.isIn() && event.hasNature('thunder');
							},
							check(event, player) {
								return get.attitude(player, event.source) > 0 && get.attitude(player, event.player) < 0;
							},
							prompt(event) {
								return get.translation(event.source) + '即将对' + get.translation(event.player) + '造成伤害,' + get.prompt('god_huangjindaobing_zhuji');
							},
							content() {
								trigger.source.judge().callback = lib.skill.god_huangjindaobing_zhuji.callback;
							},
							callback() {
								var evt = event.getParent(2);
								if (event.judgeResult.color == 'black') {
									evt._trigger.num += 2;
								} else {
									evt._trigger.source.gain(card, 'gain2');
									evt._trigger.source.draw();
								}
							},
						},
					},
					translate: {
						zhenshiwuxu: '真实无虚',
						shen_wuxian: '神∞',
						shen_wuxian_prefix: '神',
						jinglian: '精炼',
						jinglian_info: '出牌阶段限X次(X为你的体力值),你可以将两张非装备牌精炼为一张装备牌(50%的概率精炼为高达核心)',
						ronghe: '融合',
						ronghe_info: '觉醒技,你的回合内,当你装备一张宝物牌且宝物牌是高达核心时,你可以与高达核心融合使得你的武将牌替换为对应的高达并获得技能【心炉】和【解体】',
						xinlu: '心炉',
						xinlu_info: '出牌阶段,你可以将装备牌熔炼为以下效果:宝物牌,获得其上拥有的技能;武器牌,使用【杀】的次数+1;防具牌,获得1点护甲;防御马,增加1点体力上限(若你的体力值小于体力上限则改为回复1点体力);进攻马,计算与其他角色距离-1',
						jieti: '解体',
						jieti_info: '回合结束,你可以从当前高达弹出并引爆当前高达,对范围内所有角色造成X点伤害(X为【心炉】的发动次数/你攻击范围内的角色数),你将武将牌替换为<神∞>并清除所有因【心炉】获得的标记',
						shen_xiaohei: '神小黑',
						shen_xiaohei_prefix: '神',
						yinni: '隐匿',
						yinni_info: '锁定技,每轮开始时,你进行一次判定,若结果为黑色,你获得【隐匿】状态直到下回合开始;若结果为红色,你失去1点体力',
						fenmo: '粉墨',
						fenmo_info: '觉醒技,当你濒死时,你将你的武将牌替换为随机高达并将体力回复至1点,获得技能【面具】',
						mianju: '面具',
						mianju_info: '觉醒技,当你回复体力后,若你的体力值等于你的体力上限,你获得技能【粉墨】',
						regod_mokuai: '模块',
						regod_mokuai_info: '限定技(模块技),每轮游戏开始时,你可以至多获得高达对应实体的四个技能',
						regod_zhang_liao: '神文远',
						regod_zhang_liao_prefix: '神',
						regod_zhang_liao0: '先制',
						regod_zhang_liao0_info: '锁定技,每轮限一次,你的回合开始前,若你的武将牌正面朝上,你执行一个额外的回合',
						regod_yue_jin: '神文谦',
						regod_yue_jin_prefix: '神',
						regod_yue_jin0: '英烈',
						regod_yue_jin0_info: '锁定技.①当你因弃置而失去牌后,你获得1枚<烈>.②当你造成伤害时,可令此伤害+X(X为你拥有的<烈>标记数)',
						regod_yu_jin: '神文则',
						regod_yu_jin_prefix: '神',
						regod_yu_jin0: '陷陈',
						regod_yu_jin0_info: '锁定技,你的回合内,一名其他角色弃置牌后,你获得弃置的牌',
						regod_zhang_he: '神儁乂',
						regod_zhang_he_prefix: '神',
						regod_zhang_he0: '善营',
						regod_zhang_he0_info: '锁定技,回合结束时,若你本回合跳过了摸牌阶段,你摸X张牌(X为游戏轮数),若你本回合跳过了出牌阶段,你执行一个额外的出牌阶段',
						regod_xu_huang: '神公明',
						regod_xu_huang_prefix: '神',
						regod_xu_huang0: '减径',
						regod_xu_huang0_info: '锁定技.①其他角色跳过摸牌阶段后,若该角色没有<减>,你可以进行一次判定,令其获得X枚<减>(X为判定结果的点数).②其他角色摸牌阶段开始前,若该角色有<减>,其移去一枚<减>并跳过摸牌阶段',
						regod_wen_yang: '神次骞',
						regod_wen_yang_prefix: '神',
						regod_wen_yang0: '勇拒',
						regod_wen_yang0_info: '锁定技(核心技),当你获得牌/失去手牌后,若你的手牌数大于7/小于7,则你将手牌摸至七张/弃置至七张',
						regod_guan_yu: '神云长',
						regod_guan_yu_prefix: '神',
						regod_guan_yu0: '春秋',
						regod_guan_yu0_info: '锁定技(核心技),每轮开始时,你的前三张【杀】的伤害基数改为目标的体力值',
						regod_zhang_fei: '神翼德',
						regod_zhang_fei_prefix: '神',
						regod_zhang_fei0: '怒煞',
						regod_zhang_fei0_info: '锁定技(核心技),当你对其他角色造成伤害时,你可以令此伤害值+X(X为你已损失的体力值)',
						regod_ma_chao: '神孟起',
						regod_ma_chao_prefix: '神',
						regod_ma_chao0: '白虎',
						regod_ma_chao0_info: '出牌阶段(核心技),你可以弃置一张不为【杀】的手牌.若如此做,你摸一张【杀】且此【杀】不计入使用次数',
						regod_huang_zhong: '神汉升',
						regod_huang_zhong_prefix: '神',
						regod_huang_zhong0: '引箭',
						regod_huang_zhong0_info: '锁定技(核心技),当你使用普通的【杀】指定目标时,你可以令此【杀】获得以下四个效果中的其中一个(<地>:无视防具;<水>:视为冰【杀】;<风>:视为雷【杀】;<火>:视为火【杀】)',
						regod_zhao_yun: '神子龙',
						regod_zhao_yun_prefix: '神',
						regod_zhao_yun0: '常胜',
						regod_zhao_yun0_info: '锁定技(核心技),当你使用【杀】或【桃】时,你令伤害值或回复值随机+1～7',
						regod_sun_ce: '神伯符',
						regod_sun_ce_prefix: '神',
						regod_sun_ce0: '讨逆',
						regod_sun_ce0_info: '出牌阶段(核心技),你可以将任意一张牌当作【决斗】使用',
						regod_zhou_yu: '神公瑾',
						regod_zhou_yu_prefix: '神',
						regod_zhou_yu0: '借兵',
						regod_zhou_yu0_info: '锁定技(核心技),当你使用牌指定其他角色为唯一目标后,或成为其他角色使用牌的唯一目标后,你获得另一名其他角色区域里的一张牌',
						regod_lu_xun: '神伯言',
						regod_lu_xun_prefix: '神',
						regod_lu_xun0: '儒略',
						regod_lu_xun0_info: '锁定技(核心技).①当你使用一张锦囊牌时,你增加1点体力上限.②你的锦囊牌的点数视为8',
						regod_lu_su: '神子敬',
						regod_lu_su_prefix: '神',
						regod_lu_su0: '慨施',
						regod_lu_su0_info: '锁定技(核心技),当你摸牌后,你可以令一名角色将手牌摸至与你相同',
						regod_lv_meng: '神子明',
						regod_lv_meng_prefix: '神',
						regod_lv_meng0: '刮目',
						regod_lv_meng0_info: '锁定技(核心技),若你的♥️/♠️手牌数大于场上角色数,你获得以下效果:♥️:摸牌阶段多摸X张牌;♠️:当你使用【杀】时,你令伤害值+X(X为♥️/♠️手牌数与场上角色数之差)',
						regod_zhang_jiao: '神天公将军',
						regod_zhang_jiao_prefix: '神',
						regod_zhang_jiao0: '诡道',
						regod_zhang_jiao0_info: '锁定技(核心技),你的♥️️牌的花色视为♠️️,你的♦️️牌的花色视为♣️️;你的所有牌的点数均视为9',
						regod_sima_yi: '神仲达',
						regod_sima_yi_prefix: '神',
						regod_sima_yi0: '称病',
						regod_sima_yi0_info: '锁定技(核心技),当你受到伤害后,直到你的回合开始其他角色不能对你使用基本牌(若你已发动【称病】,则改为摸一张牌)',
						shijiancanyu: '时间残余',
						god_zhaoyun_jin: '赵云·金',
						god_longhun: '龙魂',
						god_longhun_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了两张黑色牌,则你弃置当前回合角色一张牌',
						god_zhaoyun_jin_juejing: '绝境',
						god_zhaoyun_jin_juejing_info: '锁定技.①你至其他角色的距离-∞;你使用牌无次数限制.②当你需要打出牌时,若牌堆有对应的牌,你视为打出此牌.③当你失去牌时,若牌堆中有相同名称的牌,你获得之(【毒】除外)',
						god_zhaoyun_yin: '赵云·银',
						god_longhun: '龙魂',
						god_longhun_info: '你可以将同花色的一至两张牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值+1.若你以此法使用了两张黑色牌,则你弃置当前回合角色一张牌',
						god_zhaoyun_yin_chongzhen: '冲阵',
						god_zhaoyun_yin_chongzhen_info: '锁定技,当你于回合外因使用或打出而失去手牌后,你获得1点护甲并摸X张牌(X为你的护甲数),你可以对当前回合角色造成1点伤害',
						god_zhaoyun_yin_yajiao: '涯角',
						god_zhaoyun_yin_yajiao_info: '锁定技,当你因【杀】造成伤害时,你可以令此伤害值+X(X为你的护甲数)',
						god_zhangfei: '张飞',
						god_zhangfei_paoxiao: '咆哮',
						god_zhangfei_paoxiao_info: '锁定技.①你使用【杀】无次数限制.②当你使用【杀】指定目标时,你令其获得一枚<裂>,当场上角色因【杀】对有<裂>的角色造成伤害时,伤害值+X(X为其武将牌上<裂>的数量)',
						god_zhangfei_nuzheng: '怒睁',
						god_zhangfei_nuzheng_info: '锁定技,当你击杀一名角色后,你可以令一名其他角色进行一次判定,若结果为♠️️,其立即死亡;若结果为其他花色,你摸X张牌(X为场上存活人数)',
						god_chendao: '陈到',
						god_chendao_wanglie: '往烈',
						god_chendao_wanglie_info: '锁定技.①出牌阶段,你使用的第一张牌无距离限制.②当你于回合内使用牌时,你令此牌不能被响应.③当你使用【杀】指定目标后,你可以令其展示所有手牌,你弃置其一种颜色的牌',
						god_chendao_baier: '白毦',
						god_chendao_baier_info: '锁定技.①你的手牌上限+X(X为你的护甲数).②当你回复体力后,你获得5点护甲',
						god_sunce: '孙策',
						god_sunce_jiang: '激昂',
						god_sunce_jiang_info: '锁定技,当一名角色使用红色牌时,你摸一张牌',
						god_sunce_liequ: '裂取',
						god_sunce_liequ_info: '①出牌阶段,你可以令一名体力上限大于1的其他角色失去1点体力上限并获得<裂取>标记,你减少1点体力上限.②你对拥有<裂取>标记的角色使用牌没有距离和次数限制.③拥有<裂取>标记的角色死亡时,你增加X点体力上限(X为其拥有的<裂取>标记数的两倍)',
						god_fanchou: '樊稠',
						god_fanchou_xingluan: '兴乱',
						god_fanchou_xingluan_info: '锁定技.①当你于出牌阶段使用的牌结算完成后,你从牌堆中随机获得一张点数为6的牌(若无牌可得,则改为获得1点护甲).②其他角色对你使用的牌结算完成后,你可以对其使用一张无距离限制的【杀】',
						god_fanchou_yangwu: '扬武',
						god_fanchou_yangwu_info: '锁定技,一名角色的回合开始时,若你的手牌中【杀】的数量小于6,则你从牌堆中获得【杀】直至手牌中【杀】的数量等于6,你获得一张装备牌并装备之',
						god_zhangliao: '张辽',
						god_zhangliao_tuxi: '突袭',
						god_zhangliao_tuxi_info: '你的回合开始时或回合结束时,你可以获得任意名其他角色的各一张牌',
						god_zhangliao_weifeng: '威风',
						god_zhangliao_weifeng_info: '锁定技,当你使用指定其他角色为目标的牌结算完成后,你令此牌的一名没有<惧>的目标角色获得一枚名称为此牌牌名的<惧>.有<惧>的角色受到伤害时,其移去<惧>,若造成伤害的牌名称和<惧>:相同,此伤害+1;不同,你获得该角色的一张牌',
						god_guojia: '郭嘉',
						god_guojia_tiandu: '天妒',
						god_guojia_tiandu_info: '当你的判定牌生效后,你可以获得之',
						god_guojia_yiji: '遗计',
						god_guojia_yiji_info: '当你受到一点伤害后,或当你失去1点体力后,你可以摸三张牌,可以将至多三张手牌分配给一名其他角色',
						god_guojia_qizuo: '奇佐',
						god_guojia_qizuo_info: '当场上有角色受到有来源的伤害后,你可以进行一次判定,若结果为红色,你可以令该角色受到1点无来源伤害或回复1点体力',
						god_miheng: '祢衡',
						god_miheng_kuangcai: '狂才',
						god_miheng_kuangcai_info: '出牌阶段开始时,你可以令你此阶段内的主动出牌时间变为15秒.若如此做,你于此阶段内使用牌无距离和次数限制,且每当你于此阶段内使用牌时,你摸一张牌且主动出牌时间-1秒.若主动出牌时间减至0,则你结束出牌阶段',
						god_miheng_shejian: '舌剑',
						god_miheng_shejian_info: '出牌阶段限一次,你可以令本回合其他角色所有技能失效.若如此做,你于此阶段内造成伤害时,你摸X张牌(X为伤害值)',
						god_caocao: '曹操',
						god_caocao_jianxiong: '奸雄',
						god_caocao_jianxiong_info: '锁定技.①其他角色受到伤害后,你获得1枚<雄>(你至多拥有5枚<雄>).②当你受到伤害时,你可以移去3枚<雄>并将伤害转移给一名其他角色.③当你受到伤害后,你摸X张牌并获得对你造成伤害的牌(X为<雄>的数量+1)',
						god_liubei: '刘备',
						god_liubei_zhaolie: '昭烈',
						god_liubei_zhaolie_info: '摸牌阶段摸牌时,你可以少摸一张牌并指定攻击范围内的一名角色.你展示牌堆顶的3张牌,将其中的非基本牌置于弃牌堆,你获得这些基本牌并对其造成X点伤害(X为其中非基本牌的数量)',
						god_liubei_shichou: '誓仇',
						god_liubei_shichou_info: '限定技,准备阶段,你可以失去1点体力上限并指定一名其他角色.本局游戏中,当你受到伤害时,改为该角色受到等量的伤害,直至该角色死亡(该角色死亡时你重置【誓仇】)',
						god_xuzhu: '许褚',
						god_xuzhu_luoyi: '裸衣',
						god_xuzhu_luoyi_info: '限定技,准备阶段,你可以废除你的防具栏.若如此做,你为伤害来源的【杀】或【决斗】造成的伤害+X(X为你的体力值)且你每弃置一张防具牌,你增加1点体力上限(若你的体力值小于体力上限则改为回复1点体力)',
						god_menghuo: '孟获',
						god_menghuo_manwang: '蛮王',
						god_menghuo_manwang_info: '锁定技.①【南蛮入侵】对你无效.②你视为所有【南蛮入侵】的伤害来源.③当有角色受到【南蛮入侵】的伤害后,你摸一张牌并回复1点体力(若你的体力值小于体力上限).④其他角色使用的【南蛮入侵】结算后进入弃牌堆时,你获得之',
						god_menghuo_panqin: '叛侵',
						god_menghuo_panqin_info: '锁定技.①当你受到伤害后,你对伤害来源造成等量的伤害.②结束阶段,你可以弃置所有手牌.若如此做,你视为使用了一张【南蛮入侵】',
						god_lukang: '陆抗',
						god_lukang_qianjie: '谦节',
						god_lukang_qianjie_info: '锁定技.①你不是其他角色拼点的合法目标.②你不是目标包含你的锦囊牌或延时锦囊牌的合法目标.③你不能被翻面.④你不能被横置.⑤出牌阶段,你可以重铸非基本牌',
						god_lukang_huairou: '怀柔',
						god_lukang_huairou_info: '锁定技,当你成为其他角色使用牌的目标时,若你有未废除的装备栏,则你可以废除一个装备栏并令此牌对你无效,你可以根据废除的装备栏获得以下效果:宝物栏,你的手牌上限+5;武器栏,使用【杀】的次数上限+1;防具栏,增加2点体力上限并回复2点体力;防御/进攻坐骑栏,其他角色至你的距离+3/你至其他角色的距离-4',
						god_luxun: '陆逊',
						god_luxun_qianxun: '谦逊',
						god_luxun_qianxun_info: '使命技.①使命:出牌阶段结束时,若你发动过【彰才】且发动过【连营】,则你增加1点体力上限,回复1点体力并获得技能【雄幕】.②失败:出牌阶段结束时,若你发动过【彰才】且未发动过【连营】,你失去1点体力上限',
						god_luxun_lianying: '连营',
						god_luxun_lianying_info: '锁定技,当你失去最后的手牌时,你将手牌摸至体力上限',
						god_luxun_zhangcai: '彰才',
						god_luxun_zhangcai_info: '出牌阶段限X次(X为你的体力上限),你可以一张基本牌重铸为非基本牌',
						god_luxun_xiongmu: '雄幕',
						god_luxun_xiongmu_info: '准备阶段,你可以获得一名其他角色的所有牌',
						god_zhugedan: '诸葛诞',
						god_zhugedan_gongao: '功獒',
						god_zhugedan_gongao_info: '锁定技.①游戏开始阶段时,你摸X张牌(X为你的体力值).②当一名角色濒死即将死亡时,你增加Y点体力上限,回复Y点体力(Y为其体力上限)',
						god_zhugedan_juyi: '举义',
						god_zhugedan_juyi_info: '使命技.①当你造成伤害时,若受伤角色有牌,其将一张牌置于你的武将牌上,称为「义」.②使命:一名角色死亡后,若你武将牌上「义」数不小于3,则你获得所有「义」并获得技能【威重】.③失败:一名角色死亡后,若你武将牌上「义」数小于3,则你移去所有「义」并获得技能【崩坏】',
						god_zhugedan_weizhong: '威重',
						god_zhugedan_weizhong_info: '锁定技,当你的体力上限增加时,你摸X张牌(X为你增加的体力上限数)',
						god_zhugedan_benghuai: '崩坏',
						god_zhugedan_benghuai_info: '锁定技,结束阶段,若你的体力不为全场最少,你需减1点体力或体力上限,摸一张牌',
						god_xusheng: '徐盛',
						god_xusheng_pojun: '破军',
						god_xusheng_pojun_info: '当你使用【杀】指定目标后,你可以将其至少1张牌置于其武将牌上.若这些牌中:有基本牌,此【杀】伤害基数改为其中基本牌的数量;有非基本牌,你摸其中非基本牌的数量的牌.其于回合结束时获得其武将牌上的这些牌(若其被你击杀,你获得其武将牌上的这些牌)',
						god_huaxiong: '华雄',
						god_huaxiong_yaowu: '耀武',
						god_huaxiong_yaowu_info: '锁定技,当你造成伤害或受到伤害后,伤害来源增加1点体力上限',
						god_huaxiong_yangwei: '扬威',
						god_huaxiong_yangwei_info: '准备阶段,你可以失去1点体力.若如此做,你摸X张牌,你本回合使用【杀】的次数上限+X且造成的伤害+X(X为你失去的体力值)',
						god_mazhong: '马忠',
						god_mazhong_fuman: '抚蛮',
						god_mazhong_fuman_info: '出牌阶段限一次,你可以将一张牌交给一名未获得过<抚蛮>牌的其他角色,每当一名获得过<抚蛮>牌的角色使用牌时,你摸一张牌、增加1点体力上限(若体力值小于体力上限则改为回复1点体力)',
						god_huanggai: '黄盖',
						god_huanggai_kurou: '苦肉',
						god_huanggai_kurou_info: '出牌阶段结束后,若你有手牌,你可以失去1点体力并将所有手牌交给一名其他角色,若如此做,你增加1点体力上限并进行一个额外的回合',
						god_huanggai_zhaxiang: '诈降',
						god_huanggai_zhaxiang_info: '锁定技.①摸牌阶段,你可以多摸X张牌.②你每回合使用的前X张牌无距离与次数限制且不能被响应(X为你已损失的体力值)',
						god_guanyu: '关羽',
						god_guanyu_wushen: '武神',
						god_guanyu_wushen_info: '锁定技.①你的红色手牌均视为【杀】.②你使用的红色【杀】无次数限制和无距离限制且不可被响应',
						god_guanyu_wuhun: '武魂',
						god_guanyu_wuhun_info: '锁定技,当你死亡时,你可以令至少一名其他角色获得【索魂】效果并进行一次判定,若其判定结果不为【桃】或【桃园结义】,则该角色死亡',
						god_zuoci: '左慈',
						god_zuoci_qianhuan: '千幻',
						god_zuoci_qianhuan_info: '锁定技,当你造成或受到伤害后,你摸X张牌并增加1点体力上限(若造成伤害是你,你回复1点体力),你随机展示(X+3)个武将技能并获得其中之一(X为伤害值)',
						god_yuji: '于吉',
						god_yuji_qianhuan: '千幻',
						god_yuji_qianhuan_info: '锁定技.①每个角色的回合限X次(X为你的体力值),你可以扣置一张手牌当作一张基本牌或普通锦囊牌使用或打出.②一名角色的判定牌生效前,你可以将判定结果改为任意花色和点数并结束此时机',
						god_dianwei: '典韦',
						god_dianwei_shuangji: '双戟',
						god_dianwei_shuangji_info: '①左戟:持有技,当你受到伤害来源不为你的伤害时,你令此伤害-1;主动技:出牌阶段,你可以移去「左戟·持有技」对一名其他角色造成1点伤害并令其获得「左戟·致残」效果(每使用一张牌时,弃置一张牌).②右戟:持有技,当你成为其他角色使用【杀】的目标后,你视为对其使用一张【杀】;主动技:出牌阶段,你可以移去「右戟·持有技」对一名其他角色造成1点伤害并令其获得「右戟·流血」效果(每个回合结束时,失去1点体力).③一名角色死亡时,若其有「左戟·致残」或「右戟·流血」效果,你收回对应的「戟」',
						god_zhangxiu: '张绣',
						god_zhangxiu_huaqiang: '花枪',
						god_zhangxiu_huaqiang_info: '锁定技,当你使用的【杀】结算完毕后,若你有手牌,你可以将一张手牌当作【杀】对任意一名角色使用',
						god_zhangxiu_chaohuang: '朝凰',
						god_zhangxiu_chaohuang_info: '锁定技,当你对一名其他角色造成伤害后,你可以进行一次判定,若结果为♣️,其再次受到一点伤害',
						god_wangyue: '王越',
						god_wangyue_yulong: '驭龙',
						god_wangyue_yulong_info: '锁定技,当你成为其他角色使用的牌的目标后,若你有<剑>,则你移去1枚<剑>并令此牌无效,你视为对该角色使用此牌',
						god_wangyue_jianming: '剑鸣',
						god_wangyue_jianming_info: '锁定技.①当你对一名其他角色造成伤害后,你获得1枚<剑>.②当你受到其他角色造成的伤害后,你失去1枚<剑>.③你使用的【杀】的伤害基数改为X(X为你拥有的<剑>标记数+1)',
						god_simayi: '司马懿',
						god_simayi_yinren: '隐忍',
						god_simayi_yinren_info: '使命技.①当你受到伤害来源不为你的伤害前,你可以弃置三张牌(不足则改为失去1点体力上限)并取消此次伤害,你获得1枚<忍>.②使命:准备阶段,若你拥有至少3枚<忍>,你获得技能【归晋】、【贪狼】.③失败:第一轮的一名角色的回合结束时,若你已受伤,则你移出游戏',
						god_simayi_guijin: '归晋',
						god_simayi_guijin_info: '①准备阶段开始时,若你未分配<魏>、<蜀>、<吴>标记,则你令三名其他角色依次获得<魏>(回合结束时失去1点体力上限)、<蜀>(获得牌后弃置一张牌)、<吴>(回合内使用一张牌后结束回合)标记.②一名角色死亡时,若其拥有<魏>、<蜀>或<吴>标记,你获得其拥有标记所对应的「贪狼」标记.③一名角色死亡后,若你拥有<魏「贪狼」>、<蜀「贪狼」>、<吴「贪狼」>标记,你将这三个标记合为<晋>标记并获得游戏胜利',
						god_simayi_tanlang: '贪狼',
						god_simayi_tanlang_info: '锁定技.①一名角色失去体力上限后,若其为<魏>标记拥有者,则你增加1点体力上限并回复1点体力.②一名角色失去卡牌后,若其为<蜀>标记拥有者,你获得其失去的卡牌.③一名角色的回合结束后,若其为<吴>标记拥有者,你进行一个额外的回合',
						god_zhangliang: '张梁',
						god_zhangliang_jijun: '集军',
						god_zhangliang_jijun_info: '锁定技.①一名角色失去卡牌后,其有36%的几率受到来源为你的1点雷属性伤害.②当你使用牌时,你获得1点护甲.③防止你即将受到的雷属性伤害,你增加X点护甲.④当你造成雷属性伤害后,你增加X点护甲(X为该雷属性伤害的伤害值)',
						god_zhangliang_fangtong: '方统',
						god_zhangliang_fangtong_info: '限定技,你的回合结束后,若你的护甲数大于等于36,你获得游戏胜利',
						god_liuqi: '刘琦',
						god_liuqi_wenji: '问计',
						god_liuqi_wenji_info: '出牌阶段限一次,你可以令一名其他角色交给你一张牌,其选择其武将牌上的一个技能并令你获得与此技能同名的技能.你于本回合内使用<问计>牌时不能被其他角色响应',
						god_liuqi_tunjiang: '屯江',
						god_liuqi_tunjiang_info: '一名角色的结束阶段,你可以摸X张牌(X为存活势力数)',
						god_yujin: '于禁',
						god_yujin_zhenjun: '镇军',
						god_yujin_zhenjun_info: '①准备阶段,你可以弃置一名角色所有牌,你与其各摸一张牌.②出牌阶段开始时,你可以将一张牌交给一名其他角色,令其选择是否使用一张不为黑色的【杀】.若其选择是,则你于此【杀】结算完成后摸1+X张牌(X为此【杀】造成的伤害总点数).若其选择否,则你对其或其攻击范围内的一名其他角色造成1点伤害',
						god_yujin_jieyue: '节钺',
						god_yujin_jieyue_info: '①结束阶段开始时,你可以将一张牌交给一名其他角色.若如此做,其选择一项:1.令你摸四张牌;2.保留一张手牌和装备区的牌,弃置其余的牌并失去1点体力上限.②其他角色的结束阶段开始时,其须交给你一张牌,你获得1点护甲(以此法至多拥有3点护甲)',
						god_yujin_yizhong: '毅重',
						god_yujin_yizhong_info: '锁定技.①其他角色使用的黑色牌对你无效.②你可以将黑色手牌当作【无懈可击】使用或打出',
						god_dingfeng: '丁奉',
						god_dingfeng_duanbing: '短兵',
						god_dingfeng_duanbing_info: '锁定技,你使用【杀】选择目标后,你令所有距离为1的其他角色成为此【杀】的目标,此【杀】对目标角色额外结算一次',
						god_dingfeng_fenxun: '奋迅',
						god_dingfeng_fenxun_info: '①出牌阶段限一次,你可以与至多X名角色进行拼点(X为你的体力上限),依次结算拼点结果:若你赢,本回合你至该角色的距离视为1并令其非锁定技失效;若你没赢,你摸一张牌,该角色摸两张牌.②你可以使用牌堆顶的一张牌进行拼点,你的拼点牌的点数+5',
						god_dingfeng_bozhan: '搏战',
						god_dingfeng_bozhan_info: '锁定技.①当你对其他角色造成伤害后,你令其获得「力竭」效果(使用或打出至多体力值数量的牌,不能使用延时锦囊牌且回合结束时失去1点体力)直到其回合结束.②一名角色失去体力后,你增加1点体力上限、回复1点体力并摸一张牌',
						god_lvmeng: '吕蒙',
						god_lvmeng_keji: '克己',
						god_lvmeng_keji_info: '锁定技.①你始终跳过弃牌阶段.②若你于本回合的出牌阶段内没有使用或打出过【杀】,则你获得X点护甲(X为你的手牌数)',
						god_lvmeng_dujiang: '渡江',
						god_lvmeng_dujiang_info: '觉醒技,准备阶段,若你的护甲不小于5,你获得技能【夺荆】',
						god_lvmeng_duojing: '夺荆',
						god_lvmeng_duojing_info: '当你使用【杀】指定目标时,你可以失去1点护甲.若如此做,本回合内使用【杀】无次数限制,令此【杀】无视防具并获得目标角色一张牌',
						god_ganning: '甘宁',
						god_ganning_qixi: '奇袭',
						god_ganning_qixi_info: '出牌阶段限X次(X为场上存活人数).若你有手牌,你可以令一名其他角色猜测你手牌中最多的花色.若其猜对,其摸一张牌,你弃置所有手牌并摸其手牌数量的牌;若其猜错,你可令其从其未选择过的花色中再次猜测,重复此流程.你弃置其区域内的Y张牌(Y为其于本次【奇袭】中猜错的次数)',
						god_ganning_fenwei: '奋威',
						god_ganning_fenwei_info: '①出牌阶段限一次,你可以将至多三张牌分别置于等量名角色的武将牌上,称为<威>,你摸等量牌.②当一名角色成为锦囊牌的目标时,若其有<威>,你须选择:1.令其获得其<威>;2.令其移去<威>,并取消此目标',
						god_ganning_shenya: '神鸦',
						god_ganning_shenya_info: '觉醒技,当你即将死亡时,你将你的武将牌替换为<神鸦>并将体力回复至3点',
						god_machao: '马超',
						god_machao_mashu: '马术',
						god_machao_mashu_info: '锁定技,你的装备区内有坐骑牌时,①你至其他角色的距离为1.②你的【杀】不可闪避.③你的手牌上限+X(X为你空置的坐骑栏的数量)',
						god_machao_feizhua: '飞挝',
						god_machao_feizhua_info: '出牌阶段限X次(X为你装备区内坐骑牌的数量+1),你可以废除一名其他角色的一个坐骑栏并获得相应的额外坐骑栏,使用牌堆中一张不为赠物的相应坐骑牌',
						god_machao_tieji: '铁骑',
						god_machao_tieji_info: '当你使用【杀】指定一名角色为目标后,你可以令该角色的非锁定技失效直到回合结束,并令此【杀】额外结算X次(X为你装备区内坐骑牌的数量)',
						god_sunquan: '孙权',
						god_sunquan_shengzhi: '圣质',
						god_sunquan_shengzhi_info: '锁定技,当你使用点数为质数的牌后,你令本回合使用的下一张牌无距离和次数限制',
						god_sunquan_quandao: '权道',
						god_sunquan_quandao_info: '锁定技,每名角色的回合限X次(X为你的体力值),当你使用牌时,若你手牌中的基本牌与非基本牌的数量之差不为0,则你将基本牌或非基本牌摸至数量较多的一种牌的数量',
						god_sunquan_chigang: '持纲',
						god_sunquan_chigang_info: '锁定技.①回合开始时,你随机获得一条<font color=#66CC00>东吴命运线·RE高达</font>(该技能于回合结束时失去).②转换技,判定阶段开始前,你取消此阶段,你获得一个额外的:阴:摸牌阶段;阳:出牌阶段',
						god_zhangjiao: '张角',
						god_zhangjiao_dandao: '丹道',
						god_zhangjiao_dandao_info: '锁定技.①出牌阶段结束时,你弃置所有手牌并增加X点体力上限(X为你弃置手牌数的一半).②回合开始时,你获得Y枚<道>并回复你已损失体力值一半的体力(Y为你已损失的体力值).③摸牌阶段,你可以多摸Z张牌(Z为你拥有的<道>标记数)',
						god_zhangjiao_leifa: '雷法',
						god_zhangjiao_leifa_info: '其他角色的回合开始时,你可以移去1枚<道>并进行一次判定,若判定结果为:♠️该角色受到2点雷属性伤害;♣️该角色受到1点雷属性伤害并随机弃置一张牌',
						god_zhangjiao_fushui: '符水',
						god_zhangjiao_fushui_info: '在身份局中,一名其他角色濒死即将死亡时,你可以移去12枚<道>.若如此做,其将武将牌替换为<黄巾道兵>,势力改为群,身份牌替换为与你一致并复活',
						god_zhugeliang: '诸葛亮',
						god_zhugeliang_bazhen: '八阵',
						god_zhugeliang_bazhen_info: '锁定技,【杀】对你无效',
						god_zhugeliang_huoji: '火计',
						god_zhugeliang_huoji_info: '①出牌阶段限X次(X为你手牌中的锦囊牌的数量+1),你可以视为使用一张【火攻】.②你使用【火攻】的作用效果改为<目标角色随机展示一张手牌A,你可以弃置一张与A颜色相同的牌,对目标造成1点火属性伤害>',
						god_zhugeliang_kanpo: '看破',
						god_zhugeliang_kanpo_info: '①每名角色的回合限X次(X为你手牌中的锦囊牌的数量+1),你可以视为使用一张【无懈可击】.②你使用的【无懈可击】不可被响应',
						god_zhugeliang_cangzhuo: '藏拙',
						god_zhugeliang_cangzhuo_info: '锁定技.①摸牌阶段开始时,你获得两张锦囊牌.②你因【藏拙①】获得的牌本回合内不能使用.③你的锦囊牌不计入手牌上限.④其他角色不能因非技能效果弃置或获得你手牌区内的牌.⑤当你对其他角色造成伤害时,你可以令此伤害+X(X为你手牌中的锦囊牌的数量)',
						god_yuejin: '乐进',
						god_yuejin_xiandeng: '先登',
						god_yuejin_xiandeng_info: '出牌阶段,若你的手牌数大于1,你可以保留一张手牌并弃置其余的牌,选择一名其他角色,令其失去所有护甲并受到X点伤害(X为你弃置的手牌数)',
						god_yuejin_kejian: '克坚',
						god_yuejin_kejian_info: '锁定技,当你使用牌指定一名其他角色为目标后,若其体力大于你,则其不可响应此牌,若此牌为【杀】或伤害类锦囊牌,则此牌伤害基数+1',
						god_yuejin_kaige: '凯歌',
						god_yuejin_kaige_info: '锁定技,当你击杀一名角色时,你摸1+X张牌(X为此前发动过【凯歌】的次数)',
						shijianxianwai: '时间线外',
						god_zhaoyun_baijin: '赵云·白金',
						god_zhaoyun_baijin_baijin: '白金',
						god_zhaoyun_baijin_baijin_info: '视为拥有赵云·金和赵云·银的技能',
						god_zhaoyun_xuancai: '赵云·炫彩',
						god_zhaoyun_xuancai_xuancai: '炫彩',
						god_zhaoyun_xuancai_xuancai_info: '视为拥有赵云·金、赵云·银和陈到的技能',
						god_qianhuanxianren: '千幻仙人',
						god_shenyaganning: '神鸦',
						god_shenyaganning_prefix: '神',
						god_shenyaganning_xiansheng: '显圣',
						god_shenyaganning_xiansheng_info: '固有技.①你始终跳过摸牌阶段、出牌阶段和弃牌阶段.②你不能使用卡牌,也不能成为卡牌的目标',
						god_shenyaganning_jixiong: '吉凶',
						god_shenyaganning_jixiong_info: '固有技,其他角色的回合开始时,其进行一次判定,并根据判定结果的花色和点数执行以下效果:♥️该角色增加X点体力上限;♦️该角色摸X张牌;♣️该角色失去X点体力;♠️该角色失去X点体力上限(X为判定结果的点数)',
						god_huangjindaobing: '黄巾道兵',
						god_huangjindaobing_fulu: '符箓',
						god_huangjindaobing_fulu_info: '当你声明使用【杀】后,若此【杀】的属性不为雷属性,你可以将此【杀】改为雷【杀】',
						god_huangjindaobing_zhuji: '助祭',
						god_huangjindaobing_zhuji_info: '当一名角色造成雷属性伤害时,你可以令其进行判定,若结果为黑色,此伤害+2;若结果为红色,该角色获得判定牌并摸一张牌',
					},
				};
				for (const i in REGod.character) {
					const info = REGod.character[i];
					if (!info.hp) {
						info.hp = 4;
					}
					if (!info.maxHp) {
						info.maxHp = 4;
					}
					info.sex = 'male';
					info.trashBin = [`ext:RE高达/image/character/${i}.jpg`];
					info.dieAudios = [`ext:RE高达/audio/${i}.mp3`];
				}
				lib.config.all.characters.add('REGod');
				lib.config.characters.add('REGod');
				lib.translate.REGod_character_config = 'RE高达';
				return REGod;
			});
			game.import('card', function () {
				var REGodcard = {
					name: 'REGodcard',
					connect: true,
					card: {
						regodcore_zhang_liao: {
							image: 'ext:RE高达/image/card/regodcore_zhang_liao.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'club',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_zhang_liao0'],
						},
						regodcore_yue_jin: {
							image: 'ext:RE高达/image/card/regodcore_yue_jin.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'club',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_yue_jin0'],
						},
						regodcore_yu_jin: {
							image: 'ext:RE高达/image/card/regodcore_yu_jin.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'club',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_yu_jin0'],
						},
						regodcore_zhang_he: {
							image: 'ext:RE高达/image/card/regodcore_zhang_he.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'club',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_zhang_he0'],
						},
						regodcore_xu_huang: {
							image: 'ext:RE高达/image/card/regodcore_xu_huang.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'club',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_xu_huang0'],
						},
						regodcore_wen_yang: {
							image: 'ext:RE高达/image/card/regodcore_wen_yang.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'club',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_wen_yang0'],
						},
						regodcore_guan_yu: {
							image: 'ext:RE高达/image/card/regodcore_guan_yu.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'diamond',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_guan_yu0'],
						},
						regodcore_zhang_fei: {
							image: 'ext:RE高达/image/card/regodcore_zhang_fei.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'diamond',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_zhang_fei0'],
						},
						regodcore_ma_chao: {
							image: 'ext:RE高达/image/card/regodcore_ma_chao.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'diamond',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_ma_chao0'],
						},
						regodcore_huang_zhong: {
							image: 'ext:RE高达/image/card/regodcore_huang_zhong.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'diamond',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_huang_zhong0'],
						},
						regodcore_zhao_yun: {
							image: 'ext:RE高达/image/card/regodcore_zhao_yun.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'diamond',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_zhao_yun0'],
						},
						regodcore_sun_ce: {
							image: 'ext:RE高达/image/card/regodcore_sun_ce.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'heart',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_sun_ce0'],
						},
						regodcore_zhou_yu: {
							image: 'ext:RE高达/image/card/regodcore_zhou_yu.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'heart',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_zhou_yu0'],
						},
						regodcore_lu_xun: {
							image: 'ext:RE高达/image/card/regodcore_lu_xun.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'heart',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_lu_xun0'],
						},
						regodcore_lu_su: {
							image: 'ext:RE高达/image/card/regodcore_lu_su.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'heart',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_lu_su0'],
						},
						regodcore_lv_meng: {
							image: 'ext:RE高达/image/card/regodcore_lv_meng.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'heart',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_lv_meng0'],
						},
						regodcore_zhang_jiao: {
							image: 'ext:RE高达/image/card/regodcore_zhang_jiao.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'spade',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_zhang_jiao0'],
						},
						regodcore_sima_yi: {
							image: 'ext:RE高达/image/card/regodcore_sima_yi.png',
							fullskill: true,
							type: 'equip',
							subtype: 'equip5',
							cardcolor: 'spade',
							enable: true,
							toself: true,
							content() {
								if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
							},
							ai: {
								basic: {
									equipValue: 99,
								},
							},
							skills: ['regod_sima_yi0'],
						},
					},
					translate: {
						regodcore_zhang_liao: '文远核心',
						regodcore_zhang_liao_info: '你的回合开始前,若你的武将牌正面朝上,你执行一个额外的回合',
						regodcore_yue_jin: '文谦核心',
						regodcore_yue_jin_info: '①当你因弃置而失去牌后,你获得1枚<烈>.②当你造成伤害时,可令此伤害+X(X为你拥有的<烈>标记数)',
						regodcore_yu_jin: '文则核心',
						regodcore_yu_jin_info: '你的回合内,一名其他角色弃置牌后,你获得弃置的牌',
						regodcore_zhang_he: '儁乂核心',
						regodcore_zhang_he_info: '回合结束时,若你本回合跳过了摸牌阶段,你摸X张牌(X为游戏轮数),若你本回合跳过了出牌阶段,你执行一个额外的出牌阶段',
						regodcore_xu_huang: '公明核心',
						regodcore_xu_huang_info: '①其他角色跳过摸牌阶段后,若该角色没有<减>,你可以进行一次判定,令其获得X枚<减>(X为判定结果的点数).②其他角色摸牌阶段开始前,若该角色有<减>,其移去一枚<减>并跳过摸牌阶段',
						regodcore_wen_yang: '次骞核心',
						regodcore_wen_yang_info: '当你获得牌/失去手牌后,若你的手牌数大于7/小于7,则你将手牌摸至七张/弃置至七张',
						regodcore_guan_yu: '云长核心',
						regodcore_guan_yu_info: '每轮开始时,你的前三张【杀】的伤害基数改为目标的体力值',
						regodcore_zhang_fei: '翼德核心',
						regodcore_zhang_fei_info: '当你对其他角色照成伤害时,你令伤害值+X(X为你已损失的体力值)',
						regodcore_ma_chao: '孟起核心',
						regodcore_ma_chao_info: '你可以弃置一张不为【杀】的手牌,若如此做,你摸一张【杀】且此【杀】不计入使用次数',
						regodcore_huang_zhong: '汉升核心',
						regodcore_huang_zhong_info: '当你使用普通的【杀】指定目标时,你可以令此【杀】获得以下四个效果中的其中一个(<地>:无视防具;<水>:视为冰【杀】;<风>:视为雷【杀】;<火>:视为火【杀】)',
						regodcore_zhao_yun: '子龙核心',
						regodcore_zhao_yun_info: '当你使用【杀】或【桃】时,你令伤害值或回复值随机增加1～7',
						regodcore_sun_ce: '伯符核心',
						regodcore_sun_ce_info: '你可以将任意一张牌当作【决斗】使用',
						regodcore_zhou_yu: '公瑾核心',
						regodcore_zhou_yu_info: '当你使用牌指定其他角色为唯一目标后,或成为其他角色使用牌的唯一目标后,你获得另一名其他角色区域里的一张牌',
						regodcore_lu_xun: '伯言核心',
						regodcore_lu_xun_info: '①当你使用一张锦囊牌时,你增加1点体力上限.②你的锦囊牌的点数视为8',
						regodcore_lu_su: '子敬核心',
						regodcore_lu_su_info: '当你摸牌后,你可以令一名角色将手牌摸至与你相同',
						regodcore_lv_meng: '子明核心',
						regodcore_lv_meng_info: '若你的♥️/♠️手牌数大于场上角色数,你获得以下效果:♥️:摸牌阶段多摸X张牌;♠️:当你使用【杀】时,你令伤害值+X(X为♥️/♠️手牌数与场上角色数之差)',
						regodcore_zhang_jiao: '天公将军核心',
						regodcore_zhang_jiao_info: '你的♥️️牌的花色视为♠️️,你的♦️️牌的花色视为♣️️;你的所有牌的点数均视为9',
						regodcore_sima_yi: '仲达核心',
						regodcore_sima_yi_info: '当你受到伤害后,直到你的回合开始其他角色不能对你使用基本牌(若你已发动【称病】,则改为摸一张牌)',
					},
				};
				lib.translate.REGodcard_card_config = 'RE高达';
				lib.config.all.cards.add('REGodcard');
				lib.config.cards.add('REGodcard');
				return REGodcard;
			});
		},
		config: {
			Qc: {
				name: '清除技能',
				intro: '登场后可以清除技能',
				init: 'off',
				item: {
					qt: '其他角色',
					wj: '玩家',
					sy: '所有角色',
					off: '关闭',
				},
			},
			Sztl: {
				name: '设置体力',
				intro: '设置场上角色的体力值',
				init: 'off',
				item: {
					yb: '100',
					es: '20',
					off: '关闭',
				},
			},
			Thgd: {
				name: '醍醐灌顶',
				intro: '每轮开始时可获得一个技能',
				init: 'off',
				item: {
					qt: '其他角色',
					wj: '玩家',
					sy: '所有角色',
					off: '关闭',
				},
			},
		},
		package: {
			intro: '<br><br><span style="color: gold">潜水的火修复版<br>『无名杀扩展大全群』:771901025</span><br><br><font color=#FFA500><RE高达>是2020年发布的<高达宇宙>的重制版,如今推翻过去数值怪的思路,设计了更有趣的机制:每个高达都由核心技与模块技组成;模块技其实也就是高达技能的主要来源,例如在游戏中选择【神子龙】这个高达,会在每轮游戏开始时弹出选项,选择获得武将名称包含【赵云】的武将的至多四个技能,这代表着你装的扩展越多,可能享受的技能多样性就越多.<br><font color=#0000FF>RE高达还添加了两位技能与其他【高达】互动的武将,强度偏高,但有着自己独特的乐趣,具体的,还需要你亲自探索.<br><font color=#ABCDEF>v0.92版武将共计63位,其中【RE高达】20位,【时间残余】38位,【时间线外】5位.<br><font color=#FFFFFF>关注微信公众号<无名杀扩展交流>,获取最新版本.</font>',
			author: '∞',
			version: '0.92',
		},
	};
});
